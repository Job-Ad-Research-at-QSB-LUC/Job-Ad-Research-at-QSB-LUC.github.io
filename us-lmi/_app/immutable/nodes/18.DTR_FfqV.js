import{s as At,d as c,i as u,a as ut,b as p,c as b,h as Rt,e as v,f as mt,g as I,k as $,l as g,m as xt,n as Et,o as Gt,p as Nt,q as It,r as J,j as Pt,t as qt,u as Dt}from"../chunks/scheduler.DhBftCKw.js";import{S as St,i as Ft,d as H,t as M,a as w,c as vt,m as L,b as A,e as R,g as gt}from"../chunks/index.BUvAr1Xw.js";import{D as Tt,C as F}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.B0mztXUO.js";import{w as Ot}from"../chunks/entry.BMENagX9.js";import{e as Qt,s as Vt,Q as ht,p as Ut,a as wt,r as Mt,C as zt}from"../chunks/inferColumnTypes.D6fZb62q.js";import{h as _t}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as Bt}from"../chunks/stores.DdIem69U.js";import{Q as Ht}from"../chunks/QueryViewer.ZRKlIdUM.js";import{p as Kt}from"../chunks/profile.BW8tN6E9.js";function Wt(f){let s,i=d.title+"",e;return{c(){s=g("h1"),e=Dt(i),this.h()},l(n){s=v(n,"H1",{class:!0});var o=Pt(s);e=qt(o,i),o.forEach(c),this.h()},h(){p(s,"class","title")},m(n,o){u(n,s,o),ut(s,e)},p:J,d(n){n&&c(s)}}}function Xt(f){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:J,p:J,d:J}}function Yt(f){let s,i,e,n,o;return document.title=s=d.title,{c(){i=$(),e=g("meta"),n=$(),o=g("meta"),this.h()},l(r){i=b(r),e=v(r,"META",{property:!0,content:!0}),n=b(r),o=v(r,"META",{name:!0,content:!0}),this.h()},h(){var r,l;p(e,"property","og:title"),p(e,"content",((r=d.og)==null?void 0:r.title)??d.title),p(o,"name","twitter:title"),p(o,"content",((l=d.og)==null?void 0:l.title)??d.title)},m(r,l){u(r,i,l),u(r,e,l),u(r,n,l),u(r,o,l)},p(r,l){l&0&&s!==(s=d.title)&&(document.title=s)},d(r){r&&(c(i),c(e),c(n),c(o))}}}function Jt(f){var o,r;let s,i,e=(d.description||((o=d.og)==null?void 0:o.description))&&Zt(),n=((r=d.og)==null?void 0:r.image)&&te();return{c(){e&&e.c(),s=$(),n&&n.c(),i=mt()},l(l){e&&e.l(l),s=b(l),n&&n.l(l),i=mt()},m(l,y){e&&e.m(l,y),u(l,s,y),n&&n.m(l,y),u(l,i,y)},p(l,y){var k,j;(d.description||(k=d.og)!=null&&k.description)&&e.p(l,y),(j=d.og)!=null&&j.image&&n.p(l,y)},d(l){l&&(c(s),c(i)),e&&e.d(l),n&&n.d(l)}}}function Zt(f){let s,i,e,n,o;return{c(){s=g("meta"),i=$(),e=g("meta"),n=$(),o=g("meta"),this.h()},l(r){s=v(r,"META",{name:!0,content:!0}),i=b(r),e=v(r,"META",{property:!0,content:!0}),n=b(r),o=v(r,"META",{name:!0,content:!0}),this.h()},h(){var r,l,y;p(s,"name","description"),p(s,"content",d.description??((r=d.og)==null?void 0:r.description)),p(e,"property","og:description"),p(e,"content",((l=d.og)==null?void 0:l.description)??d.description),p(o,"name","twitter:description"),p(o,"content",((y=d.og)==null?void 0:y.description)??d.description)},m(r,l){u(r,s,l),u(r,i,l),u(r,e,l),u(r,n,l),u(r,o,l)},p:J,d(r){r&&(c(s),c(i),c(e),c(n),c(o))}}}function te(f){let s,i,e;return{c(){s=g("meta"),i=$(),e=g("meta"),this.h()},l(n){s=v(n,"META",{property:!0,content:!0}),i=b(n),e=v(n,"META",{name:!0,content:!0}),this.h()},h(){var n,o;p(s,"property","og:image"),p(s,"content",wt((n=d.og)==null?void 0:n.image)),p(e,"name","twitter:image"),p(e,"content",wt((o=d.og)==null?void 0:o.image))},m(n,o){u(n,s,o),u(n,i,o),u(n,e,o)},p:J,d(n){n&&(c(s),c(i),c(e))}}}function jt(f){let s,i;return s=new Ht({props:{queryID:"nlx_top_occ_tasks",queryResult:f[0]}}),{c(){R(s.$$.fragment)},l(e){A(s.$$.fragment,e)},m(e,n){L(s,e,n),i=!0},p(e,n){const o={};n&1&&(o.queryResult=e[0]),s.$set(o)},i(e){i||(w(s.$$.fragment,e),i=!0)},o(e){M(s.$$.fragment,e),i=!1},d(e){H(s,e)}}}function ee(f){let s,i,e,n,o,r,l,y,k,j;return s=new F({props:{id:"task_rank",title:"Rank",fmt:"0"}}),e=new F({props:{id:"task_text",title:"Task",wrap:"true"}}),o=new F({props:{id:"rca",title:"RCA",fmt:"0.00"}}),l=new F({props:{id:"mentions",title:"Mentions",fmt:"#,##0"}}),k=new F({props:{id:"pct_active_jobs",title:"% jobs",fmt:"0.0%"}}),{c(){R(s.$$.fragment),i=$(),R(e.$$.fragment),n=$(),R(o.$$.fragment),r=$(),R(l.$$.fragment),y=$(),R(k.$$.fragment)},l(a){A(s.$$.fragment,a),i=b(a),A(e.$$.fragment,a),n=b(a),A(o.$$.fragment,a),r=b(a),A(l.$$.fragment,a),y=b(a),A(k.$$.fragment,a)},m(a,m){L(s,a,m),u(a,i,m),L(e,a,m),u(a,n,m),L(o,a,m),u(a,r,m),L(l,a,m),u(a,y,m),L(k,a,m),j=!0},p:J,i(a){j||(w(s.$$.fragment,a),w(e.$$.fragment,a),w(o.$$.fragment,a),w(l.$$.fragment,a),w(k.$$.fragment,a),j=!0)},o(a){M(s.$$.fragment,a),M(e.$$.fragment,a),M(o.$$.fragment,a),M(l.$$.fragment,a),M(k.$$.fragment,a),j=!1},d(a){a&&(c(i),c(n),c(r),c(y)),H(s,a),H(e,a),H(o,a),H(l,a),H(k,a)}}}function Ct(f){let s,i;return s=new Ht({props:{queryID:"nlx_top_industry_tasks",queryResult:f[1]}}),{c(){R(s.$$.fragment)},l(e){A(s.$$.fragment,e)},m(e,n){L(s,e,n),i=!0},p(e,n){const o={};n&2&&(o.queryResult=e[1]),s.$set(o)},i(e){i||(w(s.$$.fragment,e),i=!0)},o(e){M(s.$$.fragment,e),i=!1},d(e){H(s,e)}}}function ae(f){let s,i,e,n,o,r,l,y,k,j;return s=new F({props:{id:"task_rank",title:"Rank",fmt:"0"}}),e=new F({props:{id:"task_text",title:"Task",wrap:"true"}}),o=new F({props:{id:"rca",title:"RCA",fmt:"0.00"}}),l=new F({props:{id:"mentions",title:"Mentions",fmt:"#,##0"}}),k=new F({props:{id:"pct_active_jobs",title:"% jobs",fmt:"0.0%"}}),{c(){R(s.$$.fragment),i=$(),R(e.$$.fragment),n=$(),R(o.$$.fragment),r=$(),R(l.$$.fragment),y=$(),R(k.$$.fragment)},l(a){A(s.$$.fragment,a),i=b(a),A(e.$$.fragment,a),n=b(a),A(o.$$.fragment,a),r=b(a),A(l.$$.fragment,a),y=b(a),A(k.$$.fragment,a)},m(a,m){L(s,a,m),u(a,i,m),L(e,a,m),u(a,n,m),L(o,a,m),u(a,r,m),L(l,a,m),u(a,y,m),L(k,a,m),j=!0},p:J,i(a){j||(w(s.$$.fragment,a),w(e.$$.fragment,a),w(o.$$.fragment,a),w(l.$$.fragment,a),w(k.$$.fragment,a),j=!0)},o(a){M(s.$$.fragment,a),M(e.$$.fragment,a),M(o.$$.fragment,a),M(l.$$.fragment,a),M(k.$$.fragment,a),j=!1},d(a){a&&(c(i),c(n),c(r),c(y)),H(s,a),H(e,a),H(o,a),H(l,a),H(k,a)}}}function se(f){let s,i,e,n,o,r,l="<strong>NLx data disclaimer.</strong> The National Labor Exchange (NLx) Data Trust bear no responsibility for the analyses or interpretations of the data presented here.",y,k,j="Top O*NET tasks are shown for each SOC-2 major occupation group and NAICS-2 industry. Rankings use revealed comparative advantage within the group, mirroring the Work Activity profiler.",a,m,P="<strong>How to read this page.</strong> This is a lookup profile, not a headline finding. RCA ranks tasks that are unusually concentrated in a group; mentions and % active jobs show scale. Task rows use LLM-validated posting matches, but the table does not by itself prove a new occupation-task relationship.",q,G,Z="<strong>Shared terms.</strong> RCA = group task share / corpus task share. Mentions = LLM-validated task matches. % jobs = share of active jobs in the group with the task.",B,C,D="<strong>Generic tasks removed.</strong> Task tables suppress rows labeled <code>general</code> in <code>combined_task_allocation_task_categories.csv</code>, so rankings emphasize tasks that are more specific to an occupation group or industry.",S,E,tt='<a href="#occupation-major-groups">Occupation Major Groups</a>',K,x,N,dt='<a href="#table-1-top-5-tasks-by-major-occupation-group-nlx-corpus">Table 1. Top 5 tasks by major occupation group (NLx corpus)</a>',st,W,rt,O,kt='<a href="#industry-major-groups">Industry Major Groups</a>',nt,et,Q,bt='<a href="#table-2-top-5-tasks-by-naics-2-industry-nlx-corpus">Table 2. Top 5 tasks by NAICS-2 industry (NLx corpus)</a>',it,X,ot,V,$t='<a href="#evidence-path">Evidence Path</a>',lt,Y,yt='RCA is defined in <a href="/us-lmi/methodology#revealed-comparative-advantage-rca" class="markdown">Methods</a>. Task-derived rows use the occupation-task LLM-validation procedure documented in <a href="/us-lmi/methodology/audit-trail#job-ad-derived-occupation-task-pair-agreement-procedure" class="markdown">Agreement And Audit Trail</a>.',ct,U=typeof d<"u"&&d.title&&d.hide_title!==!0&&Wt();function Lt(t,_){return typeof d<"u"&&d.title?Yt:Xt}let at=Lt()(f),z=typeof d=="object"&&Jt(),T=f[0]&&jt(f);W=new Tt({props:{data:f[0],groupBy:"soc2_group",rowsPerPage:"25",$$slots:{default:[ee]},$$scope:{ctx:f}}});let h=f[1]&&Ct(f);return X=new Tt({props:{data:f[1],groupBy:"naics_group",rowsPerPage:"25",$$slots:{default:[ae]},$$scope:{ctx:f}}}),{c(){U&&U.c(),s=$(),at.c(),i=g("meta"),e=g("meta"),z&&z.c(),n=mt(),o=$(),r=g("div"),r.innerHTML=l,y=$(),k=g("p"),k.textContent=j,a=$(),m=g("div"),m.innerHTML=P,q=$(),G=g("div"),G.innerHTML=Z,B=$(),C=g("div"),C.innerHTML=D,S=$(),E=g("h2"),E.innerHTML=tt,K=$(),T&&T.c(),x=$(),N=g("h3"),N.innerHTML=dt,st=$(),R(W.$$.fragment),rt=$(),O=g("h2"),O.innerHTML=kt,nt=$(),h&&h.c(),et=$(),Q=g("h3"),Q.innerHTML=bt,it=$(),R(X.$$.fragment),ot=$(),V=g("h2"),V.innerHTML=$t,lt=$(),Y=g("p"),Y.innerHTML=yt,this.h()},l(t){U&&U.l(t),s=b(t);const _=Rt("svelte-2igo1p",document.head);at.l(_),i=v(_,"META",{name:!0,content:!0}),e=v(_,"META",{name:!0,content:!0}),z&&z.l(_),n=mt(),_.forEach(c),o=b(t),r=v(t,"DIV",{class:!0,"data-svelte-h":!0}),I(r)!=="svelte-19tmuxm"&&(r.innerHTML=l),y=b(t),k=v(t,"P",{class:!0,"data-svelte-h":!0}),I(k)!=="svelte-9c3baf"&&(k.textContent=j),a=b(t),m=v(t,"DIV",{class:!0,"data-svelte-h":!0}),I(m)!=="svelte-wezsjy"&&(m.innerHTML=P),q=b(t),G=v(t,"DIV",{class:!0,"data-svelte-h":!0}),I(G)!=="svelte-nm5qno"&&(G.innerHTML=Z),B=b(t),C=v(t,"DIV",{class:!0,"data-svelte-h":!0}),I(C)!=="svelte-uhunx"&&(C.innerHTML=D),S=b(t),E=v(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),I(E)!=="svelte-kladba"&&(E.innerHTML=tt),K=b(t),T&&T.l(t),x=b(t),N=v(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),I(N)!=="svelte-1qdgt0o"&&(N.innerHTML=dt),st=b(t),A(W.$$.fragment,t),rt=b(t),O=v(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),I(O)!=="svelte-9ums6j"&&(O.innerHTML=kt),nt=b(t),h&&h.l(t),et=b(t),Q=v(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),I(Q)!=="svelte-7jlxmz"&&(Q.innerHTML=bt),it=b(t),A(X.$$.fragment,t),ot=b(t),V=v(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),I(V)!=="svelte-1uqwyny"&&(V.innerHTML=$t),lt=b(t),Y=v(t,"P",{class:!0,"data-svelte-h":!0}),I(Y)!=="svelte-nb8t63"&&(Y.innerHTML=yt),this.h()},h(){p(i,"name","twitter:card"),p(i,"content","summary_large_image"),p(e,"name","twitter:site"),p(e,"content","@evidence_dev"),p(r,"class","border-l-4 border-gray-500 bg-gray-50 px-4 py-3 my-4 text-sm text-gray-700"),p(k,"class","markdown"),p(m,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),p(G,"class","text-sm my-3"),p(C,"class","border-l-4 border-amber-500 bg-amber-50 px-4 py-3 my-4 text-sm text-gray-700"),p(E,"class","markdown"),p(E,"id","occupation-major-groups"),p(N,"class","markdown"),p(N,"id","table-1-top-5-tasks-by-major-occupation-group-nlx-corpus"),p(O,"class","markdown"),p(O,"id","industry-major-groups"),p(Q,"class","markdown"),p(Q,"id","table-2-top-5-tasks-by-naics-2-industry-nlx-corpus"),p(V,"class","markdown"),p(V,"id","evidence-path"),p(Y,"class","markdown")},m(t,_){U&&U.m(t,_),u(t,s,_),at.m(document.head,null),ut(document.head,i),ut(document.head,e),z&&z.m(document.head,null),ut(document.head,n),u(t,o,_),u(t,r,_),u(t,y,_),u(t,k,_),u(t,a,_),u(t,m,_),u(t,q,_),u(t,G,_),u(t,B,_),u(t,C,_),u(t,S,_),u(t,E,_),u(t,K,_),T&&T.m(t,_),u(t,x,_),u(t,N,_),u(t,st,_),L(W,t,_),u(t,rt,_),u(t,O,_),u(t,nt,_),h&&h.m(t,_),u(t,et,_),u(t,Q,_),u(t,it,_),L(X,t,_),u(t,ot,_),u(t,V,_),u(t,lt,_),u(t,Y,_),ct=!0},p(t,[_]){typeof d<"u"&&d.title&&d.hide_title!==!0&&U.p(t,_),at.p(t,_),typeof d=="object"&&z.p(t,_),t[0]?T?(T.p(t,_),_&1&&w(T,1)):(T=jt(t),T.c(),w(T,1),T.m(x.parentNode,x)):T&&(gt(),M(T,1,1,()=>{T=null}),vt());const pt={};_&1&&(pt.data=t[0]),_&16777216&&(pt.$$scope={dirty:_,ctx:t}),W.$set(pt),t[1]?h?(h.p(t,_),_&2&&w(h,1)):(h=Ct(t),h.c(),w(h,1),h.m(et.parentNode,et)):h&&(gt(),M(h,1,1,()=>{h=null}),vt());const ft={};_&2&&(ft.data=t[1]),_&16777216&&(ft.$$scope={dirty:_,ctx:t}),X.$set(ft)},i(t){ct||(w(T),w(W.$$.fragment,t),w(h),w(X.$$.fragment,t),ct=!0)},o(t){M(T),M(W.$$.fragment,t),M(h),M(X.$$.fragment,t),ct=!1},d(t){t&&(c(s),c(o),c(r),c(y),c(k),c(a),c(m),c(q),c(G),c(B),c(C),c(S),c(E),c(K),c(x),c(N),c(st),c(rt),c(O),c(nt),c(et),c(Q),c(it),c(ot),c(V),c(lt),c(Y)),U&&U.d(t),at.d(t),c(i),c(e),z&&z.d(t),c(n),T&&T.d(t),H(W,t),h&&h.d(t),H(X,t)}}}const d={title:"Task Profiler"};function re(f,s,i){let e,n;xt(f,Bt,x=>i(12,e=x)),xt(f,Mt,x=>i(18,n=x));let{data:o}=s,{data:r={},customFormattingSettings:l,__db:y,inputs:k}=o;Et(Mt,n="e03402323c957ba9bc44b0a29216f039",n);let j=Qt(Ot(k));Gt(j.subscribe(x=>k=x)),Nt(zt,{getCustomFormats:()=>l.customFormats||[]});const a=(x,N)=>Kt(y.query,x,{query_name:N});Vt(a),e.params,It(()=>!0);let m={initialData:void 0,initialError:void 0},P=_t`select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  task_rank,
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  mentions,
  pct_active_jobs
from nlx.AGGR_NlxMajorOccupationTaskProfile
order by occ2, task_rank`,q=`select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  task_rank,
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  mentions,
  pct_active_jobs
from nlx.AGGR_NlxMajorOccupationTaskProfile
order by occ2, task_rank`;r.nlx_top_occ_tasks_data&&(r.nlx_top_occ_tasks_data instanceof Error?m.initialError=r.nlx_top_occ_tasks_data:m.initialData=r.nlx_top_occ_tasks_data,r.nlx_top_occ_tasks_columns&&(m.knownColumns=r.nlx_top_occ_tasks_columns));let G,Z=!1;const B=ht.createReactive({callback:x=>{i(0,G=x)},execFn:a},{id:"nlx_top_occ_tasks",...m});B(q,{noResolve:P,...m}),globalThis[Symbol.for("nlx_top_occ_tasks")]={get value(){return G}};let C={initialData:void 0,initialError:void 0},D=_t`select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  task_rank,
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  mentions,
  pct_active_jobs
from nlx.AGGR_NlxMajorIndustryTaskProfile
order by ind2, task_rank`,S=`select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  task_rank,
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  mentions,
  pct_active_jobs
from nlx.AGGR_NlxMajorIndustryTaskProfile
order by ind2, task_rank`;r.nlx_top_industry_tasks_data&&(r.nlx_top_industry_tasks_data instanceof Error?C.initialError=r.nlx_top_industry_tasks_data:C.initialData=r.nlx_top_industry_tasks_data,r.nlx_top_industry_tasks_columns&&(C.knownColumns=r.nlx_top_industry_tasks_columns));let E,tt=!1;const K=ht.createReactive({callback:x=>{i(1,E=x)},execFn:a},{id:"nlx_top_industry_tasks",...C});return K(S,{noResolve:D,...C}),globalThis[Symbol.for("nlx_top_industry_tasks")]={get value(){return E}},f.$$set=x=>{"data"in x&&i(2,o=x.data)},f.$$.update=()=>{f.$$.dirty&4&&i(3,{data:r={},customFormattingSettings:l,__db:y}=o,r),f.$$.dirty&8&&Ut.set(Object.keys(r).length>0),f.$$.dirty&4096&&e.params,f.$$.dirty&240&&(P||!Z?P||(B(q,{noResolve:P,...m}),i(7,Z=!0)):B(q,{noResolve:P})),f.$$.dirty&3840&&(D||!tt?D||(K(S,{noResolve:D,...C}),i(11,tt=!0)):K(S,{noResolve:D}))},i(5,P=_t`select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  task_rank,
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  mentions,
  pct_active_jobs
from nlx.AGGR_NlxMajorOccupationTaskProfile
order by occ2, task_rank`),i(6,q=`select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  task_rank,
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  mentions,
  pct_active_jobs
from nlx.AGGR_NlxMajorOccupationTaskProfile
order by occ2, task_rank`),i(9,D=_t`select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  task_rank,
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  mentions,
  pct_active_jobs
from nlx.AGGR_NlxMajorIndustryTaskProfile
order by ind2, task_rank`),i(10,S=`select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  task_rank,
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  mentions,
  pct_active_jobs
from nlx.AGGR_NlxMajorIndustryTaskProfile
order by ind2, task_rank`),[G,E,o,r,m,P,q,Z,C,D,S,tt,e]}class de extends St{constructor(s){super(),Ft(this,s,re,se,At,{data:2})}}export{de as component};
