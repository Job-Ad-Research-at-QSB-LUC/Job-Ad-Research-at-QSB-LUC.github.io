"""Pool CTOT's intended survey pairs; preserve source weights and horizons."""
from pathlib import Path
import sys,json,hashlib
import pandas as pd
P=Path(__file__).resolve().parent;sys.path.insert(0,str(P.parent));import analyze as base
original_frames=base.frames

def pooled_frames():
 frames=original_frames();out={}
 for label,keys,system,h in [('CPS_SIPP',['CPS','SIPP'],'2010',0)]+[(f'NLSY97_PSID_{h}y',[f'NLSY97_{h}y',f'PSID_{h}y'],'2002',h) for h in [3,5,10]]:
  parts=[]
  for key in keys:
   q=frames[key][0].copy();q.weight=q.weight.astype(float);q.person=key+':'+q.person.astype(str);parts.append(q)
  out[label]=(pd.concat(parts,ignore_index=True),system,h)
 return out

if __name__=='__main__':
 base.P=P;base.frames=pooled_frames;base.main()
 # 'distinct_ids' is not a respondent count for CPS/SIPP; retain a clear label.
 f=P/'coverage.csv';q=pd.read_csv(f);q=q.rename(columns={'distinct_ids':'distinct_source_prefixed_release_ids'});q['id_note']=q.dataset.map(lambda x:'CPS ID unusable; SIPP respondent semantics unverified' if x=='CPS_SIPP' else 'Source-prefixed respondent IDs; repeated trajectories possible');q.to_csv(f,index=False)
 (P/'METHODS.md').write_text('''# Pooled survey comparison

Pool CPS with SIPP and NLSY97 with PSID separately at each horizon, following CTOT dataset construction. Preserve every positive supplied weight without separately normalizing sources. Source prefixes prevent ID collisions but do not establish respondent identification in CPS/SIPP. Do not combine different horizons.

Reuse the corrected candidate mappings, support5 frozen task profiles and O*NET comparators. Require40 observed changes per pooled origin, with20-change sensitivity. Exclude same-occupation and missing-endpoint records; retain unmapped destinations in capture denominators. Calculate each origin's weighted capture from pooled records, then average origins equally. This is not an average of the separate-source headline percentages. The dashboard threshold is40 trajectories, not our40 changes.

Separate-source outputs remain in the parent analysis. Pooled results share data with them and are not independent replications. Family-bootstrap intervals condition on fixed predictions; they are not full survey-design or respondent-cluster uncertainty. Popularity here is the parent frozen comparison's family-excluded baseline; the fitted-combination supporting page remains a separate-source analysis, not pooled fitted models.
''')
