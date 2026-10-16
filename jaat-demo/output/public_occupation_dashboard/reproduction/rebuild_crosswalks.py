"""Execute actual paper Census crosswalk function against included public source tables."""
from pathlib import Path
import importlib.util,argparse,json
import pandas as pd
P=Path(__file__).resolve().parent
if __name__=='__main__':
 ap=argparse.ArgumentParser();ap.add_argument('--output',type=Path,default=P/'crosswalk_results');out=ap.parse_args().output;out.mkdir(parents=True,exist_ok=True)
 path=P/'production_source/analysis/ctot_multisource_20260927/analyze.py';s=importlib.util.spec_from_file_location('crosswalk_production',path);m=importlib.util.module_from_spec(s);s.loader.exec_module(m)
 m.ROOT=P/'crosswalk_inputs';m.A=m.ROOT/'analysis/relatedness_refresh_20260922';m.S=m.ROOT/'analysis/ctot_multisource_20260927/sources';m.P=out
 actual=m.mapping();expected=pd.read_csv(P/'candidates_surveys.csv',dtype=str);checks={}
 for system,(groups,titles,families) in actual.items():
  frozen=expected[expected.system.eq(system)];ref={int(r.code):set(r.specialties.split(';')) for r in frozen.itertuples()}
  assert {c:set(v) for c,v in groups.items()}==ref
  checks[system]=len(groups)
 (out/'verification.json').write_text(json.dumps({'status':'PASS','candidate_counts':checks,'scope':'Exact Census mapping regenerated from public source spreadsheets and frozen comparison universe; no survey persons used.'},indent=2)+'\n');print(checks)
