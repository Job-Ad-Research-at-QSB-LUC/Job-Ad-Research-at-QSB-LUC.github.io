import{s as Xa,d as o,i as n,a as sa,b as u,c as m,h as Ka,e as b,f as ia,g as w,k as p,l as h,m as Ja,n as Za,o as es,p as ts,q as as,r as W,j as ss,t as is,u as rs}from"../chunks/scheduler.TmfZfN_X.js";import{S as os,i as ns,d as y,t as k,a as _,c as nt,m as T,b as S,e as A,g as lt}from"../chunks/index.CKLTamEB.js";import{D as dt,C as R}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BlNm2Thl.js";import{w as ls}from"../chunks/entry.CXtrXOLO.js";import{e as ds,s as us,Q as ut,p as cs,a as Da,r as Ba,C as ms}from"../chunks/inferColumnTypes.W_n7LdHz.js";import{h as z}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as ps}from"../chunks/stores.C4mfYxeY.js";import{Q as ct}from"../chunks/QueryViewer.Bt3eXBIK.js";import{p as _s}from"../chunks/profile.BW8tN6E9.js";function fs(c){var d;let s,r=(v.title??((d=v.og)==null?void 0:d.title))+"",t;return{c(){s=h("h1"),t=rs(r),this.h()},l(a){s=b(a,"H1",{class:!0});var l=ss(s);t=is(l,r),l.forEach(o),this.h()},h(){u(s,"class","title")},m(a,l){n(a,s,l),sa(s,t)},p:W,d(a){a&&o(s)}}}function gs(c){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:W,p:W,d:W}}function bs(c){var l;let s,r,t,d,a;return document.title=s=v.title??((l=v.og)==null?void 0:l.title),{c(){r=p(),t=h("meta"),d=p(),a=h("meta"),this.h()},l(f){r=m(f),t=b(f,"META",{property:!0,content:!0}),d=m(f),a=b(f,"META",{name:!0,content:!0}),this.h()},h(){var f,$;u(t,"property","og:title"),u(t,"content",((f=v.og)==null?void 0:f.title)??v.title),u(a,"name","twitter:title"),u(a,"content",(($=v.og)==null?void 0:$.title)??v.title)},m(f,$){n(f,r,$),n(f,t,$),n(f,d,$),n(f,a,$)},p(f,$){var x;$&0&&s!==(s=v.title??((x=v.og)==null?void 0:x.title))&&(document.title=s)},d(f){f&&(o(r),o(t),o(d),o(a))}}}function hs(c){var a,l;let s,r,t=(v.description||((a=v.og)==null?void 0:a.description))&&ks(),d=((l=v.og)==null?void 0:l.image)&&ws();return{c(){t&&t.c(),s=p(),d&&d.c(),r=ia()},l(f){t&&t.l(f),s=m(f),d&&d.l(f),r=ia()},m(f,$){t&&t.m(f,$),n(f,s,$),d&&d.m(f,$),n(f,r,$)},p(f,$){var x,K;(v.description||(x=v.og)!=null&&x.description)&&t.p(f,$),(K=v.og)!=null&&K.image&&d.p(f,$)},d(f){f&&(o(s),o(r)),t&&t.d(f),d&&d.d(f)}}}function ks(c){let s,r,t,d,a;return{c(){s=h("meta"),r=p(),t=h("meta"),d=p(),a=h("meta"),this.h()},l(l){s=b(l,"META",{name:!0,content:!0}),r=m(l),t=b(l,"META",{property:!0,content:!0}),d=m(l),a=b(l,"META",{name:!0,content:!0}),this.h()},h(){var l,f,$;u(s,"name","description"),u(s,"content",v.description??((l=v.og)==null?void 0:l.description)),u(t,"property","og:description"),u(t,"content",((f=v.og)==null?void 0:f.description)??v.description),u(a,"name","twitter:description"),u(a,"content",(($=v.og)==null?void 0:$.description)??v.description)},m(l,f){n(l,s,f),n(l,r,f),n(l,t,f),n(l,d,f),n(l,a,f)},p:W,d(l){l&&(o(s),o(r),o(t),o(d),o(a))}}}function ws(c){let s,r,t;return{c(){s=h("meta"),r=p(),t=h("meta"),this.h()},l(d){s=b(d,"META",{property:!0,content:!0}),r=m(d),t=b(d,"META",{name:!0,content:!0}),this.h()},h(){var d,a;u(s,"property","og:image"),u(s,"content",Da((d=v.og)==null?void 0:d.image)),u(t,"name","twitter:image"),u(t,"content",Da((a=v.og)==null?void 0:a.image))},m(d,a){n(d,s,a),n(d,r,a),n(d,t,a)},p:W,d(d){d&&(o(s),o(r),o(t))}}}function Ua(c){let s,r;return s=new ct({props:{queryID:"audit_project_links",queryResult:c[0]}}),{c(){A(s.$$.fragment)},l(t){S(s.$$.fragment,t)},m(t,d){T(s,t,d),r=!0},p(t,d){const a={};d[0]&1&&(a.queryResult=t[0]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){k(s.$$.fragment,t),r=!1},d(t){y(s,t)}}}function vs(c){let s,r,t,d;return s=new R({props:{id:"resource",title:"Resource"}}),t=new R({props:{id:"host",title:"Host"}}),{c(){A(s.$$.fragment),r=p(),A(t.$$.fragment)},l(a){S(s.$$.fragment,a),r=m(a),S(t.$$.fragment,a)},m(a,l){T(s,a,l),n(a,r,l),T(t,a,l),d=!0},p:W,i(a){d||(_(s.$$.fragment,a),_(t.$$.fragment,a),d=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),d=!1},d(a){a&&o(r),y(s,a),y(t,a)}}}function Fa(c){let s,r;return s=new ct({props:{queryID:"audit_bundle_components",queryResult:c[1]}}),{c(){A(s.$$.fragment)},l(t){S(s.$$.fragment,t)},m(t,d){T(s,t,d),r=!0},p(t,d){const a={};d[0]&2&&(a.queryResult=t[1]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){k(s.$$.fragment,t),r=!1},d(t){y(s,t)}}}function ys(c){let s,r,t,d;return s=new R({props:{id:"component",title:"Component"}}),t=new R({props:{id:"contents",title:"Contents",wrap:"true"}}),{c(){A(s.$$.fragment),r=p(),A(t.$$.fragment)},l(a){S(s.$$.fragment,a),r=m(a),S(t.$$.fragment,a)},m(a,l){T(s,a,l),n(a,r,l),T(t,a,l),d=!0},p:W,i(a){d||(_(s.$$.fragment,a),_(t.$$.fragment,a),d=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),d=!1},d(a){a&&o(r),y(s,a),y(t,a)}}}function Ia(c){let s,r;return s=new ct({props:{queryID:"audit_checks",queryResult:c[2]}}),{c(){A(s.$$.fragment)},l(t){S(s.$$.fragment,t)},m(t,d){T(s,t,d),r=!0},p(t,d){const a={};d[0]&4&&(a.queryResult=t[2]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){k(s.$$.fragment,t),r=!1},d(t){y(s,t)}}}function Ts(c){let s,r,t,d;return s=new R({props:{id:"check_name",title:"Check"}}),t=new R({props:{id:"command",title:"Command",wrap:"true"}}),{c(){A(s.$$.fragment),r=p(),A(t.$$.fragment)},l(a){S(s.$$.fragment,a),r=m(a),S(t.$$.fragment,a)},m(a,l){T(s,a,l),n(a,r,l),T(t,a,l),d=!0},p:W,i(a){d||(_(s.$$.fragment,a),_(t.$$.fragment,a),d=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),d=!1},d(a){a&&o(r),y(s,a),y(t,a)}}}function Ga(c){let s,r;return s=new ct({props:{queryID:"audit_llm_agreement",queryResult:c[3]}}),{c(){A(s.$$.fragment)},l(t){S(s.$$.fragment,t)},m(t,d){T(s,t,d),r=!0},p(t,d){const a={};d[0]&8&&(a.queryResult=t[3]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){k(s.$$.fragment,t),r=!1},d(t){y(s,t)}}}function Ss(c){let s,r,t,d;return s=new R({props:{id:"scope",title:"Scope"}}),t=new R({props:{id:"note",title:"Note",wrap:"true"}}),{c(){A(s.$$.fragment),r=p(),A(t.$$.fragment)},l(a){S(s.$$.fragment,a),r=m(a),S(t.$$.fragment,a)},m(a,l){T(s,a,l),n(a,r,l),T(t,a,l),d=!0},p:W,i(a){d||(_(s.$$.fragment,a),_(t.$$.fragment,a),d=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),d=!1},d(a){a&&o(r),y(s,a),y(t,a)}}}function za(c){let s,r;return s=new ct({props:{queryID:"audit_green_stem_agreement",queryResult:c[4]}}),{c(){A(s.$$.fragment)},l(t){S(s.$$.fragment,t)},m(t,d){T(s,t,d),r=!0},p(t,d){const a={};d[0]&16&&(a.queryResult=t[4]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){k(s.$$.fragment,t),r=!1},d(t){y(s,t)}}}function As(c){let s,r,t,d,a,l,f,$,x,K;return s=new R({props:{id:"signal",title:"Signal"}}),t=new R({props:{id:"agreement_group",title:"Group"}}),a=new R({props:{id:"reviewed_n",title:"Reviewed",fmt:"#,##0"}}),f=new R({props:{id:"included_n",title:"Included",fmt:"#,##0"}}),x=new R({props:{id:"pass_rate",title:"Pass",fmt:"0.0%"}}),{c(){A(s.$$.fragment),r=p(),A(t.$$.fragment),d=p(),A(a.$$.fragment),l=p(),A(f.$$.fragment),$=p(),A(x.$$.fragment)},l(g){S(s.$$.fragment,g),r=m(g),S(t.$$.fragment,g),d=m(g),S(a.$$.fragment,g),l=m(g),S(f.$$.fragment,g),$=m(g),S(x.$$.fragment,g)},m(g,E){T(s,g,E),n(g,r,E),T(t,g,E),n(g,d,E),T(a,g,E),n(g,l,E),T(f,g,E),n(g,$,E),T(x,g,E),K=!0},p:W,i(g){K||(_(s.$$.fragment,g),_(t.$$.fragment,g),_(a.$$.fragment,g),_(f.$$.fragment,g),_(x.$$.fragment,g),K=!0)},o(g){k(s.$$.fragment,g),k(t.$$.fragment,g),k(a.$$.fragment,g),k(f.$$.fragment,g),k(x.$$.fragment,g),K=!1},d(g){g&&(o(r),o(d),o(l),o($)),y(s,g),y(t,g),y(a,g),y(f,g),y(x,g)}}}function Qa(c){let s,r;return s=new ct({props:{queryID:"audit_inputs",queryResult:c[5]}}),{c(){A(s.$$.fragment)},l(t){S(s.$$.fragment,t)},m(t,d){T(s,t,d),r=!0},p(t,d){const a={};d[0]&32&&(a.queryResult=t[5]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){k(s.$$.fragment,t),r=!1},d(t){y(s,t)}}}function $s(c){let s,r,t,d;return s=new R({props:{id:"input_group",title:"Input group"}}),t=new R({props:{id:"inspection_use",title:"How to inspect",wrap:"true"}}),{c(){A(s.$$.fragment),r=p(),A(t.$$.fragment)},l(a){S(s.$$.fragment,a),r=m(a),S(t.$$.fragment,a)},m(a,l){T(s,a,l),n(a,r,l),T(t,a,l),d=!0},p:W,i(a){d||(_(s.$$.fragment,a),_(t.$$.fragment,a),d=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),d=!1},d(a){a&&o(r),y(s,a),y(t,a)}}}function Wa(c){let s,r;return s=new ct({props:{queryID:"audit_limits",queryResult:c[6]}}),{c(){A(s.$$.fragment)},l(t){S(s.$$.fragment,t)},m(t,d){T(s,t,d),r=!0},p(t,d){const a={};d[0]&64&&(a.queryResult=t[6]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){k(s.$$.fragment,t),r=!1},d(t){y(s,t)}}}function Ls(c){let s,r,t,d;return s=new R({props:{id:"public_limit",title:"Limit"}}),t=new R({props:{id:"treatment",title:"Treatment",wrap:"true"}}),{c(){A(s.$$.fragment),r=p(),A(t.$$.fragment)},l(a){S(s.$$.fragment,a),r=m(a),S(t.$$.fragment,a)},m(a,l){T(s,a,l),n(a,r,l),T(t,a,l),d=!0},p:W,i(a){d||(_(s.$$.fragment,a),_(t.$$.fragment,a),d=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),d=!1},d(a){a&&o(r),y(s,a),y(t,a)}}}function Va(c){let s,r;return s=new ct({props:{queryID:"audit_documentation",queryResult:c[7]}}),{c(){A(s.$$.fragment)},l(t){S(s.$$.fragment,t)},m(t,d){T(s,t,d),r=!0},p(t,d){const a={};d[0]&128&&(a.queryResult=t[7]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){k(s.$$.fragment,t),r=!1},d(t){y(s,t)}}}function Es(c){let s,r,t,d;return s=new R({props:{id:"document",title:"Document"}}),t=new R({props:{id:"role",title:"Role",wrap:"true"}}),{c(){A(s.$$.fragment),r=p(),A(t.$$.fragment)},l(a){S(s.$$.fragment,a),r=m(a),S(t.$$.fragment,a)},m(a,l){T(s,a,l),n(a,r,l),T(t,a,l),d=!0},p:W,i(a){d||(_(s.$$.fragment,a),_(t.$$.fragment,a),d=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),d=!1},d(a){a&&o(r),y(s,a),y(t,a)}}}function xs(c){var Pa;let s,r,t,d,a,l,f='<a href="#agreement-and-audit-trail">Agreement And Audit Trail</a>',$,x,K="Use this page to inspect the data sources, model-review rules and code behind the dashboard. Project materials are organized through the Job Ad Research at QSB-LUC GitHub organization and Loyola Data Mining Hugging Face collections.",g,E,oe='<a href="#version-of-the-review-exclusions">Version of the review exclusions</a>',ne,Z,mt='This Evidence dashboard preserves an earlier analysis snapshot. The saved local database is dated <strong class="markdown">6 June 2026</strong> (its recorded last-save date); the public dashboard-source release is dated <strong class="markdown">16 June 2026</strong> (Git commit <code class="markdown">bbce0111f422afd20d5a3022a0f75294fa6d8f90</code>). These dates describe the database snapshot and source release, not the last deployment of the website. The presentation and documentation were revised on <strong class="markdown">17 October 2026</strong> without rebuilding its task profiles.',je,U,le='<strong class="markdown">A newer occupation-task review release is available.</strong> The <a href="https://job-ad-research-at-qsb-luc.github.io/jaat-demo/output/public_occupation_dashboard/methods.html" rel="nofollow" class="markdown">current manuscript companion</a> documents the expanded review and filtering rules. Download the <a href="https://job-ad-research-at-qsb-luc.github.io/jaat-demo/output/public_occupation_dashboard/reproduction/excluded_task_occupation_pairs.csv.gz" rel="nofollow" class="markdown">19,682 excluded pairs</a> and their <a href="https://job-ad-research-at-qsb-luc.github.io/jaat-demo/output/public_occupation_dashboard/reproduction/review_export.json" rel="nofollow" class="markdown">provenance and status counts</a>. The exclusions come from a selected 56,856-row ledger; they do not imply every retained link was reviewed. The expanded exclusions have not been applied to this historical Evidence dashboard’s profiles.',de,V,pt='<a href="#how-to-inspect-the-dashboard">How To Inspect The Dashboard</a>',Ne,F,ue="Most figures and tables on the dashboard are backed by visible Evidence SQL. To inspect a page, use the menu in the top-right corner of the dashboard and turn on query display; the SQL blocks used to build the visible charts and tables will appear on the page.",ce,ee,_t='The dashboard audit repository is available at <a href="https://github.com/Job-Ad-Research-at-QSB-LUC/jaat-lmi-dashboard-audit/" rel="nofollow" class="markdown">Job-Ad-Research-at-QSB-LUC/jaat-lmi-dashboard-audit</a>. The repository contains the dashboard source, source SQL, audit documentation, public input manifests, and rebuild scripts. See the repository <a href="https://github.com/Job-Ad-Research-at-QSB-LUC/jaat-lmi-dashboard-audit/blob/main/README.md" rel="nofollow" class="markdown">README</a> for the current rebuild path from public input files to the static dashboard.',Pe,J,me='<a href="#public-project-links">Public Project Links</a>',pe,te,ft="Core public project resources:",Re,I,_e='<li class="markdown"><p class="markdown"><a href="https://github.com/Job-Ad-Research-at-QSB-LUC" rel="nofollow" class="markdown">Job Ad Research at QSB-LUC</a></p></li> <li class="markdown"><p class="markdown"><a href="https://github.com/Job-Ad-Research-at-QSB-LUC/JAAT" rel="nofollow" class="markdown">JAAT software</a></p></li> <li class="markdown"><p class="markdown"><a href="https://github.com/Job-Ad-Research-at-QSB-LUC/jaat-lmi-dashboard-audit/" rel="nofollow" class="markdown">Dashboard audit repository</a></p></li> <li class="markdown"><p class="markdown"><a href="https://huggingface.co/loyoladatamining/models" rel="nofollow" class="markdown">JAAT models</a></p></li> <li class="markdown"><p class="markdown"><a href="https://huggingface.co/datasets/loyoladatamining/usajobs" rel="nofollow" class="markdown">USAJOBS raw text</a></p></li> <li class="markdown"><p class="markdown"><a href="https://huggingface.co/datasets/loyoladatamining/usajobs_coded" rel="nofollow" class="markdown">USAJOBS JAAT-coded output</a></p></li> <li class="markdown"><p class="markdown"><a href="https://huggingface.co/datasets/loyoladatamining/usajobs_html_metadata" rel="nofollow" class="markdown">USAJOBS HTML metadata</a></p></li> <li class="markdown"><p class="markdown"><a href="https://doi.org/10.5281/zenodo.22219027" rel="nofollow" class="markdown">Monthly NLx aggregate data</a></p></li> <li class="markdown"><p class="markdown"><a href="https://doi.org/10.5281/zenodo.23426701" rel="nofollow" class="markdown">Archived software, notebooks and website</a></p></li> <li class="markdown"><p class="markdown"><a href="https://job-ad-research-at-qsb-luc.github.io/jaat-demo/output/research_presentation/index.html" rel="nofollow" class="markdown">Current manuscript companion</a></p></li>',fe,ae,gt="The data deposit and the repository snapshots are separate releases. USAJOBS records are distributed through the Hugging Face datasets above; raw NLx posting text requires authorized access.",Je,Q,D,De='<a href="#table-1-public-project-links-and-repositories">Table 1. Public project links and repositories</a>',Be,se,Ue,B,ge='<a href="#reproducibility-package">Reproducibility Package</a>',be,he,Y,bt='<a href="#table-2-public-release-bundle-components">Table 2. Public release bundle components</a>',ie,G,ke,X,ht='<a href="#required-checks">Required Checks</a>',Fe,L,re,ma='<a href="#table-3-public-release-agreement-checks">Table 3. Public release agreement checks</a>',$t,Ie,Lt,we,pa='<a href="#job-ad-derived-occupation-task-pair-agreement-procedure">Job-Ad-Derived Occupation-Task Pair Agreement Procedure</a>',Et,Ge,_a="This section covers the job-ad-derived novel occupation-task pair LLM agreement procedure. It is one LLM agreement procedure in the broader project, not the only agreement activity.",xt,kt,ve,fa='<a href="#table-4-job-ad-derived-occupation-task-pair-agreement-outputs">Table 4. Job-ad-derived occupation-task pair agreement outputs</a>',Mt,ze,Ht,ye,ga='<a href="#llm-judge-prompt-templates">LLM Judge Prompt Templates</a>',Ot,Qe,ba='The prompts below are the literal templates used for the agreement procedures. Runtime calls fill the bracketed fields with the occupation, task, and definition text shown in each template; model outputs are parsed only as <code class="markdown">YES</code> or <code class="markdown">NO</code>.',Ct,We,ha=`<summary class="cursor-pointer font-semibold">Occupation-task pair agreement prompt</summary> <pre class="text-xs whitespace-pre-wrap bg-gray-50 border border-gray-200 rounded p-3"><code>Occupation: {soc_title} ({occ8})
Occupation description: {soc_description}

Task: {task_text}

Does this task plausibly belong to this occupation? Answer with one word: YES or NO.</code></pre>`,qt,Ve,ka=`<summary class="cursor-pointer font-semibold">Green task signal prompt</summary> <pre class="text-xs whitespace-pre-wrap bg-gray-50 border border-gray-200 rounded p-3"><code>DEFINITION. The green economy is &quot;the economic activity related to reducing
the use of fossil fuels, decreasing pollution and greenhouse gas emissions,
increasing the efficiency of energy usage, recycling materials, and
developing and adopting renewable sources of energy.&quot;
[Source: O*NET Green Occupations report, https://www.onetcenter.org/dl_files/Green.pdf]

A task is &quot;substantively green work&quot; if its TEXT directly advances one of
these green-economy activities. Generic operations, generic maintenance, and
administrative tasks are NOT substantively green UNLESS the task text itself
specifies an environmental, energy-efficiency, conservation, pollution-
reduction, recycling, or renewable-energy objective.

Examples:
- YES: &quot;Develop strategies to address energy use, recycling, pollution reduction.&quot;
- YES: &quot;Monitor emission control devices for compliance with regulations.&quot;
- YES: &quot;Compute design specifications for implementation of conservation practices.&quot;
- YES: &quot;Maintain wind turbines or solar arrays to ensure peak energy production.&quot;
- NO:  &quot;Assist engineering personnel to solve operating problems.&quot;
- NO:  &quot;Maintain equipment, making repairs as necessary.&quot;
- NO:  &quot;Schedule new employee orientations.&quot;

Task: {task_text}

Is this task substantively green work? Answer with one word: YES or NO.</code></pre>`,jt,Ye,wa=`<summary class="cursor-pointer font-semibold">STEM task signal prompt</summary> <pre class="text-xs whitespace-pre-wrap bg-gray-50 border border-gray-200 rounded p-3"><code>DEFINITION. STEM occupations &quot;require education in science, technology,
engineering, and mathematics (STEM) disciplines.&quot;
[Source: O*NET STEM page, https://www.onetonline.org/find/stem]

A task is &quot;substantively STEM work&quot; if performing it requires applying
specific scientific, technological, engineering, or mathematical knowledge.
Routine skilled trades, installation, repair, and maintenance are NOT
substantively STEM UNLESS the task text requires technical analysis,
engineering design, scientific measurement, mathematical modeling,
programming, diagnostics, instrumentation, or interpretation of technical
data.

Examples:
- YES: &quot;Conduct statistical analyses of biological or environmental data.&quot;
- YES: &quot;Design experiments to test theoretical hypotheses.&quot;
- YES: &quot;Develop algorithms to solve scientific or mathematical problems.&quot;
- YES: &quot;Calibrate avionics instrumentation using interferometry.&quot;
- YES: &quot;Interpret CAD/CAM models to verify part tolerances against engineering specs.&quot;
- NO:  &quot;Weld metal parts together using portable gas welding equipment.&quot;
- NO:  &quot;Maintain, adjust, and clean equipment, perform minor repairs.&quot;
- NO:  &quot;Lay out pipe routes following blueprints.&quot;

Task: {task_text}

Is this task substantively STEM work? Answer with one word: YES or NO.</code></pre>`,Nt,Te,va='<a href="#downloadable-two-model-agreement-workbooks">Downloadable Two-Model Agreement Workbooks</a>',Pt,Xe,ya='The workbooks below contain the results of the Sonnet + GPT-4o two-model agreement procedures. Each workbook consolidates the reviewed rows, LLM-validated rows, disagreed/blocklisted rows, agreement statistics, and metadata for one run. Legacy <code class="markdown">llm_as_judge_*</code> CSV filenames remain in <code class="markdown">crosswalks/</code> only as compatibility inputs for existing SQL and warehouse rebuilds.',Rt,Ke,Ta='<thead class="markdown"><tr class="markdown"><th class="markdown">Procedure</th> <th class="markdown">Workbook</th></tr></thead> <tbody class="markdown"><tr class="markdown"><td class="markdown">Occupation-task pairs, top RCA batch</td> <td class="markdown"><a href="/us-lmi/downloads/agreement/sonnet_gpt_onet_occ_pairs_rca_results.xlsx" class="markdown">XLSX</a></td></tr> <tr class="markdown"><td class="markdown">Occupation-task pairs, high-volume batch</td> <td class="markdown"><a href="/us-lmi/downloads/agreement/sonnet_gpt_onet_occ_pairs_volume_results.xlsx" class="markdown">XLSX</a></td></tr> <tr class="markdown"><td class="markdown">Occupation-task pairs, random postings-derived batch</td> <td class="markdown"><a href="/us-lmi/downloads/agreement/sonnet_gpt_onet_occ_pairs_random_results.xlsx" class="markdown">XLSX</a></td></tr> <tr class="markdown"><td class="markdown">Occupation-task pairs, independent null baseline</td> <td class="markdown"><a href="/us-lmi/downloads/agreement/sonnet_gpt_onet_occ_pairs_null_results.xlsx" class="markdown">XLSX</a></td></tr> <tr class="markdown"><td class="markdown">Green task bundle</td> <td class="markdown"><a href="/us-lmi/downloads/agreement/sonnet_gpt_green_tasks_results.xlsx" class="markdown">XLSX</a></td></tr> <tr class="markdown"><td class="markdown">STEM task bundle</td> <td class="markdown"><a href="/us-lmi/downloads/agreement/sonnet_gpt_stem_tasks_results.xlsx" class="markdown">XLSX</a></td></tr></tbody>',Jt,Ze,Sa='<a href="/us-lmi/downloads/agreement/manifest.csv" class="markdown">Download agreement workbook manifest CSV</a>',Dt,Se,Aa='<a href="#green-and-stem-task-agreement-procedures">Green and STEM Task Agreement Procedures</a>',Bt,et,$a="The green and STEM task reviewers are separate LLM agreement procedures used for task-domain time series. They use prompt v2 and require a two-model unanimous YES for inclusion; Gemini was quota-blocked and is diagnostic only in this run.",Ut,wt,Ae,La='<a href="#table-5-green-and-stem-task-agreement-outputs">Table 5. Green and STEM task agreement outputs</a>',Ft,tt,It,at,Ea='The green and STEM task workbook links above supersede the older per-CSV public downloads. Their workbook tabs are <code class="markdown">metadata</code>, <code class="markdown">reviewed</code>, <code class="markdown">agreement_retained</code>, <code class="markdown">disagreed</code>, <code class="markdown">agreement_stats</code>, and <code class="markdown">discovery_rejected</code>.',Gt,$e,xa='<a href="#public-inputs-and-inspection-paths">Public Inputs And Inspection Paths</a>',zt,vt,Le,Ma='<a href="#table-6-public-input-and-provenance-inventory">Table 6. Public input and provenance inventory</a>',Qt,st,Wt,Ee,Ha='<a href="#rebuild-path">Rebuild Path</a>',Vt,it,Oa='<code class="markdown">bin/reproduce.sh</code> is the executable path from public inputs to the dashboard. With <code class="markdown">--skip-etl</code>, it starts from the staged DuckDB warehouse, rebuilds derived artifacts, rematerializes Evidence source parquets, and builds the static site. With <code class="markdown">--public-usajobs-dir</code>, <code class="markdown">--nlx-dir</code>, and <code class="markdown">--crosswalk-dir</code>, it rebuilds the warehouse from public USAJOBS parquets, public aggregate files from the NLx corpus, and frozen crosswalk snapshots before rebuilding the dashboard outputs.',Yt,xe,Ca='<a href="#public-safe-limits">Public-Safe Limits</a>',Xt,yt,Me,qa='<a href="#table-7-public-safe-limits-and-gated-artifacts">Table 7. Public-safe limits and gated artifacts</a>',Kt,rt,Zt,He,ja='<a href="#documentation-map">Documentation Map</a>',ea,Tt,Oe,Na='<a href="#table-8-audit-documentation-index">Table 8. Audit documentation index</a>',ta,ot,aa,Ce=typeof v<"u"&&(v.title||((Pa=v.og)==null?void 0:Pa.title))&&v.hide_title!==!0&&fs();function Ya(e,i){var St;return typeof v<"u"&&(v.title||(St=v.og)!=null&&St.title)?bs:gs}let At=Ya()(c),qe=typeof v=="object"&&hs(),M=c[0]&&Ua(c);se=new dt({props:{data:c[0],rowsPerPage:"10",$$slots:{default:[vs]},$$scope:{ctx:c}}});let H=c[1]&&Fa(c);G=new dt({props:{data:c[1],rowsPerPage:"10",$$slots:{default:[ys]},$$scope:{ctx:c}}});let O=c[2]&&Ia(c);Ie=new dt({props:{data:c[2],rowsPerPage:"10",$$slots:{default:[Ts]},$$scope:{ctx:c}}});let C=c[3]&&Ga(c);ze=new dt({props:{data:c[3],rowsPerPage:"10",$$slots:{default:[Ss]},$$scope:{ctx:c}}});let q=c[4]&&za(c);tt=new dt({props:{data:c[4],rows:"4",$$slots:{default:[As]},$$scope:{ctx:c}}});let j=c[5]&&Qa(c);st=new dt({props:{data:c[5],rowsPerPage:"10",$$slots:{default:[$s]},$$scope:{ctx:c}}});let N=c[6]&&Wa(c);rt=new dt({props:{data:c[6],rowsPerPage:"10",$$slots:{default:[Ls]},$$scope:{ctx:c}}});let P=c[7]&&Va(c);return ot=new dt({props:{data:c[7],rowsPerPage:"10",$$slots:{default:[Es]},$$scope:{ctx:c}}}),{c(){Ce&&Ce.c(),s=p(),At.c(),r=h("meta"),t=h("meta"),qe&&qe.c(),d=ia(),a=p(),l=h("h1"),l.innerHTML=f,$=p(),x=h("p"),x.textContent=K,g=p(),E=h("h2"),E.innerHTML=oe,ne=p(),Z=h("p"),Z.innerHTML=mt,je=p(),U=h("p"),U.innerHTML=le,de=p(),V=h("h2"),V.innerHTML=pt,Ne=p(),F=h("p"),F.textContent=ue,ce=p(),ee=h("p"),ee.innerHTML=_t,Pe=p(),J=h("h2"),J.innerHTML=me,pe=p(),te=h("p"),te.textContent=ft,Re=p(),I=h("ul"),I.innerHTML=_e,fe=p(),ae=h("p"),ae.textContent=gt,Je=p(),M&&M.c(),Q=p(),D=h("h3"),D.innerHTML=De,Be=p(),A(se.$$.fragment),Ue=p(),B=h("h2"),B.innerHTML=ge,be=p(),H&&H.c(),he=p(),Y=h("h3"),Y.innerHTML=bt,ie=p(),A(G.$$.fragment),ke=p(),X=h("h2"),X.innerHTML=ht,Fe=p(),O&&O.c(),L=p(),re=h("h3"),re.innerHTML=ma,$t=p(),A(Ie.$$.fragment),Lt=p(),we=h("h2"),we.innerHTML=pa,Et=p(),Ge=h("p"),Ge.textContent=_a,xt=p(),C&&C.c(),kt=p(),ve=h("h3"),ve.innerHTML=fa,Mt=p(),A(ze.$$.fragment),Ht=p(),ye=h("h3"),ye.innerHTML=ga,Ot=p(),Qe=h("p"),Qe.innerHTML=ba,Ct=p(),We=h("details"),We.innerHTML=ha,qt=p(),Ve=h("details"),Ve.innerHTML=ka,jt=p(),Ye=h("details"),Ye.innerHTML=wa,Nt=p(),Te=h("h2"),Te.innerHTML=va,Pt=p(),Xe=h("p"),Xe.innerHTML=ya,Rt=p(),Ke=h("table"),Ke.innerHTML=Ta,Jt=p(),Ze=h("p"),Ze.innerHTML=Sa,Dt=p(),Se=h("h3"),Se.innerHTML=Aa,Bt=p(),et=h("p"),et.textContent=$a,Ut=p(),q&&q.c(),wt=p(),Ae=h("h3"),Ae.innerHTML=La,Ft=p(),A(tt.$$.fragment),It=p(),at=h("p"),at.innerHTML=Ea,Gt=p(),$e=h("h2"),$e.innerHTML=xa,zt=p(),j&&j.c(),vt=p(),Le=h("h3"),Le.innerHTML=Ma,Qt=p(),A(st.$$.fragment),Wt=p(),Ee=h("h2"),Ee.innerHTML=Ha,Vt=p(),it=h("p"),it.innerHTML=Oa,Yt=p(),xe=h("h2"),xe.innerHTML=Ca,Xt=p(),N&&N.c(),yt=p(),Me=h("h3"),Me.innerHTML=qa,Kt=p(),A(rt.$$.fragment),Zt=p(),He=h("h2"),He.innerHTML=ja,ea=p(),P&&P.c(),Tt=p(),Oe=h("h3"),Oe.innerHTML=Na,ta=p(),A(ot.$$.fragment),this.h()},l(e){Ce&&Ce.l(e),s=m(e);const i=Ka("svelte-2igo1p",document.head);At.l(i),r=b(i,"META",{name:!0,content:!0}),t=b(i,"META",{name:!0,content:!0}),qe&&qe.l(i),d=ia(),i.forEach(o),a=m(e),l=b(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),w(l)!=="svelte-zyybda"&&(l.innerHTML=f),$=m(e),x=b(e,"P",{class:!0,"data-svelte-h":!0}),w(x)!=="svelte-r04tyf"&&(x.textContent=K),g=m(e),E=b(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(E)!=="svelte-6v7c8x"&&(E.innerHTML=oe),ne=m(e),Z=b(e,"P",{class:!0,"data-svelte-h":!0}),w(Z)!=="svelte-mb15vw"&&(Z.innerHTML=mt),je=m(e),U=b(e,"P",{class:!0,"data-svelte-h":!0}),w(U)!=="svelte-lcv107"&&(U.innerHTML=le),de=m(e),V=b(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(V)!=="svelte-9h5j2c"&&(V.innerHTML=pt),Ne=m(e),F=b(e,"P",{class:!0,"data-svelte-h":!0}),w(F)!=="svelte-187xh38"&&(F.textContent=ue),ce=m(e),ee=b(e,"P",{class:!0,"data-svelte-h":!0}),w(ee)!=="svelte-1u1pbur"&&(ee.innerHTML=_t),Pe=m(e),J=b(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(J)!=="svelte-tha1an"&&(J.innerHTML=me),pe=m(e),te=b(e,"P",{class:!0,"data-svelte-h":!0}),w(te)!=="svelte-181c7we"&&(te.textContent=ft),Re=m(e),I=b(e,"UL",{class:!0,"data-svelte-h":!0}),w(I)!=="svelte-1b78vgs"&&(I.innerHTML=_e),fe=m(e),ae=b(e,"P",{class:!0,"data-svelte-h":!0}),w(ae)!=="svelte-ns9m2e"&&(ae.textContent=gt),Je=m(e),M&&M.l(e),Q=m(e),D=b(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(D)!=="svelte-dnnx4f"&&(D.innerHTML=De),Be=m(e),S(se.$$.fragment,e),Ue=m(e),B=b(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(B)!=="svelte-17p4elo"&&(B.innerHTML=ge),be=m(e),H&&H.l(e),he=m(e),Y=b(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(Y)!=="svelte-1kl8e40"&&(Y.innerHTML=bt),ie=m(e),S(G.$$.fragment,e),ke=m(e),X=b(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(X)!=="svelte-r9k40k"&&(X.innerHTML=ht),Fe=m(e),O&&O.l(e),L=m(e),re=b(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(re)!=="svelte-d25kz4"&&(re.innerHTML=ma),$t=m(e),S(Ie.$$.fragment,e),Lt=m(e),we=b(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(we)!=="svelte-16tswz7"&&(we.innerHTML=pa),Et=m(e),Ge=b(e,"P",{class:!0,"data-svelte-h":!0}),w(Ge)!=="svelte-1kew0w8"&&(Ge.textContent=_a),xt=m(e),C&&C.l(e),kt=m(e),ve=b(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(ve)!=="svelte-1w7b33e"&&(ve.innerHTML=fa),Mt=m(e),S(ze.$$.fragment,e),Ht=m(e),ye=b(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(ye)!=="svelte-7gh4uv"&&(ye.innerHTML=ga),Ot=m(e),Qe=b(e,"P",{class:!0,"data-svelte-h":!0}),w(Qe)!=="svelte-11zo80j"&&(Qe.innerHTML=ba),Ct=m(e),We=b(e,"DETAILS",{class:!0,"data-svelte-h":!0}),w(We)!=="svelte-1rx8nya"&&(We.innerHTML=ha),qt=m(e),Ve=b(e,"DETAILS",{class:!0,"data-svelte-h":!0}),w(Ve)!=="svelte-1dhhnpv"&&(Ve.innerHTML=ka),jt=m(e),Ye=b(e,"DETAILS",{class:!0,"data-svelte-h":!0}),w(Ye)!=="svelte-h48h4g"&&(Ye.innerHTML=wa),Nt=m(e),Te=b(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(Te)!=="svelte-c5nn6f"&&(Te.innerHTML=va),Pt=m(e),Xe=b(e,"P",{class:!0,"data-svelte-h":!0}),w(Xe)!=="svelte-1r768uo"&&(Xe.innerHTML=ya),Rt=m(e),Ke=b(e,"TABLE",{class:!0,"data-svelte-h":!0}),w(Ke)!=="svelte-11wamwc"&&(Ke.innerHTML=Ta),Jt=m(e),Ze=b(e,"P",{class:!0,"data-svelte-h":!0}),w(Ze)!=="svelte-qwttqf"&&(Ze.innerHTML=Sa),Dt=m(e),Se=b(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(Se)!=="svelte-1qwidd0"&&(Se.innerHTML=Aa),Bt=m(e),et=b(e,"P",{class:!0,"data-svelte-h":!0}),w(et)!=="svelte-1z08zim"&&(et.textContent=$a),Ut=m(e),q&&q.l(e),wt=m(e),Ae=b(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(Ae)!=="svelte-1w0kwzn"&&(Ae.innerHTML=La),Ft=m(e),S(tt.$$.fragment,e),It=m(e),at=b(e,"P",{class:!0,"data-svelte-h":!0}),w(at)!=="svelte-jkg2rx"&&(at.innerHTML=Ea),Gt=m(e),$e=b(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w($e)!=="svelte-dic8qt"&&($e.innerHTML=xa),zt=m(e),j&&j.l(e),vt=m(e),Le=b(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(Le)!=="svelte-1x0205n"&&(Le.innerHTML=Ma),Qt=m(e),S(st.$$.fragment,e),Wt=m(e),Ee=b(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(Ee)!=="svelte-5ifca"&&(Ee.innerHTML=Ha),Vt=m(e),it=b(e,"P",{class:!0,"data-svelte-h":!0}),w(it)!=="svelte-11f9yh0"&&(it.innerHTML=Oa),Yt=m(e),xe=b(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(xe)!=="svelte-4j6ww5"&&(xe.innerHTML=Ca),Xt=m(e),N&&N.l(e),yt=m(e),Me=b(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(Me)!=="svelte-t27pnd"&&(Me.innerHTML=qa),Kt=m(e),S(rt.$$.fragment,e),Zt=m(e),He=b(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(He)!=="svelte-19l6r86"&&(He.innerHTML=ja),ea=m(e),P&&P.l(e),Tt=m(e),Oe=b(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(Oe)!=="svelte-19w23b3"&&(Oe.innerHTML=Na),ta=m(e),S(ot.$$.fragment,e),this.h()},h(){u(r,"name","twitter:card"),u(r,"content","summary_large_image"),u(t,"name","twitter:site"),u(t,"content","@evidence_dev"),u(l,"class","markdown"),u(l,"id","agreement-and-audit-trail"),u(x,"class","markdown"),u(E,"class","markdown"),u(E,"id","version-of-the-review-exclusions"),u(Z,"class","markdown"),u(U,"class","markdown"),u(V,"class","markdown"),u(V,"id","how-to-inspect-the-dashboard"),u(F,"class","markdown"),u(ee,"class","markdown"),u(J,"class","markdown"),u(J,"id","public-project-links"),u(te,"class","markdown"),u(I,"class","markdown"),u(ae,"class","markdown"),u(D,"class","markdown"),u(D,"id","table-1-public-project-links-and-repositories"),u(B,"class","markdown"),u(B,"id","reproducibility-package"),u(Y,"class","markdown"),u(Y,"id","table-2-public-release-bundle-components"),u(X,"class","markdown"),u(X,"id","required-checks"),u(re,"class","markdown"),u(re,"id","table-3-public-release-agreement-checks"),u(we,"class","markdown"),u(we,"id","job-ad-derived-occupation-task-pair-agreement-procedure"),u(Ge,"class","markdown"),u(ve,"class","markdown"),u(ve,"id","table-4-job-ad-derived-occupation-task-pair-agreement-outputs"),u(ye,"class","markdown"),u(ye,"id","llm-judge-prompt-templates"),u(Qe,"class","markdown"),u(We,"class","mb-4"),u(Ve,"class","mb-4"),u(Ye,"class","mb-4"),u(Te,"class","markdown"),u(Te,"id","downloadable-two-model-agreement-workbooks"),u(Xe,"class","markdown"),u(Ke,"class","markdown"),u(Ze,"class","markdown"),u(Se,"class","markdown"),u(Se,"id","green-and-stem-task-agreement-procedures"),u(et,"class","markdown"),u(Ae,"class","markdown"),u(Ae,"id","table-5-green-and-stem-task-agreement-outputs"),u(at,"class","markdown"),u($e,"class","markdown"),u($e,"id","public-inputs-and-inspection-paths"),u(Le,"class","markdown"),u(Le,"id","table-6-public-input-and-provenance-inventory"),u(Ee,"class","markdown"),u(Ee,"id","rebuild-path"),u(it,"class","markdown"),u(xe,"class","markdown"),u(xe,"id","public-safe-limits"),u(Me,"class","markdown"),u(Me,"id","table-7-public-safe-limits-and-gated-artifacts"),u(He,"class","markdown"),u(He,"id","documentation-map"),u(Oe,"class","markdown"),u(Oe,"id","table-8-audit-documentation-index")},m(e,i){Ce&&Ce.m(e,i),n(e,s,i),At.m(document.head,null),sa(document.head,r),sa(document.head,t),qe&&qe.m(document.head,null),sa(document.head,d),n(e,a,i),n(e,l,i),n(e,$,i),n(e,x,i),n(e,g,i),n(e,E,i),n(e,ne,i),n(e,Z,i),n(e,je,i),n(e,U,i),n(e,de,i),n(e,V,i),n(e,Ne,i),n(e,F,i),n(e,ce,i),n(e,ee,i),n(e,Pe,i),n(e,J,i),n(e,pe,i),n(e,te,i),n(e,Re,i),n(e,I,i),n(e,fe,i),n(e,ae,i),n(e,Je,i),M&&M.m(e,i),n(e,Q,i),n(e,D,i),n(e,Be,i),T(se,e,i),n(e,Ue,i),n(e,B,i),n(e,be,i),H&&H.m(e,i),n(e,he,i),n(e,Y,i),n(e,ie,i),T(G,e,i),n(e,ke,i),n(e,X,i),n(e,Fe,i),O&&O.m(e,i),n(e,L,i),n(e,re,i),n(e,$t,i),T(Ie,e,i),n(e,Lt,i),n(e,we,i),n(e,Et,i),n(e,Ge,i),n(e,xt,i),C&&C.m(e,i),n(e,kt,i),n(e,ve,i),n(e,Mt,i),T(ze,e,i),n(e,Ht,i),n(e,ye,i),n(e,Ot,i),n(e,Qe,i),n(e,Ct,i),n(e,We,i),n(e,qt,i),n(e,Ve,i),n(e,jt,i),n(e,Ye,i),n(e,Nt,i),n(e,Te,i),n(e,Pt,i),n(e,Xe,i),n(e,Rt,i),n(e,Ke,i),n(e,Jt,i),n(e,Ze,i),n(e,Dt,i),n(e,Se,i),n(e,Bt,i),n(e,et,i),n(e,Ut,i),q&&q.m(e,i),n(e,wt,i),n(e,Ae,i),n(e,Ft,i),T(tt,e,i),n(e,It,i),n(e,at,i),n(e,Gt,i),n(e,$e,i),n(e,zt,i),j&&j.m(e,i),n(e,vt,i),n(e,Le,i),n(e,Qt,i),T(st,e,i),n(e,Wt,i),n(e,Ee,i),n(e,Vt,i),n(e,it,i),n(e,Yt,i),n(e,xe,i),n(e,Xt,i),N&&N.m(e,i),n(e,yt,i),n(e,Me,i),n(e,Kt,i),T(rt,e,i),n(e,Zt,i),n(e,He,i),n(e,ea,i),P&&P.m(e,i),n(e,Tt,i),n(e,Oe,i),n(e,ta,i),T(ot,e,i),aa=!0},p(e,i){var Ra;typeof v<"u"&&(v.title||(Ra=v.og)!=null&&Ra.title)&&v.hide_title!==!0&&Ce.p(e,i),At.p(e,i),typeof v=="object"&&qe.p(e,i),e[0]?M?(M.p(e,i),i[0]&1&&_(M,1)):(M=Ua(e),M.c(),_(M,1),M.m(Q.parentNode,Q)):M&&(lt(),k(M,1,1,()=>{M=null}),nt());const St={};i[0]&1&&(St.data=e[0]),i[1]&536870912&&(St.$$scope={dirty:i,ctx:e}),se.$set(St),e[1]?H?(H.p(e,i),i[0]&2&&_(H,1)):(H=Fa(e),H.c(),_(H,1),H.m(he.parentNode,he)):H&&(lt(),k(H,1,1,()=>{H=null}),nt());const ra={};i[0]&2&&(ra.data=e[1]),i[1]&536870912&&(ra.$$scope={dirty:i,ctx:e}),G.$set(ra),e[2]?O?(O.p(e,i),i[0]&4&&_(O,1)):(O=Ia(e),O.c(),_(O,1),O.m(L.parentNode,L)):O&&(lt(),k(O,1,1,()=>{O=null}),nt());const oa={};i[0]&4&&(oa.data=e[2]),i[1]&536870912&&(oa.$$scope={dirty:i,ctx:e}),Ie.$set(oa),e[3]?C?(C.p(e,i),i[0]&8&&_(C,1)):(C=Ga(e),C.c(),_(C,1),C.m(kt.parentNode,kt)):C&&(lt(),k(C,1,1,()=>{C=null}),nt());const na={};i[0]&8&&(na.data=e[3]),i[1]&536870912&&(na.$$scope={dirty:i,ctx:e}),ze.$set(na),e[4]?q?(q.p(e,i),i[0]&16&&_(q,1)):(q=za(e),q.c(),_(q,1),q.m(wt.parentNode,wt)):q&&(lt(),k(q,1,1,()=>{q=null}),nt());const la={};i[0]&16&&(la.data=e[4]),i[1]&536870912&&(la.$$scope={dirty:i,ctx:e}),tt.$set(la),e[5]?j?(j.p(e,i),i[0]&32&&_(j,1)):(j=Qa(e),j.c(),_(j,1),j.m(vt.parentNode,vt)):j&&(lt(),k(j,1,1,()=>{j=null}),nt());const da={};i[0]&32&&(da.data=e[5]),i[1]&536870912&&(da.$$scope={dirty:i,ctx:e}),st.$set(da),e[6]?N?(N.p(e,i),i[0]&64&&_(N,1)):(N=Wa(e),N.c(),_(N,1),N.m(yt.parentNode,yt)):N&&(lt(),k(N,1,1,()=>{N=null}),nt());const ua={};i[0]&64&&(ua.data=e[6]),i[1]&536870912&&(ua.$$scope={dirty:i,ctx:e}),rt.$set(ua),e[7]?P?(P.p(e,i),i[0]&128&&_(P,1)):(P=Va(e),P.c(),_(P,1),P.m(Tt.parentNode,Tt)):P&&(lt(),k(P,1,1,()=>{P=null}),nt());const ca={};i[0]&128&&(ca.data=e[7]),i[1]&536870912&&(ca.$$scope={dirty:i,ctx:e}),ot.$set(ca)},i(e){aa||(_(M),_(se.$$.fragment,e),_(H),_(G.$$.fragment,e),_(O),_(Ie.$$.fragment,e),_(C),_(ze.$$.fragment,e),_(q),_(tt.$$.fragment,e),_(j),_(st.$$.fragment,e),_(N),_(rt.$$.fragment,e),_(P),_(ot.$$.fragment,e),aa=!0)},o(e){k(M),k(se.$$.fragment,e),k(H),k(G.$$.fragment,e),k(O),k(Ie.$$.fragment,e),k(C),k(ze.$$.fragment,e),k(q),k(tt.$$.fragment,e),k(j),k(st.$$.fragment,e),k(N),k(rt.$$.fragment,e),k(P),k(ot.$$.fragment,e),aa=!1},d(e){e&&(o(s),o(a),o(l),o($),o(x),o(g),o(E),o(ne),o(Z),o(je),o(U),o(de),o(V),o(Ne),o(F),o(ce),o(ee),o(Pe),o(J),o(pe),o(te),o(Re),o(I),o(fe),o(ae),o(Je),o(Q),o(D),o(Be),o(Ue),o(B),o(be),o(he),o(Y),o(ie),o(ke),o(X),o(Fe),o(L),o(re),o($t),o(Lt),o(we),o(Et),o(Ge),o(xt),o(kt),o(ve),o(Mt),o(Ht),o(ye),o(Ot),o(Qe),o(Ct),o(We),o(qt),o(Ve),o(jt),o(Ye),o(Nt),o(Te),o(Pt),o(Xe),o(Rt),o(Ke),o(Jt),o(Ze),o(Dt),o(Se),o(Bt),o(et),o(Ut),o(wt),o(Ae),o(Ft),o(It),o(at),o(Gt),o($e),o(zt),o(vt),o(Le),o(Qt),o(Wt),o(Ee),o(Vt),o(it),o(Yt),o(xe),o(Xt),o(yt),o(Me),o(Kt),o(Zt),o(He),o(ea),o(Tt),o(Oe),o(ta)),Ce&&Ce.d(e),At.d(e),o(r),o(t),qe&&qe.d(e),o(d),M&&M.d(e),y(se,e),H&&H.d(e),y(G,e),O&&O.d(e),y(Ie,e),C&&C.d(e),y(ze,e),q&&q.d(e),y(tt,e),j&&j.d(e),y(st,e),N&&N.d(e),y(rt,e),P&&P.d(e),y(ot,e)}}}const v={};function Ms(c,s,r){let t,d;Ja(c,ps,L=>r(42,t=L)),Ja(c,Ba,L=>r(48,d=L));let{data:a}=s,{data:l={},customFormattingSettings:f,__db:$,inputs:x}=a;Za(Ba,d="d55020c7d2111a1324f2df007bb2f179",d);let K=ds(ls(x));es(K.subscribe(L=>x=L)),ts(ms,{getCustomFormats:()=>f.customFormats||[]});const g=(L,re)=>_s($.query,L,{query_name:re});us(g),t.params,as(()=>!0);let E={initialData:void 0,initialError:void 0},oe=z`select *
from (
  values
    ('Project organization', 'GitHub', 'https://github.com/Job-Ad-Research-at-QSB-LUC'),
    ('JAAT software', 'GitHub', 'https://github.com/Job-Ad-Research-at-QSB-LUC/JAAT'),
    ('Dashboard audit repository', 'GitHub', 'https://github.com/Job-Ad-Research-at-QSB-LUC/jaat-lmi-dashboard-audit/'),
    ('JAAT models', 'Hugging Face', 'https://huggingface.co/loyoladatamining/models'),
    ('USAJOBS raw text', 'Hugging Face dataset', 'https://huggingface.co/datasets/loyoladatamining/usajobs'),
    ('USAJOBS JAAT-coded output', 'Hugging Face dataset', 'https://huggingface.co/datasets/loyoladatamining/usajobs_coded'),
    ('USAJOBS HTML metadata', 'Hugging Face dataset', 'https://huggingface.co/datasets/loyoladatamining/usajobs_html_metadata'),
    ('Monthly NLx aggregate data', 'Zenodo', 'https://doi.org/10.5281/zenodo.22219027'),
    ('Software and website snapshots', 'Zenodo', 'https://doi.org/10.5281/zenodo.23426701')
) as t(resource, host, url_or_status)`,ne=`select *
from (
  values
    ('Project organization', 'GitHub', 'https://github.com/Job-Ad-Research-at-QSB-LUC'),
    ('JAAT software', 'GitHub', 'https://github.com/Job-Ad-Research-at-QSB-LUC/JAAT'),
    ('Dashboard audit repository', 'GitHub', 'https://github.com/Job-Ad-Research-at-QSB-LUC/jaat-lmi-dashboard-audit/'),
    ('JAAT models', 'Hugging Face', 'https://huggingface.co/loyoladatamining/models'),
    ('USAJOBS raw text', 'Hugging Face dataset', 'https://huggingface.co/datasets/loyoladatamining/usajobs'),
    ('USAJOBS JAAT-coded output', 'Hugging Face dataset', 'https://huggingface.co/datasets/loyoladatamining/usajobs_coded'),
    ('USAJOBS HTML metadata', 'Hugging Face dataset', 'https://huggingface.co/datasets/loyoladatamining/usajobs_html_metadata'),
    ('Monthly NLx aggregate data', 'Zenodo', 'https://doi.org/10.5281/zenodo.22219027'),
    ('Software and website snapshots', 'Zenodo', 'https://doi.org/10.5281/zenodo.23426701')
) as t(resource, host, url_or_status)`;l.audit_project_links_data&&(l.audit_project_links_data instanceof Error?E.initialError=l.audit_project_links_data:E.initialData=l.audit_project_links_data,l.audit_project_links_columns&&(E.knownColumns=l.audit_project_links_columns));let Z,mt=!1;const je=ut.createReactive({callback:L=>{r(0,Z=L)},execFn:g},{id:"audit_project_links",...E});je(ne,{noResolve:oe,...E}),globalThis[Symbol.for("audit_project_links")]={get value(){return Z}};let U={initialData:void 0,initialError:void 0},le=z`select *
from (
  values
    ('Dashboard repository', 'Evidence pages, source SQL, ETL, audit scripts, README, and methodology docs', 'Public dashboard source repository'),
    ('DuckDB warehouse', 'Public-safe usajobs_v4.duckdb with USAJOBS posting tables, public aggregate tables from the NLx corpus, LLM-validated task tables, and lookup tables', 'Public artifact release: warehouse/usajobs_v4.duckdb'),
    ('Generated Evidence sources', 'Materialized NLx corpus and USAJOBS source parquets used directly by the dashboard pages', 'Public artifact release: evidence-sources/'),
    ('Derived files', 'Canonical O*NET pair cascade CSV and other generated files that sit outside Evidence source SQL', 'Public artifact release: derived/'),
    ('Crosswalk snapshots', 'O*NET 27.2, AI taxonomy, ESCO, BLS, and occupation-task agreement snapshots, including LLM-validated outputs and blocklists', 'Public artifact release: crosswalks/'),
    ('Checksums', 'ARTIFACTS.csv with bytes and SHA-256 digests', 'Public artifact release: ARTIFACTS.csv')
) as t(component, contents, publication_step)`,de=`select *
from (
  values
    ('Dashboard repository', 'Evidence pages, source SQL, ETL, audit scripts, README, and methodology docs', 'Public dashboard source repository'),
    ('DuckDB warehouse', 'Public-safe usajobs_v4.duckdb with USAJOBS posting tables, public aggregate tables from the NLx corpus, LLM-validated task tables, and lookup tables', 'Public artifact release: warehouse/usajobs_v4.duckdb'),
    ('Generated Evidence sources', 'Materialized NLx corpus and USAJOBS source parquets used directly by the dashboard pages', 'Public artifact release: evidence-sources/'),
    ('Derived files', 'Canonical O*NET pair cascade CSV and other generated files that sit outside Evidence source SQL', 'Public artifact release: derived/'),
    ('Crosswalk snapshots', 'O*NET 27.2, AI taxonomy, ESCO, BLS, and occupation-task agreement snapshots, including LLM-validated outputs and blocklists', 'Public artifact release: crosswalks/'),
    ('Checksums', 'ARTIFACTS.csv with bytes and SHA-256 digests', 'Public artifact release: ARTIFACTS.csv')
) as t(component, contents, publication_step)`;l.audit_bundle_components_data&&(l.audit_bundle_components_data instanceof Error?U.initialError=l.audit_bundle_components_data:U.initialData=l.audit_bundle_components_data,l.audit_bundle_components_columns&&(U.knownColumns=l.audit_bundle_components_columns));let V,pt=!1;const Ne=ut.createReactive({callback:L=>{r(1,V=L)},execFn:g},{id:"audit_bundle_components",...U});Ne(de,{noResolve:le,...U}),globalThis[Symbol.for("audit_bundle_components")]={get value(){return V}};let F={initialData:void 0,initialError:void 0},ue=z`select *
from (
  values
    ('Build dashboard', 'npm run build', 'Static Evidence site writes to build/'),
    ('Audit dashboard links', 'npm run audit:links', 'Internal page, download, and asset links resolve in the dashboard source tree'),
    ('Public release invariants', 'python3 bin/check_public_release.py', 'Source/materialized parity, staged artifact presence, retired-file exclusions'),
    ('Public input completeness', 'python3 bin/check_public_inputs.py --publish-dir ... --nlx-dir ... --crosswalk-dir ...', 'Public USAJOBS, NLx corpus aggregate, and crosswalk inputs can rebuild the release'),
    ('Novel occupation-task agreement sources', 'python3 bin/check_agreement_retained_task_sources.py', 'Task-derived public sources use LLM-validated task rows except the pre-review universe histogram'),
    ('O*NET skill bridge', 'python3 bin/check_onet_skill_bridge.py', 'O*NET 27.2 Work Activities to Skills crosswalk is usable'),
    ('AI keyword correlation', 'python3 bin/check_ai_keyword_correlation.py', 'Occupation-level AI evidence source is internally consistent'),
    ('Artifact staging dry run', 'python3 bin/stage_public_artifacts.py --dry-run', 'Lists upload bundle size, file count, and missing required artifacts')
) as t(check_name, command, proves)`,ce=`select *
from (
  values
    ('Build dashboard', 'npm run build', 'Static Evidence site writes to build/'),
    ('Audit dashboard links', 'npm run audit:links', 'Internal page, download, and asset links resolve in the dashboard source tree'),
    ('Public release invariants', 'python3 bin/check_public_release.py', 'Source/materialized parity, staged artifact presence, retired-file exclusions'),
    ('Public input completeness', 'python3 bin/check_public_inputs.py --publish-dir ... --nlx-dir ... --crosswalk-dir ...', 'Public USAJOBS, NLx corpus aggregate, and crosswalk inputs can rebuild the release'),
    ('Novel occupation-task agreement sources', 'python3 bin/check_agreement_retained_task_sources.py', 'Task-derived public sources use LLM-validated task rows except the pre-review universe histogram'),
    ('O*NET skill bridge', 'python3 bin/check_onet_skill_bridge.py', 'O*NET 27.2 Work Activities to Skills crosswalk is usable'),
    ('AI keyword correlation', 'python3 bin/check_ai_keyword_correlation.py', 'Occupation-level AI evidence source is internally consistent'),
    ('Artifact staging dry run', 'python3 bin/stage_public_artifacts.py --dry-run', 'Lists upload bundle size, file count, and missing required artifacts')
) as t(check_name, command, proves)`;l.audit_checks_data&&(l.audit_checks_data instanceof Error?F.initialError=l.audit_checks_data:F.initialData=l.audit_checks_data,l.audit_checks_columns&&(F.knownColumns=l.audit_checks_columns));let ee,_t=!1;const Pe=ut.createReactive({callback:L=>{r(2,ee=L)},execFn:g},{id:"audit_checks",...F});Pe(ce,{noResolve:ue,...F}),globalThis[Symbol.for("audit_checks")]={get value(){return ee}};let J={initialData:void 0,initialError:void 0},me=z`select *
from (
  values
    ('LLM-validated downstream profiles', 'NLx corpus and USAJOBS task profiles, Work Activity profiles, and crosswalked O*NET skills use rows retained by the job-ad-derived occupation-task pair two-model agreement procedure.'),
    ('Pre-agreement-review universe', 'The Finding 1 JAAT occupation-task pair universe histogram is intentionally pre-agreement-review because it describes the extracted pair universe before filtering.'),
    ('Two-model agreement rule', 'Canonical O*NET-listed pairs are retained; unlisted pairs are retained under the two-model unanimous YES rule. Gemini v2 is diagnostic only.'),
    ('Dashboard agreement results', 'The dashboard includes aggregate LLM agreement result sources for pass rates, agreement, reliability, consensus histograms, migration gradients, and boundary cases.'),
    ('Null baseline', 'A 300-pair negative-control sample pairs occupations and O*NET tasks independently, with no JAAT co-occurrence requirement and no mention floor, to test whether arbitrary pairings pass the same two-model agreement prompt at rates comparable to JAAT-derived pairs.'),
    ('Blocklist application', 'The public warehouse applies the agreement blocklist to build JaatTasks_Validated and NLX_job_tasks_Validated before downstream task-derived sources are materialized.')
) as t(scope, note)`,pe=`select *
from (
  values
    ('LLM-validated downstream profiles', 'NLx corpus and USAJOBS task profiles, Work Activity profiles, and crosswalked O*NET skills use rows retained by the job-ad-derived occupation-task pair two-model agreement procedure.'),
    ('Pre-agreement-review universe', 'The Finding 1 JAAT occupation-task pair universe histogram is intentionally pre-agreement-review because it describes the extracted pair universe before filtering.'),
    ('Two-model agreement rule', 'Canonical O*NET-listed pairs are retained; unlisted pairs are retained under the two-model unanimous YES rule. Gemini v2 is diagnostic only.'),
    ('Dashboard agreement results', 'The dashboard includes aggregate LLM agreement result sources for pass rates, agreement, reliability, consensus histograms, migration gradients, and boundary cases.'),
    ('Null baseline', 'A 300-pair negative-control sample pairs occupations and O*NET tasks independently, with no JAAT co-occurrence requirement and no mention floor, to test whether arbitrary pairings pass the same two-model agreement prompt at rates comparable to JAAT-derived pairs.'),
    ('Blocklist application', 'The public warehouse applies the agreement blocklist to build JaatTasks_Validated and NLX_job_tasks_Validated before downstream task-derived sources are materialized.')
) as t(scope, note)`;l.audit_llm_agreement_data&&(l.audit_llm_agreement_data instanceof Error?J.initialError=l.audit_llm_agreement_data:J.initialData=l.audit_llm_agreement_data,l.audit_llm_agreement_columns&&(J.knownColumns=l.audit_llm_agreement_columns));let te,ft=!1;const Re=ut.createReactive({callback:L=>{r(3,te=L)},execFn:g},{id:"audit_llm_agreement",...J});Re(pe,{noResolve:me,...J}),globalThis[Symbol.for("audit_llm_agreement")]={get value(){return te}};let I={initialData:void 0,initialError:void 0},_e=z`select
  'Green' as signal,
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  error_n,
  pass_rate
from usajobs.AGGR_SonnetGptGreenTasks_Summary
union all
select
  'STEM' as signal,
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  error_n,
  pass_rate
from usajobs.AGGR_SonnetGptStemTasks_Summary
order by signal, agreement_group`,fe=`select
  'Green' as signal,
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  error_n,
  pass_rate
from usajobs.AGGR_SonnetGptGreenTasks_Summary
union all
select
  'STEM' as signal,
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  error_n,
  pass_rate
from usajobs.AGGR_SonnetGptStemTasks_Summary
order by signal, agreement_group`;l.audit_green_stem_agreement_data&&(l.audit_green_stem_agreement_data instanceof Error?I.initialError=l.audit_green_stem_agreement_data:I.initialData=l.audit_green_stem_agreement_data,l.audit_green_stem_agreement_columns&&(I.knownColumns=l.audit_green_stem_agreement_columns));let ae,gt=!1;const Je=ut.createReactive({callback:L=>{r(4,ae=L)},execFn:g},{id:"audit_green_stem_agreement",...I});Je(fe,{noResolve:_e,...I}),globalThis[Symbol.for("audit_green_stem_agreement")]={get value(){return ae}};let Q={initialData:void 0,initialError:void 0},D=z`select *
from (
  values
    ('DuckDB warehouse', 'warehouse/usajobs_v4.duckdb', 'Open with DuckDB to inspect source tables, LLM-validated task tables, and lookup joins used by Evidence SQL.'),
    ('Evidence source parquets', 'evidence-sources/nlx/ and evidence-sources/usajobs/', 'Read directly to reproduce dashboard figures without rerunning the full ETL.'),
    ('NLx corpus aggregates', 'Public aggregate bundle from the NLx corpus plus materialized Evidence sources', 'Provides monthly active jobs, task, Work Activity, skill, industry, and occupation aggregates without raw posting text from the NLx corpus.'),
    ('USAJOBS coded parquets', 'Hugging Face loyoladatamining/usajobs_coded', 'Rebuilds the public USAJOBS warehouse tables from public JAAT-coded posting outputs.'),
    ('USAJOBS metadata parquet', 'Hugging Face loyoladatamining/usajobs_html_metadata', 'Provides posting metadata needed for dates, agencies, occupations, and denominators.'),
    ('Agreement workbooks', 'crosswalks/sonnet_gpt_*_results.xlsx', 'Coauthor/public audit workbooks with reviewed, LLM-validated, disagreed, metadata, and agreement-statistic sheets.'),
    ('Legacy agreement CSVs', 'crosswalks/llm_as_judge_*.csv', 'Compatibility inputs retained for existing SQL and warehouse rebuilds; public prose refers to them by their two-model agreement meaning.'),
    ('O*NET 27.2 crosswalks', 'crosswalks/onet_task_statements_27_2.csv, task_wa_map_27_2.csv, onet_skills_to_work_activities_27_2.csv', 'Map extracted O*NET tasks to Work Activities and crosswalk Work Activities to O*NET skills.'),
    ('O*NET Skills/Knowledge/Abilities snapshots', 'output/parquet_v4/OnetSkills.parquet, OnetKnowledge.parquet, OnetAbilities.parquet', 'Provide occupation-by-element importance scores for the skills complementarity network and NLx-weighted O*NET projection.'),
    ('AI and external skill crosswalks', 'crosswalks/ai_a6_5_redacted_final2.csv, ai_v2_to_v5_crosswalk.csv, esco_skill_labels(esco_labels).csv', 'Provide public AI labels and external skill labels used in dashboard profiles and comparisons.')
) as t(input_group, package_path_or_source, inspection_use)`,De=`select *
from (
  values
    ('DuckDB warehouse', 'warehouse/usajobs_v4.duckdb', 'Open with DuckDB to inspect source tables, LLM-validated task tables, and lookup joins used by Evidence SQL.'),
    ('Evidence source parquets', 'evidence-sources/nlx/ and evidence-sources/usajobs/', 'Read directly to reproduce dashboard figures without rerunning the full ETL.'),
    ('NLx corpus aggregates', 'Public aggregate bundle from the NLx corpus plus materialized Evidence sources', 'Provides monthly active jobs, task, Work Activity, skill, industry, and occupation aggregates without raw posting text from the NLx corpus.'),
    ('USAJOBS coded parquets', 'Hugging Face loyoladatamining/usajobs_coded', 'Rebuilds the public USAJOBS warehouse tables from public JAAT-coded posting outputs.'),
    ('USAJOBS metadata parquet', 'Hugging Face loyoladatamining/usajobs_html_metadata', 'Provides posting metadata needed for dates, agencies, occupations, and denominators.'),
    ('Agreement workbooks', 'crosswalks/sonnet_gpt_*_results.xlsx', 'Coauthor/public audit workbooks with reviewed, LLM-validated, disagreed, metadata, and agreement-statistic sheets.'),
    ('Legacy agreement CSVs', 'crosswalks/llm_as_judge_*.csv', 'Compatibility inputs retained for existing SQL and warehouse rebuilds; public prose refers to them by their two-model agreement meaning.'),
    ('O*NET 27.2 crosswalks', 'crosswalks/onet_task_statements_27_2.csv, task_wa_map_27_2.csv, onet_skills_to_work_activities_27_2.csv', 'Map extracted O*NET tasks to Work Activities and crosswalk Work Activities to O*NET skills.'),
    ('O*NET Skills/Knowledge/Abilities snapshots', 'output/parquet_v4/OnetSkills.parquet, OnetKnowledge.parquet, OnetAbilities.parquet', 'Provide occupation-by-element importance scores for the skills complementarity network and NLx-weighted O*NET projection.'),
    ('AI and external skill crosswalks', 'crosswalks/ai_a6_5_redacted_final2.csv, ai_v2_to_v5_crosswalk.csv, esco_skill_labels(esco_labels).csv', 'Provide public AI labels and external skill labels used in dashboard profiles and comparisons.')
) as t(input_group, package_path_or_source, inspection_use)`;l.audit_inputs_data&&(l.audit_inputs_data instanceof Error?Q.initialError=l.audit_inputs_data:Q.initialData=l.audit_inputs_data,l.audit_inputs_columns&&(Q.knownColumns=l.audit_inputs_columns));let Be,se=!1;const Ue=ut.createReactive({callback:L=>{r(5,Be=L)},execFn:g},{id:"audit_inputs",...Q});Ue(De,{noResolve:D,...Q}),globalThis[Symbol.for("audit_inputs")]={get value(){return Be}};let B={initialData:void 0,initialError:void 0},ge=z`select *
from (
  values
    ('Raw NLx corpus posting text', 'Not public; dashboard uses aggregate files and materialized Evidence source parquets. For more information, see https://nlxresearchhub.org/.'),
    ('USAJOBS sentence examples', 'Held until a public-safe sentence-level artifact exists.'),
    ('External crosswalk versions', 'Frozen in the bundle so future upstream revisions do not silently change dashboard results.'),
    ('Generated build outputs', 'Not committed to git; reproduced by build commands and staged with checksums when needed.')
) as t(public_limit, treatment)`,be=`select *
from (
  values
    ('Raw NLx corpus posting text', 'Not public; dashboard uses aggregate files and materialized Evidence source parquets. For more information, see https://nlxresearchhub.org/.'),
    ('USAJOBS sentence examples', 'Held until a public-safe sentence-level artifact exists.'),
    ('External crosswalk versions', 'Frozen in the bundle so future upstream revisions do not silently change dashboard results.'),
    ('Generated build outputs', 'Not committed to git; reproduced by build commands and staged with checksums when needed.')
) as t(public_limit, treatment)`;l.audit_limits_data&&(l.audit_limits_data instanceof Error?B.initialError=l.audit_limits_data:B.initialData=l.audit_limits_data,l.audit_limits_columns&&(B.knownColumns=l.audit_limits_columns));let he,Y=!1;const bt=ut.createReactive({callback:L=>{r(6,he=L)},execFn:g},{id:"audit_limits",...B});bt(be,{noResolve:ge,...B}),globalThis[Symbol.for("audit_limits")]={get value(){return he}};let ie={initialData:void 0,initialError:void 0},G=z`select *
from (
  values
    ('docs/reproducibility-bundle.md', 'Publication checklist and bundle layout'),
    ('docs/data-audit/public-artifact-manifest.md', 'Staged artifact manifest and crosswalk provenance'),
    ('docs/data-audit/public-codebook.md', 'Artifact grains, denominator definitions, and source groups'),
    ('docs/data-audit/public-dashboard-audit.md', 'Dashboard audit notes'),
    ('docs/data-audit/public-reproducibility-gap-audit.md', 'Remaining rebuild and public-input gaps'),
    ('docs/findings-ledger.md', 'Dashboard-facing numeric claims and source SQL'),
    ('docs/methodology/sonnet_gpt_onet_occ_pairs_methodology.md', 'job-ad-derived occupation-task pair two-model agreement procedure method')
) as t(document, role)`,ke=`select *
from (
  values
    ('docs/reproducibility-bundle.md', 'Publication checklist and bundle layout'),
    ('docs/data-audit/public-artifact-manifest.md', 'Staged artifact manifest and crosswalk provenance'),
    ('docs/data-audit/public-codebook.md', 'Artifact grains, denominator definitions, and source groups'),
    ('docs/data-audit/public-dashboard-audit.md', 'Dashboard audit notes'),
    ('docs/data-audit/public-reproducibility-gap-audit.md', 'Remaining rebuild and public-input gaps'),
    ('docs/findings-ledger.md', 'Dashboard-facing numeric claims and source SQL'),
    ('docs/methodology/sonnet_gpt_onet_occ_pairs_methodology.md', 'job-ad-derived occupation-task pair two-model agreement procedure method')
) as t(document, role)`;l.audit_documentation_data&&(l.audit_documentation_data instanceof Error?ie.initialError=l.audit_documentation_data:ie.initialData=l.audit_documentation_data,l.audit_documentation_columns&&(ie.knownColumns=l.audit_documentation_columns));let X,ht=!1;const Fe=ut.createReactive({callback:L=>{r(7,X=L)},execFn:g},{id:"audit_documentation",...ie});return Fe(ke,{noResolve:G,...ie}),globalThis[Symbol.for("audit_documentation")]={get value(){return X}},c.$$set=L=>{"data"in L&&r(8,a=L.data)},c.$$.update=()=>{c.$$.dirty[0]&256&&r(9,{data:l={},customFormattingSettings:f,__db:$}=a,l),c.$$.dirty[0]&512&&cs.set(Object.keys(l).length>0),c.$$.dirty[1]&2048&&t.params,c.$$.dirty[0]&15360&&(oe||!mt?oe||(je(ne,{noResolve:oe,...E}),r(13,mt=!0)):je(ne,{noResolve:oe})),c.$$.dirty[0]&245760&&(le||!pt?le||(Ne(de,{noResolve:le,...U}),r(17,pt=!0)):Ne(de,{noResolve:le})),c.$$.dirty[0]&3932160&&(ue||!_t?ue||(Pe(ce,{noResolve:ue,...F}),r(21,_t=!0)):Pe(ce,{noResolve:ue})),c.$$.dirty[0]&62914560&&(me||!ft?me||(Re(pe,{noResolve:me,...J}),r(25,ft=!0)):Re(pe,{noResolve:me})),c.$$.dirty[0]&1006632960&&(_e||!gt?_e||(Je(fe,{noResolve:_e,...I}),r(29,gt=!0)):Je(fe,{noResolve:_e})),c.$$.dirty[0]&1073741824|c.$$.dirty[1]&7&&(D||!se?D||(Ue(De,{noResolve:D,...Q}),r(33,se=!0)):Ue(De,{noResolve:D})),c.$$.dirty[1]&120&&(ge||!Y?ge||(bt(be,{noResolve:ge,...B}),r(37,Y=!0)):bt(be,{noResolve:ge})),c.$$.dirty[1]&1920&&(G||!ht?G||(Fe(ke,{noResolve:G,...ie}),r(41,ht=!0)):Fe(ke,{noResolve:G}))},r(11,oe=z`select *
from (
  values
    ('Project organization', 'GitHub', 'https://github.com/Job-Ad-Research-at-QSB-LUC'),
    ('JAAT software', 'GitHub', 'https://github.com/Job-Ad-Research-at-QSB-LUC/JAAT'),
    ('Dashboard audit repository', 'GitHub', 'https://github.com/Job-Ad-Research-at-QSB-LUC/jaat-lmi-dashboard-audit/'),
    ('JAAT models', 'Hugging Face', 'https://huggingface.co/loyoladatamining/models'),
    ('USAJOBS raw text', 'Hugging Face dataset', 'https://huggingface.co/datasets/loyoladatamining/usajobs'),
    ('USAJOBS JAAT-coded output', 'Hugging Face dataset', 'https://huggingface.co/datasets/loyoladatamining/usajobs_coded'),
    ('USAJOBS HTML metadata', 'Hugging Face dataset', 'https://huggingface.co/datasets/loyoladatamining/usajobs_html_metadata'),
    ('Monthly NLx aggregate data', 'Zenodo', 'https://doi.org/10.5281/zenodo.22219027'),
    ('Software and website snapshots', 'Zenodo', 'https://doi.org/10.5281/zenodo.23426701')
) as t(resource, host, url_or_status)`),r(12,ne=`select *
from (
  values
    ('Project organization', 'GitHub', 'https://github.com/Job-Ad-Research-at-QSB-LUC'),
    ('JAAT software', 'GitHub', 'https://github.com/Job-Ad-Research-at-QSB-LUC/JAAT'),
    ('Dashboard audit repository', 'GitHub', 'https://github.com/Job-Ad-Research-at-QSB-LUC/jaat-lmi-dashboard-audit/'),
    ('JAAT models', 'Hugging Face', 'https://huggingface.co/loyoladatamining/models'),
    ('USAJOBS raw text', 'Hugging Face dataset', 'https://huggingface.co/datasets/loyoladatamining/usajobs'),
    ('USAJOBS JAAT-coded output', 'Hugging Face dataset', 'https://huggingface.co/datasets/loyoladatamining/usajobs_coded'),
    ('USAJOBS HTML metadata', 'Hugging Face dataset', 'https://huggingface.co/datasets/loyoladatamining/usajobs_html_metadata'),
    ('Monthly NLx aggregate data', 'Zenodo', 'https://doi.org/10.5281/zenodo.22219027'),
    ('Software and website snapshots', 'Zenodo', 'https://doi.org/10.5281/zenodo.23426701')
) as t(resource, host, url_or_status)`),r(15,le=z`select *
from (
  values
    ('Dashboard repository', 'Evidence pages, source SQL, ETL, audit scripts, README, and methodology docs', 'Public dashboard source repository'),
    ('DuckDB warehouse', 'Public-safe usajobs_v4.duckdb with USAJOBS posting tables, public aggregate tables from the NLx corpus, LLM-validated task tables, and lookup tables', 'Public artifact release: warehouse/usajobs_v4.duckdb'),
    ('Generated Evidence sources', 'Materialized NLx corpus and USAJOBS source parquets used directly by the dashboard pages', 'Public artifact release: evidence-sources/'),
    ('Derived files', 'Canonical O*NET pair cascade CSV and other generated files that sit outside Evidence source SQL', 'Public artifact release: derived/'),
    ('Crosswalk snapshots', 'O*NET 27.2, AI taxonomy, ESCO, BLS, and occupation-task agreement snapshots, including LLM-validated outputs and blocklists', 'Public artifact release: crosswalks/'),
    ('Checksums', 'ARTIFACTS.csv with bytes and SHA-256 digests', 'Public artifact release: ARTIFACTS.csv')
) as t(component, contents, publication_step)`),r(16,de=`select *
from (
  values
    ('Dashboard repository', 'Evidence pages, source SQL, ETL, audit scripts, README, and methodology docs', 'Public dashboard source repository'),
    ('DuckDB warehouse', 'Public-safe usajobs_v4.duckdb with USAJOBS posting tables, public aggregate tables from the NLx corpus, LLM-validated task tables, and lookup tables', 'Public artifact release: warehouse/usajobs_v4.duckdb'),
    ('Generated Evidence sources', 'Materialized NLx corpus and USAJOBS source parquets used directly by the dashboard pages', 'Public artifact release: evidence-sources/'),
    ('Derived files', 'Canonical O*NET pair cascade CSV and other generated files that sit outside Evidence source SQL', 'Public artifact release: derived/'),
    ('Crosswalk snapshots', 'O*NET 27.2, AI taxonomy, ESCO, BLS, and occupation-task agreement snapshots, including LLM-validated outputs and blocklists', 'Public artifact release: crosswalks/'),
    ('Checksums', 'ARTIFACTS.csv with bytes and SHA-256 digests', 'Public artifact release: ARTIFACTS.csv')
) as t(component, contents, publication_step)`),r(19,ue=z`select *
from (
  values
    ('Build dashboard', 'npm run build', 'Static Evidence site writes to build/'),
    ('Audit dashboard links', 'npm run audit:links', 'Internal page, download, and asset links resolve in the dashboard source tree'),
    ('Public release invariants', 'python3 bin/check_public_release.py', 'Source/materialized parity, staged artifact presence, retired-file exclusions'),
    ('Public input completeness', 'python3 bin/check_public_inputs.py --publish-dir ... --nlx-dir ... --crosswalk-dir ...', 'Public USAJOBS, NLx corpus aggregate, and crosswalk inputs can rebuild the release'),
    ('Novel occupation-task agreement sources', 'python3 bin/check_agreement_retained_task_sources.py', 'Task-derived public sources use LLM-validated task rows except the pre-review universe histogram'),
    ('O*NET skill bridge', 'python3 bin/check_onet_skill_bridge.py', 'O*NET 27.2 Work Activities to Skills crosswalk is usable'),
    ('AI keyword correlation', 'python3 bin/check_ai_keyword_correlation.py', 'Occupation-level AI evidence source is internally consistent'),
    ('Artifact staging dry run', 'python3 bin/stage_public_artifacts.py --dry-run', 'Lists upload bundle size, file count, and missing required artifacts')
) as t(check_name, command, proves)`),r(20,ce=`select *
from (
  values
    ('Build dashboard', 'npm run build', 'Static Evidence site writes to build/'),
    ('Audit dashboard links', 'npm run audit:links', 'Internal page, download, and asset links resolve in the dashboard source tree'),
    ('Public release invariants', 'python3 bin/check_public_release.py', 'Source/materialized parity, staged artifact presence, retired-file exclusions'),
    ('Public input completeness', 'python3 bin/check_public_inputs.py --publish-dir ... --nlx-dir ... --crosswalk-dir ...', 'Public USAJOBS, NLx corpus aggregate, and crosswalk inputs can rebuild the release'),
    ('Novel occupation-task agreement sources', 'python3 bin/check_agreement_retained_task_sources.py', 'Task-derived public sources use LLM-validated task rows except the pre-review universe histogram'),
    ('O*NET skill bridge', 'python3 bin/check_onet_skill_bridge.py', 'O*NET 27.2 Work Activities to Skills crosswalk is usable'),
    ('AI keyword correlation', 'python3 bin/check_ai_keyword_correlation.py', 'Occupation-level AI evidence source is internally consistent'),
    ('Artifact staging dry run', 'python3 bin/stage_public_artifacts.py --dry-run', 'Lists upload bundle size, file count, and missing required artifacts')
) as t(check_name, command, proves)`),r(23,me=z`select *
from (
  values
    ('LLM-validated downstream profiles', 'NLx corpus and USAJOBS task profiles, Work Activity profiles, and crosswalked O*NET skills use rows retained by the job-ad-derived occupation-task pair two-model agreement procedure.'),
    ('Pre-agreement-review universe', 'The Finding 1 JAAT occupation-task pair universe histogram is intentionally pre-agreement-review because it describes the extracted pair universe before filtering.'),
    ('Two-model agreement rule', 'Canonical O*NET-listed pairs are retained; unlisted pairs are retained under the two-model unanimous YES rule. Gemini v2 is diagnostic only.'),
    ('Dashboard agreement results', 'The dashboard includes aggregate LLM agreement result sources for pass rates, agreement, reliability, consensus histograms, migration gradients, and boundary cases.'),
    ('Null baseline', 'A 300-pair negative-control sample pairs occupations and O*NET tasks independently, with no JAAT co-occurrence requirement and no mention floor, to test whether arbitrary pairings pass the same two-model agreement prompt at rates comparable to JAAT-derived pairs.'),
    ('Blocklist application', 'The public warehouse applies the agreement blocklist to build JaatTasks_Validated and NLX_job_tasks_Validated before downstream task-derived sources are materialized.')
) as t(scope, note)`),r(24,pe=`select *
from (
  values
    ('LLM-validated downstream profiles', 'NLx corpus and USAJOBS task profiles, Work Activity profiles, and crosswalked O*NET skills use rows retained by the job-ad-derived occupation-task pair two-model agreement procedure.'),
    ('Pre-agreement-review universe', 'The Finding 1 JAAT occupation-task pair universe histogram is intentionally pre-agreement-review because it describes the extracted pair universe before filtering.'),
    ('Two-model agreement rule', 'Canonical O*NET-listed pairs are retained; unlisted pairs are retained under the two-model unanimous YES rule. Gemini v2 is diagnostic only.'),
    ('Dashboard agreement results', 'The dashboard includes aggregate LLM agreement result sources for pass rates, agreement, reliability, consensus histograms, migration gradients, and boundary cases.'),
    ('Null baseline', 'A 300-pair negative-control sample pairs occupations and O*NET tasks independently, with no JAAT co-occurrence requirement and no mention floor, to test whether arbitrary pairings pass the same two-model agreement prompt at rates comparable to JAAT-derived pairs.'),
    ('Blocklist application', 'The public warehouse applies the agreement blocklist to build JaatTasks_Validated and NLX_job_tasks_Validated before downstream task-derived sources are materialized.')
) as t(scope, note)`),r(27,_e=z`select
  'Green' as signal,
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  error_n,
  pass_rate
from usajobs.AGGR_SonnetGptGreenTasks_Summary
union all
select
  'STEM' as signal,
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  error_n,
  pass_rate
from usajobs.AGGR_SonnetGptStemTasks_Summary
order by signal, agreement_group`),r(28,fe=`select
  'Green' as signal,
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  error_n,
  pass_rate
from usajobs.AGGR_SonnetGptGreenTasks_Summary
union all
select
  'STEM' as signal,
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  error_n,
  pass_rate
from usajobs.AGGR_SonnetGptStemTasks_Summary
order by signal, agreement_group`),r(31,D=z`select *
from (
  values
    ('DuckDB warehouse', 'warehouse/usajobs_v4.duckdb', 'Open with DuckDB to inspect source tables, LLM-validated task tables, and lookup joins used by Evidence SQL.'),
    ('Evidence source parquets', 'evidence-sources/nlx/ and evidence-sources/usajobs/', 'Read directly to reproduce dashboard figures without rerunning the full ETL.'),
    ('NLx corpus aggregates', 'Public aggregate bundle from the NLx corpus plus materialized Evidence sources', 'Provides monthly active jobs, task, Work Activity, skill, industry, and occupation aggregates without raw posting text from the NLx corpus.'),
    ('USAJOBS coded parquets', 'Hugging Face loyoladatamining/usajobs_coded', 'Rebuilds the public USAJOBS warehouse tables from public JAAT-coded posting outputs.'),
    ('USAJOBS metadata parquet', 'Hugging Face loyoladatamining/usajobs_html_metadata', 'Provides posting metadata needed for dates, agencies, occupations, and denominators.'),
    ('Agreement workbooks', 'crosswalks/sonnet_gpt_*_results.xlsx', 'Coauthor/public audit workbooks with reviewed, LLM-validated, disagreed, metadata, and agreement-statistic sheets.'),
    ('Legacy agreement CSVs', 'crosswalks/llm_as_judge_*.csv', 'Compatibility inputs retained for existing SQL and warehouse rebuilds; public prose refers to them by their two-model agreement meaning.'),
    ('O*NET 27.2 crosswalks', 'crosswalks/onet_task_statements_27_2.csv, task_wa_map_27_2.csv, onet_skills_to_work_activities_27_2.csv', 'Map extracted O*NET tasks to Work Activities and crosswalk Work Activities to O*NET skills.'),
    ('O*NET Skills/Knowledge/Abilities snapshots', 'output/parquet_v4/OnetSkills.parquet, OnetKnowledge.parquet, OnetAbilities.parquet', 'Provide occupation-by-element importance scores for the skills complementarity network and NLx-weighted O*NET projection.'),
    ('AI and external skill crosswalks', 'crosswalks/ai_a6_5_redacted_final2.csv, ai_v2_to_v5_crosswalk.csv, esco_skill_labels(esco_labels).csv', 'Provide public AI labels and external skill labels used in dashboard profiles and comparisons.')
) as t(input_group, package_path_or_source, inspection_use)`),r(32,De=`select *
from (
  values
    ('DuckDB warehouse', 'warehouse/usajobs_v4.duckdb', 'Open with DuckDB to inspect source tables, LLM-validated task tables, and lookup joins used by Evidence SQL.'),
    ('Evidence source parquets', 'evidence-sources/nlx/ and evidence-sources/usajobs/', 'Read directly to reproduce dashboard figures without rerunning the full ETL.'),
    ('NLx corpus aggregates', 'Public aggregate bundle from the NLx corpus plus materialized Evidence sources', 'Provides monthly active jobs, task, Work Activity, skill, industry, and occupation aggregates without raw posting text from the NLx corpus.'),
    ('USAJOBS coded parquets', 'Hugging Face loyoladatamining/usajobs_coded', 'Rebuilds the public USAJOBS warehouse tables from public JAAT-coded posting outputs.'),
    ('USAJOBS metadata parquet', 'Hugging Face loyoladatamining/usajobs_html_metadata', 'Provides posting metadata needed for dates, agencies, occupations, and denominators.'),
    ('Agreement workbooks', 'crosswalks/sonnet_gpt_*_results.xlsx', 'Coauthor/public audit workbooks with reviewed, LLM-validated, disagreed, metadata, and agreement-statistic sheets.'),
    ('Legacy agreement CSVs', 'crosswalks/llm_as_judge_*.csv', 'Compatibility inputs retained for existing SQL and warehouse rebuilds; public prose refers to them by their two-model agreement meaning.'),
    ('O*NET 27.2 crosswalks', 'crosswalks/onet_task_statements_27_2.csv, task_wa_map_27_2.csv, onet_skills_to_work_activities_27_2.csv', 'Map extracted O*NET tasks to Work Activities and crosswalk Work Activities to O*NET skills.'),
    ('O*NET Skills/Knowledge/Abilities snapshots', 'output/parquet_v4/OnetSkills.parquet, OnetKnowledge.parquet, OnetAbilities.parquet', 'Provide occupation-by-element importance scores for the skills complementarity network and NLx-weighted O*NET projection.'),
    ('AI and external skill crosswalks', 'crosswalks/ai_a6_5_redacted_final2.csv, ai_v2_to_v5_crosswalk.csv, esco_skill_labels(esco_labels).csv', 'Provide public AI labels and external skill labels used in dashboard profiles and comparisons.')
) as t(input_group, package_path_or_source, inspection_use)`),r(35,ge=z`select *
from (
  values
    ('Raw NLx corpus posting text', 'Not public; dashboard uses aggregate files and materialized Evidence source parquets. For more information, see https://nlxresearchhub.org/.'),
    ('USAJOBS sentence examples', 'Held until a public-safe sentence-level artifact exists.'),
    ('External crosswalk versions', 'Frozen in the bundle so future upstream revisions do not silently change dashboard results.'),
    ('Generated build outputs', 'Not committed to git; reproduced by build commands and staged with checksums when needed.')
) as t(public_limit, treatment)`),r(36,be=`select *
from (
  values
    ('Raw NLx corpus posting text', 'Not public; dashboard uses aggregate files and materialized Evidence source parquets. For more information, see https://nlxresearchhub.org/.'),
    ('USAJOBS sentence examples', 'Held until a public-safe sentence-level artifact exists.'),
    ('External crosswalk versions', 'Frozen in the bundle so future upstream revisions do not silently change dashboard results.'),
    ('Generated build outputs', 'Not committed to git; reproduced by build commands and staged with checksums when needed.')
) as t(public_limit, treatment)`),r(39,G=z`select *
from (
  values
    ('docs/reproducibility-bundle.md', 'Publication checklist and bundle layout'),
    ('docs/data-audit/public-artifact-manifest.md', 'Staged artifact manifest and crosswalk provenance'),
    ('docs/data-audit/public-codebook.md', 'Artifact grains, denominator definitions, and source groups'),
    ('docs/data-audit/public-dashboard-audit.md', 'Dashboard audit notes'),
    ('docs/data-audit/public-reproducibility-gap-audit.md', 'Remaining rebuild and public-input gaps'),
    ('docs/findings-ledger.md', 'Dashboard-facing numeric claims and source SQL'),
    ('docs/methodology/sonnet_gpt_onet_occ_pairs_methodology.md', 'job-ad-derived occupation-task pair two-model agreement procedure method')
) as t(document, role)`),r(40,ke=`select *
from (
  values
    ('docs/reproducibility-bundle.md', 'Publication checklist and bundle layout'),
    ('docs/data-audit/public-artifact-manifest.md', 'Staged artifact manifest and crosswalk provenance'),
    ('docs/data-audit/public-codebook.md', 'Artifact grains, denominator definitions, and source groups'),
    ('docs/data-audit/public-dashboard-audit.md', 'Dashboard audit notes'),
    ('docs/data-audit/public-reproducibility-gap-audit.md', 'Remaining rebuild and public-input gaps'),
    ('docs/findings-ledger.md', 'Dashboard-facing numeric claims and source SQL'),
    ('docs/methodology/sonnet_gpt_onet_occ_pairs_methodology.md', 'job-ad-derived occupation-task pair two-model agreement procedure method')
) as t(document, role)`),[Z,V,ee,te,ae,Be,he,X,a,l,E,oe,ne,mt,U,le,de,pt,F,ue,ce,_t,J,me,pe,ft,I,_e,fe,gt,Q,D,De,se,B,ge,be,Y,ie,G,ke,ht,t]}class Bs extends os{constructor(s){super(),ns(this,s,Ms,xs,Xa,{data:8},null,[-1,-1])}}export{Bs as component};
