function ks(e,t){for(var n=0;n<t.length;n++){const s=t[n];if(typeof s!="string"&&!Array.isArray(s)){for(const a in s)if(a!=="default"&&!(a in e)){const r=Object.getOwnPropertyDescriptor(s,a);r&&Object.defineProperty(e,a,r.get?r:{enumerable:!0,get:()=>s[a]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const r of a)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const r={};return a.integrity&&(r.integrity=a.integrity),a.referrerPolicy&&(r.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?r.credentials="include":a.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(a){if(a.ep)return;a.ep=!0;const r=n(a);fetch(a.href,r)}})();const Cs="modulepreload",Es=function(e){return"/portfolio/"+e},Jt={},_n=function(t,n,s){let a=Promise.resolve();if(n&&n.length>0){let o=function(p){return Promise.all(p.map(d=>Promise.resolve(d).then(m=>({status:"fulfilled",value:m}),m=>({status:"rejected",reason:m}))))};document.getElementsByTagName("link");const l=document.querySelector("meta[property=csp-nonce]"),c=(l==null?void 0:l.nonce)||(l==null?void 0:l.getAttribute("nonce"));a=o(n.map(p=>{if(p=Es(p),p in Jt)return;Jt[p]=!0;const d=p.endsWith(".css"),m=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${m}`))return;const y=document.createElement("link");if(y.rel=d?"stylesheet":Cs,d||(y.as="script"),y.crossOrigin="",y.href=p,c&&y.setAttribute("nonce",c),document.head.appendChild(y),d)return new Promise((j,f)=>{y.addEventListener("load",j),y.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${p}`)))})}))}function r(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return a.then(o=>{for(const l of o||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})};function Rs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var ct={exports:{}},Se={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Kt;function Fs(){if(Kt)return Se;Kt=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.fragment");function n(s,a,r){var o=null;if(r!==void 0&&(o=""+r),a.key!==void 0&&(o=""+a.key),"key"in a){r={};for(var l in a)l!=="key"&&(r[l]=a[l])}else r=a;return a=r.ref,{$$typeof:e,type:s,key:o,ref:a!==void 0?a:null,props:r}}return Se.Fragment=t,Se.jsx=n,Se.jsxs=n,Se}var Qt;function _s(){return Qt||(Qt=1,ct.exports=Fs()),ct.exports}var Te=_s(),pt={exports:{}},_={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Xt;function Ps(){if(Xt)return _;Xt=1;var e=Symbol.for("react.transitional.element"),t=Symbol.for("react.portal"),n=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),r=Symbol.for("react.consumer"),o=Symbol.for("react.context"),l=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;function y(i){return i===null||typeof i!="object"?null:(i=m&&i[m]||i["@@iterator"],typeof i=="function"?i:null)}var j={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},f=Object.assign,S={};function v(i,b,R){this.props=i,this.context=b,this.refs=S,this.updater=R||j}v.prototype.isReactComponent={},v.prototype.setState=function(i,b){if(typeof i!="object"&&typeof i!="function"&&i!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,i,b,"setState")},v.prototype.forceUpdate=function(i){this.updater.enqueueForceUpdate(this,i,"forceUpdate")};function g(){}g.prototype=v.prototype;function C(i,b,R){this.props=i,this.context=b,this.refs=S,this.updater=R||j}var x=C.prototype=new g;x.constructor=C,f(x,v.prototype),x.isPureReactComponent=!0;var T=Array.isArray,h={H:null,A:null,T:null,S:null},A=Object.prototype.hasOwnProperty;function P(i,b,R,F,I,W){return R=W.ref,{$$typeof:e,type:i,key:b,ref:R!==void 0?R:null,props:W}}function J(i,b){return P(i.type,b,void 0,void 0,void 0,i.props)}function H(i){return typeof i=="object"&&i!==null&&i.$$typeof===e}function K(i){var b={"=":"=0",":":"=2"};return"$"+i.replace(/[=:]/g,function(R){return b[R]})}var xe=/\/+/g;function it(i,b){return typeof i=="object"&&i!==null&&i.key!=null?K(""+i.key):b.toString(36)}function Gt(){}function js(i){switch(i.status){case"fulfilled":return i.value;case"rejected":throw i.reason;default:switch(typeof i.status=="string"?i.then(Gt,Gt):(i.status="pending",i.then(function(b){i.status==="pending"&&(i.status="fulfilled",i.value=b)},function(b){i.status==="pending"&&(i.status="rejected",i.reason=b)})),i.status){case"fulfilled":return i.value;case"rejected":throw i.reason}}throw i}function fe(i,b,R,F,I){var W=typeof i;(W==="undefined"||W==="boolean")&&(i=null);var $=!1;if(i===null)$=!0;else switch(W){case"bigint":case"string":case"number":$=!0;break;case"object":switch(i.$$typeof){case e:case t:$=!0;break;case d:return $=i._init,fe($(i._payload),b,R,F,I)}}if($)return I=I(i),$=F===""?"."+it(i,0):F,T(I)?(R="",$!=null&&(R=$.replace(xe,"$&/")+"/"),fe(I,b,R,"",function(Ss){return Ss})):I!=null&&(H(I)&&(I=J(I,R+(I.key==null||i&&i.key===I.key?"":(""+I.key).replace(xe,"$&/")+"/")+$)),b.push(I)),1;$=0;var le=F===""?".":F+":";if(T(i))for(var q=0;q<i.length;q++)F=i[q],W=le+it(F,q),$+=fe(F,b,R,W,I);else if(q=y(i),typeof q=="function")for(i=q.call(i),q=0;!(F=i.next()).done;)F=F.value,W=le+it(F,q++),$+=fe(F,b,R,W,I);else if(W==="object"){if(typeof i.then=="function")return fe(js(i),b,R,F,I);throw b=String(i),Error("Objects are not valid as a React child (found: "+(b==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.")}return $}function qe(i,b,R){if(i==null)return i;var F=[],I=0;return fe(i,F,"","",function(W){return b.call(R,W,I++)}),F}function vs(i){if(i._status===-1){var b=i._result;b=b(),b.then(function(R){(i._status===0||i._status===-1)&&(i._status=1,i._result=R)},function(R){(i._status===0||i._status===-1)&&(i._status=2,i._result=R)}),i._status===-1&&(i._status=0,i._result=b)}if(i._status===1)return i._result.default;throw i._result}var Yt=typeof reportError=="function"?reportError:function(i){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var b=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof i=="object"&&i!==null&&typeof i.message=="string"?String(i.message):String(i),error:i});if(!window.dispatchEvent(b))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",i);return}console.error(i)};function xs(){}return _.Children={map:qe,forEach:function(i,b,R){qe(i,function(){b.apply(this,arguments)},R)},count:function(i){var b=0;return qe(i,function(){b++}),b},toArray:function(i){return qe(i,function(b){return b})||[]},only:function(i){if(!H(i))throw Error("React.Children.only expected to receive a single React element child.");return i}},_.Component=v,_.Fragment=n,_.Profiler=a,_.PureComponent=C,_.StrictMode=s,_.Suspense=c,_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=h,_.act=function(){throw Error("act(...) is not supported in production builds of React.")},_.cache=function(i){return function(){return i.apply(null,arguments)}},_.cloneElement=function(i,b,R){if(i==null)throw Error("The argument must be a React element, but you passed "+i+".");var F=f({},i.props),I=i.key,W=void 0;if(b!=null)for($ in b.ref!==void 0&&(W=void 0),b.key!==void 0&&(I=""+b.key),b)!A.call(b,$)||$==="key"||$==="__self"||$==="__source"||$==="ref"&&b.ref===void 0||(F[$]=b[$]);var $=arguments.length-2;if($===1)F.children=R;else if(1<$){for(var le=Array($),q=0;q<$;q++)le[q]=arguments[q+2];F.children=le}return P(i.type,I,void 0,void 0,W,F)},_.createContext=function(i){return i={$$typeof:o,_currentValue:i,_currentValue2:i,_threadCount:0,Provider:null,Consumer:null},i.Provider=i,i.Consumer={$$typeof:r,_context:i},i},_.createElement=function(i,b,R){var F,I={},W=null;if(b!=null)for(F in b.key!==void 0&&(W=""+b.key),b)A.call(b,F)&&F!=="key"&&F!=="__self"&&F!=="__source"&&(I[F]=b[F]);var $=arguments.length-2;if($===1)I.children=R;else if(1<$){for(var le=Array($),q=0;q<$;q++)le[q]=arguments[q+2];I.children=le}if(i&&i.defaultProps)for(F in $=i.defaultProps,$)I[F]===void 0&&(I[F]=$[F]);return P(i,W,void 0,void 0,null,I)},_.createRef=function(){return{current:null}},_.forwardRef=function(i){return{$$typeof:l,render:i}},_.isValidElement=H,_.lazy=function(i){return{$$typeof:d,_payload:{_status:-1,_result:i},_init:vs}},_.memo=function(i,b){return{$$typeof:p,type:i,compare:b===void 0?null:b}},_.startTransition=function(i){var b=h.T,R={};h.T=R;try{var F=i(),I=h.S;I!==null&&I(R,F),typeof F=="object"&&F!==null&&typeof F.then=="function"&&F.then(xs,Yt)}catch(W){Yt(W)}finally{h.T=b}},_.unstable_useCacheRefresh=function(){return h.H.useCacheRefresh()},_.use=function(i){return h.H.use(i)},_.useActionState=function(i,b,R){return h.H.useActionState(i,b,R)},_.useCallback=function(i,b){return h.H.useCallback(i,b)},_.useContext=function(i){return h.H.useContext(i)},_.useDebugValue=function(){},_.useDeferredValue=function(i,b){return h.H.useDeferredValue(i,b)},_.useEffect=function(i,b){return h.H.useEffect(i,b)},_.useId=function(){return h.H.useId()},_.useImperativeHandle=function(i,b,R){return h.H.useImperativeHandle(i,b,R)},_.useInsertionEffect=function(i,b){return h.H.useInsertionEffect(i,b)},_.useLayoutEffect=function(i,b){return h.H.useLayoutEffect(i,b)},_.useMemo=function(i,b){return h.H.useMemo(i,b)},_.useOptimistic=function(i,b){return h.H.useOptimistic(i,b)},_.useReducer=function(i,b,R){return h.H.useReducer(i,b,R)},_.useRef=function(i){return h.H.useRef(i)},_.useState=function(i){return h.H.useState(i)},_.useSyncExternalStore=function(i,b,R){return h.H.useSyncExternalStore(i,b,R)},_.useTransition=function(){return h.H.useTransition()},_.version="19.0.0",_}var Zt;function Ts(){return Zt||(Zt=1,pt.exports=Ps()),pt.exports}var u=Ts();const $s=Rs(u),en=ks({__proto__:null,default:$s},[u]);function Is(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function As(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var Ls=function(){function e(n){var s=this;this._insertTag=function(a){var r;s.tags.length===0?s.insertionPoint?r=s.insertionPoint.nextSibling:s.prepend?r=s.container.firstChild:r=s.before:r=s.tags[s.tags.length-1].nextSibling,s.container.insertBefore(a,r),s.tags.push(a)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(s){s.forEach(this._insertTag)},t.insert=function(s){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(As(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var r=Is(a);try{r.insertRule(s,r.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(s));this.ctr++},t.flush=function(){this.tags.forEach(function(s){var a;return(a=s.parentNode)==null?void 0:a.removeChild(s)}),this.tags=[],this.ctr=0},e}(),V="-ms-",Xe="-moz-",L="-webkit-",Pn="comm",It="rule",At="decl",Ms="@import",Tn="@keyframes",Os="@layer",Ns=Math.abs,nt=String.fromCharCode,Ds=Object.assign;function Bs(e,t){return U(e,0)^45?(((t<<2^U(e,0))<<2^U(e,1))<<2^U(e,2))<<2^U(e,3):0}function $n(e){return e.trim()}function Ws(e,t){return(e=t.exec(e))?e[0]:e}function M(e,t,n){return e.replace(t,n)}function St(e,t){return e.indexOf(t)}function U(e,t){return e.charCodeAt(t)|0}function $e(e,t,n){return e.slice(t,n)}function Q(e){return e.length}function Lt(e){return e.length}function He(e,t){return t.push(e),e}function zs(e,t){return e.map(t).join("")}var st=1,ye=1,In=0,G=0,z=0,we="";function at(e,t,n,s,a,r,o){return{value:e,root:t,parent:n,type:s,props:a,children:r,line:st,column:ye,length:o,return:""}}function ke(e,t){return Ds(at("",null,null,"",null,null,0),e,{length:-e.length},t)}function qs(){return z}function Hs(){return z=G>0?U(we,--G):0,ye--,z===10&&(ye=1,st--),z}function Y(){return z=G<In?U(we,G++):0,ye++,z===10&&(ye=1,st++),z}function Z(){return U(we,G)}function Ge(){return G}function Oe(e,t){return $e(we,e,t)}function Ie(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function An(e){return st=ye=1,In=Q(we=e),G=0,[]}function Ln(e){return we="",e}function Ye(e){return $n(Oe(G-1,kt(e===91?e+2:e===40?e+1:e)))}function Us(e){for(;(z=Z())&&z<33;)Y();return Ie(e)>2||Ie(z)>3?"":" "}function Vs(e,t){for(;--t&&Y()&&!(z<48||z>102||z>57&&z<65||z>70&&z<97););return Oe(e,Ge()+(t<6&&Z()==32&&Y()==32))}function kt(e){for(;Y();)switch(z){case e:return G;case 34:case 39:e!==34&&e!==39&&kt(z);break;case 40:e===41&&kt(e);break;case 92:Y();break}return G}function Gs(e,t){for(;Y()&&e+z!==57;)if(e+z===84&&Z()===47)break;return"/*"+Oe(t,G-1)+"*"+nt(e===47?e:Y())}function Ys(e){for(;!Ie(Z());)Y();return Oe(e,G)}function Js(e){return Ln(Je("",null,null,null,[""],e=An(e),0,[0],e))}function Je(e,t,n,s,a,r,o,l,c){for(var p=0,d=0,m=o,y=0,j=0,f=0,S=1,v=1,g=1,C=0,x="",T=a,h=r,A=s,P=x;v;)switch(f=C,C=Y()){case 40:if(f!=108&&U(P,m-1)==58){St(P+=M(Ye(C),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:P+=Ye(C);break;case 9:case 10:case 13:case 32:P+=Us(f);break;case 92:P+=Vs(Ge()-1,7);continue;case 47:switch(Z()){case 42:case 47:He(Ks(Gs(Y(),Ge()),t,n),c);break;default:P+="/"}break;case 123*S:l[p++]=Q(P)*g;case 125*S:case 59:case 0:switch(C){case 0:case 125:v=0;case 59+d:g==-1&&(P=M(P,/\f/g,"")),j>0&&Q(P)-m&&He(j>32?nn(P+";",s,n,m-1):nn(M(P," ","")+";",s,n,m-2),c);break;case 59:P+=";";default:if(He(A=tn(P,t,n,p,d,a,l,x,T=[],h=[],m),r),C===123)if(d===0)Je(P,t,A,A,T,r,m,l,h);else switch(y===99&&U(P,3)===110?100:y){case 100:case 108:case 109:case 115:Je(e,A,A,s&&He(tn(e,A,A,0,0,a,l,x,a,T=[],m),h),a,h,m,l,s?T:h);break;default:Je(P,A,A,A,[""],h,0,l,h)}}p=d=j=0,S=g=1,x=P="",m=o;break;case 58:m=1+Q(P),j=f;default:if(S<1){if(C==123)--S;else if(C==125&&S++==0&&Hs()==125)continue}switch(P+=nt(C),C*S){case 38:g=d>0?1:(P+="\f",-1);break;case 44:l[p++]=(Q(P)-1)*g,g=1;break;case 64:Z()===45&&(P+=Ye(Y())),y=Z(),d=m=Q(x=P+=Ys(Ge())),C++;break;case 45:f===45&&Q(P)==2&&(S=0)}}return r}function tn(e,t,n,s,a,r,o,l,c,p,d){for(var m=a-1,y=a===0?r:[""],j=Lt(y),f=0,S=0,v=0;f<s;++f)for(var g=0,C=$e(e,m+1,m=Ns(S=o[f])),x=e;g<j;++g)(x=$n(S>0?y[g]+" "+C:M(C,/&\f/g,y[g])))&&(c[v++]=x);return at(e,t,n,a===0?It:l,c,p,d)}function Ks(e,t,n){return at(e,t,n,Pn,nt(qs()),$e(e,2,-2),0)}function nn(e,t,n,s){return at(e,t,n,At,$e(e,0,s),$e(e,s+1,-1),s)}function ge(e,t){for(var n="",s=Lt(e),a=0;a<s;a++)n+=t(e[a],a,e,t)||"";return n}function Qs(e,t,n,s){switch(e.type){case Os:if(e.children.length)break;case Ms:case At:return e.return=e.return||e.value;case Pn:return"";case Tn:return e.return=e.value+"{"+ge(e.children,s)+"}";case It:e.value=e.props.join(",")}return Q(n=ge(e.children,s))?e.return=e.value+"{"+n+"}":""}function Xs(e){var t=Lt(e);return function(n,s,a,r){for(var o="",l=0;l<t;l++)o+=e[l](n,s,a,r)||"";return o}}function Zs(e){return function(t){t.root||(t=t.return)&&e(t)}}function ea(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var ta=function(t,n,s){for(var a=0,r=0;a=r,r=Z(),a===38&&r===12&&(n[s]=1),!Ie(r);)Y();return Oe(t,G)},na=function(t,n){var s=-1,a=44;do switch(Ie(a)){case 0:a===38&&Z()===12&&(n[s]=1),t[s]+=ta(G-1,n,s);break;case 2:t[s]+=Ye(a);break;case 4:if(a===44){t[++s]=Z()===58?"&\f":"",n[s]=t[s].length;break}default:t[s]+=nt(a)}while(a=Y());return t},sa=function(t,n){return Ln(na(An(t),n))},sn=new WeakMap,aa=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,s=t.parent,a=t.column===s.column&&t.line===s.line;s.type!=="rule";)if(s=s.parent,!s)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!sn.get(s))&&!a){sn.set(t,!0);for(var r=[],o=sa(n,r),l=s.props,c=0,p=0;c<o.length;c++)for(var d=0;d<l.length;d++,p++)t.props[p]=r[c]?o[c].replace(/&\f/g,l[d]):l[d]+" "+o[c]}}},ra=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Mn(e,t){switch(Bs(e,t)){case 5103:return L+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return L+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return L+e+Xe+e+V+e+e;case 6828:case 4268:return L+e+V+e+e;case 6165:return L+e+V+"flex-"+e+e;case 5187:return L+e+M(e,/(\w+).+(:[^]+)/,L+"box-$1$2"+V+"flex-$1$2")+e;case 5443:return L+e+V+"flex-item-"+M(e,/flex-|-self/,"")+e;case 4675:return L+e+V+"flex-line-pack"+M(e,/align-content|flex-|-self/,"")+e;case 5548:return L+e+V+M(e,"shrink","negative")+e;case 5292:return L+e+V+M(e,"basis","preferred-size")+e;case 6060:return L+"box-"+M(e,"-grow","")+L+e+V+M(e,"grow","positive")+e;case 4554:return L+M(e,/([^-])(transform)/g,"$1"+L+"$2")+e;case 6187:return M(M(M(e,/(zoom-|grab)/,L+"$1"),/(image-set)/,L+"$1"),e,"")+e;case 5495:case 3959:return M(e,/(image-set\([^]*)/,L+"$1$`$1");case 4968:return M(M(e,/(.+:)(flex-)?(.*)/,L+"box-pack:$3"+V+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+L+e+e;case 4095:case 3583:case 4068:case 2532:return M(e,/(.+)-inline(.+)/,L+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(Q(e)-1-t>6)switch(U(e,t+1)){case 109:if(U(e,t+4)!==45)break;case 102:return M(e,/(.+:)(.+)-([^]+)/,"$1"+L+"$2-$3$1"+Xe+(U(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~St(e,"stretch")?Mn(M(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(U(e,t+1)!==115)break;case 6444:switch(U(e,Q(e)-3-(~St(e,"!important")&&10))){case 107:return M(e,":",":"+L)+e;case 101:return M(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+L+(U(e,14)===45?"inline-":"")+"box$3$1"+L+"$2$3$1"+V+"$2box$3")+e}break;case 5936:switch(U(e,t+11)){case 114:return L+e+V+M(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return L+e+V+M(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return L+e+V+M(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return L+e+V+e+e}return e}var oa=function(t,n,s,a){if(t.length>-1&&!t.return)switch(t.type){case At:t.return=Mn(t.value,t.length);break;case Tn:return ge([ke(t,{value:M(t.value,"@","@"+L)})],a);case It:if(t.length)return zs(t.props,function(r){switch(Ws(r,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ge([ke(t,{props:[M(r,/:(read-\w+)/,":"+Xe+"$1")]})],a);case"::placeholder":return ge([ke(t,{props:[M(r,/:(plac\w+)/,":"+L+"input-$1")]}),ke(t,{props:[M(r,/:(plac\w+)/,":"+Xe+"$1")]}),ke(t,{props:[M(r,/:(plac\w+)/,V+"input-$1")]})],a)}return""})}},la=[oa],ia=function(t){var n=t.key;if(n==="css"){var s=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(s,function(S){var v=S.getAttribute("data-emotion");v.indexOf(" ")!==-1&&(document.head.appendChild(S),S.setAttribute("data-s",""))})}var a=t.stylisPlugins||la,r={},o,l=[];o=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(S){for(var v=S.getAttribute("data-emotion").split(" "),g=1;g<v.length;g++)r[v[g]]=!0;l.push(S)});var c,p=[aa,ra];{var d,m=[Qs,Zs(function(S){d.insert(S)})],y=Xs(p.concat(a,m)),j=function(v){return ge(Js(v),y)};c=function(v,g,C,x){d=C,j(v?v+"{"+g.styles+"}":g.styles),x&&(f.inserted[g.name]=!0)}}var f={key:n,sheet:new Ls({key:n,container:o,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:r,registered:{},insert:c};return f.sheet.hydrate(l),f},ut={exports:{}},O={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var an;function ca(){if(an)return O;an=1;var e=typeof Symbol=="function"&&Symbol.for,t=e?Symbol.for("react.element"):60103,n=e?Symbol.for("react.portal"):60106,s=e?Symbol.for("react.fragment"):60107,a=e?Symbol.for("react.strict_mode"):60108,r=e?Symbol.for("react.profiler"):60114,o=e?Symbol.for("react.provider"):60109,l=e?Symbol.for("react.context"):60110,c=e?Symbol.for("react.async_mode"):60111,p=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,m=e?Symbol.for("react.suspense"):60113,y=e?Symbol.for("react.suspense_list"):60120,j=e?Symbol.for("react.memo"):60115,f=e?Symbol.for("react.lazy"):60116,S=e?Symbol.for("react.block"):60121,v=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,C=e?Symbol.for("react.scope"):60119;function x(h){if(typeof h=="object"&&h!==null){var A=h.$$typeof;switch(A){case t:switch(h=h.type,h){case c:case p:case s:case r:case a:case m:return h;default:switch(h=h&&h.$$typeof,h){case l:case d:case f:case j:case o:return h;default:return A}}case n:return A}}}function T(h){return x(h)===p}return O.AsyncMode=c,O.ConcurrentMode=p,O.ContextConsumer=l,O.ContextProvider=o,O.Element=t,O.ForwardRef=d,O.Fragment=s,O.Lazy=f,O.Memo=j,O.Portal=n,O.Profiler=r,O.StrictMode=a,O.Suspense=m,O.isAsyncMode=function(h){return T(h)||x(h)===c},O.isConcurrentMode=T,O.isContextConsumer=function(h){return x(h)===l},O.isContextProvider=function(h){return x(h)===o},O.isElement=function(h){return typeof h=="object"&&h!==null&&h.$$typeof===t},O.isForwardRef=function(h){return x(h)===d},O.isFragment=function(h){return x(h)===s},O.isLazy=function(h){return x(h)===f},O.isMemo=function(h){return x(h)===j},O.isPortal=function(h){return x(h)===n},O.isProfiler=function(h){return x(h)===r},O.isStrictMode=function(h){return x(h)===a},O.isSuspense=function(h){return x(h)===m},O.isValidElementType=function(h){return typeof h=="string"||typeof h=="function"||h===s||h===p||h===r||h===a||h===m||h===y||typeof h=="object"&&h!==null&&(h.$$typeof===f||h.$$typeof===j||h.$$typeof===o||h.$$typeof===l||h.$$typeof===d||h.$$typeof===v||h.$$typeof===g||h.$$typeof===C||h.$$typeof===S)},O.typeOf=x,O}var rn;function pa(){return rn||(rn=1,ut.exports=ca()),ut.exports}var dt,on;function ua(){if(on)return dt;on=1;var e=pa(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},n={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},s={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},a={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},r={};r[e.ForwardRef]=s,r[e.Memo]=a;function o(f){return e.isMemo(f)?a:r[f.$$typeof]||t}var l=Object.defineProperty,c=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,m=Object.getPrototypeOf,y=Object.prototype;function j(f,S,v){if(typeof S!="string"){if(y){var g=m(S);g&&g!==y&&j(f,g,v)}var C=c(S);p&&(C=C.concat(p(S)));for(var x=o(f),T=o(S),h=0;h<C.length;++h){var A=C[h];if(!n[A]&&!(v&&v[A])&&!(T&&T[A])&&!(x&&x[A])){var P=d(S,A);try{l(f,A,P)}catch{}}}}return f}return dt=j,dt}ua();var da=!0;function fa(e,t,n){var s="";return n.split(" ").forEach(function(a){e[a]!==void 0?t.push(e[a]+";"):a&&(s+=a+" ")}),s}var On=function(t,n,s){var a=t.key+"-"+n.name;(s===!1||da===!1)&&t.registered[a]===void 0&&(t.registered[a]=n.styles)},Nn=function(t,n,s){On(t,n,s);var a=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var r=n;do t.insert(n===r?"."+a:"",r,t.sheet,!0),r=r.next;while(r!==void 0)}};function ha(e){for(var t=0,n,s=0,a=e.length;a>=4;++s,a-=4)n=e.charCodeAt(s)&255|(e.charCodeAt(++s)&255)<<8|(e.charCodeAt(++s)&255)<<16|(e.charCodeAt(++s)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(a){case 3:t^=(e.charCodeAt(s+2)&255)<<16;case 2:t^=(e.charCodeAt(s+1)&255)<<8;case 1:t^=e.charCodeAt(s)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var ga={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},ma=/[A-Z]|^ms/g,ya=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Dn=function(t){return t.charCodeAt(1)===45},ln=function(t){return t!=null&&typeof t!="boolean"},ft=ea(function(e){return Dn(e)?e:e.replace(ma,"-$&").toLowerCase()}),cn=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(ya,function(s,a,r){return X={name:a,styles:r,next:X},a})}return ga[t]!==1&&!Dn(t)&&typeof n=="number"&&n!==0?n+"px":n};function Ae(e,t,n){if(n==null)return"";var s=n;if(s.__emotion_styles!==void 0)return s;switch(typeof n){case"boolean":return"";case"object":{var a=n;if(a.anim===1)return X={name:a.name,styles:a.styles,next:X},a.name;var r=n;if(r.styles!==void 0){var o=r.next;if(o!==void 0)for(;o!==void 0;)X={name:o.name,styles:o.styles,next:X},o=o.next;var l=r.styles+";";return l}return wa(e,t,n)}case"function":{if(e!==void 0){var c=X,p=n(e);return X=c,Ae(e,t,p)}break}}var d=n;return d}function wa(e,t,n){var s="";if(Array.isArray(n))for(var a=0;a<n.length;a++)s+=Ae(e,t,n[a])+";";else for(var r in n){var o=n[r];if(typeof o!="object"){var l=o;ln(l)&&(s+=ft(r)+":"+cn(r,l)+";")}else if(Array.isArray(o)&&typeof o[0]=="string"&&t==null)for(var c=0;c<o.length;c++)ln(o[c])&&(s+=ft(r)+":"+cn(r,o[c])+";");else{var p=Ae(e,t,o);switch(r){case"animation":case"animationName":{s+=ft(r)+":"+p+";";break}default:s+=r+"{"+p+"}"}}}return s}var pn=/label:\s*([^\s;{]+)\s*(;|$)/g,X;function Mt(e,t,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var s=!0,a="";X=void 0;var r=e[0];if(r==null||r.raw===void 0)s=!1,a+=Ae(n,t,r);else{var o=r;a+=o[0]}for(var l=1;l<e.length;l++)if(a+=Ae(n,t,e[l]),s){var c=r;a+=c[l]}pn.lastIndex=0;for(var p="",d;(d=pn.exec(a))!==null;)p+="-"+d[1];var m=ha(a)+p;return{name:m,styles:a,next:X}}var ba=function(t){return t()},Bn=en.useInsertionEffect?en.useInsertionEffect:!1,ja=Bn||ba,un=Bn||u.useLayoutEffect,Wn=u.createContext(typeof HTMLElement<"u"?ia({key:"css"}):null);Wn.Provider;var zn=function(t){return u.forwardRef(function(n,s){var a=u.useContext(Wn);return t(n,a,s)})},qn=u.createContext({}),Ne={}.hasOwnProperty,Ct="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ot=function(t,n){var s={};for(var a in n)Ne.call(n,a)&&(s[a]=n[a]);return s[Ct]=t,s},va=function(t){var n=t.cache,s=t.serialized,a=t.isStringTag;return On(n,s,a),ja(function(){return Nn(n,s,a)}),null},xa=zn(function(e,t,n){var s=e.css;typeof s=="string"&&t.registered[s]!==void 0&&(s=t.registered[s]);var a=e[Ct],r=[s],o="";typeof e.className=="string"?o=fa(t.registered,r,e.className):e.className!=null&&(o=e.className+" ");var l=Mt(r,void 0,u.useContext(qn));o+=t.key+"-"+l.name;var c={};for(var p in e)Ne.call(e,p)&&p!=="css"&&p!==Ct&&(c[p]=e[p]);return c.className=o,n&&(c.ref=n),u.createElement(u.Fragment,null,u.createElement(va,{cache:t,serialized:l,isStringTag:typeof a=="string"}),u.createElement(a,c))}),Nt=xa,de=Te.Fragment,w=function(t,n,s){return Ne.call(n,"css")?Te.jsx(Nt,Ot(t,n),s):Te.jsx(t,n,s)},D=function(t,n,s){return Ne.call(n,"css")?Te.jsxs(Nt,Ot(t,n),s):Te.jsxs(t,n,s)},dn=function(t,n){var s=arguments;if(n==null||!Ne.call(n,"css"))return u.createElement.apply(void 0,s);var a=s.length,r=new Array(a);r[0]=Nt,r[1]=Ot(t,n);for(var o=2;o<a;o++)r[o]=s[o];return u.createElement.apply(null,r)};(function(e){var t;t||(t=e.JSX||(e.JSX={}))})(dn||(dn={}));var Sa=zn(function(e,t){var n=e.styles,s=Mt([n],void 0,u.useContext(qn)),a=u.useRef();return un(function(){var r=t.key+"-global",o=new t.sheet.constructor({key:r,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),l=!1,c=document.querySelector('style[data-emotion="'+r+" "+s.name+'"]');return t.sheet.tags.length&&(o.before=t.sheet.tags[0]),c!==null&&(l=!0,c.setAttribute("data-emotion",r),o.hydrate([c])),a.current=[o,l],function(){o.flush()}},[t]),un(function(){var r=a.current,o=r[0],l=r[1];if(l){r[1]=!1;return}if(s.next!==void 0&&Nn(t,s.next,!0),o.tags.length){var c=o.tags[o.tags.length-1].nextElementSibling;o.before=c,o.flush()}t.insert("",s,o,!1)},[t,s.name]),null});function k(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return Mt(t)}var Ce={},fn;function ka(){if(fn)return Ce;fn=1,Object.defineProperty(Ce,"__esModule",{value:!0}),Ce.parse=o,Ce.serialize=p;const e=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,t=/^[\u0021-\u003A\u003C-\u007E]*$/,n=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/,a=Object.prototype.toString,r=(()=>{const y=function(){};return y.prototype=Object.create(null),y})();function o(y,j){const f=new r,S=y.length;if(S<2)return f;const v=(j==null?void 0:j.decode)||d;let g=0;do{const C=y.indexOf("=",g);if(C===-1)break;const x=y.indexOf(";",g),T=x===-1?S:x;if(C>T){g=y.lastIndexOf(";",C-1)+1;continue}const h=l(y,g,C),A=c(y,C,h),P=y.slice(h,A);if(f[P]===void 0){let J=l(y,C+1,T),H=c(y,T,J);const K=v(y.slice(J,H));f[P]=K}g=T+1}while(g<S);return f}function l(y,j,f){do{const S=y.charCodeAt(j);if(S!==32&&S!==9)return j}while(++j<f);return f}function c(y,j,f){for(;j>f;){const S=y.charCodeAt(--j);if(S!==32&&S!==9)return j+1}return f}function p(y,j,f){const S=(f==null?void 0:f.encode)||encodeURIComponent;if(!e.test(y))throw new TypeError(`argument name is invalid: ${y}`);const v=S(j);if(!t.test(v))throw new TypeError(`argument val is invalid: ${j}`);let g=y+"="+v;if(!f)return g;if(f.maxAge!==void 0){if(!Number.isInteger(f.maxAge))throw new TypeError(`option maxAge is invalid: ${f.maxAge}`);g+="; Max-Age="+f.maxAge}if(f.domain){if(!n.test(f.domain))throw new TypeError(`option domain is invalid: ${f.domain}`);g+="; Domain="+f.domain}if(f.path){if(!s.test(f.path))throw new TypeError(`option path is invalid: ${f.path}`);g+="; Path="+f.path}if(f.expires){if(!m(f.expires)||!Number.isFinite(f.expires.valueOf()))throw new TypeError(`option expires is invalid: ${f.expires}`);g+="; Expires="+f.expires.toUTCString()}if(f.httpOnly&&(g+="; HttpOnly"),f.secure&&(g+="; Secure"),f.partitioned&&(g+="; Partitioned"),f.priority)switch(typeof f.priority=="string"?f.priority.toLowerCase():void 0){case"low":g+="; Priority=Low";break;case"medium":g+="; Priority=Medium";break;case"high":g+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${f.priority}`)}if(f.sameSite)switch(typeof f.sameSite=="string"?f.sameSite.toLowerCase():f.sameSite){case!0:case"strict":g+="; SameSite=Strict";break;case"lax":g+="; SameSite=Lax";break;case"none":g+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${f.sameSite}`)}return g}function d(y){if(y.indexOf("%")===-1)return y;try{return decodeURIComponent(y)}catch{return y}}function m(y){return a.call(y)==="[object Date]"}return Ce}ka();/**
 * react-router v7.5.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var hn="popstate";function Ca(e={}){function t(s,a){let{pathname:r,search:o,hash:l}=s.location;return Et("",{pathname:r,search:o,hash:l},a.state&&a.state.usr||null,a.state&&a.state.key||"default")}function n(s,a){return typeof a=="string"?a:Le(a)}return Ra(t,n,null,e)}function B(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function ee(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function Ea(){return Math.random().toString(36).substring(2,10)}function gn(e,t){return{usr:e.state,key:e.key,idx:t}}function Et(e,t,n=null,s){return{pathname:typeof e=="string"?e:e.pathname,search:"",hash:"",...typeof t=="string"?be(t):t,state:n,key:t&&t.key||s||Ea()}}function Le({pathname:e="/",search:t="",hash:n=""}){return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),n&&n!=="#"&&(e+=n.charAt(0)==="#"?n:"#"+n),e}function be(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substring(n),e=e.substring(0,n));let s=e.indexOf("?");s>=0&&(t.search=e.substring(s),e=e.substring(0,s)),e&&(t.pathname=e)}return t}function Ra(e,t,n,s={}){let{window:a=document.defaultView,v5Compat:r=!1}=s,o=a.history,l="POP",c=null,p=d();p==null&&(p=0,o.replaceState({...o.state,idx:p},""));function d(){return(o.state||{idx:null}).idx}function m(){l="POP";let v=d(),g=v==null?null:v-p;p=v,c&&c({action:l,location:S.location,delta:g})}function y(v,g){l="PUSH";let C=Et(S.location,v,g);p=d()+1;let x=gn(C,p),T=S.createHref(C);try{o.pushState(x,"",T)}catch(h){if(h instanceof DOMException&&h.name==="DataCloneError")throw h;a.location.assign(T)}r&&c&&c({action:l,location:S.location,delta:1})}function j(v,g){l="REPLACE";let C=Et(S.location,v,g);p=d();let x=gn(C,p),T=S.createHref(C);o.replaceState(x,"",T),r&&c&&c({action:l,location:S.location,delta:0})}function f(v){let g=a.location.origin!=="null"?a.location.origin:a.location.href,C=typeof v=="string"?v:Le(v);return C=C.replace(/ $/,"%20"),B(g,`No window.location.(origin|href) available to create URL for href: ${C}`),new URL(C,g)}let S={get action(){return l},get location(){return e(a,o)},listen(v){if(c)throw new Error("A history only accepts one active listener");return a.addEventListener(hn,m),c=v,()=>{a.removeEventListener(hn,m),c=null}},createHref(v){return t(a,v)},createURL:f,encodeLocation(v){let g=f(v);return{pathname:g.pathname,search:g.search,hash:g.hash}},push:y,replace:j,go(v){return o.go(v)}};return S}function Hn(e,t,n="/"){return Fa(e,t,n,!1)}function Fa(e,t,n,s){let a=typeof t=="string"?be(t):t,r=re(a.pathname||"/",n);if(r==null)return null;let o=Un(e);_a(o);let l=null;for(let c=0;l==null&&c<o.length;++c){let p=Ba(r);l=Na(o[c],p,s)}return l}function Un(e,t=[],n=[],s=""){let a=(r,o,l)=>{let c={relativePath:l===void 0?r.path||"":l,caseSensitive:r.caseSensitive===!0,childrenIndex:o,route:r};c.relativePath.startsWith("/")&&(B(c.relativePath.startsWith(s),`Absolute route path "${c.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),c.relativePath=c.relativePath.slice(s.length));let p=ae([s,c.relativePath]),d=n.concat(c);r.children&&r.children.length>0&&(B(r.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${p}".`),Un(r.children,t,d,p)),!(r.path==null&&!r.index)&&t.push({path:p,score:Ma(p,r.index),routesMeta:d})};return e.forEach((r,o)=>{var l;if(r.path===""||!((l=r.path)!=null&&l.includes("?")))a(r,o);else for(let c of Vn(r.path))a(r,o,c)}),t}function Vn(e){let t=e.split("/");if(t.length===0)return[];let[n,...s]=t,a=n.endsWith("?"),r=n.replace(/\?$/,"");if(s.length===0)return a?[r,""]:[r];let o=Vn(s.join("/")),l=[];return l.push(...o.map(c=>c===""?r:[r,c].join("/"))),a&&l.push(...o),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function _a(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:Oa(t.routesMeta.map(s=>s.childrenIndex),n.routesMeta.map(s=>s.childrenIndex)))}var Pa=/^:[\w-]+$/,Ta=3,$a=2,Ia=1,Aa=10,La=-2,mn=e=>e==="*";function Ma(e,t){let n=e.split("/"),s=n.length;return n.some(mn)&&(s+=La),t&&(s+=$a),n.filter(a=>!mn(a)).reduce((a,r)=>a+(Pa.test(r)?Ta:r===""?Ia:Aa),s)}function Oa(e,t){return e.length===t.length&&e.slice(0,-1).every((s,a)=>s===t[a])?e[e.length-1]-t[t.length-1]:0}function Na(e,t,n=!1){let{routesMeta:s}=e,a={},r="/",o=[];for(let l=0;l<s.length;++l){let c=s[l],p=l===s.length-1,d=r==="/"?t:t.slice(r.length)||"/",m=Ze({path:c.relativePath,caseSensitive:c.caseSensitive,end:p},d),y=c.route;if(!m&&p&&n&&!s[s.length-1].route.index&&(m=Ze({path:c.relativePath,caseSensitive:c.caseSensitive,end:!1},d)),!m)return null;Object.assign(a,m.params),o.push({params:a,pathname:ae([r,m.pathname]),pathnameBase:Ha(ae([r,m.pathnameBase])),route:y}),m.pathnameBase!=="/"&&(r=ae([r,m.pathnameBase]))}return o}function Ze(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,s]=Da(e.path,e.caseSensitive,e.end),a=t.match(n);if(!a)return null;let r=a[0],o=r.replace(/(.)\/+$/,"$1"),l=a.slice(1);return{params:s.reduce((p,{paramName:d,isOptional:m},y)=>{if(d==="*"){let f=l[y]||"";o=r.slice(0,r.length-f.length).replace(/(.)\/+$/,"$1")}const j=l[y];return m&&!j?p[d]=void 0:p[d]=(j||"").replace(/%2F/g,"/"),p},{}),pathname:r,pathnameBase:o,pattern:e}}function Da(e,t=!1,n=!0){ee(e==="*"||!e.endsWith("*")||e.endsWith("/*"),`Route path "${e}" will be treated as if it were "${e.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${e.replace(/\*$/,"/*")}".`);let s=[],a="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,c)=>(s.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(s.push({paramName:"*"}),a+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?a+="\\/*$":e!==""&&e!=="/"&&(a+="(?:(?=\\/|$))"),[new RegExp(a,t?void 0:"i"),s]}function Ba(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return ee(!1,`The URL path "${e}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${t}).`),e}}function re(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,s=e.charAt(n);return s&&s!=="/"?null:e.slice(n)||"/"}function Wa(e,t="/"){let{pathname:n,search:s="",hash:a=""}=typeof e=="string"?be(e):e;return{pathname:n?n.startsWith("/")?n:za(n,t):t,search:Ua(s),hash:Va(a)}}function za(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(a=>{a===".."?n.length>1&&n.pop():a!=="."&&n.push(a)}),n.length>1?n.join("/"):"/"}function ht(e,t,n,s){return`Cannot include a '${e}' character in a manually specified \`to.${t}\` field [${JSON.stringify(s)}].  Please separate it out to the \`to.${n}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function qa(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function Gn(e){let t=qa(e);return t.map((n,s)=>s===t.length-1?n.pathname:n.pathnameBase)}function Yn(e,t,n,s=!1){let a;typeof e=="string"?a=be(e):(a={...e},B(!a.pathname||!a.pathname.includes("?"),ht("?","pathname","search",a)),B(!a.pathname||!a.pathname.includes("#"),ht("#","pathname","hash",a)),B(!a.search||!a.search.includes("#"),ht("#","search","hash",a)));let r=e===""||a.pathname==="",o=r?"/":a.pathname,l;if(o==null)l=n;else{let m=t.length-1;if(!s&&o.startsWith("..")){let y=o.split("/");for(;y[0]==="..";)y.shift(),m-=1;a.pathname=y.join("/")}l=m>=0?t[m]:"/"}let c=Wa(a,l),p=o&&o!=="/"&&o.endsWith("/"),d=(r||o===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(p||d)&&(c.pathname+="/"),c}var ae=e=>e.join("/").replace(/\/\/+/g,"/"),Ha=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),Ua=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,Va=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function Ga(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}var Jn=["POST","PUT","PATCH","DELETE"];new Set(Jn);var Ya=["GET",...Jn];new Set(Ya);var je=u.createContext(null);je.displayName="DataRouter";var rt=u.createContext(null);rt.displayName="DataRouterState";var Kn=u.createContext({isTransitioning:!1});Kn.displayName="ViewTransition";var Ja=u.createContext(new Map);Ja.displayName="Fetchers";var Ka=u.createContext(null);Ka.displayName="Await";var te=u.createContext(null);te.displayName="Navigation";var De=u.createContext(null);De.displayName="Location";var ne=u.createContext({outlet:null,matches:[],isDataRoute:!1});ne.displayName="Route";var Dt=u.createContext(null);Dt.displayName="RouteError";function Qa(e,{relative:t}={}){B(Be(),"useHref() may be used only in the context of a <Router> component.");let{basename:n,navigator:s}=u.useContext(te),{hash:a,pathname:r,search:o}=ze(e,{relative:t}),l=r;return n!=="/"&&(l=r==="/"?n:ae([n,r])),s.createHref({pathname:l,search:o,hash:a})}function Be(){return u.useContext(De)!=null}function oe(){return B(Be(),"useLocation() may be used only in the context of a <Router> component."),u.useContext(De).location}var Qn="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function Xn(e){u.useContext(te).static||u.useLayoutEffect(e)}function We(){let{isDataRoute:e}=u.useContext(ne);return e?ur():Xa()}function Xa(){B(Be(),"useNavigate() may be used only in the context of a <Router> component.");let e=u.useContext(je),{basename:t,navigator:n}=u.useContext(te),{matches:s}=u.useContext(ne),{pathname:a}=oe(),r=JSON.stringify(Gn(s)),o=u.useRef(!1);return Xn(()=>{o.current=!0}),u.useCallback((c,p={})=>{if(ee(o.current,Qn),!o.current)return;if(typeof c=="number"){n.go(c);return}let d=Yn(c,JSON.parse(r),a,p.relative==="path");e==null&&t!=="/"&&(d.pathname=d.pathname==="/"?t:ae([t,d.pathname])),(p.replace?n.replace:n.push)(d,p.state,p)},[t,n,r,a,e])}u.createContext(null);function Za(){let{matches:e}=u.useContext(ne),t=e[e.length-1];return t?t.params:{}}function ze(e,{relative:t}={}){let{matches:n}=u.useContext(ne),{pathname:s}=oe(),a=JSON.stringify(Gn(n));return u.useMemo(()=>Yn(e,JSON.parse(a),s,t==="path"),[e,a,s,t])}function er(e,t){return Zn(e,t)}function Zn(e,t,n,s){var C;B(Be(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:a,static:r}=u.useContext(te),{matches:o}=u.useContext(ne),l=o[o.length-1],c=l?l.params:{},p=l?l.pathname:"/",d=l?l.pathnameBase:"/",m=l&&l.route;{let x=m&&m.path||"";es(p,!m||x.endsWith("*")||x.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${p}" (under <Route path="${x}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${x}"> to <Route path="${x==="/"?"*":`${x}/*`}">.`)}let y=oe(),j;if(t){let x=typeof t=="string"?be(t):t;B(d==="/"||((C=x.pathname)==null?void 0:C.startsWith(d)),`When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${d}" but pathname "${x.pathname}" was given in the \`location\` prop.`),j=x}else j=y;let f=j.pathname||"/",S=f;if(d!=="/"){let x=d.replace(/^\//,"").split("/");S="/"+f.replace(/^\//,"").split("/").slice(x.length).join("/")}let v=!r&&n&&n.matches&&n.matches.length>0?n.matches:Hn(e,{pathname:S});ee(m||v!=null,`No routes matched location "${j.pathname}${j.search}${j.hash}" `),ee(v==null||v[v.length-1].route.element!==void 0||v[v.length-1].route.Component!==void 0||v[v.length-1].route.lazy!==void 0,`Matched leaf route at location "${j.pathname}${j.search}${j.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`);let g=rr(v&&v.map(x=>Object.assign({},x,{params:Object.assign({},c,x.params),pathname:ae([d,a.encodeLocation?a.encodeLocation(x.pathname).pathname:x.pathname]),pathnameBase:x.pathnameBase==="/"?d:ae([d,a.encodeLocation?a.encodeLocation(x.pathnameBase).pathname:x.pathnameBase])})),o,n,s);return t&&g?u.createElement(De.Provider,{value:{location:{pathname:"/",search:"",hash:"",state:null,key:"default",...j},navigationType:"POP"}},g):g}function tr(){let e=pr(),t=Ga(e)?`${e.status} ${e.statusText}`:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,s="rgba(200,200,200, 0.5)",a={padding:"0.5rem",backgroundColor:s},r={padding:"2px 4px",backgroundColor:s},o=null;return console.error("Error handled by React Router default ErrorBoundary:",e),o=u.createElement(u.Fragment,null,u.createElement("p",null,"💿 Hey developer 👋"),u.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",u.createElement("code",{style:r},"ErrorBoundary")," or"," ",u.createElement("code",{style:r},"errorElement")," prop on your route.")),u.createElement(u.Fragment,null,u.createElement("h2",null,"Unexpected Application Error!"),u.createElement("h3",{style:{fontStyle:"italic"}},t),n?u.createElement("pre",{style:a},n):null,o)}var nr=u.createElement(tr,null),sr=class extends u.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error!==void 0?u.createElement(ne.Provider,{value:this.props.routeContext},u.createElement(Dt.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function ar({routeContext:e,match:t,children:n}){let s=u.useContext(je);return s&&s.static&&s.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(s.staticContext._deepestRenderedBoundaryId=t.route.id),u.createElement(ne.Provider,{value:e},n)}function rr(e,t=[],n=null,s=null){if(e==null){if(!n)return null;if(n.errors)e=n.matches;else if(t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let a=e,r=n==null?void 0:n.errors;if(r!=null){let c=a.findIndex(p=>p.route.id&&(r==null?void 0:r[p.route.id])!==void 0);B(c>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(r).join(",")}`),a=a.slice(0,Math.min(a.length,c+1))}let o=!1,l=-1;if(n)for(let c=0;c<a.length;c++){let p=a[c];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(l=c),p.route.id){let{loaderData:d,errors:m}=n,y=p.route.loader&&!d.hasOwnProperty(p.route.id)&&(!m||m[p.route.id]===void 0);if(p.route.lazy||y){o=!0,l>=0?a=a.slice(0,l+1):a=[a[0]];break}}}return a.reduceRight((c,p,d)=>{let m,y=!1,j=null,f=null;n&&(m=r&&p.route.id?r[p.route.id]:void 0,j=p.route.errorElement||nr,o&&(l<0&&d===0?(es("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),y=!0,f=null):l===d&&(y=!0,f=p.route.hydrateFallbackElement||null)));let S=t.concat(a.slice(0,d+1)),v=()=>{let g;return m?g=j:y?g=f:p.route.Component?g=u.createElement(p.route.Component,null):p.route.element?g=p.route.element:g=c,u.createElement(ar,{match:p,routeContext:{outlet:c,matches:S,isDataRoute:n!=null},children:g})};return n&&(p.route.ErrorBoundary||p.route.errorElement||d===0)?u.createElement(sr,{location:n.location,revalidation:n.revalidation,component:j,error:m,children:v(),routeContext:{outlet:null,matches:S,isDataRoute:!0}}):v()},null)}function Bt(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function or(e){let t=u.useContext(je);return B(t,Bt(e)),t}function lr(e){let t=u.useContext(rt);return B(t,Bt(e)),t}function ir(e){let t=u.useContext(ne);return B(t,Bt(e)),t}function Wt(e){let t=ir(e),n=t.matches[t.matches.length-1];return B(n.route.id,`${e} can only be used on routes that contain a unique "id"`),n.route.id}function cr(){return Wt("useRouteId")}function pr(){var s;let e=u.useContext(Dt),t=lr("useRouteError"),n=Wt("useRouteError");return e!==void 0?e:(s=t.errors)==null?void 0:s[n]}function ur(){let{router:e}=or("useNavigate"),t=Wt("useNavigate"),n=u.useRef(!1);return Xn(()=>{n.current=!0}),u.useCallback(async(a,r={})=>{ee(n.current,Qn),n.current&&(typeof a=="number"?e.navigate(a):await e.navigate(a,{fromRouteId:t,...r}))},[e,t])}var yn={};function es(e,t,n){!t&&!yn[e]&&(yn[e]=!0,ee(!1,n))}u.memo(dr);function dr({routes:e,future:t,state:n}){return Zn(e,void 0,n,t)}function Rt(e){B(!1,"A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>.")}function fr({basename:e="/",children:t=null,location:n,navigationType:s="POP",navigator:a,static:r=!1}){B(!Be(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let o=e.replace(/^\/*/,"/"),l=u.useMemo(()=>({basename:o,navigator:a,static:r,future:{}}),[o,a,r]);typeof n=="string"&&(n=be(n));let{pathname:c="/",search:p="",hash:d="",state:m=null,key:y="default"}=n,j=u.useMemo(()=>{let f=re(c,o);return f==null?null:{location:{pathname:f,search:p,hash:d,state:m,key:y},navigationType:s}},[o,c,p,d,m,y,s]);return ee(j!=null,`<Router basename="${o}"> is not able to match the URL "${c}${p}${d}" because it does not start with the basename, so the <Router> won't render anything.`),j==null?null:u.createElement(te.Provider,{value:l},u.createElement(De.Provider,{children:t,value:j}))}function hr({children:e,location:t}){return er(Ft(e),t)}function Ft(e,t=[]){let n=[];return u.Children.forEach(e,(s,a)=>{if(!u.isValidElement(s))return;let r=[...t,a];if(s.type===u.Fragment){n.push.apply(n,Ft(s.props.children,r));return}B(s.type===Rt,`[${typeof s.type=="string"?s.type:s.type.name}] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`),B(!s.props.index||!s.props.children,"An index route cannot have child routes.");let o={id:s.props.id||r.join("-"),caseSensitive:s.props.caseSensitive,element:s.props.element,Component:s.props.Component,index:s.props.index,path:s.props.path,loader:s.props.loader,action:s.props.action,hydrateFallbackElement:s.props.hydrateFallbackElement,HydrateFallback:s.props.HydrateFallback,errorElement:s.props.errorElement,ErrorBoundary:s.props.ErrorBoundary,hasErrorBoundary:s.props.hasErrorBoundary===!0||s.props.ErrorBoundary!=null||s.props.errorElement!=null,shouldRevalidate:s.props.shouldRevalidate,handle:s.props.handle,lazy:s.props.lazy};s.props.children&&(o.children=Ft(s.props.children,r)),n.push(o)}),n}var Ke="get",Qe="application/x-www-form-urlencoded";function ot(e){return e!=null&&typeof e.tagName=="string"}function gr(e){return ot(e)&&e.tagName.toLowerCase()==="button"}function mr(e){return ot(e)&&e.tagName.toLowerCase()==="form"}function yr(e){return ot(e)&&e.tagName.toLowerCase()==="input"}function wr(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}function br(e,t){return e.button===0&&(!t||t==="_self")&&!wr(e)}var Ue=null;function jr(){if(Ue===null)try{new FormData(document.createElement("form"),0),Ue=!1}catch{Ue=!0}return Ue}var vr=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function gt(e){return e!=null&&!vr.has(e)?(ee(!1,`"${e}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${Qe}"`),null):e}function xr(e,t){let n,s,a,r,o;if(mr(e)){let l=e.getAttribute("action");s=l?re(l,t):null,n=e.getAttribute("method")||Ke,a=gt(e.getAttribute("enctype"))||Qe,r=new FormData(e)}else if(gr(e)||yr(e)&&(e.type==="submit"||e.type==="image")){let l=e.form;if(l==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let c=e.getAttribute("formaction")||l.getAttribute("action");if(s=c?re(c,t):null,n=e.getAttribute("formmethod")||l.getAttribute("method")||Ke,a=gt(e.getAttribute("formenctype"))||gt(l.getAttribute("enctype"))||Qe,r=new FormData(l,e),!jr()){let{name:p,type:d,value:m}=e;if(d==="image"){let y=p?`${p}.`:"";r.append(`${y}x`,"0"),r.append(`${y}y`,"0")}else p&&r.append(p,m)}}else{if(ot(e))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');n=Ke,s=null,a=Qe,o=e}return r&&a==="text/plain"&&(o=r,r=void 0),{action:s,method:n.toLowerCase(),encType:a,formData:r,body:o}}function zt(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}async function Sr(e,t){if(e.id in t)return t[e.id];try{let n=await import(e.module);return t[e.id]=n,n}catch(n){return console.error(`Error loading route module \`${e.module}\`, reloading page...`),console.error(n),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function kr(e){return e==null?!1:e.href==null?e.rel==="preload"&&typeof e.imageSrcSet=="string"&&typeof e.imageSizes=="string":typeof e.rel=="string"&&typeof e.href=="string"}async function Cr(e,t,n){let s=await Promise.all(e.map(async a=>{let r=t.routes[a.route.id];if(r){let o=await Sr(r,n);return o.links?o.links():[]}return[]}));return _r(s.flat(1).filter(kr).filter(a=>a.rel==="stylesheet"||a.rel==="preload").map(a=>a.rel==="stylesheet"?{...a,rel:"prefetch",as:"style"}:{...a,rel:"prefetch"}))}function wn(e,t,n,s,a,r){let o=(c,p)=>n[p]?c.route.id!==n[p].route.id:!0,l=(c,p)=>{var d;return n[p].pathname!==c.pathname||((d=n[p].route.path)==null?void 0:d.endsWith("*"))&&n[p].params["*"]!==c.params["*"]};return r==="assets"?t.filter((c,p)=>o(c,p)||l(c,p)):r==="data"?t.filter((c,p)=>{var m;let d=s.routes[c.route.id];if(!d||!d.hasLoader)return!1;if(o(c,p)||l(c,p))return!0;if(c.route.shouldRevalidate){let y=c.route.shouldRevalidate({currentUrl:new URL(a.pathname+a.search+a.hash,window.origin),currentParams:((m=n[0])==null?void 0:m.params)||{},nextUrl:new URL(e,window.origin),nextParams:c.params,defaultShouldRevalidate:!0});if(typeof y=="boolean")return y}return!0}):[]}function Er(e,t,{includeHydrateFallback:n}={}){return Rr(e.map(s=>{let a=t.routes[s.route.id];if(!a)return[];let r=[a.module];return a.clientActionModule&&(r=r.concat(a.clientActionModule)),a.clientLoaderModule&&(r=r.concat(a.clientLoaderModule)),n&&a.hydrateFallbackModule&&(r=r.concat(a.hydrateFallbackModule)),a.imports&&(r=r.concat(a.imports)),r}).flat(1))}function Rr(e){return[...new Set(e)]}function Fr(e){let t={},n=Object.keys(e).sort();for(let s of n)t[s]=e[s];return t}function _r(e,t){let n=new Set;return new Set(t),e.reduce((s,a)=>{let r=JSON.stringify(Fr(a));return n.has(r)||(n.add(r),s.push({key:r,link:a})),s},[])}var Pr=new Set([100,101,204,205]);function Tr(e,t){let n=typeof e=="string"?new URL(e,typeof window>"u"?"server://singlefetch/":window.location.origin):e;return n.pathname==="/"?n.pathname="_root.data":t&&re(n.pathname,t)==="/"?n.pathname=`${t.replace(/\/$/,"")}/_root.data`:n.pathname=`${n.pathname.replace(/\/$/,"")}.data`,n}function ts(){let e=u.useContext(je);return zt(e,"You must render this element inside a <DataRouterContext.Provider> element"),e}function $r(){let e=u.useContext(rt);return zt(e,"You must render this element inside a <DataRouterStateContext.Provider> element"),e}var qt=u.createContext(void 0);qt.displayName="FrameworkContext";function ns(){let e=u.useContext(qt);return zt(e,"You must render this element inside a <HydratedRouter> element"),e}function Ir(e,t){let n=u.useContext(qt),[s,a]=u.useState(!1),[r,o]=u.useState(!1),{onFocus:l,onBlur:c,onMouseEnter:p,onMouseLeave:d,onTouchStart:m}=t,y=u.useRef(null);u.useEffect(()=>{if(e==="render"&&o(!0),e==="viewport"){let S=g=>{g.forEach(C=>{o(C.isIntersecting)})},v=new IntersectionObserver(S,{threshold:.5});return y.current&&v.observe(y.current),()=>{v.disconnect()}}},[e]),u.useEffect(()=>{if(s){let S=setTimeout(()=>{o(!0)},100);return()=>{clearTimeout(S)}}},[s]);let j=()=>{a(!0)},f=()=>{a(!1),o(!1)};return n?e!=="intent"?[r,y,{}]:[r,y,{onFocus:Ee(l,j),onBlur:Ee(c,f),onMouseEnter:Ee(p,j),onMouseLeave:Ee(d,f),onTouchStart:Ee(m,j)}]:[!1,y,{}]}function Ee(e,t){return n=>{e&&e(n),n.defaultPrevented||t(n)}}function Ar({page:e,...t}){let{router:n}=ts(),s=u.useMemo(()=>Hn(n.routes,e,n.basename),[n.routes,e,n.basename]);return s?u.createElement(Mr,{page:e,matches:s,...t}):null}function Lr(e){let{manifest:t,routeModules:n}=ns(),[s,a]=u.useState([]);return u.useEffect(()=>{let r=!1;return Cr(e,t,n).then(o=>{r||a(o)}),()=>{r=!0}},[e,t,n]),s}function Mr({page:e,matches:t,...n}){let s=oe(),{manifest:a,routeModules:r}=ns(),{basename:o}=ts(),{loaderData:l,matches:c}=$r(),p=u.useMemo(()=>wn(e,t,c,a,s,"data"),[e,t,c,a,s]),d=u.useMemo(()=>wn(e,t,c,a,s,"assets"),[e,t,c,a,s]),m=u.useMemo(()=>{if(e===s.pathname+s.search+s.hash)return[];let f=new Set,S=!1;if(t.forEach(g=>{var x;let C=a.routes[g.route.id];!C||!C.hasLoader||(!p.some(T=>T.route.id===g.route.id)&&g.route.id in l&&((x=r[g.route.id])!=null&&x.shouldRevalidate)||C.hasClientLoader?S=!0:f.add(g.route.id))}),f.size===0)return[];let v=Tr(e,o);return S&&f.size>0&&v.searchParams.set("_routes",t.filter(g=>f.has(g.route.id)).map(g=>g.route.id).join(",")),[v.pathname+v.search]},[o,l,s,a,p,t,e,r]),y=u.useMemo(()=>Er(d,a),[d,a]),j=Lr(d);return u.createElement(u.Fragment,null,m.map(f=>u.createElement("link",{key:f,rel:"prefetch",as:"fetch",href:f,...n})),y.map(f=>u.createElement("link",{key:f,rel:"modulepreload",href:f,...n})),j.map(({key:f,link:S})=>u.createElement("link",{key:f,...S})))}function Or(...e){return t=>{e.forEach(n=>{typeof n=="function"?n(t):n!=null&&(n.current=t)})}}var ss=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{ss&&(window.__reactRouterVersion="7.5.1")}catch{}function Nr({basename:e,children:t,window:n}){let s=u.useRef();s.current==null&&(s.current=Ca({window:n,v5Compat:!0}));let a=s.current,[r,o]=u.useState({action:a.action,location:a.location}),l=u.useCallback(c=>{u.startTransition(()=>o(c))},[o]);return u.useLayoutEffect(()=>a.listen(l),[a,l]),u.createElement(fr,{basename:e,children:t,location:r.location,navigationType:r.action,navigator:a})}var as=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,rs=u.forwardRef(function({onClick:t,discover:n="render",prefetch:s="none",relative:a,reloadDocument:r,replace:o,state:l,target:c,to:p,preventScrollReset:d,viewTransition:m,...y},j){let{basename:f}=u.useContext(te),S=typeof p=="string"&&as.test(p),v,g=!1;if(typeof p=="string"&&S&&(v=p,ss))try{let H=new URL(window.location.href),K=p.startsWith("//")?new URL(H.protocol+p):new URL(p),xe=re(K.pathname,f);K.origin===H.origin&&xe!=null?p=xe+K.search+K.hash:g=!0}catch{ee(!1,`<Link to="${p}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let C=Qa(p,{relative:a}),[x,T,h]=Ir(s,y),A=zr(p,{replace:o,state:l,target:c,preventScrollReset:d,relative:a,viewTransition:m});function P(H){t&&t(H),H.defaultPrevented||A(H)}let J=u.createElement("a",{...y,...h,href:v||C,onClick:g||r?t:P,ref:Or(j,T),target:c,"data-discover":!S&&n==="render"?"true":void 0});return x&&!S?u.createElement(u.Fragment,null,J,u.createElement(Ar,{page:C})):J});rs.displayName="Link";var Dr=u.forwardRef(function({"aria-current":t="page",caseSensitive:n=!1,className:s="",end:a=!1,style:r,to:o,viewTransition:l,children:c,...p},d){let m=ze(o,{relative:p.relative}),y=oe(),j=u.useContext(rt),{navigator:f,basename:S}=u.useContext(te),v=j!=null&&Gr(m)&&l===!0,g=f.encodeLocation?f.encodeLocation(m).pathname:m.pathname,C=y.pathname,x=j&&j.navigation&&j.navigation.location?j.navigation.location.pathname:null;n||(C=C.toLowerCase(),x=x?x.toLowerCase():null,g=g.toLowerCase()),x&&S&&(x=re(x,S)||x);const T=g!=="/"&&g.endsWith("/")?g.length-1:g.length;let h=C===g||!a&&C.startsWith(g)&&C.charAt(T)==="/",A=x!=null&&(x===g||!a&&x.startsWith(g)&&x.charAt(g.length)==="/"),P={isActive:h,isPending:A,isTransitioning:v},J=h?t:void 0,H;typeof s=="function"?H=s(P):H=[s,h?"active":null,A?"pending":null,v?"transitioning":null].filter(Boolean).join(" ");let K=typeof r=="function"?r(P):r;return u.createElement(rs,{...p,"aria-current":J,className:H,ref:d,style:K,to:o,viewTransition:l},typeof c=="function"?c(P):c)});Dr.displayName="NavLink";var Br=u.forwardRef(({discover:e="render",fetcherKey:t,navigate:n,reloadDocument:s,replace:a,state:r,method:o=Ke,action:l,onSubmit:c,relative:p,preventScrollReset:d,viewTransition:m,...y},j)=>{let f=Ur(),S=Vr(l,{relative:p}),v=o.toLowerCase()==="get"?"get":"post",g=typeof l=="string"&&as.test(l),C=x=>{if(c&&c(x),x.defaultPrevented)return;x.preventDefault();let T=x.nativeEvent.submitter,h=(T==null?void 0:T.getAttribute("formmethod"))||o;f(T||x.currentTarget,{fetcherKey:t,method:h,navigate:n,replace:a,state:r,relative:p,preventScrollReset:d,viewTransition:m})};return u.createElement("form",{ref:j,method:v,action:S,onSubmit:s?c:C,...y,"data-discover":!g&&e==="render"?"true":void 0})});Br.displayName="Form";function Wr(e){return`${e} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function os(e){let t=u.useContext(je);return B(t,Wr(e)),t}function zr(e,{target:t,replace:n,state:s,preventScrollReset:a,relative:r,viewTransition:o}={}){let l=We(),c=oe(),p=ze(e,{relative:r});return u.useCallback(d=>{if(br(d,t)){d.preventDefault();let m=n!==void 0?n:Le(c)===Le(p);l(e,{replace:m,state:s,preventScrollReset:a,relative:r,viewTransition:o})}},[c,l,p,n,s,t,e,a,r,o])}var qr=0,Hr=()=>`__${String(++qr)}__`;function Ur(){let{router:e}=os("useSubmit"),{basename:t}=u.useContext(te),n=cr();return u.useCallback(async(s,a={})=>{let{action:r,method:o,encType:l,formData:c,body:p}=xr(s,t);if(a.navigate===!1){let d=a.fetcherKey||Hr();await e.fetch(d,n,a.action||r,{preventScrollReset:a.preventScrollReset,formData:c,body:p,formMethod:a.method||o,formEncType:a.encType||l,flushSync:a.flushSync})}else await e.navigate(a.action||r,{preventScrollReset:a.preventScrollReset,formData:c,body:p,formMethod:a.method||o,formEncType:a.encType||l,replace:a.replace,state:a.state,fromRouteId:n,flushSync:a.flushSync,viewTransition:a.viewTransition})},[e,t,n])}function Vr(e,{relative:t}={}){let{basename:n}=u.useContext(te),s=u.useContext(ne);B(s,"useFormAction must be used inside a RouteContext");let[a]=s.matches.slice(-1),r={...ze(e||".",{relative:t})},o=oe();if(e==null){r.search=o.search;let l=new URLSearchParams(r.search),c=l.getAll("index");if(c.some(d=>d==="")){l.delete("index"),c.filter(m=>m).forEach(m=>l.append("index",m));let d=l.toString();r.search=d?`?${d}`:""}}return(!e||e===".")&&a.route.index&&(r.search=r.search?r.search.replace(/^\?/,"?index&"):"?index"),n!=="/"&&(r.pathname=r.pathname==="/"?n:ae([n,r.pathname])),Le(r)}function Gr(e,t={}){let n=u.useContext(Kn);B(n!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:s}=os("useViewTransitionState"),a=ze(e,{relative:t.relative});if(!n.isTransitioning)return!1;let r=re(n.currentLocation.pathname,s)||n.currentLocation.pathname,o=re(n.nextLocation.pathname,s)||n.nextLocation.pathname;return Ze(a.pathname,o)!=null||Ze(a.pathname,r)!=null}new TextEncoder;[...Pr];const Yr="/portfolio/assets/NanumSquareNeo-bRg-subset-CvTTexO4.woff",Jr="/portfolio/assets/NanumSquareNeo-bRg-subset-Czk0bR3U.woff2",Kr="/portfolio/assets/NanumSquareNeo-cBd-subset-D1tSDoIJ.woff",Qr="/portfolio/assets/NanumSquareNeo-cBd-subset-CU4oSh0x.woff2";function Xr(){const{pathname:e}=oe();return u.useEffect(()=>{window.scrollTo({top:0})},[e]),w(de,{})}const lt={xs:0,sm:600,md:900,lg:1200,xl:1536},E={white:"#ffffff",white87:"rgba(255, 255, 255, .87)",white60:"rgba(255, 255, 255, .60)",white33:"rgba(255, 255, 255, .33)",black:"#000000",black60:"rgba(0, 0, 0, .60)",black12:"rgba(0, 0, 0, .12)",primary:"#ff6b6b",primary08:"rgba(255, 107, 107, .08)",lightGray:"#f5f5f5",lightGray87:"rgba(245, 245, 245, .87)",lightGray60:"rgba(245, 245, 245, .60)",dark:"#222222",dark87:"rgba(34, 34, 34, .87)",dark60:"rgba(34, 34, 34, .60)",dark33:"rgba(34, 34, 34, .33)",dark12:"rgba(34, 34, 34, .12)"},Zr=k({margin:"0 auto",maxWidth:lt.lg,width:"100%"});function Me(e){return w("div",{css:Zr,...e})}var pe=function(e){return e.skills="skills",e.careers="careers",e.projects="projects",e}(pe||{}),N=function(e){return e.ts="TypeScript",e.dart="Dart",e.react="React",e.next="Next.js",e.gatsby="Gatsby",e.rn="React Native",e.flutter="Flutter",e.tailwind="TailwindCSS",e.emotion="Emotion",e.mui="Material UI",e.tQuery="TanStack Query",e.mobx="MobX",e.jotai="Jotai",e.bloc="BloC",e.graphql="GraphQL",e.protobuf="Protocol Buffer",e.firebase="Firebase",e.aws="AWS",e.fastlane="Fastlane",e.gradle="Gradle",e.gerrit="Gerrit",e}(N||{});const eo=[{type:"image/png",srcset:"/portfolio/assets/altong-1.321f0002.png 320w, /portfolio/assets/altong-1.7649d0b3.png 640w, /portfolio/assets/altong-1.45787beb.png 960w",loading:"lazy",src:"/portfolio/assets/altong-1.45787beb.png"}],to=[{type:"image/png",srcset:"/portfolio/assets/altong-2.fd528480.png 320w, /portfolio/assets/altong-2.045975bb.png 640w, /portfolio/assets/altong-2.a79d295b.png 960w",loading:"lazy",src:"/portfolio/assets/altong-2.a79d295b.png"}],no=[{type:"image/png",srcset:"/portfolio/assets/altong-3.6b49c007.png 320w, /portfolio/assets/altong-3.b68b444e.png 640w, /portfolio/assets/altong-3.a9875eae.png 960w",loading:"lazy",src:"/portfolio/assets/altong-3.a9875eae.png"}],so=[{type:"image/png",srcset:"/portfolio/assets/altong-4.264806e9.png 320w, /portfolio/assets/altong-4.f74081bc.png 640w, /portfolio/assets/altong-4.412e34d1.png 960w",loading:"lazy",src:"/portfolio/assets/altong-4.412e34d1.png"}],ao=[{type:"image/png",srcset:"/portfolio/assets/altong-5.a358e4c0.png 320w, /portfolio/assets/altong-5.5e9f8cbd.png 640w, /portfolio/assets/altong-5.cf140d0a.png 960w",loading:"lazy",src:"/portfolio/assets/altong-5.cf140d0a.png"}],ro=[{type:"image/png",srcset:"/portfolio/assets/beliefy-1.ef8c892e.png 320w, /portfolio/assets/beliefy-1.0682a8e1.png 640w, /portfolio/assets/beliefy-1.8f5e546f.png 960w",loading:"lazy",src:"/portfolio/assets/beliefy-1.8f5e546f.png"}],oo=[{type:"image/png",srcset:"/portfolio/assets/beliefy-2.a0dd8de3.png 320w, /portfolio/assets/beliefy-2.3fa46a17.png 640w, /portfolio/assets/beliefy-2.3b823086.png 960w",loading:"lazy",src:"/portfolio/assets/beliefy-2.3b823086.png"}],lo=[{type:"image/png",srcset:"/portfolio/assets/beliefy-3.bd3ecc31.png 320w, /portfolio/assets/beliefy-3.0ee3ffae.png 640w, /portfolio/assets/beliefy-3.69d5abcb.png 960w",loading:"lazy",src:"/portfolio/assets/beliefy-3.69d5abcb.png"}],io=[{type:"image/png",srcset:"/portfolio/assets/beliefy-4.c6c19150.png 320w, /portfolio/assets/beliefy-4.3f71dc48.png 640w, /portfolio/assets/beliefy-4.f98dbb50.png 960w",loading:"lazy",src:"/portfolio/assets/beliefy-4.f98dbb50.png"}],co=[{type:"image/png",srcset:"/portfolio/assets/proofy-1.e7393383.png 320w, /portfolio/assets/proofy-1.2437d38a.png 640w, /portfolio/assets/proofy-1.d6afc273.png 960w",loading:"lazy",src:"/portfolio/assets/proofy-1.d6afc273.png"}],po=[{type:"image/png",srcset:"/portfolio/assets/proofy-2.b795b0f9.png 320w, /portfolio/assets/proofy-2.3641b57e.png 640w, /portfolio/assets/proofy-2.0da54588.png 960w",loading:"lazy",src:"/portfolio/assets/proofy-2.0da54588.png"}],uo=[{type:"image/png",srcset:"/portfolio/assets/proofy-3.21bd63fb.png 320w, /portfolio/assets/proofy-3.06e69ffa.png 640w, /portfolio/assets/proofy-3.932b5644.png 960w",loading:"lazy",src:"/portfolio/assets/proofy-3.932b5644.png"}],fo=[{type:"image/png",srcset:"/portfolio/assets/proofy-4.ab0047d4.png 320w, /portfolio/assets/proofy-4.10443234.png 640w, /portfolio/assets/proofy-4.3368be50.png 960w",loading:"lazy",src:"/portfolio/assets/proofy-4.3368be50.png"}],ho={altong:[{image:eo,alt:"홈 화면"},{image:to,alt:"요금제 검색"},{image:no,alt:"요금제 상세"},{image:so,alt:"(모바일) 홈 & 요금제 검색"},{image:ao,alt:"(모바일) 검색 필터 & 요금제 상세"}],beliefy:[{image:ro,alt:"빌리픽"},{image:oo,alt:"호감"},{image:lo,alt:"프로필 상세"},{image:io,alt:"매칭 성공"}],proofy:[{image:co,alt:"홈 화면 & KYC"},{image:po,alt:"KYC"},{image:uo,alt:"지갑 추가 & 히스토리"},{image:fo,alt:"연봉 순위 조회 & 공유"}]},Ht=[{type:"image/png",srcset:"/portfolio/assets/playwings.39c71284.png 320w, /portfolio/assets/playwings.21557151.png 640w, /portfolio/assets/playwings.3e7cbb26.png 960w",loading:"lazy",src:"/portfolio/assets/playwings.3e7cbb26.png"}],go=[{type:"image/png",srcset:"/portfolio/assets/altong.6aa22592.png 320w, /portfolio/assets/altong.cbf96a36.png 640w, /portfolio/assets/altong.4f63401a.png 960w",loading:"lazy",src:"/portfolio/assets/altong.4f63401a.png"}],mo=[{type:"image/png",srcset:"/portfolio/assets/beliefy.8398e3f0.png 320w, /portfolio/assets/beliefy.fb7e35b3.png 640w, /portfolio/assets/beliefy.a042995e.png 960w",loading:"lazy",src:"/portfolio/assets/beliefy.a042995e.png"}],yo=[{type:"image/png",srcset:"/portfolio/assets/proofy.f6c087b3.png 320w, /portfolio/assets/proofy.245c3732.png 640w, /portfolio/assets/proofy.a3f1df4d.png 960w",loading:"lazy",src:"/portfolio/assets/proofy.a3f1df4d.png"}],wo=[{type:"image/png",srcset:"/portfolio/assets/background.6b5d19e2.png 320w, /portfolio/assets/background.c77505d4.png 640w, /portfolio/assets/background.d84f0b8d.png 960w",loading:"lazy",src:"/portfolio/assets/background.d84f0b8d.png"}],bo=Ht,jo=Ht,vo=Ht,xo=Object.freeze(Object.defineProperty({__proto__:null,altong:go,beliefy:mo,pedsfolio:wo,playwingsRenewal:bo,playwingsWeb:jo,playwingsWebview:vo,proofy:yo},Symbol.toStringTag,{value:"Module"})),So={name:"알통(Altong)",description:"알뜰폰 요금제 비교 웹사이트",startAt:"2023-09",endAt:"2023-10",techStack:["TypeScript","Next.js","Material UI","TailwindCSS"]},ko=`<h1 id="알통(altong)" tabindex="-1">알통(Altong)</h1>
<p>알뜰폰 요금제 비교 서비스 '알통' 웹사이트를 개발한 프로젝트입니다. 홈, 요금제 리스트, 요금제 상세, 이용팁으로 구성되어 있습니다.</p>
<h2 id="overview" tabindex="-1">Overview</h2>
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
<h2 id="contributions" tabindex="-1">Contributions</h2>
<ul>
<li>JS 번들 사이즈 최적화를 위한 App Router, RSC 도입</li>
<li>Headless UI, TailwindCSS를 이용한 컴포넌트 개발</li>
<li>요금제 검색을 제외한 앱 내 주요 기능 및 페이지 개발 (기여도 70%)</li>
</ul>
<h2 id="significance" tabindex="-1">Significance</h2>
<p>처음 Next.js로 진행한 프로젝트입니다. 이전 회사에서 SSG 기반 웹사이트를 운영했을 때, JS 번들이 계속 커지면서 모바일 브라우저 환경에서 TTI(Time to Interactive)가 증가하는 문제가 발생했던 경험이 있었습니다. 이러한 문제를 해결하기 위해 이번 프로젝트에서는 번들 크기 최적화를 목표로 React 18에서 도입된 서버 컴포넌트를 사용했고, 서버 컴포넌트 도입을 위해 Next.js의 App Router 방식을 채택했습니다.</p>
<p>비록 회사 사정으로 인해 최종 출시에는 이르지 못했지만, Next.js와 서버 컴포넌트를 활용한 실험적인 접근을 시도할 수 있었던 의미 있는 프로젝트였습니다.</p>
`,Co=Object.freeze(Object.defineProperty({__proto__:null,attributes:So,html:ko},Symbol.toStringTag,{value:"Module"})),Eo={name:"빌리피(Beliefy)",description:"인증 기반 데이팅 앱",startAt:"2023-10",endAt:"2024-11",techStack:["Dart","Flutter","BloC"]},Ro=`<h1 id="빌리피(beliefy)" tabindex="-1">빌리피(Beliefy)</h1>
<p>인증 기반 데이팅 서비스, 빌리피의 모바일 어플리케이션을 개발한 프로젝트입니다. 프로필 심사, 이성 추천 및 매칭, 채팅, 인증 등의 기능을 포함하고 있습니다.</p>
<h2 id="overview" tabindex="-1">Overview</h2>
<ul>
<li><strong>Period</strong>: 2023. 10. ~ 2024. 11.</li>
<li><strong>Members</strong>: 프론트엔드 1명, 풀스택 2명, 백엔드 2명</li>
<li><strong>Role</strong>: 프론트엔드 개발</li>
<li><strong>TechStack</strong>:
<ul>
<li>Dart</li>
<li>Flutter</li>
<li>BloC</li>
<li>RxDart</li>
<li>Firebase</li>
<li>Fastlane</li>
<li>Github Workflow</li>
</ul>
</li>
</ul>
<h2 id="contributions" tabindex="-1">Contributions</h2>
<ul>
<li>BLoC 패턴을 활용한 앱 내 주요 기능 및 화면 개발 (기여도 50%)</li>
<li>Fastlane, Github Workflow를 활용한 배포 관리</li>
</ul>
<h2 id="significance" tabindex="-1">Significance</h2>
<p>처음으로 플러터로 개발한 프로젝트입니다. 프로젝트를 진행하면서 플러터와 React Native의 차이점과 각 프레임워크의 장단점을 직접 체감할 수 있었습니다.</p>
<p>또한, BloC 패턴을 활용하면서 Flutter 생태계에서의 상태 관리 방식을 경험할 수 있었습니다. 그리고 프레젠테이션 레이어와 비즈니스 로직을 명확히 분리하는 BloC 패턴의 구조적 이점 덕분에 유지보수성과 코드의 가독성을 높일 수 있음을 느꼈습니다.</p>
<h2 id="challenges" tabindex="-1">Challenges</h2>
<h3 id="아키텍쳐-설계" tabindex="-1">아키텍쳐 설계</h3>
<p>처음 프로젝트를 진행할 때 보일러 플레이트 코드가 많지만 UI와 비지니스 로직을 명확하게 분리할 수 있는 BloC 패턴을 채택해, 레포지토리에서 가져온 데이터를 BloC을 거쳐 UI로 보여주고 사용자가 데이터를 입력/제출하면 BloC을 통해 레포지토리의 데이터를 변경하도록 설계했습니다. 레포지토리의 경우 백엔드 API 호출하는 API를 제공하거나 데이터 저장이 필요한 경우 단순 변수를 사용했는데, 프로젝트를 진행하면서 레포지토리 내 데이터의 흐름이 점점 복잡해지는 문제가 있었습니다.</p>
<p>예를 들어, 사용자가 호감 페이지에서 관심 있어한 상대방의 프로필에 들어가 좋아요를 누르면 호감탭에서 <code>내가 관심 있어요</code> 섹션에 있던 상대방 카드가 <code>내가 좋아해요</code> 섹션으로 이동해야 합니다. 리액트 프로젝트였다면 React Query을 사용해 호감 mutation이 성공하면 쿼리 데이터를 업데이트 하는 방식으로 호감 페이지 UI를 갱신할 수 있지만, 플러터의 경우 상대방 프로필 페이지에서 호감 페이지로 되돌아갈 때마다 UI 갱신을 위해 추가적인 백엔드 API를 호출해야 했습니다.</p>
<p>이를 해결하기 위해 레포지토리의 데이터가 갱신되면 레포지토리를 의존성으로 갖는 모든 BloC의 상태가 갱신될 수 있도록, 레포지토리 레이어는 데이터를 스트림에 저장하고 BloC은 스트림을 구독하는 방식으로 재설계했습니다.</p>
<p><figure><img src="projects/beliefy-architecture.png" alt="빌리피 아키텍처"/><figcaption>빌리피 아키텍처</figcaption></figure></p>
<p>또한, Bloc에서 레포지토리의 스트림을 구독하는 경우가 많아지기 때문에 BloC 리소스가 해제될 때 스트림 구독이 자동으로 해제될 수 있도록 Bloc 객체를 만들어, 리소스 관리의 일관성을 유지하고 수동으로 구독을 해제하는 반복적인 코드를 줄였습니다.</p>
<pre><code class="language-dart"><span class="hljs-keyword">mixin</span> ExtendedBlocMixin&lt;T&gt; <span class="hljs-keyword">on</span> BlocBase&lt;T&gt; {
  <span class="hljs-keyword">final</span> <span class="hljs-built_in">List</span>&lt;StreamSubscription&gt; _subscriptions = [];

  StreamSubscription subscribe(StreamSubscription subscription) {
    _subscriptions.add(subscription);
    <span class="hljs-keyword">return</span> subscription;
  }

  <span class="hljs-meta">@override</span>
  Future&lt;<span class="hljs-keyword">void</span>&gt; close() {
    <span class="hljs-keyword">for</span> (<span class="hljs-keyword">final</span> subscription <span class="hljs-keyword">in</span> _subscriptions) {
      subscription.cancel();
    }

    <span class="hljs-keyword">return</span> <span class="hljs-keyword">super</span>.close();
  }

  <span class="hljs-meta">@override</span>
  <span class="hljs-keyword">void</span> emit(state) {
    <span class="hljs-keyword">if</span> (!isClosed) {
      <span class="hljs-keyword">super</span>.emit(state);
    }
  }
}

<span class="hljs-keyword">abstract</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">ExtendedBloc</span>&lt;<span class="hljs-title">State</span>, <span class="hljs-title">Event</span>&gt; <span class="hljs-keyword">extends</span> <span class="hljs-title">Bloc</span>&lt;<span class="hljs-title">State</span>, <span class="hljs-title">Event</span>&gt;
    <span class="hljs-title">with</span> <span class="hljs-title">ExtendedBlocMixin</span> </span>{
  ExtendedBloc(<span class="hljs-keyword">super</span>.initialState);
}

<span class="hljs-keyword">abstract</span> <span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">ExtendedCubit</span>&lt;<span class="hljs-title">State</span>&gt; <span class="hljs-keyword">extends</span> <span class="hljs-title">Cubit</span>&lt;<span class="hljs-title">State</span>&gt;
    <span class="hljs-title">with</span> <span class="hljs-title">ExtendedBlocMixin</span> </span>{
  ExtendedCubit(<span class="hljs-keyword">super</span>.initialState);
}

<span class="hljs-comment">// 사용처</span>
<span class="hljs-class"><span class="hljs-keyword">class</span> <span class="hljs-title">AttractionCubit</span> <span class="hljs-keyword">extends</span> <span class="hljs-title">ExtendedCubit</span>&lt;<span class="hljs-title">AttractionState</span>&gt; </span>{
  AttractionCubit({
    <span class="hljs-keyword">required</span> AttractionRepository attractionRepository,
  }): {
    add(attractionRepository.sentLikesStream.listen((sentLikes) {
      emit(state.copyWith(sentLikes: sentLikes))
    }))
    add(attractionRepository.sentInterestsStream.listen((sentInterests) {
      emit(state.copyWith(sentLikes: sentInterests))
    }))
  }
}
</code></pre>
<!-- TODO: ### 인증 기능 개발 -->`,Fo=Object.freeze(Object.defineProperty({__proto__:null,attributes:Eo,html:Ro},Symbol.toStringTag,{value:"Module"})),_o={name:"페즈폴리오(PEDSFOLIO)",description:"SPA 기반 개인 포트폴리오 사이트",startAt:"2024-12",techStack:["TypeScript","React","Emotion","Vite","SWC"]},Po=`<h1 id="페즈폴리오(pedsfolio)" tabindex="-1">페즈폴리오(PEDSFOLIO)</h1>
<p>SPA 기반 개인 포트폴리오 사이트입니다.</p>
<p>Repository: <a href="https://github.com/devpeds/portfolio" target="_blank" rel="noopener noreferrer">https://github.com/devpeds/portfolio</a></p>
<h2 id="overview" tabindex="-1">Overview</h2>
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
<h2 id="significance" tabindex="-1">Significance</h2>
<p>Vite, SWC를 처음 적용해본 CSR 프로젝트입니다. 여러 성능 최적화 기법을 적용했으며, 특히 폰트 최적화를 통해 웹폰트가 사이트 성능에 미치는 영향을 경험할 수 있었습니다.</p>
<h2 id="challenges" tabindex="-1">Challenges</h2>
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
`,To=Object.freeze(Object.defineProperty({__proto__:null,attributes:_o,html:Po},Symbol.toStringTag,{value:"Module"})),$o={name:"플레이윙즈 리뉴얼 프로젝트",description:"여행 특가 알림 서비스 플레이윙즈의 리뉴얼 프로젝트",startAt:"2020-03",endAt:"2020-07",techStack:["TypeScript","React Native","MobX"]},Io=`<h1 id="플레이윙즈-리뉴얼-프로젝트" tabindex="-1">플레이윙즈 리뉴얼 프로젝트</h1>
<p>항공권 특가 알림 서비스인 플레이윙즈의 시스템을 재구축한 리뉴얼 프로젝트입니다. 기존 네이티브 앱(Swift, Kotlin)을 React Native로 전환하여 구현하였으며, 출시 이후 호텔, 액티비티 등 다양한 특가 상품과 숙박권 비교 기능을 도입하며 여행 특가 알림 서비스로 기능을 확장했습니다.</p>
<h2 id="overview" tabindex="-1">Overview</h2>
<ul>
<li><strong>Period</strong>: 2020. 02. ~ 2022. 03.</li>
<li><strong>Members</strong>: 프론트엔드 개발자 3명, 백엔드 개발자 3명</li>
<li><strong>Role</strong>: 프론트엔드 개발</li>
<li><strong>TechStack</strong>:
<ul>
<li>TypeScript</li>
<li>React Native</li>
<li>MobX</li>
<li>Protocol Buffer</li>
<li>Contentful</li>
<li>Fastlane</li>
</ul>
</li>
</ul>
<h2 id="contributions" tabindex="-1">Contributions</h2>
<ul>
<li>앱 내 주요 기능 및 화면 개발</li>
<li>컨텐트풀 기반의 동적 페이지 레이아웃 관리 시스템 구현</li>
<li>리액트 컴포넌트 성능 개선</li>
</ul>
<h2 id="significance" tabindex="-1">Significance</h2>
<p>처음 React Native로 진행한 프로젝트입니다. 출시 전 퍼포먼스 개선 작업을 통해 React Native 아키텍처를 깊이 이해할 수 있었으며, React 개발에서 best practice를 준수하는 것의 중요성을 직접 체감할 수 있었습니다.</p>
<p>또한 Protocol Buffers와 GraphQL을 포함한 다양한 데이터 전송 기술을 활용하면서 각 기술의 개념과 장단점을 실무에서 비교하고 이해할 수 있었습니다.</p>
<h2 id="challenges" tabindex="-1">Challenges</h2>
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
`,Ao=Object.freeze(Object.defineProperty({__proto__:null,attributes:$o,html:Io},Symbol.toStringTag,{value:"Module"})),Lo={name:"플레이윙즈 웹사이트",description:"SEO 및 웹투앱 마케팅을 통한 사용자 유입 증대를 위한 웹사이트",startAt:"2021-01",endAt:"2021-03",techStack:["TypeScript","Gatsby","TanStack Query","Material UI","Emotion","GraphQL"]},Mo=`<h1 id="플레이윙즈-웹사이트" tabindex="-1">플레이윙즈 웹사이트</h1>
<p>기존 모바일 앱으로만 운영되던 플레이윙즈의 한계를 보완하고, SEO 및 웹투앱 마케팅을 통한 사용자 유입 경로를 확장하기 위해 웹사이트를 신규 개발한 프로젝트입니다.</p>
<p>URL: <a href="https://www.playwings.co.kr/" target="_blank" rel="noopener noreferrer">https://www.playwings.co.kr/</a></p>
<h2 id="overview" tabindex="-1">Overview</h2>
<ul>
<li><strong>Period</strong>: 2021. 01. ~ 2023. 06.</li>
<li><strong>Members</strong>: 프론트엔드 개발자 2명, 풀스택 개발자 1명</li>
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
<h2 id="contributions" tabindex="-1">Contributions</h2>
<ul>
<li>SSG 프레임워크 도입: 서비스 전체 MAU 50% 증가</li>
<li>공통 레이아웃 및 UI 컴포넌트 설계 및 개발</li>
<li>홈, 여행 특가 리스트 및 상세 페이지 개발</li>
<li>이미지 최적화를 통한 성능 개선: 원본 이미지 기준 평균 80% 용량 감소</li>
</ul>
<h2 id="significance" tabindex="-1">Significance</h2>
<p>Gatsby라는 SSG 프레임워크를 처음 사용한 프로젝트입니다. 이 프로젝트를 통해 초기 렌더링과 하이드레이션을 포함한 SSR 및 SSG 관련 핵심 개념을 이해하고, 이를 실무에 적용할 인사이트를 얻었습니다.</p>
<p>그리고 Tanstack Query를 도입하여 클라이언트와 서버 상태를 분리하면서 코드 가독성을 높이고 복잡성을 낮추는 장점을 경험하며, 이를 실무에 활용할 수 있는 실질적인 노하우를 습득했습니다.</p>
<h2 id="challenges" tabindex="-1">Challenges</h2>
<h3 id="ssg-프레임워크-도입" tabindex="-1">SSG 프레임워크 도입</h3>
<p>프로젝트의 초기 목표는 모바일 앱에서 제공하던 특가 및 매거진 서비스를 웹에서도 제공할 수 있도록 웹사이트를 제작하는 것이었습니다. 프로젝트 시작 당시 개발팀은 React Native, Flutter, SPA 개발 경험이 있었으나, SSR이나 SSG 프로젝트 경험은 부족했습니다. 빠른 프로토타이핑과 개발 리소스 효율성을 고려해 CRA나 Flutter 사용을 검토했으나, 두 프레임워크 모두 SEO 측면에서 불리하다는 단점이 있었습니다. 이에 러닝 커브가 있지만, 풍부한 문서와 커뮤니티 지원을 제공하는 SSG 프레임워크인 Gatsby를 기술 스택으로 선택했습니다.</p>
<p>프로젝트를 진행하며 초기 렌더링과 하이드레이션 관련 이슈들을 마주했습니다. 이와 관련된 주요 사례는 다음과 같습니다.</p>
<details>
<summary>사례1. Date 관련 컴포넌트의 하이드레이션 미스매치 문제</summary>
<p>항공권, 숙박권 등의 상품이 판매 예정인 경우, 판매 시작일까지 며칠 남았는지, 판매 중인 경우 종료일까지 며칠 남았는지를 프로그레스바 형태로 보여주는 요구사항이 있었습니다. CSR 프로젝트에서는 다음과 같이 구현할 수 있습니다.</p>
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
<p>이 문제를 해결하기 위해 <code>withNoSsr()</code>이란 고차 컴포넌트를 만들어, 빌드 시점에는 fallback을 렌더링하고 하이드레이션 이후에 실제 UI를 렌더링하도록 했습니다. 이때 fallback 컴포넌트는 하이드레이션 후 레이아웃 시프트를 방지하기 위해 원래 컴포넌트와 동일한 높이로 설정했습니다.</p>
<pre><code class="language-tsx"><span class="hljs-comment">// withNoSsr.tsx</span>
<span class="hljs-keyword">function</span> withNoSsr&lt;T&gt;(<span class="hljs-title class_">Component</span>: <span class="hljs-title class_">ComponentType</span>&lt;T&gt;, <span class="hljs-attr">fallback</span>: <span class="hljs-title class_">ReactNode</span>) {
  <span class="hljs-keyword">return</span> <span class="hljs-function">(<span class="hljs-params"><span class="hljs-attr">props</span>: T</span>) =&gt;</span> (
    <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">NoSsr</span> <span class="hljs-attr">fallback</span>=<span class="hljs-string">{</span>&lt;<span class="hljs-attr">Fallback</span> /&gt;</span>}&gt;
      <span class="hljs-tag">&lt;<span class="hljs-name">SalePeriodProgressBar</span> {<span class="hljs-attr">...props</span>} /&gt;</span>
    <span class="hljs-tag">&lt;/<span class="hljs-name">NoSsr</span>&gt;</span></span>
  );
}

<span class="hljs-comment">// SalePeriodProgressBar.tsx</span>
<span class="hljs-keyword">export</span> <span class="hljs-keyword">default</span> <span class="hljs-title function_">withNoSsr</span>(<span class="hljs-title class_">SalePeriodProgressBar</span>, <span class="language-xml"><span class="hljs-tag">&lt;<span class="hljs-name">Fallback</span> /&gt;</span></span>)
</code></pre>
</details>
<details>
<summary>사례2. 네비게이션 메뉴 이슈</summary>
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
</details>
<p>SSG 프레임워크 도입과 관련된 도전 과제들을 해결하면서, SEO와 웹 바이털을 최적화할 수 있었습니다. 특히, 하이드레이션 이슈 해결과 네비게이션 메뉴의 반응형 디자인 개선은 사용자 경험을 향상시키는 데 기여했습니다. 그 결과, 출시 당시 lighthouse 기준 <strong>평균 90점 이상</strong>의 성능을 기록했으며, 모바일 앱 MAU의 50%에 해당하는 <strong>5만 명의 사용자를 확보</strong>할 수 있었습니다.</p>
<h3 id="반응형-이미지-컴퍼넌트-개발" tabindex="-1">반응형 이미지 컴퍼넌트 개발</h3>
<p>플레이윙즈 웹사이트는 히어로 섹션, 배너, 카드 등 다양한 컴포넌트에서 화면 너비에 따라 크기와 해상도가 달라지는 반응형 이미지가 필요했습니다. Gatsby에서 제공하는 반응형 이미지 컴포넌트도 고려했지만, 이는 빌드 시점에 접근 가능한 정적 이미지에만 사용할 수 있어 런타임에 요청하는 동적 이미지 URL과는 호환되지 않는 제약이 있었습니다. 이를 해결하기 위해 플랫폼에 종속되지 않는 커스텀 반응형 이미지 컴포넌트를 직접 개발했습니다.</p>
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
`,Oo=Object.freeze(Object.defineProperty({__proto__:null,attributes:Lo,html:Mo},Symbol.toStringTag,{value:"Module"})),No={name:"플레이윙즈 하이브리드 앱 전환",description:"개발자 리소스 효율화를 위해 진행한 프로젝트",startAt:"2022-03",endAt:"2022-07",techStack:["React Native","Gatsby","TanStack Query","Material UI","Emotion","GraphQL"]},Do=`<h1 id="플레이윙즈-하이브리드-앱-전환" tabindex="-1">플레이윙즈 하이브리드 앱 전환</h1>
<p>웹사이트 출시 이후 모바일 앱에서만 제공되던 기능이 웹에 계속 추가되면서, 개발 리소스 효율화를 위해 기존 리액트 네이티브로 작성된 모바일 앱을 웹뷰 기반 하이브리드 앱으로 전환했습니다.</p>
<h2 id="overview" tabindex="-1">Overview</h2>
<ul>
<li>
<p><strong>Period</strong>: 2022. 03. ~ 2022. 07.</p>
</li>
<li>
<p><strong>Members</strong>: 프론트엔드 개발자 2명, 풀스택 개발자 1명</p>
</li>
<li>
<p><strong>Role</strong>: 프론트엔드 개발</p>
</li>
<li>
<p><strong>TechStack</strong>:</p>
<p><strong>Mobile</strong></p>
<ul>
<li>TypeScript</li>
<li>React Native</li>
</ul>
<p><strong>Web</strong></p>
<ul>
<li>TypeScript</li>
<li>Gatsby</li>
<li>Tanstack Query</li>
<li>Material UI</li>
<li>Emotion</li>
</ul>
</li>
</ul>
<h2 id="contributions" tabindex="-1">Contributions</h2>
<ul>
<li>호텔 검색, 좋아요 등 모바일 앱 전용 서비스 웹에 출시 (기여도 80%)</li>
<li>웹페이지 모바일 앱간 통신을 위한 웹뷰 개발</li>
</ul>
<h2 id="significance" tabindex="-1">Significance</h2>
<p>하이브리드 앱 전환을 위해 웹뷰 개발을 진행하면서 모바일과 웹 앱 간의 상호작용 방법에 대해 이해할 수 있었고, 리액트 네이티브의 네이티브 모듈 구조에 대해 이해할 수 있었습니다.</p>
<h2 id="challenges" tabindex="-1">Challenges</h2>
<h3 id="웹뷰-개발-및-연동" tabindex="-1">웹뷰 개발 및 연동</h3>
<p>플레이윙즈 웹 어플리케이션은 SEO를 위해 기존 모바일 앱에서 제공하던 특가 및 매거진 서비스의 웹 버전을 구현하기 위해 시작되었습니다. 하지만 서비스를 운영하면서 모바일 앱의 기능들이 점차 웹 앱으로 확대되었고, 결국 웹과 모바일 두 플랫폼을 모두 관리해야 하는 상황에 직면했습니다. 당시 프론트엔드 개발자 3명이 웹과 모바일을 동시에 관리하고 있었기 때문에, 개발 리소스를 효율적으로 활용하기 위해 기존 리액트 네이티브로 작성된 모바일 앱을 웹뷰 기반 하이브리드 앱으로 전환하기로 결정했습니다.</p>
<p>하이브리드 앱으로 전환하면서, UI와 비즈니스 로직의 대부분을 웹으로 이동시켰습니다. 하지만, 소셜 로그인, 애널리틱스, 딥링크와 같은 기능은 네이티브(Android/iOS) 단에서 처리해야 했습니다. 예를 들어, 사용자가 웹에서 구글 로그인을 클릭하면, 웹이 네이티브 앱에 로그인 요청을 보내고, 네이티브 단에서 실제 구글 로그인 플로우를 실행한 후 결과를 웹으로 전달하는 방식이 필요했습니다.</p>
<p><figure><img src="projects/playwings-web-architecture.png" alt="플레이윙즈 모바일 앱 아키텍처"/><figcaption>플레이윙즈 모바일 앱 아키텍처</figcaption></figure></p>
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
`,Bo=Object.freeze(Object.defineProperty({__proto__:null,attributes:No,html:Do},Symbol.toStringTag,{value:"Module"})),Wo={name:"프루피(Proofy)",description:"소울바운드토큰(SBT) 기반 신원 인증 앱",startAt:"2023-07",endAt:"2024-06",techStack:["TypeScript","React Native","TanStack Query","Jotai","Tailwind"]},zo=`<h1 id="프루피(proofy)" tabindex="-1">프루피(Proofy)</h1>
<p>소울바운드토큰(SBT) 기반 신원 인증 서비스 '프루피'의 모바일 어플리케이션을 개발한 프로젝트입니다. KYC와 SBT 민팅을 통한 신원인증 기능, 지갑 관리, 연봉 비교 기능 등을 포함하고 있습니다.</p>
<h2 id="overview" tabindex="-1">Overview</h2>
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
<h2 id="contributions" tabindex="-1">Contributions</h2>
<ul>
<li>앱 주요 기능 개발 (기여도 40%)
<ul>
<li>react-hook-form을 이용한 KYC 입력 폼 개발</li>
<li>react-native-reanimated 도입 및 애니메이션 로직 개발</li>
<li>소셜 로그인(Kakao, Google, Apple) 연동</li>
<li>소득 인증 기능 개발</li>
</ul>
</li>
<li>Fastlane, Github Workflow를 이용한 배포 관리</li>
</ul>
<h2 id="significance" tabindex="-1">Significance</h2>
<p>이 프로젝트에서 Git-flow 전략을 처음 경험했습니다. 이전 회사에서는 트렁크 기반 개발 환경에서 하나의 main 브랜치만 사용하여 개발했지만, 이번 프로젝트에서는 Git-flow를 도입하면서 두 전략의 차이점과 각 접근 방식의 장단점을 비교할 수 있었습니다.</p>
<p>트렁크 기반 개발은 작은 변경사항을 자주 통합할 수 있어 브랜치 관리가 간편하고, 코드 리뷰 부담이 줄어든다는 장점이 있습니다. 하지만 PR당 코드량이 적기 때문에 모든 기능을 하나의 PR에 담기 어려워, 코드 리뷰 시 기능의 전체 흐름을 이해하기 까다로운 경우가 있었습니다. 반면, Git-flow 전략에서는 기능 단위로 브랜치와 PR을 생성하기 때문에 코드 리뷰 시 기능의 맥락을 더 쉽게 파악할 수 있고, 완성된 기능만 통합할 수 있어 배포 관리를 더 안정적으로 할 수 있었습니다.</p>
<p>또한, 이번 프로젝트는 Jotai를 처음으로 도입한 사례이기도 합니다. SWR과 Tanstack Query가 등장하면서 클라이언트 상태와 서버 상태가 분리되면서 전역 상태 관리의 필요성이 줄어들었습니다. 이러한 흐름 속에서 Redux 대신 Jotai를 선택함으로써 보일러플레이트를 줄이고 번들 크기를 최적화할 수 있었습니다. 특히, Jotai는 Context API와 달리 상태를 소비하는 모든 컴포넌트가 아니라 필요한 부분에서만 리렌더링을 발생시켜 성능을 더 개선할 수 있었습니다.</p>
`,qo=Object.freeze(Object.defineProperty({__proto__:null,attributes:Wo,html:zo},Symbol.toStringTag,{value:"Module"}));function bn(e){return new Date(parseInt(e.substring(0,4)),parseInt(e.substring(5))-1)}function Ho(e){return e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}const Uo={altong:Co,beliefy:Fo,proofy:qo,playwingsWebview:Bo,playwingsWeb:Oo,playwingsRenewal:Ao,pedsfolio:To},Fe=["pedsfolio","beliefy","altong","proofy","playwingsWebview","playwingsWeb","playwingsRenewal"].map(e=>{const{attributes:t,html:n}=Uo[e],{startAt:s,endAt:a,...r}=t;return{id:Ho(e),...r,image:xo[e],startAt:bn(s),endAt:a?bn(a):void 0,detail:n,showcase:ho[e]||[]}}),me={name:"정승훈",aka:"페즈",contacts:{email:"hugh1127@gmail.com",github:"https://github.com/devpeds",linkedin:"https://www.linkedin.com/in/seunghoon-jung-041a811a5/"},skills:{Languages:[N.ts,N.dart],Frontend:[N.react,N.next,N.gatsby,N.rn,N.flutter],"Cloud Services":[N.firebase,N.aws],DevOps:[N.fastlane,N.gradle,N.gerrit]},careers:[{company:{name:"SBT"},positions:[{title:"소프트웨어 엔지니어",employmentType:"정규직",startAt:new Date(2023,6,1),endAt:new Date(2024,10,30),performances:["인증 기반 데이팅 서비스, 빌리피 모바일 어플리케이션 개발 및 운영","소울바운드 토큰(SBT)을 통한 신원 인증 서비스, 프루피 모바일 어플리케이션 개발 및 운영","알뜰폰 비교 서비스, 알통 웹 어플리케이션 개발"]}]},{company:{name:"스퀘어랩"},positions:[{title:"소프트웨어 엔지니어",employmentType:"정규직",startAt:new Date(2020,3),endAt:new Date(2023,5),performances:["플레이윙즈 모바일 어플리케이션 개발 및 운영","플레이윙즈 웹 어플리케이션 개발 및 운영","플레이윙즈 백오피스 시스템 개발 지원","3명의 프론트엔드 개발자로 구성된 팀의 개발 일정 조율 및 리소스 관리 (2023.01~2023.06)"]},{title:"소프트웨어 엔지니어",employmentType:"인턴",startAt:new Date(2020,0),endAt:new Date(2020,2),performances:["여행 특가 알림 서비스, 플레이윙즈 모바일 어플리케이션 개발","OTA 서비스, kTravel 프론트엔드 개발"]}]}],projects:Fe},ls=[{id:pe.skills,name:"Skills"},{id:pe.careers,name:"Careers"},{id:pe.projects,name:"Projects"}];function is(e){const[t,n]=u.useState(window.matchMedia(e).matches);return u.useEffect(()=>{const s=window.matchMedia(e),a=r=>n(r.matches);return s.addEventListener("change",a),()=>s.removeEventListener("change",a)},[e]),t}function _t(e,t){return e?t(e):void 0}function et(e){return`@media (min-width: ${lt[e]}px)`}function ue(e,t){return`${t}px ${e}px`}function cs(e){return ue(e,0)}function ps(e){return ue(0,e)}function Ut(e,t,n,s){return`${n}px ${t}px ${s}px ${e}px`}function jn(e,t,n){return Ut(e,t,n,n)}function ve(e,t="active"){return{"@media (hover: hover) and (pointer: fine)":{"&:hover":e},..._t(t==="active",()=>({"&:active":e}))}}function Vo(e){if(e.startsWith("#"))return[parseInt(e.substring(1,3),16),parseInt(e.substring(3,5),16),parseInt(e.substring(5,7),16),1];if(e.startsWith("rgb")){const t=e.startsWith("rgba")?5:4,n=e.substring(t,e.length-1).split(",").map(s=>parseInt(s));return[n[0],n[1],n[2],n[3]??1]}throw new Error("unsupported format")}const mt=(e,t)=>[`${t?90:60} 207`,`${t?0:60} 60`,`${t?90:60} 207`][e],yt=(e,t)=>t?[-134,-30,-134][e]:0,Go={self:k({"svg > path":{transition:`
        stroke-dasharray .5s cubic-bezier(0.4, 0, 0.2, 1),
        stroke-dashoffset .5s cubic-bezier(0.4, 0, 0.2, 1)
      `}})};function Yo(e){const{className:t,open:n,onClick:s}=e;return w("button",{css:Go.self,className:t,"aria-label":n?"메뉴 닫기":"메뉴 열기",onClick:s,children:D("svg",{viewBox:"0 0 100 100",fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:6,children:[w("path",{d:"M 20,29 H 80 C 80,29 94.5,28.8 94.5,66.7 94.5,78 91,81.7 85.3,81.7 79.5,81.7 75,75 75,75 L 25,25",strokeDasharray:mt(0,n),strokeDashoffset:yt(0,n)}),w("path",{d:"M 20,50 H 80",strokeDasharray:mt(1,n),strokeDashoffset:yt(1,n)}),w("path",{d:"M 20,71 H 80 C 80,71 94.5,71.2 94.5,33.3 94.5,22 91,18.3 85.3,18.3 79.5,18.3 75,25 75,25 L 25,75",strokeDasharray:mt(2,n),strokeDashoffset:yt(2,n)})]})})}const Vt={base:k({fontSize:"1em",fontWeight:700,button:ve({backgroundColor:E.primary08,color:E.primary})}),bar:k({ul:{display:"flex",flexDirection:"row",justifyContent:"center",gap:16},button:{padding:ue(16,12),textAlign:"center",borderRadius:8}}),collapsible:k({overflow:"hidden",transition:"height 0.25s",ul:{display:"flex",flexDirection:"column",paddingBottom:12},button:{padding:ue(24,12),textAlign:"start",width:"100%"}})},us=u.createContext({menus:[],onMenuClick:()=>{}}),Pe=e=>{const{menus:t,children:n,onMenuClick:s}=e;return w(us.Provider,{value:{menus:t,onMenuClick:s},children:n})};function ds({className:e,ref:t}){const{menus:n,onMenuClick:s}=u.useContext(us);return w("nav",{className:e,css:Vt.base,children:w("ul",{ref:t,children:n.map(a=>w("li",{children:w("button",{onClick:()=>s(a),children:a.name})},a.id))})})}Pe.Bar=function(){return w(ds,{css:Vt.bar})};Pe.Collapsible=function({open:t}){var a;const n=u.useRef(null),s=t?(a=n.current)==null?void 0:a.clientHeight:0;return w(ds,{ref:n,css:[Vt.collapsible,k({height:s})]})};const Ve={self:k({position:"fixed",top:0,left:0,right:0,zIndex:100,transition:"all .2s"}),inner:k({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",padding:ue(20,10),paddingTop:"calc(10px + env(safe-area-inset-top))"}),logo:k({fontSize:"1.2em",fontWeight:700,lineHeight:"40px"}),menuButton:k({width:40,height:40,padding:4})};function fs({className:e}){const[t,n]=u.useState(!1),s=is(`(min-width: ${lt.md}px)`),a=u.useRef(null),r=u.useRef(null),{pathname:o,hash:l}=oe(),c=We();u.useEffect(()=>{l&&requestAnimationFrame(()=>{var j;const m=decodeURIComponent(l.substring(1)),y=document.getElementById(m);if(y){const f=((j=r.current)==null?void 0:j.getBoundingClientRect().height)??0;window.scrollBy({top:y.getBoundingClientRect().top-f,behavior:"smooth"})}c("",{replace:!0})})},[l,c]),u.useEffect(()=>{const m=y=>{var j;(j=a.current)!=null&&j.contains(y.target)||n(!1)};return window.addEventListener("click",m),()=>window.removeEventListener("click",m)},[]);const p=()=>{if(o==="/")return window.scrollTo({top:0,behavior:"smooth"});c("/")},d=m=>{c(`/#${m.id}`,{replace:o==="/"}),n(!1)};return w("header",{ref:a,css:Ve.self,className:e,children:w(Pe,{menus:ls,onMenuClick:d,children:D(Me,{children:[D("div",{ref:r,css:Ve.inner,children:[w("button",{css:Ve.logo,onClick:p,children:"PEDSFOLIO"}),s===!0&&w(Pe.Bar,{}),s===!1&&w(Yo,{css:Ve.menuButton,open:t,onClick:()=>n(m=>!m)})]}),s===!1&&w(Pe.Collapsible,{open:t})]})})})}const hs={self:k({display:"flex",flexDirection:"column",padding:"48px 24px"}),title:k({fontSize:"2em",fontWeight:700,padding:ps(16),marginBottom:16})},Pt=e=>w("section",{css:hs.self,...e});Pt.Title=e=>w("h2",{css:hs.title,...e});const vn={list:k({display:"flex",flexDirection:"row",flexWrap:"wrap",gap:12}),item:k({padding:ue(12,4),borderRadius:8,fontWeight:700})},xn={base:k({border:`1px solid ${E.dark12}`,color:E.dark87}),[N.ts]:k({backgroundColor:"#3178c6",color:E.white}),[N.dart]:k({backgroundColor:"#fa7343",color:E.dark}),[N.react]:k({backgroundColor:"#61dafb",color:E.dark87}),[N.next]:k({backgroundColor:E.black,color:E.white}),[N.gatsby]:k({backgroundColor:"#663399",color:E.white}),[N.rn]:k({backgroundColor:"#61dafb",color:E.dark87}),[N.flutter]:k({backgroundColor:"#02569b",color:E.white}),[N.firebase]:k({backgroundColor:"#ffca28",color:E.dark}),[N.aws]:k({backgroundColor:"#ff9900",color:E.dark}),[N.fastlane]:k({backgroundColor:"#00f2ea",color:E.dark}),[N.gradle]:k({backgroundColor:"#02303a",color:E.white}),[N.gerrit]:k({backgroundColor:"#aaffaa",color:E.dark87}),[N.tQuery]:k({backgroundColor:"#ff4154",color:E.white}),[N.tailwind]:k({backgroundColor:"#38b2ac",color:E.white}),[N.emotion]:k({backgroundColor:"#c43bad",color:E.white}),[N.graphql]:k({backgroundColor:"#e10098",color:E.white})};function gs(e){const{className:t,skills:n}=e;return w("ul",{className:t,css:vn.list,children:n.map(s=>w("li",{css:[vn.item,xn[s]??xn.base],children:s},s))})}const wt={card:k({display:"flex",flexDirection:"column",rowGap:32,padding:32,backgroundColor:E.white,borderRadius:24,boxShadow:`0 0 16px 0 ${E.black12}`}),row:k({display:"flex",flexDirection:"column",gap:12,[`@media (min-width: ${lt.sm}px)`]:{flexDirection:"row"}}),rowTitle:k({flexShrink:0,minWidth:160,fontSize:"1.2em",fontWeight:700})};function Jo(e){const{skills:t}=e;return w("div",{css:wt.card,children:Object.keys(t).map(n=>D("div",{css:wt.row,children:[w("span",{css:wt.rowTitle,children:n}),w(gs,{skills:t[n]})]},n))})}function Sn(e){return`${e.getFullYear()}년 ${e.getMonth()+1}월`}function ms(e,t){return`${Sn(e)} ~ ${t?Sn(t):"현재"}`}function Ko(e,t){if(t=t??new Date,e>t)throw new Error("startAt cannot be bigger than endAt");let n=t.getFullYear()-e.getFullYear(),s=t.getMonth()-e.getMonth()+1;return n?s?(s<0&&(n-=1,s+=12),`${n}년 ${s}개월`):`${n}년`:`${s}개월`}const kn=12,_e=15,Cn=4,ys=4,Tt=3,En=(_e-Tt)/2+ys,se={list:k({marginTop:-12}),header:k({display:"flex",flexDirection:"row",alignItems:"center",position:"relative",fontSize:"1.8em",fontWeight:700,paddingTop:kn,paddingBottom:24,"&:after":{content:'""',position:"absolute",bottom:0,left:En,width:Tt,backgroundColor:E.dark12,height:24-kn}}),item:k({position:"relative",paddingLeft:40}),period:k({fontSize:"0.9em",fontWeight:700,color:E.black60,marginBottom:4}),content:k({paddingBottom:40,color:E.dark87}),title:k({fontSize:"1.5em",fontWeight:700,marginBottom:8}),description:k({fontSize:"1.1em",whiteSpace:"break-spaces"}),marker:k({position:"absolute",top:0,bottom:0,left:0,width:_e,"&:before":{content:'""',width:_e,height:_e,borderRadius:"100%",backgroundColor:E.primary,position:"absolute",top:Cn,left:ys},"&:after":{content:'""',width:Tt,backgroundColor:E.dark12,position:"absolute",top:_e+Cn*2,left:En,bottom:0}}),noTail:k({"&:after":{content:"none"}})};function Qo(e){const{career:t,noTail:n}=e;return D(de,{children:[w("li",{css:se.header,children:t.company.name}),...t.positions.map((s,a)=>D("li",{css:se.item,children:[D("div",{css:se.period,children:[ms(s.startAt,s.endAt)," ·"," ",Ko(s.startAt,s.endAt)]}),D("div",{css:se.content,children:[D("div",{css:se.title,children:[s.title,", ",s.employmentType]}),w("div",{css:se.description,children:s.performances.map(r=>`- ${r}`).join(`
`)})]}),w("div",{css:[se.marker,n&&a===t.positions.length-1&&se.noTail]})]},a))]})}function Xo(e){const{careers:t}=e;return w("ul",{css:se.list,children:t.map((n,s)=>w(Qo,{career:n,noTail:s===t.length-1},n.company.name))})}const Zo="/portfolio/assets/background-C32ofXj_.png",el=u.lazy(()=>_n(()=>import("./Typewriter-B2AoCKAP.js"),[])),bt={self:k({position:"relative",minHeight:"min(720px, 100vh)",color:E.white,background:`radial-gradient(circle, ${E.dark87} 0, ${E.dark} 100%), url(${Zo}) 50% no-repeat`,backgroundSize:"cover","@supports (min-height: 100svh)":{minHeight:"min(720px, 100svh)"},"&::before":{content:'""',position:"absolute",inset:0,isolation:"isolate",backdropFilter:"grayscale(100%)"}}),container:k({position:"absolute",inset:0,paddingTop:"calc(80px + env(safe-area-inset-top))",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"}),typewriter:k({fontSize:"clamp(3rem, 8vw, 5rem)",fontWeight:700,textAlign:"center",whiteSpace:"break-spaces",wordBreak:"keep-all",margin:Ut(20,20,40,120),"& .Typewriter__cursor":{fontSize:"1.2em",lineHeight:1}})};function tl(e){const{name:t,aka:n}=e;return w("div",{css:bt.self,children:w(Me,{css:bt.container,children:w("div",{css:bt.typewriter,children:w(u.Suspense,{children:w(el,{name:t,aka:n})})})})})}function ws(e){const{className:t,alt:n}=e,s=e.image[e.image.length-1];return w("img",{className:t,loading:s.loading,srcSet:s.srcset,src:s.src,alt:n})}const bs=32;function Rn(e){return`calc((100% - ${bs*(e-1)}px) / ${e})`}const ie={list:k({display:"flex",flexDirection:"row",flexWrap:"wrap",gap:bs}),item:k({display:"flex",flexDirection:"column",alignItems:"stretch",backgroundColor:E.white,color:E.dark87,fontSize:"1em",textAlign:"left",width:"100%",borderRadius:16,overflow:"hidden",transition:"transform .1s",boxShadow:`0 0 16px 0 ${E.black12}`,[et("sm")]:{width:Rn(2)},[et("md")]:{width:Rn(3)}},ve({transform:"scale(1.05)"},"none")),image:k({objectFit:"cover",aspectRatio:16/9,width:"100%"}),content:k({flex:1,display:"flex",flexDirection:"column",padding:24}),period:k({fontSize:"0.8em",fontWeight:700,color:E.black60,marginBottom:4}),title:k({fontSize:"1.2em",fontWeight:700,marginBottom:12}),description:k({flex:1,marginBottom:24}),techStack:k({marginTop:24,fontSize:16,lineHeight:"20px",gap:8,height:34,overflow:"hidden"})};function nl(e){const{project:t,onClick:n}=e;return D("button",{css:ie.item,onClick:n,children:[w(ws,{css:ie.image,image:t.image,alt:t.name}),D("div",{css:ie.content,children:[w("div",{css:ie.period,children:ms(t.startAt,t.endAt)}),w("div",{css:ie.title,children:t.name}),w("div",{css:ie.description,children:t.description}),w("hr",{}),w(gs,{css:ie.techStack,skills:t.techStack})]})]})}function sl(e){const{projects:t,onProjectClick:n}=e;return u.useMemo(()=>w(de,{children:t.map(s=>w(nl,{project:s,onClick:()=>n(s)},s.name))}),[t,n])}function al(e){const{projects:t}=e,n=We();return w("div",{css:ie.list,children:w(sl,{projects:t,onProjectClick:s=>n(`/${s.id}`)})})}const tt=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",...e},u.createElement("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})),rl=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",fill:"currentColor",...e},u.createElement("path",{d:"M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48L48 64zM0 176L0 384c0 35.3 28.7 64 64 64l384 0c35.3 0 64-28.7 64-64l0-208L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"})),ol=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 496 512",fill:"currentColor",...e},u.createElement("path",{d:"M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"})),ll=e=>u.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 448 512",fill:"currentColor",...e},u.createElement("path",{d:"M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"})),jt={self:k({width:40,height:40,padding:8,borderRadius:"50%"}),color:e=>{const[t,n,s]=Vo(e?E[e]:E.dark);return k({color:e?E[e]:"inherit"},ve({backgroundColor:`rgba(${t}, ${n}, ${s}, .12)`}))},icon:k({width:"100%",height:"100%"})};function $t(e){const{Icon:t,color:n,...s}=e;return w("button",{...s,css:[jt.self,jt.color(n)],children:w(t,{css:jt.icon})})}const ce={self:k({color:E.white,textAlign:"center"}),getInTouch:k({display:"flex",flexDirection:"column",alignItems:"center",padding:Ut(20,20,120,80)}),title:k({fontSize:"2.5em"}),contacts:k({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:24,marginTop:32,padding:cs(16),width:"100%"}),contact:k({flex:1,maxWidth:80,height:"100%",aspectRatio:1},ve({transform:"scale(1.2)"})),divider:k({borderColor:E.white33}),copyright:k({padding:24,color:E.white60})};function il(e){const{contacts:t}=e,n=[{Icon:rl,label:"이메일",url:`mailto: ${t.email}`,target:"_self"},{Icon:ol,label:"깃헙",url:t.github,target:"_blank"},{Icon:ll,label:"링크드인",url:t.linkedin,target:"_blank"}];return D("footer",{css:ce.self,children:[D("div",{css:ce.getInTouch,children:[w("h2",{css:ce.title,children:"Get In Touch"}),w("div",{css:ce.contacts,children:n.map(s=>w($t,{css:ce.contact,"aria-label":s.label,Icon:s.Icon,onClick:()=>window.open(s.url,s.target)},s.url))})]}),w("hr",{css:ce.divider}),w("p",{css:ce.copyright,children:"© 2025 Seunghoon Jung"})]})}const Fn={[pe.skills]:{component:w(Jo,{skills:me.skills})},[pe.careers]:{component:w(Xo,{careers:me.careers}),divider:!0},[pe.projects]:{component:w(al,{projects:me.projects})}},vt={navBarLight:k({color:E.dark87,background:`linear-gradient(180deg, ${E.lightGray} 0, ${E.lightGray87} 100%)`,backdropFilter:"blur(6px)",boxShadow:`0 0px 8px ${E.dark12}`}),navBarDark:k({backgroundColor:E.dark60,color:E.white}),footer:k({backgroundColor:E.dark})};function cl(){const[e,t]=u.useState(window.scrollY>200);return u.useEffect(()=>{const n=()=>{t(window.scrollY>200)};return window.addEventListener("scroll",n),()=>window.removeEventListener("scroll",n)},[]),D(de,{children:[w(fs,{css:e?vt.navBarLight:vt.navBarDark}),w(tl,{name:me.name,aka:me.aka}),w(Me,{children:ls.map(n=>D(u.Fragment,{children:[D(Pt,{children:[w(Pt.Title,{id:n.id,children:n.name}),Fn[n.id].component]}),Fn[n.id].divider&&w("hr",{})]},n.id))}),w("div",{css:vt.footer,children:w(Me,{children:w(il,{contacts:me.contacts})})})]})}const pl=k({h1:{marginBottom:24},"h2, h3, p, pre":{marginBottom:16},"& ul, ol":{listStyle:"initial",paddingLeft:20,paddingBottom:16,"ul, ol":{paddingBottom:0}},li:{marginBottom:8,summary:{padding:0,paddingTop:8,fontSize:"0.9em",fontWeight:400}},summary:{padding:ps(12)},"& :not(pre) > code":{backgroundColor:E.black12,color:"red",margin:cs(2),padding:4,borderRadius:4},pre:{backgroundColor:E.white,padding:16,overflow:"scroll",borderRadius:8},figure:{display:"block",width:"100%",maxWidth:480,margin:"0 auto",textAlign:"center",fontWeight:"bold",img:{width:"100%"}}});function ul(e){const t=typeof e.content=="string"?e.content:u.use(e.content);return w("div",{css:pl,className:e.className,dangerouslySetInnerHTML:{__html:t}})}function dl(){const[e,t]=u.useState(!1),n=is("(hover: hover) and (pointer: fine)"),s=u.useRef(null);return u.useEffect(()=>{if(!n)return;const a=s.current,r=()=>t(!0),o=()=>t(!1);return a==null||a.addEventListener("mouseenter",r),a==null||a.addEventListener("mouseleave",o),()=>{a==null||a.removeEventListener("mouseenter",r),a==null||a.removeEventListener("mouseleave",o)}},[n]),{ref:s,isHovered:e}}const xt=12,Re={self:k({position:"relative"}),list:k({display:"flex",flexDirection:"row",gap:xt,padding:ue(24,12),overflowX:"scroll",scrollbarWidth:"none",scrollSnapType:"x mandatory",scrollPadding:24}),item:k({flexShrink:0,width:"100%",scrollSnapAlign:"start",[et("sm")]:{width:`calc(100% / 2 - ${xt}px)`},[et("md")]:{width:`calc(100% / 3 - ${xt}px)`},img:{width:"100%",aspectRatio:4/3,boxShadow:`0 0 8px ${E.dark33}`},figcaption:{marginTop:4,textAlign:"center"}}),arrow:(e,t)=>k({visibility:t?"visible":"hidden",opacity:t?1:0,transition:"visibility .1s, opacity .3s",backgroundColor:E.white87,boxShadow:`0 0 8px ${E.dark12}`,width:60,height:60,padding:16,position:"absolute",top:"50%",transform:"translateY(-50%)",left:_t(e==="left",()=>4),..._t(e==="right",()=>({right:4,svg:{transform:"rotate(180deg)"}}))},ve({opacity:.7,backgroundColor:E.white87}))};function fl(e){const{className:t,showcase:n}=e,{ref:s,isHovered:a}=dl(),r=u.useRef(null),o=l=>{var d,m;const c=l==="left"?-1:1,p=((d=s.current)==null?void 0:d.clientWidth)??0;(m=r.current)==null||m.scrollBy({left:c*p,behavior:"smooth"})};return n.length?D("div",{ref:s,className:t,css:Re.self,children:[w("div",{ref:r,css:Re.list,children:n.map(({image:l,alt:c},p)=>D("figure",{css:Re.item,children:[w(ws,{image:l,alt:c}),w("figcaption",{children:c})]},p))}),w($t,{css:Re.arrow("left",a),onClick:()=>o("left"),Icon:tt}),w($t,{css:Re.arrow("right",a),onClick:()=>o("right"),Icon:tt})]}):w(de,{})}const he={navBar:k({position:"sticky",background:E.dark,color:E.white}),showcase:k({marginTop:24}),contents:k({padding:24}),nav:k({marginBottom:24,display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",button:{textAlign:"start",fontSize:"0.8em",fontWeight:700,color:E.dark33,div:{fontSize:"1.25em",marginTop:2,display:"flex",flexDirection:"row",alignItems:"center",position:"relative",svg:{position:"absolute"},span:{color:E.dark87}},...ve({color:E.dark87})}}),prev:k({padding:jn(44,8,8),svg:{left:-20}}),next:k({marginLeft:"auto",padding:jn(8,44,8),svg:{right:-20,transform:"rotate(180deg)"}})};function hl(){const e=We();return u.useEffect(()=>{e("/",{replace:!0})},[e]),w(de,{})}function gl(){const{projectId:e}=Za(),t=We(),n=Fe.findIndex(o=>o.id===e);if(n===-1)return w(hl,{});const s=Fe[n],a=Fe[n-1],r=Fe[n+1];return D(de,{children:[w(fs,{css:he.navBar}),D(Me,{children:[w(fl,{css:he.showcase,showcase:s.showcase}),w(ul,{css:he.contents,content:s.detail}),D("div",{css:he.nav,children:[a&&D("button",{css:he.prev,onClick:()=>t(`/${a.id}`),children:["이전",D("div",{children:[w(tt,{width:16,height:16}),w("span",{children:a.name})]})]}),r&&D("button",{css:he.next,onClick:()=>t(`/${r.id}`),children:["다음",D("div",{children:[w("span",{children:r.name}),w(tt,{width:16,height:16})]})]})]})]})]})}const ml=k("@font-face{font-family:'NanumSquare Neo';font-weight:400;font-display:swap;src:local('NanumSquare Neo'),url(",Jr,") format(woff2),url(",Yr,") format(woff);}@font-face{font-family:'NanumSquare Neo';font-weight:700;font-display:swap;src:local('NanumSquare Neo'),url(",Qr,") format(woff2),url(",Kr,") format(woff);}*{margin:0;padding:0;box-sizing:border-box;line-height:1.5;text-underline-offset:0.3em;}:root{font-family:'NanumSquare Neo',system-ui,sans-serif;font-synthesis:none;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased;-moz-font-smoothing:grayscale;color:",E.dark87,";background-color:",E.lightGray,";}:target{scroll-margin-top:80px;}ul,ol{list-style:none;}button{background-color:transparent;border:0;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;transition:color 0.2s,background-color 0.3s;}button:not(:disabled),[type='button']:not(:disabled){cursor:pointer;}hr{border-color:",E.dark12,";}");_n(async()=>{const{createRoot:e}=await import("./client-DCdJFhfc.js").then(t=>t.c);return{createRoot:e}},[]).then(({createRoot:e})=>e(document.getElementById("root")).render(D(u.StrictMode,{children:[w(Sa,{styles:ml}),D(Nr,{basename:"/portfolio/",children:[D(hr,{children:[w(Rt,{index:!0,element:w(cl,{})}),w(Rt,{path:":projectId",element:w(gl,{})})]}),w(Xr,{})]})]})));export{E as c,Rs as g,w as j,Ts as r};
