"""Build an isolated public dashboard using occupation-specific disclosure allowlists.

Run from any directory: python3 analysis/dashboard_release/build_public.py
Only output/public_occupation_dashboard/ is a deployable artifact.
"""
from collections import Counter, defaultdict
from pathlib import Path
import hashlib
import json
import math
import shutil
import tempfile

ROOT=Path(__file__).resolve().parents[2]
HERE=Path(__file__).resolve().parent
SOURCE=ROOT/'analysis/relatedness_refresh_20260922/web'
OUTPUT=ROOT/'output/public_occupation_dashboard'


def read_js(path):
    s=path.read_text()
    return json.loads(s[s.index('(')+1:s.rindex(')')])


def write_js(path,callback,data):
    path.parent.mkdir(parents=True,exist_ok=True)
    path.write_text(callback+'('+json.dumps(data,ensure_ascii=False,separators=(',',':'),allow_nan=False)+');\n')


def allowed_ids(profile,tasks):
    reviewed={int(i) for i,n in profile['marginals'] if profile.get('review_status',{}).get(str(i))=='reviewed_yes'}
    supported={int(i) for i,n in profile['marginals'] if n>200 and profile.get('review_status',{}).get(str(i),'unreviewed') in {'unreviewed','reviewed_yes','canonical_retained'}}
    return reviewed|supported|{int(i) for i,t in tasks.items() if (t['home'][:7]==profile['code'] if len(profile['code'])==7 else t['home']==profile['code'])}


def coordinated_allowed(profiles,tasks):
    """Suppress a parent identity unless every released specialty permits it.

    This deliberately sacrifices parent explanations, never rankings. Even a
    currently zero hidden child is protected: a published sum must not reveal it.
    """
    allowed={code:allowed_ids(p,tasks) for code,p in profiles.items()}
    children=defaultdict(list)
    for code in profiles:
        if len(code)==10: children[code[:7]].append(code)
    for parent,codes in children.items():
        if parent in allowed:
            allowed[parent].intersection_update(*(allowed[c] for c in codes))
    return allowed


def network(edges):
    """Recompute public-only components and layouts, never private positions."""
    adj=defaultdict(set)
    for a,b,*_ in edges:adj[a].add(b);adj[b].add(a)
    unseen=set(adj);groups=[]
    while unseen:
        todo=[min(unseen)];component=set()
        while todo:
            n=todo.pop()
            if n in component:continue
            component.add(n);unseen.discard(n);todo.extend(adj[n]-component)
        groups.append(component)
    groups.sort(key=lambda g:(-sum(e[2] for e in edges if e[0] in g),min(g)))
    components=[]
    for g in groups:
        es=sorted((e for e in edges if e[0] in g),key=lambda e:(-e[2],e[0],e[1]))
        nodes=set(es[0][:2])
        while len(nodes)<6:
            candidates=[e for e in es if (e[0] in nodes)!=(e[1] in nodes)]
            if not candidates:break
            nodes.update(candidates[0][:2])
        induced=[e for e in es if e[0] in nodes and e[1] in nodes]
        parent={n:n for n in nodes}
        def find(n):
            while parent[n]!=n:n=parent[n]
            return n
        tree=[]
        for e in induced:
            a,b=find(e[0]),find(e[1])
            if a!=b:tree.append(e);parent[a]=b
        chosen=tree+[e for e in induced if e not in tree][:max(0,10-len(tree))]
        ids=sorted(nodes);top=(len(ids)+1)//2;pos={}
        for row,part in enumerate([ids[:top],ids[top:]]):
            for j,n in enumerate(part):pos[str(n)]=[.5 if len(part)==1 else .16+.68*j/(len(part)-1),.30+.40*row]
        components.append({'nodes':ids,'edges':chosen,'positions':pos,'component_nodes':len(g)})
    core=next((c for c in components if c['component_nodes']>=4),components[0] if components else {'nodes':[],'edges':[],'positions':{}})
    ids=sorted(adj)
    positions={str(n):[.5+.40*math.cos(2*math.pi*i/max(1,len(ids))),.5+.35*math.sin(2*math.pi*i/max(1,len(ids)))] for i,n in enumerate(ids)}
    return core,components,positions


def public_profile(p,tasks,allowed=None,visible=None):
    allowed=allowed_ids(p,tasks) if allowed is None else allowed;wm=p['weighted_marginals'];linked={i for a,b,n,*_ in p['edges'] if n>0 for i in (a,b)}
    visible=allowed if visible is None else visible
    hidden=linked-allowed;maxlog=max([math.log1p(v) for v in wm.values()]+[1])
    # Counts of size categories only. No private task rank, ID, position or exact frequency.
    bins=Counter(min(3,int(4*math.log1p(wm[str(i)])/maxlog)) for i in hidden)
    edges=[e for e in p['edges'] if e[0] in allowed and e[1] in allowed]
    core,components,positions=network(edges)
    edge_keys={str(e[0])+'-'+str(e[1]) for e in edges}
    return {'code':p['code'],'exclusion_mask_sha256':p['exclusion_mask_sha256'],
        'marginals':[r for r in p['marginals'] if r[0] in visible],
        'weighted_marginals':{i:v for i,v in wm.items() if int(i) in visible},
        'review_status':{i:v for i,v in p.get('review_status',{}).items() if int(i) in visible},
        'weighted_pairs':{k:v for k,v in p['weighted_pairs'].items() if k in edge_keys},
        'edges':edges,'core':core,'components':components,'full_positions':positions,
        'public_allowed_ids':sorted(visible & allowed),
        'public_cloud':{'permitted_linked_ids':sorted(linked&allowed&visible), 'undisplayed_linked_count':len((linked&allowed)-visible),
            'anonymous_bins':[{'size':size,'count':n} for size,n in sorted(bins.items())],
            'unlinked_count':len(p['marginals'])-len(linked)},
        'linked_cloud':{}}


def public_relatedness(r,allowed,explanations):
    # Only task-vector coordinates for permitted assignments are useful to public explanations.
    coverage_keys=['occupational_code','occupation_title','n_sample_jobs','eligible','retained_task_incidence_share','dwa_mapping_share_of_retained','n_supported_task_ids','official_available','job_zone','ranking_population']
    neighbor_keys=['scores','official_tier','official_index','n_jobs']
    return {'code':r['code'],'exclusion_mask_sha256':r['exclusion_mask_sha256'],
        'coverage':{k:v for k,v in r['coverage'].items() if k in coverage_keys},'lists':r['lists'],
        'neighbors':{c:{k:v for k,v in n.items() if k in neighbor_keys} for c,n in r['neighbors'].items()},
        'pair_explanations':explanations}



def main():
    from public_templates import public_html, public_relatedness_js
    catalog=read_js(SOURCE/'occupation_network_data/catalog.js');tasks=catalog['tasks']
    stage=Path(tempfile.mkdtemp(prefix='public-dashboard-',dir=ROOT/'output'))
    try:
        profiles={}
        for o in catalog['occupations']:
            code=o['code'];file=SOURCE/f'occupation_network_data/occupations/{code}.js'
            profiles[code]=read_js(file) if file.exists() else {'code':code,'marginals':[]}
        all_allowed=coordinated_allowed(profiles,tasks);task_blocks=defaultdict(lambda:defaultdict(list));nprofiles=0
        from display_projection import projection
        related={f.stem:read_js(f) for f in (SOURCE/'occupation_relatedness_data').glob('*.js') if f.name!='features.js'}
        visible,explanations=projection(profiles,related,all_allowed,tasks)
        for o in catalog['occupations']:
            code=o['code'];file=SOURCE/f'occupation_network_data/occupations/{code}.js'
            p=read_js(file) if file.exists() else {'code':code,'marginals':[]}
            allowed=all_allowed[code]
            if not file.exists():continue
            clean=public_profile(p,tasks,allowed,visible[code])
            write_js(stage/f'occupation_network_data/occupations/{code}.js','window.registerOccupation',clean)
            for i,n in clean['marginals']:task_blocks[i//256][str(i)].append([o['index'],n])
            nprofiles+=1
        for block,rows in task_blocks.items():
            for entries in rows.values():entries.sort(key=lambda r:(-r[1],r[0]))
            write_js(stage/f'occupation_network_data/tasks/{block}.js','window.registerTaskBlock',{'block':block,'exclusion_mask_sha256':catalog['exclusion_mask_sha256'],'tasks':rows})
        used=set().union(*all_allowed.values())
        public_meta=['occupation_title','n_sample_jobs','job_weight_mass','code','state','index','pair_count']
        clean_catalog={'occupations':[{k:o.get(k) for k in public_meta} for o in catalog['occupations']],
            'tasks':{i:{k:t.get(k) for k in ['text','short','home','type']} for i,t in tasks.items() if int(i) in used},
            'cases':catalog['cases'],'source':'O*NET and occupation-first posting analysis, October 2024–September 2025; corrected September 2026.',
            'coverage':catalog['coverage'],'release_manifest_sha256':catalog['release_manifest_sha256'],'exclusion_mask_sha256':catalog['exclusion_mask_sha256']}
        write_js(stage/'occupation_network_data/catalog.js','window.registerCatalog',clean_catalog)
        for file in sorted((SOURCE/'occupation_relatedness_data').glob('*.js')):
            if file.name=='features.js':continue
            r=read_js(file);write_js(stage/'occupation_relatedness_data'/file.name,'window.registerRelatedOccupation',public_relatedness(r,all_allowed[r['code']],explanations[r['code']]))
        features=read_js(SOURCE/'occupation_relatedness_data/features.js')
        write_js(stage/'occupation_relatedness_data/features.js','window.registerRelatednessFeatures',{k:features[k] for k in ['labels','occupation_titles','common_n','release_manifest_sha256','exclusion_mask_sha256']})
        (stage/'atlas_relatedness.js').write_text(public_relatedness_js((SOURCE/'atlas_relatedness.js').read_text()))
        shutil.copy2(SOURCE/'atlas_relatedness.css',stage/'atlas_relatedness.css')
        from public_presentation import cloud_base, terms
        (stage/'occupation_network_cloud.js').write_text(cloud_base((SOURCE/'occupation_network_cloud.js').read_text()))
        shutil.copy2(HERE/'public_cloud.js',stage/'public_cloud.js')
        for name in ['benchmark_view.js','benchmark_view.css','occupation_benchmarks.js','profile_quality.js','profile_quality_view.js','profile_quality.html']:
            shutil.copy2(SOURCE/name,stage/name)
        (stage/'benchmark_view.js').write_text((HERE/'equal_length_view.js').read_text()+'\n'+(HERE/'benchmark_view.js').read_text())
        from public_editorial import quality_page, quality_payload
        (stage/'profile_quality.html').write_text(quality_page((SOURCE/'profile_quality.html').read_text()))
        quality=json.loads((SOURCE/'profile_quality.js').read_text().split('=',1)[1].rstrip(';\n'))
        (stage/'profile_quality.js').write_text('window.PROFILE_QUALITY='+json.dumps(quality_payload(quality),ensure_ascii=False,separators=(',',':'))+';\n')
        html=public_html((SOURCE/'occupation_network_atlas.html').read_text())
        (stage/'index.html').write_text(html)
        (stage/'occupation_network_atlas.html').write_text(html)
        shutil.copy2(HERE/'public_methods.html',stage/'methods.html')
        from bundling_example import install as install_bundling
        install_bundling(stage)
        from analysis_page import install_analysis
        install_analysis(stage,public=True)
        for page in stage.glob('*.html'):
            page.write_text(terms(page.read_text()))
        from notebook_page import install as install_notebook
        install_notebook(stage)
        from validation_replication import install as install_replication
        install_replication(stage)
        shutil.copytree(ROOT/'output/public_occupation_figure',stage/'rn_figure')
        from generated_copy import install as label_generated_copy
        label_generated_copy(stage)
        from benchmark_audit import install as install_benchmark_audit
        install_benchmark_audit(stage)
        from paper_reproduction_release import install as install_paper_reproduction
        install_paper_reproduction(stage)
        from paper_gateway import resources as install_paper_resources
        install_paper_resources(stage)
        manifest={'edition':'public','policy':'O*NET-linked tasks (tasks O*NET assigns to the occupation), retained reviewed_yes assignments, or retained unreviewed tasks supported by more than 200 sampled job-months in this occupation. Parent SOC6 task identities additionally require permission in every contributing specialty, preventing parent-minus-child reconstruction. Other assignments remain anonymous.','occupations':len(all_allowed),'posting_profiles':nprofiles,'anonymous_cloud':'Aggregate size-band counts; synthetic positions independent of restricted task IDs.','source_release':catalog['release_manifest_sha256'],'files':{str(p.relative_to(stage)):hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(stage.rglob('*')) if p.is_file()}}
        manifest['review_artifact_policy']='Separately authorized selected review IDs, public taxonomy labels and verdicts; no posting frequencies, excerpts or record identifiers. Explorer profile disclosure rules remain unchanged.'
        (stage/'release.json').write_text(json.dumps(manifest,indent=2))
        from audit_public import audit
        audit(stage, HERE/'public_audit.json')
        if OUTPUT.exists():
            # Replace only this builder's previously identified generated directory.
            old=json.loads((OUTPUT/'release.json').read_text());assert old['edition']=='public'
            shutil.rmtree(OUTPUT)
        stage.rename(OUTPUT)
        print(f'Built {OUTPUT}: {len(all_allowed)} occupations, {nprofiles} posting profiles')
    finally:
        if stage.exists():shutil.rmtree(stage)

if __name__=='__main__':main()
