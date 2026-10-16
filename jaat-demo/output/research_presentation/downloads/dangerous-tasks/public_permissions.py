"""Reuse the occupation explorer's established identity-disclosure policy.
Only keep lightweight fields in memory; no private aggregates are exported.
"""
from pathlib import Path
import sys
R=Path(__file__).resolve().parents[2]
sys.path.insert(0,str(R/'analysis/dashboard_release'))
from build_public import SOURCE,read_js,coordinated_allowed
def permissions():
    catalog=read_js(SOURCE/'occupation_network_data/catalog.js');profiles={}
    for o in catalog['occupations']:
        code=o['code'];p=SOURCE/f'occupation_network_data/occupations/{code}.js'
        raw=read_js(p) if p.exists() else {'code':code,'marginals':[]}
        profiles[code]={k:raw[k] for k in ['code','marginals','review_status'] if k in raw}
    return coordinated_allowed(profiles,catalog['tasks'])
