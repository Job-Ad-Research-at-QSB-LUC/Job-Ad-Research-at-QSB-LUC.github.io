import{s as lo,d as _,i as u,a as ms,z as no,C as ro,b as $,c as p,h as co,e as h,f as ps,g as A,k as b,l as T,m as Ns,n as _o,o as uo,p as fo,q as mo,r as oe,j as po,t as bo,u as $o}from"../chunks/scheduler.DhBftCKw.js";import{S as ko,i as vo,d as v,t as k,a as m,c as ge,m as w,b as g,e as j,g as je}from"../chunks/index.BUvAr1Xw.js";import{D as Be,C as R}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.B0mztXUO.js";import{w as wo}from"../chunks/entry.BMENagX9.js";import{e as go,s as jo,Q as ye,p as yo,a as Bs,r as Vs,C as ho}from"../chunks/inferColumnTypes.D6fZb62q.js";import{h as C}from"../chunks/setTrackProxy.Cyfckp0w.js";import{D as To}from"../chunks/Dropdown.D0da1eQh.js";import{p as So}from"../chunks/stores.DdIem69U.js";import{Q as he}from"../chunks/QueryViewer.ZRKlIdUM.js";import{L as Ao}from"../chunks/LineChart.DcqOcd8C.js";import{p as Ro}from"../chunks/profile.BW8tN6E9.js";function Go(f){let s,i=G.title+"",t;return{c(){s=T("h1"),t=$o(i),this.h()},l(c){s=h(c,"H1",{class:!0});var r=po(s);t=bo(r,i),r.forEach(_),this.h()},h(){$(s,"class","title")},m(c,r){u(c,s,r),ms(s,t)},p:oe,d(c){c&&_(s)}}}function Co(f){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:oe,p:oe,d:oe}}function Ho(f){let s,i,t,c,r;return document.title=s=G.title,{c(){i=b(),t=T("meta"),c=b(),r=T("meta"),this.h()},l(n){i=p(n),t=h(n,"META",{property:!0,content:!0}),c=p(n),r=h(n,"META",{name:!0,content:!0}),this.h()},h(){var n,a;$(t,"property","og:title"),$(t,"content",((n=G.og)==null?void 0:n.title)??G.title),$(r,"name","twitter:title"),$(r,"content",((a=G.og)==null?void 0:a.title)??G.title)},m(n,a){u(n,i,a),u(n,t,a),u(n,c,a),u(n,r,a)},p(n,a){a&0&&s!==(s=G.title)&&(document.title=s)},d(n){n&&(_(i),_(t),_(c),_(r))}}}function Oo(f){var r,n;let s,i,t=(G.description||((r=G.og)==null?void 0:r.description))&&Eo(),c=((n=G.og)==null?void 0:n.image)&&Mo();return{c(){t&&t.c(),s=b(),c&&c.c(),i=ps()},l(a){t&&t.l(a),s=p(a),c&&c.l(a),i=ps()},m(a,d){t&&t.m(a,d),u(a,s,d),c&&c.m(a,d),u(a,i,d)},p(a,d){var o,y;(G.description||(o=G.og)!=null&&o.description)&&t.p(a,d),(y=G.og)!=null&&y.image&&c.p(a,d)},d(a){a&&(_(s),_(i)),t&&t.d(a),c&&c.d(a)}}}function Eo(f){let s,i,t,c,r;return{c(){s=T("meta"),i=b(),t=T("meta"),c=b(),r=T("meta"),this.h()},l(n){s=h(n,"META",{name:!0,content:!0}),i=p(n),t=h(n,"META",{property:!0,content:!0}),c=p(n),r=h(n,"META",{name:!0,content:!0}),this.h()},h(){var n,a,d;$(s,"name","description"),$(s,"content",G.description??((n=G.og)==null?void 0:n.description)),$(t,"property","og:description"),$(t,"content",((a=G.og)==null?void 0:a.description)??G.description),$(r,"name","twitter:description"),$(r,"content",((d=G.og)==null?void 0:d.description)??G.description)},m(n,a){u(n,s,a),u(n,i,a),u(n,t,a),u(n,c,a),u(n,r,a)},p:oe,d(n){n&&(_(s),_(i),_(t),_(c),_(r))}}}function Mo(f){let s,i,t;return{c(){s=T("meta"),i=b(),t=T("meta"),this.h()},l(c){s=h(c,"META",{property:!0,content:!0}),i=p(c),t=h(c,"META",{name:!0,content:!0}),this.h()},h(){var c,r;$(s,"property","og:image"),$(s,"content",Bs((c=G.og)==null?void 0:c.image)),$(t,"name","twitter:image"),$(t,"content",Bs((r=G.og)==null?void 0:r.image))},m(c,r){u(c,s,r),u(c,i,r),u(c,t,r)},p:oe,d(c){c&&(_(s),_(i),_(t))}}}function Ws(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_options",queryResult:f[1]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&2&&(r.queryResult=t[1]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function zs(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_overview",queryResult:f[2]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&4&&(r.queryResult=t[2]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function qo(f){let s,i,t,c,r,n,a,d;return s=new R({props:{id:"soc_title",title:"Occupation"}}),t=new R({props:{id:"n_postings",title:"Postings",fmt:"#,##0"}}),r=new R({props:{id:"retained_tasks",title:"Tasks",fmt:"#,##0"}}),a=new R({props:{id:"share_retained_tasks_in_onet",title:"In O*NET",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment),n=b(),j(a.$$.fragment)},l(o){g(s.$$.fragment,o),i=p(o),g(t.$$.fragment,o),c=p(o),g(r.$$.fragment,o),n=p(o),g(a.$$.fragment,o)},m(o,y){w(s,o,y),u(o,i,y),w(t,o,y),u(o,c,y),w(r,o,y),u(o,n,y),w(a,o,y),d=!0},p:oe,i(o){d||(m(s.$$.fragment,o),m(t.$$.fragment,o),m(r.$$.fragment,o),m(a.$$.fragment,o),d=!0)},o(o){k(s.$$.fragment,o),k(t.$$.fragment,o),k(r.$$.fragment,o),k(a.$$.fragment,o),d=!1},d(o){o&&(_(i),_(c),_(n)),v(s,o),v(t,o),v(r,o),v(a,o)}}}function Qs(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_posting_volume",queryResult:f[3]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&8&&(r.queryResult=t[3]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Ks(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_tasks_rca",queryResult:f[4]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&16&&(r.queryResult=t[4]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Po(f){let s,i,t,c,r,n,a,d;return s=new R({props:{id:"task_text",title:"Task",wrap:"true"}}),t=new R({props:{id:"rca",title:"RCA",fmt:"0.00"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),a=new R({props:{id:"in_onet",title:"In O*NET",fmt:"0"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment),n=b(),j(a.$$.fragment)},l(o){g(s.$$.fragment,o),i=p(o),g(t.$$.fragment,o),c=p(o),g(r.$$.fragment,o),n=p(o),g(a.$$.fragment,o)},m(o,y){w(s,o,y),u(o,i,y),w(t,o,y),u(o,c,y),w(r,o,y),u(o,n,y),w(a,o,y),d=!0},p:oe,i(o){d||(m(s.$$.fragment,o),m(t.$$.fragment,o),m(r.$$.fragment,o),m(a.$$.fragment,o),d=!0)},o(o){k(s.$$.fragment,o),k(t.$$.fragment,o),k(r.$$.fragment,o),k(a.$$.fragment,o),d=!1},d(o){o&&(_(i),_(c),_(n)),v(s,o),v(t,o),v(r,o),v(a,o)}}}function Xs(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_tasks_volume",queryResult:f[5]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&32&&(r.queryResult=t[5]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Uo(f){let s,i,t,c,r,n,a,d;return s=new R({props:{id:"task_text",title:"Task",wrap:"true"}}),t=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),r=new R({props:{id:"rca",title:"RCA",fmt:"0.00"}}),a=new R({props:{id:"in_onet",title:"In O*NET",fmt:"0"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment),n=b(),j(a.$$.fragment)},l(o){g(s.$$.fragment,o),i=p(o),g(t.$$.fragment,o),c=p(o),g(r.$$.fragment,o),n=p(o),g(a.$$.fragment,o)},m(o,y){w(s,o,y),u(o,i,y),w(t,o,y),u(o,c,y),w(r,o,y),u(o,n,y),w(a,o,y),d=!0},p:oe,i(o){d||(m(s.$$.fragment,o),m(t.$$.fragment,o),m(r.$$.fragment,o),m(a.$$.fragment,o),d=!0)},o(o){k(s.$$.fragment,o),k(t.$$.fragment,o),k(r.$$.fragment,o),k(a.$$.fragment,o),d=!1},d(o){o&&(_(i),_(c),_(n)),v(s,o),v(t,o),v(r,o),v(a,o)}}}function Ys(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_work_activities",queryResult:f[6]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&64&&(r.queryResult=t[6]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Lo(f){let s,i,t,c,r,n;return s=new R({props:{id:"wa_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"wa_name",title:"Name",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment)},l(a){g(s.$$.fragment,a),i=p(a),g(t.$$.fragment,a),c=p(a),g(r.$$.fragment,a)},m(a,d){w(s,a,d),u(a,i,d),w(t,a,d),u(a,c,d),w(r,a,d),n=!0},p:oe,i(a){n||(m(s.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),n=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),k(r.$$.fragment,a),n=!1},d(a){a&&(_(i),_(c)),v(s,a),v(t,a),v(r,a)}}}function Zs(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_skills",queryResult:f[7]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&128&&(r.queryResult=t[7]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Jo(f){let s,i,t,c,r,n;return s=new R({props:{id:"skill_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"skill_label",title:"Skill",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment)},l(a){g(s.$$.fragment,a),i=p(a),g(t.$$.fragment,a),c=p(a),g(r.$$.fragment,a)},m(a,d){w(s,a,d),u(a,i,d),w(t,a,d),u(a,c,d),w(r,a,d),n=!0},p:oe,i(a){n||(m(s.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),n=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),k(r.$$.fragment,a),n=!1},d(a){a&&(_(i),_(c)),v(s,a),v(t,a),v(r,a)}}}function eo(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_onet_skills",queryResult:f[8]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&256&&(r.queryResult=t[8]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Do(f){let s,i,t,c,r,n;return s=new R({props:{id:"skill_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"inferred_skill_mentions",title:"Mentions",fmt:"#,##0"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment)},l(a){g(s.$$.fragment,a),i=p(a),g(t.$$.fragment,a),c=p(a),g(r.$$.fragment,a)},m(a,d){w(s,a,d),u(a,i,d),w(t,a,d),u(a,c,d),w(r,a,d),n=!0},p:oe,i(a){n||(m(s.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),n=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),k(r.$$.fragment,a),n=!1},d(a){a&&(_(i),_(c)),v(s,a),v(t,a),v(r,a)}}}function to(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_tools",queryResult:f[9]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&512&&(r.queryResult=t[9]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Io(f){let s,i,t,c,r,n,a,d;return s=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"tool",title:"Tool",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),a=new R({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment),n=b(),j(a.$$.fragment)},l(o){g(s.$$.fragment,o),i=p(o),g(t.$$.fragment,o),c=p(o),g(r.$$.fragment,o),n=p(o),g(a.$$.fragment,o)},m(o,y){w(s,o,y),u(o,i,y),w(t,o,y),u(o,c,y),w(r,o,y),u(o,n,y),w(a,o,y),d=!0},p:oe,i(o){d||(m(s.$$.fragment,o),m(t.$$.fragment,o),m(r.$$.fragment,o),m(a.$$.fragment,o),d=!0)},o(o){k(s.$$.fragment,o),k(t.$$.fragment,o),k(r.$$.fragment,o),k(a.$$.fragment,o),d=!1},d(o){o&&(_(i),_(c),_(n)),v(s,o),v(t,o),v(r,o),v(a,o)}}}function so(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_technology",queryResult:f[10]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&1024&&(r.queryResult=t[10]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Fo(f){let s,i,t,c,r,n,a,d;return s=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"technology",title:"Technology",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),a=new R({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment),n=b(),j(a.$$.fragment)},l(o){g(s.$$.fragment,o),i=p(o),g(t.$$.fragment,o),c=p(o),g(r.$$.fragment,o),n=p(o),g(a.$$.fragment,o)},m(o,y){w(s,o,y),u(o,i,y),w(t,o,y),u(o,c,y),w(r,o,y),u(o,n,y),w(a,o,y),d=!0},p:oe,i(o){d||(m(s.$$.fragment,o),m(t.$$.fragment,o),m(r.$$.fragment,o),m(a.$$.fragment,o),d=!0)},o(o){k(s.$$.fragment,o),k(t.$$.fragment,o),k(r.$$.fragment,o),k(a.$$.fragment,o),d=!1},d(o){o&&(_(i),_(c),_(n)),v(s,o),v(t,o),v(r,o),v(a,o)}}}function oo(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_education",queryResult:f[11]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&2048&&(r.queryResult=t[11]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function xo(f){let s,i,t,c,r,n;return s=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"value",title:"Education",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment)},l(a){g(s.$$.fragment,a),i=p(a),g(t.$$.fragment,a),c=p(a),g(r.$$.fragment,a)},m(a,d){w(s,a,d),u(a,i,d),w(t,a,d),u(a,c,d),w(r,a,d),n=!0},p:oe,i(a){n||(m(s.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),n=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),k(r.$$.fragment,a),n=!1},d(a){a&&(_(i),_(c)),v(s,a),v(t,a),v(r,a)}}}function ao(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_benefits",queryResult:f[12]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&4096&&(r.queryResult=t[12]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function No(f){let s,i,t,c,r,n;return s=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"value",title:"Benefit",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment)},l(a){g(s.$$.fragment,a),i=p(a),g(t.$$.fragment,a),c=p(a),g(r.$$.fragment,a)},m(a,d){w(s,a,d),u(a,i,d),w(t,a,d),u(a,c,d),w(r,a,d),n=!0},p:oe,i(a){n||(m(s.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),n=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),k(r.$$.fragment,a),n=!1},d(a){a&&(_(i),_(c)),v(s,a),v(t,a),v(r,a)}}}function Bo(f){let s,i,t,c,r,n,a="Select one 8-digit O*NET-SOC occupation. Tables use USAJOBS task, skill, Work Activity, and ConceptSearch aggregates.",d,o,y="<strong>How to read this page.</strong> This is a federal posting profile, not a national occupation profile. RCA highlights distinctive rows within USAJOBS; frequency columns show scale. ConceptSearch rows are descriptive matches, while task rows use the occupation-task agreement procedure.",x,ae,K,Se,X,Rt="Compare to O*NET",nt,N,Ae='<a href="#profile-contents">Profile Contents</a>',Re,fe,Gt='<a href="#overview" class="hover:underline">Overview</a> <a href="#tasks" class="hover:underline">Tasks</a> <a href="#work-activities" class="hover:underline">Work Activities</a> <a href="#skills" class="hover:underline">Skills</a> <a href="#tools" class="hover:underline">Tools</a> <a href="#technologies" class="hover:underline">Technologies</a> <a href="#education" class="hover:underline">Education</a> <a href="#benefits" class="hover:underline">Benefits</a> <a href="#data" class="hover:underline">Data</a>',rt,Y,Ge="This profile is the USAJOBS occupation posting profile for the selected 8-digit O*NET-SOC occupation. Task tables use rows retained by the job-ad-derived occupation-task pair two-model agreement procedure; RCA highlights tasks that are distinctive for the occupation, while the frequent-task table shows the tasks most prevalent in postings. Tools, technologies, education, and benefits are supporting concept features, not task agreement evidence.",Ce,me,Ct="<strong>Shared terms.</strong> % posts = share of selected occupation postings with the row. RCA = row share in the selected occupation / row share in USAJOBS overall. In O*NET = 1 when O*NET lists the selected occupation-task pair.",ct,B,He='<a href="#overview">Overview</a>',Oe,Ee,ne,Ht='<a href="#table-1-selected-usajobs-occupation-overview">Table 1. Selected USAJOBS occupation overview</a>',pe,Z,Me,qe,re,Ot='<a href="#figure-uo-1-posting-volume">Figure UO-1. Posting volume</a>',be,ee,Pe,$e,Et="This chart is included to show whether profile rows are drawn from a stable posting stream or from a thin/noisy selected-occupation month.",_t,V,Ue='<a href="#tasks">Tasks</a>',Le,ke,Mt='RCA is revealed comparative advantage; see <a href="/us-lmi/methodology#revealed-comparative-advantage-rca" class="markdown">methods</a>.',ut,te,Je="<strong>Generic tasks removed.</strong> These task tables omit rows labeled <code>general</code> in <code>combined_task_allocation_task_categories.csv</code>, so the profile focuses on more occupation-specific task signals.",De,ce,qt='<a href="#most-distinctive-tasks-rca">Most Distinctive Tasks (RCA)</a>',ft,ie,W,mt='<a href="#table-2-distinctive-tasks-by-rca-for-the-selected-usajobs-occupation">Table 2. Distinctive tasks by RCA for the selected USAJOBS occupation</a>',pt,de,bt,z,Ie='<a href="#most-frequent-tasks">Most Frequent Tasks</a>',Fe,xe,_e,Pt='<a href="#table-3-frequent-tasks-for-the-selected-usajobs-occupation">Table 3. Frequent tasks for the selected USAJOBS occupation</a>',ve,se,Ne,ue,Ut='<a href="#work-activities">Work Activities</a>',$t,le,Q,kt='<a href="#table-4-work-activities-for-the-selected-usajobs-occupation">Table 4. Work Activities for the selected USAJOBS occupation</a>',dt,we,vt,Te,S='<a href="#skills">Skills</a>',Lt,Ve,Ss='<a href="#esco-skills">ESCO Skills</a>',Vt,Jt,We,As='<a href="#table-5-extracted-skills-for-the-selected-usajobs-occupation">Table 5. Extracted skills for the selected USAJOBS occupation</a>',Wt,wt,zt,ze,Rs='<a href="#crosswalked-onet-skills-from-work-activities">Crosswalked O*NET Skills (from Work Activities)</a>',Qt,Dt,Qe,Gs='<a href="#table-6-crosswalked-onet-skills-for-the-selected-usajobs-occupation">Table 6. Crosswalked O*NET skills for the selected USAJOBS occupation</a>',Kt,gt,Xt,Ke,Cs='<a href="#tools">Tools</a>',Yt,It,Xe,Hs='<a href="#table-7-tools-for-the-selected-usajobs-occupation">Table 7. Tools for the selected USAJOBS occupation</a>',Zt,jt,es,Ye,Os='<a href="#technologies">Technologies</a>',ts,Ft,Ze,Es='<a href="#table-8-technology-concepts-for-the-selected-usajobs-occupation">Table 8. Technology concepts for the selected USAJOBS occupation</a>',ss,yt,os,et,Ms='<a href="#education">Education</a>',as,xt,tt,qs='<a href="#table-9-education-concepts-for-the-selected-usajobs-occupation">Table 9. Education concepts for the selected USAJOBS occupation</a>',is,ht,ls,st,Ps='<a href="#benefits">Benefits</a>',ns,Nt,ot,Us='<a href="#table-10-benefit-concepts-for-the-selected-usajobs-occupation">Table 10. Benefit concepts for the selected USAJOBS occupation</a>',rs,Tt,cs,at,Ls='<a href="#data">Data</a>',_s,St,Js='Sources used here: <code class="markdown">AGGR_OccupationTaskSignatures</code>, <code class="markdown">AGGR_USAJobsOccupationWAProfile</code>, <code class="markdown">AGGR_USAJobsOccupationSkillProfile</code>, <code class="markdown">AGGR_USAJobsOccupationOnetSkillProfile</code>, <code class="markdown">AGGR_OnetOccupationSkills</code>, and <code class="markdown">AGGR_USAJobsEntityConceptProfile</code>. The task profile and crosswalked O*NET skill sources read <code class="markdown">JaatTasks_Validated</code>; crosswalked O*NET skills use the O*NET 27.2 Skills-to-Work-Activities crosswalk.',us,At,Ds='Evidence path: RCA is defined in <a href="/us-lmi/methodology#revealed-comparative-advantage-rca" class="markdown">Methods</a>. USAJOBS source and agreement artifacts are listed in <a href="/us-lmi/methodology/audit-trail" class="markdown">Agreement And Audit Trail</a>.',fs,bs,Is,it=typeof G<"u"&&G.title&&G.hide_title!==!0&&Go();function io(e,l){return typeof G<"u"&&G.title?Ho:Co}let Bt=io()(f),lt=typeof G=="object"&&Oo(),H=f[1]&&Ws(f);K=new To({props:{data:f[1],name:"usajobs_occ",value:"occ8",label:"soc_title",defaultValue:"15-1252.00",title:"Occupation"}});let O=f[2]&&zs(f);Z=new Be({props:{data:f[2],rows:"1",$$slots:{default:[qo]},$$scope:{ctx:f}}});let E=f[3]&&Qs(f);ee=new Ao({props:{data:f[3],x:"month_start",y:"n_postings",yAxisTitle:"Postings",title:"Posting volume"}});let M=f[4]&&Ks(f);de=new Be({props:{data:f[4],rowsPerPage:"10",$$slots:{default:[Po]},$$scope:{ctx:f}}});let q=f[5]&&Xs(f);se=new Be({props:{data:f[5],rowsPerPage:"10",$$slots:{default:[Uo]},$$scope:{ctx:f}}});let P=f[6]&&Ys(f);we=new Be({props:{data:f[6],rowsPerPage:"25",$$slots:{default:[Lo]},$$scope:{ctx:f}}});let U=f[7]&&Zs(f);wt=new Be({props:{data:f[7],rowsPerPage:"25",$$slots:{default:[Jo]},$$scope:{ctx:f}}});let L=f[8]&&eo(f);gt=new Be({props:{data:f[8],groupBy:"skill_name",rowsPerPage:"25",$$slots:{default:[Do]},$$scope:{ctx:f}}});let J=f[9]&&to(f);jt=new Be({props:{data:f[9],rowsPerPage:"10",$$slots:{default:[Io]},$$scope:{ctx:f}}});let D=f[10]&&so(f);yt=new Be({props:{data:f[10],rowsPerPage:"10",$$slots:{default:[Fo]},$$scope:{ctx:f}}});let I=f[11]&&oo(f);ht=new Be({props:{data:f[11],rowsPerPage:"10",$$slots:{default:[xo]},$$scope:{ctx:f}}});let F=f[12]&&ao(f);return Tt=new Be({props:{data:f[12],rowsPerPage:"10",$$slots:{default:[No]},$$scope:{ctx:f}}}),{c(){it&&it.c(),s=b(),Bt.c(),i=T("meta"),t=T("meta"),lt&&lt.c(),c=ps(),r=b(),n=T("p"),n.textContent=a,d=b(),o=T("div"),o.innerHTML=y,x=b(),H&&H.c(),ae=b(),j(K.$$.fragment),Se=b(),X=T("a"),X.textContent=Rt,nt=b(),N=T("h2"),N.innerHTML=Ae,Re=b(),fe=T("div"),fe.innerHTML=Gt,rt=b(),Y=T("p"),Y.textContent=Ge,Ce=b(),me=T("div"),me.innerHTML=Ct,ct=b(),B=T("h2"),B.innerHTML=He,Oe=b(),O&&O.c(),Ee=b(),ne=T("h3"),ne.innerHTML=Ht,pe=b(),j(Z.$$.fragment),Me=b(),E&&E.c(),qe=b(),re=T("h3"),re.innerHTML=Ot,be=b(),j(ee.$$.fragment),Pe=b(),$e=T("p"),$e.textContent=Et,_t=b(),V=T("h2"),V.innerHTML=Ue,Le=b(),ke=T("p"),ke.innerHTML=Mt,ut=b(),te=T("div"),te.innerHTML=Je,De=b(),ce=T("h3"),ce.innerHTML=qt,ft=b(),M&&M.c(),ie=b(),W=T("h3"),W.innerHTML=mt,pt=b(),j(de.$$.fragment),bt=b(),z=T("h3"),z.innerHTML=Ie,Fe=b(),q&&q.c(),xe=b(),_e=T("h3"),_e.innerHTML=Pt,ve=b(),j(se.$$.fragment),Ne=b(),ue=T("h2"),ue.innerHTML=Ut,$t=b(),P&&P.c(),le=b(),Q=T("h3"),Q.innerHTML=kt,dt=b(),j(we.$$.fragment),vt=b(),Te=T("h2"),Te.innerHTML=S,Lt=b(),Ve=T("h3"),Ve.innerHTML=Ss,Vt=b(),U&&U.c(),Jt=b(),We=T("h3"),We.innerHTML=As,Wt=b(),j(wt.$$.fragment),zt=b(),ze=T("h3"),ze.innerHTML=Rs,Qt=b(),L&&L.c(),Dt=b(),Qe=T("h3"),Qe.innerHTML=Gs,Kt=b(),j(gt.$$.fragment),Xt=b(),Ke=T("h2"),Ke.innerHTML=Cs,Yt=b(),J&&J.c(),It=b(),Xe=T("h3"),Xe.innerHTML=Hs,Zt=b(),j(jt.$$.fragment),es=b(),Ye=T("h2"),Ye.innerHTML=Os,ts=b(),D&&D.c(),Ft=b(),Ze=T("h3"),Ze.innerHTML=Es,ss=b(),j(yt.$$.fragment),os=b(),et=T("h2"),et.innerHTML=Ms,as=b(),I&&I.c(),xt=b(),tt=T("h3"),tt.innerHTML=qs,is=b(),j(ht.$$.fragment),ls=b(),st=T("h2"),st.innerHTML=Ps,ns=b(),F&&F.c(),Nt=b(),ot=T("h3"),ot.innerHTML=Us,rs=b(),j(Tt.$$.fragment),cs=b(),at=T("h2"),at.innerHTML=Ls,_s=b(),St=T("p"),St.innerHTML=Js,us=b(),At=T("p"),At.innerHTML=Ds,this.h()},l(e){it&&it.l(e),s=p(e);const l=co("svelte-2igo1p",document.head);Bt.l(l),i=h(l,"META",{name:!0,content:!0}),t=h(l,"META",{name:!0,content:!0}),lt&&lt.l(l),c=ps(),l.forEach(_),r=p(e),n=h(e,"P",{class:!0,"data-svelte-h":!0}),A(n)!=="svelte-i9vd9j"&&(n.textContent=a),d=p(e),o=h(e,"DIV",{class:!0,"data-svelte-h":!0}),A(o)!=="svelte-i33538"&&(o.innerHTML=y),x=p(e),H&&H.l(e),ae=p(e),g(K.$$.fragment,e),Se=p(e),X=h(e,"A",{href:!0,target:!0,rel:!0,class:!0,"data-svelte-h":!0}),A(X)!=="svelte-1j7w8mf"&&(X.textContent=Rt),nt=p(e),N=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(N)!=="svelte-1dmnoaj"&&(N.innerHTML=Ae),Re=p(e),fe=h(e,"DIV",{class:!0,"data-svelte-h":!0}),A(fe)!=="svelte-t5k8nl"&&(fe.innerHTML=Gt),rt=p(e),Y=h(e,"P",{class:!0,"data-svelte-h":!0}),A(Y)!=="svelte-i2w4g6"&&(Y.textContent=Ge),Ce=p(e),me=h(e,"DIV",{class:!0,"data-svelte-h":!0}),A(me)!=="svelte-1wnnmwl"&&(me.innerHTML=Ct),ct=p(e),B=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(B)!=="svelte-16zqni9"&&(B.innerHTML=He),Oe=p(e),O&&O.l(e),Ee=p(e),ne=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(ne)!=="svelte-zd7swv"&&(ne.innerHTML=Ht),pe=p(e),g(Z.$$.fragment,e),Me=p(e),E&&E.l(e),qe=p(e),re=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(re)!=="svelte-o75b16"&&(re.innerHTML=Ot),be=p(e),g(ee.$$.fragment,e),Pe=p(e),$e=h(e,"P",{class:!0,"data-svelte-h":!0}),A($e)!=="svelte-17qxs9b"&&($e.textContent=Et),_t=p(e),V=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(V)!=="svelte-161blmm"&&(V.innerHTML=Ue),Le=p(e),ke=h(e,"P",{class:!0,"data-svelte-h":!0}),A(ke)!=="svelte-1kr2ren"&&(ke.innerHTML=Mt),ut=p(e),te=h(e,"DIV",{class:!0,"data-svelte-h":!0}),A(te)!=="svelte-llt44u"&&(te.innerHTML=Je),De=p(e),ce=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(ce)!=="svelte-vyj2ku"&&(ce.innerHTML=qt),ft=p(e),M&&M.l(e),ie=p(e),W=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(W)!=="svelte-1u5pvqy"&&(W.innerHTML=mt),pt=p(e),g(de.$$.fragment,e),bt=p(e),z=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(z)!=="svelte-1c63z5h"&&(z.innerHTML=Ie),Fe=p(e),q&&q.l(e),xe=p(e),_e=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(_e)!=="svelte-s6f4ii"&&(_e.innerHTML=Pt),ve=p(e),g(se.$$.fragment,e),Ne=p(e),ue=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(ue)!=="svelte-x7f80k"&&(ue.innerHTML=Ut),$t=p(e),P&&P.l(e),le=p(e),Q=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Q)!=="svelte-5gklql"&&(Q.innerHTML=kt),dt=p(e),g(we.$$.fragment,e),vt=p(e),Te=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(Te)!=="svelte-5ttn72"&&(Te.innerHTML=S),Lt=p(e),Ve=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Ve)!=="svelte-1nrxbp0"&&(Ve.innerHTML=Ss),Vt=p(e),U&&U.l(e),Jt=p(e),We=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(We)!=="svelte-nym5cu"&&(We.innerHTML=As),Wt=p(e),g(wt.$$.fragment,e),zt=p(e),ze=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(ze)!=="svelte-hxcjdt"&&(ze.innerHTML=Rs),Qt=p(e),L&&L.l(e),Dt=p(e),Qe=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Qe)!=="svelte-q2h1x7"&&(Qe.innerHTML=Gs),Kt=p(e),g(gt.$$.fragment,e),Xt=p(e),Ke=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(Ke)!=="svelte-lc41ol"&&(Ke.innerHTML=Cs),Yt=p(e),J&&J.l(e),It=p(e),Xe=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Xe)!=="svelte-smalrx"&&(Xe.innerHTML=Hs),Zt=p(e),g(jt.$$.fragment,e),es=p(e),Ye=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(Ye)!=="svelte-78v6ii"&&(Ye.innerHTML=Os),ts=p(e),D&&D.l(e),Ft=p(e),Ze=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Ze)!=="svelte-mzcs6u"&&(Ze.innerHTML=Es),ss=p(e),g(yt.$$.fragment,e),os=p(e),et=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(et)!=="svelte-25sv0q"&&(et.innerHTML=Ms),as=p(e),I&&I.l(e),xt=p(e),tt=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(tt)!=="svelte-1xfgu95"&&(tt.innerHTML=qs),is=p(e),g(ht.$$.fragment,e),ls=p(e),st=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(st)!=="svelte-dfu8xo"&&(st.innerHTML=Ps),ns=p(e),F&&F.l(e),Nt=p(e),ot=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(ot)!=="svelte-fsjkw8"&&(ot.innerHTML=Us),rs=p(e),g(Tt.$$.fragment,e),cs=p(e),at=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(at)!=="svelte-1ouuc1c"&&(at.innerHTML=Ls),_s=p(e),St=h(e,"P",{class:!0,"data-svelte-h":!0}),A(St)!=="svelte-1x4z3m4"&&(St.innerHTML=Js),us=p(e),At=h(e,"P",{class:!0,"data-svelte-h":!0}),A(At)!=="svelte-1iujzj5"&&(At.innerHTML=Ds),this.h()},h(){$(i,"name","twitter:card"),$(i,"content","summary_large_image"),$(t,"name","twitter:site"),$(t,"content","@evidence_dev"),$(n,"class","markdown"),$(o,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),$(X,"href","https://www.onetonline.org/link/summary/15-1252.00"),$(X,"target","_blank"),$(X,"rel","noopener"),$(X,"class","border border-base-300 rounded-md px-3 py-1 text-sm hover:bg-base-200"),$(N,"class","markdown"),$(N,"id","profile-contents"),$(fe,"class","flex flex-wrap gap-x-4 gap-y-2 text-sm border-y border-gray-200 py-3 mb-6"),$(Y,"class","markdown"),$(me,"class","text-sm my-3"),$(B,"class","markdown"),$(B,"id","overview"),$(ne,"class","markdown"),$(ne,"id","table-1-selected-usajobs-occupation-overview"),$(re,"class","markdown"),$(re,"id","figure-uo-1-posting-volume"),$($e,"class","text-sm text-gray-600 mt-2"),$(V,"class","markdown"),$(V,"id","tasks"),$(ke,"class","markdown"),$(te,"class","border-l-4 border-amber-500 bg-amber-50 px-4 py-3 my-4 text-sm text-gray-700"),$(ce,"class","markdown"),$(ce,"id","most-distinctive-tasks-rca"),$(W,"class","markdown"),$(W,"id","table-2-distinctive-tasks-by-rca-for-the-selected-usajobs-occupation"),$(z,"class","markdown"),$(z,"id","most-frequent-tasks"),$(_e,"class","markdown"),$(_e,"id","table-3-frequent-tasks-for-the-selected-usajobs-occupation"),$(ue,"class","markdown"),$(ue,"id","work-activities"),$(Q,"class","markdown"),$(Q,"id","table-4-work-activities-for-the-selected-usajobs-occupation"),$(Te,"class","markdown"),$(Te,"id","skills"),$(Ve,"class","markdown"),$(Ve,"id","esco-skills"),$(We,"class","markdown"),$(We,"id","table-5-extracted-skills-for-the-selected-usajobs-occupation"),$(ze,"class","markdown"),$(ze,"id","crosswalked-onet-skills-from-work-activities"),$(Qe,"class","markdown"),$(Qe,"id","table-6-crosswalked-onet-skills-for-the-selected-usajobs-occupation"),$(Ke,"class","markdown"),$(Ke,"id","tools"),$(Xe,"class","markdown"),$(Xe,"id","table-7-tools-for-the-selected-usajobs-occupation"),$(Ye,"class","markdown"),$(Ye,"id","technologies"),$(Ze,"class","markdown"),$(Ze,"id","table-8-technology-concepts-for-the-selected-usajobs-occupation"),$(et,"class","markdown"),$(et,"id","education"),$(tt,"class","markdown"),$(tt,"id","table-9-education-concepts-for-the-selected-usajobs-occupation"),$(st,"class","markdown"),$(st,"id","benefits"),$(ot,"class","markdown"),$(ot,"id","table-10-benefit-concepts-for-the-selected-usajobs-occupation"),$(at,"class","markdown"),$(at,"id","data"),$(St,"class","markdown"),$(At,"class","markdown")},m(e,l){it&&it.m(e,l),u(e,s,l),Bt.m(document.head,null),ms(document.head,i),ms(document.head,t),lt&&lt.m(document.head,null),ms(document.head,c),u(e,r,l),u(e,n,l),u(e,d,l),u(e,o,l),u(e,x,l),H&&H.m(e,l),u(e,ae,l),w(K,e,l),u(e,Se,l),u(e,X,l),u(e,nt,l),u(e,N,l),u(e,Re,l),u(e,fe,l),u(e,rt,l),u(e,Y,l),u(e,Ce,l),u(e,me,l),u(e,ct,l),u(e,B,l),u(e,Oe,l),O&&O.m(e,l),u(e,Ee,l),u(e,ne,l),u(e,pe,l),w(Z,e,l),u(e,Me,l),E&&E.m(e,l),u(e,qe,l),u(e,re,l),u(e,be,l),w(ee,e,l),u(e,Pe,l),u(e,$e,l),u(e,_t,l),u(e,V,l),u(e,Le,l),u(e,ke,l),u(e,ut,l),u(e,te,l),u(e,De,l),u(e,ce,l),u(e,ft,l),M&&M.m(e,l),u(e,ie,l),u(e,W,l),u(e,pt,l),w(de,e,l),u(e,bt,l),u(e,z,l),u(e,Fe,l),q&&q.m(e,l),u(e,xe,l),u(e,_e,l),u(e,ve,l),w(se,e,l),u(e,Ne,l),u(e,ue,l),u(e,$t,l),P&&P.m(e,l),u(e,le,l),u(e,Q,l),u(e,dt,l),w(we,e,l),u(e,vt,l),u(e,Te,l),u(e,Lt,l),u(e,Ve,l),u(e,Vt,l),U&&U.m(e,l),u(e,Jt,l),u(e,We,l),u(e,Wt,l),w(wt,e,l),u(e,zt,l),u(e,ze,l),u(e,Qt,l),L&&L.m(e,l),u(e,Dt,l),u(e,Qe,l),u(e,Kt,l),w(gt,e,l),u(e,Xt,l),u(e,Ke,l),u(e,Yt,l),J&&J.m(e,l),u(e,It,l),u(e,Xe,l),u(e,Zt,l),w(jt,e,l),u(e,es,l),u(e,Ye,l),u(e,ts,l),D&&D.m(e,l),u(e,Ft,l),u(e,Ze,l),u(e,ss,l),w(yt,e,l),u(e,os,l),u(e,et,l),u(e,as,l),I&&I.m(e,l),u(e,xt,l),u(e,tt,l),u(e,is,l),w(ht,e,l),u(e,ls,l),u(e,st,l),u(e,ns,l),F&&F.m(e,l),u(e,Nt,l),u(e,ot,l),u(e,rs,l),w(Tt,e,l),u(e,cs,l),u(e,at,l),u(e,_s,l),u(e,St,l),u(e,us,l),u(e,At,l),fs=!0,bs||(Is=no(X,"click",ro(f[64])),bs=!0)},p(e,l){typeof G<"u"&&G.title&&G.hide_title!==!0&&it.p(e,l),Bt.p(e,l),typeof G=="object"&&lt.p(e,l),e[1]?H?(H.p(e,l),l[0]&2&&m(H,1)):(H=Ws(e),H.c(),m(H,1),H.m(ae.parentNode,ae)):H&&(je(),k(H,1,1,()=>{H=null}),ge());const Fs={};l[0]&2&&(Fs.data=e[1]),K.$set(Fs),e[2]?O?(O.p(e,l),l[0]&4&&m(O,1)):(O=zs(e),O.c(),m(O,1),O.m(Ee.parentNode,Ee)):O&&(je(),k(O,1,1,()=>{O=null}),ge());const $s={};l[0]&4&&($s.data=e[2]),l[2]&8388608&&($s.$$scope={dirty:l,ctx:e}),Z.$set($s),e[3]?E?(E.p(e,l),l[0]&8&&m(E,1)):(E=Qs(e),E.c(),m(E,1),E.m(qe.parentNode,qe)):E&&(je(),k(E,1,1,()=>{E=null}),ge());const xs={};l[0]&8&&(xs.data=e[3]),ee.$set(xs),e[4]?M?(M.p(e,l),l[0]&16&&m(M,1)):(M=Ks(e),M.c(),m(M,1),M.m(ie.parentNode,ie)):M&&(je(),k(M,1,1,()=>{M=null}),ge());const ks={};l[0]&16&&(ks.data=e[4]),l[2]&8388608&&(ks.$$scope={dirty:l,ctx:e}),de.$set(ks),e[5]?q?(q.p(e,l),l[0]&32&&m(q,1)):(q=Xs(e),q.c(),m(q,1),q.m(xe.parentNode,xe)):q&&(je(),k(q,1,1,()=>{q=null}),ge());const ds={};l[0]&32&&(ds.data=e[5]),l[2]&8388608&&(ds.$$scope={dirty:l,ctx:e}),se.$set(ds),e[6]?P?(P.p(e,l),l[0]&64&&m(P,1)):(P=Ys(e),P.c(),m(P,1),P.m(le.parentNode,le)):P&&(je(),k(P,1,1,()=>{P=null}),ge());const vs={};l[0]&64&&(vs.data=e[6]),l[2]&8388608&&(vs.$$scope={dirty:l,ctx:e}),we.$set(vs),e[7]?U?(U.p(e,l),l[0]&128&&m(U,1)):(U=Zs(e),U.c(),m(U,1),U.m(Jt.parentNode,Jt)):U&&(je(),k(U,1,1,()=>{U=null}),ge());const ws={};l[0]&128&&(ws.data=e[7]),l[2]&8388608&&(ws.$$scope={dirty:l,ctx:e}),wt.$set(ws),e[8]?L?(L.p(e,l),l[0]&256&&m(L,1)):(L=eo(e),L.c(),m(L,1),L.m(Dt.parentNode,Dt)):L&&(je(),k(L,1,1,()=>{L=null}),ge());const gs={};l[0]&256&&(gs.data=e[8]),l[2]&8388608&&(gs.$$scope={dirty:l,ctx:e}),gt.$set(gs),e[9]?J?(J.p(e,l),l[0]&512&&m(J,1)):(J=to(e),J.c(),m(J,1),J.m(It.parentNode,It)):J&&(je(),k(J,1,1,()=>{J=null}),ge());const js={};l[0]&512&&(js.data=e[9]),l[2]&8388608&&(js.$$scope={dirty:l,ctx:e}),jt.$set(js),e[10]?D?(D.p(e,l),l[0]&1024&&m(D,1)):(D=so(e),D.c(),m(D,1),D.m(Ft.parentNode,Ft)):D&&(je(),k(D,1,1,()=>{D=null}),ge());const ys={};l[0]&1024&&(ys.data=e[10]),l[2]&8388608&&(ys.$$scope={dirty:l,ctx:e}),yt.$set(ys),e[11]?I?(I.p(e,l),l[0]&2048&&m(I,1)):(I=oo(e),I.c(),m(I,1),I.m(xt.parentNode,xt)):I&&(je(),k(I,1,1,()=>{I=null}),ge());const hs={};l[0]&2048&&(hs.data=e[11]),l[2]&8388608&&(hs.$$scope={dirty:l,ctx:e}),ht.$set(hs),e[12]?F?(F.p(e,l),l[0]&4096&&m(F,1)):(F=ao(e),F.c(),m(F,1),F.m(Nt.parentNode,Nt)):F&&(je(),k(F,1,1,()=>{F=null}),ge());const Ts={};l[0]&4096&&(Ts.data=e[12]),l[2]&8388608&&(Ts.$$scope={dirty:l,ctx:e}),Tt.$set(Ts)},i(e){fs||(m(H),m(K.$$.fragment,e),m(O),m(Z.$$.fragment,e),m(E),m(ee.$$.fragment,e),m(M),m(de.$$.fragment,e),m(q),m(se.$$.fragment,e),m(P),m(we.$$.fragment,e),m(U),m(wt.$$.fragment,e),m(L),m(gt.$$.fragment,e),m(J),m(jt.$$.fragment,e),m(D),m(yt.$$.fragment,e),m(I),m(ht.$$.fragment,e),m(F),m(Tt.$$.fragment,e),fs=!0)},o(e){k(H),k(K.$$.fragment,e),k(O),k(Z.$$.fragment,e),k(E),k(ee.$$.fragment,e),k(M),k(de.$$.fragment,e),k(q),k(se.$$.fragment,e),k(P),k(we.$$.fragment,e),k(U),k(wt.$$.fragment,e),k(L),k(gt.$$.fragment,e),k(J),k(jt.$$.fragment,e),k(D),k(yt.$$.fragment,e),k(I),k(ht.$$.fragment,e),k(F),k(Tt.$$.fragment,e),fs=!1},d(e){e&&(_(s),_(r),_(n),_(d),_(o),_(x),_(ae),_(Se),_(X),_(nt),_(N),_(Re),_(fe),_(rt),_(Y),_(Ce),_(me),_(ct),_(B),_(Oe),_(Ee),_(ne),_(pe),_(Me),_(qe),_(re),_(be),_(Pe),_($e),_(_t),_(V),_(Le),_(ke),_(ut),_(te),_(De),_(ce),_(ft),_(ie),_(W),_(pt),_(bt),_(z),_(Fe),_(xe),_(_e),_(ve),_(Ne),_(ue),_($t),_(le),_(Q),_(dt),_(vt),_(Te),_(Lt),_(Ve),_(Vt),_(Jt),_(We),_(Wt),_(zt),_(ze),_(Qt),_(Dt),_(Qe),_(Kt),_(Xt),_(Ke),_(Yt),_(It),_(Xe),_(Zt),_(es),_(Ye),_(ts),_(Ft),_(Ze),_(ss),_(os),_(et),_(as),_(xt),_(tt),_(is),_(ls),_(st),_(ns),_(Nt),_(ot),_(rs),_(cs),_(at),_(_s),_(St),_(us),_(At)),it&&it.d(e),Bt.d(e),_(i),_(t),lt&&lt.d(e),_(c),H&&H.d(e),v(K,e),O&&O.d(e),v(Z,e),E&&E.d(e),v(ee,e),M&&M.d(e),v(de,e),q&&q.d(e),v(se,e),P&&P.d(e),v(we,e),U&&U.d(e),v(wt,e),L&&L.d(e),v(gt,e),J&&J.d(e),v(jt,e),D&&D.d(e),v(yt,e),I&&I.d(e),v(ht,e),F&&F.d(e),v(Tt,e),bs=!1,Is()}}}const G={title:"Occupational Posting Profile"};function Vo(f,s,i){let t,c;Ns(f,So,S=>i(63,t=S)),Ns(f,Vs,S=>i(69,c=S));let{data:r}=s,{data:n={},customFormattingSettings:a,__db:d,inputs:o}=r;_o(Vs,c="26642c68f7425ee6a3f47c16c31e5bf1",c);let y=go(wo(o));uo(y.subscribe(S=>i(0,o=S))),fo(ho,{getCustomFormats:()=>a.customFormats||[]});const x=(S,Lt)=>Ro(d.query,S,{query_name:Lt});jo(x),t.params,mo(()=>!0);let ae={initialData:void 0,initialError:void 0},K=C`select distinct occ8, soc_title
from usajobs.AGGR_OccupationTaskSignatures
order by soc_title`,Se=`select distinct occ8, soc_title
from usajobs.AGGR_OccupationTaskSignatures
order by soc_title`;n.usajobs_occ_options_data&&(n.usajobs_occ_options_data instanceof Error?ae.initialError=n.usajobs_occ_options_data:ae.initialData=n.usajobs_occ_options_data,n.usajobs_occ_options_columns&&(ae.knownColumns=n.usajobs_occ_options_columns));let X,Rt=!1;const nt=ye.createReactive({callback:S=>{i(1,X=S)},execFn:x},{id:"usajobs_occ_options",...ae});nt(Se,{noResolve:K,...ae}),globalThis[Symbol.for("usajobs_occ_options")]={get value(){return X}};let N={initialData:void 0,initialError:void 0},Ae=C`select
  occ8,
  any_value(soc_title) as soc_title,
  max(n_postings) as n_postings,
  count(*) as retained_tasks,
  avg(in_onet) as share_retained_tasks_in_onet
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
group by 1`,Re=`select
  occ8,
  any_value(soc_title) as soc_title,
  max(n_postings) as n_postings,
  count(*) as retained_tasks,
  avg(in_onet) as share_retained_tasks_in_onet
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
group by 1`;n.usajobs_occ_overview_data&&(n.usajobs_occ_overview_data instanceof Error?N.initialError=n.usajobs_occ_overview_data:N.initialData=n.usajobs_occ_overview_data,n.usajobs_occ_overview_columns&&(N.knownColumns=n.usajobs_occ_overview_columns));let fe,Gt=!1;const rt=ye.createReactive({callback:S=>{i(2,fe=S)},execFn:x},{id:"usajobs_occ_overview",...N});rt(Re,{noResolve:Ae,...N}),globalThis[Symbol.for("usajobs_occ_overview")]={get value(){return fe}};let Y={initialData:void 0,initialError:void 0},Ge=C`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsOccupationPostingVolume
where occ8 = '${o.usajobs_occ.value}'
order by month_start`,Ce=`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsOccupationPostingVolume
where occ8 = '${o.usajobs_occ.value}'
order by month_start`;n.usajobs_occ_posting_volume_data&&(n.usajobs_occ_posting_volume_data instanceof Error?Y.initialError=n.usajobs_occ_posting_volume_data:Y.initialData=n.usajobs_occ_posting_volume_data,n.usajobs_occ_posting_volume_columns&&(Y.knownColumns=n.usajobs_occ_posting_volume_columns));let me,Ct=!1;const ct=ye.createReactive({callback:S=>{i(3,me=S)},execFn:x},{id:"usajobs_occ_posting_volume",...Y});ct(Ce,{noResolve:Ge,...Y}),globalThis[Symbol.for("usajobs_occ_posting_volume")]={get value(){return me}};let B={initialData:void 0,initialError:void 0},He=C`select
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  pct_postings,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and occ_rank <= 10
order by occ_rank`,Oe=`select
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  pct_postings,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and occ_rank <= 10
order by occ_rank`;n.usajobs_occ_tasks_rca_data&&(n.usajobs_occ_tasks_rca_data instanceof Error?B.initialError=n.usajobs_occ_tasks_rca_data:B.initialData=n.usajobs_occ_tasks_rca_data,n.usajobs_occ_tasks_rca_columns&&(B.knownColumns=n.usajobs_occ_tasks_rca_columns));let Ee,ne=!1;const Ht=ye.createReactive({callback:S=>{i(4,Ee=S)},execFn:x},{id:"usajobs_occ_tasks_rca",...B});Ht(Oe,{noResolve:He,...B}),globalThis[Symbol.for("usajobs_occ_tasks_rca")]={get value(){return Ee}};let pe={initialData:void 0,initialError:void 0},Z=C`select
  cast(task_id as varchar) as task_id,
  task_text,
  pct_postings,
  rca,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and volume_rank <= 10
order by volume_rank`,Me=`select
  cast(task_id as varchar) as task_id,
  task_text,
  pct_postings,
  rca,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and volume_rank <= 10
order by volume_rank`;n.usajobs_occ_tasks_volume_data&&(n.usajobs_occ_tasks_volume_data instanceof Error?pe.initialError=n.usajobs_occ_tasks_volume_data:pe.initialData=n.usajobs_occ_tasks_volume_data,n.usajobs_occ_tasks_volume_columns&&(pe.knownColumns=n.usajobs_occ_tasks_volume_columns));let qe,re=!1;const Ot=ye.createReactive({callback:S=>{i(5,qe=S)},execFn:x},{id:"usajobs_occ_tasks_volume",...pe});Ot(Me,{noResolve:Z,...pe}),globalThis[Symbol.for("usajobs_occ_tasks_volume")]={get value(){return qe}};let be={initialData:void 0,initialError:void 0},ee=C`select
  wa_rank,
  wa_id,
  wa_name,
  pct_postings
from usajobs.AGGR_USAJobsOccupationWAProfile
where occ8 = '${o.usajobs_occ.value}'
order by wa_rank`,Pe=`select
  wa_rank,
  wa_id,
  wa_name,
  pct_postings
from usajobs.AGGR_USAJobsOccupationWAProfile
where occ8 = '${o.usajobs_occ.value}'
order by wa_rank`;n.usajobs_occ_work_activities_data&&(n.usajobs_occ_work_activities_data instanceof Error?be.initialError=n.usajobs_occ_work_activities_data:be.initialData=n.usajobs_occ_work_activities_data,n.usajobs_occ_work_activities_columns&&(be.knownColumns=n.usajobs_occ_work_activities_columns));let $e,Et=!1;const _t=ye.createReactive({callback:S=>{i(6,$e=S)},execFn:x},{id:"usajobs_occ_work_activities",...be});_t(Pe,{noResolve:ee,...be}),globalThis[Symbol.for("usajobs_occ_work_activities")]={get value(){return $e}};let V={initialData:void 0,initialError:void 0},Ue=C`select
  skill_rank,
  skill_code,
  skill_label,
  pct_postings
from usajobs.AGGR_USAJobsOccupationSkillProfile
where occ8 = '${o.usajobs_occ.value}'
order by skill_rank`,Le=`select
  skill_rank,
  skill_code,
  skill_label,
  pct_postings
from usajobs.AGGR_USAJobsOccupationSkillProfile
where occ8 = '${o.usajobs_occ.value}'
order by skill_rank`;n.usajobs_occ_skills_data&&(n.usajobs_occ_skills_data instanceof Error?V.initialError=n.usajobs_occ_skills_data:V.initialData=n.usajobs_occ_skills_data,n.usajobs_occ_skills_columns&&(V.knownColumns=n.usajobs_occ_skills_columns));let ke,Mt=!1;const ut=ye.createReactive({callback:S=>{i(7,ke=S)},execFn:x},{id:"usajobs_occ_skills",...V});ut(Le,{noResolve:Ue,...V}),globalThis[Symbol.for("usajobs_occ_skills")]={get value(){return ke}};let te={initialData:void 0,initialError:void 0},Je=C`select
  skill_rank,
  skill_id,
  skill_name,
  inferred_skill_mentions,
  postings,
  pct_postings
from usajobs.AGGR_USAJobsOccupationOnetSkillProfile
where occ8 = '${o.usajobs_occ.value}'
union all
select
  null as skill_rank,
  null as skill_id,
  'No crosswalked O*NET skill rows for this 8-digit O*NET-SOC occupation.' as skill_name,
  null as inferred_skill_mentions,
  null as postings,
  null as pct_postings
where not exists (
  select 1
  from usajobs.AGGR_USAJobsOccupationOnetSkillProfile
  where occ8 = '${o.usajobs_occ.value}'
)
order by skill_rank`,De=`select
  skill_rank,
  skill_id,
  skill_name,
  inferred_skill_mentions,
  postings,
  pct_postings
from usajobs.AGGR_USAJobsOccupationOnetSkillProfile
where occ8 = '${o.usajobs_occ.value}'
union all
select
  null as skill_rank,
  null as skill_id,
  'No crosswalked O*NET skill rows for this 8-digit O*NET-SOC occupation.' as skill_name,
  null as inferred_skill_mentions,
  null as postings,
  null as pct_postings
where not exists (
  select 1
  from usajobs.AGGR_USAJobsOccupationOnetSkillProfile
  where occ8 = '${o.usajobs_occ.value}'
)
order by skill_rank`;n.usajobs_occ_onet_skills_data&&(n.usajobs_occ_onet_skills_data instanceof Error?te.initialError=n.usajobs_occ_onet_skills_data:te.initialData=n.usajobs_occ_onet_skills_data,n.usajobs_occ_onet_skills_columns&&(te.knownColumns=n.usajobs_occ_onet_skills_columns));let ce,qt=!1;const ft=ye.createReactive({callback:S=>{i(8,ce=S)},execFn:x},{id:"usajobs_occ_onet_skills",...te});ft(De,{noResolve:Je,...te}),globalThis[Symbol.for("usajobs_occ_onet_skills")]={get value(){return ce}};let ie={initialData:void 0,initialError:void 0},W=C`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'tools'
order by concept_rank`,mt=`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'tools'
order by concept_rank`;n.usajobs_occ_tools_data&&(n.usajobs_occ_tools_data instanceof Error?ie.initialError=n.usajobs_occ_tools_data:ie.initialData=n.usajobs_occ_tools_data,n.usajobs_occ_tools_columns&&(ie.knownColumns=n.usajobs_occ_tools_columns));let pt,de=!1;const bt=ye.createReactive({callback:S=>{i(9,pt=S)},execFn:x},{id:"usajobs_occ_tools",...ie});bt(mt,{noResolve:W,...ie}),globalThis[Symbol.for("usajobs_occ_tools")]={get value(){return pt}};let z={initialData:void 0,initialError:void 0},Ie=C`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'technology'
order by concept_rank`,Fe=`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'technology'
order by concept_rank`;n.usajobs_occ_technology_data&&(n.usajobs_occ_technology_data instanceof Error?z.initialError=n.usajobs_occ_technology_data:z.initialData=n.usajobs_occ_technology_data,n.usajobs_occ_technology_columns&&(z.knownColumns=n.usajobs_occ_technology_columns));let xe,_e=!1;const Pt=ye.createReactive({callback:S=>{i(10,xe=S)},execFn:x},{id:"usajobs_occ_technology",...z});Pt(Fe,{noResolve:Ie,...z}),globalThis[Symbol.for("usajobs_occ_technology")]={get value(){return xe}};let ve={initialData:void 0,initialError:void 0},se=C`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'education'
order by concept_rank`,Ne=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'education'
order by concept_rank`;n.usajobs_occ_education_data&&(n.usajobs_occ_education_data instanceof Error?ve.initialError=n.usajobs_occ_education_data:ve.initialData=n.usajobs_occ_education_data,n.usajobs_occ_education_columns&&(ve.knownColumns=n.usajobs_occ_education_columns));let ue,Ut=!1;const $t=ye.createReactive({callback:S=>{i(11,ue=S)},execFn:x},{id:"usajobs_occ_education",...ve});$t(Ne,{noResolve:se,...ve}),globalThis[Symbol.for("usajobs_occ_education")]={get value(){return ue}};let le={initialData:void 0,initialError:void 0},Q=C`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'benefits'
order by concept_rank`,kt=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'benefits'
order by concept_rank`;n.usajobs_occ_benefits_data&&(n.usajobs_occ_benefits_data instanceof Error?le.initialError=n.usajobs_occ_benefits_data:le.initialData=n.usajobs_occ_benefits_data,n.usajobs_occ_benefits_columns&&(le.knownColumns=n.usajobs_occ_benefits_columns));let dt,we=!1;const vt=ye.createReactive({callback:S=>{i(12,dt=S)},execFn:x},{id:"usajobs_occ_benefits",...le});vt(kt,{noResolve:Q,...le}),globalThis[Symbol.for("usajobs_occ_benefits")]={get value(){return dt}};const Te=()=>window.open(`https://www.onetonline.org/link/summary/${o.usajobs_occ.value}`,"_blank","noopener");return f.$$set=S=>{"data"in S&&i(13,r=S.data)},f.$$.update=()=>{f.$$.dirty[0]&8192&&i(14,{data:n={},customFormattingSettings:a,__db:d}=r,n),f.$$.dirty[0]&16384&&yo.set(Object.keys(n).length>0),f.$$.dirty[2]&2&&t.params,f.$$.dirty[0]&491520&&(K||!Rt?K||(nt(Se,{noResolve:K,...ae}),i(18,Rt=!0)):nt(Se,{noResolve:K})),f.$$.dirty[0]&1&&i(20,Ae=C`select
  occ8,
  any_value(soc_title) as soc_title,
  max(n_postings) as n_postings,
  count(*) as retained_tasks,
  avg(in_onet) as share_retained_tasks_in_onet
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
group by 1`),f.$$.dirty[0]&1&&i(21,Re=`select
  occ8,
  any_value(soc_title) as soc_title,
  max(n_postings) as n_postings,
  count(*) as retained_tasks,
  avg(in_onet) as share_retained_tasks_in_onet
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
group by 1`),f.$$.dirty[0]&7864320&&(Ae||!Gt?Ae||(rt(Re,{noResolve:Ae,...N}),i(22,Gt=!0)):rt(Re,{noResolve:Ae})),f.$$.dirty[0]&1&&i(24,Ge=C`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsOccupationPostingVolume
where occ8 = '${o.usajobs_occ.value}'
order by month_start`),f.$$.dirty[0]&1&&i(25,Ce=`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsOccupationPostingVolume
where occ8 = '${o.usajobs_occ.value}'
order by month_start`),f.$$.dirty[0]&125829120&&(Ge||!Ct?Ge||(ct(Ce,{noResolve:Ge,...Y}),i(26,Ct=!0)):ct(Ce,{noResolve:Ge})),f.$$.dirty[0]&1&&i(28,He=C`select
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  pct_postings,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and occ_rank <= 10
order by occ_rank`),f.$$.dirty[0]&1&&i(29,Oe=`select
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  pct_postings,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and occ_rank <= 10
order by occ_rank`),f.$$.dirty[0]&2013265920&&(He||!ne?He||(Ht(Oe,{noResolve:He,...B}),i(30,ne=!0)):Ht(Oe,{noResolve:He})),f.$$.dirty[0]&1&&i(32,Z=C`select
  cast(task_id as varchar) as task_id,
  task_text,
  pct_postings,
  rca,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and volume_rank <= 10
order by volume_rank`),f.$$.dirty[0]&1&&i(33,Me=`select
  cast(task_id as varchar) as task_id,
  task_text,
  pct_postings,
  rca,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and volume_rank <= 10
order by volume_rank`),f.$$.dirty[1]&15&&(Z||!re?Z||(Ot(Me,{noResolve:Z,...pe}),i(34,re=!0)):Ot(Me,{noResolve:Z})),f.$$.dirty[0]&1&&i(36,ee=C`select
  wa_rank,
  wa_id,
  wa_name,
  pct_postings
from usajobs.AGGR_USAJobsOccupationWAProfile
where occ8 = '${o.usajobs_occ.value}'
order by wa_rank`),f.$$.dirty[0]&1&&i(37,Pe=`select
  wa_rank,
  wa_id,
  wa_name,
  pct_postings
from usajobs.AGGR_USAJobsOccupationWAProfile
where occ8 = '${o.usajobs_occ.value}'
order by wa_rank`),f.$$.dirty[1]&240&&(ee||!Et?ee||(_t(Pe,{noResolve:ee,...be}),i(38,Et=!0)):_t(Pe,{noResolve:ee})),f.$$.dirty[0]&1&&i(40,Ue=C`select
  skill_rank,
  skill_code,
  skill_label,
  pct_postings
from usajobs.AGGR_USAJobsOccupationSkillProfile
where occ8 = '${o.usajobs_occ.value}'
order by skill_rank`),f.$$.dirty[0]&1&&i(41,Le=`select
  skill_rank,
  skill_code,
  skill_label,
  pct_postings
from usajobs.AGGR_USAJobsOccupationSkillProfile
where occ8 = '${o.usajobs_occ.value}'
order by skill_rank`),f.$$.dirty[1]&3840&&(Ue||!Mt?Ue||(ut(Le,{noResolve:Ue,...V}),i(42,Mt=!0)):ut(Le,{noResolve:Ue})),f.$$.dirty[0]&1&&i(44,Je=C`select
  skill_rank,
  skill_id,
  skill_name,
  inferred_skill_mentions,
  postings,
  pct_postings
from usajobs.AGGR_USAJobsOccupationOnetSkillProfile
where occ8 = '${o.usajobs_occ.value}'
union all
select
  null as skill_rank,
  null as skill_id,
  'No crosswalked O*NET skill rows for this 8-digit O*NET-SOC occupation.' as skill_name,
  null as inferred_skill_mentions,
  null as postings,
  null as pct_postings
where not exists (
  select 1
  from usajobs.AGGR_USAJobsOccupationOnetSkillProfile
  where occ8 = '${o.usajobs_occ.value}'
)
order by skill_rank`),f.$$.dirty[0]&1&&i(45,De=`select
  skill_rank,
  skill_id,
  skill_name,
  inferred_skill_mentions,
  postings,
  pct_postings
from usajobs.AGGR_USAJobsOccupationOnetSkillProfile
where occ8 = '${o.usajobs_occ.value}'
union all
select
  null as skill_rank,
  null as skill_id,
  'No crosswalked O*NET skill rows for this 8-digit O*NET-SOC occupation.' as skill_name,
  null as inferred_skill_mentions,
  null as postings,
  null as pct_postings
where not exists (
  select 1
  from usajobs.AGGR_USAJobsOccupationOnetSkillProfile
  where occ8 = '${o.usajobs_occ.value}'
)
order by skill_rank`),f.$$.dirty[1]&61440&&(Je||!qt?Je||(ft(De,{noResolve:Je,...te}),i(46,qt=!0)):ft(De,{noResolve:Je})),f.$$.dirty[0]&1&&i(48,W=C`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'tools'
order by concept_rank`),f.$$.dirty[0]&1&&i(49,mt=`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'tools'
order by concept_rank`),f.$$.dirty[1]&983040&&(W||!de?W||(bt(mt,{noResolve:W,...ie}),i(50,de=!0)):bt(mt,{noResolve:W})),f.$$.dirty[0]&1&&i(52,Ie=C`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'technology'
order by concept_rank`),f.$$.dirty[0]&1&&i(53,Fe=`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'technology'
order by concept_rank`),f.$$.dirty[1]&15728640&&(Ie||!_e?Ie||(Pt(Fe,{noResolve:Ie,...z}),i(54,_e=!0)):Pt(Fe,{noResolve:Ie})),f.$$.dirty[0]&1&&i(56,se=C`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'education'
order by concept_rank`),f.$$.dirty[0]&1&&i(57,Ne=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'education'
order by concept_rank`),f.$$.dirty[1]&251658240&&(se||!Ut?se||($t(Ne,{noResolve:se,...ve}),i(58,Ut=!0)):$t(Ne,{noResolve:se})),f.$$.dirty[0]&1&&i(60,Q=C`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'benefits'
order by concept_rank`),f.$$.dirty[0]&1&&i(61,kt=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'benefits'
order by concept_rank`),f.$$.dirty[1]&1879048192|f.$$.dirty[2]&1&&(Q||!we?Q||(vt(kt,{noResolve:Q,...le}),i(62,we=!0)):vt(kt,{noResolve:Q}))},i(16,K=C`select distinct occ8, soc_title
from usajobs.AGGR_OccupationTaskSignatures
order by soc_title`),i(17,Se=`select distinct occ8, soc_title
from usajobs.AGGR_OccupationTaskSignatures
order by soc_title`),[o,X,fe,me,Ee,qe,$e,ke,ce,pt,xe,ue,dt,r,n,ae,K,Se,Rt,N,Ae,Re,Gt,Y,Ge,Ce,Ct,B,He,Oe,ne,pe,Z,Me,re,be,ee,Pe,Et,V,Ue,Le,Mt,te,Je,De,qt,ie,W,mt,de,z,Ie,Fe,_e,ve,se,Ne,Ut,le,Q,kt,we,t,Te]}class ia extends ko{constructor(s){super(),vo(this,s,Vo,Bo,lo,{data:13},null,[-1,-1,-1])}}export{ia as component};
