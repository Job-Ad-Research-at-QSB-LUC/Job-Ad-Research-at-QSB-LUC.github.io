"""Frozen relatedness representations evaluated on recovered CTOT survey releases."""
from pathlib import Path
import re,json,hashlib
from collections import defaultdict
import numpy as np
import pandas as pd
P=Path(__file__).resolve().parent;ROOT=P.parents[1];S=P/'sources';A=ROOT/'analysis/relatedness_refresh_20260922';V=A/'transition_validation'
SEED=20260927

def mapping():
    # The code-list worksheet is not a row-wise split/merge crosswalk: newly
    # created codes are placed in destination order. Never forward-fill codes.
    z=pd.read_excel(S/'census_2002_2010_crosswalk.xls',sheet_name='2002to2010xwalk',header=3)
    def code(v):
        try:
            f=float(str(v).strip())
            return int(f) if np.isfinite(f) and f==int(f) else None
        except (ValueError,TypeError):return None
    def norm(v):return re.sub(r'[^a-z0-9]','',str(v).lower())
    def soc(v):return str(v).strip().upper()
    x=pd.read_excel(S/'census_2002_2010_crosswalk.xls',sheet_name='2010OccCodeList',header=4)
    x.columns=['unused','title','census','soc'];x['census']=x.census.astype(str).str.strip();x['soc']=x.soc.map(soc)
    x=x[x.census.str.fullmatch(r'\d{4}')].copy();x['census']=x.census.astype(int)
    bridge=pd.read_csv(ROOT/'analysis/case_selection/sources/onet_2010_to_2019.csv')
    bridge=pd.DataFrame({'old':bridge.iloc[:,0].str[:7],'new':bridge.iloc[:,2].str[:7]}).drop_duplicates()
    allold=set(bridge.old);valid=bridge[bridge.old.map(bridge.groupby('old').new.nunique()).eq(1)&bridge.new.map(bridge.groupby('new').old.nunique()).eq(1)]
    cross=valid.set_index('old').new.to_dict()
    elig=pd.read_csv(A/'results/comparison_universe.csv');eligible=set(elig.loc[elig.common_eligible,'occupational_code'])
    specialty=defaultdict(list);all_specialty=defaultdict(set)
    for c in elig.occupational_code:all_specialty[c[:7]].add(c)
    for c in sorted(eligible):specialty[c[:7]].append(c)
    def expand(pat):
        if not re.fullmatch(r'\d{2}-\d{4}',pat):return set()
        return {c for c in allold if c.startswith(pat.rstrip('0'))} if pat.endswith('0') else ({pat} if pat in allold else set())
    # X means a listed subset, not every matching SOC. The adjacent subsidiary
    # rows in column G enumerate its constituent SOCs explicitly.
    explicit={};active=None
    for _,r in z.iterrows():
        new=code(r.iloc[4])
        if new is not None:
            active=new if 'X' in soc(r.iloc[3]) else None
            if active is not None:explicit[active]=[]
        elif code(r.iloc[1]) is not None:active=None
        if active is not None and re.fullmatch(r'\d{2}-\d{4}',soc(r.iloc[6])):
            explicit[active].append(soc(r.iloc[6]))
    assert all(explicit.get(int(r.census)) for _,r in x[x.soc.str.contains('X')].iterrows())
    groups={};audit=[];titles={};families={}
    for _,r in x.iterrows():
        pat=r.soc;parts=explicit[int(r.census)] if 'X' in pat else [pat]
        olds=set().union(*(expand(p) for p in parts));reason='included';members=[]
        if not olds:reason='no_civilian_SOC_members'
        elif any(not expand(p) for p in parts):reason='unrepresented_SOC_component'
        elif any(c not in cross for c in olds):reason='nonbijective_SOC2010_2018'
        elif any(cross[c] not in specialty for c in olds):reason='incomplete_fixed_population'
        elif any(all_specialty[cross[c]]-eligible for c in olds):reason='partial_specialty_population'
        else:members=sorted({v for c in olds for v in specialty[cross[c]]});groups[int(r.census)]=members;families[int(r.census)]=pat[:2]
        titles[int(r.census)]=r.title
        audit.append({'census2010':r.census,'title':r.title,'soc_pattern':pat,'explicit_soc_components':';'.join(parts),'soc2010_members':';'.join(sorted(olds)),'status':reason,'specialties':';'.join(members)})
    # Additional conservative vetoes come from Census's ACS conversion tables.
    # These use coarser PUMS categories. They only veto potentially changed
    # codes; they never create a detailed-Census mapping or allocate weights.
    rates=pd.read_excel(S/'census_conversion_rates.xlsx',sheet_name='2. Total Conversion Rate',header=None)
    start=next(i for i,r in rates.iterrows() if str(r.iloc[0]).strip()=='2002 OCCP')
    changed_old=set();changed_new=set()
    for _,r in rates.iloc[start+1:].iterrows():
        o=code(r.iloc[0]);n=code(r.iloc[3])
        if o is not None and n is not None:changed_old.add(o);changed_new.add(n)
    # Only explicit, same-row correspondences with identical SOC patterns AND
    # normalized titles survive. This sacrifices valid renamed occupations to
    # avoid inferring completeness from visual placement or identical numbers.
    records=[]
    for _,r in z.iterrows():
        o=code(r.iloc[1]);n=code(r.iloc[4])
        if o is None:continue
        reason='included'
        if n is None:reason='no_explicit_same_row_destination'
        elif o in changed_old or n in changed_new:reason='potential_change_in_ACS_conversion_table'
        elif soc(r.iloc[0])!=soc(r.iloc[3]):reason='SOC_pattern_changed'
        elif norm(r.iloc[2])!=norm(r.iloc[5]):reason='title_changed_or_scope_uncertain'
        elif n not in groups:reason='destination_outside_complete_model_population'
        records.append({'census2002':o,'census2010':n,'title2002':r.iloc[2],'title2010':r.iloc[5],'soc2000_pattern':soc(r.iloc[0]),'soc2010_pattern':soc(r.iloc[3]),'status':reason})
    b=pd.DataFrame(records)
    paired=b[b.census2010.notna()];oc=paired.groupby('census2002').census2010.nunique();nc=paired.groupby('census2010').census2002.nunique()
    b['bijective']=b.status.eq('included')&b.census2002.map(oc).eq(1)&b.census2010.map(nc).eq(1)
    b.loc[b.status.eq('included')&~b.bijective,'status']='nonbijective_explicit_correspondence'
    b.to_csv(P/'census2002_2010_mapping_audit.csv',index=False);pd.DataFrame(audit).to_csv(P/'census2010_model_mapping_audit.csv',index=False)
    conv={int(r.census2002):int(r.census2010) for r in b[b.bijective].itertuples()}
    g02={o:groups[n] for o,n in conv.items()};t02={o:titles[n] for o,n in conv.items()};f02={o:families[n] for o,n in conv.items()}
    for gg in [groups,g02]:
        flat=[c for cs in gg.values() for c in cs];assert len(flat)==len(set(flat)), 'overlapping candidate occupations'
    assert explicit[6940]==['47-5051','47-5099'] and explicit[9260]==['53-4041','53-4099']
    assert 320 not in g02 and 3130 not in g02 and 4550 not in g02
    return {'2010':(groups,titles,families),'2002':(g02,t02,f02)}

def matrices():
    mats={}
    for name,file in [('task',A/'results/task_filtered_similarity.npz')]:
        with np.load(file) as z:mats[name]=(z['codes'].astype(str),z['similarity'])
    for name in ['skills','abilities']:
        with np.load(ROOT/f'analysis/postings_skills_abilities_20260927/{name}_vectors.npz',allow_pickle=True) as z:
            v=z['vectors'];mats[name]=(z['codes'].astype(str),v@v.T)
    q=pd.read_csv(V/'sources/onet_full_scores.csv.gz');codes=np.array(sorted(set(q.source)|set(q.target)));ix={c:i for i,c in enumerate(codes)};m=np.zeros((len(codes),len(codes)));m[q.source.map(ix),q.target.map(ix)]=q.score;mats['onet_quantitative']=(codes,m)
    q=pd.read_csv(ROOT/'analysis/occupation_relatedness/sources/related_occupations_31_0.csv');m=np.zeros_like(m)
    for a,b,r in q[['O*NET-SOC Code','Related O*NET-SOC Code','Index']].itertuples(index=False,name=None):m[ix[a],ix[b]]=(21-r)/20
    mats['onet_published']=(codes,m)
    return mats

def frames():
    d=pd.read_csv(S/'CPS-SIPP_dataset.csv');assert d.shape==(43350,60)
    st=pd.read_stata(S/'CPS-SIPP-dataset.dta',convert_categoricals=False);assert np.allclose(d.reweight,st.reweight,rtol=1e-6)
    labs=pd.io.stata.StataReader(S/'CPS-SIPP-dataset.dta').value_labels();assert labs['datasource_lab'][0]=='SIPP' and labs['datasource_lab'][1]=='CPS'
    out={}
    for n,k in [('CPS',1),('SIPP',0)]:
        q=d[d.source.eq(k)].rename(columns={'occ_SRCE':'origin','occ_DEST':'destination','reweight':'weight','id':'person'})[['origin','destination','weight','person']].copy();out[n]=(q,'2010',0)
    for h in [3,5,10]:
        cols=['r_id','ptrajweight','psid','startingocc','endingocc']
        q=pd.read_csv(S/'Trajectories_(3_years)_dataset.csv',usecols=cols) if h==3 else pd.read_stata(S/f'Trajectories-{h}-years-dataset.dta',columns=cols,convert_categoricals=False)
        assert len(q)=={3:46789,5:43037,10:31813}[h]
        for name,k in [('NLSY97',0),('PSID',1)]:out[f'{name}_{h}y']=(q[q.psid.eq(k)].rename(columns={'startingocc':'origin','endingocc':'destination','ptrajweight':'weight','r_id':'person'})[['origin','destination','weight','person']].copy(),'2002',h)
    return out

def main():
    maps=mapping();mats=matrices();frameset=frames();prepared={};candidate_rows=[]
    for system,(groups,titles,families) in maps.items():
        codes=np.array(sorted(groups));ci={c:i for i,c in enumerate(codes)};scores={}
        for name,(sp,sim) in mats.items():
            si={c:i for i,c in enumerate(sp)};G=np.zeros((len(codes),len(sp)))
            for i,c in enumerate(codes):G[i,[si[s] for s in groups[c]]]=1/len(groups[c])
            a=G@sim@G.T;np.fill_diagonal(a,0);assert np.isfinite(a).all();scores[name]=a
        for c in codes:candidate_rows.append(dict(system=system,code=c,title=titles[c],family=families[c],specialties=';'.join(groups[c])))
        prepared[system]=(codes,ci,scores)
    pd.DataFrame(candidate_rows).to_csv(P/'candidate_occupations.csv',index=False)
    per=[];coverage=[];edges=[];summaries=[];intervals=[]
    for dataset,(raw,system,horizon) in frameset.items():
        groups,titles,fam=maps[system];codes,ci,scores=prepared[system];n=len(codes)
        complete=raw.origin.notna()&raw.destination.notna()&raw.weight.gt(0)&np.isfinite(raw.weight)
        d=raw[complete&raw.origin.ne(raw.destination)].copy();d[['origin','destination']]=d[['origin','destination']].astype(int)
        stats=d.groupby('origin').agg(n=('weight','size'),weight=('weight','sum'),weight2=('weight',lambda x:(x*x).sum()))
        truth=d.groupby(['origin','destination']).weight.sum();allw=raw.loc[raw.weight.gt(0),'weight'].sum()
        for min_n in [20,40]:
            origins=sorted(set(stats.index[stats.n.ge(min_n)])&set(groups));sel=d[d.origin.isin(origins)];norig=len(origins)
            assert norig>0
            cov=dict(dataset=dataset,system=system,horizon=horizon,min_n=min_n,raw_records=len(raw),distinct_ids=None if dataset=="CPS" else raw.person.nunique(),distinct_release_ids=raw.person.nunique(),id_semantics="unusable_constant_release_id" if dataset=="CPS" else "unverified_supplied_id" if dataset=="SIPP" else "respondent_id",missing_endpoint_records=int(raw.destination.isna().sum()),same_occupation_records=int((complete&raw.origin.eq(raw.destination)).sum()),changed_records=len(d),eligible_origins=norig,candidates=n,eligible_records=len(sel),eligible_origin_weight_share=sel.weight.sum()/d.weight.sum(),destination_weight_coverage=sel.loc[sel.destination.isin(groups),'weight'].sum()/sel.weight.sum(),known_endpoint_weight_share=raw.loc[complete,'weight'].sum()/allw)
            coverage.append(cov)
            obs=np.zeros((norig,n));origin_mass=stats.loc[origins,'weight'].to_numpy();ori={o:i for i,o in enumerate(origins)}
            for (o,t),w in truth.items():
                if o in ori and t in ci:obs[ori[o],ci[t]]=w
            # Fit popularity only on other source families. No test-family transitions enter it.
            pred={name:a for name,a in scores.items()};pop=np.zeros((n,n));fams=np.array([fam[o] for o in origins])
            for f in sorted(set(fams)):
                v=obs[fams!=f].sum(0)
                for o in np.array(origins)[fams==f]:pop[ci[o]]=v;pop[ci[o],ci[o]]=0
            pred={**pred,'popularity_other_family':pop}
            for o in origins:
                tr=truth.loc[o].sort_values(ascending=False);truth_rank=sorted(tr.index,key=lambda t:(-tr[t],t));i=ci[o];total=stats.loc[o,'weight'];covered=tr[tr.index.isin(groups)].sum()
                for model,a in pred.items():
                    js=np.flatnonzero((a[i]>0)&(np.arange(n)!=i));js=js[np.argsort(-np.round(a[i,js],12),kind='stable')];dest=codes[js][:20]
                    if min_n==40:
                        for rank,t in enumerate(dest,1):edges.append(dict(dataset=dataset,model=model,origin=o,destination=int(t),rank=rank))
                    for k in [10,20]:
                        got=set(dest[:k]);mass=sum(tr.get(t,0) for t in got);den=min(k,len(truth_rank))
                        per.append(dict(dataset=dataset,min_n=min_n,model=model,k=k,origin=o,family=fam[o],n=int(stats.loc[o,'n']),effective_n=float(total**2/stats.loc[o,'weight2']),total_weight=total,captured_weight=mass,capture=mass/total,covered_capture=mass/covered if covered else np.nan,topk_recovery=len(got&set(truth_rank[:k]))/den,observed_destinations=len(tr),returned=len(got)))
            print(dataset,min_n,norig,n,'coverage',round(cov['destination_weight_coverage'],3),flush=True)
    per=pd.DataFrame(per);cov=pd.DataFrame(coverage);per.to_csv(P/'results_by_origin.csv.gz',index=False);cov.to_csv(P/'coverage.csv',index=False);pd.DataFrame(edges).to_csv(P/'ranked_neighbors.csv.gz',index=False)
    for keys,g in per.groupby(['dataset','min_n','model','k']):
        summaries.append(dict(zip(['dataset','min_n','model','k'],keys),n_origins=len(g),capture=g.capture.mean(),pooled_capture=g.captured_weight.sum()/g.total_weight.sum(),covered_capture=g.covered_capture.mean(),topk_recovery=g.topk_recovery.mean(),mean_returned=g.returned.mean()))
    summ=pd.DataFrame(summaries);summ.to_csv(P/'summary.csv',index=False)
    rng=np.random.default_rng(SEED)
    for (ds,k),g in per[per.min_n.eq(40)].groupby(['dataset','k']):
        base=g[g.model.eq('task')].set_index('origin').sort_index();families=sorted(base.family.unique());bins=np.array([families.index(f) for f in base.family]);den=np.bincount(bins,minlength=len(families));draw=rng.multinomial(len(families),np.ones(len(families))/len(families),size=2000)
        for m,q in g.groupby('model'):
            if m=='task':continue
            q=q.set_index('origin').loc[base.index];delta=base.capture-q.capture;num=np.bincount(bins,weights=delta,minlength=len(families));b=draw@num/(draw@den)
            intervals.append(dict(dataset=ds,k=k,contrast='task_minus_'+m,delta=delta.mean(),low=np.quantile(b,.025),high=np.quantile(b,.975),families=len(families),win_share=(delta>1e-12).mean()))
    pd.DataFrame(intervals).to_csv(P/'contrasts.csv',index=False)
    # Schema checks for dashboard derivatives. They are not independent outcome samples.
    dashboards={}
    for name,expected in [('Dashboard_trajectories-dataset.csv',(507,19)),('Dashboard_cluster_dataset.csv',(15,112))]:
        q=pd.read_csv(S/name);assert q.shape==expected;dashboards[name]={'rows':len(q),'columns':len(q.columns)}
    manifest={'status':'PASS','seed':SEED,'support':5,'minimum_primary_changes':40,'bootstrap':'2000 source-family draws, fixed predictions; descriptive, not survey-design inference','dashboard_schemas':dashboards,'sources':{p.name:{'bytes':p.stat().st_size,'sha256':hashlib.sha256(p.read_bytes()).hexdigest()} for p in S.iterdir() if p.suffix in ['.csv','.dta','.xls','.xlsx','.pdf']},'raw_counts':{k:len(v[0]) for k,v in frameset.items()},'candidate_counts':{k:len(v[0]) for k,v in maps.items()}}
    (P/'verification.json').write_text(json.dumps(manifest,indent=2));print(summ[(summ.min_n==40)&(summ.k==20)].to_string(index=False))
if __name__=='__main__':main()
