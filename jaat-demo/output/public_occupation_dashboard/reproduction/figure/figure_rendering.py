"""Compact figure: physical-inch grid, minimum 7-point text, unchanged inputs."""
from pathlib import Path
import json
import pandas as pd
import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
from matplotlib.patches import FancyBboxPatch, FancyArrowPatch, Rectangle
from matplotlib.textpath import TextPath
from matplotlib.font_manager import FontProperties

def render(c, out_dir, slug_override=None):
    O=Path(out_dir); O.mkdir(parents=True,exist_ok=True)
    slug=slug_override or 'occupation_relatedness'
    tasks=c['shared_tasks'].head(3)
    lists=c['lists']; lists=lists[lists['rank']<=5]
    rows=pd.DataFrame(c['equal_length_summary']).set_index('dataset')
    W,H=7.5,5.2
    BLUE='#007DB3';RED='#C84950';INK='#213442';GRAY='#61717C';PURPLE='#69567B';LINE='#D5DFE5'
    plt.rcParams.update({'font.family':'DejaVu Sans','pdf.fonttype':42,'svg.fonttype':'none'})
    fig=plt.figure(figsize=(W,H),dpi=150);ax=fig.add_axes([0,0,1,1]);ax.set(xlim=(0,W),ylim=(H,0));ax.axis('off')
    def text(x,y,s,size=7,color=INK,bold=False,ha='left',va='top',**kw):
     return ax.text(x,y,s,fontsize=size,color=color,fontweight='bold' if bold else 'normal',ha=ha,va=va,linespacing=1.13,**kw)
    def wrap(s,width,bold=False):
     prop=FontProperties(family='DejaVu Sans',size=7,weight='bold' if bold else 'normal');out=[];line=''
     for word in s.split():
      trial=(line+' '+word).strip()
      if line and TextPath((0,0),trial,prop=prop).get_extents().width>width*72:out.append(line);line=word
      else:line=trial
     return '\n'.join(out+[line])
    def box(x,y,w,h,fc='white',ec=LINE,lw=.7):
     ax.add_patch(FancyBboxPatch((x,y),w,h,boxstyle='round,pad=0,rounding_size=0.035',facecolor=fc,edgecolor=ec,lw=lw))
    def arrow(points,col):
     width=.55 if col==RED else .85
     if len(points)>2:ax.plot(*zip(*points[:-1]),color=col,lw=width,zorder=1)
     ax.add_patch(FancyArrowPatch(points[-2],points[-1],arrowstyle='-|>',mutation_scale=7,lw=width,color=col,zorder=2))
    # Source occupation and TitleMatch: regular cards, no speech-bubble geometry.
    box(.12,.16,1.13,1.18,'#F7F0F0',INK)
    text(.685,.30,'A  SOC-O*NET\noccupation',8,bold=True,ha='center')
    text(.685,.68,'29-1141.00' if c['display_code']=='29-1141' else c['display_code'],8,bold=True,ha='center')
    text(.685,.91,c['title'],ha='center')
    text(.685,1.03,'Includes 5 RN\nspecialties',size=7,ha='center')
    box(.12,1.63,1.13,2.05,'#F0F5F8',INK)
    if c.get('source_note_lines'):
     text(.23,1.76,'USAJOBS',8,bold=True)
     text(.23,2.02,'\n'.join(wrap(line,.92) for line in c['source_note_lines']),size=7)
    else:
     text(.23,1.76,'TitleMatch',8,bold=True)
     text(.23,2.02,f"{c['sample_job_months']:,} sampled\njob-months")
     text(.23,2.30,'Oct 2024–Sep 2025',color=GRAY)
     text(.23,2.50,'Example posting\ntitle:',bold=True)
     text(.23,2.80,wrap('“'+c['titlematch_input']+'”',.92))
     text(.23,3.40,'Code: 29-1141.00\nSimilarity: 94.2%')
    arrow([(.685,1.34),(.685,1.63)],INK)
    # Posting model: clean single task cards, one heading, contribution on its own line.
    box(1.43,.16,2.35,3.52,'#F1F7FB',BLUE,.9)
    text(1.61,.30,'B  Posting-task model',8.5,BLUE,True)
    text(1.74,.58,'TaskMatch',7.5,PURPLE,True)
    text(3.44,.59,'Contribution',7,BLUE,ha='right')
    # Restore the central-node network. Edges show shared-task membership.
    for nx in [1.51,3.70]:
     ax.scatter([nx],[1.86],s=32,color=BLUE,zorder=5)
    for yy in [1.14,1.86,2.58]:
     ax.plot([1.51,1.74],[1.86,yy],color=BLUE,lw=.85,zorder=2)
     ax.plot([3.44,3.70],[yy,1.86],color=BLUE,lw=.85,zorder=2)
    excerpts={7520:'Confer with health departments, … health safety standards …',17223:'Design, implement, or evaluate health service delivery systems…',1864:'Consult with institutions or associations … profession of nursing.'}
    def task_label(t, bold):
     label=wrap(excerpts.get(t.task_id,str(t.task_text)),1.50,bold)
     lines=label.split('\n')
     if len(lines)>3: label='\n'.join(lines[:2]+[lines[2].rsplit(' ',1)[0]+' …'])
     return label
    for y,t in zip([.82,1.54,2.26],tasks.itertuples()):
     box(1.74,y,1.70,.64,'white','#CAD6DE',.55)
     bold=not t.canonical_in_focal
     text(1.84,y+.08,str(t.task_id),7,PURPLE,bold)
     text(3.34,y+.08,f'{t.share_of_pair_similarity:.2%}',7,BLUE,True,ha='right')
     text(1.84,y+.25,task_label(t, bold),7,PURPLE,bold)
    text(1.61,3.00,("3 shared tasks shown (public subset)" if c.get("public_explanation") else f"3 of {c['shared_task_count']:,} shared task IDs shown"),color=GRAY)
    text(1.61,3.15,f"Mean cosine: {c['pair_similarity']:.2f}")
    text(1.61,3.28,f"Shown tasks: {tasks.share_of_pair_similarity.sum():.2%} of similarity")
    text(1.61,3.43,'Bold: Not a task O*NET assigns\nto origin occupation',color=GRAY)
    arrow([(1.25,1.86),(1.51,1.86)],BLUE)
    # Shared rank baselines across C and D; rows 2 and 3 allow two-line titles.
    rank_y = [.54, .992, 1.556, 2.120, 2.572] if not c.get('source_note_lines') else [.54, .98, 1.53, 2.03, 2.64]
    for x,method,col,letter,title in [(3.96,'task',BLUE,'C','Posting-task top 5'),(5.73,'onet_published',RED,'D','O*NET top 5')]:
     box(x,.16,1.65,2.86)
     text(x+.10,.30,letter+'  '+title,8,col,True)
     for i,r in enumerate(lists[lists.method==method].sort_values('rank').itertuples()):
      y=rank_y[i]
      selected=method=='task' and str(r.destination)==str(c['selected']['destination'])
      title=str(r.destination_title).replace('Licensed Practical and Licensed Vocational Nurses','Licensed Practical / Vocational Nurses')
      label=wrap(title,1.34,selected);n=label.count('\n')+1
      if selected:box(x+.04,y-.035,1.57,n*.112+.29,'#E7F2F9','#E7F2F9',0)
      text(x+.10,y,str(r.rank),color=GRAY)
      text(x+.23,y,label,bold=selected)
      text(x+.23,y+n*.112+.018,str(r.display_destination),color=GRAY)
      badges=[]
      for lab,field in [('SST','sst_rank'),('EMSI','emsi_rank')]:
       rank=getattr(r,field,float('nan'))
       if pd.notna(rank) and 1<=rank<=20:badges.append(f'{lab}{int(rank)}')
      if badges:text(x+.23,y+n*.112+.15,' · '.join(badges),color=col,size=7)
      if selected:arrow([(3.70,1.86),(3.96,y+.19)],BLUE)
    # Standard-model path stays visually subordinate to the worked example.
    box(3.96,3.17,3.42,.51,'#FAF2F2',RED,.8)
    text(4.07,3.25,'E  O*NET model',8,RED,True)
    text(5.16,3.25,'27 RN tasks → 37 DWAs (O*NET 30.0)')
    text(4.07,3.43,'Task/DWA text + title + knowledge-profile similarity; expert review')
    arrow([(6.56,3.17),(6.56,3.02)],RED)
    arrow([(.12,.98),(.045,.98),(.045,3.82),(3.84,3.82),(3.84,3.42),(3.96,3.42)],RED)
    # Separate the worked example from the aggregate evidence without adding height.
    ax.plot([.12,7.38],[3.92,3.92],color=LINE,lw=.7)
    # Bottom panels: one baseline grid; retain all benchmark inputs.
    text(.12,4.00,'F  Posting-task allocation',8,bold=True)
    text(.12,4.19,"Outside O*NET's\nDWA assignments",color=GRAY)
    for x,key in zip([.38,.94,1.50],['SOC 6','SOC 4','SOC 2']):
     v=c['dwa_allocation_outside_share'][key]
     ax.add_patch(Rectangle((x-.22,4.82-.40*v),.44,.40*v,color=PURPLE,lw=0))
     text(x,4.82-.20*v,f'{v:.0%}',color='white',bold=True,ha='center',va='center')
     text(x,4.87,key,ha='center',color=GRAY)
    # Draft G: percentages; blue identifies posting-derived representations.
    comparison=c.get('representation_summary')
    if comparison is None:comparison=pd.read_csv(Path(__file__).with_name('figure_representation_summary.csv'))
    ci=pd.DataFrame(comparison).set_index(['dataset','model'])
    for x in [1.82,4.03]:ax.plot([x,x],[4.00,4.99],color=LINE,lw=.6)
    text(1.94,4.00,'G  Mean recovery',8,bold=True)
    text(3.27,4.23,'SST',ha='right',bold=True)
    text(3.91,4.23,'EMSI',ha='right',bold=True)
    colors={'onet':RED,'task':BLUE,'dwa':BLUE,'random':BLUE}
    models=[('onet','O*NET lists'),('task','Posting tasks'),('dwa','Tasks → DWAs')]
    ys=[4.45,4.65,4.85]
    for y,(model,label) in zip(ys,models):
     text(1.94,y,label,color=colors[model],va='center',bold=model=='task')
     for ds,xnum in [('SST',3.27),('Emsi',3.91)]:
      r=ci.loc[(ds,model)]
      text(xnum,y,f"{r['mean']:.0%}",ha='right',va='center',color=colors[model],bold=model=='task')
    text(4.15,4.00,'H  Recovery by origin',8,bold=True)
    mixed='#80649D'
    for x,y,label,col in [(4.15,4.23,'■ Posting tasks',BLUE),(5.34,4.23,'■ O*NET',RED),(6.14,4.23,'■ Equal',GRAY),(6.86,4.23,'■ Mixed',mixed)]:text(x,y,label,color=col)
    def stack(y,counts,n):
     left=5.25
     for count,col in zip(counts,[BLUE,'#E1E5E9',RED,mixed]):
      share=count/n;w=2.13*share
      ax.add_patch(Rectangle((left,y-.058),w,.116,facecolor=col,edgecolor='white',lw=.3))
      if share>=.045:text(left+w/2,y,f'{share*100:.0f}',color=GRAY if col=='#E1E5E9' else 'white',ha='center',va='center',bold=True)
      left+=w
    for y,ds,label in zip([4.47,4.66],['SST','Emsi'],['SST','EMSI']):
     r=rows.loc[ds]
     text(4.15,y,f'{label}  {int(r.more)}/{int(r.origins)}',va='center')
     stack(y,[r.more,r.ties,r.less,0],r.origins)
    total=c.get('unique_total', {'Posting tasks':495,'Equal':8,'O*NET':130,'Mixed':35,'total':668})
    ax.plot([4.15,7.38],[4.78,4.78],color=LINE,lw=.6)
    text(4.15,4.89,f"Unique  {total['Posting tasks']}/{total['total']}",va='center')
    stack(4.89,[total[k] for k in ['Posting tasks','Equal','O*NET','Mixed']],total['total'])
    fig.set_size_inches(W,5.00);ax.set_ylim(5.00,0)
    fig.canvas.draw()
    renderer=fig.canvas.get_renderer()
    collisions=[]
    for i,a in enumerate(ax.texts):
     for b in ax.texts[i+1:]:
      aa=a.get_window_extent(renderer);bb=b.get_window_extent(renderer)
      if aa.overlaps(bb):collisions.append([a.get_text(),b.get_text()])
    (O/f'{slug}_text_overlap_check.json').write_text(json.dumps(collisions,indent=2))
    for ext in ['pdf','svg','png']:fig.savefig(O/f'{slug}.{ext}',dpi=300)
    plt.close(fig)

    c['lists'].to_csv(O/f'{slug}_top10.csv',index=False)
    c['shared_tasks'].to_csv(O/f'{slug}_shared_tasks.csv',index=False)
    c['validation'].to_csv(O/f'{slug}_top20_validation.csv',index=False)
    pd.DataFrame(c['equal_length_summary']).to_csv(O/f'{slug}_equal_length_summary.csv',index=False)
    return slug
