import{s as ui,d as l,i as m,a as z,b as g,c as p,h as fi,e as T,f as It,g as L,j as qt,k as d,l as C,m as Wt,n as pi,o as di,p as bi,q as ki,r as xe,t as $i,u as gi}from"../chunks/scheduler.TmfZfN_X.js";import{S as vi,i as hi,d as x,t as $,a as b,c as Qe,m as y,b as w,e as A,g as ze}from"../chunks/index.CKLTamEB.js";import{D as At,C as H}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.CoVGfpJt.js";import{w as xi}from"../chunks/entry.P1aHOFFb.js";import{e as yi,s as wi,Q as Ye,p as Ai,a as Zt,r as ei,C as Ii}from"../chunks/inferColumnTypes.D_Qc-VWF.js";import{h as ee}from"../chunks/setTrackProxy.Cyfckp0w.js";import{D as ti}from"../chunks/Dropdown.Cfk6Jae5.js";import{p as Ti}from"../chunks/stores.DMXyXr0C.js";import{Q as Ke}from"../chunks/QueryViewer.BWmGPj4w.js";import{L as ii}from"../chunks/LineChart.CCZITCPP.js";import{S as Ci}from"../chunks/ScatterPlot.B7pCmEhm.js";import{p as Si}from"../chunks/profile.BW8tN6E9.js";function Mi(u){let i,r=M.title+"",t;return{c(){i=C("h1"),t=gi(r),this.h()},l(o){i=T(o,"H1",{class:!0});var c=qt(i);t=$i(c,r),c.forEach(l),this.h()},h(){g(i,"class","title")},m(o,c){m(o,i,c),z(i,t)},p:xe,d(o){o&&l(i)}}}function Ri(u){return{c(){this.h()},l(i){this.h()},h(){document.title="Evidence"},m:xe,p:xe,d:xe}}function ji(u){let i,r,t,o,c;return document.title=i=M.title,{c(){r=d(),t=C("meta"),o=d(),c=C("meta"),this.h()},l(s){r=p(s),t=T(s,"META",{property:!0,content:!0}),o=p(s),c=T(s,"META",{name:!0,content:!0}),this.h()},h(){var s,f;g(t,"property","og:title"),g(t,"content",((s=M.og)==null?void 0:s.title)??M.title),g(c,"name","twitter:title"),g(c,"content",((f=M.og)==null?void 0:f.title)??M.title)},m(s,f){m(s,r,f),m(s,t,f),m(s,o,f),m(s,c,f)},p(s,f){f&0&&i!==(i=M.title)&&(document.title=i)},d(s){s&&(l(r),l(t),l(o),l(c))}}}function Ni(u){var c,s;let i,r,t=(M.description||((c=M.og)==null?void 0:c.description))&&Li(),o=((s=M.og)==null?void 0:s.image)&&Hi();return{c(){t&&t.c(),i=d(),o&&o.c(),r=It()},l(f){t&&t.l(f),i=p(f),o&&o.l(f),r=It()},m(f,I){t&&t.m(f,I),m(f,i,I),o&&o.m(f,I),m(f,r,I)},p(f,I){var k,R;(M.description||(k=M.og)!=null&&k.description)&&t.p(f,I),(R=M.og)!=null&&R.image&&o.p(f,I)},d(f){f&&(l(i),l(r)),t&&t.d(f),o&&o.d(f)}}}function Li(u){let i,r,t,o,c;return{c(){i=C("meta"),r=d(),t=C("meta"),o=d(),c=C("meta"),this.h()},l(s){i=T(s,"META",{name:!0,content:!0}),r=p(s),t=T(s,"META",{property:!0,content:!0}),o=p(s),c=T(s,"META",{name:!0,content:!0}),this.h()},h(){var s,f,I;g(i,"name","description"),g(i,"content",M.description??((s=M.og)==null?void 0:s.description)),g(t,"property","og:description"),g(t,"content",((f=M.og)==null?void 0:f.description)??M.description),g(c,"name","twitter:description"),g(c,"content",((I=M.og)==null?void 0:I.description)??M.description)},m(s,f){m(s,i,f),m(s,r,f),m(s,t,f),m(s,o,f),m(s,c,f)},p:xe,d(s){s&&(l(i),l(r),l(t),l(o),l(c))}}}function Hi(u){let i,r,t;return{c(){i=C("meta"),r=d(),t=C("meta"),this.h()},l(o){i=T(o,"META",{property:!0,content:!0}),r=p(o),t=T(o,"META",{name:!0,content:!0}),this.h()},h(){var o,c;g(i,"property","og:image"),g(i,"content",Zt((o=M.og)==null?void 0:o.image)),g(t,"name","twitter:image"),g(t,"content",Zt((c=M.og)==null?void 0:c.image))},m(o,c){m(o,i,c),m(o,r,c),m(o,t,c)},p:xe,d(o){o&&(l(i),l(r),l(t))}}}function ai(u){let i,r;return i=new Ke({props:{queryID:"ai_rank_measure_options",queryResult:u[0]}}),{c(){A(i.$$.fragment)},l(t){w(i.$$.fragment,t)},m(t,o){y(i,t,o),r=!0},p(t,o){const c={};o[0]&1&&(c.queryResult=t[0]),i.$set(c)},i(t){r||(b(i.$$.fragment,t),r=!0)},o(t){$(i.$$.fragment,t),r=!1},d(t){x(i,t)}}}function ri(u){let i,r;return i=new Ke({props:{queryID:"btos_sector_benchmark",queryResult:u[1]}}),{c(){A(i.$$.fragment)},l(t){w(i.$$.fragment,t)},m(t,o){y(i,t,o),r=!0},p(t,o){const c={};o[0]&2&&(c.queryResult=t[1]),i.$set(c)},i(t){r||(b(i.$$.fragment,t),r=!0)},o(t){$(i.$$.fragment,t),r=!1},d(t){x(i,t)}}}function si(u){let i,r;return i=new Ke({props:{queryID:"btos_ai_benchmark",queryResult:u[2]}}),{c(){A(i.$$.fragment)},l(t){w(i.$$.fragment,t)},m(t,o){y(i,t,o),r=!0},p(t,o){const c={};o[0]&4&&(c.queryResult=t[2]),i.$set(c)},i(t){r||(b(i.$$.fragment,t),r=!0)},o(t){$(i.$$.fragment,t),r=!1},d(t){x(i,t)}}}function qi(u){let i,r,t,o,c,s,f,I,k,R;return i=new H({props:{id:"metric",title:"NLx measure"}}),t=new H({props:{id:"spearman_rho",title:"Spearman rho",fmt:"0.000"}}),c=new H({props:{id:"spearman_p",title:"p",fmt:"0.0000"}}),f=new H({props:{id:"pearson_r",title:"Pearson r",fmt:"0.000"}}),k=new H({props:{id:"pearson_p",title:"p",fmt:"0.0000"}}),{c(){A(i.$$.fragment),r=d(),A(t.$$.fragment),o=d(),A(c.$$.fragment),s=d(),A(f.$$.fragment),I=d(),A(k.$$.fragment)},l(_){w(i.$$.fragment,_),r=p(_),w(t.$$.fragment,_),o=p(_),w(c.$$.fragment,_),s=p(_),w(f.$$.fragment,_),I=p(_),w(k.$$.fragment,_)},m(_,h){y(i,_,h),m(_,r,h),y(t,_,h),m(_,o,h),y(c,_,h),m(_,s,h),y(f,_,h),m(_,I,h),y(k,_,h),R=!0},p:xe,i(_){R||(b(i.$$.fragment,_),b(t.$$.fragment,_),b(c.$$.fragment,_),b(f.$$.fragment,_),b(k.$$.fragment,_),R=!0)},o(_){$(i.$$.fragment,_),$(t.$$.fragment,_),$(c.$$.fragment,_),$(f.$$.fragment,_),$(k.$$.fragment,_),R=!1},d(_){_&&(l(r),l(o),l(s),l(I)),x(i,_),x(t,_),x(c,_),x(f,_),x(k,_)}}}function Ei(u){let i,r,t,o,c,s,f,I,k,R;return i=new H({props:{id:"ind2",title:"NAICS-2"}}),t=new H({props:{id:"btos_ai_share",title:"BTOS AI use",fmt:"0.0%"}}),c=new H({props:{id:"nlx_avg_n_strict",title:"NLx strict",fmt:"0.000"}}),f=new H({props:{id:"nlx_avg_ai_score_v2",title:"Mean AI score",fmt:"0.000"}}),k=new H({props:{id:"nlx_jobs",title:"NLx jobs",fmt:"#,##0"}}),{c(){A(i.$$.fragment),r=d(),A(t.$$.fragment),o=d(),A(c.$$.fragment),s=d(),A(f.$$.fragment),I=d(),A(k.$$.fragment)},l(_){w(i.$$.fragment,_),r=p(_),w(t.$$.fragment,_),o=p(_),w(c.$$.fragment,_),s=p(_),w(f.$$.fragment,_),I=p(_),w(k.$$.fragment,_)},m(_,h){y(i,_,h),m(_,r,h),y(t,_,h),m(_,o,h),y(c,_,h),m(_,s,h),y(f,_,h),m(_,I,h),y(k,_,h),R=!0},p:xe,i(_){R||(b(i.$$.fragment,_),b(t.$$.fragment,_),b(c.$$.fragment,_),b(f.$$.fragment,_),b(k.$$.fragment,_),R=!0)},o(_){$(i.$$.fragment,_),$(t.$$.fragment,_),$(c.$$.fragment,_),$(f.$$.fragment,_),$(k.$$.fragment,_),R=!1},d(_){_&&(l(r),l(o),l(s),l(I)),x(i,_),x(t,_),x(c,_),x(f,_),x(k,_)}}}function ni(u){let i,r;return i=new Ke({props:{queryID:"nlx_strict_ai_skill_share_trend",queryResult:u[3]}}),{c(){A(i.$$.fragment)},l(t){w(i.$$.fragment,t)},m(t,o){y(i,t,o),r=!0},p(t,o){const c={};o[0]&8&&(c.queryResult=t[3]),i.$set(c)},i(t){r||(b(i.$$.fragment,t),r=!0)},o(t){$(i.$$.fragment,t),r=!1},d(t){x(i,t)}}}function _i(u){let i,r;return i=new Ke({props:{queryID:"nlx_occ_ai_ranking",queryResult:u[4]}}),{c(){A(i.$$.fragment)},l(t){w(i.$$.fragment,t)},m(t,o){y(i,t,o),r=!0},p(t,o){const c={};o[0]&16&&(c.queryResult=t[4]),i.$set(c)},i(t){r||(b(i.$$.fragment,t),r=!0)},o(t){$(i.$$.fragment,t),r=!1},d(t){x(i,t)}}}function Oi(u){let i,r,t,o,c,s,f,I,k,R,_,h,j,E,N,q;return i=new H({props:{id:"selected_rank",title:"Rank",fmt:"0"}}),t=new H({props:{id:"occ8",title:"8-digit O*NET-SOC"}}),c=new H({props:{id:"soc_title",title:"Occupation",wrap:"true"}}),f=new H({props:{id:"active_jobs",title:"Monthly active jobs",fmt:"#,##0"}}),k=new H({props:{id:"mean_ai_score_v2",title:"Mean AI score v2",fmt:"0.000"}}),_=new H({props:{id:"strict_ai_codes_per_active_job",title:"Strict AI codes per MAJ",fmt:"0.000"}}),j=new H({props:{id:"lenient_ai_codes_per_active_job",title:"Lenient AI codes per MAJ",fmt:"0.000"}}),N=new H({props:{id:"composite_log_score",title:"Composite log score",fmt:"0.000"}}),{c(){A(i.$$.fragment),r=d(),A(t.$$.fragment),o=d(),A(c.$$.fragment),s=d(),A(f.$$.fragment),I=d(),A(k.$$.fragment),R=d(),A(_.$$.fragment),h=d(),A(j.$$.fragment),E=d(),A(N.$$.fragment)},l(a){w(i.$$.fragment,a),r=p(a),w(t.$$.fragment,a),o=p(a),w(c.$$.fragment,a),s=p(a),w(f.$$.fragment,a),I=p(a),w(k.$$.fragment,a),R=p(a),w(_.$$.fragment,a),h=p(a),w(j.$$.fragment,a),E=p(a),w(N.$$.fragment,a)},m(a,v){y(i,a,v),m(a,r,v),y(t,a,v),m(a,o,v),y(c,a,v),m(a,s,v),y(f,a,v),m(a,I,v),y(k,a,v),m(a,R,v),y(_,a,v),m(a,h,v),y(j,a,v),m(a,E,v),y(N,a,v),q=!0},p:xe,i(a){q||(b(i.$$.fragment,a),b(t.$$.fragment,a),b(c.$$.fragment,a),b(f.$$.fragment,a),b(k.$$.fragment,a),b(_.$$.fragment,a),b(j.$$.fragment,a),b(N.$$.fragment,a),q=!0)},o(a){$(i.$$.fragment,a),$(t.$$.fragment,a),$(c.$$.fragment,a),$(f.$$.fragment,a),$(k.$$.fragment,a),$(_.$$.fragment,a),$(j.$$.fragment,a),$(N.$$.fragment,a),q=!1},d(a){a&&(l(r),l(o),l(s),l(I),l(R),l(h),l(E)),x(i,a),x(t,a),x(c,a),x(f,a),x(k,a),x(_,a),x(j,a),x(N,a)}}}function li(u){let i,r;return i=new Ke({props:{queryID:"nlx_occ_ai_options",queryResult:u[5]}}),{c(){A(i.$$.fragment)},l(t){w(i.$$.fragment,t)},m(t,o){y(i,t,o),r=!0},p(t,o){const c={};o[0]&32&&(c.queryResult=t[5]),i.$set(c)},i(t){r||(b(i.$$.fragment,t),r=!0)},o(t){$(i.$$.fragment,t),r=!1},d(t){x(i,t)}}}function oi(u){let i,r;return i=new Ke({props:{queryID:"nlx_selected_occ_ai_trend",queryResult:u[6]}}),{c(){A(i.$$.fragment)},l(t){w(i.$$.fragment,t)},m(t,o){y(i,t,o),r=!0},p(t,o){const c={};o[0]&64&&(c.queryResult=t[6]),i.$set(c)},i(t){r||(b(i.$$.fragment,t),r=!0)},o(t){$(i.$$.fragment,t),r=!1},d(t){x(i,t)}}}function ci(u){let i,r;return i=new Ke({props:{queryID:"nlx_industry_ai_ranking",queryResult:u[7]}}),{c(){A(i.$$.fragment)},l(t){w(i.$$.fragment,t)},m(t,o){y(i,t,o),r=!0},p(t,o){const c={};o[0]&128&&(c.queryResult=t[7]),i.$set(c)},i(t){r||(b(i.$$.fragment,t),r=!0)},o(t){$(i.$$.fragment,t),r=!1},d(t){x(i,t)}}}function Di(u){let i,r,t,o,c,s,f,I,k,R,_,h,j,E,N,q;return i=new H({props:{id:"selected_rank",title:"Rank",fmt:"0"}}),t=new H({props:{id:"ind6",title:"NAICS-6"}}),c=new H({props:{id:"naics_name",title:"Industry",wrap:"true"}}),f=new H({props:{id:"active_jobs",title:"Monthly active jobs",fmt:"#,##0"}}),k=new H({props:{id:"mean_ai_score_v2",title:"Mean AI score v2",fmt:"0.000"}}),_=new H({props:{id:"strict_ai_codes_per_active_job",title:"Strict AI codes per MAJ",fmt:"0.000"}}),j=new H({props:{id:"lenient_ai_codes_per_active_job",title:"Lenient AI codes per MAJ",fmt:"0.000"}}),N=new H({props:{id:"composite_log_score",title:"Composite log score",fmt:"0.000"}}),{c(){A(i.$$.fragment),r=d(),A(t.$$.fragment),o=d(),A(c.$$.fragment),s=d(),A(f.$$.fragment),I=d(),A(k.$$.fragment),R=d(),A(_.$$.fragment),h=d(),A(j.$$.fragment),E=d(),A(N.$$.fragment)},l(a){w(i.$$.fragment,a),r=p(a),w(t.$$.fragment,a),o=p(a),w(c.$$.fragment,a),s=p(a),w(f.$$.fragment,a),I=p(a),w(k.$$.fragment,a),R=p(a),w(_.$$.fragment,a),h=p(a),w(j.$$.fragment,a),E=p(a),w(N.$$.fragment,a)},m(a,v){y(i,a,v),m(a,r,v),y(t,a,v),m(a,o,v),y(c,a,v),m(a,s,v),y(f,a,v),m(a,I,v),y(k,a,v),m(a,R,v),y(_,a,v),m(a,h,v),y(j,a,v),m(a,E,v),y(N,a,v),q=!0},p:xe,i(a){q||(b(i.$$.fragment,a),b(t.$$.fragment,a),b(c.$$.fragment,a),b(f.$$.fragment,a),b(k.$$.fragment,a),b(_.$$.fragment,a),b(j.$$.fragment,a),b(N.$$.fragment,a),q=!0)},o(a){$(i.$$.fragment,a),$(t.$$.fragment,a),$(c.$$.fragment,a),$(f.$$.fragment,a),$(k.$$.fragment,a),$(_.$$.fragment,a),$(j.$$.fragment,a),$(N.$$.fragment,a),q=!1},d(a){a&&(l(r),l(o),l(s),l(I),l(R),l(h),l(E)),x(i,a),x(t,a),x(c,a),x(f,a),x(k,a),x(_,a),x(j,a),x(N,a)}}}function Fi(u){let i,r,t,o,c,s,f="<strong>NLx data disclaimer.</strong> The National Labor Exchange (NLx) Data Trust bears no responsibility for the analyses or interpretations of the data presented here.",I,k,R="AIMatch aggregates from the NLx corpus summarize occupation and industry exposure to AI-coded task and skill language.",_,h,j="<strong>How to read this page.</strong> This is an exploratory profile of AI intensity in national NLx postings. Strict AI codes are narrower; lenient and composite measures are broader. Rankings are most useful for larger occupation or industry cells and for score differences above the validation floor. The occupation and industry ranking tables require at least 30,000 active jobs from January 2021 through September 2025.",E,N,q,a,v,de="<strong>Validation note.</strong> Posting-level LLM validation supports ordering for score gaps of about 0.05 or larger, while aggregate rankings are most defensible for large cells. The external benchmark below compares broad NAICS-2 sector averages from NLx with Census BTOS reported firm AI use; it does not validate every detailed industry ranking.",be,ke,$e,ne,ge="External benchmark: NLx AI intensity vs. Census BTOS firm AI use",_e,te,it='<a href="#figure-nai-1-btos-firm-ai-use-vs-nlx-strict-ai-intensity">Figure NAI-1. BTOS Firm AI Use vs. NLx Strict AI Intensity</a>',Me,le,oe,X,Re="Data source: <code>inputs/crosswalks/ai_intensity_aggregation_btos_benchmark.csv</code>, exposed in the dashboard as <code>jaat.AGGR_AiIntensityAggregationBtosBenchmark</code>. This is a cross-sectional convergent-validity check: latest Census BTOS sector AI-use rates are compared with NLx NAICS-2 AIMatch averages from the public NLx aggregate ending in September 2025. A time-series validation is not possible in this public package because nonmissing BTOS responses to the current AI-use question begin in November 2025, after the NLx public aggregate ends.",je,re,at='<a href="#table-nai-1-btos-correlation-summary">Table NAI-1. BTOS Correlation Summary</a>',ce,W,ve,me,rt="The strict-code measure has the strongest rank agreement with BTOS firm AI use. Mean AI score also moves in the expected direction, but less strongly.",Ne,Q,ie,Le="Show benchmark source rows",Xe,ue,st='<a href="#table-nai-2-btos-sector-benchmark-rows">Table NAI-2. BTOS Sector Benchmark Rows</a>',pe,Z,he,se,nt='<a href="#strict-ai-skill-posting-share">Strict AI Skill Posting Share</a>',He,ae,Y,qe='<a href="#figure-nai-2-strict-ai-skill-code-matches-as-a-share-of-active-postings">Figure NAI-2. Strict AI Skill Code Matches as a Share of Active Postings</a>',Ee,fe,Oe,S,mt="This series uses strict-score AIMatch AI skill-code matches divided by active postings in the NLx corpus. It is not a de-duplicated count of postings with any strict code, because a posting can contribute more than one strict AI code.",ut,ye,Et='<a href="#occupation-ai-rankings">Occupation AI Rankings</a>',ft,_t,we,Ot='<a href="#table-1-occupation-aimatch-rankings-nlx-corpus-minimum-30000-active-jobs">Table 1. Occupation AIMatch rankings (NLx corpus; minimum 30,000 active jobs)</a>',pt,De,Dt="<strong>Terms.</strong> Rank follows the dropdown measure. Mean AI score is the average statement-level AI intensity score. Strict and lenient columns are AI-code matches per monthly active job (MAJ). Composite log score is the precomputed broad AIMatch index in the NLx aggregate files: it combines logged versions of mean AI score, strict-code matches, and lenient-code matches. The dashboard averages monthly cell scores with active-job weights before ranking.",dt,Fe,bt,lt,Ge,kt,ot,Ae,Ft='<a href="#figure-nai-3-selected-occupation-ai-score-trend">Figure NAI-3. Selected Occupation AI Score Trend</a>',$t,Be,gt,Pe,Gt="The chart shows month-to-month changes in the selected occupation’s AI score.",vt,O,We,Bt="Show exploratory NAICS-6 industry rankings",Tt,Ze,Pt="These detailed industry rows are retained as a lead list only. The BTOS benchmark supports broad sector ordering, while NAICS-6 cells can look odd because of industry coding, posting mix, and the way AI language is distributed across employers.",Ct,ht,Ue,Ut='<a href="#table-2-six-digit-industry-aimatch-rankings-nlx-corpus-minimum-30000-active-jobs">Table 2. Six-digit industry AIMatch rankings (NLx corpus; minimum 30,000 active jobs)</a>',St,et,Vt="<strong>Terms.</strong> Industry rankings use the same selected measure and column definitions as the occupation table, with NAICS-6 industries replacing O*NET-SOC occupations.",Mt,tt,Jt="Use the NAICS-6 table as an exploratory lead list. The external BTOS check above validates broad sector ordering, while detailed industry coding and compositional differences can make individual six-digit industries noisy.",Rt,Ve,xt,Ie,Qt='<a href="#evidence-path">Evidence Path</a>',yt,Je,zt='The AI-score validation is summarized in <a href="/us-lmi/building-new-maps" class="markdown">Finding Emerging Skills</a>. Reproducibility checks and public artifacts are listed in <a href="/us-lmi/methodology/audit-trail" class="markdown">Agreement And Audit Trail</a>.',wt,Te=typeof M<"u"&&M.title&&M.hide_title!==!0&&Mi();function mi(e,n){return typeof M<"u"&&M.title?ji:Ri}let ct=mi()(u),Ce=typeof M=="object"&&Ni(),D=u[0]&&ai(u);q=new ti({props:{data:u[0],name:"ai_rank_measure",value:"measure",label:"label",defaultValue:"strict_ai_rank",title:"Ranking measure"}});let F=u[1]&&ri(u),G=u[2]&&si(u);le=new Ci({props:{data:u[1],x:"btos_ai_share",y:"nlx_avg_n_strict",xAxisTitle:"Census BTOS firms reporting AI use",yAxisTitle:"NLx strict AI codes per active job",xFmt:"0.0%",yFmt:"0.000",pointSize:"8",chartAreaHeight:"360",title:"BTOS firm AI use vs. NLx strict AI intensity by NAICS-2 sector",subtitle:"Latest BTOS sector wave vs. NLx Ind2 averages through Sep. 2025; Spearman rho = 0.752, p = 0.0005; n = 17 sectors"}}),W=new At({props:{data:u[2],rowsPerPage:"5",$$slots:{default:[qi]},$$scope:{ctx:u}}}),Z=new At({props:{data:u[1],rowsPerPage:"17",$$slots:{default:[Ei]},$$scope:{ctx:u}}});let B=u[3]&&ni(u);fe=new ii({props:{data:u[3],x:"month_start",y:"strict_ai_skill_code_matches_per_active_posting",yAxisTitle:"% of active postings",yFmt:"0.0%",title:"Strict AI skill code matches as % of active postings (NLx corpus)"}});let P=u[4]&&_i(u);Fe=new At({props:{data:u[4],rowsPerPage:"25",$$slots:{default:[Oi]},$$scope:{ctx:u}}});let U=u[5]&&li(u);Ge=new ti({props:{data:u[5],name:"nlx_ai_occ",value:"occ8",label:"soc_title",defaultValue:"15-2051.00",title:"Occupation AI trend"}});let V=u[6]&&oi(u);Be=new ii({props:{data:u[6],x:"month_start",y:"avg_ai_score_v2",yAxisTitle:"Average AI score v2",title:"Selected occupation AI score v2"}});let J=u[7]&&ci(u);return Ve=new At({props:{data:u[7],rowsPerPage:"25",$$slots:{default:[Di]},$$scope:{ctx:u}}}),{c(){Te&&Te.c(),i=d(),ct.c(),r=C("meta"),t=C("meta"),Ce&&Ce.c(),o=It(),c=d(),s=C("div"),s.innerHTML=f,I=d(),k=C("p"),k.textContent=R,_=d(),h=C("div"),h.innerHTML=j,E=d(),D&&D.c(),N=d(),A(q.$$.fragment),a=d(),v=C("div"),v.innerHTML=de,be=d(),F&&F.c(),ke=d(),G&&G.c(),$e=d(),ne=C("p"),ne.textContent=ge,_e=d(),te=C("h3"),te.innerHTML=it,Me=d(),A(le.$$.fragment),oe=d(),X=C("p"),X.innerHTML=Re,je=d(),re=C("h3"),re.innerHTML=at,ce=d(),A(W.$$.fragment),ve=d(),me=C("p"),me.textContent=rt,Ne=d(),Q=C("details"),ie=C("summary"),ie.textContent=Le,Xe=d(),ue=C("h3"),ue.innerHTML=st,pe=d(),A(Z.$$.fragment),he=d(),se=C("h2"),se.innerHTML=nt,He=d(),B&&B.c(),ae=d(),Y=C("h3"),Y.innerHTML=qe,Ee=d(),A(fe.$$.fragment),Oe=d(),S=C("p"),S.textContent=mt,ut=d(),ye=C("h2"),ye.innerHTML=Et,ft=d(),P&&P.c(),_t=d(),we=C("h3"),we.innerHTML=Ot,pt=d(),De=C("div"),De.innerHTML=Dt,dt=d(),A(Fe.$$.fragment),bt=d(),U&&U.c(),lt=d(),A(Ge.$$.fragment),kt=d(),V&&V.c(),ot=d(),Ae=C("h3"),Ae.innerHTML=Ft,$t=d(),A(Be.$$.fragment),gt=d(),Pe=C("p"),Pe.textContent=Gt,vt=d(),O=C("details"),We=C("summary"),We.textContent=Bt,Tt=d(),Ze=C("p"),Ze.textContent=Pt,Ct=d(),J&&J.c(),ht=d(),Ue=C("h3"),Ue.innerHTML=Ut,St=d(),et=C("div"),et.innerHTML=Vt,Mt=d(),tt=C("p"),tt.textContent=Jt,Rt=d(),A(Ve.$$.fragment),xt=d(),Ie=C("h2"),Ie.innerHTML=Qt,yt=d(),Je=C("p"),Je.innerHTML=zt,this.h()},l(e){Te&&Te.l(e),i=p(e);const n=fi("svelte-2igo1p",document.head);ct.l(n),r=T(n,"META",{name:!0,content:!0}),t=T(n,"META",{name:!0,content:!0}),Ce&&Ce.l(n),o=It(),n.forEach(l),c=p(e),s=T(e,"DIV",{class:!0,"data-svelte-h":!0}),L(s)!=="svelte-q7eegh"&&(s.innerHTML=f),I=p(e),k=T(e,"P",{class:!0,"data-svelte-h":!0}),L(k)!=="svelte-1hd50o4"&&(k.textContent=R),_=p(e),h=T(e,"DIV",{class:!0,"data-svelte-h":!0}),L(h)!=="svelte-x8qbr"&&(h.innerHTML=j),E=p(e),D&&D.l(e),N=p(e),w(q.$$.fragment,e),a=p(e),v=T(e,"DIV",{class:!0,"data-svelte-h":!0}),L(v)!=="svelte-1jjieb"&&(v.innerHTML=de),be=p(e),F&&F.l(e),ke=p(e),G&&G.l(e),$e=p(e),ne=T(e,"P",{class:!0,"data-svelte-h":!0}),L(ne)!=="svelte-19kfur8"&&(ne.textContent=ge),_e=p(e),te=T(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(te)!=="svelte-5qnb5y"&&(te.innerHTML=it),Me=p(e),w(le.$$.fragment,e),oe=p(e),X=T(e,"P",{class:!0,"data-svelte-h":!0}),L(X)!=="svelte-olgqsz"&&(X.innerHTML=Re),je=p(e),re=T(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(re)!=="svelte-mxq05o"&&(re.innerHTML=at),ce=p(e),w(W.$$.fragment,e),ve=p(e),me=T(e,"P",{class:!0,"data-svelte-h":!0}),L(me)!=="svelte-dg3jwd"&&(me.textContent=rt),Ne=p(e),Q=T(e,"DETAILS",{class:!0});var Se=qt(Q);ie=T(Se,"SUMMARY",{class:!0,"data-svelte-h":!0}),L(ie)!=="svelte-8w04d0"&&(ie.textContent=Le),Xe=p(Se),ue=T(Se,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(ue)!=="svelte-1lxyvmp"&&(ue.innerHTML=st),pe=p(Se),w(Z.$$.fragment,Se),Se.forEach(l),he=p(e),se=T(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(se)!=="svelte-1mtlon7"&&(se.innerHTML=nt),He=p(e),B&&B.l(e),ae=p(e),Y=T(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(Y)!=="svelte-1tv2lsx"&&(Y.innerHTML=qe),Ee=p(e),w(fe.$$.fragment,e),Oe=p(e),S=T(e,"P",{class:!0,"data-svelte-h":!0}),L(S)!=="svelte-2cdbgr"&&(S.textContent=mt),ut=p(e),ye=T(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(ye)!=="svelte-1jfxfdu"&&(ye.innerHTML=Et),ft=p(e),P&&P.l(e),_t=p(e),we=T(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(we)!=="svelte-bqotlt"&&(we.innerHTML=Ot),pt=p(e),De=T(e,"DIV",{class:!0,"data-svelte-h":!0}),L(De)!=="svelte-1i18mj5"&&(De.innerHTML=Dt),dt=p(e),w(Fe.$$.fragment,e),bt=p(e),U&&U.l(e),lt=p(e),w(Ge.$$.fragment,e),kt=p(e),V&&V.l(e),ot=p(e),Ae=T(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(Ae)!=="svelte-1d4n81h"&&(Ae.innerHTML=Ft),$t=p(e),w(Be.$$.fragment,e),gt=p(e),Pe=T(e,"P",{class:!0,"data-svelte-h":!0}),L(Pe)!=="svelte-jxnmk4"&&(Pe.textContent=Gt),vt=p(e),O=T(e,"DETAILS",{class:!0});var K=qt(O);We=T(K,"SUMMARY",{class:!0,"data-svelte-h":!0}),L(We)!=="svelte-4bmuwa"&&(We.textContent=Bt),Tt=p(K),Ze=T(K,"P",{class:!0,"data-svelte-h":!0}),L(Ze)!=="svelte-176rkfo"&&(Ze.textContent=Pt),Ct=p(K),J&&J.l(K),ht=p(K),Ue=T(K,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(Ue)!=="svelte-19xgyqz"&&(Ue.innerHTML=Ut),St=p(K),et=T(K,"DIV",{class:!0,"data-svelte-h":!0}),L(et)!=="svelte-11hxho"&&(et.innerHTML=Vt),Mt=p(K),tt=T(K,"P",{class:!0,"data-svelte-h":!0}),L(tt)!=="svelte-1ul62ia"&&(tt.textContent=Jt),Rt=p(K),w(Ve.$$.fragment,K),K.forEach(l),xt=p(e),Ie=T(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(Ie)!=="svelte-1uqwyny"&&(Ie.innerHTML=Qt),yt=p(e),Je=T(e,"P",{class:!0,"data-svelte-h":!0}),L(Je)!=="svelte-180aumr"&&(Je.innerHTML=zt),this.h()},h(){g(r,"name","twitter:card"),g(r,"content","summary_large_image"),g(t,"name","twitter:site"),g(t,"content","@evidence_dev"),g(s,"class","border-l-4 border-gray-500 bg-gray-50 px-4 py-3 my-4 text-sm text-gray-700"),g(k,"class","markdown"),g(h,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),g(v,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),g(ne,"class","text-sm font-semibold mt-4 mb-2"),g(te,"class","markdown"),g(te,"id","figure-nai-1-btos-firm-ai-use-vs-nlx-strict-ai-intensity"),g(X,"class","text-sm text-gray-600 mt-2"),g(re,"class","markdown"),g(re,"id","table-nai-1-btos-correlation-summary"),g(me,"class","text-sm text-gray-600 mt-2"),g(ie,"class","cursor-pointer font-semibold text-sm"),g(ue,"class","markdown"),g(ue,"id","table-nai-2-btos-sector-benchmark-rows"),g(Q,"class","border border-gray-200 rounded px-4 py-3 my-4"),g(se,"class","markdown"),g(se,"id","strict-ai-skill-posting-share"),g(Y,"class","markdown"),g(Y,"id","figure-nai-2-strict-ai-skill-code-matches-as-a-share-of-active-postings"),g(S,"class","text-sm text-gray-600 mt-2"),g(ye,"class","markdown"),g(ye,"id","occupation-ai-rankings"),g(we,"class","markdown"),g(we,"id","table-1-occupation-aimatch-rankings-nlx-corpus-minimum-30000-active-jobs"),g(De,"class","text-sm my-3"),g(Ae,"class","markdown"),g(Ae,"id","figure-nai-3-selected-occupation-ai-score-trend"),g(Pe,"class","text-sm text-gray-600 mt-2"),g(We,"class","cursor-pointer font-semibold text-sm"),g(Ze,"class","text-sm text-gray-600 mt-3"),g(Ue,"class","markdown"),g(Ue,"id","table-2-six-digit-industry-aimatch-rankings-nlx-corpus-minimum-30000-active-jobs"),g(et,"class","text-sm my-3"),g(tt,"class","text-sm text-gray-600 mt-2"),g(O,"class","border border-gray-200 rounded px-4 py-3 my-6"),g(Ie,"class","markdown"),g(Ie,"id","evidence-path"),g(Je,"class","markdown")},m(e,n){Te&&Te.m(e,n),m(e,i,n),ct.m(document.head,null),z(document.head,r),z(document.head,t),Ce&&Ce.m(document.head,null),z(document.head,o),m(e,c,n),m(e,s,n),m(e,I,n),m(e,k,n),m(e,_,n),m(e,h,n),m(e,E,n),D&&D.m(e,n),m(e,N,n),y(q,e,n),m(e,a,n),m(e,v,n),m(e,be,n),F&&F.m(e,n),m(e,ke,n),G&&G.m(e,n),m(e,$e,n),m(e,ne,n),m(e,_e,n),m(e,te,n),m(e,Me,n),y(le,e,n),m(e,oe,n),m(e,X,n),m(e,je,n),m(e,re,n),m(e,ce,n),y(W,e,n),m(e,ve,n),m(e,me,n),m(e,Ne,n),m(e,Q,n),z(Q,ie),z(Q,Xe),z(Q,ue),z(Q,pe),y(Z,Q,null),m(e,he,n),m(e,se,n),m(e,He,n),B&&B.m(e,n),m(e,ae,n),m(e,Y,n),m(e,Ee,n),y(fe,e,n),m(e,Oe,n),m(e,S,n),m(e,ut,n),m(e,ye,n),m(e,ft,n),P&&P.m(e,n),m(e,_t,n),m(e,we,n),m(e,pt,n),m(e,De,n),m(e,dt,n),y(Fe,e,n),m(e,bt,n),U&&U.m(e,n),m(e,lt,n),y(Ge,e,n),m(e,kt,n),V&&V.m(e,n),m(e,ot,n),m(e,Ae,n),m(e,$t,n),y(Be,e,n),m(e,gt,n),m(e,Pe,n),m(e,vt,n),m(e,O,n),z(O,We),z(O,Tt),z(O,Ze),z(O,Ct),J&&J.m(O,null),z(O,ht),z(O,Ue),z(O,St),z(O,et),z(O,Mt),z(O,tt),z(O,Rt),y(Ve,O,null),m(e,xt,n),m(e,Ie,n),m(e,yt,n),m(e,Je,n),wt=!0},p(e,n){typeof M<"u"&&M.title&&M.hide_title!==!0&&Te.p(e,n),ct.p(e,n),typeof M=="object"&&Ce.p(e,n),e[0]?D?(D.p(e,n),n[0]&1&&b(D,1)):(D=ai(e),D.c(),b(D,1),D.m(N.parentNode,N)):D&&(ze(),$(D,1,1,()=>{D=null}),Qe());const Se={};n[0]&1&&(Se.data=e[0]),q.$set(Se),e[1]?F?(F.p(e,n),n[0]&2&&b(F,1)):(F=ri(e),F.c(),b(F,1),F.m(ke.parentNode,ke)):F&&(ze(),$(F,1,1,()=>{F=null}),Qe()),e[2]?G?(G.p(e,n),n[0]&4&&b(G,1)):(G=si(e),G.c(),b(G,1),G.m($e.parentNode,$e)):G&&(ze(),$(G,1,1,()=>{G=null}),Qe());const K={};n[0]&2&&(K.data=e[1]),le.$set(K);const jt={};n[0]&4&&(jt.data=e[2]),n[1]&536870912&&(jt.$$scope={dirty:n,ctx:e}),W.$set(jt);const Nt={};n[0]&2&&(Nt.data=e[1]),n[1]&536870912&&(Nt.$$scope={dirty:n,ctx:e}),Z.$set(Nt),e[3]?B?(B.p(e,n),n[0]&8&&b(B,1)):(B=ni(e),B.c(),b(B,1),B.m(ae.parentNode,ae)):B&&(ze(),$(B,1,1,()=>{B=null}),Qe());const Yt={};n[0]&8&&(Yt.data=e[3]),fe.$set(Yt),e[4]?P?(P.p(e,n),n[0]&16&&b(P,1)):(P=_i(e),P.c(),b(P,1),P.m(_t.parentNode,_t)):P&&(ze(),$(P,1,1,()=>{P=null}),Qe());const Lt={};n[0]&16&&(Lt.data=e[4]),n[1]&536870912&&(Lt.$$scope={dirty:n,ctx:e}),Fe.$set(Lt),e[5]?U?(U.p(e,n),n[0]&32&&b(U,1)):(U=li(e),U.c(),b(U,1),U.m(lt.parentNode,lt)):U&&(ze(),$(U,1,1,()=>{U=null}),Qe());const Kt={};n[0]&32&&(Kt.data=e[5]),Ge.$set(Kt),e[6]?V?(V.p(e,n),n[0]&64&&b(V,1)):(V=oi(e),V.c(),b(V,1),V.m(ot.parentNode,ot)):V&&(ze(),$(V,1,1,()=>{V=null}),Qe());const Xt={};n[0]&64&&(Xt.data=e[6]),Be.$set(Xt),e[7]?J?(J.p(e,n),n[0]&128&&b(J,1)):(J=ci(e),J.c(),b(J,1),J.m(O,ht)):J&&(ze(),$(J,1,1,()=>{J=null}),Qe());const Ht={};n[0]&128&&(Ht.data=e[7]),n[1]&536870912&&(Ht.$$scope={dirty:n,ctx:e}),Ve.$set(Ht)},i(e){wt||(b(D),b(q.$$.fragment,e),b(F),b(G),b(le.$$.fragment,e),b(W.$$.fragment,e),b(Z.$$.fragment,e),b(B),b(fe.$$.fragment,e),b(P),b(Fe.$$.fragment,e),b(U),b(Ge.$$.fragment,e),b(V),b(Be.$$.fragment,e),b(J),b(Ve.$$.fragment,e),wt=!0)},o(e){$(D),$(q.$$.fragment,e),$(F),$(G),$(le.$$.fragment,e),$(W.$$.fragment,e),$(Z.$$.fragment,e),$(B),$(fe.$$.fragment,e),$(P),$(Fe.$$.fragment,e),$(U),$(Ge.$$.fragment,e),$(V),$(Be.$$.fragment,e),$(J),$(Ve.$$.fragment,e),wt=!1},d(e){e&&(l(i),l(c),l(s),l(I),l(k),l(_),l(h),l(E),l(N),l(a),l(v),l(be),l(ke),l($e),l(ne),l(_e),l(te),l(Me),l(oe),l(X),l(je),l(re),l(ce),l(ve),l(me),l(Ne),l(Q),l(he),l(se),l(He),l(ae),l(Y),l(Ee),l(Oe),l(S),l(ut),l(ye),l(ft),l(_t),l(we),l(pt),l(De),l(dt),l(bt),l(lt),l(kt),l(ot),l(Ae),l($t),l(gt),l(Pe),l(vt),l(O),l(xt),l(Ie),l(yt),l(Je)),Te&&Te.d(e),ct.d(e),l(r),l(t),Ce&&Ce.d(e),l(o),D&&D.d(e),x(q,e),F&&F.d(e),G&&G.d(e),x(le,e),x(W,e),x(Z),B&&B.d(e),x(fe,e),P&&P.d(e),x(Fe,e),U&&U.d(e),x(Ge,e),V&&V.d(e),x(Be,e),J&&J.d(),x(Ve)}}}const M={title:"AI Profiler"};function Gi(u,i,r){let t,o;Wt(u,Ti,S=>r(43,t=S)),Wt(u,ei,S=>r(48,o=S));let{data:c}=i,{data:s={},customFormattingSettings:f,__db:I,inputs:k}=c;pi(ei,o="99ca60645a6dca7f231bcd1a31620705",o);let R=yi(xi(k));di(R.subscribe(S=>r(10,k=S))),bi(Ii,{getCustomFormats:()=>f.customFormats||[]});const _=(S,mt)=>Si(I.query,S,{query_name:mt});wi(_),t.params,ki(()=>!0);let h={initialData:void 0,initialError:void 0},j=ee`select 'strict_ai_rank' as measure, 'Strict AI codes per active job' as label
union all
select 'composite_ai_rank' as measure, 'Composite log AI intensity' as label
union all
select 'ai_score_rank' as measure, 'Mean AI score v2' as label`,E=`select 'strict_ai_rank' as measure, 'Strict AI codes per active job' as label
union all
select 'composite_ai_rank' as measure, 'Composite log AI intensity' as label
union all
select 'ai_score_rank' as measure, 'Mean AI score v2' as label`;s.ai_rank_measure_options_data&&(s.ai_rank_measure_options_data instanceof Error?h.initialError=s.ai_rank_measure_options_data:h.initialData=s.ai_rank_measure_options_data,s.ai_rank_measure_options_columns&&(h.knownColumns=s.ai_rank_measure_options_columns));let N,q=!1;const a=Ye.createReactive({callback:S=>{r(0,N=S)},execFn:_},{id:"ai_rank_measure_options",...h});a(E,{noResolve:j,...h}),globalThis[Symbol.for("ai_rank_measure_options")]={get value(){return N}};let v={initialData:void 0,initialError:void 0},de=ee`select
  ind2,
  btos_ai_yes_pct / 100.0 as btos_ai_share,
  nlx_jobs,
  nlx_avg_ai_score_v2,
  nlx_avg_n_strict
from jaat.AGGR_AiIntensityAggregationBtosBenchmark
order by btos_ai_yes_pct desc`,be=`select
  ind2,
  btos_ai_yes_pct / 100.0 as btos_ai_share,
  nlx_jobs,
  nlx_avg_ai_score_v2,
  nlx_avg_n_strict
from jaat.AGGR_AiIntensityAggregationBtosBenchmark
order by btos_ai_yes_pct desc`;s.btos_sector_benchmark_data&&(s.btos_sector_benchmark_data instanceof Error?v.initialError=s.btos_sector_benchmark_data:v.initialData=s.btos_sector_benchmark_data,s.btos_sector_benchmark_columns&&(v.knownColumns=s.btos_sector_benchmark_columns));let ke,$e=!1;const ne=Ye.createReactive({callback:S=>{r(1,ke=S)},execFn:_},{id:"btos_sector_benchmark",...v});ne(be,{noResolve:de,...v}),globalThis[Symbol.for("btos_sector_benchmark")]={get value(){return ke}};let ge={initialData:void 0,initialError:void 0},_e=ee`select *
from (
  values
    ('Mean AI score', 0.5064, 0.0380, 0.5870, 0.0132),
    ('Strict AI count', 0.7517, 0.0005, 0.6486, 0.0049)
) as t(metric, spearman_rho, spearman_p, pearson_r, pearson_p)`,te=`select *
from (
  values
    ('Mean AI score', 0.5064, 0.0380, 0.5870, 0.0132),
    ('Strict AI count', 0.7517, 0.0005, 0.6486, 0.0049)
) as t(metric, spearman_rho, spearman_p, pearson_r, pearson_p)`;s.btos_ai_benchmark_data&&(s.btos_ai_benchmark_data instanceof Error?ge.initialError=s.btos_ai_benchmark_data:ge.initialData=s.btos_ai_benchmark_data,s.btos_ai_benchmark_columns&&(ge.knownColumns=s.btos_ai_benchmark_columns));let it,Me=!1;const le=Ye.createReactive({callback:S=>{r(2,it=S)},execFn:_},{id:"btos_ai_benchmark",...ge});le(te,{noResolve:_e,...ge}),globalThis[Symbol.for("btos_ai_benchmark")]={get value(){return it}};let oe={initialData:void 0,initialError:void 0},X=ee`select
  month_start,
  n_active_postings,
  strict_ai_skill_code_matches,
  strict_ai_skill_code_matches_per_active_posting
from nlx.AGGR_NlxStrictAiSkillShareByMonth
order by month_start`,Re=`select
  month_start,
  n_active_postings,
  strict_ai_skill_code_matches,
  strict_ai_skill_code_matches_per_active_posting
from nlx.AGGR_NlxStrictAiSkillShareByMonth
order by month_start`;s.nlx_strict_ai_skill_share_trend_data&&(s.nlx_strict_ai_skill_share_trend_data instanceof Error?oe.initialError=s.nlx_strict_ai_skill_share_trend_data:oe.initialData=s.nlx_strict_ai_skill_share_trend_data,s.nlx_strict_ai_skill_share_trend_columns&&(oe.knownColumns=s.nlx_strict_ai_skill_share_trend_columns));let je,re=!1;const at=Ye.createReactive({callback:S=>{r(3,je=S)},execFn:_},{id:"nlx_strict_ai_skill_share_trend",...oe});at(Re,{noResolve:X,...oe}),globalThis[Symbol.for("nlx_strict_ai_skill_share_trend")]={get value(){return je}};let ce={initialData:void 0,initialError:void 0},W=ee`with ranked as (
  select
    case '${k.ai_rank_measure.value}'
      when 'strict_ai_rank' then strict_ai_rank
      when 'composite_ai_rank' then composite_ai_rank
      else ai_score_rank
    end as selected_rank,
    occ8,
    soc_title,
    active_jobs,
    mean_ai_score_v2,
    strict_ai_codes_per_active_job,
    lenient_ai_codes_per_active_job,
    composite_log_score
  from nlx.CMP_NlxOccupationAiComparisons
)
select * from ranked
where selected_rank <= 25
order by selected_rank, occ8`,ve=`with ranked as (
  select
    case '${k.ai_rank_measure.value}'
      when 'strict_ai_rank' then strict_ai_rank
      when 'composite_ai_rank' then composite_ai_rank
      else ai_score_rank
    end as selected_rank,
    occ8,
    soc_title,
    active_jobs,
    mean_ai_score_v2,
    strict_ai_codes_per_active_job,
    lenient_ai_codes_per_active_job,
    composite_log_score
  from nlx.CMP_NlxOccupationAiComparisons
)
select * from ranked
where selected_rank <= 25
order by selected_rank, occ8`;s.nlx_occ_ai_ranking_data&&(s.nlx_occ_ai_ranking_data instanceof Error?ce.initialError=s.nlx_occ_ai_ranking_data:ce.initialData=s.nlx_occ_ai_ranking_data,s.nlx_occ_ai_ranking_columns&&(ce.knownColumns=s.nlx_occ_ai_ranking_columns));let me,rt=!1;const Ne=Ye.createReactive({callback:S=>{r(4,me=S)},execFn:_},{id:"nlx_occ_ai_ranking",...ce});Ne(ve,{noResolve:W,...ce}),globalThis[Symbol.for("nlx_occ_ai_ranking")]={get value(){return me}};let Q={initialData:void 0,initialError:void 0},ie=ee`select occ8, soc_title
from nlx.CMP_NlxOccupationAiComparisons
order by ai_score_rank, soc_title`,Le=`select occ8, soc_title
from nlx.CMP_NlxOccupationAiComparisons
order by ai_score_rank, soc_title`;s.nlx_occ_ai_options_data&&(s.nlx_occ_ai_options_data instanceof Error?Q.initialError=s.nlx_occ_ai_options_data:Q.initialData=s.nlx_occ_ai_options_data,s.nlx_occ_ai_options_columns&&(Q.knownColumns=s.nlx_occ_ai_options_columns));let Xe,ue=!1;const st=Ye.createReactive({callback:S=>{r(5,Xe=S)},execFn:_},{id:"nlx_occ_ai_options",...Q});st(Le,{noResolve:ie,...Q}),globalThis[Symbol.for("nlx_occ_ai_options")]={get value(){return Xe}};let pe={initialData:void 0,initialError:void 0},Z=ee`select
  month_start,
  avg_ai_score_v2,
  strict_ai_codes_per_active_job,
  lenient_ai_codes_per_active_job
from nlx.AGGR_NlxOccupationAiByMonth
where occ8 = '${k.nlx_ai_occ.value}'
order by month_start`,he=`select
  month_start,
  avg_ai_score_v2,
  strict_ai_codes_per_active_job,
  lenient_ai_codes_per_active_job
from nlx.AGGR_NlxOccupationAiByMonth
where occ8 = '${k.nlx_ai_occ.value}'
order by month_start`;s.nlx_selected_occ_ai_trend_data&&(s.nlx_selected_occ_ai_trend_data instanceof Error?pe.initialError=s.nlx_selected_occ_ai_trend_data:pe.initialData=s.nlx_selected_occ_ai_trend_data,s.nlx_selected_occ_ai_trend_columns&&(pe.knownColumns=s.nlx_selected_occ_ai_trend_columns));let se,nt=!1;const He=Ye.createReactive({callback:S=>{r(6,se=S)},execFn:_},{id:"nlx_selected_occ_ai_trend",...pe});He(he,{noResolve:Z,...pe}),globalThis[Symbol.for("nlx_selected_occ_ai_trend")]={get value(){return se}};let ae={initialData:void 0,initialError:void 0},Y=ee`with ranked as (
  select
    case '${k.ai_rank_measure.value}'
      when 'strict_ai_rank' then strict_ai_rank
      when 'composite_ai_rank' then composite_ai_rank
      else ai_score_rank
    end as selected_rank,
    ind6,
    naics_name,
    active_jobs,
    mean_ai_score_v2,
    strict_ai_codes_per_active_job,
    lenient_ai_codes_per_active_job,
    composite_log_score
  from nlx.AGGR_NlxIndustry6AiComparisons
)
select * from ranked
where selected_rank <= 25
order by selected_rank, ind6`,qe=`with ranked as (
  select
    case '${k.ai_rank_measure.value}'
      when 'strict_ai_rank' then strict_ai_rank
      when 'composite_ai_rank' then composite_ai_rank
      else ai_score_rank
    end as selected_rank,
    ind6,
    naics_name,
    active_jobs,
    mean_ai_score_v2,
    strict_ai_codes_per_active_job,
    lenient_ai_codes_per_active_job,
    composite_log_score
  from nlx.AGGR_NlxIndustry6AiComparisons
)
select * from ranked
where selected_rank <= 25
order by selected_rank, ind6`;s.nlx_industry_ai_ranking_data&&(s.nlx_industry_ai_ranking_data instanceof Error?ae.initialError=s.nlx_industry_ai_ranking_data:ae.initialData=s.nlx_industry_ai_ranking_data,s.nlx_industry_ai_ranking_columns&&(ae.knownColumns=s.nlx_industry_ai_ranking_columns));let Ee,fe=!1;const Oe=Ye.createReactive({callback:S=>{r(7,Ee=S)},execFn:_},{id:"nlx_industry_ai_ranking",...ae});return Oe(qe,{noResolve:Y,...ae}),globalThis[Symbol.for("nlx_industry_ai_ranking")]={get value(){return Ee}},u.$$set=S=>{"data"in S&&r(8,c=S.data)},u.$$.update=()=>{u.$$.dirty[0]&256&&r(9,{data:s={},customFormattingSettings:f,__db:I}=c,s),u.$$.dirty[0]&512&&Ai.set(Object.keys(s).length>0),u.$$.dirty[1]&4096&&t.params,u.$$.dirty[0]&30720&&(j||!q?j||(a(E,{noResolve:j,...h}),r(14,q=!0)):a(E,{noResolve:j})),u.$$.dirty[0]&491520&&(de||!$e?de||(ne(be,{noResolve:de,...v}),r(18,$e=!0)):ne(be,{noResolve:de})),u.$$.dirty[0]&7864320&&(_e||!Me?_e||(le(te,{noResolve:_e,...ge}),r(22,Me=!0)):le(te,{noResolve:_e})),u.$$.dirty[0]&125829120&&(X||!re?X||(at(Re,{noResolve:X,...oe}),r(26,re=!0)):at(Re,{noResolve:X})),u.$$.dirty[0]&1024&&r(28,W=ee`with ranked as (
  select
    case '${k.ai_rank_measure.value}'
      when 'strict_ai_rank' then strict_ai_rank
      when 'composite_ai_rank' then composite_ai_rank
      else ai_score_rank
    end as selected_rank,
    occ8,
    soc_title,
    active_jobs,
    mean_ai_score_v2,
    strict_ai_codes_per_active_job,
    lenient_ai_codes_per_active_job,
    composite_log_score
  from nlx.CMP_NlxOccupationAiComparisons
)
select * from ranked
where selected_rank <= 25
order by selected_rank, occ8`),u.$$.dirty[0]&1024&&r(29,ve=`with ranked as (
  select
    case '${k.ai_rank_measure.value}'
      when 'strict_ai_rank' then strict_ai_rank
      when 'composite_ai_rank' then composite_ai_rank
      else ai_score_rank
    end as selected_rank,
    occ8,
    soc_title,
    active_jobs,
    mean_ai_score_v2,
    strict_ai_codes_per_active_job,
    lenient_ai_codes_per_active_job,
    composite_log_score
  from nlx.CMP_NlxOccupationAiComparisons
)
select * from ranked
where selected_rank <= 25
order by selected_rank, occ8`),u.$$.dirty[0]&2013265920&&(W||!rt?W||(Ne(ve,{noResolve:W,...ce}),r(30,rt=!0)):Ne(ve,{noResolve:W})),u.$$.dirty[1]&15&&(ie||!ue?ie||(st(Le,{noResolve:ie,...Q}),r(34,ue=!0)):st(Le,{noResolve:ie})),u.$$.dirty[0]&1024&&r(36,Z=ee`select
  month_start,
  avg_ai_score_v2,
  strict_ai_codes_per_active_job,
  lenient_ai_codes_per_active_job
from nlx.AGGR_NlxOccupationAiByMonth
where occ8 = '${k.nlx_ai_occ.value}'
order by month_start`),u.$$.dirty[0]&1024&&r(37,he=`select
  month_start,
  avg_ai_score_v2,
  strict_ai_codes_per_active_job,
  lenient_ai_codes_per_active_job
from nlx.AGGR_NlxOccupationAiByMonth
where occ8 = '${k.nlx_ai_occ.value}'
order by month_start`),u.$$.dirty[1]&240&&(Z||!nt?Z||(He(he,{noResolve:Z,...pe}),r(38,nt=!0)):He(he,{noResolve:Z})),u.$$.dirty[0]&1024&&r(40,Y=ee`with ranked as (
  select
    case '${k.ai_rank_measure.value}'
      when 'strict_ai_rank' then strict_ai_rank
      when 'composite_ai_rank' then composite_ai_rank
      else ai_score_rank
    end as selected_rank,
    ind6,
    naics_name,
    active_jobs,
    mean_ai_score_v2,
    strict_ai_codes_per_active_job,
    lenient_ai_codes_per_active_job,
    composite_log_score
  from nlx.AGGR_NlxIndustry6AiComparisons
)
select * from ranked
where selected_rank <= 25
order by selected_rank, ind6`),u.$$.dirty[0]&1024&&r(41,qe=`with ranked as (
  select
    case '${k.ai_rank_measure.value}'
      when 'strict_ai_rank' then strict_ai_rank
      when 'composite_ai_rank' then composite_ai_rank
      else ai_score_rank
    end as selected_rank,
    ind6,
    naics_name,
    active_jobs,
    mean_ai_score_v2,
    strict_ai_codes_per_active_job,
    lenient_ai_codes_per_active_job,
    composite_log_score
  from nlx.AGGR_NlxIndustry6AiComparisons
)
select * from ranked
where selected_rank <= 25
order by selected_rank, ind6`),u.$$.dirty[1]&3840&&(Y||!fe?Y||(Oe(qe,{noResolve:Y,...ae}),r(42,fe=!0)):Oe(qe,{noResolve:Y}))},r(12,j=ee`select 'strict_ai_rank' as measure, 'Strict AI codes per active job' as label
union all
select 'composite_ai_rank' as measure, 'Composite log AI intensity' as label
union all
select 'ai_score_rank' as measure, 'Mean AI score v2' as label`),r(13,E=`select 'strict_ai_rank' as measure, 'Strict AI codes per active job' as label
union all
select 'composite_ai_rank' as measure, 'Composite log AI intensity' as label
union all
select 'ai_score_rank' as measure, 'Mean AI score v2' as label`),r(16,de=ee`select
  ind2,
  btos_ai_yes_pct / 100.0 as btos_ai_share,
  nlx_jobs,
  nlx_avg_ai_score_v2,
  nlx_avg_n_strict
from jaat.AGGR_AiIntensityAggregationBtosBenchmark
order by btos_ai_yes_pct desc`),r(17,be=`select
  ind2,
  btos_ai_yes_pct / 100.0 as btos_ai_share,
  nlx_jobs,
  nlx_avg_ai_score_v2,
  nlx_avg_n_strict
from jaat.AGGR_AiIntensityAggregationBtosBenchmark
order by btos_ai_yes_pct desc`),r(20,_e=ee`select *
from (
  values
    ('Mean AI score', 0.5064, 0.0380, 0.5870, 0.0132),
    ('Strict AI count', 0.7517, 0.0005, 0.6486, 0.0049)
) as t(metric, spearman_rho, spearman_p, pearson_r, pearson_p)`),r(21,te=`select *
from (
  values
    ('Mean AI score', 0.5064, 0.0380, 0.5870, 0.0132),
    ('Strict AI count', 0.7517, 0.0005, 0.6486, 0.0049)
) as t(metric, spearman_rho, spearman_p, pearson_r, pearson_p)`),r(24,X=ee`select
  month_start,
  n_active_postings,
  strict_ai_skill_code_matches,
  strict_ai_skill_code_matches_per_active_posting
from nlx.AGGR_NlxStrictAiSkillShareByMonth
order by month_start`),r(25,Re=`select
  month_start,
  n_active_postings,
  strict_ai_skill_code_matches,
  strict_ai_skill_code_matches_per_active_posting
from nlx.AGGR_NlxStrictAiSkillShareByMonth
order by month_start`),r(32,ie=ee`select occ8, soc_title
from nlx.CMP_NlxOccupationAiComparisons
order by ai_score_rank, soc_title`),r(33,Le=`select occ8, soc_title
from nlx.CMP_NlxOccupationAiComparisons
order by ai_score_rank, soc_title`),[N,ke,it,je,me,Xe,se,Ee,c,s,k,h,j,E,q,v,de,be,$e,ge,_e,te,Me,oe,X,Re,re,ce,W,ve,rt,Q,ie,Le,ue,pe,Z,he,nt,ae,Y,qe,fe,t]}class ta extends vi{constructor(i){super(),hi(this,i,Gi,Fi,ui,{data:8},null,[-1,-1])}}export{ta as component};
