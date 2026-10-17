import{s as ta,d as _,i as c,a as cs,b as p,c as y,h as sa,e as w,f as us,g as T,k as g,l as A,m as Ds,n as aa,o as na,p as oa,q as la,r as se,j as ra,t as ia,u as _a}from"../chunks/scheduler.TmfZfN_X.js";import{S as ca,i as ua,d,t as b,a as m,c as ve,m as k,b as v,e as j,g as je}from"../chunks/index.CKLTamEB.js";import{D as Oe,C as R}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.B2aubBmp.js";import{w as fa}from"../chunks/entry.B99Fshv4.js";import{e as ma,s as ya,Q as we,p as ga,a as Fs,r as Is,C as ba}from"../chunks/inferColumnTypes.CHYcqYP9.js";import{h as G}from"../chunks/setTrackProxy.Cyfckp0w.js";import{D as pa}from"../chunks/Dropdown.j0vKW5Rt.js";import{p as $a}from"../chunks/stores.Qedg7CPW.js";import{Q as Ae}from"../chunks/QueryViewer.0JA8Cyw9.js";import{L as da}from"../chunks/LineChart.nC0w4-cM.js";import{p as ka}from"../chunks/profile.BW8tN6E9.js";function va(u){let a,n=S.title+"",t;return{c(){a=A("h1"),t=_a(n),this.h()},l(i){a=w(i,"H1",{class:!0});var r=ra(a);t=ia(r,n),r.forEach(_),this.h()},h(){p(a,"class","title")},m(i,r){c(i,a,r),cs(a,t)},p:se,d(i){i&&_(a)}}}function ja(u){return{c(){this.h()},l(a){this.h()},h(){document.title="Evidence"},m:se,p:se,d:se}}function wa(u){let a,n,t,i,r;return document.title=a=S.title,{c(){n=g(),t=A("meta"),i=g(),r=A("meta"),this.h()},l(l){n=y(l),t=w(l,"META",{property:!0,content:!0}),i=y(l),r=w(l,"META",{name:!0,content:!0}),this.h()},h(){var l,s;p(t,"property","og:title"),p(t,"content",((l=S.og)==null?void 0:l.title)??S.title),p(r,"name","twitter:title"),p(r,"content",((s=S.og)==null?void 0:s.title)??S.title)},m(l,s){c(l,n,s),c(l,t,s),c(l,i,s),c(l,r,s)},p(l,s){s&0&&a!==(a=S.title)&&(document.title=a)},d(l){l&&(_(n),_(t),_(i),_(r))}}}function Aa(u){var r,l;let a,n,t=(S.description||((r=S.og)==null?void 0:r.description))&&ha(),i=((l=S.og)==null?void 0:l.image)&&Ta();return{c(){t&&t.c(),a=g(),i&&i.c(),n=us()},l(s){t&&t.l(s),a=y(s),i&&i.l(s),n=us()},m(s,$){t&&t.m(s,$),c(s,a,$),i&&i.m(s,$),c(s,n,$)},p(s,$){var f,H;(S.description||(f=S.og)!=null&&f.description)&&t.p(s,$),(H=S.og)!=null&&H.image&&i.p(s,$)},d(s){s&&(_(a),_(n)),t&&t.d(s),i&&i.d(s)}}}function ha(u){let a,n,t,i,r;return{c(){a=A("meta"),n=g(),t=A("meta"),i=g(),r=A("meta"),this.h()},l(l){a=w(l,"META",{name:!0,content:!0}),n=y(l),t=w(l,"META",{property:!0,content:!0}),i=y(l),r=w(l,"META",{name:!0,content:!0}),this.h()},h(){var l,s,$;p(a,"name","description"),p(a,"content",S.description??((l=S.og)==null?void 0:l.description)),p(t,"property","og:description"),p(t,"content",((s=S.og)==null?void 0:s.description)??S.description),p(r,"name","twitter:description"),p(r,"content",(($=S.og)==null?void 0:$.description)??S.description)},m(l,s){c(l,a,s),c(l,n,s),c(l,t,s),c(l,i,s),c(l,r,s)},p:se,d(l){l&&(_(a),_(n),_(t),_(i),_(r))}}}function Ta(u){let a,n,t;return{c(){a=A("meta"),n=g(),t=A("meta"),this.h()},l(i){a=w(i,"META",{property:!0,content:!0}),n=y(i),t=w(i,"META",{name:!0,content:!0}),this.h()},h(){var i,r;p(a,"property","og:image"),p(a,"content",Fs((i=S.og)==null?void 0:i.image)),p(t,"name","twitter:image"),p(t,"content",Fs((r=S.og)==null?void 0:r.image))},m(i,r){c(i,a,r),c(i,n,r),c(i,t,r)},p:se,d(i){i&&(_(a),_(n),_(t))}}}function xs(u){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_options",queryResult:u[0]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&1&&(r.queryResult=t[0]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Os(u){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_overview",queryResult:u[1]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&2&&(r.queryResult=t[1]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Ra(u){let a,n,t,i,r,l;return a=new R({props:{id:"agency",title:"Agency"}}),t=new R({props:{id:"n_postings",title:"Postings",fmt:"#,##0"}}),r=new R({props:{id:"retained_tasks",title:"Tasks",fmt:"#,##0"}}),{c(){j(a.$$.fragment),n=g(),j(t.$$.fragment),i=g(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=y(s),v(t.$$.fragment,s),i=y(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),c(s,n,$),k(t,s,$),c(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function Ns(u){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_posting_volume",queryResult:u[2]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&4&&(r.queryResult=t[2]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Bs(u){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_tasks_rca",queryResult:u[3]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&8&&(r.queryResult=t[3]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Sa(u){let a,n,t,i,r,l;return a=new R({props:{id:"task_text",title:"Task",wrap:"true"}}),t=new R({props:{id:"rca",title:"RCA",fmt:"0.00"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(a.$$.fragment),n=g(),j(t.$$.fragment),i=g(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=y(s),v(t.$$.fragment,s),i=y(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),c(s,n,$),k(t,s,$),c(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function Vs(u){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_tasks_volume",queryResult:u[4]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&16&&(r.queryResult=t[4]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Ga(u){let a,n,t,i,r,l;return a=new R({props:{id:"task_text",title:"Task",wrap:"true"}}),t=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),r=new R({props:{id:"rca",title:"RCA",fmt:"0.00"}}),{c(){j(a.$$.fragment),n=g(),j(t.$$.fragment),i=g(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=y(s),v(t.$$.fragment,s),i=y(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),c(s,n,$),k(t,s,$),c(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function Ws(u){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_work_activities",queryResult:u[5]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&32&&(r.queryResult=t[5]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Ha(u){let a,n,t,i,r,l;return a=new R({props:{id:"wa_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"wa_name",title:"Name",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(a.$$.fragment),n=g(),j(t.$$.fragment),i=g(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=y(s),v(t.$$.fragment,s),i=y(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),c(s,n,$),k(t,s,$),c(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function zs(u){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_skills",queryResult:u[6]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&64&&(r.queryResult=t[6]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Ca(u){let a,n,t,i,r,l;return a=new R({props:{id:"skill_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"skill_label",title:"Skill",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(a.$$.fragment),n=g(),j(t.$$.fragment),i=g(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=y(s),v(t.$$.fragment,s),i=y(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),c(s,n,$),k(t,s,$),c(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function Qs(u){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_onet_skills",queryResult:u[7]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&128&&(r.queryResult=t[7]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Ma(u){let a,n,t,i,r,l;return a=new R({props:{id:"skill_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"inferred_skill_mentions",title:"Mentions",fmt:"#,##0"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(a.$$.fragment),n=g(),j(t.$$.fragment),i=g(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=y(s),v(t.$$.fragment,s),i=y(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),c(s,n,$),k(t,s,$),c(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function Ks(u){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_tools",queryResult:u[8]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&256&&(r.queryResult=t[8]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Ea(u){let a,n,t,i,r,l,s,$;return a=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"tool",title:"Tool",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),s=new R({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){j(a.$$.fragment),n=g(),j(t.$$.fragment),i=g(),j(r.$$.fragment),l=g(),j(s.$$.fragment)},l(f){v(a.$$.fragment,f),n=y(f),v(t.$$.fragment,f),i=y(f),v(r.$$.fragment,f),l=y(f),v(s.$$.fragment,f)},m(f,H){k(a,f,H),c(f,n,H),k(t,f,H),c(f,i,H),k(r,f,H),c(f,l,H),k(s,f,H),$=!0},p:se,i(f){$||(m(a.$$.fragment,f),m(t.$$.fragment,f),m(r.$$.fragment,f),m(s.$$.fragment,f),$=!0)},o(f){b(a.$$.fragment,f),b(t.$$.fragment,f),b(r.$$.fragment,f),b(s.$$.fragment,f),$=!1},d(f){f&&(_(n),_(i),_(l)),d(a,f),d(t,f),d(r,f),d(s,f)}}}function Xs(u){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_technology",queryResult:u[9]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&512&&(r.queryResult=t[9]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function qa(u){let a,n,t,i,r,l,s,$;return a=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"technology",title:"Technology",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),s=new R({props:{id:"concept_rca",title:"RCA",fmt:"0.00"}}),{c(){j(a.$$.fragment),n=g(),j(t.$$.fragment),i=g(),j(r.$$.fragment),l=g(),j(s.$$.fragment)},l(f){v(a.$$.fragment,f),n=y(f),v(t.$$.fragment,f),i=y(f),v(r.$$.fragment,f),l=y(f),v(s.$$.fragment,f)},m(f,H){k(a,f,H),c(f,n,H),k(t,f,H),c(f,i,H),k(r,f,H),c(f,l,H),k(s,f,H),$=!0},p:se,i(f){$||(m(a.$$.fragment,f),m(t.$$.fragment,f),m(r.$$.fragment,f),m(s.$$.fragment,f),$=!0)},o(f){b(a.$$.fragment,f),b(t.$$.fragment,f),b(r.$$.fragment,f),b(s.$$.fragment,f),$=!1},d(f){f&&(_(n),_(i),_(l)),d(a,f),d(t,f),d(r,f),d(s,f)}}}function Ys(u){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_education",queryResult:u[10]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&1024&&(r.queryResult=t[10]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function Pa(u){let a,n,t,i,r,l;return a=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"value",title:"Education",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(a.$$.fragment),n=g(),j(t.$$.fragment),i=g(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=y(s),v(t.$$.fragment,s),i=y(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),c(s,n,$),k(t,s,$),c(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function Zs(u){let a,n;return a=new Ae({props:{queryID:"usajobs_agency_benefits",queryResult:u[11]}}),{c(){j(a.$$.fragment)},l(t){v(a.$$.fragment,t)},m(t,i){k(a,t,i),n=!0},p(t,i){const r={};i[0]&2048&&(r.queryResult=t[11]),a.$set(r)},i(t){n||(m(a.$$.fragment,t),n=!0)},o(t){b(a.$$.fragment,t),n=!1},d(t){d(a,t)}}}function La(u){let a,n,t,i,r,l;return a=new R({props:{id:"concept_rank",title:"Rank",fmt:"0"}}),t=new R({props:{id:"value",title:"Benefit",wrap:"true"}}),r=new R({props:{id:"pct_postings",title:"% posts",fmt:"0.0%"}}),{c(){j(a.$$.fragment),n=g(),j(t.$$.fragment),i=g(),j(r.$$.fragment)},l(s){v(a.$$.fragment,s),n=y(s),v(t.$$.fragment,s),i=y(s),v(r.$$.fragment,s)},m(s,$){k(a,s,$),c(s,n,$),k(t,s,$),c(s,i,$),k(r,s,$),l=!0},p:se,i(s){l||(m(a.$$.fragment,s),m(t.$$.fragment,s),m(r.$$.fragment,s),l=!0)},o(s){b(a.$$.fragment,s),b(t.$$.fragment,s),b(r.$$.fragment,s),l=!1},d(s){s&&(_(n),_(i)),d(a,s),d(t,s),d(r,s)}}}function Ua(u){let a,n,t,i,r,l,s="Select one agency. Tables use federal task, skill, Work Activity, and ConceptSearch aggregates.",$,f,H="<strong>How to read this page.</strong> This is a posting profile for a federal agency, not a staffing or capability profile. RCA highlights distinctive rows within USAJOBS; frequency columns show scale. ConceptSearch rows are descriptive matches, while task rows use profiles after review exclusions.",O,ae,Q,Te,re,St='<a href="#profile-contents">Profile Contents</a>',at,K,Re='<a href="#overview" class="hover:underline">Overview</a> <a href="#tasks" class="hover:underline">Tasks</a> <a href="#work-activities" class="hover:underline">Work Activities</a> <a href="#skills" class="hover:underline">Skills</a> <a href="#tools" class="hover:underline">Tools</a> <a href="#technologies" class="hover:underline">Technologies</a> <a href="#education" class="hover:underline">Education</a> <a href="#benefits" class="hover:underline">Benefits</a> <a href="#data" class="hover:underline">Data</a>',Se,ye,Gt="This profile is the USAJOBS agency posting profile for the selected agency. Task tables use profiles after review exclusions; RCA highlights tasks unusually concentrated in the agency, while the frequent-task table shows the tasks most prevalent across its postings. Tools, technologies, education, and benefits provide descriptive context around the agency task profile.",nt,X,Ge="<strong>Shared terms.</strong> % posts = share of selected agency postings with the row. RCA = row share in the selected agency / row share in USAJOBS overall. Concept rows are descriptive matches, not validated requirements or procurement evidence.",He,ie,Ht='<a href="#overview">Overview</a>',ot,ne,N,lt='<a href="#table-1-selected-usajobs-agency-overview">Table 1. Selected USAJOBS agency overview</a>',rt,ge,it,oe,B,_t='<a href="#figure-ua-1-posting-volume">Figure UA-1. Posting volume</a>',ct,be,ut,Y,Ce="Monthly posting counts show how much evidence supports the selected agency’s profile.",Me,_e,Ct='<a href="#tasks">Tasks</a>',ft,Z,Ee='RCA is revealed comparative advantage; see <a href="/us-lmi/methodology#revealed-comparative-advantage-rca" class="markdown">methods</a>.',qe,pe,Mt="<strong>Generic tasks removed.</strong> These task tables omit rows labeled <code>general</code> in <code>combined_task_allocation_task_categories.csv</code>, so the profile focuses on more agency-specific task signals.",mt,V,Pe='<a href="#most-distinctive-tasks-rca">Most Distinctive Tasks (RCA)</a>',Le,Ue,ce,Et='<a href="#table-2-distinctive-tasks-by-rca-for-the-selected-usajobs-agency">Table 2. Distinctive tasks by RCA for the selected USAJOBS agency</a>',$e,ee,Je,ue,qt='<a href="#most-frequent-tasks">Most Frequent Tasks</a>',yt,le,W,gt='<a href="#table-3-frequent-tasks-for-the-selected-usajobs-agency">Table 3. Frequent tasks for the selected USAJOBS agency</a>',bt,de,pt,z,De='<a href="#work-activities">Work Activities</a>',Fe,Ie,fe,Pt='<a href="#table-4-work-activities-for-the-selected-usajobs-agency">Table 4. Work Activities for the selected USAJOBS agency</a>',ke,te,xe,me,Lt='<a href="#skills">Skills</a>',$t,h,he,js='<a href="#table-5-extracted-skills-for-the-selected-usajobs-agency">Table 5. Extracted skills for the selected USAJOBS agency</a>',Ot,dt,Nt,Ne,ws='<a href="#crosswalked-onet-skills-from-work-activities">Crosswalked O*NET Skills (from Work Activities)</a>',Bt,Ut,Be,As='<a href="#table-6-crosswalked-onet-skills-for-the-selected-usajobs-agency">Table 6. Crosswalked O*NET skills for the selected USAJOBS agency</a>',Vt,kt,Wt,Ve,hs='<a href="#tools">Tools</a>',zt,Jt,We,Ts='<a href="#table-7-tools-for-the-selected-usajobs-agency">Table 7. Tools for the selected USAJOBS agency</a>',Qt,vt,Kt,ze,Rs='<a href="#technologies">Technologies</a>',Xt,Dt,Qe,Ss='<a href="#table-8-technology-concepts-for-the-selected-usajobs-agency">Table 8. Technology concepts for the selected USAJOBS agency</a>',Yt,jt,Zt,Ke,Gs='<a href="#education">Education</a>',es,Ft,Xe,Hs='<a href="#table-9-education-concepts-for-the-selected-usajobs-agency">Table 9. Education concepts for the selected USAJOBS agency</a>',ts,wt,ss,Ye,Cs='<a href="#benefits">Benefits</a>',as,It,Ze,Ms='<a href="#table-10-benefit-concepts-for-the-selected-usajobs-agency">Table 10. Benefit concepts for the selected USAJOBS agency</a>',ns,At,os,et,Es='<a href="#data">Data</a>',ls,ht,qs='Unreviewed links are retained unless blocklisted; see <a href="/us-lmi/methodology#applying-review-exclusions-to-profiles" class="markdown">how review exclusions are applied</a>.',rs,Tt,Ps='Sources used here: <code class="markdown">AGGR_AgencyTaskSignatures</code>, <code class="markdown">AGGR_USAJobsAgencyWAProfile</code>, <code class="markdown">AGGR_USAJobsAgencySkillProfile</code>, <code class="markdown">AGGR_USAJobsAgencyOnetSkillProfile</code>, and <code class="markdown">AGGR_USAJobsEntityConceptProfile</code>. The task profile and crosswalked O*NET skill sources read <code class="markdown">JaatTasks_Validated</code>; crosswalked O*NET skills use the O*NET 27.2 Skills-to-Work-Activities crosswalk.',is,Rt,Ls='Evidence path: RCA is defined in <a href="/us-lmi/methodology#revealed-comparative-advantage-rca" class="markdown">Methods</a>. USAJOBS source and agreement artifacts are listed in <a href="/us-lmi/methodology/audit-trail" class="markdown">Agreement And Audit Trail</a>.',_s,tt=typeof S<"u"&&S.title&&S.hide_title!==!0&&va();function ea(e,o){return typeof S<"u"&&S.title?wa:ja}let xt=ea()(u),st=typeof S=="object"&&Aa(),C=u[0]&&xs(u);Q=new pa({props:{data:u[0],name:"usajobs_agency",value:"agency",defaultValue:"Federal Aviation Administration",title:"Agency"}});let M=u[1]&&Os(u);ge=new Oe({props:{data:u[1],rows:"1",$$slots:{default:[Ra]},$$scope:{ctx:u}}});let E=u[2]&&Ns(u);be=new da({props:{data:u[2],x:"month_start",y:"n_postings",yAxisTitle:"Postings",title:"Posting volume"}});let q=u[3]&&Bs(u);ee=new Oe({props:{data:u[3],rowsPerPage:"10",$$slots:{default:[Sa]},$$scope:{ctx:u}}});let P=u[4]&&Vs(u);de=new Oe({props:{data:u[4],rowsPerPage:"10",$$slots:{default:[Ga]},$$scope:{ctx:u}}});let L=u[5]&&Ws(u);te=new Oe({props:{data:u[5],rowsPerPage:"25",$$slots:{default:[Ha]},$$scope:{ctx:u}}});let U=u[6]&&zs(u);dt=new Oe({props:{data:u[6],rowsPerPage:"25",$$slots:{default:[Ca]},$$scope:{ctx:u}}});let J=u[7]&&Qs(u);kt=new Oe({props:{data:u[7],groupBy:"skill_name",rowsPerPage:"25",$$slots:{default:[Ma]},$$scope:{ctx:u}}});let D=u[8]&&Ks(u);vt=new Oe({props:{data:u[8],rowsPerPage:"10",$$slots:{default:[Ea]},$$scope:{ctx:u}}});let F=u[9]&&Xs(u);jt=new Oe({props:{data:u[9],rowsPerPage:"10",$$slots:{default:[qa]},$$scope:{ctx:u}}});let I=u[10]&&Ys(u);wt=new Oe({props:{data:u[10],rowsPerPage:"10",$$slots:{default:[Pa]},$$scope:{ctx:u}}});let x=u[11]&&Zs(u);return At=new Oe({props:{data:u[11],rowsPerPage:"10",$$slots:{default:[La]},$$scope:{ctx:u}}}),{c(){tt&&tt.c(),a=g(),xt.c(),n=A("meta"),t=A("meta"),st&&st.c(),i=us(),r=g(),l=A("p"),l.textContent=s,$=g(),f=A("div"),f.innerHTML=H,O=g(),C&&C.c(),ae=g(),j(Q.$$.fragment),Te=g(),re=A("h2"),re.innerHTML=St,at=g(),K=A("div"),K.innerHTML=Re,Se=g(),ye=A("p"),ye.textContent=Gt,nt=g(),X=A("div"),X.innerHTML=Ge,He=g(),ie=A("h2"),ie.innerHTML=Ht,ot=g(),M&&M.c(),ne=g(),N=A("h3"),N.innerHTML=lt,rt=g(),j(ge.$$.fragment),it=g(),E&&E.c(),oe=g(),B=A("h3"),B.innerHTML=_t,ct=g(),j(be.$$.fragment),ut=g(),Y=A("p"),Y.textContent=Ce,Me=g(),_e=A("h2"),_e.innerHTML=Ct,ft=g(),Z=A("p"),Z.innerHTML=Ee,qe=g(),pe=A("div"),pe.innerHTML=Mt,mt=g(),V=A("h3"),V.innerHTML=Pe,Le=g(),q&&q.c(),Ue=g(),ce=A("h3"),ce.innerHTML=Et,$e=g(),j(ee.$$.fragment),Je=g(),ue=A("h3"),ue.innerHTML=qt,yt=g(),P&&P.c(),le=g(),W=A("h3"),W.innerHTML=gt,bt=g(),j(de.$$.fragment),pt=g(),z=A("h2"),z.innerHTML=De,Fe=g(),L&&L.c(),Ie=g(),fe=A("h3"),fe.innerHTML=Pt,ke=g(),j(te.$$.fragment),xe=g(),me=A("h2"),me.innerHTML=Lt,$t=g(),U&&U.c(),h=g(),he=A("h3"),he.innerHTML=js,Ot=g(),j(dt.$$.fragment),Nt=g(),Ne=A("h3"),Ne.innerHTML=ws,Bt=g(),J&&J.c(),Ut=g(),Be=A("h3"),Be.innerHTML=As,Vt=g(),j(kt.$$.fragment),Wt=g(),Ve=A("h2"),Ve.innerHTML=hs,zt=g(),D&&D.c(),Jt=g(),We=A("h3"),We.innerHTML=Ts,Qt=g(),j(vt.$$.fragment),Kt=g(),ze=A("h2"),ze.innerHTML=Rs,Xt=g(),F&&F.c(),Dt=g(),Qe=A("h3"),Qe.innerHTML=Ss,Yt=g(),j(jt.$$.fragment),Zt=g(),Ke=A("h2"),Ke.innerHTML=Gs,es=g(),I&&I.c(),Ft=g(),Xe=A("h3"),Xe.innerHTML=Hs,ts=g(),j(wt.$$.fragment),ss=g(),Ye=A("h2"),Ye.innerHTML=Cs,as=g(),x&&x.c(),It=g(),Ze=A("h3"),Ze.innerHTML=Ms,ns=g(),j(At.$$.fragment),os=g(),et=A("h2"),et.innerHTML=Es,ls=g(),ht=A("p"),ht.innerHTML=qs,rs=g(),Tt=A("p"),Tt.innerHTML=Ps,is=g(),Rt=A("p"),Rt.innerHTML=Ls,this.h()},l(e){tt&&tt.l(e),a=y(e);const o=sa("svelte-2igo1p",document.head);xt.l(o),n=w(o,"META",{name:!0,content:!0}),t=w(o,"META",{name:!0,content:!0}),st&&st.l(o),i=us(),o.forEach(_),r=y(e),l=w(e,"P",{class:!0,"data-svelte-h":!0}),T(l)!=="svelte-17wouf5"&&(l.textContent=s),$=y(e),f=w(e,"DIV",{class:!0,"data-svelte-h":!0}),T(f)!=="svelte-1c9sq5n"&&(f.innerHTML=H),O=y(e),C&&C.l(e),ae=y(e),v(Q.$$.fragment,e),Te=y(e),re=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(re)!=="svelte-1dmnoaj"&&(re.innerHTML=St),at=y(e),K=w(e,"DIV",{class:!0,"data-svelte-h":!0}),T(K)!=="svelte-t5k8nl"&&(K.innerHTML=Re),Se=y(e),ye=w(e,"P",{class:!0,"data-svelte-h":!0}),T(ye)!=="svelte-gjh0i"&&(ye.textContent=Gt),nt=y(e),X=w(e,"DIV",{class:!0,"data-svelte-h":!0}),T(X)!=="svelte-jmgcfl"&&(X.innerHTML=Ge),He=y(e),ie=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(ie)!=="svelte-16zqni9"&&(ie.innerHTML=Ht),ot=y(e),M&&M.l(e),ne=y(e),N=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(N)!=="svelte-rmh2qf"&&(N.innerHTML=lt),rt=y(e),v(ge.$$.fragment,e),it=y(e),E&&E.l(e),oe=y(e),B=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(B)!=="svelte-1pbk6a8"&&(B.innerHTML=_t),ct=y(e),v(be.$$.fragment,e),ut=y(e),Y=w(e,"P",{class:!0,"data-svelte-h":!0}),T(Y)!=="svelte-1b55ayh"&&(Y.textContent=Ce),Me=y(e),_e=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(_e)!=="svelte-161blmm"&&(_e.innerHTML=Ct),ft=y(e),Z=w(e,"P",{class:!0,"data-svelte-h":!0}),T(Z)!=="svelte-1kr2ren"&&(Z.innerHTML=Ee),qe=y(e),pe=w(e,"DIV",{class:!0,"data-svelte-h":!0}),T(pe)!=="svelte-zm4nm6"&&(pe.innerHTML=Mt),mt=y(e),V=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(V)!=="svelte-vyj2ku"&&(V.innerHTML=Pe),Le=y(e),q&&q.l(e),Ue=y(e),ce=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(ce)!=="svelte-olix0i"&&(ce.innerHTML=Et),$e=y(e),v(ee.$$.fragment,e),Je=y(e),ue=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(ue)!=="svelte-1c63z5h"&&(ue.innerHTML=qt),yt=y(e),P&&P.l(e),le=y(e),W=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(W)!=="svelte-i5i8iy"&&(W.innerHTML=gt),bt=y(e),v(de.$$.fragment,e),pt=y(e),z=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(z)!=="svelte-x7f80k"&&(z.innerHTML=De),Fe=y(e),L&&L.l(e),Ie=y(e),fe=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(fe)!=="svelte-p1oi31"&&(fe.innerHTML=Pt),ke=y(e),v(te.$$.fragment,e),xe=y(e),me=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(me)!=="svelte-5ttn72"&&(me.innerHTML=Lt),$t=y(e),U&&U.l(e),h=y(e),he=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(he)!=="svelte-1nh8wna"&&(he.innerHTML=js),Ot=y(e),v(dt.$$.fragment,e),Nt=y(e),Ne=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(Ne)!=="svelte-hxcjdt"&&(Ne.innerHTML=ws),Bt=y(e),J&&J.l(e),Ut=y(e),Be=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(Be)!=="svelte-1nps2g3"&&(Be.innerHTML=As),Vt=y(e),v(kt.$$.fragment,e),Wt=y(e),Ve=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(Ve)!=="svelte-lc41ol"&&(Ve.innerHTML=hs),zt=y(e),D&&D.l(e),Jt=y(e),We=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(We)!=="svelte-1o2i0sd"&&(We.innerHTML=Ts),Qt=y(e),v(vt.$$.fragment,e),Kt=y(e),ze=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(ze)!=="svelte-78v6ii"&&(ze.innerHTML=Rs),Xt=y(e),F&&F.l(e),Dt=y(e),Qe=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(Qe)!=="svelte-1kxg8p2"&&(Qe.innerHTML=Ss),Yt=y(e),v(jt.$$.fragment,e),Zt=y(e),Ke=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(Ke)!=="svelte-25sv0q"&&(Ke.innerHTML=Gs),es=y(e),I&&I.l(e),Ft=y(e),Xe=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(Xe)!=="svelte-jvvxsx"&&(Xe.innerHTML=Hs),ts=y(e),v(wt.$$.fragment,e),ss=y(e),Ye=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(Ye)!=="svelte-dfu8xo"&&(Ye.innerHTML=Cs),as=y(e),x&&x.l(e),It=y(e),Ze=w(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),T(Ze)!=="svelte-3jq55s"&&(Ze.innerHTML=Ms),ns=y(e),v(At.$$.fragment,e),os=y(e),et=w(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),T(et)!=="svelte-1ouuc1c"&&(et.innerHTML=Es),ls=y(e),ht=w(e,"P",{class:!0,"data-svelte-h":!0}),T(ht)!=="svelte-1nzx8yf"&&(ht.innerHTML=qs),rs=y(e),Tt=w(e,"P",{class:!0,"data-svelte-h":!0}),T(Tt)!=="svelte-czfvmm"&&(Tt.innerHTML=Ps),is=y(e),Rt=w(e,"P",{class:!0,"data-svelte-h":!0}),T(Rt)!=="svelte-1iujzj5"&&(Rt.innerHTML=Ls),this.h()},h(){p(n,"name","twitter:card"),p(n,"content","summary_large_image"),p(t,"name","twitter:site"),p(t,"content","@evidence_dev"),p(l,"class","markdown"),p(f,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),p(re,"class","markdown"),p(re,"id","profile-contents"),p(K,"class","flex flex-wrap gap-x-4 gap-y-2 text-sm border-y border-gray-200 py-3 mb-6"),p(ye,"class","markdown"),p(X,"class","text-sm my-3"),p(ie,"class","markdown"),p(ie,"id","overview"),p(N,"class","markdown"),p(N,"id","table-1-selected-usajobs-agency-overview"),p(B,"class","markdown"),p(B,"id","figure-ua-1-posting-volume"),p(Y,"class","text-sm text-gray-600 mt-2"),p(_e,"class","markdown"),p(_e,"id","tasks"),p(Z,"class","markdown"),p(pe,"class","border-l-4 border-amber-500 bg-amber-50 px-4 py-3 my-4 text-sm text-gray-700"),p(V,"class","markdown"),p(V,"id","most-distinctive-tasks-rca"),p(ce,"class","markdown"),p(ce,"id","table-2-distinctive-tasks-by-rca-for-the-selected-usajobs-agency"),p(ue,"class","markdown"),p(ue,"id","most-frequent-tasks"),p(W,"class","markdown"),p(W,"id","table-3-frequent-tasks-for-the-selected-usajobs-agency"),p(z,"class","markdown"),p(z,"id","work-activities"),p(fe,"class","markdown"),p(fe,"id","table-4-work-activities-for-the-selected-usajobs-agency"),p(me,"class","markdown"),p(me,"id","skills"),p(he,"class","markdown"),p(he,"id","table-5-extracted-skills-for-the-selected-usajobs-agency"),p(Ne,"class","markdown"),p(Ne,"id","crosswalked-onet-skills-from-work-activities"),p(Be,"class","markdown"),p(Be,"id","table-6-crosswalked-onet-skills-for-the-selected-usajobs-agency"),p(Ve,"class","markdown"),p(Ve,"id","tools"),p(We,"class","markdown"),p(We,"id","table-7-tools-for-the-selected-usajobs-agency"),p(ze,"class","markdown"),p(ze,"id","technologies"),p(Qe,"class","markdown"),p(Qe,"id","table-8-technology-concepts-for-the-selected-usajobs-agency"),p(Ke,"class","markdown"),p(Ke,"id","education"),p(Xe,"class","markdown"),p(Xe,"id","table-9-education-concepts-for-the-selected-usajobs-agency"),p(Ye,"class","markdown"),p(Ye,"id","benefits"),p(Ze,"class","markdown"),p(Ze,"id","table-10-benefit-concepts-for-the-selected-usajobs-agency"),p(et,"class","markdown"),p(et,"id","data"),p(ht,"class","markdown"),p(Tt,"class","markdown"),p(Rt,"class","markdown")},m(e,o){tt&&tt.m(e,o),c(e,a,o),xt.m(document.head,null),cs(document.head,n),cs(document.head,t),st&&st.m(document.head,null),cs(document.head,i),c(e,r,o),c(e,l,o),c(e,$,o),c(e,f,o),c(e,O,o),C&&C.m(e,o),c(e,ae,o),k(Q,e,o),c(e,Te,o),c(e,re,o),c(e,at,o),c(e,K,o),c(e,Se,o),c(e,ye,o),c(e,nt,o),c(e,X,o),c(e,He,o),c(e,ie,o),c(e,ot,o),M&&M.m(e,o),c(e,ne,o),c(e,N,o),c(e,rt,o),k(ge,e,o),c(e,it,o),E&&E.m(e,o),c(e,oe,o),c(e,B,o),c(e,ct,o),k(be,e,o),c(e,ut,o),c(e,Y,o),c(e,Me,o),c(e,_e,o),c(e,ft,o),c(e,Z,o),c(e,qe,o),c(e,pe,o),c(e,mt,o),c(e,V,o),c(e,Le,o),q&&q.m(e,o),c(e,Ue,o),c(e,ce,o),c(e,$e,o),k(ee,e,o),c(e,Je,o),c(e,ue,o),c(e,yt,o),P&&P.m(e,o),c(e,le,o),c(e,W,o),c(e,bt,o),k(de,e,o),c(e,pt,o),c(e,z,o),c(e,Fe,o),L&&L.m(e,o),c(e,Ie,o),c(e,fe,o),c(e,ke,o),k(te,e,o),c(e,xe,o),c(e,me,o),c(e,$t,o),U&&U.m(e,o),c(e,h,o),c(e,he,o),c(e,Ot,o),k(dt,e,o),c(e,Nt,o),c(e,Ne,o),c(e,Bt,o),J&&J.m(e,o),c(e,Ut,o),c(e,Be,o),c(e,Vt,o),k(kt,e,o),c(e,Wt,o),c(e,Ve,o),c(e,zt,o),D&&D.m(e,o),c(e,Jt,o),c(e,We,o),c(e,Qt,o),k(vt,e,o),c(e,Kt,o),c(e,ze,o),c(e,Xt,o),F&&F.m(e,o),c(e,Dt,o),c(e,Qe,o),c(e,Yt,o),k(jt,e,o),c(e,Zt,o),c(e,Ke,o),c(e,es,o),I&&I.m(e,o),c(e,Ft,o),c(e,Xe,o),c(e,ts,o),k(wt,e,o),c(e,ss,o),c(e,Ye,o),c(e,as,o),x&&x.m(e,o),c(e,It,o),c(e,Ze,o),c(e,ns,o),k(At,e,o),c(e,os,o),c(e,et,o),c(e,ls,o),c(e,ht,o),c(e,rs,o),c(e,Tt,o),c(e,is,o),c(e,Rt,o),_s=!0},p(e,o){typeof S<"u"&&S.title&&S.hide_title!==!0&&tt.p(e,o),xt.p(e,o),typeof S=="object"&&st.p(e,o),e[0]?C?(C.p(e,o),o[0]&1&&m(C,1)):(C=xs(e),C.c(),m(C,1),C.m(ae.parentNode,ae)):C&&(je(),b(C,1,1,()=>{C=null}),ve());const Us={};o[0]&1&&(Us.data=e[0]),Q.$set(Us),e[1]?M?(M.p(e,o),o[0]&2&&m(M,1)):(M=Os(e),M.c(),m(M,1),M.m(ne.parentNode,ne)):M&&(je(),b(M,1,1,()=>{M=null}),ve());const fs={};o[0]&2&&(fs.data=e[1]),o[2]&4194304&&(fs.$$scope={dirty:o,ctx:e}),ge.$set(fs),e[2]?E?(E.p(e,o),o[0]&4&&m(E,1)):(E=Ns(e),E.c(),m(E,1),E.m(oe.parentNode,oe)):E&&(je(),b(E,1,1,()=>{E=null}),ve());const Js={};o[0]&4&&(Js.data=e[2]),be.$set(Js),e[3]?q?(q.p(e,o),o[0]&8&&m(q,1)):(q=Bs(e),q.c(),m(q,1),q.m(Ue.parentNode,Ue)):q&&(je(),b(q,1,1,()=>{q=null}),ve());const ms={};o[0]&8&&(ms.data=e[3]),o[2]&4194304&&(ms.$$scope={dirty:o,ctx:e}),ee.$set(ms),e[4]?P?(P.p(e,o),o[0]&16&&m(P,1)):(P=Vs(e),P.c(),m(P,1),P.m(le.parentNode,le)):P&&(je(),b(P,1,1,()=>{P=null}),ve());const ys={};o[0]&16&&(ys.data=e[4]),o[2]&4194304&&(ys.$$scope={dirty:o,ctx:e}),de.$set(ys),e[5]?L?(L.p(e,o),o[0]&32&&m(L,1)):(L=Ws(e),L.c(),m(L,1),L.m(Ie.parentNode,Ie)):L&&(je(),b(L,1,1,()=>{L=null}),ve());const gs={};o[0]&32&&(gs.data=e[5]),o[2]&4194304&&(gs.$$scope={dirty:o,ctx:e}),te.$set(gs),e[6]?U?(U.p(e,o),o[0]&64&&m(U,1)):(U=zs(e),U.c(),m(U,1),U.m(h.parentNode,h)):U&&(je(),b(U,1,1,()=>{U=null}),ve());const bs={};o[0]&64&&(bs.data=e[6]),o[2]&4194304&&(bs.$$scope={dirty:o,ctx:e}),dt.$set(bs),e[7]?J?(J.p(e,o),o[0]&128&&m(J,1)):(J=Qs(e),J.c(),m(J,1),J.m(Ut.parentNode,Ut)):J&&(je(),b(J,1,1,()=>{J=null}),ve());const ps={};o[0]&128&&(ps.data=e[7]),o[2]&4194304&&(ps.$$scope={dirty:o,ctx:e}),kt.$set(ps),e[8]?D?(D.p(e,o),o[0]&256&&m(D,1)):(D=Ks(e),D.c(),m(D,1),D.m(Jt.parentNode,Jt)):D&&(je(),b(D,1,1,()=>{D=null}),ve());const $s={};o[0]&256&&($s.data=e[8]),o[2]&4194304&&($s.$$scope={dirty:o,ctx:e}),vt.$set($s),e[9]?F?(F.p(e,o),o[0]&512&&m(F,1)):(F=Xs(e),F.c(),m(F,1),F.m(Dt.parentNode,Dt)):F&&(je(),b(F,1,1,()=>{F=null}),ve());const ds={};o[0]&512&&(ds.data=e[9]),o[2]&4194304&&(ds.$$scope={dirty:o,ctx:e}),jt.$set(ds),e[10]?I?(I.p(e,o),o[0]&1024&&m(I,1)):(I=Ys(e),I.c(),m(I,1),I.m(Ft.parentNode,Ft)):I&&(je(),b(I,1,1,()=>{I=null}),ve());const ks={};o[0]&1024&&(ks.data=e[10]),o[2]&4194304&&(ks.$$scope={dirty:o,ctx:e}),wt.$set(ks),e[11]?x?(x.p(e,o),o[0]&2048&&m(x,1)):(x=Zs(e),x.c(),m(x,1),x.m(It.parentNode,It)):x&&(je(),b(x,1,1,()=>{x=null}),ve());const vs={};o[0]&2048&&(vs.data=e[11]),o[2]&4194304&&(vs.$$scope={dirty:o,ctx:e}),At.$set(vs)},i(e){_s||(m(C),m(Q.$$.fragment,e),m(M),m(ge.$$.fragment,e),m(E),m(be.$$.fragment,e),m(q),m(ee.$$.fragment,e),m(P),m(de.$$.fragment,e),m(L),m(te.$$.fragment,e),m(U),m(dt.$$.fragment,e),m(J),m(kt.$$.fragment,e),m(D),m(vt.$$.fragment,e),m(F),m(jt.$$.fragment,e),m(I),m(wt.$$.fragment,e),m(x),m(At.$$.fragment,e),_s=!0)},o(e){b(C),b(Q.$$.fragment,e),b(M),b(ge.$$.fragment,e),b(E),b(be.$$.fragment,e),b(q),b(ee.$$.fragment,e),b(P),b(de.$$.fragment,e),b(L),b(te.$$.fragment,e),b(U),b(dt.$$.fragment,e),b(J),b(kt.$$.fragment,e),b(D),b(vt.$$.fragment,e),b(F),b(jt.$$.fragment,e),b(I),b(wt.$$.fragment,e),b(x),b(At.$$.fragment,e),_s=!1},d(e){e&&(_(a),_(r),_(l),_($),_(f),_(O),_(ae),_(Te),_(re),_(at),_(K),_(Se),_(ye),_(nt),_(X),_(He),_(ie),_(ot),_(ne),_(N),_(rt),_(it),_(oe),_(B),_(ct),_(ut),_(Y),_(Me),_(_e),_(ft),_(Z),_(qe),_(pe),_(mt),_(V),_(Le),_(Ue),_(ce),_($e),_(Je),_(ue),_(yt),_(le),_(W),_(bt),_(pt),_(z),_(Fe),_(Ie),_(fe),_(ke),_(xe),_(me),_($t),_(h),_(he),_(Ot),_(Nt),_(Ne),_(Bt),_(Ut),_(Be),_(Vt),_(Wt),_(Ve),_(zt),_(Jt),_(We),_(Qt),_(Kt),_(ze),_(Xt),_(Dt),_(Qe),_(Yt),_(Zt),_(Ke),_(es),_(Ft),_(Xe),_(ts),_(ss),_(Ye),_(as),_(It),_(Ze),_(ns),_(os),_(et),_(ls),_(ht),_(rs),_(Tt),_(is),_(Rt)),tt&&tt.d(e),xt.d(e),_(n),_(t),st&&st.d(e),_(i),C&&C.d(e),d(Q,e),M&&M.d(e),d(ge,e),E&&E.d(e),d(be,e),q&&q.d(e),d(ee,e),P&&P.d(e),d(de,e),L&&L.d(e),d(te,e),U&&U.d(e),d(dt,e),J&&J.d(e),d(kt,e),D&&D.d(e),d(vt,e),F&&F.d(e),d(jt,e),I&&I.d(e),d(wt,e),x&&x.d(e),d(At,e)}}}const S={title:"Agency Posting Profile"};function Ja(u,a,n){let t,i;Ds(u,$a,h=>n(63,t=h)),Ds(u,Is,h=>n(68,i=h));let{data:r}=a,{data:l={},customFormattingSettings:s,__db:$,inputs:f}=r;aa(Is,i="f1d936bbe3cd51aee0605a9e50b98154",i);let H=ma(fa(f));na(H.subscribe(h=>n(14,f=h))),oa(ba,{getCustomFormats:()=>s.customFormats||[]});const O=(h,he)=>ka($.query,h,{query_name:he});ya(O),t.params,la(()=>!0);let ae={initialData:void 0,initialError:void 0},Q=G`select distinct agency
from usajobs.AGGR_AgencyTaskSignatures
order by agency`,Te=`select distinct agency
from usajobs.AGGR_AgencyTaskSignatures
order by agency`;l.usajobs_agency_options_data&&(l.usajobs_agency_options_data instanceof Error?ae.initialError=l.usajobs_agency_options_data:ae.initialData=l.usajobs_agency_options_data,l.usajobs_agency_options_columns&&(ae.knownColumns=l.usajobs_agency_options_columns));let re,St=!1;const at=we.createReactive({callback:h=>{n(0,re=h)},execFn:O},{id:"usajobs_agency_options",...ae});at(Te,{noResolve:Q,...ae}),globalThis[Symbol.for("usajobs_agency_options")]={get value(){return re}};let K={initialData:void 0,initialError:void 0},Re=G`select
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
group by 1`;l.usajobs_agency_overview_data&&(l.usajobs_agency_overview_data instanceof Error?K.initialError=l.usajobs_agency_overview_data:K.initialData=l.usajobs_agency_overview_data,l.usajobs_agency_overview_columns&&(K.knownColumns=l.usajobs_agency_overview_columns));let ye,Gt=!1;const nt=we.createReactive({callback:h=>{n(1,ye=h)},execFn:O},{id:"usajobs_agency_overview",...K});nt(Se,{noResolve:Re,...K}),globalThis[Symbol.for("usajobs_agency_overview")]={get value(){return ye}};let X={initialData:void 0,initialError:void 0},Ge=G`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsAgencyPostingVolume
where agency = '${f.usajobs_agency.value}'
order by month_start`,He=`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsAgencyPostingVolume
where agency = '${f.usajobs_agency.value}'
order by month_start`;l.usajobs_agency_posting_volume_data&&(l.usajobs_agency_posting_volume_data instanceof Error?X.initialError=l.usajobs_agency_posting_volume_data:X.initialData=l.usajobs_agency_posting_volume_data,l.usajobs_agency_posting_volume_columns&&(X.knownColumns=l.usajobs_agency_posting_volume_columns));let ie,Ht=!1;const ot=we.createReactive({callback:h=>{n(2,ie=h)},execFn:O},{id:"usajobs_agency_posting_volume",...X});ot(He,{noResolve:Ge,...X}),globalThis[Symbol.for("usajobs_agency_posting_volume")]={get value(){return ie}};let ne={initialData:void 0,initialError:void 0},N=G`select
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
order by agency_rank`;l.usajobs_agency_tasks_rca_data&&(l.usajobs_agency_tasks_rca_data instanceof Error?ne.initialError=l.usajobs_agency_tasks_rca_data:ne.initialData=l.usajobs_agency_tasks_rca_data,l.usajobs_agency_tasks_rca_columns&&(ne.knownColumns=l.usajobs_agency_tasks_rca_columns));let rt,ge=!1;const it=we.createReactive({callback:h=>{n(3,rt=h)},execFn:O},{id:"usajobs_agency_tasks_rca",...ne});it(lt,{noResolve:N,...ne}),globalThis[Symbol.for("usajobs_agency_tasks_rca")]={get value(){return rt}};let oe={initialData:void 0,initialError:void 0},B=G`select
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
order by wa_rank`;l.usajobs_agency_work_activities_data&&(l.usajobs_agency_work_activities_data instanceof Error?Y.initialError=l.usajobs_agency_work_activities_data:Y.initialData=l.usajobs_agency_work_activities_data,l.usajobs_agency_work_activities_columns&&(Y.knownColumns=l.usajobs_agency_work_activities_columns));let _e,Ct=!1;const ft=we.createReactive({callback:h=>{n(5,_e=h)},execFn:O},{id:"usajobs_agency_work_activities",...Y});ft(Me,{noResolve:Ce,...Y}),globalThis[Symbol.for("usajobs_agency_work_activities")]={get value(){return _e}};let Z={initialData:void 0,initialError:void 0},Ee=G`select
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
order by skill_rank`;l.usajobs_agency_skills_data&&(l.usajobs_agency_skills_data instanceof Error?Z.initialError=l.usajobs_agency_skills_data:Z.initialData=l.usajobs_agency_skills_data,l.usajobs_agency_skills_columns&&(Z.knownColumns=l.usajobs_agency_skills_columns));let pe,Mt=!1;const mt=we.createReactive({callback:h=>{n(6,pe=h)},execFn:O},{id:"usajobs_agency_skills",...Z});mt(qe,{noResolve:Ee,...Z}),globalThis[Symbol.for("usajobs_agency_skills")]={get value(){return pe}};let V={initialData:void 0,initialError:void 0},Pe=G`select
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
order by skill_rank`;l.usajobs_agency_onet_skills_data&&(l.usajobs_agency_onet_skills_data instanceof Error?V.initialError=l.usajobs_agency_onet_skills_data:V.initialData=l.usajobs_agency_onet_skills_data,l.usajobs_agency_onet_skills_columns&&(V.knownColumns=l.usajobs_agency_onet_skills_columns));let Ue,ce=!1;const Et=we.createReactive({callback:h=>{n(7,Ue=h)},execFn:O},{id:"usajobs_agency_onet_skills",...V});Et(Le,{noResolve:Pe,...V}),globalThis[Symbol.for("usajobs_agency_onet_skills")]={get value(){return Ue}};let $e={initialData:void 0,initialError:void 0},ee=G`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'tools'
order by concept_rank`,Je=`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'tools'
order by concept_rank`;l.usajobs_agency_tools_data&&(l.usajobs_agency_tools_data instanceof Error?$e.initialError=l.usajobs_agency_tools_data:$e.initialData=l.usajobs_agency_tools_data,l.usajobs_agency_tools_columns&&($e.knownColumns=l.usajobs_agency_tools_columns));let ue,qt=!1;const yt=we.createReactive({callback:h=>{n(8,ue=h)},execFn:O},{id:"usajobs_agency_tools",...$e});yt(Je,{noResolve:ee,...$e}),globalThis[Symbol.for("usajobs_agency_tools")]={get value(){return ue}};let le={initialData:void 0,initialError:void 0},W=G`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'technology'
order by concept_rank`,gt=`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'technology'
order by concept_rank`;l.usajobs_agency_technology_data&&(l.usajobs_agency_technology_data instanceof Error?le.initialError=l.usajobs_agency_technology_data:le.initialData=l.usajobs_agency_technology_data,l.usajobs_agency_technology_columns&&(le.knownColumns=l.usajobs_agency_technology_columns));let bt,de=!1;const pt=we.createReactive({callback:h=>{n(9,bt=h)},execFn:O},{id:"usajobs_agency_technology",...le});pt(gt,{noResolve:W,...le}),globalThis[Symbol.for("usajobs_agency_technology")]={get value(){return bt}};let z={initialData:void 0,initialError:void 0},De=G`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'education'
order by concept_rank`,Fe=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'education'
order by concept_rank`;l.usajobs_agency_education_data&&(l.usajobs_agency_education_data instanceof Error?z.initialError=l.usajobs_agency_education_data:z.initialData=l.usajobs_agency_education_data,l.usajobs_agency_education_columns&&(z.knownColumns=l.usajobs_agency_education_columns));let Ie,fe=!1;const Pt=we.createReactive({callback:h=>{n(10,Ie=h)},execFn:O},{id:"usajobs_agency_education",...z});Pt(Fe,{noResolve:De,...z}),globalThis[Symbol.for("usajobs_agency_education")]={get value(){return Ie}};let ke={initialData:void 0,initialError:void 0},te=G`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'benefits'
order by concept_rank`,xe=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'benefits'
order by concept_rank`;l.usajobs_agency_benefits_data&&(l.usajobs_agency_benefits_data instanceof Error?ke.initialError=l.usajobs_agency_benefits_data:ke.initialData=l.usajobs_agency_benefits_data,l.usajobs_agency_benefits_columns&&(ke.knownColumns=l.usajobs_agency_benefits_columns));let me,Lt=!1;const $t=we.createReactive({callback:h=>{n(11,me=h)},execFn:O},{id:"usajobs_agency_benefits",...ke});return $t(xe,{noResolve:te,...ke}),globalThis[Symbol.for("usajobs_agency_benefits")]={get value(){return me}},u.$$set=h=>{"data"in h&&n(12,r=h.data)},u.$$.update=()=>{u.$$.dirty[0]&4096&&n(13,{data:l={},customFormattingSettings:s,__db:$}=r,l),u.$$.dirty[0]&8192&&ga.set(Object.keys(l).length>0),u.$$.dirty[2]&2&&t.params,u.$$.dirty[0]&491520&&(Q||!St?Q||(at(Te,{noResolve:Q,...ae}),n(18,St=!0)):at(Te,{noResolve:Q})),u.$$.dirty[0]&16384&&n(20,Re=G`select
  agency,
  max(n_postings) as n_postings,
  count(*) as retained_tasks
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
group by 1`),u.$$.dirty[0]&16384&&n(21,Se=`select
  agency,
  max(n_postings) as n_postings,
  count(*) as retained_tasks
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
group by 1`),u.$$.dirty[0]&7864320&&(Re||!Gt?Re||(nt(Se,{noResolve:Re,...K}),n(22,Gt=!0)):nt(Se,{noResolve:Re})),u.$$.dirty[0]&16384&&n(24,Ge=G`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsAgencyPostingVolume
where agency = '${f.usajobs_agency.value}'
order by month_start`),u.$$.dirty[0]&16384&&n(25,He=`select
  month_start,
  n_postings
from usajobs.AGGR_USAJobsAgencyPostingVolume
where agency = '${f.usajobs_agency.value}'
order by month_start`),u.$$.dirty[0]&125829120&&(Ge||!Ht?Ge||(ot(He,{noResolve:Ge,...X}),n(26,Ht=!0)):ot(He,{noResolve:Ge})),u.$$.dirty[0]&16384&&n(28,N=G`select
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  pct_postings
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
  and agency_rank <= 10
order by agency_rank`),u.$$.dirty[0]&16384&&n(29,lt=`select
  cast(task_id as varchar) as task_id,
  task_text,
  rca,
  pct_postings
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
  and agency_rank <= 10
order by agency_rank`),u.$$.dirty[0]&2013265920&&(N||!ge?N||(it(lt,{noResolve:N,...ne}),n(30,ge=!0)):it(lt,{noResolve:N})),u.$$.dirty[0]&16384&&n(32,B=G`select
  cast(task_id as varchar) as task_id,
  task_text,
  pct_postings,
  rca
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
  and volume_rank <= 10
order by volume_rank`),u.$$.dirty[0]&16384&&n(33,_t=`select
  cast(task_id as varchar) as task_id,
  task_text,
  pct_postings,
  rca
from usajobs.AGGR_AgencyTaskSignatures
where agency = '${f.usajobs_agency.value}'
  and volume_rank <= 10
order by volume_rank`),u.$$.dirty[1]&15&&(B||!be?B||(ut(_t,{noResolve:B,...oe}),n(34,be=!0)):ut(_t,{noResolve:B})),u.$$.dirty[0]&16384&&n(36,Ce=G`select
  wa_rank,
  wa_id,
  wa_name,
  pct_postings
from usajobs.AGGR_USAJobsAgencyWAProfile
where agency = '${f.usajobs_agency.value}'
order by wa_rank`),u.$$.dirty[0]&16384&&n(37,Me=`select
  wa_rank,
  wa_id,
  wa_name,
  pct_postings
from usajobs.AGGR_USAJobsAgencyWAProfile
where agency = '${f.usajobs_agency.value}'
order by wa_rank`),u.$$.dirty[1]&240&&(Ce||!Ct?Ce||(ft(Me,{noResolve:Ce,...Y}),n(38,Ct=!0)):ft(Me,{noResolve:Ce})),u.$$.dirty[0]&16384&&n(40,Ee=G`select
  skill_rank,
  skill_code,
  skill_label,
  pct_postings
from usajobs.AGGR_USAJobsAgencySkillProfile
where agency = '${f.usajobs_agency.value}'
order by skill_rank`),u.$$.dirty[0]&16384&&n(41,qe=`select
  skill_rank,
  skill_code,
  skill_label,
  pct_postings
from usajobs.AGGR_USAJobsAgencySkillProfile
where agency = '${f.usajobs_agency.value}'
order by skill_rank`),u.$$.dirty[1]&3840&&(Ee||!Mt?Ee||(mt(qe,{noResolve:Ee,...Z}),n(42,Mt=!0)):mt(qe,{noResolve:Ee})),u.$$.dirty[0]&16384&&n(44,Pe=G`select
  skill_rank,
  skill_id,
  skill_name,
  inferred_skill_mentions,
  postings,
  pct_postings
from usajobs.AGGR_USAJobsAgencyOnetSkillProfile
where agency = '${f.usajobs_agency.value}'
order by skill_rank`),u.$$.dirty[0]&16384&&n(45,Le=`select
  skill_rank,
  skill_id,
  skill_name,
  inferred_skill_mentions,
  postings,
  pct_postings
from usajobs.AGGR_USAJobsAgencyOnetSkillProfile
where agency = '${f.usajobs_agency.value}'
order by skill_rank`),u.$$.dirty[1]&61440&&(Pe||!ce?Pe||(Et(Le,{noResolve:Pe,...V}),n(46,ce=!0)):Et(Le,{noResolve:Pe})),u.$$.dirty[0]&16384&&n(48,ee=G`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'tools'
order by concept_rank`),u.$$.dirty[0]&16384&&n(49,Je=`select concept_rank, subcategory as tool, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'tools'
order by concept_rank`),u.$$.dirty[1]&983040&&(ee||!qt?ee||(yt(Je,{noResolve:ee,...$e}),n(50,qt=!0)):yt(Je,{noResolve:ee})),u.$$.dirty[0]&16384&&n(52,W=G`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'technology'
order by concept_rank`),u.$$.dirty[0]&16384&&n(53,gt=`select concept_rank, subcategory as technology, value as code, pct_postings, concept_rca
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'technology'
order by concept_rank`),u.$$.dirty[1]&15728640&&(W||!de?W||(pt(gt,{noResolve:W,...le}),n(54,de=!0)):pt(gt,{noResolve:W})),u.$$.dirty[0]&16384&&n(56,De=G`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'education'
order by concept_rank`),u.$$.dirty[0]&16384&&n(57,Fe=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'education'
order by concept_rank`),u.$$.dirty[1]&251658240&&(De||!fe?De||(Pt(Fe,{noResolve:De,...z}),n(58,fe=!0)):Pt(Fe,{noResolve:De})),u.$$.dirty[0]&16384&&n(60,te=G`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'benefits'
order by concept_rank`),u.$$.dirty[0]&16384&&n(61,xe=`select concept_rank, subcategory, value, pct_postings
from usajobs.AGGR_USAJobsEntityConceptProfile
where entity_type = 'agency'
  and entity_id = '${f.usajobs_agency.value}'
  and category = 'benefits'
order by concept_rank`),u.$$.dirty[1]&1879048192|u.$$.dirty[2]&1&&(te||!Lt?te||($t(xe,{noResolve:te,...ke}),n(62,Lt=!0)):$t(xe,{noResolve:te}))},n(16,Q=G`select distinct agency
from usajobs.AGGR_AgencyTaskSignatures
order by agency`),n(17,Te=`select distinct agency
from usajobs.AGGR_AgencyTaskSignatures
order by agency`),[re,ye,ie,rt,ct,_e,pe,Ue,ue,bt,Ie,me,r,l,f,ae,Q,Te,St,K,Re,Se,Gt,X,Ge,He,Ht,ne,N,lt,ge,oe,B,_t,be,Y,Ce,Me,Ct,Z,Ee,qe,Mt,V,Pe,Le,ce,$e,ee,Je,qt,le,W,gt,de,z,De,Fe,fe,ke,te,xe,Lt,t]}class Xa extends ca{constructor(a){super(),ua(this,a,Ja,Ua,ta,{data:12},null,[-1,-1,-1])}}export{Xa as component};
