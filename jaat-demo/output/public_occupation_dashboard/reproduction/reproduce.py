"""Portable, fresh matrix-to-rank-to-benchmark production from released aggregates.
No licensed postings or person records. Expected ranks/results are assertions only.
"""
import os
os.environ.setdefault('OPENBLAS_NUM_THREADS','1')
from pathlib import Path
import argparse,hashlib,json,sys
import numpy as np
import pandas as pd
P=Path(__file__).resolve().parent
sys.path.insert(0,str(P/'benchmark_inputs'))
from replicate import calculate,read_inputs,verify_summary

def sha(p):return hashlib.sha256(Path(p).read_bytes()).hexdigest()
def verify():
 m=json.loads((P/'manifest.json').read_text())
 for name,h in m['files'].items():
  assert sha(P/name)==h, 'Changed release input/code: '+name
 return len(m['files'])
def groups_for(ds):
 if ds in ['SST','Emsi']:
  c=pd.read_csv(P/('candidates_sst.csv' if ds=='SST' else 'candidates_emsi.csv'),dtype=str)
  c=c[c.universe.eq('principal')];return dict(zip(c['soc2010' if ds=='SST' else 'code'],c.specialties.str.split(';')))
 c=pd.read_csv(P/'candidates_surveys.csv',dtype=str);c=c[c.system.eq('2010' if ds=='CPS_SIPP' else '2002')]
 return dict(zip(c.code,c.specialties.str.split(';')))
def rank_groups(codes,sim,groups,origins):
 names=sorted(groups,key=int) if all(str(c).isdigit() for c in groups) else sorted(groups);lookup={c:i for i,c in enumerate(codes)};G=np.zeros((len(names),len(codes)))
 for i,c in enumerate(names):G[i,[lookup[s] for s in groups[c]]]=1/len(groups[c])
 scores=G@sim@G.T;np.fill_diagonal(scores,0);rows=[]
 for origin in origins:
  i=names.index(origin);js=np.flatnonzero(scores[i]>0)
  js=js[np.argsort(-np.round(scores[i,js],12),kind='stable')][:20]
  rows.extend({'origin':origin,'destination':names[j],'rank':r,'score':scores[i,j]} for r,j in enumerate(js,1))
 return pd.DataFrame(rows)
def real(out,benchmark_data=None):
 n=verify();out.mkdir(parents=True,exist_ok=True)
 expected,observed,origins=read_inputs(P/'benchmark_inputs')
 if benchmark_data is not None:
  observed=pd.read_csv(benchmark_data/'observed.csv',dtype={'origin':str,'destination':str})
  origins=pd.read_csv(benchmark_data/'origins.csv',dtype={'origin':str})
 with np.load(P/'relatedness_scores.npz',allow_pickle=False) as z:codes=z['codes'].astype(str);sim=z['similarity']
 assert sim.shape==(len(codes),len(codes)) and np.isfinite(sim).all()
 np.testing.assert_allclose(sim,sim.T,atol=1e-12)
 q=pd.read_csv(P/'onet_published_relations.csv');pcodes=sorted(set(codes)|set(q['O*NET-SOC Code'])|set(q['Related O*NET-SOC Code']))
 ix={s:i for i,s in enumerate(pcodes)};published=np.zeros((len(pcodes),len(pcodes)))
 for a,b,r in q[['O*NET-SOC Code','Related O*NET-SOC Code','Index']].itertuples(index=False,name=None):published[ix[a],ix[b]]=(21-r)/20
 parts=[]
 for ds,g in origins.groupby('dataset',sort=False):
  for model,cs,mat in [('task',codes,sim),('onet_published',pcodes,published)]:
   ranks=rank_groups(cs,mat,groups_for(ds),g.origin.tolist());ranks['dataset']=ds;ranks['model']=model;parts.append(ranks)
 ranks=pd.concat(parts,ignore_index=True);keys=['dataset','origin','model','rank']
 # Fail on membership/order changes; do not silently keep old recommendations.
 a=ranks.sort_values(keys)[keys+['destination']].reset_index(drop=True);b=expected.sort_values(keys)[keys+['destination']].reset_index(drop=True)
 pd.testing.assert_frame_equal(a,b)
 by,summary,audit=calculate(ranks.drop(columns='score'),observed,origins)
 verify_summary(summary,pd.read_csv(P/'benchmark_inputs/expected_summary.csv'))
 ranks.to_csv(out/'fresh_rankings.csv.gz',index=False);by.to_csv(out/'by_origin.csv',index=False);summary.to_csv(out/'summary.csv',index=False)
 report={'status':'PASS','verified_release_files':n,'specialties':len(codes),'fresh_lists':ranks.groupby(['dataset','origin','model']).ngroups,'ranking_rows':len(ranks),'dataset_origins':len(origins),'observed_pairs':len(observed),'datasets':len(summary.dataset.unique()),'scope':'Rebuild rankings and outcomes from released matrix, public O*NET lists and frozen candidate mappings; not NLx profile fitting or raw-source reconstruction.','matrix_sha256':sha(P/'relatedness_scores.npz'),'outcomes_used':'newly rebuilt source outcomes' if benchmark_data is not None else 'packaged aggregate outcomes','outcome_input_sha256':{n:sha((benchmark_data if benchmark_data is not None else P/'benchmark_inputs')/n) for n in ['observed.csv','origins.csv']}}
 (out/'verification.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2))
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('--output',type=Path,default=P/'results');p.add_argument('--benchmark-data',type=Path);args=p.parse_args();real(args.output,args.benchmark_data)
