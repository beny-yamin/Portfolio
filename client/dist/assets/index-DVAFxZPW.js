var wv=Object.defineProperty;var Ev=(s,e,t)=>e in s?wv(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var Pe=(s,e,t)=>Ev(s,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();function Ym(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var Mu={exports:{}},ko={},wu={exports:{}},gt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rp;function Tv(){if(Rp)return gt;Rp=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),g=Symbol.iterator;function _(F){return F===null||typeof F!="object"?null:(F=g&&F[g]||F["@@iterator"],typeof F=="function"?F:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,E={};function y(F,ie,Le){this.props=F,this.context=ie,this.refs=E,this.updater=Le||S}y.prototype.isReactComponent={},y.prototype.setState=function(F,ie){if(typeof F!="object"&&typeof F!="function"&&F!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,F,ie,"setState")},y.prototype.forceUpdate=function(F){this.updater.enqueueForceUpdate(this,F,"forceUpdate")};function x(){}x.prototype=y.prototype;function D(F,ie,Le){this.props=F,this.context=ie,this.refs=E,this.updater=Le||S}var N=D.prototype=new x;N.constructor=D,M(N,y.prototype),N.isPureReactComponent=!0;var R=Array.isArray,k=Object.prototype.hasOwnProperty,O={current:null},U={key:!0,ref:!0,__self:!0,__source:!0};function j(F,ie,Le){var ee,he={},Se=null,xe=null;if(ie!=null)for(ee in ie.ref!==void 0&&(xe=ie.ref),ie.key!==void 0&&(Se=""+ie.key),ie)k.call(ie,ee)&&!U.hasOwnProperty(ee)&&(he[ee]=ie[ee]);var ye=arguments.length-2;if(ye===1)he.children=Le;else if(1<ye){for(var Fe=Array(ye),Ve=0;Ve<ye;Ve++)Fe[Ve]=arguments[Ve+2];he.children=Fe}if(F&&F.defaultProps)for(ee in ye=F.defaultProps,ye)he[ee]===void 0&&(he[ee]=ye[ee]);return{$$typeof:s,type:F,key:Se,ref:xe,props:he,_owner:O.current}}function P(F,ie){return{$$typeof:s,type:F.type,key:ie,ref:F.ref,props:F.props,_owner:F._owner}}function C(F){return typeof F=="object"&&F!==null&&F.$$typeof===s}function B(F){var ie={"=":"=0",":":"=2"};return"$"+F.replace(/[=:]/g,function(Le){return ie[Le]})}var se=/\/+/g;function Q(F,ie){return typeof F=="object"&&F!==null&&F.key!=null?B(""+F.key):ie.toString(36)}function ue(F,ie,Le,ee,he){var Se=typeof F;(Se==="undefined"||Se==="boolean")&&(F=null);var xe=!1;if(F===null)xe=!0;else switch(Se){case"string":case"number":xe=!0;break;case"object":switch(F.$$typeof){case s:case e:xe=!0}}if(xe)return xe=F,he=he(xe),F=ee===""?"."+Q(xe,0):ee,R(he)?(Le="",F!=null&&(Le=F.replace(se,"$&/")+"/"),ue(he,ie,Le,"",function(Ve){return Ve})):he!=null&&(C(he)&&(he=P(he,Le+(!he.key||xe&&xe.key===he.key?"":(""+he.key).replace(se,"$&/")+"/")+F)),ie.push(he)),1;if(xe=0,ee=ee===""?".":ee+":",R(F))for(var ye=0;ye<F.length;ye++){Se=F[ye];var Fe=ee+Q(Se,ye);xe+=ue(Se,ie,Le,Fe,he)}else if(Fe=_(F),typeof Fe=="function")for(F=Fe.call(F),ye=0;!(Se=F.next()).done;)Se=Se.value,Fe=ee+Q(Se,ye++),xe+=ue(Se,ie,Le,Fe,he);else if(Se==="object")throw ie=String(F),Error("Objects are not valid as a React child (found: "+(ie==="[object Object]"?"object with keys {"+Object.keys(F).join(", ")+"}":ie)+"). If you meant to render a collection of children, use an array instead.");return xe}function de(F,ie,Le){if(F==null)return F;var ee=[],he=0;return ue(F,ee,"","",function(Se){return ie.call(Le,Se,he++)}),ee}function re(F){if(F._status===-1){var ie=F._result;ie=ie(),ie.then(function(Le){(F._status===0||F._status===-1)&&(F._status=1,F._result=Le)},function(Le){(F._status===0||F._status===-1)&&(F._status=2,F._result=Le)}),F._status===-1&&(F._status=0,F._result=ie)}if(F._status===1)return F._result.default;throw F._result}var le={current:null},V={transition:null},ce={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:V,ReactCurrentOwner:O};function oe(){throw Error("act(...) is not supported in production builds of React.")}return gt.Children={map:de,forEach:function(F,ie,Le){de(F,function(){ie.apply(this,arguments)},Le)},count:function(F){var ie=0;return de(F,function(){ie++}),ie},toArray:function(F){return de(F,function(ie){return ie})||[]},only:function(F){if(!C(F))throw Error("React.Children.only expected to receive a single React element child.");return F}},gt.Component=y,gt.Fragment=t,gt.Profiler=a,gt.PureComponent=D,gt.StrictMode=r,gt.Suspense=h,gt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ce,gt.act=oe,gt.cloneElement=function(F,ie,Le){if(F==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+F+".");var ee=M({},F.props),he=F.key,Se=F.ref,xe=F._owner;if(ie!=null){if(ie.ref!==void 0&&(Se=ie.ref,xe=O.current),ie.key!==void 0&&(he=""+ie.key),F.type&&F.type.defaultProps)var ye=F.type.defaultProps;for(Fe in ie)k.call(ie,Fe)&&!U.hasOwnProperty(Fe)&&(ee[Fe]=ie[Fe]===void 0&&ye!==void 0?ye[Fe]:ie[Fe])}var Fe=arguments.length-2;if(Fe===1)ee.children=Le;else if(1<Fe){ye=Array(Fe);for(var Ve=0;Ve<Fe;Ve++)ye[Ve]=arguments[Ve+2];ee.children=ye}return{$$typeof:s,type:F.type,key:he,ref:Se,props:ee,_owner:xe}},gt.createContext=function(F){return F={$$typeof:u,_currentValue:F,_currentValue2:F,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},F.Provider={$$typeof:l,_context:F},F.Consumer=F},gt.createElement=j,gt.createFactory=function(F){var ie=j.bind(null,F);return ie.type=F,ie},gt.createRef=function(){return{current:null}},gt.forwardRef=function(F){return{$$typeof:d,render:F}},gt.isValidElement=C,gt.lazy=function(F){return{$$typeof:v,_payload:{_status:-1,_result:F},_init:re}},gt.memo=function(F,ie){return{$$typeof:p,type:F,compare:ie===void 0?null:ie}},gt.startTransition=function(F){var ie=V.transition;V.transition={};try{F()}finally{V.transition=ie}},gt.unstable_act=oe,gt.useCallback=function(F,ie){return le.current.useCallback(F,ie)},gt.useContext=function(F){return le.current.useContext(F)},gt.useDebugValue=function(){},gt.useDeferredValue=function(F){return le.current.useDeferredValue(F)},gt.useEffect=function(F,ie){return le.current.useEffect(F,ie)},gt.useId=function(){return le.current.useId()},gt.useImperativeHandle=function(F,ie,Le){return le.current.useImperativeHandle(F,ie,Le)},gt.useInsertionEffect=function(F,ie){return le.current.useInsertionEffect(F,ie)},gt.useLayoutEffect=function(F,ie){return le.current.useLayoutEffect(F,ie)},gt.useMemo=function(F,ie){return le.current.useMemo(F,ie)},gt.useReducer=function(F,ie,Le){return le.current.useReducer(F,ie,Le)},gt.useRef=function(F){return le.current.useRef(F)},gt.useState=function(F){return le.current.useState(F)},gt.useSyncExternalStore=function(F,ie,Le){return le.current.useSyncExternalStore(F,ie,Le)},gt.useTransition=function(){return le.current.useTransition()},gt.version="18.3.1",gt}var Pp;function qd(){return Pp||(Pp=1,wu.exports=Tv()),wu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Np;function bv(){if(Np)return ko;Np=1;var s=qd(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,h,p){var v,g={},_=null,S=null;p!==void 0&&(_=""+p),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(S=h.ref);for(v in h)r.call(h,v)&&!l.hasOwnProperty(v)&&(g[v]=h[v]);if(d&&d.defaultProps)for(v in h=d.defaultProps,h)g[v]===void 0&&(g[v]=h[v]);return{$$typeof:e,type:d,key:_,ref:S,props:g,_owner:a.current}}return ko.Fragment=t,ko.jsx=u,ko.jsxs=u,ko}var Lp;function Av(){return Lp||(Lp=1,Mu.exports=bv()),Mu.exports}var b=Av(),je=qd();const Cv=Ym(je);var rl={},Eu={exports:{}},kn={},Tu={exports:{}},bu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function Rv(){return Dp||(Dp=1,(function(s){function e(V,ce){var oe=V.length;V.push(ce);e:for(;0<oe;){var F=oe-1>>>1,ie=V[F];if(0<a(ie,ce))V[F]=ce,V[oe]=ie,oe=F;else break e}}function t(V){return V.length===0?null:V[0]}function r(V){if(V.length===0)return null;var ce=V[0],oe=V.pop();if(oe!==ce){V[0]=oe;e:for(var F=0,ie=V.length,Le=ie>>>1;F<Le;){var ee=2*(F+1)-1,he=V[ee],Se=ee+1,xe=V[Se];if(0>a(he,oe))Se<ie&&0>a(xe,he)?(V[F]=xe,V[Se]=oe,F=Se):(V[F]=he,V[ee]=oe,F=ee);else if(Se<ie&&0>a(xe,oe))V[F]=xe,V[Se]=oe,F=Se;else break e}}return ce}function a(V,ce){var oe=V.sortIndex-ce.sortIndex;return oe!==0?oe:V.id-ce.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();s.unstable_now=function(){return u.now()-d}}var h=[],p=[],v=1,g=null,_=3,S=!1,M=!1,E=!1,y=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function N(V){for(var ce=t(p);ce!==null;){if(ce.callback===null)r(p);else if(ce.startTime<=V)r(p),ce.sortIndex=ce.expirationTime,e(h,ce);else break;ce=t(p)}}function R(V){if(E=!1,N(V),!M)if(t(h)!==null)M=!0,re(k);else{var ce=t(p);ce!==null&&le(R,ce.startTime-V)}}function k(V,ce){M=!1,E&&(E=!1,x(j),j=-1),S=!0;var oe=_;try{for(N(ce),g=t(h);g!==null&&(!(g.expirationTime>ce)||V&&!B());){var F=g.callback;if(typeof F=="function"){g.callback=null,_=g.priorityLevel;var ie=F(g.expirationTime<=ce);ce=s.unstable_now(),typeof ie=="function"?g.callback=ie:g===t(h)&&r(h),N(ce)}else r(h);g=t(h)}if(g!==null)var Le=!0;else{var ee=t(p);ee!==null&&le(R,ee.startTime-ce),Le=!1}return Le}finally{g=null,_=oe,S=!1}}var O=!1,U=null,j=-1,P=5,C=-1;function B(){return!(s.unstable_now()-C<P)}function se(){if(U!==null){var V=s.unstable_now();C=V;var ce=!0;try{ce=U(!0,V)}finally{ce?Q():(O=!1,U=null)}}else O=!1}var Q;if(typeof D=="function")Q=function(){D(se)};else if(typeof MessageChannel<"u"){var ue=new MessageChannel,de=ue.port2;ue.port1.onmessage=se,Q=function(){de.postMessage(null)}}else Q=function(){y(se,0)};function re(V){U=V,O||(O=!0,Q())}function le(V,ce){j=y(function(){V(s.unstable_now())},ce)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(V){V.callback=null},s.unstable_continueExecution=function(){M||S||(M=!0,re(k))},s.unstable_forceFrameRate=function(V){0>V||125<V?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<V?Math.floor(1e3/V):5},s.unstable_getCurrentPriorityLevel=function(){return _},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(V){switch(_){case 1:case 2:case 3:var ce=3;break;default:ce=_}var oe=_;_=ce;try{return V()}finally{_=oe}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(V,ce){switch(V){case 1:case 2:case 3:case 4:case 5:break;default:V=3}var oe=_;_=V;try{return ce()}finally{_=oe}},s.unstable_scheduleCallback=function(V,ce,oe){var F=s.unstable_now();switch(typeof oe=="object"&&oe!==null?(oe=oe.delay,oe=typeof oe=="number"&&0<oe?F+oe:F):oe=F,V){case 1:var ie=-1;break;case 2:ie=250;break;case 5:ie=1073741823;break;case 4:ie=1e4;break;default:ie=5e3}return ie=oe+ie,V={id:v++,callback:ce,priorityLevel:V,startTime:oe,expirationTime:ie,sortIndex:-1},oe>F?(V.sortIndex=oe,e(p,V),t(h)===null&&V===t(p)&&(E?(x(j),j=-1):E=!0,le(R,oe-F))):(V.sortIndex=ie,e(h,V),M||S||(M=!0,re(k))),V},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(V){var ce=_;return function(){var oe=_;_=ce;try{return V.apply(this,arguments)}finally{_=oe}}}})(bu)),bu}var Ip;function Pv(){return Ip||(Ip=1,Tu.exports=Rv()),Tu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Up;function Nv(){if(Up)return kn;Up=1;var s=qd(),e=Pv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)r.add(i[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},g={};function _(n){return h.call(g,n)?!0:h.call(v,n)?!1:p.test(n)?g[n]=!0:(v[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function E(n,i,o,c,f,m,w){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=w}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new E(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new E(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new E(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new E(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new E(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new E(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new E(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new E(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new E(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new E(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,D);y[i]=new E(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,D);y[i]=new E(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new E("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new E(n,1,!1,n.toLowerCase(),null,!0,!0)});function N(n,i,o,c){var f=y.hasOwnProperty(i)?y[i]:null;(f!==null?f.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,f,c)&&(o=null),c||f===null?_(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(i=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(i):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,k=Symbol.for("react.element"),O=Symbol.for("react.portal"),U=Symbol.for("react.fragment"),j=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),B=Symbol.for("react.context"),se=Symbol.for("react.forward_ref"),Q=Symbol.for("react.suspense"),ue=Symbol.for("react.suspense_list"),de=Symbol.for("react.memo"),re=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),V=Symbol.iterator;function ce(n){return n===null||typeof n!="object"?null:(n=V&&n[V]||n["@@iterator"],typeof n=="function"?n:null)}var oe=Object.assign,F;function ie(n){if(F===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);F=i&&i[1]||""}return`
`+F+n}var Le=!1;function ee(n,i){if(!n||Le)return"";Le=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(ne){var c=ne}Reflect.construct(n,[],i)}else{try{i.call()}catch(ne){c=ne}n.call(i.prototype)}else{try{throw Error()}catch(ne){c=ne}n()}}catch(ne){if(ne&&c&&typeof ne.stack=="string"){for(var f=ne.stack.split(`
`),m=c.stack.split(`
`),w=f.length-1,I=m.length-1;1<=w&&0<=I&&f[w]!==m[I];)I--;for(;1<=w&&0<=I;w--,I--)if(f[w]!==m[I]){if(w!==1||I!==1)do if(w--,I--,0>I||f[w]!==m[I]){var H=`
`+f[w].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=w&&0<=I);break}}}finally{Le=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ie(n):""}function he(n){switch(n.tag){case 5:return ie(n.type);case 16:return ie("Lazy");case 13:return ie("Suspense");case 19:return ie("SuspenseList");case 0:case 2:case 15:return n=ee(n.type,!1),n;case 11:return n=ee(n.type.render,!1),n;case 1:return n=ee(n.type,!0),n;default:return""}}function Se(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case U:return"Fragment";case O:return"Portal";case P:return"Profiler";case j:return"StrictMode";case Q:return"Suspense";case ue:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case se:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case de:return i=n.displayName||null,i!==null?i:Se(n.type)||"Memo";case re:i=n._payload,n=n._init;try{return Se(n(i))}catch{}}return null}function xe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Se(i);case 8:return i===j?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function ye(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Fe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Ve(n){var i=Fe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,m=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return f.call(this)},set:function(w){c=""+w,m.call(this,w)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(w){c=""+w},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function Pt(n){n._valueTracker||(n._valueTracker=Ve(n))}function Ct(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=Fe(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function at(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function z(n,i){var o=i.checked;return oe({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function un(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=ye(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function ht(n,i){i=i.checked,i!=null&&N(n,"checked",i,!1)}function dt(n,i){ht(n,i);var o=ye(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Rt(n,i.type,o):i.hasOwnProperty("defaultValue")&&Rt(n,i.type,ye(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Ke(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Rt(n,i,o){(i!=="number"||at(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Xe=Array.isArray;function L(n,i,o,c){if(n=n.options,i){i={};for(var f=0;f<o.length;f++)i["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=i.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+ye(o),i=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}i!==null||n[f].disabled||(i=n[f])}i!==null&&(i.selected=!0)}}function T(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return oe({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function J(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Xe(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:ye(o)}}function me(n,i){var o=ye(i.value),c=ye(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function ge(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function fe(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function qe(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?fe(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var be,ke=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,f)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(be=be||document.createElement("div"),be.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=be.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function pt(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ze=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){ze.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Ee[i]=Ee[n]})});function Qe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+i).trim():i+"px"}function nt(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=Qe(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var Be=oe({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function mt(n,i){if(i){if(Be[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function st(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Nt=null;function W(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var Ae=null,ae=null,pe=null;function De(n){if(n=Mo(n)){if(typeof Ae!="function")throw Error(t(280));var i=n.stateNode;i&&(i=_a(i),Ae(n.stateNode,n.type,i))}}function Ne(n){ae?pe?pe.push(n):pe=[n]:ae=n}function ot(){if(ae){var n=ae,i=pe;if(pe=ae=null,De(n),i)for(n=0;n<i.length;n++)De(i[n])}}function Ft(n,i){return n(i)}function Zt(){}var wt=!1;function Nn(n,i,o){if(wt)return n(i,o);wt=!0;try{return Ft(n,i,o)}finally{wt=!1,(ae!==null||pe!==null)&&(Zt(),ot())}}function wn(n,i){var o=n.stateNode;if(o===null)return null;var c=_a(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var ns=!1;if(d)try{var qi={};Object.defineProperty(qi,"passive",{get:function(){ns=!0}}),window.addEventListener("test",qi,qi),window.removeEventListener("test",qi,qi)}catch{ns=!1}function Ti(n,i,o,c,f,m,w,I,H){var ne=Array.prototype.slice.call(arguments,3);try{i.apply(o,ne)}catch(_e){this.onError(_e)}}var bi=!1,br=null,Ar=!1,$i=null,Zo={onError:function(n){bi=!0,br=n}};function is(n,i,o,c,f,m,w,I,H){bi=!1,br=null,Ti.apply(Zo,arguments)}function Qo(n,i,o,c,f,m,w,I,H){if(is.apply(this,arguments),bi){if(bi){var ne=br;bi=!1,br=null}else throw Error(t(198));Ar||(Ar=!0,$i=ne)}}function gi(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function Jo(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function ea(n){if(gi(n)!==n)throw Error(t(188))}function jl(n){var i=n.alternate;if(!i){if(i=gi(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var f=o.return;if(f===null)break;var m=f.alternate;if(m===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===m.child){for(m=f.child;m;){if(m===o)return ea(f),n;if(m===c)return ea(f),i;m=m.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=m;else{for(var w=!1,I=f.child;I;){if(I===o){w=!0,o=f,c=m;break}if(I===c){w=!0,c=f,o=m;break}I=I.sibling}if(!w){for(I=m.child;I;){if(I===o){w=!0,o=m,c=f;break}if(I===c){w=!0,c=m,o=f;break}I=I.sibling}if(!w)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ta(n){return n=jl(n),n!==null?na(n):null}function na(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=na(n);if(i!==null)return i;n=n.sibling}return null}var ia=e.unstable_scheduleCallback,A=e.unstable_cancelCallback,X=e.unstable_shouldYield,te=e.unstable_requestPaint,K=e.unstable_now,Y=e.unstable_getCurrentPriorityLevel,we=e.unstable_ImmediatePriority,Ce=e.unstable_UserBlockingPriority,Ie=e.unstable_NormalPriority,He=e.unstable_LowPriority,it=e.unstable_IdlePriority,tt=null,We=null;function _t(n){if(We&&typeof We.onCommitFiberRoot=="function")try{We.onCommitFiberRoot(tt,n,void 0,(n.current.flags&128)===128)}catch{}}var lt=Math.clz32?Math.clz32:St,Wt=Math.log,zt=Math.LN2;function St(n){return n>>>=0,n===0?32:31-(Wt(n)/zt|0)|0}var Ze=64,jt=4194304;function xt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function mn(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,m=n.pingedLanes,w=o&268435455;if(w!==0){var I=w&~f;I!==0?c=xt(I):(m&=w,m!==0&&(c=xt(m)))}else w=o&~f,w!==0?c=xt(w):m!==0&&(c=xt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&f)===0&&(f=c&-c,m=i&-i,f>=m||f===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-lt(i),f=1<<o,c|=n[o],i&=~f;return c}function Ki(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function En(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,m=n.pendingLanes;0<m;){var w=31-lt(m),I=1<<w,H=f[w];H===-1?((I&o)===0||(I&c)!==0)&&(f[w]=Ki(I,i)):H<=i&&(n.expiredLanes|=I),m&=~I}}function Ai(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function It(){var n=Ze;return Ze<<=1,(Ze&4194240)===0&&(Ze=64),n}function gn(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function nn(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-lt(i),n[i]=o}function dn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-lt(o),m=1<<f;i[f]=0,c[f]=-1,n[f]=-1,o&=~m}}function rn(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-lt(o),f=1<<c;f&i|n[c]&i&&(n[c]|=i),o&=~f}}var Et=0;function vi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var lf,Xl,cf,uf,df,Yl=!1,ra=[],Zi=null,Qi=null,Ji=null,so=new Map,oo=new Map,er=[],jg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ff(n,i){switch(n){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":Qi=null;break;case"mouseover":case"mouseout":Ji=null;break;case"pointerover":case"pointerout":so.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":oo.delete(i.pointerId)}}function ao(n,i,o,c,f,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:m,targetContainers:[f]},i!==null&&(i=Mo(i),i!==null&&Xl(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,f!==null&&i.indexOf(f)===-1&&i.push(f),n)}function Xg(n,i,o,c,f){switch(i){case"focusin":return Zi=ao(Zi,n,i,o,c,f),!0;case"dragenter":return Qi=ao(Qi,n,i,o,c,f),!0;case"mouseover":return Ji=ao(Ji,n,i,o,c,f),!0;case"pointerover":var m=f.pointerId;return so.set(m,ao(so.get(m)||null,n,i,o,c,f)),!0;case"gotpointercapture":return m=f.pointerId,oo.set(m,ao(oo.get(m)||null,n,i,o,c,f)),!0}return!1}function hf(n){var i=Cr(n.target);if(i!==null){var o=gi(i);if(o!==null){if(i=o.tag,i===13){if(i=Jo(o),i!==null){n.blockedOn=i,df(n.priority,function(){cf(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function sa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=$l(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Nt=c,o.target.dispatchEvent(c),Nt=null}else return i=Mo(o),i!==null&&Xl(i),n.blockedOn=o,!1;i.shift()}return!0}function pf(n,i,o){sa(n)&&o.delete(i)}function Yg(){Yl=!1,Zi!==null&&sa(Zi)&&(Zi=null),Qi!==null&&sa(Qi)&&(Qi=null),Ji!==null&&sa(Ji)&&(Ji=null),so.forEach(pf),oo.forEach(pf)}function lo(n,i){n.blockedOn===i&&(n.blockedOn=null,Yl||(Yl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Yg)))}function co(n){function i(f){return lo(f,n)}if(0<ra.length){lo(ra[0],n);for(var o=1;o<ra.length;o++){var c=ra[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Zi!==null&&lo(Zi,n),Qi!==null&&lo(Qi,n),Ji!==null&&lo(Ji,n),so.forEach(i),oo.forEach(i),o=0;o<er.length;o++)c=er[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<er.length&&(o=er[0],o.blockedOn===null);)hf(o),o.blockedOn===null&&er.shift()}var rs=R.ReactCurrentBatchConfig,oa=!0;function qg(n,i,o,c){var f=Et,m=rs.transition;rs.transition=null;try{Et=1,ql(n,i,o,c)}finally{Et=f,rs.transition=m}}function $g(n,i,o,c){var f=Et,m=rs.transition;rs.transition=null;try{Et=4,ql(n,i,o,c)}finally{Et=f,rs.transition=m}}function ql(n,i,o,c){if(oa){var f=$l(n,i,o,c);if(f===null)fc(n,i,c,aa,o),ff(n,c);else if(Xg(f,n,i,o,c))c.stopPropagation();else if(ff(n,c),i&4&&-1<jg.indexOf(n)){for(;f!==null;){var m=Mo(f);if(m!==null&&lf(m),m=$l(n,i,o,c),m===null&&fc(n,i,c,aa,o),m===f)break;f=m}f!==null&&c.stopPropagation()}else fc(n,i,c,null,o)}}var aa=null;function $l(n,i,o,c){if(aa=null,n=W(c),n=Cr(n),n!==null)if(i=gi(n),i===null)n=null;else if(o=i.tag,o===13){if(n=Jo(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return aa=n,null}function mf(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Y()){case we:return 1;case Ce:return 4;case Ie:case He:return 16;case it:return 536870912;default:return 16}default:return 16}}var tr=null,Kl=null,la=null;function gf(){if(la)return la;var n,i=Kl,o=i.length,c,f="value"in tr?tr.value:tr.textContent,m=f.length;for(n=0;n<o&&i[n]===f[n];n++);var w=o-n;for(c=1;c<=w&&i[o-c]===f[m-c];c++);return la=f.slice(n,1<c?1-c:void 0)}function ca(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function ua(){return!0}function vf(){return!1}function Hn(n){function i(o,c,f,m,w){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=m,this.target=w,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(o=n[I],this[I]=o?o(m):m[I]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?ua:vf,this.isPropagationStopped=vf,this}return oe(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=ua)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=ua)},persist:function(){},isPersistent:ua}),i}var ss={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zl=Hn(ss),uo=oe({},ss,{view:0,detail:0}),Kg=Hn(uo),Ql,Jl,fo,da=oe({},uo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:tc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==fo&&(fo&&n.type==="mousemove"?(Ql=n.screenX-fo.screenX,Jl=n.screenY-fo.screenY):Jl=Ql=0,fo=n),Ql)},movementY:function(n){return"movementY"in n?n.movementY:Jl}}),xf=Hn(da),Zg=oe({},da,{dataTransfer:0}),Qg=Hn(Zg),Jg=oe({},uo,{relatedTarget:0}),ec=Hn(Jg),e0=oe({},ss,{animationName:0,elapsedTime:0,pseudoElement:0}),t0=Hn(e0),n0=oe({},ss,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),i0=Hn(n0),r0=oe({},ss,{data:0}),_f=Hn(r0),s0={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},o0={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},a0={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function l0(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=a0[n])?!!i[n]:!1}function tc(){return l0}var c0=oe({},uo,{key:function(n){if(n.key){var i=s0[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=ca(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?o0[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:tc,charCode:function(n){return n.type==="keypress"?ca(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ca(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),u0=Hn(c0),d0=oe({},da,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),yf=Hn(d0),f0=oe({},uo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:tc}),h0=Hn(f0),p0=oe({},ss,{propertyName:0,elapsedTime:0,pseudoElement:0}),m0=Hn(p0),g0=oe({},da,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),v0=Hn(g0),x0=[9,13,27,32],nc=d&&"CompositionEvent"in window,ho=null;d&&"documentMode"in document&&(ho=document.documentMode);var _0=d&&"TextEvent"in window&&!ho,Sf=d&&(!nc||ho&&8<ho&&11>=ho),Mf=" ",wf=!1;function Ef(n,i){switch(n){case"keyup":return x0.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Tf(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var os=!1;function y0(n,i){switch(n){case"compositionend":return Tf(i);case"keypress":return i.which!==32?null:(wf=!0,Mf);case"textInput":return n=i.data,n===Mf&&wf?null:n;default:return null}}function S0(n,i){if(os)return n==="compositionend"||!nc&&Ef(n,i)?(n=gf(),la=Kl=tr=null,os=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return Sf&&i.locale!=="ko"?null:i.data;default:return null}}var M0={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function bf(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!M0[n.type]:i==="textarea"}function Af(n,i,o,c){Ne(c),i=ga(i,"onChange"),0<i.length&&(o=new Zl("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var po=null,mo=null;function w0(n){jf(n,0)}function fa(n){var i=ds(n);if(Ct(i))return n}function E0(n,i){if(n==="change")return i}var Cf=!1;if(d){var ic;if(d){var rc="oninput"in document;if(!rc){var Rf=document.createElement("div");Rf.setAttribute("oninput","return;"),rc=typeof Rf.oninput=="function"}ic=rc}else ic=!1;Cf=ic&&(!document.documentMode||9<document.documentMode)}function Pf(){po&&(po.detachEvent("onpropertychange",Nf),mo=po=null)}function Nf(n){if(n.propertyName==="value"&&fa(mo)){var i=[];Af(i,mo,n,W(n)),Nn(w0,i)}}function T0(n,i,o){n==="focusin"?(Pf(),po=i,mo=o,po.attachEvent("onpropertychange",Nf)):n==="focusout"&&Pf()}function b0(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return fa(mo)}function A0(n,i){if(n==="click")return fa(i)}function C0(n,i){if(n==="input"||n==="change")return fa(i)}function R0(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var ni=typeof Object.is=="function"?Object.is:R0;function go(n,i){if(ni(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!h.call(i,f)||!ni(n[f],i[f]))return!1}return!0}function Lf(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Df(n,i){var o=Lf(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Lf(o)}}function If(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?If(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Uf(){for(var n=window,i=at();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=at(n.document)}return i}function sc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function P0(n){var i=Uf(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&If(o.ownerDocument.documentElement,o)){if(c!==null&&sc(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,m=Math.min(c.start,f);c=c.end===void 0?m:Math.min(c.end,f),!n.extend&&m>c&&(f=c,c=m,m=f),f=Df(o,m);var w=Df(o,c);f&&w&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==w.node||n.focusOffset!==w.offset)&&(i=i.createRange(),i.setStart(f.node,f.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(w.node,w.offset)):(i.setEnd(w.node,w.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var N0=d&&"documentMode"in document&&11>=document.documentMode,as=null,oc=null,vo=null,ac=!1;function Ff(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;ac||as==null||as!==at(c)||(c=as,"selectionStart"in c&&sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),vo&&go(vo,c)||(vo=c,c=ga(oc,"onSelect"),0<c.length&&(i=new Zl("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=as)))}function ha(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ls={animationend:ha("Animation","AnimationEnd"),animationiteration:ha("Animation","AnimationIteration"),animationstart:ha("Animation","AnimationStart"),transitionend:ha("Transition","TransitionEnd")},lc={},kf={};d&&(kf=document.createElement("div").style,"AnimationEvent"in window||(delete ls.animationend.animation,delete ls.animationiteration.animation,delete ls.animationstart.animation),"TransitionEvent"in window||delete ls.transitionend.transition);function pa(n){if(lc[n])return lc[n];if(!ls[n])return n;var i=ls[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in kf)return lc[n]=i[o];return n}var Of=pa("animationend"),zf=pa("animationiteration"),Bf=pa("animationstart"),Hf=pa("transitionend"),Vf=new Map,Gf="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function nr(n,i){Vf.set(n,i),l(i,[n])}for(var cc=0;cc<Gf.length;cc++){var uc=Gf[cc],L0=uc.toLowerCase(),D0=uc[0].toUpperCase()+uc.slice(1);nr(L0,"on"+D0)}nr(Of,"onAnimationEnd"),nr(zf,"onAnimationIteration"),nr(Bf,"onAnimationStart"),nr("dblclick","onDoubleClick"),nr("focusin","onFocus"),nr("focusout","onBlur"),nr(Hf,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var xo="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I0=new Set("cancel close invalid load scroll toggle".split(" ").concat(xo));function Wf(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,Qo(c,i,void 0,n),n.currentTarget=null}function jf(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var w=c.length-1;0<=w;w--){var I=c[w],H=I.instance,ne=I.currentTarget;if(I=I.listener,H!==m&&f.isPropagationStopped())break e;Wf(f,I,ne),m=H}else for(w=0;w<c.length;w++){if(I=c[w],H=I.instance,ne=I.currentTarget,I=I.listener,H!==m&&f.isPropagationStopped())break e;Wf(f,I,ne),m=H}}}if(Ar)throw n=$i,Ar=!1,$i=null,n}function kt(n,i){var o=i[xc];o===void 0&&(o=i[xc]=new Set);var c=n+"__bubble";o.has(c)||(Xf(i,n,2,!1),o.add(c))}function dc(n,i,o){var c=0;i&&(c|=4),Xf(o,n,c,i)}var ma="_reactListening"+Math.random().toString(36).slice(2);function _o(n){if(!n[ma]){n[ma]=!0,r.forEach(function(o){o!=="selectionchange"&&(I0.has(o)||dc(o,!1,n),dc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[ma]||(i[ma]=!0,dc("selectionchange",!1,i))}}function Xf(n,i,o,c){switch(mf(i)){case 1:var f=qg;break;case 4:f=$g;break;default:f=ql}o=f.bind(null,i,o,n),f=void 0,!ns||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(i,o,{capture:!0,passive:f}):n.addEventListener(i,o,!0):f!==void 0?n.addEventListener(i,o,{passive:f}):n.addEventListener(i,o,!1)}function fc(n,i,o,c,f){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var w=c.tag;if(w===3||w===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(w===4)for(w=c.return;w!==null;){var H=w.tag;if((H===3||H===4)&&(H=w.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;w=w.return}for(;I!==null;){if(w=Cr(I),w===null)return;if(H=w.tag,H===5||H===6){c=m=w;continue e}I=I.parentNode}}c=c.return}Nn(function(){var ne=m,_e=W(o),Me=[];e:{var ve=Vf.get(n);if(ve!==void 0){var Ue=Zl,Ge=n;switch(n){case"keypress":if(ca(o)===0)break e;case"keydown":case"keyup":Ue=u0;break;case"focusin":Ge="focus",Ue=ec;break;case"focusout":Ge="blur",Ue=ec;break;case"beforeblur":case"afterblur":Ue=ec;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Ue=xf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Ue=Qg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Ue=h0;break;case Of:case zf:case Bf:Ue=t0;break;case Hf:Ue=m0;break;case"scroll":Ue=Kg;break;case"wheel":Ue=v0;break;case"copy":case"cut":case"paste":Ue=i0;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Ue=yf}var Ye=(i&4)!==0,Yt=!Ye&&n==="scroll",$=Ye?ve!==null?ve+"Capture":null:ve;Ye=[];for(var G=ne,Z;G!==null;){Z=G;var Te=Z.stateNode;if(Z.tag===5&&Te!==null&&(Z=Te,$!==null&&(Te=wn(G,$),Te!=null&&Ye.push(yo(G,Te,Z)))),Yt)break;G=G.return}0<Ye.length&&(ve=new Ue(ve,Ge,null,o,_e),Me.push({event:ve,listeners:Ye}))}}if((i&7)===0){e:{if(ve=n==="mouseover"||n==="pointerover",Ue=n==="mouseout"||n==="pointerout",ve&&o!==Nt&&(Ge=o.relatedTarget||o.fromElement)&&(Cr(Ge)||Ge[Ci]))break e;if((Ue||ve)&&(ve=_e.window===_e?_e:(ve=_e.ownerDocument)?ve.defaultView||ve.parentWindow:window,Ue?(Ge=o.relatedTarget||o.toElement,Ue=ne,Ge=Ge?Cr(Ge):null,Ge!==null&&(Yt=gi(Ge),Ge!==Yt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Ue=null,Ge=ne),Ue!==Ge)){if(Ye=xf,Te="onMouseLeave",$="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Ye=yf,Te="onPointerLeave",$="onPointerEnter",G="pointer"),Yt=Ue==null?ve:ds(Ue),Z=Ge==null?ve:ds(Ge),ve=new Ye(Te,G+"leave",Ue,o,_e),ve.target=Yt,ve.relatedTarget=Z,Te=null,Cr(_e)===ne&&(Ye=new Ye($,G+"enter",Ge,o,_e),Ye.target=Z,Ye.relatedTarget=Yt,Te=Ye),Yt=Te,Ue&&Ge)t:{for(Ye=Ue,$=Ge,G=0,Z=Ye;Z;Z=cs(Z))G++;for(Z=0,Te=$;Te;Te=cs(Te))Z++;for(;0<G-Z;)Ye=cs(Ye),G--;for(;0<Z-G;)$=cs($),Z--;for(;G--;){if(Ye===$||$!==null&&Ye===$.alternate)break t;Ye=cs(Ye),$=cs($)}Ye=null}else Ye=null;Ue!==null&&Yf(Me,ve,Ue,Ye,!1),Ge!==null&&Yt!==null&&Yf(Me,Yt,Ge,Ye,!0)}}e:{if(ve=ne?ds(ne):window,Ue=ve.nodeName&&ve.nodeName.toLowerCase(),Ue==="select"||Ue==="input"&&ve.type==="file")var $e=E0;else if(bf(ve))if(Cf)$e=C0;else{$e=b0;var Je=T0}else(Ue=ve.nodeName)&&Ue.toLowerCase()==="input"&&(ve.type==="checkbox"||ve.type==="radio")&&($e=A0);if($e&&($e=$e(n,ne))){Af(Me,$e,o,_e);break e}Je&&Je(n,ve,ne),n==="focusout"&&(Je=ve._wrapperState)&&Je.controlled&&ve.type==="number"&&Rt(ve,"number",ve.value)}switch(Je=ne?ds(ne):window,n){case"focusin":(bf(Je)||Je.contentEditable==="true")&&(as=Je,oc=ne,vo=null);break;case"focusout":vo=oc=as=null;break;case"mousedown":ac=!0;break;case"contextmenu":case"mouseup":case"dragend":ac=!1,Ff(Me,o,_e);break;case"selectionchange":if(N0)break;case"keydown":case"keyup":Ff(Me,o,_e)}var et;if(nc)e:{switch(n){case"compositionstart":var rt="onCompositionStart";break e;case"compositionend":rt="onCompositionEnd";break e;case"compositionupdate":rt="onCompositionUpdate";break e}rt=void 0}else os?Ef(n,o)&&(rt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(rt="onCompositionStart");rt&&(Sf&&o.locale!=="ko"&&(os||rt!=="onCompositionStart"?rt==="onCompositionEnd"&&os&&(et=gf()):(tr=_e,Kl="value"in tr?tr.value:tr.textContent,os=!0)),Je=ga(ne,rt),0<Je.length&&(rt=new _f(rt,n,null,o,_e),Me.push({event:rt,listeners:Je}),et?rt.data=et:(et=Tf(o),et!==null&&(rt.data=et)))),(et=_0?y0(n,o):S0(n,o))&&(ne=ga(ne,"onBeforeInput"),0<ne.length&&(_e=new _f("onBeforeInput","beforeinput",null,o,_e),Me.push({event:_e,listeners:ne}),_e.data=et))}jf(Me,i)})}function yo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function ga(n,i){for(var o=i+"Capture",c=[];n!==null;){var f=n,m=f.stateNode;f.tag===5&&m!==null&&(f=m,m=wn(n,o),m!=null&&c.unshift(yo(n,m,f)),m=wn(n,i),m!=null&&c.push(yo(n,m,f))),n=n.return}return c}function cs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Yf(n,i,o,c,f){for(var m=i._reactName,w=[];o!==null&&o!==c;){var I=o,H=I.alternate,ne=I.stateNode;if(H!==null&&H===c)break;I.tag===5&&ne!==null&&(I=ne,f?(H=wn(o,m),H!=null&&w.unshift(yo(o,H,I))):f||(H=wn(o,m),H!=null&&w.push(yo(o,H,I)))),o=o.return}w.length!==0&&n.push({event:i,listeners:w})}var U0=/\r\n?/g,F0=/\u0000|\uFFFD/g;function qf(n){return(typeof n=="string"?n:""+n).replace(U0,`
`).replace(F0,"")}function va(n,i,o){if(i=qf(i),qf(n)!==i&&o)throw Error(t(425))}function xa(){}var hc=null,pc=null;function mc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var gc=typeof setTimeout=="function"?setTimeout:void 0,k0=typeof clearTimeout=="function"?clearTimeout:void 0,$f=typeof Promise=="function"?Promise:void 0,O0=typeof queueMicrotask=="function"?queueMicrotask:typeof $f<"u"?function(n){return $f.resolve(null).then(n).catch(z0)}:gc;function z0(n){setTimeout(function(){throw n})}function vc(n,i){var o=i,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),co(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);co(i)}function ir(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Kf(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var us=Math.random().toString(36).slice(2),xi="__reactFiber$"+us,So="__reactProps$"+us,Ci="__reactContainer$"+us,xc="__reactEvents$"+us,B0="__reactListeners$"+us,H0="__reactHandles$"+us;function Cr(n){var i=n[xi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ci]||o[xi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Kf(n);n!==null;){if(o=n[xi])return o;n=Kf(n)}return i}n=o,o=n.parentNode}return null}function Mo(n){return n=n[xi]||n[Ci],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ds(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function _a(n){return n[So]||null}var _c=[],fs=-1;function rr(n){return{current:n}}function Ot(n){0>fs||(n.current=_c[fs],_c[fs]=null,fs--)}function Ut(n,i){fs++,_c[fs]=n.current,n.current=i}var sr={},vn=rr(sr),Ln=rr(!1),Rr=sr;function hs(n,i){var o=n.type.contextTypes;if(!o)return sr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var f={},m;for(m in o)f[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=f),f}function Dn(n){return n=n.childContextTypes,n!=null}function ya(){Ot(Ln),Ot(vn)}function Zf(n,i,o){if(vn.current!==sr)throw Error(t(168));Ut(vn,i),Ut(Ln,o)}function Qf(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in i))throw Error(t(108,xe(n)||"Unknown",f));return oe({},o,c)}function Sa(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||sr,Rr=vn.current,Ut(vn,n),Ut(Ln,Ln.current),!0}function Jf(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Qf(n,i,Rr),c.__reactInternalMemoizedMergedChildContext=n,Ot(Ln),Ot(vn),Ut(vn,n)):Ot(Ln),Ut(Ln,o)}var Ri=null,Ma=!1,yc=!1;function eh(n){Ri===null?Ri=[n]:Ri.push(n)}function V0(n){Ma=!0,eh(n)}function or(){if(!yc&&Ri!==null){yc=!0;var n=0,i=Et;try{var o=Ri;for(Et=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Ri=null,Ma=!1}catch(f){throw Ri!==null&&(Ri=Ri.slice(n+1)),ia(we,or),f}finally{Et=i,yc=!1}}return null}var ps=[],ms=0,wa=null,Ea=0,qn=[],$n=0,Pr=null,Pi=1,Ni="";function Nr(n,i){ps[ms++]=Ea,ps[ms++]=wa,wa=n,Ea=i}function th(n,i,o){qn[$n++]=Pi,qn[$n++]=Ni,qn[$n++]=Pr,Pr=n;var c=Pi;n=Ni;var f=32-lt(c)-1;c&=~(1<<f),o+=1;var m=32-lt(i)+f;if(30<m){var w=f-f%5;m=(c&(1<<w)-1).toString(32),c>>=w,f-=w,Pi=1<<32-lt(i)+f|o<<f|c,Ni=m+n}else Pi=1<<m|o<<f|c,Ni=n}function Sc(n){n.return!==null&&(Nr(n,1),th(n,1,0))}function Mc(n){for(;n===wa;)wa=ps[--ms],ps[ms]=null,Ea=ps[--ms],ps[ms]=null;for(;n===Pr;)Pr=qn[--$n],qn[$n]=null,Ni=qn[--$n],qn[$n]=null,Pi=qn[--$n],qn[$n]=null}var Vn=null,Gn=null,Bt=!1,ii=null;function nh(n,i){var o=Jn(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function ih(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Vn=n,Gn=ir(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Vn=n,Gn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Pr!==null?{id:Pi,overflow:Ni}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=Jn(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Vn=n,Gn=null,!0):!1;default:return!1}}function wc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Ec(n){if(Bt){var i=Gn;if(i){var o=i;if(!ih(n,i)){if(wc(n))throw Error(t(418));i=ir(o.nextSibling);var c=Vn;i&&ih(n,i)?nh(c,o):(n.flags=n.flags&-4097|2,Bt=!1,Vn=n)}}else{if(wc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Bt=!1,Vn=n}}}function rh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Vn=n}function Ta(n){if(n!==Vn)return!1;if(!Bt)return rh(n),Bt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!mc(n.type,n.memoizedProps)),i&&(i=Gn)){if(wc(n))throw sh(),Error(t(418));for(;i;)nh(n,i),i=ir(i.nextSibling)}if(rh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){Gn=ir(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}Gn=null}}else Gn=Vn?ir(n.stateNode.nextSibling):null;return!0}function sh(){for(var n=Gn;n;)n=ir(n.nextSibling)}function gs(){Gn=Vn=null,Bt=!1}function Tc(n){ii===null?ii=[n]:ii.push(n)}var G0=R.ReactCurrentBatchConfig;function wo(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(w){var I=f.refs;w===null?delete I[m]:I[m]=w},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function ba(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function oh(n){var i=n._init;return i(n._payload)}function ah(n){function i($,G){if(n){var Z=$.deletions;Z===null?($.deletions=[G],$.flags|=16):Z.push(G)}}function o($,G){if(!n)return null;for(;G!==null;)i($,G),G=G.sibling;return null}function c($,G){for($=new Map;G!==null;)G.key!==null?$.set(G.key,G):$.set(G.index,G),G=G.sibling;return $}function f($,G){return $=pr($,G),$.index=0,$.sibling=null,$}function m($,G,Z){return $.index=Z,n?(Z=$.alternate,Z!==null?(Z=Z.index,Z<G?($.flags|=2,G):Z):($.flags|=2,G)):($.flags|=1048576,G)}function w($){return n&&$.alternate===null&&($.flags|=2),$}function I($,G,Z,Te){return G===null||G.tag!==6?(G=gu(Z,$.mode,Te),G.return=$,G):(G=f(G,Z),G.return=$,G)}function H($,G,Z,Te){var $e=Z.type;return $e===U?_e($,G,Z.props.children,Te,Z.key):G!==null&&(G.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===re&&oh($e)===G.type)?(Te=f(G,Z.props),Te.ref=wo($,G,Z),Te.return=$,Te):(Te=Ka(Z.type,Z.key,Z.props,null,$.mode,Te),Te.ref=wo($,G,Z),Te.return=$,Te)}function ne($,G,Z,Te){return G===null||G.tag!==4||G.stateNode.containerInfo!==Z.containerInfo||G.stateNode.implementation!==Z.implementation?(G=vu(Z,$.mode,Te),G.return=$,G):(G=f(G,Z.children||[]),G.return=$,G)}function _e($,G,Z,Te,$e){return G===null||G.tag!==7?(G=zr(Z,$.mode,Te,$e),G.return=$,G):(G=f(G,Z),G.return=$,G)}function Me($,G,Z){if(typeof G=="string"&&G!==""||typeof G=="number")return G=gu(""+G,$.mode,Z),G.return=$,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case k:return Z=Ka(G.type,G.key,G.props,null,$.mode,Z),Z.ref=wo($,null,G),Z.return=$,Z;case O:return G=vu(G,$.mode,Z),G.return=$,G;case re:var Te=G._init;return Me($,Te(G._payload),Z)}if(Xe(G)||ce(G))return G=zr(G,$.mode,Z,null),G.return=$,G;ba($,G)}return null}function ve($,G,Z,Te){var $e=G!==null?G.key:null;if(typeof Z=="string"&&Z!==""||typeof Z=="number")return $e!==null?null:I($,G,""+Z,Te);if(typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case k:return Z.key===$e?H($,G,Z,Te):null;case O:return Z.key===$e?ne($,G,Z,Te):null;case re:return $e=Z._init,ve($,G,$e(Z._payload),Te)}if(Xe(Z)||ce(Z))return $e!==null?null:_e($,G,Z,Te,null);ba($,Z)}return null}function Ue($,G,Z,Te,$e){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return $=$.get(Z)||null,I(G,$,""+Te,$e);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case k:return $=$.get(Te.key===null?Z:Te.key)||null,H(G,$,Te,$e);case O:return $=$.get(Te.key===null?Z:Te.key)||null,ne(G,$,Te,$e);case re:var Je=Te._init;return Ue($,G,Z,Je(Te._payload),$e)}if(Xe(Te)||ce(Te))return $=$.get(Z)||null,_e(G,$,Te,$e,null);ba(G,Te)}return null}function Ge($,G,Z,Te){for(var $e=null,Je=null,et=G,rt=G=0,an=null;et!==null&&rt<Z.length;rt++){et.index>rt?(an=et,et=null):an=et.sibling;var bt=ve($,et,Z[rt],Te);if(bt===null){et===null&&(et=an);break}n&&et&&bt.alternate===null&&i($,et),G=m(bt,G,rt),Je===null?$e=bt:Je.sibling=bt,Je=bt,et=an}if(rt===Z.length)return o($,et),Bt&&Nr($,rt),$e;if(et===null){for(;rt<Z.length;rt++)et=Me($,Z[rt],Te),et!==null&&(G=m(et,G,rt),Je===null?$e=et:Je.sibling=et,Je=et);return Bt&&Nr($,rt),$e}for(et=c($,et);rt<Z.length;rt++)an=Ue(et,$,rt,Z[rt],Te),an!==null&&(n&&an.alternate!==null&&et.delete(an.key===null?rt:an.key),G=m(an,G,rt),Je===null?$e=an:Je.sibling=an,Je=an);return n&&et.forEach(function(mr){return i($,mr)}),Bt&&Nr($,rt),$e}function Ye($,G,Z,Te){var $e=ce(Z);if(typeof $e!="function")throw Error(t(150));if(Z=$e.call(Z),Z==null)throw Error(t(151));for(var Je=$e=null,et=G,rt=G=0,an=null,bt=Z.next();et!==null&&!bt.done;rt++,bt=Z.next()){et.index>rt?(an=et,et=null):an=et.sibling;var mr=ve($,et,bt.value,Te);if(mr===null){et===null&&(et=an);break}n&&et&&mr.alternate===null&&i($,et),G=m(mr,G,rt),Je===null?$e=mr:Je.sibling=mr,Je=mr,et=an}if(bt.done)return o($,et),Bt&&Nr($,rt),$e;if(et===null){for(;!bt.done;rt++,bt=Z.next())bt=Me($,bt.value,Te),bt!==null&&(G=m(bt,G,rt),Je===null?$e=bt:Je.sibling=bt,Je=bt);return Bt&&Nr($,rt),$e}for(et=c($,et);!bt.done;rt++,bt=Z.next())bt=Ue(et,$,rt,bt.value,Te),bt!==null&&(n&&bt.alternate!==null&&et.delete(bt.key===null?rt:bt.key),G=m(bt,G,rt),Je===null?$e=bt:Je.sibling=bt,Je=bt);return n&&et.forEach(function(Mv){return i($,Mv)}),Bt&&Nr($,rt),$e}function Yt($,G,Z,Te){if(typeof Z=="object"&&Z!==null&&Z.type===U&&Z.key===null&&(Z=Z.props.children),typeof Z=="object"&&Z!==null){switch(Z.$$typeof){case k:e:{for(var $e=Z.key,Je=G;Je!==null;){if(Je.key===$e){if($e=Z.type,$e===U){if(Je.tag===7){o($,Je.sibling),G=f(Je,Z.props.children),G.return=$,$=G;break e}}else if(Je.elementType===$e||typeof $e=="object"&&$e!==null&&$e.$$typeof===re&&oh($e)===Je.type){o($,Je.sibling),G=f(Je,Z.props),G.ref=wo($,Je,Z),G.return=$,$=G;break e}o($,Je);break}else i($,Je);Je=Je.sibling}Z.type===U?(G=zr(Z.props.children,$.mode,Te,Z.key),G.return=$,$=G):(Te=Ka(Z.type,Z.key,Z.props,null,$.mode,Te),Te.ref=wo($,G,Z),Te.return=$,$=Te)}return w($);case O:e:{for(Je=Z.key;G!==null;){if(G.key===Je)if(G.tag===4&&G.stateNode.containerInfo===Z.containerInfo&&G.stateNode.implementation===Z.implementation){o($,G.sibling),G=f(G,Z.children||[]),G.return=$,$=G;break e}else{o($,G);break}else i($,G);G=G.sibling}G=vu(Z,$.mode,Te),G.return=$,$=G}return w($);case re:return Je=Z._init,Yt($,G,Je(Z._payload),Te)}if(Xe(Z))return Ge($,G,Z,Te);if(ce(Z))return Ye($,G,Z,Te);ba($,Z)}return typeof Z=="string"&&Z!==""||typeof Z=="number"?(Z=""+Z,G!==null&&G.tag===6?(o($,G.sibling),G=f(G,Z),G.return=$,$=G):(o($,G),G=gu(Z,$.mode,Te),G.return=$,$=G),w($)):o($,G)}return Yt}var vs=ah(!0),lh=ah(!1),Aa=rr(null),Ca=null,xs=null,bc=null;function Ac(){bc=xs=Ca=null}function Cc(n){var i=Aa.current;Ot(Aa),n._currentValue=i}function Rc(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function _s(n,i){Ca=n,bc=xs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(In=!0),n.firstContext=null)}function Kn(n){var i=n._currentValue;if(bc!==n)if(n={context:n,memoizedValue:i,next:null},xs===null){if(Ca===null)throw Error(t(308));xs=n,Ca.dependencies={lanes:0,firstContext:n}}else xs=xs.next=n;return i}var Lr=null;function Pc(n){Lr===null?Lr=[n]:Lr.push(n)}function ch(n,i,o,c){var f=i.interleaved;return f===null?(o.next=o,Pc(i)):(o.next=f.next,f.next=o),i.interleaved=o,Li(n,c)}function Li(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var ar=!1;function Nc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function uh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Di(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function lr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Tt&2)!==0){var f=c.pending;return f===null?i.next=i:(i.next=f.next,f.next=i),c.pending=i,Li(n,o)}return f=c.interleaved,f===null?(i.next=i,Pc(c)):(i.next=f.next,f.next=i),c.interleaved=i,Li(n,o)}function Ra(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,rn(n,o)}}function dh(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,m=null;if(o=o.firstBaseUpdate,o!==null){do{var w={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};m===null?f=m=w:m=m.next=w,o=o.next}while(o!==null);m===null?f=m=i:m=m.next=i}else f=m=i;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Pa(n,i,o,c){var f=n.updateQueue;ar=!1;var m=f.firstBaseUpdate,w=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var H=I,ne=H.next;H.next=null,w===null?m=ne:w.next=ne,w=H;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,I=_e.lastBaseUpdate,I!==w&&(I===null?_e.firstBaseUpdate=ne:I.next=ne,_e.lastBaseUpdate=H))}if(m!==null){var Me=f.baseState;w=0,_e=ne=H=null,I=m;do{var ve=I.lane,Ue=I.eventTime;if((c&ve)===ve){_e!==null&&(_e=_e.next={eventTime:Ue,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var Ge=n,Ye=I;switch(ve=i,Ue=o,Ye.tag){case 1:if(Ge=Ye.payload,typeof Ge=="function"){Me=Ge.call(Ue,Me,ve);break e}Me=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=Ye.payload,ve=typeof Ge=="function"?Ge.call(Ue,Me,ve):Ge,ve==null)break e;Me=oe({},Me,ve);break e;case 2:ar=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,ve=f.effects,ve===null?f.effects=[I]:ve.push(I))}else Ue={eventTime:Ue,lane:ve,tag:I.tag,payload:I.payload,callback:I.callback,next:null},_e===null?(ne=_e=Ue,H=Me):_e=_e.next=Ue,w|=ve;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;ve=I,I=ve.next,ve.next=null,f.lastBaseUpdate=ve,f.shared.pending=null}}while(!0);if(_e===null&&(H=Me),f.baseState=H,f.firstBaseUpdate=ne,f.lastBaseUpdate=_e,i=f.shared.interleaved,i!==null){f=i;do w|=f.lane,f=f.next;while(f!==i)}else m===null&&(f.shared.lanes=0);Ur|=w,n.lanes=w,n.memoizedState=Me}}function fh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Eo={},_i=rr(Eo),To=rr(Eo),bo=rr(Eo);function Dr(n){if(n===Eo)throw Error(t(174));return n}function Lc(n,i){switch(Ut(bo,i),Ut(To,n),Ut(_i,Eo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:qe(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=qe(i,n)}Ot(_i),Ut(_i,i)}function ys(){Ot(_i),Ot(To),Ot(bo)}function hh(n){Dr(bo.current);var i=Dr(_i.current),o=qe(i,n.type);i!==o&&(Ut(To,n),Ut(_i,o))}function Dc(n){To.current===n&&(Ot(_i),Ot(To))}var Vt=rr(0);function Na(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Ic=[];function Uc(){for(var n=0;n<Ic.length;n++)Ic[n]._workInProgressVersionPrimary=null;Ic.length=0}var La=R.ReactCurrentDispatcher,Fc=R.ReactCurrentBatchConfig,Ir=0,Gt=null,Qt=null,sn=null,Da=!1,Ao=!1,Co=0,W0=0;function xn(){throw Error(t(321))}function kc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!ni(n[o],i[o]))return!1;return!0}function Oc(n,i,o,c,f,m){if(Ir=m,Gt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,La.current=n===null||n.memoizedState===null?q0:$0,n=o(c,f),Ao){m=0;do{if(Ao=!1,Co=0,25<=m)throw Error(t(301));m+=1,sn=Qt=null,i.updateQueue=null,La.current=K0,n=o(c,f)}while(Ao)}if(La.current=Fa,i=Qt!==null&&Qt.next!==null,Ir=0,sn=Qt=Gt=null,Da=!1,i)throw Error(t(300));return n}function zc(){var n=Co!==0;return Co=0,n}function yi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return sn===null?Gt.memoizedState=sn=n:sn=sn.next=n,sn}function Zn(){if(Qt===null){var n=Gt.alternate;n=n!==null?n.memoizedState:null}else n=Qt.next;var i=sn===null?Gt.memoizedState:sn.next;if(i!==null)sn=i,Qt=n;else{if(n===null)throw Error(t(310));Qt=n,n={memoizedState:Qt.memoizedState,baseState:Qt.baseState,baseQueue:Qt.baseQueue,queue:Qt.queue,next:null},sn===null?Gt.memoizedState=sn=n:sn=sn.next=n}return sn}function Ro(n,i){return typeof i=="function"?i(n):i}function Bc(n){var i=Zn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=Qt,f=c.baseQueue,m=o.pending;if(m!==null){if(f!==null){var w=f.next;f.next=m.next,m.next=w}c.baseQueue=f=m,o.pending=null}if(f!==null){m=f.next,c=c.baseState;var I=w=null,H=null,ne=m;do{var _e=ne.lane;if((Ir&_e)===_e)H!==null&&(H=H.next={lane:0,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null}),c=ne.hasEagerState?ne.eagerState:n(c,ne.action);else{var Me={lane:_e,action:ne.action,hasEagerState:ne.hasEagerState,eagerState:ne.eagerState,next:null};H===null?(I=H=Me,w=c):H=H.next=Me,Gt.lanes|=_e,Ur|=_e}ne=ne.next}while(ne!==null&&ne!==m);H===null?w=c:H.next=I,ni(c,i.memoizedState)||(In=!0),i.memoizedState=c,i.baseState=w,i.baseQueue=H,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do m=f.lane,Gt.lanes|=m,Ur|=m,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Hc(n){var i=Zn(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,m=i.memoizedState;if(f!==null){o.pending=null;var w=f=f.next;do m=n(m,w.action),w=w.next;while(w!==f);ni(m,i.memoizedState)||(In=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),o.lastRenderedState=m}return[m,c]}function ph(){}function mh(n,i){var o=Gt,c=Zn(),f=i(),m=!ni(c.memoizedState,f);if(m&&(c.memoizedState=f,In=!0),c=c.queue,Vc(xh.bind(null,o,c,n),[n]),c.getSnapshot!==i||m||sn!==null&&sn.memoizedState.tag&1){if(o.flags|=2048,Po(9,vh.bind(null,o,c,f,i),void 0,null),on===null)throw Error(t(349));(Ir&30)!==0||gh(o,i,f)}return f}function gh(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function vh(n,i,o,c){i.value=o,i.getSnapshot=c,_h(i)&&yh(n)}function xh(n,i,o){return o(function(){_h(i)&&yh(n)})}function _h(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!ni(n,o)}catch{return!0}}function yh(n){var i=Li(n,1);i!==null&&ai(i,n,1,-1)}function Sh(n){var i=yi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ro,lastRenderedState:n},i.queue=n,n=n.dispatch=Y0.bind(null,Gt,n),[i.memoizedState,n]}function Po(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Gt.updateQueue,i===null?(i={lastEffect:null,stores:null},Gt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Mh(){return Zn().memoizedState}function Ia(n,i,o,c){var f=yi();Gt.flags|=n,f.memoizedState=Po(1|i,o,void 0,c===void 0?null:c)}function Ua(n,i,o,c){var f=Zn();c=c===void 0?null:c;var m=void 0;if(Qt!==null){var w=Qt.memoizedState;if(m=w.destroy,c!==null&&kc(c,w.deps)){f.memoizedState=Po(i,o,m,c);return}}Gt.flags|=n,f.memoizedState=Po(1|i,o,m,c)}function wh(n,i){return Ia(8390656,8,n,i)}function Vc(n,i){return Ua(2048,8,n,i)}function Eh(n,i){return Ua(4,2,n,i)}function Th(n,i){return Ua(4,4,n,i)}function bh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function Ah(n,i,o){return o=o!=null?o.concat([n]):null,Ua(4,4,bh.bind(null,i,n),o)}function Gc(){}function Ch(n,i){var o=Zn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&kc(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Rh(n,i){var o=Zn();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&kc(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Ph(n,i,o){return(Ir&21)===0?(n.baseState&&(n.baseState=!1,In=!0),n.memoizedState=o):(ni(o,i)||(o=It(),Gt.lanes|=o,Ur|=o,n.baseState=!0),i)}function j0(n,i){var o=Et;Et=o!==0&&4>o?o:4,n(!0);var c=Fc.transition;Fc.transition={};try{n(!1),i()}finally{Et=o,Fc.transition=c}}function Nh(){return Zn().memoizedState}function X0(n,i,o){var c=fr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Lh(n))Dh(i,o);else if(o=ch(n,i,o,c),o!==null){var f=bn();ai(o,n,c,f),Ih(o,i,c)}}function Y0(n,i,o){var c=fr(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Lh(n))Dh(i,f);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var w=i.lastRenderedState,I=m(w,o);if(f.hasEagerState=!0,f.eagerState=I,ni(I,w)){var H=i.interleaved;H===null?(f.next=f,Pc(i)):(f.next=H.next,H.next=f),i.interleaved=f;return}}catch{}finally{}o=ch(n,i,f,c),o!==null&&(f=bn(),ai(o,n,c,f),Ih(o,i,c))}}function Lh(n){var i=n.alternate;return n===Gt||i!==null&&i===Gt}function Dh(n,i){Ao=Da=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Ih(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,rn(n,o)}}var Fa={readContext:Kn,useCallback:xn,useContext:xn,useEffect:xn,useImperativeHandle:xn,useInsertionEffect:xn,useLayoutEffect:xn,useMemo:xn,useReducer:xn,useRef:xn,useState:xn,useDebugValue:xn,useDeferredValue:xn,useTransition:xn,useMutableSource:xn,useSyncExternalStore:xn,useId:xn,unstable_isNewReconciler:!1},q0={readContext:Kn,useCallback:function(n,i){return yi().memoizedState=[n,i===void 0?null:i],n},useContext:Kn,useEffect:wh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Ia(4194308,4,bh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Ia(4194308,4,n,i)},useInsertionEffect:function(n,i){return Ia(4,2,n,i)},useMemo:function(n,i){var o=yi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=yi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=X0.bind(null,Gt,n),[c.memoizedState,n]},useRef:function(n){var i=yi();return n={current:n},i.memoizedState=n},useState:Sh,useDebugValue:Gc,useDeferredValue:function(n){return yi().memoizedState=n},useTransition:function(){var n=Sh(!1),i=n[0];return n=j0.bind(null,n[1]),yi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Gt,f=yi();if(Bt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),on===null)throw Error(t(349));(Ir&30)!==0||gh(c,i,o)}f.memoizedState=o;var m={value:o,getSnapshot:i};return f.queue=m,wh(xh.bind(null,c,m,n),[n]),c.flags|=2048,Po(9,vh.bind(null,c,m,o,i),void 0,null),o},useId:function(){var n=yi(),i=on.identifierPrefix;if(Bt){var o=Ni,c=Pi;o=(c&~(1<<32-lt(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=Co++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=W0++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},$0={readContext:Kn,useCallback:Ch,useContext:Kn,useEffect:Vc,useImperativeHandle:Ah,useInsertionEffect:Eh,useLayoutEffect:Th,useMemo:Rh,useReducer:Bc,useRef:Mh,useState:function(){return Bc(Ro)},useDebugValue:Gc,useDeferredValue:function(n){var i=Zn();return Ph(i,Qt.memoizedState,n)},useTransition:function(){var n=Bc(Ro)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:ph,useSyncExternalStore:mh,useId:Nh,unstable_isNewReconciler:!1},K0={readContext:Kn,useCallback:Ch,useContext:Kn,useEffect:Vc,useImperativeHandle:Ah,useInsertionEffect:Eh,useLayoutEffect:Th,useMemo:Rh,useReducer:Hc,useRef:Mh,useState:function(){return Hc(Ro)},useDebugValue:Gc,useDeferredValue:function(n){var i=Zn();return Qt===null?i.memoizedState=n:Ph(i,Qt.memoizedState,n)},useTransition:function(){var n=Hc(Ro)[0],i=Zn().memoizedState;return[n,i]},useMutableSource:ph,useSyncExternalStore:mh,useId:Nh,unstable_isNewReconciler:!1};function ri(n,i){if(n&&n.defaultProps){i=oe({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Wc(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:oe({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var ka={isMounted:function(n){return(n=n._reactInternals)?gi(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=bn(),f=fr(n),m=Di(c,f);m.payload=i,o!=null&&(m.callback=o),i=lr(n,m,f),i!==null&&(ai(i,n,f,c),Ra(i,n,f))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=bn(),f=fr(n),m=Di(c,f);m.tag=1,m.payload=i,o!=null&&(m.callback=o),i=lr(n,m,f),i!==null&&(ai(i,n,f,c),Ra(i,n,f))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=bn(),c=fr(n),f=Di(o,c);f.tag=2,i!=null&&(f.callback=i),i=lr(n,f,c),i!==null&&(ai(i,n,c,o),Ra(i,n,c))}};function Uh(n,i,o,c,f,m,w){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,w):i.prototype&&i.prototype.isPureReactComponent?!go(o,c)||!go(f,m):!0}function Fh(n,i,o){var c=!1,f=sr,m=i.contextType;return typeof m=="object"&&m!==null?m=Kn(m):(f=Dn(i)?Rr:vn.current,c=i.contextTypes,m=(c=c!=null)?hs(n,f):sr),i=new i(o,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=ka,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=m),i}function kh(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&ka.enqueueReplaceState(i,i.state,null)}function jc(n,i,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Nc(n);var m=i.contextType;typeof m=="object"&&m!==null?f.context=Kn(m):(m=Dn(i)?Rr:vn.current,f.context=hs(n,m)),f.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(Wc(n,i,m,o),f.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(i=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),i!==f.state&&ka.enqueueReplaceState(f,f.state,null),Pa(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ss(n,i){try{var o="",c=i;do o+=he(c),c=c.return;while(c);var f=o}catch(m){f=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:f,digest:null}}function Xc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Yc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Z0=typeof WeakMap=="function"?WeakMap:Map;function Oh(n,i,o){o=Di(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){Wa||(Wa=!0,lu=c),Yc(n,i)},o}function zh(n,i,o){o=Di(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=i.value;o.payload=function(){return c(f)},o.callback=function(){Yc(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(o.callback=function(){Yc(n,i),typeof c!="function"&&(ur===null?ur=new Set([this]):ur.add(this));var w=i.stack;this.componentDidCatch(i.value,{componentStack:w!==null?w:""})}),o}function Bh(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new Z0;var f=new Set;c.set(i,f)}else f=c.get(i),f===void 0&&(f=new Set,c.set(i,f));f.has(o)||(f.add(o),n=dv.bind(null,n,i,o),i.then(n,n))}function Hh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Vh(n,i,o,c,f){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Di(-1,1),i.tag=2,lr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var Q0=R.ReactCurrentOwner,In=!1;function Tn(n,i,o,c){i.child=n===null?lh(i,null,o,c):vs(i,n.child,o,c)}function Gh(n,i,o,c,f){o=o.render;var m=i.ref;return _s(i,f),c=Oc(n,i,o,c,m,f),o=zc(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ii(n,i,f)):(Bt&&o&&Sc(i),i.flags|=1,Tn(n,i,c,f),i.child)}function Wh(n,i,o,c,f){if(n===null){var m=o.type;return typeof m=="function"&&!mu(m)&&m.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=m,jh(n,i,m,c,f)):(n=Ka(o.type,null,c,i,i.mode,f),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&f)===0){var w=m.memoizedProps;if(o=o.compare,o=o!==null?o:go,o(w,c)&&n.ref===i.ref)return Ii(n,i,f)}return i.flags|=1,n=pr(m,c),n.ref=i.ref,n.return=i,i.child=n}function jh(n,i,o,c,f){if(n!==null){var m=n.memoizedProps;if(go(m,c)&&n.ref===i.ref)if(In=!1,i.pendingProps=c=m,(n.lanes&f)!==0)(n.flags&131072)!==0&&(In=!0);else return i.lanes=n.lanes,Ii(n,i,f)}return qc(n,i,o,c,f)}function Xh(n,i,o){var c=i.pendingProps,f=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ut(ws,Wn),Wn|=o;else{if((o&1073741824)===0)return n=m!==null?m.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Ut(ws,Wn),Wn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:o,Ut(ws,Wn),Wn|=c}else m!==null?(c=m.baseLanes|o,i.memoizedState=null):c=o,Ut(ws,Wn),Wn|=c;return Tn(n,i,f,o),i.child}function Yh(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function qc(n,i,o,c,f){var m=Dn(o)?Rr:vn.current;return m=hs(i,m),_s(i,f),o=Oc(n,i,o,c,m,f),c=zc(),n!==null&&!In?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~f,Ii(n,i,f)):(Bt&&c&&Sc(i),i.flags|=1,Tn(n,i,o,f),i.child)}function qh(n,i,o,c,f){if(Dn(o)){var m=!0;Sa(i)}else m=!1;if(_s(i,f),i.stateNode===null)za(n,i),Fh(i,o,c),jc(i,o,c,f),c=!0;else if(n===null){var w=i.stateNode,I=i.memoizedProps;w.props=I;var H=w.context,ne=o.contextType;typeof ne=="object"&&ne!==null?ne=Kn(ne):(ne=Dn(o)?Rr:vn.current,ne=hs(i,ne));var _e=o.getDerivedStateFromProps,Me=typeof _e=="function"||typeof w.getSnapshotBeforeUpdate=="function";Me||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==c||H!==ne)&&kh(i,w,c,ne),ar=!1;var ve=i.memoizedState;w.state=ve,Pa(i,c,w,f),H=i.memoizedState,I!==c||ve!==H||Ln.current||ar?(typeof _e=="function"&&(Wc(i,o,_e,c),H=i.memoizedState),(I=ar||Uh(i,o,I,c,ve,H,ne))?(Me||typeof w.UNSAFE_componentWillMount!="function"&&typeof w.componentWillMount!="function"||(typeof w.componentWillMount=="function"&&w.componentWillMount(),typeof w.UNSAFE_componentWillMount=="function"&&w.UNSAFE_componentWillMount()),typeof w.componentDidMount=="function"&&(i.flags|=4194308)):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=H),w.props=c,w.state=H,w.context=ne,c=I):(typeof w.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{w=i.stateNode,uh(n,i),I=i.memoizedProps,ne=i.type===i.elementType?I:ri(i.type,I),w.props=ne,Me=i.pendingProps,ve=w.context,H=o.contextType,typeof H=="object"&&H!==null?H=Kn(H):(H=Dn(o)?Rr:vn.current,H=hs(i,H));var Ue=o.getDerivedStateFromProps;(_e=typeof Ue=="function"||typeof w.getSnapshotBeforeUpdate=="function")||typeof w.UNSAFE_componentWillReceiveProps!="function"&&typeof w.componentWillReceiveProps!="function"||(I!==Me||ve!==H)&&kh(i,w,c,H),ar=!1,ve=i.memoizedState,w.state=ve,Pa(i,c,w,f);var Ge=i.memoizedState;I!==Me||ve!==Ge||Ln.current||ar?(typeof Ue=="function"&&(Wc(i,o,Ue,c),Ge=i.memoizedState),(ne=ar||Uh(i,o,ne,c,ve,Ge,H)||!1)?(_e||typeof w.UNSAFE_componentWillUpdate!="function"&&typeof w.componentWillUpdate!="function"||(typeof w.componentWillUpdate=="function"&&w.componentWillUpdate(c,Ge,H),typeof w.UNSAFE_componentWillUpdate=="function"&&w.UNSAFE_componentWillUpdate(c,Ge,H)),typeof w.componentDidUpdate=="function"&&(i.flags|=4),typeof w.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ge),w.props=c,w.state=Ge,w.context=H,c=ne):(typeof w.componentDidUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=4),typeof w.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&ve===n.memoizedState||(i.flags|=1024),c=!1)}return $c(n,i,o,c,m,f)}function $c(n,i,o,c,f,m){Yh(n,i);var w=(i.flags&128)!==0;if(!c&&!w)return f&&Jf(i,o,!1),Ii(n,i,m);c=i.stateNode,Q0.current=i;var I=w&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&w?(i.child=vs(i,n.child,null,m),i.child=vs(i,null,I,m)):Tn(n,i,I,m),i.memoizedState=c.state,f&&Jf(i,o,!0),i.child}function $h(n){var i=n.stateNode;i.pendingContext?Zf(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Zf(n,i.context,!1),Lc(n,i.containerInfo)}function Kh(n,i,o,c,f){return gs(),Tc(f),i.flags|=256,Tn(n,i,o,c),i.child}var Kc={dehydrated:null,treeContext:null,retryLane:0};function Zc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Zh(n,i,o){var c=i.pendingProps,f=Vt.current,m=!1,w=(i.flags&128)!==0,I;if((I=w)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Ut(Vt,f&1),n===null)return Ec(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(w=c.children,n=c.fallback,m?(c=i.mode,m=i.child,w={mode:"hidden",children:w},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=w):m=Za(w,c,0,null),n=zr(n,c,o,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=Zc(o),i.memoizedState=Kc,n):Qc(i,w));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return J0(n,i,w,c,I,f,o);if(m){m=c.fallback,w=i.mode,f=n.child,I=f.sibling;var H={mode:"hidden",children:c.children};return(w&1)===0&&i.child!==f?(c=i.child,c.childLanes=0,c.pendingProps=H,i.deletions=null):(c=pr(f,H),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?m=pr(I,m):(m=zr(m,w,o,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,w=n.child.memoizedState,w=w===null?Zc(o):{baseLanes:w.baseLanes|o,cachePool:null,transitions:w.transitions},m.memoizedState=w,m.childLanes=n.childLanes&~o,i.memoizedState=Kc,c}return m=n.child,n=m.sibling,c=pr(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function Qc(n,i){return i=Za({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Oa(n,i,o,c){return c!==null&&Tc(c),vs(i,n.child,null,o),n=Qc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function J0(n,i,o,c,f,m,w){if(o)return i.flags&256?(i.flags&=-257,c=Xc(Error(t(422))),Oa(n,i,w,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,f=i.mode,c=Za({mode:"visible",children:c.children},f,0,null),m=zr(m,f,w,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&vs(i,n.child,null,w),i.child.memoizedState=Zc(w),i.memoizedState=Kc,m);if((i.mode&1)===0)return Oa(n,i,w,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,m=Error(t(419)),c=Xc(m,c,void 0),Oa(n,i,w,c)}if(I=(w&n.childLanes)!==0,In||I){if(c=on,c!==null){switch(w&-w){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|w))!==0?0:f,f!==0&&f!==m.retryLane&&(m.retryLane=f,Li(n,f),ai(c,n,f,-1))}return pu(),c=Xc(Error(t(421))),Oa(n,i,w,c)}return f.data==="$?"?(i.flags|=128,i.child=n.child,i=fv.bind(null,n),f._reactRetry=i,null):(n=m.treeContext,Gn=ir(f.nextSibling),Vn=i,Bt=!0,ii=null,n!==null&&(qn[$n++]=Pi,qn[$n++]=Ni,qn[$n++]=Pr,Pi=n.id,Ni=n.overflow,Pr=i),i=Qc(i,c.children),i.flags|=4096,i)}function Qh(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Rc(n.return,i,o)}function Jc(n,i,o,c,f){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=o,m.tailMode=f)}function Jh(n,i,o){var c=i.pendingProps,f=c.revealOrder,m=c.tail;if(Tn(n,i,c.children,o),c=Vt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Qh(n,o,i);else if(n.tag===19)Qh(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Ut(Vt,c),(i.mode&1)===0)i.memoizedState=null;else switch(f){case"forwards":for(o=i.child,f=null;o!==null;)n=o.alternate,n!==null&&Na(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=i.child,i.child=null):(f=o.sibling,o.sibling=null),Jc(i,!1,f,o,m);break;case"backwards":for(o=null,f=i.child,i.child=null;f!==null;){if(n=f.alternate,n!==null&&Na(n)===null){i.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Jc(i,!0,o,null,m);break;case"together":Jc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function za(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Ii(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Ur|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=pr(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=pr(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function ev(n,i,o){switch(i.tag){case 3:$h(i),gs();break;case 5:hh(i);break;case 1:Dn(i.type)&&Sa(i);break;case 4:Lc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,f=i.memoizedProps.value;Ut(Aa,c._currentValue),c._currentValue=f;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Ut(Vt,Vt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Zh(n,i,o):(Ut(Vt,Vt.current&1),n=Ii(n,i,o),n!==null?n.sibling:null);Ut(Vt,Vt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Jh(n,i,o);i.flags|=128}if(f=i.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Ut(Vt,Vt.current),c)break;return null;case 22:case 23:return i.lanes=0,Xh(n,i,o)}return Ii(n,i,o)}var ep,eu,tp,np;ep=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},eu=function(){},tp=function(n,i,o,c){var f=n.memoizedProps;if(f!==c){n=i.stateNode,Dr(_i.current);var m=null;switch(o){case"input":f=z(n,f),c=z(n,c),m=[];break;case"select":f=oe({},f,{value:void 0}),c=oe({},c,{value:void 0}),m=[];break;case"textarea":f=T(n,f),c=T(n,c),m=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=xa)}mt(o,c);var w;o=null;for(ne in f)if(!c.hasOwnProperty(ne)&&f.hasOwnProperty(ne)&&f[ne]!=null)if(ne==="style"){var I=f[ne];for(w in I)I.hasOwnProperty(w)&&(o||(o={}),o[w]="")}else ne!=="dangerouslySetInnerHTML"&&ne!=="children"&&ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&ne!=="autoFocus"&&(a.hasOwnProperty(ne)?m||(m=[]):(m=m||[]).push(ne,null));for(ne in c){var H=c[ne];if(I=f!=null?f[ne]:void 0,c.hasOwnProperty(ne)&&H!==I&&(H!=null||I!=null))if(ne==="style")if(I){for(w in I)!I.hasOwnProperty(w)||H&&H.hasOwnProperty(w)||(o||(o={}),o[w]="");for(w in H)H.hasOwnProperty(w)&&I[w]!==H[w]&&(o||(o={}),o[w]=H[w])}else o||(m||(m=[]),m.push(ne,o)),o=H;else ne==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(m=m||[]).push(ne,H)):ne==="children"?typeof H!="string"&&typeof H!="number"||(m=m||[]).push(ne,""+H):ne!=="suppressContentEditableWarning"&&ne!=="suppressHydrationWarning"&&(a.hasOwnProperty(ne)?(H!=null&&ne==="onScroll"&&kt("scroll",n),m||I===H||(m=[])):(m=m||[]).push(ne,H))}o&&(m=m||[]).push("style",o);var ne=m;(i.updateQueue=ne)&&(i.flags|=4)}},np=function(n,i,o,c){o!==c&&(i.flags|=4)};function No(n,i){if(!Bt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function _n(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function tv(n,i,o){var c=i.pendingProps;switch(Mc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return _n(i),null;case 1:return Dn(i.type)&&ya(),_n(i),null;case 3:return c=i.stateNode,ys(),Ot(Ln),Ot(vn),Uc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ta(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ii!==null&&(du(ii),ii=null))),eu(n,i),_n(i),null;case 5:Dc(i);var f=Dr(bo.current);if(o=i.type,n!==null&&i.stateNode!=null)tp(n,i,o,c,f),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return _n(i),null}if(n=Dr(_i.current),Ta(i)){c=i.stateNode,o=i.type;var m=i.memoizedProps;switch(c[xi]=i,c[So]=m,n=(i.mode&1)!==0,o){case"dialog":kt("cancel",c),kt("close",c);break;case"iframe":case"object":case"embed":kt("load",c);break;case"video":case"audio":for(f=0;f<xo.length;f++)kt(xo[f],c);break;case"source":kt("error",c);break;case"img":case"image":case"link":kt("error",c),kt("load",c);break;case"details":kt("toggle",c);break;case"input":un(c,m),kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},kt("invalid",c);break;case"textarea":J(c,m),kt("invalid",c)}mt(o,m),f=null;for(var w in m)if(m.hasOwnProperty(w)){var I=m[w];w==="children"?typeof I=="string"?c.textContent!==I&&(m.suppressHydrationWarning!==!0&&va(c.textContent,I,n),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(m.suppressHydrationWarning!==!0&&va(c.textContent,I,n),f=["children",""+I]):a.hasOwnProperty(w)&&I!=null&&w==="onScroll"&&kt("scroll",c)}switch(o){case"input":Pt(c),Ke(c,m,!0);break;case"textarea":Pt(c),ge(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=xa)}c=f,i.updateQueue=c,c!==null&&(i.flags|=4)}else{w=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=fe(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=w.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=w.createElement(o,{is:c.is}):(n=w.createElement(o),o==="select"&&(w=n,c.multiple?w.multiple=!0:c.size&&(w.size=c.size))):n=w.createElementNS(n,o),n[xi]=i,n[So]=c,ep(n,i,!1,!1),i.stateNode=n;e:{switch(w=st(o,c),o){case"dialog":kt("cancel",n),kt("close",n),f=c;break;case"iframe":case"object":case"embed":kt("load",n),f=c;break;case"video":case"audio":for(f=0;f<xo.length;f++)kt(xo[f],n);f=c;break;case"source":kt("error",n),f=c;break;case"img":case"image":case"link":kt("error",n),kt("load",n),f=c;break;case"details":kt("toggle",n),f=c;break;case"input":un(n,c),f=z(n,c),kt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=oe({},c,{value:void 0}),kt("invalid",n);break;case"textarea":J(n,c),f=T(n,c),kt("invalid",n);break;default:f=c}mt(o,f),I=f;for(m in I)if(I.hasOwnProperty(m)){var H=I[m];m==="style"?nt(n,H):m==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&ke(n,H)):m==="children"?typeof H=="string"?(o!=="textarea"||H!=="")&&pt(n,H):typeof H=="number"&&pt(n,""+H):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(a.hasOwnProperty(m)?H!=null&&m==="onScroll"&&kt("scroll",n):H!=null&&N(n,m,H,w))}switch(o){case"input":Pt(n),Ke(n,c,!1);break;case"textarea":Pt(n),ge(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ye(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?L(n,!!c.multiple,m,!1):c.defaultValue!=null&&L(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=xa)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return _n(i),null;case 6:if(n&&i.stateNode!=null)np(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=Dr(bo.current),Dr(_i.current),Ta(i)){if(c=i.stateNode,o=i.memoizedProps,c[xi]=i,(m=c.nodeValue!==o)&&(n=Vn,n!==null))switch(n.tag){case 3:va(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&va(c.nodeValue,o,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[xi]=i,i.stateNode=c}return _n(i),null;case 13:if(Ot(Vt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Bt&&Gn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)sh(),gs(),i.flags|=98560,m=!1;else if(m=Ta(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[xi]=i}else gs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;_n(i),m=!1}else ii!==null&&(du(ii),ii=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Vt.current&1)!==0?Jt===0&&(Jt=3):pu())),i.updateQueue!==null&&(i.flags|=4),_n(i),null);case 4:return ys(),eu(n,i),n===null&&_o(i.stateNode.containerInfo),_n(i),null;case 10:return Cc(i.type._context),_n(i),null;case 17:return Dn(i.type)&&ya(),_n(i),null;case 19:if(Ot(Vt),m=i.memoizedState,m===null)return _n(i),null;if(c=(i.flags&128)!==0,w=m.rendering,w===null)if(c)No(m,!1);else{if(Jt!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(w=Na(n),w!==null){for(i.flags|=128,No(m,!1),c=w.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)m=o,n=c,m.flags&=14680066,w=m.alternate,w===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=w.childLanes,m.lanes=w.lanes,m.child=w.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=w.memoizedProps,m.memoizedState=w.memoizedState,m.updateQueue=w.updateQueue,m.type=w.type,n=w.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Ut(Vt,Vt.current&1|2),i.child}n=n.sibling}m.tail!==null&&K()>Es&&(i.flags|=128,c=!0,No(m,!1),i.lanes=4194304)}else{if(!c)if(n=Na(w),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),No(m,!0),m.tail===null&&m.tailMode==="hidden"&&!w.alternate&&!Bt)return _n(i),null}else 2*K()-m.renderingStartTime>Es&&o!==1073741824&&(i.flags|=128,c=!0,No(m,!1),i.lanes=4194304);m.isBackwards?(w.sibling=i.child,i.child=w):(o=m.last,o!==null?o.sibling=w:i.child=w,m.last=w)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=K(),i.sibling=null,o=Vt.current,Ut(Vt,c?o&1|2:o&1),i):(_n(i),null);case 22:case 23:return hu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Wn&1073741824)!==0&&(_n(i),i.subtreeFlags&6&&(i.flags|=8192)):_n(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function nv(n,i){switch(Mc(i),i.tag){case 1:return Dn(i.type)&&ya(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return ys(),Ot(Ln),Ot(vn),Uc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Dc(i),null;case 13:if(Ot(Vt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));gs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Ot(Vt),null;case 4:return ys(),null;case 10:return Cc(i.type._context),null;case 22:case 23:return hu(),null;case 24:return null;default:return null}}var Ba=!1,yn=!1,iv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ms(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Xt(n,i,c)}else o.current=null}function tu(n,i,o){try{o()}catch(c){Xt(n,i,c)}}var ip=!1;function rv(n,i){if(hc=oa,n=Uf(),sc(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{o.nodeType,m.nodeType}catch{o=null;break e}var w=0,I=-1,H=-1,ne=0,_e=0,Me=n,ve=null;t:for(;;){for(var Ue;Me!==o||f!==0&&Me.nodeType!==3||(I=w+f),Me!==m||c!==0&&Me.nodeType!==3||(H=w+c),Me.nodeType===3&&(w+=Me.nodeValue.length),(Ue=Me.firstChild)!==null;)ve=Me,Me=Ue;for(;;){if(Me===n)break t;if(ve===o&&++ne===f&&(I=w),ve===m&&++_e===c&&(H=w),(Ue=Me.nextSibling)!==null)break;Me=ve,ve=Me.parentNode}Me=Ue}o=I===-1||H===-1?null:{start:I,end:H}}else o=null}o=o||{start:0,end:0}}else o=null;for(pc={focusedElem:n,selectionRange:o},oa=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var Ye=Ge.memoizedProps,Yt=Ge.memoizedState,$=i.stateNode,G=$.getSnapshotBeforeUpdate(i.elementType===i.type?Ye:ri(i.type,Ye),Yt);$.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var Z=i.stateNode.containerInfo;Z.nodeType===1?Z.textContent="":Z.nodeType===9&&Z.documentElement&&Z.removeChild(Z.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){Xt(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return Ge=ip,ip=!1,Ge}function Lo(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var m=f.destroy;f.destroy=void 0,m!==void 0&&tu(i,o,m)}f=f.next}while(f!==c)}}function Ha(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function nu(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function rp(n){var i=n.alternate;i!==null&&(n.alternate=null,rp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[xi],delete i[So],delete i[xc],delete i[B0],delete i[H0])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function sp(n){return n.tag===5||n.tag===3||n.tag===4}function op(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||sp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function iu(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=xa));else if(c!==4&&(n=n.child,n!==null))for(iu(n,i,o),n=n.sibling;n!==null;)iu(n,i,o),n=n.sibling}function ru(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ru(n,i,o),n=n.sibling;n!==null;)ru(n,i,o),n=n.sibling}var fn=null,si=!1;function cr(n,i,o){for(o=o.child;o!==null;)ap(n,i,o),o=o.sibling}function ap(n,i,o){if(We&&typeof We.onCommitFiberUnmount=="function")try{We.onCommitFiberUnmount(tt,o)}catch{}switch(o.tag){case 5:yn||Ms(o,i);case 6:var c=fn,f=si;fn=null,cr(n,i,o),fn=c,si=f,fn!==null&&(si?(n=fn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):fn.removeChild(o.stateNode));break;case 18:fn!==null&&(si?(n=fn,o=o.stateNode,n.nodeType===8?vc(n.parentNode,o):n.nodeType===1&&vc(n,o),co(n)):vc(fn,o.stateNode));break;case 4:c=fn,f=si,fn=o.stateNode.containerInfo,si=!0,cr(n,i,o),fn=c,si=f;break;case 0:case 11:case 14:case 15:if(!yn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var m=f,w=m.destroy;m=m.tag,w!==void 0&&((m&2)!==0||(m&4)!==0)&&tu(o,i,w),f=f.next}while(f!==c)}cr(n,i,o);break;case 1:if(!yn&&(Ms(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(I){Xt(o,i,I)}cr(n,i,o);break;case 21:cr(n,i,o);break;case 22:o.mode&1?(yn=(c=yn)||o.memoizedState!==null,cr(n,i,o),yn=c):cr(n,i,o);break;default:cr(n,i,o)}}function lp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new iv),i.forEach(function(c){var f=hv.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function oi(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var m=n,w=i,I=w;e:for(;I!==null;){switch(I.tag){case 5:fn=I.stateNode,si=!1;break e;case 3:fn=I.stateNode.containerInfo,si=!0;break e;case 4:fn=I.stateNode.containerInfo,si=!0;break e}I=I.return}if(fn===null)throw Error(t(160));ap(m,w,f),fn=null,si=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(ne){Xt(f,i,ne)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)cp(i,n),i=i.sibling}function cp(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(oi(i,n),Si(n),c&4){try{Lo(3,n,n.return),Ha(3,n)}catch(Ye){Xt(n,n.return,Ye)}try{Lo(5,n,n.return)}catch(Ye){Xt(n,n.return,Ye)}}break;case 1:oi(i,n),Si(n),c&512&&o!==null&&Ms(o,o.return);break;case 5:if(oi(i,n),Si(n),c&512&&o!==null&&Ms(o,o.return),n.flags&32){var f=n.stateNode;try{pt(f,"")}catch(Ye){Xt(n,n.return,Ye)}}if(c&4&&(f=n.stateNode,f!=null)){var m=n.memoizedProps,w=o!==null?o.memoizedProps:m,I=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{I==="input"&&m.type==="radio"&&m.name!=null&&ht(f,m),st(I,w);var ne=st(I,m);for(w=0;w<H.length;w+=2){var _e=H[w],Me=H[w+1];_e==="style"?nt(f,Me):_e==="dangerouslySetInnerHTML"?ke(f,Me):_e==="children"?pt(f,Me):N(f,_e,Me,ne)}switch(I){case"input":dt(f,m);break;case"textarea":me(f,m);break;case"select":var ve=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!m.multiple;var Ue=m.value;Ue!=null?L(f,!!m.multiple,Ue,!1):ve!==!!m.multiple&&(m.defaultValue!=null?L(f,!!m.multiple,m.defaultValue,!0):L(f,!!m.multiple,m.multiple?[]:"",!1))}f[So]=m}catch(Ye){Xt(n,n.return,Ye)}}break;case 6:if(oi(i,n),Si(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,m=n.memoizedProps;try{f.nodeValue=m}catch(Ye){Xt(n,n.return,Ye)}}break;case 3:if(oi(i,n),Si(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{co(i.containerInfo)}catch(Ye){Xt(n,n.return,Ye)}break;case 4:oi(i,n),Si(n);break;case 13:oi(i,n),Si(n),f=n.child,f.flags&8192&&(m=f.memoizedState!==null,f.stateNode.isHidden=m,!m||f.alternate!==null&&f.alternate.memoizedState!==null||(au=K())),c&4&&lp(n);break;case 22:if(_e=o!==null&&o.memoizedState!==null,n.mode&1?(yn=(ne=yn)||_e,oi(i,n),yn=ne):oi(i,n),Si(n),c&8192){if(ne=n.memoizedState!==null,(n.stateNode.isHidden=ne)&&!_e&&(n.mode&1)!==0)for(Oe=n,_e=n.child;_e!==null;){for(Me=Oe=_e;Oe!==null;){switch(ve=Oe,Ue=ve.child,ve.tag){case 0:case 11:case 14:case 15:Lo(4,ve,ve.return);break;case 1:Ms(ve,ve.return);var Ge=ve.stateNode;if(typeof Ge.componentWillUnmount=="function"){c=ve,o=ve.return;try{i=c,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(Ye){Xt(c,o,Ye)}}break;case 5:Ms(ve,ve.return);break;case 22:if(ve.memoizedState!==null){fp(Me);continue}}Ue!==null?(Ue.return=ve,Oe=Ue):fp(Me)}_e=_e.sibling}e:for(_e=null,Me=n;;){if(Me.tag===5){if(_e===null){_e=Me;try{f=Me.stateNode,ne?(m=f.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(I=Me.stateNode,H=Me.memoizedProps.style,w=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=Qe("display",w))}catch(Ye){Xt(n,n.return,Ye)}}}else if(Me.tag===6){if(_e===null)try{Me.stateNode.nodeValue=ne?"":Me.memoizedProps}catch(Ye){Xt(n,n.return,Ye)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;_e===Me&&(_e=null),Me=Me.return}_e===Me&&(_e=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:oi(i,n),Si(n),c&4&&lp(n);break;case 21:break;default:oi(i,n),Si(n)}}function Si(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(sp(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(pt(f,""),c.flags&=-33);var m=op(n);ru(n,m,f);break;case 3:case 4:var w=c.stateNode.containerInfo,I=op(n);iu(n,I,w);break;default:throw Error(t(161))}}catch(H){Xt(n,n.return,H)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function sv(n,i,o){Oe=n,up(n)}function up(n,i,o){for(var c=(n.mode&1)!==0;Oe!==null;){var f=Oe,m=f.child;if(f.tag===22&&c){var w=f.memoizedState!==null||Ba;if(!w){var I=f.alternate,H=I!==null&&I.memoizedState!==null||yn;I=Ba;var ne=yn;if(Ba=w,(yn=H)&&!ne)for(Oe=f;Oe!==null;)w=Oe,H=w.child,w.tag===22&&w.memoizedState!==null?hp(f):H!==null?(H.return=w,Oe=H):hp(f);for(;m!==null;)Oe=m,up(m),m=m.sibling;Oe=f,Ba=I,yn=ne}dp(n)}else(f.subtreeFlags&8772)!==0&&m!==null?(m.return=f,Oe=m):dp(n)}}function dp(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:yn||Ha(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!yn)if(o===null)c.componentDidMount();else{var f=i.elementType===i.type?o.memoizedProps:ri(i.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&fh(i,m,c);break;case 3:var w=i.updateQueue;if(w!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}fh(i,w,o)}break;case 5:var I=i.stateNode;if(o===null&&i.flags&4){o=I;var H=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&o.focus();break;case"img":H.src&&(o.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var ne=i.alternate;if(ne!==null){var _e=ne.memoizedState;if(_e!==null){var Me=_e.dehydrated;Me!==null&&co(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}yn||i.flags&512&&nu(i)}catch(ve){Xt(i,i.return,ve)}}if(i===n){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function fp(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function hp(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Ha(4,i)}catch(H){Xt(i,o,H)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var f=i.return;try{c.componentDidMount()}catch(H){Xt(i,f,H)}}var m=i.return;try{nu(i)}catch(H){Xt(i,m,H)}break;case 5:var w=i.return;try{nu(i)}catch(H){Xt(i,w,H)}}}catch(H){Xt(i,i.return,H)}if(i===n){Oe=null;break}var I=i.sibling;if(I!==null){I.return=i.return,Oe=I;break}Oe=i.return}}var ov=Math.ceil,Va=R.ReactCurrentDispatcher,su=R.ReactCurrentOwner,Qn=R.ReactCurrentBatchConfig,Tt=0,on=null,qt=null,hn=0,Wn=0,ws=rr(0),Jt=0,Do=null,Ur=0,Ga=0,ou=0,Io=null,Un=null,au=0,Es=1/0,Ui=null,Wa=!1,lu=null,ur=null,ja=!1,dr=null,Xa=0,Uo=0,cu=null,Ya=-1,qa=0;function bn(){return(Tt&6)!==0?K():Ya!==-1?Ya:Ya=K()}function fr(n){return(n.mode&1)===0?1:(Tt&2)!==0&&hn!==0?hn&-hn:G0.transition!==null?(qa===0&&(qa=It()),qa):(n=Et,n!==0||(n=window.event,n=n===void 0?16:mf(n.type)),n)}function ai(n,i,o,c){if(50<Uo)throw Uo=0,cu=null,Error(t(185));nn(n,o,c),((Tt&2)===0||n!==on)&&(n===on&&((Tt&2)===0&&(Ga|=o),Jt===4&&hr(n,hn)),Fn(n,c),o===1&&Tt===0&&(i.mode&1)===0&&(Es=K()+500,Ma&&or()))}function Fn(n,i){var o=n.callbackNode;En(n,i);var c=mn(n,n===on?hn:0);if(c===0)o!==null&&A(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&A(o),i===1)n.tag===0?V0(mp.bind(null,n)):eh(mp.bind(null,n)),O0(function(){(Tt&6)===0&&or()}),o=null;else{switch(vi(c)){case 1:o=we;break;case 4:o=Ce;break;case 16:o=Ie;break;case 536870912:o=it;break;default:o=Ie}o=wp(o,pp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function pp(n,i){if(Ya=-1,qa=0,(Tt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ts()&&n.callbackNode!==o)return null;var c=mn(n,n===on?hn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=$a(n,c);else{i=c;var f=Tt;Tt|=2;var m=vp();(on!==n||hn!==i)&&(Ui=null,Es=K()+500,kr(n,i));do try{cv();break}catch(I){gp(n,I)}while(!0);Ac(),Va.current=m,Tt=f,qt!==null?i=0:(on=null,hn=0,i=Jt)}if(i!==0){if(i===2&&(f=Ai(n),f!==0&&(c=f,i=uu(n,f))),i===1)throw o=Do,kr(n,0),hr(n,c),Fn(n,K()),o;if(i===6)hr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!av(f)&&(i=$a(n,c),i===2&&(m=Ai(n),m!==0&&(c=m,i=uu(n,m))),i===1))throw o=Do,kr(n,0),hr(n,c),Fn(n,K()),o;switch(n.finishedWork=f,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Or(n,Un,Ui);break;case 3:if(hr(n,c),(c&130023424)===c&&(i=au+500-K(),10<i)){if(mn(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){bn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=gc(Or.bind(null,n,Un,Ui),i);break}Or(n,Un,Ui);break;case 4:if(hr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,f=-1;0<c;){var w=31-lt(c);m=1<<w,w=i[w],w>f&&(f=w),c&=~m}if(c=f,c=K()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*ov(c/1960))-c,10<c){n.timeoutHandle=gc(Or.bind(null,n,Un,Ui),c);break}Or(n,Un,Ui);break;case 5:Or(n,Un,Ui);break;default:throw Error(t(329))}}}return Fn(n,K()),n.callbackNode===o?pp.bind(null,n):null}function uu(n,i){var o=Io;return n.current.memoizedState.isDehydrated&&(kr(n,i).flags|=256),n=$a(n,i),n!==2&&(i=Un,Un=o,i!==null&&du(i)),n}function du(n){Un===null?Un=n:Un.push.apply(Un,n)}function av(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],m=f.getSnapshot;f=f.value;try{if(!ni(m(),f))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function hr(n,i){for(i&=~ou,i&=~Ga,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-lt(i),c=1<<o;n[o]=-1,i&=~c}}function mp(n){if((Tt&6)!==0)throw Error(t(327));Ts();var i=mn(n,0);if((i&1)===0)return Fn(n,K()),null;var o=$a(n,i);if(n.tag!==0&&o===2){var c=Ai(n);c!==0&&(i=c,o=uu(n,c))}if(o===1)throw o=Do,kr(n,0),hr(n,i),Fn(n,K()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Or(n,Un,Ui),Fn(n,K()),null}function fu(n,i){var o=Tt;Tt|=1;try{return n(i)}finally{Tt=o,Tt===0&&(Es=K()+500,Ma&&or())}}function Fr(n){dr!==null&&dr.tag===0&&(Tt&6)===0&&Ts();var i=Tt;Tt|=1;var o=Qn.transition,c=Et;try{if(Qn.transition=null,Et=1,n)return n()}finally{Et=c,Qn.transition=o,Tt=i,(Tt&6)===0&&or()}}function hu(){Wn=ws.current,Ot(ws)}function kr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,k0(o)),qt!==null)for(o=qt.return;o!==null;){var c=o;switch(Mc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ya();break;case 3:ys(),Ot(Ln),Ot(vn),Uc();break;case 5:Dc(c);break;case 4:ys();break;case 13:Ot(Vt);break;case 19:Ot(Vt);break;case 10:Cc(c.type._context);break;case 22:case 23:hu()}o=o.return}if(on=n,qt=n=pr(n.current,null),hn=Wn=i,Jt=0,Do=null,ou=Ga=Ur=0,Un=Io=null,Lr!==null){for(i=0;i<Lr.length;i++)if(o=Lr[i],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,m=o.pending;if(m!==null){var w=m.next;m.next=f,c.next=w}o.pending=c}Lr=null}return n}function gp(n,i){do{var o=qt;try{if(Ac(),La.current=Fa,Da){for(var c=Gt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}Da=!1}if(Ir=0,sn=Qt=Gt=null,Ao=!1,Co=0,su.current=null,o===null||o.return===null){Jt=1,Do=i,qt=null;break}e:{var m=n,w=o.return,I=o,H=i;if(i=hn,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var ne=H,_e=I,Me=_e.tag;if((_e.mode&1)===0&&(Me===0||Me===11||Me===15)){var ve=_e.alternate;ve?(_e.updateQueue=ve.updateQueue,_e.memoizedState=ve.memoizedState,_e.lanes=ve.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Ue=Hh(w);if(Ue!==null){Ue.flags&=-257,Vh(Ue,w,I,m,i),Ue.mode&1&&Bh(m,ne,i),i=Ue,H=ne;var Ge=i.updateQueue;if(Ge===null){var Ye=new Set;Ye.add(H),i.updateQueue=Ye}else Ge.add(H);break e}else{if((i&1)===0){Bh(m,ne,i),pu();break e}H=Error(t(426))}}else if(Bt&&I.mode&1){var Yt=Hh(w);if(Yt!==null){(Yt.flags&65536)===0&&(Yt.flags|=256),Vh(Yt,w,I,m,i),Tc(Ss(H,I));break e}}m=H=Ss(H,I),Jt!==4&&(Jt=2),Io===null?Io=[m]:Io.push(m),m=w;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var $=Oh(m,H,i);dh(m,$);break e;case 1:I=H;var G=m.type,Z=m.stateNode;if((m.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||Z!==null&&typeof Z.componentDidCatch=="function"&&(ur===null||!ur.has(Z)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=zh(m,I,i);dh(m,Te);break e}}m=m.return}while(m!==null)}_p(o)}catch($e){i=$e,qt===o&&o!==null&&(qt=o=o.return);continue}break}while(!0)}function vp(){var n=Va.current;return Va.current=Fa,n===null?Fa:n}function pu(){(Jt===0||Jt===3||Jt===2)&&(Jt=4),on===null||(Ur&268435455)===0&&(Ga&268435455)===0||hr(on,hn)}function $a(n,i){var o=Tt;Tt|=2;var c=vp();(on!==n||hn!==i)&&(Ui=null,kr(n,i));do try{lv();break}catch(f){gp(n,f)}while(!0);if(Ac(),Tt=o,Va.current=c,qt!==null)throw Error(t(261));return on=null,hn=0,Jt}function lv(){for(;qt!==null;)xp(qt)}function cv(){for(;qt!==null&&!X();)xp(qt)}function xp(n){var i=Mp(n.alternate,n,Wn);n.memoizedProps=n.pendingProps,i===null?_p(n):qt=i,su.current=null}function _p(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=tv(o,i,Wn),o!==null){qt=o;return}}else{if(o=nv(o,i),o!==null){o.flags&=32767,qt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Jt=6,qt=null;return}}if(i=i.sibling,i!==null){qt=i;return}qt=i=n}while(i!==null);Jt===0&&(Jt=5)}function Or(n,i,o){var c=Et,f=Qn.transition;try{Qn.transition=null,Et=1,uv(n,i,o,c)}finally{Qn.transition=f,Et=c}return null}function uv(n,i,o,c){do Ts();while(dr!==null);if((Tt&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=o.lanes|o.childLanes;if(dn(n,m),n===on&&(qt=on=null,hn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||ja||(ja=!0,wp(Ie,function(){return Ts(),null})),m=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||m){m=Qn.transition,Qn.transition=null;var w=Et;Et=1;var I=Tt;Tt|=4,su.current=null,rv(n,o),cp(o,n),P0(pc),oa=!!hc,pc=hc=null,n.current=o,sv(o),te(),Tt=I,Et=w,Qn.transition=m}else n.current=o;if(ja&&(ja=!1,dr=n,Xa=f),m=n.pendingLanes,m===0&&(ur=null),_t(o.stateNode),Fn(n,K()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)f=i[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Wa)throw Wa=!1,n=lu,lu=null,n;return(Xa&1)!==0&&n.tag!==0&&Ts(),m=n.pendingLanes,(m&1)!==0?n===cu?Uo++:(Uo=0,cu=n):Uo=0,or(),null}function Ts(){if(dr!==null){var n=vi(Xa),i=Qn.transition,o=Et;try{if(Qn.transition=null,Et=16>n?16:n,dr===null)var c=!1;else{if(n=dr,dr=null,Xa=0,(Tt&6)!==0)throw Error(t(331));var f=Tt;for(Tt|=4,Oe=n.current;Oe!==null;){var m=Oe,w=m.child;if((Oe.flags&16)!==0){var I=m.deletions;if(I!==null){for(var H=0;H<I.length;H++){var ne=I[H];for(Oe=ne;Oe!==null;){var _e=Oe;switch(_e.tag){case 0:case 11:case 15:Lo(8,_e,m)}var Me=_e.child;if(Me!==null)Me.return=_e,Oe=Me;else for(;Oe!==null;){_e=Oe;var ve=_e.sibling,Ue=_e.return;if(rp(_e),_e===ne){Oe=null;break}if(ve!==null){ve.return=Ue,Oe=ve;break}Oe=Ue}}}var Ge=m.alternate;if(Ge!==null){var Ye=Ge.child;if(Ye!==null){Ge.child=null;do{var Yt=Ye.sibling;Ye.sibling=null,Ye=Yt}while(Ye!==null)}}Oe=m}}if((m.subtreeFlags&2064)!==0&&w!==null)w.return=m,Oe=w;else e:for(;Oe!==null;){if(m=Oe,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Lo(9,m,m.return)}var $=m.sibling;if($!==null){$.return=m.return,Oe=$;break e}Oe=m.return}}var G=n.current;for(Oe=G;Oe!==null;){w=Oe;var Z=w.child;if((w.subtreeFlags&2064)!==0&&Z!==null)Z.return=w,Oe=Z;else e:for(w=G;Oe!==null;){if(I=Oe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:Ha(9,I)}}catch($e){Xt(I,I.return,$e)}if(I===w){Oe=null;break e}var Te=I.sibling;if(Te!==null){Te.return=I.return,Oe=Te;break e}Oe=I.return}}if(Tt=f,or(),We&&typeof We.onPostCommitFiberRoot=="function")try{We.onPostCommitFiberRoot(tt,n)}catch{}c=!0}return c}finally{Et=o,Qn.transition=i}}return!1}function yp(n,i,o){i=Ss(o,i),i=Oh(n,i,1),n=lr(n,i,1),i=bn(),n!==null&&(nn(n,1,i),Fn(n,i))}function Xt(n,i,o){if(n.tag===3)yp(n,n,o);else for(;i!==null;){if(i.tag===3){yp(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(ur===null||!ur.has(c))){n=Ss(o,n),n=zh(i,n,1),i=lr(i,n,1),n=bn(),i!==null&&(nn(i,1,n),Fn(i,n));break}}i=i.return}}function dv(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=bn(),n.pingedLanes|=n.suspendedLanes&o,on===n&&(hn&o)===o&&(Jt===4||Jt===3&&(hn&130023424)===hn&&500>K()-au?kr(n,0):ou|=o),Fn(n,i)}function Sp(n,i){i===0&&((n.mode&1)===0?i=1:(i=jt,jt<<=1,(jt&130023424)===0&&(jt=4194304)));var o=bn();n=Li(n,i),n!==null&&(nn(n,i,o),Fn(n,o))}function fv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),Sp(n,o)}function hv(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),Sp(n,o)}var Mp;Mp=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Ln.current)In=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return In=!1,ev(n,i,o);In=(n.flags&131072)!==0}else In=!1,Bt&&(i.flags&1048576)!==0&&th(i,Ea,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;za(n,i),n=i.pendingProps;var f=hs(i,vn.current);_s(i,o),f=Oc(null,i,c,n,f,o);var m=zc();return i.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Dn(c)?(m=!0,Sa(i)):m=!1,i.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Nc(i),f.updater=ka,i.stateNode=f,f._reactInternals=i,jc(i,c,n,o),i=$c(null,i,c,!0,m,o)):(i.tag=0,Bt&&m&&Sc(i),Tn(null,i,f,o),i=i.child),i;case 16:c=i.elementType;e:{switch(za(n,i),n=i.pendingProps,f=c._init,c=f(c._payload),i.type=c,f=i.tag=mv(c),n=ri(c,n),f){case 0:i=qc(null,i,c,n,o);break e;case 1:i=qh(null,i,c,n,o);break e;case 11:i=Gh(null,i,c,n,o);break e;case 14:i=Wh(null,i,c,ri(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ri(c,f),qc(n,i,c,f,o);case 1:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ri(c,f),qh(n,i,c,f,o);case 3:e:{if($h(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,f=m.element,uh(n,i),Pa(i,c,null,o);var w=i.memoizedState;if(c=w.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:w.cache,pendingSuspenseBoundaries:w.pendingSuspenseBoundaries,transitions:w.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){f=Ss(Error(t(423)),i),i=Kh(n,i,c,o,f);break e}else if(c!==f){f=Ss(Error(t(424)),i),i=Kh(n,i,c,o,f);break e}else for(Gn=ir(i.stateNode.containerInfo.firstChild),Vn=i,Bt=!0,ii=null,o=lh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(gs(),c===f){i=Ii(n,i,o);break e}Tn(n,i,c,o)}i=i.child}return i;case 5:return hh(i),n===null&&Ec(i),c=i.type,f=i.pendingProps,m=n!==null?n.memoizedProps:null,w=f.children,mc(c,f)?w=null:m!==null&&mc(c,m)&&(i.flags|=32),Yh(n,i),Tn(n,i,w,o),i.child;case 6:return n===null&&Ec(i),null;case 13:return Zh(n,i,o);case 4:return Lc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=vs(i,null,c,o):Tn(n,i,c,o),i.child;case 11:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ri(c,f),Gh(n,i,c,f,o);case 7:return Tn(n,i,i.pendingProps,o),i.child;case 8:return Tn(n,i,i.pendingProps.children,o),i.child;case 12:return Tn(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,f=i.pendingProps,m=i.memoizedProps,w=f.value,Ut(Aa,c._currentValue),c._currentValue=w,m!==null)if(ni(m.value,w)){if(m.children===f.children&&!Ln.current){i=Ii(n,i,o);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var I=m.dependencies;if(I!==null){w=m.child;for(var H=I.firstContext;H!==null;){if(H.context===c){if(m.tag===1){H=Di(-1,o&-o),H.tag=2;var ne=m.updateQueue;if(ne!==null){ne=ne.shared;var _e=ne.pending;_e===null?H.next=H:(H.next=_e.next,_e.next=H),ne.pending=H}}m.lanes|=o,H=m.alternate,H!==null&&(H.lanes|=o),Rc(m.return,o,i),I.lanes|=o;break}H=H.next}}else if(m.tag===10)w=m.type===i.type?null:m.child;else if(m.tag===18){if(w=m.return,w===null)throw Error(t(341));w.lanes|=o,I=w.alternate,I!==null&&(I.lanes|=o),Rc(w,o,i),w=m.sibling}else w=m.child;if(w!==null)w.return=m;else for(w=m;w!==null;){if(w===i){w=null;break}if(m=w.sibling,m!==null){m.return=w.return,w=m;break}w=w.return}m=w}Tn(n,i,f.children,o),i=i.child}return i;case 9:return f=i.type,c=i.pendingProps.children,_s(i,o),f=Kn(f),c=c(f),i.flags|=1,Tn(n,i,c,o),i.child;case 14:return c=i.type,f=ri(c,i.pendingProps),f=ri(c.type,f),Wh(n,i,c,f,o);case 15:return jh(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,f=i.pendingProps,f=i.elementType===c?f:ri(c,f),za(n,i),i.tag=1,Dn(c)?(n=!0,Sa(i)):n=!1,_s(i,o),Fh(i,c,f),jc(i,c,f,o),$c(null,i,c,!0,n,o);case 19:return Jh(n,i,o);case 22:return Xh(n,i,o)}throw Error(t(156,i.tag))};function wp(n,i){return ia(n,i)}function pv(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Jn(n,i,o,c){return new pv(n,i,o,c)}function mu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function mv(n){if(typeof n=="function")return mu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===se)return 11;if(n===de)return 14}return 2}function pr(n,i){var o=n.alternate;return o===null?(o=Jn(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ka(n,i,o,c,f,m){var w=2;if(c=n,typeof n=="function")mu(n)&&(w=1);else if(typeof n=="string")w=5;else e:switch(n){case U:return zr(o.children,f,m,i);case j:w=8,f|=8;break;case P:return n=Jn(12,o,i,f|2),n.elementType=P,n.lanes=m,n;case Q:return n=Jn(13,o,i,f),n.elementType=Q,n.lanes=m,n;case ue:return n=Jn(19,o,i,f),n.elementType=ue,n.lanes=m,n;case le:return Za(o,f,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:w=10;break e;case B:w=9;break e;case se:w=11;break e;case de:w=14;break e;case re:w=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=Jn(w,o,i,f),i.elementType=n,i.type=c,i.lanes=m,i}function zr(n,i,o,c){return n=Jn(7,n,c,i),n.lanes=o,n}function Za(n,i,o,c){return n=Jn(22,n,c,i),n.elementType=le,n.lanes=o,n.stateNode={isHidden:!1},n}function gu(n,i,o){return n=Jn(6,n,null,i),n.lanes=o,n}function vu(n,i,o){return i=Jn(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function gv(n,i,o,c,f){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gn(0),this.expirationTimes=gn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gn(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function xu(n,i,o,c,f,m,w,I,H){return n=new gv(n,i,o,I,H),i===1?(i=1,m===!0&&(i|=8)):i=0,m=Jn(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nc(m),n}function vv(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:O,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function Ep(n){if(!n)return sr;n=n._reactInternals;e:{if(gi(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Dn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Dn(o))return Qf(n,o,i)}return i}function Tp(n,i,o,c,f,m,w,I,H){return n=xu(o,c,!0,n,f,m,w,I,H),n.context=Ep(null),o=n.current,c=bn(),f=fr(o),m=Di(c,f),m.callback=i??null,lr(o,m,f),n.current.lanes=f,nn(n,f,c),Fn(n,c),n}function Qa(n,i,o,c){var f=i.current,m=bn(),w=fr(f);return o=Ep(o),i.context===null?i.context=o:i.pendingContext=o,i=Di(m,w),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=lr(f,i,w),n!==null&&(ai(n,f,w,m),Ra(n,f,w)),w}function Ja(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function bp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function _u(n,i){bp(n,i),(n=n.alternate)&&bp(n,i)}function xv(){return null}var Ap=typeof reportError=="function"?reportError:function(n){console.error(n)};function yu(n){this._internalRoot=n}el.prototype.render=yu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));Qa(n,i,null,null)},el.prototype.unmount=yu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Fr(function(){Qa(null,n,null,null)}),i[Ci]=null}};function el(n){this._internalRoot=n}el.prototype.unstable_scheduleHydration=function(n){if(n){var i=uf();n={blockedOn:null,target:n,priority:i};for(var o=0;o<er.length&&i!==0&&i<er[o].priority;o++);er.splice(o,0,n),o===0&&hf(n)}};function Su(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function tl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Cp(){}function _v(n,i,o,c,f){if(f){if(typeof c=="function"){var m=c;c=function(){var ne=Ja(w);m.call(ne)}}var w=Tp(i,c,n,0,null,!1,!1,"",Cp);return n._reactRootContainer=w,n[Ci]=w.current,_o(n.nodeType===8?n.parentNode:n),Fr(),w}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var ne=Ja(H);I.call(ne)}}var H=xu(n,0,!1,null,null,!1,!1,"",Cp);return n._reactRootContainer=H,n[Ci]=H.current,_o(n.nodeType===8?n.parentNode:n),Fr(function(){Qa(i,H,o,c)}),H}function nl(n,i,o,c,f){var m=o._reactRootContainer;if(m){var w=m;if(typeof f=="function"){var I=f;f=function(){var H=Ja(w);I.call(H)}}Qa(i,w,n,f)}else w=_v(o,i,n,f,c);return Ja(w)}lf=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=xt(i.pendingLanes);o!==0&&(rn(i,o|1),Fn(i,K()),(Tt&6)===0&&(Es=K()+500,or()))}break;case 13:Fr(function(){var c=Li(n,1);if(c!==null){var f=bn();ai(c,n,1,f)}}),_u(n,1)}},Xl=function(n){if(n.tag===13){var i=Li(n,134217728);if(i!==null){var o=bn();ai(i,n,134217728,o)}_u(n,134217728)}},cf=function(n){if(n.tag===13){var i=fr(n),o=Li(n,i);if(o!==null){var c=bn();ai(o,n,i,c)}_u(n,i)}},uf=function(){return Et},df=function(n,i){var o=Et;try{return Et=n,i()}finally{Et=o}},Ae=function(n,i,o){switch(i){case"input":if(dt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var f=_a(c);if(!f)throw Error(t(90));Ct(c),dt(c,f)}}}break;case"textarea":me(n,o);break;case"select":i=o.value,i!=null&&L(n,!!o.multiple,i,!1)}},Ft=fu,Zt=Fr;var yv={usingClientEntryPoint:!1,Events:[Mo,ds,_a,Ne,ot,fu]},Fo={findFiberByHostInstance:Cr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Sv={bundleType:Fo.bundleType,version:Fo.version,rendererPackageName:Fo.rendererPackageName,rendererConfig:Fo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ta(n),n===null?null:n.stateNode},findFiberByHostInstance:Fo.findFiberByHostInstance||xv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var il=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!il.isDisabled&&il.supportsFiber)try{tt=il.inject(Sv),We=il}catch{}}return kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=yv,kn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Su(i))throw Error(t(200));return vv(n,i,null,o)},kn.createRoot=function(n,i){if(!Su(n))throw Error(t(299));var o=!1,c="",f=Ap;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(f=i.onRecoverableError)),i=xu(n,1,!1,null,null,o,!1,c,f),n[Ci]=i.current,_o(n.nodeType===8?n.parentNode:n),new yu(i)},kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ta(i),n=n===null?null:n.stateNode,n},kn.flushSync=function(n){return Fr(n)},kn.hydrate=function(n,i,o){if(!tl(i))throw Error(t(200));return nl(null,n,i,!0,o)},kn.hydrateRoot=function(n,i,o){if(!Su(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,m="",w=Ap;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(m=o.identifierPrefix),o.onRecoverableError!==void 0&&(w=o.onRecoverableError)),i=Tp(i,null,n,1,o??null,f,!1,m,w),n[Ci]=i.current,_o(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,f]:i.mutableSourceEagerHydrationData.push(o,f);return new el(i)},kn.render=function(n,i,o){if(!tl(i))throw Error(t(200));return nl(null,n,i,!1,o)},kn.unmountComponentAtNode=function(n){if(!tl(n))throw Error(t(40));return n._reactRootContainer?(Fr(function(){nl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ci]=null})}),!0):!1},kn.unstable_batchedUpdates=fu,kn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!tl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return nl(n,i,o,!1,c)},kn.version="18.3.1-next-f1338f8080-20240426",kn}var Fp;function Lv(){if(Fp)return Eu.exports;Fp=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),Eu.exports=Nv(),Eu.exports}var kp;function Dv(){if(kp)return rl;kp=1;var s=Lv();return rl.createRoot=s.createRoot,rl.hydrateRoot=s.hydrateRoot,rl}var Iv=Dv();const Uv=Ym(Iv);var Op="1.3.27";function qm(s,e,t){return Math.max(s,Math.min(e,t))}function Fv(s,e,t){return(1-t)*s+t*e}function kv(s,e,t,r){return Fv(s,e,1-Math.exp(-t*r))}function Ov(s,e){return(s%e+e)%e}var zv=class{constructor(){Pe(this,"isRunning",!1);Pe(this,"value",0);Pe(this,"from",0);Pe(this,"to",0);Pe(this,"currentTime",0);Pe(this,"lerp");Pe(this,"duration");Pe(this,"easing");Pe(this,"onUpdate")}advance(s){var t;if(!this.isRunning)return;let e=!1;if(this.duration&&this.easing){this.currentTime+=s;const r=qm(0,this.currentTime/this.duration,1);e=r>=1;const a=e?1:this.easing(r);this.value=this.from+(this.to-this.from)*a}else this.lerp?(this.value=kv(this.value,this.to,this.lerp*60,s),Math.round(this.value)===Math.round(this.to)&&(this.value=this.to,e=!0)):(this.value=this.to,e=!0);e&&this.stop(),(t=this.onUpdate)==null||t.call(this,this.value,e)}stop(){this.isRunning=!1}fromTo(s,e,{lerp:t,duration:r,easing:a,onStart:l,onUpdate:u}){this.from=this.value=s,this.to=e,this.lerp=t,this.duration=r,this.easing=a,this.currentTime=0,this.isRunning=!0,l==null||l(),this.onUpdate=u}};function Bv(s,e){let t;return function(...r){clearTimeout(t),t=setTimeout(()=>{t=void 0,s.apply(this,r)},e)}}var Hv=class{constructor(s,e,{autoResize:t=!0,debounce:r=250}={}){Pe(this,"width",0);Pe(this,"height",0);Pe(this,"scrollHeight",0);Pe(this,"scrollWidth",0);Pe(this,"debouncedResize");Pe(this,"wrapperResizeObserver");Pe(this,"contentResizeObserver");Pe(this,"resize",()=>{this.onWrapperResize(),this.onContentResize()});Pe(this,"onWrapperResize",()=>{this.wrapper instanceof Window?(this.width=window.innerWidth,this.height=window.innerHeight):(this.width=this.wrapper.clientWidth,this.height=this.wrapper.clientHeight)});Pe(this,"onContentResize",()=>{this.wrapper instanceof Window?(this.scrollHeight=this.content.scrollHeight,this.scrollWidth=this.content.scrollWidth):(this.scrollHeight=this.wrapper.scrollHeight,this.scrollWidth=this.wrapper.scrollWidth)});this.wrapper=s,this.content=e,t&&(this.debouncedResize=Bv(this.resize,r),this.wrapper instanceof Window?window.addEventListener("resize",this.debouncedResize):(this.wrapperResizeObserver=new ResizeObserver(this.debouncedResize),this.wrapperResizeObserver.observe(this.wrapper)),this.contentResizeObserver=new ResizeObserver(this.debouncedResize),this.contentResizeObserver.observe(this.content)),this.resize()}destroy(){var s,e;(s=this.wrapperResizeObserver)==null||s.disconnect(),(e=this.contentResizeObserver)==null||e.disconnect(),this.wrapper===window&&this.debouncedResize&&window.removeEventListener("resize",this.debouncedResize)}get limit(){return{x:this.scrollWidth-this.width,y:this.scrollHeight-this.height}}},$m=class{constructor(){Pe(this,"events",{})}emit(s,...e){var r;const t=this.events[s]||[];for(let a=0,l=t.length;a<l;a++)(r=t[a])==null||r.call(t,...e)}on(s,e){return this.events[s]?this.events[s].push(e):this.events[s]=[e],()=>{var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(r=>e!==r)}}off(s,e){var t;this.events[s]=(t=this.events[s])==null?void 0:t.filter(r=>e!==r)}destroy(){this.events={}}};const Vv=100/6,gr={passive:!1};function zp(s,e){return s===1?Vv:s===2?e:1}var Gv=class{constructor(s,e={wheelMultiplier:1,touchMultiplier:1}){Pe(this,"touchStart",{x:0,y:0});Pe(this,"lastDelta",{x:0,y:0});Pe(this,"window",{width:0,height:0});Pe(this,"emitter",new $m);Pe(this,"onTouchStart",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:0,y:0},this.emitter.emit("scroll",{deltaX:0,deltaY:0,event:s})});Pe(this,"onTouchMove",s=>{const{clientX:e,clientY:t}=s.targetTouches?s.targetTouches[0]:s,r=-(e-this.touchStart.x)*this.options.touchMultiplier,a=-(t-this.touchStart.y)*this.options.touchMultiplier;this.touchStart.x=e,this.touchStart.y=t,this.lastDelta={x:r,y:a},this.emitter.emit("scroll",{deltaX:r,deltaY:a,event:s})});Pe(this,"onTouchEnd",s=>{this.emitter.emit("scroll",{deltaX:this.lastDelta.x,deltaY:this.lastDelta.y,event:s})});Pe(this,"onWheel",s=>{let{deltaX:e,deltaY:t,deltaMode:r}=s;const a=zp(r,this.window.width),l=zp(r,this.window.height);e*=a,t*=l,e*=this.options.wheelMultiplier,t*=this.options.wheelMultiplier,this.emitter.emit("scroll",{deltaX:e,deltaY:t,event:s})});Pe(this,"onWindowResize",()=>{this.window={width:window.innerWidth,height:window.innerHeight}});this.element=s,this.options=e,window.addEventListener("resize",this.onWindowResize),this.onWindowResize(),this.element.addEventListener("wheel",this.onWheel,gr),this.element.addEventListener("touchstart",this.onTouchStart,gr),this.element.addEventListener("touchmove",this.onTouchMove,gr),this.element.addEventListener("touchend",this.onTouchEnd,gr)}on(s,e){return this.emitter.on(s,e)}destroy(){this.emitter.destroy(),window.removeEventListener("resize",this.onWindowResize),this.element.removeEventListener("wheel",this.onWheel,gr),this.element.removeEventListener("touchstart",this.onTouchStart,gr),this.element.removeEventListener("touchmove",this.onTouchMove,gr),this.element.removeEventListener("touchend",this.onTouchEnd,gr)}};const Bp=s=>Math.min(1,1.001-2**(-10*s));var Wv=class{constructor({wrapper:s=window,content:e=document.documentElement,eventsTarget:t=s,smoothWheel:r=!0,syncTouch:a=!1,syncTouchLerp:l=.075,touchInertiaExponent:u=1.7,duration:d,easing:h,lerp:p=.1,infinite:v=!1,orientation:g="vertical",gestureOrientation:_=g==="horizontal"?"both":"vertical",touchMultiplier:S=1,wheelMultiplier:M=1,autoResize:E=!0,prevent:y,virtualScroll:x,overscroll:D=!0,autoRaf:N=!1,anchors:R=!1,autoToggle:k=!1,allowNestedScroll:O=!1,__experimental__naiveDimensions:U=!1,naiveDimensions:j=U,stopInertiaOnNavigate:P=!1,respectReducedMotion:C=!0}={}){Pe(this,"_isScrolling",!1);Pe(this,"_isStopped",!1);Pe(this,"_isLocked",!1);Pe(this,"_preventNextNativeScrollEvent",!1);Pe(this,"_resetVelocityTimeout",null);Pe(this,"_rafId",null);Pe(this,"_isDraggingSelection",!1);Pe(this,"reducedMotionMediaQuery",window.matchMedia("(prefers-reduced-motion: reduce)"));Pe(this,"isTouching");Pe(this,"isIos");Pe(this,"time",0);Pe(this,"userData",{});Pe(this,"lastVelocity",0);Pe(this,"velocity",0);Pe(this,"direction",0);Pe(this,"options");Pe(this,"targetScroll");Pe(this,"animatedScroll");Pe(this,"animate",new zv);Pe(this,"emitter",new $m);Pe(this,"dimensions");Pe(this,"virtualScroll");Pe(this,"onScrollEnd",s=>{s instanceof CustomEvent||(this.isScrolling==="smooth"||this.isScrolling===!1)&&s.stopPropagation()});Pe(this,"dispatchScrollendEvent",()=>{this.options.wrapper.dispatchEvent(new CustomEvent("scrollend",{bubbles:this.options.wrapper===window,detail:{lenisScrollEnd:!0}}))});Pe(this,"onTransitionEnd",s=>{var e;(e=s.propertyName)!=null&&e.includes("overflow")&&s.target===this.rootElement&&this.checkOverflow()});Pe(this,"onClick",s=>{const e=s.composedPath().filter(r=>r instanceof HTMLAnchorElement&&r.href).map(r=>new URL(r.href)),t=new URL(window.location.href);if(this.options.anchors){const r=e.find(a=>t.host===a.host&&t.pathname===a.pathname&&a.hash);if(r){const a=typeof this.options.anchors=="object"&&this.options.anchors?this.options.anchors:void 0,l=decodeURIComponent(r.hash);this.scrollTo(l,a);return}}if(this.options.stopInertiaOnNavigate&&e.some(r=>t.host===r.host&&t.pathname!==r.pathname)){this.reset();return}});Pe(this,"onPointerDown",s=>{s.button===1&&this.reset()});Pe(this,"onVirtualScroll",s=>{if(typeof this.options.virtualScroll=="function"&&this.options.virtualScroll(s)===!1)return;const{deltaX:e,deltaY:t,event:r}=s;if(this.emitter.emit("virtual-scroll",{deltaX:e,deltaY:t,event:r}),r.ctrlKey||r.lenisStopPropagation)return;const a=r.type.includes("touch"),l=r.type.includes("wheel");if(a&&this.isIos&&(r.type==="touchstart"&&(this._isDraggingSelection=this.isTouchOnSelectionHandle(r)),this._isDraggingSelection)){r.type==="touchend"&&(this._isDraggingSelection=!1);return}this.isTouching=r.type==="touchstart"||r.type==="touchmove";const u=e===0&&t===0;if(this.options.syncTouch&&a&&r.type==="touchstart"&&u&&!this.isStopped&&!this.isLocked){this.reset();return}const d=this.options.gestureOrientation==="vertical"&&t===0||this.options.gestureOrientation==="horizontal"&&e===0;if(u||d)return;let h=r.composedPath();h=h.slice(0,h.indexOf(this.rootElement));const p=this.options.prevent,v=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";if(h.find(M=>{var E,y,x,D,N;return M instanceof HTMLElement&&(typeof p=="function"&&(p==null?void 0:p(M))||((E=M.hasAttribute)==null?void 0:E.call(M,"data-lenis-prevent"))||v==="vertical"&&((y=M.hasAttribute)==null?void 0:y.call(M,"data-lenis-prevent-vertical"))||v==="horizontal"&&((x=M.hasAttribute)==null?void 0:x.call(M,"data-lenis-prevent-horizontal"))||a&&((D=M.hasAttribute)==null?void 0:D.call(M,"data-lenis-prevent-touch"))||l&&((N=M.hasAttribute)==null?void 0:N.call(M,"data-lenis-prevent-wheel"))||this.options.allowNestedScroll&&this.hasNestedScroll(M,{deltaX:e,deltaY:t}))}))return;if(this.isStopped||this.isLocked){r.cancelable&&r.preventDefault();return}if(!(this.options.syncTouch&&a||this.options.smoothWheel&&l)){this.isScrolling="native",this.animate.stop(),r.lenisStopPropagation=!0;return}let g=t;this.options.gestureOrientation==="both"?g=Math.abs(t)>Math.abs(e)?t:e:this.options.gestureOrientation==="horizontal"&&(g=e),(!this.options.overscroll||this.options.infinite||this.options.wrapper!==window&&this.limit>0&&(this.animatedScroll>0&&this.animatedScroll<this.limit||this.animatedScroll===0&&t>0||this.animatedScroll===this.limit&&t<0))&&(r.lenisStopPropagation=!0),r.cancelable&&r.preventDefault();const _=a&&this.options.syncTouch,S=a&&r.type==="touchend";S&&(g=Math.sign(g)*Math.abs(this.velocity)**this.options.touchInertiaExponent),this.scrollTo(this.targetScroll+g,{programmatic:!1,..._?{lerp:S?this.options.syncTouchLerp:1}:{lerp:this.options.lerp,duration:this.options.duration,easing:this.options.easing}})});Pe(this,"onNativeScroll",()=>{if(this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this._preventNextNativeScrollEvent){this._preventNextNativeScrollEvent=!1;return}if(this.isScrolling===!1||this.isScrolling==="native"){const s=this.animatedScroll;this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity,this.velocity=this.animatedScroll-s,this.direction=Math.sign(this.animatedScroll-s),this.isStopped||(this.isScrolling="native"),this.emit(),this.velocity!==0&&(this._resetVelocityTimeout=setTimeout(()=>{this.lastVelocity=this.velocity,this.velocity=0,this.isScrolling=!1,this.emit()},400))}});Pe(this,"raf",s=>{const e=s-(this.time||s);this.time=s,this.animate.advance(e*.001),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))});window.lenisVersion=Op,window.lenis||(window.lenis={}),window.lenis.version=Op,g==="horizontal"&&(window.lenis.horizontal=!0),a===!0&&(window.lenis.touch=!0),this.isIos=/(iPad|iPhone|iPod)/g.test(navigator.userAgent),(!s||s===document.documentElement)&&(s=window),typeof d=="number"&&typeof h!="function"?h=Bp:typeof h=="function"&&typeof d!="number"&&(d=1),this.options={wrapper:s,content:e,eventsTarget:t,smoothWheel:r,syncTouch:a,syncTouchLerp:l,touchInertiaExponent:u,duration:d,easing:h,lerp:p,infinite:v,gestureOrientation:_,orientation:g,touchMultiplier:S,wheelMultiplier:M,autoResize:E,prevent:y,virtualScroll:x,overscroll:D,autoRaf:N,anchors:R,autoToggle:k,allowNestedScroll:O,naiveDimensions:j,stopInertiaOnNavigate:P,respectReducedMotion:C},this.dimensions=new Hv(s,e,{autoResize:E}),this.updateClassName(),this.targetScroll=this.animatedScroll=this.actualScroll,this.options.wrapper.addEventListener("scroll",this.onNativeScroll),this.options.wrapper.addEventListener("scrollend",this.onScrollEnd,{capture:!0}),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.addEventListener("click",this.onClick),this.options.wrapper.addEventListener("pointerdown",this.onPointerDown),this.virtualScroll=new Gv(t,{touchMultiplier:S,wheelMultiplier:M}),this.virtualScroll.on("scroll",this.onVirtualScroll),this.options.autoToggle&&(this.checkOverflow(),this.rootElement.addEventListener("transitionend",this.onTransitionEnd)),this.options.autoRaf&&(this._rafId=requestAnimationFrame(this.raf))}destroy(){this.emitter.destroy(),this._resetVelocityTimeout!==null&&(clearTimeout(this._resetVelocityTimeout),this._resetVelocityTimeout=null),this.options.wrapper.removeEventListener("scroll",this.onNativeScroll),this.options.wrapper.removeEventListener("scrollend",this.onScrollEnd,{capture:!0}),this.options.wrapper.removeEventListener("pointerdown",this.onPointerDown),(this.options.anchors||this.options.stopInertiaOnNavigate)&&this.options.wrapper.removeEventListener("click",this.onClick),this.virtualScroll.destroy(),this.dimensions.destroy(),this.cleanUpClassName(),this._rafId&&cancelAnimationFrame(this._rafId)}on(s,e){return this.emitter.on(s,e)}off(s,e){return this.emitter.off(s,e)}get overflow(){const s=this.isHorizontal?"overflow-x":"overflow-y";return getComputedStyle(this.rootElement)[s]}checkOverflow(){["hidden","clip"].includes(this.overflow)?this.internalStop():this.internalStart()}setScroll(s){this.isHorizontal?this.options.wrapper.scrollTo({left:s,behavior:"instant"}):this.options.wrapper.scrollTo({top:s,behavior:"instant"})}isTouchOnSelectionHandle(s){const e=window.getSelection();if(!e||e.isCollapsed||e.rangeCount===0)return!1;const t=s.targetTouches[0]??s.changedTouches[0];if(!t)return!1;const r=e.getRangeAt(0).getClientRects();if(r.length===0)return!1;const a=r[0],l=r[r.length-1],u=40,d=Math.hypot(t.clientX-a.left,t.clientY-a.top)<=u,h=Math.hypot(t.clientX-l.right,t.clientY-l.bottom)<=u;return d||h}resize(){this.dimensions.resize(),this.animatedScroll=this.targetScroll=this.actualScroll,this.emit()}emit(){this.emitter.emit("scroll",this)}reset(){this.isLocked=!1,this.isScrolling=!1,this.animatedScroll=this.targetScroll=this.actualScroll,this.lastVelocity=this.velocity=0,this.animate.stop()}start(){if(this.isStopped){if(this.options.autoToggle){this.rootElement.style.removeProperty("overflow");return}this.internalStart()}}internalStart(){this.isStopped&&(this.reset(),this.isStopped=!1,this.emit())}stop(){if(!this.isStopped){if(this.options.autoToggle){this.rootElement.style.setProperty("overflow","clip");return}this.internalStop()}}internalStop(){this.isStopped||(this.reset(),this.isStopped=!0,this.emit())}scrollTo(s,{offset:e=0,immediate:t=!1,lock:r=!1,programmatic:a=!0,lerp:l=a?this.options.lerp:void 0,duration:u=a?this.options.duration:void 0,easing:d=a?this.options.easing:void 0,onStart:h,onComplete:p,force:v=!1,userData:g}={}){if(this.prefersReducedMotion&&(a?t=!0:(l=1,u=void 0,d=void 0)),(this.isStopped||this.isLocked)&&!v)return;let _=s,S=e;if(typeof _=="string"&&["top","left","start","#"].includes(_))_=0;else if(typeof _=="string"&&["bottom","right","end"].includes(_))_=this.limit;else{let M=null;if(typeof _=="string"?(M=_.startsWith("#")?document.getElementById(_.slice(1)):document.querySelector(_),M||(_==="#top"?_=0:console.warn("Lenis: Target not found",_))):_ instanceof Element&&(M=_),M){if(this.options.wrapper!==window){const R=this.rootElement.getBoundingClientRect();S-=this.isHorizontal?R.left:R.top}const E=M.getBoundingClientRect(),y=getComputedStyle(M),x=this.isHorizontal?Number.parseFloat(y.scrollMarginLeft):Number.parseFloat(y.scrollMarginTop),D=getComputedStyle(this.rootElement),N=this.isHorizontal?Number.parseFloat(D.scrollPaddingLeft):Number.parseFloat(D.scrollPaddingTop);_=(this.isHorizontal?E.left:E.top)+this.animatedScroll-(Number.isNaN(x)?0:x)-(Number.isNaN(N)?0:N)}}if(typeof _=="number"){if(_+=S,this.options.infinite){if(a){this.targetScroll=this.animatedScroll=this.scroll;const M=_-this.animatedScroll;M>this.limit/2?_-=this.limit:M<-this.limit/2&&(_+=this.limit)}}else _=qm(0,_,this.limit);if(_===this.targetScroll){h==null||h(this),p==null||p(this);return}if(this.userData=g??{},t){this.animatedScroll=this.targetScroll=_,this.setScroll(this.scroll),this.reset(),this.preventNextNativeScrollEvent(),this.emit(),p==null||p(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()});return}a||(this.targetScroll=_),typeof u=="number"&&typeof d!="function"?d=Bp:typeof d=="function"&&typeof u!="number"&&(u=1),this.animate.fromTo(this.animatedScroll,_,{duration:u,easing:d,lerp:l,onStart:()=>{r&&(this.isLocked=!0),this.isScrolling="smooth",h==null||h(this)},onUpdate:(M,E)=>{this.isScrolling="smooth",this.lastVelocity=this.velocity,this.velocity=M-this.animatedScroll,this.direction=Math.sign(this.velocity),this.animatedScroll=M,this.setScroll(this.scroll),a&&(this.targetScroll=M),E||this.emit(),E&&(this.reset(),this.emit(),p==null||p(this),this.userData={},requestAnimationFrame(()=>{this.dispatchScrollendEvent()}),this.preventNextNativeScrollEvent())}})}}preventNextNativeScrollEvent(){this._preventNextNativeScrollEvent=!0,requestAnimationFrame(()=>{this._preventNextNativeScrollEvent=!1})}hasNestedScroll(s,{deltaX:e,deltaY:t}){const r=Date.now();s._lenis||(s._lenis={});const a=s._lenis;let l,u,d,h,p,v,g,_,S,M;if(r-(a.time??0)>2e3){a.time=Date.now();const O=window.getComputedStyle(s);if(a.computedStyle=O,l=["auto","overlay","scroll"].includes(O.overflowX),u=["auto","overlay","scroll"].includes(O.overflowY),p=["auto"].includes(O.overscrollBehaviorX),v=["auto"].includes(O.overscrollBehaviorY),a.hasOverflowX=l,a.hasOverflowY=u,!(l||u))return!1;g=s.scrollWidth,_=s.scrollHeight,S=s.clientWidth,M=s.clientHeight,d=g>S,h=_>M,a.isScrollableX=d,a.isScrollableY=h,a.scrollWidth=g,a.scrollHeight=_,a.clientWidth=S,a.clientHeight=M,a.hasOverscrollBehaviorX=p,a.hasOverscrollBehaviorY=v}else d=a.isScrollableX,h=a.isScrollableY,l=a.hasOverflowX,u=a.hasOverflowY,g=a.scrollWidth,_=a.scrollHeight,S=a.clientWidth,M=a.clientHeight,p=a.hasOverscrollBehaviorX,v=a.hasOverscrollBehaviorY;if(!(l&&d||u&&h))return!1;const E=Math.abs(e)>=Math.abs(t)?"horizontal":"vertical";let y,x,D,N,R,k;if(E==="horizontal")y=Math.round(s.scrollLeft),x=g-S,D=e,N=l,R=d,k=p;else if(E==="vertical")y=Math.round(s.scrollTop),x=_-M,D=t,N=u,R=h,k=v;else return!1;return!k&&(y>=x||y<=0)?!0:(D>0?y<x:y>0)&&N&&R}get rootElement(){return this.options.wrapper===window?document.documentElement:this.options.wrapper}get limit(){return this.options.naiveDimensions?this.isHorizontal?this.rootElement.scrollWidth-this.rootElement.clientWidth:this.rootElement.scrollHeight-this.rootElement.clientHeight:this.dimensions.limit[this.isHorizontal?"x":"y"]}get isHorizontal(){return this.options.orientation==="horizontal"}get actualScroll(){const s=this.options.wrapper;return this.isHorizontal?s.scrollX??s.scrollLeft:s.scrollY??s.scrollTop}get scroll(){return this.options.infinite?Ov(this.animatedScroll,this.limit):this.animatedScroll}get progress(){return this.limit===0?1:this.scroll/this.limit}get isScrolling(){return this._isScrolling}set isScrolling(s){this._isScrolling!==s&&(this._isScrolling=s,this.updateClassName())}get isStopped(){return this._isStopped}set isStopped(s){this._isStopped!==s&&(this._isStopped=s,this.updateClassName())}get isLocked(){return this._isLocked}set isLocked(s){this._isLocked!==s&&(this._isLocked=s,this.updateClassName())}get isSmooth(){return this.isScrolling==="smooth"}get prefersReducedMotion(){return this.options.respectReducedMotion&&this.reducedMotionMediaQuery.matches}get className(){let s="lenis";return this.options.autoToggle&&(s+=" lenis-autoToggle"),this.isStopped&&(s+=" lenis-stopped"),this.isLocked&&(s+=" lenis-locked"),this.isScrolling&&(s+=" lenis-scrolling"),this.isScrolling==="smooth"&&(s+=" lenis-smooth"),s}updateClassName(){this.cleanUpClassName(),this.className.split(" ").forEach(s=>{this.rootElement.classList.add(s)})}cleanUpClassName(){for(const s of Array.from(this.rootElement.classList))(s==="lenis"||s.startsWith("lenis-"))&&this.rootElement.classList.remove(s)}};let sd=null;function Hp(s){sd=s}function $d(s,e=-30){if(sd)sd.scrollTo(s,{offset:e,duration:1.2});else{const t=document.querySelector(s);t&&t.scrollIntoView({behavior:"smooth"})}}const jv=({children:s})=>(je.useEffect(()=>{if(window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;const e=new Wv({duration:1.15,easing:_=>Math.min(1,1.001-Math.pow(2,-10*_)),orientation:"vertical",gestureOrientation:"vertical",smoothWheel:!0,touchMultiplier:1.25});Hp(e);let t;const r=_=>{e.raf(_),t=requestAnimationFrame(r)};t=requestAnimationFrame(r);const a=["home","manifesto","about","projects","vision","contact"];let l=window.scrollY,u=0,d,h=!1,p=!1,v;const g=()=>{p=!0,h&&(h=!1),clearTimeout(v),v=window.setTimeout(()=>{p=!1},160)};return window.addEventListener("wheel",g,{passive:!0}),window.addEventListener("touchstart",g,{passive:!0}),e.on("scroll",_=>{if(h)return;const S=_.scroll,M=S-l;Math.abs(M)>1.5&&(u=M>0?1:-1),l=S,clearTimeout(d),d=window.setTimeout(()=>{if(h||p)return;const E=a.map(D=>{const N=document.getElementById(D);if(!N)return null;const R=N.getBoundingClientRect();return{id:D,el:N,top:R.top+window.scrollY,bottom:R.top+window.scrollY+N.offsetHeight,height:N.offsetHeight}}).filter(Boolean);if(E.length<2)return;const y=window.innerHeight,x=window.scrollY;for(let D=0;D<E.length;D++){const N=E[D],R=E[D+1];if(Math.abs(x-N.top)<25)return;if(R&&x>=N.top-10&&x<R.top){if(N.height>y*1.3&&x>N.top+120&&x+y<N.bottom-120)return;const k=x-N.top,O=R.top-x;let U=null;u===1&&k>45?U=R.el:u===-1&&O>45?U=N.el:k>O?U=R.el:U=N.el,U&&Math.abs(x-U.offsetTop)>20&&(h=!0,e.scrollTo(U,{duration:1.1,easing:j=>Math.min(1,1.001-Math.pow(2,-10*j)),onComplete:()=>{h=!1,l=window.scrollY}}));break}}},140)}),()=>{cancelAnimationFrame(t),clearTimeout(d),clearTimeout(v),window.removeEventListener("wheel",g),window.removeEventListener("touchstart",g),e.destroy(),Hp(null)}},[]),b.jsx(b.Fragment,{children:s}));/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Kd="173",Xv=0,Vp=1,Yv=2,Km=1,qv=2,Hi=3,Tr=0,zn=1,wi=2,Wi=0,Gs=1,Jr=2,Gp=3,Wp=4,$v=5,qr=100,Kv=101,Zv=102,Qv=103,Jv=104,ex=200,tx=201,nx=202,ix=203,od=204,ad=205,rx=206,sx=207,ox=208,ax=209,lx=210,cx=211,ux=212,dx=213,fx=214,ld=0,cd=1,ud=2,Ys=3,dd=4,fd=5,hd=6,pd=7,Zm=0,hx=1,px=2,Er=0,mx=1,gx=2,vx=3,Qm=4,xx=5,_x=6,yx=7,Jm=300,qs=301,$s=302,md=303,gd=304,Bl=306,vd=1e3,Kr=1001,xd=1002,hi=1003,Sx=1004,sl=1005,Ei=1006,Au=1007,Zr=1008,Yi=1009,eg=1010,tg=1011,Xo=1012,Zd=1013,es=1014,Vi=1015,ji=1016,Qd=1017,Jd=1018,Ks=1020,ng=35902,ig=1021,rg=1022,fi=1023,sg=1024,og=1025,Ws=1026,Zs=1027,ag=1028,ef=1029,lg=1030,tf=1031,nf=1033,Pl=33776,Nl=33777,Ll=33778,Dl=33779,_d=35840,yd=35841,Sd=35842,Md=35843,wd=36196,Ed=37492,Td=37496,bd=37808,Ad=37809,Cd=37810,Rd=37811,Pd=37812,Nd=37813,Ld=37814,Dd=37815,Id=37816,Ud=37817,Fd=37818,kd=37819,Od=37820,zd=37821,Il=36492,Bd=36494,Hd=36495,cg=36283,Vd=36284,Gd=36285,Wd=36286,Mx=3200,wx=3201,ug=0,Ex=1,wr="",ti="srgb",Qs="srgb-linear",Fl="linear",Lt="srgb",bs=7680,jp=519,Tx=512,bx=513,Ax=514,dg=515,Cx=516,Rx=517,Px=518,Nx=519,Xp=35044,Yp="300 es",Gi=2e3,kl=2001;class no{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Cu=Math.PI/180,jd=180/Math.PI;function Yo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[r&255]+Sn[r>>8&255]+Sn[r>>16&255]+Sn[r>>24&255]).toLowerCase()}function yt(s,e,t){return Math.max(e,Math.min(t,s))}function Lx(s,e){return(s%e+e)%e}function Ru(s,e,t){return(1-t)*s+t*e}function Oo(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function On(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}class ct{constructor(e=0,t=0){ct.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*a+e.x,this.y=l*a+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class ut{constructor(e,t,r,a,l,u,d,h,p){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,h,p)}set(e,t,r,a,l,u,d,h,p){const v=this.elements;return v[0]=e,v[1]=a,v[2]=d,v[3]=t,v[4]=l,v[5]=h,v[6]=r,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[3],h=r[6],p=r[1],v=r[4],g=r[7],_=r[2],S=r[5],M=r[8],E=a[0],y=a[3],x=a[6],D=a[1],N=a[4],R=a[7],k=a[2],O=a[5],U=a[8];return l[0]=u*E+d*D+h*k,l[3]=u*y+d*N+h*O,l[6]=u*x+d*R+h*U,l[1]=p*E+v*D+g*k,l[4]=p*y+v*N+g*O,l[7]=p*x+v*R+g*U,l[2]=_*E+S*D+M*k,l[5]=_*y+S*N+M*O,l[8]=_*x+S*R+M*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],v=e[8];return t*u*v-t*d*p-r*l*v+r*d*h+a*l*p-a*u*h}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],v=e[8],g=v*u-d*p,_=d*h-v*l,S=p*l-u*h,M=t*g+r*_+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const E=1/M;return e[0]=g*E,e[1]=(a*p-v*r)*E,e[2]=(d*r-a*u)*E,e[3]=_*E,e[4]=(v*t-a*h)*E,e[5]=(a*l-d*t)*E,e[6]=S*E,e[7]=(r*h-p*t)*E,e[8]=(u*t-r*l)*E,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,l,u,d){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*d)+u+e,-a*p,a*h,-a*(-p*u+h*d)+d+t,0,0,1),this}scale(e,t){return this.premultiply(Pu.makeScale(e,t)),this}rotate(e){return this.premultiply(Pu.makeRotation(-e)),this}translate(e,t){return this.premultiply(Pu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Pu=new ut;function fg(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Ol(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Dx(){const s=Ol("canvas");return s.style.display="block",s}const qp={};function Bs(s){s in qp||(qp[s]=!0,console.warn(s))}function Ix(s,e,t){return new Promise(function(r,a){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:a();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}function Ux(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Fx(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const $p=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Kp=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function kx(){const s={enabled:!0,workingColorSpace:Qs,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Lt&&(a.r=Xi(a.r),a.g=Xi(a.g),a.b=Xi(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Lt&&(a.r=js(a.r),a.g=js(a.g),a.b=js(a.b))),a},fromWorkingColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},toWorkingColorSpace:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===wr?Fl:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Qs]:{primaries:e,whitePoint:r,transfer:Fl,toXYZ:$p,fromXYZ:Kp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ti},outputColorSpaceConfig:{drawingBufferColorSpace:ti}},[ti]:{primaries:e,whitePoint:r,transfer:Lt,toXYZ:$p,fromXYZ:Kp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ti}}}),s}const At=kx();function Xi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function js(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let As;class Ox{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{As===void 0&&(As=Ol("canvas")),As.width=e.width,As.height=e.height;const r=As.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),t=As}return t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Ol("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Xi(l[u]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(Xi(t[r]/255)*255):t[r]=Xi(t[r]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let zx=0;class hg{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,d=a.length;u<d;u++)a[u].isDataTexture?l.push(Nu(a[u].image)):l.push(Nu(a[u]))}else l=Nu(a);r.url=l}return t||(e.images[this.uuid]=r),r}}function Nu(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ox.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Bx=0;class Bn extends no{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=Kr,a=Kr,l=Ei,u=Zr,d=fi,h=Yi,p=Bn.DEFAULT_ANISOTROPY,v=wr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Bx++}),this.uuid=Yo(),this.name="",this.source=new hg(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=h,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Jm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vd:e.x=e.x-Math.floor(e.x);break;case Kr:e.x=e.x<0?0:1;break;case xd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vd:e.y=e.y-Math.floor(e.y);break;case Kr:e.y=e.y<0?0:1;break;case xd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=Jm;Bn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,r=0,a=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,l;const h=e.elements,p=h[0],v=h[4],g=h[8],_=h[1],S=h[5],M=h[9],E=h[2],y=h[6],x=h[10];if(Math.abs(v-_)<.01&&Math.abs(g-E)<.01&&Math.abs(M-y)<.01){if(Math.abs(v+_)<.1&&Math.abs(g+E)<.1&&Math.abs(M+y)<.1&&Math.abs(p+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const N=(p+1)/2,R=(S+1)/2,k=(x+1)/2,O=(v+_)/4,U=(g+E)/4,j=(M+y)/4;return N>R&&N>k?N<.01?(r=0,a=.707106781,l=.707106781):(r=Math.sqrt(N),a=O/r,l=U/r):R>k?R<.01?(r=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),r=O/a,l=j/a):k<.01?(r=.707106781,a=.707106781,l=0):(l=Math.sqrt(k),r=U/l,a=j/l),this.set(r,a,l,t),this}let D=Math.sqrt((y-M)*(y-M)+(g-E)*(g-E)+(_-v)*(_-v));return Math.abs(D)<.001&&(D=1),this.x=(y-M)/D,this.y=(g-E)/D,this.z=(_-v)/D,this.w=Math.acos((p+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this.w=yt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this.w=yt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Hx extends no{constructor(e=1,t=1,r={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const a={width:e,height:t,depth:1};r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ei,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},r);const l=new Bn(a,r.mapping,r.wrapS,r.wrapT,r.magFilter,r.minFilter,r.format,r.type,r.anisotropy,r.colorSpace);l.flipY=!1,l.generateMipmaps=r.generateMipmaps,l.internalFormat=r.internalFormat,this.textures=[];const u=r.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let r=0,a=e.textures.length;r<a;r++)this.textures[r]=e.textures[r].clone(),this.textures[r].isRenderTargetTexture=!0,this.textures[r].renderTarget=this;const t=Object.assign({},e.texture.image);return this.texture.source=new hg(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class pi extends Hx{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class pg extends Bn{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=hi,this.minFilter=hi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Vx extends Bn{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=hi,this.minFilter=hi,this.wrapR=Kr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ts{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,l,u,d){let h=r[a+0],p=r[a+1],v=r[a+2],g=r[a+3];const _=l[u+0],S=l[u+1],M=l[u+2],E=l[u+3];if(d===0){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(d===1){e[t+0]=_,e[t+1]=S,e[t+2]=M,e[t+3]=E;return}if(g!==E||h!==_||p!==S||v!==M){let y=1-d;const x=h*_+p*S+v*M+g*E,D=x>=0?1:-1,N=1-x*x;if(N>Number.EPSILON){const k=Math.sqrt(N),O=Math.atan2(k,x*D);y=Math.sin(y*O)/k,d=Math.sin(d*O)/k}const R=d*D;if(h=h*y+_*R,p=p*y+S*R,v=v*y+M*R,g=g*y+E*R,y===1-d){const k=1/Math.sqrt(h*h+p*p+v*v+g*g);h*=k,p*=k,v*=k,g*=k}}e[t]=h,e[t+1]=p,e[t+2]=v,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,a,l,u){const d=r[a],h=r[a+1],p=r[a+2],v=r[a+3],g=l[u],_=l[u+1],S=l[u+2],M=l[u+3];return e[t]=d*M+v*g+h*S-p*_,e[t+1]=h*M+v*_+p*g-d*S,e[t+2]=p*M+v*S+d*_-h*g,e[t+3]=v*M-d*g-h*_-p*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,l=e._z,u=e._order,d=Math.cos,h=Math.sin,p=d(r/2),v=d(a/2),g=d(l/2),_=h(r/2),S=h(a/2),M=h(l/2);switch(u){case"XYZ":this._x=_*v*g+p*S*M,this._y=p*S*g-_*v*M,this._z=p*v*M+_*S*g,this._w=p*v*g-_*S*M;break;case"YXZ":this._x=_*v*g+p*S*M,this._y=p*S*g-_*v*M,this._z=p*v*M-_*S*g,this._w=p*v*g+_*S*M;break;case"ZXY":this._x=_*v*g-p*S*M,this._y=p*S*g+_*v*M,this._z=p*v*M+_*S*g,this._w=p*v*g-_*S*M;break;case"ZYX":this._x=_*v*g-p*S*M,this._y=p*S*g+_*v*M,this._z=p*v*M-_*S*g,this._w=p*v*g+_*S*M;break;case"YZX":this._x=_*v*g+p*S*M,this._y=p*S*g+_*v*M,this._z=p*v*M-_*S*g,this._w=p*v*g-_*S*M;break;case"XZY":this._x=_*v*g-p*S*M,this._y=p*S*g-_*v*M,this._z=p*v*M+_*S*g,this._w=p*v*g+_*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],l=t[8],u=t[1],d=t[5],h=t[9],p=t[2],v=t[6],g=t[10],_=r+d+g;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(v-h)*S,this._y=(l-p)*S,this._z=(u-a)*S}else if(r>d&&r>g){const S=2*Math.sqrt(1+r-d-g);this._w=(v-h)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+p)/S}else if(d>g){const S=2*Math.sqrt(1+d-r-g);this._w=(l-p)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(h+v)/S}else{const S=2*Math.sqrt(1+g-r-d);this._w=(u-a)/S,this._x=(l+p)/S,this._y=(h+v)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<Number.EPSILON?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(yt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,l=e._z,u=e._w,d=t._x,h=t._y,p=t._z,v=t._w;return this._x=r*v+u*d+a*p-l*h,this._y=a*v+u*h+l*d-r*p,this._z=l*v+u*p+r*h-a*d,this._w=u*v-r*d-a*h-l*p,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const r=this._x,a=this._y,l=this._z,u=this._w;let d=u*e._w+r*e._x+a*e._y+l*e._z;if(d<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,d=-d):this.copy(e),d>=1)return this._w=u,this._x=r,this._y=a,this._z=l,this;const h=1-d*d;if(h<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*r+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const p=Math.sqrt(h),v=Math.atan2(p,d),g=Math.sin((1-t)*v)/p,_=Math.sin(t*v)/p;return this._w=u*g+this._w*_,this._x=r*g+this._x*_,this._y=a*g+this._y*_,this._z=l*g+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class q{constructor(e=0,t=0,r=0){q.prototype.isVector3=!0,this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Zp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Zp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*a,this.y=l[1]*t+l[4]*r+l[7]*a,this.z=l[2]*t+l[5]*r+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,l=e.x,u=e.y,d=e.z,h=e.w,p=2*(u*a-d*r),v=2*(d*t-l*a),g=2*(l*r-u*t);return this.x=t+h*p+u*g-d*v,this.y=r+h*v+d*p-l*g,this.z=a+h*g+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*a,this.y=l[1]*t+l[5]*r+l[9]*a,this.z=l[2]*t+l[6]*r+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=yt(this.x,e.x,t.x),this.y=yt(this.y,e.y,t.y),this.z=yt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=yt(this.x,e,t),this.y=yt(this.y,e,t),this.z=yt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(yt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,l=e.z,u=t.x,d=t.y,h=t.z;return this.x=a*h-l*d,this.y=l*u-r*h,this.z=r*d-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Lu.copy(this).projectOnVector(e),this.sub(Lu)}reflect(e){return this.sub(Lu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(yt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Lu=new q,Zp=new ts;class qo{constructor(e=new q(1/0,1/0,1/0),t=new q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,li):li.fromBufferAttribute(l,u),li.applyMatrix4(e.matrixWorld),this.expandByPoint(li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ol.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),ol.copy(r.boundingBox)),ol.applyMatrix4(e.matrixWorld),this.union(ol)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,li),li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(zo),al.subVectors(this.max,zo),Cs.subVectors(e.a,zo),Rs.subVectors(e.b,zo),Ps.subVectors(e.c,zo),vr.subVectors(Rs,Cs),xr.subVectors(Ps,Rs),Br.subVectors(Cs,Ps);let t=[0,-vr.z,vr.y,0,-xr.z,xr.y,0,-Br.z,Br.y,vr.z,0,-vr.x,xr.z,0,-xr.x,Br.z,0,-Br.x,-vr.y,vr.x,0,-xr.y,xr.x,0,-Br.y,Br.x,0];return!Du(t,Cs,Rs,Ps,al)||(t=[1,0,0,0,1,0,0,0,1],!Du(t,Cs,Rs,Ps,al))?!1:(ll.crossVectors(vr,xr),t=[ll.x,ll.y,ll.z],Du(t,Cs,Rs,Ps,al))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Fi=[new q,new q,new q,new q,new q,new q,new q,new q],li=new q,ol=new qo,Cs=new q,Rs=new q,Ps=new q,vr=new q,xr=new q,Br=new q,zo=new q,al=new q,ll=new q,Hr=new q;function Du(s,e,t,r,a){for(let l=0,u=s.length-3;l<=u;l+=3){Hr.fromArray(s,l);const d=a.x*Math.abs(Hr.x)+a.y*Math.abs(Hr.y)+a.z*Math.abs(Hr.z),h=e.dot(Hr),p=t.dot(Hr),v=r.dot(Hr);if(Math.max(-Math.max(h,p,v),Math.min(h,p,v))>d)return!1}return!0}const Gx=new qo,Bo=new q,Iu=new q;class Hl{constructor(e=new q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Gx.setFromPoints(e).getCenter(r);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Bo.subVectors(e,this.center);const t=Bo.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(Bo,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Iu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Bo.copy(e.center).add(Iu)),this.expandByPoint(Bo.copy(e.center).sub(Iu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ki=new q,Uu=new q,cl=new q,_r=new q,Fu=new q,ul=new q,ku=new q;class mg{constructor(e=new q,t=new q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ki)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ki.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ki.copy(this.origin).addScaledVector(this.direction,t),ki.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){Uu.copy(e).add(t).multiplyScalar(.5),cl.copy(t).sub(e).normalize(),_r.copy(this.origin).sub(Uu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(cl),d=_r.dot(this.direction),h=-_r.dot(cl),p=_r.lengthSq(),v=Math.abs(1-u*u);let g,_,S,M;if(v>0)if(g=u*h-d,_=u*d-h,M=l*v,g>=0)if(_>=-M)if(_<=M){const E=1/v;g*=E,_*=E,S=g*(g+u*_+2*d)+_*(u*g+_+2*h)+p}else _=l,g=Math.max(0,-(u*_+d)),S=-g*g+_*(_+2*h)+p;else _=-l,g=Math.max(0,-(u*_+d)),S=-g*g+_*(_+2*h)+p;else _<=-M?(g=Math.max(0,-(-u*l+d)),_=g>0?-l:Math.min(Math.max(-l,-h),l),S=-g*g+_*(_+2*h)+p):_<=M?(g=0,_=Math.min(Math.max(-l,-h),l),S=_*(_+2*h)+p):(g=Math.max(0,-(u*l+d)),_=g>0?l:Math.min(Math.max(-l,-h),l),S=-g*g+_*(_+2*h)+p);else _=u>0?-l:l,g=Math.max(0,-(u*_+d)),S=-g*g+_*(_+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(Uu).addScaledVector(cl,_),S}intersectSphere(e,t){ki.subVectors(e.center,this.origin);const r=ki.dot(this.direction),a=ki.dot(ki)-r*r,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),d=r-u,h=r+u;return h<0?null:d<0?this.at(h,t):this.at(d,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,l,u,d,h;const p=1/this.direction.x,v=1/this.direction.y,g=1/this.direction.z,_=this.origin;return p>=0?(r=(e.min.x-_.x)*p,a=(e.max.x-_.x)*p):(r=(e.max.x-_.x)*p,a=(e.min.x-_.x)*p),v>=0?(l=(e.min.y-_.y)*v,u=(e.max.y-_.y)*v):(l=(e.max.y-_.y)*v,u=(e.min.y-_.y)*v),r>u||l>a||((l>r||isNaN(r))&&(r=l),(u<a||isNaN(a))&&(a=u),g>=0?(d=(e.min.z-_.z)*g,h=(e.max.z-_.z)*g):(d=(e.max.z-_.z)*g,h=(e.min.z-_.z)*g),r>h||d>a)||((d>r||r!==r)&&(r=d),(h<a||a!==a)&&(a=h),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,ki)!==null}intersectTriangle(e,t,r,a,l){Fu.subVectors(t,e),ul.subVectors(r,e),ku.crossVectors(Fu,ul);let u=this.direction.dot(ku),d;if(u>0){if(a)return null;d=1}else if(u<0)d=-1,u=-u;else return null;_r.subVectors(this.origin,e);const h=d*this.direction.dot(ul.crossVectors(_r,ul));if(h<0)return null;const p=d*this.direction.dot(Fu.cross(_r));if(p<0||h+p>u)return null;const v=-d*_r.dot(ku);return v<0?null:this.at(v/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ht{constructor(e,t,r,a,l,u,d,h,p,v,g,_,S,M,E,y){Ht.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,l,u,d,h,p,v,g,_,S,M,E,y)}set(e,t,r,a,l,u,d,h,p,v,g,_,S,M,E,y){const x=this.elements;return x[0]=e,x[4]=t,x[8]=r,x[12]=a,x[1]=l,x[5]=u,x[9]=d,x[13]=h,x[2]=p,x[6]=v,x[10]=g,x[14]=_,x[3]=S,x[7]=M,x[11]=E,x[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Ht().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,r=e.elements,a=1/Ns.setFromMatrixColumn(e,0).length(),l=1/Ns.setFromMatrixColumn(e,1).length(),u=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,l=e.z,u=Math.cos(r),d=Math.sin(r),h=Math.cos(a),p=Math.sin(a),v=Math.cos(l),g=Math.sin(l);if(e.order==="XYZ"){const _=u*v,S=u*g,M=d*v,E=d*g;t[0]=h*v,t[4]=-h*g,t[8]=p,t[1]=S+M*p,t[5]=_-E*p,t[9]=-d*h,t[2]=E-_*p,t[6]=M+S*p,t[10]=u*h}else if(e.order==="YXZ"){const _=h*v,S=h*g,M=p*v,E=p*g;t[0]=_+E*d,t[4]=M*d-S,t[8]=u*p,t[1]=u*g,t[5]=u*v,t[9]=-d,t[2]=S*d-M,t[6]=E+_*d,t[10]=u*h}else if(e.order==="ZXY"){const _=h*v,S=h*g,M=p*v,E=p*g;t[0]=_-E*d,t[4]=-u*g,t[8]=M+S*d,t[1]=S+M*d,t[5]=u*v,t[9]=E-_*d,t[2]=-u*p,t[6]=d,t[10]=u*h}else if(e.order==="ZYX"){const _=u*v,S=u*g,M=d*v,E=d*g;t[0]=h*v,t[4]=M*p-S,t[8]=_*p+E,t[1]=h*g,t[5]=E*p+_,t[9]=S*p-M,t[2]=-p,t[6]=d*h,t[10]=u*h}else if(e.order==="YZX"){const _=u*h,S=u*p,M=d*h,E=d*p;t[0]=h*v,t[4]=E-_*g,t[8]=M*g+S,t[1]=g,t[5]=u*v,t[9]=-d*v,t[2]=-p*v,t[6]=S*g+M,t[10]=_-E*g}else if(e.order==="XZY"){const _=u*h,S=u*p,M=d*h,E=d*p;t[0]=h*v,t[4]=-g,t[8]=p*v,t[1]=_*g+E,t[5]=u*v,t[9]=S*g-M,t[2]=M*g-S,t[6]=d*v,t[10]=E*g+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Wx,e,jx)}lookAt(e,t,r){const a=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),yr.crossVectors(r,jn),yr.lengthSq()===0&&(Math.abs(r.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),yr.crossVectors(r,jn)),yr.normalize(),dl.crossVectors(jn,yr),a[0]=yr.x,a[4]=dl.x,a[8]=jn.x,a[1]=yr.y,a[5]=dl.y,a[9]=jn.y,a[2]=yr.z,a[6]=dl.z,a[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,l=this.elements,u=r[0],d=r[4],h=r[8],p=r[12],v=r[1],g=r[5],_=r[9],S=r[13],M=r[2],E=r[6],y=r[10],x=r[14],D=r[3],N=r[7],R=r[11],k=r[15],O=a[0],U=a[4],j=a[8],P=a[12],C=a[1],B=a[5],se=a[9],Q=a[13],ue=a[2],de=a[6],re=a[10],le=a[14],V=a[3],ce=a[7],oe=a[11],F=a[15];return l[0]=u*O+d*C+h*ue+p*V,l[4]=u*U+d*B+h*de+p*ce,l[8]=u*j+d*se+h*re+p*oe,l[12]=u*P+d*Q+h*le+p*F,l[1]=v*O+g*C+_*ue+S*V,l[5]=v*U+g*B+_*de+S*ce,l[9]=v*j+g*se+_*re+S*oe,l[13]=v*P+g*Q+_*le+S*F,l[2]=M*O+E*C+y*ue+x*V,l[6]=M*U+E*B+y*de+x*ce,l[10]=M*j+E*se+y*re+x*oe,l[14]=M*P+E*Q+y*le+x*F,l[3]=D*O+N*C+R*ue+k*V,l[7]=D*U+N*B+R*de+k*ce,l[11]=D*j+N*se+R*re+k*oe,l[15]=D*P+N*Q+R*le+k*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],l=e[12],u=e[1],d=e[5],h=e[9],p=e[13],v=e[2],g=e[6],_=e[10],S=e[14],M=e[3],E=e[7],y=e[11],x=e[15];return M*(+l*h*g-a*p*g-l*d*_+r*p*_+a*d*S-r*h*S)+E*(+t*h*S-t*p*_+l*u*_-a*u*S+a*p*v-l*h*v)+y*(+t*p*g-t*d*S-l*u*g+r*u*S+l*d*v-r*p*v)+x*(-a*d*v-t*h*g+t*d*_+a*u*g-r*u*_+r*h*v)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],l=e[3],u=e[4],d=e[5],h=e[6],p=e[7],v=e[8],g=e[9],_=e[10],S=e[11],M=e[12],E=e[13],y=e[14],x=e[15],D=g*y*p-E*_*p+E*h*S-d*y*S-g*h*x+d*_*x,N=M*_*p-v*y*p-M*h*S+u*y*S+v*h*x-u*_*x,R=v*E*p-M*g*p+M*d*S-u*E*S-v*d*x+u*g*x,k=M*g*h-v*E*h-M*d*_+u*E*_+v*d*y-u*g*y,O=t*D+r*N+a*R+l*k;if(O===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const U=1/O;return e[0]=D*U,e[1]=(E*_*l-g*y*l-E*a*S+r*y*S+g*a*x-r*_*x)*U,e[2]=(d*y*l-E*h*l+E*a*p-r*y*p-d*a*x+r*h*x)*U,e[3]=(g*h*l-d*_*l-g*a*p+r*_*p+d*a*S-r*h*S)*U,e[4]=N*U,e[5]=(v*y*l-M*_*l+M*a*S-t*y*S-v*a*x+t*_*x)*U,e[6]=(M*h*l-u*y*l-M*a*p+t*y*p+u*a*x-t*h*x)*U,e[7]=(u*_*l-v*h*l+v*a*p-t*_*p-u*a*S+t*h*S)*U,e[8]=R*U,e[9]=(M*g*l-v*E*l-M*r*S+t*E*S+v*r*x-t*g*x)*U,e[10]=(u*E*l-M*d*l+M*r*p-t*E*p-u*r*x+t*d*x)*U,e[11]=(v*d*l-u*g*l-v*r*p+t*g*p+u*r*S-t*d*S)*U,e[12]=k*U,e[13]=(v*E*a-M*g*a+M*r*_-t*E*_-v*r*y+t*g*y)*U,e[14]=(M*d*a-u*E*a-M*r*h+t*E*h+u*r*y-t*d*y)*U,e[15]=(u*g*a-v*d*a+v*r*h-t*g*h-u*r*_+t*d*_)*U,this}scale(e){const t=this.elements,r=e.x,a=e.y,l=e.z;return t[0]*=r,t[4]*=a,t[8]*=l,t[1]*=r,t[5]*=a,t[9]*=l,t[2]*=r,t[6]*=a,t[10]*=l,t[3]*=r,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),l=1-r,u=e.x,d=e.y,h=e.z,p=l*u,v=l*d;return this.set(p*u+r,p*d-a*h,p*h+a*d,0,p*d+a*h,v*d+r,v*h-a*u,0,p*h-a*d,v*h+a*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,l,u){return this.set(1,r,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,l=t._x,u=t._y,d=t._z,h=t._w,p=l+l,v=u+u,g=d+d,_=l*p,S=l*v,M=l*g,E=u*v,y=u*g,x=d*g,D=h*p,N=h*v,R=h*g,k=r.x,O=r.y,U=r.z;return a[0]=(1-(E+x))*k,a[1]=(S+R)*k,a[2]=(M-N)*k,a[3]=0,a[4]=(S-R)*O,a[5]=(1-(_+x))*O,a[6]=(y+D)*O,a[7]=0,a[8]=(M+N)*U,a[9]=(y-D)*U,a[10]=(1-(_+E))*U,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;let l=Ns.set(a[0],a[1],a[2]).length();const u=Ns.set(a[4],a[5],a[6]).length(),d=Ns.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],ci.copy(this);const p=1/l,v=1/u,g=1/d;return ci.elements[0]*=p,ci.elements[1]*=p,ci.elements[2]*=p,ci.elements[4]*=v,ci.elements[5]*=v,ci.elements[6]*=v,ci.elements[8]*=g,ci.elements[9]*=g,ci.elements[10]*=g,t.setFromRotationMatrix(ci),r.x=l,r.y=u,r.z=d,this}makePerspective(e,t,r,a,l,u,d=Gi){const h=this.elements,p=2*l/(t-e),v=2*l/(r-a),g=(t+e)/(t-e),_=(r+a)/(r-a);let S,M;if(d===Gi)S=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(d===kl)S=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return h[0]=p,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=v,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,l,u,d=Gi){const h=this.elements,p=1/(t-e),v=1/(r-a),g=1/(u-l),_=(t+e)*p,S=(r+a)*v;let M,E;if(d===Gi)M=(u+l)*g,E=-2*g;else if(d===kl)M=l*g,E=-1*g;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return h[0]=2*p,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*v,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=E,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}}const Ns=new q,ci=new Ht,Wx=new q(0,0,0),jx=new q(1,1,1),yr=new q,dl=new q,jn=new q,Qp=new Ht,Jp=new ts;class mi{constructor(e=0,t=0,r=0,a=mi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,l=a[0],u=a[4],d=a[8],h=a[1],p=a[5],v=a[9],g=a[2],_=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(yt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-yt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,S),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-g,l),this._z=0);break;case"ZXY":this._x=Math.asin(yt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-g,S),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-yt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(yt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-g,l)):(this._x=0,this._y=Math.atan2(d,S));break;case"XZY":this._z=Math.asin(-yt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Qp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Qp,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Jp.setFromEuler(this),this.setFromQuaternion(Jp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mi.DEFAULT_ORDER="XYZ";let gg=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Xx=0;const em=new q,Ls=new ts,Oi=new Ht,fl=new q,Ho=new q,Yx=new q,qx=new ts,tm=new q(1,0,0),nm=new q(0,1,0),im=new q(0,0,1),rm={type:"added"},$x={type:"removed"},Ds={type:"childadded",child:null},Ou={type:"childremoved",child:null};class Rn extends no{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Xx++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Rn.DEFAULT_UP.clone();const e=new q,t=new mi,r=new ts,a=new q(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new Ht},normalMatrix:{value:new ut}}),this.matrix=new Ht,this.matrixWorld=new Ht,this.matrixAutoUpdate=Rn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new gg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.multiply(Ls),this}rotateOnWorldAxis(e,t){return Ls.setFromAxisAngle(e,t),this.quaternion.premultiply(Ls),this}rotateX(e){return this.rotateOnAxis(tm,e)}rotateY(e){return this.rotateOnAxis(nm,e)}rotateZ(e){return this.rotateOnAxis(im,e)}translateOnAxis(e,t){return em.copy(e).applyQuaternion(this.quaternion),this.position.add(em.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(tm,e)}translateY(e){return this.translateOnAxis(nm,e)}translateZ(e){return this.translateOnAxis(im,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Oi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?fl.copy(e):fl.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),Ho.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Oi.lookAt(Ho,fl,this.up):Oi.lookAt(fl,Ho,this.up),this.quaternion.setFromRotationMatrix(Oi),a&&(Oi.extractRotation(a.matrixWorld),Ls.setFromRotationMatrix(Oi),this.quaternion.premultiply(Ls.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(rm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent($x),Ou.child=e,this.dispatchEvent(Ou),Ou.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(rm),Ds.child=e,this.dispatchEvent(Ds),Ds.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,e,Yx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ho,qx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t){const r=this.parent;if(e===!0&&r!==null&&r.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.visibility=this._visibility,a.active=this._active,a.bounds=this._bounds.map(d=>({boxInitialized:d.boxInitialized,boxMin:d.box.min.toArray(),boxMax:d.box.max.toArray(),sphereInitialized:d.sphereInitialized,sphereRadius:d.sphere.radius,sphereCenter:d.sphere.center.toArray()})),a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.geometryCount=this._geometryCount,a.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere={center:a.boundingSphere.center.toArray(),radius:a.boundingSphere.radius}),this.boundingBox!==null&&(a.boundingBox={min:a.boundingBox.min.toArray(),max:a.boundingBox.max.toArray()}));function l(d,h){return d[h.uuid]===void 0&&(d[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const h=d.shapes;if(Array.isArray(h))for(let p=0,v=h.length;p<v;p++){const g=h[p];l(e.shapes,g)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let h=0,p=this.material.length;h<p;h++)d.push(l(e.materials,this.material[h]));a.material=d}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let d=0;d<this.children.length;d++)a.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let d=0;d<this.animations.length;d++){const h=this.animations[d];a.animations.push(l(e.animations,h))}}if(t){const d=u(e.geometries),h=u(e.materials),p=u(e.textures),v=u(e.images),g=u(e.shapes),_=u(e.skeletons),S=u(e.animations),M=u(e.nodes);d.length>0&&(r.geometries=d),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),v.length>0&&(r.images=v),g.length>0&&(r.shapes=g),_.length>0&&(r.skeletons=_),S.length>0&&(r.animations=S),M.length>0&&(r.nodes=M)}return r.object=a,r;function u(d){const h=[];for(const p in d){const v=d[p];delete v.metadata,h.push(v)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}}Rn.DEFAULT_UP=new q(0,1,0);Rn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Rn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ui=new q,zi=new q,zu=new q,Bi=new q,Is=new q,Us=new q,sm=new q,Bu=new q,Hu=new q,Vu=new q,Gu=new Dt,Wu=new Dt,ju=new Dt;class di{constructor(e=new q,t=new q,r=new q){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),ui.subVectors(e,t),a.cross(ui);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,r,a,l){ui.subVectors(a,t),zi.subVectors(r,t),zu.subVectors(e,t);const u=ui.dot(ui),d=ui.dot(zi),h=ui.dot(zu),p=zi.dot(zi),v=zi.dot(zu),g=u*p-d*d;if(g===0)return l.set(0,0,0),null;const _=1/g,S=(p*h-d*v)*_,M=(u*v-d*h)*_;return l.set(1-S-M,M,S)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Bi)===null?!1:Bi.x>=0&&Bi.y>=0&&Bi.x+Bi.y<=1}static getInterpolation(e,t,r,a,l,u,d,h){return this.getBarycoord(e,t,r,a,Bi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Bi.x),h.addScaledVector(u,Bi.y),h.addScaledVector(d,Bi.z),h)}static getInterpolatedAttribute(e,t,r,a,l,u){return Gu.setScalar(0),Wu.setScalar(0),ju.setScalar(0),Gu.fromBufferAttribute(e,t),Wu.fromBufferAttribute(e,r),ju.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Gu,l.x),u.addScaledVector(Wu,l.y),u.addScaledVector(ju,l.z),u}static isFrontFacing(e,t,r,a){return ui.subVectors(r,t),zi.subVectors(e,t),ui.cross(zi).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ui.subVectors(this.c,this.b),zi.subVectors(this.a,this.b),ui.cross(zi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,l){return di.getInterpolation(e,this.a,this.b,this.c,t,r,a,l)}containsPoint(e){return di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,l=this.c;let u,d;Is.subVectors(a,r),Us.subVectors(l,r),Bu.subVectors(e,r);const h=Is.dot(Bu),p=Us.dot(Bu);if(h<=0&&p<=0)return t.copy(r);Hu.subVectors(e,a);const v=Is.dot(Hu),g=Us.dot(Hu);if(v>=0&&g<=v)return t.copy(a);const _=h*g-v*p;if(_<=0&&h>=0&&v<=0)return u=h/(h-v),t.copy(r).addScaledVector(Is,u);Vu.subVectors(e,l);const S=Is.dot(Vu),M=Us.dot(Vu);if(M>=0&&S<=M)return t.copy(l);const E=S*p-h*M;if(E<=0&&p>=0&&M<=0)return d=p/(p-M),t.copy(r).addScaledVector(Us,d);const y=v*M-S*g;if(y<=0&&g-v>=0&&S-M>=0)return sm.subVectors(l,a),d=(g-v)/(g-v+(S-M)),t.copy(a).addScaledVector(sm,d);const x=1/(y+E+_);return u=E*x,d=_*x,t.copy(r).addScaledVector(Is,u).addScaledVector(Us,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const vg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Sr={h:0,s:0,l:0},hl={h:0,s:0,l:0};function Xu(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class vt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ti){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,At.toWorkingColorSpace(this,t),this}setRGB(e,t,r,a=At.workingColorSpace){return this.r=e,this.g=t,this.b=r,At.toWorkingColorSpace(this,a),this}setHSL(e,t,r,a=At.workingColorSpace){if(e=Lx(e,1),t=yt(t,0,1),r=yt(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=Xu(u,l,e+1/3),this.g=Xu(u,l,e),this.b=Xu(u,l,e-1/3)}return At.toWorkingColorSpace(this,a),this}setStyle(e,t=ti){function r(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],d=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ti){const r=vg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=js(e.r),this.g=js(e.g),this.b=js(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ti){return At.fromWorkingColorSpace(Mn.copy(this),e),Math.round(yt(Mn.r*255,0,255))*65536+Math.round(yt(Mn.g*255,0,255))*256+Math.round(yt(Mn.b*255,0,255))}getHexString(e=ti){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=At.workingColorSpace){At.fromWorkingColorSpace(Mn.copy(this),t);const r=Mn.r,a=Mn.g,l=Mn.b,u=Math.max(r,a,l),d=Math.min(r,a,l);let h,p;const v=(d+u)/2;if(d===u)h=0,p=0;else{const g=u-d;switch(p=v<=.5?g/(u+d):g/(2-u-d),u){case r:h=(a-l)/g+(a<l?6:0);break;case a:h=(l-r)/g+2;break;case l:h=(r-a)/g+4;break}h/=6}return e.h=h,e.s=p,e.l=v,e}getRGB(e,t=At.workingColorSpace){return At.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=ti){At.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,r=Mn.g,a=Mn.b;return e!==ti?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Sr),this.setHSL(Sr.h+e,Sr.s+t,Sr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Sr),e.getHSL(hl);const r=Ru(Sr.h,hl.h,t),a=Ru(Sr.s,hl.s,t),l=Ru(Sr.l,hl.l,t);return this.setHSL(r,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*a,this.g=l[1]*t+l[4]*r+l[7]*a,this.b=l[2]*t+l[5]*r+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new vt;vt.NAMES=vg;let Kx=0;class io extends no{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Kx++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Gs,this.side=Tr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=od,this.blendDst=ad,this.blendEquation=qr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new vt(0,0,0),this.blendAlpha=0,this.depthFunc=Ys,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=jp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==Gs&&(r.blending=this.blending),this.side!==Tr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==od&&(r.blendSrc=this.blendSrc),this.blendDst!==ad&&(r.blendDst=this.blendDst),this.blendEquation!==qr&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==Ys&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==jp&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(r.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(l){const u=[];for(const d in l){const h=l[d];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let l=0;l!==a;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Vl extends io{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new vt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.combine=Zm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const $t=new q,pl=new ct;let Zx=0;class Kt{constructor(e,t,r=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Zx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Xp,this.updateRanges=[],this.gpuType=Vi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)pl.fromBufferAttribute(this,t),pl.applyMatrix3(e),this.setXY(t,pl.x,pl.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix3(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyMatrix4(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.applyNormalMatrix(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)$t.fromBufferAttribute(this,t),$t.transformDirection(e),this.setXYZ(t,$t.x,$t.y,$t.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Oo(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=On(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Oo(t,this.array)),t}setX(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Oo(t,this.array)),t}setY(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Oo(t,this.array)),t}setZ(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Oo(t,this.array)),t}setW(e,t){return this.normalized&&(t=On(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),r=On(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),r=On(r,this.array),a=On(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,l){return e*=this.itemSize,this.normalized&&(t=On(t,this.array),r=On(r,this.array),a=On(a,this.array),l=On(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Xp&&(e.usage=this.usage),e}}class xg extends Kt{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class _g extends Kt{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Pn extends Kt{constructor(e,t,r){super(new Float32Array(e),t,r)}}let Qx=0;const ei=new Ht,Yu=new Rn,Fs=new q,Xn=new qo,Vo=new qo,ln=new q;class Yn extends no{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Qx++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(fg(e)?_g:xg)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new ut().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ei.makeRotationFromQuaternion(e),this.applyMatrix4(ei),this}rotateX(e){return ei.makeRotationX(e),this.applyMatrix4(ei),this}rotateY(e){return ei.makeRotationY(e),this.applyMatrix4(ei),this}rotateZ(e){return ei.makeRotationZ(e),this.applyMatrix4(ei),this}translate(e,t,r){return ei.makeTranslation(e,t,r),this.applyMatrix4(ei),this}scale(e,t,r){return ei.makeScale(e,t,r),this.applyMatrix4(ei),this}lookAt(e){return Yu.lookAt(e),Yu.updateMatrix(),this.applyMatrix4(Yu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Fs).negate(),this.translate(Fs.x,Fs.y,Fs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Pn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new qo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new q(-1/0,-1/0,-1/0),new q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const l=t[r];Xn.setFromBufferAttribute(l),this.morphTargetsRelative?(ln.addVectors(this.boundingBox.min,Xn.min),this.boundingBox.expandByPoint(ln),ln.addVectors(this.boundingBox.max,Xn.max),this.boundingBox.expandByPoint(ln)):(this.boundingBox.expandByPoint(Xn.min),this.boundingBox.expandByPoint(Xn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Hl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new q,1/0);return}if(e){const r=this.boundingSphere.center;if(Xn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Vo.setFromBufferAttribute(d),this.morphTargetsRelative?(ln.addVectors(Xn.min,Vo.min),Xn.expandByPoint(ln),ln.addVectors(Xn.max,Vo.max),Xn.expandByPoint(ln)):(Xn.expandByPoint(Vo.min),Xn.expandByPoint(Vo.max))}Xn.getCenter(r);let a=0;for(let l=0,u=e.count;l<u;l++)ln.fromBufferAttribute(e,l),a=Math.max(a,r.distanceToSquared(ln));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],h=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)ln.fromBufferAttribute(d,p),h&&(Fs.fromBufferAttribute(e,p),ln.add(Fs)),a=Math.max(a,r.distanceToSquared(ln))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Kt(new Float32Array(4*r.count),4));const u=this.getAttribute("tangent"),d=[],h=[];for(let j=0;j<r.count;j++)d[j]=new q,h[j]=new q;const p=new q,v=new q,g=new q,_=new ct,S=new ct,M=new ct,E=new q,y=new q;function x(j,P,C){p.fromBufferAttribute(r,j),v.fromBufferAttribute(r,P),g.fromBufferAttribute(r,C),_.fromBufferAttribute(l,j),S.fromBufferAttribute(l,P),M.fromBufferAttribute(l,C),v.sub(p),g.sub(p),S.sub(_),M.sub(_);const B=1/(S.x*M.y-M.x*S.y);isFinite(B)&&(E.copy(v).multiplyScalar(M.y).addScaledVector(g,-S.y).multiplyScalar(B),y.copy(g).multiplyScalar(S.x).addScaledVector(v,-M.x).multiplyScalar(B),d[j].add(E),d[P].add(E),d[C].add(E),h[j].add(y),h[P].add(y),h[C].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let j=0,P=D.length;j<P;++j){const C=D[j],B=C.start,se=C.count;for(let Q=B,ue=B+se;Q<ue;Q+=3)x(e.getX(Q+0),e.getX(Q+1),e.getX(Q+2))}const N=new q,R=new q,k=new q,O=new q;function U(j){k.fromBufferAttribute(a,j),O.copy(k);const P=d[j];N.copy(P),N.sub(k.multiplyScalar(k.dot(P))).normalize(),R.crossVectors(O,P);const B=R.dot(h[j])<0?-1:1;u.setXYZW(j,N.x,N.y,N.z,B)}for(let j=0,P=D.length;j<P;++j){const C=D[j],B=C.start,se=C.count;for(let Q=B,ue=B+se;Q<ue;Q+=3)U(e.getX(Q+0)),U(e.getX(Q+1)),U(e.getX(Q+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0)r=new Kt(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let _=0,S=r.count;_<S;_++)r.setXYZ(_,0,0,0);const a=new q,l=new q,u=new q,d=new q,h=new q,p=new q,v=new q,g=new q;if(e)for(let _=0,S=e.count;_<S;_+=3){const M=e.getX(_+0),E=e.getX(_+1),y=e.getX(_+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,E),u.fromBufferAttribute(t,y),v.subVectors(u,l),g.subVectors(a,l),v.cross(g),d.fromBufferAttribute(r,M),h.fromBufferAttribute(r,E),p.fromBufferAttribute(r,y),d.add(v),h.add(v),p.add(v),r.setXYZ(M,d.x,d.y,d.z),r.setXYZ(E,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,S=t.count;_<S;_+=3)a.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),v.subVectors(u,l),g.subVectors(a,l),v.cross(g),r.setXYZ(_+0,v.x,v.y,v.z),r.setXYZ(_+1,v.x,v.y,v.z),r.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)ln.fromBufferAttribute(e,t),ln.normalize(),e.setXYZ(t,ln.x,ln.y,ln.z)}toNonIndexed(){function e(d,h){const p=d.array,v=d.itemSize,g=d.normalized,_=new p.constructor(h.length*v);let S=0,M=0;for(let E=0,y=h.length;E<y;E++){d.isInterleavedBufferAttribute?S=h[E]*d.data.stride+d.offset:S=h[E]*v;for(let x=0;x<v;x++)_[M++]=p[S++]}return new Kt(_,v,g)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Yn,r=this.index.array,a=this.attributes;for(const d in a){const h=a[d],p=e(h,r);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const h=[],p=l[d];for(let v=0,g=p.length;v<g;v++){const _=p[v],S=e(_,r);h.push(S)}t.morphAttributes[d]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,h=u.length;d<h;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],v=[];for(let g=0,_=p.length;g<_;g++){const S=p[g];v.push(S.toJSON(e.data))}v.length>0&&(a[h]=v,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere={center:d.center.toArray(),radius:d.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone(t));const a=e.attributes;for(const p in a){const v=a[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],g=l[p];for(let _=0,S=g.length;_<S;_++)v.push(g[_].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const g=u[p];this.addGroup(g.start,g.count,g.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const om=new Ht,Vr=new mg,ml=new Hl,am=new q,gl=new q,vl=new q,xl=new q,qu=new q,_l=new q,lm=new q,yl=new q;class cn extends Rn{constructor(e=new Yn,t=new Vl){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const d=this.morphTargetInfluences;if(l&&d){_l.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const v=d[h],g=l[h];v!==0&&(qu.fromBufferAttribute(g,e),u?_l.addScaledVector(qu,v):_l.addScaledVector(qu.sub(t),v))}t.add(_l)}return t}raycast(e,t){const r=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ml.copy(r.boundingSphere),ml.applyMatrix4(l),Vr.copy(e.ray).recast(e.near),!(ml.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(ml,am)===null||Vr.origin.distanceToSquared(am)>(e.far-e.near)**2))&&(om.copy(l).invert(),Vr.copy(e.ray).applyMatrix4(om),!(r.boundingBox!==null&&Vr.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,r){let a;const l=this.geometry,u=this.material,d=l.index,h=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,g=l.attributes.normal,_=l.groups,S=l.drawRange;if(d!==null)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const y=_[M],x=u[y.materialIndex],D=Math.max(y.start,S.start),N=Math.min(d.count,Math.min(y.start+y.count,S.start+S.count));for(let R=D,k=N;R<k;R+=3){const O=d.getX(R),U=d.getX(R+1),j=d.getX(R+2);a=Sl(this,x,e,r,p,v,g,O,U,j),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),E=Math.min(d.count,S.start+S.count);for(let y=M,x=E;y<x;y+=3){const D=d.getX(y),N=d.getX(y+1),R=d.getX(y+2);a=Sl(this,u,e,r,p,v,g,D,N,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,E=_.length;M<E;M++){const y=_[M],x=u[y.materialIndex],D=Math.max(y.start,S.start),N=Math.min(h.count,Math.min(y.start+y.count,S.start+S.count));for(let R=D,k=N;R<k;R+=3){const O=R,U=R+1,j=R+2;a=Sl(this,x,e,r,p,v,g,O,U,j),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=y.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),E=Math.min(h.count,S.start+S.count);for(let y=M,x=E;y<x;y+=3){const D=y,N=y+1,R=y+2;a=Sl(this,u,e,r,p,v,g,D,N,R),a&&(a.faceIndex=Math.floor(y/3),t.push(a))}}}}function Jx(s,e,t,r,a,l,u,d){let h;if(e.side===zn?h=r.intersectTriangle(u,l,a,!0,d):h=r.intersectTriangle(a,l,u,e.side===Tr,d),h===null)return null;yl.copy(d),yl.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(yl);return p<t.near||p>t.far?null:{distance:p,point:yl.clone(),object:s}}function Sl(s,e,t,r,a,l,u,d,h,p){s.getVertexPosition(d,gl),s.getVertexPosition(h,vl),s.getVertexPosition(p,xl);const v=Jx(s,e,t,r,gl,vl,xl,lm);if(v){const g=new q;di.getBarycoord(lm,gl,vl,xl,g),a&&(v.uv=di.getInterpolatedAttribute(a,d,h,p,g,new ct)),l&&(v.uv1=di.getInterpolatedAttribute(l,d,h,p,g,new ct)),u&&(v.normal=di.getInterpolatedAttribute(u,d,h,p,g,new q),v.normal.dot(r.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:h,c:p,normal:new q,materialIndex:0};di.getNormal(gl,vl,xl,_.normal),v.face=_,v.barycoord=g}return v}class $o extends Yn{constructor(e=1,t=1,r=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:l,depthSegments:u};const d=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],v=[],g=[];let _=0,S=0;M("z","y","x",-1,-1,r,t,e,u,l,0),M("z","y","x",1,-1,r,t,-e,u,l,1),M("x","z","y",1,1,e,r,t,a,u,2),M("x","z","y",1,-1,e,r,-t,a,u,3),M("x","y","z",1,-1,e,t,r,a,l,4),M("x","y","z",-1,-1,e,t,-r,a,l,5),this.setIndex(h),this.setAttribute("position",new Pn(p,3)),this.setAttribute("normal",new Pn(v,3)),this.setAttribute("uv",new Pn(g,2));function M(E,y,x,D,N,R,k,O,U,j,P){const C=R/U,B=k/j,se=R/2,Q=k/2,ue=O/2,de=U+1,re=j+1;let le=0,V=0;const ce=new q;for(let oe=0;oe<re;oe++){const F=oe*B-Q;for(let ie=0;ie<de;ie++){const Le=ie*C-se;ce[E]=Le*D,ce[y]=F*N,ce[x]=ue,p.push(ce.x,ce.y,ce.z),ce[E]=0,ce[y]=0,ce[x]=O>0?1:-1,v.push(ce.x,ce.y,ce.z),g.push(ie/U),g.push(1-oe/j),le+=1}}for(let oe=0;oe<j;oe++)for(let F=0;F<U;F++){const ie=_+F+de*oe,Le=_+F+de*(oe+1),ee=_+(F+1)+de*(oe+1),he=_+(F+1)+de*oe;h.push(ie,Le,he),h.push(Le,ee,he),V+=6}d.addGroup(S,V,P),S+=V,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $o(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Js(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const a=s[t][r];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone():Array.isArray(a)?e[t][r]=a.slice():e[t][r]=a}}return e}function An(s){const e={};for(let t=0;t<s.length;t++){const r=Js(s[t]);for(const a in r)e[a]=r[a]}return e}function e_(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yg(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:At.workingColorSpace}const zl={clone:Js,merge:An};var t_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,n_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pn extends io{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=t_,this.fragmentShader=n_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Js(e.uniforms),this.uniformsGroups=e_(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}}class Sg extends Rn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ht,this.projectionMatrix=new Ht,this.projectionMatrixInverse=new Ht,this.coordinateSystem=Gi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Mr=new q,cm=new ct,um=new ct;class Cn extends Sg{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=jd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jd*2*Math.atan(Math.tan(Cu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Mr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z),Mr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Mr.x,Mr.y).multiplyScalar(-e/Mr.z)}getViewSize(e,t){return this.getViewBounds(e,cm,um),t.subVectors(um,cm)}setViewOffset(e,t,r,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cu*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*r/p,a*=u.width/h,r*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-r,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ks=-90,Os=1;class i_ extends Rn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Cn(ks,Os,e,t);a.layers=this.layers,this.add(a);const l=new Cn(ks,Os,e,t);l.layers=this.layers,this.add(l);const u=new Cn(ks,Os,e,t);u.layers=this.layers,this.add(u);const d=new Cn(ks,Os,e,t);d.layers=this.layers,this.add(d);const h=new Cn(ks,Os,e,t);h.layers=this.layers,this.add(h);const p=new Cn(ks,Os,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,l,u,d,h]=t;for(const p of t)this.remove(p);if(e===Gi)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===kl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,h,p,v]=this.children,g=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const E=r.texture.generateMipmaps;r.texture.generateMipmaps=!1,e.setRenderTarget(r,0,a),e.render(t,l),e.setRenderTarget(r,1,a),e.render(t,u),e.setRenderTarget(r,2,a),e.render(t,d),e.setRenderTarget(r,3,a),e.render(t,h),e.setRenderTarget(r,4,a),e.render(t,p),r.texture.generateMipmaps=E,e.setRenderTarget(r,5,a),e.render(t,v),e.setRenderTarget(g,_,S),e.xr.enabled=M,r.texture.needsPMREMUpdate=!0}}class Mg extends Bn{constructor(e,t,r,a,l,u,d,h,p,v){e=e!==void 0?e:[],t=t!==void 0?t:qs,super(e,t,r,a,l,u,d,h,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class r_ extends pi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Mg(a,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Ei}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new $o(5,5,5),l=new pn({name:"CubemapFromEquirect",uniforms:Js(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:zn,blending:Wi});l.uniforms.tEquirect.value=t;const u=new cn(a,l),d=t.minFilter;return t.minFilter===Zr&&(t.minFilter=Ei),new i_(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t,r,a){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,a);e.setRenderTarget(l)}}class Qr extends Rn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const s_={type:"move"};class $u{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Qr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Qr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Qr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new q),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,l=null,u=null;const d=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const E of e.hand.values()){const y=t.getJointPose(E,r),x=this._getHandJoint(p,E);y!==null&&(x.matrix.fromArray(y.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=y.radius),x.visible=y!==null}const v=p.joints["index-finger-tip"],g=p.joints["thumb-tip"],_=v.position.distanceTo(g.position),S=.02,M=.005;p.inputState.pinching&&_>S+M?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=S-M&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));d!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&l!==null&&(a=l),a!==null&&(d.matrix.fromArray(a.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,a.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(a.linearVelocity)):d.hasLinearVelocity=!1,a.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(a.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(s_)))}return d!==null&&(d.visible=a!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Qr;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}class rf extends Rn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new mi,this.environmentIntensity=1,this.environmentRotation=new mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ku=new q,o_=new q,a_=new ut;class Xr{constructor(e=new q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Ku.subVectors(r,t).cross(o_.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const r=e.delta(Ku),a=this.normal.dot(r);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(r,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||a_.getNormalMatrix(e),a=this.coplanarPoint(Ku).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new Hl,Ml=new q;class sf{constructor(e=new Xr,t=new Xr,r=new Xr,a=new Xr,l=new Xr,u=new Xr){this.planes=[e,t,r,a,l,u]}set(e,t,r,a,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(r),d[3].copy(a),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Gi){const r=this.planes,a=e.elements,l=a[0],u=a[1],d=a[2],h=a[3],p=a[4],v=a[5],g=a[6],_=a[7],S=a[8],M=a[9],E=a[10],y=a[11],x=a[12],D=a[13],N=a[14],R=a[15];if(r[0].setComponents(h-l,_-p,y-S,R-x).normalize(),r[1].setComponents(h+l,_+p,y+S,R+x).normalize(),r[2].setComponents(h+u,_+v,y+M,R+D).normalize(),r[3].setComponents(h-u,_-v,y-M,R-D).normalize(),r[4].setComponents(h-d,_-g,y-E,R-N).normalize(),t===Gi)r[5].setComponents(h+d,_+g,y+E,R+N).normalize();else if(t===kl)r[5].setComponents(d,g,E,N).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(Ml.x=a.normal.x>0?e.max.x:e.min.x,Ml.y=a.normal.y>0?e.max.y:e.min.y,Ml.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class wg extends io{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new vt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const dm=new Ht,Xd=new mg,wl=new Hl,El=new q;class Eg extends Rn{constructor(e=new Yn,t=new wg){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const r=this.geometry,a=this.matrixWorld,l=e.params.Points.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),wl.copy(r.boundingSphere),wl.applyMatrix4(a),wl.radius+=l,e.ray.intersectsSphere(wl)===!1)return;dm.copy(a).invert(),Xd.copy(e.ray).applyMatrix4(dm);const d=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=d*d,p=r.index,g=r.attributes.position;if(p!==null){const _=Math.max(0,u.start),S=Math.min(p.count,u.start+u.count);for(let M=_,E=S;M<E;M++){const y=p.getX(M);El.fromBufferAttribute(g,y),fm(El,y,h,a,e,t,this)}}else{const _=Math.max(0,u.start),S=Math.min(g.count,u.start+u.count);for(let M=_,E=S;M<E;M++)El.fromBufferAttribute(g,M),fm(El,M,h,a,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const d=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}}function fm(s,e,t,r,a,l,u){const d=Xd.distanceSqToPoint(s);if(d<t){const h=new q;Xd.closestPointToPoint(s,h),h.applyMatrix4(r);const p=a.ray.origin.distanceTo(h);if(p<a.near||p>a.far)return;l.push({distance:p,distanceToRay:Math.sqrt(d),point:h,index:e,face:null,faceIndex:null,barycoord:null,object:u})}}class Tg extends Bn{constructor(e,t,r,a,l,u,d,h,p,v=Ws){if(v!==Ws&&v!==Zs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");r===void 0&&v===Ws&&(r=es),r===void 0&&v===Zs&&(r=Ks),super(null,a,l,u,d,h,v,r,p),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=d!==void 0?d:hi,this.minFilter=h!==void 0?h:hi,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Gl extends Yn{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const l=e/2,u=t/2,d=Math.floor(r),h=Math.floor(a),p=d+1,v=h+1,g=e/d,_=t/h,S=[],M=[],E=[],y=[];for(let x=0;x<v;x++){const D=x*_-u;for(let N=0;N<p;N++){const R=N*g-l;M.push(R,-D,0),E.push(0,0,1),y.push(N/d),y.push(1-x/h)}}for(let x=0;x<h;x++)for(let D=0;D<d;D++){const N=D+p*x,R=D+p*(x+1),k=D+1+p*(x+1),O=D+1+p*x;S.push(N,R,O),S.push(R,k,O)}this.setIndex(S),this.setAttribute("position",new Pn(M,3)),this.setAttribute("normal",new Pn(E,3)),this.setAttribute("uv",new Pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gl(e.width,e.height,e.widthSegments,e.heightSegments)}}class eo extends Yn{constructor(e=1,t=32,r=16,a=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+d,Math.PI);let p=0;const v=[],g=new q,_=new q,S=[],M=[],E=[],y=[];for(let x=0;x<=r;x++){const D=[],N=x/r;let R=0;x===0&&u===0?R=.5/t:x===r&&h===Math.PI&&(R=-.5/t);for(let k=0;k<=t;k++){const O=k/t;g.x=-e*Math.cos(a+O*l)*Math.sin(u+N*d),g.y=e*Math.cos(u+N*d),g.z=e*Math.sin(a+O*l)*Math.sin(u+N*d),M.push(g.x,g.y,g.z),_.copy(g).normalize(),E.push(_.x,_.y,_.z),y.push(O+R,1-N),D.push(p++)}v.push(D)}for(let x=0;x<r;x++)for(let D=0;D<t;D++){const N=v[x][D+1],R=v[x][D],k=v[x+1][D],O=v[x+1][D+1];(x!==0||u>0)&&S.push(N,R,O),(x!==r-1||h<Math.PI)&&S.push(R,k,O)}this.setIndex(S),this.setAttribute("position",new Pn(M,3)),this.setAttribute("normal",new Pn(E,3)),this.setAttribute("uv",new Pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new eo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Hs extends Yn{constructor(e=1,t=.4,r=12,a=48,l=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:l},r=Math.floor(r),a=Math.floor(a);const u=[],d=[],h=[],p=[],v=new q,g=new q,_=new q;for(let S=0;S<=r;S++)for(let M=0;M<=a;M++){const E=M/a*l,y=S/r*Math.PI*2;g.x=(e+t*Math.cos(y))*Math.cos(E),g.y=(e+t*Math.cos(y))*Math.sin(E),g.z=t*Math.sin(y),d.push(g.x,g.y,g.z),v.x=e*Math.cos(E),v.y=e*Math.sin(E),_.subVectors(g,v).normalize(),h.push(_.x,_.y,_.z),p.push(M/a),p.push(S/r)}for(let S=1;S<=r;S++)for(let M=1;M<=a;M++){const E=(a+1)*S+M-1,y=(a+1)*(S-1)+M-1,x=(a+1)*(S-1)+M,D=(a+1)*S+M;u.push(E,y,D),u.push(y,x,D)}this.setIndex(u),this.setAttribute("position",new Pn(d,3)),this.setAttribute("normal",new Pn(h,3)),this.setAttribute("uv",new Pn(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Hs(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class hm extends io{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new vt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new vt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ug,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class l_ extends io{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Mx,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class c_ extends io{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class bg extends Rn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new vt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Zu=new Ht,pm=new q,mm=new q;class u_{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.map=null,this.mapPass=null,this.matrix=new Ht,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new sf,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;pm.setFromMatrixPosition(e.matrixWorld),t.position.copy(pm),mm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(mm),t.updateMatrixWorld(),Zu.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zu),r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(Zu)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const gm=new Ht,Go=new q,Qu=new q;class d_ extends u_{constructor(){super(new Cn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new ct(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new q(1,0,0),new q(-1,0,0),new q(0,0,1),new q(0,0,-1),new q(0,1,0),new q(0,-1,0)],this._cubeUps=[new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,1,0),new q(0,0,1),new q(0,0,-1)]}updateMatrices(e,t=0){const r=this.camera,a=this.matrix,l=e.distance||r.far;l!==r.far&&(r.far=l,r.updateProjectionMatrix()),Go.setFromMatrixPosition(e.matrixWorld),r.position.copy(Go),Qu.copy(r.position),Qu.add(this._cubeDirections[t]),r.up.copy(this._cubeUps[t]),r.lookAt(Qu),r.updateMatrixWorld(),a.makeTranslation(-Go.x,-Go.y,-Go.z),gm.multiplyMatrices(r.projectionMatrix,r.matrixWorldInverse),this._frustum.setFromProjectionMatrix(gm)}}class f_ extends bg{constructor(e,t,r=0,a=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=a,this.shadow=new d_}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Ag extends Sg{constructor(e=-1,t=1,r=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=r-e,u=r+e,d=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=v*this.view.offsetY,h=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class h_ extends bg{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class p_ extends Cn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e,this.index=0}}class Cg{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=vm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=vm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function vm(){return performance.now()}function xm(s,e,t,r){const a=m_(r);switch(t){case ig:return s*e;case sg:return s*e;case og:return s*e*2;case ag:return s*e/a.components*a.byteLength;case ef:return s*e/a.components*a.byteLength;case lg:return s*e*2/a.components*a.byteLength;case tf:return s*e*2/a.components*a.byteLength;case rg:return s*e*3/a.components*a.byteLength;case fi:return s*e*4/a.components*a.byteLength;case nf:return s*e*4/a.components*a.byteLength;case Pl:case Nl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ll:case Dl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case yd:case Md:return Math.max(s,16)*Math.max(e,8)/4;case _d:case Sd:return Math.max(s,8)*Math.max(e,8)/2;case wd:case Ed:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Td:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case bd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Ad:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Cd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Rd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Pd:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Nd:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case Ld:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case Dd:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Id:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Ud:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Fd:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case kd:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Od:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case zd:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case Il:case Bd:case Hd:return Math.ceil(s/4)*Math.ceil(e/4)*16;case cg:case Vd:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Gd:case Wd:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function m_(s){switch(s){case Yi:case eg:return{byteLength:1,components:1};case Xo:case tg:case ji:return{byteLength:2,components:1};case Qd:case Jd:return{byteLength:2,components:4};case es:case Zd:case Vi:return{byteLength:4,components:1};case ng:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Kd}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Kd);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Rg(){let s=null,e=!1,t=null,r=null;function a(l,u){t(l,u),r=s.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(r=s.requestAnimationFrame(a),e=!0)},stop:function(){s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function g_(s){const e=new WeakMap;function t(d,h){const p=d.array,v=d.usage,g=p.byteLength,_=s.createBuffer();s.bindBuffer(h,_),s.bufferData(h,p,v),d.onUploadCallback();let S;if(p instanceof Float32Array)S=s.FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?S=s.HALF_FLOAT:S=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)S=s.SHORT;else if(p instanceof Uint32Array)S=s.UNSIGNED_INT;else if(p instanceof Int32Array)S=s.INT;else if(p instanceof Int8Array)S=s.BYTE;else if(p instanceof Uint8Array)S=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)S=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:S,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:g}}function r(d,h,p){const v=h.array,g=h.updateRanges;if(s.bindBuffer(p,d),g.length===0)s.bufferSubData(p,0,v);else{g.sort((S,M)=>S.start-M.start);let _=0;for(let S=1;S<g.length;S++){const M=g[_],E=g[S];E.start<=M.start+M.count+1?M.count=Math.max(M.count,E.start+E.count-M.start):(++_,g[_]=E)}g.length=_+1;for(let S=0,M=g.length;S<M;S++){const E=g[S];s.bufferSubData(p,E.start*v.BYTES_PER_ELEMENT,v,E.start,E.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const h=e.get(d);h&&(s.deleteBuffer(h.buffer),e.delete(d))}function u(d,h){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,h));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,d,h),p.version=d.version}}return{get:a,remove:l,update:u}}var v_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,x_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,__=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,y_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,S_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,M_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,w_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,E_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,T_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,b_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,A_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,C_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,R_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,P_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,N_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,L_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,D_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,I_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,U_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,F_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,k_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,O_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,z_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,B_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,H_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,V_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,G_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,W_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,j_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,X_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Y_="gl_FragColor = linearToOutputTexel( gl_FragColor );",q_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,K_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Z_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Q_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,J_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ey=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ty=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ny=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,iy=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ry=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,sy=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,oy=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,ay=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,ly=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,cy=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,uy=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,dy=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,fy=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,hy=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,py=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,my=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,gy=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,vy=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,xy=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,_y=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,yy=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Sy=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,My=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,wy=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ey=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ty=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,by=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ay=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Cy=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ry=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Py=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Ny=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ly=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Dy=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Iy=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Uy=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Fy=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ky=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Oy=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,zy=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,By=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Hy=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Vy=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Gy=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Wy=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jy=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Xy=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Yy=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qy=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,$y=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Ky=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Zy=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Qy=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Jy=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,eS=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,tS=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,nS=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,iS=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,rS=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,sS=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,oS=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,aS=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,lS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,cS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,uS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,dS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,fS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,hS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,pS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,mS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const gS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,vS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_S=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,yS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,SS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,wS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,ES=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,TS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,bS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,AS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,CS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,PS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,NS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,IS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,US=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,kS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,OS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,zS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,BS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,HS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,VS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,GS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,WS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,jS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,XS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,YS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,qS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,$S=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:v_,alphahash_pars_fragment:x_,alphamap_fragment:__,alphamap_pars_fragment:y_,alphatest_fragment:S_,alphatest_pars_fragment:M_,aomap_fragment:w_,aomap_pars_fragment:E_,batching_pars_vertex:T_,batching_vertex:b_,begin_vertex:A_,beginnormal_vertex:C_,bsdfs:R_,iridescence_fragment:P_,bumpmap_pars_fragment:N_,clipping_planes_fragment:L_,clipping_planes_pars_fragment:D_,clipping_planes_pars_vertex:I_,clipping_planes_vertex:U_,color_fragment:F_,color_pars_fragment:k_,color_pars_vertex:O_,color_vertex:z_,common:B_,cube_uv_reflection_fragment:H_,defaultnormal_vertex:V_,displacementmap_pars_vertex:G_,displacementmap_vertex:W_,emissivemap_fragment:j_,emissivemap_pars_fragment:X_,colorspace_fragment:Y_,colorspace_pars_fragment:q_,envmap_fragment:$_,envmap_common_pars_fragment:K_,envmap_pars_fragment:Z_,envmap_pars_vertex:Q_,envmap_physical_pars_fragment:cy,envmap_vertex:J_,fog_vertex:ey,fog_pars_vertex:ty,fog_fragment:ny,fog_pars_fragment:iy,gradientmap_pars_fragment:ry,lightmap_pars_fragment:sy,lights_lambert_fragment:oy,lights_lambert_pars_fragment:ay,lights_pars_begin:ly,lights_toon_fragment:uy,lights_toon_pars_fragment:dy,lights_phong_fragment:fy,lights_phong_pars_fragment:hy,lights_physical_fragment:py,lights_physical_pars_fragment:my,lights_fragment_begin:gy,lights_fragment_maps:vy,lights_fragment_end:xy,logdepthbuf_fragment:_y,logdepthbuf_pars_fragment:yy,logdepthbuf_pars_vertex:Sy,logdepthbuf_vertex:My,map_fragment:wy,map_pars_fragment:Ey,map_particle_fragment:Ty,map_particle_pars_fragment:by,metalnessmap_fragment:Ay,metalnessmap_pars_fragment:Cy,morphinstance_vertex:Ry,morphcolor_vertex:Py,morphnormal_vertex:Ny,morphtarget_pars_vertex:Ly,morphtarget_vertex:Dy,normal_fragment_begin:Iy,normal_fragment_maps:Uy,normal_pars_fragment:Fy,normal_pars_vertex:ky,normal_vertex:Oy,normalmap_pars_fragment:zy,clearcoat_normal_fragment_begin:By,clearcoat_normal_fragment_maps:Hy,clearcoat_pars_fragment:Vy,iridescence_pars_fragment:Gy,opaque_fragment:Wy,packing:jy,premultiplied_alpha_fragment:Xy,project_vertex:Yy,dithering_fragment:qy,dithering_pars_fragment:$y,roughnessmap_fragment:Ky,roughnessmap_pars_fragment:Zy,shadowmap_pars_fragment:Qy,shadowmap_pars_vertex:Jy,shadowmap_vertex:eS,shadowmask_pars_fragment:tS,skinbase_vertex:nS,skinning_pars_vertex:iS,skinning_vertex:rS,skinnormal_vertex:sS,specularmap_fragment:oS,specularmap_pars_fragment:aS,tonemapping_fragment:lS,tonemapping_pars_fragment:cS,transmission_fragment:uS,transmission_pars_fragment:dS,uv_pars_fragment:fS,uv_pars_vertex:hS,uv_vertex:pS,worldpos_vertex:mS,background_vert:gS,background_frag:vS,backgroundCube_vert:xS,backgroundCube_frag:_S,cube_vert:yS,cube_frag:SS,depth_vert:MS,depth_frag:wS,distanceRGBA_vert:ES,distanceRGBA_frag:TS,equirect_vert:bS,equirect_frag:AS,linedashed_vert:CS,linedashed_frag:RS,meshbasic_vert:PS,meshbasic_frag:NS,meshlambert_vert:LS,meshlambert_frag:DS,meshmatcap_vert:IS,meshmatcap_frag:US,meshnormal_vert:FS,meshnormal_frag:kS,meshphong_vert:OS,meshphong_frag:zS,meshphysical_vert:BS,meshphysical_frag:HS,meshtoon_vert:VS,meshtoon_frag:GS,points_vert:WS,points_frag:jS,shadow_vert:XS,shadow_frag:YS,sprite_vert:qS,sprite_frag:$S},Re={common:{diffuse:{value:new vt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new vt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new vt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new vt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Mi={basic:{uniforms:An([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:An([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:An([Re.common,Re.specularmap,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},specular:{value:new vt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:An([Re.common,Re.envmap,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.roughnessmap,Re.metalnessmap,Re.fog,Re.lights,{emissive:{value:new vt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:An([Re.common,Re.aomap,Re.lightmap,Re.emissivemap,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.gradientmap,Re.fog,Re.lights,{emissive:{value:new vt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:An([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,Re.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:An([Re.points,Re.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:An([Re.common,Re.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:An([Re.common,Re.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:An([Re.common,Re.bumpmap,Re.normalmap,Re.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:An([Re.sprite,Re.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:An([Re.common,Re.displacementmap,{referencePosition:{value:new q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:An([Re.lights,Re.fog,{color:{value:new vt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Mi.physical={uniforms:An([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new vt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new vt(0)},specularColor:{value:new vt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const Tl={r:0,b:0,g:0},Wr=new mi,KS=new Ht;function ZS(s,e,t,r,a,l,u){const d=new vt(0);let h=l===!0?0:1,p,v,g=null,_=0,S=null;function M(N){let R=N.isScene===!0?N.background:null;return R&&R.isTexture&&(R=(N.backgroundBlurriness>0?t:e).get(R)),R}function E(N){let R=!1;const k=M(N);k===null?x(d,h):k&&k.isColor&&(x(k,1),R=!0);const O=s.xr.getEnvironmentBlendMode();O==="additive"?r.buffers.color.setClear(0,0,0,1,u):O==="alpha-blend"&&r.buffers.color.setClear(0,0,0,0,u),(s.autoClear||R)&&(r.buffers.depth.setTest(!0),r.buffers.depth.setMask(!0),r.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function y(N,R){const k=M(R);k&&(k.isCubeTexture||k.mapping===Bl)?(v===void 0&&(v=new cn(new $o(1,1,1),new pn({name:"BackgroundCubeMaterial",uniforms:Js(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:zn,depthTest:!1,depthWrite:!1,fog:!1})),v.geometry.deleteAttribute("normal"),v.geometry.deleteAttribute("uv"),v.onBeforeRender=function(O,U,j){this.matrixWorld.copyPosition(j.matrixWorld)},Object.defineProperty(v.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(v)),Wr.copy(R.backgroundRotation),Wr.x*=-1,Wr.y*=-1,Wr.z*=-1,k.isCubeTexture&&k.isRenderTargetTexture===!1&&(Wr.y*=-1,Wr.z*=-1),v.material.uniforms.envMap.value=k,v.material.uniforms.flipEnvMap.value=k.isCubeTexture&&k.isRenderTargetTexture===!1?-1:1,v.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,v.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,v.material.uniforms.backgroundRotation.value.setFromMatrix4(KS.makeRotationFromEuler(Wr)),v.material.toneMapped=At.getTransfer(k.colorSpace)!==Lt,(g!==k||_!==k.version||S!==s.toneMapping)&&(v.material.needsUpdate=!0,g=k,_=k.version,S=s.toneMapping),v.layers.enableAll(),N.unshift(v,v.geometry,v.material,0,0,null)):k&&k.isTexture&&(p===void 0&&(p=new cn(new Gl(2,2),new pn({name:"BackgroundMaterial",uniforms:Js(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Tr,depthTest:!1,depthWrite:!1,fog:!1})),p.geometry.deleteAttribute("normal"),Object.defineProperty(p.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(p)),p.material.uniforms.t2D.value=k,p.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,p.material.toneMapped=At.getTransfer(k.colorSpace)!==Lt,k.matrixAutoUpdate===!0&&k.updateMatrix(),p.material.uniforms.uvTransform.value.copy(k.matrix),(g!==k||_!==k.version||S!==s.toneMapping)&&(p.material.needsUpdate=!0,g=k,_=k.version,S=s.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null))}function x(N,R){N.getRGB(Tl,yg(s)),r.buffers.color.setClear(Tl.r,Tl.g,Tl.b,R,u)}function D(){v!==void 0&&(v.geometry.dispose(),v.material.dispose(),v=void 0),p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0)}return{getClearColor:function(){return d},setClearColor:function(N,R=1){d.set(N),h=R,x(d,h)},getClearAlpha:function(){return h},setClearAlpha:function(N){h=N,x(d,h)},render:E,addToRenderList:y,dispose:D}}function QS(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},a=_(null);let l=a,u=!1;function d(C,B,se,Q,ue){let de=!1;const re=g(Q,se,B);l!==re&&(l=re,p(l.object)),de=S(C,Q,se,ue),de&&M(C,Q,se,ue),ue!==null&&e.update(ue,s.ELEMENT_ARRAY_BUFFER),(de||u)&&(u=!1,R(C,B,se,Q),ue!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(ue).buffer))}function h(){return s.createVertexArray()}function p(C){return s.bindVertexArray(C)}function v(C){return s.deleteVertexArray(C)}function g(C,B,se){const Q=se.wireframe===!0;let ue=r[C.id];ue===void 0&&(ue={},r[C.id]=ue);let de=ue[B.id];de===void 0&&(de={},ue[B.id]=de);let re=de[Q];return re===void 0&&(re=_(h()),de[Q]=re),re}function _(C){const B=[],se=[],Q=[];for(let ue=0;ue<t;ue++)B[ue]=0,se[ue]=0,Q[ue]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:B,enabledAttributes:se,attributeDivisors:Q,object:C,attributes:{},index:null}}function S(C,B,se,Q){const ue=l.attributes,de=B.attributes;let re=0;const le=se.getAttributes();for(const V in le)if(le[V].location>=0){const oe=ue[V];let F=de[V];if(F===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(F=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(F=C.instanceColor)),oe===void 0||oe.attribute!==F||F&&oe.data!==F.data)return!0;re++}return l.attributesNum!==re||l.index!==Q}function M(C,B,se,Q){const ue={},de=B.attributes;let re=0;const le=se.getAttributes();for(const V in le)if(le[V].location>=0){let oe=de[V];oe===void 0&&(V==="instanceMatrix"&&C.instanceMatrix&&(oe=C.instanceMatrix),V==="instanceColor"&&C.instanceColor&&(oe=C.instanceColor));const F={};F.attribute=oe,oe&&oe.data&&(F.data=oe.data),ue[V]=F,re++}l.attributes=ue,l.attributesNum=re,l.index=Q}function E(){const C=l.newAttributes;for(let B=0,se=C.length;B<se;B++)C[B]=0}function y(C){x(C,0)}function x(C,B){const se=l.newAttributes,Q=l.enabledAttributes,ue=l.attributeDivisors;se[C]=1,Q[C]===0&&(s.enableVertexAttribArray(C),Q[C]=1),ue[C]!==B&&(s.vertexAttribDivisor(C,B),ue[C]=B)}function D(){const C=l.newAttributes,B=l.enabledAttributes;for(let se=0,Q=B.length;se<Q;se++)B[se]!==C[se]&&(s.disableVertexAttribArray(se),B[se]=0)}function N(C,B,se,Q,ue,de,re){re===!0?s.vertexAttribIPointer(C,B,se,ue,de):s.vertexAttribPointer(C,B,se,Q,ue,de)}function R(C,B,se,Q){E();const ue=Q.attributes,de=se.getAttributes(),re=B.defaultAttributeValues;for(const le in de){const V=de[le];if(V.location>=0){let ce=ue[le];if(ce===void 0&&(le==="instanceMatrix"&&C.instanceMatrix&&(ce=C.instanceMatrix),le==="instanceColor"&&C.instanceColor&&(ce=C.instanceColor)),ce!==void 0){const oe=ce.normalized,F=ce.itemSize,ie=e.get(ce);if(ie===void 0)continue;const Le=ie.buffer,ee=ie.type,he=ie.bytesPerElement,Se=ee===s.INT||ee===s.UNSIGNED_INT||ce.gpuType===Zd;if(ce.isInterleavedBufferAttribute){const xe=ce.data,ye=xe.stride,Fe=ce.offset;if(xe.isInstancedInterleavedBuffer){for(let Ve=0;Ve<V.locationSize;Ve++)x(V.location+Ve,xe.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=xe.meshPerAttribute*xe.count)}else for(let Ve=0;Ve<V.locationSize;Ve++)y(V.location+Ve);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let Ve=0;Ve<V.locationSize;Ve++)N(V.location+Ve,F/V.locationSize,ee,oe,ye*he,(Fe+F/V.locationSize*Ve)*he,Se)}else{if(ce.isInstancedBufferAttribute){for(let xe=0;xe<V.locationSize;xe++)x(V.location+xe,ce.meshPerAttribute);C.isInstancedMesh!==!0&&Q._maxInstanceCount===void 0&&(Q._maxInstanceCount=ce.meshPerAttribute*ce.count)}else for(let xe=0;xe<V.locationSize;xe++)y(V.location+xe);s.bindBuffer(s.ARRAY_BUFFER,Le);for(let xe=0;xe<V.locationSize;xe++)N(V.location+xe,F/V.locationSize,ee,oe,F*he,F/V.locationSize*xe*he,Se)}}else if(re!==void 0){const oe=re[le];if(oe!==void 0)switch(oe.length){case 2:s.vertexAttrib2fv(V.location,oe);break;case 3:s.vertexAttrib3fv(V.location,oe);break;case 4:s.vertexAttrib4fv(V.location,oe);break;default:s.vertexAttrib1fv(V.location,oe)}}}}D()}function k(){j();for(const C in r){const B=r[C];for(const se in B){const Q=B[se];for(const ue in Q)v(Q[ue].object),delete Q[ue];delete B[se]}delete r[C]}}function O(C){if(r[C.id]===void 0)return;const B=r[C.id];for(const se in B){const Q=B[se];for(const ue in Q)v(Q[ue].object),delete Q[ue];delete B[se]}delete r[C.id]}function U(C){for(const B in r){const se=r[B];if(se[C.id]===void 0)continue;const Q=se[C.id];for(const ue in Q)v(Q[ue].object),delete Q[ue];delete se[C.id]}}function j(){P(),u=!0,l!==a&&(l=a,p(l.object))}function P(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:d,reset:j,resetDefaultState:P,dispose:k,releaseStatesOfGeometry:O,releaseStatesOfProgram:U,initAttributes:E,enableAttribute:y,disableUnusedAttributes:D}}function JS(s,e,t){let r;function a(p){r=p}function l(p,v){s.drawArrays(r,p,v),t.update(v,r,1)}function u(p,v,g){g!==0&&(s.drawArraysInstanced(r,p,v,g),t.update(v,r,g))}function d(p,v,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,p,0,v,0,g);let S=0;for(let M=0;M<g;M++)S+=v[M];t.update(S,r,1)}function h(p,v,g,_){if(g===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<p.length;M++)u(p[M],v[M],_[M]);else{S.multiDrawArraysInstancedWEBGL(r,p,0,v,0,_,0,g);let M=0;for(let E=0;E<g;E++)M+=v[E]*_[E];t.update(M,r,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=d,this.renderMultiDrawInstances=h}function eM(s,e,t,r){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const U=e.get("EXT_texture_filter_anisotropic");a=s.getParameter(U.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(U){return!(U!==fi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(U){const j=U===ji&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(U!==Yi&&r.convert(U)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&U!==Vi&&!j)}function h(U){if(U==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";U="mediump"}return U==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=h(p);v!==p&&(console.warn("THREE.WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const g=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),M=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),E=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),x=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),N=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),k=M>0,O=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:g,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:M,maxTextureSize:E,maxCubemapSize:y,maxAttributes:x,maxVertexUniforms:D,maxVaryings:N,maxFragmentUniforms:R,vertexTextures:k,maxSamples:O}}function tM(s){const e=this;let t=null,r=0,a=!1,l=!1;const u=new Xr,d=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(g,_){const S=g.length!==0||_||r!==0||a;return a=_,r=g.length,S},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(g,_){t=v(g,_,0)},this.setState=function(g,_,S){const M=g.clippingPlanes,E=g.clipIntersection,y=g.clipShadows,x=s.get(g);if(!a||M===null||M.length===0||l&&!y)l?v(null):p();else{const D=l?0:r,N=D*4;let R=x.clippingState||null;h.value=R,R=v(M,_,N,S);for(let k=0;k!==N;++k)R[k]=t[k];x.clippingState=R,this.numIntersection=E?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function v(g,_,S,M){const E=g!==null?g.length:0;let y=null;if(E!==0){if(y=h.value,M!==!0||y===null){const x=S+E*4,D=_.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<x)&&(y=new Float32Array(x));for(let N=0,R=S;N!==E;++N,R+=4)u.copy(g[N]).applyMatrix4(D,d),u.normal.toArray(y,R),y[R+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=E,e.numIntersection=0,y}}function nM(s){let e=new WeakMap;function t(u,d){return d===md?u.mapping=qs:d===gd&&(u.mapping=$s),u}function r(u){if(u&&u.isTexture){const d=u.mapping;if(d===md||d===gd)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const p=new r_(h.height);return p.fromEquirectangularTexture(s,u),e.set(u,p),u.addEventListener("dispose",a),t(p.texture,u.mapping)}else return null}}return u}function a(u){const d=u.target;d.removeEventListener("dispose",a);const h=e.get(d);h!==void 0&&(e.delete(d),h.dispose())}function l(){e=new WeakMap}return{get:r,dispose:l}}const Vs=4,_m=[.125,.215,.35,.446,.526,.582],$r=20,Ju=new Ag,ym=new vt;let ed=null,td=0,nd=0,id=!1;const Yr=(1+Math.sqrt(5))/2,zs=1/Yr,Sm=[new q(-Yr,zs,0),new q(Yr,zs,0),new q(-zs,0,Yr),new q(zs,0,Yr),new q(0,Yr,-zs),new q(0,Yr,zs),new q(-1,1,-1),new q(1,1,-1),new q(-1,1,1),new q(1,1,1)];class Mm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,r=.1,a=100){ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,a,l),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Em(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ed,td,nd),this._renderer.xr.enabled=id,e.scissorTest=!1,bl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===qs||e.mapping===$s?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ed=this._renderer.getRenderTarget(),td=this._renderer.getActiveCubeFace(),nd=this._renderer.getActiveMipmapLevel(),id=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ei,minFilter:Ei,generateMipmaps:!1,type:ji,format:fi,colorSpace:Qs,depthBuffer:!1},a=wm(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=wm(e,t,r);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=iM(l)),this._blurMaterial=rM(l,e,t)}return a}_compileMaterial(e){const t=new cn(this._lodPlanes[0],e);this._renderer.compile(t,Ju)}_sceneToCubeUV(e,t,r,a){const d=new Cn(90,1,t,r),h=[1,-1,1,1,1,1],p=[1,1,1,-1,-1,-1],v=this._renderer,g=v.autoClear,_=v.toneMapping;v.getClearColor(ym),v.toneMapping=Er,v.autoClear=!1;const S=new Vl({name:"PMREM.Background",side:zn,depthWrite:!1,depthTest:!1}),M=new cn(new $o,S);let E=!1;const y=e.background;y?y.isColor&&(S.color.copy(y),e.background=null,E=!0):(S.color.copy(ym),E=!0);for(let x=0;x<6;x++){const D=x%3;D===0?(d.up.set(0,h[x],0),d.lookAt(p[x],0,0)):D===1?(d.up.set(0,0,h[x]),d.lookAt(0,p[x],0)):(d.up.set(0,h[x],0),d.lookAt(0,0,p[x]));const N=this._cubeSize;bl(a,D*N,x>2?N:0,N,N),v.setRenderTarget(a),E&&v.render(M,d),v.render(e,d)}M.geometry.dispose(),M.material.dispose(),v.toneMapping=_,v.autoClear=g,e.background=y}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===qs||e.mapping===$s;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Em());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new cn(this._lodPlanes[0],l),d=l.uniforms;d.envMap.value=e;const h=this._cubeSize;bl(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,Ju)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),d=Sm[(a-l-1)%Sm.length];this._blur(e,l-1,l,u,d)}t.autoClear=r}_blur(e,t,r,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,a,"latitudinal",l),this._halfBlur(u,e,r,r,a,"longitudinal",l)}_halfBlur(e,t,r,a,l,u,d){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const v=3,g=new cn(this._lodPlanes[a],p),_=p.uniforms,S=this._sizeLods[r]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*$r-1),E=l/M,y=isFinite(l)?1+Math.floor(v*E):$r;y>$r&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${$r}`);const x=[];let D=0;for(let U=0;U<$r;++U){const j=U/E,P=Math.exp(-j*j/2);x.push(P),U===0?D+=P:U<y&&(D+=2*P)}for(let U=0;U<x.length;U++)x[U]=x[U]/D;_.envMap.value=e.texture,_.samples.value=y,_.weights.value=x,_.latitudinal.value=u==="latitudinal",d&&(_.poleAxis.value=d);const{_lodMax:N}=this;_.dTheta.value=M,_.mipInt.value=N-r;const R=this._sizeLods[a],k=3*R*(a>N-Vs?a-N+Vs:0),O=4*(this._cubeSize-R);bl(t,k,O,3*R,2*R),h.setRenderTarget(t),h.render(g,Ju)}}function iM(s){const e=[],t=[],r=[];let a=s;const l=s-Vs+1+_m.length;for(let u=0;u<l;u++){const d=Math.pow(2,a);t.push(d);let h=1/d;u>s-Vs?h=_m[u-s+Vs-1]:u===0&&(h=0),r.push(h);const p=1/(d-2),v=-p,g=1+p,_=[v,v,g,v,g,g,v,v,g,g,v,g],S=6,M=6,E=3,y=2,x=1,D=new Float32Array(E*M*S),N=new Float32Array(y*M*S),R=new Float32Array(x*M*S);for(let O=0;O<S;O++){const U=O%3*2/3-1,j=O>2?0:-1,P=[U,j,0,U+2/3,j,0,U+2/3,j+1,0,U,j,0,U+2/3,j+1,0,U,j+1,0];D.set(P,E*M*O),N.set(_,y*M*O);const C=[O,O,O,O,O,O];R.set(C,x*M*O)}const k=new Yn;k.setAttribute("position",new Kt(D,E)),k.setAttribute("uv",new Kt(N,y)),k.setAttribute("faceIndex",new Kt(R,x)),e.push(k),a>Vs&&a--}return{lodPlanes:e,sizeLods:t,sigmas:r}}function wm(s,e,t){const r=new pi(s,e,t);return r.texture.mapping=Bl,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function bl(s,e,t,r,a){s.viewport.set(e,t,r,a),s.scissor.set(e,t,r,a)}function rM(s,e,t){const r=new Float32Array($r),a=new q(0,1,0);return new pn({name:"SphericalGaussianBlur",defines:{n:$r,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Em(){return new pn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function Tm(){return new pn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:of(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Wi,depthTest:!1,depthWrite:!1})}function of(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function sM(s){let e=new WeakMap,t=null;function r(d){if(d&&d.isTexture){const h=d.mapping,p=h===md||h===gd,v=h===qs||h===$s;if(p||v){let g=e.get(d);const _=g!==void 0?g.texture.pmremVersion:0;if(d.isRenderTargetTexture&&d.pmremVersion!==_)return t===null&&(t=new Mm(s)),g=p?t.fromEquirectangular(d,g):t.fromCubemap(d,g),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),g.texture;if(g!==void 0)return g.texture;{const S=d.image;return p&&S&&S.height>0||v&&S&&a(S)?(t===null&&(t=new Mm(s)),g=p?t.fromEquirectangular(d):t.fromCubemap(d),g.texture.pmremVersion=d.pmremVersion,e.set(d,g),d.addEventListener("dispose",l),g.texture):null}}}return d}function a(d){let h=0;const p=6;for(let v=0;v<p;v++)d[v]!==void 0&&h++;return h===p}function l(d){const h=d.target;h.removeEventListener("dispose",l);const p=e.get(h);p!==void 0&&(e.delete(h),p.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:r,dispose:u}}function oM(s){const e={};function t(r){if(e[r]!==void 0)return e[r];let a;switch(r){case"WEBGL_depth_texture":a=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=s.getExtension(r)}return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&Bs("THREE.WebGLRenderer: "+r+" extension not supported."),a}}}function aM(s,e,t,r){const a={},l=new WeakMap;function u(g){const _=g.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete a[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),r.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(g,_){return a[_.id]===!0||(_.addEventListener("dispose",u),a[_.id]=!0,t.memory.geometries++),_}function h(g){const _=g.attributes;for(const S in _)e.update(_[S],s.ARRAY_BUFFER)}function p(g){const _=[],S=g.index,M=g.attributes.position;let E=0;if(S!==null){const D=S.array;E=S.version;for(let N=0,R=D.length;N<R;N+=3){const k=D[N+0],O=D[N+1],U=D[N+2];_.push(k,O,O,U,U,k)}}else if(M!==void 0){const D=M.array;E=M.version;for(let N=0,R=D.length/3-1;N<R;N+=3){const k=N+0,O=N+1,U=N+2;_.push(k,O,O,U,U,k)}}else return;const y=new(fg(_)?_g:xg)(_,1);y.version=E;const x=l.get(g);x&&e.remove(x),l.set(g,y)}function v(g){const _=l.get(g);if(_){const S=g.index;S!==null&&_.version<S.version&&p(g)}else p(g);return l.get(g)}return{get:d,update:h,getWireframeAttribute:v}}function lM(s,e,t){let r;function a(_){r=_}let l,u;function d(_){l=_.type,u=_.bytesPerElement}function h(_,S){s.drawElements(r,S,l,_*u),t.update(S,r,1)}function p(_,S,M){M!==0&&(s.drawElementsInstanced(r,S,l,_*u,M),t.update(S,r,M))}function v(_,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,S,0,l,_,0,M);let y=0;for(let x=0;x<M;x++)y+=S[x];t.update(y,r,1)}function g(_,S,M,E){if(M===0)return;const y=e.get("WEBGL_multi_draw");if(y===null)for(let x=0;x<_.length;x++)p(_[x]/u,S[x],E[x]);else{y.multiDrawElementsInstancedWEBGL(r,S,0,l,_,0,E,0,M);let x=0;for(let D=0;D<M;D++)x+=S[D]*E[D];t.update(x,r,1)}}this.setMode=a,this.setIndex=d,this.render=h,this.renderInstances=p,this.renderMultiDraw=v,this.renderMultiDrawInstances=g}function cM(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,d){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=d*(l/3);break;case s.LINES:t.lines+=d*(l/2);break;case s.LINE_STRIP:t.lines+=d*(l-1);break;case s.LINE_LOOP:t.lines+=d*l;break;case s.POINTS:t.points+=d*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function uM(s,e,t){const r=new WeakMap,a=new Dt;function l(u,d,h){const p=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,g=v!==void 0?v.length:0;let _=r.get(d);if(_===void 0||_.count!==g){let C=function(){j.dispose(),r.delete(d),d.removeEventListener("dispose",C)};var S=C;_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,E=d.morphAttributes.normal!==void 0,y=d.morphAttributes.color!==void 0,x=d.morphAttributes.position||[],D=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let R=0;M===!0&&(R=1),E===!0&&(R=2),y===!0&&(R=3);let k=d.attributes.position.count*R,O=1;k>e.maxTextureSize&&(O=Math.ceil(k/e.maxTextureSize),k=e.maxTextureSize);const U=new Float32Array(k*O*4*g),j=new pg(U,k,O,g);j.type=Vi,j.needsUpdate=!0;const P=R*4;for(let B=0;B<g;B++){const se=x[B],Q=D[B],ue=N[B],de=k*O*4*B;for(let re=0;re<se.count;re++){const le=re*P;M===!0&&(a.fromBufferAttribute(se,re),U[de+le+0]=a.x,U[de+le+1]=a.y,U[de+le+2]=a.z,U[de+le+3]=0),E===!0&&(a.fromBufferAttribute(Q,re),U[de+le+4]=a.x,U[de+le+5]=a.y,U[de+le+6]=a.z,U[de+le+7]=0),y===!0&&(a.fromBufferAttribute(ue,re),U[de+le+8]=a.x,U[de+le+9]=a.y,U[de+le+10]=a.z,U[de+le+11]=ue.itemSize===4?a.w:1)}}_={count:g,texture:j,size:new ct(k,O)},r.set(d,_),d.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let M=0;for(let y=0;y<p.length;y++)M+=p[y];const E=d.morphTargetsRelative?1:1-M;h.getUniforms().setValue(s,"morphTargetBaseInfluence",E),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",_.size)}return{update:l}}function dM(s,e,t,r){let a=new WeakMap;function l(h){const p=r.render.frame,v=h.geometry,g=e.get(h,v);if(a.get(g)!==p&&(e.update(g),a.set(g,p)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),a.get(h)!==p&&(t.update(h.instanceMatrix,s.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,s.ARRAY_BUFFER),a.set(h,p))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==p&&(_.update(),a.set(_,p))}return g}function u(){a=new WeakMap}function d(h){const p=h.target;p.removeEventListener("dispose",d),t.remove(p.instanceMatrix),p.instanceColor!==null&&t.remove(p.instanceColor)}return{update:l,dispose:u}}const Pg=new Bn,bm=new Tg(1,1),Ng=new pg,Lg=new Vx,Dg=new Mg,Am=[],Cm=[],Rm=new Float32Array(16),Pm=new Float32Array(9),Nm=new Float32Array(4);function ro(s,e,t){const r=s[0];if(r<=0||r>0)return s;const a=e*t;let l=Am[a];if(l===void 0&&(l=new Float32Array(a),Am[a]=l),e!==0){r.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,s[u].toArray(l,d)}return l}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function Wl(s,e){let t=Cm[e];t===void 0&&(t=new Int32Array(e),Cm[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function fM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function hM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function pM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function mM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function gM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Nm.set(r),s.uniformMatrix2fv(this.addr,!1,Nm),tn(t,r)}}function vM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Pm.set(r),s.uniformMatrix3fv(this.addr,!1,Pm),tn(t,r)}}function xM(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Rm.set(r),s.uniformMatrix4fv(this.addr,!1,Rm),tn(t,r)}}function _M(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function yM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function SM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function MM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function wM(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function EM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function TM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function bM(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function AM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a);let l;this.type===s.SAMPLER_2D_SHADOW?(bm.compareFunction=dg,l=bm):l=Pg,t.setTexture2D(e||l,a)}function CM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||Lg,a)}function RM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||Dg,a)}function PM(s,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(s.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||Ng,a)}function NM(s){switch(s){case 5126:return fM;case 35664:return hM;case 35665:return pM;case 35666:return mM;case 35674:return gM;case 35675:return vM;case 35676:return xM;case 5124:case 35670:return _M;case 35667:case 35671:return yM;case 35668:case 35672:return SM;case 35669:case 35673:return MM;case 5125:return wM;case 36294:return EM;case 36295:return TM;case 36296:return bM;case 35678:case 36198:case 36298:case 36306:case 35682:return AM;case 35679:case 36299:case 36307:return CM;case 35680:case 36300:case 36308:case 36293:return RM;case 36289:case 36303:case 36311:case 36292:return PM}}function LM(s,e){s.uniform1fv(this.addr,e)}function DM(s,e){const t=ro(e,this.size,2);s.uniform2fv(this.addr,t)}function IM(s,e){const t=ro(e,this.size,3);s.uniform3fv(this.addr,t)}function UM(s,e){const t=ro(e,this.size,4);s.uniform4fv(this.addr,t)}function FM(s,e){const t=ro(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function kM(s,e){const t=ro(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function OM(s,e){const t=ro(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function zM(s,e){s.uniform1iv(this.addr,e)}function BM(s,e){s.uniform2iv(this.addr,e)}function HM(s,e){s.uniform3iv(this.addr,e)}function VM(s,e){s.uniform4iv(this.addr,e)}function GM(s,e){s.uniform1uiv(this.addr,e)}function WM(s,e){s.uniform2uiv(this.addr,e)}function jM(s,e){s.uniform3uiv(this.addr,e)}function XM(s,e){s.uniform4uiv(this.addr,e)}function YM(s,e,t){const r=this.cache,a=e.length,l=Wl(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||Pg,l[u])}function qM(s,e,t){const r=this.cache,a=e.length,l=Wl(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||Lg,l[u])}function $M(s,e,t){const r=this.cache,a=e.length,l=Wl(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||Dg,l[u])}function KM(s,e,t){const r=this.cache,a=e.length,l=Wl(t,a);en(r,l)||(s.uniform1iv(this.addr,l),tn(r,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||Ng,l[u])}function ZM(s){switch(s){case 5126:return LM;case 35664:return DM;case 35665:return IM;case 35666:return UM;case 35674:return FM;case 35675:return kM;case 35676:return OM;case 5124:case 35670:return zM;case 35667:case 35671:return BM;case 35668:case 35672:return HM;case 35669:case 35673:return VM;case 5125:return GM;case 36294:return WM;case 36295:return jM;case 36296:return XM;case 35678:case 36198:case 36298:case 36306:case 35682:return YM;case 35679:case 36299:case 36307:return qM;case 35680:case 36300:case 36308:case 36293:return $M;case 36289:case 36303:case 36311:case 36292:return KM}}class QM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=NM(t.type)}}class JM{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=ZM(t.type)}}class e1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const d=a[l];d.setValue(e,t[d.id],r)}}}const rd=/(\w+)(\])?(\[|\.)?/g;function Lm(s,e){s.seq.push(e),s.map[e.id]=e}function t1(s,e,t){const r=s.name,a=r.length;for(rd.lastIndex=0;;){const l=rd.exec(r),u=rd.lastIndex;let d=l[1];const h=l[2]==="]",p=l[3];if(h&&(d=d|0),p===void 0||p==="["&&u+2===a){Lm(t,p===void 0?new QM(d,s,e):new JM(d,s,e));break}else{let g=t.map[d];g===void 0&&(g=new e1(d),Lm(t,g)),t=g}}}class Ul{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);t1(l,u,this)}}setValue(e,t,r,a){const l=this.map[t];l!==void 0&&l.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let l=0,u=t.length;l!==u;++l){const d=t[l],h=r[d.id];h.needsUpdate!==!1&&d.setValue(e,h.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&r.push(u)}return r}}function Dm(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const n1=37297;let i1=0;function r1(s,e){const t=s.split(`
`),r=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const d=u+1;r.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return r.join(`
`)}const Im=new ut;function s1(s){At._getMatrix(Im,At.workingColorSpace,s);const e=`mat3( ${Im.elements.map(t=>t.toFixed(4))} )`;switch(At.getTransfer(s)){case Fl:return[e,"LinearTransferOETF"];case Lt:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Um(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),a=s.getShaderInfoLog(e).trim();if(r&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+r1(s.getShaderSource(e),u)}else return a}function o1(s,e){const t=s1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function a1(s,e){let t;switch(e){case mx:t="Linear";break;case gx:t="Reinhard";break;case vx:t="Cineon";break;case Qm:t="ACESFilmic";break;case _x:t="AgX";break;case yx:t="Neutral";break;case xx:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Al=new q;function l1(){At.getLuminanceCoefficients(Al);const s=Al.x.toFixed(4),e=Al.y.toFixed(4),t=Al.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function c1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(jo).join(`
`)}function u1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function d1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const l=s.getActiveAttrib(e,a),u=l.name;let d=1;l.type===s.FLOAT_MAT2&&(d=2),l.type===s.FLOAT_MAT3&&(d=3),l.type===s.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:d}}return t}function jo(s){return s!==""}function Fm(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function km(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const f1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Yd(s){return s.replace(f1,p1)}const h1=new Map;function p1(s,e){let t=ft[e];if(t===void 0){const r=h1.get(e);if(r!==void 0)t=ft[r],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("Can not resolve #include <"+e+">")}return Yd(t)}const m1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Om(s){return s.replace(m1,g1)}function g1(s,e,t,r){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function zm(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function v1(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===Km?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===qv?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Hi&&(e="SHADOWMAP_TYPE_VSM"),e}function x1(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case qs:case $s:e="ENVMAP_TYPE_CUBE";break;case Bl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function _1(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case $s:e="ENVMAP_MODE_REFRACTION";break}return e}function y1(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Zm:e="ENVMAP_BLENDING_MULTIPLY";break;case hx:e="ENVMAP_BLENDING_MIX";break;case px:e="ENVMAP_BLENDING_ADD";break}return e}function S1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function M1(s,e,t,r){const a=s.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const h=v1(t),p=x1(t),v=_1(t),g=y1(t),_=S1(t),S=c1(t),M=u1(l),E=a.createProgram();let y,x,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(jo).join(`
`),y.length>0&&(y+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(jo).join(`
`),x.length>0&&(x+=`
`)):(y=[zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(jo).join(`
`),x=[zm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+g:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Er?"#define TONE_MAPPING":"",t.toneMapping!==Er?ft.tonemapping_pars_fragment:"",t.toneMapping!==Er?a1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,o1("linearToOutputTexel",t.outputColorSpace),l1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(jo).join(`
`)),u=Yd(u),u=Fm(u,t),u=km(u,t),d=Yd(d),d=Fm(d,t),d=km(d,t),u=Om(u),d=Om(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,x=["#define varying in",t.glslVersion===Yp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Yp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const N=D+y+u,R=D+x+d,k=Dm(a,a.VERTEX_SHADER,N),O=Dm(a,a.FRAGMENT_SHADER,R);a.attachShader(E,k),a.attachShader(E,O),t.index0AttributeName!==void 0?a.bindAttribLocation(E,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(E,0,"position"),a.linkProgram(E);function U(B){if(s.debug.checkShaderErrors){const se=a.getProgramInfoLog(E).trim(),Q=a.getShaderInfoLog(k).trim(),ue=a.getShaderInfoLog(O).trim();let de=!0,re=!0;if(a.getProgramParameter(E,a.LINK_STATUS)===!1)if(de=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(a,E,k,O);else{const le=Um(a,k,"vertex"),V=Um(a,O,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(E,a.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+se+`
`+le+`
`+V)}else se!==""?console.warn("THREE.WebGLProgram: Program Info Log:",se):(Q===""||ue==="")&&(re=!1);re&&(B.diagnostics={runnable:de,programLog:se,vertexShader:{log:Q,prefix:y},fragmentShader:{log:ue,prefix:x}})}a.deleteShader(k),a.deleteShader(O),j=new Ul(a,E),P=d1(a,E)}let j;this.getUniforms=function(){return j===void 0&&U(this),j};let P;this.getAttributes=function(){return P===void 0&&U(this),P};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(E,n1)),C},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(E),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=i1++,this.cacheKey=e,this.usedTimes=1,this.program=E,this.vertexShader=k,this.fragmentShader=O,this}let w1=0;class E1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,r=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(r),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new T1(e),t.set(e,r)),r}}class T1{constructor(e){this.id=w1++,this.code=e,this.usedTimes=0}}function b1(s,e,t,r,a,l,u){const d=new gg,h=new E1,p=new Set,v=[],g=a.logarithmicDepthBuffer,_=a.vertexTextures;let S=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(P){return p.add(P),P===0?"uv":`uv${P}`}function y(P,C,B,se,Q){const ue=se.fog,de=Q.geometry,re=P.isMeshStandardMaterial?se.environment:null,le=(P.isMeshStandardMaterial?t:e).get(P.envMap||re),V=le&&le.mapping===Bl?le.image.height:null,ce=M[P.type];P.precision!==null&&(S=a.getMaxPrecision(P.precision),S!==P.precision&&console.warn("THREE.WebGLProgram.getParameters:",P.precision,"not supported, using",S,"instead."));const oe=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,F=oe!==void 0?oe.length:0;let ie=0;de.morphAttributes.position!==void 0&&(ie=1),de.morphAttributes.normal!==void 0&&(ie=2),de.morphAttributes.color!==void 0&&(ie=3);let Le,ee,he,Se;if(ce){const wt=Mi[ce];Le=wt.vertexShader,ee=wt.fragmentShader}else Le=P.vertexShader,ee=P.fragmentShader,h.update(P),he=h.getVertexShaderID(P),Se=h.getFragmentShaderID(P);const xe=s.getRenderTarget(),ye=s.state.buffers.depth.getReversed(),Fe=Q.isInstancedMesh===!0,Ve=Q.isBatchedMesh===!0,Pt=!!P.map,Ct=!!P.matcap,at=!!le,z=!!P.aoMap,un=!!P.lightMap,ht=!!P.bumpMap,dt=!!P.normalMap,Ke=!!P.displacementMap,Rt=!!P.emissiveMap,Xe=!!P.metalnessMap,L=!!P.roughnessMap,T=P.anisotropy>0,J=P.clearcoat>0,me=P.dispersion>0,ge=P.iridescence>0,fe=P.sheen>0,qe=P.transmission>0,be=T&&!!P.anisotropyMap,ke=J&&!!P.clearcoatMap,pt=J&&!!P.clearcoatNormalMap,Ee=J&&!!P.clearcoatRoughnessMap,ze=ge&&!!P.iridescenceMap,Qe=ge&&!!P.iridescenceThicknessMap,nt=fe&&!!P.sheenColorMap,Be=fe&&!!P.sheenRoughnessMap,mt=!!P.specularMap,st=!!P.specularColorMap,Nt=!!P.specularIntensityMap,W=qe&&!!P.transmissionMap,Ae=qe&&!!P.thicknessMap,ae=!!P.gradientMap,pe=!!P.alphaMap,De=P.alphaTest>0,Ne=!!P.alphaHash,ot=!!P.extensions;let Ft=Er;P.toneMapped&&(xe===null||xe.isXRRenderTarget===!0)&&(Ft=s.toneMapping);const Zt={shaderID:ce,shaderType:P.type,shaderName:P.name,vertexShader:Le,fragmentShader:ee,defines:P.defines,customVertexShaderID:he,customFragmentShaderID:Se,isRawShaderMaterial:P.isRawShaderMaterial===!0,glslVersion:P.glslVersion,precision:S,batching:Ve,batchingColor:Ve&&Q._colorsTexture!==null,instancing:Fe,instancingColor:Fe&&Q.instanceColor!==null,instancingMorph:Fe&&Q.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:xe===null?s.outputColorSpace:xe.isXRRenderTarget===!0?xe.texture.colorSpace:Qs,alphaToCoverage:!!P.alphaToCoverage,map:Pt,matcap:Ct,envMap:at,envMapMode:at&&le.mapping,envMapCubeUVHeight:V,aoMap:z,lightMap:un,bumpMap:ht,normalMap:dt,displacementMap:_&&Ke,emissiveMap:Rt,normalMapObjectSpace:dt&&P.normalMapType===Ex,normalMapTangentSpace:dt&&P.normalMapType===ug,metalnessMap:Xe,roughnessMap:L,anisotropy:T,anisotropyMap:be,clearcoat:J,clearcoatMap:ke,clearcoatNormalMap:pt,clearcoatRoughnessMap:Ee,dispersion:me,iridescence:ge,iridescenceMap:ze,iridescenceThicknessMap:Qe,sheen:fe,sheenColorMap:nt,sheenRoughnessMap:Be,specularMap:mt,specularColorMap:st,specularIntensityMap:Nt,transmission:qe,transmissionMap:W,thicknessMap:Ae,gradientMap:ae,opaque:P.transparent===!1&&P.blending===Gs&&P.alphaToCoverage===!1,alphaMap:pe,alphaTest:De,alphaHash:Ne,combine:P.combine,mapUv:Pt&&E(P.map.channel),aoMapUv:z&&E(P.aoMap.channel),lightMapUv:un&&E(P.lightMap.channel),bumpMapUv:ht&&E(P.bumpMap.channel),normalMapUv:dt&&E(P.normalMap.channel),displacementMapUv:Ke&&E(P.displacementMap.channel),emissiveMapUv:Rt&&E(P.emissiveMap.channel),metalnessMapUv:Xe&&E(P.metalnessMap.channel),roughnessMapUv:L&&E(P.roughnessMap.channel),anisotropyMapUv:be&&E(P.anisotropyMap.channel),clearcoatMapUv:ke&&E(P.clearcoatMap.channel),clearcoatNormalMapUv:pt&&E(P.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&E(P.clearcoatRoughnessMap.channel),iridescenceMapUv:ze&&E(P.iridescenceMap.channel),iridescenceThicknessMapUv:Qe&&E(P.iridescenceThicknessMap.channel),sheenColorMapUv:nt&&E(P.sheenColorMap.channel),sheenRoughnessMapUv:Be&&E(P.sheenRoughnessMap.channel),specularMapUv:mt&&E(P.specularMap.channel),specularColorMapUv:st&&E(P.specularColorMap.channel),specularIntensityMapUv:Nt&&E(P.specularIntensityMap.channel),transmissionMapUv:W&&E(P.transmissionMap.channel),thicknessMapUv:Ae&&E(P.thicknessMap.channel),alphaMapUv:pe&&E(P.alphaMap.channel),vertexTangents:!!de.attributes.tangent&&(dt||T),vertexColors:P.vertexColors,vertexAlphas:P.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pointsUvs:Q.isPoints===!0&&!!de.attributes.uv&&(Pt||pe),fog:!!ue,useFog:P.fog===!0,fogExp2:!!ue&&ue.isFogExp2,flatShading:P.flatShading===!0,sizeAttenuation:P.sizeAttenuation===!0,logarithmicDepthBuffer:g,reverseDepthBuffer:ye,skinning:Q.isSkinnedMesh===!0,morphTargets:de.morphAttributes.position!==void 0,morphNormals:de.morphAttributes.normal!==void 0,morphColors:de.morphAttributes.color!==void 0,morphTargetsCount:F,morphTextureStride:ie,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:P.dithering,shadowMapEnabled:s.shadowMap.enabled&&B.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ft,decodeVideoTexture:Pt&&P.map.isVideoTexture===!0&&At.getTransfer(P.map.colorSpace)===Lt,decodeVideoTextureEmissive:Rt&&P.emissiveMap.isVideoTexture===!0&&At.getTransfer(P.emissiveMap.colorSpace)===Lt,premultipliedAlpha:P.premultipliedAlpha,doubleSided:P.side===wi,flipSided:P.side===zn,useDepthPacking:P.depthPacking>=0,depthPacking:P.depthPacking||0,index0AttributeName:P.index0AttributeName,extensionClipCullDistance:ot&&P.extensions.clipCullDistance===!0&&r.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ot&&P.extensions.multiDraw===!0||Ve)&&r.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:r.has("KHR_parallel_shader_compile"),customProgramCacheKey:P.customProgramCacheKey()};return Zt.vertexUv1s=p.has(1),Zt.vertexUv2s=p.has(2),Zt.vertexUv3s=p.has(3),p.clear(),Zt}function x(P){const C=[];if(P.shaderID?C.push(P.shaderID):(C.push(P.customVertexShaderID),C.push(P.customFragmentShaderID)),P.defines!==void 0)for(const B in P.defines)C.push(B),C.push(P.defines[B]);return P.isRawShaderMaterial===!1&&(D(C,P),N(C,P),C.push(s.outputColorSpace)),C.push(P.customProgramCacheKey),C.join()}function D(P,C){P.push(C.precision),P.push(C.outputColorSpace),P.push(C.envMapMode),P.push(C.envMapCubeUVHeight),P.push(C.mapUv),P.push(C.alphaMapUv),P.push(C.lightMapUv),P.push(C.aoMapUv),P.push(C.bumpMapUv),P.push(C.normalMapUv),P.push(C.displacementMapUv),P.push(C.emissiveMapUv),P.push(C.metalnessMapUv),P.push(C.roughnessMapUv),P.push(C.anisotropyMapUv),P.push(C.clearcoatMapUv),P.push(C.clearcoatNormalMapUv),P.push(C.clearcoatRoughnessMapUv),P.push(C.iridescenceMapUv),P.push(C.iridescenceThicknessMapUv),P.push(C.sheenColorMapUv),P.push(C.sheenRoughnessMapUv),P.push(C.specularMapUv),P.push(C.specularColorMapUv),P.push(C.specularIntensityMapUv),P.push(C.transmissionMapUv),P.push(C.thicknessMapUv),P.push(C.combine),P.push(C.fogExp2),P.push(C.sizeAttenuation),P.push(C.morphTargetsCount),P.push(C.morphAttributeCount),P.push(C.numDirLights),P.push(C.numPointLights),P.push(C.numSpotLights),P.push(C.numSpotLightMaps),P.push(C.numHemiLights),P.push(C.numRectAreaLights),P.push(C.numDirLightShadows),P.push(C.numPointLightShadows),P.push(C.numSpotLightShadows),P.push(C.numSpotLightShadowsWithMaps),P.push(C.numLightProbes),P.push(C.shadowMapType),P.push(C.toneMapping),P.push(C.numClippingPlanes),P.push(C.numClipIntersection),P.push(C.depthPacking)}function N(P,C){d.disableAll(),C.supportsVertexTextures&&d.enable(0),C.instancing&&d.enable(1),C.instancingColor&&d.enable(2),C.instancingMorph&&d.enable(3),C.matcap&&d.enable(4),C.envMap&&d.enable(5),C.normalMapObjectSpace&&d.enable(6),C.normalMapTangentSpace&&d.enable(7),C.clearcoat&&d.enable(8),C.iridescence&&d.enable(9),C.alphaTest&&d.enable(10),C.vertexColors&&d.enable(11),C.vertexAlphas&&d.enable(12),C.vertexUv1s&&d.enable(13),C.vertexUv2s&&d.enable(14),C.vertexUv3s&&d.enable(15),C.vertexTangents&&d.enable(16),C.anisotropy&&d.enable(17),C.alphaHash&&d.enable(18),C.batching&&d.enable(19),C.dispersion&&d.enable(20),C.batchingColor&&d.enable(21),P.push(d.mask),d.disableAll(),C.fog&&d.enable(0),C.useFog&&d.enable(1),C.flatShading&&d.enable(2),C.logarithmicDepthBuffer&&d.enable(3),C.reverseDepthBuffer&&d.enable(4),C.skinning&&d.enable(5),C.morphTargets&&d.enable(6),C.morphNormals&&d.enable(7),C.morphColors&&d.enable(8),C.premultipliedAlpha&&d.enable(9),C.shadowMapEnabled&&d.enable(10),C.doubleSided&&d.enable(11),C.flipSided&&d.enable(12),C.useDepthPacking&&d.enable(13),C.dithering&&d.enable(14),C.transmission&&d.enable(15),C.sheen&&d.enable(16),C.opaque&&d.enable(17),C.pointsUvs&&d.enable(18),C.decodeVideoTexture&&d.enable(19),C.decodeVideoTextureEmissive&&d.enable(20),C.alphaToCoverage&&d.enable(21),P.push(d.mask)}function R(P){const C=M[P.type];let B;if(C){const se=Mi[C];B=zl.clone(se.uniforms)}else B=P.uniforms;return B}function k(P,C){let B;for(let se=0,Q=v.length;se<Q;se++){const ue=v[se];if(ue.cacheKey===C){B=ue,++B.usedTimes;break}}return B===void 0&&(B=new M1(s,C,P,l),v.push(B)),B}function O(P){if(--P.usedTimes===0){const C=v.indexOf(P);v[C]=v[v.length-1],v.pop(),P.destroy()}}function U(P){h.remove(P)}function j(){h.dispose()}return{getParameters:y,getProgramCacheKey:x,getUniforms:R,acquireProgram:k,releaseProgram:O,releaseShaderCache:U,programs:v,dispose:j}}function A1(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let d=s.get(u);return d===void 0&&(d={},s.set(u,d)),d}function r(u){s.delete(u)}function a(u,d,h){s.get(u)[d]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:l}}function C1(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function Bm(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hm(){const s=[];let e=0;const t=[],r=[],a=[];function l(){e=0,t.length=0,r.length=0,a.length=0}function u(g,_,S,M,E,y){let x=s[e];return x===void 0?(x={id:g.id,object:g,geometry:_,material:S,groupOrder:M,renderOrder:g.renderOrder,z:E,group:y},s[e]=x):(x.id=g.id,x.object=g,x.geometry=_,x.material=S,x.groupOrder=M,x.renderOrder=g.renderOrder,x.z=E,x.group=y),e++,x}function d(g,_,S,M,E,y){const x=u(g,_,S,M,E,y);S.transmission>0?r.push(x):S.transparent===!0?a.push(x):t.push(x)}function h(g,_,S,M,E,y){const x=u(g,_,S,M,E,y);S.transmission>0?r.unshift(x):S.transparent===!0?a.unshift(x):t.unshift(x)}function p(g,_){t.length>1&&t.sort(g||C1),r.length>1&&r.sort(_||Bm),a.length>1&&a.sort(_||Bm)}function v(){for(let g=e,_=s.length;g<_;g++){const S=s[g];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:r,transparent:a,init:l,push:d,unshift:h,finish:v,sort:p}}function R1(){let s=new WeakMap;function e(r,a){const l=s.get(r);let u;return l===void 0?(u=new Hm,s.set(r,[u])):a>=l.length?(u=new Hm,l.push(u)):u=l[a],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function P1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new q,color:new vt};break;case"SpotLight":t={position:new q,direction:new q,color:new vt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new q,color:new vt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new q,skyColor:new vt,groundColor:new vt};break;case"RectAreaLight":t={color:new vt,position:new q,halfWidth:new q,halfHeight:new q};break}return s[e.id]=t,t}}}function N1(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let L1=0;function D1(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function I1(s){const e=new P1,t=N1(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new q);const a=new q,l=new Ht,u=new Ht;function d(p){let v=0,g=0,_=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let S=0,M=0,E=0,y=0,x=0,D=0,N=0,R=0,k=0,O=0,U=0;p.sort(D1);for(let P=0,C=p.length;P<C;P++){const B=p[P],se=B.color,Q=B.intensity,ue=B.distance,de=B.shadow&&B.shadow.map?B.shadow.map.texture:null;if(B.isAmbientLight)v+=se.r*Q,g+=se.g*Q,_+=se.b*Q;else if(B.isLightProbe){for(let re=0;re<9;re++)r.probe[re].addScaledVector(B.sh.coefficients[re],Q);U++}else if(B.isDirectionalLight){const re=e.get(B);if(re.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const le=B.shadow,V=t.get(B);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,r.directionalShadow[S]=V,r.directionalShadowMap[S]=de,r.directionalShadowMatrix[S]=B.shadow.matrix,D++}r.directional[S]=re,S++}else if(B.isSpotLight){const re=e.get(B);re.position.setFromMatrixPosition(B.matrixWorld),re.color.copy(se).multiplyScalar(Q),re.distance=ue,re.coneCos=Math.cos(B.angle),re.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),re.decay=B.decay,r.spot[E]=re;const le=B.shadow;if(B.map&&(r.spotLightMap[k]=B.map,k++,le.updateMatrices(B),B.castShadow&&O++),r.spotLightMatrix[E]=le.matrix,B.castShadow){const V=t.get(B);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,r.spotShadow[E]=V,r.spotShadowMap[E]=de,R++}E++}else if(B.isRectAreaLight){const re=e.get(B);re.color.copy(se).multiplyScalar(Q),re.halfWidth.set(B.width*.5,0,0),re.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=re,y++}else if(B.isPointLight){const re=e.get(B);if(re.color.copy(B.color).multiplyScalar(B.intensity),re.distance=B.distance,re.decay=B.decay,B.castShadow){const le=B.shadow,V=t.get(B);V.shadowIntensity=le.intensity,V.shadowBias=le.bias,V.shadowNormalBias=le.normalBias,V.shadowRadius=le.radius,V.shadowMapSize=le.mapSize,V.shadowCameraNear=le.camera.near,V.shadowCameraFar=le.camera.far,r.pointShadow[M]=V,r.pointShadowMap[M]=de,r.pointShadowMatrix[M]=B.shadow.matrix,N++}r.point[M]=re,M++}else if(B.isHemisphereLight){const re=e.get(B);re.skyColor.copy(B.color).multiplyScalar(Q),re.groundColor.copy(B.groundColor).multiplyScalar(Q),r.hemi[x]=re,x++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Re.LTC_FLOAT_1,r.rectAreaLTC2=Re.LTC_FLOAT_2):(r.rectAreaLTC1=Re.LTC_HALF_1,r.rectAreaLTC2=Re.LTC_HALF_2)),r.ambient[0]=v,r.ambient[1]=g,r.ambient[2]=_;const j=r.hash;(j.directionalLength!==S||j.pointLength!==M||j.spotLength!==E||j.rectAreaLength!==y||j.hemiLength!==x||j.numDirectionalShadows!==D||j.numPointShadows!==N||j.numSpotShadows!==R||j.numSpotMaps!==k||j.numLightProbes!==U)&&(r.directional.length=S,r.spot.length=E,r.rectArea.length=y,r.point.length=M,r.hemi.length=x,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=N,r.pointShadowMap.length=N,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=N,r.spotLightMatrix.length=R+k-O,r.spotLightMap.length=k,r.numSpotLightShadowsWithMaps=O,r.numLightProbes=U,j.directionalLength=S,j.pointLength=M,j.spotLength=E,j.rectAreaLength=y,j.hemiLength=x,j.numDirectionalShadows=D,j.numPointShadows=N,j.numSpotShadows=R,j.numSpotMaps=k,j.numLightProbes=U,r.version=L1++)}function h(p,v){let g=0,_=0,S=0,M=0,E=0;const y=v.matrixWorldInverse;for(let x=0,D=p.length;x<D;x++){const N=p[x];if(N.isDirectionalLight){const R=r.directional[g];R.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),g++}else if(N.isSpotLight){const R=r.spot[S];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(N.matrixWorld),a.setFromMatrixPosition(N.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(y),S++}else if(N.isRectAreaLight){const R=r.rectArea[M];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),u.identity(),l.copy(N.matrixWorld),l.premultiply(y),u.extractRotation(l),R.halfWidth.set(N.width*.5,0,0),R.halfHeight.set(0,N.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(N.isPointLight){const R=r.point[_];R.position.setFromMatrixPosition(N.matrixWorld),R.position.applyMatrix4(y),_++}else if(N.isHemisphereLight){const R=r.hemi[E];R.direction.setFromMatrixPosition(N.matrixWorld),R.direction.transformDirection(y),E++}}}return{setup:d,setupView:h,state:r}}function Vm(s){const e=new I1(s),t=[],r=[];function a(v){p.camera=v,t.length=0,r.length=0}function l(v){t.push(v)}function u(v){r.push(v)}function d(){e.setup(t)}function h(v){e.setupView(t,v)}const p={lightsArray:t,shadowsArray:r,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:p,setupLights:d,setupLightsView:h,pushLight:l,pushShadow:u}}function U1(s){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let d;return u===void 0?(d=new Vm(s),e.set(a,[d])):l>=u.length?(d=new Vm(s),u.push(d)):d=u[l],d}function r(){e=new WeakMap}return{get:t,dispose:r}}const F1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,k1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function O1(s,e,t){let r=new sf;const a=new ct,l=new ct,u=new Dt,d=new l_({depthPacking:wx}),h=new c_,p={},v=t.maxTextureSize,g={[Tr]:zn,[zn]:Tr,[wi]:wi},_=new pn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:F1,fragmentShader:k1}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new Yn;M.setAttribute("position",new Kt(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const E=new cn(M,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Km;let x=this.type;this.render=function(O,U,j){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||O.length===0)return;const P=s.getRenderTarget(),C=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),se=s.state;se.setBlending(Wi),se.buffers.color.setClear(1,1,1,1),se.buffers.depth.setTest(!0),se.setScissorTest(!1);const Q=x!==Hi&&this.type===Hi,ue=x===Hi&&this.type!==Hi;for(let de=0,re=O.length;de<re;de++){const le=O[de],V=le.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",le,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;a.copy(V.mapSize);const ce=V.getFrameExtents();if(a.multiply(ce),l.copy(V.mapSize),(a.x>v||a.y>v)&&(a.x>v&&(l.x=Math.floor(v/ce.x),a.x=l.x*ce.x,V.mapSize.x=l.x),a.y>v&&(l.y=Math.floor(v/ce.y),a.y=l.y*ce.y,V.mapSize.y=l.y)),V.map===null||Q===!0||ue===!0){const F=this.type!==Hi?{minFilter:hi,magFilter:hi}:{};V.map!==null&&V.map.dispose(),V.map=new pi(a.x,a.y,F),V.map.texture.name=le.name+".shadowMap",V.camera.updateProjectionMatrix()}s.setRenderTarget(V.map),s.clear();const oe=V.getViewportCount();for(let F=0;F<oe;F++){const ie=V.getViewport(F);u.set(l.x*ie.x,l.y*ie.y,l.x*ie.z,l.y*ie.w),se.viewport(u),V.updateMatrices(le,F),r=V.getFrustum(),R(U,j,V.camera,le,this.type)}V.isPointLightShadow!==!0&&this.type===Hi&&D(V,j),V.needsUpdate=!1}x=this.type,y.needsUpdate=!1,s.setRenderTarget(P,C,B)};function D(O,U){const j=e.update(E);_.defines.VSM_SAMPLES!==O.blurSamples&&(_.defines.VSM_SAMPLES=O.blurSamples,S.defines.VSM_SAMPLES=O.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),O.mapPass===null&&(O.mapPass=new pi(a.x,a.y)),_.uniforms.shadow_pass.value=O.map.texture,_.uniforms.resolution.value=O.mapSize,_.uniforms.radius.value=O.radius,s.setRenderTarget(O.mapPass),s.clear(),s.renderBufferDirect(U,null,j,_,E,null),S.uniforms.shadow_pass.value=O.mapPass.texture,S.uniforms.resolution.value=O.mapSize,S.uniforms.radius.value=O.radius,s.setRenderTarget(O.map),s.clear(),s.renderBufferDirect(U,null,j,S,E,null)}function N(O,U,j,P){let C=null;const B=j.isPointLight===!0?O.customDistanceMaterial:O.customDepthMaterial;if(B!==void 0)C=B;else if(C=j.isPointLight===!0?h:d,s.localClippingEnabled&&U.clipShadows===!0&&Array.isArray(U.clippingPlanes)&&U.clippingPlanes.length!==0||U.displacementMap&&U.displacementScale!==0||U.alphaMap&&U.alphaTest>0||U.map&&U.alphaTest>0){const se=C.uuid,Q=U.uuid;let ue=p[se];ue===void 0&&(ue={},p[se]=ue);let de=ue[Q];de===void 0&&(de=C.clone(),ue[Q]=de,U.addEventListener("dispose",k)),C=de}if(C.visible=U.visible,C.wireframe=U.wireframe,P===Hi?C.side=U.shadowSide!==null?U.shadowSide:U.side:C.side=U.shadowSide!==null?U.shadowSide:g[U.side],C.alphaMap=U.alphaMap,C.alphaTest=U.alphaTest,C.map=U.map,C.clipShadows=U.clipShadows,C.clippingPlanes=U.clippingPlanes,C.clipIntersection=U.clipIntersection,C.displacementMap=U.displacementMap,C.displacementScale=U.displacementScale,C.displacementBias=U.displacementBias,C.wireframeLinewidth=U.wireframeLinewidth,C.linewidth=U.linewidth,j.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const se=s.properties.get(C);se.light=j}return C}function R(O,U,j,P,C){if(O.visible===!1)return;if(O.layers.test(U.layers)&&(O.isMesh||O.isLine||O.isPoints)&&(O.castShadow||O.receiveShadow&&C===Hi)&&(!O.frustumCulled||r.intersectsObject(O))){O.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,O.matrixWorld);const Q=e.update(O),ue=O.material;if(Array.isArray(ue)){const de=Q.groups;for(let re=0,le=de.length;re<le;re++){const V=de[re],ce=ue[V.materialIndex];if(ce&&ce.visible){const oe=N(O,ce,P,C);O.onBeforeShadow(s,O,U,j,Q,oe,V),s.renderBufferDirect(j,null,Q,oe,O,V),O.onAfterShadow(s,O,U,j,Q,oe,V)}}}else if(ue.visible){const de=N(O,ue,P,C);O.onBeforeShadow(s,O,U,j,Q,de,null),s.renderBufferDirect(j,null,Q,de,O,null),O.onAfterShadow(s,O,U,j,Q,de,null)}}const se=O.children;for(let Q=0,ue=se.length;Q<ue;Q++)R(se[Q],U,j,P,C)}function k(O){O.target.removeEventListener("dispose",k);for(const j in p){const P=p[j],C=O.target.uuid;C in P&&(P[C].dispose(),delete P[C])}}}const z1={[ld]:cd,[ud]:hd,[dd]:pd,[Ys]:fd,[cd]:ld,[hd]:ud,[pd]:dd,[fd]:Ys};function B1(s,e){function t(){let W=!1;const Ae=new Dt;let ae=null;const pe=new Dt(0,0,0,0);return{setMask:function(De){ae!==De&&!W&&(s.colorMask(De,De,De,De),ae=De)},setLocked:function(De){W=De},setClear:function(De,Ne,ot,Ft,Zt){Zt===!0&&(De*=Ft,Ne*=Ft,ot*=Ft),Ae.set(De,Ne,ot,Ft),pe.equals(Ae)===!1&&(s.clearColor(De,Ne,ot,Ft),pe.copy(Ae))},reset:function(){W=!1,ae=null,pe.set(-1,0,0,0)}}}function r(){let W=!1,Ae=!1,ae=null,pe=null,De=null;return{setReversed:function(Ne){if(Ae!==Ne){const ot=e.get("EXT_clip_control");Ae?ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.ZERO_TO_ONE_EXT):ot.clipControlEXT(ot.LOWER_LEFT_EXT,ot.NEGATIVE_ONE_TO_ONE_EXT);const Ft=De;De=null,this.setClear(Ft)}Ae=Ne},getReversed:function(){return Ae},setTest:function(Ne){Ne?xe(s.DEPTH_TEST):ye(s.DEPTH_TEST)},setMask:function(Ne){ae!==Ne&&!W&&(s.depthMask(Ne),ae=Ne)},setFunc:function(Ne){if(Ae&&(Ne=z1[Ne]),pe!==Ne){switch(Ne){case ld:s.depthFunc(s.NEVER);break;case cd:s.depthFunc(s.ALWAYS);break;case ud:s.depthFunc(s.LESS);break;case Ys:s.depthFunc(s.LEQUAL);break;case dd:s.depthFunc(s.EQUAL);break;case fd:s.depthFunc(s.GEQUAL);break;case hd:s.depthFunc(s.GREATER);break;case pd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}pe=Ne}},setLocked:function(Ne){W=Ne},setClear:function(Ne){De!==Ne&&(Ae&&(Ne=1-Ne),s.clearDepth(Ne),De=Ne)},reset:function(){W=!1,ae=null,pe=null,De=null,Ae=!1}}}function a(){let W=!1,Ae=null,ae=null,pe=null,De=null,Ne=null,ot=null,Ft=null,Zt=null;return{setTest:function(wt){W||(wt?xe(s.STENCIL_TEST):ye(s.STENCIL_TEST))},setMask:function(wt){Ae!==wt&&!W&&(s.stencilMask(wt),Ae=wt)},setFunc:function(wt,Nn,wn){(ae!==wt||pe!==Nn||De!==wn)&&(s.stencilFunc(wt,Nn,wn),ae=wt,pe=Nn,De=wn)},setOp:function(wt,Nn,wn){(Ne!==wt||ot!==Nn||Ft!==wn)&&(s.stencilOp(wt,Nn,wn),Ne=wt,ot=Nn,Ft=wn)},setLocked:function(wt){W=wt},setClear:function(wt){Zt!==wt&&(s.clearStencil(wt),Zt=wt)},reset:function(){W=!1,Ae=null,ae=null,pe=null,De=null,Ne=null,ot=null,Ft=null,Zt=null}}}const l=new t,u=new r,d=new a,h=new WeakMap,p=new WeakMap;let v={},g={},_=new WeakMap,S=[],M=null,E=!1,y=null,x=null,D=null,N=null,R=null,k=null,O=null,U=new vt(0,0,0),j=0,P=!1,C=null,B=null,se=null,Q=null,ue=null;const de=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let re=!1,le=0;const V=s.getParameter(s.VERSION);V.indexOf("WebGL")!==-1?(le=parseFloat(/^WebGL (\d)/.exec(V)[1]),re=le>=1):V.indexOf("OpenGL ES")!==-1&&(le=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),re=le>=2);let ce=null,oe={};const F=s.getParameter(s.SCISSOR_BOX),ie=s.getParameter(s.VIEWPORT),Le=new Dt().fromArray(F),ee=new Dt().fromArray(ie);function he(W,Ae,ae,pe){const De=new Uint8Array(4),Ne=s.createTexture();s.bindTexture(W,Ne),s.texParameteri(W,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(W,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let ot=0;ot<ae;ot++)W===s.TEXTURE_3D||W===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,pe,0,s.RGBA,s.UNSIGNED_BYTE,De):s.texImage2D(Ae+ot,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,De);return Ne}const Se={};Se[s.TEXTURE_2D]=he(s.TEXTURE_2D,s.TEXTURE_2D,1),Se[s.TEXTURE_CUBE_MAP]=he(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),Se[s.TEXTURE_2D_ARRAY]=he(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),Se[s.TEXTURE_3D]=he(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),xe(s.DEPTH_TEST),u.setFunc(Ys),ht(!1),dt(Vp),xe(s.CULL_FACE),z(Wi);function xe(W){v[W]!==!0&&(s.enable(W),v[W]=!0)}function ye(W){v[W]!==!1&&(s.disable(W),v[W]=!1)}function Fe(W,Ae){return g[W]!==Ae?(s.bindFramebuffer(W,Ae),g[W]=Ae,W===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),W===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function Ve(W,Ae){let ae=S,pe=!1;if(W){ae=_.get(Ae),ae===void 0&&(ae=[],_.set(Ae,ae));const De=W.textures;if(ae.length!==De.length||ae[0]!==s.COLOR_ATTACHMENT0){for(let Ne=0,ot=De.length;Ne<ot;Ne++)ae[Ne]=s.COLOR_ATTACHMENT0+Ne;ae.length=De.length,pe=!0}}else ae[0]!==s.BACK&&(ae[0]=s.BACK,pe=!0);pe&&s.drawBuffers(ae)}function Pt(W){return M!==W?(s.useProgram(W),M=W,!0):!1}const Ct={[qr]:s.FUNC_ADD,[Kv]:s.FUNC_SUBTRACT,[Zv]:s.FUNC_REVERSE_SUBTRACT};Ct[Qv]=s.MIN,Ct[Jv]=s.MAX;const at={[ex]:s.ZERO,[tx]:s.ONE,[nx]:s.SRC_COLOR,[od]:s.SRC_ALPHA,[lx]:s.SRC_ALPHA_SATURATE,[ox]:s.DST_COLOR,[rx]:s.DST_ALPHA,[ix]:s.ONE_MINUS_SRC_COLOR,[ad]:s.ONE_MINUS_SRC_ALPHA,[ax]:s.ONE_MINUS_DST_COLOR,[sx]:s.ONE_MINUS_DST_ALPHA,[cx]:s.CONSTANT_COLOR,[ux]:s.ONE_MINUS_CONSTANT_COLOR,[dx]:s.CONSTANT_ALPHA,[fx]:s.ONE_MINUS_CONSTANT_ALPHA};function z(W,Ae,ae,pe,De,Ne,ot,Ft,Zt,wt){if(W===Wi){E===!0&&(ye(s.BLEND),E=!1);return}if(E===!1&&(xe(s.BLEND),E=!0),W!==$v){if(W!==y||wt!==P){if((x!==qr||R!==qr)&&(s.blendEquation(s.FUNC_ADD),x=qr,R=qr),wt)switch(W){case Gs:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jr:s.blendFunc(s.ONE,s.ONE);break;case Gp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wp:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}else switch(W){case Gs:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Jr:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case Gp:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Wp:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",W);break}D=null,N=null,k=null,O=null,U.set(0,0,0),j=0,y=W,P=wt}return}De=De||Ae,Ne=Ne||ae,ot=ot||pe,(Ae!==x||De!==R)&&(s.blendEquationSeparate(Ct[Ae],Ct[De]),x=Ae,R=De),(ae!==D||pe!==N||Ne!==k||ot!==O)&&(s.blendFuncSeparate(at[ae],at[pe],at[Ne],at[ot]),D=ae,N=pe,k=Ne,O=ot),(Ft.equals(U)===!1||Zt!==j)&&(s.blendColor(Ft.r,Ft.g,Ft.b,Zt),U.copy(Ft),j=Zt),y=W,P=!1}function un(W,Ae){W.side===wi?ye(s.CULL_FACE):xe(s.CULL_FACE);let ae=W.side===zn;Ae&&(ae=!ae),ht(ae),W.blending===Gs&&W.transparent===!1?z(Wi):z(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const pe=W.stencilWrite;d.setTest(pe),pe&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Rt(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?xe(s.SAMPLE_ALPHA_TO_COVERAGE):ye(s.SAMPLE_ALPHA_TO_COVERAGE)}function ht(W){C!==W&&(W?s.frontFace(s.CW):s.frontFace(s.CCW),C=W)}function dt(W){W!==Xv?(xe(s.CULL_FACE),W!==B&&(W===Vp?s.cullFace(s.BACK):W===Yv?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ye(s.CULL_FACE),B=W}function Ke(W){W!==se&&(re&&s.lineWidth(W),se=W)}function Rt(W,Ae,ae){W?(xe(s.POLYGON_OFFSET_FILL),(Q!==Ae||ue!==ae)&&(s.polygonOffset(Ae,ae),Q=Ae,ue=ae)):ye(s.POLYGON_OFFSET_FILL)}function Xe(W){W?xe(s.SCISSOR_TEST):ye(s.SCISSOR_TEST)}function L(W){W===void 0&&(W=s.TEXTURE0+de-1),ce!==W&&(s.activeTexture(W),ce=W)}function T(W,Ae,ae){ae===void 0&&(ce===null?ae=s.TEXTURE0+de-1:ae=ce);let pe=oe[ae];pe===void 0&&(pe={type:void 0,texture:void 0},oe[ae]=pe),(pe.type!==W||pe.texture!==Ae)&&(ce!==ae&&(s.activeTexture(ae),ce=ae),s.bindTexture(W,Ae||Se[W]),pe.type=W,pe.texture=Ae)}function J(){const W=oe[ce];W!==void 0&&W.type!==void 0&&(s.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function me(){try{s.compressedTexImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ge(){try{s.compressedTexImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function fe(){try{s.texSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function qe(){try{s.texSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function be(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ke(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function pt(){try{s.texStorage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Ee(){try{s.texStorage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function ze(){try{s.texImage2D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function Qe(){try{s.texImage3D.apply(s,arguments)}catch(W){console.error("THREE.WebGLState:",W)}}function nt(W){Le.equals(W)===!1&&(s.scissor(W.x,W.y,W.z,W.w),Le.copy(W))}function Be(W){ee.equals(W)===!1&&(s.viewport(W.x,W.y,W.z,W.w),ee.copy(W))}function mt(W,Ae){let ae=p.get(Ae);ae===void 0&&(ae=new WeakMap,p.set(Ae,ae));let pe=ae.get(W);pe===void 0&&(pe=s.getUniformBlockIndex(Ae,W.name),ae.set(W,pe))}function st(W,Ae){const pe=p.get(Ae).get(W);h.get(Ae)!==pe&&(s.uniformBlockBinding(Ae,pe,W.__bindingPointIndex),h.set(Ae,pe))}function Nt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),v={},ce=null,oe={},g={},_=new WeakMap,S=[],M=null,E=!1,y=null,x=null,D=null,N=null,R=null,k=null,O=null,U=new vt(0,0,0),j=0,P=!1,C=null,B=null,se=null,Q=null,ue=null,Le.set(0,0,s.canvas.width,s.canvas.height),ee.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:xe,disable:ye,bindFramebuffer:Fe,drawBuffers:Ve,useProgram:Pt,setBlending:z,setMaterial:un,setFlipSided:ht,setCullFace:dt,setLineWidth:Ke,setPolygonOffset:Rt,setScissorTest:Xe,activeTexture:L,bindTexture:T,unbindTexture:J,compressedTexImage2D:me,compressedTexImage3D:ge,texImage2D:ze,texImage3D:Qe,updateUBOMapping:mt,uniformBlockBinding:st,texStorage2D:pt,texStorage3D:Ee,texSubImage2D:fe,texSubImage3D:qe,compressedTexSubImage2D:be,compressedTexSubImage3D:ke,scissor:nt,viewport:Be,reset:Nt}}function H1(s,e,t,r,a,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ct,v=new WeakMap;let g;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(L,T){return S?new OffscreenCanvas(L,T):Ol("canvas")}function E(L,T,J){let me=1;const ge=Xe(L);if((ge.width>J||ge.height>J)&&(me=J/Math.max(ge.width,ge.height)),me<1)if(typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&L instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&L instanceof ImageBitmap||typeof VideoFrame<"u"&&L instanceof VideoFrame){const fe=Math.floor(me*ge.width),qe=Math.floor(me*ge.height);g===void 0&&(g=M(fe,qe));const be=T?M(fe,qe):g;return be.width=fe,be.height=qe,be.getContext("2d").drawImage(L,0,0,fe,qe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+fe+"x"+qe+")."),be}else return"data"in L&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),L;return L}function y(L){return L.generateMipmaps}function x(L){s.generateMipmap(L)}function D(L){return L.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:L.isWebGL3DRenderTarget?s.TEXTURE_3D:L.isWebGLArrayRenderTarget||L.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function N(L,T,J,me,ge=!1){if(L!==null){if(s[L]!==void 0)return s[L];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+L+"'")}let fe=T;if(T===s.RED&&(J===s.FLOAT&&(fe=s.R32F),J===s.HALF_FLOAT&&(fe=s.R16F),J===s.UNSIGNED_BYTE&&(fe=s.R8)),T===s.RED_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.R8UI),J===s.UNSIGNED_SHORT&&(fe=s.R16UI),J===s.UNSIGNED_INT&&(fe=s.R32UI),J===s.BYTE&&(fe=s.R8I),J===s.SHORT&&(fe=s.R16I),J===s.INT&&(fe=s.R32I)),T===s.RG&&(J===s.FLOAT&&(fe=s.RG32F),J===s.HALF_FLOAT&&(fe=s.RG16F),J===s.UNSIGNED_BYTE&&(fe=s.RG8)),T===s.RG_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RG8UI),J===s.UNSIGNED_SHORT&&(fe=s.RG16UI),J===s.UNSIGNED_INT&&(fe=s.RG32UI),J===s.BYTE&&(fe=s.RG8I),J===s.SHORT&&(fe=s.RG16I),J===s.INT&&(fe=s.RG32I)),T===s.RGB_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGB8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGB16UI),J===s.UNSIGNED_INT&&(fe=s.RGB32UI),J===s.BYTE&&(fe=s.RGB8I),J===s.SHORT&&(fe=s.RGB16I),J===s.INT&&(fe=s.RGB32I)),T===s.RGBA_INTEGER&&(J===s.UNSIGNED_BYTE&&(fe=s.RGBA8UI),J===s.UNSIGNED_SHORT&&(fe=s.RGBA16UI),J===s.UNSIGNED_INT&&(fe=s.RGBA32UI),J===s.BYTE&&(fe=s.RGBA8I),J===s.SHORT&&(fe=s.RGBA16I),J===s.INT&&(fe=s.RGBA32I)),T===s.RGB&&J===s.UNSIGNED_INT_5_9_9_9_REV&&(fe=s.RGB9_E5),T===s.RGBA){const qe=ge?Fl:At.getTransfer(me);J===s.FLOAT&&(fe=s.RGBA32F),J===s.HALF_FLOAT&&(fe=s.RGBA16F),J===s.UNSIGNED_BYTE&&(fe=qe===Lt?s.SRGB8_ALPHA8:s.RGBA8),J===s.UNSIGNED_SHORT_4_4_4_4&&(fe=s.RGBA4),J===s.UNSIGNED_SHORT_5_5_5_1&&(fe=s.RGB5_A1)}return(fe===s.R16F||fe===s.R32F||fe===s.RG16F||fe===s.RG32F||fe===s.RGBA16F||fe===s.RGBA32F)&&e.get("EXT_color_buffer_float"),fe}function R(L,T){let J;return L?T===null||T===es||T===Ks?J=s.DEPTH24_STENCIL8:T===Vi?J=s.DEPTH32F_STENCIL8:T===Xo&&(J=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):T===null||T===es||T===Ks?J=s.DEPTH_COMPONENT24:T===Vi?J=s.DEPTH_COMPONENT32F:T===Xo&&(J=s.DEPTH_COMPONENT16),J}function k(L,T){return y(L)===!0||L.isFramebufferTexture&&L.minFilter!==hi&&L.minFilter!==Ei?Math.log2(Math.max(T.width,T.height))+1:L.mipmaps!==void 0&&L.mipmaps.length>0?L.mipmaps.length:L.isCompressedTexture&&Array.isArray(L.image)?T.mipmaps.length:1}function O(L){const T=L.target;T.removeEventListener("dispose",O),j(T),T.isVideoTexture&&v.delete(T)}function U(L){const T=L.target;T.removeEventListener("dispose",U),C(T)}function j(L){const T=r.get(L);if(T.__webglInit===void 0)return;const J=L.source,me=_.get(J);if(me){const ge=me[T.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&P(L),Object.keys(me).length===0&&_.delete(J)}r.remove(L)}function P(L){const T=r.get(L);s.deleteTexture(T.__webglTexture);const J=L.source,me=_.get(J);delete me[T.__cacheKey],u.memory.textures--}function C(L){const T=r.get(L);if(L.depthTexture&&(L.depthTexture.dispose(),r.remove(L.depthTexture)),L.isWebGLCubeRenderTarget)for(let me=0;me<6;me++){if(Array.isArray(T.__webglFramebuffer[me]))for(let ge=0;ge<T.__webglFramebuffer[me].length;ge++)s.deleteFramebuffer(T.__webglFramebuffer[me][ge]);else s.deleteFramebuffer(T.__webglFramebuffer[me]);T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer[me])}else{if(Array.isArray(T.__webglFramebuffer))for(let me=0;me<T.__webglFramebuffer.length;me++)s.deleteFramebuffer(T.__webglFramebuffer[me]);else s.deleteFramebuffer(T.__webglFramebuffer);if(T.__webglDepthbuffer&&s.deleteRenderbuffer(T.__webglDepthbuffer),T.__webglMultisampledFramebuffer&&s.deleteFramebuffer(T.__webglMultisampledFramebuffer),T.__webglColorRenderbuffer)for(let me=0;me<T.__webglColorRenderbuffer.length;me++)T.__webglColorRenderbuffer[me]&&s.deleteRenderbuffer(T.__webglColorRenderbuffer[me]);T.__webglDepthRenderbuffer&&s.deleteRenderbuffer(T.__webglDepthRenderbuffer)}const J=L.textures;for(let me=0,ge=J.length;me<ge;me++){const fe=r.get(J[me]);fe.__webglTexture&&(s.deleteTexture(fe.__webglTexture),u.memory.textures--),r.remove(J[me])}r.remove(L)}let B=0;function se(){B=0}function Q(){const L=B;return L>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+L+" texture units while this GPU supports only "+a.maxTextures),B+=1,L}function ue(L){const T=[];return T.push(L.wrapS),T.push(L.wrapT),T.push(L.wrapR||0),T.push(L.magFilter),T.push(L.minFilter),T.push(L.anisotropy),T.push(L.internalFormat),T.push(L.format),T.push(L.type),T.push(L.generateMipmaps),T.push(L.premultiplyAlpha),T.push(L.flipY),T.push(L.unpackAlignment),T.push(L.colorSpace),T.join()}function de(L,T){const J=r.get(L);if(L.isVideoTexture&&Ke(L),L.isRenderTargetTexture===!1&&L.version>0&&J.__version!==L.version){const me=L.image;if(me===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(me.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ee(J,L,T);return}}t.bindTexture(s.TEXTURE_2D,J.__webglTexture,s.TEXTURE0+T)}function re(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){ee(J,L,T);return}t.bindTexture(s.TEXTURE_2D_ARRAY,J.__webglTexture,s.TEXTURE0+T)}function le(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){ee(J,L,T);return}t.bindTexture(s.TEXTURE_3D,J.__webglTexture,s.TEXTURE0+T)}function V(L,T){const J=r.get(L);if(L.version>0&&J.__version!==L.version){he(J,L,T);return}t.bindTexture(s.TEXTURE_CUBE_MAP,J.__webglTexture,s.TEXTURE0+T)}const ce={[vd]:s.REPEAT,[Kr]:s.CLAMP_TO_EDGE,[xd]:s.MIRRORED_REPEAT},oe={[hi]:s.NEAREST,[Sx]:s.NEAREST_MIPMAP_NEAREST,[sl]:s.NEAREST_MIPMAP_LINEAR,[Ei]:s.LINEAR,[Au]:s.LINEAR_MIPMAP_NEAREST,[Zr]:s.LINEAR_MIPMAP_LINEAR},F={[Tx]:s.NEVER,[Nx]:s.ALWAYS,[bx]:s.LESS,[dg]:s.LEQUAL,[Ax]:s.EQUAL,[Px]:s.GEQUAL,[Cx]:s.GREATER,[Rx]:s.NOTEQUAL};function ie(L,T){if(T.type===Vi&&e.has("OES_texture_float_linear")===!1&&(T.magFilter===Ei||T.magFilter===Au||T.magFilter===sl||T.magFilter===Zr||T.minFilter===Ei||T.minFilter===Au||T.minFilter===sl||T.minFilter===Zr)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(L,s.TEXTURE_WRAP_S,ce[T.wrapS]),s.texParameteri(L,s.TEXTURE_WRAP_T,ce[T.wrapT]),(L===s.TEXTURE_3D||L===s.TEXTURE_2D_ARRAY)&&s.texParameteri(L,s.TEXTURE_WRAP_R,ce[T.wrapR]),s.texParameteri(L,s.TEXTURE_MAG_FILTER,oe[T.magFilter]),s.texParameteri(L,s.TEXTURE_MIN_FILTER,oe[T.minFilter]),T.compareFunction&&(s.texParameteri(L,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(L,s.TEXTURE_COMPARE_FUNC,F[T.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(T.magFilter===hi||T.minFilter!==sl&&T.minFilter!==Zr||T.type===Vi&&e.has("OES_texture_float_linear")===!1)return;if(T.anisotropy>1||r.get(T).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");s.texParameterf(L,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(T.anisotropy,a.getMaxAnisotropy())),r.get(T).__currentAnisotropy=T.anisotropy}}}function Le(L,T){let J=!1;L.__webglInit===void 0&&(L.__webglInit=!0,T.addEventListener("dispose",O));const me=T.source;let ge=_.get(me);ge===void 0&&(ge={},_.set(me,ge));const fe=ue(T);if(fe!==L.__cacheKey){ge[fe]===void 0&&(ge[fe]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,J=!0),ge[fe].usedTimes++;const qe=ge[L.__cacheKey];qe!==void 0&&(ge[L.__cacheKey].usedTimes--,qe.usedTimes===0&&P(T)),L.__cacheKey=fe,L.__webglTexture=ge[fe].texture}return J}function ee(L,T,J){let me=s.TEXTURE_2D;(T.isDataArrayTexture||T.isCompressedArrayTexture)&&(me=s.TEXTURE_2D_ARRAY),T.isData3DTexture&&(me=s.TEXTURE_3D);const ge=Le(L,T),fe=T.source;t.bindTexture(me,L.__webglTexture,s.TEXTURE0+J);const qe=r.get(fe);if(fe.version!==qe.__version||ge===!0){t.activeTexture(s.TEXTURE0+J);const be=At.getPrimaries(At.workingColorSpace),ke=T.colorSpace===wr?null:At.getPrimaries(T.colorSpace),pt=T.colorSpace===wr||be===ke?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,pt);let Ee=E(T.image,!1,a.maxTextureSize);Ee=Rt(T,Ee);const ze=l.convert(T.format,T.colorSpace),Qe=l.convert(T.type);let nt=N(T.internalFormat,ze,Qe,T.colorSpace,T.isVideoTexture);ie(me,T);let Be;const mt=T.mipmaps,st=T.isVideoTexture!==!0,Nt=qe.__version===void 0||ge===!0,W=fe.dataReady,Ae=k(T,Ee);if(T.isDepthTexture)nt=R(T.format===Zs,T.type),Nt&&(st?t.texStorage2D(s.TEXTURE_2D,1,nt,Ee.width,Ee.height):t.texImage2D(s.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,ze,Qe,null));else if(T.isDataTexture)if(mt.length>0){st&&Nt&&t.texStorage2D(s.TEXTURE_2D,Ae,nt,mt[0].width,mt[0].height);for(let ae=0,pe=mt.length;ae<pe;ae++)Be=mt[ae],st?W&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,ze,Qe,Be.data):t.texImage2D(s.TEXTURE_2D,ae,nt,Be.width,Be.height,0,ze,Qe,Be.data);T.generateMipmaps=!1}else st?(Nt&&t.texStorage2D(s.TEXTURE_2D,Ae,nt,Ee.width,Ee.height),W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Ee.width,Ee.height,ze,Qe,Ee.data)):t.texImage2D(s.TEXTURE_2D,0,nt,Ee.width,Ee.height,0,ze,Qe,Ee.data);else if(T.isCompressedTexture)if(T.isCompressedArrayTexture){st&&Nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,nt,mt[0].width,mt[0].height,Ee.depth);for(let ae=0,pe=mt.length;ae<pe;ae++)if(Be=mt[ae],T.format!==fi)if(ze!==null)if(st){if(W)if(T.layerUpdates.size>0){const De=xm(Be.width,Be.height,T.format,T.type);for(const Ne of T.layerUpdates){const ot=Be.data.subarray(Ne*De/Be.data.BYTES_PER_ELEMENT,(Ne+1)*De/Be.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,Ne,Be.width,Be.height,1,ze,ot)}T.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Ee.depth,ze,Be.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ae,nt,Be.width,Be.height,Ee.depth,0,Be.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?W&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ae,0,0,0,Be.width,Be.height,Ee.depth,ze,Qe,Be.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ae,nt,Be.width,Be.height,Ee.depth,0,ze,Qe,Be.data)}else{st&&Nt&&t.texStorage2D(s.TEXTURE_2D,Ae,nt,mt[0].width,mt[0].height);for(let ae=0,pe=mt.length;ae<pe;ae++)Be=mt[ae],T.format!==fi?ze!==null?st?W&&t.compressedTexSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,ze,Be.data):t.compressedTexImage2D(s.TEXTURE_2D,ae,nt,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?W&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,Be.width,Be.height,ze,Qe,Be.data):t.texImage2D(s.TEXTURE_2D,ae,nt,Be.width,Be.height,0,ze,Qe,Be.data)}else if(T.isDataArrayTexture)if(st){if(Nt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,nt,Ee.width,Ee.height,Ee.depth),W)if(T.layerUpdates.size>0){const ae=xm(Ee.width,Ee.height,T.format,T.type);for(const pe of T.layerUpdates){const De=Ee.data.subarray(pe*ae/Ee.data.BYTES_PER_ELEMENT,(pe+1)*ae/Ee.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,pe,Ee.width,Ee.height,1,ze,Qe,De)}T.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,Ee.width,Ee.height,Ee.depth,ze,Qe,Ee.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,nt,Ee.width,Ee.height,Ee.depth,0,ze,Qe,Ee.data);else if(T.isData3DTexture)st?(Nt&&t.texStorage3D(s.TEXTURE_3D,Ae,nt,Ee.width,Ee.height,Ee.depth),W&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,Ee.width,Ee.height,Ee.depth,ze,Qe,Ee.data)):t.texImage3D(s.TEXTURE_3D,0,nt,Ee.width,Ee.height,Ee.depth,0,ze,Qe,Ee.data);else if(T.isFramebufferTexture){if(Nt)if(st)t.texStorage2D(s.TEXTURE_2D,Ae,nt,Ee.width,Ee.height);else{let ae=Ee.width,pe=Ee.height;for(let De=0;De<Ae;De++)t.texImage2D(s.TEXTURE_2D,De,nt,ae,pe,0,ze,Qe,null),ae>>=1,pe>>=1}}else if(mt.length>0){if(st&&Nt){const ae=Xe(mt[0]);t.texStorage2D(s.TEXTURE_2D,Ae,nt,ae.width,ae.height)}for(let ae=0,pe=mt.length;ae<pe;ae++)Be=mt[ae],st?W&&t.texSubImage2D(s.TEXTURE_2D,ae,0,0,ze,Qe,Be):t.texImage2D(s.TEXTURE_2D,ae,nt,ze,Qe,Be);T.generateMipmaps=!1}else if(st){if(Nt){const ae=Xe(Ee);t.texStorage2D(s.TEXTURE_2D,Ae,nt,ae.width,ae.height)}W&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ze,Qe,Ee)}else t.texImage2D(s.TEXTURE_2D,0,nt,ze,Qe,Ee);y(T)&&x(me),qe.__version=fe.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function he(L,T,J){if(T.image.length!==6)return;const me=Le(L,T),ge=T.source;t.bindTexture(s.TEXTURE_CUBE_MAP,L.__webglTexture,s.TEXTURE0+J);const fe=r.get(ge);if(ge.version!==fe.__version||me===!0){t.activeTexture(s.TEXTURE0+J);const qe=At.getPrimaries(At.workingColorSpace),be=T.colorSpace===wr?null:At.getPrimaries(T.colorSpace),ke=T.colorSpace===wr||qe===be?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,T.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,T.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,T.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke);const pt=T.isCompressedTexture||T.image[0].isCompressedTexture,Ee=T.image[0]&&T.image[0].isDataTexture,ze=[];for(let pe=0;pe<6;pe++)!pt&&!Ee?ze[pe]=E(T.image[pe],!0,a.maxCubemapSize):ze[pe]=Ee?T.image[pe].image:T.image[pe],ze[pe]=Rt(T,ze[pe]);const Qe=ze[0],nt=l.convert(T.format,T.colorSpace),Be=l.convert(T.type),mt=N(T.internalFormat,nt,Be,T.colorSpace),st=T.isVideoTexture!==!0,Nt=fe.__version===void 0||me===!0,W=ge.dataReady;let Ae=k(T,Qe);ie(s.TEXTURE_CUBE_MAP,T);let ae;if(pt){st&&Nt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,mt,Qe.width,Qe.height);for(let pe=0;pe<6;pe++){ae=ze[pe].mipmaps;for(let De=0;De<ae.length;De++){const Ne=ae[De];T.format!==fi?nt!==null?st?W&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Ne.width,Ne.height,nt,Ne.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,mt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):st?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,0,0,Ne.width,Ne.height,nt,Be,Ne.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De,mt,Ne.width,Ne.height,0,nt,Be,Ne.data)}}}else{if(ae=T.mipmaps,st&&Nt){ae.length>0&&Ae++;const pe=Xe(ze[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,mt,pe.width,pe.height)}for(let pe=0;pe<6;pe++)if(Ee){st?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,ze[pe].width,ze[pe].height,nt,Be,ze[pe].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,mt,ze[pe].width,ze[pe].height,0,nt,Be,ze[pe].data);for(let De=0;De<ae.length;De++){const ot=ae[De].image[pe].image;st?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,ot.width,ot.height,nt,Be,ot.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,mt,ot.width,ot.height,0,nt,Be,ot.data)}}else{st?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,0,0,nt,Be,ze[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0,mt,nt,Be,ze[pe]);for(let De=0;De<ae.length;De++){const Ne=ae[De];st?W&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,0,0,nt,Be,Ne.image[pe]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+pe,De+1,mt,nt,Be,Ne.image[pe])}}}y(T)&&x(s.TEXTURE_CUBE_MAP),fe.__version=ge.version,T.onUpdate&&T.onUpdate(T)}L.__version=T.version}function Se(L,T,J,me,ge,fe){const qe=l.convert(J.format,J.colorSpace),be=l.convert(J.type),ke=N(J.internalFormat,qe,be,J.colorSpace),pt=r.get(T),Ee=r.get(J);if(Ee.__renderTarget=T,!pt.__hasExternalTextures){const ze=Math.max(1,T.width>>fe),Qe=Math.max(1,T.height>>fe);ge===s.TEXTURE_3D||ge===s.TEXTURE_2D_ARRAY?t.texImage3D(ge,fe,ke,ze,Qe,T.depth,0,qe,be,null):t.texImage2D(ge,fe,ke,ze,Qe,0,qe,be,null)}t.bindFramebuffer(s.FRAMEBUFFER,L),dt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,me,ge,Ee.__webglTexture,0,ht(T)):(ge===s.TEXTURE_2D||ge>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,me,ge,Ee.__webglTexture,fe),t.bindFramebuffer(s.FRAMEBUFFER,null)}function xe(L,T,J){if(s.bindRenderbuffer(s.RENDERBUFFER,L),T.depthBuffer){const me=T.depthTexture,ge=me&&me.isDepthTexture?me.type:null,fe=R(T.stencilBuffer,ge),qe=T.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=ht(T);dt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,be,fe,T.width,T.height):J?s.renderbufferStorageMultisample(s.RENDERBUFFER,be,fe,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,fe,T.width,T.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,qe,s.RENDERBUFFER,L)}else{const me=T.textures;for(let ge=0;ge<me.length;ge++){const fe=me[ge],qe=l.convert(fe.format,fe.colorSpace),be=l.convert(fe.type),ke=N(fe.internalFormat,qe,be,fe.colorSpace),pt=ht(T);J&&dt(T)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,pt,ke,T.width,T.height):dt(T)?d.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pt,ke,T.width,T.height):s.renderbufferStorage(s.RENDERBUFFER,ke,T.width,T.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ye(L,T){if(T&&T.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,L),!(T.depthTexture&&T.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const me=r.get(T.depthTexture);me.__renderTarget=T,(!me.__webglTexture||T.depthTexture.image.width!==T.width||T.depthTexture.image.height!==T.height)&&(T.depthTexture.image.width=T.width,T.depthTexture.image.height=T.height,T.depthTexture.needsUpdate=!0),de(T.depthTexture,0);const ge=me.__webglTexture,fe=ht(T);if(T.depthTexture.format===Ws)dt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,ge,0);else if(T.depthTexture.format===Zs)dt(T)?d.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0,fe):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,ge,0);else throw new Error("Unknown depthTexture format")}function Fe(L){const T=r.get(L),J=L.isWebGLCubeRenderTarget===!0;if(T.__boundDepthTexture!==L.depthTexture){const me=L.depthTexture;if(T.__depthDisposeCallback&&T.__depthDisposeCallback(),me){const ge=()=>{delete T.__boundDepthTexture,delete T.__depthDisposeCallback,me.removeEventListener("dispose",ge)};me.addEventListener("dispose",ge),T.__depthDisposeCallback=ge}T.__boundDepthTexture=me}if(L.depthTexture&&!T.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");ye(T.__webglFramebuffer,L)}else if(J){T.__webglDepthbuffer=[];for(let me=0;me<6;me++)if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer[me]),T.__webglDepthbuffer[me]===void 0)T.__webglDepthbuffer[me]=s.createRenderbuffer(),xe(T.__webglDepthbuffer[me],L,!1);else{const ge=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,fe=T.__webglDepthbuffer[me];s.bindRenderbuffer(s.RENDERBUFFER,fe),s.framebufferRenderbuffer(s.FRAMEBUFFER,ge,s.RENDERBUFFER,fe)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,T.__webglFramebuffer),T.__webglDepthbuffer===void 0)T.__webglDepthbuffer=s.createRenderbuffer(),xe(T.__webglDepthbuffer,L,!1);else{const me=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ge=T.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ge),s.framebufferRenderbuffer(s.FRAMEBUFFER,me,s.RENDERBUFFER,ge)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ve(L,T,J){const me=r.get(L);T!==void 0&&Se(me.__webglFramebuffer,L,L.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),J!==void 0&&Fe(L)}function Pt(L){const T=L.texture,J=r.get(L),me=r.get(T);L.addEventListener("dispose",U);const ge=L.textures,fe=L.isWebGLCubeRenderTarget===!0,qe=ge.length>1;if(qe||(me.__webglTexture===void 0&&(me.__webglTexture=s.createTexture()),me.__version=T.version,u.memory.textures++),fe){J.__webglFramebuffer=[];for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer[be]=[];for(let ke=0;ke<T.mipmaps.length;ke++)J.__webglFramebuffer[be][ke]=s.createFramebuffer()}else J.__webglFramebuffer[be]=s.createFramebuffer()}else{if(T.mipmaps&&T.mipmaps.length>0){J.__webglFramebuffer=[];for(let be=0;be<T.mipmaps.length;be++)J.__webglFramebuffer[be]=s.createFramebuffer()}else J.__webglFramebuffer=s.createFramebuffer();if(qe)for(let be=0,ke=ge.length;be<ke;be++){const pt=r.get(ge[be]);pt.__webglTexture===void 0&&(pt.__webglTexture=s.createTexture(),u.memory.textures++)}if(L.samples>0&&dt(L)===!1){J.__webglMultisampledFramebuffer=s.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let be=0;be<ge.length;be++){const ke=ge[be];J.__webglColorRenderbuffer[be]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,J.__webglColorRenderbuffer[be]);const pt=l.convert(ke.format,ke.colorSpace),Ee=l.convert(ke.type),ze=N(ke.internalFormat,pt,Ee,ke.colorSpace,L.isXRRenderTarget===!0),Qe=ht(L);s.renderbufferStorageMultisample(s.RENDERBUFFER,Qe,ze,L.width,L.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+be,s.RENDERBUFFER,J.__webglColorRenderbuffer[be])}s.bindRenderbuffer(s.RENDERBUFFER,null),L.depthBuffer&&(J.__webglDepthRenderbuffer=s.createRenderbuffer(),xe(J.__webglDepthRenderbuffer,L,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(fe){t.bindTexture(s.TEXTURE_CUBE_MAP,me.__webglTexture),ie(s.TEXTURE_CUBE_MAP,T);for(let be=0;be<6;be++)if(T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Se(J.__webglFramebuffer[be][ke],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,ke);else Se(J.__webglFramebuffer[be],L,T,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);y(T)&&x(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(qe){for(let be=0,ke=ge.length;be<ke;be++){const pt=ge[be],Ee=r.get(pt);t.bindTexture(s.TEXTURE_2D,Ee.__webglTexture),ie(s.TEXTURE_2D,pt),Se(J.__webglFramebuffer,L,pt,s.COLOR_ATTACHMENT0+be,s.TEXTURE_2D,0),y(pt)&&x(s.TEXTURE_2D)}t.unbindTexture()}else{let be=s.TEXTURE_2D;if((L.isWebGL3DRenderTarget||L.isWebGLArrayRenderTarget)&&(be=L.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(be,me.__webglTexture),ie(be,T),T.mipmaps&&T.mipmaps.length>0)for(let ke=0;ke<T.mipmaps.length;ke++)Se(J.__webglFramebuffer[ke],L,T,s.COLOR_ATTACHMENT0,be,ke);else Se(J.__webglFramebuffer,L,T,s.COLOR_ATTACHMENT0,be,0);y(T)&&x(be),t.unbindTexture()}L.depthBuffer&&Fe(L)}function Ct(L){const T=L.textures;for(let J=0,me=T.length;J<me;J++){const ge=T[J];if(y(ge)){const fe=D(L),qe=r.get(ge).__webglTexture;t.bindTexture(fe,qe),x(fe),t.unbindTexture()}}}const at=[],z=[];function un(L){if(L.samples>0){if(dt(L)===!1){const T=L.textures,J=L.width,me=L.height;let ge=s.COLOR_BUFFER_BIT;const fe=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,qe=r.get(L),be=T.length>1;if(be)for(let ke=0;ke<T.length;ke++)t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,qe.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglFramebuffer);for(let ke=0;ke<T.length;ke++){if(L.resolveDepthBuffer&&(L.depthBuffer&&(ge|=s.DEPTH_BUFFER_BIT),L.stencilBuffer&&L.resolveStencilBuffer&&(ge|=s.STENCIL_BUFFER_BIT)),be){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,qe.__webglColorRenderbuffer[ke]);const pt=r.get(T[ke]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,pt,0)}s.blitFramebuffer(0,0,J,me,0,0,J,me,ge,s.NEAREST),h===!0&&(at.length=0,z.length=0,at.push(s.COLOR_ATTACHMENT0+ke),L.depthBuffer&&L.resolveDepthBuffer===!1&&(at.push(fe),z.push(fe),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,z)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),be)for(let ke=0;ke<T.length;ke++){t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.RENDERBUFFER,qe.__webglColorRenderbuffer[ke]);const pt=r.get(T[ke]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,qe.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ke,s.TEXTURE_2D,pt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,qe.__webglMultisampledFramebuffer)}else if(L.depthBuffer&&L.resolveDepthBuffer===!1&&h){const T=L.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[T])}}}function ht(L){return Math.min(a.maxSamples,L.samples)}function dt(L){const T=r.get(L);return L.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&T.__useRenderToTexture!==!1}function Ke(L){const T=u.render.frame;v.get(L)!==T&&(v.set(L,T),L.update())}function Rt(L,T){const J=L.colorSpace,me=L.format,ge=L.type;return L.isCompressedTexture===!0||L.isVideoTexture===!0||J!==Qs&&J!==wr&&(At.getTransfer(J)===Lt?(me!==fi||ge!==Yi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),T}function Xe(L){return typeof HTMLImageElement<"u"&&L instanceof HTMLImageElement?(p.width=L.naturalWidth||L.width,p.height=L.naturalHeight||L.height):typeof VideoFrame<"u"&&L instanceof VideoFrame?(p.width=L.displayWidth,p.height=L.displayHeight):(p.width=L.width,p.height=L.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=se,this.setTexture2D=de,this.setTexture2DArray=re,this.setTexture3D=le,this.setTextureCube=V,this.rebindTextures=Ve,this.setupRenderTarget=Pt,this.updateRenderTargetMipmap=Ct,this.updateMultisampleRenderTarget=un,this.setupDepthRenderbuffer=Fe,this.setupFrameBufferTexture=Se,this.useMultisampledRTT=dt}function V1(s,e){function t(r,a=wr){let l;const u=At.getTransfer(a);if(r===Yi)return s.UNSIGNED_BYTE;if(r===Qd)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Jd)return s.UNSIGNED_SHORT_5_5_5_1;if(r===ng)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===eg)return s.BYTE;if(r===tg)return s.SHORT;if(r===Xo)return s.UNSIGNED_SHORT;if(r===Zd)return s.INT;if(r===es)return s.UNSIGNED_INT;if(r===Vi)return s.FLOAT;if(r===ji)return s.HALF_FLOAT;if(r===ig)return s.ALPHA;if(r===rg)return s.RGB;if(r===fi)return s.RGBA;if(r===sg)return s.LUMINANCE;if(r===og)return s.LUMINANCE_ALPHA;if(r===Ws)return s.DEPTH_COMPONENT;if(r===Zs)return s.DEPTH_STENCIL;if(r===ag)return s.RED;if(r===ef)return s.RED_INTEGER;if(r===lg)return s.RG;if(r===tf)return s.RG_INTEGER;if(r===nf)return s.RGBA_INTEGER;if(r===Pl||r===Nl||r===Ll||r===Dl)if(u===Lt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Pl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Pl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Nl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Ll)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Dl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===_d||r===yd||r===Sd||r===Md)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===_d)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===yd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Sd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Md)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===wd||r===Ed||r===Td)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===wd||r===Ed)return u===Lt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===Td)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(r===bd||r===Ad||r===Cd||r===Rd||r===Pd||r===Nd||r===Ld||r===Dd||r===Id||r===Ud||r===Fd||r===kd||r===Od||r===zd)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===bd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Ad)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Cd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Rd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Pd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Nd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ld)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===Dd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Id)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ud)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Fd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===kd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Od)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===zd)return u===Lt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Il||r===Bd||r===Hd)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===Il)return u===Lt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Bd)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Hd)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===cg||r===Vd||r===Gd||r===Wd)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===Il)return l.COMPRESSED_RED_RGTC1_EXT;if(r===Vd)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Gd)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Wd)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Ks?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const G1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,W1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class j1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,r){if(this.texture===null){const a=new Bn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==r.depthNear||t.depthFar!==r.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new pn({vertexShader:G1,fragmentShader:W1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new cn(new Gl(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class X1 extends no{constructor(e,t){super();const r=this;let a=null,l=1,u=null,d="local-floor",h=1,p=null,v=null,g=null,_=null,S=null,M=null;const E=new j1,y=t.getContextAttributes();let x=null,D=null;const N=[],R=[],k=new ct;let O=null;const U=new Cn;U.viewport=new Dt;const j=new Cn;j.viewport=new Dt;const P=[U,j],C=new p_;let B=null,se=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ee){let he=N[ee];return he===void 0&&(he=new $u,N[ee]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ee){let he=N[ee];return he===void 0&&(he=new $u,N[ee]=he),he.getGripSpace()},this.getHand=function(ee){let he=N[ee];return he===void 0&&(he=new $u,N[ee]=he),he.getHandSpace()};function Q(ee){const he=R.indexOf(ee.inputSource);if(he===-1)return;const Se=N[he];Se!==void 0&&(Se.update(ee.inputSource,ee.frame,p||u),Se.dispatchEvent({type:ee.type,data:ee.inputSource}))}function ue(){a.removeEventListener("select",Q),a.removeEventListener("selectstart",Q),a.removeEventListener("selectend",Q),a.removeEventListener("squeeze",Q),a.removeEventListener("squeezestart",Q),a.removeEventListener("squeezeend",Q),a.removeEventListener("end",ue),a.removeEventListener("inputsourceschange",de);for(let ee=0;ee<N.length;ee++){const he=R[ee];he!==null&&(R[ee]=null,N[ee].disconnect(he))}B=null,se=null,E.reset(),e.setRenderTarget(x),S=null,_=null,g=null,a=null,D=null,Le.stop(),r.isPresenting=!1,e.setPixelRatio(O),e.setSize(k.width,k.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ee){l=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ee){d=ee,r.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ee){p=ee},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return g},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(ee){if(a=ee,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",Q),a.addEventListener("selectstart",Q),a.addEventListener("selectend",Q),a.addEventListener("squeeze",Q),a.addEventListener("squeezestart",Q),a.addEventListener("squeezeend",Q),a.addEventListener("end",ue),a.addEventListener("inputsourceschange",de),y.xrCompatible!==!0&&await t.makeXRCompatible(),O=e.getPixelRatio(),e.getSize(k),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let Se=null,xe=null,ye=null;y.depth&&(ye=y.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Se=y.stencil?Zs:Ws,xe=y.stencil?Ks:es);const Fe={colorFormat:t.RGBA8,depthFormat:ye,scaleFactor:l};g=new XRWebGLBinding(a,t),_=g.createProjectionLayer(Fe),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),D=new pi(_.textureWidth,_.textureHeight,{format:fi,type:Yi,depthTexture:new Tg(_.textureWidth,_.textureHeight,xe,void 0,void 0,void 0,void 0,void 0,void 0,Se),stencilBuffer:y.stencil,colorSpace:e.outputColorSpace,samples:y.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1})}else{const Se={antialias:y.antialias,alpha:!0,depth:y.depth,stencil:y.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,Se),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),D=new pi(S.framebufferWidth,S.framebufferHeight,{format:fi,type:Yi,colorSpace:e.outputColorSpace,stencilBuffer:y.stencil})}D.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await a.requestReferenceSpace(d),Le.setContext(a),Le.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return E.getDepthTexture()};function de(ee){for(let he=0;he<ee.removed.length;he++){const Se=ee.removed[he],xe=R.indexOf(Se);xe>=0&&(R[xe]=null,N[xe].disconnect(Se))}for(let he=0;he<ee.added.length;he++){const Se=ee.added[he];let xe=R.indexOf(Se);if(xe===-1){for(let Fe=0;Fe<N.length;Fe++)if(Fe>=R.length){R.push(Se),xe=Fe;break}else if(R[Fe]===null){R[Fe]=Se,xe=Fe;break}if(xe===-1)break}const ye=N[xe];ye&&ye.connect(Se)}}const re=new q,le=new q;function V(ee,he,Se){re.setFromMatrixPosition(he.matrixWorld),le.setFromMatrixPosition(Se.matrixWorld);const xe=re.distanceTo(le),ye=he.projectionMatrix.elements,Fe=Se.projectionMatrix.elements,Ve=ye[14]/(ye[10]-1),Pt=ye[14]/(ye[10]+1),Ct=(ye[9]+1)/ye[5],at=(ye[9]-1)/ye[5],z=(ye[8]-1)/ye[0],un=(Fe[8]+1)/Fe[0],ht=Ve*z,dt=Ve*un,Ke=xe/(-z+un),Rt=Ke*-z;if(he.matrixWorld.decompose(ee.position,ee.quaternion,ee.scale),ee.translateX(Rt),ee.translateZ(Ke),ee.matrixWorld.compose(ee.position,ee.quaternion,ee.scale),ee.matrixWorldInverse.copy(ee.matrixWorld).invert(),ye[10]===-1)ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const Xe=Ve+Ke,L=Pt+Ke,T=ht-Rt,J=dt+(xe-Rt),me=Ct*Pt/L*Xe,ge=at*Pt/L*Xe;ee.projectionMatrix.makePerspective(T,J,me,ge,Xe,L),ee.projectionMatrixInverse.copy(ee.projectionMatrix).invert()}}function ce(ee,he){he===null?ee.matrixWorld.copy(ee.matrix):ee.matrixWorld.multiplyMatrices(he.matrixWorld,ee.matrix),ee.matrixWorldInverse.copy(ee.matrixWorld).invert()}this.updateCamera=function(ee){if(a===null)return;let he=ee.near,Se=ee.far;E.texture!==null&&(E.depthNear>0&&(he=E.depthNear),E.depthFar>0&&(Se=E.depthFar)),C.near=j.near=U.near=he,C.far=j.far=U.far=Se,(B!==C.near||se!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),B=C.near,se=C.far),U.layers.mask=ee.layers.mask|2,j.layers.mask=ee.layers.mask|4,C.layers.mask=U.layers.mask|j.layers.mask;const xe=ee.parent,ye=C.cameras;ce(C,xe);for(let Fe=0;Fe<ye.length;Fe++)ce(ye[Fe],xe);ye.length===2?V(C,U,j):C.projectionMatrix.copy(U.projectionMatrix),oe(ee,C,xe)};function oe(ee,he,Se){Se===null?ee.matrix.copy(he.matrixWorld):(ee.matrix.copy(Se.matrixWorld),ee.matrix.invert(),ee.matrix.multiply(he.matrixWorld)),ee.matrix.decompose(ee.position,ee.quaternion,ee.scale),ee.updateMatrixWorld(!0),ee.projectionMatrix.copy(he.projectionMatrix),ee.projectionMatrixInverse.copy(he.projectionMatrixInverse),ee.isPerspectiveCamera&&(ee.fov=jd*2*Math.atan(1/ee.projectionMatrix.elements[5]),ee.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&S===null))return h},this.setFoveation=function(ee){h=ee,_!==null&&(_.fixedFoveation=ee),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=ee)},this.hasDepthSensing=function(){return E.texture!==null},this.getDepthSensingMesh=function(){return E.getMesh(C)};let F=null;function ie(ee,he){if(v=he.getViewerPose(p||u),M=he,v!==null){const Se=v.views;S!==null&&(e.setRenderTargetFramebuffer(D,S.framebuffer),e.setRenderTarget(D));let xe=!1;Se.length!==C.cameras.length&&(C.cameras.length=0,xe=!0);for(let Ve=0;Ve<Se.length;Ve++){const Pt=Se[Ve];let Ct=null;if(S!==null)Ct=S.getViewport(Pt);else{const z=g.getViewSubImage(_,Pt);Ct=z.viewport,Ve===0&&(e.setRenderTargetTextures(D,z.colorTexture,_.ignoreDepthValues?void 0:z.depthStencilTexture),e.setRenderTarget(D))}let at=P[Ve];at===void 0&&(at=new Cn,at.layers.enable(Ve),at.viewport=new Dt,P[Ve]=at),at.matrix.fromArray(Pt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(Pt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(Ct.x,Ct.y,Ct.width,Ct.height),Ve===0&&(C.matrix.copy(at.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),xe===!0&&C.cameras.push(at)}const ye=a.enabledFeatures;if(ye&&ye.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&g){const Ve=g.getDepthInformation(Se[0]);Ve&&Ve.isValid&&Ve.texture&&E.init(e,Ve,a.renderState)}}for(let Se=0;Se<N.length;Se++){const xe=R[Se],ye=N[Se];xe!==null&&ye!==void 0&&ye.update(xe,he,p||u)}F&&F(ee,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),M=null}const Le=new Rg;Le.setAnimationLoop(ie),this.setAnimationLoop=function(ee){F=ee},this.dispose=function(){}}}const jr=new mi,Y1=new Ht;function q1(s,e){function t(y,x){y.matrixAutoUpdate===!0&&y.updateMatrix(),x.value.copy(y.matrix)}function r(y,x){x.color.getRGB(y.fogColor.value,yg(s)),x.isFog?(y.fogNear.value=x.near,y.fogFar.value=x.far):x.isFogExp2&&(y.fogDensity.value=x.density)}function a(y,x,D,N,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(y,x):x.isMeshToonMaterial?(l(y,x),g(y,x)):x.isMeshPhongMaterial?(l(y,x),v(y,x)):x.isMeshStandardMaterial?(l(y,x),_(y,x),x.isMeshPhysicalMaterial&&S(y,x,R)):x.isMeshMatcapMaterial?(l(y,x),M(y,x)):x.isMeshDepthMaterial?l(y,x):x.isMeshDistanceMaterial?(l(y,x),E(y,x)):x.isMeshNormalMaterial?l(y,x):x.isLineBasicMaterial?(u(y,x),x.isLineDashedMaterial&&d(y,x)):x.isPointsMaterial?h(y,x,D,N):x.isSpriteMaterial?p(y,x):x.isShadowMaterial?(y.color.value.copy(x.color),y.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(y,x){y.opacity.value=x.opacity,x.color&&y.diffuse.value.copy(x.color),x.emissive&&y.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.bumpMap&&(y.bumpMap.value=x.bumpMap,t(x.bumpMap,y.bumpMapTransform),y.bumpScale.value=x.bumpScale,x.side===zn&&(y.bumpScale.value*=-1)),x.normalMap&&(y.normalMap.value=x.normalMap,t(x.normalMap,y.normalMapTransform),y.normalScale.value.copy(x.normalScale),x.side===zn&&y.normalScale.value.negate()),x.displacementMap&&(y.displacementMap.value=x.displacementMap,t(x.displacementMap,y.displacementMapTransform),y.displacementScale.value=x.displacementScale,y.displacementBias.value=x.displacementBias),x.emissiveMap&&(y.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,y.emissiveMapTransform)),x.specularMap&&(y.specularMap.value=x.specularMap,t(x.specularMap,y.specularMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest);const D=e.get(x),N=D.envMap,R=D.envMapRotation;N&&(y.envMap.value=N,jr.copy(R),jr.x*=-1,jr.y*=-1,jr.z*=-1,N.isCubeTexture&&N.isRenderTargetTexture===!1&&(jr.y*=-1,jr.z*=-1),y.envMapRotation.value.setFromMatrix4(Y1.makeRotationFromEuler(jr)),y.flipEnvMap.value=N.isCubeTexture&&N.isRenderTargetTexture===!1?-1:1,y.reflectivity.value=x.reflectivity,y.ior.value=x.ior,y.refractionRatio.value=x.refractionRatio),x.lightMap&&(y.lightMap.value=x.lightMap,y.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,y.lightMapTransform)),x.aoMap&&(y.aoMap.value=x.aoMap,y.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,y.aoMapTransform))}function u(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform))}function d(y,x){y.dashSize.value=x.dashSize,y.totalSize.value=x.dashSize+x.gapSize,y.scale.value=x.scale}function h(y,x,D,N){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.size.value=x.size*D,y.scale.value=N*.5,x.map&&(y.map.value=x.map,t(x.map,y.uvTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function p(y,x){y.diffuse.value.copy(x.color),y.opacity.value=x.opacity,y.rotation.value=x.rotation,x.map&&(y.map.value=x.map,t(x.map,y.mapTransform)),x.alphaMap&&(y.alphaMap.value=x.alphaMap,t(x.alphaMap,y.alphaMapTransform)),x.alphaTest>0&&(y.alphaTest.value=x.alphaTest)}function v(y,x){y.specular.value.copy(x.specular),y.shininess.value=Math.max(x.shininess,1e-4)}function g(y,x){x.gradientMap&&(y.gradientMap.value=x.gradientMap)}function _(y,x){y.metalness.value=x.metalness,x.metalnessMap&&(y.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,y.metalnessMapTransform)),y.roughness.value=x.roughness,x.roughnessMap&&(y.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,y.roughnessMapTransform)),x.envMap&&(y.envMapIntensity.value=x.envMapIntensity)}function S(y,x,D){y.ior.value=x.ior,x.sheen>0&&(y.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),y.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(y.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,y.sheenColorMapTransform)),x.sheenRoughnessMap&&(y.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,y.sheenRoughnessMapTransform))),x.clearcoat>0&&(y.clearcoat.value=x.clearcoat,y.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(y.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,y.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(y.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===zn&&y.clearcoatNormalScale.value.negate())),x.dispersion>0&&(y.dispersion.value=x.dispersion),x.iridescence>0&&(y.iridescence.value=x.iridescence,y.iridescenceIOR.value=x.iridescenceIOR,y.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(y.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,y.iridescenceMapTransform)),x.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),x.transmission>0&&(y.transmission.value=x.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),x.transmissionMap&&(y.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,y.transmissionMapTransform)),y.thickness.value=x.thickness,x.thicknessMap&&(y.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=x.attenuationDistance,y.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(y.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(y.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=x.specularIntensity,y.specularColor.value.copy(x.specularColor),x.specularColorMap&&(y.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,y.specularColorMapTransform)),x.specularIntensityMap&&(y.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,y.specularIntensityMapTransform))}function M(y,x){x.matcap&&(y.matcap.value=x.matcap)}function E(y,x){const D=e.get(x).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function $1(s,e,t,r){let a={},l={},u=[];const d=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(D,N){const R=N.program;r.uniformBlockBinding(D,R)}function p(D,N){let R=a[D.id];R===void 0&&(M(D),R=v(D),a[D.id]=R,D.addEventListener("dispose",y));const k=N.program;r.updateUBOMapping(D,k);const O=e.render.frame;l[D.id]!==O&&(_(D),l[D.id]=O)}function v(D){const N=g();D.__bindingPointIndex=N;const R=s.createBuffer(),k=D.__size,O=D.usage;return s.bindBuffer(s.UNIFORM_BUFFER,R),s.bufferData(s.UNIFORM_BUFFER,k,O),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,N,R),R}function g(){for(let D=0;D<d;D++)if(u.indexOf(D)===-1)return u.push(D),D;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(D){const N=a[D.id],R=D.uniforms,k=D.__cache;s.bindBuffer(s.UNIFORM_BUFFER,N);for(let O=0,U=R.length;O<U;O++){const j=Array.isArray(R[O])?R[O]:[R[O]];for(let P=0,C=j.length;P<C;P++){const B=j[P];if(S(B,O,P,k)===!0){const se=B.__offset,Q=Array.isArray(B.value)?B.value:[B.value];let ue=0;for(let de=0;de<Q.length;de++){const re=Q[de],le=E(re);typeof re=="number"||typeof re=="boolean"?(B.__data[0]=re,s.bufferSubData(s.UNIFORM_BUFFER,se+ue,B.__data)):re.isMatrix3?(B.__data[0]=re.elements[0],B.__data[1]=re.elements[1],B.__data[2]=re.elements[2],B.__data[3]=0,B.__data[4]=re.elements[3],B.__data[5]=re.elements[4],B.__data[6]=re.elements[5],B.__data[7]=0,B.__data[8]=re.elements[6],B.__data[9]=re.elements[7],B.__data[10]=re.elements[8],B.__data[11]=0):(re.toArray(B.__data,ue),ue+=le.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,se,B.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function S(D,N,R,k){const O=D.value,U=N+"_"+R;if(k[U]===void 0)return typeof O=="number"||typeof O=="boolean"?k[U]=O:k[U]=O.clone(),!0;{const j=k[U];if(typeof O=="number"||typeof O=="boolean"){if(j!==O)return k[U]=O,!0}else if(j.equals(O)===!1)return j.copy(O),!0}return!1}function M(D){const N=D.uniforms;let R=0;const k=16;for(let U=0,j=N.length;U<j;U++){const P=Array.isArray(N[U])?N[U]:[N[U]];for(let C=0,B=P.length;C<B;C++){const se=P[C],Q=Array.isArray(se.value)?se.value:[se.value];for(let ue=0,de=Q.length;ue<de;ue++){const re=Q[ue],le=E(re),V=R%k,ce=V%le.boundary,oe=V+ce;R+=ce,oe!==0&&k-oe<le.storage&&(R+=k-oe),se.__data=new Float32Array(le.storage/Float32Array.BYTES_PER_ELEMENT),se.__offset=R,R+=le.storage}}}const O=R%k;return O>0&&(R+=k-O),D.__size=R,D.__cache={},this}function E(D){const N={boundary:0,storage:0};return typeof D=="number"||typeof D=="boolean"?(N.boundary=4,N.storage=4):D.isVector2?(N.boundary=8,N.storage=8):D.isVector3||D.isColor?(N.boundary=16,N.storage=12):D.isVector4?(N.boundary=16,N.storage=16):D.isMatrix3?(N.boundary=48,N.storage=48):D.isMatrix4?(N.boundary=64,N.storage=64):D.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",D),N}function y(D){const N=D.target;N.removeEventListener("dispose",y);const R=u.indexOf(N.__bindingPointIndex);u.splice(R,1),s.deleteBuffer(a[N.id]),delete a[N.id],delete l[N.id]}function x(){for(const D in a)s.deleteBuffer(a[D]);u=[],a={},l={}}return{bind:h,update:p,dispose:x}}class af{constructor(e={}){const{canvas:t=Dx(),context:r=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:g=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=r.getContextAttributes().alpha}else S=u;const M=new Uint32Array(4),E=new Int32Array(4);let y=null,x=null;const D=[],N=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=ti,this.toneMapping=Er,this.toneMappingExposure=1;const R=this;let k=!1,O=0,U=0,j=null,P=-1,C=null;const B=new Dt,se=new Dt;let Q=null;const ue=new vt(0);let de=0,re=t.width,le=t.height,V=1,ce=null,oe=null;const F=new Dt(0,0,re,le),ie=new Dt(0,0,re,le);let Le=!1;const ee=new sf;let he=!1,Se=!1;this.transmissionResolutionScale=1;const xe=new Ht,ye=new Ht,Fe=new q,Ve=new Dt,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ct=!1;function at(){return j===null?V:1}let z=r;function un(A,X){return t.getContext(A,X)}try{const A={alpha:!0,depth:a,stencil:l,antialias:d,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Kd}`),t.addEventListener("webglcontextlost",pe,!1),t.addEventListener("webglcontextrestored",De,!1),t.addEventListener("webglcontextcreationerror",Ne,!1),z===null){const X="webgl2";if(z=un(X,A),z===null)throw un(X)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ht,dt,Ke,Rt,Xe,L,T,J,me,ge,fe,qe,be,ke,pt,Ee,ze,Qe,nt,Be,mt,st,Nt,W;function Ae(){ht=new oM(z),ht.init(),st=new V1(z,ht),dt=new eM(z,ht,e,st),Ke=new B1(z,ht),dt.reverseDepthBuffer&&_&&Ke.buffers.depth.setReversed(!0),Rt=new cM(z),Xe=new A1,L=new H1(z,ht,Ke,Xe,dt,st,Rt),T=new nM(R),J=new sM(R),me=new g_(z),Nt=new QS(z,me),ge=new aM(z,me,Rt,Nt),fe=new dM(z,ge,me,Rt),nt=new uM(z,dt,L),Ee=new tM(Xe),qe=new b1(R,T,J,ht,dt,Nt,Ee),be=new q1(R,Xe),ke=new R1,pt=new U1(ht),Qe=new ZS(R,T,J,Ke,fe,S,h),ze=new O1(R,fe,dt),W=new $1(z,Rt,dt,Ke),Be=new JS(z,ht,Rt),mt=new lM(z,ht,Rt),Rt.programs=qe.programs,R.capabilities=dt,R.extensions=ht,R.properties=Xe,R.renderLists=ke,R.shadowMap=ze,R.state=Ke,R.info=Rt}Ae();const ae=new X1(R,z);this.xr=ae,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const A=ht.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ht.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(A){A!==void 0&&(V=A,this.setSize(re,le,!1))},this.getSize=function(A){return A.set(re,le)},this.setSize=function(A,X,te=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}re=A,le=X,t.width=Math.floor(A*V),t.height=Math.floor(X*V),te===!0&&(t.style.width=A+"px",t.style.height=X+"px"),this.setViewport(0,0,A,X)},this.getDrawingBufferSize=function(A){return A.set(re*V,le*V).floor()},this.setDrawingBufferSize=function(A,X,te){re=A,le=X,V=te,t.width=Math.floor(A*te),t.height=Math.floor(X*te),this.setViewport(0,0,A,X)},this.getCurrentViewport=function(A){return A.copy(B)},this.getViewport=function(A){return A.copy(F)},this.setViewport=function(A,X,te,K){A.isVector4?F.set(A.x,A.y,A.z,A.w):F.set(A,X,te,K),Ke.viewport(B.copy(F).multiplyScalar(V).round())},this.getScissor=function(A){return A.copy(ie)},this.setScissor=function(A,X,te,K){A.isVector4?ie.set(A.x,A.y,A.z,A.w):ie.set(A,X,te,K),Ke.scissor(se.copy(ie).multiplyScalar(V).round())},this.getScissorTest=function(){return Le},this.setScissorTest=function(A){Ke.setScissorTest(Le=A)},this.setOpaqueSort=function(A){ce=A},this.setTransparentSort=function(A){oe=A},this.getClearColor=function(A){return A.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(A=!0,X=!0,te=!0){let K=0;if(A){let Y=!1;if(j!==null){const we=j.texture.format;Y=we===nf||we===tf||we===ef}if(Y){const we=j.texture.type,Ce=we===Yi||we===es||we===Xo||we===Ks||we===Qd||we===Jd,Ie=Qe.getClearColor(),He=Qe.getClearAlpha(),it=Ie.r,tt=Ie.g,We=Ie.b;Ce?(M[0]=it,M[1]=tt,M[2]=We,M[3]=He,z.clearBufferuiv(z.COLOR,0,M)):(E[0]=it,E[1]=tt,E[2]=We,E[3]=He,z.clearBufferiv(z.COLOR,0,E))}else K|=z.COLOR_BUFFER_BIT}X&&(K|=z.DEPTH_BUFFER_BIT),te&&(K|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),z.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",pe,!1),t.removeEventListener("webglcontextrestored",De,!1),t.removeEventListener("webglcontextcreationerror",Ne,!1),Qe.dispose(),ke.dispose(),pt.dispose(),Xe.dispose(),T.dispose(),J.dispose(),fe.dispose(),Nt.dispose(),W.dispose(),qe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",ns),ae.removeEventListener("sessionend",qi),Ti.stop()};function pe(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),k=!0}function De(){console.log("THREE.WebGLRenderer: Context Restored."),k=!1;const A=Rt.autoReset,X=ze.enabled,te=ze.autoUpdate,K=ze.needsUpdate,Y=ze.type;Ae(),Rt.autoReset=A,ze.enabled=X,ze.autoUpdate=te,ze.needsUpdate=K,ze.type=Y}function Ne(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function ot(A){const X=A.target;X.removeEventListener("dispose",ot),Ft(X)}function Ft(A){Zt(A),Xe.remove(A)}function Zt(A){const X=Xe.get(A).programs;X!==void 0&&(X.forEach(function(te){qe.releaseProgram(te)}),A.isShaderMaterial&&qe.releaseShaderCache(A))}this.renderBufferDirect=function(A,X,te,K,Y,we){X===null&&(X=Pt);const Ce=Y.isMesh&&Y.matrixWorld.determinant()<0,Ie=Jo(A,X,te,K,Y);Ke.setMaterial(K,Ce);let He=te.index,it=1;if(K.wireframe===!0){if(He=ge.getWireframeAttribute(te),He===void 0)return;it=2}const tt=te.drawRange,We=te.attributes.position;let _t=tt.start*it,lt=(tt.start+tt.count)*it;we!==null&&(_t=Math.max(_t,we.start*it),lt=Math.min(lt,(we.start+we.count)*it)),He!==null?(_t=Math.max(_t,0),lt=Math.min(lt,He.count)):We!=null&&(_t=Math.max(_t,0),lt=Math.min(lt,We.count));const Wt=lt-_t;if(Wt<0||Wt===1/0)return;Nt.setup(Y,K,Ie,te,He);let zt,St=Be;if(He!==null&&(zt=me.get(He),St=mt,St.setIndex(zt)),Y.isMesh)K.wireframe===!0?(Ke.setLineWidth(K.wireframeLinewidth*at()),St.setMode(z.LINES)):St.setMode(z.TRIANGLES);else if(Y.isLine){let Ze=K.linewidth;Ze===void 0&&(Ze=1),Ke.setLineWidth(Ze*at()),Y.isLineSegments?St.setMode(z.LINES):Y.isLineLoop?St.setMode(z.LINE_LOOP):St.setMode(z.LINE_STRIP)}else Y.isPoints?St.setMode(z.POINTS):Y.isSprite&&St.setMode(z.TRIANGLES);if(Y.isBatchedMesh)if(Y._multiDrawInstances!==null)St.renderMultiDrawInstances(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount,Y._multiDrawInstances);else if(ht.get("WEBGL_multi_draw"))St.renderMultiDraw(Y._multiDrawStarts,Y._multiDrawCounts,Y._multiDrawCount);else{const Ze=Y._multiDrawStarts,jt=Y._multiDrawCounts,xt=Y._multiDrawCount,mn=He?me.get(He).bytesPerElement:1,Ki=Xe.get(K).currentProgram.getUniforms();for(let En=0;En<xt;En++)Ki.setValue(z,"_gl_DrawID",En),St.render(Ze[En]/mn,jt[En])}else if(Y.isInstancedMesh)St.renderInstances(_t,Wt,Y.count);else if(te.isInstancedBufferGeometry){const Ze=te._maxInstanceCount!==void 0?te._maxInstanceCount:1/0,jt=Math.min(te.instanceCount,Ze);St.renderInstances(_t,Wt,jt)}else St.render(_t,Wt)};function wt(A,X,te){A.transparent===!0&&A.side===wi&&A.forceSinglePass===!1?(A.side=zn,A.needsUpdate=!0,is(A,X,te),A.side=Tr,A.needsUpdate=!0,is(A,X,te),A.side=wi):is(A,X,te)}this.compile=function(A,X,te=null){te===null&&(te=A),x=pt.get(te),x.init(X),N.push(x),te.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),A!==te&&A.traverseVisible(function(Y){Y.isLight&&Y.layers.test(X.layers)&&(x.pushLight(Y),Y.castShadow&&x.pushShadow(Y))}),x.setupLights();const K=new Set;return A.traverse(function(Y){if(!(Y.isMesh||Y.isPoints||Y.isLine||Y.isSprite))return;const we=Y.material;if(we)if(Array.isArray(we))for(let Ce=0;Ce<we.length;Ce++){const Ie=we[Ce];wt(Ie,te,Y),K.add(Ie)}else wt(we,te,Y),K.add(we)}),N.pop(),x=null,K},this.compileAsync=function(A,X,te=null){const K=this.compile(A,X,te);return new Promise(Y=>{function we(){if(K.forEach(function(Ce){Xe.get(Ce).currentProgram.isReady()&&K.delete(Ce)}),K.size===0){Y(A);return}setTimeout(we,10)}ht.get("KHR_parallel_shader_compile")!==null?we():setTimeout(we,10)})};let Nn=null;function wn(A){Nn&&Nn(A)}function ns(){Ti.stop()}function qi(){Ti.start()}const Ti=new Rg;Ti.setAnimationLoop(wn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(A){Nn=A,ae.setAnimationLoop(A),A===null?Ti.stop():Ti.start()},ae.addEventListener("sessionstart",ns),ae.addEventListener("sessionend",qi),this.render=function(A,X){if(X!==void 0&&X.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(X),X=ae.getCamera()),A.isScene===!0&&A.onBeforeRender(R,A,X,j),x=pt.get(A,N.length),x.init(X),N.push(x),ye.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),ee.setFromProjectionMatrix(ye),Se=this.localClippingEnabled,he=Ee.init(this.clippingPlanes,Se),y=ke.get(A,D.length),y.init(),D.push(y),ae.enabled===!0&&ae.isPresenting===!0){const we=R.xr.getDepthSensingMesh();we!==null&&bi(we,X,-1/0,R.sortObjects)}bi(A,X,0,R.sortObjects),y.finish(),R.sortObjects===!0&&y.sort(ce,oe),Ct=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,Ct&&Qe.addToRenderList(y,A),this.info.render.frame++,he===!0&&Ee.beginShadows();const te=x.state.shadowsArray;ze.render(te,A,X),he===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=y.opaque,Y=y.transmissive;if(x.setupLights(),X.isArrayCamera){const we=X.cameras;if(Y.length>0)for(let Ce=0,Ie=we.length;Ce<Ie;Ce++){const He=we[Ce];Ar(K,Y,A,He)}Ct&&Qe.render(A);for(let Ce=0,Ie=we.length;Ce<Ie;Ce++){const He=we[Ce];br(y,A,He,He.viewport)}}else Y.length>0&&Ar(K,Y,A,X),Ct&&Qe.render(A),br(y,A,X);j!==null&&U===0&&(L.updateMultisampleRenderTarget(j),L.updateRenderTargetMipmap(j)),A.isScene===!0&&A.onAfterRender(R,A,X),Nt.resetDefaultState(),P=-1,C=null,N.pop(),N.length>0?(x=N[N.length-1],he===!0&&Ee.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,D.pop(),D.length>0?y=D[D.length-1]:y=null};function bi(A,X,te,K){if(A.visible===!1)return;if(A.layers.test(X.layers)){if(A.isGroup)te=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(X);else if(A.isLight)x.pushLight(A),A.castShadow&&x.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ee.intersectsSprite(A)){K&&Ve.setFromMatrixPosition(A.matrixWorld).applyMatrix4(ye);const Ce=fe.update(A),Ie=A.material;Ie.visible&&y.push(A,Ce,Ie,te,Ve.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ee.intersectsObject(A))){const Ce=fe.update(A),Ie=A.material;if(K&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Ve.copy(A.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),Ve.copy(Ce.boundingSphere.center)),Ve.applyMatrix4(A.matrixWorld).applyMatrix4(ye)),Array.isArray(Ie)){const He=Ce.groups;for(let it=0,tt=He.length;it<tt;it++){const We=He[it],_t=Ie[We.materialIndex];_t&&_t.visible&&y.push(A,Ce,_t,te,Ve.z,We)}}else Ie.visible&&y.push(A,Ce,Ie,te,Ve.z,null)}}const we=A.children;for(let Ce=0,Ie=we.length;Ce<Ie;Ce++)bi(we[Ce],X,te,K)}function br(A,X,te,K){const Y=A.opaque,we=A.transmissive,Ce=A.transparent;x.setupLightsView(te),he===!0&&Ee.setGlobalState(R.clippingPlanes,te),K&&Ke.viewport(B.copy(K)),Y.length>0&&$i(Y,X,te),we.length>0&&$i(we,X,te),Ce.length>0&&$i(Ce,X,te),Ke.buffers.depth.setTest(!0),Ke.buffers.depth.setMask(!0),Ke.buffers.color.setMask(!0),Ke.setPolygonOffset(!1)}function Ar(A,X,te,K){if((te.isScene===!0?te.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[K.id]===void 0&&(x.state.transmissionRenderTarget[K.id]=new pi(1,1,{generateMipmaps:!0,type:ht.has("EXT_color_buffer_half_float")||ht.has("EXT_color_buffer_float")?ji:Yi,minFilter:Zr,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:At.workingColorSpace}));const we=x.state.transmissionRenderTarget[K.id],Ce=K.viewport||B;we.setSize(Ce.z*R.transmissionResolutionScale,Ce.w*R.transmissionResolutionScale);const Ie=R.getRenderTarget();R.setRenderTarget(we),R.getClearColor(ue),de=R.getClearAlpha(),de<1&&R.setClearColor(16777215,.5),R.clear(),Ct&&Qe.render(te);const He=R.toneMapping;R.toneMapping=Er;const it=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),x.setupLightsView(K),he===!0&&Ee.setGlobalState(R.clippingPlanes,K),$i(A,te,K),L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we),ht.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let We=0,_t=X.length;We<_t;We++){const lt=X[We],Wt=lt.object,zt=lt.geometry,St=lt.material,Ze=lt.group;if(St.side===wi&&Wt.layers.test(K.layers)){const jt=St.side;St.side=zn,St.needsUpdate=!0,Zo(Wt,te,K,zt,St,Ze),St.side=jt,St.needsUpdate=!0,tt=!0}}tt===!0&&(L.updateMultisampleRenderTarget(we),L.updateRenderTargetMipmap(we))}R.setRenderTarget(Ie),R.setClearColor(ue,de),it!==void 0&&(K.viewport=it),R.toneMapping=He}function $i(A,X,te){const K=X.isScene===!0?X.overrideMaterial:null;for(let Y=0,we=A.length;Y<we;Y++){const Ce=A[Y],Ie=Ce.object,He=Ce.geometry,it=K===null?Ce.material:K,tt=Ce.group;Ie.layers.test(te.layers)&&Zo(Ie,X,te,He,it,tt)}}function Zo(A,X,te,K,Y,we){A.onBeforeRender(R,X,te,K,Y,we),A.modelViewMatrix.multiplyMatrices(te.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),Y.onBeforeRender(R,X,te,K,A,we),Y.transparent===!0&&Y.side===wi&&Y.forceSinglePass===!1?(Y.side=zn,Y.needsUpdate=!0,R.renderBufferDirect(te,X,K,Y,A,we),Y.side=Tr,Y.needsUpdate=!0,R.renderBufferDirect(te,X,K,Y,A,we),Y.side=wi):R.renderBufferDirect(te,X,K,Y,A,we),A.onAfterRender(R,X,te,K,Y,we)}function is(A,X,te){X.isScene!==!0&&(X=Pt);const K=Xe.get(A),Y=x.state.lights,we=x.state.shadowsArray,Ce=Y.state.version,Ie=qe.getParameters(A,Y.state,we,X,te),He=qe.getProgramCacheKey(Ie);let it=K.programs;K.environment=A.isMeshStandardMaterial?X.environment:null,K.fog=X.fog,K.envMap=(A.isMeshStandardMaterial?J:T).get(A.envMap||K.environment),K.envMapRotation=K.environment!==null&&A.envMap===null?X.environmentRotation:A.envMapRotation,it===void 0&&(A.addEventListener("dispose",ot),it=new Map,K.programs=it);let tt=it.get(He);if(tt!==void 0){if(K.currentProgram===tt&&K.lightsStateVersion===Ce)return gi(A,Ie),tt}else Ie.uniforms=qe.getUniforms(A),A.onBeforeCompile(Ie,R),tt=qe.acquireProgram(Ie,He),it.set(He,tt),K.uniforms=Ie.uniforms;const We=K.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(We.clippingPlanes=Ee.uniform),gi(A,Ie),K.needsLights=jl(A),K.lightsStateVersion=Ce,K.needsLights&&(We.ambientLightColor.value=Y.state.ambient,We.lightProbe.value=Y.state.probe,We.directionalLights.value=Y.state.directional,We.directionalLightShadows.value=Y.state.directionalShadow,We.spotLights.value=Y.state.spot,We.spotLightShadows.value=Y.state.spotShadow,We.rectAreaLights.value=Y.state.rectArea,We.ltc_1.value=Y.state.rectAreaLTC1,We.ltc_2.value=Y.state.rectAreaLTC2,We.pointLights.value=Y.state.point,We.pointLightShadows.value=Y.state.pointShadow,We.hemisphereLights.value=Y.state.hemi,We.directionalShadowMap.value=Y.state.directionalShadowMap,We.directionalShadowMatrix.value=Y.state.directionalShadowMatrix,We.spotShadowMap.value=Y.state.spotShadowMap,We.spotLightMatrix.value=Y.state.spotLightMatrix,We.spotLightMap.value=Y.state.spotLightMap,We.pointShadowMap.value=Y.state.pointShadowMap,We.pointShadowMatrix.value=Y.state.pointShadowMatrix),K.currentProgram=tt,K.uniformsList=null,tt}function Qo(A){if(A.uniformsList===null){const X=A.currentProgram.getUniforms();A.uniformsList=Ul.seqWithValue(X.seq,A.uniforms)}return A.uniformsList}function gi(A,X){const te=Xe.get(A);te.outputColorSpace=X.outputColorSpace,te.batching=X.batching,te.batchingColor=X.batchingColor,te.instancing=X.instancing,te.instancingColor=X.instancingColor,te.instancingMorph=X.instancingMorph,te.skinning=X.skinning,te.morphTargets=X.morphTargets,te.morphNormals=X.morphNormals,te.morphColors=X.morphColors,te.morphTargetsCount=X.morphTargetsCount,te.numClippingPlanes=X.numClippingPlanes,te.numIntersection=X.numClipIntersection,te.vertexAlphas=X.vertexAlphas,te.vertexTangents=X.vertexTangents,te.toneMapping=X.toneMapping}function Jo(A,X,te,K,Y){X.isScene!==!0&&(X=Pt),L.resetTextureUnits();const we=X.fog,Ce=K.isMeshStandardMaterial?X.environment:null,Ie=j===null?R.outputColorSpace:j.isXRRenderTarget===!0?j.texture.colorSpace:Qs,He=(K.isMeshStandardMaterial?J:T).get(K.envMap||Ce),it=K.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,tt=!!te.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),We=!!te.morphAttributes.position,_t=!!te.morphAttributes.normal,lt=!!te.morphAttributes.color;let Wt=Er;K.toneMapped&&(j===null||j.isXRRenderTarget===!0)&&(Wt=R.toneMapping);const zt=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,St=zt!==void 0?zt.length:0,Ze=Xe.get(K),jt=x.state.lights;if(he===!0&&(Se===!0||A!==C)){const dn=A===C&&K.id===P;Ee.setState(K,A,dn)}let xt=!1;K.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==jt.state.version||Ze.outputColorSpace!==Ie||Y.isBatchedMesh&&Ze.batching===!1||!Y.isBatchedMesh&&Ze.batching===!0||Y.isBatchedMesh&&Ze.batchingColor===!0&&Y.colorTexture===null||Y.isBatchedMesh&&Ze.batchingColor===!1&&Y.colorTexture!==null||Y.isInstancedMesh&&Ze.instancing===!1||!Y.isInstancedMesh&&Ze.instancing===!0||Y.isSkinnedMesh&&Ze.skinning===!1||!Y.isSkinnedMesh&&Ze.skinning===!0||Y.isInstancedMesh&&Ze.instancingColor===!0&&Y.instanceColor===null||Y.isInstancedMesh&&Ze.instancingColor===!1&&Y.instanceColor!==null||Y.isInstancedMesh&&Ze.instancingMorph===!0&&Y.morphTexture===null||Y.isInstancedMesh&&Ze.instancingMorph===!1&&Y.morphTexture!==null||Ze.envMap!==He||K.fog===!0&&Ze.fog!==we||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==Ee.numPlanes||Ze.numIntersection!==Ee.numIntersection)||Ze.vertexAlphas!==it||Ze.vertexTangents!==tt||Ze.morphTargets!==We||Ze.morphNormals!==_t||Ze.morphColors!==lt||Ze.toneMapping!==Wt||Ze.morphTargetsCount!==St)&&(xt=!0):(xt=!0,Ze.__version=K.version);let mn=Ze.currentProgram;xt===!0&&(mn=is(K,X,Y));let Ki=!1,En=!1,Ai=!1;const It=mn.getUniforms(),gn=Ze.uniforms;if(Ke.useProgram(mn.program)&&(Ki=!0,En=!0,Ai=!0),K.id!==P&&(P=K.id,En=!0),Ki||C!==A){Ke.buffers.depth.getReversed()?(xe.copy(A.projectionMatrix),Ux(xe),Fx(xe),It.setValue(z,"projectionMatrix",xe)):It.setValue(z,"projectionMatrix",A.projectionMatrix),It.setValue(z,"viewMatrix",A.matrixWorldInverse);const rn=It.map.cameraPosition;rn!==void 0&&rn.setValue(z,Fe.setFromMatrixPosition(A.matrixWorld)),dt.logarithmicDepthBuffer&&It.setValue(z,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&It.setValue(z,"isOrthographic",A.isOrthographicCamera===!0),C!==A&&(C=A,En=!0,Ai=!0)}if(Y.isSkinnedMesh){It.setOptional(z,Y,"bindMatrix"),It.setOptional(z,Y,"bindMatrixInverse");const dn=Y.skeleton;dn&&(dn.boneTexture===null&&dn.computeBoneTexture(),It.setValue(z,"boneTexture",dn.boneTexture,L))}Y.isBatchedMesh&&(It.setOptional(z,Y,"batchingTexture"),It.setValue(z,"batchingTexture",Y._matricesTexture,L),It.setOptional(z,Y,"batchingIdTexture"),It.setValue(z,"batchingIdTexture",Y._indirectTexture,L),It.setOptional(z,Y,"batchingColorTexture"),Y._colorsTexture!==null&&It.setValue(z,"batchingColorTexture",Y._colorsTexture,L));const nn=te.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&nt.update(Y,te,mn),(En||Ze.receiveShadow!==Y.receiveShadow)&&(Ze.receiveShadow=Y.receiveShadow,It.setValue(z,"receiveShadow",Y.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(gn.envMap.value=He,gn.flipEnvMap.value=He.isCubeTexture&&He.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&X.environment!==null&&(gn.envMapIntensity.value=X.environmentIntensity),En&&(It.setValue(z,"toneMappingExposure",R.toneMappingExposure),Ze.needsLights&&ea(gn,Ai),we&&K.fog===!0&&be.refreshFogUniforms(gn,we),be.refreshMaterialUniforms(gn,K,V,le,x.state.transmissionRenderTarget[A.id]),Ul.upload(z,Qo(Ze),gn,L)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ul.upload(z,Qo(Ze),gn,L),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&It.setValue(z,"center",Y.center),It.setValue(z,"modelViewMatrix",Y.modelViewMatrix),It.setValue(z,"normalMatrix",Y.normalMatrix),It.setValue(z,"modelMatrix",Y.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const dn=K.uniformsGroups;for(let rn=0,Et=dn.length;rn<Et;rn++){const vi=dn[rn];W.update(vi,mn),W.bind(vi,mn)}}return mn}function ea(A,X){A.ambientLightColor.needsUpdate=X,A.lightProbe.needsUpdate=X,A.directionalLights.needsUpdate=X,A.directionalLightShadows.needsUpdate=X,A.pointLights.needsUpdate=X,A.pointLightShadows.needsUpdate=X,A.spotLights.needsUpdate=X,A.spotLightShadows.needsUpdate=X,A.rectAreaLights.needsUpdate=X,A.hemisphereLights.needsUpdate=X}function jl(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return U},this.getRenderTarget=function(){return j},this.setRenderTargetTextures=function(A,X,te){Xe.get(A.texture).__webglTexture=X,Xe.get(A.depthTexture).__webglTexture=te;const K=Xe.get(A);K.__hasExternalTextures=!0,K.__autoAllocateDepthBuffer=te===void 0,K.__autoAllocateDepthBuffer||ht.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),K.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,X){const te=Xe.get(A);te.__webglFramebuffer=X,te.__useDefaultFramebuffer=X===void 0};const ta=z.createFramebuffer();this.setRenderTarget=function(A,X=0,te=0){j=A,O=X,U=te;let K=!0,Y=null,we=!1,Ce=!1;if(A){const He=Xe.get(A);if(He.__useDefaultFramebuffer!==void 0)Ke.bindFramebuffer(z.FRAMEBUFFER,null),K=!1;else if(He.__webglFramebuffer===void 0)L.setupRenderTarget(A);else if(He.__hasExternalTextures)L.rebindTextures(A,Xe.get(A.texture).__webglTexture,Xe.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const We=A.depthTexture;if(He.__boundDepthTexture!==We){if(We!==null&&Xe.has(We)&&(A.width!==We.image.width||A.height!==We.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");L.setupDepthRenderbuffer(A)}}const it=A.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(Ce=!0);const tt=Xe.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(tt[X])?Y=tt[X][te]:Y=tt[X],we=!0):A.samples>0&&L.useMultisampledRTT(A)===!1?Y=Xe.get(A).__webglMultisampledFramebuffer:Array.isArray(tt)?Y=tt[te]:Y=tt,B.copy(A.viewport),se.copy(A.scissor),Q=A.scissorTest}else B.copy(F).multiplyScalar(V).floor(),se.copy(ie).multiplyScalar(V).floor(),Q=Le;if(te!==0&&(Y=ta),Ke.bindFramebuffer(z.FRAMEBUFFER,Y)&&K&&Ke.drawBuffers(A,Y),Ke.viewport(B),Ke.scissor(se),Ke.setScissorTest(Q),we){const He=Xe.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+X,He.__webglTexture,te)}else if(Ce){const He=Xe.get(A.texture),it=X;z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,He.__webglTexture,te,it)}else if(A!==null&&te!==0){const He=Xe.get(A.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,He.__webglTexture,te)}P=-1},this.readRenderTargetPixels=function(A,X,te,K,Y,we,Ce){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){Ke.bindFramebuffer(z.FRAMEBUFFER,Ie);try{const He=A.texture,it=He.format,tt=He.type;if(!dt.textureFormatReadable(it)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=A.width-K&&te>=0&&te<=A.height-Y&&z.readPixels(X,te,K,Y,st.convert(it),st.convert(tt),we)}finally{const He=j!==null?Xe.get(j).__webglFramebuffer:null;Ke.bindFramebuffer(z.FRAMEBUFFER,He)}}},this.readRenderTargetPixelsAsync=async function(A,X,te,K,Y,we,Ce){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=Xe.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ce!==void 0&&(Ie=Ie[Ce]),Ie){const He=A.texture,it=He.format,tt=He.type;if(!dt.textureFormatReadable(it))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(X>=0&&X<=A.width-K&&te>=0&&te<=A.height-Y){Ke.bindFramebuffer(z.FRAMEBUFFER,Ie);const We=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,We),z.bufferData(z.PIXEL_PACK_BUFFER,we.byteLength,z.STREAM_READ),z.readPixels(X,te,K,Y,st.convert(it),st.convert(tt),0);const _t=j!==null?Xe.get(j).__webglFramebuffer:null;Ke.bindFramebuffer(z.FRAMEBUFFER,_t);const lt=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await Ix(z,lt,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,We),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,we),z.deleteBuffer(We),z.deleteSync(lt),we}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(A,X=null,te=0){A.isTexture!==!0&&(Bs("WebGLRenderer: copyFramebufferToTexture function signature has changed."),X=arguments[0]||null,A=arguments[1]);const K=Math.pow(2,-te),Y=Math.floor(A.image.width*K),we=Math.floor(A.image.height*K),Ce=X!==null?X.x:0,Ie=X!==null?X.y:0;L.setTexture2D(A,0),z.copyTexSubImage2D(z.TEXTURE_2D,te,0,0,Ce,Ie,Y,we),Ke.unbindTexture()};const na=z.createFramebuffer(),ia=z.createFramebuffer();this.copyTextureToTexture=function(A,X,te=null,K=null,Y=0,we=null){A.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture function signature has changed."),K=arguments[0]||null,A=arguments[1],X=arguments[2],we=arguments[3]||0,te=null),we===null&&(Y!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),we=Y,Y=0):we=0);let Ce,Ie,He,it,tt,We,_t,lt,Wt;const zt=A.isCompressedTexture?A.mipmaps[we]:A.image;if(te!==null)Ce=te.max.x-te.min.x,Ie=te.max.y-te.min.y,He=te.isBox3?te.max.z-te.min.z:1,it=te.min.x,tt=te.min.y,We=te.isBox3?te.min.z:0;else{const nn=Math.pow(2,-Y);Ce=Math.floor(zt.width*nn),Ie=Math.floor(zt.height*nn),A.isDataArrayTexture?He=zt.depth:A.isData3DTexture?He=Math.floor(zt.depth*nn):He=1,it=0,tt=0,We=0}K!==null?(_t=K.x,lt=K.y,Wt=K.z):(_t=0,lt=0,Wt=0);const St=st.convert(X.format),Ze=st.convert(X.type);let jt;X.isData3DTexture?(L.setTexture3D(X,0),jt=z.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(L.setTexture2DArray(X,0),jt=z.TEXTURE_2D_ARRAY):(L.setTexture2D(X,0),jt=z.TEXTURE_2D),z.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,X.flipY),z.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),z.pixelStorei(z.UNPACK_ALIGNMENT,X.unpackAlignment);const xt=z.getParameter(z.UNPACK_ROW_LENGTH),mn=z.getParameter(z.UNPACK_IMAGE_HEIGHT),Ki=z.getParameter(z.UNPACK_SKIP_PIXELS),En=z.getParameter(z.UNPACK_SKIP_ROWS),Ai=z.getParameter(z.UNPACK_SKIP_IMAGES);z.pixelStorei(z.UNPACK_ROW_LENGTH,zt.width),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,zt.height),z.pixelStorei(z.UNPACK_SKIP_PIXELS,it),z.pixelStorei(z.UNPACK_SKIP_ROWS,tt),z.pixelStorei(z.UNPACK_SKIP_IMAGES,We);const It=A.isDataArrayTexture||A.isData3DTexture,gn=X.isDataArrayTexture||X.isData3DTexture;if(A.isDepthTexture){const nn=Xe.get(A),dn=Xe.get(X),rn=Xe.get(nn.__renderTarget),Et=Xe.get(dn.__renderTarget);Ke.bindFramebuffer(z.READ_FRAMEBUFFER,rn.__webglFramebuffer),Ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let vi=0;vi<He;vi++)It&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xe.get(A).__webglTexture,Y,We+vi),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Xe.get(X).__webglTexture,we,Wt+vi)),z.blitFramebuffer(it,tt,Ce,Ie,_t,lt,Ce,Ie,z.DEPTH_BUFFER_BIT,z.NEAREST);Ke.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if(Y!==0||A.isRenderTargetTexture||Xe.has(A)){const nn=Xe.get(A),dn=Xe.get(X);Ke.bindFramebuffer(z.READ_FRAMEBUFFER,na),Ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,ia);for(let rn=0;rn<He;rn++)It?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,nn.__webglTexture,Y,We+rn):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,nn.__webglTexture,Y),gn?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,dn.__webglTexture,we,Wt+rn):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,dn.__webglTexture,we),Y!==0?z.blitFramebuffer(it,tt,Ce,Ie,_t,lt,Ce,Ie,z.COLOR_BUFFER_BIT,z.NEAREST):gn?z.copyTexSubImage3D(jt,we,_t,lt,Wt+rn,it,tt,Ce,Ie):z.copyTexSubImage2D(jt,we,_t,lt,it,tt,Ce,Ie);Ke.bindFramebuffer(z.READ_FRAMEBUFFER,null),Ke.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else gn?A.isDataTexture||A.isData3DTexture?z.texSubImage3D(jt,we,_t,lt,Wt,Ce,Ie,He,St,Ze,zt.data):X.isCompressedArrayTexture?z.compressedTexSubImage3D(jt,we,_t,lt,Wt,Ce,Ie,He,St,zt.data):z.texSubImage3D(jt,we,_t,lt,Wt,Ce,Ie,He,St,Ze,zt):A.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,we,_t,lt,Ce,Ie,St,Ze,zt.data):A.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,we,_t,lt,zt.width,zt.height,St,zt.data):z.texSubImage2D(z.TEXTURE_2D,we,_t,lt,Ce,Ie,St,Ze,zt);z.pixelStorei(z.UNPACK_ROW_LENGTH,xt),z.pixelStorei(z.UNPACK_IMAGE_HEIGHT,mn),z.pixelStorei(z.UNPACK_SKIP_PIXELS,Ki),z.pixelStorei(z.UNPACK_SKIP_ROWS,En),z.pixelStorei(z.UNPACK_SKIP_IMAGES,Ai),we===0&&X.generateMipmaps&&z.generateMipmap(jt),Ke.unbindTexture()},this.copyTextureToTexture3D=function(A,X,te=null,K=null,Y=0){return A.isTexture!==!0&&(Bs("WebGLRenderer: copyTextureToTexture3D function signature has changed."),te=arguments[0]||null,K=arguments[1]||null,A=arguments[2],X=arguments[3],Y=arguments[4]||0),Bs('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(A,X,te,K,Y)},this.initRenderTarget=function(A){Xe.get(A).__webglFramebuffer===void 0&&L.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?L.setTextureCube(A,0):A.isData3DTexture?L.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?L.setTexture2DArray(A,0):L.setTexture2D(A,0),Ke.unbindTexture()},this.resetState=function(){O=0,U=0,j=null,Ke.reset(),Nt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Gi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorspace=At._getDrawingBufferColorSpace(e),t.unpackColorSpace=At._getUnpackColorSpace()}}const Ig={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ko{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const K1=new Ag(-1,1,1,-1,0,1);class Z1 extends Yn{constructor(){super(),this.setAttribute("position",new Pn([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Pn([0,2,0,0,2,0],2))}}const Q1=new Z1;class Ug{constructor(e){this._mesh=new cn(Q1,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,K1)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class J1 extends Ko{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof pn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=zl.clone(e.uniforms),this.material=new pn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ug(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Gm extends Ko{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){const a=e.getContext(),l=e.state;l.buffers.color.setMask(!1),l.buffers.depth.setMask(!1),l.buffers.color.setLocked(!0),l.buffers.depth.setLocked(!0);let u,d;this.inverse?(u=0,d=1):(u=1,d=0),l.buffers.stencil.setTest(!0),l.buffers.stencil.setOp(a.REPLACE,a.REPLACE,a.REPLACE),l.buffers.stencil.setFunc(a.ALWAYS,u,4294967295),l.buffers.stencil.setClear(d),l.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),l.buffers.color.setLocked(!1),l.buffers.depth.setLocked(!1),l.buffers.color.setMask(!0),l.buffers.depth.setMask(!0),l.buffers.stencil.setLocked(!1),l.buffers.stencil.setFunc(a.EQUAL,1,4294967295),l.buffers.stencil.setOp(a.KEEP,a.KEEP,a.KEEP),l.buffers.stencil.setLocked(!0)}}class ew extends Ko{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class tw{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const r=e.getSize(new ct);this._width=r.width,this._height=r.height,t=new pi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:ji}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new J1(Ig),this.copyPass.material.blending=Wi,this.clock=new Cg}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let r=!1;for(let a=0,l=this.passes.length;a<l;a++){const u=this.passes[a];if(u.enabled!==!1){if(u.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(a),u.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),u.needsSwap){if(r){const d=this.renderer.getContext(),h=this.renderer.state.buffers.stencil;h.setFunc(d.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),h.setFunc(d.EQUAL,1,4294967295)}this.swapBuffers()}Gm!==void 0&&(u instanceof Gm?r=!0:u instanceof ew&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new ct);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const r=this._width*this._pixelRatio,a=this._height*this._pixelRatio;this.renderTarget1.setSize(r,a),this.renderTarget2.setSize(r,a);for(let l=0;l<this.passes.length;l++)this.passes[l].setSize(r,a)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class nw extends Ko{constructor(e,t,r=null,a=null,l=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=a,this.clearAlpha=l,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new vt}render(e,t,r){const a=e.autoClear;e.autoClear=!1;let l,u;this.overrideMaterial!==null&&(u=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(l=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(l),this.overrideMaterial!==null&&(this.scene.overrideMaterial=u),e.autoClear=a}}const iw={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new vt(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class to extends Ko{constructor(e,t,r,a){super(),this.strength=t!==void 0?t:1,this.radius=r,this.threshold=a,this.resolution=e!==void 0?new ct(e.x,e.y):new ct(256,256),this.clearColor=new vt(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);this.renderTargetBright=new pi(l,u,{type:ji}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let g=0;g<this.nMips;g++){const _=new pi(l,u,{type:ji});_.texture.name="UnrealBloomPass.h"+g,_.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(_);const S=new pi(l,u,{type:ji});S.texture.name="UnrealBloomPass.v"+g,S.texture.generateMipmaps=!1,this.renderTargetsVertical.push(S),l=Math.round(l/2),u=Math.round(u/2)}const d=iw;this.highPassUniforms=zl.clone(d.uniforms),this.highPassUniforms.luminosityThreshold.value=a,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new pn({uniforms:this.highPassUniforms,vertexShader:d.vertexShader,fragmentShader:d.fragmentShader}),this.separableBlurMaterials=[];const h=[3,5,7,9,11];l=Math.round(this.resolution.x/2),u=Math.round(this.resolution.y/2);for(let g=0;g<this.nMips;g++)this.separableBlurMaterials.push(this.getSeparableBlurMaterial(h[g])),this.separableBlurMaterials[g].uniforms.invSize.value=new ct(1/l,1/u),l=Math.round(l/2),u=Math.round(u/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const p=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=p,this.bloomTintColors=[new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1),new q(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const v=Ig;this.copyUniforms=zl.clone(v.uniforms),this.blendMaterial=new pn({uniforms:this.copyUniforms,vertexShader:v.vertexShader,fragmentShader:v.fragmentShader,blending:Jr,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new vt,this.oldClearAlpha=1,this.basic=new Vl,this.fsQuad=new Ug(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),a=Math.round(t/2);this.renderTargetBright.setSize(r,a);for(let l=0;l<this.nMips;l++)this.renderTargetsHorizontal[l].setSize(r,a),this.renderTargetsVertical[l].setSize(r,a),this.separableBlurMaterials[l].uniforms.invSize.value=new ct(1/r,1/a),r=Math.round(r/2),a=Math.round(a/2)}render(e,t,r,a,l){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const u=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),l&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=r.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let d=this.renderTargetBright;for(let h=0;h<this.nMips;h++)this.fsQuad.material=this.separableBlurMaterials[h],this.separableBlurMaterials[h].uniforms.colorTexture.value=d.texture,this.separableBlurMaterials[h].uniforms.direction.value=to.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[h]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[h].uniforms.colorTexture.value=this.renderTargetsHorizontal[h].texture,this.separableBlurMaterials[h].uniforms.direction.value=to.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[h]),e.clear(),this.fsQuad.render(e),d=this.renderTargetsVertical[h];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,l&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(r),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=u}getSeparableBlurMaterial(e){const t=[];for(let r=0;r<e;r++)t.push(.39894*Math.exp(-.5*r*r/(e*e))/e);return new pn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new ct(.5,.5)},direction:{value:new ct(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new pn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`varying vec2 vUv;
				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor(const in float factor) {
					float mirrorFactor = 1.2 - factor;
					return mix(factor, mirrorFactor, bloomRadius);
				}

				void main() {
					gl_FragColor = bloomStrength * ( lerpBloomFactor(bloomFactors[0]) * vec4(bloomTintColors[0], 1.0) * texture2D(blurTexture1, vUv) +
						lerpBloomFactor(bloomFactors[1]) * vec4(bloomTintColors[1], 1.0) * texture2D(blurTexture2, vUv) +
						lerpBloomFactor(bloomFactors[2]) * vec4(bloomTintColors[2], 1.0) * texture2D(blurTexture3, vUv) +
						lerpBloomFactor(bloomFactors[3]) * vec4(bloomTintColors[3], 1.0) * texture2D(blurTexture4, vUv) +
						lerpBloomFactor(bloomFactors[4]) * vec4(bloomTintColors[4], 1.0) * texture2D(blurTexture5, vUv) );
				}`})}}to.BlurDirectionX=new ct(1,0);to.BlurDirectionY=new ct(0,1);function rw(s,e){const t=new Qr;t.name="DeepSpaceStarfield";const r=920,a=new Float32Array(r*3),l=new Float32Array(r),u=new Float32Array(r),d=new Float32Array(r),h=new Float32Array(r),p=new Float32Array(r*3),v=new Float32Array(r),g=new Float32Array(r),_=new Float32Array(r),S=-175;for(let k=0;k<r;k++){const O=Math.random();let U,j,P,C,B,se;O<.75?(U=.85+Math.random()*.45,j=.32+Math.random()*.28,P=.45+Math.random()*.3,C=.18+Math.random()*.12,B=S+Math.random()*105,se=.15+Math.random()*.2):O<.94?(U=1.45+Math.random()*.65,j=.65+Math.random()*.22,P=.75+Math.random()*.18,C=.3+Math.random()*.15,B=-120+Math.random()*85,se=.35+Math.random()*.25):O<.992?(U=2.25+Math.random()*.75,j=.88+Math.random()*.1,P=.92+Math.random()*.08,C=.42+Math.random()*.16,B=-85+Math.random()*65,se=.6+Math.random()*.2):(U=3.1+Math.random()*.7,j=1,P=1,C=.55+Math.random()*.15,B=-55+Math.random()*45,se=.8+Math.random()*.18);const Q=125*(1+Math.abs(B)/100),ue=85*(1+Math.abs(B)/100),de=Math.random()*Math.PI*2,re=Math.pow(Math.random(),1.4);a[k*3]=re*(Math.random()-.5)*Q,a[k*3+1]=re*(Math.random()-.5)*ue,a[k*3+2]=B,l[k]=U,u[k]=j,d[k]=P,h[k]=C,v[k]=se,g[k]=de,_[k]=.35+Math.random()*.75;const le=Math.random();le<.52?(p[k*3]=1,p[k*3+1]=1,p[k*3+2]=1):le<.78?(p[k*3]=.93,p[k*3+1]=.96,p[k*3+2]=1):le<.92?(p[k*3]=1,p[k*3+1]=.97,p[k*3+2]=.92):(p[k*3]=.9,p[k*3+1]=.98,p[k*3+2]=1)}const M=new Yn;M.setAttribute("position",new Kt(a,3)),M.setAttribute("aSize",new Kt(l,1)),M.setAttribute("aBrightness",new Kt(u,1)),M.setAttribute("aOpacity",new Kt(d,1)),M.setAttribute("aGlow",new Kt(h,1)),M.setAttribute("aColor",new Kt(p,3)),M.setAttribute("aParallax",new Kt(v,1)),M.setAttribute("aPhase",new Kt(g,1)),M.setAttribute("aTwinkleSpeed",new Kt(_,1));const E=`
    uniform float uTime;
    uniform float uPixelRatio;

    attribute float aSize;
    attribute float aBrightness;
    attribute float aOpacity;
    attribute float aGlow;
    attribute vec3 aColor;
    attribute float aParallax;
    attribute float aPhase;
    attribute float aTwinkleSpeed;

    varying float vAlpha;
    varying vec3 vColor;
    varying float vGlow;

    void main() {
      // SUSPENDED IN 3D SPACE: Z position remains fixed (no forward motion, no tunnel/warp).
      // Recognisable, gentle continuous floating drift with natural depth parallax:
      // Farther stars (smaller aParallax) move slower; closer stars drift with noticeable smooth parallax.
      float driftX = sin(uTime * 0.12 + aPhase) * 2.4 * aParallax;
      float driftY = cos(uTime * 0.09 + aPhase * 1.3) * 1.8 * aParallax;

      // Steady continuous cosmic drift vector (clearly recognizable gentle floating)
      vec2 steadyDrift = vec2(uTime * 0.12, uTime * 0.05) * aParallax;

      vec3 curPos = position;
      curPos.x += driftX + steadyDrift.x;
      curPos.y += driftY + steadyDrift.y;

      // Seamless boundary wrap so stars drift indefinitely through the volume
      float boundX = 95.0 * (1.0 + abs(position.z) / 75.0);
      float boundY = 65.0 * (1.0 + abs(position.z) / 75.0);
      curPos.x = mod(curPos.x + boundX, boundX * 2.0) - boundX;
      curPos.y = mod(curPos.y + boundY, boundY * 2.0) - boundY;

      vec4 mvPosition = modelViewMatrix * vec4(curPos, 1.0);
      gl_Position = projectionMatrix * mvPosition;

      // Realistic 3D perspective distance attenuation
      float distZ = max(-mvPosition.z, 1.0);
      float pSize = (aSize * uPixelRatio * 155.0) / distZ;

      // Strict size clamping: even closest stars stay small points (max 5.8px), never large circles
      gl_PointSize = clamp(pSize, 1.0, 5.8);

      // Very slow, serene atmospheric twinkle
      float twinkle = 0.88 + 0.12 * sin(uTime * aTwinkleSpeed + aPhase);

      vAlpha = aBrightness * aOpacity * twinkle;
      vColor = aColor;
      vGlow = aGlow;
    }
  `,y=`
    precision highp float;

    varying float vAlpha;
    varying vec3 vColor;
    varying float vGlow;

    void main() {
      vec2 coord = gl_PointCoord - vec2(0.5);
      float dist = length(coord);

      // STRICT CIRCULAR MASK: Discard everything beyond r = 0.5
      // Mathematically guarantees 100% round dots with zero square/polygon artifacts.
      if (dist > 0.5) {
        discard;
      }

      // 1. Tiny sharp circular center core
      float core = smoothstep(0.18, 0.0, dist);

      // 2. Very subtle soft radial glow originating from that exact point
      float glow = smoothstep(0.50, 0.06, dist) * vGlow;

      float intensity = core * 0.95 + glow * 0.42;
      float finalAlpha = intensity * vAlpha;

      gl_FragColor = vec4(vColor, finalAlpha);
    }
  `,x=new pn({uniforms:{uTime:{value:0},uPixelRatio:{value:Math.min(window.devicePixelRatio,2)}},vertexShader:E,fragmentShader:y,transparent:!0,depthWrite:!1,blending:Jr}),D=new Eg(M,x);return t.add(D),s.add(t),{group:t,update:k=>{x.uniforms.uTime.value=k,x.uniforms.uPixelRatio.value=Math.min(e.getPixelRatio(),2)},dispose:()=>{s.remove(t),M.dispose(),x.dispose()}}}class sw{constructor(){Pe(this,"x",0);Pe(this,"y",0);Pe(this,"targetX",0);Pe(this,"targetY",0);Pe(this,"lastMoveTime",0);Pe(this,"lastUpdateTime",0);if(typeof window<"u"){const e=(r,a)=>{const l=window.innerWidth||1,u=window.innerHeight||1;this.targetX=Math.max(-1,Math.min(1,r/l*2-1)),this.targetY=Math.max(-1,Math.min(1,-(a/u)*2+1)),this.lastMoveTime=performance.now()};window.addEventListener("pointermove",r=>e(r.clientX,r.clientY),{passive:!0}),window.addEventListener("mousemove",r=>e(r.clientX,r.clientY),{passive:!0}),window.addEventListener("touchmove",r=>{r.touches&&r.touches[0]&&e(r.touches[0].clientX,r.touches[0].clientY)},{passive:!0});const t=()=>{this.targetX=0,this.targetY=0};window.addEventListener("blur",t),document.addEventListener("mouseleave",t)}}update(){const e=performance.now();if(e-this.lastUpdateTime<4)return{x:this.x,y:this.y};this.lastUpdateTime=e,e-this.lastMoveTime>1800&&(this.targetX=0,this.targetY=0);const t=.035;return this.x+=(this.targetX-this.x)*t,this.y+=(this.targetY-this.y)*t,Math.abs(this.x)<1e-4&&this.targetX===0&&(this.x=0),Math.abs(this.y)<1e-4&&this.targetY===0&&(this.y=0),{x:this.x,y:this.y}}}const Fg=new sw,ow=()=>{const s=je.useRef(null);return je.useEffect(()=>{const e=s.current;if(!e)return;const t=window.matchMedia("(prefers-reduced-motion: reduce)").matches,r=new rf;r.background=new vt(0);const a=new Cn(46,window.innerWidth/window.innerHeight,.1,200);a.position.set(0,0,14);const l=new af({alpha:!1,antialias:!0,powerPreference:"high-performance"});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2)),l.toneMapping=Qm,l.toneMappingExposure=1,e.appendChild(l.domElement);const u=new tw(l);u.addPass(new nw(r,a)),u.addPass(new to(new ct(window.innerWidth,window.innerHeight),.28,.22,.85));const d=rw(r,l);let h=window.scrollY;const p=()=>{const x=document.getElementById("home");return x?window.scrollY>x.offsetTop+x.offsetHeight-80:window.scrollY>window.innerHeight*.88};let v=p(),g=!0,_;const S=()=>{h=window.scrollY;const x=p();x!==v&&(v=x,e&&(e.style.opacity=x?"0":"1"),!x&&!g&&(g=!0,_=requestAnimationFrame(E)))};window.addEventListener("scroll",S,{passive:!0});const M=new Cg,E=()=>{if(v){g=!1;return}d.update(M.getElapsedTime());const{x,y:D}=Fg.update();t?(a.position.x=0,a.position.y=-h*.003):(a.position.x=-x*2.8,a.position.y=-D*1.9-h*.003),a.lookAt(0,-h*.003,0),u.render(),_=requestAnimationFrame(E)};v||E();const y=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight),u.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",y),()=>{cancelAnimationFrame(_),window.removeEventListener("scroll",S),window.removeEventListener("resize",y),d.dispose(),e.contains(l.domElement)&&e.removeChild(l.domElement),l.dispose()}},[]),b.jsx("div",{ref:s,className:"fixed inset-0 pointer-events-none z-0 overflow-hidden bg-black",style:{backgroundColor:"#000000",transition:"opacity 0.45s ease-out"},"aria-hidden":"true"})},aw=()=>{const s=je.useRef(null);return je.useEffect(()=>{const e=s.current;if(!e)return;const t=e.getContext("2d");if(!t||window.matchMedia("(prefers-reduced-motion: reduce)").matches)return;let r=e.width=window.innerWidth,a=e.height=window.innerHeight;const l=()=>{r=e.width=window.innerWidth,a=e.height=window.innerHeight};window.addEventListener("resize",l);const u=[],d=28;let h={x:-100,y:-100},p=!1;const v=S=>{h={x:S.clientX,y:S.clientY},p=!0,u.push({x:S.clientX,y:S.clientY,age:0}),u.length>d&&u.shift()};window.addEventListener("mousemove",v,{passive:!0});let g;const _=()=>{if(document.hidden){g=requestAnimationFrame(_);return}t.clearRect(0,0,r,a);for(let S=u.length-1;S>=0;S--)u[S].age+=1,u[S].age>24&&u.splice(S,1);if(u.length>2&&p){t.beginPath(),t.moveTo(u[0].x,u[0].y);for(let E=1;E<u.length-1;E++){const y=(u[E].x+u[E+1].x)/2,x=(u[E].y+u[E+1].y)/2;t.quadraticCurveTo(u[E].x,u[E].y,y,x)}const S=t.createLinearGradient(u[0].x,u[0].y,h.x,h.y);S.addColorStop(0,"rgba(56, 189, 248, 0)"),S.addColorStop(.5,"rgba(56, 189, 248, 0.35)"),S.addColorStop(1,"rgba(245, 158, 11, 0.7)"),t.strokeStyle=S,t.lineWidth=3.2,t.lineCap="round",t.lineJoin="round",t.shadowColor="#38bdf8",t.shadowBlur=12,t.stroke();const M=u[u.length-1];t.beginPath(),t.arc(M.x,M.y,2.5,0,Math.PI*2),t.fillStyle="#f59e0b",t.shadowBlur=8,t.fill()}g=requestAnimationFrame(_)};return _(),()=>{cancelAnimationFrame(g),window.removeEventListener("resize",l),window.removeEventListener("mousemove",v)}},[]),b.jsx("canvas",{ref:s,className:"fixed inset-0 pointer-events-none z-40","aria-hidden":"true"})},lw=({className:s=""})=>{const e=je.useRef(null);return je.useEffect(()=>{const t=e.current;if(!t)return;const r=t.clientWidth||40,a=t.clientHeight||40,l=new rf,u=new Cn(38,r/a,.1,50);u.position.set(0,0,3.6),u.lookAt(0,0,0);const d=new af({alpha:!0,antialias:!0,powerPreference:"high-performance"});d.setPixelRatio(Math.min(window.devicePixelRatio||1,2)),d.setSize(r,a),d.setClearColor(0,0),t.appendChild(d.domElement);const h=new Qr;l.add(h);const p=new f_(58879,2.5,10);p.position.set(2,3,4),l.add(new h_(16777215,.85),p);const v=new eo(.22,32,32),g=new hm({color:8386303,emissive:55551,emissiveIntensity:.85,roughness:.2,metalness:.1}),_=new eo(.32,24,24),S=new Vl({color:55551,transparent:!0,opacity:.45,blending:Jr,depthWrite:!1});h.add(new cn(v,g),new cn(_,S));const M=new hm({color:58879,emissive:47316,emissiveIntensity:.85,metalness:.85,roughness:.18,transparent:!0,opacity:.88}),E=M.clone();E.opacity=.35;const y=new Hs(.68,.011,16,128),x=new Hs(.86,.009,16,128),D=new Hs(1.04,.012,16,128),N=new Hs(1.18,.005,16,128),R=new cn(y,M),k=new cn(x,M),O=new cn(D,M),U=new cn(N,E);R.rotation.set(.65,.35,.2),k.rotation.set(-.55,.85,-.4),O.rotation.set(.15,-.45,1.15),h.add(R,k,O,U);const j=12,P=new Float32Array(j*3);for(let re=0;re<j;re++){const le=.35+Math.random()*.6,V=Math.random()*Math.PI*2,ce=(Math.random()-.5)*Math.PI;P[re*3]=le*Math.cos(ce)*Math.cos(V),P[re*3+1]=le*Math.sin(ce),P[re*3+2]=le*Math.cos(ce)*Math.sin(V)}const C=new Yn;C.setAttribute("position",new Kt(P,3));const B=new wg({size:.025,color:8451583,transparent:!0,opacity:.45,blending:Jr,depthWrite:!1}),se=new Eg(C,B);h.add(se);let Q=0;const ue=performance.now(),de=()=>{const re=(performance.now()-ue)/1e3;h.rotation.y+=.0022,h.rotation.x=Math.sin(re*.25)*.18,R.rotation.x+=.0032,R.rotation.y+=.0018,k.rotation.y-=.0028,k.rotation.z+=.0021,O.rotation.x-=.0019,O.rotation.z-=.0026,se.rotation.y+=.0012,se.rotation.z+=8e-4,g.emissiveIntensity=.85+Math.sin(re*1.4)*.12,S.opacity=.38+Math.sin(re*1.4)*.1,d.render(l,u),Q=requestAnimationFrame(de)};return Q=requestAnimationFrame(de),()=>{cancelAnimationFrame(Q),[v,_,y,x,D,N,C].forEach(re=>re.dispose()),[g,S,M,E,B].forEach(re=>re.dispose()),d.dispose(),d.domElement.parentNode===t&&t.removeChild(d.domElement)}},[]),b.jsx("div",{ref:e,className:`orbital-gyro-anchor ${s}`,"aria-hidden":"true"})},Cl=["◈","◇","✦","§","0","1","λ","ψ","α","β","γ","δ"];function cw(s){const[e,t]=je.useState(s),r=je.useRef(null),a=je.useRef(!1),l=je.useCallback(()=>{r.current!==null&&(window.clearInterval(r.current),r.current=null),a.current=!1},[]),u=je.useCallback(()=>{if(a.current)return;a.current=!0;const d=s.length;let h=0;r.current=window.setInterval(()=>{if(h++,h<=d){const p=d-h,v=s.split("");for(let g=d-1;g>=p;g--)v[g]=Cl[Math.floor(Math.random()*Cl.length)];t(v.join(""))}else if(h<=d*2){const p=h-d,v=s.split("");for(let g=p;g<d;g++)v[g]=Cl[Math.floor(Math.random()*Cl.length)];t(v.join(""))}else t(s),l()},28)},[s,l]);return je.useEffect(()=>l,[l]),{displayText:e,triggerScramble:u}}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uw=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),kg=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dw={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fw=je.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:a="",children:l,iconNode:u,...d},h)=>je.createElement("svg",{ref:h,...dw,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:kg("lucide",a),...d},[...u.map(([p,v])=>je.createElement(p,v)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mt=(s,e)=>{const t=je.forwardRef(({className:r,...a},l)=>je.createElement(fw,{ref:l,iconNode:e,className:kg(`lucide-${uw(s)}`,r),...a}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hw=[["path",{d:"M12 5v14",key:"s699le"}],["path",{d:"m19 12-7 7-7-7",key:"1idqje"}]],pw=Mt("ArrowDown",hw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mw=[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]],gw=Mt("ArrowUpRight",mw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const vw=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],xw=Mt("Briefcase",vw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _w=[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]],yw=Mt("Calendar",_w);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sw=[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]],Og=Mt("Check",Sw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mw=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],zg=Mt("CircleCheckBig",Mw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ww=[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]],Ew=Mt("Code",ww);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tw=[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z",key:"9ktpf1"}],["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],bw=Mt("Compass",Tw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Aw=[["rect",{width:"14",height:"14",x:"8",y:"8",rx:"2",ry:"2",key:"17jyea"}],["path",{d:"M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2",key:"zix9uf"}]],Cw=Mt("Copy",Aw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rw=[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]],Pw=Mt("Database",Rw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nw=[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]],Lw=Mt("DollarSign",Nw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Dw=[["path",{d:"M15 3h6v6",key:"1q9fwt"}],["path",{d:"M10 14 21 3",key:"gplh6r"}],["path",{d:"M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",key:"a6xqqp"}]],Bg=Mt("ExternalLink",Dw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Iw=[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]],Uw=Mt("FileText",Iw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fw=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],Hg=Mt("Github",Fw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kw=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M12 5 9.04 7.96a2.17 2.17 0 0 0 0 3.08c.82.82 2.13.85 3 .07l2.07-1.9a2.82 2.82 0 0 1 3.79 0l2.96 2.66",key:"4oyue0"}],["path",{d:"m18 15-2-2",key:"60u0ii"}],["path",{d:"m15 18-2-2",key:"6p76be"}]],Ow=Mt("HeartHandshake",kw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zw=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],Vg=Mt("Layers",zw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bw=[["path",{d:"M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5",key:"1gvzjb"}],["path",{d:"M9 18h6",key:"x1upvd"}],["path",{d:"M10 22h4",key:"ceow96"}]],Hw=Mt("Lightbulb",Bw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vw=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],Gw=Mt("Linkedin",Vw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ww=[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]],jw=Mt("LoaderCircle",Ww);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xw=[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]],Yw=Mt("Mail",Xw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qw=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],$w=Mt("MapPin",qw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kw=[["path",{d:"M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z",key:"foiqr5"}]],Zw=Mt("Phone",Kw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Qw=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]],Jw=Mt("Plus",Qw);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eE=[["path",{d:"M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8",key:"1p45f6"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}]],tE=Mt("RotateCw",eE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nE=[["path",{d:"M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z",key:"1ffxy3"}],["path",{d:"m21.854 2.147-10.94 10.939",key:"12cjpa"}]],Wm=Mt("Send",nE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const iE=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],rE=Mt("Server",iE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sE=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]],oE=Mt("Shield",sE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aE=[["path",{d:"M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z",key:"hou9p0"}],["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M16 10a4 4 0 0 1-8 0",key:"1ltviw"}]],lE=Mt("ShoppingBag",aE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cE=[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]],Gg=Mt("Sparkles",cE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uE=[["path",{d:"M7 20h10",key:"e6iznv"}],["path",{d:"M10 20c5.5-2.5.8-6.4 3-10",key:"161w41"}],["path",{d:"M9.5 9.4c1.1.8 1.8 2.2 2.3 3.7-2 .4-3.5.4-4.8-.3-1.2-.6-2.3-1.9-3-4.2 2.8-.5 4.4 0 5.5.8z",key:"9gtqwd"}],["path",{d:"M14.1 6a7 7 0 0 0-1.1 4c1.9-.1 3.3-.6 4.3-1.4 1-1 1.6-2.3 1.7-4.6-2.7.1-4 1-4.9 2z",key:"bkxnd2"}]],dE=Mt("Sprout",uE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fE=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["path",{d:"M16 9a5 5 0 0 1 0 6",key:"1q6k2b"}],["path",{d:"M19.364 18.364a9 9 0 0 0 0-12.728",key:"ijwkga"}]],hE=Mt("Volume2",fE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pE=[["path",{d:"M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z",key:"uqj9uw"}],["line",{x1:"22",x2:"16",y1:"9",y2:"15",key:"1ewh16"}],["line",{x1:"16",x2:"22",y1:"9",y2:"15",key:"5ykzw1"}]],mE=Mt("VolumeX",pE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gE=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],vE=Mt("X",gE);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xE=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],_E=Mt("Zap",xE),yE=({href:s,label:e})=>{const{displayText:t,triggerScramble:r}=cw(e),a=l=>{l.preventDefault(),$d(s,-30)};return b.jsx("a",{href:s,onClick:a,onMouseEnter:r,className:"relative px-2.5 sm:px-3.5 py-1.5 text-xs sm:text-sm font-medium text-slate-300 hover:text-cyan-300 transition-colors duration-200 font-mono tracking-wider cursor-pointer",children:b.jsx("span",{children:t})})},SE=()=>{const s=[{href:"#home",label:"Home"},{href:"#about",label:"About"},{href:"#projects",label:"Projects"},{href:"#vision",label:"Vision"}],e=t=>{t.preventDefault(),$d("#contact",-30)};return b.jsxs("header",{className:"fixed top-0 left-0 right-0 z-50 px-4 sm:px-8 py-3.5 sm:py-4 flex items-center justify-between pointer-events-none",children:[b.jsx("div",{className:"w-10 h-10 flex items-center justify-center pointer-events-none",children:b.jsx(lw,{})}),b.jsx("nav",{"aria-label":"Main Navigation",className:"pointer-events-auto flex items-center gap-1 sm:gap-2 bg-transparent",children:s.map(t=>b.jsx(yE,{href:t.href,label:t.label},t.label))}),b.jsxs("div",{className:"pointer-events-auto flex items-center gap-3",children:[b.jsxs("div",{className:"hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-xs font-mono text-slate-300",children:[b.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),b.jsx("span",{children:"Addis Ababa"})]}),b.jsxs("a",{href:"#contact",onClick:e,className:"group relative inline-flex items-center gap-1.5 px-4 py-2 text-xs sm:text-sm font-medium text-cyan-300 bg-cyan-950/40 hover:bg-cyan-900/50 backdrop-blur-lg border border-cyan-500/30 hover:border-cyan-400/60 rounded-full transition-all duration-300 shadow-[0_0_15px_rgba(56,189,248,0.15)] hover:shadow-[0_0_20px_rgba(56,189,248,0.3)] active:scale-95",children:[b.jsx("span",{children:"Contact"}),b.jsx(gw,{className:"w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-cyan-400"})]})]})]})};class ME{constructor(){Pe(this,"ctx",null);Pe(this,"masterGain",null);Pe(this,"analyser",null);Pe(this,"oscillators",[]);Pe(this,"isPlaying",!1);Pe(this,"fadeDuration",1.2);Pe(this,"listeners",new Set);Pe(this,"freqData",null)}initContext(){if(!this.ctx){const e=window.AudioContext||window.webkitAudioContext;this.ctx=new e,this.masterGain=this.ctx.createGain(),this.masterGain.gain.setValueAtTime(1e-4,this.ctx.currentTime),this.analyser=this.ctx.createAnalyser(),this.analyser.fftSize=64,this.analyser.smoothingTimeConstant=.8,this.freqData=new Uint8Array(new ArrayBuffer(this.analyser.frequencyBinCount)),this.masterGain.connect(this.analyser),this.analyser.connect(this.ctx.destination)}this.ctx.state==="suspended"&&this.ctx.resume()}subscribe(e){return this.listeners.add(e),e(this.isPlaying),()=>this.listeners.delete(e)}notify(){this.listeners.forEach(e=>e(this.isPlaying))}toggle(){return this.isPlaying?(this.stop(),!1):(this.play(),!0)}play(){if(this.initContext(),!this.ctx||!this.masterGain)return;const e=[55,82.41,110,164.81];this.oscillators=[];const t=this.ctx.createBiquadFilter();t.type="lowpass",t.frequency.setValueAtTime(320,this.ctx.currentTime),t.connect(this.masterGain),e.forEach((a,l)=>{if(!this.ctx)return;const u=this.ctx.createOscillator(),d=this.ctx.createGain();u.type=l%2===0?"sine":"triangle",u.frequency.setValueAtTime(a,this.ctx.currentTime),u.detune.setValueAtTime((l-1.5)*4,this.ctx.currentTime),d.gain.setValueAtTime(.08/(l+1),this.ctx.currentTime),u.connect(d),d.connect(t),u.start(),this.oscillators.push(u)});const r=this.ctx.currentTime;this.masterGain.gain.cancelScheduledValues(r),this.masterGain.gain.setValueAtTime(1e-4,r),this.masterGain.gain.exponentialRampToValueAtTime(.22,r+this.fadeDuration),this.isPlaying=!0,this.notify()}stop(){if(!this.ctx||!this.masterGain||!this.isPlaying)return;const e=this.ctx.currentTime;this.masterGain.gain.cancelScheduledValues(e),this.masterGain.gain.setValueAtTime(this.masterGain.gain.value,e),this.masterGain.gain.exponentialRampToValueAtTime(1e-4,e+this.fadeDuration),setTimeout(()=>{this.oscillators.forEach(t=>{try{t.stop(),t.disconnect()}catch{}}),this.oscillators=[]},this.fadeDuration*1e3),this.isPlaying=!1,this.notify()}getStatus(){return this.isPlaying}getAudioBands(){if(!this.isPlaying||!this.analyser||!this.freqData)return null;this.analyser.getByteFrequencyData(this.freqData);let e=0,t=0,r=0;for(let a=0;a<4;a++)e+=this.freqData[a];for(let a=4;a<16;a++)t+=this.freqData[a];for(let a=16;a<32;a++)r+=this.freqData[a];return{bass:Math.min(1,e/1020*2.2),mid:Math.min(1,t/3060*2.5),high:Math.min(1,r/4080*3)}}}const Xs=new ME,wE=()=>{const[s,e]=je.useState(Xs.getStatus());je.useEffect(()=>Xs.subscribe(r=>{e(r)}),[]);const t=()=>{Xs.toggle()};return b.jsx("div",{className:"fixed bottom-6 right-6 z-50",children:b.jsxs("button",{onClick:t,type:"button","aria-label":s?"Mute ambient soundscape":"Enable ambient soundscape",className:`group flex items-center gap-3 px-4 py-2.5 rounded-full glass-pill border transition-all duration-300 shadow-[0_4px_24px_rgba(0,0,0,0.5)] active:scale-95 ${s?"border-cyan-500/40 bg-cyan-950/30 text-cyan-300 shadow-[0_0_20px_rgba(56,189,248,0.2)]":"border-white/10 text-slate-400 hover:text-slate-200 hover:border-white/20"}`,children:[s?b.jsx(hE,{className:"w-4 h-4 text-cyan-400 animate-pulse"}):b.jsx(mE,{className:"w-4 h-4 text-slate-400 group-hover:text-slate-300"}),b.jsx("span",{className:"text-xs font-mono uppercase tracking-wider font-medium",children:s?"Sound On":"Sound Off"}),b.jsxs("div",{className:"flex items-end gap-[3px] h-3.5 w-4","aria-hidden":"true",children:[b.jsx("span",{className:`w-[2.5px] rounded-full transition-all duration-300 ${s?"bg-cyan-400 animate-[bounce_0.8s_ease-in-out_infinite] h-3":"bg-slate-600 h-1"}`}),b.jsx("span",{className:`w-[2.5px] rounded-full transition-all duration-300 ${s?"bg-cyan-300 animate-[bounce_1.1s_ease-in-out_0.2s_infinite] h-3.5":"bg-slate-600 h-1.5"}`}),b.jsx("span",{className:`w-[2.5px] rounded-full transition-all duration-300 ${s?"bg-amber-400 animate-[bounce_0.9s_ease-in-out_0.4s_infinite] h-2.5":"bg-slate-600 h-1"}`})]})]})})},EE=({lines:s})=>b.jsxs("div",{id:"manifesto",className:"w-full max-w-4xl mx-auto px-6 pt-24 pb-20 space-y-10 text-center",children:[b.jsx("span",{className:"text-xs font-mono tracking-widest text-cyan-400 uppercase",children:"// Core Engineering Philosophy"}),b.jsx("div",{className:"space-y-8",children:s.map((e,t)=>b.jsxs("p",{className:"text-xl sm:text-3xl md:text-4xl font-display font-semibold text-slate-200 leading-snug tracking-tight hover:text-white transition-colors duration-300",children:["“",e,"”"]},t))}),b.jsx("div",{className:"pt-4 flex justify-center",children:b.jsx("span",{className:"inline-block w-12 h-1 bg-gradient-to-r from-cyan-400 to-sky-200 rounded-full"})})]}),TE=({onComplete:s})=>{const[e,t]=je.useState(100),[r,a]=je.useState("countdown");if(je.useEffect(()=>{const d=performance.now(),h=1200,p=g=>{const _=g-d,S=Math.min(_/h,1),M=Math.max(0,Math.round(100*(1-Math.pow(S,1.2))));t(M),S<1?requestAnimationFrame(p):setTimeout(()=>a("line"),80)},v=requestAnimationFrame(p);return()=>cancelAnimationFrame(v)},[]),je.useEffect(()=>{if(r!=="line")return;const d=setTimeout(()=>{a("open")},450);return()=>clearTimeout(d)},[r]),je.useEffect(()=>{if(r!=="open")return;window.dispatchEvent(new CustomEvent("gate:open"));const d=setTimeout(()=>{window.dispatchEvent(new CustomEvent("portrait:reveal"))},280),h=setTimeout(()=>{a("done"),s==null||s()},750);return()=>{clearTimeout(d),clearTimeout(h)}},[r,s]),r==="done")return null;const l=r==="line"||r==="open",u=r==="open";return b.jsxs("div",{className:"fixed inset-0 z-[100] pointer-events-none select-none overflow-hidden",children:[b.jsx("div",{className:"absolute top-0 left-0 w-full h-[50vh] bg-[#02040a] border-b border-cyan-400/80 shadow-[0_4px_24px_rgba(0,229,255,0.45)] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]",style:{transform:u?"translateY(-100%)":"translateY(0%)",willChange:"transform"},children:b.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_0%,rgba(0,229,255,0.04),transparent)]"})}),b.jsx("div",{className:"absolute bottom-0 left-0 w-full h-[50vh] bg-[#02040a] border-t border-cyan-400/80 shadow-[0_-4px_24px_rgba(0,229,255,0.45)] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.175,1)]",style:{transform:u?"translateY(100%)":"translateY(0%)",willChange:"transform"},children:b.jsx("div",{className:"absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_100%,rgba(0,229,255,0.04),transparent)]"})}),b.jsx("div",{className:"absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-screen h-[2px] bg-cyan-300 shadow-[0_0_16px_#00e5ff,0_0_35px_rgba(0,229,255,0.7)] transition-all duration-[420ms] ease-[cubic-bezier(0.16,1,0.3,1)]",style:{transform:`translate(-50%, -50%) scaleX(${l?1:0})`,opacity:u?0:l?1:0}}),r==="countdown"&&b.jsxs("div",{className:"absolute inset-0 flex flex-col items-center justify-center z-10 text-center pointer-events-auto",children:[b.jsxs("div",{className:"flex items-center gap-2 mb-3",children:[b.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping"}),b.jsx("span",{className:"text-[10px] sm:text-xs font-mono uppercase tracking-[0.3em] text-cyan-300/80",children:"SYS.INITIALIZE // BK.CORE"})]}),b.jsx("div",{className:"font-mono text-6xl sm:text-8xl font-light tracking-tight text-white drop-shadow-[0_0_30px_rgba(0,229,255,0.6)]",children:e.toString().padStart(3,"0")}),b.jsxs("div",{className:"mt-4 flex items-center gap-1 text-[11px] font-mono text-slate-400 tracking-wider",children:[b.jsx("span",{className:"text-cyan-400",children:"["}),b.jsx("span",{children:"STANDBY FOR GATE ACCESS"}),b.jsx("span",{className:"text-cyan-400",children:"]"})]})]})]})},bE=({portraitUrl:s,name:e})=>{const[t,r]=je.useState({x:0,y:0}),[a,l]=je.useState(!1);je.useEffect(()=>{const h=()=>l(!0);window.addEventListener("portrait:reveal",h);const p=setTimeout(()=>{l(!0)},2200);return()=>{window.removeEventListener("portrait:reveal",h),clearTimeout(p)}},[]);const u=h=>{const p=h.currentTarget.getBoundingClientRect(),v=h.clientX-p.left-p.width/2,g=h.clientY-p.top-p.height/2;r({x:-g*.035,y:v*.035})},d=()=>{r({x:0,y:0})};return b.jsxs("div",{className:"relative flex items-center justify-center p-2",style:{opacity:a?1:0,clipPath:a?"inset(0% 0 0% 0)":"inset(100% 0 0% 0)",transform:a?"translateY(0px)":"translateY(28px)",transition:"clip-path 0.75s cubic-bezier(0.16, 1, 0.3, 1), transform 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.5s ease-out",willChange:"clip-path, transform, opacity"},children:[b.jsx("div",{className:"absolute left-2 right-2 h-[2px] bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_16px_#00e5ff] pointer-events-none z-30",style:{top:a?"0%":"100%",opacity:a?0:.85,transition:"top 0.75s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.85s ease-out"}}),b.jsxs("div",{onMouseMove:u,onMouseLeave:d,style:{transform:`perspective(1000px) rotateX(${t.x}deg) rotateY(${t.y}deg)`,transition:"transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",width:"clamp(210px, 20vw, 270px)",aspectRatio:"3 / 3.8"},className:"relative z-10 rounded-3xl p-2 bg-gradient-to-b from-cyan-400/20 via-white/[0.04] to-violet-500/10 backdrop-blur-xl border border-cyan-400/40 shadow-[0_20px_50px_rgba(2,6,18,0.9)] group overflow-hidden",children:[b.jsx("div",{className:"absolute inset-0 bg-gradient-to-tr from-transparent via-cyan-400/15 to-violet-400/20 opacity-60 group-hover:opacity-90 transition-opacity duration-700 pointer-events-none z-20"}),b.jsx("div",{className:"absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-cyan-400 rounded-tl z-20"}),b.jsx("div",{className:"absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-sky-300/80 rounded-br z-20"}),b.jsxs("div",{className:"relative w-full h-full rounded-2xl overflow-hidden bg-[#030714]",children:[b.jsx("img",{src:s,alt:e,className:"w-full h-full object-cover object-center filter contrast-[1.08] brightness-[0.96] group-hover:scale-105 transition-transform duration-700 ease-out",loading:"eager"}),b.jsx("div",{className:"absolute inset-0 bg-gradient-to-t from-[#02050f] via-transparent to-black/25 opacity-75 pointer-events-none"}),b.jsxs("div",{className:"absolute bottom-3 left-3 right-3 z-30 flex items-center justify-between px-3 py-1.5 rounded-xl bg-obsidian/90 backdrop-blur-md border border-white/10 text-xs",children:[b.jsxs("span",{className:"flex items-center gap-1.5 text-slate-300 font-mono",children:[b.jsx("span",{className:"w-2 h-2 rounded-full bg-cyan-400 animate-pulse"}),"Addis Ababa"]}),b.jsx("span",{className:"text-cyan-300 font-mono text-[11px] font-medium",children:"Binyam Kebru"})]})]})]})]})},jm=`
  vec4 permute(vec4 x) { return mod(((x * 34.0) + 1.0) * x, 289.0); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
    const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
    vec3 i  = floor(v + dot(v, C.yyy));
    vec3 x0 = v - i + dot(i, C.xxx);
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min(g.xyz, l.zxy);
    vec3 i2 = max(g.xyz, l.zxy);
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - D.yyy;
    i = mod(i, 289.0);
    vec4 p = permute(permute(permute(
               i.z + vec4(0.0, i1.z, i2.z, 1.0))
             + i.y + vec4(0.0, i1.y, i2.y, 1.0))
             + i.x + vec4(0.0, i1.x, i2.x, 1.0));
    float n_ = 1.0 / 7.0;
    vec3 ns = n_ * D.wyz - D.xzx;
    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_);
    vec4 x = x_ * ns.x + ns.yyyy;
    vec4 y = y_ * ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);
    vec4 b0 = vec4(x.xy, y.xy);
    vec4 b1 = vec4(x.zw, y.zw);
    vec4 s0 = floor(b0) * 2.0 + 1.0;
    vec4 s1 = floor(b1) * 2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));
    vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
    vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
    vec3 p0 = vec3(a0.xy, h.x);
    vec3 p1 = vec3(a0.zw, h.y);
    vec3 p2 = vec3(a1.xy, h.z);
    vec3 p3 = vec3(a1.zw, h.w);
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2,p2), dot(p3,p3)));
    p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot(m * m, vec4(dot(p0,x0), dot(p1,x1), dot(p2,x2), dot(p3,x3)));
  }

  float fbm(vec3 p) {
    float value = 0.0;
    float amp = 0.52;
    float freq = 1.0;
    for (int i = 0; i < 4; i++) {
      value += amp * snoise(p * freq);
      freq *= 2.05;
      amp *= 0.48;
    }
    return value;
  }
`,Xm=({isAudioActive:s=!1,audioEnergy:e=0,className:t=""})=>{const r=je.useRef(null),a=je.useRef({isAudioActive:s,audioEnergy:e});return a.current={isAudioActive:s,audioEnergy:e},je.useEffect(()=>{const l=r.current;if(!l)return;const u=new rf,d=new Cn(38,l.clientWidth/Math.max(1,l.clientHeight),.1,50);d.position.set(0,0,5.8);const h=new af({antialias:!0,alpha:!0,powerPreference:"high-performance"});h.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),h.setSize(l.clientWidth,l.clientHeight),h.domElement.style.pointerEvents="auto",h.domElement.style.touchAction="pan-y",l.appendChild(h.domElement);const p={uTime:{value:0},uContourFreq:{value:12},uSpikeGain:{value:1.75},uAudioEnergy:{value:0},uShockwave:{value:0},uPointerLocal:{value:new q(0,0,1)},uPointerStrength:{value:0}},v=new Qr;u.add(v);const g=new eo(.76,64,64),_=new pn({uniforms:p,transparent:!0,blending:Jr,depthWrite:!1,vertexShader:`
        varying vec3 vNormal;
        varying vec3 vLocalPos;
        varying vec3 vViewPos;
        void main() {
          vLocalPos = position;
          vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
          vViewPos = -mvPosition.xyz;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uAudioEnergy;
        varying vec3 vNormal;
        varying vec3 vLocalPos;
        varying vec3 vViewPos;

        ${jm}

        void main() {
          vec3 N = normalize(vNormal);
          vec3 V = normalize(vViewPos);
          float ndotv = max(dot(N, V), 0.0);

          float t = uTime * 0.28;
          float n1 = fbm(vLocalPos * 2.6 + vec3(t, -t * 0.8, t * 0.6));
          float n2 = fbm(vLocalPos * 4.2 - vec3(t * 0.9, t * 0.7, -t * 0.8));
          float plasma = smoothstep(-0.25, 0.75, n1 * 0.65 + n2 * 0.35);

          vec3 deepIndigo   = vec3(0.08, 0.14, 0.55);
          vec3 electricCyan = vec3(0.00, 0.90, 1.00);
          vec3 coreWhite    = vec3(0.85, 0.98, 1.00);

          vec3 col = mix(deepIndigo, electricCyan, plasma);
          col = mix(col, coreWhite, pow(plasma, 2.5) * 0.75);

          float coreFalloff = pow(ndotv, 1.15);
          float pulse = 0.85 + 0.15 * sin(uTime * 1.1) + uAudioEnergy * 0.45;
          gl_FragColor = vec4(col * pulse * 1.25, coreFalloff * 0.85);
        }
      `}),S=new cn(g,_);v.add(S);const M=new eo(1.12,192,192),E=new pn({uniforms:p,transparent:!0,side:wi,extensions:{derivatives:!0},vertexShader:`
        uniform float uTime;
        uniform float uSpikeGain;
        uniform float uAudioEnergy;
        uniform float uShockwave;
        uniform vec3 uPointerLocal;
        uniform float uPointerStrength;

        varying float vElevation;
        varying vec3 vNormal;
        varying vec3 vViewPos;
        varying vec3 vLocalDir;

        ${jm}

        void main() {
          vec3 dir = normalize(position);
          vLocalDir = dir;

          float baseNoise = fbm(dir * 2.1 + vec3(uTime * 0.06, -uTime * 0.05, uTime * 0.055));
          float rawSpike = max(0.0, snoise(dir * 3.6 - vec3(uTime * 0.07, uTime * 0.06, -uTime * 0.05)));
          float spikeField = pow(rawSpike, 1.4) * 1.35 * uSpikeGain;
          float secondarySpikes = pow(max(0.0, snoise(dir * 5.4 + vec3(uTime * 0.05, 0.0, -uTime * 0.06))), 2.0) * 0.65 * uSpikeGain;
          float detailNoise = snoise(dir * 4.4 - vec3(uTime * 0.08, uTime * 0.07, 0.0)) * 0.12;

          float distToCursor = distance(dir, normalize(uPointerLocal));
          float pull = exp(-distToCursor * 3.0) * uPointerStrength * 0.18;
          float wave = sin((distToCursor - uShockwave * 2.4) * 12.0)
                     * exp(-abs(distToCursor - uShockwave * 2.4) * 5.5)
                     * sin(uShockwave * 3.14159) * 0.14;

          float elevation = baseNoise * 0.60 + spikeField + secondarySpikes + detailNoise + pull + wave;
          vElevation = elevation;

          // Invariant spike displacement amplitude: locked at 0.36 with zero change on tap
          float dispAmp = 0.36;
          vec3 displaced = position + dir * (elevation * dispAmp);

          vec4 mvPosition = modelViewMatrix * vec4(displaced, 1.0);
          vViewPos = -mvPosition.xyz;
          vNormal = normalize(normalMatrix * dir);
          gl_Position = projectionMatrix * mvPosition;
        }
      `,fragmentShader:`
        uniform float uTime;
        uniform float uContourFreq;
        uniform float uAudioEnergy;

        varying float vElevation;
        varying vec3 vNormal;
        varying vec3 vViewPos;
        varying vec3 vLocalDir;

        void main() {
          vec3 N = normalize(vNormal);
          if (!gl_FrontFacing) N = -N;
          vec3 V = normalize(vViewPos);
          float ndotv = max(dot(N, V), 0.0);
          float fresnel = pow(1.0 - ndotv, 2.2);

          float h = vElevation * 0.5 + 0.5;
          float coord = h * uContourFreq;
          float distToLine = abs(fract(coord - 0.5) - 0.5);
          float fw = max(fwidth(coord), 0.002);
          float primaryLine = 1.0 - smoothstep(0.0, fw * 1.45, distToLine);

          vec3 obsidianValley = vec3(0.015, 0.022, 0.055);
          vec3 cobaltMid      = vec3(0.045, 0.130, 0.380);
          vec3 electricCyan   = vec3(0.000, 0.898, 1.000);
          vec3 brightIce      = vec3(0.750, 0.980, 1.000);

          vec3 surfaceCol = mix(obsidianValley, cobaltMid, smoothstep(0.22, 0.72, h));
          float ridgeGlow = smoothstep(0.45, 0.95, h);
          vec3 lineCol = mix(electricCyan, brightIce, ridgeGlow * 0.65);

          float contourIntensity = primaryLine * (0.68 + ridgeGlow * 0.45 + uAudioEnergy * 0.3);
          vec3 finalCol = surfaceCol + lineCol * contourIntensity;
          finalCol += electricCyan * fresnel * (0.42 + uAudioEnergy * 0.25);

          float alpha = clamp(0.48 + contourIntensity * 0.55 + fresnel * 0.42, 0.0, 0.96);
          gl_FragColor = vec4(finalCol, alpha);
        }
      `}),y=new cn(M,E);v.add(y);let x=0,D=0,N=!1,R=0,k=.08,O=0,U=.08;const j=new q(1,0,0),P=new q(0,1,0);let C=!1,B=!1,se=0,Q=null;const ue=ye=>{x=ye.clientX,D=ye.clientY,N=!0},de=ye=>{Q={x:ye.clientX,y:ye.clientY},x=ye.clientX,D=ye.clientY,N=!0},re=ye=>{Q&&Math.hypot(ye.clientX-Q.x,ye.clientY-Q.y)<8&&(C=!C,B=!0,se=0,k+=.25),Q=null},le=ye=>{if(N){const Fe=ye.clientX-x,Ve=ye.clientY-D,Pt=Math.max(-35,Math.min(35,Fe)),Ct=Math.max(-35,Math.min(35,Ve)),at=.0045;k+=Pt*at*16,R+=Ct*at*16,k=Math.max(-1.8,Math.min(1.8,k)),R=Math.max(-1.8,Math.min(1.8,R))}x=ye.clientX,D=ye.clientY,N=!0},V=()=>{N=!1};l.addEventListener("pointerenter",ue,{passive:!0}),l.addEventListener("pointerdown",de,{passive:!0}),l.addEventListener("pointerup",re,{passive:!0}),l.addEventListener("pointermove",le,{passive:!0}),l.addEventListener("pointerleave",V,{passive:!0});let ce=0,oe=0;const F=()=>{if(!l)return;const ye=l.clientWidth,Fe=Math.max(1,l.clientHeight);d.aspect=ye/Fe,d.updateProjectionMatrix(),h.setPixelRatio(Math.min(window.devicePixelRatio||1,1.75)),h.setSize(ye,Fe)};window.addEventListener("resize",F);const ie=new ts().setFromEuler(new mi(.15,.2,0)),Le=new ts;let ee=0,he=performance.now(),Se=0;const xe=()=>{const ye=performance.now(),Fe=Math.min((ye-he)/1e3,.033);he=ye,Se+=Fe,p.uTime.value=Se;const Ve=1-Math.exp(-6*Fe),{isAudioActive:Pt,audioEnergy:Ct}=a.current;p.uSpikeGain.value=1.75;const z=Pt?Ct>0?Ct:.35+.25*Math.sin(Se*3.2):C?.4:0;if(p.uAudioEnergy.value+=(z-p.uAudioEnergy.value)*Ve,B){se+=Fe;const fe=Math.min(se/1.15,1);p.uShockwave.value=fe,fe>=1&&(B=!1,p.uShockwave.value=0)}const{x:un,y:ht}=Fg.update();ce+=(un-ce)*.012,oe+=(ht-oe)*.012;const dt=ce*.45,Ke=oe*.32,Rt=Math.sin(Se*.04)*.015,Xe=Math.cos(Se*.03)*.012,L=typeof window<"u"?window.scrollY:0,J=Math.max(0,L-120)*.003;v.position.set(Rt+dt,Xe+Ke-J,0);const me=1-Math.exp(-3.5*Fe);R+=(0-R)*me,k+=(.08-k)*me;const ge=.07;O+=(R-O)*ge,U+=(k-U)*ge,Le.setFromAxisAngle(P,U*Fe),ie.premultiply(Le),Le.setFromAxisAngle(j,O*Fe),ie.premultiply(Le),ie.normalize(),v.quaternion.copy(ie),d.position.set(-ce*.12,-oe*.08,5.8),d.lookAt(0,0,0),h.render(u,d),ee=requestAnimationFrame(xe)};return ee=requestAnimationFrame(xe),()=>{cancelAnimationFrame(ee),l.removeEventListener("pointerenter",ue),l.removeEventListener("pointerdown",de),l.removeEventListener("pointerup",re),l.removeEventListener("pointermove",le),l.removeEventListener("pointerleave",V),window.removeEventListener("resize",F),g.dispose(),_.dispose(),M.dispose(),E.dispose(),h.dispose(),h.domElement.parentNode===l&&l.removeChild(h.domElement)}},[]),b.jsx("div",{ref:r,className:`w-full h-full cursor-grab active:cursor-grabbing select-none overflow-visible ${t}`,style:{touchAction:"pan-y"}})},AE=({profile:s})=>{const[e,t]=je.useState(Xs.getStatus()),[r,a]=je.useState(null);je.useEffect(()=>Xs.subscribe(d=>t(d)),[]),je.useEffect(()=>{if(!e){a(null);return}let d;const h=()=>{a(Xs.getAudioBands()),d=requestAnimationFrame(h)};return d=requestAnimationFrame(h),()=>cancelAnimationFrame(d)},[e]);const l=d=>{d.preventDefault(),$d("#manifesto",0)},u=r?Math.min(1,r.bass*.6+r.mid*.3+r.high*.1):0;return b.jsx("section",{id:"home",className:"relative h-screen min-h-[580px] max-h-screen flex flex-col justify-between pt-14 sm:pt-16 pb-4 sm:pb-6 overflow-hidden",children:b.jsxs("div",{className:"max-w-7xl mx-auto w-full h-full px-6 sm:px-10 flex flex-col justify-between flex-1",children:[b.jsxs("div",{className:"flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-1 z-20",children:[b.jsxs("div",{className:"flex items-center gap-2.5",children:[b.jsx("span",{className:"w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse"}),b.jsx("span",{className:"text-[11px] sm:text-xs font-mono uppercase tracking-[0.24em] text-cyan-300/90 font-medium",children:"FULL-STACK SYSTEMS ARCHITECT · 3D WEBGL DEVELOPER"})]}),b.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-slate-300/90 tracking-wider",children:[b.jsx($w,{className:"w-3.5 h-3.5 text-cyan-400"}),b.jsx("span",{children:"Addis Ababa, Ethiopia · UTC+3"})]})]}),b.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center my-auto relative flex-1",children:[b.jsx("div",{className:"hidden md:block absolute z-[5] overflow-visible",style:{left:"54%",top:"52%",transform:"translate(-50%, -50%)",width:"clamp(340px, 34vw, 480px)",height:"clamp(340px, 34vw, 480px)"},children:b.jsx(Xm,{isAudioActive:e,audioEnergy:u})}),b.jsx("div",{className:"lg:col-span-7 flex flex-col justify-center z-20",children:b.jsxs("h1",{className:"text-5xl sm:text-6xl md:text-7xl lg:text-7xl xl:text-8xl font-serif font-normal tracking-[-0.03em] text-white leading-[0.95] drop-shadow-[0_12px_40px_rgba(0,0,0,0.85)]",children:["Binyam ",b.jsx("span",{className:"font-serif italic font-normal text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 via-sky-100 to-white",children:"Kebru"})]})}),b.jsx("div",{className:"block md:hidden z-[5] relative mx-auto my-6 overflow-visible",style:{width:"280px",height:"280px"},children:b.jsx(Xm,{isAudioActive:e,audioEnergy:u})}),b.jsx("div",{className:"lg:col-span-5 flex flex-col items-center lg:items-end justify-center relative w-full z-20",children:b.jsx(bE,{portraitUrl:s.portraitUrl,name:"Binyam Kebru"})})]}),b.jsxs("div",{className:"pt-2 pb-1 sm:pb-2 z-20 flex flex-col sm:flex-row items-stretch sm:items-center gap-3 sm:gap-4 max-w-3xl",children:[b.jsx("div",{className:"flex-1 px-4 py-3 sm:py-3.5 rounded-xl bg-transparent border border-white/[0.08] transition-colors duration-300 hover:border-white/[0.16]",children:b.jsx("p",{className:"text-xs sm:text-[13px] text-slate-400 font-sans leading-relaxed font-light tracking-wide",children:"Architecting resilient full-stack systems and high-fidelity 3D spatial web experiences with precision engineering and thoughtful minimalism."})}),b.jsxs("a",{href:"#about",onClick:l,className:"group px-5 py-3 sm:py-3.5 rounded-xl bg-transparent hover:bg-transparent border border-white/[0.08] hover:border-white/[0.16] transition-colors duration-300 flex items-center justify-center gap-2.5 cursor-pointer shrink-0",children:[b.jsx("span",{className:"text-xs font-mono tracking-widest uppercase text-cyan-400 group-hover:text-cyan-300 transition-colors font-medium",children:"Explore Story & Work"}),b.jsx(pw,{className:"w-3.5 h-3.5 text-cyan-400 transition-transform duration-300 group-hover:translate-y-0.5"})]})]})]})})},Rl=[{id:"frontend",label:"Crafting Interfaces",icon:Vg,description:"Building high-framerate, accessible, and tactile web applications with spatial depth.",technologies:["React 18","TypeScript","Tailwind CSS","Three.js / WebGL","Framer Motion","Vite"]},{id:"backend",label:"Backend & Systems",icon:rE,description:"Architecting robust, low-latency microservices, REST APIs, and event-driven pipelines.",technologies:["Node.js","Express","WebSockets","Rate Limiting","JWT / Auth","Linux / Bash"]},{id:"data",label:"Data & Deployment",icon:Pw,description:"Ensuring zero data loss with offline caching, document databases, and continuous delivery.",technologies:["MongoDB Atlas","IndexedDB","Render Cloud","Firebase Auth","Git / GitHub CI"]}],CE=()=>{const[s,e]=je.useState(Rl[0].id),t=Rl.find(r=>r.id===s)||Rl[0];return b.jsxs("div",{className:"w-full space-y-6",children:[b.jsx("div",{className:"flex flex-wrap gap-2 p-1.5 rounded-2xl glass-panel border-white/10 max-w-fit",children:Rl.map(r=>{const a=r.icon,l=r.id===s;return b.jsxs("button",{onClick:()=>e(r.id),className:`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${l?"bg-cyan-500/20 text-cyan-300 border border-cyan-400/40 shadow-[0_0_15px_rgba(56,189,248,0.2)]":"text-slate-400 hover:text-slate-200 hover:bg-white/[0.02]"}`,children:[b.jsx(a,{className:`w-4 h-4 ${l?"text-cyan-400":"text-slate-500"}`}),b.jsx("span",{children:r.label})]},r.id)})}),b.jsxs("div",{className:"p-6 rounded-2xl glass-card border-white/10 space-y-4",children:[b.jsx("p",{className:"text-slate-300 text-sm sm:text-base font-sans leading-relaxed",children:t.description}),b.jsx("div",{className:"flex flex-wrap gap-2 pt-2",children:t.technologies.map(r=>b.jsx("span",{className:"px-3 py-1 rounded-lg text-xs font-mono font-medium bg-white/[0.04] text-slate-300 border border-white/10",children:r},r))})]})]})},RE=({profile:s})=>{const e=[Gg,oE,Ow];return b.jsxs("section",{id:"about",className:"relative min-h-screen flex flex-col justify-center py-20 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto space-y-20",children:[b.jsxs("div",{className:"space-y-4 max-w-2xl",children:[b.jsx("span",{className:"text-xs font-mono text-cyan-400 tracking-wider uppercase",children:"// 01. The Human Behind The Code"}),b.jsx("h2",{className:"text-3xl sm:text-5xl font-display font-bold text-white tracking-tight",children:"Curiosity, Discipline, & The Long Arc of Mastery"})]}),b.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8 items-start",children:[b.jsx("div",{className:"space-y-4 text-slate-300 font-sans leading-relaxed text-base sm:text-lg",children:s.aboutStory.slice(0,2).map((t,r)=>b.jsx("p",{children:t},r))}),b.jsx("div",{className:"space-y-4 text-slate-300 font-sans leading-relaxed text-base sm:text-lg",children:s.aboutStory.slice(2).map((t,r)=>b.jsx("p",{children:t},r))})]}),b.jsxs("div",{className:"space-y-8",children:[b.jsx("h3",{className:"text-xl sm:text-2xl font-display font-semibold text-white",children:"What Guides My Everyday Engineering"}),b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:s.innerValues.map((t,r)=>{const a=e[r%e.length];return b.jsxs("div",{className:"p-6 rounded-2xl glass-card border-white/10 hover:border-cyan-500/40 space-y-4 group transition-all duration-300",children:[b.jsx("div",{className:"w-10 h-10 rounded-xl bg-cyan-950/40 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform",children:b.jsx(a,{className:"w-5 h-5"})}),b.jsxs("div",{children:[b.jsx("h4",{className:"text-base font-display font-semibold text-white",children:t.title}),b.jsx("span",{className:"text-xs font-mono text-amber-400/90",children:t.principle})]}),b.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:t.description})]},t.title)})})]}),b.jsxs("div",{className:"space-y-8",children:[b.jsx("h3",{className:"text-xl sm:text-2xl font-display font-semibold text-white",children:"How I Build: Stack & Methodologies"}),b.jsx(CE,{})]}),b.jsxs("div",{className:"space-y-8",children:[b.jsx("h3",{className:"text-xl sm:text-2xl font-display font-semibold text-white",children:"Milestones Along The Path"}),b.jsx("div",{className:"relative border-l border-white/10 ml-4 sm:ml-6 pl-6 sm:pl-8 space-y-10",children:s.journeyMilestones.map((t,r)=>b.jsxs("div",{className:"relative group",children:[b.jsx("div",{className:"absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-obsidian-deep border-2 border-cyan-400 group-hover:scale-125 transition-transform"}),b.jsxs("div",{className:"space-y-2",children:[b.jsxs("div",{className:"flex items-center gap-3",children:[b.jsxs("span",{className:"flex items-center gap-1 text-xs font-mono text-amber-400",children:[b.jsx(yw,{className:"w-3.5 h-3.5"}),t.year]}),b.jsx("h4",{className:"text-base sm:text-lg font-display font-semibold text-white",children:t.title})]}),b.jsx("p",{className:"text-slate-400 text-sm max-w-2xl leading-relaxed",children:t.story}),b.jsx("div",{className:"flex flex-wrap gap-1.5 pt-1",children:t.tags.map(a=>b.jsx("span",{className:"px-2.5 py-0.5 rounded-md text-[11px] font-mono text-slate-400 bg-white/[0.03] border border-white/5",children:a},a))})]})]},r))})]})]})},PE=({project:s,onExplore:e})=>b.jsx("div",{className:"relative group w-[340px] sm:w-[400px] shrink-0 p-1 runner-border-box transition-all duration-500",children:b.jsxs("div",{className:"relative z-10 w-full rounded-[14px] bg-[#0A1020]/90 backdrop-blur-xl border border-white/10 p-6 space-y-5 transition-colors duration-500 group-hover:bg-[#0D162B] group-hover:border-white/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)]",children:[b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsxs("span",{className:"inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium text-cyan-300 bg-cyan-950/60 border border-cyan-500/30",children:[b.jsx(Vg,{className:"w-3 h-3 text-cyan-400"}),s.category]}),b.jsxs("span",{className:"text-xs font-mono text-amber-400/90 font-medium",children:["0",s.orderIndex]})]}),b.jsxs("div",{className:"space-y-1.5",children:[b.jsx("h3",{className:"text-xl sm:text-2xl font-display font-bold text-white group-hover:text-cyan-300 transition-colors duration-300",children:s.title}),b.jsx("p",{className:"text-xs sm:text-sm text-slate-300 font-sans line-clamp-2 leading-relaxed",children:s.tagline})]}),b.jsx("div",{className:"grid grid-cols-3 gap-2 py-3 px-3.5 rounded-xl bg-white/[0.02] border border-white/5",children:s.metrics.map((t,r)=>b.jsxs("div",{className:"text-left space-y-0.5",children:[b.jsx("span",{className:"block text-[10px] font-mono text-slate-400 uppercase tracking-wider truncate",children:t.label}),b.jsx("span",{className:"block text-sm sm:text-base font-display font-bold text-amber-400",children:t.value})]},r))}),b.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[s.techStack.slice(0,4).map(t=>b.jsx("span",{className:"px-2.5 py-0.5 rounded-md text-[11px] font-mono text-slate-300 bg-white/[0.04] border border-white/10",children:t},t)),s.techStack.length>4&&b.jsxs("span",{className:"px-2 py-0.5 rounded-md text-[11px] font-mono text-cyan-400 bg-cyan-950/40",children:["+",s.techStack.length-4]})]}),b.jsxs("div",{className:"pt-2 flex items-center justify-between gap-3 border-t border-white/10",children:[b.jsxs("button",{onClick:()=>e(s),className:"flex-1 inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl text-xs font-mono font-medium text-slate-200 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors active:scale-95",children:[b.jsx(Gg,{className:"w-3.5 h-3.5 text-cyan-400"}),b.jsx("span",{children:"Deep Dive Story"})]}),b.jsx("a",{href:s.liveUrl,target:"_blank",rel:"noopener noreferrer","aria-label":`Open live deployment for ${s.title}`,className:"inline-flex items-center justify-center p-2.5 rounded-xl text-cyan-400 bg-cyan-950/40 hover:bg-cyan-900/50 border border-cyan-500/30 hover:border-cyan-400 transition-colors",children:b.jsx(Bg,{className:"w-4 h-4"})})]})]})}),NE=({onRotate:s})=>{const e=je.useRef(null),[t,r]=je.useState(0),a=je.useRef(!1),l=je.useRef(0),u=p=>{var v,g;a.current=!0,l.current=p.clientX,(g=(v=p.target).setPointerCapture)==null||g.call(v,p.pointerId)},d=p=>{if(!a.current)return;const v=p.clientX-l.current;l.current=p.clientX,r(g=>g+v*1.5),s(v*3.5)},h=()=>{a.current=!1};return je.useEffect(()=>{const p=g=>{var _;if((_=e.current)!=null&&_.contains(g.target)){g.preventDefault();const S=-g.deltaY*.8;r(M=>M+S),s(S*2.5)}},v=e.current;return v==null||v.addEventListener("wheel",p,{passive:!1}),()=>v==null?void 0:v.removeEventListener("wheel",p)},[s]),b.jsxs("div",{className:"flex flex-col items-center justify-center space-y-2 pt-6 select-none",children:[b.jsxs("div",{className:"flex items-center gap-2 text-xs font-mono text-slate-400",children:[b.jsx(tE,{className:"w-3.5 h-3.5 text-cyan-400 animate-spin-slow"}),b.jsx("span",{children:"Drag or scroll windlass wheel to scrub"})]}),b.jsx("div",{ref:e,onPointerDown:u,onPointerMove:d,onPointerUp:h,onPointerCancel:h,className:"relative w-28 h-28 sm:w-32 sm:h-32 rounded-full cursor-ew-resize touch-none flex items-center justify-center p-2 rounded-full bg-gradient-to-b from-white/10 to-transparent border border-white/20 shadow-[0_10px_25px_rgba(0,0,0,0.6)] group hover:border-cyan-400/50 transition-colors","aria-label":"Windlass Rotary Scrubber",role:"slider","aria-valuenow":Math.round(t),children:b.jsxs("div",{style:{transform:`rotate(${t}deg)`},className:"relative w-full h-full rounded-full flex items-center justify-center border-2 border-dashed border-cyan-400/40 group-hover:border-cyan-400/80 transition-transform duration-75",children:[[0,45,90,135].map(p=>b.jsx("div",{style:{transform:`rotate(${p}deg)`},className:"absolute w-full h-[1.5px] bg-white/20 group-hover:bg-cyan-400/30"},p)),b.jsx("div",{className:"w-8 h-8 rounded-full bg-obsidian-deep border-2 border-amber-400/80 flex items-center justify-center shadow-[0_0_10px_rgba(245,158,11,0.5)]",children:b.jsx("div",{className:"w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_6px_#38bdf8]"})})]})})]})},LE=({project:s})=>{const[e,t]=je.useState([{id:"#B-101",status:"Ready for Pickup",time:"12:15"},{id:"#B-102",status:"In Kitchen Oven",time:"12:17"}]),[r,a]=je.useState(48),[l,u]=je.useState([{name:"Server Hosting",amount:12},{name:"Domain Registration",amount:8}]),[d,h]=je.useState([!0,!0,!0,!1,!0,!0,!1]),[p,v]=je.useState(`### Architecture Note
* Verified zero-latency typing.
* Local state synced.`);return s.previewType==="cafeteria-demo"?b.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3",children:[b.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[b.jsxs("span",{className:"text-cyan-400 flex items-center gap-1.5",children:[b.jsx(_E,{className:"w-3.5 h-3.5"})," WebSocket Feed"]}),b.jsxs("span",{className:"text-amber-400",children:["Dispatch Latency: ",r,"ms"]})]}),b.jsx("div",{className:"space-y-1.5 max-h-36 overflow-y-auto",children:e.map(g=>b.jsxs("div",{className:"flex items-center justify-between p-2 rounded-lg bg-black/40 border border-white/5 text-xs",children:[b.jsx("span",{className:"font-mono text-white font-medium",children:g.id}),b.jsx("span",{className:"text-cyan-300 font-mono",children:g.status}),b.jsx("span",{className:"text-slate-500 text-[11px]",children:g.time})]},g.id))}),b.jsxs("button",{onClick:()=>{a(Math.floor(30+Math.random()*45)),t(g=>[...g,{id:`#B-${103+g.length}`,status:"Ticket Queued",time:"Just now"}])},className:"w-full flex items-center justify-center gap-2 py-2 rounded-xl text-xs font-mono bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 border border-cyan-400/40",children:[b.jsx(lE,{className:"w-3.5 h-3.5"})," Dispatch Test Order"]})]}):s.previewType==="expense-chart"?b.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3",children:[b.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[b.jsxs("span",{className:"text-amber-400 flex items-center gap-1.5",children:[b.jsx(Lw,{className:"w-3.5 h-3.5"})," Offline PWA Cache"]}),b.jsxs("span",{className:"text-emerald-400",children:["Total: $",l.reduce((g,_)=>g+_.amount,0)]})]}),b.jsx("div",{className:"space-y-1.5 max-h-36 overflow-y-auto",children:l.map((g,_)=>b.jsxs("div",{className:"flex justify-between p-2 rounded-lg bg-black/40 border border-white/5 text-xs",children:[b.jsx("span",{className:"text-slate-300",children:g.name}),b.jsxs("span",{className:"font-mono text-amber-400",children:["$",g.amount]})]},_))}),b.jsx("button",{onClick:()=>u(g=>[...g,{name:"Dev Tooling",amount:5}]),className:"w-full py-2 rounded-xl text-xs font-mono bg-amber-500/20 text-amber-300 border border-amber-400/40",children:"+ Add Offline Expense"})]}):s.previewType==="markdown-live"?b.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3",children:[b.jsxs("div",{className:"flex items-center justify-between text-xs font-mono text-cyan-400",children:[b.jsxs("span",{className:"flex items-center gap-1.5",children:[b.jsx(Uw,{className:"w-3.5 h-3.5"})," Web Worker Compiler"]}),b.jsx("span",{className:"text-slate-400",children:"14ms AST parse"})]}),b.jsx("textarea",{rows:3,value:p,onChange:g=>v(g.target.value),className:"w-full p-2.5 rounded-lg bg-black/50 border border-white/10 text-xs font-mono text-cyan-200 resize-none"})]}):b.jsxs("div",{className:"p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-3",children:[b.jsxs("div",{className:"flex items-center justify-between text-xs font-mono",children:[b.jsx("span",{className:"text-cyan-400 font-semibold",children:"Interactive Habit Matrix"}),b.jsx("span",{className:"text-slate-400",children:"Tap days to toggle"})]}),b.jsx("div",{className:"flex gap-2 justify-center py-2",children:d.map((g,_)=>b.jsxs("button",{onClick:()=>h(S=>S.map((M,E)=>E===_?!M:M)),className:`w-9 h-11 rounded-lg flex flex-col items-center justify-center gap-1 transition-all ${g?"bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 shadow-[0_0_10px_rgba(16,185,129,0.3)]":"bg-white/[0.02] border border-white/5 text-slate-500"}`,children:[b.jsxs("span",{className:"text-[10px] font-mono",children:["D",_+1]}),g?b.jsx(Og,{className:"w-3 h-3 text-emerald-400"}):b.jsx(Jw,{className:"w-3 h-3 opacity-40"})]},_))})]})},DE=({project:s,onClose:e})=>(je.useEffect(()=>{const t=r=>{r.key==="Escape"&&e()};return window.addEventListener("keydown",t),()=>window.removeEventListener("keydown",t)},[e]),s?b.jsxs("div",{className:"fixed inset-0 z-50 flex justify-end",children:[b.jsx("div",{onClick:e,className:"absolute inset-0 bg-black/70 backdrop-blur-sm transition-opacity","aria-hidden":"true"}),b.jsxs("div",{className:"relative z-10 w-full max-w-xl h-full bg-[#080E1C] border-l border-white/10 shadow-2xl overflow-y-auto p-6 sm:p-8 space-y-6",children:[b.jsxs("div",{className:"flex items-center justify-between border-b border-white/10 pb-4",children:[b.jsx("span",{className:"text-xs font-mono text-cyan-400 uppercase tracking-wider",children:s.category}),b.jsx("button",{onClick:e,"aria-label":"Close project drawer",className:"p-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.04] hover:bg-white/10 transition-colors",children:b.jsx(vE,{className:"w-5 h-5"})})]}),b.jsxs("div",{className:"space-y-2",children:[b.jsx("h3",{className:"text-2xl sm:text-3xl font-display font-bold text-white",children:s.title}),b.jsx("p",{className:"text-sm text-slate-300 font-sans leading-relaxed",children:s.tagline})]}),b.jsxs("div",{className:"space-y-2",children:[b.jsx("span",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider",children:"Live Interactive Playground"}),b.jsx(LE,{project:s})]}),b.jsxs("div",{className:"space-y-4 text-sm font-sans text-slate-300 leading-relaxed",children:[b.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1",children:[b.jsx("span",{className:"text-xs font-mono text-amber-400 uppercase font-semibold",children:"The Problem"}),b.jsx("p",{className:"text-slate-300 text-xs sm:text-sm",children:s.story.problem})]}),b.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1",children:[b.jsx("span",{className:"text-xs font-mono text-cyan-400 uppercase font-semibold",children:"Engineered Solution"}),b.jsx("p",{className:"text-slate-300 text-xs sm:text-sm",children:s.story.solution})]}),b.jsxs("div",{className:"p-4 rounded-xl bg-white/[0.02] border border-white/5 space-y-1",children:[b.jsx("span",{className:"text-xs font-mono text-emerald-400 uppercase font-semibold",children:"System Architecture"}),b.jsx("p",{className:"text-slate-300 text-xs sm:text-sm",children:s.story.architecture})]})]}),b.jsxs("div",{className:"space-y-2",children:[b.jsx("span",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider",children:"Key Highlights"}),b.jsx("div",{className:"space-y-2",children:s.highlights.map((t,r)=>b.jsxs("div",{className:"flex items-start gap-2 text-xs sm:text-sm text-slate-300",children:[b.jsx(zg,{className:"w-4 h-4 text-cyan-400 shrink-0 mt-0.5"}),b.jsx("span",{children:t})]},r))})]}),b.jsxs("div",{className:"space-y-2",children:[b.jsxs("span",{className:"text-xs font-mono text-slate-400 uppercase tracking-wider flex items-center gap-1.5",children:[b.jsx(Ew,{className:"w-3.5 h-3.5 text-cyan-400"})," Technologies Used"]}),b.jsx("div",{className:"flex flex-wrap gap-2",children:s.techStack.map(t=>b.jsx("span",{className:"px-3 py-1 rounded-lg text-xs font-mono bg-white/[0.05] border border-white/10 text-slate-300",children:t},t))})]}),b.jsxs("div",{className:"flex items-center gap-4 pt-4 border-t border-white/10",children:[b.jsxs("a",{href:s.liveUrl,target:"_blank",rel:"noopener noreferrer",className:"flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-mono font-medium text-cyan-300 bg-cyan-950/60 hover:bg-cyan-900/60 border border-cyan-500/40 transition-colors",children:[b.jsx(Bg,{className:"w-4 h-4"}),b.jsx("span",{children:"Launch Deployment"})]}),b.jsxs("a",{href:s.githubUrl,target:"_blank",rel:"noopener noreferrer",className:"flex-1 inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-xs sm:text-sm font-mono font-medium text-slate-300 bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 transition-colors",children:[b.jsx(Hg,{className:"w-4 h-4"}),b.jsx("span",{children:"View Source Code"})]})]})]})]}):null),IE=({projects:s})=>{const e=je.useRef(null),[t,r]=je.useState(null),[a,l]=je.useState(!1),u=je.useRef(.8),d=je.useRef(0);je.useEffect(()=>{let v;const g=()=>{if(!a&&e.current){d.current+=u.current;const _=e.current.scrollWidth-e.current.clientWidth;d.current>_?d.current=0:d.current<0&&(d.current=_),e.current.scrollLeft=d.current}v=requestAnimationFrame(g)};return v=requestAnimationFrame(g),()=>cancelAnimationFrame(v)},[a]);const h=v=>{const{clientX:g}=v,{innerWidth:_}=window,S=g/_*2-1;u.current=S*2.2},p=v=>{e.current&&(d.current+=v,e.current.scrollLeft=d.current)};return b.jsxs("section",{id:"projects",onMouseMove:h,className:"relative min-h-screen flex flex-col justify-center py-20 sm:py-24 px-4 sm:px-8 space-y-12 overflow-hidden",children:[b.jsxs("div",{className:"max-w-7xl mx-auto px-4 space-y-3",children:[b.jsx("span",{className:"text-xs font-mono text-cyan-400 tracking-wider uppercase",children:"// 02. Flagship Implementations"}),b.jsxs("div",{className:"flex flex-col sm:flex-row sm:items-end justify-between gap-4",children:[b.jsx("h2",{className:"text-3xl sm:text-5xl font-display font-bold text-white tracking-tight",children:"Engineered Systems & Live Products"}),b.jsx("span",{className:"text-xs font-mono text-slate-400",children:"Auto-gliding track • Steer with mouse or scrubber"})]})]}),b.jsx("div",{ref:e,onMouseEnter:()=>l(!0),onMouseLeave:()=>l(!1),className:"flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 px-6 select-none",style:{scrollbarWidth:"none",msOverflowStyle:"none"},children:s.map(v=>b.jsx(PE,{project:v,onExplore:r},v._id))}),b.jsx(NE,{onRotate:p}),b.jsx(DE,{project:t,onClose:()=>r(null)})]})},UE=({profile:s})=>{const e=[bw,dE,Hw];return b.jsxs("section",{id:"vision",className:"relative min-h-screen flex flex-col justify-center py-20 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto space-y-16",children:[b.jsxs("div",{className:"space-y-4 max-w-3xl",children:[b.jsx("span",{className:"text-xs font-mono text-cyan-400 tracking-wider uppercase",children:"// 03. Future Horizon & Trajectory"}),b.jsx("h2",{className:"text-3xl sm:text-5xl font-display font-bold text-white tracking-tight",children:"Where Code Meets Purpose"}),b.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed",children:"Technology is most transformative when applied to foundational challenges. Here is where my academic journey and technical ambitions are aimed."})]}),b.jsx("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:s.visionPillars.map((t,r)=>{const a=e[r%e.length];return b.jsxs("div",{className:"relative p-7 rounded-3xl glass-card border-white/10 hover:border-amber-400/40 space-y-5 group transition-all duration-300",children:[b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("span",{className:"px-3 py-1 rounded-full text-xs font-mono text-amber-300 bg-amber-950/40 border border-amber-500/30",children:t.phase}),b.jsx("span",{className:"text-xs font-mono text-slate-400",children:t.horizon})]}),b.jsx("div",{className:"w-12 h-12 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 transition-transform",children:b.jsx(a,{className:"w-6 h-6"})}),b.jsxs("div",{className:"space-y-2",children:[b.jsx("h3",{className:"text-lg font-display font-bold text-white group-hover:text-amber-300 transition-colors",children:t.title}),b.jsx("p",{className:"text-slate-400 text-sm leading-relaxed",children:t.description})]})]},t.title)})}),b.jsxs("div",{className:"p-8 sm:p-10 rounded-3xl glass-panel border-white/10 space-y-8",children:[b.jsxs("div",{className:"space-y-2",children:[b.jsxs("div",{className:"flex items-center gap-2 text-cyan-400 text-xs font-mono uppercase tracking-wider",children:[b.jsx(xw,{className:"w-4 h-4"}),b.jsx("span",{children:"Open Doors & Collaborations"})]}),b.jsx("h3",{className:"text-2xl sm:text-3xl font-display font-bold text-white",children:"How We Can Build Together"})]}),b.jsx("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4",children:s.opportunities.map(t=>b.jsxs("div",{className:"p-5 rounded-2xl bg-white/[0.03] border border-white/5 hover:border-cyan-500/30 space-y-3 transition-colors",children:[b.jsxs("div",{className:"flex items-center justify-between",children:[b.jsx("span",{className:"text-[11px] font-mono text-cyan-300 bg-cyan-950/40 px-2 py-0.5 rounded",children:t.tag}),b.jsx("span",{className:"w-2 h-2 rounded-full bg-emerald-400 animate-pulse"})]}),b.jsx("h4",{className:"text-sm font-display font-semibold text-white",children:t.title}),b.jsx("p",{className:"text-slate-400 text-xs leading-relaxed",children:t.description})]},t.title))})]})]})},Wo=({label:s,value:e,href:t,icon:r})=>{const[a,l]=je.useState(!1),u=d=>{d.preventDefault(),d.stopPropagation(),navigator.clipboard.writeText(e),l(!0),setTimeout(()=>l(!1),2e3)};return b.jsxs("div",{className:"flex items-center justify-between p-3.5 rounded-2xl glass-card border-white/10 hover:border-cyan-400/40 transition-all duration-300 group",children:[b.jsxs("a",{href:t||e,target:t!=null&&t.startsWith("http")?"_blank":void 0,rel:"noopener noreferrer",className:"flex items-center gap-3 text-slate-200 group-hover:text-cyan-300 transition-colors flex-1 min-w-0",children:[b.jsx("div",{className:"w-8 h-8 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center text-cyan-400 shrink-0",children:b.jsx(r,{className:"w-4 h-4"})}),b.jsxs("div",{className:"truncate",children:[b.jsx("span",{className:"block text-[11px] font-mono text-slate-400 uppercase",children:s}),b.jsx("span",{className:"block text-xs sm:text-sm font-sans font-medium text-slate-200 truncate",children:e})]})]}),b.jsx("button",{onClick:u,type:"button",title:`Copy ${s} to clipboard`,"aria-label":`Copy ${s}`,className:"p-2 ml-2 rounded-xl text-slate-400 hover:text-white bg-white/[0.03] hover:bg-white/10 transition-colors shrink-0",children:a?b.jsx(Og,{className:"w-4 h-4 text-emerald-400"}):b.jsx(Cw,{className:"w-4 h-4 text-slate-400 hover:text-cyan-400"})})]})},Wg="/api";async function FE(){try{const s=await fetch(`${Wg}/portfolio`,{headers:{Accept:"application/json"}});return s.ok?await s.json():null}catch{return null}}async function kE(s){try{const e=await fetch(`${Wg}/contact`,{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(s)});return e.ok?{success:!0,messageId:(await e.json()).messageId}:{success:!1,error:(await e.json().catch(()=>({}))).error||"Failed to submit dispatch"}}catch(e){return{success:!1,error:e.message||"Network error"}}}const OE=({profile:s})=>{const[e,t]=je.useState(!1),[r,a]=je.useState(!1),[l,u]=je.useState({name:"",email:"",message:""}),d=async h=>{h.preventDefault(),!(!l.name||!l.email||!l.message)&&(t(!0),await kE({senderName:l.name,senderEmail:l.email,opportunityType:"General Inquiry",message:l.message}),t(!1),a(!0),setTimeout(()=>{a(!1),u({name:"",email:"",message:""})},4500))};return b.jsxs("footer",{id:"contact",className:"relative min-h-screen flex flex-col justify-center py-20 sm:py-24 px-6 sm:px-10 max-w-7xl mx-auto space-y-14",children:[b.jsxs("div",{className:"space-y-4 max-w-2xl",children:[b.jsx("span",{className:"text-xs font-mono text-cyan-400 tracking-wider uppercase",children:"// 04. Start A Conversation"}),b.jsx("h2",{className:"text-3xl sm:text-5xl font-display font-bold text-white tracking-tight",children:"Let’s Build Something Meaningful"}),b.jsx("p",{className:"text-slate-300 text-sm sm:text-base leading-relaxed",children:"Whether you have an ambitious internship role, an engineering challenge, or an idea to discuss, my inbox is always open."})]}),b.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12 items-start",children:[b.jsxs("div",{className:"space-y-4",children:[b.jsx(Wo,{label:"Direct Email",value:s.socials.email,href:`mailto:${s.socials.email}`,icon:Yw}),b.jsx(Wo,{label:"GitHub Source",value:s.socials.github,href:s.socials.github,icon:Hg}),b.jsx(Wo,{label:"LinkedIn Profile",value:s.socials.linkedin,href:s.socials.linkedin,icon:Gw}),b.jsx(Wo,{label:"Telegram Chat",value:s.socials.telegram,href:s.socials.telegram,icon:Wm}),b.jsx(Wo,{label:"Phone",value:s.socials.phone,href:`tel:${s.socials.phone}`,icon:Zw})]}),b.jsxs("div",{className:"p-8 rounded-3xl glass-card border-white/10 space-y-6",children:[b.jsx("h3",{className:"text-lg font-display font-semibold text-white",children:"Send A Direct Dispatch"}),r?b.jsxs("div",{className:"p-6 rounded-2xl bg-cyan-950/40 border border-cyan-400/40 flex items-center gap-3 text-cyan-300",children:[b.jsx(zg,{className:"w-5 h-5 text-cyan-400 shrink-0"}),b.jsx("p",{className:"text-xs sm:text-sm font-sans",children:"Thank you! Your dispatch has been received. I will reply to you as soon as possible."})]}):b.jsxs("form",{onSubmit:d,className:"space-y-4",children:[b.jsx("div",{children:b.jsx("input",{type:"text",placeholder:"Your Name",required:!0,value:l.name,onChange:h=>u({...l,name:h.target.value}),className:"w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"})}),b.jsx("div",{children:b.jsx("input",{type:"email",placeholder:"Your Email Address",required:!0,value:l.email,onChange:h=>u({...l,email:h.target.value}),className:"w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors"})}),b.jsx("div",{children:b.jsx("textarea",{rows:4,placeholder:"What would you like to build or discuss?",required:!0,value:l.message,onChange:h=>u({...l,message:h.target.value}),className:"w-full px-4 py-3 rounded-xl bg-white/[0.03] border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-cyan-400 transition-colors resize-none"})}),b.jsxs("button",{type:"submit",disabled:e,className:"w-full inline-flex items-center justify-center gap-2 py-3 px-6 rounded-xl text-sm font-medium text-white bg-gradient-to-r from-cyan-500 to-sky-600 hover:from-cyan-400 hover:to-sky-500 transition-all shadow-[0_0_20px_rgba(56,189,248,0.25)] active:scale-98 disabled:opacity-60",children:[e?b.jsx(jw,{className:"w-4 h-4 animate-spin"}):b.jsx(Wm,{className:"w-4 h-4"}),b.jsx("span",{children:e?"Transmitting...":"Send Dispatch"})]})]})]})]}),b.jsxs("div",{className:"pt-12 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500",children:[b.jsx("span",{children:"Designed & Crafted by Biniyam Kibru Heramo • Addis Ababa"}),b.jsx("span",{children:"Living Space 3D WebGL • 60 FPS"})]})]})},zE={fullName:"Binyam Kebru",portraitUrl:"/image.png",headline:"Computer Science Student & Software Systems Builder",subheadline:"Crafting resilient full-stack architectures, high-performance web applications, and intuitive digital tools from Addis Ababa to the world.",location:"Addis Ababa, Ethiopia",timezone:"Africa/Addis_Ababa",availabilityStatus:"Open for Software Engineering Internships & Collaborations",scrollManifestoLines:["Software is more than syntax—it is a quiet discipline of clarity, patience, and deliberate purpose.","I don't look for shortcuts; I seek to understand how systems behave from the raw foundation to the user's touch.","True engineering isn't about complexity for its own sake—it's about removing friction and honoring human attention.","Every line committed today is a foundation stone for what tomorrow can become."],aboutStory:["My journey into technology began not in an established tech hub, but in Addis Ababa, driven by pure curiosity and the wonder of how a blank screen could transform into an interactive tool through code.","Without formal mentors early on, I learned to read source code, dissect documentation, and build every tool from scratch—learning full-stack engineering through direct experimentation and continuous debugging.","After completing Grade 12 with distinction and earning certification in the 5 Million Ethiopian Coders initiative, I entered university to study Computer Science, aiming to combine rigorous mathematical principles with modern software craftsmanship.","Today, I build web applications that emphasize real performance, clean architecture, and delightful tactile experiences. I am fascinated by distributed systems, intuitive interfaces, and the potential of software to solve everyday logistical challenges."],innerValues:[{title:"First-Principles Curiosity",principle:"Understand Before Abstracting",description:"Dissecting how databases execute queries, how browsers paint frames, and how networks transmit packets to build without blind assumptions."},{title:"Quiet Stoic Discipline",principle:"Consistency Over Motivation",description:"Showing up every day with steady dedication, writing maintainable code, and maintaining composure through challenging bugs and complex constraints."},{title:"Empathetic Craftsmanship",principle:"Respect The User's Attention",description:"Prioritizing snappy response times, offline-resilience, and thoughtful ergonomics so technology feels like a natural extension of thought."}],journeyMilestones:[{year:"2022",title:"The Spark & Self-Taught Foundations",story:"Wrote my very first lines of HTML, CSS, and JavaScript. Built dozens of small browser utilities, learning DOM mechanics and computational logic from first principles.",tags:["HTML5","CSS3","JavaScript","Algorithms"]},{year:"2023",title:"Full-Stack Architecture & Databases",story:"Transitioned to building complete backend APIs with Node.js and Express. Integrated relational and NoSQL databases, mastering state management, REST endpoints, and authentication.",tags:["Node.js","Express","MongoDB","REST APIs"]},{year:"2024",title:"National Recognition & 5M Coders Milestone",story:"Completed Grade 12 with high academic standing and graduated with honors from the 5 Million Ethiopian Coders initiative, consolidating full-stack programming proficiency.",tags:["5M Coders","Web Development","Database Systems"]},{year:"2025 - Present",title:"University Computer Science & Scaled Engineering",story:"Enrolled in university Computer Science to master algorithms, data structures, and operating systems while designing real-world PWAs, distributed systems, and spatial interfaces.",tags:["Computer Science","React","TypeScript","Three.js"]}],visionPillars:[{phase:"Current Horizon",title:"Mastering Core Computer Science Foundations",description:"Deepening knowledge of memory management, algorithmic complexity, distributed consensus, and clean software architecture.",horizon:"2025"},{phase:"Emerging Frontier",title:"Practical AI & Resilient Local Infrastructure",description:"Bridging software engineering with applied machine learning to solve agricultural logistics, local commerce bottlenecks, and digital access in emerging markets.",horizon:"2026 - 2027"},{phase:"Long-Term Mission",title:"Building Global High-Impact Technology",description:"Creating software products that empower creators, researchers, and communities worldwide with frictionless, beautiful digital infrastructure.",horizon:"2028 & Beyond"}],opportunities:[{title:"Software Engineering Internships",description:"Eager to contribute high-quality frontend or full-stack code to ambitious engineering teams.",active:!0,tag:"Internship"},{title:"Startup Co-Building & Full-Stack Projects",description:"Ready to pair up with innovative founders to build MVPs with speed, reliability, and polish.",active:!0,tag:"Collab"},{title:"Applied AI & Civic Research",description:"Open to research collaborations exploring AI applications in agriculture, health, and education.",active:!0,tag:"Research"},{title:"Open-Source Engineering",description:"Contributing to developer tooling, accessible component libraries, and web infrastructure.",active:!0,tag:"Open Source"}],socials:{github:"https://github.com/biniyamkibruheramo-boop",linkedin:"https://linkedin.com/in/biniyam-kibru-heramo",telegram:"https://t.me/biniyamkibru",email:"biniyamkibruheramo@gmail.com",phone:"+251 900 000 000"}},BE=[{_id:"proj-1",title:"CampusDine",tagline:"High-Concurrency Cafeteria Ordering & Live Queue Management",description:"An end-to-end digital ordering platform designed to eliminate physical queue congestion in university dining facilities with real-time order tracking and kitchen display feeds.",category:"Full-Stack Systems",accentColor:"cyan",orderIndex:1,techStack:["React","TypeScript","Node.js","Express","MongoDB","Tailwind CSS"],highlights:["Sub-80ms websocket queue updates across 500+ active student sessions","Dynamic ticket dispatching algorithm balancing kitchen load","Offline resilience with instant local caching"],previewType:"cafeteria-demo",thumbnailUrl:"/Biniyam Kibru.jpg",liveUrl:"https://campusdine.onrender.com",githubUrl:"https://github.com/biniyamkibruheramo-boop/campus-dine",metrics:[{label:"Queue Reduction",value:"65%"},{label:"Avg Latency",value:"<80ms"},{label:"Peak Sessions",value:"1.2k+"}],story:{problem:"University cafeteria lines often caused 40+ minute delays during lunch peaks, causing missed lectures and chaotic kitchen bottlenecks.",solution:"Engineered a lightweight mobile-first web app allowing students to order from anywhere on campus, paired with a real-time kitchen orchestration display.",architecture:"Node.js / Express microservice connected to MongoDB Atlas, with event-driven state updates to React clients over WebSockets."}},{_id:"proj-2",title:"PulseTrack",tagline:"Zero-Latency Offline-First Expense & Cashflow Intelligence PWA",description:"A progressive web application built for instant transaction recording with zero network dependency, auto-categorization, and intuitive visual spending velocity breakdowns.",category:"PWAs & Productivity",accentColor:"amber",orderIndex:2,techStack:["TypeScript","React","IndexedDB","Tailwind CSS","Service Workers"],highlights:["100% functional without internet connectivity using client-side IndexedDB","Instant background synchronization upon network reconnection","Zero-dependency mathematical visualization engine"],previewType:"expense-chart",thumbnailUrl:"/Biniyam Kibru.jpg",liveUrl:"https://pulsetrack.onrender.com",githubUrl:"https://github.com/biniyamkibruheramo-boop/pulse-track",metrics:[{label:"Offline Sync",value:"100%"},{label:"Bundle Size",value:"48 KB"},{label:"Time-to-Interactive",value:"0.2s"}],story:{problem:"Most finance tracking apps require constant cellular connections and feel bloated, making daily logging slow and cumbersome on mobile.",solution:"Crafted a snappy PWA with an ultra-lightweight client bundle that stores data locally first and renders responsive financial analytics on any device.",architecture:"React + TypeScript frontend utilizing the browser's native IndexedDB API with custom synchronization reconciliation algorithms."}},{_id:"proj-3",title:"HabitOrbit",tagline:"Cognitive Habit Intelligence & Consistency Tracker",description:"A minimalist daily habit tracker applying spatial heatmaps and streak velocity metrics to help students and developers sustain rigorous daily routines.",category:"PWAs & Productivity",accentColor:"emerald",orderIndex:3,techStack:["React","Framer Motion","Tailwind CSS","Local Storage API"],highlights:["Interactive 52-week activity contribution matrix","Haptic and visual micro-rewards engineered for positive feedback loops","Privacy-first architecture with all telemetry stored locally"],previewType:"habit-grid",thumbnailUrl:"/Biniyam Kibru.jpg",liveUrl:"https://habitorbit.onrender.com",githubUrl:"https://github.com/biniyamkibruheramo-boop/habit-orbit",metrics:[{label:"Daily Retention",value:"91%"},{label:"Interaction FPS",value:"60fps"},{label:"Data Leakage",value:"0 bytes"}],story:{problem:"Habit tracking apps often overwhelm users with complex dashboards, notifications, and subscription paywalls, leading to abandonment within 14 days.",solution:"Developed an elegant, distraction-free spatial tracker focused purely on visual streak momentum and daily friction reduction.",architecture:"Framer Motion physics engine powering fluid micro-interactions with persistent local state."}},{_id:"proj-4",title:"AuraDoc",tagline:"Ambient Markdown Knowledge Studio & Code Canvas",description:"A focused writing and technical documentation workspace featuring real-time syntax highlighting, live KaTeX math rendering, and multi-format export.",category:"Full-Stack Systems",accentColor:"violet",orderIndex:4,techStack:["React","TypeScript","PrismJS","Tailwind CSS","Web Workers"],highlights:["Offloaded markdown parsing to Web Workers for stutter-free 120Hz typing","Seamless export to PDF, HTML, and formatted clean Markdown","Custom obsidian dark theme tailored for prolonged late-night coding"],previewType:"markdown-live",thumbnailUrl:"/Biniyam Kibru.jpg",liveUrl:"https://auradoc.onrender.com",githubUrl:"https://github.com/biniyamkibruheramo-boop/aura-doc",metrics:[{label:"Parse Latency",value:"14ms"},{label:"Max Document Size",value:"2MB+"},{label:"Typing Lag",value:"0ms"}],story:{problem:"Online editors often lag when processing long documents with code snippets and LaTeX formulas, breaking flow during technical writing.",solution:"Separated rendering and syntax tokenization into dedicated background Web Workers so typing remains instantaneous regardless of document length.",architecture:"Worker-thread AST compilation delivering sanitized DOM updates back to the React UI."}}];function HE(){const[s,e]=je.useState(zE),[t,r]=je.useState(BE),[a,l]=je.useState(!1);return je.useEffect(()=>{let u=!0;async function d(){l(!0);const h=await FE();u&&h&&(h.profile&&e(h.profile),h.projects&&Array.isArray(h.projects)&&h.projects.length>0&&r(h.projects)),u&&l(!1)}return d(),()=>{u=!1}},[]),{profile:s,projects:t,loading:a}}const VE=()=>{const{profile:s,projects:e}=HE(),[t,r]=je.useState(!1);return b.jsx(jv,{children:b.jsxs("div",{className:"relative min-h-screen bg-black text-slate-100 selection:bg-cyan-500/20 selection:text-cyan-300",children:[!t&&b.jsx(TE,{onComplete:()=>r(!0)}),b.jsx(ow,{}),b.jsx(aw,{}),b.jsx(SE,{}),b.jsx(wE,{}),b.jsxs("main",{className:"relative z-10 flex flex-col",children:[b.jsx(AE,{profile:s}),b.jsxs("div",{className:"relative z-20 w-full bg-[#000000] text-slate-100 min-h-screen border-t border-white/[0.08]",children:[b.jsx("section",{id:"manifesto",className:"min-h-screen flex flex-col items-center justify-center relative py-16 px-6",children:b.jsx(EE,{lines:s.scrollManifestoLines})}),b.jsx(RE,{profile:s}),b.jsx(IE,{projects:e}),b.jsx(UE,{profile:s}),b.jsx(OE,{profile:s})]})]})]})})};Uv.createRoot(document.getElementById("root")).render(b.jsx(Cv.StrictMode,{children:b.jsx(VE,{})}));
