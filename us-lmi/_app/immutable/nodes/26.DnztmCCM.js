import{s as Ft,d as u,i as _,a as pt,b as y,c as b,h as Bt,e as R,f as bt,g as J,k as m,l as k,m as Et,n as Ot,o as Nt,p as Vt,q as Qt,r as le,j as zt,t as xt,u as Kt}from"../chunks/scheduler.TmfZfN_X.js";import{S as Wt,i as Xt,d as j,t as d,a as p,c as Te,m as w,b as h,e as A,g as Se}from"../chunks/index.CKLTamEB.js";import{D as nt,C as D}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BLmrhC3S.js";import{w as Yt}from"../chunks/entry.D_I0byi6.js";import{e as Zt,s as es,Q as Ge,p as ts,a as Tt,r as St,C as ss}from"../chunks/inferColumnTypes.DQCA4D4f.js";import{h as I}from"../chunks/setTrackProxy.Cyfckp0w.js";import{D as ft}from"../chunks/Dropdown.DR-R82_G.js";import{p as ns}from"../chunks/stores.C11oRilr.js";import{Q as He}from"../chunks/QueryViewer.DATGjO3_.js";import{p as is}from"../chunks/profile.BW8tN6E9.js";function os(l){let n,i=C.title+"",s;return{c(){n=k("h1"),s=Kt(i),this.h()},l(c){n=R(c,"H1",{class:!0});var r=zt(n);s=xt(r,i),r.forEach(u),this.h()},h(){y(n,"class","title")},m(c,r){_(c,n,r),pt(n,s)},p:le,d(c){c&&u(n)}}}function as(l){return{c(){this.h()},l(n){this.h()},h(){document.title="Evidence"},m:le,p:le,d:le}}function cs(l){let n,i,s,c,r;return document.title=n=C.title,{c(){i=m(),s=k("meta"),c=m(),r=k("meta"),this.h()},l(o){i=b(o),s=R(o,"META",{property:!0,content:!0}),c=b(o),r=R(o,"META",{name:!0,content:!0}),this.h()},h(){var o,f;y(s,"property","og:title"),y(s,"content",((o=C.og)==null?void 0:o.title)??C.title),y(r,"name","twitter:title"),y(r,"content",((f=C.og)==null?void 0:f.title)??C.title)},m(o,f){_(o,i,f),_(o,s,f),_(o,c,f),_(o,r,f)},p(o,f){f&0&&n!==(n=C.title)&&(document.title=n)},d(o){o&&(u(i),u(s),u(c),u(r))}}}function rs(l){var r,o;let n,i,s=(C.description||((r=C.og)==null?void 0:r.description))&&ls(),c=((o=C.og)==null?void 0:o.image)&&us();return{c(){s&&s.c(),n=m(),c&&c.c(),i=bt()},l(f){s&&s.l(f),n=b(f),c&&c.l(f),i=bt()},m(f,$){s&&s.m(f,$),_(f,n,$),c&&c.m(f,$),_(f,i,$)},p(f,$){var t,g;(C.description||(t=C.og)!=null&&t.description)&&s.p(f,$),(g=C.og)!=null&&g.image&&c.p(f,$)},d(f){f&&(u(n),u(i)),s&&s.d(f),c&&c.d(f)}}}function ls(l){let n,i,s,c,r;return{c(){n=k("meta"),i=m(),s=k("meta"),c=m(),r=k("meta"),this.h()},l(o){n=R(o,"META",{name:!0,content:!0}),i=b(o),s=R(o,"META",{property:!0,content:!0}),c=b(o),r=R(o,"META",{name:!0,content:!0}),this.h()},h(){var o,f,$;y(n,"name","description"),y(n,"content",C.description??((o=C.og)==null?void 0:o.description)),y(s,"property","og:description"),y(s,"content",((f=C.og)==null?void 0:f.description)??C.description),y(r,"name","twitter:description"),y(r,"content",(($=C.og)==null?void 0:$.description)??C.description)},m(o,f){_(o,n,f),_(o,i,f),_(o,s,f),_(o,c,f),_(o,r,f)},p:le,d(o){o&&(u(n),u(i),u(s),u(c),u(r))}}}function us(l){let n,i,s;return{c(){n=k("meta"),i=m(),s=k("meta"),this.h()},l(c){n=R(c,"META",{property:!0,content:!0}),i=b(c),s=R(c,"META",{name:!0,content:!0}),this.h()},h(){var c,r;y(n,"property","og:image"),y(n,"content",Tt((c=C.og)==null?void 0:c.image)),y(s,"name","twitter:image"),y(s,"content",Tt((r=C.og)==null?void 0:r.image))},m(c,r){_(c,n,r),_(c,i,r),_(c,s,r)},p:le,d(c){c&&(u(n),u(i),u(s))}}}function Gt(l){let n,i;return n=new He({props:{queryID:"usajobs_education_options",queryResult:l[0]}}),{c(){A(n.$$.fragment)},l(s){h(n.$$.fragment,s)},m(s,c){w(n,s,c),i=!0},p(s,c){const r={};c[0]&1&&(r.queryResult=s[0]),n.$set(r)},i(s){i||(p(n.$$.fragment,s),i=!0)},o(s){d(n.$$.fragment,s),i=!1},d(s){j(n,s)}}}function Ht(l){let n,i;return n=new He({props:{queryID:"usajobs_education_occ",queryResult:l[1]}}),{c(){A(n.$$.fragment)},l(s){h(n.$$.fragment,s)},m(s,c){w(n,s,c),i=!0},p(s,c){const r={};c[0]&2&&(r.queryResult=s[1]),n.$set(r)},i(s){i||(p(n.$$.fragment,s),i=!0)},o(s){d(n.$$.fragment,s),i=!1},d(s){j(n,s)}}}function _s(l){let n,i,s,c,r,o,f,$;return n=new D({props:{id:"occupation",title:"Occupation",wrap:"true"}}),s=new D({props:{id:"postings",title:"Postings",fmt:"#,##0"}}),r=new D({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),f=new D({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){A(n.$$.fragment),i=m(),A(s.$$.fragment),c=m(),A(r.$$.fragment),o=m(),A(f.$$.fragment)},l(t){h(n.$$.fragment,t),i=b(t),h(s.$$.fragment,t),c=b(t),h(r.$$.fragment,t),o=b(t),h(f.$$.fragment,t)},m(t,g){w(n,t,g),_(t,i,g),w(s,t,g),_(t,c,g),w(r,t,g),_(t,o,g),w(f,t,g),$=!0},p:le,i(t){$||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(f.$$.fragment,t),$=!0)},o(t){d(n.$$.fragment,t),d(s.$$.fragment,t),d(r.$$.fragment,t),d(f.$$.fragment,t),$=!1},d(t){t&&(u(i),u(c),u(o)),j(n,t),j(s,t),j(r,t),j(f,t)}}}function Pt(l){let n,i;return n=new He({props:{queryID:"usajobs_education_agency",queryResult:l[2]}}),{c(){A(n.$$.fragment)},l(s){h(n.$$.fragment,s)},m(s,c){w(n,s,c),i=!0},p(s,c){const r={};c[0]&4&&(r.queryResult=s[2]),n.$set(r)},i(s){i||(p(n.$$.fragment,s),i=!0)},o(s){d(n.$$.fragment,s),i=!1},d(s){j(n,s)}}}function fs(l){let n,i,s,c,r,o,f,$;return n=new D({props:{id:"agency",title:"Agency",wrap:"true"}}),s=new D({props:{id:"postings",title:"Postings",fmt:"#,##0"}}),r=new D({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),f=new D({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){A(n.$$.fragment),i=m(),A(s.$$.fragment),c=m(),A(r.$$.fragment),o=m(),A(f.$$.fragment)},l(t){h(n.$$.fragment,t),i=b(t),h(s.$$.fragment,t),c=b(t),h(r.$$.fragment,t),o=b(t),h(f.$$.fragment,t)},m(t,g){w(n,t,g),_(t,i,g),w(s,t,g),_(t,c,g),w(r,t,g),_(t,o,g),w(f,t,g),$=!0},p:le,i(t){$||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(f.$$.fragment,t),$=!0)},o(t){d(n.$$.fragment,t),d(s.$$.fragment,t),d(r.$$.fragment,t),d(f.$$.fragment,t),$=!1},d(t){t&&(u(i),u(c),u(o)),j(n,t),j(s,t),j(r,t),j(f,t)}}}function qt(l){let n,i;return n=new He({props:{queryID:"usajobs_benefit_options",queryResult:l[3]}}),{c(){A(n.$$.fragment)},l(s){h(n.$$.fragment,s)},m(s,c){w(n,s,c),i=!0},p(s,c){const r={};c[0]&8&&(r.queryResult=s[3]),n.$set(r)},i(s){i||(p(n.$$.fragment,s),i=!0)},o(s){d(n.$$.fragment,s),i=!1},d(s){j(n,s)}}}function Ut(l){let n,i;return n=new He({props:{queryID:"usajobs_benefit_entities",queryResult:l[4]}}),{c(){A(n.$$.fragment)},l(s){h(n.$$.fragment,s)},m(s,c){w(n,s,c),i=!0},p(s,c){const r={};c[0]&16&&(r.queryResult=s[4]),n.$set(r)},i(s){i||(p(n.$$.fragment,s),i=!0)},o(s){d(n.$$.fragment,s),i=!1},d(s){j(n,s)}}}function ps(l){let n,i,s,c,r,o,f,$;return n=new D({props:{id:"entity_label",title:"Occupation / agency",wrap:"true"}}),s=new D({props:{id:"postings",title:"Postings",fmt:"#,##0"}}),r=new D({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),f=new D({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){A(n.$$.fragment),i=m(),A(s.$$.fragment),c=m(),A(r.$$.fragment),o=m(),A(f.$$.fragment)},l(t){h(n.$$.fragment,t),i=b(t),h(s.$$.fragment,t),c=b(t),h(r.$$.fragment,t),o=b(t),h(f.$$.fragment,t)},m(t,g){w(n,t,g),_(t,i,g),w(s,t,g),_(t,c,g),w(r,t,g),_(t,o,g),w(f,t,g),$=!0},p:le,i(t){$||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(f.$$.fragment,t),$=!0)},o(t){d(n.$$.fragment,t),d(s.$$.fragment,t),d(r.$$.fragment,t),d(f.$$.fragment,t),$=!1},d(t){t&&(u(i),u(c),u(o)),j(n,t),j(s,t),j(r,t),j(f,t)}}}function Mt(l){let n,i;return n=new He({props:{queryID:"usajobs_shift_options",queryResult:l[5]}}),{c(){A(n.$$.fragment)},l(s){h(n.$$.fragment,s)},m(s,c){w(n,s,c),i=!0},p(s,c){const r={};c[0]&32&&(r.queryResult=s[5]),n.$set(r)},i(s){i||(p(n.$$.fragment,s),i=!0)},o(s){d(n.$$.fragment,s),i=!1},d(s){j(n,s)}}}function Dt(l){let n,i;return n=new He({props:{queryID:"usajobs_shift_entities",queryResult:l[6]}}),{c(){A(n.$$.fragment)},l(s){h(n.$$.fragment,s)},m(s,c){w(n,s,c),i=!0},p(s,c){const r={};c[0]&64&&(r.queryResult=s[6]),n.$set(r)},i(s){i||(p(n.$$.fragment,s),i=!0)},o(s){d(n.$$.fragment,s),i=!1},d(s){j(n,s)}}}function bs(l){let n,i,s,c,r,o,f,$;return n=new D({props:{id:"entity_label",title:"Occupation / agency",wrap:"true"}}),s=new D({props:{id:"postings",title:"Postings",fmt:"#,##0"}}),r=new D({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),f=new D({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){A(n.$$.fragment),i=m(),A(s.$$.fragment),c=m(),A(r.$$.fragment),o=m(),A(f.$$.fragment)},l(t){h(n.$$.fragment,t),i=b(t),h(s.$$.fragment,t),c=b(t),h(r.$$.fragment,t),o=b(t),h(f.$$.fragment,t)},m(t,g){w(n,t,g),_(t,i,g),w(s,t,g),_(t,c,g),w(r,t,g),_(t,o,g),w(f,t,g),$=!0},p:le,i(t){$||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(f.$$.fragment,t),$=!0)},o(t){d(n.$$.fragment,t),d(s.$$.fragment,t),d(r.$$.fragment,t),d(f.$$.fragment,t),$=!1},d(t){t&&(u(i),u(c),u(o)),j(n,t),j(s,t),j(r,t),j(f,t)}}}function Jt(l){let n,i;return n=new He({props:{queryID:"usajobs_screening_options",queryResult:l[7]}}),{c(){A(n.$$.fragment)},l(s){h(n.$$.fragment,s)},m(s,c){w(n,s,c),i=!0},p(s,c){const r={};c[0]&128&&(r.queryResult=s[7]),n.$set(r)},i(s){i||(p(n.$$.fragment,s),i=!0)},o(s){d(n.$$.fragment,s),i=!1},d(s){j(n,s)}}}function It(l){let n,i;return n=new He({props:{queryID:"usajobs_screening_entities",queryResult:l[8]}}),{c(){A(n.$$.fragment)},l(s){h(n.$$.fragment,s)},m(s,c){w(n,s,c),i=!0},p(s,c){const r={};c[0]&256&&(r.queryResult=s[8]),n.$set(r)},i(s){i||(p(n.$$.fragment,s),i=!0)},o(s){d(n.$$.fragment,s),i=!1},d(s){j(n,s)}}}function ms(l){let n,i,s,c,r,o,f,$;return n=new D({props:{id:"entity_label",title:"Occupation / agency",wrap:"true"}}),s=new D({props:{id:"postings",title:"Postings",fmt:"#,##0"}}),r=new D({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),f=new D({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){A(n.$$.fragment),i=m(),A(s.$$.fragment),c=m(),A(r.$$.fragment),o=m(),A(f.$$.fragment)},l(t){h(n.$$.fragment,t),i=b(t),h(s.$$.fragment,t),c=b(t),h(r.$$.fragment,t),o=b(t),h(f.$$.fragment,t)},m(t,g){w(n,t,g),_(t,i,g),w(s,t,g),_(t,c,g),w(r,t,g),_(t,o,g),w(f,t,g),$=!0},p:le,i(t){$||(p(n.$$.fragment,t),p(s.$$.fragment,t),p(r.$$.fragment,t),p(f.$$.fragment,t),$=!0)},o(t){d(n.$$.fragment,t),d(s.$$.fragment,t),d(r.$$.fragment,t),d(f.$$.fragment,t),$=!1},d(t){t&&(u(i),u(c),u(o)),j(n,t),j(s,t),j(r,t),j(f,t)}}}function ds(l){let n,i,s,c,r,o,f="This page profiles non-AI, non-DEI ConceptSearch categories in USAJOBS postings. These concept lists are developed by the research team. Tools and technology have a separate page because they are sourced from O*NET and UNSPSC code lists; DEI has a separate page because its terms have a distinct source and policy interpretation.",$,t,g="<strong>How to read this page.</strong> ConceptSearch rows are descriptive term or code-list matches in federal postings. They should not be read as verified requirements, benefits, legal classifications, or employer intent without inspecting the underlying text.",K,z,ue="<strong>Shared terms.</strong> % posts = selected concept postings / all postings for the occupation or agency. RCA = selected entity concept share / USAJOBS concept share.",_e,te,Xe='<a href="#education" class="hover:underline">Education</a> <a href="#benefits" class="hover:underline">Benefits</a> <a href="#shift-and-schedule" class="hover:underline">Shift and schedule</a> <a href="#drug-background-criminal" class="hover:underline">Drug/background/criminal</a> <a href="#source-notes" class="hover:underline">Source notes</a>',Pe,L,fe='<a href="#education">Education</a>',pe,be,se,qe,F,me='<a href="#occupations">Occupations</a>',de,ye,Z,Ye='<a href="#table-uc-1-education-concepts-by-occupation">Table UC-1. Education Concepts by Occupation</a>',ne,x,ge,ee,Ze='<a href="#agencies">Agencies</a>',Ue,W,B,Me='<a href="#table-uc-2-education-concepts-by-agency">Table UC-2. Education Concepts by Agency</a>',De,ie,Je,O,$e='<a href="#benefits">Benefits</a>',ve,je,oe,Ie,X,N,Le='<a href="#table-uc-3-benefit-concepts-by-agency-and-occupation">Table UC-3. Benefit Concepts by Agency and Occupation</a>',Fe,ae,Be,V,we='<a href="#shift-and-schedule">Shift And Schedule</a>',he,Ae,ce,Oe,Y,Q,Ne='<a href="#table-uc-4-shift-concepts-by-agency-and-occupation">Table UC-4. Shift Concepts by Agency and Occupation</a>',Ve,re,Qe,v,it='<a href="#drug-background-criminal">Drug, Background, Criminal</a>',ot,et,ze,at,tt,Ce,vt='<a href="#table-uc-5-screening-concepts-by-agency-and-occupation">Table UC-5. Screening Concepts by Agency and Occupation</a>',ct,xe,rt,Re,jt='<a href="#source-notes">Source Notes</a>',lt,Ke,wt='Education, benefits, shift/schedule, and drug/background/criminal concept lists are developed by the research team. The page uses <code class="markdown">usajobs.AGGR_USAJobsEntityConceptProfile</code>; dashboard display rows are limited to each entity&#39;s top concept rows by category.',ut,We,ht='Evidence path: concept interpretation limits are summarized in <a href="/us-lmi/methodology/postings-and-taxonomies" class="markdown">What Postings And Taxonomies Can And Cannot Say</a>, with release checks in <a href="/us-lmi/methodology/audit-trail" class="markdown">Agreement And Audit Trail</a>.',_t,ke=typeof C<"u"&&C.title&&C.hide_title!==!0&&os();function Lt(e,a){return typeof C<"u"&&C.title?cs:as}let st=Lt()(l),Ee=typeof C=="object"&&rs(),E=l[0]&&Gt(l);se=new ft({props:{data:l[0],name:"education_concept",value:"concept_value",label:"concept_label",defaultValue:"Bachelors",title:"Education concept"}});let T=l[1]&&Ht(l);x=new nt({props:{data:l[1],rowsPerPage:"25",$$slots:{default:[_s]},$$scope:{ctx:l}}});let S=l[2]&&Pt(l);ie=new nt({props:{data:l[2],rowsPerPage:"25",$$slots:{default:[fs]},$$scope:{ctx:l}}});let G=l[3]&&qt(l);oe=new ft({props:{data:l[3],name:"benefit_concept",value:"concept_value",label:"concept_label",defaultValue:"Training",title:"Benefit concept"}});let H=l[4]&&Ut(l);ae=new nt({props:{data:l[4],groupBy:"entity_type",rowsPerPage:"50",$$slots:{default:[ps]},$$scope:{ctx:l}}});let P=l[5]&&Mt(l);ce=new ft({props:{data:l[5],name:"shift_concept",value:"concept_value",label:"concept_label",defaultValue:"Specific Shift",title:"Shift or schedule concept"}});let q=l[6]&&Dt(l);re=new nt({props:{data:l[6],groupBy:"entity_type",rowsPerPage:"50",$$slots:{default:[bs]},$$scope:{ctx:l}}});let U=l[7]&&Jt(l);ze=new ft({props:{data:l[7],name:"screening_concept",value:"concept_value",label:"concept_label",defaultValue:"drugtest",title:"Screening concept"}});let M=l[8]&&It(l);return xe=new nt({props:{data:l[8],groupBy:"entity_type",rowsPerPage:"50",$$slots:{default:[ms]},$$scope:{ctx:l}}}),{c(){ke&&ke.c(),n=m(),st.c(),i=k("meta"),s=k("meta"),Ee&&Ee.c(),c=bt(),r=m(),o=k("p"),o.textContent=f,$=m(),t=k("div"),t.innerHTML=g,K=m(),z=k("div"),z.innerHTML=ue,_e=m(),te=k("div"),te.innerHTML=Xe,Pe=m(),L=k("h2"),L.innerHTML=fe,pe=m(),E&&E.c(),be=m(),A(se.$$.fragment),qe=m(),F=k("h3"),F.innerHTML=me,de=m(),T&&T.c(),ye=m(),Z=k("h3"),Z.innerHTML=Ye,ne=m(),A(x.$$.fragment),ge=m(),ee=k("h3"),ee.innerHTML=Ze,Ue=m(),S&&S.c(),W=m(),B=k("h3"),B.innerHTML=Me,De=m(),A(ie.$$.fragment),Je=m(),O=k("h2"),O.innerHTML=$e,ve=m(),G&&G.c(),je=m(),A(oe.$$.fragment),Ie=m(),H&&H.c(),X=m(),N=k("h3"),N.innerHTML=Le,Fe=m(),A(ae.$$.fragment),Be=m(),V=k("h2"),V.innerHTML=we,he=m(),P&&P.c(),Ae=m(),A(ce.$$.fragment),Oe=m(),q&&q.c(),Y=m(),Q=k("h3"),Q.innerHTML=Ne,Ve=m(),A(re.$$.fragment),Qe=m(),v=k("h2"),v.innerHTML=it,ot=m(),U&&U.c(),et=m(),A(ze.$$.fragment),at=m(),M&&M.c(),tt=m(),Ce=k("h3"),Ce.innerHTML=vt,ct=m(),A(xe.$$.fragment),rt=m(),Re=k("h2"),Re.innerHTML=jt,lt=m(),Ke=k("p"),Ke.innerHTML=wt,ut=m(),We=k("p"),We.innerHTML=ht,this.h()},l(e){ke&&ke.l(e),n=b(e);const a=Bt("svelte-2igo1p",document.head);st.l(a),i=R(a,"META",{name:!0,content:!0}),s=R(a,"META",{name:!0,content:!0}),Ee&&Ee.l(a),c=bt(),a.forEach(u),r=b(e),o=R(e,"P",{class:!0,"data-svelte-h":!0}),J(o)!=="svelte-1g2ipc7"&&(o.textContent=f),$=b(e),t=R(e,"DIV",{class:!0,"data-svelte-h":!0}),J(t)!=="svelte-1cgqc6n"&&(t.innerHTML=g),K=b(e),z=R(e,"DIV",{class:!0,"data-svelte-h":!0}),J(z)!=="svelte-1pab1ig"&&(z.innerHTML=ue),_e=b(e),te=R(e,"DIV",{class:!0,"data-svelte-h":!0}),J(te)!=="svelte-qqzui9"&&(te.innerHTML=Xe),Pe=b(e),L=R(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),J(L)!=="svelte-25sv0q"&&(L.innerHTML=fe),pe=b(e),E&&E.l(e),be=b(e),h(se.$$.fragment,e),qe=b(e),F=R(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(F)!=="svelte-nw0w3e"&&(F.innerHTML=me),de=b(e),T&&T.l(e),ye=b(e),Z=R(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(Z)!=="svelte-1aa67vx"&&(Z.innerHTML=Ye),ne=b(e),h(x.$$.fragment,e),ge=b(e),ee=R(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(ee)!=="svelte-2s6g3x"&&(ee.innerHTML=Ze),Ue=b(e),S&&S.l(e),W=b(e),B=R(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(B)!=="svelte-1bfra8q"&&(B.innerHTML=Me),De=b(e),h(ie.$$.fragment,e),Je=b(e),O=R(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),J(O)!=="svelte-dfu8xo"&&(O.innerHTML=$e),ve=b(e),G&&G.l(e),je=b(e),h(oe.$$.fragment,e),Ie=b(e),H&&H.l(e),X=b(e),N=R(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(N)!=="svelte-1yh4zse"&&(N.innerHTML=Le),Fe=b(e),h(ae.$$.fragment,e),Be=b(e),V=R(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),J(V)!=="svelte-wcoow2"&&(V.innerHTML=we),he=b(e),P&&P.l(e),Ae=b(e),h(ce.$$.fragment,e),Oe=b(e),q&&q.l(e),Y=b(e),Q=R(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(Q)!=="svelte-ylkp0e"&&(Q.innerHTML=Ne),Ve=b(e),h(re.$$.fragment,e),Qe=b(e),v=R(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),J(v)!=="svelte-19uh0b5"&&(v.innerHTML=it),ot=b(e),U&&U.l(e),et=b(e),h(ze.$$.fragment,e),at=b(e),M&&M.l(e),tt=b(e),Ce=R(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),J(Ce)!=="svelte-19oxuyn"&&(Ce.innerHTML=vt),ct=b(e),h(xe.$$.fragment,e),rt=b(e),Re=R(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),J(Re)!=="svelte-5tqyr0"&&(Re.innerHTML=jt),lt=b(e),Ke=R(e,"P",{class:!0,"data-svelte-h":!0}),J(Ke)!=="svelte-1qiagfa"&&(Ke.innerHTML=wt),ut=b(e),We=R(e,"P",{class:!0,"data-svelte-h":!0}),J(We)!=="svelte-9h726o"&&(We.innerHTML=ht),this.h()},h(){y(i,"name","twitter:card"),y(i,"content","summary_large_image"),y(s,"name","twitter:site"),y(s,"content","@evidence_dev"),y(o,"class","markdown"),y(t,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),y(z,"class","text-sm my-3"),y(te,"class","flex flex-wrap gap-x-4 gap-y-2 text-sm border-y border-gray-200 py-3 mb-6"),y(L,"class","markdown"),y(L,"id","education"),y(F,"class","markdown"),y(F,"id","occupations"),y(Z,"class","markdown"),y(Z,"id","table-uc-1-education-concepts-by-occupation"),y(ee,"class","markdown"),y(ee,"id","agencies"),y(B,"class","markdown"),y(B,"id","table-uc-2-education-concepts-by-agency"),y(O,"class","markdown"),y(O,"id","benefits"),y(N,"class","markdown"),y(N,"id","table-uc-3-benefit-concepts-by-agency-and-occupation"),y(V,"class","markdown"),y(V,"id","shift-and-schedule"),y(Q,"class","markdown"),y(Q,"id","table-uc-4-shift-concepts-by-agency-and-occupation"),y(v,"class","markdown"),y(v,"id","drug-background-criminal"),y(Ce,"class","markdown"),y(Ce,"id","table-uc-5-screening-concepts-by-agency-and-occupation"),y(Re,"class","markdown"),y(Re,"id","source-notes"),y(Ke,"class","markdown"),y(We,"class","markdown")},m(e,a){ke&&ke.m(e,a),_(e,n,a),st.m(document.head,null),pt(document.head,i),pt(document.head,s),Ee&&Ee.m(document.head,null),pt(document.head,c),_(e,r,a),_(e,o,a),_(e,$,a),_(e,t,a),_(e,K,a),_(e,z,a),_(e,_e,a),_(e,te,a),_(e,Pe,a),_(e,L,a),_(e,pe,a),E&&E.m(e,a),_(e,be,a),w(se,e,a),_(e,qe,a),_(e,F,a),_(e,de,a),T&&T.m(e,a),_(e,ye,a),_(e,Z,a),_(e,ne,a),w(x,e,a),_(e,ge,a),_(e,ee,a),_(e,Ue,a),S&&S.m(e,a),_(e,W,a),_(e,B,a),_(e,De,a),w(ie,e,a),_(e,Je,a),_(e,O,a),_(e,ve,a),G&&G.m(e,a),_(e,je,a),w(oe,e,a),_(e,Ie,a),H&&H.m(e,a),_(e,X,a),_(e,N,a),_(e,Fe,a),w(ae,e,a),_(e,Be,a),_(e,V,a),_(e,he,a),P&&P.m(e,a),_(e,Ae,a),w(ce,e,a),_(e,Oe,a),q&&q.m(e,a),_(e,Y,a),_(e,Q,a),_(e,Ve,a),w(re,e,a),_(e,Qe,a),_(e,v,a),_(e,ot,a),U&&U.m(e,a),_(e,et,a),w(ze,e,a),_(e,at,a),M&&M.m(e,a),_(e,tt,a),_(e,Ce,a),_(e,ct,a),w(xe,e,a),_(e,rt,a),_(e,Re,a),_(e,lt,a),_(e,Ke,a),_(e,ut,a),_(e,We,a),_t=!0},p(e,a){typeof C<"u"&&C.title&&C.hide_title!==!0&&ke.p(e,a),st.p(e,a),typeof C=="object"&&Ee.p(e,a),e[0]?E?(E.p(e,a),a[0]&1&&p(E,1)):(E=Gt(e),E.c(),p(E,1),E.m(be.parentNode,be)):E&&(Se(),d(E,1,1,()=>{E=null}),Te());const At={};a[0]&1&&(At.data=e[0]),se.$set(At),e[1]?T?(T.p(e,a),a[0]&2&&p(T,1)):(T=Ht(e),T.c(),p(T,1),T.m(ye.parentNode,ye)):T&&(Se(),d(T,1,1,()=>{T=null}),Te());const mt={};a[0]&2&&(mt.data=e[1]),a[2]&16&&(mt.$$scope={dirty:a,ctx:e}),x.$set(mt),e[2]?S?(S.p(e,a),a[0]&4&&p(S,1)):(S=Pt(e),S.c(),p(S,1),S.m(W.parentNode,W)):S&&(Se(),d(S,1,1,()=>{S=null}),Te());const dt={};a[0]&4&&(dt.data=e[2]),a[2]&16&&(dt.$$scope={dirty:a,ctx:e}),ie.$set(dt),e[3]?G?(G.p(e,a),a[0]&8&&p(G,1)):(G=qt(e),G.c(),p(G,1),G.m(je.parentNode,je)):G&&(Se(),d(G,1,1,()=>{G=null}),Te());const Ct={};a[0]&8&&(Ct.data=e[3]),oe.$set(Ct),e[4]?H?(H.p(e,a),a[0]&16&&p(H,1)):(H=Ut(e),H.c(),p(H,1),H.m(X.parentNode,X)):H&&(Se(),d(H,1,1,()=>{H=null}),Te());const yt={};a[0]&16&&(yt.data=e[4]),a[2]&16&&(yt.$$scope={dirty:a,ctx:e}),ae.$set(yt),e[5]?P?(P.p(e,a),a[0]&32&&p(P,1)):(P=Mt(e),P.c(),p(P,1),P.m(Ae.parentNode,Ae)):P&&(Se(),d(P,1,1,()=>{P=null}),Te());const Rt={};a[0]&32&&(Rt.data=e[5]),ce.$set(Rt),e[6]?q?(q.p(e,a),a[0]&64&&p(q,1)):(q=Dt(e),q.c(),p(q,1),q.m(Y.parentNode,Y)):q&&(Se(),d(q,1,1,()=>{q=null}),Te());const gt={};a[0]&64&&(gt.data=e[6]),a[2]&16&&(gt.$$scope={dirty:a,ctx:e}),re.$set(gt),e[7]?U?(U.p(e,a),a[0]&128&&p(U,1)):(U=Jt(e),U.c(),p(U,1),U.m(et.parentNode,et)):U&&(Se(),d(U,1,1,()=>{U=null}),Te());const kt={};a[0]&128&&(kt.data=e[7]),ze.$set(kt),e[8]?M?(M.p(e,a),a[0]&256&&p(M,1)):(M=It(e),M.c(),p(M,1),M.m(tt.parentNode,tt)):M&&(Se(),d(M,1,1,()=>{M=null}),Te());const $t={};a[0]&256&&($t.data=e[8]),a[2]&16&&($t.$$scope={dirty:a,ctx:e}),xe.$set($t)},i(e){_t||(p(E),p(se.$$.fragment,e),p(T),p(x.$$.fragment,e),p(S),p(ie.$$.fragment,e),p(G),p(oe.$$.fragment,e),p(H),p(ae.$$.fragment,e),p(P),p(ce.$$.fragment,e),p(q),p(re.$$.fragment,e),p(U),p(ze.$$.fragment,e),p(M),p(xe.$$.fragment,e),_t=!0)},o(e){d(E),d(se.$$.fragment,e),d(T),d(x.$$.fragment,e),d(S),d(ie.$$.fragment,e),d(G),d(oe.$$.fragment,e),d(H),d(ae.$$.fragment,e),d(P),d(ce.$$.fragment,e),d(q),d(re.$$.fragment,e),d(U),d(ze.$$.fragment,e),d(M),d(xe.$$.fragment,e),_t=!1},d(e){e&&(u(n),u(r),u(o),u($),u(t),u(K),u(z),u(_e),u(te),u(Pe),u(L),u(pe),u(be),u(qe),u(F),u(de),u(ye),u(Z),u(ne),u(ge),u(ee),u(Ue),u(W),u(B),u(De),u(Je),u(O),u(ve),u(je),u(Ie),u(X),u(N),u(Fe),u(Be),u(V),u(he),u(Ae),u(Oe),u(Y),u(Q),u(Ve),u(Qe),u(v),u(ot),u(et),u(at),u(tt),u(Ce),u(ct),u(rt),u(Re),u(lt),u(Ke),u(ut),u(We)),ke&&ke.d(e),st.d(e),u(i),u(s),Ee&&Ee.d(e),u(c),E&&E.d(e),j(se,e),T&&T.d(e),j(x,e),S&&S.d(e),j(ie,e),G&&G.d(e),j(oe,e),H&&H.d(e),j(ae,e),P&&P.d(e),j(ce,e),q&&q.d(e),j(re,e),U&&U.d(e),j(ze,e),M&&M.d(e),j(xe,e)}}}const C={title:"Concept Profiler"};function ys(l,n,i){let s,c;Et(l,ns,v=>i(48,s=v)),Et(l,St,v=>i(53,c=v));let{data:r}=n,{data:o={},customFormattingSettings:f,__db:$,inputs:t}=r;Ot(St,c="99b189a24f8ebe01d950b1c94d6fa568",c);let g=Zt(Yt(t));Nt(g.subscribe(v=>i(11,t=v))),Vt(ss,{getCustomFormats:()=>f.customFormats||[]});const K=(v,it)=>is($.query,v,{query_name:it});es(K),s.params,Qt(()=>!0);let z={initialData:void 0,initialError:void 0},ue=I`select distinct value as concept_value, value as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'education'
order by case value
  when 'Bachelors' then 1
  when 'Doctorate' then 2
  when 'Masters' then 3
  when 'Associates' then 4
  else 9
end, value`,_e=`select distinct value as concept_value, value as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'education'
order by case value
  when 'Bachelors' then 1
  when 'Doctorate' then 2
  when 'Masters' then 3
  when 'Associates' then 4
  else 9
end, value`;o.usajobs_education_options_data&&(o.usajobs_education_options_data instanceof Error?z.initialError=o.usajobs_education_options_data:z.initialData=o.usajobs_education_options_data,o.usajobs_education_options_columns&&(z.knownColumns=o.usajobs_education_options_columns));let te,Xe=!1;const Pe=Ge.createReactive({callback:v=>{i(0,te=v)},execFn:K},{id:"usajobs_education_options",...z});Pe(_e,{noResolve:ue,...z}),globalThis[Symbol.for("usajobs_education_options")]={get value(){return te}};let L={initialData:void 0,initialError:void 0},fe=I`select
  entity_id as occ8,
  entity_label as occupation,
  subcategory,
  value as education,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and category = 'education'
  and value = '${t.education_concept.value}'
order by pct_postings desc, concept_rca desc, postings desc
limit 25`,pe=`select
  entity_id as occ8,
  entity_label as occupation,
  subcategory,
  value as education,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and category = 'education'
  and value = '${t.education_concept.value}'
order by pct_postings desc, concept_rca desc, postings desc
limit 25`;o.usajobs_education_occ_data&&(o.usajobs_education_occ_data instanceof Error?L.initialError=o.usajobs_education_occ_data:L.initialData=o.usajobs_education_occ_data,o.usajobs_education_occ_columns&&(L.knownColumns=o.usajobs_education_occ_columns));let be,se=!1;const qe=Ge.createReactive({callback:v=>{i(1,be=v)},execFn:K},{id:"usajobs_education_occ",...L});qe(pe,{noResolve:fe,...L}),globalThis[Symbol.for("usajobs_education_occ")]={get value(){return be}};let F={initialData:void 0,initialError:void 0},me=I`select
  entity_label as agency,
  subcategory,
  value as education,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and category = 'education'
  and value = '${t.education_concept.value}'
order by pct_postings desc, concept_rca desc, postings desc
limit 25`,de=`select
  entity_label as agency,
  subcategory,
  value as education,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and category = 'education'
  and value = '${t.education_concept.value}'
order by pct_postings desc, concept_rca desc, postings desc
limit 25`;o.usajobs_education_agency_data&&(o.usajobs_education_agency_data instanceof Error?F.initialError=o.usajobs_education_agency_data:F.initialData=o.usajobs_education_agency_data,o.usajobs_education_agency_columns&&(F.knownColumns=o.usajobs_education_agency_columns));let ye,Z=!1;const Ye=Ge.createReactive({callback:v=>{i(2,ye=v)},execFn:K},{id:"usajobs_education_agency",...F});Ye(de,{noResolve:me,...F}),globalThis[Symbol.for("usajobs_education_agency")]={get value(){return ye}};let ne={initialData:void 0,initialError:void 0},x=I`select distinct value as concept_value, concat(subcategory, ': ', value) as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'benefits'
order by concept_label`,ge=`select distinct value as concept_value, concat(subcategory, ': ', value) as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'benefits'
order by concept_label`;o.usajobs_benefit_options_data&&(o.usajobs_benefit_options_data instanceof Error?ne.initialError=o.usajobs_benefit_options_data:ne.initialData=o.usajobs_benefit_options_data,o.usajobs_benefit_options_columns&&(ne.knownColumns=o.usajobs_benefit_options_columns));let ee,Ze=!1;const Ue=Ge.createReactive({callback:v=>{i(3,ee=v)},execFn:K},{id:"usajobs_benefit_options",...ne});Ue(ge,{noResolve:x,...ne}),globalThis[Symbol.for("usajobs_benefit_options")]={get value(){return ee}};let W={initialData:void 0,initialError:void 0},B=I`select
  entity_type,
  entity_label,
  subcategory,
  value as benefit,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'benefits'
  and value = '${t.benefit_concept.value}'
order by entity_type, pct_postings desc, concept_rca desc, postings desc
limit 50`,Me=`select
  entity_type,
  entity_label,
  subcategory,
  value as benefit,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'benefits'
  and value = '${t.benefit_concept.value}'
order by entity_type, pct_postings desc, concept_rca desc, postings desc
limit 50`;o.usajobs_benefit_entities_data&&(o.usajobs_benefit_entities_data instanceof Error?W.initialError=o.usajobs_benefit_entities_data:W.initialData=o.usajobs_benefit_entities_data,o.usajobs_benefit_entities_columns&&(W.knownColumns=o.usajobs_benefit_entities_columns));let De,ie=!1;const Je=Ge.createReactive({callback:v=>{i(4,De=v)},execFn:K},{id:"usajobs_benefit_entities",...W});Je(Me,{noResolve:B,...W}),globalThis[Symbol.for("usajobs_benefit_entities")]={get value(){return De}};let O={initialData:void 0,initialError:void 0},$e=I`select distinct value as concept_value, coalesce(subcategory || ': ', '') || value as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'shift'
order by concept_label`,ve=`select distinct value as concept_value, coalesce(subcategory || ': ', '') || value as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'shift'
order by concept_label`;o.usajobs_shift_options_data&&(o.usajobs_shift_options_data instanceof Error?O.initialError=o.usajobs_shift_options_data:O.initialData=o.usajobs_shift_options_data,o.usajobs_shift_options_columns&&(O.knownColumns=o.usajobs_shift_options_columns));let je,oe=!1;const Ie=Ge.createReactive({callback:v=>{i(5,je=v)},execFn:K},{id:"usajobs_shift_options",...O});Ie(ve,{noResolve:$e,...O}),globalThis[Symbol.for("usajobs_shift_options")]={get value(){return je}};let X={initialData:void 0,initialError:void 0},N=I`select
  entity_type,
  entity_label,
  subcategory,
  value as shift_concept,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'shift'
  and value = '${t.shift_concept.value}'
order by entity_type, concept_rca desc, pct_postings desc, postings desc
limit 50`,Le=`select
  entity_type,
  entity_label,
  subcategory,
  value as shift_concept,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'shift'
  and value = '${t.shift_concept.value}'
order by entity_type, concept_rca desc, pct_postings desc, postings desc
limit 50`;o.usajobs_shift_entities_data&&(o.usajobs_shift_entities_data instanceof Error?X.initialError=o.usajobs_shift_entities_data:X.initialData=o.usajobs_shift_entities_data,o.usajobs_shift_entities_columns&&(X.knownColumns=o.usajobs_shift_entities_columns));let Fe,ae=!1;const Be=Ge.createReactive({callback:v=>{i(6,Fe=v)},execFn:K},{id:"usajobs_shift_entities",...X});Be(Le,{noResolve:N,...X}),globalThis[Symbol.for("usajobs_shift_entities")]={get value(){return Fe}};let V={initialData:void 0,initialError:void 0},we=I`select distinct value as concept_value, concat(subcategory, ': ', value) as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'drug_background_criminal'
order by concept_label`,he=`select distinct value as concept_value, concat(subcategory, ': ', value) as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'drug_background_criminal'
order by concept_label`;o.usajobs_screening_options_data&&(o.usajobs_screening_options_data instanceof Error?V.initialError=o.usajobs_screening_options_data:V.initialData=o.usajobs_screening_options_data,o.usajobs_screening_options_columns&&(V.knownColumns=o.usajobs_screening_options_columns));let Ae,ce=!1;const Oe=Ge.createReactive({callback:v=>{i(7,Ae=v)},execFn:K},{id:"usajobs_screening_options",...V});Oe(he,{noResolve:we,...V}),globalThis[Symbol.for("usajobs_screening_options")]={get value(){return Ae}};let Y={initialData:void 0,initialError:void 0},Q=I`select
  entity_type,
  entity_label,
  subcategory,
  value as screening_concept,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'drug_background_criminal'
  and value = '${t.screening_concept.value}'
order by entity_type, concept_rca desc, pct_postings desc, postings desc
limit 50`,Ne=`select
  entity_type,
  entity_label,
  subcategory,
  value as screening_concept,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'drug_background_criminal'
  and value = '${t.screening_concept.value}'
order by entity_type, concept_rca desc, pct_postings desc, postings desc
limit 50`;o.usajobs_screening_entities_data&&(o.usajobs_screening_entities_data instanceof Error?Y.initialError=o.usajobs_screening_entities_data:Y.initialData=o.usajobs_screening_entities_data,o.usajobs_screening_entities_columns&&(Y.knownColumns=o.usajobs_screening_entities_columns));let Ve,re=!1;const Qe=Ge.createReactive({callback:v=>{i(8,Ve=v)},execFn:K},{id:"usajobs_screening_entities",...Y});return Qe(Ne,{noResolve:Q,...Y}),globalThis[Symbol.for("usajobs_screening_entities")]={get value(){return Ve}},l.$$set=v=>{"data"in v&&i(9,r=v.data)},l.$$.update=()=>{l.$$.dirty[0]&512&&i(10,{data:o={},customFormattingSettings:f,__db:$}=r,o),l.$$.dirty[0]&1024&&ts.set(Object.keys(o).length>0),l.$$.dirty[1]&131072&&s.params,l.$$.dirty[0]&61440&&(ue||!Xe?ue||(Pe(_e,{noResolve:ue,...z}),i(15,Xe=!0)):Pe(_e,{noResolve:ue})),l.$$.dirty[0]&2048&&i(17,fe=I`select
  entity_id as occ8,
  entity_label as occupation,
  subcategory,
  value as education,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and category = 'education'
  and value = '${t.education_concept.value}'
order by pct_postings desc, concept_rca desc, postings desc
limit 25`),l.$$.dirty[0]&2048&&i(18,pe=`select
  entity_id as occ8,
  entity_label as occupation,
  subcategory,
  value as education,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and category = 'education'
  and value = '${t.education_concept.value}'
order by pct_postings desc, concept_rca desc, postings desc
limit 25`),l.$$.dirty[0]&983040&&(fe||!se?fe||(qe(pe,{noResolve:fe,...L}),i(19,se=!0)):qe(pe,{noResolve:fe})),l.$$.dirty[0]&2048&&i(21,me=I`select
  entity_label as agency,
  subcategory,
  value as education,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and category = 'education'
  and value = '${t.education_concept.value}'
order by pct_postings desc, concept_rca desc, postings desc
limit 25`),l.$$.dirty[0]&2048&&i(22,de=`select
  entity_label as agency,
  subcategory,
  value as education,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and category = 'education'
  and value = '${t.education_concept.value}'
order by pct_postings desc, concept_rca desc, postings desc
limit 25`),l.$$.dirty[0]&15728640&&(me||!Z?me||(Ye(de,{noResolve:me,...F}),i(23,Z=!0)):Ye(de,{noResolve:me})),l.$$.dirty[0]&251658240&&(x||!Ze?x||(Ue(ge,{noResolve:x,...ne}),i(27,Ze=!0)):Ue(ge,{noResolve:x})),l.$$.dirty[0]&2048&&i(29,B=I`select
  entity_type,
  entity_label,
  subcategory,
  value as benefit,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'benefits'
  and value = '${t.benefit_concept.value}'
order by entity_type, pct_postings desc, concept_rca desc, postings desc
limit 50`),l.$$.dirty[0]&2048&&i(30,Me=`select
  entity_type,
  entity_label,
  subcategory,
  value as benefit,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'benefits'
  and value = '${t.benefit_concept.value}'
order by entity_type, pct_postings desc, concept_rca desc, postings desc
limit 50`),l.$$.dirty[0]&1879048192|l.$$.dirty[1]&1&&(B||!ie?B||(Je(Me,{noResolve:B,...W}),i(31,ie=!0)):Je(Me,{noResolve:B})),l.$$.dirty[1]&30&&($e||!oe?$e||(Ie(ve,{noResolve:$e,...O}),i(35,oe=!0)):Ie(ve,{noResolve:$e})),l.$$.dirty[0]&2048&&i(37,N=I`select
  entity_type,
  entity_label,
  subcategory,
  value as shift_concept,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'shift'
  and value = '${t.shift_concept.value}'
order by entity_type, concept_rca desc, pct_postings desc, postings desc
limit 50`),l.$$.dirty[0]&2048&&i(38,Le=`select
  entity_type,
  entity_label,
  subcategory,
  value as shift_concept,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'shift'
  and value = '${t.shift_concept.value}'
order by entity_type, concept_rca desc, pct_postings desc, postings desc
limit 50`),l.$$.dirty[1]&480&&(N||!ae?N||(Be(Le,{noResolve:N,...X}),i(39,ae=!0)):Be(Le,{noResolve:N})),l.$$.dirty[1]&7680&&(we||!ce?we||(Oe(he,{noResolve:we,...V}),i(43,ce=!0)):Oe(he,{noResolve:we})),l.$$.dirty[0]&2048&&i(45,Q=I`select
  entity_type,
  entity_label,
  subcategory,
  value as screening_concept,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'drug_background_criminal'
  and value = '${t.screening_concept.value}'
order by entity_type, concept_rca desc, pct_postings desc, postings desc
limit 50`),l.$$.dirty[0]&2048&&i(46,Ne=`select
  entity_type,
  entity_label,
  subcategory,
  value as screening_concept,
  postings,
  pct_postings,
  concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'drug_background_criminal'
  and value = '${t.screening_concept.value}'
order by entity_type, concept_rca desc, pct_postings desc, postings desc
limit 50`),l.$$.dirty[1]&122880&&(Q||!re?Q||(Qe(Ne,{noResolve:Q,...Y}),i(47,re=!0)):Qe(Ne,{noResolve:Q}))},i(13,ue=I`select distinct value as concept_value, value as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'education'
order by case value
  when 'Bachelors' then 1
  when 'Doctorate' then 2
  when 'Masters' then 3
  when 'Associates' then 4
  else 9
end, value`),i(14,_e=`select distinct value as concept_value, value as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'education'
order by case value
  when 'Bachelors' then 1
  when 'Doctorate' then 2
  when 'Masters' then 3
  when 'Associates' then 4
  else 9
end, value`),i(25,x=I`select distinct value as concept_value, concat(subcategory, ': ', value) as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'benefits'
order by concept_label`),i(26,ge=`select distinct value as concept_value, concat(subcategory, ': ', value) as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'benefits'
order by concept_label`),i(33,$e=I`select distinct value as concept_value, coalesce(subcategory || ': ', '') || value as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'shift'
order by concept_label`),i(34,ve=`select distinct value as concept_value, coalesce(subcategory || ': ', '') || value as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'shift'
order by concept_label`),i(41,we=I`select distinct value as concept_value, concat(subcategory, ': ', value) as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'drug_background_criminal'
order by concept_label`),i(42,he=`select distinct value as concept_value, concat(subcategory, ': ', value) as concept_label
from usajobs.AGGR_USAJobsEntityConceptProfile
where category = 'drug_background_criminal'
order by concept_label`),[te,be,ye,ee,De,je,Fe,Ae,Ve,r,o,t,z,ue,_e,Xe,L,fe,pe,se,F,me,de,Z,ne,x,ge,Ze,W,B,Me,ie,O,$e,ve,oe,X,N,Le,ae,V,we,he,ce,Y,Q,Ne,re,s]}class Ts extends Wt{constructor(n){super(),Xt(this,n,ys,ds,Ft,{data:9},null,[-1,-1,-1])}}export{Ts as component};
