// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import o from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import u from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import l from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";function a(e){if(e.__esModule)return e;var t=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(e).forEach((function(r){var n=Object.getOwnPropertyDescriptor(e,r);Object.defineProperty(t,r,n.get?n:{enumerable:!0,get:function(){return e[r]}})})),t}var f=i,m=o,c=s.isPrimitive,d=u.isPrimitive,p=r;var h=function(e,t){return f(t)?(m(t,"thisArg")&&(e.thisArg=t.thisArg),m(t,"series")&&(e.series=t.series,!c(e.series))?new TypeError(p("invalid option. `%s` option must be a boolean. Option: `%s`.","series",e.series)):m(t,"limit")&&(e.limit=t.limit,!d(e.limit))?new TypeError(p("invalid option. `%s` option must be a positive integer. Option: `%s`.","limit",e.limit)):null):new TypeError(p("invalid argument. Options argument must be an object. Value: `%s`.",t))},g="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{};function v(){throw new Error("setTimeout has not been defined")}function b(){throw new Error("clearTimeout has not been defined")}var j=v,w=b;function y(e){if(j===setTimeout)return setTimeout(e,0);if((j===v||!j)&&setTimeout)return j=setTimeout,setTimeout(e,0);try{return j(e,0)}catch(t){try{return j.call(null,e,0)}catch(t){return j.call(this,e,0)}}}"function"==typeof g.setTimeout&&(j=setTimeout),"function"==typeof g.clearTimeout&&(w=clearTimeout);var T,x=[],E=!1,O=-1;function A(){E&&T&&(E=!1,T.length?x=T.concat(x):O=-1,x.length&&N())}function N(){if(!E){var e=y(A);E=!0;for(var t=x.length;t;){for(T=x,x=[];++O<t;)T&&T[O].run();O=-1,t=x.length}T=null,E=!1,function(e){if(w===clearTimeout)return clearTimeout(e);if((w===b||!w)&&clearTimeout)return w=clearTimeout,clearTimeout(e);try{w(e)}catch(t){try{return w.call(null,e)}catch(t){return w.call(this,e)}}}(e)}}function _(e,t){this.fun=e,this.array=t}_.prototype.run=function(){this.fun.apply(null,this.array)};function k(){}var P=k,L=k,D=k,M=k,V=k,F=k,q=k;var z=g.performance||{},J=z.now||z.mozNow||z.msNow||z.oNow||z.webkitNow||function(){return(new Date).getTime()};var S=new Date;var C={nextTick:function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];x.push(new _(e,t)),1!==x.length||E||y(N)},title:"browser",browser:!0,env:{},argv:[],version:"",versions:{},on:P,addListener:L,once:D,off:M,removeListener:V,removeAllListeners:F,emit:q,binding:function(e){throw new Error("process.binding is not supported")},cwd:function(){return"/"},chdir:function(e){throw new Error("process.chdir is not supported")},umask:function(){return 0},hrtime:function(e){var t=.001*J.call(z),r=Math.floor(t),n=Math.floor(t%1*1e9);return e&&(r-=e[0],(n-=e[1])<0&&(r--,n+=1e9)),[r,n]},platform:"browser",release:{},config:{},uptime:function(){return(new Date-S)/1e3}};module.exports=void 0!==C&&"renderer"===C.type?require("./browser.js"):require("./node.js");var B=l,G=a(Object.freeze({__proto__:null}))("map-values-async:limit");var H=t,I=r,K=n,Q=h,R=function(e,t,r,n){var i,o,s,u,l,a,f,m,c;if(s=B(e),a=s.length,G("Number of keys: %d",a),m={},0===a)return G("Finished processing an object."),n(null,m);for(l=a<t.limit?a:t.limit,G("Concurrency limit: %d",l),G("Number of arguments: %d",r.length),i=a-1,o=0,f=-1,c=0;c<l;c++)f<i&&d();function d(){var n,i;function o(e,t){if(!u){if(e)return u=!0,p(e);G("Transform result => %s: %s",t,JSON.stringify(n)),m[t]=n,p()}}i=s[f+=1],n=e[i],G("%s: %s",i,JSON.stringify(n)),2===r.length?r.call(t.thisArg,i,o):3===r.length?r.call(t.thisArg,i,n,o):r.call(t.thisArg,i,n,e,o)}function p(e){return e?(G("Encountered an error: %s",e.message),n(e)):(G("Processed %d of %d properties.",o+=1,a),f<i?d():o===a?(G("Finished processing an object."),n(null,m)):void 0)}};var U=function(e,t){var r,n,i;if(r={},arguments.length>1){if(n=Q(r,e))throw n;i=t}else i=e;if(!H(i))throw new TypeError(I("invalid argument. Last argument must be a function. Value: `%s`.",i));return r.series?r.limit=1:r.limit||(r.limit=K),o;function o(e,t){if("object"!=typeof e||null===e)throw new TypeError(I("invalid argument. First argument must be an object. Value: `%s`.",e));if(!H(t))throw new TypeError(I("invalid argument. Last argument must be a function. Value: `%s`.",t));return R(e,r,i,(function(e,r){if(e)return t(e);t(null,r)}))}},W=U;var X=function(e,t,r,n){if(arguments.length<4)return W(t)(e,r);W(t,r)(e,n)},Y=U;e(X,"factory",Y);var Z=X;export{Z as default,Y as factory};
//# sourceMappingURL=index.mjs.map