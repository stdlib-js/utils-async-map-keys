// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import e from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-define-nonenumerable-read-only-property@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.0.2-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/constants-float64-pinf@v0.0.8-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-plain-object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-has-own-property@esm/index.mjs";import{isPrimitive as o}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-boolean@esm/index.mjs";import{isPrimitive as l}from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-positive-integer@esm/index.mjs";import m from"https://cdn.jsdelivr.net/gh/stdlib-js/utils-keys@esm/index.mjs";function f(e,t){return s(t)?(n(t,"thisArg")&&(e.thisArg=t.thisArg),n(t,"series")&&(e.series=t.series,!o(e.series))?new TypeError(r("0iY30","series",e.series)):n(t,"limit")&&(e.limit=t.limit,!l(e.limit))?new TypeError(r("0iY3b","limit",e.limit)):null):new TypeError(r("0iY2h",t))}function d(e){var t=e.default;if("function"==typeof t){var r=function(){return t.apply(this,arguments)};r.prototype=t.prototype}else r={};return Object.defineProperty(r,"__esModule",{value:!0}),Object.keys(e).forEach((function(t){var i=Object.getOwnPropertyDescriptor(e,t);Object.defineProperty(r,t,i.get?i:{enumerable:!0,get:function(){return e[t]}})})),r}var p=d(Object.freeze({__proto__:null,default:()=>()=>{}}))("map-values-async:limit");function u(e,t,r,i){var s,n,o,l,f,d,u,c,a;if(o=m(e),d=o.length,p("Number of keys: %d",d),c={},0===d)return p("Finished processing an object."),i(null,c);for(f=d<t.limit?d:t.limit,p("Concurrency limit: %d",f),p("Number of arguments: %d",r.length),s=d-1,n=0,u=-1,a=0;a<f;a++)u<s&&h();function h(){var i,s;function n(e,t){if(!l){if(e)return l=!0,j(e);p("Transform result => %s: %s",t,JSON.stringify(i)),c[t]=i,j()}}s=o[u+=1],i=e[s],p("%s: %s",s,JSON.stringify(i)),2===r.length?r.call(t.thisArg,s,n):3===r.length?r.call(t.thisArg,s,i,n):r.call(t.thisArg,s,i,e,n)}function j(e){return e?(p("Encountered an error: %s",e.message),i(e)):(p("Processed %d of %d properties.",n+=1,d),u<s?h():n===d?(p("Finished processing an object."),i(null,c)):void 0)}}function c(e,s){var n,o,l;if(n={},arguments.length>1){if(o=f(n,e))throw o;l=s}else l=e;if(!t(l))throw new TypeError(r("0iY43",l));return n.series?n.limit=1:n.limit||(n.limit=i),m;function m(e,i){if("object"!=typeof e||null===e)throw new TypeError(r("0iY3X",e));if(!t(i))throw new TypeError(r("0iY43",i));return u(e,n,l,(function(e,t){if(e)return i(e);i(null,t)}))}}function a(e,t,r,i){if(arguments.length<4)return c(t)(e,r);c(t,r)(e,i)}e(a,"factory",c);export{a as default,c as factory};
//# sourceMappingURL=index.mjs.map
