"""Populate raw data-only OOXML sheets in an artifact-tool authored workbook.

This narrowly supplies a streaming bulk-write capability: formatting, formulas,
other sheets and workbook metadata remain the artifact-tool export unchanged.
No openpyxl/xlsxwriter/pandas Excel authoring is used. Read-only independent
verification follows in the notebook.
"""
from pathlib import Path
import sys,json,zipfile,re,xml.etree.ElementTree as ET
from xml.sax.saxutils import escape
P=Path(sys.argv[1]);ns={'m':'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}
with zipfile.ZipFile(P/'_workbook_template.xlsx') as source:
    rels={x.attrib['Id']:x.attrib['Target'] for x in ET.fromstring(source.read('xl/_rels/workbook.xml.rels'))}
    paths={}
    for s in ET.fromstring(source.read('xl/workbook.xml')).find('m:sheets',ns):
        name=s.attrib['name'];rid=s.attrib['{http://schemas.openxmlformats.org/officeDocument/2006/relationships}id']
        target=rels[rid];paths[name]=target.lstrip('/') if target.startswith('/') else 'xl/'+target
    targets={paths[name]:name for name in ['Figure_data'] if name in paths}
    with zipfile.ZipFile(P/'occupation_transitions.xlsx','w',compression=zipfile.ZIP_DEFLATED,compresslevel=6) as dest:
        for info in source.infolist():
            raw=source.read(info.filename)
            if info.filename not in targets:
                dest.writestr(info,raw);continue
            name=targets[info.filename]
            rows=json.loads((P/(name+'.json')).read_text())
            text=raw.decode(); match=re.search(r'<((?:\w+:)?sheetData)\b[^>]*>(.*?)</\1>',text,re.S)
            if not match: raise ValueError('Expected populated header sheetData in '+name)
            tag=match.group(1);prefix=tag[:-len('sheetData')]
            before=text[:match.start()];after=text[match.end():]
            last_col=chr(64+len(rows[0]))
            before=re.sub(r'(<(?:\w+:)?dimension\b[^>]*ref=")[^"]*(")',rf'\g<1>A1:{last_col}{len(rows)}\2',before)
            with dest.open(info.filename,'w') as f:
                f.write((before+'<'+tag+'>'+match.group(2)).encode())
                for r,row in enumerate(rows[1:],2):
                    pieces=[f'<{prefix}row r="{r}">']
                    for j,v in enumerate(row):
                        cell=f'{chr(65+j)}{r}'
                        if v is None:continue
                        if isinstance(v,str):pieces.append(f'<{prefix}c r="{cell}" t="inlineStr"><{prefix}is><{prefix}t>{escape(v)}</{prefix}t></{prefix}is></{prefix}c>')
                        elif isinstance(v,bool):pieces.append(f'<{prefix}c r="{cell}" t="b"><{prefix}v>{1 if v else 0}</{prefix}v></{prefix}c>')
                        elif isinstance(v,(int,float)):pieces.append(f'<{prefix}c r="{cell}"><{prefix}v>{v!r}</{prefix}v></{prefix}c>')
                        else:raise TypeError(type(v))
                    pieces.append(f'</{prefix}row>');f.write(''.join(pieces).encode())
                f.write(('</'+tag+'>'+after).encode())
            print('Streamed',name,len(rows)-1,flush=True)
print('Completed occupation_transitions.xlsx')
