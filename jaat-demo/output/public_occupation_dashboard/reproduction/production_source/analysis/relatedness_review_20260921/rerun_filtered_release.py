#!/usr/bin/env python
"""SERVER ONLY: reaggregate the SAME existing occupation-first sample with a pair mask.

No frame/sample creation, deletion, or redraw. Uses the established extractor's tested
aggregation code and connection settings. Row-level records remain on the server.

python -u rerun_filtered_release.py --extractor /home/jupyteruser/run_occupation_first_extract.py \
  --original-output /mnt/data/pdn/task_analysis_occ_v2 --mask exclusion_mask.csv \
  --output-dir /mnt/data/pdn/task_analysis_occ_v2_reviewed
"""
import argparse,csv,gzip,hashlib,importlib.util,json,logging,shutil,sys
from pathlib import Path

def sha(p):
    h=hashlib.sha256()
    with Path(p).open('rb') as f:
        for b in iter(lambda:f.read(2**20),b''):h.update(b)
    return h.hexdigest()

def filter_bundles(bundles,exclusions):
    """Drop exact occupation-task pairs while preserving every sampled job, including empties."""
    for occ,sector,job,tasks in bundles:
        yield occ,sector,job,tasks-exclusions.get(occ,set())

def main(a):
    source=Path(a.original_output).resolve();out=Path(a.output_dir).resolve();mask=Path(a.mask).resolve()
    if source==out or source in out.parents:raise ValueError('Choose a separate sibling output directory, never the original or its subdirectory.')
    oldstate=json.loads((source/'checkpoint.json').read_text());oldman=json.loads((source/'release/manifest.json').read_text())
    if oldman.get('status')!='COMPLETE' or not (source/'COMPLETE.json').exists():raise RuntimeError('Original complete release and checkpoint are required.')
    original_marker=json.loads((source/'COMPLETE.json').read_text())
    if original_marker.get('manifest_sha256')!=sha(source/'release/manifest.json'):raise RuntimeError('Original completion marker does not match the release manifest.')
    if not oldstate.get('owns_prefix'):raise RuntimeError('Original checkpoint does not establish ownership of the existing sample tables.')
    for item in oldman['files']:
        if item['file']=='sampling_allocation.csv' or item['file'].startswith('source_frame_'):
            if sha(source/'release'/item['file'])!=item['sha256']:raise RuntimeError('Original allocation/frame aggregate changed: '+item['file'])
    spec=importlib.util.spec_from_file_location('original_extractor',a.extractor);m=importlib.util.module_from_spec(spec);spec.loader.exec_module(m)
    for key,attr in [('table_prefix','TABLE_PREFIX'),('seed','SEED'),('months','MONTHS'),('rate','RATE'),('minimum','ANNUAL_MIN_SAMPLE'),
                     ('domain_minimum','DOMAIN_MIN_SAMPLE'),('pair_minimum','PAIR_MIN_SUPPORT'),
                     ('global_pair_minimum','GLOBAL_PAIR_MIN_SUPPORT'),('core_nodes','NETWORK_CORE_NODES'),('cases','CASES')]:
        if oldstate['config'][key]!=getattr(m,attr):raise RuntimeError('Extractor settings differ from original checkpoint: '+key)
    if a.scores:m.SCORE_FILE=Path(a.scores)
    if sha(m.SCORE_FILE)!=oldstate['config']['score_sha256']:raise RuntimeError('Task scores differ from the original extraction; keep this rerun limited to pair filtering.')
    exclusions={}
    with mask.open() as f:
        for r in csv.DictReader(f):
            if r['review_status'] not in ['reviewed_not_retained','review_incomplete']:raise ValueError('Unexpected exclusion status')
            exclusions.setdefault(r['occ8'],set()).add(int(r['task_id']))
    filtersha=sha(mask);m.VERSION=m.VERSION+'|pair-filter:'+filtersha
    m.IMPLEMENTATION='same-sample-pair-filter-2026-09-21'
    base_iterator=m.iter_bundles
    m.iter_bundles=lambda rows:filter_bundles(base_iterator(rows),exclusions)
    class SameSample(m.Runner):
        def preflight(self):
            self.state['owns_prefix']=True
            super().preflight()
        def build_frames(self):
            self.alloc={}
            for key in ['null_job_id_source_rows','sample_implementations']:
                if key in oldstate:self.state[key]=oldstate[key]
            with (source/'release/sampling_allocation.csv').open() as f:
                for r in csv.DictReader(f):
                    self.alloc[(r['sample_month'],r['occupational_code'])]=(int(r['frame_jobs']),int(r['sample_jobs']),float(r['design_weight']))
            for file in ['sampling_allocation.csv']+['source_frame_'+month+'.csv' for month in m.MONTHS]:
                shutil.copyfile(source/'release'/file,self.release/file)
            self.state['frames']=list(m.MONTHS);self.save()
        def build_samples(self):
            for month in m.MONTHS:
                got=dict(self.execute('SELECT occupational_code,COUNT(*) FROM '+m.q(m.table('sample',month))+' GROUP BY occupational_code'))
                expected={o:n for (mo,o),(N,n,w) in self.alloc.items() if mo==month}
                if got!=expected:raise RuntimeError('Existing sample no longer matches original allocation: '+month)
            self.state['samples']=list(m.MONTHS);self.save()
        def finalize(self):
            super().finalize()
            p=self.release/'manifest.json';report=json.loads(p.read_text())
            report['pair_validation']={'mask_sha256':filtersha,'n_excluded_pairs':sum(map(len,exclusions.values())),
              'source_manifest_sha256':sha(source/'release/manifest.json'),'same_existing_sample_tables':True,
              'empty_jobs_after_filtering_retained':True,'source_script_sha256':sha(a.extractor),'wrapper_sha256':sha(__file__)}
            report['notes'].append('Task-occupation mask applied inside each job BEFORE signatures, task marginals, and all co-occurrence aggregation. Jobs losing all tasks remain in the denominators. No sample tables were rebuilt.')
            m.dump_json(p,report)
            marker={'status':'COMPLETE','release':str(self.release),'manifest_sha256':sha(p),'mask_sha256':filtersha}
            m.dump_json(self.out/'COMPLETE.json',marker);m.dump_json(self.release/'COMPLETE.json',marker)
    out.mkdir(parents=True,exist_ok=True)
    logging.basicConfig(level=logging.INFO,format='%(asctime)s %(levelname)s %(message)s')
    # Consistent with the original runner, its imported DB_CONFIG is used without printing passwords.
    runner=SameSample(out,m.read_scores(m.SCORE_FILE));runner.run()

if __name__=='__main__':
    p=argparse.ArgumentParser(description=__doc__);p.add_argument('--extractor',required=True);p.add_argument('--original-output',required=True)
    p.add_argument('--mask',required=True);p.add_argument('--output-dir',required=True);p.add_argument('--scores')
    main(p.parse_args())
