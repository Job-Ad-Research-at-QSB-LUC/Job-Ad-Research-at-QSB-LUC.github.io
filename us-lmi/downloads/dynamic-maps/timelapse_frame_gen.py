"""Per-month timelapse frame generator for the SOC-2 aggregate chord
figures. Renders one PNG per (domain, month_year) into

    figs/archive/frames/<domain>/<month_year>.png

and writes a manifest:

    figs/archive/frames/manifest.json

The manifest is what the HTML player reads to know which frames exist
for each domain. Layout / palette / chord-ribbon style mirror
network_soc2_aggregate_chords.py, just smaller and lighter for fast
playback.
"""
from __future__ import annotations

import argparse
import colorsys
import csv
import json
import math
import re
import sys
from collections import defaultdict
from pathlib import Path as PPath

import duckdb
import matplotlib.patches as mpatches
import matplotlib.path as mpath
import matplotlib.patheffects as pe
import matplotlib.pyplot as plt
from matplotlib.collections import LineCollection
import numpy as np
import seaborn as sns

sys.path.insert(0, str(PPath(__file__).resolve().parent.parent))
from pubstyle import apply_style


REPO        = PPath(__file__).resolve().parent.parent.parent / "usajobs_lmi"
CODEX_REPO  = (PPath(__file__).resolve().parent.parent.parent
               / "usajobs_lmi_codex_public_dashboard")
WAREHOUSE   = REPO / "usajobs_v4.duckdb"
AI_TSV          = REPO / "data" / "nlx_aggregates" / "job_ai_tasks_Occ8.tsv"
AI_NATL_TSV     = REPO / "data" / "nlx_aggregates" / "job_ai_tasks.tsv"
TASKS_TSV       = REPO / "data" / "nlx_aggregates" / "job_tasks_Occ8.tsv"
TASKS_NATL_TSV  = REPO / "data" / "nlx_aggregates" / "job_tasks.tsv"
SKILLS_TSV      = REPO / "data" / "nlx_aggregates" / "job_skills_Occ8.tsv"
SKILLS_NATL_TSV = REPO / "data" / "nlx_aggregates" / "job_skills.tsv"
WA_TSV          = REPO / "data" / "nlx_aggregates" / "wa_JobTasks_Occ8.tsv"
JOB_INFO_TSV    = REPO / "data" / "nlx_aggregates" / "job_info_Occ8.tsv"
SCORE_TSV       = REPO / "data" / "nlx_aggregates" / "aggr_enrich_ai_info_Occ8.tsv"

RCA_THRESHOLD = 1.0     # RCA > threshold required for chord inclusion
ROLLING_WINDOW = 12     # 12-month trailing rolling window for every frame
STEM_CSV    = (CODEX_REPO / "crosswalks"
               / "llm_as_judge_stem_tasks_validated.csv")
GREEN_CSV   = REPO / "crosswalks" / "llm_as_judge_green_tasks_validated.csv"
# Sonnet+GPT-4o two-model agreement-retained (occ8, task_id) pairs. Union of
# the two *top-ranked* validation sampling frames only -- top-RCA and
# top-volume; the random-sample frame is deliberately excluded. Every row is
# included==1 (n_yes_2j==2 for ~99.9%). Used by the `validated_tasks` domain.
VALIDATED_OCC_TASK_CSVS = (
    REPO / "crosswalks" / "llm_as_judge_onet_occ_pairs_validated.csv",        # top-RCA frame
    REPO / "crosswalks" / "llm_as_judge_onet_occ_pairs_volume_validated.csv",  # top-volume frame
)

FRAMES_DIR  = PPath(__file__).resolve().parent / "frames"

# 7 domains. ai_all is the full NLX AI-task chord; ai_strict / ai_lenient
# / ai_other filter that same chord set by the OCCUPATION's static AI
# tier (mean avg_n_strict / avg_n_lenient over the full 60-month window).
# NOTE: there is deliberately no `rel_wa` relatedness domain. WA evidence
# (wa_task_count) is task->activity mention mass, not distinct postings, so
# e(occ, wa) = wa_task_count / num_jobs is not a posting share and exceeds 1,
# which breaks the rho in [0,1] bound that every other rel_* domain obeys (it
# produced rho up to ~18 in earlier exports). A true posting-share for WA is
# not recoverable from the NLX aggregates (no posting IDs), and a within-occ
# composition share would be a different statistic than the sibling domains,
# so WA is shipped only as the plain canonical-home `work_activities` domain
# (where RCA is a ratio and the scale issue cancels).
DOMAINS = (
    "ai_strict", "ai_lenient",
    "esco_skills", "tasks_all", "validated_tasks",
    "stem_tasks", "green_tasks", "work_activities",
    "rel_ai_strict", "rel_ai_lenient",
    "rel_skills", "rel_tasks_all", "rel_validated_tasks",
    "rel_stem", "rel_green",
)
RELATEDNESS_DOMAINS = (
    "rel_ai_strict", "rel_ai_lenient",
    "rel_skills", "rel_tasks_all", "rel_validated_tasks", "rel_stem", "rel_green",
)
DOMAIN_TITLES = {
    "ai_strict":       "NLx - AIMatch strict (task-level, strict_score > 0)",
    "ai_lenient":      "NLx - AIMatch lenient (task-level, lenient_score > 0)",
    "esco_skills":     "NLx - ESCO skills",
    "tasks_all":       "NLx - O*NET tasks (unfiltered)",
    "validated_tasks": "NLx - O*NET tasks (Sonnet+GPT-4o agreement-validated occ-task pairs)",
    "stem_tasks":      "NLx - STEM-validated O*NET tasks",
    "green_tasks":     "NLx - green-validated O*NET tasks",
    "work_activities": "NLx - O*NET Generalized Work Activities",
    "rel_ai_strict":   "NLx - Shared-AIMatch-strict occupation relatedness",
    "rel_ai_lenient":  "NLx - Shared-AIMatch-lenient occupation relatedness",
    "rel_skills":      "NLx - Shared-skill occupation relatedness",
    "rel_tasks_all":   "NLx - Shared-O*NET-task occupation relatedness (unfiltered)",
    "rel_validated_tasks": "NLx - Shared-validated-task occupation relatedness (Sonnet+GPT-4o agreement pairs)",
    "rel_stem":        "NLx - Shared-STEM-task occupation relatedness",
    "rel_green":       "NLx - Shared-green-task occupation relatedness",
}
AI_DOMAINS = ("ai_strict", "ai_lenient")
AIMATCH_STRICTNESS = {
    "ai_strict":      "strict",
    "ai_lenient":     "lenient",
    "rel_ai_strict":  "strict",
    "rel_ai_lenient": "lenient",
}

SOC2_NAMES = {
    "11": "Management", "13": "Business and Financial Operations",
    "15": "Computer and Mathematical",
    "17": "Architecture and Engineering",
    "19": "Life, Physical, and Social Science",
    "21": "Community and Social Service", "23": "Legal",
    "25": "Educational Instruction and Library",
    "27": "Arts, Design, Entertainment, Sports, and Media",
    "29": "Healthcare Practitioners and Technical",
    "31": "Healthcare Support", "33": "Protective Service",
    "35": "Food Preparation and Serving Related",
    "37": "Building and Grounds Cleaning and Maintenance",
    "39": "Personal Care and Service", "41": "Sales and Related",
    "43": "Office and Administrative Support",
    "45": "Farming, Fishing, and Forestry",
    "47": "Construction and Extraction",
    "49": "Installation, Maintenance, and Repair",
    "51": "Production", "53": "Transportation and Material Moving",
    "55": "Military Specific",
}
FIXED_SECTORS = sorted(SOC2_NAMES.keys())
SOC2_PALETTE = sns.color_palette("husl", n_colors=23)
S2_COLOR = dict(zip(FIXED_SECTORS, SOC2_PALETTE))

# ---- Detailed-style constants (per-occ chord field) ----
RING_DEPTH      = {"same_soc6": 0.92, "same_soc4": 0.84, "same_soc2": 0.76}
CROSS_OUTER     = 0.76
DETAIL_N_SAMPLES = 14
DETAIL_CHORD_LW  = 0.22
DETAIL_CHORD_ALPHA = 0.18
DETAIL_SECTOR_L_MIN = 0.32
DETAIL_SECTOR_L_MAX = 0.62


def soc2(occ8: str) -> str:
    return occ8[:2]


def soc_cousin_distance(a: str, b: str) -> str:
    if a == b: return "canonical"
    if a[:7] == b[:7]: return "same_soc6"
    if a[:5] == b[:5]: return "same_soc4"
    if a[:2] == b[:2]: return "same_soc2"
    return "cross_soc2"


def _shade(rgb, l_target):
    h, _, s = colorsys.rgb_to_hls(*rgb)
    return colorsys.hls_to_rgb(h, l_target, s)


def month_key(month_year: str) -> str:
    """Convert NLX 'MM_YYYY' to sortable 'YYYY_MM'."""
    m, y = month_year.split("_")
    return f"{y}_{m}"


# ---------------------------------------------------------------------------
# Canonical homes per domain
# ---------------------------------------------------------------------------
def load_onet_canonical() -> dict[int, str]:
    con = duckdb.connect(str(WAREHOUSE), read_only=True)
    rows = con.execute(
        "SELECT task_id, MIN(occ8) FROM OnetTaskStatements GROUP BY task_id"
    ).fetchall()
    con.close()
    return {int(t): o for t, o in rows}


def _validated_canon(path: PPath) -> dict[int, str]:
    out: dict[int, str] = {}
    with path.open() as f:
        for r in csv.DictReader(f):
            if r.get("included") != "1": continue
            try:
                tid = int(r["task_id"])
            except (TypeError, ValueError):
                continue
            occ = r.get("canonical_occ8") or ""
            if occ: out[tid] = occ
    return out


def load_esco_skill_canonical() -> dict[str, str]:
    """Canonical home of each ESCO skill = occ where mean skill_percent
    peaks across the full window. Computed once."""
    sums: dict[tuple[str, str], float] = defaultdict(float)
    cnts: dict[tuple[str, str], int]   = defaultdict(int)
    with SKILLS_TSV.open() as f:
        for r in csv.DictReader(f, delimiter="\t"):
            try:
                p = float(r["skill_percent"])
            except (TypeError, ValueError):
                continue
            sums[(r["occ8"], r["skill"])] += p
            cnts[(r["occ8"], r["skill"])] += 1
    means = {k: sums[k]/cnts[k] for k in cnts}
    best: dict[str, tuple[str, float]] = {}
    for (occ8, skill), m in means.items():
        cur = best.get(skill)
        if cur is None or m > cur[1]:
            best[skill] = (occ8, m)
    return {sk: occ for sk, (occ, _) in best.items()}


# ---------------------------------------------------------------------------
# Per-month pair extraction
# ---------------------------------------------------------------------------
def _read_per_occ_rows(tsv_path: PPath, entity_col: str,
                       entity_filter=None,
                       num_jobs_source: PPath | None = None,
                       ) -> tuple[list, dict]:
    """Read per-row data + canonical (occ, month) -> num_jobs map. Single
    pass over the per-occ TSV.

    If `num_jobs_source` is given, the postings denominator (num_jobs) is
    read from that TSV instead of from `tsv_path` (the Work-Activities file
    carries `wa_task_count` but no `num_jobs` column, so its denominator
    comes from job_info_Occ8.tsv)."""
    if entity_col == "skill":
        num_jobs_col = "skill_num_jobs"
    elif entity_col == "element_id":
        num_jobs_col = "wa_task_count"
    else:
        num_jobs_col = "task_num_jobs"
    rows: list[tuple[str, str, str, int]] = []   # (month, occ, ent, tnj)
    occ_month_nj: dict[tuple[str, str], int] = {}

    if num_jobs_source is not None:
        with num_jobs_source.open() as f:
            for r in csv.DictReader(f, delimiter="\t"):
                try:
                    occ_month_nj[(r["occ8"], r["month_year"])] = int(r["num_jobs"])
                except (KeyError, TypeError, ValueError):
                    continue
        with tsv_path.open() as f:
            for r in csv.DictReader(f, delimiter="\t"):
                try:
                    ent = r[entity_col]
                    if entity_filter is not None and ent not in entity_filter:
                        continue
                    tnj = int(r[num_jobs_col])
                except (KeyError, TypeError, ValueError):
                    continue
                rows.append((r["month_year"], r["occ8"], ent, tnj))
        return rows, occ_month_nj

    with tsv_path.open() as f:
        for r in csv.DictReader(f, delimiter="\t"):
            try:
                ent = r[entity_col]
                if entity_filter is not None and ent not in entity_filter:
                    continue
                tnj = int(r[num_jobs_col])
                nj  = int(r["num_jobs"])
            except (KeyError, TypeError, ValueError):
                continue
            occ, mo = r["occ8"], r["month_year"]
            rows.append((mo, occ, ent, tnj))
            occ_month_nj[(occ, mo)] = nj
    return rows, occ_month_nj


def _window_aggregate(rows, occ_month_nj, window_months):
    """Sum over months in `window_months`. Returns the four pooled dicts
    used by the e-matrix / RCA pipeline."""
    window = set(window_months)
    occ_entity_jobs: dict[tuple[str, str], int] = defaultdict(int)
    occ_total: dict[str, int] = defaultdict(int)
    natl_entity: dict[str, int] = defaultdict(int)
    natl_total = 0
    used_occ_month: set[tuple[str, str]] = set()
    for (mo, occ, ent, tnj) in rows:
        if mo not in window: continue
        occ_entity_jobs[(occ, ent)] += tnj
        natl_entity[ent] += tnj
        if (occ, mo) not in used_occ_month:
            nj = occ_month_nj.get((occ, mo), 0)
            occ_total[occ] += nj
            natl_total += nj
            used_occ_month.add((occ, mo))
    return (dict(occ_entity_jobs), dict(occ_total),
            dict(natl_entity), natl_total)


def _rolling_rca_pairs(tsv_path: PPath, entity_col: str,
                       entity_filter=None,
                       window: int = ROLLING_WINDOW,
                       num_jobs_source: PPath | None = None,
                       ) -> dict[str, set[tuple[str, str]]]:
    """For each window-end month, run RCA on the trailing `window` months.
    Returns {window-end month -> set of (occ8, entity_str)}. First
    (window-1) months don't get a frame so the window is always full."""
    rows, occ_month_nj = _read_per_occ_rows(tsv_path, entity_col, entity_filter,
                                            num_jobs_source=num_jobs_source)
    months = sorted({mo for (mo, *_) in rows}, key=month_key)
    out: dict[str, set[tuple[str, str]]] = {}
    n_total = n_pass = 0
    for i in range(window - 1, len(months)):
        end = months[i]
        win_months = months[i - window + 1: i + 1]
        (occ_entity_jobs, occ_total,
         natl_entity, natl_total) = _window_aggregate(
            rows, occ_month_nj, win_months
        )
        if natl_total == 0: continue
        kept = set()
        for (occ, ent), jobs in occ_entity_jobs.items():
            n_total += 1
            otot = occ_total.get(occ, 0)
            ntj  = natl_entity.get(ent, 0)
            if otot == 0 or ntj == 0: continue
            rca = (jobs / otot) / (ntj / natl_total)
            if rca >= RCA_THRESHOLD:
                kept.add((occ, ent)); n_pass += 1
        out[end] = kept
    print(f"    rolling-{window}-month RCA-pass pairs: "
          f"{n_pass:,} of {n_total:,} "
          f"({n_pass/max(1, n_total)*100:.1f}%) across "
          f"{len(out)} window-end months")
    return out


# Backwards-compatible alias (older code calls _monthly_rca_pairs).
def _monthly_rca_pairs(tsv_path, entity_col, entity_filter=None):
    return _rolling_rca_pairs(tsv_path, entity_col, entity_filter,
                              window=ROLLING_WINDOW)


def _rolling_e_pairs(tsv_path: PPath, entity_col: str,
                     entity_filter=None,
                     num_jobs_source: PPath | None = None,
                     window: int = ROLLING_WINDOW,
                     min_mentions: int = 50,
                     pair_filter=None,
                     ) -> dict[str, dict[tuple[str, str], float]]:
    """Per-window e(j, s) matrix (RCA-screened, share-weighted) for the
    relatedness pipeline. Returns {window-end -> e dict}."""
    # Read per-row + occ-month num_jobs.
    if num_jobs_source is None:
        rows, occ_month_nj = _read_per_occ_rows(tsv_path, entity_col,
                                                entity_filter)
    else:
        # Work-Activities path: counts come from WA TSV, denominator from
        # job_info_Occ8.tsv. Reuse the helper for the WA file (with the
        # entity_col 'element_id') and overlay num_jobs from JOB_INFO_TSV.
        num_jobs_col_unused = None
        rows: list = []
        with tsv_path.open() as f:
            for r in csv.DictReader(f, delimiter="\t"):
                try:
                    ent = r[entity_col]
                    if entity_filter is not None and ent not in entity_filter:
                        continue
                    cnt = int(r["wa_task_count"])
                except (KeyError, TypeError, ValueError):
                    continue
                rows.append((r["month_year"], r["occ8"], ent, cnt))
        occ_month_nj = {}
        with num_jobs_source.open() as f:
            for r in csv.DictReader(f, delimiter="\t"):
                try:
                    occ_month_nj[(r["occ8"], r["month_year"])] = int(r["num_jobs"])
                except (KeyError, TypeError, ValueError):
                    pass

    months = sorted({mo for (mo, *_) in rows}, key=month_key)
    out: dict[str, dict[tuple[str, str], float]] = {}
    for i in range(window - 1, len(months)):
        end = months[i]
        win_months = months[i - window + 1: i + 1]
        (occ_entity_jobs, occ_total,
         natl_entity, natl_total) = _window_aggregate(
            rows, occ_month_nj, win_months
        )
        if natl_total == 0: continue
        e: dict[tuple[str, str], float] = {}
        for (occ, ent), jobs in occ_entity_jobs.items():
            if pair_filter is not None and (occ, ent) not in pair_filter: continue
            if jobs < min_mentions: continue
            otot = occ_total.get(occ, 0)
            ntj  = natl_entity.get(ent, 0)
            if otot == 0 or ntj == 0: continue
            rca = (jobs / otot) / (ntj / natl_total)
            if rca < RCA_THRESHOLD: continue
            e[(occ, ent)] = jobs / otot
        out[end] = e
    print(f"    rolling-{window}-month e-matrices: "
          f"{len(out)} window-ends, sample size = "
          f"{(sum(len(d) for d in out.values()) / max(1, len(out))):.0f}")
    return out


def _ai_emergent_home_map(code_filter) -> dict[str, str]:
    """Empirical 'home' for each AIMatch code: the occupation with the highest
    RCA in the FIRST rolling window where the code shows RCA>=1 (its initial
    stronghold), fixed once and reused for every later window.

    NOTE: AIMatch codes (e.g. 'A6.J.6.g.15849') are an AI-capability taxonomy;
    the trailing number is NOT an O*NET task_id, so there is no O*NET canonical
    home for an AI code. This data-derived 'initial stronghold' replaces the
    earlier (incorrect) task_id->home mapping."""
    rows, occ_month_nj = _read_per_occ_rows(AI_TSV, "ai_code",
                                            entity_filter=code_filter)
    months = sorted({mo for (mo, *_) in rows}, key=month_key)
    home_map: dict[str, str] = {}
    for i in range(ROLLING_WINDOW - 1, len(months)):
        win = months[i - ROLLING_WINDOW + 1: i + 1]
        (occ_entity_jobs, occ_total,
         natl_entity, natl_total) = _window_aggregate(rows, occ_month_nj, win)
        if natl_total == 0:
            continue
        best: dict[str, tuple[float, str]] = {}
        for (occ, code), jobs in occ_entity_jobs.items():
            otot = occ_total.get(occ, 0); ntj = natl_entity.get(code, 0)
            if otot == 0 or ntj == 0:
                continue
            rca = (jobs / otot) / (ntj / natl_total)
            if rca < RCA_THRESHOLD:
                continue
            cur = best.get(code)
            if cur is None or rca > cur[0]:
                best[code] = (rca, occ)
        for code, (_r, occ) in best.items():
            home_map.setdefault(code, occ)       # first appearance wins
    return home_map


def collect_ai_pairs(strictness: str = "lenient"
                     ) -> dict[str, set[tuple[str, str]]]:
    """AIMatch-filtered AI chord pairs. Each chord = an occupation that
    over-demands an AI capability (RCA>=1) -> that capability's emergent home
    (the occupation where it first concentrated). AIMatch codes have no O*NET
    task/home, so the home is data-derived (see _ai_emergent_home_map)."""
    from relatedness import load_aimatch_codes
    code_filter = load_aimatch_codes(strictness)
    print(f"  AIMatch code filter ({strictness}): "
          f"{len(code_filter):,} codes")
    home_map = _ai_emergent_home_map(code_filter)
    print(f"  emergent homes assigned for {len(home_map):,} AI codes")
    rca = _monthly_rca_pairs(AI_TSV, "ai_code", entity_filter=code_filter)
    out: dict[str, set[tuple[str, str]]] = defaultdict(set)
    for mo, pairs in rca.items():
        for (occ, code) in pairs:
            home = home_map.get(code)
            if home is None or home == occ: continue
            out[mo].add((occ, home))
    return out


def collect_task_pairs(tids_canon: dict[int, str]
                       ) -> dict[str, set[tuple[str, str]]]:
    tid_strs = {str(t) for t in tids_canon}
    rca = _monthly_rca_pairs(TASKS_TSV, "task_id", entity_filter=tid_strs)
    out: dict[str, set[tuple[str, str]]] = defaultdict(set)
    for mo, pairs in rca.items():
        for (occ, tstr) in pairs:
            try:
                tid = int(tstr)
            except ValueError:
                continue
            home = tids_canon.get(tid)
            if home is None or home == occ: continue
            out[mo].add((occ, home))
    return out


def collect_esco_pairs() -> dict[str, set[tuple[str, str]]]:
    canon = load_esco_skill_canonical()
    rca = _monthly_rca_pairs(SKILLS_TSV, "skill")
    out: dict[str, set[tuple[str, str]]] = defaultdict(set)
    for mo, pairs in rca.items():
        for (occ, skill) in pairs:
            home = canon.get(skill)
            if home is None or home == occ: continue
            out[mo].add((occ, home))
    return out


def load_wa_canonical() -> dict[str, str]:
    """Canonical home of each O*NET work activity (4.A.x.x.x element_id)
    = the occupation where its pooled wa_task_count is largest."""
    pooled: dict[tuple[str, str], int] = defaultdict(int)
    with WA_TSV.open() as f:
        for r in csv.DictReader(f, delimiter="\t"):
            try:
                cnt = int(r["wa_task_count"])
            except (TypeError, ValueError):
                continue
            pooled[(r["occ8"], r["element_id"])] += cnt
    best: dict[str, tuple[str, int]] = {}
    for (occ, wa), c in pooled.items():
        cur = best.get(wa)
        if cur is None or c > cur[1]:
            best[wa] = (occ, c)
    return {wa: o for wa, (o, _) in best.items()}


def collect_wa_pairs() -> dict[str, set[tuple[str, str]]]:
    canon = load_wa_canonical()
    # Rolling 12-month RCA, consistent with every other plain domain. The
    # postings denominator (num_jobs) comes from job_info_Occ8.tsv because
    # the WA file carries wa_task_count but no num_jobs column.
    rca = _rolling_rca_pairs(WA_TSV, "element_id",
                             num_jobs_source=JOB_INFO_TSV)
    out: dict[str, set[tuple[str, str]]] = defaultdict(set)
    for mo, pairs in rca.items():
        for (occ, wa) in pairs:
            # WA file carries some occ8="NA-..." sentinel rows for
            # unclassified jobs. Skip anything that isn't a real SOC-2.
            if not occ[:2].isdigit():
                continue
            home = canon.get(wa)
            if home is None or home == occ: continue
            if not home[:2].isdigit():
                continue
            out[mo].add((occ, home))
    return out


def collect_pairs(domain: str) -> dict[str, set[tuple[str, str]]]:
    if domain in AI_DOMAINS:
        return collect_ai_pairs(strictness=AIMATCH_STRICTNESS[domain])
    if domain == "esco_skills":
        return collect_esco_pairs()
    if domain == "stem_tasks":
        return collect_task_pairs(_validated_canon(STEM_CSV))
    if domain == "green_tasks":
        return collect_task_pairs(_validated_canon(GREEN_CSV))
    if domain == "work_activities":
        return collect_wa_pairs()
    if domain == "tasks_all":
        return collect_tasks_all_pairs()
    if domain == "validated_tasks":
        return collect_validated_task_pairs()
    if domain in RELATEDNESS_DOMAINS:
        return collect_relatedness_pairs(domain)
    raise ValueError(domain)


def collect_tasks_all_pairs() -> dict[str, set[tuple[str, str]]]:
    """All NLX-observed O*NET tasks, no thematic filter."""
    canon = load_onet_canonical()
    rca = _monthly_rca_pairs(TASKS_TSV, "task_id")
    out: dict[str, set[tuple[str, str]]] = defaultdict(set)
    for mo, pairs in rca.items():
        for (occ, tid_str) in pairs:
            try:
                tid = int(tid_str)
            except (TypeError, ValueError):
                continue
            home = canon.get(tid)
            if home is None or home == occ: continue
            out[mo].add((occ, home))
    return out


def load_validated_occ_task_pairs() -> set[tuple[str, int]]:
    """Sonnet+GPT-4o agreement-retained (occ8, task_id) pairs: union of the
    RCA / volume / random validation frames, keeping included==1 rows."""
    out: set[tuple[str, int]] = set()
    for path in VALIDATED_OCC_TASK_CSVS:
        with path.open() as f:
            for r in csv.DictReader(f):
                if r.get("included") != "1":
                    continue
                try:
                    tid = int(r["task_id"])
                except (KeyError, TypeError, ValueError):
                    continue
                occ = r.get("occ8") or ""
                if occ:
                    out.add((occ, tid))
    return out


def collect_validated_task_pairs() -> dict[str, set[tuple[str, str]]]:
    """Same canonical-home task-flow as `tasks_all`, but restricted to the
    Sonnet+GPT-4o agreement-validated (occ8, task_id) pairs. Validation is a
    pair-level credibility gate; the rolling RCA screen supplies the time
    dimension, so each frame is the validated subset of that window's
    tasks_all chords. (This is the timelapse analog of Figure 1a's
    agreement-retained flow.)"""
    canon = load_onet_canonical()
    validated = load_validated_occ_task_pairs()
    print(f"  agreement-validated (occ, task) pairs: {len(validated):,}")
    rca = _monthly_rca_pairs(TASKS_TSV, "task_id")
    out: dict[str, set[tuple[str, str]]] = defaultdict(set)
    for mo, pairs in rca.items():
        for (occ, tid_str) in pairs:
            try:
                tid = int(tid_str)
            except (TypeError, ValueError):
                continue
            if (occ, tid) not in validated:
                continue
            home = canon.get(tid)
            if home is None or home == occ: continue
            out[mo].add((occ, home))
    return out


# ---------------------------------------------------------------------------
# Per-window relatedness pairs (rolling 12-month)
# ---------------------------------------------------------------------------
def _aimatch_filter_fn(strictness: str):
    def fn():
        from relatedness import load_aimatch_codes
        return load_aimatch_codes(strictness)
    return fn


REL_DOMAIN_CFG = {
    "rel_skills":     dict(tsv=SKILLS_TSV, entity_col="skill",
                           num_jobs_source=None, entity_filter=None),
    "rel_stem":       dict(tsv=TASKS_TSV, entity_col="task_id",
                           num_jobs_source=None,
                           entity_filter_fn=lambda: _validated_tid_strs(STEM_CSV)),
    "rel_green":      dict(tsv=TASKS_TSV, entity_col="task_id",
                           num_jobs_source=None,
                           entity_filter_fn=lambda: _validated_tid_strs(GREEN_CSV)),
    "rel_tasks_all":  dict(tsv=TASKS_TSV, entity_col="task_id",
                           num_jobs_source=None, entity_filter=None),
    # Pair-level filter: only (occ, task) evidence that is Sonnet+GPT-4o
    # agreement-validated counts toward the e-matrix (mirrors validated_tasks).
    "rel_validated_tasks": dict(tsv=TASKS_TSV, entity_col="task_id",
                           num_jobs_source=None,
                           pair_filter_fn=lambda: {(o, str(t)) for (o, t)
                                                   in load_validated_occ_task_pairs()}),
    "rel_ai_strict":  dict(tsv=AI_TSV, entity_col="ai_code",
                           num_jobs_source=None,
                           entity_filter_fn=_aimatch_filter_fn("strict")),
    "rel_ai_lenient": dict(tsv=AI_TSV, entity_col="ai_code",
                           num_jobs_source=None,
                           entity_filter_fn=_aimatch_filter_fn("lenient")),
}


def _validated_tid_strs(path):
    canon = _validated_canon(path)
    return {str(t) for t in canon}


def collect_relatedness_pairs(domain: str) -> dict[str, set[tuple[str, str]]]:
    """Per-window relatedness pair set. Builds e(j,s) from rolling RCA,
    computes rho with top-K-per-occ, returns {window-end -> set of
    (occA, occB)}. Edges are de-deduplicated (sorted endpoints) and the
    rho weight is discarded so the existing chord renderer can ingest
    these the same way as the canonical pairs."""
    cfg = REL_DOMAIN_CFG[domain]
    entity_filter = cfg.get("entity_filter")
    if "entity_filter_fn" in cfg:
        entity_filter = cfg["entity_filter_fn"]()
    pair_filter = cfg["pair_filter_fn"]() if "pair_filter_fn" in cfg else None
    e_by_window = _rolling_e_pairs(
        cfg["tsv"], cfg["entity_col"],
        entity_filter=entity_filter,
        num_jobs_source=cfg.get("num_jobs_source"),
        pair_filter=pair_filter,
    )

    # Import the relatedness math lazily
    from relatedness import compute_relatedness, TOP_K_PER_OCC

    out: dict[str, set[tuple[str, str]]] = {}
    for end, e in e_by_window.items():
        if not e: continue
        rho_pairs = compute_relatedness(e, top_k=TOP_K_PER_OCC, min_rho=0.0)
        out[end] = {(a, b) for (a, b, _w) in rho_pairs}
    return out


# ---------------------------------------------------------------------------
# Fig 1a-style frame render (one PNG per month)
# ---------------------------------------------------------------------------
def soc2_pair_matrix(pairs: set[tuple[str, str]]) -> dict[tuple[str, str], int]:
    M: dict[tuple[str, str], int] = defaultdict(int)
    for (a, b) in pairs:
        sa, sb = soc2(a), soc2(b)
        if sa == sb: continue
        if sa > sb: sa, sb = sb, sa
        M[(sa, sb)] += 1
    return dict(M)


def chord_path(t1, t2, t3, t4, r=1.0, n_arc=24):
    verts, codes = [], []
    def P(t): return (r * math.cos(t), r * math.sin(t))
    verts.append(P(t1)); codes.append(mpath.Path.MOVETO)
    verts.extend([(0.0, 0.0), (0.0, 0.0), P(t4)])
    codes.extend([mpath.Path.CURVE4] * 3)
    for t in np.linspace(t4, t3, n_arc)[1:]:
        verts.append(P(t)); codes.append(mpath.Path.LINETO)
    verts.extend([(0.0, 0.0), (0.0, 0.0), P(t2)])
    codes.extend([mpath.Path.CURVE4] * 3)
    for t in np.linspace(t2, t1, n_arc)[1:]:
        verts.append(P(t)); codes.append(mpath.Path.LINETO)
    verts.append(P(t1)); codes.append(mpath.Path.CLOSEPOLY)
    return mpath.Path(verts, codes)


def fixed_sector_layout() -> tuple[dict, dict]:
    """Equal-arc, alphabetically-stable SOC-2 layout used for every frame
    so sectors don't jitter when their flow changes month-to-month."""
    GAP_RAD = math.radians(0.6)
    n = len(FIXED_SECTORS)
    usable = 2 * math.pi - GAP_RAD * n
    arc = usable / n
    sector_span: dict[str, tuple[float, float]] = {}
    theta_cur = math.pi / 2
    for s in FIXED_SECTORS:
        sector_span[s] = (theta_cur, theta_cur - arc)
        theta_cur -= arc + GAP_RAD
    return sector_span, dict.fromkeys(FIXED_SECTORS, arc)


SECTOR_SPAN, SECTOR_ARC = fixed_sector_layout()


def sub_arcs_for_matrix(M: dict[tuple[str, str], int]
                        ) -> dict[str, dict[str, tuple[float, float]]]:
    sub: dict[str, dict[str, tuple[float, float]]] = defaultdict(dict)
    flow_per: dict[str, int] = defaultdict(int)
    for (a, b), n in M.items():
        flow_per[a] += n; flow_per[b] += n
    for s in FIXED_SECTORS:
        partners = []
        for (a, b), n in M.items():
            if a == s: partners.append((b, n))
            elif b == s: partners.append((a, n))
        partners.sort(key=lambda x: FIXED_SECTORS.index(x[0]))
        total = sum(n for _, n in partners) or 1
        cur = SECTOR_SPAN[s][0]
        for p, n in partners:
            arc = n / total * SECTOR_ARC[s]
            sub[s][p] = (cur, cur - arc)
            cur -= arc
    return sub


def render_frame(domain: str, month_year: str,
                 pairs: set[tuple[str, str]], out_path: PPath,
                 global_max_pair: int) -> None:
    M = soc2_pair_matrix(pairs)
    flow_per: dict[str, int] = defaultdict(int)
    for (a, b), n in M.items():
        flow_per[a] += n; flow_per[b] += n
    sub_arcs = sub_arcs_for_matrix(M)

    fig, ax = plt.subplots(figsize=(6.0, 6.0), dpi=100)
    fig.subplots_adjust(left=0.02, right=0.98, top=0.94, bottom=0.04)
    ax.set_aspect("equal"); ax.set_axis_off()
    ax.set_xlim(-1.32, 1.32); ax.set_ylim(-1.32, 1.32)

    R_INNER, R_OUTER = 1.00, 1.10
    R_CODE = 1.04

    for s in FIXED_SECTORS:
        ax.add_patch(mpatches.Wedge(
            (0, 0), r=R_OUTER,
            theta1=math.degrees(SECTOR_SPAN[s][1]),
            theta2=math.degrees(SECTOR_SPAN[s][0]),
            width=R_OUTER - R_INNER,
            facecolor=S2_COLOR[s], edgecolor="white", linewidth=0.5,
            zorder=3, alpha=0.95,
        ))

    if M:
        for (a, b), n in sorted(M.items(), key=lambda kv: kv[1]):
            t1, t2 = sub_arcs[a][b]
            t3, t4 = sub_arcs[b][a]
            path = chord_path(t1, t2, t3, t4, r=R_INNER)
            color = S2_COLOR[a if flow_per[a] >= flow_per[b] else b]
            # Normalize alpha against the *global* max pair count so
            # later-month thicker ribbons darken across the timeline
            # instead of staying flat at full opacity.
            alpha = 0.15 + 0.55 * (n / max(1, global_max_pair))
            ax.add_patch(mpatches.PathPatch(
                path, facecolor=color, edgecolor="none",
                alpha=min(1.0, alpha), zorder=2,
            ))

    for s in FIXED_SECTORS:
        mid = (SECTOR_SPAN[s][0] + SECTOR_SPAN[s][1]) / 2
        ax.text(
            R_CODE * math.cos(mid), R_CODE * math.sin(mid),
            s, ha="center", va="center",
            fontsize=8.5, color="black", weight="bold",
            path_effects=[pe.withStroke(linewidth=2.4, foreground="white")],
            zorder=8,
        )

    total = sum(M.values())
    title = (f"{DOMAIN_TITLES[domain]}  |  {month_year}\n"
             f"cross-SOC-2 chord pairs = {total:,}")
    ax.set_title(title, fontsize=10, pad=6)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(out_path, dpi=100, facecolor="white")
    plt.close(fig)


# ---------------------------------------------------------------------------
# Detailed (per-occ chord field) render
# ---------------------------------------------------------------------------
def build_detailed_rim():
    """Stable rim across every frame and every domain: the full O*NET
    universe, sorted by SOC-2 then occ8. Returns sorted occs list,
    occ -> angle, and occ -> color."""
    onet_occs = sorted(set(load_onet_canonical().values()))
    by_s2: dict[str, list[str]] = defaultdict(list)
    for o in onet_occs:
        by_s2[soc2(o)].append(o)
    occs_in_order: list[str] = []
    for s2 in FIXED_SECTORS:
        for o in sorted(by_s2.get(s2, [])):
            occs_in_order.append(o)
    n = len(occs_in_order)
    occ_angle = {o: math.pi/2 - 2*math.pi*i/n for i, o in enumerate(occs_in_order)}
    # Per-occ color: SOC-2 hue + within-sector lightness ramp.
    color: dict[str, tuple] = {}
    for s2 in FIXED_SECTORS:
        sec = by_s2.get(s2, [])
        k = len(sec)
        base = S2_COLOR[s2]
        for i, o in enumerate(sorted(sec)):
            t = i / max(1, k - 1)
            L = DETAIL_SECTOR_L_MIN + (DETAIL_SECTOR_L_MAX - DETAIL_SECTOR_L_MIN) * t
            color[o] = _shade(base, L)
    return occs_in_order, occ_angle, color


CROSS_GAP = 0.85   # cross_soc2 arcs apex no higher than 85% of the same_soc2 ring,
                   # so a cross-sector link never collides with within-SOC-2 arcs even
                   # when its two endpoints sit in neighbouring sectors (cos_half->1).
def _chord_depth(md, cos_half):
    if md in RING_DEPTH: return RING_DEPTH[md]
    # cross_soc2: dive toward centre for distant pairs, but clamp short/adjacent
    # pairs so they always bend clearly inside the same_soc2 landmark ring.
    return min(cos_half * CROSS_OUTER, RING_DEPTH["same_soc2"] * CROSS_GAP)


def _gradient_segments(chords, occ_angle, color):
    n = len(chords)
    if n == 0:
        return np.empty((0, 2, 2)), np.empty((0, 4))
    aa = np.empty(n); bb = np.empty(n)
    mds = np.empty(n, dtype=object)
    rgba = np.empty((n, 3)); rgbb = np.empty((n, 3))
    keep = np.ones(n, dtype=bool)
    for i, (occA, occB, md) in enumerate(chords):
        if occA not in occ_angle or occB not in occ_angle:
            keep[i] = False; continue
        aa[i] = occ_angle[occA]; bb[i] = occ_angle[occB]
        mds[i] = md
        rgba[i] = color.get(occA, (0.5, 0.5, 0.5))[:3]
        rgbb[i] = color.get(occB, (0.5, 0.5, 0.5))[:3]
    aa = aa[keep]; bb = bb[keep]
    mds = mds[keep]; rgba = rgba[keep]; rgbb = rgbb[keep]
    P_A = np.stack([np.cos(aa), np.sin(aa)], axis=1)
    P_B = np.stack([np.cos(bb), np.sin(bb)], axis=1)
    sum_v = P_A + P_B
    norms = np.linalg.norm(sum_v, axis=1)
    cos_half = norms / 2.0
    bisect = np.zeros_like(sum_v)
    nz = norms > 1e-9
    bisect[nz] = sum_v[nz] / norms[nz, None]
    if (~nz).any():
        bisect[~nz] = np.stack([-np.sin(aa[~nz]), np.cos(aa[~nz])], axis=1)
    depths = np.array([_chord_depth(m, ch) for m, ch in zip(mds, cos_half)],
                      dtype=float)
    r_c = 2.0 * depths - cos_half
    C = bisect * r_c[:, None]
    ts = np.linspace(0.0, 1.0, DETAIL_N_SAMPLES)
    t1 = 1.0 - ts
    w_a = (t1 ** 2)[None, :, None]
    w_c = (2 * ts * t1)[None, :, None]
    w_b = (ts ** 2)[None, :, None]
    pts = w_a * P_A[:, None, :] + w_c * C[:, None, :] + w_b * P_B[:, None, :]
    seg = np.stack([pts[:, :-1, :], pts[:, 1:, :]], axis=2).reshape(-1, 2, 2)
    seg_ts = (ts[:-1] + ts[1:]) / 2.0
    seg_ts_b = seg_ts[None, :, None]
    cols = (1.0 - seg_ts_b) * rgba[:, None, :] + seg_ts_b * rgbb[:, None, :]
    cols = cols.reshape(-1, 3)
    alpha_col = np.full((cols.shape[0], 1), DETAIL_CHORD_ALPHA)
    return seg, np.concatenate([cols, alpha_col], axis=1)


def render_detailed_frame(domain, month_year, pairs, out_path,
                          occs_in_order, occ_angle, color) -> None:
    chords = [(a, b, soc_cousin_distance(a, b)) for (a, b) in pairs]
    fig, ax = plt.subplots(figsize=(6.5, 6.5), dpi=100)
    fig.subplots_adjust(left=0.02, right=0.98, top=0.94, bottom=0.04)
    ax.set_aspect("equal"); ax.set_axis_off()
    ax.set_xlim(-1.18, 1.18); ax.set_ylim(-1.18, 1.18)

    if chords:
        segs, colors = _gradient_segments(chords, occ_angle, color)
        if segs.size:
            ax.add_collection(LineCollection(
                segs, colors=colors, linewidths=DETAIL_CHORD_LW,
                zorder=2.0, rasterized=True, capstyle="butt",
            ))

    # Dashed reference rings (cousin-distance landmarks)
    for r in (0.92, 0.84, 0.76):
        ax.add_patch(plt.Circle(
            (0, 0), r, fill=False, edgecolor="#9a9a9a",
            linewidth=0.45, linestyle=(0, (3, 2)), zorder=2.6,
        ))

    # Rim ring of small colored dots (so the rim is always visible)
    rim_x = np.cos([occ_angle[o] for o in occs_in_order])
    rim_y = np.sin([occ_angle[o] for o in occs_in_order])
    rim_c = [color[o] for o in occs_in_order]
    ax.scatter(rim_x, rim_y, s=3, c=rim_c, edgecolors="none", zorder=4)

    # 2-digit SOC codes painted just outside the rim
    by_s2: dict[str, list[int]] = defaultdict(list)
    for i, o in enumerate(occs_in_order):
        by_s2[soc2(o)].append(i)
    n_occ = len(occs_in_order)
    for s2, idxs in by_s2.items():
        i_mid = (idxs[0] + idxs[-1]) / 2
        th = math.pi/2 - 2*math.pi*i_mid/n_occ
        ax.text(
            1.08 * math.cos(th), 1.08 * math.sin(th), s2,
            ha="center", va="center", fontsize=6.5,
            color="black", weight="bold",
            path_effects=[pe.withStroke(linewidth=1.8, foreground="white")],
            zorder=8,
        )

    title = (f"{DOMAIN_TITLES[domain]}  |  {month_year}\n"
             f"RCA-passing chord pairs = {len(chords):,}")
    ax.set_title(title, fontsize=10, pad=6)

    out_path.parent.mkdir(parents=True, exist_ok=True)
    fig.savefig(out_path, dpi=100, facecolor="white")
    plt.close(fig)


# ---------------------------------------------------------------------------
# Main
# ---------------------------------------------------------------------------
DETAILED_FRAMES_DIR = PPath(__file__).resolve().parent / "frames_detailed"
CSV_DIR             = PPath(__file__).resolve().parent / "frames" / "csv"
WAREHOUSE           = REPO / "usajobs_v4.duckdb"


def _soc_cousin_distance(a: str, b: str) -> str:
    if a == b: return "canonical"
    if a[:7] == b[:7]: return "same_soc6"
    if a[:5] == b[:5]: return "same_soc4"
    if a[:2] == b[:2]: return "same_soc2"
    return "cross_soc2"


def write_occupations_csv():
    """One-time reference file: occ8 -> SOC-2 + sector name + soc_title.
    The per-domain CSVs only carry occ8 IDs; this is the join table."""
    con = duckdb.connect(str(WAREHOUSE), read_only=True)
    rows = con.execute(
        "SELECT occ8, soc_title FROM Occupations ORDER BY occ8"
    ).fetchall()
    con.close()
    CSV_DIR.mkdir(parents=True, exist_ok=True)
    out = CSV_DIR / "occupations.csv"
    with out.open("w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["occ8", "soc2", "soc2_name", "soc_title"])
        for occ, title in rows:
            s2 = occ[:2] if occ else ""
            w.writerow([occ, s2, SOC2_NAMES.get(s2, ""), title or ""])
    print(f"wrote {len(rows):,} occupation labels -> {out}")
    return out


def _collect_relatedness_with_rho(domain: str):
    """Same as collect_relatedness_pairs but keeps the rho values for the
    CSV export."""
    from relatedness import compute_relatedness, TOP_K_PER_OCC
    cfg = REL_DOMAIN_CFG[domain]
    entity_filter = cfg.get("entity_filter")
    if "entity_filter_fn" in cfg:
        entity_filter = cfg["entity_filter_fn"]()
    pair_filter = cfg["pair_filter_fn"]() if "pair_filter_fn" in cfg else None
    e_by_window = _rolling_e_pairs(
        cfg["tsv"], cfg["entity_col"],
        entity_filter=entity_filter,
        num_jobs_source=cfg.get("num_jobs_source"),
        pair_filter=pair_filter,
    )
    out: dict[str, list[tuple[str, str, float]]] = {}
    for end, e in e_by_window.items():
        if not e: continue
        out[end] = compute_relatedness(e, top_k=TOP_K_PER_OCC, min_rho=0.0)
    return out


def write_domain_csv(domain: str) -> PPath:
    """One CSV per domain, with all rolling-window pairs stacked. Columns:
    window_end, occ_a, occ_b, cousin_distance, rho (empty for canonical)."""
    print(f"\n=== CSV: {domain} ===")
    if domain in RELATEDNESS_DOMAINS:
        per_window = _collect_relatedness_with_rho(domain)
        rows_iter = []
        for mo in sorted(per_window, key=month_key):
            for (a, b, rho) in per_window[mo]:
                rows_iter.append((mo, a, b,
                                  _soc_cousin_distance(a, b), f"{rho:.6f}"))
    else:
        per_window = collect_pairs(domain)
        rows_iter = []
        for mo in sorted(per_window, key=month_key):
            for (a, b) in per_window[mo]:
                rows_iter.append((mo, a, b,
                                  _soc_cousin_distance(a, b), ""))

    # Trim post-Sep 2025 just like the frame trimming step.
    def is_kept(my):
        m, y = my.split("_")
        return not (y == "2025" and m in ("10", "11", "12"))
    rows_iter = [r for r in rows_iter if is_kept(r[0])]

    CSV_DIR.mkdir(parents=True, exist_ok=True)
    out = CSV_DIR / f"{domain}.csv"
    with out.open("w", newline="") as f:
        w = csv.writer(f)
        w.writerow(["window_end", "occ_a", "occ_b", "cousin_distance", "rho"])
        w.writerows(rows_iter)
    print(f"  wrote {len(rows_iter):,} rows -> {out}")
    return out


def write_manifests() -> None:
    """Walk frames/ and frames_detailed/ and emit a combined manifest in
    both manifest.json (canonical) and manifest.js (for file:// loads of
    the HTML player). The .js version assigns to window.MANIFEST so the
    HTML can read it synchronously without fetch()."""
    out = {"titles": DOMAIN_TITLES, "styles": {}, "csv": {}}
    for style, dirpath in (("aggregate", FRAMES_DIR),
                           ("detailed",  DETAILED_FRAMES_DIR)):
        domains_for_style: dict[str, list[str]] = {}
        if dirpath.exists():
            for sub in sorted(dirpath.iterdir()):
                if not sub.is_dir() or sub.name == "csv": continue
                frames = sorted([p.stem for p in sub.glob("*.png")],
                                key=month_key)
                if frames:
                    domains_for_style[sub.name] = frames
        out["styles"][style] = domains_for_style
    # Per-domain CSV availability + label reference file.
    if CSV_DIR.exists():
        for p in sorted(CSV_DIR.glob("*.csv")):
            if p.name == "occupations.csv":
                out["csv"]["__labels__"] = f"csv/{p.name}"
            else:
                out["csv"][p.stem] = f"csv/{p.name}"

    # Aggregate writes its manifest into frames/ (matches HTML default).
    manifest_path = FRAMES_DIR / "manifest.json"
    manifest_path.parent.mkdir(parents=True, exist_ok=True)
    manifest_path.write_text(json.dumps(out, indent=2))
    js_path = FRAMES_DIR / "manifest.js"
    js_path.write_text("window.MANIFEST = " + json.dumps(out) + ";\n")
    print(f"\nwrote manifest -> {manifest_path}")
    print(f"wrote manifest -> {js_path}")


def main() -> None:
    apply_style()
    parser = argparse.ArgumentParser()
    parser.add_argument("--domain", choices=DOMAINS + ("all",), default="all")
    parser.add_argument("--style",
                        choices=("aggregate", "detailed", "both"),
                        default="aggregate")
    parser.add_argument("--csv", action="store_true",
                        help="(re)generate CSV exports for each domain "
                             "alongside the frames")
    parser.add_argument("--csv-only", action="store_true",
                        help="skip frame rendering; only emit per-domain "
                             "CSVs + the occupations label reference")
    args = parser.parse_args()
    if args.csv_only:
        args.csv = True
    domains = DOMAINS if args.domain == "all" else (args.domain,)

    if args.csv:
        write_occupations_csv()

    detailed_rim = None
    for d in domains:
        if args.csv:
            write_domain_csv(d)
        if args.csv_only:
            continue
        print(f"\n=== domain: {d} ===")
        per_month = collect_pairs(d)
        if not per_month:
            print("  no data, skipping")
            continue
        ordered = sorted(per_month.keys(), key=month_key)

        # Aggregate (SOC-2 chord)
        if args.style in ("aggregate", "both"):
            global_max = 0
            for pairs in per_month.values():
                M = soc2_pair_matrix(pairs)
                if M:
                    global_max = max(global_max, max(M.values()))
            print(f"  aggregate: months={len(per_month):,}   "
                  f"global-max pair count={global_max:,}")
            for my in ordered:
                out = FRAMES_DIR / d / f"{my}.png"
                render_frame(d, my, per_month[my], out, global_max)
            print(f"  wrote {len(ordered)} aggregate frames -> "
                  f"frames/{d}")

        # Detailed (per-occ chord field)
        if args.style in ("detailed", "both"):
            if detailed_rim is None:
                detailed_rim = build_detailed_rim()
            occs_in_order, occ_angle, color = detailed_rim
            for my in ordered:
                out = DETAILED_FRAMES_DIR / d / f"{my}.png"
                render_detailed_frame(d, my, per_month[my], out,
                                      occs_in_order, occ_angle, color)
            print(f"  wrote {len(ordered)} detailed frames -> "
                  f"frames_detailed/{d}")

    write_manifests()


if __name__ == "__main__":
    main()
