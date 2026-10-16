#!/usr/bin/env python3
"""Prepare locally; explicitly run/resume paid two-model batches. No database credentials.

python run_pair_validation.py prepare --tier 1 --run-dir validation/run_priority1
nohup python -u run_pair_validation.py run --run-dir validation/run_priority1 > validation/run_priority1/run.log 2>&1 &

Requires pandas for preparation, openai/anthropic SDKs for run. API keys come from the
usual OPENAI_API_KEY and ANTHROPIC_API_KEY environment variables. No keys are saved.
"""
from pathlib import Path
import argparse, csv, datetime, fcntl, gzip, hashlib, json, os, time
import validation_core as v

HERE=Path(__file__).resolve().parent

def atomic(path,data):
    p=Path(path);tmp=p.with_name(p.name+'.partial');tmp.write_text(json.dumps(data,indent=2));os.replace(tmp,p)
def sha(path):return hashlib.sha256(Path(path).read_bytes()).hexdigest()
def stamp():return datetime.datetime.now(datetime.timezone.utc).isoformat()

def prepare(a):
    import pandas as pd
    source=Path(a.package);run=Path(a.run_dir);run.mkdir(parents=True,exist_ok=True)
    if (run/'manifest.json').exists():raise RuntimeError('Run already prepared. Use run to resume it, or choose a new run directory.')
    if not 1<=a.batch_size<=10000:raise ValueError('batch-size must be 1..10000')
    selected=[];used=0;ledger=None
    if a.applied:
        applied=Path(a.applied);qa=json.loads((applied/'APPLY_QA.json').read_text())
        if sha(applied/'decision_ledger.csv.gz')!=qa['ledger_sha256']:raise RuntimeError('Consolidated ledger hash does not match its QA record')
        ledger=pd.read_csv(applied/'decision_ledger.csv.gz',usecols=['pair_id','anthropic_verdict','openai_verdict'],keep_default_na=False).set_index('pair_id')
    for x in pd.read_csv(source/'pending_pairs.csv.gz',chunksize=100000,dtype={'occ8':str,'pair_id':str}):
        x=x[x.metadata_ready & x.priority_tier.le(a.tier)]
        if ledger is not None:
            for provider in v.MODELS:x[provider+'_pending']=~x.pair_id.map(ledger[provider+'_verdict']).isin(['YES','NO'])
            x=x[x.anthropic_pending|x.openai_pending]
        if a.limit:x=x.head(max(0,a.limit-used))
        if len(x):selected.append(x);used+=len(x)
        if a.limit and used>=a.limit:break
    if not selected:raise RuntimeError('No eligible pending pairs for this selection')
    data=pd.concat(selected,ignore_index=True);assert data.pair_id.is_unique
    occ=pd.read_csv(source/'occupation_metadata.csv',keep_default_na=False).set_index('occ8').to_dict('index')
    tasks=pd.read_csv(source/'task_metadata.csv',keep_default_na=False).set_index('task_id').task_text.to_dict()
    prior=pd.read_csv(source/'prior_responses.csv.gz',keep_default_na=False)
    prior_prompts=prior.drop_duplicates('pair_id').set_index('pair_id').prompt.to_dict()
    jobs=[]
    for provider in v.MODELS:
        sub=data[data[provider+'_pending']]
        for batch_i,start in enumerate(range(0,len(sub),a.batch_size),1):
            path=run/f'{provider}_{batch_i:04d}_requests.jsonl'
            ids=[]
            with path.open('w') as f:
                for row in sub.iloc[start:start+a.batch_size].to_dict('records'):
                    ctx=dict(row,**occ[row['occ8']],task_text=tasks[row['task_id']]);req=v.request(ctx,provider)
                    if row['pair_id'] in prior_prompts:
                        # Complete pairs are absent from the queue; this reuses the exact prompt for an incomplete provider.
                        body=req['params'] if provider=='anthropic' else req['body'];body['messages'][0]['content']=prior_prompts[row['pair_id']]
                    f.write(json.dumps(req,ensure_ascii=False)+'\n');ids.append(row['pair_id'])
            assert path.stat().st_size<100*1024**2
            jobs.append({'provider':provider,'file':path.name,'sha256':sha(path),'n_requests':len(ids),'state':'prepared'})
    data.to_csv(run/'selected_pairs.csv',index=False)
    # Seed only existing attempts for this selected subset, including the valid partner of an incomplete review.
    seeds=prior[prior.pair_id.isin(data.pair_id)].to_dict('records')
    if ledger is not None:
        for row in data.to_dict('records'):
            for provider in v.MODELS:
                verdict=ledger.loc[row['pair_id'],provider+'_verdict']
                if verdict in ['YES','NO']:
                    seeds.append({'pair_id':row['pair_id'],'provider':provider,'model_id':v.MODELS[provider],
                      'model_version':v.EXPECTED_RETURNED[provider],'prompt_version':v.VERSION,'parsed_verdict':verdict,'usable':True,
                      'seed_source':'verified consolidated ledger '+qa['ledger_sha256']})
    pd.DataFrame(seeds,columns=list(prior.columns)+['seed_source']).to_csv(run/'prior_selected_responses.csv',index=False)
    manifest={'prepared_at':stamp(),'prompt_version':v.VERSION,'models':v.MODELS,'expected_returned_models':v.EXPECTED_RETURNED,
      'temperature':0,'max_tokens':16,'n_pairs':len(data),'tier_max':a.tier,'jobs':jobs,'package_qa_sha256':sha(source/'QA.json'),
      'selection_sha256':sha(run/'selected_pairs.csv'),'no_calls_during_preparation':True,
      'consolidated_ledger_sha256':qa['ledger_sha256'] if ledger is not None else None}
    atomic(run/'manifest.json',manifest)
    print(json.dumps({'n_pairs':len(data),'requests':{p:sum(j['n_requests'] for j in jobs if j['provider']==p) for p in v.MODELS},'n_batches':len(jobs),'run_dir':str(run)},indent=2))

def collect(client,provider,batch,run,job):
    request_path=run/job['file'];expected={json.loads(x)['custom_id'] for x in request_path.read_text().splitlines()}
    requests={r['custom_id']:r for r in map(json.loads,request_path.read_text().splitlines())}
    rawpath=run/job['file'].replace('_requests.jsonl','_raw_results.jsonl')
    tmp=rawpath.with_name(rawpath.name+'.partial')
    with tmp.open('w') as f:
        if provider=='anthropic':
            for item in client.messages.batches.results(batch.id):f.write(item.model_dump_json()+'\n')
        else:
            for fid in [batch.output_file_id,batch.error_file_id]:
                if fid:
                    for line in client.files.content(fid).text.splitlines():
                        if line.strip():f.write(line+'\n')
    os.replace(tmp,rawpath)
    results=[];seen=set()
    for line in rawpath.read_text().splitlines():
        obj=json.loads(line);pid=obj['custom_id']
        if pid not in expected or pid in seen:raise RuntimeError('Unexpected/duplicate custom_id in batch results: '+pid)
        seen.add(pid);row=v.read_result(provider,obj)
        body=requests[pid]['params'] if provider=='anthropic' else requests[pid]['body']
        row['prompt_hash']=v.prompt_hash(v.MODELS[provider],body['messages'][0]['content']);row['batch_id']=batch.id
        results.append(row)
    for pid in sorted(expected-seen):
        results.append({'pair_id':pid,'provider':provider,'model_id':v.MODELS[provider],'prompt_version':v.VERSION,'parsed_verdict':'ERROR','usable':False,
          'error_detail':'No returned record for requested pair','model_version':None,'batch_id':batch.id})
    atomic(run/job['file'].replace('_requests.jsonl','_normalized_results.json'),results)
    return {'n_returned':len(seen),'n_usable':sum(x['usable'] for x in results),'n_retry_or_review':sum(not x['usable'] for x in results)}

def finish(run,manifest):
    import pandas as pd
    selected=pd.read_csv(run/'selected_pairs.csv',dtype={'pair_id':str});rows=[]
    prior=pd.read_csv(run/'prior_selected_responses.csv',keep_default_na=False)
    for r in prior.to_dict('records'):
        r['usable']=str(r['usable']).lower()=='true';rows.append(r)
    for job in manifest['jobs']:
        rows.extend(json.loads((run/job['file'].replace('_requests.jsonl','_normalized_results.json')).read_text()))
    good={};errors=[]
    for r in rows:
        key=(r['pair_id'],r['provider'])
        if r['usable']:
            if key in good and good[key]!=r['parsed_verdict']:raise RuntimeError('Conflicting reusable judgments for '+str(key))
            good[key]=r['parsed_verdict']
        else:errors.append(r)
    for p in v.MODELS:selected[p+'_verdict']=selected.pair_id.map(lambda x:good.get((x,p)))
    selected['review_status']=[v.decision(False,a,b) for a,b in zip(selected.anthropic_verdict,selected.openai_verdict)]
    # pandas missing values must not masquerade as completed NO reviews.
    complete=selected.anthropic_verdict.isin(['YES','NO'])&selected.openai_verdict.isin(['YES','NO'])
    selected.loc[~complete,'review_status']='review_incomplete'
    selected.to_csv(run/'reviewed_pairs.csv',index=False)
    selected[~complete].to_csv(run/'retry_pairs.csv',index=False)
    atomic(run/'response_errors.json',errors)
    report={'finished_at':stamp(),'n_pairs':len(selected),'complete_pairs':int(complete.sum()),'incomplete_pairs':int((~complete).sum()),
      'unanimous_yes':int(selected.review_status.eq('reviewed_yes').sum()),'not_retained':int(selected.review_status.eq('reviewed_not_retained').sum()),
      'status':'COMPLETE' if complete.all() else 'NEEDS_REVIEW_OR_RETRY'}
    atomic(run/'result_summary.json',report)
    if complete.all():atomic(run/'COMPLETE.json',report)
    print(json.dumps(report,indent=2),flush=True)

def run_batches(a):
    run=Path(a.run_dir);mp=run/'manifest.json';manifest=json.loads(mp.read_text())
    if manifest['models']!=v.MODELS or manifest['prompt_version']!=v.VERSION:raise RuntimeError('Settings changed since preparation')
    if sha(run/'selected_pairs.csv')!=manifest['selection_sha256']:raise RuntimeError('Selection changed since preparation')
    from openai import OpenAI
    from anthropic import Anthropic
    # Avoid automatic POST resubmissions after an uncertain batch-creation response.
    clients={'openai':OpenAI(max_retries=0),'anthropic':Anthropic(max_retries=0)}
    with (run/'runner.lock').open('w') as lock:
        fcntl.flock(lock,fcntl.LOCK_EX|fcntl.LOCK_NB)
        while True:
            for provider in v.MODELS:
                jobs=[j for j in manifest['jobs'] if j['provider']==provider and j['state']!='collected']
                if not jobs:continue
                job=jobs[0];client=clients[provider];path=run/job['file']
                if sha(path)!=job['sha256']:raise RuntimeError('Prepared requests changed')
                if job['state'] in ['submission_started','submission_uncertain']:
                    raise RuntimeError('Previous submission outcome is uncertain. Reconcile the batch ID in the provider console; do not submit this file again blindly: '+job['file'])
                if job['state']=='prepared':
                    if provider=='openai' and not job.get('input_file_id'):
                        with path.open('rb') as f:up=client.files.create(file=f,purpose='batch')
                        job['input_file_id']=up.id;atomic(mp,manifest)
                    job['state']='submission_started';job['submitted_at']=stamp();atomic(mp,manifest)
                    try:
                        if provider=='openai':
                            batch=client.batches.create(input_file_id=job['input_file_id'],endpoint='/v1/chat/completions',completion_window='24h',metadata={'description':'occupation-task plausibility v2 '+job['file']})
                        else:batch=client.messages.batches.create(requests=[json.loads(x) for x in path.read_text().splitlines()])
                    except Exception:
                        job['state']='submission_uncertain';atomic(mp,manifest);raise
                    job['batch_id']=batch.id;job['state']='submitted';atomic(mp,manifest)
                    print(stamp(),provider,'submitted',batch.id,job['n_requests'],'requests',flush=True)
                batch=client.batches.retrieve(job['batch_id']) if provider=='openai' else client.messages.batches.retrieve(job['batch_id'])
                status=batch.status if provider=='openai' else batch.processing_status
                job['last_remote_status']=status;job['checked_at']=stamp();atomic(mp,manifest)
                print(stamp(),provider,job['file'],status,flush=True)
                if status in ['completed','failed','expired','cancelled','ended']:
                    job.update(collect(client,provider,batch,run,job));job['state']='collected';atomic(mp,manifest)
            if all(j['state']=='collected' for j in manifest['jobs']):break
            time.sleep(a.poll_seconds)
        finish(run,manifest)

if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__);sub=p.add_subparsers(dest='command',required=True)
    q=sub.add_parser('prepare');q.add_argument('--package',default=str(HERE/'validation'));q.add_argument('--run-dir',required=True);q.add_argument('--tier',type=int,choices=[1,2,3],default=1);q.add_argument('--limit',type=int);q.add_argument('--batch-size',type=int,default=5000);q.add_argument('--applied',help='Verified apply_pair_reviews output; skip its completed provider judgments')
    q=sub.add_parser('run');q.add_argument('--run-dir',required=True);q.add_argument('--poll-seconds',type=int,default=60)
    a=p.parse_args();prepare(a) if a.command=='prepare' else run_batches(a)
