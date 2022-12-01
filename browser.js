// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?module.exports=r():"function"==typeof define&&define.amd?define(r):(t="undefined"!=typeof globalThis?globalThis:t||self).mapKeysAsync=r()}(this,(function(){"use strict";var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||c.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function d(t,r){return null!=t&&v.call(t,r)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var m=b()?function(t){var r,e,n;if(null==t)return g.call(t);e=t[h],r=d(t,h);try{t[h]=void 0}catch(r){return g.call(t)}return n=g.call(t),r?t[h]=e:delete t[h],n}:function(t){return g.call(t)},j=Boolean.prototype.toString;var w=b();function O(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===m(t)))}function _(t){return p(t)||O(t)}function S(){return new Function("return this;")()}a(_,"isPrimitive",p),a(_,"isObject",O);var E="object"==typeof self?self:null,P="object"==typeof window?window:null,T="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof T?T:null;var I=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(P)return P;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),N=I.document&&I.document.childNodes,k=Int8Array;function Y(){return/^\s*function\s*([^(]*)/i}var F=/^\s*function\s*([^(]*)/i;a(Y,"REGEXP",F);var x=Array.isArray?Array.isArray:function(t){return"[object Array]"===m(t)};function B(t){return null!==t&&"object"==typeof t}function V(t){var r,e,n,o;if(("Object"===(e=m(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=F.exec(n.toString()))return r[1]}return B(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(B,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!x(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(B));var C="function"==typeof s||"object"==typeof k||"function"==typeof N?function(t){return V(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?V(t).toLowerCase():r};function L(t){return"function"===C(t)}function G(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var M=Number.POSITIVE_INFINITY;var X,D=Object.getPrototypeOf;X=L(Object.getPrototypeOf)?D:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===m(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var H=X;var J=Object.prototype;function R(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!x(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),H(t))}(t),!r||!d(t,"constructor")&&d(r,"constructor")&&L(r.constructor)&&"[object Function]"===m(r.constructor)&&d(r,"isPrototypeOf")&&L(r.isPrototypeOf)&&(r===J||function(t){var r;for(r in t)if(!d(t,r))return!1;return!0}(t)))}function U(t){return"number"==typeof t}var W=Number,z=W.prototype.toString;var K=b();function q(t){return"object"==typeof t&&(t instanceof W||(K?function(t){try{return z.call(t),!0}catch(t){return!1}}(t):"[object Number]"===m(t)))}function Q(t){return U(t)||q(t)}a(Q,"isPrimitive",U),a(Q,"isObject",q);var Z=W.NEGATIVE_INFINITY,$=Math.floor;function tt(t){return $(t)===t}function rt(t){return t<M&&t>Z&&tt(t)}function et(t){return U(t)&&rt(t)}function nt(t){return q(t)&&rt(t.valueOf())}function ot(t){return et(t)||nt(t)}function it(t){return et(t)&&t>0}function ut(t){return nt(t)&&t.valueOf()>0}function ft(t){return it(t)||ut(t)}function ct(t,r){return R(r)?(d(r,"thisArg")&&(t.thisArg=r.thisArg),d(r,"series")&&(t.series=r.series,!p(t.series))?new TypeError(G("0iY30","series",t.series)):d(r,"limit")&&(t.limit=r.limit,!it(t.limit))?new TypeError(G("0iY3b","limit",t.limit)):null):new TypeError(G("0iY2h",r))}function lt(t){var r=t.default;if("function"==typeof r){var e=function(){return r.apply(this,arguments)};e.prototype=r.prototype}else e={};return Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach((function(r){var n=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(e,r,n.get?n:{enumerable:!0,get:function(){return t[r]}})})),e}a(ot,"isPrimitive",et),a(ot,"isObject",nt),a(ft,"isPrimitive",it),a(ft,"isObject",ut);var at=lt(Object.freeze({__proto__:null,default:()=>()=>{}}));function st(t){return Object.keys(Object(t))}var pt,yt=void 0!==Object.keys;function bt(t){return"[object Arguments]"===m(t)}pt=function(){return bt(arguments)}();var gt=pt;function vt(t){return"string"==typeof t}var dt=String.prototype.valueOf;var ht=b();function mt(t){return"object"==typeof t&&(t instanceof String||(ht?function(t){try{return dt.call(t),!0}catch(t){return!1}}(t):"[object String]"===m(t)))}function jt(t){return vt(t)||mt(t)}function wt(t){return t!=t}function Ot(t){return U(t)&&wt(t)}function _t(t){return q(t)&&wt(t.valueOf())}function St(t){return Ot(t)||_t(t)}a(jt,"isPrimitive",vt),a(jt,"isObject",mt),a(St,"isPrimitive",Ot),a(St,"isObject",_t);var Et=Object.prototype.propertyIsEnumerable;var Pt=!Et.call("beep","0");function Tt(t,r){var e;return null!=t&&(!(e=Et.call(t,r))&&Pt&&jt(t)?!Ot(r=+r)&&et(r)&&r>=0&&r<t.length:e)}var At=gt?bt:function(t){return null!==t&&"object"==typeof t&&!x(t)&&"number"==typeof t.length&&tt(t.length)&&t.length>=0&&t.length<=4294967295&&d(t,"callee")&&!Tt(t,"callee")},It=Array.prototype.slice;var Nt=Tt((function(){}),"prototype"),kt=!Tt({toString:null},"toString");function Yt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&tt(t.length)&&t.length>=0&&t.length<=9007199254740991}function Ft(t,r,e){var n,o;if(!Yt(t)&&!vt(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!et(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(St(r)){for(;o<n;o++)if(St(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}function xt(t){return t.constructor&&t.constructor.prototype===t}var Bt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Vt="undefined"==typeof window?void 0:window;var Ct=function(){var t;if("undefined"===C(Vt))return!1;for(t in Vt)try{-1===Ft(Bt,t)&&d(Vt,t)&&null!==Vt[t]&&"object"===C(Vt[t])&&xt(Vt[t])}catch(t){return!0}return!1}(),Lt="undefined"!=typeof window;var Gt,Mt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Gt=yt?function(){return 2!==(st(arguments)||"").length}(1,2)?function(t){return At(t)?st(It.call(t)):st(t)}:st:function(t){var r,e,n,o,i,u,f;if(o=[],At(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!d(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!B(t))return o;e=Nt&&n}for(i in t)e&&"prototype"===i||!d(t,i)||o.push(String(i));if(kt)for(r=function(t){if(!1===Lt&&!Ct)return xt(t);try{return xt(t)}catch(t){return!1}}(t),f=0;f<Mt.length;f++)u=Mt[f],r&&"constructor"===u||!d(t,u)||o.push(String(u));return o};var Xt=Gt,Dt=at("map-values-async:limit");function Ht(t,r,e,n){var o,i,u,f,c,l,a,s,p;if(u=Xt(t),l=u.length,Dt("Number of keys: %d",l),s={},0===l)return Dt("Finished processing an object."),n(null,s);for(c=l<r.limit?l:r.limit,Dt("Concurrency limit: %d",c),Dt("Number of arguments: %d",e.length),o=l-1,i=0,a=-1,p=0;p<c;p++)a<o&&y();function y(){var n,o;function i(t,r){if(!f){if(t)return f=!0,b(t);Dt("Transform result => %s: %s",r,JSON.stringify(n)),s[r]=n,b()}}o=u[a+=1],n=t[o],Dt("%s: %s",o,JSON.stringify(n)),2===e.length?e.call(r.thisArg,o,i):3===e.length?e.call(r.thisArg,o,n,i):e.call(r.thisArg,o,n,t,i)}function b(t){return t?(Dt("Encountered an error: %s",t.message),n(t)):(Dt("Processed %d of %d properties.",i+=1,l),a<o?y():i===l?(Dt("Finished processing an object."),n(null,s)):void 0)}}function Jt(t,r){var e,n,o;if(e={},arguments.length>1){if(n=ct(e,t))throw n;o=r}else o=t;if(!L(o))throw new TypeError(G("0iY43",o));return e.series?e.limit=1:e.limit||(e.limit=M),i;function i(t,r){if("object"!=typeof t||null===t)throw new TypeError(G("0iY3X",t));if(!L(r))throw new TypeError(G("0iY43",r));return Ht(t,e,o,(function(t,e){if(t)return r(t);r(null,e)}))}}function Rt(t,r,e,n){if(arguments.length<4)return Jt(r)(t,e);Jt(r,e)(t,n)}return a(Rt,"factory",Jt),Rt}));
//# sourceMappingURL=browser.js.map
