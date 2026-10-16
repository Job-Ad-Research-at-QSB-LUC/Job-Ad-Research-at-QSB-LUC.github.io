"""Small review-impact tables and figures; reads immutable sources only."""
from pathlib import Path
import json,hashlib
import numpy as np,pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
ROOT=Path(__file__).resolve().parents[2];P=Path(__file__).resolve().parent
F=P/'figures';F.mkdir(exist_ok=True)
MASK=hashlib.sha256((P/'applied/exclusion_mask.csv').read_bytes()).hexdigest()
plt.rcParams.update({'font.family':'DejaVu Sans','font.size':10,'pdf.fonttype':42,'svg.fonttype':'none','axes.spines.top':False,'axes.spines.right':False})
NAVY='#193447';TEAL='#087c80';GOLD='#ad711b';GRAY='#a9b8c2'
def save(fig,name):
 for ext in ['png','pdf','svg']:fig.savefig(F/(name+'.'+ext),dpi=240,bbox_inches='tight',facecolor='white')
 plt.close(fig)
def main():
 x=pd.read_csv(ROOT/'data/release/occupation_task_marginals.csv.gz')
 d=pd.read_csv(P/'validation/reconciled_decisions.csv').rename(columns={'occ8':'occupational_code'})
 x=x.merge(d[['occupational_code','task_id','review_status']],on=['occupational_code','task_id'],how='left',validate='one_to_one');x['review_status']=x.review_status.fillna('unreviewed')
 by=x.groupby('review_status').agg(n_pairs=('task_id','size'),weighted_incidence=('weighted_jobs_with_task','sum'),raw_incidence=('n_jobs_with_task','sum')).reset_index()
 by['share_original_weighted_incidence']=by.weighted_incidence/by.weighted_incidence.sum();by['completed_mask_sha256']=MASK;by.to_csv(P/'review_coverage_in_release.csv',index=False)
 prior=pd.read_csv(ROOT/'analysis/relatedness_review_20260921/validation/reconciled_prior_decisions.csv')
 oldbad=set(zip(prior.loc[prior.review_status.isin(['reviewed_not_retained','review_incomplete']),'occ8'],prior.loc[prior.review_status.isin(['reviewed_not_retained','review_incomplete']),'task_id']))
 q=x[x.review_status.isin(['reviewed_not_retained','review_incomplete'])].copy();q['newly_excluded']=[(o,t) not in oldbad for o,t in zip(q.occupational_code,q.task_id)]
 names=pd.read_csv(P/'validation/occupation_metadata.csv').set_index('occ8').soc_title
 task=pd.read_csv(P/'validation/task_metadata.csv').set_index('task_id').task_text
 q['occupation_title']=q.occupational_code.map(names);q['task_text']=q.task_id.map(task)
 q.sort_values('weighted_jobs_with_task',ascending=False).to_csv(P/'excluded_release_pairs.csv.gz',index=False)
 # Main relatedness, keeping the original 912 source/candidate population.
 r=pd.read_csv(P/'relatedness/summary_before_after.csv');g=r[r.universe.eq('prior_912')]
 methods=['task','dwa','iwa','technology'];labels=['Tasks','DWA','IWA','Technology']
 fig,axes=plt.subplots(1,3,figsize=(10.8,4.2),layout='constrained')
 for ax,col,title,scale in zip(axes,['mean_official_top10_hits','same_soc2_share','same_soc4_share'],['A  O*NET top-ten overlap','B  Same two-digit SOC','C  Same four-digit prefix'],[1,100,100]):
  xx=np.arange(4)
  for version,offset,color,label in [('prior_mask',-.18,GRAY,'Previous exclusions'),('completed_reviews',.18,TEAL,'Completed reviews')]:
   v=g[g.version.eq(version)].set_index('method').loc[methods,col].to_numpy()*scale
   ax.bar(xx+offset,v,.34,color=color,label=label)
   for a,b in zip(xx+offset,v):ax.text(a,b+(0.035 if scale==1 else .55),f'{b:.2f}' if scale==1 else f'{b:.1f}',ha='center',va='bottom',fontsize=8)
  ax.set_xticks(xx,labels,rotation=25,ha='right');ax.set_title(title,loc='left',fontsize=11);ax.set_ylim(0,4 if scale==1 else 55 if col=='same_soc2_share' else 25)
  ax.set_ylabel('Mean matches out of 10' if scale==1 else '% of returned neighbors');ax.grid(axis='y',alpha=.15);ax.set_axisbelow(True)
 handles,ls=axes[0].get_legend_handles_labels();fig.legend(handles,ls,loc='outside lower center',ncols=2,frameon=False);save(fig,'relatedness_before_after')
 # Same original industry cells and fixed candidate sets, previous narrower industry mask vs completed.
 oldbase=ROOT/'analysis/context_neighborhoods/review_20260921'
 a=pd.read_csv(oldbase/'audit_summary.csv');b=pd.read_csv(P/'industry/audit_summary.csv')
 a['review_version']='previous_industry_review';b['review_version']='completed_review'
 both=pd.concat([a,b],ignore_index=True);both.to_csv(P/'industry/before_after_summary.csv',index=False)
 a=pd.read_csv(oldbase/'case_comparisons.csv',dtype={'industry_a':str,'industry_b':str});b=pd.read_csv(P/'industry/case_comparisons.csv',dtype={'industry_a':str,'industry_b':str})
 comp=a.merge(b,on=['occupational_code','title','industry_a','industry_b','n_candidates'],suffixes=('_previous','_completed'),validate='one_to_one');comp.to_csv(P/'industry/case_before_after.csv',index=False)
 dd=pd.read_csv(P/'industry/case_source_task_differences.csv',dtype={'industry_a':str,'industry_b':str})
 dd=dd.merge(d[['occupational_code','task_id','review_status']],left_on=['source_code','task_id'],right_on=['occupational_code','task_id'],how='left',validate='many_to_one');dd['review_status']=dd.review_status.fillna('unreviewed')
 assert not dd.review_status.isin(['reviewed_not_retained','review_incomplete']).any()
 dd.to_csv(P/'industry/figure_task_prevalence_and_review.csv',index=False)
 short={21462:'Assign project duties',16113:'Discuss business requirements',21262:'Guide external vendors',657:'Help customers',21151:'Greet customers',2052:'Operate cash registers',17500:'Analyze genetic risks',8562:'Solve work-related problems',16254:'Draw statistical conclusions',2417:'Process returns / exchanges',23836:'Record completed tasks',17361:'Follow laws and regulations',8114:'Recommend products'}
 fig,axes=plt.subplots(1,2,figsize=(10.8,4.3),layout='constrained')
 import textwrap
 for ax,occ,title in zip(axes,['15-1252.00','43-4051.00'],['A  Software developers (15-1252.00)','B  Customer service (43-4051.00)']):
  t=dd[dd.source_code.eq(occ)].head(6).iloc[::-1];y=np.arange(len(t))
  ax.hlines(y,t.prevalence_a*100,t.prevalence_b*100,color='#c5d2d7',lw=2)
  an='Information' if occ=='15-1252.00' else 'Retail trade';bn='Professional / technical services'
  ax.scatter(t.prevalence_a*100,y,s=40,color=GOLD,label=an,zorder=3);ax.scatter(t.prevalence_b*100,y,s=40,color=TEAL,label=bn,zorder=3)
  labels=[textwrap.fill(short.get(int(r.task_id),r.task_text),34)+f' [{r.task_id}]'+(' *' if r.review_status=='unreviewed' else '') for r in t.itertuples()]
  ax.set_yticks(y,labels,fontsize=8);ax.set_title(title,fontsize=11,loc='left',pad=14);ax.set_xlabel('% of original weighted job-months');ax.grid(axis='x',alpha=.15);ax.legend(loc='upper center',bbox_to_anchor=(.5,-.19),fontsize=8,frameon=False)
 save(fig,'industry_task_context')
 qa={'status':'PASS','mask_sha256':MASK,'release_pair_rows':len(x),'coverage_rows_sum':int(by.n_pairs.sum()),'industry_monthly_source_QA':json.loads((P/'industry/QA.json').read_text())['status']}
 assert by.n_pairs.sum()==len(x);assert np.isclose(by.share_original_weighted_incidence.sum(),1);assert comp.n_candidates.notna().all()
 (P/'summary_QA.json').write_text(json.dumps(qa,indent=2))
 print(by.to_string(index=False));print(comp.to_string(index=False))
if __name__=='__main__':main()
