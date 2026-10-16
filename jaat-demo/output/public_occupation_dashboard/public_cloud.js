/* Public cloud adapter. Anonymous dots are synthesized from aggregate bins only. */
(() => {
  const Base=window.TaskIncidenceCloud;
  const pct=v=>v==null?'—':(100*v).toFixed(1)+'%';
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  window.TaskIncidenceCloud=class PublicTaskCloud extends Base {
    constructor(options){super({...options,onSelect:id=>{if(!String(id).startsWith('anonymous-'))options.onSelect(id)}})}
    update(current,profile,tasks,visible){
      this.current=current;this.profile=profile;this.visible=new Set(visible.map(Number));this.tasks={...tasks};
      const data=profile.public_cloud||{permitted_linked_ids:[],anonymous_bins:[],unlinked_count:0};
      this.total=Object.values(profile.weighted_marginals||{}).reduce((sum,v)=>sum+v,0);this.excluded=[];
      const top20=new Set(profile.marginals.map(r=>r[0]).sort((a,b)=>(profile.weighted_marginals[b]||0)-(profile.weighted_marginals[a]||0)||a-b).slice(0,20));
      const beyond=data.permitted_linked_ids.filter(id=>!this.visible.has(id));
      const known=beyond.filter(id=>top20.has(id));
      const limited=beyond.filter(id=>!top20.has(id));
      this.limitedCount=limited.length+(data.undisplayed_linked_count||0);
      const counts=Object.fromEntries(profile.marginals||[]);
      this.points=known.map(id=>({id,n:counts[id],w:profile.weighted_marginals[id],r:1.2}));
      for(let i=0;i<this.limitedCount;i++){const id='anonymous-limited-'+i;this.tasks[id]={text:'Outside the top-20 exploration limit'};this.points.push({id,anonymous:true,limited:true,band:1,r:1.2});}
      this.anonymousCount=0;
      for(const bin of data.anonymous_bins){for(let i=0;i<bin.count;i++){
        const id='anonymous-'+(++this.anonymousCount);
        this.tasks[id]={home:null,type:null,text:'Not reviewed—task details not released'};
        this.points.push({id,anonymous:true,band:bin.size,r:1.2});
      }}
      // Neither seed nor order contains original task IDs, frequencies, ranks or private coordinates.
      let seed=[...current.code].reduce((s,c)=>Math.imul(s,31)+c.charCodeAt(0),71)>>>0;
      const random=()=>{seed=(Math.imul(1664525,seed)+1013904223)>>>0;return seed/4294967296};
      for(const p of this.points){const radius=.45*Math.sqrt(random()),angle=2*Math.PI*random();p.x=.5+radius*Math.cos(angle);p.y=.5+radius*Math.sin(angle)}
      this.mass=null;this.incidenceShare=null;
      this.zoom=1;this.offset=[0,0];this.hover=null;this.keyboard=-1;this.tooltip.hidden=true;this.setRadii();
      this.summary.innerHTML=current.state==='none'?'<strong>No posting sample</strong><span>The O*NET task list is available below.</span>':`<strong>${this.points.length.toLocaleString()} additional linked task IDs</strong><span>${known.length} clickable top-20 tasks · ${this.limitedCount} other public tasks outside the top 20 · ${this.anonymousCount.toLocaleString()} tasks with details withheld</span>`;
      this.note.textContent='Each dot is a task with at least one retained co-occurrence link in this occupation, outside the network currently shown. This is a linked-task subset of the posting evidence, not a count of all tasks used by the relatedness model. Teal outlined dots can be explored and belong to the top 20 public posting tasks by posting percentage. Gray dots cannot be explored here: they are outside that top 20 or their details are withheld. Public tasks outside the top 20 use a uniform dot size; withheld tasks use coarse size bands. Positions are synthetic, not similarities.';
      this.canvas.setAttribute('aria-label',`${current.occupation_title}: ${this.points.length} additional linked tasks; ${known.length} clickable top-20 tasks; ${this.limitedCount} public tasks outside the limit; ${this.anonymousCount} tasks with details withheld. Arrow keys browse dots; Enter opens teal tasks only.`);
      this.paint();this.publish();
    }
    setRadii(){
      const max=Math.max(1,...this.points.filter(p=>!p.anonymous).map(p=>Math.log1p(p.w||0)));
      for(const p of this.points)p.r=this.size.value==='equal'?1.2:p.anonymous?[1,1.65,2.3,3][p.band]:Math.sqrt(.64+9*Math.log1p(p.w||0)/max);
      this.drawOrder=[...this.points].sort((a,b)=>Number(!a.anonymous)-Number(!b.anonymous)||a.r-b.r);
      for(const p of this.points)if(!p.anonymous)p.r=Math.max(3,p.r);
    }
    inspect(p,x,y){
      if(!p.anonymous){super.inspect(p,x,y);this.tooltip.innerHTML=this.tooltip.innerHTML.replace('of all weighted task incidence.','of publicly identified task incidence.');return}
      this.hover=p;this.tooltip.innerHTML=p.limited?'<strong>Outside the top-20 exploration limit</strong><span>This dot represents another public linked task. Only the top 20 public posting tasks can be explored in this cloud.</span>':'<strong>Task details withheld</strong><span>This task’s identity and individual frequency are not released.</span><small>The cloud preserves aggregate breadth. Select a permitted task to read its statement.</small>';
      this.tooltip.hidden=false;const r=this.tooltip.getBoundingClientRect();
      this.tooltip.style.left=Math.max(8,Math.min(innerWidth-r.width-8,x+15))+'px';this.tooltip.style.top=Math.max(8,Math.min(innerHeight-r.height-8,y+15))+'px';this.highlight();
    }
    publish(){if(!window.atlasState||!this.current)return;window.atlasState.cloud={code:this.current.code,ids:this.points.filter(p=>!p.anonymous).map(p=>p.id),anonymousCount:this.anonymousCount,limitedCount:this.limitedCount,incidenceShare:this.incidenceShare,totalIncidence:this.total,zoom:this.zoom,points:this.points.map(p=>p.anonymous?{anonymous:true,x:p.x,y:p.y,r:p.r}:{id:p.id,x:p.x,y:p.y,r:p.r})}}
    paint(){
      const box=this.canvas.getBoundingClientRect();if(!box.width)return;const px=Math.round(box.width*Math.min(devicePixelRatio||1,2));
      if(this.canvas.width!==px||this.canvas.height!==px){this.canvas.width=px;this.canvas.height=px;}
      const c=this.ctx;c.setTransform(px/400,0,0,px/400,0,0);c.clearRect(0,0,400,400);c.fillStyle='#f7f9fa';c.beginPath();c.arc(200,200,187,0,Math.PI*2);c.fill();
      if(!this.points.length){c.font='15px Arial';c.fillStyle='#586975';c.textAlign='center';c.fillText(!this.current?'Loading…':this.current.state==='none'?'Posting incidence unavailable':'No additional linked tasks',200,200);return;}
      for(const p of this.drawOrder){const [x,y]=this.xy(p),r=p.r*this.zoom;c.globalAlpha=p.anonymous?.55:1;c.fillStyle=p.anonymous?'#bac3ca':'#27858c';c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();if(!p.anonymous){c.strokeStyle='#183247';c.lineWidth=1.2;c.stroke();}}
      c.globalAlpha=1;this.base.width=px;this.base.height=px;this.baseCtx.drawImage(this.canvas,0,0);this.highlight();this.publish();
    }
    svg(){
      if(!this.current||!this.points.length)return '';
      return this.drawOrder.map(p=>{const x=p.x*400,y=p.y*400,r=p.r;
        return p.anonymous?`<circle cx="${x}" cy="${y}" r="${r}" fill="#bac3ca" opacity=".55"/>`:`<g data-cloud-task="${p.id}"><title>${esc(this.tasks[p.id].text)}; click to inspect</title><circle cx="${x}" cy="${y}" r="${r}" fill="#27858c" stroke="#183247" stroke-width="1.2"/></g>`;
      }).join('');
    }
  };
})();
