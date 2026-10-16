"""Optional hash-checked acquisition of frozen public source files; never NLx records.
Does not run by default and is not needed for the packaged reproductions.
"""
from pathlib import Path
import argparse,hashlib,json,urllib.request,gzip,shutil
import pandas as pd
P=Path(__file__).resolve().parent
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('--output',type=Path,required=True);p.add_argument('--source',choices=['sst','surveys','emsi'],required=True);a=p.parse_args();a.output.mkdir(parents=True,exist_ok=True)
 if a.source=='emsi':
  expected='29534756d3fbe234b0c89551b4c7407293d653cc4577ff567f0bbeb1e97eb2fb'
  dest=a.output/'Emsi_dataset.csv';tmp=dest.with_suffix('.csv.part')
  if not dest.exists():
   with gzip.open(P/'upstream_public/Emsi_dataset.csv.gz','rb') as source,tmp.open('wb') as target:shutil.copyfileobj(source,target)
   assert hashlib.sha256(tmp.read_bytes()).hexdigest()==expected,'Bundled EMSI source mismatch'
   tmp.replace(dest)
  assert hashlib.sha256(dest.read_bytes()).hexdigest()==expected,'Existing EMSI source mismatch'
  print('Verified bundled public aggregate',dest)
  raise SystemExit(0)
 if a.source=='sst':
  m=json.loads((P/'upstream_provenance/crosswalks/occupational_transitions_sst_2020/intake.json').read_text());rows=[dict(file=n,archive_url=v['url'],sha256=v['sha256']) for n,v in m['files'].items()]
 else:rows=pd.read_csv(P/'upstream_survey_sources.csv').to_dict('records')
 for r in rows:
  dest=a.output/r['file'];tmp=dest.with_suffix(dest.suffix+'.part')
  if not dest.exists():
   urllib.request.urlretrieve(r['archive_url'],tmp)
   assert hashlib.sha256(tmp.read_bytes()).hexdigest()==r['sha256'],'Hash mismatch: '+r['file']
   tmp.replace(dest)
  assert hashlib.sha256(dest.read_bytes()).hexdigest()==r['sha256'],'Existing file hash mismatch: '+r['file']
  print('Verified',dest)
