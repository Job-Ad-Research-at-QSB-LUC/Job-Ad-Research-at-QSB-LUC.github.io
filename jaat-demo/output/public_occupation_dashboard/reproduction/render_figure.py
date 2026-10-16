"""Hash-verified public-workbook figure render. Does not use stale private case metadata."""
from pathlib import Path
import subprocess,sys,json,hashlib,argparse
P=Path(__file__).resolve().parent
if __name__=='__main__':
 p=argparse.ArgumentParser();p.add_argument('--output',type=Path,default=P/'figure_results');a=p.parse_args();a.output.mkdir(parents=True,exist_ok=True)
 names=['figure/registered_nurses_public.xlsx','figure/public_figure_from_excel.py','figure/figure_rendering.py','figure/validation_replication.py']
 m=json.loads((P/'manifest.json').read_text());hashes={n:hashlib.sha256((P/n).read_bytes()).hexdigest() for n in names}
 assert all(h==m['files'][n] for n,h in hashes.items()),'Changed workbook or renderer: rebuild provenance rather than bypassing guard'
 subprocess.run([sys.executable,str(P/names[1]),str(P/names[0]),str(a.output)],check=True)
 (a.output/'render_manifest.json').write_text(json.dumps({'status':'PASS','input_sha256':hashes,'scope':'Public RN workbook illustration; no stale private case-hash override.'},indent=2)+'\n')
