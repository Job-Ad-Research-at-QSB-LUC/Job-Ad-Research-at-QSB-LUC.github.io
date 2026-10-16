"""Recompute equal-length validation from frozen predictions and aggregate outcomes.
No private task profiles or person-level records are required. Python + pandas.
Run: python replicate.py [input_directory] [output_directory]
"""
from pathlib import Path
import sys
import pandas as pd

def calculate(rankings, observed, origins):
    keys=['dataset','origin']; pair=keys+['destination']
    assert not origins.duplicated(keys).any()
    assert not observed.duplicated(pair).any()
    assert observed.mass.ge(0).all() and observed.mass.notna().all()
    assert origins.denominator.gt(0).all()
    assert set(rankings.model)=={'task','onet_published'}
    assert not rankings.duplicated(keys+['model','destination']).any()
    assert not rankings.duplicated(keys+['model','rank']).any()
    assert rankings['rank'].between(1,20).all()
    for _,g in rankings.groupby(keys+['model']):
        assert sorted(g['rank'])==list(range(1,len(g)+1))
    lengths=rankings.groupby(keys+['model']).size().unstack('model').fillna(0)
    base=origins.set_index(keys).join(lengths).fillna({'task':0,'onet_published':0})
    base=base.rename(columns={'task':'task_returned','onet_published':'onet_returned'})
    # Budget depends only on frozen list lengths, never on observed outcomes.
    base['matched_k']=base[['task_returned','onet_returned']].min(axis=1).clip(upper=20).astype(int)
    audit=rankings.merge(base.reset_index(),on=keys,validate='many_to_one')
    assert len(audit)==len(rankings)
    audit=audit.merge(observed,on=pair,how='left',validate='many_to_one')
    audit['observed_match']=audit.mass.notna();audit['mass']=audit.mass.fillna(0)
    audit['selected_equal']=audit['rank'].le(audit.matched_k)
    outputs=[]
    for mode in ['equal_length','up_to_20']:
        selected=audit[audit.selected_equal] if mode=='equal_length' else audit
        captured=selected.groupby(keys+['model']).mass.sum().unstack('model')
        z=base.join(captured).fillna({'task':0,'onet_published':0}).reset_index()
        # SST denominator = 1; EMSI mass already 1/20 per observed destination.
        # Survey denominators include all retained outcome weight, even unmapped destinations.
        z['task']=z.task/z.denominator;z['onet_published']=z.onet_published/z.denominator
        z['difference']=z.task-z.onet_published;z['mode']=mode;z['included']=z.matched_k.gt(0)
        outputs.append(z)
    by=pd.concat(outputs,ignore_index=True); summary=[]
    for (ds,mode),g in by.groupby(['dataset','mode'],sort=False):
        z=g[g.included] if mode=='equal_length' else g
        assert len(z)>0
        more=int(z.difference.gt(1e-12).sum());ties=int(z.difference.abs().le(1e-12).sum())
        summary.append(dict(dataset=ds,benchmark=z.benchmark.iloc[0],mode=mode,origins=len(z),excluded_zero_length=len(g)-len(z),mean_k=z.matched_k.mean(),min_k=int(z.matched_k.min()),max_k=int(z.matched_k.max()),task=z.task.mean(),onet_published=z.onet_published.mean(),difference=z.difference.mean(),more=more,ties=ties,less=len(z)-more-ties,share_more=more/len(z)))
    return by,pd.DataFrame(summary),audit

def read_inputs(folder):
    folder=Path(folder)
    return [pd.read_csv(folder/name,dtype={'origin':str,'destination':str}) for name in ['rankings.csv','observed.csv','origins.csv']]

def workbook_summary(workbook):
    """Recalculate from workbook INPUT sheets; verify its saved summary separately."""
    tables=[pd.read_excel(workbook,sheet_name=name,dtype={'origin':str,'destination':str}) for name in ['Validation_rankings','Validation_observed','Validation_origins']]
    _,summary,_=calculate(*tables)
    saved=pd.read_excel(workbook,sheet_name='Validation_summary')
    verify_summary(summary,saved)
    return summary[summary['mode'].eq('equal_length')].to_dict(orient='records')

def verify_summary(actual,expected):
    a=actual.set_index(['dataset','mode']).sort_index();b=expected.set_index(['dataset','mode']).sort_index()
    assert a.index.equals(b.index)
    for c in ['origins','excluded_zero_length','mean_k','min_k','max_k','task','onet_published','difference','more','ties','less','share_more']:
        assert (a[c]-b[c]).abs().max()<1e-10,c

def main():
    folder=Path(sys.argv[1]) if len(sys.argv)>1 else Path(__file__).resolve().parent
    out=Path(sys.argv[2]) if len(sys.argv)>2 else folder/'results';out.mkdir(parents=True,exist_ok=True)
    by,summary,audit=calculate(*read_inputs(folder))
    for name,table in [('by_origin.csv',by),('summary.csv',summary),('recommendation_audit.csv',audit)]:table.to_csv(out/name,index=False)
    if (folder/'expected_summary.csv').exists():verify_summary(summary,pd.read_csv(folder/'expected_summary.csv'));print('PASS: all reference headline values and counts match')
    print(summary[summary['mode'].eq('equal_length')].to_string(index=False))
if __name__=='__main__':main()
