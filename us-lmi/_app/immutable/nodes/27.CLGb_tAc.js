import{p as Kt,K as Ci,s as Ct,d as c,E as Wt,b as v,U as Mt,i as p,a as $e,z as Hi,e as H,j as nt,t as Ht,c as y,l as A,u as At,k as $,r as re,H as Ai,B as Ni,f as he,m as st,W as Oi,n as Ot,X as qi,v as Ui,w as Ki,x as Wi,y as zi,h as Qi,g as V,o as Yi,q as Xi}from"../chunks/scheduler.DhBftCKw.js";import{S as qt,i as Lt,t as b,a as d,g as fe,c as ce,d as I,m as D,b as R,e as G}from"../chunks/index.BUvAr1Xw.js";import{g as zt,A as _i,M as Li,t as Ji,N as Zi,m as St,Q as xi,D as ct,C as j}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.B0mztXUO.js";import{r as en,w as Bi}from"../chunks/entry.BMENagX9.js";import{g as tn,d as nn,e as rn,s as sn,Q as it,p as on,a as fi,r as ci,C as ln}from"../chunks/inferColumnTypes.D6fZb62q.js";import{h as oe}from"../chunks/setTrackProxy.Cyfckp0w.js";import{H as an,D as un}from"../chunks/Dropdown.D0da1eQh.js";import{p as ji}from"../chunks/stores.DdIem69U.js";import{c as mn}from"../chunks/checkRequiredProps.o_C_V3S5.js";import{Q as rt}from"../chunks/QueryViewer.ZRKlIdUM.js";import{B as Nt}from"../chunks/BigValue.3PBU2Erq.js";import{L as pi}from"../chunks/LineChart.DcqOcd8C.js";import{p as _n}from"../chunks/profile.BW8tN6E9.js";const Pi="__EVIDENCE_BUTTON_GROUP_CONTEXT",fn=()=>Ci(Pi),cn=(l,t)=>Kt(Pi,{update:l,value:t}),Ut={dates:[{valueLabel:"Week",value:"7 days"},{valueLabel:"Month",value:"1 month"},{valueLabel:"Year",value:"1 year"}]};function di(l){let t,i;return t=new Li({props:{description:l[3]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r&8&&(o.description=e[3]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){I(t,e)}}}function pn(l){let t,i,e,r,o,s,a,u=l[3]&&di(l);return{c(){t=A("button"),i=At(l[1]),e=$(),u&&u.c(),this.h()},l(m){t=H(m,"BUTTON",{class:!0});var E=nt(t);i=Ht(E,l[1]),e=y(E),u&&u.l(E),E.forEach(c),this.h()},h(){v(t,"class",r="px-3 mt-2 py-2 text-center rounded-t text-sm font-medium font-sans whitespace-nowrap "+(l[2]===l[0]?`transition ease-in ${l[8].active}`:l[8].notActive)+" "+(l[4]?"flex-1":"")),Mt(t,"--bgColor",l[6]),Mt(t,"--activeColor",l[5])},m(m,E){p(m,t,E),$e(t,i),$e(t,e),u&&u.m(t,null),o=!0,s||(a=Hi(t,"click",l[12]),s=!0)},p(m,[E]){(!o||E&2)&&Wt(i,m[1]),m[3]?u?(u.p(m,E),E&8&&d(u,1)):(u=di(m),u.c(),d(u,1),u.m(t,null)):u&&(fe(),b(u,1,1,()=>{u=null}),ce()),(!o||E&21&&r!==(r="px-3 mt-2 py-2 text-center rounded-t text-sm font-medium font-sans whitespace-nowrap "+(m[2]===m[0]?`transition ease-in ${m[8].active}`:m[8].notActive)+" "+(m[4]?"flex-1":"")))&&v(t,"class",r),E&64&&Mt(t,"--bgColor",m[6]),E&32&&Mt(t,"--activeColor",m[5])},i(m){o||(d(u),o=!0)},o(m){b(u),o=!1},d(m){m&&c(t),u&&u.d(),s=!1,a()}}}function dn(l,t,i){let e,r,o,s,a=re,u=()=>(a(),a=Ai(e,q=>i(11,s=q)),e);l.$$.on_destroy.push(()=>a());const{resolveColor:m}=zt();let{color:E="base-content"}=t,{id:_}=t,{label:k}=t,{activeId:g}=t,{description:M=void 0}=t,{fullWidth:h}=t,{background:S}=t;const w={notActive:"border-b border-base-100 text-base-content-muted hover:text-base-content hover:border-base-300",active:`border-b-2 border-[--activeColor] -mb-px text-[--activeColor] ${S?"bg-[--bgColor]":""}`};function C(q){Ni.call(this,l,q)}return l.$$set=q=>{"color"in q&&i(9,E=q.color),"id"in q&&i(0,_=q.id),"label"in q&&i(1,k=q.label),"activeId"in q&&i(2,g=q.activeId),"description"in q&&i(3,M=q.description),"fullWidth"in q&&i(4,h=q.fullWidth),"background"in q&&i(10,S=q.background)},l.$$.update=()=>{l.$$.dirty&512&&u(i(7,e=m(E))),l.$$.dirty&2048&&i(6,r=_i(s).alpha(.05).css()),l.$$.dirty&2048&&i(5,o=_i(s).css())},[_,k,g,M,h,o,r,e,w,E,S,s,C]}class gn extends qt{constructor(t){super(),Lt(this,t,dn,pn,Ct,{color:9,id:0,label:1,activeId:2,description:3,fullWidth:4,background:10})}}function bn(l){let t,i,e,r,o;return{c(){t=A("button"),i=At(l[0]),this.h()},l(s){t=H(s,"BUTTON",{type:!0,class:!0});var a=nt(t);i=Ht(a,l[0]),a.forEach(c),this.h()},h(){var s;v(t,"type","button"),v(t,"class",e="flex-none py-1 font-medium px-3 text-xs truncate border-r last:border-none border-base-300 hover:bg-base-200 focus:z-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-base-300 "+(((s=l[3])==null?void 0:s.value)===l[1]?"z-10 bg-base-200 text-primary":"z-0 bg-base-100"))},m(s,a){p(s,t,a),$e(t,i),r||(o=Hi(t,"click",l[11]),r=!0)},p(s,a){var u;a&1&&Wt(i,s[0]),a&10&&e!==(e="flex-none py-1 font-medium px-3 text-xs truncate border-r last:border-none border-base-300 hover:bg-base-200 focus:z-10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-base-300 "+(((u=s[3])==null?void 0:u.value)===s[1]?"z-10 bg-base-200 text-primary":"z-0 bg-base-100"))&&v(t,"class",e)},i:re,o:re,d(s){s&&c(t),r=!1,o()}}}function hn(l){var e;let t,i;return t=new gn({props:{id:l[1],label:l[0],color:l[2],activeId:(e=l[3])==null?void 0:e.value}}),t.$on("click",l[10]),{c(){G(t.$$.fragment)},l(r){R(t.$$.fragment,r)},m(r,o){D(t,r,o),i=!0},p(r,o){var a;const s={};o&2&&(s.id=r[1]),o&1&&(s.label=r[0]),o&4&&(s.color=r[2]),o&8&&(s.activeId=(a=r[3])==null?void 0:a.value),t.$set(s)},i(r){i||(d(t.$$.fragment,r),i=!0)},o(r){b(t.$$.fragment,r),i=!1},d(r){I(t,r)}}}function yn(l){let t,i,e,r;const o=[hn,bn],s=[];function a(u,m){return u[4]==="tabs"?0:u[4]==="buttons"?1:-1}return~(t=a(l))&&(i=s[t]=o[t](l)),{c(){i&&i.c(),e=he()},l(u){i&&i.l(u),e=he()},m(u,m){~t&&s[t].m(u,m),p(u,e,m),r=!0},p(u,[m]){i&&i.p(u,m)},i(u){r||(d(i),r=!0)},o(u){b(i),r=!1},d(u){u&&c(e),~t&&s[t].d(u)}}}function $n(l,t,i){let e,r;const{resolveColor:o}=zt();let{valueLabel:s}=t,{value:a}=t,{color:u="hsla(207, 65%, 39%, 1)"}=t,{defaultValue:m}=t,E=Ci("button-display");const{update:_,value:k}=fn();st(l,k,S=>i(3,r=S));let{default:g=!1}=t;g&&_({valueLabel:s,value:a}),m===a&&_({valueLabel:s,value:a});const M=()=>_({valueLabel:s,value:a}),h=()=>_({valueLabel:s,value:a});return l.$$set=S=>{"valueLabel"in S&&i(0,s=S.valueLabel),"value"in S&&i(1,a=S.value),"color"in S&&i(7,u=S.color),"defaultValue"in S&&i(8,m=S.defaultValue),"default"in S&&i(9,g=S.default)},l.$$.update=()=>{l.$$.dirty&128&&i(2,e=o(u))},[s,a,e,r,E,_,k,u,m,g,M,h]}class Fi extends qt{constructor(t){super(),Lt(this,t,$n,yn,Ct,{valueLabel:0,value:1,color:7,defaultValue:8,default:9})}}function gi(l,t,i){const e=l.slice();return e[7]=t[i].label,e[6]=t[i].value,e}const wn=l=>({display:l[0]&8}),bi=l=>({display:l[3]});function hi(l,t,i){const e=l.slice();return e[6]=t[i].value,e[31]=t[i].valueLabel,e}function vn(l){let t,i;return t=new an({props:{enabled:l[0],$$slots:{default:[Rn]},$$scope:{ctx:l}}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&1&&(o.enabled=e[0]),r[0]&8390462&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){I(t,e)}}}function kn(l){let t,i;return t=new Zi({props:{inputType:"ButtonGroup",error:l[13],height:"32",width:"170"}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p:re,i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){I(t,e)}}}function yi(l){let t,i,e,r,o=l[5]&&$i(l);return{c(){t=A("span"),i=At(l[1]),e=$(),o&&o.c(),this.h()},l(s){t=H(s,"SPAN",{class:!0});var a=nt(t);i=Ht(a,l[1]),e=y(a),o&&o.l(a),a.forEach(c),this.h()},h(){v(t,"class","text-xs font-medium text-base-content block mb-0.5")},m(s,a){p(s,t,a),$e(t,i),$e(t,e),o&&o.m(t,null),r=!0},p(s,a){(!r||a[0]&2)&&Wt(i,s[1]),s[5]?o?(o.p(s,a),a[0]&32&&d(o,1)):(o=$i(s),o.c(),d(o,1),o.m(t,null)):o&&(fe(),b(o,1,1,()=>{o=null}),ce())},i(s){r||(d(o),r=!0)},o(s){b(o),r=!1},d(s){s&&c(t),o&&o.d()}}}function $i(l){let t,i;return t=new Li({props:{description:l[5]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&32&&(o.description=e[5]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){I(t,e)}}}function Tn(l){let t,i,e;const r=l[22].default,o=Ui(r,l,l[23],bi);let s=l[9]&&wi(l);return{c(){o&&o.c(),t=$(),s&&s.c(),i=he()},l(a){o&&o.l(a),t=y(a),s&&s.l(a),i=he()},m(a,u){o&&o.m(a,u),p(a,t,u),s&&s.m(a,u),p(a,i,u),e=!0},p(a,u){o&&o.p&&(!e||u[0]&8388616)&&Ki(o,r,a,a[23],e?zi(r,a[23],u,wn):Wi(a[23]),bi),a[9]?s?(s.p(a,u),u[0]&512&&d(s,1)):(s=wi(a),s.c(),d(s,1),s.m(i.parentNode,i)):s&&(fe(),b(s,1,1,()=>{s=null}),ce())},i(a){e||(d(o,a),d(s),e=!0)},o(a){b(o,a),b(s),e=!1},d(a){a&&(c(t),c(i)),o&&o.d(a),s&&s.d(a)}}}function En(l){let t,i,e=St(Ut[l[2]]),r=[];for(let s=0;s<e.length;s+=1)r[s]=ki(hi(l,e,s));const o=s=>b(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();t=he()},l(s){for(let a=0;a<r.length;a+=1)r[a].l(s);t=he()},m(s,a){for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(s,a);p(s,t,a),i=!0},p(s,a){if(a[0]&1052){e=St(Ut[s[2]]);let u;for(u=0;u<e.length;u+=1){const m=hi(s,e,u);r[u]?(r[u].p(m,a),d(r[u],1)):(r[u]=ki(m),r[u].c(),d(r[u],1),r[u].m(t.parentNode,t))}for(fe(),u=e.length;u<r.length;u+=1)o(u);ce()}},i(s){if(!i){for(let a=0;a<e.length;a+=1)d(r[a]);i=!0}},o(s){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)b(r[a]);i=!1},d(s){s&&c(t),qi(r,s)}}}function wi(l){let t,i;return t=new xi({props:{data:l[8],$$slots:{default:[Dn,({loaded:e})=>({34:e}),({loaded:e})=>[0,e?8:0]],skeleton:[In]},$$scope:{ctx:l}}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&256&&(o.data=e[8]),r[0]&8389656|r[1]&8&&(o.$$scope={dirty:r,ctx:e}),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){I(t,e)}}}function In(l){let t;return{c(){t=A("div"),this.h()},l(i){t=H(i,"DIV",{class:!0}),nt(t).forEach(c),this.h()},h(){v(t,"class","h-8 min-w-24 w-full max-width-24 block animate-pulse bg-base-300")},m(i,e){p(i,t,e)},p:re,d(i){i&&c(t)}}}function vi(l){let t,i;return t=new Fi({props:{data:l[34],value:l[6],valueLabel:l[7],color:l[10],display:l[3],defaultValue:l[4]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[1]&8&&(o.data=e[34]),r[1]&8&&(o.value=e[6]),r[1]&8&&(o.valueLabel=e[7]),r[0]&1024&&(o.color=e[10]),r[0]&8&&(o.display=e[3]),r[0]&16&&(o.defaultValue=e[4]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){I(t,e)}}}function Dn(l){let t,i,e=St(l[34]),r=[];for(let s=0;s<e.length;s+=1)r[s]=vi(gi(l,e,s));const o=s=>b(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();t=he()},l(s){for(let a=0;a<r.length;a+=1)r[a].l(s);t=he()},m(s,a){for(let u=0;u<r.length;u+=1)r[u]&&r[u].m(s,a);p(s,t,a),i=!0},p(s,a){if(a[0]&1048|a[1]&8){e=St(s[34]);let u;for(u=0;u<e.length;u+=1){const m=gi(s,e,u);r[u]?(r[u].p(m,a),d(r[u],1)):(r[u]=vi(m),r[u].c(),d(r[u],1),r[u].m(t.parentNode,t))}for(fe(),u=e.length;u<r.length;u+=1)o(u);ce()}},i(s){if(!i){for(let a=0;a<e.length;a+=1)d(r[a]);i=!0}},o(s){r=r.filter(Boolean);for(let a=0;a<r.length;a+=1)b(r[a]);i=!1},d(s){s&&c(t),qi(r,s)}}}function ki(l){let t,i;return t=new Fi({props:{value:l[6],valueLabel:l[31],color:l[10],display:l[3],defaultValue:l[4]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&4&&(o.value=e[6]),r[0]&4&&(o.valueLabel=e[31]),r[0]&1024&&(o.color=e[10]),r[0]&8&&(o.display=e[3]),r[0]&16&&(o.defaultValue=e[4]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){I(t,e)}}}function Rn(l){let t,i,e,r,o,s,a,u,m=l[1]&&yi(l);const E=[En,Tn],_=[];function k(g,M){return g[2]?0:1}return r=k(l),o=_[r]=E[r](l),{c(){t=A("div"),m&&m.c(),i=$(),e=A("div"),o.c(),this.h()},l(g){t=H(g,"DIV",{class:!0});var M=nt(t);m&&m.l(M),i=y(M),e=H(M,"DIV",{class:!0,role:!0});var h=nt(e);o.l(h),h.forEach(c),M.forEach(c),this.h()},h(){v(e,"class",s=l[3]==="tabs"?"my-6 flex flex-wrap gap-x-1 gap-y-1":"inline-flex rounded-md shadow-sm overflow-auto border border-base-300 no-scrollbar h-8 mb-1"),v(e,"role","group"),v(t,"class",a=l[3]==="tabs"?"":`inline-block overflow-scroll no-scrollbar align-bottom w-fit max-w-full flex-col ${l[1]?"mt-0.5":"mt-2"} mb-3 ml-0 mr-2`)},m(g,M){p(g,t,M),m&&m.m(t,null),$e(t,i),$e(t,e),_[r].m(e,null),u=!0},p(g,M){g[1]?m?(m.p(g,M),M[0]&2&&d(m,1)):(m=yi(g),m.c(),d(m,1),m.m(t,i)):m&&(fe(),b(m,1,1,()=>{m=null}),ce());let h=r;r=k(g),r===h?_[r].p(g,M):(fe(),b(_[h],1,1,()=>{_[h]=null}),ce(),o=_[r],o?o.p(g,M):(o=_[r]=E[r](g),o.c()),d(o,1),o.m(e,null)),(!u||M[0]&8&&s!==(s=g[3]==="tabs"?"my-6 flex flex-wrap gap-x-1 gap-y-1":"inline-flex rounded-md shadow-sm overflow-auto border border-base-300 no-scrollbar h-8 mb-1"))&&v(e,"class",s),(!u||M[0]&10&&a!==(a=g[3]==="tabs"?"":`inline-block overflow-scroll no-scrollbar align-bottom w-fit max-w-full flex-col ${g[1]?"mt-0.5":"mt-2"} mb-3 ml-0 mr-2`))&&v(t,"class",a)},i(g){u||(d(m),d(o),u=!0)},o(g){b(m),b(o),u=!1},d(g){g&&c(t),m&&m.d(),_[r].d()}}}function Gn(l){let t,i,e,r;const o=[kn,vn],s=[];function a(u,m){return u[13].length>0?0:1}return t=a(l),i=s[t]=o[t](l),{c(){i.c(),e=he()},l(u){i.l(u),e=he()},m(u,m){s[t].m(u,m),p(u,e,m),r=!0},p(u,m){i.p(u,m)},i(u){r||(d(i),r=!0)},o(u){b(i),r=!1},d(u){u&&c(e),s[t].d(u)}}}function Mn(l,t,i){var _e;let e,r,o,s,a=re,u=()=>(a(),a=Ai(o,T=>i(20,s=T)),o),m,E,_,k;st(l,ji,T=>i(24,E=T)),l.$$.on_destroy.push(()=>a());let{$$slots:g={},$$scope:M}=t;const h=Oi(g);let{name:S=void 0}=t,{title:w=void 0}=t,{hideDuringPrint:C=!0}=t,{preset:q=void 0}=t;const pe=tn();st(l,pe,T=>i(25,_=T));let{display:le="buttons"}=t,{defaultValue:Z=void 0}=t;Kt("button-display",le);const{resolveColor:de}=zt();let{color:ae="hsla(207, 65%, 39%, 1)"}=t,{description:J=void 0}=t;const ge=Bi(null);st(l,ge,T=>i(26,k=T)),cn(T=>{Ot(ge,k=T,k),Ot(pe,_[S]=(T==null?void 0:T.value)??null,_)},en(ge));let{value:x,data:N,label:ee,order:ue,where:te}=t,P=[];const{results:Ie,update:me}=nn({value:x,data:N,label:ee,order:ue,where:te},`ButtonGroup-${S}`,(_e=E==null?void 0:E.data)==null?void 0:_e.data[`ButtonGroup-${S}_data`]);st(l,Ie,T=>i(21,m=T));function Ne(T,se){[{value:T,type:"string",options:Object.keys(Ut),name:"preset"},{value:se,type:"string",options:["tabs","buttons"],name:"display"}].forEach(F=>{F.value&&(typeof F.value!==F.type&&P.push(`Invalid type: ${F.name} must be a ${F.type}. ${F.name} is type ${typeof F.value}`),F.options.includes(F.value)||P.push(`Invalid ${F.name}: ${F.value}. Expected one of the following: ${F.options.join(", ")}`))})}x||(N?P.push('Missing required prop: "value".'):!h.default&&!q&&P.push('ButtonGroup requires either "value" and "data" props or <ButtonGroupItem />.')),N&&typeof N!="object"&&(typeof N=="string"?P.push(`'${N}' is not a recognized query result. Data should be provided in the format: data = {'${N.replace("data.","")}'}`):P.push(`'${N}' is not a recognized query result. Data should be an object. e.g data = {QueryName}`)),Ne(q,le);try{mn({name:S})}catch(T){P.push(T.message)}return l.$$set=T=>{"name"in T&&i(15,S=T.name),"title"in T&&i(1,w=T.title),"hideDuringPrint"in T&&i(0,C=T.hideDuringPrint),"preset"in T&&i(2,q=T.preset),"display"in T&&i(3,le=T.display),"defaultValue"in T&&i(4,Z=T.defaultValue),"color"in T&&i(16,ae=T.color),"description"in T&&i(5,J=T.description),"value"in T&&i(6,x=T.value),"data"in T&&i(17,N=T.data),"label"in T&&i(7,ee=T.label),"order"in T&&i(18,ue=T.order),"where"in T&&i(19,te=T.where),"$$scope"in T&&i(23,M=T.$$scope)},l.$$.update=()=>{l.$$.dirty[0]&1&&i(0,C=Ji(C)),l.$$.dirty[0]&65536&&i(10,e=de(ae)),l.$$.dirty[0]&917696&&me({value:x,data:N,label:ee,order:ue,where:te}),l.$$.dirty[0]&2097152&&i(9,{hasQuery:r,query:o}=m,r,u(i(8,o))),l.$$.dirty[0]&1048576&&s!=null&&s.error&&P.push(s.error)},[C,w,q,le,Z,J,x,ee,o,r,e,pe,ge,P,Ie,S,ae,N,ue,te,s,m,g,M]}class Sn extends qt{constructor(t){super(),Lt(this,t,Mn,Gn,Ct,{name:15,title:1,hideDuringPrint:0,preset:2,display:3,defaultValue:4,color:16,description:5,value:6,data:17,label:7,order:18,where:19},null,[-1,-1])}}function Cn(l){let t,i=B.title+"",e;return{c(){t=A("h1"),e=At(i),this.h()},l(r){t=H(r,"H1",{class:!0});var o=nt(t);e=Ht(o,i),o.forEach(c),this.h()},h(){v(t,"class","title")},m(r,o){p(r,t,o),$e(t,e)},p:re,d(r){r&&c(t)}}}function Hn(l){return{c(){this.h()},l(t){this.h()},h(){document.title="Evidence"},m:re,p:re,d:re}}function An(l){let t,i,e,r,o;return document.title=t=B.title,{c(){i=$(),e=A("meta"),r=$(),o=A("meta"),this.h()},l(s){i=y(s),e=H(s,"META",{property:!0,content:!0}),r=y(s),o=H(s,"META",{name:!0,content:!0}),this.h()},h(){var s,a;v(e,"property","og:title"),v(e,"content",((s=B.og)==null?void 0:s.title)??B.title),v(o,"name","twitter:title"),v(o,"content",((a=B.og)==null?void 0:a.title)??B.title)},m(s,a){p(s,i,a),p(s,e,a),p(s,r,a),p(s,o,a)},p(s,a){a&0&&t!==(t=B.title)&&(document.title=t)},d(s){s&&(c(i),c(e),c(r),c(o))}}}function qn(l){var o,s;let t,i,e=(B.description||((o=B.og)==null?void 0:o.description))&&Ln(),r=((s=B.og)==null?void 0:s.image)&&Bn();return{c(){e&&e.c(),t=$(),r&&r.c(),i=he()},l(a){e&&e.l(a),t=y(a),r&&r.l(a),i=he()},m(a,u){e&&e.m(a,u),p(a,t,u),r&&r.m(a,u),p(a,i,u)},p(a,u){var m,E;(B.description||(m=B.og)!=null&&m.description)&&e.p(a,u),(E=B.og)!=null&&E.image&&r.p(a,u)},d(a){a&&(c(t),c(i)),e&&e.d(a),r&&r.d(a)}}}function Ln(l){let t,i,e,r,o;return{c(){t=A("meta"),i=$(),e=A("meta"),r=$(),o=A("meta"),this.h()},l(s){t=H(s,"META",{name:!0,content:!0}),i=y(s),e=H(s,"META",{property:!0,content:!0}),r=y(s),o=H(s,"META",{name:!0,content:!0}),this.h()},h(){var s,a,u;v(t,"name","description"),v(t,"content",B.description??((s=B.og)==null?void 0:s.description)),v(e,"property","og:description"),v(e,"content",((a=B.og)==null?void 0:a.description)??B.description),v(o,"name","twitter:description"),v(o,"content",((u=B.og)==null?void 0:u.description)??B.description)},m(s,a){p(s,t,a),p(s,i,a),p(s,e,a),p(s,r,a),p(s,o,a)},p:re,d(s){s&&(c(t),c(i),c(e),c(r),c(o))}}}function Bn(l){let t,i,e;return{c(){t=A("meta"),i=$(),e=A("meta"),this.h()},l(r){t=H(r,"META",{property:!0,content:!0}),i=y(r),e=H(r,"META",{name:!0,content:!0}),this.h()},h(){var r,o;v(t,"property","og:image"),v(t,"content",fi((r=B.og)==null?void 0:r.image)),v(e,"name","twitter:image"),v(e,"content",fi((o=B.og)==null?void 0:o.image))},m(r,o){p(r,t,o),p(r,i,o),p(r,e,o)},p:re,d(r){r&&(c(t),c(i),c(e))}}}function Ti(l){let t,i;return t=new rt({props:{queryID:"dei_shift_share",queryResult:l[0]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&1&&(o.queryResult=e[0]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){I(t,e)}}}function jn(l){let t,i,e,r,o,s,a,u,m,E,_,k,g,M;return t=new j({props:{id:"total_change",title:"Total change",fmt:"0.000"}}),e=new j({props:{id:"within",title:"Within",fmt:"0.000"}}),o=new j({props:{id:"composition",title:"Composition",fmt:"0.000"}}),a=new j({props:{id:"interaction",title:"Interaction",fmt:"0.000"}}),m=new j({props:{id:"pct_within",title:"% within",fmt:"0.0"}}),_=new j({props:{id:"pct_composition",title:"% composition",fmt:"0.0"}}),g=new j({props:{id:"pct_interaction",title:"% interaction",fmt:"0.0"}}),{c(){G(t.$$.fragment),i=$(),G(e.$$.fragment),r=$(),G(o.$$.fragment),s=$(),G(a.$$.fragment),u=$(),G(m.$$.fragment),E=$(),G(_.$$.fragment),k=$(),G(g.$$.fragment)},l(h){R(t.$$.fragment,h),i=y(h),R(e.$$.fragment,h),r=y(h),R(o.$$.fragment,h),s=y(h),R(a.$$.fragment,h),u=y(h),R(m.$$.fragment,h),E=y(h),R(_.$$.fragment,h),k=y(h),R(g.$$.fragment,h)},m(h,S){D(t,h,S),p(h,i,S),D(e,h,S),p(h,r,S),D(o,h,S),p(h,s,S),D(a,h,S),p(h,u,S),D(m,h,S),p(h,E,S),D(_,h,S),p(h,k,S),D(g,h,S),M=!0},p:re,i(h){M||(d(t.$$.fragment,h),d(e.$$.fragment,h),d(o.$$.fragment,h),d(a.$$.fragment,h),d(m.$$.fragment,h),d(_.$$.fragment,h),d(g.$$.fragment,h),M=!0)},o(h){b(t.$$.fragment,h),b(e.$$.fragment,h),b(o.$$.fragment,h),b(a.$$.fragment,h),b(m.$$.fragment,h),b(_.$$.fragment,h),b(g.$$.fragment,h),M=!1},d(h){h&&(c(i),c(r),c(s),c(u),c(E),c(k)),I(t,h),I(e,h),I(o,h),I(a,h),I(m,h),I(_,h),I(g,h)}}}function Ei(l){let t,i;return t=new rt({props:{queryID:"dei_subcategory_options",queryResult:l[1]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&2&&(o.queryResult=e[1]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){I(t,e)}}}function Ii(l){let t,i;return t=new rt({props:{queryID:"dei_subcategory_monthly",queryResult:l[2]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&4&&(o.queryResult=e[2]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){I(t,e)}}}function Pn(l){let t,i,e,r,o,s,a,u,m,E,_,k;return t=new j({props:{id:"month_start",title:"Month",fmt:"mmm yyyy"}}),e=new j({props:{id:"n_postings_with_concept",title:"Postings with concept",fmt:"#,##0"}}),o=new j({props:{id:"n_mentions",title:"Mentions",fmt:"#,##0"}}),a=new j({props:{id:"n_postings_month",title:"Postings",fmt:"#,##0"}}),m=new j({props:{id:"pct_postings",title:"% postings",fmt:"0.0%"}}),_=new j({props:{id:"mentions_per_posting",title:"Mentions/posting",fmt:"0.000"}}),{c(){G(t.$$.fragment),i=$(),G(e.$$.fragment),r=$(),G(o.$$.fragment),s=$(),G(a.$$.fragment),u=$(),G(m.$$.fragment),E=$(),G(_.$$.fragment)},l(g){R(t.$$.fragment,g),i=y(g),R(e.$$.fragment,g),r=y(g),R(o.$$.fragment,g),s=y(g),R(a.$$.fragment,g),u=y(g),R(m.$$.fragment,g),E=y(g),R(_.$$.fragment,g)},m(g,M){D(t,g,M),p(g,i,M),D(e,g,M),p(g,r,M),D(o,g,M),p(g,s,M),D(a,g,M),p(g,u,M),D(m,g,M),p(g,E,M),D(_,g,M),k=!0},p:re,i(g){k||(d(t.$$.fragment,g),d(e.$$.fragment,g),d(o.$$.fragment,g),d(a.$$.fragment,g),d(m.$$.fragment,g),d(_.$$.fragment,g),k=!0)},o(g){b(t.$$.fragment,g),b(e.$$.fragment,g),b(o.$$.fragment,g),b(a.$$.fragment,g),b(m.$$.fragment,g),b(_.$$.fragment,g),k=!1},d(g){g&&(c(i),c(r),c(s),c(u),c(E)),I(t,g),I(e,g),I(o,g),I(a,g),I(m,g),I(_,g)}}}function Di(l){let t,i;return t=new rt({props:{queryID:"dei_term_options",queryResult:l[3]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&8&&(o.queryResult=e[3]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){I(t,e)}}}function Ri(l){let t,i;return t=new rt({props:{queryID:"dei_term_monthly",queryResult:l[4]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&16&&(o.queryResult=e[4]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){I(t,e)}}}function Gi(l){let t,i;return t=new rt({props:{queryID:"dei_term_latest_comparison",queryResult:l[5]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&32&&(o.queryResult=e[5]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){I(t,e)}}}function Fn(l){let t,i,e,r,o,s,a,u,m,E;return t=new j({props:{id:"term",title:"Term"}}),e=new j({props:{id:"n_postings_with_term",title:"Postings with term",fmt:"#,##0"}}),o=new j({props:{id:"mentions",title:"Mentions",fmt:"#,##0"}}),a=new j({props:{id:"share_postings_with_term",title:"% postings",fmt:"0.0%"}}),m=new j({props:{id:"mentions_per_posting",title:"Mentions/posting",fmt:"0.000"}}),{c(){G(t.$$.fragment),i=$(),G(e.$$.fragment),r=$(),G(o.$$.fragment),s=$(),G(a.$$.fragment),u=$(),G(m.$$.fragment)},l(_){R(t.$$.fragment,_),i=y(_),R(e.$$.fragment,_),r=y(_),R(o.$$.fragment,_),s=y(_),R(a.$$.fragment,_),u=y(_),R(m.$$.fragment,_)},m(_,k){D(t,_,k),p(_,i,k),D(e,_,k),p(_,r,k),D(o,_,k),p(_,s,k),D(a,_,k),p(_,u,k),D(m,_,k),E=!0},p:re,i(_){E||(d(t.$$.fragment,_),d(e.$$.fragment,_),d(o.$$.fragment,_),d(a.$$.fragment,_),d(m.$$.fragment,_),E=!0)},o(_){b(t.$$.fragment,_),b(e.$$.fragment,_),b(o.$$.fragment,_),b(a.$$.fragment,_),b(m.$$.fragment,_),E=!1},d(_){_&&(c(i),c(r),c(s),c(u)),I(t,_),I(e,_),I(o,_),I(a,_),I(m,_)}}}function Mi(l){let t,i;return t=new rt({props:{queryID:"dei_department_rankings",queryResult:l[6]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&64&&(o.queryResult=e[6]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){I(t,e)}}}function Vn(l){let t,i,e,r,o,s,a,u,m,E;return t=new j({props:{id:"dept_code",title:"Department code"}}),e=new j({props:{id:"dept_name",title:"Department",wrap:"true"}}),o=new j({props:{id:"n_postings_with_concept",title:"Postings with concept",fmt:"#,##0"}}),a=new j({props:{id:"n_postings",title:"Postings",fmt:"#,##0"}}),m=new j({props:{id:"pct_postings",title:"% postings",fmt:"0.0%"}}),{c(){G(t.$$.fragment),i=$(),G(e.$$.fragment),r=$(),G(o.$$.fragment),s=$(),G(a.$$.fragment),u=$(),G(m.$$.fragment)},l(_){R(t.$$.fragment,_),i=y(_),R(e.$$.fragment,_),r=y(_),R(o.$$.fragment,_),s=y(_),R(a.$$.fragment,_),u=y(_),R(m.$$.fragment,_)},m(_,k){D(t,_,k),p(_,i,k),D(e,_,k),p(_,r,k),D(o,_,k),p(_,s,k),D(a,_,k),p(_,u,k),D(m,_,k),E=!0},p:re,i(_){E||(d(t.$$.fragment,_),d(e.$$.fragment,_),d(o.$$.fragment,_),d(a.$$.fragment,_),d(m.$$.fragment,_),E=!0)},o(_){b(t.$$.fragment,_),b(e.$$.fragment,_),b(o.$$.fragment,_),b(a.$$.fragment,_),b(m.$$.fragment,_),E=!1},d(_){_&&(c(i),c(r),c(s),c(u)),I(t,_),I(e,_),I(o,_),I(a,_),I(m,_)}}}function Si(l){let t,i;return t=new rt({props:{queryID:"dei_occupation_changes",queryResult:l[7]}}),{c(){G(t.$$.fragment)},l(e){R(t.$$.fragment,e)},m(e,r){D(t,e,r),i=!0},p(e,r){const o={};r[0]&128&&(o.queryResult=e[7]),t.$set(o)},i(e){i||(d(t.$$.fragment,e),i=!0)},o(e){b(t.$$.fragment,e),i=!1},d(e){I(t,e)}}}function Nn(l){let t,i,e,r,o,s,a,u,m,E,_,k,g,M,h,S;return t=new j({props:{id:"occ8",title:"8-digit O*NET-SOC"}}),e=new j({props:{id:"soc_title",title:"Occupation",wrap:"true"}}),o=new j({props:{id:"pre_postings",title:"Pre postings",fmt:"#,##0"}}),a=new j({props:{id:"post_postings",title:"Post postings",fmt:"#,##0"}}),m=new j({props:{id:"pre_rate",title:"Pre rate",fmt:"0.0%"}}),_=new j({props:{id:"post_rate",title:"Post rate",fmt:"0.0%"}}),g=new j({props:{id:"rate_delta",title:"Rate delta",fmt:"0.0%"}}),h=new j({props:{id:"pct_change",title:"% change",fmt:"0.0%"}}),{c(){G(t.$$.fragment),i=$(),G(e.$$.fragment),r=$(),G(o.$$.fragment),s=$(),G(a.$$.fragment),u=$(),G(m.$$.fragment),E=$(),G(_.$$.fragment),k=$(),G(g.$$.fragment),M=$(),G(h.$$.fragment)},l(w){R(t.$$.fragment,w),i=y(w),R(e.$$.fragment,w),r=y(w),R(o.$$.fragment,w),s=y(w),R(a.$$.fragment,w),u=y(w),R(m.$$.fragment,w),E=y(w),R(_.$$.fragment,w),k=y(w),R(g.$$.fragment,w),M=y(w),R(h.$$.fragment,w)},m(w,C){D(t,w,C),p(w,i,C),D(e,w,C),p(w,r,C),D(o,w,C),p(w,s,C),D(a,w,C),p(w,u,C),D(m,w,C),p(w,E,C),D(_,w,C),p(w,k,C),D(g,w,C),p(w,M,C),D(h,w,C),S=!0},p:re,i(w){S||(d(t.$$.fragment,w),d(e.$$.fragment,w),d(o.$$.fragment,w),d(a.$$.fragment,w),d(m.$$.fragment,w),d(_.$$.fragment,w),d(g.$$.fragment,w),d(h.$$.fragment,w),S=!0)},o(w){b(t.$$.fragment,w),b(e.$$.fragment,w),b(o.$$.fragment,w),b(a.$$.fragment,w),b(m.$$.fragment,w),b(_.$$.fragment,w),b(g.$$.fragment,w),b(h.$$.fragment,w),S=!1},d(w){w&&(c(i),c(r),c(s),c(u),c(E),c(k),c(M)),I(t,w),I(e,w),I(o,w),I(a,w),I(m,w),I(_,w),I(g,w),I(h,w)}}}function On(l){let t,i,e,r,o,s,a='This page isolates DEI-related ConceptSearch evidence in USAJOBS postings. The DEI term list used for the TrumpDEIList measures is from the <a href="https://www.nytimes.com/interactive/2025/03/07/us/trump-federal-agencies-websites-words-dei.html" rel="nofollow" class="markdown">New York Times interactive article on terms removed from federal agency websites</a>. Protected-class terms and research-team DEI labels are shown separately where available.',u,m,E="<strong>How to read this page.</strong> These are federal posting-text term measures. They can show changes in language and standardized posting text; they should not be read as direct evidence of agency intent, compliance, or workplace practice without source-text review.",_,k,g="<strong>Shared terms.</strong> Pre/post rates are shares of postings with the selected term set before versus after the transition. Within means changes inside occupations; composition means changes from the occupation mix.",M,h,S='<a href="#headline" class="hover:underline">Headline</a> <a href="#monthly-subcategories" class="hover:underline">Monthly subcategories</a> <a href="#individual-terms" class="hover:underline">Individual terms</a> <a href="#departments" class="hover:underline">Departments</a> <a href="#occupations" class="hover:underline">Occupations</a> <a href="#source-notes" class="hover:underline">Source notes</a>',w,C,q='<a href="#headline">Headline</a>',pe,le,Z,de,ae,J,ge,x,N,ee,ue='<a href="#table-1-trumpdeilist-shift-share-decomposition">Table 1. TrumpDEIList shift-share decomposition</a>',te,P,Ie,me,Ne='<a href="#monthly-subcategories">Monthly Subcategories</a>',_e,T,se,Se,F,ye,De='<a href="#figure-udei-1-selected-dei-subcategory-intensity">Figure UDEI-1. Selected DEI Subcategory Intensity</a>',we,be,Oe,ve,ot="This chart is included to show timing in federal posting language for the selected DEI term set; it is not direct evidence of workplace practice.",ke,ie,Ue='<a href="#table-udei-1-selected-dei-subcategory-monthly-values">Table UDEI-1. Selected DEI Subcategory Monthly Values</a>',Ke,Te,We,ne,Re='<a href="#individual-terms">Individual Terms</a>',Ge,Ee,lt="The TrumpDEIList aggregate above can be decomposed into the individual term signals available in the staged data.",ze,L,Me,pt,at,Ce,Qt='<a href="#figure-udei-2-selected-dei-term-intensity">Figure UDEI-2. Selected DEI Term Intensity</a>',dt,Qe,gt,Ye,Yt="Use the term buttons to inspect the component words behind the aggregate. Term-level keyword counts can include boilerplate and repeated standardized language.",bt,ut,Xe,Xt="Latest month comparison of individual DEI terms",ht,He,Jt='<a href="#table-udei-2-latest-individual-dei-term-comparison">Table UDEI-2. Latest Individual DEI Term Comparison</a>',yt,Je,$t,Ae,Zt='<a href="#departments">Departments</a>',wt,mt,qe,xt='<a href="#table-udei-3-department-rankings-for-selected-dei-term">Table UDEI-3. Department Rankings for Selected DEI Term</a>',vt,Ze,kt,Le,ei='<a href="#occupations">Occupations</a>',Tt,_t,Be,ti='<a href="#table-udei-4-occupation-changes-for-selected-dei-term">Table UDEI-4. Occupation Changes for Selected DEI Term</a>',Et,xe,It,je,ii='<a href="#source-notes">Source Notes</a>',Dt,et,ni='DEI TrumpDEIList terms are from the New York Times interactive article linked above. The dashboard distinguishes these from protected-class and other research-team DEI labels because some DEI-category rows appear in nearly all federal postings as standardized equal-opportunity or protected-class language. The shift-share and occupation tables use staged USAJOBS warehouse aggregates: <code class="markdown">AGGR_DEIShiftShare</code>, <code class="markdown">AGGR_DEIWithinOccupation</code>, <code class="markdown">AGGR_DEIBySubcatMonth</code>, and <code class="markdown">AGGR_DEIByDeptSubcat</code>.',Rt,tt,ri='Evidence path: USAJOBS source and release checks are listed in <a href="/us-lmi/methodology/audit-trail" class="markdown">Agreement And Audit Trail</a>. Interpretation limits for posting text are summarized in <a href="/us-lmi/methodology/postings-and-taxonomies" class="markdown">What Postings And Taxonomies Can And Cannot Say</a>.',Gt,Pe=typeof B<"u"&&B.title&&B.hide_title!==!0&&Cn();function Vi(n,f){return typeof B<"u"&&B.title?An:Hn}let ft=Vi()(l),Fe=typeof B=="object"&&qn(),O=l[0]&&Ti(l);de=new Nt({props:{data:l[0],value:"corpus_rate_pre",title:"Pre-transition TrumpDEIList rate",fmt:"0.0%"}}),J=new Nt({props:{data:l[0],value:"corpus_rate_post",title:"Post-transition TrumpDEIList rate",fmt:"0.0%"}}),x=new Nt({props:{data:l[0],value:"pct_within",title:"Within-occupation share of change",fmt:"0.0"}}),P=new ct({props:{data:l[0],rows:"1",$$slots:{default:[jn]},$$scope:{ctx:l}}});let U=l[1]&&Ei(l);se=new un({props:{data:l[1],name:"dei_subcategory",value:"subcategory",defaultValue:"TrumpDEIList",title:"DEI subcategory"}});let K=l[2]&&Ii(l);be=new pi({props:{data:l[2],x:"month_start",y:"mentions_per_posting",yAxisTitle:"Mentions per posting",title:"Selected DEI subcategory intensity"}}),Te=new ct({props:{data:l[2],rowsPerPage:"12",$$slots:{default:[Pn]},$$scope:{ctx:l}}});let W=l[3]&&Di(l);Me=new Sn({props:{data:l[3],name:"dei_term",value:"term",label:"term_label",defaultValue:"diversity",title:"Individual DEI term"}});let z=l[4]&&Ri(l);Qe=new pi({props:{data:l[4],x:"month_start",y:"mentions_per_posting",yAxisTitle:"Mentions per posting",title:"Selected DEI term intensity"}});let Q=l[5]&&Gi(l);Je=new ct({props:{data:l[5],rowsPerPage:"10",$$slots:{default:[Fn]},$$scope:{ctx:l}}});let Y=l[6]&&Mi(l);Ze=new ct({props:{data:l[6],rowsPerPage:"25",$$slots:{default:[Vn]},$$scope:{ctx:l}}});let X=l[7]&&Si(l);return xe=new ct({props:{data:l[7],rowsPerPage:"25",$$slots:{default:[Nn]},$$scope:{ctx:l}}}),{c(){Pe&&Pe.c(),t=$(),ft.c(),i=A("meta"),e=A("meta"),Fe&&Fe.c(),r=he(),o=$(),s=A("p"),s.innerHTML=a,u=$(),m=A("div"),m.innerHTML=E,_=$(),k=A("div"),k.innerHTML=g,M=$(),h=A("div"),h.innerHTML=S,w=$(),C=A("h2"),C.innerHTML=q,pe=$(),O&&O.c(),le=$(),Z=A("div"),G(de.$$.fragment),ae=$(),G(J.$$.fragment),ge=$(),G(x.$$.fragment),N=$(),ee=A("h3"),ee.innerHTML=ue,te=$(),G(P.$$.fragment),Ie=$(),me=A("h2"),me.innerHTML=Ne,_e=$(),U&&U.c(),T=$(),G(se.$$.fragment),Se=$(),K&&K.c(),F=$(),ye=A("h3"),ye.innerHTML=De,we=$(),G(be.$$.fragment),Oe=$(),ve=A("p"),ve.textContent=ot,ke=$(),ie=A("h3"),ie.innerHTML=Ue,Ke=$(),G(Te.$$.fragment),We=$(),ne=A("h2"),ne.innerHTML=Re,Ge=$(),Ee=A("p"),Ee.textContent=lt,ze=$(),W&&W.c(),L=$(),G(Me.$$.fragment),pt=$(),z&&z.c(),at=$(),Ce=A("h3"),Ce.innerHTML=Qt,dt=$(),G(Qe.$$.fragment),gt=$(),Ye=A("p"),Ye.textContent=Yt,bt=$(),Q&&Q.c(),ut=$(),Xe=A("p"),Xe.textContent=Xt,ht=$(),He=A("h3"),He.innerHTML=Jt,yt=$(),G(Je.$$.fragment),$t=$(),Ae=A("h2"),Ae.innerHTML=Zt,wt=$(),Y&&Y.c(),mt=$(),qe=A("h3"),qe.innerHTML=xt,vt=$(),G(Ze.$$.fragment),kt=$(),Le=A("h2"),Le.innerHTML=ei,Tt=$(),X&&X.c(),_t=$(),Be=A("h3"),Be.innerHTML=ti,Et=$(),G(xe.$$.fragment),It=$(),je=A("h2"),je.innerHTML=ii,Dt=$(),et=A("p"),et.innerHTML=ni,Rt=$(),tt=A("p"),tt.innerHTML=ri,this.h()},l(n){Pe&&Pe.l(n),t=y(n);const f=Qi("svelte-2igo1p",document.head);ft.l(f),i=H(f,"META",{name:!0,content:!0}),e=H(f,"META",{name:!0,content:!0}),Fe&&Fe.l(f),r=he(),f.forEach(c),o=y(n),s=H(n,"P",{class:!0,"data-svelte-h":!0}),V(s)!=="svelte-hpmy39"&&(s.innerHTML=a),u=y(n),m=H(n,"DIV",{class:!0,"data-svelte-h":!0}),V(m)!=="svelte-1f1diye"&&(m.innerHTML=E),_=y(n),k=H(n,"DIV",{class:!0,"data-svelte-h":!0}),V(k)!=="svelte-1o0na9g"&&(k.innerHTML=g),M=y(n),h=H(n,"DIV",{class:!0,"data-svelte-h":!0}),V(h)!=="svelte-1u08q04"&&(h.innerHTML=S),w=y(n),C=H(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),V(C)!=="svelte-1bhh8vw"&&(C.innerHTML=q),pe=y(n),O&&O.l(n),le=y(n),Z=H(n,"DIV",{class:!0});var Ve=nt(Z);R(de.$$.fragment,Ve),ae=y(Ve),R(J.$$.fragment,Ve),ge=y(Ve),R(x.$$.fragment,Ve),Ve.forEach(c),N=y(n),ee=H(n,"H3",{class:!0,id:!0,"data-svelte-h":!0}),V(ee)!=="svelte-1dccazm"&&(ee.innerHTML=ue),te=y(n),R(P.$$.fragment,n),Ie=y(n),me=H(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),V(me)!=="svelte-136e7x3"&&(me.innerHTML=Ne),_e=y(n),U&&U.l(n),T=y(n),R(se.$$.fragment,n),Se=y(n),K&&K.l(n),F=y(n),ye=H(n,"H3",{class:!0,id:!0,"data-svelte-h":!0}),V(ye)!=="svelte-1kvkduh"&&(ye.innerHTML=De),we=y(n),R(be.$$.fragment,n),Oe=y(n),ve=H(n,"P",{class:!0,"data-svelte-h":!0}),V(ve)!=="svelte-195eobd"&&(ve.textContent=ot),ke=y(n),ie=H(n,"H3",{class:!0,id:!0,"data-svelte-h":!0}),V(ie)!=="svelte-jxdmqh"&&(ie.innerHTML=Ue),Ke=y(n),R(Te.$$.fragment,n),We=y(n),ne=H(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),V(ne)!=="svelte-1m5tik4"&&(ne.innerHTML=Re),Ge=y(n),Ee=H(n,"P",{class:!0,"data-svelte-h":!0}),V(Ee)!=="svelte-6yccst"&&(Ee.textContent=lt),ze=y(n),W&&W.l(n),L=y(n),R(Me.$$.fragment,n),pt=y(n),z&&z.l(n),at=y(n),Ce=H(n,"H3",{class:!0,id:!0,"data-svelte-h":!0}),V(Ce)!=="svelte-10g8wks"&&(Ce.innerHTML=Qt),dt=y(n),R(Qe.$$.fragment,n),gt=y(n),Ye=H(n,"P",{class:!0,"data-svelte-h":!0}),V(Ye)!=="svelte-4pd3xn"&&(Ye.textContent=Yt),bt=y(n),Q&&Q.l(n),ut=y(n),Xe=H(n,"P",{class:!0,"data-svelte-h":!0}),V(Xe)!=="svelte-6puuyn"&&(Xe.textContent=Xt),ht=y(n),He=H(n,"H3",{class:!0,id:!0,"data-svelte-h":!0}),V(He)!=="svelte-wqij3n"&&(He.innerHTML=Jt),yt=y(n),R(Je.$$.fragment,n),$t=y(n),Ae=H(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),V(Ae)!=="svelte-ihpt21"&&(Ae.innerHTML=Zt),wt=y(n),Y&&Y.l(n),mt=y(n),qe=H(n,"H3",{class:!0,id:!0,"data-svelte-h":!0}),V(qe)!=="svelte-4k0tdo"&&(qe.innerHTML=xt),vt=y(n),R(Ze.$$.fragment,n),kt=y(n),Le=H(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),V(Le)!=="svelte-11kr2gk"&&(Le.innerHTML=ei),Tt=y(n),X&&X.l(n),_t=y(n),Be=H(n,"H3",{class:!0,id:!0,"data-svelte-h":!0}),V(Be)!=="svelte-f0wa6q"&&(Be.innerHTML=ti),Et=y(n),R(xe.$$.fragment,n),It=y(n),je=H(n,"H2",{class:!0,id:!0,"data-svelte-h":!0}),V(je)!=="svelte-5tqyr0"&&(je.innerHTML=ii),Dt=y(n),et=H(n,"P",{class:!0,"data-svelte-h":!0}),V(et)!=="svelte-1q3bhtp"&&(et.innerHTML=ni),Rt=y(n),tt=H(n,"P",{class:!0,"data-svelte-h":!0}),V(tt)!=="svelte-ojatio"&&(tt.innerHTML=ri),this.h()},h(){v(i,"name","twitter:card"),v(i,"content","summary_large_image"),v(e,"name","twitter:site"),v(e,"content","@evidence_dev"),v(s,"class","markdown"),v(m,"class","border-l-4 border-blue-500 bg-blue-50 px-4 py-3 my-4 text-sm text-gray-700"),v(k,"class","text-sm my-3"),v(h,"class","flex flex-wrap gap-x-4 gap-y-2 text-sm border-y border-gray-200 py-3 mb-6"),v(C,"class","markdown"),v(C,"id","headline"),v(Z,"class","grid grid-cols-1 md:grid-cols-3 gap-4 border-b pb-6 mb-8"),v(ee,"class","markdown"),v(ee,"id","table-1-trumpdeilist-shift-share-decomposition"),v(me,"class","markdown"),v(me,"id","monthly-subcategories"),v(ye,"class","markdown"),v(ye,"id","figure-udei-1-selected-dei-subcategory-intensity"),v(ve,"class","text-sm text-gray-600 mt-2"),v(ie,"class","markdown"),v(ie,"id","table-udei-1-selected-dei-subcategory-monthly-values"),v(ne,"class","markdown"),v(ne,"id","individual-terms"),v(Ee,"class","markdown"),v(Ce,"class","markdown"),v(Ce,"id","figure-udei-2-selected-dei-term-intensity"),v(Ye,"class","text-sm text-gray-600 mt-2"),v(Xe,"class","text-sm font-semibold mt-4 mb-2"),v(He,"class","markdown"),v(He,"id","table-udei-2-latest-individual-dei-term-comparison"),v(Ae,"class","markdown"),v(Ae,"id","departments"),v(qe,"class","markdown"),v(qe,"id","table-udei-3-department-rankings-for-selected-dei-term"),v(Le,"class","markdown"),v(Le,"id","occupations"),v(Be,"class","markdown"),v(Be,"id","table-udei-4-occupation-changes-for-selected-dei-term"),v(je,"class","markdown"),v(je,"id","source-notes"),v(et,"class","markdown"),v(tt,"class","markdown")},m(n,f){Pe&&Pe.m(n,f),p(n,t,f),ft.m(document.head,null),$e(document.head,i),$e(document.head,e),Fe&&Fe.m(document.head,null),$e(document.head,r),p(n,o,f),p(n,s,f),p(n,u,f),p(n,m,f),p(n,_,f),p(n,k,f),p(n,M,f),p(n,h,f),p(n,w,f),p(n,C,f),p(n,pe,f),O&&O.m(n,f),p(n,le,f),p(n,Z,f),D(de,Z,null),$e(Z,ae),D(J,Z,null),$e(Z,ge),D(x,Z,null),p(n,N,f),p(n,ee,f),p(n,te,f),D(P,n,f),p(n,Ie,f),p(n,me,f),p(n,_e,f),U&&U.m(n,f),p(n,T,f),D(se,n,f),p(n,Se,f),K&&K.m(n,f),p(n,F,f),p(n,ye,f),p(n,we,f),D(be,n,f),p(n,Oe,f),p(n,ve,f),p(n,ke,f),p(n,ie,f),p(n,Ke,f),D(Te,n,f),p(n,We,f),p(n,ne,f),p(n,Ge,f),p(n,Ee,f),p(n,ze,f),W&&W.m(n,f),p(n,L,f),D(Me,n,f),p(n,pt,f),z&&z.m(n,f),p(n,at,f),p(n,Ce,f),p(n,dt,f),D(Qe,n,f),p(n,gt,f),p(n,Ye,f),p(n,bt,f),Q&&Q.m(n,f),p(n,ut,f),p(n,Xe,f),p(n,ht,f),p(n,He,f),p(n,yt,f),D(Je,n,f),p(n,$t,f),p(n,Ae,f),p(n,wt,f),Y&&Y.m(n,f),p(n,mt,f),p(n,qe,f),p(n,vt,f),D(Ze,n,f),p(n,kt,f),p(n,Le,f),p(n,Tt,f),X&&X.m(n,f),p(n,_t,f),p(n,Be,f),p(n,Et,f),D(xe,n,f),p(n,It,f),p(n,je,f),p(n,Dt,f),p(n,et,f),p(n,Rt,f),p(n,tt,f),Gt=!0},p(n,f){typeof B<"u"&&B.title&&B.hide_title!==!0&&Pe.p(n,f),ft.p(n,f),typeof B=="object"&&Fe.p(n,f),n[0]?O?(O.p(n,f),f[0]&1&&d(O,1)):(O=Ti(n),O.c(),d(O,1),O.m(le.parentNode,le)):O&&(fe(),b(O,1,1,()=>{O=null}),ce());const Ve={};f[0]&1&&(Ve.data=n[0]),de.$set(Ve);const si={};f[0]&1&&(si.data=n[0]),J.$set(si);const oi={};f[0]&1&&(oi.data=n[0]),x.$set(oi);const Bt={};f[0]&1&&(Bt.data=n[0]),f[1]&536870912&&(Bt.$$scope={dirty:f,ctx:n}),P.$set(Bt),n[1]?U?(U.p(n,f),f[0]&2&&d(U,1)):(U=Ei(n),U.c(),d(U,1),U.m(T.parentNode,T)):U&&(fe(),b(U,1,1,()=>{U=null}),ce());const li={};f[0]&2&&(li.data=n[1]),se.$set(li),n[2]?K?(K.p(n,f),f[0]&4&&d(K,1)):(K=Ii(n),K.c(),d(K,1),K.m(F.parentNode,F)):K&&(fe(),b(K,1,1,()=>{K=null}),ce());const ai={};f[0]&4&&(ai.data=n[2]),be.$set(ai);const jt={};f[0]&4&&(jt.data=n[2]),f[1]&536870912&&(jt.$$scope={dirty:f,ctx:n}),Te.$set(jt),n[3]?W?(W.p(n,f),f[0]&8&&d(W,1)):(W=Di(n),W.c(),d(W,1),W.m(L.parentNode,L)):W&&(fe(),b(W,1,1,()=>{W=null}),ce());const ui={};f[0]&8&&(ui.data=n[3]),Me.$set(ui),n[4]?z?(z.p(n,f),f[0]&16&&d(z,1)):(z=Ri(n),z.c(),d(z,1),z.m(at.parentNode,at)):z&&(fe(),b(z,1,1,()=>{z=null}),ce());const mi={};f[0]&16&&(mi.data=n[4]),Qe.$set(mi),n[5]?Q?(Q.p(n,f),f[0]&32&&d(Q,1)):(Q=Gi(n),Q.c(),d(Q,1),Q.m(ut.parentNode,ut)):Q&&(fe(),b(Q,1,1,()=>{Q=null}),ce());const Pt={};f[0]&32&&(Pt.data=n[5]),f[1]&536870912&&(Pt.$$scope={dirty:f,ctx:n}),Je.$set(Pt),n[6]?Y?(Y.p(n,f),f[0]&64&&d(Y,1)):(Y=Mi(n),Y.c(),d(Y,1),Y.m(mt.parentNode,mt)):Y&&(fe(),b(Y,1,1,()=>{Y=null}),ce());const Ft={};f[0]&64&&(Ft.data=n[6]),f[1]&536870912&&(Ft.$$scope={dirty:f,ctx:n}),Ze.$set(Ft),n[7]?X?(X.p(n,f),f[0]&128&&d(X,1)):(X=Si(n),X.c(),d(X,1),X.m(_t.parentNode,_t)):X&&(fe(),b(X,1,1,()=>{X=null}),ce());const Vt={};f[0]&128&&(Vt.data=n[7]),f[1]&536870912&&(Vt.$$scope={dirty:f,ctx:n}),xe.$set(Vt)},i(n){Gt||(d(O),d(de.$$.fragment,n),d(J.$$.fragment,n),d(x.$$.fragment,n),d(P.$$.fragment,n),d(U),d(se.$$.fragment,n),d(K),d(be.$$.fragment,n),d(Te.$$.fragment,n),d(W),d(Me.$$.fragment,n),d(z),d(Qe.$$.fragment,n),d(Q),d(Je.$$.fragment,n),d(Y),d(Ze.$$.fragment,n),d(X),d(xe.$$.fragment,n),Gt=!0)},o(n){b(O),b(de.$$.fragment,n),b(J.$$.fragment,n),b(x.$$.fragment,n),b(P.$$.fragment,n),b(U),b(se.$$.fragment,n),b(K),b(be.$$.fragment,n),b(Te.$$.fragment,n),b(W),b(Me.$$.fragment,n),b(z),b(Qe.$$.fragment,n),b(Q),b(Je.$$.fragment,n),b(Y),b(Ze.$$.fragment,n),b(X),b(xe.$$.fragment,n),Gt=!1},d(n){n&&(c(t),c(o),c(s),c(u),c(m),c(_),c(k),c(M),c(h),c(w),c(C),c(pe),c(le),c(Z),c(N),c(ee),c(te),c(Ie),c(me),c(_e),c(T),c(Se),c(F),c(ye),c(we),c(Oe),c(ve),c(ke),c(ie),c(Ke),c(We),c(ne),c(Ge),c(Ee),c(ze),c(L),c(pt),c(at),c(Ce),c(dt),c(gt),c(Ye),c(bt),c(ut),c(Xe),c(ht),c(He),c(yt),c($t),c(Ae),c(wt),c(mt),c(qe),c(vt),c(kt),c(Le),c(Tt),c(_t),c(Be),c(Et),c(It),c(je),c(Dt),c(et),c(Rt),c(tt)),Pe&&Pe.d(n),ft.d(n),c(i),c(e),Fe&&Fe.d(n),c(r),O&&O.d(n),I(de),I(J),I(x),I(P,n),U&&U.d(n),I(se,n),K&&K.d(n),I(be,n),I(Te,n),W&&W.d(n),I(Me,n),z&&z.d(n),I(Qe,n),Q&&Q.d(n),I(Je,n),Y&&Y.d(n),I(Ze,n),X&&X.d(n),I(xe,n)}}}const B={title:"DEI Profiler"};function Un(l,t,i){let e,r;st(l,ji,L=>i(43,e=L)),st(l,ci,L=>i(48,r=L));let{data:o}=t,{data:s={},customFormattingSettings:a,__db:u,inputs:m}=o;Ot(ci,r="e93b0df0fdb96f974087d1d5fd0519f6",r);let E=rn(Bi(m));Yi(E.subscribe(L=>i(10,m=L))),Kt(ln,{getCustomFormats:()=>a.customFormats||[]});const _=(L,Me)=>_n(u.query,L,{query_name:Me});sn(_),e.params,Xi(()=>!0);let k={initialData:void 0,initialError:void 0},g=oe`select
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
from usajobs.AGGR_DEIShiftShare`;s.dei_shift_share_data&&(s.dei_shift_share_data instanceof Error?k.initialError=s.dei_shift_share_data:k.initialData=s.dei_shift_share_data,s.dei_shift_share_columns&&(k.knownColumns=s.dei_shift_share_columns));let h,S=!1;const w=it.createReactive({callback:L=>{i(0,h=L)},execFn:_},{id:"dei_shift_share",...k});w(M,{noResolve:g,...k}),globalThis[Symbol.for("dei_shift_share")]={get value(){return h}};let C={initialData:void 0,initialError:void 0},q=oe`select distinct subcategory
from usajobs.AGGR_DEIBySubcatMonth
order by subcategory`,pe=`select distinct subcategory
from usajobs.AGGR_DEIBySubcatMonth
order by subcategory`;s.dei_subcategory_options_data&&(s.dei_subcategory_options_data instanceof Error?C.initialError=s.dei_subcategory_options_data:C.initialData=s.dei_subcategory_options_data,s.dei_subcategory_options_columns&&(C.knownColumns=s.dei_subcategory_options_columns));let le,Z=!1;const de=it.createReactive({callback:L=>{i(1,le=L)},execFn:_},{id:"dei_subcategory_options",...C});de(pe,{noResolve:q,...C}),globalThis[Symbol.for("dei_subcategory_options")]={get value(){return le}};let ae={initialData:void 0,initialError:void 0},J=oe`select
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
order by month_start`;s.dei_subcategory_monthly_data&&(s.dei_subcategory_monthly_data instanceof Error?ae.initialError=s.dei_subcategory_monthly_data:ae.initialData=s.dei_subcategory_monthly_data,s.dei_subcategory_monthly_columns&&(ae.knownColumns=s.dei_subcategory_monthly_columns));let x,N=!1;const ee=it.createReactive({callback:L=>{i(2,x=L)},execFn:_},{id:"dei_subcategory_monthly",...ae});ee(ge,{noResolve:J,...ae}),globalThis[Symbol.for("dei_subcategory_monthly")]={get value(){return x}};let ue={initialData:void 0,initialError:void 0},te=oe`select distinct
  term,
  upper(substr(term, 1, 1)) || substr(term, 2) as term_label
from usajobs.AGGR_DEIKeyTermsByMonth
order by term`,P=`select distinct
  term,
  upper(substr(term, 1, 1)) || substr(term, 2) as term_label
from usajobs.AGGR_DEIKeyTermsByMonth
order by term`;s.dei_term_options_data&&(s.dei_term_options_data instanceof Error?ue.initialError=s.dei_term_options_data:ue.initialData=s.dei_term_options_data,s.dei_term_options_columns&&(ue.knownColumns=s.dei_term_options_columns));let Ie,me=!1;const Ne=it.createReactive({callback:L=>{i(3,Ie=L)},execFn:_},{id:"dei_term_options",...ue});Ne(P,{noResolve:te,...ue}),globalThis[Symbol.for("dei_term_options")]={get value(){return Ie}};let _e={initialData:void 0,initialError:void 0},T=oe`select
  month_start,
  term,
  n_postings_with_term,
  mentions,
  n_postings_month,
  share_postings_with_term,
  mentions_per_posting
from usajobs.AGGR_DEIKeyTermsByMonth
where term = case
  when '${m.dei_term}' in ('deia', 'diversity', 'equity', 'inclusion')
    then '${m.dei_term}'
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
  when '${m.dei_term}' in ('deia', 'diversity', 'equity', 'inclusion')
    then '${m.dei_term}'
  else 'diversity'
end
order by month_start`;s.dei_term_monthly_data&&(s.dei_term_monthly_data instanceof Error?_e.initialError=s.dei_term_monthly_data:_e.initialData=s.dei_term_monthly_data,s.dei_term_monthly_columns&&(_e.knownColumns=s.dei_term_monthly_columns));let Se,F=!1;const ye=it.createReactive({callback:L=>{i(4,Se=L)},execFn:_},{id:"dei_term_monthly",..._e});ye(se,{noResolve:T,..._e}),globalThis[Symbol.for("dei_term_monthly")]={get value(){return Se}};let De={initialData:void 0,initialError:void 0},we=oe`with latest_month as (
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
order by mentions_per_posting desc, mentions desc`;s.dei_term_latest_comparison_data&&(s.dei_term_latest_comparison_data instanceof Error?De.initialError=s.dei_term_latest_comparison_data:De.initialData=s.dei_term_latest_comparison_data,s.dei_term_latest_comparison_columns&&(De.knownColumns=s.dei_term_latest_comparison_columns));let Oe,ve=!1;const ot=it.createReactive({callback:L=>{i(5,Oe=L)},execFn:_},{id:"dei_term_latest_comparison",...De});ot(be,{noResolve:we,...De}),globalThis[Symbol.for("dei_term_latest_comparison")]={get value(){return Oe}};let ke={initialData:void 0,initialError:void 0},ie=oe`select
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
limit 50`;s.dei_department_rankings_data&&(s.dei_department_rankings_data instanceof Error?ke.initialError=s.dei_department_rankings_data:ke.initialData=s.dei_department_rankings_data,s.dei_department_rankings_columns&&(ke.knownColumns=s.dei_department_rankings_columns));let Ke,Te=!1;const We=it.createReactive({callback:L=>{i(6,Ke=L)},execFn:_},{id:"dei_department_rankings",...ke});We(Ue,{noResolve:ie,...ke}),globalThis[Symbol.for("dei_department_rankings")]={get value(){return Ke}};let ne={initialData:void 0,initialError:void 0},Re=oe`select
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
limit 50`;s.dei_occupation_changes_data&&(s.dei_occupation_changes_data instanceof Error?ne.initialError=s.dei_occupation_changes_data:ne.initialData=s.dei_occupation_changes_data,s.dei_occupation_changes_columns&&(ne.knownColumns=s.dei_occupation_changes_columns));let Ee,lt=!1;const ze=it.createReactive({callback:L=>{i(7,Ee=L)},execFn:_},{id:"dei_occupation_changes",...ne});return ze(Ge,{noResolve:Re,...ne}),globalThis[Symbol.for("dei_occupation_changes")]={get value(){return Ee}},l.$$set=L=>{"data"in L&&i(8,o=L.data)},l.$$.update=()=>{l.$$.dirty[0]&256&&i(9,{data:s={},customFormattingSettings:a,__db:u}=o,s),l.$$.dirty[0]&512&&on.set(Object.keys(s).length>0),l.$$.dirty[1]&4096&&e.params,l.$$.dirty[0]&30720&&(g||!S?g||(w(M,{noResolve:g,...k}),i(14,S=!0)):w(M,{noResolve:g})),l.$$.dirty[0]&491520&&(q||!Z?q||(de(pe,{noResolve:q,...C}),i(18,Z=!0)):de(pe,{noResolve:q})),l.$$.dirty[0]&1024&&i(20,J=oe`select
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
order by month_start`),l.$$.dirty[0]&7864320&&(J||!N?J||(ee(ge,{noResolve:J,...ae}),i(22,N=!0)):ee(ge,{noResolve:J})),l.$$.dirty[0]&125829120&&(te||!me?te||(Ne(P,{noResolve:te,...ue}),i(26,me=!0)):Ne(P,{noResolve:te})),l.$$.dirty[0]&1024&&i(28,T=oe`select
  month_start,
  term,
  n_postings_with_term,
  mentions,
  n_postings_month,
  share_postings_with_term,
  mentions_per_posting
from usajobs.AGGR_DEIKeyTermsByMonth
where term = case
  when '${m.dei_term}' in ('deia', 'diversity', 'equity', 'inclusion')
    then '${m.dei_term}'
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
  when '${m.dei_term}' in ('deia', 'diversity', 'equity', 'inclusion')
    then '${m.dei_term}'
  else 'diversity'
end
order by month_start`),l.$$.dirty[0]&2013265920&&(T||!F?T||(ye(se,{noResolve:T,..._e}),i(30,F=!0)):ye(se,{noResolve:T})),l.$$.dirty[1]&15&&(we||!ve?we||(ot(be,{noResolve:we,...De}),i(34,ve=!0)):ot(be,{noResolve:we})),l.$$.dirty[0]&1024&&i(36,ie=oe`select
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
limit 50`),l.$$.dirty[1]&240&&(ie||!Te?ie||(We(Ue,{noResolve:ie,...ke}),i(38,Te=!0)):We(Ue,{noResolve:ie})),l.$$.dirty[1]&3840&&(Re||!lt?Re||(ze(Ge,{noResolve:Re,...ne}),i(42,lt=!0)):ze(Ge,{noResolve:Re}))},i(12,g=oe`select
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
limit 50`),[h,le,x,Ie,Se,Oe,Ke,Ee,o,s,m,k,g,M,S,C,q,pe,Z,ae,J,ge,N,ue,te,P,me,_e,T,se,F,De,we,be,ve,ke,ie,Ue,Te,ne,Re,Ge,lt,e]}class sr extends qt{constructor(t){super(),Lt(this,t,Un,On,Ct,{data:8},null,[-1,-1])}}export{sr as component};
