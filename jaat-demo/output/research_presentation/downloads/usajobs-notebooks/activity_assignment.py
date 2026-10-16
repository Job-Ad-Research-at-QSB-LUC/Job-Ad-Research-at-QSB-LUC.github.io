"""Fractional task-incidence allocation outside native O*NET DWA inventories.
Inputs: incidence(code, task_id, weight), official27.2 occupation/task/DWA links.
Counts are pre-filter. Output contains aggregate percentages only.
"""
import numpy as np
import pandas as pd
from scipy import sparse

def calculate(incidence, links):
    links=links[['O*NET-SOC Code','Task ID','DWA ID']].drop_duplicates()
    edges=links[['Task ID','DWA ID']].drop_duplicates()
    tasks=sorted(incidence.task_id.unique());ti={t:i for i,t in enumerate(tasks)}
    acts=sorted(links['DWA ID'].unique());ai={a:i for i,a in enumerate(acts)}
    edges=edges[edges['Task ID'].isin(ti)];degree=edges.groupby('Task ID').size()
    B=sparse.csr_matrix((1/edges['Task ID'].map(degree),(edges['Task ID'].map(ti),edges['DWA ID'].map(ai))),shape=(len(tasks),len(acts)))
    total=float(incidence.weight.sum());out=[]
    for digits,width in [(6,7),(4,5),(2,2)]:
        native=links.assign(group=links['O*NET-SOC Code'].str[:width])[['group','DWA ID']].drop_duplicates()
        groups=sorted(native.group.unique());gi={g:i for i,g in enumerate(groups)}
        N=sparse.csr_matrix((np.ones(len(native)),(native.group.map(gi),native['DWA ID'].map(ai))),shape=(len(groups),len(acts)))
        q=incidence[incidence.code.str[:width].isin(groups)&incidence.task_id.isin(degree.index)]
        g=q.code.str[:width].map(gi).to_numpy();t=q.task_id.map(ti).to_numpy();w=q.weight.to_numpy()
        X=sparse.csr_matrix((w,(g,t)),shape=(len(groups),len(tasks)));Y=X@B
        den=float(w.sum());inside=float(Y.multiply(N).sum())
        assert np.isclose(Y.sum(),den,rtol=1e-12)
        lookup=N@B.T
        assert np.isclose(inside,np.dot(w,np.asarray(lookup[g,t]).ravel()),rtol=1e-12)
        out.append(dict(soc_digits=digits,dwa_outside_share=1-inside/den,evaluable_incidence=den,total_incidence=total,evaluable_share=den/total))
    return pd.DataFrame(out)
