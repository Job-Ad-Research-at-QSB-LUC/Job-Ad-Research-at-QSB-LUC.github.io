"""Download pinned public USAJOBS coded records and metadata, anonymously.
No Hugging Face SDK, login, token, environment credentials, or raw text needed.
Existing files are reused only when their SHA-256 matches the public manifest.
"""
from pathlib import Path
import hashlib,json,urllib.request,urllib.parse
DATASETS={
 'coded':('loyoladatamining/usajobs_coded','2ac18625eec954234e1b838907ef05f3961dd4bd'),
 'meta':('loyoladatamining/usajobs_html_metadata','b3cd0a88da23b2f5a7b0aef6303abe3fc3704640')}
def digest(path):
 h=hashlib.sha256()
 with Path(path).open('rb') as f:
  for chunk in iter(lambda:f.read(1024*1024),b''):h.update(chunk)
 return h.hexdigest()
def download(kind,destination):
 repo,revision=DATASETS[kind];destination=Path(destination);destination.mkdir(parents=True,exist_ok=True)
 url=f'https://huggingface.co/api/datasets/{repo}/tree/{revision}/postings?recursive=false&limit=1000'
 # urllib sends no Authorization header and does not read HF tokens.
 with urllib.request.urlopen(url,timeout=60) as response: entries=json.load(response)
 entries=[e for e in entries if e['type']=='file' and e['path'].endswith('.parquet')]
 assert len(entries)==111, f'Expected 111 monthly files, got {len(entries)}'
 for e in entries:
  p=destination/Path(e['path']).name;sha=e['lfs']['oid']
  if p.exists() and digest(p)==sha:continue
  tmp=p.with_suffix('.part')
  try:
   with urllib.request.urlopen(f"https://huggingface.co/datasets/{repo}/resolve/{revision}/{e['path']}",timeout=120) as response,tmp.open('wb') as out:
    for chunk in iter(lambda:response.read(1024*1024),b''):out.write(chunk)
   assert digest(tmp)==sha, f'Hash mismatch: {p.name}'
   tmp.replace(p)
  finally:
   if tmp.exists():tmp.unlink()
 print(f'Verified {len(entries)} public {kind} files at revision {revision}')
 return destination
if __name__=='__main__':
 download('coded','usajobs_coded/postings')
 download('meta','usajobs_html_metadata/postings')
