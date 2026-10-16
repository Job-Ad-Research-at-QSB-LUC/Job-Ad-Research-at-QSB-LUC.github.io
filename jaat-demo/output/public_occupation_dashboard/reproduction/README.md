# Paper reproduction: explicit public and restricted boundaries

This package provides **real matrix-to-ranking-to-benchmark reproduction**, exact public Census crosswalk reconstruction, a portable public figure, original paper source code, and an explicitly **synthetic** posting-task worked example. No NLx posting text, job identifiers, per-posting assignments, uncensored task-frequency profiles, or survey person records are included. A synthetic run does not reproduce the paper estimates.

## Run the public pipeline

Use Python 3.13 (tested), create a virtual environment, and run from this directory:

```sh
python3 -m venv .venv
. .venv/bin/activate
python -m pip install -r requirements.txt
python sampling_example.py --output synthetic_sampling
python worked_example.py --output synthetic_results
python rebuild_crosswalks.py --output crosswalk_results
python reproduce.py --output results
python render_figure.py --output figure_results
```

`reproduce.py` rebuilds both models' benchmark-specific rankings from the released specialty matrix and published O*NET relations. It verifies all 2,720 origin/model lists against the frozen release **after constructing fresh lists**, then computes all six benchmark results from aggregate outcomes and verifies the expected summary. It never substitutes saved rankings for new rankings. Changing a model or candidate set intentionally causes a parity failure; a new model requires an explicitly versioned release and newly reviewed expectations, not disabling assertions.

`rebuild_crosswalks.py` executes the actual paper Census mapping function against the included public Census workbooks, O*NET 2010→2019 crosswalk, and frozen specialty comparison universe. It independently recreates 401 Census2010 and 325 Census2002 candidate groups. The SST and EMSI candidate memberships supplied here are frozen production inputs; their original construction code is provided under `production_source`.

`render_figure.py` verifies the released public workbook and all rendering modules against `manifest.json` before drawing the RN figure. Both `validation_replication.py` and seaborn are included. The old research updater's private-workbook hash assertion is **not removed** or overridden: this portable chain uses the public workbook directly, writes fresh input hashes, and does not reuse stale private case metadata. Publication-wide private annotations are outside this public rendering contract.

`benchmark_inputs/replicate.py` and `replicate.do` remain available for the narrower frozen-ranking arithmetic replication in Python or Stata. `reproduce.py` adds the missing matrix→fresh-ranking dependency before that calculation.

## What each layer establishes

| Layer | Inputs | Result | Scope |
|---|---|---|---|
| Synthetic posting example | 48 fabricated job-months and fabricated detected task IDs | Deduplication, weighted marginals, support/review filter, RCA vectors, group scores and survey pooling | Algorithm demonstration, **not paper estimates**; confirms vector equality with original production helper |
| Actual model fitting | Licensed occupation-task marginals plus released exclusion decisions and fixed 1,016 codes | RCA specialty matrix | Executed locally with authorized aggregates; exact matrix parity; restricted input omitted |
| Exact public crosswalk | Census spreadsheets, O*NET crosswalk, frozen eligible specialties | 401 and 325 Census groups | Executed; matches production membership |
| Actual benchmark data production | Original public SST, EMSI and survey releases (acquire separately) | 260,491 observed pairs and 1,360 denominators | Executed against original local sources; exact parity |
| Actual benchmark production | Released scores, published O*NET relations, candidate membership, aggregate observed outcomes | Fresh rankings; 1,360 dataset-origin comparisons; six summaries | Executed; exact frozen-rank parity and summary parity |
| Public RN figure | Disclosure-audited public workbook | PNG, SVG, PDF | Portable visualization of public inputs, not reconstruction of hidden task explanations |

## Posting-task construction and licensed run

The unit is a job-month. Sampling and task-incidence aggregation source is `production_source/sample_server_code/run_occupation_first_extract.py`; its connection values are placeholders. Source systems already provide task assignments. The original text-to-task detection service/model and underlying posting corpus are **not supplied here**; this repository's extraction code cannot establish detector reconstruction. Raw-text reconstruction requires the extraction models and authorized access to the posting corpus.

Model construction retains raw support at least five; drops ledger states `reviewed_not_retained` and `review_incomplete`; retains other assignments, including unreviewed ones. Across all 1,016 construction specialties, let m[o,t] be retained design-weighted incidence and p[t] its pooled task share. Coordinates are sqrt(m[o,t]/p[t]), L2 normalized by specialty. Absent pooled tasks have zero weight. Specialty similarity is their dot product. SOC/Census group scores average **all specialty-pair scores**; group vectors are not renormalized. Comparison eligibility is the fixed 912 specialties. These are retrospective benchmark comparisons, not untouched holdout tests.

With authorized aggregates, run the provided portable implementation:

```sh
python build_model.py --authorized-marginals /PRIVATE/occupation_task_marginals.csv.gz --private-output /PRIVATE/rebuilt_model
```

Required columns: `occupational_code`, `task_id`, `n_jobs_with_task`, `weighted_jobs_with_task`, unique by occupation/task. The script verifies reconstructed similarity against the released production matrix before writing output. It uses the released exclusions; absent all-zero task columns cannot change dot products. This command was run locally against authorized occupation-task marginals: maximum absolute similarity difference was 2.89 × 10⁻¹⁵. The inputs were not copied to the public package. Original source `rca_model.py` show the historical full pipeline and source paths. These original files are inspection/research-checkout sources, not independent stand-alone scripts: their additional licensed inputs, reference profiles and output directories must exist. The source archive is not a self-contained research checkout.

## Rebuild actual benchmark data from original public source files

The outcome-production stage is operational, not only source-code documentation. Once the exact source files are acquired (or supplied locally), run:

```sh
python rebuild_benchmark_data.py \
  --sst /PUBLIC_SOURCES/sst/occupation_transitions_public_data_set.csv.zip \
  --emsi /PUBLIC_SOURCES/emsi/Emsi_dataset.csv \
  --surveys /PUBLIC_SOURCES/surveys \
  --output rebuilt_benchmark_data
python reproduce.py --benchmark-data rebuilt_benchmark_data --output rebuilt_results
```

This stage was executed against the locally preserved original public releases. It reconstructs **260,491 aggregate observed occupation pairs and 1,360 dataset-origin denominators across six datasets**, matching the saved release. Original source hashes are checked before computation. Frozen `observed.csv` and `origins.csv` are read only afterward as expected-answer assertions. SST shares, EMSI original top-twenty sets, survey pooling, missing/same-endpoint exclusions, original weight denominators and 40-record support are computed from source files. The selected sources are pooled without source normalization; no respondent-level file is copied into this package. Candidate mappings remain explicit inputs, with the Census mapping separately reconstructible above.

Required survey files are `CPS-SIPP_dataset.csv`, `Trajectories_(3_years)_dataset.csv`, `Trajectories-5-years-dataset.dta`, and `Trajectories-10-years-dataset.dta`. Their hashes and exact archive URLs are provided. This rebuild starts at the **public released survey/transition data**, not the original raw survey extraction/imputation or licensed resume corpora.

## Real benchmark rules

The released O*NET 31.0 rank r becomes (21−r)/20, zero if unlisted. Group aggregation averages over every specialty-pair combination. Scores are rounded to 12 decimals for deterministic ranking, ties resolved by ascending code (numeric order for Census codes), self destinations excluded, and only positive scores returned. The matched list budget is min(20, task list length, O*NET list length), chosen without outcomes.

SST recovery sums released transition shares. EMSI recovery is recall of the original twenty ranked destinations, dividing hits by twenty even when the prediction budget is shorter. Survey recovery pools intended source pairs using supplied weights; excludes missing and same-occupation endpoints; requires at least 40 changed-endpoint **records**, not distinct respondents; and preserves unmapped destination weights in each original denominator. Headlines average origins equally. Ties remain in the denominator of the fraction with greater recovery. CPS/SIPP combines distinct move definitions; NLSY97/PSID 3/5/10-year outcomes are overlapping endpoint comparisons. Their source populations and mid-level occupation restrictions do not represent all workers.

## Released scores and exclusion decisions

`relatedness_scores.npz` is the byte-identical full 1,016×1,016 production task-similarity matrix, with arrays `codes` and `similarity`. Load with `numpy.load(..., allow_pickle=False)`. It includes self diagonals and all construction specialties; use `comparison_universe.csv` and benchmark candidate tables when reproducing evaluation. It contains aggregate similarities, not transition probabilities or task coordinates. O*NET published relations are directed and are separately included as source rows.

`excluded_task_occupation_pairs.csv.gz` contains 19,682 unique pairs: 19,674 completed nonretained reviews and 8 incomplete reviews. This is the complete excluded-state subset of a **selected 56,856-row review ledger**, not all occupation-task pairs and not a probability sample. Canonical O*NET assignments are retained upstream as `canonical_retained`; zero canonical pairs occur in this exclusion file. The source ledger contains 20 canonical pairs with at least one NO verdict; canonical membership takes precedence, so those are not excluded by review (the support threshold still applies). A judge NO is therefore not interchangeable with the production exclusion mask. Every exported pair is barred by the production review mask; some may additionally be below support five or outside a particular benchmark population. The file does not claim every pair surviving the model received two-model review.

| Field | Definition |
|---|---|
| occ8, soc_title | Assigned O*NET specialty code and public occupation title |
| task_id, task_text | Public O*NET task ID and statement; statement is taxonomy text, not a posting excerpt |
| canonical | Whether O*NET assigns this task to this occupation in the ledger |
| metadata_ready | Whether required public taxonomy metadata were available for review |
| anthropic_verdict, openai_verdict | Saved model decisions (YES/NO; missing when unavailable), not human validation |
| review_status | `reviewed_not_retained`: completed review failed unanimous YES; `review_incomplete`: review missing/incomplete and excluded |

`review_protocol.json` gives the model identifiers, expected returned versions, prompt and generation settings. `review_export.json` gives the source-ledger hash and counts. No posting support, frequency, free-text rationale, prompts populated with private records, credentials, or raw API responses are exported.

## Upstream public inputs and acquisition

`upstream_survey_sources.csv` preserves original and exact archived URLs plus SHA-256s. `upstream_provenance` preserves SST's immutable Git commit and source hashes, and EMSI's provenance gap. Optional acquisition is explicit and separate:

```sh
python fetch_upstream.py --source emsi --output /PUBLIC_SOURCES/emsi
python fetch_upstream.py --source sst --output /PUBLIC_SOURCES/sst
python fetch_upstream.py --source surveys --output /PUBLIC_SOURCES/surveys
```

These network commands were not run for this package build. They fail on hash changes and may fail if an archive is unavailable. Survey downloads exceed 250 MB and are unnecessary for public aggregate reproduction. **EMSI's original recovered archive URL/date was not retained**. To avoid making reproduction depend on that missing URL, the exact public-use occupation-pair aggregate file is included as a lossless gzip; `--source emsi` expands and verifies it locally (about71MB expanded). It contains occupational ranks and aggregate attributes, not resumes or person records. Attribution and the unresolved archive provenance are retained. The benchmark aggregate inputs are included, enabling exact downstream results despite that acquisition gap. SST/EMSI licensed resume corpora and survey upstream raw-data preprocessing are not reconstructed.

Public source locations: [SST release](https://github.com/gschubert/occ-mobility-data), [DOL Career Pathways catalog](https://www.dol.gov/agencies/oasp/evaluation/data-repo/career-pathways-da-data), [O*NET database](https://www.onetcenter.org/database.html). Original attribution and terms continue to apply; inclusion is not a new blanket license.

## Provenance, integrity, and actual verification

`source_provenance.json` records byte-identical source-file copies. `manifest.json` hashes every packaged file except itself and the download ZIP (preventing self-hash cycles). `verification.json` records completed public runs and their scope. No successful result is inferred from synthetic output. The archive excludes Python caches, private workbooks, hidden files, NLx microdata, source survey person files and API credentials. A changed input fails the manifest or parity check rather than silently leaving stale rankings in place.

## Review code and audit provenance

The original `validation_core.py`, `prepare_validation.py`, `run_pair_validation.py`, `apply_pair_reviews.py`, and tests are included under `production_source/analysis/relatedness_review_20260921`. These show targeted selection, prompt parsing, model-version checks and review reconciliation. Preparation requires the source research checkout and its reference/history files. Batch execution requires provider credentials and incurs API charges; no new LLM calls were made in this audit. Model outputs may differ on a new run even with recorded settings. Use the frozen reviewed decisions to reproduce the released model.

OpenAI Codex prepared this package and performed the computational checks on 6 October 2026. Documentation and audit conclusions are AI-generated and are not independent human validation. Original production source files retain their code/provenance; the portable wrappers are identified in the manifest. `verification.json` records the computations checked and their scope.

`sampling_example.py` calls the original server allocator on fabricated seasonal frames, including a binding annual floor and a small-occupation census. It verifies that inverse-probability expansion preserves the frame counts. Separately, the audit checked all 12,161 actual allocation cells against the original function and verified every recorded inclusion probability and design weight. The 1,015 allocation labels include 1,013 detailed codes and two diagnostic labels; they are not the 1,016-code model frame. The floor increases 186 allocations, including 135 of the 912 eligible comparison codes.
