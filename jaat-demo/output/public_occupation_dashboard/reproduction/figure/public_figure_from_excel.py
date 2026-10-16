"""Standalone renderer for the disclosure-audited public RN workbook."""
import sys,json
sys.dont_write_bytecode=True
from pathlib import Path
from argparse import ArgumentParser
import openpyxl,pandas as pd
from figure_rendering import render

def read(workbook):
 wb=openpyxl.load_workbook(workbook,read_only=True,data_only=True)
 tables={}
 for ws in wb:
  rows=ws.iter_rows(values_only=True);header=next(rows)
  tables[ws.title]=pd.DataFrame(rows,columns=header)
 wb.close();m=dict(tables['Metadata'].itertuples(index=False,name=None))
 tasks=tables['Public_tasks'];lists=tables['Rankings'];validation=tables['Validation']
 validation.value=pd.to_numeric(validation.value,errors='coerce')
 c=dict(code=m['origin'],display_code=m['origin'],title=m['title'],lists=lists,shared_tasks=tasks,
   pair_similarity=float(m['pair_similarity']),validation=validation,
   selected=lists[(lists.method=='task')&(lists.destination==m['destination'])].iloc[0],
   onet_selected=lists[lists.method=='onet_published'].iloc[0],
   shared_task_count=len(tasks),public_explanation=True)
 if 'presentation_json' in m:
  presentation=json.loads(m['presentation_json']);presentation['occupation_recovery']=pd.DataFrame(presentation['occupation_recovery']);c.update(presentation)
 return c

def main():
 p=ArgumentParser();p.add_argument('workbook',type=Path);p.add_argument('output',type=Path);a=p.parse_args()
 render(read(a.workbook),a.output,'registered_nurses_public')
if __name__=='__main__':main()
