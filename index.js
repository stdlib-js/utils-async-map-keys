// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((t="undefined"!=typeof globalThis?globalThis:t||self).mapKeysAsync={})}(this,(function(t){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e,n=Object.defineProperty,o=Object.prototype,i=o.toString,u=o.__defineGetter__,f=o.__defineSetter__,c=o.__lookupGetter__,l=o.__lookupSetter__;e=function(){try{return r({},"x",{}),!0}catch(t){return!1}}()?n:function(t,r,e){var n,a,s,p;if("object"!=typeof t||null===t||"[object Array]"===i.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof e||null===e||"[object Array]"===i.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((a="value"in e)&&(c.call(t,r)||l.call(t,r)?(n=t.__proto__,t.__proto__=o,delete t[r],t[r]=e.value,t.__proto__=n):t[r]=e.value),s="get"in e,p="set"in e,a&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&u&&u.call(t,r,e.get),p&&f&&f.call(t,r,e.set),t};var a=e;function s(t,r,e){a(t,r,{configurable:!1,enumerable:!1,writable:!1,value:e})}var p=/./;function y(t){return"boolean"==typeof t}var b="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function g(){return b&&"symbol"==typeof Symbol.toStringTag}var v=Object.prototype.toString;var d=Object.prototype.hasOwnProperty;function h(t,r){return null!=t&&d.call(t,r)}var m="function"==typeof Symbol?Symbol.toStringTag:"";var j=g()?function(t){var r,e,n;if(null==t)return v.call(t);e=t[m],r=h(t,m);try{t[m]=void 0}catch(r){return v.call(t)}return n=v.call(t),r?t[m]=e:delete t[m],n}:function(t){return v.call(t)},w=Boolean.prototype.toString;var O=g();function _(t){return"object"==typeof t&&(t instanceof Boolean||(O?function(t){try{return w.call(t),!0}catch(t){return!1}}(t):"[object Boolean]"===j(t)))}function S(t){return y(t)||_(t)}function E(){return new Function("return this;")()}s(S,"isPrimitive",y),s(S,"isObject",_);var T="object"==typeof self?self:null,P="object"==typeof window?window:null,A="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},I="object"==typeof A?A:null;var N=function(t){if(arguments.length){if(!y(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return E()}if(T)return T;if(P)return P;if(I)return I;throw new Error("unexpected error. Unable to resolve global object.")}(),Y=N.document&&N.document.childNodes,x=Int8Array;function k(){return/^\s*function\s*([^(]*)/i}var B=/^\s*function\s*([^(]*)/i;s(k,"REGEXP",B);var V=Array.isArray?Array.isArray:function(t){return"[object Array]"===j(t)};function F(t){return null!==t&&"object"==typeof t}function L(t){var r,e,n,o;if(("Object"===(e=j(t).slice(8,-1))||"Error"===e)&&t.constructor){if("string"==typeof(n=t.constructor).name)return n.name;if(r=B.exec(n.toString()))return r[1]}return F(o=t)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}s(F,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(r){var e,n;if(!V(r))return!1;if(0===(e=r.length))return!1;for(n=0;n<e;n++)if(!1===t(r[n]))return!1;return!0}}(F));var C="function"==typeof p||"object"==typeof x||"function"==typeof Y?function(t){return L(t).toLowerCase()}:function(t){var r;return null===t?"null":"object"===(r=typeof t)?L(t).toLowerCase():r};function G(t){return"function"===C(t)}function M(){var t,r=arguments,e=r[0],n="https://stdlib.io/e/"+e+"?";for(t=1;t<r.length;t++)n+="&arg[]="+encodeURIComponent(r[t]);return n}var X=Number.POSITIVE_INFINITY;var H,J=Object.getPrototypeOf;H=G(Object.getPrototypeOf)?J:function(t){var r=function(t){return t.__proto__}(t);return r||null===r?r:"[object Function]"===j(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null};var R=H;var U=Object.prototype;function W(t){var r;return!!function(t){return"object"==typeof t&&null!==t&&!V(t)}(t)&&(r=function(t){return null==t?null:(t=Object(t),R(t))}(t),!r||!h(t,"constructor")&&h(r,"constructor")&&G(r.constructor)&&"[object Function]"===j(r.constructor)&&h(r,"isPrototypeOf")&&G(r.isPrototypeOf)&&(r===U||function(t){var r;for(r in t)if(!h(t,r))return!1;return!0}(t)))}function D(t){return"number"==typeof t}var K=Number,q=K.prototype.toString;var z=g();function Q(t){return"object"==typeof t&&(t instanceof K||(z?function(t){try{return q.call(t),!0}catch(t){return!1}}(t):"[object Number]"===j(t)))}function Z(t){return D(t)||Q(t)}s(Z,"isPrimitive",D),s(Z,"isObject",Q);var $=K.NEGATIVE_INFINITY,tt=Math.floor;function rt(t){return tt(t)===t}function et(t){return t<X&&t>$&&rt(t)}function nt(t){return D(t)&&et(t)}function ot(t){return Q(t)&&et(t.valueOf())}function it(t){return nt(t)||ot(t)}function ut(t){return nt(t)&&t>0}function ft(t){return ot(t)&&t.valueOf()>0}function ct(t){return ut(t)||ft(t)}function lt(t,r){return W(r)?(h(r,"thisArg")&&(t.thisArg=r.thisArg),h(r,"series")&&(t.series=r.series,!y(t.series))?new TypeError(M("0iY30","series",t.series)):h(r,"limit")&&(t.limit=r.limit,!ut(t.limit))?new TypeError(M("0iY3b","limit",t.limit)):null):new TypeError(M("0iY2h",r))}s(it,"isPrimitive",nt),s(it,"isObject",ot),s(ct,"isPrimitive",ut),s(ct,"isObject",ft);function at(t){return Object.keys(Object(t))}var st,pt=void 0!==Object.keys;function yt(t){return"[object Arguments]"===j(t)}st=function(){return yt(arguments)}();var bt=st;function gt(t){return"string"==typeof t}var vt=String.prototype.valueOf;var dt=g();function ht(t){return"object"==typeof t&&(t instanceof String||(dt?function(t){try{return vt.call(t),!0}catch(t){return!1}}(t):"[object String]"===j(t)))}function mt(t){return gt(t)||ht(t)}function jt(t){return t!=t}function wt(t){return D(t)&&jt(t)}function Ot(t){return Q(t)&&jt(t.valueOf())}function _t(t){return wt(t)||Ot(t)}s(mt,"isPrimitive",gt),s(mt,"isObject",ht),s(_t,"isPrimitive",wt),s(_t,"isObject",Ot);var St=Object.prototype.propertyIsEnumerable;var Et=!St.call("beep","0");function Tt(t,r){var e;return null!=t&&(!(e=St.call(t,r))&&Et&&mt(t)?!wt(r=+r)&&nt(r)&&r>=0&&r<t.length:e)}var Pt=bt?yt:function(t){return null!==t&&"object"==typeof t&&!V(t)&&"number"==typeof t.length&&rt(t.length)&&t.length>=0&&t.length<=4294967295&&h(t,"callee")&&!Tt(t,"callee")},At=Array.prototype.slice;var It=Tt((function(){}),"prototype"),Nt=!Tt({toString:null},"toString");function Yt(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&rt(t.length)&&t.length>=0&&t.length<=9007199254740991}function xt(t,r,e){var n,o;if(!Yt(t)&&!gt(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(n=t.length))return-1;if(3===arguments.length){if(!nt(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=n)return-1;o=e}else(o=n+e)<0&&(o=0)}else o=0;if(_t(r)){for(;o<n;o++)if(_t(t[o]))return o}else for(;o<n;o++)if(t[o]===r)return o;return-1}function kt(t){return t.constructor&&t.constructor.prototype===t}var Bt=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],Vt="undefined"==typeof window?void 0:window;var Ft=function(){var t;if("undefined"===C(Vt))return!1;for(t in Vt)try{-1===xt(Bt,t)&&h(Vt,t)&&null!==Vt[t]&&"object"===C(Vt[t])&&kt(Vt[t])}catch(t){return!0}return!1}(),Lt="undefined"!=typeof window;var Ct,Gt=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];Ct=pt?function(){return 2!==(at(arguments)||"").length}(1,2)?function(t){return Pt(t)?at(At.call(t)):at(t)}:at:function(t){var r,e,n,o,i,u,f;if(o=[],Pt(t)){for(f=0;f<t.length;f++)o.push(f.toString());return o}if("string"==typeof t){if(t.length>0&&!h(t,"0"))for(f=0;f<t.length;f++)o.push(f.toString())}else{if(!1==(n="function"==typeof t)&&!F(t))return o;e=It&&n}for(i in t)e&&"prototype"===i||!h(t,i)||o.push(String(i));if(Nt)for(r=function(t){if(!1===Lt&&!Ft)return kt(t);try{return kt(t)}catch(t){return!1}}(t),f=0;f<Gt.length;f++)u=Gt[f],r&&"constructor"===u||!h(t,u)||o.push(String(u));return o};var Mt=Ct,Xt=()=>{};function Ht(t,r,e,n){var o,i,u,f,c,l,a,s,p;if(u=Mt(t),l=u.length,s={},0===l)return n(null,s);for(c=l<r.limit?l:r.limit,Xt("Number of arguments: %d",e.length),o=l-1,i=0,a=-1,p=0;p<c;p++)a<o&&y();function y(){var n,o;function i(t,r){if(!f){if(t)return f=!0,b(t);Xt("Transform result => %s: %s",r,JSON.stringify(n)),s[r]=n,b()}}o=u[a+=1],n=t[o],Xt("%s: %s",o,JSON.stringify(n)),2===e.length?e.call(r.thisArg,o,i):3===e.length?e.call(r.thisArg,o,n,i):e.call(r.thisArg,o,n,t,i)}function b(t){return t?(Xt("Encountered an error: %s",t.message),n(t)):(i+=1,a<o?y():i===l?n(null,s):void 0)}}function Jt(t,r){var e,n,o;if(e={},arguments.length>1){if(n=lt(e,t))throw n;o=r}else o=t;if(!G(o))throw new TypeError(M("0iY43",o));return e.series?e.limit=1:e.limit||(e.limit=X),i;function i(t,r){if("object"!=typeof t||null===t)throw new TypeError(M("0iY3X",t));if(!G(r))throw new TypeError(M("0iY43",r));return Ht(t,e,o,(function(t,e){if(t)return r(t);r(null,e)}))}}function Rt(t,r,e,n){if(arguments.length<4)return Jt(r)(t,e);Jt(r,e)(t,n)}s(Rt,"factory",Jt),t.default=Rt,t.factory=Jt,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=index.js.map
