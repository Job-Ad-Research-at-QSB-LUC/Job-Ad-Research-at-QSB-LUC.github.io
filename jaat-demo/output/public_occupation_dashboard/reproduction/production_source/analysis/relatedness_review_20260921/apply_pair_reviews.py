#!/usr/bin/env python3
"""Combine prior and new judgments, then export masks and a clearly partial local release.

No change to source releases, website, or main report. Complete bundle reaggregation
must run on the server using the exported exact-pair exclusion mask.
"""
from pathlib import Path
import argparse,json,hashlib,shutil
import numpy as np
import pandas as pd
import validation_core as v
P=Path(__file__).resolve().parent;ROOT=P.parents[1]

def file_sha(p):
    h=hashlib.sha256()
    with Path(p).open('rb') as f:
        for b in iter(lambda:f.read(2**20),b''):h.update(b)
    return h.hexdigest()

def filtered(frame,blocked,occupation='occupational_code',task='task_id'):
    return frame[~pd.MultiIndex.from_frame(frame[[occupation,task]]).isin(blocked)].copy()

def main(a):
    out=Path(a.output_dir);out.mkdir(parents=True,exist_ok=True)
    prior=pd.read_csv(P/'validation/prior_responses.csv.gz',keep_default_na=False)
    good={};attempted=set()
    for r in prior.to_dict('records'):
        k=(r['pair_id'],r['provider']);attempted.add(k)
        if str(r['usable']).lower()=='true':good[k]=r['parsed_verdict']
    checks=[]
    for dirname in a.run_dir:
        run=Path(dirname);m=json.loads((run/'manifest.json').read_text())
        assert m['models']==v.MODELS and m['prompt_version']==v.VERSION and m['temperature']==0 and m['max_tokens']==16
        assert file_sha(run/'selected_pairs.csv')==m['selection_sha256']
        for j in m['jobs']:
            rp=run/j['file'];assert file_sha(rp)==j['sha256']
            raw=run/j['file'].replace('_requests.jsonl','_raw_results.jsonl')
            if j['state']!='collected':continue
            expected={json.loads(x)['custom_id'] for x in rp.read_text().splitlines()};seen=set()
            for line in raw.read_text().splitlines():
                r=v.read_result(j['provider'],json.loads(line));pid=r['pair_id'];assert pid in expected and pid not in seen;seen.add(pid)
                k=(pid,j['provider']);attempted.add(k)
                if r['usable']:
                    if k in good and good[k]!=r['parsed_verdict']:raise RuntimeError('Conflicting completed judgments: '+str(k))
                    good[k]=r['parsed_verdict']
        checks.append({'run_dir':str(run),'manifest_sha256':file_sha(run/'manifest.json'),'all_batches_collected':all(j['state']=='collected' for j in m['jobs'])})
    inv=pd.read_csv(P/'validation/pair_inventory.csv.gz',usecols=['pair_id','occ8','task_id','canonical','metadata_ready'])
    for provider in v.MODELS:
        inv[provider+'_verdict']=[good.get((pid,provider)) for pid in inv.pair_id]
    ca=inv.anthropic_verdict;cg=inv.openai_verdict;complete=ca.isin(['YES','NO'])&cg.isin(['YES','NO'])
    anyattempt=np.array([any((pid,p) in attempted for p in v.MODELS) for pid in inv.pair_id])
    inv['review_status']=np.select([inv.canonical,complete&ca.eq('YES')&cg.eq('YES'),complete,anyattempt],
       ['canonical_retained','reviewed_yes','reviewed_not_retained','review_incomplete'],default='unreviewed')
    inv.to_csv(out/'decision_ledger.csv.gz',index=False)
    excluded=inv[inv.review_status.isin(['reviewed_not_retained','review_incomplete'])]
    excluded[['occ8','task_id','review_status','anthropic_verdict','openai_verdict']].to_csv(out/'exclusion_mask.csv',index=False)
    inv[~inv.canonical&~complete&inv.metadata_ready].to_csv(out/'remaining_pairs.csv.gz',index=False)
    blocks=pd.MultiIndex.from_frame(excluded[['occ8','task_id']]);changed=[]
    if a.materialize_local:
        src=Path(a.release_dir);dest=out/'partial_release';dest.mkdir(exist_ok=True)
        names=['occupation_task_marginals.csv.gz','occupation_pairs_support50.csv.gz','case_core_pairs_complete.csv','case_core_sector_pairs_complete.csv.gz']
        names += [p.name for p in src.glob('task_incidence_*.csv.gz')]
        for name in names:
            frame=pd.read_csv(src/name);before=len(frame)
            if 'task_id' in frame:keep=filtered(frame,blocks)
            else:
                keep=filtered(frame.rename(columns={'task_a':'task_id'}),blocks).rename(columns={'task_id':'task_a'})
                keep=filtered(keep.rename(columns={'task_b':'task_id'}),blocks).rename(columns={'task_id':'task_b'})
            keep.to_csv(dest/name,index=False);changed.append({'file':name,'before_rows':before,'after_rows':len(keep),'sha256':file_sha(dest/name)})
        for name in ['occupation_totals.csv','sampling_allocation.csv']:shutil.copyfile(src/name,dest/name)
        (dest/'NOT_A_COMPLETE_RELEASE.md').write_text('Only task marginals and existing pair records are filtered. Original job denominators are retained. Bundle signatures, equal-job means, zero-task counts, global pairs and replacement complete case grids require server reaggregation. Do not pass this directory to run_current_release.py or label it a full report refresh.\n')
    summary={'status':'MASK_READY_LOCAL_RELEASE_PARTIAL' if a.materialize_local else 'MASK_READY','new_runs':checks,
        'state_counts':inv.review_status.value_counts().to_dict(),'mask_sha256':file_sha(out/'exclusion_mask.csv'),'ledger_sha256':file_sha(out/'decision_ledger.csv.gz'),
        'materialized_files':changed,'all_pending_pairs_reviewed':bool((inv.canonical|complete|~inv.metadata_ready).all()),
        'unreviewed_policy':'Retained in partial sensitivity; not called validated. Incomplete reviews separately quarantined.',
        'server_reaggregation_required_for_complete_report':True}
    (out/'APPLY_QA.json').write_text(json.dumps(summary,indent=2));print(json.dumps(summary,indent=2))

if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('--run-dir',action='append',default=[]);p.add_argument('--output-dir',required=True)
    p.add_argument('--materialize-local',action='store_true');p.add_argument('--release-dir',default=str(ROOT/'data/release'))
    main(p.parse_args())
