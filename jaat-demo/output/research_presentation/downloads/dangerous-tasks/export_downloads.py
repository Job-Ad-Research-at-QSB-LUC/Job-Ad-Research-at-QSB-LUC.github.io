"""Publish the existing incident-supported task release; no new classification.

Run this module directly to refresh only the dangerous-work downloads and page.
The source CSV is copied unchanged; the compact CSV/JSON select named columns.
"""
from pathlib import Path
import csv, hashlib, json, shutil
from html import escape
from bs4 import BeautifulSoup

ROOT = Path(__file__).resolve().parents[3]
SOURCE = Path('/Users/pnorlander/Downloads/TaskMatchAccidents/results/onet_list_validation')
FILES = {
 'ai_confirmed_onet30_tasks.csv': '590-task O*NET 30.0 compatibility subset: IDs, descriptions, evidence quotations and AI review decisions.',
 'ai_confirmed_onet30_ids.txt': '590 O*NET 30.0-compatible task IDs, one per line, for joining.',
 'ai_confirmed_historical_tasks.csv': '610 supported historical tasks, including 20 O*NET 30.0 identity exceptions.',
 'inventory.csv': 'All 6,060 candidate tasks and their final review decisions, including partial and unconfirmed tasks.',
 'confirmed_evidence.csv': 'Source narratives, quotations and review provenance: 610 incident-associated tasks plus 93 separately labeled context-only tasks. Context-only tasks are excluded from the primary bundle; multiple review records can refer to one task.',
 'ai_confirmed_context_only_mentions.csv': 'Contextual activities kept outside the primary incident-supported bundle.',
 'review_protocol.md': 'AI evidence-review protocol and decision rules.',
 'PROVENANCE.md': 'Source and review provenance.',
 'VALIDATION_REPORT.md': 'Review results, interpretation limits and reproduction instructions.',
 'review_summary.json': 'Machine-readable review summary.',
 'release_integrity_audit.json': 'Source release integrity checks.',
}

def install(out):
 out = Path(out)
 dest = out / 'downloads/dangerous-tasks'
 dest.mkdir(parents=True, exist_ok=True)
 for name in FILES:
  shutil.copy2(SOURCE / name, dest / name)
 rows = list(csv.DictReader((dest / 'ai_confirmed_historical_tasks.csv').open()))
 assert len(rows) == len({r['task_id'] for r in rows}) == 610
 official = {r['task_id']: r['task_text'] for r in csv.DictReader((ROOT/'crosswalks/onet_task_statements_27_2.csv').open())}
 assert all(' '.join(r['historical_description'].split()).casefold() == ' '.join(official[r['task_id']].split()).casefold() for r in rows)
 rows.sort(key=lambda r: int(r['task_id']))
 compact = [dict(task_id=r['task_id'], task_description=r['historical_description'], onet_version='27.2', evidence_status=r['semantic_status']) for r in rows]
 with (dest / 'dangerous_tasks.csv').open('w', newline='') as f:
  writer = csv.DictWriter(f, fieldnames=list(compact[0])); writer.writeheader(); writer.writerows(compact)
 (dest / 'dangerous_tasks.json').write_text(json.dumps(compact, indent=2, ensure_ascii=False)+'\n')
 shutil.copy2(Path(__file__), dest / 'export_downloads.py')
 desc = dict(FILES, **{
  'dangerous_tasks.csv':'Compact primary list: 610 rows; task_id, task_description, onet_version, evidence_status.',
  'dangerous_tasks.json':'The same 610 records as a JSON array; IDs are strings.',
  'export_downloads.py':'Code selecting the compact list from the reviewed release and building this download page. The original source-release directory is required to rerun the full exporter.'})
 desc.update({'narrative_task_counts.csv':'Pre-review task match occurrences and distinct investigation counts for the 610 IDs.', 'occupation_task_panel.csv':'Only the occupation-task frequencies displayed in the joint injury explorer.', 'OSHA_AUDIT_AND_LIMITS.txt':'Dated Codex computational audit, corrections and interpretation limits.', 'osha_source.bib':'OSHA source citation.', 'injury_sources.bib':'BLS CFOI and SOII source citations.', 'osha_run_full_analysis.py':'Original extraction/aggregation source code; historical pct_investigations uses occurrence counts, as disclosed in the audit.', 'osha_build_onet_task_inventory.py':'Deduplicate report IDs and audit task identity.', 'osha_prepare_onet_list_validation.py':'Construct original task evidence packets.', 'osha_collect_onet_list_validation.py':'Collect frozen AI review decisions; does not perform the reviews.'})
 intro = '610 O*NET 27.2 tasks with activity documented in reviewed workplace incident narratives. Membership reflects AI-reviewed evidence of activity, not injury probability or a ranking of danger.'
 readme = '# Dangerous work: task download guide\n\n'+intro+'\n\n## Start here\n\nUse dangerous_tasks.csv or dangerous_tasks.json for the task list. Join task_id to the O*NET 27.2 task inventory. task_description is the exact official description; evidence_status is ai_confirmed_incident_activity. No posting data are included.\n\n## Files\n\n'+''.join(f'- [{n}]({n}): {d}\n' for n,d in desc.items())+'\n## Interpretation\n\nThe historical_n_investigations and original_rank fields in the full review exports describe original candidate retrieval, not validated incident frequencies or danger rankings. The inventory includes unconfirmed and partial evidence; these are not members of the primary 610-task bundle. Review is AI-based, not human validation. The 610 historical positives include 19 IDs absent from O*NET 30.0 and one description mismatch. All 610 match O*NET 27.2 and remain in the compact list. The 30.0 files are compatibility subsets, not evidence exclusions.\n\n## Provenance and code\n\nSource: TaskMatchAccidents/results/onet_list_validation, source release dated September 27, 2026. Original exports are copied byte for byte. manifest.json records SHA-256 hashes. export_downloads.py builds the compact derivatives; it does not repeat the underlying AI review. See review_protocol.md and PROVENANCE.md for that procedure. Original release reports describe the 30.0 compatibility subset; this guide and the current benchmark methods document the full 610-task 27.2 bundle. This download guide and page description were generated by Codex.\n'
 (dest/'README.md').write_text(readme)
 table=''.join(f'<tr><td>{escape(r["task_id"])}</td><td>{escape(r["task_description"])}</td></tr>' for r in compact)
 links=''.join(f'<li><a href="{n}" download>{n}</a> — {escape(d)}</li>' for n,d in desc.items())
 (dest/'index.html').write_text('''<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Dangerous work · 610 task list and downloads</title><style>body{font:17px/1.55 system-ui,sans-serif;color:#172c3d;max-width:1050px;margin:auto;padding:24px}a{color:#24547c}table{border-collapse:collapse;width:100%}td,th{padding:10px;border-bottom:1px solid #ccd5dd;text-align:left}td:first-child{white-space:nowrap}input{font:inherit;padding:10px;width:100%;box-sizing:border-box}li{margin:12px 0}.primary a{display:inline-block;padding:12px 18px;margin:4px;background:#234867;color:white}summary{cursor:pointer}small{color:#526570}</style></head><body><a href="../../bundles.html#dangerous">← Dangerous work demonstration</a><h1>Dangerous work: 610 tasks</h1><p>'''+intro+'''</p><div class="primary"><a href="dangerous_tasks.csv" download>Download task list · CSV</a><a href="dangerous_tasks.json" download>Download task list · JSON</a><a href="ai_confirmed_historical_tasks.csv" download>Download tasks with evidence · CSV</a></div><p>The compact list contains task IDs, exact task descriptions, O*NET version and evidence status. <a href="README.md">File descriptions and field guide</a> · <a href="manifest.json">File hashes</a>.</p><details><summary>Evidence, all review decisions and methods</summary><ul>'''+links+'''</ul></details><h2>Browse the task list</h2><label for="filter">Find a task by ID or description</label><input id="filter" type="search" placeholder="For example: scaffolding"><p id="count" aria-live="polite">610 tasks</p><table><thead><tr><th scope="col">O*NET task ID</th><th scope="col">Task description</th></tr></thead><tbody>'''+table+'''</tbody></table><p><small>Descriptions and file guide generated by Codex. Task descriptions and review decisions are taken from the existing source release.</small></p><script>const rows=[...document.querySelectorAll('tbody tr')];document.querySelector('#filter').addEventListener('input',e=>{const q=e.target.value.toLowerCase();let n=0;rows.forEach(r=>{r.hidden=!r.textContent.toLowerCase().includes(q);if(!r.hidden)n++});document.querySelector('#count').textContent=n+' of 610 tasks'});</script></body></html>''')
 manifest = {p.name: hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(dest.iterdir()) if p.is_file() and p.name!='manifest.json'}
 (dest/'manifest.json').write_text(json.dumps({'source_release':'2026-09-27','task_count':610,'files':manifest},indent=2)+'\n')
 p=out/'bundles.html'; soup=BeautifulSoup(p.read_text(),'html.parser')
 old=soup.find(id='dangerous-downloads')
 if old:old.decompose()
 block=BeautifulSoup('''<section id="dangerous-downloads" class="launch"><h2>Get the dangerous-task list</h2><p><strong>610 tasks · O*NET 27.2.</strong> Task IDs and exact descriptions, with separate evidence and review exports.</p><p><a class="button" href="downloads/dangerous-tasks/index.html">Browse all 610 tasks</a> <a href="downloads/dangerous-tasks/dangerous_tasks.csv" download>Download CSV</a> · <a href="downloads/dangerous-tasks/dangerous_tasks.json" download>Download JSON</a></p><p><a href="downloads/dangerous-tasks/ai_confirmed_historical_tasks.csv" download>Tasks with evidence quotations and review decisions · CSV</a> · <a href="downloads/dangerous-tasks/inventory.csv" download>All 6,060 candidate decisions · CSV</a> · <a href="downloads/dangerous-tasks/README.md">File and field guide</a></p><p>Membership identifies activities documented in AI-reviewed incident evidence; it is not a danger score. Historical candidate counts in the full review files are not validated incident frequencies.</p></section>''','html.parser').section
 soup.find(id='dangerous').insert(0,block)
 for a in soup.find_all('a', href='assets/dangerous-task-review.md'):
  a['href']='downloads/dangerous-tasks/VALIDATION_REPORT.md'
 p.write_text(str(soup))
 # Preserve old incoming report links, but repair the released companion-file links.
 report=(SOURCE/'VALIDATION_REPORT.md').read_text()
 import re
 report=re.sub(r'\]\(([^)]+)\)',lambda m:'](../downloads/dangerous-tasks/'+m[1]+')' if m[1] in FILES else m[0],report)
 (out/'assets/dangerous-task-review.md').write_text(report)
 from dangerous_demo import install as install_demo
 install_demo(out)
 manifest = {p.name: hashlib.sha256(p.read_bytes()).hexdigest() for p in sorted(dest.iterdir()) if p.is_file() and p.name!='manifest.json'}
 (dest/'manifest.json').write_text(json.dumps({'source_release':'2026-09-27','task_count':610,'taxonomy':'O*NET 27.2','files':manifest},indent=2)+'\n')
 print(f'Published {len(rows)} tasks and {len(manifest)} assets; original exports unchanged.')

if __name__ == '__main__':
 install(ROOT/'output/research_presentation')
