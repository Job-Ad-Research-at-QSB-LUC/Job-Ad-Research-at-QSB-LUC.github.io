import{s as Ys,d as _,i as u,a as is,b as p,c as g,h as Zs,e as w,f as _s,g as T,k as y,l as A,m as Ls,n as ea,o as ta,p as sa,q as aa,r as se,j as na,t as oa,u as la}from"../chunks/scheduler.DhBftCKw.js";import{S as ra,i as ia,d,t as b,a as m,c as ve,m as k,b as v,e as j,g as je}from"../chunks/index.BUvAr1Xw.js";import{D as Oe,C as R}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.B0mztXUO.js";import{w as _a}from"../chunks/entry.BMENagX9.js";import{e as ca,s as ua,Q as we,p as fa,a as Us,r as Js,C as ma}from"../chunks/inferColumnTypes.D6fZb62q.js";import{h as G}from"../chunks/setTrackProxy.Cyfckp0w.js";import{D as ga}from"../chunks/Dropdown.D0da1eQh.js";import{p as ya}from"../chunks/stores.DdIem69U.js";import{Q as Ae}from"../chunks/QueryViewer.ZRKlIdUM.js";import{L as ba}from"../chunks/LineChart.DcqOcd8C.js";import{p as pa}from"../chunks/profile.BW8tN6E9.js";function $a(c){let a,n=S.title+"",t;return{c(){a=A("h1"),t=la(n),this.h()},l(i){a=w(i,"H1",{class:!0});var r=na(a);t=oa(r,n),r.forEach(_),this.h()},h(){p(a,"class","title")},m(i,r){u(i,a,r),is(a,t)},p:se,d(i){i&&_(a)}}}function da(c){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:se,p:se,d:se}}function ka(c){let a,n,t,i,r;return document.title=a=S.title,{c(){n=y(),t=A("meta"),i=y(),r=A("meta"),this.h()},l(l){n=g(l),t=w(l,"META",{property:!0,content:!0}),i=g(l),r=w(l,"META",{name:!0,content:!0}),this.h()},h(){var l,s;p(t,"property","og:title"),p(t,"content",((l=S.og)==null?void 0:l.title)??S.title),p(r,"name","twitter:title"),p(r,"content",((s=S.og)==null?void 0:s.title)??S.title)},m(l,s){u(l,n,s),u(l,t,s),u(l,i,s),u(l,r,s)},p(l,s){s&0&&a!==(a=S.title)&&(document.title=a)},d(l){l&&(_(n),_(t),_(i),_(r))}}}function va(c){var r,l;let a,n,t=(S.description||((r=S.og)==null?void 0:r.description))&&ja(),i=((l=S.og)==null?void 0:l.image)&&wa();return{c(){t&&t.c(),a=y(),i&&i.c(),n=_s()},l(s){t&&t.l(s),a=g(s),i&&i.l(s),n=_s()},m(s,$){t&&t.m(s,$),u(s,a,$),i&&i.m(s,$),u(s,n,$)},p(s,$){var f,H;(S.description||(f=S.og)!=null&&f.description)&&t.p(s,$),(H=S.og)!=null&&H.image&&i.p(s,$)},d(s){s&&(_(a),_(n)),t&&t.d(s),i&&i.d(s)}}}function ja(c){let a,n,t,i,r;return{c(){a=A("meta"),n=y(),t=A("meta"),i=y(),r=A("meta"),this.h()},l(l){a=w(l,"META",{name:!0,content:!0}),n=g(l),t=w(l,"META",{property:!0,content:!0}),i=g(l),r=w(l,"META",{name:!0,content:!0}),this.h()},h(){var l,s,$;p(a,"name","description"),p(a,"content",S.description??((l=S.og)==null?void 0:l.description)),p(t,"property","og:description"),p(t,"content",((s=S.og)==null?void 0:s.description)??S.description),p(r,"name","twitter:description"),p(r,"content",(($=S.og)==null?void 0:$.description)??S.description)},m(l,s){u(l,a,s),u(l,n,s),u(l,t,s),u(l,i,s),u(l,r,s)},p:se,d(l){l&&(_(a),_(n),_(t),_(i),_(r))}}}function wa(c){let a,n,t;return{c(){a=A("meta"),n=y(),t=A("meta"),this.h()},l(i){a=w(i,"META",{property:!0,content:!0}),n=g(i),t=w(i,"META",{name:!0,content:!0}),this.h()},h(){var i,r;p(a,"property","og:image"),p(a,"content",Us((i=S.og)==null?void 0:i.image)),p(t,"name","twitter:image"),p(t,"content",Us((r=S.og)==null?void 0:r.image))},m(i,r){u(i,a,r),u(i,n,r),u(i,t,r)},p:se,d(i){i&&(_(a),_(n),_(t))}}}function Ds(c){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_options",queryResult:c[0]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&1&&(r.queryResult=t[0]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Fs(c){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_overview",queryResult:c[1]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&2&&(r.queryResult=t[1]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Aa(c){let a,n,t,i,r,l;return a=new R({props:{id:"agency",title:"Agency"}}),t=new R({props:{id:"n_postings",title:"Postings",fmt:"#,##0"}}),r=new R({props:{id:"retained_tasks",title:"Tasks",fmt:"#,##0"}}),{c(){j(a.$$.fragment),n=y(),j(t.$$.fragment),i=y(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=g(s),v(t.$$.fragment,s),i=g(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),u(s,n,$),k(t,s,$),u(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function Is(c){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_posting_volume",queryResult:c[2]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&4&&(r.queryResult=t[2]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function xs(c){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_tasks_rca",queryResult:c[3]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&8&&(r.queryResult=t[3]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function ha(c){let a,n,t,i,r,l;return a=new R({props:{id:"task_text",title:"Task",wrap:"true"}}),t=new R({props:{id:"rca",title:"RCA",fmt:"0.00"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(a.$$.fragment),n=y(),j(t.$$.fragment),i=y(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=g(s),v(t.$$.fragment,s),i=g(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),u(s,n,$),k(t,s,$),u(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function Os(c){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_tasks_volume",queryResult:c[4]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&16&&(r.queryResult=t[4]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Ta(c){let a,n,t,i,r,l;return a=new R({props:{id:"task_text",title:"Task",wrap:"true"}}),t=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),r=new R({props:{id:"rca",title:"RCA",fmt:"0.00"}}),{c(){j(a.$$.fragment),n=y(),j(t.$$.fragment),i=y(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=g(s),v(t.$$.fragment,s),i=g(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),u(s,n,$),k(t,s,$),u(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function Ns(c){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_work_activities",queryResult:c[5]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&32&&(r.queryResult=t[5]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Ra(c){let a,n,t,i,r,l;return a=new R({props:{id:"wa_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"wa_name",title:"Name",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(a.$$.fragment),n=y(),j(t.$$.fragment),i=y(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=g(s),v(t.$$.fragment,s),i=g(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),u(s,n,$),k(t,s,$),u(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function Bs(c){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_skills",queryResult:c[6]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&64&&(r.queryResult=t[6]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Sa(c){let a,n,t,i,r,l;return a=new R({props:{id:"skill_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"skill_label",title:"Skill",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(a.$$.fragment),n=y(),j(t.$$.fragment),i=y(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=g(s),v(t.$$.fragment,s),i=g(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),u(s,n,$),k(t,s,$),u(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function Vs(c){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_onet_skills",queryResult:c[7]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&128&&(r.queryResult=t[7]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Ga(c){let a,n,t,i,r,l;return a=new R({props:{id:"skill_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"inferred_skill_mentions",title:"Mentions",fmt:"#,##0"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(a.$$.fragment),n=y(),j(t.$$.fragment),i=y(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=g(s),v(t.$$.fragment,s),i=g(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),u(s,n,$),k(t,s,$),u(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function Ws(c){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_tools",queryResult:c[8]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&256&&(r.queryResult=t[8]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Ha(c){let a,n,t,i,r,l,s,$;return a=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"tool",title:"Tool",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),s=new R({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){j(a.$$.fragment),n=y(),j(t.$$.fragment),i=y(),j(r.$$.fragment),l=y(),j(s.$$.fragment)},l(f){v(a.$$.fragment,f),n=g(f),v(t.$$.fragment,f),i=g(f),v(r.$$.fragment,f),l=g(f),v(s.$$.fragment,f)},m(f,H){k(a,f,H),u(f,n,H),k(t,f,H),u(f,i,H),k(r,f,H),u(f,l,H),k(s,f,H),$=!0},p:se,i(f){$||(m(a.$$.fragment,f),m(t.$$.fragment,f),m(r.$$.fragment,f),m(s.$$.fragment,f),$=!0)},o(f){b(a.$$.fragment,f),b(t.$$.fragment,f),b(r.$$.fragment,f),b(s.$$.fragment,f),$=!1},d(f){f&&(_(n),_(i),_(l)),d(a,f),d(t,f),d(r,f),d(s,f)}}}function Qs(c){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_technology",queryResult:c[9]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&512&&(r.queryResult=t[9]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Ca(c){let a,n,t,i,r,l,s,$;return a=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"technology",title:"Technology",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),s=new R({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){j(a.$$.fragment),n=y(),j(t.$$.fragment),i=y(),j(r.$$.fragment),l=y(),j(s.$$.fragment)},l(f){v(a.$$.fragment,f),n=g(f),v(t.$$.fragment,f),i=g(f),v(r.$$.fragment,f),l=g(f),v(s.$$.fragment,f)},m(f,H){k(a,f,H),u(f,n,H),k(t,f,H),u(f,i,H),k(r,f,H),u(f,l,H),k(s,f,H),$=!0},p:se,i(f){$||(m(a.$$.fragment,f),m(t.$$.fragment,f),m(r.$$.fragment,f),m(s.$$.fragment,f),$=!0)},o(f){b(a.$$.fragment,f),b(t.$$.fragment,f),b(r.$$.fragment,f),b(s.$$.fragment,f),$=!1},d(f){f&&(_(n),_(i),_(l)),d(a,f),d(t,f),d(r,f),d(s,f)}}}function zs(c){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_education",queryResult:c[10]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&1024&&(r.queryResult=t[10]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Ma(c){let a,n,t,i,r,l;return a=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"value",title:"Education",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(a.$$.fragment),n=y(),j(t.$$.fragment),i=y(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=g(s),v(t.$$.fragment,s),i=g(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),u(s,n,$),k(t,s,$),u(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function Ks(c){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_benefits",queryResult:c[11]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&2048&&(r.queryResult=t[11]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Ea(c){let a,n,t,i,r,l;return a=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"value",title:"Benefit",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(a.$$.fragment),n=y(),j(t.$$.fragment),i=y(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=g(s),v(t.$$.fragment,s),i=g(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),u(s,n,$),k(t,s,$),u(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function qa(c){let a,n,t,i,r,l,s="Select one agency. Tables use federal task, skill, Work Activity, and ConceptSearch aggregates.",$,f,H="<strong>How to read this page.</strong> This is a posting profile for a federal agency, not a staffing or capability profile. RCA highlights distinctive rows within USAJOBS; frequency columns show scale. ConceptSearch rows are descriptive matches, while task rows use LLM-validated task evidence.",O,ae,z,Te,re,Rt='<a href="#profile-contents">Profile Contents</a>',at,K,Re='<a href="#overview" class="hover:underline">Overview</a> <a href="#tasks" class="hover:underline">Tasks</a> <a href="#work-activities" class="hover:underline">Work Activities</a> <a href="#skills" class="hover:underline">Skills</a> <a href="#tools" class="hover:underline">Tools</a> <a href="#technologies" class="hover:underline">Technologies</a> <a href="#education" class="hover:underline">Education</a> <a href="#benefits" class="hover:underline">Benefits</a> <a href="#data" class="hover:underline">Data</a>',Se,ge,St="This profile is the USAJOBS agency posting profile for the selected agency. Task tables use LLM-validated task rows; RCA highlights tasks unusually concentrated in the agency, while the frequent-task table shows the tasks most prevalent across its postings. Tools, technologies, education, and benefits provide descriptive context around the agency task profile.",nt,X,Ge="<strong>Shared terms.</strong> % posts = share of selected agency postings with the row. RCA = row share in the selected agency / row share in USAJOBS overall. Concept rows are descriptive matches, not validated requirements or procurement evidence.",He,ie,Gt='<a href="#overview">Overview</a>',ot,ne,N,lt='<a href="#table-1-selected-usajobs-agency-overview">Table 1. Selected USAJOBS agency overview</a>',rt,ye,it,oe,B,_t='<a href="#figure-ua-1-posting-volume">Figure UA-1. Posting volume</a>',ct,be,ut,Y,Ce="This chart is included to show whether profile rows are drawn from a stable posting stream or from a thin/noisy selected-agency month.",Me,_e,Ht='<a href="#tasks">Tasks</a>',ft,Z,Ee='RCA is revealed comparative advantage; see <a href="/us-lmi/methodology#revealed-comparative-advantage-rca" class="markdown">methods</a>.',qe,pe,Ct="<strong>Generic tasks removed.</strong> These task tables omit rows labeled <code>general</code> in <code>combined_task_allocation_task_categories.csv</code>, so the profile focuses on more agency-specific task signals.",mt,V,Pe='<a href="#most-distinctive-tasks-rca">Most Distinctive Tasks (RCA)</a>',Le,Ue,ce,Mt='<a href="#table-2-distinctive-tasks-by-rca-for-the-selected-usajobs-agency">Table 2. Distinctive tasks by RCA for the selected USAJOBS agency</a>',$e,ee,Je,ue,Et='<a href="#most-frequent-tasks">Most Frequent Tasks</a>',gt,le,W,yt='<a href="#table-3-frequent-tasks-for-the-selected-usajobs-agency">Table 3. Frequent tasks for the selected USAJOBS agency</a>',bt,de,pt,Q,De='<a href="#work-activities">Work Activities</a>',Fe,Ie,fe,qt='<a href="#table-4-work-activities-for-the-selected-usajobs-agency">Table 4. Work Activities for the selected USAJOBS agency</a>',ke,te,xe,me,Pt='<a href="#skills">Skills</a>',$t,h,he,ks='<a href="#table-5-extracted-skills-for-the-selected-usajobs-agency">Table 5. Extracted skills for the selected USAJOBS agency</a>',xt,dt,Ot,Ne,vs='<a href="#crosswalked-onet-skills-from-work-activities">Crosswalked O*NET Skills (from Work Activities)</a>',Nt,Lt,Be,js='<a href="#table-6-crosswalked-onet-skills-for-the-selected-usajobs-agency">Table 6. Crosswalked O*NET skills for the selected USAJOBS agency</a>',Bt,kt,Vt,Ve,ws='<a href="#tools">Tools</a>',Wt,Ut,We,As='<a href="#table-7-tools-for-the-selected-usajobs-agency">Table 7. Tools for the selected USAJOBS agency</a>',Qt,vt,zt,Qe,hs='<a href="#technologies">Technologies</a>',Kt,Jt,ze,Ts='<a href="#table-8-technology-concepts-for-the-selected-usajobs-agency">Table 8. Technology concepts for the selected USAJOBS agency</a>',Xt,jt,Yt,Ke,Rs='<a href="#education">Education</a>',Zt,Dt,Xe,Ss='<a href="#table-9-education-concepts-for-the-selected-usajobs-agency">Table 9. Education concepts for the selected USAJOBS agency</a>',es,wt,ts,Ye,Gs='<a href="#benefits">Benefits</a>',ss,Ft,Ze,Hs='<a href="#table-10-benefit-concepts-for-the-selected-usajobs-agency">Table 10. Benefit concepts for the selected USAJOBS agency</a>',as,At,ns,et,Cs='<a href="#data">Data</a>',os,ht,Ms='Sources used here: <code class="markdown">AGGR_AgencyTaskSignatures</code>, <code class="markdown">AGGR_USAJobsAgencyWAProfile</code>, <code class="markdown">AGGR_USAJobsAgencySkillProfile</code>, <code class="markdown">AGGR_USAJobsAgencyOnetSkillProfile</code>, and <code class="markdown">AGGR_USAJobsEntityConceptProfile</code>. The task profile and crosswalked O*NET skill sources read <code class="markdown">JaatTasks_Validated</code>; crosswalked O*NET skills use the O*NET 27.2 Skills-to-Work-Activities crosswalk.',ls,Tt,Es='Evidence path: RCA is defined in <a href="/us-lmi/methodology#revealed-comparative-advantage-rca" class="markdown">Methods</a>. USAJOBS source and agreement artifacts are listed in <a href="/us-lmi/methodology/audit-trail" class="markdown">Agreement And Audit Trail</a>.',rs,tt=typeof S<"u"&&S.title&&S.hide_title!==!0&&$a();function Xs(e,o){return typeof S<"u"&&S.title?ka:da}let It=Xs()(c),st=typeof S=="object"&&va(),C=c[0]&&Ds(c);z=new ga({props:{data:c[0],name:"usajobs_agency",value:"agency",defaultValue:"Federal Aviation Administration",title:"Agency"}});let M=c[1]&&Fs(c);ye=new Oe({props:{data:c[1],rows:"1",$$slots:{default:[Aa]},$$scope:{ctx:c}}});let E=c[2]&&Is(c);be=new ba({props:{data:c[2],x:"month_start",y:"n_postings",yAxisTitle:"Postings",title:"Posting volume"}});let q=c[3]&&xs(c);ee=new Oe({props:{data:c[3],rowsPerPage:"10",$$slots:{default:[ha]},$$scope:{ctx:c}}});let P=c[4]&&Os(c);de=new Oe({props:{data:c[4],rowsPerPage:"10",$$slots:{default:[Ta]},$$scope:{ctx:c}}});let L=c[5]&&Ns(c);te=new Oe({props:{data:c[5],rowsPerPage:"25",$$slots:{default:[Ra]},$$scope:{ctx:c}}});let U=c[6]&&Bs(c);dt=new Oe({props:{data:c[6],rowsPerPage:"25",$$slots:{default:[Sa]},$$scope:{ctx:c}}});let J=c[7]&&Vs(c);kt=new Oe({props:{data:c[7],groupBy:"skill_name",rowsPerPage:"25",$$slots:{default:[Ga]},$$scope:{ctx:c}}});let D=c[8]&&Ws(c);vt=new Oe({props:{data:c[8],rowsPerPage:"10",$$slots:{default:[Ha]},$$scope:{ctx:c}}});let F=c[9]&&Qs(c);jt=new Oe({props:{data:c[9],rowsPerPage:"10",$$slots:{default:[Ca]},$$scope:{ctx:c}}});let I=c[10]&&zs(c);wt=new Oe({props:{data:c[10],rowsPerPage:"10",$$slots:{default:[Ma]},$$scope:{ctx:c}}});let x=c[11]&&Ks(c);return At=new Oe({props:{data:c[11],rowsPerPage:"10",$$slots:{default:[Ea]},$$scope:{ctx:c}}}),{c(){tt&&tt.c(),a=y(),It.c(),n=A("meta"),t=A("meta"),st&&st.c(),i=_s(),r=y(),l=A("p"),l.textContent=s,$=y(),f=A("div"),f.innerHTML=H,O=y(),C&&C.c(),ae=y(),j(z.$$.fragment),Te=y(),re=A("h2"),re.innerHTML=Rt,at=y(),K=A("div"),K.innerHTML=Re,Se=y(),ge=A("p"),ge.textContent=St,nt=y(),X=A("div"),X.innerHTML=Ge,He=y(),ie=A("h2"),ie.innerHTML=Gt,ot=y(),M&&M.c(),ne=y(),N=A("h3"),N.innerHTML=lt,rt=y(),j(ye.$$.fragment),it=y(),E&&E.c(),oe=y(),B=A("h3"),B.innerHTML=_t,ct=y(),j(be.$$.fragment),ut=y(),Y=A("p"),Y.textContent=Ce,Me=y(),_e=A("h2"),_e.innerHTML=Ht,ft=y(),Z=A("p"),Z.innerHTML=Ee,qe=y(),pe=A("div"),pe.innerHTML=Ct,mt=y(),V=A("h3"),V.innerHTML=Pe,Le=y(),q&&q.c(),Ue=y(),ce=A("h3"),ce.innerHTML=Mt,$e=y(),j(ee.$$.fragment),Je=y(),ue=A("h3"),ue.innerHTML=Et,gt=y(),P&&P.c(),le=y(),W=A("h3"),W.innerHTML=yt,bt=y(),j(de.$$.fragment),pt=y(),Q=A("h2"),Q.innerHTML=De,Fe=y(),L&&L.c(),Ie=y(),fe=A("h3"),fe.innerHTML=qt,ke=y(),j(te.$$.fragment),xe=y(),me=A("h2"),me.innerHTML=Pt,$t=y(),U&&U.c(),h=y(),he=A("h3"),he.innerHTML=ks,xt=y(),j(dt.$$.fragment),Ot=y(),Ne=A("h3"),Ne.innerHTML=vs,Nt=y(),J&&J.c(),Lt=y(),Be=A("h3"),Be.innerHTML=js,Bt=y(),j(kt.$$.fragment),Vt=y(),Ve=A("h2"),Ve.innerHTML=ws,Wt=y(),D&&D.c(),Ut=y(),We=A("h3"),We.innerHTML=As,Qt=y(),j(vt.$$.fragment),zt=y(),Qe=A("h2"),Qe.innerHTML=hs,Kt=y(),F&&F.c(),Jt=y(),ze=A("h3"),ze.innerHTML=Ts,Xt=y(),j(jt.$$.fragment),Yt=y(),Ke=A("h2"),Ke.innerHTML=Rs,Zt=y(),I&&I.c(),Dt=y(),Xe=A("h3"),Xe.innerHTML=Ss,es=y(),j(wt.$$.fragment),ts=y(),Ye=A("h2"),Ye.innerHTML=Gs,ss=y(),x&&x.c(),Ft=y(),Ze=A("h3"),Ze.innerHTML=Hs,as=y(),j(At.$$.fragment),ns=y(),et=A("h2"),et.innerHTML=Cs,os=y(),ht=A("p"),ht.innerHTML=Ms,ls=y(),Tt=A("p"),Tt.innerHTML=Es,this.h()},l(e){tt&&tt.l(e),a=g(e);const o=Zs("svelte-2igo1p",document.head);It.l(o),n=w(o,"META",{name:!0,content:!0}),t=w(o,"META",{name:!0,content:!0}),st&&st.l(o),i=_s(),o.forEach(_),r=g(e),l=w(e,"P",{class:!0,"data-svelte-h":!0}),T(l)!=="svelte-17wouf5"&&(l.textContent=s),$=g(e),f=w(e,"DIV",{class:!0,"data-svelte-h":!0}),T(f)!=="svelte-1a6lysw"&&(f.innerHTML=H),O=g(e),C&&C.l(e),ae=g(e),v(z.$$.fragment,e),Te=g(e),re=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(re)!=="svelte-1dmnoaj"&&(re.innerHTML=Rt),at=g(e),K=w(e,"DIV",{class:!0,"data-svelte-h":!0}),T(K)!=="svelte-t5k8nl"&&(K.innerHTML=Re),Se=g(e),ge=w(e,"P",{class:!0,"data-svelte-h":!0}),T(ge)!=="svelte-34b6eh"&&(ge.textContent=St),nt=g(e),X=w(e,"DIV",{class:!0,"data-svelte-h":!0}),T(X)!=="svelte-jmgcfl"&&(X.innerHTML=Ge),He=g(e),ie=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(ie)!=="svelte-16zqni9"&&(ie.innerHTML=Gt),ot=g(e),M&&M.l(e),ne=g(e),N=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(N)!=="svelte-rmh2qf"&&(N.innerHTML=lt),rt=g(e),v(ye.$$.fragment,e),it=g(e),E&&E.l(e),oe=g(e),B=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(B)!=="svelte-1pbk6a8"&&(B.innerHTML=_t),ct=g(e),v(be.$$.fragment,e),ut=g(e),Y=w(e,"P",{class:!0,"data-svelte-h":!0}),T(Y)!=="svelte-19u5p67"&&(Y.textContent=Ce),Me=g(e),_e=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(_e)!=="svelte-161blmm"&&(_e.innerHTML=Ht),ft=g(e),Z=w(e,"P",{class:!0,"data-svelte-h":!0}),T(Z)!=="svelte-1kr2ren"&&(Z.innerHTML=Ee),qe=g(e),pe=w(e,"DIV",{class:!0,"data-svelte-h":!0}),T(pe)!=="svelte-zm4nm6"&&(pe.innerHTML=Ct),mt=g(e),V=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(V)!=="svelte-vyj2ku"&&(V.innerHTML=Pe),Le=g(e),q&&q.l(e),Ue=g(e),ce=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(ce)!=="svelte-olix0i"&&(ce.innerHTML=Mt),$e=g(e),v(ee.$$.fragment,e),Je=g(e),ue=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(ue)!=="svelte-1c63z5h"&&(ue.innerHTML=Et),gt=g(e),P&&P.l(e),le=g(e),W=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(W)!=="svelte-i5i8iy"&&(W.innerHTML=yt),bt=g(e),v(de.$$.fragment,e),pt=g(e),Q=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(Q)!=="svelte-x7f80k"&&(Q.innerHTML=De),Fe=g(e),L&&L.l(e),Ie=g(e),fe=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(fe)!=="svelte-p1oi31"&&(fe.innerHTML=qt),ke=g(e),v(te.$$.fragment,e),xe=g(e),me=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(me)!=="svelte-5ttn72"&&(me.innerHTML=Pt),$t=g(e),U&&U.l(e),h=g(e),he=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(he)!=="svelte-1nh8wna"&&(he.innerHTML=ks),xt=g(e),v(dt.$$.fragment,e),Ot=g(e),Ne=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(Ne)!=="svelte-hxcjdt"&&(Ne.innerHTML=vs),Nt=g(e),J&&J.l(e),Lt=g(e),Be=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(Be)!=="svelte-1nps2g3"&&(Be.innerHTML=js),Bt=g(e),v(kt.$$.fragment,e),Vt=g(e),Ve=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(Ve)!=="svelte-lc41ol"&&(Ve.innerHTML=ws),Wt=g(e),D&&D.l(e),Ut=g(e),We=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(We)!=="svelte-1o2i0sd"&&(We.innerHTML=As),Qt=g(e),v(vt.$$.fragment,e),zt=g(e),Qe=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(Qe)!=="svelte-78v6ii"&&(Qe.innerHTML=hs),Kt=g(e),F&&F.l(e),Jt=g(e),ze=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(ze)!=="svelte-1kxg8p2"&&(ze.innerHTML=Ts),Xt=g(e),v(jt.$$.fragment,e),Yt=g(e),Ke=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(Ke)!=="svelte-25sv0q"&&(Ke.innerHTML=Rs),Zt=g(e),I&&I.l(e),Dt=g(e),Xe=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(Xe)!=="svelte-jvvxsx"&&(Xe.innerHTML=Ss),es=g(e),v(wt.$$.fragment,e),ts=g(e),Ye=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(Ye)!=="svelte-dfu8xo"&&(Ye.innerHTML=Gs),ss=g(e),x&&x.l(e),Ft=g(e),Ze=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(Ze)!=="svelte-3jq55s"&&(Ze.innerHTML=Hs),as=g(e),v(At.$$.fragment,e),ns=g(e),et=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(et)!=="svelte-1ouuc1c"&&(et.innerHTML=Cs),os=g(e),ht=w(e,"P",{class:!0,"data-svelte-h":!0}),T(ht)!=="svelte-czfvmm"&&(ht.innerHTML=Ms),ls=g(e),Tt=w(e,"P",{class:!0,"data-svelte-h":!0}),T(Tt)!=="svelte-1iujzj5"&&(Tt.innerHTML=Es),this.h()},h(){p(n,"name","twitter:card"),p(n,"content","summary_large_image"),p(t,"name","twitter:site"),p(t,"content","@evidence_dev"),p(l,"class","markdown"),p(f,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),p(re,"class","markdown"),p(re,"id","profile-contents"),p(K,"class","flex flex-wrap gap-x-4 gap-y-2 text-sm border-y border-gray-200 py-3 mb-6"),p(ge,"class","markdown"),p(X,"class","text-sm my-3"),p(ie,"class","markdown"),p(ie,"id","overview"),p(N,"class","markdown"),p(N,"id","table-1-selected-usajobs-agency-overview"),p(B,"class","markdown"),p(B,"id","figure-ua-1-posting-volume"),p(Y,"class","text-sm text-gray-600 mt-2"),p(_e,"class","markdown"),p(_e,"id","tasks"),p(Z,"class","markdown"),p(pe,"class","border-l-4 border-amber-500 bg-amber-50 px-4 py-3 my-4 text-sm text-gray-700"),p(V,"class","markdown"),p(V,"id","most-distinctive-tasks-rca"),p(ce,"class","markdown"),p(ce,"id","table-2-distinctive-tasks-by-rca-for-the-selected-usajobs-agency"),p(ue,"class","markdown"),p(ue,"id","most-frequent-tasks"),p(W,"class","markdown"),p(W,"id","table-3-frequent-tasks-for-the-selected-usajobs-agency"),p(Q,"class","markdown"),p(Q,"id","work-activities"),p(fe,"class","markdown"),p(fe,"id","table-4-work-activities-for-the-selected-usajobs-agency"),p(me,"class","markdown"),p(me,"id","skills"),p(he,"class","markdown"),p(he,"id","table-5-extracted-skills-for-the-selected-usajobs-agency"),p(Ne,"class","markdown"),p(Ne,"id","crosswalked-onet-skills-from-work-activities"),p(Be,"class","markdown"),p(Be,"id","table-6-crosswalked-onet-skills-for-the-selected-usajobs-agency"),p(Ve,"class","markdown"),p(Ve,"id","tools"),p(We,"class","markdown"),p(We,"id","table-7-tools-for-the-selected-usajobs-agency"),p(Qe,"class","markdown"),p(Qe,"id","technologies"),p(ze,"class","markdown"),p(ze,"id","table-8-technology-concepts-for-the-selected-usajobs-agency"),p(Ke,"class","markdown"),p(Ke,"id","education"),p(Xe,"class","markdown"),p(Xe,"id","table-9-education-concepts-for-the-selected-usajobs-agency"),p(Ye,"class","markdown"),p(Ye,"id","benefits"),p(Ze,"class","markdown"),p(Ze,"id","table-10-benefit-concepts-for-the-selected-usajobs-agency"),p(et,"class","markdown"),p(et,"id","data"),p(ht,"class","markdown"),p(Tt,"class","markdown")},m(e,o){tt&&tt.m(e,o),u(e,a,o),It.m(document.head,null),is(document.head,n),is(document.head,t),st&&st.m(document.head,null),is(document.head,i),u(e,r,o),u(e,l,o),u(e,$,o),u(e,f,o),u(e,O,o),C&&C.m(e,o),u(e,ae,o),k(z,e,o),u(e,Te,o),u(e,re,o),u(e,at,o),u(e,K,o),u(e,Se,o),u(e,ge,o),u(e,nt,o),u(e,X,o),u(e,He,o),u(e,ie,o),u(e,ot,o),M&&M.m(e,o),u(e,ne,o),u(e,N,o),u(e,rt,o),k(ye,e,o),u(e,it,o),E&&E.m(e,o),u(e,oe,o),u(e,B,o),u(e,ct,o),k(be,e,o),u(e,ut,o),u(e,Y,o),u(e,Me,o),u(e,_e,o),u(e,ft,o),u(e,Z,o),u(e,qe,o),u(e,pe,o),u(e,mt,o),u(e,V,o),u(e,Le,o),q&&q.m(e,o),u(e,Ue,o),u(e,ce,o),u(e,$e,o),k(ee,e,o),u(e,Je,o),u(e,ue,o),u(e,gt,o),P&&P.m(e,o),u(e,le,o),u(e,W,o),u(e,bt,o),k(de,e,o),u(e,pt,o),u(e,Q,o),u(e,Fe,o),L&&L.m(e,o),u(e,Ie,o),u(e,fe,o),u(e,ke,o),k(te,e,o),u(e,xe,o),u(e,me,o),u(e,$t,o),U&&U.m(e,o),u(e,h,o),u(e,he,o),u(e,xt,o),k(dt,e,o),u(e,Ot,o),u(e,Ne,o),u(e,Nt,o),J&&J.m(e,o),u(e,Lt,o),u(e,Be,o),u(e,Bt,o),k(kt,e,o),u(e,Vt,o),u(e,Ve,o),u(e,Wt,o),D&&D.m(e,o),u(e,Ut,o),u(e,We,o),u(e,Qt,o),k(vt,e,o),u(e,zt,o),u(e,Qe,o),u(e,Kt,o),F&&F.m(e,o),u(e,Jt,o),u(e,ze,o),u(e,Xt,o),k(jt,e,o),u(e,Yt,o),u(e,Ke,o),u(e,Zt,o),I&&I.m(e,o),u(e,Dt,o),u(e,Xe,o),u(e,es,o),k(wt,e,o),u(e,ts,o),u(e,Ye,o),u(e,ss,o),x&&x.m(e,o),u(e,Ft,o),u(e,Ze,o),u(e,as,o),k(At,e,o),u(e,ns,o),u(e,et,o),u(e,os,o),u(e,ht,o),u(e,ls,o),u(e,Tt,o),rs=!0},p(e,o){typeof S<"u"&&S.title&&S.hide_title!==!0&&tt.p(e,o),It.p(e,o),typeof S=="object"&&st.p(e,o),e[0]?C?(C.p(e,o),o[0]&1&&m(C,1)):(C=Ds(e),C.c(),m(C,1),C.m(ae.parentNode,ae)):C&&(je(),b(C,1,1,()=>{C=null}),ve());const qs={};o[0]&1&&(qs.data=e[0]),z.$set(qs),e[1]?M?(M.p(e,o),o[0]&2&&m(M,1)):(M=Fs(e),M.c(),m(M,1),M.m(ne.parentNode,ne)):M&&(je(),b(M,1,1,()=>{M=null}),ve());const cs={};o[0]&2&&(cs.data=e[1]),o[2]&4194304&&(cs.$$scope={dirty:o,ctx:e}),ye.$set(cs),e[2]?E?(E.p(e,o),o[0]&4&&m(E,1)):(E=Is(e),E.c(),m(E,1),E.m(oe.parentNode,oe)):E&&(je(),b(E,1,1,()=>{E=null}),ve());const Ps={};o[0]&4&&(Ps.data=e[2]),be.$set(Ps),e[3]?q?(q.p(e,o),o[0]&8&&m(q,1)):(q=xs(e),q.c(),m(q,1),q.m(Ue.parentNode,Ue)):q&&(je(),b(q,1,1,()=>{q=null}),ve());const us={};o[0]&8&&(us.data=e[3]),o[2]&4194304&&(us.$$scope={dirty:o,ctx:e}),ee.$set(us),e[4]?P?(P.p(e,o),o[0]&16&&m(P,1)):(P=Os(e),P.c(),m(P,1),P.m(le.parentNode,le)):P&&(je(),b(P,1,1,()=>{P=null}),ve());const fs={};o[0]&16&&(fs.data=e[4]),o[2]&4194304&&(fs.$$scope={dirty:o,ctx:e}),de.$set(fs),e[5]?L?(L.p(e,o),o[0]&32&&m(L,1)):(L=Ns(e),L.c(),m(L,1),L.m(Ie.parentNode,Ie)):L&&(je(),b(L,1,1,()=>{L=null}),ve());const ms={};o[0]&32&&(ms.data=e[5]),o[2]&4194304&&(ms.$$scope={dirty:o,ctx:e}),te.$set(ms),e[6]?U?(U.p(e,o),o[0]&64&&m(U,1)):(U=Bs(e),U.c(),m(U,1),U.m(h.parentNode,h)):U&&(je(),b(U,1,1,()=>{U=null}),ve());const gs={};o[0]&64&&(gs.data=e[6]),o[2]&4194304&&(gs.$$scope={dirty:o,ctx:e}),dt.$set(gs),e[7]?J?(J.p(e,o),o[0]&128&&m(J,1)):(J=Vs(e),J.c(),m(J,1),J.m(Lt.parentNode,Lt)):J&&(je(),b(J,1,1,()=>{J=null}),ve());const ys={};o[0]&128&&(ys.data=e[7]),o[2]&4194304&&(ys.$$scope={dirty:o,ctx:e}),kt.$set(ys),e[8]?D?(D.p(e,o),o[0]&256&&m(D,1)):(D=Ws(e),D.c(),m(D,1),D.m(Ut.parentNode,Ut)):D&&(je(),b(D,1,1,()=>{D=null}),ve());const bs={};o[0]&256&&(bs.data=e[8]),o[2]&4194304&&(bs.$$scope={dirty:o,ctx:e}),vt.$set(bs),e[9]?F?(F.p(e,o),o[0]&512&&m(F,1)):(F=Qs(e),F.c(),m(F,1),F.m(Jt.parentNode,Jt)):F&&(je(),b(F,1,1,()=>{F=null}),ve());const ps={};o[0]&512&&(ps.data=e[9]),o[2]&4194304&&(ps.$$scope={dirty:o,ctx:e}),jt.$set(ps),e[10]?I?(I.p(e,o),o[0]&1024&&m(I,1)):(I=zs(e),I.c(),m(I,1),I.m(Dt.parentNode,Dt)):I&&(je(),b(I,1,1,()=>{I=null}),ve());const $s={};o[0]&1024&&($s.data=e[10]),o[2]&4194304&&($s.$$scope={dirty:o,ctx:e}),wt.$set($s),e[11]?x?(x.p(e,o),o[0]&2048&&m(x,1)):(x=Ks(e),x.c(),m(x,1),x.m(Ft.parentNode,Ft)):x&&(je(),b(x,1,1,()=>{x=null}),ve());const ds={};o[0]&2048&&(ds.data=e[11]),o[2]&4194304&&(ds.$$scope={dirty:o,ctx:e}),At.$set(ds)},i(e){rs||(m(C),m(z.$$.fragment,e),m(M),m(ye.$$.fragment,e),m(E),m(be.$$.fragment,e),m(q),m(ee.$$.fragment,e),m(P),m(de.$$.fragment,e),m(L),m(te.$$.fragment,e),m(U),m(dt.$$.fragment,e),m(J),m(kt.$$.fragment,e),m(D),m(vt.$$.fragment,e),m(F),m(jt.$$.fragment,e),m(I),m(wt.$$.fragment,e),m(x),m(At.$$.fragment,e),rs=!0)},o(e){b(C),b(z.$$.fragment,e),b(M),b(ye.$$.fragment,e),b(E),b(be.$$.fragment,e),b(q),b(ee.$$.fragment,e),b(P),b(de.$$.fragment,e),b(L),b(te.$$.fragment,e),b(U),b(dt.$$.fragment,e),b(J),b(kt.$$.fragment,e),b(D),b(vt.$$.fragment,e),b(F),b(jt.$$.fragment,e),b(I),b(wt.$$.fragment,e),b(x),b(At.$$.fragment,e),rs=!1},d(e){e&&(_(a),_(r),_(l),_($),_(f),_(O),_(ae),_(Te),_(re),_(at),_(K),_(Se),_(ge),_(nt),_(X),_(He),_(ie),_(ot),_(ne),_(N),_(rt),_(it),_(oe),_(B),_(ct),_(ut),_(Y),_(Me),_(_e),_(ft),_(Z),_(qe),_(pe),_(mt),_(V),_(Le),_(Ue),_(ce),_($e),_(Je),_(ue),_(gt),_(le),_(W),_(bt),_(pt),_(Q),_(Fe),_(Ie),_(fe),_(ke),_(xe),_(me),_($t),_(h),_(he),_(xt),_(Ot),_(Ne),_(Nt),_(Lt),_(Be),_(Bt),_(Vt),_(Ve),_(Wt),_(Ut),_(We),_(Qt),_(zt),_(Qe),_(Kt),_(Jt),_(ze),_(Xt),_(Yt),_(Ke),_(Zt),_(Dt),_(Xe),_(es),_(ts),_(Ye),_(ss),_(Ft),_(Ze),_(as),_(ns),_(et),_(os),_(ht),_(ls),_(Tt)),tt&&tt.d(e),It.d(e),_(n),_(t),st&&st.d(e),_(i),C&&C.d(e),d(z,e),M&&M.d(e),d(ye,e),E&&E.d(e),d(be,e),q&&q.d(e),d(ee,e),P&&P.d(e),d(de,e),L&&L.d(e),d(te,e),U&&U.d(e),d(dt,e),J&&J.d(e),d(kt,e),D&&D.d(e),d(vt,e),F&&F.d(e),d(jt,e),I&&I.d(e),d(wt,e),x&&x.d(e),d(At,e)}}}const S={title:"Agency Posting Profile"};function Pa(c,a,n){let t,i;Ls(c,ya,h=>n(63,t=h)),Ls(c,Js,h=>n(68,i=h));let{data:r}=a,{data:l={},customFormattingSettings:s,__db:$,inputs:f}=r;ea(Js,i="f1d936bbe3cd51aee0605a9e50b98154",i);let H=ca(_a(f));ta(H.subscribe(h=>n(14,f=h))),sa(ma,{getCustomFormats:()=>s.customFormats||[]});const O=(h,he)=>pa($.query,h,{query_name:he});ua(O),t.params,aa(()=>!0);let ae={initialData:void 0,initialError:void 0},z=G`select distinct agency
from usajobs.AGGR_AgencyTaskSignatures
order by agency`,Te=`select distinct agency
from usajobs.AGGR_AgencyTaskSignatures
order by agency`;l.usajobs_agency_options_data&&(l.usajobs_agency_options_data instanceof Error?ae.initialError=l.usajobs_agency_options_data:ae.initialData=l.usajobs_agency_options_data,l.usajobs_agency_options_columns&&(ae.knownColumns=l.usajobs_agency_options_columns));let re,Rt=!1;const at=we.createReactive({callback:h=>{n(0,re=h)},execFn:O},{id:"usajobs_agency_options",...ae});at(Te,{noResolve:z,...ae}),globalThis[Symbol.for("usajobs_agency_options")]={get value(){return re}};let K={initialData:void 0,initialError:void 0},Re=G`select
  agency,
  max(n_postings) as n_postings,
  count(*) as retained_tasks
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
group by 1`,Se=`select
  agency,
  max(n_postings) as n_postings,
  count(*) as retained_tasks
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
group by 1`;l.usajobs_agency_overview_data&&(l.usajobs_agency_overview_data instanceof Error?K.initialError=l.usajobs_agency_overview_data:K.initialData=l.usajobs_agency_overview_data,l.usajobs_agency_overview_columns&&(K.knownColumns=l.usajobs_agency_overview_columns));let ge,St=!1;const nt=we.createReactive({callback:h=>{n(1,ge=h)},execFn:O},{id:"usajobs_agency_overview",...K});nt(Se,{noResolve:Re,...K}),globalThis[Symbol.for("usajobs_agency_overview")]={get value(){return ge}};let X={initialData:void 0,initialError:void 0},Ge=G`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsAgencyPostingVolume
where agency = '${f.usajobs_agency.value}'
order by month_start`,He=`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsAgencyPostingVolume
where agency = '${f.usajobs_agency.value}'
order by month_start`;l.usajobs_agency_posting_volume_data&&(l.usajobs_agency_posting_volume_data instanceof Error?X.initialError=l.usajobs_agency_posting_volume_data:X.initialData=l.usajobs_agency_posting_volume_data,l.usajobs_agency_posting_volume_columns&&(X.knownColumns=l.usajobs_agency_posting_volume_columns));let ie,Gt=!1;const ot=we.createReactive({callback:h=>{n(2,ie=h)},execFn:O},{id:"usajobs_agency_posting_volume",...X});ot(He,{noResolve:Ge,...X}),globalThis[Symbol.for("usajobs_agency_posting_volume")]={get value(){return ie}};let ne={initialData:void 0,initialError:void 0},N=G`select
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  pct_postings
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
  and agency_rank <= 10
order by agency_rank`,lt=`select
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  pct_postings
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
  and agency_rank <= 10
order by agency_rank`;l.usajobs_agency_tasks_rca_data&&(l.usajobs_agency_tasks_rca_data instanceof Error?ne.initialError=l.usajobs_agency_tasks_rca_data:ne.initialData=l.usajobs_agency_tasks_rca_data,l.usajobs_agency_tasks_rca_columns&&(ne.knownColumns=l.usajobs_agency_tasks_rca_columns));let rt,ye=!1;const it=we.createReactive({callback:h=>{n(3,rt=h)},execFn:O},{id:"usajobs_agency_tasks_rca",...ne});it(lt,{noResolve:N,...ne}),globalThis[Symbol.for("usajobs_agency_tasks_rca")]={get value(){return rt}};let oe={initialData:void 0,initialError:void 0},B=G`select
  cast(task_id as varchar) as task_id,
  task_text,
  pct_postings,
  rca
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
  and volume_rank <= 10
order by volume_rank`,_t=`select
  cast(task_id as varchar) as task_id,
  task_text,
  pct_postings,
  rca
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
  and volume_rank <= 10
order by volume_rank`;l.usajobs_agency_tasks_volume_data&&(l.usajobs_agency_tasks_volume_data instanceof Error?oe.initialError=l.usajobs_agency_tasks_volume_data:oe.initialData=l.usajobs_agency_tasks_volume_data,l.usajobs_agency_tasks_volume_columns&&(oe.knownColumns=l.usajobs_agency_tasks_volume_columns));let ct,be=!1;const ut=we.createReactive({callback:h=>{n(4,ct=h)},execFn:O},{id:"usajobs_agency_tasks_volume",...oe});ut(_t,{noResolve:B,...oe}),globalThis[Symbol.for("usajobs_agency_tasks_volume")]={get value(){return ct}};let Y={initialData:void 0,initialError:void 0},Ce=G`select
  wa_rank,
  wa_id,
  wa_name,
  pct_postings
from usajobs.AGGR_USAJobsAgencyWAProfile
where agency = '${f.usajobs_agency.value}'
order by wa_rank`,Me=`select
  wa_rank,
  wa_id,
  wa_name,
  pct_postings
from usajobs.AGGR_USAJobsAgencyWAProfile
where agency = '${f.usajobs_agency.value}'
order by wa_rank`;l.usajobs_agency_work_activities_data&&(l.usajobs_agency_work_activities_data instanceof Error?Y.initialError=l.usajobs_agency_work_activities_data:Y.initialData=l.usajobs_agency_work_activities_data,l.usajobs_agency_work_activities_columns&&(Y.knownColumns=l.usajobs_agency_work_activities_columns));let _e,Ht=!1;const ft=we.createReactive({callback:h=>{n(5,_e=h)},execFn:O},{id:"usajobs_agency_work_activities",...Y});ft(Me,{noResolve:Ce,...Y}),globalThis[Symbol.for("usajobs_agency_work_activities")]={get value(){return _e}};let Z={initialData:void 0,initialError:void 0},Ee=G`select
  skill_rank,
  skill_code,
  skill_label,
  pct_postings
from usajobs.AGGR_USAJobsAgencySkillProfile
where agency = '${f.usajobs_agency.value}'
order by skill_rank`,qe=`select
  skill_rank,
  skill_code,
  skill_label,
  pct_postings
from usajobs.AGGR_USAJobsAgencySkillProfile
where agency = '${f.usajobs_agency.value}'
order by skill_rank`;l.usajobs_agency_skills_data&&(l.usajobs_agency_skills_data instanceof Error?Z.initialError=l.usajobs_agency_skills_data:Z.initialData=l.usajobs_agency_skills_data,l.usajobs_agency_skills_columns&&(Z.knownColumns=l.usajobs_agency_skills_columns));let pe,Ct=!1;const mt=we.createReactive({callback:h=>{n(6,pe=h)},execFn:O},{id:"usajobs_agency_skills",...Z});mt(qe,{noResolve:Ee,...Z}),globalThis[Symbol.for("usajobs_agency_skills")]={get value(){return pe}};let V={initialData:void 0,initialError:void 0},Pe=G`select
  skill_rank,
  skill_id,
  skill_name,
  inferred_skill_mentions,
  postings,
  pct_postings
from usajobs.AGGR_USAJobsAgencyOnetSkillProfile
where agency = '${f.usajobs_agency.value}'
order by skill_rank`,Le=`select
  skill_rank,
  skill_id,
  skill_name,
  inferred_skill_mentions,
  postings,
  pct_postings
from usajobs.AGGR_USAJobsAgencyOnetSkillProfile
where agency = '${f.usajobs_agency.value}'
order by skill_rank`;l.usajobs_agency_onet_skills_data&&(l.usajobs_agency_onet_skills_data instanceof Error?V.initialError=l.usajobs_agency_onet_skills_data:V.initialData=l.usajobs_agency_onet_skills_data,l.usajobs_agency_onet_skills_columns&&(V.knownColumns=l.usajobs_agency_onet_skills_columns));let Ue,ce=!1;const Mt=we.createReactive({callback:h=>{n(7,Ue=h)},execFn:O},{id:"usajobs_agency_onet_skills",...V});Mt(Le,{noResolve:Pe,...V}),globalThis[Symbol.for("usajobs_agency_onet_skills")]={get value(){return Ue}};let $e={initialData:void 0,initialError:void 0},ee=G`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'tools'
order by concept_rank`,Je=`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'tools'
order by concept_rank`;l.usajobs_agency_tools_data&&(l.usajobs_agency_tools_data instanceof Error?$e.initialError=l.usajobs_agency_tools_data:$e.initialData=l.usajobs_agency_tools_data,l.usajobs_agency_tools_columns&&($e.knownColumns=l.usajobs_agency_tools_columns));let ue,Et=!1;const gt=we.createReactive({callback:h=>{n(8,ue=h)},execFn:O},{id:"usajobs_agency_tools",...$e});gt(Je,{noResolve:ee,...$e}),globalThis[Symbol.for("usajobs_agency_tools")]={get value(){return ue}};let le={initialData:void 0,initialError:void 0},W=G`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'technology'
order by concept_rank`,yt=`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'technology'
order by concept_rank`;l.usajobs_agency_technology_data&&(l.usajobs_agency_technology_data instanceof Error?le.initialError=l.usajobs_agency_technology_data:le.initialData=l.usajobs_agency_technology_data,l.usajobs_agency_technology_columns&&(le.knownColumns=l.usajobs_agency_technology_columns));let bt,de=!1;const pt=we.createReactive({callback:h=>{n(9,bt=h)},execFn:O},{id:"usajobs_agency_technology",...le});pt(yt,{noResolve:W,...le}),globalThis[Symbol.for("usajobs_agency_technology")]={get value(){return bt}};let Q={initialData:void 0,initialError:void 0},De=G`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'education'
order by concept_rank`,Fe=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'education'
order by concept_rank`;l.usajobs_agency_education_data&&(l.usajobs_agency_education_data instanceof Error?Q.initialError=l.usajobs_agency_education_data:Q.initialData=l.usajobs_agency_education_data,l.usajobs_agency_education_columns&&(Q.knownColumns=l.usajobs_agency_education_columns));let Ie,fe=!1;const qt=we.createReactive({callback:h=>{n(10,Ie=h)},execFn:O},{id:"usajobs_agency_education",...Q});qt(Fe,{noResolve:De,...Q}),globalThis[Symbol.for("usajobs_agency_education")]={get value(){return Ie}};let ke={initialData:void 0,initialError:void 0},te=G`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'benefits'
order by concept_rank`,xe=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'benefits'
order by concept_rank`;l.usajobs_agency_benefits_data&&(l.usajobs_agency_benefits_data instanceof Error?ke.initialError=l.usajobs_agency_benefits_data:ke.initialData=l.usajobs_agency_benefits_data,l.usajobs_agency_benefits_columns&&(ke.knownColumns=l.usajobs_agency_benefits_columns));let me,Pt=!1;const $t=we.createReactive({callback:h=>{n(11,me=h)},execFn:O},{id:"usajobs_agency_benefits",...ke});return $t(xe,{noResolve:te,...ke}),globalThis[Symbol.for("usajobs_agency_benefits")]={get value(){return me}},c.$$set=h=>{"data"in h&&n(12,r=h.data)},c.$$.update=()=>{c.$$.dirty[0]&4096&&n(13,{data:l={},customFormattingSettings:s,__db:$}=r,l),c.$$.dirty[0]&8192&&fa.set(Object.keys(l).length>0),c.$$.dirty[2]&2&&t.params,c.$$.dirty[0]&491520&&(z||!Rt?z||(at(Te,{noResolve:z,...ae}),n(18,Rt=!0)):at(Te,{noResolve:z})),c.$$.dirty[0]&16384&&n(20,Re=G`select
  agency,
  max(n_postings) as n_postings,
  count(*) as retained_tasks
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
group by 1`),c.$$.dirty[0]&16384&&n(21,Se=`select
  agency,
  max(n_postings) as n_postings,
  count(*) as retained_tasks
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
group by 1`),c.$$.dirty[0]&7864320&&(Re||!St?Re||(nt(Se,{noResolve:Re,...K}),n(22,St=!0)):nt(Se,{noResolve:Re})),c.$$.dirty[0]&16384&&n(24,Ge=G`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsAgencyPostingVolume
where agency = '${f.usajobs_agency.value}'
order by month_start`),c.$$.dirty[0]&16384&&n(25,He=`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsAgencyPostingVolume
where agency = '${f.usajobs_agency.value}'
order by month_start`),c.$$.dirty[0]&125829120&&(Ge||!Gt?Ge||(ot(He,{noResolve:Ge,...X}),n(26,Gt=!0)):ot(He,{noResolve:Ge})),c.$$.dirty[0]&16384&&n(28,N=G`select
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  pct_postings
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
  and agency_rank <= 10
order by agency_rank`),c.$$.dirty[0]&16384&&n(29,lt=`select
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  pct_postings
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
  and agency_rank <= 10
order by agency_rank`),c.$$.dirty[0]&2013265920&&(N||!ye?N||(it(lt,{noResolve:N,...ne}),n(30,ye=!0)):it(lt,{noResolve:N})),c.$$.dirty[0]&16384&&n(32,B=G`select
  cast(task_id as varchar) as task_id,
  task_text,
  pct_postings,
  rca
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
  and volume_rank <= 10
order by volume_rank`),c.$$.dirty[0]&16384&&n(33,_t=`select
  cast(task_id as varchar) as task_id,
  task_text,
  pct_postings,
  rca
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
  and volume_rank <= 10
order by volume_rank`),c.$$.dirty[1]&15&&(B||!be?B||(ut(_t,{noResolve:B,...oe}),n(34,be=!0)):ut(_t,{noResolve:B})),c.$$.dirty[0]&16384&&n(36,Ce=G`select
  wa_rank,
  wa_id,
  wa_name,
  pct_postings
from usajobs.AGGR_USAJobsAgencyWAProfile
where agency = '${f.usajobs_agency.value}'
order by wa_rank`),c.$$.dirty[0]&16384&&n(37,Me=`select
  wa_rank,
  wa_id,
  wa_name,
  pct_postings
from usajobs.AGGR_USAJobsAgencyWAProfile
where agency = '${f.usajobs_agency.value}'
order by wa_rank`),c.$$.dirty[1]&240&&(Ce||!Ht?Ce||(ft(Me,{noResolve:Ce,...Y}),n(38,Ht=!0)):ft(Me,{noResolve:Ce})),c.$$.dirty[0]&16384&&n(40,Ee=G`select
  skill_rank,
  skill_code,
  skill_label,
  pct_postings
from usajobs.AGGR_USAJobsAgencySkillProfile
where agency = '${f.usajobs_agency.value}'
order by skill_rank`),c.$$.dirty[0]&16384&&n(41,qe=`select
  skill_rank,
  skill_code,
  skill_label,
  pct_postings
from usajobs.AGGR_USAJobsAgencySkillProfile
where agency = '${f.usajobs_agency.value}'
order by skill_rank`),c.$$.dirty[1]&3840&&(Ee||!Ct?Ee||(mt(qe,{noResolve:Ee,...Z}),n(42,Ct=!0)):mt(qe,{noResolve:Ee})),c.$$.dirty[0]&16384&&n(44,Pe=G`select
  skill_rank,
  skill_id,
  skill_name,
  inferred_skill_mentions,
  postings,
  pct_postings
from usajobs.AGGR_USAJobsAgencyOnetSkillProfile
where agency = '${f.usajobs_agency.value}'
order by skill_rank`),c.$$.dirty[0]&16384&&n(45,Le=`select
  skill_rank,
  skill_id,
  skill_name,
  inferred_skill_mentions,
  postings,
  pct_postings
from usajobs.AGGR_USAJobsAgencyOnetSkillProfile
where agency = '${f.usajobs_agency.value}'
order by skill_rank`),c.$$.dirty[1]&61440&&(Pe||!ce?Pe||(Mt(Le,{noResolve:Pe,...V}),n(46,ce=!0)):Mt(Le,{noResolve:Pe})),c.$$.dirty[0]&16384&&n(48,ee=G`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'tools'
order by concept_rank`),c.$$.dirty[0]&16384&&n(49,Je=`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'tools'
order by concept_rank`),c.$$.dirty[1]&983040&&(ee||!Et?ee||(gt(Je,{noResolve:ee,...$e}),n(50,Et=!0)):gt(Je,{noResolve:ee})),c.$$.dirty[0]&16384&&n(52,W=G`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'technology'
order by concept_rank`),c.$$.dirty[0]&16384&&n(53,yt=`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'technology'
order by concept_rank`),c.$$.dirty[1]&15728640&&(W||!de?W||(pt(yt,{noResolve:W,...le}),n(54,de=!0)):pt(yt,{noResolve:W})),c.$$.dirty[0]&16384&&n(56,De=G`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'education'
order by concept_rank`),c.$$.dirty[0]&16384&&n(57,Fe=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'education'
order by concept_rank`),c.$$.dirty[1]&251658240&&(De||!fe?De||(qt(Fe,{noResolve:De,...Q}),n(58,fe=!0)):qt(Fe,{noResolve:De})),c.$$.dirty[0]&16384&&n(60,te=G`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'benefits'
order by concept_rank`),c.$$.dirty[0]&16384&&n(61,xe=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'benefits'
order by concept_rank`),c.$$.dirty[1]&1879048192|c.$$.dirty[2]&1&&(te||!Pt?te||($t(xe,{noResolve:te,...ke}),n(62,Pt=!0)):$t(xe,{noResolve:te}))},n(16,z=G`select distinct agency
from usajobs.AGGR_AgencyTaskSignatures
order by agency`),n(17,Te=`select distinct agency
from usajobs.AGGR_AgencyTaskSignatures
order by agency`),[re,ge,ie,rt,ct,_e,pe,Ue,ue,bt,Ie,me,r,l,f,ae,z,Te,Rt,K,Re,Se,St,X,Ge,He,Gt,ne,N,lt,ye,oe,B,_t,be,Y,Ce,Me,Ht,Z,Ee,qe,Ct,V,Pe,Le,ce,$e,ee,Je,Et,le,W,yt,de,Q,De,Fe,fe,ke,te,xe,Pt,t]}class Qa extends ra{constructor(a){super(),ia(this,a,Pa,qa,Ys,{data:12},null,[-1,-1,-1])}}export{Qa as component};
