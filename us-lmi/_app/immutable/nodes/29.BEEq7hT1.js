import{s as uo,d as _,b as $,i as u,a as zt,c as p,h as fo,e as h,f as ks,g as A,j as no,t as ro,k as b,l as T,u as co,m as Vs,n as mo,o as po,p as bo,q as $o,r as X}from"../chunks/scheduler.TmfZfN_X.js";import{S as ko,i as vo,d as v,t as k,a as m,c as Ge,m as w,b as g,e as j,g as He}from"../chunks/index.CKLTamEB.js";import{D as Ie,C as R}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.DXIy1bRY.js";import{w as wo}from"../chunks/entry.DC1X7KL2.js";import{e as go,s as jo,Q as Ce,p as yo,a as Ws,r as zs,C as ho}from"../chunks/inferColumnTypes.DuCeEEzn.js";import{h as H}from"../chunks/setTrackProxy.Cyfckp0w.js";import{D as To}from"../chunks/Dropdown.CKcVNhWW.js";import{p as So}from"../chunks/stores.CI7A4iaM.js";import{Q as Oe}from"../chunks/QueryViewer.HFfiaCkJ.js";import{L as Ao}from"../chunks/LineChart.D16PzuJ5.js";import{p as Ro}from"../chunks/profile.BW8tN6E9.js";function Go(f){let s,i=G.title+"",t;return{c(){s=T("h1"),t=co(i),this.h()},l(c){s=h(c,"H1",{class:!0});var r=no(s);t=ro(r,i),r.forEach(_),this.h()},h(){$(s,"class","title")},m(c,r){u(c,s,r),zt(s,t)},p:X,d(c){c&&_(s)}}}function Ho(f){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:X,p:X,d:X}}function Co(f){let s,i,t,c,r;return document.title=s=G.title,{c(){i=b(),t=T("meta"),c=b(),r=T("meta"),this.h()},l(n){i=p(n),t=h(n,"META",{property:!0,content:!0}),c=p(n),r=h(n,"META",{name:!0,content:!0}),this.h()},h(){var n,a;$(t,"property","og:title"),$(t,"content",((n=G.og)==null?void 0:n.title)??G.title),$(r,"name","twitter:title"),$(r,"content",((a=G.og)==null?void 0:a.title)??G.title)},m(n,a){u(n,i,a),u(n,t,a),u(n,c,a),u(n,r,a)},p(n,a){a&0&&s!==(s=G.title)&&(document.title=s)},d(n){n&&(_(i),_(t),_(c),_(r))}}}function Oo(f){var r,n;let s,i,t=(G.description||((r=G.og)==null?void 0:r.description))&&Eo(),c=((n=G.og)==null?void 0:n.image)&&Mo();return{c(){t&&t.c(),s=b(),c&&c.c(),i=ks()},l(a){t&&t.l(a),s=p(a),c&&c.l(a),i=ks()},m(a,d){t&&t.m(a,d),u(a,s,d),c&&c.m(a,d),u(a,i,d)},p(a,d){var o,y;(G.description||(o=G.og)!=null&&o.description)&&t.p(a,d),(y=G.og)!=null&&y.image&&c.p(a,d)},d(a){a&&(_(s),_(i)),t&&t.d(a),c&&c.d(a)}}}function Eo(f){let s,i,t,c,r;return{c(){s=T("meta"),i=b(),t=T("meta"),c=b(),r=T("meta"),this.h()},l(n){s=h(n,"META",{name:!0,content:!0}),i=p(n),t=h(n,"META",{property:!0,content:!0}),c=p(n),r=h(n,"META",{name:!0,content:!0}),this.h()},h(){var n,a,d;$(s,"name","description"),$(s,"content",G.description??((n=G.og)==null?void 0:n.description)),$(t,"property","og:description"),$(t,"content",((a=G.og)==null?void 0:a.description)??G.description),$(r,"name","twitter:description"),$(r,"content",((d=G.og)==null?void 0:d.description)??G.description)},m(n,a){u(n,s,a),u(n,i,a),u(n,t,a),u(n,c,a),u(n,r,a)},p:X,d(n){n&&(_(s),_(i),_(t),_(c),_(r))}}}function Mo(f){let s,i,t;return{c(){s=T("meta"),i=b(),t=T("meta"),this.h()},l(c){s=h(c,"META",{property:!0,content:!0}),i=p(c),t=h(c,"META",{name:!0,content:!0}),this.h()},h(){var c,r;$(s,"property","og:image"),$(s,"content",Ws((c=G.og)==null?void 0:c.image)),$(t,"name","twitter:image"),$(t,"content",Ws((r=G.og)==null?void 0:r.image))},m(c,r){u(c,s,r),u(c,i,r),u(c,t,r)},p:X,d(c){c&&(_(s),_(i),_(t))}}}function Qs(f){let s,i;return s=new Oe({props:{queryID:"usajobs_occ_options",queryResult:f[1]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&2&&(r.queryResult=t[1]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Ks(f){let s,i;return s=new Oe({props:{queryID:"usajobs_occ_overview",queryResult:f[2]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&4&&(r.queryResult=t[2]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function qo(f){let s,i,t,c,r,n,a,d;return s=new R({props:{id:"soc_title",title:"Occupation"}}),t=new R({props:{id:"n_postings",title:"Postings",fmt:"#,##0"}}),r=new R({props:{id:"retained_tasks",title:"Tasks",fmt:"#,##0"}}),a=new R({props:{id:"share_retained_tasks_in_onet",title:"In O*NET",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment),n=b(),j(a.$$.fragment)},l(o){g(s.$$.fragment,o),i=p(o),g(t.$$.fragment,o),c=p(o),g(r.$$.fragment,o),n=p(o),g(a.$$.fragment,o)},m(o,y){w(s,o,y),u(o,i,y),w(t,o,y),u(o,c,y),w(r,o,y),u(o,n,y),w(a,o,y),d=!0},p:X,i(o){d||(m(s.$$.fragment,o),m(t.$$.fragment,o),m(r.$$.fragment,o),m(a.$$.fragment,o),d=!0)},o(o){k(s.$$.fragment,o),k(t.$$.fragment,o),k(r.$$.fragment,o),k(a.$$.fragment,o),d=!1},d(o){o&&(_(i),_(c),_(n)),v(s,o),v(t,o),v(r,o),v(a,o)}}}function Xs(f){let s,i;return s=new Oe({props:{queryID:"usajobs_occ_posting_volume",queryResult:f[3]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&8&&(r.queryResult=t[3]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Ys(f){let s,i;return s=new Oe({props:{queryID:"usajobs_occ_tasks_rca",queryResult:f[4]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&16&&(r.queryResult=t[4]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Po(f){let s,i,t,c,r,n,a,d;return s=new R({props:{id:"task_text",title:"Task",wrap:"true"}}),t=new R({props:{id:"rca",title:"RCA",fmt:"0.00"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),a=new R({props:{id:"in_onet",title:"In O*NET",fmt:"0"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment),n=b(),j(a.$$.fragment)},l(o){g(s.$$.fragment,o),i=p(o),g(t.$$.fragment,o),c=p(o),g(r.$$.fragment,o),n=p(o),g(a.$$.fragment,o)},m(o,y){w(s,o,y),u(o,i,y),w(t,o,y),u(o,c,y),w(r,o,y),u(o,n,y),w(a,o,y),d=!0},p:X,i(o){d||(m(s.$$.fragment,o),m(t.$$.fragment,o),m(r.$$.fragment,o),m(a.$$.fragment,o),d=!0)},o(o){k(s.$$.fragment,o),k(t.$$.fragment,o),k(r.$$.fragment,o),k(a.$$.fragment,o),d=!1},d(o){o&&(_(i),_(c),_(n)),v(s,o),v(t,o),v(r,o),v(a,o)}}}function Zs(f){let s,i;return s=new Oe({props:{queryID:"usajobs_occ_tasks_volume",queryResult:f[5]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&32&&(r.queryResult=t[5]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Uo(f){let s,i,t,c,r,n,a,d;return s=new R({props:{id:"task_text",title:"Task",wrap:"true"}}),t=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),r=new R({props:{id:"rca",title:"RCA",fmt:"0.00"}}),a=new R({props:{id:"in_onet",title:"In O*NET",fmt:"0"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment),n=b(),j(a.$$.fragment)},l(o){g(s.$$.fragment,o),i=p(o),g(t.$$.fragment,o),c=p(o),g(r.$$.fragment,o),n=p(o),g(a.$$.fragment,o)},m(o,y){w(s,o,y),u(o,i,y),w(t,o,y),u(o,c,y),w(r,o,y),u(o,n,y),w(a,o,y),d=!0},p:X,i(o){d||(m(s.$$.fragment,o),m(t.$$.fragment,o),m(r.$$.fragment,o),m(a.$$.fragment,o),d=!0)},o(o){k(s.$$.fragment,o),k(t.$$.fragment,o),k(r.$$.fragment,o),k(a.$$.fragment,o),d=!1},d(o){o&&(_(i),_(c),_(n)),v(s,o),v(t,o),v(r,o),v(a,o)}}}function eo(f){let s,i;return s=new Oe({props:{queryID:"usajobs_occ_work_activities",queryResult:f[6]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&64&&(r.queryResult=t[6]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Lo(f){let s,i,t,c,r,n;return s=new R({props:{id:"wa_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"wa_name",title:"Name",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment)},l(a){g(s.$$.fragment,a),i=p(a),g(t.$$.fragment,a),c=p(a),g(r.$$.fragment,a)},m(a,d){w(s,a,d),u(a,i,d),w(t,a,d),u(a,c,d),w(r,a,d),n=!0},p:X,i(a){n||(m(s.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),n=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),k(r.$$.fragment,a),n=!1},d(a){a&&(_(i),_(c)),v(s,a),v(t,a),v(r,a)}}}function to(f){let s,i;return s=new Oe({props:{queryID:"usajobs_occ_skills",queryResult:f[7]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&128&&(r.queryResult=t[7]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Jo(f){let s,i,t,c,r,n;return s=new R({props:{id:"skill_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"skill_label",title:"Skill",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment)},l(a){g(s.$$.fragment,a),i=p(a),g(t.$$.fragment,a),c=p(a),g(r.$$.fragment,a)},m(a,d){w(s,a,d),u(a,i,d),w(t,a,d),u(a,c,d),w(r,a,d),n=!0},p:X,i(a){n||(m(s.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),n=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),k(r.$$.fragment,a),n=!1},d(a){a&&(_(i),_(c)),v(s,a),v(t,a),v(r,a)}}}function so(f){let s,i;return s=new Oe({props:{queryID:"usajobs_occ_onet_skills",queryResult:f[8]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&256&&(r.queryResult=t[8]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Do(f){let s,i,t,c,r,n;return s=new R({props:{id:"skill_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"inferred_skill_mentions",title:"Mentions",fmt:"#,##0"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment)},l(a){g(s.$$.fragment,a),i=p(a),g(t.$$.fragment,a),c=p(a),g(r.$$.fragment,a)},m(a,d){w(s,a,d),u(a,i,d),w(t,a,d),u(a,c,d),w(r,a,d),n=!0},p:X,i(a){n||(m(s.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),n=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),k(r.$$.fragment,a),n=!1},d(a){a&&(_(i),_(c)),v(s,a),v(t,a),v(r,a)}}}function oo(f){let s,i;return s=new Oe({props:{queryID:"usajobs_occ_tools",queryResult:f[9]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&512&&(r.queryResult=t[9]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Io(f){let s,i,t,c,r,n,a,d;return s=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"tool",title:"Tool",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),a=new R({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment),n=b(),j(a.$$.fragment)},l(o){g(s.$$.fragment,o),i=p(o),g(t.$$.fragment,o),c=p(o),g(r.$$.fragment,o),n=p(o),g(a.$$.fragment,o)},m(o,y){w(s,o,y),u(o,i,y),w(t,o,y),u(o,c,y),w(r,o,y),u(o,n,y),w(a,o,y),d=!0},p:X,i(o){d||(m(s.$$.fragment,o),m(t.$$.fragment,o),m(r.$$.fragment,o),m(a.$$.fragment,o),d=!0)},o(o){k(s.$$.fragment,o),k(t.$$.fragment,o),k(r.$$.fragment,o),k(a.$$.fragment,o),d=!1},d(o){o&&(_(i),_(c),_(n)),v(s,o),v(t,o),v(r,o),v(a,o)}}}function ao(f){let s,i;return s=new Oe({props:{queryID:"usajobs_occ_technology",queryResult:f[10]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&1024&&(r.queryResult=t[10]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Fo(f){let s,i,t,c,r,n,a,d;return s=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"technology",title:"Technology",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),a=new R({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment),n=b(),j(a.$$.fragment)},l(o){g(s.$$.fragment,o),i=p(o),g(t.$$.fragment,o),c=p(o),g(r.$$.fragment,o),n=p(o),g(a.$$.fragment,o)},m(o,y){w(s,o,y),u(o,i,y),w(t,o,y),u(o,c,y),w(r,o,y),u(o,n,y),w(a,o,y),d=!0},p:X,i(o){d||(m(s.$$.fragment,o),m(t.$$.fragment,o),m(r.$$.fragment,o),m(a.$$.fragment,o),d=!0)},o(o){k(s.$$.fragment,o),k(t.$$.fragment,o),k(r.$$.fragment,o),k(a.$$.fragment,o),d=!1},d(o){o&&(_(i),_(c),_(n)),v(s,o),v(t,o),v(r,o),v(a,o)}}}function io(f){let s,i;return s=new Oe({props:{queryID:"usajobs_occ_education",queryResult:f[11]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&2048&&(r.queryResult=t[11]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function No(f){let s,i,t,c,r,n;return s=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"value",title:"Education",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment)},l(a){g(s.$$.fragment,a),i=p(a),g(t.$$.fragment,a),c=p(a),g(r.$$.fragment,a)},m(a,d){w(s,a,d),u(a,i,d),w(t,a,d),u(a,c,d),w(r,a,d),n=!0},p:X,i(a){n||(m(s.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),n=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),k(r.$$.fragment,a),n=!1},d(a){a&&(_(i),_(c)),v(s,a),v(t,a),v(r,a)}}}function lo(f){let s,i;return s=new Oe({props:{queryID:"usajobs_occ_benefits",queryResult:f[12]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&4096&&(r.queryResult=t[12]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){k(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function xo(f){let s,i,t,c,r,n;return s=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"value",title:"Benefit",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment)},l(a){g(s.$$.fragment,a),i=p(a),g(t.$$.fragment,a),c=p(a),g(r.$$.fragment,a)},m(a,d){w(s,a,d),u(a,i,d),w(t,a,d),u(a,c,d),w(r,a,d),n=!0},p:X,i(a){n||(m(s.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),n=!0)},o(a){k(s.$$.fragment,a),k(t.$$.fragment,a),k(r.$$.fragment,a),n=!1},d(a){a&&(_(i),_(c)),v(s,a),v(t,a),v(r,a)}}}function Bo(f){let s,i,t,c,r,n,a="Select one 8-digit O*NET-SOC occupation. Tables use USAJOBS task, skill, Work Activity, and ConceptSearch aggregates.",d,o,y="<strong>How to read this page.</strong> This is a federal posting profile, not a national occupation profile. RCA highlights distinctive rows within USAJOBS; frequency columns show scale. ConceptSearch rows are descriptive matches, while task rows use the occupation-task agreement procedure.",N,te,z,Me,Y,Ht,ot,fe,x,at='<a href="#profile-contents">Profile Contents</a>',it,me,Ct='<a href="#overview" class="hover:underline">Overview</a> <a href="#tasks" class="hover:underline">Tasks</a> <a href="#work-activities" class="hover:underline">Work Activities</a> <a href="#skills" class="hover:underline">Skills</a> <a href="#tools" class="hover:underline">Tools</a> <a href="#technologies" class="hover:underline">Technologies</a> <a href="#education" class="hover:underline">Education</a> <a href="#benefits" class="hover:underline">Benefits</a> <a href="#data" class="hover:underline">Data</a>',pe,Q,lt="This profile is the USAJOBS occupation posting profile for the selected 8-digit O*NET-SOC occupation. Task tables use profiles after review exclusions; RCA highlights tasks that are distinctive for the occupation, while the frequent-task table shows the tasks most prevalent in postings. Tools, technologies, education, and benefits are supporting concept features, not task agreement evidence.",nt,be,Ot="<strong>Shared terms.</strong> % posts = share of selected occupation postings with the row. RCA = row share in the selected occupation / row share in USAJOBS overall. In O*NET = 1 when O*NET lists the selected occupation-task pair.",$e,B,rt='<a href="#overview">Overview</a>',ct,qe,ne,Pe='<a href="#table-1-selected-usajobs-occupation-overview">Table 1. Selected USAJOBS occupation overview</a>',ke,se,_t,Ue,re,Le='<a href="#figure-uo-1-posting-volume">Figure UO-1. Posting volume</a>',de,oe,ut,ve,Et="Monthly posting counts show how much evidence supports the selected occupation’s profile.",we,V,ft='<a href="#tasks">Tasks</a>',mt,ge,Mt='RCA is revealed comparative advantage; see <a href="/us-lmi/methodology#revealed-comparative-advantage-rca" class="markdown">methods</a>.',je,K,pt="<strong>Generic tasks removed.</strong> These task tables omit rows labeled <code>general</code> in <code>combined_task_allocation_task_categories.csv</code>, so the profile focuses on more occupation-specific task signals.",bt,ce,qt='<a href="#most-distinctive-tasks-rca">Most Distinctive Tasks (RCA)</a>',ye,ae,Z,Pt='<a href="#table-2-distinctive-tasks-by-rca-for-the-selected-usajobs-occupation">Table 2. Distinctive tasks by RCA for the selected USAJOBS occupation</a>',$t,he,Te,W,kt='<a href="#most-frequent-tasks">Most Frequent Tasks</a>',dt,Je,_e,De='<a href="#table-3-frequent-tasks-for-the-selected-usajobs-occupation">Table 3. Frequent tasks for the selected USAJOBS occupation</a>',Se,ie,vt,ue,Ut='<a href="#work-activities">Work Activities</a>',Ae,le,ee,Lt='<a href="#table-4-work-activities-for-the-selected-usajobs-occupation">Table 4. Work Activities for the selected USAJOBS occupation</a>',wt,Re,S,Ee,Rs='<a href="#skills">Skills</a>',Qt,Fe,Gs='<a href="#esco-skills">ESCO Skills</a>',Kt,Jt,Ne,Hs='<a href="#table-5-extracted-skills-for-the-selected-usajobs-occupation">Table 5. Extracted skills for the selected USAJOBS occupation</a>',Xt,gt,Yt,xe,Cs='<a href="#crosswalked-onet-skills-from-work-activities">Crosswalked O*NET Skills (from Work Activities)</a>',Zt,Dt,Be,Os='<a href="#table-6-crosswalked-onet-skills-for-the-selected-usajobs-occupation">Table 6. Crosswalked O*NET skills for the selected USAJOBS occupation</a>',es,jt,ts,Ve,Es='<a href="#tools">Tools</a>',ss,It,We,Ms='<a href="#table-7-tools-for-the-selected-usajobs-occupation">Table 7. Tools for the selected USAJOBS occupation</a>',os,yt,as,ze,qs='<a href="#technologies">Technologies</a>',is,Ft,Qe,Ps='<a href="#table-8-technology-concepts-for-the-selected-usajobs-occupation">Table 8. Technology concepts for the selected USAJOBS occupation</a>',ls,ht,ns,Ke,Us='<a href="#education">Education</a>',rs,Nt,Xe,Ls='<a href="#table-9-education-concepts-for-the-selected-usajobs-occupation">Table 9. Education concepts for the selected USAJOBS occupation</a>',cs,Tt,_s,Ye,Js='<a href="#benefits">Benefits</a>',us,xt,Ze,Ds='<a href="#table-10-benefit-concepts-for-the-selected-usajobs-occupation">Table 10. Benefit concepts for the selected USAJOBS occupation</a>',fs,St,ms,et,Is='<a href="#data">Data</a>',ps,At,Fs='Unreviewed links are retained unless blocklisted; see <a href="/us-lmi/methodology#applying-review-exclusions-to-profiles" class="markdown">how review exclusions are applied</a>.',bs,Rt,Ns='Sources used here: <code class="markdown">AGGR_OccupationTaskSignatures</code>, <code class="markdown">AGGR_USAJobsOccupationWAProfile</code>, <code class="markdown">AGGR_USAJobsOccupationSkillProfile</code>, <code class="markdown">AGGR_USAJobsOccupationOnetSkillProfile</code>, <code class="markdown">AGGR_OnetOccupationSkills</code>, and <code class="markdown">AGGR_USAJobsEntityConceptProfile</code>. The task profile and crosswalked O*NET skill sources read <code class="markdown">JaatTasks_Validated</code>; crosswalked O*NET skills use the O*NET 27.2 Skills-to-Work-Activities crosswalk.',$s,Gt,xs='Evidence path: RCA is defined in <a href="/us-lmi/methodology#revealed-comparative-advantage-rca" class="markdown">Methods</a>. USAJOBS source and agreement artifacts are listed in <a href="/us-lmi/methodology/audit-trail" class="markdown">Agreement And Audit Trail</a>.',Bt,tt=typeof G<"u"&&G.title&&G.hide_title!==!0&&Go();function _o(e,l){return typeof G<"u"&&G.title?Co:Ho}let Vt=_o()(f),st=typeof G=="object"&&Oo(),C=f[1]&&Qs(f);z=new To({props:{data:f[1],name:"usajobs_occ",value:"occ8",label:"soc_title",defaultValue:"15-1252.00",title:"Occupation"}});let O=f[2]&&Ks(f);se=new Ie({props:{data:f[2],rows:"1",$$slots:{default:[qo]},$$scope:{ctx:f}}});let E=f[3]&&Xs(f);oe=new Ao({props:{data:f[3],x:"month_start",y:"n_postings",yAxisTitle:"Postings",title:"Posting volume"}});let M=f[4]&&Ys(f);he=new Ie({props:{data:f[4],rowsPerPage:"10",$$slots:{default:[Po]},$$scope:{ctx:f}}});let q=f[5]&&Zs(f);ie=new Ie({props:{data:f[5],rowsPerPage:"10",$$slots:{default:[Uo]},$$scope:{ctx:f}}});let P=f[6]&&eo(f);Re=new Ie({props:{data:f[6],rowsPerPage:"25",$$slots:{default:[Lo]},$$scope:{ctx:f}}});let U=f[7]&&to(f);gt=new Ie({props:{data:f[7],rowsPerPage:"25",$$slots:{default:[Jo]},$$scope:{ctx:f}}});let L=f[8]&&so(f);jt=new Ie({props:{data:f[8],groupBy:"skill_name",rowsPerPage:"25",$$slots:{default:[Do]},$$scope:{ctx:f}}});let J=f[9]&&oo(f);yt=new Ie({props:{data:f[9],rowsPerPage:"10",$$slots:{default:[Io]},$$scope:{ctx:f}}});let D=f[10]&&ao(f);ht=new Ie({props:{data:f[10],rowsPerPage:"10",$$slots:{default:[Fo]},$$scope:{ctx:f}}});let I=f[11]&&io(f);Tt=new Ie({props:{data:f[11],rowsPerPage:"10",$$slots:{default:[No]},$$scope:{ctx:f}}});let F=f[12]&&lo(f);return St=new Ie({props:{data:f[12],rowsPerPage:"10",$$slots:{default:[xo]},$$scope:{ctx:f}}}),{c(){tt&&tt.c(),s=b(),Vt.c(),i=T("meta"),t=T("meta"),st&&st.c(),c=ks(),r=b(),n=T("p"),n.textContent=a,d=b(),o=T("div"),o.innerHTML=y,N=b(),C&&C.c(),te=b(),j(z.$$.fragment),Me=b(),Y=T("a"),Ht=co("Compare to O*NET"),fe=b(),x=T("h2"),x.innerHTML=at,it=b(),me=T("div"),me.innerHTML=Ct,pe=b(),Q=T("p"),Q.textContent=lt,nt=b(),be=T("div"),be.innerHTML=Ot,$e=b(),B=T("h2"),B.innerHTML=rt,ct=b(),O&&O.c(),qe=b(),ne=T("h3"),ne.innerHTML=Pe,ke=b(),j(se.$$.fragment),_t=b(),E&&E.c(),Ue=b(),re=T("h3"),re.innerHTML=Le,de=b(),j(oe.$$.fragment),ut=b(),ve=T("p"),ve.textContent=Et,we=b(),V=T("h2"),V.innerHTML=ft,mt=b(),ge=T("p"),ge.innerHTML=Mt,je=b(),K=T("div"),K.innerHTML=pt,bt=b(),ce=T("h3"),ce.innerHTML=qt,ye=b(),M&&M.c(),ae=b(),Z=T("h3"),Z.innerHTML=Pt,$t=b(),j(he.$$.fragment),Te=b(),W=T("h3"),W.innerHTML=kt,dt=b(),q&&q.c(),Je=b(),_e=T("h3"),_e.innerHTML=De,Se=b(),j(ie.$$.fragment),vt=b(),ue=T("h2"),ue.innerHTML=Ut,Ae=b(),P&&P.c(),le=b(),ee=T("h3"),ee.innerHTML=Lt,wt=b(),j(Re.$$.fragment),S=b(),Ee=T("h2"),Ee.innerHTML=Rs,Qt=b(),Fe=T("h3"),Fe.innerHTML=Gs,Kt=b(),U&&U.c(),Jt=b(),Ne=T("h3"),Ne.innerHTML=Hs,Xt=b(),j(gt.$$.fragment),Yt=b(),xe=T("h3"),xe.innerHTML=Cs,Zt=b(),L&&L.c(),Dt=b(),Be=T("h3"),Be.innerHTML=Os,es=b(),j(jt.$$.fragment),ts=b(),Ve=T("h2"),Ve.innerHTML=Es,ss=b(),J&&J.c(),It=b(),We=T("h3"),We.innerHTML=Ms,os=b(),j(yt.$$.fragment),as=b(),ze=T("h2"),ze.innerHTML=qs,is=b(),D&&D.c(),Ft=b(),Qe=T("h3"),Qe.innerHTML=Ps,ls=b(),j(ht.$$.fragment),ns=b(),Ke=T("h2"),Ke.innerHTML=Us,rs=b(),I&&I.c(),Nt=b(),Xe=T("h3"),Xe.innerHTML=Ls,cs=b(),j(Tt.$$.fragment),_s=b(),Ye=T("h2"),Ye.innerHTML=Js,us=b(),F&&F.c(),xt=b(),Ze=T("h3"),Ze.innerHTML=Ds,fs=b(),j(St.$$.fragment),ms=b(),et=T("h2"),et.innerHTML=Is,ps=b(),At=T("p"),At.innerHTML=Fs,bs=b(),Rt=T("p"),Rt.innerHTML=Ns,$s=b(),Gt=T("p"),Gt.innerHTML=xs,this.h()},l(e){tt&&tt.l(e),s=p(e);const l=fo("svelte-2igo1p",document.head);Vt.l(l),i=h(l,"META",{name:!0,content:!0}),t=h(l,"META",{name:!0,content:!0}),st&&st.l(l),c=ks(),l.forEach(_),r=p(e),n=h(e,"P",{class:!0,"data-svelte-h":!0}),A(n)!=="svelte-i9vd9j"&&(n.textContent=a),d=p(e),o=h(e,"DIV",{class:!0,"data-svelte-h":!0}),A(o)!=="svelte-i33538"&&(o.innerHTML=y),N=p(e),C&&C.l(e),te=p(e),g(z.$$.fragment,e),Me=p(e),Y=h(e,"A",{href:!0,target:!0,rel:!0,class:!0});var Wt=no(Y);Ht=ro(Wt,"Compare to O*NET"),Wt.forEach(_),fe=p(e),x=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(x)!=="svelte-1dmnoaj"&&(x.innerHTML=at),it=p(e),me=h(e,"DIV",{class:!0,"data-svelte-h":!0}),A(me)!=="svelte-t5k8nl"&&(me.innerHTML=Ct),pe=p(e),Q=h(e,"P",{class:!0,"data-svelte-h":!0}),A(Q)!=="svelte-8tf981"&&(Q.textContent=lt),nt=p(e),be=h(e,"DIV",{class:!0,"data-svelte-h":!0}),A(be)!=="svelte-1wnnmwl"&&(be.innerHTML=Ot),$e=p(e),B=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(B)!=="svelte-16zqni9"&&(B.innerHTML=rt),ct=p(e),O&&O.l(e),qe=p(e),ne=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(ne)!=="svelte-zd7swv"&&(ne.innerHTML=Pe),ke=p(e),g(se.$$.fragment,e),_t=p(e),E&&E.l(e),Ue=p(e),re=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(re)!=="svelte-o75b16"&&(re.innerHTML=Le),de=p(e),g(oe.$$.fragment,e),ut=p(e),ve=h(e,"P",{class:!0,"data-svelte-h":!0}),A(ve)!=="svelte-19npkvl"&&(ve.textContent=Et),we=p(e),V=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(V)!=="svelte-161blmm"&&(V.innerHTML=ft),mt=p(e),ge=h(e,"P",{class:!0,"data-svelte-h":!0}),A(ge)!=="svelte-1kr2ren"&&(ge.innerHTML=Mt),je=p(e),K=h(e,"DIV",{class:!0,"data-svelte-h":!0}),A(K)!=="svelte-llt44u"&&(K.innerHTML=pt),bt=p(e),ce=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(ce)!=="svelte-vyj2ku"&&(ce.innerHTML=qt),ye=p(e),M&&M.l(e),ae=p(e),Z=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Z)!=="svelte-1u5pvqy"&&(Z.innerHTML=Pt),$t=p(e),g(he.$$.fragment,e),Te=p(e),W=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(W)!=="svelte-1c63z5h"&&(W.innerHTML=kt),dt=p(e),q&&q.l(e),Je=p(e),_e=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(_e)!=="svelte-s6f4ii"&&(_e.innerHTML=De),Se=p(e),g(ie.$$.fragment,e),vt=p(e),ue=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(ue)!=="svelte-x7f80k"&&(ue.innerHTML=Ut),Ae=p(e),P&&P.l(e),le=p(e),ee=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(ee)!=="svelte-5gklql"&&(ee.innerHTML=Lt),wt=p(e),g(Re.$$.fragment,e),S=p(e),Ee=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(Ee)!=="svelte-5ttn72"&&(Ee.innerHTML=Rs),Qt=p(e),Fe=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Fe)!=="svelte-1nrxbp0"&&(Fe.innerHTML=Gs),Kt=p(e),U&&U.l(e),Jt=p(e),Ne=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Ne)!=="svelte-nym5cu"&&(Ne.innerHTML=Hs),Xt=p(e),g(gt.$$.fragment,e),Yt=p(e),xe=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(xe)!=="svelte-hxcjdt"&&(xe.innerHTML=Cs),Zt=p(e),L&&L.l(e),Dt=p(e),Be=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Be)!=="svelte-q2h1x7"&&(Be.innerHTML=Os),es=p(e),g(jt.$$.fragment,e),ts=p(e),Ve=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(Ve)!=="svelte-lc41ol"&&(Ve.innerHTML=Es),ss=p(e),J&&J.l(e),It=p(e),We=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(We)!=="svelte-smalrx"&&(We.innerHTML=Ms),os=p(e),g(yt.$$.fragment,e),as=p(e),ze=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(ze)!=="svelte-78v6ii"&&(ze.innerHTML=qs),is=p(e),D&&D.l(e),Ft=p(e),Qe=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Qe)!=="svelte-mzcs6u"&&(Qe.innerHTML=Ps),ls=p(e),g(ht.$$.fragment,e),ns=p(e),Ke=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(Ke)!=="svelte-25sv0q"&&(Ke.innerHTML=Us),rs=p(e),I&&I.l(e),Nt=p(e),Xe=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Xe)!=="svelte-1xfgu95"&&(Xe.innerHTML=Ls),cs=p(e),g(Tt.$$.fragment,e),_s=p(e),Ye=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(Ye)!=="svelte-dfu8xo"&&(Ye.innerHTML=Js),us=p(e),F&&F.l(e),xt=p(e),Ze=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Ze)!=="svelte-fsjkw8"&&(Ze.innerHTML=Ds),fs=p(e),g(St.$$.fragment,e),ms=p(e),et=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(et)!=="svelte-1ouuc1c"&&(et.innerHTML=Is),ps=p(e),At=h(e,"P",{class:!0,"data-svelte-h":!0}),A(At)!=="svelte-1nzx8yf"&&(At.innerHTML=Fs),bs=p(e),Rt=h(e,"P",{class:!0,"data-svelte-h":!0}),A(Rt)!=="svelte-1x4z3m4"&&(Rt.innerHTML=Ns),$s=p(e),Gt=h(e,"P",{class:!0,"data-svelte-h":!0}),A(Gt)!=="svelte-1iujzj5"&&(Gt.innerHTML=xs),this.h()},h(){$(i,"name","twitter:card"),$(i,"content","summary_large_image"),$(t,"name","twitter:site"),$(t,"content","@evidence_dev"),$(n,"class","markdown"),$(o,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),$(Y,"href",ot=`https://www.onetonline.org/link/summary/${f[0].usajobs_occ.value}`),$(Y,"target","_blank"),$(Y,"rel","noopener"),$(Y,"class","border border-base-300 rounded-md px-3 py-1 text-sm hover:bg-base-200"),$(x,"class","markdown"),$(x,"id","profile-contents"),$(me,"class","flex flex-wrap gap-x-4 gap-y-2 text-sm border-y border-gray-200 py-3 mb-6"),$(Q,"class","markdown"),$(be,"class","text-sm my-3"),$(B,"class","markdown"),$(B,"id","overview"),$(ne,"class","markdown"),$(ne,"id","table-1-selected-usajobs-occupation-overview"),$(re,"class","markdown"),$(re,"id","figure-uo-1-posting-volume"),$(ve,"class","text-sm text-gray-600 mt-2"),$(V,"class","markdown"),$(V,"id","tasks"),$(ge,"class","markdown"),$(K,"class","border-l-4 border-amber-500 bg-amber-50 px-4 py-3 my-4 text-sm text-gray-700"),$(ce,"class","markdown"),$(ce,"id","most-distinctive-tasks-rca"),$(Z,"class","markdown"),$(Z,"id","table-2-distinctive-tasks-by-rca-for-the-selected-usajobs-occupation"),$(W,"class","markdown"),$(W,"id","most-frequent-tasks"),$(_e,"class","markdown"),$(_e,"id","table-3-frequent-tasks-for-the-selected-usajobs-occupation"),$(ue,"class","markdown"),$(ue,"id","work-activities"),$(ee,"class","markdown"),$(ee,"id","table-4-work-activities-for-the-selected-usajobs-occupation"),$(Ee,"class","markdown"),$(Ee,"id","skills"),$(Fe,"class","markdown"),$(Fe,"id","esco-skills"),$(Ne,"class","markdown"),$(Ne,"id","table-5-extracted-skills-for-the-selected-usajobs-occupation"),$(xe,"class","markdown"),$(xe,"id","crosswalked-onet-skills-from-work-activities"),$(Be,"class","markdown"),$(Be,"id","table-6-crosswalked-onet-skills-for-the-selected-usajobs-occupation"),$(Ve,"class","markdown"),$(Ve,"id","tools"),$(We,"class","markdown"),$(We,"id","table-7-tools-for-the-selected-usajobs-occupation"),$(ze,"class","markdown"),$(ze,"id","technologies"),$(Qe,"class","markdown"),$(Qe,"id","table-8-technology-concepts-for-the-selected-usajobs-occupation"),$(Ke,"class","markdown"),$(Ke,"id","education"),$(Xe,"class","markdown"),$(Xe,"id","table-9-education-concepts-for-the-selected-usajobs-occupation"),$(Ye,"class","markdown"),$(Ye,"id","benefits"),$(Ze,"class","markdown"),$(Ze,"id","table-10-benefit-concepts-for-the-selected-usajobs-occupation"),$(et,"class","markdown"),$(et,"id","data"),$(At,"class","markdown"),$(Rt,"class","markdown"),$(Gt,"class","markdown")},m(e,l){tt&&tt.m(e,l),u(e,s,l),Vt.m(document.head,null),zt(document.head,i),zt(document.head,t),st&&st.m(document.head,null),zt(document.head,c),u(e,r,l),u(e,n,l),u(e,d,l),u(e,o,l),u(e,N,l),C&&C.m(e,l),u(e,te,l),w(z,e,l),u(e,Me,l),u(e,Y,l),zt(Y,Ht),u(e,fe,l),u(e,x,l),u(e,it,l),u(e,me,l),u(e,pe,l),u(e,Q,l),u(e,nt,l),u(e,be,l),u(e,$e,l),u(e,B,l),u(e,ct,l),O&&O.m(e,l),u(e,qe,l),u(e,ne,l),u(e,ke,l),w(se,e,l),u(e,_t,l),E&&E.m(e,l),u(e,Ue,l),u(e,re,l),u(e,de,l),w(oe,e,l),u(e,ut,l),u(e,ve,l),u(e,we,l),u(e,V,l),u(e,mt,l),u(e,ge,l),u(e,je,l),u(e,K,l),u(e,bt,l),u(e,ce,l),u(e,ye,l),M&&M.m(e,l),u(e,ae,l),u(e,Z,l),u(e,$t,l),w(he,e,l),u(e,Te,l),u(e,W,l),u(e,dt,l),q&&q.m(e,l),u(e,Je,l),u(e,_e,l),u(e,Se,l),w(ie,e,l),u(e,vt,l),u(e,ue,l),u(e,Ae,l),P&&P.m(e,l),u(e,le,l),u(e,ee,l),u(e,wt,l),w(Re,e,l),u(e,S,l),u(e,Ee,l),u(e,Qt,l),u(e,Fe,l),u(e,Kt,l),U&&U.m(e,l),u(e,Jt,l),u(e,Ne,l),u(e,Xt,l),w(gt,e,l),u(e,Yt,l),u(e,xe,l),u(e,Zt,l),L&&L.m(e,l),u(e,Dt,l),u(e,Be,l),u(e,es,l),w(jt,e,l),u(e,ts,l),u(e,Ve,l),u(e,ss,l),J&&J.m(e,l),u(e,It,l),u(e,We,l),u(e,os,l),w(yt,e,l),u(e,as,l),u(e,ze,l),u(e,is,l),D&&D.m(e,l),u(e,Ft,l),u(e,Qe,l),u(e,ls,l),w(ht,e,l),u(e,ns,l),u(e,Ke,l),u(e,rs,l),I&&I.m(e,l),u(e,Nt,l),u(e,Xe,l),u(e,cs,l),w(Tt,e,l),u(e,_s,l),u(e,Ye,l),u(e,us,l),F&&F.m(e,l),u(e,xt,l),u(e,Ze,l),u(e,fs,l),w(St,e,l),u(e,ms,l),u(e,et,l),u(e,ps,l),u(e,At,l),u(e,bs,l),u(e,Rt,l),u(e,$s,l),u(e,Gt,l),Bt=!0},p(e,l){typeof G<"u"&&G.title&&G.hide_title!==!0&&tt.p(e,l),Vt.p(e,l),typeof G=="object"&&st.p(e,l),e[1]?C?(C.p(e,l),l[0]&2&&m(C,1)):(C=Qs(e),C.c(),m(C,1),C.m(te.parentNode,te)):C&&(He(),k(C,1,1,()=>{C=null}),Ge());const Wt={};l[0]&2&&(Wt.data=e[1]),z.$set(Wt),(!Bt||l[0]&1&&ot!==(ot=`https://www.onetonline.org/link/summary/${e[0].usajobs_occ.value}`))&&$(Y,"href",ot),e[2]?O?(O.p(e,l),l[0]&4&&m(O,1)):(O=Ks(e),O.c(),m(O,1),O.m(qe.parentNode,qe)):O&&(He(),k(O,1,1,()=>{O=null}),Ge());const ds={};l[0]&4&&(ds.data=e[2]),l[2]&4194304&&(ds.$$scope={dirty:l,ctx:e}),se.$set(ds),e[3]?E?(E.p(e,l),l[0]&8&&m(E,1)):(E=Xs(e),E.c(),m(E,1),E.m(Ue.parentNode,Ue)):E&&(He(),k(E,1,1,()=>{E=null}),Ge());const Bs={};l[0]&8&&(Bs.data=e[3]),oe.$set(Bs),e[4]?M?(M.p(e,l),l[0]&16&&m(M,1)):(M=Ys(e),M.c(),m(M,1),M.m(ae.parentNode,ae)):M&&(He(),k(M,1,1,()=>{M=null}),Ge());const vs={};l[0]&16&&(vs.data=e[4]),l[2]&4194304&&(vs.$$scope={dirty:l,ctx:e}),he.$set(vs),e[5]?q?(q.p(e,l),l[0]&32&&m(q,1)):(q=Zs(e),q.c(),m(q,1),q.m(Je.parentNode,Je)):q&&(He(),k(q,1,1,()=>{q=null}),Ge());const ws={};l[0]&32&&(ws.data=e[5]),l[2]&4194304&&(ws.$$scope={dirty:l,ctx:e}),ie.$set(ws),e[6]?P?(P.p(e,l),l[0]&64&&m(P,1)):(P=eo(e),P.c(),m(P,1),P.m(le.parentNode,le)):P&&(He(),k(P,1,1,()=>{P=null}),Ge());const gs={};l[0]&64&&(gs.data=e[6]),l[2]&4194304&&(gs.$$scope={dirty:l,ctx:e}),Re.$set(gs),e[7]?U?(U.p(e,l),l[0]&128&&m(U,1)):(U=to(e),U.c(),m(U,1),U.m(Jt.parentNode,Jt)):U&&(He(),k(U,1,1,()=>{U=null}),Ge());const js={};l[0]&128&&(js.data=e[7]),l[2]&4194304&&(js.$$scope={dirty:l,ctx:e}),gt.$set(js),e[8]?L?(L.p(e,l),l[0]&256&&m(L,1)):(L=so(e),L.c(),m(L,1),L.m(Dt.parentNode,Dt)):L&&(He(),k(L,1,1,()=>{L=null}),Ge());const ys={};l[0]&256&&(ys.data=e[8]),l[2]&4194304&&(ys.$$scope={dirty:l,ctx:e}),jt.$set(ys),e[9]?J?(J.p(e,l),l[0]&512&&m(J,1)):(J=oo(e),J.c(),m(J,1),J.m(It.parentNode,It)):J&&(He(),k(J,1,1,()=>{J=null}),Ge());const hs={};l[0]&512&&(hs.data=e[9]),l[2]&4194304&&(hs.$$scope={dirty:l,ctx:e}),yt.$set(hs),e[10]?D?(D.p(e,l),l[0]&1024&&m(D,1)):(D=ao(e),D.c(),m(D,1),D.m(Ft.parentNode,Ft)):D&&(He(),k(D,1,1,()=>{D=null}),Ge());const Ts={};l[0]&1024&&(Ts.data=e[10]),l[2]&4194304&&(Ts.$$scope={dirty:l,ctx:e}),ht.$set(Ts),e[11]?I?(I.p(e,l),l[0]&2048&&m(I,1)):(I=io(e),I.c(),m(I,1),I.m(Nt.parentNode,Nt)):I&&(He(),k(I,1,1,()=>{I=null}),Ge());const Ss={};l[0]&2048&&(Ss.data=e[11]),l[2]&4194304&&(Ss.$$scope={dirty:l,ctx:e}),Tt.$set(Ss),e[12]?F?(F.p(e,l),l[0]&4096&&m(F,1)):(F=lo(e),F.c(),m(F,1),F.m(xt.parentNode,xt)):F&&(He(),k(F,1,1,()=>{F=null}),Ge());const As={};l[0]&4096&&(As.data=e[12]),l[2]&4194304&&(As.$$scope={dirty:l,ctx:e}),St.$set(As)},i(e){Bt||(m(C),m(z.$$.fragment,e),m(O),m(se.$$.fragment,e),m(E),m(oe.$$.fragment,e),m(M),m(he.$$.fragment,e),m(q),m(ie.$$.fragment,e),m(P),m(Re.$$.fragment,e),m(U),m(gt.$$.fragment,e),m(L),m(jt.$$.fragment,e),m(J),m(yt.$$.fragment,e),m(D),m(ht.$$.fragment,e),m(I),m(Tt.$$.fragment,e),m(F),m(St.$$.fragment,e),Bt=!0)},o(e){k(C),k(z.$$.fragment,e),k(O),k(se.$$.fragment,e),k(E),k(oe.$$.fragment,e),k(M),k(he.$$.fragment,e),k(q),k(ie.$$.fragment,e),k(P),k(Re.$$.fragment,e),k(U),k(gt.$$.fragment,e),k(L),k(jt.$$.fragment,e),k(J),k(yt.$$.fragment,e),k(D),k(ht.$$.fragment,e),k(I),k(Tt.$$.fragment,e),k(F),k(St.$$.fragment,e),Bt=!1},d(e){e&&(_(s),_(r),_(n),_(d),_(o),_(N),_(te),_(Me),_(Y),_(fe),_(x),_(it),_(me),_(pe),_(Q),_(nt),_(be),_($e),_(B),_(ct),_(qe),_(ne),_(ke),_(_t),_(Ue),_(re),_(de),_(ut),_(ve),_(we),_(V),_(mt),_(ge),_(je),_(K),_(bt),_(ce),_(ye),_(ae),_(Z),_($t),_(Te),_(W),_(dt),_(Je),_(_e),_(Se),_(vt),_(ue),_(Ae),_(le),_(ee),_(wt),_(S),_(Ee),_(Qt),_(Fe),_(Kt),_(Jt),_(Ne),_(Xt),_(Yt),_(xe),_(Zt),_(Dt),_(Be),_(es),_(ts),_(Ve),_(ss),_(It),_(We),_(os),_(as),_(ze),_(is),_(Ft),_(Qe),_(ls),_(ns),_(Ke),_(rs),_(Nt),_(Xe),_(cs),_(_s),_(Ye),_(us),_(xt),_(Ze),_(fs),_(ms),_(et),_(ps),_(At),_(bs),_(Rt),_($s),_(Gt)),tt&&tt.d(e),Vt.d(e),_(i),_(t),st&&st.d(e),_(c),C&&C.d(e),v(z,e),O&&O.d(e),v(se,e),E&&E.d(e),v(oe,e),M&&M.d(e),v(he,e),q&&q.d(e),v(ie,e),P&&P.d(e),v(Re,e),U&&U.d(e),v(gt,e),L&&L.d(e),v(jt,e),J&&J.d(e),v(yt,e),D&&D.d(e),v(ht,e),I&&I.d(e),v(Tt,e),F&&F.d(e),v(St,e)}}}const G={title:"Occupational Posting Profile"};function Vo(f,s,i){let t,c;Vs(f,So,S=>i(63,t=S)),Vs(f,zs,S=>i(68,c=S));let{data:r}=s,{data:n={},customFormattingSettings:a,__db:d,inputs:o}=r;mo(zs,c="26642c68f7425ee6a3f47c16c31e5bf1",c);let y=go(wo(o));po(y.subscribe(S=>i(0,o=S))),bo(ho,{getCustomFormats:()=>a.customFormats||[]});const N=(S,Ee)=>Ro(d.query,S,{query_name:Ee});jo(N),t.params,$o(()=>!0);let te={initialData:void 0,initialError:void 0},z=H`select distinct occ8, soc_title
from usajobs.AGGR_OccupationTaskSignatures
order by soc_title`,Me=`select distinct occ8, soc_title
from usajobs.AGGR_OccupationTaskSignatures
order by soc_title`;n.usajobs_occ_options_data&&(n.usajobs_occ_options_data instanceof Error?te.initialError=n.usajobs_occ_options_data:te.initialData=n.usajobs_occ_options_data,n.usajobs_occ_options_columns&&(te.knownColumns=n.usajobs_occ_options_columns));let Y,Ht=!1;const ot=Ce.createReactive({callback:S=>{i(1,Y=S)},execFn:N},{id:"usajobs_occ_options",...te});ot(Me,{noResolve:z,...te}),globalThis[Symbol.for("usajobs_occ_options")]={get value(){return Y}};let fe={initialData:void 0,initialError:void 0},x=H`select
  occ8,
  any_value(soc_title) as soc_title,
  max(n_postings) as n_postings,
  count(*) as retained_tasks,
  avg(in_onet) as share_retained_tasks_in_onet
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
group by 1`,at=`select
  occ8,
  any_value(soc_title) as soc_title,
  max(n_postings) as n_postings,
  count(*) as retained_tasks,
  avg(in_onet) as share_retained_tasks_in_onet
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
group by 1`;n.usajobs_occ_overview_data&&(n.usajobs_occ_overview_data instanceof Error?fe.initialError=n.usajobs_occ_overview_data:fe.initialData=n.usajobs_occ_overview_data,n.usajobs_occ_overview_columns&&(fe.knownColumns=n.usajobs_occ_overview_columns));let it,me=!1;const Ct=Ce.createReactive({callback:S=>{i(2,it=S)},execFn:N},{id:"usajobs_occ_overview",...fe});Ct(at,{noResolve:x,...fe}),globalThis[Symbol.for("usajobs_occ_overview")]={get value(){return it}};let pe={initialData:void 0,initialError:void 0},Q=H`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsOccupationPostingVolume
where occ8 = '${o.usajobs_occ.value}'
order by month_start`,lt=`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsOccupationPostingVolume
where occ8 = '${o.usajobs_occ.value}'
order by month_start`;n.usajobs_occ_posting_volume_data&&(n.usajobs_occ_posting_volume_data instanceof Error?pe.initialError=n.usajobs_occ_posting_volume_data:pe.initialData=n.usajobs_occ_posting_volume_data,n.usajobs_occ_posting_volume_columns&&(pe.knownColumns=n.usajobs_occ_posting_volume_columns));let nt,be=!1;const Ot=Ce.createReactive({callback:S=>{i(3,nt=S)},execFn:N},{id:"usajobs_occ_posting_volume",...pe});Ot(lt,{noResolve:Q,...pe}),globalThis[Symbol.for("usajobs_occ_posting_volume")]={get value(){return nt}};let $e={initialData:void 0,initialError:void 0},B=H`select
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  pct_postings,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and occ_rank <= 10
order by occ_rank`,rt=`select
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  pct_postings,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and occ_rank <= 10
order by occ_rank`;n.usajobs_occ_tasks_rca_data&&(n.usajobs_occ_tasks_rca_data instanceof Error?$e.initialError=n.usajobs_occ_tasks_rca_data:$e.initialData=n.usajobs_occ_tasks_rca_data,n.usajobs_occ_tasks_rca_columns&&($e.knownColumns=n.usajobs_occ_tasks_rca_columns));let ct,qe=!1;const ne=Ce.createReactive({callback:S=>{i(4,ct=S)},execFn:N},{id:"usajobs_occ_tasks_rca",...$e});ne(rt,{noResolve:B,...$e}),globalThis[Symbol.for("usajobs_occ_tasks_rca")]={get value(){return ct}};let Pe={initialData:void 0,initialError:void 0},ke=H`select
  cast(task_id as varchar) as task_id,
  task_text,
  pct_postings,
  rca,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and volume_rank <= 10
order by volume_rank`,se=`select
  cast(task_id as varchar) as task_id,
  task_text,
  pct_postings,
  rca,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and volume_rank <= 10
order by volume_rank`;n.usajobs_occ_tasks_volume_data&&(n.usajobs_occ_tasks_volume_data instanceof Error?Pe.initialError=n.usajobs_occ_tasks_volume_data:Pe.initialData=n.usajobs_occ_tasks_volume_data,n.usajobs_occ_tasks_volume_columns&&(Pe.knownColumns=n.usajobs_occ_tasks_volume_columns));let _t,Ue=!1;const re=Ce.createReactive({callback:S=>{i(5,_t=S)},execFn:N},{id:"usajobs_occ_tasks_volume",...Pe});re(se,{noResolve:ke,...Pe}),globalThis[Symbol.for("usajobs_occ_tasks_volume")]={get value(){return _t}};let Le={initialData:void 0,initialError:void 0},de=H`select
  wa_rank,
  wa_id,
  wa_name,
  pct_postings
from usajobs.AGGR_USAJobsOccupationWAProfile
where occ8 = '${o.usajobs_occ.value}'
order by wa_rank`,oe=`select
  wa_rank,
  wa_id,
  wa_name,
  pct_postings
from usajobs.AGGR_USAJobsOccupationWAProfile
where occ8 = '${o.usajobs_occ.value}'
order by wa_rank`;n.usajobs_occ_work_activities_data&&(n.usajobs_occ_work_activities_data instanceof Error?Le.initialError=n.usajobs_occ_work_activities_data:Le.initialData=n.usajobs_occ_work_activities_data,n.usajobs_occ_work_activities_columns&&(Le.knownColumns=n.usajobs_occ_work_activities_columns));let ut,ve=!1;const Et=Ce.createReactive({callback:S=>{i(6,ut=S)},execFn:N},{id:"usajobs_occ_work_activities",...Le});Et(oe,{noResolve:de,...Le}),globalThis[Symbol.for("usajobs_occ_work_activities")]={get value(){return ut}};let we={initialData:void 0,initialError:void 0},V=H`select
  skill_rank,
  skill_code,
  skill_label,
  pct_postings
from usajobs.AGGR_USAJobsOccupationSkillProfile
where occ8 = '${o.usajobs_occ.value}'
order by skill_rank`,ft=`select
  skill_rank,
  skill_code,
  skill_label,
  pct_postings
from usajobs.AGGR_USAJobsOccupationSkillProfile
where occ8 = '${o.usajobs_occ.value}'
order by skill_rank`;n.usajobs_occ_skills_data&&(n.usajobs_occ_skills_data instanceof Error?we.initialError=n.usajobs_occ_skills_data:we.initialData=n.usajobs_occ_skills_data,n.usajobs_occ_skills_columns&&(we.knownColumns=n.usajobs_occ_skills_columns));let mt,ge=!1;const Mt=Ce.createReactive({callback:S=>{i(7,mt=S)},execFn:N},{id:"usajobs_occ_skills",...we});Mt(ft,{noResolve:V,...we}),globalThis[Symbol.for("usajobs_occ_skills")]={get value(){return mt}};let je={initialData:void 0,initialError:void 0},K=H`select
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
order by skill_rank`,pt=`select
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
order by skill_rank`;n.usajobs_occ_onet_skills_data&&(n.usajobs_occ_onet_skills_data instanceof Error?je.initialError=n.usajobs_occ_onet_skills_data:je.initialData=n.usajobs_occ_onet_skills_data,n.usajobs_occ_onet_skills_columns&&(je.knownColumns=n.usajobs_occ_onet_skills_columns));let bt,ce=!1;const qt=Ce.createReactive({callback:S=>{i(8,bt=S)},execFn:N},{id:"usajobs_occ_onet_skills",...je});qt(pt,{noResolve:K,...je}),globalThis[Symbol.for("usajobs_occ_onet_skills")]={get value(){return bt}};let ye={initialData:void 0,initialError:void 0},ae=H`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'tools'
order by concept_rank`,Z=`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'tools'
order by concept_rank`;n.usajobs_occ_tools_data&&(n.usajobs_occ_tools_data instanceof Error?ye.initialError=n.usajobs_occ_tools_data:ye.initialData=n.usajobs_occ_tools_data,n.usajobs_occ_tools_columns&&(ye.knownColumns=n.usajobs_occ_tools_columns));let Pt,$t=!1;const he=Ce.createReactive({callback:S=>{i(9,Pt=S)},execFn:N},{id:"usajobs_occ_tools",...ye});he(Z,{noResolve:ae,...ye}),globalThis[Symbol.for("usajobs_occ_tools")]={get value(){return Pt}};let Te={initialData:void 0,initialError:void 0},W=H`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'technology'
order by concept_rank`,kt=`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'technology'
order by concept_rank`;n.usajobs_occ_technology_data&&(n.usajobs_occ_technology_data instanceof Error?Te.initialError=n.usajobs_occ_technology_data:Te.initialData=n.usajobs_occ_technology_data,n.usajobs_occ_technology_columns&&(Te.knownColumns=n.usajobs_occ_technology_columns));let dt,Je=!1;const _e=Ce.createReactive({callback:S=>{i(10,dt=S)},execFn:N},{id:"usajobs_occ_technology",...Te});_e(kt,{noResolve:W,...Te}),globalThis[Symbol.for("usajobs_occ_technology")]={get value(){return dt}};let De={initialData:void 0,initialError:void 0},Se=H`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'education'
order by concept_rank`,ie=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'education'
order by concept_rank`;n.usajobs_occ_education_data&&(n.usajobs_occ_education_data instanceof Error?De.initialError=n.usajobs_occ_education_data:De.initialData=n.usajobs_occ_education_data,n.usajobs_occ_education_columns&&(De.knownColumns=n.usajobs_occ_education_columns));let vt,ue=!1;const Ut=Ce.createReactive({callback:S=>{i(11,vt=S)},execFn:N},{id:"usajobs_occ_education",...De});Ut(ie,{noResolve:Se,...De}),globalThis[Symbol.for("usajobs_occ_education")]={get value(){return vt}};let Ae={initialData:void 0,initialError:void 0},le=H`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'benefits'
order by concept_rank`,ee=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'benefits'
order by concept_rank`;n.usajobs_occ_benefits_data&&(n.usajobs_occ_benefits_data instanceof Error?Ae.initialError=n.usajobs_occ_benefits_data:Ae.initialData=n.usajobs_occ_benefits_data,n.usajobs_occ_benefits_columns&&(Ae.knownColumns=n.usajobs_occ_benefits_columns));let Lt,wt=!1;const Re=Ce.createReactive({callback:S=>{i(12,Lt=S)},execFn:N},{id:"usajobs_occ_benefits",...Ae});return Re(ee,{noResolve:le,...Ae}),globalThis[Symbol.for("usajobs_occ_benefits")]={get value(){return Lt}},f.$$set=S=>{"data"in S&&i(13,r=S.data)},f.$$.update=()=>{f.$$.dirty[0]&8192&&i(14,{data:n={},customFormattingSettings:a,__db:d}=r,n),f.$$.dirty[0]&16384&&yo.set(Object.keys(n).length>0),f.$$.dirty[2]&2&&t.params,f.$$.dirty[0]&491520&&(z||!Ht?z||(ot(Me,{noResolve:z,...te}),i(18,Ht=!0)):ot(Me,{noResolve:z})),f.$$.dirty[0]&1&&i(20,x=H`select
  occ8,
  any_value(soc_title) as soc_title,
  max(n_postings) as n_postings,
  count(*) as retained_tasks,
  avg(in_onet) as share_retained_tasks_in_onet
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
group by 1`),f.$$.dirty[0]&1&&i(21,at=`select
  occ8,
  any_value(soc_title) as soc_title,
  max(n_postings) as n_postings,
  count(*) as retained_tasks,
  avg(in_onet) as share_retained_tasks_in_onet
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
group by 1`),f.$$.dirty[0]&7864320&&(x||!me?x||(Ct(at,{noResolve:x,...fe}),i(22,me=!0)):Ct(at,{noResolve:x})),f.$$.dirty[0]&1&&i(24,Q=H`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsOccupationPostingVolume
where occ8 = '${o.usajobs_occ.value}'
order by month_start`),f.$$.dirty[0]&1&&i(25,lt=`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsOccupationPostingVolume
where occ8 = '${o.usajobs_occ.value}'
order by month_start`),f.$$.dirty[0]&125829120&&(Q||!be?Q||(Ot(lt,{noResolve:Q,...pe}),i(26,be=!0)):Ot(lt,{noResolve:Q})),f.$$.dirty[0]&1&&i(28,B=H`select
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  pct_postings,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and occ_rank <= 10
order by occ_rank`),f.$$.dirty[0]&1&&i(29,rt=`select
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  pct_postings,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and occ_rank <= 10
order by occ_rank`),f.$$.dirty[0]&2013265920&&(B||!qe?B||(ne(rt,{noResolve:B,...$e}),i(30,qe=!0)):ne(rt,{noResolve:B})),f.$$.dirty[0]&1&&i(32,ke=H`select
  cast(task_id as varchar) as task_id,
  task_text,
  pct_postings,
  rca,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and volume_rank <= 10
order by volume_rank`),f.$$.dirty[0]&1&&i(33,se=`select
  cast(task_id as varchar) as task_id,
  task_text,
  pct_postings,
  rca,
  in_onet,
  onet_homes
from usajobs.AGGR_OccupationTaskSignatures
where occ8 = '${o.usajobs_occ.value}'
  and volume_rank <= 10
order by volume_rank`),f.$$.dirty[1]&15&&(ke||!Ue?ke||(re(se,{noResolve:ke,...Pe}),i(34,Ue=!0)):re(se,{noResolve:ke})),f.$$.dirty[0]&1&&i(36,de=H`select
  wa_rank,
  wa_id,
  wa_name,
  pct_postings
from usajobs.AGGR_USAJobsOccupationWAProfile
where occ8 = '${o.usajobs_occ.value}'
order by wa_rank`),f.$$.dirty[0]&1&&i(37,oe=`select
  wa_rank,
  wa_id,
  wa_name,
  pct_postings
from usajobs.AGGR_USAJobsOccupationWAProfile
where occ8 = '${o.usajobs_occ.value}'
order by wa_rank`),f.$$.dirty[1]&240&&(de||!ve?de||(Et(oe,{noResolve:de,...Le}),i(38,ve=!0)):Et(oe,{noResolve:de})),f.$$.dirty[0]&1&&i(40,V=H`select
  skill_rank,
  skill_code,
  skill_label,
  pct_postings
from usajobs.AGGR_USAJobsOccupationSkillProfile
where occ8 = '${o.usajobs_occ.value}'
order by skill_rank`),f.$$.dirty[0]&1&&i(41,ft=`select
  skill_rank,
  skill_code,
  skill_label,
  pct_postings
from usajobs.AGGR_USAJobsOccupationSkillProfile
where occ8 = '${o.usajobs_occ.value}'
order by skill_rank`),f.$$.dirty[1]&3840&&(V||!ge?V||(Mt(ft,{noResolve:V,...we}),i(42,ge=!0)):Mt(ft,{noResolve:V})),f.$$.dirty[0]&1&&i(44,K=H`select
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
order by skill_rank`),f.$$.dirty[0]&1&&i(45,pt=`select
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
order by skill_rank`),f.$$.dirty[1]&61440&&(K||!ce?K||(qt(pt,{noResolve:K,...je}),i(46,ce=!0)):qt(pt,{noResolve:K})),f.$$.dirty[0]&1&&i(48,ae=H`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'tools'
order by concept_rank`),f.$$.dirty[0]&1&&i(49,Z=`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'tools'
order by concept_rank`),f.$$.dirty[1]&983040&&(ae||!$t?ae||(he(Z,{noResolve:ae,...ye}),i(50,$t=!0)):he(Z,{noResolve:ae})),f.$$.dirty[0]&1&&i(52,W=H`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'technology'
order by concept_rank`),f.$$.dirty[0]&1&&i(53,kt=`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'technology'
order by concept_rank`),f.$$.dirty[1]&15728640&&(W||!Je?W||(_e(kt,{noResolve:W,...Te}),i(54,Je=!0)):_e(kt,{noResolve:W})),f.$$.dirty[0]&1&&i(56,Se=H`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'education'
order by concept_rank`),f.$$.dirty[0]&1&&i(57,ie=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'education'
order by concept_rank`),f.$$.dirty[1]&251658240&&(Se||!ue?Se||(Ut(ie,{noResolve:Se,...De}),i(58,ue=!0)):Ut(ie,{noResolve:Se})),f.$$.dirty[0]&1&&i(60,le=H`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'benefits'
order by concept_rank`),f.$$.dirty[0]&1&&i(61,ee=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'benefits'
order by concept_rank`),f.$$.dirty[1]&1879048192|f.$$.dirty[2]&1&&(le||!wt?le||(Re(ee,{noResolve:le,...Ae}),i(62,wt=!0)):Re(ee,{noResolve:le}))},i(16,z=H`select distinct occ8, soc_title
from usajobs.AGGR_OccupationTaskSignatures
order by soc_title`),i(17,Me=`select distinct occ8, soc_title
from usajobs.AGGR_OccupationTaskSignatures
order by soc_title`),[o,Y,it,nt,ct,_t,ut,mt,bt,Pt,dt,vt,Lt,r,n,te,z,Me,Ht,fe,x,at,me,pe,Q,lt,be,$e,B,rt,qe,Pe,ke,se,Ue,Le,de,oe,ve,we,V,ft,ge,je,K,pt,ce,ye,ae,Z,$t,Te,W,kt,Je,De,Se,ie,ue,Ae,le,ee,wt,t]}class ia extends ko{constructor(s){super(),vo(this,s,Vo,Bo,uo,{data:13},null,[-1,-1,-1])}}export{ia as component};
