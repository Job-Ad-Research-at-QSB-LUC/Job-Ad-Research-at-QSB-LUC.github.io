"""Produce benchmark outcomes from original public releases, without frozen outcome inputs.
Frozen outcomes are read only after computation for parity verification.
"""
from pathlib import Path
import argparse,json,hashlib,zipfile
import numpy as np
import pandas as pd
P=Path(__file__).resolve().parent
LABELS={'SST':'SST','Emsi':'EMSI','CPS_SIPP':'CPS + SIPP',**{f'NLSY97_PSID_{h}y':f'NLSY97 + PSID · {h} years' for h in [3,5,10]}}
def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
def run(sst,emsi,surveys,out):
 out.mkdir(parents=True,exist_ok=True);hashes={}
 sm=json.loads((P/'upstream_provenance/crosswalks/occupational_transitions_sst_2020/intake.json').read_text())
 em=json.loads((P/'upstream_provenance/crosswalks/dol_career_pathways_ctot/intake.json').read_text())
 sv=pd.read_csv(P/'upstream_survey_sources.csv').set_index('file')
 def check(path,expected):
  if not path.is_file():raise FileNotFoundError(f'Missing public source {path}; see fetch_upstream.py and README acquisition instructions')
  h=sha(path);assert h==expected,'Source version differs: '+str(path);hashes[path.name]=h
 check(sst,sm['files']['occupation_transitions_public_data_set.csv.zip']['sha256']);check(emsi,em['files']['Emsi_dataset.csv']['sha256'])
 for name in ['CPS-SIPP_dataset.csv','Trajectories_(3_years)_dataset.csv','Trajectories-5-years-dataset.dta','Trajectories-10-years-dataset.dta']:check(surveys/name,sv.loc[name,'sha256'])
 outcomes=[];origins=[];flow=[]
 def add(ds,df,origin_codes,survey):
  f=df[df.origin.isin(origin_codes)].copy();totals=f.groupby('origin').mass.sum()
  for o in sorted(origin_codes):origins.append(dict(dataset=ds,benchmark=LABELS[ds],origin=o,denominator=float(totals[o]) if survey else 1.))
  for r in f.itertuples():outcomes.append(dict(dataset=ds,origin=r.origin,destination=r.destination,mass=r.mass))
 with zipfile.ZipFile(sst) as z:raw=pd.read_csv(z.open('occupation_transitions_public_data_set.csv'))
 c=pd.read_csv(P/'candidates_sst.csv',dtype=str);elig=set(c.loc[c.universe.eq('principal')&c.is_origin.eq('True'),'soc2010'])
 add('SST',raw.rename(columns={'soc1':'origin','soc2':'destination','transition_share':'mass'})[['origin','destination','mass']],elig,False)
 raw=pd.read_csv(emsi,usecols=['oesCode_origin','oesCode_dest','order']);raw=raw.sort_values('order').groupby('oesCode_origin',sort=False).head(20)
 c=pd.read_csv(P/'candidates_emsi.csv',dtype=str);elig=set(c.loc[c.universe.eq('principal')&c.is_origin.eq('True'),'code'])
 raw=raw.rename(columns={'oesCode_origin':'origin','oesCode_dest':'destination'});raw['mass']=1/20;add('Emsi',raw[['origin','destination','mass']],elig,False)
 candidates=pd.read_csv(P/'candidates_surveys.csv',dtype=str)
 sources=[('CPS_SIPP','CPS-SIPP_dataset.csv','2010',{'occ_SRCE':'origin','occ_DEST':'destination','reweight':'mass'},'source',[0,1])]+[(f'NLSY97_PSID_{h}y','Trajectories_(3_years)_dataset.csv' if h==3 else f'Trajectories-{h}-years-dataset.dta','2002',{'startingocc':'origin','endingocc':'destination','ptrajweight':'mass'},'psid',[0,1]) for h in [3,5,10]]
 for ds,name,system,rename,source,values in sources:
  path=surveys/name;cols=[*rename,source]
  d=pd.read_csv(path,usecols=cols) if path.suffix=='.csv' else pd.read_stata(path,columns=cols,convert_categoricals=False)
  n=len(d);d=d[d[source].isin(values)].rename(columns=rename);d.mass=d.mass.astype(float)
  valid=d.origin.notna()&d.destination.notna()&d.origin.ne(d.destination)&d.mass.gt(0)&np.isfinite(d.mass)
  d=d[valid].copy();d[['origin','destination']]=d[['origin','destination']].astype(int).astype(str)
  counts=d.groupby('origin').size();elig=set(counts[counts>=40].index)&set(candidates.loc[candidates.system.eq(system),'code'])
  pairs=d.groupby(['origin','destination'],sort=True).mass.sum().reset_index()
  add(ds,pairs,elig,True)
  flow.append(dict(dataset=ds,source_rows=n,positive_changed_employed_rows=len(d),eligible_origins=len(elig),rule='>=40 changed endpoint records; source weights pooled without source normalization'))
 observed=pd.DataFrame(outcomes);origin_table=pd.DataFrame(origins)
 # Saved aggregates are expected answers, not production inputs.
 for name,actual,keys,number in [('observed.csv',observed,['dataset','origin','destination'],'mass'),('origins.csv',origin_table,['dataset','origin'],'denominator')]:
  ref=pd.read_csv(P/'benchmark_inputs'/name,dtype={'origin':str,'destination':str});a=actual.sort_values(keys).reset_index(drop=True);b=ref.sort_values(keys).reset_index(drop=True)
  pd.testing.assert_frame_equal(a[keys],b[keys]);np.testing.assert_allclose(a[number],b[number],rtol=1e-12,atol=1e-12)
  actual.to_csv(out/name,index=False)
 pd.DataFrame(flow).to_csv(out/'survey_flow.csv',index=False)
 report={'status':'PASS','observed_pairs':len(observed),'dataset_origins':len(origin_table),'datasets':len(origin_table.dataset.unique()),'source_sha256':hashes,'scope':'Original public released source files -> benchmark outcomes/denominators; exact parity. Source raw survey preprocessing and licensed resume construction remain upstream.'}
 (out/'verification.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2))
if __name__=='__main__':
 a=argparse.ArgumentParser();a.add_argument('--sst',type=Path,required=True);a.add_argument('--emsi',type=Path,required=True);a.add_argument('--surveys',type=Path,required=True);a.add_argument('--output',type=Path,required=True);x=a.parse_args();run(x.sst,x.emsi,x.surveys,x.output)
