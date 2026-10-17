import{s as La,d as r,i as u,a as M,b as m,c as d,h as Ha,e as g,f as Bt,g as A,j as Ze,k as _,l as k,m as ka,n as Oa,o as Da,p as Ia,q as za,r as $e,t as Na,u as ja}from"../chunks/scheduler.TmfZfN_X.js";import{S as Pa,i as Fa,d as w,t as v,a as p,c as ye,m as $,b as T,e as C,g as we}from"../chunks/index.CKLTamEB.js";import{D as Pt,C as Q}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.B2aubBmp.js";import{w as Ba}from"../chunks/entry.B99Fshv4.js";import{e as Ua,s as Va,Q as kt,p as Qa,a as ya,r as wa,C as Wa}from"../chunks/inferColumnTypes.CHYcqYP9.js";import{h as ne}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as Ya}from"../chunks/stores.Qedg7CPW.js";import{Q as Te}from"../chunks/QueryViewer.0JA8Cyw9.js";import{B as Ft}from"../chunks/BigValue.BUVOsWzT.js";import{p as Ja}from"../chunks/profile.BW8tN6E9.js";function Ka(f){let a,s=R.title+"",t;return{c(){a=k("h1"),t=ja(s),this.h()},l(n){a=g(n,"H1",{class:!0});var c=Ze(a);t=Na(c,s),c.forEach(r),this.h()},h(){m(a,"class","title")},m(n,c){u(n,a,c),M(a,t)},p:$e,d(n){n&&r(a)}}}function Xa(f){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:$e,p:$e,d:$e}}function Za(f){let a,s,t,n,c;return document.title=a=R.title,{c(){s=_(),t=k("meta"),n=_(),c=k("meta"),this.h()},l(l){s=d(l),t=g(l,"META",{property:!0,content:!0}),n=d(l),c=g(l,"META",{name:!0,content:!0}),this.h()},h(){var l,o;m(t,"property","og:title"),m(t,"content",((l=R.og)==null?void 0:l.title)??R.title),m(c,"name","twitter:title"),m(c,"content",((o=R.og)==null?void 0:o.title)??R.title)},m(l,o){u(l,s,o),u(l,t,o),u(l,n,o),u(l,c,o)},p(l,o){o&0&&a!==(a=R.title)&&(document.title=a)},d(l){l&&(r(s),r(t),r(n),r(c))}}}function es(f){var c,l;let a,s,t=(R.description||((c=R.og)==null?void 0:c.description))&&ts(),n=((l=R.og)==null?void 0:l.image)&&as();return{c(){t&&t.c(),a=_(),n&&n.c(),s=Bt()},l(o){t&&t.l(o),a=d(o),n&&n.l(o),s=Bt()},m(o,y){t&&t.m(o,y),u(o,a,y),n&&n.m(o,y),u(o,s,y)},p(o,y){var b,q;(R.description||(b=R.og)!=null&&b.description)&&t.p(o,y),(q=R.og)!=null&&q.image&&n.p(o,y)},d(o){o&&(r(a),r(s)),t&&t.d(o),n&&n.d(o)}}}function ts(f){let a,s,t,n,c;return{c(){a=k("meta"),s=_(),t=k("meta"),n=_(),c=k("meta"),this.h()},l(l){a=g(l,"META",{name:!0,content:!0}),s=d(l),t=g(l,"META",{property:!0,content:!0}),n=d(l),c=g(l,"META",{name:!0,content:!0}),this.h()},h(){var l,o,y;m(a,"name","description"),m(a,"content",R.description??((l=R.og)==null?void 0:l.description)),m(t,"property","og:description"),m(t,"content",((o=R.og)==null?void 0:o.description)??R.description),m(c,"name","twitter:description"),m(c,"content",((y=R.og)==null?void 0:y.description)??R.description)},m(l,o){u(l,a,o),u(l,s,o),u(l,t,o),u(l,n,o),u(l,c,o)},p:$e,d(l){l&&(r(a),r(s),r(t),r(n),r(c))}}}function as(f){let a,s,t;return{c(){a=k("meta"),s=_(),t=k("meta"),this.h()},l(n){a=g(n,"META",{property:!0,content:!0}),s=d(n),t=g(n,"META",{name:!0,content:!0}),this.h()},h(){var n,c;m(a,"property","og:image"),m(a,"content",ya((n=R.og)==null?void 0:n.image)),m(t,"name","twitter:image"),m(t,"content",ya((c=R.og)==null?void 0:c.image))},m(n,c){u(n,a,c),u(n,s,c),u(n,t,c)},p:$e,d(n){n&&(r(a),r(s),r(t))}}}function $a(f){let a,s;return a=new Te({props:{queryID:"evidence_status_summary",queryResult:f[0]}}),{c(){C(a.$$.fragment)},l(t){T(a.$$.fragment,t)},m(t,n){$(a,t,n),s=!0},p(t,n){const c={};n[0]&1&&(c.queryResult=t[0]),a.$set(c)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){w(a,t)}}}function ss(f){let a,s,t,n,c,l;return a=new Q({props:{id:"evidence_status",title:"Status"}}),t=new Q({props:{id:"meaning",title:"Meaning",wrap:"true"}}),c=new Q({props:{id:"rows",title:"Pairs",fmt:"#,##0"}}),{c(){C(a.$$.fragment),s=_(),C(t.$$.fragment),n=_(),C(c.$$.fragment)},l(o){T(a.$$.fragment,o),s=d(o),T(t.$$.fragment,o),n=d(o),T(c.$$.fragment,o)},m(o,y){$(a,o,y),u(o,s,y),$(t,o,y),u(o,n,y),$(c,o,y),l=!0},p:$e,i(o){l||(p(a.$$.fragment,o),p(t.$$.fragment,o),p(c.$$.fragment,o),l=!0)},o(o){v(a.$$.fragment,o),v(t.$$.fragment,o),v(c.$$.fragment,o),l=!1},d(o){o&&(r(s),r(n)),w(a,o),w(t,o),w(c,o)}}}function Ta(f){let a,s;return a=new Te({props:{queryID:"combined_gap_share_summary",queryResult:f[1]}}),{c(){C(a.$$.fragment)},l(t){T(a.$$.fragment,t)},m(t,n){$(a,t,n),s=!0},p(t,n){const c={};n[0]&2&&(c.queryResult=t[1]),a.$set(c)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){w(a,t)}}}function Ca(f){let a,s;return a=new Te({props:{queryID:"combined_occ_burden",queryResult:f[2]}}),{c(){C(a.$$.fragment)},l(t){T(a.$$.fragment,t)},m(t,n){$(a,t,n),s=!0},p(t,n){const c={};n[0]&4&&(c.queryResult=t[2]),a.$set(c)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){w(a,t)}}}function is(f){let a,s,t,n,c,l,o,y,b,q;return a=new Q({props:{id:"occupation",title:"Occupation",wrap:"true"}}),t=new Q({props:{id:"off_onet_share",title:"Gap share",fmt:"0.0%"}}),c=new Q({props:{id:"n_onet_canonical",title:"O*NET",fmt:"#,##0"}}),o=new Q({props:{id:"n_validated_offlist",title:"Off-list",fmt:"#,##0"}}),b=new Q({props:{id:"n_offlist_specialized_candidate_misfile",title:"Specialized",fmt:"#,##0"}}),{c(){C(a.$$.fragment),s=_(),C(t.$$.fragment),n=_(),C(c.$$.fragment),l=_(),C(o.$$.fragment),y=_(),C(b.$$.fragment)},l(h){T(a.$$.fragment,h),s=d(h),T(t.$$.fragment,h),n=d(h),T(c.$$.fragment,h),l=d(h),T(o.$$.fragment,h),y=d(h),T(b.$$.fragment,h)},m(h,E){$(a,h,E),u(h,s,E),$(t,h,E),u(h,n,E),$(c,h,E),u(h,l,E),$(o,h,E),u(h,y,E),$(b,h,E),q=!0},p:$e,i(h){q||(p(a.$$.fragment,h),p(t.$$.fragment,h),p(c.$$.fragment,h),p(o.$$.fragment,h),p(b.$$.fragment,h),q=!0)},o(h){v(a.$$.fragment,h),v(t.$$.fragment,h),v(c.$$.fragment,h),v(o.$$.fragment,h),v(b.$$.fragment,h),q=!1},d(h){h&&(r(s),r(n),r(l),r(y)),w(a,h),w(t,h),w(c,h),w(o,h),w(b,h)}}}function xa(f){let a,s;return a=new Te({props:{queryID:"combined_gap_buckets",queryResult:f[3]}}),{c(){C(a.$$.fragment)},l(t){T(a.$$.fragment,t)},m(t,n){$(a,t,n),s=!0},p(t,n){const c={};n[0]&8&&(c.queryResult=t[3]),a.$set(c)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){w(a,t)}}}function ns(f){let a,s,t,n,c,l;return a=new Q({props:{id:"bucket",title:"Bucket"}}),t=new Q({props:{id:"n_tasks",title:"Tasks",fmt:"#,##0"}}),c=new Q({props:{id:"retained_noncanonical_occupation_links",title:"Links",fmt:"#,##0"}}),{c(){C(a.$$.fragment),s=_(),C(t.$$.fragment),n=_(),C(c.$$.fragment)},l(o){T(a.$$.fragment,o),s=d(o),T(t.$$.fragment,o),n=d(o),T(c.$$.fragment,o)},m(o,y){$(a,o,y),u(o,s,y),$(t,o,y),u(o,n,y),$(c,o,y),l=!0},p:$e,i(o){l||(p(a.$$.fragment,o),p(t.$$.fragment,o),p(c.$$.fragment,o),l=!0)},o(o){v(a.$$.fragment,o),v(t.$$.fragment,o),v(c.$$.fragment,o),l=!1},d(o){o&&(r(s),r(n)),w(a,o),w(t,o),w(c,o)}}}function Aa(f){let a,s;return a=new Te({props:{queryID:"combined_task_examples",queryResult:f[4]}}),{c(){C(a.$$.fragment)},l(t){T(a.$$.fragment,t)},m(t,n){$(a,t,n),s=!0},p(t,n){const c={};n[0]&16&&(c.queryResult=t[4]),a.$set(c)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){w(a,t)}}}function rs(f){let a,s,t,n,c,l,o,y;return a=new Q({props:{id:"task_text",title:"Task",wrap:"true"}}),t=new Q({props:{id:"eff_sectors",title:"Eff. sectors",fmt:"0.00"}}),c=new Q({props:{id:"n_occ_over_rca1",title:"RCA>=1 occs",fmt:"#,##0"}}),o=new Q({props:{id:"volume",title:"Volume",fmt:"#,##0"}}),{c(){C(a.$$.fragment),s=_(),C(t.$$.fragment),n=_(),C(c.$$.fragment),l=_(),C(o.$$.fragment)},l(b){T(a.$$.fragment,b),s=d(b),T(t.$$.fragment,b),n=d(b),T(c.$$.fragment,b),l=d(b),T(o.$$.fragment,b)},m(b,q){$(a,b,q),u(b,s,q),$(t,b,q),u(b,n,q),$(c,b,q),u(b,l,q),$(o,b,q),y=!0},p:$e,i(b){y||(p(a.$$.fragment,b),p(t.$$.fragment,b),p(c.$$.fragment,b),p(o.$$.fragment,b),y=!0)},o(b){v(a.$$.fragment,b),v(t.$$.fragment,b),v(c.$$.fragment,b),v(o.$$.fragment,b),y=!1},d(b){b&&(r(s),r(n),r(l)),w(a,b),w(t,b),w(c,b),w(o,b)}}}function Ra(f){let a,s;return a=new Te({props:{queryID:"text",queryResult:f[5]}}),{c(){C(a.$$.fragment)},l(t){T(a.$$.fragment,t)},m(t,n){$(a,t,n),s=!0},p(t,n){const c={};n[0]&32&&(c.queryResult=t[5]),a.$set(c)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){w(a,t)}}}function Ea(f){let a,s;return a=new Te({props:{queryID:"text",queryResult:f[5]}}),{c(){C(a.$$.fragment)},l(t){T(a.$$.fragment,t)},m(t,n){$(a,t,n),s=!0},p(t,n){const c={};n[0]&32&&(c.queryResult=t[5]),a.$set(c)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){w(a,t)}}}function Ma(f){let a,s;return a=new Te({props:{queryID:"text",queryResult:f[5]}}),{c(){C(a.$$.fragment)},l(t){T(a.$$.fragment,t)},m(t,n){$(a,t,n),s=!0},p(t,n){const c={};n[0]&32&&(c.queryResult=t[5]),a.$set(c)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){w(a,t)}}}function qa(f){let a,s;return a=new Te({props:{queryID:"text",queryResult:f[5]}}),{c(){C(a.$$.fragment)},l(t){T(a.$$.fragment,t)},m(t,n){$(a,t,n),s=!0},p(t,n){const c={};n[0]&32&&(c.queryResult=t[5]),a.$set(c)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){w(a,t)}}}function Sa(f){let a,s;return a=new Te({props:{queryID:"text",queryResult:f[5]}}),{c(){C(a.$$.fragment)},l(t){T(a.$$.fragment,t)},m(t,n){$(a,t,n),s=!0},p(t,n){const c={};n[0]&32&&(c.queryResult=t[5]),a.$set(c)},i(t){s||(p(a.$$.fragment,t),s=!0)},o(t){v(a.$$.fragment,t),s=!1},d(t){w(a,t)}}}function os(f){let a,s,t,n,c,l,o='<a href="/us-lmi/occupation-task-pairs" class="hover:underline">A. Map of Work</a> <a href="/us-lmi/task-allocation-mismatch" class="hover:underline">B. Mismatch</a> <a href="/us-lmi/building-new-maps" class="hover:underline">C. Emerging Skills</a> <a href="/us-lmi/dynamic-maps" class="hover:underline">D. Dynamic Maps</a> <a href="/us-lmi/methodology" class="hover:underline">Methods</a>',y,b,q="This analysis combines NLx national postings and USAJOBS federal postings to ask how well O*NET's occupation-task assignments line up with observed task demand. The question is narrower than simple O*NET coverage: when postings support an off-list occupation-task pair, does that task look broadly general, shared within an occupational cluster, or concentrated enough to flag a candidate addition to a postings-informed O*NET?",h,E,oe="The motivation is simple: O*NET is useful because it gives occupations a common task language, but its occupation-task lists are necessarily selective. Postings provide a second view of work as employers describe it. Where validated posting evidence repeatedly places an O*NET task outside its official occupation list, the result is not automatically an error, but it is evidence that a more permissive many-to-many task map may describe work better than a single official home.",le,Z,ut="The headline occupation denominator is the corrected one: all O*NET canonical tasks for the occupation plus validated off-list tasks. The off-O*NET share is a lower bound because the off-list numerator only includes pairs that were sampled and passed the two-model review.",Se,F,ce="<strong>Why this is provisional.</strong> Real task-occupation pairs identified from postings and these review procedures provide evidence on possible candidate maps for occupations, but additional verification has not taken place. Users should also note the limits of occupational coding based on titles.",ue,Y,ft='<a href="#what-the-evidence-can-and-cannot-say">What The Evidence Can And Cannot Say</a>',Ge,B,fe="The strongest evidence is a combination of four conditions: the task appears in postings for an occupation, the occupation-task pair passed two-model review, O*NET does not list the exact pair, and task spread points to broad generalization, sibling-cluster allocation, or concentrated review candidates.",me,ee,mt="The page does not claim every noncanonical row is an O*NET error. It identifies places where postings support a more permissive many-to-many task allocation than a single official home. Mixed-spread and low-volume tasks remain leads for review, not stable taxonomy recommendations.",Le,W,P,He='<a href="#table-1-review-retained-off-list-occupation-task-pairs-by-evidence-status">Table 1. Review-retained off-list occupation-task pairs by evidence status</a>',Oe,te,dt="These counts are extracted from the updated workbook&#39;s <code>Off_list_pairs</code> tab and sum to 13,893 validated off-list pairs. The table separates task-pair validation from occupation-coding reliability, so readers can see which candidate pairs are strongest before interpreting the task evidence.",ae,U,de,J,_t='<a href="#examples-first">Examples First</a>',De,V,_e="The case-study workbook separates two gates. Gate 1 asks whether the occupation coding looks reliable. Gate 2 asks whether the off-list task pair passed the two-model task review. The best candidate changes clear both gates; weaker examples are still useful, but should be read as audit leads.",pe,se,pt='<div class="border border-gray-200 rounded px-4 py-3"><div class="font-semibold mb-2">Software Developers</div> <p><strong>O*NET now:</strong> 19 canonical tasks.</p> <p><strong>Postings-informed view:</strong> 35 validated off-list additions; 25 are specialized or cluster-shared candidates.</p> <p><strong>Why stronger:</strong> coding is reliable, and examples such as system troubleshooting support and software architecture have high RCA in NLx and USAJOBS.</p> <details class="mt-3"><summary class="cursor-pointer font-semibold">Show task contrast</summary> <div class="grid grid-cols-1 gap-3 mt-3"><div><div class="font-semibold">Current O*NET examples</div> <ul class="list-disc pl-5"><li>Analyze user needs and software requirements to determine feasibility of design within time and cost constraints.</li> <li>Confer with systems analysts, engineers, programmers and others to design systems and obtain information on limitations and requirements.</li></ul></div> <div><div class="font-semibold">Postings-informed candidates</div> <ul class="list-disc pl-5"><li>Provide technical guidance or support for the development or troubleshooting of systems.</li> <li>Develop system engineering, software engineering, system integration, or distributed system architectures.</li> <li>Analyze problems to develop solutions involving computer hardware and software.</li></ul></div></div></details></div> <div class="border border-gray-200 rounded px-4 py-3"><div class="font-semibold mb-2">Dental Assistants</div> <p><strong>O*NET now:</strong> 16 canonical tasks.</p> <p><strong>Postings-informed view:</strong> 20 validated off-list additions; 14 are specialized or cluster-shared candidates.</p> <p><strong>Why stronger:</strong> coding is reliable, and tasks such as sterilizing instruments and preparing patients are occupation-near work.</p> <details class="mt-3"><summary class="cursor-pointer font-semibold">Show task contrast</summary> <div class="grid grid-cols-1 gap-3 mt-3"><div><div class="font-semibold">Current O*NET examples</div> <ul class="list-disc pl-5"><li>Prepare patient, sterilize or disinfect instruments, set up instrument trays, prepare materials, or assist dentist during dental procedures.</li> <li>Expose dental diagnostic x-rays.</li> <li>Record treatment information in patient records.</li></ul></div> <div><div class="font-semibold">Postings-informed candidates</div> <ul class="list-disc pl-5"><li>Clean and sterilize instruments, equipment, or materials.</li> <li>Prepare patients for and assist with examinations or treatments.</li> <li>Clean, maintain, and sterilize instruments or equipment.</li></ul></div></div></details></div> <div class="border border-gray-200 rounded px-4 py-3"><div class="font-semibold mb-2">Firefighters</div> <p><strong>O*NET now:</strong> 30 canonical tasks.</p> <p><strong>Postings-informed view:</strong> 40 validated off-list additions; 13 are specialized or cluster-shared candidates.</p> <p><strong>Why cautious:</strong> this is substantively useful, but the LCA data used for occupational-coding validation do not include the firefighter occupation.</p> <details class="mt-3"><summary class="cursor-pointer font-semibold">Show task contrast</summary> <div class="grid grid-cols-1 gap-3 mt-3"><div><div class="font-semibold">Current O*NET examples</div> <ul class="list-disc pl-5"><li>Rescue victims from burning buildings, accident sites, and water hazards.</li> <li>Dress with equipment such as fire-resistant clothing and breathing apparatus.</li> <li>Move toward the source of a fire, using knowledge of fire types, building materials, and property layout.</li></ul></div> <div><div class="font-semibold">Posting-evidenced audit leads</div> <ul class="list-disc pl-5"><li>Participate in firefighting efforts.</li> <li>Communicate fire details to superiors, subordinates, or interagency dispatch centers, using two-way radios.</li> <li>Conduct fire, safety, and sanitation inspections.</li></ul></div></div></details></div>',Ie,x,wt='<a href="#occupation-level-gap-share">Occupation-Level Gap Share</a>',$t,ze,sa=`This table asks where reviewed posting evidence adds the most to an occupation's official O*NET task list. "Gap share" means validated off-list tasks divided by official O*NET tasks plus validated off-list tasks. It is a lower-bound audit measure, not a complete occupational task profile.`,Tt,bt,K,Ne,Ut,je,Vt,Pe,Qt,Fe,Ct,vt,Be,ia="<strong>Terms.</strong> O*NET = official task count. Off-list = validated posting pairs not listed by O*NET. Gap share = off-list / (O*NET + off-list). Specialized = concentrated review candidates, not confirmed errors.",xt,Ce,na='<a href="#table-tam-1-occupations-with-largest-off-list-task-shares">Table TAM-1. Occupations With Largest Off-List Task Shares</a>',At,Ue,Rt,xe,ra='<a href="#task-buckets">Task Buckets</a>',Et,ht,Ve,oa="<strong>Terms.</strong> Generic = ≥5 SOC-2 sectors. Mixed = 3-4 sectors. Sector-concentrated = 1-2 sectors. Links = retained off-list occupation-task pairs.",Mt,Ae,la='<a href="#table-tam-2-off-list-task-links-by-spread-bucket">Table TAM-2. Off-List Task Links by Spread Bucket</a>',qt,Qe,St,gt,X,et,ca="Browse task-label examples",Wt,tt,ua="<strong>Terms.</strong> Category = spread label. Effective sectors = concentration-adjusted SOC-2 spread. Occs RCA&gt;=1 = occupations where the task is at least as common as baseline.",Yt,We,fa='<a href="#table-tam-3-browseable-off-list-task-examples">Table TAM-3. Browseable Off-List Task Examples</a>',Jt,Ye,Gt,Re,ma='<a href="#workbook-downloads">Workbook Downloads</a>',Lt,Je,da='<div><a class="font-semibold underline" href="/us-lmi/downloads/task-allocation/O%2ANET_case_studies.xlsx">O*NET case-study workbook</a> <p>Reader-facing examples with official O*NET tasks, postings-evidenced additions, coding verdicts, task-pair validation, RCA fields, and recommended candidate changes.</p></div> <div><a class="font-semibold underline" href="/us-lmi/downloads/task-allocation/O%2ANET_mismatch_workbook.xlsx">Full O*NET mismatch workbook</a> <p>Standalone audit workbook with occupation summaries, off-list pair evidence, task summaries, coding reliability, dictionary, and audit fields. Use this as the public review artifact.</p></div>',Ht,Ee,_a='<a href="#audit-downloads">Audit Downloads</a>',Ot,be,at,pa="Show SQL for evidence-status table",Kt,Dt,ve,st,ba="Show SQL for headline summary",Xt,It,he,it,va="Show SQL for occupation-gap table",Zt,zt,ge,nt,ha="Show SQL for task-bucket table",ea,Nt,ke,rt,ga="Show SQL for task-label examples",ta,jt,Me=typeof R<"u"&&R.title&&R.hide_title!==!0&&Ka();function Ga(e,i){return typeof R<"u"&&R.title?Za:Xa}let yt=Ga()(f),qe=typeof R=="object"&&es(),S=f[0]&&$a(f);U=new Pt({props:{data:f[0],rowsPerPage:"10",$$slots:{default:[ss]},$$scope:{ctx:f}}});let G=f[1]&&Ta(f);Ne=new Ft({props:{data:f[1],value:"median_gap_share",title:"Median gap share",fmt:"0.0%"}}),je=new Ft({props:{data:f[1],value:"p75_gap_share",title:"75th percentile",fmt:"0.0%"}}),Pe=new Ft({props:{data:f[1],value:"occupations_above_half",title:"Occupations above 50%",fmt:"#,##0"}}),Fe=new Ft({props:{data:f[1],value:"validated_offlist_pairs",title:"Review-retained off-list pairs",fmt:"#,##0"}});let L=f[2]&&Ca(f);Ue=new Pt({props:{data:f[2],rowsPerPage:"10",$$slots:{default:[is]},$$scope:{ctx:f}}});let H=f[3]&&xa(f);Qe=new Pt({props:{data:f[3],rowsPerPage:"10",$$slots:{default:[ns]},$$scope:{ctx:f}}});let O=f[4]&&Aa(f);Ye=new Pt({props:{data:f[4],groupBy:"category",rowsPerPage:"10",$$slots:{default:[rs]},$$scope:{ctx:f}}});let D=f[5]&&Ra(f),I=f[5]&&Ea(f),z=f[5]&&Ma(f),N=f[5]&&qa(f),j=f[5]&&Sa(f);return{c(){Me&&Me.c(),a=_(),yt.c(),s=k("meta"),t=k("meta"),qe&&qe.c(),n=Bt(),c=_(),l=k("div"),l.innerHTML=o,y=_(),b=k("p"),b.textContent=q,h=_(),E=k("p"),E.textContent=oe,le=_(),Z=k("p"),Z.textContent=ut,Se=_(),F=k("div"),F.innerHTML=ce,ue=_(),Y=k("h2"),Y.innerHTML=ft,Ge=_(),B=k("p"),B.textContent=fe,me=_(),ee=k("p"),ee.textContent=mt,Le=_(),S&&S.c(),W=_(),P=k("h3"),P.innerHTML=He,Oe=_(),te=k("div"),te.innerHTML=dt,ae=_(),C(U.$$.fragment),de=_(),J=k("h2"),J.innerHTML=_t,De=_(),V=k("p"),V.textContent=_e,pe=_(),se=k("div"),se.innerHTML=pt,Ie=_(),x=k("h2"),x.innerHTML=wt,$t=_(),ze=k("p"),ze.textContent=sa,Tt=_(),G&&G.c(),bt=_(),K=k("div"),C(Ne.$$.fragment),Ut=_(),C(je.$$.fragment),Vt=_(),C(Pe.$$.fragment),Qt=_(),C(Fe.$$.fragment),Ct=_(),L&&L.c(),vt=_(),Be=k("div"),Be.innerHTML=ia,xt=_(),Ce=k("h3"),Ce.innerHTML=na,At=_(),C(Ue.$$.fragment),Rt=_(),xe=k("h2"),xe.innerHTML=ra,Et=_(),H&&H.c(),ht=_(),Ve=k("div"),Ve.innerHTML=oa,Mt=_(),Ae=k("h3"),Ae.innerHTML=la,qt=_(),C(Qe.$$.fragment),St=_(),O&&O.c(),gt=_(),X=k("details"),et=k("summary"),et.textContent=ca,Wt=_(),tt=k("div"),tt.innerHTML=ua,Yt=_(),We=k("h3"),We.innerHTML=fa,Jt=_(),C(Ye.$$.fragment),Gt=_(),Re=k("h2"),Re.innerHTML=ma,Lt=_(),Je=k("div"),Je.innerHTML=da,Ht=_(),Ee=k("h2"),Ee.innerHTML=_a,Ot=_(),be=k("details"),at=k("summary"),at.textContent=pa,Kt=_(),D&&D.c(),Dt=_(),ve=k("details"),st=k("summary"),st.textContent=ba,Xt=_(),I&&I.c(),It=_(),he=k("details"),it=k("summary"),it.textContent=va,Zt=_(),z&&z.c(),zt=_(),ge=k("details"),nt=k("summary"),nt.textContent=ha,ea=_(),N&&N.c(),Nt=_(),ke=k("details"),rt=k("summary"),rt.textContent=ga,ta=_(),j&&j.c(),this.h()},l(e){Me&&Me.l(e),a=d(e);const i=Ha("svelte-2igo1p",document.head);yt.l(i),s=g(i,"META",{name:!0,content:!0}),t=g(i,"META",{name:!0,content:!0}),qe&&qe.l(i),n=Bt(),i.forEach(r),c=d(e),l=g(e,"DIV",{class:!0,"data-svelte-h":!0}),A(l)!=="svelte-lxr661"&&(l.innerHTML=o),y=d(e),b=g(e,"P",{class:!0,"data-svelte-h":!0}),A(b)!=="svelte-cfbvgu"&&(b.textContent=q),h=d(e),E=g(e,"P",{class:!0,"data-svelte-h":!0}),A(E)!=="svelte-jxyg57"&&(E.textContent=oe),le=d(e),Z=g(e,"P",{class:!0,"data-svelte-h":!0}),A(Z)!=="svelte-1kam6y4"&&(Z.textContent=ut),Se=d(e),F=g(e,"DIV",{class:!0,"data-svelte-h":!0}),A(F)!=="svelte-whweon"&&(F.innerHTML=ce),ue=d(e),Y=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(Y)!=="svelte-t3gbwz"&&(Y.innerHTML=ft),Ge=d(e),B=g(e,"P",{class:!0,"data-svelte-h":!0}),A(B)!=="svelte-16s6hue"&&(B.textContent=fe),me=d(e),ee=g(e,"P",{class:!0,"data-svelte-h":!0}),A(ee)!=="svelte-1h1zmjs"&&(ee.textContent=mt),Le=d(e),S&&S.l(e),W=d(e),P=g(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(P)!=="svelte-18517a0"&&(P.innerHTML=He),Oe=d(e),te=g(e,"DIV",{class:!0,"data-svelte-h":!0}),A(te)!=="svelte-bwnuvi"&&(te.innerHTML=dt),ae=d(e),T(U.$$.fragment,e),de=d(e),J=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(J)!=="svelte-1h202bj"&&(J.innerHTML=_t),De=d(e),V=g(e,"P",{class:!0,"data-svelte-h":!0}),A(V)!=="svelte-brqbkv"&&(V.textContent=_e),pe=d(e),se=g(e,"DIV",{class:!0,"data-svelte-h":!0}),A(se)!=="svelte-1t5mupu"&&(se.innerHTML=pt),Ie=d(e),x=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(x)!=="svelte-15nw6pd"&&(x.innerHTML=wt),$t=d(e),ze=g(e,"P",{class:!0,"data-svelte-h":!0}),A(ze)!=="svelte-1a3uio6"&&(ze.textContent=sa),Tt=d(e),G&&G.l(e),bt=d(e),K=g(e,"DIV",{class:!0});var ie=Ze(K);T(Ne.$$.fragment,ie),Ut=d(ie),T(je.$$.fragment,ie),Vt=d(ie),T(Pe.$$.fragment,ie),Qt=d(ie),T(Fe.$$.fragment,ie),ie.forEach(r),Ct=d(e),L&&L.l(e),vt=d(e),Be=g(e,"DIV",{class:!0,"data-svelte-h":!0}),A(Be)!=="svelte-1ctltx0"&&(Be.innerHTML=ia),xt=d(e),Ce=g(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Ce)!=="svelte-kld33h"&&(Ce.innerHTML=na),At=d(e),T(Ue.$$.fragment,e),Rt=d(e),xe=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(xe)!=="svelte-13qyxba"&&(xe.innerHTML=ra),Et=d(e),H&&H.l(e),ht=d(e),Ve=g(e,"DIV",{class:!0,"data-svelte-h":!0}),A(Ve)!=="svelte-1hefh0a"&&(Ve.innerHTML=oa),Mt=d(e),Ae=g(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Ae)!=="svelte-vcz7dz"&&(Ae.innerHTML=la),qt=d(e),T(Qe.$$.fragment,e),St=d(e),O&&O.l(e),gt=d(e),X=g(e,"DETAILS",{class:!0});var re=Ze(X);et=g(re,"SUMMARY",{class:!0,"data-svelte-h":!0}),A(et)!=="svelte-1jclsb9"&&(et.textContent=ca),Wt=d(re),tt=g(re,"DIV",{class:!0,"data-svelte-h":!0}),A(tt)!=="svelte-178y0iv"&&(tt.innerHTML=ua),Yt=d(re),We=g(re,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(We)!=="svelte-bckruu"&&(We.innerHTML=fa),Jt=d(re),T(Ye.$$.fragment,re),re.forEach(r),Gt=d(e),Re=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(Re)!=="svelte-1fnepab"&&(Re.innerHTML=ma),Lt=d(e),Je=g(e,"DIV",{class:!0,"data-svelte-h":!0}),A(Je)!=="svelte-mc6xc0"&&(Je.innerHTML=da),Ht=d(e),Ee=g(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(Ee)!=="svelte-1ib6szo"&&(Ee.innerHTML=_a),Ot=d(e),be=g(e,"DETAILS",{class:!0});var ot=Ze(be);at=g(ot,"SUMMARY",{class:!0,"data-svelte-h":!0}),A(at)!=="svelte-wcidiq"&&(at.textContent=pa),Kt=d(ot),D&&D.l(ot),ot.forEach(r),Dt=d(e),ve=g(e,"DETAILS",{class:!0});var lt=Ze(ve);st=g(lt,"SUMMARY",{class:!0,"data-svelte-h":!0}),A(st)!=="svelte-wyx7w8"&&(st.textContent=ba),Xt=d(lt),I&&I.l(lt),lt.forEach(r),It=d(e),he=g(e,"DETAILS",{class:!0});var ct=Ze(he);it=g(ct,"SUMMARY",{class:!0,"data-svelte-h":!0}),A(it)!=="svelte-1f7q6ta"&&(it.textContent=va),Zt=d(ct),z&&z.l(ct),ct.forEach(r),zt=d(e),ge=g(e,"DETAILS",{class:!0});var Ke=Ze(ge);nt=g(Ke,"SUMMARY",{class:!0,"data-svelte-h":!0}),A(nt)!=="svelte-5gubi6"&&(nt.textContent=ha),ea=d(Ke),N&&N.l(Ke),Ke.forEach(r),Nt=d(e),ke=g(e,"DETAILS",{class:!0});var Xe=Ze(ke);rt=g(Xe,"SUMMARY",{class:!0,"data-svelte-h":!0}),A(rt)!=="svelte-bc0nst"&&(rt.textContent=ga),ta=d(Xe),j&&j.l(Xe),Xe.forEach(r),this.h()},h(){m(s,"name","twitter:card"),m(s,"content","summary_large_image"),m(t,"name","twitter:site"),m(t,"content","@evidence_dev"),m(l,"class","flex flex-wrap gap-x-4 gap-y-2 text-sm border-y border-gray-200 py-3 mb-6"),m(b,"class","markdown"),m(E,"class","markdown"),m(Z,"class","markdown"),m(F,"class","border-l-4 border-blue-600 bg-blue-50 px-4 py-3 my-6 text-sm"),m(Y,"class","markdown"),m(Y,"id","what-the-evidence-can-and-cannot-say"),m(B,"class","markdown"),m(ee,"class","markdown"),m(P,"class","markdown"),m(P,"id","table-1-review-retained-off-list-occupation-task-pairs-by-evidence-status"),m(te,"class","text-sm my-3"),m(J,"class","markdown"),m(J,"id","examples-first"),m(V,"class","markdown"),m(se,"class","grid grid-cols-1 md:grid-cols-3 gap-4 my-4 text-sm"),m(x,"class","markdown"),m(x,"id","occupation-level-gap-share"),m(ze,"class","markdown"),m(K,"class","grid grid-cols-1 md:grid-cols-4 gap-4 mb-4"),m(Be,"class","text-sm my-3"),m(Ce,"class","markdown"),m(Ce,"id","table-tam-1-occupations-with-largest-off-list-task-shares"),m(xe,"class","markdown"),m(xe,"id","task-buckets"),m(Ve,"class","text-sm my-3"),m(Ae,"class","markdown"),m(Ae,"id","table-tam-2-off-list-task-links-by-spread-bucket"),m(et,"class","cursor-pointer font-semibold"),m(tt,"class","text-sm my-3"),m(We,"class","markdown"),m(We,"id","table-tam-3-browseable-off-list-task-examples"),m(X,"class","my-4"),m(Re,"class","markdown"),m(Re,"id","workbook-downloads"),m(Je,"class","space-y-3 text-sm"),m(Ee,"class","markdown"),m(Ee,"id","audit-downloads"),m(at,"class","cursor-pointer font-semibold"),m(be,"class","my-4"),m(st,"class","cursor-pointer font-semibold"),m(ve,"class","my-4"),m(it,"class","cursor-pointer font-semibold"),m(he,"class","my-4"),m(nt,"class","cursor-pointer font-semibold"),m(ge,"class","my-4"),m(rt,"class","cursor-pointer font-semibold"),m(ke,"class","my-4")},m(e,i){Me&&Me.m(e,i),u(e,a,i),yt.m(document.head,null),M(document.head,s),M(document.head,t),qe&&qe.m(document.head,null),M(document.head,n),u(e,c,i),u(e,l,i),u(e,y,i),u(e,b,i),u(e,h,i),u(e,E,i),u(e,le,i),u(e,Z,i),u(e,Se,i),u(e,F,i),u(e,ue,i),u(e,Y,i),u(e,Ge,i),u(e,B,i),u(e,me,i),u(e,ee,i),u(e,Le,i),S&&S.m(e,i),u(e,W,i),u(e,P,i),u(e,Oe,i),u(e,te,i),u(e,ae,i),$(U,e,i),u(e,de,i),u(e,J,i),u(e,De,i),u(e,V,i),u(e,pe,i),u(e,se,i),u(e,Ie,i),u(e,x,i),u(e,$t,i),u(e,ze,i),u(e,Tt,i),G&&G.m(e,i),u(e,bt,i),u(e,K,i),$(Ne,K,null),M(K,Ut),$(je,K,null),M(K,Vt),$(Pe,K,null),M(K,Qt),$(Fe,K,null),u(e,Ct,i),L&&L.m(e,i),u(e,vt,i),u(e,Be,i),u(e,xt,i),u(e,Ce,i),u(e,At,i),$(Ue,e,i),u(e,Rt,i),u(e,xe,i),u(e,Et,i),H&&H.m(e,i),u(e,ht,i),u(e,Ve,i),u(e,Mt,i),u(e,Ae,i),u(e,qt,i),$(Qe,e,i),u(e,St,i),O&&O.m(e,i),u(e,gt,i),u(e,X,i),M(X,et),M(X,Wt),M(X,tt),M(X,Yt),M(X,We),M(X,Jt),$(Ye,X,null),u(e,Gt,i),u(e,Re,i),u(e,Lt,i),u(e,Je,i),u(e,Ht,i),u(e,Ee,i),u(e,Ot,i),u(e,be,i),M(be,at),M(be,Kt),D&&D.m(be,null),u(e,Dt,i),u(e,ve,i),M(ve,st),M(ve,Xt),I&&I.m(ve,null),u(e,It,i),u(e,he,i),M(he,it),M(he,Zt),z&&z.m(he,null),u(e,zt,i),u(e,ge,i),M(ge,nt),M(ge,ea),N&&N.m(ge,null),u(e,Nt,i),u(e,ke,i),M(ke,rt),M(ke,ta),j&&j.m(ke,null),jt=!0},p(e,i){typeof R<"u"&&R.title&&R.hide_title!==!0&&Me.p(e,i),yt.p(e,i),typeof R=="object"&&qe.p(e,i),e[0]?S?(S.p(e,i),i[0]&1&&p(S,1)):(S=$a(e),S.c(),p(S,1),S.m(W.parentNode,W)):S&&(we(),v(S,1,1,()=>{S=null}),ye());const ie={};i[0]&1&&(ie.data=e[0]),i[1]&131072&&(ie.$$scope={dirty:i,ctx:e}),U.$set(ie),e[1]?G?(G.p(e,i),i[0]&2&&p(G,1)):(G=Ta(e),G.c(),p(G,1),G.m(bt.parentNode,bt)):G&&(we(),v(G,1,1,()=>{G=null}),ye());const re={};i[0]&2&&(re.data=e[1]),Ne.$set(re);const ot={};i[0]&2&&(ot.data=e[1]),je.$set(ot);const lt={};i[0]&2&&(lt.data=e[1]),Pe.$set(lt);const ct={};i[0]&2&&(ct.data=e[1]),Fe.$set(ct),e[2]?L?(L.p(e,i),i[0]&4&&p(L,1)):(L=Ca(e),L.c(),p(L,1),L.m(vt.parentNode,vt)):L&&(we(),v(L,1,1,()=>{L=null}),ye());const Ke={};i[0]&4&&(Ke.data=e[2]),i[1]&131072&&(Ke.$$scope={dirty:i,ctx:e}),Ue.$set(Ke),e[3]?H?(H.p(e,i),i[0]&8&&p(H,1)):(H=xa(e),H.c(),p(H,1),H.m(ht.parentNode,ht)):H&&(we(),v(H,1,1,()=>{H=null}),ye());const Xe={};i[0]&8&&(Xe.data=e[3]),i[1]&131072&&(Xe.$$scope={dirty:i,ctx:e}),Qe.$set(Xe),e[4]?O?(O.p(e,i),i[0]&16&&p(O,1)):(O=Aa(e),O.c(),p(O,1),O.m(gt.parentNode,gt)):O&&(we(),v(O,1,1,()=>{O=null}),ye());const aa={};i[0]&16&&(aa.data=e[4]),i[1]&131072&&(aa.$$scope={dirty:i,ctx:e}),Ye.$set(aa),e[5]?D?(D.p(e,i),i[0]&32&&p(D,1)):(D=Ra(e),D.c(),p(D,1),D.m(be,null)):D&&(we(),v(D,1,1,()=>{D=null}),ye()),e[5]?I?(I.p(e,i),i[0]&32&&p(I,1)):(I=Ea(e),I.c(),p(I,1),I.m(ve,null)):I&&(we(),v(I,1,1,()=>{I=null}),ye()),e[5]?z?(z.p(e,i),i[0]&32&&p(z,1)):(z=Ma(e),z.c(),p(z,1),z.m(he,null)):z&&(we(),v(z,1,1,()=>{z=null}),ye()),e[5]?N?(N.p(e,i),i[0]&32&&p(N,1)):(N=qa(e),N.c(),p(N,1),N.m(ge,null)):N&&(we(),v(N,1,1,()=>{N=null}),ye()),e[5]?j?(j.p(e,i),i[0]&32&&p(j,1)):(j=Sa(e),j.c(),p(j,1),j.m(ke,null)):j&&(we(),v(j,1,1,()=>{j=null}),ye())},i(e){jt||(p(S),p(U.$$.fragment,e),p(G),p(Ne.$$.fragment,e),p(je.$$.fragment,e),p(Pe.$$.fragment,e),p(Fe.$$.fragment,e),p(L),p(Ue.$$.fragment,e),p(H),p(Qe.$$.fragment,e),p(O),p(Ye.$$.fragment,e),p(D),p(I),p(z),p(N),p(j),jt=!0)},o(e){v(S),v(U.$$.fragment,e),v(G),v(Ne.$$.fragment,e),v(je.$$.fragment,e),v(Pe.$$.fragment,e),v(Fe.$$.fragment,e),v(L),v(Ue.$$.fragment,e),v(H),v(Qe.$$.fragment,e),v(O),v(Ye.$$.fragment,e),v(D),v(I),v(z),v(N),v(j),jt=!1},d(e){e&&(r(a),r(c),r(l),r(y),r(b),r(h),r(E),r(le),r(Z),r(Se),r(F),r(ue),r(Y),r(Ge),r(B),r(me),r(ee),r(Le),r(W),r(P),r(Oe),r(te),r(ae),r(de),r(J),r(De),r(V),r(pe),r(se),r(Ie),r(x),r($t),r(ze),r(Tt),r(bt),r(K),r(Ct),r(vt),r(Be),r(xt),r(Ce),r(At),r(Rt),r(xe),r(Et),r(ht),r(Ve),r(Mt),r(Ae),r(qt),r(St),r(gt),r(X),r(Gt),r(Re),r(Lt),r(Je),r(Ht),r(Ee),r(Ot),r(be),r(Dt),r(ve),r(It),r(he),r(zt),r(ge),r(Nt),r(ke)),Me&&Me.d(e),yt.d(e),r(s),r(t),qe&&qe.d(e),r(n),S&&S.d(e),w(U,e),G&&G.d(e),w(Ne),w(je),w(Pe),w(Fe),L&&L.d(e),w(Ue,e),H&&H.d(e),w(Qe,e),O&&O.d(e),w(Ye),D&&D.d(),I&&I.d(),z&&z.d(),N&&N.d(),j&&j.d()}}}const R={title:"B. Analyzing the Mismatch"};function ls(f,a,s){let t,n;ka(f,Ya,x=>s(32,t=x)),ka(f,wa,x=>s(38,n=x));let{data:c}=a,{data:l={},customFormattingSettings:o,__db:y,inputs:b}=c;Oa(wa,n="9afe8118347862b97ff16bc2144ba88b",n);let q=Ua(Ba(b));Da(q.subscribe(x=>b=x)),Ia(Wa,{getCustomFormats:()=>o.customFormats||[]});const h=(x,wt)=>Ja(y.query,x,{query_name:wt});Va(h),t.params,za(()=>!0);let E={initialData:void 0,initialError:void 0},oe=ne`select
  evidence_status,
  meaning,
  rows
from jaat.AGGR_TaskAllocationEvidenceStatus
order by sort_order`,le=`select
  evidence_status,
  meaning,
  rows
from jaat.AGGR_TaskAllocationEvidenceStatus
order by sort_order`;l.evidence_status_summary_data&&(l.evidence_status_summary_data instanceof Error?E.initialError=l.evidence_status_summary_data:E.initialData=l.evidence_status_summary_data,l.evidence_status_summary_columns&&(E.knownColumns=l.evidence_status_summary_columns));let Z,ut=!1;const Se=kt.createReactive({callback:x=>{s(0,Z=x)},execFn:h},{id:"evidence_status_summary",...E});Se(le,{noResolve:oe,...E}),globalThis[Symbol.for("evidence_status_summary")]={get value(){return Z}};let F={initialData:void 0,initialError:void 0},ce=ne`select
  count(*) as occupations,
  median(off_onet_share) as median_gap_share,
  quantile_cont(off_onet_share, 0.75) as p75_gap_share,
  quantile_cont(off_onet_share, 0.90) as p90_gap_share,
  sum(case when off_onet_share >= 0.50 then 1 else 0 end) as occupations_above_half,
  sum(n_validated_offlist) as validated_offlist_pairs
from jaat.AGGR_TaskAllocationCombinedOccupationBurden
where n_onet_canonical >= 10`,ue=`select
  count(*) as occupations,
  median(off_onet_share) as median_gap_share,
  quantile_cont(off_onet_share, 0.75) as p75_gap_share,
  quantile_cont(off_onet_share, 0.90) as p90_gap_share,
  sum(case when off_onet_share >= 0.50 then 1 else 0 end) as occupations_above_half,
  sum(n_validated_offlist) as validated_offlist_pairs
from jaat.AGGR_TaskAllocationCombinedOccupationBurden
where n_onet_canonical >= 10`;l.combined_gap_share_summary_data&&(l.combined_gap_share_summary_data instanceof Error?F.initialError=l.combined_gap_share_summary_data:F.initialData=l.combined_gap_share_summary_data,l.combined_gap_share_summary_columns&&(F.knownColumns=l.combined_gap_share_summary_columns));let Y,ft=!1;const Ge=kt.createReactive({callback:x=>{s(1,Y=x)},execFn:h},{id:"combined_gap_share_summary",...F});Ge(ue,{noResolve:ce,...F}),globalThis[Symbol.for("combined_gap_share_summary")]={get value(){return Y}};let B={initialData:void 0,initialError:void 0},fe=ne`select
  concat(occ8, ' ', soc_title) as occupation,
  n_onet_canonical,
  n_validated_offlist,
  off_onet_share,
  n_offlist_general_narrowness,
  n_offlist_cluster,
  n_offlist_specialized_candidate_misfile
from jaat.AGGR_TaskAllocationCombinedOccupationBurden
where n_onet_canonical >= 10
order by n_offlist_specialized_candidate_misfile desc, off_onet_share desc
limit 20`,me=`select
  concat(occ8, ' ', soc_title) as occupation,
  n_onet_canonical,
  n_validated_offlist,
  off_onet_share,
  n_offlist_general_narrowness,
  n_offlist_cluster,
  n_offlist_specialized_candidate_misfile
from jaat.AGGR_TaskAllocationCombinedOccupationBurden
where n_onet_canonical >= 10
order by n_offlist_specialized_candidate_misfile desc, off_onet_share desc
limit 20`;l.combined_occ_burden_data&&(l.combined_occ_burden_data instanceof Error?B.initialError=l.combined_occ_burden_data:B.initialData=l.combined_occ_burden_data,l.combined_occ_burden_columns&&(B.knownColumns=l.combined_occ_burden_columns));let ee,mt=!1;const Le=kt.createReactive({callback:x=>{s(2,ee=x)},execFn:h},{id:"combined_occ_burden",...B});Le(me,{noResolve:fe,...B}),globalThis[Symbol.for("combined_occ_burden")]={get value(){return ee}};let W={initialData:void 0,initialError:void 0},P=ne`select
  bucket,
  count(*) as n_tasks,
  sum(n_retained_noncanon_occ) as retained_noncanonical_occupation_links
from jaat.AGGR_TaskAllocationCombinedGapTasks
group by 1
order by
  case bucket
    when 'generic-diffusion' then 1
    when 'mixed' then 2
    when 'sector-concentrated' then 3
    else 9
  end`,He=`select
  bucket,
  count(*) as n_tasks,
  sum(n_retained_noncanon_occ) as retained_noncanonical_occupation_links
from jaat.AGGR_TaskAllocationCombinedGapTasks
group by 1
order by
  case bucket
    when 'generic-diffusion' then 1
    when 'mixed' then 2
    when 'sector-concentrated' then 3
    else 9
  end`;l.combined_gap_buckets_data&&(l.combined_gap_buckets_data instanceof Error?W.initialError=l.combined_gap_buckets_data:W.initialData=l.combined_gap_buckets_data,l.combined_gap_buckets_columns&&(W.knownColumns=l.combined_gap_buckets_columns));let Oe,te=!1;const dt=kt.createReactive({callback:x=>{s(3,Oe=x)},execFn:h},{id:"combined_gap_buckets",...W});dt(He,{noResolve:P,...W}),globalThis[Symbol.for("combined_gap_buckets")]={get value(){return Oe}};let ae={initialData:void 0,initialError:void 0},U=ne`with ranked as (
  select
    cast(task_id as varchar) as task_id,
    task_text,
    category,
    eff_sectors,
    n_occ_over_rca1,
    volume,
    row_number() over (
      partition by category
      order by volume desc
    ) as category_rank
  from jaat.AGGR_TaskAllocationCombinedTaskCategories
  where volume >= 10000
)
select
  task_id,
  task_text,
  category,
  eff_sectors,
  n_occ_over_rca1,
  volume
from ranked
where category_rank <= 20
order by
  case category
    when 'general' then 1
    when 'shared_cluster' then 2
    when 'specialized_core' then 3
    else 9
  end,
  volume desc`,de=`with ranked as (
  select
    cast(task_id as varchar) as task_id,
    task_text,
    category,
    eff_sectors,
    n_occ_over_rca1,
    volume,
    row_number() over (
      partition by category
      order by volume desc
    ) as category_rank
  from jaat.AGGR_TaskAllocationCombinedTaskCategories
  where volume >= 10000
)
select
  task_id,
  task_text,
  category,
  eff_sectors,
  n_occ_over_rca1,
  volume
from ranked
where category_rank <= 20
order by
  case category
    when 'general' then 1
    when 'shared_cluster' then 2
    when 'specialized_core' then 3
    else 9
  end,
  volume desc`;l.combined_task_examples_data&&(l.combined_task_examples_data instanceof Error?ae.initialError=l.combined_task_examples_data:ae.initialData=l.combined_task_examples_data,l.combined_task_examples_columns&&(ae.knownColumns=l.combined_task_examples_columns));let J,_t=!1;const De=kt.createReactive({callback:x=>{s(4,J=x)},execFn:h},{id:"combined_task_examples",...ae});De(de,{noResolve:U,...ae}),globalThis[Symbol.for("combined_task_examples")]={get value(){return J}};let V={initialData:void 0,initialError:void 0},_e=ne`with ranked as (
  select
    cast(task_id as varchar) as task_id,
    task_text,
    category,
    eff_sectors,
    n_occ_over_rca1,
    volume,
    row_number() over (
      partition by category
      order by volume desc
    ) as category_rank
  from jaat.AGGR_TaskAllocationCombinedTaskCategories
  where volume >= 10000
)
select
  task_id,
  task_text,
  category,
  eff_sectors,
  n_occ_over_rca1,
  volume
from ranked
where category_rank <= 20
order by
  case category
    when 'general' then 1
    when 'shared_cluster' then 2
    when 'specialized_core' then 3
    else 9
  end,
  volume desc`,pe=`with ranked as (
  select
    cast(task_id as varchar) as task_id,
    task_text,
    category,
    eff_sectors,
    n_occ_over_rca1,
    volume,
    row_number() over (
      partition by category
      order by volume desc
    ) as category_rank
  from jaat.AGGR_TaskAllocationCombinedTaskCategories
  where volume >= 10000
)
select
  task_id,
  task_text,
  category,
  eff_sectors,
  n_occ_over_rca1,
  volume
from ranked
where category_rank <= 20
order by
  case category
    when 'general' then 1
    when 'shared_cluster' then 2
    when 'specialized_core' then 3
    else 9
  end,
  volume desc`;l.text_data&&(l.text_data instanceof Error?V.initialError=l.text_data:V.initialData=l.text_data,l.text_columns&&(V.knownColumns=l.text_columns));let se,pt=!1;const Ie=kt.createReactive({callback:x=>{s(5,se=x)},execFn:h},{id:"text",...V});return Ie(pe,{noResolve:_e,...V}),globalThis[Symbol.for("text")]={get value(){return se}},f.$$set=x=>{"data"in x&&s(6,c=x.data)},f.$$.update=()=>{f.$$.dirty[0]&64&&s(7,{data:l={},customFormattingSettings:o,__db:y}=c,l),f.$$.dirty[0]&128&&Qa.set(Object.keys(l).length>0),f.$$.dirty[1]&2&&t.params,f.$$.dirty[0]&3840&&(oe||!ut?oe||(Se(le,{noResolve:oe,...E}),s(11,ut=!0)):Se(le,{noResolve:oe})),f.$$.dirty[0]&61440&&(ce||!ft?ce||(Ge(ue,{noResolve:ce,...F}),s(15,ft=!0)):Ge(ue,{noResolve:ce})),f.$$.dirty[0]&983040&&(fe||!mt?fe||(Le(me,{noResolve:fe,...B}),s(19,mt=!0)):Le(me,{noResolve:fe})),f.$$.dirty[0]&15728640&&(P||!te?P||(dt(He,{noResolve:P,...W}),s(23,te=!0)):dt(He,{noResolve:P})),f.$$.dirty[0]&251658240&&(U||!_t?U||(De(de,{noResolve:U,...ae}),s(27,_t=!0)):De(de,{noResolve:U})),f.$$.dirty[0]&1879048192|f.$$.dirty[1]&1&&(_e||!pt?_e||(Ie(pe,{noResolve:_e,...V}),s(31,pt=!0)):Ie(pe,{noResolve:_e}))},s(9,oe=ne`select
  evidence_status,
  meaning,
  rows
from jaat.AGGR_TaskAllocationEvidenceStatus
order by sort_order`),s(10,le=`select
  evidence_status,
  meaning,
  rows
from jaat.AGGR_TaskAllocationEvidenceStatus
order by sort_order`),s(13,ce=ne`select
  count(*) as occupations,
  median(off_onet_share) as median_gap_share,
  quantile_cont(off_onet_share, 0.75) as p75_gap_share,
  quantile_cont(off_onet_share, 0.90) as p90_gap_share,
  sum(case when off_onet_share >= 0.50 then 1 else 0 end) as occupations_above_half,
  sum(n_validated_offlist) as validated_offlist_pairs
from jaat.AGGR_TaskAllocationCombinedOccupationBurden
where n_onet_canonical >= 10`),s(14,ue=`select
  count(*) as occupations,
  median(off_onet_share) as median_gap_share,
  quantile_cont(off_onet_share, 0.75) as p75_gap_share,
  quantile_cont(off_onet_share, 0.90) as p90_gap_share,
  sum(case when off_onet_share >= 0.50 then 1 else 0 end) as occupations_above_half,
  sum(n_validated_offlist) as validated_offlist_pairs
from jaat.AGGR_TaskAllocationCombinedOccupationBurden
where n_onet_canonical >= 10`),s(17,fe=ne`select
  concat(occ8, ' ', soc_title) as occupation,
  n_onet_canonical,
  n_validated_offlist,
  off_onet_share,
  n_offlist_general_narrowness,
  n_offlist_cluster,
  n_offlist_specialized_candidate_misfile
from jaat.AGGR_TaskAllocationCombinedOccupationBurden
where n_onet_canonical >= 10
order by n_offlist_specialized_candidate_misfile desc, off_onet_share desc
limit 20`),s(18,me=`select
  concat(occ8, ' ', soc_title) as occupation,
  n_onet_canonical,
  n_validated_offlist,
  off_onet_share,
  n_offlist_general_narrowness,
  n_offlist_cluster,
  n_offlist_specialized_candidate_misfile
from jaat.AGGR_TaskAllocationCombinedOccupationBurden
where n_onet_canonical >= 10
order by n_offlist_specialized_candidate_misfile desc, off_onet_share desc
limit 20`),s(21,P=ne`select
  bucket,
  count(*) as n_tasks,
  sum(n_retained_noncanon_occ) as retained_noncanonical_occupation_links
from jaat.AGGR_TaskAllocationCombinedGapTasks
group by 1
order by
  case bucket
    when 'generic-diffusion' then 1
    when 'mixed' then 2
    when 'sector-concentrated' then 3
    else 9
  end`),s(22,He=`select
  bucket,
  count(*) as n_tasks,
  sum(n_retained_noncanon_occ) as retained_noncanonical_occupation_links
from jaat.AGGR_TaskAllocationCombinedGapTasks
group by 1
order by
  case bucket
    when 'generic-diffusion' then 1
    when 'mixed' then 2
    when 'sector-concentrated' then 3
    else 9
  end`),s(25,U=ne`with ranked as (
  select
    cast(task_id as varchar) as task_id,
    task_text,
    category,
    eff_sectors,
    n_occ_over_rca1,
    volume,
    row_number() over (
      partition by category
      order by volume desc
    ) as category_rank
  from jaat.AGGR_TaskAllocationCombinedTaskCategories
  where volume >= 10000
)
select
  task_id,
  task_text,
  category,
  eff_sectors,
  n_occ_over_rca1,
  volume
from ranked
where category_rank <= 20
order by
  case category
    when 'general' then 1
    when 'shared_cluster' then 2
    when 'specialized_core' then 3
    else 9
  end,
  volume desc`),s(26,de=`with ranked as (
  select
    cast(task_id as varchar) as task_id,
    task_text,
    category,
    eff_sectors,
    n_occ_over_rca1,
    volume,
    row_number() over (
      partition by category
      order by volume desc
    ) as category_rank
  from jaat.AGGR_TaskAllocationCombinedTaskCategories
  where volume >= 10000
)
select
  task_id,
  task_text,
  category,
  eff_sectors,
  n_occ_over_rca1,
  volume
from ranked
where category_rank <= 20
order by
  case category
    when 'general' then 1
    when 'shared_cluster' then 2
    when 'specialized_core' then 3
    else 9
  end,
  volume desc`),s(29,_e=ne`with ranked as (
  select
    cast(task_id as varchar) as task_id,
    task_text,
    category,
    eff_sectors,
    n_occ_over_rca1,
    volume,
    row_number() over (
      partition by category
      order by volume desc
    ) as category_rank
  from jaat.AGGR_TaskAllocationCombinedTaskCategories
  where volume >= 10000
)
select
  task_id,
  task_text,
  category,
  eff_sectors,
  n_occ_over_rca1,
  volume
from ranked
where category_rank <= 20
order by
  case category
    when 'general' then 1
    when 'shared_cluster' then 2
    when 'specialized_core' then 3
    else 9
  end,
  volume desc`),s(30,pe=`with ranked as (
  select
    cast(task_id as varchar) as task_id,
    task_text,
    category,
    eff_sectors,
    n_occ_over_rca1,
    volume,
    row_number() over (
      partition by category
      order by volume desc
    ) as category_rank
  from jaat.AGGR_TaskAllocationCombinedTaskCategories
  where volume >= 10000
)
select
  task_id,
  task_text,
  category,
  eff_sectors,
  n_occ_over_rca1,
  volume
from ranked
where category_rank <= 20
order by
  case category
    when 'general' then 1
    when 'shared_cluster' then 2
    when 'specialized_core' then 3
    else 9
  end,
  volume desc`),[Z,Y,ee,Oe,J,se,c,l,E,oe,le,ut,F,ce,ue,ft,B,fe,me,mt,W,P,He,te,ae,U,de,_t,V,_e,pe,pt,t]}class ks extends Pa{constructor(a){super(),Fa(this,a,ls,os,La,{data:6},null,[-1,-1])}}export{ks as component};
