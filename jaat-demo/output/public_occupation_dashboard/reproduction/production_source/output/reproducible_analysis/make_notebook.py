"""Generate the canonical executable notebook; edit notebook_source.json to change it."""
from pathlib import Path
import json
import nbformat

def generate():
    here=Path(__file__).resolve().parent
    source=json.loads((here/'notebook_source.json').read_text())
    cells=[]
    for row in source['cells']:
        make=nbformat.v4.new_code_cell if row['cell_type']=='code' else nbformat.v4.new_markdown_cell
        cells.append(make(source=row['source'],metadata=row['metadata'],id=row['id']))
    return nbformat.v4.new_notebook(cells=cells,metadata=source['metadata'])

if __name__=='__main__':
    destination=Path(__file__).with_name('occupation_transition_analysis.ipynb')
    nbformat.write(generate(),destination)
    print(destination)
