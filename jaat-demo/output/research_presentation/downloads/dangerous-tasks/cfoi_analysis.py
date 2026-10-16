"""Exploratory CFOI association; no production inputs or websites are modified.
Run from any directory with Python, pandas, numpy, scipy and openpyxl.
Updated bundle: all reviewed O*NET 27.2 tasks; specifications otherwise unchanged: reviewed 610-task
bundle, production-filtered profiles, 2024 disjoint non-major CFOI groups,
Spearman correlation of bundle incidence share versus official assignment share.
"""
from pathlib import Path
import re,json,hashlib
import pandas as pd
import numpy as np
from scipy.stats import spearmanr,pearsonr,rankdata
P=Path(__file__).resolve().parent; R=P.parents[1]
inputs=[R/'data/release/occupation_task_marginals.csv.gz',R/'analysis/relatedness_refresh_20260922/validation/reconciled_prior_decisions.csv',R/'crosswalks/onet_task_statements_27_2.csv',R/'output/research_presentation/downloads/dangerous-tasks/dangerous_tasks.csv',R/'analysis/occupation_relatedness/results/similarity_matrices.npz']
x=pd.read_csv(inputs[0]); review=pd.read_csv(inputs[1]).rename(columns={'occ8':'occupational_code'})
x=x.merge(review[['occupational_code','task_id','review_status']],how='left',on=['occupational_code','task_id'],validate='one_to_one')
codes=np.load(inputs[4])['codes']
x=x[x.occupational_code.isin(codes)&x.n_jobs_with_task.ge(5)&~x.review_status.isin(['reviewed_not_retained','review_incomplete'])].copy()
assert len(x)==527378, len(x)
o=pd.read_csv(inputs[2]).drop_duplicates(['occ8','task_id']); b=pd.read_csv(inputs[3])
# IDs must carry the same task text as the profile taxonomy; audit differences.
norm=lambda s: re.sub(r'\s+',' ',str(s).strip()).casefold()
t=o.drop_duplicates('task_id').set_index('task_id').task_text
b['present_in_onet27']=b.task_id.isin(t.index)
b['same_text']=b.apply(lambda r:r.task_id in t.index and norm(r.task_description)==norm(t.loc[r.task_id]),axis=1)
b.to_csv(P/'task_coverage.csv',index=False)
valid=set(b.loc[b.same_text,'task_id']); original=set(pd.read_csv(R/'output/research_presentation/downloads/dangerous-tasks/inventory.csv').task_id)&set(t.index)
x['soc6']=x.occupational_code.str[:7];o['soc6']=o.occ8.str[:7]
# Only matched SOC6s enter either representation, including within aggregated groups.
common=set(x.soc6)&set(o.soc6)
all_soc=set(x.soc6)|set(o.soc6)
def expand(code):
    found=set()
    for c in code.split(','):
        c=c.strip(); prefix=c.rstrip('0') if c.endswith('0') else c
        found|={s for s in all_soc if s.startswith(prefix)}
    return found
rows=[]
for year in [2024,2023]:
    path=P/'inputs'/f'fatal-occupational-injuries-hours-based-rates-{year}.xlsx';inputs.append(path)
    raw=pd.read_excel(path,header=None)
    start=raw.index[raw[1].astype(str).str.startswith('Occupation code')][0]
    end=raw.index[(raw.index>start)&raw[1].astype(str).str.startswith('Industry code')][0]
    seen={'detailed':set(),'major':set()}
    for _,z in raw.iloc[start+1:end].iterrows():
        code=str(z[1]).strip()
        if not re.fullmatch(r'\d{2}-\d{4}(?:,\s*\d{2}-\d{4})*',code):continue
        level='major' if code.endswith('-0000') else 'detailed'
        members=expand(code); assert not(seen[level]&members),code
        seen[level]|=members; use=members&common
        a=x[x.soc6.isin(use)]; c=o[o.soc6.isin(use)]
        if a.empty or c.empty:continue
        rec=dict(year=year,level=level,code=code,title=z[0],rate=float(z[3]),moe=float(z[4]),hours_millions=z[2],soc6_count=len(use),soc6_codes=';'.join(sorted(use)),unmatched_soc6=';'.join(sorted(members-common)),posting_cells=len(a),onet_links=len(c))
        for label,bundle in [('reviewed',valid),('original',original)]:
            # Posting primary: share of design-weighted task incidences.
            rec[label+'_posting_weighted']=a.loc[a.task_id.isin(bundle),'weighted_jobs_with_task'].sum()/a.weighted_jobs_with_task.sum()
            # Equal measurement sensitivity: union of distinct tasks in each group.
            rec[label+'_posting_unique']=len(set(a.task_id)&bundle)/a.task_id.nunique()
            rec[label+'_onet_unique']=len(set(c.task_id)&bundle)/c.task_id.nunique()
            # Link shares preserve repeated assignments across occupation specialties.
            rec[label+'_posting_links']=a.task_id.isin(bundle).mean()
            rec[label+'_onet_links']=c.task_id.isin(bundle).mean()
        rows.append(rec)
d=pd.DataFrame(rows);d.to_csv(P/'occupation_scores.csv',index=False)
summary=[];rng=np.random.default_rng(20261008)
for (year,level),g in d.groupby(['year','level']):
 for bundle in ['reviewed','original']:
  for pscore,oscore in [('weighted','unique'),('unique','unique'),('links','links')]:
   a=g[f'{bundle}_posting_{pscore}'].to_numpy();c=g[f'{bundle}_onet_{oscore}'].to_numpy();y=g.rate.to_numpy()
   rho1=spearmanr(a,y).statistic;rho2=spearmanr(c,y).statistic
   dif=[]
   for _ in range(2000):
    ix=rng.integers(0,len(y),len(y));dif.append(spearmanr(a[ix],y[ix]).statistic-spearmanr(c[ix],y[ix]).statistic)
   # Partial rank association removing SOC2 group means; exploratory, not causal.
   ranks=pd.DataFrame({'a':rankdata(a),'c':rankdata(c),'y':rankdata(y),'soc2':g.code.str[:2].to_numpy()})
   resid=ranks[['a','c','y']]-ranks.groupby('soc2')[['a','c','y']].transform('mean')
   partial=lambda col:pearsonr(resid[col],resid.y).statistic if resid.y.std()>0 else np.nan
   summary.append(dict(year=year,level=level,bundle=bundle,posting_score=pscore,onet_score=oscore,n=len(g),posting_spearman=rho1,onet_spearman=rho2,difference=rho1-rho2,difference_ci_low=np.nanquantile(dif,.025),difference_ci_high=np.nanquantile(dif,.975),posting_lograte_pearson=pearsonr(a,np.log(y)).statistic,onet_lograte_pearson=pearsonr(c,np.log(y)).statistic,posting_within_soc2_rank=partial('a'),onet_within_soc2_rank=partial('c')))
s=pd.DataFrame(summary);s.to_csv(P/'association_summary.csv',index=False)
inputs.append(R/'output/research_presentation/downloads/dangerous-tasks/inventory.csv')
manifest={'purpose':'Exploratory association, not prospective or independently sourced validation','retained_profile_cells':len(x),'profile_specialties':x.occupational_code.nunique(),'reviewed_bundle_size':len(b),'compatible_exact_text_tasks':len(valid),'original_bundle_compatible_ids':len(original),'sources':{p.name:'https://www.bls.gov/iif/fatal-injuries-tables/'+p.name for p in (P/'inputs').glob('*.xlsx')},'sha256':{str(p.relative_to(R)):hashlib.sha256(p.read_bytes()).hexdigest() for p in inputs},'bootstrap':'2000 paired occupation-group resamples; seed20261008; conditional on published rates, not CFOI measurement error'}
(P/'manifest.json').write_text(json.dumps(manifest,indent=2)+'\n')
print(json.dumps({k:v for k,v in manifest.items() if k not in ['sha256','sources']},indent=2))
print(s[(s.bundle=='reviewed')&(s.posting_score.isin(['weighted','unique']))].to_string(index=False))
print('Unmatched groups:',d[d.unmatched_soc6.ne('')][['year','code','unmatched_soc6']].to_string(index=False))
# Coverage and exact-code checks, using the same scores, with no retuning.
checks=[]
for year in [2024,2023]:
 g=d[(d.year==year)&(d.level=='detailed')]
 for label,z in [('complete_mapped_groups',g[g.unmatched_soc6.eq('')]),('single_exact_SOC6',g[g.code.str.fullmatch(r'\d{2}-\d{3}[1-9]')]),('common_year_groups',g[g.code.isin(set(d[(d.year==2024)&(d.level=='detailed')].code)&set(d[(d.year==2023)&(d.level=='detailed')].code))])]:
  checks.append(dict(year=year,sample=label,n=len(z),posting_weighted=spearmanr(z.reviewed_posting_weighted,z.rate).statistic,posting_unique=spearmanr(z.reviewed_posting_unique,z.rate).statistic,onet_unique=spearmanr(z.reviewed_onet_unique,z.rate).statistic))
pd.DataFrame(checks).to_csv(P/'coverage_sensitivity.csv',index=False)
# Individual-task associations are descriptive only, not a new selected bundle.
# Sparse/constant task columns and 610 comparisons make post-hoc interpretation risky.
g=d[(d.year==2024)&(d.level=='detailed')];am=[];cm=[]
for _,r in g.iterrows():
 use=set(r.soc6_codes.split(';'));a=x[x.soc6.isin(use)];c=o[o.soc6.isin(use)]
 am.append(a.groupby('task_id').weighted_jobs_with_task.sum().reindex(sorted(valid),fill_value=0).to_numpy()/a.weighted_jobs_with_task.sum())
 cm.append(np.array([int(task in set(c.task_id)) for task in sorted(valid)]))
am=np.array(am);cm=np.array(cm)
tr=[]
for j,task in enumerate(sorted(valid)):
 corr=lambda v:float(spearmanr(v,g.rate).statistic) if np.ptp(v)>0 else np.nan
 tr.append(dict(task_id=task,task_description=t.loc[task],posting_groups_present=int((am[:,j]>0).sum()),onet_groups_assigned=int(cm[:,j].sum()),posting_incidence_spearman=corr(am[:,j]),onet_assignment_spearman=corr(cm[:,j])))
pd.DataFrame(tr).to_csv(P/'individual_task_associations_exploratory.csv',index=False)
# Recompute headline independently as Pearson correlations of pandas average ranks.
z=d[(d.year==2024)&(d.level=='detailed')]
for field in ['reviewed_posting_weighted','reviewed_posting_unique','reviewed_onet_unique']:
 assert np.isclose(z[[field,'rate']].rank().corr().iloc[0,1],spearmanr(z[field],z.rate).statistic)
assert d.filter(regex='^(reviewed|original)_').ge(0).all().all()
assert d.filter(regex='^(reviewed|original)_').le(1).all().all()
print(pd.DataFrame(checks).to_string(index=False))
