#!/usr/bin/env python3
"""Render any SOC6 comparison from the uncensored Figure_data Excel table."""
from argparse import ArgumentParser
from collections import defaultdict
from pathlib import Path
import sys,json,hashlib
import numpy as np
import openpyxl
import pandas as pd

def read_case(workbook,origin,destination=None):
    wb=openpyxl.load_workbook(workbook,read_only=True,data_only=True);ws=wb["Figure_data"]
    rows=ws.iter_rows(values_only=True);header=next(rows);ix={name:i for i,name in enumerate(header)}
    profiles=[];origin_vector={};onet_scores={};sst_shares={};sst_ranks={};dol_ranks={};titles={};overall=[];validation=[]
    for values in rows:
        values=values+(None,)*(len(header)-len(values));kind=values[ix["record_type"]];row_origin=values[ix["origin_code"]]
        if values[ix["origin_title"]]:titles[row_origin]=values[ix["origin_title"]]
        if values[ix["destination_code"]] and values[ix["destination_title"]]:titles[values[ix["destination_code"]]]=values[ix["destination_title"]]
        if kind=="task_profile":
            item=(row_origin,int(values[ix["task_id"]]),float(values[ix["profile_coordinate"]]),values[ix["task_label"]],values[ix["posting_frequency"]],bool(values[ix["canonical_in_origin"]]))
            profiles.append(item)
            if row_origin==origin:origin_vector[item[1]]=item
        elif kind=="onet_relation" and row_origin==origin:onet_scores[values[ix["destination_code"]]]=float(values[ix["relatedness_score"]])
        elif kind=="sst_transition" and row_origin==origin:
            dest=values[ix["destination_code"]];sst_shares[dest]=float(values[ix["transition_share"]]);sst_ranks[dest]=int(values[ix["rank"]])
        elif kind=="dol_transition" and row_origin==origin:dol_ranks[values[ix["destination_code"]]]=int(values[ix["rank"]])
        elif kind=="validation_top20" and row_origin==origin:validation.append({k:values[j] for k,j in ix.items()})
        elif kind=="overall_metric":overall.append({k:values[j] for k,j in ix.items()})
    from validation_replication import workbook_summary
    equal_length_summary=workbook_summary(workbook)
    wb.close()
    if len(validation)!=16:raise ValueError("Workbook requires sixteen frozen validation_top20 rows per origin; rebuild Figure_data")
    validation=pd.DataFrame(validation).rename(columns={'metric':'benchmark','validation_origin':'origin'})
    validation=validation[['benchmark','population','method','value','origins','origin','status']]
    validation['value']=pd.to_numeric(validation['value'],errors='coerce')
    if not origin_vector:raise ValueError(f"Origin {origin} has no task profile")
    task_scores=defaultdict(float)
    for code,task_id,coordinate,*_ in profiles:
        if task_id in origin_vector and code!=origin:task_scores[code]+=origin_vector[task_id][2]*coordinate
    task_list=sorted((d for d,v in task_scores.items() if v>0),key=lambda d:(-task_scores[d],d))
    onet_list=sorted(onet_scores,key=lambda d:(-onet_scores[d],d))
    task_top=task_list[:10];onet_top=onet_list[:10]
    if destination is None:
        unique=[d for d in task_top if d not in onet_top]
        if unique and sst_shares:destination=max(unique,key=lambda d:(sst_shares.get(d,0),-task_top.index(d)))
        elif unique and dol_ranks:destination=min(unique,key=lambda d:(dol_ranks.get(d,np.inf),task_top.index(d)))
        else:destination=task_top[0]
    destination_vector={t:(coord,label) for code,t,coord,label,*_ in profiles if code==destination}
    contributions=[]
    for task_id,item in origin_vector.items():
        if task_id in destination_vector:
            contribution=item[2]*destination_vector[task_id][0]
            if contribution>0:contributions.append({"task_id":task_id,"task_text":item[3],"similarity_contribution":contribution,"focal_posting_frequency":item[4] or 0,"canonical_in_focal":item[5]})
    tasks=pd.DataFrame(contributions).sort_values(["similarity_contribution","task_id"],ascending=[False,True],kind="stable")
    shared_task_count=len(tasks);pair_similarity=float(tasks.similarity_contribution.sum());tasks["share_of_pair_similarity"]=tasks.similarity_contribution/pair_similarity;tasks=tasks.head(5)
    sst_top=set(sorted(sst_shares,key=lambda d:(-sst_shares[d],d))[:10]);dol_top={d for d,r in dol_ranks.items() if r<=10}
    ranking=[]
    for method,dests,scores in [("task",task_top,task_scores),("onet_published",onet_top,onet_scores)]:
        for rank,dest in enumerate(dests,1):ranking.append({"method":method,"rank":rank,"destination":dest,"display_destination":dest,"destination_title":titles.get(dest,dest),"score":scores[dest],"sst_top10":dest in sst_top,"dol_top10":dest in dol_top,"sst_rank":sst_ranks.get(dest),"emsi_rank":dol_ranks.get(dest)})
    lists=pd.DataFrame(ranking);match=lists[(lists.method=="task")&lists.destination.eq(destination)]
    selected=match.iloc[0] if len(match) else pd.Series({"destination":destination,"rank":np.nan});onet_selected=lists[lists.method.eq("onet_published")].iloc[0]
    def metric(dests,kind):
        if kind=="SST share":return None if not sst_shares else sum(sst_shares.get(d,0) for d in dests)
        if kind=="SST rank":return None if not sst_shares else len(set(dests)&sst_top)/10
        return None if not dol_ranks else len(set(dests)&dol_top)/10
    ov10={};ov20={}
    for r in overall:
        target=ov10 if int(r["k"] or 10)==10 else ov20
        target.setdefault(r["metric"],{})[r["method"]]=r["value"]
    return {"equal_length_summary":equal_length_summary,"code":origin,"display_code":origin,"title":titles.get(origin,origin),"selection":"workbook; default shared-task example is selected using observed SST share (EMSI rank fallback)","validation":validation,"lists":lists,"selected":selected,"onet_selected":onet_selected,
     "task_sst_capture":metric(task_top,"SST share"),"onet_sst_capture":metric(onet_top,"SST share"),
     "task_sst_hits":None if metric(task_top,"SST rank") is None else round(10*metric(task_top,"SST rank")),"onet_sst_hits":None if metric(onet_top,"SST rank") is None else round(10*metric(onet_top,"SST rank")),
     "task_dol_hits":None if metric(task_top,"DOL rank") is None else round(10*metric(task_top,"DOL rank")),"onet_dol_hits":None if metric(onet_top,"DOL rank") is None else round(10*metric(onet_top,"DOL rank")),
     "origin_task_count":len(origin_vector),"destination_task_count":len(destination_vector),"shared_tasks":tasks,"shared_task_count":shared_task_count,"pair_similarity":pair_similarity,"overall_top10":ov10,"overall_top20":ov20}

def main():
    p=ArgumentParser();p.add_argument("workbook",type=Path);p.add_argument("output_directory",type=Path);p.add_argument("--origin",default="29-1141");p.add_argument("--destination");a=p.parse_args()
    import figure_rendering as builder
    case=read_case(a.workbook,a.origin,a.destination);slug=f"occupation_relatedness_{a.origin.replace('-','_')}"
    builder.render(case,out_dir=a.output_directory,slug_override=slug)
    metadata={k:case[k] for k in ['code','display_code','title','pair_similarity','shared_task_count','origin_task_count','destination_task_count','selection']}
    metadata.update(selected_destination=str(case['selected'].destination),onet_selected_destination=str(case['onet_selected'].destination),workbook_sha256=hashlib.sha256(a.workbook.read_bytes()).hexdigest())
    (a.output_directory/f'{slug}_case.json').write_text(json.dumps(metadata,indent=2)+'\n')
    print(a.output_directory/f"{slug}.pdf")

if __name__=="__main__":main()
