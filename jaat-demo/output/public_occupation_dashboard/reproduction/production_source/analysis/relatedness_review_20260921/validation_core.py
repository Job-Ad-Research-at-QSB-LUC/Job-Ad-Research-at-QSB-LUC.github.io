"""Original v2 judgment semantics, with explicit missing/error and model-version states."""
import hashlib

VERSION='v2_temp_zero_2026_05_18'
MODELS={'anthropic':'claude-sonnet-4-6','openai':'gpt-4o'}
EXPECTED_RETURNED={'anthropic':'claude-sonnet-4-6','openai':'gpt-4o-2024-08-06'}
PROMPT_TEMPLATE='Occupation: {soc_title} ({occ8})\nOccupation description: {soc_description}\n\nTask: {task_text}\n\nDoes this task plausibly belong to this occupation? Answer with one word: YES or NO.'

def soc_prefix(code,n):return ''.join(c for c in str(code) if c.isdigit())[:n]
def pair_id(occ8,task_id):return hashlib.sha256(f'{occ8}|{int(task_id)}'.encode()).hexdigest()[:16]
def prompt(row):return PROMPT_TEMPLATE.format(**row)
def prompt_hash(model,text):return hashlib.sha256(f'{model}||{text}'.encode()).hexdigest()
def parse_verdict(text):
    s=str(text).strip().lower()
    return 'YES' if s.startswith('yes') else 'NO' if s.startswith('no') else 'UNCLEAR'
def reusable(r):
    return r.get('model_id') in MODELS.values() and r.get('prompt_version')==VERSION and r.get('parsed_verdict') in ['YES','NO'] and not r.get('error_detail')
def decision(canonical,claude,gpt):
    if canonical:return 'canonical_retained'
    if claude=='YES' and gpt=='YES':return 'reviewed_yes'
    if claude in ['YES','NO'] and gpt in ['YES','NO']:return 'reviewed_not_retained'
    if claude is not None or gpt is not None:return 'review_incomplete'
    return 'unreviewed'
def request(row,provider):
    body={'model':MODELS[provider],'max_tokens':16,'temperature':0,'messages':[{'role':'user','content':prompt(row)}]}
    if provider=='anthropic':return {'custom_id':row['pair_id'],'params':body}
    return {'custom_id':row['pair_id'],'method':'POST','url':'/v1/chat/completions','body':body}
def read_result(provider,obj):
    r={'pair_id':obj['custom_id'],'model_id':MODELS[provider],'prompt_version':VERSION,'provider':provider,
       'model_version':None,'parsed_verdict':'ERROR','raw_response':'','usable':False,'error_detail':None,'usage':{}}
    if provider=='openai':
        response=obj.get('response') or {};body=response.get('body') or {}
        if obj.get('error') or response.get('status_code')!=200:
            r['error_detail']=str(obj.get('error') or body);return r
        r['raw_response']=body.get('choices',[{}])[0].get('message',{}).get('content') or ''
        r['model_version']=body.get('model');r['usage']=body.get('usage',{})
    else:
        result=obj.get('result') or {}
        if result.get('type')!='succeeded':r['error_detail']=str(result);return r
        body=result['message'];r['raw_response']=''.join(v.get('text','') for v in body.get('content',[]) if v.get('type')=='text')
        r['model_version']=body.get('model');r['usage']=body.get('usage',{})
    r['parsed_verdict']=parse_verdict(r['raw_response'])
    r['usable']=r['parsed_verdict'] in ['YES','NO'] and r['model_version']==EXPECTED_RETURNED[provider]
    if r['model_version']!=EXPECTED_RETURNED[provider]:r['error_detail']='Returned model differs from historical version; do not pool without an explicit replication decision.'
    if r['parsed_verdict']=='UNCLEAR':r['error_detail']='No valid YES/NO verdict; retry separately.'
    return r
