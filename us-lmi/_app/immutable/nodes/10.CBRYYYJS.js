import{s as we,d as _,i as f,a as oe,b as d,c as b,h as Ae,e as M,f as se,g as B,k as y,l as S,m as fe,n as Te,o as he,p as Ce,q as Me,r as K,j as Se,t as He,u as qe}from"../chunks/scheduler.TmfZfN_X.js";import{S as Ee,i as Pe,d as E,t as h,a as w,c as me,m as P,b as R,e as I,g as ue}from"../chunks/index.CKLTamEB.js";import{D as de,C as j}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.CoVGfpJt.js";import{w as Re}from"../chunks/entry.P1aHOFFb.js";import{e as Ie,s as Le,Q as pe,p as xe,a as $e,r as be,C as Ge}from"../chunks/inferColumnTypes.D_Qc-VWF.js";import{h as re}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as je}from"../chunks/stores.DMXyXr0C.js";import{Q as ve}from"../chunks/QueryViewer.BWmGPj4w.js";import{p as Fe}from"../chunks/profile.BW8tN6E9.js";function Ue(m){let r,n=p.title+"",t;return{c(){r=S("h1"),t=qe(n),this.h()},l(s){r=M(s,"H1",{class:!0});var a=Se(r);t=He(a,n),a.forEach(_),this.h()},h(){d(r,"class","title")},m(s,a){f(s,r,a),oe(r,t)},p:K,d(s){s&&_(r)}}}function De(m){return{c(){this.h()},l(r){this.h()},h(){document.title="Evidence"},m:K,p:K,d:K}}function Je(m){let r,n,t,s,a;return document.title=r=p.title,{c(){n=y(),t=S("meta"),s=y(),a=S("meta"),this.h()},l(o){n=b(o),t=M(o,"META",{property:!0,content:!0}),s=b(o),a=M(o,"META",{name:!0,content:!0}),this.h()},h(){var o,l;d(t,"property","og:title"),d(t,"content",((o=p.og)==null?void 0:o.title)??p.title),d(a,"name","twitter:title"),d(a,"content",((l=p.og)==null?void 0:l.title)??p.title)},m(o,l){f(o,n,l),f(o,t,l),f(o,s,l),f(o,a,l)},p(o,l){l&0&&r!==(r=p.title)&&(document.title=r)},d(o){o&&(_(n),_(t),_(s),_(a))}}}function Oe(m){var a,o;let r,n,t=(p.description||((a=p.og)==null?void 0:a.description))&&Qe(),s=((o=p.og)==null?void 0:o.image)&&Ne();return{c(){t&&t.c(),r=y(),s&&s.c(),n=se()},l(l){t&&t.l(l),r=b(l),s&&s.l(l),n=se()},m(l,g){t&&t.m(l,g),f(l,r,g),s&&s.m(l,g),f(l,n,g)},p(l,g){var $,H;(p.description||($=p.og)!=null&&$.description)&&t.p(l,g),(H=p.og)!=null&&H.image&&s.p(l,g)},d(l){l&&(_(r),_(n)),t&&t.d(l),s&&s.d(l)}}}function Qe(m){let r,n,t,s,a;return{c(){r=S("meta"),n=y(),t=S("meta"),s=y(),a=S("meta"),this.h()},l(o){r=M(o,"META",{name:!0,content:!0}),n=b(o),t=M(o,"META",{property:!0,content:!0}),s=b(o),a=M(o,"META",{name:!0,content:!0}),this.h()},h(){var o,l,g;d(r,"name","description"),d(r,"content",p.description??((o=p.og)==null?void 0:o.description)),d(t,"property","og:description"),d(t,"content",((l=p.og)==null?void 0:l.description)??p.description),d(a,"name","twitter:description"),d(a,"content",((g=p.og)==null?void 0:g.description)??p.description)},m(o,l){f(o,r,l),f(o,n,l),f(o,t,l),f(o,s,l),f(o,a,l)},p:K,d(o){o&&(_(r),_(n),_(t),_(s),_(a))}}}function Ne(m){let r,n,t;return{c(){r=S("meta"),n=y(),t=S("meta"),this.h()},l(s){r=M(s,"META",{property:!0,content:!0}),n=b(s),t=M(s,"META",{name:!0,content:!0}),this.h()},h(){var s,a;d(r,"property","og:image"),d(r,"content",$e((s=p.og)==null?void 0:s.image)),d(t,"name","twitter:image"),d(t,"content",$e((a=p.og)==null?void 0:a.image))},m(s,a){f(s,r,a),f(s,n,a),f(s,t,a)},p:K,d(s){s&&(_(r),_(n),_(t))}}}function ye(m){let r,n;return r=new ve({props:{queryID:"strict_ai_code_profile",queryResult:m[0]}}),{c(){I(r.$$.fragment)},l(t){R(r.$$.fragment,t)},m(t,s){P(r,t,s),n=!0},p(t,s){const a={};s&1&&(a.queryResult=t[0]),r.$set(a)},i(t){n||(w(r.$$.fragment,t),n=!0)},o(t){h(r.$$.fragment,t),n=!1},d(t){E(r,t)}}}function Ve(m){let r,n,t,s,a,o,l,g,$,H,v,k;return r=new j({props:{id:"ai_score_rank",title:"Rank",fmt:"0"}}),t=new j({props:{id:"ai_code",title:"Code"}}),a=new j({props:{id:"ai_code_label",title:"Label",wrap:"true"}}),l=new j({props:{id:"ai_score_v2",title:"Score",fmt:"0.000"}}),$=new j({props:{id:"postings",title:"Postings",fmt:"#,##0"}}),v=new j({props:{id:"mentions",title:"Mentions",fmt:"#,##0"}}),{c(){I(r.$$.fragment),n=y(),I(t.$$.fragment),s=y(),I(a.$$.fragment),o=y(),I(l.$$.fragment),g=y(),I($.$$.fragment),H=y(),I(v.$$.fragment)},l(e){R(r.$$.fragment,e),n=b(e),R(t.$$.fragment,e),s=b(e),R(a.$$.fragment,e),o=b(e),R(l.$$.fragment,e),g=b(e),R($.$$.fragment,e),H=b(e),R(v.$$.fragment,e)},m(e,u){P(r,e,u),f(e,n,u),P(t,e,u),f(e,s,u),P(a,e,u),f(e,o,u),P(l,e,u),f(e,g,u),P($,e,u),f(e,H,u),P(v,e,u),k=!0},p:K,i(e){k||(w(r.$$.fragment,e),w(t.$$.fragment,e),w(a.$$.fragment,e),w(l.$$.fragment,e),w($.$$.fragment,e),w(v.$$.fragment,e),k=!0)},o(e){h(r.$$.fragment,e),h(t.$$.fragment,e),h(a.$$.fragment,e),h(l.$$.fragment,e),h($.$$.fragment,e),h(v.$$.fragment,e),k=!1},d(e){e&&(_(n),_(s),_(o),_(g),_(H)),E(r,e),E(t,e),E(a,e),E(l,e),E($,e),E(v,e)}}}function ge(m){let r,n;return r=new ve({props:{queryID:"lenient_ai_code_profile",queryResult:m[1]}}),{c(){I(r.$$.fragment)},l(t){R(r.$$.fragment,t)},m(t,s){P(r,t,s),n=!0},p(t,s){const a={};s&2&&(a.queryResult=t[1]),r.$set(a)},i(t){n||(w(r.$$.fragment,t),n=!0)},o(t){h(r.$$.fragment,t),n=!1},d(t){E(r,t)}}}function ze(m){let r,n,t,s,a,o,l,g,$,H,v,k;return r=new j({props:{id:"ai_score_rank",title:"Rank",fmt:"0"}}),t=new j({props:{id:"ai_code",title:"Code"}}),a=new j({props:{id:"ai_code_label",title:"Label",wrap:"true"}}),l=new j({props:{id:"ai_score_v2",title:"Score",fmt:"0.000"}}),$=new j({props:{id:"postings",title:"Postings",fmt:"#,##0"}}),v=new j({props:{id:"mentions",title:"Mentions",fmt:"#,##0"}}),{c(){I(r.$$.fragment),n=y(),I(t.$$.fragment),s=y(),I(a.$$.fragment),o=y(),I(l.$$.fragment),g=y(),I($.$$.fragment),H=y(),I(v.$$.fragment)},l(e){R(r.$$.fragment,e),n=b(e),R(t.$$.fragment,e),s=b(e),R(a.$$.fragment,e),o=b(e),R(l.$$.fragment,e),g=b(e),R($.$$.fragment,e),H=b(e),R(v.$$.fragment,e)},m(e,u){P(r,e,u),f(e,n,u),P(t,e,u),f(e,s,u),P(a,e,u),f(e,o,u),P(l,e,u),f(e,g,u),P($,e,u),f(e,H,u),P(v,e,u),k=!0},p:K,i(e){k||(w(r.$$.fragment,e),w(t.$$.fragment,e),w(a.$$.fragment,e),w(l.$$.fragment,e),w($.$$.fragment,e),w(v.$$.fragment,e),k=!0)},o(e){h(r.$$.fragment,e),h(t.$$.fragment,e),h(a.$$.fragment,e),h(l.$$.fragment,e),h($.$$.fragment,e),h(v.$$.fragment,e),k=!1},d(e){e&&(_(n),_(s),_(o),_(g),_(H)),E(r,e),E(t,e),E(a,e),E(l,e),E($,e),E(v,e)}}}function Be(m){let r,n,t,s,a,o,l="Look up the AIMatch codes used to summarize AI-related language in postings.",g,$,H="<strong>How to read this page.</strong> Strict codes are clearer AI statements. Lenient-only codes are AI-adjacent statements that do not meet the strict threshold. Scores are statement-level AI relatedness scores; postings and mentions show federal USAJOBS scale.",v,k,e,u='<a href="#strict-ai-codes">Strict AI Codes</a>',N,L,W='<a href="#table-ma-1-strict-ai-code-profile">Table MA-1. Strict AI Code Profile</a>',G,q,U,D,x,X='<a href="#lenient-only-ai-codes">Lenient-Only AI Codes</a>',C,F,le='<a href="#table-ma-2-lenient-ai-code-profile">Table MA-2. Lenient AI Code Profile</a>',Z,V,ee,J,_e='<a href="#evidence-path">Evidence Path</a>',te,z,ce='The main taxonomy caveat and denominator-sensitivity figures are in <a href="/us-lmi/methodology/postings-and-taxonomies" class="markdown">What Postings And Taxonomies Can And Cannot Say</a>. AI-score validation is summarized in <a href="/us-lmi/building-new-maps" class="markdown">Finding Emerging Skills</a>.',ie,O=typeof p<"u"&&p.title&&p.hide_title!==!0&&Ue();function ke(i,c){return typeof p<"u"&&p.title?Je:De}let Y=ke()(m),Q=typeof p=="object"&&Oe(),A=m[0]&&ye(m);q=new de({props:{data:m[0],rowsPerPage:"25",$$slots:{default:[Ve]},$$scope:{ctx:m}}});let T=m[1]&&ge(m);return V=new de({props:{data:m[1],rowsPerPage:"25",$$slots:{default:[ze]},$$scope:{ctx:m}}}),{c(){O&&O.c(),r=y(),Y.c(),n=S("meta"),t=S("meta"),Q&&Q.c(),s=se(),a=y(),o=S("p"),o.textContent=l,g=y(),$=S("div"),$.innerHTML=H,v=y(),A&&A.c(),k=y(),e=S("h2"),e.innerHTML=u,N=y(),L=S("h3"),L.innerHTML=W,G=y(),I(q.$$.fragment),U=y(),T&&T.c(),D=y(),x=S("h2"),x.innerHTML=X,C=y(),F=S("h3"),F.innerHTML=le,Z=y(),I(V.$$.fragment),ee=y(),J=S("h2"),J.innerHTML=_e,te=y(),z=S("p"),z.innerHTML=ce,this.h()},l(i){O&&O.l(i),r=b(i);const c=Ae("svelte-2igo1p",document.head);Y.l(c),n=M(c,"META",{name:!0,content:!0}),t=M(c,"META",{name:!0,content:!0}),Q&&Q.l(c),s=se(),c.forEach(_),a=b(i),o=M(i,"P",{class:!0,"data-svelte-h":!0}),B(o)!=="svelte-1td6407"&&(o.textContent=l),g=b(i),$=M(i,"DIV",{class:!0,"data-svelte-h":!0}),B($)!=="svelte-hrex1"&&($.innerHTML=H),v=b(i),A&&A.l(i),k=b(i),e=M(i,"H2",{class:!0,id:!0,"data-svelte-h":!0}),B(e)!=="svelte-93h3nh"&&(e.innerHTML=u),N=b(i),L=M(i,"H3",{class:!0,id:!0,"data-svelte-h":!0}),B(L)!=="svelte-11j6dxf"&&(L.innerHTML=W),G=b(i),R(q.$$.fragment,i),U=b(i),T&&T.l(i),D=b(i),x=M(i,"H2",{class:!0,id:!0,"data-svelte-h":!0}),B(x)!=="svelte-p0703g"&&(x.innerHTML=X),C=b(i),F=M(i,"H3",{class:!0,id:!0,"data-svelte-h":!0}),B(F)!=="svelte-1k7weu4"&&(F.innerHTML=le),Z=b(i),R(V.$$.fragment,i),ee=b(i),J=M(i,"H2",{class:!0,id:!0,"data-svelte-h":!0}),B(J)!=="svelte-1uqwyny"&&(J.innerHTML=_e),te=b(i),z=M(i,"P",{class:!0,"data-svelte-h":!0}),B(z)!=="svelte-1d247e3"&&(z.innerHTML=ce),this.h()},h(){d(n,"name","twitter:card"),d(n,"content","summary_large_image"),d(t,"name","twitter:site"),d(t,"content","@evidence_dev"),d(o,"class","markdown"),d($,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),d(e,"class","markdown"),d(e,"id","strict-ai-codes"),d(L,"class","markdown"),d(L,"id","table-ma-1-strict-ai-code-profile"),d(x,"class","markdown"),d(x,"id","lenient-only-ai-codes"),d(F,"class","markdown"),d(F,"id","table-ma-2-lenient-ai-code-profile"),d(J,"class","markdown"),d(J,"id","evidence-path"),d(z,"class","markdown")},m(i,c){O&&O.m(i,c),f(i,r,c),Y.m(document.head,null),oe(document.head,n),oe(document.head,t),Q&&Q.m(document.head,null),oe(document.head,s),f(i,a,c),f(i,o,c),f(i,g,c),f(i,$,c),f(i,v,c),A&&A.m(i,c),f(i,k,c),f(i,e,c),f(i,N,c),f(i,L,c),f(i,G,c),P(q,i,c),f(i,U,c),T&&T.m(i,c),f(i,D,c),f(i,x,c),f(i,C,c),f(i,F,c),f(i,Z,c),P(V,i,c),f(i,ee,c),f(i,J,c),f(i,te,c),f(i,z,c),ie=!0},p(i,[c]){typeof p<"u"&&p.title&&p.hide_title!==!0&&O.p(i,c),Y.p(i,c),typeof p=="object"&&Q.p(i,c),i[0]?A?(A.p(i,c),c&1&&w(A,1)):(A=ye(i),A.c(),w(A,1),A.m(k.parentNode,k)):A&&(ue(),h(A,1,1,()=>{A=null}),me());const ne={};c&1&&(ne.data=i[0]),c&16777216&&(ne.$$scope={dirty:c,ctx:i}),q.$set(ne),i[1]?T?(T.p(i,c),c&2&&w(T,1)):(T=ge(i),T.c(),w(T,1),T.m(D.parentNode,D)):T&&(ue(),h(T,1,1,()=>{T=null}),me());const ae={};c&2&&(ae.data=i[1]),c&16777216&&(ae.$$scope={dirty:c,ctx:i}),V.$set(ae)},i(i){ie||(w(A),w(q.$$.fragment,i),w(T),w(V.$$.fragment,i),ie=!0)},o(i){h(A),h(q.$$.fragment,i),h(T),h(V.$$.fragment,i),ie=!1},d(i){i&&(_(r),_(a),_(o),_(g),_($),_(v),_(k),_(e),_(N),_(L),_(G),_(U),_(D),_(x),_(C),_(F),_(Z),_(ee),_(J),_(te),_(z)),O&&O.d(i),Y.d(i),_(n),_(t),Q&&Q.d(i),_(s),A&&A.d(i),E(q,i),T&&T.d(i),E(V,i)}}}const p={title:"AI Code Profiles"};function Ke(m,r,n){let t,s;fe(m,je,C=>n(12,t=C)),fe(m,be,C=>n(18,s=C));let{data:a}=r,{data:o={},customFormattingSettings:l,__db:g,inputs:$}=a;Te(be,s="bec2581cd166883945fe81ec32a807f6",s);let H=Ie(Re($));he(H.subscribe(C=>$=C)),Ce(Ge,{getCustomFormats:()=>l.customFormats||[]});const v=(C,F)=>Fe(g.query,C,{query_name:F});Le(v),t.params,Me(()=>!0);let k={initialData:void 0,initialError:void 0},e=re`select
  row_number() over (order by ai_score_v2 desc, postings desc, mentions desc, ai_code) as ai_score_rank,
  ai_code,
  ai_code_label,
  ai_score_v2,
  postings,
  mentions
from usajobs.AGGR_USAJobsAiCodeProfile
where strict_score > 0
qualify ai_score_rank <= 25
order by ai_score_rank`,u=`select
  row_number() over (order by ai_score_v2 desc, postings desc, mentions desc, ai_code) as ai_score_rank,
  ai_code,
  ai_code_label,
  ai_score_v2,
  postings,
  mentions
from usajobs.AGGR_USAJobsAiCodeProfile
where strict_score > 0
qualify ai_score_rank <= 25
order by ai_score_rank`;o.strict_ai_code_profile_data&&(o.strict_ai_code_profile_data instanceof Error?k.initialError=o.strict_ai_code_profile_data:k.initialData=o.strict_ai_code_profile_data,o.strict_ai_code_profile_columns&&(k.knownColumns=o.strict_ai_code_profile_columns));let N,L=!1;const W=pe.createReactive({callback:C=>{n(0,N=C)},execFn:v},{id:"strict_ai_code_profile",...k});W(u,{noResolve:e,...k}),globalThis[Symbol.for("strict_ai_code_profile")]={get value(){return N}};let G={initialData:void 0,initialError:void 0},q=re`select
  row_number() over (order by ai_score_v2 desc, postings desc, mentions desc, ai_code) as ai_score_rank,
  ai_code,
  ai_code_label,
  ai_score_v2,
  postings,
  mentions
from usajobs.AGGR_USAJobsAiCodeProfile
where lenient_score > 0
  and strict_score = 0
qualify ai_score_rank <= 25
order by ai_score_rank`,U=`select
  row_number() over (order by ai_score_v2 desc, postings desc, mentions desc, ai_code) as ai_score_rank,
  ai_code,
  ai_code_label,
  ai_score_v2,
  postings,
  mentions
from usajobs.AGGR_USAJobsAiCodeProfile
where lenient_score > 0
  and strict_score = 0
qualify ai_score_rank <= 25
order by ai_score_rank`;o.lenient_ai_code_profile_data&&(o.lenient_ai_code_profile_data instanceof Error?G.initialError=o.lenient_ai_code_profile_data:G.initialData=o.lenient_ai_code_profile_data,o.lenient_ai_code_profile_columns&&(G.knownColumns=o.lenient_ai_code_profile_columns));let D,x=!1;const X=pe.createReactive({callback:C=>{n(1,D=C)},execFn:v},{id:"lenient_ai_code_profile",...G});return X(U,{noResolve:q,...G}),globalThis[Symbol.for("lenient_ai_code_profile")]={get value(){return D}},m.$$set=C=>{"data"in C&&n(2,a=C.data)},m.$$.update=()=>{m.$$.dirty&4&&n(3,{data:o={},customFormattingSettings:l,__db:g}=a,o),m.$$.dirty&8&&xe.set(Object.keys(o).length>0),m.$$.dirty&4096&&t.params,m.$$.dirty&240&&(e||!L?e||(W(u,{noResolve:e,...k}),n(7,L=!0)):W(u,{noResolve:e})),m.$$.dirty&3840&&(q||!x?q||(X(U,{noResolve:q,...G}),n(11,x=!0)):X(U,{noResolve:q}))},n(5,e=re`select
  row_number() over (order by ai_score_v2 desc, postings desc, mentions desc, ai_code) as ai_score_rank,
  ai_code,
  ai_code_label,
  ai_score_v2,
  postings,
  mentions
from usajobs.AGGR_USAJobsAiCodeProfile
where strict_score > 0
qualify ai_score_rank <= 25
order by ai_score_rank`),n(6,u=`select
  row_number() over (order by ai_score_v2 desc, postings desc, mentions desc, ai_code) as ai_score_rank,
  ai_code,
  ai_code_label,
  ai_score_v2,
  postings,
  mentions
from usajobs.AGGR_USAJobsAiCodeProfile
where strict_score > 0
qualify ai_score_rank <= 25
order by ai_score_rank`),n(9,q=re`select
  row_number() over (order by ai_score_v2 desc, postings desc, mentions desc, ai_code) as ai_score_rank,
  ai_code,
  ai_code_label,
  ai_score_v2,
  postings,
  mentions
from usajobs.AGGR_USAJobsAiCodeProfile
where lenient_score > 0
  and strict_score = 0
qualify ai_score_rank <= 25
order by ai_score_rank`),n(10,U=`select
  row_number() over (order by ai_score_v2 desc, postings desc, mentions desc, ai_code) as ai_score_rank,
  ai_code,
  ai_code_label,
  ai_score_v2,
  postings,
  mentions
from usajobs.AGGR_USAJobsAiCodeProfile
where lenient_score > 0
  and strict_score = 0
qualify ai_score_rank <= 25
order by ai_score_rank`),[N,D,a,o,k,e,u,L,G,q,U,x,t]}class nt extends Ee{constructor(r){super(),Pe(this,r,Ke,Be,we,{data:2})}}export{nt as component};
