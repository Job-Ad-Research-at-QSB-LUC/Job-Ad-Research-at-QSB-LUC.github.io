import{s as pn,d as i,i as l,a as E,b as v,c as m,h as dn,e as k,f as Ks,g as M,j as Le,k as f,l as T,m as Qa,n as gn,o as bn,p as vn,q as hn,r as be,t as $n,u as wn}from"../chunks/scheduler.TmfZfN_X.js";import{S as yn,i as An,d as $,t as b,a as p,c as _e,m as w,b as y,e as A,g as ce}from"../chunks/index.CKLTamEB.js";import{D as as,C as G}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BlNm2Thl.js";import{w as kn}from"../chunks/entry.CXtrXOLO.js";import{e as Tn,s as xn,Q as rt,p as In,a as Ya,r as Ja,C as Cn}from"../chunks/inferColumnTypes.W_n7LdHz.js";import{h as ee}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as Sn}from"../chunks/stores.C4mfYxeY.js";import{Q as ue}from"../chunks/QueryViewer.Bt3eXBIK.js";import{B as Xs}from"../chunks/BigValue.CQtgzVgo.js";import{S as Mn}from"../chunks/ScatterPlot.BDI9U73L.js";import{p as Rn}from"../chunks/profile.BW8tN6E9.js";function jn(g){let s,n=q.title+"",t;return{c(){s=T("h1"),t=wn(n),this.h()},l(o){s=k(o,"H1",{class:!0});var _=Le(s);t=$n(_,n),_.forEach(i),this.h()},h(){v(s,"class","title")},m(o,_){l(o,s,_),E(s,t)},p:be,d(o){o&&i(s)}}}function Gn(g){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:be,p:be,d:be}}function Ln(g){let s,n,t,o,_;return document.title=s=q.title,{c(){n=f(),t=T("meta"),o=f(),_=T("meta"),this.h()},l(c){n=m(c),t=k(c,"META",{property:!0,content:!0}),o=m(c),_=k(c,"META",{name:!0,content:!0}),this.h()},h(){var c,d;v(t,"property","og:title"),v(t,"content",((c=q.og)==null?void 0:c.title)??q.title),v(_,"name","twitter:title"),v(_,"content",((d=q.og)==null?void 0:d.title)??q.title)},m(c,d){l(c,n,d),l(c,t,d),l(c,o,d),l(c,_,d)},p(c,d){d&0&&s!==(s=q.title)&&(document.title=s)},d(c){c&&(i(n),i(t),i(o),i(_))}}}function Hn(g){var _,c;let s,n,t=(q.description||((_=q.og)==null?void 0:_.description))&&En(),o=((c=q.og)==null?void 0:c.image)&&qn();return{c(){t&&t.c(),s=f(),o&&o.c(),n=Ks()},l(d){t&&t.l(d),s=m(d),o&&o.l(d),n=Ks()},m(d,S){t&&t.m(d,S),l(d,s,S),o&&o.m(d,S),l(d,n,S)},p(d,S){var I,L;(q.description||(I=q.og)!=null&&I.description)&&t.p(d,S),(L=q.og)!=null&&L.image&&o.p(d,S)},d(d){d&&(i(s),i(n)),t&&t.d(d),o&&o.d(d)}}}function En(g){let s,n,t,o,_;return{c(){s=T("meta"),n=f(),t=T("meta"),o=f(),_=T("meta"),this.h()},l(c){s=k(c,"META",{name:!0,content:!0}),n=m(c),t=k(c,"META",{property:!0,content:!0}),o=m(c),_=k(c,"META",{name:!0,content:!0}),this.h()},h(){var c,d,S;v(s,"name","description"),v(s,"content",q.description??((c=q.og)==null?void 0:c.description)),v(t,"property","og:description"),v(t,"content",((d=q.og)==null?void 0:d.description)??q.description),v(_,"name","twitter:description"),v(_,"content",((S=q.og)==null?void 0:S.description)??q.description)},m(c,d){l(c,s,d),l(c,n,d),l(c,t,d),l(c,o,d),l(c,_,d)},p:be,d(c){c&&(i(s),i(n),i(t),i(o),i(_))}}}function qn(g){let s,n,t;return{c(){s=T("meta"),n=f(),t=T("meta"),this.h()},l(o){s=k(o,"META",{property:!0,content:!0}),n=m(o),t=k(o,"META",{name:!0,content:!0}),this.h()},h(){var o,_;v(s,"property","og:image"),v(s,"content",Ya((o=q.og)==null?void 0:o.image)),v(t,"name","twitter:image"),v(t,"content",Ya((_=q.og)==null?void 0:_.image))},m(o,_){l(o,s,_),l(o,n,_),l(o,t,_)},p:be,d(o){o&&(i(s),i(n),i(t))}}}function Xa(g){let s,n;return s=new ue({props:{queryID:"building_new_maps_headline",queryResult:g[0]}}),{c(){A(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,o){w(s,t,o),n=!0},p(t,o){const _={};o[0]&1&&(_.queryResult=t[0]),s.$set(_)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function Ka(g){let s,n;return s=new ue({props:{queryID:"provider_sign_tests",queryResult:g[1]}}),{c(){A(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,o){w(s,t,o),n=!0},p(t,o){const _={};o[0]&2&&(_.queryResult=t[1]),s.$set(_)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function Pn(g){let s,n,t,o,_,c,d,S,I,L,x,j;return s=new G({props:{id:"judge",title:"Judge"}}),t=new G({props:{id:"test",title:"Test"}}),_=new G({props:{id:"n_valid",title:"Pairs",fmt:"#,##0"}}),d=new G({props:{id:"n_correct",title:"Correct",fmt:"#,##0"}}),I=new G({props:{id:"accuracy",title:"Accuracy",fmt:"0.0%"}}),x=new G({props:{id:"p_value_label",title:"p-value"}}),{c(){A(s.$$.fragment),n=f(),A(t.$$.fragment),o=f(),A(_.$$.fragment),c=f(),A(d.$$.fragment),S=f(),A(I.$$.fragment),L=f(),A(x.$$.fragment)},l(r){y(s.$$.fragment,r),n=m(r),y(t.$$.fragment,r),o=m(r),y(_.$$.fragment,r),c=m(r),y(d.$$.fragment,r),S=m(r),y(I.$$.fragment,r),L=m(r),y(x.$$.fragment,r)},m(r,C){w(s,r,C),l(r,n,C),w(t,r,C),l(r,o,C),w(_,r,C),l(r,c,C),w(d,r,C),l(r,S,C),w(I,r,C),l(r,L,C),w(x,r,C),j=!0},p:be,i(r){j||(p(s.$$.fragment,r),p(t.$$.fragment,r),p(_.$$.fragment,r),p(d.$$.fragment,r),p(I.$$.fragment,r),p(x.$$.fragment,r),j=!0)},o(r){b(s.$$.fragment,r),b(t.$$.fragment,r),b(_.$$.fragment,r),b(d.$$.fragment,r),b(I.$$.fragment,r),b(x.$$.fragment,r),j=!1},d(r){r&&(i(n),i(o),i(c),i(S),i(L)),$(s,r),$(t,r),$(_,r),$(d,r),$(I,r),$(x,r)}}}function Za(g){let s,n;return s=new ue({props:{queryID:"gatekeeping_tests",queryResult:g[2]}}),{c(){A(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,o){w(s,t,o),n=!0},p(t,o){const _={};o[0]&4&&(_.queryResult=t[2]),s.$set(_)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function Dn(g){let s,n,t,o,_,c,d,S,I,L,x,j,r,C,h,P;return s=new G({props:{id:"stratum",title:"Stratum"}}),t=new G({props:{id:"judge",title:"Judge"}}),_=new G({props:{id:"gap",title:"Gap"}}),d=new G({props:{id:"n_valid",title:"Pairs",fmt:"#,##0"}}),I=new G({props:{id:"n_correct",title:"Correct",fmt:"#,##0"}}),x=new G({props:{id:"accuracy",title:"Accuracy",fmt:"0.0%"}}),r=new G({props:{id:"p_value_label",title:"p-value"}}),h=new G({props:{id:"result",title:"Result"}}),{c(){A(s.$$.fragment),n=f(),A(t.$$.fragment),o=f(),A(_.$$.fragment),c=f(),A(d.$$.fragment),S=f(),A(I.$$.fragment),L=f(),A(x.$$.fragment),j=f(),A(r.$$.fragment),C=f(),A(h.$$.fragment)},l(u){y(s.$$.fragment,u),n=m(u),y(t.$$.fragment,u),o=m(u),y(_.$$.fragment,u),c=m(u),y(d.$$.fragment,u),S=m(u),y(I.$$.fragment,u),L=m(u),y(x.$$.fragment,u),j=m(u),y(r.$$.fragment,u),C=m(u),y(h.$$.fragment,u)},m(u,R){w(s,u,R),l(u,n,R),w(t,u,R),l(u,o,R),w(_,u,R),l(u,c,R),w(d,u,R),l(u,S,R),w(I,u,R),l(u,L,R),w(x,u,R),l(u,j,R),w(r,u,R),l(u,C,R),w(h,u,R),P=!0},p:be,i(u){P||(p(s.$$.fragment,u),p(t.$$.fragment,u),p(_.$$.fragment,u),p(d.$$.fragment,u),p(I.$$.fragment,u),p(x.$$.fragment,u),p(r.$$.fragment,u),p(h.$$.fragment,u),P=!0)},o(u){b(s.$$.fragment,u),b(t.$$.fragment,u),b(_.$$.fragment,u),b(d.$$.fragment,u),b(I.$$.fragment,u),b(x.$$.fragment,u),b(r.$$.fragment,u),b(h.$$.fragment,u),P=!1},d(u){u&&(i(n),i(o),i(c),i(S),i(L),i(j),i(C)),$(s,u),$(t,u),$(_,u),$(d,u),$(I,u),$(x,u),$(r,u),$(h,u)}}}function en(g){let s,n;return s=new ue({props:{queryID:"consensus_sign_tests",queryResult:g[3]}}),{c(){A(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,o){w(s,t,o),n=!0},p(t,o){const _={};o[0]&8&&(_.queryResult=t[3]),s.$set(_)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function Bn(g){let s,n,t,o,_,c,d,S,I,L,x,j;return s=new G({props:{id:"test",title:"Test"}}),t=new G({props:{id:"n_consensus",title:"Consensus pairs",fmt:"#,##0"}}),_=new G({props:{id:"n_correct",title:"Correct",fmt:"#,##0"}}),d=new G({props:{id:"accuracy",title:"Accuracy",fmt:"0.0%"}}),I=new G({props:{id:"p_value_label",title:"p-value"}}),x=new G({props:{id:"cohen_kappa",title:"Kappa",fmt:"0.000"}}),{c(){A(s.$$.fragment),n=f(),A(t.$$.fragment),o=f(),A(_.$$.fragment),c=f(),A(d.$$.fragment),S=f(),A(I.$$.fragment),L=f(),A(x.$$.fragment)},l(r){y(s.$$.fragment,r),n=m(r),y(t.$$.fragment,r),o=m(r),y(_.$$.fragment,r),c=m(r),y(d.$$.fragment,r),S=m(r),y(I.$$.fragment,r),L=m(r),y(x.$$.fragment,r)},m(r,C){w(s,r,C),l(r,n,C),w(t,r,C),l(r,o,C),w(_,r,C),l(r,c,C),w(d,r,C),l(r,S,C),w(I,r,C),l(r,L,C),w(x,r,C),j=!0},p:be,i(r){j||(p(s.$$.fragment,r),p(t.$$.fragment,r),p(_.$$.fragment,r),p(d.$$.fragment,r),p(I.$$.fragment,r),p(x.$$.fragment,r),j=!0)},o(r){b(s.$$.fragment,r),b(t.$$.fragment,r),b(_.$$.fragment,r),b(d.$$.fragment,r),b(I.$$.fragment,r),b(x.$$.fragment,r),j=!1},d(r){r&&(i(n),i(o),i(c),i(S),i(L)),$(s,r),$(t,r),$(_,r),$(d,r),$(I,r),$(x,r)}}}function tn(g){let s,n;return s=new ue({props:{queryID:"aggregation_reliability",queryResult:g[4]}}),{c(){A(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,o){w(s,t,o),n=!0},p(t,o){const _={};o[0]&16&&(_.queryResult=t[4]),s.$set(_)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function Fn(g){let s,n,t,o,_,c,d,S,I,L,x,j,r,C;return s=new G({props:{id:"group_level",title:"Compared groups"}}),t=new G({props:{id:"metric",title:"Metric"}}),_=new G({props:{id:"k_units",title:"Units",fmt:"#,##0"}}),d=new G({props:{id:"median_n",title:"Median N",fmt:"#,##0"}}),I=new G({props:{id:"icc",title:"ICC",fmt:"0.000"}}),x=new G({props:{id:"unit_mean_reliability_neff",title:"Reliability",fmt:"0.0%"}}),r=new G({props:{id:"mdd_two_units_neff",title:"MDD",fmt:"0.000"}}),{c(){A(s.$$.fragment),n=f(),A(t.$$.fragment),o=f(),A(_.$$.fragment),c=f(),A(d.$$.fragment),S=f(),A(I.$$.fragment),L=f(),A(x.$$.fragment),j=f(),A(r.$$.fragment)},l(h){y(s.$$.fragment,h),n=m(h),y(t.$$.fragment,h),o=m(h),y(_.$$.fragment,h),c=m(h),y(d.$$.fragment,h),S=m(h),y(I.$$.fragment,h),L=m(h),y(x.$$.fragment,h),j=m(h),y(r.$$.fragment,h)},m(h,P){w(s,h,P),l(h,n,P),w(t,h,P),l(h,o,P),w(_,h,P),l(h,c,P),w(d,h,P),l(h,S,P),w(I,h,P),l(h,L,P),w(x,h,P),l(h,j,P),w(r,h,P),C=!0},p:be,i(h){C||(p(s.$$.fragment,h),p(t.$$.fragment,h),p(_.$$.fragment,h),p(d.$$.fragment,h),p(I.$$.fragment,h),p(x.$$.fragment,h),p(r.$$.fragment,h),C=!0)},o(h){b(s.$$.fragment,h),b(t.$$.fragment,h),b(_.$$.fragment,h),b(d.$$.fragment,h),b(I.$$.fragment,h),b(x.$$.fragment,h),b(r.$$.fragment,h),C=!1},d(h){h&&(i(n),i(o),i(c),i(S),i(L),i(j)),$(s,h),$(t,h),$(_,h),$(d,h),$(I,h),$(x,h),$(r,h)}}}function On(g){let s,n,t,o,_,c,d,S,I,L,x,j,r,C,h,P;return s=new G({props:{id:"group_level",title:"Compared groups"}}),t=new G({props:{id:"metric",title:"Metric"}}),_=new G({props:{id:"sd_within",title:"Within SD",fmt:"0.000"}}),d=new G({props:{id:"sd_between",title:"Between SD",fmt:"0.000"}}),I=new G({props:{id:"icc",title:"ICC",fmt:"0.000"}}),x=new G({props:{id:"duplicate_content_share",title:"Duplicate share",fmt:"0.0%"}}),r=new G({props:{id:"median_distinct_content_neff",title:"Effective N",fmt:"#,##0"}}),h=new G({props:{id:"mdd_two_units_neff",title:"MDD",fmt:"0.000"}}),{c(){A(s.$$.fragment),n=f(),A(t.$$.fragment),o=f(),A(_.$$.fragment),c=f(),A(d.$$.fragment),S=f(),A(I.$$.fragment),L=f(),A(x.$$.fragment),j=f(),A(r.$$.fragment),C=f(),A(h.$$.fragment)},l(u){y(s.$$.fragment,u),n=m(u),y(t.$$.fragment,u),o=m(u),y(_.$$.fragment,u),c=m(u),y(d.$$.fragment,u),S=m(u),y(I.$$.fragment,u),L=m(u),y(x.$$.fragment,u),j=m(u),y(r.$$.fragment,u),C=m(u),y(h.$$.fragment,u)},m(u,R){w(s,u,R),l(u,n,R),w(t,u,R),l(u,o,R),w(_,u,R),l(u,c,R),w(d,u,R),l(u,S,R),w(I,u,R),l(u,L,R),w(x,u,R),l(u,j,R),w(r,u,R),l(u,C,R),w(h,u,R),P=!0},p:be,i(u){P||(p(s.$$.fragment,u),p(t.$$.fragment,u),p(_.$$.fragment,u),p(d.$$.fragment,u),p(I.$$.fragment,u),p(x.$$.fragment,u),p(r.$$.fragment,u),p(h.$$.fragment,u),P=!0)},o(u){b(s.$$.fragment,u),b(t.$$.fragment,u),b(_.$$.fragment,u),b(d.$$.fragment,u),b(I.$$.fragment,u),b(x.$$.fragment,u),b(r.$$.fragment,u),b(h.$$.fragment,u),P=!1},d(u){u&&(i(n),i(o),i(c),i(S),i(L),i(j),i(C)),$(s,u),$(t,u),$(_,u),$(d,u),$(I,u),$(x,u),$(r,u),$(h,u)}}}function sn(g){let s,n;return s=new ue({props:{queryID:"btos_correlations",queryResult:g[5]}}),{c(){A(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,o){w(s,t,o),n=!0},p(t,o){const _={};o[0]&32&&(_.queryResult=t[5]),s.$set(_)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function Nn(g){let s,n,t,o,_,c;return s=new G({props:{id:"metric",title:"AIMatch signal"}}),t=new G({props:{id:"spearman_rho",title:"Spearman",fmt:"0.00"}}),_=new G({props:{id:"spearman_p",title:"p",fmt:"0.0000"}}),{c(){A(s.$$.fragment),n=f(),A(t.$$.fragment),o=f(),A(_.$$.fragment)},l(d){y(s.$$.fragment,d),n=m(d),y(t.$$.fragment,d),o=m(d),y(_.$$.fragment,d)},m(d,S){w(s,d,S),l(d,n,S),w(t,d,S),l(d,o,S),w(_,d,S),c=!0},p:be,i(d){c||(p(s.$$.fragment,d),p(t.$$.fragment,d),p(_.$$.fragment,d),c=!0)},o(d){b(s.$$.fragment,d),b(t.$$.fragment,d),b(_.$$.fragment,d),c=!1},d(d){d&&(i(n),i(o)),$(s,d),$(t,d),$(_,d)}}}function an(g){let s,n;return s=new ue({props:{queryID:"btos_industry_rows",queryResult:g[6]}}),{c(){A(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,o){w(s,t,o),n=!0},p(t,o){const _={};o[0]&64&&(_.queryResult=t[6]),s.$set(_)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function nn(g){let s,n;return s=new ue({props:{queryID:"btos_fit_line",queryResult:g[7]}}),{c(){A(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,o){w(s,t,o),n=!0},p(t,o){const _={};o[0]&128&&(_.queryResult=t[7]),s.$set(_)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function Vn(g){let s,n,t,o,_,c,d,S,I,L,x,j;return s=new G({props:{id:"naics2",title:"NAICS2"}}),t=new G({props:{id:"point_label",title:"Plot label"}}),_=new G({props:{id:"naics_name",title:"Sector",wrap:"true"}}),d=new G({props:{id:"btos_ai_share",title:"BTOS AI",fmt:"0.0%"}}),I=new G({props:{id:"nlx_avg_ai_score_v2",title:"AI score",fmt:"0.000"}}),x=new G({props:{id:"nlx_avg_n_strict",title:"Strict",fmt:"0.000"}}),{c(){A(s.$$.fragment),n=f(),A(t.$$.fragment),o=f(),A(_.$$.fragment),c=f(),A(d.$$.fragment),S=f(),A(I.$$.fragment),L=f(),A(x.$$.fragment)},l(r){y(s.$$.fragment,r),n=m(r),y(t.$$.fragment,r),o=m(r),y(_.$$.fragment,r),c=m(r),y(d.$$.fragment,r),S=m(r),y(I.$$.fragment,r),L=m(r),y(x.$$.fragment,r)},m(r,C){w(s,r,C),l(r,n,C),w(t,r,C),l(r,o,C),w(_,r,C),l(r,c,C),w(d,r,C),l(r,S,C),w(I,r,C),l(r,L,C),w(x,r,C),j=!0},p:be,i(r){j||(p(s.$$.fragment,r),p(t.$$.fragment,r),p(_.$$.fragment,r),p(d.$$.fragment,r),p(I.$$.fragment,r),p(x.$$.fragment,r),j=!0)},o(r){b(s.$$.fragment,r),b(t.$$.fragment,r),b(_.$$.fragment,r),b(d.$$.fragment,r),b(I.$$.fragment,r),b(x.$$.fragment,r),j=!1},d(r){r&&(i(n),i(o),i(c),i(S),i(L)),$(s,r),$(t,r),$(_,r),$(d,r),$(I,r),$(x,r)}}}function rn(g){let s,n;return s=new ue({props:{queryID:"text",queryResult:g[8]}}),{c(){A(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,o){w(s,t,o),n=!0},p(t,o){const _={};o[0]&256&&(_.queryResult=t[8]),s.$set(_)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function ln(g){let s,n;return s=new ue({props:{queryID:"text",queryResult:g[8]}}),{c(){A(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,o){w(s,t,o),n=!0},p(t,o){const _={};o[0]&256&&(_.queryResult=t[8]),s.$set(_)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function on(g){let s,n;return s=new ue({props:{queryID:"text",queryResult:g[8]}}),{c(){A(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,o){w(s,t,o),n=!0},p(t,o){const _={};o[0]&256&&(_.queryResult=t[8]),s.$set(_)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function _n(g){let s,n;return s=new ue({props:{queryID:"text",queryResult:g[8]}}),{c(){A(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,o){w(s,t,o),n=!0},p(t,o){const _={};o[0]&256&&(_.queryResult=t[8]),s.$set(_)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function cn(g){let s,n;return s=new ue({props:{queryID:"text",queryResult:g[8]}}),{c(){A(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,o){w(s,t,o),n=!0},p(t,o){const _={};o[0]&256&&(_.queryResult=t[8]),s.$set(_)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function un(g){let s,n;return s=new ue({props:{queryID:"text",queryResult:g[8]}}),{c(){A(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,o){w(s,t,o),n=!0},p(t,o){const _={};o[0]&256&&(_.queryResult=t[8]),s.$set(_)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function mn(g){let s,n;return s=new ue({props:{queryID:"text",queryResult:g[8]}}),{c(){A(s.$$.fragment)},l(t){y(s.$$.fragment,t)},m(t,o){w(s,t,o),n=!0},p(t,o){const _={};o[0]&256&&(_.queryResult=t[8]),s.$set(_)},i(t){n||(p(s.$$.fragment,t),n=!0)},o(t){b(s.$$.fragment,t),n=!1},d(t){$(s,t)}}}function Un(g){let s,n,t,o,_,c,d='<a href="/us-lmi/occupation-task-pairs" class="hover:underline">A. Map of Work</a> <a href="/us-lmi/task-allocation-mismatch" class="hover:underline">B. Mismatch</a> <a href="/us-lmi/building-new-maps" class="hover:underline">C. Emerging Skills</a> <a href="/us-lmi/dynamic-maps" class="hover:underline">D. Dynamic Maps</a> <a href="/us-lmi/methodology" class="hover:underline">Methods</a>',S,I,L="When standard taxonomies do not contain task or skill items for emerging technologies, labor market signals are missed. This finding asks whether postings can supply emerging task and skill statements missing from standard taxonomies, and whether those statements can support informative measures of the technological frontier.",x,j,r="AIMatch starts from posting sentences, places them in a task and skill architecture, and scores each statement for AI relatedness. The current experimental taxonomy contains 19,660 base-level statements. It is not presented as a finished ontology. It is a provisional map: a structured set of posting-derived statements that can be validated, revised, and used to measure where AI-related work is appearing.",C,h,P='This construction uses the TaxonomyBuilder approach for organizing posting-derived task and skill sentences into inspectable maps. See Meisenbacher and Norlander (2026), <a href="https://arxiv.org/abs/2605.21029" rel="nofollow" class="markdown">“Building a Custom Taxonomy of AI Skills and Tasks from the Ground Up with Job Postings”</a>, Proceedings of the 2nd Workshop on Customizable NLP (CustomNLP4U), forthcoming, arXiv:2605.21029.',u,R,He="<strong>Provisional status.</strong> The statement taxonomy is evidence for building adaptive task and skill maps, not a final replacement for O*NET or ESCO. The validation below supports relative AI intensity measurement, especially above the observed resolution floor.",Ee,fe,ns='<a href="#figure-bnm-1-taxonomy-builder-seeded-with-posting-sentences">Figure BNM-1. Taxonomy Builder Seeded With Posting Sentences</a>',lt,ae,qe='<img src="/us-lmi/building-new-maps/taxonomy-builder.png" alt="Taxonomy builder seeded with AI-related task and skill sentences from postings" class="w-full bg-white"/> <figcaption class="text-sm text-gray-600 mt-2">Taxonomy builder view. The workflow starts with task and skill sentences found in postings with AI keywords, then organizes those statements into a provisional taxonomy for review, scoring, and validation. See Meisenbacher and Norlander (2026), <a href="https://arxiv.org/abs/2605.21029" class="underline">“Building a Custom Taxonomy of AI Skills and Tasks from the Ground Up with Job Postings”</a>, Proceedings of the 2nd Workshop on Customizable NLP (CustomNLP4U), forthcoming, arXiv:2605.21029.</figcaption>',Pe,De,te,ve,Me,ne,ze,he,Vt,$e,we,se,ot='<a href="#what-was-tested">What Was Tested</a>',_t,ye,is="For each statement, AI class-vector scores are built from cosine similarity to AI keyword classes and averaged across three embedding models. Strict and lenient AI classes then use agreement across models to separate clearer AI statements from AI-adjacent language.",Ae,ie,ct="The validation compares randomly selected pairs of USAJOBS posting text inside two strata:",ut,ke,rs='<li class="markdown">Strict AI: postings with at least one strict AI code.</li> <li class="markdown">Lenient / AI-adjacent: postings with at least three lenient codes and no strict codes.</li>',Te,re,mt="Within each stratum, pairs are grouped by AI-score gap: large gaps (>=0.10), medium gaps (0.05 to 0.10), and very small gaps below 0.03. Claude Sonnet 4.6 and OpenAI GPT-4o ranked which posting was more AI-related, or in the lenient stratum, which was closer to the AI / ML frontier.",ft,pe,ls='<a href="#validation-results">Validation Results</a>',xe,le,pt="The sign tests reject random ranking for large and medium score gaps, and fail to reject for very small gaps. That is the useful measurement claim: the AI score distinguishes postings that differ by about 0.05 or more, but not reliably below about 0.03.",dt,Ie,os="The p-values in the summary are exact one-sided binomial sign-test p-values. They are not identical in the source files; very small values can look similar if rounded too aggressively. The audit tables below keep scientific notation and expose the full gatekeeping tests.",Ce,me,oe,_s='<a href="#table-bnm-1-posting-level-ai-score-validation-by-judge">Table BNM-1. Posting-Level AI Score Validation by Judge</a>',gt,Se,H,bt,vt,fa="<strong>Terms.</strong> Accuracy = judge selected the posting with the higher AI score. p-value = exact one-sided binomial sign test against 50/50 ranking. Reject random = p &lt;= 0.05.",gs,Qe,pa='<a href="#table-bnm-2-ai-score-resolution-checks">Table BNM-2. AI Score Resolution Checks</a>',bs,ht,vs,cs,de,Ut,da="Show consensus tests and kappa",Zs,Wt,ga="<strong>Terms.</strong> Consensus rows include only pairs where Claude and GPT-4o selected the same posting. Cohen&#39;s kappa summarizes inter-judge agreement across the full validation set.",ea,$t,ba='<a href="#table-bnm-3-consensus-validation-results">Table BNM-3. Consensus Validation Results</a>',ta,wt,hs,Ye,va='<a href="#aggregation-reliability">Aggregation Reliability</a>',$s,yt,ha="The pairwise validation is about document-level resolution. For group comparisons, reliability improves with sample size. The aggregation checks compare groups of postings by occupation code and by agency, not individual occupations or agencies. The estimates differ between occupation and agency groups because the same posting-level score has different within-group variation, between-group variation, and typical group size under each grouping. Occupation groups separate AI intensity more strongly than agencies for the strict-share measure, so the occupation-group reliability estimate is higher.",ws,At,$a='The compact formula is: reliability at group size <code class="markdown">n</code> = <code class="markdown">n * ICC / (1 + (n - 1) * ICC)</code>, where <code class="markdown">ICC = between variance / (between variance + within variance)</code>. The minimum detectable two-group difference is <code class="markdown">1.96 * within SD * sqrt(2 / n)</code>. With 300 observations in each group, the strict-share detectable difference is about 0.014, or 1.4 percentage points, for both occupation and agency comparisons. The displayed reliability and MDD use duplicate-content-adjusted effective <code class="markdown">n</code>.',ys,us,kt,wa="<strong>Terms.</strong> Compared groups = occupation-code or agency grouping used in the check. Units = groups compared. Median N = postings per group. Reliability = estimated reliability of group means. MDD = minimum detectable two-group difference.",As,Je,ya='<a href="#table-bnm-4-aggregate-ai-score-reliability-summary">Table BNM-4. Aggregate AI Score Reliability Summary</a>',ks,Tt,Ts,ge,zt,Aa="Show aggregation formula details",sa,Qt,ka="<strong>How the numbers are produced.</strong> For each grouping, the script estimates a one-way random-effects decomposition: pooled within-group variance, between-group variance, and ICC. Duplicate template content reduces the effective median N. Reliability is then computed at that effective N.",aa,xt,Ta='<a href="#table-bnm-5-aggregate-ai-score-reliability-details">Table BNM-5. Aggregate AI Score Reliability Details</a>',na,It,xs,Xe,xa='<a href="#external-check">External Check</a>',Is,Ct,Ia="As a convergent benchmark, industry-level AIMatch signals are compared with Census Business Trends and Outlook Survey AI-use rates. The rank correlation is positive for mean AI scores and stronger for strict AI counts.",Cs,ms,Ke,Ca='<a href="#table-bnm-6-btos-correlation-summary">Table BNM-6. BTOS Correlation Summary</a>',Ss,St,Ms,fs,ps,Ze,Sa='<a href="#figure-bnm-2-btos-firm-ai-use-vs-nlx-strict-ai-intensity">Figure BNM-2. BTOS Firm AI Use vs. NLx Strict AI Intensity</a>',Rs,Mt,js,Rt,Ma="Point labels show abbreviated NAICS-2 industry codes, such as <code>51 Info</code>, <code>52 Fin</code>, and <code>54 Prof/Sci</code>. This is a cross-sectional comparison between the latest Census BTOS sector AI-use wave and NLx NAICS-2 AIMatch averages from the public aggregate ending in September 2025. A time-series validation is not possible in this public package because nonmissing BTOS responses to the current AI-use question begin in November 2025, after the NLx public aggregate ends. The fitted line is computed from the same 17 NAICS-2 sector points with ordinary least squares; it is a visual guide, not a separate validation test.",Gs,et,Ra='<a href="#table-bnm-7-btos-sector-benchmark-rows">Table BNM-7. BTOS Sector Benchmark Rows</a>',Ls,jt,Hs,tt,ja='<a href="#what-this-supports">What This Supports</a>',Es,Gt,Ga="The evidence supports four conservative uses. First, posting sentences can reveal emerging task and skill language that standard taxonomies miss. Second, validated AI scores can distinguish meaningful posting-level differences above the observed resolution floor. Third, group means can support meaningful occupation, agency, or industry comparisons when each group has enough postings, especially above a few hundred observations. Fourth, the same statement-level map can be used as a substrate for future human-reviewed taxonomy development, where statements are retained, merged, relabeled, or rejected as the frontier changes.",qs,st,La='<a href="#evidence-path">Evidence Path</a>',Ps,Lt,Ha='The validation tables use the public JAAT AI-intensity aggregate sources shown on this page. Release checks and public artifact paths are listed in <a href="/us-lmi/methodology/audit-trail" class="markdown">Agreement And Audit Trail</a>; broader limits of posting-derived taxonomies are summarized in <a href="/us-lmi/methodology/postings-and-taxonomies" class="markdown">What Postings And Taxonomies Can And Cannot Say</a>.',Ds,at,Ea='<a href="#audit-downloads">Audit Downloads</a>',Bs,Ht,qa="The blocks below show the page-level SQL used for each table or figure on this page. They are collapsed so the main evidence stays readable.",Fs,Be,Yt,Pa="Show SQL for headline measures",ia,Os,Fe,Jt,Da="Show SQL for pairwise validation results",ra,Ns,Oe,Xt,Ba="Show SQL for sequential gatekeeping tests",la,Vs,Ne,Kt,Fa="Show SQL for consensus tests and kappa",oa,Us,Ve,Zt,Oa="Show SQL for aggregation reliability",_a,Ws,Ue,es,Na="Show SQL for external BTOS correlation check",ca,zs,We,ts,Va="Show SQL for BTOS industry rows",ua,Qs,Et,Ua=`<summary class="cursor-pointer font-semibold">Show judge prompt templates</summary> <p class="markdown">Strict-AI stratum:</p> <pre class="text-xs whitespace-pre-wrap bg-gray-50 border rounded p-3">You will be given two job postings, each identified by a unique integer ID.

Rank them by how AI-related the work is - the degree to which the role involves
artificial intelligence, machine learning, data science, advanced analytics, or
intelligent automation, including the software and data engineering such systems
are built on, and soft skills specifically required for AI/ML roles. Do NOT count
general use of computers or office software, or operating or repairing technical
or electronic equipment that has no AI or machine-learning component.

This is always a relative judgment: even if neither posting is strongly
AI-related, decide which one is closer to AI/ML work, based on the posting text.

Answer with a comma-separated Python list of the two posting IDs, most AI-related
first. Output only that list.
</pre> <p class="markdown">Lenient / AI-adjacent stratum:</p> <pre class="text-xs whitespace-pre-wrap bg-gray-50 border rounded p-3">You will be given two job postings, each identified by a unique integer ID.

Both involve technology to some degree. Rank them by how close the work is to the
frontier of artificial intelligence and machine learning - i.e., which posting&#39;s
tasks, skills, and requirements are nearer to building, applying, or supporting
AI/ML, data science, advanced analytics, or intelligent automation, as opposed to
more general or conventional technology work.

This is always a relative judgment: pick the posting whose work is closer to AI/ML,
even if neither is strongly AI. Base your decision on the posting text.

Answer with a comma-separated Python list of the two posting IDs, closest to the
AI frontier first. Output only that list.
</pre>`,Ys,qt,Wa='<summary class="cursor-pointer font-semibold">Download AI validation audit CSVs</summary> <ul><li><a href="/us-lmi/downloads/ai-validation/ai_intensity_validation_reviewed.csv">Pair-level reviewed results</a>: scores, strata, judge picks, consensus status, and whether consensus selected the higher AI-score posting.</li> <li><a href="/us-lmi/downloads/ai-validation/ai_intensity_validation_judge_responses.csv">Judge responses</a>: raw model response, parsed ranking, prompt version/hash, token and cost fields, and error flags.</li> <li><a href="/us-lmi/downloads/ai-validation/ai_intensity_validation_gatekeeping.csv">Gatekeeping tests</a>: fixed-sequence tests by stratum, judge, and score-gap bin.</li> <li><a href="/us-lmi/downloads/ai-validation/ai_intensity_validation_provider_sign_tests.csv">Provider sign tests</a>: per-judge exact sign tests for large-gap, 0.05+ gap, and overall sets.</li> <li><a href="/us-lmi/downloads/ai-validation/ai_intensity_validation_consensus_sign_tests.csv">Consensus sign tests</a>: consensus-only exact sign tests plus Cohen&#39;s kappa.</li> <li><a href="/us-lmi/downloads/ai-validation/ai_intensity_aggregation_variance.csv">Aggregation variance</a>: within/between variance, ICC, reliability, duplicate-content adjustment, and MDD.</li> <li><a href="/us-lmi/downloads/ai-validation/ai_intensity_aggregation_reliability.csv">Posting-level reliability fit</a>: probit and lapse-adjusted fit estimates from judge-pair observations.</li> <li><a href="/us-lmi/downloads/ai-validation/ai_intensity_validation_prompt_rows_audit.csv">Prompt-row audit</a>: prompt construction metadata for large and medium gap pairs.</li> <li><a href="/us-lmi/downloads/ai-validation/ai_intensity_validation_prompt_rows_stage3_lt03_audit.csv">Very-small-gap prompt-row audit</a>: prompt construction metadata for the below-0.03 gap stage.</li> <li><a href="/us-lmi/downloads/ai-validation/manifest.csv">Download manifest</a>: one-line description of each file.</li></ul>',Js,nt=typeof q<"u"&&q.title&&q.hide_title!==!0&&jn();function fn(e,a){return typeof q<"u"&&q.title?Ln:Gn}let ds=fn()(g),it=typeof q=="object"&&Hn(),D=g[0]&&Xa(g);ve=new Xs({props:{data:g[0],value:"posting_pairs",title:"Posting pairs judged",fmt:"#,##0"}}),ne=new Xs({props:{data:g[0],value:"consensus_large_accuracy",title:"Consensus accuracy, gap >=0.10",fmt:"0.0%"}}),he=new Xs({props:{data:g[0],value:"cohen_kappa",title:"Judge agreement, kappa",fmt:"0.00"}}),$e=new Xs({props:{data:g[0],value:"strict_btos_spearman",title:"BTOS rank correlation, strict",fmt:"0.00"}});let B=g[1]&&Ka(g);Se=new as({props:{data:g[1],rowsPerPage:"10",$$slots:{default:[Pn]},$$scope:{ctx:g}}});let F=g[2]&&Za(g);ht=new as({props:{data:g[2],rowsPerPage:"12",$$slots:{default:[Dn]},$$scope:{ctx:g}}});let O=g[3]&&en(g);wt=new as({props:{data:g[3],rowsPerPage:"5",$$slots:{default:[Bn]},$$scope:{ctx:g}}});let N=g[4]&&tn(g);Tt=new as({props:{data:g[4],rowsPerPage:"10",$$slots:{default:[Fn]},$$scope:{ctx:g}}}),It=new as({props:{data:g[4],rowsPerPage:"10",$$slots:{default:[On]},$$scope:{ctx:g}}});let V=g[5]&&sn(g);St=new as({props:{data:g[5],rowsPerPage:"5",$$slots:{default:[Nn]},$$scope:{ctx:g}}});let U=g[6]&&an(g),W=g[7]&&nn(g);Mt=new Mn({props:{data:g[6],x:"btos_ai_share",y:"nlx_avg_n_strict",xAxisTitle:"Census BTOS firms reporting AI use",yAxisTitle:"NLx strict AI codes per active job",xFmt:"0.0%",yFmt:"0.000",tooltipTitle:"point_label",pointSize:"8",chartAreaHeight:"360",title:"External check: BTOS firm AI use vs. NLx strict AI intensity",subtitle:"Latest BTOS sector wave vs. NLx Ind2 averages through Sep. 2025; Spearman rho = 0.752, p = 0.0005",seriesOptions:{label:{show:!0,formatter:"{@[2]}",position:"top",color:"#374151",fontSize:11},labelLayout:{hideOverlap:!0},markLine:{symbol:["none","none"],label:{show:!0,formatter:"OLS fit",position:"insideEndTop"},lineStyle:{color:"#4B5563",width:2,type:"solid"},data:[[{coord:[.089,.009475904347831385]},{coord:[.388,.0757423160954381]}]]}},echartsOptions:{grid:{top:64,bottom:56,containLabel:!0},legend:{show:!1},xAxis:{min:.05,max:.42},yAxis:{min:0,max:.18}}}}),jt=new as({props:{data:g[6],rowsPerPage:"10",$$slots:{default:[Vn]},$$scope:{ctx:g}}});let z=g[8]&&rn(g),Q=g[8]&&ln(g),Y=g[8]&&on(g),J=g[8]&&_n(g),X=g[8]&&cn(g),K=g[8]&&un(g),Z=g[8]&&mn(g);return{c(){nt&&nt.c(),s=f(),ds.c(),n=T("meta"),t=T("meta"),it&&it.c(),o=Ks(),_=f(),c=T("div"),c.innerHTML=d,S=f(),I=T("p"),I.textContent=L,x=f(),j=T("p"),j.textContent=r,C=f(),h=T("p"),h.innerHTML=P,u=f(),R=T("div"),R.innerHTML=He,Ee=f(),fe=T("h3"),fe.innerHTML=ns,lt=f(),ae=T("figure"),ae.innerHTML=qe,Pe=f(),D&&D.c(),De=f(),te=T("div"),A(ve.$$.fragment),Me=f(),A(ne.$$.fragment),ze=f(),A(he.$$.fragment),Vt=f(),A($e.$$.fragment),we=f(),se=T("h2"),se.innerHTML=ot,_t=f(),ye=T("p"),ye.textContent=is,Ae=f(),ie=T("p"),ie.textContent=ct,ut=f(),ke=T("ul"),ke.innerHTML=rs,Te=f(),re=T("p"),re.textContent=mt,ft=f(),pe=T("h2"),pe.innerHTML=ls,xe=f(),le=T("p"),le.textContent=pt,dt=f(),Ie=T("p"),Ie.textContent=os,Ce=f(),B&&B.c(),me=f(),oe=T("h3"),oe.innerHTML=_s,gt=f(),A(Se.$$.fragment),H=f(),F&&F.c(),bt=f(),vt=T("div"),vt.innerHTML=fa,gs=f(),Qe=T("h3"),Qe.innerHTML=pa,bs=f(),A(ht.$$.fragment),vs=f(),O&&O.c(),cs=f(),de=T("details"),Ut=T("summary"),Ut.textContent=da,Zs=f(),Wt=T("div"),Wt.innerHTML=ga,ea=f(),$t=T("h3"),$t.innerHTML=ba,ta=f(),A(wt.$$.fragment),hs=f(),Ye=T("h2"),Ye.innerHTML=va,$s=f(),yt=T("p"),yt.textContent=ha,ws=f(),At=T("p"),At.innerHTML=$a,ys=f(),N&&N.c(),us=f(),kt=T("div"),kt.innerHTML=wa,As=f(),Je=T("h3"),Je.innerHTML=ya,ks=f(),A(Tt.$$.fragment),Ts=f(),ge=T("details"),zt=T("summary"),zt.textContent=Aa,sa=f(),Qt=T("div"),Qt.innerHTML=ka,aa=f(),xt=T("h3"),xt.innerHTML=Ta,na=f(),A(It.$$.fragment),xs=f(),Xe=T("h2"),Xe.innerHTML=xa,Is=f(),Ct=T("p"),Ct.textContent=Ia,Cs=f(),V&&V.c(),ms=f(),Ke=T("h3"),Ke.innerHTML=Ca,Ss=f(),A(St.$$.fragment),Ms=f(),U&&U.c(),fs=f(),W&&W.c(),ps=f(),Ze=T("h3"),Ze.innerHTML=Sa,Rs=f(),A(Mt.$$.fragment),js=f(),Rt=T("p"),Rt.innerHTML=Ma,Gs=f(),et=T("h3"),et.innerHTML=Ra,Ls=f(),A(jt.$$.fragment),Hs=f(),tt=T("h2"),tt.innerHTML=ja,Es=f(),Gt=T("p"),Gt.textContent=Ga,qs=f(),st=T("h2"),st.innerHTML=La,Ps=f(),Lt=T("p"),Lt.innerHTML=Ha,Ds=f(),at=T("h2"),at.innerHTML=Ea,Bs=f(),Ht=T("p"),Ht.textContent=qa,Fs=f(),Be=T("details"),Yt=T("summary"),Yt.textContent=Pa,ia=f(),z&&z.c(),Os=f(),Fe=T("details"),Jt=T("summary"),Jt.textContent=Da,ra=f(),Q&&Q.c(),Ns=f(),Oe=T("details"),Xt=T("summary"),Xt.textContent=Ba,la=f(),Y&&Y.c(),Vs=f(),Ne=T("details"),Kt=T("summary"),Kt.textContent=Fa,oa=f(),J&&J.c(),Us=f(),Ve=T("details"),Zt=T("summary"),Zt.textContent=Oa,_a=f(),X&&X.c(),Ws=f(),Ue=T("details"),es=T("summary"),es.textContent=Na,ca=f(),K&&K.c(),zs=f(),We=T("details"),ts=T("summary"),ts.textContent=Va,ua=f(),Z&&Z.c(),Qs=f(),Et=T("details"),Et.innerHTML=Ua,Ys=f(),qt=T("details"),qt.innerHTML=Wa,this.h()},l(e){nt&&nt.l(e),s=m(e);const a=dn("svelte-2igo1p",document.head);ds.l(a),n=k(a,"META",{name:!0,content:!0}),t=k(a,"META",{name:!0,content:!0}),it&&it.l(a),o=Ks(),a.forEach(i),_=m(e),c=k(e,"DIV",{class:!0,"data-svelte-h":!0}),M(c)!=="svelte-lxr661"&&(c.innerHTML=d),S=m(e),I=k(e,"P",{class:!0,"data-svelte-h":!0}),M(I)!=="svelte-1q2xo9p"&&(I.textContent=L),x=m(e),j=k(e,"P",{class:!0,"data-svelte-h":!0}),M(j)!=="svelte-1q6w3ge"&&(j.textContent=r),C=m(e),h=k(e,"P",{class:!0,"data-svelte-h":!0}),M(h)!=="svelte-o8rcf6"&&(h.innerHTML=P),u=m(e),R=k(e,"DIV",{class:!0,"data-svelte-h":!0}),M(R)!=="svelte-1lo7g8f"&&(R.innerHTML=He),Ee=m(e),fe=k(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),M(fe)!=="svelte-9esn2j"&&(fe.innerHTML=ns),lt=m(e),ae=k(e,"FIGURE",{class:!0,"data-svelte-h":!0}),M(ae)!=="svelte-2nau2i"&&(ae.innerHTML=qe),Pe=m(e),D&&D.l(e),De=m(e),te=k(e,"DIV",{class:!0});var Re=Le(te);y(ve.$$.fragment,Re),Me=m(Re),y(ne.$$.fragment,Re),ze=m(Re),y(he.$$.fragment,Re),Vt=m(Re),y($e.$$.fragment,Re),Re.forEach(i),we=m(e),se=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),M(se)!=="svelte-s2nxp8"&&(se.innerHTML=ot),_t=m(e),ye=k(e,"P",{class:!0,"data-svelte-h":!0}),M(ye)!=="svelte-1fcfg93"&&(ye.textContent=is),Ae=m(e),ie=k(e,"P",{class:!0,"data-svelte-h":!0}),M(ie)!=="svelte-14ew9cc"&&(ie.textContent=ct),ut=m(e),ke=k(e,"UL",{class:!0,"data-svelte-h":!0}),M(ke)!=="svelte-u311mq"&&(ke.innerHTML=rs),Te=m(e),re=k(e,"P",{class:!0,"data-svelte-h":!0}),M(re)!=="svelte-1r2i05l"&&(re.textContent=mt),ft=m(e),pe=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),M(pe)!=="svelte-84jd8j"&&(pe.innerHTML=ls),xe=m(e),le=k(e,"P",{class:!0,"data-svelte-h":!0}),M(le)!=="svelte-z2215c"&&(le.textContent=pt),dt=m(e),Ie=k(e,"P",{class:!0,"data-svelte-h":!0}),M(Ie)!=="svelte-act2ue"&&(Ie.textContent=os),Ce=m(e),B&&B.l(e),me=m(e),oe=k(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),M(oe)!=="svelte-nxnzjb"&&(oe.innerHTML=_s),gt=m(e),y(Se.$$.fragment,e),H=m(e),F&&F.l(e),bt=m(e),vt=k(e,"DIV",{class:!0,"data-svelte-h":!0}),M(vt)!=="svelte-32f656"&&(vt.innerHTML=fa),gs=m(e),Qe=k(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),M(Qe)!=="svelte-1ucfocv"&&(Qe.innerHTML=pa),bs=m(e),y(ht.$$.fragment,e),vs=m(e),O&&O.l(e),cs=m(e),de=k(e,"DETAILS",{class:!0});var je=Le(de);Ut=k(je,"SUMMARY",{class:!0,"data-svelte-h":!0}),M(Ut)!=="svelte-p09zvz"&&(Ut.textContent=da),Zs=m(je),Wt=k(je,"DIV",{class:!0,"data-svelte-h":!0}),M(Wt)!=="svelte-130bbyf"&&(Wt.innerHTML=ga),ea=m(je),$t=k(je,"H3",{class:!0,id:!0,"data-svelte-h":!0}),M($t)!=="svelte-14d2zzr"&&($t.innerHTML=ba),ta=m(je),y(wt.$$.fragment,je),je.forEach(i),hs=m(e),Ye=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),M(Ye)!=="svelte-8o2e1c"&&(Ye.innerHTML=va),$s=m(e),yt=k(e,"P",{class:!0,"data-svelte-h":!0}),M(yt)!=="svelte-14wl0vc"&&(yt.textContent=ha),ws=m(e),At=k(e,"P",{class:!0,"data-svelte-h":!0}),M(At)!=="svelte-12fyab2"&&(At.innerHTML=$a),ys=m(e),N&&N.l(e),us=m(e),kt=k(e,"DIV",{class:!0,"data-svelte-h":!0}),M(kt)!=="svelte-p7c6v8"&&(kt.innerHTML=wa),As=m(e),Je=k(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),M(Je)!=="svelte-k2om0n"&&(Je.innerHTML=ya),ks=m(e),y(Tt.$$.fragment,e),Ts=m(e),ge=k(e,"DETAILS",{class:!0});var Ge=Le(ge);zt=k(Ge,"SUMMARY",{class:!0,"data-svelte-h":!0}),M(zt)!=="svelte-1xib3nx"&&(zt.textContent=Aa),sa=m(Ge),Qt=k(Ge,"DIV",{class:!0,"data-svelte-h":!0}),M(Qt)!=="svelte-t71ttf"&&(Qt.innerHTML=ka),aa=m(Ge),xt=k(Ge,"H3",{class:!0,id:!0,"data-svelte-h":!0}),M(xt)!=="svelte-1m46ocs"&&(xt.innerHTML=Ta),na=m(Ge),y(It.$$.fragment,Ge),Ge.forEach(i),xs=m(e),Xe=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),M(Xe)!=="svelte-jmnunt"&&(Xe.innerHTML=xa),Is=m(e),Ct=k(e,"P",{class:!0,"data-svelte-h":!0}),M(Ct)!=="svelte-r2x5bj"&&(Ct.textContent=Ia),Cs=m(e),V&&V.l(e),ms=m(e),Ke=k(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),M(Ke)!=="svelte-edwraq"&&(Ke.innerHTML=Ca),Ss=m(e),y(St.$$.fragment,e),Ms=m(e),U&&U.l(e),fs=m(e),W&&W.l(e),ps=m(e),Ze=k(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),M(Ze)!=="svelte-iesovo"&&(Ze.innerHTML=Sa),Rs=m(e),y(Mt.$$.fragment,e),js=m(e),Rt=k(e,"P",{class:!0,"data-svelte-h":!0}),M(Rt)!=="svelte-1kdtdbv"&&(Rt.innerHTML=Ma),Gs=m(e),et=k(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),M(et)!=="svelte-uitlmh"&&(et.innerHTML=Ra),Ls=m(e),y(jt.$$.fragment,e),Hs=m(e),tt=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),M(tt)!=="svelte-r7xgg2"&&(tt.innerHTML=ja),Es=m(e),Gt=k(e,"P",{class:!0,"data-svelte-h":!0}),M(Gt)!=="svelte-1j1r8ef"&&(Gt.textContent=Ga),qs=m(e),st=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),M(st)!=="svelte-1uqwyny"&&(st.innerHTML=La),Ps=m(e),Lt=k(e,"P",{class:!0,"data-svelte-h":!0}),M(Lt)!=="svelte-13xzvxr"&&(Lt.innerHTML=Ha),Ds=m(e),at=k(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),M(at)!=="svelte-1ib6szo"&&(at.innerHTML=Ea),Bs=m(e),Ht=k(e,"P",{class:!0,"data-svelte-h":!0}),M(Ht)!=="svelte-1wxjbnc"&&(Ht.textContent=qa),Fs=m(e),Be=k(e,"DETAILS",{class:!0});var ss=Le(Be);Yt=k(ss,"SUMMARY",{class:!0,"data-svelte-h":!0}),M(Yt)!=="svelte-16xbj81"&&(Yt.textContent=Pa),ia=m(ss),z&&z.l(ss),ss.forEach(i),Os=m(e),Fe=k(e,"DETAILS",{class:!0});var Pt=Le(Fe);Jt=k(Pt,"SUMMARY",{class:!0,"data-svelte-h":!0}),M(Jt)!=="svelte-1a7d3vl"&&(Jt.textContent=Da),ra=m(Pt),Q&&Q.l(Pt),Pt.forEach(i),Ns=m(e),Oe=k(e,"DETAILS",{class:!0});var Dt=Le(Oe);Xt=k(Dt,"SUMMARY",{class:!0,"data-svelte-h":!0}),M(Xt)!=="svelte-ii74u8"&&(Xt.textContent=Ba),la=m(Dt),Y&&Y.l(Dt),Dt.forEach(i),Vs=m(e),Ne=k(e,"DETAILS",{class:!0});var Bt=Le(Ne);Kt=k(Bt,"SUMMARY",{class:!0,"data-svelte-h":!0}),M(Kt)!=="svelte-jr5i00"&&(Kt.textContent=Fa),oa=m(Bt),J&&J.l(Bt),Bt.forEach(i),Us=m(e),Ve=k(e,"DETAILS",{class:!0});var Ft=Le(Ve);Zt=k(Ft,"SUMMARY",{class:!0,"data-svelte-h":!0}),M(Zt)!=="svelte-18mew0i"&&(Zt.textContent=Oa),_a=m(Ft),X&&X.l(Ft),Ft.forEach(i),Ws=m(e),Ue=k(e,"DETAILS",{class:!0});var Ot=Le(Ue);es=k(Ot,"SUMMARY",{class:!0,"data-svelte-h":!0}),M(es)!=="svelte-1wnvgat"&&(es.textContent=Na),ca=m(Ot),K&&K.l(Ot),Ot.forEach(i),zs=m(e),We=k(e,"DETAILS",{class:!0});var Nt=Le(We);ts=k(Nt,"SUMMARY",{class:!0,"data-svelte-h":!0}),M(ts)!=="svelte-kh20h9"&&(ts.textContent=Va),ua=m(Nt),Z&&Z.l(Nt),Nt.forEach(i),Qs=m(e),Et=k(e,"DETAILS",{class:!0,"data-svelte-h":!0}),M(Et)!=="svelte-or8j20"&&(Et.innerHTML=Ua),Ys=m(e),qt=k(e,"DETAILS",{class:!0,"data-svelte-h":!0}),M(qt)!=="svelte-1sbicwn"&&(qt.innerHTML=Wa),this.h()},h(){v(n,"name","twitter:card"),v(n,"content","summary_large_image"),v(t,"name","twitter:site"),v(t,"content","@evidence_dev"),v(c,"class","flex flex-wrap gap-x-4 gap-y-2 text-sm border-y border-gray-200 py-3 mb-6"),v(I,"class","markdown"),v(j,"class","markdown"),v(h,"class","markdown"),v(R,"class","border-l-4 border-blue-600 bg-blue-50 px-4 py-3 my-6 text-sm"),v(fe,"class","markdown"),v(fe,"id","figure-bnm-1-taxonomy-builder-seeded-with-posting-sentences"),v(ae,"class","my-6 border border-gray-200 bg-gray-50 p-3"),v(te,"class","grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"),v(se,"class","markdown"),v(se,"id","what-was-tested"),v(ye,"class","markdown"),v(ie,"class","markdown"),v(ke,"class","markdown"),v(re,"class","markdown"),v(pe,"class","markdown"),v(pe,"id","validation-results"),v(le,"class","markdown"),v(Ie,"class","markdown"),v(oe,"class","markdown"),v(oe,"id","table-bnm-1-posting-level-ai-score-validation-by-judge"),v(vt,"class","text-sm my-3"),v(Qe,"class","markdown"),v(Qe,"id","table-bnm-2-ai-score-resolution-checks"),v(Ut,"class","cursor-pointer font-semibold"),v(Wt,"class","text-sm my-3"),v($t,"class","markdown"),v($t,"id","table-bnm-3-consensus-validation-results"),v(de,"class","my-4"),v(Ye,"class","markdown"),v(Ye,"id","aggregation-reliability"),v(yt,"class","markdown"),v(At,"class","markdown"),v(kt,"class","text-sm my-3"),v(Je,"class","markdown"),v(Je,"id","table-bnm-4-aggregate-ai-score-reliability-summary"),v(zt,"class","cursor-pointer font-semibold"),v(Qt,"class","text-sm my-3"),v(xt,"class","markdown"),v(xt,"id","table-bnm-5-aggregate-ai-score-reliability-details"),v(ge,"class","my-4"),v(Xe,"class","markdown"),v(Xe,"id","external-check"),v(Ct,"class","markdown"),v(Ke,"class","markdown"),v(Ke,"id","table-bnm-6-btos-correlation-summary"),v(Ze,"class","markdown"),v(Ze,"id","figure-bnm-2-btos-firm-ai-use-vs-nlx-strict-ai-intensity"),v(Rt,"class","text-sm text-gray-600 mt-2"),v(et,"class","markdown"),v(et,"id","table-bnm-7-btos-sector-benchmark-rows"),v(tt,"class","markdown"),v(tt,"id","what-this-supports"),v(Gt,"class","markdown"),v(st,"class","markdown"),v(st,"id","evidence-path"),v(Lt,"class","markdown"),v(at,"class","markdown"),v(at,"id","audit-downloads"),v(Ht,"class","markdown"),v(Yt,"class","cursor-pointer font-semibold"),v(Be,"class","my-4"),v(Jt,"class","cursor-pointer font-semibold"),v(Fe,"class","my-4"),v(Xt,"class","cursor-pointer font-semibold"),v(Oe,"class","my-4"),v(Kt,"class","cursor-pointer font-semibold"),v(Ne,"class","my-4"),v(Zt,"class","cursor-pointer font-semibold"),v(Ve,"class","my-4"),v(es,"class","cursor-pointer font-semibold"),v(Ue,"class","my-4"),v(ts,"class","cursor-pointer font-semibold"),v(We,"class","my-4"),v(Et,"class","my-4"),v(qt,"class","my-4")},m(e,a){nt&&nt.m(e,a),l(e,s,a),ds.m(document.head,null),E(document.head,n),E(document.head,t),it&&it.m(document.head,null),E(document.head,o),l(e,_,a),l(e,c,a),l(e,S,a),l(e,I,a),l(e,x,a),l(e,j,a),l(e,C,a),l(e,h,a),l(e,u,a),l(e,R,a),l(e,Ee,a),l(e,fe,a),l(e,lt,a),l(e,ae,a),l(e,Pe,a),D&&D.m(e,a),l(e,De,a),l(e,te,a),w(ve,te,null),E(te,Me),w(ne,te,null),E(te,ze),w(he,te,null),E(te,Vt),w($e,te,null),l(e,we,a),l(e,se,a),l(e,_t,a),l(e,ye,a),l(e,Ae,a),l(e,ie,a),l(e,ut,a),l(e,ke,a),l(e,Te,a),l(e,re,a),l(e,ft,a),l(e,pe,a),l(e,xe,a),l(e,le,a),l(e,dt,a),l(e,Ie,a),l(e,Ce,a),B&&B.m(e,a),l(e,me,a),l(e,oe,a),l(e,gt,a),w(Se,e,a),l(e,H,a),F&&F.m(e,a),l(e,bt,a),l(e,vt,a),l(e,gs,a),l(e,Qe,a),l(e,bs,a),w(ht,e,a),l(e,vs,a),O&&O.m(e,a),l(e,cs,a),l(e,de,a),E(de,Ut),E(de,Zs),E(de,Wt),E(de,ea),E(de,$t),E(de,ta),w(wt,de,null),l(e,hs,a),l(e,Ye,a),l(e,$s,a),l(e,yt,a),l(e,ws,a),l(e,At,a),l(e,ys,a),N&&N.m(e,a),l(e,us,a),l(e,kt,a),l(e,As,a),l(e,Je,a),l(e,ks,a),w(Tt,e,a),l(e,Ts,a),l(e,ge,a),E(ge,zt),E(ge,sa),E(ge,Qt),E(ge,aa),E(ge,xt),E(ge,na),w(It,ge,null),l(e,xs,a),l(e,Xe,a),l(e,Is,a),l(e,Ct,a),l(e,Cs,a),V&&V.m(e,a),l(e,ms,a),l(e,Ke,a),l(e,Ss,a),w(St,e,a),l(e,Ms,a),U&&U.m(e,a),l(e,fs,a),W&&W.m(e,a),l(e,ps,a),l(e,Ze,a),l(e,Rs,a),w(Mt,e,a),l(e,js,a),l(e,Rt,a),l(e,Gs,a),l(e,et,a),l(e,Ls,a),w(jt,e,a),l(e,Hs,a),l(e,tt,a),l(e,Es,a),l(e,Gt,a),l(e,qs,a),l(e,st,a),l(e,Ps,a),l(e,Lt,a),l(e,Ds,a),l(e,at,a),l(e,Bs,a),l(e,Ht,a),l(e,Fs,a),l(e,Be,a),E(Be,Yt),E(Be,ia),z&&z.m(Be,null),l(e,Os,a),l(e,Fe,a),E(Fe,Jt),E(Fe,ra),Q&&Q.m(Fe,null),l(e,Ns,a),l(e,Oe,a),E(Oe,Xt),E(Oe,la),Y&&Y.m(Oe,null),l(e,Vs,a),l(e,Ne,a),E(Ne,Kt),E(Ne,oa),J&&J.m(Ne,null),l(e,Us,a),l(e,Ve,a),E(Ve,Zt),E(Ve,_a),X&&X.m(Ve,null),l(e,Ws,a),l(e,Ue,a),E(Ue,es),E(Ue,ca),K&&K.m(Ue,null),l(e,zs,a),l(e,We,a),E(We,ts),E(We,ua),Z&&Z.m(We,null),l(e,Qs,a),l(e,Et,a),l(e,Ys,a),l(e,qt,a),Js=!0},p(e,a){typeof q<"u"&&q.title&&q.hide_title!==!0&&nt.p(e,a),ds.p(e,a),typeof q=="object"&&it.p(e,a),e[0]?D?(D.p(e,a),a[0]&1&&p(D,1)):(D=Xa(e),D.c(),p(D,1),D.m(De.parentNode,De)):D&&(ce(),b(D,1,1,()=>{D=null}),_e());const Re={};a[0]&1&&(Re.data=e[0]),ve.$set(Re);const je={};a[0]&1&&(je.data=e[0]),ne.$set(je);const Ge={};a[0]&1&&(Ge.data=e[0]),he.$set(Ge);const ss={};a[0]&1&&(ss.data=e[0]),$e.$set(ss),e[1]?B?(B.p(e,a),a[0]&2&&p(B,1)):(B=Ka(e),B.c(),p(B,1),B.m(me.parentNode,me)):B&&(ce(),b(B,1,1,()=>{B=null}),_e());const Pt={};a[0]&2&&(Pt.data=e[1]),a[2]&16&&(Pt.$$scope={dirty:a,ctx:e}),Se.$set(Pt),e[2]?F?(F.p(e,a),a[0]&4&&p(F,1)):(F=Za(e),F.c(),p(F,1),F.m(bt.parentNode,bt)):F&&(ce(),b(F,1,1,()=>{F=null}),_e());const Dt={};a[0]&4&&(Dt.data=e[2]),a[2]&16&&(Dt.$$scope={dirty:a,ctx:e}),ht.$set(Dt),e[3]?O?(O.p(e,a),a[0]&8&&p(O,1)):(O=en(e),O.c(),p(O,1),O.m(cs.parentNode,cs)):O&&(ce(),b(O,1,1,()=>{O=null}),_e());const Bt={};a[0]&8&&(Bt.data=e[3]),a[2]&16&&(Bt.$$scope={dirty:a,ctx:e}),wt.$set(Bt),e[4]?N?(N.p(e,a),a[0]&16&&p(N,1)):(N=tn(e),N.c(),p(N,1),N.m(us.parentNode,us)):N&&(ce(),b(N,1,1,()=>{N=null}),_e());const Ft={};a[0]&16&&(Ft.data=e[4]),a[2]&16&&(Ft.$$scope={dirty:a,ctx:e}),Tt.$set(Ft);const Ot={};a[0]&16&&(Ot.data=e[4]),a[2]&16&&(Ot.$$scope={dirty:a,ctx:e}),It.$set(Ot),e[5]?V?(V.p(e,a),a[0]&32&&p(V,1)):(V=sn(e),V.c(),p(V,1),V.m(ms.parentNode,ms)):V&&(ce(),b(V,1,1,()=>{V=null}),_e());const Nt={};a[0]&32&&(Nt.data=e[5]),a[2]&16&&(Nt.$$scope={dirty:a,ctx:e}),St.$set(Nt),e[6]?U?(U.p(e,a),a[0]&64&&p(U,1)):(U=an(e),U.c(),p(U,1),U.m(fs.parentNode,fs)):U&&(ce(),b(U,1,1,()=>{U=null}),_e()),e[7]?W?(W.p(e,a),a[0]&128&&p(W,1)):(W=nn(e),W.c(),p(W,1),W.m(ps.parentNode,ps)):W&&(ce(),b(W,1,1,()=>{W=null}),_e());const za={};a[0]&64&&(za.data=e[6]),Mt.$set(za);const ma={};a[0]&64&&(ma.data=e[6]),a[2]&16&&(ma.$$scope={dirty:a,ctx:e}),jt.$set(ma),e[8]?z?(z.p(e,a),a[0]&256&&p(z,1)):(z=rn(e),z.c(),p(z,1),z.m(Be,null)):z&&(ce(),b(z,1,1,()=>{z=null}),_e()),e[8]?Q?(Q.p(e,a),a[0]&256&&p(Q,1)):(Q=ln(e),Q.c(),p(Q,1),Q.m(Fe,null)):Q&&(ce(),b(Q,1,1,()=>{Q=null}),_e()),e[8]?Y?(Y.p(e,a),a[0]&256&&p(Y,1)):(Y=on(e),Y.c(),p(Y,1),Y.m(Oe,null)):Y&&(ce(),b(Y,1,1,()=>{Y=null}),_e()),e[8]?J?(J.p(e,a),a[0]&256&&p(J,1)):(J=_n(e),J.c(),p(J,1),J.m(Ne,null)):J&&(ce(),b(J,1,1,()=>{J=null}),_e()),e[8]?X?(X.p(e,a),a[0]&256&&p(X,1)):(X=cn(e),X.c(),p(X,1),X.m(Ve,null)):X&&(ce(),b(X,1,1,()=>{X=null}),_e()),e[8]?K?(K.p(e,a),a[0]&256&&p(K,1)):(K=un(e),K.c(),p(K,1),K.m(Ue,null)):K&&(ce(),b(K,1,1,()=>{K=null}),_e()),e[8]?Z?(Z.p(e,a),a[0]&256&&p(Z,1)):(Z=mn(e),Z.c(),p(Z,1),Z.m(We,null)):Z&&(ce(),b(Z,1,1,()=>{Z=null}),_e())},i(e){Js||(p(D),p(ve.$$.fragment,e),p(ne.$$.fragment,e),p(he.$$.fragment,e),p($e.$$.fragment,e),p(B),p(Se.$$.fragment,e),p(F),p(ht.$$.fragment,e),p(O),p(wt.$$.fragment,e),p(N),p(Tt.$$.fragment,e),p(It.$$.fragment,e),p(V),p(St.$$.fragment,e),p(U),p(W),p(Mt.$$.fragment,e),p(jt.$$.fragment,e),p(z),p(Q),p(Y),p(J),p(X),p(K),p(Z),Js=!0)},o(e){b(D),b(ve.$$.fragment,e),b(ne.$$.fragment,e),b(he.$$.fragment,e),b($e.$$.fragment,e),b(B),b(Se.$$.fragment,e),b(F),b(ht.$$.fragment,e),b(O),b(wt.$$.fragment,e),b(N),b(Tt.$$.fragment,e),b(It.$$.fragment,e),b(V),b(St.$$.fragment,e),b(U),b(W),b(Mt.$$.fragment,e),b(jt.$$.fragment,e),b(z),b(Q),b(Y),b(J),b(X),b(K),b(Z),Js=!1},d(e){e&&(i(s),i(_),i(c),i(S),i(I),i(x),i(j),i(C),i(h),i(u),i(R),i(Ee),i(fe),i(lt),i(ae),i(Pe),i(De),i(te),i(we),i(se),i(_t),i(ye),i(Ae),i(ie),i(ut),i(ke),i(Te),i(re),i(ft),i(pe),i(xe),i(le),i(dt),i(Ie),i(Ce),i(me),i(oe),i(gt),i(H),i(bt),i(vt),i(gs),i(Qe),i(bs),i(vs),i(cs),i(de),i(hs),i(Ye),i($s),i(yt),i(ws),i(At),i(ys),i(us),i(kt),i(As),i(Je),i(ks),i(Ts),i(ge),i(xs),i(Xe),i(Is),i(Ct),i(Cs),i(ms),i(Ke),i(Ss),i(Ms),i(fs),i(ps),i(Ze),i(Rs),i(js),i(Rt),i(Gs),i(et),i(Ls),i(Hs),i(tt),i(Es),i(Gt),i(qs),i(st),i(Ps),i(Lt),i(Ds),i(at),i(Bs),i(Ht),i(Fs),i(Be),i(Os),i(Fe),i(Ns),i(Oe),i(Vs),i(Ne),i(Us),i(Ve),i(Ws),i(Ue),i(zs),i(We),i(Qs),i(Et),i(Ys),i(qt)),nt&&nt.d(e),ds.d(e),i(n),i(t),it&&it.d(e),i(o),D&&D.d(e),$(ve),$(ne),$(he),$($e),B&&B.d(e),$(Se,e),F&&F.d(e),$(ht,e),O&&O.d(e),$(wt),N&&N.d(e),$(Tt,e),$(It),V&&V.d(e),$(St,e),U&&U.d(e),W&&W.d(e),$(Mt,e),$(jt,e),z&&z.d(),Q&&Q.d(),Y&&Y.d(),J&&J.d(),X&&X.d(),K&&K.d(),Z&&Z.d()}}}const q={title:"C. Finding Emerging Skills"};function Wn(g,s,n){let t,o;Qa(g,Sn,H=>n(47,t=H)),Qa(g,Ja,H=>n(53,o=H));let{data:_}=s,{data:c={},customFormattingSettings:d,__db:S,inputs:I}=_;gn(Ja,o="6500d54edb0ea9c1439d4f7f3a715152",o);let L=Tn(kn(I));bn(L.subscribe(H=>I=H)),vn(Cn,{getCustomFormats:()=>d.customFormats||[]});const x=(H,bt)=>Rn(S.query,H,{query_name:bt});xn(x),t.params,hn(()=>!0);let j={initialData:void 0,initialError:void 0},r=ee`with reviewed as (
  select count(*) as posting_pairs
  from jaat.AGGR_AiIntensityValidationReviewed
),
consensus_large as (
  select
    accuracy as consensus_large_accuracy,
    cohen_kappa
  from jaat.AGGR_AiIntensityValidationConsensusSignTests
  where test_name = 'gap_ge_0_10'
),
provider_large as (
  select
    avg(accuracy) as provider_large_accuracy
  from jaat.AGGR_AiIntensityValidationProviderSignTests
  where test_name = 'gap_ge_0_10'
),
btos as (
  select 0.7517 as strict_btos_spearman
)
select
  reviewed.posting_pairs,
  consensus_large.consensus_large_accuracy,
  provider_large.provider_large_accuracy,
  consensus_large.cohen_kappa,
  btos.strict_btos_spearman
from reviewed
cross join consensus_large
cross join provider_large
cross join btos`,C=`with reviewed as (
  select count(*) as posting_pairs
  from jaat.AGGR_AiIntensityValidationReviewed
),
consensus_large as (
  select
    accuracy as consensus_large_accuracy,
    cohen_kappa
  from jaat.AGGR_AiIntensityValidationConsensusSignTests
  where test_name = 'gap_ge_0_10'
),
provider_large as (
  select
    avg(accuracy) as provider_large_accuracy
  from jaat.AGGR_AiIntensityValidationProviderSignTests
  where test_name = 'gap_ge_0_10'
),
btos as (
  select 0.7517 as strict_btos_spearman
)
select
  reviewed.posting_pairs,
  consensus_large.consensus_large_accuracy,
  provider_large.provider_large_accuracy,
  consensus_large.cohen_kappa,
  btos.strict_btos_spearman
from reviewed
cross join consensus_large
cross join provider_large
cross join btos`;c.building_new_maps_headline_data&&(c.building_new_maps_headline_data instanceof Error?j.initialError=c.building_new_maps_headline_data:j.initialData=c.building_new_maps_headline_data,c.building_new_maps_headline_columns&&(j.knownColumns=c.building_new_maps_headline_columns));let h,P=!1;const u=rt.createReactive({callback:H=>{n(0,h=H)},execFn:x},{id:"building_new_maps_headline",...j});u(C,{noResolve:r,...j}),globalThis[Symbol.for("building_new_maps_headline")]={get value(){return h}};let R={initialData:void 0,initialError:void 0},He=ee`select
  case provider
    when 'anthropic' then 'Claude Sonnet 4.6'
    when 'openai' then 'OpenAI GPT-4o'
    else provider
  end as judge,
  case test_name
    when 'gap_ge_0_10' then 'Gap >=0.10'
    when 'gap_ge_0_05' then 'Gap >=0.05'
    when 'overall' then 'Overall'
    else test_name
  end as test,
  n_valid,
  n_correct,
  accuracy,
  printf('%.3e', p_value_one_sided) as p_value_label
from jaat.AGGR_AiIntensityValidationProviderSignTests
where test_name in ('gap_ge_0_10', 'gap_ge_0_05', 'overall')
order by judge, case test_name when 'gap_ge_0_10' then 1 when 'gap_ge_0_05' then 2 else 3 end`,Ee=`select
  case provider
    when 'anthropic' then 'Claude Sonnet 4.6'
    when 'openai' then 'OpenAI GPT-4o'
    else provider
  end as judge,
  case test_name
    when 'gap_ge_0_10' then 'Gap >=0.10'
    when 'gap_ge_0_05' then 'Gap >=0.05'
    when 'overall' then 'Overall'
    else test_name
  end as test,
  n_valid,
  n_correct,
  accuracy,
  printf('%.3e', p_value_one_sided) as p_value_label
from jaat.AGGR_AiIntensityValidationProviderSignTests
where test_name in ('gap_ge_0_10', 'gap_ge_0_05', 'overall')
order by judge, case test_name when 'gap_ge_0_10' then 1 when 'gap_ge_0_05' then 2 else 3 end`;c.provider_sign_tests_data&&(c.provider_sign_tests_data instanceof Error?R.initialError=c.provider_sign_tests_data:R.initialData=c.provider_sign_tests_data,c.provider_sign_tests_columns&&(R.knownColumns=c.provider_sign_tests_columns));let fe,ns=!1;const lt=rt.createReactive({callback:H=>{n(1,fe=H)},execFn:x},{id:"provider_sign_tests",...R});lt(Ee,{noResolve:He,...R}),globalThis[Symbol.for("provider_sign_tests")]={get value(){return fe}};let ae={initialData:void 0,initialError:void 0},qe=ee`select
  case stratum when 'strict' then 'Strict AI' when 'lenient' then 'Lenient / adjacent' else stratum end as stratum,
  case provider when 'anthropic' then 'Claude' when 'openai' then 'GPT-4o' else provider end as judge,
  case gap_bin
    when 'gap_ge_0_10' then '>=0.10'
    when 'gap_0_05_to_0_10' then '0.05-0.10'
    when 'gap_lt_0_03' then 'Below 0.03'
    else gap_bin
  end as gap,
  n_valid,
  n_correct,
  accuracy,
  printf('%.3e', p_value_one_sided) as p_value_label,
  case status when 'reject' then 'Reject random' else 'No rejection' end as result
from jaat.AGGR_AiIntensityValidationGatekeeping
order by stratum, judge, order_idx`,Pe=`select
  case stratum when 'strict' then 'Strict AI' when 'lenient' then 'Lenient / adjacent' else stratum end as stratum,
  case provider when 'anthropic' then 'Claude' when 'openai' then 'GPT-4o' else provider end as judge,
  case gap_bin
    when 'gap_ge_0_10' then '>=0.10'
    when 'gap_0_05_to_0_10' then '0.05-0.10'
    when 'gap_lt_0_03' then 'Below 0.03'
    else gap_bin
  end as gap,
  n_valid,
  n_correct,
  accuracy,
  printf('%.3e', p_value_one_sided) as p_value_label,
  case status when 'reject' then 'Reject random' else 'No rejection' end as result
from jaat.AGGR_AiIntensityValidationGatekeeping
order by stratum, judge, order_idx`;c.gatekeeping_tests_data&&(c.gatekeeping_tests_data instanceof Error?ae.initialError=c.gatekeeping_tests_data:ae.initialData=c.gatekeeping_tests_data,c.gatekeeping_tests_columns&&(ae.knownColumns=c.gatekeeping_tests_columns));let De,te=!1;const ve=rt.createReactive({callback:H=>{n(2,De=H)},execFn:x},{id:"gatekeeping_tests",...ae});ve(Pe,{noResolve:qe,...ae}),globalThis[Symbol.for("gatekeeping_tests")]={get value(){return De}};let Me={initialData:void 0,initialError:void 0},ne=ee`select
  case test_name
    when 'gap_ge_0_10' then 'Gap >=0.10'
    when 'gap_ge_0_05' then 'Gap >=0.05'
    when 'overall' then 'Overall'
    else test_name
  end as test,
  n_consensus,
  n_correct,
  accuracy,
  printf('%.3e', p_value_one_sided) as p_value_label,
  cohen_kappa
from jaat.AGGR_AiIntensityValidationConsensusSignTests
order by case test_name when 'gap_ge_0_10' then 1 when 'gap_ge_0_05' then 2 else 3 end`,ze=`select
  case test_name
    when 'gap_ge_0_10' then 'Gap >=0.10'
    when 'gap_ge_0_05' then 'Gap >=0.05'
    when 'overall' then 'Overall'
    else test_name
  end as test,
  n_consensus,
  n_correct,
  accuracy,
  printf('%.3e', p_value_one_sided) as p_value_label,
  cohen_kappa
from jaat.AGGR_AiIntensityValidationConsensusSignTests
order by case test_name when 'gap_ge_0_10' then 1 when 'gap_ge_0_05' then 2 else 3 end`;c.consensus_sign_tests_data&&(c.consensus_sign_tests_data instanceof Error?Me.initialError=c.consensus_sign_tests_data:Me.initialData=c.consensus_sign_tests_data,c.consensus_sign_tests_columns&&(Me.knownColumns=c.consensus_sign_tests_columns));let he,Vt=!1;const $e=rt.createReactive({callback:H=>{n(3,he=H)},execFn:x},{id:"consensus_sign_tests",...Me});$e(ze,{noResolve:ne,...Me}),globalThis[Symbol.for("consensus_sign_tests")]={get value(){return he}};let we={initialData:void 0,initialError:void 0},se=ee`select
  case grouping
    when 'title_code' then 'Occupation groups'
    when 'agency_name' then 'Agency groups'
    else grouping
  end as group_level,
  case metric
    when 'ai_score_v2' then 'Mean AI score'
    when 'strict_share' then 'Strict share'
    else metric
  end as metric,
  k_units,
  median_n,
  sd_within,
  sd_between,
  icc,
  duplicate_content_share,
  median_distinct_content_neff,
  unit_mean_reliability_neff,
  mdd_two_units_neff
from jaat.AGGR_AiIntensityAggregationVariance
order by group_level desc, metric`,ot=`select
  case grouping
    when 'title_code' then 'Occupation groups'
    when 'agency_name' then 'Agency groups'
    else grouping
  end as group_level,
  case metric
    when 'ai_score_v2' then 'Mean AI score'
    when 'strict_share' then 'Strict share'
    else metric
  end as metric,
  k_units,
  median_n,
  sd_within,
  sd_between,
  icc,
  duplicate_content_share,
  median_distinct_content_neff,
  unit_mean_reliability_neff,
  mdd_two_units_neff
from jaat.AGGR_AiIntensityAggregationVariance
order by group_level desc, metric`;c.aggregation_reliability_data&&(c.aggregation_reliability_data instanceof Error?we.initialError=c.aggregation_reliability_data:we.initialData=c.aggregation_reliability_data,c.aggregation_reliability_columns&&(we.knownColumns=c.aggregation_reliability_columns));let _t,ye=!1;const is=rt.createReactive({callback:H=>{n(4,_t=H)},execFn:x},{id:"aggregation_reliability",...we});is(ot,{noResolve:se,...we}),globalThis[Symbol.for("aggregation_reliability")]={get value(){return _t}};let Ae={initialData:void 0,initialError:void 0},ie=ee`select *
from (
  values
    ('Mean AI score', 0.5064, 0.0380, 0.5870, 0.0132),
    ('Strict AI count', 0.7517, 0.0005, 0.6486, 0.0049)
) as t(metric, spearman_rho, spearman_p, pearson_r, pearson_p)`,ct=`select *
from (
  values
    ('Mean AI score', 0.5064, 0.0380, 0.5870, 0.0132),
    ('Strict AI count', 0.7517, 0.0005, 0.6486, 0.0049)
) as t(metric, spearman_rho, spearman_p, pearson_r, pearson_p)`;c.btos_correlations_data&&(c.btos_correlations_data instanceof Error?Ae.initialError=c.btos_correlations_data:Ae.initialData=c.btos_correlations_data,c.btos_correlations_columns&&(Ae.knownColumns=c.btos_correlations_columns));let ut,ke=!1;const rs=rt.createReactive({callback:H=>{n(5,ut=H)},execFn:x},{id:"btos_correlations",...Ae});rs(ct,{noResolve:ie,...Ae}),globalThis[Symbol.for("btos_correlations")]={get value(){return ut}};let Te={initialData:void 0,initialError:void 0},re=ee`with naics_labels(ind2, naics_name, point_label) as (values
  ('11','Agriculture','11 Ag'),('21','Mining','21 Mining'),('22','Utilities','22 Util'),('23','Construction','23 Const'),
  ('31','Manufacturing (31)','31 Mfg'),('32','Manufacturing (32)','32 Mfg'),('33','Manufacturing (33)','33 Mfg'),
  ('42','Wholesale Trade','42 Whls'),('44','Retail Trade (44)','44 Retail'),('45','Retail Trade (45)','45 Retail'),
  ('48','Transportation (48)','48 Trans'),('49','Warehousing (49)','49 Wareh'),('51','Information','51 Info'),
  ('52','Finance and Insurance','52 Fin'),('53','Real Estate','53 RE'),
  ('54','Professional, Scientific, and Technical Services','54 Prof/Sci'),
  ('55','Management of Companies and Enterprises','55 Mgmt'),
  ('56','Administrative and Waste Services','56 Admin'),
  ('61','Educational Services','61 Educ'),('62','Health Care and Social Assistance','62 Health'),
  ('71','Arts, Entertainment, and Recreation','71 Arts'),
  ('72','Accommodation and Food Services','72 Food'),('81','Other Services','81 Other'),
  ('92','Public Administration','92 Public')
)
select
  b.ind2 as naics2,
  coalesce(l.naics_name, b.ind2) as naics_name,
  coalesce(l.point_label, b.ind2) as point_label,
  b.btos_ai_yes_pct / 100.0 as btos_ai_share,
  b.nlx_avg_ai_score_v2,
  b.nlx_avg_n_strict,
  b.nlx_jobs
from jaat.AGGR_AiIntensityAggregationBtosBenchmark b
left join naics_labels l on l.ind2 = b.ind2
order by b.btos_ai_yes_pct desc`,mt=`with naics_labels(ind2, naics_name, point_label) as (values
  ('11','Agriculture','11 Ag'),('21','Mining','21 Mining'),('22','Utilities','22 Util'),('23','Construction','23 Const'),
  ('31','Manufacturing (31)','31 Mfg'),('32','Manufacturing (32)','32 Mfg'),('33','Manufacturing (33)','33 Mfg'),
  ('42','Wholesale Trade','42 Whls'),('44','Retail Trade (44)','44 Retail'),('45','Retail Trade (45)','45 Retail'),
  ('48','Transportation (48)','48 Trans'),('49','Warehousing (49)','49 Wareh'),('51','Information','51 Info'),
  ('52','Finance and Insurance','52 Fin'),('53','Real Estate','53 RE'),
  ('54','Professional, Scientific, and Technical Services','54 Prof/Sci'),
  ('55','Management of Companies and Enterprises','55 Mgmt'),
  ('56','Administrative and Waste Services','56 Admin'),
  ('61','Educational Services','61 Educ'),('62','Health Care and Social Assistance','62 Health'),
  ('71','Arts, Entertainment, and Recreation','71 Arts'),
  ('72','Accommodation and Food Services','72 Food'),('81','Other Services','81 Other'),
  ('92','Public Administration','92 Public')
)
select
  b.ind2 as naics2,
  coalesce(l.naics_name, b.ind2) as naics_name,
  coalesce(l.point_label, b.ind2) as point_label,
  b.btos_ai_yes_pct / 100.0 as btos_ai_share,
  b.nlx_avg_ai_score_v2,
  b.nlx_avg_n_strict,
  b.nlx_jobs
from jaat.AGGR_AiIntensityAggregationBtosBenchmark b
left join naics_labels l on l.ind2 = b.ind2
order by b.btos_ai_yes_pct desc`;c.btos_industry_rows_data&&(c.btos_industry_rows_data instanceof Error?Te.initialError=c.btos_industry_rows_data:Te.initialData=c.btos_industry_rows_data,c.btos_industry_rows_columns&&(Te.knownColumns=c.btos_industry_rows_columns));let ft,pe=!1;const ls=rt.createReactive({callback:H=>{n(6,ft=H)},execFn:x},{id:"btos_industry_rows",...Te});ls(mt,{noResolve:re,...Te}),globalThis[Symbol.for("btos_industry_rows")]={get value(){return ft}};let xe={initialData:void 0,initialError:void 0},le=ee`with rows as (
  select
    btos_ai_yes_pct / 100.0 as x,
    nlx_avg_n_strict as y
  from jaat.AGGR_AiIntensityAggregationBtosBenchmark
),
stats as (
  select
    regr_slope(y, x) as slope,
    regr_intercept(y, x) as intercept,
    min(x) as min_x,
    max(x) as max_x
  from rows
)
select
  min_x as btos_ai_share,
  intercept + slope * min_x as fitted_strict
from stats
union all
select
  max_x as btos_ai_share,
  intercept + slope * max_x as fitted_strict
from stats
order by btos_ai_share`,pt=`with rows as (
  select
    btos_ai_yes_pct / 100.0 as x,
    nlx_avg_n_strict as y
  from jaat.AGGR_AiIntensityAggregationBtosBenchmark
),
stats as (
  select
    regr_slope(y, x) as slope,
    regr_intercept(y, x) as intercept,
    min(x) as min_x,
    max(x) as max_x
  from rows
)
select
  min_x as btos_ai_share,
  intercept + slope * min_x as fitted_strict
from stats
union all
select
  max_x as btos_ai_share,
  intercept + slope * max_x as fitted_strict
from stats
order by btos_ai_share`;c.btos_fit_line_data&&(c.btos_fit_line_data instanceof Error?xe.initialError=c.btos_fit_line_data:xe.initialData=c.btos_fit_line_data,c.btos_fit_line_columns&&(xe.knownColumns=c.btos_fit_line_columns));let dt,Ie=!1;const os=rt.createReactive({callback:H=>{n(7,dt=H)},execFn:x},{id:"btos_fit_line",...xe});os(pt,{noResolve:le,...xe}),globalThis[Symbol.for("btos_fit_line")]={get value(){return dt}};let Ce={initialData:void 0,initialError:void 0},me=ee`select
  ind2 as naics2,
  btos_ai_yes_pct / 100.0 as btos_ai_share,
  nlx_avg_ai_score_v2,
  nlx_avg_n_strict,
  nlx_jobs
from jaat.AGGR_AiIntensityAggregationBtosBenchmark
order by btos_ai_yes_pct desc`,oe=`select
  ind2 as naics2,
  btos_ai_yes_pct / 100.0 as btos_ai_share,
  nlx_avg_ai_score_v2,
  nlx_avg_n_strict,
  nlx_jobs
from jaat.AGGR_AiIntensityAggregationBtosBenchmark
order by btos_ai_yes_pct desc`;c.text_data&&(c.text_data instanceof Error?Ce.initialError=c.text_data:Ce.initialData=c.text_data,c.text_columns&&(Ce.knownColumns=c.text_columns));let _s,gt=!1;const Se=rt.createReactive({callback:H=>{n(8,_s=H)},execFn:x},{id:"text",...Ce});return Se(oe,{noResolve:me,...Ce}),globalThis[Symbol.for("text")]={get value(){return _s}},g.$$set=H=>{"data"in H&&n(9,_=H.data)},g.$$.update=()=>{g.$$.dirty[0]&512&&n(10,{data:c={},customFormattingSettings:d,__db:S}=_,c),g.$$.dirty[0]&1024&&In.set(Object.keys(c).length>0),g.$$.dirty[1]&65536&&t.params,g.$$.dirty[0]&30720&&(r||!P?r||(u(C,{noResolve:r,...j}),n(14,P=!0)):u(C,{noResolve:r})),g.$$.dirty[0]&491520&&(He||!ns?He||(lt(Ee,{noResolve:He,...R}),n(18,ns=!0)):lt(Ee,{noResolve:He})),g.$$.dirty[0]&7864320&&(qe||!te?qe||(ve(Pe,{noResolve:qe,...ae}),n(22,te=!0)):ve(Pe,{noResolve:qe})),g.$$.dirty[0]&125829120&&(ne||!Vt?ne||($e(ze,{noResolve:ne,...Me}),n(26,Vt=!0)):$e(ze,{noResolve:ne})),g.$$.dirty[0]&2013265920&&(se||!ye?se||(is(ot,{noResolve:se,...we}),n(30,ye=!0)):is(ot,{noResolve:se})),g.$$.dirty[1]&15&&(ie||!ke?ie||(rs(ct,{noResolve:ie,...Ae}),n(34,ke=!0)):rs(ct,{noResolve:ie})),g.$$.dirty[1]&240&&(re||!pe?re||(ls(mt,{noResolve:re,...Te}),n(38,pe=!0)):ls(mt,{noResolve:re})),g.$$.dirty[1]&3840&&(le||!Ie?le||(os(pt,{noResolve:le,...xe}),n(42,Ie=!0)):os(pt,{noResolve:le})),g.$$.dirty[1]&61440&&(me||!gt?me||(Se(oe,{noResolve:me,...Ce}),n(46,gt=!0)):Se(oe,{noResolve:me}))},n(12,r=ee`with reviewed as (
  select count(*) as posting_pairs
  from jaat.AGGR_AiIntensityValidationReviewed
),
consensus_large as (
  select
    accuracy as consensus_large_accuracy,
    cohen_kappa
  from jaat.AGGR_AiIntensityValidationConsensusSignTests
  where test_name = 'gap_ge_0_10'
),
provider_large as (
  select
    avg(accuracy) as provider_large_accuracy
  from jaat.AGGR_AiIntensityValidationProviderSignTests
  where test_name = 'gap_ge_0_10'
),
btos as (
  select 0.7517 as strict_btos_spearman
)
select
  reviewed.posting_pairs,
  consensus_large.consensus_large_accuracy,
  provider_large.provider_large_accuracy,
  consensus_large.cohen_kappa,
  btos.strict_btos_spearman
from reviewed
cross join consensus_large
cross join provider_large
cross join btos`),n(13,C=`with reviewed as (
  select count(*) as posting_pairs
  from jaat.AGGR_AiIntensityValidationReviewed
),
consensus_large as (
  select
    accuracy as consensus_large_accuracy,
    cohen_kappa
  from jaat.AGGR_AiIntensityValidationConsensusSignTests
  where test_name = 'gap_ge_0_10'
),
provider_large as (
  select
    avg(accuracy) as provider_large_accuracy
  from jaat.AGGR_AiIntensityValidationProviderSignTests
  where test_name = 'gap_ge_0_10'
),
btos as (
  select 0.7517 as strict_btos_spearman
)
select
  reviewed.posting_pairs,
  consensus_large.consensus_large_accuracy,
  provider_large.provider_large_accuracy,
  consensus_large.cohen_kappa,
  btos.strict_btos_spearman
from reviewed
cross join consensus_large
cross join provider_large
cross join btos`),n(16,He=ee`select
  case provider
    when 'anthropic' then 'Claude Sonnet 4.6'
    when 'openai' then 'OpenAI GPT-4o'
    else provider
  end as judge,
  case test_name
    when 'gap_ge_0_10' then 'Gap >=0.10'
    when 'gap_ge_0_05' then 'Gap >=0.05'
    when 'overall' then 'Overall'
    else test_name
  end as test,
  n_valid,
  n_correct,
  accuracy,
  printf('%.3e', p_value_one_sided) as p_value_label
from jaat.AGGR_AiIntensityValidationProviderSignTests
where test_name in ('gap_ge_0_10', 'gap_ge_0_05', 'overall')
order by judge, case test_name when 'gap_ge_0_10' then 1 when 'gap_ge_0_05' then 2 else 3 end`),n(17,Ee=`select
  case provider
    when 'anthropic' then 'Claude Sonnet 4.6'
    when 'openai' then 'OpenAI GPT-4o'
    else provider
  end as judge,
  case test_name
    when 'gap_ge_0_10' then 'Gap >=0.10'
    when 'gap_ge_0_05' then 'Gap >=0.05'
    when 'overall' then 'Overall'
    else test_name
  end as test,
  n_valid,
  n_correct,
  accuracy,
  printf('%.3e', p_value_one_sided) as p_value_label
from jaat.AGGR_AiIntensityValidationProviderSignTests
where test_name in ('gap_ge_0_10', 'gap_ge_0_05', 'overall')
order by judge, case test_name when 'gap_ge_0_10' then 1 when 'gap_ge_0_05' then 2 else 3 end`),n(20,qe=ee`select
  case stratum when 'strict' then 'Strict AI' when 'lenient' then 'Lenient / adjacent' else stratum end as stratum,
  case provider when 'anthropic' then 'Claude' when 'openai' then 'GPT-4o' else provider end as judge,
  case gap_bin
    when 'gap_ge_0_10' then '>=0.10'
    when 'gap_0_05_to_0_10' then '0.05-0.10'
    when 'gap_lt_0_03' then 'Below 0.03'
    else gap_bin
  end as gap,
  n_valid,
  n_correct,
  accuracy,
  printf('%.3e', p_value_one_sided) as p_value_label,
  case status when 'reject' then 'Reject random' else 'No rejection' end as result
from jaat.AGGR_AiIntensityValidationGatekeeping
order by stratum, judge, order_idx`),n(21,Pe=`select
  case stratum when 'strict' then 'Strict AI' when 'lenient' then 'Lenient / adjacent' else stratum end as stratum,
  case provider when 'anthropic' then 'Claude' when 'openai' then 'GPT-4o' else provider end as judge,
  case gap_bin
    when 'gap_ge_0_10' then '>=0.10'
    when 'gap_0_05_to_0_10' then '0.05-0.10'
    when 'gap_lt_0_03' then 'Below 0.03'
    else gap_bin
  end as gap,
  n_valid,
  n_correct,
  accuracy,
  printf('%.3e', p_value_one_sided) as p_value_label,
  case status when 'reject' then 'Reject random' else 'No rejection' end as result
from jaat.AGGR_AiIntensityValidationGatekeeping
order by stratum, judge, order_idx`),n(24,ne=ee`select
  case test_name
    when 'gap_ge_0_10' then 'Gap >=0.10'
    when 'gap_ge_0_05' then 'Gap >=0.05'
    when 'overall' then 'Overall'
    else test_name
  end as test,
  n_consensus,
  n_correct,
  accuracy,
  printf('%.3e', p_value_one_sided) as p_value_label,
  cohen_kappa
from jaat.AGGR_AiIntensityValidationConsensusSignTests
order by case test_name when 'gap_ge_0_10' then 1 when 'gap_ge_0_05' then 2 else 3 end`),n(25,ze=`select
  case test_name
    when 'gap_ge_0_10' then 'Gap >=0.10'
    when 'gap_ge_0_05' then 'Gap >=0.05'
    when 'overall' then 'Overall'
    else test_name
  end as test,
  n_consensus,
  n_correct,
  accuracy,
  printf('%.3e', p_value_one_sided) as p_value_label,
  cohen_kappa
from jaat.AGGR_AiIntensityValidationConsensusSignTests
order by case test_name when 'gap_ge_0_10' then 1 when 'gap_ge_0_05' then 2 else 3 end`),n(28,se=ee`select
  case grouping
    when 'title_code' then 'Occupation groups'
    when 'agency_name' then 'Agency groups'
    else grouping
  end as group_level,
  case metric
    when 'ai_score_v2' then 'Mean AI score'
    when 'strict_share' then 'Strict share'
    else metric
  end as metric,
  k_units,
  median_n,
  sd_within,
  sd_between,
  icc,
  duplicate_content_share,
  median_distinct_content_neff,
  unit_mean_reliability_neff,
  mdd_two_units_neff
from jaat.AGGR_AiIntensityAggregationVariance
order by group_level desc, metric`),n(29,ot=`select
  case grouping
    when 'title_code' then 'Occupation groups'
    when 'agency_name' then 'Agency groups'
    else grouping
  end as group_level,
  case metric
    when 'ai_score_v2' then 'Mean AI score'
    when 'strict_share' then 'Strict share'
    else metric
  end as metric,
  k_units,
  median_n,
  sd_within,
  sd_between,
  icc,
  duplicate_content_share,
  median_distinct_content_neff,
  unit_mean_reliability_neff,
  mdd_two_units_neff
from jaat.AGGR_AiIntensityAggregationVariance
order by group_level desc, metric`),n(32,ie=ee`select *
from (
  values
    ('Mean AI score', 0.5064, 0.0380, 0.5870, 0.0132),
    ('Strict AI count', 0.7517, 0.0005, 0.6486, 0.0049)
) as t(metric, spearman_rho, spearman_p, pearson_r, pearson_p)`),n(33,ct=`select *
from (
  values
    ('Mean AI score', 0.5064, 0.0380, 0.5870, 0.0132),
    ('Strict AI count', 0.7517, 0.0005, 0.6486, 0.0049)
) as t(metric, spearman_rho, spearman_p, pearson_r, pearson_p)`),n(36,re=ee`with naics_labels(ind2, naics_name, point_label) as (values
  ('11','Agriculture','11 Ag'),('21','Mining','21 Mining'),('22','Utilities','22 Util'),('23','Construction','23 Const'),
  ('31','Manufacturing (31)','31 Mfg'),('32','Manufacturing (32)','32 Mfg'),('33','Manufacturing (33)','33 Mfg'),
  ('42','Wholesale Trade','42 Whls'),('44','Retail Trade (44)','44 Retail'),('45','Retail Trade (45)','45 Retail'),
  ('48','Transportation (48)','48 Trans'),('49','Warehousing (49)','49 Wareh'),('51','Information','51 Info'),
  ('52','Finance and Insurance','52 Fin'),('53','Real Estate','53 RE'),
  ('54','Professional, Scientific, and Technical Services','54 Prof/Sci'),
  ('55','Management of Companies and Enterprises','55 Mgmt'),
  ('56','Administrative and Waste Services','56 Admin'),
  ('61','Educational Services','61 Educ'),('62','Health Care and Social Assistance','62 Health'),
  ('71','Arts, Entertainment, and Recreation','71 Arts'),
  ('72','Accommodation and Food Services','72 Food'),('81','Other Services','81 Other'),
  ('92','Public Administration','92 Public')
)
select
  b.ind2 as naics2,
  coalesce(l.naics_name, b.ind2) as naics_name,
  coalesce(l.point_label, b.ind2) as point_label,
  b.btos_ai_yes_pct / 100.0 as btos_ai_share,
  b.nlx_avg_ai_score_v2,
  b.nlx_avg_n_strict,
  b.nlx_jobs
from jaat.AGGR_AiIntensityAggregationBtosBenchmark b
left join naics_labels l on l.ind2 = b.ind2
order by b.btos_ai_yes_pct desc`),n(37,mt=`with naics_labels(ind2, naics_name, point_label) as (values
  ('11','Agriculture','11 Ag'),('21','Mining','21 Mining'),('22','Utilities','22 Util'),('23','Construction','23 Const'),
  ('31','Manufacturing (31)','31 Mfg'),('32','Manufacturing (32)','32 Mfg'),('33','Manufacturing (33)','33 Mfg'),
  ('42','Wholesale Trade','42 Whls'),('44','Retail Trade (44)','44 Retail'),('45','Retail Trade (45)','45 Retail'),
  ('48','Transportation (48)','48 Trans'),('49','Warehousing (49)','49 Wareh'),('51','Information','51 Info'),
  ('52','Finance and Insurance','52 Fin'),('53','Real Estate','53 RE'),
  ('54','Professional, Scientific, and Technical Services','54 Prof/Sci'),
  ('55','Management of Companies and Enterprises','55 Mgmt'),
  ('56','Administrative and Waste Services','56 Admin'),
  ('61','Educational Services','61 Educ'),('62','Health Care and Social Assistance','62 Health'),
  ('71','Arts, Entertainment, and Recreation','71 Arts'),
  ('72','Accommodation and Food Services','72 Food'),('81','Other Services','81 Other'),
  ('92','Public Administration','92 Public')
)
select
  b.ind2 as naics2,
  coalesce(l.naics_name, b.ind2) as naics_name,
  coalesce(l.point_label, b.ind2) as point_label,
  b.btos_ai_yes_pct / 100.0 as btos_ai_share,
  b.nlx_avg_ai_score_v2,
  b.nlx_avg_n_strict,
  b.nlx_jobs
from jaat.AGGR_AiIntensityAggregationBtosBenchmark b
left join naics_labels l on l.ind2 = b.ind2
order by b.btos_ai_yes_pct desc`),n(40,le=ee`with rows as (
  select
    btos_ai_yes_pct / 100.0 as x,
    nlx_avg_n_strict as y
  from jaat.AGGR_AiIntensityAggregationBtosBenchmark
),
stats as (
  select
    regr_slope(y, x) as slope,
    regr_intercept(y, x) as intercept,
    min(x) as min_x,
    max(x) as max_x
  from rows
)
select
  min_x as btos_ai_share,
  intercept + slope * min_x as fitted_strict
from stats
union all
select
  max_x as btos_ai_share,
  intercept + slope * max_x as fitted_strict
from stats
order by btos_ai_share`),n(41,pt=`with rows as (
  select
    btos_ai_yes_pct / 100.0 as x,
    nlx_avg_n_strict as y
  from jaat.AGGR_AiIntensityAggregationBtosBenchmark
),
stats as (
  select
    regr_slope(y, x) as slope,
    regr_intercept(y, x) as intercept,
    min(x) as min_x,
    max(x) as max_x
  from rows
)
select
  min_x as btos_ai_share,
  intercept + slope * min_x as fitted_strict
from stats
union all
select
  max_x as btos_ai_share,
  intercept + slope * max_x as fitted_strict
from stats
order by btos_ai_share`),n(44,me=ee`select
  ind2 as naics2,
  btos_ai_yes_pct / 100.0 as btos_ai_share,
  nlx_avg_ai_score_v2,
  nlx_avg_n_strict,
  nlx_jobs
from jaat.AGGR_AiIntensityAggregationBtosBenchmark
order by btos_ai_yes_pct desc`),n(45,oe=`select
  ind2 as naics2,
  btos_ai_yes_pct / 100.0 as btos_ai_share,
  nlx_avg_ai_score_v2,
  nlx_avg_n_strict,
  nlx_jobs
from jaat.AGGR_AiIntensityAggregationBtosBenchmark
order by btos_ai_yes_pct desc`),[h,fe,De,he,_t,ut,ft,dt,_s,_,c,j,r,C,P,R,He,Ee,ns,ae,qe,Pe,te,Me,ne,ze,Vt,we,se,ot,ye,Ae,ie,ct,ke,Te,re,mt,pe,xe,le,pt,Ie,Ce,me,oe,gt,t]}class ii extends yn{constructor(s){super(),An(this,s,Wn,Un,pn,{data:9},null,[-1,-1,-1])}}export{ii as component};
