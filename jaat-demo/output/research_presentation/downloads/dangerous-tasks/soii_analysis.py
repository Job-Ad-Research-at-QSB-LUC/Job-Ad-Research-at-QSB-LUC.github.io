"""SOII external association screen: fixed 610-task bundle; exact SOC6 only.
No outcome-based task selection. Suppressed cells stay missing, rounded zeros stay zero.
Reads restricted aggregate profiles locally; exports derived occupation scores only.
"""
from pathlib import Path
import pandas as pd,numpy as np,json,hashlib
from scipy.stats import spearmanr,rankdata,pearsonr
P=Path(__file__).resolve().parent;R=P.parents[1]
paths=[R/'data/release/occupation_task_marginals.csv.gz',R/'analysis/relatedness_refresh_20260922/validation/reconciled_prior_decisions.csv',R/'crosswalks/onet_task_statements_27_2.csv',R/'output/research_presentation/downloads/dangerous-tasks/dangerous_tasks.csv',R/'analysis/occupation_relatedness/results/similarity_matrices.npz']
x=pd.read_csv(paths[0]);v=pd.read_csv(paths[1]).rename(columns={'occ8':'occupational_code'})
x=x.merge(v[['occupational_code','task_id','review_status']],on=['occupational_code','task_id'],how='left',validate='one_to_one')
x=x[x.occupational_code.isin(np.load(paths[4])['codes'])&x.n_jobs_with_task.ge(5)&~x.review_status.isin(['reviewed_not_retained','review_incomplete'])].copy();assert len(x)==527378
b=set(pd.read_csv(paths[3]).task_id);o=pd.read_csv(paths[2]);x['soc6']=x.occupational_code.str[:7];o['soc6']=o.occ8.str[:7]
rows=[]
for soc,a in x.groupby('soc6'):
 c=o[o.soc6.eq(soc)]
 if c.empty:continue
 hit=a.task_id.isin(b)
 rows.append(dict(code=soc,posting_weighted=a.loc[hit,'weighted_jobs_with_task'].sum()/a.weighted_jobs_with_task.sum(),posting_raw=a.loc[hit,'n_jobs_with_task'].sum()/a.n_jobs_with_task.sum(),posting_unique=len(set(a.task_id)&b)/a.task_id.nunique(),onet_unique=len(set(c.task_id)&b)/c.task_id.nunique()))
scores=pd.DataFrame(rows);scores.to_csv(P/'occupation_bundle_scores.csv',index=False)
frames=[]
for table in ['r98','r100']:
 p=P/'inputs'/f'case-and-demographic-characteristics-table-{table}-2023-2024.xlsx';paths.append(p)
 d=pd.read_excel(p,header=None)
 headers=d.iloc[1].astype(str).tolist()
 if table=='r100':
  # Two header rows: retain event parent and subcategory rather than duplicate names.
  headers=[str(a) if str(a)==str(b) or pd.isna(b) else str(a)+' / '+str(b) for a,b in zip(d.iloc[1],d.iloc[2])]
 d=d.iloc[2:].copy();d.columns=['title','code','case_type']+headers[3:]
 d=d[d.case_type.isin(['DAFW','DJTR','DART'])&d.code.astype(str).str.fullmatch(r'\d{2}-\d{3}[1-9]')]
 assert not d.duplicated(['code','case_type']).any()
 for col in d.columns[3:]:d[col]=pd.to_numeric(d[col],errors='coerce')
 d=d.melt(id_vars=['title','code','case_type'],var_name='outcome',value_name='rate');d['table']=table
 frames.append(d)
f=pd.concat(frames).merge(scores,on='code',how='left',validate='many_to_one');f.to_csv(P/'occupation_outcomes.csv',index=False)
# Independently tabulated total rate must agree across tables wherever both published.
z=f[f.outcome.eq('Total rate')].pivot(index=['code','case_type'],columns='table',values='rate').dropna();assert np.allclose(z.r98,z.r100)
summary=[]
for (table,case,outcome),g in f.groupby(['table','case_type','outcome']):
 g=g.dropna(subset=['rate','posting_weighted','onet_unique'])
 if len(g)<10 or g.rate.nunique()<2:continue
 rec=dict(table=table,case_type=case,outcome=outcome,n=len(g),zero_rates=int(g.rate.eq(0).sum()))
 for m in ['posting_weighted','posting_raw','posting_unique','onet_unique']:
  rec[m]=spearmanr(g[m],g.rate).statistic
  ranks=pd.DataFrame({'x':rankdata(g[m]),'y':rankdata(g.rate),'family':g.code.str[:2].to_numpy()})
  r=ranks[['x','y']]-ranks.groupby('family')[['x','y']].transform('mean');rec[m+'_within_soc2']=pearsonr(r.x,r.y).statistic
 summary.append(rec)
s=pd.DataFrame(summary);s.to_csv(P/'associations.csv',index=False)
(P/'manifest.json').write_text(json.dumps({'date':'2026-10-08','primary':'R100 DART Total rate, exact SOC6; no model fitting','selection':'Case-type and event/nature sensitivities exploratory; do not select task bundle based on outcomes','sources':{p.name:'https://www.bls.gov/iif/nonfatal-injuries-and-illnesses-tables/'+p.name for p in paths if p.suffix=='.xlsx'},'sha256':{str(p.relative_to(R)):hashlib.sha256(p.read_bytes()).hexdigest() for p in paths}},indent=2)+'\n')
print(s[(s.table=='r100')&s.outcome.eq('Total rate')].to_string(index=False))
print(s[(s.table=='r100')&s.case_type.eq('DART')].to_string(index=False))
