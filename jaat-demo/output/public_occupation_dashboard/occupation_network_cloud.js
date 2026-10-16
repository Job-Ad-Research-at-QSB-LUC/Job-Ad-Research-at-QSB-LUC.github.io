/* Interactive complement restricted to positive released-pair endpoints.
   Positions are deterministic and carry no similarity/relatedness information. */
(() => {
  'use strict';
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const pct=v=>v==null?'—':(v*100).toFixed(1)+'%';
  const number=v=>Number(v).toLocaleString(undefined,{maximumFractionDigits:1});
  const color=b=>b===1?'#c49a51':b===.5?'#8b6f9e':b===0?'#8eaa73':'#9aabb5';
  function hash(x){x=(x^(x>>>16))>>>0;x=Math.imul(x,0x7feb352d)>>>0;x=(x^(x>>>15))>>>0;x=Math.imul(x,0x846ca68b)>>>0;return ((x^(x>>>16))>>>0)/4294967296;}
  class TaskIncidenceCloud {
    constructor({canvas,tooltip,summary,note,size,onSelect}){
      Object.assign(this,{canvas,tooltip,summary,note,size,onSelect});this.ctx=canvas.getContext('2d');this.base=document.createElement('canvas');this.baseCtx=this.base.getContext('2d');this.points=[];this.zoom=1;this.offset=[0,0];this.keyboard=-1;this.hover=null;this.drag=null;
      size.onchange=()=>{this.setRadii();this.paint();this.publish();};
      canvas.addEventListener('pointerdown',e=>{this.drag={x:e.clientX,y:e.clientY,offset:[...this.offset],moved:false};canvas.setPointerCapture(e.pointerId);});
      canvas.addEventListener('pointermove',e=>{
        if(this.drag){const r=canvas.getBoundingClientRect(),dx=e.clientX-this.drag.x,dy=e.clientY-this.drag.y;if(Math.hypot(dx,dy)>4)this.drag.moved=true;if(this.drag.moved){this.offset=[this.drag.offset[0]+dx/r.width,this.drag.offset[1]+dy/r.height];this.hideTip();this.paint();}return;}
        this.lastPointer=[e.clientX,e.clientY];if(this.hoverFrame)return;this.hoverFrame=requestAnimationFrame(()=>{this.hoverFrame=null;this.inspectAt(...this.lastPointer);});
      });
      canvas.addEventListener('pointerup',e=>{const d=this.drag;this.drag=null;if(d&&!d.moved){const p=this.hit(e.clientX,e.clientY);if(p){this.inspect(p,e.clientX,e.clientY);this.onSelect(p.id);}}});
      canvas.addEventListener('pointercancel',()=>{this.drag=null;});canvas.addEventListener('pointerleave',()=>{if(!this.drag)this.hideTip();});canvas.addEventListener('blur',()=>this.hideTip());
      canvas.addEventListener('wheel',e=>{e.preventDefault();this.scale(e.deltaY<0?1.2:1/1.2);},{passive:false});
      canvas.addEventListener('keydown',e=>{
        if(!this.points.length)return;
        if(['ArrowRight','ArrowDown','ArrowLeft','ArrowUp','Home','End'].includes(e.key)){
          e.preventDefault();const n=this.points.length,step=e.shiftKey?10:1;
          this.keyboard=e.key==='Home'?0:e.key==='End'?n-1:(this.keyboard+(['ArrowLeft','ArrowUp'].includes(e.key)?-step:step)+n)%n;
          const p=this.points[this.keyboard];this.zoom=1;this.offset=[0,0];this.paint();const b=canvas.getBoundingClientRect();this.inspect(p,b.left+p.x*b.width,b.top+p.y*b.height);
        }else if((e.key==='Enter'||e.key===' ')&&this.hover){e.preventDefault();this.onSelect(this.hover.id);}
        else if(e.key==='Escape')this.hideTip();
      });
      new ResizeObserver(()=>this.paint()).observe(canvas);
    }
    loading(){this.current=null;this.points=[];this.hover=null;this.keyboard=-1;this.summary.textContent='Loading task incidence…';this.note.textContent='';this.tooltip.hidden=true;this.paint();if(window.atlasState)window.atlasState.cloud=null;}
    update(current,profile,tasks,visible){this.profile=profile;
      this.current=current;this.profile=profile;this.tasks=tasks;this.visible=new Set(visible.map(Number));this.total=Object.values(profile.weighted_marginals||{}).reduce((s,n)=>s+n,0);
      this.linked=new Set(profile.edges.filter(e=>e[2]>0).flatMap(e=>e.slice(0,2)));
      const other=profile.marginals.filter(([id])=>this.linked.has(Number(id))&&!this.visible.has(Number(id)));
      this.excluded=profile.marginals.filter(([id])=>!this.linked.has(Number(id))).map(([id])=>Number(id));
      this.mass=other.reduce((s,[id])=>s+(profile.weighted_marginals?.[id]||0),0);this.incidenceShare=this.total?this.mass/this.total:null;
      this.points=other.map(([id,n])=>{const u=hash(Number(id)*2+1),v=hash(Number(id)*2+2),rad=.45*Math.sqrt(u),angle=v*Math.PI*2;return {id:Number(id),n,w:profile.weighted_marginals[id],x:.5+rad*Math.cos(angle),y:.5+rad*Math.sin(angle),r:1.2};});
      this.zoom=1;this.offset=[0,0];this.hover=null;this.keyboard=-1;this.tooltip.hidden=true;this.setRadii();
      this.summary.innerHTML=current.state==='none'?'<strong>No posting sample</strong><span>Task incidence is unavailable.</span>':`<strong>${number(other.length)} additional linked task IDs</strong><span>${pct(this.incidenceShare)} of all weighted task incidence</span>`;
      if(current.state!=='none'){
        const st=profile.linked_cloud;
        const standardized=st?.linked_expected_ids_200==null?'200-job breadth unavailable for this view':current.n_sample_jobs<200?'200-job breadth unavailable: fewer than 200 sampled jobs':`${Math.round(st?.linked_expected_ids_200||0)} expected linked IDs in 200 jobs (core + cloud)`;
        this.summary.innerHTML+=`<span title="Same 200-job observation effort; the eligible vocabulary is fixed by the full-sample released pair graph. Not a re-estimated 200-job network.">${standardized}</span><span>${number(this.excluded.length)} unlinked IDs hidden; ${pct(st?.unlinked_incidence_share)} of all incidence</span>`;
        if(st?.common_pair1pct_eligible)this.summary.innerHTML+=`<span title="Pairs occur in at least 1% of sampled jobs. Available only at n≥5,000, ensuring completeness under the 50-job release threshold. Same 200-job detection effort within that vocabulary.">Common 1% pair cutoff: ${Math.round(st.common_pair1pct_expected200)} expected IDs / 200 jobs</span>`;
      }
      this.note.textContent=current.state==='none'?'The canonical list remains available below.':other.length?'Only tasks with a positive released pair link are shown. Zero-degree tasks are hidden. Pair-release thresholds mean hidden tasks are not proven isolates. Cloud positions do not imply similarity.':'No additional linked tasks. Unlinked tasks are hidden from the diagrams but remain in the complete task table.';
      if(current.state!=='none')this.note.textContent+=' Canonical and reviewed tasks are available in the public edition. Other tasks have not been reviewed; their details are available only in this private edition.';
      this.canvas.setAttribute('aria-label',current.state==='none'?'No observed posting-task cloud':`${current.occupation_title}: ${other.length} additional linked tasks, ${pct(this.incidenceShare)} of weighted task incidence. Arrow keys browse by sampled frequency; Enter opens a task.`);
      this.paint();this.publish();
    }
    setRadii(){const max=Math.max(1,...this.points.map(p=>Math.log1p(p.w)));for(const p of this.points)p.r=this.size.value==='equal'?1.2:Math.sqrt(.64+9*Math.log1p(p.w)/max);this.drawOrder=[...this.points].sort((a,b)=>a.r-b.r);}
    publish(){if(!window.atlasState||!this.current)return;window.atlasState.cloud={code:this.current.code,ids:this.points.map(p=>p.id),excludedIds:this.excluded,incidenceShare:this.incidenceShare,incidenceMass:this.mass,totalIncidence:this.total,zoom:this.zoom,points:this.points.map(({id,x,y,r})=>({id,x,y,r}))};}
    xy(p){return [(.5+(p.x-.5)*this.zoom+this.offset[0])*400,(.5+(p.y-.5)*this.zoom+this.offset[1])*400];}
    paint(){
      const box=this.canvas.getBoundingClientRect();if(!box.width)return;const dpr=Math.min(devicePixelRatio||1,2),px=Math.round(box.width*dpr);
      if(this.canvas.width!==px||this.canvas.height!==px){this.canvas.width=px;this.canvas.height=px;}
      const c=this.ctx;c.setTransform(px/400,0,0,px/400,0,0);c.clearRect(0,0,400,400);c.fillStyle='#f7f9fa';c.beginPath();c.arc(200,200,187,0,Math.PI*2);c.fill();
      if(!this.points.length){c.font='15px Arial';c.fillStyle='#586975';c.textAlign='center';c.fillText(!this.current?'Loading…':this.current.state==='none'?'Posting incidence unavailable':'No additional linked tasks',200,200);return;}
      for(const p of this.drawOrder){const [x,y]=this.xy(p);if(x<-20||x>420||y<-20||y>420)continue;const t=this.tasks[p.id],r=p.r*this.zoom;c.globalAlpha=.65;
        if((this.current.code.length===7?t.home?.slice(0,7)===this.current.code:t.home===this.current.code)){c.globalAlpha=.95;c.beginPath();c.arc(x,y,r+1.8,0,Math.PI*2);c.fillStyle='white';c.fill();c.strokeStyle='#183247';c.lineWidth=.7;c.setLineDash(t.type==='Core'?[]:t.type==='Supplemental'?[3,2]:[1,2]);c.stroke();c.setLineDash([]);}
        c.fillStyle=color(t.beta);c.beginPath();if(t.beta===.5)c.rect(x-r,y-r,r*2,r*2);else if(t.beta===0){c.moveTo(x,y-r*1.25);c.lineTo(x+r*1.25,y);c.lineTo(x,y+r*1.25);c.lineTo(x-r*1.25,y);c.closePath();}else c.arc(x,y,r,0,Math.PI*2);c.fill();
      }
      c.globalAlpha=1;this.base.width=px;this.base.height=px;this.baseCtx.drawImage(this.canvas,0,0);this.highlight();this.publish();
    }
    highlight(){
      const c=this.ctx,px=this.canvas.width;c.setTransform(1,0,0,1,0,0);c.clearRect(0,0,px,px);c.drawImage(this.base,0,0);c.setTransform(px/400,0,0,px/400,0,0);
      if(this.hover){const [x,y]=this.xy(this.hover);c.strokeStyle='#183247';c.lineWidth=2;c.beginPath();c.arc(x,y,this.hover.r*this.zoom+5,0,Math.PI*2);c.stroke();}
    }
    hit(clientX,clientY){const box=this.canvas.getBoundingClientRect(),x=(clientX-box.left)/box.width*400,y=(clientY-box.top)/box.height*400;let best=null,dist=Infinity;for(const p of this.points){const [px,py]=this.xy(p),d=Math.hypot(px-x,py-y);if(d<=Math.max(6,p.r*this.zoom+2)&&d<dist){best=p;dist=d;}}return best;}
    inspectAt(x,y){const p=this.hit(x,y);if(p)this.inspect(p,x,y);else this.hideTip();}
    inspect(p,x,y){
      this.hover=p;const t=this.tasks[p.id],member=(this.current.code.length===7?t.home?.slice(0,7)===this.current.code:t.home===this.current.code)?'O*NET-linked '+(t.type||'(type unavailable)'):'Not O*NET-linked';
      this.tooltip.dataset.task=String(p.id);this.tooltip.innerHTML=`<strong>Task ${p.id} · ${esc(member)}</strong><span>${esc(t.text)}</span><span>${number(p.n)} sampled job-months; ${pct(p.n/this.current.n_sample_jobs)} of sampled jobs.</span><span>Weighted incidence: ${number(p.w)} job-months; ${pct(p.w/this.current.job_weight_mass)} of occupation jobs.</span><span>${pct(p.w/this.total)} of all weighted task incidence.</span><small>Assignment status: ${esc((this.current.code.length===7?t.home?.slice(0,7)===this.current.code:t.home===this.current.code)?"O*NET-linked task":this.profile?.review_status?.[p.id]==="reviewed_yes"?"Reviewed and retained":this.profile?.review_status?.[p.id]==="unreviewed"?"Unreviewed; support alone does not validate the assignment":"See task table")}. Click for other occupations with this task.</small>`;
      this.tooltip.hidden=false;const r=this.tooltip.getBoundingClientRect();this.tooltip.style.left=Math.max(8,Math.min(innerWidth-r.width-8,x+15))+'px';this.tooltip.style.top=Math.max(8,Math.min(innerHeight-r.height-8,y+15))+'px';this.highlight();
    }
    hideTip(){this.tooltip.hidden=true;if(this.hover){this.hover=null;if(this.points.length)this.highlight();}}
    scale(f){if(!this.points.length)return;this.zoom=Math.max(1,Math.min(6,this.zoom*f));if(this.zoom===1)this.offset=[0,0];this.hideTip();this.paint();this.publish();}
    reset(){this.zoom=1;this.offset=[0,0];this.hideTip();this.paint();this.publish();}
    svg(){
      // Export the complete overview of the same complement, independent of pan/zoom.
      if(!this.current||!this.points.length)return '<text x="200" y="200" text-anchor="middle" font-size="15">'+(this.current?.state==='none'?'Posting incidence unavailable':'No additional linked tasks')+'</text>';
      return this.drawOrder.map(p=>{const t=this.tasks[p.id],x=p.x*400,y=p.y*400,r=p.r,fill=color(t.beta);let ring=(this.current.code.length===7?t.home?.slice(0,7)===this.current.code:t.home===this.current.code)?`<circle cx="${x}" cy="${y}" r="${r+1.8}" fill="white" stroke="#183247" stroke-width=".7" stroke-dasharray="${t.type==='Core'?'':t.type==='Supplemental'?'3 2':'1 2'}"/>`:'';
        let mark=t.beta===.5?`<rect x="${x-r}" y="${y-r}" width="${r*2}" height="${r*2}" fill="${fill}"/>`:t.beta===0?`<path d="M${x},${y-r*1.25} L${x+r*1.25},${y} L${x},${y+r*1.25} L${x-r*1.25},${y} Z" fill="${fill}"/>`:`<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}"/>`;
        return `<g data-cloud-task="${p.id}" opacity=".65"><title>${esc(t.text)}; ${p.n} sampled job-months; ${pct(p.w/this.current.job_weight_mass)} of weighted jobs</title>${ring}${mark}</g>`;
      }).join('');
    }
  }
  window.TaskIncidenceCloud=TaskIncidenceCloud;
})();
