# Original O*NET task-list evidence review

Unit is a Task ID from the original dangerous_tasks.csv, NOT a sampled sentence. Question: is this described task evidenced as activity involved in an accident or injury narrative?

Read each assigned task and its evidence examples. Each includes original matched sentence plus the reconstructed full narrative. The original sentence can be corrupted; use the reconstructed narrative for exact quotes. You may stop examining further examples once a clear fully supported task/incident link is found, but record exactly which reports you inspected. If no clear full support, read every available example. No keyword/heuristic auto-labeling; annotations must be reasoned from the source.

Full support requires performed activity matching the essential action/object of the task description, including essential conjuncts and defining qualifications. One branch of 'or' suffices; conditional 'as necessary' need not be observed. Do not require causal proof or knowledge of statistical risk. The task must be involved in the incident: performed by the affected worker OR performed by another worker whose action directly exposes/harms the affected worker. Give actor_role explicitly. A bystander's unrelated work, general job description, intended procedures, post-event treatment/investigation, or injury outcome alone cannot establish that link. Rescue/treatment is eligible if the rescuer/carer is endangered or injured doing it, not merely because another person's injury occasioned the response.

Statuses: supported_incident_activity; partial_incident_activity; not_confirmed_in_reviewed_examples; unusable_source. NOT confirmed does not mean absent or safe. Partial means an evidenced component, with unsupported task qualifications explicit. Narrative identity_status is handled separately; review historical description even where official version differs, but never silently substitute new IDs.

Each output row: task_id (string), status, inspected_summary_nrs (list strings), evidence_summary_nr (string or ''), activity_quote (exact contiguous narrative substring or ''), incident_quote (exact contiguous narrative substring or ''), actor_role (affected_worker / other_worker_directly_involved / unclear / none), rationale (case-specific), review_type='AI task-list first pass'. Positives/partials require both quotes and evidence_summary_nr among inspected IDs. Report reconstruction ambiguity if it affects interpretation. For nonconfirmed describe what was actually observed and why the task is not established. Preserve uncertainty, do not invent evidence.

Use only provided packets and relevant sources to resolve ambiguity. Do not read other reviewers' results. No paid model APIs. Local Python may display/save/check annotations but may not generate semantic labels by rules. Work in batches and save completed rows incrementally. Never claim to have reviewed rows you have not read.

Partial evidence may retain actor_role=unclear where performed setup/activity is described but its actor is not identified; this cannot enter the fully supported release.


## Ranked packet version

For shard indices 300 onward, review `preferred_shard_N.json`: up to five nonquarantined narratives ranked by word/bigram TF-IDF within investigations already linked to the same original Task ID. This is retrieval only, not a semantic decision. Copy `packet_version: preferred` into every review row using these packets. Initial packets/annotations remain unchanged. Do not mix source versions silently. Ranking is purposive for evidence presence; support fractions are not corpus-wide accuracy estimates. If a packet has no usable narratives, record unusable_source with an empty inspected list and explicit rationale.

## Context-only performed tasks

A task can be fully performed yet only describe an earlier workflow step, rather than the activity exposing the worker in the incident. Preserve this with `incident_link_type: workflow_context_only` (direct is the default for clear incident-involved cases). Examples include notifying a supervisor, followed by a later injury while doing a different task. Two supporting reviews in this category produce `ai_confirmed_task_mention_context_only`, which is exported separately from primary incident-exposure IDs. Prefer a directly involved example if one exists. This refinement preserves actual task mentions instead of treating them as semantic false matches.

## Curated cross-task evidence

A narrative read for one task can supply evidence for another existing ID in the original list. Record the source task, investigation, full narrative and text hash in `curated_task_packets.json`; use `packet_version: curated`. Do not treat the source task's retrieval score as a target-task score. Read and quote the narrative against the target description, and obtain a separate reviewer check before admitting recovered full support. Preserve earlier judgments. Retrieval failure for one ID is not evidence that its task is absent from O*NET or from the corpus.

## Adjudication and conservative compound descriptions

A disagreement receives a third AI review followed by an explicit root resolution. `adjudication_recommendations.json` and `adjudication_resolutions.json` preserve both judgments; the original first and second reviews are never overwritten. A promoted full match requires support in both new judgments. The evidence release then cites the adjudicated example, rather than retaining an earlier ambiguous example as if it had been confirmed. The inventory retains `pre_adjudication_status`, the adjudication decision and its rationale.

This pass uses a conservative reading of essential conjunctive actions/qualifications. An explicit `or` permits an alternative; `such as` introduces examples. Compound object/method lists without that wording can be ambiguous. Task9567 (vacuuming carpet versus a description also listing other surfaces and shampooing) remains partial, while the third review recommending broader task-instance semantics is preserved. A future sensitivity pass should apply that broader interpretation consistently to all partials, not promote selected rows opportunistically. Accordingly the primary list is a conservative evidence subset, not a complete list of every task represented in the corpus.

Assigned duties or an occupation title alone do not establish actual performance. Explicitly described regular work can provide contextual evidence, but cannot establish incident involvement without a relevant activity/exposure account. Natural deaths and infections with no specified work exposure are not counted in the primary incident list merely because an employee was at work. A reported work contact with an infected or symptomatic person can document an exposure opportunity without proving where infection occurred.
