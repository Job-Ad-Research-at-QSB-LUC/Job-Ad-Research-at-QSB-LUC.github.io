"""Survey-only occupation injury profiles and descriptive variance associations.
No narrative classification and no attribution of an injury to an individual task.
Source: official 2023–24 private-industry SOII R98, R100 and R66 workbooks.
"""
from pathlib import Path
import json,hashlib
import numpy as np
import pandas as pd
from scipy.stats import pearsonr
P=Path(__file__).resolve().parent

def build():
 outcomes=pd.read_csv(P/'occupation_outcomes.csv')
 base=outcomes[outcomes.table.eq('r100')&outcomes.case_type.eq('DART')&outcomes.outcome.eq('Total rate')].dropna(subset=['rate','posting_weighted','onet_unique'])
 assert base.code.is_unique
 profiles={};rows=[]
 r66=P/'inputs/case-and-demographic-characteristics-table-r66-2023-2024.xlsx'
 day=pd.read_excel(r66,header=2).rename(columns={'Occupation code(2)':'code','Case type(3)':'case_type'})
 day=day[day.code.isin(base.code)&day.case_type.isin(['DART','DAFW','DJTR'])]
 assert not day.duplicated(['code','case_type']).any()
 # Only mutually exclusive TOP-LEVEL event groups, never parents and children together.
 event_names=['Contact incidents / Total','Falls, slips, trips / Total','Overexertion, repetitive motion, and bodily conditions / Total','Transportation incidents / Total','Violent acts / Total','Explosions and fires','Exposure to harmful substances, environments','All other events or exposures(4)']
 def number(v):
  z=pd.to_numeric(v,errors='coerce');return None if pd.isna(z) else float(z)
 for b in base.itertuples():
  g=outcomes[outcomes.code.eq(b.code)&outcomes.case_type.eq('DART')]
  kinds={}
  for key,table in [('types','r98'),('events','r100')]:
   q=g[g.table.eq(table)&g.outcome.ne('Total rate')]
   if key=='events':q=q[q.outcome.isin(event_names)]
   kinds[key]=[]
   for r in q.itertuples():
    label=r.outcome.replace(' / Total','').replace('(4)','');value=number(r.rate);other=label.startswith('All other')
    kinds[key].append(dict(label=label,rate=value,other=other))
    rows.append(dict(code=b.code,title=b.title,section=key,case_type='DART',measure=label,value=value,unit='annualized cases per 10000 FTE'))
  severity={}
  for r in day[day.code.eq(b.code)].to_dict('records'):
   vals={str(k):number(r[k]) for k in ['Total cases','1 day','2 days','3 to 5 days','6 to 10 days','11 to 20 days','21 to 30 days','31 or more days','Median days']}
   severity[r['case_type']]=vals
   for key,value in vals.items():rows.append(dict(code=b.code,title=b.title,section='consequences',case_type=r['case_type'],measure=key,value=value,unit='days' if key=='Median days' else 'cases across 2023–24'))
  profiles[b.code]=dict(title=b.title,total_rate=b.rate,posting_share=b.posting_weighted,onet_share=b.onet_unique,**kinds,severity=severity)
 reg=[]
 for scale in ['rate','log_rate']:
  y=base.rate.to_numpy() if scale=='rate' else np.log(base.rate.to_numpy())
  assert np.isfinite(y).all()
  for model in ['posting_weighted','posting_unique','onet_unique']:
   x=base[model].to_numpy();X=np.column_stack([np.ones(len(x)),x]);coef=np.linalg.lstsq(X,y,rcond=None)[0];res=y-X@coef;r2=1-(res@res)/np.sum((y-y.mean())**2)
   assert np.isclose(r2,pearsonr(x,y).statistic**2)
   reg.append(dict(outcome=scale,model=model,n=len(y),intercept=coef[0],slope=coef[1],r_squared=r2,estimation='Unweighted OLS across occupations, intercept plus one bundle-share predictor; in-sample descriptive association'))
 pd.DataFrame(rows).to_csv(P/'survey_occupation_profiles.csv',index=False)
 pd.DataFrame(reg).to_csv(P/'variance_associations.csv',index=False)
 (P/'survey_profiles.json').write_text(json.dumps(profiles,separators=(',',':'),allow_nan=False)+'\n')
 (P/'profile_verification.json').write_text(json.dumps(dict(status='PASS',occupations=len(profiles),nonoverlapping_event_categories=event_names,ols_pearson_identity=True,r66_sha256=hashlib.sha256(r66.read_bytes()).hexdigest(),notes='Missing remains null; rounded zero remains zero; rates annualized, duration counts span two years. No occupation-size weights.'),indent=2)+'\n')
 print(pd.DataFrame(reg)[['outcome','model','n','r_squared']].to_string(index=False))
 return profiles
if __name__=='__main__':build()
