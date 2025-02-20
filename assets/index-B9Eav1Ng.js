const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/ProjectDetailModal-DJM-KY3H.js","assets/index-CdVizewJ.js","assets/ProjectDetailModal-DelCCQy9.css","assets/client-eHLDoCux.js"])))=>i.map(i=>d[i]);
function re(s,n){for(var e=0;e<n.length;e++){const t=n[e];if(typeof t!="string"&&!Array.isArray(t)){for(const a in t)if(a!=="default"&&!(a in s)){const o=Object.getOwnPropertyDescriptor(t,a);o&&Object.defineProperty(s,a,o.get?o:{enumerable:!0,get:()=>t[a]})}}}return Object.freeze(Object.defineProperty(s,Symbol.toStringTag,{value:"Module"}))}(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))t(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function e(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(a){if(a.ep)return;a.ep=!0;const o=e(a);fetch(a.href,o)}})();const oe="modulepreload",le=function(s){return"/portfolio/"+s},pn={},Js=function(n,e,t){let a=Promise.resolve();if(e&&e.length>0){document.getElementsByTagName("link");const i=document.querySelector("meta[property=csp-nonce]"),f=(i==null?void 0:i.nonce)||(i==null?void 0:i.getAttribute("nonce"));a=Promise.allSettled(e.map(d=>{if(d=le(d),d in pn)return;pn[d]=!0;const y=d.endsWith(".css"),g=y?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${g}`))return;const w=document.createElement("link");if(w.rel=y?"stylesheet":oe,y||(w.as="script"),w.crossOrigin="",w.href=d,f&&w.setAttribute("nonce",f),document.head.appendChild(w),y)return new Promise((M,N)=>{w.addEventListener("load",M),w.addEventListener("error",()=>N(new Error(`Unable to preload CSS for ${d}`)))})}))}function o(i){const f=new Event("vite:preloadError",{cancelable:!0});if(f.payload=i,window.dispatchEvent(f),!f.defaultPrevented)throw i}return a.then(i=>{for(const f of i||[])f.status==="rejected"&&o(f.reason);return n().catch(o)})};function ie(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var As={exports:{}},ls={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var un;function ce(){if(un)return ls;un=1;var s=Symbol.for("react.transitional.element"),n=Symbol.for("react.fragment");function e(t,a,o){var i=null;if(o!==void 0&&(i=""+o),a.key!==void 0&&(i=""+a.key),"key"in a){o={};for(var f in a)f!=="key"&&(o[f]=a[f])}else o=a;return a=o.ref,{$$typeof:s,type:t,key:i,ref:a!==void 0?a:null,props:o}}return ls.Fragment=n,ls.jsx=e,ls.jsxs=e,ls}var fn;function pe(){return fn||(fn=1,As.exports=ce()),As.exports}var us=pe(),$s={exports:{}},v={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dn;function ue(){if(dn)return v;dn=1;var s=Symbol.for("react.transitional.element"),n=Symbol.for("react.portal"),e=Symbol.for("react.fragment"),t=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.consumer"),i=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),y=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),w=Symbol.iterator;function M(r){return r===null||typeof r!="object"?null:(r=w&&r[w]||r["@@iterator"],typeof r=="function"?r:null)}var N={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},P=Object.assign,S={};function $(r,c,j){this.props=r,this.context=c,this.refs=S,this.updater=j||N}$.prototype.isReactComponent={},$.prototype.setState=function(r,c){if(typeof r!="object"&&typeof r!="function"&&r!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,r,c,"setState")},$.prototype.forceUpdate=function(r){this.updater.enqueueForceUpdate(this,r,"forceUpdate")};function T(){}T.prototype=$.prototype;function I(r,c,j){this.props=r,this.context=c,this.refs=S,this.updater=j||N}var x=I.prototype=new T;x.constructor=I,P(x,$.prototype),x.isPureReactComponent=!0;var V=Array.isArray,l={H:null,A:null,T:null,S:null},O=Object.prototype.hasOwnProperty;function _(r,c,j,b,k,L){return j=L.ref,{$$typeof:s,type:r,key:c,ref:j!==void 0?j:null,props:L}}function rn(r,c){return _(r.type,c,void 0,void 0,void 0,r.props)}function Ps(r){return typeof r=="object"&&r!==null&&r.$$typeof===s}function se(r){var c={"=":"=0",":":"=2"};return"$"+r.replace(/[=:]/g,function(j){return c[j]})}var on=/\/+/g;function Ts(r,c){return typeof r=="object"&&r!==null&&r.key!=null?se(""+r.key):c.toString(36)}function ln(){}function ne(r){switch(r.status){case"fulfilled":return r.value;case"rejected":throw r.reason;default:switch(typeof r.status=="string"?r.then(ln,ln):(r.status="pending",r.then(function(c){r.status==="pending"&&(r.status="fulfilled",r.value=c)},function(c){r.status==="pending"&&(r.status="rejected",r.reason=c)})),r.status){case"fulfilled":return r.value;case"rejected":throw r.reason}}throw r}function ss(r,c,j,b,k){var L=typeof r;(L==="undefined"||L==="boolean")&&(r=null);var F=!1;if(r===null)F=!0;else switch(L){case"bigint":case"string":case"number":F=!0;break;case"object":switch(r.$$typeof){case s:case n:F=!0;break;case g:return F=r._init,ss(F(r._payload),c,j,b,k)}}if(F)return k=k(r),F=b===""?"."+Ts(r,0):b,V(k)?(j="",F!=null&&(j=F.replace(on,"$&/")+"/"),ss(k,c,j,"",function(ae){return ae})):k!=null&&(Ps(k)&&(k=rn(k,j+(k.key==null||r&&r.key===k.key?"":(""+k.key).replace(on,"$&/")+"/")+F)),c.push(k)),1;F=0;var Q=b===""?".":b+":";if(V(r))for(var z=0;z<r.length;z++)b=r[z],L=Q+Ts(b,z),F+=ss(b,c,j,L,k);else if(z=M(r),typeof z=="function")for(r=z.call(r),z=0;!(b=r.next()).done;)b=b.value,L=Q+Ts(b,z++),F+=ss(b,c,j,L,k);else if(L==="object"){if(typeof r.then=="function")return ss(ne(r),c,j,b,k);throw c=String(r),Error("Objects are not valid as a React child (found: "+(c==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":c)+"). If you meant to render a collection of children, use an array instead.")}return F}function ws(r,c,j){if(r==null)return r;var b=[],k=0;return ss(r,b,"","",function(L){return c.call(j,L,k++)}),b}function ee(r){if(r._status===-1){var c=r._result;c=c(),c.then(function(j){(r._status===0||r._status===-1)&&(r._status=1,r._result=j)},function(j){(r._status===0||r._status===-1)&&(r._status=2,r._result=j)}),r._status===-1&&(r._status=0,r._result=c)}if(r._status===1)return r._result.default;throw r._result}var cn=typeof reportError=="function"?reportError:function(r){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var c=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof r=="object"&&r!==null&&typeof r.message=="string"?String(r.message):String(r),error:r});if(!window.dispatchEvent(c))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",r);return}console.error(r)};function te(){}return v.Children={map:ws,forEach:function(r,c,j){ws(r,function(){c.apply(this,arguments)},j)},count:function(r){var c=0;return ws(r,function(){c++}),c},toArray:function(r){return ws(r,function(c){return c})||[]},only:function(r){if(!Ps(r))throw Error("React.Children.only expected to receive a single React element child.");return r}},v.Component=$,v.Fragment=e,v.Profiler=a,v.PureComponent=I,v.StrictMode=t,v.Suspense=d,v.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=l,v.act=function(){throw Error("act(...) is not supported in production builds of React.")},v.cache=function(r){return function(){return r.apply(null,arguments)}},v.cloneElement=function(r,c,j){if(r==null)throw Error("The argument must be a React element, but you passed "+r+".");var b=P({},r.props),k=r.key,L=void 0;if(c!=null)for(F in c.ref!==void 0&&(L=void 0),c.key!==void 0&&(k=""+c.key),c)!O.call(c,F)||F==="key"||F==="__self"||F==="__source"||F==="ref"&&c.ref===void 0||(b[F]=c[F]);var F=arguments.length-2;if(F===1)b.children=j;else if(1<F){for(var Q=Array(F),z=0;z<F;z++)Q[z]=arguments[z+2];b.children=Q}return _(r.type,k,void 0,void 0,L,b)},v.createContext=function(r){return r={$$typeof:i,_currentValue:r,_currentValue2:r,_threadCount:0,Provider:null,Consumer:null},r.Provider=r,r.Consumer={$$typeof:o,_context:r},r},v.createElement=function(r,c,j){var b,k={},L=null;if(c!=null)for(b in c.key!==void 0&&(L=""+c.key),c)O.call(c,b)&&b!=="key"&&b!=="__self"&&b!=="__source"&&(k[b]=c[b]);var F=arguments.length-2;if(F===1)k.children=j;else if(1<F){for(var Q=Array(F),z=0;z<F;z++)Q[z]=arguments[z+2];k.children=Q}if(r&&r.defaultProps)for(b in F=r.defaultProps,F)k[b]===void 0&&(k[b]=F[b]);return _(r,L,void 0,void 0,null,k)},v.createRef=function(){return{current:null}},v.forwardRef=function(r){return{$$typeof:f,render:r}},v.isValidElement=Ps,v.lazy=function(r){return{$$typeof:g,_payload:{_status:-1,_result:r},_init:ee}},v.memo=function(r,c){return{$$typeof:y,type:r,compare:c===void 0?null:c}},v.startTransition=function(r){var c=l.T,j={};l.T=j;try{var b=r(),k=l.S;k!==null&&k(j,b),typeof b=="object"&&b!==null&&typeof b.then=="function"&&b.then(te,cn)}catch(L){cn(L)}finally{l.T=c}},v.unstable_useCacheRefresh=function(){return l.H.useCacheRefresh()},v.use=function(r){return l.H.use(r)},v.useActionState=function(r,c,j){return l.H.useActionState(r,c,j)},v.useCallback=function(r,c){return l.H.useCallback(r,c)},v.useContext=function(r){return l.H.useContext(r)},v.useDebugValue=function(){},v.useDeferredValue=function(r,c){return l.H.useDeferredValue(r,c)},v.useEffect=function(r,c){return l.H.useEffect(r,c)},v.useId=function(){return l.H.useId()},v.useImperativeHandle=function(r,c,j){return l.H.useImperativeHandle(r,c,j)},v.useInsertionEffect=function(r,c){return l.H.useInsertionEffect(r,c)},v.useLayoutEffect=function(r,c){return l.H.useLayoutEffect(r,c)},v.useMemo=function(r,c){return l.H.useMemo(r,c)},v.useOptimistic=function(r,c){return l.H.useOptimistic(r,c)},v.useReducer=function(r,c,j){return l.H.useReducer(r,c,j)},v.useRef=function(r){return l.H.useRef(r)},v.useState=function(r){return l.H.useState(r)},v.useSyncExternalStore=function(r,c,j){return l.H.useSyncExternalStore(r,c,j)},v.useTransition=function(){return l.H.useTransition()},v.version="19.0.0",v}var hn;function fe(){return hn||(hn=1,$s.exports=ue()),$s.exports}var m=fe();const de=ie(m),gn=re({__proto__:null,default:de},[m]);var he=!1;function ge(s){if(s.sheet)return s.sheet;for(var n=0;n<document.styleSheets.length;n++)if(document.styleSheets[n].ownerNode===s)return document.styleSheets[n]}function me(s){var n=document.createElement("style");return n.setAttribute("data-emotion",s.key),s.nonce!==void 0&&n.setAttribute("nonce",s.nonce),n.appendChild(document.createTextNode("")),n.setAttribute("data-s",""),n}var ye=function(){function s(e){var t=this;this._insertTag=function(a){var o;t.tags.length===0?t.insertionPoint?o=t.insertionPoint.nextSibling:t.prepend?o=t.container.firstChild:o=t.before:o=t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(a,o),t.tags.push(a)},this.isSpeedy=e.speedy===void 0?!he:e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var n=s.prototype;return n.hydrate=function(t){t.forEach(this._insertTag)},n.insert=function(t){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(me(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var o=ge(a);try{o.insertRule(t,o.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(t));this.ctr++},n.flush=function(){this.tags.forEach(function(t){var a;return(a=t.parentNode)==null?void 0:a.removeChild(t)}),this.tags=[],this.ctr=0},s}(),q="-ms-",ks="-moz-",C="-webkit-",In="comm",Ks="rule",Qs="decl",we="@import",Mn="@keyframes",je="@layer",be=Math.abs,_s=String.fromCharCode,ve=Object.assign;function Fe(s,n){return B(s,0)^45?(((n<<2^B(s,0))<<2^B(s,1))<<2^B(s,2))<<2^B(s,3):0}function On(s){return s.trim()}function Se(s,n){return(s=n.exec(s))?s[0]:s}function E(s,n,e){return s.replace(n,e)}function Gs(s,n){return s.indexOf(n)}function B(s,n){return s.charCodeAt(n)|0}function fs(s,n,e){return s.slice(n,e)}function U(s){return s.length}function Xs(s){return s.length}function js(s,n){return n.push(s),s}function ke(s,n){return s.map(n).join("")}var Cs=1,as=1,Nn=0,G=0,D=0,os="";function Es(s,n,e,t,a,o,i){return{value:s,root:n,parent:e,type:t,props:a,children:o,line:Cs,column:as,length:i,return:""}}function is(s,n){return ve(Es("",null,null,"",null,null,0),s,{length:-s.length},n)}function xe(){return D}function _e(){return D=G>0?B(os,--G):0,as--,D===10&&(as=1,Cs--),D}function H(){return D=G<Nn?B(os,G++):0,as++,D===10&&(as=1,Cs++),D}function J(){return B(os,G)}function bs(){return G}function gs(s,n){return fs(os,s,n)}function ds(s){switch(s){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ln(s){return Cs=as=1,Nn=U(os=s),G=0,[]}function Dn(s){return os="",s}function vs(s){return On(gs(G-1,Vs(s===91?s+2:s===40?s+1:s)))}function Ce(s){for(;(D=J())&&D<33;)H();return ds(s)>2||ds(D)>3?"":" "}function Ee(s,n){for(;--n&&H()&&!(D<48||D>102||D>57&&D<65||D>70&&D<97););return gs(s,bs()+(n<6&&J()==32&&H()==32))}function Vs(s){for(;H();)switch(D){case s:return G;case 34:case 39:s!==34&&s!==39&&Vs(D);break;case 40:s===41&&Vs(s);break;case 92:H();break}return G}function Re(s,n){for(;H()&&s+D!==57;)if(s+D===84&&J()===47)break;return"/*"+gs(n,G-1)+"*"+_s(s===47?s:H())}function Pe(s){for(;!ds(J());)H();return gs(s,G)}function Te(s){return Dn(Fs("",null,null,null,[""],s=Ln(s),0,[0],s))}function Fs(s,n,e,t,a,o,i,f,d){for(var y=0,g=0,w=i,M=0,N=0,P=0,S=1,$=1,T=1,I=0,x="",V=a,l=o,O=t,_=x;$;)switch(P=I,I=H()){case 40:if(P!=108&&B(_,w-1)==58){Gs(_+=E(vs(I),"&","&\f"),"&\f")!=-1&&(T=-1);break}case 34:case 39:case 91:_+=vs(I);break;case 9:case 10:case 13:case 32:_+=Ce(P);break;case 92:_+=Ee(bs()-1,7);continue;case 47:switch(J()){case 42:case 47:js(Ae(Re(H(),bs()),n,e),d);break;default:_+="/"}break;case 123*S:f[y++]=U(_)*T;case 125*S:case 59:case 0:switch(I){case 0:case 125:$=0;case 59+g:T==-1&&(_=E(_,/\f/g,"")),N>0&&U(_)-w&&js(N>32?yn(_+";",t,e,w-1):yn(E(_," ","")+";",t,e,w-2),d);break;case 59:_+=";";default:if(js(O=mn(_,n,e,y,g,a,f,x,V=[],l=[],w),o),I===123)if(g===0)Fs(_,n,O,O,V,o,w,f,l);else switch(M===99&&B(_,3)===110?100:M){case 100:case 108:case 109:case 115:Fs(s,O,O,t&&js(mn(s,O,O,0,0,a,f,x,a,V=[],w),l),a,l,w,f,t?V:l);break;default:Fs(_,O,O,O,[""],l,0,f,l)}}y=g=N=0,S=T=1,x=_="",w=i;break;case 58:w=1+U(_),N=P;default:if(S<1){if(I==123)--S;else if(I==125&&S++==0&&_e()==125)continue}switch(_+=_s(I),I*S){case 38:T=g>0?1:(_+="\f",-1);break;case 44:f[y++]=(U(_)-1)*T,T=1;break;case 64:J()===45&&(_+=vs(H())),M=J(),g=w=U(x=_+=Pe(bs())),I++;break;case 45:P===45&&U(_)==2&&(S=0)}}return o}function mn(s,n,e,t,a,o,i,f,d,y,g){for(var w=a-1,M=a===0?o:[""],N=Xs(M),P=0,S=0,$=0;P<t;++P)for(var T=0,I=fs(s,w+1,w=be(S=i[P])),x=s;T<N;++T)(x=On(S>0?M[T]+" "+I:E(I,/&\f/g,M[T])))&&(d[$++]=x);return Es(s,n,e,a===0?Ks:f,d,y,g)}function Ae(s,n,e){return Es(s,n,e,In,_s(xe()),fs(s,2,-2),0)}function yn(s,n,e,t){return Es(s,n,e,Qs,fs(s,0,t),fs(s,t+1,-1),t)}function es(s,n){for(var e="",t=Xs(s),a=0;a<t;a++)e+=n(s[a],a,s,n)||"";return e}function $e(s,n,e,t){switch(s.type){case je:if(s.children.length)break;case we:case Qs:return s.return=s.return||s.value;case In:return"";case Mn:return s.return=s.value+"{"+es(s.children,t)+"}";case Ks:s.value=s.props.join(",")}return U(e=es(s.children,t))?s.return=s.value+"{"+e+"}":""}function Ie(s){var n=Xs(s);return function(e,t,a,o){for(var i="",f=0;f<n;f++)i+=s[f](e,t,a,o)||"";return i}}function Me(s){return function(n){n.root||(n=n.return)&&s(n)}}function Oe(s){var n=Object.create(null);return function(e){return n[e]===void 0&&(n[e]=s(e)),n[e]}}var Ne=function(n,e,t){for(var a=0,o=0;a=o,o=J(),a===38&&o===12&&(e[t]=1),!ds(o);)H();return gs(n,G)},Le=function(n,e){var t=-1,a=44;do switch(ds(a)){case 0:a===38&&J()===12&&(e[t]=1),n[t]+=Ne(G-1,e,t);break;case 2:n[t]+=vs(a);break;case 4:if(a===44){n[++t]=J()===58?"&\f":"",e[t]=n[t].length;break}default:n[t]+=_s(a)}while(a=H());return n},De=function(n,e){return Dn(Le(Ln(n),e))},wn=new WeakMap,ze=function(n){if(!(n.type!=="rule"||!n.parent||n.length<1)){for(var e=n.value,t=n.parent,a=n.column===t.column&&n.line===t.line;t.type!=="rule";)if(t=t.parent,!t)return;if(!(n.props.length===1&&e.charCodeAt(0)!==58&&!wn.get(t))&&!a){wn.set(n,!0);for(var o=[],i=De(e,o),f=t.props,d=0,y=0;d<i.length;d++)for(var g=0;g<f.length;g++,y++)n.props[y]=o[d]?i[d].replace(/&\f/g,f[g]):f[g]+" "+i[d]}}},We=function(n){if(n.type==="decl"){var e=n.value;e.charCodeAt(0)===108&&e.charCodeAt(2)===98&&(n.return="",n.value="")}};function zn(s,n){switch(Fe(s,n)){case 5103:return C+"print-"+s+s;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return C+s+s;case 5349:case 4246:case 4810:case 6968:case 2756:return C+s+ks+s+q+s+s;case 6828:case 4268:return C+s+q+s+s;case 6165:return C+s+q+"flex-"+s+s;case 5187:return C+s+E(s,/(\w+).+(:[^]+)/,C+"box-$1$2"+q+"flex-$1$2")+s;case 5443:return C+s+q+"flex-item-"+E(s,/flex-|-self/,"")+s;case 4675:return C+s+q+"flex-line-pack"+E(s,/align-content|flex-|-self/,"")+s;case 5548:return C+s+q+E(s,"shrink","negative")+s;case 5292:return C+s+q+E(s,"basis","preferred-size")+s;case 6060:return C+"box-"+E(s,"-grow","")+C+s+q+E(s,"grow","positive")+s;case 4554:return C+E(s,/([^-])(transform)/g,"$1"+C+"$2")+s;case 6187:return E(E(E(s,/(zoom-|grab)/,C+"$1"),/(image-set)/,C+"$1"),s,"")+s;case 5495:case 3959:return E(s,/(image-set\([^]*)/,C+"$1$`$1");case 4968:return E(E(s,/(.+:)(flex-)?(.*)/,C+"box-pack:$3"+q+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+C+s+s;case 4095:case 3583:case 4068:case 2532:return E(s,/(.+)-inline(.+)/,C+"$1$2")+s;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(U(s)-1-n>6)switch(B(s,n+1)){case 109:if(B(s,n+4)!==45)break;case 102:return E(s,/(.+:)(.+)-([^]+)/,"$1"+C+"$2-$3$1"+ks+(B(s,n+3)==108?"$3":"$2-$3"))+s;case 115:return~Gs(s,"stretch")?zn(E(s,"stretch","fill-available"),n)+s:s}break;case 4949:if(B(s,n+1)!==115)break;case 6444:switch(B(s,U(s)-3-(~Gs(s,"!important")&&10))){case 107:return E(s,":",":"+C)+s;case 101:return E(s,/(.+:)([^;!]+)(;|!.+)?/,"$1"+C+(B(s,14)===45?"inline-":"")+"box$3$1"+C+"$2$3$1"+q+"$2box$3")+s}break;case 5936:switch(B(s,n+11)){case 114:return C+s+q+E(s,/[svh]\w+-[tblr]{2}/,"tb")+s;case 108:return C+s+q+E(s,/[svh]\w+-[tblr]{2}/,"tb-rl")+s;case 45:return C+s+q+E(s,/[svh]\w+-[tblr]{2}/,"lr")+s}return C+s+q+s+s}return s}var Be=function(n,e,t,a){if(n.length>-1&&!n.return)switch(n.type){case Qs:n.return=zn(n.value,n.length);break;case Mn:return es([is(n,{value:E(n.value,"@","@"+C)})],a);case Ks:if(n.length)return ke(n.props,function(o){switch(Se(o,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return es([is(n,{props:[E(o,/:(read-\w+)/,":"+ks+"$1")]})],a);case"::placeholder":return es([is(n,{props:[E(o,/:(plac\w+)/,":"+C+"input-$1")]}),is(n,{props:[E(o,/:(plac\w+)/,":"+ks+"$1")]}),is(n,{props:[E(o,/:(plac\w+)/,q+"input-$1")]})],a)}return""})}},qe=[Be],Ge=function(n){var e=n.key;if(e==="css"){var t=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(t,function(S){var $=S.getAttribute("data-emotion");$.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var a=n.stylisPlugins||qe,o={},i,f=[];i=n.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+e+' "]'),function(S){for(var $=S.getAttribute("data-emotion").split(" "),T=1;T<$.length;T++)o[$[T]]=!0;f.push(S)});var d,y=[ze,We];{var g,w=[$e,Me(function(S){g.insert(S)})],M=Ie(y.concat(a,w)),N=function($){return es(Te($),M)};d=function($,T,I,x){g=I,N($?$+"{"+T.styles+"}":T.styles),x&&(P.inserted[T.name]=!0)}}var P={key:e,sheet:new ye({key:e,container:i,nonce:n.nonce,speedy:n.speedy,prepend:n.prepend,insertionPoint:n.insertionPoint}),nonce:n.nonce,inserted:o,registered:{},insert:d};return P.sheet.hydrate(f),P},Is={exports:{}},R={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var jn;function Ve(){if(jn)return R;jn=1;var s=typeof Symbol=="function"&&Symbol.for,n=s?Symbol.for("react.element"):60103,e=s?Symbol.for("react.portal"):60106,t=s?Symbol.for("react.fragment"):60107,a=s?Symbol.for("react.strict_mode"):60108,o=s?Symbol.for("react.profiler"):60114,i=s?Symbol.for("react.provider"):60109,f=s?Symbol.for("react.context"):60110,d=s?Symbol.for("react.async_mode"):60111,y=s?Symbol.for("react.concurrent_mode"):60111,g=s?Symbol.for("react.forward_ref"):60112,w=s?Symbol.for("react.suspense"):60113,M=s?Symbol.for("react.suspense_list"):60120,N=s?Symbol.for("react.memo"):60115,P=s?Symbol.for("react.lazy"):60116,S=s?Symbol.for("react.block"):60121,$=s?Symbol.for("react.fundamental"):60117,T=s?Symbol.for("react.responder"):60118,I=s?Symbol.for("react.scope"):60119;function x(l){if(typeof l=="object"&&l!==null){var O=l.$$typeof;switch(O){case n:switch(l=l.type,l){case d:case y:case t:case o:case a:case w:return l;default:switch(l=l&&l.$$typeof,l){case f:case g:case P:case N:case i:return l;default:return O}}case e:return O}}}function V(l){return x(l)===y}return R.AsyncMode=d,R.ConcurrentMode=y,R.ContextConsumer=f,R.ContextProvider=i,R.Element=n,R.ForwardRef=g,R.Fragment=t,R.Lazy=P,R.Memo=N,R.Portal=e,R.Profiler=o,R.StrictMode=a,R.Suspense=w,R.isAsyncMode=function(l){return V(l)||x(l)===d},R.isConcurrentMode=V,R.isContextConsumer=function(l){return x(l)===f},R.isContextProvider=function(l){return x(l)===i},R.isElement=function(l){return typeof l=="object"&&l!==null&&l.$$typeof===n},R.isForwardRef=function(l){return x(l)===g},R.isFragment=function(l){return x(l)===t},R.isLazy=function(l){return x(l)===P},R.isMemo=function(l){return x(l)===N},R.isPortal=function(l){return x(l)===e},R.isProfiler=function(l){return x(l)===o},R.isStrictMode=function(l){return x(l)===a},R.isSuspense=function(l){return x(l)===w},R.isValidElementType=function(l){return typeof l=="string"||typeof l=="function"||l===t||l===y||l===o||l===a||l===w||l===M||typeof l=="object"&&l!==null&&(l.$$typeof===P||l.$$typeof===N||l.$$typeof===i||l.$$typeof===f||l.$$typeof===g||l.$$typeof===$||l.$$typeof===T||l.$$typeof===I||l.$$typeof===S)},R.typeOf=x,R}var bn;function He(){return bn||(bn=1,Is.exports=Ve()),Is.exports}var Ms,vn;function Ue(){if(vn)return Ms;vn=1;var s=He(),n={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},e={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},t={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};o[s.ForwardRef]=t,o[s.Memo]=a;function i(P){return s.isMemo(P)?a:o[P.$$typeof]||n}var f=Object.defineProperty,d=Object.getOwnPropertyNames,y=Object.getOwnPropertySymbols,g=Object.getOwnPropertyDescriptor,w=Object.getPrototypeOf,M=Object.prototype;function N(P,S,$){if(typeof S!="string"){if(M){var T=w(S);T&&T!==M&&N(P,T,$)}var I=d(S);y&&(I=I.concat(y(S)));for(var x=i(P),V=i(S),l=0;l<I.length;++l){var O=I[l];if(!e[O]&&!($&&$[O])&&!(V&&V[O])&&!(x&&x[O])){var _=g(S,O);try{f(P,O,_)}catch{}}}}return P}return Ms=N,Ms}Ue();var Ye=!0;function Je(s,n,e){var t="";return e.split(" ").forEach(function(a){s[a]!==void 0?n.push(s[a]+";"):a&&(t+=a+" ")}),t}var Wn=function(n,e,t){var a=n.key+"-"+e.name;(t===!1||Ye===!1)&&n.registered[a]===void 0&&(n.registered[a]=e.styles)},Bn=function(n,e,t){Wn(n,e,t);var a=n.key+"-"+e.name;if(n.inserted[e.name]===void 0){var o=e;do n.insert(e===o?"."+a:"",o,n.sheet,!0),o=o.next;while(o!==void 0)}};function Ke(s){for(var n=0,e,t=0,a=s.length;a>=4;++t,a-=4)e=s.charCodeAt(t)&255|(s.charCodeAt(++t)&255)<<8|(s.charCodeAt(++t)&255)<<16|(s.charCodeAt(++t)&255)<<24,e=(e&65535)*1540483477+((e>>>16)*59797<<16),e^=e>>>24,n=(e&65535)*1540483477+((e>>>16)*59797<<16)^(n&65535)*1540483477+((n>>>16)*59797<<16);switch(a){case 3:n^=(s.charCodeAt(t+2)&255)<<16;case 2:n^=(s.charCodeAt(t+1)&255)<<8;case 1:n^=s.charCodeAt(t)&255,n=(n&65535)*1540483477+((n>>>16)*59797<<16)}return n^=n>>>13,n=(n&65535)*1540483477+((n>>>16)*59797<<16),((n^n>>>15)>>>0).toString(36)}var Qe={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Xe=!1,Ze=/[A-Z]|^ms/g,st=/_EMO_([^_]+?)_([^]*?)_EMO_/g,qn=function(n){return n.charCodeAt(1)===45},Fn=function(n){return n!=null&&typeof n!="boolean"},Os=Oe(function(s){return qn(s)?s:s.replace(Ze,"-$&").toLowerCase()}),Sn=function(n,e){switch(n){case"animation":case"animationName":if(typeof e=="string")return e.replace(st,function(t,a,o){return Y={name:a,styles:o,next:Y},a})}return Qe[n]!==1&&!qn(n)&&typeof e=="number"&&e!==0?e+"px":e},nt="Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";function hs(s,n,e){if(e==null)return"";var t=e;if(t.__emotion_styles!==void 0)return t;switch(typeof e){case"boolean":return"";case"object":{var a=e;if(a.anim===1)return Y={name:a.name,styles:a.styles,next:Y},a.name;var o=e;if(o.styles!==void 0){var i=o.next;if(i!==void 0)for(;i!==void 0;)Y={name:i.name,styles:i.styles,next:Y},i=i.next;var f=o.styles+";";return f}return et(s,n,e)}case"function":{if(s!==void 0){var d=Y,y=e(s);return Y=d,hs(s,n,y)}break}}var g=e;return g}function et(s,n,e){var t="";if(Array.isArray(e))for(var a=0;a<e.length;a++)t+=hs(s,n,e[a])+";";else for(var o in e){var i=e[o];if(typeof i!="object"){var f=i;Fn(f)&&(t+=Os(o)+":"+Sn(o,f)+";")}else{if(o==="NO_COMPONENT_SELECTOR"&&Xe)throw new Error(nt);if(Array.isArray(i)&&typeof i[0]=="string"&&n==null)for(var d=0;d<i.length;d++)Fn(i[d])&&(t+=Os(o)+":"+Sn(o,i[d])+";");else{var y=hs(s,n,i);switch(o){case"animation":case"animationName":{t+=Os(o)+":"+y+";";break}default:t+=o+"{"+y+"}"}}}}return t}var kn=/label:\s*([^\s;{]+)\s*(;|$)/g,Y;function Zs(s,n,e){if(s.length===1&&typeof s[0]=="object"&&s[0]!==null&&s[0].styles!==void 0)return s[0];var t=!0,a="";Y=void 0;var o=s[0];if(o==null||o.raw===void 0)t=!1,a+=hs(e,n,o);else{var i=o;a+=i[0]}for(var f=1;f<s.length;f++)if(a+=hs(e,n,s[f]),t){var d=o;a+=d[f]}kn.lastIndex=0;for(var y="",g;(g=kn.exec(a))!==null;)y+="-"+g[1];var w=Ke(a)+y;return{name:w,styles:a,next:Y}}var tt=function(n){return n()},Gn=gn.useInsertionEffect?gn.useInsertionEffect:!1,at=Gn||tt,xn=Gn||m.useLayoutEffect,rt=!1,Vn=m.createContext(typeof HTMLElement<"u"?Ge({key:"css"}):null);Vn.Provider;var Hn=function(n){return m.forwardRef(function(e,t){var a=m.useContext(Vn);return n(e,a,t)})},Un=m.createContext({}),ms={}.hasOwnProperty,Hs="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",sn=function(n,e){var t={};for(var a in e)ms.call(e,a)&&(t[a]=e[a]);return t[Hs]=n,t},ot=function(n){var e=n.cache,t=n.serialized,a=n.isStringTag;return Wn(e,t,a),at(function(){return Bn(e,t,a)}),null},lt=Hn(function(s,n,e){var t=s.css;typeof t=="string"&&n.registered[t]!==void 0&&(t=n.registered[t]);var a=s[Hs],o=[t],i="";typeof s.className=="string"?i=Je(n.registered,o,s.className):s.className!=null&&(i=s.className+" ");var f=Zs(o,void 0,m.useContext(Un));i+=n.key+"-"+f.name;var d={};for(var y in s)ms.call(s,y)&&y!=="css"&&y!==Hs&&!rt&&(d[y]=s[y]);return d.className=i,e&&(d.ref=e),m.createElement(m.Fragment,null,m.createElement(ot,{cache:n,serialized:f,isStringTag:typeof a=="string"}),m.createElement(a,d))}),nn=lt,en=us.Fragment,u=function(n,e,t){return ms.call(e,"css")?us.jsx(nn,sn(n,e),t):us.jsx(n,e,t)},W=function(n,e,t){return ms.call(e,"css")?us.jsxs(nn,sn(n,e),t):us.jsxs(n,e,t)},_n=function(n,e){var t=arguments;if(e==null||!ms.call(e,"css"))return m.createElement.apply(void 0,t);var a=t.length,o=new Array(a);o[0]=nn,o[1]=sn(n,e);for(var i=2;i<a;i++)o[i]=t[i];return m.createElement.apply(null,o)};(function(s){var n;n||(n=s.JSX||(s.JSX={}))})(_n||(_n={}));var it=Hn(function(s,n){var e=s.styles,t=Zs([e],void 0,m.useContext(Un)),a=m.useRef();return xn(function(){var o=n.key+"-global",i=new n.sheet.constructor({key:o,nonce:n.sheet.nonce,container:n.sheet.container,speedy:n.sheet.isSpeedy}),f=!1,d=document.querySelector('style[data-emotion="'+o+" "+t.name+'"]');return n.sheet.tags.length&&(i.before=n.sheet.tags[0]),d!==null&&(f=!0,d.setAttribute("data-emotion",o),i.hydrate([d])),a.current=[i,f],function(){i.flush()}},[n]),xn(function(){var o=a.current,i=o[0],f=o[1];if(f){o[1]=!1;return}if(t.next!==void 0&&Bn(n,t.next,!0),i.tags.length){var d=i.tags[i.tags.length-1].nextElementSibling;i.before=d,i.flush()}n.insert("",t,i,!1)},[n,t.name]),null});function p(){for(var s=arguments.length,n=new Array(s),e=0;e<s;e++)n[e]=arguments[e];return Zs(n)}const ys={xs:0,sm:600,md:900,lg:1200,xl:1536},h={white:"#ffffff",white87:"rgba(255, 255, 255, .87)",white60:"rgba(255, 255, 255, .60)",white33:"rgba(255, 255, 255, .33)",black:"#000000",black60:"rgba(0, 0, 0, .60)",black12:"rgba(0, 0, 0, .12)",primary:"#ff6b6b",primary08:"rgba(255, 107, 107, .08)",lightGray:"#f5f5f5",lightGray87:"rgba(245, 245, 245, .87)",lightGray60:"rgba(245, 245, 245, .60)",dark:"#222222",dark87:"rgba(34, 34, 34, .87)",dark60:"rgba(34, 34, 34, .60)",dark33:"rgba(34, 34, 34, .33)",dark12:"rgba(34, 34, 34, .12)"},ct=p({margin:"0 auto",maxWidth:ys.lg,width:"100%"});function xs(s){return u("div",{css:ct,...s})}const pt=s=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",...s},m.createElement("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})),ut=s=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",fill:"currentColor",...s},m.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),ft=s=>m.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",...s},m.createElement("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"}));function Ns(s,n){return s!=null?n(s):void 0}function dt(s,n){return s?n(s):void 0}function Da(s){return`@media (min-width: ${ys[s]}px)`}function rs(s,n){return`${n}px ${s}px`}function ht(s){return rs(s,0)}function gt(s){return rs(0,s)}function tn(s,n,e,t){return`${e}px ${n}px ${t}px ${s}px`}function za(s,n,e){return tn(s,n,e,e)}function Rs(s,n="active"){return{"@media (hover: hover) and (pointer: fine)":{"&:hover":s},...dt(n==="active",()=>({"&:active":s}))}}function mt(s){if(s.startsWith("#"))return[parseInt(s.substring(1,3),16),parseInt(s.substring(3,5),16),parseInt(s.substring(5,7),16),1];if(s.startsWith("rgb")){const n=s.startsWith("rgba")?5:4,e=s.substring(n,s.length-1).split(",").map(t=>parseInt(t));return[e[0],e[1],e[2],e[3]??1]}throw new Error("unsupported format")}const Ls={self:p({width:40,height:40,padding:8,borderRadius:"50%"}),color:s=>{const[n,e,t]=mt(s?h[s]:h.dark);return p({color:s?h[s]:"inherit"},Rs({backgroundColor:`rgba(${n}, ${e}, ${t}, .12)`}))},icon:p({width:"100%",height:"100%"})};function yt(s){const{Icon:n,color:e,...t}=s;return u("button",{...t,css:[Ls.self,Ls.color(e)],children:u(n,{css:Ls.icon})})}const Z={self:p({color:h.white,textAlign:"center"}),getInTouch:p({display:"flex",flexDirection:"column",alignItems:"center",padding:tn(20,20,120,80)}),title:p({fontSize:"2.5em"}),contacts:p({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:24,marginTop:32,padding:ht(16),width:"100%"}),contact:p({flex:1,maxWidth:80,height:"100%",aspectRatio:1},Rs({transform:"scale(1.2)"})),divider:p({borderColor:h.white33}),copyright:p({padding:24,color:h.white60})};function wt(s){const{contacts:n}=s,e=[{Icon:pt,label:"이메일",url:`mailto: ${n.email}`,target:"_self"},{Icon:ut,label:"깃헙",url:n.github,target:"_blank"},{Icon:ft,label:"링크드인",url:n.linkedin,target:"_blank"}];return W("footer",{css:Z.self,children:[W("div",{css:Z.getInTouch,children:[u("h2",{css:Z.title,children:"Get In Touch"}),u("div",{css:Z.contacts,children:e.map(t=>u(yt,{css:Z.contact,"aria-label":t.label,Icon:t.Icon,onClick:()=>window.open(t.url,t.target)},t.url))})]}),u("hr",{css:Z.divider}),u("p",{css:Z.copyright,children:"© 2025 Seunghoon Jung"})]})}function jt(s){const[n,e]=m.useState(window.matchMedia(s).matches);return m.useEffect(()=>{const t=window.matchMedia(s),a=o=>e(o.matches);return t.addEventListener("change",a),()=>t.removeEventListener("change",a)},[s]),n}const Ds=(s,n)=>[`${n?90:60} 207`,`${n?0:60} 60`,`${n?90:60} 207`][s],zs=(s,n)=>n?[-134,-30,-134][s]:0,bt={self:p({"svg > path":{transition:`
        stroke-dasharray .5s cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset .5s cubic-bezier(0.4, 0, 0.2, 1)
      `}})};function vt(s){const{className:n,open:e,onClick:t}=s;return u("button",{css:bt.self,className:n,"aria-label":e?"메뉴 닫기":"메뉴 열기",onClick:t,children:W("svg",{viewBox:"0 0 100 100",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:6,children:[u("path",{d:"M 20,29 H 80 C 80,29 94.5,28.8 94.5,66.7 94.5,78 91,81.7 85.3,81.7 79.5,81.7 75,75 75,75 L 25,25",strokeDasharray:Ds(0,e),strokeDashoffset:zs(0,e)}),u("path",{d:"M 20,50 H 80",strokeDasharray:Ds(1,e),strokeDashoffset:zs(1,e)}),u("path",{d:"M 20,71 H 80 C 80,71 94.5,71.2 94.5,33.3 94.5,22 91,18.3 85.3,18.3 79.5,18.3 75,25 75,25 L 25,75",strokeDasharray:Ds(2,e),strokeDashoffset:zs(2,e)})]})})}const an={base:p({fontSize:"1em",fontWeight:700,button:Rs({backgroundColor:h.primary08,color:h.primary})}),bar:p({ul:{display:"flex",flexDirection:"row",justifyContent:"center",gap:16},button:{padding:rs(16,12),textAlign:"center",borderRadius:8}}),collapsible:p({overflow:"hidden",transition:"height 0.25s",ul:{display:"flex",flexDirection:"column",paddingBottom:12},button:{padding:rs(24,12),textAlign:"start",width:"100%"}})},Yn=m.createContext({menus:[],onMenuClick:()=>{}}),ps=s=>{const{menus:n,children:e,onMenuClick:t}=s;return u(Yn.Provider,{value:{menus:n,onMenuClick:t},children:e})};function Jn({className:s,ref:n}){const{menus:e,onMenuClick:t}=m.useContext(Yn);return u("nav",{className:s,css:an.base,children:u("ul",{ref:n,children:e.map(a=>u("li",{children:u("button",{onClick:()=>t(a),children:a.name})},a.id))})})}ps.Bar=function(){return u(Jn,{css:an.bar})};ps.Collapsible=function({open:n}){var a;const e=m.useRef(null),t=n?(a=e.current)==null?void 0:a.clientHeight:0;return u(Jn,{ref:e,css:[an.collapsible,p({height:t})]})};const ns={self:p({position:"fixed",top:0,left:0,right:0,zIndex:100,transition:"all .2s"}),light:p({color:h.dark87,background:`linear-gradient(180deg, ${h.lightGray} 0, ${h.lightGray87} 100%)`,backdropFilter:"blur(6px)",boxShadow:`0 0px 8px ${h.dark12}`}),dark:p({backgroundColor:h.dark60,color:h.white}),inner:p({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:rs(20,10),paddingTop:"calc(10px + env(safe-area-inset-top))"}),logo:p({fontSize:"1.2em",fontWeight:700,lineHeight:"40px"}),menuButton:p({width:40,height:40,padding:4})};function Ft({menus:s}){const[n,e]=m.useState(!1),[t,a]=m.useState(!1),o=jt(`(min-width: ${ys.md}px)`),i=m.useRef(null),f=m.useRef(null);m.useEffect(()=>{const g=()=>{e(window.scrollY>200)};return window.addEventListener("scroll",g),()=>window.removeEventListener("scroll",g)},[]),m.useEffect(()=>{const g=w=>{var M;(M=i.current)!=null&&M.contains(w.target)||a(!1)};return window.addEventListener("click",g),()=>window.removeEventListener("click",g)},[]);const d=()=>{window.scrollTo({top:0,behavior:"smooth"})},y=g=>{var M;const w=document.getElementById(g.id);if(w){const N=((M=f.current)==null?void 0:M.getBoundingClientRect().height)??0;window.scrollBy({top:w.getBoundingClientRect().top-N,behavior:"smooth"})}a(!1)};return u("header",{ref:i,css:[ns.self,n?ns.light:ns.dark],children:u(ps,{menus:s,onMenuClick:y,children:W(xs,{children:[W("div",{ref:f,css:ns.inner,children:[u("button",{css:ns.logo,onClick:d,children:"PEDSFOLIO"}),o===!0&&u(ps.Bar,{}),o===!1&&u(vt,{css:ns.menuButton,open:t,onClick:()=>a(g=>!g)})]}),o===!1&&u(ps.Collapsible,{open:t})]})})})}const Kn={self:p({display:"flex",flexDirection:"column",padding:"48px 24px"}),title:p({fontSize:"2em",fontWeight:700,padding:gt(16),marginBottom:16})},Us=s=>u("section",{css:Kn.self,...s});Us.Title=s=>u("h2",{css:Kn.title,...s});var Ss=function(s){return s.skills="skills",s.careers="careers",s.projects="projects",s}(Ss||{}),A=function(s){return s.ts="TypeScript",s.dart="Dart",s.react="React",s.next="Next.js",s.gatsby="Gatsby",s.rn="React Native",s.flutter="Flutter",s.tailwind="TailwindCSS",s.emotion="Emotion",s.mui="Material UI",s.tQuery="TanStack Query",s.mobx="MobX",s.jotai="Jotai",s.bloc="BloC",s.graphql="GraphQL",s.protobuf="Protocol Buffer",s.firebase="Firebase",s.aws="AWS",s.fastlane="Fastlane",s.gradle="Gradle",s.gerrit="Gerrit",s}(A||{});const Cn={list:p({display:"flex",flexDirection:"row",flexWrap:"wrap",gap:12}),item:p({padding:rs(12,4),borderRadius:8,fontWeight:700})},En={base:p({border:`1px solid ${h.dark12}`,color:h.dark87}),[A.ts]:p({backgroundColor:"#3178c6",color:h.white}),[A.dart]:p({backgroundColor:"#fa7343",color:h.dark}),[A.react]:p({backgroundColor:"#61dafb",color:h.dark87}),[A.next]:p({backgroundColor:h.black,color:h.white}),[A.gatsby]:p({backgroundColor:"#663399",color:h.white}),[A.rn]:p({backgroundColor:"#61dafb",color:h.dark87}),[A.flutter]:p({backgroundColor:"#02569b",color:h.white}),[A.firebase]:p({backgroundColor:"#ffca28",color:h.dark}),[A.aws]:p({backgroundColor:"#ff9900",color:h.dark}),[A.fastlane]:p({backgroundColor:"#00f2ea",color:h.dark}),[A.gradle]:p({backgroundColor:"#02303a",color:h.white}),[A.gerrit]:p({backgroundColor:"#aaffaa",color:h.dark87}),[A.tQuery]:p({backgroundColor:"#ff4154",color:h.white}),[A.tailwind]:p({backgroundColor:"#38b2ac",color:h.white}),[A.emotion]:p({backgroundColor:"#c43bad",color:h.white}),[A.graphql]:p({backgroundColor:"#e10098",color:h.white})};function Qn(s){const{className:n,skills:e}=s;return u("ul",{className:n,css:Cn.list,children:e.map(t=>u("li",{css:[Cn.item,En[t]??En.base],children:t},t))})}const Ws={card:p({display:"flex",flexDirection:"column",rowGap:32,padding:32,backgroundColor:h.white,borderRadius:24,boxShadow:`0 0 16px 0 ${h.black12}`}),row:p({display:"flex",flexDirection:"column",gap:12,[`@media (min-width: ${ys.sm}px)`]:{flexDirection:"row"}}),rowTitle:p({flexShrink:0,minWidth:160,fontSize:"1.2em",fontWeight:700})};function St(s){const{skills:n}=s;return u("div",{css:Ws.card,children:Object.keys(n).map(e=>W("div",{css:Ws.row,children:[u("span",{css:Ws.rowTitle,children:e}),u(Qn,{skills:n[e]})]},e))})}function Rn(s){return`${s.getFullYear()}년 ${s.getMonth()+1}월`}function Xn(s,n){return`${Rn(s)} ~ ${n?Rn(n):"현재"}`}function kt(s,n){if(n=n??new Date,s>n)throw new Error("startAt cannot be bigger than endAt");let e=n.getFullYear()-s.getFullYear(),t=n.getMonth()-s.getMonth()+1;return e?t?(t<0&&(e-=1,t+=12),`${e}년 ${t}개월`):`${e}년`:`${t}개월`}const Bs=12,cs=15,Pn=4,Zn=4,Ys=3,Tn=(cs-Ys)/2+Zn,K={list:p({marginTop:-Bs}),header:p({display:"flex",flexDirection:"row",alignItems:"center",position:"relative",fontSize:"1.8em",fontWeight:700,paddingTop:Bs,paddingBottom:24,"&:after":{content:'""',position:"absolute",bottom:0,left:Tn,width:Ys,backgroundColor:h.dark12,height:24-Bs}}),item:p({position:"relative",paddingLeft:40}),period:p({fontSize:"0.9em",fontWeight:700,color:h.black60,marginBottom:4}),content:p({paddingBottom:40,color:h.dark87}),title:p({fontSize:"1.5em",fontWeight:700,marginBottom:8}),description:p({fontSize:"1.1em",whiteSpace:"break-spaces"}),marker:p({position:"absolute",top:0,bottom:0,left:0,width:cs,"&:before":{content:'""',width:cs,height:cs,borderRadius:"100%",backgroundColor:h.primary,position:"absolute",top:Pn,left:Zn},"&:after":{content:'""',width:Ys,backgroundColor:h.dark12,position:"absolute",top:cs+Pn*2,left:Tn,bottom:0}}),noTail:p({"&:after":{content:"none"}})};function xt(s){const{career:n,noTail:e}=s;return W(en,{children:[u("li",{css:K.header,children:n.company.name}),...n.positions.map((t,a)=>W("li",{css:K.item,children:[W("div",{css:K.period,children:[Xn(t.startAt,t.endAt)," ·"," ",kt(t.startAt,t.endAt)]}),W("div",{css:K.content,children:[W("div",{css:K.title,children:[t.title,", ",t.employmentType]}),u("div",{css:K.description,children:t.performances.map(o=>`- ${o}`).join(`
`)})]}),u("div",{css:[K.marker,e&&a===n.positions.length-1&&K.noTail]})]},a))]})}function _t(s){const{careers:n}=s;return u("ul",{css:K.list,children:n.map((e,t)=>u(xt,{career:e,noTail:t===n.length-1},e.company.name))})}const Ct="/portfolio/assets/background-C32ofXj_.png",Et=m.lazy(()=>Js(()=>import("./Typewriter-3bjf4YMX.js"),[])),qs={self:p({position:"relative",minHeight:"min(720px, 100vh)",color:h.white,background:`radial-gradient(circle, ${h.dark87} 0, ${h.dark} 100%), url(${Ct}) 50% no-repeat`,backgroundSize:"cover","@supports (min-height: 100svh)":{minHeight:"min(720px, 100svh)"},"&::before":{content:'""',position:"absolute",inset:0,isolation:"isolate",backdropFilter:"grayscale(100%)"}}),container:p({position:"absolute",inset:0,paddingTop:"calc(80px + env(safe-area-inset-top))",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),typewriter:p({fontSize:"clamp(3rem, 8vw, 5rem)",fontWeight:700,textAlign:"center",whiteSpace:"break-spaces",wordBreak:"keep-all",margin:tn(20,20,40,120),"& .Typewriter__cursor":{fontSize:"1.2em",lineHeight:1}})};function Rt(s){const{name:n,aka:e}=s;return u("div",{css:qs.self,children:u(xs,{css:qs.container,children:u("div",{css:qs.typewriter,children:u(m.Suspense,{children:u(Et,{name:n,aka:e})})})})})}function Pt(s){const{className:n,alt:e}=s,t=s.image[s.image.length-1];return u("img",{className:n,loading:t.loading,srcSet:t.srcset,src:t.src,alt:e})}const Tt=m.lazy(()=>Js(()=>import("./ProjectDetailModal-DJM-KY3H.js"),__vite__mapDeps([0,1,2]))),At=32,$t=2,X={list:p({display:"flex",flexDirection:"row",flexWrap:"wrap",gap:32}),item:p({display:"flex",flexDirection:"column",alignItems:"stretch",backgroundColor:h.white,color:h.dark87,fontSize:"1em",textAlign:"left",width:"100%",borderRadius:16,overflow:"hidden",transition:"transform .1s",boxShadow:`0 0 16px 0 ${h.black12}`,[`@media (min-width: ${ys.sm}px)`]:{width:`calc((100% - ${At}px) / ${$t})`}},Rs({transform:"scale(1.05)"},"none")),image:p({objectFit:"cover",aspectRatio:16/9,width:"100%"}),content:p({flex:1,display:"flex",flexDirection:"column",padding:24}),period:p({fontSize:"0.8em",fontWeight:700,color:h.black60,marginBottom:4}),title:p({fontSize:"1.2em",fontWeight:700,marginBottom:12}),description:p({flex:1,marginBottom:24}),techStack:p({marginTop:24,fontSize:16,lineHeight:"20px",gap:8,height:34,overflow:"hidden"})};function It(s){const{project:n,onClick:e}=s;return W("button",{css:X.item,onClick:e,children:[u(Pt,{css:X.image,image:n.image,alt:n.name}),W("div",{css:X.content,children:[u("div",{css:X.period,children:Xn(n.startAt,n.endAt)}),u("div",{css:X.title,children:n.name}),u("div",{css:X.description,children:n.description}),u("hr",{}),u(Qn,{css:X.techStack,skills:n.techStack})]})]})}function Mt(s){const{projects:n,onProjectClick:e}=s;return m.useMemo(()=>u(en,{children:n.map((t,a)=>u(It,{project:t,onClick:()=>e(a)},t.name))}),[n,e])}function Ot(s){const{projects:n}=s,[e,t]=m.useState();return W("div",{css:X.list,children:[u(Mt,{projects:n,onProjectClick:t}),u(m.Suspense,{children:u(Tt,{project:Ns(e,a=>n[a]),next:Ns(e,a=>n[a+1]),prev:Ns(e,a=>n[a-1]),onNextClick:()=>t(a=>(a??0)+1),onPrevClick:()=>t(a=>(a??0)-1),onClose:()=>t(void 0)},e)})]})}const Nt=[{type:"image/png",srcset:"/portfolio/assets/altong-1.321f0002.png 320w, /portfolio/assets/altong-1.7649d0b3.png 640w, /portfolio/assets/altong-1.45787beb.png 960w",loading:"lazy",src:"/portfolio/assets/altong-1.45787beb.png"}],Lt=[{type:"image/png",srcset:"/portfolio/assets/altong-2.fd528480.png 320w, /portfolio/assets/altong-2.045975bb.png 640w, /portfolio/assets/altong-2.a79d295b.png 960w",loading:"lazy",src:"/portfolio/assets/altong-2.a79d295b.png"}],Dt=[{type:"image/png",srcset:"/portfolio/assets/altong-3.6b49c007.png 320w, /portfolio/assets/altong-3.b68b444e.png 640w, /portfolio/assets/altong-3.a9875eae.png 960w",loading:"lazy",src:"/portfolio/assets/altong-3.a9875eae.png"}],zt=[{type:"image/png",srcset:"/portfolio/assets/altong-4.264806e9.png 320w, /portfolio/assets/altong-4.f74081bc.png 640w, /portfolio/assets/altong-4.412e34d1.png 960w",loading:"lazy",src:"/portfolio/assets/altong-4.412e34d1.png"}],Wt=[{type:"image/png",srcset:"/portfolio/assets/altong-5.a358e4c0.png 320w, /portfolio/assets/altong-5.5e9f8cbd.png 640w, /portfolio/assets/altong-5.cf140d0a.png 960w",loading:"lazy",src:"/portfolio/assets/altong-5.cf140d0a.png"}],Bt=[{type:"image/png",srcset:"/portfolio/assets/beliefy-1.ef8c892e.png 320w, /portfolio/assets/beliefy-1.0682a8e1.png 640w, /portfolio/assets/beliefy-1.8f5e546f.png 960w",loading:"lazy",src:"/portfolio/assets/beliefy-1.8f5e546f.png"}],qt=[{type:"image/png",srcset:"/portfolio/assets/beliefy-2.a0dd8de3.png 320w, /portfolio/assets/beliefy-2.3fa46a17.png 640w, /portfolio/assets/beliefy-2.3b823086.png 960w",loading:"lazy",src:"/portfolio/assets/beliefy-2.3b823086.png"}],Gt=[{type:"image/png",srcset:"/portfolio/assets/beliefy-3.bd3ecc31.png 320w, /portfolio/assets/beliefy-3.0ee3ffae.png 640w, /portfolio/assets/beliefy-3.69d5abcb.png 960w",loading:"lazy",src:"/portfolio/assets/beliefy-3.69d5abcb.png"}],Vt=[{type:"image/png",srcset:"/portfolio/assets/beliefy-4.c6c19150.png 320w, /portfolio/assets/beliefy-4.3f71dc48.png 640w, /portfolio/assets/beliefy-4.f98dbb50.png 960w",loading:"lazy",src:"/portfolio/assets/beliefy-4.f98dbb50.png"}],Ht=[{type:"image/png",srcset:"/portfolio/assets/playwings-web-1.fe473a43.png 320w, /portfolio/assets/playwings-web-1.bf30f061.png 640w, /portfolio/assets/playwings-web-1.99f97e99.png 960w",loading:"lazy",src:"/portfolio/assets/playwings-web-1.99f97e99.png"}],Ut=[{type:"image/png",srcset:"/portfolio/assets/playwings-web-2.f4a2fdab.png 320w, /portfolio/assets/playwings-web-2.44c310cc.png 640w, /portfolio/assets/playwings-web-2.45b781b4.png 960w",loading:"lazy",src:"/portfolio/assets/playwings-web-2.45b781b4.png"}],Yt=[{type:"image/png",srcset:"/portfolio/assets/playwings-web-3.44072600.png 320w, /portfolio/assets/playwings-web-3.5911e85e.png 640w, /portfolio/assets/playwings-web-3.507b913a.png 960w",loading:"lazy",src:"/portfolio/assets/playwings-web-3.507b913a.png"}],Jt=[{type:"image/png",srcset:"/portfolio/assets/playwings-web-4.654f49f7.png 320w, /portfolio/assets/playwings-web-4.90379801.png 640w, /portfolio/assets/playwings-web-4.703e0c28.png 960w",loading:"lazy",src:"/portfolio/assets/playwings-web-4.703e0c28.png"}],Kt=[{type:"image/png",srcset:"/portfolio/assets/playwings-web-5.3260e77d.png 320w, /portfolio/assets/playwings-web-5.85fd7f55.png 640w, /portfolio/assets/playwings-web-5.209bcd24.png 960w",loading:"lazy",src:"/portfolio/assets/playwings-web-5.209bcd24.png"}],Qt=[{type:"image/png",srcset:"/portfolio/assets/playwings-web-6.e1fec0a5.png 320w, /portfolio/assets/playwings-web-6.21ab6220.png 640w, /portfolio/assets/playwings-web-6.41ad0499.png 960w",loading:"lazy",src:"/portfolio/assets/playwings-web-6.41ad0499.png"}],Xt=[{type:"image/png",srcset:"/portfolio/assets/playwings-web-7.f0fcc6bb.png 320w, /portfolio/assets/playwings-web-7.a7aa6c39.png 640w, /portfolio/assets/playwings-web-7.3523e3f9.png 960w",loading:"lazy",src:"/portfolio/assets/playwings-web-7.3523e3f9.png"}],Zt=[{type:"image/png",srcset:"/portfolio/assets/playwings-web-8.c6bb7beb.png 320w, /portfolio/assets/playwings-web-8.35a1c469.png 640w, /portfolio/assets/playwings-web-8.2be36c2e.png 960w",loading:"lazy",src:"/portfolio/assets/playwings-web-8.2be36c2e.png"}],sa=[{type:"image/png",srcset:"/portfolio/assets/proofy-1.e7393383.png 320w, /portfolio/assets/proofy-1.2437d38a.png 640w, /portfolio/assets/proofy-1.d6afc273.png 960w",loading:"lazy",src:"/portfolio/assets/proofy-1.d6afc273.png"}],na=[{type:"image/png",srcset:"/portfolio/assets/proofy-2.b795b0f9.png 320w, /portfolio/assets/proofy-2.3641b57e.png 640w, /portfolio/assets/proofy-2.0da54588.png 960w",loading:"lazy",src:"/portfolio/assets/proofy-2.0da54588.png"}],ea=[{type:"image/png",srcset:"/portfolio/assets/proofy-3.21bd63fb.png 320w, /portfolio/assets/proofy-3.06e69ffa.png 640w, /portfolio/assets/proofy-3.932b5644.png 960w",loading:"lazy",src:"/portfolio/assets/proofy-3.932b5644.png"}],ta=[{type:"image/png",srcset:"/portfolio/assets/proofy-4.ab0047d4.png 320w, /portfolio/assets/proofy-4.10443234.png 640w, /portfolio/assets/proofy-4.3368be50.png 960w",loading:"lazy",src:"/portfolio/assets/proofy-4.3368be50.png"}],aa={altong:[{image:Nt,alt:"홈 화면"},{image:Lt,alt:"요금제 검색"},{image:Dt,alt:"요금제 상세"},{image:zt,alt:"(모바일) 홈 & 요금제 검색"},{image:Wt,alt:"(모바일) 검색 필터 & 요금제 상세"}],beliefy:[{image:Bt,alt:"빌리픽"},{image:qt,alt:"호감"},{image:Gt,alt:"프로필 상세"},{image:Vt,alt:"매칭 성공"}],proofy:[{image:sa,alt:"홈 화면 & KYC"},{image:na,alt:"KYC"},{image:ea,alt:"지갑 추가 & 히스토리"},{image:ta,alt:"연봉 순위 조회 & 공유"}],playwingsWeb:[{image:Ht,alt:"홈"},{image:Ut,alt:"특가 상품"},{image:Yt,alt:"호텔 검색"},{image:Jt,alt:"호텔 상세"},{image:Kt,alt:"(모바일) 홈 & 특가 상세"},{image:Qt,alt:"(모바일) 특가 상세"},{image:Xt,alt:"(모바일) 호텔 검색"},{image:Zt,alt:"(모바일) 호텔 상세"}]},ra=[{type:"image/png",srcset:"/portfolio/assets/altong.6aa22592.png 320w, /portfolio/assets/altong.cbf96a36.png 640w, /portfolio/assets/altong.4f63401a.png 960w",loading:"lazy",src:"/portfolio/assets/altong.4f63401a.png"}],oa=[{type:"image/png",srcset:"/portfolio/assets/beliefy.8398e3f0.png 320w, /portfolio/assets/beliefy.fb7e35b3.png 640w, /portfolio/assets/beliefy.a042995e.png 960w",loading:"lazy",src:"/portfolio/assets/beliefy.a042995e.png"}],la=[{type:"image/png",srcset:"/portfolio/assets/playwings-renewal.212f0c11.png 320w, /portfolio/assets/playwings-renewal.1d988c6b.png 640w, /portfolio/assets/playwings-renewal.27b766d9.png 960w",loading:"lazy",src:"/portfolio/assets/playwings-renewal.27b766d9.png"}],ia=[{type:"image/png",srcset:"/portfolio/assets/playwings-web.a0257953.png 320w, /portfolio/assets/playwings-web.f4d9cd8c.png 640w, /portfolio/assets/playwings-web.92fd2763.png 960w",loading:"lazy",src:"/portfolio/assets/playwings-web.92fd2763.png"}],ca=[{type:"image/png",srcset:"/portfolio/assets/proofy.f6c087b3.png 320w, /portfolio/assets/proofy.245c3732.png 640w, /portfolio/assets/proofy.a3f1df4d.png 960w",loading:"lazy",src:"/portfolio/assets/proofy.a3f1df4d.png"}],pa=[{type:"image/png",srcset:"/portfolio/assets/background.6b5d19e2.png 320w, /portfolio/assets/background.c77505d4.png 640w, /portfolio/assets/background.d84f0b8d.png 960w",loading:"lazy",src:"/portfolio/assets/background.d84f0b8d.png"}],ua=Object.freeze(Object.defineProperty({__proto__:null,altong:ra,beliefy:oa,pedsfolio:pa,playwingsRenewal:la,playwingsWeb:ia,proofy:ca},Symbol.toStringTag,{value:"Module"})),fa={name:"알통(Altong)",description:"알뜰폰 요금제 비교 웹사이트",startAt:"2023-09",endAt:"2023-10",techStack:["TypeScript","Next.js","Material UI","TailwindCSS"]},da=`<h1>알통(Altong)</h1>
<p>알뜰폰 요금제 비교 서비스 '알통' 웹사이트를 개발한 프로젝트입니다. 홈, 요금제 리스트, 요금제 상세, 이용팁으로 구성되어 있습니다.</p>
<h2>Overview</h2>
<ul>
<li><strong>Period</strong>: 2023. 09. ~ 2023. 10.</li>
<li><strong>Members</strong>: 프론트엔드 개발자 2명, 백엔드 개발자 2명</li>
<li><strong>Role</strong>: 프론트엔드 개발</li>
<li><strong>TechStack</strong>:
<ul>
<li>TypeScript</li>
<li>Next.js</li>
<li>Material UI (Headless UI)</li>
<li>TailwindCSS</li>
<li>Docker</li>
</ul>
</li>
</ul>
<h2>Contributions</h2>
<ul>
<li>JS 번들 사이즈 최적화를 위한 App Router, RSC 도입</li>
<li>개발 일정 단축과 디자인 요구 사항을 동시에 충족하기 위한 오픈소스 Headless UI 도입</li>
<li>요금제 검색을 제외한 앱 내 주요 기능 및 페이지 개발</li>
</ul>
<h2>Significance</h2>
<p>처음 Next.js로 진행한 프로젝트입니다. 이전 회사에서 SSG 기반 웹사이트를 운영했을 때, JS 번들이 계속 커지면서 모바일 브라우저 환경에서 TTI(Time to Interactive)가 증가하는 문제가 발생했던 경험이 있었습니다. 이러한 문제를 해결하기 위해 이번 프로젝트에서는 번들 크기 최적화를 목표로 React 18에서 도입된 서버 컴포넌트를 사용했고, 서버 컴포넌트 도입을 위해 Next.js의 App Router 방식을 채택했습니다.</p>
<p>비록 회사 사정으로 인해 최종 출시에는 이르지 못했지만, Next.js와 서버 컴포넌트를 활용한 실험적인 접근을 시도할 수 있었던 의미 있는 프로젝트였습니다.</p>
`,ha=Object.freeze(Object.defineProperty({__proto__:null,attributes:fa,html:da},Symbol.toStringTag,{value:"Module"})),ga={name:"빌리피(Beliefy)",description:"인증 기반 데이팅 앱",startAt:"2023-10",endAt:"2024-11",techStack:["Dart","Flutter","BloC"]},ma=`<h1>빌리피(Beliefy)</h1>
<p>인증 기반 데이팅 서비스, 빌리피의 모바일 어플리케이션을 개발한 프로젝트입니다. 프로필 심사, 이성 추천 및 매칭, 채팅, 인증 등의 기능을 포함하고 있습니다.</p>
<h2>Overview</h2>
<ul>
<li><strong>Period</strong>: 2023. 10. ~ 2024. 11.</li>
<li><strong>Members</strong>: 프론트엔드 1명, 풀스택 2명, 백엔드 2명</li>
<li><strong>Role</strong>: 프론트엔드 개발</li>
<li><strong>TechStack</strong>:
<ul>
<li>Dart</li>
<li>Flutter</li>
<li>BloC</li>
<li>Firebase</li>
<li>Fastlane</li>
<li>Github Workflow</li>
</ul>
</li>
</ul>
<h2>Contributions</h2>
<ul>
<li>BLoC 패턴을 활용한 앱 내 주요 기능 및 화면 개발</li>
<li>라이브러리 업데이트 및 기술 스택 최신화</li>
<li>Fastlane, Github Workflow를 활용한 배포 관리</li>
</ul>
<h2>Significance</h2>
<p>처음으로 플러터로 개발한 프로젝트입니다. 프로젝트를 진행하면서 플러터와 React Native의 차이점과 각 프레임워크의 장단점을 직접 체감할 수 있었습니다.</p>
<p>또한, BloC 패턴을 활용하면서 Flutter 생태계에서의 상태 관리 방식을 경험할 수 있었습니다. 그리고 프레젠테이션 레이어와 비즈니스 로직을 명확히 분리하는 BloC 패턴의 구조적 이점 덕분에 유지보수성과 코드의 가독성을 높일 수 있음을 느꼈습니다.</p>
`,ya=Object.freeze(Object.defineProperty({__proto__:null,attributes:ga,html:ma},Symbol.toStringTag,{value:"Module"})),wa={name:"페즈폴리오(PEDSFOLIO)",description:"SPA 기반 개인 포트폴리오 사이트",startAt:"2024-12",techStack:["TypeScript","React","Emotion","Vite","SWC"]},ja=`<h1>페즈폴리오(PEDSFOLIO)</h1>
<p>SPA 기반 개인 포트폴리오 사이트입니다.</p>
<p>Repository: <a href="https://github.com/devpeds/portfolio" target="_blank" rel="noopener noreferrer">https://github.com/devpeds/portfolio</a></p>
<h2>Overview</h2>
<ul>
<li><strong>Period</strong>: 2024. 12. ~ 현재</li>
<li><strong>Members</strong>: 1명</li>
<li><strong>TechStack</strong>:
<ul>
<li>TypeScript</li>
<li>React</li>
<li>Emotion</li>
<li>Vite</li>
<li>SWC</li>
</ul>
</li>
</ul>
<h2>Significance</h2>
<p>Vite, SWC를 처음 적용해본 CSR 프로젝트입니다. 여러 성능 최적화 기법을 적용했으며, 특히 폰트 최적화를 통해 웹폰트가 사이트 성능에 미치는 영향을 경험할 수 있었습니다.</p>
<h2>Challenges</h2>
<details open>
<summary>모바일 환경 성능 최적화</summary>
<p>첫 출시 당시 모바일 환경에서 Lighthouse 기준 LCP 점수가 0점 포함, 총 75점을 기록해 총 점수 90점 이상을 목표로 성능 개선 작업을 진행했습니다.</p>
<p><strong>시도 1. Pre-render</strong></p>
<p>일반적으로 CSR 기반 사이트는 SSR, SSG 기반 사이트와 비교해 LCP 성능이 좋지 않기 때문에, 성능 개선 작업시 가장 먼저 고려한 방법이 빌드시 미리 HTML을 생성하는 것이었습니다. 하지만 <code>react-snap</code>을 적용해 테스트해보니, LCP 점수는 약간 개선되었지만 FCP 등 다른 지표가 떨어지면서 전체 성능은 전과 큰 차이가 없었습니다. HTML 생성시 옵션 값을 변경해 성능을 더 개선할 수 있었겠지만 '<strong>CSR 기반이더라도 컨텐츠와 기능이 많지 않은 웹페이지의 LCP가 0점인 것이 이상하다</strong>'라는 근본적인 의문이 있었기 때문에 다른 방법을 찾아보았습니다.</p>
<p><strong>시도 2. 웹 폰트 최적화</strong></p>
<p>처음 폰트를 선택할 때, 폰트 파일 하나로 다양한 글꼴 굵기를 적용할 수 있도록 가변 폰트인 <code>NanumSquareNeo Variable</code>을 사용했습니다. 가변 폰트는 폰트 파일 하나로 다양한 글꼴 스타일을 적용할 수 있는 폰트입니다. 하지만 정적 폰트(Static font)보다 다양한 글꼴 스타일과 추가적인 메타데이터를 포함하고 있어 용량이 더 크다는 단점이 있습니다. 프로젝트에서 사용한 폰트 역시 <code>woff2</code> 기준으로도 <strong>1.5MB</strong>에 달했으며, 프리로드를 하더라도 LCP 지표에 악영향을 주는 문제가 있었습니다.</p>
<p>이를 해결하기 위해 사이트에서 사용하는 글자(Glyphs)만 추출한 <strong>서브셋 폰트</strong>를 적용했습니다. 처음에는 인터넷에서 많이 소개된 '서브셋 폰트 메이커'를 사용했으나 가변 폰트를 변환할 경우 폰트의 가변성이 사라지고 굵기가 400으로 고정되는 문제가 있어 파이쎤 라이브러리인 <code>fonttools</code>의 <code>pyftsubset</code>를 이용해 서브셋을 생성했습니다.</p>
<pre><code class="language-bash">pyftsubset <span class="hljs-string">&quot;NanumSquareNeo-variable-font.ttf&quot;</span>
  --output-file=<span class="hljs-string">&quot;NanumSquareNeo-variable-subset-font.woff2&quot;</span>
  --text-file=<span class="hljs-string">&quot;glyphs.txt&quot;</span>
  --flavor=woff2
</code></pre>
<p><code>glyphs.txt</code>는 한국 산업 규격으로 지정된 <a href="https://ko.wikipedia.org/wiki/KS_X_1001" target="_blank" rel="noopener noreferrer">한국어 문자 집합 KS X 1001 표준</a>에 영문, 숫자 등을 추가해 글자를 추출했습니다.</p>
<p>서브셋 폰트를 적용한 결과, 폰트 용량을 원본의 33% 수준인 500KB까지 줄일 수 있었고, LCP를 7점을 올려 총 점수 81점까지 성능을 향상 시겼습니다.</p>
<p>또한 다양한 글꼴 굵기를 적용하기 위해 가변 폰트를 사용했지만, 실제로는 세가지 굵기(<code>normal</code>, <code>bold</code>, <code>heavy</code>)만 사용하고 있어 정적 폰트로 대체하는 작업도 추가 진행했습니다. 처음에는 각 굵기에 대해 개별 폰트 파일을 생성했지만, 테스트 결과 가변 폰트를 사용했을 때와 성능이 거의 동일했습니다. 따라서 성능 최적화를 위해 <code>heavy</code> 폰트를 제거하고, 기존 <code>heavy</code>를 적용했던 텍스트는 <code>font-size</code>를 조정하는 방식으로 변경했습니다. 정적 폰트로 변경한 후 <strong>LCP가 7점에서 15점으로 증가해 총 91점까지 성능 향상</strong>을 할 수 있었습니다.</p>
<p>웹 성능 지표 향상 외에도 폰트 최적화 작업 이후 실제적인 사용자 경험도 개선되었습니다. 최적화 이전에는 오래된 모바일 기기의 브라우저에서 페이지를 빠르게 스크롤하면 컨텐츠가 사라졌다 다시 나타나는 현상이 있었는데(재현환경: 아이폰 12/iOS 16.5), 최적화 이후 해당 현상이 사라졌습니다. 정확한 이유를 찾지 못했지만, 가변 폰트가 고정 폰트로 변경되면서 브라우저가 텍스트를 렌더링하는 과정에서 연산 복잡도가 줄어들어 문제가 해결된 것으로 추정됩니다.</p>
</details>
`,ba=Object.freeze(Object.defineProperty({__proto__:null,attributes:wa,html:ja},Symbol.toStringTag,{value:"Module"})),va={name:"플레이윙즈 리뉴얼 프로젝트",description:"여행 특가 알림 서비스 플레이윙즈의 리뉴얼 프로젝트",startAt:"2020-02",endAt:"2022-03",techStack:["TypeScript","React Native","MobX","GraphQL"]},Fa=`<h1>플레이윙즈 리뉴얼 프로젝트</h1>
<p>항공권 특가 알림 서비스인 플레이윙즈의 시스템을 재구축한 리뉴얼 프로젝트입니다. 기존 네이티브 앱(Swift, Kotlin)을 React Native로 전환하여 구현하였으며, 출시 이후 호텔, 액티비티 등 다양한 특가 상품과 숙박권 비교 기능을 도입하며 여행 특가 알림 서비스로 기능을 확장했습니다.</p>
<h2>Overview</h2>
<ul>
<li><strong>Period</strong>: 2020. 02. ~ 2022. 03.</li>
<li><strong>Members</strong>:
<br>(출시 전) 프론트엔드 개발자 3명, 백엔드 개발자 3명
<br>(출시 후) 프론트엔드 개발자 2명, 풀스택 개발자 1명</li>
<li><strong>Role</strong>: 프론트엔드 개발</li>
<li><strong>TechStack</strong>:
<ul>
<li>TypeScript</li>
<li>React Native</li>
<li>MobX</li>
<li>GraphQL</li>
<li>Protocol Buffer</li>
<li>Contentful</li>
<li>Fastlane</li>
</ul>
</li>
</ul>
<h2>Contributions</h2>
<ul>
<li>앱 내 주요 기능 및 화면 개발</li>
<li>컨텐트풀 기반의 동적 페이지 레이아웃 관리 시스템 구현</li>
<li>리액트 컴포넌트 성능 개선</li>
</ul>
<h2>Significance</h2>
<p>처음 React Native로 진행한 프로젝트입니다. 출시 전 퍼포먼스 개선 작업을 통해 React Native 아키텍처를 깊이 이해할 수 있었으며, React 개발에서 best practice를 준수하는 것의 중요성을 직접 체감할 수 있었습니다.</p>
<p>또한 Protocol Buffers와 GraphQL을 포함한 다양한 데이터 전송 기술을 활용하면서 각 기술의 개념과 장단점을 실무에서 비교하고 이해할 수 있었습니다.</p>
<h2>Challenges</h2>
<details open>
<summary>UI 성능 개선</summary>
<p>출시 전 스크롤 버벅임 등의 앱 전체적인 성능 이슈가 있었습니다. 아직 개발이 필요한 작업들이 있었지만 성능 이슈는 해결하고 출시하고 싶어 성능 개선 작업을 진행했습니다. 성능 개선 작업에서 마주한 주요 사례는 다음과 같습니다.</p>
<p><strong>사례 1. 홈</strong></p>
<p>홈은 모든 사용자의 첫인상을 결정하는 페이지 중 하나입니다. 플레이윙즈 홈에는 무한 루프 배너, 띠 배너, 판매 중인 특가, 판매 예정 특가 등 여러 컴포넌트들을 조합해 구성되었습니다. 하지만 다양한 요인으로 인해 성능 문제가 발생했습니다.</p>
<ul>
<li>
<p><strong>잘못된 key 사용</strong></p>
<p>출시 전 플레이윙즈의 배너는 Google Ads API를 활용한 네이티브 모듈을 통해 구현되었습니다. 이 컴포넌트는 구좌에 해당하는 광고 데이터를 받아와 React Native 컴포넌트로 렌더링합니다. 스와이퍼 컴포넌트에 배너 여러개를 넣어 구현했는데, 스와이퍼 컴포넌트 특성상 광고 데이터가 없는 배너인 경우 렌더링에서 제외해야 했습니다.</p>
<pre><code class="language-tsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">BannerSwiper</span>(<span class="hljs-params">{ placementIds }: <span class="hljs-title class_">Props</span></span>): <span class="hljs-title class_">ReactElement</span> {
  <span class="hljs-keyword">const</span> [visiblePlacementIds, setVisiblePlacementIds] =
    useState&lt;<span class="hljs-built_in">string</span>[]&gt;(placementIds)

  <span class="hljs-keyword">const</span> onAdLoadFailed = (<span class="hljs-attr">placementId</span>: <span class="hljs-built_in">string</span>): <span class="hljs-function"><span class="hljs-params">void</span> =&gt;</span> {
    <span class="hljs-title function_">setVisiblePlacementIds</span>(<span class="hljs-function">(<span class="hljs-params">prev</span>) =&gt;</span> prev.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">id</span>) =&gt;</span> id !== placementId))
  }

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Swiper</span>
      <span class="hljs-attr">loop</span>
      <span class="hljs-attr">autoPlay</span>
      <span class="hljs-attr">data</span>=<span class="hljs-string">{visiblePlacementIds}</span>
      <span class="hljs-attr">renderItem</span>=<span class="hljs-string">{(id,</span> <span class="hljs-attr">index</span>) =&gt;</span> (
        <span class="hljs-tag">&lt;<span class="hljs-name">Banner</span> <span class="hljs-attr">id</span>=<span class="hljs-string">{id}</span> <span class="hljs-attr">onLoadFailed</span>=<span class="hljs-string">{onAdLoadFailed}</span> /&gt;</span>
      )}
      keyExtractor={(id, index) =&gt; index}
    /&gt;</span>
  )
}
</code></pre>
<p>하지만 인덱스를 키값으로 사용하면서 광고 데이터를 불러오는데 실패할 경우, 무거운 컴포넌트인 배너를 다시 렌더링하게 되어 성능 이슈가 발생했습니다. 이를 해결하기 위해 배너의 키값으로 <code>placementId</code>로 사용하였고, 무한 루프 스와이퍼 특성상 동일 배너 여러개를 미리 만들어 사용하기 때문에 키가 중복되지 않도록 <code>index</code>도 같이 활용했습니다.</p>
<pre><code class="language-tsx">&lt;<span class="hljs-title class_">Swiper</span>
  loop
  autoPlay
  data={visiblePlacementIds}
  renderItem={<span class="hljs-function">(<span class="hljs-params">id, index</span>) =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Banner</span> <span class="hljs-attr">id</span>=<span class="hljs-string">{id}</span> <span class="hljs-attr">onLoadFailed</span>=<span class="hljs-string">{onAdLoadFailed}</span> /&gt;</span></span>}
  keyExtractor={<span class="hljs-function">(<span class="hljs-params">id, index</span>) =&gt;</span>
    <span class="hljs-string">\`<span class="hljs-subst">\${id}</span>_<span class="hljs-subst">\${<span class="hljs-built_in">Math</span>.ceil(index / visiblePlacementIds.length)}</span>\`</span>
  }
/&gt;
</code></pre>
</li>
<li>
<p><strong>불필요한 상태값 사용</strong></p>
<p>홈을 구성하는 섹션 중 판매 중이 항공권 특가를 출발지별로 보여주는 섹션이 있었습니다. 이를 구현하기 위해 서버에서 특가를 가져오는 로직, 출발지 목록을 가져오는 로직, 사용자가 선택한 출발지에 해당하는 특가만 필터링하여 노출하는 로직이 필요했는데, 초기 구현에서는 각 로직을 별도의 <code>useEffect</code>로 나누어 관리했습니다.</p>
<pre><code class="language-tsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">InProgressDealsSection</span>(<span class="hljs-params"></span>): <span class="hljs-title class_">ReactElement</span> {
  <span class="hljs-keyword">const</span> [deals, setDeals] = useState&lt;<span class="hljs-title class_">Deal</span>[]&gt;()
  <span class="hljs-keyword">const</span> [departures, setDepartures] = useState&lt;<span class="hljs-built_in">string</span>[]&gt;()
  <span class="hljs-keyword">const</span> [selectedDeparture, setSelectedDeparture] = useState&lt;<span class="hljs-built_in">string</span>&gt;()

  <span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-title function_">fetchDeals</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">deals</span>) =&gt;</span> <span class="hljs-title function_">setDeals</span>(deals))
  }, [])

  <span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-title function_">fetchDepartures</span>().<span class="hljs-title function_">then</span>(<span class="hljs-function">(<span class="hljs-params">departures</span>) =&gt;</span> {
      <span class="hljs-title function_">setDepartures</span>(departures)
      <span class="hljs-title function_">setSelectedDeparture</span>(departures[<span class="hljs-number">0</span>])
    })
  }, [])

  <span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-keyword">if</span> (!deals || !selectedDeparture) {
      <span class="hljs-keyword">return</span>
    }

    <span class="hljs-title function_">setVisibleDeals</span>(
      deals.<span class="hljs-title function_">filter</span>(<span class="hljs-function">(<span class="hljs-params">deal</span>) =&gt;</span> deal.<span class="hljs-property">departure</span> === selectedDeparture),
    )
  }, [deals, selectedDeparture])

  <span class="hljs-keyword">if</span> (!deals || !departures) {
    <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">LoadingView</span> /&gt;</span></span>
  }

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DepartureChips</span>
        <span class="hljs-attr">departures</span>=<span class="hljs-string">{departures}</span>
        <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(selected)</span> =&gt;</span> setSelectedDepartures(selected)}
      /&gt;
      {visibleDeals.map((deal) =&gt; (
        <span class="hljs-tag">&lt;<span class="hljs-name">DealCard</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{deal.id}</span> <span class="hljs-attr">deal</span>=<span class="hljs-string">{deal}</span> /&gt;</span>
      ))}
    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>
  )
}
</code></pre>
<p><code>useEffect</code>로 나눠 로직을 관리하다보니 사용자가 출발지를 변경할 때 <code>visibleDeals</code>의 상태가 변경될 때까지 이전 출발지의 특가를 보여주는 문제가 있었습니다. 이를 해결하기 위해 <code>visibleDeals</code>를 상태 대신 computed property로 관리하는 방식으로 수정했습니다.</p>
<pre><code class="language-tsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">InProgressDealsSection</span>(<span class="hljs-params"></span>): <span class="hljs-title class_">ReactElement</span> {
  <span class="hljs-comment">// ...</span>
  <span class="hljs-keyword">const</span> visibleDeals = deals.<span class="hljs-title function_">filter</span>(
    <span class="hljs-function">(<span class="hljs-params">deal</span>) =&gt;</span> deal.<span class="hljs-property">departure</span> === selectedDeparture,
  )

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">View</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">DepartureChips</span>
        <span class="hljs-attr">departures</span>=<span class="hljs-string">{departures}</span>
        <span class="hljs-attr">onChange</span>=<span class="hljs-string">{(selected)</span> =&gt;</span> setSelectedDepartures(selected)}
      /&gt;
      {visibleDeals.map((deal) =&gt; (
        <span class="hljs-tag">&lt;<span class="hljs-name">DealCard</span> <span class="hljs-attr">key</span>=<span class="hljs-string">{deal.id}</span> <span class="hljs-attr">deal</span>=<span class="hljs-string">{deal}</span> /&gt;</span>
      ))}
    <span class="hljs-tag">&lt;/<span class="hljs-name">View</span>&gt;</span></span>
  )
}
</code></pre>
</li>
</ul>
<p><strong>사례 2. 항공권 비교</strong></p>
<p>플레이윙즈는 사용자가 항공편을 검색하면 예약 가능한 항공권을 1분간 polling하여 리스트 형태로 보여주는 항공권 비교 기능을 제공합니다. 항공권 리스트는 매 응답마다 자체 정렬 알고리즘을 통해 재정렬 됩니다.</p>
<pre><code class="language-tsx"><span class="hljs-comment">// 항공권 검색 결과 화면</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">FlightSearchScreen</span>(<span class="hljs-params">{ departure, arrival }: <span class="hljs-title class_">Props</span></span>): <span class="hljs-title class_">ReactElement</span> {
  <span class="hljs-keyword">const</span> [itineraries, setItineraries] = <span class="hljs-title function_">useState</span>([])

  <span class="hljs-title function_">useEffect</span>(<span class="hljs-function">() =&gt;</span> {
    <span class="hljs-title function_">searchFlight</span>({
      <span class="hljs-attr">request</span>: { departure, arrival },
      <span class="hljs-attr">onUpdate</span>: <span class="hljs-function">(<span class="hljs-params">itineraries</span>) =&gt;</span> <span class="hljs-title function_">setItineraries</span>(itineraries),
    })
  }, [departure, arrival])

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Screen</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">NavBar</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">FlatList</span>
        <span class="hljs-attr">data</span>=<span class="hljs-string">{itineraries}</span>
        <span class="hljs-attr">renderItem</span>=<span class="hljs-string">{(item)</span> =&gt;</span> <span class="hljs-tag">&lt;<span class="hljs-name">ItineraryCard</span> <span class="hljs-attr">item</span>=<span class="hljs-string">{item}</span> /&gt;</span>}
        keyExtractor={(item, index) =&gt; index}
      /&gt;
    <span class="hljs-tag">&lt;/<span class="hljs-name">Screen</span>&gt;</span></span>
  )
}
</code></pre>
<p>개선 이전에는 항공권 리스트의 각 항목을 렌더링할 때 key로 리스트의 인덱스를 사용하고 있습니다. 하지만 리스트가 매 응답마다 재정렬되면서 기존 카드를 재사용하지 않고 새롭게 생성하기 때문에 성능 저하가 발생했습니다. 이를 해결하기 위해 리액트가 이미 렌더링된 카드를 재사용할 수 있도록 인덱스 대신 고유한 값을 키로 사용해야 했는데, 항공권 모델(<code>Itinerary</code>)의 경우 <code>id</code>와 같이 식별 가능한 고유한 값이 없었기 때문에 여러 필드를 조합해 키값으로 사용했습니다.</p>
<pre><code class="language-tsx">&lt;<span class="hljs-title class_">FlatList</span>
  data={itineraries}
  renderItem={<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">ItineraryCard</span> <span class="hljs-attr">item</span>=<span class="hljs-string">{item}</span> /&gt;</span></span>}
  keyExtractor={<span class="hljs-function">(<span class="hljs-params">item</span>) =&gt;</span> <span class="hljs-title function_">generateUniqKey</span>(item)}
/&gt;
</code></pre>
<p>종합적으로, 잘못된 키 사용으로 인한 컴포넌트 리렌더링과 불필요한 상태 관리로 인한 잦은 리렌더링이 성능 문제를 유발했습니다. 이를 해결하기 위해 고유한 키 값을 사용하여 컴포넌트 재사용성을 높이고, 불필요한 상태를 제거하는 등의 조치를 통해 성능을 비약적으로 개선할 수 있었습니다.</p>
</details>
<!-- <details>
<summary>좋아요 기능 개발</summary>
</details> -->
`,Sa=Object.freeze(Object.defineProperty({__proto__:null,attributes:va,html:Fa},Symbol.toStringTag,{value:"Module"})),ka={name:"플레이윙즈 웹 어플리케이션",description:"SEO를 통한 사용자 유입 증대와 웹투앱 마케팅을 진행하기 위한 웹 어플리케이션",startAt:"2021-01",endAt:"2023-06",techStack:["TypeScript","Gatsby","TanStack Query","Material UI","Emotion","GraphQL"]},xa=`<h1>플레이윙즈 웹 어플리케이션</h1>
<p>기존 모바일 어플리케이션으로만 운영하던 플레이윙즈를 SEO를 통한 사용자 유입 증대와 웹투앱 마케팅을 위해 웹 어플리케이션으로 확장한 프로젝트입니다. 출시 이후 웹 앱의 기능이 모바일 앱 기능과 비슷해지면서, 개발 리소스 효율화를 위해 기존 리액트 네이티브로 작성된 모바일 앱을 웹뷰 기반 하이브리드 앱으로 전환했습니다.</p>
<p>URL: <a href="https://www.playwings.co.kr/" target="_blank" rel="noopener noreferrer">https://www.playwings.co.kr/</a></p>
<h2>Overview</h2>
<ul>
<li><strong>Period</strong>: 2020. 01. ~ 2022. 06.</li>
<li><strong>Members</strong>: 프론트엔드 개발자 3명, 풀스택 개발자 1명</li>
<li><strong>Role</strong>: 프론트엔드 개발</li>
<li><strong>TechStack</strong>:
<ul>
<li>TypeScript</li>
<li>Gatsby</li>
<li>Material UI</li>
<li>Emotion</li>
<li>Tanstack Query</li>
<li>GraphQL</li>
<li>Protocol Buffer</li>
<li>Contentful</li>
</ul>
</li>
</ul>
<h2>Contributions</h2>
<ul>
<li>SSG 프레임워크 도입: 서비스 전체 MAU 50% 증가</li>
<li>앱 내 주요 기능 및 페이지 개발</li>
<li>이미지 최적화를 통한 성능 개선: 원본 이미지 기준 평균 80% 용량 감소</li>
<li>라이브러리 업데이트 및 기술 스택 최신화</li>
<li>플레이윙즈 프론트엔드 개발팀 리딩 (2023.01~2023.06)</li>
</ul>
<h2>Significance</h2>
<p>Gatsby라는 SSG 프레임워크를 처음 사용한 프로젝트입니다. 이 프로젝트를 통해 초기 렌더링과 하이드레이션을 포함한 SSR 및 SSG 관련 핵심 개념을 이해하고, 이를 실무에 적용할 인사이트를 얻었습니다.</p>
<p>그리고 Tanstack Query를 도입하여 클라이언트와 서버 상태를 분리하면서 코드 가독성을 높이고 복잡성을 낮추는 장점을 경험하며, 이를 실무에 활용할 수 있는 실질적인 노하우를 습득했습니다.</p>
<p>또한, 하이브리드 앱 전환을 위해 웹뷰 개발을 진행하면서 모바일과 웹 앱 간의 상호작용 방법에 대해 이해할 수 있었고, 리액트 네이티브의 네이티브 모듈 구조에 대해 이해할 수 있었습니다.</p>
<p>마지막으로, 6개월이라는 짧은 기간 동안 3명의 프론트엔드 개발자로 구성된 팀을 리딩하며 리더십, 커뮤니케이션, 프로젝트 관리와 조직 운영 등 개발 외적인 역량을 성장시킬 수 있었던 의미 있는 프로젝트였습니다.</p>
<h2>Challenges</h2>
<details>
<summary>SSG 프레임워크 도입</summary>
프로젝트의 초기 목표는 모바일 앱에서 제공하던 특가 및 매거진 서비스를 웹에서도 제공할 수 있도록 웹사이트를 제작하는 것이었습니다. 프로젝트 시작 당시 개발팀은 React Native, Flutter, SPA 개발 경험이 있었으나, SSR이나 SSG 프로젝트 경험은 부족했습니다. 빠른 프로토타이핑과 개발 리소스 효율성을 고려해 CRA나 Flutter 사용을 검토했으나, 두 프레임워크 모두 SEO 측면에서 불리하다는 단점이 있었습니다. 이에 러닝 커브가 있지만, 풍부한 문서와 커뮤니티 지원을 제공하는 SSG 프레임워크인 Gatsby를 기술 스택으로 선택했습니다.
<p>프로젝트를 진행하며 초기 렌더링과 하이드레이션 관련 이슈들을 마주했습니다. 이와 관련된 주요 사례는 다음과 같습니다.</p>
<p><strong>사례1. Date 관련 컴포넌트의 하이드레이션 미스매치 문제</strong></p>
<p>특가 판매 예정인 경우, 판매 시작일까지 며칠 남았는지, 판매 중인 경우 종료일까지 며칠 남았는지를 프로그레스바 형태로 보여주는 요구사항이 있었습니다. CSR 프로젝트에서는 다음과 같이 구현할 수 있습니다.</p>
<pre><code class="language-tsx"><span class="hljs-comment">// SalePeriodProgressBar.tsx</span>
<span class="hljs-keyword">interface</span> <span class="hljs-title class_">Props</span> {
  <span class="hljs-attr">startAt</span>: <span class="hljs-title class_">Date</span>
  <span class="hljs-attr">endAt</span>: <span class="hljs-title class_">Date</span>
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">SalePeriodProgressBar</span>(<span class="hljs-params"><span class="hljs-attr">props</span>: <span class="hljs-title class_">Props</span></span>): <span class="hljs-title class_">ReactElement</span> {
  <span class="hljs-keyword">const</span> { startAt, endAt } = props
  <span class="hljs-keyword">const</span> now = <span class="hljs-keyword">new</span> <span class="hljs-title class_">Date</span>()

  <span class="hljs-keyword">if</span> (startAt &gt; now) {
    <span class="hljs-keyword">return</span> (
      <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">ScheduledSalePeriodProgressBar</span>
        <span class="hljs-attr">now</span>=<span class="hljs-string">{now}</span>
        <span class="hljs-attr">startAt</span>=<span class="hljs-string">{startAt}</span>
        <span class="hljs-attr">endAt</span>=<span class="hljs-string">{endAt}</span>
      /&gt;</span></span>
    )
  }

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">InProgressSalePeriodProgressBar</span>
      <span class="hljs-attr">now</span>=<span class="hljs-string">{now}</span>
      <span class="hljs-attr">startAt</span>=<span class="hljs-string">{startAt}</span>
      <span class="hljs-attr">endAt</span>=<span class="hljs-string">{endAt}</span>
    /&gt;</span></span>
  )
}

<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title class_">SalePeriodProgressBar</span>
</code></pre>
<p>하지만 Gatsby와 같은 SSG 프레임워크에서는 빌드 시 컴포넌트의 초기 상태를 기준으로 HTML 파일을 생성합니다. 이때 <code>now</code>는 빌드 시점의 시간이 되고 사용자가 페이지를 요청하는 시점에는 <code>now</code>가 렌더링 시간으로 변경되므로, HTML과 React 렌더 트리 사이에 불일치가 발생해 버그가 생길 수 있습니다.</p>
<p>이 문제를 해결하기 위해 Material UI의 <code>NoSsr</code> API를 활용해 <code>withNoSsr()</code>이란 고차 컴포넌트를 만들어, 빌드 시점에는 fallback을 렌더링하고 하이드레이션 이후에 실제 UI를 렌더링하도록 했습니다. 이때 fallback 컴포넌트는 레이아웃 시프트를 방지하기 위해 원래 컴포넌트와 동일한 높이로 설정했습니다.</p>
<pre><code class="language-tsx"><span class="hljs-comment">// withNoSsr.tsx</span>
<span class="hljs-keyword">function</span> withNoSsr&lt;T&gt;(<span class="hljs-title class_">Component</span>: <span class="hljs-title class_">ComponentType</span>&lt;T&gt;, <span class="hljs-attr">fallback</span>: <span class="hljs-title class_">ReactNode</span>) {
  <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">props</span>: T</span>) =&gt;</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">NoSsr</span> <span class="hljs-attr">fallback</span>=<span class="hljs-string">{fallback}</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">Component</span> {<span class="hljs-attr">...props</span>} /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">NoSsr</span>&gt;</span></span>
  );
}

<span class="hljs-comment">// SalePeriodProgressBar.tsx</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">withNoSsr</span>(<span class="hljs-title class_">SalePeriodProgressBar</span>, <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Fallback</span> /&gt;</span></span>)
</code></pre>
<p><strong>사례2. 네비게이션 메뉴 이슈</strong></p>
<p>태블릿 이상의 너비에서는 페이지마다 사이드 네비게이션 메뉴를, 모바일 이하에서는 Bottom Navigation Bar를 보여주는 요구사항이 있었습니다. 기기의 화면 너비는 클라이언트 렌더링 시점에만 확인할 수 있어 빌드 시점에는 어떤 네비게이션 컴포넌트를 생성할지 결정할 수 없었습니다.</p>
<p>첫 번째 사례처럼 하이드레이션 이후에 컴포넌트를 렌더링하는 방식도 고려할 수 있었지만, 네비게이션 메뉴는 페이지 내에서 차지하는 영역이 크고 중요도가 높아 하이드레이션 전까지 사용자에게 메뉴를 제공하지 못하는 문제가 있었습니다.</p>
<p>따라서 <code>NoSsr</code>을 사용하는 대신 CSS의 media query와 <code>display: none</code> 속성을 이용해 노출 여부를 결정하는 방식으로 사용자 경험을 해치지 않으면서 요구사항을 해결할 수 있었습니다.</p>
<pre><code class="language-tsx"><span class="hljs-comment">// SideNavigationMenu.tsx</span>
<span class="hljs-keyword">const</span> <span class="hljs-title class_">SideNavigationMenu</span> = <span class="hljs-title function_">styled</span>(<span class="hljs-title class_">Component</span>)<span class="hljs-string">\`
  display: none;

  @media (min-width: <span class="hljs-subst">\${breakpoint.tablet}</span>px) {
    display: block;
  }
\`</span>

<span class="hljs-comment">// BottomNavigationBar.tsx</span>
<span class="hljs-keyword">const</span> <span class="hljs-title class_">BottomNavigationBar</span> = <span class="hljs-title function_">styled</span>(<span class="hljs-title class_">Component</span>)<span class="hljs-string">\`
  display: block;

  @media (max-width: <span class="hljs-subst">\${breakpoint.tablet}</span>px) {
    display: none;
  }
\`</span>

<span class="hljs-comment">// Layout.tsx</span>
<span class="hljs-keyword">function</span> <span class="hljs-title function_">Layout</span>(<span class="hljs-params">{ children }: <span class="hljs-title class_">Props</span></span>): <span class="hljs-title class_">ReactElement</span> {
  <span class="hljs-keyword">const</span> menus = [
    <span class="hljs-comment">/** { name: string; path: string; } */</span>
  ]

  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Root</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">SideNavigationMenu</span> <span class="hljs-attr">menus</span>=<span class="hljs-string">{menus}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">PageContainer</span>&gt;</span>
        {children}
        <span class="hljs-tag">&lt;<span class="hljs-name">BottomNavigationBar</span> <span class="hljs-attr">menus</span>=<span class="hljs-string">{menus}</span> /&gt;</span>
      <span class="hljs-tag">&lt;/<span class="hljs-name">PageContainer</span>&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">Root</span>&gt;</span></span>
  )
}
</code></pre>
<p>이러한 SSG 프레임워크 도입과 관련된 도전 과제들을 해결하면서, SEO와 초기 렌더링 성능을 최적화할 수 있었습니다. 특히, 하이드레이션 이슈 해결과 네비게이션 메뉴의 반응형 디자인 개선은 사용자 경험을 향상시키는 데 기여했습니다. 그 결과, 출시 당시 lighthouse 기준 <strong>평균 90점 이상</strong>의 성능을 기록했으며, 모바일 앱 MAU의 50%에 해당하는 <strong>5만 명의 사용자를 확보</strong>할 수 있었습니다.</p>
</details>
<details>
<summary>반응형 이미지 컴퍼넌트 개발</summary>
<p>해당 프로젝트에서는 히어로 섹션, 배너, 카드 등과 같이 화면 너비에 따라 크기나 해상도가 달라지는 반응형 이미지가 필요했습니다. Gatsby가 제공하는 반응형 이미지 컴포넌트를 사용할 수 있었지만, 이는 GraphQL로 접근 가능한 정적 이미지에만 제한되어 서버에서 제공하는 동적 이미지 URL을 사용할 수 없는 제약이 있었습니다. 이러한 한계를 극복하기 위해 플랫폼 독립적인 반응형 이미지 컴포넌트를 개발했습니다.</p>
<p><strong>아트 디렉션</strong></p>
<p>홈 배너나 상세 페이지 히어로 이미지의 경우 특정 화면 너비 기준으로 비율이 다른 이미지를 사용해야 했습니다. 이를 해결하기 위해 <code>&lt;picture&gt;</code> 태그와 <code>&lt;source&gt;</code> 태그를 활용하여 뷰포트 크기에 맞는 이미지를 제공했습니다.</p>
<pre><code class="language-tsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">ResponsiveImage</span>(<span class="hljs-params">{ desktopImage, mobileImage }: <span class="hljs-title class_">Props</span></span>): <span class="hljs-title class_">ReactElement</span> {
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">picture</span>&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">source</span> <span class="hljs-attr">media</span>=<span class="hljs-string">&quot;(min-width: 600px)&quot;</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{desktopImage}</span> /&gt;</span>
      <span class="hljs-tag">&lt;<span class="hljs-name">img</span> <span class="hljs-attr">src</span>=<span class="hljs-string">{mobileImage}</span> /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">picture</span>&gt;</span></span>
  )
}
</code></pre>
<p><strong>클라우디너리 Transformation API</strong></p>
<p>서비스 이미지는 클라우디너리로 관리되며, Transformation API를 사용하여 최적화된 이미지를 제공했습니다. 하지만 클라우디너리는 변환 작업당 비용이 발생하기 때문에 기기 DPR과 화면 너비에 맞춰 이미지를 요청하면 변환 비용이 과도하게 증가하는 문제가 있습니다. 이를 해결하기 위해 사전에 <strong>너비 프리셋</strong>을 정의하고 화면 너비와 DPR을 기반으로 프리셋을 선택해 변환 파라미터를 생성했습니다.</p>
<p>단, 화면 너비와 DPR은 클라이언트 렌더링 시점에만 알 수 있으므로, 빌드 시점에 이미지 링크를 생성하기 위해서 모바일 너비의 최소값인 360px을 기준으로 이미지 크기를 결정하고, dpr도 프리셋으로 정의해 <code>srcset</code> 속성에 이미지 프리셋을 추가했습니다.</p>
<pre><code class="language-tsx"><span class="hljs-comment">// ResponsiveImage.tsx - v2</span>
<span class="hljs-keyword">const</span> widthPreset = [<span class="hljs-number">80</span>, <span class="hljs-number">160</span>, <span class="hljs-number">240</span>, <span class="hljs-number">360</span>, <span class="hljs-number">720</span>, <span class="hljs-number">1380</span>]
<span class="hljs-keyword">const</span> dprPreset = [<span class="hljs-number">1</span>, <span class="hljs-number">2</span>, <span class="hljs-number">3</span>]

<span class="hljs-keyword">function</span> <span class="hljs-title function_">generateTransformationURL</span>(<span class="hljs-params"><span class="hljs-attr">path</span>: <span class="hljs-built_in">string</span>, <span class="hljs-attr">width</span>: <span class="hljs-built_in">number</span></span>): <span class="hljs-built_in">string</span> {
  <span class="hljs-keyword">const</span> widthParameter = widthPreset.<span class="hljs-title function_">find</span>(<span class="hljs-function"><span class="hljs-params">w</span> =&gt;</span> w &gt;= width) ?? widthPreset[widthPreset.<span class="hljs-property">length</span> - <span class="hljs-number">1</span>]

  <span class="hljs-comment">// f_auto: 브라우저 지원 여부에 따라 WebP 등 최신 이미지 포맷을 요청할 수 있는 파라미터</span>
  <span class="hljs-keyword">return</span> <span class="hljs-string">\`<span class="hljs-subst">\${cloudinary base url}</span>/w_<span class="hljs-subst">\${widthParameter}</span>,f_auto,other_parameters/<span class="hljs-subst">\${path}</span>\`</span>
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">generateSrcset</span>(<span class="hljs-params"><span class="hljs-attr">path</span>: <span class="hljs-built_in">string</span>, <span class="hljs-attr">width</span>: <span class="hljs-built_in">number</span></span>): <span class="hljs-built_in">string</span> {
  <span class="hljs-keyword">return</span> dprPreset
    .<span class="hljs-title function_">map</span>(<span class="hljs-function">(<span class="hljs-params">dpr</span>) =&gt;</span> <span class="hljs-string">\`<span class="hljs-subst">\${generateTransformationURL(path, width * dpr)}</span> <span class="hljs-subst">\${width * dpr}</span>w\`</span>)
    .<span class="hljs-title function_">join</span>(<span class="hljs-string">&#x27;,&#x27;</span>)
}

<span class="hljs-keyword">function</span> <span class="hljs-title function_">ResponsiveImage</span>(<span class="hljs-params">{ mobileImagePath, desktopImagePath, width }: <span class="hljs-title class_">Props</span></span>): <span class="hljs-title class_">ReactElement</span> {
  <span class="hljs-keyword">const</span> desktopSrcset = <span class="hljs-title function_">generateSrcset</span>(desktopImagePath, width)
  <span class="hljs-keyword">const</span> mobileSrcset = <span class="hljs-title function_">generateSrcset</span>(mobileImagePath, width)

  <span class="hljs-keyword">return</span> (
    &lt;picture&gt;
      &lt;source media=&quot;(min-width: 600px)&quot; srcset={desktopSrcset}&gt;
      &lt;img src={generateTransformationURL(mobileImagePath, width)} srcset={imageSrcset}&gt;
    &lt;/picture&gt;
  )
}
</code></pre>
<p>이러한 방식을 통해 <strong>평균 80% 이상</strong> 압축된 이미지를 제공하여 성능을 개선했으며, 클라우디너리 변환 비용도 최적화할 수 있었습니다.</p>
</details>
<details>
<summary>웹뷰 개발 및 연동</summary>
<p>플레이윙즈 웹 어플리케이션은 SEO를 위해 기존 모바일 앱에서 제공하던 특가 및 매거진 서비스의 웹 버전을 구현하기 위해 시작되었습니다. 하지만 서비스를 운영하면서 모바일 앱의 기능들이 점차 웹 앱으로 확대되었고, 결국 웹과 모바일 두 플랫폼을 모두 관리해야 하는 상황에 직면했습니다. 당시 프론트엔드 개발자 3명이 웹과 모바일을 동시에 관리하고 있었기 때문에, 개발 리소스를 효율적으로 활용하기 위해 기존 리액트 네이티브로 작성된 모바일 앱을 웹뷰 기반 하이브리드 앱으로 전환하기로 결정했습니다.</p>
<p>하이브리드 앱으로 전환하면서, UI와 비즈니스 로직의 대부분을 웹으로 이동시켰습니다. 하지만, 소셜 로그인, 애널리틱스, 딥링크와 같은 기능은 네이티브(Android/iOS) 단에서 처리해야 했습니다. 예를 들어, 사용자가 웹에서 구글 로그인을 클릭하면, 웹이 네이티브 앱에 로그인 요청을 보내고, 네이티브 단에서 실제 구글 로그인 플로우를 실행한 후 결과를 웹으로 전달하는 방식이 필요했습니다.</p>
<p><img src="projects/playwings-web-architecture.png" alt="플레이윙즈 모바일 앱 아키텍처"></p>
<p>이를 해결하기 위해 웹뷰를 네이티브 모듈로 관리하여, 웹뷰에서 들어온 요청을 리액트 네이티브에서 받아 처리하고, 응답을 보내거나 웹 앱으로 전달해야 할 데이터가 있으면 웹뷰를 통해 전달하는 구조를 설계했습니다. 웹과 웹뷰 간의 통신은 자바스크립트 브릿지를 활용하여, 웹과 네이티브 모두 동일한 API를 사용할 수 있도록 구현했습니다.</p>
<ul>
<li>
<p>WebView(iOS/Android)</p>
<p>웹과 리액트 네이티브간의 통신을 지원하기 위해 다음 작업들을 플랫폼별로 구현했습니다.</p>
<ul>
<li>웹에서 웹뷰로 데이터를 전송하기 위해 자바스크립트 인터페이스를 <code>window</code> 객체에 추가</li>
<li>웹에서 데이터가 들어오면 리액트 네이티브 단에서 props로 <code>onMessage</code>를 통해 전달</li>
<li>리액트 네이티브 단에서 웹으로 데이터를 전달하기 위해 <code>postMessage()</code> API 추가</li>
<li><code>postMessage</code>를 통해 리액트 네이티브 단에서 데이터가 들어오면 <code>window.dispatchEvent()</code>를 통해 웹으로 데이터 전달</li>
</ul>
<details>
<summary>iOS</summary>
<pre><code class="language-swift"><span class="hljs-keyword">let</span> jsInterface <span class="hljs-operator">=</span> <span class="hljs-string">&quot;WebView&quot;</span>

<span class="hljs-keyword">@objc(CustomWebViewManager)</span>
<span class="hljs-keyword">class</span> <span class="hljs-title class_">CustomWebViewManager</span>: <span class="hljs-title class_ inherited__">RCTViewManager</span> {
  <span class="hljs-keyword">var</span> webView: <span class="hljs-type">CustomWebView</span>!

  <span class="hljs-comment">// 웹에서 웹뷰로 통신할 수 있는 스크립트 추가</span>
  <span class="hljs-keyword">func</span> <span class="hljs-title function_">view</span>() -&gt; <span class="hljs-type">UIView</span>! {
    <span class="hljs-keyword">let</span> config <span class="hljs-operator">=</span> <span class="hljs-type">WKWebViewConfiguration</span>()
    <span class="hljs-keyword">let</span> postMessageScript <span class="hljs-operator">=</span> <span class="hljs-type">WKUserScript</span>(
      source: <span class="hljs-string">&quot;&quot;&quot;
      window.<span class="hljs-subst">\\(jsInterface)</span> = window.<span class="hljs-subst">\\(jsInterface)</span> || {};
      window.<span class="hljs-subst">\\(jsInterface)</span>.postMessage = function (data) {
        window.webkit.messageHandlers.<span class="hljs-subst">\\(jsInterface)</span>.postMessage(String(data));
      };
      &quot;&quot;&quot;</span>,
      injectionTime: .atDocumentStart,
      forMainFrameOnly: <span class="hljs-literal">true</span>
    )

    config.userContentController.addUserScript(postMessageScript)
    webView <span class="hljs-operator">=</span> <span class="hljs-type">CustomWebView</span>(frame: .zero, configuration: config)
    <span class="hljs-keyword">return</span> webView
  }

  <span class="hljs-keyword">@objc</span> <span class="hljs-keyword">public</span> <span class="hljs-keyword">func</span> <span class="hljs-title function_">postMessage</span>(<span class="hljs-keyword">_</span> <span class="hljs-params">data</span>: <span class="hljs-keyword">Any</span>) {
    webView.postMessage(data)
  }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">CustomWebView</span>: <span class="hljs-title class_ inherited__">WKWebView</span>, <span class="hljs-title class_ inherited__">WKScriptMessageHandler</span> {
  <span class="hljs-keyword">var</span> onMessage: <span class="hljs-type">RCTDirectEventBlock</span>?

  <span class="hljs-comment">// 웹에서 메시지를 받으면 리액트 네이티브로 데이터 전달</span>
  <span class="hljs-keyword">func</span> <span class="hljs-title function_">userContentController</span>(<span class="hljs-keyword">_</span> <span class="hljs-params">userContentController</span>: <span class="hljs-type">WKUserContentController</span>, <span class="hljs-params">didReceive</span> <span class="hljs-params">message</span>: <span class="hljs-type">WKScriptMessage</span>) {
    <span class="hljs-keyword">if</span> (message.name <span class="hljs-operator">==</span> jsInterface) {
      <span class="hljs-keyword">if</span> <span class="hljs-keyword">let</span> onMessage <span class="hljs-operator">=</span> <span class="hljs-keyword">self</span>.onMessage {
        onMessage(message.body)
      }
    }
  }

  <span class="hljs-comment">// 웹으로 메시지 전송</span>
  <span class="hljs-keyword">func</span> <span class="hljs-title function_">postMessage</span>(<span class="hljs-keyword">_</span> <span class="hljs-params">data</span>: <span class="hljs-type">String</span>) {
    <span class="hljs-keyword">do</span> {
      <span class="hljs-keyword">let</span> json <span class="hljs-operator">=</span> <span class="hljs-keyword">try</span> <span class="hljs-type">JSONSerialization</span>.data(withJSONObject: [<span class="hljs-string">&quot;data&quot;</span>: data])
      <span class="hljs-keyword">let</span> js <span class="hljs-operator">=</span> <span class="hljs-string">&quot;window.dispatchEvent(new MessageEvent(&#x27;message&#x27;, <span class="hljs-subst">\\(json)</span>));&quot;</span>
      evaluateJavaScript(js)
    } <span class="hljs-keyword">catch</span> {
      <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Error serializing JSON: <span class="hljs-subst">\\(error)</span>&quot;</span>)
    }
  }
}
</code></pre>
</details>
<details>
<summary>Android</summary>
<pre><code class="language-kotlin"><span class="hljs-keyword">const</span> <span class="hljs-keyword">val</span> jsInterface = <span class="hljs-string">&quot;WebView&quot;</span>

<span class="hljs-keyword">class</span> <span class="hljs-title class_">CustomWebViewManager</span>: <span class="hljs-type">SimpleViewManager</span>&lt;<span class="hljs-type">CustomWebView</span>&gt;() {
  <span class="hljs-keyword">override</span> <span class="hljs-function"><span class="hljs-keyword">fun</span> <span class="hljs-title">createViewInstance</span><span class="hljs-params">(context: <span class="hljs-type">ThemedReactContext</span>)</span></span>: CustomWebview {
    <span class="hljs-keyword">val</span> webview = CustomWebView(context)

    <span class="hljs-comment">// 웹에서 웹뷰로 통신할 수 있는 스크립트 추가</span>
    webView.settings.javaScriptEnabled = <span class="hljs-literal">true</span>
    webView.addJavascriptInterface(<span class="hljs-keyword">object</span> {
      <span class="hljs-meta">@JavascriptInterface</span>
      <span class="hljs-function"><span class="hljs-keyword">fun</span> <span class="hljs-title">postMessage</span><span class="hljs-params">(message: <span class="hljs-type">String</span>)</span></span> {
        webView.onMessage(message)
      }
    }, jsInterface)

    <span class="hljs-keyword">return</span> webView
  }

  <span class="hljs-keyword">override</span> <span class="hljs-function"><span class="hljs-keyword">fun</span> <span class="hljs-title">receiveCommand</span><span class="hljs-params">(
    root: <span class="hljs-type">CustomWebView</span>,
    commandId: <span class="hljs-type">String</span>,
    args?: <span class="hljs-type">ReadableArray</span>?
  )</span></span> {
    <span class="hljs-keyword">when</span> (commandId) {
      <span class="hljs-string">&quot;postMessage&quot;</span> -&gt; root.postMessage(args!.getString(<span class="hljs-number">0</span>))
    }
  }
}

<span class="hljs-keyword">class</span> <span class="hljs-title class_">CustomWebView</span>(context: Context): WebView(context) {
  <span class="hljs-comment">// 웹에서 메시지를 받으면 리액트 네이티브로 데이터 전달</span>
  <span class="hljs-function"><span class="hljs-keyword">fun</span> <span class="hljs-title">onMessage</span><span class="hljs-params">(message: <span class="hljs-type">String</span>)</span></span> {
    <span class="hljs-keyword">val</span> jsModule = (context <span class="hljs-keyword">as</span>? ReactContext)
      ?.getJSModule(RNCWebViewMessagingModule.<span class="hljs-keyword">class</span>)
      ?.emit(<span class="hljs-string">&quot;onMessage&quot;</span>, message)
  }

  <span class="hljs-comment">// 웹으로 메시지 전송</span>
  <span class="hljs-function"><span class="hljs-keyword">fun</span> <span class="hljs-title">postMessage</span><span class="hljs-params">(message: <span class="hljs-type">String</span>)</span></span> {
    <span class="hljs-keyword">val</span> js = <span class="hljs-string">&quot;window.dispatchEvent(new MessageEvent(&#x27;message&#x27;, { data: &#x27;<span class="hljs-variable">$message</span>&#x27; }));&quot;</span>
    evaluateJavascript(js, <span class="hljs-literal">null</span>)
  }
}
</code></pre>
</details>
</li>
<li>
<p>React Native</p>
<pre><code class="language-tsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">App</span>(<span class="hljs-params"></span>): <span class="hljs-title class_">ReactElement</span> {
  <span class="hljs-comment">// ref.current?.postMessage()를 사용해 웹으로 데이터를 전송</span>
  <span class="hljs-keyword">const</span> ref = useRef&lt;<span class="hljs-title class_">WebView</span>&gt;(<span class="hljs-literal">null</span>)
  <span class="hljs-keyword">return</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">WebView</span> <span class="hljs-attr">ref</span>=<span class="hljs-string">{ref}</span> <span class="hljs-attr">onMessage</span>=<span class="hljs-string">{data</span> =&gt;</span> {/** 웹에서 온 요청 처리 */}}&gt;
  )
}
</span></code></pre>
</li>
<li>
<p>playwings_web</p>
<pre><code class="language-tsx"><span class="hljs-comment">// 웹뷰로 데이터 전송</span>
<span class="hljs-variable language_">window</span>.<span class="hljs-property">CustomWebView</span>.<span class="hljs-title function_">postMessage</span>(data)

<span class="hljs-variable language_">window</span>.<span class="hljs-title function_">addEventListener</span>(<span class="hljs-string">&#x27;message&#x27;</span>, <span class="hljs-function"><span class="hljs-params">event</span> =&gt;</span> {<span class="hljs-comment">/** 웹뷰에서 온 데이터 처리 */</span>})
</code></pre>
</li>
</ul>
<p>웹뷰를 네이티브 모듈로 관리하고 웹뷰를 매개로 리액트 네이티브와 웹이 통신하는 구조를 만들면서, 플랫폼 간의 일관성을 유지하면서도 각 플랫폼에서 필요한 특화된 기능을 별도로 처리할 수 있는 구조를 만들었습니다. 이를 통해 웹과 네이티브를 동시에 관리하는 데 드는 리소스를 효율적으로 절감할 수 있었고, 개발 효율성과 유지보수성이 크게 향상되었습니다.</p>
<p>또한, 웹과 네이티브 간의 안정적인 통신을 위해 메시지 형식을 일관되게 정의해야 했습니다. 이를 위해 타입스크립트의 <strong>유니온 타입</strong>을 활용하여 <code>command</code> 필드를 공통으로 가지되, <code>command</code>에 따라 필요한 필드가 달라지는 구조로 메시지 형식을 설계했습니다.</p>
<pre><code class="language-ts"><span class="hljs-keyword">type</span> <span class="hljs-title class_">SocialLogin</span> = {
  <span class="hljs-attr">command</span>: <span class="hljs-string">&#x27;login&#x27;</span>
  <span class="hljs-attr">type</span>: <span class="hljs-string">&#x27;google&#x27;</span> | <span class="hljs-string">&#x27;kakao&#x27;</span> | <span class="hljs-string">&#x27;apple&#x27;</span>
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">Analytics</span> = {
  <span class="hljs-attr">command</span>: <span class="hljs-string">&#x27;analytics&#x27;</span>
  <span class="hljs-attr">provider</span>: <span class="hljs-string">&#x27;firebase&#x27;</span> | <span class="hljs-string">&#x27;appsflyer&#x27;</span>
  <span class="hljs-attr">eventName</span>: <span class="hljs-built_in">string</span>
  <span class="hljs-attr">eventParams</span>: <span class="hljs-title class_">Record</span>&lt;<span class="hljs-built_in">string</span>, <span class="hljs-built_in">unknown</span>&gt;
}

<span class="hljs-keyword">type</span> <span class="hljs-title class_">WebToApp</span> = <span class="hljs-title class_">SocialLogin</span> | <span class="hljs-title class_">Analytics</span>
</code></pre>
<p>이 구조를 채택하면서 새로운 기능을 추가할 때 <code>command</code>만 추가하는 방식으로 메시지 구조를 확장할 수 있었고, 메시지를 받아 처리할 때도 <code>command</code>에 대응하는 API를 호출하는 구조로 쉽게 구현할 수 있었습니다. 이를 통해 유지보수성과 확장성을 높일 수 있었습니다.</p>
<pre><code class="language-tsx"><span class="hljs-keyword">function</span> <span class="hljs-title function_">App</span>(<span class="hljs-params"></span>): <span class="hljs-title class_">ReactElement</span> {
  <span class="hljs-keyword">const</span> <span class="hljs-title function_">onMessage</span> = (<span class="hljs-params"><span class="hljs-attr">data</span>: <span class="hljs-title class_">WebToApp</span></span>) =&gt; {
    <span class="hljs-keyword">switch</span> (data.<span class="hljs-property">command</span>) {
      <span class="hljs-keyword">case</span> <span class="hljs-string">&#x27;login&#x27;</span>:
        socialLogin[data.<span class="hljs-property">type</span>].<span class="hljs-title function_">login</span>()
        <span class="hljs-keyword">break</span>
      <span class="hljs-keyword">case</span> <span class="hljs-string">&#x27;analytics&#x27;</span>:
        analytics[data.<span class="hljs-property">provider</span>].<span class="hljs-title function_">logEvent</span>(data.<span class="hljs-property">eventName</span>, data.<span class="hljs-property">eventParams</span>)
        <span class="hljs-keyword">break</span>
      <span class="hljs-comment">// ...</span>
    }
  }

  <span class="hljs-keyword">return</span> <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">CustomWebView</span> <span class="hljs-attr">onMessage</span>=<span class="hljs-string">{onMessage}</span> /&gt;</span></span>
}
</code></pre>
</details>`,_a=Object.freeze(Object.defineProperty({__proto__:null,attributes:ka,html:xa},Symbol.toStringTag,{value:"Module"})),Ca={name:"프루피(Proofy)",description:"소울바운드토큰(SBT) 기반 신원 인증 앱",startAt:"2023-07",endAt:"2024-06",techStack:["TypeScript","React Native","TanStack Query","Jotai","Tailwind"]},Ea=`<h1>프루피(Proofy)</h1>
<p>소울바운드토큰(SBT) 기반 신원 인증 서비스 '프루피'의 모바일 어플리케이션을 개발한 프로젝트입니다. KYC와 SBT 민팅을 통한 신원인증 기능, 지갑 관리, 연봉 비교 기능 등을 포함하고 있습니다.</p>
<h2>Overview</h2>
<ul>
<li><strong>Period</strong>: 2023. 07. ~ 2024. 06.</li>
<li><strong>Members</strong>: 프론트엔드 개발자 2명, 백엔드 개발자 1명</li>
<li><strong>Role</strong>: 프론트엔드 개발</li>
<li><strong>TechStack</strong>:
<ul>
<li>TypeScript</li>
<li>React Native</li>
<li>TailwindCSS(Nativewind)</li>
<li>Tanstack Query</li>
<li>Jotai</li>
<li>Fastlane</li>
<li>Github Workflow</li>
</ul>
</li>
</ul>
<h2>Contributions</h2>
<ul>
<li>앱 주요 기능 개발
<ul>
<li>react-hook-form을 이용한 KYC 입력 폼 개발</li>
<li>react-native-reanimated 도입 및 애니메이션 로직 개발</li>
<li>소셜 로그인(Kakao, Google, Apple) 연동</li>
<li>소득 인증 기능 개발</li>
</ul>
</li>
<li>Fastlane, Github Workflow를 이용한 배포 관리</li>
</ul>
<h2>Significance</h2>
<p>이 프로젝트에서 Git-flow 전략을 처음 경험했습니다. 이전 회사에서는 트렁크 기반 개발 환경에서 하나의 main 브랜치만 사용하여 개발했지만, 이번 프로젝트에서는 Git-flow를 도입하면서 두 전략의 차이점과 각 접근 방식의 장단점을 비교할 수 있었습니다.</p>
<p>트렁크 기반 개발은 작은 변경사항을 자주 통합할 수 있어 브랜치 관리가 간편하고, 코드 리뷰 부담이 줄어든다는 장점이 있습니다. 하지만 PR당 코드량이 적기 때문에 모든 기능을 하나의 PR에 담기 어려워, 코드 리뷰 시 기능의 전체 흐름을 이해하기 까다로운 경우가 있었습니다. 반면, Git-flow 전략에서는 기능 단위로 브랜치와 PR을 생성하기 때문에 코드 리뷰 시 기능의 맥락을 더 쉽게 파악할 수 있고, 완성된 기능만 통합할 수 있어 배포 관리를 더 안정적으로 할 수 있었습니다.</p>
<p>또한, 이번 프로젝트는 Jotai를 처음으로 도입한 사례이기도 합니다. SWR과 Tanstack Query가 등장하면서 클라이언트 상태와 서버 상태가 분리되면서 전역 상태 관리의 필요성이 줄어들었습니다. 이러한 흐름 속에서 Redux 대신 Jotai를 선택함으로써 보일러플레이트를 줄이고 번들 크기를 최적화할 수 있었습니다. 특히, Jotai는 Context API와 달리 상태를 소비하는 모든 컴포넌트가 아니라 필요한 부분에서만 리렌더링을 발생시켜 성능을 더 개선할 수 있었습니다.</p>
`,Ra=Object.freeze(Object.defineProperty({__proto__:null,attributes:Ca,html:Ea},Symbol.toStringTag,{value:"Module"}));function An(s){return new Date(parseInt(s.substring(0,4)),parseInt(s.substring(5))-1)}const Pa={altong:ha,beliefy:ya,proofy:Ra,playwingsWeb:_a,playwingsRenewal:Sa,pedsfolio:ba},Ta=["pedsfolio","beliefy","altong","proofy","playwingsWeb","playwingsRenewal"].map(s=>{const{attributes:n,html:e}=Pa[s],{startAt:t,endAt:a,...o}=n;return{...o,image:ua[s],startAt:An(t),endAt:a?An(a):void 0,detail:e,showcase:aa[s]||[]}}),ts={name:"정승훈",aka:"페즈",contacts:{email:"hugh1127@gmail.com",github:"https://github.com/devpeds",linkedin:"https://www.linkedin.com/in/seunghoon-jung-041a811a5/"},skills:{Languages:[A.ts,A.dart],Frontend:[A.react,A.next,A.gatsby,A.rn,A.flutter],"Cloud Services":[A.firebase,A.aws],DevOps:[A.fastlane,A.gradle,A.gerrit]},careers:[{company:{name:"SBT"},positions:[{title:"소프트웨어 엔지니어",employmentType:"정규직",startAt:new Date(2023,6,1),endAt:new Date(2024,10,30),performances:["인증 기반 데이팅 서비스, 빌리피 모바일 어플리케이션 개발 및 운영","소울바운드 토큰(SBT)을 통한 신원 인증 서비스, 프루피 모바일 어플리케이션 개발 및 운영","알뜰폰 비교 서비스, 알통 웹 어플리케이션 개발"]}]},{company:{name:"스퀘어랩"},positions:[{title:"소프트웨어 엔지니어",employmentType:"정규직",startAt:new Date(2020,3),endAt:new Date(2023,5),performances:["플레이윙즈 모바일 어플리케이션 개발 및 운영","플레이윙즈 웹 어플리케이션 개발 및 운영","플레이윙즈 백오피스 시스템 개발 지원","3명의 프론트엔드 개발자로 구성된 팀의 개발 일정 조율 및 리소스 관리 (2023.01~2023.06)"]},{title:"소프트웨어 엔지니어",employmentType:"인턴",startAt:new Date(2020,0),endAt:new Date(2020,2),performances:["여행 특가 알림 서비스, 플레이윙즈 모바일 어플리케이션 개발","OTA 서비스, kTravel 프론트엔드 개발"]}]}],projects:Ta},$n=[{id:Ss.skills,name:"Skills",component:u(St,{skills:ts.skills})},{id:Ss.careers,name:"Careers",component:u(_t,{careers:ts.careers}),divider:!0},{id:Ss.projects,name:"Projects",component:u(Ot,{projects:ts.projects})}],Aa={footer:p({backgroundColor:h.dark})};function $a(){return m.useEffect(()=>{const s=sessionStorage.getItem("scroll");s&&window.scrollTo(0,parseFloat(s))},[]),m.useEffect(()=>{const s=()=>{sessionStorage.setItem("scroll",window.scrollY.toString())};return window.addEventListener("beforeunload",s),()=>{window.removeEventListener("beforeunload",s)}},[]),W(en,{children:[u(Ft,{menus:$n}),u(Rt,{name:ts.name,aka:ts.aka}),u(xs,{children:$n.map(s=>W(m.Fragment,{children:[W(Us,{children:[u(Us.Title,{id:s.id,children:s.name}),s.component]}),s.divider&&u("hr",{})]},s.id))}),u("div",{css:Aa.footer,children:u(xs,{children:u(wt,{contacts:ts.contacts})})})]})}const Ia="/portfolio/assets/NanumSquareNeo-bRg-subset-CvTTexO4.woff",Ma="/portfolio/assets/NanumSquareNeo-bRg-subset-Czk0bR3U.woff2",Oa="/portfolio/assets/NanumSquareNeo-cBd-subset-D1tSDoIJ.woff",Na="/portfolio/assets/NanumSquareNeo-cBd-subset-CU4oSh0x.woff2",La=p("@font-face{font-family:'NanumSquare Neo';font-weight:400;font-display:swap;src:local('NanumSquare Neo'),url(",Ma,") format(woff2),url(",Ia,") format(woff);}@font-face{font-family:'NanumSquare Neo';font-weight:700;font-display:swap;src:local('NanumSquare Neo'),url(",Na,") format(woff2),url(",Oa,") format(woff);}*{margin:0;padding:0;box-sizing:border-box;line-height:1.5;text-underline-offset:0.3em;}:root{font-family:'NanumSquare Neo',system-ui,sans-serif;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-font-smoothing:grayscale;color:",h.dark87,";background-color:",h.lightGray,";}ul,ol{list-style:none;}button{background-color:transparent;border:0;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;transition:color 0.2s,background-color 0.3s;}button:not(:disabled),[type='button']:not(:disabled){cursor:pointer;}hr{border-color:",h.dark12,";}");Js(async()=>{const{createRoot:s}=await import("./client-eHLDoCux.js").then(n=>n.c);return{createRoot:s}},__vite__mapDeps([3,1])).then(({createRoot:s})=>s(document.getElementById("root")).render(W(m.StrictMode,{children:[u(it,{styles:La}),u($a,{})]})));export{en as F,yt as I,m as a,W as b,h as c,p as d,ys as e,Pt as f,ie as g,Rs as h,tn as i,u as j,gt as k,dt as l,Da as m,za as n,fe as r,rs as s,jt as u};
