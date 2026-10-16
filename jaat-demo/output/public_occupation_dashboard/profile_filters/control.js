(()=>{'use strict';
const data=window.profileFilterResults,root=document.getElementById('profile-filter-comparison');if(!data||!root)return;
const select=root.querySelector('select'),body=root.querySelector('tbody'),injury=root.dataset.application==='injury';
const labels={SST:'SST',Emsi:'EMSI',CPS_SIPP:'CPS + SIPP',NLSY97_PSID_3y:'NLSY97 + PSID · 3 years',NLSY97_PSID_5y:'NLSY97 + PSID · 5 years',NLSY97_PSID_10y:'NLSY97 + PSID · 10 years',CFOI:'Fatality rates',SOII:'All nonfatal injuries and illnesses','Contact incidents':'Contact-incident rates'};
function render(){const variant=select.value,rows=data.summary.filter(r=>r.application===root.dataset.application&&r.variant===variant);
body.innerHTML=rows.map(r=>{const f=x=>injury?x.toFixed(3):(100*x).toFixed(2)+'%';return '<tr><th scope="row">'+labels[r.benchmark]+'</th><td>'+r.n+'</td><td>'+f(r.posting)+'</td><td>'+f(r.onet)+'</td></tr>';}).join('');
root.querySelector('[data-filter-status]').textContent=(variant==='current'?'Paper filters':variant==='no_review'?'No review exclusions':'No review or frequency exclusions')+' · '+data.counts[variant].toLocaleString()+' occupation–task links in the construction profiles.';
if(injury)window.dispatchEvent(new CustomEvent('profile-filter-change',{detail:variant}));}
select.addEventListener('change',render);render();
})();
