"""Production RCA reference, fixed support-5 reviewed NLx task incidence.

No outcome inputs. Zero-reference features get zero weight, not smoothing.
Historical IDF files are retained unchanged for dated comparison artifacts.
"""
from pathlib import Path
import sys,json,hashlib
import numpy as np
import pandas as pd
from scipy import sparse
P=Path(__file__).resolve().parent;ROOT=P.parents[1];OUT=P/'results'
sys.path.insert(0,str(ROOT/'analysis/occupation_relatedness'))
from metrics import representation,fractional_bridge,cosine_matrix

def build():
    old=ROOT/'analysis/occupation_relatedness/results'
    paths=[old/'similarity_matrices.npz',old/'task_matrix_columns.csv',ROOT/'data/release/occupation_task_marginals.csv.gz',P/'validation/reconciled_prior_decisions.csv',ROOT/'crosswalks/onet_tasks_to_dwas.txt',old/'task_dwa_bridge.npz']
    codes=np.load(paths[0])['codes'];tasks=pd.read_csv(paths[1]).task_id.tolist()
    inc=pd.read_csv(paths[2]);review=pd.read_csv(paths[3]).rename(columns={'occ8':'occupational_code'})
    inc=inc.merge(review[['occupational_code','task_id','review_status']],how='left',on=['occupational_code','task_id'],validate='one_to_one')
    f=inc[inc.occupational_code.isin(codes)&inc.n_jobs_with_task.ge(5)&~inc.review_status.isin(['reviewed_not_retained','review_incomplete'])]
    rows=pd.Index(codes).get_indexer(f.occupational_code);cols=pd.Index(tasks).get_indexer(f.task_id)
    assert (rows>=0).all() and (cols>=0).all()
    x=sparse.csr_matrix((f.weighted_jobs_with_task,(rows,cols)),shape=(len(codes),len(tasks)))
    bridge=pd.read_csv(paths[4],sep='\t')[['Task ID','DWA ID']].drop_duplicates();bridge['IWA ID']=bridge['DWA ID'].str.rsplit('.D',n=1).str[0]
    iwas=sorted(bridge['IWA ID'].unique());bi=fractional_bridge(tasks,iwas,bridge[['Task ID','IWA ID']].itertuples(index=False,name=None))
    levels={'task':(x,tasks),'dwa':(x@sparse.load_npz(paths[5]),pd.read_csv(old/'dwa_feature_weights.csv').unit_id.tolist()),'iwa':(x@bi,iwas)}
    for level,(mass,ids) in levels.items():
        total=np.asarray(mass.sum(0)).ravel();p=total/total.sum();weight=np.divide(1,p,out=np.zeros_like(p),where=p>0)
        pd.DataFrame({'unit_id':ids,'corpus_task_share':p,'rca_weight':weight}).to_csv(OUT/f'{level}_rca_feature_weights.csv',index=False)
        q,v=representation(mass,weight)
        sim=cosine_matrix(v);assert np.isfinite(sim).all()
        sparse.save_npz(OUT/f'{level}_rca_vectors.npz',v)
        np.savez_compressed(OUT/f'{level}_filtered_similarity.npz',codes=codes,similarity=sim)
    note=dict(model='RCA',formula='L2-normalize sqrt(q / p); cosine; no RCA cutoff',reference='Pooled reviewed support>=5 design-weighted incidence over all 1016 input NLx specialties (912 fixed eligible comparison specialties); mapped feature mass for DWA/IWA',task_cells=int(x.nnz),occupation_count=len(codes),zero_reference='zero weight; no smoothing',selection='Retrospective RCA selection after SST and DOL/EMSI benchmark comparison; performance is not untouched holdout evidence',input_sha256={str(p.relative_to(ROOT)):hashlib.sha256(p.read_bytes()).hexdigest() for p in paths})
    (OUT/'rca_model.json').write_text(json.dumps(note,indent=2)+'\n');return note

if __name__=='__main__':print(json.dumps(build(),indent=2))
