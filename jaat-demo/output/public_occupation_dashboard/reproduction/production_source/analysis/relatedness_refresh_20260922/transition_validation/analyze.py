"""Frozen occupational maps versus public, historical occupational transitions."""
from pathlib import Path
import hashlib, json, zipfile
import numpy as np
import pandas as pd
from scipy.stats import spearmanr

P=Path(__file__).resolve().parent
A=P.parent
ROOT=A.parents[1]
SST=ROOT/'crosswalks/occupational_transitions_sst_2020'
KS=[10,20,30]
SEED=20260922
INPUTS=set()

def sha(p): return hashlib.sha256(Path(p).read_bytes()).hexdigest()
def csv(p,**kw): INPUTS.add(Path(p)); return pd.read_csv(p,**kw)
def save(d,name): d.to_csv(P/name,index=False)

def read_sst():
    p=SST/'occupation_transitions_public_data_set.csv.zip';INPUTS.add(p)
    with zipfile.ZipFile(p) as z:
        d=pd.read_csv(z.open('occupation_transitions_public_data_set.csv'),dtype={'soc1':str,'soc2':str})
    assert not d.duplicated(['soc1','soc2']).any() and not d.soc1.eq(d.soc2).any()
    assert d.transition_share.between(0,1).all()
    assert d.groupby('soc1').total_obs.nunique().eq(1).all()
    assert np.allclose(d.groupby('soc1').transition_share.sum(),1,atol=1e-6)
    return d

def npz(p,key='similarity'):
    INPUTS.add(p)
    with np.load(p) as z: return z['codes'].astype(str),z[key].copy()

def mapping():
    x=csv(ROOT/'analysis/case_selection/sources/onet_2010_to_2019.csv')
    m=pd.DataFrame({'soc2010':x.iloc[:,0].str[:7],'soc2018':x.iloc[:,2].str[:7]}).drop_duplicates()
    m['n_new_per_old']=m.soc2010.map(m.groupby('soc2010').soc2018.nunique())
    m['n_old_per_new']=m.soc2018.map(m.groupby('soc2018').soc2010.nunique())
    m['bijective']=m.n_new_per_old.eq(1)&m.n_old_per_new.eq(1)
    save(m,'crosswalk_audit.csv')
    return m[m.bijective].set_index('soc2018').soc2010.to_dict()

def aggregate(scores,codes,group_codes):
    # Average fixed specialty-to-specialty similarities; no outcome-dependent weights.
    ix={c:i for i,c in enumerate(codes)}
    g=np.zeros((len(group_codes),len(codes)))
    for i,cs in enumerate(group_codes):
        assert all(c in ix for c in cs)
        g[i,[ix[c] for c in cs]]=1/len(cs)
    a=g@scores@g.T
    assert np.isfinite(a).all()
    np.fill_diagonal(a,0)
    return a

def order(row,i,allow_nonpositive=False):
    js=np.flatnonzero(np.isfinite(row)&((row>0)|allow_nonpositive)&(np.arange(len(row))!=i))
    return js[np.argsort(-row[js],kind='stable')]

def full_onet():
    f=P/'sources/onet_full_scores.csv.gz'
    d=csv(f,dtype={'source':str,'target':str})
    codes=np.array(sorted(set(d.source)|set(d.target)));ix={c:i for i,c in enumerate(codes)}
    scores=np.zeros((len(codes),len(codes)))
    scores[d.source.map(ix),d.target.map(ix)]=d.score
    assert not d.duplicated(['source','target']).any()
    assert len(d)==len(codes)*(len(codes)-1)
    return codes,scores

def bootstrap_differences(per):
    out=[];rng=np.random.default_rng(SEED)
    for (universe,k),q in per.groupby(['universe','k']):
        base=q[q.method.eq('onet_score')].set_index('origin')
        families=sorted(base.family.unique());fi={f:i for i,f in enumerate(families)}
        draws=rng.multinomial(len(families),np.repeat(1/len(families),len(families)),size=2000)
        for method,g in q.groupby('method'):
            if method=='onet_score':continue
            g=g.set_index('origin').loc[base.index]
            for metric in ['capture_all','capture_covered']:
                diff=g[metric]-base[metric]
                fam=base.family.to_numpy();w=np.ones(len(g));fw=base.total_obs.to_numpy()
                for weight_name,weights in [('equal_origin',w),('effective_volume',fw)]:
                    nums=np.bincount([fi[f] for f in fam],weights=diff.to_numpy()*weights,minlength=len(families))
                    dens=np.bincount([fi[f] for f in fam],weights=weights,minlength=len(families))
                    boot=draws@nums/(draws@dens)
                    out.append(dict(universe=universe,k=k,method=method,reference='onet_score',metric=metric,
                        weighting=weight_name,n_origins=len(g),n_families=len(families),delta=np.average(diff,weights=weights),
                        low=np.quantile(boot,.025),high=np.quantile(boot,.975),draws=2000))
    return pd.DataFrame(out)

def main():
    P.mkdir(exist_ok=True);sst=read_sst();cross=mapping()
    origin_info=sst.groupby('soc1').agg(total_obs=('total_obs','first'),title=('soc1_name','first'))
    target_titles=sst.groupby('soc2').soc2_name.first().to_dict()
    titles={**target_titles,**origin_info.title.to_dict()}
    prior=csv(ROOT/'analysis/relatedness_review_20260921/results/comparison_universe.csv')
    eligible=set(prior.loc[prior.common_eligible,'occupational_code'])
    pair_codes,pair_scores=npz(ROOT/'analysis/relatedness_halfpage_reviewed_20260922/results/pair_similarity.npz')
    matrices={m:npz(A/'results'/f'{m}_filtered_similarity.npz') for m in ['task','dwa','iwa']}
    matrices['technology']=npz(A/'results/commodity_refresh/similarity_matrices_exploratory.npz','commodity_count_share')
    matrices['onet_score']=full_onet()
    official=csv(ROOT/'analysis/occupation_relatedness/sources/related_occupations_31_0.csv')
    ocodes=matrices['onet_score'][0];oi={o:i for i,o in enumerate(ocodes)}
    os=np.zeros((len(ocodes),len(ocodes)))
    for s,t,r in official[['O*NET-SOC Code','Related O*NET-SOC Code','Index']].itertuples(index=False,name=None):
        os[oi[s],oi[t]]=(21-r)/20
    matrices['onet_published']=ocodes,os
    matrices['task_pair']=pair_codes,pair_scores
    universes={'principal':eligible,'single_specialty':eligible,'pair_matched':eligible&set(pair_codes)}
    per=[];edges=[];coverage=[];members=[];linkparts=[];paircorr=[];candidate_rows=[]
    for univ,occset in universes.items():
        groups={}
        for o in sorted(occset):
            new=o[:7];old=cross.get(new)
            if old in titles:groups.setdefault(old,[]).append(o)
        if univ=='single_specialty':groups={o:cs for o,cs in groups.items() if len(cs)==1}
        codes=sorted(groups);ci={c:i for i,c in enumerate(codes)}
        origins=sorted(set(codes)&set(origin_info.index));rows=[ci[c] for c in origins]
        n=len(codes);obs=np.zeros((n,n))
        q=sst[sst.soc1.isin(codes)&sst.soc2.isin(codes)]
        obs[q.soc1.map(ci),q.soc2.map(ci)]=q.transition_share
        all_mass=obs.sum(axis=1);weights=origin_info.loc[origins,'total_obs'].to_numpy()
        assert (all_mass[rows]>0).all()
        for o in codes:
            candidate_rows.append(dict(universe=univ,soc2010=o,soc2018=groups[o][0][:7],title=titles[o],
                is_origin=o in origins,n_specialties=len(groups[o]),specialties=';'.join(groups[o])))
        for o in origins:
            members.append(dict(universe=univ,origin=o,title=titles[o],family=o[:2],total_obs=float(origin_info.loc[o,'total_obs']),
                covered_transition_share=float(all_mass[ci[o]]),n_specialties=len(groups[o])))
        coverage.append(dict(universe=univ,n_candidates=n,n_origins=len(origins),sst_all_origins=len(origin_info),
            source_effective_volume_share=weights.sum()/origin_info.total_obs.sum(),
            mean_destination_mass_covered=float(all_mass[rows].mean()),volume_destination_mass_covered=float(np.average(all_mass[rows],weights=weights))))
        methods=[m for m in matrices if m!='task_pair' or univ=='pair_matched']
        agg={m:aggregate(matrices[m][1],matrices[m][0],[groups[c] for c in codes]) for m in methods}
        # Destination popularity learned only from other source families, on the same matched sample.
        pop=np.zeros((n,n));origin_families=np.array([o[:2] for o in origins])
        for fam in sorted(set(origin_families)):
            train=origin_families!=fam
            incoming=(obs[np.array(rows)[train]]*weights[train,None]).sum(axis=0)
            incoming=incoming/incoming.sum()
            for o in np.array(origins)[~train]:pop[ci[o]]=incoming
        np.fill_diagonal(pop,0);agg['destination_popularity_cv']=pop
        selected={}
        for method,sim in agg.items():
            print(univ,method,len(origins),flush=True)
            for o in origins:
                i=ci[o];js=order(sim[i],i,allow_nonpositive=method=='onet_score');selected[method,o]=js[:20]
                for rank,j in enumerate(js[:30],1):
                    edges.append(dict(universe=univ,method=method,origin=o,destination=codes[j],rank=rank,
                        score=float(sim[i,j]),transition_share=float(obs[i,j]),origin_title=titles[o],destination_title=titles[codes[j]]))
                for k in KS:
                    got=js[:k];capture=float(obs[i,got].sum())
                    expected=float(pop[i,got].sum()/pop[i].sum())
                    per.append(dict(universe=univ,method=method,k=k,origin=o,title=titles[o],family=o[:2],
                        n_returned=len(got),total_obs=float(origin_info.loc[o,'total_obs']),
                        covered_transition_share=float(all_mass[i]),capture_all=capture,capture_covered=capture/all_mass[i],
                        expected_covered_from_popularity=expected,expected_all_from_popularity=expected*all_mass[i],
                        observed_positive_destinations=int((obs[i,got]>0).sum())))
                cand=np.arange(n)!=i
                rho=spearmanr(sim[i,cand],obs[i,cand]).statistic if np.ptp(sim[i,cand]) else np.nan
                paircorr.append(dict(universe=univ,method=method,origin=o,spearman=rho))
        for method in ['task','dwa','iwa','technology']+(['task_pair'] if univ=='pair_matched' else []):
            for ref in ['onet_score','onet_published']:
                for o in origins:
                    left=set(selected[method,o]);right=set(selected[ref,o]);i=ci[o]
                    for name,s in [('both',left&right),('postings_only',left-right),('onet_only',right-left),('neither',set(range(n))-{i}-(left|right))]:
                        mass=float(obs[i,list(s)].sum())
                        linkparts.append(dict(universe=univ,method=method,reference=ref,origin=o,title=titles[o],family=o[:2],
                            group=name,n_destinations=len(s),transition_mass=mass,covered_transition_mass=mass/all_mass[i],
                            total_obs=float(origin_info.loc[o,'total_obs'])))
    per=pd.DataFrame(per);edge=pd.DataFrame(edges);cov=pd.DataFrame(coverage);parts=pd.DataFrame(linkparts)
    summ=[]
    for (u,m,k),g in per.groupby(['universe','method','k']):
        for w,weights in [('equal_origin',np.ones(len(g))),('effective_volume',g.total_obs)]:
            summ.append(dict(universe=u,method=m,k=k,weighting=w,n_origins=len(g),
                capture_all=np.average(g.capture_all,weights=weights),capture_covered=np.average(g.capture_covered,weights=weights),
                expected_covered_from_popularity=np.average(g.expected_covered_from_popularity,weights=weights),
                expected_all_from_popularity=np.average(g.expected_all_from_popularity,weights=weights),
                observed_expected_ratio=np.average(g.capture_covered,weights=weights)/np.average(g.expected_covered_from_popularity,weights=weights),
                mean_returned=np.average(g.n_returned,weights=weights),n_returning=int(g.n_returned.gt(0).sum())))
    summary=pd.DataFrame(summ)
    assert not per.duplicated(['universe','method','k','origin']).any()
    assert per.capture_all.ge(0).all() and per.capture_all.le(per.covered_transition_share+1e-10).all()
    for _,g in per.groupby(['universe','method','origin']):assert g.sort_values('k').capture_all.diff().dropna().ge(-1e-12).all()
    # Comparable metrics also preserve sources that have no positive pair neighbor.
    assert per.groupby(['universe','method','k']).origin.nunique().groupby(level=0).nunique().eq(1).all()
    save(per,'capture_by_origin.csv.gz');save(edge,'ranked_neighbors.csv.gz');save(summary,'capture_summary.csv')
    save(cov,'population_coverage.csv');save(pd.DataFrame(members),'origin_coverage.csv');save(pd.DataFrame(candidate_rows),'candidate_occupations.csv')
    save(parts,'top20_link_groups.csv.gz');save(pd.DataFrame(paircorr),'within_origin_rank_correlations.csv')
    save(bootstrap_differences(per),'paired_family_intervals.csv')
    # Attrition traces every SST origin, including those absent from all maps.
    cand=pd.DataFrame(candidate_rows).query("universe == 'principal'").set_index('soc2010')
    allx=csv(P/'crosswalk_audit.csv');status=[]
    for o,r in origin_info.iterrows():
        x=allx[allx.soc2010.eq(o)]
        reason='included' if o in cand.index else 'no_crosswalk' if x.empty else 'ambiguous_crosswalk' if not x.bijective.any() else 'outside_fixed_912_population'
        status.append(dict(origin=o,title=r.title,total_obs=r.total_obs,status=reason))
    save(pd.DataFrame(status),'origin_attrition.csv')
    hashes={str(p.relative_to(ROOT)):sha(p) for p in sorted(INPUTS)}
    qa=dict(status='PASS',seed=SEED,bootstrap_unit='origin SOC2 family',outcome_fit_by_method={m:m=='destination_popularity_cv' for m in per.method.unique()},
        input_sha256=hashes,coverage=cov.to_dict('records'),methods=sorted(per.method.unique()),evaluated_universe_methods=per[['universe','method']].drop_duplicates().to_dict('records'),cutoffs=KS,
        interpretation='Historical transition convergence, not forecast or causal recommendation quality',
        crosswalk='Official O*NET2010-to2019 crosswalk collapsed to SOC6; only bijective code pairs retained')
    (P/'QA.json').write_text(json.dumps(qa,indent=2))
    print(summary.query("universe == 'principal' and weighting == 'equal_origin'").to_string(index=False))

if __name__=='__main__':main()
