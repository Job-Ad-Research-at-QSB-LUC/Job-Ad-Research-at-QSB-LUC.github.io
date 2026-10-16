import unittest
import json
import tempfile
import hashlib
from types import SimpleNamespace
from pathlib import Path
import validation_core as v

class ValidationTests(unittest.TestCase):
    def test_prefix_strips_punctuation(self):
        self.assertEqual(v.soc_prefix('15-1252.00',4),'1512')
        self.assertNotEqual(v.soc_prefix('15-1252.00',4),v.soc_prefix('15-2051.00',4))
    def test_no_is_distinct_from_missing(self):
        self.assertEqual(v.decision(False,'YES','NO'),'reviewed_not_retained')
        self.assertEqual(v.decision(False,'YES',None),'review_incomplete')
        self.assertEqual(v.decision(False,None,None),'unreviewed')
        self.assertEqual(v.decision(True,'NO','NO'),'canonical_retained')
    def test_only_valid_matching_version_is_reusable(self):
        x={'model_id':'gpt-4o','prompt_version':v.VERSION,'parsed_verdict':'YES','error_detail':None}
        self.assertTrue(v.reusable(x))
        for key,val in [('prompt_version','v1'),('parsed_verdict','ERROR'),('model_id','gemini-2.5-flash')]:
            self.assertFalse(v.reusable(dict(x,**{key:val})))
    def test_payloads_preserve_original_request(self):
        row=dict(pair_id='test_pair',occ8='15-1252.00',soc_title='Software Developers',soc_description='Develop software.',task_text='Analyze data.')
        prompt=v.prompt(row)
        self.assertEqual(prompt,'Occupation: Software Developers (15-1252.00)\nOccupation description: Develop software.\n\nTask: Analyze data.\n\nDoes this task plausibly belong to this occupation? Answer with one word: YES or NO.')
        for provider in v.MODELS:
            request=v.request(row,provider);body=request['params'] if provider=='anthropic' else request['body']
            self.assertEqual(body['temperature'],0);self.assertEqual(body['max_tokens'],16)
            self.assertEqual(body['messages'],[{'role':'user','content':prompt}])
    def test_failed_request_is_retryable(self):
        body={'custom_id':'test_pair','response':{'status_code':500,'body':{'error':{'message':'temporary'}}}}
        out=v.read_result('openai',body)
        self.assertEqual(out['parsed_verdict'],'ERROR');self.assertFalse(out['usable'])
    def test_returned_snapshot_mismatch_is_quarantined(self):
        body={'custom_id':'p','response':{'status_code':200,'body':{'model':'different-model','choices':[{'message':{'content':'YES'}}],'usage':{}}}}
        self.assertFalse(v.read_result('openai',body)['usable'])
        body['response']['body']['model']='gpt-4o-2024-08-06'
        self.assertTrue(v.read_result('openai',body)['usable'])
    def test_anthropic_success(self):
        body={'custom_id':'p','result':{'type':'succeeded','message':{'model':'claude-sonnet-4-6','content':[{'type':'text','text':'NO'}],'usage':{}}}}
        self.assertEqual(v.read_result('anthropic',body)['parsed_verdict'],'NO')
        self.assertTrue(v.read_result('anthropic',body)['usable'])
    def test_server_filter_keeps_jobs_that_lose_all_tasks(self):
        from rerun_filtered_release import filter_bundles
        x=[('15-1252.00','54','private1',{1,2}),('43-4051.00','44','private2',{1})]
        got=list(filter_bundles(iter(x),{'15-1252.00':{1,2}}))
        self.assertEqual(got[0],('15-1252.00','54','private1',set()))
        self.assertEqual(got[1][-1],{1})
    def test_finish_reuses_partner_and_does_not_complete_failed_pair(self):
        import pandas as pd
        from run_pair_validation import finish
        with tempfile.TemporaryDirectory() as dirname:
            p=Path(dirname)
            pd.DataFrame({'pair_id':['p1','p2','p3']}).to_csv(p/'selected_pairs.csv',index=False)
            pd.DataFrame([dict(pair_id='p1',provider='openai',parsed_verdict='YES',usable=True)]).to_csv(p/'prior_selected_responses.csv',index=False)
            rows=[dict(pair_id=i,provider=provider,parsed_verdict=verdict,usable=verdict!='ERROR')
                  for i,provider,verdict in [('p1','anthropic','YES'),('p2','anthropic','NO'),('p2','openai','YES'),('p3','anthropic','ERROR'),('p3','openai','YES')]]
            (p/'test_normalized_results.json').write_text(json.dumps(rows))
            finish(p,{'jobs':[{'file':'test_requests.jsonl'}]})
            got=pd.read_csv(p/'reviewed_pairs.csv').set_index('pair_id')
            self.assertEqual(got.loc['p1','review_status'],'reviewed_yes')
            self.assertEqual(got.loc['p2','review_status'],'reviewed_not_retained')
            self.assertEqual(got.loc['p3','review_status'],'review_incomplete')
            self.assertFalse((p/'COMPLETE.json').exists())
            self.assertEqual(pd.read_csv(p/'retry_pairs.csv').pair_id.tolist(),['p3'])
    def test_next_round_skips_completed_pairs_and_providers(self):
        import pandas as pd
        from run_pair_validation import prepare
        with tempfile.TemporaryDirectory() as dirname:
            p=Path(dirname);source=p/'package';source.mkdir();applied=p/'applied';applied.mkdir()
            rows=[dict(pair_id='p1',occ8='15-1252.00',task_id=1,metadata_ready=True,priority_tier=1,anthropic_pending=True,openai_pending=True),
                  dict(pair_id='p2',occ8='15-1252.00',task_id=2,metadata_ready=True,priority_tier=1,anthropic_pending=True,openai_pending=True)]
            pd.DataFrame(rows).to_csv(source/'pending_pairs.csv.gz',index=False)
            pd.DataFrame([dict(occ8='15-1252.00',soc_title='Software Developers',soc_description='Develop software.')]).to_csv(source/'occupation_metadata.csv',index=False)
            pd.DataFrame({'task_id':[1,2],'task_text':['Analyze data.','Write programs.']}).to_csv(source/'task_metadata.csv',index=False)
            pd.DataFrame(columns=['pair_id','provider','prompt','model_id','model_version','prompt_version','parsed_verdict','usable']).to_csv(source/'prior_responses.csv.gz',index=False)
            (source/'QA.json').write_text('{}')
            pd.DataFrame([dict(pair_id='p1',anthropic_verdict='YES',openai_verdict='NO'),
                          dict(pair_id='p2',anthropic_verdict='',openai_verdict='YES')]).to_csv(applied/'decision_ledger.csv.gz',index=False)
            (applied/'APPLY_QA.json').write_text(json.dumps({'ledger_sha256':hashlib.sha256((applied/'decision_ledger.csv.gz').read_bytes()).hexdigest()}))
            run=p/'run'
            prepare(SimpleNamespace(package=str(source),run_dir=str(run),batch_size=5000,tier=1,limit=None,applied=str(applied)))
            manifest=json.loads((run/'manifest.json').read_text())
            self.assertEqual(manifest['n_pairs'],1);self.assertEqual(len(manifest['jobs']),1)
            self.assertEqual(manifest['jobs'][0]['provider'],'anthropic')
            prior=pd.read_csv(run/'prior_selected_responses.csv')
            self.assertEqual(prior.provider.tolist(),['openai']);self.assertEqual(prior.parsed_verdict.tolist(),['YES'])

if __name__=='__main__':unittest.main()
