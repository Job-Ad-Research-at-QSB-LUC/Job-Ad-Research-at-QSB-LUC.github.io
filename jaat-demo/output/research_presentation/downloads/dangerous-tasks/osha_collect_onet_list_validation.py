"""Collect original-list reviews without conflating pending, negative, and confirmed."""
import collections
import json
from pathlib import Path
from prepare_incident_corpus import sha256

STATUSES={'supported_incident_activity','partial_incident_activity','not_confirmed_in_reviewed_examples','unusable_source'}
ROLES={'affected_worker','other_worker_directly_involved','unclear','none'}


def validate(row,packet):
    if row.get('task_id')!=packet['task_id'] or row.get('status') not in STATUSES:
        raise ValueError('Unknown task ID/status')
    examples={e['summary_nr']:e for e in packet['examples']}
    inspected=row.get('inspected_summary_nrs')
    if not isinstance(inspected,list) or len(set(inspected))!=len(inspected) or not set(inspected)<=set(examples):
        raise ValueError('Invalid inspected reports')
    if not row.get('rationale','').strip() or row.get('actor_role') not in ROLES:
        raise ValueError('Missing rationale/role')
    if row.get('incident_link_type','direct') not in {'direct','workflow_context_only'}:
        raise ValueError('Unknown incident link type')
    if row['status'] in {'supported_incident_activity','partial_incident_activity'}:
        sid=row.get('evidence_summary_nr')
        if sid not in inspected:raise ValueError('Evidence not inspected')
        if examples[sid].get('corpus_status','').startswith('quarantined'):
            raise ValueError('Quarantined narrative cannot establish positive evidence')
        for field in ['activity_quote','incident_quote']:
            quote=row.get(field,'')
            if not quote or quote not in examples[sid]['narrative']:raise ValueError(f'Invalid {field}')
        if row['status']=='supported_incident_activity' and row.get('incident_link_type','direct')=='direct' and row['actor_role'] not in {'affected_worker','other_worker_directly_involved'}:
            raise ValueError('Full positive evidence needs incident actor')
    if row['status']!='supported_incident_activity' and set(inspected)!=set(examples):
        raise ValueError('Decision without full support requires all packet examples')


def release_status(first,second):
    if first is None:return 'awaiting_task_level_review'
    if second is not None:
        if first['status']!=second['status']:return 'review_disagreement'
        if first['status']=='supported_incident_activity':
            if any(r.get('incident_link_type')=='workflow_context_only' for r in [first,second]):
                return 'ai_confirmed_task_mention_context_only'
            return 'ai_confirmed_incident_activity'
    if first['status']=='supported_incident_activity':return 'first_pass_supported_pending_confirmation'
    return first['status']


def adjudicated_status(first,second,recommendation,resolution):
    """Resolve a preserved disagreement; promotion needs two new supporting checks."""
    if release_status(first,second)!='review_disagreement':
        raise ValueError('Adjudication requires a prior disagreement')
    if recommendation is None:
        raise ValueError('Adjudication resolution requires third review')
    if resolution['status']=='supported_incident_activity':
        if recommendation['status']!='supported_incident_activity':
            raise ValueError('Adjudicated promotion requires supporting third review')
        return release_status(recommendation,resolution)
    return resolution['status']


def packet_for(row,packets,preferred,curated=None):
    version=row.get('packet_version','initial')
    if version not in {'initial','preferred','curated'}:raise ValueError('Unknown packet version')
    source={'initial':packets,'preferred':preferred,'curated':curated or {}}[version]
    if row['task_id'] not in source:raise ValueError('Missing source packet')
    return source[row['task_id']]


def load_reviews(paths,packets,preferred=None,curated=None):
    result={}
    for path in paths:
        for row in json.loads(path.read_text()):
            tid=row['task_id']
            if tid in result or tid not in packets:raise ValueError(f'Duplicate/unexpected review {tid}')
            validate(row,packet_for(row,packets,preferred or {},curated));result[tid]=row
    return result


def effective_reviews(initial,followup):
    """Select strongest reviewed presence evidence; preserve original decisions."""
    def strength(row):
        base={'unusable_source':0,'not_confirmed_in_reviewed_examples':1,
              'partial_incident_activity':2,'supported_incident_activity':3}[row['status']]
        return base, row.get('incident_link_type','direct')=='direct'
    result=dict(initial)
    for tid,row in followup.items():
        if tid not in initial:raise ValueError('Followup without initial review')
        if strength(row)>strength(initial[tid]):result[tid]=row
    return result


def main():
    import pandas as pd
    root=Path('results/onet_list_validation')
    packets={r['task_id']:r for r in json.loads((root/'task_packets.json').read_text())}
    preferred_path=root/'preferred_task_packets.json'
    preferred={r['task_id']:r for r in json.loads(preferred_path.read_text())} if preferred_path.exists() else {}
    curated_path=root/'curated_task_packets.json'
    curated_packets={r['task_id']:r for r in json.loads(curated_path.read_text())} if curated_path.exists() else {}
    for tid,p in [*preferred.items(),*curated_packets.items()]:
        if tid not in packets or p['historical_description']!=packets[tid]['historical_description']:
            raise ValueError('Preferred packets changed original task identity')
    first_paths=sorted((root/'reviews').glob('shard_*.json'))
    second_paths=sorted((root/'reviews').glob('confirmation_*.json'))
    followup_paths=sorted((root/'reviews').glob('followup_*.json'))
    initial=load_reviews(first_paths,packets,preferred)
    followup=load_reviews(followup_paths,packets,preferred)
    if any(initial.get(t,{}).get('status')=='supported_incident_activity' for t in followup):
        raise ValueError('Supplemental review is reserved for initially unresolved tasks')
    curated_paths=sorted((root/'reviews').glob('curated_*.json'))
    curated_reviews=load_reviews(curated_paths,packets,preferred,curated_packets)
    if any(initial.get(t,{}).get('status')=='supported_incident_activity' for t in curated_reviews):
        raise ValueError('Curated rescue is reserved for initially unresolved tasks')
    first=effective_reviews(effective_reviews(initial,followup),curated_reviews)
    second=load_reviews(second_paths,packets,preferred,curated_packets)
    if not set(second)<=set(first):raise ValueError('Confirmation without first pass')
    recommendation_path=root/'adjudication_recommendations.json'
    resolution_path=root/'adjudication_resolutions.json'
    adjudication_paths=[p for p in [recommendation_path,resolution_path] if p.exists()]
    recommendations=load_reviews([recommendation_path],packets,preferred,curated_packets) if recommendation_path.exists() else {}
    resolutions=load_reviews([resolution_path],packets,preferred,curated_packets) if resolution_path.exists() else {}
    for tid,resolution in resolutions.items():
        adjudicated_status(first.get(tid),second.get(tid),recommendations.get(tid),resolution)
    rows=[];evidence=[]
    for tid,p in packets.items():
        a=first.get(tid);b=second.get(tid);status=release_status(a,b)
        prior_status=status;resolution=resolutions.get(tid);recommendation=recommendations.get(tid)
        release_reviews=[('first_pass',a),('confirmation',b)]
        if resolution:
            status=adjudicated_status(a,b,recommendation,resolution)
            a=resolution
            release_reviews=[('adjudication_recommendation',recommendation),('adjudication_resolution',resolution)]
        source_packet=packet_for(a,packets,preferred,curated_packets) if a else p
        row={'task_id':tid,'historical_description':p['historical_description'],
             'official_description':p['official_description'],'original_rank':p['original_rank'],
             'identity_status':p['identity_status'],'historical_n_investigations':p['historical_n_investigations'],
             'packet_examples':len(source_packet['examples']),'semantic_status':status,
             'pre_adjudication_status':prior_status,
             'adjudication_status':resolution['status'] if resolution else '',
             'adjudication_rationale':resolution['rationale'] if resolution else '',
             'curated_review_status':curated_reviews[tid]['status'] if tid in curated_reviews else '',
             'curated_rationale':curated_reviews[tid]['rationale'] if tid in curated_reviews else '',
             'initial_review_status':initial[tid]['status'] if tid in initial else '',
             'followup_review_status':followup[tid]['status'] if tid in followup else '',
             'followup_rationale':followup[tid]['rationale'] if tid in followup else '',
             'all_inspected_examples':len(set(initial[tid]['inspected_summary_nrs']) | set(followup.get(tid,{}).get('inspected_summary_nrs',[])) | set(curated_reviews.get(tid,{}).get('inspected_summary_nrs',[])) | set(second.get(tid,{}).get('inspected_summary_nrs',[])) | set((recommendation or {}).get('inspected_summary_nrs',[])) | set((resolution or {}).get('inspected_summary_nrs',[]))) if tid in initial else 0,
             'first_review_packet_version':first[tid].get('packet_version','initial') if tid in first else '',
             'evidence_packet_version':a.get('packet_version','initial') if a else '',
             'inspected_examples':len(a['inspected_summary_nrs']) if a else 0,
             'evidence_summary_nr':a.get('evidence_summary_nr','') if a else '',
             'activity_quote':a.get('activity_quote','') if a else '',
             'incident_quote':a.get('incident_quote','') if a else '',
             'actor_role':a.get('actor_role','') if a else '',
             'incident_link_type':('workflow_context_only' if any(r and r.get('incident_link_type')=='workflow_context_only' for _,r in release_reviews) else 'direct') if a else '',
             'rationale':a.get('rationale','') if a else '',
             'confirmation_rationale':b.get('rationale','') if b else ''}
        rows.append(row)
        if status in {'ai_confirmed_incident_activity','ai_confirmed_task_mention_context_only'}:
            for label,r in release_reviews:
                evidence_packet=packet_for(r,packets,preferred,curated_packets)
                ex=next(e for e in evidence_packet['examples'] if e['summary_nr']==r['evidence_summary_nr'])
                evidence.append({'task_id':tid,'historical_description':p['historical_description'],
                                 'identity_status':p['identity_status'],'review_stage':label,**r,
                                 'final_semantic_status':status,'incident_link_type':r.get('incident_link_type','direct'),
                                 'final_incident_link_type':row['incident_link_type'],
                                 'discovered_while_reviewing_task_id':ex.get('discovered_while_reviewing_task_id',''),
                                 'source_task_retrieval_score':ex.get('source_task_retrieval_score',''),
                                 'narrative':ex['narrative'],'corpus_status':ex['corpus_status'],
                                 'narrative_sha256':ex['text_sha256']})
    df=pd.DataFrame(rows);df.to_csv(root/'inventory.csv',index=False)
    confirmed=df[df.semantic_status.eq('ai_confirmed_incident_activity')]
    confirmed.to_csv(root/'ai_confirmed_historical_tasks.csv',index=False)
    df[df.semantic_status.eq('ai_confirmed_task_mention_context_only')].to_csv(root/'ai_confirmed_context_only_mentions.csv',index=False)
    current=confirmed[confirmed.identity_status.eq('exact_id_and_description')]
    current.to_csv(root/'ai_confirmed_onet30_tasks.csv',index=False)
    (root/'ai_confirmed_onet30_ids.txt').write_text(''.join(t+'\n' for t in current.task_id))
    pd.DataFrame(evidence,columns=list(dict.fromkeys(['task_id','historical_description','identity_status','review_stage','status','final_semantic_status','inspected_summary_nrs','evidence_summary_nr','activity_quote','incident_quote','actor_role','incident_link_type','final_incident_link_type','rationale','review_type','packet_version','discovered_while_reviewing_task_id','source_task_retrieval_score','narrative','corpus_status','narrative_sha256']))).to_csv(root/'confirmed_evidence.csv',index=False)
    manifest={'original_tasks':len(packets),'first_pass_reviewed':len(first),'confirmation_reviewed':len(second),'followup_reviewed':len(followup),'curated_reviewed':len(curated_reviews),
              'adjudication_recommendations':len(recommendations),'adjudication_resolved':len(resolutions),
              'status_counts':dict(collections.Counter(df.semantic_status)),
              'confirmed_historical_ids':len(confirmed),'confirmed_exact_onet30_ids':len(current),
              'first_pass_and_positive_confirmation_complete':len(first)==len(packets) and not df.semantic_status.isin(['first_pass_supported_pending_confirmation','review_disagreement']).any(),
              'interpretation':'AI-reviewed evidence presence in inspected reports. Not human validation, exhaustive absence, task injury rate, or validated frequency of historical matches.',
              'inputs':{str(p):sha256(p) for p in [root/'task_packets.json',root/'review_protocol.md',*([preferred_path] if preferred_path.exists() else []),*([curated_path] if curated_path.exists() else []),*first_paths,*followup_paths,*curated_paths,*second_paths,*adjudication_paths]},
              'script_sha256':sha256(__file__)}
    (root/'review_summary.json').write_text(json.dumps(manifest,indent=2)+'\n')
    print(json.dumps({k:v for k,v in manifest.items() if k!='inputs'},indent=2))

if __name__=='__main__':main()
