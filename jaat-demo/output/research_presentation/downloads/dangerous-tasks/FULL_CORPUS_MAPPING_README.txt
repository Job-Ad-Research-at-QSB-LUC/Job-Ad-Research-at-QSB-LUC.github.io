FULL OSHA NARRATIVE-TO-TASK MAPPING

full_corpus_task_matches.csv.gz: one row per original sentence-task retrieval. Fields identify investigation (summary_nr), sentence number, sentence text, retrieved task ID and label, and membership in the 610-task bundle. All 6,187 raw retrieved task IDs are included. The in_6060_review_inventory flag distinguishes the subsequent 6,060-task review inventory from the raw extraction. The 127 additional IDs were removed before the narrative-evidence review. Automated retrieval is NOT evidence that each match was validated. Membership in the 610-task bundle means that task passed narrative-evidence review somewhere in the corpus; it does not validate every occurrence. Consult confirmed_evidence.csv for reviewed evidence. Repeated matches within an investigation remain separate.

full_corpus_investigation_counts.csv.gz: all 111,109 investigation IDs, including those with zero matches. Text in the match file is sentence text, not complete narratives; use the investigation ID to locate the OSHA record.

These are OSHA-source data and contain no NLx posting records or occupation-task profiles. Original extraction uses cosine threshold 0.80. Source acquired October 18, 2025. The export matches the audited extraction hash and reproduces the existing 610-task retrieval counts exactly.

The 127 raw task IDs outside the review inventory exactly match the original responder_tasks.csv exclusion list. Thus 6,060 is the post-responder-filter review inventory, not the raw retrieval count.
