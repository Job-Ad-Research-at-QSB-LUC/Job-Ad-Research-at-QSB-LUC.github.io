import{s as Ua,d as o,i as l,a as Xt,b as c,c as m,h as Fa,e as h,f as Kt,g as w,k as p,l as k,m as Ma,n as Ia,o as Ga,p as za,q as Qa,r as W,j as Wa,t as Va,u as Ya}from"../chunks/scheduler.TmfZfN_X.js";import{S as Xa,i as Ka,d as T,t as b,a as _,c as st,m as S,b as A,e as $,g as it}from"../chunks/index.CKLTamEB.js";import{D as rt,C as R}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BmUBRMO0.js";import{w as Za}from"../chunks/entry.DLsejpcd.js";import{e as es,s as ts,Q as ot,p as as,a as Ha,r as Oa,C as ss}from"../chunks/inferColumnTypes.CfmQUNB8.js";import{h as z}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as is}from"../chunks/stores.-ELFc2M7.js";import{Q as nt}from"../chunks/QueryViewer.CVNlHJrA.js";import{p as rs}from"../chunks/profile.BW8tN6E9.js";function os(u){var d;let s,r=(v.title??((d=v.og)==null?void 0:d.title))+"",t;return{c(){s=k("h1"),t=Ya(r),this.h()},l(a){s=h(a,"H1",{class:!0});var n=Wa(s);t=Va(n,r),n.forEach(o),this.h()},h(){c(s,"class","title")},m(a,n){l(a,s,n),Xt(s,t)},p:W,d(a){a&&o(s)}}}function ns(u){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:W,p:W,d:W}}function ls(u){var n;let s,r,t,d,a;return document.title=s=v.title??((n=v.og)==null?void 0:n.title),{c(){r=p(),t=k("meta"),d=p(),a=k("meta"),this.h()},l(g){r=m(g),t=h(g,"META",{property:!0,content:!0}),d=m(g),a=h(g,"META",{name:!0,content:!0}),this.h()},h(){var g,L;c(t,"property","og:title"),c(t,"content",((g=v.og)==null?void 0:g.title)??v.title),c(a,"name","twitter:title"),c(a,"content",((L=v.og)==null?void 0:L.title)??v.title)},m(g,L){l(g,r,L),l(g,t,L),l(g,d,L),l(g,a,L)},p(g,L){var x;L&0&&s!==(s=v.title??((x=v.og)==null?void 0:x.title))&&(document.title=s)},d(g){g&&(o(r),o(t),o(d),o(a))}}}function ds(u){var a,n;let s,r,t=(v.description||((a=v.og)==null?void 0:a.description))&&us(),d=((n=v.og)==null?void 0:n.image)&&cs();return{c(){t&&t.c(),s=p(),d&&d.c(),r=Kt()},l(g){t&&t.l(g),s=m(g),d&&d.l(g),r=Kt()},m(g,L){t&&t.m(g,L),l(g,s,L),d&&d.m(g,L),l(g,r,L)},p(g,L){var x,ee;(v.description||(x=v.og)!=null&&x.description)&&t.p(g,L),(ee=v.og)!=null&&ee.image&&d.p(g,L)},d(g){g&&(o(s),o(r)),t&&t.d(g),d&&d.d(g)}}}function us(u){let s,r,t,d,a;return{c(){s=k("meta"),r=p(),t=k("meta"),d=p(),a=k("meta"),this.h()},l(n){s=h(n,"META",{name:!0,content:!0}),r=m(n),t=h(n,"META",{property:!0,content:!0}),d=m(n),a=h(n,"META",{name:!0,content:!0}),this.h()},h(){var n,g,L;c(s,"name","description"),c(s,"content",v.description??((n=v.og)==null?void 0:n.description)),c(t,"property","og:description"),c(t,"content",((g=v.og)==null?void 0:g.description)??v.description),c(a,"name","twitter:description"),c(a,"content",((L=v.og)==null?void 0:L.description)??v.description)},m(n,g){l(n,s,g),l(n,r,g),l(n,t,g),l(n,d,g),l(n,a,g)},p:W,d(n){n&&(o(s),o(r),o(t),o(d),o(a))}}}function cs(u){let s,r,t;return{c(){s=k("meta"),r=p(),t=k("meta"),this.h()},l(d){s=h(d,"META",{property:!0,content:!0}),r=m(d),t=h(d,"META",{name:!0,content:!0}),this.h()},h(){var d,a;c(s,"property","og:image"),c(s,"content",Ha((d=v.og)==null?void 0:d.image)),c(t,"name","twitter:image"),c(t,"content",Ha((a=v.og)==null?void 0:a.image))},m(d,a){l(d,s,a),l(d,r,a),l(d,t,a)},p:W,d(d){d&&(o(s),o(r),o(t))}}}function Ca(u){let s,r;return s=new nt({props:{queryID:"audit_project_links",queryResult:u[0]}}),{c(){$(s.$$.fragment)},l(t){A(s.$$.fragment,t)},m(t,d){S(s,t,d),r=!0},p(t,d){const a={};d[0]&1&&(a.queryResult=t[0]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){b(s.$$.fragment,t),r=!1},d(t){T(s,t)}}}function ms(u){let s,r,t,d;return s=new R({props:{id:"resource",title:"Resource"}}),t=new R({props:{id:"host",title:"Host"}}),{c(){$(s.$$.fragment),r=p(),$(t.$$.fragment)},l(a){A(s.$$.fragment,a),r=m(a),A(t.$$.fragment,a)},m(a,n){S(s,a,n),l(a,r,n),S(t,a,n),d=!0},p:W,i(a){d||(_(s.$$.fragment,a),_(t.$$.fragment,a),d=!0)},o(a){b(s.$$.fragment,a),b(t.$$.fragment,a),d=!1},d(a){a&&o(r),T(s,a),T(t,a)}}}function qa(u){let s,r;return s=new nt({props:{queryID:"audit_bundle_components",queryResult:u[1]}}),{c(){$(s.$$.fragment)},l(t){A(s.$$.fragment,t)},m(t,d){S(s,t,d),r=!0},p(t,d){const a={};d[0]&2&&(a.queryResult=t[1]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){b(s.$$.fragment,t),r=!1},d(t){T(s,t)}}}function ps(u){let s,r,t,d;return s=new R({props:{id:"component",title:"Component"}}),t=new R({props:{id:"contents",title:"Contents",wrap:"true"}}),{c(){$(s.$$.fragment),r=p(),$(t.$$.fragment)},l(a){A(s.$$.fragment,a),r=m(a),A(t.$$.fragment,a)},m(a,n){S(s,a,n),l(a,r,n),S(t,a,n),d=!0},p:W,i(a){d||(_(s.$$.fragment,a),_(t.$$.fragment,a),d=!0)},o(a){b(s.$$.fragment,a),b(t.$$.fragment,a),d=!1},d(a){a&&o(r),T(s,a),T(t,a)}}}function Na(u){let s,r;return s=new nt({props:{queryID:"audit_checks",queryResult:u[2]}}),{c(){$(s.$$.fragment)},l(t){A(s.$$.fragment,t)},m(t,d){S(s,t,d),r=!0},p(t,d){const a={};d[0]&4&&(a.queryResult=t[2]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){b(s.$$.fragment,t),r=!1},d(t){T(s,t)}}}function _s(u){let s,r,t,d;return s=new R({props:{id:"check_name",title:"Check"}}),t=new R({props:{id:"command",title:"Command",wrap:"true"}}),{c(){$(s.$$.fragment),r=p(),$(t.$$.fragment)},l(a){A(s.$$.fragment,a),r=m(a),A(t.$$.fragment,a)},m(a,n){S(s,a,n),l(a,r,n),S(t,a,n),d=!0},p:W,i(a){d||(_(s.$$.fragment,a),_(t.$$.fragment,a),d=!0)},o(a){b(s.$$.fragment,a),b(t.$$.fragment,a),d=!1},d(a){a&&o(r),T(s,a),T(t,a)}}}function ja(u){let s,r;return s=new nt({props:{queryID:"audit_llm_agreement",queryResult:u[3]}}),{c(){$(s.$$.fragment)},l(t){A(s.$$.fragment,t)},m(t,d){S(s,t,d),r=!0},p(t,d){const a={};d[0]&8&&(a.queryResult=t[3]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){b(s.$$.fragment,t),r=!1},d(t){T(s,t)}}}function gs(u){let s,r,t,d;return s=new R({props:{id:"scope",title:"Scope"}}),t=new R({props:{id:"note",title:"Note",wrap:"true"}}),{c(){$(s.$$.fragment),r=p(),$(t.$$.fragment)},l(a){A(s.$$.fragment,a),r=m(a),A(t.$$.fragment,a)},m(a,n){S(s,a,n),l(a,r,n),S(t,a,n),d=!0},p:W,i(a){d||(_(s.$$.fragment,a),_(t.$$.fragment,a),d=!0)},o(a){b(s.$$.fragment,a),b(t.$$.fragment,a),d=!1},d(a){a&&o(r),T(s,a),T(t,a)}}}function Pa(u){let s,r;return s=new nt({props:{queryID:"audit_green_stem_agreement",queryResult:u[4]}}),{c(){$(s.$$.fragment)},l(t){A(s.$$.fragment,t)},m(t,d){S(s,t,d),r=!0},p(t,d){const a={};d[0]&16&&(a.queryResult=t[4]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){b(s.$$.fragment,t),r=!1},d(t){T(s,t)}}}function fs(u){let s,r,t,d,a,n,g,L,x,ee;return s=new R({props:{id:"signal",title:"Signal"}}),t=new R({props:{id:"agreement_group",title:"Group"}}),a=new R({props:{id:"reviewed_n",title:"Reviewed",fmt:"#,##0"}}),g=new R({props:{id:"included_n",title:"Included",fmt:"#,##0"}}),x=new R({props:{id:"pass_rate",title:"Pass",fmt:"0.0%"}}),{c(){$(s.$$.fragment),r=p(),$(t.$$.fragment),d=p(),$(a.$$.fragment),n=p(),$(g.$$.fragment),L=p(),$(x.$$.fragment)},l(f){A(s.$$.fragment,f),r=m(f),A(t.$$.fragment,f),d=m(f),A(a.$$.fragment,f),n=m(f),A(g.$$.fragment,f),L=m(f),A(x.$$.fragment,f)},m(f,E){S(s,f,E),l(f,r,E),S(t,f,E),l(f,d,E),S(a,f,E),l(f,n,E),S(g,f,E),l(f,L,E),S(x,f,E),ee=!0},p:W,i(f){ee||(_(s.$$.fragment,f),_(t.$$.fragment,f),_(a.$$.fragment,f),_(g.$$.fragment,f),_(x.$$.fragment,f),ee=!0)},o(f){b(s.$$.fragment,f),b(t.$$.fragment,f),b(a.$$.fragment,f),b(g.$$.fragment,f),b(x.$$.fragment,f),ee=!1},d(f){f&&(o(r),o(d),o(n),o(L)),T(s,f),T(t,f),T(a,f),T(g,f),T(x,f)}}}function Ra(u){let s,r;return s=new nt({props:{queryID:"audit_inputs",queryResult:u[5]}}),{c(){$(s.$$.fragment)},l(t){A(s.$$.fragment,t)},m(t,d){S(s,t,d),r=!0},p(t,d){const a={};d[0]&32&&(a.queryResult=t[5]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){b(s.$$.fragment,t),r=!1},d(t){T(s,t)}}}function bs(u){let s,r,t,d;return s=new R({props:{id:"input_group",title:"Input group"}}),t=new R({props:{id:"inspection_use",title:"How to inspect",wrap:"true"}}),{c(){$(s.$$.fragment),r=p(),$(t.$$.fragment)},l(a){A(s.$$.fragment,a),r=m(a),A(t.$$.fragment,a)},m(a,n){S(s,a,n),l(a,r,n),S(t,a,n),d=!0},p:W,i(a){d||(_(s.$$.fragment,a),_(t.$$.fragment,a),d=!0)},o(a){b(s.$$.fragment,a),b(t.$$.fragment,a),d=!1},d(a){a&&o(r),T(s,a),T(t,a)}}}function Ja(u){let s,r;return s=new nt({props:{queryID:"audit_limits",queryResult:u[6]}}),{c(){$(s.$$.fragment)},l(t){A(s.$$.fragment,t)},m(t,d){S(s,t,d),r=!0},p(t,d){const a={};d[0]&64&&(a.queryResult=t[6]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){b(s.$$.fragment,t),r=!1},d(t){T(s,t)}}}function hs(u){let s,r,t,d;return s=new R({props:{id:"public_limit",title:"Limit"}}),t=new R({props:{id:"treatment",title:"Treatment",wrap:"true"}}),{c(){$(s.$$.fragment),r=p(),$(t.$$.fragment)},l(a){A(s.$$.fragment,a),r=m(a),A(t.$$.fragment,a)},m(a,n){S(s,a,n),l(a,r,n),S(t,a,n),d=!0},p:W,i(a){d||(_(s.$$.fragment,a),_(t.$$.fragment,a),d=!0)},o(a){b(s.$$.fragment,a),b(t.$$.fragment,a),d=!1},d(a){a&&o(r),T(s,a),T(t,a)}}}function Da(u){let s,r;return s=new nt({props:{queryID:"audit_documentation",queryResult:u[7]}}),{c(){$(s.$$.fragment)},l(t){A(s.$$.fragment,t)},m(t,d){S(s,t,d),r=!0},p(t,d){const a={};d[0]&128&&(a.queryResult=t[7]),s.$set(a)},i(t){r||(_(s.$$.fragment,t),r=!0)},o(t){b(s.$$.fragment,t),r=!1},d(t){T(s,t)}}}function ks(u){let s,r,t,d;return s=new R({props:{id:"document",title:"Document"}}),t=new R({props:{id:"role",title:"Role",wrap:"true"}}),{c(){$(s.$$.fragment),r=p(),$(t.$$.fragment)},l(a){A(s.$$.fragment,a),r=m(a),A(t.$$.fragment,a)},m(a,n){S(s,a,n),l(a,r,n),S(t,a,n),d=!0},p:W,i(a){d||(_(s.$$.fragment,a),_(t.$$.fragment,a),d=!0)},o(a){b(s.$$.fragment,a),b(t.$$.fragment,a),d=!1},d(a){a&&o(r),T(s,a),T(t,a)}}}function ws(u){var Ea;let s,r,t,d,a,n,g='<a href="#agreement-and-audit-trail">Agreement And Audit Trail</a>',L,x,ee="Use this page to inspect the data sources, model-review rules and code behind the dashboard. Project materials are organized through the Job Ad Research at QSB-LUC GitHub organization and Loyola Data Mining Hugging Face collections.",f,E,oe='<a href="#how-to-inspect-the-dashboard">How To Inspect The Dashboard</a>',ne,te,lt="Most figures and tables on the dashboard are backed by visible Evidence SQL. To inspect a page, use the menu in the top-right corner of the dashboard and turn on query display; the SQL blocks used to build the visible charts and tables will appear on the page.",qe,B,le='The dashboard audit repository is available at <a href="https://github.com/Job-Ad-Research-at-QSB-LUC/jaat-lmi-dashboard-audit/" rel="nofollow" class="markdown">Job-Ad-Research-at-QSB-LUC/jaat-lmi-dashboard-audit</a>. The repository contains the dashboard source, source SQL, audit documentation, public input manifests, and rebuild scripts. See the repository <a href="https://github.com/Job-Ad-Research-at-QSB-LUC/jaat-lmi-dashboard-audit/blob/main/README.md" rel="nofollow" class="markdown">README</a> for the current rebuild path from public input files to the static dashboard.',de,V,dt='<a href="#public-project-links">Public Project Links</a>',Ne,U,ue="Core public project resources:",ce,ae,ut='<li class="markdown"><p class="markdown"><a href="https://github.com/Job-Ad-Research-at-QSB-LUC" rel="nofollow" class="markdown">Job Ad Research at QSB-LUC</a></p></li> <li class="markdown"><p class="markdown"><a href="https://github.com/Job-Ad-Research-at-QSB-LUC/JAAT" rel="nofollow" class="markdown">JAAT software</a></p></li> <li class="markdown"><p class="markdown"><a href="https://github.com/Job-Ad-Research-at-QSB-LUC/jaat-lmi-dashboard-audit/" rel="nofollow" class="markdown">Dashboard audit repository</a></p></li> <li class="markdown"><p class="markdown"><a href="https://huggingface.co/loyoladatamining/models" rel="nofollow" class="markdown">JAAT models</a></p></li> <li class="markdown"><p class="markdown"><a href="https://huggingface.co/datasets/loyoladatamining/usajobs" rel="nofollow" class="markdown">USAJOBS raw text</a></p></li> <li class="markdown"><p class="markdown"><a href="https://huggingface.co/datasets/loyoladatamining/usajobs_coded" rel="nofollow" class="markdown">USAJOBS JAAT-coded output</a></p></li> <li class="markdown"><p class="markdown"><a href="https://huggingface.co/datasets/loyoladatamining/usajobs_html_metadata" rel="nofollow" class="markdown">USAJOBS HTML metadata</a></p></li> <li class="markdown"><p class="markdown"><a href="https://doi.org/10.5281/zenodo.22219027" rel="nofollow" class="markdown">Monthly NLx aggregate data</a></p></li> <li class="markdown"><p class="markdown"><a href="https://doi.org/10.5281/zenodo.23426701" rel="nofollow" class="markdown">Archived software, notebooks and website</a></p></li> <li class="markdown"><p class="markdown"><a href="https://job-ad-research-at-qsb-luc.github.io/jaat-demo/output/research_presentation/index.html" rel="nofollow" class="markdown">Current manuscript companion</a></p></li>',je,F,me="The data deposit and the repository snapshots are separate releases. USAJOBS records are distributed through the Hugging Face datasets above; raw NLx posting text requires authorized access.",pe,_e,Y,ct='<a href="#table-1-public-project-links-and-repositories">Table 1. Public project links and repositories</a>',se,I,ge,X,mt='<a href="#reproducibility-package">Reproducibility Package</a>',Pe,Q,J,Re='<a href="#table-2-public-release-bundle-components">Table 2. Public release bundle components</a>',Je,ie,De,D,fe='<a href="#required-checks">Required Checks</a>',be,he,K,pt='<a href="#table-3-public-release-agreement-checks">Table 3. Public release agreement checks</a>',re,G,ke,Z,_t='<a href="#job-ad-derived-occupation-task-pair-agreement-procedure">Job-Ad-Derived Occupation-Task Pair Agreement Procedure</a>',Be,y,yt="This section covers the job-ad-derived novel occupation-task pair LLM agreement procedure. It is one LLM agreement procedure in the broader project, not the only agreement activity.",Tt,gt,we,oa='<a href="#table-4-job-ad-derived-occupation-task-pair-agreement-outputs">Table 4. Job-ad-derived occupation-task pair agreement outputs</a>',St,Ue,At,ve,na='<a href="#llm-judge-prompt-templates">LLM Judge Prompt Templates</a>',$t,Fe,la='The prompts below are the literal templates used for the agreement procedures. Runtime calls fill the bracketed fields with the occupation, task, and definition text shown in each template; model outputs are parsed only as <code class="markdown">YES</code> or <code class="markdown">NO</code>.',Lt,Ie,da=`<summary class="cursor-pointer font-semibold">Occupation-task pair agreement prompt</summary> <pre class="text-xs whitespace-pre-wrap bg-gray-50 border border-gray-200 rounded p-3"><code>Occupation: {soc_title} ({occ8})
Occupation description: {soc_description}

Task: {task_text}

Does this task plausibly belong to this occupation? Answer with one word: YES or NO.</code></pre>`,Et,Ge,ua=`<summary class="cursor-pointer font-semibold">Green task signal prompt</summary> <pre class="text-xs whitespace-pre-wrap bg-gray-50 border border-gray-200 rounded p-3"><code>DEFINITION. The green economy is &quot;the economic activity related to reducing
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

Is this task substantively green work? Answer with one word: YES or NO.</code></pre>`,xt,ze,ca=`<summary class="cursor-pointer font-semibold">STEM task signal prompt</summary> <pre class="text-xs whitespace-pre-wrap bg-gray-50 border border-gray-200 rounded p-3"><code>DEFINITION. STEM occupations &quot;require education in science, technology,
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

Is this task substantively STEM work? Answer with one word: YES or NO.</code></pre>`,Mt,ye,ma='<a href="#downloadable-two-model-agreement-workbooks">Downloadable Two-Model Agreement Workbooks</a>',Ht,Qe,pa='The workbooks below contain the results of the Sonnet + GPT-4o two-model agreement procedures. Each workbook consolidates the reviewed rows, LLM-validated rows, disagreed/blocklisted rows, agreement statistics, and metadata for one run. Legacy <code class="markdown">llm_as_judge_*</code> CSV filenames remain in <code class="markdown">crosswalks/</code> only as compatibility inputs for existing SQL and warehouse rebuilds.',Ot,We,_a='<thead class="markdown"><tr class="markdown"><th class="markdown">Procedure</th> <th class="markdown">Workbook</th></tr></thead> <tbody class="markdown"><tr class="markdown"><td class="markdown">Occupation-task pairs, top RCA batch</td> <td class="markdown"><a href="/us-lmi/downloads/agreement/sonnet_gpt_onet_occ_pairs_rca_results.xlsx" class="markdown">XLSX</a></td></tr> <tr class="markdown"><td class="markdown">Occupation-task pairs, high-volume batch</td> <td class="markdown"><a href="/us-lmi/downloads/agreement/sonnet_gpt_onet_occ_pairs_volume_results.xlsx" class="markdown">XLSX</a></td></tr> <tr class="markdown"><td class="markdown">Occupation-task pairs, random postings-derived batch</td> <td class="markdown"><a href="/us-lmi/downloads/agreement/sonnet_gpt_onet_occ_pairs_random_results.xlsx" class="markdown">XLSX</a></td></tr> <tr class="markdown"><td class="markdown">Occupation-task pairs, independent null baseline</td> <td class="markdown"><a href="/us-lmi/downloads/agreement/sonnet_gpt_onet_occ_pairs_null_results.xlsx" class="markdown">XLSX</a></td></tr> <tr class="markdown"><td class="markdown">Green task bundle</td> <td class="markdown"><a href="/us-lmi/downloads/agreement/sonnet_gpt_green_tasks_results.xlsx" class="markdown">XLSX</a></td></tr> <tr class="markdown"><td class="markdown">STEM task bundle</td> <td class="markdown"><a href="/us-lmi/downloads/agreement/sonnet_gpt_stem_tasks_results.xlsx" class="markdown">XLSX</a></td></tr></tbody>',Ct,Ve,ga='<a href="/us-lmi/downloads/agreement/manifest.csv" class="markdown">Download agreement workbook manifest CSV</a>',qt,Te,fa='<a href="#green-and-stem-task-agreement-procedures">Green and STEM Task Agreement Procedures</a>',Nt,Ye,ba="The green and STEM task reviewers are separate LLM agreement procedures used for task-domain time series. They use prompt v2 and require a two-model unanimous YES for inclusion; Gemini was quota-blocked and is diagnostic only in this run.",jt,ft,Se,ha='<a href="#table-5-green-and-stem-task-agreement-outputs">Table 5. Green and STEM task agreement outputs</a>',Pt,Xe,Rt,Ke,ka='The green and STEM task workbook links above supersede the older per-CSV public downloads. Their workbook tabs are <code class="markdown">metadata</code>, <code class="markdown">reviewed</code>, <code class="markdown">agreement_retained</code>, <code class="markdown">disagreed</code>, <code class="markdown">agreement_stats</code>, and <code class="markdown">discovery_rejected</code>.',Jt,Ae,wa='<a href="#public-inputs-and-inspection-paths">Public Inputs And Inspection Paths</a>',Dt,bt,$e,va='<a href="#table-6-public-input-and-provenance-inventory">Table 6. Public input and provenance inventory</a>',Bt,Ze,Ut,Le,ya='<a href="#rebuild-path">Rebuild Path</a>',Ft,et,Ta='<code class="markdown">bin/reproduce.sh</code> is the executable path from public inputs to the dashboard. With <code class="markdown">--skip-etl</code>, it starts from the staged DuckDB warehouse, rebuilds derived artifacts, rematerializes Evidence source parquets, and builds the static site. With <code class="markdown">--public-usajobs-dir</code>, <code class="markdown">--nlx-dir</code>, and <code class="markdown">--crosswalk-dir</code>, it rebuilds the warehouse from public USAJOBS parquets, public aggregate files from the NLx corpus, and frozen crosswalk snapshots before rebuilding the dashboard outputs.',It,Ee,Sa='<a href="#public-safe-limits">Public-Safe Limits</a>',Gt,ht,xe,Aa='<a href="#table-7-public-safe-limits-and-gated-artifacts">Table 7. Public-safe limits and gated artifacts</a>',zt,tt,Qt,Me,$a='<a href="#documentation-map">Documentation Map</a>',Wt,kt,He,La='<a href="#table-8-audit-documentation-index">Table 8. Audit documentation index</a>',Vt,at,Yt,Oe=typeof v<"u"&&(v.title||((Ea=v.og)==null?void 0:Ea.title))&&v.hide_title!==!0&&os();function Ba(e,i){var wt;return typeof v<"u"&&(v.title||(wt=v.og)!=null&&wt.title)?ls:ns}let vt=Ba()(u),Ce=typeof v=="object"&&ds(),M=u[0]&&Ca(u);I=new rt({props:{data:u[0],rowsPerPage:"10",$$slots:{default:[ms]},$$scope:{ctx:u}}});let H=u[1]&&qa(u);ie=new rt({props:{data:u[1],rowsPerPage:"10",$$slots:{default:[ps]},$$scope:{ctx:u}}});let O=u[2]&&Na(u);G=new rt({props:{data:u[2],rowsPerPage:"10",$$slots:{default:[_s]},$$scope:{ctx:u}}});let C=u[3]&&ja(u);Ue=new rt({props:{data:u[3],rowsPerPage:"10",$$slots:{default:[gs]},$$scope:{ctx:u}}});let q=u[4]&&Pa(u);Xe=new rt({props:{data:u[4],rows:"4",$$slots:{default:[fs]},$$scope:{ctx:u}}});let N=u[5]&&Ra(u);Ze=new rt({props:{data:u[5],rowsPerPage:"10",$$slots:{default:[bs]},$$scope:{ctx:u}}});let j=u[6]&&Ja(u);tt=new rt({props:{data:u[6],rowsPerPage:"10",$$slots:{default:[hs]},$$scope:{ctx:u}}});let P=u[7]&&Da(u);return at=new rt({props:{data:u[7],rowsPerPage:"10",$$slots:{default:[ks]},$$scope:{ctx:u}}}),{c(){Oe&&Oe.c(),s=p(),vt.c(),r=k("meta"),t=k("meta"),Ce&&Ce.c(),d=Kt(),a=p(),n=k("h1"),n.innerHTML=g,L=p(),x=k("p"),x.textContent=ee,f=p(),E=k("h2"),E.innerHTML=oe,ne=p(),te=k("p"),te.textContent=lt,qe=p(),B=k("p"),B.innerHTML=le,de=p(),V=k("h2"),V.innerHTML=dt,Ne=p(),U=k("p"),U.textContent=ue,ce=p(),ae=k("ul"),ae.innerHTML=ut,je=p(),F=k("p"),F.textContent=me,pe=p(),M&&M.c(),_e=p(),Y=k("h3"),Y.innerHTML=ct,se=p(),$(I.$$.fragment),ge=p(),X=k("h2"),X.innerHTML=mt,Pe=p(),H&&H.c(),Q=p(),J=k("h3"),J.innerHTML=Re,Je=p(),$(ie.$$.fragment),De=p(),D=k("h2"),D.innerHTML=fe,be=p(),O&&O.c(),he=p(),K=k("h3"),K.innerHTML=pt,re=p(),$(G.$$.fragment),ke=p(),Z=k("h2"),Z.innerHTML=_t,Be=p(),y=k("p"),y.textContent=yt,Tt=p(),C&&C.c(),gt=p(),we=k("h3"),we.innerHTML=oa,St=p(),$(Ue.$$.fragment),At=p(),ve=k("h3"),ve.innerHTML=na,$t=p(),Fe=k("p"),Fe.innerHTML=la,Lt=p(),Ie=k("details"),Ie.innerHTML=da,Et=p(),Ge=k("details"),Ge.innerHTML=ua,xt=p(),ze=k("details"),ze.innerHTML=ca,Mt=p(),ye=k("h2"),ye.innerHTML=ma,Ht=p(),Qe=k("p"),Qe.innerHTML=pa,Ot=p(),We=k("table"),We.innerHTML=_a,Ct=p(),Ve=k("p"),Ve.innerHTML=ga,qt=p(),Te=k("h3"),Te.innerHTML=fa,Nt=p(),Ye=k("p"),Ye.textContent=ba,jt=p(),q&&q.c(),ft=p(),Se=k("h3"),Se.innerHTML=ha,Pt=p(),$(Xe.$$.fragment),Rt=p(),Ke=k("p"),Ke.innerHTML=ka,Jt=p(),Ae=k("h2"),Ae.innerHTML=wa,Dt=p(),N&&N.c(),bt=p(),$e=k("h3"),$e.innerHTML=va,Bt=p(),$(Ze.$$.fragment),Ut=p(),Le=k("h2"),Le.innerHTML=ya,Ft=p(),et=k("p"),et.innerHTML=Ta,It=p(),Ee=k("h2"),Ee.innerHTML=Sa,Gt=p(),j&&j.c(),ht=p(),xe=k("h3"),xe.innerHTML=Aa,zt=p(),$(tt.$$.fragment),Qt=p(),Me=k("h2"),Me.innerHTML=$a,Wt=p(),P&&P.c(),kt=p(),He=k("h3"),He.innerHTML=La,Vt=p(),$(at.$$.fragment),this.h()},l(e){Oe&&Oe.l(e),s=m(e);const i=Fa("svelte-2igo1p",document.head);vt.l(i),r=h(i,"META",{name:!0,content:!0}),t=h(i,"META",{name:!0,content:!0}),Ce&&Ce.l(i),d=Kt(),i.forEach(o),a=m(e),n=h(e,"H1",{class:!0,id:!0,"data-svelte-h":!0}),w(n)!=="svelte-zyybda"&&(n.innerHTML=g),L=m(e),x=h(e,"P",{class:!0,"data-svelte-h":!0}),w(x)!=="svelte-r04tyf"&&(x.textContent=ee),f=m(e),E=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(E)!=="svelte-9h5j2c"&&(E.innerHTML=oe),ne=m(e),te=h(e,"P",{class:!0,"data-svelte-h":!0}),w(te)!=="svelte-187xh38"&&(te.textContent=lt),qe=m(e),B=h(e,"P",{class:!0,"data-svelte-h":!0}),w(B)!=="svelte-1u1pbur"&&(B.innerHTML=le),de=m(e),V=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(V)!=="svelte-tha1an"&&(V.innerHTML=dt),Ne=m(e),U=h(e,"P",{class:!0,"data-svelte-h":!0}),w(U)!=="svelte-181c7we"&&(U.textContent=ue),ce=m(e),ae=h(e,"UL",{class:!0,"data-svelte-h":!0}),w(ae)!=="svelte-1b78vgs"&&(ae.innerHTML=ut),je=m(e),F=h(e,"P",{class:!0,"data-svelte-h":!0}),w(F)!=="svelte-ns9m2e"&&(F.textContent=me),pe=m(e),M&&M.l(e),_e=m(e),Y=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(Y)!=="svelte-dnnx4f"&&(Y.innerHTML=ct),se=m(e),A(I.$$.fragment,e),ge=m(e),X=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(X)!=="svelte-17p4elo"&&(X.innerHTML=mt),Pe=m(e),H&&H.l(e),Q=m(e),J=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(J)!=="svelte-1kl8e40"&&(J.innerHTML=Re),Je=m(e),A(ie.$$.fragment,e),De=m(e),D=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(D)!=="svelte-r9k40k"&&(D.innerHTML=fe),be=m(e),O&&O.l(e),he=m(e),K=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(K)!=="svelte-d25kz4"&&(K.innerHTML=pt),re=m(e),A(G.$$.fragment,e),ke=m(e),Z=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(Z)!=="svelte-16tswz7"&&(Z.innerHTML=_t),Be=m(e),y=h(e,"P",{class:!0,"data-svelte-h":!0}),w(y)!=="svelte-1kew0w8"&&(y.textContent=yt),Tt=m(e),C&&C.l(e),gt=m(e),we=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(we)!=="svelte-1w7b33e"&&(we.innerHTML=oa),St=m(e),A(Ue.$$.fragment,e),At=m(e),ve=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(ve)!=="svelte-7gh4uv"&&(ve.innerHTML=na),$t=m(e),Fe=h(e,"P",{class:!0,"data-svelte-h":!0}),w(Fe)!=="svelte-11zo80j"&&(Fe.innerHTML=la),Lt=m(e),Ie=h(e,"DETAILS",{class:!0,"data-svelte-h":!0}),w(Ie)!=="svelte-1rx8nya"&&(Ie.innerHTML=da),Et=m(e),Ge=h(e,"DETAILS",{class:!0,"data-svelte-h":!0}),w(Ge)!=="svelte-1dhhnpv"&&(Ge.innerHTML=ua),xt=m(e),ze=h(e,"DETAILS",{class:!0,"data-svelte-h":!0}),w(ze)!=="svelte-h48h4g"&&(ze.innerHTML=ca),Mt=m(e),ye=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(ye)!=="svelte-c5nn6f"&&(ye.innerHTML=ma),Ht=m(e),Qe=h(e,"P",{class:!0,"data-svelte-h":!0}),w(Qe)!=="svelte-1r768uo"&&(Qe.innerHTML=pa),Ot=m(e),We=h(e,"TABLE",{class:!0,"data-svelte-h":!0}),w(We)!=="svelte-11wamwc"&&(We.innerHTML=_a),Ct=m(e),Ve=h(e,"P",{class:!0,"data-svelte-h":!0}),w(Ve)!=="svelte-qwttqf"&&(Ve.innerHTML=ga),qt=m(e),Te=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(Te)!=="svelte-1qwidd0"&&(Te.innerHTML=fa),Nt=m(e),Ye=h(e,"P",{class:!0,"data-svelte-h":!0}),w(Ye)!=="svelte-1z08zim"&&(Ye.textContent=ba),jt=m(e),q&&q.l(e),ft=m(e),Se=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(Se)!=="svelte-1w0kwzn"&&(Se.innerHTML=ha),Pt=m(e),A(Xe.$$.fragment,e),Rt=m(e),Ke=h(e,"P",{class:!0,"data-svelte-h":!0}),w(Ke)!=="svelte-jkg2rx"&&(Ke.innerHTML=ka),Jt=m(e),Ae=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(Ae)!=="svelte-dic8qt"&&(Ae.innerHTML=wa),Dt=m(e),N&&N.l(e),bt=m(e),$e=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w($e)!=="svelte-1x0205n"&&($e.innerHTML=va),Bt=m(e),A(Ze.$$.fragment,e),Ut=m(e),Le=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(Le)!=="svelte-5ifca"&&(Le.innerHTML=ya),Ft=m(e),et=h(e,"P",{class:!0,"data-svelte-h":!0}),w(et)!=="svelte-11f9yh0"&&(et.innerHTML=Ta),It=m(e),Ee=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(Ee)!=="svelte-4j6ww5"&&(Ee.innerHTML=Sa),Gt=m(e),j&&j.l(e),ht=m(e),xe=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(xe)!=="svelte-t27pnd"&&(xe.innerHTML=Aa),zt=m(e),A(tt.$$.fragment,e),Qt=m(e),Me=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),w(Me)!=="svelte-19l6r86"&&(Me.innerHTML=$a),Wt=m(e),P&&P.l(e),kt=m(e),He=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),w(He)!=="svelte-19w23b3"&&(He.innerHTML=La),Vt=m(e),A(at.$$.fragment,e),this.h()},h(){c(r,"name","twitter:card"),c(r,"content","summary_large_image"),c(t,"name","twitter:site"),c(t,"content","@evidence_dev"),c(n,"class","markdown"),c(n,"id","agreement-and-audit-trail"),c(x,"class","markdown"),c(E,"class","markdown"),c(E,"id","how-to-inspect-the-dashboard"),c(te,"class","markdown"),c(B,"class","markdown"),c(V,"class","markdown"),c(V,"id","public-project-links"),c(U,"class","markdown"),c(ae,"class","markdown"),c(F,"class","markdown"),c(Y,"class","markdown"),c(Y,"id","table-1-public-project-links-and-repositories"),c(X,"class","markdown"),c(X,"id","reproducibility-package"),c(J,"class","markdown"),c(J,"id","table-2-public-release-bundle-components"),c(D,"class","markdown"),c(D,"id","required-checks"),c(K,"class","markdown"),c(K,"id","table-3-public-release-agreement-checks"),c(Z,"class","markdown"),c(Z,"id","job-ad-derived-occupation-task-pair-agreement-procedure"),c(y,"class","markdown"),c(we,"class","markdown"),c(we,"id","table-4-job-ad-derived-occupation-task-pair-agreement-outputs"),c(ve,"class","markdown"),c(ve,"id","llm-judge-prompt-templates"),c(Fe,"class","markdown"),c(Ie,"class","mb-4"),c(Ge,"class","mb-4"),c(ze,"class","mb-4"),c(ye,"class","markdown"),c(ye,"id","downloadable-two-model-agreement-workbooks"),c(Qe,"class","markdown"),c(We,"class","markdown"),c(Ve,"class","markdown"),c(Te,"class","markdown"),c(Te,"id","green-and-stem-task-agreement-procedures"),c(Ye,"class","markdown"),c(Se,"class","markdown"),c(Se,"id","table-5-green-and-stem-task-agreement-outputs"),c(Ke,"class","markdown"),c(Ae,"class","markdown"),c(Ae,"id","public-inputs-and-inspection-paths"),c($e,"class","markdown"),c($e,"id","table-6-public-input-and-provenance-inventory"),c(Le,"class","markdown"),c(Le,"id","rebuild-path"),c(et,"class","markdown"),c(Ee,"class","markdown"),c(Ee,"id","public-safe-limits"),c(xe,"class","markdown"),c(xe,"id","table-7-public-safe-limits-and-gated-artifacts"),c(Me,"class","markdown"),c(Me,"id","documentation-map"),c(He,"class","markdown"),c(He,"id","table-8-audit-documentation-index")},m(e,i){Oe&&Oe.m(e,i),l(e,s,i),vt.m(document.head,null),Xt(document.head,r),Xt(document.head,t),Ce&&Ce.m(document.head,null),Xt(document.head,d),l(e,a,i),l(e,n,i),l(e,L,i),l(e,x,i),l(e,f,i),l(e,E,i),l(e,ne,i),l(e,te,i),l(e,qe,i),l(e,B,i),l(e,de,i),l(e,V,i),l(e,Ne,i),l(e,U,i),l(e,ce,i),l(e,ae,i),l(e,je,i),l(e,F,i),l(e,pe,i),M&&M.m(e,i),l(e,_e,i),l(e,Y,i),l(e,se,i),S(I,e,i),l(e,ge,i),l(e,X,i),l(e,Pe,i),H&&H.m(e,i),l(e,Q,i),l(e,J,i),l(e,Je,i),S(ie,e,i),l(e,De,i),l(e,D,i),l(e,be,i),O&&O.m(e,i),l(e,he,i),l(e,K,i),l(e,re,i),S(G,e,i),l(e,ke,i),l(e,Z,i),l(e,Be,i),l(e,y,i),l(e,Tt,i),C&&C.m(e,i),l(e,gt,i),l(e,we,i),l(e,St,i),S(Ue,e,i),l(e,At,i),l(e,ve,i),l(e,$t,i),l(e,Fe,i),l(e,Lt,i),l(e,Ie,i),l(e,Et,i),l(e,Ge,i),l(e,xt,i),l(e,ze,i),l(e,Mt,i),l(e,ye,i),l(e,Ht,i),l(e,Qe,i),l(e,Ot,i),l(e,We,i),l(e,Ct,i),l(e,Ve,i),l(e,qt,i),l(e,Te,i),l(e,Nt,i),l(e,Ye,i),l(e,jt,i),q&&q.m(e,i),l(e,ft,i),l(e,Se,i),l(e,Pt,i),S(Xe,e,i),l(e,Rt,i),l(e,Ke,i),l(e,Jt,i),l(e,Ae,i),l(e,Dt,i),N&&N.m(e,i),l(e,bt,i),l(e,$e,i),l(e,Bt,i),S(Ze,e,i),l(e,Ut,i),l(e,Le,i),l(e,Ft,i),l(e,et,i),l(e,It,i),l(e,Ee,i),l(e,Gt,i),j&&j.m(e,i),l(e,ht,i),l(e,xe,i),l(e,zt,i),S(tt,e,i),l(e,Qt,i),l(e,Me,i),l(e,Wt,i),P&&P.m(e,i),l(e,kt,i),l(e,He,i),l(e,Vt,i),S(at,e,i),Yt=!0},p(e,i){var xa;typeof v<"u"&&(v.title||(xa=v.og)!=null&&xa.title)&&v.hide_title!==!0&&Oe.p(e,i),vt.p(e,i),typeof v=="object"&&Ce.p(e,i),e[0]?M?(M.p(e,i),i[0]&1&&_(M,1)):(M=Ca(e),M.c(),_(M,1),M.m(_e.parentNode,_e)):M&&(it(),b(M,1,1,()=>{M=null}),st());const wt={};i[0]&1&&(wt.data=e[0]),i[1]&536870912&&(wt.$$scope={dirty:i,ctx:e}),I.$set(wt),e[1]?H?(H.p(e,i),i[0]&2&&_(H,1)):(H=qa(e),H.c(),_(H,1),H.m(Q.parentNode,Q)):H&&(it(),b(H,1,1,()=>{H=null}),st());const Zt={};i[0]&2&&(Zt.data=e[1]),i[1]&536870912&&(Zt.$$scope={dirty:i,ctx:e}),ie.$set(Zt),e[2]?O?(O.p(e,i),i[0]&4&&_(O,1)):(O=Na(e),O.c(),_(O,1),O.m(he.parentNode,he)):O&&(it(),b(O,1,1,()=>{O=null}),st());const ea={};i[0]&4&&(ea.data=e[2]),i[1]&536870912&&(ea.$$scope={dirty:i,ctx:e}),G.$set(ea),e[3]?C?(C.p(e,i),i[0]&8&&_(C,1)):(C=ja(e),C.c(),_(C,1),C.m(gt.parentNode,gt)):C&&(it(),b(C,1,1,()=>{C=null}),st());const ta={};i[0]&8&&(ta.data=e[3]),i[1]&536870912&&(ta.$$scope={dirty:i,ctx:e}),Ue.$set(ta),e[4]?q?(q.p(e,i),i[0]&16&&_(q,1)):(q=Pa(e),q.c(),_(q,1),q.m(ft.parentNode,ft)):q&&(it(),b(q,1,1,()=>{q=null}),st());const aa={};i[0]&16&&(aa.data=e[4]),i[1]&536870912&&(aa.$$scope={dirty:i,ctx:e}),Xe.$set(aa),e[5]?N?(N.p(e,i),i[0]&32&&_(N,1)):(N=Ra(e),N.c(),_(N,1),N.m(bt.parentNode,bt)):N&&(it(),b(N,1,1,()=>{N=null}),st());const sa={};i[0]&32&&(sa.data=e[5]),i[1]&536870912&&(sa.$$scope={dirty:i,ctx:e}),Ze.$set(sa),e[6]?j?(j.p(e,i),i[0]&64&&_(j,1)):(j=Ja(e),j.c(),_(j,1),j.m(ht.parentNode,ht)):j&&(it(),b(j,1,1,()=>{j=null}),st());const ia={};i[0]&64&&(ia.data=e[6]),i[1]&536870912&&(ia.$$scope={dirty:i,ctx:e}),tt.$set(ia),e[7]?P?(P.p(e,i),i[0]&128&&_(P,1)):(P=Da(e),P.c(),_(P,1),P.m(kt.parentNode,kt)):P&&(it(),b(P,1,1,()=>{P=null}),st());const ra={};i[0]&128&&(ra.data=e[7]),i[1]&536870912&&(ra.$$scope={dirty:i,ctx:e}),at.$set(ra)},i(e){Yt||(_(M),_(I.$$.fragment,e),_(H),_(ie.$$.fragment,e),_(O),_(G.$$.fragment,e),_(C),_(Ue.$$.fragment,e),_(q),_(Xe.$$.fragment,e),_(N),_(Ze.$$.fragment,e),_(j),_(tt.$$.fragment,e),_(P),_(at.$$.fragment,e),Yt=!0)},o(e){b(M),b(I.$$.fragment,e),b(H),b(ie.$$.fragment,e),b(O),b(G.$$.fragment,e),b(C),b(Ue.$$.fragment,e),b(q),b(Xe.$$.fragment,e),b(N),b(Ze.$$.fragment,e),b(j),b(tt.$$.fragment,e),b(P),b(at.$$.fragment,e),Yt=!1},d(e){e&&(o(s),o(a),o(n),o(L),o(x),o(f),o(E),o(ne),o(te),o(qe),o(B),o(de),o(V),o(Ne),o(U),o(ce),o(ae),o(je),o(F),o(pe),o(_e),o(Y),o(se),o(ge),o(X),o(Pe),o(Q),o(J),o(Je),o(De),o(D),o(be),o(he),o(K),o(re),o(ke),o(Z),o(Be),o(y),o(Tt),o(gt),o(we),o(St),o(At),o(ve),o($t),o(Fe),o(Lt),o(Ie),o(Et),o(Ge),o(xt),o(ze),o(Mt),o(ye),o(Ht),o(Qe),o(Ot),o(We),o(Ct),o(Ve),o(qt),o(Te),o(Nt),o(Ye),o(jt),o(ft),o(Se),o(Pt),o(Rt),o(Ke),o(Jt),o(Ae),o(Dt),o(bt),o($e),o(Bt),o(Ut),o(Le),o(Ft),o(et),o(It),o(Ee),o(Gt),o(ht),o(xe),o(zt),o(Qt),o(Me),o(Wt),o(kt),o(He),o(Vt)),Oe&&Oe.d(e),vt.d(e),o(r),o(t),Ce&&Ce.d(e),o(d),M&&M.d(e),T(I,e),H&&H.d(e),T(ie,e),O&&O.d(e),T(G,e),C&&C.d(e),T(Ue,e),q&&q.d(e),T(Xe,e),N&&N.d(e),T(Ze,e),j&&j.d(e),T(tt,e),P&&P.d(e),T(at,e)}}}const v={};function vs(u,s,r){let t,d;Ma(u,is,y=>r(42,t=y)),Ma(u,Oa,y=>r(48,d=y));let{data:a}=s,{data:n={},customFormattingSettings:g,__db:L,inputs:x}=a;Ia(Oa,d="d55020c7d2111a1324f2df007bb2f179",d);let ee=es(Za(x));Ga(ee.subscribe(y=>x=y)),za(ss,{getCustomFormats:()=>g.customFormats||[]});const f=(y,yt)=>rs(L.query,y,{query_name:yt});ts(f),t.params,Qa(()=>!0);let E={initialData:void 0,initialError:void 0},oe=z`select *
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
) as t(resource, host, url_or_status)`;n.audit_project_links_data&&(n.audit_project_links_data instanceof Error?E.initialError=n.audit_project_links_data:E.initialData=n.audit_project_links_data,n.audit_project_links_columns&&(E.knownColumns=n.audit_project_links_columns));let te,lt=!1;const qe=ot.createReactive({callback:y=>{r(0,te=y)},execFn:f},{id:"audit_project_links",...E});qe(ne,{noResolve:oe,...E}),globalThis[Symbol.for("audit_project_links")]={get value(){return te}};let B={initialData:void 0,initialError:void 0},le=z`select *
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
) as t(component, contents, publication_step)`;n.audit_bundle_components_data&&(n.audit_bundle_components_data instanceof Error?B.initialError=n.audit_bundle_components_data:B.initialData=n.audit_bundle_components_data,n.audit_bundle_components_columns&&(B.knownColumns=n.audit_bundle_components_columns));let V,dt=!1;const Ne=ot.createReactive({callback:y=>{r(1,V=y)},execFn:f},{id:"audit_bundle_components",...B});Ne(de,{noResolve:le,...B}),globalThis[Symbol.for("audit_bundle_components")]={get value(){return V}};let U={initialData:void 0,initialError:void 0},ue=z`select *
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
) as t(check_name, command, proves)`;n.audit_checks_data&&(n.audit_checks_data instanceof Error?U.initialError=n.audit_checks_data:U.initialData=n.audit_checks_data,n.audit_checks_columns&&(U.knownColumns=n.audit_checks_columns));let ae,ut=!1;const je=ot.createReactive({callback:y=>{r(2,ae=y)},execFn:f},{id:"audit_checks",...U});je(ce,{noResolve:ue,...U}),globalThis[Symbol.for("audit_checks")]={get value(){return ae}};let F={initialData:void 0,initialError:void 0},me=z`select *
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
) as t(scope, note)`;n.audit_llm_agreement_data&&(n.audit_llm_agreement_data instanceof Error?F.initialError=n.audit_llm_agreement_data:F.initialData=n.audit_llm_agreement_data,n.audit_llm_agreement_columns&&(F.knownColumns=n.audit_llm_agreement_columns));let _e,Y=!1;const ct=ot.createReactive({callback:y=>{r(3,_e=y)},execFn:f},{id:"audit_llm_agreement",...F});ct(pe,{noResolve:me,...F}),globalThis[Symbol.for("audit_llm_agreement")]={get value(){return _e}};let se={initialData:void 0,initialError:void 0},I=z`select
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
order by signal, agreement_group`,ge=`select
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
order by signal, agreement_group`;n.audit_green_stem_agreement_data&&(n.audit_green_stem_agreement_data instanceof Error?se.initialError=n.audit_green_stem_agreement_data:se.initialData=n.audit_green_stem_agreement_data,n.audit_green_stem_agreement_columns&&(se.knownColumns=n.audit_green_stem_agreement_columns));let X,mt=!1;const Pe=ot.createReactive({callback:y=>{r(4,X=y)},execFn:f},{id:"audit_green_stem_agreement",...se});Pe(ge,{noResolve:I,...se}),globalThis[Symbol.for("audit_green_stem_agreement")]={get value(){return X}};let Q={initialData:void 0,initialError:void 0},J=z`select *
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
) as t(input_group, package_path_or_source, inspection_use)`,Re=`select *
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
) as t(input_group, package_path_or_source, inspection_use)`;n.audit_inputs_data&&(n.audit_inputs_data instanceof Error?Q.initialError=n.audit_inputs_data:Q.initialData=n.audit_inputs_data,n.audit_inputs_columns&&(Q.knownColumns=n.audit_inputs_columns));let Je,ie=!1;const De=ot.createReactive({callback:y=>{r(5,Je=y)},execFn:f},{id:"audit_inputs",...Q});De(Re,{noResolve:J,...Q}),globalThis[Symbol.for("audit_inputs")]={get value(){return Je}};let D={initialData:void 0,initialError:void 0},fe=z`select *
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
) as t(public_limit, treatment)`;n.audit_limits_data&&(n.audit_limits_data instanceof Error?D.initialError=n.audit_limits_data:D.initialData=n.audit_limits_data,n.audit_limits_columns&&(D.knownColumns=n.audit_limits_columns));let he,K=!1;const pt=ot.createReactive({callback:y=>{r(6,he=y)},execFn:f},{id:"audit_limits",...D});pt(be,{noResolve:fe,...D}),globalThis[Symbol.for("audit_limits")]={get value(){return he}};let re={initialData:void 0,initialError:void 0},G=z`select *
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
) as t(document, role)`;n.audit_documentation_data&&(n.audit_documentation_data instanceof Error?re.initialError=n.audit_documentation_data:re.initialData=n.audit_documentation_data,n.audit_documentation_columns&&(re.knownColumns=n.audit_documentation_columns));let Z,_t=!1;const Be=ot.createReactive({callback:y=>{r(7,Z=y)},execFn:f},{id:"audit_documentation",...re});return Be(ke,{noResolve:G,...re}),globalThis[Symbol.for("audit_documentation")]={get value(){return Z}},u.$$set=y=>{"data"in y&&r(8,a=y.data)},u.$$.update=()=>{u.$$.dirty[0]&256&&r(9,{data:n={},customFormattingSettings:g,__db:L}=a,n),u.$$.dirty[0]&512&&as.set(Object.keys(n).length>0),u.$$.dirty[1]&2048&&t.params,u.$$.dirty[0]&15360&&(oe||!lt?oe||(qe(ne,{noResolve:oe,...E}),r(13,lt=!0)):qe(ne,{noResolve:oe})),u.$$.dirty[0]&245760&&(le||!dt?le||(Ne(de,{noResolve:le,...B}),r(17,dt=!0)):Ne(de,{noResolve:le})),u.$$.dirty[0]&3932160&&(ue||!ut?ue||(je(ce,{noResolve:ue,...U}),r(21,ut=!0)):je(ce,{noResolve:ue})),u.$$.dirty[0]&62914560&&(me||!Y?me||(ct(pe,{noResolve:me,...F}),r(25,Y=!0)):ct(pe,{noResolve:me})),u.$$.dirty[0]&1006632960&&(I||!mt?I||(Pe(ge,{noResolve:I,...se}),r(29,mt=!0)):Pe(ge,{noResolve:I})),u.$$.dirty[0]&1073741824|u.$$.dirty[1]&7&&(J||!ie?J||(De(Re,{noResolve:J,...Q}),r(33,ie=!0)):De(Re,{noResolve:J})),u.$$.dirty[1]&120&&(fe||!K?fe||(pt(be,{noResolve:fe,...D}),r(37,K=!0)):pt(be,{noResolve:fe})),u.$$.dirty[1]&1920&&(G||!_t?G||(Be(ke,{noResolve:G,...re}),r(41,_t=!0)):Be(ke,{noResolve:G}))},r(11,oe=z`select *
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
) as t(scope, note)`),r(27,I=z`select
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
order by signal, agreement_group`),r(28,ge=`select
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
order by signal, agreement_group`),r(31,J=z`select *
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
) as t(input_group, package_path_or_source, inspection_use)`),r(32,Re=`select *
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
) as t(input_group, package_path_or_source, inspection_use)`),r(35,fe=z`select *
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
) as t(document, role)`),[te,V,ae,_e,X,Je,he,Z,a,n,E,oe,ne,lt,B,le,de,dt,U,ue,ce,ut,F,me,pe,Y,se,I,ge,mt,Q,J,Re,ie,D,fe,be,K,re,G,ke,_t,t]}class Os extends Xa{constructor(s){super(),Ka(this,s,vs,ws,Ua,{data:8},null,[-1,-1])}}export{Os as component};
