"""Audit historical task IDs and reaggregate mentions by distinct investigation.

This does not validate semantic matches or turn historical outputs into a release.
"""
import argparse
import ast
import collections
import csv
import importlib.metadata
import json
from pathlib import Path
from prepare_incident_corpus import sha256


def parse_matches(value):
    matches = ast.literal_eval(value)
    if not isinstance(matches,list):
        raise ValueError('Expected list')
    if any(not isinstance(t,(tuple,list)) or len(t)!=2 for t in matches):
        raise ValueError('Expected task ID and description pairs throughout row')
    return [(str(t[0]),str(t[1])) for t in matches]


def aggregate(records, official):
    groups = {}
    for r in records:
        k = r['task_id']
        g = groups.setdefault(k, {'reports':set(), 'descriptions':set(), 'count':0})
        g['reports'].add(r['summary_nr'])
        g['descriptions'].add(r['task_description'])
        g['count'] += 1
    result = []
    for k, g in groups.items():
        status = ('not_in_pinned_inventory' if k not in official else
                  'exact_id_and_description' if g['descriptions'] == {official[k]} else
                  'description_mismatch')
        result.append({'task_id':k, 'task_description':official.get(k, sorted(g['descriptions'])[0]),
                       'historical_descriptions':json.dumps(sorted(g['descriptions'])),
                       'n_investigations':len(g['reports']), 'n_mentions':g['count'],
                       'identity_status':status, 'release_status':'unvalidated_candidate'})
    return sorted(result,key=lambda r:(-r['n_investigations'],r['task_id']))


def main():
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument('--input',default='results/coded_accident_sentences.csv')
    parser.add_argument('--output-dir',default='results/task_evidence_v1')
    args = parser.parse_args()
    import pandas as pd
    out = Path(args.output_dir)
    source = out/'sources/onet_30_0_task_statements.txt'
    tasks = pd.read_csv(source,sep='\t',dtype=str,keep_default_na=False)
    if tasks.groupby('Task ID')['Task'].nunique().max() != 1:
        raise ValueError('Official Task IDs have conflicting descriptions')
    tasks = tasks.rename(columns={'Task ID':'task_id','Task':'task_description',
                                  'O*NET-SOC Code':'onet_soc_code'})
    tasks['onet_version'] = '30.0'
    tasks.to_csv(out/'onet_tasks.csv',index=False)
    official = dict(zip(tasks.task_id,tasks.task_description))
    records, examples, reports = [], collections.defaultdict(list), set()
    errors = []
    with open(args.input) as f:
        for line_nr, row in enumerate(csv.DictReader(f),2):
            reports.add(row['summary_nr'])
            try:
                matches = parse_matches(row['matched_tasks'])
                for task in matches:
                    k, description = str(task[0]), str(task[1])
                    records.append({'summary_nr':row['summary_nr'],'task_id':k,
                                    'task_description':description})
                    if len(examples[k]) < 5 and row['summary_nr'] not in {e['summary_nr'] for e in examples[k]}:
                        examples[k].append({'summary_nr':row['summary_nr'],
                            'sentence_nr':row['sentence_nr'],'sentences':row['sentences'],
                            'task_id':k,'historical_description':description,
                            'evidence_status':'historical_unvalidated'})
            except (ValueError,SyntaxError,TypeError) as exc:
                errors.append({'source_row':line_nr,'error':str(exc)})
    result = pd.DataFrame(aggregate(records,official))
    result['pct_investigations'] = result.n_investigations/len(reports)*100
    result['reference_onet_version'] = '30.0'
    result.to_csv(out/'historical_onet_task_candidates.csv',index=False)
    pd.DataFrame([e for group in examples.values() for e in group]).to_parquet(out/'historical_task_examples.parquet',index=False)
    pd.DataFrame(errors,columns=['source_row','error']).to_csv(out/'historical_parse_errors.csv',index=False)
    ids = result.loc[result.identity_status=='exact_id_and_description','task_id']
    (out/'historical_identity_verified_candidate_ids.txt').write_text('\n'.join(sorted(ids,key=int))+'\n')
    audit = {'historical_source_sha256':sha256(args.input),'official_source_sha256':sha256(source),
             'official_url':'https://www.onetcenter.org/dl_files/database/db_30_0_text/Task%20Statements.txt',
             'reference_onet_version':'30.0','historical_onet_version':'unknown',
             'jaat_installed_version':importlib.metadata.version('JAAT'),
             'official_task_ids':len(official),'historical_task_ids':len(result),
             'identity_counts':result.identity_status.value_counts().to_dict(),
             'investigations':len(reports),'parse_errors':len(errors),
             'status':'identity checked and counts corrected; semantic validity NOT established',
             'script_sha256':sha256(__file__)}
    (out/'identity_audit.json').write_text(json.dumps(audit,indent=2)+'\n')
    print(json.dumps(audit,indent=2))


if __name__ == '__main__':
    main()
