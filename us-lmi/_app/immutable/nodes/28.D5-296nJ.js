import{s as as,d as n,i as l,a as ae,b as c,c as m,h as ss,e as y,f as sa,g as j,j as pt,k as d,l as b,m as qa,n as ns,o as is,p as ls,q as Pa,r as mt,t as rs,u as os}from"../chunks/scheduler.TmfZfN_X.js";import{S as _s,i as us,d as w,t as v,a as f,c as ot,m as A,b as k,e as S,g as _t}from"../chunks/index.CKLTamEB.js";import{D as Oa,C as ye}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BlNm2Thl.js";import{w as ms}from"../chunks/entry.CXtrXOLO.js";import{e as ds,s as cs,Q as ut,p as gs,a as Va,r as Ka,C as fs,b as ps}from"../chunks/inferColumnTypes.W_n7LdHz.js";import{h as Q}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as hs}from"../chunks/stores.C4mfYxeY.js";import{Q as dt}from"../chunks/QueryViewer.Bt3eXBIK.js";import{B as ce}from"../chunks/BigValue.CQtgzVgo.js";import{L as _a}from"../chunks/LineChart.Dga1JJ9G.js";import{p as vs}from"../chunks/profile.BW8tN6E9.js";function ys(_){let s,i=I.title+"",t;return{c(){s=b("h1"),t=os(i),this.h()},l(o){s=y(o,"H1",{class:!0});var u=pt(s);t=rs(u,i),u.forEach(n),this.h()},h(){c(s,"class","title")},m(o,u){l(o,s,u),ae(s,t)},p:mt,d(o){o&&n(s)}}}function bs(_){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:mt,p:mt,d:mt}}function ws(_){let s,i,t,o,u;return document.title=s=I.title,{c(){i=d(),t=b("meta"),o=d(),u=b("meta"),this.h()},l(r){i=m(r),t=y(r,"META",{property:!0,content:!0}),o=m(r),u=y(r,"META",{name:!0,content:!0}),this.h()},h(){var r,p;c(t,"property","og:title"),c(t,"content",((r=I.og)==null?void 0:r.title)??I.title),c(u,"name","twitter:title"),c(u,"content",((p=I.og)==null?void 0:p.title)??I.title)},m(r,p){l(r,i,p),l(r,t,p),l(r,o,p),l(r,u,p)},p(r,p){p&0&&s!==(s=I.title)&&(document.title=s)},d(r){r&&(n(i),n(t),n(o),n(u))}}}function As(_){var u,r;let s,i,t=(I.description||((u=I.og)==null?void 0:u.description))&&ks(),o=((r=I.og)==null?void 0:r.image)&&Ss();return{c(){t&&t.c(),s=d(),o&&o.c(),i=sa()},l(p){t&&t.l(p),s=m(p),o&&o.l(p),i=sa()},m(p,R){t&&t.m(p,R),l(p,s,R),o&&o.m(p,R),l(p,i,R)},p(p,R){var G,H;(I.description||(G=I.og)!=null&&G.description)&&t.p(p,R),(H=I.og)!=null&&H.image&&o.p(p,R)},d(p){p&&(n(s),n(i)),t&&t.d(p),o&&o.d(p)}}}function ks(_){let s,i,t,o,u;return{c(){s=b("meta"),i=d(),t=b("meta"),o=d(),u=b("meta"),this.h()},l(r){s=y(r,"META",{name:!0,content:!0}),i=m(r),t=y(r,"META",{property:!0,content:!0}),o=m(r),u=y(r,"META",{name:!0,content:!0}),this.h()},h(){var r,p,R;c(s,"name","description"),c(s,"content",I.description??((r=I.og)==null?void 0:r.description)),c(t,"property","og:description"),c(t,"content",((p=I.og)==null?void 0:p.description)??I.description),c(u,"name","twitter:description"),c(u,"content",((R=I.og)==null?void 0:R.description)??I.description)},m(r,p){l(r,s,p),l(r,i,p),l(r,t,p),l(r,o,p),l(r,u,p)},p:mt,d(r){r&&(n(s),n(i),n(t),n(o),n(u))}}}function Ss(_){let s,i,t;return{c(){s=b("meta"),i=d(),t=b("meta"),this.h()},l(o){s=y(o,"META",{property:!0,content:!0}),i=m(o),t=y(o,"META",{name:!0,content:!0}),this.h()},h(){var o,u;c(s,"property","og:image"),c(s,"content",Va((o=I.og)==null?void 0:o.image)),c(t,"name","twitter:image"),c(t,"content",Va((u=I.og)==null?void 0:u.image))},m(o,u){l(o,s,u),l(o,i,u),l(o,t,u)},p:mt,d(o){o&&(n(s),n(i),n(t))}}}function Na(_){let s,i;return s=new dt({props:{queryID:"federal_posting_headline",queryResult:_[0]}}),{c(){S(s.$$.fragment)},l(t){k(s.$$.fragment,t)},m(t,o){A(s,t,o),i=!0},p(t,o){const u={};o[0]&1&&(u.queryResult=t[0]),s.$set(u)},i(t){i||(f(s.$$.fragment,t),i=!0)},o(t){v(s.$$.fragment,t),i=!1},d(t){w(s,t)}}}function za(_){let s,i;return s=new dt({props:{queryID:"federal_latest_signal_headlines",queryResult:_[1]}}),{c(){S(s.$$.fragment)},l(t){k(s.$$.fragment,t)},m(t,o){A(s,t,o),i=!0},p(t,o){const u={};o[0]&2&&(u.queryResult=t[1]),s.$set(u)},i(t){i||(f(s.$$.fragment,t),i=!0)},o(t){v(s.$$.fragment,t),i=!1},d(t){w(s,t)}}}function Qa(_){let s,i;return s=new dt({props:{queryID:"federal_policy_signals_indexed",queryResult:_[2]}}),{c(){S(s.$$.fragment)},l(t){k(s.$$.fragment,t)},m(t,o){A(s,t,o),i=!0},p(t,o){const u={};o[0]&4&&(u.queryResult=t[2]),s.$set(u)},i(t){i||(f(s.$$.fragment,t),i=!0)},o(t){v(s.$$.fragment,t),i=!1},d(t){w(s,t)}}}function Gs(_){let s,i,t,o,u,r,p,R,G,H;return s=new ye({props:{id:"signal",title:"Signal"}}),t=new ye({props:{id:"jan_2025",title:"Jan. 2025",fmt:"0"}}),u=new ye({props:{id:"feb_2025",title:"Feb. 2025",fmt:"0"}}),p=new ye({props:{id:"post_eo_min",title:"Post-EO minimum",fmt:"0"}}),G=new ye({props:{id:"latest",title:"Latest month",fmt:"0"}}),{c(){S(s.$$.fragment),i=d(),S(t.$$.fragment),o=d(),S(u.$$.fragment),r=d(),S(p.$$.fragment),R=d(),S(G.$$.fragment)},l(g){k(s.$$.fragment,g),i=m(g),k(t.$$.fragment,g),o=m(g),k(u.$$.fragment,g),r=m(g),k(p.$$.fragment,g),R=m(g),k(G.$$.fragment,g)},m(g,$){A(s,g,$),l(g,i,$),A(t,g,$),l(g,o,$),A(u,g,$),l(g,r,$),A(p,g,$),l(g,R,$),A(G,g,$),H=!0},p:mt,i(g){H||(f(s.$$.fragment,g),f(t.$$.fragment,g),f(u.$$.fragment,g),f(p.$$.fragment,g),f(G.$$.fragment,g),H=!0)},o(g){v(s.$$.fragment,g),v(t.$$.fragment,g),v(u.$$.fragment,g),v(p.$$.fragment,g),v(G.$$.fragment,g),H=!1},d(g){g&&(n(i),n(o),n(r),n(R)),w(s,g),w(t,g),w(u,g),w(p,g),w(G,g)}}}function Ya(_){let s,i;return s=new dt({props:{queryID:"federal_post_eo_signal_table",queryResult:_[3]}}),{c(){S(s.$$.fragment)},l(t){k(s.$$.fragment,t)},m(t,o){A(s,t,o),i=!0},p(t,o){const u={};o[0]&8&&(u.queryResult=t[3]),s.$set(u)},i(t){i||(f(s.$$.fragment,t),i=!0)},o(t){v(s.$$.fragment,t),i=!1},d(t){w(s,t)}}}function Wa(_){let s,i;return s=new dt({props:{queryID:"federal_policy_signals",queryResult:_[4]}}),{c(){S(s.$$.fragment)},l(t){k(s.$$.fragment,t)},m(t,o){A(s,t,o),i=!0},p(t,o){const u={};o[0]&16&&(u.queryResult=t[4]),s.$set(u)},i(t){i||(f(s.$$.fragment,t),i=!0)},o(t){v(s.$$.fragment,t),i=!1},d(t){w(s,t)}}}function Xa(_){let s,i;return s=new dt({props:{queryID:"green_task_agreement_headline",queryResult:_[5]}}),{c(){S(s.$$.fragment)},l(t){k(s.$$.fragment,t)},m(t,o){A(s,t,o),i=!0},p(t,o){const u={};o[0]&32&&(u.queryResult=t[5]),s.$set(u)},i(t){i||(f(s.$$.fragment,t),i=!0)},o(t){v(s.$$.fragment,t),i=!1},d(t){w(s,t)}}}function Za(_){let s,i;return s=new dt({props:{queryID:"green_task_agreement_summary",queryResult:_[6]}}),{c(){S(s.$$.fragment)},l(t){k(s.$$.fragment,t)},m(t,o){A(s,t,o),i=!0},p(t,o){const u={};o[0]&64&&(u.queryResult=t[6]),s.$set(u)},i(t){i||(f(s.$$.fragment,t),i=!0)},o(t){v(s.$$.fragment,t),i=!1},d(t){w(s,t)}}}function $s(_){let s,i,t,o,u,r,p,R,G,H,g,$;return s=new ye({props:{id:"agreement_group",title:"Review group"}}),t=new ye({props:{id:"reviewed_n",title:"Reviewed rows",fmt:"#,##0"}}),u=new ye({props:{id:"adjudicated_n",title:"Complete rows",fmt:"#,##0"}}),p=new ye({props:{id:"included_n",title:"LLM-validated rows",fmt:"#,##0"}}),G=new ye({props:{id:"error_n",title:"Error rows",fmt:"#,##0"}}),g=new ye({props:{id:"pass_rate",title:"LLM-valid rate",fmt:"0.0%"}}),{c(){S(s.$$.fragment),i=d(),S(t.$$.fragment),o=d(),S(u.$$.fragment),r=d(),S(p.$$.fragment),R=d(),S(G.$$.fragment),H=d(),S(g.$$.fragment)},l(h){k(s.$$.fragment,h),i=m(h),k(t.$$.fragment,h),o=m(h),k(u.$$.fragment,h),r=m(h),k(p.$$.fragment,h),R=m(h),k(G.$$.fragment,h),H=m(h),k(g.$$.fragment,h)},m(h,x){A(s,h,x),l(h,i,x),A(t,h,x),l(h,o,x),A(u,h,x),l(h,r,x),A(p,h,x),l(h,R,x),A(G,h,x),l(h,H,x),A(g,h,x),$=!0},p:mt,i(h){$||(f(s.$$.fragment,h),f(t.$$.fragment,h),f(u.$$.fragment,h),f(p.$$.fragment,h),f(G.$$.fragment,h),f(g.$$.fragment,h),$=!0)},o(h){v(s.$$.fragment,h),v(t.$$.fragment,h),v(u.$$.fragment,h),v(p.$$.fragment,h),v(G.$$.fragment,h),v(g.$$.fragment,h),$=!1},d(h){h&&(n(i),n(o),n(r),n(R),n(H)),w(s,h),w(t,h),w(u,h),w(p,h),w(G,h),w(g,h)}}}function es(_){let s,i;return s=new dt({props:{queryID:"federal_policy_signals_indexed_jan2025",queryResult:_[7]}}),{c(){S(s.$$.fragment)},l(t){k(s.$$.fragment,t)},m(t,o){A(s,t,o),i=!0},p(t,o){const u={};o[0]&128&&(u.queryResult=t[7]),s.$set(u)},i(t){i||(f(s.$$.fragment,t),i=!0)},o(t){v(s.$$.fragment,t),i=!1},d(t){w(s,t)}}}function Ms(_){let s,i,t,o,u,r,p='<a href="/us-lmi/usajobs" class="hover:underline">USAJOBS Summary</a> <a href="/us-lmi/methodology" class="hover:underline">Methods</a>',R,G,H='<a href="#federal-postings-register-policy-shocks">Federal Postings Register Policy Shocks</a>',g,$,h="JAAT is applied to 3.09 million USAJOBS postings from January 2017 through March 2026. Federal posting volume falls sharply in 2025, so the analysis expresses signal counts relative to active postings. The charts compare posting language over time alongside dates of AI, sustainability and DEIA executive actions: DEI keyword intensity falls after January 2025, while AI keywords and strict AI skills recover after an initial dip.",x,q,se,ct,V,ge,W,gt,ne,Be,E,K,Se,ie,ft,le,fe,N,be,re,ht='<em class="markdown">Count convention: the dashboard uses the full USAJOBS corpus currently available to JAAT, January 2017 through March 2026. Restricting the corpus to January 2018 through March 2026 yields 2.85 million postings.</em>',Ce,X,Z,Y,vt='<a href="#indexed-policy-shock-signals">Indexed Policy-Shock Signals</a>',Je,we,oe,P,De='<a href="#figure-c1-usajobs-signals-indexed-to-2021-2025-administration-mean">Figure C.1. USAJOBS Signals Indexed to 2021-2025 Administration Mean</a>',Ue,_e,yt="This indexed view is presented to compare direction and timing across signals that have different raw units. Values above 100 are above each signal's February 2021-January 2025 baseline; values below 100 are below it.",ue,z,Ae,me,bt='<em class="markdown">Note: Each series is indexed to its own mean over February 2021 through January 2025. The AI keywords series uses the deduplicated any-keyword aggregate from raw USAJOBS AI concept maps.</em>',Le,ee,O,Fe='<a href="#table-c1-post-eo-14148-movement-in-posting-content-signals">Table C.1. Post-EO 14148 movement in posting-content signals</a>',He,de,wt="<strong>Terms.</strong> Jan. 2025 and Feb. 2025 are indexed values. Post-EO minimum is the lowest value after January 2025. Latest month is the most recent indexed value in the source.",M,ke,Rt,qe,ua='<em class="markdown">Note: Values are indexed to the February 2021-January 2025 mean for each signal. DEI keywords include <code class="markdown">diversity</code>, <code class="markdown">equity</code>, <code class="markdown">inclusion</code>, and <code class="markdown">deia</code>; AI keywords use the deduplicated any-keyword aggregate across raw USAJOBS AI concept maps. Strict and lenient AI codes use AIMatch code membership from the public AI taxonomy.</em>',xt,At,Ge,ma='<a href="#core-policy-timing">Core Policy Timing</a>',Et,Pe,da="The annotated dates identify federal AI, sustainability and DEIA requirements and the January 2025 rescissions and replacement actions. Their timing does not establish that these actions caused the observed changes.",Tt,Oe,ca='<summary class="cursor-pointer font-semibold">Show core policy timing list</summary> <ul class="text-sm leading-6 mb-6"><li><strong>June 25, 2021:</strong> <a href="https://www.federalregister.gov/documents/2021/06/30/2021-14127/diversity-equity-inclusion-and-accessibility-in-the-federal-workforce" class="underline">Executive Order 14035, Diversity, Equity, Inclusion, and Accessibility in the Federal Workforce</a> - DEIA strategy, recruitment, hiring, retention, accessibility, and federal workforce language.</li> <li><strong>December 8, 2021:</strong> <a href="https://www.federalregister.gov/documents/2021/12/13/2021-27114/catalyzing-clean-energy-industries-and-jobs-through-federal-sustainability" class="underline">Executive Order 14057, Catalyzing Clean Energy Industries and Jobs Through Federal Sustainability</a> - federal sustainability, carbon-free electricity, zero-emission vehicles, buildings, procurement, and clean-energy jobs.</li> <li><strong>October 30, 2023:</strong> <a href="https://www.federalregister.gov/documents/2023/11/01/2023-24283/safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence" class="underline">Executive Order 14110, Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence</a> - AI safety, responsible federal AI use, privacy, standards, workforce, and AI governance language.</li> <li><strong>January 20, 2025:</strong> <a href="https://www.federalregister.gov/documents/2025/01/28/2025-01901/initial-rescissions-of-harmful-executive-orders-and-actions" class="underline">Executive Order 14148, Initial Rescissions of Harmful Executive Orders and Actions</a> - revoked prior executive actions, including the AI, sustainability, and DEIA orders tracked here.</li> <li><strong>January 20, 2025:</strong> <a href="https://www.federalregister.gov/documents/2025/01/29/2025-01953/ending-radical-and-wasteful-government-dei-programs-and-preferencing" class="underline">Executive Order 14151, Ending Radical and Wasteful Government DEI Programs and Preferencing</a> - DEI, DEIA, and environmental-justice offices, positions, plans, grants, contracts, and performance requirements.</li> <li><strong>January 20, 2025:</strong> <a href="https://www.federalregister.gov/documents/2025/01/29/2025-01956/unleashing-american-energy" class="underline">Executive Order 14154, Unleashing American Energy</a> - energy, environmental review, EV, minerals, and domestic-resource language.</li> <li><strong>January 23, 2025:</strong> <a href="https://www.federalregister.gov/documents/2025/01/31/2025-02172/removing-barriers-to-american-leadership-in-artificial-intelligence" class="underline">Executive Order 14179, Removing Barriers to American Leadership in Artificial Intelligence</a> - AI policy, AI action planning, and revision of prior federal AI directives.</li></ul>',Bt,kt,Ct,$e,ga='<a href="#signal-intensity-and-baseline-comparisons">Signal Intensity and Baseline Comparisons</a>',Jt,Me,fa='<a href="#figure-c2-usajobs-dei-green-stem-and-strict-ai-code-intensity">Figure C.2. USAJOBS DEI, Green, STEM, and Strict AI Code Intensity</a>',Dt,Ve,pa="This raw-intensity view is presented to show the scale of each posting-content signal before indexing. Because the units differ by signal family, the indexed figures are better for cross-signal comparison.",Ut,Ke,Lt,Ne,ha='<em class="markdown">Note: DEI Keywords values are keyword mentions per 1,000 active postings; strict AI codes are strict-score AIMatch taxonomy codes per 1,000 active postings. Green and STEM task sets use prompt v2 two-model LLM agreement procedures; inclusion requires a two-model unanimous YES. The green-task procedure reviewed 5,839 complete task IDs, retained 1,056 task IDs, and produced 97.5% raw agreement and Cohen&#39;s kappa of 0.920. STEM has one unresolved adjudication error documented in the audit trail.</em>',Ft,St,Ie,va='<a href="#green-task-agreement-procedure">Green Task Agreement Procedure</a>',Ht,ze,ya="The green-task series in Figures C.1-C.3 uses task IDs retained by a separate two-model agreement procedure, then counts LLM-validated green task mentions in monthly active USAJOBS postings. This makes the green signal a task-domain measure rather than a keyword-only sustainability vocabulary count.",qt,Gt,te,Qe,na,Ye,ia,We,la,Xe,Pt,$t,Ze,ba="Green task agreement summary",Ot,et,wa="<strong>Terms.</strong> Complete rows exclude run errors. LLM-validated rows require a two-model unanimous YES under the green-task prompt.",Vt,je,Aa='<a href="#table-uf-1-green-task-agreement-summary">Table UF-1. Green Task Agreement Summary</a>',Kt,tt,Nt,at,ka='The procedure reviewed 5,839 complete task rows and retained 1,056 green task IDs. Most retained green tasks come from the canonical O*NET green-task universe; the discovery pathway adds a smaller set of green task IDs outside that canonical universe. Download the underlying workbook here: <a href="/us-lmi/downloads/agreement/sonnet_gpt_green_tasks_results.xlsx" class="markdown">green task agreement data</a>. The prompt and additional agreement-workbook links are in the <a href="/us-lmi/methodology/audit-trail#downloadable-two-model-agreement-workbooks" class="markdown">Agreement and Audit Trail</a>.',zt,Mt,Qt,Re,Sa='<a href="#figure-c3-usajobs-signals-indexed-to-january-2025">Figure C.3. USAJOBS Signals Indexed to January 2025</a>',Yt,st,Ga="This supplemental index is presented to isolate post-transition movement. A value of 1.20 means the signal is 20% above its January 2025 level.",Wt,nt,Xt,it,$a='<em class="markdown">Note: Each series is divided by its own January 2025 value. This supplemental view isolates movement after the January 2025 transition.</em>',Zt,It,xe,Ma='<a href="#additional-policy-timing-context">Additional Policy Timing Context</a>',ea,lt,Ia="These actions provide context for federal posting language about equity, climate, energy, hiring and merit.",ta,rt,ja='<summary class="cursor-pointer font-semibold">Show additional policy timing list</summary> <ul class="text-sm leading-6 mb-6"><li><strong>January 20, 2021:</strong> <a href="https://www.federalregister.gov/documents/2021/01/25/2021-01753/advancing-racial-equity-and-support-for-underserved-communities-through-the-federal-government" class="underline">Executive Order 13985, Advancing Racial Equity and Support for Underserved Communities Through the Federal Government</a> - equity reviews, agency action plans, underserved-community language, and equitable resource allocation.</li> <li><strong>January 20, 2021:</strong> <a href="https://www.federalregister.gov/documents/2021/01/25/2021-01765/protecting-public-health-and-the-environment-and-restoring-science-to-tackle-the-climate-crisis" class="underline">Executive Order 13990, Protecting Public Health and the Environment and Restoring Science To Tackle the Climate Crisis</a> - climate science, environmental review, greenhouse-gas, energy, and public-health language.</li> <li><strong>January 27, 2021:</strong> <a href="https://www.federalregister.gov/documents/2021/02/01/2021-02177/tackling-the-climate-crisis-at-home-and-abroad" class="underline">Executive Order 14008, Tackling the Climate Crisis at Home and Abroad</a> - climate policy, clean energy, conservation, environmental justice, and Justice40 language.</li> <li><strong>February 16, 2023:</strong> <a href="https://www.federalregister.gov/documents/2023/02/22/2023-03779/further-advancing-racial-equity-and-support-for-underserved-communities-through-the-federal" class="underline">Executive Order 14091, Further Advancing Racial Equity and Support for Underserved Communities Through the Federal Government</a> - equity action, environmental justice, procurement, civil-rights, and technology-bias language.</li> <li><strong>January 20, 2025:</strong> <a href="https://www.federalregister.gov/documents/2025/01/30/2025-02094/reforming-the-federal-hiring-process-and-restoring-merit-to-government-service" class="underline">Executive Order 14170, Reforming the Federal Hiring Process and Restoring Merit to Government Service</a> - federal hiring, merit, skills, efficiency, and candidate-assessment language.</li> <li><strong>January 21, 2025:</strong> <a href="https://www.federalregister.gov/documents/2025/01/31/2025-02097/ending-illegal-discrimination-and-restoring-merit-based-opportunity" class="underline">Executive Order 14173, Ending Illegal Discrimination and Restoring Merit-Based Opportunity</a> - DEI/DEIA, federal contracting, grants, civil-rights compliance, and merit language.</li></ul>',aa,Ee=typeof I<"u"&&I.title&&I.hide_title!==!0&&ys();function ts(e,a){return typeof I<"u"&&I.title?ws:bs}let jt=ts()(_),Te=typeof I=="object"&&As();se=new ce({props:{data:_[0],value:"postings_2017_2026_millions",title:"USAJOBS postings analyzed, millions",fmt:"0.00"}}),V=new ce({props:{data:_[0],value:"posting_volume_drop_2024_2025",title:"2024-2025 posting drop",fmt:"0.0%"}}),W=new ce({props:{data:_[0],value:"green_review_rows",title:"Green-task LLM reviews",fmt:"#,##0"}}),ne=new ce({props:{data:_[0],value:"green_retained_distinct_task_ids",title:"Green task IDs passing strict agreement",fmt:"#,##0"}}),K=new ce({props:{data:_[1],value:"dei_latest_ratio",title:"Latest DEI keyword intensity vs. Biden mean",fmt:"0.0%"}}),ie=new ce({props:{data:_[1],value:"ai_keywords_latest_ratio",title:"Latest AI keyword intensity vs. Biden mean",fmt:"0.0%"}}),le=new ce({props:{data:_[1],value:"strict_ai_latest_ratio",title:"Latest strict AI codes vs. Biden mean",fmt:"0.0%"}}),N=new ce({props:{data:_[1],value:"lenient_ai_latest_ratio",title:"Latest Lenient AIMatch vs. Biden mean",fmt:"0.0%"}});let T=_[0]&&Na(_),B=_[1]&&za(_);z=new _a({props:{data:_[2],x:"month_start",y:"index_value",series:"signal",yAxisTitle:"Index, February 2021-January 2025 mean = 100"}});let C=_[2]&&Qa(_);ke=new Oa({props:{data:_[3],rowsPerPage:"10",$$slots:{default:[Gs]},$$scope:{ctx:_}}});let J=_[3]&&Ya(_);Ke=new _a({props:{data:_[4],x:"month_start",y:"value",series:"signal",yAxisTitle:"Mentions or task matches per 1,000 active postings"}});let D=_[4]&&Wa(_),U=_[5]&&Xa(_);Qe=new ce({props:{data:_[5],value:"green_review_rows",title:"Green task rows reviewed",fmt:"#,##0"}}),Ye=new ce({props:{data:_[5],value:"green_retained_distinct_task_ids",title:"LLM-validated task IDs",fmt:"#,##0"}}),We=new ce({props:{data:_[5],value:"green_raw_agreement_rate",title:"Two-model agreement rate",fmt:"pct1"}}),Xe=new ce({props:{data:_[5],value:"green_cohen_kappa",title:"Cohen's kappa",fmt:"0.000"}});let L=_[6]&&Za(_);tt=new Oa({props:{data:_[6],rows:"2",$$slots:{default:[$s]},$$scope:{ctx:_}}}),nt=new _a({props:{data:_[7],x:"month_start",y:"index_value",series:"signal",yAxisTitle:"Index, January 2025 = 1"}});let F=_[7]&&es(_);return{c(){Ee&&Ee.c(),s=d(),jt.c(),i=b("meta"),t=b("meta"),Te&&Te.c(),o=sa(),u=d(),r=b("div"),r.innerHTML=p,R=d(),G=b("h2"),G.innerHTML=H,g=d(),$=b("p"),$.textContent=h,x=d(),q=b("div"),S(se.$$.fragment),ct=d(),S(V.$$.fragment),ge=d(),S(W.$$.fragment),gt=d(),S(ne.$$.fragment),Be=d(),E=b("div"),S(K.$$.fragment),Se=d(),S(ie.$$.fragment),ft=d(),S(le.$$.fragment),fe=d(),S(N.$$.fragment),be=d(),re=b("p"),re.innerHTML=ht,Ce=d(),T&&T.c(),X=d(),B&&B.c(),Z=d(),Y=b("h2"),Y.innerHTML=vt,Je=d(),we=b("a"),oe=d(),P=b("h3"),P.innerHTML=De,Ue=d(),_e=b("p"),_e.textContent=yt,ue=d(),S(z.$$.fragment),Ae=d(),me=b("p"),me.innerHTML=bt,Le=d(),C&&C.c(),ee=d(),O=b("h3"),O.innerHTML=Fe,He=d(),de=b("div"),de.innerHTML=wt,M=d(),S(ke.$$.fragment),Rt=d(),qe=b("p"),qe.innerHTML=ua,xt=d(),J&&J.c(),At=d(),Ge=b("h2"),Ge.innerHTML=ma,Et=d(),Pe=b("p"),Pe.textContent=da,Tt=d(),Oe=b("details"),Oe.innerHTML=ca,Bt=d(),kt=b("a"),Ct=d(),$e=b("h2"),$e.innerHTML=ga,Jt=d(),Me=b("h3"),Me.innerHTML=fa,Dt=d(),Ve=b("p"),Ve.textContent=pa,Ut=d(),S(Ke.$$.fragment),Lt=d(),Ne=b("p"),Ne.innerHTML=ha,Ft=d(),D&&D.c(),St=d(),Ie=b("h2"),Ie.innerHTML=va,Ht=d(),ze=b("p"),ze.textContent=ya,qt=d(),U&&U.c(),Gt=d(),te=b("div"),S(Qe.$$.fragment),na=d(),S(Ye.$$.fragment),ia=d(),S(We.$$.fragment),la=d(),S(Xe.$$.fragment),Pt=d(),L&&L.c(),$t=d(),Ze=b("p"),Ze.textContent=ba,Ot=d(),et=b("div"),et.innerHTML=wa,Vt=d(),je=b("h3"),je.innerHTML=Aa,Kt=d(),S(tt.$$.fragment),Nt=d(),at=b("p"),at.innerHTML=ka,zt=d(),Mt=b("a"),Qt=d(),Re=b("h3"),Re.innerHTML=Sa,Yt=d(),st=b("p"),st.textContent=Ga,Wt=d(),S(nt.$$.fragment),Xt=d(),it=b("p"),it.innerHTML=$a,Zt=d(),F&&F.c(),It=d(),xe=b("h2"),xe.innerHTML=Ma,ea=d(),lt=b("p"),lt.textContent=Ia,ta=d(),rt=b("details"),rt.innerHTML=ja,this.h()},l(e){Ee&&Ee.l(e),s=m(e);const a=ss("svelte-2igo1p",document.head);jt.l(a),i=y(a,"META",{name:!0,content:!0}),t=y(a,"META",{name:!0,content:!0}),Te&&Te.l(a),o=sa(),a.forEach(n),u=m(e),r=y(e,"DIV",{class:!0,"data-svelte-h":!0}),j(r)!=="svelte-ou9iwc"&&(r.innerHTML=p),R=m(e),G=y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),j(G)!=="svelte-137kvo0"&&(G.innerHTML=H),g=m(e),$=y(e,"P",{class:!0,"data-svelte-h":!0}),j($)!=="svelte-1dfz46z"&&($.textContent=h),x=m(e),q=y(e,"DIV",{class:!0});var pe=pt(q);k(se.$$.fragment,pe),ct=m(pe),k(V.$$.fragment,pe),ge=m(pe),k(W.$$.fragment,pe),gt=m(pe),k(ne.$$.fragment,pe),pe.forEach(n),Be=m(e),E=y(e,"DIV",{class:!0});var he=pt(E);k(K.$$.fragment,he),Se=m(he),k(ie.$$.fragment,he),ft=m(he),k(le.$$.fragment,he),fe=m(he),k(N.$$.fragment,he),he.forEach(n),be=m(e),re=y(e,"P",{class:!0,"data-svelte-h":!0}),j(re)!=="svelte-lxnilu"&&(re.innerHTML=ht),Ce=m(e),T&&T.l(e),X=m(e),B&&B.l(e),Z=m(e),Y=y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),j(Y)!=="svelte-ou933x"&&(Y.innerHTML=vt),Je=m(e),we=y(e,"A",{id:!0}),pt(we).forEach(n),oe=m(e),P=y(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),j(P)!=="svelte-db01ge"&&(P.innerHTML=De),Ue=m(e),_e=y(e,"P",{class:!0,"data-svelte-h":!0}),j(_e)!=="svelte-1cd4m1g"&&(_e.textContent=yt),ue=m(e),k(z.$$.fragment,e),Ae=m(e),me=y(e,"P",{class:!0,"data-svelte-h":!0}),j(me)!=="svelte-1iysm3"&&(me.innerHTML=bt),Le=m(e),C&&C.l(e),ee=m(e),O=y(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),j(O)!=="svelte-byn3mc"&&(O.innerHTML=Fe),He=m(e),de=y(e,"DIV",{class:!0,"data-svelte-h":!0}),j(de)!=="svelte-1u5yc0"&&(de.innerHTML=wt),M=m(e),k(ke.$$.fragment,e),Rt=m(e),qe=y(e,"P",{class:!0,"data-svelte-h":!0}),j(qe)!=="svelte-d6rcu4"&&(qe.innerHTML=ua),xt=m(e),J&&J.l(e),At=m(e),Ge=y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),j(Ge)!=="svelte-9jy469"&&(Ge.innerHTML=ma),Et=m(e),Pe=y(e,"P",{class:!0,"data-svelte-h":!0}),j(Pe)!=="svelte-ql9ayt"&&(Pe.textContent=da),Tt=m(e),Oe=y(e,"DETAILS",{class:!0,"data-svelte-h":!0}),j(Oe)!=="svelte-pzatgx"&&(Oe.innerHTML=ca),Bt=m(e),kt=y(e,"A",{id:!0}),pt(kt).forEach(n),Ct=m(e),$e=y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),j($e)!=="svelte-v8tmol"&&($e.innerHTML=ga),Jt=m(e),Me=y(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),j(Me)!=="svelte-1vg75tg"&&(Me.innerHTML=fa),Dt=m(e),Ve=y(e,"P",{class:!0,"data-svelte-h":!0}),j(Ve)!=="svelte-jho69o"&&(Ve.textContent=pa),Ut=m(e),k(Ke.$$.fragment,e),Lt=m(e),Ne=y(e,"P",{class:!0,"data-svelte-h":!0}),j(Ne)!=="svelte-16da060"&&(Ne.innerHTML=ha),Ft=m(e),D&&D.l(e),St=m(e),Ie=y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),j(Ie)!=="svelte-13klqpr"&&(Ie.innerHTML=va),Ht=m(e),ze=y(e,"P",{class:!0,"data-svelte-h":!0}),j(ze)!=="svelte-7acso1"&&(ze.textContent=ya),qt=m(e),U&&U.l(e),Gt=m(e),te=y(e,"DIV",{class:!0});var ve=pt(te);k(Qe.$$.fragment,ve),na=m(ve),k(Ye.$$.fragment,ve),ia=m(ve),k(We.$$.fragment,ve),la=m(ve),k(Xe.$$.fragment,ve),ve.forEach(n),Pt=m(e),L&&L.l(e),$t=m(e),Ze=y(e,"P",{class:!0,"data-svelte-h":!0}),j(Ze)!=="svelte-10cc374"&&(Ze.textContent=ba),Ot=m(e),et=y(e,"DIV",{class:!0,"data-svelte-h":!0}),j(et)!=="svelte-130iby0"&&(et.innerHTML=wa),Vt=m(e),je=y(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),j(je)!=="svelte-1s3wnu9"&&(je.innerHTML=Aa),Kt=m(e),k(tt.$$.fragment,e),Nt=m(e),at=y(e,"P",{class:!0,"data-svelte-h":!0}),j(at)!=="svelte-12dyxad"&&(at.innerHTML=ka),zt=m(e),Mt=y(e,"A",{id:!0}),pt(Mt).forEach(n),Qt=m(e),Re=y(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),j(Re)!=="svelte-1qsl1sv"&&(Re.innerHTML=Sa),Yt=m(e),st=y(e,"P",{class:!0,"data-svelte-h":!0}),j(st)!=="svelte-groldf"&&(st.textContent=Ga),Wt=m(e),k(nt.$$.fragment,e),Xt=m(e),it=y(e,"P",{class:!0,"data-svelte-h":!0}),j(it)!=="svelte-1gxslwc"&&(it.innerHTML=$a),Zt=m(e),F&&F.l(e),It=m(e),xe=y(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),j(xe)!=="svelte-10ecl0y"&&(xe.innerHTML=Ma),ea=m(e),lt=y(e,"P",{class:!0,"data-svelte-h":!0}),j(lt)!=="svelte-qbctnc"&&(lt.textContent=Ia),ta=m(e),rt=y(e,"DETAILS",{class:!0,"data-svelte-h":!0}),j(rt)!=="svelte-881aew"&&(rt.innerHTML=ja),this.h()},h(){c(i,"name","twitter:card"),c(i,"content","summary_large_image"),c(t,"name","twitter:site"),c(t,"content","@evidence_dev"),c(r,"class","flex flex-wrap gap-x-4 gap-y-2 text-sm border-y border-gray-200 py-3 mb-6"),c(G,"class","markdown"),c(G,"id","federal-postings-register-policy-shocks"),c($,"class","markdown"),c(q,"class","grid grid-cols-1 md:grid-cols-4 gap-4 mb-4"),c(E,"class","grid grid-cols-1 md:grid-cols-3 gap-4 mb-6"),c(re,"class","markdown"),c(Y,"class","markdown"),c(Y,"id","indexed-policy-shock-signals"),c(we,"id","fig-federal-policy-signals-indexed"),c(P,"class","markdown"),c(P,"id","figure-c1-usajobs-signals-indexed-to-2021-2025-administration-mean"),c(_e,"class","markdown"),c(me,"class","markdown"),c(O,"class","markdown"),c(O,"id","table-c1-post-eo-14148-movement-in-posting-content-signals"),c(de,"class","text-sm my-3"),c(qe,"class","markdown"),c(Ge,"class","markdown"),c(Ge,"id","core-policy-timing"),c(Pe,"class","markdown"),c(Oe,"class","mb-6"),c(kt,"id","fig-federal-policy-signals"),c($e,"class","markdown"),c($e,"id","signal-intensity-and-baseline-comparisons"),c(Me,"class","markdown"),c(Me,"id","figure-c2-usajobs-dei-green-stem-and-strict-ai-code-intensity"),c(Ve,"class","markdown"),c(Ne,"class","markdown"),c(Ie,"class","markdown"),c(Ie,"id","green-task-agreement-procedure"),c(ze,"class","markdown"),c(te,"class","grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"),c(Ze,"class","text-sm font-semibold mt-4 mb-2"),c(et,"class","text-sm my-3"),c(je,"class","markdown"),c(je,"id","table-uf-1-green-task-agreement-summary"),c(at,"class","markdown"),c(Mt,"id","fig-federal-policy-signals-indexed-jan-2025"),c(Re,"class","markdown"),c(Re,"id","figure-c3-usajobs-signals-indexed-to-january-2025"),c(st,"class","markdown"),c(it,"class","markdown"),c(xe,"class","markdown"),c(xe,"id","additional-policy-timing-context"),c(lt,"class","markdown"),c(rt,"class","mb-6")},m(e,a){Ee&&Ee.m(e,a),l(e,s,a),jt.m(document.head,null),ae(document.head,i),ae(document.head,t),Te&&Te.m(document.head,null),ae(document.head,o),l(e,u,a),l(e,r,a),l(e,R,a),l(e,G,a),l(e,g,a),l(e,$,a),l(e,x,a),l(e,q,a),A(se,q,null),ae(q,ct),A(V,q,null),ae(q,ge),A(W,q,null),ae(q,gt),A(ne,q,null),l(e,Be,a),l(e,E,a),A(K,E,null),ae(E,Se),A(ie,E,null),ae(E,ft),A(le,E,null),ae(E,fe),A(N,E,null),l(e,be,a),l(e,re,a),l(e,Ce,a),T&&T.m(e,a),l(e,X,a),B&&B.m(e,a),l(e,Z,a),l(e,Y,a),l(e,Je,a),l(e,we,a),l(e,oe,a),l(e,P,a),l(e,Ue,a),l(e,_e,a),l(e,ue,a),A(z,e,a),l(e,Ae,a),l(e,me,a),l(e,Le,a),C&&C.m(e,a),l(e,ee,a),l(e,O,a),l(e,He,a),l(e,de,a),l(e,M,a),A(ke,e,a),l(e,Rt,a),l(e,qe,a),l(e,xt,a),J&&J.m(e,a),l(e,At,a),l(e,Ge,a),l(e,Et,a),l(e,Pe,a),l(e,Tt,a),l(e,Oe,a),l(e,Bt,a),l(e,kt,a),l(e,Ct,a),l(e,$e,a),l(e,Jt,a),l(e,Me,a),l(e,Dt,a),l(e,Ve,a),l(e,Ut,a),A(Ke,e,a),l(e,Lt,a),l(e,Ne,a),l(e,Ft,a),D&&D.m(e,a),l(e,St,a),l(e,Ie,a),l(e,Ht,a),l(e,ze,a),l(e,qt,a),U&&U.m(e,a),l(e,Gt,a),l(e,te,a),A(Qe,te,null),ae(te,na),A(Ye,te,null),ae(te,ia),A(We,te,null),ae(te,la),A(Xe,te,null),l(e,Pt,a),L&&L.m(e,a),l(e,$t,a),l(e,Ze,a),l(e,Ot,a),l(e,et,a),l(e,Vt,a),l(e,je,a),l(e,Kt,a),A(tt,e,a),l(e,Nt,a),l(e,at,a),l(e,zt,a),l(e,Mt,a),l(e,Qt,a),l(e,Re,a),l(e,Yt,a),l(e,st,a),l(e,Wt,a),A(nt,e,a),l(e,Xt,a),l(e,it,a),l(e,Zt,a),F&&F.m(e,a),l(e,It,a),l(e,xe,a),l(e,ea,a),l(e,lt,a),l(e,ta,a),l(e,rt,a),aa=!0},p(e,a){typeof I<"u"&&I.title&&I.hide_title!==!0&&Ee.p(e,a),jt.p(e,a),typeof I=="object"&&Te.p(e,a);const pe={};a[0]&1&&(pe.data=e[0]),se.$set(pe);const he={};a[0]&1&&(he.data=e[0]),V.$set(he);const ve={};a[0]&1&&(ve.data=e[0]),W.$set(ve);const Ra={};a[0]&1&&(Ra.data=e[0]),ne.$set(Ra);const xa={};a[0]&2&&(xa.data=e[1]),K.$set(xa);const Ea={};a[0]&2&&(Ea.data=e[1]),ie.$set(Ea);const Ta={};a[0]&2&&(Ta.data=e[1]),le.$set(Ta);const Ba={};a[0]&2&&(Ba.data=e[1]),N.$set(Ba),e[0]?T?(T.p(e,a),a[0]&1&&f(T,1)):(T=Na(e),T.c(),f(T,1),T.m(X.parentNode,X)):T&&(_t(),v(T,1,1,()=>{T=null}),ot()),e[1]?B?(B.p(e,a),a[0]&2&&f(B,1)):(B=za(e),B.c(),f(B,1),B.m(Z.parentNode,Z)):B&&(_t(),v(B,1,1,()=>{B=null}),ot());const Ca={};a[0]&4&&(Ca.data=e[2]),z.$set(Ca),e[2]?C?(C.p(e,a),a[0]&4&&f(C,1)):(C=Qa(e),C.c(),f(C,1),C.m(ee.parentNode,ee)):C&&(_t(),v(C,1,1,()=>{C=null}),ot());const ra={};a[0]&8&&(ra.data=e[3]),a[1]&536870912&&(ra.$$scope={dirty:a,ctx:e}),ke.$set(ra),e[3]?J?(J.p(e,a),a[0]&8&&f(J,1)):(J=Ya(e),J.c(),f(J,1),J.m(At.parentNode,At)):J&&(_t(),v(J,1,1,()=>{J=null}),ot());const Ja={};a[0]&16&&(Ja.data=e[4]),Ke.$set(Ja),e[4]?D?(D.p(e,a),a[0]&16&&f(D,1)):(D=Wa(e),D.c(),f(D,1),D.m(St.parentNode,St)):D&&(_t(),v(D,1,1,()=>{D=null}),ot()),e[5]?U?(U.p(e,a),a[0]&32&&f(U,1)):(U=Xa(e),U.c(),f(U,1),U.m(Gt.parentNode,Gt)):U&&(_t(),v(U,1,1,()=>{U=null}),ot());const Da={};a[0]&32&&(Da.data=e[5]),Qe.$set(Da);const Ua={};a[0]&32&&(Ua.data=e[5]),Ye.$set(Ua);const La={};a[0]&32&&(La.data=e[5]),We.$set(La);const Fa={};a[0]&32&&(Fa.data=e[5]),Xe.$set(Fa),e[6]?L?(L.p(e,a),a[0]&64&&f(L,1)):(L=Za(e),L.c(),f(L,1),L.m($t.parentNode,$t)):L&&(_t(),v(L,1,1,()=>{L=null}),ot());const oa={};a[0]&64&&(oa.data=e[6]),a[1]&536870912&&(oa.$$scope={dirty:a,ctx:e}),tt.$set(oa);const Ha={};a[0]&128&&(Ha.data=e[7]),nt.$set(Ha),e[7]?F?(F.p(e,a),a[0]&128&&f(F,1)):(F=es(e),F.c(),f(F,1),F.m(It.parentNode,It)):F&&(_t(),v(F,1,1,()=>{F=null}),ot())},i(e){aa||(f(se.$$.fragment,e),f(V.$$.fragment,e),f(W.$$.fragment,e),f(ne.$$.fragment,e),f(K.$$.fragment,e),f(ie.$$.fragment,e),f(le.$$.fragment,e),f(N.$$.fragment,e),f(T),f(B),f(z.$$.fragment,e),f(C),f(ke.$$.fragment,e),f(J),f(Ke.$$.fragment,e),f(D),f(U),f(Qe.$$.fragment,e),f(Ye.$$.fragment,e),f(We.$$.fragment,e),f(Xe.$$.fragment,e),f(L),f(tt.$$.fragment,e),f(nt.$$.fragment,e),f(F),aa=!0)},o(e){v(se.$$.fragment,e),v(V.$$.fragment,e),v(W.$$.fragment,e),v(ne.$$.fragment,e),v(K.$$.fragment,e),v(ie.$$.fragment,e),v(le.$$.fragment,e),v(N.$$.fragment,e),v(T),v(B),v(z.$$.fragment,e),v(C),v(ke.$$.fragment,e),v(J),v(Ke.$$.fragment,e),v(D),v(U),v(Qe.$$.fragment,e),v(Ye.$$.fragment,e),v(We.$$.fragment,e),v(Xe.$$.fragment,e),v(L),v(tt.$$.fragment,e),v(nt.$$.fragment,e),v(F),aa=!1},d(e){e&&(n(s),n(u),n(r),n(R),n(G),n(g),n($),n(x),n(q),n(Be),n(E),n(be),n(re),n(Ce),n(X),n(Z),n(Y),n(Je),n(we),n(oe),n(P),n(Ue),n(_e),n(ue),n(Ae),n(me),n(Le),n(ee),n(O),n(He),n(de),n(M),n(Rt),n(qe),n(xt),n(At),n(Ge),n(Et),n(Pe),n(Tt),n(Oe),n(Bt),n(kt),n(Ct),n($e),n(Jt),n(Me),n(Dt),n(Ve),n(Ut),n(Lt),n(Ne),n(Ft),n(St),n(Ie),n(Ht),n(ze),n(qt),n(Gt),n(te),n(Pt),n($t),n(Ze),n(Ot),n(et),n(Vt),n(je),n(Kt),n(Nt),n(at),n(zt),n(Mt),n(Qt),n(Re),n(Yt),n(st),n(Wt),n(Xt),n(it),n(Zt),n(It),n(xe),n(ea),n(lt),n(ta),n(rt)),Ee&&Ee.d(e),jt.d(e),n(i),n(t),Te&&Te.d(e),n(o),w(se),w(V),w(W),w(ne),w(K),w(ie),w(le),w(N),T&&T.d(e),B&&B.d(e),w(z,e),C&&C.d(e),w(ke,e),J&&J.d(e),w(Ke,e),D&&D.d(e),U&&U.d(e),w(Qe),w(Ye),w(We),w(Xe),L&&L.d(e),w(tt,e),w(nt,e),F&&F.d(e)}}}const I={title:"Federal Posting Signals"};function Is(_,s,i){let t,o;qa(_,hs,M=>i(42,t=M)),qa(_,Ka,M=>i(48,o=M));let{data:u}=s,{data:r={},customFormattingSettings:p,__db:R,inputs:G}=u;ns(Ka,o="783eac1c3ba9b769ae0fd60a18689ed3",o);let H=ds(ms(G));is(H.subscribe(M=>G=M)),ls(fs,{getCustomFormats:()=>p.customFormats||[]});const g=(M,ke)=>vs(R.query,M,{query_name:ke});cs(g),t.params,Pa(()=>!0);let $={initialData:void 0,initialError:void 0},h=Q`select *
from usajobs.AGGR_FederalPostingHeadline`,x=`select *
from usajobs.AGGR_FederalPostingHeadline`;r.federal_posting_headline_data&&(r.federal_posting_headline_data instanceof Error?$.initialError=r.federal_posting_headline_data:$.initialData=r.federal_posting_headline_data,r.federal_posting_headline_columns&&($.knownColumns=r.federal_posting_headline_columns));let q,se=!1;const ct=ut.createReactive({callback:M=>{i(0,q=M)},execFn:g},{id:"federal_posting_headline",...$});ct(x,{noResolve:h,...$}),globalThis[Symbol.for("federal_posting_headline")]={get value(){return q}};let V={initialData:void 0,initialError:void 0},ge=Q`with latest as (
  select
    signal,
    index_value / 100.0 as latest_ratio,
    row_number() over (partition by signal order by month_start desc) as rn
  from (with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
biden_baseline as (
  select
    signal,
    avg(value) as baseline_value
  from policy_signals
  where month_start between date '2021-02-01' and date '2025-01-01'
  group by 1
)
select
  p.month_start,
  p.signal,
  p.value * 100.0 / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join biden_baseline b using (signal)
order by p.month_start, p.signal)
)
select
  max(case when signal = 'DEI Keywords' then latest_ratio end) as dei_latest_ratio,
  max(case when signal = 'AI keywords' then latest_ratio end) as ai_keywords_latest_ratio,
  max(case when signal = 'Strict AI codes' then latest_ratio end) as strict_ai_latest_ratio,
  max(case when signal = 'Lenient AIMatch' then latest_ratio end) as lenient_ai_latest_ratio
from latest
where rn = 1`,W=`with latest as (
  select
    signal,
    index_value / 100.0 as latest_ratio,
    row_number() over (partition by signal order by month_start desc) as rn
  from (with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
biden_baseline as (
  select
    signal,
    avg(value) as baseline_value
  from policy_signals
  where month_start between date '2021-02-01' and date '2025-01-01'
  group by 1
)
select
  p.month_start,
  p.signal,
  p.value * 100.0 / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join biden_baseline b using (signal)
order by p.month_start, p.signal)
)
select
  max(case when signal = 'DEI Keywords' then latest_ratio end) as dei_latest_ratio,
  max(case when signal = 'AI keywords' then latest_ratio end) as ai_keywords_latest_ratio,
  max(case when signal = 'Strict AI codes' then latest_ratio end) as strict_ai_latest_ratio,
  max(case when signal = 'Lenient AIMatch' then latest_ratio end) as lenient_ai_latest_ratio
from latest
where rn = 1`;r.federal_latest_signal_headlines_data&&(r.federal_latest_signal_headlines_data instanceof Error?V.initialError=r.federal_latest_signal_headlines_data:V.initialData=r.federal_latest_signal_headlines_data,r.federal_latest_signal_headlines_columns&&(V.knownColumns=r.federal_latest_signal_headlines_columns));let gt,ne=!1;const Be=ut.createReactive({callback:M=>{i(1,gt=M)},execFn:g},{id:"federal_latest_signal_headlines",...V});Be(W,{noResolve:ge,...V}),globalThis[Symbol.for("federal_latest_signal_headlines")]={get value(){return gt}};let E={initialData:void 0,initialError:void 0},K=Q`with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
biden_baseline as (
  select
    signal,
    avg(value) as baseline_value
  from policy_signals
  where month_start between date '2021-02-01' and date '2025-01-01'
  group by 1
)
select
  p.month_start,
  p.signal,
  p.value * 100.0 / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join biden_baseline b using (signal)
order by p.month_start, p.signal`,Se=`with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
biden_baseline as (
  select
    signal,
    avg(value) as baseline_value
  from policy_signals
  where month_start between date '2021-02-01' and date '2025-01-01'
  group by 1
)
select
  p.month_start,
  p.signal,
  p.value * 100.0 / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join biden_baseline b using (signal)
order by p.month_start, p.signal`;r.federal_policy_signals_indexed_data&&(r.federal_policy_signals_indexed_data instanceof Error?E.initialError=r.federal_policy_signals_indexed_data:E.initialData=r.federal_policy_signals_indexed_data,r.federal_policy_signals_indexed_columns&&(E.knownColumns=r.federal_policy_signals_indexed_columns));let ie,ft=!1;const le=ut.createReactive({callback:M=>{i(2,ie=M)},execFn:g},{id:"federal_policy_signals_indexed",...E});le(Se,{noResolve:K,...E}),globalThis[Symbol.for("federal_policy_signals_indexed")]={get value(){return ie}};let fe={initialData:void 0,initialError:void 0},N=Q`select
  signal,
  max(case when month_start = date '2025-01-01' then index_value end) as jan_2025,
  max(case when month_start = date '2025-02-01' then index_value end) as feb_2025,
  min(case when month_start >= date '2025-02-01' then index_value end) as post_eo_min,
  max(case when rn_latest = 1 then index_value end) as latest
from (
  select
    *,
    row_number() over (partition by signal order by month_start desc) as rn_latest
  from (with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
biden_baseline as (
  select
    signal,
    avg(value) as baseline_value
  from policy_signals
  where month_start between date '2021-02-01' and date '2025-01-01'
  group by 1
)
select
  p.month_start,
  p.signal,
  p.value * 100.0 / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join biden_baseline b using (signal)
order by p.month_start, p.signal)
)
group by signal
order by
  case signal
    when 'DEI Keywords' then 1
    when 'AI keywords' then 2
    when 'Strict AI codes' then 3
    when 'Lenient AIMatch' then 4
    when 'Green tasks' then 5
    when 'STEM tasks' then 6
    else 7
  end`,be=`select
  signal,
  max(case when month_start = date '2025-01-01' then index_value end) as jan_2025,
  max(case when month_start = date '2025-02-01' then index_value end) as feb_2025,
  min(case when month_start >= date '2025-02-01' then index_value end) as post_eo_min,
  max(case when rn_latest = 1 then index_value end) as latest
from (
  select
    *,
    row_number() over (partition by signal order by month_start desc) as rn_latest
  from (with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
biden_baseline as (
  select
    signal,
    avg(value) as baseline_value
  from policy_signals
  where month_start between date '2021-02-01' and date '2025-01-01'
  group by 1
)
select
  p.month_start,
  p.signal,
  p.value * 100.0 / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join biden_baseline b using (signal)
order by p.month_start, p.signal)
)
group by signal
order by
  case signal
    when 'DEI Keywords' then 1
    when 'AI keywords' then 2
    when 'Strict AI codes' then 3
    when 'Lenient AIMatch' then 4
    when 'Green tasks' then 5
    when 'STEM tasks' then 6
    else 7
  end`;r.federal_post_eo_signal_table_data&&(r.federal_post_eo_signal_table_data instanceof Error?fe.initialError=r.federal_post_eo_signal_table_data:fe.initialData=r.federal_post_eo_signal_table_data,r.federal_post_eo_signal_table_columns&&(fe.knownColumns=r.federal_post_eo_signal_table_columns));let re,ht=!1;const Ce=ut.createReactive({callback:M=>{i(3,re=M)},execFn:g},{id:"federal_post_eo_signal_table",...fe});Ce(be,{noResolve:N,...fe}),globalThis[Symbol.for("federal_post_eo_signal_table")]={get value(){return re}};let X={initialData:void 0,initialError:void 0},Z=Q`select
  month_start,
  'DEI Keywords' as signal,
  value * 1000.0 as value
from usajobs.CMP_FederalNlxCompanion
where metric = 'DEI term intensity'
  and corpus = 'USAJOBS'
union all
select
  month_start,
  'Green tasks' as signal,
  green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
from usajobs.AGGR_GreenByMonth_AgreementRetained
union all
select
  month_start,
  'STEM tasks' as signal,
  stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
from usajobs.AGGR_StemByMonth
union all
select
  month_start,
  'Strict AI codes' as signal,
  strict_ai_codes_per_1k_active_postings as value
from usajobs.AGGR_USAJobsAiScoreV2ByMonth
order by month_start, signal`,Y=`select
  month_start,
  'DEI Keywords' as signal,
  value * 1000.0 as value
from usajobs.CMP_FederalNlxCompanion
where metric = 'DEI term intensity'
  and corpus = 'USAJOBS'
union all
select
  month_start,
  'Green tasks' as signal,
  green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
from usajobs.AGGR_GreenByMonth_AgreementRetained
union all
select
  month_start,
  'STEM tasks' as signal,
  stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
from usajobs.AGGR_StemByMonth
union all
select
  month_start,
  'Strict AI codes' as signal,
  strict_ai_codes_per_1k_active_postings as value
from usajobs.AGGR_USAJobsAiScoreV2ByMonth
order by month_start, signal`;r.federal_policy_signals_data&&(r.federal_policy_signals_data instanceof Error?X.initialError=r.federal_policy_signals_data:X.initialData=r.federal_policy_signals_data,r.federal_policy_signals_columns&&(X.knownColumns=r.federal_policy_signals_columns));let vt,Je=!1;const we=ut.createReactive({callback:M=>{i(4,vt=M)},execFn:g},{id:"federal_policy_signals",...X});we(Y,{noResolve:Z,...X}),globalThis[Symbol.for("federal_policy_signals")]={get value(){return vt}};let oe={initialData:void 0,initialError:void 0},P=Q`select
  green_review_rows,
  green_retained_distinct_task_ids,
  green_raw_agreement_rate,
  green_cohen_kappa
from usajobs.AGGR_FederalPostingHeadline`,De=`select
  green_review_rows,
  green_retained_distinct_task_ids,
  green_raw_agreement_rate,
  green_cohen_kappa
from usajobs.AGGR_FederalPostingHeadline`;r.green_task_agreement_headline_data&&(r.green_task_agreement_headline_data instanceof Error?oe.initialError=r.green_task_agreement_headline_data:oe.initialData=r.green_task_agreement_headline_data,r.green_task_agreement_headline_columns&&(oe.knownColumns=r.green_task_agreement_headline_columns));let Ue,_e=!1;const yt=ut.createReactive({callback:M=>{i(5,Ue=M)},execFn:g},{id:"green_task_agreement_headline",...oe});yt(De,{noResolve:P,...oe}),globalThis[Symbol.for("green_task_agreement_headline")]={get value(){return Ue}};let ue={initialData:void 0,initialError:void 0},z=Q`select
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  error_n,
  pass_rate
from usajobs.AGGR_SonnetGptGreenTasks_Summary
order by agreement_group`,Ae=`select
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  error_n,
  pass_rate
from usajobs.AGGR_SonnetGptGreenTasks_Summary
order by agreement_group`;r.green_task_agreement_summary_data&&(r.green_task_agreement_summary_data instanceof Error?ue.initialError=r.green_task_agreement_summary_data:ue.initialData=r.green_task_agreement_summary_data,r.green_task_agreement_summary_columns&&(ue.knownColumns=r.green_task_agreement_summary_columns));let me,bt=!1;const Le=ut.createReactive({callback:M=>{i(6,me=M)},execFn:g},{id:"green_task_agreement_summary",...ue});Le(Ae,{noResolve:z,...ue}),globalThis[Symbol.for("green_task_agreement_summary")]={get value(){return me}};let ee={initialData:void 0,initialError:void 0},O=Q`with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
jan2025_baseline as (
  select
    signal,
    value as baseline_value
  from policy_signals
  where month_start = date '2025-01-01'
)
select
  p.month_start,
  p.signal,
  p.value / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join jan2025_baseline b using (signal)
order by p.month_start, p.signal`,Fe=`with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
jan2025_baseline as (
  select
    signal,
    value as baseline_value
  from policy_signals
  where month_start = date '2025-01-01'
)
select
  p.month_start,
  p.signal,
  p.value / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join jan2025_baseline b using (signal)
order by p.month_start, p.signal`;r.federal_policy_signals_indexed_jan2025_data&&(r.federal_policy_signals_indexed_jan2025_data instanceof Error?ee.initialError=r.federal_policy_signals_indexed_jan2025_data:ee.initialData=r.federal_policy_signals_indexed_jan2025_data,r.federal_policy_signals_indexed_jan2025_columns&&(ee.knownColumns=r.federal_policy_signals_indexed_jan2025_columns));let He,de=!1;const wt=ut.createReactive({callback:M=>{i(7,He=M)},execFn:g},{id:"federal_policy_signals_indexed_jan2025",...ee});return wt(Fe,{noResolve:O,...ee}),globalThis[Symbol.for("federal_policy_signals_indexed_jan2025")]={get value(){return He}},Pa(()=>{ps.set(!1)}),_.$$set=M=>{"data"in M&&i(8,u=M.data)},_.$$.update=()=>{_.$$.dirty[0]&256&&i(9,{data:r={},customFormattingSettings:p,__db:R}=u,r),_.$$.dirty[0]&512&&gs.set(Object.keys(r).length>0),_.$$.dirty[1]&2048&&t.params,_.$$.dirty[0]&15360&&(h||!se?h||(ct(x,{noResolve:h,...$}),i(13,se=!0)):ct(x,{noResolve:h})),_.$$.dirty[0]&245760&&(ge||!ne?ge||(Be(W,{noResolve:ge,...V}),i(17,ne=!0)):Be(W,{noResolve:ge})),_.$$.dirty[0]&3932160&&(K||!ft?K||(le(Se,{noResolve:K,...E}),i(21,ft=!0)):le(Se,{noResolve:K})),_.$$.dirty[0]&62914560&&(N||!ht?N||(Ce(be,{noResolve:N,...fe}),i(25,ht=!0)):Ce(be,{noResolve:N})),_.$$.dirty[0]&1006632960&&(Z||!Je?Z||(we(Y,{noResolve:Z,...X}),i(29,Je=!0)):we(Y,{noResolve:Z})),_.$$.dirty[0]&1073741824|_.$$.dirty[1]&7&&(P||!_e?P||(yt(De,{noResolve:P,...oe}),i(33,_e=!0)):yt(De,{noResolve:P})),_.$$.dirty[1]&120&&(z||!bt?z||(Le(Ae,{noResolve:z,...ue}),i(37,bt=!0)):Le(Ae,{noResolve:z})),_.$$.dirty[1]&1920&&(O||!de?O||(wt(Fe,{noResolve:O,...ee}),i(41,de=!0)):wt(Fe,{noResolve:O}))},i(11,h=Q`select *
from usajobs.AGGR_FederalPostingHeadline`),i(12,x=`select *
from usajobs.AGGR_FederalPostingHeadline`),i(15,ge=Q`with latest as (
  select
    signal,
    index_value / 100.0 as latest_ratio,
    row_number() over (partition by signal order by month_start desc) as rn
  from (with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
biden_baseline as (
  select
    signal,
    avg(value) as baseline_value
  from policy_signals
  where month_start between date '2021-02-01' and date '2025-01-01'
  group by 1
)
select
  p.month_start,
  p.signal,
  p.value * 100.0 / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join biden_baseline b using (signal)
order by p.month_start, p.signal)
)
select
  max(case when signal = 'DEI Keywords' then latest_ratio end) as dei_latest_ratio,
  max(case when signal = 'AI keywords' then latest_ratio end) as ai_keywords_latest_ratio,
  max(case when signal = 'Strict AI codes' then latest_ratio end) as strict_ai_latest_ratio,
  max(case when signal = 'Lenient AIMatch' then latest_ratio end) as lenient_ai_latest_ratio
from latest
where rn = 1`),i(16,W=`with latest as (
  select
    signal,
    index_value / 100.0 as latest_ratio,
    row_number() over (partition by signal order by month_start desc) as rn
  from (with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
biden_baseline as (
  select
    signal,
    avg(value) as baseline_value
  from policy_signals
  where month_start between date '2021-02-01' and date '2025-01-01'
  group by 1
)
select
  p.month_start,
  p.signal,
  p.value * 100.0 / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join biden_baseline b using (signal)
order by p.month_start, p.signal)
)
select
  max(case when signal = 'DEI Keywords' then latest_ratio end) as dei_latest_ratio,
  max(case when signal = 'AI keywords' then latest_ratio end) as ai_keywords_latest_ratio,
  max(case when signal = 'Strict AI codes' then latest_ratio end) as strict_ai_latest_ratio,
  max(case when signal = 'Lenient AIMatch' then latest_ratio end) as lenient_ai_latest_ratio
from latest
where rn = 1`),i(19,K=Q`with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
biden_baseline as (
  select
    signal,
    avg(value) as baseline_value
  from policy_signals
  where month_start between date '2021-02-01' and date '2025-01-01'
  group by 1
)
select
  p.month_start,
  p.signal,
  p.value * 100.0 / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join biden_baseline b using (signal)
order by p.month_start, p.signal`),i(20,Se=`with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
biden_baseline as (
  select
    signal,
    avg(value) as baseline_value
  from policy_signals
  where month_start between date '2021-02-01' and date '2025-01-01'
  group by 1
)
select
  p.month_start,
  p.signal,
  p.value * 100.0 / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join biden_baseline b using (signal)
order by p.month_start, p.signal`),i(23,N=Q`select
  signal,
  max(case when month_start = date '2025-01-01' then index_value end) as jan_2025,
  max(case when month_start = date '2025-02-01' then index_value end) as feb_2025,
  min(case when month_start >= date '2025-02-01' then index_value end) as post_eo_min,
  max(case when rn_latest = 1 then index_value end) as latest
from (
  select
    *,
    row_number() over (partition by signal order by month_start desc) as rn_latest
  from (with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
biden_baseline as (
  select
    signal,
    avg(value) as baseline_value
  from policy_signals
  where month_start between date '2021-02-01' and date '2025-01-01'
  group by 1
)
select
  p.month_start,
  p.signal,
  p.value * 100.0 / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join biden_baseline b using (signal)
order by p.month_start, p.signal)
)
group by signal
order by
  case signal
    when 'DEI Keywords' then 1
    when 'AI keywords' then 2
    when 'Strict AI codes' then 3
    when 'Lenient AIMatch' then 4
    when 'Green tasks' then 5
    when 'STEM tasks' then 6
    else 7
  end`),i(24,be=`select
  signal,
  max(case when month_start = date '2025-01-01' then index_value end) as jan_2025,
  max(case when month_start = date '2025-02-01' then index_value end) as feb_2025,
  min(case when month_start >= date '2025-02-01' then index_value end) as post_eo_min,
  max(case when rn_latest = 1 then index_value end) as latest
from (
  select
    *,
    row_number() over (partition by signal order by month_start desc) as rn_latest
  from (with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
biden_baseline as (
  select
    signal,
    avg(value) as baseline_value
  from policy_signals
  where month_start between date '2021-02-01' and date '2025-01-01'
  group by 1
)
select
  p.month_start,
  p.signal,
  p.value * 100.0 / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join biden_baseline b using (signal)
order by p.month_start, p.signal)
)
group by signal
order by
  case signal
    when 'DEI Keywords' then 1
    when 'AI keywords' then 2
    when 'Strict AI codes' then 3
    when 'Lenient AIMatch' then 4
    when 'Green tasks' then 5
    when 'STEM tasks' then 6
    else 7
  end`),i(27,Z=Q`select
  month_start,
  'DEI Keywords' as signal,
  value * 1000.0 as value
from usajobs.CMP_FederalNlxCompanion
where metric = 'DEI term intensity'
  and corpus = 'USAJOBS'
union all
select
  month_start,
  'Green tasks' as signal,
  green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
from usajobs.AGGR_GreenByMonth_AgreementRetained
union all
select
  month_start,
  'STEM tasks' as signal,
  stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
from usajobs.AGGR_StemByMonth
union all
select
  month_start,
  'Strict AI codes' as signal,
  strict_ai_codes_per_1k_active_postings as value
from usajobs.AGGR_USAJobsAiScoreV2ByMonth
order by month_start, signal`),i(28,Y=`select
  month_start,
  'DEI Keywords' as signal,
  value * 1000.0 as value
from usajobs.CMP_FederalNlxCompanion
where metric = 'DEI term intensity'
  and corpus = 'USAJOBS'
union all
select
  month_start,
  'Green tasks' as signal,
  green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
from usajobs.AGGR_GreenByMonth_AgreementRetained
union all
select
  month_start,
  'STEM tasks' as signal,
  stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
from usajobs.AGGR_StemByMonth
union all
select
  month_start,
  'Strict AI codes' as signal,
  strict_ai_codes_per_1k_active_postings as value
from usajobs.AGGR_USAJobsAiScoreV2ByMonth
order by month_start, signal`),i(31,P=Q`select
  green_review_rows,
  green_retained_distinct_task_ids,
  green_raw_agreement_rate,
  green_cohen_kappa
from usajobs.AGGR_FederalPostingHeadline`),i(32,De=`select
  green_review_rows,
  green_retained_distinct_task_ids,
  green_raw_agreement_rate,
  green_cohen_kappa
from usajobs.AGGR_FederalPostingHeadline`),i(35,z=Q`select
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  error_n,
  pass_rate
from usajobs.AGGR_SonnetGptGreenTasks_Summary
order by agreement_group`),i(36,Ae=`select
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  error_n,
  pass_rate
from usajobs.AGGR_SonnetGptGreenTasks_Summary
order by agreement_group`),i(39,O=Q`with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
jan2025_baseline as (
  select
    signal,
    value as baseline_value
  from policy_signals
  where month_start = date '2025-01-01'
)
select
  p.month_start,
  p.signal,
  p.value / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join jan2025_baseline b using (signal)
order by p.month_start, p.signal`),i(40,Fe=`with policy_signals as (
  select
    month_start,
    'DEI Keywords' as signal,
    value * 1000.0 as value
  from usajobs.CMP_FederalNlxCompanion
  where metric = 'DEI term intensity'
    and corpus = 'USAJOBS'
  union all
  select
    month_start,
    'Green tasks' as signal,
    green_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_GreenByMonth_AgreementRetained
  union all
  select
    month_start,
    'STEM tasks' as signal,
    stem_task_mentions * 1000.0 / nullif(n_postings, 0) as value
  from usajobs.AGGR_StemByMonth
  union all
  select
    month_start,
    'Strict AI codes' as signal,
    strict_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'Lenient AIMatch' as signal,
    lenient_ai_codes_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiScoreV2ByMonth
  union all
  select
    month_start,
    'AI keywords' as signal,
    any_ai_keyword_per_1k_active_postings as value
  from usajobs.AGGR_USAJobsAiKeywordByActiveMonth
),
jan2025_baseline as (
  select
    signal,
    value as baseline_value
  from policy_signals
  where month_start = date '2025-01-01'
)
select
  p.month_start,
  p.signal,
  p.value / nullif(b.baseline_value, 0) as index_value
from policy_signals p
inner join jan2025_baseline b using (signal)
order by p.month_start, p.signal`),[q,gt,ie,re,vt,Ue,me,He,u,r,$,h,x,se,V,ge,W,ne,E,K,Se,ft,fe,N,be,ht,X,Z,Y,Je,oe,P,De,_e,ue,z,Ae,bt,ee,O,Fe,de,t]}class Hs extends _s{constructor(s){super(),us(this,s,Is,Ms,as,{data:8},null,[-1,-1])}}export{Hs as component};
