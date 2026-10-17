import{p as zt,J as qi,s as At,d as c,D as Qt,b as v,T as St,i as p,a as $e,z as Li,e as S,j as rt,t as qt,c as y,l as H,u as Lt,k as $,r as re,G as Bi,B as Ki,f as he,m as ot,V as Wi,n as Kt,W as ji,v as zi,w as Qi,x as Yi,y as Ji,h as Xi,g as F,o as Zi,q as xi}from"../chunks/scheduler.TmfZfN_X.js";import{S as Bt,i as jt,t as b,a as d,g as fe,c as ce,d as E,m as D,b as R,e as G}from"../chunks/index.CKLTamEB.js";import{g as Yt,A as pi,M as Pi,t as en,N as tn,m as Ht,Q as nn,D as pt,C as j}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.CoVGfpJt.js";import{r as rn,w as Fi}from"../chunks/entry.P1aHOFFb.js";import{g as sn,d as on,e as ln,s as an,Q as nt,p as un,a as di,r as gi,C as mn}from"../chunks/inferColumnTypes.D_Qc-VWF.js";import{h as oe}from"../chunks/setTrackProxy.Cyfckp0w.js";import{H as _n,D as fn}from"../chunks/Dropdown.Cfk6Jae5.js";import{p as Vi}from"../chunks/stores.DMXyXr0C.js";import{c as cn}from"../chunks/checkRequiredProps.o_C_V3S5.js";import{Q as st}from"../chunks/QueryViewer.BWmGPj4w.js";import{B as Ut}from"../chunks/BigValue.CPkxYFlh.js";import{L as bi}from"../chunks/LineChart.CCZITCPP.js";import{p as pn}from"../chunks/profile.BW8tN6E9.js";const Ni="__EVIDENCE_BUTTON_GROUP_CONTEXT",dn=()=>qi(Ni),gn=(l,t)=>zt(Ni,{update:l,value:t}),Wt={dates:[{valueLabel:"Week",value:"7 days"},{valueLabel:"Month",value:"1 month"},{valueLabel:"Year",value:"1 year"}]};function hi(l){let t,i;return t=new Pi({props:{description:l[3]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r&8&&(o.description=e[3]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){E(t,e)}}}function bn(l){let t,i,e,r,o,s,a,u=l[3]&&hi(l);return{c(){t=H("button"),i=Lt(l[1]),e=$(),u&&u.c(),this.h()},l(m){t=S(m,"BUTTON",{class:!0});var I=rt(t);i=qt(I,l[1]),e=y(I),u&&u.l(I),I.forEach(c),this.h()},h(){v(t,"class",r="px-3 mt-2 py-2 text-center rounded-t text-sm font-medium font-sans whitespace-nowrap "+(l[2]===l[0]?`transition ease-in ${l[8].active}`:l[8].notActive)+" "+(l[4]?"flex-1":"")),St(t,"--bgColor",l[6]),St(t,"--activeColor",l[5])},m(m,I){p(m,t,I),$e(t,i),$e(t,e),u&&u.m(t,null),o=!0,s||(a=Li(t,"click",l[12]),s=!0)},p(m,[I]){(!o||I&2)&&Qt(i,m[1]),m[3]?u?(u.p(m,I),I&8&&d(u,1)):(u=hi(m),u.c(),d(u,1),u.m(t,null)):u&&(fe(),b(u,1,1,()=>{u=null}),ce()),(!o||I&21&&r!==(r="px-3 mt-2 py-2 text-center rounded-t text-sm font-medium font-sans whitespace-nowrap "+(m[2]===m[0]?`transition ease-in ${m[8].active}`:m[8].notActive)+" "+(m[4]?"flex-1":"")))&&v(t,"class",r),I&64&&St(t,"--bgColor",m[6]),I&32&&St(t,"--activeColor",m[5])},i(m){o||(d(u),o=!0)},o(m){b(u),o=!1},d(m){m&&c(t),u&&u.d(),s=!1,a()}}}function hn(l,t,i){let e,r,o,s,a=re,u=()=>(a(),a=Bi(e,q=>i(11,s=q)),e);l.$$.on_destroy.push(()=>a());const{resolveColor:m}=Yt();let{color:I="base-content"}=t,{id:_}=t,{label:k}=t,{activeId:g}=t,{description:M=void 0}=t,{fullWidth:h}=t,{background:C}=t;const w={notActive:"border-b border-base-100 text-base-content-muted hover:text-base-content hover:border-base-300",active:`border-b-2 border-[--activeColor] -mb-px text-[--activeColor] ${C?"bg-[--bgColor]":""}`};function A(q){Ki.call(this,l,q)}return l.$$set=q=>{"color"in q&&i(9,I=q.color),"id"in q&&i(0,_=q.id),"label"in q&&i(1,k=q.label),"activeId"in q&&i(2,g=q.activeId),"description"in q&&i(3,M=q.description),"fullWidth"in q&&i(4,h=q.fullWidth),"background"in q&&i(10,C=q.background)},l.$$.update=()=>{l.$$.dirty&512&&u(i(7,e=m(I))),l.$$.dirty&2048&&i(6,r=pi(s).alpha(.05).css()),l.$$.dirty&2048&&i(5,o=pi(s).css())},[_,k,g,M,h,o,r,e,w,I,C,s,A]}class yn extends Bt{constructor(t){super(),jt(this,t,hn,bn,At,{color:9,id:0,label:1,activeId:2,description:3,fullWidth:4,background:10})}}function $n(l){let t,i,e,r,o;return{c(){t=H("button"),i=Lt(l[0]),this.h()},l(s){t=S(s,"BUTTON",{type:!0,class:!0});var a=rt(t);i=qt(a,l[0]),a.forEach(c),this.h()},h(){var s;v(t,"type","button"),v(t,"class",e="flex-none py-1 font-medium px-3 text-xs truncate border-r last:border-none border-base-300 hover:bg-base-200 focus:z-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-base-300 "+(((s=l[3])==null?void 0:s.value)===l[1]?"z-10 bg-base-200 text-primary":"z-0 bg-base-100"))},m(s,a){p(s,t,a),$e(t,i),r||(o=Li(t,"click",l[11]),r=!0)},p(s,a){var u;a&1&&Qt(i,s[0]),a&10&&e!==(e="flex-none py-1 font-medium px-3 text-xs truncate border-r last:border-none border-base-300 hover:bg-base-200 focus:z-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-base-300 "+(((u=s[3])==null?void 0:u.value)===s[1]?"z-10 bg-base-200 text-primary":"z-0 bg-base-100"))&&v(t,"class",e)},i:re,o:re,d(s){s&&c(t),r=!1,o()}}}function wn(l){var e;let t,i;return t=new yn({props:{id:l[1],label:l[0],color:l[2],activeId:(e=l[3])==null?void 0:e.value}}),t.$on("click",l[10]),{c(){G(t.$$.fragment)},l(r){R(t.$$.fragment,r)},m(r,o){D(t,r,o),i=!0},p(r,o){var a;const s={};o&2&&(s.id=r[1]),o&1&&(s.label=r[0]),o&4&&(s.color=r[2]),o&8&&(s.activeId=(a=r[3])==null?void 0:a.value),t.$set(s)},i(r){i||(d(t.$$.fragment,r),i=!0)},o(r){b(t.$$.fragment,r),i=!1},d(r){E(t,r)}}}function vn(l){let t,i,e,r;const o=[wn,$n],s=[];function a(u,m){return u[4]==="tabs"?0:u[4]==="buttons"?1:-1}return~(t=a(l))&&(i=s[t]=o[t](l)),{c(){i&&i.c(),e=he()},l(u){i&&i.l(u),e=he()},m(u,m){~t&&s[t].m(u,m),p(u,e,m),r=!0},p(u,[m]){i&&i.p(u,m)},i(u){r||(d(i),r=!0)},o(u){b(i),r=!1},d(u){u&&c(e),~t&&s[t].d(u)}}}function kn(l,t,i){let e,r;const{resolveColor:o}=Yt();let{valueLabel:s}=t,{value:a}=t,{color:u="hsla(207, 65%, 39%, 1)"}=t,{defaultValue:m}=t,I=qi("button-display");const{update:_,value:k}=dn();ot(l,k,C=>i(3,r=C));let{default:g=!1}=t;g&&_({valueLabel:s,value:a}),m===a&&_({valueLabel:s,value:a});const M=()=>_({valueLabel:s,value:a}),h=()=>_({valueLabel:s,value:a});return l.$$set=C=>{"valueLabel"in C&&i(0,s=C.valueLabel),"value"in C&&i(1,a=C.value),"color"in C&&i(7,u=C.color),"defaultValue"in C&&i(8,m=C.defaultValue),"default"in C&&i(9,g=C.default)},l.$$.update=()=>{l.$$.dirty&128&&i(2,e=o(u))},[s,a,e,r,I,_,k,u,m,g,M,h]}class Oi extends Bt{constructor(t){super(),jt(this,t,kn,vn,At,{valueLabel:0,value:1,color:7,defaultValue:8,default:9})}}function yi(l,t,i){const e=l.slice();return e[7]=t[i].label,e[6]=t[i].value,e}const Tn=l=>({display:l[0]&8}),$i=l=>({display:l[3]});function wi(l,t,i){const e=l.slice();return e[6]=t[i].value,e[31]=t[i].valueLabel,e}function In(l){let t,i;return t=new _n({props:{enabled:l[0],$$slots:{default:[Cn]},$$scope:{ctx:l}}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&1&&(o.enabled=e[0]),r[0]&8390462&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){E(t,e)}}}function En(l){let t,i;return t=new tn({props:{inputType:"ButtonGroup",error:l[13],height:"32",width:"170"}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p:re,i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){E(t,e)}}}function vi(l){let t,i,e,r,o=l[5]&&ki(l);return{c(){t=H("span"),i=Lt(l[1]),e=$(),o&&o.c(),this.h()},l(s){t=S(s,"SPAN",{class:!0});var a=rt(t);i=qt(a,l[1]),e=y(a),o&&o.l(a),a.forEach(c),this.h()},h(){v(t,"class","text-xs font-medium text-base-content block mb-0.5")},m(s,a){p(s,t,a),$e(t,i),$e(t,e),o&&o.m(t,null),r=!0},p(s,a){(!r||a[0]&2)&&Qt(i,s[1]),s[5]?o?(o.p(s,a),a[0]&32&&d(o,1)):(o=ki(s),o.c(),d(o,1),o.m(t,null)):o&&(fe(),b(o,1,1,()=>{o=null}),ce())},i(s){r||(d(o),r=!0)},o(s){b(o),r=!1},d(s){s&&c(t),o&&o.d()}}}function ki(l){let t,i;return t=new Pi({props:{description:l[5]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&32&&(o.description=e[5]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){E(t,e)}}}function Dn(l){let t,i,e;const r=l[22].default,o=zi(r,l,l[23],$i);let s=l[9]&&Ti(l);return{c(){o&&o.c(),t=$(),s&&s.c(),i=he()},l(a){o&&o.l(a),t=y(a),s&&s.l(a),i=he()},m(a,u){o&&o.m(a,u),p(a,t,u),s&&s.m(a,u),p(a,i,u),e=!0},p(a,u){o&&o.p&&(!e||u[0]&8388616)&&Qi(o,r,a,a[23],e?Ji(r,a[23],u,Tn):Yi(a[23]),$i),a[9]?s?(s.p(a,u),u[0]&512&&d(s,1)):(s=Ti(a),s.c(),d(s,1),s.m(i.parentNode,i)):s&&(fe(),b(s,1,1,()=>{s=null}),ce())},i(a){e||(d(o,a),d(s),e=!0)},o(a){b(o,a),b(s),e=!1},d(a){a&&(c(t),c(i)),o&&o.d(a),s&&s.d(a)}}}function Rn(l){let t,i,e=Ht(Wt[l[2]]),r=[];for(let s=0;s<e.length;s+=1)r[s]=Ei(wi(l,e,s));const o=s=>b(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();t=he()},l(s){for(let a=0;a<r.length;a+=1)r[a].l(s);t=he()},m(s,a){for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(s,a);p(s,t,a),i=!0},p(s,a){if(a[0]&1052){e=Ht(Wt[s[2]]);let u;for(u=0;u<e.length;u+=1){const m=wi(s,e,u);r[u]?(r[u].p(m,a),d(r[u],1)):(r[u]=Ei(m),r[u].c(),d(r[u],1),r[u].m(t.parentNode,t))}for(fe(),u=e.length;u<r.length;u+=1)o(u);ce()}},i(s){if(!i){for(let a=0;a<e.length;a+=1)d(r[a]);i=!0}},o(s){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)b(r[a]);i=!1},d(s){s&&c(t),ji(r,s)}}}function Ti(l){let t,i;return t=new nn({props:{data:l[8],$$slots:{default:[Mn,({loaded:e})=>({34:e}),({loaded:e})=>[0,e?8:0]],skeleton:[Gn]},$$scope:{ctx:l}}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&256&&(o.data=e[8]),r[0]&8389656|r[1]&8&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){E(t,e)}}}function Gn(l){let t;return{c(){t=H("div"),this.h()},l(i){t=S(i,"DIV",{class:!0}),rt(t).forEach(c),this.h()},h(){v(t,"class","h-8 min-w-24 w-full max-width-24 block animate-pulse bg-base-300")},m(i,e){p(i,t,e)},p:re,d(i){i&&c(t)}}}function Ii(l){let t,i;return t=new Oi({props:{data:l[34],value:l[6],valueLabel:l[7],color:l[10],display:l[3],defaultValue:l[4]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[1]&8&&(o.data=e[34]),r[1]&8&&(o.value=e[6]),r[1]&8&&(o.valueLabel=e[7]),r[0]&1024&&(o.color=e[10]),r[0]&8&&(o.display=e[3]),r[0]&16&&(o.defaultValue=e[4]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){E(t,e)}}}function Mn(l){let t,i,e=Ht(l[34]),r=[];for(let s=0;s<e.length;s+=1)r[s]=Ii(yi(l,e,s));const o=s=>b(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();t=he()},l(s){for(let a=0;a<r.length;a+=1)r[a].l(s);t=he()},m(s,a){for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(s,a);p(s,t,a),i=!0},p(s,a){if(a[0]&1048|a[1]&8){e=Ht(s[34]);let u;for(u=0;u<e.length;u+=1){const m=yi(s,e,u);r[u]?(r[u].p(m,a),d(r[u],1)):(r[u]=Ii(m),r[u].c(),d(r[u],1),r[u].m(t.parentNode,t))}for(fe(),u=e.length;u<r.length;u+=1)o(u);ce()}},i(s){if(!i){for(let a=0;a<e.length;a+=1)d(r[a]);i=!0}},o(s){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)b(r[a]);i=!1},d(s){s&&c(t),ji(r,s)}}}function Ei(l){let t,i;return t=new Oi({props:{value:l[6],valueLabel:l[31],color:l[10],display:l[3],defaultValue:l[4]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&4&&(o.value=e[6]),r[0]&4&&(o.valueLabel=e[31]),r[0]&1024&&(o.color=e[10]),r[0]&8&&(o.display=e[3]),r[0]&16&&(o.defaultValue=e[4]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){E(t,e)}}}function Cn(l){let t,i,e,r,o,s,a,u,m=l[1]&&vi(l);const I=[Rn,Dn],_=[];function k(g,M){return g[2]?0:1}return r=k(l),o=_[r]=I[r](l),{c(){t=H("div"),m&&m.c(),i=$(),e=H("div"),o.c(),this.h()},l(g){t=S(g,"DIV",{class:!0});var M=rt(t);m&&m.l(M),i=y(M),e=S(M,"DIV",{class:!0,role:!0});var h=rt(e);o.l(h),h.forEach(c),M.forEach(c),this.h()},h(){v(e,"class",s=l[3]==="tabs"?"my-6 flex flex-wrap gap-x-1 gap-y-1":"inline-flex rounded-md shadow-sm overflow-auto border border-base-300 no-scrollbar h-8 mb-1"),v(e,"role","group"),v(t,"class",a=l[3]==="tabs"?"":`inline-block overflow-scroll no-scrollbar align-bottom w-fit max-w-full flex-col ${l[1]?"mt-0.5":"mt-2"} mb-3 ml-0 mr-2`)},m(g,M){p(g,t,M),m&&m.m(t,null),$e(t,i),$e(t,e),_[r].m(e,null),u=!0},p(g,M){g[1]?m?(m.p(g,M),M[0]&2&&d(m,1)):(m=vi(g),m.c(),d(m,1),m.m(t,i)):m&&(fe(),b(m,1,1,()=>{m=null}),ce());let h=r;r=k(g),r===h?_[r].p(g,M):(fe(),b(_[h],1,1,()=>{_[h]=null}),ce(),o=_[r],o?o.p(g,M):(o=_[r]=I[r](g),o.c()),d(o,1),o.m(e,null)),(!u||M[0]&8&&s!==(s=g[3]==="tabs"?"my-6 flex flex-wrap gap-x-1 gap-y-1":"inline-flex rounded-md shadow-sm overflow-auto border border-base-300 no-scrollbar h-8 mb-1"))&&v(e,"class",s),(!u||M[0]&10&&a!==(a=g[3]==="tabs"?"":`inline-block overflow-scroll no-scrollbar align-bottom w-fit max-w-full flex-col ${g[1]?"mt-0.5":"mt-2"} mb-3 ml-0 mr-2`))&&v(t,"class",a)},i(g){u||(d(m),d(o),u=!0)},o(g){b(m),b(o),u=!1},d(g){g&&c(t),m&&m.d(),_[r].d()}}}function Sn(l){let t,i,e,r;const o=[En,In],s=[];function a(u,m){return u[13].length>0?0:1}return t=a(l),i=s[t]=o[t](l),{c(){i.c(),e=he()},l(u){i.l(u),e=he()},m(u,m){s[t].m(u,m),p(u,e,m),r=!0},p(u,m){i.p(u,m)},i(u){r||(d(i),r=!0)},o(u){b(i),r=!1},d(u){u&&c(e),s[t].d(u)}}}function Hn(l,t,i){var _e;let e,r,o,s,a=re,u=()=>(a(),a=Bi(o,T=>i(20,s=T)),o),m,I,_,k;ot(l,Vi,T=>i(24,I=T)),l.$$.on_destroy.push(()=>a());let{$$slots:g={},$$scope:M}=t;const h=Wi(g);let{name:C=void 0}=t,{title:w=void 0}=t,{hideDuringPrint:A=!0}=t,{preset:q=void 0}=t;const pe=sn();ot(l,pe,T=>i(25,_=T));let{display:le="buttons"}=t,{defaultValue:Z=void 0}=t;zt("button-display",le);const{resolveColor:de}=Yt();let{color:ae="hsla(207, 65%, 39%, 1)"}=t,{description:X=void 0}=t;const ge=Fi(null);ot(l,ge,T=>i(26,k=T)),gn(T=>{Kt(ge,k=T,k),Kt(pe,_[C]=(T==null?void 0:T.value)??null,_)},rn(ge));let{value:x,data:N,label:ee,order:ue,where:te}=t,P=[];const{results:Ee,update:me}=on({value:x,data:N,label:ee,order:ue,where:te},`ButtonGroup-${C}`,(_e=I==null?void 0:I.data)==null?void 0:_e.data[`ButtonGroup-${C}_data`]);ot(l,Ee,T=>i(21,m=T));function Ne(T,se){[{value:T,type:"string",options:Object.keys(Wt),name:"preset"},{value:se,type:"string",options:["tabs","buttons"],name:"display"}].forEach(V=>{V.value&&(typeof V.value!==V.type&&P.push(`Invalid type: ${V.name} must be a ${V.type}. ${V.name} is type ${typeof V.value}`),V.options.includes(V.value)||P.push(`Invalid ${V.name}: ${V.value}. Expected one of the following: ${V.options.join(", ")}`))})}x||(N?P.push('Missing required prop: "value".'):!h.default&&!q&&P.push('ButtonGroup requires either "value" and "data" props or <ButtonGroupItem />.')),N&&typeof N!="object"&&(typeof N=="string"?P.push(`'${N}' is not a recognized query result. Data should be provided in the format: data = {'${N.replace("data.","")}'}`):P.push(`'${N}' is not a recognized query result. Data should be an object. e.g data = {QueryName}`)),Ne(q,le);try{cn({name:C})}catch(T){P.push(T.message)}return l.$$set=T=>{"name"in T&&i(15,C=T.name),"title"in T&&i(1,w=T.title),"hideDuringPrint"in T&&i(0,A=T.hideDuringPrint),"preset"in T&&i(2,q=T.preset),"display"in T&&i(3,le=T.display),"defaultValue"in T&&i(4,Z=T.defaultValue),"color"in T&&i(16,ae=T.color),"description"in T&&i(5,X=T.description),"value"in T&&i(6,x=T.value),"data"in T&&i(17,N=T.data),"label"in T&&i(7,ee=T.label),"order"in T&&i(18,ue=T.order),"where"in T&&i(19,te=T.where),"$$scope"in T&&i(23,M=T.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&1&&i(0,A=en(A)),l.$$.dirty[0]&65536&&i(10,e=de(ae)),l.$$.dirty[0]&917696&&me({value:x,data:N,label:ee,order:ue,where:te}),l.$$.dirty[0]&2097152&&i(9,{hasQuery:r,query:o}=m,r,u(i(8,o))),l.$$.dirty[0]&1048576&&s!=null&&s.error&&P.push(s.error)},[A,w,q,le,Z,X,x,ee,o,r,e,pe,ge,P,Ee,C,ae,N,ue,te,s,m,g,M]}class An extends Bt{constructor(t){super(),jt(this,t,Hn,Sn,At,{name:15,title:1,hideDuringPrint:0,preset:2,display:3,defaultValue:4,color:16,description:5,value:6,data:17,label:7,order:18,where:19},null,[-1,-1])}}function qn(l){let t,i=B.title+"",e;return{c(){t=H("h1"),e=Lt(i),this.h()},l(r){t=S(r,"H1",{class:!0});var o=rt(t);e=qt(o,i),o.forEach(c),this.h()},h(){v(t,"class","title")},m(r,o){p(r,t,o),$e(t,e)},p:re,d(r){r&&c(t)}}}function Ln(l){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:re,p:re,d:re}}function Bn(l){let t,i,e,r,o;return document.title=t=B.title,{c(){i=$(),e=H("meta"),r=$(),o=H("meta"),this.h()},l(s){i=y(s),e=S(s,"META",{property:!0,content:!0}),r=y(s),o=S(s,"META",{name:!0,content:!0}),this.h()},h(){var s,a;v(e,"property","og:title"),v(e,"content",((s=B.og)==null?void 0:s.title)??B.title),v(o,"name","twitter:title"),v(o,"content",((a=B.og)==null?void 0:a.title)??B.title)},m(s,a){p(s,i,a),p(s,e,a),p(s,r,a),p(s,o,a)},p(s,a){a&0&&t!==(t=B.title)&&(document.title=t)},d(s){s&&(c(i),c(e),c(r),c(o))}}}function jn(l){var o,s;let t,i,e=(B.description||((o=B.og)==null?void 0:o.description))&&Pn(),r=((s=B.og)==null?void 0:s.image)&&Fn();return{c(){e&&e.c(),t=$(),r&&r.c(),i=he()},l(a){e&&e.l(a),t=y(a),r&&r.l(a),i=he()},m(a,u){e&&e.m(a,u),p(a,t,u),r&&r.m(a,u),p(a,i,u)},p(a,u){var m,I;(B.description||(m=B.og)!=null&&m.description)&&e.p(a,u),(I=B.og)!=null&&I.image&&r.p(a,u)},d(a){a&&(c(t),c(i)),e&&e.d(a),r&&r.d(a)}}}function Pn(l){let t,i,e,r,o;return{c(){t=H("meta"),i=$(),e=H("meta"),r=$(),o=H("meta"),this.h()},l(s){t=S(s,"META",{name:!0,content:!0}),i=y(s),e=S(s,"META",{property:!0,content:!0}),r=y(s),o=S(s,"META",{name:!0,content:!0}),this.h()},h(){var s,a,u;v(t,"name","description"),v(t,"content",B.description??((s=B.og)==null?void 0:s.description)),v(e,"property","og:description"),v(e,"content",((a=B.og)==null?void 0:a.description)??B.description),v(o,"name","twitter:description"),v(o,"content",((u=B.og)==null?void 0:u.description)??B.description)},m(s,a){p(s,t,a),p(s,i,a),p(s,e,a),p(s,r,a),p(s,o,a)},p:re,d(s){s&&(c(t),c(i),c(e),c(r),c(o))}}}function Fn(l){let t,i,e;return{c(){t=H("meta"),i=$(),e=H("meta"),this.h()},l(r){t=S(r,"META",{property:!0,content:!0}),i=y(r),e=S(r,"META",{name:!0,content:!0}),this.h()},h(){var r,o;v(t,"property","og:image"),v(t,"content",di((r=B.og)==null?void 0:r.image)),v(e,"name","twitter:image"),v(e,"content",di((o=B.og)==null?void 0:o.image))},m(r,o){p(r,t,o),p(r,i,o),p(r,e,o)},p:re,d(r){r&&(c(t),c(i),c(e))}}}function Di(l){let t,i;return t=new st({props:{queryID:"dei_shift_share",queryResult:l[0]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&1&&(o.queryResult=e[0]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){E(t,e)}}}function Vn(l){let t,i,e,r,o,s,a,u,m,I,_,k,g,M;return t=new j({props:{id:"total_change",title:"Total change",fmt:"0.000"}}),e=new j({props:{id:"within",title:"Within",fmt:"0.000"}}),o=new j({props:{id:"composition",title:"Composition",fmt:"0.000"}}),a=new j({props:{id:"interaction",title:"Interaction",fmt:"0.000"}}),m=new j({props:{id:"pct_within",title:"% within",fmt:"0.0"}}),_=new j({props:{id:"pct_composition",title:"% composition",fmt:"0.0"}}),g=new j({props:{id:"pct_interaction",title:"% interaction",fmt:"0.0"}}),{c(){G(t.$$.fragment),i=$(),G(e.$$.fragment),r=$(),G(o.$$.fragment),s=$(),G(a.$$.fragment),u=$(),G(m.$$.fragment),I=$(),G(_.$$.fragment),k=$(),G(g.$$.fragment)},l(h){R(t.$$.fragment,h),i=y(h),R(e.$$.fragment,h),r=y(h),R(o.$$.fragment,h),s=y(h),R(a.$$.fragment,h),u=y(h),R(m.$$.fragment,h),I=y(h),R(_.$$.fragment,h),k=y(h),R(g.$$.fragment,h)},m(h,C){D(t,h,C),p(h,i,C),D(e,h,C),p(h,r,C),D(o,h,C),p(h,s,C),D(a,h,C),p(h,u,C),D(m,h,C),p(h,I,C),D(_,h,C),p(h,k,C),D(g,h,C),M=!0},p:re,i(h){M||(d(t.$$.fragment,h),d(e.$$.fragment,h),d(o.$$.fragment,h),d(a.$$.fragment,h),d(m.$$.fragment,h),d(_.$$.fragment,h),d(g.$$.fragment,h),M=!0)},o(h){b(t.$$.fragment,h),b(e.$$.fragment,h),b(o.$$.fragment,h),b(a.$$.fragment,h),b(m.$$.fragment,h),b(_.$$.fragment,h),b(g.$$.fragment,h),M=!1},d(h){h&&(c(i),c(r),c(s),c(u),c(I),c(k)),E(t,h),E(e,h),E(o,h),E(a,h),E(m,h),E(_,h),E(g,h)}}}function Ri(l){let t,i;return t=new st({props:{queryID:"dei_subcategory_options",queryResult:l[1]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&2&&(o.queryResult=e[1]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){E(t,e)}}}function Gi(l){let t,i;return t=new st({props:{queryID:"dei_subcategory_monthly",queryResult:l[2]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&4&&(o.queryResult=e[2]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){E(t,e)}}}function Nn(l){let t,i,e,r,o,s,a,u,m,I,_,k;return t=new j({props:{id:"month_start",title:"Month",fmt:"mmm yyyy"}}),e=new j({props:{id:"n_postings_with_concept",title:"Postings with concept",fmt:"#,##0"}}),o=new j({props:{id:"n_mentions",title:"Mentions",fmt:"#,##0"}}),a=new j({props:{id:"n_postings_month",title:"Postings",fmt:"#,##0"}}),m=new j({props:{id:"pct_postings",title:"% postings",fmt:"0.0%"}}),_=new j({props:{id:"mentions_per_posting",title:"Mentions/posting",fmt:"0.000"}}),{c(){G(t.$$.fragment),i=$(),G(e.$$.fragment),r=$(),G(o.$$.fragment),s=$(),G(a.$$.fragment),u=$(),G(m.$$.fragment),I=$(),G(_.$$.fragment)},l(g){R(t.$$.fragment,g),i=y(g),R(e.$$.fragment,g),r=y(g),R(o.$$.fragment,g),s=y(g),R(a.$$.fragment,g),u=y(g),R(m.$$.fragment,g),I=y(g),R(_.$$.fragment,g)},m(g,M){D(t,g,M),p(g,i,M),D(e,g,M),p(g,r,M),D(o,g,M),p(g,s,M),D(a,g,M),p(g,u,M),D(m,g,M),p(g,I,M),D(_,g,M),k=!0},p:re,i(g){k||(d(t.$$.fragment,g),d(e.$$.fragment,g),d(o.$$.fragment,g),d(a.$$.fragment,g),d(m.$$.fragment,g),d(_.$$.fragment,g),k=!0)},o(g){b(t.$$.fragment,g),b(e.$$.fragment,g),b(o.$$.fragment,g),b(a.$$.fragment,g),b(m.$$.fragment,g),b(_.$$.fragment,g),k=!1},d(g){g&&(c(i),c(r),c(s),c(u),c(I)),E(t,g),E(e,g),E(o,g),E(a,g),E(m,g),E(_,g)}}}function Mi(l){let t,i;return t=new st({props:{queryID:"dei_term_options",queryResult:l[3]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&8&&(o.queryResult=e[3]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){E(t,e)}}}function Ci(l){let t,i;return t=new st({props:{queryID:"dei_term_monthly",queryResult:l[4]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&16&&(o.queryResult=e[4]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){E(t,e)}}}function Si(l){let t,i;return t=new st({props:{queryID:"dei_term_latest_comparison",queryResult:l[5]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&32&&(o.queryResult=e[5]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){E(t,e)}}}function On(l){let t,i,e,r,o,s,a,u,m,I;return t=new j({props:{id:"term",title:"Term"}}),e=new j({props:{id:"n_postings_with_term",title:"Postings with term",fmt:"#,##0"}}),o=new j({props:{id:"mentions",title:"Mentions",fmt:"#,##0"}}),a=new j({props:{id:"share_postings_with_term",title:"% postings",fmt:"0.0%"}}),m=new j({props:{id:"mentions_per_posting",title:"Mentions/posting",fmt:"0.000"}}),{c(){G(t.$$.fragment),i=$(),G(e.$$.fragment),r=$(),G(o.$$.fragment),s=$(),G(a.$$.fragment),u=$(),G(m.$$.fragment)},l(_){R(t.$$.fragment,_),i=y(_),R(e.$$.fragment,_),r=y(_),R(o.$$.fragment,_),s=y(_),R(a.$$.fragment,_),u=y(_),R(m.$$.fragment,_)},m(_,k){D(t,_,k),p(_,i,k),D(e,_,k),p(_,r,k),D(o,_,k),p(_,s,k),D(a,_,k),p(_,u,k),D(m,_,k),I=!0},p:re,i(_){I||(d(t.$$.fragment,_),d(e.$$.fragment,_),d(o.$$.fragment,_),d(a.$$.fragment,_),d(m.$$.fragment,_),I=!0)},o(_){b(t.$$.fragment,_),b(e.$$.fragment,_),b(o.$$.fragment,_),b(a.$$.fragment,_),b(m.$$.fragment,_),I=!1},d(_){_&&(c(i),c(r),c(s),c(u)),E(t,_),E(e,_),E(o,_),E(a,_),E(m,_)}}}function Hi(l){let t,i;return t=new st({props:{queryID:"dei_department_rankings",queryResult:l[6]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&64&&(o.queryResult=e[6]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){E(t,e)}}}function Un(l){let t,i,e,r,o,s,a,u,m,I;return t=new j({props:{id:"dept_code",title:"Department code"}}),e=new j({props:{id:"dept_name",title:"Department",wrap:"true"}}),o=new j({props:{id:"n_postings_with_concept",title:"Postings with concept",fmt:"#,##0"}}),a=new j({props:{id:"n_postings",title:"Postings",fmt:"#,##0"}}),m=new j({props:{id:"pct_postings",title:"% postings",fmt:"0.0%"}}),{c(){G(t.$$.fragment),i=$(),G(e.$$.fragment),r=$(),G(o.$$.fragment),s=$(),G(a.$$.fragment),u=$(),G(m.$$.fragment)},l(_){R(t.$$.fragment,_),i=y(_),R(e.$$.fragment,_),r=y(_),R(o.$$.fragment,_),s=y(_),R(a.$$.fragment,_),u=y(_),R(m.$$.fragment,_)},m(_,k){D(t,_,k),p(_,i,k),D(e,_,k),p(_,r,k),D(o,_,k),p(_,s,k),D(a,_,k),p(_,u,k),D(m,_,k),I=!0},p:re,i(_){I||(d(t.$$.fragment,_),d(e.$$.fragment,_),d(o.$$.fragment,_),d(a.$$.fragment,_),d(m.$$.fragment,_),I=!0)},o(_){b(t.$$.fragment,_),b(e.$$.fragment,_),b(o.$$.fragment,_),b(a.$$.fragment,_),b(m.$$.fragment,_),I=!1},d(_){_&&(c(i),c(r),c(s),c(u)),E(t,_),E(e,_),E(o,_),E(a,_),E(m,_)}}}function Ai(l){let t,i;return t=new st({props:{queryID:"dei_occupation_changes",queryResult:l[7]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&128&&(o.queryResult=e[7]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){E(t,e)}}}function Kn(l){let t,i,e,r,o,s,a,u,m,I,_,k,g,M,h,C;return t=new j({props:{id:"occ8",title:"8-digit O*NET-SOC"}}),e=new j({props:{id:"soc_title",title:"Occupation",wrap:"true"}}),o=new j({props:{id:"pre_postings",title:"Pre postings",fmt:"#,##0"}}),a=new j({props:{id:"post_postings",title:"Post postings",fmt:"#,##0"}}),m=new j({props:{id:"pre_rate",title:"Pre rate",fmt:"0.0%"}}),_=new j({props:{id:"post_rate",title:"Post rate",fmt:"0.0%"}}),g=new j({props:{id:"rate_delta",title:"Rate delta",fmt:"0.0%"}}),h=new j({props:{id:"pct_change",title:"% change",fmt:"0.0%"}}),{c(){G(t.$$.fragment),i=$(),G(e.$$.fragment),r=$(),G(o.$$.fragment),s=$(),G(a.$$.fragment),u=$(),G(m.$$.fragment),I=$(),G(_.$$.fragment),k=$(),G(g.$$.fragment),M=$(),G(h.$$.fragment)},l(w){R(t.$$.fragment,w),i=y(w),R(e.$$.fragment,w),r=y(w),R(o.$$.fragment,w),s=y(w),R(a.$$.fragment,w),u=y(w),R(m.$$.fragment,w),I=y(w),R(_.$$.fragment,w),k=y(w),R(g.$$.fragment,w),M=y(w),R(h.$$.fragment,w)},m(w,A){D(t,w,A),p(w,i,A),D(e,w,A),p(w,r,A),D(o,w,A),p(w,s,A),D(a,w,A),p(w,u,A),D(m,w,A),p(w,I,A),D(_,w,A),p(w,k,A),D(g,w,A),p(w,M,A),D(h,w,A),C=!0},p:re,i(w){C||(d(t.$$.fragment,w),d(e.$$.fragment,w),d(o.$$.fragment,w),d(a.$$.fragment,w),d(m.$$.fragment,w),d(_.$$.fragment,w),d(g.$$.fragment,w),d(h.$$.fragment,w),C=!0)},o(w){b(t.$$.fragment,w),b(e.$$.fragment,w),b(o.$$.fragment,w),b(a.$$.fragment,w),b(m.$$.fragment,w),b(_.$$.fragment,w),b(g.$$.fragment,w),b(h.$$.fragment,w),C=!1},d(w){w&&(c(i),c(r),c(s),c(u),c(I),c(k),c(M)),E(t,w),E(e,w),E(o,w),E(a,w),E(m,w),E(_,w),E(g,w),E(h,w)}}}function Wn(l){let t,i,e,r,o,s,a='This page isolates DEI-related ConceptSearch evidence in USAJOBS postings. The DEI term list used for the TrumpDEIList measures is from the <a href="https://www.nytimes.com/interactive/2025/03/07/us/trump-federal-agencies-websites-words-dei.html" rel="nofollow" class="markdown">New York Times interactive article on terms removed from federal agency websites</a>. Protected-class terms and research-team DEI labels are shown separately where available.',u,m,I="<strong>How to read this page.</strong> These are federal posting-text term measures. They can show changes in language and standardized posting text; they should not be read as direct evidence of agency intent, compliance, or workplace practice without source-text review.",_,k,g="<strong>Shared terms.</strong> Pre/post rates are shares of postings with the selected term set before versus after the transition. Within means changes inside occupations; composition means changes from the occupation mix.",M,h,C='<a href="#headline" class="hover:underline">Headline</a> <a href="#monthly-subcategories" class="hover:underline">Monthly subcategories</a> <a href="#individual-terms" class="hover:underline">Individual terms</a> <a href="#departments" class="hover:underline">Departments</a> <a href="#occupations" class="hover:underline">Occupations</a> <a href="#source-notes" class="hover:underline">Source notes</a>',w,A,q='<a href="#headline">Headline</a>',pe,le,Z,de,ae,X,ge,x,N,ee,ue='<a href="#table-1-trumpdeilist-shift-share-decomposition">Table 1. TrumpDEIList shift-share decomposition</a>',te,P,Ee,me,Ne='<a href="#monthly-subcategories">Monthly Subcategories</a>',_e,T,se,Ce,V,ye,De='<a href="#figure-udei-1-selected-dei-subcategory-intensity">Figure UDEI-1. Selected DEI Subcategory Intensity</a>',we,be,Oe,ve,lt="The chart shows mentions per posting for the selected term set. Repeated wording can contribute multiple mentions.",ke,ie,Ue='<a href="#table-udei-1-selected-dei-subcategory-monthly-values">Table UDEI-1. Selected DEI Subcategory Monthly Values</a>',Ke,Te,We,ne,Re='<a href="#individual-terms">Individual Terms</a>',Ge,Ie,at="Select a word to view its monthly frequency. These four term series are separate from the subcategory selector above; the latest-month table reports all four terms.",ze,L,Me,dt,ut,Se,Jt='<a href="#figure-udei-2-selected-dei-term-intensity">Figure UDEI-2. Selected DEI Term Intensity</a>',gt,Qe,bt,Ye,Xt="Use the term buttons to inspect the component words behind the aggregate. Term-level keyword counts can include boilerplate and repeated standardized language.",ht,mt,Je,Zt="Latest month comparison of individual DEI terms",yt,He,xt='<a href="#table-udei-2-latest-individual-dei-term-comparison">Table UDEI-2. Latest Individual DEI Term Comparison</a>',$t,Xe,wt,Ae,ei='<a href="#departments">Departments</a>',vt,_t,qe,ti='<a href="#table-udei-3-department-rankings-for-selected-dei-subcategory">Table UDEI-3. Department Rankings for Selected DEI Subcategory</a>',kt,Ze,Tt,Le,ii='<a href="#occupations">Occupations</a>',It,ft,xe,ni="The occupation comparison uses the fixed TrumpDEIList term set. It does not change with the subcategory selector or individual-term buttons.",Et,Be,ri='<a href="#table-udei-4-occupation-changes-for-trumpdeilist">Table UDEI-4. Occupation Changes for TrumpDEIList</a>',Dt,et,Rt,je,si='<a href="#source-notes">Source Notes</a>',Gt,tt,oi='DEI TrumpDEIList terms are from the New York Times interactive article linked above. The dashboard distinguishes these from protected-class and other research-team DEI labels because some DEI-category rows appear in nearly all federal postings as standardized equal-opportunity or protected-class language. The shift-share and occupation tables use USAJOBS database aggregates: <code class="markdown">AGGR_DEIShiftShare</code>, <code class="markdown">AGGR_DEIWithinOccupation</code>, <code class="markdown">AGGR_DEIBySubcatMonth</code>, and <code class="markdown">AGGR_DEIByDeptSubcat</code>.',Mt,it,li='Evidence path: USAJOBS source and release checks are listed in <a href="/us-lmi/methodology/audit-trail" class="markdown">Agreement And Audit Trail</a>. Interpretation limits for posting text are summarized in <a href="/us-lmi/methodology/postings-and-taxonomies" class="markdown">What Postings And Taxonomies Can And Cannot Say</a>.',Ct,Pe=typeof B<"u"&&B.title&&B.hide_title!==!0&&qn();function Ui(n,f){return typeof B<"u"&&B.title?Bn:Ln}let ct=Ui()(l),Fe=typeof B=="object"&&jn(),O=l[0]&&Di(l);de=new Ut({props:{data:l[0],value:"corpus_rate_pre",title:"Pre-transition TrumpDEIList rate",fmt:"0.0%"}}),X=new Ut({props:{data:l[0],value:"corpus_rate_post",title:"Post-transition TrumpDEIList rate",fmt:"0.0%"}}),x=new Ut({props:{data:l[0],value:"pct_within",title:"Within-occupation share of change",fmt:"0.0"}}),P=new pt({props:{data:l[0],rows:"1",$$slots:{default:[Vn]},$$scope:{ctx:l}}});let U=l[1]&&Ri(l);se=new fn({props:{data:l[1],name:"dei_subcategory",value:"subcategory",defaultValue:"TrumpDEIList",title:"DEI subcategory"}});let K=l[2]&&Gi(l);be=new bi({props:{data:l[2],x:"month_start",y:"mentions_per_posting",yAxisTitle:"Mentions per posting",title:"Selected DEI subcategory intensity"}}),Te=new pt({props:{data:l[2],rowsPerPage:"12",$$slots:{default:[Nn]},$$scope:{ctx:l}}});let W=l[3]&&Mi(l);Me=new An({props:{data:l[3],name:"dei_term",value:"term",label:"term_label",defaultValue:"diversity",title:"Individual DEI term"}});let z=l[4]&&Ci(l);Qe=new bi({props:{data:l[4],x:"month_start",y:"mentions_per_posting",yAxisTitle:"Mentions per posting",title:"Selected DEI term intensity"}});let Q=l[5]&&Si(l);Xe=new pt({props:{data:l[5],rowsPerPage:"10",$$slots:{default:[On]},$$scope:{ctx:l}}});let Y=l[6]&&Hi(l);Ze=new pt({props:{data:l[6],rowsPerPage:"25",$$slots:{default:[Un]},$$scope:{ctx:l}}});let J=l[7]&&Ai(l);return et=new pt({props:{data:l[7],rowsPerPage:"25",$$slots:{default:[Kn]},$$scope:{ctx:l}}}),{c(){Pe&&Pe.c(),t=$(),ct.c(),i=H("meta"),e=H("meta"),Fe&&Fe.c(),r=he(),o=$(),s=H("p"),s.innerHTML=a,u=$(),m=H("div"),m.innerHTML=I,_=$(),k=H("div"),k.innerHTML=g,M=$(),h=H("div"),h.innerHTML=C,w=$(),A=H("h2"),A.innerHTML=q,pe=$(),O&&O.c(),le=$(),Z=H("div"),G(de.$$.fragment),ae=$(),G(X.$$.fragment),ge=$(),G(x.$$.fragment),N=$(),ee=H("h3"),ee.innerHTML=ue,te=$(),G(P.$$.fragment),Ee=$(),me=H("h2"),me.innerHTML=Ne,_e=$(),U&&U.c(),T=$(),G(se.$$.fragment),Ce=$(),K&&K.c(),V=$(),ye=H("h3"),ye.innerHTML=De,we=$(),G(be.$$.fragment),Oe=$(),ve=H("p"),ve.textContent=lt,ke=$(),ie=H("h3"),ie.innerHTML=Ue,Ke=$(),G(Te.$$.fragment),We=$(),ne=H("h2"),ne.innerHTML=Re,Ge=$(),Ie=H("p"),Ie.textContent=at,ze=$(),W&&W.c(),L=$(),G(Me.$$.fragment),dt=$(),z&&z.c(),ut=$(),Se=H("h3"),Se.innerHTML=Jt,gt=$(),G(Qe.$$.fragment),bt=$(),Ye=H("p"),Ye.textContent=Xt,ht=$(),Q&&Q.c(),mt=$(),Je=H("p"),Je.textContent=Zt,yt=$(),He=H("h3"),He.innerHTML=xt,$t=$(),G(Xe.$$.fragment),wt=$(),Ae=H("h2"),Ae.innerHTML=ei,vt=$(),Y&&Y.c(),_t=$(),qe=H("h3"),qe.innerHTML=ti,kt=$(),G(Ze.$$.fragment),Tt=$(),Le=H("h2"),Le.innerHTML=ii,It=$(),J&&J.c(),ft=$(),xe=H("p"),xe.textContent=ni,Et=$(),Be=H("h3"),Be.innerHTML=ri,Dt=$(),G(et.$$.fragment),Rt=$(),je=H("h2"),je.innerHTML=si,Gt=$(),tt=H("p"),tt.innerHTML=oi,Mt=$(),it=H("p"),it.innerHTML=li,this.h()},l(n){Pe&&Pe.l(n),t=y(n);const f=Xi("svelte-2igo1p",document.head);ct.l(f),i=S(f,"META",{name:!0,content:!0}),e=S(f,"META",{name:!0,content:!0}),Fe&&Fe.l(f),r=he(),f.forEach(c),o=y(n),s=S(n,"P",{class:!0,"data-svelte-h":!0}),F(s)!=="svelte-hpmy39"&&(s.innerHTML=a),u=y(n),m=S(n,"DIV",{class:!0,"data-svelte-h":!0}),F(m)!=="svelte-1f1diye"&&(m.innerHTML=I),_=y(n),k=S(n,"DIV",{class:!0,"data-svelte-h":!0}),F(k)!=="svelte-1o0na9g"&&(k.innerHTML=g),M=y(n),h=S(n,"DIV",{class:!0,"data-svelte-h":!0}),F(h)!=="svelte-1u08q04"&&(h.innerHTML=C),w=y(n),A=S(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),F(A)!=="svelte-1bhh8vw"&&(A.innerHTML=q),pe=y(n),O&&O.l(n),le=y(n),Z=S(n,"DIV",{class:!0});var Ve=rt(Z);R(de.$$.fragment,Ve),ae=y(Ve),R(X.$$.fragment,Ve),ge=y(Ve),R(x.$$.fragment,Ve),Ve.forEach(c),N=y(n),ee=S(n,"H3",{class:!0,id:!0,"data-svelte-h":!0}),F(ee)!=="svelte-1dccazm"&&(ee.innerHTML=ue),te=y(n),R(P.$$.fragment,n),Ee=y(n),me=S(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),F(me)!=="svelte-136e7x3"&&(me.innerHTML=Ne),_e=y(n),U&&U.l(n),T=y(n),R(se.$$.fragment,n),Ce=y(n),K&&K.l(n),V=y(n),ye=S(n,"H3",{class:!0,id:!0,"data-svelte-h":!0}),F(ye)!=="svelte-1kvkduh"&&(ye.innerHTML=De),we=y(n),R(be.$$.fragment,n),Oe=y(n),ve=S(n,"P",{class:!0,"data-svelte-h":!0}),F(ve)!=="svelte-1rsnnt3"&&(ve.textContent=lt),ke=y(n),ie=S(n,"H3",{class:!0,id:!0,"data-svelte-h":!0}),F(ie)!=="svelte-jxdmqh"&&(ie.innerHTML=Ue),Ke=y(n),R(Te.$$.fragment,n),We=y(n),ne=S(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),F(ne)!=="svelte-1m5tik4"&&(ne.innerHTML=Re),Ge=y(n),Ie=S(n,"P",{class:!0,"data-svelte-h":!0}),F(Ie)!=="svelte-d6wj5t"&&(Ie.textContent=at),ze=y(n),W&&W.l(n),L=y(n),R(Me.$$.fragment,n),dt=y(n),z&&z.l(n),ut=y(n),Se=S(n,"H3",{class:!0,id:!0,"data-svelte-h":!0}),F(Se)!=="svelte-10g8wks"&&(Se.innerHTML=Jt),gt=y(n),R(Qe.$$.fragment,n),bt=y(n),Ye=S(n,"P",{class:!0,"data-svelte-h":!0}),F(Ye)!=="svelte-4pd3xn"&&(Ye.textContent=Xt),ht=y(n),Q&&Q.l(n),mt=y(n),Je=S(n,"P",{class:!0,"data-svelte-h":!0}),F(Je)!=="svelte-6puuyn"&&(Je.textContent=Zt),yt=y(n),He=S(n,"H3",{class:!0,id:!0,"data-svelte-h":!0}),F(He)!=="svelte-wqij3n"&&(He.innerHTML=xt),$t=y(n),R(Xe.$$.fragment,n),wt=y(n),Ae=S(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),F(Ae)!=="svelte-ihpt21"&&(Ae.innerHTML=ei),vt=y(n),Y&&Y.l(n),_t=y(n),qe=S(n,"H3",{class:!0,id:!0,"data-svelte-h":!0}),F(qe)!=="svelte-1np3epw"&&(qe.innerHTML=ti),kt=y(n),R(Ze.$$.fragment,n),Tt=y(n),Le=S(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),F(Le)!=="svelte-11kr2gk"&&(Le.innerHTML=ii),It=y(n),J&&J.l(n),ft=y(n),xe=S(n,"P",{class:!0,"data-svelte-h":!0}),F(xe)!=="svelte-11j84i5"&&(xe.textContent=ni),Et=y(n),Be=S(n,"H3",{class:!0,id:!0,"data-svelte-h":!0}),F(Be)!=="svelte-il47d3"&&(Be.innerHTML=ri),Dt=y(n),R(et.$$.fragment,n),Rt=y(n),je=S(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),F(je)!=="svelte-5tqyr0"&&(je.innerHTML=si),Gt=y(n),tt=S(n,"P",{class:!0,"data-svelte-h":!0}),F(tt)!=="svelte-llf7p7"&&(tt.innerHTML=oi),Mt=y(n),it=S(n,"P",{class:!0,"data-svelte-h":!0}),F(it)!=="svelte-ojatio"&&(it.innerHTML=li),this.h()},h(){v(i,"name","twitter:card"),v(i,"content","summary_large_image"),v(e,"name","twitter:site"),v(e,"content","@evidence_dev"),v(s,"class","markdown"),v(m,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),v(k,"class","text-sm my-3"),v(h,"class","flex flex-wrap gap-x-4 gap-y-2 text-sm border-y border-gray-200 py-3 mb-6"),v(A,"class","markdown"),v(A,"id","headline"),v(Z,"class","grid grid-cols-1 md:grid-cols-3 gap-4 border-b pb-6 mb-8"),v(ee,"class","markdown"),v(ee,"id","table-1-trumpdeilist-shift-share-decomposition"),v(me,"class","markdown"),v(me,"id","monthly-subcategories"),v(ye,"class","markdown"),v(ye,"id","figure-udei-1-selected-dei-subcategory-intensity"),v(ve,"class","text-sm text-gray-600 mt-2"),v(ie,"class","markdown"),v(ie,"id","table-udei-1-selected-dei-subcategory-monthly-values"),v(ne,"class","markdown"),v(ne,"id","individual-terms"),v(Ie,"class","markdown"),v(Se,"class","markdown"),v(Se,"id","figure-udei-2-selected-dei-term-intensity"),v(Ye,"class","text-sm text-gray-600 mt-2"),v(Je,"class","text-sm font-semibold mt-4 mb-2"),v(He,"class","markdown"),v(He,"id","table-udei-2-latest-individual-dei-term-comparison"),v(Ae,"class","markdown"),v(Ae,"id","departments"),v(qe,"class","markdown"),v(qe,"id","table-udei-3-department-rankings-for-selected-dei-subcategory"),v(Le,"class","markdown"),v(Le,"id","occupations"),v(xe,"class","markdown"),v(Be,"class","markdown"),v(Be,"id","table-udei-4-occupation-changes-for-trumpdeilist"),v(je,"class","markdown"),v(je,"id","source-notes"),v(tt,"class","markdown"),v(it,"class","markdown")},m(n,f){Pe&&Pe.m(n,f),p(n,t,f),ct.m(document.head,null),$e(document.head,i),$e(document.head,e),Fe&&Fe.m(document.head,null),$e(document.head,r),p(n,o,f),p(n,s,f),p(n,u,f),p(n,m,f),p(n,_,f),p(n,k,f),p(n,M,f),p(n,h,f),p(n,w,f),p(n,A,f),p(n,pe,f),O&&O.m(n,f),p(n,le,f),p(n,Z,f),D(de,Z,null),$e(Z,ae),D(X,Z,null),$e(Z,ge),D(x,Z,null),p(n,N,f),p(n,ee,f),p(n,te,f),D(P,n,f),p(n,Ee,f),p(n,me,f),p(n,_e,f),U&&U.m(n,f),p(n,T,f),D(se,n,f),p(n,Ce,f),K&&K.m(n,f),p(n,V,f),p(n,ye,f),p(n,we,f),D(be,n,f),p(n,Oe,f),p(n,ve,f),p(n,ke,f),p(n,ie,f),p(n,Ke,f),D(Te,n,f),p(n,We,f),p(n,ne,f),p(n,Ge,f),p(n,Ie,f),p(n,ze,f),W&&W.m(n,f),p(n,L,f),D(Me,n,f),p(n,dt,f),z&&z.m(n,f),p(n,ut,f),p(n,Se,f),p(n,gt,f),D(Qe,n,f),p(n,bt,f),p(n,Ye,f),p(n,ht,f),Q&&Q.m(n,f),p(n,mt,f),p(n,Je,f),p(n,yt,f),p(n,He,f),p(n,$t,f),D(Xe,n,f),p(n,wt,f),p(n,Ae,f),p(n,vt,f),Y&&Y.m(n,f),p(n,_t,f),p(n,qe,f),p(n,kt,f),D(Ze,n,f),p(n,Tt,f),p(n,Le,f),p(n,It,f),J&&J.m(n,f),p(n,ft,f),p(n,xe,f),p(n,Et,f),p(n,Be,f),p(n,Dt,f),D(et,n,f),p(n,Rt,f),p(n,je,f),p(n,Gt,f),p(n,tt,f),p(n,Mt,f),p(n,it,f),Ct=!0},p(n,f){typeof B<"u"&&B.title&&B.hide_title!==!0&&Pe.p(n,f),ct.p(n,f),typeof B=="object"&&Fe.p(n,f),n[0]?O?(O.p(n,f),f[0]&1&&d(O,1)):(O=Di(n),O.c(),d(O,1),O.m(le.parentNode,le)):O&&(fe(),b(O,1,1,()=>{O=null}),ce());const Ve={};f[0]&1&&(Ve.data=n[0]),de.$set(Ve);const ai={};f[0]&1&&(ai.data=n[0]),X.$set(ai);const ui={};f[0]&1&&(ui.data=n[0]),x.$set(ui);const Pt={};f[0]&1&&(Pt.data=n[0]),f[1]&536870912&&(Pt.$$scope={dirty:f,ctx:n}),P.$set(Pt),n[1]?U?(U.p(n,f),f[0]&2&&d(U,1)):(U=Ri(n),U.c(),d(U,1),U.m(T.parentNode,T)):U&&(fe(),b(U,1,1,()=>{U=null}),ce());const mi={};f[0]&2&&(mi.data=n[1]),se.$set(mi),n[2]?K?(K.p(n,f),f[0]&4&&d(K,1)):(K=Gi(n),K.c(),d(K,1),K.m(V.parentNode,V)):K&&(fe(),b(K,1,1,()=>{K=null}),ce());const _i={};f[0]&4&&(_i.data=n[2]),be.$set(_i);const Ft={};f[0]&4&&(Ft.data=n[2]),f[1]&536870912&&(Ft.$$scope={dirty:f,ctx:n}),Te.$set(Ft),n[3]?W?(W.p(n,f),f[0]&8&&d(W,1)):(W=Mi(n),W.c(),d(W,1),W.m(L.parentNode,L)):W&&(fe(),b(W,1,1,()=>{W=null}),ce());const fi={};f[0]&8&&(fi.data=n[3]),Me.$set(fi),n[4]?z?(z.p(n,f),f[0]&16&&d(z,1)):(z=Ci(n),z.c(),d(z,1),z.m(ut.parentNode,ut)):z&&(fe(),b(z,1,1,()=>{z=null}),ce());const ci={};f[0]&16&&(ci.data=n[4]),Qe.$set(ci),n[5]?Q?(Q.p(n,f),f[0]&32&&d(Q,1)):(Q=Si(n),Q.c(),d(Q,1),Q.m(mt.parentNode,mt)):Q&&(fe(),b(Q,1,1,()=>{Q=null}),ce());const Vt={};f[0]&32&&(Vt.data=n[5]),f[1]&536870912&&(Vt.$$scope={dirty:f,ctx:n}),Xe.$set(Vt),n[6]?Y?(Y.p(n,f),f[0]&64&&d(Y,1)):(Y=Hi(n),Y.c(),d(Y,1),Y.m(_t.parentNode,_t)):Y&&(fe(),b(Y,1,1,()=>{Y=null}),ce());const Nt={};f[0]&64&&(Nt.data=n[6]),f[1]&536870912&&(Nt.$$scope={dirty:f,ctx:n}),Ze.$set(Nt),n[7]?J?(J.p(n,f),f[0]&128&&d(J,1)):(J=Ai(n),J.c(),d(J,1),J.m(ft.parentNode,ft)):J&&(fe(),b(J,1,1,()=>{J=null}),ce());const Ot={};f[0]&128&&(Ot.data=n[7]),f[1]&536870912&&(Ot.$$scope={dirty:f,ctx:n}),et.$set(Ot)},i(n){Ct||(d(O),d(de.$$.fragment,n),d(X.$$.fragment,n),d(x.$$.fragment,n),d(P.$$.fragment,n),d(U),d(se.$$.fragment,n),d(K),d(be.$$.fragment,n),d(Te.$$.fragment,n),d(W),d(Me.$$.fragment,n),d(z),d(Qe.$$.fragment,n),d(Q),d(Xe.$$.fragment,n),d(Y),d(Ze.$$.fragment,n),d(J),d(et.$$.fragment,n),Ct=!0)},o(n){b(O),b(de.$$.fragment,n),b(X.$$.fragment,n),b(x.$$.fragment,n),b(P.$$.fragment,n),b(U),b(se.$$.fragment,n),b(K),b(be.$$.fragment,n),b(Te.$$.fragment,n),b(W),b(Me.$$.fragment,n),b(z),b(Qe.$$.fragment,n),b(Q),b(Xe.$$.fragment,n),b(Y),b(Ze.$$.fragment,n),b(J),b(et.$$.fragment,n),Ct=!1},d(n){n&&(c(t),c(o),c(s),c(u),c(m),c(_),c(k),c(M),c(h),c(w),c(A),c(pe),c(le),c(Z),c(N),c(ee),c(te),c(Ee),c(me),c(_e),c(T),c(Ce),c(V),c(ye),c(we),c(Oe),c(ve),c(ke),c(ie),c(Ke),c(We),c(ne),c(Ge),c(Ie),c(ze),c(L),c(dt),c(ut),c(Se),c(gt),c(bt),c(Ye),c(ht),c(mt),c(Je),c(yt),c(He),c($t),c(wt),c(Ae),c(vt),c(_t),c(qe),c(kt),c(Tt),c(Le),c(It),c(ft),c(xe),c(Et),c(Be),c(Dt),c(Rt),c(je),c(Gt),c(tt),c(Mt),c(it)),Pe&&Pe.d(n),ct.d(n),c(i),c(e),Fe&&Fe.d(n),c(r),O&&O.d(n),E(de),E(X),E(x),E(P,n),U&&U.d(n),E(se,n),K&&K.d(n),E(be,n),E(Te,n),W&&W.d(n),E(Me,n),z&&z.d(n),E(Qe,n),Q&&Q.d(n),E(Xe,n),Y&&Y.d(n),E(Ze,n),J&&J.d(n),E(et,n)}}}const B={title:"DEI Profiler"};function zn(l,t,i){let e,r;ot(l,Vi,L=>i(43,e=L)),ot(l,gi,L=>i(48,r=L));let{data:o}=t,{data:s={},customFormattingSettings:a,__db:u,inputs:m}=o;Kt(gi,r="e93b0df0fdb96f974087d1d5fd0519f6",r);let I=ln(Fi(m));Zi(I.subscribe(L=>i(10,m=L))),zt(mn,{getCustomFormats:()=>a.customFormats||[]});const _=(L,Me)=>pn(u.query,L,{query_name:Me});an(_),e.params,xi(()=>!0);let k={initialData:void 0,initialError:void 0},g=oe`select
  corpus_rate_pre,
  corpus_rate_post,
  total_change,
  within,
  composition,
  interaction,
  pct_within,
  pct_composition,
  pct_interaction
from usajobs.AGGR_DEIShiftShare`,M=`select
  corpus_rate_pre,
  corpus_rate_post,
  total_change,
  within,
  composition,
  interaction,
  pct_within,
  pct_composition,
  pct_interaction
from usajobs.AGGR_DEIShiftShare`;s.dei_shift_share_data&&(s.dei_shift_share_data instanceof Error?k.initialError=s.dei_shift_share_data:k.initialData=s.dei_shift_share_data,s.dei_shift_share_columns&&(k.knownColumns=s.dei_shift_share_columns));let h,C=!1;const w=nt.createReactive({callback:L=>{i(0,h=L)},execFn:_},{id:"dei_shift_share",...k});w(M,{noResolve:g,...k}),globalThis[Symbol.for("dei_shift_share")]={get value(){return h}};let A={initialData:void 0,initialError:void 0},q=oe`select distinct subcategory
from usajobs.AGGR_DEIBySubcatMonth
order by subcategory`,pe=`select distinct subcategory
from usajobs.AGGR_DEIBySubcatMonth
order by subcategory`;s.dei_subcategory_options_data&&(s.dei_subcategory_options_data instanceof Error?A.initialError=s.dei_subcategory_options_data:A.initialData=s.dei_subcategory_options_data,s.dei_subcategory_options_columns&&(A.knownColumns=s.dei_subcategory_options_columns));let le,Z=!1;const de=nt.createReactive({callback:L=>{i(1,le=L)},execFn:_},{id:"dei_subcategory_options",...A});de(pe,{noResolve:q,...A}),globalThis[Symbol.for("dei_subcategory_options")]={get value(){return le}};let ae={initialData:void 0,initialError:void 0},X=oe`select
  month_start,
  subcategory,
  n_postings_with_concept,
  n_mentions,
  n_postings_month,
  pct_postings,
  mentions_per_posting
from usajobs.AGGR_DEIBySubcatMonth
where subcategory = '${m.dei_subcategory.value}'
order by month_start`,ge=`select
  month_start,
  subcategory,
  n_postings_with_concept,
  n_mentions,
  n_postings_month,
  pct_postings,
  mentions_per_posting
from usajobs.AGGR_DEIBySubcatMonth
where subcategory = '${m.dei_subcategory.value}'
order by month_start`;s.dei_subcategory_monthly_data&&(s.dei_subcategory_monthly_data instanceof Error?ae.initialError=s.dei_subcategory_monthly_data:ae.initialData=s.dei_subcategory_monthly_data,s.dei_subcategory_monthly_columns&&(ae.knownColumns=s.dei_subcategory_monthly_columns));let x,N=!1;const ee=nt.createReactive({callback:L=>{i(2,x=L)},execFn:_},{id:"dei_subcategory_monthly",...ae});ee(ge,{noResolve:X,...ae}),globalThis[Symbol.for("dei_subcategory_monthly")]={get value(){return x}};let ue={initialData:void 0,initialError:void 0},te=oe`select distinct
  term,
  upper(substr(term, 1, 1)) || substr(term, 2) as term_label
from usajobs.AGGR_DEIKeyTermsByMonth
order by term`,P=`select distinct
  term,
  upper(substr(term, 1, 1)) || substr(term, 2) as term_label
from usajobs.AGGR_DEIKeyTermsByMonth
order by term`;s.dei_term_options_data&&(s.dei_term_options_data instanceof Error?ue.initialError=s.dei_term_options_data:ue.initialData=s.dei_term_options_data,s.dei_term_options_columns&&(ue.knownColumns=s.dei_term_options_columns));let Ee,me=!1;const Ne=nt.createReactive({callback:L=>{i(3,Ee=L)},execFn:_},{id:"dei_term_options",...ue});Ne(P,{noResolve:te,...ue}),globalThis[Symbol.for("dei_term_options")]={get value(){return Ee}};let _e={initialData:void 0,initialError:void 0},T=oe`select
  month_start,
  term,
  n_postings_with_term,
  mentions,
  n_postings_month,
  share_postings_with_term,
  mentions_per_posting
from usajobs.AGGR_DEIKeyTermsByMonth
where term = case
  when '${m.dei_term.value}' in ('deia', 'diversity', 'equity', 'inclusion')
    then '${m.dei_term.value}'
  else 'diversity'
end
order by month_start`,se=`select
  month_start,
  term,
  n_postings_with_term,
  mentions,
  n_postings_month,
  share_postings_with_term,
  mentions_per_posting
from usajobs.AGGR_DEIKeyTermsByMonth
where term = case
  when '${m.dei_term.value}' in ('deia', 'diversity', 'equity', 'inclusion')
    then '${m.dei_term.value}'
  else 'diversity'
end
order by month_start`;s.dei_term_monthly_data&&(s.dei_term_monthly_data instanceof Error?_e.initialError=s.dei_term_monthly_data:_e.initialData=s.dei_term_monthly_data,s.dei_term_monthly_columns&&(_e.knownColumns=s.dei_term_monthly_columns));let Ce,V=!1;const ye=nt.createReactive({callback:L=>{i(4,Ce=L)},execFn:_},{id:"dei_term_monthly",..._e});ye(se,{noResolve:T,..._e}),globalThis[Symbol.for("dei_term_monthly")]={get value(){return Ce}};let De={initialData:void 0,initialError:void 0},we=oe`with latest_month as (
  select max(month_start) as month_start
  from usajobs.AGGR_DEIKeyTermsByMonth
),
latest as (
  select
    term,
    n_postings_with_term,
    mentions,
    n_postings_month,
    share_postings_with_term,
    mentions_per_posting
  from usajobs.AGGR_DEIKeyTermsByMonth
  where month_start = (select month_start from latest_month)
)
select *
from latest
order by mentions_per_posting desc, mentions desc`,be=`with latest_month as (
  select max(month_start) as month_start
  from usajobs.AGGR_DEIKeyTermsByMonth
),
latest as (
  select
    term,
    n_postings_with_term,
    mentions,
    n_postings_month,
    share_postings_with_term,
    mentions_per_posting
  from usajobs.AGGR_DEIKeyTermsByMonth
  where month_start = (select month_start from latest_month)
)
select *
from latest
order by mentions_per_posting desc, mentions desc`;s.dei_term_latest_comparison_data&&(s.dei_term_latest_comparison_data instanceof Error?De.initialError=s.dei_term_latest_comparison_data:De.initialData=s.dei_term_latest_comparison_data,s.dei_term_latest_comparison_columns&&(De.knownColumns=s.dei_term_latest_comparison_columns));let Oe,ve=!1;const lt=nt.createReactive({callback:L=>{i(5,Oe=L)},execFn:_},{id:"dei_term_latest_comparison",...De});lt(be,{noResolve:we,...De}),globalThis[Symbol.for("dei_term_latest_comparison")]={get value(){return Oe}};let ke={initialData:void 0,initialError:void 0},ie=oe`select
  dept_code,
  dept_name,
  subcategory,
  n_postings_with_concept,
  n_postings,
  pct_postings
from usajobs.AGGR_DEIByDeptSubcat
where subcategory = '${m.dei_subcategory.value}'
order by pct_postings desc, n_postings_with_concept desc
limit 50`,Ue=`select
  dept_code,
  dept_name,
  subcategory,
  n_postings_with_concept,
  n_postings,
  pct_postings
from usajobs.AGGR_DEIByDeptSubcat
where subcategory = '${m.dei_subcategory.value}'
order by pct_postings desc, n_postings_with_concept desc
limit 50`;s.dei_department_rankings_data&&(s.dei_department_rankings_data instanceof Error?ke.initialError=s.dei_department_rankings_data:ke.initialData=s.dei_department_rankings_data,s.dei_department_rankings_columns&&(ke.knownColumns=s.dei_department_rankings_columns));let Ke,Te=!1;const We=nt.createReactive({callback:L=>{i(6,Ke=L)},execFn:_},{id:"dei_department_rankings",...ke});We(Ue,{noResolve:ie,...ke}),globalThis[Symbol.for("dei_department_rankings")]={get value(){return Ke}};let ne={initialData:void 0,initialError:void 0},Re=oe`select
  occ8,
  soc_title,
  pre_postings,
  post_postings,
  pre_rate,
  post_rate,
  pct_change,
  rate_delta
from usajobs.AGGR_DEIWithinOccupation
where pre_postings >= 100
  and post_postings >= 100
order by rate_delta asc
limit 50`,Ge=`select
  occ8,
  soc_title,
  pre_postings,
  post_postings,
  pre_rate,
  post_rate,
  pct_change,
  rate_delta
from usajobs.AGGR_DEIWithinOccupation
where pre_postings >= 100
  and post_postings >= 100
order by rate_delta asc
limit 50`;s.dei_occupation_changes_data&&(s.dei_occupation_changes_data instanceof Error?ne.initialError=s.dei_occupation_changes_data:ne.initialData=s.dei_occupation_changes_data,s.dei_occupation_changes_columns&&(ne.knownColumns=s.dei_occupation_changes_columns));let Ie,at=!1;const ze=nt.createReactive({callback:L=>{i(7,Ie=L)},execFn:_},{id:"dei_occupation_changes",...ne});return ze(Ge,{noResolve:Re,...ne}),globalThis[Symbol.for("dei_occupation_changes")]={get value(){return Ie}},l.$$set=L=>{"data"in L&&i(8,o=L.data)},l.$$.update=()=>{l.$$.dirty[0]&256&&i(9,{data:s={},customFormattingSettings:a,__db:u}=o,s),l.$$.dirty[0]&512&&un.set(Object.keys(s).length>0),l.$$.dirty[1]&4096&&e.params,l.$$.dirty[0]&30720&&(g||!C?g||(w(M,{noResolve:g,...k}),i(14,C=!0)):w(M,{noResolve:g})),l.$$.dirty[0]&491520&&(q||!Z?q||(de(pe,{noResolve:q,...A}),i(18,Z=!0)):de(pe,{noResolve:q})),l.$$.dirty[0]&1024&&i(20,X=oe`select
  month_start,
  subcategory,
  n_postings_with_concept,
  n_mentions,
  n_postings_month,
  pct_postings,
  mentions_per_posting
from usajobs.AGGR_DEIBySubcatMonth
where subcategory = '${m.dei_subcategory.value}'
order by month_start`),l.$$.dirty[0]&1024&&i(21,ge=`select
  month_start,
  subcategory,
  n_postings_with_concept,
  n_mentions,
  n_postings_month,
  pct_postings,
  mentions_per_posting
from usajobs.AGGR_DEIBySubcatMonth
where subcategory = '${m.dei_subcategory.value}'
order by month_start`),l.$$.dirty[0]&7864320&&(X||!N?X||(ee(ge,{noResolve:X,...ae}),i(22,N=!0)):ee(ge,{noResolve:X})),l.$$.dirty[0]&125829120&&(te||!me?te||(Ne(P,{noResolve:te,...ue}),i(26,me=!0)):Ne(P,{noResolve:te})),l.$$.dirty[0]&1024&&i(28,T=oe`select
  month_start,
  term,
  n_postings_with_term,
  mentions,
  n_postings_month,
  share_postings_with_term,
  mentions_per_posting
from usajobs.AGGR_DEIKeyTermsByMonth
where term = case
  when '${m.dei_term.value}' in ('deia', 'diversity', 'equity', 'inclusion')
    then '${m.dei_term.value}'
  else 'diversity'
end
order by month_start`),l.$$.dirty[0]&1024&&i(29,se=`select
  month_start,
  term,
  n_postings_with_term,
  mentions,
  n_postings_month,
  share_postings_with_term,
  mentions_per_posting
from usajobs.AGGR_DEIKeyTermsByMonth
where term = case
  when '${m.dei_term.value}' in ('deia', 'diversity', 'equity', 'inclusion')
    then '${m.dei_term.value}'
  else 'diversity'
end
order by month_start`),l.$$.dirty[0]&2013265920&&(T||!V?T||(ye(se,{noResolve:T,..._e}),i(30,V=!0)):ye(se,{noResolve:T})),l.$$.dirty[1]&15&&(we||!ve?we||(lt(be,{noResolve:we,...De}),i(34,ve=!0)):lt(be,{noResolve:we})),l.$$.dirty[0]&1024&&i(36,ie=oe`select
  dept_code,
  dept_name,
  subcategory,
  n_postings_with_concept,
  n_postings,
  pct_postings
from usajobs.AGGR_DEIByDeptSubcat
where subcategory = '${m.dei_subcategory.value}'
order by pct_postings desc, n_postings_with_concept desc
limit 50`),l.$$.dirty[0]&1024&&i(37,Ue=`select
  dept_code,
  dept_name,
  subcategory,
  n_postings_with_concept,
  n_postings,
  pct_postings
from usajobs.AGGR_DEIByDeptSubcat
where subcategory = '${m.dei_subcategory.value}'
order by pct_postings desc, n_postings_with_concept desc
limit 50`),l.$$.dirty[1]&240&&(ie||!Te?ie||(We(Ue,{noResolve:ie,...ke}),i(38,Te=!0)):We(Ue,{noResolve:ie})),l.$$.dirty[1]&3840&&(Re||!at?Re||(ze(Ge,{noResolve:Re,...ne}),i(42,at=!0)):ze(Ge,{noResolve:Re}))},i(12,g=oe`select
  corpus_rate_pre,
  corpus_rate_post,
  total_change,
  within,
  composition,
  interaction,
  pct_within,
  pct_composition,
  pct_interaction
from usajobs.AGGR_DEIShiftShare`),i(13,M=`select
  corpus_rate_pre,
  corpus_rate_post,
  total_change,
  within,
  composition,
  interaction,
  pct_within,
  pct_composition,
  pct_interaction
from usajobs.AGGR_DEIShiftShare`),i(16,q=oe`select distinct subcategory
from usajobs.AGGR_DEIBySubcatMonth
order by subcategory`),i(17,pe=`select distinct subcategory
from usajobs.AGGR_DEIBySubcatMonth
order by subcategory`),i(24,te=oe`select distinct
  term,
  upper(substr(term, 1, 1)) || substr(term, 2) as term_label
from usajobs.AGGR_DEIKeyTermsByMonth
order by term`),i(25,P=`select distinct
  term,
  upper(substr(term, 1, 1)) || substr(term, 2) as term_label
from usajobs.AGGR_DEIKeyTermsByMonth
order by term`),i(32,we=oe`with latest_month as (
  select max(month_start) as month_start
  from usajobs.AGGR_DEIKeyTermsByMonth
),
latest as (
  select
    term,
    n_postings_with_term,
    mentions,
    n_postings_month,
    share_postings_with_term,
    mentions_per_posting
  from usajobs.AGGR_DEIKeyTermsByMonth
  where month_start = (select month_start from latest_month)
)
select *
from latest
order by mentions_per_posting desc, mentions desc`),i(33,be=`with latest_month as (
  select max(month_start) as month_start
  from usajobs.AGGR_DEIKeyTermsByMonth
),
latest as (
  select
    term,
    n_postings_with_term,
    mentions,
    n_postings_month,
    share_postings_with_term,
    mentions_per_posting
  from usajobs.AGGR_DEIKeyTermsByMonth
  where month_start = (select month_start from latest_month)
)
select *
from latest
order by mentions_per_posting desc, mentions desc`),i(40,Re=oe`select
  occ8,
  soc_title,
  pre_postings,
  post_postings,
  pre_rate,
  post_rate,
  pct_change,
  rate_delta
from usajobs.AGGR_DEIWithinOccupation
where pre_postings >= 100
  and post_postings >= 100
order by rate_delta asc
limit 50`),i(41,Ge=`select
  occ8,
  soc_title,
  pre_postings,
  post_postings,
  pre_rate,
  post_rate,
  pct_change,
  rate_delta
from usajobs.AGGR_DEIWithinOccupation
where pre_postings >= 100
  and post_postings >= 100
order by rate_delta asc
limit 50`),[h,le,x,Ee,Ce,Oe,Ke,Ie,o,s,m,k,g,M,C,A,q,pe,Z,ae,X,ge,N,ue,te,P,me,_e,T,se,V,De,we,be,ve,ke,ie,Ue,Te,ne,Re,Ge,at,e]}class ar extends Bt{constructor(t){super(),jt(this,t,zn,Wn,At,{data:8},null,[-1,-1])}}export{ar as component};
