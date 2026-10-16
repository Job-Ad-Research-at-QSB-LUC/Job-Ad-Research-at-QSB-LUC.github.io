"""DOL public ranked destinations versus frozen occupational maps (no flow weights)."""
from pathlib import Path
import hashlib, json
import numpy as np
import pandas as pd

P = Path(__file__).resolve().parent
REFRESH = P.parents[1]
ROOT = P.parents[3]
SOURCE = ROOT / 'crosswalks/dol_career_pathways_ctot'
KS = [10, 20, 30]
SEED = 20260922
INPUTS = set()

def sha(p):
    return hashlib.sha256(Path(p).read_bytes()).hexdigest()

def read(p, **kw):
    INPUTS.add(Path(p))
    return pd.read_csv(p, **kw)

def save(d, name):
    d.to_csv(P / name, index=False)

def matrix(p, key='similarity'):
    INPUTS.add(p)
    with np.load(p) as z:
        return z['codes'].astype(str), z[key].copy()

def inputs():
    full = read(SOURCE / 'Emsi_dataset.csv').rename(columns={
        'oesCode_origin': 'origin', 'oesCode_dest': 'destination', 'order': 'observed_rank',
        'occ_title_origin': 'origin_title', 'occ_title_dest': 'destination_title'})
    dash = read(SOURCE / 'Dashboard_transitions_dataset.csv').rename(columns={
        'SOCCode': 'origin', 'TransitionSOCCode': 'destination', 'TransitionOrder': 'observed_rank',
        'SOCTitle': 'origin_title', 'TransitionSOCTitle': 'destination_title'})
    assert full.shape == (256831, 28) and dash.shape == (14198, 13)
    for d in [full, dash]:
        assert not d.duplicated(['origin', 'destination']).any()
        assert not d.duplicated(['origin', 'observed_rank']).any()
        assert not d.origin.eq(d.destination).any()
        assert d.origin.nunique() == 458
        assert d.observed_rank.ge(1).all()
    ranks = full.groupby('origin').observed_rank.agg(['min', 'max', 'size'])
    assert ranks['min'].eq(1).all() and ranks['max'].eq(ranks['size']).all()
    missing = dash[dash.destination.isna()]
    assert len(missing) == 458 and missing.observed_rank.eq(31).all()
    assert missing.destination_title.eq('All other occupations').all()
    dash = dash.dropna(subset=['destination']).copy()
    assert dash.groupby('origin').size().eq(30).all()
    assert set(full.origin) == set(dash.origin)
    match = dash.merge(full, on=['origin', 'destination'], suffixes=('_dashboard', '_full'),
                       how='left', validate='one_to_one')
    assert len(match) == 13740 and match.observed_rank_full.notna().all()
    match['rank_difference'] = match.observed_rank_dashboard - match.observed_rank_full
    save(match[['origin', 'destination', 'origin_title_full', 'destination_title_full',
                'observed_rank_full', 'observed_rank_dashboard', 'rank_difference']], 'dashboard_rank_audit.csv')
    source_sets = full[full.observed_rank.le(30)].groupby('origin').destination.agg(set)
    dashboard_sets = dash.groupby('origin').destination.agg(set)
    consistency = pd.DataFrame([dict(origin=o, n_shared_top30=len(source_sets[o] & dashboard_sets[o]),
        same_top30=source_sets[o] == dashboard_sets[o],
        n_rank_differences=int(match.loc[match.origin.eq(o), 'rank_difference'].ne(0).sum())) for o in source_sets.index])
    save(consistency, 'dashboard_origin_audit.csv')
    # Repeated origin-level percentages do not supply destination flow shares.
    assert full.groupby('origin')[['PctUp', 'PctLateral', 'PctDown']].nunique().eq(1).all().all()
    assert np.allclose(full.PctUp + full.PctLateral + full.PctDown, 100, atol=.0001)
    assert np.allclose(match.PctUp / 100, match.Pct_Up, atol=1e-7)
    prior = read(ROOT / 'analysis/relatedness_review_20260921/results/comparison_universe.csv')
    eligible = set(prior.loc[prior.common_eligible, 'occupational_code'])
    assert len(eligible) == 912
    mats = {m: matrix(REFRESH / 'results' / f'{m}_filtered_similarity.npz') for m in ['task', 'dwa', 'iwa']}
    mats['technology'] = matrix(REFRESH / 'results/commodity_refresh/similarity_matrices_exploratory.npz', 'commodity_count_share')
    raw = read(P.parent / 'sources/onet_full_scores.csv.gz')
    oc = np.array(sorted(set(raw.source) | set(raw.target))); ix = {c:i for i,c in enumerate(oc)}
    os = np.zeros((len(oc), len(oc)))
    os[raw.source.map(ix), raw.target.map(ix)] = raw.score
    assert len(raw) == len(oc) * (len(oc) - 1) and not raw.duplicated(['source', 'target']).any()
    mats['onet_score'] = oc, os
    off = read(ROOT / 'analysis/occupation_relatedness/sources/related_occupations_31_0.csv')
    pub = np.zeros_like(os)
    for s,t,r in off[['O*NET-SOC Code','Related O*NET-SOC Code','Index']].itertuples(index=False, name=None):
        pub[ix[s], ix[t]] = (21-r)/20
    mats['onet_published'] = oc, pub
    mats['task_pair'] = matrix(ROOT / 'analysis/relatedness_halfpage_reviewed_20260922/results/pair_similarity.npz')
    return full, dash, eligible, mats, consistency

def aggregate(codes, scores, groups):
    ix = {c:i for i,c in enumerate(codes)}
    g = np.zeros((len(groups), len(codes)))
    for i, members in enumerate(groups):
        g[i, [ix[c] for c in members]] = 1 / len(members)
    out = g @ scores @ g.T
    assert np.isfinite(out).all()
    np.fill_diagonal(out, 0)
    return out

def ordered(row, i, all_finite=False):
    js = np.flatnonzero(np.isfinite(row) & ((row > 0) | all_finite) & (np.arange(len(row)) != i))
    # Numerical-equivalent means can differ at 1e-17 by multiplication order.
    # Round only sorting keys; retain full input scores in exports.
    return js[np.argsort(-np.round(row[js], 12), kind='stable')]

def intervals(per):
    out = []; rng = np.random.default_rng(SEED)
    for (u, outcome, k), q in per.groupby(['universe', 'outcome', 'k']):
        base = q[q.method.eq('onet_score')].set_index('origin').sort_index()
        families = sorted(base.family.unique()); fi = {f:i for i,f in enumerate(families)}
        draws = rng.multinomial(len(families), np.repeat(1 / len(families), len(families)), size=2000)
        bins = np.array([fi[f] for f in base.family]); dens = np.bincount(bins, minlength=len(families))
        for m, g in q.groupby('method'):
            if m == 'onet_score': continue
            g = g.set_index('origin').loc[base.index]
            for metric in ['recovery_original', 'recovery_matched']:
                delta = (g[metric] - base[metric]).to_numpy()
                nums = np.bincount(bins, weights=delta, minlength=len(families))
                boot = draws @ nums / (draws @ dens)
                out.append(dict(universe=u, outcome=outcome, k=k, method=m, reference='onet_score', metric=metric,
                    delta=float(delta.mean()), low=float(np.quantile(boot,.025)), high=float(np.quantile(boot,.975)),
                    n_origins=len(g), n_families=len(families), draws=2000))
    return pd.DataFrame(out)

def main():
    full, dash, eligible, mats, consistency = inputs()
    onet_meta = read(ROOT / 'crosswalks/onet_occupation_data_31_0.csv')
    valid_soc6 = set(onet_meta['O*NET-SOC Code'].str[:7])
    source_codes = set(full.origin) | set(full.destination)
    titles = dict(zip(full.destination, full.destination_title)); titles.update(dict(zip(full.origin, full.origin_title)))
    full_by = {o:g.sort_values('observed_rank') for o,g in full.groupby('origin')}
    dash_by = {o:g.sort_values('observed_rank') for o,g in dash.groupby('origin')}
    audit = []
    eligible6 = {o[:7] for o in eligible}
    for o in sorted(source_codes):
        status = 'included' if o in eligible6 else 'outside_fixed_912_population' if o in valid_soc6 else 'no_exact_current_SOC6_match'
        audit.append(dict(code=o, title=titles[o], is_origin=o in full_by, status=status))
    save(pd.DataFrame(audit), 'code_coverage_audit.csv')
    universes = {'principal':eligible, 'single_specialty':eligible, 'pair_matched':eligible & set(mats['task_pair'][0])}
    per=[]; edges=[]; populations=[]; candidates=[]; cover=[]; parts=[]; cases=[]
    for univ, occset in universes.items():
        groups={}
        for code in sorted(occset):
            if code[:7] in source_codes: groups.setdefault(code[:7], []).append(code)
        if univ == 'single_specialty': groups={c:gs for c,gs in groups.items() if len(gs)==1}
        codes=sorted(groups); ci={c:i for i,c in enumerate(codes)}; n=len(codes)
        origins=sorted(set(codes) & set(full_by)); oi=np.array([ci[o] for o in origins])
        pop=np.zeros((n,n)); train_top30=np.zeros((len(origins),n)); fam=np.array([o[:2] for o in origins])
        for r,o in enumerate(origins):
            js=[ci[t] for t in full_by[o].head(30).destination if t in ci]
            train_top30[r,js]=1
        for f in sorted(set(fam)):
            counts=train_top30[fam!=f].sum(axis=0)
            for i in oi[fam==f]: pop[i]=counts
        np.fill_diagonal(pop,0)
        methods=[m for m in mats if m!='task_pair' or univ=='pair_matched']
        agg={m:aggregate(mats[m][0],mats[m][1],[groups[c] for c in codes]) for m in methods}
        agg['frequent_destination_cv']=pop
        ranks={(m,o):ordered(a[ci[o]],ci[o],m=='onet_score')[:30] for m,a in agg.items() for o in origins}
        populations.append(dict(universe=univ, n_origins=len(origins), n_candidates=n, source_origins=458,
            origin_coverage=len(origins)/458, n_multi_specialty_origins=sum(len(groups[o])>1 for o in origins)))
        for c in codes:
            candidates.append(dict(universe=univ, code=c, title=titles[c], is_origin=c in origins,
                n_specialties=len(groups[c]), specialties=';'.join(groups[c])))
        for o in origins:
            i=ci[o]; f=full_by[o]; fullrank=dict(zip(f.destination, f.observed_rank)); dr=dash_by[o]
            dashrank=dict(zip(dr.destination,dr.observed_rank))
            for m in agg:
                got=ranks[m,o]
                for rank,j in enumerate(got,1):
                    t=codes[j]
                    edges.append(dict(universe=univ,method=m,origin=o,destination=t,rank=rank,score=float(agg[m][i,j]),
                        origin_title=titles[o],destination_title=titles[t],emsi_rank=fullrank.get(t,np.nan),
                        dashboard_rank=dashrank.get(t,np.nan),onet_published_any_specialty=bool(agg['onet_published'][i,j]>0)))
            for outcome,truth in [('emsi',f),('dashboard',dr)]:
                matched=truth[truth.destination.isin(codes)]
                assert len(matched)>0
                for k in KS:
                    top=set(truth.head(k).destination); top_match=set(matched.head(k).destination)
                    possible=len(top&set(codes))
                    cover.append(dict(universe=univ,outcome=outcome,origin=o,k=k,n_original=k,
                        n_original_matched=possible,ceiling=possible/k,n_matched_targets=len(top_match),
                        total_recorded_destinations=len(truth),total_recorded_matched=len(matched)))
                    for m in agg:
                        got={codes[j] for j in ranks[m,o][:k]}
                        hits=len(got & top); hits_matched=len(got & top_match)
                        per.append(dict(universe=univ,outcome=outcome,method=m,k=k,origin=o,title=titles[o],family=o[:2],
                            n_returned=len(got),hits_original=hits,recovery_original=hits/k,
                            hits_matched=hits_matched,n_matched_targets=len(top_match),recovery_matched=hits_matched/len(top_match),
                            original_target_coverage=possible/k))
                for m in ['task','dwa','iwa','technology']+(['task_pair'] if univ=='pair_matched' else []):
                    l={codes[j] for j in ranks[m,o][:20]};r={codes[j] for j in ranks['onet_score',o][:20]}
                    t=set(truth.head(20).destination)
                    for label,items in [('both',l&r),('postings_only',l-r),('onet_only',r-l),
                        ('neither_matched',set(codes)-{o}-(l|r)),('outside_candidates',t-set(codes))]:
                        hit=len(items&t)
                        parts.append(dict(universe=univ,outcome=outcome,method=m,origin=o,group=label,
                            n_destinations=len(items),hits=hit,recovery_original=hit/20))
            if univ=='principal' and o in ['43-3031','43-4051','31-9095']:
                er=f.set_index('destination')
                for m in ['task','dwa','technology','onet_score']:
                    for rank,j in enumerate(ranks[m,o][:20],1):
                        t=codes[j];attr=er.loc[t] if t in er.index else None
                        onetranks=[codes[x] for x in ranks['onet_score',o]]
                        cases.append(dict(origin=o,origin_title=titles[o],method=m,destination=t,destination_title=titles[t],
                            map_rank=rank,emsi_rank=fullrank.get(t,np.nan),dashboard_rank=dashrank.get(t,np.nan),
                            onet_quantitative_rank_top30=(onetranks.index(t)+1) if t in onetranks else np.nan,
                            onet_published_any_specialty=bool(agg['onet_published'][i,j]>0),
                            median_hourly_wage_difference=float(attr.med_wage_diff) if attr is not None else np.nan,
                            destination_may_require_new_license=int(attr.lic_new) if attr is not None else np.nan))
        print(univ, len(origins), 'origins', n, 'destinations', flush=True)
    per=pd.DataFrame(per); edges=pd.DataFrame(edges); cover=pd.DataFrame(cover)
    summary=per.groupby(['universe','outcome','method','k'],as_index=False).agg(
        n_origins=('origin','nunique'), mean_hits=('hits_original','mean'),recovery_original=('recovery_original','mean'),
        recovery_matched=('recovery_matched','mean'), mean_returned=('n_returned','mean'),
        original_target_coverage=('original_target_coverage','mean'), n_returning=('n_returned',lambda x:int(x.gt(0).sum())))
    assert not per.duplicated(['universe','outcome','method','k','origin']).any()
    assert not edges.duplicated(['universe','method','origin','destination']).any()
    assert not edges.origin.eq(edges.destination).any()
    assert per.recovery_original.between(0,1).all() and per.recovery_matched.between(0,1).all()
    assert per.recovery_original.le(per.original_target_coverage+1e-12).all()
    assert per.groupby(['universe','outcome','method','k']).origin.nunique().groupby(level=0).nunique().eq(1).all()
    parts=pd.DataFrame(parts)
    assert parts.groupby(['universe','outcome','method','origin']).hits.sum().eq(20).all()
    save(per,'recovery_by_origin.csv.gz');save(summary,'recovery_summary.csv');save(edges,'ranked_neighbors.csv.gz')
    save(cover,'outcome_coverage.csv');save(pd.DataFrame(populations),'population_coverage.csv')
    save(pd.DataFrame(candidates),'candidate_occupations.csv');save(parts,'top20_link_groups.csv.gz')
    save(intervals(per),'paired_family_intervals.csv');save(pd.DataFrame(cases),'case_neighbors.csv')
    for f in SOURCE.glob('*.xlsx'):INPUTS.add(f)
    qa=dict(status='PASS', input_sha256={str(f.relative_to(ROOT)):sha(f) for f in sorted(INPUTS)},
        source_rows=256831, source_origins=458, source_destinations=781, dashboard_valid_pairs=13740,
        dashboard_other_rows_excluded=458, rank_differences=int(consistency.n_rank_differences.sum()),
        origins_with_rank_differences=int(consistency.n_rank_differences.gt(0).sum()),
        origins_with_different_top30=int((~consistency.same_top30).sum()),
        source_provenance='User supplied via Wayback Machine; original catalog identified; exact archive snapshot not present locally',
        probabilities_available=False, seed=SEED, population=pd.DataFrame(populations).to_dict('records'))
    (P/'QA.json').write_text(json.dumps(qa,indent=2))
    print(summary.query("universe=='principal' and k==20").to_string(index=False))

if __name__=='__main__':main()
