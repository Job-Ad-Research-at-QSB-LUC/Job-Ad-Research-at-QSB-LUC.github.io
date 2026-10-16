"""Rebuild production RCA matrix when authorized NLx occupation-task marginals are supplied.
No downloads. Input is restricted; outputs belong in a PRIVATE directory.
"""
from pathlib import Path
import argparse,json,hashlib
import numpy as np
import pandas as pd
from scipy import sparse
P=Path(__file__).resolve().parent
if __name__=='__main__':
 ap=argparse.ArgumentParser();ap.add_argument('--authorized-marginals',type=Path,required=True);ap.add_argument('--private-output',type=Path,required=True);a=ap.parse_args()
 if not a.authorized_marginals.is_file():ap.error('Licensed input missing. Synthetic examples cannot replace paper input.')
 with np.load(P/'relatedness_scores.npz',allow_pickle=False) as z:codes=z['codes'].astype(str);reference=z['similarity']
 raw=pd.read_csv(a.authorized_marginals,usecols=['occupational_code','task_id','n_jobs_with_task','weighted_jobs_with_task'])
 assert not raw.duplicated(['occupational_code','task_id']).any()
 blocked=pd.read_csv(P/'excluded_task_occupation_pairs.csv.gz',usecols=['occ8','task_id']).rename(columns={'occ8':'occupational_code'})
 x=raw.merge(blocked.assign(blocked=True),how='left',on=['occupational_code','task_id'],validate='one_to_one')
 x=x[x.occupational_code.isin(codes)&x.n_jobs_with_task.ge(5)&x.blocked.isna()]
 assert np.isfinite(x.weighted_jobs_with_task).all() and x.weighted_jobs_with_task.ge(0).all()
 tasks=np.array(sorted(x.task_id.unique()));oi=pd.Index(codes);ti=pd.Index(tasks)
 M=sparse.csr_matrix((x.weighted_jobs_with_task,(oi.get_indexer(x.occupational_code),ti.get_indexer(x.task_id))),shape=(len(codes),len(tasks)))
 mass=np.asarray(M.sum(0)).ravel();p=mass/mass.sum();w=np.divide(1,p,out=np.zeros_like(p),where=p>0)
 V=M.multiply(w).tocsr();V.data=np.sqrt(V.data);norm=np.sqrt(np.asarray(V.multiply(V).sum(1)).ravel());V=sparse.diags(np.divide(1,norm,out=np.zeros_like(norm),where=norm>0))@V
 sim=(V@V.T).toarray();np.testing.assert_allclose(sim,reference,atol=2e-12,rtol=1e-12)
 a.private_output.mkdir(parents=True,exist_ok=True);np.savez_compressed(a.private_output/'rebuilt_similarity.npz',codes=codes,similarity=sim)
 (a.private_output/'verification.json').write_text(json.dumps({'status':'PASS','max_abs_difference':float(np.max(abs(sim-reference))),'input_sha256':hashlib.sha256(a.authorized_marginals.read_bytes()).hexdigest()},indent=2)+'\n')
 print('Production matrix parity passed; private output:',a.private_output)
