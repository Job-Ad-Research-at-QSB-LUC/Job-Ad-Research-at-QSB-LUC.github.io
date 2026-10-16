"""Publicly installable Excel export (pip install xlsxwriter).

Create the formatted scientific template with independently calculated formula
caches. stream_transition_sheets.py then fills the large Figure_data worksheet.
"""
from pathlib import Path
import json,sys
import xlsxwriter

def main(directory):
 p=Path(directory);spec=json.loads((p/'workbook_spec.json').read_text())
 wb=xlsxwriter.Workbook(p/'_workbook_template.xlsx',{'constant_memory':True,'strings_to_formulas':False,'strings_to_urls':False})
 header=wb.add_format({'bg_color':'#203340','font_color':'#FFFFFF','bold':True,'text_wrap':True})
 wrap=wb.add_format({'text_wrap':True,'valign':'top'})
 number=wb.add_format({'num_format':'0.000000'});scientific=wb.add_format({'num_format':'0.000000E+00'})
 for entry in spec:
  sh=wb.add_worksheet(entry['sheet']);sh.hide_gridlines(2);sh.freeze_panes(1,0)
  if entry['sheet']=='Figure_data':
   with (p/entry['file']).open() as f:head,_=json.JSONDecoder().raw_decode(f.read(16384).lstrip()[1:])
   rows=[head]
  else:rows=json.loads((p/entry['file']).read_text())
  sh.set_column(0,len(rows[0])-1,20);sh.set_row(0,40);sh.write_row(0,0,rows[0],header)
  if entry['sheet']=='README':
   sh.set_column(0,0,24);sh.set_column(1,1,30);sh.set_column(2,2,115)
  if entry['sheet']=='Case_tasks':
   sh.set_column(1,1,55);last=len(rows)
   oz=sum(float(r[2])*float(r[3]) for r in rows[1:]);dz=sum(float(r[2])*float(r[4]) for r in rows[1:])
  for row,values in enumerate(rows[1:],1):
   excel=row+1
   sh.set_row(row,42 if entry['sheet']=='README' else 32)
   for col,value in enumerate(values):
    if entry['sheet']=='Case_tasks' and col in range(5,10):
     rca_weight=float(values[2]);om=float(values[3]);dm=float(values[4]);ov=(om*rca_weight/oz)**.5;dv=(dm*rca_weight/dz)**.5
     formula={5:f'=SUMPRODUCT(C2:C{last},D2:D{last})' if row==1 else '=$F$2',6:f'=SUMPRODUCT(C2:C{last},E2:E{last})' if row==1 else '=$G$2',7:f'=SQRT(D{excel}*C{excel}/F{excel})',8:f'=SQRT(E{excel}*C{excel}/G{excel})',9:f'=H{excel}*I{excel}'}[col]
     cached={5:oz,6:dz,7:ov,8:dv,9:ov*dv}[col]
     sh.write_formula(row,col,formula,scientific if col==9 else number,cached)
    else:sh.write(row,col,value,wrap if entry['sheet']=='README' or col==1 else number if entry['sheet']=='Case_tasks' and col in range(2,10) else None)
  print('Portable template:',entry['sheet'],len(rows)-1,flush=True)
 wb.close()
if __name__=='__main__':main(sys.argv[1])
