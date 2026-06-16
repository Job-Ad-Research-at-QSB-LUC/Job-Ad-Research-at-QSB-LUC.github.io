"""Animate the RCA-flow rim corona over the rolling-window timeline.

Per window-end month, render the same figure as rca_rim_bars_prototype
(outer red = home's own RCA, inner blue = importer's RCA, faint cousin-depth
chords, dashed 2/4/6 bullseye) and stitch the frames into an mp4 at 4 FPS.

ONE shared scale, fixed across BOTH rings AND all frames, so bar lengths are
comparable and don't jump frame to frame.

Usage:
  python3 rca_rim_movie.py validated_tasks [sample]
  python3 rca_rim_movie.py ai_strict       [sample]
"""
from __future__ import annotations

import importlib.util as _u
import math
import subprocess
import sys
from collections import defaultdict
from pathlib import Path as P

import imageio_ffmpeg
import matplotlib.pyplot as plt
import matplotlib.patheffects as pe
from matplotlib.collections import LineCollection
import numpy as np

HERE = P(__file__).resolve().parent
spec = _u.spec_from_file_location("tfg", HERE / "timelapse_frame_gen.py")
tfg = _u.module_from_spec(spec); spec.loader.exec_module(tfg)

# moved-inward cousin-distance bullseye (rings AND chord bow-depths together)
tfg.RING_DEPTH = {"same_soc6": 0.84, "same_soc4": 0.75, "same_soc2": 0.66}
tfg.CROSS_OUTER = 0.66

ORIGIN_C, DEST_C = "#d1495b", "#2e86ab"
FPS = 4
FF = imageio_ffmpeg.get_ffmpeg_exe()


def _kept(my: str) -> bool:
    m, y = my.split("_")
    return not (y > "2025" or (y == "2025" and m in ("10", "11", "12")))


def emergent_home_map(rows, njm, keep):
    """Define each entity's 'home' empirically: the occupation with the highest
    RCA in the FIRST rolling window where it shows RCA>=1 (its initial
    stronghold). Fixed once, then used for every later window."""
    months = sorted({mo for (mo, *_) in rows}, key=tfg.month_key)
    home_map: dict[str, str] = {}
    for i in range(tfg.ROLLING_WINDOW - 1, len(months)):
        if not _kept(months[i]):
            continue
        win = months[i - tfg.ROLLING_WINDOW + 1: i + 1]
        oe, ot, ne, nt = tfg._window_aggregate(rows, njm, win)
        if nt == 0:
            continue
        best: dict[str, tuple[float, str]] = {}
        for (occ, ent), jobs in oe.items():
            if not keep(occ, ent):
                continue
            otot = ot.get(occ, 0); ntj = ne.get(ent, 0)
            if otot == 0 or ntj == 0:
                continue
            rca = (jobs / otot) / (ntj / nt)
            if rca < tfg.RCA_THRESHOLD:
                continue
            cur = best.get(ent)
            if cur is None or rca > cur[0]:
                best[ent] = (rca, occ)
        for ent, (_r, occ) in best.items():
            home_map.setdefault(ent, occ)     # first appearance wins
    return home_map


def domain_spec(domain: str):
    canon = tfg.load_onet_canonical()
    if domain == "validated_tasks":
        validated = tfg.load_validated_occ_task_pairs()
        rows, njm = tfg._read_per_occ_rows(tfg.TASKS_TSV, "task_id")
        def keep(occ, ent):
            return ent.isdigit() and (occ, int(ent)) in validated
        def home(ent):
            return canon.get(int(ent)) if ent.isdigit() else None
        title = "Cross-occupation task spillover  ·  validated task pairs (NLx)"
    elif domain == "stem_tasks":
        stem_canon = tfg._validated_canon(tfg.STEM_CSV)   # {tid: canonical_occ8}
        stem_ids = {str(t) for t in stem_canon}
        rows, njm = tfg._read_per_occ_rows(tfg.TASKS_TSV, "task_id", entity_filter=stem_ids)
        def keep(occ, ent):
            return True                       # already filtered to STEM task ids
        def home(ent):
            return stem_canon.get(int(ent)) if ent.isdigit() else None
        title = "Cross-occupation STEM-task spillover  ·  STEM-validated (NLx)"
    elif domain in ("ai_strict", "ai_lenient"):
        # AIMatch codes have NO O*NET task/home (the trailing number is not a
        # task_id). Home = emergent initial stronghold (argmax RCA at first
        # appearance), data-derived.
        strictness = "strict" if "strict" in domain else "lenient"
        try:
            from relatedness import load_aimatch_codes
        except Exception:
            import sys as _s; _s.path.insert(0, str(HERE))
            from relatedness import load_aimatch_codes
        codes = load_aimatch_codes(strictness)
        rows, njm = tfg._read_per_occ_rows(tfg.AI_TSV, "ai_code", entity_filter=codes)
        def keep(occ, ent):
            return True
        home_map = emergent_home_map(rows, njm, keep)
        print(f"  emergent homes assigned for {len(home_map):,} AI codes")
        def home(ent):
            return home_map.get(ent)
        title = f"AI-task spillover from initial stronghold  ·  AIMatch-{strictness} (NLx)"
    else:
        raise SystemExit(f"unknown domain {domain}")
    return rows, njm, keep, home, title


def window_flows(oe, ot, ne, nt, keep, home):
    origin_home: dict[str, float] = defaultdict(float)
    dest_demand: dict[str, float] = defaultdict(float)
    chord_rca: dict[tuple[str, str], float] = defaultdict(float)
    seen: set[tuple[str, str]] = set()
    for (occ, ent), jobs in oe.items():
        otot = ot.get(occ, 0); ntj = ne.get(ent, 0)
        if otot == 0 or ntj == 0 or not keep(occ, ent):
            continue
        rca = (jobs / otot) / (ntj / nt)
        if rca < tfg.RCA_THRESHOLD:
            continue
        h = home(ent)
        if h is None or h == occ:
            continue
        dest_demand[occ] += rca
        chord_rca[(occ, h)] += rca
        if (h, ent) not in seen:
            seen.add((h, ent))
            hj = oe.get((h, ent), 0); htot = ot.get(h, 0)
            origin_home[h] += (hj / htot) / (ntj / nt) if (htot > 0 and hj > 0) else 0.0
    return origin_home, dest_demand, chord_rca


def all_windows(rows, njm, keep, home):
    months = sorted({mo for (mo, *_) in rows}, key=tfg.month_key)
    out = []
    for i in range(tfg.ROLLING_WINDOW - 1, len(months)):
        end = months[i]
        if not _kept(end):
            continue
        win = months[i - tfg.ROLLING_WINDOW + 1: i + 1]
        oe, ot, ne, nt = tfg._window_aggregate(rows, njm, win)
        if nt == 0:
            continue
        out.append((end, *window_flows(oe, ot, ne, nt, keep, home)))
    return out


def render_frame(end, origin_home, dest_demand, chord_rca, occs, occ_angle, color,
                 gmax, title, out_path):
    fig, ax = plt.subplots(figsize=(11, 11), dpi=120)
    fig.subplots_adjust(left=0.02, right=0.98, top=0.98, bottom=0.055)
    ax.set_aspect("equal"); ax.set_axis_off()
    lim = 1.62
    ax.set_xlim(-lim, lim); ax.set_ylim(-lim, lim)
    halo = lambda lw=2.6: [pe.withStroke(linewidth=lw, foreground="white")]

    ch = [(a, b, tfg.soc_cousin_distance(a, b)) for (a, b) in chord_rca]
    segs, cols = tfg._gradient_segments(ch, occ_angle, color)
    if segs.size:
        ax.add_collection(LineCollection(segs, colors=cols, linewidths=0.2,
                                         zorder=1.5, rasterized=True, capstyle="butt"))

    R = 1.0; OUT_SPAN = 0.34; IN_SPAN = 0.30
    def frac(v):
        return math.sqrt(min(v / gmax, 1.0)) if (v > 0 and gmax) else 0.0
    o_segs, d_segs = [], []
    for o in occs:
        th = occ_angle[o]; c, s = math.cos(th), math.sin(th)
        ov = frac(origin_home.get(o, 0.0)) * OUT_SPAN
        dv = frac(dest_demand.get(o, 0.0)) * IN_SPAN
        if ov > 0:
            o_segs.append([(R*c, R*s), ((R+ov)*c, (R+ov)*s)])
        if dv > 0:
            d_segs.append([(R*c, R*s), ((R-dv)*c, (R-dv)*s)])
    ax.add_collection(LineCollection(d_segs, colors=DEST_C, linewidths=1.2, zorder=3,
                                     capstyle="butt", alpha=0.9))
    ax.add_collection(LineCollection(o_segs, colors=ORIGIN_C, linewidths=1.2, zorder=3,
                                     capstyle="butt", alpha=0.9))

    for r in (0.84, 0.75, 0.66):
        ax.add_patch(plt.Circle((0, 0), r, fill=False, edgecolor="#3a3a3a", linewidth=0.8,
                                 linestyle=(0, (4, 3)), zorder=5, path_effects=halo(2.2)))
    ax.add_patch(plt.Circle((0, 0), R, fill=False, edgecolor="#888888", linewidth=0.7, zorder=4.5))
    rim_th = np.array([occ_angle[o] for o in occs])
    ax.scatter(np.cos(rim_th), np.sin(rim_th), s=4, c=[color[o] for o in occs],
               edgecolors="none", zorder=4.6)

    by_s2: dict[str, list[int]] = defaultdict(list)
    for idx, o in enumerate(occs):
        by_s2[tfg.soc2(o)].append(idx)
    no = len(occs)
    for s2, idxs in by_s2.items():
        th = math.pi/2 - 2*math.pi*((idxs[0] + idxs[-1]) / 2)/no
        ax.text(1.085*math.cos(th), 1.085*math.sin(th), s2, ha="center", va="center",
                fontsize=11.5, color="#1a1a1a", weight="bold", path_effects=halo(3.6), zorder=8)

    # month label (top-left) + constant title
    mm, yy = end.split("_")
    ax.text(-lim + 0.03, lim - 0.03, title, ha="left", va="top", fontsize=13,
            weight="bold", color="#111111")
    ax.text(-lim + 0.03, lim - 0.17, f"12-mo window ending {mm}/{yy}", ha="left", va="top",
            fontsize=14, color="#444444")

    ax.plot([], [], color=ORIGIN_C, lw=6, label="outer = home's own RCA (origin)")
    ax.plot([], [], color=DEST_C, lw=6, label="inner = importer's RCA (destination)")
    ax.legend(loc="lower center", bbox_to_anchor=(0.5, -0.04), ncol=2, fontsize=13,
              frameon=False, handlelength=1.7, columnspacing=1.8)
    ax.text(0.0, -1.50, r"bar length $=\ \sqrt{\sum \mathrm{RCA}}$  (summed per occupation)",
            ha="center", va="center", fontsize=12.5, color="#444444")

    fig.savefig(out_path, dpi=120, facecolor="white")
    plt.close(fig)


REL_C = "#6a4c93"   # single colour: relatedness is symmetric (no in/out)


def render_rel_frame(end, strength, chords, occs, occ_angle, color, gmax, title, out_path,
                     show_bars=True):
    fig, ax = plt.subplots(figsize=(11, 11), dpi=120)
    fig.subplots_adjust(left=0.02, right=0.98, top=0.98, bottom=0.055)
    ax.set_aspect("equal"); ax.set_axis_off()
    lim = 1.62
    ax.set_xlim(-lim, lim); ax.set_ylim(-lim, lim)
    halo = lambda lw=2.6: [pe.withStroke(linewidth=lw, foreground="white")]

    ch = [(a, b, tfg.soc_cousin_distance(a, b)) for (a, b) in chords]
    segs, cols = tfg._gradient_segments(ch, occ_angle, color)
    if segs.size:
        ax.add_collection(LineCollection(segs, colors=cols, linewidths=0.2,
                                         zorder=1.5, rasterized=True, capstyle="butt"))

    if show_bars:
        R = 1.0; SPAN = 0.40
        def frac(v):
            return math.sqrt(min(v / gmax, 1.0)) if (v > 0 and gmax) else 0.0
        bsegs = []
        for o in occs:
            th = occ_angle[o]; c, s = math.cos(th), math.sin(th)
            bv = frac(strength.get(o, 0.0)) * SPAN
            if bv > 0:
                bsegs.append([(R*c, R*s), ((R+bv)*c, (R+bv)*s)])
        ax.add_collection(LineCollection(bsegs, colors=REL_C, linewidths=1.4, zorder=3,
                                         capstyle="butt", alpha=0.92))
    R = 1.0
    for r in (0.84, 0.75, 0.66):
        ax.add_patch(plt.Circle((0, 0), r, fill=False, edgecolor="#3a3a3a", linewidth=0.8,
                                 linestyle=(0, (4, 3)), zorder=5, path_effects=halo(2.2)))
    ax.add_patch(plt.Circle((0, 0), R, fill=False, edgecolor="#888888", linewidth=0.7, zorder=4.5))
    rim_th = np.array([occ_angle[o] for o in occs])
    ax.scatter(np.cos(rim_th), np.sin(rim_th), s=4, c=[color[o] for o in occs],
               edgecolors="none", zorder=4.6)

    by_s2: dict[str, list[int]] = defaultdict(list)
    for idx, o in enumerate(occs):
        by_s2[tfg.soc2(o)].append(idx)
    no = len(occs)
    for s2, idxs in by_s2.items():
        th = math.pi/2 - 2*math.pi*((idxs[0] + idxs[-1]) / 2)/no
        ax.text(1.085*math.cos(th), 1.085*math.sin(th), s2, ha="center", va="center",
                fontsize=11.5, color="#1a1a1a", weight="bold", path_effects=halo(3.6), zorder=8)

    mm, yy = end.split("_")
    ax.text(-lim + 0.03, lim - 0.03, title, ha="left", va="top", fontsize=13,
            weight="bold", color="#111111")
    ax.text(-lim + 0.03, lim - 0.17, f"12-mo window ending {mm}/{yy}", ha="left", va="top",
            fontsize=14, color="#444444")
    if show_bars:
        ax.plot([], [], color=REL_C, lw=6,
                label=r"bar = relatedness strength ($\sum \rho$ over an occupation's top-8 partners)")
        ax.legend(loc="lower center", bbox_to_anchor=(0.5, -0.04), ncol=1, fontsize=13,
                  frameon=False, handlelength=1.7)
    note = (r"bar length $=\ \sqrt{\sum \rho}$   ·   " if show_bars else "")
    ax.text(0.0, -1.50, note + "chords link occupations that share validated tasks (symmetric)",
            ha="center", va="center", fontsize=12, color="#444444")
    fig.savefig(out_path, dpi=120, facecolor="white")
    plt.close(fig)


def rel_main(domain, sample, no_rim=False):
    print(f"[{domain}] computing relatedness per window ...{' (no-rim)' if no_rim else ''}")
    per = tfg._collect_relatedness_with_rho(domain)        # {end: [(a, b, rho)]}
    ends = sorted([e for e in per if _kept(e)], key=tfg.month_key)
    wins, allv = [], []
    for end in ends:
        strength: dict[str, float] = defaultdict(float); chords = set()
        for a, b, rho in per[end]:
            strength[a] += rho; strength[b] += rho; chords.add((a, b))
        wins.append((end, strength, chords)); allv.extend(strength.values())
    arr = np.array(allv) if allv else np.array([1.0])
    gmax = float(np.percentile(arr, 99.5))
    print(f"  windows: {len(wins)}  range {wins[0][0]}..{wins[-1][0]}  "
          f"scale p99.5={gmax:.2f}  max={arr.max():.2f}")
    occs, occ_angle, color = tfg.build_detailed_rim()
    titles = {"rel_ai_strict": "AI-skill relatedness centrality  ·  AIMatch-strict (NLx)",
              "rel_ai_lenient": "AI-skill relatedness centrality  ·  AIMatch-lenient (NLx)"}
    title = titles.get(domain, f"Relatedness centrality  ·  {domain}")
    suffix = "_norim" if no_rim else ""
    fdir = HERE / "frames_detailed" / f"_rca_rim_movie_{domain}{suffix}"
    fdir.mkdir(parents=True, exist_ok=True)
    todo = wins[-1:] if sample else wins
    for k, (end, st, cr) in enumerate(todo):
        idx = (len(wins) - 1) if sample else k
        render_rel_frame(end, st, cr, occs, occ_angle, color, gmax, title, fdir / f"{idx:03d}.png",
                         show_bars=not no_rim)
    print(f"  wrote {len(todo)} frame(s) -> {fdir}")
    if sample:
        return
    out = HERE / "frames_detailed" / "movies" / f"{domain}{'_norim' if no_rim else '_rca_rim'}.mp4"
    out.parent.mkdir(parents=True, exist_ok=True)
    cmd = [FF, "-y", "-framerate", str(FPS), "-i", str(fdir / "%03d.png"),
           "-vf", "scale=trunc(iw/2)*2:trunc(ih/2)*2", "-r", str(FPS),
           "-pix_fmt", "yuv420p", "-c:v", "libx264", "-crf", "18", str(out)]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    print(f"  movie -> {out}")


def main():
    tfg.apply_style()
    domain = sys.argv[1] if len(sys.argv) > 1 else "validated_tasks"
    sample = "sample" in sys.argv[2:]
    no_rim = "norim" in sys.argv[2:]
    if domain.startswith("rel_"):
        rel_main(domain, sample, no_rim=no_rim)
        return
    rows, njm, keep, home, title = domain_spec(domain)
    print(f"[{domain}] computing window flows ...")
    wins = all_windows(rows, njm, keep, home)
    vals = [v for (_e, oh, dd, _c) in wins for v in list(oh.values()) + list(dd.values())]
    arr = np.array(vals)
    # robust shared scale: normalize to the 99.5th pct (one ref for both rings,
    # fixed across time); the rare giant outliers saturate at full bar length.
    gmax = float(np.percentile(arr, 99.5))
    print(f"  windows: {len(wins)}  range {wins[0][0]}..{wins[-1][0]}")
    print(f"  scale ref (p99.5)={gmax:.0f}  true max={arr.max():.0f}")

    occs, occ_angle, color = tfg.build_detailed_rim()
    fdir = HERE / "frames_detailed" / f"_rca_rim_movie_{domain}"
    fdir.mkdir(parents=True, exist_ok=True)
    todo = wins[-1:] if sample else wins
    for k, (end, oh, dd, cr) in enumerate(todo):
        idx = (len(wins) - 1) if sample else k
        render_frame(end, oh, dd, cr, occs, occ_angle, color, gmax, title,
                     fdir / f"{idx:03d}.png")
    print(f"  wrote {len(todo)} frame(s) -> {fdir}")
    if sample:
        return
    out = HERE / "frames_detailed" / "movies" / f"{domain}_rca_rim.mp4"
    out.parent.mkdir(parents=True, exist_ok=True)
    cmd = [FF, "-y", "-framerate", str(FPS), "-i", str(fdir / "%03d.png"),
           "-vf", "scale=trunc(iw/2)*2:trunc(ih/2)*2", "-r", str(FPS),
           "-pix_fmt", "yuv420p", "-c:v", "libx264", "-crf", "18", str(out)]
    subprocess.run(cmd, check=True, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
    print(f"  movie -> {out}")


if __name__ == "__main__":
    main()
