import{s as zt,d as a,i as o,a as X,b as c,c as _,h as Gt,e as f,f as It,g as M,j as Kt,k as u,l as b,m as Rt,n as Xt,o as Yt,p as Zt,q as te,r as wt}from"../chunks/scheduler.TmfZfN_X.js";import{S as ee,i as ae,d as Y,t as $,a as w,c as Jt,m as Z,b as tt,e as et,g as Ot}from"../chunks/index.CKLTamEB.js";import"../chunks/VennDiagram.svelte_svelte_type_style_lang.B2aubBmp.js";import{w as se}from"../chunks/entry.B99Fshv4.js";import{e as oe,s as ne,Q as Ut,p as ie,r as Bt,C as re}from"../chunks/inferColumnTypes.CHYcqYP9.js";import{h as ht}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as le}from"../chunks/stores.Qedg7CPW.js";import{Q as Qt}from"../chunks/QueryViewer.0JA8Cyw9.js";import{B as nt}from"../chunks/BigValue.BUVOsWzT.js";import{p as ce}from"../chunks/profile.BW8tN6E9.js";function _e(i){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:wt,p:wt,d:wt}}function Vt(i){let r,n;return r=new Qt({props:{queryID:"nlx_corpus_totals",queryResult:i[0]}}),{c(){et(r.$$.fragment)},l(s){tt(r.$$.fragment,s)},m(s,h){Z(r,s,h),n=!0},p(s,h){const y={};h&1&&(y.queryResult=s[0]),r.$set(y)},i(s){n||(w(r.$$.fragment,s),n=!0)},o(s){$(r.$$.fragment,s),n=!1},d(s){Y(r,s)}}}function Pt(i){let r,n;return r=new Qt({props:{queryID:"usajobs_corpus_totals",queryResult:i[1]}}),{c(){et(r.$$.fragment)},l(s){tt(r.$$.fragment,s)},m(s,h){Z(r,s,h),n=!0},p(s,h){const y={};h&2&&(y.queryResult=s[1]),r.$set(y)},i(s){n||(w(r.$$.fragment,s),n=!0)},o(s){$(r.$$.fragment,s),n=!1},d(s){Y(r,s)}}}function ue(i){let r,n,s,h,y,l,it='<a href="#job-ad-analysis-toolkit-jaat-evidence-dashboard">Job Ad Analysis Toolkit (JAAT) Evidence Dashboard</a>',at,L,lt='Job postings and new open-source language models let us test old maps of work and build new maps. This dashboard summarizes public aggregate evidence from the NLx corpus and USAJOBS job postings. The main findings are <a href="/us-lmi/occupation-task-pairs" class="markdown">A. A New Map of Work</a>, <a href="/us-lmi/task-allocation-mismatch" class="markdown">B. Analyzing the Mismatch</a>, <a href="/us-lmi/building-new-maps" class="markdown">C. Finding Emerging Skills</a>, and <a href="/us-lmi/dynamic-maps" class="markdown">D. Dynamic Maps</a>, with corpus-specific drilldowns under <a href="/us-lmi/nlx" class="markdown">NLx corpus</a> and <a href="/us-lmi/usajobs" class="markdown">USAJOBS</a>.',q,v,H='Use the profiler pages to inspect occupations, industries, agencies, tasks, skills and concepts. For the current paper’s figures and benchmarks, visit the <a href="https://job-ad-research-at-qsb-luc.github.io/jaat-demo/output/research_presentation/index.html" rel="nofollow" class="markdown">manuscript companion</a>.',A,T,st='<strong>NLx data disclaimer.</strong> The dashboard uses aggregate evidence derived from the National Labor Exchange (NLx) corpus; raw NLx posting text is not public. The National Labor Exchange (NLx) Data Trust bears no responsibility for the analyses or interpretations of the data presented here. For more information, see <a href="https://nlxresearchhub.org/" class="font-semibold underline">NLx Research Hub</a>.',I,k,S='<strong>New visual story.</strong> Start with the full-screen narrative view of task diffusion and adaptive taxonomies: <a href="#" onclick="window.location.href=&#39;/us-lmi/story/index.html&#39;; return false;" class="font-semibold underline">open the story page</a>.',C,j,ot=`<strong>Try the tools and inspect the project.</strong> <a href="https://jaat.app" class="font-semibold underline">JAAT.app</a> ·
  <a href="https://arxiv.org/abs/2510.01470" class="font-semibold underline">Working paper</a> ·
  <a href="https://github.com/Job-Ad-Research-at-QSB-LUC/JAAT" class="font-semibold underline">GitHub</a> ·
  <a href="https://huggingface.co/loyoladatamining" class="font-semibold underline">Hugging Face</a>`,R,m,J,N,Tt='<a href="#corpus-at-a-glance">Corpus At A Glance</a>',ct,g,O,vt,U,kt,B,yt,V,xt,P,Mt,Q,_t,W,jt="The NLx source-posting count is an approximate distinct-posting scale before monthly expansion. Dashboard files contain aggregate evidence only; raw NLx posting text is not public. Monthly active jobs are posting-month rows, so one posting can contribute to more than one month.",ut,D,$t='<a href="#finding-map">Finding Map</a>',mt,z,Lt=`<a href="/us-lmi/occupation-task-pairs" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>A. A New Map of Work</strong><br/>
    Job-ad-derived occupation-task pairs, agreement evidence, migration structure, and task-flow examples.</a> <a href="/us-lmi/task-allocation-mismatch" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>B. Analyzing the Mismatch</strong><br/>
    Provisional combined-corpus evidence on where O*NET task homes look too narrow or surprising.</a> <a href="/us-lmi/building-new-maps" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>C. Finding Emerging Skills</strong><br/>
    Validation evidence for posting-derived AI task and skill statements as an adaptive frontier map.</a> <a href="/us-lmi/dynamic-maps" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>D. Dynamic Maps</strong><br/>
    Movie views of LLM-validated task-pair diffusion and posting-derived related-occupation maps.</a>`,dt,E,Ht='<a href="#drill-down-profiles">Drill-Down Profiles</a>',pt,G,At=`<a href="/us-lmi/nlx" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>Summary (NLx corpus)</strong><br/>
    National aggregate evidence from the NLx corpus for tasks, Work Activities, skills, AI signals, and concepts.</a> <a href="/us-lmi/usajobs" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>USAJOBS summary</strong><br/>
    Federal aggregate evidence and profile entry points.</a> <a href="/us-lmi/usajobs/occupation-fingerprint" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>USAJOBS occupation profile</strong><br/>
    Federal occupation task signatures and supporting concept profiles.</a> <a href="/us-lmi/usajobs/agency-fingerprint" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>USAJOBS agency profile</strong><br/>
    Agency task signatures, Work Activities, skills, and posting context.</a>`,gt,F,St='<a href="#methods-and-audit">Methods and Audit</a>',ft,K,Ct=`<a href="/us-lmi/methodology" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>Methodology</strong><br/>
    Definitions, denominator conventions, extraction logic, and methodological notes used across the dashboard.</a> <a href="/us-lmi/methodology/postings-and-taxonomies" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>What Postings And Taxonomies Can Say</strong><br/>
    A compact caveat page on taxonomy coverage, measurement limits, and interpretation.</a> <a href="/us-lmi/methodology/audit-trail" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>Audit Trail</strong><br/>
    Reproducibility package, agreement workbooks, public inputs, checks, and inspection paths for headline results.</a>`,bt;function Wt(t,e){return _e}let rt=Wt()(i),d=i[0]&&Vt(i),p=i[1]&&Pt(i);return O=new nt({props:{data:i[0],value:"source_postings_m",title:"NLx approx. source postings"}}),U=new nt({props:{data:i[0],value:"total_active_jobs_m",title:"NLx corpus monthly active jobs"}}),B=new nt({props:{data:i[0],value:"total_task_mentions_m",title:"NLx corpus O*NET tasks extracted"}}),V=new nt({props:{data:i[1],value:"total_postings",title:"USAJOBS raw postings",fmt:"#,##0"}}),P=new nt({props:{data:i[1],value:"total_active_months_m",title:"USAJOBS monthly active jobs"}}),Q=new nt({props:{data:i[1],value:"total_task_mentions_m",title:"USAJOBS O*NET tasks extracted"}}),{c(){r=u(),rt.c(),n=b("meta"),s=b("meta"),h=It(),y=u(),l=b("h1"),l.innerHTML=it,at=u(),L=b("p"),L.innerHTML=lt,q=u(),v=b("p"),v.innerHTML=H,A=u(),T=b("div"),T.innerHTML=st,I=u(),k=b("div"),k.innerHTML=S,C=u(),j=b("div"),j.innerHTML=ot,R=u(),d&&d.c(),m=u(),p&&p.c(),J=u(),N=b("h2"),N.innerHTML=Tt,ct=u(),g=b("div"),et(O.$$.fragment),vt=u(),et(U.$$.fragment),kt=u(),et(B.$$.fragment),yt=u(),et(V.$$.fragment),xt=u(),et(P.$$.fragment),Mt=u(),et(Q.$$.fragment),_t=u(),W=b("p"),W.textContent=jt,ut=u(),D=b("h2"),D.innerHTML=$t,mt=u(),z=b("div"),z.innerHTML=Lt,dt=u(),E=b("h2"),E.innerHTML=Ht,pt=u(),G=b("div"),G.innerHTML=At,gt=u(),F=b("h2"),F.innerHTML=St,ft=u(),K=b("div"),K.innerHTML=Ct,this.h()},l(t){r=_(t);const e=Gt("svelte-2igo1p",document.head);rt.l(e),n=f(e,"META",{name:!0,content:!0}),s=f(e,"META",{name:!0,content:!0}),h=It(),e.forEach(a),y=_(t),l=f(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),M(l)!=="svelte-82qzka"&&(l.innerHTML=it),at=_(t),L=f(t,"P",{class:!0,"data-svelte-h":!0}),M(L)!=="svelte-chxz3j"&&(L.innerHTML=lt),q=_(t),v=f(t,"P",{class:!0,"data-svelte-h":!0}),M(v)!=="svelte-q7g4h2"&&(v.innerHTML=H),A=_(t),T=f(t,"DIV",{class:!0,"data-svelte-h":!0}),M(T)!=="svelte-ygbasa"&&(T.innerHTML=st),I=_(t),k=f(t,"DIV",{class:!0,"data-svelte-h":!0}),M(k)!=="svelte-1icshmi"&&(k.innerHTML=S),C=_(t),j=f(t,"DIV",{class:!0,"data-svelte-h":!0}),M(j)!=="svelte-1gssjyy"&&(j.innerHTML=ot),R=_(t),d&&d.l(t),m=_(t),p&&p.l(t),J=_(t),N=f(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),M(N)!=="svelte-9q9s3u"&&(N.innerHTML=Tt),ct=_(t),g=f(t,"DIV",{class:!0});var x=Kt(g);tt(O.$$.fragment,x),vt=_(x),tt(U.$$.fragment,x),kt=_(x),tt(B.$$.fragment,x),yt=_(x),tt(V.$$.fragment,x),xt=_(x),tt(P.$$.fragment,x),Mt=_(x),tt(Q.$$.fragment,x),x.forEach(a),_t=_(t),W=f(t,"P",{class:!0,"data-svelte-h":!0}),M(W)!=="svelte-9q8fcb"&&(W.textContent=jt),ut=_(t),D=f(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),M(D)!=="svelte-orv2rf"&&(D.innerHTML=$t),mt=_(t),z=f(t,"DIV",{class:!0,"data-svelte-h":!0}),M(z)!=="svelte-t0nwkc"&&(z.innerHTML=Lt),dt=_(t),E=f(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),M(E)!=="svelte-pafck0"&&(E.innerHTML=Ht),pt=_(t),G=f(t,"DIV",{class:!0,"data-svelte-h":!0}),M(G)!=="svelte-1t3rmvh"&&(G.innerHTML=At),gt=_(t),F=f(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),M(F)!=="svelte-1u71lls"&&(F.innerHTML=St),ft=_(t),K=f(t,"DIV",{class:!0,"data-svelte-h":!0}),M(K)!=="svelte-1wtcs75"&&(K.innerHTML=Ct),this.h()},h(){c(n,"name","twitter:card"),c(n,"content","summary_large_image"),c(s,"name","twitter:site"),c(s,"content","@evidence_dev"),c(l,"class","markdown"),c(l,"id","job-ad-analysis-toolkit-jaat-evidence-dashboard"),c(L,"class","markdown"),c(v,"class","markdown"),c(T,"class","border-l-4 border-gray-500 bg-gray-50 px-4 py-3 my-4 text-sm text-gray-700"),c(k,"class","border border-gray-200 bg-gray-50 px-4 py-3 my-5 text-sm text-gray-700"),c(j,"class","border border-gray-200 bg-white px-4 py-3 my-5 text-sm text-gray-700"),c(N,"class","markdown"),c(N,"id","corpus-at-a-glance"),c(g,"class","grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4 border-b pb-6 mb-8"),c(W,"class","text-sm text-gray-600 -mt-4 mb-8"),c(D,"class","markdown"),c(D,"id","finding-map"),c(z,"class","grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8"),c(E,"class","markdown"),c(E,"id","drill-down-profiles"),c(G,"class","grid grid-cols-1 md:grid-cols-2 gap-4"),c(F,"class","markdown"),c(F,"id","methods-and-audit"),c(K,"class","grid grid-cols-1 md:grid-cols-2 gap-4")},m(t,e){o(t,r,e),rt.m(document.head,null),X(document.head,n),X(document.head,s),X(document.head,h),o(t,y,e),o(t,l,e),o(t,at,e),o(t,L,e),o(t,q,e),o(t,v,e),o(t,A,e),o(t,T,e),o(t,I,e),o(t,k,e),o(t,C,e),o(t,j,e),o(t,R,e),d&&d.m(t,e),o(t,m,e),p&&p.m(t,e),o(t,J,e),o(t,N,e),o(t,ct,e),o(t,g,e),Z(O,g,null),X(g,vt),Z(U,g,null),X(g,kt),Z(B,g,null),X(g,yt),Z(V,g,null),X(g,xt),Z(P,g,null),X(g,Mt),Z(Q,g,null),o(t,_t,e),o(t,W,e),o(t,ut,e),o(t,D,e),o(t,mt,e),o(t,z,e),o(t,dt,e),o(t,E,e),o(t,pt,e),o(t,G,e),o(t,gt,e),o(t,F,e),o(t,ft,e),o(t,K,e),bt=!0},p(t,[e]){rt.p(t,e),t[0]?d?(d.p(t,e),e&1&&w(d,1)):(d=Vt(t),d.c(),w(d,1),d.m(m.parentNode,m)):d&&(Ot(),$(d,1,1,()=>{d=null}),Jt()),t[1]?p?(p.p(t,e),e&2&&w(p,1)):(p=Pt(t),p.c(),w(p,1),p.m(J.parentNode,J)):p&&(Ot(),$(p,1,1,()=>{p=null}),Jt());const x={};e&1&&(x.data=t[0]),O.$set(x);const Nt={};e&1&&(Nt.data=t[0]),U.$set(Nt);const Dt={};e&1&&(Dt.data=t[0]),B.$set(Dt);const Et={};e&2&&(Et.data=t[1]),V.$set(Et);const Ft={};e&2&&(Ft.data=t[1]),P.$set(Ft);const qt={};e&2&&(qt.data=t[1]),Q.$set(qt)},i(t){bt||(w(d),w(p),w(O.$$.fragment,t),w(U.$$.fragment,t),w(B.$$.fragment,t),w(V.$$.fragment,t),w(P.$$.fragment,t),w(Q.$$.fragment,t),bt=!0)},o(t){$(d),$(p),$(O.$$.fragment,t),$(U.$$.fragment,t),$(B.$$.fragment,t),$(V.$$.fragment,t),$(P.$$.fragment,t),$(Q.$$.fragment,t),bt=!1},d(t){t&&(a(r),a(y),a(l),a(at),a(L),a(q),a(v),a(A),a(T),a(I),a(k),a(C),a(j),a(R),a(m),a(J),a(N),a(ct),a(g),a(_t),a(W),a(ut),a(D),a(mt),a(z),a(dt),a(E),a(pt),a(G),a(gt),a(F),a(ft),a(K)),rt.d(t),a(n),a(s),a(h),d&&d.d(t),p&&p.d(t),Y(O),Y(U),Y(B),Y(V),Y(P),Y(Q)}}}function me(i,r,n){let s,h;Rt(i,le,m=>n(12,s=m)),Rt(i,Bt,m=>n(18,h=m));let{data:y}=r,{data:l={},customFormattingSettings:it,__db:at,inputs:L}=y;Xt(Bt,h="6666cd76f96956469e7be39d750cc7d9",h);let lt=oe(se(L));Yt(lt.subscribe(m=>L=m)),Zt(re,{getCustomFormats:()=>it.customFormats||[]});const q=(m,J)=>ce(at.query,m,{query_name:J});ne(q),s.params,te(()=>!0);let v={initialData:void 0,initialError:void 0},H=ht`select
  total_active_jobs,
  total_task_mentions,
  total_ai_mentions,
  distinct_occupations,
  distinct_industries,
  '~162M' as source_postings_m,
  concat(round(total_active_jobs / 1000000.0, 1), 'M') as total_active_jobs_m,
  concat(round(total_task_mentions / 1000000.0, 1), 'M') as total_task_mentions_m,
  concat(round(total_ai_mentions / 1000000.0, 1), 'M') as total_ai_mentions_m
from nlx.headline`,A=`select
  total_active_jobs,
  total_task_mentions,
  total_ai_mentions,
  distinct_occupations,
  distinct_industries,
  '~162M' as source_postings_m,
  concat(round(total_active_jobs / 1000000.0, 1), 'M') as total_active_jobs_m,
  concat(round(total_task_mentions / 1000000.0, 1), 'M') as total_task_mentions_m,
  concat(round(total_ai_mentions / 1000000.0, 1), 'M') as total_ai_mentions_m
from nlx.headline`;l.nlx_corpus_totals_data&&(l.nlx_corpus_totals_data instanceof Error?v.initialError=l.nlx_corpus_totals_data:v.initialData=l.nlx_corpus_totals_data,l.nlx_corpus_totals_columns&&(v.knownColumns=l.nlx_corpus_totals_columns));let T,st=!1;const I=Ut.createReactive({callback:m=>{n(0,T=m)},execFn:q},{id:"nlx_corpus_totals",...v});I(A,{noResolve:H,...v}),globalThis[Symbol.for("nlx_corpus_totals")]={get value(){return T}};let k={initialData:void 0,initialError:void 0},S=ht`select
  total_postings,
  total_active_months,
  total_task_mentions,
  total_ai_mentions,
  distinct_occupations,
  distinct_departments,
  concat(round(total_active_months / 1000000.0, 1), 'M') as total_active_months_m,
  concat(round(total_task_mentions / 1000000.0, 1), 'M') as total_task_mentions_m,
  concat(round(total_ai_mentions / 1000000.0, 1), 'M') as total_ai_mentions_m
from usajobs.headline`,C=`select
  total_postings,
  total_active_months,
  total_task_mentions,
  total_ai_mentions,
  distinct_occupations,
  distinct_departments,
  concat(round(total_active_months / 1000000.0, 1), 'M') as total_active_months_m,
  concat(round(total_task_mentions / 1000000.0, 1), 'M') as total_task_mentions_m,
  concat(round(total_ai_mentions / 1000000.0, 1), 'M') as total_ai_mentions_m
from usajobs.headline`;l.usajobs_corpus_totals_data&&(l.usajobs_corpus_totals_data instanceof Error?k.initialError=l.usajobs_corpus_totals_data:k.initialData=l.usajobs_corpus_totals_data,l.usajobs_corpus_totals_columns&&(k.knownColumns=l.usajobs_corpus_totals_columns));let j,ot=!1;const R=Ut.createReactive({callback:m=>{n(1,j=m)},execFn:q},{id:"usajobs_corpus_totals",...k});return R(C,{noResolve:S,...k}),globalThis[Symbol.for("usajobs_corpus_totals")]={get value(){return j}},i.$$set=m=>{"data"in m&&n(2,y=m.data)},i.$$.update=()=>{i.$$.dirty&4&&n(3,{data:l={},customFormattingSettings:it,__db:at}=y,l),i.$$.dirty&8&&ie.set(Object.keys(l).length>0),i.$$.dirty&4096&&s.params,i.$$.dirty&240&&(H||!st?H||(I(A,{noResolve:H,...v}),n(7,st=!0)):I(A,{noResolve:H})),i.$$.dirty&3840&&(S||!ot?S||(R(C,{noResolve:S,...k}),n(11,ot=!0)):R(C,{noResolve:S}))},n(5,H=ht`select
  total_active_jobs,
  total_task_mentions,
  total_ai_mentions,
  distinct_occupations,
  distinct_industries,
  '~162M' as source_postings_m,
  concat(round(total_active_jobs / 1000000.0, 1), 'M') as total_active_jobs_m,
  concat(round(total_task_mentions / 1000000.0, 1), 'M') as total_task_mentions_m,
  concat(round(total_ai_mentions / 1000000.0, 1), 'M') as total_ai_mentions_m
from nlx.headline`),n(6,A=`select
  total_active_jobs,
  total_task_mentions,
  total_ai_mentions,
  distinct_occupations,
  distinct_industries,
  '~162M' as source_postings_m,
  concat(round(total_active_jobs / 1000000.0, 1), 'M') as total_active_jobs_m,
  concat(round(total_task_mentions / 1000000.0, 1), 'M') as total_task_mentions_m,
  concat(round(total_ai_mentions / 1000000.0, 1), 'M') as total_ai_mentions_m
from nlx.headline`),n(9,S=ht`select
  total_postings,
  total_active_months,
  total_task_mentions,
  total_ai_mentions,
  distinct_occupations,
  distinct_departments,
  concat(round(total_active_months / 1000000.0, 1), 'M') as total_active_months_m,
  concat(round(total_task_mentions / 1000000.0, 1), 'M') as total_task_mentions_m,
  concat(round(total_ai_mentions / 1000000.0, 1), 'M') as total_ai_mentions_m
from usajobs.headline`),n(10,C=`select
  total_postings,
  total_active_months,
  total_task_mentions,
  total_ai_mentions,
  distinct_occupations,
  distinct_departments,
  concat(round(total_active_months / 1000000.0, 1), 'M') as total_active_months_m,
  concat(round(total_task_mentions / 1000000.0, 1), 'M') as total_task_mentions_m,
  concat(round(total_ai_mentions / 1000000.0, 1), 'M') as total_ai_mentions_m
from usajobs.headline`),[T,j,y,l,v,H,A,st,k,S,C,ot,s]}class we extends ee{constructor(r){super(),ae(this,r,me,ue,zt,{data:2})}}export{we as component};
