"""Export up to ten dangerous-task frequencies for each displayed occupation.
Same retained links as the benchmark. Rank by weighted task incidence, never
injury outcomes. Export only values actually available in the dashboard UI.
This is an occupation-level join, not attribution of injuries to tasks.
"""
from pathlib import Path
import json
import pandas as pd
import numpy as np
P=Path(__file__).resolve().parent;R=P.parents[1]
from public_permissions import permissions
allowed=permissions()
x=pd.read_csv(R/'data/release/occupation_task_marginals.csv.gz')
review=pd.read_csv(R/'analysis/relatedness_refresh_20260922/validation/reconciled_prior_decisions.csv').rename(columns={'occ8':'occupational_code'})
x=x.merge(review[['occupational_code','task_id','review_status']],on=['occupational_code','task_id'],how='left',validate='one_to_one')
codes=np.load(R/'analysis/occupation_relatedness/results/similarity_matrices.npz')['codes']
x=x[x.occupational_code.isin(codes)&x.n_jobs_with_task.ge(5)&~x.review_status.isin(['reviewed_not_retained','review_incomplete'])].copy()
assert len(x)==527378
x['code']=x.occupational_code.str[:7]
tot=pd.read_csv(R/'data/release/occupation_totals.csv');tot=tot[tot.occupational_code.isin(codes)].copy();tot['code']=tot.occupational_code.str[:7]
jobden=tot.groupby('code').weighted_jobs.sum();taskden=x.groupby('code').weighted_jobs_with_task.sum()
ids=set(pd.read_csv(R/'output/research_presentation/downloads/dangerous-tasks/dangerous_tasks.csv').task_id)
official=pd.read_csv(R/'crosswalks/onet_task_statements_27_2.csv');canonical=set(zip(official.task_id,official.occ8.str[:7]))
profiles=json.loads((P/'survey_profiles.json').read_text());out={};rows=[]
g=x[x.task_id.isin(ids)].groupby(['code','task_id']).weighted_jobs_with_task.sum().reset_index()
for code in profiles:
    a=g[g.code.eq(code)&g.task_id.isin(allowed.get(code,set()))].sort_values(['weighted_jobs_with_task','task_id'],ascending=[False,True]);shown=[]
    for r in a.head(10).itertuples():
        item=dict(task_id=int(r.task_id),prevalence=float(r.weighted_jobs_with_task/jobden[code]),incidence_share=float(r.weighted_jobs_with_task/taskden[code]),canonical=(r.task_id,code) in canonical)
        assert 0<=item['prevalence']<=1 and 0<=item['incidence_share']<=1
        shown.append(item);rows.append(dict(code=code,**item))
    out[code]=dict(total=len(a),rows=shown)
(P/'occupation_task_panel.json').write_text(json.dumps(out,separators=(',',':'),allow_nan=False)+'\n')
pd.DataFrame(rows).to_csv(P/'occupation_task_panel.csv',index=False)
print('Displayed task links:',len(rows),'occupations:',len(out))
