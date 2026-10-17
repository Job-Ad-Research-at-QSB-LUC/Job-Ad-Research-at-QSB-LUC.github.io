var cn=Object.defineProperty;var Ni=r=>{throw TypeError(r)};var mn=(r,s,a)=>s in r?cn(r,s,{enumerable:!0,configurable:!0,writable:!0,value:a}):r[s]=a;var Js=(r,s,a)=>mn(r,typeof s!="symbol"?s+"":s,a),Bi=(r,s,a)=>s.has(r)||Ni("Cannot "+a);var Ss=(r,s,a)=>(Bi(r,s,"read from private field"),a?a.call(r):s.get(r)),zs=(r,s,a)=>s.has(r)?Ni("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(r):s.set(r,a),Za=(r,s,a,t)=>(Bi(r,s,"write to private field"),t?t.call(r,a):s.set(r,a),a);import{U as dn,s as an,d as l,i as _,c as f,f as Fs,k as h,V as un,m as Ks,v as fn,w as hn,x as pn,y as bn,b as k,e as $,j as bt,l as C,r as V,G as Vs,H as kn,a as As,h as yn,g as L,n as gn,o as vn,p as wn,q as Ri,t as Sn,u as xn}from"../chunks/scheduler.TmfZfN_X.js";import{S as nn,i as rn,t as b,a as d,g as Ae,c as je,d as w,m as S,b as x,e as A}from"../chunks/index.CKLTamEB.js";import{v as An,k as jn,g as Oi,w as $n,x as Cn,y as Ws,t as ei,z as ws,A as In,B as on,Q as Tn,F as Mn,D as xs,C as N}from"../chunks/VennDiagram.svelte_svelte_type_style_lang.CoVGfpJt.js";import{w as ln}from"../chunks/entry.P1aHOFFb.js";import{n as En,Q as he,e as Ln,s as Nn,p as Bn,a as Hi,r as Di,C as Rn,b as On}from"../chunks/inferColumnTypes.D_Qc-VWF.js";import{h as O}from"../chunks/setTrackProxy.Cyfckp0w.js";import{p as Hn}from"../chunks/stores.DMXyXr0C.js";import{Q as He}from"../chunks/QueryViewer.BWmGPj4w.js";import{B as Ga}from"../chunks/BigValue.CPkxYFlh.js";import{L as Qt}from"../chunks/LineChart.CCZITCPP.js";import{p as Dn}from"../chunks/profile.BW8tN6E9.js";const Pn={aboveEnd:"insideEndTop",aboveStart:"insideStartTop",aboveCenter:"insideMiddleTop",aboveCentre:"insideMiddleTop",belowEnd:"insideEndBottom",belowStart:"insideStartBottom",belowCenter:"insideMiddleBottom",belowCentre:"insideMiddleBottom"};var Qs,Ys,Xs,Zs;class Gn{constructor(s,a){zs(this,Qs,ln({}));zs(this,Ys,En());zs(this,Xs);zs(this,Zs);Js(this,"subscribe",Ss(this,Qs).subscribe);Js(this,"setError",s=>Ss(this,Qs).update(a=>({...a,error:s})));Js(this,"clearError",()=>this.setError(void 0));Js(this,"setConfig",async s=>{this.clearError();try{let{data:a,x:t,y:o,x2:c,y2:n,color:y,labelColor:j,lineColor:p,label:v,hideValue:m}=s;he.isQuery(a)&&!a.dataLoaded&&await a.fetch();const I=dn(Ss(this,Xs));if(typeof I>"u")throw new Error("Reference Line cannot be used outside of a chart");let{xFormat:B,yFormat:P,swapXY:R}=I;R&&([t,o]=[o,t],[c,n]=[n,c],[B,P]=[P,B]);const G={symbol:s.symbolStart,symbolSize:s.symbolStartSize,symbolKeepAspect:!0},u={symbol:s.symbolEnd,symbolSize:s.symbolEndSize,symbolKeepAspect:!0};[G,u].forEach(T=>{T.symbol==="arrow"?T.symbol="path://M0,10 L5,0 L10,10 z":T.symbol==="none"&&(T.symbol=void 0,T.symbolSize=0)}),j=j??y,p=p??y;const E=s.labelPosition?Pn[s.labelPosition]:"insideEndTop",q=[];if(typeof a<"u"&&a[Symbol.iterator]&&An(a,[t,o,c,n].filter(T=>typeof T<"u")),typeof t<"u"&&typeof o<"u"){if(typeof c>"u"&&typeof n>"u")throw new Error("Either x2 or y2 must be provided when x and y are provided");if(typeof a<"u"&&a[Symbol.iterator])for(let T=0;T<a.length;T++){const H=a[T][t],F=a[T][o],pe=a[T][c||t],J=a[T][n||o],fe=v?a[T][v]??v:void 0;q.push([{coord:[H,F],name:fe,...G},{coord:[pe,J]}])}else{const T=c||t,H=n||o,F=v;q.push([{coord:[t,o],name:F,...G},{coord:[T,H]}])}}else if(typeof t<"u")if(typeof a<"u"&&a[Symbol.iterator])for(let T=0;T<a.length;T++){const H=a[T][t],F=v?a[T][v]??v:void 0;q.push({xAxis:H,name:F,...G})}else{const T=v;q.push({xAxis:t,name:T,...G})}else if(typeof o<"u")if(typeof a<"u"&&a[Symbol.iterator])for(let T=0;T<a.length;T++){const H=a[T][o],F=v?a[T][v]??v:void 0;q.push({yAxis:H,name:F,...G})}else{const T=v;q.push({yAxis:o,name:T,...G})}else throw new Error("Either x or y must be provided when data is provided");const De={evidenceSeriesType:"reference_line",id:Ss(this,Ys),type:"line",animation:!1,silent:!0,markLine:{data:q,animation:!1,...u,emphasis:{disabled:!0},label:{show:!0,position:E,color:j,backgroundColor:s.labelBackgroundColor,borderColor:s.labelBorderColor,borderWidth:s.labelBorderWidth,borderRadius:s.labelBorderRadius,borderType:s.labelBorderType,padding:s.labelPadding,fontSize:s.fontSize,align:s.align,fontWeight:s.bold?"bold":void 0,fontStyle:s.italic?"italic":void 0,formatter:T=>{const H=T.name;let F="";const{xAxis:pe,yAxis:J}=T.data,fe=typeof o<"u",Y=typeof t<"u",kt=fe&&Y,Ye=jn(fe?J:Y?pe:T.value,fe?P:Y?B:"string");return H?(F+=H,!m&&!kt&&(F+=` (${Ye})`)):m||(F+=Ye),F}},lineStyle:{color:p,width:s.lineWidth,type:s.lineType}}};Ss(this,Zs).update(T=>{T.series||(T.series=[]),Array.isArray(T.series)||(T.series=[T.series]);const H=T.series.findIndex(F=>F.id===Ss(this,Ys));return H===-1?T.series.push(De):T.series[H]=De,T})}catch(a){this.setError(String(a.message))}});Za(this,Xs,s),Za(this,Zs,a)}}Qs=new WeakMap,Ys=new WeakMap,Xs=new WeakMap,Zs=new WeakMap;function Pi(r){let s,a;const t=r[51].default,o=fn(t,r,r[53],null);return{c(){s=C("div"),o&&o.c(),this.h()},l(c){s=$(c,"DIV",{class:!0});var n=bt(s);o&&o.l(n),n.forEach(l),this.h()},h(){k(s,"class","invisible")},m(c,n){_(c,s,n),o&&o.m(s,null),r[52](s),a=!0},p(c,n){o&&o.p&&(!a||n[1]&4194304)&&hn(o,t,c,c[53],a?bn(t,c[53],n,null):pn(c[53]),null)},i(c){a||(d(o,c),a=!0)},o(c){b(o,c),a=!1},d(c){c&&l(s),o&&o.d(c),r[52](null)}}}function qn(r){let s,a;return s=new Tn({props:{data:r[2],$$slots:{skeleton:[zn],error:[Jn,({loaded:t})=>({57:t}),({loaded:t})=>[0,t?67108864:0]],empty:[Un]},$$scope:{ctx:r}}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&4&&(c.data=t[2]),o[0]&19|o[1]&71303168&&(c.$$scope={dirty:o,ctx:t}),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function Fn(r){let s,a;return s=new on({props:{error:r[10].error,height:"50",title:ti}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&1024&&(c.error=t[10].error),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function Un(r){let s,a;return s=new Mn({props:{slot:"empty",emptyMessage:r[1],emptySet:r[0],chartType:ti,isInitial:r[4]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&2&&(c.emptyMessage=t[1]),o[0]&1&&(c.emptySet=t[0]),o[0]&16&&(c.isInitial=t[4]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function Jn(r){let s,a;return s=new on({props:{slot:"error",title:ti,error:r[57].error.message}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[1]&67108864&&(c.error=t[57].error.message),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function zn(r){let s;return{c(){s=C("div"),this.h()},l(a){s=$(a,"DIV",{slot:!0,class:!0}),bt(s).forEach(l),this.h()},h(){k(s,"slot","skeleton"),k(s,"class","hidden")},m(a,t){_(a,s,t)},p:V,d(a){a&&l(s)}}}function Vn(r){let s,a,t,o,c,n=r[14].default&&Pi(r);const y=[Fn,qn],j=[];function p(v,m){return v[10].error?0:1}return a=p(r),t=j[a]=y[a](r),{c(){n&&n.c(),s=h(),t.c(),o=Fs()},l(v){n&&n.l(v),s=f(v),t.l(v),o=Fs()},m(v,m){n&&n.m(v,m),_(v,s,m),j[a].m(v,m),_(v,o,m),c=!0},p(v,m){v[14].default?n?(n.p(v,m),m[0]&16384&&d(n,1)):(n=Pi(v),n.c(),d(n,1),n.m(s.parentNode,s)):n&&(Ae(),b(n,1,1,()=>{n=null}),je());let I=a;a=p(v),a===I?j[a].p(v,m):(Ae(),b(j[I],1,1,()=>{j[I]=null}),je(),t=j[a],t?t.p(v,m):(t=j[a]=y[a](v),t.c()),d(t,1),t.m(o.parentNode,o))},i(v){c||(d(n),d(t),c=!0)},o(v){b(n),b(t),c=!1},d(v){v&&(l(s),l(o)),n&&n.d(v),j[a].d(v)}}}let ti="Reference Line";function Wn(r,s,a){let t,o,c,n,y,j,p,v=V,m=()=>(v(),v=Vs(y,g=>a(44,p=g)),y),I,B,P=V,R=()=>(P(),P=Vs(n,g=>a(46,B=g)),n),G,u=V,E=()=>(u(),u=Vs(c,g=>a(47,G=g)),c),q,De=V,T=()=>(De(),De=Vs(o,g=>a(48,q=g)),o),H,F=V,pe=()=>(F(),F=Vs(t,g=>a(49,H=g)),t),J,fe;r.$$.on_destroy.push(()=>v()),r.$$.on_destroy.push(()=>P()),r.$$.on_destroy.push(()=>u()),r.$$.on_destroy.push(()=>De()),r.$$.on_destroy.push(()=>F());let{$$slots:Y={},$$scope:kt}=s;const Ye=un(Y),{resolveColor:z}=Oi();let{emptySet:Xe=void 0}=s,{emptyMessage:Ze=void 0}=s,{x:$e=void 0}=s,{y:gt=void 0}=s,{x2:st=void 0}=s,{y2:K=void 0}=s,{data:be=void 0}=s,{label:Me=void 0}=s,{color:ke="base-content-muted"}=s,{lineType:at="dashed"}=s,{lineColor:ye=void 0}=s,{lineWidth:qe=1.3}=s,{hideValue:Ee=!1}=s,{symbol:ge=void 0}=s,{symbolSize:vt=8}=s,{symbolStart:it=void 0}=s,{symbolStartSize:Fe=8}=s,{symbolEnd:ve=void 0}=s,{symbolEndSize:W=void 0}=s,{labelColor:Ue=void 0}=s,{labelPadding:nt=1}=s,{labelPosition:Le="aboveEnd"}=s,{labelBackgroundColor:Je=void 0}=s,{labelBorderWidth:Q=void 0}=s,{labelBorderRadius:ze=1.5}=s,{labelBorderColor:Ne=void 0}=s,{labelBorderType:Be=void 0}=s,{fontSize:wt=void 0}=s,{align:rt=void 0}=s,{bold:we=void 0}=s,{italic:U=void 0}=s,{preserveWhitespace:Se=!1}=s,Re;const Ve=he.isQuery(be)?be.hash:void 0,yt=$n();Ks(r,yt,g=>a(50,J=g));const xe=Cn(),Pe=new Gn(yt,xe);Ks(r,Pe,g=>a(10,fe=g));const{theme:Ce}=Oi();Ks(r,Ce,g=>a(45,I=g));function St(g){kn[g?"unshift":"push"](()=>{Re=g,a(3,Re)})}return r.$$set=g=>{"emptySet"in g&&a(0,Xe=g.emptySet),"emptyMessage"in g&&a(1,Ze=g.emptyMessage),"x"in g&&a(21,$e=g.x),"y"in g&&a(22,gt=g.y),"x2"in g&&a(23,st=g.x2),"y2"in g&&a(24,K=g.y2),"data"in g&&a(2,be=g.data),"label"in g&&a(15,Me=g.label),"color"in g&&a(16,ke=g.color),"lineType"in g&&a(25,at=g.lineType),"lineColor"in g&&a(17,ye=g.lineColor),"lineWidth"in g&&a(26,qe=g.lineWidth),"hideValue"in g&&a(27,Ee=g.hideValue),"symbol"in g&&a(28,ge=g.symbol),"symbolSize"in g&&a(29,vt=g.symbolSize),"symbolStart"in g&&a(30,it=g.symbolStart),"symbolStartSize"in g&&a(31,Fe=g.symbolStartSize),"symbolEnd"in g&&a(32,ve=g.symbolEnd),"symbolEndSize"in g&&a(33,W=g.symbolEndSize),"labelColor"in g&&a(18,Ue=g.labelColor),"labelPadding"in g&&a(34,nt=g.labelPadding),"labelPosition"in g&&a(35,Le=g.labelPosition),"labelBackgroundColor"in g&&a(19,Je=g.labelBackgroundColor),"labelBorderWidth"in g&&a(36,Q=g.labelBorderWidth),"labelBorderRadius"in g&&a(37,ze=g.labelBorderRadius),"labelBorderColor"in g&&a(20,Ne=g.labelBorderColor),"labelBorderType"in g&&a(38,Be=g.labelBorderType),"fontSize"in g&&a(39,wt=g.fontSize),"align"in g&&a(40,rt=g.align),"bold"in g&&a(41,we=g.bold),"italic"in g&&a(42,U=g.italic),"preserveWhitespace"in g&&a(43,Se=g.preserveWhitespace),"$$scope"in g&&a(53,kt=g.$$scope)},r.$$.update=()=>{r.$$.dirty[0]&65536&&a(16,ke=Ws("ReferenceLine","color",ke)),r.$$.dirty[0]&65536&&pe(a(9,t=z(ke))),r.$$.dirty[0]&131072&&a(17,ye=Ws("ReferenceLine","lineColor",ye)),r.$$.dirty[0]&131072&&T(a(8,o=z(ye))),r.$$.dirty[0]&262144&&a(18,Ue=Ws("ReferenceLine","labelColor",Ue)),r.$$.dirty[0]&262144&&E(a(7,c=z(Ue))),r.$$.dirty[0]&524288&&a(19,Je=Ws("ReferenceLine","labelBackgroundColor",Je)),r.$$.dirty[0]&524288&&R(a(6,n=z(Je))),r.$$.dirty[0]&1048576&&a(20,Ne=Ws("ReferenceLine","labelBorderColor",Ne)),r.$$.dirty[0]&1048576&&m(a(5,y=z(Ne))),r.$$.dirty[0]&8|r.$$.dirty[1]&4096&&Re!=null&&Re.textContent&&(Se?a(15,Me=Re.textContent):a(15,Me=Re.textContent.split(`
`).map(g=>g.trim()).join(`
`))),r.$$.dirty[0]&4&&a(4,j=he.isQuery(be)&&be.hash===Ve),r.$$.dirty[0]&2145419268|r.$$.dirty[1]&1044479&&Pe.setConfig({x:$e,y:gt,x2:st,y2:K,data:be,label:Me,color:H,symbolStart:it??"none",symbolStartSize:ws(Fe),symbolEnd:ve??ge??"none",symbolEndSize:W?ws(W):ws(vt),lineType:at,lineColor:q,lineWidth:ws(qe),labelColor:G,labelPadding:ws(nt),labelPosition:Le,labelBackgroundColor:B??In(I.colors["base-100"]).alpha(.8).css(),labelBorderColor:p,labelBorderWidth:ws(Q),labelBorderRadius:ws(ze),labelBorderType:Be,hideValue:ei(Ee),fontSize:ws(wt),align:rt,bold:ei(we),italic:ei(U)})},[Xe,Ze,be,Re,j,y,n,c,o,t,fe,yt,Pe,Ce,Ye,Me,ke,ye,Ue,Je,Ne,$e,gt,st,K,at,qe,Ee,ge,vt,it,Fe,ve,W,nt,Le,Q,ze,Be,wt,rt,we,U,Se,p,I,B,G,q,H,J,Y,St,kt]}class qa extends nn{constructor(s){super(),rn(this,s,Wn,Vn,an,{emptySet:0,emptyMessage:1,x:21,y:22,x2:23,y2:24,data:2,label:15,color:16,lineType:25,lineColor:17,lineWidth:26,hideValue:27,symbol:28,symbolSize:29,symbolStart:30,symbolStartSize:31,symbolEnd:32,symbolEndSize:33,labelColor:18,labelPadding:34,labelPosition:35,labelBackgroundColor:19,labelBorderWidth:36,labelBorderRadius:37,labelBorderColor:20,labelBorderType:38,fontSize:39,align:40,bold:41,italic:42,preserveWhitespace:43},null,[-1,-1])}}function Kn(r){let s,a=D.title+"",t;return{c(){s=C("h1"),t=xn(a),this.h()},l(o){s=$(o,"H1",{class:!0});var c=bt(s);t=Sn(c,a),c.forEach(l),this.h()},h(){k(s,"class","title")},m(o,c){_(o,s,c),As(s,t)},p:V,d(o){o&&l(s)}}}function Qn(r){return{c(){this.h()},l(s){this.h()},h(){document.title="Evidence"},m:V,p:V,d:V}}function Yn(r){let s,a,t,o,c;return document.title=s=D.title,{c(){a=h(),t=C("meta"),o=h(),c=C("meta"),this.h()},l(n){a=f(n),t=$(n,"META",{property:!0,content:!0}),o=f(n),c=$(n,"META",{name:!0,content:!0}),this.h()},h(){var n,y;k(t,"property","og:title"),k(t,"content",((n=D.og)==null?void 0:n.title)??D.title),k(c,"name","twitter:title"),k(c,"content",((y=D.og)==null?void 0:y.title)??D.title)},m(n,y){_(n,a,y),_(n,t,y),_(n,o,y),_(n,c,y)},p(n,y){y&0&&s!==(s=D.title)&&(document.title=s)},d(n){n&&(l(a),l(t),l(o),l(c))}}}function Xn(r){var c,n;let s,a,t=(D.description||((c=D.og)==null?void 0:c.description))&&Zn(),o=((n=D.og)==null?void 0:n.image)&&er();return{c(){t&&t.c(),s=h(),o&&o.c(),a=Fs()},l(y){t&&t.l(y),s=f(y),o&&o.l(y),a=Fs()},m(y,j){t&&t.m(y,j),_(y,s,j),o&&o.m(y,j),_(y,a,j)},p(y,j){var p,v;(D.description||(p=D.og)!=null&&p.description)&&t.p(y,j),(v=D.og)!=null&&v.image&&o.p(y,j)},d(y){y&&(l(s),l(a)),t&&t.d(y),o&&o.d(y)}}}function Zn(r){let s,a,t,o,c;return{c(){s=C("meta"),a=h(),t=C("meta"),o=h(),c=C("meta"),this.h()},l(n){s=$(n,"META",{name:!0,content:!0}),a=f(n),t=$(n,"META",{property:!0,content:!0}),o=f(n),c=$(n,"META",{name:!0,content:!0}),this.h()},h(){var n,y,j;k(s,"name","description"),k(s,"content",D.description??((n=D.og)==null?void 0:n.description)),k(t,"property","og:description"),k(t,"content",((y=D.og)==null?void 0:y.description)??D.description),k(c,"name","twitter:description"),k(c,"content",((j=D.og)==null?void 0:j.description)??D.description)},m(n,y){_(n,s,y),_(n,a,y),_(n,t,y),_(n,o,y),_(n,c,y)},p:V,d(n){n&&(l(s),l(a),l(t),l(o),l(c))}}}function er(r){let s,a,t;return{c(){s=C("meta"),a=h(),t=C("meta"),this.h()},l(o){s=$(o,"META",{property:!0,content:!0}),a=f(o),t=$(o,"META",{name:!0,content:!0}),this.h()},h(){var o,c;k(s,"property","og:image"),k(s,"content",Hi((o=D.og)==null?void 0:o.image)),k(t,"name","twitter:image"),k(t,"content",Hi((c=D.og)==null?void 0:c.image))},m(o,c){_(o,s,c),_(o,a,c),_(o,t,c)},p:V,d(o){o&&(l(s),l(a),l(t))}}}function Gi(r){let s,a;return s=new He({props:{queryID:"taxonomy_signal_headline",queryResult:r[0]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&1&&(c.queryResult=t[0]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function tr(r){let s,a,t,o,c,n,y,j,p,v;return s=new N({props:{id:"series",title:"Figure B.1 line"}}),t=new N({props:{id:"taxonomy_items",title:"Items",fmt:"#,##0"}}),c=new N({props:{id:"nov_2022_per_1k",title:"Nov 2022",fmt:"#,##0.0"}}),y=new N({props:{id:"latest_per_1k",title:"Latest",fmt:"#,##0.0"}}),p=new N({props:{id:"change_since_nov_2022",title:"Change",fmt:"+0.0%;-0.0%;0.0%"}}),{c(){A(s.$$.fragment),a=h(),A(t.$$.fragment),o=h(),A(c.$$.fragment),n=h(),A(y.$$.fragment),j=h(),A(p.$$.fragment)},l(m){x(s.$$.fragment,m),a=f(m),x(t.$$.fragment,m),o=f(m),x(c.$$.fragment,m),n=f(m),x(y.$$.fragment,m),j=f(m),x(p.$$.fragment,m)},m(m,I){S(s,m,I),_(m,a,I),S(t,m,I),_(m,o,I),S(c,m,I),_(m,n,I),S(y,m,I),_(m,j,I),S(p,m,I),v=!0},p:V,i(m){v||(d(s.$$.fragment,m),d(t.$$.fragment,m),d(c.$$.fragment,m),d(y.$$.fragment,m),d(p.$$.fragment,m),v=!0)},o(m){b(s.$$.fragment,m),b(t.$$.fragment,m),b(c.$$.fragment,m),b(y.$$.fragment,m),b(p.$$.fragment,m),v=!1},d(m){m&&(l(a),l(o),l(n),l(j)),w(s,m),w(t,m),w(c,m),w(y,m),w(p,m)}}}function sr(r){let s,a;return s=new qa({props:{x:"2022-11-01",label:"Nov. 2022",lineColor:"#666666",lineType:"dashed",labelPosition:"belowCenter",hideValue:"true"}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p:V,i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function qi(r){let s,a;return s=new He({props:{queryID:"nlx_skill_ai_stem_chatgpt_index",queryResult:r[1]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&2&&(c.queryResult=t[1]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function Fi(r){let s,a;return s=new He({props:{queryID:"nlx_signal_index_summary",queryResult:r[2]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&4&&(c.queryResult=t[2]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function ar(r){let s,a,t,o,c,n,y,j;return s=new N({props:{id:"series",title:"Signal"}}),t=new N({props:{id:"nov_2022_per_1k",title:"Nov 2022",fmt:"#,##0.0"}}),c=new N({props:{id:"latest_per_1k",title:"Latest",fmt:"#,##0.0"}}),y=new N({props:{id:"latest_index",title:"Index",fmt:"0.00"}}),{c(){A(s.$$.fragment),a=h(),A(t.$$.fragment),o=h(),A(c.$$.fragment),n=h(),A(y.$$.fragment)},l(p){x(s.$$.fragment,p),a=f(p),x(t.$$.fragment,p),o=f(p),x(c.$$.fragment,p),n=f(p),x(y.$$.fragment,p)},m(p,v){S(s,p,v),_(p,a,v),S(t,p,v),_(p,o,v),S(c,p,v),_(p,n,v),S(y,p,v),j=!0},p:V,i(p){j||(d(s.$$.fragment,p),d(t.$$.fragment,p),d(c.$$.fragment,p),d(y.$$.fragment,p),j=!0)},o(p){b(s.$$.fragment,p),b(t.$$.fragment,p),b(c.$$.fragment,p),b(y.$$.fragment,p),j=!1},d(p){p&&(l(a),l(o),l(n)),w(s,p),w(t,p),w(c,p),w(y,p)}}}function Ui(r){let s,a;return s=new He({props:{queryID:"stem_task_agreement_headline",queryResult:r[3]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&8&&(c.queryResult=t[3]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function Ji(r){let s,a;return s=new He({props:{queryID:"stem_task_agreement_summary",queryResult:r[4]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&16&&(c.queryResult=t[4]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function ir(r){let s,a,t,o,c,n,y,j,p,v;return s=new N({props:{id:"agreement_group",title:"Review group"}}),t=new N({props:{id:"reviewed_n",title:"Reviewed rows",fmt:"#,##0"}}),c=new N({props:{id:"adjudicated_n",title:"Complete rows",fmt:"#,##0"}}),y=new N({props:{id:"included_n",title:"LLM-validated rows",fmt:"#,##0"}}),p=new N({props:{id:"pass_rate",title:"LLM-valid rate",fmt:"0.0%"}}),{c(){A(s.$$.fragment),a=h(),A(t.$$.fragment),o=h(),A(c.$$.fragment),n=h(),A(y.$$.fragment),j=h(),A(p.$$.fragment)},l(m){x(s.$$.fragment,m),a=f(m),x(t.$$.fragment,m),o=f(m),x(c.$$.fragment,m),n=f(m),x(y.$$.fragment,m),j=f(m),x(p.$$.fragment,m)},m(m,I){S(s,m,I),_(m,a,I),S(t,m,I),_(m,o,I),S(c,m,I),_(m,n,I),S(y,m,I),_(m,j,I),S(p,m,I),v=!0},p:V,i(m){v||(d(s.$$.fragment,m),d(t.$$.fragment,m),d(c.$$.fragment,m),d(y.$$.fragment,m),d(p.$$.fragment,m),v=!0)},o(m){b(s.$$.fragment,m),b(t.$$.fragment,m),b(c.$$.fragment,m),b(y.$$.fragment,m),b(p.$$.fragment,m),v=!1},d(m){m&&(l(a),l(o),l(n),l(j)),w(s,m),w(t,m),w(c,m),w(y,m),w(p,m)}}}function zi(r){let s,a;return s=new He({props:{queryID:"onet_ai_coverage",queryResult:r[5]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&32&&(c.queryResult=t[5]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function nr(r){let s,a,t,o,c,n,y,j;return s=new N({props:{id:"task_id",title:"Task ID",fmt:"0"}}),t=new N({props:{id:"matched_term",title:"Matched term"}}),c=new N({props:{id:"task_text",title:"Task statement"}}),y=new N({props:{id:"provenance",title:"Provenance"}}),{c(){A(s.$$.fragment),a=h(),A(t.$$.fragment),o=h(),A(c.$$.fragment),n=h(),A(y.$$.fragment)},l(p){x(s.$$.fragment,p),a=f(p),x(t.$$.fragment,p),o=f(p),x(c.$$.fragment,p),n=f(p),x(y.$$.fragment,p)},m(p,v){S(s,p,v),_(p,a,v),S(t,p,v),_(p,o,v),S(c,p,v),_(p,n,v),S(y,p,v),j=!0},p:V,i(p){j||(d(s.$$.fragment,p),d(t.$$.fragment,p),d(c.$$.fragment,p),d(y.$$.fragment,p),j=!0)},o(p){b(s.$$.fragment,p),b(t.$$.fragment,p),b(c.$$.fragment,p),b(y.$$.fragment,p),j=!1},d(p){p&&(l(a),l(o),l(n)),w(s,p),w(t,p),w(c,p),w(y,p)}}}function Vi(r){let s,a;return s=new He({props:{queryID:"sparse_onet_ai_by_month",queryResult:r[6]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&64&&(c.queryResult=t[6]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function Wi(r){let s,a;return s=new He({props:{queryID:"esco_data_science_skill",queryResult:r[7]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&128&&(c.queryResult=t[7]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function rr(r){let s,a,t,o,c,n,y,j,p,v,m,I,B,P,R,G;return s=new N({props:{id:"month_start",title:"Month"}}),t=new N({props:{id:"corpus",title:"Corpus"}}),c=new N({props:{id:"esco_skill_code",title:"ESCO skill group"}}),y=new N({props:{id:"n_jobs_or_postings",title:"Postings / active jobs",fmt:"#,##0"}}),p=new N({props:{id:"jobs_or_postings_with_skill",title:"With skill",fmt:"#,##0"}}),m=new N({props:{id:"skill_posting_or_job_per_1k",title:"With skill per 1,000",fmt:"0.0"}}),B=new N({props:{id:"skill_posting_or_job_share",title:"Share",fmt:"0.0%"}}),R=new N({props:{id:"skill_mentions",title:"Skill mentions",fmt:"#,##0"}}),{c(){A(s.$$.fragment),a=h(),A(t.$$.fragment),o=h(),A(c.$$.fragment),n=h(),A(y.$$.fragment),j=h(),A(p.$$.fragment),v=h(),A(m.$$.fragment),I=h(),A(B.$$.fragment),P=h(),A(R.$$.fragment)},l(u){x(s.$$.fragment,u),a=f(u),x(t.$$.fragment,u),o=f(u),x(c.$$.fragment,u),n=f(u),x(y.$$.fragment,u),j=f(u),x(p.$$.fragment,u),v=f(u),x(m.$$.fragment,u),I=f(u),x(B.$$.fragment,u),P=f(u),x(R.$$.fragment,u)},m(u,E){S(s,u,E),_(u,a,E),S(t,u,E),_(u,o,E),S(c,u,E),_(u,n,E),S(y,u,E),_(u,j,E),S(p,u,E),_(u,v,E),S(m,u,E),_(u,I,E),S(B,u,E),_(u,P,E),S(R,u,E),G=!0},p:V,i(u){G||(d(s.$$.fragment,u),d(t.$$.fragment,u),d(c.$$.fragment,u),d(y.$$.fragment,u),d(p.$$.fragment,u),d(m.$$.fragment,u),d(B.$$.fragment,u),d(R.$$.fragment,u),G=!0)},o(u){b(s.$$.fragment,u),b(t.$$.fragment,u),b(c.$$.fragment,u),b(y.$$.fragment,u),b(p.$$.fragment,u),b(m.$$.fragment,u),b(B.$$.fragment,u),b(R.$$.fragment,u),G=!1},d(u){u&&(l(a),l(o),l(n),l(j),l(v),l(I),l(P)),w(s,u),w(t,u),w(c,u),w(y,u),w(p,u),w(m,u),w(B,u),w(R,u)}}}function Ki(r){let s,a;return s=new He({props:{queryID:"esco_data_skill_broad",queryResult:r[8]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&256&&(c.queryResult=t[8]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function Qi(r){let s,a;return s=new He({props:{queryID:"ai_keyword_correlation",queryResult:r[9]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&512&&(c.queryResult=t[9]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function Yi(r){let s,a;return s=new He({props:{queryID:"ai_keyword_correlation_summary",queryResult:r[10]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&1024&&(c.queryResult=t[10]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function or(r){let s,a;return s=new qa({props:{x:"2022-11-01",label:"Nov. 2022",lineColor:"#666666",lineType:"dashed",labelPosition:"belowCenter",hideValue:"true"}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p:V,i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function lr(r){let s,a,t,o,c,n,y,j,p,v,m,I,B,P,R,G;return s=new N({props:{id:"month_start",title:"Month"}}),t=new N({props:{id:"corpus",title:"Corpus"}}),c=new N({props:{id:"esco_skill_code",title:"ESCO rollup"}}),y=new N({props:{id:"n_jobs_or_postings",title:"Postings / active jobs",fmt:"#,##0"}}),p=new N({props:{id:"jobs_or_postings_with_skill",title:"Rollup count",fmt:"#,##0"}}),m=new N({props:{id:"skill_posting_or_job_per_1k",title:"Rollup per 1,000",fmt:"0.0"}}),B=new N({props:{id:"skill_posting_or_job_share",title:"Share",fmt:"0.0%"}}),R=new N({props:{id:"skill_mentions",title:"Skill mentions",fmt:"#,##0"}}),{c(){A(s.$$.fragment),a=h(),A(t.$$.fragment),o=h(),A(c.$$.fragment),n=h(),A(y.$$.fragment),j=h(),A(p.$$.fragment),v=h(),A(m.$$.fragment),I=h(),A(B.$$.fragment),P=h(),A(R.$$.fragment)},l(u){x(s.$$.fragment,u),a=f(u),x(t.$$.fragment,u),o=f(u),x(c.$$.fragment,u),n=f(u),x(y.$$.fragment,u),j=f(u),x(p.$$.fragment,u),v=f(u),x(m.$$.fragment,u),I=f(u),x(B.$$.fragment,u),P=f(u),x(R.$$.fragment,u)},m(u,E){S(s,u,E),_(u,a,E),S(t,u,E),_(u,o,E),S(c,u,E),_(u,n,E),S(y,u,E),_(u,j,E),S(p,u,E),_(u,v,E),S(m,u,E),_(u,I,E),S(B,u,E),_(u,P,E),S(R,u,E),G=!0},p:V,i(u){G||(d(s.$$.fragment,u),d(t.$$.fragment,u),d(c.$$.fragment,u),d(y.$$.fragment,u),d(p.$$.fragment,u),d(m.$$.fragment,u),d(B.$$.fragment,u),d(R.$$.fragment,u),G=!0)},o(u){b(s.$$.fragment,u),b(t.$$.fragment,u),b(c.$$.fragment,u),b(y.$$.fragment,u),b(p.$$.fragment,u),b(m.$$.fragment,u),b(B.$$.fragment,u),b(R.$$.fragment,u),G=!1},d(u){u&&(l(a),l(o),l(n),l(j),l(v),l(I),l(P)),w(s,u),w(t,u),w(c,u),w(y,u),w(p,u),w(m,u),w(B,u),w(R,u)}}}function Xi(r){let s,a;return s=new He({props:{queryID:"strict_ai_intensity_by_month",queryResult:r[11]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&2048&&(c.queryResult=t[11]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function Zi(r){let s,a;return s=new He({props:{queryID:"lenient_ai_intensity_by_month",queryResult:r[12]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&4096&&(c.queryResult=t[12]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function en(r){let s,a;return s=new He({props:{queryID:"nlx_skill_ai_magnitude",queryResult:r[13]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&8192&&(c.queryResult=t[13]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function _r(r){let s,a,t,o,c,n,y,j,p,v;return s=new N({props:{id:"series",title:"Series"}}),t=new N({props:{id:"nov_2022_per_1k",title:"Nov/1k",fmt:"#,##0.0"}}),c=new N({props:{id:"nov_2022_vs_strict_multiple",title:"Nov x strict",fmt:"0.0"}}),y=new N({props:{id:"mean_per_1k",title:"Mean/1k",fmt:"#,##0.0"}}),p=new N({props:{id:"mean_vs_strict_multiple",title:"Mean x strict",fmt:"0.0"}}),{c(){A(s.$$.fragment),a=h(),A(t.$$.fragment),o=h(),A(c.$$.fragment),n=h(),A(y.$$.fragment),j=h(),A(p.$$.fragment)},l(m){x(s.$$.fragment,m),a=f(m),x(t.$$.fragment,m),o=f(m),x(c.$$.fragment,m),n=f(m),x(y.$$.fragment,m),j=f(m),x(p.$$.fragment,m)},m(m,I){S(s,m,I),_(m,a,I),S(t,m,I),_(m,o,I),S(c,m,I),_(m,n,I),S(y,m,I),_(m,j,I),S(p,m,I),v=!0},p:V,i(m){v||(d(s.$$.fragment,m),d(t.$$.fragment,m),d(c.$$.fragment,m),d(y.$$.fragment,m),d(p.$$.fragment,m),v=!0)},o(m){b(s.$$.fragment,m),b(t.$$.fragment,m),b(c.$$.fragment,m),b(y.$$.fragment,m),b(p.$$.fragment,m),v=!1},d(m){m&&(l(a),l(o),l(n),l(j)),w(s,m),w(t,m),w(c,m),w(y,m),w(p,m)}}}function tn(r){let s,a;return s=new He({props:{queryID:"denominator_sensitivity_nlx_strict_ai",queryResult:r[14]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&16384&&(c.queryResult=t[14]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function sn(r){let s,a;return s=new He({props:{queryID:"denominator_sensitivity_usajobs_strict_ai",queryResult:r[15]}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p(t,o){const c={};o[0]&32768&&(c.queryResult=t[15]),s.$set(c)},i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function cr(r){let s,a;return s=new qa({props:{x:"2022-11-01",label:"Nov. 2022",lineColor:"#666666",lineType:"dashed",labelPosition:"belowCenter",hideValue:"true"}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p:V,i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function mr(r){let s,a;return s=new qa({props:{x:"2025-01-01",label:"Jan. 2025",lineColor:"#666666",lineType:"dashed",labelPosition:"belowCenter",hideValue:"true"}}),{c(){A(s.$$.fragment)},l(t){x(s.$$.fragment,t)},m(t,o){S(s,t,o),a=!0},p:V,i(t){a||(d(s.$$.fragment,t),a=!0)},o(t){b(s.$$.fragment,t),a=!1},d(t){w(s,t)}}}function dr(r){let s,a,t,o,c,n,y='<a href="/us-lmi/methodology" class="hover:underline">Methods</a> <a href="/us-lmi/methodology/audit-trail" class="hover:underline">Audit Trail</a>',j,p,v='<a href="#taxonomies-shape-what-posting-measures-can-see">Taxonomies Shape What Posting Measures Can See</a>',m,I,B="Posting-derived task, skill, and concept signals are useful, but they are bounded by the taxonomy used to search for them. This page is a methodology caveat rather than a top-level finding. It uses AI-related evidence as a stress test: sparse O*NET task statements, ESCO skill rollups, STEM task agreement outputs, AIMatch scores, and posting keyword concepts do not collapse into the same signal. The same NLx corpus can imply decline, stability, modest growth, or near-tripling depending on what the taxonomy is capable of seeing.",P,R,G="<strong>NLx data disclaimer.</strong> The National Labor Exchange (NLx) Data Trust bears no responsibility for the analyses or interpretations of the data presented here.",u,E,q,De="Taxonomy coverage and movement in the indexed AI-related signals",T,H,F='<a href="#table-pt-1-taxonomy-coverage-and-signal-movement-summary">Table PT-1. Taxonomy Coverage and Signal Movement Summary</a>',pe,J,fe,Y,kt='<a href="#ai-signal-comparison">AI-Signal Comparison</a>',Ye,z,Xe='<a href="#skill-onet-ml--ai-task-stem-task-and-aimatch-signals-indexed-to-chatgpt-launch-nlx-corpus">Skill, O*NET ML / AI Task, STEM Task, and AIMatch Signals Indexed to ChatGPT Launch (NLx corpus)</a>',Ze,$e,gt='<span class="svelte-172dr1u"><i class="key-line solid svelte-172dr1u" style="--key-color:#0072B2"></i>S2 information</span> <span class="svelte-172dr1u"><i class="key-line dashed svelte-172dr1u" style="--key-color:#E69F00"></i>S5 digital</span> <span class="svelte-172dr1u"><i class="key-line shortdashdot svelte-172dr1u" style="--key-color:#CC79A7"></i>O*NET ML / AI tasks</span> <span class="svelte-172dr1u"><i class="key-line dashdot svelte-172dr1u" style="--key-color:#D55E00"></i>STEM tasks</span> <span class="svelte-172dr1u"><i class="key-line longdash svelte-172dr1u" style="--key-color:#56B4E9"></i>Strict AIMatch</span> <span class="svelte-172dr1u"><i class="key-line solid-thin svelte-172dr1u" style="--key-color:#000000"></i>Lenient AIMatch</span>',st,K,be='<a href="#figure-pt-1-ai-adjacent-posting-signals-indexed-to-chatgpt-launch">Figure PT-1. AI-Adjacent Posting Signals Indexed to ChatGPT Launch</a>',Me,ke,at,ye,qe='<em class="markdown">Note: Each series is first expressed per 1,000 active jobs in the NLx corpus, then divided by that series&#39; November 2022 value; index = 1.0 in November 2022 for every series. The AI keyword concept line is reserved for a deduplicated any-keyword aggregate from the updated NLx <code class="markdown">job_concepts.tsv</code> pipeline; component dictionary-family series are shown separately in Figure B.5. O*NET ML / AI tasks are O*NET task statements mentioning AI, artificial intelligence, or machine learning. STEM tasks are O*NET task IDs retained by the prompt-v2 STEM task LLM agreement procedure.</em>',Ee,ge,vt="Figure B.1 is the core taxonomy-signal comparison. Since November 2022, strict AIMatch rises sharply, while ESCO digital skills and STEM-task signals decline and broader information-skill signals remain roughly flat. The divergence is the point: conclusions about technology-related demand depend on what the taxonomy is capable of seeing.",it,Fe,ve,W,Ue='<a href="#table-b1-ai-adjacent-signal-movement-since-chatgpt-launch-nlx-corpus">Table B.1. AI-adjacent signal movement since ChatGPT launch (NLx corpus)</a>',nt,Le,Je,Q,ze='<a href="#stem-task-agreement-procedure">STEM Task Agreement Procedure</a>',Ne,Be,wt="The STEM-task line in Figure B.1 uses a task-level two-model agreement procedure, not the occupation-level O*NET STEM list alone. Claude Sonnet 4.6 and GPT-4o reviewed candidate O*NET task IDs and retained task IDs only when both models returned YES under the prompt definition of substantively STEM work.",rt,we,U,Se,Re,Ve,yt,xe,Pe,Ce,St,g,ot,xt="STEM task agreement summary",lt,Ge,js='<a href="#table-pt-2-stem-task-agreement-summary">Table PT-2. STEM Task Agreement Summary</a>',Yt,_t,ct,Oe,Xt='The procedure reviewed 7,216 complete rows representing 6,848 distinct task IDs. It retained 1,440 rows, corresponding to 1,375 distinct STEM task IDs; the row/task-ID difference reflects task IDs appearing through more than one review pathway. Download the underlying workbook here: <a href="/us-lmi/downloads/agreement/sonnet_gpt_stem_tasks_results.xlsx" class="markdown">STEM task agreement data</a>. The prompt and additional agreement-workbook links are in the <a href="/us-lmi/methodology/audit-trail#downloadable-two-model-agreement-workbooks" class="markdown">Agreement and Audit Trail</a>.',Zt,mt,$s='O*NET 27.2 task statements are searched for <code class="markdown">artificial intelligence</code>, the standalone acronym <code class="markdown">AI</code>, and <code class="markdown">machine learning</code>.',dt,Ie,es='<a href="#sparse-onet-and-esco-coverage">Sparse O*NET and ESCO Coverage</a>',ts,At,et,jt='<a href="#table-b2-onet-task-statements-containing-ai-related-terms">Table B.2. O*NET task statements containing AI-related terms</a>',ut,We,ss,$t,Ct,ft,Te,as='<a href="#figure-b2-sparse-onet-ai-task-intensity">Figure B.2. Sparse O*NET AI Task Intensity</a>',is,ht,ns,Ke,Qe,It,tt,Cs='<a href="#figure-b3-narrow-esco-data-skill-evidence">Figure B.3. Narrow ESCO Data Skill Evidence</a>',rs,M,ea='ESCO terms used here: narrow data-skill groups are <code class="markdown">S2.7</code>, &quot;analysing and evaluating information and data,&quot; and <code class="markdown">S5.5</code>, &quot;accessing and analysing digital data.&quot; Broad rollups are all <code class="markdown">S2.*</code> information skills and all <code class="markdown">S5.*</code> digital/computer skills.',ta,os,sa,Tt,si='<a href="#table-b3-narrow-esco-data-skill-evidence-by-month-and-corpus">Table B.3. Narrow ESCO data-skill evidence by month and corpus</a>',aa,ls,ia,Is,Ts,na,Mt,ai='<a href="#figure-b4-broad-esco-information-s2-and-digital-skill-s5-rollups">Figure B.4. Broad ESCO Information (S2) and Digital Skill (S5) Rollups</a>',ra,_s,oa,cs,ii='The broad rollups make the contrast visible: status quo skill taxonomies can show substantial information-skill or digital-skill coverage without saying whether postings are asking for the narrower data-science-adjacent work captured by <code class="markdown">S2.7</code> and <code class="markdown">S5.5</code>. Broad rollups from the NLx corpus are assembled from aggregate skill-job counts, so read them as rollup coverage rather than deduplicated job-level incidence.',la,Et,ni='<a href="#posting-derived-ai-keyword-evidence">Posting-Derived AI Keyword Evidence</a>',_a,Ms,Es,Ls,ca,Lt,ri='<a href="#figure-b5-ai-job-postings-by-ai-concept-family-nlx-corpus">Figure B.5. AI Job Postings by AI Concept Family (NLx corpus)</a>',ma,Nt,oi='<span class="svelte-172dr1u"><i style="--legend-color:#0072B2" class="svelte-172dr1u"></i>Stanford Tech skills</span> <span class="svelte-172dr1u"><i style="--legend-color:#009E73" class="svelte-172dr1u"></i>Bowen-Wu AI keywords</span> <span class="svelte-172dr1u"><i style="--legend-color:#332288" class="svelte-172dr1u"></i>Meisenbacher AI keywords</span> <span class="svelte-172dr1u"><i style="--legend-color:#AA4499" class="svelte-172dr1u"></i>Tambe AI algorithms</span> <span class="svelte-172dr1u"><i style="--legend-color:#117733" class="svelte-172dr1u"></i>Stanford AI focus areas</span> <span class="svelte-172dr1u"><i style="--legend-color:#999933" class="svelte-172dr1u"></i>Stanford AI skill clusters</span> <span class="svelte-172dr1u"><i style="--legend-color:#44AA99" class="svelte-172dr1u"></i>Lightcast AI skills</span> <span class="svelte-172dr1u"><i style="--legend-color:#88CCEE" class="svelte-172dr1u"></i>Stanford GenAI skills</span> <span class="svelte-172dr1u"><i style="--legend-color:#882255" class="svelte-172dr1u"></i>Tambe AI machines</span> <span class="svelte-172dr1u"><i style="--legend-color:#CC6677" class="svelte-172dr1u"></i>Tambe AI machines alt</span> <span class="svelte-172dr1u"><i style="--legend-color:#DDCC77" class="svelte-172dr1u"></i>Tambe AI machines tech</span>',da,Bt,li='<a href="#figure-pt-2-ai-keyword-concept-family-time-series">Figure PT-2. AI Keyword Concept-Family Time Series</a>',ua,ms,fa,ds,_i='The keyword comparison uses AI concept-family aggregates from the NLx corpus rather than USAJOBS ConceptSearch rows, keeping the keyword evidence in the same national NLx corpus as Figure B.1. Each line is a pre-aggregated concept-family incidence series: <code class="markdown">total_jobs</code> is the count of active jobs with at least one match to that concept family in the month, divided by the monthly active-job denominator. The chart does not add component keywords or concept families together, so it avoids double-counting postings that match multiple terms or multiple AI dictionaries. Exact component keyword lists are not redistributed here.',ha,us,ci="Table B.4. Broad ESCO information and digital skill evidence by month and corpus",pa,Rt,mi='<a href="#table-pt-3-broad-esco-data-skill-evidence-by-month-and-corpus">Table PT-3. Broad ESCO Data-Skill Evidence by Month and Corpus</a>',ba,fs,ka,Ot,di='<a href="#aimatch-code-intensity">AIMatch Code Intensity</a>',ya,Ns,Bs,ga,Ht,ui='<a href="#figure-b6-strict-ai-code-intensity">Figure B.6. Strict AI Code Intensity</a>',va,hs,wa,Rs,Os,Sa,Dt,fi='<a href="#figure-b7-lenient-ai-code-intensity">Figure B.7. Lenient AI Code Intensity</a>',xa,ps,Aa,Pt,hi='<a href="#signal-magnitudes-nlx-corpus">Signal Magnitudes (NLx corpus)</a>',ja,Hs,Gt,pi='<a href="#table-b5-ai-adjacent-signal-magnitudes-relative-to-strict-aimatch-nlx-corpus">Table B.5. AI-adjacent signal magnitudes relative to strict AIMatch (NLx corpus)</a>',$a,bs,Ca,ks,bi='AI code profile lookup tables have been moved out of this main caveat page to <a href="/us-lmi/methodology/ai-code-profiles" class="markdown">AI Code Profiles</a>, so this page can keep the focus on taxonomy coverage and denominator sensitivity.',Ia,qt,ki='<a href="#methodological-demonstration-denominator-sensitivity">Methodological Demonstration: Denominator Sensitivity</a>',Ta,Ds,Ps,Gs,Ma,Ft,yi='<a href="#figure-b8-methodological-demonstration-strict-ai-signals-indexed-to-november-2022-nlx-corpus">Figure B.8. Methodological Demonstration: Strict AI Signals Indexed to November 2022 (NLx corpus)</a>',Ea,Ut,gi='<span class="svelte-172dr1u"><i class="key-line solid svelte-172dr1u" style="--key-color:#0072B2"></i>NLx corpus: raw strict AI code volume</span> <span class="svelte-172dr1u"><i class="key-line dashed svelte-172dr1u" style="--key-color:#009E73"></i>NLx corpus: strict AI codes per active job</span>',La,ys,Na,qs,Ba,Jt,vi='<a href="#figure-b9-methodological-demonstration-usajobs-strict-ai-signals-indexed-to-biden-administration-mean">Figure B.9. Methodological Demonstration: USAJOBS Strict AI Signals, Indexed to Biden-Administration Mean</a>',Ra,zt,wi='<span class="svelte-172dr1u"><i class="key-line dotted svelte-172dr1u" style="--key-color:#D55E00"></i>USAJOBS: raw strict AI code volume</span> <span class="svelte-172dr1u"><i class="key-line shortdashdot svelte-172dr1u" style="--key-color:#CC79A7"></i>USAJOBS: strict AI codes per active posting</span> <span class="svelte-172dr1u"><i class="key-line dashdot svelte-172dr1u" style="--key-color:#E69F00"></i>USAJOBS: strict AI codes per posting started</span> <span class="svelte-172dr1u"><i class="key-line longdash svelte-172dr1u" style="--key-color:#666666"></i>USAJOBS: strict AI codes per posting ended</span>',Oa,Vt,Si='<a href="#figure-pt-3-usajobs-strict-ai-denominator-sensitivity">Figure PT-3. USAJOBS Strict AI Denominator Sensitivity</a>',Ha,gs,Da,vs,xi='<em class="markdown">Note: These methodological demonstrations hold the numerator definition fixed to strict AIMatch AI codes and vary the denominator or month assignment. The NLx corpus panel compares raw strict-code volume with strict codes per monthly active job, indexed to November 2022. The USAJOBS panel compares raw active-month code volume, strict codes per monthly active posting, strict codes per posting started, and strict codes per posting ended, indexed to the February 2021-January 2025 Biden-administration monthly mean. Ordinary dashboard trend figures use monthly active postings/jobs; these figures show how denominator and timing choices can alter the apparent trend.</em>',Pa,Wt=typeof D<"u"&&D.title&&D.hide_title!==!0&&Kn();function _n(e,i){return typeof D<"u"&&D.title?Yn:Qn}let Us=_n()(r),Kt=typeof D=="object"&&Xn(),X=r[0]&&Gi(r);J=new xs({props:{data:r[0],rows:"7",$$slots:{default:[tr]},$$scope:{ctx:r}}}),ke=new Qt({props:{data:r[1],x:"month_start",y:"indexed_value",yFmt:"0.0",series:"series",yAxisTitle:"Index, Nov. 2022 = 1 (log scale)",chartAreaHeight:"420",seriesColors:{"S2 information":"#0072B2","S5 digital":"#E69F00","AI keyword concepts":"#009E73","O&#42;NET ML / AI tasks":"#CC79A7","STEM tasks":"#D55E00","Strict AIMatch":"#56B4E9","Lenient AIMatch":"#000000"},seriesOptions:{lineWidth:2.5,symbol:"none"},echartsOptions:{legend:{show:!1},grid:{top:24,left:84,containLabel:!0},yAxis:{type:"log",logBase:10,min:.01,name:"Index, Nov. 2022 = 1 (log scale)",nameLocation:"middle",nameRotate:90,nameGap:58},series:[{name:"S2 information",lineStyle:{type:"solid",width:2.5,color:"#0072B2"}},{name:"S5 digital",lineStyle:{type:"dashed",width:2.5,color:"#E69F00"}},{name:"AI keyword concepts",lineStyle:{type:"dotted",width:3,color:"#009E73"}},{name:"O&#42;NET ML / AI tasks",lineStyle:{type:[4,3,1,3],width:2.5,color:"#CC79A7"}},{name:"STEM tasks",lineStyle:{type:[8,4,2,4],width:2.5,color:"#D55E00"}},{name:"Strict AIMatch",lineStyle:{type:[10,3],width:2.5,color:"#56B4E9"}},{name:"Lenient AIMatch",lineStyle:{type:"solid",width:1.75,color:"#000000"}}]},$$slots:{default:[sr]},$$scope:{ctx:r}}});let Z=r[1]&&qi(r),ee=r[2]&&Fi(r);Le=new xs({props:{data:r[2],rows:"15",$$slots:{default:[ar]},$$scope:{ctx:r}}});let te=r[3]&&Ui(r);Se=new Ga({props:{data:r[3],value:"complete_distinct_task_ids",title:"Distinct task IDs reviewed",fmt:"#,##0"}}),Ve=new Ga({props:{data:r[3],value:"retained_distinct_task_ids",title:"LLM-validated STEM task IDs",fmt:"#,##0"}}),xe=new Ga({props:{data:r[3],value:"raw_agreement_rate",title:"Two-model same-verdict rate",fmt:"0.0%"}}),Ce=new Ga({props:{data:r[3],value:"cohen_kappa",title:"Cohen's kappa",fmt:"0.000"}});let se=r[4]&&Ji(r);_t=new xs({props:{data:r[4],rows:"2",$$slots:{default:[ir]},$$scope:{ctx:r}}});let ae=r[5]&&zi(r);We=new xs({props:{data:r[5],rowsPerPage:"10",$$slots:{default:[nr]},$$scope:{ctx:r}}});let ie=r[6]&&Vi(r);ht=new Qt({props:{data:r[6],x:"month_start",y:"sparse_onet_ai_task_matches_per_job",yFmt:"0.000",series:"corpus",yAxisTitle:"Task matches per monthly active posting/job"}});let ne=r[7]&&Wi(r);os=new Qt({props:{data:r[7],x:"month_start",y:"skill_posting_or_job_per_1k",yFmt:"0.0",series:"series_label",seriesColors:{"NLx corpus: S5.5":"#0072B2","USAJOBS: S5.5":"#D55E00","NLx corpus: S2.7":"#009E73","USAJOBS: S2.7":"#CC79A7"},yAxisTitle:"Postings / active jobs with ESCO data skill per 1,000"}}),ls=new xs({props:{data:r[7],rowsPerPage:"10",$$slots:{default:[rr]},$$scope:{ctx:r}}});let re=r[8]&&Ki(r);_s=new Qt({props:{data:r[8],x:"month_start",y:"skill_posting_or_job_per_1k",yFmt:"0.0",series:"series_label",seriesColors:{"NLx corpus: S5.*":"#0072B2","USAJOBS: S5.*":"#D55E00","NLx corpus: S2.*":"#009E73","USAJOBS: S2.*":"#CC79A7"},yAxisTitle:"ESCO rollup coverage per 1,000 postings / active jobs"}});let oe=r[9]&&Qi(r),le=r[10]&&Yi(r);ms=new Qt({props:{data:r[9],x:"month_start",y:"share_active_jobs_with_keyword",yFmt:"0.00%",series:"series",yAxisTitle:"Active jobs with concept (% of all active jobs)",chartAreaHeight:"520",seriesColors:{"Stanford Tech skills":"#0072B2","Bowen-Wu AI keywords":"#009E73","Meisenbacher AI keywords":"#332288","Tambe AI algorithms":"#AA4499","Stanford AI focus areas":"#117733","Stanford AI skill clusters":"#999933","Lightcast AI skills":"#44AA99","Stanford GenAI skills":"#88CCEE","Tambe AI machines":"#882255","Tambe AI machines alt":"#CC6677","Tambe AI machines tech":"#DDCC77"},echartsOptions:{legend:{show:!1},grid:{top:28,right:36,left:68,bottom:52,containLabel:!0},yAxis:{axisLabel:{formatter:ur}},series:[{name:"Stanford Tech skills",lineStyle:{width:3}},{name:"Bowen-Wu AI keywords",lineStyle:{width:3}},{name:"Meisenbacher AI keywords",lineStyle:{width:3}},{name:"Tambe AI algorithms",lineStyle:{width:2.5}},{name:"Stanford AI focus areas",lineStyle:{width:2.5}},{name:"Stanford AI skill clusters",lineStyle:{width:2.5}},{name:"Lightcast AI skills",lineStyle:{width:2.5}},{name:"Stanford GenAI skills",lineStyle:{width:2.5}},{name:"Tambe AI machines",lineStyle:{width:2.5}},{name:"Tambe AI machines alt",lineStyle:{width:2.5}},{name:"Tambe AI machines tech",lineStyle:{width:2.5}}]},$$slots:{default:[or]},$$scope:{ctx:r}}}),fs=new xs({props:{data:r[8],rowsPerPage:"10",$$slots:{default:[lr]},$$scope:{ctx:r}}});let _e=r[11]&&Xi(r);hs=new Qt({props:{data:r[11],x:"month_start",y:"strict_ai_codes_per_job",yFmt:"0.000",series:"corpus",yAxisTitle:"Strict AI codes per monthly active posting/job"}});let ce=r[12]&&Zi(r);ps=new Qt({props:{data:r[12],x:"month_start",y:"lenient_ai_codes_per_job",yFmt:"0.00",series:"corpus",yAxisTitle:"Lenient AI codes per monthly active posting/job"}});let me=r[13]&&en(r);bs=new xs({props:{data:r[13],rowsPerPage:"10",$$slots:{default:[_r]},$$scope:{ctx:r}}});let de=r[14]&&tn(r),ue=r[15]&&sn(r);return ys=new Qt({props:{data:r[14],x:"month_start",y:"indexed_value",series:"series",yFmt:"0.0",yAxisTitle:"Index, Nov. 2022 = 1",chartAreaHeight:"320",seriesColors:{"NLx corpus: raw strict AI code volume (active jobs)":"#0072B2","NLx corpus: strict AI codes per active job":"#009E73"},seriesOptions:{lineWidth:2.5,symbol:"none"},echartsOptions:{legend:{show:!1},grid:{top:24,bottom:48,containLabel:!0},series:[{name:"NLx corpus: raw strict AI code volume (active jobs)",lineStyle:{type:"solid",width:2.5,color:"#0072B2"}},{name:"NLx corpus: strict AI codes per active job",lineStyle:{type:"dashed",width:2.5,color:"#009E73"}}]},$$slots:{default:[cr]},$$scope:{ctx:r}}}),gs=new Qt({props:{data:r[15],x:"month_start",y:"indexed_value",series:"series",yFmt:"0.0",yAxisTitle:"Index, Biden admin mean = 1",chartAreaHeight:"360",seriesColors:{"USAJOBS: raw strict AI code volume (active month)":"#D55E00","USAJOBS: strict AI codes per active posting":"#CC79A7","USAJOBS: strict AI codes per posting started":"#E69F00","USAJOBS: strict AI codes per posting ended":"#666666"},seriesOptions:{lineWidth:2.5,symbol:"none"},echartsOptions:{legend:{show:!1},grid:{top:24,bottom:56,containLabel:!0},series:[{name:"USAJOBS: raw strict AI code volume (active month)",lineStyle:{type:"dotted",width:3,color:"#D55E00"}},{name:"USAJOBS: strict AI codes per active posting",lineStyle:{type:[4,3,1,3],width:2.5,color:"#CC79A7"}},{name:"USAJOBS: strict AI codes per posting started",lineStyle:{type:[8,4,2,4],width:2.5,color:"#E69F00"}},{name:"USAJOBS: strict AI codes per posting ended",lineStyle:{type:[10,3],width:2.5,color:"#666666"}}]},$$slots:{default:[mr]},$$scope:{ctx:r}}}),{c(){Wt&&Wt.c(),s=h(),Us.c(),a=C("meta"),t=C("meta"),Kt&&Kt.c(),o=Fs(),c=h(),n=C("div"),n.innerHTML=y,j=h(),p=C("h2"),p.innerHTML=v,m=h(),I=C("p"),I.textContent=B,P=h(),R=C("div"),R.innerHTML=G,u=h(),X&&X.c(),E=h(),q=C("p"),q.textContent=De,T=h(),H=C("h3"),H.innerHTML=F,pe=h(),A(J.$$.fragment),fe=h(),Y=C("h2"),Y.innerHTML=kt,Ye=h(),z=C("h3"),z.innerHTML=Xe,Ze=h(),$e=C("div"),$e.innerHTML=gt,st=h(),K=C("h3"),K.innerHTML=be,Me=h(),A(ke.$$.fragment),at=h(),ye=C("p"),ye.innerHTML=qe,Ee=h(),ge=C("p"),ge.textContent=vt,it=h(),Z&&Z.c(),Fe=h(),ee&&ee.c(),ve=h(),W=C("h3"),W.innerHTML=Ue,nt=h(),A(Le.$$.fragment),Je=h(),Q=C("h2"),Q.innerHTML=ze,Ne=h(),Be=C("p"),Be.textContent=wt,rt=h(),te&&te.c(),we=h(),U=C("div"),A(Se.$$.fragment),Re=h(),A(Ve.$$.fragment),yt=h(),A(xe.$$.fragment),Pe=h(),A(Ce.$$.fragment),St=h(),se&&se.c(),g=h(),ot=C("p"),ot.textContent=xt,lt=h(),Ge=C("h3"),Ge.innerHTML=js,Yt=h(),A(_t.$$.fragment),ct=h(),Oe=C("p"),Oe.innerHTML=Xt,Zt=h(),mt=C("p"),mt.innerHTML=$s,dt=h(),Ie=C("h2"),Ie.innerHTML=es,ts=h(),ae&&ae.c(),At=h(),et=C("h3"),et.innerHTML=jt,ut=h(),A(We.$$.fragment),ss=h(),ie&&ie.c(),$t=h(),Ct=C("a"),ft=h(),Te=C("h3"),Te.innerHTML=as,is=h(),A(ht.$$.fragment),ns=h(),ne&&ne.c(),Ke=h(),Qe=C("a"),It=h(),tt=C("h3"),tt.innerHTML=Cs,rs=h(),M=C("p"),M.innerHTML=ea,ta=h(),A(os.$$.fragment),sa=h(),Tt=C("h3"),Tt.innerHTML=si,aa=h(),A(ls.$$.fragment),ia=h(),re&&re.c(),Is=h(),Ts=C("a"),na=h(),Mt=C("h3"),Mt.innerHTML=ai,ra=h(),A(_s.$$.fragment),oa=h(),cs=C("p"),cs.innerHTML=ii,la=h(),Et=C("h2"),Et.innerHTML=ni,_a=h(),oe&&oe.c(),Ms=h(),le&&le.c(),Es=h(),Ls=C("a"),ca=h(),Lt=C("h2"),Lt.innerHTML=ri,ma=h(),Nt=C("div"),Nt.innerHTML=oi,da=h(),Bt=C("h3"),Bt.innerHTML=li,ua=h(),A(ms.$$.fragment),fa=h(),ds=C("p"),ds.innerHTML=_i,ha=h(),us=C("p"),us.textContent=ci,pa=h(),Rt=C("h3"),Rt.innerHTML=mi,ba=h(),A(fs.$$.fragment),ka=h(),Ot=C("h2"),Ot.innerHTML=di,ya=h(),_e&&_e.c(),Ns=h(),Bs=C("a"),ga=h(),Ht=C("h2"),Ht.innerHTML=ui,va=h(),A(hs.$$.fragment),wa=h(),ce&&ce.c(),Rs=h(),Os=C("a"),Sa=h(),Dt=C("h2"),Dt.innerHTML=fi,xa=h(),A(ps.$$.fragment),Aa=h(),Pt=C("h2"),Pt.innerHTML=hi,ja=h(),me&&me.c(),Hs=h(),Gt=C("h3"),Gt.innerHTML=pi,$a=h(),A(bs.$$.fragment),Ca=h(),ks=C("p"),ks.innerHTML=bi,Ia=h(),qt=C("h2"),qt.innerHTML=ki,Ta=h(),de&&de.c(),Ds=h(),ue&&ue.c(),Ps=h(),Gs=C("a"),Ma=h(),Ft=C("h2"),Ft.innerHTML=yi,Ea=h(),Ut=C("div"),Ut.innerHTML=gi,La=h(),A(ys.$$.fragment),Na=h(),qs=C("a"),Ba=h(),Jt=C("h2"),Jt.innerHTML=vi,Ra=h(),zt=C("div"),zt.innerHTML=wi,Oa=h(),Vt=C("h3"),Vt.innerHTML=Si,Ha=h(),A(gs.$$.fragment),Da=h(),vs=C("p"),vs.innerHTML=xi,this.h()},l(e){Wt&&Wt.l(e),s=f(e);const i=yn("svelte-2igo1p",document.head);Us.l(i),a=$(i,"META",{name:!0,content:!0}),t=$(i,"META",{name:!0,content:!0}),Kt&&Kt.l(i),o=Fs(),i.forEach(l),c=f(e),n=$(e,"DIV",{class:!0,"data-svelte-h":!0}),L(n)!=="svelte-m518fx"&&(n.innerHTML=y),j=f(e),p=$(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(p)!=="svelte-17j0ol6"&&(p.innerHTML=v),m=f(e),I=$(e,"P",{class:!0,"data-svelte-h":!0}),L(I)!=="svelte-1wc9faj"&&(I.textContent=B),P=f(e),R=$(e,"DIV",{class:!0,"data-svelte-h":!0}),L(R)!=="svelte-q7eegh"&&(R.innerHTML=G),u=f(e),X&&X.l(e),E=f(e),q=$(e,"P",{class:!0,"data-svelte-h":!0}),L(q)!=="svelte-1orbfar"&&(q.textContent=De),T=f(e),H=$(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(H)!=="svelte-c6ktdf"&&(H.innerHTML=F),pe=f(e),x(J.$$.fragment,e),fe=f(e),Y=$(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(Y)!=="svelte-w0zzym"&&(Y.innerHTML=kt),Ye=f(e),z=$(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(z)!=="svelte-1ryyus2"&&(z.innerHTML=Xe),Ze=f(e),$e=$(e,"DIV",{class:!0,"aria-label":!0,"data-svelte-h":!0}),L($e)!=="svelte-1bu65p3"&&($e.innerHTML=gt),st=f(e),K=$(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(K)!=="svelte-za7geu"&&(K.innerHTML=be),Me=f(e),x(ke.$$.fragment,e),at=f(e),ye=$(e,"P",{class:!0,"data-svelte-h":!0}),L(ye)!=="svelte-1jqhzqw"&&(ye.innerHTML=qe),Ee=f(e),ge=$(e,"P",{class:!0,"data-svelte-h":!0}),L(ge)!=="svelte-9g9zo2"&&(ge.textContent=vt),it=f(e),Z&&Z.l(e),Fe=f(e),ee&&ee.l(e),ve=f(e),W=$(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(W)!=="svelte-1avp2s2"&&(W.innerHTML=Ue),nt=f(e),x(Le.$$.fragment,e),Je=f(e),Q=$(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(Q)!=="svelte-180prqf"&&(Q.innerHTML=ze),Ne=f(e),Be=$(e,"P",{class:!0,"data-svelte-h":!0}),L(Be)!=="svelte-97pij5"&&(Be.textContent=wt),rt=f(e),te&&te.l(e),we=f(e),U=$(e,"DIV",{class:!0});var pt=bt(U);x(Se.$$.fragment,pt),Re=f(pt),x(Ve.$$.fragment,pt),yt=f(pt),x(xe.$$.fragment,pt),Pe=f(pt),x(Ce.$$.fragment,pt),pt.forEach(l),St=f(e),se&&se.l(e),g=f(e),ot=$(e,"P",{class:!0,"data-svelte-h":!0}),L(ot)!=="svelte-1vmfvou"&&(ot.textContent=xt),lt=f(e),Ge=$(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(Ge)!=="svelte-10bjlc3"&&(Ge.innerHTML=js),Yt=f(e),x(_t.$$.fragment,e),ct=f(e),Oe=$(e,"P",{class:!0,"data-svelte-h":!0}),L(Oe)!=="svelte-qll3fi"&&(Oe.innerHTML=Xt),Zt=f(e),mt=$(e,"P",{class:!0,"data-svelte-h":!0}),L(mt)!=="svelte-8lg23f"&&(mt.innerHTML=$s),dt=f(e),Ie=$(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(Ie)!=="svelte-ohn3kd"&&(Ie.innerHTML=es),ts=f(e),ae&&ae.l(e),At=f(e),et=$(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(et)!=="svelte-8aqu2o"&&(et.innerHTML=jt),ut=f(e),x(We.$$.fragment,e),ss=f(e),ie&&ie.l(e),$t=f(e),Ct=$(e,"A",{id:!0}),bt(Ct).forEach(l),ft=f(e),Te=$(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(Te)!=="svelte-vat3ei"&&(Te.innerHTML=as),is=f(e),x(ht.$$.fragment,e),ns=f(e),ne&&ne.l(e),Ke=f(e),Qe=$(e,"A",{id:!0}),bt(Qe).forEach(l),It=f(e),tt=$(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(tt)!=="svelte-1fjja9s"&&(tt.innerHTML=Cs),rs=f(e),M=$(e,"P",{class:!0,"data-svelte-h":!0}),L(M)!=="svelte-ib3lpr"&&(M.innerHTML=ea),ta=f(e),x(os.$$.fragment,e),sa=f(e),Tt=$(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(Tt)!=="svelte-46f2fd"&&(Tt.innerHTML=si),aa=f(e),x(ls.$$.fragment,e),ia=f(e),re&&re.l(e),Is=f(e),Ts=$(e,"A",{id:!0}),bt(Ts).forEach(l),na=f(e),Mt=$(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(Mt)!=="svelte-lmvq5s"&&(Mt.innerHTML=ai),ra=f(e),x(_s.$$.fragment,e),oa=f(e),cs=$(e,"P",{class:!0,"data-svelte-h":!0}),L(cs)!=="svelte-okytg5"&&(cs.innerHTML=ii),la=f(e),Et=$(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(Et)!=="svelte-12ly2m6"&&(Et.innerHTML=ni),_a=f(e),oe&&oe.l(e),Ms=f(e),le&&le.l(e),Es=f(e),Ls=$(e,"A",{id:!0}),bt(Ls).forEach(l),ca=f(e),Lt=$(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(Lt)!=="svelte-duccll"&&(Lt.innerHTML=ri),ma=f(e),Nt=$(e,"DIV",{class:!0,"aria-label":!0,"data-svelte-h":!0}),L(Nt)!=="svelte-1q6sotm"&&(Nt.innerHTML=oi),da=f(e),Bt=$(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(Bt)!=="svelte-16d96xd"&&(Bt.innerHTML=li),ua=f(e),x(ms.$$.fragment,e),fa=f(e),ds=$(e,"P",{class:!0,"data-svelte-h":!0}),L(ds)!=="svelte-1efx8nk"&&(ds.innerHTML=_i),ha=f(e),us=$(e,"P",{class:!0,"data-svelte-h":!0}),L(us)!=="svelte-1e553br"&&(us.textContent=ci),pa=f(e),Rt=$(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(Rt)!=="svelte-c23o6n"&&(Rt.innerHTML=mi),ba=f(e),x(fs.$$.fragment,e),ka=f(e),Ot=$(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(Ot)!=="svelte-18kcyb3"&&(Ot.innerHTML=di),ya=f(e),_e&&_e.l(e),Ns=f(e),Bs=$(e,"A",{id:!0}),bt(Bs).forEach(l),ga=f(e),Ht=$(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(Ht)!=="svelte-jxqf3v"&&(Ht.innerHTML=ui),va=f(e),x(hs.$$.fragment,e),wa=f(e),ce&&ce.l(e),Rs=f(e),Os=$(e,"A",{id:!0}),bt(Os).forEach(l),Sa=f(e),Dt=$(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(Dt)!=="svelte-s8jhbu"&&(Dt.innerHTML=fi),xa=f(e),x(ps.$$.fragment,e),Aa=f(e),Pt=$(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(Pt)!=="svelte-1lr0erk"&&(Pt.innerHTML=hi),ja=f(e),me&&me.l(e),Hs=f(e),Gt=$(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(Gt)!=="svelte-19yanul"&&(Gt.innerHTML=pi),$a=f(e),x(bs.$$.fragment,e),Ca=f(e),ks=$(e,"P",{class:!0,"data-svelte-h":!0}),L(ks)!=="svelte-1ap9jk3"&&(ks.innerHTML=bi),Ia=f(e),qt=$(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(qt)!=="svelte-1m4knh5"&&(qt.innerHTML=ki),Ta=f(e),de&&de.l(e),Ds=f(e),ue&&ue.l(e),Ps=f(e),Gs=$(e,"A",{id:!0}),bt(Gs).forEach(l),Ma=f(e),Ft=$(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(Ft)!=="svelte-eq32oj"&&(Ft.innerHTML=yi),Ea=f(e),Ut=$(e,"DIV",{class:!0,"aria-label":!0,"data-svelte-h":!0}),L(Ut)!=="svelte-rtui69"&&(Ut.innerHTML=gi),La=f(e),x(ys.$$.fragment,e),Na=f(e),qs=$(e,"A",{id:!0}),bt(qs).forEach(l),Ba=f(e),Jt=$(e,"H2",{class:!0,id:!0,"data-svelte-h":!0}),L(Jt)!=="svelte-198vkc2"&&(Jt.innerHTML=vi),Ra=f(e),zt=$(e,"DIV",{class:!0,"aria-label":!0,"data-svelte-h":!0}),L(zt)!=="svelte-o4aa80"&&(zt.innerHTML=wi),Oa=f(e),Vt=$(e,"H3",{class:!0,id:!0,"data-svelte-h":!0}),L(Vt)!=="svelte-2fqdtz"&&(Vt.innerHTML=Si),Ha=f(e),x(gs.$$.fragment,e),Da=f(e),vs=$(e,"P",{class:!0,"data-svelte-h":!0}),L(vs)!=="svelte-1q3v3ms"&&(vs.innerHTML=xi),this.h()},h(){k(a,"name","twitter:card"),k(a,"content","summary_large_image"),k(t,"name","twitter:site"),k(t,"content","@evidence_dev"),k(n,"class","flex flex-wrap gap-x-4 gap-y-2 text-sm border-y border-gray-200 py-3 mb-6"),k(p,"class","markdown"),k(p,"id","taxonomies-shape-what-posting-measures-can-see"),k(I,"class","markdown"),k(R,"class","border-l-4 border-gray-500 bg-gray-50 px-4 py-3 my-4 text-sm text-gray-700"),k(q,"class","text-sm font-semibold mt-4 mb-2"),k(H,"class","markdown"),k(H,"id","table-pt-1-taxonomy-coverage-and-signal-movement-summary"),k(Y,"class","markdown"),k(Y,"id","ai-signal-comparison"),k(z,"class","markdown"),k(z,"id","skill-onet-ml--ai-task-stem-task-and-aimatch-signals-indexed-to-chatgpt-launch-nlx-corpus"),k($e,"class","figure-line-key svelte-172dr1u"),k($e,"aria-label","Figure B.1 line key"),k(K,"class","markdown"),k(K,"id","figure-pt-1-ai-adjacent-posting-signals-indexed-to-chatgpt-launch"),k(ye,"class","markdown"),k(ge,"class","markdown"),k(W,"class","markdown"),k(W,"id","table-b1-ai-adjacent-signal-movement-since-chatgpt-launch-nlx-corpus"),k(Q,"class","markdown"),k(Q,"id","stem-task-agreement-procedure"),k(Be,"class","markdown"),k(U,"class","grid grid-cols-1 md:grid-cols-4 gap-4 mb-6"),k(ot,"class","text-sm font-semibold mt-4 mb-2"),k(Ge,"class","markdown"),k(Ge,"id","table-pt-2-stem-task-agreement-summary"),k(Oe,"class","markdown"),k(mt,"class","markdown"),k(Ie,"class","markdown"),k(Ie,"id","sparse-onet-and-esco-coverage"),k(et,"class","markdown"),k(et,"id","table-b2-onet-task-statements-containing-ai-related-terms"),k(Ct,"id","fig-onet-ai-task-intensity"),k(Te,"class","markdown"),k(Te,"id","figure-b2-sparse-onet-ai-task-intensity"),k(Qe,"id","fig-esco-data-science-skill"),k(tt,"class","markdown"),k(tt,"id","figure-b3-narrow-esco-data-skill-evidence"),k(M,"class","markdown"),k(Tt,"class","markdown"),k(Tt,"id","table-b3-narrow-esco-data-skill-evidence-by-month-and-corpus"),k(Ts,"id","fig-esco-broad-data-skill"),k(Mt,"class","markdown"),k(Mt,"id","figure-b4-broad-esco-information-s2-and-digital-skill-s5-rollups"),k(cs,"class","markdown"),k(Et,"class","markdown"),k(Et,"id","posting-derived-ai-keyword-evidence"),k(Ls,"id","fig-ai-score-keyword-correlation"),k(Lt,"class","markdown"),k(Lt,"id","figure-b5-ai-job-postings-by-ai-concept-family-nlx-corpus"),k(Nt,"class","b5-top-legend svelte-172dr1u"),k(Nt,"aria-label","Figure B.5 legend"),k(Bt,"class","markdown"),k(Bt,"id","figure-pt-2-ai-keyword-concept-family-time-series"),k(ds,"class","markdown"),k(us,"class","text-sm font-semibold mt-8 mb-2"),k(Rt,"class","markdown"),k(Rt,"id","table-pt-3-broad-esco-data-skill-evidence-by-month-and-corpus"),k(Ot,"class","markdown"),k(Ot,"id","aimatch-code-intensity"),k(Bs,"id","fig-strict-ai-code-intensity"),k(Ht,"class","markdown"),k(Ht,"id","figure-b6-strict-ai-code-intensity"),k(Os,"id","fig-lenient-ai-code-intensity"),k(Dt,"class","markdown"),k(Dt,"id","figure-b7-lenient-ai-code-intensity"),k(Pt,"class","markdown"),k(Pt,"id","signal-magnitudes-nlx-corpus"),k(Gt,"class","markdown"),k(Gt,"id","table-b5-ai-adjacent-signal-magnitudes-relative-to-strict-aimatch-nlx-corpus"),k(ks,"class","markdown"),k(qt,"class","markdown"),k(qt,"id","methodological-demonstration-denominator-sensitivity"),k(Gs,"id","fig-denominator-sensitivity-nlx"),k(Ft,"class","markdown"),k(Ft,"id","figure-b8-methodological-demonstration-strict-ai-signals-indexed-to-november-2022-nlx-corpus"),k(Ut,"class","figure-line-key denominator-line-key svelte-172dr1u"),k(Ut,"aria-label","Figure B.8 line key"),k(qs,"id","fig-denominator-sensitivity-usajobs"),k(Jt,"class","markdown"),k(Jt,"id","figure-b9-methodological-demonstration-usajobs-strict-ai-signals-indexed-to-biden-administration-mean"),k(zt,"class","figure-line-key denominator-line-key svelte-172dr1u"),k(zt,"aria-label","Figure B.9 line key"),k(Vt,"class","markdown"),k(Vt,"id","figure-pt-3-usajobs-strict-ai-denominator-sensitivity"),k(vs,"class","markdown")},m(e,i){Wt&&Wt.m(e,i),_(e,s,i),Us.m(document.head,null),As(document.head,a),As(document.head,t),Kt&&Kt.m(document.head,null),As(document.head,o),_(e,c,i),_(e,n,i),_(e,j,i),_(e,p,i),_(e,m,i),_(e,I,i),_(e,P,i),_(e,R,i),_(e,u,i),X&&X.m(e,i),_(e,E,i),_(e,q,i),_(e,T,i),_(e,H,i),_(e,pe,i),S(J,e,i),_(e,fe,i),_(e,Y,i),_(e,Ye,i),_(e,z,i),_(e,Ze,i),_(e,$e,i),_(e,st,i),_(e,K,i),_(e,Me,i),S(ke,e,i),_(e,at,i),_(e,ye,i),_(e,Ee,i),_(e,ge,i),_(e,it,i),Z&&Z.m(e,i),_(e,Fe,i),ee&&ee.m(e,i),_(e,ve,i),_(e,W,i),_(e,nt,i),S(Le,e,i),_(e,Je,i),_(e,Q,i),_(e,Ne,i),_(e,Be,i),_(e,rt,i),te&&te.m(e,i),_(e,we,i),_(e,U,i),S(Se,U,null),As(U,Re),S(Ve,U,null),As(U,yt),S(xe,U,null),As(U,Pe),S(Ce,U,null),_(e,St,i),se&&se.m(e,i),_(e,g,i),_(e,ot,i),_(e,lt,i),_(e,Ge,i),_(e,Yt,i),S(_t,e,i),_(e,ct,i),_(e,Oe,i),_(e,Zt,i),_(e,mt,i),_(e,dt,i),_(e,Ie,i),_(e,ts,i),ae&&ae.m(e,i),_(e,At,i),_(e,et,i),_(e,ut,i),S(We,e,i),_(e,ss,i),ie&&ie.m(e,i),_(e,$t,i),_(e,Ct,i),_(e,ft,i),_(e,Te,i),_(e,is,i),S(ht,e,i),_(e,ns,i),ne&&ne.m(e,i),_(e,Ke,i),_(e,Qe,i),_(e,It,i),_(e,tt,i),_(e,rs,i),_(e,M,i),_(e,ta,i),S(os,e,i),_(e,sa,i),_(e,Tt,i),_(e,aa,i),S(ls,e,i),_(e,ia,i),re&&re.m(e,i),_(e,Is,i),_(e,Ts,i),_(e,na,i),_(e,Mt,i),_(e,ra,i),S(_s,e,i),_(e,oa,i),_(e,cs,i),_(e,la,i),_(e,Et,i),_(e,_a,i),oe&&oe.m(e,i),_(e,Ms,i),le&&le.m(e,i),_(e,Es,i),_(e,Ls,i),_(e,ca,i),_(e,Lt,i),_(e,ma,i),_(e,Nt,i),_(e,da,i),_(e,Bt,i),_(e,ua,i),S(ms,e,i),_(e,fa,i),_(e,ds,i),_(e,ha,i),_(e,us,i),_(e,pa,i),_(e,Rt,i),_(e,ba,i),S(fs,e,i),_(e,ka,i),_(e,Ot,i),_(e,ya,i),_e&&_e.m(e,i),_(e,Ns,i),_(e,Bs,i),_(e,ga,i),_(e,Ht,i),_(e,va,i),S(hs,e,i),_(e,wa,i),ce&&ce.m(e,i),_(e,Rs,i),_(e,Os,i),_(e,Sa,i),_(e,Dt,i),_(e,xa,i),S(ps,e,i),_(e,Aa,i),_(e,Pt,i),_(e,ja,i),me&&me.m(e,i),_(e,Hs,i),_(e,Gt,i),_(e,$a,i),S(bs,e,i),_(e,Ca,i),_(e,ks,i),_(e,Ia,i),_(e,qt,i),_(e,Ta,i),de&&de.m(e,i),_(e,Ds,i),ue&&ue.m(e,i),_(e,Ps,i),_(e,Gs,i),_(e,Ma,i),_(e,Ft,i),_(e,Ea,i),_(e,Ut,i),_(e,La,i),S(ys,e,i),_(e,Na,i),_(e,qs,i),_(e,Ba,i),_(e,Jt,i),_(e,Ra,i),_(e,zt,i),_(e,Oa,i),_(e,Vt,i),_(e,Ha,i),S(gs,e,i),_(e,Da,i),_(e,vs,i),Pa=!0},p(e,i){typeof D<"u"&&D.title&&D.hide_title!==!0&&Wt.p(e,i),Us.p(e,i),typeof D=="object"&&Kt.p(e,i),e[0]?X?(X.p(e,i),i[0]&1&&d(X,1)):(X=Gi(e),X.c(),d(X,1),X.m(E.parentNode,E)):X&&(Ae(),b(X,1,1,()=>{X=null}),je());const pt={};i[0]&1&&(pt.data=e[0]),i[3]&32768&&(pt.$$scope={dirty:i,ctx:e}),J.$set(pt);const Fa={};i[0]&2&&(Fa.data=e[1]),i[3]&32768&&(Fa.$$scope={dirty:i,ctx:e}),ke.$set(Fa),e[1]?Z?(Z.p(e,i),i[0]&2&&d(Z,1)):(Z=qi(e),Z.c(),d(Z,1),Z.m(Fe.parentNode,Fe)):Z&&(Ae(),b(Z,1,1,()=>{Z=null}),je()),e[2]?ee?(ee.p(e,i),i[0]&4&&d(ee,1)):(ee=Fi(e),ee.c(),d(ee,1),ee.m(ve.parentNode,ve)):ee&&(Ae(),b(ee,1,1,()=>{ee=null}),je());const Ua={};i[0]&4&&(Ua.data=e[2]),i[3]&32768&&(Ua.$$scope={dirty:i,ctx:e}),Le.$set(Ua),e[3]?te?(te.p(e,i),i[0]&8&&d(te,1)):(te=Ui(e),te.c(),d(te,1),te.m(we.parentNode,we)):te&&(Ae(),b(te,1,1,()=>{te=null}),je());const Ai={};i[0]&8&&(Ai.data=e[3]),Se.$set(Ai);const ji={};i[0]&8&&(ji.data=e[3]),Ve.$set(ji);const $i={};i[0]&8&&($i.data=e[3]),xe.$set($i);const Ci={};i[0]&8&&(Ci.data=e[3]),Ce.$set(Ci),e[4]?se?(se.p(e,i),i[0]&16&&d(se,1)):(se=Ji(e),se.c(),d(se,1),se.m(g.parentNode,g)):se&&(Ae(),b(se,1,1,()=>{se=null}),je());const Ja={};i[0]&16&&(Ja.data=e[4]),i[3]&32768&&(Ja.$$scope={dirty:i,ctx:e}),_t.$set(Ja),e[5]?ae?(ae.p(e,i),i[0]&32&&d(ae,1)):(ae=zi(e),ae.c(),d(ae,1),ae.m(At.parentNode,At)):ae&&(Ae(),b(ae,1,1,()=>{ae=null}),je());const za={};i[0]&32&&(za.data=e[5]),i[3]&32768&&(za.$$scope={dirty:i,ctx:e}),We.$set(za),e[6]?ie?(ie.p(e,i),i[0]&64&&d(ie,1)):(ie=Vi(e),ie.c(),d(ie,1),ie.m($t.parentNode,$t)):ie&&(Ae(),b(ie,1,1,()=>{ie=null}),je());const Ii={};i[0]&64&&(Ii.data=e[6]),ht.$set(Ii),e[7]?ne?(ne.p(e,i),i[0]&128&&d(ne,1)):(ne=Wi(e),ne.c(),d(ne,1),ne.m(Ke.parentNode,Ke)):ne&&(Ae(),b(ne,1,1,()=>{ne=null}),je());const Ti={};i[0]&128&&(Ti.data=e[7]),os.$set(Ti);const Va={};i[0]&128&&(Va.data=e[7]),i[3]&32768&&(Va.$$scope={dirty:i,ctx:e}),ls.$set(Va),e[8]?re?(re.p(e,i),i[0]&256&&d(re,1)):(re=Ki(e),re.c(),d(re,1),re.m(Is.parentNode,Is)):re&&(Ae(),b(re,1,1,()=>{re=null}),je());const Mi={};i[0]&256&&(Mi.data=e[8]),_s.$set(Mi),e[9]?oe?(oe.p(e,i),i[0]&512&&d(oe,1)):(oe=Qi(e),oe.c(),d(oe,1),oe.m(Ms.parentNode,Ms)):oe&&(Ae(),b(oe,1,1,()=>{oe=null}),je()),e[10]?le?(le.p(e,i),i[0]&1024&&d(le,1)):(le=Yi(e),le.c(),d(le,1),le.m(Es.parentNode,Es)):le&&(Ae(),b(le,1,1,()=>{le=null}),je());const Wa={};i[0]&512&&(Wa.data=e[9]),i[3]&32768&&(Wa.$$scope={dirty:i,ctx:e}),ms.$set(Wa);const Ka={};i[0]&256&&(Ka.data=e[8]),i[3]&32768&&(Ka.$$scope={dirty:i,ctx:e}),fs.$set(Ka),e[11]?_e?(_e.p(e,i),i[0]&2048&&d(_e,1)):(_e=Xi(e),_e.c(),d(_e,1),_e.m(Ns.parentNode,Ns)):_e&&(Ae(),b(_e,1,1,()=>{_e=null}),je());const Ei={};i[0]&2048&&(Ei.data=e[11]),hs.$set(Ei),e[12]?ce?(ce.p(e,i),i[0]&4096&&d(ce,1)):(ce=Zi(e),ce.c(),d(ce,1),ce.m(Rs.parentNode,Rs)):ce&&(Ae(),b(ce,1,1,()=>{ce=null}),je());const Li={};i[0]&4096&&(Li.data=e[12]),ps.$set(Li),e[13]?me?(me.p(e,i),i[0]&8192&&d(me,1)):(me=en(e),me.c(),d(me,1),me.m(Hs.parentNode,Hs)):me&&(Ae(),b(me,1,1,()=>{me=null}),je());const Qa={};i[0]&8192&&(Qa.data=e[13]),i[3]&32768&&(Qa.$$scope={dirty:i,ctx:e}),bs.$set(Qa),e[14]?de?(de.p(e,i),i[0]&16384&&d(de,1)):(de=tn(e),de.c(),d(de,1),de.m(Ds.parentNode,Ds)):de&&(Ae(),b(de,1,1,()=>{de=null}),je()),e[15]?ue?(ue.p(e,i),i[0]&32768&&d(ue,1)):(ue=sn(e),ue.c(),d(ue,1),ue.m(Ps.parentNode,Ps)):ue&&(Ae(),b(ue,1,1,()=>{ue=null}),je());const Ya={};i[0]&16384&&(Ya.data=e[14]),i[3]&32768&&(Ya.$$scope={dirty:i,ctx:e}),ys.$set(Ya);const Xa={};i[0]&32768&&(Xa.data=e[15]),i[3]&32768&&(Xa.$$scope={dirty:i,ctx:e}),gs.$set(Xa)},i(e){Pa||(d(X),d(J.$$.fragment,e),d(ke.$$.fragment,e),d(Z),d(ee),d(Le.$$.fragment,e),d(te),d(Se.$$.fragment,e),d(Ve.$$.fragment,e),d(xe.$$.fragment,e),d(Ce.$$.fragment,e),d(se),d(_t.$$.fragment,e),d(ae),d(We.$$.fragment,e),d(ie),d(ht.$$.fragment,e),d(ne),d(os.$$.fragment,e),d(ls.$$.fragment,e),d(re),d(_s.$$.fragment,e),d(oe),d(le),d(ms.$$.fragment,e),d(fs.$$.fragment,e),d(_e),d(hs.$$.fragment,e),d(ce),d(ps.$$.fragment,e),d(me),d(bs.$$.fragment,e),d(de),d(ue),d(ys.$$.fragment,e),d(gs.$$.fragment,e),Pa=!0)},o(e){b(X),b(J.$$.fragment,e),b(ke.$$.fragment,e),b(Z),b(ee),b(Le.$$.fragment,e),b(te),b(Se.$$.fragment,e),b(Ve.$$.fragment,e),b(xe.$$.fragment,e),b(Ce.$$.fragment,e),b(se),b(_t.$$.fragment,e),b(ae),b(We.$$.fragment,e),b(ie),b(ht.$$.fragment,e),b(ne),b(os.$$.fragment,e),b(ls.$$.fragment,e),b(re),b(_s.$$.fragment,e),b(oe),b(le),b(ms.$$.fragment,e),b(fs.$$.fragment,e),b(_e),b(hs.$$.fragment,e),b(ce),b(ps.$$.fragment,e),b(me),b(bs.$$.fragment,e),b(de),b(ue),b(ys.$$.fragment,e),b(gs.$$.fragment,e),Pa=!1},d(e){e&&(l(s),l(c),l(n),l(j),l(p),l(m),l(I),l(P),l(R),l(u),l(E),l(q),l(T),l(H),l(pe),l(fe),l(Y),l(Ye),l(z),l(Ze),l($e),l(st),l(K),l(Me),l(at),l(ye),l(Ee),l(ge),l(it),l(Fe),l(ve),l(W),l(nt),l(Je),l(Q),l(Ne),l(Be),l(rt),l(we),l(U),l(St),l(g),l(ot),l(lt),l(Ge),l(Yt),l(ct),l(Oe),l(Zt),l(mt),l(dt),l(Ie),l(ts),l(At),l(et),l(ut),l(ss),l($t),l(Ct),l(ft),l(Te),l(is),l(ns),l(Ke),l(Qe),l(It),l(tt),l(rs),l(M),l(ta),l(sa),l(Tt),l(aa),l(ia),l(Is),l(Ts),l(na),l(Mt),l(ra),l(oa),l(cs),l(la),l(Et),l(_a),l(Ms),l(Es),l(Ls),l(ca),l(Lt),l(ma),l(Nt),l(da),l(Bt),l(ua),l(fa),l(ds),l(ha),l(us),l(pa),l(Rt),l(ba),l(ka),l(Ot),l(ya),l(Ns),l(Bs),l(ga),l(Ht),l(va),l(wa),l(Rs),l(Os),l(Sa),l(Dt),l(xa),l(Aa),l(Pt),l(ja),l(Hs),l(Gt),l($a),l(Ca),l(ks),l(Ia),l(qt),l(Ta),l(Ds),l(Ps),l(Gs),l(Ma),l(Ft),l(Ea),l(Ut),l(La),l(Na),l(qs),l(Ba),l(Jt),l(Ra),l(zt),l(Oa),l(Vt),l(Ha),l(Da),l(vs)),Wt&&Wt.d(e),Us.d(e),l(a),l(t),Kt&&Kt.d(e),l(o),X&&X.d(e),w(J,e),w(ke,e),Z&&Z.d(e),ee&&ee.d(e),w(Le,e),te&&te.d(e),w(Se),w(Ve),w(xe),w(Ce),se&&se.d(e),w(_t,e),ae&&ae.d(e),w(We,e),ie&&ie.d(e),w(ht,e),ne&&ne.d(e),w(os,e),w(ls,e),re&&re.d(e),w(_s,e),oe&&oe.d(e),le&&le.d(e),w(ms,e),w(fs,e),_e&&_e.d(e),w(hs,e),ce&&ce.d(e),w(ps,e),me&&me.d(e),w(bs,e),de&&de.d(e),ue&&ue.d(e),w(ys,e),w(gs,e)}}}const D={title:"What Postings And Taxonomies Can And Cannot Say"},ur=function(r){return(r*100).toFixed(1)+"%"};function fr(r,s,a){let t,o;Ks(r,Hn,M=>a(82,t=M)),Ks(r,Di,M=>a(88,o=M));let{data:c}=s,{data:n={},customFormattingSettings:y,__db:j,inputs:p}=c;gn(Di,o="139268804cdbe2a67670bd98932807e0",o);let v=Ln(ln(p));vn(v.subscribe(M=>p=M)),wn(Rn,{getCustomFormats:()=>y.customFormats||[]});const m=(M,ea)=>Dn(j.query,M,{query_name:ea});Nn(m),t.params,Ri(()=>!0);let I={initialData:void 0,initialError:void 0},B=O`with signal_scope(series, display_series, sort_order) as (
  values
    ('ESCO Information Skills (S2)', 'S2 information', 1),
    ('ESCO Digital Skills (S5)', 'S5 digital', 2),
    ('AI keyword concepts', 'AI keyword concepts', 4),
    ('O*NET AI tasks', 'O*NET ML / AI tasks', 20),
    ('Strict AIMatch', 'Strict AIMatch', 30),
    ('Lenient AIMatch', 'Lenient AIMatch', 31),
    ('STEM tasks', 'STEM tasks', 40)
),
latest_signal as (
  select
    series,
    max(month_start) as latest_month
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
  group by 1
),
movement as (
  select
    scope.display_series as series,
    scope.sort_order,
    max(case when s.month_start = date '2022-11-01' then s.value_per_1k_active_jobs end) as nov_2022_per_1k,
    s.value_per_1k_active_jobs as latest_per_1k,
    s.indexed_value as latest_index,
    s.indexed_value - 1 as change_since_nov_2022
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt s
  join signal_scope scope
    on scope.series = s.series
  join latest_signal l
    on l.series = s.series
   and l.latest_month = s.month_start
  group by 1, 2, 4, 5, 6
)
select
  m.series,
  c.taxonomy_items,
  c.coverage_basis,
  m.nov_2022_per_1k,
  m.latest_per_1k,
  m.latest_index,
  m.change_since_nov_2022
from movement m
join nlx.AGGR_NlxFigureB1TaxonomyCoverage c using (series)
order by m.sort_order`,P=`with signal_scope(series, display_series, sort_order) as (
  values
    ('ESCO Information Skills (S2)', 'S2 information', 1),
    ('ESCO Digital Skills (S5)', 'S5 digital', 2),
    ('AI keyword concepts', 'AI keyword concepts', 4),
    ('O*NET AI tasks', 'O*NET ML / AI tasks', 20),
    ('Strict AIMatch', 'Strict AIMatch', 30),
    ('Lenient AIMatch', 'Lenient AIMatch', 31),
    ('STEM tasks', 'STEM tasks', 40)
),
latest_signal as (
  select
    series,
    max(month_start) as latest_month
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
  group by 1
),
movement as (
  select
    scope.display_series as series,
    scope.sort_order,
    max(case when s.month_start = date '2022-11-01' then s.value_per_1k_active_jobs end) as nov_2022_per_1k,
    s.value_per_1k_active_jobs as latest_per_1k,
    s.indexed_value as latest_index,
    s.indexed_value - 1 as change_since_nov_2022
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt s
  join signal_scope scope
    on scope.series = s.series
  join latest_signal l
    on l.series = s.series
   and l.latest_month = s.month_start
  group by 1, 2, 4, 5, 6
)
select
  m.series,
  c.taxonomy_items,
  c.coverage_basis,
  m.nov_2022_per_1k,
  m.latest_per_1k,
  m.latest_index,
  m.change_since_nov_2022
from movement m
join nlx.AGGR_NlxFigureB1TaxonomyCoverage c using (series)
order by m.sort_order`;n.taxonomy_signal_headline_data&&(n.taxonomy_signal_headline_data instanceof Error?I.initialError=n.taxonomy_signal_headline_data:I.initialData=n.taxonomy_signal_headline_data,n.taxonomy_signal_headline_columns&&(I.knownColumns=n.taxonomy_signal_headline_columns));let R,G=!1;const u=he.createReactive({callback:M=>{a(0,R=M)},execFn:m},{id:"taxonomy_signal_headline",...I});u(P,{noResolve:B,...I}),globalThis[Symbol.for("taxonomy_signal_headline")]={get value(){return R}};let E={initialData:void 0,initialError:void 0},q=O`select
  month_start,
  case series
    when 'ESCO Information Skills (S2)' then 'S2 information'
    when 'ESCO Digital Skills (S5)' then 'S5 digital'
    when 'O*NET AI tasks' then 'O*NET ML / AI tasks'
    else series
  end as series,
  signal_group,
  sort_order,
  n_active_jobs,
  n_signal,
  value_per_1k_active_jobs,
  baseline_per_1k_active_jobs,
  indexed_value,
  event_label
from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
where series in (
  'ESCO Information Skills (S2)', 'ESCO Digital Skills (S5)',
  'AI keyword concepts',
  'O*NET AI tasks', 'STEM tasks', 'Strict AIMatch', 'Lenient AIMatch'
)
order by month_start, sort_order`,De=`select
  month_start,
  case series
    when 'ESCO Information Skills (S2)' then 'S2 information'
    when 'ESCO Digital Skills (S5)' then 'S5 digital'
    when 'O*NET AI tasks' then 'O*NET ML / AI tasks'
    else series
  end as series,
  signal_group,
  sort_order,
  n_active_jobs,
  n_signal,
  value_per_1k_active_jobs,
  baseline_per_1k_active_jobs,
  indexed_value,
  event_label
from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
where series in (
  'ESCO Information Skills (S2)', 'ESCO Digital Skills (S5)',
  'AI keyword concepts',
  'O*NET AI tasks', 'STEM tasks', 'Strict AIMatch', 'Lenient AIMatch'
)
order by month_start, sort_order`;n.nlx_skill_ai_stem_chatgpt_index_data&&(n.nlx_skill_ai_stem_chatgpt_index_data instanceof Error?E.initialError=n.nlx_skill_ai_stem_chatgpt_index_data:E.initialData=n.nlx_skill_ai_stem_chatgpt_index_data,n.nlx_skill_ai_stem_chatgpt_index_columns&&(E.knownColumns=n.nlx_skill_ai_stem_chatgpt_index_columns));let T,H=!1;const F=he.createReactive({callback:M=>{a(1,T=M)},execFn:m},{id:"nlx_skill_ai_stem_chatgpt_index",...E});F(De,{noResolve:q,...E}),globalThis[Symbol.for("nlx_skill_ai_stem_chatgpt_index")]={get value(){return T}};let pe={initialData:void 0,initialError:void 0},J=O`with latest_month as (
  select max(month_start) as latest_month
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
),
renamed as (
  select
    case series
      when 'ESCO Information Skills (S2)' then 'S2 information'
      when 'ESCO Digital Skills (S5)' then 'S5 digital'
      when 'O*NET AI tasks' then 'O*NET ML / AI tasks'
      else series
    end as series,
    sort_order,
    max(case when month_start = date '2022-11-01' then value_per_1k_active_jobs end) as nov_2022_per_1k,
    max(case when month_start = (select latest_month from latest_month) then value_per_1k_active_jobs end) as latest_per_1k,
    max(case when month_start = (select latest_month from latest_month) then indexed_value end) as latest_index
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
  where series in (
    'ESCO Information Skills (S2)', 'ESCO Digital Skills (S5)',
    'AI keyword concepts',
    'O*NET AI tasks', 'STEM tasks', 'Strict AIMatch', 'Lenient AIMatch'
  )
  group by 1, 2
)
select *
from renamed
order by sort_order`,fe=`with latest_month as (
  select max(month_start) as latest_month
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
),
renamed as (
  select
    case series
      when 'ESCO Information Skills (S2)' then 'S2 information'
      when 'ESCO Digital Skills (S5)' then 'S5 digital'
      when 'O*NET AI tasks' then 'O*NET ML / AI tasks'
      else series
    end as series,
    sort_order,
    max(case when month_start = date '2022-11-01' then value_per_1k_active_jobs end) as nov_2022_per_1k,
    max(case when month_start = (select latest_month from latest_month) then value_per_1k_active_jobs end) as latest_per_1k,
    max(case when month_start = (select latest_month from latest_month) then indexed_value end) as latest_index
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
  where series in (
    'ESCO Information Skills (S2)', 'ESCO Digital Skills (S5)',
    'AI keyword concepts',
    'O*NET AI tasks', 'STEM tasks', 'Strict AIMatch', 'Lenient AIMatch'
  )
  group by 1, 2
)
select *
from renamed
order by sort_order`;n.nlx_signal_index_summary_data&&(n.nlx_signal_index_summary_data instanceof Error?pe.initialError=n.nlx_signal_index_summary_data:pe.initialData=n.nlx_signal_index_summary_data,n.nlx_signal_index_summary_columns&&(pe.knownColumns=n.nlx_signal_index_summary_columns));let Y,kt=!1;const Ye=he.createReactive({callback:M=>{a(2,Y=M)},execFn:m},{id:"nlx_signal_index_summary",...pe});Ye(fe,{noResolve:J,...pe}),globalThis[Symbol.for("nlx_signal_index_summary")]={get value(){return Y}};let z={initialData:void 0,initialError:void 0},Xe=O`select *
from usajobs.AGGR_SonnetGptStemTasks_Headline`,Ze=`select *
from usajobs.AGGR_SonnetGptStemTasks_Headline`;n.stem_task_agreement_headline_data&&(n.stem_task_agreement_headline_data instanceof Error?z.initialError=n.stem_task_agreement_headline_data:z.initialData=n.stem_task_agreement_headline_data,n.stem_task_agreement_headline_columns&&(z.knownColumns=n.stem_task_agreement_headline_columns));let $e,gt=!1;const st=he.createReactive({callback:M=>{a(3,$e=M)},execFn:m},{id:"stem_task_agreement_headline",...z});st(Ze,{noResolve:Xe,...z}),globalThis[Symbol.for("stem_task_agreement_headline")]={get value(){return $e}};let K={initialData:void 0,initialError:void 0},be=O`select
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  pass_rate
from usajobs.AGGR_SonnetGptStemTasks_Summary
order by agreement_group`,Me=`select
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  pass_rate
from usajobs.AGGR_SonnetGptStemTasks_Summary
order by agreement_group`;n.stem_task_agreement_summary_data&&(n.stem_task_agreement_summary_data instanceof Error?K.initialError=n.stem_task_agreement_summary_data:K.initialData=n.stem_task_agreement_summary_data,n.stem_task_agreement_summary_columns&&(K.knownColumns=n.stem_task_agreement_summary_columns));let ke,at=!1;const ye=he.createReactive({callback:M=>{a(4,ke=M)},execFn:m},{id:"stem_task_agreement_summary",...K});ye(Me,{noResolve:be,...K}),globalThis[Symbol.for("stem_task_agreement_summary")]={get value(){return ke}};let qe={initialData:void 0,initialError:void 0},Ee=O`with searched_tasks as (
  select
    task_id,
    task_text,
    provenance,
    max(case when regexp_matches(lower(task_text), '(^|[^a-z])ai([^a-z]|$)') then 1 else 0 end) as has_ai,
    max(case when lower(task_text) like '%artificial intelligence%' then 1 else 0 end) as has_artificial_intelligence,
    max(case when lower(task_text) like '%machine learning%' then 1 else 0 end) as has_machine_learning
  from usajobs.onet_task_statements
  group by 1, 2, 3
)
select
  cast(task_id as integer) as task_id,
  case
    when (has_ai = 1 or has_artificial_intelligence = 1) and has_machine_learning = 1 then 'AI / artificial intelligence; machine learning'
    when has_ai = 1 then 'AI'
    when has_artificial_intelligence = 1 then 'artificial intelligence'
    when has_machine_learning = 1 then 'machine learning'
  end as matched_term,
  task_text,
  provenance
from searched_tasks
where has_ai = 1
   or has_artificial_intelligence = 1
   or has_machine_learning = 1
order by matched_term, task_id`,ge=`with searched_tasks as (
  select
    task_id,
    task_text,
    provenance,
    max(case when regexp_matches(lower(task_text), '(^|[^a-z])ai([^a-z]|$)') then 1 else 0 end) as has_ai,
    max(case when lower(task_text) like '%artificial intelligence%' then 1 else 0 end) as has_artificial_intelligence,
    max(case when lower(task_text) like '%machine learning%' then 1 else 0 end) as has_machine_learning
  from usajobs.onet_task_statements
  group by 1, 2, 3
)
select
  cast(task_id as integer) as task_id,
  case
    when (has_ai = 1 or has_artificial_intelligence = 1) and has_machine_learning = 1 then 'AI / artificial intelligence; machine learning'
    when has_ai = 1 then 'AI'
    when has_artificial_intelligence = 1 then 'artificial intelligence'
    when has_machine_learning = 1 then 'machine learning'
  end as matched_term,
  task_text,
  provenance
from searched_tasks
where has_ai = 1
   or has_artificial_intelligence = 1
   or has_machine_learning = 1
order by matched_term, task_id`;n.onet_ai_coverage_data&&(n.onet_ai_coverage_data instanceof Error?qe.initialError=n.onet_ai_coverage_data:qe.initialData=n.onet_ai_coverage_data,n.onet_ai_coverage_columns&&(qe.knownColumns=n.onet_ai_coverage_columns));let vt,it=!1;const Fe=he.createReactive({callback:M=>{a(5,vt=M)},execFn:m},{id:"onet_ai_coverage",...qe});Fe(ge,{noResolve:Ee,...qe}),globalThis[Symbol.for("onet_ai_coverage")]={get value(){return vt}};let ve={initialData:void 0,initialError:void 0},W=O`with onet_ai_tasks as (
  select distinct task_id
  from usajobs.onet_task_statements
  where regexp_matches(lower(task_text), '(^|[^a-z])ai([^a-z]|$)')
     or lower(task_text) like '%artificial intelligence%'
     or lower(task_text) like '%machine learning%'
),
sparse_task_postings as (
  select
    t.month_start,
    'USAJOBS' as corpus,
    sum(t.n_active_postings_with_task) as n_sparse_onet_ai_task_matches
  from usajobs.AGGR_USAJobsTaskPostingsByActiveMonth t
  inner join onet_ai_tasks a
    on a.task_id = t.task_id
  group by 1, 2
  union all
  select
    t.month_start,
    'NLx corpus' as corpus,
    sum(t.n_active_jobs_with_task) as n_sparse_onet_ai_task_matches
  from nlx.AGGR_TaskPostingsByMonth t
  inner join onet_ai_tasks a
    on a.task_id = t.task_id
  group by 1, 2
),
denominator as (
  select
    month_start,
    'USAJOBS' as corpus,
    monthly_active_jobs as n_jobs_or_postings
  from usajobs.monthly_active_jobs
  union all
  select
    month_start,
    'NLx corpus' as corpus,
    n_active_jobs as n_jobs_or_postings
  from nlx.CMP_AiByMonth
)
select
  d.month_start,
  d.corpus,
  d.n_jobs_or_postings,
  coalesce(s.n_sparse_onet_ai_task_matches, 0) as n_sparse_onet_ai_task_matches,
  coalesce(s.n_sparse_onet_ai_task_matches, 0) * 1.0
    / nullif(d.n_jobs_or_postings, 0) as sparse_onet_ai_task_matches_per_job
from denominator d
left join sparse_task_postings s
  on s.month_start = d.month_start
 and s.corpus = d.corpus
order by d.month_start, d.corpus`,Ue=`with onet_ai_tasks as (
  select distinct task_id
  from usajobs.onet_task_statements
  where regexp_matches(lower(task_text), '(^|[^a-z])ai([^a-z]|$)')
     or lower(task_text) like '%artificial intelligence%'
     or lower(task_text) like '%machine learning%'
),
sparse_task_postings as (
  select
    t.month_start,
    'USAJOBS' as corpus,
    sum(t.n_active_postings_with_task) as n_sparse_onet_ai_task_matches
  from usajobs.AGGR_USAJobsTaskPostingsByActiveMonth t
  inner join onet_ai_tasks a
    on a.task_id = t.task_id
  group by 1, 2
  union all
  select
    t.month_start,
    'NLx corpus' as corpus,
    sum(t.n_active_jobs_with_task) as n_sparse_onet_ai_task_matches
  from nlx.AGGR_TaskPostingsByMonth t
  inner join onet_ai_tasks a
    on a.task_id = t.task_id
  group by 1, 2
),
denominator as (
  select
    month_start,
    'USAJOBS' as corpus,
    monthly_active_jobs as n_jobs_or_postings
  from usajobs.monthly_active_jobs
  union all
  select
    month_start,
    'NLx corpus' as corpus,
    n_active_jobs as n_jobs_or_postings
  from nlx.CMP_AiByMonth
)
select
  d.month_start,
  d.corpus,
  d.n_jobs_or_postings,
  coalesce(s.n_sparse_onet_ai_task_matches, 0) as n_sparse_onet_ai_task_matches,
  coalesce(s.n_sparse_onet_ai_task_matches, 0) * 1.0
    / nullif(d.n_jobs_or_postings, 0) as sparse_onet_ai_task_matches_per_job
from denominator d
left join sparse_task_postings s
  on s.month_start = d.month_start
 and s.corpus = d.corpus
order by d.month_start, d.corpus`;n.sparse_onet_ai_by_month_data&&(n.sparse_onet_ai_by_month_data instanceof Error?ve.initialError=n.sparse_onet_ai_by_month_data:ve.initialData=n.sparse_onet_ai_by_month_data,n.sparse_onet_ai_by_month_columns&&(ve.knownColumns=n.sparse_onet_ai_by_month_columns));let nt,Le=!1;const Je=he.createReactive({callback:M=>{a(6,nt=M)},execFn:m},{id:"sparse_onet_ai_by_month",...ve});Je(Ue,{noResolve:W,...ve}),globalThis[Symbol.for("sparse_onet_ai_by_month")]={get value(){return nt}};let Q={initialData:void 0,initialError:void 0},ze=O`select
  month_start,
  corpus,
  rollup_scope,
  n_jobs_or_postings,
  skill_mentions,
  jobs_or_postings_with_skill,
  skill_posting_or_job_share,
  skill_posting_or_job_per_1k,
  esco_skill_code,
  series_label
from usajobs.AGGR_USAJobsEscoDataScienceSkillProfile
where rollup_scope = 'Narrow'
order by month_start, corpus, esco_skill_code`,Ne=`select
  month_start,
  corpus,
  rollup_scope,
  n_jobs_or_postings,
  skill_mentions,
  jobs_or_postings_with_skill,
  skill_posting_or_job_share,
  skill_posting_or_job_per_1k,
  esco_skill_code,
  series_label
from usajobs.AGGR_USAJobsEscoDataScienceSkillProfile
where rollup_scope = 'Narrow'
order by month_start, corpus, esco_skill_code`;n.esco_data_science_skill_data&&(n.esco_data_science_skill_data instanceof Error?Q.initialError=n.esco_data_science_skill_data:Q.initialData=n.esco_data_science_skill_data,n.esco_data_science_skill_columns&&(Q.knownColumns=n.esco_data_science_skill_columns));let Be,wt=!1;const rt=he.createReactive({callback:M=>{a(7,Be=M)},execFn:m},{id:"esco_data_science_skill",...Q});rt(Ne,{noResolve:ze,...Q}),globalThis[Symbol.for("esco_data_science_skill")]={get value(){return Be}};let we={initialData:void 0,initialError:void 0},U=O`select
  month_start,
  corpus,
  rollup_scope,
  n_jobs_or_postings,
  skill_mentions,
  jobs_or_postings_with_skill,
  skill_posting_or_job_share,
  skill_posting_or_job_per_1k,
  esco_skill_code,
  series_label
from usajobs.AGGR_USAJobsEscoDataScienceSkillProfile
where rollup_scope = 'Broad'
order by month_start, corpus, esco_skill_code`,Se=`select
  month_start,
  corpus,
  rollup_scope,
  n_jobs_or_postings,
  skill_mentions,
  jobs_or_postings_with_skill,
  skill_posting_or_job_share,
  skill_posting_or_job_per_1k,
  esco_skill_code,
  series_label
from usajobs.AGGR_USAJobsEscoDataScienceSkillProfile
where rollup_scope = 'Broad'
order by month_start, corpus, esco_skill_code`;n.esco_data_skill_broad_data&&(n.esco_data_skill_broad_data instanceof Error?we.initialError=n.esco_data_skill_broad_data:we.initialData=n.esco_data_skill_broad_data,n.esco_data_skill_broad_columns&&(we.knownColumns=n.esco_data_skill_broad_columns));let Re,Ve=!1;const yt=he.createReactive({callback:M=>{a(8,Re=M)},execFn:m},{id:"esco_data_skill_broad",...we});yt(Se,{noResolve:U,...we}),globalThis[Symbol.for("esco_data_skill_broad")]={get value(){return Re}};let xe={initialData:void 0,initialError:void 0},Pe=O`select
  month_start,
  series,
  sort_order,
  n_active_jobs,
  active_jobs_with_keyword,
  keyword_mentions,
  share_active_jobs_with_keyword,
  keyword_jobs_per_1k_active_jobs,
  indexed_value
from nlx.AGGR_NlxConceptAiKeywordByMonth
order by month_start, sort_order`,Ce=`select
  month_start,
  series,
  sort_order,
  n_active_jobs,
  active_jobs_with_keyword,
  keyword_mentions,
  share_active_jobs_with_keyword,
  keyword_jobs_per_1k_active_jobs,
  indexed_value
from nlx.AGGR_NlxConceptAiKeywordByMonth
order by month_start, sort_order`;n.ai_keyword_correlation_data&&(n.ai_keyword_correlation_data instanceof Error?xe.initialError=n.ai_keyword_correlation_data:xe.initialData=n.ai_keyword_correlation_data,n.ai_keyword_correlation_columns&&(xe.knownColumns=n.ai_keyword_correlation_columns));let St,g=!1;const ot=he.createReactive({callback:M=>{a(9,St=M)},execFn:m},{id:"ai_keyword_correlation",...xe});ot(Ce,{noResolve:Pe,...xe}),globalThis[Symbol.for("ai_keyword_correlation")]={get value(){return St}};let xt={initialData:void 0,initialError:void 0},lt=O`with latest_month as (
  select max(month_start) as latest_month
  from nlx.AGGR_NlxConceptAiKeywordByMonth
),
latest as (
  select *
  from nlx.AGGR_NlxConceptAiKeywordByMonth
  where month_start = (select latest_month from latest_month)
),
ranked as (
  select
    series,
    share_active_jobs_with_keyword,
    active_jobs_with_keyword,
    row_number() over (order by share_active_jobs_with_keyword desc, series) as rank_latest
  from latest
)
select
  max(case when rank_latest = 1 then series end) as top_series,
  max(case when rank_latest = 1 then share_active_jobs_with_keyword end) as top_share,
  max(case when rank_latest = 1 then active_jobs_with_keyword end) as top_active_jobs_with_keyword,
  max(case when rank_latest = 2 then series end) as second_series,
  max(case when rank_latest = 2 then share_active_jobs_with_keyword end) as second_share,
  max(case when rank_latest = 3 then series end) as third_series,
  max(case when rank_latest = 3 then share_active_jobs_with_keyword end) as third_share
from ranked`,Ge=`with latest_month as (
  select max(month_start) as latest_month
  from nlx.AGGR_NlxConceptAiKeywordByMonth
),
latest as (
  select *
  from nlx.AGGR_NlxConceptAiKeywordByMonth
  where month_start = (select latest_month from latest_month)
),
ranked as (
  select
    series,
    share_active_jobs_with_keyword,
    active_jobs_with_keyword,
    row_number() over (order by share_active_jobs_with_keyword desc, series) as rank_latest
  from latest
)
select
  max(case when rank_latest = 1 then series end) as top_series,
  max(case when rank_latest = 1 then share_active_jobs_with_keyword end) as top_share,
  max(case when rank_latest = 1 then active_jobs_with_keyword end) as top_active_jobs_with_keyword,
  max(case when rank_latest = 2 then series end) as second_series,
  max(case when rank_latest = 2 then share_active_jobs_with_keyword end) as second_share,
  max(case when rank_latest = 3 then series end) as third_series,
  max(case when rank_latest = 3 then share_active_jobs_with_keyword end) as third_share
from ranked`;n.ai_keyword_correlation_summary_data&&(n.ai_keyword_correlation_summary_data instanceof Error?xt.initialError=n.ai_keyword_correlation_summary_data:xt.initialData=n.ai_keyword_correlation_summary_data,n.ai_keyword_correlation_summary_columns&&(xt.knownColumns=n.ai_keyword_correlation_summary_columns));let js,Yt=!1;const _t=he.createReactive({callback:M=>{a(10,js=M)},execFn:m},{id:"ai_keyword_correlation_summary",...xt});_t(Ge,{noResolve:lt,...xt}),globalThis[Symbol.for("ai_keyword_correlation_summary")]={get value(){return js}};let ct={initialData:void 0,initialError:void 0},Oe=O`select
  month_start,
  'USAJOBS' as corpus,
  n_postings as n_jobs_or_postings,
  strict_ai_codes,
  strict_ai_codes_per_1k_active_postings / 1000.0 as strict_ai_codes_per_job
from usajobs.AGGR_USAJobsAiScoreV2ByMonth
union all
select
  month_start,
  'NLx corpus' as corpus,
  n_active_jobs as n_jobs_or_postings,
  strict_ai_codes,
  strict_ai_codes_per_active_job as strict_ai_codes_per_job
from nlx.CMP_AiByMonth
order by month_start, corpus`,Xt=`select
  month_start,
  'USAJOBS' as corpus,
  n_postings as n_jobs_or_postings,
  strict_ai_codes,
  strict_ai_codes_per_1k_active_postings / 1000.0 as strict_ai_codes_per_job
from usajobs.AGGR_USAJobsAiScoreV2ByMonth
union all
select
  month_start,
  'NLx corpus' as corpus,
  n_active_jobs as n_jobs_or_postings,
  strict_ai_codes,
  strict_ai_codes_per_active_job as strict_ai_codes_per_job
from nlx.CMP_AiByMonth
order by month_start, corpus`;n.strict_ai_intensity_by_month_data&&(n.strict_ai_intensity_by_month_data instanceof Error?ct.initialError=n.strict_ai_intensity_by_month_data:ct.initialData=n.strict_ai_intensity_by_month_data,n.strict_ai_intensity_by_month_columns&&(ct.knownColumns=n.strict_ai_intensity_by_month_columns));let Zt,mt=!1;const $s=he.createReactive({callback:M=>{a(11,Zt=M)},execFn:m},{id:"strict_ai_intensity_by_month",...ct});$s(Xt,{noResolve:Oe,...ct}),globalThis[Symbol.for("strict_ai_intensity_by_month")]={get value(){return Zt}};let dt={initialData:void 0,initialError:void 0},Ie=O`select
  month_start,
  'USAJOBS' as corpus,
  n_postings as n_jobs_or_postings,
  lenient_ai_codes,
  lenient_ai_codes_per_1k_active_postings / 1000.0 as lenient_ai_codes_per_job
from usajobs.AGGR_USAJobsAiScoreV2ByMonth
union all
select
  month_start,
  'NLx corpus' as corpus,
  n_active_jobs as n_jobs_or_postings,
  lenient_ai_codes,
  lenient_ai_codes_per_active_job as lenient_ai_codes_per_job
from nlx.CMP_AiByMonth
order by month_start, corpus`,es=`select
  month_start,
  'USAJOBS' as corpus,
  n_postings as n_jobs_or_postings,
  lenient_ai_codes,
  lenient_ai_codes_per_1k_active_postings / 1000.0 as lenient_ai_codes_per_job
from usajobs.AGGR_USAJobsAiScoreV2ByMonth
union all
select
  month_start,
  'NLx corpus' as corpus,
  n_active_jobs as n_jobs_or_postings,
  lenient_ai_codes,
  lenient_ai_codes_per_active_job as lenient_ai_codes_per_job
from nlx.CMP_AiByMonth
order by month_start, corpus`;n.lenient_ai_intensity_by_month_data&&(n.lenient_ai_intensity_by_month_data instanceof Error?dt.initialError=n.lenient_ai_intensity_by_month_data:dt.initialData=n.lenient_ai_intensity_by_month_data,n.lenient_ai_intensity_by_month_columns&&(dt.knownColumns=n.lenient_ai_intensity_by_month_columns));let ts,At=!1;const et=he.createReactive({callback:M=>{a(12,ts=M)},execFn:m},{id:"lenient_ai_intensity_by_month",...dt});et(es,{noResolve:Ie,...dt}),globalThis[Symbol.for("lenient_ai_intensity_by_month")]={get value(){return ts}};let jt={initialData:void 0,initialError:void 0},ut=O`with points as (
  select
    case series
      when 'ESCO Information Skills (S2)' then 'S2 information'
      when 'ESCO Digital Skills (S5)' then 'S5 digital'
    else series
  end as series,
  sort_order,
  max(case when month_start = date '2022-11-01' then n_active_jobs end) as nov_2022_active_jobs,
  max(case when month_start = date '2022-11-01' then n_signal end) as nov_2022_signal_volume,
  max(case when month_start = date '2022-11-01' then value_per_1k_active_jobs end) as nov_2022_per_1k,
  avg(n_active_jobs) as mean_active_jobs,
  avg(n_signal) as mean_signal_volume,
  avg(value_per_1k_active_jobs) as mean_per_1k
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
  group by 1, 2
),
strict_reference as (
  select
    nov_2022_per_1k as strict_nov_2022_per_1k,
    mean_per_1k as strict_mean_per_1k
  from points
  where series = 'Strict AIMatch'
)
select
  series,
  nov_2022_active_jobs,
  nov_2022_signal_volume,
  nov_2022_per_1k,
  mean_active_jobs,
  mean_signal_volume,
  mean_per_1k,
  nov_2022_per_1k / nullif((select strict_nov_2022_per_1k from strict_reference), 0) as nov_2022_vs_strict_multiple,
  mean_per_1k / nullif((select strict_mean_per_1k from strict_reference), 0) as mean_vs_strict_multiple
from points
order by sort_order`,We=`with points as (
  select
    case series
      when 'ESCO Information Skills (S2)' then 'S2 information'
      when 'ESCO Digital Skills (S5)' then 'S5 digital'
    else series
  end as series,
  sort_order,
  max(case when month_start = date '2022-11-01' then n_active_jobs end) as nov_2022_active_jobs,
  max(case when month_start = date '2022-11-01' then n_signal end) as nov_2022_signal_volume,
  max(case when month_start = date '2022-11-01' then value_per_1k_active_jobs end) as nov_2022_per_1k,
  avg(n_active_jobs) as mean_active_jobs,
  avg(n_signal) as mean_signal_volume,
  avg(value_per_1k_active_jobs) as mean_per_1k
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
  group by 1, 2
),
strict_reference as (
  select
    nov_2022_per_1k as strict_nov_2022_per_1k,
    mean_per_1k as strict_mean_per_1k
  from points
  where series = 'Strict AIMatch'
)
select
  series,
  nov_2022_active_jobs,
  nov_2022_signal_volume,
  nov_2022_per_1k,
  mean_active_jobs,
  mean_signal_volume,
  mean_per_1k,
  nov_2022_per_1k / nullif((select strict_nov_2022_per_1k from strict_reference), 0) as nov_2022_vs_strict_multiple,
  mean_per_1k / nullif((select strict_mean_per_1k from strict_reference), 0) as mean_vs_strict_multiple
from points
order by sort_order`;n.nlx_skill_ai_magnitude_data&&(n.nlx_skill_ai_magnitude_data instanceof Error?jt.initialError=n.nlx_skill_ai_magnitude_data:jt.initialData=n.nlx_skill_ai_magnitude_data,n.nlx_skill_ai_magnitude_columns&&(jt.knownColumns=n.nlx_skill_ai_magnitude_columns));let ss,$t=!1;const Ct=he.createReactive({callback:M=>{a(13,ss=M)},execFn:m},{id:"nlx_skill_ai_magnitude",...jt});Ct(We,{noResolve:ut,...jt}),globalThis[Symbol.for("nlx_skill_ai_magnitude")]={get value(){return ss}};let ft={initialData:void 0,initialError:void 0},Te=O`with nlx_unindexed as (
  select
    month_start,
    'NLx corpus' as corpus,
    'NLx corpus: raw strict AI code volume (active jobs)' as series,
    'raw volume' as measure_type,
    'active month' as month_assignment,
    n_active_jobs as denominator_count,
    strict_ai_codes,
    strict_ai_codes * 1.0 as value
  from nlx.CMP_AiByMonth
  union all
  select
    month_start,
    'NLx corpus' as corpus,
    'NLx corpus: strict AI codes per active job' as series,
    'rate' as measure_type,
    'active month' as month_assignment,
    n_active_jobs as denominator_count,
    strict_ai_codes,
    strict_ai_codes_per_active_job as value
  from nlx.CMP_AiByMonth
),
nlx_baseline as (
  select
    series,
    value as baseline_value
  from nlx_unindexed
  where month_start = date '2022-11-01'
),
nlx_indexed as (
  select
    n.month_start,
    n.corpus,
    n.series,
    n.measure_type,
    n.month_assignment,
    n.denominator_count,
    n.strict_ai_codes,
    n.value,
    b.baseline_value,
    n.value / nullif(b.baseline_value, 0) as indexed_value
  from nlx_unindexed n
  inner join nlx_baseline b using (series)
  where b.baseline_value > 0
)
select *
from nlx_indexed
where indexed_value is not null
order by month_start, series`,as=`with nlx_unindexed as (
  select
    month_start,
    'NLx corpus' as corpus,
    'NLx corpus: raw strict AI code volume (active jobs)' as series,
    'raw volume' as measure_type,
    'active month' as month_assignment,
    n_active_jobs as denominator_count,
    strict_ai_codes,
    strict_ai_codes * 1.0 as value
  from nlx.CMP_AiByMonth
  union all
  select
    month_start,
    'NLx corpus' as corpus,
    'NLx corpus: strict AI codes per active job' as series,
    'rate' as measure_type,
    'active month' as month_assignment,
    n_active_jobs as denominator_count,
    strict_ai_codes,
    strict_ai_codes_per_active_job as value
  from nlx.CMP_AiByMonth
),
nlx_baseline as (
  select
    series,
    value as baseline_value
  from nlx_unindexed
  where month_start = date '2022-11-01'
),
nlx_indexed as (
  select
    n.month_start,
    n.corpus,
    n.series,
    n.measure_type,
    n.month_assignment,
    n.denominator_count,
    n.strict_ai_codes,
    n.value,
    b.baseline_value,
    n.value / nullif(b.baseline_value, 0) as indexed_value
  from nlx_unindexed n
  inner join nlx_baseline b using (series)
  where b.baseline_value > 0
)
select *
from nlx_indexed
where indexed_value is not null
order by month_start, series`;n.denominator_sensitivity_nlx_strict_ai_data&&(n.denominator_sensitivity_nlx_strict_ai_data instanceof Error?ft.initialError=n.denominator_sensitivity_nlx_strict_ai_data:ft.initialData=n.denominator_sensitivity_nlx_strict_ai_data,n.denominator_sensitivity_nlx_strict_ai_columns&&(ft.knownColumns=n.denominator_sensitivity_nlx_strict_ai_columns));let is,ht=!1;const ns=he.createReactive({callback:M=>{a(14,is=M)},execFn:m},{id:"denominator_sensitivity_nlx_strict_ai",...ft});ns(as,{noResolve:Te,...ft}),globalThis[Symbol.for("denominator_sensitivity_nlx_strict_ai")]={get value(){return is}};let Ke={initialData:void 0,initialError:void 0},Qe=O`select *
from usajobs.CMP_DenominatorSensitivityStrictAi
where indexed_value is not null
order by month_start, series`,It=`select *
from usajobs.CMP_DenominatorSensitivityStrictAi
where indexed_value is not null
order by month_start, series`;n.denominator_sensitivity_usajobs_strict_ai_data&&(n.denominator_sensitivity_usajobs_strict_ai_data instanceof Error?Ke.initialError=n.denominator_sensitivity_usajobs_strict_ai_data:Ke.initialData=n.denominator_sensitivity_usajobs_strict_ai_data,n.denominator_sensitivity_usajobs_strict_ai_columns&&(Ke.knownColumns=n.denominator_sensitivity_usajobs_strict_ai_columns));let tt,Cs=!1;const rs=he.createReactive({callback:M=>{a(15,tt=M)},execFn:m},{id:"denominator_sensitivity_usajobs_strict_ai",...Ke});return rs(It,{noResolve:Qe,...Ke}),globalThis[Symbol.for("denominator_sensitivity_usajobs_strict_ai")]={get value(){return tt}},Ri(()=>{On.set(!1)}),r.$$set=M=>{"data"in M&&a(16,c=M.data)},r.$$.update=()=>{r.$$.dirty[0]&65536&&a(17,{data:n={},customFormattingSettings:y,__db:j}=c,n),r.$$.dirty[0]&131072&&Bn.set(Object.keys(n).length>0),r.$$.dirty[2]&1048576&&t.params,r.$$.dirty[0]&3932160&&(B||!G?B||(u(P,{noResolve:B,...I}),a(21,G=!0)):u(P,{noResolve:B})),r.$$.dirty[0]&62914560&&(q||!H?q||(F(De,{noResolve:q,...E}),a(25,H=!0)):F(De,{noResolve:q})),r.$$.dirty[0]&1006632960&&(J||!kt?J||(Ye(fe,{noResolve:J,...pe}),a(29,kt=!0)):Ye(fe,{noResolve:J})),r.$$.dirty[0]&1073741824|r.$$.dirty[1]&7&&(Xe||!gt?Xe||(st(Ze,{noResolve:Xe,...z}),a(33,gt=!0)):st(Ze,{noResolve:Xe})),r.$$.dirty[1]&120&&(be||!at?be||(ye(Me,{noResolve:be,...K}),a(37,at=!0)):ye(Me,{noResolve:be})),r.$$.dirty[1]&1920&&(Ee||!it?Ee||(Fe(ge,{noResolve:Ee,...qe}),a(41,it=!0)):Fe(ge,{noResolve:Ee})),r.$$.dirty[1]&30720&&(W||!Le?W||(Je(Ue,{noResolve:W,...ve}),a(45,Le=!0)):Je(Ue,{noResolve:W})),r.$$.dirty[1]&491520&&(ze||!wt?ze||(rt(Ne,{noResolve:ze,...Q}),a(49,wt=!0)):rt(Ne,{noResolve:ze})),r.$$.dirty[1]&7864320&&(U||!Ve?U||(yt(Se,{noResolve:U,...we}),a(53,Ve=!0)):yt(Se,{noResolve:U})),r.$$.dirty[1]&125829120&&(Pe||!g?Pe||(ot(Ce,{noResolve:Pe,...xe}),a(57,g=!0)):ot(Ce,{noResolve:Pe})),r.$$.dirty[1]&2013265920&&(lt||!Yt?lt||(_t(Ge,{noResolve:lt,...xt}),a(61,Yt=!0)):_t(Ge,{noResolve:lt})),r.$$.dirty[2]&15&&(Oe||!mt?Oe||($s(Xt,{noResolve:Oe,...ct}),a(65,mt=!0)):$s(Xt,{noResolve:Oe})),r.$$.dirty[2]&240&&(Ie||!At?Ie||(et(es,{noResolve:Ie,...dt}),a(69,At=!0)):et(es,{noResolve:Ie})),r.$$.dirty[2]&3840&&(ut||!$t?ut||(Ct(We,{noResolve:ut,...jt}),a(73,$t=!0)):Ct(We,{noResolve:ut})),r.$$.dirty[2]&61440&&(Te||!ht?Te||(ns(as,{noResolve:Te,...ft}),a(77,ht=!0)):ns(as,{noResolve:Te})),r.$$.dirty[2]&983040&&(Qe||!Cs?Qe||(rs(It,{noResolve:Qe,...Ke}),a(81,Cs=!0)):rs(It,{noResolve:Qe}))},a(19,B=O`with signal_scope(series, display_series, sort_order) as (
  values
    ('ESCO Information Skills (S2)', 'S2 information', 1),
    ('ESCO Digital Skills (S5)', 'S5 digital', 2),
    ('AI keyword concepts', 'AI keyword concepts', 4),
    ('O*NET AI tasks', 'O*NET ML / AI tasks', 20),
    ('Strict AIMatch', 'Strict AIMatch', 30),
    ('Lenient AIMatch', 'Lenient AIMatch', 31),
    ('STEM tasks', 'STEM tasks', 40)
),
latest_signal as (
  select
    series,
    max(month_start) as latest_month
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
  group by 1
),
movement as (
  select
    scope.display_series as series,
    scope.sort_order,
    max(case when s.month_start = date '2022-11-01' then s.value_per_1k_active_jobs end) as nov_2022_per_1k,
    s.value_per_1k_active_jobs as latest_per_1k,
    s.indexed_value as latest_index,
    s.indexed_value - 1 as change_since_nov_2022
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt s
  join signal_scope scope
    on scope.series = s.series
  join latest_signal l
    on l.series = s.series
   and l.latest_month = s.month_start
  group by 1, 2, 4, 5, 6
)
select
  m.series,
  c.taxonomy_items,
  c.coverage_basis,
  m.nov_2022_per_1k,
  m.latest_per_1k,
  m.latest_index,
  m.change_since_nov_2022
from movement m
join nlx.AGGR_NlxFigureB1TaxonomyCoverage c using (series)
order by m.sort_order`),a(20,P=`with signal_scope(series, display_series, sort_order) as (
  values
    ('ESCO Information Skills (S2)', 'S2 information', 1),
    ('ESCO Digital Skills (S5)', 'S5 digital', 2),
    ('AI keyword concepts', 'AI keyword concepts', 4),
    ('O*NET AI tasks', 'O*NET ML / AI tasks', 20),
    ('Strict AIMatch', 'Strict AIMatch', 30),
    ('Lenient AIMatch', 'Lenient AIMatch', 31),
    ('STEM tasks', 'STEM tasks', 40)
),
latest_signal as (
  select
    series,
    max(month_start) as latest_month
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
  group by 1
),
movement as (
  select
    scope.display_series as series,
    scope.sort_order,
    max(case when s.month_start = date '2022-11-01' then s.value_per_1k_active_jobs end) as nov_2022_per_1k,
    s.value_per_1k_active_jobs as latest_per_1k,
    s.indexed_value as latest_index,
    s.indexed_value - 1 as change_since_nov_2022
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt s
  join signal_scope scope
    on scope.series = s.series
  join latest_signal l
    on l.series = s.series
   and l.latest_month = s.month_start
  group by 1, 2, 4, 5, 6
)
select
  m.series,
  c.taxonomy_items,
  c.coverage_basis,
  m.nov_2022_per_1k,
  m.latest_per_1k,
  m.latest_index,
  m.change_since_nov_2022
from movement m
join nlx.AGGR_NlxFigureB1TaxonomyCoverage c using (series)
order by m.sort_order`),a(23,q=O`select
  month_start,
  case series
    when 'ESCO Information Skills (S2)' then 'S2 information'
    when 'ESCO Digital Skills (S5)' then 'S5 digital'
    when 'O*NET AI tasks' then 'O*NET ML / AI tasks'
    else series
  end as series,
  signal_group,
  sort_order,
  n_active_jobs,
  n_signal,
  value_per_1k_active_jobs,
  baseline_per_1k_active_jobs,
  indexed_value,
  event_label
from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
where series in (
  'ESCO Information Skills (S2)', 'ESCO Digital Skills (S5)',
  'AI keyword concepts',
  'O*NET AI tasks', 'STEM tasks', 'Strict AIMatch', 'Lenient AIMatch'
)
order by month_start, sort_order`),a(24,De=`select
  month_start,
  case series
    when 'ESCO Information Skills (S2)' then 'S2 information'
    when 'ESCO Digital Skills (S5)' then 'S5 digital'
    when 'O*NET AI tasks' then 'O*NET ML / AI tasks'
    else series
  end as series,
  signal_group,
  sort_order,
  n_active_jobs,
  n_signal,
  value_per_1k_active_jobs,
  baseline_per_1k_active_jobs,
  indexed_value,
  event_label
from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
where series in (
  'ESCO Information Skills (S2)', 'ESCO Digital Skills (S5)',
  'AI keyword concepts',
  'O*NET AI tasks', 'STEM tasks', 'Strict AIMatch', 'Lenient AIMatch'
)
order by month_start, sort_order`),a(27,J=O`with latest_month as (
  select max(month_start) as latest_month
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
),
renamed as (
  select
    case series
      when 'ESCO Information Skills (S2)' then 'S2 information'
      when 'ESCO Digital Skills (S5)' then 'S5 digital'
      when 'O*NET AI tasks' then 'O*NET ML / AI tasks'
      else series
    end as series,
    sort_order,
    max(case when month_start = date '2022-11-01' then value_per_1k_active_jobs end) as nov_2022_per_1k,
    max(case when month_start = (select latest_month from latest_month) then value_per_1k_active_jobs end) as latest_per_1k,
    max(case when month_start = (select latest_month from latest_month) then indexed_value end) as latest_index
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
  where series in (
    'ESCO Information Skills (S2)', 'ESCO Digital Skills (S5)',
    'AI keyword concepts',
    'O*NET AI tasks', 'STEM tasks', 'Strict AIMatch', 'Lenient AIMatch'
  )
  group by 1, 2
)
select *
from renamed
order by sort_order`),a(28,fe=`with latest_month as (
  select max(month_start) as latest_month
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
),
renamed as (
  select
    case series
      when 'ESCO Information Skills (S2)' then 'S2 information'
      when 'ESCO Digital Skills (S5)' then 'S5 digital'
      when 'O*NET AI tasks' then 'O*NET ML / AI tasks'
      else series
    end as series,
    sort_order,
    max(case when month_start = date '2022-11-01' then value_per_1k_active_jobs end) as nov_2022_per_1k,
    max(case when month_start = (select latest_month from latest_month) then value_per_1k_active_jobs end) as latest_per_1k,
    max(case when month_start = (select latest_month from latest_month) then indexed_value end) as latest_index
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
  where series in (
    'ESCO Information Skills (S2)', 'ESCO Digital Skills (S5)',
    'AI keyword concepts',
    'O*NET AI tasks', 'STEM tasks', 'Strict AIMatch', 'Lenient AIMatch'
  )
  group by 1, 2
)
select *
from renamed
order by sort_order`),a(31,Xe=O`select *
from usajobs.AGGR_SonnetGptStemTasks_Headline`),a(32,Ze=`select *
from usajobs.AGGR_SonnetGptStemTasks_Headline`),a(35,be=O`select
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  pass_rate
from usajobs.AGGR_SonnetGptStemTasks_Summary
order by agreement_group`),a(36,Me=`select
  agreement_group,
  reviewed_n,
  adjudicated_n,
  included_n,
  pass_rate
from usajobs.AGGR_SonnetGptStemTasks_Summary
order by agreement_group`),a(39,Ee=O`with searched_tasks as (
  select
    task_id,
    task_text,
    provenance,
    max(case when regexp_matches(lower(task_text), '(^|[^a-z])ai([^a-z]|$)') then 1 else 0 end) as has_ai,
    max(case when lower(task_text) like '%artificial intelligence%' then 1 else 0 end) as has_artificial_intelligence,
    max(case when lower(task_text) like '%machine learning%' then 1 else 0 end) as has_machine_learning
  from usajobs.onet_task_statements
  group by 1, 2, 3
)
select
  cast(task_id as integer) as task_id,
  case
    when (has_ai = 1 or has_artificial_intelligence = 1) and has_machine_learning = 1 then 'AI / artificial intelligence; machine learning'
    when has_ai = 1 then 'AI'
    when has_artificial_intelligence = 1 then 'artificial intelligence'
    when has_machine_learning = 1 then 'machine learning'
  end as matched_term,
  task_text,
  provenance
from searched_tasks
where has_ai = 1
   or has_artificial_intelligence = 1
   or has_machine_learning = 1
order by matched_term, task_id`),a(40,ge=`with searched_tasks as (
  select
    task_id,
    task_text,
    provenance,
    max(case when regexp_matches(lower(task_text), '(^|[^a-z])ai([^a-z]|$)') then 1 else 0 end) as has_ai,
    max(case when lower(task_text) like '%artificial intelligence%' then 1 else 0 end) as has_artificial_intelligence,
    max(case when lower(task_text) like '%machine learning%' then 1 else 0 end) as has_machine_learning
  from usajobs.onet_task_statements
  group by 1, 2, 3
)
select
  cast(task_id as integer) as task_id,
  case
    when (has_ai = 1 or has_artificial_intelligence = 1) and has_machine_learning = 1 then 'AI / artificial intelligence; machine learning'
    when has_ai = 1 then 'AI'
    when has_artificial_intelligence = 1 then 'artificial intelligence'
    when has_machine_learning = 1 then 'machine learning'
  end as matched_term,
  task_text,
  provenance
from searched_tasks
where has_ai = 1
   or has_artificial_intelligence = 1
   or has_machine_learning = 1
order by matched_term, task_id`),a(43,W=O`with onet_ai_tasks as (
  select distinct task_id
  from usajobs.onet_task_statements
  where regexp_matches(lower(task_text), '(^|[^a-z])ai([^a-z]|$)')
     or lower(task_text) like '%artificial intelligence%'
     or lower(task_text) like '%machine learning%'
),
sparse_task_postings as (
  select
    t.month_start,
    'USAJOBS' as corpus,
    sum(t.n_active_postings_with_task) as n_sparse_onet_ai_task_matches
  from usajobs.AGGR_USAJobsTaskPostingsByActiveMonth t
  inner join onet_ai_tasks a
    on a.task_id = t.task_id
  group by 1, 2
  union all
  select
    t.month_start,
    'NLx corpus' as corpus,
    sum(t.n_active_jobs_with_task) as n_sparse_onet_ai_task_matches
  from nlx.AGGR_TaskPostingsByMonth t
  inner join onet_ai_tasks a
    on a.task_id = t.task_id
  group by 1, 2
),
denominator as (
  select
    month_start,
    'USAJOBS' as corpus,
    monthly_active_jobs as n_jobs_or_postings
  from usajobs.monthly_active_jobs
  union all
  select
    month_start,
    'NLx corpus' as corpus,
    n_active_jobs as n_jobs_or_postings
  from nlx.CMP_AiByMonth
)
select
  d.month_start,
  d.corpus,
  d.n_jobs_or_postings,
  coalesce(s.n_sparse_onet_ai_task_matches, 0) as n_sparse_onet_ai_task_matches,
  coalesce(s.n_sparse_onet_ai_task_matches, 0) * 1.0
    / nullif(d.n_jobs_or_postings, 0) as sparse_onet_ai_task_matches_per_job
from denominator d
left join sparse_task_postings s
  on s.month_start = d.month_start
 and s.corpus = d.corpus
order by d.month_start, d.corpus`),a(44,Ue=`with onet_ai_tasks as (
  select distinct task_id
  from usajobs.onet_task_statements
  where regexp_matches(lower(task_text), '(^|[^a-z])ai([^a-z]|$)')
     or lower(task_text) like '%artificial intelligence%'
     or lower(task_text) like '%machine learning%'
),
sparse_task_postings as (
  select
    t.month_start,
    'USAJOBS' as corpus,
    sum(t.n_active_postings_with_task) as n_sparse_onet_ai_task_matches
  from usajobs.AGGR_USAJobsTaskPostingsByActiveMonth t
  inner join onet_ai_tasks a
    on a.task_id = t.task_id
  group by 1, 2
  union all
  select
    t.month_start,
    'NLx corpus' as corpus,
    sum(t.n_active_jobs_with_task) as n_sparse_onet_ai_task_matches
  from nlx.AGGR_TaskPostingsByMonth t
  inner join onet_ai_tasks a
    on a.task_id = t.task_id
  group by 1, 2
),
denominator as (
  select
    month_start,
    'USAJOBS' as corpus,
    monthly_active_jobs as n_jobs_or_postings
  from usajobs.monthly_active_jobs
  union all
  select
    month_start,
    'NLx corpus' as corpus,
    n_active_jobs as n_jobs_or_postings
  from nlx.CMP_AiByMonth
)
select
  d.month_start,
  d.corpus,
  d.n_jobs_or_postings,
  coalesce(s.n_sparse_onet_ai_task_matches, 0) as n_sparse_onet_ai_task_matches,
  coalesce(s.n_sparse_onet_ai_task_matches, 0) * 1.0
    / nullif(d.n_jobs_or_postings, 0) as sparse_onet_ai_task_matches_per_job
from denominator d
left join sparse_task_postings s
  on s.month_start = d.month_start
 and s.corpus = d.corpus
order by d.month_start, d.corpus`),a(47,ze=O`select
  month_start,
  corpus,
  rollup_scope,
  n_jobs_or_postings,
  skill_mentions,
  jobs_or_postings_with_skill,
  skill_posting_or_job_share,
  skill_posting_or_job_per_1k,
  esco_skill_code,
  series_label
from usajobs.AGGR_USAJobsEscoDataScienceSkillProfile
where rollup_scope = 'Narrow'
order by month_start, corpus, esco_skill_code`),a(48,Ne=`select
  month_start,
  corpus,
  rollup_scope,
  n_jobs_or_postings,
  skill_mentions,
  jobs_or_postings_with_skill,
  skill_posting_or_job_share,
  skill_posting_or_job_per_1k,
  esco_skill_code,
  series_label
from usajobs.AGGR_USAJobsEscoDataScienceSkillProfile
where rollup_scope = 'Narrow'
order by month_start, corpus, esco_skill_code`),a(51,U=O`select
  month_start,
  corpus,
  rollup_scope,
  n_jobs_or_postings,
  skill_mentions,
  jobs_or_postings_with_skill,
  skill_posting_or_job_share,
  skill_posting_or_job_per_1k,
  esco_skill_code,
  series_label
from usajobs.AGGR_USAJobsEscoDataScienceSkillProfile
where rollup_scope = 'Broad'
order by month_start, corpus, esco_skill_code`),a(52,Se=`select
  month_start,
  corpus,
  rollup_scope,
  n_jobs_or_postings,
  skill_mentions,
  jobs_or_postings_with_skill,
  skill_posting_or_job_share,
  skill_posting_or_job_per_1k,
  esco_skill_code,
  series_label
from usajobs.AGGR_USAJobsEscoDataScienceSkillProfile
where rollup_scope = 'Broad'
order by month_start, corpus, esco_skill_code`),a(55,Pe=O`select
  month_start,
  series,
  sort_order,
  n_active_jobs,
  active_jobs_with_keyword,
  keyword_mentions,
  share_active_jobs_with_keyword,
  keyword_jobs_per_1k_active_jobs,
  indexed_value
from nlx.AGGR_NlxConceptAiKeywordByMonth
order by month_start, sort_order`),a(56,Ce=`select
  month_start,
  series,
  sort_order,
  n_active_jobs,
  active_jobs_with_keyword,
  keyword_mentions,
  share_active_jobs_with_keyword,
  keyword_jobs_per_1k_active_jobs,
  indexed_value
from nlx.AGGR_NlxConceptAiKeywordByMonth
order by month_start, sort_order`),a(59,lt=O`with latest_month as (
  select max(month_start) as latest_month
  from nlx.AGGR_NlxConceptAiKeywordByMonth
),
latest as (
  select *
  from nlx.AGGR_NlxConceptAiKeywordByMonth
  where month_start = (select latest_month from latest_month)
),
ranked as (
  select
    series,
    share_active_jobs_with_keyword,
    active_jobs_with_keyword,
    row_number() over (order by share_active_jobs_with_keyword desc, series) as rank_latest
  from latest
)
select
  max(case when rank_latest = 1 then series end) as top_series,
  max(case when rank_latest = 1 then share_active_jobs_with_keyword end) as top_share,
  max(case when rank_latest = 1 then active_jobs_with_keyword end) as top_active_jobs_with_keyword,
  max(case when rank_latest = 2 then series end) as second_series,
  max(case when rank_latest = 2 then share_active_jobs_with_keyword end) as second_share,
  max(case when rank_latest = 3 then series end) as third_series,
  max(case when rank_latest = 3 then share_active_jobs_with_keyword end) as third_share
from ranked`),a(60,Ge=`with latest_month as (
  select max(month_start) as latest_month
  from nlx.AGGR_NlxConceptAiKeywordByMonth
),
latest as (
  select *
  from nlx.AGGR_NlxConceptAiKeywordByMonth
  where month_start = (select latest_month from latest_month)
),
ranked as (
  select
    series,
    share_active_jobs_with_keyword,
    active_jobs_with_keyword,
    row_number() over (order by share_active_jobs_with_keyword desc, series) as rank_latest
  from latest
)
select
  max(case when rank_latest = 1 then series end) as top_series,
  max(case when rank_latest = 1 then share_active_jobs_with_keyword end) as top_share,
  max(case when rank_latest = 1 then active_jobs_with_keyword end) as top_active_jobs_with_keyword,
  max(case when rank_latest = 2 then series end) as second_series,
  max(case when rank_latest = 2 then share_active_jobs_with_keyword end) as second_share,
  max(case when rank_latest = 3 then series end) as third_series,
  max(case when rank_latest = 3 then share_active_jobs_with_keyword end) as third_share
from ranked`),a(63,Oe=O`select
  month_start,
  'USAJOBS' as corpus,
  n_postings as n_jobs_or_postings,
  strict_ai_codes,
  strict_ai_codes_per_1k_active_postings / 1000.0 as strict_ai_codes_per_job
from usajobs.AGGR_USAJobsAiScoreV2ByMonth
union all
select
  month_start,
  'NLx corpus' as corpus,
  n_active_jobs as n_jobs_or_postings,
  strict_ai_codes,
  strict_ai_codes_per_active_job as strict_ai_codes_per_job
from nlx.CMP_AiByMonth
order by month_start, corpus`),a(64,Xt=`select
  month_start,
  'USAJOBS' as corpus,
  n_postings as n_jobs_or_postings,
  strict_ai_codes,
  strict_ai_codes_per_1k_active_postings / 1000.0 as strict_ai_codes_per_job
from usajobs.AGGR_USAJobsAiScoreV2ByMonth
union all
select
  month_start,
  'NLx corpus' as corpus,
  n_active_jobs as n_jobs_or_postings,
  strict_ai_codes,
  strict_ai_codes_per_active_job as strict_ai_codes_per_job
from nlx.CMP_AiByMonth
order by month_start, corpus`),a(67,Ie=O`select
  month_start,
  'USAJOBS' as corpus,
  n_postings as n_jobs_or_postings,
  lenient_ai_codes,
  lenient_ai_codes_per_1k_active_postings / 1000.0 as lenient_ai_codes_per_job
from usajobs.AGGR_USAJobsAiScoreV2ByMonth
union all
select
  month_start,
  'NLx corpus' as corpus,
  n_active_jobs as n_jobs_or_postings,
  lenient_ai_codes,
  lenient_ai_codes_per_active_job as lenient_ai_codes_per_job
from nlx.CMP_AiByMonth
order by month_start, corpus`),a(68,es=`select
  month_start,
  'USAJOBS' as corpus,
  n_postings as n_jobs_or_postings,
  lenient_ai_codes,
  lenient_ai_codes_per_1k_active_postings / 1000.0 as lenient_ai_codes_per_job
from usajobs.AGGR_USAJobsAiScoreV2ByMonth
union all
select
  month_start,
  'NLx corpus' as corpus,
  n_active_jobs as n_jobs_or_postings,
  lenient_ai_codes,
  lenient_ai_codes_per_active_job as lenient_ai_codes_per_job
from nlx.CMP_AiByMonth
order by month_start, corpus`),a(71,ut=O`with points as (
  select
    case series
      when 'ESCO Information Skills (S2)' then 'S2 information'
      when 'ESCO Digital Skills (S5)' then 'S5 digital'
    else series
  end as series,
  sort_order,
  max(case when month_start = date '2022-11-01' then n_active_jobs end) as nov_2022_active_jobs,
  max(case when month_start = date '2022-11-01' then n_signal end) as nov_2022_signal_volume,
  max(case when month_start = date '2022-11-01' then value_per_1k_active_jobs end) as nov_2022_per_1k,
  avg(n_active_jobs) as mean_active_jobs,
  avg(n_signal) as mean_signal_volume,
  avg(value_per_1k_active_jobs) as mean_per_1k
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
  group by 1, 2
),
strict_reference as (
  select
    nov_2022_per_1k as strict_nov_2022_per_1k,
    mean_per_1k as strict_mean_per_1k
  from points
  where series = 'Strict AIMatch'
)
select
  series,
  nov_2022_active_jobs,
  nov_2022_signal_volume,
  nov_2022_per_1k,
  mean_active_jobs,
  mean_signal_volume,
  mean_per_1k,
  nov_2022_per_1k / nullif((select strict_nov_2022_per_1k from strict_reference), 0) as nov_2022_vs_strict_multiple,
  mean_per_1k / nullif((select strict_mean_per_1k from strict_reference), 0) as mean_vs_strict_multiple
from points
order by sort_order`),a(72,We=`with points as (
  select
    case series
      when 'ESCO Information Skills (S2)' then 'S2 information'
      when 'ESCO Digital Skills (S5)' then 'S5 digital'
    else series
  end as series,
  sort_order,
  max(case when month_start = date '2022-11-01' then n_active_jobs end) as nov_2022_active_jobs,
  max(case when month_start = date '2022-11-01' then n_signal end) as nov_2022_signal_volume,
  max(case when month_start = date '2022-11-01' then value_per_1k_active_jobs end) as nov_2022_per_1k,
  avg(n_active_jobs) as mean_active_jobs,
  avg(n_signal) as mean_signal_volume,
  avg(value_per_1k_active_jobs) as mean_per_1k
  from nlx.CMP_NlxSkillAiIndexedSinceChatgpt
  group by 1, 2
),
strict_reference as (
  select
    nov_2022_per_1k as strict_nov_2022_per_1k,
    mean_per_1k as strict_mean_per_1k
  from points
  where series = 'Strict AIMatch'
)
select
  series,
  nov_2022_active_jobs,
  nov_2022_signal_volume,
  nov_2022_per_1k,
  mean_active_jobs,
  mean_signal_volume,
  mean_per_1k,
  nov_2022_per_1k / nullif((select strict_nov_2022_per_1k from strict_reference), 0) as nov_2022_vs_strict_multiple,
  mean_per_1k / nullif((select strict_mean_per_1k from strict_reference), 0) as mean_vs_strict_multiple
from points
order by sort_order`),a(75,Te=O`with nlx_unindexed as (
  select
    month_start,
    'NLx corpus' as corpus,
    'NLx corpus: raw strict AI code volume (active jobs)' as series,
    'raw volume' as measure_type,
    'active month' as month_assignment,
    n_active_jobs as denominator_count,
    strict_ai_codes,
    strict_ai_codes * 1.0 as value
  from nlx.CMP_AiByMonth
  union all
  select
    month_start,
    'NLx corpus' as corpus,
    'NLx corpus: strict AI codes per active job' as series,
    'rate' as measure_type,
    'active month' as month_assignment,
    n_active_jobs as denominator_count,
    strict_ai_codes,
    strict_ai_codes_per_active_job as value
  from nlx.CMP_AiByMonth
),
nlx_baseline as (
  select
    series,
    value as baseline_value
  from nlx_unindexed
  where month_start = date '2022-11-01'
),
nlx_indexed as (
  select
    n.month_start,
    n.corpus,
    n.series,
    n.measure_type,
    n.month_assignment,
    n.denominator_count,
    n.strict_ai_codes,
    n.value,
    b.baseline_value,
    n.value / nullif(b.baseline_value, 0) as indexed_value
  from nlx_unindexed n
  inner join nlx_baseline b using (series)
  where b.baseline_value > 0
)
select *
from nlx_indexed
where indexed_value is not null
order by month_start, series`),a(76,as=`with nlx_unindexed as (
  select
    month_start,
    'NLx corpus' as corpus,
    'NLx corpus: raw strict AI code volume (active jobs)' as series,
    'raw volume' as measure_type,
    'active month' as month_assignment,
    n_active_jobs as denominator_count,
    strict_ai_codes,
    strict_ai_codes * 1.0 as value
  from nlx.CMP_AiByMonth
  union all
  select
    month_start,
    'NLx corpus' as corpus,
    'NLx corpus: strict AI codes per active job' as series,
    'rate' as measure_type,
    'active month' as month_assignment,
    n_active_jobs as denominator_count,
    strict_ai_codes,
    strict_ai_codes_per_active_job as value
  from nlx.CMP_AiByMonth
),
nlx_baseline as (
  select
    series,
    value as baseline_value
  from nlx_unindexed
  where month_start = date '2022-11-01'
),
nlx_indexed as (
  select
    n.month_start,
    n.corpus,
    n.series,
    n.measure_type,
    n.month_assignment,
    n.denominator_count,
    n.strict_ai_codes,
    n.value,
    b.baseline_value,
    n.value / nullif(b.baseline_value, 0) as indexed_value
  from nlx_unindexed n
  inner join nlx_baseline b using (series)
  where b.baseline_value > 0
)
select *
from nlx_indexed
where indexed_value is not null
order by month_start, series`),a(79,Qe=O`select *
from usajobs.CMP_DenominatorSensitivityStrictAi
where indexed_value is not null
order by month_start, series`),a(80,It=`select *
from usajobs.CMP_DenominatorSensitivityStrictAi
where indexed_value is not null
order by month_start, series`),[R,T,Y,$e,ke,vt,nt,Be,Re,St,js,Zt,ts,ss,is,tt,c,n,I,B,P,G,E,q,De,H,pe,J,fe,kt,z,Xe,Ze,gt,K,be,Me,at,qe,Ee,ge,it,ve,W,Ue,Le,Q,ze,Ne,wt,we,U,Se,Ve,xe,Pe,Ce,g,xt,lt,Ge,Yt,ct,Oe,Xt,mt,dt,Ie,es,At,jt,ut,We,$t,ft,Te,as,ht,Ke,Qe,It,Cs,t]}class Cr extends nn{constructor(s){super(),rn(this,s,fr,dr,an,{data:16},null,[-1,-1,-1,-1])}}export{Cr as component};
