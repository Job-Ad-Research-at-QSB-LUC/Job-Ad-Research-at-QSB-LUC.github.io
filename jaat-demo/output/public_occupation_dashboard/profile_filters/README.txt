PROFILE FILTER COMPARISON
Exploratory sensitivity, October 12, 2026.
current: support >=5 job-months; noncanonical rejected/incomplete reviews excluded; unreviewed and canonical links remain.
no_review: support >=5; no review exclusions.
all_links: support >=1; no review exclusions.
Same input sample, design weights, candidates, origins, and recommendation lengths in all relatedness variants. RCA is recomputed over all construction profiles for each variant; square-root RCA and unit L2 normalization are unchanged.
The injury bundle remains the same 610 evidence-reviewed tasks. Injury weighted scores are bundle incidences divided by all profile incidences, not RCA. Distinct-task scores count each task once. Published outcome samples and O*NET comparators remain fixed.
summary.csv: relatedness values are proportions (multiply by 100 for percentages); injury values are Spearman correlations. injury_scores.csv contains only aggregate scores for displayed occupational groups, not occupation-task profiles.
The baseline matrix, every baseline origin recovery, and baseline injury scores are asserted against the existing release before export. build.py uses the research-project directory layout and requires restricted aggregate NLx inputs; it is not standalone replication from public data. No underlying profiles are included.
Prepared using Codex; selection of sensitivities followed inspection of benchmark results.
