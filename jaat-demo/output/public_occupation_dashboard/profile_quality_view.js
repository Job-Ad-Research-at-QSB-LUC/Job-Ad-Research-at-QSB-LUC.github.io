/* Review annotations only. No changes to model scores, lists, or benchmark samples. */
(() => {
 const data=window.PROFILE_QUALITY;
 const flag=code=>data?.flags[code?.slice(0,7)];
 const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
 const style=document.createElement('style');style.textContent='.quality-warning{border-left:4px solid #a34d18;background:#fff4e8;padding:14px 18px;margin:16px 0;color:#63330f}.quality-warning p{margin:6px 0}.quality-badge{display:block;color:#873c13;font-size:12px;font-weight:600}.quality-overview{font-size:13px;color:#586975;margin:12px 0}';document.head.append(style);
 window.renderProfileQuality=code=>{
  let el=document.querySelector('#profile-quality-banner');if(!el){el=document.createElement('section');el.id='profile-quality-banner';document.querySelector('#occupation-neighbors').before(el)}
  const f=flag(code);
  el.className=f?'quality-warning':'quality-overview';
  el.innerHTML=f?`<strong>Profile quality: ${esc(f.review_status)} — ${esc(f.occupation)}</strong><p>${esc(f.reason)}</p><p>${code.length===10?'This warning comes from review of the parent six-digit group. ':''}${esc(f.benchmark_policy)}. These similarities should not be interpreted as validated occupational transitions.</p><a href="profile_quality.html">Review evidence and limitations</a>`:'<a href="profile_quality.html">Profile-quality review</a>: flags identify possible coding or task-profile problems. Unflagged profiles have not been certified; all existing benchmark observations are retained.';
  window.profileQualityState={code,flag:f||null};
 };
 function badges(){document.querySelectorAll('[data-rn-select]').forEach(el=>{const f=flag(el.dataset.rnSelect);if(f&&!el.querySelector('.quality-badge')){const b=document.createElement('span');b.className='quality-badge';b.textContent='Profile caution: '+f.review_status;b.title=f.reason;el.append(b)}})}
 const proto=window.OccupationRelatedness.prototype,draw=proto.draw,inspect=proto.inspect;
 proto.draw=function(...args){const result=draw.apply(this,args);badges();return result};
 proto.inspect=async function(code){await inspect.call(this,code);if(this.selected!==code)return;const source=flag(this.code),dest=flag(code);if(!source&&!dest)return;const host=this.el.querySelector('#rn-explain');host.querySelector('.quality-connection')?.remove();const box=document.createElement('div');box.className='quality-warning quality-connection';box.innerHTML='<strong>Interpret this connection cautiously</strong>'+[source,dest].filter((f,i,a)=>f&&a.indexOf(f)===i).map(f=>`<p>${esc(f.occupation)}: ${esc(f.reason)}</p>`).join('')+'<p>Retained in the existing benchmark comparison. This flag concerns the posting-task profile, not the accuracy of the observed transition benchmark or the published O*NET list.</p>';host.prepend(box)};
})();
