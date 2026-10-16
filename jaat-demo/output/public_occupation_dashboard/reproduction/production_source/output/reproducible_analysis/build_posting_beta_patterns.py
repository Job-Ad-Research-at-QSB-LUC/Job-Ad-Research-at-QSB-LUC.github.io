#!/usr/bin/env python3
"""Build exact posting beta-pattern counts from released bundle signatures."""
from pathlib import Path
import json

import pandas as pd


ROOT = next(p for p in [Path.cwd(), *Path.cwd().parents]
            if (p / "data/release/manifest.json").exists())
OUT = ROOT / "output/reproducible_analysis"
manifest = json.loads((ROOT / "data/release/manifest.json").read_text())
months = manifest["config"]["months"]
bundle = pd.concat([
    pd.read_csv(ROOT / f"data/release/bundle_signatures_{month}.csv.gz")
    for month in months
], ignore_index=True)

assert bundle.n_rated.eq(bundle.n_beta0 + bundle.n_beta05 + bundle.n_beta1).all()
assert bundle.n_tasks.eq(bundle.n_rated + bundle.n_unrated).all()

has0 = bundle.n_beta0.gt(0)
has05 = bundle.n_beta05.gt(0)
has1 = bundle.n_beta1.gt(0)
rated = bundle.n_rated.gt(0)

patterns = [
    ("no_rated_task", ~rated, "No task with an available beta rating"),
    ("beta0_only", has0 & ~has05 & ~has1, "At least one beta 0 task and no beta 0.5 or 1 task"),
    ("beta05_only", ~has0 & has05 & ~has1, "At least one beta 0.5 task and no beta 0 or 1 task"),
    ("beta1_only", ~has0 & ~has05 & has1, "At least one beta 1 task and no beta 0 or 0.5 task"),
    ("beta0_beta05_only", has0 & has05 & ~has1, "Beta 0 and 0.5 tasks, but no beta 1 task"),
    ("beta0_beta1_only", has0 & ~has05 & has1, "Beta 0 and 1 tasks, but no beta 0.5 task"),
    ("beta05_beta1_only", ~has0 & has05 & has1, "Beta 0.5 and 1 tasks, but no beta 0 task"),
    ("all_three", has0 & has05 & has1, "At least one task in each beta class"),
]
inclusive = [
    ("any_beta0", has0, "At least one beta 0 task; other classes may also occur"),
    ("any_beta05", has05, "At least one beta 0.5 task; other classes may also occur"),
    ("any_beta1", has1, "At least one beta 1 task; other classes may also occur"),
    ("any_beta0_and_beta05", has0 & has05, "At least one beta 0 and one beta 0.5 task; beta 1 may also occur"),
    ("any_beta0_and_beta1", has0 & has1, "At least one beta 0 and one beta 1 task; beta 0.5 may also occur"),
    ("any_beta05_and_beta1", has05 & has1, "At least one beta 0.5 and one beta 1 task; beta 0 may also occur"),
]

raw_total = bundle.n_jobs.sum()
weighted_total = bundle.weighted_jobs.sum()
rows = []
for group, definitions in [("mutually_exclusive", patterns), ("inclusive", inclusive)]:
    for order, (name, condition, definition) in enumerate(definitions, 1):
        raw = bundle.loc[condition, "n_jobs"].sum()
        weighted = bundle.loc[condition, "weighted_jobs"].sum()
        rows.append({
            "group": group,
            "display_order": order,
            "pattern": name,
            "definition": definition,
            "raw_sample_postings": int(raw),
            "raw_sample_share": raw / raw_total,
            "design_weighted_postings": weighted,
            "design_weighted_share": weighted / weighted_total,
            "raw_posting_denominator": int(raw_total),
            "design_weighted_posting_denominator": weighted_total,
            "source": "bundle_signatures_YYYY-MM.csv.gz",
        })

result = pd.DataFrame(rows)
exclusive = result[result.group.eq("mutually_exclusive")]
assert exclusive.raw_sample_postings.sum() == raw_total
assert abs(exclusive.design_weighted_postings.sum() - weighted_total) < 1e-6
assert abs(exclusive.raw_sample_share.sum() - 1) < 1e-12
assert abs(exclusive.design_weighted_share.sum() - 1) < 1e-12

result.to_csv(OUT / "posting_beta_pattern_summary.csv", index=False)
exclusive.to_csv(OUT / "posting_beta_patterns_mutually_exclusive.csv", index=False)
result[result.group.eq("inclusive")].to_csv(OUT / "posting_beta_patterns_inclusive.csv", index=False)
print(result.to_string(index=False))
