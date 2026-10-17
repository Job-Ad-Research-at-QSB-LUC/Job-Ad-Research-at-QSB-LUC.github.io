import{s as kn,d as o,i as l,a as Y,b as $,c as u,h as vn,e as w,f as Mt,g as H,j as At,k as f,l as M,m as ln,n as bn,o as hn,p as Tn,q as yn,r as we,t as wn,u as Mn}from"../chunks/scheduler.TmfZfN_X.js";import{S as Sn,i as En,d as b,t as k,a as g,c as nt,m as h,b as T,e as y,g as st}from"../chunks/index.CKLTamEB.js";import{D as Ot,C as P}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.CoVGfpJt.js";import{w as Rn}from"../chunks/entry.P1aHOFFb.js";import{e as xn,s as Cn,Q as at,p as Gn,a as _n,r as mn,C as Ln}from"../chunks/inferColumnTypes.D_Qc-VWF.js";import{h as re}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as Hn}from"../chunks/stores.DMXyXr0C.js";import{Q as it}from"../chunks/QueryViewer.BWmGPj4w.js";import{B as oe}from"../chunks/BigValue.CPkxYFlh.js";import{L as Nn}from"../chunks/LineChart.CCZITCPP.js";import{p as On}from"../chunks/profile.BW8tN6E9.js";function An(c){let n,i=E.title+"",t;return{c(){n=M("h1"),t=Mn(i),this.h()},l(_){n=w(_,"H1",{class:!0});var m=At(n);t=wn(m,i),m.forEach(o),this.h()},h(){$(n,"class","title")},m(_,m){l(_,n,m),Y(n,t)},p:we,d(_){_&&o(n)}}}function jn(c){return{c(){this.h()},l(n){this.h()},h(){document.title="Evidence"},m:we,p:we,d:we}}function qn(c){let n,i,t,_,m;return document.title=n=E.title,{c(){i=f(),t=M("meta"),_=f(),m=M("meta"),this.h()},l(r){i=u(r),t=w(r,"META",{property:!0,content:!0}),_=u(r),m=w(r,"META",{name:!0,content:!0}),this.h()},h(){var r,p;$(t,"property","og:title"),$(t,"content",((r=E.og)==null?void 0:r.title)??E.title),$(m,"name","twitter:title"),$(m,"content",((p=E.og)==null?void 0:p.title)??E.title)},m(r,p){l(r,i,p),l(r,t,p),l(r,_,p),l(r,m,p)},p(r,p){p&0&&n!==(n=E.title)&&(document.title=n)},d(r){r&&(o(i),o(t),o(_),o(m))}}}function In(c){var m,r;let n,i,t=(E.description||((m=E.og)==null?void 0:m.description))&&Dn(),_=((r=E.og)==null?void 0:r.image)&&Fn();return{c(){t&&t.c(),n=f(),_&&_.c(),i=Mt()},l(p){t&&t.l(p),n=u(p),_&&_.l(p),i=Mt()},m(p,S){t&&t.m(p,S),l(p,n,S),_&&_.m(p,S),l(p,i,S)},p(p,S){var d,L;(E.description||(d=E.og)!=null&&d.description)&&t.p(p,S),(L=E.og)!=null&&L.image&&_.p(p,S)},d(p){p&&(o(n),o(i)),t&&t.d(p),_&&_.d(p)}}}function Dn(c){let n,i,t,_,m;return{c(){n=M("meta"),i=f(),t=M("meta"),_=f(),m=M("meta"),this.h()},l(r){n=w(r,"META",{name:!0,content:!0}),i=u(r),t=w(r,"META",{property:!0,content:!0}),_=u(r),m=w(r,"META",{name:!0,content:!0}),this.h()},h(){var r,p,S;$(n,"name","description"),$(n,"content",E.description??((r=E.og)==null?void 0:r.description)),$(t,"property","og:description"),$(t,"content",((p=E.og)==null?void 0:p.description)??E.description),$(m,"name","twitter:description"),$(m,"content",((S=E.og)==null?void 0:S.description)??E.description)},m(r,p){l(r,n,p),l(r,i,p),l(r,t,p),l(r,_,p),l(r,m,p)},p:we,d(r){r&&(o(n),o(i),o(t),o(_),o(m))}}}function Fn(c){let n,i,t;return{c(){n=M("meta"),i=f(),t=M("meta"),this.h()},l(_){n=w(_,"META",{property:!0,content:!0}),i=u(_),t=w(_,"META",{name:!0,content:!0}),this.h()},h(){var _,m;$(n,"property","og:image"),$(n,"content",_n((_=E.og)==null?void 0:_.image)),$(t,"name","twitter:image"),$(t,"content",_n((m=E.og)==null?void 0:m.image))},m(_,m){l(_,n,m),l(_,i,m),l(_,t,m)},p:we,d(_){_&&(o(n),o(i),o(t))}}}function cn(c){let n,i;return n=new it({props:{queryID:"task_signal_trend",queryResult:c[0]}}),{c(){y(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,_){h(n,t,_),i=!0},p(t,_){const m={};_[0]&1&&(m.queryResult=t[0]),n.$set(m)},i(t){i||(g(n.$$.fragment,t),i=!0)},o(t){k(n.$$.fragment,t),i=!1},d(t){b(n,t)}}}function un(c){let n,i;return n=new it({props:{queryID:"stem_headline",queryResult:c[1]}}),{c(){y(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,_){h(n,t,_),i=!0},p(t,_){const m={};_[0]&2&&(m.queryResult=t[1]),n.$set(m)},i(t){i||(g(n.$$.fragment,t),i=!0)},o(t){k(n.$$.fragment,t),i=!1},d(t){b(n,t)}}}function fn(c){let n,i;return n=new it({props:{queryID:"stem_comparison_counts",queryResult:c[2]}}),{c(){y(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,_){h(n,t,_),i=!0},p(t,_){const m={};_[0]&4&&(m.queryResult=t[2]),n.$set(m)},i(t){i||(g(n.$$.fragment,t),i=!0)},o(t){k(n.$$.fragment,t),i=!1},d(t){b(n,t)}}}function Pn(c){let n,i,t,_,m,r,p,S;return n=new P({props:{id:"stem_comparison_group",title:"Group"}}),t=new P({props:{id:"occupations",title:"Occs",fmt:"#,##0"}}),m=new P({props:{id:"active_jobs",title:"Active jobs",fmt:"#,##0"}}),p=new P({props:{id:"stem_task_mentions",title:"Mentions",fmt:"#,##0"}}),{c(){y(n.$$.fragment),i=f(),y(t.$$.fragment),_=f(),y(m.$$.fragment),r=f(),y(p.$$.fragment)},l(d){T(n.$$.fragment,d),i=u(d),T(t.$$.fragment,d),_=u(d),T(m.$$.fragment,d),r=u(d),T(p.$$.fragment,d)},m(d,L){h(n,d,L),l(d,i,L),h(t,d,L),l(d,_,L),h(m,d,L),l(d,r,L),h(p,d,L),S=!0},p:we,i(d){S||(g(n.$$.fragment,d),g(t.$$.fragment,d),g(m.$$.fragment,d),g(p.$$.fragment,d),S=!0)},o(d){k(n.$$.fragment,d),k(t.$$.fragment,d),k(m.$$.fragment,d),k(p.$$.fragment,d),S=!1},d(d){d&&(o(i),o(_),o(r)),b(n,d),b(t,d),b(m,d),b(p,d)}}}function pn(c){let n,i;return n=new it({props:{queryID:"stem_ranked_occupations",queryResult:c[3]}}),{c(){y(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,_){h(n,t,_),i=!0},p(t,_){const m={};_[0]&8&&(m.queryResult=t[3]),n.$set(m)},i(t){i||(g(n.$$.fragment,t),i=!0)},o(t){k(n.$$.fragment,t),i=!1},d(t){b(n,t)}}}function Bn(c){let n,i,t,_,m,r,p,S,d,L,R,x,C,O;return n=new P({props:{id:"stem_rca_rank",title:"Rank",fmt:"0"}}),t=new P({props:{id:"occ8",title:"O*NET-SOC"}}),m=new P({props:{id:"soc_title",title:"Occupation",wrap:"true"}}),p=new P({props:{id:"stem_task_rca",title:"RCA",fmt:"0.00"}}),d=new P({props:{id:"stem_task_share",title:"Share",fmt:"0.0%"}}),R=new P({props:{id:"stem_task_mentions_per_active_job",title:"Per job",fmt:"0.000"}}),C=new P({props:{id:"stem_task_mentions",title:"Mentions",fmt:"#,##0"}}),{c(){y(n.$$.fragment),i=f(),y(t.$$.fragment),_=f(),y(m.$$.fragment),r=f(),y(p.$$.fragment),S=f(),y(d.$$.fragment),L=f(),y(R.$$.fragment),x=f(),y(C.$$.fragment)},l(a){T(n.$$.fragment,a),i=u(a),T(t.$$.fragment,a),_=u(a),T(m.$$.fragment,a),r=u(a),T(p.$$.fragment,a),S=u(a),T(d.$$.fragment,a),L=u(a),T(R.$$.fragment,a),x=u(a),T(C.$$.fragment,a)},m(a,v){h(n,a,v),l(a,i,v),h(t,a,v),l(a,_,v),h(m,a,v),l(a,r,v),h(p,a,v),l(a,S,v),h(d,a,v),l(a,L,v),h(R,a,v),l(a,x,v),h(C,a,v),O=!0},p:we,i(a){O||(g(n.$$.fragment,a),g(t.$$.fragment,a),g(m.$$.fragment,a),g(p.$$.fragment,a),g(d.$$.fragment,a),g(R.$$.fragment,a),g(C.$$.fragment,a),O=!0)},o(a){k(n.$$.fragment,a),k(t.$$.fragment,a),k(m.$$.fragment,a),k(p.$$.fragment,a),k(d.$$.fragment,a),k(R.$$.fragment,a),k(C.$$.fragment,a),O=!1},d(a){a&&(o(i),o(_),o(r),o(S),o(L),o(x)),b(n,a),b(t,a),b(m,a),b(p,a),b(d,a),b(R,a),b(C,a)}}}function dn(c){let n,i;return n=new it({props:{queryID:"green_headline",queryResult:c[4]}}),{c(){y(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,_){h(n,t,_),i=!0},p(t,_){const m={};_[0]&16&&(m.queryResult=t[4]),n.$set(m)},i(t){i||(g(n.$$.fragment,t),i=!0)},o(t){k(n.$$.fragment,t),i=!1},d(t){b(n,t)}}}function gn(c){let n,i;return n=new it({props:{queryID:"green_ranked_occupations",queryResult:c[5]}}),{c(){y(n.$$.fragment)},l(t){T(n.$$.fragment,t)},m(t,_){h(n,t,_),i=!0},p(t,_){const m={};_[0]&32&&(m.queryResult=t[5]),n.$set(m)},i(t){i||(g(n.$$.fragment,t),i=!0)},o(t){k(n.$$.fragment,t),i=!1},d(t){b(n,t)}}}function Un(c){let n,i,t,_,m,r,p,S,d,L,R,x,C,O;return n=new P({props:{id:"green_rca_rank",title:"Rank",fmt:"0"}}),t=new P({props:{id:"occ8",title:"O*NET-SOC"}}),m=new P({props:{id:"soc_title",title:"Occupation",wrap:"true"}}),p=new P({props:{id:"green_task_rca",title:"RCA",fmt:"0.00"}}),d=new P({props:{id:"green_task_share",title:"Share",fmt:"0.0%"}}),R=new P({props:{id:"green_task_mentions_per_active_job",title:"Per job",fmt:"0.000"}}),C=new P({props:{id:"green_task_mentions",title:"Mentions",fmt:"#,##0"}}),{c(){y(n.$$.fragment),i=f(),y(t.$$.fragment),_=f(),y(m.$$.fragment),r=f(),y(p.$$.fragment),S=f(),y(d.$$.fragment),L=f(),y(R.$$.fragment),x=f(),y(C.$$.fragment)},l(a){T(n.$$.fragment,a),i=u(a),T(t.$$.fragment,a),_=u(a),T(m.$$.fragment,a),r=u(a),T(p.$$.fragment,a),S=u(a),T(d.$$.fragment,a),L=u(a),T(R.$$.fragment,a),x=u(a),T(C.$$.fragment,a)},m(a,v){h(n,a,v),l(a,i,v),h(t,a,v),l(a,_,v),h(m,a,v),l(a,r,v),h(p,a,v),l(a,S,v),h(d,a,v),l(a,L,v),h(R,a,v),l(a,x,v),h(C,a,v),O=!0},p:we,i(a){O||(g(n.$$.fragment,a),g(t.$$.fragment,a),g(m.$$.fragment,a),g(p.$$.fragment,a),g(d.$$.fragment,a),g(R.$$.fragment,a),g(C.$$.fragment,a),O=!0)},o(a){k(n.$$.fragment,a),k(t.$$.fragment,a),k(m.$$.fragment,a),k(p.$$.fragment,a),k(d.$$.fragment,a),k(R.$$.fragment,a),k(C.$$.fragment,a),O=!1},d(a){a&&(o(i),o(_),o(r),o(S),o(L),o(x)),b(n,a),b(t,a),b(m,a),b(p,a),b(d,a),b(R,a),b(C,a)}}}function Vn(c){let n,i,t,_,m,r,p="This page compares official occupation labels with postings-derived task-bundle evidence in the NLx corpus. STEM is the main case: the task signal is large enough to support a fuller comparison between official O*NET/BLS STEM occupations and postings-derived STEM candidates. Green is included below as a smaller companion check.",S,d,L="<strong>NLx data disclaimer.</strong> The National Labor Exchange (NLx) Data Trust bears no responsibility for the analyses or interpretations of the data presented here.",R,x,C="<strong>Candidate convention.</strong> A postings-derived candidate is an occupation with above-average concentration of the task bundle (<code>RCA &gt; 1</code>) and enough supporting evidence: at least 25,000 active jobs, 250 task mentions, 5 distinct task IDs, 0.08 task mentions per active job, and a 4% task share. Occupations with <code>RCA &gt; 1</code> that fail one or more of those checks are shown as “not enough evidence for candidate.” These are diagnostic posting measures, not replacements for official classifications.",O,a,v,Ke='<a href="#stem-and-green-task-intensity">STEM And Green Task Intensity</a>',Z,Q,Me="LLM-validated task mentions are divided by NLx monthly active jobs. This normalizes by the MAJ denominator rather than raw posting volume.",Se,ee,Xe="Compare changes in STEM- and green-task intensity over time, then inspect their distribution across occupations below.",te,B,Ee='<a href="#figure-ns-1-stem-and-green-task-intensity-over-time">Figure NS-1. STEM and green task intensity over time</a>',Re,ne,xe,U,_e='<a href="#stem-task-bundle">STEM Task Bundle</a>',me,W,Ye='<a href="#figure-ns-2-no-rim-chord-map-of-onet-stem-task-bundle-links-across-soc-2-occupation-groups">Figure NS-2. No-rim chord map of O*NET STEM task bundle links across SOC-2 occupation groups</a>',Ce,z,ce='<figcaption class="text-sm text-gray-700 mb-6"><strong>STEM task bundle.</strong> O*NET STEM task statements appearing in NLx postings, aggregated across SOC-2 groups. The figure is a visual guide to the task bundle used below; it is not a STEM-occupation label.</figcaption> <img class="w-full max-w-5xl mx-auto block" src="/us-lmi/dynamic-maps/network_soc2_stem_tasks.png" alt="No-rim chord map of O*NET STEM task bundle links across SOC-2 occupation groups"/>',ue,fe,N,se,le,J,de,ae,ze,ie,G,pe,St,Ge,ot,We,ge,jt='<a href="#table-1-official-stem-and-postings-derived-stem-candidates">Table 1. Official STEM and postings-derived STEM candidates</a>',lt,Le,qt="<strong>Terms.</strong> Group compares official O*NET/BLS STEM labels with the posting-derived STEM screen. Active jobs is the NLx active-job denominator; mentions are LLM-validated STEM task mentions.",_t,He,mt,Je,It='<summary class="text-lg font-semibold cursor-pointer my-4">STEM candidate screen</summary> <div class="border border-gray-200 rounded p-4 my-4 text-sm bg-white"><p><code>STEM_task_RCA = occupation STEM task share / corpus STEM task share</code></p> <p><code>postings_derived_STEM_candidate = 1</code> when <code>STEM_task_RCA &gt; 1</code>, <code>active_jobs &gt;= 25,000</code>, <code>STEM_task_mentions &gt;= 250</code>, <code>distinct_STEM_task_IDs &gt;= 5</code>, <code>STEM_mentions_per_active_job &gt;= 0.08</code>, and <code>STEM_task_share &gt;= 4%</code>.</p></div>',ct,Ze,$e,Dt='<a href="#table-2-top-occupations-by-llm-validated-stem-task-rca">Table 2. Top occupations by LLM-validated STEM task RCA</a>',ut,Ne,Ft="<strong>Terms.</strong> RCA = occupation STEM task share / corpus STEM task share. Share = STEM task mentions / all task mentions for the occupation. Per job = STEM task mentions / active jobs. “Not enough evidence for candidate” means <code>RCA &gt; 1</code>, but one or more candidate evidence checks failed.",ft,Oe,pt,ke,Pt='<a href="#green-task-bundle-companion-check">Green Task Bundle Companion Check</a>',dt,Ae,Bt="Green task evidence moves in smaller steps than STEM in this NLx cut. The table below keeps the same official-vs-posting comparison, but the page treats it as a compact companion measure rather than a full standalone finding.",gt,ve,Ut='<a href="#figure-ns-3-no-rim-chord-map-of-onet-green-task-bundle-links-across-soc-2-occupation-groups">Figure NS-3. No-rim chord map of O*NET green task bundle links across SOC-2 occupation groups</a>',$t,je,Vt='<figcaption class="text-sm text-gray-700 mb-6"><strong>Green task bundle.</strong> O*NET green task statements appearing in NLx postings, aggregated across SOC-2 groups. This is a compact companion view for the green task bundle, not a green-occupation label.</figcaption> <img class="w-full max-w-5xl mx-auto block" src="/us-lmi/dynamic-maps/network_soc2_green_tasks.png" alt="No-rim chord map of O*NET green task bundle links across SOC-2 occupation groups"/>',kt,et,V,qe,Et,Ie,Rt,De,xt,Fe,Ct,Pe,Gt,Be,vt,tt,be,Qt='<a href="#table-3-top-occupations-by-llm-validated-green-task-rca">Table 3. Top occupations by LLM-validated green task RCA</a>',bt,Ue,zt="<strong>Terms.</strong> RCA, Share, and Per job follow the STEM table definitions, replacing STEM task mentions with LLM-validated green task mentions. “Not enough evidence for candidate” means <code>RCA &gt; 1</code>, but one or more candidate evidence checks failed.",ht,Ve,Tt,he,Jt='<a href="#evidence-path">Evidence Path</a>',yt,Qe,Kt='STEM and green task labels use separate two-model agreement procedures documented in <a href="/us-lmi/methodology/audit-trail#green-and-stem-task-agreement-procedures" class="markdown">Agreement And Audit Trail</a>. RCA is defined in <a href="/us-lmi/methodology#revealed-comparative-advantage-rca" class="markdown">Methods</a>.',wt,Te=typeof E<"u"&&E.title&&E.hide_title!==!0&&An();function $n(e,s){return typeof E<"u"&&E.title?qn:jn}let rt=$n()(c),ye=typeof E=="object"&&In(),A=c[0]&&cn(c);ne=new Nn({props:{data:c[0],x:"month_start",y:"task_mentions_per_active_job",series:"signal",yAxisTitle:"LLM-validated task mentions per NLx active job",yFmt:"0.000",title:"STEM and green task intensity over time"}});let j=c[1]&&un(c);se=new oe({props:{data:c[1],value:"official_onet_bls_stem_occupations",title:"Official STEM occupations",fmt:"#,##0"}}),J=new oe({props:{data:c[1],value:"postings_derived_stem_occupations",title:"Posting-derived STEM candidates",fmt:"#,##0"}}),ae=new oe({props:{data:c[1],value:"overlap_occupations",title:"Overlap",fmt:"#,##0"}}),ie=new oe({props:{data:c[1],value:"official_only_occupations",title:"Official only",fmt:"#,##0"}}),pe=new oe({props:{data:c[1],value:"postings_only_occupations",title:"Posting-only",fmt:"#,##0"}}),Ge=new oe({props:{data:c[1],value:"corpus_stem_task_share",title:"Corpus STEM task share",fmt:"0.0%"}});let q=c[2]&&fn(c);He=new Ot({props:{data:c[2],rowsPerPage:"10",$$slots:{default:[Pn]},$$scope:{ctx:c}}});let I=c[3]&&pn(c);Oe=new Ot({props:{data:c[3],groupBy:"stem_comparison_group",rowsPerPage:"25",$$slots:{default:[Bn]},$$scope:{ctx:c}}});let D=c[4]&&dn(c);qe=new oe({props:{data:c[4],value:"official_onet_bls_green_occupations",title:"Official green occupations",fmt:"#,##0"}}),Ie=new oe({props:{data:c[4],value:"postings_derived_green_occupations",title:"Posting-derived green candidates",fmt:"#,##0"}}),De=new oe({props:{data:c[4],value:"overlap_occupations",title:"Overlap",fmt:"#,##0"}}),Fe=new oe({props:{data:c[4],value:"official_only_occupations",title:"Official only",fmt:"#,##0"}}),Pe=new oe({props:{data:c[4],value:"postings_only_occupations",title:"Posting-only",fmt:"#,##0"}}),Be=new oe({props:{data:c[4],value:"corpus_green_task_share",title:"Corpus green task share",fmt:"0.0%"}});let F=c[5]&&gn(c);return Ve=new Ot({props:{data:c[5],groupBy:"green_comparison_group",rowsPerPage:"25",$$slots:{default:[Un]},$$scope:{ctx:c}}}),{c(){Te&&Te.c(),n=f(),rt.c(),i=M("meta"),t=M("meta"),ye&&ye.c(),_=Mt(),m=f(),r=M("p"),r.textContent=p,S=f(),d=M("div"),d.innerHTML=L,R=f(),x=M("div"),x.innerHTML=C,O=f(),A&&A.c(),a=f(),v=M("h2"),v.innerHTML=Ke,Z=f(),Q=M("p"),Q.textContent=Me,Se=f(),ee=M("p"),ee.textContent=Xe,te=f(),B=M("h3"),B.innerHTML=Ee,Re=f(),y(ne.$$.fragment),xe=f(),U=M("h2"),U.innerHTML=_e,me=f(),W=M("h3"),W.innerHTML=Ye,Ce=f(),z=M("figure"),z.innerHTML=ce,ue=f(),j&&j.c(),fe=f(),N=M("div"),y(se.$$.fragment),le=f(),y(J.$$.fragment),de=f(),y(ae.$$.fragment),ze=f(),y(ie.$$.fragment),G=f(),y(pe.$$.fragment),St=f(),y(Ge.$$.fragment),ot=f(),q&&q.c(),We=f(),ge=M("h3"),ge.innerHTML=jt,lt=f(),Le=M("div"),Le.innerHTML=qt,_t=f(),y(He.$$.fragment),mt=f(),Je=M("details"),Je.innerHTML=It,ct=f(),I&&I.c(),Ze=f(),$e=M("h3"),$e.innerHTML=Dt,ut=f(),Ne=M("div"),Ne.innerHTML=Ft,ft=f(),y(Oe.$$.fragment),pt=f(),ke=M("h2"),ke.innerHTML=Pt,dt=f(),Ae=M("p"),Ae.textContent=Bt,gt=f(),ve=M("h3"),ve.innerHTML=Ut,$t=f(),je=M("figure"),je.innerHTML=Vt,kt=f(),D&&D.c(),et=f(),V=M("div"),y(qe.$$.fragment),Et=f(),y(Ie.$$.fragment),Rt=f(),y(De.$$.fragment),xt=f(),y(Fe.$$.fragment),Ct=f(),y(Pe.$$.fragment),Gt=f(),y(Be.$$.fragment),vt=f(),F&&F.c(),tt=f(),be=M("h3"),be.innerHTML=Qt,bt=f(),Ue=M("div"),Ue.innerHTML=zt,ht=f(),y(Ve.$$.fragment),Tt=f(),he=M("h2"),he.innerHTML=Jt,yt=f(),Qe=M("p"),Qe.innerHTML=Kt,this.h()},l(e){Te&&Te.l(e),n=u(e);const s=vn("svelte-2igo1p",document.head);rt.l(s),i=w(s,"META",{name:!0,content:!0}),t=w(s,"META",{name:!0,content:!0}),ye&&ye.l(s),_=Mt(),s.forEach(o),m=u(e),r=w(e,"P",{class:!0,"data-svelte-h":!0}),H(r)!=="svelte-drgjuk"&&(r.textContent=p),S=u(e),d=w(e,"DIV",{class:!0,"data-svelte-h":!0}),H(d)!=="svelte-q7eegh"&&(d.innerHTML=L),R=u(e),x=w(e,"DIV",{class:!0,"data-svelte-h":!0}),H(x)!=="svelte-5gok0e"&&(x.innerHTML=C),O=u(e),A&&A.l(e),a=u(e),v=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),H(v)!=="svelte-8hnr4n"&&(v.innerHTML=Ke),Z=u(e),Q=w(e,"P",{class:!0,"data-svelte-h":!0}),H(Q)!=="svelte-6qpjj2"&&(Q.textContent=Me),Se=u(e),ee=w(e,"P",{class:!0,"data-svelte-h":!0}),H(ee)!=="svelte-1xwa9sy"&&(ee.textContent=Xe),te=u(e),B=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),H(B)!=="svelte-1hanj3f"&&(B.innerHTML=Ee),Re=u(e),T(ne.$$.fragment,e),xe=u(e),U=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),H(U)!=="svelte-1tu7p2i"&&(U.innerHTML=_e),me=u(e),W=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),H(W)!=="svelte-1b4kuiy"&&(W.innerHTML=Ye),Ce=u(e),z=w(e,"FIGURE",{class:!0,"data-svelte-h":!0}),H(z)!=="svelte-9fqye"&&(z.innerHTML=ce),ue=u(e),j&&j.l(e),fe=u(e),N=w(e,"DIV",{class:!0});var K=At(N);T(se.$$.fragment,K),le=u(K),T(J.$$.fragment,K),de=u(K),T(ae.$$.fragment,K),ze=u(K),T(ie.$$.fragment,K),G=u(K),T(pe.$$.fragment,K),St=u(K),T(Ge.$$.fragment,K),K.forEach(o),ot=u(e),q&&q.l(e),We=u(e),ge=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),H(ge)!=="svelte-djphf8"&&(ge.innerHTML=jt),lt=u(e),Le=w(e,"DIV",{class:!0,"data-svelte-h":!0}),H(Le)!=="svelte-1642slx"&&(Le.innerHTML=qt),_t=u(e),T(He.$$.fragment,e),mt=u(e),Je=w(e,"DETAILS",{"data-svelte-h":!0}),H(Je)!=="svelte-kknvdl"&&(Je.innerHTML=It),ct=u(e),I&&I.l(e),Ze=u(e),$e=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),H($e)!=="svelte-1dqokn4"&&($e.innerHTML=Dt),ut=u(e),Ne=w(e,"DIV",{class:!0,"data-svelte-h":!0}),H(Ne)!=="svelte-1vf6u4d"&&(Ne.innerHTML=Ft),ft=u(e),T(Oe.$$.fragment,e),pt=u(e),ke=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),H(ke)!=="svelte-oetpry"&&(ke.innerHTML=Pt),dt=u(e),Ae=w(e,"P",{class:!0,"data-svelte-h":!0}),H(Ae)!=="svelte-1xd5moe"&&(Ae.textContent=Bt),gt=u(e),ve=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),H(ve)!=="svelte-xgslbv"&&(ve.innerHTML=Ut),$t=u(e),je=w(e,"FIGURE",{class:!0,"data-svelte-h":!0}),H(je)!=="svelte-1y52fh0"&&(je.innerHTML=Vt),kt=u(e),D&&D.l(e),et=u(e),V=w(e,"DIV",{class:!0});var X=At(V);T(qe.$$.fragment,X),Et=u(X),T(Ie.$$.fragment,X),Rt=u(X),T(De.$$.fragment,X),xt=u(X),T(Fe.$$.fragment,X),Ct=u(X),T(Pe.$$.fragment,X),Gt=u(X),T(Be.$$.fragment,X),X.forEach(o),vt=u(e),F&&F.l(e),tt=u(e),be=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),H(be)!=="svelte-1m2p8ev"&&(be.innerHTML=Qt),bt=u(e),Ue=w(e,"DIV",{class:!0,"data-svelte-h":!0}),H(Ue)!=="svelte-12k8aux"&&(Ue.innerHTML=zt),ht=u(e),T(Ve.$$.fragment,e),Tt=u(e),he=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),H(he)!=="svelte-1uqwyny"&&(he.innerHTML=Jt),yt=u(e),Qe=w(e,"P",{class:!0,"data-svelte-h":!0}),H(Qe)!=="svelte-19f784f"&&(Qe.innerHTML=Kt),this.h()},h(){$(i,"name","twitter:card"),$(i,"content","summary_large_image"),$(t,"name","twitter:site"),$(t,"content","@evidence_dev"),$(r,"class","markdown"),$(d,"class","border-l-4 border-gray-500 bg-gray-50 px-4 py-3 my-4 text-sm text-gray-700"),$(x,"class","border-l-4 border-amber-500 bg-amber-50 px-4 py-3 my-4 text-sm text-amber-900"),$(v,"class","markdown"),$(v,"id","stem-and-green-task-intensity"),$(Q,"class","markdown"),$(ee,"class","markdown"),$(B,"class","markdown"),$(B,"id","figure-ns-1-stem-and-green-task-intensity-over-time"),$(U,"class","markdown"),$(U,"id","stem-task-bundle"),$(W,"class","markdown"),$(W,"id","figure-ns-2-no-rim-chord-map-of-onet-stem-task-bundle-links-across-soc-2-occupation-groups"),$(z,"class","my-6 border border-gray-200 bg-white p-4"),$(N,"class","grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4 my-6"),$(ge,"class","markdown"),$(ge,"id","table-1-official-stem-and-postings-derived-stem-candidates"),$(Le,"class","text-sm my-3"),$($e,"class","markdown"),$($e,"id","table-2-top-occupations-by-llm-validated-stem-task-rca"),$(Ne,"class","text-sm my-3"),$(ke,"class","markdown"),$(ke,"id","green-task-bundle-companion-check"),$(Ae,"class","markdown"),$(ve,"class","markdown"),$(ve,"id","figure-ns-3-no-rim-chord-map-of-onet-green-task-bundle-links-across-soc-2-occupation-groups"),$(je,"class","my-6 border border-gray-200 bg-white p-4"),$(V,"class","grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4 my-6"),$(be,"class","markdown"),$(be,"id","table-3-top-occupations-by-llm-validated-green-task-rca"),$(Ue,"class","text-sm my-3"),$(he,"class","markdown"),$(he,"id","evidence-path"),$(Qe,"class","markdown")},m(e,s){Te&&Te.m(e,s),l(e,n,s),rt.m(document.head,null),Y(document.head,i),Y(document.head,t),ye&&ye.m(document.head,null),Y(document.head,_),l(e,m,s),l(e,r,s),l(e,S,s),l(e,d,s),l(e,R,s),l(e,x,s),l(e,O,s),A&&A.m(e,s),l(e,a,s),l(e,v,s),l(e,Z,s),l(e,Q,s),l(e,Se,s),l(e,ee,s),l(e,te,s),l(e,B,s),l(e,Re,s),h(ne,e,s),l(e,xe,s),l(e,U,s),l(e,me,s),l(e,W,s),l(e,Ce,s),l(e,z,s),l(e,ue,s),j&&j.m(e,s),l(e,fe,s),l(e,N,s),h(se,N,null),Y(N,le),h(J,N,null),Y(N,de),h(ae,N,null),Y(N,ze),h(ie,N,null),Y(N,G),h(pe,N,null),Y(N,St),h(Ge,N,null),l(e,ot,s),q&&q.m(e,s),l(e,We,s),l(e,ge,s),l(e,lt,s),l(e,Le,s),l(e,_t,s),h(He,e,s),l(e,mt,s),l(e,Je,s),l(e,ct,s),I&&I.m(e,s),l(e,Ze,s),l(e,$e,s),l(e,ut,s),l(e,Ne,s),l(e,ft,s),h(Oe,e,s),l(e,pt,s),l(e,ke,s),l(e,dt,s),l(e,Ae,s),l(e,gt,s),l(e,ve,s),l(e,$t,s),l(e,je,s),l(e,kt,s),D&&D.m(e,s),l(e,et,s),l(e,V,s),h(qe,V,null),Y(V,Et),h(Ie,V,null),Y(V,Rt),h(De,V,null),Y(V,xt),h(Fe,V,null),Y(V,Ct),h(Pe,V,null),Y(V,Gt),h(Be,V,null),l(e,vt,s),F&&F.m(e,s),l(e,tt,s),l(e,be,s),l(e,bt,s),l(e,Ue,s),l(e,ht,s),h(Ve,e,s),l(e,Tt,s),l(e,he,s),l(e,yt,s),l(e,Qe,s),wt=!0},p(e,s){typeof E<"u"&&E.title&&E.hide_title!==!0&&Te.p(e,s),rt.p(e,s),typeof E=="object"&&ye.p(e,s),e[0]?A?(A.p(e,s),s[0]&1&&g(A,1)):(A=cn(e),A.c(),g(A,1),A.m(a.parentNode,a)):A&&(st(),k(A,1,1,()=>{A=null}),nt());const K={};s[0]&1&&(K.data=e[0]),ne.$set(K),e[1]?j?(j.p(e,s),s[0]&2&&g(j,1)):(j=un(e),j.c(),g(j,1),j.m(fe.parentNode,fe)):j&&(st(),k(j,1,1,()=>{j=null}),nt());const X={};s[0]&2&&(X.data=e[1]),se.$set(X);const Xt={};s[0]&2&&(Xt.data=e[1]),J.$set(Xt);const Yt={};s[0]&2&&(Yt.data=e[1]),ae.$set(Yt);const Wt={};s[0]&2&&(Wt.data=e[1]),ie.$set(Wt);const Zt={};s[0]&2&&(Zt.data=e[1]),pe.$set(Zt);const en={};s[0]&2&&(en.data=e[1]),Ge.$set(en),e[2]?q?(q.p(e,s),s[0]&4&&g(q,1)):(q=fn(e),q.c(),g(q,1),q.m(We.parentNode,We)):q&&(st(),k(q,1,1,()=>{q=null}),nt());const Lt={};s[0]&4&&(Lt.data=e[2]),s[1]&131072&&(Lt.$$scope={dirty:s,ctx:e}),He.$set(Lt),e[3]?I?(I.p(e,s),s[0]&8&&g(I,1)):(I=pn(e),I.c(),g(I,1),I.m(Ze.parentNode,Ze)):I&&(st(),k(I,1,1,()=>{I=null}),nt());const Ht={};s[0]&8&&(Ht.data=e[3]),s[1]&131072&&(Ht.$$scope={dirty:s,ctx:e}),Oe.$set(Ht),e[4]?D?(D.p(e,s),s[0]&16&&g(D,1)):(D=dn(e),D.c(),g(D,1),D.m(et.parentNode,et)):D&&(st(),k(D,1,1,()=>{D=null}),nt());const tn={};s[0]&16&&(tn.data=e[4]),qe.$set(tn);const nn={};s[0]&16&&(nn.data=e[4]),Ie.$set(nn);const sn={};s[0]&16&&(sn.data=e[4]),De.$set(sn);const an={};s[0]&16&&(an.data=e[4]),Fe.$set(an);const rn={};s[0]&16&&(rn.data=e[4]),Pe.$set(rn);const on={};s[0]&16&&(on.data=e[4]),Be.$set(on),e[5]?F?(F.p(e,s),s[0]&32&&g(F,1)):(F=gn(e),F.c(),g(F,1),F.m(tt.parentNode,tt)):F&&(st(),k(F,1,1,()=>{F=null}),nt());const Nt={};s[0]&32&&(Nt.data=e[5]),s[1]&131072&&(Nt.$$scope={dirty:s,ctx:e}),Ve.$set(Nt)},i(e){wt||(g(A),g(ne.$$.fragment,e),g(j),g(se.$$.fragment,e),g(J.$$.fragment,e),g(ae.$$.fragment,e),g(ie.$$.fragment,e),g(pe.$$.fragment,e),g(Ge.$$.fragment,e),g(q),g(He.$$.fragment,e),g(I),g(Oe.$$.fragment,e),g(D),g(qe.$$.fragment,e),g(Ie.$$.fragment,e),g(De.$$.fragment,e),g(Fe.$$.fragment,e),g(Pe.$$.fragment,e),g(Be.$$.fragment,e),g(F),g(Ve.$$.fragment,e),wt=!0)},o(e){k(A),k(ne.$$.fragment,e),k(j),k(se.$$.fragment,e),k(J.$$.fragment,e),k(ae.$$.fragment,e),k(ie.$$.fragment,e),k(pe.$$.fragment,e),k(Ge.$$.fragment,e),k(q),k(He.$$.fragment,e),k(I),k(Oe.$$.fragment,e),k(D),k(qe.$$.fragment,e),k(Ie.$$.fragment,e),k(De.$$.fragment,e),k(Fe.$$.fragment,e),k(Pe.$$.fragment,e),k(Be.$$.fragment,e),k(F),k(Ve.$$.fragment,e),wt=!1},d(e){e&&(o(n),o(m),o(r),o(S),o(d),o(R),o(x),o(O),o(a),o(v),o(Z),o(Q),o(Se),o(ee),o(te),o(B),o(Re),o(xe),o(U),o(me),o(W),o(Ce),o(z),o(ue),o(fe),o(N),o(ot),o(We),o(ge),o(lt),o(Le),o(_t),o(mt),o(Je),o(ct),o(Ze),o($e),o(ut),o(Ne),o(ft),o(pt),o(ke),o(dt),o(Ae),o(gt),o(ve),o($t),o(je),o(kt),o(et),o(V),o(vt),o(tt),o(be),o(bt),o(Ue),o(ht),o(Tt),o(he),o(yt),o(Qe)),Te&&Te.d(e),rt.d(e),o(i),o(t),ye&&ye.d(e),o(_),A&&A.d(e),b(ne,e),j&&j.d(e),b(se),b(J),b(ae),b(ie),b(pe),b(Ge),q&&q.d(e),b(He,e),I&&I.d(e),b(Oe,e),D&&D.d(e),b(qe),b(Ie),b(De),b(Fe),b(Pe),b(Be),F&&F.d(e),b(Ve,e)}}}const E={title:"STEM and Green Task Bundles"};function Qn(c,n,i){let t,_;ln(c,Hn,G=>i(32,t=G)),ln(c,mn,G=>i(38,_=G));let{data:m}=n,{data:r={},customFormattingSettings:p,__db:S,inputs:d}=m;bn(mn,_="52c7ccd2469b78a65c947ef58d1880c4",_);let L=xn(Rn(d));hn(L.subscribe(G=>d=G)),Tn(Ln,{getCustomFormats:()=>p.customFormats||[]});const R=(G,pe)=>On(S.query,G,{query_name:pe});Cn(R),t.params,yn(()=>!0);let x={initialData:void 0,initialError:void 0},C=re`select
  month_start,
  signal,
  task_mentions_per_active_job
from nlx.AGGR_NlxTaskSignalIntensityByMonth
where signal in ('STEM', 'Green')
order by month_start, signal`,O=`select
  month_start,
  signal,
  task_mentions_per_active_job
from nlx.AGGR_NlxTaskSignalIntensityByMonth
where signal in ('STEM', 'Green')
order by month_start, signal`;r.task_signal_trend_data&&(r.task_signal_trend_data instanceof Error?x.initialError=r.task_signal_trend_data:x.initialData=r.task_signal_trend_data,r.task_signal_trend_columns&&(x.knownColumns=r.task_signal_trend_columns));let a,v=!1;const Ke=at.createReactive({callback:G=>{i(0,a=G)},execFn:R},{id:"task_signal_trend",...x});Ke(O,{noResolve:C,...x}),globalThis[Symbol.for("task_signal_trend")]={get value(){return a}};let Z={initialData:void 0,initialError:void 0},Q=re`select *
from nlx.AGGR_NlxStemOccupationHeadline`,Me=`select *
from nlx.AGGR_NlxStemOccupationHeadline`;r.stem_headline_data&&(r.stem_headline_data instanceof Error?Z.initialError=r.stem_headline_data:Z.initialData=r.stem_headline_data,r.stem_headline_columns&&(Z.knownColumns=r.stem_headline_columns));let Se,ee=!1;const Xe=at.createReactive({callback:G=>{i(1,Se=G)},execFn:R},{id:"stem_headline",...Z});Xe(Me,{noResolve:Q,...Z}),globalThis[Symbol.for("stem_headline")]={get value(){return Se}};let te={initialData:void 0,initialError:void 0},B=re`select
  stem_comparison_group,
  count(*) as occupations,
  sum(active_jobs) as active_jobs,
  sum(stem_task_mentions) as stem_task_mentions
from nlx.AGGR_NlxStemOccupationRca
where official_onet_bls_stem = 1 or postings_derived_stem = 1
group by 1
order by case
  when stem_comparison_group = 'Overlap: official and postings-derived' then 1
  when stem_comparison_group = 'Official O*NET/BLS STEM only' then 2
  when stem_comparison_group = 'Postings-derived STEM only' then 3
  else 4
end`,Ee=`select
  stem_comparison_group,
  count(*) as occupations,
  sum(active_jobs) as active_jobs,
  sum(stem_task_mentions) as stem_task_mentions
from nlx.AGGR_NlxStemOccupationRca
where official_onet_bls_stem = 1 or postings_derived_stem = 1
group by 1
order by case
  when stem_comparison_group = 'Overlap: official and postings-derived' then 1
  when stem_comparison_group = 'Official O*NET/BLS STEM only' then 2
  when stem_comparison_group = 'Postings-derived STEM only' then 3
  else 4
end`;r.stem_comparison_counts_data&&(r.stem_comparison_counts_data instanceof Error?te.initialError=r.stem_comparison_counts_data:te.initialData=r.stem_comparison_counts_data,r.stem_comparison_counts_columns&&(te.knownColumns=r.stem_comparison_counts_columns));let Re,ne=!1;const xe=at.createReactive({callback:G=>{i(2,Re=G)},execFn:R},{id:"stem_comparison_counts",...te});xe(Ee,{noResolve:B,...te}),globalThis[Symbol.for("stem_comparison_counts")]={get value(){return Re}};let U={initialData:void 0,initialError:void 0},_e=re`select
  stem_rca_rank,
  occ8,
  soc_title,
  stem_comparison_group,
  stem_task_rca,
  stem_task_share,
  stem_task_mentions_per_active_job,
  stem_task_mentions,
  distinct_stem_task_ids,
  active_jobs
from nlx.AGGR_NlxStemOccupationRca
where stem_task_mentions > 0
order by stem_rca_rank
limit 150`,me=`select
  stem_rca_rank,
  occ8,
  soc_title,
  stem_comparison_group,
  stem_task_rca,
  stem_task_share,
  stem_task_mentions_per_active_job,
  stem_task_mentions,
  distinct_stem_task_ids,
  active_jobs
from nlx.AGGR_NlxStemOccupationRca
where stem_task_mentions > 0
order by stem_rca_rank
limit 150`;r.stem_ranked_occupations_data&&(r.stem_ranked_occupations_data instanceof Error?U.initialError=r.stem_ranked_occupations_data:U.initialData=r.stem_ranked_occupations_data,r.stem_ranked_occupations_columns&&(U.knownColumns=r.stem_ranked_occupations_columns));let W,Ye=!1;const Ce=at.createReactive({callback:G=>{i(3,W=G)},execFn:R},{id:"stem_ranked_occupations",...U});Ce(me,{noResolve:_e,...U}),globalThis[Symbol.for("stem_ranked_occupations")]={get value(){return W}};let z={initialData:void 0,initialError:void 0},ce=re`select *
from nlx.AGGR_NlxGreenOccupationHeadline`,ue=`select *
from nlx.AGGR_NlxGreenOccupationHeadline`;r.green_headline_data&&(r.green_headline_data instanceof Error?z.initialError=r.green_headline_data:z.initialData=r.green_headline_data,r.green_headline_columns&&(z.knownColumns=r.green_headline_columns));let fe,N=!1;const se=at.createReactive({callback:G=>{i(4,fe=G)},execFn:R},{id:"green_headline",...z});se(ue,{noResolve:ce,...z}),globalThis[Symbol.for("green_headline")]={get value(){return fe}};let le={initialData:void 0,initialError:void 0},J=re`select
  green_rca_rank,
  occ8,
  soc_title,
  green_comparison_group,
  green_task_rca,
  green_task_share,
  green_task_mentions_per_active_job,
  green_task_mentions,
  distinct_green_task_ids,
  active_jobs
from nlx.AGGR_NlxGreenOccupationRca
where green_task_mentions > 0
order by green_rca_rank
limit 75`,de=`select
  green_rca_rank,
  occ8,
  soc_title,
  green_comparison_group,
  green_task_rca,
  green_task_share,
  green_task_mentions_per_active_job,
  green_task_mentions,
  distinct_green_task_ids,
  active_jobs
from nlx.AGGR_NlxGreenOccupationRca
where green_task_mentions > 0
order by green_rca_rank
limit 75`;r.green_ranked_occupations_data&&(r.green_ranked_occupations_data instanceof Error?le.initialError=r.green_ranked_occupations_data:le.initialData=r.green_ranked_occupations_data,r.green_ranked_occupations_columns&&(le.knownColumns=r.green_ranked_occupations_columns));let ae,ze=!1;const ie=at.createReactive({callback:G=>{i(5,ae=G)},execFn:R},{id:"green_ranked_occupations",...le});return ie(de,{noResolve:J,...le}),globalThis[Symbol.for("green_ranked_occupations")]={get value(){return ae}},c.$$set=G=>{"data"in G&&i(6,m=G.data)},c.$$.update=()=>{c.$$.dirty[0]&64&&i(7,{data:r={},customFormattingSettings:p,__db:S}=m,r),c.$$.dirty[0]&128&&Gn.set(Object.keys(r).length>0),c.$$.dirty[1]&2&&t.params,c.$$.dirty[0]&3840&&(C||!v?C||(Ke(O,{noResolve:C,...x}),i(11,v=!0)):Ke(O,{noResolve:C})),c.$$.dirty[0]&61440&&(Q||!ee?Q||(Xe(Me,{noResolve:Q,...Z}),i(15,ee=!0)):Xe(Me,{noResolve:Q})),c.$$.dirty[0]&983040&&(B||!ne?B||(xe(Ee,{noResolve:B,...te}),i(19,ne=!0)):xe(Ee,{noResolve:B})),c.$$.dirty[0]&15728640&&(_e||!Ye?_e||(Ce(me,{noResolve:_e,...U}),i(23,Ye=!0)):Ce(me,{noResolve:_e})),c.$$.dirty[0]&251658240&&(ce||!N?ce||(se(ue,{noResolve:ce,...z}),i(27,N=!0)):se(ue,{noResolve:ce})),c.$$.dirty[0]&1879048192|c.$$.dirty[1]&1&&(J||!ze?J||(ie(de,{noResolve:J,...le}),i(31,ze=!0)):ie(de,{noResolve:J}))},i(9,C=re`select
  month_start,
  signal,
  task_mentions_per_active_job
from nlx.AGGR_NlxTaskSignalIntensityByMonth
where signal in ('STEM', 'Green')
order by month_start, signal`),i(10,O=`select
  month_start,
  signal,
  task_mentions_per_active_job
from nlx.AGGR_NlxTaskSignalIntensityByMonth
where signal in ('STEM', 'Green')
order by month_start, signal`),i(13,Q=re`select *
from nlx.AGGR_NlxStemOccupationHeadline`),i(14,Me=`select *
from nlx.AGGR_NlxStemOccupationHeadline`),i(17,B=re`select
  stem_comparison_group,
  count(*) as occupations,
  sum(active_jobs) as active_jobs,
  sum(stem_task_mentions) as stem_task_mentions
from nlx.AGGR_NlxStemOccupationRca
where official_onet_bls_stem = 1 or postings_derived_stem = 1
group by 1
order by case
  when stem_comparison_group = 'Overlap: official and postings-derived' then 1
  when stem_comparison_group = 'Official O*NET/BLS STEM only' then 2
  when stem_comparison_group = 'Postings-derived STEM only' then 3
  else 4
end`),i(18,Ee=`select
  stem_comparison_group,
  count(*) as occupations,
  sum(active_jobs) as active_jobs,
  sum(stem_task_mentions) as stem_task_mentions
from nlx.AGGR_NlxStemOccupationRca
where official_onet_bls_stem = 1 or postings_derived_stem = 1
group by 1
order by case
  when stem_comparison_group = 'Overlap: official and postings-derived' then 1
  when stem_comparison_group = 'Official O*NET/BLS STEM only' then 2
  when stem_comparison_group = 'Postings-derived STEM only' then 3
  else 4
end`),i(21,_e=re`select
  stem_rca_rank,
  occ8,
  soc_title,
  stem_comparison_group,
  stem_task_rca,
  stem_task_share,
  stem_task_mentions_per_active_job,
  stem_task_mentions,
  distinct_stem_task_ids,
  active_jobs
from nlx.AGGR_NlxStemOccupationRca
where stem_task_mentions > 0
order by stem_rca_rank
limit 150`),i(22,me=`select
  stem_rca_rank,
  occ8,
  soc_title,
  stem_comparison_group,
  stem_task_rca,
  stem_task_share,
  stem_task_mentions_per_active_job,
  stem_task_mentions,
  distinct_stem_task_ids,
  active_jobs
from nlx.AGGR_NlxStemOccupationRca
where stem_task_mentions > 0
order by stem_rca_rank
limit 150`),i(25,ce=re`select *
from nlx.AGGR_NlxGreenOccupationHeadline`),i(26,ue=`select *
from nlx.AGGR_NlxGreenOccupationHeadline`),i(29,J=re`select
  green_rca_rank,
  occ8,
  soc_title,
  green_comparison_group,
  green_task_rca,
  green_task_share,
  green_task_mentions_per_active_job,
  green_task_mentions,
  distinct_green_task_ids,
  active_jobs
from nlx.AGGR_NlxGreenOccupationRca
where green_task_mentions > 0
order by green_rca_rank
limit 75`),i(30,de=`select
  green_rca_rank,
  occ8,
  soc_title,
  green_comparison_group,
  green_task_rca,
  green_task_share,
  green_task_mentions_per_active_job,
  green_task_mentions,
  distinct_green_task_ids,
  active_jobs
from nlx.AGGR_NlxGreenOccupationRca
where green_task_mentions > 0
order by green_rca_rank
limit 75`),[a,Se,Re,W,fe,ae,m,r,x,C,O,v,Z,Q,Me,ee,te,B,Ee,ne,U,_e,me,Ye,z,ce,ue,N,le,J,de,ze,t]}class is extends Sn{constructor(n){super(),En(this,n,Qn,Vn,kn,{data:6},null,[-1,-1])}}export{is as component};
