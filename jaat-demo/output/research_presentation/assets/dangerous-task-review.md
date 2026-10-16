# Original O*NET task-list validation

All **6,060 original Task IDs** in `results/dangerous_tasks.csv` have received a task-level AI evidence review. Positive candidates received a second check; all **24 disagreements** received a third review and an explicit resolution. This completes the packet review and positive-confirmation stage, not an exhaustive search for unresolved tasks.

## Results

| Evidence status | Original IDs |
|---|---:|
| Confirmed activity directly involved in an incident or exposure | 610 |
| Confirmed contextual activity only | 93 |
| Partial task support | 1,588 |
| Not confirmed in inspected examples | 3,688 |
| Unusable or missing source evidence | 81 |
| **Total reviewed** | **6,060** |

The primary current-version release contains **590 exact O*NET 30.0 IDs/descriptions**. The other 20 directly supported historical tasks remain separate: 19 IDs are absent from the pinned inventory and one has a description mismatch. They are not silently converted to new IDs.

- [Current O*NET IDs for joining](../downloads/dangerous-tasks/ai_confirmed_onet30_ids.txt)
- [Current IDs, descriptions and evidence excerpts](../downloads/dangerous-tasks/ai_confirmed_onet30_tasks.csv)
- [All 610 supported historical tasks](../downloads/dangerous-tasks/ai_confirmed_historical_tasks.csv)
- [All 6,060 IDs and decisions](../downloads/dangerous-tasks/inventory.csv)
- [Full narratives, quotations and review provenance](../downloads/dangerous-tasks/confirmed_evidence.csv)
- [Contextual activity mentions](../downloads/dangerous-tasks/ai_confirmed_context_only_mentions.csv)

Examples in the current-ID release include coordinating truck dumping (4800), sawing felled trees into lengths (9821), erecting scaffolding (13615), operating equipment such as forklifts (23899), digging trenches (13711), bathing patients (20577), and collecting animal or crop samples (20530). These illustrate documented activity, not a ranking of danger.

## What was validated

The original permissive TaskMatch threshold was preserved as a candidate generator. Each ID was checked against source narratives for a performed action matching the task and its incident connection. The injured worker can perform the task, or another worker can perform an action directly involving the injured worker. Every positive or partial decision has exact activity and incident quotations, a source investigation and a case-specific rationale. Contextual mentions stay outside the primary release.

Reviewers inspected **19,328 distinct task–report pairs spanning 14,741 source records**, including unusable records. The 610 direct task IDs have **601 distinct cited investigations** in the final evidence export; one narrative can support multiple tasks. These are purposive review counts, not random-sample denominators.

Initial packets used up to five first-available linked investigations for the first 900 IDs. Later packets ranked up to five already-linked, usable narratives by local TF-IDF. Fifty-seven unresolved IDs received supplemental review; four received independently checked cross-task evidence recovery. Unequal retrieval opportunities mean the category counts are descriptive results of this audit, not estimates of overall TaskMatch accuracy or O*NET coverage.

## Interpretation for occupational exposure measures

This is a **narrative-evidence measure of activity occurrence in reported incidents**, rather than a rating of how dangerous an occupation seems. Semantic matching still involves AI judgment. Shared-family reviewers can make correlated errors, and root confirmation/adjudication was unblinded to proposed evidence. This is not human validation.

Presence establishes neither causation nor comparative injury/fatality risk. An accident can occur during an activity without being caused by it. COVID cases enter the direct tier when the report describes a relevant exposure opportunity; that does not prove the infection source. Natural deaths and infections without a specified work exposure remain context-only when an activity is documented. Post-event medical care or investigation alone does not establish that task as an exposed activity.

The original historical investigation counts remain unvalidated candidate frequencies. Do not reuse them as confirmed task-incident counts. No exposure denominator, injury rate, occupation prevalence or general-population risk estimate has been calculated.

The **1,588 partial matches retain substantive activity evidence**. Some lack important qualifications; others reflect conservative interpretation of compound task descriptions.  The third-review recommendation for task 9567 illustrates this measurement choice and is preserved despite the conservative final partial label.

A negative packet decision means **not established by the inspected evidence**. It does not mean the task is safe, absent from other narratives, or missing from O*NET. Source defects also prevented validation of 81 IDs; this says nothing about their underlying danger.

## Next stage, in the requested order

1. Use the 590 exact current IDs for the separate occupation/job-postings join. Reconcile the 20 historical identity exceptions explicitly.
2. Expand retrieval for partial and unconfirmed original IDs, and apply a documented task-instance sensitivity rule. Recover missed existing O*NET tasks before claiming taxonomy gaps.
3. Extract worker-activity descriptions from residual narratives and search the full O*NET inventory. Separate retrieval failures, underspecified accounts and genuinely absent activity concepts.
4. Then review provisional/alternative TaxonomyBuilder IDs, retaining source passages, nearest existing O*NET alternatives and reasons those alternatives fail.

No new TaxonomyBuilder construction or separately billed inference API calls were used in this stage. Results remain local; online publication has not been performed.

## Reproduction and audit

Run `python3 collect_onet_list_validation.py` from the project root to rebuild the releases. The collector validates IDs, source membership, quotations, complete packet inspection for partial/negative decisions and adjudication eligibility. The full local suite passes **54 tests**. Original input files are unchanged.

Read the [protocol](../downloads/dangerous-tasks/review_protocol.md), [provenance](../downloads/dangerous-tasks/PROVENANCE.md), [review manifest](../downloads/dangerous-tasks/review_summary.json), and [integrity audit](../downloads/dangerous-tasks/release_integrity_audit.json). First/second reviews, third-review recommendations and final resolutions remain separate. Adjudicated releases cite the resolved evidence instead of treating an earlier ambiguous example as confirmed.

Narrative hashes inherit the corpus convention: SHA-256 of lowercased, whitespace-collapsed text; empty text has an empty hash. File hashes are byte-level. Both conventions were checked against their respective inputs. The evidence export distinguishes each review's raw incident-link tier from the final released tier and retains curated discovery provenance.
