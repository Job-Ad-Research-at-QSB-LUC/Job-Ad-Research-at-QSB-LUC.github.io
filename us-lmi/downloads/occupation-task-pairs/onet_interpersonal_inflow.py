"""Visual: interpersonal & management/coordination tasks 'filling into' Computer
(SOC-15) and Engineering (SOC-17) occupations.

Only the postings-confirmed task migrations (RCA + high-volume) whose task is
Non-routine Interpersonal (ALM) or Admin & Management (primary_category) and whose
DESTINATION is a SOC-15/17 occupation are drawn, as curves from the task's home
occupation converging on the 15/17 arc (rotated to the bottom). Edge color =
ALM category. The point: these least-AI-automatable tasks accumulate in the very
occupations AI-exposure scores rate most automatable.

Output: figs/onet_chord/onet_interpersonal_inflow.png/.pdf
"""
from __future__ import annotations

import csv, math
from collections import Counter, defaultdict
from pathlib import Path

import matplotlib.patches as mpatches
import matplotlib.path as mpath
import matplotlib.patheffects as pe
import matplotlib.pyplot as plt
from matplotlib.colors import to_rgb
from matplotlib.collections import LineCollection
import numpy as np
import pandas as pd
import seaborn as sns

import sys
sys.path.insert(0, str(Path(__file__).resolve().parent.parent))
from pubstyle import apply_style, OKABE_ITO

HERE = Path(__file__).resolve().parent
XW = HERE.parent.parent / "usajobs_lmi_codex_public_dashboard" / "crosswalks"
SOC2_PALETTE = sns.color_palette("husl", n_colors=23)
SOC2_KEYS = ["11","13","15","17","19","21","23","25","27","29","31","33","35",
             "37","39","41","43","45","47","49","51","53","55"]
S2C = dict(zip(SOC2_KEYS, SOC2_PALETTE))
S2N = {"11":"Mgmt","13":"Business","15":"Computer & Math","17":"Arch. & Eng.","19":"Science",
       "21":"Social Svc","23":"Legal","25":"Education","27":"Arts/Media","29":"Healthcare",
       "31":"Health Supp","33":"Protective","35":"Food","37":"Cleaning","39":"Personal",
       "41":"Sales","43":"Office","45":"Farming","47":"Construction","49":"Repair",
       "51":"Production","53":"Transport","55":"Military"}
SINK = {"15","17"}
GAP_DEG = 1.2
N = 18


def s2(o): return o[:2]


def load():
    union = {}
    for b in ["llm_as_judge_onet_occ_pairs_validated.csv",
              "llm_as_judge_onet_occ_pairs_volume_validated.csv"]:
        with (XW/b).open() as f:
            for r in csv.DictReader(f):
                union[(r["occ8"], r["task_id"])] = r
    ts = pd.read_csv(XW/"onet_task_statements_27_2.csv", dtype=str)
    canon = ts.groupby("task_id")["occ8"].min().to_dict()
    m = pd.read_csv(XW/"task_wa_map_27_2.csv", dtype=str); m["wa_frac"]=m["wa_frac"].astype(float)
    a = m.groupby(["task_id","alm_category"])["wa_frac"].sum().reset_index()
    dom = a.loc[a.groupby("task_id")["wa_frac"].idxmax()].set_index("task_id")["alm_category"].to_dict()
    pc = pd.read_csv(XW/"task_category.csv", dtype=str).set_index("task_id")["primary_category"].to_dict()
    soct = pd.read_csv(XW/"llm_as_judge_onet_occ_pairs_validated.csv", dtype=str)\
            .drop_duplicates("occ8").set_index("occ8")["soc_title"].to_dict()
    return union, ts, canon, dom, pc, soct


def layout(all_occ):
    by = defaultdict(list)
    for o in all_occ:
        if s2(o) in S2C: by[s2(o)].append(o)
    present = [s for s in SOC2_KEYS if s in by]
    for s in present: by[s].sort()
    n = sum(len(by[s]) for s in present)
    gap = math.radians(GAP_DEG); usable = 2*math.pi - gap*len(present)
    ang, span = {}, {}; cur = math.pi/2
    for s in present:
        arc = usable*len(by[s])/n; span[s]=(cur,cur-arc)
        for i,o in enumerate(by[s]): ang[o]=cur-arc*(i+0.5)/len(by[s])
        cur -= arc+gap
    # rotate so the 15-17 block sits at the bottom (-90 deg)
    blk = [span[s] for s in ("15","17") if s in span]
    tgt = (max(b[0] for b in blk)+min(b[1] for b in blk))/2
    rot = -math.pi/2 - tgt
    ang = {o:a+rot for o,a in ang.items()}
    span = {s:(v[0]+rot, v[1]+rot) for s,v in span.items()}
    return ang, span, by, present


def quad(ta, tb, depth):
    PA=np.array([math.cos(ta),math.sin(ta)]); PB=np.array([math.cos(tb),math.sin(tb)])
    sv=PA+PB; nrm=np.linalg.norm(sv); ch=nrm/2
    bis=sv/nrm if nrm>1e-9 else np.array([-math.sin(ta),math.cos(ta)])
    C=bis*(2*(ch*depth)-ch); ts=np.linspace(0,1,N)
    return ((1-ts)**2)[:,None]*PA+(2*ts*(1-ts))[:,None]*C+(ts**2)[:,None]*PB


def main():
    apply_style()
    union, ts, canon, dom, pc, soct = load()
    all_occ = set(ts["occ8"]) | {o for o,_ in union} | set(canon.values())
    ang, span, by, present = layout(all_occ)

    CAT_COLOR = {"interp":OKABE_ITO["vermillion"], "mgmt":OKABE_ITO["orange"],
                 "other":"#c7cdd4"}
    def task_cat(t):
        if dom.get(t)=="NRC_Interpersonal": return "interp"
        if pc.get(t)=="Admin & Management": return "mgmt"
        return "other"

    # inflow edges into 15/17 for interpersonal/management tasks
    edges=[]
    for (o,t) in union:
        if s2(o) not in SINK: continue
        A=canon.get(t)
        if not A or A==o: continue
        cat=task_cat(t)
        if cat=="other": continue
        edges.append((A,o,cat))
    counts=Counter(c for _,_,c in edges)
    print(f"inflow edges into SOC-15/17 (interpersonal+mgmt): {len(edges)} "
          f"(interpersonal={counts['interp']}, mgmt={counts['mgmt']})")

    fig,ax=plt.subplots(figsize=(10,10)); ax.set_aspect("equal"); ax.set_axis_off()
    ax.set_xlim(-1.5,1.5); ax.set_ylim(-1.5,1.5); fig.patch.set_facecolor("white")

    segs,cols=[],[]
    for A,B,cat in edges:
        if A not in ang or B not in ang: continue
        pts=quad(ang[A],ang[B],0.55)
        c=CAT_COLOR[cat]; al=0.5 if cat=="interp" else 0.42
        rgb=to_rgb(c)
        for i in range(N-1):
            segs.append([pts[i],pts[i+1]]); cols.append([*rgb,al])
    ax.add_collection(LineCollection(segs,colors=cols,linewidths=0.5,zorder=2,
                                     rasterized=True,capstyle="butt"))

    R_RIM,R_BAND=1.0,1.06
    for s in present:
        th2,th1=span[s]; sink=s in SINK
        ax.add_patch(mpatches.Wedge((0,0),r=R_BAND,theta1=math.degrees(th1),
            theta2=math.degrees(th2),width=R_BAND-R_RIM,facecolor=S2C[s],
            edgecolor="white",linewidth=0.6,zorder=4,alpha=(1.0 if sink else 0.42)))
        mid=(th1+th2)/2
        ax.text(((R_RIM+R_BAND)/2)*math.cos(mid),((R_RIM+R_BAND)/2)*math.sin(mid),s,
            ha="center",va="center",fontsize=(8 if sink else 6),
            fontweight="bold",color=("black" if sink else "#888"),zorder=20,
            path_effects=[pe.withStroke(linewidth=1.3,foreground="white")])
        deg=((math.degrees(mid)+180)%360)-180; rot=deg if -90<deg<=90 else deg-180
        haf="left" if -90<deg<=90 else "right"
        ax.text(1.10*math.cos(mid),1.10*math.sin(mid),S2N.get(s,s),ha=haf,va="center",
            fontsize=(7.6 if sink else 5.2),fontweight=("bold" if sink else "normal"),
            color=("#111827" if sink else "#9aa0a6"),rotation=rot,rotation_mode="anchor",
            zorder=10,path_effects=[pe.withStroke(linewidth=1.2,foreground="white")])

    # emphasize sink occupations' rim dots
    for s in SINK:
        for o in by.get(s,[]):
            ax.scatter([1.0*math.cos(ang[o])],[1.0*math.sin(ang[o])],s=8,
                       color=S2C[s],edgecolor="#111827",linewidth=0.3,zorder=6)

    handles=[mpatches.Patch(color=OKABE_ITO["vermillion"],label=f"Non-routine interpersonal task inflow (n={counts['interp']})"),
             mpatches.Patch(color=OKABE_ITO["orange"],label=f"Admin & management task inflow (n={counts['mgmt']})")]
    ax.legend(handles=handles,loc="upper center",bbox_to_anchor=(0.5,0.07),
              fontsize=8,frameon=False)
    fig.text(0.5,0.97,"Interpersonal & management tasks filling into computer & engineering occupations",
             ha="center",fontsize=12,fontweight="semibold",color="#111827")
    fig.text(0.5,0.945,"Postings-confirmed migrations (RCA + high-volume) of the least-AI-automatable "
             "tasks, converging on the SOC-15/17 arc (bottom)",ha="center",fontsize=8,color="#6b7280")
    fig.savefig(HERE/"onet_interpersonal_inflow.png",dpi=450,bbox_inches="tight",pad_inches=0.02)
    fig.savefig(HERE/"onet_interpersonal_inflow.pdf",bbox_inches="tight",pad_inches=0.02)
    plt.close(fig); print("wrote onet_interpersonal_inflow.png + .pdf")


if __name__=="__main__":
    main()
