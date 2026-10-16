# Incident-linked task bundle: provenance

TaskMatch retrieved 6,187 distinct task IDs from 111,109 OSHA narratives. Removal of 127 emergency-response IDs left 6,060 candidates for narrative-evidence review. The retained bundle contains 610 task IDs from O*NET 27.2.

OpenAI gpt-6-astra reviewed task statements against narrative evidence. Initial evidence packets contained up to five narratives per task. Inclusion required evidence that the task was performed and involved in the incident; it did not require proof that the task caused the injury. Supplemental evidence review and adjudication did not change the final 610-task bundle.

The evidence was purposively retrieved, not sampled to estimate extraction accuracy. A task-level inclusion decision does not validate every sentence matched to that ID. The corpus contains fatal and nonfatal incidents. The bundle does not estimate task-specific injury probabilities.

`review_protocol.md` preserves the review instructions as a methodological artifact, rather than instructions to readers. `confirmed_evidence.csv` identifies supporting narrative evidence; `inventory.csv` records task-level outcomes. Source task statements, narrative quotations and saved decisions are retained as recorded. File hashes are supplied in `manifest.json`.
