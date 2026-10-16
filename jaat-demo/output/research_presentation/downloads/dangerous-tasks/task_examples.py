"""Build display-limited task-to-occupation examples; no posting counts exported.
For each of the 610 bundle tasks, show up to five SOC6 occupations ordered by
design-weighted task prevalence (not injury rates). Apply the production support/review
rules within SOC8 before pooling. Canonical means this exact ID is assigned to
any specialty in the SOC6 occupation in O*NET27.2, not semantic equivalence.
CFOI broad-group rates keep their published group labels. No task-specific
causal inference is implied. Requires restricted inputs locally.
"""
from pathlib import Path
import pandas as pd,numpy as np,json
P=Path(__file__).resolve().parent;R=P.parents[1]
x=pd.read_csv(R/'data/release/occupation_task_marginals.csv.gz')
v=pd.read_csv(R/'analysis/relatedness_refresh_20260922/validation/reconciled_prior_decisions.csv').rename(columns={'occ8':'occupational_code'})
x=x.merge(v[['occupational_code','task_id','review_status']],on=['occupational_code','task_id'],how='left',validate='one_to_one')
x=x[x.occupational_code.isin(np.load(R/'analysis/occupation_relatedness/results/similarity_matrices.npz')['codes'])&x.n_jobs_with_task.ge(5)&~x.review_status.isin(['reviewed_not_retained','review_incomplete'])].copy()
assert len(x)==527378
x['code']=x.occupational_code.str[:7]
o=pd.read_csv(R/'crosswalks/onet_task_statements_27_2.csv');o['code']=o.occ8.str[:7];canonical=set(zip(o.task_id,o.code))
s=pd.read_csv(P/'occupation_outcomes.csv');s=s[(s.table=='r100')&(s.case_type=='DART')&(s.outcome=='Total rate')].set_index('code')
c=pd.read_csv(P.parent/'cfoi_task_benchmark_20261008/occupation_scores.csv');c=c[(c.year==2024)&(c.level=='detailed')]
fatal={code:dict(rate=float(r.rate),code=r.code,title=r.title) for r in c.itertuples() for code in r.soc6_codes.split(';')}
# Titles must not depend on whether BLS publishes an injury/employment estimate.
# Use the .00 occupation title, never an arbitrary SOC8 specialty label.
meta=pd.read_csv(R/'crosswalks/onet_soc_title_map_31_0.csv')
titles=meta[meta.onet_soc_code.str.endswith('.00')].set_index('soc6').occupation_title.to_dict()
titles.update(pd.read_csv(R/'crosswalks/national_occupation_workers_M2025.csv').set_index('soc6').OCC_TITLE.to_dict())
b=pd.read_csv(R/'output/research_presentation/downloads/dangerous-tasks/dangerous_tasks.csv');result={}
tot=pd.read_csv(R/'data/release/occupation_totals.csv');tot=tot[tot.occupational_code.isin(np.load(R/'analysis/occupation_relatedness/results/similarity_matrices.npz')['codes'])].copy();tot['code']=tot.occupational_code.str[:7]
den=tot.groupby('code').weighted_jobs.sum()
for task in b.task_id:
 a=x[x.task_id.eq(task)];g=(a.groupby('code').weighted_jobs_with_task.sum()/den).dropna().sort_values(ascending=False,kind='stable');rows=[]
 for code in g.head(5).index:
  rate=s.loc[code,'rate'] if code in s.index else None
  reviews=set(a[a.code.eq(code)].review_status.dropna())
  rows.append(dict(code=code,title=s.loc[code,'title'] if code in s.index else titles.get(code,code),canonical=(task,code) in canonical,review='Includes reviewed links' if 'reviewed_yes' in reviews else 'Canonical retained' if 'canonical_retained' in reviews else 'Unreviewed links retained',nonfatal=None if pd.isna(rate) else float(rate),fatal=fatal.get(code)))
 result[str(task)]=dict(total=len(g),rows=rows)
# Page-specific release authorized October 14: top 5 occupations per incident-linked task.
# Main explorer permissions and bottom occupation-task lists are unchanged.
# Compute only the displayed frequencies; never export full posting profiles.
tot=pd.read_csv(R/'data/release/occupation_totals.csv');tot=tot[tot.occupational_code.isin(np.load(R/'analysis/occupation_relatedness/results/similarity_matrices.npz')['codes'])].copy();tot['code']=tot.occupational_code.str[:7]
den=tot.groupby('code').weighted_jobs.sum();w=x.groupby(['code','task_id']).weighted_jobs_with_task.sum();td=x.groupby('code').weighted_jobs_with_task.sum()
for task,entry in result.items():
 for row in entry['rows']:
  amount=w.loc[(row['code'],int(task))]
  row.update(prevalence=float(amount/den[row['code']]),incidence_share=float(amount/td[row['code']]))
missing=sorted({r['code'] for v in result.values() for r in v['rows'] if not r['title'] or r['title']==r['code']})
assert not missing, f'Missing occupation titles: {missing}'
(P/'task_occupation_examples.json').write_text(json.dumps(result,ensure_ascii=False,allow_nan=False))
print('610 tasks; displayed links:',sum(len(v['rows']) for v in result.values()))
