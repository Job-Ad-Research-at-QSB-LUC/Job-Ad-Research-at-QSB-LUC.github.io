"""Prepare task-level evidence packets for the original list; never infer support."""
import json
from pathlib import Path
import pandas as pd
from prepare_incident_corpus import sha256


def main():
    root=Path('results/task_evidence_v1');out=Path('results/onet_list_validation');out.mkdir(exist_ok=True)
    original=pd.read_csv('results/dangerous_tasks.csv',dtype={'task_id':str},keep_default_na=False)
    audit=pd.read_csv(root/'historical_onet_task_candidates.csv',dtype={'task_id':str},keep_default_na=False).set_index('task_id')
    examples=pd.read_parquet(root/'historical_task_examples.parquet')
    narratives=pd.read_parquet(root/'narratives.parquet').set_index('summary_nr')
    narratives.index=narratives.index.astype(str)
    assert original.task_id.is_unique
    packets=[]
    groups={str(k):g for k,g in examples.groupby('task_id')}
    for rank,row in enumerate(original.to_dict('records'),1):
        tid=row['task_id'];a=audit.loc[tid];ev=[]
        for e in groups.get(tid,pd.DataFrame()).to_dict('records'):
            sid=str(e['summary_nr']);n=narratives.loc[sid]
            ev.append({'summary_nr':sid,'historical_sentence_nr':str(e['sentence_nr']),
                       'historical_matched_sentence':e['sentences'],'narrative':n['text'],
                       'corpus_status':n['status'],'text_sha256':n['text_sha256']})
        packets.append({'task_id':tid,'original_rank':rank,'historical_description':row['description'],
                        'official_description':a['task_description'] if a['identity_status']!='not_in_pinned_inventory' else '',
                        'identity_status':a['identity_status'],'historical_n_investigations':int(a['n_investigations']),
                        'examples':ev})
    (out/'task_packets.json').write_text(json.dumps(packets,ensure_ascii=False,indent=2)+'\n')
    for i in range(3):
        shard=packets[i::3]
        (out/f'shard_{i+1}.json').write_text(json.dumps(shard,ensure_ascii=False,indent=2)+'\n')
    pd.DataFrame([{'task_id':p['task_id'],'original_rank':p['original_rank'],
                   'historical_description':p['historical_description'],'identity_status':p['identity_status'],
                   'historical_n_investigations':p['historical_n_investigations'],'packet_examples':len(p['examples']),
                   'semantic_status':'awaiting_task_level_review'} for p in packets]).to_csv(out/'inventory.csv',index=False)
    manifest={'tasks':len(packets),'examples':sum(len(p['examples']) for p in packets),
              'selection':'Up to first five distinct investigations retained by historical audit; not exhaustive or probability sampled',
              'inputs':{str(p):sha256(p) for p in [Path('results/dangerous_tasks.csv'),root/'historical_onet_task_candidates.csv',root/'historical_task_examples.parquet',root/'narratives.parquet']},
              'script_sha256':sha256(__file__)}
    (out/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n');print(json.dumps(manifest,indent=2))

if __name__=='__main__':main()
