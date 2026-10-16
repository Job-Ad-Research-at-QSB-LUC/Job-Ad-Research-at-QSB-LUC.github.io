APPLICATION DATA: FILE GUIDE AND PROVENANCE

These downloads expose existing public demonstration data. The file guides describe the released measurements and source records.

STEM / GREEN
The *_tasks.csv files select rows from agreement_retained in the original workbooks; *_review_decisions.csv select rows from reviewed. Columns: task_id and task_text (task identity), signal (STEM/green), in_canonical_onet (original source label), both named model verdicts, included (existing bundle decision), prompt_version. Both model verdicts are YES for retained rows. Original workbooks are unchanged. Historical aggregate columns in those workbooks are not part of the current occupational-relatedness sample.

MILITARY
military_connections.csv flattens the connection records from military_pathways.json. release_category identifies documented connections; review_status/review_note retain the existing assessment. Scores are task-profile cosine similarities, not placement probabilities. Military and SOC codes should be imported as strings. The JSON includes entries with no connection rows, source URLs and nested shared-task evidence. It is the exact navigator payload.

ALTERNATIVE REPRESENTATIONS
Linked and SkillMatch result CSVs are byte-identical expected_summary.csv exports. activity_results.csv selects task, DWA, IWA and GWA rows from that file; The current Figure 1 DWA results are provided separately in current_activity_comparison/figure_representation_summary.csv. dataset identifies the benchmark; model identifies the representation; origins counts evaluated origins; mean_k is average equal-length recommendation count; mean_capture is mean observed-transition recovery (proportion). share_* fields are proportions; mean_difference_* fields are differences in proportions (multiply by 100 for percentage points); origins_higher_* and ties_* are counts. Model keys: task=posting tasks; onet_published=published O*NET; skills/abilities=O*NET task-linked representations; task_plus_*=task-linked blends; dwa/iwa/gwa=work-activity levels; skill=direct ESCO SkillMatch; combined=task/SkillMatch blend. Evaluation samples and benchmark coverage differ by experiment. Files with different evaluation populations are separate comparisons.

CALHR
Exports derive from the explorer's gzip/base64 payload, not a rerun. Numeric doc/doc_index values are zero-based indices into docs. calhr_descriptions.csv supplies stable IDs and titles. The compressed JSON files preserve nested evidence and corresponding lookup structures. calhr_task_gaps.csv includes occurrences rather than unique statements, and preserves original quotations/scores. Gaps are not validated new concepts. Coverage is recognized source-unit overlap. Consult calhr_run_manifest.json for original settings.

CODE AND CHECKS
export_application_assets.py produces these files from the existing public pages/packages/workbooks; it requires the original workspace layout. manifest.json records source hashes, output hashes and row counts. It does not claim to rerun underlying extraction or review. Use each application's existing source and methods links for the full original procedure.
