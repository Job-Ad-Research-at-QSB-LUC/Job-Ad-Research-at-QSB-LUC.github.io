"""Inventory exact pairs and prepare pending review. No API calls; other projects read-only."""
from pathlib import Path
import ast, hashlib, json, sqlite3, sys
import numpy as np
import pandas as pd
import duckdb
import validation_core as v

HERE=Path(__file__).resolve().parent;ROOT=HERE.parents[1];PROJECT=ROOT.parent/'usajobs_lmi';SITE=ROOT.parent/'us-lmi'
OUT=HERE/'validation';OUT.mkdir(exist_ok=True)

def sha(p):
    h=hashlib.sha256()
    with Path(p).open('rb') as f:
        for b in iter(lambda:f.read(2**20),b''):h.update(b)
    return h.hexdigest()

def main():
    source=PROJECT/'etl/run_llm_as_judge_onet_occ_pairs.py'
    tree=ast.parse(source.read_text());constants={}
    for n in tree.body:
        if isinstance(n,ast.Assign) and isinstance(n.targets[0],ast.Name):
            try:constants[n.targets[0].id]=ast.literal_eval(n.value)
            except (ValueError,TypeError):pass
    assert constants['PROMPT_TEMPLATE']==v.PROMPT_TEMPLATE
    assert constants['PROMPT_VERSION']==v.VERSION and constants['DEFAULT_MODELS']==v.MODELS
    (OUT/'settings.json').write_text(json.dumps({'models':v.MODELS,'expected_returned_models':v.EXPECTED_RETURNED,'prompt_version':v.VERSION,'temperature':0,'max_tokens':16,
        'prompt_template':v.PROMPT_TEMPLATE,'source_runner':str(source),'source_sha256':sha(source),
        'historical_cache_hash_omits_temperature':'Only reuse rows explicitly stamped with the v2 prompt version and valid verdicts.',
        'canonical_rule':'Canonical exact pairs are automatically retained; both judges must say YES for novel pairs.'},indent=2))
    db=duckdb.connect(str(PROJECT/'usajobs_v4.duckdb'),read_only=True)
    occ=db.execute('SELECT * FROM Occupations').fetchdf();assert occ.occ8.is_unique
    tasks=db.execute('SELECT * FROM OnetTaskStatements').fetchdf();assert tasks.task_id.is_unique
    local=pd.read_csv(ROOT/'crosswalks/onet_task_statements_27_2.csv')
    assert tasks.set_index('task_id').task_text.sort_index().equals(local.set_index('task_id').task_text.sort_index())
    occ.to_csv(OUT/'occupation_metadata.csv',index=False);tasks.to_csv(OUT/'task_metadata.csv',index=False)
    print('Read exact original occupation descriptions and task statements.',flush=True)
    # Counts are aggregate mentions, preserving the source procedure; no job identifiers leave DuckDB.
    print('Aggregating unfiltered USAJobs and NLx pair pools...',flush=True)
    uj=db.execute('''SELECT b.title_code AS occ8, CAST(t.task_id AS BIGINT) AS task_id, COUNT(*) AS usajobs_mentions
      FROM JaatTasks t JOIN JaatBase b USING (usajobsControlNumber)
      WHERE b.title_code IS NOT NULL AND t.task_id IS NOT NULL GROUP BY 1,2''').fetchdf()
    nl=db.execute('''SELECT occ8,CAST(task_id AS BIGINT) AS task_id,SUM(task_count)::BIGINT AS uslmi_nlx_mentions
      FROM NLX_job_tasks_Occ8 WHERE occ8 IS NOT NULL AND task_id IS NOT NULL
      AND month_start BETWEEN DATE '2015-09-01' AND DATE '2025-09-30' GROUP BY 1,2''').fetchdf();db.close()
    pool=uj.merge(nl,on=['occ8','task_id'],how='outer',validate='one_to_one')
    cur=pd.read_csv(ROOT/'data/release/occupation_task_marginals.csv.gz').rename(columns={'occupational_code':'occ8','n_jobs_with_task':'current_raw_jobs','weighted_jobs_with_task':'current_weighted_jobs'})
    tot=pd.read_csv(ROOT/'data/release/occupation_totals.csv').rename(columns={'occupational_code':'occ8'}).set_index('occ8')
    cur['current_prevalence']=cur.current_weighted_jobs/cur.occ8.map(tot.weighted_jobs)
    cur['current_rank']=cur.groupby('occ8').current_weighted_jobs.rank(method='min',ascending=False)
    legacy=pd.read_csv(ROOT/'crosswalks/job_tasks_Occ8.tsv',sep='\t',usecols=['occ8','task_id','task_rank','task_count'])
    legacy=legacy.groupby(['occ8','task_id'],as_index=False).agg(legacy_mentions=('task_count','sum'),legacy_min_rank=('task_rank','min'))
    pool=pool.merge(cur,on=['occ8','task_id'],how='outer',validate='one_to_one').merge(legacy,on=['occ8','task_id'],how='outer',validate='one_to_one')
    display=[]
    for stem in ['AGGR_OccupationTaskSignatures','CMP_NlxOccupationTaskFingerprint']:
        found=list((SITE/'data').rglob(stem+'.parquet'));assert len(found)==1
        display.append(pd.read_parquet(found[0])[['occ8','task_id']])
    display=pd.concat(display).drop_duplicates();display['in_uslmi_display']=True
    pool=pool.merge(display,on=['occ8','task_id'],how='outer',validate='one_to_one')
    pool['task_id']=pool.task_id.astype('int64');pool['occ8']=pool.occ8.astype(str)
    assert not pool[['occ8','task_id']].duplicated().any()
    pool['pair_id']=[v.pair_id(o,t) for o,t in zip(pool.occ8,pool.task_id)];assert pool.pair_id.is_unique
    canonical=pd.MultiIndex.from_frame(tasks[['occ8','task_id']])
    pool['canonical']=pd.MultiIndex.from_frame(pool[['occ8','task_id']]).isin(canonical)
    pool['task_home']=pool.task_id.map(tasks.set_index('task_id').occ8)
    for n in [2,4,6]:
        a=pool.occ8.str.replace(r'[^0-9]','',regex=True).str[:n];b=pool.task_home.str.replace(r'[^0-9]','',regex=True).str[:n]
        pool[f'task_home_same_soc{n}']=a.eq(b)
    cache=PROJECT/'data/llm_as_judge_onet_occ_pairs_cache.sqlite'
    c=sqlite3.connect('file:'+str(cache)+'?mode=ro',uri=True)
    hist=pd.read_sql_query('SELECT * FROM responses WHERE model_id IN (?,?) AND prompt_version=?',c,params=[*v.MODELS.values(),v.VERSION]);c.close()
    assert not hist[['occ8','task_id','model_id']].duplicated().any()
    hist['usable']=hist.parsed_verdict.isin(['YES','NO'])&hist.error_detail.fillna('').eq('')
    assert set(hist.model_version.dropna())==set(v.EXPECTED_RETURNED.values())
    # Reconcile cached prompt text across judges and against original metadata. Stop on discrepancies.
    assert hist.groupby('pair_id').prompt.nunique().max()==1
    text=tasks.set_index('task_id').task_text.to_dict();titles=occ.set_index('occ8').soc_title.to_dict();desc=occ.set_index('occ8').soc_description.to_dict()
    conflicts=[]
    for r in hist.drop_duplicates('pair_id').itertuples():
        expected=v.prompt(dict(occ8=r.occ8,soc_title=titles.get(r.occ8,''),soc_description=desc.get(r.occ8,''),task_text=text.get(r.task_id,'')))
        if expected!=r.prompt:conflicts.append({'pair_id':r.pair_id,'occ8':r.occ8,'task_id':r.task_id,'cached_prompt':r.prompt,'rebuilt_prompt':expected})
    pd.DataFrame(conflicts,columns=['pair_id','occ8','task_id','cached_prompt','rebuilt_prompt']).to_csv(OUT/'prior_prompt_conflicts.csv',index=False)
    # Preserve exact prior prompts if a historical batch used differing text; exclude rejudging completed pairs anyway.
    hist[['pair_id','occ8','task_id','provider','model_id','model_version','prompt_version','parsed_verdict','usable','prompt_hash','prompt','error_detail']].to_csv(OUT/'prior_responses.csv.gz',index=False)
    for provider,model in v.MODELS.items():
        h=hist[hist.model_id.eq(model)].set_index('pair_id')
        pool[provider+'_attempted']=pool.pair_id.isin(h.index)
        pool[provider+'_verdict']=pool.pair_id.map(h.parsed_verdict)
        valid=pool.pair_id.map(h.usable).fillna(False).astype(bool)
        pool[provider+'_pending']=~valid
    a=pool.anthropic_verdict;b=pool.openai_verdict
    complete=~pool.anthropic_pending&~pool.openai_pending
    pool['review_status']=np.select([pool.canonical,complete&a.eq('YES')&b.eq('YES'),complete,pool.anthropic_attempted|pool.openai_attempted],
        ['canonical_retained','reviewed_yes','reviewed_not_retained','review_incomplete'],default='unreviewed')
    pool['metadata_ready']=pool.occ8.isin(titles)&pool.task_id.isin(text)
    for name in ['usajobs_mentions','uslmi_nlx_mentions','current_raw_jobs','network_core_node','legacy_mentions']:
        pool[name]=pool[name].fillna(0).astype('int64')
    pool['in_uslmi_display']=pool.in_uslmi_display.fillna(False).astype(bool)
    case_path=OUT/'case_priority_pairs.csv'
    case_keys=set()
    if case_path.exists():
        case_keys=set(pd.read_csv(case_path)[['occ8','task_id']].itertuples(index=False,name=None))
    pool['in_case_review']=[(o,t) in case_keys for o,t in zip(pool.occ8,pool.task_id)]
    # Explicitly rank two distinct corpora by within-occupation shares, not by adding raw volumes.
    for name in ['usajobs_mentions','uslmi_nlx_mentions']:
        pool[name+'_share']=pool[name]/pool.groupby('occ8')[name].transform('sum').replace(0,np.nan)
    pool['priority_tier']=np.select([
        pool.network_core_node.gt(0)|pool.current_rank.le(20)|pool.in_uslmi_display|pool.in_case_review,
        pool.current_raw_jobs.ge(5)|pool.usajobs_mentions.ge(100)|pool.uslmi_nlx_mentions.ge(100)|pool.legacy_min_rank.le(20)], [1,2],default=3)
    pool['priority_score']=pool[['current_prevalence','usajobs_mentions_share','uslmi_nlx_mentions_share']].max(axis=1).fillna(0)
    # Read-only website exports should exactly agree with the cache on completed source reviews.
    checks=[]
    for batch,suffix in [('rca',''),('volume','_volume'),('random','_random'),('null','_null')]:
        d=pd.read_csv(SITE/'downloads/occupation-task-pairs'/f'llm_as_judge_onet_occ_pairs{suffix}_reviewed.csv')
        for provider,col in [('anthropic','claude_sonnet_4_6_verdict'),('openai','gpt_4o_verdict')]:
            h=hist[hist.provider.eq(provider)].set_index('pair_id').parsed_verdict
            expected=d.pair_id.map(h);valid=d[col].isin(['YES','NO'])
            assert d.loc[valid,col].eq(expected[valid]).all()
        checks.append({'batch':batch,'n_exported_pairs':len(d),'cache_verdicts_match':True})
    pd.DataFrame(checks).to_csv(OUT/'prior_export_reconciliation.csv',index=False)
    pending=pool[~pool.canonical&~complete].sort_values(['priority_tier','priority_score','occ8','task_id'],ascending=[True,False,True,True]).copy()
    pending['never_previously_attempted']=~pending.anthropic_attempted&~pending.openai_attempted
    pool.to_csv(OUT/'pair_inventory.csv.gz',index=False)
    queuecols=['pair_id','occ8','task_id','priority_tier','priority_score','metadata_ready','never_previously_attempted','anthropic_pending','openai_pending',
      'current_raw_jobs','current_weighted_jobs','current_prevalence','current_rank','network_core_node','usajobs_mentions','uslmi_nlx_mentions','legacy_mentions','legacy_min_rank','in_uslmi_display','in_case_review','task_home','task_home_same_soc2','task_home_same_soc4','review_status']
    pending[queuecols].to_csv(OUT/'pending_pairs.csv.gz',index=False)
    pending[~pending.metadata_ready][queuecols].to_csv(OUT/'metadata_holds.csv',index=False)
    known=pool[pool.review_status.isin(['reviewed_not_retained','review_incomplete'])].copy()
    known[['occ8','task_id','review_status','anthropic_verdict','openai_verdict','current_raw_jobs','current_weighted_jobs','usajobs_mentions','uslmi_nlx_mentions']].to_csv(OUT/'existing_exclusion_mask.csv',index=False)
    by=pool.groupby(['priority_tier','review_status'],as_index=False).agg(n_pairs=('pair_id','size'),current_incidence=('current_weighted_jobs','sum'),usajobs_mentions=('usajobs_mentions','sum'),nlx_mentions=('uslmi_nlx_mentions','sum'))
    by.to_csv(OUT/'inventory_summary.csv',index=False)
    website=next((SITE/'data/jaat/AGGR_JaatOccupationTaskUniverse').rglob('*.parquet'))
    site_total=int(pd.read_parquet(website).occupation_task_pairs.sum())
    source_union=int((pool.usajobs_mentions.gt(0)|pool.uslmi_nlx_mentions.gt(0)).sum())
    assert source_union==site_total, (source_union,site_total)
    summary=[]
    for tier,g in pending.groupby('priority_tier'):
        ready=g[g.metadata_ready]
        summary.append(dict(priority_tier=int(tier),n_pairs=len(g),ready_pairs=len(ready),metadata_holds=int((~g.metadata_ready).sum()),
            never_previously_attempted=int(g.never_previously_attempted.sum()),anthropic_requests=int(ready.anthropic_pending.sum()),openai_requests=int(ready.openai_pending.sum()),
            current_incidence=float(ready.current_weighted_jobs.sum()),usajobs_mentions=int(ready.usajobs_mentions.sum()),nlx_mentions=int(ready.uslmi_nlx_mentions.sum())))
    pd.DataFrame(summary).to_csv(OUT/'queue_summary.csv',index=False)
    # A small ready-to-inspect sample includes exact prompt inputs; full text is assembled lazily by the runner.
    sample=pending[pending.metadata_ready].head(100).merge(occ,on='occ8').merge(tasks[['task_id','task_text']],on='task_id')
    sample.to_csv(OUT/'first_100_pairs_with_text.csv',index=False)
    report={'status':'PASS','n_union_pairs':len(pool),'n_current_pairs':len(cur),'n_usajobs_pairs':len(uj),'n_nlx_2015sep_2025sep_pairs':len(nl),'n_legacy_all_year_pairs':len(legacy),
      'n_canonical_pairs':int(pool.canonical.sum()),'n_prior_complete_pairs_in_union':int(complete.sum()),'n_prior_cache_pairs':hist.pair_id.nunique(),
      'n_pending_noncanonical':len(pending),'n_pending_never_attempted':int(pending.never_previously_attempted.sum()),'n_metadata_holds':int((~pending.metadata_ready).sum()),
      'n_prior_prompt_metadata_conflicts':len(conflicts),'same_prompt_template_models_settings_verified':True,'no_API_calls':True,'queue_tiers':summary,
      'uslmi_public_universe_reconciles':True,'uslmi_public_universe_pairs':site_total,
      'input_hashes':{str(p):sha(p) for p in [source,cache,ROOT/'data/release/occupation_task_marginals.csv.gz',ROOT/'crosswalks/job_tasks_Occ8.tsv']}}
    (OUT/'QA.json').write_text(json.dumps(report,indent=2));print(json.dumps(report,indent=2),flush=True)

if __name__=='__main__':main()
