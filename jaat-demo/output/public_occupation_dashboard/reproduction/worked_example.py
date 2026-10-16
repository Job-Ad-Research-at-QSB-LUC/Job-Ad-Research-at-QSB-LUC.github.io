"""Synthetic algorithm demonstration only. These are NOT NLx observations or paper results."""
from pathlib import Path
import importlib.util,json,argparse
import numpy as np
import pandas as pd
from scipy import sparse
P=Path(__file__).resolve().parent

def run(out):
 out.mkdir(parents=True,exist_ok=True)
 # Deterministic fake detected task IDs. Text detection itself is outside this package.
 postings=[];assign=[]
 for k,occ in enumerate(['11-0001.00','11-0001.01','22-0002.00','33-0003.00']):
  for j in range(12):
   key=f'SYNTHETIC-{k}-{j}';postings.append((key,occ,'2025-01',2.0 if j%2 else 3.0))
   ids=[1,2] if k<2 else ([2,3] if k==2 else [3,4])
   if j<3:ids=ids+[5]  # low support
   if k==0:ids=ids+[4] # rejected reviewed pair
   for t in ids:assign.append((key,t))
   if j==0:assign.append((key,ids[0])) # duplicate detector row cannot inflate support
 posts=pd.DataFrame(postings,columns=['job_month','occ8','month','design_weight'])
 tasks=pd.DataFrame(assign,columns=['job_month','task_id'])
 unique=tasks.drop_duplicates().merge(posts,on='job_month',validate='many_to_one')
 marg=unique.groupby(['occ8','task_id']).agg(raw_support=('job_month','size'),mass=('design_weight','sum')).reset_index()
 marg['review_status']='unreviewed';marg.loc[marg.occ8.eq('11-0001.00')&marg.task_id.eq(4),'review_status']='reviewed_not_retained'
 kept=marg[marg.raw_support.ge(5)&~marg.review_status.isin(['reviewed_not_retained','review_incomplete'])]
 codes=sorted(posts.occ8.unique());feature_ids=sorted(marg.task_id.unique());ci={c:i for i,c in enumerate(codes)};ti={t:i for i,t in enumerate(feature_ids)}
 M=np.zeros((len(codes),len(feature_ids)))
 for r in kept.itertuples():M[ci[r.occ8],ti[r.task_id]]=r.mass
 pooled=M.sum(0)/M.sum();weight=np.divide(1,pooled,out=np.zeros_like(pooled),where=pooled>0)
 x=np.sqrt(M*weight);norm=np.linalg.norm(x,axis=1);v=np.divide(x,norm[:,None],out=np.zeros_like(x),where=norm[:,None]>0);S=v@v.T
 # Confirm this demonstration agrees with the actual paper representation helper.
 path=P/'production_source/analysis/occupation_relatedness/metrics.py'
 spec=importlib.util.spec_from_file_location('actual_metrics',path);module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module)
 _,actual=module.representation(sparse.csr_matrix(M),weight);np.testing.assert_allclose(actual.toarray(),v,atol=1e-12)
 np.testing.assert_allclose(np.diag(S),1);assert M[:,ti[5]].sum()==0 and M[0,ti[4]]==0
 from reproduce import rank_groups
 groups={'A':codes[:2],'B':[codes[2]],'C':[codes[3]]}
 ranks=rank_groups(codes,S,groups,['A','B','C'])
 # Synthetic two-source survey: filter changed employed endpoints then pool supplied weights.
 records=pd.DataFrame([('CPS','A','B',2),('SIPP','A','C',1),('SIPP','A','UNMAPPED',3),('CPS','A','A',4),('SIPP','A',None,5)]*20,columns=['source','origin','destination','weight'])
 changes=records[records.destination.notna()&records.origin.ne(records.destination)&records.weight.gt(0)]
 assert len(changes)==60 # record support, not number of distinct persons
 pooled=changes.groupby(['origin','destination']).weight.sum();den=changes.groupby('origin').weight.sum()['A'];top=ranks[ranks.origin.eq('A')].destination.iloc[0]
 capture=pooled.get(('A',top),0)/den
 assert den==120 and pooled['A'].get('UNMAPPED')==60 and capture<=.5
 posts.to_csv(out/'SYNTHETIC_postings.csv',index=False);tasks.to_csv(out/'SYNTHETIC_detected_tasks.csv',index=False);marg.to_csv(out/'SYNTHETIC_marginals.csv',index=False)
 pd.DataFrame(v,index=codes,columns=feature_ids).to_csv(out/'SYNTHETIC_coordinates.csv');ranks.to_csv(out/'SYNTHETIC_rankings.csv',index=False)
 records.to_csv(out/'SYNTHETIC_survey_records.csv',index=False)
 report={'label':'SYNTHETIC DEMONSTRATION — not paper estimates','status':'PASS','postings':len(posts),'deduplicated_task_assignments':len(unique),'retained_pairs':len(kept),'actual_production_representation_matches':True,'unmapped_weight_preserved':60,'survey_original_denominator':float(den),'survey_changed_record_support':len(changes),'top_one_recovery':float(capture),'minimum_support_rule':40,'canonical_census_crosswalk':'Real crosswalk policy/code is in production_source; fake A/B/C groups only demonstrate specialty averaging.'}
 (out/'SYNTHETIC_verification.json').write_text(json.dumps(report,indent=2)+'\n');print(json.dumps(report,indent=2))
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('--output',type=Path,default=P/'synthetic_results');run(p.parse_args().output)
