"""Exploratory fixed-bundle comparison: incidence share vs normalized RCA share.
Same retained links and design weights. Pool SOC8 into SOC6 before RCA.
RCA_ot=(W_ot/sum_t W_ot)/(sum_o W_ot/sum_ot W_ot).
Bundle score=sum_bundle RCA/sum_all RCA. For CFOI groups pool W first;
occupation normalization cancels from this ratio. Global reference covers all
production-retained profiles. This is not the cosine relatedness score.
"""
from pathlib import Path
import pandas as pd,numpy as np,json
from scipy.stats import spearmanr
P=Path(__file__).resolve().parent;R=P.parents[1]
x=pd.read_csv(R/'data/release/occupation_task_marginals.csv.gz');v=pd.read_csv(R/'analysis/relatedness_refresh_20260922/validation/reconciled_prior_decisions.csv').rename(columns={'occ8':'occupational_code'})
x=x.merge(v[['occupational_code','task_id','review_status']],on=['occupational_code','task_id'],how='left',validate='one_to_one')
x=x[x.occupational_code.isin(np.load(R/'analysis/occupation_relatedness/results/similarity_matrices.npz')['codes'])&x.n_jobs_with_task.ge(5)&~x.review_status.isin(['reviewed_not_retained','review_incomplete'])].copy();assert len(x)==527378
b=set(pd.read_csv(R/'output/research_presentation/downloads/dangerous-tasks/dangerous_tasks.csv').task_id)
p=x.groupby('task_id').weighted_jobs_with_task.sum()/x.weighted_jobs_with_task.sum();x['code']=x.occupational_code.str[:7];x['adjusted']=x.weighted_jobs_with_task/x.task_id.map(p);x['bundle_adjusted']=x.adjusted.where(x.task_id.isin(b),0)
scores=x.groupby('code')[['adjusted','bundle_adjusted']].sum();scores['rca_share']=scores.bundle_adjusted/scores.adjusted
rows=[];details=[]
s=pd.read_csv(P/'occupation_outcomes.csv');s=s[s.case_type.eq('DART')].merge(scores[['rca_share']],left_on='code',right_index=True,how='left')
for (table,outcome),g in s.groupby(['table','outcome']):
 g=g.dropna(subset=['rate','posting_weighted','onet_unique','rca_share'])
 if len(g)<10 or g.rate.nunique()<2:continue
 rows.append(dict(source=table,outcome=outcome,n=len(g),incidence=spearmanr(g.posting_weighted,g.rate).statistic,rca=spearmanr(g.rca_share,g.rate).statistic,onet=spearmanr(g.onet_unique,g.rate).statistic))
 details.extend(dict(source=table,outcome=outcome,code=r.code,rate=r.rate,incidence=r.posting_weighted,rca=r.rca_share,onet=r.onet_unique) for r in g.itertuples())
c=pd.read_csv(P.parent/'cfoi_task_benchmark_20261008/occupation_scores.csv');c=c[(c.year==2024)&(c.level=='detailed')].copy()
c['rca_share']=[scores.reindex(r.soc6_codes.split(';')).bundle_adjusted.sum()/scores.reindex(r.soc6_codes.split(';')).adjusted.sum() for r in c.itertuples()]
rows.append(dict(source='CFOI2024',outcome='Fatal injury rate',n=len(c),incidence=spearmanr(c.reviewed_posting_weighted,c.rate).statistic,rca=spearmanr(c.rca_share,c.rate).statistic,onet=spearmanr(c.reviewed_onet_unique,c.rate).statistic))
details.extend(dict(source='CFOI2024',outcome='Fatal injury rate',code=r.code,rate=r.rate,incidence=r.reviewed_posting_weighted,rca=r.rca_share,onet=r.reviewed_onet_unique) for r in c.itertuples())
z=pd.DataFrame(rows);z['rca_minus_incidence']=z.rca-z.incidence;z.to_csv(P/'rca_sensitivity.csv',index=False);pd.DataFrame(details).to_csv(P/'rca_sensitivity_occupation_data.csv',index=False)
# Selected-task display values: weighted prevalence denominator includes taskless job-months.
tot=pd.read_csv(R/'data/release/occupation_totals.csv');tot=tot[tot.occupational_code.isin(np.load(R/'analysis/occupation_relatedness/results/similarity_matrices.npz')['codes'])].copy();tot['code']=tot.occupational_code.str[:7];den=tot.groupby('code').weighted_jobs.sum()
a=x.groupby(['code','task_id']).weighted_jobs_with_task.sum().reset_index();a['prevalence']=a.weighted_jobs_with_task/a.code.map(den);a['rca']=(a.weighted_jobs_with_task/a.code.map(x.groupby('code').weighted_jobs_with_task.sum()))/a.task_id.map(p)
assert a.prevalence.between(0,1+1e-10).all()
a['incidence_share']=a.weighted_jobs_with_task/a.code.map(x.groupby('code').weighted_jobs_with_task.sum())
shown=json.loads((P/'task_occupation_examples.json').read_text());allowed={(r['code'],int(t)) for t,v in shown.items() for r in v['rows']}
a=a[[k in allowed for k in zip(a.code,a.task_id)]]
a[['code','task_id','prevalence','rca','incidence_share']].to_csv(P/'task_display_metrics.csv',index=False)
print(z.to_string(index=False))
