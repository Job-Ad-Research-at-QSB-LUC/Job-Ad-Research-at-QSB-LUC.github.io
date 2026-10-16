"""Transparent sparse task/activity comparisons. No fitted outcome parameters."""
import numpy as np
from scipy import sparse

def fractional_bridge(tasks,units,links):
    ti={t:i for i,t in enumerate(tasks)};ui={u:i for i,u in enumerate(units)}
    links=sorted(set((t,u) for t,u in links if t in ti and u in ui))
    r=[ti[t] for t,u in links];c=[ui[u] for t,u in links]
    b=sparse.csr_matrix((np.ones(len(r)),(r,c)),shape=(len(tasks),len(units)))
    mass=np.asarray(b.sum(axis=1)).ravel()
    return sparse.diags(np.divide(1,mass,out=np.zeros_like(mass),where=mass>0))@b

def representation(x,idf,power=.5):
    x=sparse.csr_matrix(x,dtype=float);mass=np.asarray(x.sum(axis=1)).ravel()
    q=(sparse.diags(np.divide(1,mass,out=np.zeros_like(mass),where=mass>0))@x).tocsr()
    v=q.copy();v.data=v.data**power
    v=v.multiply(np.sqrt(idf)).tocsr()
    norms=np.sqrt(np.asarray(v.multiply(v).sum(axis=1)).ravel())
    v=(sparse.diags(np.divide(1,norms,out=np.zeros_like(norms),where=norms>0))@v).tocsr()
    return q,v

def cosine_matrix(v):
    a=(v@v.T).toarray();a=np.clip(a,0,1);return a

def top_indices(row,source,eligible,k=10):
    mask=np.asarray(eligible).copy();mask[source]=False;mask&=np.isfinite(row)&(row>0)
    ids=np.flatnonzero(mask)
    return ids[np.argsort(-row[ids],kind='stable')][:k]
