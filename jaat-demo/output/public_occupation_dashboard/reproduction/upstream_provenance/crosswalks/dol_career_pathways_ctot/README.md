# DOL Career Pathways / CTOT: recovered and analyzed

The user recovered `Emsi_dataset.csv` and `Dashboard_transitions_dataset.csv` using the Wayback Machine on 2026-09-22. Original catalog: https://www.dol.gov/agencies/oasp/evaluation/data-repo/career-pathways-da-data . The original URLs had failed; the supplied archives now allow analysis. Exact archived snapshot URLs/dates were not retained locally. `intake.json` records local hashes and sizes; original CSVs are unchanged.

## Verified contents

- Full Emsi: 256,831 directed pairs, 458 origins, 781 destinations, 28 variables. Exact codebook dimensions; no duplicate or self-pairs; contiguous within-origin ranks.
- Dashboard: 14,198 rows and 13 variables. Its 458 rank-31 “All other occupations” rows have no destination code. Removing those leaves 13,740 named pairs, all present in full Emsi.
- These files contain destination frequency ranks, not pair counts or probabilities. Repeated origin percentages and occupational median wage differences cannot substitute for missing transition shares.
- The supplied extra `Dashboard_trajectories` codebook describes a different dataset. The matching `Dashboard_transitions_Codebook.xlsx` was already downloaded and used here.

## Issues retained explicitly

The files do not have identical rankings: 1,453 named pairs differ across 220 origins, and 59 origins have different top-30 sets. The cause is unresolved. Full Emsi is primary; dashboard is a sensitivity check, not a second independent sample. Headline results barely change.

Several codes represent combined OES occupations rather than current detailed SOC6 categories. The strict analysis includes 429 origins and 697 destinations; 23 source origins lack an exact current match and six are outside the fixed eligible project population. No arbitrary splitting is performed.

## Results

[Verified comparison, figures, case examples and caveats](../../analysis/relatedness_refresh_20260922/transition_validation/dol/index.html) · [Codebook](../../analysis/relatedness_refresh_20260922/transition_validation/dol/CODEBOOK.md) · [Independent checks](../../analysis/relatedness_refresh_20260922/transition_validation/dol/verification.json).

At 20 recommendations, task-based maps recover 28.2% of DOL's original frequent destinations, DWA 27.5%, IWA 23.6%, technology 13.1%, and O*NET quantitative relatedness 18.3%. A frequent-destination baseline trained on other origin families recovers 52.4%. These are equal-origin fractions of distinct destinations, not shares of transitions or workers. The dashboard uses the same recommendation lists and reaches essentially the same result.
