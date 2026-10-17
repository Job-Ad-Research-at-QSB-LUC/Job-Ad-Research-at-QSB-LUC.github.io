import{s as Ae,d as c,i as m,a as ce,b as u,c as k,h as Ce,e as E,f as _e,g as F,k as d,l as M,m as ye,n as je,o as Oe,p as Se,q as Ne,r as X,j as Re,t as Ge,u as He}from"../chunks/scheduler.TmfZfN_X.js";import{S as Pe,i as Ie,d as O,t as h,a as v,c as xe,m as S,b as N,e as R,g as be}from"../chunks/index.CKLTamEB.js";import{D as $e,C as P}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.CoVGfpJt.js";import{w as Le}from"../chunks/entry.P1aHOFFb.js";import{e as qe,s as De,Q as ge,p as Fe,a as ve,r as we,C as Je}from"../chunks/inferColumnTypes.D_Qc-VWF.js";import{h as re}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as Qe}from"../chunks/stores.DMXyXr0C.js";import{Q as Me}from"../chunks/QueryViewer.BWmGPj4w.js";import{p as Ve}from"../chunks/profile.BW8tN6E9.js";function Ue(p){let s,a=y.title+"",l;return{c(){s=M("h1"),l=He(a),this.h()},l(n){s=E(n,"H1",{class:!0});var o=Re(s);l=Ge(o,a),o.forEach(c),this.h()},h(){u(s,"class","title")},m(n,o){m(n,s,o),ce(s,l)},p:X,d(n){n&&c(s)}}}function We(p){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:X,p:X,d:X}}function Be(p){let s,a,l,n,o;return document.title=s=y.title,{c(){a=d(),l=M("meta"),n=d(),o=M("meta"),this.h()},l(i){a=k(i),l=E(i,"META",{property:!0,content:!0}),n=k(i),o=E(i,"META",{name:!0,content:!0}),this.h()},h(){var i,r;u(l,"property","og:title"),u(l,"content",((i=y.og)==null?void 0:i.title)??y.title),u(o,"name","twitter:title"),u(o,"content",((r=y.og)==null?void 0:r.title)??y.title)},m(i,r){m(i,a,r),m(i,l,r),m(i,n,r),m(i,o,r)},p(i,r){r&0&&s!==(s=y.title)&&(document.title=s)},d(i){i&&(c(a),c(l),c(n),c(o))}}}function ze(p){var o,i;let s,a,l=(y.description||((o=y.og)==null?void 0:o.description))&&Ke(),n=((i=y.og)==null?void 0:i.image)&&Xe();return{c(){l&&l.c(),s=d(),n&&n.c(),a=_e()},l(r){l&&l.l(r),s=k(r),n&&n.l(r),a=_e()},m(r,b){l&&l.m(r,b),m(r,s,b),n&&n.m(r,b),m(r,a,b)},p(r,b){var x,C;(y.description||(x=y.og)!=null&&x.description)&&l.p(r,b),(C=y.og)!=null&&C.image&&n.p(r,b)},d(r){r&&(c(s),c(a)),l&&l.d(r),n&&n.d(r)}}}function Ke(p){let s,a,l,n,o;return{c(){s=M("meta"),a=d(),l=M("meta"),n=d(),o=M("meta"),this.h()},l(i){s=E(i,"META",{name:!0,content:!0}),a=k(i),l=E(i,"META",{property:!0,content:!0}),n=k(i),o=E(i,"META",{name:!0,content:!0}),this.h()},h(){var i,r,b;u(s,"name","description"),u(s,"content",y.description??((i=y.og)==null?void 0:i.description)),u(l,"property","og:description"),u(l,"content",((r=y.og)==null?void 0:r.description)??y.description),u(o,"name","twitter:description"),u(o,"content",((b=y.og)==null?void 0:b.description)??y.description)},m(i,r){m(i,s,r),m(i,a,r),m(i,l,r),m(i,n,r),m(i,o,r)},p:X,d(i){i&&(c(s),c(a),c(l),c(n),c(o))}}}function Xe(p){let s,a,l;return{c(){s=M("meta"),a=d(),l=M("meta"),this.h()},l(n){s=E(n,"META",{property:!0,content:!0}),a=k(n),l=E(n,"META",{name:!0,content:!0}),this.h()},h(){var n,o;u(s,"property","og:image"),u(s,"content",ve((n=y.og)==null?void 0:n.image)),u(l,"name","twitter:image"),u(l,"content",ve((o=y.og)==null?void 0:o.image))},m(n,o){m(n,s,o),m(n,a,o),m(n,l,o)},p:X,d(n){n&&(c(s),c(a),c(l))}}}function Te(p){let s,a;return s=new Me({props:{queryID:"nlx_occ_skill_comparison",queryResult:p[0]}}),{c(){R(s.$$.fragment)},l(l){N(s.$$.fragment,l)},m(l,n){S(s,l,n),a=!0},p(l,n){const o={};n&1&&(o.queryResult=l[0]),s.$set(o)},i(l){a||(v(s.$$.fragment,l),a=!0)},o(l){h(s.$$.fragment,l),a=!1},d(l){O(s,l)}}}function Ye(p){let s,a,l,n,o,i,r,b,x,C,g,$;return s=new P({props:{id:"taxonomy",title:"Taxonomy"}}),l=new P({props:{id:"skill_rank",title:"Rank",fmt:"0"}}),o=new P({props:{id:"skill_label",title:"Skill",wrap:"true"}}),r=new P({props:{id:"rca",title:"RCA",fmt:"0.00"}}),x=new P({props:{id:"mentions",title:"Mentions",fmt:"#,##0"}}),g=new P({props:{id:"coverage",title:"Coverage"}}),{c(){R(s.$$.fragment),a=d(),R(l.$$.fragment),n=d(),R(o.$$.fragment),i=d(),R(r.$$.fragment),b=d(),R(x.$$.fragment),C=d(),R(g.$$.fragment)},l(e){N(s.$$.fragment,e),a=k(e),N(l.$$.fragment,e),n=k(e),N(o.$$.fragment,e),i=k(e),N(r.$$.fragment,e),b=k(e),N(x.$$.fragment,e),C=k(e),N(g.$$.fragment,e)},m(e,f){S(s,e,f),m(e,a,f),S(l,e,f),m(e,n,f),S(o,e,f),m(e,i,f),S(r,e,f),m(e,b,f),S(x,e,f),m(e,C,f),S(g,e,f),$=!0},p:X,i(e){$||(v(s.$$.fragment,e),v(l.$$.fragment,e),v(o.$$.fragment,e),v(r.$$.fragment,e),v(x.$$.fragment,e),v(g.$$.fragment,e),$=!0)},o(e){h(s.$$.fragment,e),h(l.$$.fragment,e),h(o.$$.fragment,e),h(r.$$.fragment,e),h(x.$$.fragment,e),h(g.$$.fragment,e),$=!1},d(e){e&&(c(a),c(n),c(i),c(b),c(C)),O(s,e),O(l,e),O(o,e),O(r,e),O(x,e),O(g,e)}}}function Ee(p){let s,a;return s=new Me({props:{queryID:"nlx_industry_skill_comparison",queryResult:p[1]}}),{c(){R(s.$$.fragment)},l(l){N(s.$$.fragment,l)},m(l,n){S(s,l,n),a=!0},p(l,n){const o={};n&2&&(o.queryResult=l[1]),s.$set(o)},i(l){a||(v(s.$$.fragment,l),a=!0)},o(l){h(s.$$.fragment,l),a=!1},d(l){O(s,l)}}}function Ze(p){let s,a,l,n,o,i,r,b,x,C,g,$;return s=new P({props:{id:"taxonomy",title:"Taxonomy"}}),l=new P({props:{id:"skill_rank",title:"Rank",fmt:"0"}}),o=new P({props:{id:"skill_label",title:"Skill",wrap:"true"}}),r=new P({props:{id:"rca",title:"RCA",fmt:"0.00"}}),x=new P({props:{id:"mentions",title:"Mentions",fmt:"#,##0"}}),g=new P({props:{id:"coverage",title:"Coverage"}}),{c(){R(s.$$.fragment),a=d(),R(l.$$.fragment),n=d(),R(o.$$.fragment),i=d(),R(r.$$.fragment),b=d(),R(x.$$.fragment),C=d(),R(g.$$.fragment)},l(e){N(s.$$.fragment,e),a=k(e),N(l.$$.fragment,e),n=k(e),N(o.$$.fragment,e),i=k(e),N(r.$$.fragment,e),b=k(e),N(x.$$.fragment,e),C=k(e),N(g.$$.fragment,e)},m(e,f){S(s,e,f),m(e,a,f),S(l,e,f),m(e,n,f),S(o,e,f),m(e,i,f),S(r,e,f),m(e,b,f),S(x,e,f),m(e,C,f),S(g,e,f),$=!0},p:X,i(e){$||(v(s.$$.fragment,e),v(l.$$.fragment,e),v(o.$$.fragment,e),v(r.$$.fragment,e),v(x.$$.fragment,e),v(g.$$.fragment,e),$=!0)},o(e){h(s.$$.fragment,e),h(l.$$.fragment,e),h(o.$$.fragment,e),h(r.$$.fragment,e),h(x.$$.fragment,e),h(g.$$.fragment,e),$=!1},d(e){e&&(c(a),c(n),c(i),c(b),c(C)),O(s,e),O(l,e),O(o,e),O(r,e),O(x,e),O(g,e)}}}function et(p){let s,a,l,n,o,i,r="<strong>NLx data disclaimer.</strong> The National Labor Exchange (NLx) Data Trust bears no responsibility for the analyses or interpretations of the data presented here.",b,x,C="O*NET skills are inferred by crosswalking Work Activity aggregate rows from the NLx corpus through the O*NET Work Activity-to-skill bridge. ESCO skills use the NLx corpus skill aggregate rows directly. Tables are ranked by revealed comparative advantage (RCA), so the top rows highlight skills overrepresented within each SOC-2 or NAICS-2 group rather than simply repeating the highest-volume skills.",g,$,e="<strong>How to read this page.</strong> This is a lookup profile. O*NET skill rows are crosswalked from Work Activities; ESCO rows are direct skill aggregates. RCA shows concentration, while mentions and coverage show scale. The two taxonomies should be compared as complementary signals, not identical measures.",f,H,Y="<strong>Shared terms.</strong> RCA = group skill share / corpus skill share. Mentions are skill or inferred-skill matches. Coverage is shown as mentions per monthly active job (MAJ) for crosswalked O*NET rows and % active jobs for ESCO rows.",B,j,I='<a href="#occupation-skill-profiles">Occupation Skill Profiles</a>',L,q,G,Z='<a href="#table-1-top-5-rca-ranked-onet-and-esco-skills-by-major-occupation-group">Table 1. Top 5 RCA-ranked O*NET and ESCO skills by major occupation group</a>',A,D,le,J,ue='<a href="#industry-skill-profiles">Industry Skill Profiles</a>',se,ee,Q,pe='<a href="#table-2-top-5-rca-ranked-onet-and-esco-skills-by-naics-2-industry">Table 2. Top 5 RCA-ranked O*NET and ESCO skills by NAICS-2 industry</a>',ie,z,ne,V,ke='<a href="#evidence-path">Evidence Path</a>',ae,K,de='The O*NET skill bridge is listed in <a href="/us-lmi/methodology/audit-trail#required-checks" class="markdown">Agreement And Audit Trail</a>. Posting and taxonomy limits are summarized in <a href="/us-lmi/methodology/postings-and-taxonomies" class="markdown">What Postings And Taxonomies Can And Cannot Say</a>.',oe,U=typeof y<"u"&&y.title&&y.hide_title!==!0&&Ue();function he(t,_){return typeof y<"u"&&y.title?Be:We}let te=he()(p),W=typeof y=="object"&&ze(),w=p[0]&&Te(p);D=new $e({props:{data:p[0],groupBy:"soc2_group",rowsPerPage:"230",$$slots:{default:[Ye]},$$scope:{ctx:p}}});let T=p[1]&&Ee(p);return z=new $e({props:{data:p[1],groupBy:"naics_group",rowsPerPage:"240",$$slots:{default:[Ze]},$$scope:{ctx:p}}}),{c(){U&&U.c(),s=d(),te.c(),a=M("meta"),l=M("meta"),W&&W.c(),n=_e(),o=d(),i=M("div"),i.innerHTML=r,b=d(),x=M("p"),x.textContent=C,g=d(),$=M("div"),$.innerHTML=e,f=d(),H=M("div"),H.innerHTML=Y,B=d(),j=M("h2"),j.innerHTML=I,L=d(),w&&w.c(),q=d(),G=M("h3"),G.innerHTML=Z,A=d(),R(D.$$.fragment),le=d(),J=M("h2"),J.innerHTML=ue,se=d(),T&&T.c(),ee=d(),Q=M("h3"),Q.innerHTML=pe,ie=d(),R(z.$$.fragment),ne=d(),V=M("h2"),V.innerHTML=ke,ae=d(),K=M("p"),K.innerHTML=de,this.h()},l(t){U&&U.l(t),s=k(t);const _=Ce("svelte-2igo1p",document.head);te.l(_),a=E(_,"META",{name:!0,content:!0}),l=E(_,"META",{name:!0,content:!0}),W&&W.l(_),n=_e(),_.forEach(c),o=k(t),i=E(t,"DIV",{class:!0,"data-svelte-h":!0}),F(i)!=="svelte-q7eegh"&&(i.innerHTML=r),b=k(t),x=E(t,"P",{class:!0,"data-svelte-h":!0}),F(x)!=="svelte-paeha9"&&(x.textContent=C),g=k(t),$=E(t,"DIV",{class:!0,"data-svelte-h":!0}),F($)!=="svelte-c922rp"&&($.innerHTML=e),f=k(t),H=E(t,"DIV",{class:!0,"data-svelte-h":!0}),F(H)!=="svelte-1nbw1qi"&&(H.innerHTML=Y),B=k(t),j=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),F(j)!=="svelte-v49vc"&&(j.innerHTML=I),L=k(t),w&&w.l(t),q=k(t),G=E(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),F(G)!=="svelte-1rf1ev2"&&(G.innerHTML=Z),A=k(t),N(D.$$.fragment,t),le=k(t),J=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),F(J)!=="svelte-ikpzj9"&&(J.innerHTML=ue),se=k(t),T&&T.l(t),ee=k(t),Q=E(t,"H3",{class:!0,id:!0,"data-svelte-h":!0}),F(Q)!=="svelte-1pw6hrp"&&(Q.innerHTML=pe),ie=k(t),N(z.$$.fragment,t),ne=k(t),V=E(t,"H2",{class:!0,id:!0,"data-svelte-h":!0}),F(V)!=="svelte-1uqwyny"&&(V.innerHTML=ke),ae=k(t),K=E(t,"P",{class:!0,"data-svelte-h":!0}),F(K)!=="svelte-9dyglk"&&(K.innerHTML=de),this.h()},h(){u(a,"name","twitter:card"),u(a,"content","summary_large_image"),u(l,"name","twitter:site"),u(l,"content","@evidence_dev"),u(i,"class","border-l-4 border-gray-500 bg-gray-50 px-4 py-3 my-4 text-sm text-gray-700"),u(x,"class","markdown"),u($,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),u(H,"class","text-sm my-3"),u(j,"class","markdown"),u(j,"id","occupation-skill-profiles"),u(G,"class","markdown"),u(G,"id","table-1-top-5-rca-ranked-onet-and-esco-skills-by-major-occupation-group"),u(J,"class","markdown"),u(J,"id","industry-skill-profiles"),u(Q,"class","markdown"),u(Q,"id","table-2-top-5-rca-ranked-onet-and-esco-skills-by-naics-2-industry"),u(V,"class","markdown"),u(V,"id","evidence-path"),u(K,"class","markdown")},m(t,_){U&&U.m(t,_),m(t,s,_),te.m(document.head,null),ce(document.head,a),ce(document.head,l),W&&W.m(document.head,null),ce(document.head,n),m(t,o,_),m(t,i,_),m(t,b,_),m(t,x,_),m(t,g,_),m(t,$,_),m(t,f,_),m(t,H,_),m(t,B,_),m(t,j,_),m(t,L,_),w&&w.m(t,_),m(t,q,_),m(t,G,_),m(t,A,_),S(D,t,_),m(t,le,_),m(t,J,_),m(t,se,_),T&&T.m(t,_),m(t,ee,_),m(t,Q,_),m(t,ie,_),S(z,t,_),m(t,ne,_),m(t,V,_),m(t,ae,_),m(t,K,_),oe=!0},p(t,[_]){typeof y<"u"&&y.title&&y.hide_title!==!0&&U.p(t,_),te.p(t,_),typeof y=="object"&&W.p(t,_),t[0]?w?(w.p(t,_),_&1&&v(w,1)):(w=Te(t),w.c(),v(w,1),w.m(q.parentNode,q)):w&&(be(),h(w,1,1,()=>{w=null}),xe());const me={};_&1&&(me.data=t[0]),_&16777216&&(me.$$scope={dirty:_,ctx:t}),D.$set(me),t[1]?T?(T.p(t,_),_&2&&v(T,1)):(T=Ee(t),T.c(),v(T,1),T.m(ee.parentNode,ee)):T&&(be(),h(T,1,1,()=>{T=null}),xe());const fe={};_&2&&(fe.data=t[1]),_&16777216&&(fe.$$scope={dirty:_,ctx:t}),z.$set(fe)},i(t){oe||(v(w),v(D.$$.fragment,t),v(T),v(z.$$.fragment,t),oe=!0)},o(t){h(w),h(D.$$.fragment,t),h(T),h(z.$$.fragment,t),oe=!1},d(t){t&&(c(s),c(o),c(i),c(b),c(x),c(g),c($),c(f),c(H),c(B),c(j),c(L),c(q),c(G),c(A),c(le),c(J),c(se),c(ee),c(Q),c(ie),c(ne),c(V),c(ae),c(K)),U&&U.d(t),te.d(t),c(a),c(l),W&&W.d(t),c(n),w&&w.d(t),O(D,t),T&&T.d(t),O(z,t)}}}const y={title:"Skills Profiler"};function tt(p,s,a){let l,n;ye(p,Qe,A=>a(12,l=A)),ye(p,we,A=>a(18,n=A));let{data:o}=s,{data:i={},customFormattingSettings:r,__db:b,inputs:x}=o;je(we,n="d5de6fd9896b014c00f2067e33211471",n);let C=qe(Le(x));Oe(C.subscribe(A=>x=A)),Se(Je,{getCustomFormats:()=>r.customFormats||[]});const g=(A,D)=>Ve(b.query,A,{query_name:D});De(g),l.params,Ne(()=>!0);let $={initialData:void 0,initialError:void 0},e=re`select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  1 as taxonomy_order,
  'O*NET (crosswalked)' as taxonomy,
  skill_rank,
  skill_id as skill_code,
  skill_name as skill_label,
  rca,
  inferred_skill_mentions as mentions,
  printf('%.3f mentions/MAJ', inferred_skill_mentions_per_active_job) as coverage
from nlx.AGGR_NlxMajorOccupationOnetSkillProfile
union all
select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  2 as taxonomy_order,
  'ESCO' as taxonomy,
  skill_rank,
  skill_code as skill_code,
  skill_label as skill_label,
  rca,
  mentions as mentions,
  printf('%.1f%% active jobs', pct_active_jobs * 100) as coverage
from nlx.AGGR_NlxMajorOccupationEscoSkillProfile
order by occ2, taxonomy_order, skill_rank`,f=`select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  1 as taxonomy_order,
  'O*NET (crosswalked)' as taxonomy,
  skill_rank,
  skill_id as skill_code,
  skill_name as skill_label,
  rca,
  inferred_skill_mentions as mentions,
  printf('%.3f mentions/MAJ', inferred_skill_mentions_per_active_job) as coverage
from nlx.AGGR_NlxMajorOccupationOnetSkillProfile
union all
select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  2 as taxonomy_order,
  'ESCO' as taxonomy,
  skill_rank,
  skill_code as skill_code,
  skill_label as skill_label,
  rca,
  mentions as mentions,
  printf('%.1f%% active jobs', pct_active_jobs * 100) as coverage
from nlx.AGGR_NlxMajorOccupationEscoSkillProfile
order by occ2, taxonomy_order, skill_rank`;i.nlx_occ_skill_comparison_data&&(i.nlx_occ_skill_comparison_data instanceof Error?$.initialError=i.nlx_occ_skill_comparison_data:$.initialData=i.nlx_occ_skill_comparison_data,i.nlx_occ_skill_comparison_columns&&($.knownColumns=i.nlx_occ_skill_comparison_columns));let H,Y=!1;const B=ge.createReactive({callback:A=>{a(0,H=A)},execFn:g},{id:"nlx_occ_skill_comparison",...$});B(f,{noResolve:e,...$}),globalThis[Symbol.for("nlx_occ_skill_comparison")]={get value(){return H}};let j={initialData:void 0,initialError:void 0},I=re`select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  1 as taxonomy_order,
  'O*NET (crosswalked)' as taxonomy,
  skill_rank,
  skill_id as skill_code,
  skill_name as skill_label,
  rca,
  inferred_skill_mentions as mentions,
  printf('%.3f mentions/MAJ', inferred_skill_mentions_per_active_job) as coverage
from nlx.AGGR_NlxMajorIndustryOnetSkillProfile
union all
select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  2 as taxonomy_order,
  'ESCO' as taxonomy,
  skill_rank,
  skill_code as skill_code,
  skill_label as skill_label,
  rca,
  mentions as mentions,
  printf('%.1f%% active jobs', pct_active_jobs * 100) as coverage
from nlx.AGGR_NlxMajorIndustryEscoSkillProfile
order by ind2, taxonomy_order, skill_rank`,L=`select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  1 as taxonomy_order,
  'O*NET (crosswalked)' as taxonomy,
  skill_rank,
  skill_id as skill_code,
  skill_name as skill_label,
  rca,
  inferred_skill_mentions as mentions,
  printf('%.3f mentions/MAJ', inferred_skill_mentions_per_active_job) as coverage
from nlx.AGGR_NlxMajorIndustryOnetSkillProfile
union all
select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  2 as taxonomy_order,
  'ESCO' as taxonomy,
  skill_rank,
  skill_code as skill_code,
  skill_label as skill_label,
  rca,
  mentions as mentions,
  printf('%.1f%% active jobs', pct_active_jobs * 100) as coverage
from nlx.AGGR_NlxMajorIndustryEscoSkillProfile
order by ind2, taxonomy_order, skill_rank`;i.nlx_industry_skill_comparison_data&&(i.nlx_industry_skill_comparison_data instanceof Error?j.initialError=i.nlx_industry_skill_comparison_data:j.initialData=i.nlx_industry_skill_comparison_data,i.nlx_industry_skill_comparison_columns&&(j.knownColumns=i.nlx_industry_skill_comparison_columns));let q,G=!1;const Z=ge.createReactive({callback:A=>{a(1,q=A)},execFn:g},{id:"nlx_industry_skill_comparison",...j});return Z(L,{noResolve:I,...j}),globalThis[Symbol.for("nlx_industry_skill_comparison")]={get value(){return q}},p.$$set=A=>{"data"in A&&a(2,o=A.data)},p.$$.update=()=>{p.$$.dirty&4&&a(3,{data:i={},customFormattingSettings:r,__db:b}=o,i),p.$$.dirty&8&&Fe.set(Object.keys(i).length>0),p.$$.dirty&4096&&l.params,p.$$.dirty&240&&(e||!Y?e||(B(f,{noResolve:e,...$}),a(7,Y=!0)):B(f,{noResolve:e})),p.$$.dirty&3840&&(I||!G?I||(Z(L,{noResolve:I,...j}),a(11,G=!0)):Z(L,{noResolve:I}))},a(5,e=re`select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  1 as taxonomy_order,
  'O*NET (crosswalked)' as taxonomy,
  skill_rank,
  skill_id as skill_code,
  skill_name as skill_label,
  rca,
  inferred_skill_mentions as mentions,
  printf('%.3f mentions/MAJ', inferred_skill_mentions_per_active_job) as coverage
from nlx.AGGR_NlxMajorOccupationOnetSkillProfile
union all
select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  2 as taxonomy_order,
  'ESCO' as taxonomy,
  skill_rank,
  skill_code as skill_code,
  skill_label as skill_label,
  rca,
  mentions as mentions,
  printf('%.1f%% active jobs', pct_active_jobs * 100) as coverage
from nlx.AGGR_NlxMajorOccupationEscoSkillProfile
order by occ2, taxonomy_order, skill_rank`),a(6,f=`select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  1 as taxonomy_order,
  'O*NET (crosswalked)' as taxonomy,
  skill_rank,
  skill_id as skill_code,
  skill_name as skill_label,
  rca,
  inferred_skill_mentions as mentions,
  printf('%.3f mentions/MAJ', inferred_skill_mentions_per_active_job) as coverage
from nlx.AGGR_NlxMajorOccupationOnetSkillProfile
union all
select
  occ2,
  soc2_name,
  concat(occ2, ' - ', soc2_name) as soc2_group,
  2 as taxonomy_order,
  'ESCO' as taxonomy,
  skill_rank,
  skill_code as skill_code,
  skill_label as skill_label,
  rca,
  mentions as mentions,
  printf('%.1f%% active jobs', pct_active_jobs * 100) as coverage
from nlx.AGGR_NlxMajorOccupationEscoSkillProfile
order by occ2, taxonomy_order, skill_rank`),a(9,I=re`select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  1 as taxonomy_order,
  'O*NET (crosswalked)' as taxonomy,
  skill_rank,
  skill_id as skill_code,
  skill_name as skill_label,
  rca,
  inferred_skill_mentions as mentions,
  printf('%.3f mentions/MAJ', inferred_skill_mentions_per_active_job) as coverage
from nlx.AGGR_NlxMajorIndustryOnetSkillProfile
union all
select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  2 as taxonomy_order,
  'ESCO' as taxonomy,
  skill_rank,
  skill_code as skill_code,
  skill_label as skill_label,
  rca,
  mentions as mentions,
  printf('%.1f%% active jobs', pct_active_jobs * 100) as coverage
from nlx.AGGR_NlxMajorIndustryEscoSkillProfile
order by ind2, taxonomy_order, skill_rank`),a(10,L=`select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  1 as taxonomy_order,
  'O*NET (crosswalked)' as taxonomy,
  skill_rank,
  skill_id as skill_code,
  skill_name as skill_label,
  rca,
  inferred_skill_mentions as mentions,
  printf('%.3f mentions/MAJ', inferred_skill_mentions_per_active_job) as coverage
from nlx.AGGR_NlxMajorIndustryOnetSkillProfile
union all
select
  ind2,
  naics_name,
  concat(ind2, ' - ', naics_name) as naics_group,
  2 as taxonomy_order,
  'ESCO' as taxonomy,
  skill_rank,
  skill_code as skill_code,
  skill_label as skill_label,
  rca,
  mentions as mentions,
  printf('%.1f%% active jobs', pct_active_jobs * 100) as coverage
from nlx.AGGR_NlxMajorIndustryEscoSkillProfile
order by ind2, taxonomy_order, skill_rank`),[H,q,o,i,$,e,f,Y,j,I,L,G,l]}class ft extends Pe{constructor(s){super(),Ie(this,s,tt,et,Ae,{data:2})}}export{ft as component};
