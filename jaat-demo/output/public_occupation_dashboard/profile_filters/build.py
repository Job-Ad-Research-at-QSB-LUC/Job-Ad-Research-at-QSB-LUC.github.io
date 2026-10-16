"""Recompute filtering sensitivities; export compact scores, never NLx profiles.
Run from the research-project root. Restricted aggregate inputs are required.
Existing paper results are asserted before any output is written.
"""
import os
os.environ['OPENBLAS_NUM_THREADS']='1'
import json, importlib.util, shutil
from pathlib import Path
import numpy as np
import pandas as pd
from scipy import sparse
from scipy.stats import spearmanr

R=Path(__file__).resolve().parents[2]
A=R/'analysis/relatedness_refresh_20260922'
D=R/'output/research_presentation/downloads/dangerous-tasks'
OUT=R/'output/public_occupation_dashboard/profile_filters'

def cosine(x):
    p=np.asarray(x.sum(0)).ravel();p/=p.sum()
    q=np.asarray(x.sum(1)).ravel()
    v=(sparse.diags(np.divide(1,q,out=np.zeros_like(q),where=q>0))@x).multiply(np.divide(1,p,out=np.zeros_like(p),where=p>0)).tocsr()
    v.data=np.sqrt(v.data)
    n=np.sqrt(np.asarray(v.multiply(v).sum(1)).ravel())
    v=sparse.diags(np.divide(1,n,out=np.zeros_like(n),where=n>0))@v
    return (v@v.T).toarray()

def main():
    source=R/'analysis/onet_currency_20260928/cross_group/analyze.py'
    spec=importlib.util.spec_from_file_location('filter_benchmarks',source)
    m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
    mats,data=m.getinputs()
    codes=pd.read_csv(A/'atlas_data/relatedness/occupation_coverage.csv').occupational_code.astype(str).to_numpy()
    tids=pd.read_csv(R/'analysis/occupation_relatedness/results/task_matrix_columns.csv').task_id.to_numpy()
    oi={c:i for i,c in enumerate(codes)};ti={t:i for i,t in enumerate(tids)}
    x=pd.read_csv(R/'data/release/occupation_task_marginals.csv.gz')
    v=pd.read_csv(A/'validation/reconciled_decisions.csv').rename(columns={'occ8':'occupational_code'})
    x=x.merge(v[['occupational_code','task_id','review_status']],how='left',on=['occupational_code','task_id'],validate='one_to_one')
    x=x[x.occupational_code.isin(oi)&x.task_id.isin(ti)].copy()
    x['soc6']=x.occupational_code.str[:7]
    bundle=set(pd.read_csv(D/'dangerous_tasks.csv').task_id)
    assert len(bundle)==610
    x['hitmass']=x.weighted_jobs_with_task*x.task_id.isin(bundle)
    variants={'current':x[x.n_jobs_with_task.ge(5)&~x.review_status.isin(['reviewed_not_retained','review_incomplete'])],
              'no_review':x[x.n_jobs_with_task.ge(5)],'all_links':x}
    sims={};scores={};injury_rows=[];summary=[];counts={}
    # Freeze the published fatality grouping and every survey sample.
    fatal=pd.read_csv(R/'analysis/cfoi_task_benchmark_20261008/occupation_scores.csv')
    fatal=fatal[(fatal.year==2024)&(fatal.level=='detailed')]
    survey=pd.read_csv(D/'soii_category_occupation_data.csv')
    total=pd.read_csv(D/'soii_occupation_validation.csv')
    for name,z in variants.items():
        mass=sparse.csr_matrix((z.weighted_jobs_with_task,(z.occupational_code.map(oi),z.task_id.map(ti))),shape=(len(codes),len(tids)))
        if name=='current':
            diff=mass-sparse.load_npz(A/'atlas_data/relatedness/supported_weighted_task_counts.npz')
            assert not diff.nnz or abs(diff.data).max()<1e-8
        counts[name]=len(z);sims[name]=cosine(mass)
        g=z.groupby('soc6')[['weighted_jobs_with_task','hitmass']].sum()
        for dataset,frame in [('CFOI',fatal),('SOII',total)]:
            vals=[]
            for r in frame.itertuples():
                members=r.soc6_codes.split(';') if dataset=='CFOI' else [r.code]
                q=z[z.soc6.isin(members)]
                weighted=q.hitmass.sum()/q.weighted_jobs_with_task.sum()
                unique=len(set(q.task_id)&bundle)/q.task_id.nunique()
                old=r.reviewed_posting_weighted if dataset=='CFOI' else r.posting_weighted
                if name=='current':assert abs(weighted-old)<1e-8
                injury_rows.append(dict(variant=name,dataset=dataset,code=r.code,posting_weighted=weighted,posting_unique=unique))
                vals.append(weighted)
            onet=frame.reviewed_onet_unique if dataset=='CFOI' else frame.onet_unique
            summary.append(dict(application='injury',benchmark=dataset,variant=name,n=len(frame),posting=spearmanr(vals,frame.rate).statistic,onet=spearmanr(onet,frame.rate).statistic))
        # Only scores for occupations already displayed in the injury explorer.
        for code in sorted(set(survey.code)-set(total.code)):
            q=z[z.soc6.eq(code)]
            injury_rows.append(dict(variant=name,dataset='SOII',code=code,posting_weighted=q.hitmass.sum()/q.weighted_jobs_with_task.sum(),posting_unique=len(set(q.task_id)&bundle)/q.task_id.nunique()))
        contact=survey[survey.category.eq('r100|Contact incidents / Total')]
        vals=contact.code.map(g.hitmass/g.weighted_jobs_with_task)
        summary.append(dict(application='injury',benchmark='Contact incidents',variant=name,n=len(contact),posting=spearmanr(vals,contact.rate).statistic,onet=spearmanr(contact.onet_unique,contact.rate).statistic))
    sc,ss=mats['task'];take=[oi[c] for c in sc]
    assert np.max(abs(sims['current'][np.ix_(take,take)]-ss))<1e-8
    ref=pd.read_csv(R/'analysis/equal_length_20261002/by_origin.csv',dtype={'origin':str})
    ref=ref[ref['mode'].eq('equal_length')&ref.included].set_index(['dataset','origin'])
    for ds,(groups,orig,truth,_) in data.items():
        keep=sorted(groups);ci={c:i for i,c in enumerate(keep)}
        orig=[o for o in orig if (ds,str(o)) in ref.index];rr=[];cc=[];vv=[]
        for i,c in enumerate(keep):
            for code in groups[c]:rr.append(i);cc.append(oi[code]);vv.append(1/len(groups[c]))
        G=sparse.csr_matrix((vv,(rr,cc)),shape=(len(keep),len(codes)))
        refs=ref.loc[[(ds,str(o)) for o in orig]]
        for name,S in sims.items():
            a=np.asarray((G@S)@G.T);vals=[]
            for o in orig:
                i=ci[o];k=int(ref.loc[(ds,str(o)),'matched_k'])
                ids=np.flatnonzero((a[i]>0)&(np.arange(len(keep))!=i))
                ids=ids[np.argsort(-np.round(a[i,ids],12),kind='stable')][:k];assert len(ids)==k
                den=1 if ds in ['SST','Emsi'] else sum(truth[o].values())
                vals.append(sum(truth[o].get(keep[j],0) for j in ids)/den)
            if name=='current':assert np.max(abs(np.array(vals)-refs.task.to_numpy()))<1e-8
            summary.append(dict(application='relatedness',benchmark=ds,variant=name,n=len(vals),posting=float(np.mean(vals)),onet=float(refs.onet_published.mean())))
    OUT.mkdir(exist_ok=True)
    pd.DataFrame(summary).to_csv(OUT/'summary.csv',index=False)
    pd.DataFrame(injury_rows).to_csv(OUT/'injury_scores.csv',index=False)
    payload=dict(summary=summary,counts=counts,injury_scores=injury_rows)
    (OUT/'results.js').write_text('window.profileFilterResults='+json.dumps(payload,allow_nan=False,separators=(',',':'))+';\n')
    shutil.copy2(__file__,OUT/'build.py')
    (OUT/'README.txt').write_text('PROFILE FILTER COMPARISON\nExploratory sensitivity, October 12, 2026.\ncurrent: support >=5 job-months; noncanonical rejected/incomplete reviews excluded; unreviewed and canonical links remain.\nno_review: support >=5; no review exclusions.\nall_links: support >=1; no review exclusions.\nSame input sample, design weights, candidates, origins, and recommendation lengths in all relatedness variants. RCA is recomputed over all construction profiles for each variant; square-root RCA and unit L2 normalization are unchanged.\nThe injury bundle remains the same 610 evidence-reviewed tasks. Injury weighted scores are bundle incidences divided by all profile incidences, not RCA. Distinct-task scores count each task once. Published outcome samples and O*NET comparators remain fixed.\nsummary.csv: relatedness values are proportions (multiply by 100 for percentages); injury values are Spearman correlations. injury_scores.csv contains only aggregate scores for displayed occupational groups, not occupation-task profiles.\nThe baseline matrix, every baseline origin recovery, and baseline injury scores are asserted against the existing release before export. build.py uses the research-project directory layout and requires restricted aggregate NLx inputs; it is not standalone replication from public data. No underlying profiles are included.\nPrepared using Codex; selection of sensitivities followed inspection of benchmark results.\n')
    print(pd.DataFrame(summary).to_string(index=False))

if __name__=='__main__':main()
