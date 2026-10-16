/* Equal-length validation: benchmark-specific frozen lists and unchanged outcomes. */
window.renderEqualLengthValidation=function(code){
 const d=window.OCCUPATION_BENCHMARKS?.equal_length;if(!d)return '';
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const pct=v=>(v*100).toFixed(1)+'%';
 const records={...(d.occupations[code.slice(0,7)]||{}),...(d.occupations[code]||{})};
 const row=r=>`<tr><th>${esc(r.benchmark)}</th><td>${r.origins}</td><td class="task-value">${pct(r.task)}</td><td class="onet-value">${pct(r.onet_published)}</td><td>${r.more} / ${r.origins} (${pct(r.share_more)})</td><td>${r.ties}</td><td>${r.mean_k.toFixed(1)} (${r.min_k}–${r.max_k})</td></tr>`;
 const table=mode=>`<div class="bm-scroll"><table class="bm-survey-table"><thead><tr><th>Benchmark</th><th>Origins</th><th>Posting tasks</th><th>O*NET published</th><th>Posting tasks recover more</th><th>Ties</th><th>Mean matched length (range)</th></tr></thead><tbody>${d.summary.filter(r=>r.mode===mode&&d.primary.includes(r.dataset)).map(row).join('')}</tbody></table></div>`;
 const focal=d.primary.map(ds=>{const r=records[ds];return `<tr><th>${esc(d.labels[ds])}</th>${r?`<td>${r.matched_k} each</td><td class="task-value">${pct(r.values['Posting-task'])}</td><td class="onet-value">${pct(r.values['O*NET'])}</td><td>${r.candidate_destinations}</td><td>${r.task_returned} / ${r.onet_returned}</td>`:'<td colspan="5">Unavailable: no eligible mapped origin</td>'}</tr>`}).join('');
 return `<section class="bm-equal"><h3>Comparison with observed transitions</h3><p>Both models receive the same number of recommendations for each origin and benchmark: the smaller available list, capped at 20. Rankings and outcome denominators stay fixed. Blue is posting tasks; brick is published O*NET.</p><h4>Selected occupation · ${esc(code)}</h4><div class="bm-scroll"><table class="bm-survey-table"><thead><tr><th>Benchmark</th><th>Recommendations</th><th>Posting tasks</th><th>O*NET published</th><th>Candidate destinations</th><th>Available up to 20<br>Tasks / O*NET</th></tr></thead><tbody>${focal}</tbody></table></div><h4>All occupations · one comparison per origin</h4>${table('equal_length')}<p class="bm-scope">SST and survey scores are captured transition shares; EMSI is recovery of its original top 20 destinations. Ties remain in the count denominator. Zero-length pairs are excluded from equal-length summaries. These are descriptive comparisons, not tests of occupation-specific significance. Survey horizons overlap.</p><details><summary>All-origin results with up to 20 recommendations per model</summary>${table('up_to_20')}<p>Under the original rule, models share a maximum of 20 recommendations but may return different lengths.</p></details><p><a href="external_validation.html#equal-length-comparisons">Methods, worked example and downloadable results →</a></p></section>`;
};

/* Figure-compatible SOC6 validation panels. No task-level data are loaded here. */
(() => {
  const data=window.OCCUPATION_BENCHMARKS;
  const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  const methods=['Posting-task','O*NET'],colors=['#0173B2','#C44E52'];
  const metrics=['SST share','SST rank','DOL rank'];
  const labels=['SST share captured','SST destinations recovered','EMSI destinations recovered'];
  const pct=v=>v==null?'Unavailable':(v*100).toFixed(1)+'%';
  function render(code){
    const el=document.querySelector('#occupation-benchmarks');if(!el||!data)return;
    const soc=code.slice(0,7),focal=data.occupations[soc];
    const overall=metrics.flatMap((metric,i)=>[10,20].map(k=>({label:labels[i]+' top '+k,short:'Top '+k,caption:k===10?labels[i]:'',values:data.overall[k][metric]})));
    const selected=metrics.map((metric,i)=>({label:labels[i],short:i===0?'SST share':i===1?'SST destinations':'EMSI destinations',values:Object.fromEntries(methods.map(m=>[m,focal?.metrics[m]?.[metric]??null]))}));
    const survey=data.surveys.occupations[code]||{};
    const surveyGroup=ds=>({label:data.surveys.labels[ds]+' · weighted share captured',short:data.surveys.labels[ds].replace('NLSY97 + PSID · ','NLSY/PSID '),values:survey[ds]?.values||Object.fromEntries(methods.map(m=>[m,null]))});
    const pooled=data.surveys.pooled.map(surveyGroup).filter(g=>methods.some(m=>g.values[m]!=null));
    const overallSurveys=['CPS_SIPP','NLSY97_PSID_3y'].map(ds=>({label:data.surveys.labels[ds],short:data.surveys.labels[ds],values:data.surveys.overall?.[ds]||Object.fromEntries(methods.map(m=>[m,null]))}));
    let notice=document.querySelector('#focal-validation-notice');
    if(!notice){notice=document.createElement('section');notice.id='focal-validation-notice';notice.className='bm-validation-notice';document.querySelector('#occupation-neighbors').before(notice)}
    const eq={...(data.equal_length?.occupations[soc]||{}),...(data.equal_length?.occupations[code]||{})};
    const checks=[...selected,...data.surveys.pooled.map(surveyGroup)];
    const comparisons=checks.map(g=>{
      const a=g.values['Posting-task'],b=g.values['O*NET'];
      // Compare at the displayed 0.1 percentage-point precision; avoid invisible "wins".
      const delta=a==null||b==null?null:Math.round(a*1000)-Math.round(b*1000);
      return {...g,a,b,delta,status:delta==null?'Unavailable':delta===0?'Equal at displayed precision':delta>0?'Posting-Tasks higher':'O*NET published higher'};
    });
    const count=status=>comparisons.filter(r=>r.status===status).length;

    const totals={task:0,onet:0,tie:0,missing:0};
    for(const occupation of Object.values(data.occupations)){
      let result='missing';
      for(const metric of ['SST share','DOL rank']){
        const a=occupation.metrics['Posting-task']?.[metric],b=occupation.metrics['O*NET']?.[metric];
        if(a!=null&&b!=null){result=Math.abs(a-b)<1e-12?'tie':a>b?'task':'onet';break;}
      }
      totals[result]++;
    }
    const comparable=totals.task+totals.onet+totals.tie;
    const hasTask=count('Posting-Tasks higher')>0,hasOnet=count('O*NET published higher')>0;
    const summaryLabel=hasTask&&hasOnet?'Mixed benchmark results':hasTask?'Posting-Tasks higher on available measures':hasOnet?'O*NET published higher on available measures':count('Equal at displayed precision')?'Equal on available measures':'Benchmark comparison unavailable';
    const matched=Object.values(eq).filter(r=>data.equal_length.primary.includes(r.dataset)&&r.matched_k>0);
    const matchedMore=matched.filter(r=>r.values['Posting-task']>r.values['O*NET']+1e-12).length;
    notice.innerHTML=`<div class="bm-summary-row"><div><strong>Validation · ${esc(focal?.title||soc)}</strong><span class="bm-summary-label">Posting tasks recover more in ${matchedMore} of ${matched.length} available benchmarks</span><small>Benchmark-group comparison, not validation of this displayed ranking; O*NET published lists; ${count('Unavailable')} of ${comparisons.length} measures unavailable.</small></div><a class="bm-detail-tab" href="#occupation-benchmarks">See validation details ↓</a></div>`;
    const overallDetail=`<section class="bm-comparison-counts"><h3>SST-first comparison, with EMSI fallback</h3><p><strong>O*NET published is higher for ${totals.onet} occupations</strong> (${(100*totals.onet/comparable).toFixed(1)}% of ${comparable} comparable occupations). Posting-Tasks is higher for ${totals.task}; ${totals.tie} are tied; ${totals.missing} have no comparable evidence.</p><p class="bm-scope">Across ${Object.keys(data.occupations).length} six-digit occupations. Rule: compare top-20 SST transition-share recovery first; use EMSI destination recovery only when SST is unavailable. These counts do not mean one model leads on every benchmark, and they are not occupation-specific significance tests. O*NET here means published lists, not the quantitative-score correlation analysis.</p></section>`;

    const surveyRows=Object.keys(data.surveys.labels).map(ds=>{
      const r=survey[ds];return `<tr><th>${esc(data.surveys.labels[ds])}</th>${methods.map(m=>`<td>${pct(r?.values[m]??null)}</td>`).join('')}<td>${r?`${esc(r.title)} · Census ${r.system} ${r.origin} · ${r.n} changes`:'Unavailable: no eligible mapped origin (minimum 40 changes)'}</td></tr>`;
    }).join('');
    const tableRows=(groups)=>groups.map(g=>`<tr><th>${esc(g.label)}</th>${methods.map(m=>`<td>${pct(g.values[m])}</td>`).join('')}</tr>`).join('');
    const resultTable=(groups,caption)=>`<div class="bm-scroll"><table class="bm-survey-table bm-results"><caption>${esc(caption)}</caption><thead><tr><th scope="col">Measure</th><th scope="col">Posting-task</th><th scope="col">O*NET published</th></tr></thead><tbody>${tableRows(groups)}</tbody></table></div>`;
    el.innerHTML=`<h2 tabindex="-1" id="validation-detail-heading">Validation details</h2>${window.renderEqualLengthValidation?.(code)||overallDetail}<details class="bm-original"><summary>Additional comparison: up to 20 recommendations per model</summary><div class="bm-panels"><section class="bm-focal"><h3>Selected occupation</h3><p class="bm-focal-name">${esc(focal?.title||'No figure benchmark coverage')} · ${esc(soc)}</p>${resultTable([...selected,...data.surveys.pooled.map(surveyGroup)],'Selected occupation · original up-to-20 lists')}<p class="bm-scope">Each model can return up to 20 destinations; list lengths may differ. SST and surveys measure captured transition shares; SST and EMSI destination recovery measures overlap with the benchmark’s top 20 destinations. Survey results require at least 40 observed changes and use mapped Census groups, which can include other occupations. Missing coverage is not zero.</p></section><section class="bm-overall"><details><summary>All occupations</summary>${resultTable([...overall,...overallSurveys],'All occupations · original list budgets')}</details></section></div></details>
      <p class="bm-scope">SST and EMSI benchmark comparison at the six-digit SOC level. ${focal?esc(focal.title)+' ('+esc(soc)+') includes detailed O*NET occupations within that group.':'No matching SOC6 benchmark is available for this selection.'} These panels use the fixed posting-task and published O*NET models; the detailed rankings and filters above do not change them.</p>
      <p><a href="external_validation.html">Methods and benchmark definitions</a> · <a href="validation_replication/index.html">Code and replication inputs</a></p><details class="bm-evidence"><summary>Methods, reference lists, and survey detail</summary><p class="bm-scope">AI-generated explanatory text. <a href="validation_replication/index.html">Analysis code and replication inputs</a>.</p><p>SST = Schubert, Stansbury, and Taska occupational transitions. EMSI = Department of Labor’s Career Pathways / Emsi ranked occupation pairs. SST share is the sum of destination transition shares captured. Destination recovery is the fraction of the benchmark’s top twenty recovered by up to twenty recommendations. Each benchmark uses its own eligible candidate population. The overall panel reproduces the saved SOC6 top-10 and top-20 evaluations at their corresponding list cutoffs. Missing coverage is not zero.</p>
      <p>The reference lists below are illustrative SOC6 rankings across the broader occupation population. They are not the benchmark-specific evaluated lists underlying the results; their badges therefore need not sum to the table values.</p>
      ${focal?`<div class="bm-rankings">${methods.map((m,j)=>`<section><h4 style="color:${colors[j]}">${esc(m)} reference top 20</h4><ol>${focal.rankings[m].map(r=>`<li><span class="${r.sst||r.dol?'bm-hit':''}">${esc(r.title)}</span><small>${esc(r.code)} <b style="color:${colors[j]}">${r.sst&&r.dol?'SST + EMSI':r.sst?'SST':r.dol?'EMSI':''}</b></small></li>`).join('')}</ol></section>`).join('')}</div>`:''}

      <h4>Origin survey results: pooled and separate sources</h4><div class="bm-scroll"><table class="bm-survey-table"><thead><tr><th>Survey / horizon</th><th>Posting-task</th><th>O*NET</th><th>Mapped survey occupation and sample</th></tr></thead><tbody>${surveyRows}</tbody></table></div><p>Survey percentages capture supplied-weight transition shares with up to 20 recommendations. CPS/SIPP use Census 2010; NLSY97/PSID use conservatively mapped Census 2002 groups. Horizons overlap and are not independent replications. EMSI measures ranked-destination recovery, not worker-flow share. Published O*NET lists can return fewer than 20 destinations.</p>
      <p>Sources: ${data.sources.map(s=>`<a href="${esc(s.source_location)}">${esc(s.source_id==='DOL'?'EMSI (via DOL)':s.source_id)}</a>`).join(' · ')}. SST SOC-2010 codes use the audited bijective crosswalk to current SOC6; EMSI uses direct SOC6 matches. A badge marks a destination in that benchmark’s top twenty. Rankings and tables contain occupation-level information only.</p></details>`;
    const mainNav=document.querySelector('main > header nav');
    if(mainNav&&!mainNav.querySelector('a[href="#occupation-benchmarks"],a[href="external_validation.html"]')){
      const link=document.createElement('a');link.href='#occupation-benchmarks';link.textContent='Validation ↓';mainNav.prepend(link);
    }
    // Preserve the occupation hash while navigating within the profile.
    for(const link of document.querySelectorAll('a[href="#occupation-benchmarks"],header nav a[href="external_validation.html"]')){
      if(link.closest('header')){link.textContent='Validation ↓';link.setAttribute('href','#occupation-benchmarks');}
      link.onclick=e=>{e.preventDefault();el.scrollIntoView({behavior:'smooth',block:'start'});document.querySelector('#validation-detail-heading').focus({preventScroll:true});};
    }
    window.occupationBenchmarkState={code,soc,available:!!focal,k:20,metrics:focal?.metrics||null,surveys:survey};
  }
  window.renderOccupationBenchmarks=render;
})();
