// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var t="function"==typeof Object.defineProperty?Object.defineProperty:null;var r,e=Object.defineProperty,n=Object.prototype,o=n.toString,i=n.__defineGetter__,u=n.__defineSetter__,f=n.__lookupGetter__,c=n.__lookupSetter__;r=function(){try{return t({},"x",{}),!0}catch(t){return!1}}()?e:function(t,r,e){var l,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===o.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(f.call(t,r)||c.call(t,r)?(l=t.__proto__,t.__proto__=n,delete t[r],t[r]=e.value,t.__proto__=l):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(t,r,e.get),p&&u&&u.call(t,r,e.set),t};var l=r;function a(t,r,e){l(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s=/./;function p(t){return"boolean"==typeof t}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function b(){return y&&"symbol"==typeof Symbol.toStringTag}var g=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function h(t,r){return null!=t&&v.call(t,r)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var d=b()?function(t){var r,e,n;if(null==t)return g.call(t);e=t[m],r=h(t,m);try{t[m]=void 0}catch(r){return g.call(t)}return n=g.call(t),r?t[m]=e:delete t[m],n}:function(t){return g.call(t)},j=Boolean.prototype.toString;var w=b();function O(t){return"object"==typeof t&&(t instanceof Boolean||(w?function(t){try{return j.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===d(t)))}function _(t){return p(t)||O(t)}function S(){return new Function("return this;")()}a(_,"isPrimitive",p),a(_,"isObject",O);var E="object"==typeof self?self:null,T="object"==typeof window?window:null,P="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},A="object"==typeof P?P:null;var I=function(t){if(arguments.length){if(!p(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return S()}if(E)return E;if(T)return T;if(A)return A;throw new Error("unexpected error. Unable to resolve global object.")}(),N=I.document&&I.document.childNodes,Y=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;a(k,"REGEXP",B);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===d(t)};function x(t){return null!==t&&"object"==typeof t}function F(t){var r,e,n,o;if(("Object"===(e=d(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=B.exec(n.toString()))return r[1]}return x(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}a(x,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!V(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(x));var L="function"==typeof s||"object"==typeof Y||"function"==typeof N?function(t){return F(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?F(t).toLowerCase():r};function C(t){return"function"===L(t)}function G(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var X=Number.POSITIVE_INFINITY;var M,H=Object.getPrototypeOf;M=C(Object.getPrototypeOf)?H:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===d(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var J=M;var R=Object.prototype;function U(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),J(t))}(t),!r||!h(t,"constructor")&&h(r,"constructor")&&C(r.constructor)&&"[object Function]"===d(r.constructor)&&h(r,"isPrototypeOf")&&C(r.isPrototypeOf)&&(r===R||function(t){var r;for(r in t)if(!h(t,r))return!1;return!0}(t)))}function W(t){return"number"==typeof t}var D=Number,q=D.prototype.toString;var z=b();function K(t){return"object"==typeof t&&(t instanceof D||(z?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object Number]"===d(t)))}function Q(t){return W(t)||K(t)}a(Q,"isPrimitive",W),a(Q,"isObject",K);var Z=D.NEGATIVE_INFINITY,$=Math.floor;function tt(t){return $(t)===t}function rt(t){return t<X&&t>Z&&tt(t)}function et(t){return W(t)&&rt(t)}function nt(t){return K(t)&&rt(t.valueOf())}function ot(t){return et(t)||nt(t)}function it(t){return et(t)&&t>0}function ut(t){return nt(t)&&t.valueOf()>0}function ft(t){return it(t)||ut(t)}function ct(t,r){return U(r)?(h(r,"thisArg")&&(t.thisArg=r.thisArg),h(r,"series")&&(t.series=r.series,!p(t.series))?new TypeError(G("0iY30","series",t.series)):h(r,"limit")&&(t.limit=r.limit,!it(t.limit))?new TypeError(G("0iY3b","limit",t.limit)):null):new TypeError(G("0iY2h",r))}a(ot,"isPrimitive",et),a(ot,"isObject",nt),a(ft,"isPrimitive",it),a(ft,"isObject",ut);function lt(t){return Object.keys(Object(t))}var at=void 0!==Object.keys;function st(t){return"[object Arguments]"===d(t)}var pt=function(){return st(arguments)}();function yt(t){return"string"==typeof t}var bt=String.prototype.valueOf;var gt=b();function vt(t){return"object"==typeof t&&(t instanceof String||(gt?function(t){try{return bt.call(t),!0}catch(t){return!1}}(t):"[object String]"===d(t)))}function ht(t){return yt(t)||vt(t)}function mt(t){return t!=t}function dt(t){return W(t)&&mt(t)}function jt(t){return K(t)&&mt(t.valueOf())}function wt(t){return dt(t)||jt(t)}a(ht,"isPrimitive",yt),a(ht,"isObject",vt),a(wt,"isPrimitive",dt),a(wt,"isObject",jt);var Ot=Object.prototype.propertyIsEnumerable;var _t=!Ot.call("beep","0");function St(t,r){var e;return null!=t&&(!(e=Ot.call(t,r))&&_t&&ht(t)?!dt(r=+r)&&et(r)&&r>=0&&r<t.length:e)}var Et=pt?st:function(t){return null!==t&&"object"==typeof t&&!V(t)&&"number"==typeof t.length&&tt(t.length)&&t.length>=0&&t.length<=4294967295&&h(t,"callee")&&!St(t,"callee")},Tt=Array.prototype.slice;var Pt=St((function(){}),"prototype"),At=!St({toString:null},"toString");function It(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&tt(t.length)&&t.length>=0&&t.length<=9007199254740991}function Nt(t,r,e){var n,o;if(!It(t)&&!yt(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!et(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(wt(r)){for(;o<n;o++)if(wt(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}function Yt(t){return t.constructor&&t.constructor.prototype===t}var kt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Bt="undefined"==typeof window?void 0:window;var Vt=function(){var t;if("undefined"===L(Bt))return!1;for(t in Bt)try{-1===Nt(kt,t)&&h(Bt,t)&&null!==Bt[t]&&"object"===L(Bt[t])&&Yt(Bt[t])}catch(t){return!0}return!1}(),xt="undefined"!=typeof window;var Ft=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Lt=at?function(){return 2!==(lt(arguments)||"").length}(1,2)?function(t){return Et(t)?lt(Tt.call(t)):lt(t)}:lt:function(t){var r,e,n,o,i,u,f;if(o=[],Et(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!h(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!x(t))return o;e=Pt&&n}for(i in t)e&&"prototype"===i||!h(t,i)||o.push(String(i));if(At)for(r=function(t){if(!1===xt&&!Vt)return Yt(t);try{return Yt(t)}catch(t){return!1}}(t),f=0;f<Ft.length;f++)u=Ft[f],r&&"constructor"===u||!h(t,u)||o.push(String(u));return o},Ct=()=>{};function Gt(t,r,e,n){var o,i,u,f,c,l,a,s,p;if(u=Lt(t),l=u.length,s={},0===l)return n(null,s);for(c=l<r.limit?l:r.limit,Ct("Number of arguments: %d",e.length),o=l-1,i=0,a=-1,p=0;p<c;p++)a<o&&y();function y(){var n,o;function i(t,r){if(!f){if(t)return f=!0,b(t);Ct("Transform result => %s: %s",r,JSON.stringify(n)),s[r]=n,b()}}o=u[a+=1],n=t[o],Ct("%s: %s",o,JSON.stringify(n)),2===e.length?e.call(r.thisArg,o,i):3===e.length?e.call(r.thisArg,o,n,i):e.call(r.thisArg,o,n,t,i)}function b(t){return t?(Ct("Encountered an error: %s",t.message),n(t)):(i+=1,a<o?y():i===l?n(null,s):void 0)}}function Xt(t,r){var e,n,o;if(e={},arguments.length>1){if(n=ct(e,t))throw n;o=r}else o=t;if(!C(o))throw new TypeError(G("0iY43",o));return e.series?e.limit=1:e.limit||(e.limit=X),i;function i(t,r){if("object"!=typeof t||null===t)throw new TypeError(G("0iY3X",t));if(!C(r))throw new TypeError(G("0iY43",r));return Gt(t,e,o,(function(t,e){if(t)return r(t);r(null,e)}))}}function Mt(t,r,e,n){if(arguments.length<4)return Xt(r)(t,e);Xt(r,e)(t,n)}a(Mt,"factory",Xt);export{Mt as default,Xt as factory};
//# sourceMappingURL=mod.js.map