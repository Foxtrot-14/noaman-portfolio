const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Homepage-BR3Mhw4Z.js","assets/index-CoLBgWFf.js","assets/Devpage-Cw5t434_.js","assets/index-2jUAhGV9.js","assets/DSApage-UBXpgWRT.js","assets/MyStack-DAFVIz0g.js"])))=>i.map(i=>d[i]);
(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))c(d);new MutationObserver(d=>{for(const b of d)if(b.type==="childList")for(const y of b.addedNodes)y.tagName==="LINK"&&y.rel==="modulepreload"&&c(y)}).observe(document,{childList:!0,subtree:!0});function s(d){const b={};return d.integrity&&(b.integrity=d.integrity),d.referrerPolicy&&(b.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?b.credentials="include":d.crossOrigin==="anonymous"?b.credentials="omit":b.credentials="same-origin",b}function c(d){if(d.ep)return;d.ep=!0;const b=s(d);fetch(d.href,b)}})();function nh(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var ko={exports:{}},jl={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var kd;function Qm(){if(kd)return jl;kd=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.fragment");function s(c,d,b){var y=null;if(b!==void 0&&(y=""+b),d.key!==void 0&&(y=""+d.key),"key"in d){b={};for(var O in d)O!=="key"&&(b[O]=d[O])}else b=d;return d=b.ref,{$$typeof:r,type:c,key:y,ref:d!==void 0?d:null,props:b}}return jl.Fragment=o,jl.jsx=s,jl.jsxs=s,jl}var Ud;function Zm(){return Ud||(Ud=1,ko.exports=Qm()),ko.exports}var Gt=Zm(),Uo={exports:{}},Xl={},Co={exports:{}},Ho={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cd;function Vm(){return Cd||(Cd=1,function(r){function o(j,tt){var F=j.length;j.push(tt);t:for(;0<F;){var gt=F-1>>>1,v=j[gt];if(0<d(v,tt))j[gt]=tt,j[F]=v,F=gt;else break t}}function s(j){return j.length===0?null:j[0]}function c(j){if(j.length===0)return null;var tt=j[0],F=j.pop();if(F!==tt){j[0]=F;t:for(var gt=0,v=j.length,w=v>>>1;gt<w;){var W=2*(gt+1)-1,$=j[W],X=W+1,ct=j[X];if(0>d($,F))X<v&&0>d(ct,$)?(j[gt]=ct,j[X]=F,gt=X):(j[gt]=$,j[W]=F,gt=W);else if(X<v&&0>d(ct,F))j[gt]=ct,j[X]=F,gt=X;else break t}}return tt}function d(j,tt){var F=j.sortIndex-tt.sortIndex;return F!==0?F:j.id-tt.id}if(r.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var b=performance;r.unstable_now=function(){return b.now()}}else{var y=Date,O=y.now();r.unstable_now=function(){return y.now()-O}}var p=[],h=[],R=1,U=null,M=3,B=!1,T=!1,_=!1,H=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,Y=typeof setImmediate<"u"?setImmediate:null;function J(j){for(var tt=s(h);tt!==null;){if(tt.callback===null)c(h);else if(tt.startTime<=j)c(h),tt.sortIndex=tt.expirationTime,o(p,tt);else break;tt=s(h)}}function rt(j){if(_=!1,J(j),!T)if(s(p)!==null)T=!0,Qn();else{var tt=s(h);tt!==null&&tn(rt,tt.startTime-j)}}var K=!1,mt=-1,St=5,At=-1;function L(){return!(r.unstable_now()-At<St)}function et(){if(K){var j=r.unstable_now();At=j;var tt=!0;try{t:{T=!1,_&&(_=!1,N(mt),mt=-1),B=!0;var F=M;try{n:{for(J(j),U=s(p);U!==null&&!(U.expirationTime>j&&L());){var gt=U.callback;if(typeof gt=="function"){U.callback=null,M=U.priorityLevel;var v=gt(U.expirationTime<=j);if(j=r.unstable_now(),typeof v=="function"){U.callback=v,J(j),tt=!0;break n}U===s(p)&&c(p),J(j)}else c(p);U=s(p)}if(U!==null)tt=!0;else{var w=s(h);w!==null&&tn(rt,w.startTime-j),tt=!1}}break t}finally{U=null,M=F,B=!1}tt=void 0}}finally{tt?Pt():K=!1}}}var Pt;if(typeof Y=="function")Pt=function(){Y(et)};else if(typeof MessageChannel<"u"){var Gn=new MessageChannel,qn=Gn.port2;Gn.port1.onmessage=et,Pt=function(){qn.postMessage(null)}}else Pt=function(){H(et,0)};function Qn(){K||(K=!0,Pt())}function tn(j,tt){mt=H(function(){j(r.unstable_now())},tt)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(j){j.callback=null},r.unstable_continueExecution=function(){T||B||(T=!0,Qn())},r.unstable_forceFrameRate=function(j){0>j||125<j?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):St=0<j?Math.floor(1e3/j):5},r.unstable_getCurrentPriorityLevel=function(){return M},r.unstable_getFirstCallbackNode=function(){return s(p)},r.unstable_next=function(j){switch(M){case 1:case 2:case 3:var tt=3;break;default:tt=M}var F=M;M=tt;try{return j()}finally{M=F}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(j,tt){switch(j){case 1:case 2:case 3:case 4:case 5:break;default:j=3}var F=M;M=j;try{return tt()}finally{M=F}},r.unstable_scheduleCallback=function(j,tt,F){var gt=r.unstable_now();switch(typeof F=="object"&&F!==null?(F=F.delay,F=typeof F=="number"&&0<F?gt+F:gt):F=gt,j){case 1:var v=-1;break;case 2:v=250;break;case 5:v=1073741823;break;case 4:v=1e4;break;default:v=5e3}return v=F+v,j={id:R++,callback:tt,priorityLevel:j,startTime:F,expirationTime:v,sortIndex:-1},F>gt?(j.sortIndex=F,o(h,j),s(p)===null&&j===s(h)&&(_?(N(mt),mt=-1):_=!0,tn(rt,F-gt))):(j.sortIndex=v,o(p,j),T||B||(T=!0,Qn())),j},r.unstable_shouldYield=L,r.unstable_wrapCallback=function(j){var tt=M;return function(){var F=M;M=tt;try{return j.apply(this,arguments)}finally{M=F}}}}(Ho)),Ho}var Hd;function Km(){return Hd||(Hd=1,Co.exports=Vm()),Co.exports}var wo={exports:{}},nt={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var wd;function Jm(){if(wd)return nt;wd=1;var r=Symbol.for("react.transitional.element"),o=Symbol.for("react.portal"),s=Symbol.for("react.fragment"),c=Symbol.for("react.strict_mode"),d=Symbol.for("react.profiler"),b=Symbol.for("react.consumer"),y=Symbol.for("react.context"),O=Symbol.for("react.forward_ref"),p=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),R=Symbol.for("react.lazy"),U=Symbol.iterator;function M(v){return v===null||typeof v!="object"?null:(v=U&&v[U]||v["@@iterator"],typeof v=="function"?v:null)}var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,_={};function H(v,w,W){this.props=v,this.context=w,this.refs=_,this.updater=W||B}H.prototype.isReactComponent={},H.prototype.setState=function(v,w){if(typeof v!="object"&&typeof v!="function"&&v!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,v,w,"setState")},H.prototype.forceUpdate=function(v){this.updater.enqueueForceUpdate(this,v,"forceUpdate")};function N(){}N.prototype=H.prototype;function Y(v,w,W){this.props=v,this.context=w,this.refs=_,this.updater=W||B}var J=Y.prototype=new N;J.constructor=Y,T(J,H.prototype),J.isPureReactComponent=!0;var rt=Array.isArray,K={H:null,A:null,T:null,S:null},mt=Object.prototype.hasOwnProperty;function St(v,w,W,$,X,ct){return W=ct.ref,{$$typeof:r,type:v,key:w,ref:W!==void 0?W:null,props:ct}}function At(v,w){return St(v.type,w,void 0,void 0,void 0,v.props)}function L(v){return typeof v=="object"&&v!==null&&v.$$typeof===r}function et(v){var w={"=":"=0",":":"=2"};return"$"+v.replace(/[=:]/g,function(W){return w[W]})}var Pt=/\/+/g;function Gn(v,w){return typeof v=="object"&&v!==null&&v.key!=null?et(""+v.key):w.toString(36)}function qn(){}function Qn(v){switch(v.status){case"fulfilled":return v.value;case"rejected":throw v.reason;default:switch(typeof v.status=="string"?v.then(qn,qn):(v.status="pending",v.then(function(w){v.status==="pending"&&(v.status="fulfilled",v.value=w)},function(w){v.status==="pending"&&(v.status="rejected",v.reason=w)})),v.status){case"fulfilled":return v.value;case"rejected":throw v.reason}}throw v}function tn(v,w,W,$,X){var ct=typeof v;(ct==="undefined"||ct==="boolean")&&(v=null);var at=!1;if(v===null)at=!0;else switch(ct){case"bigint":case"string":case"number":at=!0;break;case"object":switch(v.$$typeof){case r:case o:at=!0;break;case R:return at=v._init,tn(at(v._payload),w,W,$,X)}}if(at)return X=X(v),at=$===""?"."+Gn(v,0):$,rt(X)?(W="",at!=null&&(W=at.replace(Pt,"$&/")+"/"),tn(X,w,W,"",function(qt){return qt})):X!=null&&(L(X)&&(X=At(X,W+(X.key==null||v&&v.key===X.key?"":(""+X.key).replace(Pt,"$&/")+"/")+at)),w.push(X)),1;at=0;var Wt=$===""?".":$+":";if(rt(v))for(var ht=0;ht<v.length;ht++)$=v[ht],ct=Wt+Gn($,ht),at+=tn($,w,W,ct,X);else if(ht=M(v),typeof ht=="function")for(v=ht.call(v),ht=0;!($=v.next()).done;)$=$.value,ct=Wt+Gn($,ht++),at+=tn($,w,W,ct,X);else if(ct==="object"){if(typeof v.then=="function")return tn(Qn(v),w,W,$,X);throw w=String(v),Error("Objects are not valid as a React child (found: "+(w==="[object Object]"?"object with keys {"+Object.keys(v).join(", ")+"}":w)+"). If you meant to render a collection of children, use an array instead.")}return at}function j(v,w,W){if(v==null)return v;var $=[],X=0;return tn(v,$,"","",function(ct){return w.call(W,ct,X++)}),$}function tt(v){if(v._status===-1){var w=v._result;w=w(),w.then(function(W){(v._status===0||v._status===-1)&&(v._status=1,v._result=W)},function(W){(v._status===0||v._status===-1)&&(v._status=2,v._result=W)}),v._status===-1&&(v._status=0,v._result=w)}if(v._status===1)return v._result.default;throw v._result}var F=typeof reportError=="function"?reportError:function(v){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var w=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof v=="object"&&v!==null&&typeof v.message=="string"?String(v.message):String(v),error:v});if(!window.dispatchEvent(w))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",v);return}console.error(v)};function gt(){}return nt.Children={map:j,forEach:function(v,w,W){j(v,function(){w.apply(this,arguments)},W)},count:function(v){var w=0;return j(v,function(){w++}),w},toArray:function(v){return j(v,function(w){return w})||[]},only:function(v){if(!L(v))throw Error("React.Children.only expected to receive a single React element child.");return v}},nt.Component=H,nt.Fragment=s,nt.Profiler=d,nt.PureComponent=Y,nt.StrictMode=c,nt.Suspense=p,nt.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=K,nt.act=function(){throw Error("act(...) is not supported in production builds of React.")},nt.cache=function(v){return function(){return v.apply(null,arguments)}},nt.cloneElement=function(v,w,W){if(v==null)throw Error("The argument must be a React element, but you passed "+v+".");var $=T({},v.props),X=v.key,ct=void 0;if(w!=null)for(at in w.ref!==void 0&&(ct=void 0),w.key!==void 0&&(X=""+w.key),w)!mt.call(w,at)||at==="key"||at==="__self"||at==="__source"||at==="ref"&&w.ref===void 0||($[at]=w[at]);var at=arguments.length-2;if(at===1)$.children=W;else if(1<at){for(var Wt=Array(at),ht=0;ht<at;ht++)Wt[ht]=arguments[ht+2];$.children=Wt}return St(v.type,X,void 0,void 0,ct,$)},nt.createContext=function(v){return v={$$typeof:y,_currentValue:v,_currentValue2:v,_threadCount:0,Provider:null,Consumer:null},v.Provider=v,v.Consumer={$$typeof:b,_context:v},v},nt.createElement=function(v,w,W){var $,X={},ct=null;if(w!=null)for($ in w.key!==void 0&&(ct=""+w.key),w)mt.call(w,$)&&$!=="key"&&$!=="__self"&&$!=="__source"&&(X[$]=w[$]);var at=arguments.length-2;if(at===1)X.children=W;else if(1<at){for(var Wt=Array(at),ht=0;ht<at;ht++)Wt[ht]=arguments[ht+2];X.children=Wt}if(v&&v.defaultProps)for($ in at=v.defaultProps,at)X[$]===void 0&&(X[$]=at[$]);return St(v,ct,void 0,void 0,null,X)},nt.createRef=function(){return{current:null}},nt.forwardRef=function(v){return{$$typeof:O,render:v}},nt.isValidElement=L,nt.lazy=function(v){return{$$typeof:R,_payload:{_status:-1,_result:v},_init:tt}},nt.memo=function(v,w){return{$$typeof:h,type:v,compare:w===void 0?null:w}},nt.startTransition=function(v){var w=K.T,W={};K.T=W;try{var $=v(),X=K.S;X!==null&&X(W,$),typeof $=="object"&&$!==null&&typeof $.then=="function"&&$.then(gt,F)}catch(ct){F(ct)}finally{K.T=w}},nt.unstable_useCacheRefresh=function(){return K.H.useCacheRefresh()},nt.use=function(v){return K.H.use(v)},nt.useActionState=function(v,w,W){return K.H.useActionState(v,w,W)},nt.useCallback=function(v,w){return K.H.useCallback(v,w)},nt.useContext=function(v){return K.H.useContext(v)},nt.useDebugValue=function(){},nt.useDeferredValue=function(v,w){return K.H.useDeferredValue(v,w)},nt.useEffect=function(v,w){return K.H.useEffect(v,w)},nt.useId=function(){return K.H.useId()},nt.useImperativeHandle=function(v,w,W){return K.H.useImperativeHandle(v,w,W)},nt.useInsertionEffect=function(v,w){return K.H.useInsertionEffect(v,w)},nt.useLayoutEffect=function(v,w){return K.H.useLayoutEffect(v,w)},nt.useMemo=function(v,w){return K.H.useMemo(v,w)},nt.useOptimistic=function(v,w){return K.H.useOptimistic(v,w)},nt.useReducer=function(v,w,W){return K.H.useReducer(v,w,W)},nt.useRef=function(v){return K.H.useRef(v)},nt.useState=function(v){return K.H.useState(v)},nt.useSyncExternalStore=function(v,w,W){return K.H.useSyncExternalStore(v,w,W)},nt.useTransition=function(){return K.H.useTransition()},nt.version="19.0.0",nt}var Nd;function Go(){return Nd||(Nd=1,wo.exports=Jm()),wo.exports}var No={exports:{}},$t={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bd;function $m(){if(Bd)return $t;Bd=1;var r=Go();function o(p){var h="https://react.dev/errors/"+p;if(1<arguments.length){h+="?args[]="+encodeURIComponent(arguments[1]);for(var R=2;R<arguments.length;R++)h+="&args[]="+encodeURIComponent(arguments[R])}return"Minified React error #"+p+"; visit "+h+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function s(){}var c={d:{f:s,r:function(){throw Error(o(522))},D:s,C:s,L:s,m:s,X:s,S:s,M:s},p:0,findDOMNode:null},d=Symbol.for("react.portal");function b(p,h,R){var U=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:d,key:U==null?null:""+U,children:p,containerInfo:h,implementation:R}}var y=r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function O(p,h){if(p==="font")return"";if(typeof h=="string")return h==="use-credentials"?h:""}return $t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=c,$t.createPortal=function(p,h){var R=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!h||h.nodeType!==1&&h.nodeType!==9&&h.nodeType!==11)throw Error(o(299));return b(p,h,null,R)},$t.flushSync=function(p){var h=y.T,R=c.p;try{if(y.T=null,c.p=2,p)return p()}finally{y.T=h,c.p=R,c.d.f()}},$t.preconnect=function(p,h){typeof p=="string"&&(h?(h=h.crossOrigin,h=typeof h=="string"?h==="use-credentials"?h:"":void 0):h=null,c.d.C(p,h))},$t.prefetchDNS=function(p){typeof p=="string"&&c.d.D(p)},$t.preinit=function(p,h){if(typeof p=="string"&&h&&typeof h.as=="string"){var R=h.as,U=O(R,h.crossOrigin),M=typeof h.integrity=="string"?h.integrity:void 0,B=typeof h.fetchPriority=="string"?h.fetchPriority:void 0;R==="style"?c.d.S(p,typeof h.precedence=="string"?h.precedence:void 0,{crossOrigin:U,integrity:M,fetchPriority:B}):R==="script"&&c.d.X(p,{crossOrigin:U,integrity:M,fetchPriority:B,nonce:typeof h.nonce=="string"?h.nonce:void 0})}},$t.preinitModule=function(p,h){if(typeof p=="string")if(typeof h=="object"&&h!==null){if(h.as==null||h.as==="script"){var R=O(h.as,h.crossOrigin);c.d.M(p,{crossOrigin:R,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0})}}else h==null&&c.d.M(p)},$t.preload=function(p,h){if(typeof p=="string"&&typeof h=="object"&&h!==null&&typeof h.as=="string"){var R=h.as,U=O(R,h.crossOrigin);c.d.L(p,R,{crossOrigin:U,integrity:typeof h.integrity=="string"?h.integrity:void 0,nonce:typeof h.nonce=="string"?h.nonce:void 0,type:typeof h.type=="string"?h.type:void 0,fetchPriority:typeof h.fetchPriority=="string"?h.fetchPriority:void 0,referrerPolicy:typeof h.referrerPolicy=="string"?h.referrerPolicy:void 0,imageSrcSet:typeof h.imageSrcSet=="string"?h.imageSrcSet:void 0,imageSizes:typeof h.imageSizes=="string"?h.imageSizes:void 0,media:typeof h.media=="string"?h.media:void 0})}},$t.preloadModule=function(p,h){if(typeof p=="string")if(h){var R=O(h.as,h.crossOrigin);c.d.m(p,{as:typeof h.as=="string"&&h.as!=="script"?h.as:void 0,crossOrigin:R,integrity:typeof h.integrity=="string"?h.integrity:void 0})}else c.d.m(p)},$t.requestFormReset=function(p){c.d.r(p)},$t.unstable_batchedUpdates=function(p,h){return p(h)},$t.useFormState=function(p,h,R){return y.H.useFormState(p,h,R)},$t.useFormStatus=function(){return y.H.useHostTransitionStatus()},$t.version="19.0.0",$t}var Yd;function Pm(){if(Yd)return No.exports;Yd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),No.exports=$m(),No.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ld;function Wm(){if(Ld)return Xl;Ld=1;var r=Km(),o=Go(),s=Pm();function c(t){var n="https://react.dev/errors/"+t;if(1<arguments.length){n+="?args[]="+encodeURIComponent(arguments[1]);for(var e=2;e<arguments.length;e++)n+="&args[]="+encodeURIComponent(arguments[e])}return"Minified React error #"+t+"; visit "+n+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function d(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}var b=Symbol.for("react.element"),y=Symbol.for("react.transitional.element"),O=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),h=Symbol.for("react.strict_mode"),R=Symbol.for("react.profiler"),U=Symbol.for("react.provider"),M=Symbol.for("react.consumer"),B=Symbol.for("react.context"),T=Symbol.for("react.forward_ref"),_=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),J=Symbol.for("react.offscreen"),rt=Symbol.for("react.memo_cache_sentinel"),K=Symbol.iterator;function mt(t){return t===null||typeof t!="object"?null:(t=K&&t[K]||t["@@iterator"],typeof t=="function"?t:null)}var St=Symbol.for("react.client.reference");function At(t){if(t==null)return null;if(typeof t=="function")return t.$$typeof===St?null:t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case p:return"Fragment";case O:return"Portal";case R:return"Profiler";case h:return"StrictMode";case _:return"Suspense";case H:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case B:return(t.displayName||"Context")+".Provider";case M:return(t._context.displayName||"Context")+".Consumer";case T:var n=t.render;return t=t.displayName,t||(t=n.displayName||n.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case N:return n=t.displayName||null,n!==null?n:At(t.type)||"Memo";case Y:n=t._payload,t=t._init;try{return At(t(n))}catch{}}return null}var L=o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,et=Object.assign,Pt,Gn;function qn(t){if(Pt===void 0)try{throw Error()}catch(e){var n=e.stack.trim().match(/\n( *(at )?)/);Pt=n&&n[1]||"",Gn=-1<e.stack.indexOf(`
    at`)?" (<anonymous>)":-1<e.stack.indexOf("@")?"@unknown:0:0":""}return`
`+Pt+t+Gn}var Qn=!1;function tn(t,n){if(!t||Qn)return"";Qn=!0;var e=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var a={DetermineComponentFrameRoot:function(){try{if(n){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(A){var z=A}Reflect.construct(t,[],C)}else{try{C.call()}catch(A){z=A}t.call(C.prototype)}}else{try{throw Error()}catch(A){z=A}(C=t())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(A){if(A&&z&&typeof A.stack=="string")return[A.stack,z.stack]}return[null,null]}};a.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(a.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(a.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var i=a.DetermineComponentFrameRoot(),u=i[0],f=i[1];if(u&&f){var m=u.split(`
`),x=f.split(`
`);for(l=a=0;a<m.length&&!m[a].includes("DetermineComponentFrameRoot");)a++;for(;l<x.length&&!x[l].includes("DetermineComponentFrameRoot");)l++;if(a===m.length||l===x.length)for(a=m.length-1,l=x.length-1;1<=a&&0<=l&&m[a]!==x[l];)l--;for(;1<=a&&0<=l;a--,l--)if(m[a]!==x[l]){if(a!==1||l!==1)do if(a--,l--,0>l||m[a]!==x[l]){var D=`
`+m[a].replace(" at new "," at ");return t.displayName&&D.includes("<anonymous>")&&(D=D.replace("<anonymous>",t.displayName)),D}while(1<=a&&0<=l);break}}}finally{Qn=!1,Error.prepareStackTrace=e}return(e=t?t.displayName||t.name:"")?qn(e):""}function j(t){switch(t.tag){case 26:case 27:case 5:return qn(t.type);case 16:return qn("Lazy");case 13:return qn("Suspense");case 19:return qn("SuspenseList");case 0:case 15:return t=tn(t.type,!1),t;case 11:return t=tn(t.type.render,!1),t;case 1:return t=tn(t.type,!0),t;default:return""}}function tt(t){try{var n="";do n+=j(t),t=t.return;while(t);return n}catch(e){return`
Error generating stack: `+e.message+`
`+e.stack}}function F(t){var n=t,e=t;if(t.alternate)for(;n.return;)n=n.return;else{t=n;do n=t,(n.flags&4098)!==0&&(e=n.return),t=n.return;while(t)}return n.tag===3?e:null}function gt(t){if(t.tag===13){var n=t.memoizedState;if(n===null&&(t=t.alternate,t!==null&&(n=t.memoizedState)),n!==null)return n.dehydrated}return null}function v(t){if(F(t)!==t)throw Error(c(188))}function w(t){var n=t.alternate;if(!n){if(n=F(t),n===null)throw Error(c(188));return n!==t?null:t}for(var e=t,a=n;;){var l=e.return;if(l===null)break;var i=l.alternate;if(i===null){if(a=l.return,a!==null){e=a;continue}break}if(l.child===i.child){for(i=l.child;i;){if(i===e)return v(l),t;if(i===a)return v(l),n;i=i.sibling}throw Error(c(188))}if(e.return!==a.return)e=l,a=i;else{for(var u=!1,f=l.child;f;){if(f===e){u=!0,e=l,a=i;break}if(f===a){u=!0,a=l,e=i;break}f=f.sibling}if(!u){for(f=i.child;f;){if(f===e){u=!0,e=i,a=l;break}if(f===a){u=!0,a=i,e=l;break}f=f.sibling}if(!u)throw Error(c(189))}}if(e.alternate!==a)throw Error(c(190))}if(e.tag!==3)throw Error(c(188));return e.stateNode.current===e?t:n}function W(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t;for(t=t.child;t!==null;){if(n=W(t),n!==null)return n;t=t.sibling}return null}var $=Array.isArray,X=s.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,ct={pending:!1,data:null,method:null,action:null},at=[],Wt=-1;function ht(t){return{current:t}}function qt(t){0>Wt||(t.current=at[Wt],at[Wt]=null,Wt--)}function Ot(t,n){Wt++,at[Wt]=t.current,t.current=n}var kn=ht(null),Qa=ht(null),fe=ht(null),Pl=ht(null);function Wl(t,n){switch(Ot(fe,n),Ot(Qa,t),Ot(kn,null),t=n.nodeType,t){case 9:case 11:n=(n=n.documentElement)&&(n=n.namespaceURI)?ud(n):0;break;default:if(t=t===8?n.parentNode:n,n=t.tagName,t=t.namespaceURI)t=ud(t),n=od(t,n);else switch(n){case"svg":n=1;break;case"math":n=2;break;default:n=0}}qt(kn),Ot(kn,n)}function ia(){qt(kn),qt(Qa),qt(fe)}function Or(t){t.memoizedState!==null&&Ot(Pl,t);var n=kn.current,e=od(n,t.type);n!==e&&(Ot(Qa,t),Ot(kn,e))}function Fl(t){Qa.current===t&&(qt(kn),qt(Qa)),Pl.current===t&&(qt(Pl),wl._currentValue=ct)}var Er=Object.prototype.hasOwnProperty,zr=r.unstable_scheduleCallback,Tr=r.unstable_cancelCallback,Oh=r.unstable_shouldYield,Eh=r.unstable_requestPaint,Un=r.unstable_now,zh=r.unstable_getCurrentPriorityLevel,$o=r.unstable_ImmediatePriority,Po=r.unstable_UserBlockingPriority,Il=r.unstable_NormalPriority,Th=r.unstable_LowPriority,Wo=r.unstable_IdlePriority,Ah=r.log,_h=r.unstable_setDisableYieldValue,Za=null,ln=null;function Dh(t){if(ln&&typeof ln.onCommitFiberRoot=="function")try{ln.onCommitFiberRoot(Za,t,void 0,(t.current.flags&128)===128)}catch{}}function de(t){if(typeof Ah=="function"&&_h(t),ln&&typeof ln.setStrictMode=="function")try{ln.setStrictMode(Za,t)}catch{}}var rn=Math.clz32?Math.clz32:qh,Mh=Math.log,Rh=Math.LN2;function qh(t){return t>>>=0,t===0?32:31-(Mh(t)/Rh|0)|0}var ti=128,ni=4194304;function we(t){var n=t&42;if(n!==0)return n;switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194176;case 4194304:case 8388608:case 16777216:case 33554432:return t&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return t}}function ei(t,n){var e=t.pendingLanes;if(e===0)return 0;var a=0,l=t.suspendedLanes,i=t.pingedLanes,u=t.warmLanes;t=t.finishedLanes!==0;var f=e&134217727;return f!==0?(e=f&~l,e!==0?a=we(e):(i&=f,i!==0?a=we(i):t||(u=f&~u,u!==0&&(a=we(u))))):(f=e&~l,f!==0?a=we(f):i!==0?a=we(i):t||(u=e&~u,u!==0&&(a=we(u)))),a===0?0:n!==0&&n!==a&&(n&l)===0&&(l=a&-a,u=n&-n,l>=u||l===32&&(u&4194176)!==0)?n:a}function Va(t,n){return(t.pendingLanes&~(t.suspendedLanes&~t.pingedLanes)&n)===0}function kh(t,n){switch(t){case 1:case 2:case 4:case 8:return n+250;case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Fo(){var t=ti;return ti<<=1,(ti&4194176)===0&&(ti=128),t}function Io(){var t=ni;return ni<<=1,(ni&62914560)===0&&(ni=4194304),t}function Ar(t){for(var n=[],e=0;31>e;e++)n.push(t);return n}function Ka(t,n){t.pendingLanes|=n,n!==268435456&&(t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0)}function Uh(t,n,e,a,l,i){var u=t.pendingLanes;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.warmLanes=0,t.expiredLanes&=e,t.entangledLanes&=e,t.errorRecoveryDisabledLanes&=e,t.shellSuspendCounter=0;var f=t.entanglements,m=t.expirationTimes,x=t.hiddenUpdates;for(e=u&~e;0<e;){var D=31-rn(e),C=1<<D;f[D]=0,m[D]=-1;var z=x[D];if(z!==null)for(x[D]=null,D=0;D<z.length;D++){var A=z[D];A!==null&&(A.lane&=-536870913)}e&=~C}a!==0&&tc(t,a,0),i!==0&&l===0&&t.tag!==0&&(t.suspendedLanes|=i&~(u&~n))}function tc(t,n,e){t.pendingLanes|=n,t.suspendedLanes&=~n;var a=31-rn(n);t.entangledLanes|=n,t.entanglements[a]=t.entanglements[a]|1073741824|e&4194218}function nc(t,n){var e=t.entangledLanes|=n;for(t=t.entanglements;e;){var a=31-rn(e),l=1<<a;l&n|t[a]&n&&(t[a]|=n),e&=~l}}function ec(t){return t&=-t,2<t?8<t?(t&134217727)!==0?32:268435456:8:2}function ac(){var t=X.p;return t!==0?t:(t=window.event,t===void 0?32:Ad(t.type))}function Ch(t,n){var e=X.p;try{return X.p=t,n()}finally{X.p=e}}var he=Math.random().toString(36).slice(2),Kt="__reactFiber$"+he,nn="__reactProps$"+he,ra="__reactContainer$"+he,_r="__reactEvents$"+he,Hh="__reactListeners$"+he,wh="__reactHandles$"+he,lc="__reactResources$"+he,Ja="__reactMarker$"+he;function Dr(t){delete t[Kt],delete t[nn],delete t[_r],delete t[Hh],delete t[wh]}function Ne(t){var n=t[Kt];if(n)return n;for(var e=t.parentNode;e;){if(n=e[ra]||e[Kt]){if(e=n.alternate,n.child!==null||e!==null&&e.child!==null)for(t=fd(t);t!==null;){if(e=t[Kt])return e;t=fd(t)}return n}t=e,e=t.parentNode}return null}function ua(t){if(t=t[Kt]||t[ra]){var n=t.tag;if(n===5||n===6||n===13||n===26||n===27||n===3)return t}return null}function $a(t){var n=t.tag;if(n===5||n===26||n===27||n===6)return t.stateNode;throw Error(c(33))}function oa(t){var n=t[lc];return n||(n=t[lc]={hoistableStyles:new Map,hoistableScripts:new Map}),n}function Yt(t){t[Ja]=!0}var ic=new Set,rc={};function Be(t,n){ca(t,n),ca(t+"Capture",n)}function ca(t,n){for(rc[t]=n,t=0;t<n.length;t++)ic.add(n[t])}var Zn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Nh=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),uc={},oc={};function Bh(t){return Er.call(oc,t)?!0:Er.call(uc,t)?!1:Nh.test(t)?oc[t]=!0:(uc[t]=!0,!1)}function ai(t,n,e){if(Bh(n))if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":t.removeAttribute(n);return;case"boolean":var a=n.toLowerCase().slice(0,5);if(a!=="data-"&&a!=="aria-"){t.removeAttribute(n);return}}t.setAttribute(n,""+e)}}function li(t,n,e){if(e===null)t.removeAttribute(n);else{switch(typeof e){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(n);return}t.setAttribute(n,""+e)}}function Vn(t,n,e,a){if(a===null)t.removeAttribute(e);else{switch(typeof a){case"undefined":case"function":case"symbol":case"boolean":t.removeAttribute(e);return}t.setAttributeNS(n,e,""+a)}}function hn(t){switch(typeof t){case"bigint":case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function cc(t){var n=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(n==="checkbox"||n==="radio")}function Yh(t){var n=cc(t)?"checked":"value",e=Object.getOwnPropertyDescriptor(t.constructor.prototype,n),a=""+t[n];if(!t.hasOwnProperty(n)&&typeof e<"u"&&typeof e.get=="function"&&typeof e.set=="function"){var l=e.get,i=e.set;return Object.defineProperty(t,n,{configurable:!0,get:function(){return l.call(this)},set:function(u){a=""+u,i.call(this,u)}}),Object.defineProperty(t,n,{enumerable:e.enumerable}),{getValue:function(){return a},setValue:function(u){a=""+u},stopTracking:function(){t._valueTracker=null,delete t[n]}}}}function ii(t){t._valueTracker||(t._valueTracker=Yh(t))}function sc(t){if(!t)return!1;var n=t._valueTracker;if(!n)return!0;var e=n.getValue(),a="";return t&&(a=cc(t)?t.checked?"true":"false":t.value),t=a,t!==e?(n.setValue(t),!0):!1}function ri(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}var Lh=/[\n"\\]/g;function mn(t){return t.replace(Lh,function(n){return"\\"+n.charCodeAt(0).toString(16)+" "})}function Mr(t,n,e,a,l,i,u,f){t.name="",u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?t.type=u:t.removeAttribute("type"),n!=null?u==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+hn(n)):t.value!==""+hn(n)&&(t.value=""+hn(n)):u!=="submit"&&u!=="reset"||t.removeAttribute("value"),n!=null?Rr(t,u,hn(n)):e!=null?Rr(t,u,hn(e)):a!=null&&t.removeAttribute("value"),l==null&&i!=null&&(t.defaultChecked=!!i),l!=null&&(t.checked=l&&typeof l!="function"&&typeof l!="symbol"),f!=null&&typeof f!="function"&&typeof f!="symbol"&&typeof f!="boolean"?t.name=""+hn(f):t.removeAttribute("name")}function fc(t,n,e,a,l,i,u,f){if(i!=null&&typeof i!="function"&&typeof i!="symbol"&&typeof i!="boolean"&&(t.type=i),n!=null||e!=null){if(!(i!=="submit"&&i!=="reset"||n!=null))return;e=e!=null?""+hn(e):"",n=n!=null?""+hn(n):e,f||n===t.value||(t.value=n),t.defaultValue=n}a=a??l,a=typeof a!="function"&&typeof a!="symbol"&&!!a,t.checked=f?t.checked:!!a,t.defaultChecked=!!a,u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"&&(t.name=u)}function Rr(t,n,e){n==="number"&&ri(t.ownerDocument)===t||t.defaultValue===""+e||(t.defaultValue=""+e)}function sa(t,n,e,a){if(t=t.options,n){n={};for(var l=0;l<e.length;l++)n["$"+e[l]]=!0;for(e=0;e<t.length;e++)l=n.hasOwnProperty("$"+t[e].value),t[e].selected!==l&&(t[e].selected=l),l&&a&&(t[e].defaultSelected=!0)}else{for(e=""+hn(e),n=null,l=0;l<t.length;l++){if(t[l].value===e){t[l].selected=!0,a&&(t[l].defaultSelected=!0);return}n!==null||t[l].disabled||(n=t[l])}n!==null&&(n.selected=!0)}}function dc(t,n,e){if(n!=null&&(n=""+hn(n),n!==t.value&&(t.value=n),e==null)){t.defaultValue!==n&&(t.defaultValue=n);return}t.defaultValue=e!=null?""+hn(e):""}function hc(t,n,e,a){if(n==null){if(a!=null){if(e!=null)throw Error(c(92));if($(a)){if(1<a.length)throw Error(c(93));a=a[0]}e=a}e==null&&(e=""),n=e}e=hn(n),t.defaultValue=e,a=t.textContent,a===e&&a!==""&&a!==null&&(t.value=a)}function fa(t,n){if(n){var e=t.firstChild;if(e&&e===t.lastChild&&e.nodeType===3){e.nodeValue=n;return}}t.textContent=n}var jh=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function mc(t,n,e){var a=n.indexOf("--")===0;e==null||typeof e=="boolean"||e===""?a?t.setProperty(n,""):n==="float"?t.cssFloat="":t[n]="":a?t.setProperty(n,e):typeof e!="number"||e===0||jh.has(n)?n==="float"?t.cssFloat=e:t[n]=(""+e).trim():t[n]=e+"px"}function bc(t,n,e){if(n!=null&&typeof n!="object")throw Error(c(62));if(t=t.style,e!=null){for(var a in e)!e.hasOwnProperty(a)||n!=null&&n.hasOwnProperty(a)||(a.indexOf("--")===0?t.setProperty(a,""):a==="float"?t.cssFloat="":t[a]="");for(var l in n)a=n[l],n.hasOwnProperty(l)&&e[l]!==a&&mc(t,l,a)}else for(var i in n)n.hasOwnProperty(i)&&mc(t,i,n[i])}function qr(t){if(t.indexOf("-")===-1)return!1;switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Xh=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),Gh=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function ui(t){return Gh.test(""+t)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":t}var kr=null;function Ur(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var da=null,ha=null;function pc(t){var n=ua(t);if(n&&(t=n.stateNode)){var e=t[nn]||null;t:switch(t=n.stateNode,n.type){case"input":if(Mr(t,e.value,e.defaultValue,e.defaultValue,e.checked,e.defaultChecked,e.type,e.name),n=e.name,e.type==="radio"&&n!=null){for(e=t;e.parentNode;)e=e.parentNode;for(e=e.querySelectorAll('input[name="'+mn(""+n)+'"][type="radio"]'),n=0;n<e.length;n++){var a=e[n];if(a!==t&&a.form===t.form){var l=a[nn]||null;if(!l)throw Error(c(90));Mr(a,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(n=0;n<e.length;n++)a=e[n],a.form===t.form&&sc(a)}break t;case"textarea":dc(t,e.value,e.defaultValue);break t;case"select":n=e.value,n!=null&&sa(t,!!e.multiple,n,!1)}}}var Cr=!1;function vc(t,n,e){if(Cr)return t(n,e);Cr=!0;try{var a=t(n);return a}finally{if(Cr=!1,(da!==null||ha!==null)&&(Qi(),da&&(n=da,t=ha,ha=da=null,pc(n),t)))for(n=0;n<t.length;n++)pc(t[n])}}function Pa(t,n){var e=t.stateNode;if(e===null)return null;var a=e[nn]||null;if(a===null)return null;e=a[n];t:switch(n){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(a=!a.disabled)||(t=t.type,a=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!a;break t;default:t=!1}if(t)return null;if(e&&typeof e!="function")throw Error(c(231,n,typeof e));return e}var Hr=!1;if(Zn)try{var Wa={};Object.defineProperty(Wa,"passive",{get:function(){Hr=!0}}),window.addEventListener("test",Wa,Wa),window.removeEventListener("test",Wa,Wa)}catch{Hr=!1}var me=null,wr=null,oi=null;function gc(){if(oi)return oi;var t,n=wr,e=n.length,a,l="value"in me?me.value:me.textContent,i=l.length;for(t=0;t<e&&n[t]===l[t];t++);var u=e-t;for(a=1;a<=u&&n[e-a]===l[i-a];a++);return oi=l.slice(t,1<a?1-a:void 0)}function ci(t){var n=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&n===13&&(t=13)):t=n,t===10&&(t=13),32<=t||t===13?t:0}function si(){return!0}function yc(){return!1}function en(t){function n(e,a,l,i,u){this._reactName=e,this._targetInst=l,this.type=a,this.nativeEvent=i,this.target=u,this.currentTarget=null;for(var f in t)t.hasOwnProperty(f)&&(e=t[f],this[f]=e?e(i):i[f]);return this.isDefaultPrevented=(i.defaultPrevented!=null?i.defaultPrevented:i.returnValue===!1)?si:yc,this.isPropagationStopped=yc,this}return et(n.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():typeof e.returnValue!="unknown"&&(e.returnValue=!1),this.isDefaultPrevented=si)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():typeof e.cancelBubble!="unknown"&&(e.cancelBubble=!0),this.isPropagationStopped=si)},persist:function(){},isPersistent:si}),n}var Ye={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},fi=en(Ye),Fa=et({},Ye,{view:0,detail:0}),Qh=en(Fa),Nr,Br,Ia,di=et({},Fa,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lr,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ia&&(Ia&&t.type==="mousemove"?(Nr=t.screenX-Ia.screenX,Br=t.screenY-Ia.screenY):Br=Nr=0,Ia=t),Nr)},movementY:function(t){return"movementY"in t?t.movementY:Br}}),xc=en(di),Zh=et({},di,{dataTransfer:0}),Vh=en(Zh),Kh=et({},Fa,{relatedTarget:0}),Yr=en(Kh),Jh=et({},Ye,{animationName:0,elapsedTime:0,pseudoElement:0}),$h=en(Jh),Ph=et({},Ye,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),Wh=en(Ph),Fh=et({},Ye,{data:0}),Sc=en(Fh),Ih={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},t0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},n0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function e0(t){var n=this.nativeEvent;return n.getModifierState?n.getModifierState(t):(t=n0[t])?!!n[t]:!1}function Lr(){return e0}var a0=et({},Fa,{key:function(t){if(t.key){var n=Ih[t.key]||t.key;if(n!=="Unidentified")return n}return t.type==="keypress"?(t=ci(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?t0[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lr,charCode:function(t){return t.type==="keypress"?ci(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?ci(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),l0=en(a0),i0=et({},di,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Oc=en(i0),r0=et({},Fa,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lr}),u0=en(r0),o0=et({},Ye,{propertyName:0,elapsedTime:0,pseudoElement:0}),c0=en(o0),s0=et({},di,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),f0=en(s0),d0=et({},Ye,{newState:0,oldState:0}),h0=en(d0),m0=[9,13,27,32],jr=Zn&&"CompositionEvent"in window,tl=null;Zn&&"documentMode"in document&&(tl=document.documentMode);var b0=Zn&&"TextEvent"in window&&!tl,Ec=Zn&&(!jr||tl&&8<tl&&11>=tl),zc=" ",Tc=!1;function Ac(t,n){switch(t){case"keyup":return m0.indexOf(n.keyCode)!==-1;case"keydown":return n.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function _c(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var ma=!1;function p0(t,n){switch(t){case"compositionend":return _c(n);case"keypress":return n.which!==32?null:(Tc=!0,zc);case"textInput":return t=n.data,t===zc&&Tc?null:t;default:return null}}function v0(t,n){if(ma)return t==="compositionend"||!jr&&Ac(t,n)?(t=gc(),oi=wr=me=null,ma=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(n.ctrlKey||n.altKey||n.metaKey)||n.ctrlKey&&n.altKey){if(n.char&&1<n.char.length)return n.char;if(n.which)return String.fromCharCode(n.which)}return null;case"compositionend":return Ec&&n.locale!=="ko"?null:n.data;default:return null}}var g0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dc(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n==="input"?!!g0[t.type]:n==="textarea"}function Mc(t,n,e,a){da?ha?ha.push(a):ha=[a]:da=a,n=$i(n,"onChange"),0<n.length&&(e=new fi("onChange","change",null,e,a),t.push({event:e,listeners:n}))}var nl=null,el=null;function y0(t){ed(t,0)}function hi(t){var n=$a(t);if(sc(n))return t}function Rc(t,n){if(t==="change")return n}var qc=!1;if(Zn){var Xr;if(Zn){var Gr="oninput"in document;if(!Gr){var kc=document.createElement("div");kc.setAttribute("oninput","return;"),Gr=typeof kc.oninput=="function"}Xr=Gr}else Xr=!1;qc=Xr&&(!document.documentMode||9<document.documentMode)}function Uc(){nl&&(nl.detachEvent("onpropertychange",Cc),el=nl=null)}function Cc(t){if(t.propertyName==="value"&&hi(el)){var n=[];Mc(n,el,t,Ur(t)),vc(y0,n)}}function x0(t,n,e){t==="focusin"?(Uc(),nl=n,el=e,nl.attachEvent("onpropertychange",Cc)):t==="focusout"&&Uc()}function S0(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return hi(el)}function O0(t,n){if(t==="click")return hi(n)}function E0(t,n){if(t==="input"||t==="change")return hi(n)}function z0(t,n){return t===n&&(t!==0||1/t===1/n)||t!==t&&n!==n}var un=typeof Object.is=="function"?Object.is:z0;function al(t,n){if(un(t,n))return!0;if(typeof t!="object"||t===null||typeof n!="object"||n===null)return!1;var e=Object.keys(t),a=Object.keys(n);if(e.length!==a.length)return!1;for(a=0;a<e.length;a++){var l=e[a];if(!Er.call(n,l)||!un(t[l],n[l]))return!1}return!0}function Hc(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function wc(t,n){var e=Hc(t);t=0;for(var a;e;){if(e.nodeType===3){if(a=t+e.textContent.length,t<=n&&a>=n)return{node:e,offset:n-t};t=a}t:{for(;e;){if(e.nextSibling){e=e.nextSibling;break t}e=e.parentNode}e=void 0}e=Hc(e)}}function Nc(t,n){return t&&n?t===n?!0:t&&t.nodeType===3?!1:n&&n.nodeType===3?Nc(t,n.parentNode):"contains"in t?t.contains(n):t.compareDocumentPosition?!!(t.compareDocumentPosition(n)&16):!1:!1}function Bc(t){t=t!=null&&t.ownerDocument!=null&&t.ownerDocument.defaultView!=null?t.ownerDocument.defaultView:window;for(var n=ri(t.document);n instanceof t.HTMLIFrameElement;){try{var e=typeof n.contentWindow.location.href=="string"}catch{e=!1}if(e)t=n.contentWindow;else break;n=ri(t.document)}return n}function Qr(t){var n=t&&t.nodeName&&t.nodeName.toLowerCase();return n&&(n==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||n==="textarea"||t.contentEditable==="true")}function T0(t,n){var e=Bc(n);n=t.focusedElem;var a=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Nc(n.ownerDocument.documentElement,n)){if(a!==null&&Qr(n)){if(t=a.start,e=a.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var l=n.textContent.length,i=Math.min(a.start,l);a=a.end===void 0?i:Math.min(a.end,l),!e.extend&&i>a&&(l=a,a=i,i=l),l=wc(n,i);var u=wc(n,a);l&&u&&(e.rangeCount!==1||e.anchorNode!==l.node||e.anchorOffset!==l.offset||e.focusNode!==u.node||e.focusOffset!==u.offset)&&(t=t.createRange(),t.setStart(l.node,l.offset),e.removeAllRanges(),i>a?(e.addRange(t),e.extend(u.node,u.offset)):(t.setEnd(u.node,u.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var A0=Zn&&"documentMode"in document&&11>=document.documentMode,ba=null,Zr=null,ll=null,Vr=!1;function Yc(t,n,e){var a=e.window===e?e.document:e.nodeType===9?e:e.ownerDocument;Vr||ba==null||ba!==ri(a)||(a=ba,"selectionStart"in a&&Qr(a)?a={start:a.selectionStart,end:a.selectionEnd}:(a=(a.ownerDocument&&a.ownerDocument.defaultView||window).getSelection(),a={anchorNode:a.anchorNode,anchorOffset:a.anchorOffset,focusNode:a.focusNode,focusOffset:a.focusOffset}),ll&&al(ll,a)||(ll=a,a=$i(Zr,"onSelect"),0<a.length&&(n=new fi("onSelect","select",null,n,e),t.push({event:n,listeners:a}),n.target=ba)))}function Le(t,n){var e={};return e[t.toLowerCase()]=n.toLowerCase(),e["Webkit"+t]="webkit"+n,e["Moz"+t]="moz"+n,e}var pa={animationend:Le("Animation","AnimationEnd"),animationiteration:Le("Animation","AnimationIteration"),animationstart:Le("Animation","AnimationStart"),transitionrun:Le("Transition","TransitionRun"),transitionstart:Le("Transition","TransitionStart"),transitioncancel:Le("Transition","TransitionCancel"),transitionend:Le("Transition","TransitionEnd")},Kr={},Lc={};Zn&&(Lc=document.createElement("div").style,"AnimationEvent"in window||(delete pa.animationend.animation,delete pa.animationiteration.animation,delete pa.animationstart.animation),"TransitionEvent"in window||delete pa.transitionend.transition);function je(t){if(Kr[t])return Kr[t];if(!pa[t])return t;var n=pa[t],e;for(e in n)if(n.hasOwnProperty(e)&&e in Lc)return Kr[t]=n[e];return t}var jc=je("animationend"),Xc=je("animationiteration"),Gc=je("animationstart"),_0=je("transitionrun"),D0=je("transitionstart"),M0=je("transitioncancel"),Qc=je("transitionend"),Zc=new Map,Vc="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll scrollEnd toggle touchMove waiting wheel".split(" ");function Tn(t,n){Zc.set(t,n),Be(n,[t])}var bn=[],va=0,Jr=0;function mi(){for(var t=va,n=Jr=va=0;n<t;){var e=bn[n];bn[n++]=null;var a=bn[n];bn[n++]=null;var l=bn[n];bn[n++]=null;var i=bn[n];if(bn[n++]=null,a!==null&&l!==null){var u=a.pending;u===null?l.next=l:(l.next=u.next,u.next=l),a.pending=l}i!==0&&Kc(e,l,i)}}function bi(t,n,e,a){bn[va++]=t,bn[va++]=n,bn[va++]=e,bn[va++]=a,Jr|=a,t.lanes|=a,t=t.alternate,t!==null&&(t.lanes|=a)}function $r(t,n,e,a){return bi(t,n,e,a),pi(t)}function be(t,n){return bi(t,null,null,n),pi(t)}function Kc(t,n,e){t.lanes|=e;var a=t.alternate;a!==null&&(a.lanes|=e);for(var l=!1,i=t.return;i!==null;)i.childLanes|=e,a=i.alternate,a!==null&&(a.childLanes|=e),i.tag===22&&(t=i.stateNode,t===null||t._visibility&1||(l=!0)),t=i,i=i.return;l&&n!==null&&t.tag===3&&(i=t.stateNode,l=31-rn(e),i=i.hiddenUpdates,t=i[l],t===null?i[l]=[n]:t.push(n),n.lane=e|536870912)}function pi(t){if(50<Ml)throw Ml=0,no=null,Error(c(185));for(var n=t.return;n!==null;)t=n,n=t.return;return t.tag===3?t.stateNode:null}var ga={},Jc=new WeakMap;function pn(t,n){if(typeof t=="object"&&t!==null){var e=Jc.get(t);return e!==void 0?e:(n={value:t,source:n,stack:tt(n)},Jc.set(t,n),n)}return{value:t,source:n,stack:tt(n)}}var ya=[],xa=0,vi=null,gi=0,vn=[],gn=0,Xe=null,Kn=1,Jn="";function Ge(t,n){ya[xa++]=gi,ya[xa++]=vi,vi=t,gi=n}function $c(t,n,e){vn[gn++]=Kn,vn[gn++]=Jn,vn[gn++]=Xe,Xe=t;var a=Kn;t=Jn;var l=32-rn(a)-1;a&=~(1<<l),e+=1;var i=32-rn(n)+l;if(30<i){var u=l-l%5;i=(a&(1<<u)-1).toString(32),a>>=u,l-=u,Kn=1<<32-rn(n)+l|e<<l|a,Jn=i+t}else Kn=1<<i|e<<l|a,Jn=t}function Pr(t){t.return!==null&&(Ge(t,1),$c(t,1,0))}function Wr(t){for(;t===vi;)vi=ya[--xa],ya[xa]=null,gi=ya[--xa],ya[xa]=null;for(;t===Xe;)Xe=vn[--gn],vn[gn]=null,Jn=vn[--gn],vn[gn]=null,Kn=vn[--gn],vn[gn]=null}var Ft=null,Qt=null,ft=!1,An=null,Cn=!1,Fr=Error(c(519));function Qe(t){var n=Error(c(418,""));throw ul(pn(n,t)),Fr}function Pc(t){var n=t.stateNode,e=t.type,a=t.memoizedProps;switch(n[Kt]=t,n[nn]=a,e){case"dialog":ot("cancel",n),ot("close",n);break;case"iframe":case"object":case"embed":ot("load",n);break;case"video":case"audio":for(e=0;e<ql.length;e++)ot(ql[e],n);break;case"source":ot("error",n);break;case"img":case"image":case"link":ot("error",n),ot("load",n);break;case"details":ot("toggle",n);break;case"input":ot("invalid",n),fc(n,a.value,a.defaultValue,a.checked,a.defaultChecked,a.type,a.name,!0),ii(n);break;case"select":ot("invalid",n);break;case"textarea":ot("invalid",n),hc(n,a.value,a.defaultValue,a.children),ii(n)}e=a.children,typeof e!="string"&&typeof e!="number"&&typeof e!="bigint"||n.textContent===""+e||a.suppressHydrationWarning===!0||rd(n.textContent,e)?(a.popover!=null&&(ot("beforetoggle",n),ot("toggle",n)),a.onScroll!=null&&ot("scroll",n),a.onScrollEnd!=null&&ot("scrollend",n),a.onClick!=null&&(n.onclick=Pi),n=!0):n=!1,n||Qe(t)}function Wc(t){for(Ft=t.return;Ft;)switch(Ft.tag){case 3:case 27:Cn=!0;return;case 5:case 13:Cn=!1;return;default:Ft=Ft.return}}function il(t){if(t!==Ft)return!1;if(!ft)return Wc(t),ft=!0,!1;var n=!1,e;if((e=t.tag!==3&&t.tag!==27)&&((e=t.tag===5)&&(e=t.type,e=!(e!=="form"&&e!=="button")||yo(t.type,t.memoizedProps)),e=!e),e&&(n=!0),n&&Qt&&Qe(t),Wc(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(c(317));t:{for(t=t.nextSibling,n=0;t;){if(t.nodeType===8)if(e=t.data,e==="/$"){if(n===0){Qt=Dn(t.nextSibling);break t}n--}else e!=="$"&&e!=="$!"&&e!=="$?"||n++;t=t.nextSibling}Qt=null}}else Qt=Ft?Dn(t.stateNode.nextSibling):null;return!0}function rl(){Qt=Ft=null,ft=!1}function ul(t){An===null?An=[t]:An.push(t)}var ol=Error(c(460)),Fc=Error(c(474)),Ir={then:function(){}};function Ic(t){return t=t.status,t==="fulfilled"||t==="rejected"}function yi(){}function ts(t,n,e){switch(e=t[e],e===void 0?t.push(n):e!==n&&(n.then(yi,yi),n=e),n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===ol?Error(c(483)):t;default:if(typeof n.status=="string")n.then(yi,yi);else{if(t=yt,t!==null&&100<t.shellSuspendCounter)throw Error(c(482));t=n,t.status="pending",t.then(function(a){if(n.status==="pending"){var l=n;l.status="fulfilled",l.value=a}},function(a){if(n.status==="pending"){var l=n;l.status="rejected",l.reason=a}})}switch(n.status){case"fulfilled":return n.value;case"rejected":throw t=n.reason,t===ol?Error(c(483)):t}throw cl=n,ol}}var cl=null;function ns(){if(cl===null)throw Error(c(459));var t=cl;return cl=null,t}var Sa=null,sl=0;function xi(t){var n=sl;return sl+=1,Sa===null&&(Sa=[]),ts(Sa,t,n)}function fl(t,n){n=n.props.ref,t.ref=n!==void 0?n:null}function Si(t,n){throw n.$$typeof===b?Error(c(525)):(t=Object.prototype.toString.call(n),Error(c(31,t==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":t)))}function es(t){var n=t._init;return n(t._payload)}function as(t){function n(S,g){if(t){var E=S.deletions;E===null?(S.deletions=[g],S.flags|=16):E.push(g)}}function e(S,g){if(!t)return null;for(;g!==null;)n(S,g),g=g.sibling;return null}function a(S){for(var g=new Map;S!==null;)S.key!==null?g.set(S.key,S):g.set(S.index,S),S=S.sibling;return g}function l(S,g){return S=_e(S,g),S.index=0,S.sibling=null,S}function i(S,g,E){return S.index=E,t?(E=S.alternate,E!==null?(E=E.index,E<g?(S.flags|=33554434,g):E):(S.flags|=33554434,g)):(S.flags|=1048576,g)}function u(S){return t&&S.alternate===null&&(S.flags|=33554434),S}function f(S,g,E,k){return g===null||g.tag!==6?(g=Ku(E,S.mode,k),g.return=S,g):(g=l(g,E),g.return=S,g)}function m(S,g,E,k){var G=E.type;return G===p?D(S,g,E.props.children,k,E.key):g!==null&&(g.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Y&&es(G)===g.type)?(g=l(g,E.props),fl(g,E),g.return=S,g):(g=Yi(E.type,E.key,E.props,null,S.mode,k),fl(g,E),g.return=S,g)}function x(S,g,E,k){return g===null||g.tag!==4||g.stateNode.containerInfo!==E.containerInfo||g.stateNode.implementation!==E.implementation?(g=Ju(E,S.mode,k),g.return=S,g):(g=l(g,E.children||[]),g.return=S,g)}function D(S,g,E,k,G){return g===null||g.tag!==7?(g=ta(E,S.mode,k,G),g.return=S,g):(g=l(g,E),g.return=S,g)}function C(S,g,E){if(typeof g=="string"&&g!==""||typeof g=="number"||typeof g=="bigint")return g=Ku(""+g,S.mode,E),g.return=S,g;if(typeof g=="object"&&g!==null){switch(g.$$typeof){case y:return E=Yi(g.type,g.key,g.props,null,S.mode,E),fl(E,g),E.return=S,E;case O:return g=Ju(g,S.mode,E),g.return=S,g;case Y:var k=g._init;return g=k(g._payload),C(S,g,E)}if($(g)||mt(g))return g=ta(g,S.mode,E,null),g.return=S,g;if(typeof g.then=="function")return C(S,xi(g),E);if(g.$$typeof===B)return C(S,wi(S,g),E);Si(S,g)}return null}function z(S,g,E,k){var G=g!==null?g.key:null;if(typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint")return G!==null?null:f(S,g,""+E,k);if(typeof E=="object"&&E!==null){switch(E.$$typeof){case y:return E.key===G?m(S,g,E,k):null;case O:return E.key===G?x(S,g,E,k):null;case Y:return G=E._init,E=G(E._payload),z(S,g,E,k)}if($(E)||mt(E))return G!==null?null:D(S,g,E,k,null);if(typeof E.then=="function")return z(S,g,xi(E),k);if(E.$$typeof===B)return z(S,g,wi(S,E),k);Si(S,E)}return null}function A(S,g,E,k,G){if(typeof k=="string"&&k!==""||typeof k=="number"||typeof k=="bigint")return S=S.get(E)||null,f(g,S,""+k,G);if(typeof k=="object"&&k!==null){switch(k.$$typeof){case y:return S=S.get(k.key===null?E:k.key)||null,m(g,S,k,G);case O:return S=S.get(k.key===null?E:k.key)||null,x(g,S,k,G);case Y:var it=k._init;return k=it(k._payload),A(S,g,E,k,G)}if($(k)||mt(k))return S=S.get(E)||null,D(g,S,k,G,null);if(typeof k.then=="function")return A(S,g,E,xi(k),G);if(k.$$typeof===B)return A(S,g,E,wi(g,k),G);Si(g,k)}return null}function Q(S,g,E,k){for(var G=null,it=null,V=g,P=g=0,Xt=null;V!==null&&P<E.length;P++){V.index>P?(Xt=V,V=null):Xt=V.sibling;var dt=z(S,V,E[P],k);if(dt===null){V===null&&(V=Xt);break}t&&V&&dt.alternate===null&&n(S,V),g=i(dt,g,P),it===null?G=dt:it.sibling=dt,it=dt,V=Xt}if(P===E.length)return e(S,V),ft&&Ge(S,P),G;if(V===null){for(;P<E.length;P++)V=C(S,E[P],k),V!==null&&(g=i(V,g,P),it===null?G=V:it.sibling=V,it=V);return ft&&Ge(S,P),G}for(V=a(V);P<E.length;P++)Xt=A(V,S,P,E[P],k),Xt!==null&&(t&&Xt.alternate!==null&&V.delete(Xt.key===null?P:Xt.key),g=i(Xt,g,P),it===null?G=Xt:it.sibling=Xt,it=Xt);return t&&V.forEach(function(Ce){return n(S,Ce)}),ft&&Ge(S,P),G}function I(S,g,E,k){if(E==null)throw Error(c(151));for(var G=null,it=null,V=g,P=g=0,Xt=null,dt=E.next();V!==null&&!dt.done;P++,dt=E.next()){V.index>P?(Xt=V,V=null):Xt=V.sibling;var Ce=z(S,V,dt.value,k);if(Ce===null){V===null&&(V=Xt);break}t&&V&&Ce.alternate===null&&n(S,V),g=i(Ce,g,P),it===null?G=Ce:it.sibling=Ce,it=Ce,V=Xt}if(dt.done)return e(S,V),ft&&Ge(S,P),G;if(V===null){for(;!dt.done;P++,dt=E.next())dt=C(S,dt.value,k),dt!==null&&(g=i(dt,g,P),it===null?G=dt:it.sibling=dt,it=dt);return ft&&Ge(S,P),G}for(V=a(V);!dt.done;P++,dt=E.next())dt=A(V,S,P,dt.value,k),dt!==null&&(t&&dt.alternate!==null&&V.delete(dt.key===null?P:dt.key),g=i(dt,g,P),it===null?G=dt:it.sibling=dt,it=dt);return t&&V.forEach(function(Gm){return n(S,Gm)}),ft&&Ge(S,P),G}function Mt(S,g,E,k){if(typeof E=="object"&&E!==null&&E.type===p&&E.key===null&&(E=E.props.children),typeof E=="object"&&E!==null){switch(E.$$typeof){case y:t:{for(var G=E.key;g!==null;){if(g.key===G){if(G=E.type,G===p){if(g.tag===7){e(S,g.sibling),k=l(g,E.props.children),k.return=S,S=k;break t}}else if(g.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===Y&&es(G)===g.type){e(S,g.sibling),k=l(g,E.props),fl(k,E),k.return=S,S=k;break t}e(S,g);break}else n(S,g);g=g.sibling}E.type===p?(k=ta(E.props.children,S.mode,k,E.key),k.return=S,S=k):(k=Yi(E.type,E.key,E.props,null,S.mode,k),fl(k,E),k.return=S,S=k)}return u(S);case O:t:{for(G=E.key;g!==null;){if(g.key===G)if(g.tag===4&&g.stateNode.containerInfo===E.containerInfo&&g.stateNode.implementation===E.implementation){e(S,g.sibling),k=l(g,E.children||[]),k.return=S,S=k;break t}else{e(S,g);break}else n(S,g);g=g.sibling}k=Ju(E,S.mode,k),k.return=S,S=k}return u(S);case Y:return G=E._init,E=G(E._payload),Mt(S,g,E,k)}if($(E))return Q(S,g,E,k);if(mt(E)){if(G=mt(E),typeof G!="function")throw Error(c(150));return E=G.call(E),I(S,g,E,k)}if(typeof E.then=="function")return Mt(S,g,xi(E),k);if(E.$$typeof===B)return Mt(S,g,wi(S,E),k);Si(S,E)}return typeof E=="string"&&E!==""||typeof E=="number"||typeof E=="bigint"?(E=""+E,g!==null&&g.tag===6?(e(S,g.sibling),k=l(g,E),k.return=S,S=k):(e(S,g),k=Ku(E,S.mode,k),k.return=S,S=k),u(S)):e(S,g)}return function(S,g,E,k){try{sl=0;var G=Mt(S,g,E,k);return Sa=null,G}catch(V){if(V===ol)throw V;var it=On(29,V,null,S.mode);return it.lanes=k,it.return=S,it}finally{}}}var Ze=as(!0),ls=as(!1),Oa=ht(null),Oi=ht(0);function is(t,n){t=ie,Ot(Oi,t),Ot(Oa,n),ie=t|n.baseLanes}function tu(){Ot(Oi,ie),Ot(Oa,Oa.current)}function nu(){ie=Oi.current,qt(Oa),qt(Oi)}var yn=ht(null),Hn=null;function pe(t){var n=t.alternate;Ot(Ht,Ht.current&1),Ot(yn,t),Hn===null&&(n===null||Oa.current!==null||n.memoizedState!==null)&&(Hn=t)}function rs(t){if(t.tag===22){if(Ot(Ht,Ht.current),Ot(yn,t),Hn===null){var n=t.alternate;n!==null&&n.memoizedState!==null&&(Hn=t)}}else ve()}function ve(){Ot(Ht,Ht.current),Ot(yn,yn.current)}function $n(t){qt(yn),Hn===t&&(Hn=null),qt(Ht)}var Ht=ht(0);function Ei(t){for(var n=t;n!==null;){if(n.tag===13){var e=n.memoizedState;if(e!==null&&(e=e.dehydrated,e===null||e.data==="$?"||e.data==="$!"))return n}else if(n.tag===19&&n.memoizedProps.revealOrder!==void 0){if((n.flags&128)!==0)return n}else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return null;n=n.return}n.sibling.return=n.return,n=n.sibling}return null}var R0=typeof AbortController<"u"?AbortController:function(){var t=[],n=this.signal={aborted:!1,addEventListener:function(e,a){t.push(a)}};this.abort=function(){n.aborted=!0,t.forEach(function(e){return e()})}},q0=r.unstable_scheduleCallback,k0=r.unstable_NormalPriority,wt={$$typeof:B,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function eu(){return{controller:new R0,data:new Map,refCount:0}}function dl(t){t.refCount--,t.refCount===0&&q0(k0,function(){t.controller.abort()})}var hl=null,au=0,Ea=0,za=null;function U0(t,n){if(hl===null){var e=hl=[];au=0,Ea=co(),za={status:"pending",value:void 0,then:function(a){e.push(a)}}}return au++,n.then(us,us),n}function us(){if(--au===0&&hl!==null){za!==null&&(za.status="fulfilled");var t=hl;hl=null,Ea=0,za=null;for(var n=0;n<t.length;n++)(0,t[n])()}}function C0(t,n){var e=[],a={status:"pending",value:null,reason:null,then:function(l){e.push(l)}};return t.then(function(){a.status="fulfilled",a.value=n;for(var l=0;l<e.length;l++)(0,e[l])(n)},function(l){for(a.status="rejected",a.reason=l,l=0;l<e.length;l++)(0,e[l])(void 0)}),a}var os=L.S;L.S=function(t,n){typeof n=="object"&&n!==null&&typeof n.then=="function"&&U0(t,n),os!==null&&os(t,n)};var Ve=ht(null);function lu(){var t=Ve.current;return t!==null?t:yt.pooledCache}function zi(t,n){n===null?Ot(Ve,Ve.current):Ot(Ve,n.pool)}function cs(){var t=lu();return t===null?null:{parent:wt._currentValue,pool:t}}var ge=0,lt=null,bt=null,kt=null,Ti=!1,Ta=!1,Ke=!1,Ai=0,ml=0,Aa=null,H0=0;function Rt(){throw Error(c(321))}function iu(t,n){if(n===null)return!1;for(var e=0;e<n.length&&e<t.length;e++)if(!un(t[e],n[e]))return!1;return!0}function ru(t,n,e,a,l,i){return ge=i,lt=n,n.memoizedState=null,n.updateQueue=null,n.lanes=0,L.H=t===null||t.memoizedState===null?Je:ye,Ke=!1,i=e(a,l),Ke=!1,Ta&&(i=fs(n,e,a,l)),ss(t),i}function ss(t){L.H=wn;var n=bt!==null&&bt.next!==null;if(ge=0,kt=bt=lt=null,Ti=!1,ml=0,Aa=null,n)throw Error(c(300));t===null||Lt||(t=t.dependencies,t!==null&&Hi(t)&&(Lt=!0))}function fs(t,n,e,a){lt=t;var l=0;do{if(Ta&&(Aa=null),ml=0,Ta=!1,25<=l)throw Error(c(301));if(l+=1,kt=bt=null,t.updateQueue!=null){var i=t.updateQueue;i.lastEffect=null,i.events=null,i.stores=null,i.memoCache!=null&&(i.memoCache.index=0)}L.H=$e,i=n(e,a)}while(Ta);return i}function w0(){var t=L.H,n=t.useState()[0];return n=typeof n.then=="function"?bl(n):n,t=t.useState()[0],(bt!==null?bt.memoizedState:null)!==t&&(lt.flags|=1024),n}function uu(){var t=Ai!==0;return Ai=0,t}function ou(t,n,e){n.updateQueue=t.updateQueue,n.flags&=-2053,t.lanes&=~e}function cu(t){if(Ti){for(t=t.memoizedState;t!==null;){var n=t.queue;n!==null&&(n.pending=null),t=t.next}Ti=!1}ge=0,kt=bt=lt=null,Ta=!1,ml=Ai=0,Aa=null}function an(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kt===null?lt.memoizedState=kt=t:kt=kt.next=t,kt}function Ut(){if(bt===null){var t=lt.alternate;t=t!==null?t.memoizedState:null}else t=bt.next;var n=kt===null?lt.memoizedState:kt.next;if(n!==null)kt=n,bt=t;else{if(t===null)throw lt.alternate===null?Error(c(467)):Error(c(310));bt=t,t={memoizedState:bt.memoizedState,baseState:bt.baseState,baseQueue:bt.baseQueue,queue:bt.queue,next:null},kt===null?lt.memoizedState=kt=t:kt=kt.next=t}return kt}var _i;_i=function(){return{lastEffect:null,events:null,stores:null,memoCache:null}};function bl(t){var n=ml;return ml+=1,Aa===null&&(Aa=[]),t=ts(Aa,t,n),n=lt,(kt===null?n.memoizedState:kt.next)===null&&(n=n.alternate,L.H=n===null||n.memoizedState===null?Je:ye),t}function Di(t){if(t!==null&&typeof t=="object"){if(typeof t.then=="function")return bl(t);if(t.$$typeof===B)return Jt(t)}throw Error(c(438,String(t)))}function su(t){var n=null,e=lt.updateQueue;if(e!==null&&(n=e.memoCache),n==null){var a=lt.alternate;a!==null&&(a=a.updateQueue,a!==null&&(a=a.memoCache,a!=null&&(n={data:a.data.map(function(l){return l.slice()}),index:0})))}if(n==null&&(n={data:[],index:0}),e===null&&(e=_i(),lt.updateQueue=e),e.memoCache=n,e=n.data[n.index],e===void 0)for(e=n.data[n.index]=Array(t),a=0;a<t;a++)e[a]=rt;return n.index++,e}function Pn(t,n){return typeof n=="function"?n(t):n}function Mi(t){var n=Ut();return fu(n,bt,t)}function fu(t,n,e){var a=t.queue;if(a===null)throw Error(c(311));a.lastRenderedReducer=e;var l=t.baseQueue,i=a.pending;if(i!==null){if(l!==null){var u=l.next;l.next=i.next,i.next=u}n.baseQueue=l=i,a.pending=null}if(i=t.baseState,l===null)t.memoizedState=i;else{n=l.next;var f=u=null,m=null,x=n,D=!1;do{var C=x.lane&-536870913;if(C!==x.lane?(st&C)===C:(ge&C)===C){var z=x.revertLane;if(z===0)m!==null&&(m=m.next={lane:0,revertLane:0,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null}),C===Ea&&(D=!0);else if((ge&z)===z){x=x.next,z===Ea&&(D=!0);continue}else C={lane:0,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},m===null?(f=m=C,u=i):m=m.next=C,lt.lanes|=z,De|=z;C=x.action,Ke&&e(i,C),i=x.hasEagerState?x.eagerState:e(i,C)}else z={lane:C,revertLane:x.revertLane,action:x.action,hasEagerState:x.hasEagerState,eagerState:x.eagerState,next:null},m===null?(f=m=z,u=i):m=m.next=z,lt.lanes|=C,De|=C;x=x.next}while(x!==null&&x!==n);if(m===null?u=i:m.next=f,!un(i,t.memoizedState)&&(Lt=!0,D&&(e=za,e!==null)))throw e;t.memoizedState=i,t.baseState=u,t.baseQueue=m,a.lastRenderedState=i}return l===null&&(a.lanes=0),[t.memoizedState,a.dispatch]}function du(t){var n=Ut(),e=n.queue;if(e===null)throw Error(c(311));e.lastRenderedReducer=t;var a=e.dispatch,l=e.pending,i=n.memoizedState;if(l!==null){e.pending=null;var u=l=l.next;do i=t(i,u.action),u=u.next;while(u!==l);un(i,n.memoizedState)||(Lt=!0),n.memoizedState=i,n.baseQueue===null&&(n.baseState=i),e.lastRenderedState=i}return[i,a]}function ds(t,n,e){var a=lt,l=Ut(),i=ft;if(i){if(e===void 0)throw Error(c(407));e=e()}else e=n();var u=!un((bt||l).memoizedState,e);if(u&&(l.memoizedState=e,Lt=!0),l=l.queue,bu(bs.bind(null,a,l,t),[t]),l.getSnapshot!==n||u||kt!==null&&kt.memoizedState.tag&1){if(a.flags|=2048,_a(9,ms.bind(null,a,l,e,n),{destroy:void 0},null),yt===null)throw Error(c(349));i||(ge&60)!==0||hs(a,n,e)}return e}function hs(t,n,e){t.flags|=16384,t={getSnapshot:n,value:e},n=lt.updateQueue,n===null?(n=_i(),lt.updateQueue=n,n.stores=[t]):(e=n.stores,e===null?n.stores=[t]:e.push(t))}function ms(t,n,e,a){n.value=e,n.getSnapshot=a,ps(n)&&vs(t)}function bs(t,n,e){return e(function(){ps(n)&&vs(t)})}function ps(t){var n=t.getSnapshot;t=t.value;try{var e=n();return!un(t,e)}catch{return!0}}function vs(t){var n=be(t,2);n!==null&&It(n,t,2)}function hu(t){var n=an();if(typeof t=="function"){var e=t;if(t=e(),Ke){de(!0);try{e()}finally{de(!1)}}}return n.memoizedState=n.baseState=t,n.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:t},n}function gs(t,n,e,a){return t.baseState=e,fu(t,bt,typeof a=="function"?a:Pn)}function N0(t,n,e,a,l){if(ki(t))throw Error(c(485));if(t=n.action,t!==null){var i={payload:l,action:t,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(u){i.listeners.push(u)}};L.T!==null?e(!0):i.isTransition=!1,a(i),e=n.pending,e===null?(i.next=n.pending=i,ys(n,i)):(i.next=e.next,n.pending=e.next=i)}}function ys(t,n){var e=n.action,a=n.payload,l=t.state;if(n.isTransition){var i=L.T,u={};L.T=u;try{var f=e(l,a),m=L.S;m!==null&&m(u,f),xs(t,n,f)}catch(x){mu(t,n,x)}finally{L.T=i}}else try{i=e(l,a),xs(t,n,i)}catch(x){mu(t,n,x)}}function xs(t,n,e){e!==null&&typeof e=="object"&&typeof e.then=="function"?e.then(function(a){Ss(t,n,a)},function(a){return mu(t,n,a)}):Ss(t,n,e)}function Ss(t,n,e){n.status="fulfilled",n.value=e,Os(n),t.state=e,n=t.pending,n!==null&&(e=n.next,e===n?t.pending=null:(e=e.next,n.next=e,ys(t,e)))}function mu(t,n,e){var a=t.pending;if(t.pending=null,a!==null){a=a.next;do n.status="rejected",n.reason=e,Os(n),n=n.next;while(n!==a)}t.action=null}function Os(t){t=t.listeners;for(var n=0;n<t.length;n++)(0,t[n])()}function Es(t,n){return n}function zs(t,n){if(ft){var e=yt.formState;if(e!==null){t:{var a=lt;if(ft){if(Qt){n:{for(var l=Qt,i=Cn;l.nodeType!==8;){if(!i){l=null;break n}if(l=Dn(l.nextSibling),l===null){l=null;break n}}i=l.data,l=i==="F!"||i==="F"?l:null}if(l){Qt=Dn(l.nextSibling),a=l.data==="F!";break t}}Qe(a)}a=!1}a&&(n=e[0])}}return e=an(),e.memoizedState=e.baseState=n,a={pending:null,lanes:0,dispatch:null,lastRenderedReducer:Es,lastRenderedState:n},e.queue=a,e=Xs.bind(null,lt,a),a.dispatch=e,a=hu(!1),i=xu.bind(null,lt,!1,a.queue),a=an(),l={state:n,dispatch:null,action:t,pending:null},a.queue=l,e=N0.bind(null,lt,l,i,e),l.dispatch=e,a.memoizedState=t,[n,e,!1]}function Ts(t){var n=Ut();return As(n,bt,t)}function As(t,n,e){n=fu(t,n,Es)[0],t=Mi(Pn)[0],n=typeof n=="object"&&n!==null&&typeof n.then=="function"?bl(n):n;var a=Ut(),l=a.queue,i=l.dispatch;return e!==a.memoizedState&&(lt.flags|=2048,_a(9,B0.bind(null,l,e),{destroy:void 0},null)),[n,i,t]}function B0(t,n){t.action=n}function _s(t){var n=Ut(),e=bt;if(e!==null)return As(n,e,t);Ut(),n=n.memoizedState,e=Ut();var a=e.queue.dispatch;return e.memoizedState=t,[n,a,!1]}function _a(t,n,e,a){return t={tag:t,create:n,inst:e,deps:a,next:null},n=lt.updateQueue,n===null&&(n=_i(),lt.updateQueue=n),e=n.lastEffect,e===null?n.lastEffect=t.next=t:(a=e.next,e.next=t,t.next=a,n.lastEffect=t),t}function Ds(){return Ut().memoizedState}function Ri(t,n,e,a){var l=an();lt.flags|=t,l.memoizedState=_a(1|n,e,{destroy:void 0},a===void 0?null:a)}function qi(t,n,e,a){var l=Ut();a=a===void 0?null:a;var i=l.memoizedState.inst;bt!==null&&a!==null&&iu(a,bt.memoizedState.deps)?l.memoizedState=_a(n,e,i,a):(lt.flags|=t,l.memoizedState=_a(1|n,e,i,a))}function Ms(t,n){Ri(8390656,8,t,n)}function bu(t,n){qi(2048,8,t,n)}function Rs(t,n){return qi(4,2,t,n)}function qs(t,n){return qi(4,4,t,n)}function ks(t,n){if(typeof n=="function"){t=t();var e=n(t);return function(){typeof e=="function"?e():n(null)}}if(n!=null)return t=t(),n.current=t,function(){n.current=null}}function Us(t,n,e){e=e!=null?e.concat([t]):null,qi(4,4,ks.bind(null,n,t),e)}function pu(){}function Cs(t,n){var e=Ut();n=n===void 0?null:n;var a=e.memoizedState;return n!==null&&iu(n,a[1])?a[0]:(e.memoizedState=[t,n],t)}function Hs(t,n){var e=Ut();n=n===void 0?null:n;var a=e.memoizedState;if(n!==null&&iu(n,a[1]))return a[0];if(a=t(),Ke){de(!0);try{t()}finally{de(!1)}}return e.memoizedState=[a,n],a}function vu(t,n,e){return e===void 0||(ge&1073741824)!==0?t.memoizedState=n:(t.memoizedState=e,t=Bf(),lt.lanes|=t,De|=t,e)}function ws(t,n,e,a){return un(e,n)?e:Oa.current!==null?(t=vu(t,e,a),un(t,n)||(Lt=!0),t):(ge&42)===0?(Lt=!0,t.memoizedState=e):(t=Bf(),lt.lanes|=t,De|=t,n)}function Ns(t,n,e,a,l){var i=X.p;X.p=i!==0&&8>i?i:8;var u=L.T,f={};L.T=f,xu(t,!1,n,e);try{var m=l(),x=L.S;if(x!==null&&x(f,m),m!==null&&typeof m=="object"&&typeof m.then=="function"){var D=C0(m,a);pl(t,n,D,fn(t))}else pl(t,n,a,fn(t))}catch(C){pl(t,n,{then:function(){},status:"rejected",reason:C},fn())}finally{X.p=i,L.T=u}}function Y0(){}function gu(t,n,e,a){if(t.tag!==5)throw Error(c(476));var l=Bs(t).queue;Ns(t,l,n,ct,e===null?Y0:function(){return Ys(t),e(a)})}function Bs(t){var n=t.memoizedState;if(n!==null)return n;n={memoizedState:ct,baseState:ct,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:ct},next:null};var e={};return n.next={memoizedState:e,baseState:e,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:Pn,lastRenderedState:e},next:null},t.memoizedState=n,t=t.alternate,t!==null&&(t.memoizedState=n),n}function Ys(t){var n=Bs(t).next.queue;pl(t,n,{},fn())}function yu(){return Jt(wl)}function Ls(){return Ut().memoizedState}function js(){return Ut().memoizedState}function L0(t){for(var n=t.return;n!==null;){switch(n.tag){case 24:case 3:var e=fn();t=Oe(e);var a=Ee(n,t,e);a!==null&&(It(a,n,e),yl(a,n,e)),n={cache:eu()},t.payload=n;return}n=n.return}}function j0(t,n,e){var a=fn();e={lane:a,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null},ki(t)?Gs(n,e):(e=$r(t,n,e,a),e!==null&&(It(e,t,a),Qs(e,n,a)))}function Xs(t,n,e){var a=fn();pl(t,n,e,a)}function pl(t,n,e,a){var l={lane:a,revertLane:0,action:e,hasEagerState:!1,eagerState:null,next:null};if(ki(t))Gs(n,l);else{var i=t.alternate;if(t.lanes===0&&(i===null||i.lanes===0)&&(i=n.lastRenderedReducer,i!==null))try{var u=n.lastRenderedState,f=i(u,e);if(l.hasEagerState=!0,l.eagerState=f,un(f,u))return bi(t,n,l,0),yt===null&&mi(),!1}catch{}finally{}if(e=$r(t,n,l,a),e!==null)return It(e,t,a),Qs(e,n,a),!0}return!1}function xu(t,n,e,a){if(a={lane:2,revertLane:co(),action:a,hasEagerState:!1,eagerState:null,next:null},ki(t)){if(n)throw Error(c(479))}else n=$r(t,e,a,2),n!==null&&It(n,t,2)}function ki(t){var n=t.alternate;return t===lt||n!==null&&n===lt}function Gs(t,n){Ta=Ti=!0;var e=t.pending;e===null?n.next=n:(n.next=e.next,e.next=n),t.pending=n}function Qs(t,n,e){if((e&4194176)!==0){var a=n.lanes;a&=t.pendingLanes,e|=a,n.lanes=e,nc(t,e)}}var wn={readContext:Jt,use:Di,useCallback:Rt,useContext:Rt,useEffect:Rt,useImperativeHandle:Rt,useLayoutEffect:Rt,useInsertionEffect:Rt,useMemo:Rt,useReducer:Rt,useRef:Rt,useState:Rt,useDebugValue:Rt,useDeferredValue:Rt,useTransition:Rt,useSyncExternalStore:Rt,useId:Rt};wn.useCacheRefresh=Rt,wn.useMemoCache=Rt,wn.useHostTransitionStatus=Rt,wn.useFormState=Rt,wn.useActionState=Rt,wn.useOptimistic=Rt;var Je={readContext:Jt,use:Di,useCallback:function(t,n){return an().memoizedState=[t,n===void 0?null:n],t},useContext:Jt,useEffect:Ms,useImperativeHandle:function(t,n,e){e=e!=null?e.concat([t]):null,Ri(4194308,4,ks.bind(null,n,t),e)},useLayoutEffect:function(t,n){return Ri(4194308,4,t,n)},useInsertionEffect:function(t,n){Ri(4,2,t,n)},useMemo:function(t,n){var e=an();n=n===void 0?null:n;var a=t();if(Ke){de(!0);try{t()}finally{de(!1)}}return e.memoizedState=[a,n],a},useReducer:function(t,n,e){var a=an();if(e!==void 0){var l=e(n);if(Ke){de(!0);try{e(n)}finally{de(!1)}}}else l=n;return a.memoizedState=a.baseState=l,t={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:l},a.queue=t,t=t.dispatch=j0.bind(null,lt,t),[a.memoizedState,t]},useRef:function(t){var n=an();return t={current:t},n.memoizedState=t},useState:function(t){t=hu(t);var n=t.queue,e=Xs.bind(null,lt,n);return n.dispatch=e,[t.memoizedState,e]},useDebugValue:pu,useDeferredValue:function(t,n){var e=an();return vu(e,t,n)},useTransition:function(){var t=hu(!1);return t=Ns.bind(null,lt,t.queue,!0,!1),an().memoizedState=t,[!1,t]},useSyncExternalStore:function(t,n,e){var a=lt,l=an();if(ft){if(e===void 0)throw Error(c(407));e=e()}else{if(e=n(),yt===null)throw Error(c(349));(st&60)!==0||hs(a,n,e)}l.memoizedState=e;var i={value:e,getSnapshot:n};return l.queue=i,Ms(bs.bind(null,a,i,t),[t]),a.flags|=2048,_a(9,ms.bind(null,a,i,e,n),{destroy:void 0},null),e},useId:function(){var t=an(),n=yt.identifierPrefix;if(ft){var e=Jn,a=Kn;e=(a&~(1<<32-rn(a)-1)).toString(32)+e,n=":"+n+"R"+e,e=Ai++,0<e&&(n+="H"+e.toString(32)),n+=":"}else e=H0++,n=":"+n+"r"+e.toString(32)+":";return t.memoizedState=n},useCacheRefresh:function(){return an().memoizedState=L0.bind(null,lt)}};Je.useMemoCache=su,Je.useHostTransitionStatus=yu,Je.useFormState=zs,Je.useActionState=zs,Je.useOptimistic=function(t){var n=an();n.memoizedState=n.baseState=t;var e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return n.queue=e,n=xu.bind(null,lt,!0,e),e.dispatch=n,[t,n]};var ye={readContext:Jt,use:Di,useCallback:Cs,useContext:Jt,useEffect:bu,useImperativeHandle:Us,useInsertionEffect:Rs,useLayoutEffect:qs,useMemo:Hs,useReducer:Mi,useRef:Ds,useState:function(){return Mi(Pn)},useDebugValue:pu,useDeferredValue:function(t,n){var e=Ut();return ws(e,bt.memoizedState,t,n)},useTransition:function(){var t=Mi(Pn)[0],n=Ut().memoizedState;return[typeof t=="boolean"?t:bl(t),n]},useSyncExternalStore:ds,useId:Ls};ye.useCacheRefresh=js,ye.useMemoCache=su,ye.useHostTransitionStatus=yu,ye.useFormState=Ts,ye.useActionState=Ts,ye.useOptimistic=function(t,n){var e=Ut();return gs(e,bt,t,n)};var $e={readContext:Jt,use:Di,useCallback:Cs,useContext:Jt,useEffect:bu,useImperativeHandle:Us,useInsertionEffect:Rs,useLayoutEffect:qs,useMemo:Hs,useReducer:du,useRef:Ds,useState:function(){return du(Pn)},useDebugValue:pu,useDeferredValue:function(t,n){var e=Ut();return bt===null?vu(e,t,n):ws(e,bt.memoizedState,t,n)},useTransition:function(){var t=du(Pn)[0],n=Ut().memoizedState;return[typeof t=="boolean"?t:bl(t),n]},useSyncExternalStore:ds,useId:Ls};$e.useCacheRefresh=js,$e.useMemoCache=su,$e.useHostTransitionStatus=yu,$e.useFormState=_s,$e.useActionState=_s,$e.useOptimistic=function(t,n){var e=Ut();return bt!==null?gs(e,bt,t,n):(e.baseState=t,[t,e.queue.dispatch])};function Su(t,n,e,a){n=t.memoizedState,e=e(a,n),e=e==null?n:et({},n,e),t.memoizedState=e,t.lanes===0&&(t.updateQueue.baseState=e)}var Ou={isMounted:function(t){return(t=t._reactInternals)?F(t)===t:!1},enqueueSetState:function(t,n,e){t=t._reactInternals;var a=fn(),l=Oe(a);l.payload=n,e!=null&&(l.callback=e),n=Ee(t,l,a),n!==null&&(It(n,t,a),yl(n,t,a))},enqueueReplaceState:function(t,n,e){t=t._reactInternals;var a=fn(),l=Oe(a);l.tag=1,l.payload=n,e!=null&&(l.callback=e),n=Ee(t,l,a),n!==null&&(It(n,t,a),yl(n,t,a))},enqueueForceUpdate:function(t,n){t=t._reactInternals;var e=fn(),a=Oe(e);a.tag=2,n!=null&&(a.callback=n),n=Ee(t,a,e),n!==null&&(It(n,t,e),yl(n,t,e))}};function Zs(t,n,e,a,l,i,u){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(a,i,u):n.prototype&&n.prototype.isPureReactComponent?!al(e,a)||!al(l,i):!0}function Vs(t,n,e,a){t=n.state,typeof n.componentWillReceiveProps=="function"&&n.componentWillReceiveProps(e,a),typeof n.UNSAFE_componentWillReceiveProps=="function"&&n.UNSAFE_componentWillReceiveProps(e,a),n.state!==t&&Ou.enqueueReplaceState(n,n.state,null)}function Pe(t,n){var e=n;if("ref"in n){e={};for(var a in n)a!=="ref"&&(e[a]=n[a])}if(t=t.defaultProps){e===n&&(e=et({},e));for(var l in t)e[l]===void 0&&(e[l]=t[l])}return e}var Ui=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var n=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(n))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Ks(t){Ui(t)}function Js(t){console.error(t)}function $s(t){Ui(t)}function Ci(t,n){try{var e=t.onUncaughtError;e(n.value,{componentStack:n.stack})}catch(a){setTimeout(function(){throw a})}}function Ps(t,n,e){try{var a=t.onCaughtError;a(e.value,{componentStack:e.stack,errorBoundary:n.tag===1?n.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Eu(t,n,e){return e=Oe(e),e.tag=3,e.payload={element:null},e.callback=function(){Ci(t,n)},e}function Ws(t){return t=Oe(t),t.tag=3,t}function Fs(t,n,e,a){var l=e.type.getDerivedStateFromError;if(typeof l=="function"){var i=a.value;t.payload=function(){return l(i)},t.callback=function(){Ps(n,e,a)}}var u=e.stateNode;u!==null&&typeof u.componentDidCatch=="function"&&(t.callback=function(){Ps(n,e,a),typeof l!="function"&&(Me===null?Me=new Set([this]):Me.add(this));var f=a.stack;this.componentDidCatch(a.value,{componentStack:f!==null?f:""})})}function X0(t,n,e,a,l){if(e.flags|=32768,a!==null&&typeof a=="object"&&typeof a.then=="function"){if(n=e.alternate,n!==null&&gl(n,e,l,!0),e=yn.current,e!==null){switch(e.tag){case 13:return Hn===null?lo():e.alternate===null&&Dt===0&&(Dt=3),e.flags&=-257,e.flags|=65536,e.lanes=l,a===Ir?e.flags|=16384:(n=e.updateQueue,n===null?e.updateQueue=new Set([a]):n.add(a),ro(t,a,l)),!1;case 22:return e.flags|=65536,a===Ir?e.flags|=16384:(n=e.updateQueue,n===null?(n={transitions:null,markerInstances:null,retryQueue:new Set([a])},e.updateQueue=n):(e=n.retryQueue,e===null?n.retryQueue=new Set([a]):e.add(a)),ro(t,a,l)),!1}throw Error(c(435,e.tag))}return ro(t,a,l),lo(),!1}if(ft)return n=yn.current,n!==null?((n.flags&65536)===0&&(n.flags|=256),n.flags|=65536,n.lanes=l,a!==Fr&&(t=Error(c(422),{cause:a}),ul(pn(t,e)))):(a!==Fr&&(n=Error(c(423),{cause:a}),ul(pn(n,e))),t=t.current.alternate,t.flags|=65536,l&=-l,t.lanes|=l,a=pn(a,e),l=Eu(t.stateNode,a,l),Bu(t,l),Dt!==4&&(Dt=2)),!1;var i=Error(c(520),{cause:a});if(i=pn(i,e),_l===null?_l=[i]:_l.push(i),Dt!==4&&(Dt=2),n===null)return!0;a=pn(a,e),e=n;do{switch(e.tag){case 3:return e.flags|=65536,t=l&-l,e.lanes|=t,t=Eu(e.stateNode,a,t),Bu(e,t),!1;case 1:if(n=e.type,i=e.stateNode,(e.flags&128)===0&&(typeof n.getDerivedStateFromError=="function"||i!==null&&typeof i.componentDidCatch=="function"&&(Me===null||!Me.has(i))))return e.flags|=65536,l&=-l,e.lanes|=l,l=Ws(l),Fs(l,t,e,a),Bu(e,l),!1}e=e.return}while(e!==null);return!1}var Is=Error(c(461)),Lt=!1;function Zt(t,n,e,a){n.child=t===null?ls(n,null,e,a):Ze(n,t.child,e,a)}function tf(t,n,e,a,l){e=e.render;var i=n.ref;if("ref"in a){var u={};for(var f in a)f!=="ref"&&(u[f]=a[f])}else u=a;return Fe(n),a=ru(t,n,e,u,i,l),f=uu(),t!==null&&!Lt?(ou(t,n,l),Wn(t,n,l)):(ft&&f&&Pr(n),n.flags|=1,Zt(t,n,a,l),n.child)}function nf(t,n,e,a,l){if(t===null){var i=e.type;return typeof i=="function"&&!Vu(i)&&i.defaultProps===void 0&&e.compare===null?(n.tag=15,n.type=i,ef(t,n,i,a,l)):(t=Yi(e.type,null,a,n,n.mode,l),t.ref=n.ref,t.return=n,n.child=t)}if(i=t.child,!ku(t,l)){var u=i.memoizedProps;if(e=e.compare,e=e!==null?e:al,e(u,a)&&t.ref===n.ref)return Wn(t,n,l)}return n.flags|=1,t=_e(i,a),t.ref=n.ref,t.return=n,n.child=t}function ef(t,n,e,a,l){if(t!==null){var i=t.memoizedProps;if(al(i,a)&&t.ref===n.ref)if(Lt=!1,n.pendingProps=a=i,ku(t,l))(t.flags&131072)!==0&&(Lt=!0);else return n.lanes=t.lanes,Wn(t,n,l)}return zu(t,n,e,a,l)}function af(t,n,e){var a=n.pendingProps,l=a.children,i=(n.stateNode._pendingVisibility&2)!==0,u=t!==null?t.memoizedState:null;if(vl(t,n),a.mode==="hidden"||i){if((n.flags&128)!==0){if(a=u!==null?u.baseLanes|e:e,t!==null){for(l=n.child=t.child,i=0;l!==null;)i=i|l.lanes|l.childLanes,l=l.sibling;n.childLanes=i&~a}else n.childLanes=0,n.child=null;return lf(t,n,a,e)}if((e&536870912)!==0)n.memoizedState={baseLanes:0,cachePool:null},t!==null&&zi(n,u!==null?u.cachePool:null),u!==null?is(n,u):tu(),rs(n);else return n.lanes=n.childLanes=536870912,lf(t,n,u!==null?u.baseLanes|e:e,e)}else u!==null?(zi(n,u.cachePool),is(n,u),ve(),n.memoizedState=null):(t!==null&&zi(n,null),tu(),ve());return Zt(t,n,l,e),n.child}function lf(t,n,e,a){var l=lu();return l=l===null?null:{parent:wt._currentValue,pool:l},n.memoizedState={baseLanes:e,cachePool:l},t!==null&&zi(n,null),tu(),rs(n),t!==null&&gl(t,n,a,!0),null}function vl(t,n){var e=n.ref;if(e===null)t!==null&&t.ref!==null&&(n.flags|=2097664);else{if(typeof e!="function"&&typeof e!="object")throw Error(c(284));(t===null||t.ref!==e)&&(n.flags|=2097664)}}function zu(t,n,e,a,l){return Fe(n),e=ru(t,n,e,a,void 0,l),a=uu(),t!==null&&!Lt?(ou(t,n,l),Wn(t,n,l)):(ft&&a&&Pr(n),n.flags|=1,Zt(t,n,e,l),n.child)}function rf(t,n,e,a,l,i){return Fe(n),n.updateQueue=null,e=fs(n,a,e,l),ss(t),a=uu(),t!==null&&!Lt?(ou(t,n,i),Wn(t,n,i)):(ft&&a&&Pr(n),n.flags|=1,Zt(t,n,e,i),n.child)}function uf(t,n,e,a,l){if(Fe(n),n.stateNode===null){var i=ga,u=e.contextType;typeof u=="object"&&u!==null&&(i=Jt(u)),i=new e(a,i),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Ou,n.stateNode=i,i._reactInternals=n,i=n.stateNode,i.props=a,i.state=n.memoizedState,i.refs={},wu(n),u=e.contextType,i.context=typeof u=="object"&&u!==null?Jt(u):ga,i.state=n.memoizedState,u=e.getDerivedStateFromProps,typeof u=="function"&&(Su(n,e,u,a),i.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(u=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),u!==i.state&&Ou.enqueueReplaceState(i,i.state,null),Sl(n,a,i,l),xl(),i.state=n.memoizedState),typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!0}else if(t===null){i=n.stateNode;var f=n.memoizedProps,m=Pe(e,f);i.props=m;var x=i.context,D=e.contextType;u=ga,typeof D=="object"&&D!==null&&(u=Jt(D));var C=e.getDerivedStateFromProps;D=typeof C=="function"||typeof i.getSnapshotBeforeUpdate=="function",f=n.pendingProps!==f,D||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(f||x!==u)&&Vs(n,i,a,u),Se=!1;var z=n.memoizedState;i.state=z,Sl(n,a,i,l),xl(),x=n.memoizedState,f||z!==x||Se?(typeof C=="function"&&(Su(n,e,C,a),x=n.memoizedState),(m=Se||Zs(n,e,m,a,z,x,u))?(D||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(n.flags|=4194308)):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),n.memoizedProps=a,n.memoizedState=x),i.props=a,i.state=x,i.context=u,a=m):(typeof i.componentDidMount=="function"&&(n.flags|=4194308),a=!1)}else{i=n.stateNode,Nu(t,n),u=n.memoizedProps,D=Pe(e,u),i.props=D,C=n.pendingProps,z=i.context,x=e.contextType,m=ga,typeof x=="object"&&x!==null&&(m=Jt(x)),f=e.getDerivedStateFromProps,(x=typeof f=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(u!==C||z!==m)&&Vs(n,i,a,m),Se=!1,z=n.memoizedState,i.state=z,Sl(n,a,i,l),xl();var A=n.memoizedState;u!==C||z!==A||Se||t!==null&&t.dependencies!==null&&Hi(t.dependencies)?(typeof f=="function"&&(Su(n,e,f,a),A=n.memoizedState),(D=Se||Zs(n,e,D,a,z,A,m)||t!==null&&t.dependencies!==null&&Hi(t.dependencies))?(x||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(a,A,m),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(a,A,m)),typeof i.componentDidUpdate=="function"&&(n.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(n.flags|=1024)):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&z===t.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&z===t.memoizedState||(n.flags|=1024),n.memoizedProps=a,n.memoizedState=A),i.props=a,i.state=A,i.context=m,a=D):(typeof i.componentDidUpdate!="function"||u===t.memoizedProps&&z===t.memoizedState||(n.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||u===t.memoizedProps&&z===t.memoizedState||(n.flags|=1024),a=!1)}return i=a,vl(t,n),a=(n.flags&128)!==0,i||a?(i=n.stateNode,e=a&&typeof e.getDerivedStateFromError!="function"?null:i.render(),n.flags|=1,t!==null&&a?(n.child=Ze(n,t.child,null,l),n.child=Ze(n,null,e,l)):Zt(t,n,e,l),n.memoizedState=i.state,t=n.child):t=Wn(t,n,l),t}function of(t,n,e,a){return rl(),n.flags|=256,Zt(t,n,e,a),n.child}var Tu={dehydrated:null,treeContext:null,retryLane:0};function Au(t){return{baseLanes:t,cachePool:cs()}}function _u(t,n,e){return t=t!==null?t.childLanes&~e:0,n&&(t|=En),t}function cf(t,n,e){var a=n.pendingProps,l=!1,i=(n.flags&128)!==0,u;if((u=i)||(u=t!==null&&t.memoizedState===null?!1:(Ht.current&2)!==0),u&&(l=!0,n.flags&=-129),u=(n.flags&32)!==0,n.flags&=-33,t===null){if(ft){if(l?pe(n):ve(),ft){var f=Qt,m;if(m=f){t:{for(m=f,f=Cn;m.nodeType!==8;){if(!f){f=null;break t}if(m=Dn(m.nextSibling),m===null){f=null;break t}}f=m}f!==null?(n.memoizedState={dehydrated:f,treeContext:Xe!==null?{id:Kn,overflow:Jn}:null,retryLane:536870912},m=On(18,null,null,0),m.stateNode=f,m.return=n,n.child=m,Ft=n,Qt=null,m=!0):m=!1}m||Qe(n)}if(f=n.memoizedState,f!==null&&(f=f.dehydrated,f!==null))return f.data==="$!"?n.lanes=16:n.lanes=536870912,null;$n(n)}return f=a.children,a=a.fallback,l?(ve(),l=n.mode,f=Mu({mode:"hidden",children:f},l),a=ta(a,l,e,null),f.return=n,a.return=n,f.sibling=a,n.child=f,l=n.child,l.memoizedState=Au(e),l.childLanes=_u(t,u,e),n.memoizedState=Tu,a):(pe(n),Du(n,f))}if(m=t.memoizedState,m!==null&&(f=m.dehydrated,f!==null)){if(i)n.flags&256?(pe(n),n.flags&=-257,n=Ru(t,n,e)):n.memoizedState!==null?(ve(),n.child=t.child,n.flags|=128,n=null):(ve(),l=a.fallback,f=n.mode,a=Mu({mode:"visible",children:a.children},f),l=ta(l,f,e,null),l.flags|=2,a.return=n,l.return=n,a.sibling=l,n.child=a,Ze(n,t.child,null,e),a=n.child,a.memoizedState=Au(e),a.childLanes=_u(t,u,e),n.memoizedState=Tu,n=l);else if(pe(n),f.data==="$!"){if(u=f.nextSibling&&f.nextSibling.dataset,u)var x=u.dgst;u=x,a=Error(c(419)),a.stack="",a.digest=u,ul({value:a,source:null,stack:null}),n=Ru(t,n,e)}else if(Lt||gl(t,n,e,!1),u=(e&t.childLanes)!==0,Lt||u){if(u=yt,u!==null){if(a=e&-e,(a&42)!==0)a=1;else switch(a){case 2:a=1;break;case 8:a=4;break;case 32:a=16;break;case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:a=64;break;case 268435456:a=134217728;break;default:a=0}if(a=(a&(u.suspendedLanes|e))!==0?0:a,a!==0&&a!==m.retryLane)throw m.retryLane=a,be(t,a),It(u,t,a),Is}f.data==="$?"||lo(),n=Ru(t,n,e)}else f.data==="$?"?(n.flags|=128,n.child=t.child,n=am.bind(null,t),f._reactRetry=n,n=null):(t=m.treeContext,Qt=Dn(f.nextSibling),Ft=n,ft=!0,An=null,Cn=!1,t!==null&&(vn[gn++]=Kn,vn[gn++]=Jn,vn[gn++]=Xe,Kn=t.id,Jn=t.overflow,Xe=n),n=Du(n,a.children),n.flags|=4096);return n}return l?(ve(),l=a.fallback,f=n.mode,m=t.child,x=m.sibling,a=_e(m,{mode:"hidden",children:a.children}),a.subtreeFlags=m.subtreeFlags&31457280,x!==null?l=_e(x,l):(l=ta(l,f,e,null),l.flags|=2),l.return=n,a.return=n,a.sibling=l,n.child=a,a=l,l=n.child,f=t.child.memoizedState,f===null?f=Au(e):(m=f.cachePool,m!==null?(x=wt._currentValue,m=m.parent!==x?{parent:x,pool:x}:m):m=cs(),f={baseLanes:f.baseLanes|e,cachePool:m}),l.memoizedState=f,l.childLanes=_u(t,u,e),n.memoizedState=Tu,a):(pe(n),e=t.child,t=e.sibling,e=_e(e,{mode:"visible",children:a.children}),e.return=n,e.sibling=null,t!==null&&(u=n.deletions,u===null?(n.deletions=[t],n.flags|=16):u.push(t)),n.child=e,n.memoizedState=null,e)}function Du(t,n){return n=Mu({mode:"visible",children:n},t.mode),n.return=t,t.child=n}function Mu(t,n){return Hf(t,n,0,null)}function Ru(t,n,e){return Ze(n,t.child,null,e),t=Du(n,n.pendingProps.children),t.flags|=2,n.memoizedState=null,t}function sf(t,n,e){t.lanes|=n;var a=t.alternate;a!==null&&(a.lanes|=n),Cu(t.return,n,e)}function qu(t,n,e,a,l){var i=t.memoizedState;i===null?t.memoizedState={isBackwards:n,rendering:null,renderingStartTime:0,last:a,tail:e,tailMode:l}:(i.isBackwards=n,i.rendering=null,i.renderingStartTime=0,i.last=a,i.tail=e,i.tailMode=l)}function ff(t,n,e){var a=n.pendingProps,l=a.revealOrder,i=a.tail;if(Zt(t,n,a.children,e),a=Ht.current,(a&2)!==0)a=a&1|2,n.flags|=128;else{if(t!==null&&(t.flags&128)!==0)t:for(t=n.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&sf(t,e,n);else if(t.tag===19)sf(t,e,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===n)break t;for(;t.sibling===null;){if(t.return===null||t.return===n)break t;t=t.return}t.sibling.return=t.return,t=t.sibling}a&=1}switch(Ot(Ht,a),l){case"forwards":for(e=n.child,l=null;e!==null;)t=e.alternate,t!==null&&Ei(t)===null&&(l=e),e=e.sibling;e=l,e===null?(l=n.child,n.child=null):(l=e.sibling,e.sibling=null),qu(n,!1,l,e,i);break;case"backwards":for(e=null,l=n.child,n.child=null;l!==null;){if(t=l.alternate,t!==null&&Ei(t)===null){n.child=l;break}t=l.sibling,l.sibling=e,e=l,l=t}qu(n,!0,e,null,i);break;case"together":qu(n,!1,null,null,void 0);break;default:n.memoizedState=null}return n.child}function Wn(t,n,e){if(t!==null&&(n.dependencies=t.dependencies),De|=n.lanes,(e&n.childLanes)===0)if(t!==null){if(gl(t,n,e,!1),(e&n.childLanes)===0)return null}else return null;if(t!==null&&n.child!==t.child)throw Error(c(153));if(n.child!==null){for(t=n.child,e=_e(t,t.pendingProps),n.child=e,e.return=n;t.sibling!==null;)t=t.sibling,e=e.sibling=_e(t,t.pendingProps),e.return=n;e.sibling=null}return n.child}function ku(t,n){return(t.lanes&n)!==0?!0:(t=t.dependencies,!!(t!==null&&Hi(t)))}function G0(t,n,e){switch(n.tag){case 3:Wl(n,n.stateNode.containerInfo),xe(n,wt,t.memoizedState.cache),rl();break;case 27:case 5:Or(n);break;case 4:Wl(n,n.stateNode.containerInfo);break;case 10:xe(n,n.type,n.memoizedProps.value);break;case 13:var a=n.memoizedState;if(a!==null)return a.dehydrated!==null?(pe(n),n.flags|=128,null):(e&n.child.childLanes)!==0?cf(t,n,e):(pe(n),t=Wn(t,n,e),t!==null?t.sibling:null);pe(n);break;case 19:var l=(t.flags&128)!==0;if(a=(e&n.childLanes)!==0,a||(gl(t,n,e,!1),a=(e&n.childLanes)!==0),l){if(a)return ff(t,n,e);n.flags|=128}if(l=n.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),Ot(Ht,Ht.current),a)break;return null;case 22:case 23:return n.lanes=0,af(t,n,e);case 24:xe(n,wt,t.memoizedState.cache)}return Wn(t,n,e)}function df(t,n,e){if(t!==null)if(t.memoizedProps!==n.pendingProps)Lt=!0;else{if(!ku(t,e)&&(n.flags&128)===0)return Lt=!1,G0(t,n,e);Lt=(t.flags&131072)!==0}else Lt=!1,ft&&(n.flags&1048576)!==0&&$c(n,gi,n.index);switch(n.lanes=0,n.tag){case 16:t:{t=n.pendingProps;var a=n.elementType,l=a._init;if(a=l(a._payload),n.type=a,typeof a=="function")Vu(a)?(t=Pe(a,t),n.tag=1,n=uf(null,n,a,t,e)):(n.tag=0,n=zu(null,n,a,t,e));else{if(a!=null){if(l=a.$$typeof,l===T){n.tag=11,n=tf(null,n,a,t,e);break t}else if(l===N){n.tag=14,n=nf(null,n,a,t,e);break t}}throw n=At(a)||a,Error(c(306,n,""))}}return n;case 0:return zu(t,n,n.type,n.pendingProps,e);case 1:return a=n.type,l=Pe(a,n.pendingProps),uf(t,n,a,l,e);case 3:t:{if(Wl(n,n.stateNode.containerInfo),t===null)throw Error(c(387));var i=n.pendingProps;l=n.memoizedState,a=l.element,Nu(t,n),Sl(n,i,null,e);var u=n.memoizedState;if(i=u.cache,xe(n,wt,i),i!==l.cache&&Hu(n,[wt],e,!0),xl(),i=u.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:u.cache},n.updateQueue.baseState=l,n.memoizedState=l,n.flags&256){n=of(t,n,i,e);break t}else if(i!==a){a=pn(Error(c(424)),n),ul(a),n=of(t,n,i,e);break t}else for(Qt=Dn(n.stateNode.containerInfo.firstChild),Ft=n,ft=!0,An=null,Cn=!0,e=ls(n,null,i,e),n.child=e;e;)e.flags=e.flags&-3|4096,e=e.sibling;else{if(rl(),i===a){n=Wn(t,n,e);break t}Zt(t,n,i,e)}n=n.child}return n;case 26:return vl(t,n),t===null?(e=bd(n.type,null,n.pendingProps,null))?n.memoizedState=e:ft||(e=n.type,t=n.pendingProps,a=Wi(fe.current).createElement(e),a[Kt]=n,a[nn]=t,Vt(a,e,t),Yt(a),n.stateNode=a):n.memoizedState=bd(n.type,t.memoizedProps,n.pendingProps,t.memoizedState),null;case 27:return Or(n),t===null&&ft&&(a=n.stateNode=dd(n.type,n.pendingProps,fe.current),Ft=n,Cn=!0,Qt=Dn(a.firstChild)),a=n.pendingProps.children,t!==null||ft?Zt(t,n,a,e):n.child=Ze(n,null,a,e),vl(t,n),n.child;case 5:return t===null&&ft&&((l=a=Qt)&&(a=ym(a,n.type,n.pendingProps,Cn),a!==null?(n.stateNode=a,Ft=n,Qt=Dn(a.firstChild),Cn=!1,l=!0):l=!1),l||Qe(n)),Or(n),l=n.type,i=n.pendingProps,u=t!==null?t.memoizedProps:null,a=i.children,yo(l,i)?a=null:u!==null&&yo(l,u)&&(n.flags|=32),n.memoizedState!==null&&(l=ru(t,n,w0,null,null,e),wl._currentValue=l),vl(t,n),Zt(t,n,a,e),n.child;case 6:return t===null&&ft&&((t=e=Qt)&&(e=xm(e,n.pendingProps,Cn),e!==null?(n.stateNode=e,Ft=n,Qt=null,t=!0):t=!1),t||Qe(n)),null;case 13:return cf(t,n,e);case 4:return Wl(n,n.stateNode.containerInfo),a=n.pendingProps,t===null?n.child=Ze(n,null,a,e):Zt(t,n,a,e),n.child;case 11:return tf(t,n,n.type,n.pendingProps,e);case 7:return Zt(t,n,n.pendingProps,e),n.child;case 8:return Zt(t,n,n.pendingProps.children,e),n.child;case 12:return Zt(t,n,n.pendingProps.children,e),n.child;case 10:return a=n.pendingProps,xe(n,n.type,a.value),Zt(t,n,a.children,e),n.child;case 9:return l=n.type._context,a=n.pendingProps.children,Fe(n),l=Jt(l),a=a(l),n.flags|=1,Zt(t,n,a,e),n.child;case 14:return nf(t,n,n.type,n.pendingProps,e);case 15:return ef(t,n,n.type,n.pendingProps,e);case 19:return ff(t,n,e);case 22:return af(t,n,e);case 24:return Fe(n),a=Jt(wt),t===null?(l=lu(),l===null&&(l=yt,i=eu(),l.pooledCache=i,i.refCount++,i!==null&&(l.pooledCacheLanes|=e),l=i),n.memoizedState={parent:a,cache:l},wu(n),xe(n,wt,l)):((t.lanes&e)!==0&&(Nu(t,n),Sl(n,null,null,e),xl()),l=t.memoizedState,i=n.memoizedState,l.parent!==a?(l={parent:a,cache:a},n.memoizedState=l,n.lanes===0&&(n.memoizedState=n.updateQueue.baseState=l),xe(n,wt,a)):(a=i.cache,xe(n,wt,a),a!==l.cache&&Hu(n,[wt],e,!0))),Zt(t,n,n.pendingProps.children,e),n.child;case 29:throw n.pendingProps}throw Error(c(156,n.tag))}var Uu=ht(null),We=null,Fn=null;function xe(t,n,e){Ot(Uu,n._currentValue),n._currentValue=e}function In(t){t._currentValue=Uu.current,qt(Uu)}function Cu(t,n,e){for(;t!==null;){var a=t.alternate;if((t.childLanes&n)!==n?(t.childLanes|=n,a!==null&&(a.childLanes|=n)):a!==null&&(a.childLanes&n)!==n&&(a.childLanes|=n),t===e)break;t=t.return}}function Hu(t,n,e,a){var l=t.child;for(l!==null&&(l.return=t);l!==null;){var i=l.dependencies;if(i!==null){var u=l.child;i=i.firstContext;t:for(;i!==null;){var f=i;i=l;for(var m=0;m<n.length;m++)if(f.context===n[m]){i.lanes|=e,f=i.alternate,f!==null&&(f.lanes|=e),Cu(i.return,e,t),a||(u=null);break t}i=f.next}}else if(l.tag===18){if(u=l.return,u===null)throw Error(c(341));u.lanes|=e,i=u.alternate,i!==null&&(i.lanes|=e),Cu(u,e,t),u=null}else u=l.child;if(u!==null)u.return=l;else for(u=l;u!==null;){if(u===t){u=null;break}if(l=u.sibling,l!==null){l.return=u.return,u=l;break}u=u.return}l=u}}function gl(t,n,e,a){t=null;for(var l=n,i=!1;l!==null;){if(!i){if((l.flags&524288)!==0)i=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var u=l.alternate;if(u===null)throw Error(c(387));if(u=u.memoizedProps,u!==null){var f=l.type;un(l.pendingProps.value,u.value)||(t!==null?t.push(f):t=[f])}}else if(l===Pl.current){if(u=l.alternate,u===null)throw Error(c(387));u.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(t!==null?t.push(wl):t=[wl])}l=l.return}t!==null&&Hu(n,t,e,a),n.flags|=262144}function Hi(t){for(t=t.firstContext;t!==null;){if(!un(t.context._currentValue,t.memoizedValue))return!0;t=t.next}return!1}function Fe(t){We=t,Fn=null,t=t.dependencies,t!==null&&(t.firstContext=null)}function Jt(t){return hf(We,t)}function wi(t,n){return We===null&&Fe(t),hf(t,n)}function hf(t,n){var e=n._currentValue;if(n={context:n,memoizedValue:e,next:null},Fn===null){if(t===null)throw Error(c(308));Fn=n,t.dependencies={lanes:0,firstContext:n},t.flags|=524288}else Fn=Fn.next=n;return e}var Se=!1;function wu(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function Nu(t,n){t=t.updateQueue,n.updateQueue===t&&(n.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,callbacks:null})}function Oe(t){return{lane:t,tag:0,payload:null,callback:null,next:null}}function Ee(t,n,e){var a=t.updateQueue;if(a===null)return null;if(a=a.shared,(Tt&2)!==0){var l=a.pending;return l===null?n.next=n:(n.next=l.next,l.next=n),a.pending=n,n=pi(t),Kc(t,null,e),n}return bi(t,a,n,e),pi(t)}function yl(t,n,e){if(n=n.updateQueue,n!==null&&(n=n.shared,(e&4194176)!==0)){var a=n.lanes;a&=t.pendingLanes,e|=a,n.lanes=e,nc(t,e)}}function Bu(t,n){var e=t.updateQueue,a=t.alternate;if(a!==null&&(a=a.updateQueue,e===a)){var l=null,i=null;if(e=e.firstBaseUpdate,e!==null){do{var u={lane:e.lane,tag:e.tag,payload:e.payload,callback:null,next:null};i===null?l=i=u:i=i.next=u,e=e.next}while(e!==null);i===null?l=i=n:i=i.next=n}else l=i=n;e={baseState:a.baseState,firstBaseUpdate:l,lastBaseUpdate:i,shared:a.shared,callbacks:a.callbacks},t.updateQueue=e;return}t=e.lastBaseUpdate,t===null?e.firstBaseUpdate=n:t.next=n,e.lastBaseUpdate=n}var Yu=!1;function xl(){if(Yu){var t=za;if(t!==null)throw t}}function Sl(t,n,e,a){Yu=!1;var l=t.updateQueue;Se=!1;var i=l.firstBaseUpdate,u=l.lastBaseUpdate,f=l.shared.pending;if(f!==null){l.shared.pending=null;var m=f,x=m.next;m.next=null,u===null?i=x:u.next=x,u=m;var D=t.alternate;D!==null&&(D=D.updateQueue,f=D.lastBaseUpdate,f!==u&&(f===null?D.firstBaseUpdate=x:f.next=x,D.lastBaseUpdate=m))}if(i!==null){var C=l.baseState;u=0,D=x=m=null,f=i;do{var z=f.lane&-536870913,A=z!==f.lane;if(A?(st&z)===z:(a&z)===z){z!==0&&z===Ea&&(Yu=!0),D!==null&&(D=D.next={lane:0,tag:f.tag,payload:f.payload,callback:null,next:null});t:{var Q=t,I=f;z=n;var Mt=e;switch(I.tag){case 1:if(Q=I.payload,typeof Q=="function"){C=Q.call(Mt,C,z);break t}C=Q;break t;case 3:Q.flags=Q.flags&-65537|128;case 0:if(Q=I.payload,z=typeof Q=="function"?Q.call(Mt,C,z):Q,z==null)break t;C=et({},C,z);break t;case 2:Se=!0}}z=f.callback,z!==null&&(t.flags|=64,A&&(t.flags|=8192),A=l.callbacks,A===null?l.callbacks=[z]:A.push(z))}else A={lane:z,tag:f.tag,payload:f.payload,callback:f.callback,next:null},D===null?(x=D=A,m=C):D=D.next=A,u|=z;if(f=f.next,f===null){if(f=l.shared.pending,f===null)break;A=f,f=A.next,A.next=null,l.lastBaseUpdate=A,l.shared.pending=null}}while(!0);D===null&&(m=C),l.baseState=m,l.firstBaseUpdate=x,l.lastBaseUpdate=D,i===null&&(l.shared.lanes=0),De|=u,t.lanes=u,t.memoizedState=C}}function mf(t,n){if(typeof t!="function")throw Error(c(191,t));t.call(n)}function bf(t,n){var e=t.callbacks;if(e!==null)for(t.callbacks=null,t=0;t<e.length;t++)mf(e[t],n)}function Ol(t,n){try{var e=n.updateQueue,a=e!==null?e.lastEffect:null;if(a!==null){var l=a.next;e=l;do{if((e.tag&t)===t){a=void 0;var i=e.create,u=e.inst;a=i(),u.destroy=a}e=e.next}while(e!==l)}}catch(f){vt(n,n.return,f)}}function ze(t,n,e){try{var a=n.updateQueue,l=a!==null?a.lastEffect:null;if(l!==null){var i=l.next;a=i;do{if((a.tag&t)===t){var u=a.inst,f=u.destroy;if(f!==void 0){u.destroy=void 0,l=n;var m=e;try{f()}catch(x){vt(l,m,x)}}}a=a.next}while(a!==i)}}catch(x){vt(n,n.return,x)}}function pf(t){var n=t.updateQueue;if(n!==null){var e=t.stateNode;try{bf(n,e)}catch(a){vt(t,t.return,a)}}}function vf(t,n,e){e.props=Pe(t.type,t.memoizedProps),e.state=t.memoizedState;try{e.componentWillUnmount()}catch(a){vt(t,n,a)}}function Ie(t,n){try{var e=t.ref;if(e!==null){var a=t.stateNode;switch(t.tag){case 26:case 27:case 5:var l=a;break;default:l=a}typeof e=="function"?t.refCleanup=e(l):e.current=l}}catch(i){vt(t,n,i)}}function on(t,n){var e=t.ref,a=t.refCleanup;if(e!==null)if(typeof a=="function")try{a()}catch(l){vt(t,n,l)}finally{t.refCleanup=null,t=t.alternate,t!=null&&(t.refCleanup=null)}else if(typeof e=="function")try{e(null)}catch(l){vt(t,n,l)}else e.current=null}function gf(t){var n=t.type,e=t.memoizedProps,a=t.stateNode;try{t:switch(n){case"button":case"input":case"select":case"textarea":e.autoFocus&&a.focus();break t;case"img":e.src?a.src=e.src:e.srcSet&&(a.srcset=e.srcSet)}}catch(l){vt(t,t.return,l)}}function yf(t,n,e){try{var a=t.stateNode;mm(a,t.type,e,n),a[nn]=n}catch(l){vt(t,t.return,l)}}function xf(t){return t.tag===5||t.tag===3||t.tag===26||t.tag===27||t.tag===4}function Lu(t){t:for(;;){for(;t.sibling===null;){if(t.return===null||xf(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==27&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue t;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function ju(t,n,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,n?e.nodeType===8?e.parentNode.insertBefore(t,n):e.insertBefore(t,n):(e.nodeType===8?(n=e.parentNode,n.insertBefore(t,e)):(n=e,n.appendChild(t)),e=e._reactRootContainer,e!=null||n.onclick!==null||(n.onclick=Pi));else if(a!==4&&a!==27&&(t=t.child,t!==null))for(ju(t,n,e),t=t.sibling;t!==null;)ju(t,n,e),t=t.sibling}function Ni(t,n,e){var a=t.tag;if(a===5||a===6)t=t.stateNode,n?e.insertBefore(t,n):e.appendChild(t);else if(a!==4&&a!==27&&(t=t.child,t!==null))for(Ni(t,n,e),t=t.sibling;t!==null;)Ni(t,n,e),t=t.sibling}var te=!1,_t=!1,Xu=!1,Sf=typeof WeakSet=="function"?WeakSet:Set,jt=null,Of=!1;function Q0(t,n){if(t=t.containerInfo,vo=ar,t=Bc(t),Qr(t)){if("selectionStart"in t)var e={start:t.selectionStart,end:t.selectionEnd};else t:{e=(e=t.ownerDocument)&&e.defaultView||window;var a=e.getSelection&&e.getSelection();if(a&&a.rangeCount!==0){e=a.anchorNode;var l=a.anchorOffset,i=a.focusNode;a=a.focusOffset;try{e.nodeType,i.nodeType}catch{e=null;break t}var u=0,f=-1,m=-1,x=0,D=0,C=t,z=null;n:for(;;){for(var A;C!==e||l!==0&&C.nodeType!==3||(f=u+l),C!==i||a!==0&&C.nodeType!==3||(m=u+a),C.nodeType===3&&(u+=C.nodeValue.length),(A=C.firstChild)!==null;)z=C,C=A;for(;;){if(C===t)break n;if(z===e&&++x===l&&(f=u),z===i&&++D===a&&(m=u),(A=C.nextSibling)!==null)break;C=z,z=C.parentNode}C=A}e=f===-1||m===-1?null:{start:f,end:m}}else e=null}e=e||{start:0,end:0}}else e=null;for(go={focusedElem:t,selectionRange:e},ar=!1,jt=n;jt!==null;)if(n=jt,t=n.child,(n.subtreeFlags&1028)!==0&&t!==null)t.return=n,jt=t;else for(;jt!==null;){switch(n=jt,i=n.alternate,t=n.flags,n.tag){case 0:break;case 11:case 15:break;case 1:if((t&1024)!==0&&i!==null){t=void 0,e=n,l=i.memoizedProps,i=i.memoizedState,a=e.stateNode;try{var Q=Pe(e.type,l,e.elementType===e.type);t=a.getSnapshotBeforeUpdate(Q,i),a.__reactInternalSnapshotBeforeUpdate=t}catch(I){vt(e,e.return,I)}}break;case 3:if((t&1024)!==0){if(t=n.stateNode.containerInfo,e=t.nodeType,e===9)Oo(t);else if(e===1)switch(t.nodeName){case"HEAD":case"HTML":case"BODY":Oo(t);break;default:t.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((t&1024)!==0)throw Error(c(163))}if(t=n.sibling,t!==null){t.return=n.return,jt=t;break}jt=n.return}return Q=Of,Of=!1,Q}function Ef(t,n,e){var a=e.flags;switch(e.tag){case 0:case 11:case 15:ee(t,e),a&4&&Ol(5,e);break;case 1:if(ee(t,e),a&4)if(t=e.stateNode,n===null)try{t.componentDidMount()}catch(f){vt(e,e.return,f)}else{var l=Pe(e.type,n.memoizedProps);n=n.memoizedState;try{t.componentDidUpdate(l,n,t.__reactInternalSnapshotBeforeUpdate)}catch(f){vt(e,e.return,f)}}a&64&&pf(e),a&512&&Ie(e,e.return);break;case 3:if(ee(t,e),a&64&&(a=e.updateQueue,a!==null)){if(t=null,e.child!==null)switch(e.child.tag){case 27:case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}try{bf(a,t)}catch(f){vt(e,e.return,f)}}break;case 26:ee(t,e),a&512&&Ie(e,e.return);break;case 27:case 5:ee(t,e),n===null&&a&4&&gf(e),a&512&&Ie(e,e.return);break;case 12:ee(t,e);break;case 13:ee(t,e),a&4&&Af(t,e);break;case 22:if(l=e.memoizedState!==null||te,!l){n=n!==null&&n.memoizedState!==null||_t;var i=te,u=_t;te=l,(_t=n)&&!u?Te(t,e,(e.subtreeFlags&8772)!==0):ee(t,e),te=i,_t=u}a&512&&(e.memoizedProps.mode==="manual"?Ie(e,e.return):on(e,e.return));break;default:ee(t,e)}}function zf(t){var n=t.alternate;n!==null&&(t.alternate=null,zf(n)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(n=t.stateNode,n!==null&&Dr(n)),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}var Ct=null,cn=!1;function ne(t,n,e){for(e=e.child;e!==null;)Tf(t,n,e),e=e.sibling}function Tf(t,n,e){if(ln&&typeof ln.onCommitFiberUnmount=="function")try{ln.onCommitFiberUnmount(Za,e)}catch{}switch(e.tag){case 26:_t||on(e,n),ne(t,n,e),e.memoizedState?e.memoizedState.count--:e.stateNode&&(e=e.stateNode,e.parentNode.removeChild(e));break;case 27:_t||on(e,n);var a=Ct,l=cn;for(Ct=e.stateNode,ne(t,n,e),e=e.stateNode,n=e.attributes;n.length;)e.removeAttributeNode(n[0]);Dr(e),Ct=a,cn=l;break;case 5:_t||on(e,n);case 6:l=Ct;var i=cn;if(Ct=null,ne(t,n,e),Ct=l,cn=i,Ct!==null)if(cn)try{t=Ct,a=e.stateNode,t.nodeType===8?t.parentNode.removeChild(a):t.removeChild(a)}catch(u){vt(e,n,u)}else try{Ct.removeChild(e.stateNode)}catch(u){vt(e,n,u)}break;case 18:Ct!==null&&(cn?(n=Ct,e=e.stateNode,n.nodeType===8?So(n.parentNode,e):n.nodeType===1&&So(n,e),Ll(n)):So(Ct,e.stateNode));break;case 4:a=Ct,l=cn,Ct=e.stateNode.containerInfo,cn=!0,ne(t,n,e),Ct=a,cn=l;break;case 0:case 11:case 14:case 15:_t||ze(2,e,n),_t||ze(4,e,n),ne(t,n,e);break;case 1:_t||(on(e,n),a=e.stateNode,typeof a.componentWillUnmount=="function"&&vf(e,n,a)),ne(t,n,e);break;case 21:ne(t,n,e);break;case 22:_t||on(e,n),_t=(a=_t)||e.memoizedState!==null,ne(t,n,e),_t=a;break;default:ne(t,n,e)}}function Af(t,n){if(n.memoizedState===null&&(t=n.alternate,t!==null&&(t=t.memoizedState,t!==null&&(t=t.dehydrated,t!==null))))try{Ll(t)}catch(e){vt(n,n.return,e)}}function Z0(t){switch(t.tag){case 13:case 19:var n=t.stateNode;return n===null&&(n=t.stateNode=new Sf),n;case 22:return t=t.stateNode,n=t._retryCache,n===null&&(n=t._retryCache=new Sf),n;default:throw Error(c(435,t.tag))}}function Gu(t,n){var e=Z0(t);n.forEach(function(a){var l=lm.bind(null,t,a);e.has(a)||(e.add(a),a.then(l,l))})}function xn(t,n){var e=n.deletions;if(e!==null)for(var a=0;a<e.length;a++){var l=e[a],i=t,u=n,f=u;t:for(;f!==null;){switch(f.tag){case 27:case 5:Ct=f.stateNode,cn=!1;break t;case 3:Ct=f.stateNode.containerInfo,cn=!0;break t;case 4:Ct=f.stateNode.containerInfo,cn=!0;break t}f=f.return}if(Ct===null)throw Error(c(160));Tf(i,u,l),Ct=null,cn=!1,i=l.alternate,i!==null&&(i.return=null),l.return=null}if(n.subtreeFlags&13878)for(n=n.child;n!==null;)_f(n,t),n=n.sibling}var _n=null;function _f(t,n){var e=t.alternate,a=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:xn(n,t),Sn(t),a&4&&(ze(3,t,t.return),Ol(3,t),ze(5,t,t.return));break;case 1:xn(n,t),Sn(t),a&512&&(_t||e===null||on(e,e.return)),a&64&&te&&(t=t.updateQueue,t!==null&&(a=t.callbacks,a!==null&&(e=t.shared.hiddenCallbacks,t.shared.hiddenCallbacks=e===null?a:e.concat(a))));break;case 26:var l=_n;if(xn(n,t),Sn(t),a&512&&(_t||e===null||on(e,e.return)),a&4){var i=e!==null?e.memoizedState:null;if(a=t.memoizedState,e===null)if(a===null)if(t.stateNode===null){t:{a=t.type,e=t.memoizedProps,l=l.ownerDocument||l;n:switch(a){case"title":i=l.getElementsByTagName("title")[0],(!i||i[Ja]||i[Kt]||i.namespaceURI==="http://www.w3.org/2000/svg"||i.hasAttribute("itemprop"))&&(i=l.createElement(a),l.head.insertBefore(i,l.querySelector("head > title"))),Vt(i,a,e),i[Kt]=t,Yt(i),a=i;break t;case"link":var u=gd("link","href",l).get(a+(e.href||""));if(u){for(var f=0;f<u.length;f++)if(i=u[f],i.getAttribute("href")===(e.href==null?null:e.href)&&i.getAttribute("rel")===(e.rel==null?null:e.rel)&&i.getAttribute("title")===(e.title==null?null:e.title)&&i.getAttribute("crossorigin")===(e.crossOrigin==null?null:e.crossOrigin)){u.splice(f,1);break n}}i=l.createElement(a),Vt(i,a,e),l.head.appendChild(i);break;case"meta":if(u=gd("meta","content",l).get(a+(e.content||""))){for(f=0;f<u.length;f++)if(i=u[f],i.getAttribute("content")===(e.content==null?null:""+e.content)&&i.getAttribute("name")===(e.name==null?null:e.name)&&i.getAttribute("property")===(e.property==null?null:e.property)&&i.getAttribute("http-equiv")===(e.httpEquiv==null?null:e.httpEquiv)&&i.getAttribute("charset")===(e.charSet==null?null:e.charSet)){u.splice(f,1);break n}}i=l.createElement(a),Vt(i,a,e),l.head.appendChild(i);break;default:throw Error(c(468,a))}i[Kt]=t,Yt(i),a=i}t.stateNode=a}else yd(l,t.type,t.stateNode);else t.stateNode=vd(l,a,t.memoizedProps);else i!==a?(i===null?e.stateNode!==null&&(e=e.stateNode,e.parentNode.removeChild(e)):i.count--,a===null?yd(l,t.type,t.stateNode):vd(l,a,t.memoizedProps)):a===null&&t.stateNode!==null&&yf(t,t.memoizedProps,e.memoizedProps)}break;case 27:if(a&4&&t.alternate===null){l=t.stateNode,i=t.memoizedProps;try{for(var m=l.firstChild;m;){var x=m.nextSibling,D=m.nodeName;m[Ja]||D==="HEAD"||D==="BODY"||D==="SCRIPT"||D==="STYLE"||D==="LINK"&&m.rel.toLowerCase()==="stylesheet"||l.removeChild(m),m=x}for(var C=t.type,z=l.attributes;z.length;)l.removeAttributeNode(z[0]);Vt(l,C,i),l[Kt]=t,l[nn]=i}catch(Q){vt(t,t.return,Q)}}case 5:if(xn(n,t),Sn(t),a&512&&(_t||e===null||on(e,e.return)),t.flags&32){l=t.stateNode;try{fa(l,"")}catch(Q){vt(t,t.return,Q)}}a&4&&t.stateNode!=null&&(l=t.memoizedProps,yf(t,l,e!==null?e.memoizedProps:l)),a&1024&&(Xu=!0);break;case 6:if(xn(n,t),Sn(t),a&4){if(t.stateNode===null)throw Error(c(162));a=t.memoizedProps,e=t.stateNode;try{e.nodeValue=a}catch(Q){vt(t,t.return,Q)}}break;case 3:if(tr=null,l=_n,_n=Fi(n.containerInfo),xn(n,t),_n=l,Sn(t),a&4&&e!==null&&e.memoizedState.isDehydrated)try{Ll(n.containerInfo)}catch(Q){vt(t,t.return,Q)}Xu&&(Xu=!1,Df(t));break;case 4:a=_n,_n=Fi(t.stateNode.containerInfo),xn(n,t),Sn(t),_n=a;break;case 12:xn(n,t),Sn(t);break;case 13:xn(n,t),Sn(t),t.child.flags&8192&&t.memoizedState!==null!=(e!==null&&e.memoizedState!==null)&&(Fu=Un()),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Gu(t,a)));break;case 22:if(a&512&&(_t||e===null||on(e,e.return)),m=t.memoizedState!==null,x=e!==null&&e.memoizedState!==null,D=te,C=_t,te=D||m,_t=C||x,xn(n,t),_t=C,te=D,Sn(t),n=t.stateNode,n._current=t,n._visibility&=-3,n._visibility|=n._pendingVisibility&2,a&8192&&(n._visibility=m?n._visibility&-2:n._visibility|1,m&&(n=te||_t,e===null||x||n||Da(t)),t.memoizedProps===null||t.memoizedProps.mode!=="manual"))t:for(e=null,n=t;;){if(n.tag===5||n.tag===26||n.tag===27){if(e===null){x=e=n;try{if(l=x.stateNode,m)i=l.style,typeof i.setProperty=="function"?i.setProperty("display","none","important"):i.display="none";else{u=x.stateNode,f=x.memoizedProps.style;var A=f!=null&&f.hasOwnProperty("display")?f.display:null;u.style.display=A==null||typeof A=="boolean"?"":(""+A).trim()}}catch(Q){vt(x,x.return,Q)}}}else if(n.tag===6){if(e===null){x=n;try{x.stateNode.nodeValue=m?"":x.memoizedProps}catch(Q){vt(x,x.return,Q)}}}else if((n.tag!==22&&n.tag!==23||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break t;for(;n.sibling===null;){if(n.return===null||n.return===t)break t;e===n&&(e=null),n=n.return}e===n&&(e=null),n.sibling.return=n.return,n=n.sibling}a&4&&(a=t.updateQueue,a!==null&&(e=a.retryQueue,e!==null&&(a.retryQueue=null,Gu(t,e))));break;case 19:xn(n,t),Sn(t),a&4&&(a=t.updateQueue,a!==null&&(t.updateQueue=null,Gu(t,a)));break;case 21:break;default:xn(n,t),Sn(t)}}function Sn(t){var n=t.flags;if(n&2){try{if(t.tag!==27){t:{for(var e=t.return;e!==null;){if(xf(e)){var a=e;break t}e=e.return}throw Error(c(160))}switch(a.tag){case 27:var l=a.stateNode,i=Lu(t);Ni(t,i,l);break;case 5:var u=a.stateNode;a.flags&32&&(fa(u,""),a.flags&=-33);var f=Lu(t);Ni(t,f,u);break;case 3:case 4:var m=a.stateNode.containerInfo,x=Lu(t);ju(t,x,m);break;default:throw Error(c(161))}}}catch(D){vt(t,t.return,D)}t.flags&=-3}n&4096&&(t.flags&=-4097)}function Df(t){if(t.subtreeFlags&1024)for(t=t.child;t!==null;){var n=t;Df(n),n.tag===5&&n.flags&1024&&n.stateNode.reset(),t=t.sibling}}function ee(t,n){if(n.subtreeFlags&8772)for(n=n.child;n!==null;)Ef(t,n.alternate,n),n=n.sibling}function Da(t){for(t=t.child;t!==null;){var n=t;switch(n.tag){case 0:case 11:case 14:case 15:ze(4,n,n.return),Da(n);break;case 1:on(n,n.return);var e=n.stateNode;typeof e.componentWillUnmount=="function"&&vf(n,n.return,e),Da(n);break;case 26:case 27:case 5:on(n,n.return),Da(n);break;case 22:on(n,n.return),n.memoizedState===null&&Da(n);break;default:Da(n)}t=t.sibling}}function Te(t,n,e){for(e=e&&(n.subtreeFlags&8772)!==0,n=n.child;n!==null;){var a=n.alternate,l=t,i=n,u=i.flags;switch(i.tag){case 0:case 11:case 15:Te(l,i,e),Ol(4,i);break;case 1:if(Te(l,i,e),a=i,l=a.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(x){vt(a,a.return,x)}if(a=i,l=a.updateQueue,l!==null){var f=a.stateNode;try{var m=l.shared.hiddenCallbacks;if(m!==null)for(l.shared.hiddenCallbacks=null,l=0;l<m.length;l++)mf(m[l],f)}catch(x){vt(a,a.return,x)}}e&&u&64&&pf(i),Ie(i,i.return);break;case 26:case 27:case 5:Te(l,i,e),e&&a===null&&u&4&&gf(i),Ie(i,i.return);break;case 12:Te(l,i,e);break;case 13:Te(l,i,e),e&&u&4&&Af(l,i);break;case 22:i.memoizedState===null&&Te(l,i,e),Ie(i,i.return);break;default:Te(l,i,e)}n=n.sibling}}function Qu(t,n){var e=null;t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),t=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(t=n.memoizedState.cachePool.pool),t!==e&&(t!=null&&t.refCount++,e!=null&&dl(e))}function Zu(t,n){t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&dl(t))}function Ae(t,n,e,a){if(n.subtreeFlags&10256)for(n=n.child;n!==null;)Mf(t,n,e,a),n=n.sibling}function Mf(t,n,e,a){var l=n.flags;switch(n.tag){case 0:case 11:case 15:Ae(t,n,e,a),l&2048&&Ol(9,n);break;case 3:Ae(t,n,e,a),l&2048&&(t=null,n.alternate!==null&&(t=n.alternate.memoizedState.cache),n=n.memoizedState.cache,n!==t&&(n.refCount++,t!=null&&dl(t)));break;case 12:if(l&2048){Ae(t,n,e,a),t=n.stateNode;try{var i=n.memoizedProps,u=i.id,f=i.onPostCommit;typeof f=="function"&&f(u,n.alternate===null?"mount":"update",t.passiveEffectDuration,-0)}catch(m){vt(n,n.return,m)}}else Ae(t,n,e,a);break;case 23:break;case 22:i=n.stateNode,n.memoizedState!==null?i._visibility&4?Ae(t,n,e,a):El(t,n):i._visibility&4?Ae(t,n,e,a):(i._visibility|=4,Ma(t,n,e,a,(n.subtreeFlags&10256)!==0)),l&2048&&Qu(n.alternate,n);break;case 24:Ae(t,n,e,a),l&2048&&Zu(n.alternate,n);break;default:Ae(t,n,e,a)}}function Ma(t,n,e,a,l){for(l=l&&(n.subtreeFlags&10256)!==0,n=n.child;n!==null;){var i=t,u=n,f=e,m=a,x=u.flags;switch(u.tag){case 0:case 11:case 15:Ma(i,u,f,m,l),Ol(8,u);break;case 23:break;case 22:var D=u.stateNode;u.memoizedState!==null?D._visibility&4?Ma(i,u,f,m,l):El(i,u):(D._visibility|=4,Ma(i,u,f,m,l)),l&&x&2048&&Qu(u.alternate,u);break;case 24:Ma(i,u,f,m,l),l&&x&2048&&Zu(u.alternate,u);break;default:Ma(i,u,f,m,l)}n=n.sibling}}function El(t,n){if(n.subtreeFlags&10256)for(n=n.child;n!==null;){var e=t,a=n,l=a.flags;switch(a.tag){case 22:El(e,a),l&2048&&Qu(a.alternate,a);break;case 24:El(e,a),l&2048&&Zu(a.alternate,a);break;default:El(e,a)}n=n.sibling}}var zl=8192;function Ra(t){if(t.subtreeFlags&zl)for(t=t.child;t!==null;)Rf(t),t=t.sibling}function Rf(t){switch(t.tag){case 26:Ra(t),t.flags&zl&&t.memoizedState!==null&&Um(_n,t.memoizedState,t.memoizedProps);break;case 5:Ra(t);break;case 3:case 4:var n=_n;_n=Fi(t.stateNode.containerInfo),Ra(t),_n=n;break;case 22:t.memoizedState===null&&(n=t.alternate,n!==null&&n.memoizedState!==null?(n=zl,zl=16777216,Ra(t),zl=n):Ra(t));break;default:Ra(t)}}function qf(t){var n=t.alternate;if(n!==null&&(t=n.child,t!==null)){n.child=null;do n=t.sibling,t.sibling=null,t=n;while(t!==null)}}function Tl(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var a=n[e];jt=a,Uf(a,t)}qf(t)}if(t.subtreeFlags&10256)for(t=t.child;t!==null;)kf(t),t=t.sibling}function kf(t){switch(t.tag){case 0:case 11:case 15:Tl(t),t.flags&2048&&ze(9,t,t.return);break;case 3:Tl(t);break;case 12:Tl(t);break;case 22:var n=t.stateNode;t.memoizedState!==null&&n._visibility&4&&(t.return===null||t.return.tag!==13)?(n._visibility&=-5,Bi(t)):Tl(t);break;default:Tl(t)}}function Bi(t){var n=t.deletions;if((t.flags&16)!==0){if(n!==null)for(var e=0;e<n.length;e++){var a=n[e];jt=a,Uf(a,t)}qf(t)}for(t=t.child;t!==null;){switch(n=t,n.tag){case 0:case 11:case 15:ze(8,n,n.return),Bi(n);break;case 22:e=n.stateNode,e._visibility&4&&(e._visibility&=-5,Bi(n));break;default:Bi(n)}t=t.sibling}}function Uf(t,n){for(;jt!==null;){var e=jt;switch(e.tag){case 0:case 11:case 15:ze(8,e,n);break;case 23:case 22:if(e.memoizedState!==null&&e.memoizedState.cachePool!==null){var a=e.memoizedState.cachePool.pool;a!=null&&a.refCount++}break;case 24:dl(e.memoizedState.cache)}if(a=e.child,a!==null)a.return=e,jt=a;else t:for(e=t;jt!==null;){a=jt;var l=a.sibling,i=a.return;if(zf(a),a===e){jt=null;break t}if(l!==null){l.return=i,jt=l;break t}jt=i}}}function V0(t,n,e,a){this.tag=t,this.key=e,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=n,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=a,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function On(t,n,e,a){return new V0(t,n,e,a)}function Vu(t){return t=t.prototype,!(!t||!t.isReactComponent)}function _e(t,n){var e=t.alternate;return e===null?(e=On(t.tag,n,t.key,t.mode),e.elementType=t.elementType,e.type=t.type,e.stateNode=t.stateNode,e.alternate=t,t.alternate=e):(e.pendingProps=n,e.type=t.type,e.flags=0,e.subtreeFlags=0,e.deletions=null),e.flags=t.flags&31457280,e.childLanes=t.childLanes,e.lanes=t.lanes,e.child=t.child,e.memoizedProps=t.memoizedProps,e.memoizedState=t.memoizedState,e.updateQueue=t.updateQueue,n=t.dependencies,e.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext},e.sibling=t.sibling,e.index=t.index,e.ref=t.ref,e.refCleanup=t.refCleanup,e}function Cf(t,n){t.flags&=31457282;var e=t.alternate;return e===null?(t.childLanes=0,t.lanes=n,t.child=null,t.subtreeFlags=0,t.memoizedProps=null,t.memoizedState=null,t.updateQueue=null,t.dependencies=null,t.stateNode=null):(t.childLanes=e.childLanes,t.lanes=e.lanes,t.child=e.child,t.subtreeFlags=0,t.deletions=null,t.memoizedProps=e.memoizedProps,t.memoizedState=e.memoizedState,t.updateQueue=e.updateQueue,t.type=e.type,n=e.dependencies,t.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t}function Yi(t,n,e,a,l,i){var u=0;if(a=t,typeof t=="function")Vu(t)&&(u=1);else if(typeof t=="string")u=qm(t,e,kn.current)?26:t==="html"||t==="head"||t==="body"?27:5;else t:switch(t){case p:return ta(e.children,l,i,n);case h:u=8,l|=24;break;case R:return t=On(12,e,n,l|2),t.elementType=R,t.lanes=i,t;case _:return t=On(13,e,n,l),t.elementType=_,t.lanes=i,t;case H:return t=On(19,e,n,l),t.elementType=H,t.lanes=i,t;case J:return Hf(e,l,i,n);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case U:case B:u=10;break t;case M:u=9;break t;case T:u=11;break t;case N:u=14;break t;case Y:u=16,a=null;break t}u=29,e=Error(c(130,t===null?"null":typeof t,"")),a=null}return n=On(u,e,n,l),n.elementType=t,n.type=a,n.lanes=i,n}function ta(t,n,e,a){return t=On(7,t,a,n),t.lanes=e,t}function Hf(t,n,e,a){t=On(22,t,a,n),t.elementType=J,t.lanes=e;var l={_visibility:1,_pendingVisibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null,_current:null,detach:function(){var i=l._current;if(i===null)throw Error(c(456));if((l._pendingVisibility&2)===0){var u=be(i,2);u!==null&&(l._pendingVisibility|=2,It(u,i,2))}},attach:function(){var i=l._current;if(i===null)throw Error(c(456));if((l._pendingVisibility&2)!==0){var u=be(i,2);u!==null&&(l._pendingVisibility&=-3,It(u,i,2))}}};return t.stateNode=l,t}function Ku(t,n,e){return t=On(6,t,null,n),t.lanes=e,t}function Ju(t,n,e){return n=On(4,t.children!==null?t.children:[],t.key,n),n.lanes=e,n.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},n}function ae(t){t.flags|=4}function wf(t,n){if(n.type!=="stylesheet"||(n.state.loading&4)!==0)t.flags&=-16777217;else if(t.flags|=16777216,!xd(n)){if(n=yn.current,n!==null&&((st&4194176)===st?Hn!==null:(st&62914560)!==st&&(st&536870912)===0||n!==Hn))throw cl=Ir,Fc;t.flags|=8192}}function Li(t,n){n!==null&&(t.flags|=4),t.flags&16384&&(n=t.tag!==22?Io():536870912,t.lanes|=n,ka|=n)}function Al(t,n){if(!ft)switch(t.tailMode){case"hidden":n=t.tail;for(var e=null;n!==null;)n.alternate!==null&&(e=n),n=n.sibling;e===null?t.tail=null:e.sibling=null;break;case"collapsed":e=t.tail;for(var a=null;e!==null;)e.alternate!==null&&(a=e),e=e.sibling;a===null?n||t.tail===null?t.tail=null:t.tail.sibling=null:a.sibling=null}}function zt(t){var n=t.alternate!==null&&t.alternate.child===t.child,e=0,a=0;if(n)for(var l=t.child;l!==null;)e|=l.lanes|l.childLanes,a|=l.subtreeFlags&31457280,a|=l.flags&31457280,l.return=t,l=l.sibling;else for(l=t.child;l!==null;)e|=l.lanes|l.childLanes,a|=l.subtreeFlags,a|=l.flags,l.return=t,l=l.sibling;return t.subtreeFlags|=a,t.childLanes=e,n}function K0(t,n,e){var a=n.pendingProps;switch(Wr(n),n.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return zt(n),null;case 1:return zt(n),null;case 3:return e=n.stateNode,a=null,t!==null&&(a=t.memoizedState.cache),n.memoizedState.cache!==a&&(n.flags|=2048),In(wt),ia(),e.pendingContext&&(e.context=e.pendingContext,e.pendingContext=null),(t===null||t.child===null)&&(il(n)?ae(n):t===null||t.memoizedState.isDehydrated&&(n.flags&256)===0||(n.flags|=1024,An!==null&&(eo(An),An=null))),zt(n),null;case 26:return e=n.memoizedState,t===null?(ae(n),e!==null?(zt(n),wf(n,e)):(zt(n),n.flags&=-16777217)):e?e!==t.memoizedState?(ae(n),zt(n),wf(n,e)):(zt(n),n.flags&=-16777217):(t.memoizedProps!==a&&ae(n),zt(n),n.flags&=-16777217),null;case 27:Fl(n),e=fe.current;var l=n.type;if(t!==null&&n.stateNode!=null)t.memoizedProps!==a&&ae(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return zt(n),null}t=kn.current,il(n)?Pc(n):(t=dd(l,a,e),n.stateNode=t,ae(n))}return zt(n),null;case 5:if(Fl(n),e=n.type,t!==null&&n.stateNode!=null)t.memoizedProps!==a&&ae(n);else{if(!a){if(n.stateNode===null)throw Error(c(166));return zt(n),null}if(t=kn.current,il(n))Pc(n);else{switch(l=Wi(fe.current),t){case 1:t=l.createElementNS("http://www.w3.org/2000/svg",e);break;case 2:t=l.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;default:switch(e){case"svg":t=l.createElementNS("http://www.w3.org/2000/svg",e);break;case"math":t=l.createElementNS("http://www.w3.org/1998/Math/MathML",e);break;case"script":t=l.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild);break;case"select":t=typeof a.is=="string"?l.createElement("select",{is:a.is}):l.createElement("select"),a.multiple?t.multiple=!0:a.size&&(t.size=a.size);break;default:t=typeof a.is=="string"?l.createElement(e,{is:a.is}):l.createElement(e)}}t[Kt]=n,t[nn]=a;t:for(l=n.child;l!==null;){if(l.tag===5||l.tag===6)t.appendChild(l.stateNode);else if(l.tag!==4&&l.tag!==27&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===n)break t;for(;l.sibling===null;){if(l.return===null||l.return===n)break t;l=l.return}l.sibling.return=l.return,l=l.sibling}n.stateNode=t;t:switch(Vt(t,e,a),e){case"button":case"input":case"select":case"textarea":t=!!a.autoFocus;break t;case"img":t=!0;break t;default:t=!1}t&&ae(n)}}return zt(n),n.flags&=-16777217,null;case 6:if(t&&n.stateNode!=null)t.memoizedProps!==a&&ae(n);else{if(typeof a!="string"&&n.stateNode===null)throw Error(c(166));if(t=fe.current,il(n)){if(t=n.stateNode,e=n.memoizedProps,a=null,l=Ft,l!==null)switch(l.tag){case 27:case 5:a=l.memoizedProps}t[Kt]=n,t=!!(t.nodeValue===e||a!==null&&a.suppressHydrationWarning===!0||rd(t.nodeValue,e)),t||Qe(n)}else t=Wi(t).createTextNode(a),t[Kt]=n,n.stateNode=t}return zt(n),null;case 13:if(a=n.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(l=il(n),a!==null&&a.dehydrated!==null){if(t===null){if(!l)throw Error(c(318));if(l=n.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(c(317));l[Kt]=n}else rl(),(n.flags&128)===0&&(n.memoizedState=null),n.flags|=4;zt(n),l=!1}else An!==null&&(eo(An),An=null),l=!0;if(!l)return n.flags&256?($n(n),n):($n(n),null)}if($n(n),(n.flags&128)!==0)return n.lanes=e,n;if(e=a!==null,t=t!==null&&t.memoizedState!==null,e){a=n.child,l=null,a.alternate!==null&&a.alternate.memoizedState!==null&&a.alternate.memoizedState.cachePool!==null&&(l=a.alternate.memoizedState.cachePool.pool);var i=null;a.memoizedState!==null&&a.memoizedState.cachePool!==null&&(i=a.memoizedState.cachePool.pool),i!==l&&(a.flags|=2048)}return e!==t&&e&&(n.child.flags|=8192),Li(n,n.updateQueue),zt(n),null;case 4:return ia(),t===null&&mo(n.stateNode.containerInfo),zt(n),null;case 10:return In(n.type),zt(n),null;case 19:if(qt(Ht),l=n.memoizedState,l===null)return zt(n),null;if(a=(n.flags&128)!==0,i=l.rendering,i===null)if(a)Al(l,!1);else{if(Dt!==0||t!==null&&(t.flags&128)!==0)for(t=n.child;t!==null;){if(i=Ei(t),i!==null){for(n.flags|=128,Al(l,!1),t=i.updateQueue,n.updateQueue=t,Li(n,t),n.subtreeFlags=0,t=e,e=n.child;e!==null;)Cf(e,t),e=e.sibling;return Ot(Ht,Ht.current&1|2),n.child}t=t.sibling}l.tail!==null&&Un()>ji&&(n.flags|=128,a=!0,Al(l,!1),n.lanes=4194304)}else{if(!a)if(t=Ei(i),t!==null){if(n.flags|=128,a=!0,t=t.updateQueue,n.updateQueue=t,Li(n,t),Al(l,!0),l.tail===null&&l.tailMode==="hidden"&&!i.alternate&&!ft)return zt(n),null}else 2*Un()-l.renderingStartTime>ji&&e!==536870912&&(n.flags|=128,a=!0,Al(l,!1),n.lanes=4194304);l.isBackwards?(i.sibling=n.child,n.child=i):(t=l.last,t!==null?t.sibling=i:n.child=i,l.last=i)}return l.tail!==null?(n=l.tail,l.rendering=n,l.tail=n.sibling,l.renderingStartTime=Un(),n.sibling=null,t=Ht.current,Ot(Ht,a?t&1|2:t&1),n):(zt(n),null);case 22:case 23:return $n(n),nu(),a=n.memoizedState!==null,t!==null?t.memoizedState!==null!==a&&(n.flags|=8192):a&&(n.flags|=8192),a?(e&536870912)!==0&&(n.flags&128)===0&&(zt(n),n.subtreeFlags&6&&(n.flags|=8192)):zt(n),e=n.updateQueue,e!==null&&Li(n,e.retryQueue),e=null,t!==null&&t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),a=null,n.memoizedState!==null&&n.memoizedState.cachePool!==null&&(a=n.memoizedState.cachePool.pool),a!==e&&(n.flags|=2048),t!==null&&qt(Ve),null;case 24:return e=null,t!==null&&(e=t.memoizedState.cache),n.memoizedState.cache!==e&&(n.flags|=2048),In(wt),zt(n),null;case 25:return null}throw Error(c(156,n.tag))}function J0(t,n){switch(Wr(n),n.tag){case 1:return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 3:return In(wt),ia(),t=n.flags,(t&65536)!==0&&(t&128)===0?(n.flags=t&-65537|128,n):null;case 26:case 27:case 5:return Fl(n),null;case 13:if($n(n),t=n.memoizedState,t!==null&&t.dehydrated!==null){if(n.alternate===null)throw Error(c(340));rl()}return t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 19:return qt(Ht),null;case 4:return ia(),null;case 10:return In(n.type),null;case 22:case 23:return $n(n),nu(),t!==null&&qt(Ve),t=n.flags,t&65536?(n.flags=t&-65537|128,n):null;case 24:return In(wt),null;case 25:return null;default:return null}}function Nf(t,n){switch(Wr(n),n.tag){case 3:In(wt),ia();break;case 26:case 27:case 5:Fl(n);break;case 4:ia();break;case 13:$n(n);break;case 19:qt(Ht);break;case 10:In(n.type);break;case 22:case 23:$n(n),nu(),t!==null&&qt(Ve);break;case 24:In(wt)}}var $0={getCacheForType:function(t){var n=Jt(wt),e=n.data.get(t);return e===void 0&&(e=t(),n.data.set(t,e)),e}},P0=typeof WeakMap=="function"?WeakMap:Map,Tt=0,yt=null,ut=null,st=0,xt=0,sn=null,le=!1,qa=!1,$u=!1,ie=0,Dt=0,De=0,na=0,Pu=0,En=0,ka=0,_l=null,Nn=null,Wu=!1,Fu=0,ji=1/0,Xi=null,Me=null,Gi=!1,ea=null,Dl=0,Iu=0,to=null,Ml=0,no=null;function fn(){if((Tt&2)!==0&&st!==0)return st&-st;if(L.T!==null){var t=Ea;return t!==0?t:co()}return ac()}function Bf(){En===0&&(En=(st&536870912)===0||ft?Fo():536870912);var t=yn.current;return t!==null&&(t.flags|=32),En}function It(t,n,e){(t===yt&&xt===2||t.cancelPendingCommit!==null)&&(Ua(t,0),re(t,st,En,!1)),Ka(t,e),((Tt&2)===0||t!==yt)&&(t===yt&&((Tt&2)===0&&(na|=e),Dt===4&&re(t,st,En,!1)),Bn(t))}function Yf(t,n,e){if((Tt&6)!==0)throw Error(c(327));var a=!e&&(n&60)===0&&(n&t.expiredLanes)===0||Va(t,n),l=a?I0(t,n):io(t,n,!0),i=a;do{if(l===0){qa&&!a&&re(t,n,0,!1);break}else if(l===6)re(t,n,0,!le);else{if(e=t.current.alternate,i&&!W0(e)){l=io(t,n,!1),i=!1;continue}if(l===2){if(i=n,t.errorRecoveryDisabledLanes&i)var u=0;else u=t.pendingLanes&-536870913,u=u!==0?u:u&536870912?536870912:0;if(u!==0){n=u;t:{var f=t;l=_l;var m=f.current.memoizedState.isDehydrated;if(m&&(Ua(f,u).flags|=256),u=io(f,u,!1),u!==2){if($u&&!m){f.errorRecoveryDisabledLanes|=i,na|=i,l=4;break t}i=Nn,Nn=l,i!==null&&eo(i)}l=u}if(i=!1,l!==2)continue}}if(l===1){Ua(t,0),re(t,n,0,!0);break}t:{switch(a=t,l){case 0:case 1:throw Error(c(345));case 4:if((n&4194176)===n){re(a,n,En,!le);break t}break;case 2:Nn=null;break;case 3:case 5:break;default:throw Error(c(329))}if(a.finishedWork=e,a.finishedLanes=n,(n&62914560)===n&&(i=Fu+300-Un(),10<i)){if(re(a,n,En,!le),ei(a,0)!==0)break t;a.timeoutHandle=cd(Lf.bind(null,a,e,Nn,Xi,Wu,n,En,na,ka,le,2,-0,0),i);break t}Lf(a,e,Nn,Xi,Wu,n,En,na,ka,le,0,-0,0)}}break}while(!0);Bn(t)}function eo(t){Nn===null?Nn=t:Nn.push.apply(Nn,t)}function Lf(t,n,e,a,l,i,u,f,m,x,D,C,z){var A=n.subtreeFlags;if((A&8192||(A&16785408)===16785408)&&(Hl={stylesheets:null,count:0,unsuspend:km},Rf(n),n=Cm(),n!==null)){t.cancelPendingCommit=n(Kf.bind(null,t,e,a,l,u,f,m,1,C,z)),re(t,i,u,!x);return}Kf(t,e,a,l,u,f,m,D,C,z)}function W0(t){for(var n=t;;){var e=n.tag;if((e===0||e===11||e===15)&&n.flags&16384&&(e=n.updateQueue,e!==null&&(e=e.stores,e!==null)))for(var a=0;a<e.length;a++){var l=e[a],i=l.getSnapshot;l=l.value;try{if(!un(i(),l))return!1}catch{return!1}}if(e=n.child,n.subtreeFlags&16384&&e!==null)e.return=n,n=e;else{if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return!0;n=n.return}n.sibling.return=n.return,n=n.sibling}}return!0}function re(t,n,e,a){n&=~Pu,n&=~na,t.suspendedLanes|=n,t.pingedLanes&=~n,a&&(t.warmLanes|=n),a=t.expirationTimes;for(var l=n;0<l;){var i=31-rn(l),u=1<<i;a[i]=-1,l&=~u}e!==0&&tc(t,e,n)}function Qi(){return(Tt&6)===0?(Rl(0),!1):!0}function ao(){if(ut!==null){if(xt===0)var t=ut.return;else t=ut,Fn=We=null,cu(t),Sa=null,sl=0,t=ut;for(;t!==null;)Nf(t.alternate,t),t=t.return;ut=null}}function Ua(t,n){t.finishedWork=null,t.finishedLanes=0;var e=t.timeoutHandle;e!==-1&&(t.timeoutHandle=-1,pm(e)),e=t.cancelPendingCommit,e!==null&&(t.cancelPendingCommit=null,e()),ao(),yt=t,ut=e=_e(t.current,null),st=n,xt=0,sn=null,le=!1,qa=Va(t,n),$u=!1,ka=En=Pu=na=De=Dt=0,Nn=_l=null,Wu=!1,(n&8)!==0&&(n|=n&32);var a=t.entangledLanes;if(a!==0)for(t=t.entanglements,a&=n;0<a;){var l=31-rn(a),i=1<<l;n|=t[l],a&=~i}return ie=n,mi(),e}function jf(t,n){lt=null,L.H=wn,n===ol?(n=ns(),xt=3):n===Fc?(n=ns(),xt=4):xt=n===Is?8:n!==null&&typeof n=="object"&&typeof n.then=="function"?6:1,sn=n,ut===null&&(Dt=1,Ci(t,pn(n,t.current)))}function Xf(){var t=L.H;return L.H=wn,t===null?wn:t}function Gf(){var t=L.A;return L.A=$0,t}function lo(){Dt=4,le||(st&4194176)!==st&&yn.current!==null||(qa=!0),(De&134217727)===0&&(na&134217727)===0||yt===null||re(yt,st,En,!1)}function io(t,n,e){var a=Tt;Tt|=2;var l=Xf(),i=Gf();(yt!==t||st!==n)&&(Xi=null,Ua(t,n)),n=!1;var u=Dt;t:do try{if(xt!==0&&ut!==null){var f=ut,m=sn;switch(xt){case 8:ao(),u=6;break t;case 3:case 2:case 6:yn.current===null&&(n=!0);var x=xt;if(xt=0,sn=null,Ca(t,f,m,x),e&&qa){u=0;break t}break;default:x=xt,xt=0,sn=null,Ca(t,f,m,x)}}F0(),u=Dt;break}catch(D){jf(t,D)}while(!0);return n&&t.shellSuspendCounter++,Fn=We=null,Tt=a,L.H=l,L.A=i,ut===null&&(yt=null,st=0,mi()),u}function F0(){for(;ut!==null;)Qf(ut)}function I0(t,n){var e=Tt;Tt|=2;var a=Xf(),l=Gf();yt!==t||st!==n?(Xi=null,ji=Un()+500,Ua(t,n)):qa=Va(t,n);t:do try{if(xt!==0&&ut!==null){n=ut;var i=sn;n:switch(xt){case 1:xt=0,sn=null,Ca(t,n,i,1);break;case 2:if(Ic(i)){xt=0,sn=null,Zf(n);break}n=function(){xt===2&&yt===t&&(xt=7),Bn(t)},i.then(n,n);break t;case 3:xt=7;break t;case 4:xt=5;break t;case 7:Ic(i)?(xt=0,sn=null,Zf(n)):(xt=0,sn=null,Ca(t,n,i,7));break;case 5:var u=null;switch(ut.tag){case 26:u=ut.memoizedState;case 5:case 27:var f=ut;if(!u||xd(u)){xt=0,sn=null;var m=f.sibling;if(m!==null)ut=m;else{var x=f.return;x!==null?(ut=x,Zi(x)):ut=null}break n}}xt=0,sn=null,Ca(t,n,i,5);break;case 6:xt=0,sn=null,Ca(t,n,i,6);break;case 8:ao(),Dt=6;break t;default:throw Error(c(462))}}tm();break}catch(D){jf(t,D)}while(!0);return Fn=We=null,L.H=a,L.A=l,Tt=e,ut!==null?0:(yt=null,st=0,mi(),Dt)}function tm(){for(;ut!==null&&!Oh();)Qf(ut)}function Qf(t){var n=df(t.alternate,t,ie);t.memoizedProps=t.pendingProps,n===null?Zi(t):ut=n}function Zf(t){var n=t,e=n.alternate;switch(n.tag){case 15:case 0:n=rf(e,n,n.pendingProps,n.type,void 0,st);break;case 11:n=rf(e,n,n.pendingProps,n.type.render,n.ref,st);break;case 5:cu(n);default:Nf(e,n),n=ut=Cf(n,ie),n=df(e,n,ie)}t.memoizedProps=t.pendingProps,n===null?Zi(t):ut=n}function Ca(t,n,e,a){Fn=We=null,cu(n),Sa=null,sl=0;var l=n.return;try{if(X0(t,l,n,e,st)){Dt=1,Ci(t,pn(e,t.current)),ut=null;return}}catch(i){if(l!==null)throw ut=l,i;Dt=1,Ci(t,pn(e,t.current)),ut=null;return}n.flags&32768?(ft||a===1?t=!0:qa||(st&536870912)!==0?t=!1:(le=t=!0,(a===2||a===3||a===6)&&(a=yn.current,a!==null&&a.tag===13&&(a.flags|=16384))),Vf(n,t)):Zi(n)}function Zi(t){var n=t;do{if((n.flags&32768)!==0){Vf(n,le);return}t=n.return;var e=K0(n.alternate,n,ie);if(e!==null){ut=e;return}if(n=n.sibling,n!==null){ut=n;return}ut=n=t}while(n!==null);Dt===0&&(Dt=5)}function Vf(t,n){do{var e=J0(t.alternate,t);if(e!==null){e.flags&=32767,ut=e;return}if(e=t.return,e!==null&&(e.flags|=32768,e.subtreeFlags=0,e.deletions=null),!n&&(t=t.sibling,t!==null)){ut=t;return}ut=t=e}while(t!==null);Dt=6,ut=null}function Kf(t,n,e,a,l,i,u,f,m,x){var D=L.T,C=X.p;try{X.p=2,L.T=null,nm(t,n,e,a,C,l,i,u,f,m,x)}finally{L.T=D,X.p=C}}function nm(t,n,e,a,l,i,u,f){do Ha();while(ea!==null);if((Tt&6)!==0)throw Error(c(327));var m=t.finishedWork;if(a=t.finishedLanes,m===null)return null;if(t.finishedWork=null,t.finishedLanes=0,m===t.current)throw Error(c(177));t.callbackNode=null,t.callbackPriority=0,t.cancelPendingCommit=null;var x=m.lanes|m.childLanes;if(x|=Jr,Uh(t,a,x,i,u,f),t===yt&&(ut=yt=null,st=0),(m.subtreeFlags&10256)===0&&(m.flags&10256)===0||Gi||(Gi=!0,Iu=x,to=e,im(Il,function(){return Ha(),null})),e=(m.flags&15990)!==0,(m.subtreeFlags&15990)!==0||e?(e=L.T,L.T=null,i=X.p,X.p=2,u=Tt,Tt|=4,Q0(t,m),_f(m,t),T0(go,t.containerInfo),ar=!!vo,go=vo=null,t.current=m,Ef(t,m.alternate,m),Eh(),Tt=u,X.p=i,L.T=e):t.current=m,Gi?(Gi=!1,ea=t,Dl=a):Jf(t,x),x=t.pendingLanes,x===0&&(Me=null),Dh(m.stateNode),Bn(t),n!==null)for(l=t.onRecoverableError,m=0;m<n.length;m++)x=n[m],l(x.value,{componentStack:x.stack});return(Dl&3)!==0&&Ha(),x=t.pendingLanes,(a&4194218)!==0&&(x&42)!==0?t===no?Ml++:(Ml=0,no=t):Ml=0,Rl(0),null}function Jf(t,n){(t.pooledCacheLanes&=n)===0&&(n=t.pooledCache,n!=null&&(t.pooledCache=null,dl(n)))}function Ha(){if(ea!==null){var t=ea,n=Iu;Iu=0;var e=ec(Dl),a=L.T,l=X.p;try{if(X.p=32>e?32:e,L.T=null,ea===null)var i=!1;else{e=to,to=null;var u=ea,f=Dl;if(ea=null,Dl=0,(Tt&6)!==0)throw Error(c(331));var m=Tt;if(Tt|=4,kf(u.current),Mf(u,u.current,f,e),Tt=m,Rl(0,!1),ln&&typeof ln.onPostCommitFiberRoot=="function")try{ln.onPostCommitFiberRoot(Za,u)}catch{}i=!0}return i}finally{X.p=l,L.T=a,Jf(t,n)}}return!1}function $f(t,n,e){n=pn(e,n),n=Eu(t.stateNode,n,2),t=Ee(t,n,2),t!==null&&(Ka(t,2),Bn(t))}function vt(t,n,e){if(t.tag===3)$f(t,t,e);else for(;n!==null;){if(n.tag===3){$f(n,t,e);break}else if(n.tag===1){var a=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof a.componentDidCatch=="function"&&(Me===null||!Me.has(a))){t=pn(e,t),e=Ws(2),a=Ee(n,e,2),a!==null&&(Fs(e,a,n,t),Ka(a,2),Bn(a));break}}n=n.return}}function ro(t,n,e){var a=t.pingCache;if(a===null){a=t.pingCache=new P0;var l=new Set;a.set(n,l)}else l=a.get(n),l===void 0&&(l=new Set,a.set(n,l));l.has(e)||($u=!0,l.add(e),t=em.bind(null,t,n,e),n.then(t,t))}function em(t,n,e){var a=t.pingCache;a!==null&&a.delete(n),t.pingedLanes|=t.suspendedLanes&e,t.warmLanes&=~e,yt===t&&(st&e)===e&&(Dt===4||Dt===3&&(st&62914560)===st&&300>Un()-Fu?(Tt&2)===0&&Ua(t,0):Pu|=e,ka===st&&(ka=0)),Bn(t)}function Pf(t,n){n===0&&(n=Io()),t=be(t,n),t!==null&&(Ka(t,n),Bn(t))}function am(t){var n=t.memoizedState,e=0;n!==null&&(e=n.retryLane),Pf(t,e)}function lm(t,n){var e=0;switch(t.tag){case 13:var a=t.stateNode,l=t.memoizedState;l!==null&&(e=l.retryLane);break;case 19:a=t.stateNode;break;case 22:a=t.stateNode._retryCache;break;default:throw Error(c(314))}a!==null&&a.delete(n),Pf(t,e)}function im(t,n){return zr(t,n)}var Vi=null,wa=null,uo=!1,Ki=!1,oo=!1,aa=0;function Bn(t){t!==wa&&t.next===null&&(wa===null?Vi=wa=t:wa=wa.next=t),Ki=!0,uo||(uo=!0,um(rm))}function Rl(t,n){if(!oo&&Ki){oo=!0;do for(var e=!1,a=Vi;a!==null;){if(t!==0){var l=a.pendingLanes;if(l===0)var i=0;else{var u=a.suspendedLanes,f=a.pingedLanes;i=(1<<31-rn(42|t)+1)-1,i&=l&~(u&~f),i=i&201326677?i&201326677|1:i?i|2:0}i!==0&&(e=!0,If(a,i))}else i=st,i=ei(a,a===yt?i:0),(i&3)===0||Va(a,i)||(e=!0,If(a,i));a=a.next}while(e);oo=!1}}function rm(){Ki=uo=!1;var t=0;aa!==0&&(bm()&&(t=aa),aa=0);for(var n=Un(),e=null,a=Vi;a!==null;){var l=a.next,i=Wf(a,n);i===0?(a.next=null,e===null?Vi=l:e.next=l,l===null&&(wa=e)):(e=a,(t!==0||(i&3)!==0)&&(Ki=!0)),a=l}Rl(t)}function Wf(t,n){for(var e=t.suspendedLanes,a=t.pingedLanes,l=t.expirationTimes,i=t.pendingLanes&-62914561;0<i;){var u=31-rn(i),f=1<<u,m=l[u];m===-1?((f&e)===0||(f&a)!==0)&&(l[u]=kh(f,n)):m<=n&&(t.expiredLanes|=f),i&=~f}if(n=yt,e=st,e=ei(t,t===n?e:0),a=t.callbackNode,e===0||t===n&&xt===2||t.cancelPendingCommit!==null)return a!==null&&a!==null&&Tr(a),t.callbackNode=null,t.callbackPriority=0;if((e&3)===0||Va(t,e)){if(n=e&-e,n===t.callbackPriority)return n;switch(a!==null&&Tr(a),ec(e)){case 2:case 8:e=Po;break;case 32:e=Il;break;case 268435456:e=Wo;break;default:e=Il}return a=Ff.bind(null,t),e=zr(e,a),t.callbackPriority=n,t.callbackNode=e,n}return a!==null&&a!==null&&Tr(a),t.callbackPriority=2,t.callbackNode=null,2}function Ff(t,n){var e=t.callbackNode;if(Ha()&&t.callbackNode!==e)return null;var a=st;return a=ei(t,t===yt?a:0),a===0?null:(Yf(t,a,n),Wf(t,Un()),t.callbackNode!=null&&t.callbackNode===e?Ff.bind(null,t):null)}function If(t,n){if(Ha())return null;Yf(t,n,!0)}function um(t){vm(function(){(Tt&6)!==0?zr($o,t):t()})}function co(){return aa===0&&(aa=Fo()),aa}function td(t){return t==null||typeof t=="symbol"||typeof t=="boolean"?null:typeof t=="function"?t:ui(""+t)}function nd(t,n){var e=n.ownerDocument.createElement("input");return e.name=n.name,e.value=n.value,t.id&&e.setAttribute("form",t.id),n.parentNode.insertBefore(e,n),t=new FormData(t),e.parentNode.removeChild(e),t}function om(t,n,e,a,l){if(n==="submit"&&e&&e.stateNode===l){var i=td((l[nn]||null).action),u=a.submitter;u&&(n=(n=u[nn]||null)?td(n.formAction):u.getAttribute("formAction"),n!==null&&(i=n,u=null));var f=new fi("action","action",null,a,l);t.push({event:f,listeners:[{instance:null,listener:function(){if(a.defaultPrevented){if(aa!==0){var m=u?nd(l,u):new FormData(l);gu(e,{pending:!0,data:m,method:l.method,action:i},null,m)}}else typeof i=="function"&&(f.preventDefault(),m=u?nd(l,u):new FormData(l),gu(e,{pending:!0,data:m,method:l.method,action:i},i,m))},currentTarget:l}]})}}for(var so=0;so<Vc.length;so++){var fo=Vc[so],cm=fo.toLowerCase(),sm=fo[0].toUpperCase()+fo.slice(1);Tn(cm,"on"+sm)}Tn(jc,"onAnimationEnd"),Tn(Xc,"onAnimationIteration"),Tn(Gc,"onAnimationStart"),Tn("dblclick","onDoubleClick"),Tn("focusin","onFocus"),Tn("focusout","onBlur"),Tn(_0,"onTransitionRun"),Tn(D0,"onTransitionStart"),Tn(M0,"onTransitionCancel"),Tn(Qc,"onTransitionEnd"),ca("onMouseEnter",["mouseout","mouseover"]),ca("onMouseLeave",["mouseout","mouseover"]),ca("onPointerEnter",["pointerout","pointerover"]),ca("onPointerLeave",["pointerout","pointerover"]),Be("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Be("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Be("onBeforeInput",["compositionend","keypress","textInput","paste"]),Be("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Be("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ql="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),fm=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(ql));function ed(t,n){n=(n&4)!==0;for(var e=0;e<t.length;e++){var a=t[e],l=a.event;a=a.listeners;t:{var i=void 0;if(n)for(var u=a.length-1;0<=u;u--){var f=a[u],m=f.instance,x=f.currentTarget;if(f=f.listener,m!==i&&l.isPropagationStopped())break t;i=f,l.currentTarget=x;try{i(l)}catch(D){Ui(D)}l.currentTarget=null,i=m}else for(u=0;u<a.length;u++){if(f=a[u],m=f.instance,x=f.currentTarget,f=f.listener,m!==i&&l.isPropagationStopped())break t;i=f,l.currentTarget=x;try{i(l)}catch(D){Ui(D)}l.currentTarget=null,i=m}}}}function ot(t,n){var e=n[_r];e===void 0&&(e=n[_r]=new Set);var a=t+"__bubble";e.has(a)||(ad(n,t,2,!1),e.add(a))}function ho(t,n,e){var a=0;n&&(a|=4),ad(e,t,a,n)}var Ji="_reactListening"+Math.random().toString(36).slice(2);function mo(t){if(!t[Ji]){t[Ji]=!0,ic.forEach(function(e){e!=="selectionchange"&&(fm.has(e)||ho(e,!1,t),ho(e,!0,t))});var n=t.nodeType===9?t:t.ownerDocument;n===null||n[Ji]||(n[Ji]=!0,ho("selectionchange",!1,n))}}function ad(t,n,e,a){switch(Ad(n)){case 2:var l=Nm;break;case 8:l=Bm;break;default:l=_o}e=l.bind(null,n,e,t),l=void 0,!Hr||n!=="touchstart"&&n!=="touchmove"&&n!=="wheel"||(l=!0),a?l!==void 0?t.addEventListener(n,e,{capture:!0,passive:l}):t.addEventListener(n,e,!0):l!==void 0?t.addEventListener(n,e,{passive:l}):t.addEventListener(n,e,!1)}function bo(t,n,e,a,l){var i=a;if((n&1)===0&&(n&2)===0&&a!==null)t:for(;;){if(a===null)return;var u=a.tag;if(u===3||u===4){var f=a.stateNode.containerInfo;if(f===l||f.nodeType===8&&f.parentNode===l)break;if(u===4)for(u=a.return;u!==null;){var m=u.tag;if((m===3||m===4)&&(m=u.stateNode.containerInfo,m===l||m.nodeType===8&&m.parentNode===l))return;u=u.return}for(;f!==null;){if(u=Ne(f),u===null)return;if(m=u.tag,m===5||m===6||m===26||m===27){a=i=u;continue t}f=f.parentNode}}a=a.return}vc(function(){var x=i,D=Ur(e),C=[];t:{var z=Zc.get(t);if(z!==void 0){var A=fi,Q=t;switch(t){case"keypress":if(ci(e)===0)break t;case"keydown":case"keyup":A=l0;break;case"focusin":Q="focus",A=Yr;break;case"focusout":Q="blur",A=Yr;break;case"beforeblur":case"afterblur":A=Yr;break;case"click":if(e.button===2)break t;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":A=xc;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":A=Vh;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":A=u0;break;case jc:case Xc:case Gc:A=$h;break;case Qc:A=c0;break;case"scroll":case"scrollend":A=Qh;break;case"wheel":A=f0;break;case"copy":case"cut":case"paste":A=Wh;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":A=Oc;break;case"toggle":case"beforetoggle":A=h0}var I=(n&4)!==0,Mt=!I&&(t==="scroll"||t==="scrollend"),S=I?z!==null?z+"Capture":null:z;I=[];for(var g=x,E;g!==null;){var k=g;if(E=k.stateNode,k=k.tag,k!==5&&k!==26&&k!==27||E===null||S===null||(k=Pa(g,S),k!=null&&I.push(kl(g,k,E))),Mt)break;g=g.return}0<I.length&&(z=new A(z,Q,null,e,D),C.push({event:z,listeners:I}))}}if((n&7)===0){t:{if(z=t==="mouseover"||t==="pointerover",A=t==="mouseout"||t==="pointerout",z&&e!==kr&&(Q=e.relatedTarget||e.fromElement)&&(Ne(Q)||Q[ra]))break t;if((A||z)&&(z=D.window===D?D:(z=D.ownerDocument)?z.defaultView||z.parentWindow:window,A?(Q=e.relatedTarget||e.toElement,A=x,Q=Q?Ne(Q):null,Q!==null&&(Mt=F(Q),I=Q.tag,Q!==Mt||I!==5&&I!==27&&I!==6)&&(Q=null)):(A=null,Q=x),A!==Q)){if(I=xc,k="onMouseLeave",S="onMouseEnter",g="mouse",(t==="pointerout"||t==="pointerover")&&(I=Oc,k="onPointerLeave",S="onPointerEnter",g="pointer"),Mt=A==null?z:$a(A),E=Q==null?z:$a(Q),z=new I(k,g+"leave",A,e,D),z.target=Mt,z.relatedTarget=E,k=null,Ne(D)===x&&(I=new I(S,g+"enter",Q,e,D),I.target=E,I.relatedTarget=Mt,k=I),Mt=k,A&&Q)n:{for(I=A,S=Q,g=0,E=I;E;E=Na(E))g++;for(E=0,k=S;k;k=Na(k))E++;for(;0<g-E;)I=Na(I),g--;for(;0<E-g;)S=Na(S),E--;for(;g--;){if(I===S||S!==null&&I===S.alternate)break n;I=Na(I),S=Na(S)}I=null}else I=null;A!==null&&ld(C,z,A,I,!1),Q!==null&&Mt!==null&&ld(C,Mt,Q,I,!0)}}t:{if(z=x?$a(x):window,A=z.nodeName&&z.nodeName.toLowerCase(),A==="select"||A==="input"&&z.type==="file")var G=Rc;else if(Dc(z))if(qc)G=E0;else{G=S0;var it=x0}else A=z.nodeName,!A||A.toLowerCase()!=="input"||z.type!=="checkbox"&&z.type!=="radio"?x&&qr(x.elementType)&&(G=Rc):G=O0;if(G&&(G=G(t,x))){Mc(C,G,e,D);break t}it&&it(t,z,x),t==="focusout"&&x&&z.type==="number"&&x.memoizedProps.value!=null&&Rr(z,"number",z.value)}switch(it=x?$a(x):window,t){case"focusin":(Dc(it)||it.contentEditable==="true")&&(ba=it,Zr=x,ll=null);break;case"focusout":ll=Zr=ba=null;break;case"mousedown":Vr=!0;break;case"contextmenu":case"mouseup":case"dragend":Vr=!1,Yc(C,e,D);break;case"selectionchange":if(A0)break;case"keydown":case"keyup":Yc(C,e,D)}var V;if(jr)t:{switch(t){case"compositionstart":var P="onCompositionStart";break t;case"compositionend":P="onCompositionEnd";break t;case"compositionupdate":P="onCompositionUpdate";break t}P=void 0}else ma?Ac(t,e)&&(P="onCompositionEnd"):t==="keydown"&&e.keyCode===229&&(P="onCompositionStart");P&&(Ec&&e.locale!=="ko"&&(ma||P!=="onCompositionStart"?P==="onCompositionEnd"&&ma&&(V=gc()):(me=D,wr="value"in me?me.value:me.textContent,ma=!0)),it=$i(x,P),0<it.length&&(P=new Sc(P,t,null,e,D),C.push({event:P,listeners:it}),V?P.data=V:(V=_c(e),V!==null&&(P.data=V)))),(V=b0?p0(t,e):v0(t,e))&&(P=$i(x,"onBeforeInput"),0<P.length&&(it=new Sc("onBeforeInput","beforeinput",null,e,D),C.push({event:it,listeners:P}),it.data=V)),om(C,t,x,e,D)}ed(C,n)})}function kl(t,n,e){return{instance:t,listener:n,currentTarget:e}}function $i(t,n){for(var e=n+"Capture",a=[];t!==null;){var l=t,i=l.stateNode;l=l.tag,l!==5&&l!==26&&l!==27||i===null||(l=Pa(t,e),l!=null&&a.unshift(kl(t,l,i)),l=Pa(t,n),l!=null&&a.push(kl(t,l,i))),t=t.return}return a}function Na(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5&&t.tag!==27);return t||null}function ld(t,n,e,a,l){for(var i=n._reactName,u=[];e!==null&&e!==a;){var f=e,m=f.alternate,x=f.stateNode;if(f=f.tag,m!==null&&m===a)break;f!==5&&f!==26&&f!==27||x===null||(m=x,l?(x=Pa(e,i),x!=null&&u.unshift(kl(e,x,m))):l||(x=Pa(e,i),x!=null&&u.push(kl(e,x,m)))),e=e.return}u.length!==0&&t.push({event:n,listeners:u})}var dm=/\r\n?/g,hm=/\u0000|\uFFFD/g;function id(t){return(typeof t=="string"?t:""+t).replace(dm,`
`).replace(hm,"")}function rd(t,n){return n=id(n),id(t)===n}function Pi(){}function pt(t,n,e,a,l,i){switch(e){case"children":typeof a=="string"?n==="body"||n==="textarea"&&a===""||fa(t,a):(typeof a=="number"||typeof a=="bigint")&&n!=="body"&&fa(t,""+a);break;case"className":li(t,"class",a);break;case"tabIndex":li(t,"tabindex",a);break;case"dir":case"role":case"viewBox":case"width":case"height":li(t,e,a);break;case"style":bc(t,a,i);break;case"data":if(n!=="object"){li(t,"data",a);break}case"src":case"href":if(a===""&&(n!=="a"||e!=="href")){t.removeAttribute(e);break}if(a==null||typeof a=="function"||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=ui(""+a),t.setAttribute(e,a);break;case"action":case"formAction":if(typeof a=="function"){t.setAttribute(e,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof i=="function"&&(e==="formAction"?(n!=="input"&&pt(t,n,"name",l.name,l,null),pt(t,n,"formEncType",l.formEncType,l,null),pt(t,n,"formMethod",l.formMethod,l,null),pt(t,n,"formTarget",l.formTarget,l,null)):(pt(t,n,"encType",l.encType,l,null),pt(t,n,"method",l.method,l,null),pt(t,n,"target",l.target,l,null)));if(a==null||typeof a=="symbol"||typeof a=="boolean"){t.removeAttribute(e);break}a=ui(""+a),t.setAttribute(e,a);break;case"onClick":a!=null&&(t.onclick=Pi);break;case"onScroll":a!=null&&ot("scroll",t);break;case"onScrollEnd":a!=null&&ot("scrollend",t);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(e=a.__html,e!=null){if(l.children!=null)throw Error(c(60));t.innerHTML=e}}break;case"multiple":t.multiple=a&&typeof a!="function"&&typeof a!="symbol";break;case"muted":t.muted=a&&typeof a!="function"&&typeof a!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(a==null||typeof a=="function"||typeof a=="boolean"||typeof a=="symbol"){t.removeAttribute("xlink:href");break}e=ui(""+a),t.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",e);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""+a):t.removeAttribute(e);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":a&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,""):t.removeAttribute(e);break;case"capture":case"download":a===!0?t.setAttribute(e,""):a!==!1&&a!=null&&typeof a!="function"&&typeof a!="symbol"?t.setAttribute(e,a):t.removeAttribute(e);break;case"cols":case"rows":case"size":case"span":a!=null&&typeof a!="function"&&typeof a!="symbol"&&!isNaN(a)&&1<=a?t.setAttribute(e,a):t.removeAttribute(e);break;case"rowSpan":case"start":a==null||typeof a=="function"||typeof a=="symbol"||isNaN(a)?t.removeAttribute(e):t.setAttribute(e,a);break;case"popover":ot("beforetoggle",t),ot("toggle",t),ai(t,"popover",a);break;case"xlinkActuate":Vn(t,"http://www.w3.org/1999/xlink","xlink:actuate",a);break;case"xlinkArcrole":Vn(t,"http://www.w3.org/1999/xlink","xlink:arcrole",a);break;case"xlinkRole":Vn(t,"http://www.w3.org/1999/xlink","xlink:role",a);break;case"xlinkShow":Vn(t,"http://www.w3.org/1999/xlink","xlink:show",a);break;case"xlinkTitle":Vn(t,"http://www.w3.org/1999/xlink","xlink:title",a);break;case"xlinkType":Vn(t,"http://www.w3.org/1999/xlink","xlink:type",a);break;case"xmlBase":Vn(t,"http://www.w3.org/XML/1998/namespace","xml:base",a);break;case"xmlLang":Vn(t,"http://www.w3.org/XML/1998/namespace","xml:lang",a);break;case"xmlSpace":Vn(t,"http://www.w3.org/XML/1998/namespace","xml:space",a);break;case"is":ai(t,"is",a);break;case"innerText":case"textContent":break;default:(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(e=Xh.get(e)||e,ai(t,e,a))}}function po(t,n,e,a,l,i){switch(e){case"style":bc(t,a,i);break;case"dangerouslySetInnerHTML":if(a!=null){if(typeof a!="object"||!("__html"in a))throw Error(c(61));if(e=a.__html,e!=null){if(l.children!=null)throw Error(c(60));t.innerHTML=e}}break;case"children":typeof a=="string"?fa(t,a):(typeof a=="number"||typeof a=="bigint")&&fa(t,""+a);break;case"onScroll":a!=null&&ot("scroll",t);break;case"onScrollEnd":a!=null&&ot("scrollend",t);break;case"onClick":a!=null&&(t.onclick=Pi);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!rc.hasOwnProperty(e))t:{if(e[0]==="o"&&e[1]==="n"&&(l=e.endsWith("Capture"),n=e.slice(2,l?e.length-7:void 0),i=t[nn]||null,i=i!=null?i[e]:null,typeof i=="function"&&t.removeEventListener(n,i,l),typeof a=="function")){typeof i!="function"&&i!==null&&(e in t?t[e]=null:t.hasAttribute(e)&&t.removeAttribute(e)),t.addEventListener(n,a,l);break t}e in t?t[e]=a:a===!0?t.setAttribute(e,""):ai(t,e,a)}}}function Vt(t,n,e){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":ot("error",t),ot("load",t);var a=!1,l=!1,i;for(i in e)if(e.hasOwnProperty(i)){var u=e[i];if(u!=null)switch(i){case"src":a=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:pt(t,n,i,u,e,null)}}l&&pt(t,n,"srcSet",e.srcSet,e,null),a&&pt(t,n,"src",e.src,e,null);return;case"input":ot("invalid",t);var f=i=u=l=null,m=null,x=null;for(a in e)if(e.hasOwnProperty(a)){var D=e[a];if(D!=null)switch(a){case"name":l=D;break;case"type":u=D;break;case"checked":m=D;break;case"defaultChecked":x=D;break;case"value":i=D;break;case"defaultValue":f=D;break;case"children":case"dangerouslySetInnerHTML":if(D!=null)throw Error(c(137,n));break;default:pt(t,n,a,D,e,null)}}fc(t,i,f,m,x,u,l,!1),ii(t);return;case"select":ot("invalid",t),a=u=i=null;for(l in e)if(e.hasOwnProperty(l)&&(f=e[l],f!=null))switch(l){case"value":i=f;break;case"defaultValue":u=f;break;case"multiple":a=f;default:pt(t,n,l,f,e,null)}n=i,e=u,t.multiple=!!a,n!=null?sa(t,!!a,n,!1):e!=null&&sa(t,!!a,e,!0);return;case"textarea":ot("invalid",t),i=l=a=null;for(u in e)if(e.hasOwnProperty(u)&&(f=e[u],f!=null))switch(u){case"value":a=f;break;case"defaultValue":l=f;break;case"children":i=f;break;case"dangerouslySetInnerHTML":if(f!=null)throw Error(c(91));break;default:pt(t,n,u,f,e,null)}hc(t,a,l,i),ii(t);return;case"option":for(m in e)if(e.hasOwnProperty(m)&&(a=e[m],a!=null))switch(m){case"selected":t.selected=a&&typeof a!="function"&&typeof a!="symbol";break;default:pt(t,n,m,a,e,null)}return;case"dialog":ot("cancel",t),ot("close",t);break;case"iframe":case"object":ot("load",t);break;case"video":case"audio":for(a=0;a<ql.length;a++)ot(ql[a],t);break;case"image":ot("error",t),ot("load",t);break;case"details":ot("toggle",t);break;case"embed":case"source":case"link":ot("error",t),ot("load",t);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(x in e)if(e.hasOwnProperty(x)&&(a=e[x],a!=null))switch(x){case"children":case"dangerouslySetInnerHTML":throw Error(c(137,n));default:pt(t,n,x,a,e,null)}return;default:if(qr(n)){for(D in e)e.hasOwnProperty(D)&&(a=e[D],a!==void 0&&po(t,n,D,a,e,void 0));return}}for(f in e)e.hasOwnProperty(f)&&(a=e[f],a!=null&&pt(t,n,f,a,e,null))}function mm(t,n,e,a){switch(n){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,i=null,u=null,f=null,m=null,x=null,D=null;for(A in e){var C=e[A];if(e.hasOwnProperty(A)&&C!=null)switch(A){case"checked":break;case"value":break;case"defaultValue":m=C;default:a.hasOwnProperty(A)||pt(t,n,A,null,a,C)}}for(var z in a){var A=a[z];if(C=e[z],a.hasOwnProperty(z)&&(A!=null||C!=null))switch(z){case"type":i=A;break;case"name":l=A;break;case"checked":x=A;break;case"defaultChecked":D=A;break;case"value":u=A;break;case"defaultValue":f=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(c(137,n));break;default:A!==C&&pt(t,n,z,A,a,C)}}Mr(t,u,f,m,x,D,i,l);return;case"select":A=u=f=z=null;for(i in e)if(m=e[i],e.hasOwnProperty(i)&&m!=null)switch(i){case"value":break;case"multiple":A=m;default:a.hasOwnProperty(i)||pt(t,n,i,null,a,m)}for(l in a)if(i=a[l],m=e[l],a.hasOwnProperty(l)&&(i!=null||m!=null))switch(l){case"value":z=i;break;case"defaultValue":f=i;break;case"multiple":u=i;default:i!==m&&pt(t,n,l,i,a,m)}n=f,e=u,a=A,z!=null?sa(t,!!e,z,!1):!!a!=!!e&&(n!=null?sa(t,!!e,n,!0):sa(t,!!e,e?[]:"",!1));return;case"textarea":A=z=null;for(f in e)if(l=e[f],e.hasOwnProperty(f)&&l!=null&&!a.hasOwnProperty(f))switch(f){case"value":break;case"children":break;default:pt(t,n,f,null,a,l)}for(u in a)if(l=a[u],i=e[u],a.hasOwnProperty(u)&&(l!=null||i!=null))switch(u){case"value":z=l;break;case"defaultValue":A=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(c(91));break;default:l!==i&&pt(t,n,u,l,a,i)}dc(t,z,A);return;case"option":for(var Q in e)if(z=e[Q],e.hasOwnProperty(Q)&&z!=null&&!a.hasOwnProperty(Q))switch(Q){case"selected":t.selected=!1;break;default:pt(t,n,Q,null,a,z)}for(m in a)if(z=a[m],A=e[m],a.hasOwnProperty(m)&&z!==A&&(z!=null||A!=null))switch(m){case"selected":t.selected=z&&typeof z!="function"&&typeof z!="symbol";break;default:pt(t,n,m,z,a,A)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var I in e)z=e[I],e.hasOwnProperty(I)&&z!=null&&!a.hasOwnProperty(I)&&pt(t,n,I,null,a,z);for(x in a)if(z=a[x],A=e[x],a.hasOwnProperty(x)&&z!==A&&(z!=null||A!=null))switch(x){case"children":case"dangerouslySetInnerHTML":if(z!=null)throw Error(c(137,n));break;default:pt(t,n,x,z,a,A)}return;default:if(qr(n)){for(var Mt in e)z=e[Mt],e.hasOwnProperty(Mt)&&z!==void 0&&!a.hasOwnProperty(Mt)&&po(t,n,Mt,void 0,a,z);for(D in a)z=a[D],A=e[D],!a.hasOwnProperty(D)||z===A||z===void 0&&A===void 0||po(t,n,D,z,a,A);return}}for(var S in e)z=e[S],e.hasOwnProperty(S)&&z!=null&&!a.hasOwnProperty(S)&&pt(t,n,S,null,a,z);for(C in a)z=a[C],A=e[C],!a.hasOwnProperty(C)||z===A||z==null&&A==null||pt(t,n,C,z,a,A)}var vo=null,go=null;function Wi(t){return t.nodeType===9?t:t.ownerDocument}function ud(t){switch(t){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function od(t,n){if(t===0)switch(n){case"svg":return 1;case"math":return 2;default:return 0}return t===1&&n==="foreignObject"?0:t}function yo(t,n){return t==="textarea"||t==="noscript"||typeof n.children=="string"||typeof n.children=="number"||typeof n.children=="bigint"||typeof n.dangerouslySetInnerHTML=="object"&&n.dangerouslySetInnerHTML!==null&&n.dangerouslySetInnerHTML.__html!=null}var xo=null;function bm(){var t=window.event;return t&&t.type==="popstate"?t===xo?!1:(xo=t,!0):(xo=null,!1)}var cd=typeof setTimeout=="function"?setTimeout:void 0,pm=typeof clearTimeout=="function"?clearTimeout:void 0,sd=typeof Promise=="function"?Promise:void 0,vm=typeof queueMicrotask=="function"?queueMicrotask:typeof sd<"u"?function(t){return sd.resolve(null).then(t).catch(gm)}:cd;function gm(t){setTimeout(function(){throw t})}function So(t,n){var e=n,a=0;do{var l=e.nextSibling;if(t.removeChild(e),l&&l.nodeType===8)if(e=l.data,e==="/$"){if(a===0){t.removeChild(l),Ll(n);return}a--}else e!=="$"&&e!=="$?"&&e!=="$!"||a++;e=l}while(e);Ll(n)}function Oo(t){var n=t.firstChild;for(n&&n.nodeType===10&&(n=n.nextSibling);n;){var e=n;switch(n=n.nextSibling,e.nodeName){case"HTML":case"HEAD":case"BODY":Oo(e),Dr(e);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(e.rel.toLowerCase()==="stylesheet")continue}t.removeChild(e)}}function ym(t,n,e,a){for(;t.nodeType===1;){var l=e;if(t.nodeName.toLowerCase()!==n.toLowerCase()){if(!a&&(t.nodeName!=="INPUT"||t.type!=="hidden"))break}else if(a){if(!t[Ja])switch(n){case"meta":if(!t.hasAttribute("itemprop"))break;return t;case"link":if(i=t.getAttribute("rel"),i==="stylesheet"&&t.hasAttribute("data-precedence"))break;if(i!==l.rel||t.getAttribute("href")!==(l.href==null?null:l.href)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||t.getAttribute("title")!==(l.title==null?null:l.title))break;return t;case"style":if(t.hasAttribute("data-precedence"))break;return t;case"script":if(i=t.getAttribute("src"),(i!==(l.src==null?null:l.src)||t.getAttribute("type")!==(l.type==null?null:l.type)||t.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&i&&t.hasAttribute("async")&&!t.hasAttribute("itemprop"))break;return t;default:return t}}else if(n==="input"&&t.type==="hidden"){var i=l.name==null?null:""+l.name;if(l.type==="hidden"&&t.getAttribute("name")===i)return t}else return t;if(t=Dn(t.nextSibling),t===null)break}return null}function xm(t,n,e){if(n==="")return null;for(;t.nodeType!==3;)if((t.nodeType!==1||t.nodeName!=="INPUT"||t.type!=="hidden")&&!e||(t=Dn(t.nextSibling),t===null))return null;return t}function Dn(t){for(;t!=null;t=t.nextSibling){var n=t.nodeType;if(n===1||n===3)break;if(n===8){if(n=t.data,n==="$"||n==="$!"||n==="$?"||n==="F!"||n==="F")break;if(n==="/$")return null}}return t}function fd(t){t=t.previousSibling;for(var n=0;t;){if(t.nodeType===8){var e=t.data;if(e==="$"||e==="$!"||e==="$?"){if(n===0)return t;n--}else e==="/$"&&n++}t=t.previousSibling}return null}function dd(t,n,e){switch(n=Wi(e),t){case"html":if(t=n.documentElement,!t)throw Error(c(452));return t;case"head":if(t=n.head,!t)throw Error(c(453));return t;case"body":if(t=n.body,!t)throw Error(c(454));return t;default:throw Error(c(451))}}var zn=new Map,hd=new Set;function Fi(t){return typeof t.getRootNode=="function"?t.getRootNode():t.ownerDocument}var ue=X.d;X.d={f:Sm,r:Om,D:Em,C:zm,L:Tm,m:Am,X:Dm,S:_m,M:Mm};function Sm(){var t=ue.f(),n=Qi();return t||n}function Om(t){var n=ua(t);n!==null&&n.tag===5&&n.type==="form"?Ys(n):ue.r(t)}var Ba=typeof document>"u"?null:document;function md(t,n,e){var a=Ba;if(a&&typeof n=="string"&&n){var l=mn(n);l='link[rel="'+t+'"][href="'+l+'"]',typeof e=="string"&&(l+='[crossorigin="'+e+'"]'),hd.has(l)||(hd.add(l),t={rel:t,crossOrigin:e,href:n},a.querySelector(l)===null&&(n=a.createElement("link"),Vt(n,"link",t),Yt(n),a.head.appendChild(n)))}}function Em(t){ue.D(t),md("dns-prefetch",t,null)}function zm(t,n){ue.C(t,n),md("preconnect",t,n)}function Tm(t,n,e){ue.L(t,n,e);var a=Ba;if(a&&t&&n){var l='link[rel="preload"][as="'+mn(n)+'"]';n==="image"&&e&&e.imageSrcSet?(l+='[imagesrcset="'+mn(e.imageSrcSet)+'"]',typeof e.imageSizes=="string"&&(l+='[imagesizes="'+mn(e.imageSizes)+'"]')):l+='[href="'+mn(t)+'"]';var i=l;switch(n){case"style":i=Ya(t);break;case"script":i=La(t)}zn.has(i)||(t=et({rel:"preload",href:n==="image"&&e&&e.imageSrcSet?void 0:t,as:n},e),zn.set(i,t),a.querySelector(l)!==null||n==="style"&&a.querySelector(Ul(i))||n==="script"&&a.querySelector(Cl(i))||(n=a.createElement("link"),Vt(n,"link",t),Yt(n),a.head.appendChild(n)))}}function Am(t,n){ue.m(t,n);var e=Ba;if(e&&t){var a=n&&typeof n.as=="string"?n.as:"script",l='link[rel="modulepreload"][as="'+mn(a)+'"][href="'+mn(t)+'"]',i=l;switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":i=La(t)}if(!zn.has(i)&&(t=et({rel:"modulepreload",href:t},n),zn.set(i,t),e.querySelector(l)===null)){switch(a){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(e.querySelector(Cl(i)))return}a=e.createElement("link"),Vt(a,"link",t),Yt(a),e.head.appendChild(a)}}}function _m(t,n,e){ue.S(t,n,e);var a=Ba;if(a&&t){var l=oa(a).hoistableStyles,i=Ya(t);n=n||"default";var u=l.get(i);if(!u){var f={loading:0,preload:null};if(u=a.querySelector(Ul(i)))f.loading=5;else{t=et({rel:"stylesheet",href:t,"data-precedence":n},e),(e=zn.get(i))&&Eo(t,e);var m=u=a.createElement("link");Yt(m),Vt(m,"link",t),m._p=new Promise(function(x,D){m.onload=x,m.onerror=D}),m.addEventListener("load",function(){f.loading|=1}),m.addEventListener("error",function(){f.loading|=2}),f.loading|=4,Ii(u,n,a)}u={type:"stylesheet",instance:u,count:1,state:f},l.set(i,u)}}}function Dm(t,n){ue.X(t,n);var e=Ba;if(e&&t){var a=oa(e).hoistableScripts,l=La(t),i=a.get(l);i||(i=e.querySelector(Cl(l)),i||(t=et({src:t,async:!0},n),(n=zn.get(l))&&zo(t,n),i=e.createElement("script"),Yt(i),Vt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function Mm(t,n){ue.M(t,n);var e=Ba;if(e&&t){var a=oa(e).hoistableScripts,l=La(t),i=a.get(l);i||(i=e.querySelector(Cl(l)),i||(t=et({src:t,async:!0,type:"module"},n),(n=zn.get(l))&&zo(t,n),i=e.createElement("script"),Yt(i),Vt(i,"link",t),e.head.appendChild(i)),i={type:"script",instance:i,count:1,state:null},a.set(l,i))}}function bd(t,n,e,a){var l=(l=fe.current)?Fi(l):null;if(!l)throw Error(c(446));switch(t){case"meta":case"title":return null;case"style":return typeof e.precedence=="string"&&typeof e.href=="string"?(n=Ya(e.href),e=oa(l).hoistableStyles,a=e.get(n),a||(a={type:"style",instance:null,count:0,state:null},e.set(n,a)),a):{type:"void",instance:null,count:0,state:null};case"link":if(e.rel==="stylesheet"&&typeof e.href=="string"&&typeof e.precedence=="string"){t=Ya(e.href);var i=oa(l).hoistableStyles,u=i.get(t);if(u||(l=l.ownerDocument||l,u={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},i.set(t,u),(i=l.querySelector(Ul(t)))&&!i._p&&(u.instance=i,u.state.loading=5),zn.has(t)||(e={rel:"preload",as:"style",href:e.href,crossOrigin:e.crossOrigin,integrity:e.integrity,media:e.media,hrefLang:e.hrefLang,referrerPolicy:e.referrerPolicy},zn.set(t,e),i||Rm(l,t,e,u.state))),n&&a===null)throw Error(c(528,""));return u}if(n&&a!==null)throw Error(c(529,""));return null;case"script":return n=e.async,e=e.src,typeof e=="string"&&n&&typeof n!="function"&&typeof n!="symbol"?(n=La(e),e=oa(l).hoistableScripts,a=e.get(n),a||(a={type:"script",instance:null,count:0,state:null},e.set(n,a)),a):{type:"void",instance:null,count:0,state:null};default:throw Error(c(444,t))}}function Ya(t){return'href="'+mn(t)+'"'}function Ul(t){return'link[rel="stylesheet"]['+t+"]"}function pd(t){return et({},t,{"data-precedence":t.precedence,precedence:null})}function Rm(t,n,e,a){t.querySelector('link[rel="preload"][as="style"]['+n+"]")?a.loading=1:(n=t.createElement("link"),a.preload=n,n.addEventListener("load",function(){return a.loading|=1}),n.addEventListener("error",function(){return a.loading|=2}),Vt(n,"link",e),Yt(n),t.head.appendChild(n))}function La(t){return'[src="'+mn(t)+'"]'}function Cl(t){return"script[async]"+t}function vd(t,n,e){if(n.count++,n.instance===null)switch(n.type){case"style":var a=t.querySelector('style[data-href~="'+mn(e.href)+'"]');if(a)return n.instance=a,Yt(a),a;var l=et({},e,{"data-href":e.href,"data-precedence":e.precedence,href:null,precedence:null});return a=(t.ownerDocument||t).createElement("style"),Yt(a),Vt(a,"style",l),Ii(a,e.precedence,t),n.instance=a;case"stylesheet":l=Ya(e.href);var i=t.querySelector(Ul(l));if(i)return n.state.loading|=4,n.instance=i,Yt(i),i;a=pd(e),(l=zn.get(l))&&Eo(a,l),i=(t.ownerDocument||t).createElement("link"),Yt(i);var u=i;return u._p=new Promise(function(f,m){u.onload=f,u.onerror=m}),Vt(i,"link",a),n.state.loading|=4,Ii(i,e.precedence,t),n.instance=i;case"script":return i=La(e.src),(l=t.querySelector(Cl(i)))?(n.instance=l,Yt(l),l):(a=e,(l=zn.get(i))&&(a=et({},e),zo(a,l)),t=t.ownerDocument||t,l=t.createElement("script"),Yt(l),Vt(l,"link",a),t.head.appendChild(l),n.instance=l);case"void":return null;default:throw Error(c(443,n.type))}else n.type==="stylesheet"&&(n.state.loading&4)===0&&(a=n.instance,n.state.loading|=4,Ii(a,e.precedence,t));return n.instance}function Ii(t,n,e){for(var a=e.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=a.length?a[a.length-1]:null,i=l,u=0;u<a.length;u++){var f=a[u];if(f.dataset.precedence===n)i=f;else if(i!==l)break}i?i.parentNode.insertBefore(t,i.nextSibling):(n=e.nodeType===9?e.head:e,n.insertBefore(t,n.firstChild))}function Eo(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.title==null&&(t.title=n.title)}function zo(t,n){t.crossOrigin==null&&(t.crossOrigin=n.crossOrigin),t.referrerPolicy==null&&(t.referrerPolicy=n.referrerPolicy),t.integrity==null&&(t.integrity=n.integrity)}var tr=null;function gd(t,n,e){if(tr===null){var a=new Map,l=tr=new Map;l.set(e,a)}else l=tr,a=l.get(e),a||(a=new Map,l.set(e,a));if(a.has(t))return a;for(a.set(t,null),e=e.getElementsByTagName(t),l=0;l<e.length;l++){var i=e[l];if(!(i[Ja]||i[Kt]||t==="link"&&i.getAttribute("rel")==="stylesheet")&&i.namespaceURI!=="http://www.w3.org/2000/svg"){var u=i.getAttribute(n)||"";u=t+u;var f=a.get(u);f?f.push(i):a.set(u,[i])}}return a}function yd(t,n,e){t=t.ownerDocument||t,t.head.insertBefore(e,n==="title"?t.querySelector("head > title"):null)}function qm(t,n,e){if(e===1||n.itemProp!=null)return!1;switch(t){case"meta":case"title":return!0;case"style":if(typeof n.precedence!="string"||typeof n.href!="string"||n.href==="")break;return!0;case"link":if(typeof n.rel!="string"||typeof n.href!="string"||n.href===""||n.onLoad||n.onError)break;switch(n.rel){case"stylesheet":return t=n.disabled,typeof n.precedence=="string"&&t==null;default:return!0}case"script":if(n.async&&typeof n.async!="function"&&typeof n.async!="symbol"&&!n.onLoad&&!n.onError&&n.src&&typeof n.src=="string")return!0}return!1}function xd(t){return!(t.type==="stylesheet"&&(t.state.loading&3)===0)}var Hl=null;function km(){}function Um(t,n,e){if(Hl===null)throw Error(c(475));var a=Hl;if(n.type==="stylesheet"&&(typeof e.media!="string"||matchMedia(e.media).matches!==!1)&&(n.state.loading&4)===0){if(n.instance===null){var l=Ya(e.href),i=t.querySelector(Ul(l));if(i){t=i._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(a.count++,a=nr.bind(a),t.then(a,a)),n.state.loading|=4,n.instance=i,Yt(i);return}i=t.ownerDocument||t,e=pd(e),(l=zn.get(l))&&Eo(e,l),i=i.createElement("link"),Yt(i);var u=i;u._p=new Promise(function(f,m){u.onload=f,u.onerror=m}),Vt(i,"link",e),n.instance=i}a.stylesheets===null&&(a.stylesheets=new Map),a.stylesheets.set(n,t),(t=n.state.preload)&&(n.state.loading&3)===0&&(a.count++,n=nr.bind(a),t.addEventListener("load",n),t.addEventListener("error",n))}}function Cm(){if(Hl===null)throw Error(c(475));var t=Hl;return t.stylesheets&&t.count===0&&To(t,t.stylesheets),0<t.count?function(n){var e=setTimeout(function(){if(t.stylesheets&&To(t,t.stylesheets),t.unsuspend){var a=t.unsuspend;t.unsuspend=null,a()}},6e4);return t.unsuspend=n,function(){t.unsuspend=null,clearTimeout(e)}}:null}function nr(){if(this.count--,this.count===0){if(this.stylesheets)To(this,this.stylesheets);else if(this.unsuspend){var t=this.unsuspend;this.unsuspend=null,t()}}}var er=null;function To(t,n){t.stylesheets=null,t.unsuspend!==null&&(t.count++,er=new Map,n.forEach(Hm,t),er=null,nr.call(t))}function Hm(t,n){if(!(n.state.loading&4)){var e=er.get(t);if(e)var a=e.get(null);else{e=new Map,er.set(t,e);for(var l=t.querySelectorAll("link[data-precedence],style[data-precedence]"),i=0;i<l.length;i++){var u=l[i];(u.nodeName==="LINK"||u.getAttribute("media")!=="not all")&&(e.set(u.dataset.precedence,u),a=u)}a&&e.set(null,a)}l=n.instance,u=l.getAttribute("data-precedence"),i=e.get(u)||a,i===a&&e.set(null,l),e.set(u,l),this.count++,a=nr.bind(this),l.addEventListener("load",a),l.addEventListener("error",a),i?i.parentNode.insertBefore(l,i.nextSibling):(t=t.nodeType===9?t.head:t,t.insertBefore(l,t.firstChild)),n.state.loading|=4}}var wl={$$typeof:B,Provider:null,Consumer:null,_currentValue:ct,_currentValue2:ct,_threadCount:0};function wm(t,n,e,a,l,i,u,f){this.tag=1,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=Ar(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.finishedLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ar(0),this.hiddenUpdates=Ar(null),this.identifierPrefix=a,this.onUncaughtError=l,this.onCaughtError=i,this.onRecoverableError=u,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=f,this.incompleteTransitions=new Map}function Sd(t,n,e,a,l,i,u,f,m,x,D,C){return t=new wm(t,n,e,u,f,m,x,C),n=1,i===!0&&(n|=24),i=On(3,null,null,n),t.current=i,i.stateNode=t,n=eu(),n.refCount++,t.pooledCache=n,n.refCount++,i.memoizedState={element:a,isDehydrated:e,cache:n},wu(i),t}function Od(t){return t?(t=ga,t):ga}function Ed(t,n,e,a,l,i){l=Od(l),a.context===null?a.context=l:a.pendingContext=l,a=Oe(n),a.payload={element:e},i=i===void 0?null:i,i!==null&&(a.callback=i),e=Ee(t,a,n),e!==null&&(It(e,t,n),yl(e,t,n))}function zd(t,n){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var e=t.retryLane;t.retryLane=e!==0&&e<n?e:n}}function Ao(t,n){zd(t,n),(t=t.alternate)&&zd(t,n)}function Td(t){if(t.tag===13){var n=be(t,67108864);n!==null&&It(n,t,67108864),Ao(t,67108864)}}var ar=!0;function Nm(t,n,e,a){var l=L.T;L.T=null;var i=X.p;try{X.p=2,_o(t,n,e,a)}finally{X.p=i,L.T=l}}function Bm(t,n,e,a){var l=L.T;L.T=null;var i=X.p;try{X.p=8,_o(t,n,e,a)}finally{X.p=i,L.T=l}}function _o(t,n,e,a){if(ar){var l=Do(a);if(l===null)bo(t,n,a,lr,e),_d(t,a);else if(Lm(l,t,n,e,a))a.stopPropagation();else if(_d(t,a),n&4&&-1<Ym.indexOf(t)){for(;l!==null;){var i=ua(l);if(i!==null)switch(i.tag){case 3:if(i=i.stateNode,i.current.memoizedState.isDehydrated){var u=we(i.pendingLanes);if(u!==0){var f=i;for(f.pendingLanes|=2,f.entangledLanes|=2;u;){var m=1<<31-rn(u);f.entanglements[1]|=m,u&=~m}Bn(i),(Tt&6)===0&&(ji=Un()+500,Rl(0))}}break;case 13:f=be(i,2),f!==null&&It(f,i,2),Qi(),Ao(i,2)}if(i=Do(a),i===null&&bo(t,n,a,lr,e),i===l)break;l=i}l!==null&&a.stopPropagation()}else bo(t,n,a,null,e)}}function Do(t){return t=Ur(t),Mo(t)}var lr=null;function Mo(t){if(lr=null,t=Ne(t),t!==null){var n=F(t);if(n===null)t=null;else{var e=n.tag;if(e===13){if(t=gt(n),t!==null)return t;t=null}else if(e===3){if(n.stateNode.current.memoizedState.isDehydrated)return n.tag===3?n.stateNode.containerInfo:null;t=null}else n!==t&&(t=null)}}return lr=t,null}function Ad(t){switch(t){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(zh()){case $o:return 2;case Po:return 8;case Il:case Th:return 32;case Wo:return 268435456;default:return 32}default:return 32}}var Ro=!1,Re=null,qe=null,ke=null,Nl=new Map,Bl=new Map,Ue=[],Ym="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function _d(t,n){switch(t){case"focusin":case"focusout":Re=null;break;case"dragenter":case"dragleave":qe=null;break;case"mouseover":case"mouseout":ke=null;break;case"pointerover":case"pointerout":Nl.delete(n.pointerId);break;case"gotpointercapture":case"lostpointercapture":Bl.delete(n.pointerId)}}function Yl(t,n,e,a,l,i){return t===null||t.nativeEvent!==i?(t={blockedOn:n,domEventName:e,eventSystemFlags:a,nativeEvent:i,targetContainers:[l]},n!==null&&(n=ua(n),n!==null&&Td(n)),t):(t.eventSystemFlags|=a,n=t.targetContainers,l!==null&&n.indexOf(l)===-1&&n.push(l),t)}function Lm(t,n,e,a,l){switch(n){case"focusin":return Re=Yl(Re,t,n,e,a,l),!0;case"dragenter":return qe=Yl(qe,t,n,e,a,l),!0;case"mouseover":return ke=Yl(ke,t,n,e,a,l),!0;case"pointerover":var i=l.pointerId;return Nl.set(i,Yl(Nl.get(i)||null,t,n,e,a,l)),!0;case"gotpointercapture":return i=l.pointerId,Bl.set(i,Yl(Bl.get(i)||null,t,n,e,a,l)),!0}return!1}function Dd(t){var n=Ne(t.target);if(n!==null){var e=F(n);if(e!==null){if(n=e.tag,n===13){if(n=gt(e),n!==null){t.blockedOn=n,Ch(t.priority,function(){if(e.tag===13){var a=fn(),l=be(e,a);l!==null&&It(l,e,a),Ao(e,a)}});return}}else if(n===3&&e.stateNode.current.memoizedState.isDehydrated){t.blockedOn=e.tag===3?e.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ir(t){if(t.blockedOn!==null)return!1;for(var n=t.targetContainers;0<n.length;){var e=Do(t.nativeEvent);if(e===null){e=t.nativeEvent;var a=new e.constructor(e.type,e);kr=a,e.target.dispatchEvent(a),kr=null}else return n=ua(e),n!==null&&Td(n),t.blockedOn=e,!1;n.shift()}return!0}function Md(t,n,e){ir(t)&&e.delete(n)}function jm(){Ro=!1,Re!==null&&ir(Re)&&(Re=null),qe!==null&&ir(qe)&&(qe=null),ke!==null&&ir(ke)&&(ke=null),Nl.forEach(Md),Bl.forEach(Md)}function rr(t,n){t.blockedOn===n&&(t.blockedOn=null,Ro||(Ro=!0,r.unstable_scheduleCallback(r.unstable_NormalPriority,jm)))}var ur=null;function Rd(t){ur!==t&&(ur=t,r.unstable_scheduleCallback(r.unstable_NormalPriority,function(){ur===t&&(ur=null);for(var n=0;n<t.length;n+=3){var e=t[n],a=t[n+1],l=t[n+2];if(typeof a!="function"){if(Mo(a||e)===null)continue;break}var i=ua(e);i!==null&&(t.splice(n,3),n-=3,gu(i,{pending:!0,data:l,method:e.method,action:a},a,l))}}))}function Ll(t){function n(m){return rr(m,t)}Re!==null&&rr(Re,t),qe!==null&&rr(qe,t),ke!==null&&rr(ke,t),Nl.forEach(n),Bl.forEach(n);for(var e=0;e<Ue.length;e++){var a=Ue[e];a.blockedOn===t&&(a.blockedOn=null)}for(;0<Ue.length&&(e=Ue[0],e.blockedOn===null);)Dd(e),e.blockedOn===null&&Ue.shift();if(e=(t.ownerDocument||t).$$reactFormReplay,e!=null)for(a=0;a<e.length;a+=3){var l=e[a],i=e[a+1],u=l[nn]||null;if(typeof i=="function")u||Rd(e);else if(u){var f=null;if(i&&i.hasAttribute("formAction")){if(l=i,u=i[nn]||null)f=u.formAction;else if(Mo(l)!==null)continue}else f=u.action;typeof f=="function"?e[a+1]=f:(e.splice(a,3),a-=3),Rd(e)}}}function qo(t){this._internalRoot=t}or.prototype.render=qo.prototype.render=function(t){var n=this._internalRoot;if(n===null)throw Error(c(409));var e=n.current,a=fn();Ed(e,a,t,n,null,null)},or.prototype.unmount=qo.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var n=t.containerInfo;t.tag===0&&Ha(),Ed(t.current,2,null,t,null,null),Qi(),n[ra]=null}};function or(t){this._internalRoot=t}or.prototype.unstable_scheduleHydration=function(t){if(t){var n=ac();t={blockedOn:null,target:t,priority:n};for(var e=0;e<Ue.length&&n!==0&&n<Ue[e].priority;e++);Ue.splice(e,0,t),e===0&&Dd(t)}};var qd=o.version;if(qd!=="19.0.0")throw Error(c(527,qd,"19.0.0"));X.findDOMNode=function(t){var n=t._reactInternals;if(n===void 0)throw typeof t.render=="function"?Error(c(188)):(t=Object.keys(t).join(","),Error(c(268,t)));return t=w(n),t=t!==null?W(t):null,t=t===null?null:t.stateNode,t};var Xm={bundleType:0,version:"19.0.0",rendererPackageName:"react-dom",currentDispatcherRef:L,findFiberByHostInstance:Ne,reconcilerVersion:"19.0.0"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var cr=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!cr.isDisabled&&cr.supportsFiber)try{Za=cr.inject(Xm),ln=cr}catch{}}return Xl.createRoot=function(t,n){if(!d(t))throw Error(c(299));var e=!1,a="",l=Ks,i=Js,u=$s,f=null;return n!=null&&(n.unstable_strictMode===!0&&(e=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onUncaughtError!==void 0&&(l=n.onUncaughtError),n.onCaughtError!==void 0&&(i=n.onCaughtError),n.onRecoverableError!==void 0&&(u=n.onRecoverableError),n.unstable_transitionCallbacks!==void 0&&(f=n.unstable_transitionCallbacks)),n=Sd(t,1,!1,null,null,e,a,l,i,u,f,null),t[ra]=n.current,mo(t.nodeType===8?t.parentNode:t),new qo(n)},Xl.hydrateRoot=function(t,n,e){if(!d(t))throw Error(c(299));var a=!1,l="",i=Ks,u=Js,f=$s,m=null,x=null;return e!=null&&(e.unstable_strictMode===!0&&(a=!0),e.identifierPrefix!==void 0&&(l=e.identifierPrefix),e.onUncaughtError!==void 0&&(i=e.onUncaughtError),e.onCaughtError!==void 0&&(u=e.onCaughtError),e.onRecoverableError!==void 0&&(f=e.onRecoverableError),e.unstable_transitionCallbacks!==void 0&&(m=e.unstable_transitionCallbacks),e.formState!==void 0&&(x=e.formState)),n=Sd(t,1,!0,n,e??null,a,l,i,u,f,m,x),n.context=Od(null),e=n.current,a=fn(),l=Oe(a),l.callback=null,Ee(e,l,a),n.current.lanes=a,Ka(n,a),Bn(n),t[ra]=n.current,mo(t),new or(n)},Xl.version="19.0.0",Xl}var jd;function Fm(){if(jd)return Uo.exports;jd=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(o){console.error(o)}}return r(),Uo.exports=Wm(),Uo.exports}var Im=Fm();const tb=nh(Im);var q=Go();const Xa=nh(q);var Gl={},Xd;function nb(){if(Xd)return Gl;Xd=1,Object.defineProperty(Gl,"__esModule",{value:!0}),Gl.parse=y,Gl.serialize=h;const r=/^[\u0021-\u003A\u003C\u003E-\u007E]+$/,o=/^[\u0021-\u003A\u003C-\u007E]*$/,s=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,c=/^[\u0020-\u003A\u003D-\u007E]*$/,d=Object.prototype.toString,b=(()=>{const M=function(){};return M.prototype=Object.create(null),M})();function y(M,B){const T=new b,_=M.length;if(_<2)return T;const H=(B==null?void 0:B.decode)||R;let N=0;do{const Y=M.indexOf("=",N);if(Y===-1)break;const J=M.indexOf(";",N),rt=J===-1?_:J;if(Y>rt){N=M.lastIndexOf(";",Y-1)+1;continue}const K=O(M,N,Y),mt=p(M,Y,K),St=M.slice(K,mt);if(T[St]===void 0){let At=O(M,Y+1,rt),L=p(M,rt,At);const et=H(M.slice(At,L));T[St]=et}N=rt+1}while(N<_);return T}function O(M,B,T){do{const _=M.charCodeAt(B);if(_!==32&&_!==9)return B}while(++B<T);return T}function p(M,B,T){for(;B>T;){const _=M.charCodeAt(--B);if(_!==32&&_!==9)return B+1}return T}function h(M,B,T){const _=(T==null?void 0:T.encode)||encodeURIComponent;if(!r.test(M))throw new TypeError(`argument name is invalid: ${M}`);const H=_(B);if(!o.test(H))throw new TypeError(`argument val is invalid: ${B}`);let N=M+"="+H;if(!T)return N;if(T.maxAge!==void 0){if(!Number.isInteger(T.maxAge))throw new TypeError(`option maxAge is invalid: ${T.maxAge}`);N+="; Max-Age="+T.maxAge}if(T.domain){if(!s.test(T.domain))throw new TypeError(`option domain is invalid: ${T.domain}`);N+="; Domain="+T.domain}if(T.path){if(!c.test(T.path))throw new TypeError(`option path is invalid: ${T.path}`);N+="; Path="+T.path}if(T.expires){if(!U(T.expires)||!Number.isFinite(T.expires.valueOf()))throw new TypeError(`option expires is invalid: ${T.expires}`);N+="; Expires="+T.expires.toUTCString()}if(T.httpOnly&&(N+="; HttpOnly"),T.secure&&(N+="; Secure"),T.partitioned&&(N+="; Partitioned"),T.priority)switch(typeof T.priority=="string"?T.priority.toLowerCase():void 0){case"low":N+="; Priority=Low";break;case"medium":N+="; Priority=Medium";break;case"high":N+="; Priority=High";break;default:throw new TypeError(`option priority is invalid: ${T.priority}`)}if(T.sameSite)switch(typeof T.sameSite=="string"?T.sameSite.toLowerCase():T.sameSite){case!0:case"strict":N+="; SameSite=Strict";break;case"lax":N+="; SameSite=Lax";break;case"none":N+="; SameSite=None";break;default:throw new TypeError(`option sameSite is invalid: ${T.sameSite}`)}return N}function R(M){if(M.indexOf("%")===-1)return M;try{return decodeURIComponent(M)}catch{return M}}function U(M){return d.call(M)==="[object Date]"}return Gl}nb();/**
 * react-router v7.3.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */var Gd="popstate";function eb(r={}){function o(c,d){let{pathname:b,search:y,hash:O}=c.location;return jo("",{pathname:b,search:y,hash:O},d.state&&d.state.usr||null,d.state&&d.state.key||"default")}function s(c,d){return typeof d=="string"?d:Vl(d)}return lb(o,s,null,r)}function Nt(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}function Ln(r,o){if(!r){typeof console<"u"&&console.warn(o);try{throw new Error(o)}catch{}}}function ab(){return Math.random().toString(36).substring(2,10)}function Qd(r,o){return{usr:r.state,key:r.key,idx:o}}function jo(r,o,s=null,c){return{pathname:typeof r=="string"?r:r.pathname,search:"",hash:"",...typeof o=="string"?Kl(o):o,state:s,key:o&&o.key||c||ab()}}function Vl({pathname:r="/",search:o="",hash:s=""}){return o&&o!=="?"&&(r+=o.charAt(0)==="?"?o:"?"+o),s&&s!=="#"&&(r+=s.charAt(0)==="#"?s:"#"+s),r}function Kl(r){let o={};if(r){let s=r.indexOf("#");s>=0&&(o.hash=r.substring(s),r=r.substring(0,s));let c=r.indexOf("?");c>=0&&(o.search=r.substring(c),r=r.substring(0,c)),r&&(o.pathname=r)}return o}function lb(r,o,s,c={}){let{window:d=document.defaultView,v5Compat:b=!1}=c,y=d.history,O="POP",p=null,h=R();h==null&&(h=0,y.replaceState({...y.state,idx:h},""));function R(){return(y.state||{idx:null}).idx}function U(){O="POP";let H=R(),N=H==null?null:H-h;h=H,p&&p({action:O,location:_.location,delta:N})}function M(H,N){O="PUSH";let Y=jo(_.location,H,N);h=R()+1;let J=Qd(Y,h),rt=_.createHref(Y);try{y.pushState(J,"",rt)}catch(K){if(K instanceof DOMException&&K.name==="DataCloneError")throw K;d.location.assign(rt)}b&&p&&p({action:O,location:_.location,delta:1})}function B(H,N){O="REPLACE";let Y=jo(_.location,H,N);h=R();let J=Qd(Y,h),rt=_.createHref(Y);y.replaceState(J,"",rt),b&&p&&p({action:O,location:_.location,delta:0})}function T(H){let N=d.location.origin!=="null"?d.location.origin:d.location.href,Y=typeof H=="string"?H:Vl(H);return Y=Y.replace(/ $/,"%20"),Nt(N,`No window.location.(origin|href) available to create URL for href: ${Y}`),new URL(Y,N)}let _={get action(){return O},get location(){return r(d,y)},listen(H){if(p)throw new Error("A history only accepts one active listener");return d.addEventListener(Gd,U),p=H,()=>{d.removeEventListener(Gd,U),p=null}},createHref(H){return o(d,H)},createURL:T,encodeLocation(H){let N=T(H);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:M,replace:B,go(H){return y.go(H)}};return _}function eh(r,o,s="/"){return ib(r,o,s,!1)}function ib(r,o,s,c){let d=typeof o=="string"?Kl(o):o,b=se(d.pathname||"/",s);if(b==null)return null;let y=ah(r);rb(y);let O=null;for(let p=0;O==null&&p<y.length;++p){let h=vb(b);O=bb(y[p],h,c)}return O}function ah(r,o=[],s=[],c=""){let d=(b,y,O)=>{let p={relativePath:O===void 0?b.path||"":O,caseSensitive:b.caseSensitive===!0,childrenIndex:y,route:b};p.relativePath.startsWith("/")&&(Nt(p.relativePath.startsWith(c),`Absolute route path "${p.relativePath}" nested under path "${c}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`),p.relativePath=p.relativePath.slice(c.length));let h=ce([c,p.relativePath]),R=s.concat(p);b.children&&b.children.length>0&&(Nt(b.index!==!0,`Index routes must not have child routes. Please remove all child routes from route path "${h}".`),ah(b.children,o,R,h)),!(b.path==null&&!b.index)&&o.push({path:h,score:hb(h,b.index),routesMeta:R})};return r.forEach((b,y)=>{var O;if(b.path===""||!((O=b.path)!=null&&O.includes("?")))d(b,y);else for(let p of lh(b.path))d(b,y,p)}),o}function lh(r){let o=r.split("/");if(o.length===0)return[];let[s,...c]=o,d=s.endsWith("?"),b=s.replace(/\?$/,"");if(c.length===0)return d?[b,""]:[b];let y=lh(c.join("/")),O=[];return O.push(...y.map(p=>p===""?b:[b,p].join("/"))),d&&O.push(...y),O.map(p=>r.startsWith("/")&&p===""?"/":p)}function rb(r){r.sort((o,s)=>o.score!==s.score?s.score-o.score:mb(o.routesMeta.map(c=>c.childrenIndex),s.routesMeta.map(c=>c.childrenIndex)))}var ub=/^:[\w-]+$/,ob=3,cb=2,sb=1,fb=10,db=-2,Zd=r=>r==="*";function hb(r,o){let s=r.split("/"),c=s.length;return s.some(Zd)&&(c+=db),o&&(c+=cb),s.filter(d=>!Zd(d)).reduce((d,b)=>d+(ub.test(b)?ob:b===""?sb:fb),c)}function mb(r,o){return r.length===o.length&&r.slice(0,-1).every((c,d)=>c===o[d])?r[r.length-1]-o[o.length-1]:0}function bb(r,o,s=!1){let{routesMeta:c}=r,d={},b="/",y=[];for(let O=0;O<c.length;++O){let p=c[O],h=O===c.length-1,R=b==="/"?o:o.slice(b.length)||"/",U=br({path:p.relativePath,caseSensitive:p.caseSensitive,end:h},R),M=p.route;if(!U&&h&&s&&!c[c.length-1].route.index&&(U=br({path:p.relativePath,caseSensitive:p.caseSensitive,end:!1},R)),!U)return null;Object.assign(d,U.params),y.push({params:d,pathname:ce([b,U.pathname]),pathnameBase:Sb(ce([b,U.pathnameBase])),route:M}),U.pathnameBase!=="/"&&(b=ce([b,U.pathnameBase]))}return y}function br(r,o){typeof r=="string"&&(r={path:r,caseSensitive:!1,end:!0});let[s,c]=pb(r.path,r.caseSensitive,r.end),d=o.match(s);if(!d)return null;let b=d[0],y=b.replace(/(.)\/+$/,"$1"),O=d.slice(1);return{params:c.reduce((h,{paramName:R,isOptional:U},M)=>{if(R==="*"){let T=O[M]||"";y=b.slice(0,b.length-T.length).replace(/(.)\/+$/,"$1")}const B=O[M];return U&&!B?h[R]=void 0:h[R]=(B||"").replace(/%2F/g,"/"),h},{}),pathname:b,pathnameBase:y,pattern:r}}function pb(r,o=!1,s=!0){Ln(r==="*"||!r.endsWith("*")||r.endsWith("/*"),`Route path "${r}" will be treated as if it were "${r.replace(/\*$/,"/*")}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${r.replace(/\*$/,"/*")}".`);let c=[],d="^"+r.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(y,O,p)=>(c.push({paramName:O,isOptional:p!=null}),p?"/?([^\\/]+)?":"/([^\\/]+)"));return r.endsWith("*")?(c.push({paramName:"*"}),d+=r==="*"||r==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):s?d+="\\/*$":r!==""&&r!=="/"&&(d+="(?:(?=\\/|$))"),[new RegExp(d,o?void 0:"i"),c]}function vb(r){try{return r.split("/").map(o=>decodeURIComponent(o).replace(/\//g,"%2F")).join("/")}catch(o){return Ln(!1,`The URL path "${r}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${o}).`),r}}function se(r,o){if(o==="/")return r;if(!r.toLowerCase().startsWith(o.toLowerCase()))return null;let s=o.endsWith("/")?o.length-1:o.length,c=r.charAt(s);return c&&c!=="/"?null:r.slice(s)||"/"}function gb(r,o="/"){let{pathname:s,search:c="",hash:d=""}=typeof r=="string"?Kl(r):r;return{pathname:s?s.startsWith("/")?s:yb(s,o):o,search:Ob(c),hash:Eb(d)}}function yb(r,o){let s=o.replace(/\/+$/,"").split("/");return r.split("/").forEach(d=>{d===".."?s.length>1&&s.pop():d!=="."&&s.push(d)}),s.length>1?s.join("/"):"/"}function Bo(r,o,s,c){return`Cannot include a '${r}' character in a manually specified \`to.${o}\` field [${JSON.stringify(c)}].  Please separate it out to the \`to.${s}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`}function xb(r){return r.filter((o,s)=>s===0||o.route.path&&o.route.path.length>0)}function ih(r){let o=xb(r);return o.map((s,c)=>c===o.length-1?s.pathname:s.pathnameBase)}function rh(r,o,s,c=!1){let d;typeof r=="string"?d=Kl(r):(d={...r},Nt(!d.pathname||!d.pathname.includes("?"),Bo("?","pathname","search",d)),Nt(!d.pathname||!d.pathname.includes("#"),Bo("#","pathname","hash",d)),Nt(!d.search||!d.search.includes("#"),Bo("#","search","hash",d)));let b=r===""||d.pathname==="",y=b?"/":d.pathname,O;if(y==null)O=s;else{let U=o.length-1;if(!c&&y.startsWith("..")){let M=y.split("/");for(;M[0]==="..";)M.shift(),U-=1;d.pathname=M.join("/")}O=U>=0?o[U]:"/"}let p=gb(d,O),h=y&&y!=="/"&&y.endsWith("/"),R=(b||y===".")&&s.endsWith("/");return!p.pathname.endsWith("/")&&(h||R)&&(p.pathname+="/"),p}var ce=r=>r.join("/").replace(/\/\/+/g,"/"),Sb=r=>r.replace(/\/+$/,"").replace(/^\/*/,"/"),Ob=r=>!r||r==="?"?"":r.startsWith("?")?r:"?"+r,Eb=r=>!r||r==="#"?"":r.startsWith("#")?r:"#"+r;function zb(r){return r!=null&&typeof r.status=="number"&&typeof r.statusText=="string"&&typeof r.internal=="boolean"&&"data"in r}var uh=["POST","PUT","PATCH","DELETE"];new Set(uh);var Tb=["GET",...uh];new Set(Tb);var Ga=q.createContext(null);Ga.displayName="DataRouter";var vr=q.createContext(null);vr.displayName="DataRouterState";var oh=q.createContext({isTransitioning:!1});oh.displayName="ViewTransition";var Ab=q.createContext(new Map);Ab.displayName="Fetchers";var _b=q.createContext(null);_b.displayName="Await";var jn=q.createContext(null);jn.displayName="Navigation";var gr=q.createContext(null);gr.displayName="Location";var Xn=q.createContext({outlet:null,matches:[],isDataRoute:!1});Xn.displayName="Route";var Qo=q.createContext(null);Qo.displayName="RouteError";function Db(r,{relative:o}={}){Nt(Jl(),"useHref() may be used only in the context of a <Router> component.");let{basename:s,navigator:c}=q.useContext(jn),{hash:d,pathname:b,search:y}=$l(r,{relative:o}),O=b;return s!=="/"&&(O=b==="/"?s:ce([s,b])),c.createHref({pathname:O,search:y,hash:d})}function Jl(){return q.useContext(gr)!=null}function la(){return Nt(Jl(),"useLocation() may be used only in the context of a <Router> component."),q.useContext(gr).location}var ch="You should call navigate() in a React.useEffect(), not when your component is first rendered.";function sh(r){q.useContext(jn).static||q.useLayoutEffect(r)}function Mb(){let{isDataRoute:r}=q.useContext(Xn);return r?Qb():Rb()}function Rb(){Nt(Jl(),"useNavigate() may be used only in the context of a <Router> component.");let r=q.useContext(Ga),{basename:o,navigator:s}=q.useContext(jn),{matches:c}=q.useContext(Xn),{pathname:d}=la(),b=JSON.stringify(ih(c)),y=q.useRef(!1);return sh(()=>{y.current=!0}),q.useCallback((p,h={})=>{if(Ln(y.current,ch),!y.current)return;if(typeof p=="number"){s.go(p);return}let R=rh(p,JSON.parse(b),d,h.relative==="path");r==null&&o!=="/"&&(R.pathname=R.pathname==="/"?o:ce([o,R.pathname])),(h.replace?s.replace:s.push)(R,h.state,h)},[o,s,b,d,r])}var qb=q.createContext(null);function kb(r){let o=q.useContext(Xn).outlet;return o&&q.createElement(qb.Provider,{value:r},o)}function $l(r,{relative:o}={}){let{matches:s}=q.useContext(Xn),{pathname:c}=la(),d=JSON.stringify(ih(s));return q.useMemo(()=>rh(r,JSON.parse(d),c,o==="path"),[r,d,c,o])}function Ub(r,o){return fh(r)}function fh(r,o,s,c){Nt(Jl(),"useRoutes() may be used only in the context of a <Router> component.");let{navigator:d,static:b}=q.useContext(jn),{matches:y}=q.useContext(Xn),O=y[y.length-1],p=O?O.params:{},h=O?O.pathname:"/",R=O?O.pathnameBase:"/",U=O&&O.route;{let Y=U&&U.path||"";dh(h,!U||Y.endsWith("*")||Y.endsWith("*?"),`You rendered descendant <Routes> (or called \`useRoutes()\`) at "${h}" (under <Route path="${Y}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${Y}"> to <Route path="${Y==="/"?"*":`${Y}/*`}">.`)}let M=la(),B;B=M;let T=B.pathname||"/",_=T;if(R!=="/"){let Y=R.replace(/^\//,"").split("/");_="/"+T.replace(/^\//,"").split("/").slice(Y.length).join("/")}let H=!b&&s&&s.matches&&s.matches.length>0?s.matches:eh(r,{pathname:_});return Ln(U||H!=null,`No routes matched location "${B.pathname}${B.search}${B.hash}" `),Ln(H==null||H[H.length-1].route.element!==void 0||H[H.length-1].route.Component!==void 0||H[H.length-1].route.lazy!==void 0,`Matched leaf route at location "${B.pathname}${B.search}${B.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`),Bb(H&&H.map(Y=>Object.assign({},Y,{params:Object.assign({},p,Y.params),pathname:ce([R,d.encodeLocation?d.encodeLocation(Y.pathname).pathname:Y.pathname]),pathnameBase:Y.pathnameBase==="/"?R:ce([R,d.encodeLocation?d.encodeLocation(Y.pathnameBase).pathname:Y.pathnameBase])})),y,s,c)}function Cb(){let r=Gb(),o=zb(r)?`${r.status} ${r.statusText}`:r instanceof Error?r.message:JSON.stringify(r),s=r instanceof Error?r.stack:null,c="rgba(200,200,200, 0.5)",d={padding:"0.5rem",backgroundColor:c},b={padding:"2px 4px",backgroundColor:c},y=null;return console.error("Error handled by React Router default ErrorBoundary:",r),y=q.createElement(q.Fragment,null,q.createElement("p",null,"💿 Hey developer 👋"),q.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",q.createElement("code",{style:b},"ErrorBoundary")," or"," ",q.createElement("code",{style:b},"errorElement")," prop on your route.")),q.createElement(q.Fragment,null,q.createElement("h2",null,"Unexpected Application Error!"),q.createElement("h3",{style:{fontStyle:"italic"}},o),s?q.createElement("pre",{style:d},s):null,y)}var Hb=q.createElement(Cb,null),wb=class extends q.Component{constructor(r){super(r),this.state={location:r.location,revalidation:r.revalidation,error:r.error}}static getDerivedStateFromError(r){return{error:r}}static getDerivedStateFromProps(r,o){return o.location!==r.location||o.revalidation!=="idle"&&r.revalidation==="idle"?{error:r.error,location:r.location,revalidation:r.revalidation}:{error:r.error!==void 0?r.error:o.error,location:o.location,revalidation:r.revalidation||o.revalidation}}componentDidCatch(r,o){console.error("React Router caught the following error during render",r,o)}render(){return this.state.error!==void 0?q.createElement(Xn.Provider,{value:this.props.routeContext},q.createElement(Qo.Provider,{value:this.state.error,children:this.props.component})):this.props.children}};function Nb({routeContext:r,match:o,children:s}){let c=q.useContext(Ga);return c&&c.static&&c.staticContext&&(o.route.errorElement||o.route.ErrorBoundary)&&(c.staticContext._deepestRenderedBoundaryId=o.route.id),q.createElement(Xn.Provider,{value:r},s)}function Bb(r,o=[],s=null,c=null){if(r==null){if(!s)return null;if(s.errors)r=s.matches;else if(o.length===0&&!s.initialized&&s.matches.length>0)r=s.matches;else return null}let d=r,b=s==null?void 0:s.errors;if(b!=null){let p=d.findIndex(h=>h.route.id&&(b==null?void 0:b[h.route.id])!==void 0);Nt(p>=0,`Could not find a matching route for errors on route IDs: ${Object.keys(b).join(",")}`),d=d.slice(0,Math.min(d.length,p+1))}let y=!1,O=-1;if(s)for(let p=0;p<d.length;p++){let h=d[p];if((h.route.HydrateFallback||h.route.hydrateFallbackElement)&&(O=p),h.route.id){let{loaderData:R,errors:U}=s,M=h.route.loader&&!R.hasOwnProperty(h.route.id)&&(!U||U[h.route.id]===void 0);if(h.route.lazy||M){y=!0,O>=0?d=d.slice(0,O+1):d=[d[0]];break}}}return d.reduceRight((p,h,R)=>{let U,M=!1,B=null,T=null;s&&(U=b&&h.route.id?b[h.route.id]:void 0,B=h.route.errorElement||Hb,y&&(O<0&&R===0?(dh("route-fallback",!1,"No `HydrateFallback` element provided to render during initial hydration"),M=!0,T=null):O===R&&(M=!0,T=h.route.hydrateFallbackElement||null)));let _=o.concat(d.slice(0,R+1)),H=()=>{let N;return U?N=B:M?N=T:h.route.Component?N=q.createElement(h.route.Component,null):h.route.element?N=h.route.element:N=p,q.createElement(Nb,{match:h,routeContext:{outlet:p,matches:_,isDataRoute:s!=null},children:N})};return s&&(h.route.ErrorBoundary||h.route.errorElement||R===0)?q.createElement(wb,{location:s.location,revalidation:s.revalidation,component:B,error:U,children:H(),routeContext:{outlet:null,matches:_,isDataRoute:!0}}):H()},null)}function Zo(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function Yb(r){let o=q.useContext(Ga);return Nt(o,Zo(r)),o}function Lb(r){let o=q.useContext(vr);return Nt(o,Zo(r)),o}function jb(r){let o=q.useContext(Xn);return Nt(o,Zo(r)),o}function Vo(r){let o=jb(r),s=o.matches[o.matches.length-1];return Nt(s.route.id,`${r} can only be used on routes that contain a unique "id"`),s.route.id}function Xb(){return Vo("useRouteId")}function Gb(){var c;let r=q.useContext(Qo),o=Lb("useRouteError"),s=Vo("useRouteError");return r!==void 0?r:(c=o.errors)==null?void 0:c[s]}function Qb(){let{router:r}=Yb("useNavigate"),o=Vo("useNavigate"),s=q.useRef(!1);return sh(()=>{s.current=!0}),q.useCallback(async(d,b={})=>{Ln(s.current,ch),s.current&&(typeof d=="number"?r.navigate(d):await r.navigate(d,{fromRouteId:o,...b}))},[r,o])}var Vd={};function dh(r,o,s){!o&&!Vd[r]&&(Vd[r]=!0,Ln(!1,s))}q.memo(Zb);function Zb({routes:r,future:o,state:s}){return fh(r,void 0,s,o)}function Vb(r){return kb(r.context)}function Kb({basename:r="/",children:o=null,location:s,navigationType:c="POP",navigator:d,static:b=!1}){Nt(!Jl(),"You cannot render a <Router> inside another <Router>. You should never have more than one in your app.");let y=r.replace(/^\/*/,"/"),O=q.useMemo(()=>({basename:y,navigator:d,static:b,future:{}}),[y,d,b]);typeof s=="string"&&(s=Kl(s));let{pathname:p="/",search:h="",hash:R="",state:U=null,key:M="default"}=s,B=q.useMemo(()=>{let T=se(p,y);return T==null?null:{location:{pathname:T,search:h,hash:R,state:U,key:M},navigationType:c}},[y,p,h,R,U,M,c]);return Ln(B!=null,`<Router basename="${y}"> is not able to match the URL "${p}${h}${R}" because it does not start with the basename, so the <Router> won't render anything.`),B==null?null:q.createElement(jn.Provider,{value:O},q.createElement(gr.Provider,{children:o,value:B}))}var hr="get",mr="application/x-www-form-urlencoded";function yr(r){return r!=null&&typeof r.tagName=="string"}function Jb(r){return yr(r)&&r.tagName.toLowerCase()==="button"}function $b(r){return yr(r)&&r.tagName.toLowerCase()==="form"}function Pb(r){return yr(r)&&r.tagName.toLowerCase()==="input"}function Wb(r){return!!(r.metaKey||r.altKey||r.ctrlKey||r.shiftKey)}function Fb(r,o){return r.button===0&&(!o||o==="_self")&&!Wb(r)}var sr=null;function Ib(){if(sr===null)try{new FormData(document.createElement("form"),0),sr=!1}catch{sr=!0}return sr}var tp=new Set(["application/x-www-form-urlencoded","multipart/form-data","text/plain"]);function Yo(r){return r!=null&&!tp.has(r)?(Ln(!1,`"${r}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${mr}"`),null):r}function np(r,o){let s,c,d,b,y;if($b(r)){let O=r.getAttribute("action");c=O?se(O,o):null,s=r.getAttribute("method")||hr,d=Yo(r.getAttribute("enctype"))||mr,b=new FormData(r)}else if(Jb(r)||Pb(r)&&(r.type==="submit"||r.type==="image")){let O=r.form;if(O==null)throw new Error('Cannot submit a <button> or <input type="submit"> without a <form>');let p=r.getAttribute("formaction")||O.getAttribute("action");if(c=p?se(p,o):null,s=r.getAttribute("formmethod")||O.getAttribute("method")||hr,d=Yo(r.getAttribute("formenctype"))||Yo(O.getAttribute("enctype"))||mr,b=new FormData(O,r),!Ib()){let{name:h,type:R,value:U}=r;if(R==="image"){let M=h?`${h}.`:"";b.append(`${M}x`,"0"),b.append(`${M}y`,"0")}else h&&b.append(h,U)}}else{if(yr(r))throw new Error('Cannot submit element that is not <form>, <button>, or <input type="submit|image">');s=hr,c=null,d=mr,y=r}return b&&d==="text/plain"&&(y=b,b=void 0),{action:c,method:s.toLowerCase(),encType:d,formData:b,body:y}}function Ko(r,o){if(r===!1||r===null||typeof r>"u")throw new Error(o)}async function ep(r,o){if(r.id in o)return o[r.id];try{let s=await import(r.module);return o[r.id]=s,s}catch(s){return console.error(`Error loading route module \`${r.module}\`, reloading page...`),console.error(s),window.__reactRouterContext&&window.__reactRouterContext.isSpaMode,window.location.reload(),new Promise(()=>{})}}function ap(r){return r==null?!1:r.href==null?r.rel==="preload"&&typeof r.imageSrcSet=="string"&&typeof r.imageSizes=="string":typeof r.rel=="string"&&typeof r.href=="string"}async function lp(r,o,s){let c=await Promise.all(r.map(async d=>{let b=o.routes[d.route.id];if(b){let y=await ep(b,s);return y.links?y.links():[]}return[]}));return op(c.flat(1).filter(ap).filter(d=>d.rel==="stylesheet"||d.rel==="preload").map(d=>d.rel==="stylesheet"?{...d,rel:"prefetch",as:"style"}:{...d,rel:"prefetch"}))}function Kd(r,o,s,c,d,b){let y=(p,h)=>s[h]?p.route.id!==s[h].route.id:!0,O=(p,h)=>{var R;return s[h].pathname!==p.pathname||((R=s[h].route.path)==null?void 0:R.endsWith("*"))&&s[h].params["*"]!==p.params["*"]};return b==="assets"?o.filter((p,h)=>y(p,h)||O(p,h)):b==="data"?o.filter((p,h)=>{var U;let R=c.routes[p.route.id];if(!R||!R.hasLoader)return!1;if(y(p,h)||O(p,h))return!0;if(p.route.shouldRevalidate){let M=p.route.shouldRevalidate({currentUrl:new URL(d.pathname+d.search+d.hash,window.origin),currentParams:((U=s[0])==null?void 0:U.params)||{},nextUrl:new URL(r,window.origin),nextParams:p.params,defaultShouldRevalidate:!0});if(typeof M=="boolean")return M}return!0}):[]}function ip(r,o,{includeHydrateFallback:s}={}){return rp(r.map(c=>{let d=o.routes[c.route.id];if(!d)return[];let b=[d.module];return d.clientActionModule&&(b=b.concat(d.clientActionModule)),d.clientLoaderModule&&(b=b.concat(d.clientLoaderModule)),s&&d.hydrateFallbackModule&&(b=b.concat(d.hydrateFallbackModule)),d.imports&&(b=b.concat(d.imports)),b}).flat(1))}function rp(r){return[...new Set(r)]}function up(r){let o={},s=Object.keys(r).sort();for(let c of s)o[c]=r[c];return o}function op(r,o){let s=new Set;return new Set(o),r.reduce((c,d)=>{let b=JSON.stringify(up(d));return s.has(b)||(s.add(b),c.push({key:b,link:d})),c},[])}function cp(r,o){let s=typeof r=="string"?new URL(r,typeof window>"u"?"server://singlefetch/":window.location.origin):r;return s.pathname==="/"?s.pathname="_root.data":o&&se(s.pathname,o)==="/"?s.pathname=`${o.replace(/\/$/,"")}/_root.data`:s.pathname=`${s.pathname.replace(/\/$/,"")}.data`,s}function hh(){let r=q.useContext(Ga);return Ko(r,"You must render this element inside a <DataRouterContext.Provider> element"),r}function sp(){let r=q.useContext(vr);return Ko(r,"You must render this element inside a <DataRouterStateContext.Provider> element"),r}var Jo=q.createContext(void 0);Jo.displayName="FrameworkContext";function mh(){let r=q.useContext(Jo);return Ko(r,"You must render this element inside a <HydratedRouter> element"),r}function fp(r,o){let s=q.useContext(Jo),[c,d]=q.useState(!1),[b,y]=q.useState(!1),{onFocus:O,onBlur:p,onMouseEnter:h,onMouseLeave:R,onTouchStart:U}=o,M=q.useRef(null);q.useEffect(()=>{if(r==="render"&&y(!0),r==="viewport"){let _=N=>{N.forEach(Y=>{y(Y.isIntersecting)})},H=new IntersectionObserver(_,{threshold:.5});return M.current&&H.observe(M.current),()=>{H.disconnect()}}},[r]),q.useEffect(()=>{if(c){let _=setTimeout(()=>{y(!0)},100);return()=>{clearTimeout(_)}}},[c]);let B=()=>{d(!0)},T=()=>{d(!1),y(!1)};return s?r!=="intent"?[b,M,{}]:[b,M,{onFocus:Ql(O,B),onBlur:Ql(p,T),onMouseEnter:Ql(h,B),onMouseLeave:Ql(R,T),onTouchStart:Ql(U,B)}]:[!1,M,{}]}function Ql(r,o){return s=>{r&&r(s),s.defaultPrevented||o(s)}}function dp({page:r,...o}){let{router:s}=hh(),c=q.useMemo(()=>eh(s.routes,r,s.basename),[s.routes,r,s.basename]);return c?q.createElement(mp,{page:r,matches:c,...o}):null}function hp(r){let{manifest:o,routeModules:s}=mh(),[c,d]=q.useState([]);return q.useEffect(()=>{let b=!1;return lp(r,o,s).then(y=>{b||d(y)}),()=>{b=!0}},[r,o,s]),c}function mp({page:r,matches:o,...s}){let c=la(),{manifest:d,routeModules:b}=mh(),{basename:y}=hh(),{loaderData:O,matches:p}=sp(),h=q.useMemo(()=>Kd(r,o,p,d,c,"data"),[r,o,p,d,c]),R=q.useMemo(()=>Kd(r,o,p,d,c,"assets"),[r,o,p,d,c]),U=q.useMemo(()=>{if(r===c.pathname+c.search+c.hash)return[];let T=new Set,_=!1;if(o.forEach(N=>{var J;let Y=d.routes[N.route.id];!Y||!Y.hasLoader||(!h.some(rt=>rt.route.id===N.route.id)&&N.route.id in O&&((J=b[N.route.id])!=null&&J.shouldRevalidate)||Y.hasClientLoader?_=!0:T.add(N.route.id))}),T.size===0)return[];let H=cp(r,y);return _&&T.size>0&&H.searchParams.set("_routes",o.filter(N=>T.has(N.route.id)).map(N=>N.route.id).join(",")),[H.pathname+H.search]},[y,O,c,d,h,o,r,b]),M=q.useMemo(()=>ip(R,d),[R,d]),B=hp(R);return q.createElement(q.Fragment,null,U.map(T=>q.createElement("link",{key:T,rel:"prefetch",as:"fetch",href:T,...s})),M.map(T=>q.createElement("link",{key:T,rel:"modulepreload",href:T,...s})),B.map(({key:T,link:_})=>q.createElement("link",{key:T,..._})))}function bp(...r){return o=>{r.forEach(s=>{typeof s=="function"?s(o):s!=null&&(s.current=o)})}}var bh=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u";try{bh&&(window.__reactRouterVersion="7.3.0")}catch{}function pp({basename:r,children:o,window:s}){let c=q.useRef();c.current==null&&(c.current=eb({window:s,v5Compat:!0}));let d=c.current,[b,y]=q.useState({action:d.action,location:d.location}),O=q.useCallback(p=>{q.startTransition(()=>y(p))},[y]);return q.useLayoutEffect(()=>d.listen(O),[d,O]),q.createElement(Kb,{basename:r,children:o,location:b.location,navigationType:b.action,navigator:d})}var ph=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,vh=q.forwardRef(function({onClick:o,discover:s="render",prefetch:c="none",relative:d,reloadDocument:b,replace:y,state:O,target:p,to:h,preventScrollReset:R,viewTransition:U,...M},B){let{basename:T}=q.useContext(jn),_=typeof h=="string"&&ph.test(h),H,N=!1;if(typeof h=="string"&&_&&(H=h,bh))try{let L=new URL(window.location.href),et=h.startsWith("//")?new URL(L.protocol+h):new URL(h),Pt=se(et.pathname,T);et.origin===L.origin&&Pt!=null?h=Pt+et.search+et.hash:N=!0}catch{Ln(!1,`<Link to="${h}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`)}let Y=Db(h,{relative:d}),[J,rt,K]=fp(c,M),mt=xp(h,{replace:y,state:O,target:p,preventScrollReset:R,relative:d,viewTransition:U});function St(L){o&&o(L),L.defaultPrevented||mt(L)}let At=q.createElement("a",{...M,...K,href:H||Y,onClick:N||b?o:St,ref:bp(B,rt),target:p,"data-discover":!_&&s==="render"?"true":void 0});return J&&!_?q.createElement(q.Fragment,null,At,q.createElement(dp,{page:Y})):At});vh.displayName="Link";var vp=q.forwardRef(function({"aria-current":o="page",caseSensitive:s=!1,className:c="",end:d=!1,style:b,to:y,viewTransition:O,children:p,...h},R){let U=$l(y,{relative:h.relative}),M=la(),B=q.useContext(vr),{navigator:T,basename:_}=q.useContext(jn),H=B!=null&&Tp(U)&&O===!0,N=T.encodeLocation?T.encodeLocation(U).pathname:U.pathname,Y=M.pathname,J=B&&B.navigation&&B.navigation.location?B.navigation.location.pathname:null;s||(Y=Y.toLowerCase(),J=J?J.toLowerCase():null,N=N.toLowerCase()),J&&_&&(J=se(J,_)||J);const rt=N!=="/"&&N.endsWith("/")?N.length-1:N.length;let K=Y===N||!d&&Y.startsWith(N)&&Y.charAt(rt)==="/",mt=J!=null&&(J===N||!d&&J.startsWith(N)&&J.charAt(N.length)==="/"),St={isActive:K,isPending:mt,isTransitioning:H},At=K?o:void 0,L;typeof c=="function"?L=c(St):L=[c,K?"active":null,mt?"pending":null,H?"transitioning":null].filter(Boolean).join(" ");let et=typeof b=="function"?b(St):b;return q.createElement(vh,{...h,"aria-current":At,className:L,ref:R,style:et,to:y,viewTransition:O},typeof p=="function"?p(St):p)});vp.displayName="NavLink";var gp=q.forwardRef(({discover:r="render",fetcherKey:o,navigate:s,reloadDocument:c,replace:d,state:b,method:y=hr,action:O,onSubmit:p,relative:h,preventScrollReset:R,viewTransition:U,...M},B)=>{let T=Ep(),_=zp(O,{relative:h}),H=y.toLowerCase()==="get"?"get":"post",N=typeof O=="string"&&ph.test(O),Y=J=>{if(p&&p(J),J.defaultPrevented)return;J.preventDefault();let rt=J.nativeEvent.submitter,K=(rt==null?void 0:rt.getAttribute("formmethod"))||y;T(rt||J.currentTarget,{fetcherKey:o,method:K,navigate:s,replace:d,state:b,relative:h,preventScrollReset:R,viewTransition:U})};return q.createElement("form",{ref:B,method:H,action:_,onSubmit:c?p:Y,...M,"data-discover":!N&&r==="render"?"true":void 0})});gp.displayName="Form";function yp(r){return`${r} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`}function gh(r){let o=q.useContext(Ga);return Nt(o,yp(r)),o}function xp(r,{target:o,replace:s,state:c,preventScrollReset:d,relative:b,viewTransition:y}={}){let O=Mb(),p=la(),h=$l(r,{relative:b});return q.useCallback(R=>{if(Fb(R,o)){R.preventDefault();let U=s!==void 0?s:Vl(p)===Vl(h);O(r,{replace:U,state:c,preventScrollReset:d,relative:b,viewTransition:y})}},[p,O,h,s,c,o,r,d,b,y])}var Sp=0,Op=()=>`__${String(++Sp)}__`;function Ep(){let{router:r}=gh("useSubmit"),{basename:o}=q.useContext(jn),s=Xb();return q.useCallback(async(c,d={})=>{let{action:b,method:y,encType:O,formData:p,body:h}=np(c,o);if(d.navigate===!1){let R=d.fetcherKey||Op();await r.fetch(R,s,d.action||b,{preventScrollReset:d.preventScrollReset,formData:p,body:h,formMethod:d.method||y,formEncType:d.encType||O,flushSync:d.flushSync})}else await r.navigate(d.action||b,{preventScrollReset:d.preventScrollReset,formData:p,body:h,formMethod:d.method||y,formEncType:d.encType||O,replace:d.replace,state:d.state,fromRouteId:s,flushSync:d.flushSync,viewTransition:d.viewTransition})},[r,o,s])}function zp(r,{relative:o}={}){let{basename:s}=q.useContext(jn),c=q.useContext(Xn);Nt(c,"useFormAction must be used inside a RouteContext");let[d]=c.matches.slice(-1),b={...$l(r||".",{relative:o})},y=la();if(r==null){b.search=y.search;let O=new URLSearchParams(b.search),p=O.getAll("index");if(p.some(R=>R==="")){O.delete("index"),p.filter(U=>U).forEach(U=>O.append("index",U));let R=O.toString();b.search=R?`?${R}`:""}}return(!r||r===".")&&d.route.index&&(b.search=b.search?b.search.replace(/^\?/,"?index&"):"?index"),s!=="/"&&(b.pathname=b.pathname==="/"?s:ce([s,b.pathname])),Vl(b)}function Tp(r,o={}){let s=q.useContext(oh);Nt(s!=null,"`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?");let{basename:c}=gh("useViewTransitionState"),d=$l(r,{relative:o.relative});if(!s.isTransitioning)return!1;let b=se(s.currentLocation.pathname,c)||s.currentLocation.pathname,y=se(s.nextLocation.pathname,c)||s.nextLocation.pathname;return br(d.pathname,y)!=null||br(d.pathname,b)!=null}new TextEncoder;const Ap="modulepreload",_p=function(r){return"/"+r},Jd={},xr=function(o,s,c){let d=Promise.resolve();if(s&&s.length>0){document.getElementsByTagName("link");const y=document.querySelector("meta[property=csp-nonce]"),O=(y==null?void 0:y.nonce)||(y==null?void 0:y.getAttribute("nonce"));d=Promise.allSettled(s.map(p=>{if(p=_p(p),p in Jd)return;Jd[p]=!0;const h=p.endsWith(".css"),R=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${p}"]${R}`))return;const U=document.createElement("link");if(U.rel=h?"stylesheet":Ap,h||(U.as="script"),U.crossOrigin="",U.href=p,O&&U.setAttribute("nonce",O),document.head.appendChild(U),h)return new Promise((M,B)=>{U.addEventListener("load",M),U.addEventListener("error",()=>B(new Error(`Unable to preload CSS for ${p}`)))})}))}function b(y){const O=new Event("vite:preloadError",{cancelable:!0});if(O.payload=y,window.dispatchEvent(O),!O.defaultPrevented)throw y}return d.then(y=>{for(const O of y||[])O.status==="rejected"&&b(O.reason);return o().catch(b)})};function Bt(r,o){o===void 0&&(o={});var s=o.insertAt;if(r&&typeof document<"u"){var c=document.head||document.getElementsByTagName("head")[0],d=document.createElement("style");d.type="text/css",s==="top"&&c.firstChild?c.insertBefore(d,c.firstChild):c.appendChild(d),d.styleSheet?d.styleSheet.cssText=r:d.appendChild(document.createTextNode(r))}}Bt(`.react-loading-indicator-normalize,
[class$=rli-bounding-box] {
  font-size: 1rem;
  display: inline-block;
  box-sizing: border-box;
  text-align: unset;
  isolation: isolate;
}

.rli-d-i-b {
  display: inline-block;
}

.rli-text-format {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-weight: 600;
  width: 90%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.7em;
  letter-spacing: 0.5px;
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Avenir Next", "Avenir", "Segoe UI", "Lucida Grande", "Helvetica Neue", "Helvetica", "Fira Sans", "Roboto", "Noto", "Droid Sans", "Cantarell", "Oxygen", "Ubuntu", "Franklin Gothic Medium", "Century Gothic", "Liberation Sans", sans-serif;
}`);var Yn=function(){return Yn=Object.assign||function(r){for(var o,s=1,c=arguments.length;s<c;s++)for(var d in o=arguments[s])Object.prototype.hasOwnProperty.call(o,d)&&(r[d]=o[d]);return r},Yn.apply(this,arguments)};function pr(r){return pr=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(o){return typeof o}:function(o){return o&&typeof Symbol=="function"&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o},pr(r)}var Dp=/^\s+/,Mp=/\s+$/;function Z(r,o){if(o=o||{},(r=r||"")instanceof Z)return r;if(!(this instanceof Z))return new Z(r,o);var s=function(c){var d={r:0,g:0,b:0},b=1,y=null,O=null,p=null,h=!1,R=!1;typeof c=="string"&&(c=function(T){T=T.replace(Dp,"").replace(Mp,"").toLowerCase();var _,H=!1;if(Xo[T])T=Xo[T],H=!0;else if(T=="transparent")return{r:0,g:0,b:0,a:0,format:"name"};return(_=Mn.rgb.exec(T))?{r:_[1],g:_[2],b:_[3]}:(_=Mn.rgba.exec(T))?{r:_[1],g:_[2],b:_[3],a:_[4]}:(_=Mn.hsl.exec(T))?{h:_[1],s:_[2],l:_[3]}:(_=Mn.hsla.exec(T))?{h:_[1],s:_[2],l:_[3],a:_[4]}:(_=Mn.hsv.exec(T))?{h:_[1],s:_[2],v:_[3]}:(_=Mn.hsva.exec(T))?{h:_[1],s:_[2],v:_[3],a:_[4]}:(_=Mn.hex8.exec(T))?{r:dn(_[1]),g:dn(_[2]),b:dn(_[3]),a:th(_[4]),format:H?"name":"hex8"}:(_=Mn.hex6.exec(T))?{r:dn(_[1]),g:dn(_[2]),b:dn(_[3]),format:H?"name":"hex"}:(_=Mn.hex4.exec(T))?{r:dn(_[1]+""+_[1]),g:dn(_[2]+""+_[2]),b:dn(_[3]+""+_[3]),a:th(_[4]+""+_[4]),format:H?"name":"hex8"}:(_=Mn.hex3.exec(T))?{r:dn(_[1]+""+_[1]),g:dn(_[2]+""+_[2]),b:dn(_[3]+""+_[3]),format:H?"name":"hex"}:!1}(c)),pr(c)=="object"&&(oe(c.r)&&oe(c.g)&&oe(c.b)?(U=c.r,M=c.g,B=c.b,d={r:255*Et(U,255),g:255*Et(M,255),b:255*Et(B,255)},h=!0,R=String(c.r).substr(-1)==="%"?"prgb":"rgb"):oe(c.h)&&oe(c.s)&&oe(c.v)?(y=Zl(c.s),O=Zl(c.v),d=function(T,_,H){T=6*Et(T,360),_=Et(_,100),H=Et(H,100);var N=Math.floor(T),Y=T-N,J=H*(1-_),rt=H*(1-Y*_),K=H*(1-(1-Y)*_),mt=N%6,St=[H,rt,J,J,K,H][mt],At=[K,H,H,rt,J,J][mt],L=[J,J,K,H,H,rt][mt];return{r:255*St,g:255*At,b:255*L}}(c.h,y,O),h=!0,R="hsv"):oe(c.h)&&oe(c.s)&&oe(c.l)&&(y=Zl(c.s),p=Zl(c.l),d=function(T,_,H){var N,Y,J;function rt(St,At,L){return L<0&&(L+=1),L>1&&(L-=1),L<1/6?St+6*(At-St)*L:L<.5?At:L<2/3?St+(At-St)*(2/3-L)*6:St}if(T=Et(T,360),_=Et(_,100),H=Et(H,100),_===0)N=Y=J=H;else{var K=H<.5?H*(1+_):H+_-H*_,mt=2*H-K;N=rt(mt,K,T+1/3),Y=rt(mt,K,T),J=rt(mt,K,T-1/3)}return{r:255*N,g:255*Y,b:255*J}}(c.h,y,p),h=!0,R="hsl"),c.hasOwnProperty("a")&&(b=c.a));var U,M,B;return b=yh(b),{ok:h,format:c.format||R,r:Math.min(255,Math.max(d.r,0)),g:Math.min(255,Math.max(d.g,0)),b:Math.min(255,Math.max(d.b,0)),a:b}}(r);this._originalInput=r,this._r=s.r,this._g=s.g,this._b=s.b,this._a=s.a,this._roundA=Math.round(100*this._a)/100,this._format=o.format||s.format,this._gradientType=o.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=s.ok}function $d(r,o,s){r=Et(r,255),o=Et(o,255),s=Et(s,255);var c,d,b=Math.max(r,o,s),y=Math.min(r,o,s),O=(b+y)/2;if(b==y)c=d=0;else{var p=b-y;switch(d=O>.5?p/(2-b-y):p/(b+y),b){case r:c=(o-s)/p+(o<s?6:0);break;case o:c=(s-r)/p+2;break;case s:c=(r-o)/p+4}c/=6}return{h:c,s:d,l:O}}function Pd(r,o,s){r=Et(r,255),o=Et(o,255),s=Et(s,255);var c,d,b=Math.max(r,o,s),y=Math.min(r,o,s),O=b,p=b-y;if(d=b===0?0:p/b,b==y)c=0;else{switch(b){case r:c=(o-s)/p+(o<s?6:0);break;case o:c=(s-r)/p+2;break;case s:c=(r-o)/p+4}c/=6}return{h:c,s:d,v:O}}function Wd(r,o,s,c){var d=[Rn(Math.round(r).toString(16)),Rn(Math.round(o).toString(16)),Rn(Math.round(s).toString(16))];return c&&d[0].charAt(0)==d[0].charAt(1)&&d[1].charAt(0)==d[1].charAt(1)&&d[2].charAt(0)==d[2].charAt(1)?d[0].charAt(0)+d[1].charAt(0)+d[2].charAt(0):d.join("")}function Fd(r,o,s,c){return[Rn(xh(c)),Rn(Math.round(r).toString(16)),Rn(Math.round(o).toString(16)),Rn(Math.round(s).toString(16))].join("")}function Rp(r,o){o=o===0?0:o||10;var s=Z(r).toHsl();return s.s-=o/100,s.s=Sr(s.s),Z(s)}function qp(r,o){o=o===0?0:o||10;var s=Z(r).toHsl();return s.s+=o/100,s.s=Sr(s.s),Z(s)}function kp(r){return Z(r).desaturate(100)}function Up(r,o){o=o===0?0:o||10;var s=Z(r).toHsl();return s.l+=o/100,s.l=Sr(s.l),Z(s)}function Cp(r,o){o=o===0?0:o||10;var s=Z(r).toRgb();return s.r=Math.max(0,Math.min(255,s.r-Math.round(-o/100*255))),s.g=Math.max(0,Math.min(255,s.g-Math.round(-o/100*255))),s.b=Math.max(0,Math.min(255,s.b-Math.round(-o/100*255))),Z(s)}function Hp(r,o){o=o===0?0:o||10;var s=Z(r).toHsl();return s.l-=o/100,s.l=Sr(s.l),Z(s)}function wp(r,o){var s=Z(r).toHsl(),c=(s.h+o)%360;return s.h=c<0?360+c:c,Z(s)}function Np(r){var o=Z(r).toHsl();return o.h=(o.h+180)%360,Z(o)}function Id(r,o){if(isNaN(o)||o<=0)throw new Error("Argument to polyad must be a positive number");for(var s=Z(r).toHsl(),c=[Z(r)],d=360/o,b=1;b<o;b++)c.push(Z({h:(s.h+b*d)%360,s:s.s,l:s.l}));return c}function Bp(r){var o=Z(r).toHsl(),s=o.h;return[Z(r),Z({h:(s+72)%360,s:o.s,l:o.l}),Z({h:(s+216)%360,s:o.s,l:o.l})]}function Yp(r,o,s){o=o||6,s=s||30;var c=Z(r).toHsl(),d=360/s,b=[Z(r)];for(c.h=(c.h-(d*o>>1)+720)%360;--o;)c.h=(c.h+d)%360,b.push(Z(c));return b}function Lp(r,o){o=o||6;for(var s=Z(r).toHsv(),c=s.h,d=s.s,b=s.v,y=[],O=1/o;o--;)y.push(Z({h:c,s:d,v:b})),b=(b+O)%1;return y}Z.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var r=this.toRgb();return(299*r.r+587*r.g+114*r.b)/1e3},getLuminance:function(){var r,o,s,c=this.toRgb();return r=c.r/255,o=c.g/255,s=c.b/255,.2126*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.7152*(o<=.03928?o/12.92:Math.pow((o+.055)/1.055,2.4))+.0722*(s<=.03928?s/12.92:Math.pow((s+.055)/1.055,2.4))},setAlpha:function(r){return this._a=yh(r),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var r=Pd(this._r,this._g,this._b);return{h:360*r.h,s:r.s,v:r.v,a:this._a}},toHsvString:function(){var r=Pd(this._r,this._g,this._b),o=Math.round(360*r.h),s=Math.round(100*r.s),c=Math.round(100*r.v);return this._a==1?"hsv("+o+", "+s+"%, "+c+"%)":"hsva("+o+", "+s+"%, "+c+"%, "+this._roundA+")"},toHsl:function(){var r=$d(this._r,this._g,this._b);return{h:360*r.h,s:r.s,l:r.l,a:this._a}},toHslString:function(){var r=$d(this._r,this._g,this._b),o=Math.round(360*r.h),s=Math.round(100*r.s),c=Math.round(100*r.l);return this._a==1?"hsl("+o+", "+s+"%, "+c+"%)":"hsla("+o+", "+s+"%, "+c+"%, "+this._roundA+")"},toHex:function(r){return Wd(this._r,this._g,this._b,r)},toHexString:function(r){return"#"+this.toHex(r)},toHex8:function(r){return function(o,s,c,d,b){var y=[Rn(Math.round(o).toString(16)),Rn(Math.round(s).toString(16)),Rn(Math.round(c).toString(16)),Rn(xh(d))];return b&&y[0].charAt(0)==y[0].charAt(1)&&y[1].charAt(0)==y[1].charAt(1)&&y[2].charAt(0)==y[2].charAt(1)&&y[3].charAt(0)==y[3].charAt(1)?y[0].charAt(0)+y[1].charAt(0)+y[2].charAt(0)+y[3].charAt(0):y.join("")}(this._r,this._g,this._b,this._a,r)},toHex8String:function(r){return"#"+this.toHex8(r)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return this._a==1?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*Et(this._r,255))+"%",g:Math.round(100*Et(this._g,255))+"%",b:Math.round(100*Et(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return this._a==1?"rgb("+Math.round(100*Et(this._r,255))+"%, "+Math.round(100*Et(this._g,255))+"%, "+Math.round(100*Et(this._b,255))+"%)":"rgba("+Math.round(100*Et(this._r,255))+"%, "+Math.round(100*Et(this._g,255))+"%, "+Math.round(100*Et(this._b,255))+"%, "+this._roundA+")"},toName:function(){return this._a===0?"transparent":!(this._a<1)&&(jp[Wd(this._r,this._g,this._b,!0)]||!1)},toFilter:function(r){var o="#"+Fd(this._r,this._g,this._b,this._a),s=o,c=this._gradientType?"GradientType = 1, ":"";if(r){var d=Z(r);s="#"+Fd(d._r,d._g,d._b,d._a)}return"progid:DXImageTransform.Microsoft.gradient("+c+"startColorstr="+o+",endColorstr="+s+")"},toString:function(r){var o=!!r;r=r||this._format;var s=!1,c=this._a<1&&this._a>=0;return o||!c||r!=="hex"&&r!=="hex6"&&r!=="hex3"&&r!=="hex4"&&r!=="hex8"&&r!=="name"?(r==="rgb"&&(s=this.toRgbString()),r==="prgb"&&(s=this.toPercentageRgbString()),r!=="hex"&&r!=="hex6"||(s=this.toHexString()),r==="hex3"&&(s=this.toHexString(!0)),r==="hex4"&&(s=this.toHex8String(!0)),r==="hex8"&&(s=this.toHex8String()),r==="name"&&(s=this.toName()),r==="hsl"&&(s=this.toHslString()),r==="hsv"&&(s=this.toHsvString()),s||this.toHexString()):r==="name"&&this._a===0?this.toName():this.toRgbString()},clone:function(){return Z(this.toString())},_applyModification:function(r,o){var s=r.apply(null,[this].concat([].slice.call(o)));return this._r=s._r,this._g=s._g,this._b=s._b,this.setAlpha(s._a),this},lighten:function(){return this._applyModification(Up,arguments)},brighten:function(){return this._applyModification(Cp,arguments)},darken:function(){return this._applyModification(Hp,arguments)},desaturate:function(){return this._applyModification(Rp,arguments)},saturate:function(){return this._applyModification(qp,arguments)},greyscale:function(){return this._applyModification(kp,arguments)},spin:function(){return this._applyModification(wp,arguments)},_applyCombination:function(r,o){return r.apply(null,[this].concat([].slice.call(o)))},analogous:function(){return this._applyCombination(Yp,arguments)},complement:function(){return this._applyCombination(Np,arguments)},monochromatic:function(){return this._applyCombination(Lp,arguments)},splitcomplement:function(){return this._applyCombination(Bp,arguments)},triad:function(){return this._applyCombination(Id,[3])},tetrad:function(){return this._applyCombination(Id,[4])}},Z.fromRatio=function(r,o){if(pr(r)=="object"){var s={};for(var c in r)r.hasOwnProperty(c)&&(s[c]=c==="a"?r[c]:Zl(r[c]));r=s}return Z(r,o)},Z.equals=function(r,o){return!(!r||!o)&&Z(r).toRgbString()==Z(o).toRgbString()},Z.random=function(){return Z.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},Z.mix=function(r,o,s){s=s===0?0:s||50;var c=Z(r).toRgb(),d=Z(o).toRgb(),b=s/100;return Z({r:(d.r-c.r)*b+c.r,g:(d.g-c.g)*b+c.g,b:(d.b-c.b)*b+c.b,a:(d.a-c.a)*b+c.a})},Z.readability=function(r,o){var s=Z(r),c=Z(o);return(Math.max(s.getLuminance(),c.getLuminance())+.05)/(Math.min(s.getLuminance(),c.getLuminance())+.05)},Z.isReadable=function(r,o,s){var c,d,b=Z.readability(r,o);switch(d=!1,(c=function(y){var O,p;return O=((y=y||{level:"AA",size:"small"}).level||"AA").toUpperCase(),p=(y.size||"small").toLowerCase(),O!=="AA"&&O!=="AAA"&&(O="AA"),p!=="small"&&p!=="large"&&(p="small"),{level:O,size:p}}(s)).level+c.size){case"AAsmall":case"AAAlarge":d=b>=4.5;break;case"AAlarge":d=b>=3;break;case"AAAsmall":d=b>=7}return d},Z.mostReadable=function(r,o,s){var c,d,b,y,O=null,p=0;d=(s=s||{}).includeFallbackColors,b=s.level,y=s.size;for(var h=0;h<o.length;h++)(c=Z.readability(r,o[h]))>p&&(p=c,O=Z(o[h]));return Z.isReadable(r,O,{level:b,size:y})||!d?O:(s.includeFallbackColors=!1,Z.mostReadable(r,["#fff","#000"],s))};var Xo=Z.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},jp=Z.hexNames=function(r){var o={};for(var s in r)r.hasOwnProperty(s)&&(o[r[s]]=s);return o}(Xo);function yh(r){return r=parseFloat(r),(isNaN(r)||r<0||r>1)&&(r=1),r}function Et(r,o){(function(c){return typeof c=="string"&&c.indexOf(".")!=-1&&parseFloat(c)===1})(r)&&(r="100%");var s=function(c){return typeof c=="string"&&c.indexOf("%")!=-1}(r);return r=Math.min(o,Math.max(0,parseFloat(r))),s&&(r=parseInt(r*o,10)/100),Math.abs(r-o)<1e-6?1:r%o/parseFloat(o)}function Sr(r){return Math.min(1,Math.max(0,r))}function dn(r){return parseInt(r,16)}function Rn(r){return r.length==1?"0"+r:""+r}function Zl(r){return r<=1&&(r=100*r+"%"),r}function xh(r){return Math.round(255*parseFloat(r)).toString(16)}function th(r){return dn(r)/255}var He,fr,dr,Mn=(fr="[\\s|\\(]+("+(He="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+He+")[,|\\s]+("+He+")\\s*\\)?",dr="[\\s|\\(]+("+He+")[,|\\s]+("+He+")[,|\\s]+("+He+")[,|\\s]+("+He+")\\s*\\)?",{CSS_UNIT:new RegExp(He),rgb:new RegExp("rgb"+fr),rgba:new RegExp("rgba"+dr),hsl:new RegExp("hsl"+fr),hsla:new RegExp("hsla"+dr),hsv:new RegExp("hsv"+fr),hsva:new RegExp("hsva"+dr),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function oe(r){return!!Mn.CSS_UNIT.exec(r)}var Xp=function(r,o){var s=(typeof r=="string"?parseInt(r):r)||0;if(s>=-5&&s<=5){var c=s,d=parseFloat(o),b=d+c*(d/5)*-1;return(b==0||b<=Number.EPSILON)&&(b=.1),{animationPeriod:b+"s"}}return{animationPeriod:o}},Gp=function(r,o){var s=r||{},c="";switch(o){case"small":c="12px";break;case"medium":c="16px";break;case"large":c="20px";break;default:c=void 0}var d={};if(s.fontSize){var b=s.fontSize;d=function(y,O){var p={};for(var h in y)Object.prototype.hasOwnProperty.call(y,h)&&O.indexOf(h)<0&&(p[h]=y[h]);if(y!=null&&typeof Object.getOwnPropertySymbols=="function"){var R=0;for(h=Object.getOwnPropertySymbols(y);R<h.length;R++)O.indexOf(h[R])<0&&Object.prototype.propertyIsEnumerable.call(y,h[R])&&(p[h[R]]=y[h[R]])}return p}(s,["fontSize"]),c=b}return{fontSize:c,styles:d}},Qp={color:"currentColor",mixBlendMode:"difference",width:"unset",display:"block",paddingTop:"2px"},Zp=function(r){var o=r.className,s=r.text,c=r.textColor,d=r.staticText,b=r.style;return s?Xa.createElement("span",{className:"rli-d-i-b rli-text-format ".concat(o||"").trim(),style:Yn(Yn(Yn({},d&&Qp),c&&{color:c,mixBlendMode:"unset"}),b&&b)},typeof s=="string"&&s.length?s:"loading"):null},Sh="rgb(50, 205, 50)";function Vp(r,o){o===void 0&&(o=0);var s=[];return function c(d,b){return b===void 0&&(b=0),s.push.apply(s,d),s.length<b&&c(s,b),s.slice(0,b)}(r,o)}Bt(`.atom-rli-bounding-box {
  --atom-phase1-rgb: 50, 205, 50;
  color: rgba(var(--atom-phase1-rgb), 1);
  font-size: 16px;
  position: relative;
  text-align: unset;
  isolation: isolate;
}
.atom-rli-bounding-box .atom-indicator {
  width: 6em;
  height: 6em;
  position: relative;
  perspective: 6em;
  overflow: hidden;
  color: rgba(var(--atom-phase1-rgb), 1);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator::after, .atom-rli-bounding-box .atom-indicator::before {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 0.48em;
  height: 0.48em;
  margin: auto;
  border-radius: 50%;
  background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6de;
}
.atom-rli-bounding-box .atom-indicator::before {
  filter: drop-shadow(0px 0px 0.0625em currentColor);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit {
  color: rgba(var(--atom-phase1-rgb), 0.85);
  border: 0;
  border-left: 0.4em solid currentColor;
  box-sizing: border-box;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  width: 4.8em;
  height: 4.8em;
  background-color: transparent;
  border-radius: 50%;
  transform-style: preserve-3d;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6ex, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6g6;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  color: rgba(var(--atom-phase1-rgb), 0.18);
  animation: calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6h4;
  border: 0.125em solid currentColor;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit::before {
  content: "";
  width: 0.192em;
  height: 0.192em;
  position: absolute;
  border-radius: 50%;
  top: -0.096em;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0 auto;
  color: rgba(var(--atom-phase1-rgb), 1);
  box-shadow: 0px 0px 0.0625em 0.0625em currentColor, 0px 0px 0.0625em 0.125em currentColor;
  background-color: currentColor;
  transform: rotateY(-70deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6e7, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6fj;
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(1) {
  --orbit-vector-factor: -1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(2) {
  --orbit-vector-factor: 1;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3) {
  --orbit-vector-factor: 0;
  transform: rotateY(65deg) rotateX(calc(54deg * var(--orbit-vector-factor)));
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-indicator .electron-orbit:nth-of-type(3)::before {
  animation-delay: calc(var(--rli-animation-duration, 1s) * 0.5 * -1), calc(var(--rli-animation-duration, 1s) * 4 * -1);
}
.atom-rli-bounding-box .atom-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --atom-phase1-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase2-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase3-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --atom-phase4-rgb {
  syntax: "<number>#";
  inherits: true;
  initial-value: 50, 205, 50;
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6ex {
  from {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(0deg);
  }
  to {
    transform: rotateY(70deg) rotateX(calc(54deg * var(--orbit-vector-factor))) rotateZ(360deg);
  }
}
@keyframes u1qz6e7 {
  from {
    transform: rotateY(-70deg) rotateX(0deg);
  }
  to {
    transform: rotateY(-70deg) rotateX(-360deg);
  }
}
@keyframes u1qz6de {
  100%, 0% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  20% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase1-rgb), 0.1), rgba(var(--atom-phase1-rgb), 0.3) 37%, rgba(var(--atom-phase1-rgb), 1) 100%);
  }
  25% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  45% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  50% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  70% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  75% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
  95% {
    background-image: radial-gradient(circle at 35% 15%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.1), rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.3) 37%, rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1) 100%);
  }
}
@keyframes u1qz6fj {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 1);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 1);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 1);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 1);
  }
}
@keyframes u1qz6g6 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.85);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.85);
  }
}
@keyframes u1qz6h4 {
  100%, 0% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  20% {
    color: rgba(var(--atom-phase1-rgb), 0.18);
  }
  25% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  45% {
    color: rgba(var(--atom-phase2-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  50% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  70% {
    color: rgba(var(--atom-phase3-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  75% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
  95% {
    color: rgba(var(--atom-phase4-rgb, var(--atom-phase1-rgb)), 0.18);
  }
}`);Z(Sh).toRgb();Array.from({length:4},function(r,o){return"--atom-phase".concat(o+1,"-rgb")});Bt(`.commet-rli-bounding-box {
  --commet-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  width: 6.85em;
  height: 6.85em;
  overflow: hidden;
  display: inline-block;
  box-sizing: border-box;
  position: relative;
  isolation: isolate;
}
.commet-rli-bounding-box .commet-indicator {
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  box-sizing: border-box;
  width: 6em;
  height: 6em;
  color: var(--commet-phase1-color);
  display: inline-block;
  isolation: isolate;
  position: absolute;
  z-index: 0;
  animation: calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite u1qz6k3;
}
.commet-rli-bounding-box .commet-indicator .commet-box {
  position: absolute;
  display: inline-block;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  animation: u1qz6j2 var(--rli-animation-duration, 1.2s) var(--rli-animation-function, cubic-bezier(0.08, 0.03, 0.91, 0.93)) infinite;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(1) {
  width: 100%;
  height: 100%;
  animation-direction: normal;
}
.commet-rli-bounding-box .commet-indicator .commet-box:nth-of-type(2) {
  width: 70%;
  height: 70%;
  animation-direction: reverse;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  display: inline-block;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commetball-box::before {
  content: "";
  width: 0.5em;
  height: 0.5em;
  border-radius: 50%;
  background-color: currentColor;
  position: absolute;
  top: -0.125em;
  left: 50%;
  transform: translateX(-50%);
  box-shadow: 0 0 0.2em 0em currentColor, 0 0 0.6em 0em currentColor;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  box-sizing: border-box;
  border-style: solid;
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail1 {
  border-color: currentColor transparent transparent currentColor;
  border-width: 0.25em 0.25em 0 0;
  transform: rotateZ(-45deg);
}
.commet-rli-bounding-box .commet-indicator .commet-box .commet-trail.trail2 {
  border-color: currentColor currentColor transparent transparent;
  border-width: 0.25em 0 0 0.25em;
  transform: rotateZ(45deg);
}
.commet-rli-bounding-box .commet-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--commet-phase1-color);
}

@property --commet-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --commet-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6j2 {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6k3 {
  100%, 0% {
    color: var(--commet-phase1-color);
  }
  20% {
    color: var(--commet-phase1-color);
  }
  25% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  45% {
    color: var(--commet-phase2-color, var(--commet-phase1-color));
  }
  50% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  70% {
    color: var(--commet-phase3-color, var(--commet-phase1-color));
  }
  75% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
  95% {
    color: var(--commet-phase4-color, var(--commet-phase1-color));
  }
}`);Array.from({length:4},function(r,o){return"--commet-phase".concat(o+1,"-color")});Bt(`.OP-annulus-rli-bounding-box {
  --OP-annulus-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .whirl {
  animation: u1qz6pz calc(var(--rli-animation-duration, 1.5s) * 1.33) linear infinite;
  height: 100%;
  transform-origin: center center;
  width: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
.OP-annulus-rli-bounding-box .OP-annulus-indicator .path {
  stroke-dasharray: 1, 125;
  stroke-dashoffset: 0;
  animation: var(--rli-animation-duration, 1.5s) var(--rli-animation-function, ease-in-out) infinite u1qz6r6, calc(var(--rli-animation-duration, 1.5s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6sy;
  stroke-linecap: round;
}
.OP-annulus-rli-bounding-box .OP-annulus-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6pz {
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6r6 {
  0% {
    stroke-dasharray: 1, 125;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 98, 125;
    stroke-dashoffset: -124px;
  }
}
@keyframes u1qz6sy {
  100%, 0% {
    stroke: var(--OP-annulus-phase1-color);
  }
  22% {
    stroke: var(--OP-annulus-phase1-color);
  }
  25% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  42% {
    stroke: var(--OP-annulus-phase2-color, var(--OP-annulus-phase1-color));
  }
  50% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  72% {
    stroke: var(--OP-annulus-phase3-color, var(--OP-annulus-phase1-color));
  }
  75% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
  97% {
    stroke: var(--OP-annulus-phase4-color, var(--OP-annulus-phase1-color));
  }
}`);Array.from({length:4},function(r,o){return"--OP-annulus-phase".concat(o+1,"-color")});function Lo(r){return r&&r.Math===Math&&r}Bt(`.OP-dotted-rli-bounding-box {
  --OP-dotted-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-dotted-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .OP-dotted-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder .dot {
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: currentColor;
  border-radius: 50%;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) infinite u1qz6qy, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6s0;
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) {
  transform: rotate(0deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(1) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 12 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) {
  transform: rotate(30deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(2) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 11 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) {
  transform: rotate(60deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(3) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 10 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) {
  transform: rotate(90deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(4) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 9 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) {
  transform: rotate(120deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(5) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 8 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) {
  transform: rotate(150deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(6) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 7 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) {
  transform: rotate(180deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(7) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 6 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) {
  transform: rotate(210deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(8) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 5 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) {
  transform: rotate(240deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(9) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 4 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) {
  transform: rotate(270deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(10) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 3 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) {
  transform: rotate(300deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(11) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 2 * -1);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) {
  transform: rotate(330deg);
}
.OP-dotted-rli-bounding-box .OP-dotted-indicator .dot-shape-holder:nth-of-type(12) .dot {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) / 12 * 1 * -1);
}

@property --OP-dotted-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-dotted-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6qy {
  0%, 39%, 100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
}
@keyframes u1qz6s0 {
  100%, 0% {
    background-color: var(--OP-dotted-phase1-color);
  }
  22% {
    background-color: var(--OP-dotted-phase1-color);
  }
  25% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  47% {
    background-color: var(--OP-dotted-phase2-color, var(--OP-dotted-phase1-color));
  }
  50% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  72% {
    background-color: var(--OP-dotted-phase3-color, var(--OP-dotted-phase1-color));
  }
  75% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
  97% {
    background-color: var(--OP-dotted-phase4-color, var(--OP-dotted-phase1-color));
  }
}`);Lo(typeof window=="object"&&window)||Lo(typeof self=="object"&&self)||Lo(typeof global=="object"&&global)||function(){return this}()||Function("return this")();Array.from({length:4},function(r,o){return"--OP-dotted-phase".concat(o+1,"-color")});Bt(`.OP-spokes-rli-bounding-box {
  --OP-spokes-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  position: relative;
  color: var(--OP-spokes-phase1-color);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator {
  width: 4.8em;
  height: 4.8em;
  display: block;
  position: relative;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke {
  position: absolute;
  height: 1.2em;
  width: 0.4em;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto auto auto 50%;
  background-color: var(--OP-spokes-phase1-color);
  border-radius: 0.24em;
  opacity: 0;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) backwards infinite u1qz6sz, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) infinite u1qz6t3;
  transform-origin: left center;
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(1) {
  transform: rotate(calc(0 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(11 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(2) {
  transform: rotate(calc(1 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(10 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(3) {
  transform: rotate(calc(2 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(9 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(4) {
  transform: rotate(calc(3 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(8 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(5) {
  transform: rotate(calc(4 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(7 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(6) {
  transform: rotate(calc(5 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(6 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(7) {
  transform: rotate(calc(6 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(5 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(8) {
  transform: rotate(calc(7 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(4 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(9) {
  transform: rotate(calc(8 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(3 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(10) {
  transform: rotate(calc(9 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(2 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(11) {
  transform: rotate(calc(10 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(1 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator .spoke:nth-of-type(12) {
  transform: rotate(calc(11 * 360deg / 12)) translate(-50%, -1.56em);
  animation-delay: calc(0 * var(--rli-animation-duration, 1.2s) / 12 * -1);
}
.OP-spokes-rli-bounding-box .OP-spokes-indicator-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: var(--OP-spokes-phase1-color);
  z-index: -2;
}

@property --OP-spokes-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-spokes-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6sz {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
@keyframes u1qz6t3 {
  100%, 0% {
    background-color: var(--OP-spokes-phase1-color);
  }
  22% {
    background-color: var(--OP-spokes-phase1-color);
  }
  25% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  42% {
    background-color: var(--OP-spokes-phase2-color, var(--OP-spokes-phase1-color));
  }
  50% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  72% {
    background-color: var(--OP-spokes-phase3-color, var(--OP-spokes-phase1-color));
  }
  75% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
  97% {
    background-color: var(--OP-spokes-phase4-color, var(--OP-spokes-phase1-color));
  }
}`);Array.from({length:4},function(r,o){return"--OP-spokes-phase".concat(o+1,"-color")});Bt(`.OP-annulus-dual-sectors-rli-bounding-box {
  --OP-annulus-dual-sectors-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  display: inline-block;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator {
  width: 5em;
  height: 5em;
  display: inline-block;
  position: relative;
  z-index: 0;
  color: var(--OP-annulus-dual-sectors-phase1-color);
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .annulus-sectors {
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border-width: 0.34em;
  border-style: solid;
  border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent var(--OP-annulus-dual-sectors-phase1-color) transparent;
  background-color: transparent;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) infinite u1qz6t5, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) infinite u1qz6uw;
}
.OP-annulus-dual-sectors-rli-bounding-box .OP-annulus-dual-sectors-indicator .OP-annulus-dual-sectors-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-dual-sectors-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-dual-sectors-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6t5 {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
@keyframes u1qz6uw {
  100%, 0% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  20% {
    border-color: var(--OP-annulus-dual-sectors-phase1-color) transparent;
  }
  25% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  45% {
    border-color: var(--OP-annulus-dual-sectors-phase2-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  50% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  70% {
    border-color: var(--OP-annulus-dual-sectors-phase3-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  75% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
  95% {
    border-color: var(--OP-annulus-dual-sectors-phase4-color, var(--OP-annulus-dual-sectors-phase1-color)) transparent;
  }
}`);Array.from({length:4},function(r,o){return"--OP-annulus-dual-sectors-phase".concat(o+1,"-color")});Bt(`.OP-annulus-sector-track-rli-bounding-box {
  --OP-annulus-track-phase1-color: rgba(50, 205, 50, 0.22);
  --OP-annulus-sector-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator {
  width: 5em;
  height: 5em;
  color: var(--OP-annulus-sector-phase1-color);
  display: inline-block;
  position: relative;
  z-index: 0;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .annulus-track-ring {
  width: 100%;
  height: 100%;
  border-width: 0.34em;
  border-style: solid;
  border-radius: 50%;
  box-sizing: border-box;
  border-color: var(--OP-annulus-track-phase1-color);
  border-top-color: var(--OP-annulus-sector-phase1-color);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, linear) infinite u1qz6tq, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, linear) infinite u1qz6v8;
}
.OP-annulus-sector-track-rli-bounding-box .OP-annulus-sector-track-indicator .OP-annulus-sector-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --OP-annulus-track-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-track-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgba(50, 205, 50, 0.22);
}
@property --OP-annulus-sector-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --OP-annulus-sector-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6tq {
  to {
    transform: rotate(1turn);
  }
}
@keyframes u1qz6v8 {
  100%, 0% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  18% {
    border-color: var(--OP-annulus-track-phase1-color);
    border-top-color: var(--OP-annulus-sector-phase1-color);
  }
  25% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  43% {
    border-color: var(--OP-annulus-track-phase2-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase2-color, var(--OP-annulus-sector-phase1-color));
  }
  50% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  68% {
    border-color: var(--OP-annulus-track-phase3-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase3-color, var(--OP-annulus-sector-phase1-color));
  }
  75% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
  93% {
    border-color: var(--OP-annulus-track-phase4-color, var(--OP-annulus-track-phase1-color));
    border-top-color: var(--OP-annulus-sector-phase4-color, var(--OP-annulus-sector-phase1-color));
  }
}`);Array.from({length:4},function(r,o){return["--OP-annulus-track-phase".concat(o+1,"-color"),"--OP-annulus-sector-phase".concat(o+1,"-color")]});Bt(`.foursquare-rli-bounding-box {
  --four-square-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  box-sizing: border-box;
  color: var(--four-square-phase1-color);
  display: inline-block;
  overflow: hidden;
}
.foursquare-rli-bounding-box .foursquare-indicator {
  height: 5.3033008589em;
  width: 5.3033008589em;
  position: relative;
  display: block;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container {
  position: absolute;
  z-index: 0;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: auto;
  height: 2.5em;
  width: 2.5em;
  color: inherit;
  will-change: color, width, height;
  transform: rotate(45deg);
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6cv, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) infinite u1qz6e3;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square {
  position: absolute;
  width: 1.25em;
  height: 1.25em;
  border-radius: 0.1875em;
  background-color: currentColor;
  animation: u1qz6cr var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0.05, 0.28, 0.79, 0.98)) both infinite;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square1 {
  top: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square2 {
  top: 0;
  right: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square3 {
  bottom: 0;
  left: 0;
}
.foursquare-rli-bounding-box .foursquare-indicator .squares-container .square.square4 {
  bottom: 0;
  right: 0;
}

@property --four-square-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --four-square-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6cv {
  0% {
    width: 2.5em;
    height: 2.5em;
  }
  10% {
    width: 2.5em;
    height: 2.5em;
  }
  50% {
    width: 3.75em;
    height: 3.75em;
  }
  90% {
    width: 2.5em;
    height: 2.5em;
  }
  100% {
    width: 2.5em;
    height: 2.5em;
  }
}
@keyframes u1qz6cr {
  0% {
    transform: rotateZ(0deg);
  }
  10% {
    transform: rotateZ(0deg);
  }
  50% {
    transform: rotateZ(90deg);
  }
  90% {
    transform: rotateZ(90deg);
  }
  100% {
    transform: rotateZ(90deg);
  }
}
@keyframes u1qz6e3 {
  100%, 0% {
    color: var(--four-square-phase1-color);
  }
  20% {
    color: var(--four-square-phase1-color);
  }
  25% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  45% {
    color: var(--four-square-phase2-color, var(--four-square-phase1-color));
  }
  50% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  70% {
    color: var(--four-square-phase3-color, var(--four-square-phase1-color));
  }
  75% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
  95% {
    color: var(--four-square-phase4-color, var(--four-square-phase1-color));
  }
}`);Array.from({length:4},function(r,o){return"--four-square-phase".concat(o+1,"-color")});Bt(`.mosaic-rli-bounding-box {
  --mosaic-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  color: var(--mosaic-phase1-color);
}
.mosaic-rli-bounding-box .mosaic-indicator {
  width: 5em;
  height: 5em;
  color: currentColor;
  display: grid;
  gap: 0.125em;
  grid-template-columns: repeat(3, 1fr);
  grid-template-areas: "a b c" "d e f" "g h i";
  position: relative;
  z-index: 0;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 105%;
  left: 50%;
  transform: translateX(-50%);
  z-index: -2;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube {
  background-color: var(--mosaic-phase1-color);
  animation-name: u1qz6bl, u1qz6c9;
  animation-duration: var(--rli-animation-duration, 1.5s), calc(var(--rli-animation-duration, 1.5s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in-out);
  animation-iteration-count: infinite;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube1 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
  grid-area: a;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube2 {
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
  grid-area: b;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube3 {
  grid-area: c;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 4);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube4 {
  grid-area: d;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube5 {
  grid-area: e;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube6 {
  grid-area: f;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 3);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube7 {
  grid-area: g;
  animation-delay: 0s;
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube8 {
  grid-area: h;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 1);
}
.mosaic-rli-bounding-box .mosaic-indicator .mosaic-cube9 {
  grid-area: i;
  animation-delay: calc(var(--mosaic-skip-interval, 0.1s) * 2);
}

@property --mosaic-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --mosaic-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.5s;
}
@keyframes u1qz6bl {
  0%, 60%, 100% {
    transform: scale3D(1, 1, 1);
  }
  30% {
    transform: scale3D(0, 0, 1);
  }
}
@keyframes u1qz6c9 {
  100%, 0% {
    background-color: var(--mosaic-phase1-color);
  }
  25% {
    background-color: var(--mosaic-phase2-color, var(--mosaic-phase1-color));
  }
  50% {
    background-color: var(--mosaic-phase3-color, var(--mosaic-phase1-color));
  }
  75% {
    background-color: var(--mosaic-phase4-color, var(--mosaic-phase1-color));
  }
}`);Array.from({length:4},function(r,o){return"--mosaic-phase".concat(o+1,"-color")});Bt(`.riple-rli-bounding-box {
  --riple-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--riple-phase1-color);
}
.riple-rli-bounding-box .riple-indicator {
  display: inline-block;
  width: 5em;
  height: 5em;
  position: relative;
  z-index: 0;
}
.riple-rli-bounding-box .riple-indicator .riple-text {
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}
.riple-rli-bounding-box .riple-indicator .riple {
  --border-width: 0.25em;
  position: absolute;
  border: var(--border-width) solid var(--riple-phase1-color);
  opacity: 1;
  border-radius: 50%;
  will-change: top, right, left, bottom, border-color;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6mm, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, cubic-bezier(0, 0.2, 0.8, 1)) infinite u1qz6og;
}
.riple-rli-bounding-box .riple-indicator .riple:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 1s) / 2 * -1);
}

@property --riple-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --riple-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6mm {
  0% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  4.9% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 0;
  }
  5% {
    top: calc(50% - var(--border-width));
    left: calc(50% - var(--border-width));
    right: calc(50% - var(--border-width));
    bottom: calc(50% - var(--border-width));
    opacity: 1;
  }
  100% {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0;
  }
}
@keyframes u1qz6og {
  100%, 0% {
    border-color: var(--riple-phase1-color);
  }
  24.9% {
    border-color: var(--riple-phase1-color);
  }
  25% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  49.9% {
    border-color: var(--riple-phase2-color, var(--riple-phase1-color));
  }
  50% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  74.9% {
    border-color: var(--riple-phase3-color, var(--riple-phase1-color));
  }
  75% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
  99.9% {
    border-color: var(--riple-phase4-color, var(--riple-phase1-color));
  }
}`);var ja=Array.from({length:4},function(r,o){return"--riple-phase".concat(o+1,"-color")}),Kp=function(r){var o,s=Gp(r==null?void 0:r.style,r==null?void 0:r.size),c=s.styles,d=s.fontSize,b=r==null?void 0:r.easing,y=Xp(r==null?void 0:r.speedPlus,"1s").animationPeriod,O=function(p){var h={};if(p instanceof Array){for(var R=Vp(p,ja.length),U=0;U<R.length&&!(U>=4);U++)h[ja[U]]=R[U];return h}try{if(typeof p!="string")throw new Error("Color String expected");for(var M=0;M<ja.length;M++)h[ja[M]]=p}catch(B){for(B instanceof Error?console.warn("[".concat(B.message,']: Received "').concat(typeof p,'" instead with value, ').concat(JSON.stringify(p))):console.warn("".concat(JSON.stringify(p)," received in <Riple /> indicator cannot be processed. Using default instead!")),M=0;M<ja.length;M++)h[ja[M]]=Sh}return h}((o=r==null?void 0:r.color)!==null&&o!==void 0?o:"");return Xa.createElement("span",{className:"rli-d-i-b riple-rli-bounding-box",style:Yn(Yn(Yn(Yn(Yn({},d&&{fontSize:d}),y&&{"--rli-animation-duration":y}),b&&{"--rli-animation-function":b}),O),c),role:"status","aria-live":"polite","aria-label":"Loading"},Xa.createElement("span",{className:"rli-d-i-b riple-indicator"},Xa.createElement("span",{className:"rli-d-i-b riple"}),Xa.createElement("span",{className:"rli-d-i-b riple"}),Xa.createElement(Zp,{className:"riple-text",text:r==null?void 0:r.text,textColor:r==null?void 0:r.textColor})))};Bt(`.pulsate-rli-bounding-box {
  --TD-pulsate-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  display: inline-block;
  box-sizing: border-box;
  color: var(--TD-pulsate-phase1-color);
}
.pulsate-rli-bounding-box .pulsate-indicator {
  width: 4.4em;
  height: 1.1em;
  text-align: center;
  position: relative;
  z-index: 0;
  display: flex;
  justify-content: space-between;
  flex-wrap: nowrap;
  align-items: center;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot {
  width: 1.1em;
  height: 1.1em;
  border-radius: 50%;
  background-color: var(--TD-pulsate-phase1-color);
  transform: scale(0);
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6uj, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, ease-in-out) var(--delay) infinite u1qz6vi;
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(1) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15 * -1);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(2) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
}
.pulsate-rli-bounding-box .pulsate-indicator .pulsate-dot:nth-of-type(3) {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.15);
}
.pulsate-rli-bounding-box .pulsate-text {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 80%;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.6em;
  letter-spacing: 0.5px;
  font-family: sans-serif;
  mix-blend-mode: difference;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: -2;
}

@property --TD-pulsate-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-pulsate-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6uj {
  0%, 90%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}
@keyframes u1qz6vi {
  0%, 100% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  24.9% {
    background-color: var(--TD-pulsate-phase1-color);
  }
  25% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  49.9% {
    background-color: var(--TD-pulsate-phase2-color, var(--TD-pulsate-phase1-color));
  }
  50% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  74.9% {
    background-color: var(--TD-pulsate-phase3-color, var(--TD-pulsate-phase1-color));
  }
  75% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
  99.9% {
    background-color: var(--TD-pulsate-phase4-color, var(--TD-pulsate-phase1-color));
  }
}`);Array.from({length:4},function(r,o){return"--TD-pulsate-phase".concat(o+1,"-color")});Bt(`.brick-stack-rli-bounding-box {
  --TD-brick-stack-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-brick-stack-phase1-color);
}
.brick-stack-rli-bounding-box .brick-stack-indicator {
  width: 2.8em;
  height: 2.8em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.brick-stack-rli-bounding-box .brick-stack {
  width: 100%;
  height: 100%;
  background: radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 0/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 0 100%/40% 40% no-repeat, radial-gradient(circle closest-side, currentColor 0% 95%, rgba(0, 0, 0, 0) calc(95% + 1px)) 100% 100%/40% 40% no-repeat;
  animation: var(--rli-animation-duration, 1s) var(--rli-animation-function, ease-out) infinite u1qz6w1, calc(var(--rli-animation-duration, 1s) * 4) var(--rli-animation-function, ease-out) infinite u1qz6x5;
}

@property --TD-brick-stack-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-brick-stack-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1s;
}
@keyframes u1qz6w1 {
  0% {
    background-position: 0 0, 0 100%, 100% 100%;
  }
  25% {
    background-position: 100% 0, 0 100%, 100% 100%;
  }
  50% {
    background-position: 100% 0, 0 0, 100% 100%;
  }
  75% {
    background-position: 100% 0, 0 0, 0 100%;
  }
  100% {
    background-position: 100% 100%, 0 0, 0 100%;
  }
}
@keyframes u1qz6x5 {
  100%, 0% {
    color: var(--TD-brick-stack-phase1-color);
  }
  20% {
    color: var(--TD-brick-stack-phase1-color);
  }
  25% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  45% {
    color: var(--TD-brick-stack-phase2-color, var(--TD-brick-stack-phase1-color));
  }
  50% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  70% {
    color: var(--TD-brick-stack-phase3-color, var(--TD-brick-stack-phase1-color));
  }
  75% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
  95% {
    color: var(--TD-brick-stack-phase4-color, var(--TD-brick-stack-phase1-color));
  }
}`);Array.from({length:4},function(r,o){return"--TD-brick-stack-phase".concat(o+1,"-color")});Bt(`.bob-rli-bounding-box {
  --TD-bob-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  display: inline-block;
  color: var(--TD-bob-phase1-color);
}
.bob-rli-bounding-box .bob-indicator {
  width: 4.4em;
  height: 2.2em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bob-rli-bounding-box .bob-indicator .bobbing,
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  width: 1.1em;
  height: 100%;
  display: grid;
  animation: var(--rli-animation-duration, 1.2s) var(--rli-animation-function, linear) var(--delay) infinite u1qz6wd, calc(var(--rli-animation-duration, 1.2s) * 4) var(--rli-animation-function, linear) var(--delay) infinite u1qz6xx;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before,
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  content: "";
  grid-area: 1/1;
}
.bob-rli-bounding-box .bob-indicator .bobbing {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12 * -1);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::before {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0);
  transform: translateX(150%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}
.bob-rli-bounding-box .bob-indicator .bobbing::after {
  --delay: calc(var(--rli-animation-duration, 1.2s) * 0.12);
  transform: translateX(300%);
  background: radial-gradient(circle closest-side at center, currentColor 0% 92%, rgba(0, 0, 0, 0) calc(92% + 1px)) 50% 50%/100% 50% no-repeat;
}

@property --TD-bob-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bob-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6wd {
  100%, 0% {
    background-position: 50% 50%;
  }
  15% {
    background-position: 50% 10%;
  }
  30% {
    background-position: 50% 100%;
  }
  40% {
    background-position: 50% 0%;
  }
  50% {
    background-position: 50% 90%;
  }
  70% {
    background-position: 50% 10%;
  }
  98% {
    background-position: 50% 50%;
  }
}
@keyframes u1qz6xx {
  100%, 0% {
    color: var(--TD-bob-phase1-color);
  }
  22% {
    color: var(--TD-bob-phase1-color);
  }
  25% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  47% {
    color: var(--TD-bob-phase2-color, var(--TD-bob-phase1-color));
  }
  50% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  72% {
    color: var(--TD-bob-phase3-color, var(--TD-bob-phase1-color));
  }
  75% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
  97% {
    color: var(--TD-bob-phase4-color, var(--TD-bob-phase1-color));
  }
}`);Array.from({length:4},function(r,o){return"--TD-bob-phase".concat(o+1,"-color")});Bt(`.bounce-rli-bounding-box {
  --TD-bounce-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--TD-bounce-phase1-color);
  display: inline-block;
  padding-bottom: 0.25125em;
}
.bounce-rli-bounding-box .wrapper {
  --dot1-delay: 0s;
  --dot1-x-offset: 0.55em;
  --dot2-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.75) * -1);
  --dot2-x-offset: 2.2em;
  --dot3-delay: calc((var(--rli-animation-duration, 0.5s) + var(--rli-animation-duration, 0.5s) * 0.5) * -1);
  --dot3-x-offset: 3.85em;
  width: 5.5em;
  height: 3.125em;
  position: relative;
  display: block;
  margin: 0 auto;
}
.bounce-rli-bounding-box .wrapper .group {
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
.bounce-rli-bounding-box .wrapper .group .dot {
  width: 1.1em;
  height: 1.1em;
  position: absolute;
  border-radius: 50%;
  background-color: var(--TD-bounce-phase1-color);
  transform-origin: 50%;
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6yl, calc(var(--rli-animation-duration, 0.5s) * 4) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) infinite u1qz6zs;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .dot:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay), 0s;
}
.bounce-rli-bounding-box .wrapper .group .shadow {
  width: 1.1em;
  height: 0.22em;
  border-radius: 50%;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 101%;
  transform-origin: 50%;
  z-index: -1;
  filter: blur(1px);
  animation: var(--rli-animation-duration, 0.5s) var(--rli-animation-function, cubic-bezier(0.74, 0.1, 0.74, 1)) alternate infinite u1qz6z4;
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(1) {
  left: var(--dot1-x-offset);
  animation-delay: var(--dot1-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(2) {
  left: var(--dot2-x-offset);
  animation-delay: var(--dot2-delay);
}
.bounce-rli-bounding-box .wrapper .group .shadow:nth-of-type(3) {
  left: var(--dot3-x-offset);
  animation-delay: var(--dot3-delay);
}

@property --TD-bounce-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --TD-bounce-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 0.5s;
}
@keyframes u1qz6yl {
  0% {
    top: 0%;
  }
  60% {
    height: 1.25em;
    border-radius: 50%;
    transform: scaleX(1);
  }
  100% {
    top: 100%;
    height: 0.22em;
    transform: scaleX(1.5);
    filter: blur(0.4px);
  }
}
@keyframes u1qz6z4 {
  0% {
    transform: scaleX(0.2);
    opacity: 0.2;
  }
  60% {
    opacity: 0.4;
  }
  100% {
    transform: scaleX(1.5);
    opacity: 0.6;
  }
}
@keyframes u1qz6zs {
  0%, 100% {
    background-color: var(--TD-bounce-phase1-color);
  }
  20% {
    background-color: var(--TD-bounce-phase1-color);
  }
  25% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  45% {
    background-color: var(--TD-bounce-phase2-color, var(--TD-bounce-phase1-color));
  }
  50% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  70% {
    background-color: var(--TD-bounce-phase3-color, var(--TD-bounce-phase1-color));
  }
  75% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
  95% {
    background-color: var(--TD-bounce-phase4-color, var(--TD-bounce-phase1-color));
  }
}`);Array.from({length:4},function(r,o){return"--TD-bounce-phase".concat(o+1,"-color")});Bt(`.blink-blur-rli-bounding-box {
  --shape-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--shape-phase1-color);
}
.blink-blur-rli-bounding-box .blink-blur-indicator {
  isolation: isolate;
  display: flex;
  flex-direction: row;
  -moz-column-gap: 0.4em;
       column-gap: 0.4em;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape {
  --x-deg: -20deg;
  width: 1.8em;
  height: 2.25em;
  border-radius: 0.25em;
  color: inherit;
  transform: skewX(var(--x-deg));
  background-color: var(--shape-phase1-color);
  animation-name: u1qz6i2, u1qz6js;
  animation-duration: var(--rli-animation-duration, 1.2s), calc(var(--rli-animation-duration, 1.2s) * 4);
  animation-timing-function: var(--rli-animation-function, ease-in);
  animation-iteration-count: infinite;
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape1 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.5 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape2 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.4 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape3 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.3 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape4 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.2 * -1);
}
.blink-blur-rli-bounding-box .blink-blur-indicator .blink-blur-shape.blink-blur-shape5 {
  animation-delay: calc(var(--rli-animation-duration, 1.2s) * 0.1 * -1);
}

@property --shape-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --shape-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 1.2s;
}
@keyframes u1qz6i2 {
  100%, 0% {
    opacity: 0.3;
    filter: blur(0.0675em) drop-shadow(0 0 0.0625em);
    transform: skewX(var(--x-deg)) scale(1.2, 1.45);
  }
  39% {
    opacity: 0.8;
  }
  40%, 41%, 42% {
    opacity: 0;
  }
  43% {
    opacity: 0.8;
  }
  50% {
    opacity: 1;
    filter: blur(0em) drop-shadow(0 0 0em);
    transform: skewX(var(--x-deg)) scale(1, 1);
  }
}
@keyframes u1qz6js {
  100%, 0% {
    color: var(--shape-phase1-color);
    background-color: var(--shape-phase1-color);
  }
  25% {
    color: var(--shape-phase2-color, var(--shape-phase1-color));
    background-color: var(--shape-phase2-color, var(--shape-phase1-color));
  }
  50% {
    color: var(--shape-phase3-color, var(--shape-phase1-color));
    background-color: var(--shape-phase3-color, var(--shape-phase1-color));
  }
  75% {
    color: var(--shape-phase4-color, var(--shape-phase1-color));
    background-color: var(--shape-phase4-color, var(--shape-phase1-color));
  }
}`);Array.from({length:4},function(r,o){return"--shape-phase".concat(o+1,"-color")});Bt(`.trophy-spin-rli-bounding-box {
  --trophySpin-phase1-color: rgb(50, 205, 50);
  box-sizing: border-box;
  font-size: 16px;
  position: relative;
  isolation: isolate;
  color: var(--trophySpin-phase1-color);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator {
  width: 4em;
  perspective: 1000px;
  transform-style: preserve-3d;
  display: block;
  margin: 0 auto;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade {
  display: block;
  width: 4em;
  height: 0.5em;
  background: var(--trophySpin-phase1-color);
  animation: u1qz6nk var(--rli-animation-duration, 2.5s) var(--rli-animation-function, linear) infinite, u1qz6op calc(var(--rli-animation-duration, 2.5s) * 0.5) var(--rli-animation-function, linear) infinite, u1qz6pg calc(var(--rli-animation-duration, 2.5s) * 4) var(--rli-animation-function, linear) infinite;
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(8) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 0 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(7) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 1 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(6) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 2 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(5) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 3 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(4) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 4 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(3) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 5 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(2) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 6 * -1);
}
.trophy-spin-rli-bounding-box .trophy-spin-indicator .blade:nth-of-type(1) {
  animation-delay: calc(var(--rli-animation-duration, 2.5s) / 2 / 8 * 7 * -1);
}

@property --trophySpin-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --trophySpin-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2.5s;
}
@keyframes u1qz6nk {
  to {
    transform: rotateY(1turn) rotateX(-25deg);
  }
}
@keyframes u1qz6op {
  100%, 0% {
    filter: brightness(1);
    opacity: 1;
  }
  15% {
    filter: brightness(1);
  }
  25% {
    opacity: 0.96;
  }
  30% {
    filter: brightness(0.92);
  }
  50% {
    filter: brightness(0.7);
    opacity: 1;
  }
  75% {
    filter: brightness(0.92);
    opacity: 0.96;
  }
  90% {
    filter: brightness(1);
  }
}
@keyframes u1qz6pg {
  100%, 0% {
    background-color: var(--trophySpin-phase1-color);
  }
  18% {
    background-color: var(--trophySpin-phase1-color);
  }
  25% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  43% {
    background-color: var(--trophySpin-phase2-color, var(--trophySpin-phase1-color));
  }
  50% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  68% {
    background-color: var(--trophySpin-phase3-color, var(--trophySpin-phase1-color));
  }
  75% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
  93% {
    background-color: var(--trophySpin-phase4-color, var(--trophySpin-phase1-color));
  }
}`);Array.from({length:4},function(r,o){return"--trophySpin-phase".concat(o+1,"-color")});Bt(`.slab-rli-bounding-box {
  --slab-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  color: var(--slab-phase1-color);
  position: relative;
}
.slab-rli-bounding-box .slab-indicator {
  position: relative;
  display: block;
  width: 7em;
  height: 4em;
  margin: 0 auto;
  overflow: hidden;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper {
  width: 4em;
  height: 4em;
  transform: perspective(15em) rotateX(66deg) rotateZ(-25deg);
  transform-style: preserve-3d;
  transform-origin: 50% 100%;
  display: block;
  position: absolute;
  bottom: 0;
  right: 0;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: var(--slab-phase1-color);
  opacity: 0;
  box-shadow: -0.08em 0.15em 0 rgba(0, 0, 0, 0.45);
  transform-origin: 0% 0%;
  animation: calc(var(--rli-animation-duration-unitless, 3) * 1s) var(--rli-animation-function, linear) infinite u1qz6km, calc(var(--rli-animation-duration-unitless, 3) * 4s) var(--rli-animation-function, linear) infinite u1qz6lk;
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(1) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 3 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(2) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * 2 * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(3) {
  animation-delay: calc(4 / (16 / var(--rli-animation-duration-unitless, 3)) * -1 * 1s);
}
.slab-rli-bounding-box .slab-indicator .slabs-wrapper .slab:nth-child(4) {
  animation-delay: 0s;
}

@property --slab-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --slab-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration-unitless {
  syntax: "<number>";
  inherits: true;
  initial-value: 3;
}
@keyframes u1qz6km {
  0% {
    transform: translateY(0) rotateX(30deg);
    opacity: 0;
  }
  10% {
    transform: translateY(-40%) rotateX(0deg);
    opacity: 1;
  }
  25% {
    opacity: 1;
  }
  100% {
    transform: translateY(-400%) rotateX(0deg);
    opacity: 0;
  }
}
@keyframes u1qz6lk {
  100%, 0% {
    background-color: var(--slab-phase1-color);
  }
  24.9% {
    background-color: var(--slab-phase1-color);
  }
  25% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  49.9% {
    background-color: var(--slab-phase2-color, var(--slab-phase1-color));
  }
  50% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  74.9% {
    background-color: var(--slab-phase3-color, var(--slab-phase1-color));
  }
  75% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
  99.9% {
    background-color: var(--slab-phase4-color, var(--slab-phase1-color));
  }
}`);Array.from({length:4},function(r,o){return"--slab-phase".concat(o+1,"-color")});Bt(`.lifeline-rli-bounding-box {
  --life-line-phase1-color: rgb(50, 205, 50);
  font-size: 16px;
  isolation: isolate;
  color: var(--life-line-phase1-color);
}
.lifeline-rli-bounding-box .lifeline-indicator {
  position: relative;
  text-align: center;
}
.lifeline-rli-bounding-box .lifeline-indicator path.rli-lifeline {
  stroke-dasharray: 474.7616760254 30.3039367676;
  animation: var(--rli-animation-duration, 2s) var(--rli-animation-function, linear) infinite u1qz6lr, calc(var(--rli-animation-duration, 2s) * 4) var(--rli-animation-function, linear) infinite u1qz6m8;
}
.lifeline-rli-bounding-box .lifeline-text {
  color: currentColor;
  mix-blend-mode: difference;
  width: unset;
  display: block;
}

@property --life-line-phase1-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase2-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase3-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --life-line-phase4-color {
  syntax: "<color>";
  inherits: true;
  initial-value: rgb(50, 205, 50);
}
@property --rli-animation-duration {
  syntax: "<time>";
  inherits: true;
  initial-value: 2s;
}
@keyframes u1qz6lr {
  to {
    stroke-dashoffset: -1010.1312255859;
  }
}
@keyframes u1qz6m8 {
  100%, 0% {
    color: var(--life-line-phase1-color);
  }
  20% {
    color: var(--life-line-phase1-color);
  }
  25% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  45% {
    color: var(--life-line-phase2-color, var(--life-line-phase1-color));
  }
  50% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  70% {
    color: var(--life-line-phase3-color, var(--life-line-phase1-color));
  }
  75% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
  95% {
    color: var(--life-line-phase4-color, var(--life-line-phase1-color));
  }
}`);Array.from({length:4},function(r,o){return"--life-line-phase".concat(o+1,"-color")});const Jp=()=>{const r=q.useRef(null);return q.useEffect(()=>{const o=r.current;if(!o)return;const s=o.getContext("2d");if(!s)return;o.width=window.innerWidth,o.height=window.innerHeight;const y="アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン"+"ABCDEFGHIJKLMNOPQRSTUVWXYZ"+"0123456789",O=16,p=o.width/O,h=[];for(let M=0;M<p;M++)h[M]=1;const U=setInterval(()=>{s.fillStyle="rgba(0, 0, 0, 0.05)",s.fillRect(0,0,o.width,o.height),s.fillStyle="#0F0",s.font=O+"px monospace";for(let M=0;M<h.length;M++){const B=y.charAt(Math.floor(Math.random()*y.length));s.fillText(B,M*O,h[M]*O),h[M]*O>o.height&&Math.random()>.975&&(h[M]=0),h[M]++}},30);return()=>{clearInterval(U)}},[]),Gt.jsx("canvas",{ref:r,className:"bg-black h-screen w-screen fixed z-0"})};function $p({children:r}){return Gt.jsxs(Gt.Fragment,{children:[Gt.jsx(Jp,{}),Gt.jsx("main",{className:"absolute z-1 h-screen w-screen overflow-x-hidden",children:r})]})}const Pp=q.lazy(()=>xr(()=>import("./Homepage-BR3Mhw4Z.js"),__vite__mapDeps([0,1]))),Wp=q.lazy(()=>xr(()=>import("./Devpage-Cw5t434_.js"),__vite__mapDeps([2,1,3]))),Fp=q.lazy(()=>xr(()=>import("./DSApage-UBXpgWRT.js"),__vite__mapDeps([4,1]))),Ip=q.lazy(()=>xr(()=>import("./MyStack-DAFVIz0g.js"),__vite__mapDeps([5,3])));function tv(){const r=Gt.jsx(Kp,{color:"#0F0",size:"large",text:"",textColor:""});return Ub([{element:Gt.jsx($p,{children:Gt.jsx(q.Suspense,{fallback:r,children:Gt.jsx(Vb,{})})}),children:[{element:Gt.jsx(Pp,{}),index:!0},{element:Gt.jsx(Wp,{}),path:"dev"},{element:Gt.jsx(Fp,{}),path:"dsa"},{element:Gt.jsx(Ip,{}),path:"stack"}]}])}function nv(){return Gt.jsx(tv,{})}const ev=tb.createRoot(document.getElementById("root"));ev.render(Gt.jsx(q.StrictMode,{children:Gt.jsx(pp,{children:Gt.jsx(q.Suspense,{children:Gt.jsx(nv,{})})})}));export{Xa as R,Zm as a,Go as b,Gt as j,q as r,Mb as u};
