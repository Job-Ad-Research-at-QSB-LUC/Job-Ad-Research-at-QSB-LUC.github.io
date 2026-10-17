import{s as xe,d as _,i as u,a as ge,b as $,c as y,h as Be,e as R,f as ye,g as P,k as m,l as S,m as Ge,n as Qe,o as Ve,p as ze,q as Ke,r as it,j as We,t as Xe,u as Ye}from"../chunks/scheduler.TmfZfN_X.js";import{S as Ze,i as to,d as w,t as b,a as g,c as Nt,m as j,b as k,e as T,g as xt}from"../chunks/index.CKLTamEB.js";import{D as te,C as G}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BLmrhC3S.js";import{w as eo}from"../chunks/entry.D_I0byi6.js";import{e as oo,s as so,Q as Bt,p as no,a as He,r as Pe,C as co}from"../chunks/inferColumnTypes.DQCA4D4f.js";import{h as K}from"../chunks/setTrackProxy.Cyfckp0w.js";import{D as Ue}from"../chunks/Dropdown.DR-R82_G.js";import{p as lo}from"../chunks/stores.C11oRilr.js";import{Q as Qt}from"../chunks/QueryViewer.DATGjO3_.js";import{p as ao}from"../chunks/profile.BW8tN6E9.js";function io(f){let o,n=E.title+"",e;return{c(){o=S("h1"),e=Ye(n),this.h()},l(r){o=R(r,"H1",{class:!0});var i=We(o);e=Xe(i,n),i.forEach(_),this.h()},h(){$(o,"class","title")},m(r,i){u(r,o,i),ge(o,e)},p:it,d(r){r&&_(o)}}}function ro(f){return{c(){this.h()},l(o){this.h()},h(){document.title="Evidence"},m:it,p:it,d:it}}function _o(f){let o,n,e,r,i;return document.title=o=E.title,{c(){n=m(),e=S("meta"),r=m(),i=S("meta"),this.h()},l(c){n=y(c),e=R(c,"META",{property:!0,content:!0}),r=y(c),i=R(c,"META",{name:!0,content:!0}),this.h()},h(){var c,p;$(e,"property","og:title"),$(e,"content",((c=E.og)==null?void 0:c.title)??E.title),$(i,"name","twitter:title"),$(i,"content",((p=E.og)==null?void 0:p.title)??E.title)},m(c,p){u(c,n,p),u(c,e,p),u(c,r,p),u(c,i,p)},p(c,p){p&0&&o!==(o=E.title)&&(document.title=o)},d(c){c&&(_(n),_(e),_(r),_(i))}}}function uo(f){var i,c;let o,n,e=(E.description||((i=E.og)==null?void 0:i.description))&&po(),r=((c=E.og)==null?void 0:c.image)&&fo();return{c(){e&&e.c(),o=m(),r&&r.c(),n=ye()},l(p){e&&e.l(p),o=y(p),r&&r.l(p),n=ye()},m(p,v){e&&e.m(p,v),u(p,o,v),r&&r.m(p,v),u(p,n,v)},p(p,v){var l,A;(E.description||(l=E.og)!=null&&l.description)&&e.p(p,v),(A=E.og)!=null&&A.image&&r.p(p,v)},d(p){p&&(_(o),_(n)),e&&e.d(p),r&&r.d(p)}}}function po(f){let o,n,e,r,i;return{c(){o=S("meta"),n=m(),e=S("meta"),r=m(),i=S("meta"),this.h()},l(c){o=R(c,"META",{name:!0,content:!0}),n=y(c),e=R(c,"META",{property:!0,content:!0}),r=y(c),i=R(c,"META",{name:!0,content:!0}),this.h()},h(){var c,p,v;$(o,"name","description"),$(o,"content",E.description??((c=E.og)==null?void 0:c.description)),$(e,"property","og:description"),$(e,"content",((p=E.og)==null?void 0:p.description)??E.description),$(i,"name","twitter:description"),$(i,"content",((v=E.og)==null?void 0:v.description)??E.description)},m(c,p){u(c,o,p),u(c,n,p),u(c,e,p),u(c,r,p),u(c,i,p)},p:it,d(c){c&&(_(o),_(n),_(e),_(r),_(i))}}}function fo(f){let o,n,e;return{c(){o=S("meta"),n=m(),e=S("meta"),this.h()},l(r){o=R(r,"META",{property:!0,content:!0}),n=y(r),e=R(r,"META",{name:!0,content:!0}),this.h()},h(){var r,i;$(o,"property","og:image"),$(o,"content",He((r=E.og)==null?void 0:r.image)),$(e,"name","twitter:image"),$(e,"content",He((i=E.og)==null?void 0:i.image))},m(r,i){u(r,o,i),u(r,n,i),u(r,e,i)},p:it,d(r){r&&(_(o),_(n),_(e))}}}function Me(f){let o,n;return o=new Qt({props:{queryID:"usajobs_tools_tech_agency_spotlight",queryResult:f[0]}}),{c(){T(o.$$.fragment)},l(e){k(o.$$.fragment,e)},m(e,r){j(o,e,r),n=!0},p(e,r){const i={};r[0]&1&&(i.queryResult=e[0]),o.$set(i)},i(e){n||(g(o.$$.fragment,e),n=!0)},o(e){b(o.$$.fragment,e),n=!1},d(e){w(o,e)}}}function go(f){let o,n,e,r,i,c,p,v,l,A;return o=new G({props:{id:"agency",title:"Agency",wrap:"true"}}),e=new G({props:{id:"concept",title:"Tool / technology",wrap:"true"}}),i=new G({props:{id:"postings",title:"Postings",fmt:"#,##0"}}),p=new G({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),l=new G({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){T(o.$$.fragment),n=m(),T(e.$$.fragment),r=m(),T(i.$$.fragment),c=m(),T(p.$$.fragment),v=m(),T(l.$$.fragment)},l(s){k(o.$$.fragment,s),n=y(s),k(e.$$.fragment,s),r=y(s),k(i.$$.fragment,s),c=y(s),k(p.$$.fragment,s),v=y(s),k(l.$$.fragment,s)},m(s,h){j(o,s,h),u(s,n,h),j(e,s,h),u(s,r,h),j(i,s,h),u(s,c,h),j(p,s,h),u(s,v,h),j(l,s,h),A=!0},p:it,i(s){A||(g(o.$$.fragment,s),g(e.$$.fragment,s),g(i.$$.fragment,s),g(p.$$.fragment,s),g(l.$$.fragment,s),A=!0)},o(s){b(o.$$.fragment,s),b(e.$$.fragment,s),b(i.$$.fragment,s),b(p.$$.fragment,s),b(l.$$.fragment,s),A=!1},d(s){s&&(_(n),_(r),_(c),_(v)),w(o,s),w(e,s),w(i,s),w(p,s),w(l,s)}}}function qe(f){let o,n;return o=new Qt({props:{queryID:"usajobs_tools_tech_occ_spotlight",queryResult:f[1]}}),{c(){T(o.$$.fragment)},l(e){k(o.$$.fragment,e)},m(e,r){j(o,e,r),n=!0},p(e,r){const i={};r[0]&2&&(i.queryResult=e[1]),o.$set(i)},i(e){n||(g(o.$$.fragment,e),n=!0)},o(e){b(o.$$.fragment,e),n=!1},d(e){w(o,e)}}}function yo(f){let o,n,e,r,i,c,p,v,l,A;return o=new G({props:{id:"occupation",title:"Occupation",wrap:"true"}}),e=new G({props:{id:"concept",title:"Tool / technology",wrap:"true"}}),i=new G({props:{id:"postings",title:"Postings",fmt:"#,##0"}}),p=new G({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),l=new G({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){T(o.$$.fragment),n=m(),T(e.$$.fragment),r=m(),T(i.$$.fragment),c=m(),T(p.$$.fragment),v=m(),T(l.$$.fragment)},l(s){k(o.$$.fragment,s),n=y(s),k(e.$$.fragment,s),r=y(s),k(i.$$.fragment,s),c=y(s),k(p.$$.fragment,s),v=y(s),k(l.$$.fragment,s)},m(s,h){j(o,s,h),u(s,n,h),j(e,s,h),u(s,r,h),j(i,s,h),u(s,c,h),j(p,s,h),u(s,v,h),j(l,s,h),A=!0},p:it,i(s){A||(g(o.$$.fragment,s),g(e.$$.fragment,s),g(i.$$.fragment,s),g(p.$$.fragment,s),g(l.$$.fragment,s),A=!0)},o(s){b(o.$$.fragment,s),b(e.$$.fragment,s),b(i.$$.fragment,s),b(p.$$.fragment,s),b(l.$$.fragment,s),A=!1},d(s){s&&(_(n),_(r),_(c),_(v)),w(o,s),w(e,s),w(i,s),w(p,s),w(l,s)}}}function De(f){let o,n;return o=new Qt({props:{queryID:"usajobs_tools_tech_options",queryResult:f[2]}}),{c(){T(o.$$.fragment)},l(e){k(o.$$.fragment,e)},m(e,r){j(o,e,r),n=!0},p(e,r){const i={};r[0]&4&&(i.queryResult=e[2]),o.$set(i)},i(e){n||(g(o.$$.fragment,e),n=!0)},o(e){b(o.$$.fragment,e),n=!1},d(e){w(o,e)}}}function Je(f){let o,n;return o=new Qt({props:{queryID:"usajobs_tools_tech_selected_occ",queryResult:f[3]}}),{c(){T(o.$$.fragment)},l(e){k(o.$$.fragment,e)},m(e,r){j(o,e,r),n=!0},p(e,r){const i={};r[0]&8&&(i.queryResult=e[3]),o.$set(i)},i(e){n||(g(o.$$.fragment,e),n=!0)},o(e){b(o.$$.fragment,e),n=!1},d(e){w(o,e)}}}function mo(f){let o,n,e,r,i,c,p,v;return o=new G({props:{id:"occupation",title:"Occupation",wrap:"true"}}),e=new G({props:{id:"postings",title:"Postings",fmt:"#,##0"}}),i=new G({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),p=new G({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){T(o.$$.fragment),n=m(),T(e.$$.fragment),r=m(),T(i.$$.fragment),c=m(),T(p.$$.fragment)},l(l){k(o.$$.fragment,l),n=y(l),k(e.$$.fragment,l),r=y(l),k(i.$$.fragment,l),c=y(l),k(p.$$.fragment,l)},m(l,A){j(o,l,A),u(l,n,A),j(e,l,A),u(l,r,A),j(i,l,A),u(l,c,A),j(p,l,A),v=!0},p:it,i(l){v||(g(o.$$.fragment,l),g(e.$$.fragment,l),g(i.$$.fragment,l),g(p.$$.fragment,l),v=!0)},o(l){b(o.$$.fragment,l),b(e.$$.fragment,l),b(i.$$.fragment,l),b(p.$$.fragment,l),v=!1},d(l){l&&(_(n),_(r),_(c)),w(o,l),w(e,l),w(i,l),w(p,l)}}}function Le(f){let o,n;return o=new Qt({props:{queryID:"usajobs_tools_tech_selected_agency",queryResult:f[4]}}),{c(){T(o.$$.fragment)},l(e){k(o.$$.fragment,e)},m(e,r){j(o,e,r),n=!0},p(e,r){const i={};r[0]&16&&(i.queryResult=e[4]),o.$set(i)},i(e){n||(g(o.$$.fragment,e),n=!0)},o(e){b(o.$$.fragment,e),n=!1},d(e){w(o,e)}}}function bo(f){let o,n,e,r,i,c,p,v;return o=new G({props:{id:"agency",title:"Agency",wrap:"true"}}),e=new G({props:{id:"postings",title:"Postings",fmt:"#,##0"}}),i=new G({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),p=new G({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){T(o.$$.fragment),n=m(),T(e.$$.fragment),r=m(),T(i.$$.fragment),c=m(),T(p.$$.fragment)},l(l){k(o.$$.fragment,l),n=y(l),k(e.$$.fragment,l),r=y(l),k(i.$$.fragment,l),c=y(l),k(p.$$.fragment,l)},m(l,A){j(o,l,A),u(l,n,A),j(e,l,A),u(l,r,A),j(i,l,A),u(l,c,A),j(p,l,A),v=!0},p:it,i(l){v||(g(o.$$.fragment,l),g(e.$$.fragment,l),g(i.$$.fragment,l),g(p.$$.fragment,l),v=!0)},o(l){b(o.$$.fragment,l),b(e.$$.fragment,l),b(i.$$.fragment,l),b(p.$$.fragment,l),v=!1},d(l){l&&(_(n),_(r),_(c)),w(o,l),w(e,l),w(i,l),w(p,l)}}}function Fe(f){let o,n;return o=new Qt({props:{queryID:"usajobs_tools_tech_entity_options",queryResult:f[5]}}),{c(){T(o.$$.fragment)},l(e){k(o.$$.fragment,e)},m(e,r){j(o,e,r),n=!0},p(e,r){const i={};r[0]&32&&(i.queryResult=e[5]),o.$set(i)},i(e){n||(g(o.$$.fragment,e),n=!0)},o(e){b(o.$$.fragment,e),n=!1},d(e){w(o,e)}}}function Ie(f){let o,n;return o=new Qt({props:{queryID:"usajobs_tools_tech_selected_entity",queryResult:f[6]}}),{c(){T(o.$$.fragment)},l(e){k(o.$$.fragment,e)},m(e,r){j(o,e,r),n=!0},p(e,r){const i={};r[0]&64&&(i.queryResult=e[6]),o.$set(i)},i(e){n||(g(o.$$.fragment,e),n=!0)},o(e){b(o.$$.fragment,e),n=!1},d(e){w(o,e)}}}function $o(f){let o,n,e,r,i,c,p,v,l,A;return o=new G({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),e=new G({props:{id:"concept",title:"Tool / technology",wrap:"true"}}),i=new G({props:{id:"postings",title:"Postings",fmt:"#,##0"}}),p=new G({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),l=new G({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){T(o.$$.fragment),n=m(),T(e.$$.fragment),r=m(),T(i.$$.fragment),c=m(),T(p.$$.fragment),v=m(),T(l.$$.fragment)},l(s){k(o.$$.fragment,s),n=y(s),k(e.$$.fragment,s),r=y(s),k(i.$$.fragment,s),c=y(s),k(p.$$.fragment,s),v=y(s),k(l.$$.fragment,s)},m(s,h){j(o,s,h),u(s,n,h),j(e,s,h),u(s,r,h),j(i,s,h),u(s,c,h),j(p,s,h),u(s,v,h),j(l,s,h),A=!0},p:it,i(s){A||(g(o.$$.fragment,s),g(e.$$.fragment,s),g(i.$$.fragment,s),g(p.$$.fragment,s),g(l.$$.fragment,s),A=!0)},o(s){b(o.$$.fragment,s),b(e.$$.fragment,s),b(i.$$.fragment,s),b(p.$$.fragment,s),b(l.$$.fragment,s),A=!1},d(s){s&&(_(n),_(r),_(c),_(v)),w(o,s),w(e,s),w(i,s),w(p,s),w(l,s)}}}function Oe(f){let o,n;return o=new Qt({props:{queryID:"usajobs_concept_blocklist_diagnostics",queryResult:f[7]}}),{c(){T(o.$$.fragment)},l(e){k(o.$$.fragment,e)},m(e,r){j(o,e,r),n=!0},p(e,r){const i={};r[0]&128&&(i.queryResult=e[7]),o.$set(i)},i(e){n||(g(o.$$.fragment,e),n=!0)},o(e){b(o.$$.fragment,e),n=!1},d(e){w(o,e)}}}function ho(f){let o,n,e,r,i,c,p,v,l,A,s,h;return o=new G({props:{id:"category",title:"Category"}}),e=new G({props:{id:"subcategory",title:"Concept",wrap:"true"}}),i=new G({props:{id:"occupation_hits",title:"Occs",fmt:"#,##0"}}),p=new G({props:{id:"occupation_coverage",title:"Coverage",fmt:"0.0%"}}),l=new G({props:{id:"postings",title:"Postings",fmt:"#,##0"}}),s=new G({props:{id:"blocklisted",title:"Blocked"}}),{c(){T(o.$$.fragment),n=m(),T(e.$$.fragment),r=m(),T(i.$$.fragment),c=m(),T(p.$$.fragment),v=m(),T(l.$$.fragment),A=m(),T(s.$$.fragment)},l(d){k(o.$$.fragment,d),n=y(d),k(e.$$.fragment,d),r=y(d),k(i.$$.fragment,d),c=y(d),k(p.$$.fragment,d),v=y(d),k(l.$$.fragment,d),A=y(d),k(s.$$.fragment,d)},m(d,H){j(o,d,H),u(d,n,H),j(e,d,H),u(d,r,H),j(i,d,H),u(d,c,H),j(p,d,H),u(d,v,H),j(l,d,H),u(d,A,H),j(s,d,H),h=!0},p:it,i(d){h||(g(o.$$.fragment,d),g(e.$$.fragment,d),g(i.$$.fragment,d),g(p.$$.fragment,d),g(l.$$.fragment,d),g(s.$$.fragment,d),h=!0)},o(d){b(o.$$.fragment,d),b(e.$$.fragment,d),b(i.$$.fragment,d),b(p.$$.fragment,d),b(l.$$.fragment,d),b(s.$$.fragment,d),h=!1},d(d){d&&(_(n),_(r),_(c),_(v),_(A)),w(o,d),w(e,d),w(i,d),w(p,d),w(l,d),w(s,d)}}}function vo(f){let o,n,e,r,i,c,p="This page profiles tool and technology concepts extracted from USAJOBS postings. Tool and technology labels are ConceptSearch matches to O*NET and UNSPSC code lists. The rankings below use posting share and revealed comparative advantage (RCA) within the USAJOBS corpus; RCA values above 1 indicate that a tool or technology is more concentrated in the selected occupation or agency than in the relevant occupation or agency universe.",v,l,A="<strong>How to read this page.</strong> These are ConceptSearch matches in federal postings. They show posting-text evidence for selected tools or technologies; they do not verify actual tool deployment, procurement, or worker proficiency.",s,h,d="<strong>Shared terms.</strong> % posts = selected concept postings / all postings for the occupation or agency. RCA = selected entity concept share / USAJOBS concept share. Postings is the matched posting count for that concept.",H,et,Vt='<a href="#rca-spotlights" class="hover:underline">RCA spotlights</a> <a href="#concept-drilldown" class="hover:underline">Concept drilldown</a> <a href="#selected-entity" class="hover:underline">Selected entity</a> <a href="#concept-qa" class="hover:underline">Concept QA</a> <a href="#source-notes" class="hover:underline">Source notes</a>',kt,O,rt='<a href="#rca-spotlights">RCA Spotlights</a>',_t,ot,zt="These spotlights surface the most overrepresented tool and technology concepts among entity-level concept rows retained for dashboard display. A minimum of 100 postings is applied to reduce small-cell artifacts.",Tt,W,N,At='<a href="#table-1-top-usajobs-agency-tooltechnology-concentrations-by-rca-minimum-1000-agency-postings">Table 1. Top USAJOBS agency tool/technology concentrations by RCA (minimum 1,000 agency postings)</a>',Ct,st,Rt,X,x,St='<a href="#table-2-top-usajobs-occupation-tooltechnology-concentrations-by-rca">Table 2. Top USAJOBS occupation tool/technology concentrations by RCA</a>',Et,nt,Gt,B,ut='<a href="#concept-drilldown">Concept Drilldown</a>',pt,ft,ct,Ht,Q,gt='<a href="#occupations-using-the-selected-tool-or-technology">Occupations Using the Selected Tool or Technology</a>',yt,mt,Z,Kt='<a href="#table-utt-1-occupations-using-the-selected-tool-or-technology">Table UTT-1. Occupations Using the Selected Tool or Technology</a>',lt,z,bt,tt,Wt='<a href="#agencies-using-the-selected-tool-or-technology">Agencies Using the Selected Tool or Technology</a>',Pt,Y,V,Ut='<a href="#table-utt-2-agencies-using-the-selected-tool-or-technology">Table UTT-2. Agencies Using the Selected Tool or Technology</a>',Mt,at,qt,C,oe='<a href="#selected-entity">Selected Entity</a>',se,Xt,Dt,ne,Yt,dt,we='<a href="#table-utt-3-selected-entity-tool-and-technology-profile">Table UTT-3. Selected Entity Tool and Technology Profile</a>',ce,Jt,le,$t,je='<a href="#concept-qa">Concept QA</a>',ae,Lt,ke="Keyword matching creates false positives. Some tools and technologies are blocked on the dashboard because they likely reflect false-positive matches in the raw data.",ie,Zt,ht,Te='<a href="#table-utt-4-concept-blocklist-diagnostics">Table UTT-4. Concept Blocklist Diagnostics</a>',re,Ft,_e,vt,Ae='<a href="#source-notes">Source Notes</a>',ue,It,Ce='Tool and technology concepts are ConceptSearch outputs mapped to O*NET and UNSPSC code lists. The page uses <code class="markdown">usajobs.AGGR_USAJobsEntityConceptProfile</code>; dashboard display rows are limited to each entity&#39;s top concept rows by category, so the RCA spotlights are best read as high-signal dashboard profiles rather than a full exhaustive concept universe.',pe,Ot,Re='Evidence path: RCA is defined in <a href="/us-lmi/methodology#revealed-comparative-advantage-rca" class="markdown">Methods</a>. Concept and release checks are listed in <a href="/us-lmi/methodology/audit-trail" class="markdown">Agreement And Audit Trail</a>.',fe,wt=typeof E<"u"&&E.title&&E.hide_title!==!0&&io();function Ne(t,a){return typeof E<"u"&&E.title?_o:ro}let ee=Ne()(f),jt=typeof E=="object"&&uo(),U=f[0]&&Me(f);st=new te({props:{data:f[0],rowsPerPage:"25",$$slots:{default:[go]},$$scope:{ctx:f}}});let M=f[1]&&qe(f);nt=new te({props:{data:f[1],rowsPerPage:"25",$$slots:{default:[yo]},$$scope:{ctx:f}}});let q=f[2]&&De(f);ct=new Ue({props:{data:f[2],name:"tools_tech_concept",value:"subcategory",label:"concept_label",defaultValue:"Word processing software",title:"Tool or technology"}});let D=f[3]&&Je(f);z=new te({props:{data:f[3],rowsPerPage:"25",$$slots:{default:[mo]},$$scope:{ctx:f}}});let J=f[4]&&Le(f);at=new te({props:{data:f[4],rowsPerPage:"25",$$slots:{default:[bo]},$$scope:{ctx:f}}});let L=f[5]&&Fe(f);Dt=new Ue({props:{data:f[5],name:"tools_tech_entity",value:"entity_id",label:"entity_label",defaultValue:"15-1252.00",title:"Occupation or agency"}});let F=f[6]&&Ie(f);Jt=new te({props:{data:f[6],groupBy:"category",rowsPerPage:"25",$$slots:{default:[$o]},$$scope:{ctx:f}}});let I=f[7]&&Oe(f);return Ft=new te({props:{data:f[7],rowsPerPage:"25",$$slots:{default:[ho]},$$scope:{ctx:f}}}),{c(){wt&&wt.c(),o=m(),ee.c(),n=S("meta"),e=S("meta"),jt&&jt.c(),r=ye(),i=m(),c=S("p"),c.textContent=p,v=m(),l=S("div"),l.innerHTML=A,s=m(),h=S("div"),h.innerHTML=d,H=m(),et=S("div"),et.innerHTML=Vt,kt=m(),O=S("h2"),O.innerHTML=rt,_t=m(),ot=S("p"),ot.textContent=zt,Tt=m(),U&&U.c(),W=m(),N=S("h3"),N.innerHTML=At,Ct=m(),T(st.$$.fragment),Rt=m(),M&&M.c(),X=m(),x=S("h3"),x.innerHTML=St,Et=m(),T(nt.$$.fragment),Gt=m(),B=S("h2"),B.innerHTML=ut,pt=m(),q&&q.c(),ft=m(),T(ct.$$.fragment),Ht=m(),Q=S("h3"),Q.innerHTML=gt,yt=m(),D&&D.c(),mt=m(),Z=S("h3"),Z.innerHTML=Kt,lt=m(),T(z.$$.fragment),bt=m(),tt=S("h3"),tt.innerHTML=Wt,Pt=m(),J&&J.c(),Y=m(),V=S("h3"),V.innerHTML=Ut,Mt=m(),T(at.$$.fragment),qt=m(),C=S("h2"),C.innerHTML=oe,se=m(),L&&L.c(),Xt=m(),T(Dt.$$.fragment),ne=m(),F&&F.c(),Yt=m(),dt=S("h3"),dt.innerHTML=we,ce=m(),T(Jt.$$.fragment),le=m(),$t=S("h2"),$t.innerHTML=je,ae=m(),Lt=S("p"),Lt.textContent=ke,ie=m(),I&&I.c(),Zt=m(),ht=S("h3"),ht.innerHTML=Te,re=m(),T(Ft.$$.fragment),_e=m(),vt=S("h2"),vt.innerHTML=Ae,ue=m(),It=S("p"),It.innerHTML=Ce,pe=m(),Ot=S("p"),Ot.innerHTML=Re,this.h()},l(t){wt&&wt.l(t),o=y(t);const a=Be("svelte-2igo1p",document.head);ee.l(a),n=R(a,"META",{name:!0,content:!0}),e=R(a,"META",{name:!0,content:!0}),jt&&jt.l(a),r=ye(),a.forEach(_),i=y(t),c=R(t,"P",{class:!0,"data-svelte-h":!0}),P(c)!=="svelte-10kfj26"&&(c.textContent=p),v=y(t),l=R(t,"DIV",{class:!0,"data-svelte-h":!0}),P(l)!=="svelte-gnmw3d"&&(l.innerHTML=A),s=y(t),h=R(t,"DIV",{class:!0,"data-svelte-h":!0}),P(h)!=="svelte-1jzd4g3"&&(h.innerHTML=d),H=y(t),et=R(t,"DIV",{class:!0,"data-svelte-h":!0}),P(et)!=="svelte-1gm51ob"&&(et.innerHTML=Vt),kt=y(t),O=R(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(O)!=="svelte-1dup7sl"&&(O.innerHTML=rt),_t=y(t),ot=R(t,"P",{class:!0,"data-svelte-h":!0}),P(ot)!=="svelte-1ducmb"&&(ot.textContent=zt),Tt=y(t),U&&U.l(t),W=y(t),N=R(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),P(N)!=="svelte-6ymkky"&&(N.innerHTML=At),Ct=y(t),k(st.$$.fragment,t),Rt=y(t),M&&M.l(t),X=y(t),x=R(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),P(x)!=="svelte-x8nk5r"&&(x.innerHTML=St),Et=y(t),k(nt.$$.fragment,t),Gt=y(t),B=R(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(B)!=="svelte-16e14i9"&&(B.innerHTML=ut),pt=y(t),q&&q.l(t),ft=y(t),k(ct.$$.fragment,t),Ht=y(t),Q=R(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),P(Q)!=="svelte-1ap4x1n"&&(Q.innerHTML=gt),yt=y(t),D&&D.l(t),mt=y(t),Z=R(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),P(Z)!=="svelte-1e0vneg"&&(Z.innerHTML=Kt),lt=y(t),k(z.$$.fragment,t),bt=y(t),tt=R(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),P(tt)!=="svelte-18vj3vi"&&(tt.innerHTML=Wt),Pt=y(t),J&&J.l(t),Y=y(t),V=R(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),P(V)!=="svelte-195z8v6"&&(V.innerHTML=Ut),Mt=y(t),k(at.$$.fragment,t),qt=y(t),C=R(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(C)!=="svelte-1ysh1c2"&&(C.innerHTML=oe),se=y(t),L&&L.l(t),Xt=y(t),k(Dt.$$.fragment,t),ne=y(t),F&&F.l(t),Yt=y(t),dt=R(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),P(dt)!=="svelte-1bnl2u9"&&(dt.innerHTML=we),ce=y(t),k(Jt.$$.fragment,t),le=y(t),$t=R(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P($t)!=="svelte-1ed4u3a"&&($t.innerHTML=je),ae=y(t),Lt=R(t,"P",{class:!0,"data-svelte-h":!0}),P(Lt)!=="svelte-14kfbx7"&&(Lt.textContent=ke),ie=y(t),I&&I.l(t),Zt=y(t),ht=R(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),P(ht)!=="svelte-2mfpod"&&(ht.innerHTML=Te),re=y(t),k(Ft.$$.fragment,t),_e=y(t),vt=R(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),P(vt)!=="svelte-5tqyr0"&&(vt.innerHTML=Ae),ue=y(t),It=R(t,"P",{class:!0,"data-svelte-h":!0}),P(It)!=="svelte-14t2hk5"&&(It.innerHTML=Ce),pe=y(t),Ot=R(t,"P",{class:!0,"data-svelte-h":!0}),P(Ot)!=="svelte-6xk7hg"&&(Ot.innerHTML=Re),this.h()},h(){$(n,"name","twitter:card"),$(n,"content","summary_large_image"),$(e,"name","twitter:site"),$(e,"content","@evidence_dev"),$(c,"class","markdown"),$(l,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),$(h,"class","text-sm my-3"),$(et,"class","flex flex-wrap gap-x-4 gap-y-2 text-sm border-y border-gray-200 py-3 mb-6"),$(O,"class","markdown"),$(O,"id","rca-spotlights"),$(ot,"class","markdown"),$(N,"class","markdown"),$(N,"id","table-1-top-usajobs-agency-tooltechnology-concentrations-by-rca-minimum-1000-agency-postings"),$(x,"class","markdown"),$(x,"id","table-2-top-usajobs-occupation-tooltechnology-concentrations-by-rca"),$(B,"class","markdown"),$(B,"id","concept-drilldown"),$(Q,"class","markdown"),$(Q,"id","occupations-using-the-selected-tool-or-technology"),$(Z,"class","markdown"),$(Z,"id","table-utt-1-occupations-using-the-selected-tool-or-technology"),$(tt,"class","markdown"),$(tt,"id","agencies-using-the-selected-tool-or-technology"),$(V,"class","markdown"),$(V,"id","table-utt-2-agencies-using-the-selected-tool-or-technology"),$(C,"class","markdown"),$(C,"id","selected-entity"),$(dt,"class","markdown"),$(dt,"id","table-utt-3-selected-entity-tool-and-technology-profile"),$($t,"class","markdown"),$($t,"id","concept-qa"),$(Lt,"class","markdown"),$(ht,"class","markdown"),$(ht,"id","table-utt-4-concept-blocklist-diagnostics"),$(vt,"class","markdown"),$(vt,"id","source-notes"),$(It,"class","markdown"),$(Ot,"class","markdown")},m(t,a){wt&&wt.m(t,a),u(t,o,a),ee.m(document.head,null),ge(document.head,n),ge(document.head,e),jt&&jt.m(document.head,null),ge(document.head,r),u(t,i,a),u(t,c,a),u(t,v,a),u(t,l,a),u(t,s,a),u(t,h,a),u(t,H,a),u(t,et,a),u(t,kt,a),u(t,O,a),u(t,_t,a),u(t,ot,a),u(t,Tt,a),U&&U.m(t,a),u(t,W,a),u(t,N,a),u(t,Ct,a),j(st,t,a),u(t,Rt,a),M&&M.m(t,a),u(t,X,a),u(t,x,a),u(t,Et,a),j(nt,t,a),u(t,Gt,a),u(t,B,a),u(t,pt,a),q&&q.m(t,a),u(t,ft,a),j(ct,t,a),u(t,Ht,a),u(t,Q,a),u(t,yt,a),D&&D.m(t,a),u(t,mt,a),u(t,Z,a),u(t,lt,a),j(z,t,a),u(t,bt,a),u(t,tt,a),u(t,Pt,a),J&&J.m(t,a),u(t,Y,a),u(t,V,a),u(t,Mt,a),j(at,t,a),u(t,qt,a),u(t,C,a),u(t,se,a),L&&L.m(t,a),u(t,Xt,a),j(Dt,t,a),u(t,ne,a),F&&F.m(t,a),u(t,Yt,a),u(t,dt,a),u(t,ce,a),j(Jt,t,a),u(t,le,a),u(t,$t,a),u(t,ae,a),u(t,Lt,a),u(t,ie,a),I&&I.m(t,a),u(t,Zt,a),u(t,ht,a),u(t,re,a),j(Ft,t,a),u(t,_e,a),u(t,vt,a),u(t,ue,a),u(t,It,a),u(t,pe,a),u(t,Ot,a),fe=!0},p(t,a){typeof E<"u"&&E.title&&E.hide_title!==!0&&wt.p(t,a),ee.p(t,a),typeof E=="object"&&jt.p(t,a),t[0]?U?(U.p(t,a),a[0]&1&&g(U,1)):(U=Me(t),U.c(),g(U,1),U.m(W.parentNode,W)):U&&(xt(),b(U,1,1,()=>{U=null}),Nt());const me={};a[0]&1&&(me.data=t[0]),a[1]&536870912&&(me.$$scope={dirty:a,ctx:t}),st.$set(me),t[1]?M?(M.p(t,a),a[0]&2&&g(M,1)):(M=qe(t),M.c(),g(M,1),M.m(X.parentNode,X)):M&&(xt(),b(M,1,1,()=>{M=null}),Nt());const be={};a[0]&2&&(be.data=t[1]),a[1]&536870912&&(be.$$scope={dirty:a,ctx:t}),nt.$set(be),t[2]?q?(q.p(t,a),a[0]&4&&g(q,1)):(q=De(t),q.c(),g(q,1),q.m(ft.parentNode,ft)):q&&(xt(),b(q,1,1,()=>{q=null}),Nt());const Se={};a[0]&4&&(Se.data=t[2]),ct.$set(Se),t[3]?D?(D.p(t,a),a[0]&8&&g(D,1)):(D=Je(t),D.c(),g(D,1),D.m(mt.parentNode,mt)):D&&(xt(),b(D,1,1,()=>{D=null}),Nt());const de={};a[0]&8&&(de.data=t[3]),a[1]&536870912&&(de.$$scope={dirty:a,ctx:t}),z.$set(de),t[4]?J?(J.p(t,a),a[0]&16&&g(J,1)):(J=Le(t),J.c(),g(J,1),J.m(Y.parentNode,Y)):J&&(xt(),b(J,1,1,()=>{J=null}),Nt());const $e={};a[0]&16&&($e.data=t[4]),a[1]&536870912&&($e.$$scope={dirty:a,ctx:t}),at.$set($e),t[5]?L?(L.p(t,a),a[0]&32&&g(L,1)):(L=Fe(t),L.c(),g(L,1),L.m(Xt.parentNode,Xt)):L&&(xt(),b(L,1,1,()=>{L=null}),Nt());const Ee={};a[0]&32&&(Ee.data=t[5]),Dt.$set(Ee),t[6]?F?(F.p(t,a),a[0]&64&&g(F,1)):(F=Ie(t),F.c(),g(F,1),F.m(Yt.parentNode,Yt)):F&&(xt(),b(F,1,1,()=>{F=null}),Nt());const he={};a[0]&64&&(he.data=t[6]),a[1]&536870912&&(he.$$scope={dirty:a,ctx:t}),Jt.$set(he),t[7]?I?(I.p(t,a),a[0]&128&&g(I,1)):(I=Oe(t),I.c(),g(I,1),I.m(Zt.parentNode,Zt)):I&&(xt(),b(I,1,1,()=>{I=null}),Nt());const ve={};a[0]&128&&(ve.data=t[7]),a[1]&536870912&&(ve.$$scope={dirty:a,ctx:t}),Ft.$set(ve)},i(t){fe||(g(U),g(st.$$.fragment,t),g(M),g(nt.$$.fragment,t),g(q),g(ct.$$.fragment,t),g(D),g(z.$$.fragment,t),g(J),g(at.$$.fragment,t),g(L),g(Dt.$$.fragment,t),g(F),g(Jt.$$.fragment,t),g(I),g(Ft.$$.fragment,t),fe=!0)},o(t){b(U),b(st.$$.fragment,t),b(M),b(nt.$$.fragment,t),b(q),b(ct.$$.fragment,t),b(D),b(z.$$.fragment,t),b(J),b(at.$$.fragment,t),b(L),b(Dt.$$.fragment,t),b(F),b(Jt.$$.fragment,t),b(I),b(Ft.$$.fragment,t),fe=!1},d(t){t&&(_(o),_(i),_(c),_(v),_(l),_(s),_(h),_(H),_(et),_(kt),_(O),_(_t),_(ot),_(Tt),_(W),_(N),_(Ct),_(Rt),_(X),_(x),_(Et),_(Gt),_(B),_(pt),_(ft),_(Ht),_(Q),_(yt),_(mt),_(Z),_(lt),_(bt),_(tt),_(Pt),_(Y),_(V),_(Mt),_(qt),_(C),_(se),_(Xt),_(ne),_(Yt),_(dt),_(ce),_(le),_($t),_(ae),_(Lt),_(ie),_(Zt),_(ht),_(re),_(_e),_(vt),_(ue),_(It),_(pe),_(Ot)),wt&&wt.d(t),ee.d(t),_(n),_(e),jt&&jt.d(t),_(r),U&&U.d(t),w(st,t),M&&M.d(t),w(nt,t),q&&q.d(t),w(ct,t),D&&D.d(t),w(z,t),J&&J.d(t),w(at,t),L&&L.d(t),w(Dt,t),F&&F.d(t),w(Jt,t),I&&I.d(t),w(Ft,t)}}}const E={title:"Tools & Technology Profiler"};function wo(f,o,n){let e,r;Ge(f,lo,C=>n(43,e=C)),Ge(f,Pe,C=>n(48,r=C));let{data:i}=o,{data:c={},customFormattingSettings:p,__db:v,inputs:l}=i;Qe(Pe,r="a530d54976ac41b7cfe0d1ffbfadcef4",r);let A=oo(eo(l));Ve(A.subscribe(C=>n(10,l=C))),ze(co,{getCustomFormats:()=>p.customFormats||[]});const s=(C,oe)=>ao(v.query,C,{query_name:oe});so(s),e.params,Ke(()=>!0);let h={initialData:void 0,initialError:void 0},d=K`select
  entity_label as agency,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and category in ('tools', 'technology')
  and n_postings >= 1000
  and postings >= 100
order by concept_rca desc, postings desc
limit 25`,H=`select
  entity_label as agency,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and category in ('tools', 'technology')
  and n_postings >= 1000
  and postings >= 100
order by concept_rca desc, postings desc
limit 25`;c.usajobs_tools_tech_agency_spotlight_data&&(c.usajobs_tools_tech_agency_spotlight_data instanceof Error?h.initialError=c.usajobs_tools_tech_agency_spotlight_data:h.initialData=c.usajobs_tools_tech_agency_spotlight_data,c.usajobs_tools_tech_agency_spotlight_columns&&(h.knownColumns=c.usajobs_tools_tech_agency_spotlight_columns));let et,Vt=!1;const kt=Bt.createReactive({callback:C=>{n(0,et=C)},execFn:s},{id:"usajobs_tools_tech_agency_spotlight",...h});kt(H,{noResolve:d,...h}),globalThis[Symbol.for("usajobs_tools_tech_agency_spotlight")]={get value(){return et}};let O={initialData:void 0,initialError:void 0},rt=K`select
  entity_id as occ8,
  entity_label as occupation,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and category in ('tools', 'technology')
  and postings >= 100
order by concept_rca desc, postings desc
limit 25`,_t=`select
  entity_id as occ8,
  entity_label as occupation,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and category in ('tools', 'technology')
  and postings >= 100
order by concept_rca desc, postings desc
limit 25`;c.usajobs_tools_tech_occ_spotlight_data&&(c.usajobs_tools_tech_occ_spotlight_data instanceof Error?O.initialError=c.usajobs_tools_tech_occ_spotlight_data:O.initialData=c.usajobs_tools_tech_occ_spotlight_data,c.usajobs_tools_tech_occ_spotlight_columns&&(O.knownColumns=c.usajobs_tools_tech_occ_spotlight_columns));let ot,zt=!1;const Tt=Bt.createReactive({callback:C=>{n(1,ot=C)},execFn:s},{id:"usajobs_tools_tech_occ_spotlight",...O});Tt(_t,{noResolve:rt,...O}),globalThis[Symbol.for("usajobs_tools_tech_occ_spotlight")]={get value(){return ot}};let W={initialData:void 0,initialError:void 0},N=K`select distinct
  category,
  subcategory,
  value,
  concat(upper(substr(category, 1, 1)), substr(category, 2), ': ', subcategory) as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category in ('tools', 'technology')
order by category, subcategory`,At=`select distinct
  category,
  subcategory,
  value,
  concat(upper(substr(category, 1, 1)), substr(category, 2), ': ', subcategory) as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category in ('tools', 'technology')
order by category, subcategory`;c.usajobs_tools_tech_options_data&&(c.usajobs_tools_tech_options_data instanceof Error?W.initialError=c.usajobs_tools_tech_options_data:W.initialData=c.usajobs_tools_tech_options_data,c.usajobs_tools_tech_options_columns&&(W.knownColumns=c.usajobs_tools_tech_options_columns));let Ct,st=!1;const Rt=Bt.createReactive({callback:C=>{n(2,Ct=C)},execFn:s},{id:"usajobs_tools_tech_options",...W});Rt(At,{noResolve:N,...W}),globalThis[Symbol.for("usajobs_tools_tech_options")]={get value(){return Ct}};let X={initialData:void 0,initialError:void 0},x=K`select
  entity_id as occ8,
  entity_label as occupation,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and category in ('tools', 'technology')
  and subcategory = '${l.tools_tech_concept.value}'
order by concept_rca desc, postings desc
limit 25`,St=`select
  entity_id as occ8,
  entity_label as occupation,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and category in ('tools', 'technology')
  and subcategory = '${l.tools_tech_concept.value}'
order by concept_rca desc, postings desc
limit 25`;c.usajobs_tools_tech_selected_occ_data&&(c.usajobs_tools_tech_selected_occ_data instanceof Error?X.initialError=c.usajobs_tools_tech_selected_occ_data:X.initialData=c.usajobs_tools_tech_selected_occ_data,c.usajobs_tools_tech_selected_occ_columns&&(X.knownColumns=c.usajobs_tools_tech_selected_occ_columns));let Et,nt=!1;const Gt=Bt.createReactive({callback:C=>{n(3,Et=C)},execFn:s},{id:"usajobs_tools_tech_selected_occ",...X});Gt(St,{noResolve:x,...X}),globalThis[Symbol.for("usajobs_tools_tech_selected_occ")]={get value(){return Et}};let B={initialData:void 0,initialError:void 0},ut=K`select
  entity_label as agency,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and category in ('tools', 'technology')
  and subcategory = '${l.tools_tech_concept.value}'
order by concept_rca desc, postings desc
limit 25`,pt=`select
  entity_label as agency,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and category in ('tools', 'technology')
  and subcategory = '${l.tools_tech_concept.value}'
order by concept_rca desc, postings desc
limit 25`;c.usajobs_tools_tech_selected_agency_data&&(c.usajobs_tools_tech_selected_agency_data instanceof Error?B.initialError=c.usajobs_tools_tech_selected_agency_data:B.initialData=c.usajobs_tools_tech_selected_agency_data,c.usajobs_tools_tech_selected_agency_columns&&(B.knownColumns=c.usajobs_tools_tech_selected_agency_columns));let ft,ct=!1;const Ht=Bt.createReactive({callback:C=>{n(4,ft=C)},execFn:s},{id:"usajobs_tools_tech_selected_agency",...B});Ht(pt,{noResolve:ut,...B}),globalThis[Symbol.for("usajobs_tools_tech_selected_agency")]={get value(){return ft}};let Q={initialData:void 0,initialError:void 0},gt=K`select distinct entity_id, entity_label, entity_type
from usajobs.AGGR_USAJobsEntityConceptProfile
where category in ('tools', 'technology')
order by entity_type, entity_label`,yt=`select distinct entity_id, entity_label, entity_type
from usajobs.AGGR_USAJobsEntityConceptProfile
where category in ('tools', 'technology')
order by entity_type, entity_label`;c.usajobs_tools_tech_entity_options_data&&(c.usajobs_tools_tech_entity_options_data instanceof Error?Q.initialError=c.usajobs_tools_tech_entity_options_data:Q.initialData=c.usajobs_tools_tech_entity_options_data,c.usajobs_tools_tech_entity_options_columns&&(Q.knownColumns=c.usajobs_tools_tech_entity_options_columns));let mt,Z=!1;const Kt=Bt.createReactive({callback:C=>{n(5,mt=C)},execFn:s},{id:"usajobs_tools_tech_entity_options",...Q});Kt(yt,{noResolve:gt,...Q}),globalThis[Symbol.for("usajobs_tools_tech_entity_options")]={get value(){return mt}};let lt={initialData:void 0,initialError:void 0},z=K`select
  entity_type,
  category,
  concept_rank,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category in ('tools', 'technology')
  and entity_id = '${l.tools_tech_entity.value}'
order by category, concept_rca desc, postings desc`,bt=`select
  entity_type,
  category,
  concept_rank,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category in ('tools', 'technology')
  and entity_id = '${l.tools_tech_entity.value}'
order by category, concept_rca desc, postings desc`;c.usajobs_tools_tech_selected_entity_data&&(c.usajobs_tools_tech_selected_entity_data instanceof Error?lt.initialError=c.usajobs_tools_tech_selected_entity_data:lt.initialData=c.usajobs_tools_tech_selected_entity_data,c.usajobs_tools_tech_selected_entity_columns&&(lt.knownColumns=c.usajobs_tools_tech_selected_entity_columns));let tt,Wt=!1;const Pt=Bt.createReactive({callback:C=>{n(6,tt=C)},execFn:s},{id:"usajobs_tools_tech_selected_entity",...lt});Pt(bt,{noResolve:z,...lt}),globalThis[Symbol.for("usajobs_tools_tech_selected_entity")]={get value(){return tt}};let Y={initialData:void 0,initialError:void 0},V=K`select
  category,
  subcategory,
  value,
  occupation_hits,
  occupation_coverage,
  postings,
  median_pct_postings,
  blocklisted
from usajobs.AGGR_USAJobsConceptBlocklistDiagnostics
where occupation_coverage >= 0.90
order by occupation_coverage desc, postings desc`,Ut=`select
  category,
  subcategory,
  value,
  occupation_hits,
  occupation_coverage,
  postings,
  median_pct_postings,
  blocklisted
from usajobs.AGGR_USAJobsConceptBlocklistDiagnostics
where occupation_coverage >= 0.90
order by occupation_coverage desc, postings desc`;c.usajobs_concept_blocklist_diagnostics_data&&(c.usajobs_concept_blocklist_diagnostics_data instanceof Error?Y.initialError=c.usajobs_concept_blocklist_diagnostics_data:Y.initialData=c.usajobs_concept_blocklist_diagnostics_data,c.usajobs_concept_blocklist_diagnostics_columns&&(Y.knownColumns=c.usajobs_concept_blocklist_diagnostics_columns));let Mt,at=!1;const qt=Bt.createReactive({callback:C=>{n(7,Mt=C)},execFn:s},{id:"usajobs_concept_blocklist_diagnostics",...Y});return qt(Ut,{noResolve:V,...Y}),globalThis[Symbol.for("usajobs_concept_blocklist_diagnostics")]={get value(){return Mt}},f.$$set=C=>{"data"in C&&n(8,i=C.data)},f.$$.update=()=>{f.$$.dirty[0]&256&&n(9,{data:c={},customFormattingSettings:p,__db:v}=i,c),f.$$.dirty[0]&512&&no.set(Object.keys(c).length>0),f.$$.dirty[1]&4096&&e.params,f.$$.dirty[0]&30720&&(d||!Vt?d||(kt(H,{noResolve:d,...h}),n(14,Vt=!0)):kt(H,{noResolve:d})),f.$$.dirty[0]&491520&&(rt||!zt?rt||(Tt(_t,{noResolve:rt,...O}),n(18,zt=!0)):Tt(_t,{noResolve:rt})),f.$$.dirty[0]&7864320&&(N||!st?N||(Rt(At,{noResolve:N,...W}),n(22,st=!0)):Rt(At,{noResolve:N})),f.$$.dirty[0]&1024&&n(24,x=K`select
  entity_id as occ8,
  entity_label as occupation,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and category in ('tools', 'technology')
  and subcategory = '${l.tools_tech_concept.value}'
order by concept_rca desc, postings desc
limit 25`),f.$$.dirty[0]&1024&&n(25,St=`select
  entity_id as occ8,
  entity_label as occupation,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and category in ('tools', 'technology')
  and subcategory = '${l.tools_tech_concept.value}'
order by concept_rca desc, postings desc
limit 25`),f.$$.dirty[0]&125829120&&(x||!nt?x||(Gt(St,{noResolve:x,...X}),n(26,nt=!0)):Gt(St,{noResolve:x})),f.$$.dirty[0]&1024&&n(28,ut=K`select
  entity_label as agency,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and category in ('tools', 'technology')
  and subcategory = '${l.tools_tech_concept.value}'
order by concept_rca desc, postings desc
limit 25`),f.$$.dirty[0]&1024&&n(29,pt=`select
  entity_label as agency,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and category in ('tools', 'technology')
  and subcategory = '${l.tools_tech_concept.value}'
order by concept_rca desc, postings desc
limit 25`),f.$$.dirty[0]&2013265920&&(ut||!ct?ut||(Ht(pt,{noResolve:ut,...B}),n(30,ct=!0)):Ht(pt,{noResolve:ut})),f.$$.dirty[1]&15&&(gt||!Z?gt||(Kt(yt,{noResolve:gt,...Q}),n(34,Z=!0)):Kt(yt,{noResolve:gt})),f.$$.dirty[0]&1024&&n(36,z=K`select
  entity_type,
  category,
  concept_rank,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category in ('tools', 'technology')
  and entity_id = '${l.tools_tech_entity.value}'
order by category, concept_rca desc, postings desc`),f.$$.dirty[0]&1024&&n(37,bt=`select
  entity_type,
  category,
  concept_rank,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category in ('tools', 'technology')
  and entity_id = '${l.tools_tech_entity.value}'
order by category, concept_rca desc, postings desc`),f.$$.dirty[1]&240&&(z||!Wt?z||(Pt(bt,{noResolve:z,...lt}),n(38,Wt=!0)):Pt(bt,{noResolve:z})),f.$$.dirty[1]&3840&&(V||!at?V||(qt(Ut,{noResolve:V,...Y}),n(42,at=!0)):qt(Ut,{noResolve:V}))},n(12,d=K`select
  entity_label as agency,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and category in ('tools', 'technology')
  and n_postings >= 1000
  and postings >= 100
order by concept_rca desc, postings desc
limit 25`),n(13,H=`select
  entity_label as agency,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and category in ('tools', 'technology')
  and n_postings >= 1000
  and postings >= 100
order by concept_rca desc, postings desc
limit 25`),n(16,rt=K`select
  entity_id as occ8,
  entity_label as occupation,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and category in ('tools', 'technology')
  and postings >= 100
order by concept_rca desc, postings desc
limit 25`),n(17,_t=`select
  entity_id as occ8,
  entity_label as occupation,
  category,
  subcategory as concept,
  value as code,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and category in ('tools', 'technology')
  and postings >= 100
order by concept_rca desc, postings desc
limit 25`),n(20,N=K`select distinct
  category,
  subcategory,
  value,
  concat(upper(substr(category, 1, 1)), substr(category, 2), ': ', subcategory) as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category in ('tools', 'technology')
order by category, subcategory`),n(21,At=`select distinct
  category,
  subcategory,
  value,
  concat(upper(substr(category, 1, 1)), substr(category, 2), ': ', subcategory) as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category in ('tools', 'technology')
order by category, subcategory`),n(32,gt=K`select distinct entity_id, entity_label, entity_type
from usajobs.AGGR_USAJobsEntityConceptProfile
where category in ('tools', 'technology')
order by entity_type, entity_label`),n(33,yt=`select distinct entity_id, entity_label, entity_type
from usajobs.AGGR_USAJobsEntityConceptProfile
where category in ('tools', 'technology')
order by entity_type, entity_label`),n(40,V=K`select
  category,
  subcategory,
  value,
  occupation_hits,
  occupation_coverage,
  postings,
  median_pct_postings,
  blocklisted
from usajobs.AGGR_USAJobsConceptBlocklistDiagnostics
where occupation_coverage >= 0.90
order by occupation_coverage desc, postings desc`),n(41,Ut=`select
  category,
  subcategory,
  value,
  occupation_hits,
  occupation_coverage,
  postings,
  median_pct_postings,
  blocklisted
from usajobs.AGGR_USAJobsConceptBlocklistDiagnostics
where occupation_coverage >= 0.90
order by occupation_coverage desc, postings desc`),[et,ot,Ct,Et,ft,mt,tt,Mt,i,c,l,h,d,H,Vt,O,rt,_t,zt,W,N,At,st,X,x,St,nt,B,ut,pt,ct,Q,gt,yt,Z,lt,z,bt,Wt,Y,V,Ut,at,e]}class Uo extends Ze{constructor(o){super(),to(this,o,wo,vo,xe,{data:8},null,[-1,-1])}}export{Uo as component};
