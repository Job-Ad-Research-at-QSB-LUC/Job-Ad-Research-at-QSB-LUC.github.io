#!/usr/bin/env python
"""Occupation-first EXT extraction, Python 3.9+, one self-contained program.

Edit DB_CONFIG. Then: nohup python -u run_occupation_first_extract.py > occ_v2.log 2>&1 &
SQL only builds a frame/sample and streams tasks. All pair/bundle analysis is Python.
Download ONLY OUT/release after COMPLETE.json appears. No SQLite or pandas required.
"""
import argparse
from collections import Counter, defaultdict
from contextlib import contextmanager
import csv
import fcntl
import gzip
import hashlib
import heapq
import itertools
import json
import logging
import math
import os
from pathlib import Path
import re
import shutil
import sys
import threading
import time

DB_CONFIG = {'host':'127.0.0.1', 'port':3306, 'user':'YOUR_USERNAME',
             'password':'YOUR_PASSWORD', 'database':'YOUR_DATABASE',
             'connection_timeout':60, 'autocommit':True}
OUT = Path('/mnt/data/pdn/task_analysis_occ_v2')
SCORE_FILE = Path('/mnt/data/pdn/eloundou_scores.csv')
TABLE_PREFIX = 'research_oc2'
VERSION = 'occupation-first-1'
# Keep the design/checkpoint version: the target and seeded ordering are unchanged.
IMPLEMENTATION = '2026-09-16-draw-recovery'
SEED = 'onet-occupation-first-20260916'
RATE = 0.10
ANNUAL_MIN_SAMPLE = 200
DOMAIN_MIN_SAMPLE = 200
PAIR_MIN_SUPPORT = 50
GLOBAL_PAIR_MIN_SUPPORT = 500
NETWORK_CORE_NODES = 30
PAIR_BUFFER_KEYS = 250000
MONTHS = ['2024-10','2024-11','2024-12']+['2025-%02d'%m for m in range(1,10)]
CASES = ['13-2011.00','15-1211.00','43-4051.00','15-2051.00',
         '11-2021.00','23-2011.00','15-1252.00','15-1251.00']

def allocate(counts, rate=RATE, floor=ANNUAL_MIN_SAMPLE):
    """Exact annual n, positive n in each observed month; capacity-respecting."""
    if not 0<rate<=1 or floor<1:raise ValueError('Invalid sample settings')
    counts={k:int(v) for k,v in counts.items() if v>0}
    if not counts:return {}
    N=sum(counts.values());target=min(N,max(math.ceil(rate*N),floor,len(counts)))
    if target==N:return dict(counts)
    remaining=target-len(counts);capacity=N-len(counts)
    quota={k:remaining*(v-1)/capacity for k,v in counts.items()}
    result={k:1+math.floor(quota[k]) for k in counts}
    for k in sorted(counts,key=lambda k:(-(quota[k]-math.floor(quota[k])),k))[:target-sum(result.values())]:result[k]+=1
    assert sum(result.values())==target and all(0<result[k]<=counts[k] for k in counts)
    return result

def task_id(x):
    if x is None:return None
    s=str(x).strip()
    if s.lower() in ('','null','none','nan','\\n'):return None
    if re.fullmatch(r'[0-9]+(?:\.0+)?',s):
        v=int(s.split('.')[0])
        if v>0:return v
    raise ValueError('Nonpositive or malformed task identifier')

def signature(tasks,scores):
    c=Counter(scores[t] for t in tasks if t in scores)
    rated=sum(c.values())
    return (len(tasks),rated,len(tasks)-rated,c[0],c[.5],c[1])

def iter_bundles(rows):
    """Input ordered by occupation, job ID; NULL LEFT JOIN row retains empty job."""
    last=None;sector=None;tasks=set()
    for occ,sec,job,t in rows:
        key=(str(occ),str(job))
        if last is not None and key!=last:
            yield last[0],sector,last[1],tasks
            tasks=set()
        if key==last and str(sec)!=sector:raise ValueError('Sector changes within sampled job')
        last=key;sector=str(sec)
        tid=task_id(t)
        if tid is not None:tasks.add(tid)
    if last is not None:yield last[0],sector,last[1],tasks

def dump_json(path,value):
    path=Path(path);tmp=path.with_suffix(path.suffix+'.partial')
    tmp.write_text(json.dumps(value,indent=2,sort_keys=True));os.replace(tmp,path)

def sha(path):
    h=hashlib.sha256()
    with Path(path).open('rb') as f:
        for b in iter(lambda:f.read(2**20),b''):h.update(b)
    return h.hexdigest()

@contextmanager
def output_csv(path,header):
    path=Path(path);path.parent.mkdir(parents=True,exist_ok=True)
    tmp=path.with_name(path.name+'.partial')
    f=gzip.open(tmp,'wt',newline='',compresslevel=1) if path.suffix=='.gz' else tmp.open('w',newline='')
    try:
        w=csv.writer(f);w.writerow(header);yield w
        f.close();os.replace(tmp,path)
    finally:
        if not f.closed:f.close()

def dict_rows(path):
    opener=gzip.open if str(path).endswith('.gz') else open
    with opener(path,'rt',newline='') as f:yield from csv.DictReader(f)

class SpillCounter:
    """Bounded-key additive counter with sorted compressed runs and fan-in <=32."""
    def __init__(self,root,limit=PAIR_BUFFER_KEYS):
        self.root=Path(root);self.root.mkdir(parents=True,exist_ok=True)
        self.limit=limit;self.counts=Counter();self.paths=[];self.serial=0
    def add(self,key,value=1):
        self.counts[tuple(key)]+=value
        if len(self.counts)>=self.limit:self.flush()
    def newpath(self):
        self.serial+=1;return self.root/('run_%06d.jsonl.gz'%self.serial)
    def flush(self):
        if not self.counts:return
        p=self.newpath()
        with gzip.open(p,'wt',compresslevel=1) as f:
            for k,v in sorted(self.counts.items()):f.write(json.dumps([k,v],separators=(',',':'))+'\n')
        self.paths.append(p);self.counts.clear()
    @staticmethod
    def stream(p):
        with gzip.open(p,'rt') as f:
            for line in f:
                k,v=json.loads(line);yield tuple(k),v
    @classmethod
    def merged(cls,paths):
        stream=heapq.merge(*(cls.stream(p) for p in paths),key=lambda x:x[0])
        for k,g in itertools.groupby(stream,key=lambda x:x[0]):yield k,sum(v for _,v in g)
    def items(self):
        if not self.paths:
            yield from sorted(self.counts.items());self.counts.clear();return
        self.flush()
        while len(self.paths)>32:
            new=[]
            for i in range(0,len(self.paths),32):
                group=self.paths[i:i+32];p=self.newpath()
                with gzip.open(p,'wt',compresslevel=1) as f:
                    for k,v in self.merged(group):f.write(json.dumps([k,v],separators=(',',':'))+'\n')
                for old in group:old.unlink()
                new.append(p)
            self.paths=new
        yield from self.merged(self.paths)
        for p in self.paths:p.unlink()
        self.paths=[]

def merge_pairs(paths,sector=False):
    def stream(p):
        previous=None
        for r in dict_rows(p):
            key=(r['occupational_code'],)
            if sector:key+=(r['sector2'],)
            key=key+(int(r['task_a']),int(r['task_b']))
            if previous is not None and key<previous:raise ValueError('Pair file is not sorted: '+str(p))
            previous=key
            yield key,int(r['n_jobs_pair']),float(r['weighted_jobs_pair'])
    allrows=heapq.merge(*(stream(p) for p in paths),key=lambda r:r[0])
    for key,g in itertools.groupby(allrows,key=lambda r:r[0]):
        n=0;w=0.
        for _,a,b in g:n+=a;w+=b
        yield (*key,n,w)

def read_scores(path):
    result={}
    with Path(path).open(newline='') as f:
        sample=f.read(4096);f.seek(0)
        reader=csv.DictReader(f,delimiter='\t' if '\t' in sample.splitlines()[0] else ',')
        fields={c.strip().lower().replace(' ','_'):c for c in reader.fieldnames}
        if not {'task_id','beta'}<=set(fields):raise ValueError('Score file must contain task_id and beta')
        for row in reader:
            t=task_id(row[fields['task_id']]);v=row[fields['beta']].strip()
            if t is None or v.lower() in ('','nan','null'):continue
            b=float(v)
            if b not in (0,.5,1):raise ValueError('Expected discrete task beta 0, .5, 1')
            if t in result and result[t]!=b:raise ValueError('Conflicting beta values for a task ID')
            result[t]=b
    if not result:raise ValueError('No valid task scores')
    return result

def q(identifier):
    if not re.fullmatch(r'[A-Za-z0-9_]+',identifier):raise ValueError('Unsafe SQL identifier')
    return '`'+identifier+'`'

def source(month):return 'EXT_JobTasks_'+month[5:]+'_'+month[:4]
def table(kind,month):return TABLE_PREFIX+'_'+kind+'_'+month.replace('-','')

def frame_sql(month):
    """Retain every non-null source job ID; never require task or industry support."""
    src=q(source(month));dst=q(table('frame',month))
    oc="NULLIF(TRIM(title_code),'')"
    sec="NULLIF(LEFT(TRIM(PRIMARY_NAICS_CODE),2),'')"
    return [f'DROP TABLE IF EXISTS {dst}',f'''CREATE TABLE {dst} (
      job_id VARCHAR(255) NOT NULL PRIMARY KEY,
      occupational_code VARCHAR(32) NOT NULL,sector2 CHAR(2) NOT NULL,
      n_source_rows BIGINT NOT NULL,n_task_rows BIGINT NOT NULL,
      title_conflict TINYINT NOT NULL,sector_conflict TINYINT NOT NULL,
      KEY ix_occ(occupational_code,job_id)) ENGINE=InnoDB''',f'''INSERT INTO {dst}
      SELECT job_id,
      CASE WHEN COUNT(DISTINCT {oc})>1 THEN '__CONFLICT__'
           WHEN MAX({oc}) REGEXP '^[0-9]{{2}}-[0-9]{{4}}[.][0-9]{{2}}$' THEN MAX({oc})
           WHEN MAX({oc}) REGEXP '^[0-9]{{2}}-[0-9]{{4}}$' THEN CONCAT(MAX({oc}),'.00')
           ELSE '__UNASSIGNED__' END,
      CASE WHEN COUNT(DISTINCT {sec})=1 AND MAX({sec}) REGEXP '^[0-9]{{2}}$'
           THEN MAX({sec}) ELSE 'UN' END,
      COUNT(*),COUNT(NULLIF(TRIM(task_id),'')),
      COUNT(DISTINCT {oc})>1,COUNT(DISTINCT {sec})>1
      FROM {src} WHERE job_id IS NOT NULL GROUP BY job_id''']

def sample_sql(month):
    dst=q(table('sample',month))
    return [f'DROP TABLE IF EXISTS {dst}',f'''CREATE TABLE {dst} (
        job_id VARCHAR(255) NOT NULL PRIMARY KEY,occupational_code VARCHAR(32) NOT NULL,
        sector2 CHAR(2) NOT NULL,KEY ix_occ(occupational_code,job_id)) ENGINE=InnoDB''']

def sample_draw_sql(month):
    """One indexed occupation draw. Bind occupation, seed, month, integer n.

    Equivalent intended ordering to the former ROW_NUMBER/allocation-table join,
    but does not depend on that join or a window-function execution plan.
    """
    return f'''INSERT INTO {q(table('sample',month))} (job_id,occupational_code,sector2)
      SELECT job_id,occupational_code,sector2 FROM {q(table('frame',month))}
      WHERE occupational_code=%s
      ORDER BY SHA2(CONCAT(%s,'|',%s,'|',job_id),256),job_id LIMIT %s'''

def task_query(month):
    return f'''SELECT s.occupational_code,s.sector2,s.job_id,t.task_id
      FROM {q(table('sample',month))} s LEFT JOIN {q(source(month))} t ON t.job_id=s.job_id
      ORDER BY BINARY s.occupational_code,s.job_id,t.task_id'''

class Runner:
    def __init__(self,out,scores):
        self.out=Path(out);self.release=self.out/'release';self.private=self.out/'server_only'
        self.scores=scores
        for p in [self.release,self.private]:p.mkdir(parents=True,exist_ok=True)
        self.statepath=self.out/'checkpoint.json'
        config={'version':VERSION,'months':MONTHS,'rate':RATE,'minimum':ANNUAL_MIN_SAMPLE,
          'seed':SEED,'table_prefix':TABLE_PREFIX,'score_sha256':sha(SCORE_FILE),
          'database':DB_CONFIG['database'],'host':DB_CONFIG['host'],'port':DB_CONFIG['port'],
          'domain_minimum':DOMAIN_MIN_SAMPLE,'pair_minimum':PAIR_MIN_SUPPORT,
          'global_pair_minimum':GLOBAL_PAIR_MIN_SUPPORT,'core_nodes':NETWORK_CORE_NODES,'cases':CASES}
        self.new=not self.statepath.exists()
        self.state=json.loads(self.statepath.read_text()) if not self.new else {'config':config,'frames':[],'samples':[],'aggregates':[]}
        if self.state['config']!=config:raise RuntimeError('Run settings changed; use a new output directory/table prefix')
        self.save()
    def save(self):dump_json(self.statepath,self.state)
    def execute(self,sql,params=None):
        with (self.out/'executed_sql.log').open('a') as f:f.write(sql+';\n')
        started=time.monotonic();logging.info('SQL: %s',sql.splitlines()[0][:140])
        done=threading.Event()
        def heartbeat():
            while not done.wait(60):logging.info('Still waiting for SQL, elapsed %.1f min; Python may show low CPU while MySQL works: %s',(time.monotonic()-started)/60,sql.splitlines()[0][:80])
        watcher=threading.Thread(target=heartbeat,daemon=True);watcher.start()
        cur=self.conn.cursor()
        try:
            cur.execute(sql,params)
            rows=cur.fetchall() if cur.with_rows else []
        finally:done.set();watcher.join(timeout=1);cur.close()
        logging.info('SQL finished in %.1f sec',time.monotonic()-started);return rows
    def preflight(self):
        import mysql.connector
        self.conn=mysql.connector.connect(**DB_CONFIG)
        if self.execute('SELECT GET_LOCK(%s,0)',(TABLE_PREFIX,))[0][0]!=1:raise RuntimeError('Another extractor holds the database run lock')
        self.execute("SET SESSION sql_mode=CONCAT_WS(',',@@sql_mode,'STRICT_TRANS_TABLES')")
        self.execute('SET SESSION net_write_timeout=3600')
        self.execute('SET SESSION wait_timeout=28800')
        self.state['server_environment']={'version':str(self.execute('SELECT VERSION()')[0][0])}
        self.state['implementation']=IMPLEMENTATION
        existing={r[0] for r in self.execute('SHOW TABLES')}
        if not self.state.get('owns_prefix') and any(t.startswith(TABLE_PREFIX+'_') for t in existing):raise RuntimeError('No ownership checkpoint for existing run tables. Resume the original directory or choose a new prefix; no existing table was dropped.')
        for month in MONTHS:
            name=source(month)
            if name not in existing:raise RuntimeError('Missing source table: '+name)
            cols={r[0].lower() for r in self.execute('SHOW COLUMNS FROM '+q(name))}
            if not {'job_id','task_id','title_code','primary_naics_code'}<=cols:raise RuntimeError('Missing columns in '+name)
            indexes=self.execute('SHOW INDEX FROM '+q(name))
            if not any(int(r[3])==1 and str(r[4]).lower()=='job_id' for r in indexes):
                raise RuntimeError(name+' has no index beginning with job_id. Ask the DBA to add/confirm it before the full join; the program has not altered source indexes.')
        if shutil.disk_usage(self.out).free<5*1024**3:raise RuntimeError('Need at least 5 GiB free local server disk before starting; full pair files may need more')
        self.state['owns_prefix']=True;self.save()
    def build_frames(self):
        allrows=[]
        for month in MONTHS:
            p=self.release/('source_frame_'+month+'.csv')
            if month not in self.state['frames']:
                for sql in frame_sql(month):self.execute(sql)
                rows=self.execute(f'''SELECT occupational_code,sector2,COUNT(*),SUM(n_source_rows),SUM(n_task_rows=0),SUM(title_conflict),SUM(sector_conflict)
                  FROM {q(table('frame',month))} GROUP BY occupational_code,sector2 ORDER BY occupational_code,sector2''')
                occ=Counter()
                for o,s,n,*rest in rows:occ[o]+=n
                with output_csv(p,['sample_month','occupational_code','sector2','frame_jobs','source_task_rows','jobs_without_nonempty_task_row','title_conflict_jobs','sector_conflict_jobs','old_monthly_industry_rule_eligible']) as w:
                    for o,s,n,r,z,tc,sc in rows:w.writerow([month,o,s,n,r,z,tc,sc,int(n>=200 and occ[o]>=200)])
                nullrows=int(self.execute(f'SELECT COUNT(*) FROM {q(source(month))} WHERE job_id IS NULL')[0][0])
                self.state.setdefault('null_job_id_source_rows',{})[month]=nullrows
                self.state['frames'].append(month);self.save()
            if not p.exists():raise RuntimeError('Frame checkpoint CSV missing: '+str(p))
            allrows.extend(dict_rows(p))
        self.frame=allrows
        counts=defaultdict(Counter)
        for r in allrows:counts[r['occupational_code']][r['sample_month']]+=int(r['frame_jobs'])
        self.alloc={}
        with output_csv(self.release/'sampling_allocation.csv',['sample_month','occupational_code','frame_jobs','sample_jobs','inclusion_probability','design_weight','annual_frame_jobs','annual_sample_jobs','annual_support_ge200']) as w:
            for o,months in sorted(counts.items()):
                draw=allocate(months)
                for month,N in sorted(months.items()):
                    n=draw[month];self.alloc[(month,o)]=(N,n,N/n)
                    w.writerow([month,o,N,n,n/N,N/n,sum(months.values()),sum(draw.values()),int(sum(draw.values())>=200)])
        alloc=q(TABLE_PREFIX+'_allocation')
        self.execute(f'CREATE TABLE IF NOT EXISTS {alloc} (sample_month CHAR(7),occupational_code VARCHAR(32),frame_jobs BIGINT,sample_jobs BIGINT,PRIMARY KEY(sample_month,occupational_code))')
        self.execute(f'DELETE FROM {alloc}')
        cur=self.conn.cursor()
        try:cur.executemany(f'INSERT INTO {alloc} VALUES (%s,%s,%s,%s)',[(m,o,N,n) for (m,o),(N,n,w) in self.alloc.items()])
        finally:cur.close()
        self.conn.commit()
    def count_audit(self,month,stage,expected,actual):
        """Save only occupation counts, including missing/unexpected categories."""
        path=self.out/'diagnostics'/(stage+'_'+month+'.csv')
        bad=[]
        with output_csv(path,['sample_month','occupational_code','expected_jobs','actual_jobs','delta_jobs','status']) as w:
            for o in sorted(set(expected)|set(actual)):
                n=int(expected.get(o,0));g=int(actual.get(o,0));delta=g-n
                status='OK' if o in expected and o in actual and delta==0 else 'MISMATCH'
                w.writerow([month,o,n,g,delta,status])
                if status!='OK':bad.append((o,n,g,delta))
        if bad:
            logging.warning('%s %s: %d occupation mismatches; expected total %d, actual total %d; details: %s',
                            month,stage,len(bad),sum(expected.values()),sum(actual.values()),path)
            for o,n,g,delta in sorted(bad,key=lambda r:-abs(r[3]))[:12]:
                logging.warning('Occupation %s: expected %d, actual %d, difference %+d',o,n,g,delta)
        return not bad,path
    def build_samples(self):
        existing={r[0] for r in self.execute('SHOW TABLES')}
        for month in MONTHS:
            expected={o:n for (m,o),(N,n,w) in self.alloc.items() if m==month}
            expected_frame={o:N for (m,o),(N,n,w) in self.alloc.items() if m==month}
            frame=table('frame',month);sample=table('sample',month)
            # Refuse to use stale frame counts/design weights or guess a new n.
            frame_counts=dict(self.execute(f'SELECT occupational_code,COUNT(*) FROM {q(frame)} GROUP BY occupational_code'))
            valid,path=self.count_audit(month,'frame_counts',expected_frame,frame_counts)
            if not valid:raise RuntimeError('Frame counts disagree with saved allocation for '+month+'; no sample was rebuilt. See '+str(path))
            if any(not 0<expected[o]<=expected_frame[o] for o in expected):
                raise RuntimeError('Invalid sample allocation for '+month)
            if sample in existing:
                got=dict(self.execute(f'SELECT occupational_code,COUNT(*) FROM {q(sample)} GROUP BY occupational_code'))
                stage='sample_counts_checkpoint' if month in self.state['samples'] else 'sample_counts_before_rebuild'
                valid,path=self.count_audit(month,stage,expected,got)
            else:valid=False;path=self.out/'diagnostics'
            if month in self.state['samples']:
                if not valid:raise RuntimeError('Completed sample checkpoint disagrees with database for '+month+'; no completed sample was redrawn. See '+str(path))
                logging.info('%s verified completed sample; reusing %d jobs',month,sum(expected.values()))
                continue
            logging.info('%s drawing %d jobs across %d occupations using exact per-occupation limits',month,sum(expected.values()),len(expected))
            for sql in sample_sql(month):self.execute(sql)
            for i,(o,n) in enumerate(sorted(expected.items()),1):
                self.execute(sample_draw_sql(month),(o,SEED,month,int(n)))
                if i%50==0 or i==len(expected):logging.info('%s sampled %d/%d occupations',month,i,len(expected))
            # DB_CONFIG may omit autocommit. Persist before writing a checkpoint.
            self.conn.commit()
            got=dict(self.execute(f'SELECT occupational_code,COUNT(*) FROM {q(sample)} GROUP BY occupational_code'))
            valid,path=self.count_audit(month,'sample_counts_after_draw',expected,got)
            if not valid:raise RuntimeError('Sample draw size mismatch for '+month+'; expected '+str(sum(expected.values()))+', actual '+str(sum(got.values()))+'. See '+str(path))
            self.state.setdefault('sample_implementations',{})[month]=IMPLEMENTATION
            self.state['samples'].append(month);self.save()
            logging.info('%s sample verified: %d jobs, every occupation matches allocation',month,sum(got.values()))
    def stream(self,query):
        logging.info('Streaming complete sampled task bundles: %s',query.splitlines()[0])
        cur=self.conn.cursor(buffered=False);cur.execute(query)
        try:
            while True:
                rows=cur.fetchmany(20000)
                if not rows:break
                yield from rows
        finally:cur.close()
    def aggregate_month(self,month,rows=None):
        root=self.private/month;root.mkdir(exist_ok=True)
        # A restarted incomplete month replaces only its own scratch files.
        scratch=root/'scratch'
        if scratch.exists():shutil.rmtree(scratch)
        scratch.mkdir()
        rel=self.release
        paths={name:rel/(name+'_'+month+'.csv.gz') for name in ['occupation_sector_summary','task_incidence','bundle_signatures']}
        paths['pairs']=root/'pairs.csv.gz';paths['case_sector_pairs']=root/'case_sector_pairs.csv.gz'
        expected={o:(n,w) for (m,o),(N,n,w) in self.alloc.items() if m==month}
        got=Counter();nseen=0;incseen=0;pairseen=0;weighted_jobs=0.
        pair_header=['occupational_code','task_a','task_b','n_jobs_pair','weighted_jobs_pair']
        with output_csv(paths['occupation_sector_summary'],['sample_month','occupational_code','sector2','n_jobs','weighted_jobs','n_no_tasks','weighted_no_tasks','n_rated_jobs','weighted_rated_jobs']) as sw,output_csv(paths['task_incidence'],['sample_month','occupational_code','sector2','task_id','n_jobs_with_task','weighted_jobs_with_task']) as tw,output_csv(paths['bundle_signatures'],['sample_month','occupational_code','sector2','n_tasks','n_rated','n_unrated','n_beta0','n_beta05','n_beta1','n_jobs','weighted_jobs']) as bw,output_csv(paths['pairs'],pair_header) as pw,output_csv(paths['case_sector_pairs'],['occupational_code','sector2']+pair_header[1:]) as cw:
            bundles=iter_bundles(rows if rows is not None else self.stream(task_query(month)))
            for occ,group in itertools.groupby(bundles,key=lambda r:r[0]):
                if occ not in expected:raise RuntimeError('Occupation missing from allocation')
                target,weight=expected[occ];marg=Counter();signatures=Counter();totals=defaultdict(lambda:[0,0,0])
                pairs=SpillCounter(scratch/'pairs');secpairs=SpillCounter(scratch/'sector_pairs')
                local_pairs=0
                for o,sec,job,tasks in group:
                    nseen+=1;got[occ]+=1;incseen+=len(tasks);weighted_jobs+=weight
                    sig=signature(tasks,self.scores);signatures[(sec,)+sig]+=1
                    totals[sec][0]+=1;totals[sec][1]+=int(not tasks);totals[sec][2]+=int(sig[1]>0)
                    for t in tasks:marg[(sec,t)]+=1
                    ordered=sorted(tasks);local_pairs+=len(tasks)*(len(tasks)-1)//2
                    for a,b in itertools.combinations(ordered,2):
                        pairs.add((a,b))
                        if occ in CASES:secpairs.add((sec,a,b))
                    if nseen%25000==0:logging.info('%s processed %s jobs; %s task incidences',month,format(nseen,','),format(incseen,','))
                if got[occ]!=target:raise RuntimeError('Streamed job count differs from sample allocation: '+occ)
                for sec,(n,z,r) in sorted(totals.items()):sw.writerow([month,occ,sec,n,n*weight,z,z*weight,r,r*weight])
                for (sec,t),n in sorted(marg.items()):
                    if n>totals[sec][0]:raise RuntimeError('Task marginal exceeds jobs')
                    tw.writerow([month,occ,sec,t,n,n*weight])
                for key,n in sorted(signatures.items()):bw.writerow([month,occ,*key,n,n*weight])
                pooled=Counter()
                for (sec,t),n in marg.items():pooled[t]+=n
                emitted=0
                for (a,b),n in pairs.items():
                    if not 0<n<=min(pooled[a],pooled[b],target):raise RuntimeError('Invalid pair marginal')
                    pw.writerow([occ,a,b,n,n*weight]);emitted+=n
                if emitted!=local_pairs:raise RuntimeError('Pair combinatorial identity failed')
                pairseen+=emitted
                for (sec,a,b),n in secpairs.items():
                    if not 0<n<=min(marg[(sec,a)],marg[(sec,b)]):raise RuntimeError('Sector pair marginal failed')
                    cw.writerow([occ,sec,a,b,n,n*weight])
                if sum(n*key[1] for key,n in signatures.items())!=sum(marg.values()):raise RuntimeError('Task/signature conservation failed')
                logging.info('%s %s: %d jobs, %d pair occurrences; all bounds passed',month,occ,target,local_pairs)
        if set(got)!=set(expected):raise RuntimeError('An allocated occupation disappeared from task join')
        self.state.setdefault('month_qa',{})[month]={'jobs':nseen,'task_incidences':incseen,'pair_occurrences':pairseen,'weighted_jobs':weighted_jobs,'files':{k:{'path':str(p.relative_to(self.out)),'sha256':sha(p)} for k,p in paths.items()}}
        shutil.rmtree(scratch)
        self.state['aggregates'].append(month);self.save()
    def pool_pairs(self):
        logging.info('Pooling complete annual task marginals and pairs; thresholds applied only after pooling')
        # Marginals are keyed by occupation; store scalar counts, never task text.
        taskn=Counter();taskw=Counter();jobn=Counter();jobw=Counter();casecells={};core={}
        for month in MONTHS:
            logging.info('Loading aggregate marginals for %s',month)
            for r in dict_rows(self.release/('task_incidence_'+month+'.csv.gz')):
                k=(r['occupational_code'],int(r['task_id']));taskn[k]+=int(r['n_jobs_with_task']);taskw[k]+=float(r['weighted_jobs_with_task'])
            for r in dict_rows(self.release/('occupation_sector_summary_'+month+'.csv.gz')):
                o=r['occupational_code'];jobn[o]+=int(r['n_jobs']);jobw[o]+=float(r['weighted_jobs'])
                if o in CASES:casecells[(o,r['sector2'])]=True
        # Stable top-N by design-weighted marginal, not exposure or desired visual.
        for occ in CASES:core[occ]=set(t for (o,t) in sorted((k for k in taskn if k[0]==occ),key=lambda k:(-taskw[k],k[1]))[:NETWORK_CORE_NODES])
        with output_csv(self.release/'occupation_totals.csv',['occupational_code','n_jobs','weighted_jobs','annual_support_ge200']) as w:
            for o in sorted(jobn):w.writerow([o,jobn[o],jobw[o],int(jobn[o]>=DOMAIN_MIN_SAMPLE)])
        with output_csv(self.release/'occupation_task_marginals.csv.gz',['occupational_code','task_id','n_jobs_with_task','weighted_jobs_with_task','network_core_node']) as w:
            for (o,t),n in sorted(taskn.items()):w.writerow([o,t,n,taskw[(o,t)],int(t in core.get(o,set()))])
        casecounts={};scratch=self.private/'global_scratch'
        if scratch.exists():shutil.rmtree(scratch)
        gn=SpillCounter(scratch/'raw');gw=SpillCounter(scratch/'weighted')
        header=['occupational_code','task_a','task_b','n_jobs_pair','weighted_jobs_pair']
        allpath=self.private/'all_occupation_pairs.csv.gz';releasepath=self.release/'occupation_pairs_support50.csv.gz'
        with output_csv(allpath,header) as full,output_csv(releasepath,header) as pub:
            for row_number,(o,a,b,n,w) in enumerate(merge_pairs([self.private/m/'pairs.csv.gz' for m in MONTHS]),1):
                if n>min(taskn[(o,a)],taskn[(o,b)],jobn[o]) or w>min(taskw[(o,a)],taskw[(o,b)],jobw[o])+1e-6:raise RuntimeError('Annual pair bounds failed')
                row=[o,a,b,n,w];full.writerow(row)
                if n>=PAIR_MIN_SUPPORT:pub.writerow(row)
                gn.add((a,b),n);gw.add((a,b),w)
                if a in core.get(o,set()) and b in core[o]:casecounts[(o,a,b)]=(n,w)
                if row_number%500000==0:logging.info('Pooled %s annual occupation-pair rows',format(row_number,','))
        with output_csv(self.release/'case_core_pairs_complete.csv',['occupational_code','task_a','task_b','n_jobs_pair','weighted_jobs_pair']) as w:
            for o,ts in sorted(core.items()):
                for a,b in itertools.combinations(sorted(ts),2):w.writerow([o,a,b,*casecounts.get((o,a,b),(0,0.))])
        with output_csv(self.private/'all_global_pairs.csv.gz',['task_a','task_b','n_jobs_pair','weighted_jobs_pair']) as full,output_csv(self.release/'global_pairs_support500.csv.gz',['task_a','task_b','n_jobs_pair','weighted_jobs_pair']) as pub:
            logging.info('Merging global pair runs; all raw counts remain on server')
            for row_number,(x,y) in enumerate(itertools.zip_longest(gn.items(),gw.items()),1):
                if x is None or y is None or x[0]!=y[0]:raise RuntimeError('Global weighted/unweighted keys disagree')
                (a,b),n=x;w=y[1];full.writerow([a,b,n,w])
                if n>=GLOBAL_PAIR_MIN_SUPPORT:pub.writerow([a,b,n,w])
                if row_number%500000==0:logging.info('Pooled %s global pairs',format(row_number,','))
        shutil.rmtree(scratch)
        # Complete annual case-core sector grids, including observed zeros.
        sc={}
        with output_csv(self.private/'all_case_sector_pairs.csv.gz',['occupational_code','sector2','task_a','task_b','n_jobs_pair','weighted_jobs_pair']) as full:
            for o,s,a,b,n,w in merge_pairs([self.private/m/'case_sector_pairs.csv.gz' for m in MONTHS],sector=True):
                full.writerow([o,s,a,b,n,w])
                if a in core.get(o,set()) and b in core[o]:sc[(o,s,a,b)]=(n,w)
        with output_csv(self.release/'case_core_sector_pairs_complete.csv.gz',['occupational_code','sector2','task_a','task_b','n_jobs_pair','weighted_jobs_pair']) as w:
            for o,s in sorted(casecells):
                for a,b in itertools.combinations(sorted(core[o]),2):w.writerow([o,s,a,b,*sc.get((o,s,a,b),(0,0.))])
        names=['occupation_totals.csv','occupation_task_marginals.csv.gz','occupation_pairs_support50.csv.gz','global_pairs_support500.csv.gz','case_core_pairs_complete.csv','case_core_sector_pairs_complete.csv.gz']
        self.state['pooled_files']={name:sha(self.release/name) for name in names}
        self.state['pooled_pairs']=True;self.save()
    def finalize(self):
        required={'sampling_allocation.csv'}|set(self.state['pooled_files'])
        required|={name+'_'+m+suffix for m in MONTHS for name,suffix in [('source_frame','.csv'),('occupation_sector_summary','.csv.gz'),('task_incidence','.csv.gz'),('bundle_signatures','.csv.gz')]}
        if required!={p.name for p in self.release.glob('*.csv*')}:raise RuntimeError('Missing or unexpected release CSV files')
        files=[]
        for p in sorted(self.release.glob('*.csv*')):
            with (gzip.open(p,'rt') if p.suffix=='.gz' else p.open()) as f:
                reader=csv.reader(f);header=next(reader)
                if any('job_id' in c for c in header):raise RuntimeError('Row identifier leaked into release')
            files.append({'file':p.name,'bytes':p.stat().st_size,'sha256':sha(p),'columns':header})
        report={'status':'COMPLETE','config':self.state['config'],'month_qa':self.state['month_qa'],
          'implementation':IMPLEMENTATION,'sample_implementations':self.state.get('sample_implementations',{}),
          'server_environment':self.state.get('server_environment',{}),
          'null_job_id_source_rows':self.state.get('null_job_id_source_rows',{}),'files':files,
          'pair_release_min_support':PAIR_MIN_SUPPORT,'global_pair_release_min_support':GLOBAL_PAIR_MIN_SUPPORT,
          'network_core_n':NETWORK_CORE_NODES,'script_sha256':sha(Path(__file__)),
          'notes':['EXT source universe only; absence of no-task jobs in EXT is not zero prevalence in all postings.',
          'All occupations and sectors retained. Annual support flags do not remove rows.',
          'Use inverse-probability weights for pooled estimates; keep raw counts as support.',
          'Pair thresholds apply after complete annual pooling. All sparse pairs stay in server_only.',
          'Core grids contain observed zeros among the selected top-marginal task vocabulary; outside-core tasks are not assumed isolated.',
          'No row-level data in release. Source and prior research tables unchanged.']}
        dump_json(self.release/'manifest.json',report)
        (self.release/'README.md').write_text(RELEASE_README)
        dump_json(self.out/'COMPLETE.json',{'status':'COMPLETE','release':str(self.release),'manifest_sha256':sha(self.release/'manifest.json')})
        dump_json(self.release/'COMPLETE.json',{'status':'COMPLETE','manifest_sha256':sha(self.release/'manifest.json')})
        (self.out/'FAILED.json').unlink(missing_ok=True)
        logging.info('COMPLETE. Download aggregate files ONLY from %s',self.release)
    def run(self):
        try:
            for p in [self.out/'COMPLETE.json',self.release/'COMPLETE.json']:p.unlink(missing_ok=True)
            self.preflight()
            self.build_frames();self.build_samples()
            for month in MONTHS:
                if month not in self.state['aggregates']:self.aggregate_month(month)
                else:
                    for f in self.state['month_qa'][month]['files'].values():
                        if sha(self.out/f['path'])!=f['sha256']:raise RuntimeError('Checkpoint aggregate file changed; use a new run directory')
            pooled_valid=self.state.get('pooled_pairs') and all((self.release/p).exists() and sha(self.release/p)==s for p,s in self.state.get('pooled_files',{}).items())
            if not pooled_valid:self.pool_pairs()
            self.finalize()
        finally:
            if hasattr(self,'conn'):self.conn.close()

RELEASE_README='''# Occupation-first aggregate release

Window: October 2024–September 2025, all twelve months. A job-month is the unit.
All CSV files contain aggregates, never job IDs. Do not download server_only.
Completion requires COMPLETE.json and matching manifest checksums.

## Design and denominators

Annual occupation sample target = min(N, max(ceil(.10 N), 200)); small occupations are censuses.
Observed months receive at least one draw; remaining draws are allocated proportionally to remaining capacity.
Within each occupation-month the seeded hash order selects exactly n of N jobs, without replacement.
sampling_allocation.csv records N, n, pi=n/N, and design_weight=N/n.
Monthly source tables must remain unchanged while the run/checkpoint is used. A changed source
requires a fresh output directory and table prefix; a checkpoint is not a source snapshot.
There is NO industry eligibility floor. Missing/conflicting sectors are UN; ambiguous/missing occupations
are explicit diagnostic categories. Actual O*NET comparison eligibility requires a valid matching code.
All annual estimates include January. Counts below 200 remain available but are flagged low support.

## Files / field-level codebook

source_frame_YYYY-MM.csv: occupation x sector counts BEFORE sampling. frame_jobs is the true frame size,
source_task_rows counts all source rows attached to valid job IDs (including NULL-task rows),
jobs_without_nonempty_task_row counts jobs without a nonempty task field, title_conflict_jobs and
sector_conflict_jobs count conflicting nonempty source assignments. old_monthly_industry_rule_eligible
is a diagnostic of the former >=200 occupation-sector-month rule, not a filter. Null job-ID source
row counts are in manifest.json. These are source-frame diagnostics, not all vacancies in the economy.
Conflicting occupation/sector assignments now receive explicit diagnostic codes rather than taking
an arbitrary MAX value. The former-rule diagnostic applies that rule to this new, audited frame;
it is not an exact reconstruction of the former conflict-resolution implementation.

sampling_allocation.csv: occupation x month; frame_jobs and sample_jobs define the exact draw;
annual_frame_jobs and annual_sample_jobs repeat occupation annual totals, so never sum those across months.
annual_support_ge200 means annual sampled job count is at least 200, not a claim of adequate precision.

occupation_sector_summary_YYYY-MM.csv.gz: n_jobs=sampled job-months in cell; weighted_jobs=sum(1/pi).
n_no_tasks / weighted_no_tasks count jobs with no valid task IDs, including null LEFT JOIN rows.
n_rated_jobs / weighted_rated_jobs count jobs with >=1 rated task. Sector denominators are complete,
including jobs without tasks. Pooled weighted sector denominators are domain estimates, not exact source counts.

task_incidence_YYYY-MM.csv.gz: one occupation x sector x task_id row; n_jobs_with_task counts distinct
sampled jobs containing the task, weighted_jobs_with_task sums their design weights. Do not treat the sum
across tasks as unique jobs. Every task is retained regardless of rating or canonical occupation.

bundle_signatures_YYYY-MM.csv.gz: one occupation x sector x signature; n_tasks is distinct task IDs,
n_rated+n_unrated=n_tasks, and n_beta0+n_beta05+n_beta1=n_rated. n_jobs counts jobs with this exact
signature; weighted_jobs sums weights. n_tasks=0 jobs have undefined task means; never assign mean zero.
Unknown labels are not beta=0. Fully unrated nonempty jobs are distinct from empty jobs.

occupation_totals.csv: full annual sample and design-weight totals, including taskless jobs.
occupation_task_marginals.csv.gz: annual occurrence counts and weighted counts; network_core_node=1
for each case's top 30 design-weighted task marginals, selected without regard to exposure labels.

occupation_pairs_support50.csv.gz: annual unordered distinct task pairs with raw support >=50;
global_pairs_support500.csv.gz: annual pairs across all occupations with raw support >=500.
n_jobs_pair is number of sampled job-months containing both tasks; weighted_jobs_pair=sum(1/pi).
No self-pairs or mirrored rows. All twelve months are pooled BEFORE selecting support.
Full sparse tables for every positive pair remain in server_only. A missing released edge is not a zero.
No sigmoid replaces the raw counts. Occupation joint probability is pair count / occupation total;
P(b|a) is pair count / task-a marginal. Weighted versions use corresponding weighted quantities.
Sector ratios use weighted sampled domain denominators, so pair probabilities remain bounded by one.

case_core_pairs_complete.csv: all unordered pairs, including zeros, among the selected case core nodes.
case_core_sector_pairs_complete.csv.gz: same complete grids for every sampled sector in those cases.
The selected vocabulary limits the graph, not the completeness of its pair supports. No omission of
unselected months. Full industry task marginals remain in the monthly task files.

All files use occupational_code (exact title-assigned O*NET code), sector2 (source NAICS2 or UN),
sample_month (YYYY-MM), and task IDs (positive integers). Unknown occupation categories start with __.
Pair support counts are sampled support, not employment. Design weights target the EXT frame,
not incumbent workers. OEWS employment weights are a separate analytical choice.
'''

def main():
    global SCORE_FILE
    parser=argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--output-dir',default=str(OUT));parser.add_argument('--scores',default=str(SCORE_FILE))
    parser.add_argument('--sql-preview',action='store_true',help='Print generated SQL without any DB connection')
    args=parser.parse_args()
    if args.sql_preview:
        for month in MONTHS:
            print('\n;\n'.join(frame_sql(month)+sample_sql(month)+[task_query(month)])+';')
            print('-- Python executes this draw once per occupation, binding (occupation, seed, month, sample_jobs):')
            print(sample_draw_sql(month)+';')
        return
    SCORE_FILE=Path(args.scores)
    if any(str(DB_CONFIG[k]).startswith('YOUR_') for k in ['user','password','database']):raise SystemExit('Edit DB_CONFIG at the top of this one file, then rerun the same command.')
    if not re.fullmatch(r'[A-Za-z0-9_-]+',SEED):raise SystemExit('Seed must be a safe literal')
    out=Path(args.output_dir);out.mkdir(parents=True,exist_ok=True)
    logging.basicConfig(level=logging.INFO,format='%(asctime)s %(levelname)s %(message)s',handlers=[logging.StreamHandler(),logging.FileHandler(out/'run.log')])
    logging.info('Extractor implementation: %s; sampling design: %s',IMPLEMENTATION,VERSION)
    with (out/'run.lock').open('w') as lock:
        try:fcntl.flock(lock,fcntl.LOCK_EX|fcntl.LOCK_NB)
        except BlockingIOError:raise SystemExit('Another process is using this output directory')
        lock.write(str(os.getpid()));lock.flush()
        try:
            scores=read_scores(SCORE_FILE);runner=Runner(out,scores);runner.run()
        except Exception as e:
            dump_json(out/'FAILED.json',{'status':'FAILED','exception_type':type(e).__name__,'message':str(e),'time':time.strftime('%Y-%m-%d %H:%M:%S')})
            logging.exception('FAILED; no completion marker was created for this attempt. Fix the reported issue, then rerun the same command to resume.')
            raise

if __name__=='__main__':main()
