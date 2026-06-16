"""Shared-`m` occupation relatedness compute layer.

Core measure
-----------
For each occupation j and entity s observed in NLX postings within a
month-window, define the RCA-screened, volume-supported evidence:

    e_m(j, s) = share_postings_with_s_in_j
                if  RCA(j, s) >= RCA_THRESHOLD
                and mentions(j, s) >= MIN_MENTIONS
              = 0  otherwise

then the shared-`m` occupation relatedness:

    rho_m(j, j') = sum_s e(j, s) * e(j', s)
                 / max(sum_s e(j, s), sum_s e(j', s))

is symmetric, in [0, 1], and conservative (the max-denominator means
relatedness is measured against the more skill-rich of the two
occupations, so a small occupation can't 'inherit' relatedness to a
large one just by having all its skills be a subset).

What's here:
    pool_per_occ_in_window  - aggregate per-occ data over a month set
    compute_e_matrix        - apply the RCA + mentions screen
    compute_relatedness     - top-K-per-occ rho pairs
    canonical_to_chords     - convert RCA-pass pairs to the
                              chord-network (occ -> canonical-home) format
                              the existing timelapse renderer expects.

All callers (network_relatedness.py headline figures, the timelapse
frame generator, etc.) build on these.
"""
from __future__ import annotations

import csv
from collections import defaultdict
from pathlib import Path as PPath


RCA_THRESHOLD       = 1.0
MIN_MENTIONS        = 50
TOP_K_PER_OCC       = 8

# AIMatch v5 task-level filter crosswalk
AIMATCH_CSV = (PPath(__file__).resolve().parent.parent.parent
               / "usajobs_lmi_codex_public_dashboard"
               / "crosswalks" / "ai_a6_5_redacted_final2.csv")


def load_aimatch_codes(strictness: str) -> set[str]:
    """AIMatch v5 task-level filter. Returns the set of ai_codes
    ('A6.J.6.g.15849' format) whose AIMatch score is > 0 by the
    requested filter. lenient is a superset of strict.

      strictness = "strict"  -> codes with strict_score > 0   (~1,322)
      strictness = "lenient" -> codes with lenient_score > 0  (~6,217)
    """
    col = "strict_score" if strictness == "strict" else "lenient_score"
    out: set[str] = set()
    with AIMATCH_CSV.open() as f:
        for r in csv.DictReader(f):
            code = r.get("Code") or ""
            if not code:
                continue
            try:
                s = float(r[col])
            except (KeyError, TypeError, ValueError):
                continue
            if s > 0:
                out.add(code)
    return out


# ---------------------------------------------------------------------------
# Pool per-occ data inside a month-window
# ---------------------------------------------------------------------------
def pool_per_occ_in_window(tsv_path: PPath, entity_col: str,
                           months_in_window: set[str] | None = None,
                           num_jobs_source: PPath | None = None):
    """Single pass(es) over the per-occ TSV, restricted to `months_in_window`
    if provided. Returns:

      occ_entity_jobs : {(occ8, entity) -> sum task_num_jobs}
      occ_total_jobs  : {occ8 -> sum num_jobs over distinct months}
      natl_entity_jobs: {entity -> sum task_num_jobs}
      natl_total      : sum num_jobs over distinct (occ, month)

    If `num_jobs_source` is given, num_jobs comes from that TSV (used for
    Work Activities, whose per-occ TSV lacks a num_jobs column)."""
    num_jobs_col = ("skill_num_jobs" if entity_col == "skill"
                    else "task_num_jobs"
                    if entity_col != "element_id" else "wa_task_count")
    occ_entity_jobs: dict[tuple[str, str], int] = defaultdict(int)
    occ_month_jobs: dict[tuple[str, str], int] = {}

    if num_jobs_source is not None:
        with num_jobs_source.open() as f:
            for r in csv.DictReader(f, delimiter="\t"):
                mo = r.get("month_year")
                if months_in_window is not None and mo not in months_in_window:
                    continue
                try:
                    nj = int(r["num_jobs"])
                except (KeyError, TypeError, ValueError):
                    continue
                occ_month_jobs[(r["occ8"], mo)] = nj
        with tsv_path.open() as f:
            for r in csv.DictReader(f, delimiter="\t"):
                mo = r.get("month_year")
                if months_in_window is not None and mo not in months_in_window:
                    continue
                try:
                    ent = r[entity_col]
                    cnt = int(r[num_jobs_col])
                except (KeyError, TypeError, ValueError):
                    continue
                occ_entity_jobs[(r["occ8"], ent)] += cnt
    else:
        with tsv_path.open() as f:
            for r in csv.DictReader(f, delimiter="\t"):
                mo = r.get("month_year")
                if months_in_window is not None and mo not in months_in_window:
                    continue
                try:
                    ent = r[entity_col]
                    tnj = int(r[num_jobs_col])
                    nj  = int(r["num_jobs"])
                except (KeyError, TypeError, ValueError):
                    continue
                occ_entity_jobs[(r["occ8"], ent)] += tnj
                occ_month_jobs[(r["occ8"], mo)] = nj

    occ_total_jobs: dict[str, int] = defaultdict(int)
    for (o, _m), nj in occ_month_jobs.items():
        occ_total_jobs[o] += nj
    natl_entity_jobs: dict[str, int] = defaultdict(int)
    for (_o, ent), tnj in occ_entity_jobs.items():
        natl_entity_jobs[ent] += tnj
    natl_total = sum(occ_month_jobs.values())

    return (dict(occ_entity_jobs), dict(occ_total_jobs),
            dict(natl_entity_jobs), natl_total)


# ---------------------------------------------------------------------------
# RCA-screen + share weight  ->  e(j, s)
# ---------------------------------------------------------------------------
def compute_e_matrix(occ_entity_jobs, occ_total_jobs,
                     natl_entity_jobs, natl_total,
                     entity_filter: set[str] | None = None,
                     min_mentions: int = MIN_MENTIONS,
                     rca_threshold: float = RCA_THRESHOLD
                     ) -> dict[tuple[str, str], float]:
    """e(j, s) = posting-share with screen. Drops occ-entity pairs with
    RCA < threshold or mentions < floor."""
    if natl_total == 0:
        return {}
    e: dict[tuple[str, str], float] = {}
    for (occ, ent), jobs in occ_entity_jobs.items():
        if entity_filter is not None and ent not in entity_filter:
            continue
        if jobs < min_mentions:
            continue
        otot = occ_total_jobs.get(occ, 0)
        ntj  = natl_entity_jobs.get(ent, 0)
        if otot == 0 or ntj == 0:
            continue
        rca = (jobs / otot) / (ntj / natl_total)
        if rca < rca_threshold:
            continue
        e[(occ, ent)] = jobs / otot
    return e


# ---------------------------------------------------------------------------
# rho(j, j') with max-denominator + top-K-per-occ trimming
# ---------------------------------------------------------------------------
def compute_relatedness(e_matrix, top_k: int = TOP_K_PER_OCC,
                        min_rho: float = 0.0
                        ) -> list[tuple[str, str, float]]:
    """Returns [(occA, occB, rho), ...] for the top-k partners per occ.
    Pair de-duped — (a, b) appears at most once with a < b."""
    by_occ: dict[str, dict[str, float]] = defaultdict(dict)
    for (occ, ent), v in e_matrix.items():
        by_occ[occ][ent] = v
    occ_total = {occ: sum(d.values()) for occ, d in by_occ.items()}

    rho_for_pair: dict[tuple[str, str], float] = {}
    occs = list(by_occ.keys())
    for i, j in enumerate(occs):
        ej = by_occ[j]
        if not ej: continue
        for jp in occs[i + 1:]:
            ejp = by_occ[jp]
            if not ejp: continue
            # iterate over smaller dict
            if len(ej) <= len(ejp):
                inner, outer = ej, ejp
            else:
                inner, outer = ejp, ej
            num = 0.0
            for s, v in inner.items():
                ov = outer.get(s)
                if ov is not None:
                    num += v * ov
            if num == 0: continue
            denom = max(occ_total[j], occ_total[jp])
            if denom == 0: continue
            rho = num / denom
            if rho > min_rho:
                rho_for_pair[(j, jp)] = rho

    neighbors: dict[str, list[tuple[str, float]]] = defaultdict(list)
    for (j, jp), rho in rho_for_pair.items():
        neighbors[j].append((jp, rho))
        neighbors[jp].append((j, rho))

    top_pairs: set[tuple[str, str, float]] = set()
    for occ, partners in neighbors.items():
        partners.sort(key=lambda x: -x[1])
        for partner, rho in partners[:top_k]:
            a, b = sorted([occ, partner])
            top_pairs.add((a, b, rho))
    return list(top_pairs)


# ---------------------------------------------------------------------------
# Helper: SOC cousin distance (used for chord depth)
# ---------------------------------------------------------------------------
def soc_cousin_distance(a: str, b: str) -> str:
    if a == b: return "canonical"
    if a[:7] == b[:7]: return "same_soc6"
    if a[:5] == b[:5]: return "same_soc4"
    if a[:2] == b[:2]: return "same_soc2"
    return "cross_soc2"
