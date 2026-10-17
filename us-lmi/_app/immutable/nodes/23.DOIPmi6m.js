import{s as Fe,d as o,i as r,a as ut,b as p,c as d,h as Ne,e as k,f as oe,g as L,j as Pe,k as g,l as v,m as He,n as qe,o as Ve,p as Ke,q as Qe,r as Mt,t as ze,u as We}from"../chunks/scheduler.TmfZfN_X.js";import{S as Xe,i as Ye,d as A,t as w,a as b,c as ee,m as j,b as T,e as M,g as se}from"../chunks/index.CKLTamEB.js";import{D as Ee,C as pt}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BLmrhC3S.js";import{w as Ze}from"../chunks/entry.D_I0byi6.js";import{e as ts,s as es,Q as ae,p as ss,a as Le,r as Oe,C as as}from"../chunks/inferColumnTypes.DQCA4D4f.js";import{h as Tt}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as ns}from"../chunks/stores.C11oRilr.js";import{Q as ie}from"../chunks/QueryViewer.DATGjO3_.js";import{B as Et}from"../chunks/BigValue.CTjldenN.js";import{L as ne}from"../chunks/LineChart.CzYPw9pz.js";import{p as os}from"../chunks/profile.BW8tN6E9.js";function is(u){var _;let a,n=(y.title??((_=y.og)==null?void 0:_.title))+"",e;return{c(){a=v("h1"),e=We(n),this.h()},l(l){a=k(l,"H1",{class:!0});var i=Pe(a);e=ze(i,n),i.forEach(o),this.h()},h(){p(a,"class","title")},m(l,i){r(l,a,i),ut(a,e)},p:Mt,d(l){l&&o(a)}}}function rs(u){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:Mt,p:Mt,d:Mt}}function _s(u){var i;let a,n,e,_,l;return document.title=a=y.title??((i=y.og)==null?void 0:i.title),{c(){n=g(),e=v("meta"),_=g(),l=v("meta"),this.h()},l(m){n=d(m),e=k(m,"META",{property:!0,content:!0}),_=d(m),l=k(m,"META",{name:!0,content:!0}),this.h()},h(){var m,h;p(e,"property","og:title"),p(e,"content",((m=y.og)==null?void 0:m.title)??y.title),p(l,"name","twitter:title"),p(l,"content",((h=y.og)==null?void 0:h.title)??y.title)},m(m,h){r(m,n,h),r(m,e,h),r(m,_,h),r(m,l,h)},p(m,h){var c;h&0&&a!==(a=y.title??((c=y.og)==null?void 0:c.title))&&(document.title=a)},d(m){m&&(o(n),o(e),o(_),o(l))}}}function ls(u){var l,i;let a,n,e=(y.description||((l=y.og)==null?void 0:l.description))&&ms(),_=((i=y.og)==null?void 0:i.image)&&cs();return{c(){e&&e.c(),a=g(),_&&_.c(),n=oe()},l(m){e&&e.l(m),a=d(m),_&&_.l(m),n=oe()},m(m,h){e&&e.m(m,h),r(m,a,h),_&&_.m(m,h),r(m,n,h)},p(m,h){var c,R;(y.description||(c=y.og)!=null&&c.description)&&e.p(m,h),(R=y.og)!=null&&R.image&&_.p(m,h)},d(m){m&&(o(a),o(n)),e&&e.d(m),_&&_.d(m)}}}function ms(u){let a,n,e,_,l;return{c(){a=v("meta"),n=g(),e=v("meta"),_=g(),l=v("meta"),this.h()},l(i){a=k(i,"META",{name:!0,content:!0}),n=d(i),e=k(i,"META",{property:!0,content:!0}),_=d(i),l=k(i,"META",{name:!0,content:!0}),this.h()},h(){var i,m,h;p(a,"name","description"),p(a,"content",y.description??((i=y.og)==null?void 0:i.description)),p(e,"property","og:description"),p(e,"content",((m=y.og)==null?void 0:m.description)??y.description),p(l,"name","twitter:description"),p(l,"content",((h=y.og)==null?void 0:h.description)??y.description)},m(i,m){r(i,a,m),r(i,n,m),r(i,e,m),r(i,_,m),r(i,l,m)},p:Mt,d(i){i&&(o(a),o(n),o(e),o(_),o(l))}}}function cs(u){let a,n,e;return{c(){a=v("meta"),n=g(),e=v("meta"),this.h()},l(_){a=k(_,"META",{property:!0,content:!0}),n=d(_),e=k(_,"META",{name:!0,content:!0}),this.h()},h(){var _,l;p(a,"property","og:image"),p(a,"content",Le((_=y.og)==null?void 0:_.image)),p(e,"name","twitter:image"),p(e,"content",Le((l=y.og)==null?void 0:l.image))},m(_,l){r(_,a,l),r(_,n,l),r(_,e,l)},p:Mt,d(_){_&&(o(a),o(n),o(e))}}}function Be(u){let a,n;return a=new ie({props:{queryID:"usajobs_corpus",queryResult:u[0]}}),{c(){M(a.$$.fragment)},l(e){T(a.$$.fragment,e)},m(e,_){j(a,e,_),n=!0},p(e,_){const l={};_[0]&1&&(l.queryResult=e[0]),a.$set(l)},i(e){n||(b(a.$$.fragment,e),n=!0)},o(e){w(a.$$.fragment,e),n=!1},d(e){A(a,e)}}}function Ue(u){let a,n;return a=new ie({props:{queryID:"usajobs_match_cascade",queryResult:u[1]}}),{c(){M(a.$$.fragment)},l(e){T(a.$$.fragment,e)},m(e,_){j(a,e,_),n=!0},p(e,_){const l={};_[0]&2&&(l.queryResult=e[1]),a.$set(l)},i(e){n||(b(a.$$.fragment,e),n=!0)},o(e){w(a.$$.fragment,e),n=!1},d(e){A(a,e)}}}function us(u){let a,n,e,_,l,i,m,h,c,R;return a=new pt({props:{id:"level",title:"Match level"}}),e=new pt({props:{id:"n_occupations",title:"Occs",fmt:"#,##0"}}),l=new pt({props:{id:"top10_n_pairs",title:"Pairs",fmt:"#,##0"}}),m=new pt({props:{id:"top10_n_in_onet",title:"In O*NET",fmt:"#,##0"}}),c=new pt({props:{id:"top10_in_onet_pct",title:"Share",fmt:"0.00"}}),{c(){M(a.$$.fragment),n=g(),M(e.$$.fragment),_=g(),M(l.$$.fragment),i=g(),M(m.$$.fragment),h=g(),M(c.$$.fragment)},l(f){T(a.$$.fragment,f),n=d(f),T(e.$$.fragment,f),_=d(f),T(l.$$.fragment,f),i=d(f),T(m.$$.fragment,f),h=d(f),T(c.$$.fragment,f)},m(f,$){j(a,f,$),r(f,n,$),j(e,f,$),r(f,_,$),j(l,f,$),r(f,i,$),j(m,f,$),r(f,h,$),j(c,f,$),R=!0},p:Mt,i(f){R||(b(a.$$.fragment,f),b(e.$$.fragment,f),b(l.$$.fragment,f),b(m.$$.fragment,f),b(c.$$.fragment,f),R=!0)},o(f){w(a.$$.fragment,f),w(e.$$.fragment,f),w(l.$$.fragment,f),w(m.$$.fragment,f),w(c.$$.fragment,f),R=!1},d(f){f&&(o(n),o(_),o(i),o(h)),A(a,f),A(e,f),A(l,f),A(m,f),A(c,f)}}}function xe(u){let a,n;return a=new ie({props:{queryID:"usajobs_monthly_signals",queryResult:u[2]}}),{c(){M(a.$$.fragment)},l(e){T(a.$$.fragment,e)},m(e,_){j(a,e,_),n=!0},p(e,_){const l={};_[0]&4&&(l.queryResult=e[2]),a.$set(l)},i(e){n||(b(a.$$.fragment,e),n=!0)},o(e){w(a.$$.fragment,e),n=!1},d(e){A(a,e)}}}function De(u){let a,n;return a=new ie({props:{queryID:"usajobs_ai_keyword_components_latest",queryResult:u[3]}}),{c(){M(a.$$.fragment)},l(e){T(a.$$.fragment,e)},m(e,_){j(a,e,_),n=!0},p(e,_){const l={};_[0]&8&&(l.queryResult=e[3]),a.$set(l)},i(e){n||(b(a.$$.fragment,e),n=!0)},o(e){w(a.$$.fragment,e),n=!1},d(e){A(a,e)}}}function ps(u){let a,n,e,_,l,i,m,h;return a=new pt({props:{id:"series",title:"AI concept map",wrap:"true"}}),e=new pt({props:{id:"n_postings_with_signal",title:"Postings",fmt:"#,##0"}}),l=new pt({props:{id:"n_concept_items",title:"Hits",fmt:"#,##0"}}),m=new pt({props:{id:"postings_per_1k_active_postings",title:"Per 1k",fmt:"0.0"}}),{c(){M(a.$$.fragment),n=g(),M(e.$$.fragment),_=g(),M(l.$$.fragment),i=g(),M(m.$$.fragment)},l(c){T(a.$$.fragment,c),n=d(c),T(e.$$.fragment,c),_=d(c),T(l.$$.fragment,c),i=d(c),T(m.$$.fragment,c)},m(c,R){j(a,c,R),r(c,n,R),j(e,c,R),r(c,_,R),j(l,c,R),r(c,i,R),j(m,c,R),h=!0},p:Mt,i(c){h||(b(a.$$.fragment,c),b(e.$$.fragment,c),b(l.$$.fragment,c),b(m.$$.fragment,c),h=!0)},o(c){w(a.$$.fragment,c),w(e.$$.fragment,c),w(l.$$.fragment,c),w(m.$$.fragment,c),h=!1},d(c){c&&(o(n),o(_),o(i)),A(a,c),A(e,c),A(l,c),A(m,c)}}}function fs(u){var ve;let a,n,e,_,l,i,m='<a href="#usajobs-summary">USAJOBS Summary</a>',h,c,R="Federal-only evidence from public USAJOBS postings and JAAT outputs. This section is a companion to the national NLx evidence, not a national labor-market estimate.",f,$,Q="<strong>How to read this section.</strong> USAJOBS pages describe federal posting text. Main findings should be read as federal mirrors or federal case studies unless a page explicitly compares them with NLx national evidence.",z,P,Ct=`<a href="/us-lmi/usajobs/federal-postings" class="block border border-gray-200 rounded px-4 py-3 hover:bg-gray-50"><strong>Federal Posting Signals</strong><br/>
    USAJOBS posting trends, agency composition, AI intensity, and federal workforce signal shifts.</a>`,ft,B,W='<a href="#corpus-snapshot">Corpus Snapshot</a>',X,Y,S,J,V,U,Z,F,St,N,K,x,tt,q,dt,D,C='<a href="#onet-match-cascade">O*NET Match Cascade</a>',Rt,Gt,et,le='<a href="#table-1-usajobs-onet-match-cascade-by-taxonomy-level">Table 1. USAJOBS O*NET match cascade by taxonomy level</a>',Ot,gt,Bt,st,me='<a href="#monthly-signals">Monthly Signals</a>',Ut,ht,ce="The charts below are a compact dashboard of federal posting signals. They are useful for seeing timing and direction, but they are not substitutes for the national NLx series.",xt,It,at,ue='<a href="#figure-ui-1-dei-keyword-intensity">Figure UI-1. DEI Keyword Intensity</a>',Dt,bt,Pt,nt,pe='<a href="#figure-ui-2-green-task-posting-share">Figure UI-2. Green-Task Posting Share</a>',Jt,yt,Ft,ot,fe='<a href="#figure-ui-3-strict-aimatch-code-intensity">Figure UI-3. Strict AIMatch Code Intensity</a>',Nt,wt,qt,it,de='<a href="#figure-ui-4-deduplicated-ai-keyword-concept-posting-share">Figure UI-4. Deduplicated AI Keyword Concept Posting Share</a>',Vt,kt,Kt,Ht,rt,ge='<a href="#table-2-latest-usajobs-ai-keyword-concept-map-coverage">Table 2. Latest USAJOBS AI keyword concept-map coverage</a>',Qt,vt,zt,$t,he='<em class="markdown">Note: AI keyword concepts are parsed from the raw USAJOBS concept files and deduplicated at the posting-month level. Lightcast appears only as an aggregate map label; exact Lightcast keyword terms are not redistributed.</em>',Wt,_t,be='<a href="#profiles">Profiles</a>',Xt,At,ye='<a href="/us-lmi/usajobs/occupation-fingerprint" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>USAJOBS Occupational Posting Profile</strong><br/>Tasks, skills, Work Activities, concepts, and O*NET match flags by 8-digit O*NET-SOC.</a> <a href="/us-lmi/usajobs/agency-fingerprint" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>USAJOBS Agency Posting Profile</strong><br/>Tasks, skills, Work Activities, and ConceptSearch features by agency.</a> <a href="/us-lmi/usajobs/work-activity-profiler" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>Work Activity Profiler</strong><br/>Federal occupation and agency rankings for selected O*NET Work Activities.</a> <a href="/us-lmi/usajobs/ai-profiler" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>AI Profiler</strong><br/>Federal occupation, agency, and AIMatch code rankings.</a> <a href="/us-lmi/usajobs/tools-technology-profiler" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>Tools &amp; Technology Profiler</strong><br/>O*NET and UNSPSC tool/technology signatures by occupation and agency, with RCA spotlights.</a> <a href="/us-lmi/usajobs/concept-profiler" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>Concept Profiler</strong><br/>Research-team concept lists for education, benefits, shift/schedule, and drug/background/criminal signals.</a> <a href="/us-lmi/usajobs/dei-profiler" class="block border border-gray-200 rounded p-4 hover:bg-gray-50"><strong>DEI Profiler</strong><br/>DEI-specific ConceptSearch evidence, term-source disclosure, subcategory trends, and pre/post comparisons.</a>',Yt,lt,we='<a href="#evidence-path">Evidence Path</a>',Zt,jt,ke='USAJOBS source files and coded outputs are listed in <a href="/us-lmi/methodology/audit-trail#public-project-links" class="markdown">Agreement And Audit Trail</a>. Limits of federal postings versus national NLx evidence are summarized in <a href="/us-lmi/methodology/postings-and-taxonomies" class="markdown">What Postings And Taxonomies Can And Cannot Say</a>.',te,mt=typeof y<"u"&&(y.title||((ve=y.og)==null?void 0:ve.title))&&y.hide_title!==!0&&is();function Je(t,s){var O;return typeof y<"u"&&(y.title||(O=y.og)!=null&&O.title)?_s:rs}let Lt=Je()(u),ct=typeof y=="object"&&ls(),G=u[0]&&Be(u);J=new Et({props:{data:u[0],value:"total_postings",title:"Raw postings count",fmt:"#,##0"}}),U=new Et({props:{data:u[0],value:"total_active_months_m",title:"Monthly Active Jobs"}}),F=new Et({props:{data:u[0],value:"total_task_mentions_m",title:"O*NET Tasks Extracted"}}),N=new Et({props:{data:u[0],value:"total_ai_mentions_m",title:"AI Tasks and Skills Extracted"}}),x=new Et({props:{data:u[0],value:"distinct_occupations",title:"8-digit O*NET-SOC occupations",fmt:"#,##0"}}),q=new Et({props:{data:u[0],value:"distinct_departments",title:"Departments",fmt:"#,##0"}});let I=u[1]&&Ue(u);gt=new Ee({props:{data:u[1],rowsPerPage:"10",$$slots:{default:[us]},$$scope:{ctx:u}}});let H=u[2]&&xe(u);bt=new ne({props:{data:u[2],x:"month_start",y:"dei_mentions_per_posting",yAxisTitle:"Mentions per active posting",title:"DEI keyword intensity"}}),yt=new ne({props:{data:u[2],x:"month_start",y:"share_postings_with_green",yAxisTitle:"Share of active postings",title:"Green-task posting share",yFmt:"0.0%"}}),wt=new ne({props:{data:u[2],x:"month_start",y:"strict_ai_codes_per_1k_active_postings",yAxisTitle:"AI code matches per 1,000 active postings",title:"Strict AIMatch code intensity"}}),kt=new ne({props:{data:u[2],x:"month_start",y:"any_ai_keyword_per_1k_active_postings",yAxisTitle:"Postings per 1,000 active postings",title:"Deduplicated AI keyword concept posting share"}});let E=u[3]&&De(u);return vt=new Ee({props:{data:u[3],rowsPerPage:"20",$$slots:{default:[ps]},$$scope:{ctx:u}}}),{c(){mt&&mt.c(),a=g(),Lt.c(),n=v("meta"),e=v("meta"),ct&&ct.c(),_=oe(),l=g(),i=v("h1"),i.innerHTML=m,h=g(),c=v("p"),c.textContent=R,f=g(),$=v("div"),$.innerHTML=Q,z=g(),P=v("div"),P.innerHTML=Ct,ft=g(),B=v("h2"),B.innerHTML=W,X=g(),G&&G.c(),Y=g(),S=v("div"),M(J.$$.fragment),V=g(),M(U.$$.fragment),Z=g(),M(F.$$.fragment),St=g(),M(N.$$.fragment),K=g(),M(x.$$.fragment),tt=g(),M(q.$$.fragment),dt=g(),D=v("h2"),D.innerHTML=C,Rt=g(),I&&I.c(),Gt=g(),et=v("h3"),et.innerHTML=le,Ot=g(),M(gt.$$.fragment),Bt=g(),st=v("h2"),st.innerHTML=me,Ut=g(),ht=v("p"),ht.textContent=ce,xt=g(),H&&H.c(),It=g(),at=v("h3"),at.innerHTML=ue,Dt=g(),M(bt.$$.fragment),Pt=g(),nt=v("h3"),nt.innerHTML=pe,Jt=g(),M(yt.$$.fragment),Ft=g(),ot=v("h3"),ot.innerHTML=fe,Nt=g(),M(wt.$$.fragment),qt=g(),it=v("h3"),it.innerHTML=de,Vt=g(),M(kt.$$.fragment),Kt=g(),E&&E.c(),Ht=g(),rt=v("h3"),rt.innerHTML=ge,Qt=g(),M(vt.$$.fragment),zt=g(),$t=v("p"),$t.innerHTML=he,Wt=g(),_t=v("h2"),_t.innerHTML=be,Xt=g(),At=v("div"),At.innerHTML=ye,Yt=g(),lt=v("h2"),lt.innerHTML=we,Zt=g(),jt=v("p"),jt.innerHTML=ke,this.h()},l(t){mt&&mt.l(t),a=d(t);const s=Ne("svelte-2igo1p",document.head);Lt.l(s),n=k(s,"META",{name:!0,content:!0}),e=k(s,"META",{name:!0,content:!0}),ct&&ct.l(s),_=oe(),s.forEach(o),l=d(t),i=k(t,"H1",{class:!0,id:!0,"data-svelte-h":!0}),L(i)!=="svelte-p2l129"&&(i.innerHTML=m),h=d(t),c=k(t,"P",{class:!0,"data-svelte-h":!0}),L(c)!=="svelte-11dsheb"&&(c.textContent=R),f=d(t),$=k(t,"DIV",{class:!0,"data-svelte-h":!0}),L($)!=="svelte-1874t60"&&($.innerHTML=Q),z=d(t),P=k(t,"DIV",{class:!0,"data-svelte-h":!0}),L(P)!=="svelte-7t4bo1"&&(P.innerHTML=Ct),ft=d(t),B=k(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(B)!=="svelte-3rmpta"&&(B.innerHTML=W),X=d(t),G&&G.l(t),Y=d(t),S=k(t,"DIV",{class:!0});var O=Pe(S);T(J.$$.fragment,O),V=d(O),T(U.$$.fragment,O),Z=d(O),T(F.$$.fragment,O),St=d(O),T(N.$$.fragment,O),K=d(O),T(x.$$.fragment,O),tt=d(O),T(q.$$.fragment,O),O.forEach(o),dt=d(t),D=k(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(D)!=="svelte-1py7m77"&&(D.innerHTML=C),Rt=d(t),I&&I.l(t),Gt=d(t),et=k(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(et)!=="svelte-1t7ueff"&&(et.innerHTML=le),Ot=d(t),T(gt.$$.fragment,t),Bt=d(t),st=k(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(st)!=="svelte-nmfzgy"&&(st.innerHTML=me),Ut=d(t),ht=k(t,"P",{class:!0,"data-svelte-h":!0}),L(ht)!=="svelte-1nft6ao"&&(ht.textContent=ce),xt=d(t),H&&H.l(t),It=d(t),at=k(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(at)!=="svelte-s8emga"&&(at.innerHTML=ue),Dt=d(t),T(bt.$$.fragment,t),Pt=d(t),nt=k(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(nt)!=="svelte-zo0lh7"&&(nt.innerHTML=pe),Jt=d(t),T(yt.$$.fragment,t),Ft=d(t),ot=k(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(ot)!=="svelte-1lscv8u"&&(ot.innerHTML=fe),Nt=d(t),T(wt.$$.fragment,t),qt=d(t),it=k(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(it)!=="svelte-1o9935v"&&(it.innerHTML=de),Vt=d(t),T(kt.$$.fragment,t),Kt=d(t),E&&E.l(t),Ht=d(t),rt=k(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(rt)!=="svelte-1ade212"&&(rt.innerHTML=ge),Qt=d(t),T(vt.$$.fragment,t),zt=d(t),$t=k(t,"P",{class:!0,"data-svelte-h":!0}),L($t)!=="svelte-swiuzk"&&($t.innerHTML=he),Wt=d(t),_t=k(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(_t)!=="svelte-1tds26i"&&(_t.innerHTML=be),Xt=d(t),At=k(t,"DIV",{class:!0,"data-svelte-h":!0}),L(At)!=="svelte-33bggr"&&(At.innerHTML=ye),Yt=d(t),lt=k(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(lt)!=="svelte-1uqwyny"&&(lt.innerHTML=we),Zt=d(t),jt=k(t,"P",{class:!0,"data-svelte-h":!0}),L(jt)!=="svelte-1sazgmk"&&(jt.innerHTML=ke),this.h()},h(){p(n,"name","twitter:card"),p(n,"content","summary_large_image"),p(e,"name","twitter:site"),p(e,"content","@evidence_dev"),p(i,"class","markdown"),p(i,"id","usajobs-summary"),p(c,"class","markdown"),p($,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),p(P,"class","grid grid-cols-1 md:grid-cols-2 gap-4 my-6"),p(B,"class","markdown"),p(B,"id","corpus-snapshot"),p(S,"class","grid grid-cols-1 md:grid-cols-3 xl:grid-cols-6 gap-4 border-b pb-6 mb-8"),p(D,"class","markdown"),p(D,"id","onet-match-cascade"),p(et,"class","markdown"),p(et,"id","table-1-usajobs-onet-match-cascade-by-taxonomy-level"),p(st,"class","markdown"),p(st,"id","monthly-signals"),p(ht,"class","markdown"),p(at,"class","markdown"),p(at,"id","figure-ui-1-dei-keyword-intensity"),p(nt,"class","markdown"),p(nt,"id","figure-ui-2-green-task-posting-share"),p(ot,"class","markdown"),p(ot,"id","figure-ui-3-strict-aimatch-code-intensity"),p(it,"class","markdown"),p(it,"id","figure-ui-4-deduplicated-ai-keyword-concept-posting-share"),p(rt,"class","markdown"),p(rt,"id","table-2-latest-usajobs-ai-keyword-concept-map-coverage"),p($t,"class","markdown"),p(_t,"class","markdown"),p(_t,"id","profiles"),p(At,"class","grid grid-cols-1 md:grid-cols-2 gap-4"),p(lt,"class","markdown"),p(lt,"id","evidence-path"),p(jt,"class","markdown")},m(t,s){mt&&mt.m(t,s),r(t,a,s),Lt.m(document.head,null),ut(document.head,n),ut(document.head,e),ct&&ct.m(document.head,null),ut(document.head,_),r(t,l,s),r(t,i,s),r(t,h,s),r(t,c,s),r(t,f,s),r(t,$,s),r(t,z,s),r(t,P,s),r(t,ft,s),r(t,B,s),r(t,X,s),G&&G.m(t,s),r(t,Y,s),r(t,S,s),j(J,S,null),ut(S,V),j(U,S,null),ut(S,Z),j(F,S,null),ut(S,St),j(N,S,null),ut(S,K),j(x,S,null),ut(S,tt),j(q,S,null),r(t,dt,s),r(t,D,s),r(t,Rt,s),I&&I.m(t,s),r(t,Gt,s),r(t,et,s),r(t,Ot,s),j(gt,t,s),r(t,Bt,s),r(t,st,s),r(t,Ut,s),r(t,ht,s),r(t,xt,s),H&&H.m(t,s),r(t,It,s),r(t,at,s),r(t,Dt,s),j(bt,t,s),r(t,Pt,s),r(t,nt,s),r(t,Jt,s),j(yt,t,s),r(t,Ft,s),r(t,ot,s),r(t,Nt,s),j(wt,t,s),r(t,qt,s),r(t,it,s),r(t,Vt,s),j(kt,t,s),r(t,Kt,s),E&&E.m(t,s),r(t,Ht,s),r(t,rt,s),r(t,Qt,s),j(vt,t,s),r(t,zt,s),r(t,$t,s),r(t,Wt,s),r(t,_t,s),r(t,Xt,s),r(t,At,s),r(t,Yt,s),r(t,lt,s),r(t,Zt,s),r(t,jt,s),te=!0},p(t,s){var Ie;typeof y<"u"&&(y.title||(Ie=y.og)!=null&&Ie.title)&&y.hide_title!==!0&&mt.p(t,s),Lt.p(t,s),typeof y=="object"&&ct.p(t,s),t[0]?G?(G.p(t,s),s[0]&1&&b(G,1)):(G=Be(t),G.c(),b(G,1),G.m(Y.parentNode,Y)):G&&(se(),w(G,1,1,()=>{G=null}),ee());const O={};s[0]&1&&(O.data=t[0]),J.$set(O);const $e={};s[0]&1&&($e.data=t[0]),U.$set($e);const Ae={};s[0]&1&&(Ae.data=t[0]),F.$set(Ae);const je={};s[0]&1&&(je.data=t[0]),N.$set(je);const Te={};s[0]&1&&(Te.data=t[0]),x.$set(Te);const Me={};s[0]&1&&(Me.data=t[0]),q.$set(Me),t[1]?I?(I.p(t,s),s[0]&2&&b(I,1)):(I=Ue(t),I.c(),b(I,1),I.m(Gt.parentNode,Gt)):I&&(se(),w(I,1,1,()=>{I=null}),ee());const re={};s[0]&2&&(re.data=t[1]),s[1]&32&&(re.$$scope={dirty:s,ctx:t}),gt.$set(re),t[2]?H?(H.p(t,s),s[0]&4&&b(H,1)):(H=xe(t),H.c(),b(H,1),H.m(It.parentNode,It)):H&&(se(),w(H,1,1,()=>{H=null}),ee());const Se={};s[0]&4&&(Se.data=t[2]),bt.$set(Se);const Ce={};s[0]&4&&(Ce.data=t[2]),yt.$set(Ce);const Re={};s[0]&4&&(Re.data=t[2]),wt.$set(Re);const Ge={};s[0]&4&&(Ge.data=t[2]),kt.$set(Ge),t[3]?E?(E.p(t,s),s[0]&8&&b(E,1)):(E=De(t),E.c(),b(E,1),E.m(Ht.parentNode,Ht)):E&&(se(),w(E,1,1,()=>{E=null}),ee());const _e={};s[0]&8&&(_e.data=t[3]),s[1]&32&&(_e.$$scope={dirty:s,ctx:t}),vt.$set(_e)},i(t){te||(b(G),b(J.$$.fragment,t),b(U.$$.fragment,t),b(F.$$.fragment,t),b(N.$$.fragment,t),b(x.$$.fragment,t),b(q.$$.fragment,t),b(I),b(gt.$$.fragment,t),b(H),b(bt.$$.fragment,t),b(yt.$$.fragment,t),b(wt.$$.fragment,t),b(kt.$$.fragment,t),b(E),b(vt.$$.fragment,t),te=!0)},o(t){w(G),w(J.$$.fragment,t),w(U.$$.fragment,t),w(F.$$.fragment,t),w(N.$$.fragment,t),w(x.$$.fragment,t),w(q.$$.fragment,t),w(I),w(gt.$$.fragment,t),w(H),w(bt.$$.fragment,t),w(yt.$$.fragment,t),w(wt.$$.fragment,t),w(kt.$$.fragment,t),w(E),w(vt.$$.fragment,t),te=!1},d(t){t&&(o(a),o(l),o(i),o(h),o(c),o(f),o($),o(z),o(P),o(ft),o(B),o(X),o(Y),o(S),o(dt),o(D),o(Rt),o(Gt),o(et),o(Ot),o(Bt),o(st),o(Ut),o(ht),o(xt),o(It),o(at),o(Dt),o(Pt),o(nt),o(Jt),o(Ft),o(ot),o(Nt),o(qt),o(it),o(Vt),o(Kt),o(Ht),o(rt),o(Qt),o(zt),o($t),o(Wt),o(_t),o(Xt),o(At),o(Yt),o(lt),o(Zt),o(jt)),mt&&mt.d(t),Lt.d(t),o(n),o(e),ct&&ct.d(t),o(_),G&&G.d(t),A(J),A(U),A(F),A(N),A(x),A(q),I&&I.d(t),A(gt,t),H&&H.d(t),A(bt,t),A(yt,t),A(wt,t),A(kt,t),E&&E.d(t),A(vt,t)}}}const y={};function ds(u,a,n){let e,_;He(u,ns,C=>n(22,e=C)),He(u,Oe,C=>n(28,_=C));let{data:l}=a,{data:i={},customFormattingSettings:m,__db:h,inputs:c}=l;qe(Oe,_="0a13a4df242a5f4cb7386e6e935952ff",_);let R=ts(Ze(c));Ve(R.subscribe(C=>c=C)),Ke(as,{getCustomFormats:()=>m.customFormats||[]});const f=(C,Rt)=>os(h.query,C,{query_name:Rt});es(f),e.params,Qe(()=>!0);let $={initialData:void 0,initialError:void 0},Q=Tt`select
  total_postings,
  total_active_months,
  total_task_mentions,
  total_ai_mentions,
  distinct_occupations,
  distinct_departments,
  concat(round(total_active_months / 1000000.0, 1), 'M') as total_active_months_m,
  concat(round(total_task_mentions / 1000000.0, 1), 'M') as total_task_mentions_m,
  concat(round(total_ai_mentions / 1000000.0, 1), 'M') as total_ai_mentions_m
from usajobs.headline`,z=`select
  total_postings,
  total_active_months,
  total_task_mentions,
  total_ai_mentions,
  distinct_occupations,
  distinct_departments,
  concat(round(total_active_months / 1000000.0, 1), 'M') as total_active_months_m,
  concat(round(total_task_mentions / 1000000.0, 1), 'M') as total_task_mentions_m,
  concat(round(total_ai_mentions / 1000000.0, 1), 'M') as total_ai_mentions_m
from usajobs.headline`;i.usajobs_corpus_data&&(i.usajobs_corpus_data instanceof Error?$.initialError=i.usajobs_corpus_data:$.initialData=i.usajobs_corpus_data,i.usajobs_corpus_columns&&($.knownColumns=i.usajobs_corpus_columns));let P,Ct=!1;const ft=ae.createReactive({callback:C=>{n(0,P=C)},execFn:f},{id:"usajobs_corpus",...$});ft(z,{noResolve:Q,...$}),globalThis[Symbol.for("usajobs_corpus")]={get value(){return P}};let B={initialData:void 0,initialError:void 0},W=Tt`select
  level,
  n_occupations,
  top10_n_pairs,
  top10_n_in_onet,
  top10_in_onet_pct
from usajobs.AGGR_InOnetBySocLevel
where blocklist_applied = true
order by case level when '8-digit O*NET-SOC' then 1 when 'SOC-4 prefix' then 2 when 'SOC-2 major group' then 3 end`,X=`select
  level,
  n_occupations,
  top10_n_pairs,
  top10_n_in_onet,
  top10_in_onet_pct
from usajobs.AGGR_InOnetBySocLevel
where blocklist_applied = true
order by case level when '8-digit O*NET-SOC' then 1 when 'SOC-4 prefix' then 2 when 'SOC-2 major group' then 3 end`;i.usajobs_match_cascade_data&&(i.usajobs_match_cascade_data instanceof Error?B.initialError=i.usajobs_match_cascade_data:B.initialData=i.usajobs_match_cascade_data,i.usajobs_match_cascade_columns&&(B.knownColumns=i.usajobs_match_cascade_columns));let Y,S=!1;const J=ae.createReactive({callback:C=>{n(1,Y=C)},execFn:f},{id:"usajobs_match_cascade",...B});J(X,{noResolve:W,...B}),globalThis[Symbol.for("usajobs_match_cascade")]={get value(){return Y}};let V={initialData:void 0,initialError:void 0},U=Tt`with dei as (
  select month_start, avg(mentions_per_posting) as dei_mentions_per_posting
  from usajobs.AGGR_DEIKeyTermsByMonth
  group by 1
),
green as (
  select month_start, share_postings_with_green
  from usajobs.AGGR_GreenByMonth_AgreementRetained
),
ai as (
  select
    month_start,
    strict_ai_codes_per_1k_active_postings,
    lenient_ai_codes_per_1k_active_postings
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
),
ai_keywords as (
  select
    month_start,
    postings_per_1k_active_postings as any_ai_keyword_per_1k_active_postings
  from usajobs.AGGR_USAJobsAiRawConceptByMonth
  where series = 'Any AI keyword concept'
)
select
  coalesce(dei.month_start, green.month_start, ai.month_start, ai_keywords.month_start) as month_start,
  dei.dei_mentions_per_posting,
  green.share_postings_with_green,
  ai.strict_ai_codes_per_1k_active_postings,
  ai.lenient_ai_codes_per_1k_active_postings,
  ai_keywords.any_ai_keyword_per_1k_active_postings
from dei
full outer join green using (month_start)
full outer join ai using (month_start)
full outer join ai_keywords using (month_start)
where coalesce(dei.month_start, green.month_start, ai.month_start, ai_keywords.month_start) >= date '2018-01-01'
order by month_start`,Z=`with dei as (
  select month_start, avg(mentions_per_posting) as dei_mentions_per_posting
  from usajobs.AGGR_DEIKeyTermsByMonth
  group by 1
),
green as (
  select month_start, share_postings_with_green
  from usajobs.AGGR_GreenByMonth_AgreementRetained
),
ai as (
  select
    month_start,
    strict_ai_codes_per_1k_active_postings,
    lenient_ai_codes_per_1k_active_postings
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
),
ai_keywords as (
  select
    month_start,
    postings_per_1k_active_postings as any_ai_keyword_per_1k_active_postings
  from usajobs.AGGR_USAJobsAiRawConceptByMonth
  where series = 'Any AI keyword concept'
)
select
  coalesce(dei.month_start, green.month_start, ai.month_start, ai_keywords.month_start) as month_start,
  dei.dei_mentions_per_posting,
  green.share_postings_with_green,
  ai.strict_ai_codes_per_1k_active_postings,
  ai.lenient_ai_codes_per_1k_active_postings,
  ai_keywords.any_ai_keyword_per_1k_active_postings
from dei
full outer join green using (month_start)
full outer join ai using (month_start)
full outer join ai_keywords using (month_start)
where coalesce(dei.month_start, green.month_start, ai.month_start, ai_keywords.month_start) >= date '2018-01-01'
order by month_start`;i.usajobs_monthly_signals_data&&(i.usajobs_monthly_signals_data instanceof Error?V.initialError=i.usajobs_monthly_signals_data:V.initialData=i.usajobs_monthly_signals_data,i.usajobs_monthly_signals_columns&&(V.knownColumns=i.usajobs_monthly_signals_columns));let F,St=!1;const N=ae.createReactive({callback:C=>{n(2,F=C)},execFn:f},{id:"usajobs_monthly_signals",...V});N(Z,{noResolve:U,...V}),globalThis[Symbol.for("usajobs_monthly_signals")]={get value(){return F}};let K={initialData:void 0,initialError:void 0},x=Tt`with latest_month as (
  select max(month_start) as month_start
  from usajobs.AGGR_USAJobsAiRawConceptByMonth
)
select
  series,
  n_postings_with_signal,
  n_concept_items,
  postings_per_1k_active_postings
from usajobs.AGGR_USAJobsAiRawConceptByMonth
where month_start = (select month_start from latest_month)
  and series <> 'Any AI keyword concept'
order by sort_order`,tt=`with latest_month as (
  select max(month_start) as month_start
  from usajobs.AGGR_USAJobsAiRawConceptByMonth
)
select
  series,
  n_postings_with_signal,
  n_concept_items,
  postings_per_1k_active_postings
from usajobs.AGGR_USAJobsAiRawConceptByMonth
where month_start = (select month_start from latest_month)
  and series <> 'Any AI keyword concept'
order by sort_order`;i.usajobs_ai_keyword_components_latest_data&&(i.usajobs_ai_keyword_components_latest_data instanceof Error?K.initialError=i.usajobs_ai_keyword_components_latest_data:K.initialData=i.usajobs_ai_keyword_components_latest_data,i.usajobs_ai_keyword_components_latest_columns&&(K.knownColumns=i.usajobs_ai_keyword_components_latest_columns));let q,dt=!1;const D=ae.createReactive({callback:C=>{n(3,q=C)},execFn:f},{id:"usajobs_ai_keyword_components_latest",...K});return D(tt,{noResolve:x,...K}),globalThis[Symbol.for("usajobs_ai_keyword_components_latest")]={get value(){return q}},u.$$set=C=>{"data"in C&&n(4,l=C.data)},u.$$.update=()=>{u.$$.dirty[0]&16&&n(5,{data:i={},customFormattingSettings:m,__db:h}=l,i),u.$$.dirty[0]&32&&ss.set(Object.keys(i).length>0),u.$$.dirty[0]&4194304&&e.params,u.$$.dirty[0]&960&&(Q||!Ct?Q||(ft(z,{noResolve:Q,...$}),n(9,Ct=!0)):ft(z,{noResolve:Q})),u.$$.dirty[0]&15360&&(W||!S?W||(J(X,{noResolve:W,...B}),n(13,S=!0)):J(X,{noResolve:W})),u.$$.dirty[0]&245760&&(U||!St?U||(N(Z,{noResolve:U,...V}),n(17,St=!0)):N(Z,{noResolve:U})),u.$$.dirty[0]&3932160&&(x||!dt?x||(D(tt,{noResolve:x,...K}),n(21,dt=!0)):D(tt,{noResolve:x}))},n(7,Q=Tt`select
  total_postings,
  total_active_months,
  total_task_mentions,
  total_ai_mentions,
  distinct_occupations,
  distinct_departments,
  concat(round(total_active_months / 1000000.0, 1), 'M') as total_active_months_m,
  concat(round(total_task_mentions / 1000000.0, 1), 'M') as total_task_mentions_m,
  concat(round(total_ai_mentions / 1000000.0, 1), 'M') as total_ai_mentions_m
from usajobs.headline`),n(8,z=`select
  total_postings,
  total_active_months,
  total_task_mentions,
  total_ai_mentions,
  distinct_occupations,
  distinct_departments,
  concat(round(total_active_months / 1000000.0, 1), 'M') as total_active_months_m,
  concat(round(total_task_mentions / 1000000.0, 1), 'M') as total_task_mentions_m,
  concat(round(total_ai_mentions / 1000000.0, 1), 'M') as total_ai_mentions_m
from usajobs.headline`),n(11,W=Tt`select
  level,
  n_occupations,
  top10_n_pairs,
  top10_n_in_onet,
  top10_in_onet_pct
from usajobs.AGGR_InOnetBySocLevel
where blocklist_applied = true
order by case level when '8-digit O*NET-SOC' then 1 when 'SOC-4 prefix' then 2 when 'SOC-2 major group' then 3 end`),n(12,X=`select
  level,
  n_occupations,
  top10_n_pairs,
  top10_n_in_onet,
  top10_in_onet_pct
from usajobs.AGGR_InOnetBySocLevel
where blocklist_applied = true
order by case level when '8-digit O*NET-SOC' then 1 when 'SOC-4 prefix' then 2 when 'SOC-2 major group' then 3 end`),n(15,U=Tt`with dei as (
  select month_start, avg(mentions_per_posting) as dei_mentions_per_posting
  from usajobs.AGGR_DEIKeyTermsByMonth
  group by 1
),
green as (
  select month_start, share_postings_with_green
  from usajobs.AGGR_GreenByMonth_AgreementRetained
),
ai as (
  select
    month_start,
    strict_ai_codes_per_1k_active_postings,
    lenient_ai_codes_per_1k_active_postings
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
),
ai_keywords as (
  select
    month_start,
    postings_per_1k_active_postings as any_ai_keyword_per_1k_active_postings
  from usajobs.AGGR_USAJobsAiRawConceptByMonth
  where series = 'Any AI keyword concept'
)
select
  coalesce(dei.month_start, green.month_start, ai.month_start, ai_keywords.month_start) as month_start,
  dei.dei_mentions_per_posting,
  green.share_postings_with_green,
  ai.strict_ai_codes_per_1k_active_postings,
  ai.lenient_ai_codes_per_1k_active_postings,
  ai_keywords.any_ai_keyword_per_1k_active_postings
from dei
full outer join green using (month_start)
full outer join ai using (month_start)
full outer join ai_keywords using (month_start)
where coalesce(dei.month_start, green.month_start, ai.month_start, ai_keywords.month_start) >= date '2018-01-01'
order by month_start`),n(16,Z=`with dei as (
  select month_start, avg(mentions_per_posting) as dei_mentions_per_posting
  from usajobs.AGGR_DEIKeyTermsByMonth
  group by 1
),
green as (
  select month_start, share_postings_with_green
  from usajobs.AGGR_GreenByMonth_AgreementRetained
),
ai as (
  select
    month_start,
    strict_ai_codes_per_1k_active_postings,
    lenient_ai_codes_per_1k_active_postings
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
),
ai_keywords as (
  select
    month_start,
    postings_per_1k_active_postings as any_ai_keyword_per_1k_active_postings
  from usajobs.AGGR_USAJobsAiRawConceptByMonth
  where series = 'Any AI keyword concept'
)
select
  coalesce(dei.month_start, green.month_start, ai.month_start, ai_keywords.month_start) as month_start,
  dei.dei_mentions_per_posting,
  green.share_postings_with_green,
  ai.strict_ai_codes_per_1k_active_postings,
  ai.lenient_ai_codes_per_1k_active_postings,
  ai_keywords.any_ai_keyword_per_1k_active_postings
from dei
full outer join green using (month_start)
full outer join ai using (month_start)
full outer join ai_keywords using (month_start)
where coalesce(dei.month_start, green.month_start, ai.month_start, ai_keywords.month_start) >= date '2018-01-01'
order by month_start`),n(19,x=Tt`with latest_month as (
  select max(month_start) as month_start
  from usajobs.AGGR_USAJobsAiRawConceptByMonth
)
select
  series,
  n_postings_with_signal,
  n_concept_items,
  postings_per_1k_active_postings
from usajobs.AGGR_USAJobsAiRawConceptByMonth
where month_start = (select month_start from latest_month)
  and series <> 'Any AI keyword concept'
order by sort_order`),n(20,tt=`with latest_month as (
  select max(month_start) as month_start
  from usajobs.AGGR_USAJobsAiRawConceptByMonth
)
select
  series,
  n_postings_with_signal,
  n_concept_items,
  postings_per_1k_active_postings
from usajobs.AGGR_USAJobsAiRawConceptByMonth
where month_start = (select month_start from latest_month)
  and series <> 'Any AI keyword concept'
order by sort_order`),[P,Y,F,q,l,i,$,Q,z,Ct,B,W,X,S,V,U,Z,St,K,x,tt,dt,e]}class Ss extends Xe{constructor(a){super(),Ye(this,a,ds,fs,Fe,{data:4},null,[-1,-1])}}export{Ss as component};
