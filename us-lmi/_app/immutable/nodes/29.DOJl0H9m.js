import{s as co,d as _,i as u,a as bs,z as _o,C as uo,b as k,c as p,h as fo,e as h,f as ks,g as A,k as b,l as T,m as Ws,n as mo,o as po,p as bo,q as ko,r as oe,j as $o,t as vo,u as wo}from"../chunks/scheduler.DhBftCKw.js";import{S as go,i as jo,d as v,t as $,a as m,c as ge,m as w,b as g,e as j,g as je}from"../chunks/index.BUvAr1Xw.js";import{D as Be,C as R}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.Coxvl-NJ.js";import{w as yo}from"../chunks/entry.dLjmsfWn.js";import{e as ho,s as To,Q as ye,p as So,a as zs,r as Qs,C as Ao}from"../chunks/inferColumnTypes.BKCRbpRz.js";import{h as C}from"../chunks/setTrackProxy.Cyfckp0w.js";import{D as Ro}from"../chunks/Dropdown.BzQe3TVq.js";import{p as Go}from"../chunks/stores.BCPUepHb.js";import{Q as he}from"../chunks/QueryViewer.piJTSmrJ.js";import{L as Co}from"../chunks/LineChart.B6VYUQYp.js";import{p as Ho}from"../chunks/profile.BW8tN6E9.js";function Oo(f){let s,i=G.title+"",t;return{c(){s=T("h1"),t=wo(i),this.h()},l(c){s=h(c,"H1",{class:!0});var r=$o(s);t=vo(r,i),r.forEach(_),this.h()},h(){k(s,"class","title")},m(c,r){u(c,s,r),bs(s,t)},p:oe,d(c){c&&_(s)}}}function Eo(f){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:oe,p:oe,d:oe}}function Mo(f){let s,i,t,c,r;return document.title=s=G.title,{c(){i=b(),t=T("meta"),c=b(),r=T("meta"),this.h()},l(n){i=p(n),t=h(n,"META",{property:!0,content:!0}),c=p(n),r=h(n,"META",{name:!0,content:!0}),this.h()},h(){var n,a;k(t,"property","og:title"),k(t,"content",((n=G.og)==null?void 0:n.title)??G.title),k(r,"name","twitter:title"),k(r,"content",((a=G.og)==null?void 0:a.title)??G.title)},m(n,a){u(n,i,a),u(n,t,a),u(n,c,a),u(n,r,a)},p(n,a){a&0&&s!==(s=G.title)&&(document.title=s)},d(n){n&&(_(i),_(t),_(c),_(r))}}}function qo(f){var r,n;let s,i,t=(G.description||((r=G.og)==null?void 0:r.description))&&Po(),c=((n=G.og)==null?void 0:n.image)&&Uo();return{c(){t&&t.c(),s=b(),c&&c.c(),i=ks()},l(a){t&&t.l(a),s=p(a),c&&c.l(a),i=ks()},m(a,d){t&&t.m(a,d),u(a,s,d),c&&c.m(a,d),u(a,i,d)},p(a,d){var o,y;(G.description||(o=G.og)!=null&&o.description)&&t.p(a,d),(y=G.og)!=null&&y.image&&c.p(a,d)},d(a){a&&(_(s),_(i)),t&&t.d(a),c&&c.d(a)}}}function Po(f){let s,i,t,c,r;return{c(){s=T("meta"),i=b(),t=T("meta"),c=b(),r=T("meta"),this.h()},l(n){s=h(n,"META",{name:!0,content:!0}),i=p(n),t=h(n,"META",{property:!0,content:!0}),c=p(n),r=h(n,"META",{name:!0,content:!0}),this.h()},h(){var n,a,d;k(s,"name","description"),k(s,"content",G.description??((n=G.og)==null?void 0:n.description)),k(t,"property","og:description"),k(t,"content",((a=G.og)==null?void 0:a.description)??G.description),k(r,"name","twitter:description"),k(r,"content",((d=G.og)==null?void 0:d.description)??G.description)},m(n,a){u(n,s,a),u(n,i,a),u(n,t,a),u(n,c,a),u(n,r,a)},p:oe,d(n){n&&(_(s),_(i),_(t),_(c),_(r))}}}function Uo(f){let s,i,t;return{c(){s=T("meta"),i=b(),t=T("meta"),this.h()},l(c){s=h(c,"META",{property:!0,content:!0}),i=p(c),t=h(c,"META",{name:!0,content:!0}),this.h()},h(){var c,r;k(s,"property","og:image"),k(s,"content",zs((c=G.og)==null?void 0:c.image)),k(t,"name","twitter:image"),k(t,"content",zs((r=G.og)==null?void 0:r.image))},m(c,r){u(c,s,r),u(c,i,r),u(c,t,r)},p:oe,d(c){c&&(_(s),_(i),_(t))}}}function Ks(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_options",queryResult:f[1]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&2&&(r.queryResult=t[1]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){$(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Xs(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_overview",queryResult:f[2]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&4&&(r.queryResult=t[2]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){$(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Lo(f){let s,i,t,c,r,n,a,d;return s=new R({props:{id:"soc_title",title:"Occupation"}}),t=new R({props:{id:"n_postings",title:"Postings",fmt:"#,##0"}}),r=new R({props:{id:"retained_tasks",title:"Tasks",fmt:"#,##0"}}),a=new R({props:{id:"share_retained_tasks_in_onet",title:"In O*NET",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment),n=b(),j(a.$$.fragment)},l(o){g(s.$$.fragment,o),i=p(o),g(t.$$.fragment,o),c=p(o),g(r.$$.fragment,o),n=p(o),g(a.$$.fragment,o)},m(o,y){w(s,o,y),u(o,i,y),w(t,o,y),u(o,c,y),w(r,o,y),u(o,n,y),w(a,o,y),d=!0},p:oe,i(o){d||(m(s.$$.fragment,o),m(t.$$.fragment,o),m(r.$$.fragment,o),m(a.$$.fragment,o),d=!0)},o(o){$(s.$$.fragment,o),$(t.$$.fragment,o),$(r.$$.fragment,o),$(a.$$.fragment,o),d=!1},d(o){o&&(_(i),_(c),_(n)),v(s,o),v(t,o),v(r,o),v(a,o)}}}function Ys(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_posting_volume",queryResult:f[3]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&8&&(r.queryResult=t[3]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){$(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Zs(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_tasks_rca",queryResult:f[4]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&16&&(r.queryResult=t[4]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){$(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Jo(f){let s,i,t,c,r,n,a,d;return s=new R({props:{id:"task_text",title:"Task",wrap:"true"}}),t=new R({props:{id:"rca",title:"RCA",fmt:"0.00"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),a=new R({props:{id:"in_onet",title:"In O*NET",fmt:"0"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment),n=b(),j(a.$$.fragment)},l(o){g(s.$$.fragment,o),i=p(o),g(t.$$.fragment,o),c=p(o),g(r.$$.fragment,o),n=p(o),g(a.$$.fragment,o)},m(o,y){w(s,o,y),u(o,i,y),w(t,o,y),u(o,c,y),w(r,o,y),u(o,n,y),w(a,o,y),d=!0},p:oe,i(o){d||(m(s.$$.fragment,o),m(t.$$.fragment,o),m(r.$$.fragment,o),m(a.$$.fragment,o),d=!0)},o(o){$(s.$$.fragment,o),$(t.$$.fragment,o),$(r.$$.fragment,o),$(a.$$.fragment,o),d=!1},d(o){o&&(_(i),_(c),_(n)),v(s,o),v(t,o),v(r,o),v(a,o)}}}function eo(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_tasks_volume",queryResult:f[5]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&32&&(r.queryResult=t[5]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){$(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Do(f){let s,i,t,c,r,n,a,d;return s=new R({props:{id:"task_text",title:"Task",wrap:"true"}}),t=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),r=new R({props:{id:"rca",title:"RCA",fmt:"0.00"}}),a=new R({props:{id:"in_onet",title:"In O*NET",fmt:"0"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment),n=b(),j(a.$$.fragment)},l(o){g(s.$$.fragment,o),i=p(o),g(t.$$.fragment,o),c=p(o),g(r.$$.fragment,o),n=p(o),g(a.$$.fragment,o)},m(o,y){w(s,o,y),u(o,i,y),w(t,o,y),u(o,c,y),w(r,o,y),u(o,n,y),w(a,o,y),d=!0},p:oe,i(o){d||(m(s.$$.fragment,o),m(t.$$.fragment,o),m(r.$$.fragment,o),m(a.$$.fragment,o),d=!0)},o(o){$(s.$$.fragment,o),$(t.$$.fragment,o),$(r.$$.fragment,o),$(a.$$.fragment,o),d=!1},d(o){o&&(_(i),_(c),_(n)),v(s,o),v(t,o),v(r,o),v(a,o)}}}function to(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_work_activities",queryResult:f[6]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&64&&(r.queryResult=t[6]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){$(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Io(f){let s,i,t,c,r,n;return s=new R({props:{id:"wa_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"wa_name",title:"Name",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment)},l(a){g(s.$$.fragment,a),i=p(a),g(t.$$.fragment,a),c=p(a),g(r.$$.fragment,a)},m(a,d){w(s,a,d),u(a,i,d),w(t,a,d),u(a,c,d),w(r,a,d),n=!0},p:oe,i(a){n||(m(s.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),n=!0)},o(a){$(s.$$.fragment,a),$(t.$$.fragment,a),$(r.$$.fragment,a),n=!1},d(a){a&&(_(i),_(c)),v(s,a),v(t,a),v(r,a)}}}function so(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_skills",queryResult:f[7]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&128&&(r.queryResult=t[7]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){$(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function xo(f){let s,i,t,c,r,n;return s=new R({props:{id:"skill_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"skill_label",title:"Skill",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment)},l(a){g(s.$$.fragment,a),i=p(a),g(t.$$.fragment,a),c=p(a),g(r.$$.fragment,a)},m(a,d){w(s,a,d),u(a,i,d),w(t,a,d),u(a,c,d),w(r,a,d),n=!0},p:oe,i(a){n||(m(s.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),n=!0)},o(a){$(s.$$.fragment,a),$(t.$$.fragment,a),$(r.$$.fragment,a),n=!1},d(a){a&&(_(i),_(c)),v(s,a),v(t,a),v(r,a)}}}function oo(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_onet_skills",queryResult:f[8]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&256&&(r.queryResult=t[8]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){$(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Fo(f){let s,i,t,c,r,n;return s=new R({props:{id:"skill_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"inferred_skill_mentions",title:"Mentions",fmt:"#,##0"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment)},l(a){g(s.$$.fragment,a),i=p(a),g(t.$$.fragment,a),c=p(a),g(r.$$.fragment,a)},m(a,d){w(s,a,d),u(a,i,d),w(t,a,d),u(a,c,d),w(r,a,d),n=!0},p:oe,i(a){n||(m(s.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),n=!0)},o(a){$(s.$$.fragment,a),$(t.$$.fragment,a),$(r.$$.fragment,a),n=!1},d(a){a&&(_(i),_(c)),v(s,a),v(t,a),v(r,a)}}}function ao(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_tools",queryResult:f[9]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&512&&(r.queryResult=t[9]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){$(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function No(f){let s,i,t,c,r,n,a,d;return s=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"tool",title:"Tool",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),a=new R({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment),n=b(),j(a.$$.fragment)},l(o){g(s.$$.fragment,o),i=p(o),g(t.$$.fragment,o),c=p(o),g(r.$$.fragment,o),n=p(o),g(a.$$.fragment,o)},m(o,y){w(s,o,y),u(o,i,y),w(t,o,y),u(o,c,y),w(r,o,y),u(o,n,y),w(a,o,y),d=!0},p:oe,i(o){d||(m(s.$$.fragment,o),m(t.$$.fragment,o),m(r.$$.fragment,o),m(a.$$.fragment,o),d=!0)},o(o){$(s.$$.fragment,o),$(t.$$.fragment,o),$(r.$$.fragment,o),$(a.$$.fragment,o),d=!1},d(o){o&&(_(i),_(c),_(n)),v(s,o),v(t,o),v(r,o),v(a,o)}}}function io(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_technology",queryResult:f[10]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&1024&&(r.queryResult=t[10]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){$(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Bo(f){let s,i,t,c,r,n,a,d;return s=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"technology",title:"Technology",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),a=new R({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment),n=b(),j(a.$$.fragment)},l(o){g(s.$$.fragment,o),i=p(o),g(t.$$.fragment,o),c=p(o),g(r.$$.fragment,o),n=p(o),g(a.$$.fragment,o)},m(o,y){w(s,o,y),u(o,i,y),w(t,o,y),u(o,c,y),w(r,o,y),u(o,n,y),w(a,o,y),d=!0},p:oe,i(o){d||(m(s.$$.fragment,o),m(t.$$.fragment,o),m(r.$$.fragment,o),m(a.$$.fragment,o),d=!0)},o(o){$(s.$$.fragment,o),$(t.$$.fragment,o),$(r.$$.fragment,o),$(a.$$.fragment,o),d=!1},d(o){o&&(_(i),_(c),_(n)),v(s,o),v(t,o),v(r,o),v(a,o)}}}function lo(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_education",queryResult:f[11]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&2048&&(r.queryResult=t[11]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){$(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Vo(f){let s,i,t,c,r,n;return s=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"value",title:"Education",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment)},l(a){g(s.$$.fragment,a),i=p(a),g(t.$$.fragment,a),c=p(a),g(r.$$.fragment,a)},m(a,d){w(s,a,d),u(a,i,d),w(t,a,d),u(a,c,d),w(r,a,d),n=!0},p:oe,i(a){n||(m(s.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),n=!0)},o(a){$(s.$$.fragment,a),$(t.$$.fragment,a),$(r.$$.fragment,a),n=!1},d(a){a&&(_(i),_(c)),v(s,a),v(t,a),v(r,a)}}}function no(f){let s,i;return s=new he({props:{queryID:"usajobs_occ_benefits",queryResult:f[12]}}),{c(){j(s.$$.fragment)},l(t){g(s.$$.fragment,t)},m(t,c){w(s,t,c),i=!0},p(t,c){const r={};c[0]&4096&&(r.queryResult=t[12]),s.$set(r)},i(t){i||(m(s.$$.fragment,t),i=!0)},o(t){$(s.$$.fragment,t),i=!1},d(t){v(s,t)}}}function Wo(f){let s,i,t,c,r,n;return s=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"value",title:"Benefit",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(s.$$.fragment),i=b(),j(t.$$.fragment),c=b(),j(r.$$.fragment)},l(a){g(s.$$.fragment,a),i=p(a),g(t.$$.fragment,a),c=p(a),g(r.$$.fragment,a)},m(a,d){w(s,a,d),u(a,i,d),w(t,a,d),u(a,c,d),w(r,a,d),n=!0},p:oe,i(a){n||(m(s.$$.fragment,a),m(t.$$.fragment,a),m(r.$$.fragment,a),n=!0)},o(a){$(s.$$.fragment,a),$(t.$$.fragment,a),$(r.$$.fragment,a),n=!1},d(a){a&&(_(i),_(c)),v(s,a),v(t,a),v(r,a)}}}function zo(f){let s,i,t,c,r,n,a="Select one 8-digit O*NET-SOC occupation. Tables use USAJOBS task, skill, Work Activity, and ConceptSearch aggregates.",d,o,y="<strong>How to read this page.</strong> This is a federal posting profile, not a national occupation profile. RCA highlights distinctive rows within USAJOBS; frequency columns show scale. ConceptSearch rows are descriptive matches, while task rows use the occupation-task agreement procedure.",F,ae,K,Se,X,Gt="Compare to O*NET",nt,N,Ae='<a href="#profile-contents">Profile Contents</a>',Re,fe,Ct='<a href="#overview" class="hover:underline">Overview</a> <a href="#tasks" class="hover:underline">Tasks</a> <a href="#work-activities" class="hover:underline">Work Activities</a> <a href="#skills" class="hover:underline">Skills</a> <a href="#tools" class="hover:underline">Tools</a> <a href="#technologies" class="hover:underline">Technologies</a> <a href="#education" class="hover:underline">Education</a> <a href="#benefits" class="hover:underline">Benefits</a> <a href="#data" class="hover:underline">Data</a>',rt,Y,Ge="This profile is the USAJOBS occupation posting profile for the selected 8-digit O*NET-SOC occupation. Task tables use profiles after review exclusions; RCA highlights tasks that are distinctive for the occupation, while the frequent-task table shows the tasks most prevalent in postings. Tools, technologies, education, and benefits are supporting concept features, not task agreement evidence.",Ce,me,Ht="<strong>Shared terms.</strong> % posts = share of selected occupation postings with the row. RCA = row share in the selected occupation / row share in USAJOBS overall. In O*NET = 1 when O*NET lists the selected occupation-task pair.",ct,B,He='<a href="#overview">Overview</a>',Oe,Ee,ne,Ot='<a href="#table-1-selected-usajobs-occupation-overview">Table 1. Selected USAJOBS occupation overview</a>',pe,Z,Me,qe,re,Et='<a href="#figure-uo-1-posting-volume">Figure UO-1. Posting volume</a>',be,ee,Pe,ke,Mt="Monthly posting counts show how much evidence supports the selected occupation’s profile.",_t,V,Ue='<a href="#tasks">Tasks</a>',Le,$e,qt='RCA is revealed comparative advantage; see <a href="/us-lmi/methodology#revealed-comparative-advantage-rca" class="markdown">methods</a>.',ut,te,Je="<strong>Generic tasks removed.</strong> These task tables omit rows labeled <code>general</code> in <code>combined_task_allocation_task_categories.csv</code>, so the profile focuses on more occupation-specific task signals.",De,ce,Pt='<a href="#most-distinctive-tasks-rca">Most Distinctive Tasks (RCA)</a>',ft,ie,W,mt='<a href="#table-2-distinctive-tasks-by-rca-for-the-selected-usajobs-occupation">Table 2. Distinctive tasks by RCA for the selected USAJOBS occupation</a>',pt,de,bt,z,Ie='<a href="#most-frequent-tasks">Most Frequent Tasks</a>',xe,Fe,_e,Ut='<a href="#table-3-frequent-tasks-for-the-selected-usajobs-occupation">Table 3. Frequent tasks for the selected USAJOBS occupation</a>',ve,se,Ne,ue,Lt='<a href="#work-activities">Work Activities</a>',kt,le,Q,$t='<a href="#table-4-work-activities-for-the-selected-usajobs-occupation">Table 4. Work Activities for the selected USAJOBS occupation</a>',dt,we,vt,Te,S='<a href="#skills">Skills</a>',Jt,Ve,Rs='<a href="#esco-skills">ESCO Skills</a>',Wt,Dt,We,Gs='<a href="#table-5-extracted-skills-for-the-selected-usajobs-occupation">Table 5. Extracted skills for the selected USAJOBS occupation</a>',zt,wt,Qt,ze,Cs='<a href="#crosswalked-onet-skills-from-work-activities">Crosswalked O*NET Skills (from Work Activities)</a>',Kt,It,Qe,Hs='<a href="#table-6-crosswalked-onet-skills-for-the-selected-usajobs-occupation">Table 6. Crosswalked O*NET skills for the selected USAJOBS occupation</a>',Xt,gt,Yt,Ke,Os='<a href="#tools">Tools</a>',Zt,xt,Xe,Es='<a href="#table-7-tools-for-the-selected-usajobs-occupation">Table 7. Tools for the selected USAJOBS occupation</a>',es,jt,ts,Ye,Ms='<a href="#technologies">Technologies</a>',ss,Ft,Ze,qs='<a href="#table-8-technology-concepts-for-the-selected-usajobs-occupation">Table 8. Technology concepts for the selected USAJOBS occupation</a>',os,yt,as,et,Ps='<a href="#education">Education</a>',is,Nt,tt,Us='<a href="#table-9-education-concepts-for-the-selected-usajobs-occupation">Table 9. Education concepts for the selected USAJOBS occupation</a>',ls,ht,ns,st,Ls='<a href="#benefits">Benefits</a>',rs,Bt,ot,Js='<a href="#table-10-benefit-concepts-for-the-selected-usajobs-occupation">Table 10. Benefit concepts for the selected USAJOBS occupation</a>',cs,Tt,_s,at,Ds='<a href="#data">Data</a>',us,St,Is='Unreviewed links are retained unless blocklisted; see <a href="/us-lmi/methodology#applying-review-exclusions-to-profiles" class="markdown">how review exclusions are applied</a>.',fs,At,xs='Sources used here: <code class="markdown">AGGR_OccupationTaskSignatures</code>, <code class="markdown">AGGR_USAJobsOccupationWAProfile</code>, <code class="markdown">AGGR_USAJobsOccupationSkillProfile</code>, <code class="markdown">AGGR_USAJobsOccupationOnetSkillProfile</code>, <code class="markdown">AGGR_OnetOccupationSkills</code>, and <code class="markdown">AGGR_USAJobsEntityConceptProfile</code>. The task profile and crosswalked O*NET skill sources read <code class="markdown">JaatTasks_Validated</code>; crosswalked O*NET skills use the O*NET 27.2 Skills-to-Work-Activities crosswalk.',ms,Rt,Fs='Evidence path: RCA is defined in <a href="/us-lmi/methodology#revealed-comparative-advantage-rca" class="markdown">Methods</a>. USAJOBS source and agreement artifacts are listed in <a href="/us-lmi/methodology/audit-trail" class="markdown">Agreement And Audit Trail</a>.',ps,$s,Ns,it=typeof G<"u"&&G.title&&G.hide_title!==!0&&Oo();function ro(e,l){return typeof G<"u"&&G.title?Mo:Eo}let Vt=ro()(f),lt=typeof G=="object"&&qo(),H=f[1]&&Ks(f);K=new Ro({props:{data:f[1],name:"usajobs_occ",value:"occ8",label:"soc_title",defaultValue:"15-1252.00",title:"Occupation"}});let O=f[2]&&Xs(f);Z=new Be({props:{data:f[2],rows:"1",$$slots:{default:[Lo]},$$scope:{ctx:f}}});let E=f[3]&&Ys(f);ee=new Co({props:{data:f[3],x:"month_start",y:"n_postings",yAxisTitle:"Postings",title:"Posting volume"}});let M=f[4]&&Zs(f);de=new Be({props:{data:f[4],rowsPerPage:"10",$$slots:{default:[Jo]},$$scope:{ctx:f}}});let q=f[5]&&eo(f);se=new Be({props:{data:f[5],rowsPerPage:"10",$$slots:{default:[Do]},$$scope:{ctx:f}}});let P=f[6]&&to(f);we=new Be({props:{data:f[6],rowsPerPage:"25",$$slots:{default:[Io]},$$scope:{ctx:f}}});let U=f[7]&&so(f);wt=new Be({props:{data:f[7],rowsPerPage:"25",$$slots:{default:[xo]},$$scope:{ctx:f}}});let L=f[8]&&oo(f);gt=new Be({props:{data:f[8],groupBy:"skill_name",rowsPerPage:"25",$$slots:{default:[Fo]},$$scope:{ctx:f}}});let J=f[9]&&ao(f);jt=new Be({props:{data:f[9],rowsPerPage:"10",$$slots:{default:[No]},$$scope:{ctx:f}}});let D=f[10]&&io(f);yt=new Be({props:{data:f[10],rowsPerPage:"10",$$slots:{default:[Bo]},$$scope:{ctx:f}}});let I=f[11]&&lo(f);ht=new Be({props:{data:f[11],rowsPerPage:"10",$$slots:{default:[Vo]},$$scope:{ctx:f}}});let x=f[12]&&no(f);return Tt=new Be({props:{data:f[12],rowsPerPage:"10",$$slots:{default:[Wo]},$$scope:{ctx:f}}}),{c(){it&&it.c(),s=b(),Vt.c(),i=T("meta"),t=T("meta"),lt&&lt.c(),c=ks(),r=b(),n=T("p"),n.textContent=a,d=b(),o=T("div"),o.innerHTML=y,F=b(),H&&H.c(),ae=b(),j(K.$$.fragment),Se=b(),X=T("a"),X.textContent=Gt,nt=b(),N=T("h2"),N.innerHTML=Ae,Re=b(),fe=T("div"),fe.innerHTML=Ct,rt=b(),Y=T("p"),Y.textContent=Ge,Ce=b(),me=T("div"),me.innerHTML=Ht,ct=b(),B=T("h2"),B.innerHTML=He,Oe=b(),O&&O.c(),Ee=b(),ne=T("h3"),ne.innerHTML=Ot,pe=b(),j(Z.$$.fragment),Me=b(),E&&E.c(),qe=b(),re=T("h3"),re.innerHTML=Et,be=b(),j(ee.$$.fragment),Pe=b(),ke=T("p"),ke.textContent=Mt,_t=b(),V=T("h2"),V.innerHTML=Ue,Le=b(),$e=T("p"),$e.innerHTML=qt,ut=b(),te=T("div"),te.innerHTML=Je,De=b(),ce=T("h3"),ce.innerHTML=Pt,ft=b(),M&&M.c(),ie=b(),W=T("h3"),W.innerHTML=mt,pt=b(),j(de.$$.fragment),bt=b(),z=T("h3"),z.innerHTML=Ie,xe=b(),q&&q.c(),Fe=b(),_e=T("h3"),_e.innerHTML=Ut,ve=b(),j(se.$$.fragment),Ne=b(),ue=T("h2"),ue.innerHTML=Lt,kt=b(),P&&P.c(),le=b(),Q=T("h3"),Q.innerHTML=$t,dt=b(),j(we.$$.fragment),vt=b(),Te=T("h2"),Te.innerHTML=S,Jt=b(),Ve=T("h3"),Ve.innerHTML=Rs,Wt=b(),U&&U.c(),Dt=b(),We=T("h3"),We.innerHTML=Gs,zt=b(),j(wt.$$.fragment),Qt=b(),ze=T("h3"),ze.innerHTML=Cs,Kt=b(),L&&L.c(),It=b(),Qe=T("h3"),Qe.innerHTML=Hs,Xt=b(),j(gt.$$.fragment),Yt=b(),Ke=T("h2"),Ke.innerHTML=Os,Zt=b(),J&&J.c(),xt=b(),Xe=T("h3"),Xe.innerHTML=Es,es=b(),j(jt.$$.fragment),ts=b(),Ye=T("h2"),Ye.innerHTML=Ms,ss=b(),D&&D.c(),Ft=b(),Ze=T("h3"),Ze.innerHTML=qs,os=b(),j(yt.$$.fragment),as=b(),et=T("h2"),et.innerHTML=Ps,is=b(),I&&I.c(),Nt=b(),tt=T("h3"),tt.innerHTML=Us,ls=b(),j(ht.$$.fragment),ns=b(),st=T("h2"),st.innerHTML=Ls,rs=b(),x&&x.c(),Bt=b(),ot=T("h3"),ot.innerHTML=Js,cs=b(),j(Tt.$$.fragment),_s=b(),at=T("h2"),at.innerHTML=Ds,us=b(),St=T("p"),St.innerHTML=Is,fs=b(),At=T("p"),At.innerHTML=xs,ms=b(),Rt=T("p"),Rt.innerHTML=Fs,this.h()},l(e){it&&it.l(e),s=p(e);const l=fo("svelte-2igo1p",document.head);Vt.l(l),i=h(l,"META",{name:!0,content:!0}),t=h(l,"META",{name:!0,content:!0}),lt&&lt.l(l),c=ks(),l.forEach(_),r=p(e),n=h(e,"P",{class:!0,"data-svelte-h":!0}),A(n)!=="svelte-i9vd9j"&&(n.textContent=a),d=p(e),o=h(e,"DIV",{class:!0,"data-svelte-h":!0}),A(o)!=="svelte-i33538"&&(o.innerHTML=y),F=p(e),H&&H.l(e),ae=p(e),g(K.$$.fragment,e),Se=p(e),X=h(e,"A",{href:!0,target:!0,rel:!0,class:!0,"data-svelte-h":!0}),A(X)!=="svelte-1j7w8mf"&&(X.textContent=Gt),nt=p(e),N=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(N)!=="svelte-1dmnoaj"&&(N.innerHTML=Ae),Re=p(e),fe=h(e,"DIV",{class:!0,"data-svelte-h":!0}),A(fe)!=="svelte-t5k8nl"&&(fe.innerHTML=Ct),rt=p(e),Y=h(e,"P",{class:!0,"data-svelte-h":!0}),A(Y)!=="svelte-8tf981"&&(Y.textContent=Ge),Ce=p(e),me=h(e,"DIV",{class:!0,"data-svelte-h":!0}),A(me)!=="svelte-1wnnmwl"&&(me.innerHTML=Ht),ct=p(e),B=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(B)!=="svelte-16zqni9"&&(B.innerHTML=He),Oe=p(e),O&&O.l(e),Ee=p(e),ne=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(ne)!=="svelte-zd7swv"&&(ne.innerHTML=Ot),pe=p(e),g(Z.$$.fragment,e),Me=p(e),E&&E.l(e),qe=p(e),re=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(re)!=="svelte-o75b16"&&(re.innerHTML=Et),be=p(e),g(ee.$$.fragment,e),Pe=p(e),ke=h(e,"P",{class:!0,"data-svelte-h":!0}),A(ke)!=="svelte-19npkvl"&&(ke.textContent=Mt),_t=p(e),V=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(V)!=="svelte-161blmm"&&(V.innerHTML=Ue),Le=p(e),$e=h(e,"P",{class:!0,"data-svelte-h":!0}),A($e)!=="svelte-1kr2ren"&&($e.innerHTML=qt),ut=p(e),te=h(e,"DIV",{class:!0,"data-svelte-h":!0}),A(te)!=="svelte-llt44u"&&(te.innerHTML=Je),De=p(e),ce=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(ce)!=="svelte-vyj2ku"&&(ce.innerHTML=Pt),ft=p(e),M&&M.l(e),ie=p(e),W=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(W)!=="svelte-1u5pvqy"&&(W.innerHTML=mt),pt=p(e),g(de.$$.fragment,e),bt=p(e),z=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(z)!=="svelte-1c63z5h"&&(z.innerHTML=Ie),xe=p(e),q&&q.l(e),Fe=p(e),_e=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(_e)!=="svelte-s6f4ii"&&(_e.innerHTML=Ut),ve=p(e),g(se.$$.fragment,e),Ne=p(e),ue=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(ue)!=="svelte-x7f80k"&&(ue.innerHTML=Lt),kt=p(e),P&&P.l(e),le=p(e),Q=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Q)!=="svelte-5gklql"&&(Q.innerHTML=$t),dt=p(e),g(we.$$.fragment,e),vt=p(e),Te=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(Te)!=="svelte-5ttn72"&&(Te.innerHTML=S),Jt=p(e),Ve=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Ve)!=="svelte-1nrxbp0"&&(Ve.innerHTML=Rs),Wt=p(e),U&&U.l(e),Dt=p(e),We=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(We)!=="svelte-nym5cu"&&(We.innerHTML=Gs),zt=p(e),g(wt.$$.fragment,e),Qt=p(e),ze=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(ze)!=="svelte-hxcjdt"&&(ze.innerHTML=Cs),Kt=p(e),L&&L.l(e),It=p(e),Qe=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Qe)!=="svelte-q2h1x7"&&(Qe.innerHTML=Hs),Xt=p(e),g(gt.$$.fragment,e),Yt=p(e),Ke=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(Ke)!=="svelte-lc41ol"&&(Ke.innerHTML=Os),Zt=p(e),J&&J.l(e),xt=p(e),Xe=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Xe)!=="svelte-smalrx"&&(Xe.innerHTML=Es),es=p(e),g(jt.$$.fragment,e),ts=p(e),Ye=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(Ye)!=="svelte-78v6ii"&&(Ye.innerHTML=Ms),ss=p(e),D&&D.l(e),Ft=p(e),Ze=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(Ze)!=="svelte-mzcs6u"&&(Ze.innerHTML=qs),os=p(e),g(yt.$$.fragment,e),as=p(e),et=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(et)!=="svelte-25sv0q"&&(et.innerHTML=Ps),is=p(e),I&&I.l(e),Nt=p(e),tt=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(tt)!=="svelte-1xfgu95"&&(tt.innerHTML=Us),ls=p(e),g(ht.$$.fragment,e),ns=p(e),st=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(st)!=="svelte-dfu8xo"&&(st.innerHTML=Ls),rs=p(e),x&&x.l(e),Bt=p(e),ot=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),A(ot)!=="svelte-fsjkw8"&&(ot.innerHTML=Js),cs=p(e),g(Tt.$$.fragment,e),_s=p(e),at=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),A(at)!=="svelte-1ouuc1c"&&(at.innerHTML=Ds),us=p(e),St=h(e,"P",{class:!0,"data-svelte-h":!0}),A(St)!=="svelte-1nzx8yf"&&(St.innerHTML=Is),fs=p(e),At=h(e,"P",{class:!0,"data-svelte-h":!0}),A(At)!=="svelte-1x4z3m4"&&(At.innerHTML=xs),ms=p(e),Rt=h(e,"P",{class:!0,"data-svelte-h":!0}),A(Rt)!=="svelte-1iujzj5"&&(Rt.innerHTML=Fs),this.h()},h(){k(i,"name","twitter:card"),k(i,"content","summary_large_image"),k(t,"name","twitter:site"),k(t,"content","@evidence_dev"),k(n,"class","markdown"),k(o,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),k(X,"href","https://www.onetonline.org/link/summary/15-1252.00"),k(X,"target","_blank"),k(X,"rel","noopener"),k(X,"class","border border-base-300 rounded-md px-3 py-1 text-sm hover:bg-base-200"),k(N,"class","markdown"),k(N,"id","profile-contents"),k(fe,"class","flex flex-wrap gap-x-4 gap-y-2 text-sm border-y border-gray-200 py-3 mb-6"),k(Y,"class","markdown"),k(me,"class","text-sm my-3"),k(B,"class","markdown"),k(B,"id","overview"),k(ne,"class","markdown"),k(ne,"id","table-1-selected-usajobs-occupation-overview"),k(re,"class","markdown"),k(re,"id","figure-uo-1-posting-volume"),k(ke,"class","text-sm text-gray-600 mt-2"),k(V,"class","markdown"),k(V,"id","tasks"),k($e,"class","markdown"),k(te,"class","border-l-4 border-amber-500 bg-amber-50 px-4 py-3 my-4 text-sm text-gray-700"),k(ce,"class","markdown"),k(ce,"id","most-distinctive-tasks-rca"),k(W,"class","markdown"),k(W,"id","table-2-distinctive-tasks-by-rca-for-the-selected-usajobs-occupation"),k(z,"class","markdown"),k(z,"id","most-frequent-tasks"),k(_e,"class","markdown"),k(_e,"id","table-3-frequent-tasks-for-the-selected-usajobs-occupation"),k(ue,"class","markdown"),k(ue,"id","work-activities"),k(Q,"class","markdown"),k(Q,"id","table-4-work-activities-for-the-selected-usajobs-occupation"),k(Te,"class","markdown"),k(Te,"id","skills"),k(Ve,"class","markdown"),k(Ve,"id","esco-skills"),k(We,"class","markdown"),k(We,"id","table-5-extracted-skills-for-the-selected-usajobs-occupation"),k(ze,"class","markdown"),k(ze,"id","crosswalked-onet-skills-from-work-activities"),k(Qe,"class","markdown"),k(Qe,"id","table-6-crosswalked-onet-skills-for-the-selected-usajobs-occupation"),k(Ke,"class","markdown"),k(Ke,"id","tools"),k(Xe,"class","markdown"),k(Xe,"id","table-7-tools-for-the-selected-usajobs-occupation"),k(Ye,"class","markdown"),k(Ye,"id","technologies"),k(Ze,"class","markdown"),k(Ze,"id","table-8-technology-concepts-for-the-selected-usajobs-occupation"),k(et,"class","markdown"),k(et,"id","education"),k(tt,"class","markdown"),k(tt,"id","table-9-education-concepts-for-the-selected-usajobs-occupation"),k(st,"class","markdown"),k(st,"id","benefits"),k(ot,"class","markdown"),k(ot,"id","table-10-benefit-concepts-for-the-selected-usajobs-occupation"),k(at,"class","markdown"),k(at,"id","data"),k(St,"class","markdown"),k(At,"class","markdown"),k(Rt,"class","markdown")},m(e,l){it&&it.m(e,l),u(e,s,l),Vt.m(document.head,null),bs(document.head,i),bs(document.head,t),lt&&lt.m(document.head,null),bs(document.head,c),u(e,r,l),u(e,n,l),u(e,d,l),u(e,o,l),u(e,F,l),H&&H.m(e,l),u(e,ae,l),w(K,e,l),u(e,Se,l),u(e,X,l),u(e,nt,l),u(e,N,l),u(e,Re,l),u(e,fe,l),u(e,rt,l),u(e,Y,l),u(e,Ce,l),u(e,me,l),u(e,ct,l),u(e,B,l),u(e,Oe,l),O&&O.m(e,l),u(e,Ee,l),u(e,ne,l),u(e,pe,l),w(Z,e,l),u(e,Me,l),E&&E.m(e,l),u(e,qe,l),u(e,re,l),u(e,be,l),w(ee,e,l),u(e,Pe,l),u(e,ke,l),u(e,_t,l),u(e,V,l),u(e,Le,l),u(e,$e,l),u(e,ut,l),u(e,te,l),u(e,De,l),u(e,ce,l),u(e,ft,l),M&&M.m(e,l),u(e,ie,l),u(e,W,l),u(e,pt,l),w(de,e,l),u(e,bt,l),u(e,z,l),u(e,xe,l),q&&q.m(e,l),u(e,Fe,l),u(e,_e,l),u(e,ve,l),w(se,e,l),u(e,Ne,l),u(e,ue,l),u(e,kt,l),P&&P.m(e,l),u(e,le,l),u(e,Q,l),u(e,dt,l),w(we,e,l),u(e,vt,l),u(e,Te,l),u(e,Jt,l),u(e,Ve,l),u(e,Wt,l),U&&U.m(e,l),u(e,Dt,l),u(e,We,l),u(e,zt,l),w(wt,e,l),u(e,Qt,l),u(e,ze,l),u(e,Kt,l),L&&L.m(e,l),u(e,It,l),u(e,Qe,l),u(e,Xt,l),w(gt,e,l),u(e,Yt,l),u(e,Ke,l),u(e,Zt,l),J&&J.m(e,l),u(e,xt,l),u(e,Xe,l),u(e,es,l),w(jt,e,l),u(e,ts,l),u(e,Ye,l),u(e,ss,l),D&&D.m(e,l),u(e,Ft,l),u(e,Ze,l),u(e,os,l),w(yt,e,l),u(e,as,l),u(e,et,l),u(e,is,l),I&&I.m(e,l),u(e,Nt,l),u(e,tt,l),u(e,ls,l),w(ht,e,l),u(e,ns,l),u(e,st,l),u(e,rs,l),x&&x.m(e,l),u(e,Bt,l),u(e,ot,l),u(e,cs,l),w(Tt,e,l),u(e,_s,l),u(e,at,l),u(e,us,l),u(e,St,l),u(e,fs,l),u(e,At,l),u(e,ms,l),u(e,Rt,l),ps=!0,$s||(Ns=_o(X,"click",uo(f[64])),$s=!0)},p(e,l){typeof G<"u"&&G.title&&G.hide_title!==!0&&it.p(e,l),Vt.p(e,l),typeof G=="object"&&lt.p(e,l),e[1]?H?(H.p(e,l),l[0]&2&&m(H,1)):(H=Ks(e),H.c(),m(H,1),H.m(ae.parentNode,ae)):H&&(je(),$(H,1,1,()=>{H=null}),ge());const Bs={};l[0]&2&&(Bs.data=e[1]),K.$set(Bs),e[2]?O?(O.p(e,l),l[0]&4&&m(O,1)):(O=Xs(e),O.c(),m(O,1),O.m(Ee.parentNode,Ee)):O&&(je(),$(O,1,1,()=>{O=null}),ge());const ds={};l[0]&4&&(ds.data=e[2]),l[2]&8388608&&(ds.$$scope={dirty:l,ctx:e}),Z.$set(ds),e[3]?E?(E.p(e,l),l[0]&8&&m(E,1)):(E=Ys(e),E.c(),m(E,1),E.m(qe.parentNode,qe)):E&&(je(),$(E,1,1,()=>{E=null}),ge());const Vs={};l[0]&8&&(Vs.data=e[3]),ee.$set(Vs),e[4]?M?(M.p(e,l),l[0]&16&&m(M,1)):(M=Zs(e),M.c(),m(M,1),M.m(ie.parentNode,ie)):M&&(je(),$(M,1,1,()=>{M=null}),ge());const vs={};l[0]&16&&(vs.data=e[4]),l[2]&8388608&&(vs.$$scope={dirty:l,ctx:e}),de.$set(vs),e[5]?q?(q.p(e,l),l[0]&32&&m(q,1)):(q=eo(e),q.c(),m(q,1),q.m(Fe.parentNode,Fe)):q&&(je(),$(q,1,1,()=>{q=null}),ge());const ws={};l[0]&32&&(ws.data=e[5]),l[2]&8388608&&(ws.$$scope={dirty:l,ctx:e}),se.$set(ws),e[6]?P?(P.p(e,l),l[0]&64&&m(P,1)):(P=to(e),P.c(),m(P,1),P.m(le.parentNode,le)):P&&(je(),$(P,1,1,()=>{P=null}),ge());const gs={};l[0]&64&&(gs.data=e[6]),l[2]&8388608&&(gs.$$scope={dirty:l,ctx:e}),we.$set(gs),e[7]?U?(U.p(e,l),l[0]&128&&m(U,1)):(U=so(e),U.c(),m(U,1),U.m(Dt.parentNode,Dt)):U&&(je(),$(U,1,1,()=>{U=null}),ge());const js={};l[0]&128&&(js.data=e[7]),l[2]&8388608&&(js.$$scope={dirty:l,ctx:e}),wt.$set(js),e[8]?L?(L.p(e,l),l[0]&256&&m(L,1)):(L=oo(e),L.c(),m(L,1),L.m(It.parentNode,It)):L&&(je(),$(L,1,1,()=>{L=null}),ge());const ys={};l[0]&256&&(ys.data=e[8]),l[2]&8388608&&(ys.$$scope={dirty:l,ctx:e}),gt.$set(ys),e[9]?J?(J.p(e,l),l[0]&512&&m(J,1)):(J=ao(e),J.c(),m(J,1),J.m(xt.parentNode,xt)):J&&(je(),$(J,1,1,()=>{J=null}),ge());const hs={};l[0]&512&&(hs.data=e[9]),l[2]&8388608&&(hs.$$scope={dirty:l,ctx:e}),jt.$set(hs),e[10]?D?(D.p(e,l),l[0]&1024&&m(D,1)):(D=io(e),D.c(),m(D,1),D.m(Ft.parentNode,Ft)):D&&(je(),$(D,1,1,()=>{D=null}),ge());const Ts={};l[0]&1024&&(Ts.data=e[10]),l[2]&8388608&&(Ts.$$scope={dirty:l,ctx:e}),yt.$set(Ts),e[11]?I?(I.p(e,l),l[0]&2048&&m(I,1)):(I=lo(e),I.c(),m(I,1),I.m(Nt.parentNode,Nt)):I&&(je(),$(I,1,1,()=>{I=null}),ge());const Ss={};l[0]&2048&&(Ss.data=e[11]),l[2]&8388608&&(Ss.$$scope={dirty:l,ctx:e}),ht.$set(Ss),e[12]?x?(x.p(e,l),l[0]&4096&&m(x,1)):(x=no(e),x.c(),m(x,1),x.m(Bt.parentNode,Bt)):x&&(je(),$(x,1,1,()=>{x=null}),ge());const As={};l[0]&4096&&(As.data=e[12]),l[2]&8388608&&(As.$$scope={dirty:l,ctx:e}),Tt.$set(As)},i(e){ps||(m(H),m(K.$$.fragment,e),m(O),m(Z.$$.fragment,e),m(E),m(ee.$$.fragment,e),m(M),m(de.$$.fragment,e),m(q),m(se.$$.fragment,e),m(P),m(we.$$.fragment,e),m(U),m(wt.$$.fragment,e),m(L),m(gt.$$.fragment,e),m(J),m(jt.$$.fragment,e),m(D),m(yt.$$.fragment,e),m(I),m(ht.$$.fragment,e),m(x),m(Tt.$$.fragment,e),ps=!0)},o(e){$(H),$(K.$$.fragment,e),$(O),$(Z.$$.fragment,e),$(E),$(ee.$$.fragment,e),$(M),$(de.$$.fragment,e),$(q),$(se.$$.fragment,e),$(P),$(we.$$.fragment,e),$(U),$(wt.$$.fragment,e),$(L),$(gt.$$.fragment,e),$(J),$(jt.$$.fragment,e),$(D),$(yt.$$.fragment,e),$(I),$(ht.$$.fragment,e),$(x),$(Tt.$$.fragment,e),ps=!1},d(e){e&&(_(s),_(r),_(n),_(d),_(o),_(F),_(ae),_(Se),_(X),_(nt),_(N),_(Re),_(fe),_(rt),_(Y),_(Ce),_(me),_(ct),_(B),_(Oe),_(Ee),_(ne),_(pe),_(Me),_(qe),_(re),_(be),_(Pe),_(ke),_(_t),_(V),_(Le),_($e),_(ut),_(te),_(De),_(ce),_(ft),_(ie),_(W),_(pt),_(bt),_(z),_(xe),_(Fe),_(_e),_(ve),_(Ne),_(ue),_(kt),_(le),_(Q),_(dt),_(vt),_(Te),_(Jt),_(Ve),_(Wt),_(Dt),_(We),_(zt),_(Qt),_(ze),_(Kt),_(It),_(Qe),_(Xt),_(Yt),_(Ke),_(Zt),_(xt),_(Xe),_(es),_(ts),_(Ye),_(ss),_(Ft),_(Ze),_(os),_(as),_(et),_(is),_(Nt),_(tt),_(ls),_(ns),_(st),_(rs),_(Bt),_(ot),_(cs),_(_s),_(at),_(us),_(St),_(fs),_(At),_(ms),_(Rt)),it&&it.d(e),Vt.d(e),_(i),_(t),lt&&lt.d(e),_(c),H&&H.d(e),v(K,e),O&&O.d(e),v(Z,e),E&&E.d(e),v(ee,e),M&&M.d(e),v(de,e),q&&q.d(e),v(se,e),P&&P.d(e),v(we,e),U&&U.d(e),v(wt,e),L&&L.d(e),v(gt,e),J&&J.d(e),v(jt,e),D&&D.d(e),v(yt,e),I&&I.d(e),v(ht,e),x&&x.d(e),v(Tt,e),$s=!1,Ns()}}}const G={title:"Occupational Posting Profile"};function Qo(f,s,i){let t,c;Ws(f,Go,S=>i(63,t=S)),Ws(f,Qs,S=>i(69,c=S));let{data:r}=s,{data:n={},customFormattingSettings:a,__db:d,inputs:o}=r;mo(Qs,c="26642c68f7425ee6a3f47c16c31e5bf1",c);let y=ho(yo(o));po(y.subscribe(S=>i(0,o=S))),bo(Ao,{getCustomFormats:()=>a.customFormats||[]});const F=(S,Jt)=>Ho(d.query,S,{query_name:Jt});To(F),t.params,ko(()=>!0);let ae={initialData:void 0,initialError:void 0},K=C`select distinct occ8, soc_title
from usajobs.AGGR_OccupationTaskSignatures
order by soc_title`,Se=`select distinct occ8, soc_title
from usajobs.AGGR_OccupationTaskSignatures
order by soc_title`;n.usajobs_occ_options_data&&(n.usajobs_occ_options_data instanceof Error?ae.initialError=n.usajobs_occ_options_data:ae.initialData=n.usajobs_occ_options_data,n.usajobs_occ_options_columns&&(ae.knownColumns=n.usajobs_occ_options_columns));let X,Gt=!1;const nt=ye.createReactive({callback:S=>{i(1,X=S)},execFn:F},{id:"usajobs_occ_options",...ae});nt(Se,{noResolve:K,...ae}),globalThis[Symbol.for("usajobs_occ_options")]={get value(){return X}};let N={initialData:void 0,initialError:void 0},Ae=C`select
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
group by 1`;n.usajobs_occ_overview_data&&(n.usajobs_occ_overview_data instanceof Error?N.initialError=n.usajobs_occ_overview_data:N.initialData=n.usajobs_occ_overview_data,n.usajobs_occ_overview_columns&&(N.knownColumns=n.usajobs_occ_overview_columns));let fe,Ct=!1;const rt=ye.createReactive({callback:S=>{i(2,fe=S)},execFn:F},{id:"usajobs_occ_overview",...N});rt(Re,{noResolve:Ae,...N}),globalThis[Symbol.for("usajobs_occ_overview")]={get value(){return fe}};let Y={initialData:void 0,initialError:void 0},Ge=C`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsOccupationPostingVolume
where occ8 = '${o.usajobs_occ.value}'
order by month_start`,Ce=`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsOccupationPostingVolume
where occ8 = '${o.usajobs_occ.value}'
order by month_start`;n.usajobs_occ_posting_volume_data&&(n.usajobs_occ_posting_volume_data instanceof Error?Y.initialError=n.usajobs_occ_posting_volume_data:Y.initialData=n.usajobs_occ_posting_volume_data,n.usajobs_occ_posting_volume_columns&&(Y.knownColumns=n.usajobs_occ_posting_volume_columns));let me,Ht=!1;const ct=ye.createReactive({callback:S=>{i(3,me=S)},execFn:F},{id:"usajobs_occ_posting_volume",...Y});ct(Ce,{noResolve:Ge,...Y}),globalThis[Symbol.for("usajobs_occ_posting_volume")]={get value(){return me}};let B={initialData:void 0,initialError:void 0},He=C`select
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
order by occ_rank`;n.usajobs_occ_tasks_rca_data&&(n.usajobs_occ_tasks_rca_data instanceof Error?B.initialError=n.usajobs_occ_tasks_rca_data:B.initialData=n.usajobs_occ_tasks_rca_data,n.usajobs_occ_tasks_rca_columns&&(B.knownColumns=n.usajobs_occ_tasks_rca_columns));let Ee,ne=!1;const Ot=ye.createReactive({callback:S=>{i(4,Ee=S)},execFn:F},{id:"usajobs_occ_tasks_rca",...B});Ot(Oe,{noResolve:He,...B}),globalThis[Symbol.for("usajobs_occ_tasks_rca")]={get value(){return Ee}};let pe={initialData:void 0,initialError:void 0},Z=C`select
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
order by volume_rank`;n.usajobs_occ_tasks_volume_data&&(n.usajobs_occ_tasks_volume_data instanceof Error?pe.initialError=n.usajobs_occ_tasks_volume_data:pe.initialData=n.usajobs_occ_tasks_volume_data,n.usajobs_occ_tasks_volume_columns&&(pe.knownColumns=n.usajobs_occ_tasks_volume_columns));let qe,re=!1;const Et=ye.createReactive({callback:S=>{i(5,qe=S)},execFn:F},{id:"usajobs_occ_tasks_volume",...pe});Et(Me,{noResolve:Z,...pe}),globalThis[Symbol.for("usajobs_occ_tasks_volume")]={get value(){return qe}};let be={initialData:void 0,initialError:void 0},ee=C`select
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
order by wa_rank`;n.usajobs_occ_work_activities_data&&(n.usajobs_occ_work_activities_data instanceof Error?be.initialError=n.usajobs_occ_work_activities_data:be.initialData=n.usajobs_occ_work_activities_data,n.usajobs_occ_work_activities_columns&&(be.knownColumns=n.usajobs_occ_work_activities_columns));let ke,Mt=!1;const _t=ye.createReactive({callback:S=>{i(6,ke=S)},execFn:F},{id:"usajobs_occ_work_activities",...be});_t(Pe,{noResolve:ee,...be}),globalThis[Symbol.for("usajobs_occ_work_activities")]={get value(){return ke}};let V={initialData:void 0,initialError:void 0},Ue=C`select
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
order by skill_rank`;n.usajobs_occ_skills_data&&(n.usajobs_occ_skills_data instanceof Error?V.initialError=n.usajobs_occ_skills_data:V.initialData=n.usajobs_occ_skills_data,n.usajobs_occ_skills_columns&&(V.knownColumns=n.usajobs_occ_skills_columns));let $e,qt=!1;const ut=ye.createReactive({callback:S=>{i(7,$e=S)},execFn:F},{id:"usajobs_occ_skills",...V});ut(Le,{noResolve:Ue,...V}),globalThis[Symbol.for("usajobs_occ_skills")]={get value(){return $e}};let te={initialData:void 0,initialError:void 0},Je=C`select
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
order by skill_rank`;n.usajobs_occ_onet_skills_data&&(n.usajobs_occ_onet_skills_data instanceof Error?te.initialError=n.usajobs_occ_onet_skills_data:te.initialData=n.usajobs_occ_onet_skills_data,n.usajobs_occ_onet_skills_columns&&(te.knownColumns=n.usajobs_occ_onet_skills_columns));let ce,Pt=!1;const ft=ye.createReactive({callback:S=>{i(8,ce=S)},execFn:F},{id:"usajobs_occ_onet_skills",...te});ft(De,{noResolve:Je,...te}),globalThis[Symbol.for("usajobs_occ_onet_skills")]={get value(){return ce}};let ie={initialData:void 0,initialError:void 0},W=C`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'tools'
order by concept_rank`,mt=`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'tools'
order by concept_rank`;n.usajobs_occ_tools_data&&(n.usajobs_occ_tools_data instanceof Error?ie.initialError=n.usajobs_occ_tools_data:ie.initialData=n.usajobs_occ_tools_data,n.usajobs_occ_tools_columns&&(ie.knownColumns=n.usajobs_occ_tools_columns));let pt,de=!1;const bt=ye.createReactive({callback:S=>{i(9,pt=S)},execFn:F},{id:"usajobs_occ_tools",...ie});bt(mt,{noResolve:W,...ie}),globalThis[Symbol.for("usajobs_occ_tools")]={get value(){return pt}};let z={initialData:void 0,initialError:void 0},Ie=C`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'technology'
order by concept_rank`,xe=`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'technology'
order by concept_rank`;n.usajobs_occ_technology_data&&(n.usajobs_occ_technology_data instanceof Error?z.initialError=n.usajobs_occ_technology_data:z.initialData=n.usajobs_occ_technology_data,n.usajobs_occ_technology_columns&&(z.knownColumns=n.usajobs_occ_technology_columns));let Fe,_e=!1;const Ut=ye.createReactive({callback:S=>{i(10,Fe=S)},execFn:F},{id:"usajobs_occ_technology",...z});Ut(xe,{noResolve:Ie,...z}),globalThis[Symbol.for("usajobs_occ_technology")]={get value(){return Fe}};let ve={initialData:void 0,initialError:void 0},se=C`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'education'
order by concept_rank`,Ne=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'education'
order by concept_rank`;n.usajobs_occ_education_data&&(n.usajobs_occ_education_data instanceof Error?ve.initialError=n.usajobs_occ_education_data:ve.initialData=n.usajobs_occ_education_data,n.usajobs_occ_education_columns&&(ve.knownColumns=n.usajobs_occ_education_columns));let ue,Lt=!1;const kt=ye.createReactive({callback:S=>{i(11,ue=S)},execFn:F},{id:"usajobs_occ_education",...ve});kt(Ne,{noResolve:se,...ve}),globalThis[Symbol.for("usajobs_occ_education")]={get value(){return ue}};let le={initialData:void 0,initialError:void 0},Q=C`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'benefits'
order by concept_rank`,$t=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'benefits'
order by concept_rank`;n.usajobs_occ_benefits_data&&(n.usajobs_occ_benefits_data instanceof Error?le.initialError=n.usajobs_occ_benefits_data:le.initialData=n.usajobs_occ_benefits_data,n.usajobs_occ_benefits_columns&&(le.knownColumns=n.usajobs_occ_benefits_columns));let dt,we=!1;const vt=ye.createReactive({callback:S=>{i(12,dt=S)},execFn:F},{id:"usajobs_occ_benefits",...le});vt($t,{noResolve:Q,...le}),globalThis[Symbol.for("usajobs_occ_benefits")]={get value(){return dt}};const Te=()=>window.open(`https://www.onetonline.org/link/summary/${o.usajobs_occ.value}`,"_blank","noopener");return f.$$set=S=>{"data"in S&&i(13,r=S.data)},f.$$.update=()=>{f.$$.dirty[0]&8192&&i(14,{data:n={},customFormattingSettings:a,__db:d}=r,n),f.$$.dirty[0]&16384&&So.set(Object.keys(n).length>0),f.$$.dirty[2]&2&&t.params,f.$$.dirty[0]&491520&&(K||!Gt?K||(nt(Se,{noResolve:K,...ae}),i(18,Gt=!0)):nt(Se,{noResolve:K})),f.$$.dirty[0]&1&&i(20,Ae=C`select
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
group by 1`),f.$$.dirty[0]&7864320&&(Ae||!Ct?Ae||(rt(Re,{noResolve:Ae,...N}),i(22,Ct=!0)):rt(Re,{noResolve:Ae})),f.$$.dirty[0]&1&&i(24,Ge=C`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsOccupationPostingVolume
where occ8 = '${o.usajobs_occ.value}'
order by month_start`),f.$$.dirty[0]&1&&i(25,Ce=`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsOccupationPostingVolume
where occ8 = '${o.usajobs_occ.value}'
order by month_start`),f.$$.dirty[0]&125829120&&(Ge||!Ht?Ge||(ct(Ce,{noResolve:Ge,...Y}),i(26,Ht=!0)):ct(Ce,{noResolve:Ge})),f.$$.dirty[0]&1&&i(28,He=C`select
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
order by occ_rank`),f.$$.dirty[0]&2013265920&&(He||!ne?He||(Ot(Oe,{noResolve:He,...B}),i(30,ne=!0)):Ot(Oe,{noResolve:He})),f.$$.dirty[0]&1&&i(32,Z=C`select
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
order by volume_rank`),f.$$.dirty[1]&15&&(Z||!re?Z||(Et(Me,{noResolve:Z,...pe}),i(34,re=!0)):Et(Me,{noResolve:Z})),f.$$.dirty[0]&1&&i(36,ee=C`select
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
order by wa_rank`),f.$$.dirty[1]&240&&(ee||!Mt?ee||(_t(Pe,{noResolve:ee,...be}),i(38,Mt=!0)):_t(Pe,{noResolve:ee})),f.$$.dirty[0]&1&&i(40,Ue=C`select
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
order by skill_rank`),f.$$.dirty[1]&3840&&(Ue||!qt?Ue||(ut(Le,{noResolve:Ue,...V}),i(42,qt=!0)):ut(Le,{noResolve:Ue})),f.$$.dirty[0]&1&&i(44,Je=C`select
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
order by skill_rank`),f.$$.dirty[1]&61440&&(Je||!Pt?Je||(ft(De,{noResolve:Je,...te}),i(46,Pt=!0)):ft(De,{noResolve:Je})),f.$$.dirty[0]&1&&i(48,W=C`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
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
order by concept_rank`),f.$$.dirty[0]&1&&i(53,xe=`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'technology'
order by concept_rank`),f.$$.dirty[1]&15728640&&(Ie||!_e?Ie||(Ut(xe,{noResolve:Ie,...z}),i(54,_e=!0)):Ut(xe,{noResolve:Ie})),f.$$.dirty[0]&1&&i(56,se=C`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'education'
order by concept_rank`),f.$$.dirty[0]&1&&i(57,Ne=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'education'
order by concept_rank`),f.$$.dirty[1]&251658240&&(se||!Lt?se||(kt(Ne,{noResolve:se,...ve}),i(58,Lt=!0)):kt(Ne,{noResolve:se})),f.$$.dirty[0]&1&&i(60,Q=C`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'benefits'
order by concept_rank`),f.$$.dirty[0]&1&&i(61,$t=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'occupation'
  and entity_id = '${o.usajobs_occ.value}'
  and category = 'benefits'
order by concept_rank`),f.$$.dirty[1]&1879048192|f.$$.dirty[2]&1&&(Q||!we?Q||(vt($t,{noResolve:Q,...le}),i(62,we=!0)):vt($t,{noResolve:Q}))},i(16,K=C`select distinct occ8, soc_title
from usajobs.AGGR_OccupationTaskSignatures
order by soc_title`),i(17,Se=`select distinct occ8, soc_title
from usajobs.AGGR_OccupationTaskSignatures
order by soc_title`),[o,X,fe,me,Ee,qe,ke,$e,ce,pt,Fe,ue,dt,r,n,ae,K,Se,Gt,N,Ae,Re,Ct,Y,Ge,Ce,Ht,B,He,Oe,ne,pe,Z,Me,re,be,ee,Pe,Mt,V,Ue,Le,qt,te,Je,De,Pt,ie,W,mt,de,z,Ie,xe,_e,ve,se,Ne,Lt,le,Q,$t,we,t,Te]}class ra extends go{constructor(s){super(),jo(this,s,Qo,zo,co,{data:13},null,[-1,-1,-1])}}export{ra as component};
