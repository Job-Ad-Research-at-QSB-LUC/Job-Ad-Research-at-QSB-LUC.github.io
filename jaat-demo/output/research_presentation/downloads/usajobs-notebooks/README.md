# USAJOBS: coded postings to occupational relatedness

Three worked notebooks, using the previously analyzed full USAJOBS corpus:

1. **01_jaat_records_to_occupation_task_profiles.ipynb** — check saved JAAT codes, deduplicate task retrievals within postings, count occupation–task incidences, inspect support and prevalence, and export profiles.
2. **02_profiles_to_relatedness.ipynb** — calculate the corpus RCA reference, retain supported links, normalize square-root RCA, inspect RN–medical manager shared-task contributions, and rank related occupations.

3. **03_relatedness_to_figure2.ipynb** — reproduce the paper’s benchmark results as a control, evaluate USAJOBS with the same ranking and benchmark functions, and render a USAJOBS version of Figure 1.

## Run

Use Python 3.13 (the tested version), install `requirements.txt`, and open the notebooks with your preferred Jupyter client. Run cells in order from this directory. A Jupyter interface is not included in the requirements; the execution dependencies are.

Run `pip install -r requirements.txt` in your notebook environment. The configuration cell downloads pinned public [coded postings](https://huggingface.co/datasets/loyoladatamining/usajobs_coded) and [date metadata](https://huggingface.co/datasets/loyoladatamining/usajobs_html_metadata) if the input folders are absent (about 0.85 GB). No Hugging Face account or token is needed. Extract the complete notebook package first; it includes `download_public_inputs.py` and reference data. You can instead set `INPUT` and `META` to existing monthly folders. Notebook 2 includes aggregate inputs and runs independently.

The coded dataset is pinned to `2ac18625eec954234e1b838907ef05f3961dd4bd`; metadata to `b3cd0a88da23b2f5a7b0aef6303abe3fc3704640`. Downloads are anonymous and verified against public file hashes. No raw-text download is required. The run manifest fingerprints both inputs. Public dates produce 17,348 end-before-start records versus 10,674 in the historical local input; this diagnostic difference does not change the profiles.

Notebook 2 runs independently from the compact aggregate counts in `data/`, or uses matching outputs from Notebook 1 when present. It needs no raw postings and no model download. All three notebooks have saved outputs for review on GitHub.

## Inputs and choices

- 3,089,366 distinct posting IDs; start dates January 2017–March 2026. Coverage refers to the assembled corpus, not all federal hiring.
- One supplied TitleMatch assignment per posting. TaskMatch outputs are semicolon-delimited task IDs. No additional title-score filter.
- All supplied postings; weight 1. Notebook 1 contains a commented explanation of inverse-probability weighting for a genuinely sampled alternative.
- Task counts are unique posting–task pairs. Taskless postings remain in posting-prevalence denominators. Distinct posting IDs are required.
- O*NET task dictionary 27.2; occupation-code eligibility 31.0, matching the existing USAJOBS analysis. Invalid IDs/codes are reported and excluded from profile construction. These two versions are intentional, not an assertion that all inputs use one release.
- At least five postings per retained occupation–task link. The default corpus reference uses retained incidences after support filtering, matching the paper. No RCA ≥ 1 cutoff. The supplied NLx occupation–task exclusion list is applied before recomputing RCA; unreviewed links remain. This transfers pair exclusions, not a new independent review of USAJOBS postings.
- RCA uses task-incidence shares, not posting prevalence; square-root transformation followed by unit L2 normalization.
- Detailed RN and manager occupations are 29-1141.00 and 11-9111.00. The six-digit calculation uses the equal mean of specialty-pair similarities for the six-digit groups.
- At least 200 postings for destinations in the displayed ranking; this does not change the reference or fitted vectors.
- Exact extraction model revisions and raw-text inference were not independently reconstructed. These notebooks reproduce coded records → results, not raw text → historical codes.

O*NET source archives: https://www.onetcenter.org/db_releases.html . O*NET attribution/license information: https://www.onetcenter.org/license_db.html . `tasks.csv` is the project’s 27.2 task dictionary; `occupations.csv` is its 31.0 occupation list. File fingerprints are in `data/SHA256.json`.

## Verification and review

`verification.json` records execution of all three notebooks, agreement of the default model with the unchanged paper representation function, and agreement of the optional earlier reference setting with the prior USAJOBS analysis. Notebook 3 independently reconstructs and verifies the paper’s frozen rankings and all six summaries before calculating USAJOBS results. These checks do not validate extraction accuracy.

The code and explanatory text were prepared with Codex. These comparisons evaluate alignment with historical transitions, not performance on an untouched holdout sample.

This package is separate from the NLx paper replication and does not contain NLx data. No additional license for contributed code is granted by this package. Source data remain governed by their source terms.

## Figure 1 replication and included inputs

`paper_code_and_inputs/` contains the actual paper ranking/evaluation functions, original renderer, published O*NET 31.0 related-occupation lists, fixed paper candidate mappings, aggregate observed transitions, expected paper results, public RN workbook and the released NLx similarity matrix. File hashes attest that this subset is copied unchanged. No underlying NLx records or task profiles are included. The original paper README in that subdirectory describes the broader release; commands for files outside this deliberately selected subset are not supplied here. Use Notebook 3 for the included workflow.

`usajobs_figure_rendering.py` renders the USAJOBS worked figure. Panels G–H show SST and EMSI; Panel H also summarizes unique occupations across those benchmarks. Benchmarks and scores are recalculated from USAJOBS profiles.

USAJOBS benchmark candidate groups intersect the paper’s eligible specialties with USAJOBS occupations having at least 200 postings and nonempty vectors. Partial group membership is explicit in `results/figure2_usajobs/candidate_memberships.csv`; all original outcome denominator mass is preserved. Both models use the identical revised groups. Population differences mean headline percentages cannot be interpreted as a like-for-like improvement over the NLx estimates.

The figure displays SST and EMSI. Tables report all six benchmarks. The analysis uses a different corpus and does not reproduce the NLx numerical results.

To trace benchmark source construction, consult `paper_code_and_inputs/source_provenance.json` and the included original paper README. The notebook begins with aggregate benchmark releases; it does not reconstruct raw survey extraction or resume histories. Source provenance paths may refer to the broader paper release.

## Saved USAJOBS Figure 1 results

With both occupation-task filters, mean recovery is 12.40% versus 11.38% in SST (428 origins) and 19.18% versus 18.85% in EMSI (261 origins), comparing USAJOBS posting tasks with O*NET lists. Across the six equal-length benchmarks, USAJOBS exceeds O*NET in SST, EMSI and the ten-year trajectory comparison; it is lower in CPS–SIPP and the three- and five-year comparisons. The released summary CSV reports all results.

`preview/` contains the generated figure PDF/PNG and results tables. Re-running Notebook 3 writes fresh results under `results/figure2_usajobs/`. No dashboard or existing paper release is changed.

## Production alignment (15 October 2026)
Notebook 2 applies `data/occupation_task_exclusions.csv`, the same rejected/incomplete detailed occupation-task pairs removed in the NLx production model. Unreviewed pairs remain. RCA is recalculated after exclusion and minimum support. These are transferred pair-level decisions, not new USAJOBS LLM judgments. Notebook 3 independently checks the vectors using the paper function and reports all six benchmarks; G–H show SST and EMSI with a unique SOC6 total. Federal coverage, corpus dates, unit weights and unique-posting units remain distinct from NLx.

## Work-activity comparison

The figure includes task-level profiles and profiles formed by dividing each task incidence equally among its linked detailed work activities (DWAs). Both representations recalculate RCA and cosine similarity. Current results are in `figure_representation_summary.csv`; the code uses `aggregation_comparison.py`. The activity count and coverage are recorded in the generated outputs. The figure does not display random task groupings.
