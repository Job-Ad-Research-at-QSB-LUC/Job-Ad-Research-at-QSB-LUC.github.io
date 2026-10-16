# Occupation-first aggregate release

Window: October 2024–September 2025, all twelve months. A job-month is the unit.
All CSV files contain aggregates, never job IDs. Do not download server_only.
Completion requires COMPLETE.json and matching manifest checksums.

## Design and denominators

Annual occupation sample target = min(N, max(ceil(.10 N), 200)); small occupations are censuses.
Observed months receive at least one draw; remaining draws are allocated proportionally to remaining capacity.
Within each occupation-month the seeded hash order selects exactly n of N jobs, without replacement.
sampling_allocation.csv records N, n, pi=n/N, and design_weight=N/n.
Monthly source tables must remain unchanged while the run/checkpoint is used. A changed source
requires a fresh output directory and table prefix; a checkpoint is not a source snapshot.
There is NO industry eligibility floor. Missing/conflicting sectors are UN; ambiguous/missing occupations
are explicit diagnostic categories. Actual O*NET comparison eligibility requires a valid matching code.
All annual estimates include January. Counts below 200 remain available but are flagged low support.

## Files / field-level codebook

source_frame_YYYY-MM.csv: occupation x sector counts BEFORE sampling. frame_jobs is the true frame size,
source_task_rows counts all source rows attached to valid job IDs (including NULL-task rows),
jobs_without_nonempty_task_row counts jobs without a nonempty task field, title_conflict_jobs and
sector_conflict_jobs count conflicting nonempty source assignments. old_monthly_industry_rule_eligible
is a diagnostic of the former >=200 occupation-sector-month rule, not a filter. Null job-ID source
row counts are in manifest.json. These are source-frame diagnostics, not all vacancies in the economy.
Conflicting occupation/sector assignments now receive explicit diagnostic codes rather than taking
an arbitrary MAX value. The former-rule diagnostic applies that rule to this new, audited frame;
it is not an exact reconstruction of the former conflict-resolution implementation.

sampling_allocation.csv: occupation x month; frame_jobs and sample_jobs define the exact draw;
annual_frame_jobs and annual_sample_jobs repeat occupation annual totals, so never sum those across months.
annual_support_ge200 means annual sampled job count is at least 200, not a claim of adequate precision.

occupation_sector_summary_YYYY-MM.csv.gz: n_jobs=sampled job-months in cell; weighted_jobs=sum(1/pi).
n_no_tasks / weighted_no_tasks count jobs with no valid task IDs, including null LEFT JOIN rows.
n_rated_jobs / weighted_rated_jobs count jobs with >=1 rated task. Sector denominators are complete,
including jobs without tasks. Pooled weighted sector denominators are domain estimates, not exact source counts.

task_incidence_YYYY-MM.csv.gz: one occupation x sector x task_id row; n_jobs_with_task counts distinct
sampled jobs containing the task, weighted_jobs_with_task sums their design weights. Do not treat the sum
across tasks as unique jobs. Every task is retained regardless of rating or canonical occupation.

bundle_signatures_YYYY-MM.csv.gz: one occupation x sector x signature; n_tasks is distinct task IDs,
n_rated+n_unrated=n_tasks, and n_beta0+n_beta05+n_beta1=n_rated. n_jobs counts jobs with this exact
signature; weighted_jobs sums weights. n_tasks=0 jobs have undefined task means; never assign mean zero.
Unknown labels are not beta=0. Fully unrated nonempty jobs are distinct from empty jobs.

occupation_totals.csv: full annual sample and design-weight totals, including taskless jobs.
occupation_task_marginals.csv.gz: annual occurrence counts and weighted counts; network_core_node=1
for each case's top 30 design-weighted task marginals, selected without regard to exposure labels.

occupation_pairs_support50.csv.gz: annual unordered distinct task pairs with raw support >=50;
global_pairs_support500.csv.gz: annual pairs across all occupations with raw support >=500.
n_jobs_pair is number of sampled job-months containing both tasks; weighted_jobs_pair=sum(1/pi).
No self-pairs or mirrored rows. All twelve months are pooled BEFORE selecting support.
Full sparse tables for every positive pair remain in server_only. A missing released edge is not a zero.
No sigmoid replaces the raw counts. Occupation joint probability is pair count / occupation total;
P(b|a) is pair count / task-a marginal. Weighted versions use corresponding weighted quantities.
Sector ratios use weighted sampled domain denominators, so pair probabilities remain bounded by one.

case_core_pairs_complete.csv: all unordered pairs, including zeros, among the selected case core nodes.
case_core_sector_pairs_complete.csv.gz: same complete grids for every sampled sector in those cases.
The selected vocabulary limits the graph, not the completeness of its pair supports. No omission of
unselected months. Full industry task marginals remain in the monthly task files.

All files use occupational_code (exact title-assigned O*NET code), sector2 (source NAICS2 or UN),
sample_month (YYYY-MM), and task IDs (positive integers). Unknown occupation categories start with __.
Pair support counts are sampled support, not employment. Design weights target the EXT frame,
not incumbent workers. OEWS employment weights are a separate analytical choice.
