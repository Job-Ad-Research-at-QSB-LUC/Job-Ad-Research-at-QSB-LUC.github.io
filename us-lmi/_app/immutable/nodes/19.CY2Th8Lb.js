import{s as ce,d as _,i as c,a as Ot,b as $,c as w,h as ue,e as h,f as Ut,g as W,k as d,l as H,m as ee,n as me,o as fe,p as pe,q as we,r as ot,j as de,t as $e,u as ke}from"../chunks/scheduler.TmfZfN_X.js";import{S as ye,i as ve,d as b,t as y,a as k,c as Ht,m as g,b as C,e as T,g as At}from"../chunks/index.CKLTamEB.js";import{D as Dt,C as E}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.BLmrhC3S.js";import{w as xe}from"../chunks/entry.D_I0byi6.js";import{e as be,s as ge,Q as Nt,p as Ce,a as ne,r as ie,C as Te}from"../chunks/inferColumnTypes.DQCA4D4f.js";import{h as st}from"../chunks/setTrackProxy.Cyfckp0w.js";import{D as Me}from"../chunks/Dropdown.DR-R82_G.js";import{p as he}from"../chunks/stores.C11oRilr.js";import{Q as Rt}from"../chunks/QueryViewer.DATGjO3_.js";import{p as He}from"../chunks/profile.BW8tN6E9.js";function Ae(m){let i,r=x.title+"",n;return{c(){i=H("h1"),n=ke(r),this.h()},l(o){i=h(o,"H1",{class:!0});var l=de(i);n=$e(l,r),l.forEach(_),this.h()},h(){$(i,"class","title")},m(o,l){c(o,i,l),Ot(i,n)},p:ot,d(o){o&&_(i)}}}function Ne(m){return{c(){this.h()},l(i){this.h()},h(){document.title="Evidence"},m:ot,p:ot,d:ot}}function Re(m){let i,r,n,o,l;return document.title=i=x.title,{c(){r=d(),n=H("meta"),o=d(),l=H("meta"),this.h()},l(a){r=w(a),n=h(a,"META",{property:!0,content:!0}),o=w(a),l=h(a,"META",{name:!0,content:!0}),this.h()},h(){var a,u;$(n,"property","og:title"),$(n,"content",((a=x.og)==null?void 0:a.title)??x.title),$(l,"name","twitter:title"),$(l,"content",((u=x.og)==null?void 0:u.title)??x.title)},m(a,u){c(a,r,u),c(a,n,u),c(a,o,u),c(a,l,u)},p(a,u){u&0&&i!==(i=x.title)&&(document.title=i)},d(a){a&&(_(r),_(n),_(o),_(l))}}}function Le(m){var l,a;let i,r,n=(x.description||((l=x.og)==null?void 0:l.description))&&Pe(),o=((a=x.og)==null?void 0:a.image)&&je();return{c(){n&&n.c(),i=d(),o&&o.c(),r=Ut()},l(u){n&&n.l(u),i=w(u),o&&o.l(u),r=Ut()},m(u,v){n&&n.m(u,v),c(u,i,v),o&&o.m(u,v),c(u,r,v)},p(u,v){var p,M;(x.description||(p=x.og)!=null&&p.description)&&n.p(u,v),(M=x.og)!=null&&M.image&&o.p(u,v)},d(u){u&&(_(i),_(r)),n&&n.d(u),o&&o.d(u)}}}function Pe(m){let i,r,n,o,l;return{c(){i=H("meta"),r=d(),n=H("meta"),o=d(),l=H("meta"),this.h()},l(a){i=h(a,"META",{name:!0,content:!0}),r=w(a),n=h(a,"META",{property:!0,content:!0}),o=w(a),l=h(a,"META",{name:!0,content:!0}),this.h()},h(){var a,u,v;$(i,"name","description"),$(i,"content",x.description??((a=x.og)==null?void 0:a.description)),$(n,"property","og:description"),$(n,"content",((u=x.og)==null?void 0:u.description)??x.description),$(l,"name","twitter:description"),$(l,"content",((v=x.og)==null?void 0:v.description)??x.description)},m(a,u){c(a,i,u),c(a,r,u),c(a,n,u),c(a,o,u),c(a,l,u)},p:ot,d(a){a&&(_(i),_(r),_(n),_(o),_(l))}}}function je(m){let i,r,n;return{c(){i=H("meta"),r=d(),n=H("meta"),this.h()},l(o){i=h(o,"META",{property:!0,content:!0}),r=w(o),n=h(o,"META",{name:!0,content:!0}),this.h()},h(){var o,l;$(i,"property","og:image"),$(i,"content",ne((o=x.og)==null?void 0:o.image)),$(n,"name","twitter:image"),$(n,"content",ne((l=x.og)==null?void 0:l.image))},m(o,l){c(o,i,l),c(o,r,l),c(o,n,l)},p:ot,d(o){o&&(_(i),_(r),_(n))}}}function re(m){let i,r;return i=new Rt({props:{queryID:"nlx_top_occ_work_activities",queryResult:m[0]}}),{c(){T(i.$$.fragment)},l(n){C(i.$$.fragment,n)},m(n,o){g(i,n,o),r=!0},p(n,o){const l={};o[0]&1&&(l.queryResult=n[0]),i.$set(l)},i(n){r||(k(i.$$.fragment,n),r=!0)},o(n){y(i.$$.fragment,n),r=!1},d(n){b(i,n)}}}function Ee(m){let i,r,n,o,l,a,u,v,p,M;return i=new E({props:{id:"occ_rank",title:"Rank",fmt:"0"}}),n=new E({props:{id:"wa_id",title:"Work Activity"}}),l=new E({props:{id:"wa_name",title:"Work Activity Name"}}),u=new E({props:{id:"rca",title:"RCA",fmt:"0.00"}}),p=new E({props:{id:"mentions",title:"WA matches",fmt:"#,##0"}}),{c(){T(i.$$.fragment),r=d(),T(n.$$.fragment),o=d(),T(l.$$.fragment),a=d(),T(u.$$.fragment),v=d(),T(p.$$.fragment)},l(t){C(i.$$.fragment,t),r=w(t),C(n.$$.fragment,t),o=w(t),C(l.$$.fragment,t),a=w(t),C(u.$$.fragment,t),v=w(t),C(p.$$.fragment,t)},m(t,f){g(i,t,f),c(t,r,f),g(n,t,f),c(t,o,f),g(l,t,f),c(t,a,f),g(u,t,f),c(t,v,f),g(p,t,f),M=!0},p:ot,i(t){M||(k(i.$$.fragment,t),k(n.$$.fragment,t),k(l.$$.fragment,t),k(u.$$.fragment,t),k(p.$$.fragment,t),M=!0)},o(t){y(i.$$.fragment,t),y(n.$$.fragment,t),y(l.$$.fragment,t),y(u.$$.fragment,t),y(p.$$.fragment,t),M=!1},d(t){t&&(_(r),_(o),_(a),_(v)),b(i,t),b(n,t),b(l,t),b(u,t),b(p,t)}}}function ae(m){let i,r;return i=new Rt({props:{queryID:"nlx_wa_options",queryResult:m[1]}}),{c(){T(i.$$.fragment)},l(n){C(i.$$.fragment,n)},m(n,o){g(i,n,o),r=!0},p(n,o){const l={};o[0]&2&&(l.queryResult=n[1]),i.$set(l)},i(n){r||(k(i.$$.fragment,n),r=!0)},o(n){y(i.$$.fragment,n),r=!1},d(n){b(i,n)}}}function se(m){let i,r;return i=new Rt({props:{queryID:"nlx_occ_wa_ranking",queryResult:m[2]}}),{c(){T(i.$$.fragment)},l(n){C(i.$$.fragment,n)},m(n,o){g(i,n,o),r=!0},p(n,o){const l={};o[0]&4&&(l.queryResult=n[2]),i.$set(l)},i(n){r||(k(i.$$.fragment,n),r=!0)},o(n){y(i.$$.fragment,n),r=!1},d(n){b(i,n)}}}function Ie(m){let i,r,n,o,l,a,u,v,p,M;return i=new E({props:{id:"wa_intensity_rank",title:"Rank",fmt:"0"}}),n=new E({props:{id:"occ8",title:"8-digit O*NET-SOC"}}),l=new E({props:{id:"soc_title",title:"Occupation",wrap:"true"}}),u=new E({props:{id:"active_jobs",title:"Monthly active jobs",fmt:"#,##0"}}),p=new E({props:{id:"pct_active_jobs",title:"% active jobs",fmt:"0.0%"}}),{c(){T(i.$$.fragment),r=d(),T(n.$$.fragment),o=d(),T(l.$$.fragment),a=d(),T(u.$$.fragment),v=d(),T(p.$$.fragment)},l(t){C(i.$$.fragment,t),r=w(t),C(n.$$.fragment,t),o=w(t),C(l.$$.fragment,t),a=w(t),C(u.$$.fragment,t),v=w(t),C(p.$$.fragment,t)},m(t,f){g(i,t,f),c(t,r,f),g(n,t,f),c(t,o,f),g(l,t,f),c(t,a,f),g(u,t,f),c(t,v,f),g(p,t,f),M=!0},p:ot,i(t){M||(k(i.$$.fragment,t),k(n.$$.fragment,t),k(l.$$.fragment,t),k(u.$$.fragment,t),k(p.$$.fragment,t),M=!0)},o(t){y(i.$$.fragment,t),y(n.$$.fragment,t),y(l.$$.fragment,t),y(u.$$.fragment,t),y(p.$$.fragment,t),M=!1},d(t){t&&(_(r),_(o),_(a),_(v)),b(i,t),b(n,t),b(l,t),b(u,t),b(p,t)}}}function oe(m){let i,r;return i=new Rt({props:{queryID:"nlx_industry_wa_ranking",queryResult:m[3]}}),{c(){T(i.$$.fragment)},l(n){C(i.$$.fragment,n)},m(n,o){g(i,n,o),r=!0},p(n,o){const l={};o[0]&8&&(l.queryResult=n[3]),i.$set(l)},i(n){r||(k(i.$$.fragment,n),r=!0)},o(n){y(i.$$.fragment,n),r=!1},d(n){b(i,n)}}}function qe(m){let i,r,n,o,l,a,u,v,p,M;return i=new E({props:{id:"wa_intensity_rank",title:"Rank",fmt:"0"}}),n=new E({props:{id:"ind2",title:"NAICS-2"}}),l=new E({props:{id:"naics_name",title:"Industry",wrap:"true"}}),u=new E({props:{id:"active_jobs",title:"Monthly active jobs",fmt:"#,##0"}}),p=new E({props:{id:"mentions_per_active_job",title:"WA matches per MAJ",fmt:"0.000"}}),{c(){T(i.$$.fragment),r=d(),T(n.$$.fragment),o=d(),T(l.$$.fragment),a=d(),T(u.$$.fragment),v=d(),T(p.$$.fragment)},l(t){C(i.$$.fragment,t),r=w(t),C(n.$$.fragment,t),o=w(t),C(l.$$.fragment,t),a=w(t),C(u.$$.fragment,t),v=w(t),C(p.$$.fragment,t)},m(t,f){g(i,t,f),c(t,r,f),g(n,t,f),c(t,o,f),g(l,t,f),c(t,a,f),g(u,t,f),c(t,v,f),g(p,t,f),M=!0},p:ot,i(t){M||(k(i.$$.fragment,t),k(n.$$.fragment,t),k(l.$$.fragment,t),k(u.$$.fragment,t),k(p.$$.fragment,t),M=!0)},o(t){y(i.$$.fragment,t),y(n.$$.fragment,t),y(l.$$.fragment,t),y(u.$$.fragment,t),y(p.$$.fragment,t),M=!1},d(t){t&&(_(r),_(o),_(a),_(v)),b(i,t),b(n,t),b(l,t),b(u,t),b(p,t)}}}function le(m){let i,r;return i=new Rt({props:{queryID:"nlx_top_industry_work_activities",queryResult:m[4]}}),{c(){T(i.$$.fragment)},l(n){C(i.$$.fragment,n)},m(n,o){g(i,n,o),r=!0},p(n,o){const l={};o[0]&16&&(l.queryResult=n[4]),i.$set(l)},i(n){r||(k(i.$$.fragment,n),r=!0)},o(n){y(i.$$.fragment,n),r=!1},d(n){b(i,n)}}}function Fe(m){let i,r,n,o,l,a,u,v,p,M;return i=new E({props:{id:"ind_rank",title:"Rank",fmt:"0"}}),n=new E({props:{id:"wa_id",title:"Work Activity"}}),l=new E({props:{id:"wa_name",title:"Work Activity Name"}}),u=new E({props:{id:"rca",title:"RCA",fmt:"0.00"}}),p=new E({props:{id:"mentions",title:"WA matches",fmt:"#,##0"}}),{c(){T(i.$$.fragment),r=d(),T(n.$$.fragment),o=d(),T(l.$$.fragment),a=d(),T(u.$$.fragment),v=d(),T(p.$$.fragment)},l(t){C(i.$$.fragment,t),r=w(t),C(n.$$.fragment,t),o=w(t),C(l.$$.fragment,t),a=w(t),C(u.$$.fragment,t),v=w(t),C(p.$$.fragment,t)},m(t,f){g(i,t,f),c(t,r,f),g(n,t,f),c(t,o,f),g(l,t,f),c(t,a,f),g(u,t,f),c(t,v,f),g(p,t,f),M=!0},p:ot,i(t){M||(k(i.$$.fragment,t),k(n.$$.fragment,t),k(l.$$.fragment,t),k(u.$$.fragment,t),k(p.$$.fragment,t),M=!0)},o(t){y(i.$$.fragment,t),y(n.$$.fragment,t),y(l.$$.fragment,t),y(u.$$.fragment,t),y(p.$$.fragment,t),M=!1},d(t){t&&(_(r),_(o),_(a),_(v)),b(i,t),b(n,t),b(l,t),b(u,t),b(p,t)}}}function Se(m){let i,r,n,o,l,a,u="<strong>NLx data disclaimer.</strong> The National Labor Exchange (NLx) Data Trust bears no responsibility for the analyses or interpretations of the data presented here.",v,p,M="Work Activities are profiled at the SOC-2 major occupation-group and NAICS-2 industry grains.",t,f,z="<strong>How to read this page.</strong> This is a lookup profile for O*NET Work Activities. RCA ranks activities that are unusually concentrated in a group; volume columns show the size of the evidence. Work Activities are higher-level O*NET constructs, so they are less granular than task statements.",G,B,xt="<strong>Shared terms.</strong> RCA = group Work Activity share / corpus Work Activity share. WA matches are Work Activity mentions. % active jobs and matches per MAJ show scale for the selected activity.",wt,I,J='<a href="#occupation-work-activity-structure">Occupation Work Activity Structure</a>',K,X,D,bt='<a href="#table-1-top-work-activities-by-occupation-group-nlx-corpus">Table 1. Top Work Activities by occupation group (NLx corpus)</a>',Q,F,Y,O,gt='<a href="#comparative-rankings">Comparative Rankings</a>',dt,S,Z="Rankings use the selected Work Activity. Denominators from the NLx corpus are monthly active jobs through September 2025.",tt,et,V,$t,q,nt='<a href="#occupations-by-selected-work-activity">Occupations By Selected Work Activity</a>',it,rt,U,Ct='<a href="#table-2-occupation-work-activity-rankings-nlx-corpus">Table 2. Occupation Work Activity rankings (NLx corpus)</a>',A,at,Lt,lt,Gt='<a href="#industries-by-selected-work-activity">Industries By Selected Work Activity</a>',Pt,Tt,_t,Jt='<a href="#table-3-industry-work-activity-rankings-nlx-corpus">Table 3. Industry Work Activity rankings (NLx corpus)</a>',jt,kt,Et,ct,Kt='<a href="#industry-work-activity-structure">Industry Work Activity Structure</a>',It,Mt,ut,Xt='<a href="#table-4-top-work-activities-by-industry-nlx-corpus">Table 4. Top Work Activities by industry (NLx corpus)</a>',qt,yt,Ft,mt,Yt='<a href="#evidence-path">Evidence Path</a>',St,vt,Zt='RCA is defined in <a href="/us-lmi/methodology#revealed-comparative-advantage-rca" class="markdown">Methods</a>. Broader limits of postings and taxonomies are summarized in <a href="/us-lmi/methodology/postings-and-taxonomies" class="markdown">What Postings And Taxonomies Can And Cannot Say</a>.',Wt,ft=typeof x<"u"&&x.title&&x.hide_title!==!0&&Ae();function _e(e,s){return typeof x<"u"&&x.title?Re:Ne}let ht=_e()(m),pt=typeof x=="object"&&Le(),N=m[0]&&re(m);F=new Dt({props:{data:m[0],groupBy:"soc2_group",rowsPerPage:"20",$$slots:{default:[Ee]},$$scope:{ctx:m}}});let R=m[1]&&ae(m);V=new Me({props:{data:m[1],name:"nlx_wa",value:"wa_id",label:"wa_name",defaultValue:"4.A.2.a.4",title:"Work Activity"}});let L=m[2]&&se(m);at=new Dt({props:{data:m[2],rowsPerPage:"25",$$slots:{default:[Ie]},$$scope:{ctx:m}}});let P=m[3]&&oe(m);kt=new Dt({props:{data:m[3],rowsPerPage:"25",$$slots:{default:[qe]},$$scope:{ctx:m}}});let j=m[4]&&le(m);return yt=new Dt({props:{data:m[4],groupBy:"naics_group",rowsPerPage:"20",$$slots:{default:[Fe]},$$scope:{ctx:m}}}),{c(){ft&&ft.c(),i=d(),ht.c(),r=H("meta"),n=H("meta"),pt&&pt.c(),o=Ut(),l=d(),a=H("div"),a.innerHTML=u,v=d(),p=H("p"),p.textContent=M,t=d(),f=H("div"),f.innerHTML=z,G=d(),B=H("div"),B.innerHTML=xt,wt=d(),I=H("h2"),I.innerHTML=J,K=d(),N&&N.c(),X=d(),D=H("h3"),D.innerHTML=bt,Q=d(),T(F.$$.fragment),Y=d(),O=H("h2"),O.innerHTML=gt,dt=d(),S=H("p"),S.textContent=Z,tt=d(),R&&R.c(),et=d(),T(V.$$.fragment),$t=d(),q=H("h3"),q.innerHTML=nt,it=d(),L&&L.c(),rt=d(),U=H("h3"),U.innerHTML=Ct,A=d(),T(at.$$.fragment),Lt=d(),lt=H("h3"),lt.innerHTML=Gt,Pt=d(),P&&P.c(),Tt=d(),_t=H("h3"),_t.innerHTML=Jt,jt=d(),T(kt.$$.fragment),Et=d(),ct=H("h2"),ct.innerHTML=Kt,It=d(),j&&j.c(),Mt=d(),ut=H("h3"),ut.innerHTML=Xt,qt=d(),T(yt.$$.fragment),Ft=d(),mt=H("h2"),mt.innerHTML=Yt,St=d(),vt=H("p"),vt.innerHTML=Zt,this.h()},l(e){ft&&ft.l(e),i=w(e);const s=ue("svelte-2igo1p",document.head);ht.l(s),r=h(s,"META",{name:!0,content:!0}),n=h(s,"META",{name:!0,content:!0}),pt&&pt.l(s),o=Ut(),s.forEach(_),l=w(e),a=h(e,"DIV",{class:!0,"data-svelte-h":!0}),W(a)!=="svelte-q7eegh"&&(a.innerHTML=u),v=w(e),p=h(e,"P",{class:!0,"data-svelte-h":!0}),W(p)!=="svelte-hcm74l"&&(p.textContent=M),t=w(e),f=h(e,"DIV",{class:!0,"data-svelte-h":!0}),W(f)!=="svelte-eg6caz"&&(f.innerHTML=z),G=w(e),B=h(e,"DIV",{class:!0,"data-svelte-h":!0}),W(B)!=="svelte-1nqbsl8"&&(B.innerHTML=xt),wt=w(e),I=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),W(I)!=="svelte-18lfjhc"&&(I.innerHTML=J),K=w(e),N&&N.l(e),X=w(e),D=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),W(D)!=="svelte-kkijme"&&(D.innerHTML=bt),Q=w(e),C(F.$$.fragment,e),Y=w(e),O=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),W(O)!=="svelte-1xekb6c"&&(O.innerHTML=gt),dt=w(e),S=h(e,"P",{class:!0,"data-svelte-h":!0}),W(S)!=="svelte-10byuyi"&&(S.textContent=Z),tt=w(e),R&&R.l(e),et=w(e),C(V.$$.fragment,e),$t=w(e),q=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),W(q)!=="svelte-8hnq5c"&&(q.innerHTML=nt),it=w(e),L&&L.l(e),rt=w(e),U=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),W(U)!=="svelte-z67d0v"&&(U.innerHTML=Ct),A=w(e),C(at.$$.fragment,e),Lt=w(e),lt=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),W(lt)!=="svelte-1b056h0"&&(lt.innerHTML=Gt),Pt=w(e),P&&P.l(e),Tt=w(e),_t=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),W(_t)!=="svelte-1shzstp"&&(_t.innerHTML=Jt),jt=w(e),C(kt.$$.fragment,e),Et=w(e),ct=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),W(ct)!=="svelte-19vw62v"&&(ct.innerHTML=Kt),It=w(e),j&&j.l(e),Mt=w(e),ut=h(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),W(ut)!=="svelte-frkhj5"&&(ut.innerHTML=Xt),qt=w(e),C(yt.$$.fragment,e),Ft=w(e),mt=h(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),W(mt)!=="svelte-1uqwyny"&&(mt.innerHTML=Yt),St=w(e),vt=h(e,"P",{class:!0,"data-svelte-h":!0}),W(vt)!=="svelte-j2wvjx"&&(vt.innerHTML=Zt),this.h()},h(){$(r,"name","twitter:card"),$(r,"content","summary_large_image"),$(n,"name","twitter:site"),$(n,"content","@evidence_dev"),$(a,"class","border-l-4 border-gray-500 bg-gray-50 px-4 py-3 my-4 text-sm text-gray-700"),$(p,"class","markdown"),$(f,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),$(B,"class","text-sm my-3"),$(I,"class","markdown"),$(I,"id","occupation-work-activity-structure"),$(D,"class","markdown"),$(D,"id","table-1-top-work-activities-by-occupation-group-nlx-corpus"),$(O,"class","markdown"),$(O,"id","comparative-rankings"),$(S,"class","markdown"),$(q,"class","markdown"),$(q,"id","occupations-by-selected-work-activity"),$(U,"class","markdown"),$(U,"id","table-2-occupation-work-activity-rankings-nlx-corpus"),$(lt,"class","markdown"),$(lt,"id","industries-by-selected-work-activity"),$(_t,"class","markdown"),$(_t,"id","table-3-industry-work-activity-rankings-nlx-corpus"),$(ct,"class","markdown"),$(ct,"id","industry-work-activity-structure"),$(ut,"class","markdown"),$(ut,"id","table-4-top-work-activities-by-industry-nlx-corpus"),$(mt,"class","markdown"),$(mt,"id","evidence-path"),$(vt,"class","markdown")},m(e,s){ft&&ft.m(e,s),c(e,i,s),ht.m(document.head,null),Ot(document.head,r),Ot(document.head,n),pt&&pt.m(document.head,null),Ot(document.head,o),c(e,l,s),c(e,a,s),c(e,v,s),c(e,p,s),c(e,t,s),c(e,f,s),c(e,G,s),c(e,B,s),c(e,wt,s),c(e,I,s),c(e,K,s),N&&N.m(e,s),c(e,X,s),c(e,D,s),c(e,Q,s),g(F,e,s),c(e,Y,s),c(e,O,s),c(e,dt,s),c(e,S,s),c(e,tt,s),R&&R.m(e,s),c(e,et,s),g(V,e,s),c(e,$t,s),c(e,q,s),c(e,it,s),L&&L.m(e,s),c(e,rt,s),c(e,U,s),c(e,A,s),g(at,e,s),c(e,Lt,s),c(e,lt,s),c(e,Pt,s),P&&P.m(e,s),c(e,Tt,s),c(e,_t,s),c(e,jt,s),g(kt,e,s),c(e,Et,s),c(e,ct,s),c(e,It,s),j&&j.m(e,s),c(e,Mt,s),c(e,ut,s),c(e,qt,s),g(yt,e,s),c(e,Ft,s),c(e,mt,s),c(e,St,s),c(e,vt,s),Wt=!0},p(e,s){typeof x<"u"&&x.title&&x.hide_title!==!0&&ft.p(e,s),ht.p(e,s),typeof x=="object"&&pt.p(e,s),e[0]?N?(N.p(e,s),s[0]&1&&k(N,1)):(N=re(e),N.c(),k(N,1),N.m(X.parentNode,X)):N&&(At(),y(N,1,1,()=>{N=null}),Ht());const Bt={};s[0]&1&&(Bt.data=e[0]),s[1]&2048&&(Bt.$$scope={dirty:s,ctx:e}),F.$set(Bt),e[1]?R?(R.p(e,s),s[0]&2&&k(R,1)):(R=ae(e),R.c(),k(R,1),R.m(et.parentNode,et)):R&&(At(),y(R,1,1,()=>{R=null}),Ht());const te={};s[0]&2&&(te.data=e[1]),V.$set(te),e[2]?L?(L.p(e,s),s[0]&4&&k(L,1)):(L=se(e),L.c(),k(L,1),L.m(rt.parentNode,rt)):L&&(At(),y(L,1,1,()=>{L=null}),Ht());const Qt={};s[0]&4&&(Qt.data=e[2]),s[1]&2048&&(Qt.$$scope={dirty:s,ctx:e}),at.$set(Qt),e[3]?P?(P.p(e,s),s[0]&8&&k(P,1)):(P=oe(e),P.c(),k(P,1),P.m(Tt.parentNode,Tt)):P&&(At(),y(P,1,1,()=>{P=null}),Ht());const Vt={};s[0]&8&&(Vt.data=e[3]),s[1]&2048&&(Vt.$$scope={dirty:s,ctx:e}),kt.$set(Vt),e[4]?j?(j.p(e,s),s[0]&16&&k(j,1)):(j=le(e),j.c(),k(j,1),j.m(Mt.parentNode,Mt)):j&&(At(),y(j,1,1,()=>{j=null}),Ht());const zt={};s[0]&16&&(zt.data=e[4]),s[1]&2048&&(zt.$$scope={dirty:s,ctx:e}),yt.$set(zt)},i(e){Wt||(k(N),k(F.$$.fragment,e),k(R),k(V.$$.fragment,e),k(L),k(at.$$.fragment,e),k(P),k(kt.$$.fragment,e),k(j),k(yt.$$.fragment,e),Wt=!0)},o(e){y(N),y(F.$$.fragment,e),y(R),y(V.$$.fragment,e),y(L),y(at.$$.fragment,e),y(P),y(kt.$$.fragment,e),y(j),y(yt.$$.fragment,e),Wt=!1},d(e){e&&(_(i),_(l),_(a),_(v),_(p),_(t),_(f),_(G),_(B),_(wt),_(I),_(K),_(X),_(D),_(Q),_(Y),_(O),_(dt),_(S),_(tt),_(et),_($t),_(q),_(it),_(rt),_(U),_(A),_(Lt),_(lt),_(Pt),_(Tt),_(_t),_(jt),_(Et),_(ct),_(It),_(Mt),_(ut),_(qt),_(Ft),_(mt),_(St),_(vt)),ft&&ft.d(e),ht.d(e),_(r),_(n),pt&&pt.d(e),_(o),N&&N.d(e),b(F,e),R&&R.d(e),b(V,e),L&&L.d(e),b(at,e),P&&P.d(e),b(kt,e),j&&j.d(e),b(yt,e)}}}const x={title:"Work Activity Profiler"};function We(m,i,r){let n,o;ee(m,he,A=>r(28,n=A)),ee(m,ie,A=>r(33,o=A));let{data:l}=i,{data:a={},customFormattingSettings:u,__db:v,inputs:p}=l;me(ie,o="d00c3de06dc6899239d1434de974c0a3",o);let M=be(xe(p));fe(M.subscribe(A=>r(7,p=A))),pe(Te,{getCustomFormats:()=>u.customFormats||[]});const t=(A,at)=>He(v.query,A,{query_name:at});ge(t),n.params,we(()=>!0);let f={initialData:void 0,initialError:void 0},z=st`select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  occ_rank,
  wa_id,
  wa_name,
  rca,
  mentions
from nlx.CMP_NlxOccupationFingerprint
where occ_rank <= 5
order by occ2, occ_rank`,G=`select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  occ_rank,
  wa_id,
  wa_name,
  rca,
  mentions
from nlx.CMP_NlxOccupationFingerprint
where occ_rank <= 5
order by occ2, occ_rank`;a.nlx_top_occ_work_activities_data&&(a.nlx_top_occ_work_activities_data instanceof Error?f.initialError=a.nlx_top_occ_work_activities_data:f.initialData=a.nlx_top_occ_work_activities_data,a.nlx_top_occ_work_activities_columns&&(f.knownColumns=a.nlx_top_occ_work_activities_columns));let B,xt=!1;const wt=Nt.createReactive({callback:A=>{r(0,B=A)},execFn:t},{id:"nlx_top_occ_work_activities",...f});wt(G,{noResolve:z,...f}),globalThis[Symbol.for("nlx_top_occ_work_activities")]={get value(){return B}};let I={initialData:void 0,initialError:void 0},J=st`select distinct wa_id, wa_name
from nlx.CMP_NlxOccupationComparisons
order by wa_name`,K=`select distinct wa_id, wa_name
from nlx.CMP_NlxOccupationComparisons
order by wa_name`;a.nlx_wa_options_data&&(a.nlx_wa_options_data instanceof Error?I.initialError=a.nlx_wa_options_data:I.initialData=a.nlx_wa_options_data,a.nlx_wa_options_columns&&(I.knownColumns=a.nlx_wa_options_columns));let X,D=!1;const bt=Nt.createReactive({callback:A=>{r(1,X=A)},execFn:t},{id:"nlx_wa_options",...I});bt(K,{noResolve:J,...I}),globalThis[Symbol.for("nlx_wa_options")]={get value(){return X}};let Q={initialData:void 0,initialError:void 0},F=st`select
  wa_intensity_rank,
  occ8,
  soc_title,
  active_jobs,
  pct_active_jobs
from nlx.CMP_NlxOccupationComparisons
where wa_id = '${p.nlx_wa.value}'
  and wa_intensity_rank <= 25
order by wa_intensity_rank`,Y=`select
  wa_intensity_rank,
  occ8,
  soc_title,
  active_jobs,
  pct_active_jobs
from nlx.CMP_NlxOccupationComparisons
where wa_id = '${p.nlx_wa.value}'
  and wa_intensity_rank <= 25
order by wa_intensity_rank`;a.nlx_occ_wa_ranking_data&&(a.nlx_occ_wa_ranking_data instanceof Error?Q.initialError=a.nlx_occ_wa_ranking_data:Q.initialData=a.nlx_occ_wa_ranking_data,a.nlx_occ_wa_ranking_columns&&(Q.knownColumns=a.nlx_occ_wa_ranking_columns));let O,gt=!1;const dt=Nt.createReactive({callback:A=>{r(2,O=A)},execFn:t},{id:"nlx_occ_wa_ranking",...Q});dt(Y,{noResolve:F,...Q}),globalThis[Symbol.for("nlx_occ_wa_ranking")]={get value(){return O}};let S={initialData:void 0,initialError:void 0},Z=st`select
  wa_intensity_rank,
  ind2,
  naics_name,
  active_jobs,
  mentions_per_active_job
from nlx.CMP_NlxIndustryComparisons
where wa_id = '${p.nlx_wa.value}'
  and wa_intensity_rank <= 25
order by wa_intensity_rank`,tt=`select
  wa_intensity_rank,
  ind2,
  naics_name,
  active_jobs,
  mentions_per_active_job
from nlx.CMP_NlxIndustryComparisons
where wa_id = '${p.nlx_wa.value}'
  and wa_intensity_rank <= 25
order by wa_intensity_rank`;a.nlx_industry_wa_ranking_data&&(a.nlx_industry_wa_ranking_data instanceof Error?S.initialError=a.nlx_industry_wa_ranking_data:S.initialData=a.nlx_industry_wa_ranking_data,a.nlx_industry_wa_ranking_columns&&(S.knownColumns=a.nlx_industry_wa_ranking_columns));let et,V=!1;const $t=Nt.createReactive({callback:A=>{r(3,et=A)},execFn:t},{id:"nlx_industry_wa_ranking",...S});$t(tt,{noResolve:Z,...S}),globalThis[Symbol.for("nlx_industry_wa_ranking")]={get value(){return et}};let q={initialData:void 0,initialError:void 0},nt=st`select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  ind_rank,
  wa_id,
  wa_name,
  rca,
  mentions
from nlx.CMP_NlxIndustryFingerprint
where ind_rank <= 5
order by ind2, ind_rank`,it=`select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  ind_rank,
  wa_id,
  wa_name,
  rca,
  mentions
from nlx.CMP_NlxIndustryFingerprint
where ind_rank <= 5
order by ind2, ind_rank`;a.nlx_top_industry_work_activities_data&&(a.nlx_top_industry_work_activities_data instanceof Error?q.initialError=a.nlx_top_industry_work_activities_data:q.initialData=a.nlx_top_industry_work_activities_data,a.nlx_top_industry_work_activities_columns&&(q.knownColumns=a.nlx_top_industry_work_activities_columns));let rt,U=!1;const Ct=Nt.createReactive({callback:A=>{r(4,rt=A)},execFn:t},{id:"nlx_top_industry_work_activities",...q});return Ct(it,{noResolve:nt,...q}),globalThis[Symbol.for("nlx_top_industry_work_activities")]={get value(){return rt}},m.$$set=A=>{"data"in A&&r(5,l=A.data)},m.$$.update=()=>{m.$$.dirty[0]&32&&r(6,{data:a={},customFormattingSettings:u,__db:v}=l,a),m.$$.dirty[0]&64&&Ce.set(Object.keys(a).length>0),m.$$.dirty[0]&268435456&&n.params,m.$$.dirty[0]&3840&&(z||!xt?z||(wt(G,{noResolve:z,...f}),r(11,xt=!0)):wt(G,{noResolve:z})),m.$$.dirty[0]&61440&&(J||!D?J||(bt(K,{noResolve:J,...I}),r(15,D=!0)):bt(K,{noResolve:J})),m.$$.dirty[0]&128&&r(17,F=st`select
  wa_intensity_rank,
  occ8,
  soc_title,
  active_jobs,
  pct_active_jobs
from nlx.CMP_NlxOccupationComparisons
where wa_id = '${p.nlx_wa.value}'
  and wa_intensity_rank <= 25
order by wa_intensity_rank`),m.$$.dirty[0]&128&&r(18,Y=`select
  wa_intensity_rank,
  occ8,
  soc_title,
  active_jobs,
  pct_active_jobs
from nlx.CMP_NlxOccupationComparisons
where wa_id = '${p.nlx_wa.value}'
  and wa_intensity_rank <= 25
order by wa_intensity_rank`),m.$$.dirty[0]&983040&&(F||!gt?F||(dt(Y,{noResolve:F,...Q}),r(19,gt=!0)):dt(Y,{noResolve:F})),m.$$.dirty[0]&128&&r(21,Z=st`select
  wa_intensity_rank,
  ind2,
  naics_name,
  active_jobs,
  mentions_per_active_job
from nlx.CMP_NlxIndustryComparisons
where wa_id = '${p.nlx_wa.value}'
  and wa_intensity_rank <= 25
order by wa_intensity_rank`),m.$$.dirty[0]&128&&r(22,tt=`select
  wa_intensity_rank,
  ind2,
  naics_name,
  active_jobs,
  mentions_per_active_job
from nlx.CMP_NlxIndustryComparisons
where wa_id = '${p.nlx_wa.value}'
  and wa_intensity_rank <= 25
order by wa_intensity_rank`),m.$$.dirty[0]&15728640&&(Z||!V?Z||($t(tt,{noResolve:Z,...S}),r(23,V=!0)):$t(tt,{noResolve:Z})),m.$$.dirty[0]&251658240&&(nt||!U?nt||(Ct(it,{noResolve:nt,...q}),r(27,U=!0)):Ct(it,{noResolve:nt}))},r(9,z=st`select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  occ_rank,
  wa_id,
  wa_name,
  rca,
  mentions
from nlx.CMP_NlxOccupationFingerprint
where occ_rank <= 5
order by occ2, occ_rank`),r(10,G=`select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  occ_rank,
  wa_id,
  wa_name,
  rca,
  mentions
from nlx.CMP_NlxOccupationFingerprint
where occ_rank <= 5
order by occ2, occ_rank`),r(13,J=st`select distinct wa_id, wa_name
from nlx.CMP_NlxOccupationComparisons
order by wa_name`),r(14,K=`select distinct wa_id, wa_name
from nlx.CMP_NlxOccupationComparisons
order by wa_name`),r(25,nt=st`select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  ind_rank,
  wa_id,
  wa_name,
  rca,
  mentions
from nlx.CMP_NlxIndustryFingerprint
where ind_rank <= 5
order by ind2, ind_rank`),r(26,it=`select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  ind_rank,
  wa_id,
  wa_name,
  rca,
  mentions
from nlx.CMP_NlxIndustryFingerprint
where ind_rank <= 5
order by ind2, ind_rank`),[B,X,O,et,rt,l,a,p,f,z,G,xt,I,J,K,D,Q,F,Y,gt,S,Z,tt,V,q,nt,it,U,n]}class Ye extends ye{constructor(i){super(),ve(this,i,We,Se,ce,{data:5},null,[-1,-1])}}export{Ye as component};
