import{s as Ke,d as l,i as u,a as He,b as y,c as b,h as Xe,e as R,f as Ie,g as G,k as g,l as h,m as De,n as Ye,o as We,p as Ze,q as et,r as W,j as tt,t as st,u as it}from"../chunks/scheduler.DhBftCKw.js";import{S as at,i as rt,d as A,t as w,a as k,c as Ce,m as C,b as T,e as M,g as Te}from"../chunks/index.BUvAr1Xw.js";import{D as Me,C as E}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.Coxvl-NJ.js";import{w as nt}from"../chunks/entry.dLjmsfWn.js";import{e as _t,s as ot,Q as Se,p as lt,a as xe,r as Be,C as ct}from"../chunks/inferColumnTypes.BKCRbpRz.js";import{h as me}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as ut}from"../chunks/stores.BCPUepHb.js";import{Q as Pe}from"../chunks/QueryViewer.piJTSmrJ.js";import{p as mt}from"../chunks/profile.BW8tN6E9.js";function ft(p){let s,r=v.title+"",t;return{c(){s=h("h1"),t=it(r),this.h()},l(n){s=R(n,"H1",{class:!0});var _=tt(s);t=st(_,r),_.forEach(l),this.h()},h(){y(s,"class","title")},m(n,_){u(n,s,_),He(s,t)},p:W,d(n){n&&l(s)}}}function pt(p){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:W,p:W,d:W}}function $t(p){let s,r,t,n,_;return document.title=s=v.title,{c(){r=g(),t=h("meta"),n=g(),_=h("meta"),this.h()},l(a){r=b(a),t=R(a,"META",{property:!0,content:!0}),n=b(a),_=R(a,"META",{name:!0,content:!0}),this.h()},h(){var a,c;y(t,"property","og:title"),y(t,"content",((a=v.og)==null?void 0:a.title)??v.title),y(_,"name","twitter:title"),y(_,"content",((c=v.og)==null?void 0:c.title)??v.title)},m(a,c){u(a,r,c),u(a,t,c),u(a,n,c),u(a,_,c)},p(a,c){c&0&&s!==(s=v.title)&&(document.title=s)},d(a){a&&(l(r),l(t),l(n),l(_))}}}function bt(p){var _,a;let s,r,t=(v.description||((_=v.og)==null?void 0:_.description))&&gt(),n=((a=v.og)==null?void 0:a.image)&&dt();return{c(){t&&t.c(),s=g(),n&&n.c(),r=Ie()},l(c){t&&t.l(c),s=b(c),n&&n.l(c),r=Ie()},m(c,j){t&&t.m(c,j),u(c,s,j),n&&n.m(c,j),u(c,r,j)},p(c,j){var d,S;(v.description||(d=v.og)!=null&&d.description)&&t.p(c,j),(S=v.og)!=null&&S.image&&n.p(c,j)},d(c){c&&(l(s),l(r)),t&&t.d(c),n&&n.d(c)}}}function gt(p){let s,r,t,n,_;return{c(){s=h("meta"),r=g(),t=h("meta"),n=g(),_=h("meta"),this.h()},l(a){s=R(a,"META",{name:!0,content:!0}),r=b(a),t=R(a,"META",{property:!0,content:!0}),n=b(a),_=R(a,"META",{name:!0,content:!0}),this.h()},h(){var a,c,j;y(s,"name","description"),y(s,"content",v.description??((a=v.og)==null?void 0:a.description)),y(t,"property","og:description"),y(t,"content",((c=v.og)==null?void 0:c.description)??v.description),y(_,"name","twitter:description"),y(_,"content",((j=v.og)==null?void 0:j.description)??v.description)},m(a,c){u(a,s,c),u(a,r,c),u(a,t,c),u(a,n,c),u(a,_,c)},p:W,d(a){a&&(l(s),l(r),l(t),l(n),l(_))}}}function dt(p){let s,r,t;return{c(){s=h("meta"),r=g(),t=h("meta"),this.h()},l(n){s=R(n,"META",{property:!0,content:!0}),r=b(n),t=R(n,"META",{name:!0,content:!0}),this.h()},h(){var n,_;y(s,"property","og:image"),y(s,"content",xe((n=v.og)==null?void 0:n.image)),y(t,"name","twitter:image"),y(t,"content",xe((_=v.og)==null?void 0:_.image))},m(n,_){u(n,s,_),u(n,r,_),u(n,t,_)},p:W,d(n){n&&(l(s),l(r),l(t))}}}function Ge(p){let s,r;return s=new Pe({props:{queryID:"usajobs_ai_occ_ranking",queryResult:p[0]}}),{c(){M(s.$$.fragment)},l(t){T(s.$$.fragment,t)},m(t,n){C(s,t,n),r=!0},p(t,n){const _={};n[0]&1&&(_.queryResult=t[0]),s.$set(_)},i(t){r||(k(s.$$.fragment,t),r=!0)},o(t){w(s.$$.fragment,t),r=!1},d(t){A(s,t)}}}function kt(p){let s,r,t,n,_,a,c,j,d,S,i,$;return s=new E({props:{id:"ai_score_rank",title:"Rank",fmt:"0"}}),t=new E({props:{id:"occ8",title:"O*NET-SOC"}}),_=new E({props:{id:"soc_title",title:"Occupation",wrap:"true"}}),c=new E({props:{id:"n_postings",title:"Posts",fmt:"#,##0"}}),d=new E({props:{id:"mean_ai_score_v2",title:"AI score",fmt:"0.000"}}),i=new E({props:{id:"pct_postings_with_ai_score",title:"% with score",fmt:"0.0%"}}),{c(){M(s.$$.fragment),r=g(),M(t.$$.fragment),n=g(),M(_.$$.fragment),a=g(),M(c.$$.fragment),j=g(),M(d.$$.fragment),S=g(),M(i.$$.fragment)},l(m){T(s.$$.fragment,m),r=b(m),T(t.$$.fragment,m),n=b(m),T(_.$$.fragment,m),a=b(m),T(c.$$.fragment,m),j=b(m),T(d.$$.fragment,m),S=b(m),T(i.$$.fragment,m)},m(m,H){C(s,m,H),u(m,r,H),C(t,m,H),u(m,n,H),C(_,m,H),u(m,a,H),C(c,m,H),u(m,j,H),C(d,m,H),u(m,S,H),C(i,m,H),$=!0},p:W,i(m){$||(k(s.$$.fragment,m),k(t.$$.fragment,m),k(_.$$.fragment,m),k(c.$$.fragment,m),k(d.$$.fragment,m),k(i.$$.fragment,m),$=!0)},o(m){w(s.$$.fragment,m),w(t.$$.fragment,m),w(_.$$.fragment,m),w(c.$$.fragment,m),w(d.$$.fragment,m),w(i.$$.fragment,m),$=!1},d(m){m&&(l(r),l(n),l(a),l(j),l(S)),A(s,m),A(t,m),A(_,m),A(c,m),A(d,m),A(i,m)}}}function Ne(p){let s,r;return s=new Pe({props:{queryID:"usajobs_ai_agency_ranking",queryResult:p[1]}}),{c(){M(s.$$.fragment)},l(t){T(s.$$.fragment,t)},m(t,n){C(s,t,n),r=!0},p(t,n){const _={};n[0]&2&&(_.queryResult=t[1]),s.$set(_)},i(t){r||(k(s.$$.fragment,t),r=!0)},o(t){w(s.$$.fragment,t),r=!1},d(t){A(s,t)}}}function yt(p){let s,r,t,n,_,a,c,j,d,S;return s=new E({props:{id:"ai_score_rank",title:"Rank",fmt:"0"}}),t=new E({props:{id:"agency",title:"Agency",wrap:"true"}}),_=new E({props:{id:"n_postings",title:"Posts",fmt:"#,##0"}}),c=new E({props:{id:"mean_ai_score_v2",title:"AI score",fmt:"0.000"}}),d=new E({props:{id:"pct_postings_with_ai_score",title:"% with score",fmt:"0.0%"}}),{c(){M(s.$$.fragment),r=g(),M(t.$$.fragment),n=g(),M(_.$$.fragment),a=g(),M(c.$$.fragment),j=g(),M(d.$$.fragment)},l(i){T(s.$$.fragment,i),r=b(i),T(t.$$.fragment,i),n=b(i),T(_.$$.fragment,i),a=b(i),T(c.$$.fragment,i),j=b(i),T(d.$$.fragment,i)},m(i,$){C(s,i,$),u(i,r,$),C(t,i,$),u(i,n,$),C(_,i,$),u(i,a,$),C(c,i,$),u(i,j,$),C(d,i,$),S=!0},p:W,i(i){S||(k(s.$$.fragment,i),k(t.$$.fragment,i),k(_.$$.fragment,i),k(c.$$.fragment,i),k(d.$$.fragment,i),S=!0)},o(i){w(s.$$.fragment,i),w(t.$$.fragment,i),w(_.$$.fragment,i),w(c.$$.fragment,i),w(d.$$.fragment,i),S=!1},d(i){i&&(l(r),l(n),l(a),l(j)),A(s,i),A(t,i),A(_,i),A(c,i),A(d,i)}}}function Qe(p){let s,r;return s=new Pe({props:{queryID:"usajobs_ai_agency_buckets",queryResult:p[2]}}),{c(){M(s.$$.fragment)},l(t){T(s.$$.fragment,t)},m(t,n){C(s,t,n),r=!0},p(t,n){const _={};n[0]&4&&(_.queryResult=t[2]),s.$set(_)},i(t){r||(k(s.$$.fragment,t),r=!0)},o(t){w(s.$$.fragment,t),r=!1},d(t){A(s,t)}}}function wt(p){let s,r,t,n,_,a,c,j,d,S;return s=new E({props:{id:"bucket",title:"Bucket"}}),t=new E({props:{id:"strict_pre_per_mo",title:"Strict pre",fmt:"#,##0.00"}}),_=new E({props:{id:"strict_post_per_mo",title:"Strict post",fmt:"#,##0.00"}}),c=new E({props:{id:"lenient_pre_per_mo",title:"Lenient pre",fmt:"#,##0.00"}}),d=new E({props:{id:"lenient_post_per_mo",title:"Lenient post",fmt:"#,##0.00"}}),{c(){M(s.$$.fragment),r=g(),M(t.$$.fragment),n=g(),M(_.$$.fragment),a=g(),M(c.$$.fragment),j=g(),M(d.$$.fragment)},l(i){T(s.$$.fragment,i),r=b(i),T(t.$$.fragment,i),n=b(i),T(_.$$.fragment,i),a=b(i),T(c.$$.fragment,i),j=b(i),T(d.$$.fragment,i)},m(i,$){C(s,i,$),u(i,r,$),C(t,i,$),u(i,n,$),C(_,i,$),u(i,a,$),C(c,i,$),u(i,j,$),C(d,i,$),S=!0},p:W,i(i){S||(k(s.$$.fragment,i),k(t.$$.fragment,i),k(_.$$.fragment,i),k(c.$$.fragment,i),k(d.$$.fragment,i),S=!0)},o(i){w(s.$$.fragment,i),w(t.$$.fragment,i),w(_.$$.fragment,i),w(c.$$.fragment,i),w(d.$$.fragment,i),S=!1},d(i){i&&(l(r),l(n),l(a),l(j)),A(s,i),A(t,i),A(_,i),A(c,i),A(d,i)}}}function ze(p){let s,r;return s=new Pe({props:{queryID:"usajobs_ai_codes",queryResult:p[3]}}),{c(){M(s.$$.fragment)},l(t){T(s.$$.fragment,t)},m(t,n){C(s,t,n),r=!0},p(t,n){const _={};n[0]&8&&(_.queryResult=t[3]),s.$set(_)},i(t){r||(k(s.$$.fragment,t),r=!0)},o(t){w(s.$$.fragment,t),r=!1},d(t){A(s,t)}}}function jt(p){let s,r,t,n,_,a,c,j,d,S,i,$,m,H;return s=new E({props:{id:"ai_code_rank",title:"Rank",fmt:"0"}}),t=new E({props:{id:"ai_code",title:"AI code"}}),_=new E({props:{id:"ai_code_label",title:"Label",wrap:"true"}}),c=new E({props:{id:"ai_score_v2",title:"Score",fmt:"0.000"}}),d=new E({props:{id:"strict_score",title:"Strict",fmt:"0.000"}}),i=new E({props:{id:"lenient_score",title:"Lenient",fmt:"0.000"}}),m=new E({props:{id:"postings",title:"Postings",fmt:"#,##0"}}),{c(){M(s.$$.fragment),r=g(),M(t.$$.fragment),n=g(),M(_.$$.fragment),a=g(),M(c.$$.fragment),j=g(),M(d.$$.fragment),S=g(),M(i.$$.fragment),$=g(),M(m.$$.fragment)},l(f){T(s.$$.fragment,f),r=b(f),T(t.$$.fragment,f),n=b(f),T(_.$$.fragment,f),a=b(f),T(c.$$.fragment,f),j=b(f),T(d.$$.fragment,f),S=b(f),T(i.$$.fragment,f),$=b(f),T(m.$$.fragment,f)},m(f,I){C(s,f,I),u(f,r,I),C(t,f,I),u(f,n,I),C(_,f,I),u(f,a,I),C(c,f,I),u(f,j,I),C(d,f,I),u(f,S,I),C(i,f,I),u(f,$,I),C(m,f,I),H=!0},p:W,i(f){H||(k(s.$$.fragment,f),k(t.$$.fragment,f),k(_.$$.fragment,f),k(c.$$.fragment,f),k(d.$$.fragment,f),k(i.$$.fragment,f),k(m.$$.fragment,f),H=!0)},o(f){w(s.$$.fragment,f),w(t.$$.fragment,f),w(_.$$.fragment,f),w(c.$$.fragment,f),w(d.$$.fragment,f),w(i.$$.fragment,f),w(m.$$.fragment,f),H=!1},d(f){f&&(l(r),l(n),l(a),l(j),l(S),l($)),A(s,f),A(t,f),A(_,f),A(c,f),A(d,f),A(i,f),A(m,f)}}}function vt(p){let s,r,t,n,_,a,c="This USAJOBS profiler ranks occupations, agencies, and AIMatch codes by federal posting AI evidence.",j,d,S="<strong>How to read this page.</strong> These are federal posting-text AI measures. Mean AI score ranks posting language by AIMatch intensity; strict and lenient code rows show the underlying taxonomy evidence.",i,$,m='<a href="#occupations">Occupations</a>',H,f,I,fe='<a href="#table-uai-1-usajobs-occupation-ai-rankings">Table UAI-1. USAJOBS Occupation AI Rankings</a>',N,D,K,B,pe='<a href="#agencies">Agencies</a>',ae,x,J,re='<a href="#table-uai-2-usajobs-agency-ai-rankings">Table UAI-2. USAJOBS Agency AI Rankings</a>',ne,Q,_e,O,X='<a href="#agency-score-buckets">Agency Score Buckets</a>',Y,z,$e="This table groups agencies into hand-coded mission buckets and compares AI-code posting volume before and after February 2025. “Strict pre” is the average number of postings per month with at least one strict AIMatch AI code during November 2023-January 2025. “Strict post” is the same monthly average during February 2025-March 2026. Lenient columns use the broader lenient AI-code definition over the same periods.",oe,P,V,Le='<a href="#table-uai-3-usajobs-agency-prepost-ai-buckets">Table UAI-3. USAJOBS Agency Pre/Post AI Buckets</a>',de,le,ke,Z,qe='<a href="#ai-codes">AI Codes</a>',ye,be,ee,Fe='<a href="#table-uai-4-usajobs-ai-code-profile">Table UAI-4. USAJOBS AI Code Profile</a>',we,ce,je,te,Je='<a href="#evidence-path">Evidence Path</a>',ve,ue,Oe='AI-score validation is summarized in <a href="/us-lmi/building-new-maps" class="markdown">Finding Emerging Skills</a>. USAJOBS source artifacts are listed in <a href="/us-lmi/methodology/audit-trail" class="markdown">Agreement And Audit Trail</a>.',Ae,se=typeof v<"u"&&v.title&&v.hide_title!==!0&&ft();function Ve(e,o){return typeof v<"u"&&v.title?$t:pt}let ge=Ve()(p),ie=typeof v=="object"&&bt(),U=p[0]&&Ge(p);D=new Me({props:{data:p[0],rowsPerPage:"25",$$slots:{default:[kt]},$$scope:{ctx:p}}});let L=p[1]&&Ne(p);Q=new Me({props:{data:p[1],rowsPerPage:"25",$$slots:{default:[yt]},$$scope:{ctx:p}}});let q=p[2]&&Qe(p);le=new Me({props:{data:p[2],rowsPerPage:"10",$$slots:{default:[wt]},$$scope:{ctx:p}}});let F=p[3]&&ze(p);return ce=new Me({props:{data:p[3],rowsPerPage:"25",$$slots:{default:[jt]},$$scope:{ctx:p}}}),{c(){se&&se.c(),s=g(),ge.c(),r=h("meta"),t=h("meta"),ie&&ie.c(),n=Ie(),_=g(),a=h("p"),a.textContent=c,j=g(),d=h("div"),d.innerHTML=S,i=g(),$=h("h2"),$.innerHTML=m,H=g(),U&&U.c(),f=g(),I=h("h3"),I.innerHTML=fe,N=g(),M(D.$$.fragment),K=g(),B=h("h2"),B.innerHTML=pe,ae=g(),L&&L.c(),x=g(),J=h("h3"),J.innerHTML=re,ne=g(),M(Q.$$.fragment),_e=g(),O=h("h2"),O.innerHTML=X,Y=g(),z=h("p"),z.textContent=$e,oe=g(),q&&q.c(),P=g(),V=h("h3"),V.innerHTML=Le,de=g(),M(le.$$.fragment),ke=g(),Z=h("h2"),Z.innerHTML=qe,ye=g(),F&&F.c(),be=g(),ee=h("h3"),ee.innerHTML=Fe,we=g(),M(ce.$$.fragment),je=g(),te=h("h2"),te.innerHTML=Je,ve=g(),ue=h("p"),ue.innerHTML=Oe,this.h()},l(e){se&&se.l(e),s=b(e);const o=Xe("svelte-2igo1p",document.head);ge.l(o),r=R(o,"META",{name:!0,content:!0}),t=R(o,"META",{name:!0,content:!0}),ie&&ie.l(o),n=Ie(),o.forEach(l),_=b(e),a=R(e,"P",{class:!0,"data-svelte-h":!0}),G(a)!=="svelte-fgi41b"&&(a.textContent=c),j=b(e),d=R(e,"DIV",{class:!0,"data-svelte-h":!0}),G(d)!=="svelte-kqkgoc"&&(d.innerHTML=S),i=b(e),$=R(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),G($)!=="svelte-11kr2gk"&&($.innerHTML=m),H=b(e),U&&U.l(e),f=b(e),I=R(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),G(I)!=="svelte-pw3sl2"&&(I.innerHTML=fe),N=b(e),T(D.$$.fragment,e),K=b(e),B=R(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),G(B)!=="svelte-k8pjl"&&(B.innerHTML=pe),ae=b(e),L&&L.l(e),x=b(e),J=R(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),G(J)!=="svelte-19u7z3d"&&(J.innerHTML=re),ne=b(e),T(Q.$$.fragment,e),_e=b(e),O=R(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),G(O)!=="svelte-y57sba"&&(O.innerHTML=X),Y=b(e),z=R(e,"P",{class:!0,"data-svelte-h":!0}),G(z)!=="svelte-15ezeho"&&(z.textContent=$e),oe=b(e),q&&q.l(e),P=b(e),V=R(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),G(V)!=="svelte-11osuce"&&(V.innerHTML=Le),de=b(e),T(le.$$.fragment,e),ke=b(e),Z=R(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),G(Z)!=="svelte-8ri58s"&&(Z.innerHTML=qe),ye=b(e),F&&F.l(e),be=b(e),ee=R(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),G(ee)!=="svelte-gh5kel"&&(ee.innerHTML=Fe),we=b(e),T(ce.$$.fragment,e),je=b(e),te=R(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),G(te)!=="svelte-1uqwyny"&&(te.innerHTML=Je),ve=b(e),ue=R(e,"P",{class:!0,"data-svelte-h":!0}),G(ue)!=="svelte-swab6x"&&(ue.innerHTML=Oe),this.h()},h(){y(r,"name","twitter:card"),y(r,"content","summary_large_image"),y(t,"name","twitter:site"),y(t,"content","@evidence_dev"),y(a,"class","markdown"),y(d,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),y($,"class","markdown"),y($,"id","occupations"),y(I,"class","markdown"),y(I,"id","table-uai-1-usajobs-occupation-ai-rankings"),y(B,"class","markdown"),y(B,"id","agencies"),y(J,"class","markdown"),y(J,"id","table-uai-2-usajobs-agency-ai-rankings"),y(O,"class","markdown"),y(O,"id","agency-score-buckets"),y(z,"class","markdown"),y(V,"class","markdown"),y(V,"id","table-uai-3-usajobs-agency-prepost-ai-buckets"),y(Z,"class","markdown"),y(Z,"id","ai-codes"),y(ee,"class","markdown"),y(ee,"id","table-uai-4-usajobs-ai-code-profile"),y(te,"class","markdown"),y(te,"id","evidence-path"),y(ue,"class","markdown")},m(e,o){se&&se.m(e,o),u(e,s,o),ge.m(document.head,null),He(document.head,r),He(document.head,t),ie&&ie.m(document.head,null),He(document.head,n),u(e,_,o),u(e,a,o),u(e,j,o),u(e,d,o),u(e,i,o),u(e,$,o),u(e,H,o),U&&U.m(e,o),u(e,f,o),u(e,I,o),u(e,N,o),C(D,e,o),u(e,K,o),u(e,B,o),u(e,ae,o),L&&L.m(e,o),u(e,x,o),u(e,J,o),u(e,ne,o),C(Q,e,o),u(e,_e,o),u(e,O,o),u(e,Y,o),u(e,z,o),u(e,oe,o),q&&q.m(e,o),u(e,P,o),u(e,V,o),u(e,de,o),C(le,e,o),u(e,ke,o),u(e,Z,o),u(e,ye,o),F&&F.m(e,o),u(e,be,o),u(e,ee,o),u(e,we,o),C(ce,e,o),u(e,je,o),u(e,te,o),u(e,ve,o),u(e,ue,o),Ae=!0},p(e,o){typeof v<"u"&&v.title&&v.hide_title!==!0&&se.p(e,o),ge.p(e,o),typeof v=="object"&&ie.p(e,o),e[0]?U?(U.p(e,o),o[0]&1&&k(U,1)):(U=Ge(e),U.c(),k(U,1),U.m(f.parentNode,f)):U&&(Te(),w(U,1,1,()=>{U=null}),Ce());const Re={};o[0]&1&&(Re.data=e[0]),o[1]&32&&(Re.$$scope={dirty:o,ctx:e}),D.$set(Re),e[1]?L?(L.p(e,o),o[0]&2&&k(L,1)):(L=Ne(e),L.c(),k(L,1),L.m(x.parentNode,x)):L&&(Te(),w(L,1,1,()=>{L=null}),Ce());const he={};o[0]&2&&(he.data=e[1]),o[1]&32&&(he.$$scope={dirty:o,ctx:e}),Q.$set(he),e[2]?q?(q.p(e,o),o[0]&4&&k(q,1)):(q=Qe(e),q.c(),k(q,1),q.m(P.parentNode,P)):q&&(Te(),w(q,1,1,()=>{q=null}),Ce());const Ee={};o[0]&4&&(Ee.data=e[2]),o[1]&32&&(Ee.$$scope={dirty:o,ctx:e}),le.$set(Ee),e[3]?F?(F.p(e,o),o[0]&8&&k(F,1)):(F=ze(e),F.c(),k(F,1),F.m(be.parentNode,be)):F&&(Te(),w(F,1,1,()=>{F=null}),Ce());const Ue={};o[0]&8&&(Ue.data=e[3]),o[1]&32&&(Ue.$$scope={dirty:o,ctx:e}),ce.$set(Ue)},i(e){Ae||(k(U),k(D.$$.fragment,e),k(L),k(Q.$$.fragment,e),k(q),k(le.$$.fragment,e),k(F),k(ce.$$.fragment,e),Ae=!0)},o(e){w(U),w(D.$$.fragment,e),w(L),w(Q.$$.fragment,e),w(q),w(le.$$.fragment,e),w(F),w(ce.$$.fragment,e),Ae=!1},d(e){e&&(l(s),l(_),l(a),l(j),l(d),l(i),l($),l(H),l(f),l(I),l(N),l(K),l(B),l(ae),l(x),l(J),l(ne),l(_e),l(O),l(Y),l(z),l(oe),l(P),l(V),l(de),l(ke),l(Z),l(ye),l(be),l(ee),l(we),l(je),l(te),l(ve),l(ue)),se&&se.d(e),ge.d(e),l(r),l(t),ie&&ie.d(e),l(n),U&&U.d(e),A(D,e),L&&L.d(e),A(Q,e),q&&q.d(e),A(le,e),F&&F.d(e),A(ce,e)}}}const v={title:"AI Profiler"};function At(p,s,r){let t,n;De(p,ut,P=>r(22,t=P)),De(p,Be,P=>r(28,n=P));let{data:_}=s,{data:a={},customFormattingSettings:c,__db:j,inputs:d}=_;Ye(Be,n="aa3d29d1aebd4e8e39f5ca9457f2de3e",n);let S=_t(nt(d));We(S.subscribe(P=>d=P)),Ze(ct,{getCustomFormats:()=>c.customFormats||[]});const i=(P,V)=>mt(j.query,P,{query_name:V});ot(i),t.params,et(()=>!0);let $={initialData:void 0,initialError:void 0},m=me`select distinct
  ai_score_rank,
  occ8,
  soc_title,
  n_postings,
  mean_ai_score_v2,
  pct_postings_with_ai_score
from usajobs.CMP_USAJobsOccupationComparisons
where ai_score_rank <= 50
order by ai_score_rank`,H=`select distinct
  ai_score_rank,
  occ8,
  soc_title,
  n_postings,
  mean_ai_score_v2,
  pct_postings_with_ai_score
from usajobs.CMP_USAJobsOccupationComparisons
where ai_score_rank <= 50
order by ai_score_rank`;a.usajobs_ai_occ_ranking_data&&(a.usajobs_ai_occ_ranking_data instanceof Error?$.initialError=a.usajobs_ai_occ_ranking_data:$.initialData=a.usajobs_ai_occ_ranking_data,a.usajobs_ai_occ_ranking_columns&&($.knownColumns=a.usajobs_ai_occ_ranking_columns));let f,I=!1;const fe=Se.createReactive({callback:P=>{r(0,f=P)},execFn:i},{id:"usajobs_ai_occ_ranking",...$});fe(H,{noResolve:m,...$}),globalThis[Symbol.for("usajobs_ai_occ_ranking")]={get value(){return f}};let N={initialData:void 0,initialError:void 0},D=me`select distinct
  ai_score_rank,
  agency,
  n_postings,
  mean_ai_score_v2,
  pct_postings_with_ai_score
from usajobs.CMP_USAJobsAgencyComparisons
where ai_score_rank <= 50
order by ai_score_rank`,K=`select distinct
  ai_score_rank,
  agency,
  n_postings,
  mean_ai_score_v2,
  pct_postings_with_ai_score
from usajobs.CMP_USAJobsAgencyComparisons
where ai_score_rank <= 50
order by ai_score_rank`;a.usajobs_ai_agency_ranking_data&&(a.usajobs_ai_agency_ranking_data instanceof Error?N.initialError=a.usajobs_ai_agency_ranking_data:N.initialData=a.usajobs_ai_agency_ranking_data,a.usajobs_ai_agency_ranking_columns&&(N.knownColumns=a.usajobs_ai_agency_ranking_columns));let B,pe=!1;const ae=Se.createReactive({callback:P=>{r(1,B=P)},execFn:i},{id:"usajobs_ai_agency_ranking",...N});ae(K,{noResolve:D,...N}),globalThis[Symbol.for("usajobs_ai_agency_ranking")]={get value(){return B}};let x={initialData:void 0,initialError:void 0},J=me`select
  bucket,
  strict_pre_per_mo,
  strict_post_per_mo,
  lenient_pre_per_mo,
  lenient_post_per_mo
from usajobs.CMP_FederalAiAgencyBucket
order by strict_pre_per_mo desc`,re=`select
  bucket,
  strict_pre_per_mo,
  strict_post_per_mo,
  lenient_pre_per_mo,
  lenient_post_per_mo
from usajobs.CMP_FederalAiAgencyBucket
order by strict_pre_per_mo desc`;a.usajobs_ai_agency_buckets_data&&(a.usajobs_ai_agency_buckets_data instanceof Error?x.initialError=a.usajobs_ai_agency_buckets_data:x.initialData=a.usajobs_ai_agency_buckets_data,a.usajobs_ai_agency_buckets_columns&&(x.knownColumns=a.usajobs_ai_agency_buckets_columns));let ne,Q=!1;const _e=Se.createReactive({callback:P=>{r(2,ne=P)},execFn:i},{id:"usajobs_ai_agency_buckets",...x});_e(re,{noResolve:J,...x}),globalThis[Symbol.for("usajobs_ai_agency_buckets")]={get value(){return ne}};let O={initialData:void 0,initialError:void 0},X=me`select
  ai_code_rank,
  ai_code,
  ai_code_label,
  ai_score_v2,
  strict_score,
  lenient_score,
  postings,
  mentions
from usajobs.AGGR_USAJobsAiCodeProfile
where ai_code_rank <= 50
order by ai_code_rank`,Y=`select
  ai_code_rank,
  ai_code,
  ai_code_label,
  ai_score_v2,
  strict_score,
  lenient_score,
  postings,
  mentions
from usajobs.AGGR_USAJobsAiCodeProfile
where ai_code_rank <= 50
order by ai_code_rank`;a.usajobs_ai_codes_data&&(a.usajobs_ai_codes_data instanceof Error?O.initialError=a.usajobs_ai_codes_data:O.initialData=a.usajobs_ai_codes_data,a.usajobs_ai_codes_columns&&(O.knownColumns=a.usajobs_ai_codes_columns));let z,$e=!1;const oe=Se.createReactive({callback:P=>{r(3,z=P)},execFn:i},{id:"usajobs_ai_codes",...O});return oe(Y,{noResolve:X,...O}),globalThis[Symbol.for("usajobs_ai_codes")]={get value(){return z}},p.$$set=P=>{"data"in P&&r(4,_=P.data)},p.$$.update=()=>{p.$$.dirty[0]&16&&r(5,{data:a={},customFormattingSettings:c,__db:j}=_,a),p.$$.dirty[0]&32&&lt.set(Object.keys(a).length>0),p.$$.dirty[0]&4194304&&t.params,p.$$.dirty[0]&960&&(m||!I?m||(fe(H,{noResolve:m,...$}),r(9,I=!0)):fe(H,{noResolve:m})),p.$$.dirty[0]&15360&&(D||!pe?D||(ae(K,{noResolve:D,...N}),r(13,pe=!0)):ae(K,{noResolve:D})),p.$$.dirty[0]&245760&&(J||!Q?J||(_e(re,{noResolve:J,...x}),r(17,Q=!0)):_e(re,{noResolve:J})),p.$$.dirty[0]&3932160&&(X||!$e?X||(oe(Y,{noResolve:X,...O}),r(21,$e=!0)):oe(Y,{noResolve:X}))},r(7,m=me`select distinct
  ai_score_rank,
  occ8,
  soc_title,
  n_postings,
  mean_ai_score_v2,
  pct_postings_with_ai_score
from usajobs.CMP_USAJobsOccupationComparisons
where ai_score_rank <= 50
order by ai_score_rank`),r(8,H=`select distinct
  ai_score_rank,
  occ8,
  soc_title,
  n_postings,
  mean_ai_score_v2,
  pct_postings_with_ai_score
from usajobs.CMP_USAJobsOccupationComparisons
where ai_score_rank <= 50
order by ai_score_rank`),r(11,D=me`select distinct
  ai_score_rank,
  agency,
  n_postings,
  mean_ai_score_v2,
  pct_postings_with_ai_score
from usajobs.CMP_USAJobsAgencyComparisons
where ai_score_rank <= 50
order by ai_score_rank`),r(12,K=`select distinct
  ai_score_rank,
  agency,
  n_postings,
  mean_ai_score_v2,
  pct_postings_with_ai_score
from usajobs.CMP_USAJobsAgencyComparisons
where ai_score_rank <= 50
order by ai_score_rank`),r(15,J=me`select
  bucket,
  strict_pre_per_mo,
  strict_post_per_mo,
  lenient_pre_per_mo,
  lenient_post_per_mo
from usajobs.CMP_FederalAiAgencyBucket
order by strict_pre_per_mo desc`),r(16,re=`select
  bucket,
  strict_pre_per_mo,
  strict_post_per_mo,
  lenient_pre_per_mo,
  lenient_post_per_mo
from usajobs.CMP_FederalAiAgencyBucket
order by strict_pre_per_mo desc`),r(19,X=me`select
  ai_code_rank,
  ai_code,
  ai_code_label,
  ai_score_v2,
  strict_score,
  lenient_score,
  postings,
  mentions
from usajobs.AGGR_USAJobsAiCodeProfile
where ai_code_rank <= 50
order by ai_code_rank`),r(20,Y=`select
  ai_code_rank,
  ai_code,
  ai_code_label,
  ai_score_v2,
  strict_score,
  lenient_score,
  postings,
  mentions
from usajobs.AGGR_USAJobsAiCodeProfile
where ai_code_rank <= 50
order by ai_code_rank`),[f,B,ne,z,_,a,$,m,H,I,N,D,K,pe,x,J,re,Q,O,X,Y,$e,t]}class Ut extends at{constructor(s){super(),rt(this,s,At,vt,Ke,{data:4},null,[-1,-1])}}export{Ut as component};
