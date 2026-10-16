# Reproduce equal-length occupational-relatedness validation

This package recalculates the headline validation from frozen model predictions and occupation-level benchmark outcomes. It needs no private task profiles, postings, or person-level survey records. It does not reconstruct model training, RCA profiles, candidate crosswalks, or rankings.

## Run Python

Install pandas (`python -m pip install pandas`), then:

```
python replicate.py . results
```

## Run Stata

Open Stata, set the working directory to the extracted package, and run:

```
do replicate.do
```

Stata 17 or later; no add-ons required. Both scripts retain the original up-to-20 comparison as a diagnostic and verify the calculated results against `expected_summary.csv` only AFTER computing them.

## Inputs

- `rankings.csv`: dataset, origin, model, destination, rank. The first 20 positive-score destinations from the audited benchmark-specific candidate population. Codes are strings, not interchangeable across benchmarks. Model order and all upstream mapping choices are frozen.
- `observed.csv`: dataset, origin, destination, mass. SST mass is the released transition share. EMSI mass is 1/20 for each original observed top-20 destination. Survey mass is the sum of supplied transition weights for that occupation pair.
- `origins.csv`: dataset, benchmark label, eligible origin, denominator. SST and EMSI denominator is 1 because their input mass is already a share. Survey denominator is ALL retained change weight for that origin, including destinations outside the mapped candidate population. Survey origin eligibility requires at least 40 valid change records and the fixed mapping.
- `manifest.json`: input hashes and upstream provenance.
- `expected_summary.csv`: previously verified results, used only for checks.

## Calculation

For each origin, compute k = min(20, task returned, published O*NET returned). Keep the first k destinations from EACH model. The cutoff uses no outcomes. Sum their observed mass and divide by the original denominator. Missing observed destinations contribute zero; no mapped-population renormalization. Average equally across origins. Differences greater than 1e-12 count as more recovery; absolute differences at most 1e-12 count as ties. Ties remain in the origin-share denominator. Zero-common-length cases are excluded from equal-length results and counted separately.

EMSI is ranked-destination recovery, not weighted transition-share capture. NLSY97 + PSID horizons overlap; they are not independent replications. The paper's primary figure uses SST, EMSI, CPS + SIPP, and the three-year trajectory horizon; five- and ten-year results are also included.

## Outputs and review

Python writes `summary.csv`, `by_origin.csv`, and `recommendation_audit.csv`. Stata writes equivalent headline and per-origin files plus `.dta` audit tables and a log. Inspect a destination's rank, common cutoff, observed mass and inclusion flag to follow its contribution to the final result.

The research notebook builds these aggregate inputs from the source benchmark releases and frozen rankings in Step 4.1, then exports them into the five `Validation_*` workbook sheets. Its full source-data workflow still needs the research checkout. The public package reproduces the validation stage without those broader dependencies.

Source benchmarks: Schubert, Stansbury and Taska occupational-transition release (https://github.com/gschubert/occ-mobility-data); U.S. Department of Labor Career Pathways data repository (https://www.dol.gov/agencies/oasp/evaluation/data-repo/career-pathways-da-data). Published O*NET related occupations use the frozen O*NET 31.0 list. See the companion methods page for population, mapping, and model construction details.
