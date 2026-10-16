"""Synthetic seasonal-frame allocation through the exact production allocator.
No database access, API calls or real posting records.
"""
from pathlib import Path
import argparse,importlib.util,json
P=Path(__file__).resolve().parent
ap=argparse.ArgumentParser();ap.add_argument('--output',type=Path,default=Path('synthetic_sampling'));a=ap.parse_args()
path=P/'production_source/sample_server_code/run_occupation_first_extract.py'
spec=importlib.util.spec_from_file_location('original_extractor',path);module=importlib.util.module_from_spec(spec);spec.loader.exec_module(module)
examples={'seasonal_large':{'2024-10':1000,'2024-11':3000,'2024-12':500},'floor_binds':{'2024-10':100,'2024-11':600,'2024-12':300},'census_small':{'2024-10':12,'2024-11':38}}
results={}
for name,frame in examples.items():
 draw=module.allocate(frame)
 rows=[dict(month=m,frame_jobs=N,sample_jobs=draw[m],inclusion_probability=draw[m]/N,design_weight=N/draw[m],expanded_weight=draw[m]*(N/draw[m])) for m,N in frame.items()]
 assert all(abs(r['expanded_weight']-r['frame_jobs'])<1e-10 for r in rows)
 results[name]=rows
assert sum(x['sample_jobs'] for x in results['seasonal_large'])==450
assert sum(x['sample_jobs'] for x in results['floor_binds'])==200
assert sum(x['sample_jobs'] for x in results['census_small'])==50
a.output.mkdir(parents=True,exist_ok=True)
(a.output/'allocation.json').write_text(json.dumps({'label':'SYNTHETIC; not paper sample','status':'PASS','examples':results,'meaning':'Inverse probability expansion preserves frame seasonality; it does not seasonally adjust or correct employer coverage.'},indent=2)+'\n')
print('Synthetic seasonal allocation and weights: PASS')
