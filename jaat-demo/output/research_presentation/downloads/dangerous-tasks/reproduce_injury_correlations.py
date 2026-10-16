"""Reproduce displayed associations using only the two public CSV downloads.
Place this script beside cfoi_occupation_validation.csv and
soii_occupation_validation.csv. Requires Python, pandas and scipy.
The CSVs contain derived occupation scores, not underlying posting records.
"""
from pathlib import Path
import pandas as pd
from scipy.stats import spearmanr, pearsonr
import numpy as np
P=Path(__file__).resolve().parent
for source in ['cfoi','soii']:
    d=pd.read_csv(P/f'{source}_occupation_validation.csv')
    assert d.code.is_unique and d.rate.notna().all()
    print(source.upper(),len(d),'occupation rows')
    for score in ['posting_weighted','posting_unique','onet_unique']:
        assert d[score].between(0,1).all()
        print(score, 'Spearman', round(spearmanr(d[score],d.rate).statistic,6),
              'OLS R2 rate', round(pearsonr(d[score],d.rate).statistic**2,6),
              'OLS R2 log-rate', round(pearsonr(d[score],np.log(d.rate)).statistic**2,6))
# Optional category download reproduces each separately reported SOII result.
category_path=P/'soii_category_occupation_data.csv'
if category_path.exists():
    categories=pd.read_csv(category_path)
    expected=pd.read_csv(P/'soii_category_comparisons.csv').set_index(['table','outcome'])
    for key,g in categories.groupby('category'):
        table,outcome=key.split('|',1)
        assert g.code.is_unique
        for score in ['posting_weighted','posting_unique','onet_unique']:
            rho=spearmanr(g[score],g.rate).statistic
            assert np.isclose(rho,expected.loc[(table,outcome),score],atol=1e-12)
        assert len(g)==expected.loc[(table,outcome),'n']
    print('PASS: all',categories.category.nunique(),'SOII category comparisons reproduced.')
