import os
os.environ['OPENBLAS_NUM_THREADS']='1'
from pathlib import Path
import sys,json,zipfile
import numpy as np
import pandas as pd
P=Path(__file__).resolve().parent;R=P.parents[2];C=R/'analysis/ctot_multisource_20260927';V=R/'analysis/relatedness_refresh_20260922/transition_validation'
sys.path.insert(0,str(C));import analyze as base
# Running this file as __main__ allows importing the existing analyze module.
MODELS=['task','dwa','iwa','onet_quantitative','onet_published']
def getinputs():
 mats=base.matrices()
 for name in ['dwa','iwa']:
  with np.load(R/f'analysis/relatedness_refresh_20260922/results/{name}_filtered_similarity.npz') as z:mats[name]=(z['codes'].astype(str),z['similarity'])
 pools=pd.read_csv(C/'pooled/candidate_occupations.csv',dtype={'system':str});audit=pd.read_csv(C/'pooled/census2010_model_mapping_audit.csv').fillna('');soc10={int(r.census2010):set(r.soc2010_members.split(';'))- {''} for r in audit.itertuples()}
 bridge=pd.read_csv(C/'pooled/census2002_2010_mapping_audit.csv');good=bridge.status.isin(['included','destination_outside_complete_model_population']);soc02={int(r.census2002):soc10.get(int(r.census2010),set()) for r in bridge[good].itertuples()}
 with zipfile.ZipFile(R/'crosswalks/occupational_transitions_sst_2020/occupation_transitions_public_data_set.csv.zip') as z:sst=pd.read_csv(z.open('occupation_transitions_public_data_set.csv'))
 emsi=pd.read_csv(R/'crosswalks/dol_career_pathways_ctot/Emsi_dataset.csv');out={}
 for ds,path,raw,src,dest in [('SST',V,sst,'soc1','soc2'),('Emsi',V/'dol',emsi,'oesCode_origin','oesCode_dest')]:
  can=pd.read_csv(path/'candidate_occupations.csv').query("universe=='principal'").rename(columns={'soc2010':'code'}).sort_values('code');groups=dict(zip(can.code,can.specialties.str.split(';')));orig=can.loc[can.is_origin,'code'].tolist();tr={}
  for o,g in raw.groupby(src):
   if o not in orig:continue
   g=g.sort_values('order').head(20) if ds=='Emsi' else g
   tr[o]=dict(zip(g[dest],g.transition_share if ds=='SST' else np.ones(len(g))/20))
  soc={c:{c} for c in set(raw[src])|set(raw[dest])};out[ds]=(groups,orig,tr,soc)
 frames=base.frames()
 for ds,keys,system in [('CPS_SIPP',['CPS','SIPP'],'2010')]+[(f'NLSY97_PSID_{h}y',[f'NLSY97_{h}y',f'PSID_{h}y'],'2002') for h in [3,5,10]]:
  raw=pd.concat([frames[k][0] for k in keys]);raw.weight=raw.weight.astype(float);d=raw[raw.origin.notna()&raw.destination.notna()&raw.origin.ne(raw.destination)&raw.weight.gt(0)&np.isfinite(raw.weight)].copy();d[['origin','destination']]=d[['origin','destination']].astype(int)
  can=pools[pools.system.eq(system)];groups=dict(zip(can.code,can.specialties.str.split(';')));counts=d.groupby('origin').size();orig=sorted(set(counts[counts>=40].index)&set(groups));tr={o:g.groupby('destination').weight.sum().to_dict() for o,g in d[d.origin.isin(orig)].groupby('origin')};out[ds]=(groups,orig,tr,soc10 if system=='2010' else soc02)
 return mats,out

def status(o,t,digit,soc):
 a={s.replace('-','')[:digit] for s in soc.get(o,set())};b={s.replace('-','')[:digit] for s in soc.get(t,set())}
 if not a or not b:return 'unknown'
 if a.isdisjoint(b):return 'outside'
 if len(a)==len(b)==1:return 'within'
 return 'ambiguous'

def main():
 mats,data=getinputs();rows=[];baseline=[];lists=[];check=[]
 old=pd.read_csv(C/'combined/all_summary.csv');pooled=pd.read_csv(C/'pooled/summary.csv')
 for ds,(groups,orig,truth,soc) in data.items():
  codes=sorted(groups);ci={o:i for i,o in enumerate(codes)};scores={}
  for model in MODELS:
   sp,sim=mats[model];si={s:i for i,s in enumerate(sp)};G=np.zeros((len(codes),len(sp)))
   for i,o in enumerate(codes):G[i,[si[s] for s in groups[o]]]=1/len(groups[o])
   a=G@sim@G.T;np.fill_diagonal(a,0);scores[model]=a
  for o in orig:
   tr=truth[o];total=sum(tr.values());family=next(iter(soc[o]))[:2]
   for model,a in scores.items():
    i=ci[o];js=np.flatnonzero(a[i]>0);js=js[np.argsort(-np.round(a[i,js],12),kind='stable')];rank=[codes[j] for j in js if codes[j]!=o];top=rank[:20];overall=sum(tr.get(t,0) for t in top)/total if ds not in ['SST','Emsi'] else sum(tr.get(t,0) for t in top)
    baseline.append(dict(dataset=ds,model=model,origin=o,capture=overall))
    for digit in [2,4,6]:
     by={t:status(o,t,digit,soc) for t in set(tr)|set(codes)};mass={k:sum(w for t,w in tr.items() if by[t]==k) for k in ['outside','within','ambiguous','unknown']};outside=mass['outside']
     for mode,selected in [('original_top20',top),('outside_only_top20',[t for t in rank if by[t]=='outside'][:20])]:
      got=sum(tr.get(t,0) for t in selected if by[t]=='outside');rows.append(dict(dataset=ds,digits=digit,mode=mode,model=model,origin=o,family=family,total_mass=total,outside_mass=outside,within_mass=mass['within'],ambiguous_mass=mass['ambiguous'],unknown_mass=mass['unknown'],captured_outside=got,outside_capture=got/outside if outside>0 else np.nan,outside_share=outside/total,unknown_share=(mass['unknown']+mass['ambiguous'])/total,recommendations=len(selected),outside_recommendations=sum(by[t]=='outside' for t in selected)))
      for k,t in enumerate(selected,1):lists.append(dict(dataset=ds,digits=digit,mode=mode,model=model,origin=o,destination=t,rank=k,classification=by[t]))
  print(ds,'origins',len(orig),'candidates',len(codes),flush=True)
 b=pd.DataFrame(baseline);b.to_csv(P/'overall_baselines.csv',index=False)
 for (ds,model),g in b[b.model.isin(['task','onet_quantitative'])].groupby(['dataset','model']):
  if ds in ['SST','Emsi']:expected=old[(old.dataset==ds)&(old.form=='frozen')&(old.model==('T' if model=='task' else 'O'))&(old.k==20)].capture.item()
  else:expected=pooled[(pooled.dataset==ds)&(pooled.min_n==40)&(pooled.model==model)&(pooled.k==20)].capture.item()
  err=abs(g.capture.mean()-expected);assert err<1e-10,(ds,model,err);check.append(dict(dataset=ds,model=model,error=err))
 r=pd.DataFrame(rows);r.to_csv(P/'by_origin.csv.gz',index=False);pd.DataFrame(lists).to_csv(P/'recommendations.csv.gz',index=False)
 summary=[]
 for keys,g in r.groupby(['dataset','digits','mode','model']):
  q=g[g.outside_mass>0];summary.append(dict(zip(['dataset','digits','mode','model'],keys),all_origins=len(g),outside_origins=len(q),outside_capture=q.outside_capture.mean(),pooled_outside_capture=q.captured_outside.sum()/q.outside_mass.sum(),outside_share=g.outside_share.mean(),unclassified_share=g.unknown_share.mean(),outside_recommendations=g.outside_recommendations.mean(),mean_returned=g.recommendations.mean()))
 pd.DataFrame(summary).to_csv(P/'summary.csv',index=False)
 rng=np.random.default_rng(20260928);contr=[]
 for keys,g in r.groupby(['dataset','digits','mode']):
  a=g[(g.model=='task')&g.outside_mass.gt(0)].set_index('origin').sort_index();families=sorted(a.family.unique());ix=np.array([families.index(f) for f in a.family]);cnt=np.bincount(ix);draw=rng.multinomial(len(families),np.ones(len(families))/len(families),size=2000)
  for m in ['onet_quantitative','onet_published','dwa','iwa']:
   z=g[g.model.eq(m)].set_index('origin').loc[a.index];delta=a.outside_capture-z.outside_capture;v=draw@np.bincount(ix,weights=delta)/(draw@cnt);contr.append(dict(zip(['dataset','digits','mode'],keys),comparator=m,delta=delta.mean(),low=np.quantile(v,.025),high=np.quantile(v,.975),origins=len(a),families=len(families)))
 pd.DataFrame(contr).to_csv(P/'contrasts.csv',index=False);(P/'verification.json').write_text(json.dumps(dict(status='PASS',baseline_checks=check),indent=2))
if __name__=='__main__':main()
