// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(r,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(r="undefined"!=typeof globalThis?globalThis:r||self).mapKeysAsync=e()}(this,(function(){"use strict";var r="function"==typeof Object.defineProperty?Object.defineProperty:null;var e=Object.defineProperty;function t(r){return"number"==typeof r}function n(r){var e,t="";for(e=0;e<r;e++)t+="0";return t}function i(r,e,t){var i=!1,o=e-r.length;return o<0||(function(r){return"-"===r[0]}(r)&&(i=!0,r=r.substr(1)),r=t?r+n(o):n(o)+r,i&&(r="-"+r)),r}var o=String.prototype.toLowerCase,a=String.prototype.toUpperCase;function u(r){var e,n,u;switch(r.specifier){case"b":e=2;break;case"o":e=8;break;case"x":case"X":e=16;break;default:e=10}if(n=r.arg,u=parseInt(n,10),!isFinite(u)){if(!t(n))throw new Error("invalid integer. Value: "+n);u=0}return u<0&&("u"===r.specifier||10!==e)&&(u=4294967295+u+1),u<0?(n=(-u).toString(e),r.precision&&(n=i(n,r.precision,r.padRight)),n="-"+n):(n=u.toString(e),u||r.precision?r.precision&&(n=i(n,r.precision,r.padRight)):n="",r.sign&&(n=r.sign+n)),16===e&&(r.alternate&&(n="0x"+n),n=r.specifier===a.call(r.specifier)?a.call(n):o.call(n)),8===e&&r.alternate&&"0"!==n.charAt(0)&&(n="0"+n),n}var c=Math.abs,f=String.prototype.toLowerCase,l=String.prototype.toUpperCase,s=String.prototype.replace,p=/e\+(\d)$/,g=/e-(\d)$/,y=/^(\d+)$/,h=/^(\d+)e/,d=/\.0$/,b=/\.0*e/,v=/(\..*[^0])0*e/;function m(r){var e,n,i=parseFloat(r.arg);if(!isFinite(i)){if(!t(r.arg))throw new Error("invalid floating-point number. Value: "+n);i=r.arg}switch(r.specifier){case"e":case"E":n=i.toExponential(r.precision);break;case"f":case"F":n=i.toFixed(r.precision);break;case"g":case"G":c(i)<1e-4?((e=r.precision)>0&&(e-=1),n=i.toExponential(e)):n=i.toPrecision(r.precision),r.alternate||(n=s.call(n,v,"$1e"),n=s.call(n,b,"e"),n=s.call(n,d,""));break;default:throw new Error("invalid double notation. Value: "+r.specifier)}return n=s.call(n,p,"e+0$1"),n=s.call(n,g,"e-0$1"),r.alternate&&(n=s.call(n,y,"$1."),n=s.call(n,h,"$1.e")),i>=0&&r.sign&&(n=r.sign+n),n=r.specifier===l.call(r.specifier)?l.call(n):f.call(n)}function w(r){var e,t="";for(e=0;e<r;e++)t+=" ";return t}var j=String.fromCharCode,O=isNaN,_=Array.isArray;function E(r){var e={};return e.specifier=r.specifier,e.precision=void 0===r.precision?1:r.precision,e.width=r.width,e.flags=r.flags||"",e.mapping=r.mapping,e}function S(r){var e,t,n,o,a,c,f,l,s,p,g,y,h;if(!_(r))throw new TypeError("invalid argument. First argument must be an array. Value: `"+r+"`.");for(c="",f=1,l=0;l<r.length;l++)if(n=r[l],"string"==typeof n)c+=n;else{if(e=void 0!==n.precision,!(n=E(n)).specifier)throw new TypeError("invalid argument. Token is missing `specifier` property. Index: `"+l+"`. Value: `"+n+"`.");for(n.mapping&&(f=n.mapping),t=n.flags,s=0;s<t.length;s++)switch(o=t.charAt(s)){case" ":n.sign=" ";break;case"+":n.sign="+";break;case"-":n.padRight=!0,n.padZeros=!1;break;case"0":n.padZeros=t.indexOf("-")<0;break;case"#":n.alternate=!0;break;default:throw new Error("invalid flag: "+o)}if("*"===n.width){if(n.width=parseInt(arguments[f],10),f+=1,O(n.width))throw new TypeError("the argument for * width at position "+f+" is not a number. Value: `"+n.width+"`.");n.width<0&&(n.padRight=!0,n.width=-n.width)}if(e&&"*"===n.precision){if(n.precision=parseInt(arguments[f],10),f+=1,O(n.precision))throw new TypeError("the argument for * precision at position "+f+" is not a number. Value: `"+n.precision+"`.");n.precision<0&&(n.precision=1,e=!1)}switch(n.arg=arguments[f],n.specifier){case"b":case"o":case"x":case"X":case"d":case"i":case"u":e&&(n.padZeros=!1),n.arg=u(n);break;case"s":n.maxWidth=e?n.precision:-1;break;case"c":if(!O(n.arg)){if((a=parseInt(n.arg,10))<0||a>127)throw new Error("invalid character code. Value: "+n.arg);n.arg=O(a)?String(n.arg):j(a)}break;case"e":case"E":case"f":case"F":case"g":case"G":e||(n.precision=6),n.arg=m(n);break;default:throw new Error("invalid specifier: "+n.specifier)}n.maxWidth>=0&&n.arg.length>n.maxWidth&&(n.arg=n.arg.substring(0,n.maxWidth)),n.padZeros?n.arg=i(n.arg,n.width||n.precision,n.padRight):n.width&&(n.arg=(p=n.arg,g=n.width,y=n.padRight,h=void 0,(h=g-p.length)<0?p:p=y?p+w(h):w(h)+p)),c+=n.arg||"",f+=1}return c}var P=/%(?:([1-9]\d*)\$)?([0 +\-#]*)(\*|\d+)?(?:(\.)(\*|\d+)?)?[hlL]?([%A-Za-z])/g;function T(r){var e={mapping:r[1]?parseInt(r[1],10):void 0,flags:r[2],width:r[3],precision:r[5],specifier:r[6]};return"."===r[4]&&void 0===r[5]&&(e.precision="1"),e}function k(r){var e,t,n,i;for(t=[],i=0,n=P.exec(r);n;)(e=r.slice(i,P.lastIndex-n[0].length)).length&&t.push(e),t.push(T(n)),i=P.lastIndex,n=P.exec(r);return(e=r.slice(i)).length&&t.push(e),t}function A(r){var e,t;if("string"!=typeof r)throw new TypeError(A("invalid argument. First argument must be a string. Value: `%s`.",r));for(e=[k(r)],t=1;t<arguments.length;t++)e.push(arguments[t]);return S.apply(null,e)}var x,I=Object.prototype,V=I.toString,F=I.__defineGetter__,N=I.__defineSetter__,R=I.__lookupGetter__,C=I.__lookupSetter__;x=function(){try{return r({},"x",{}),!0}catch(r){return!1}}()?e:function(r,e,t){var n,i,o,a;if("object"!=typeof r||null===r||"[object Array]"===V.call(r))throw new TypeError(A("invalid argument. First argument must be an object. Value: `%s`.",r));if("object"!=typeof t||null===t||"[object Array]"===V.call(t))throw new TypeError(A("invalid argument. Property descriptor must be an object. Value: `%s`.",t));if((i="value"in t)&&(R.call(r,e)||C.call(r,e)?(n=r.__proto__,r.__proto__=I,delete r[e],r[e]=t.value,r.__proto__=n):r[e]=t.value),o="get"in t,a="set"in t,i&&(o||a))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&F&&F.call(r,e,t.get),a&&N&&N.call(r,e,t.set),r};var $=x;function L(r,e,t){$(r,e,{configurable:!1,enumerable:!1,writable:!1,value:t})}var B=/./;function G(r){return"boolean"==typeof r}var M="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function W(){return M&&"symbol"==typeof Symbol.toStringTag}var X=Object.prototype.toString;var Z=Object.prototype.hasOwnProperty;function U(r,e){return null!=r&&Z.call(r,e)}var Y="function"==typeof Symbol?Symbol:void 0,q="function"==typeof Y?Y.toStringTag:"";var z=W()?function(r){var e,t,n;if(null==r)return X.call(r);t=r[q],e=U(r,q);try{r[q]=void 0}catch(e){return X.call(r)}return n=X.call(r),e?r[q]=t:delete r[q],n}:function(r){return X.call(r)},D=Boolean,H=Boolean.prototype.toString;var J=W();function K(r){return"object"==typeof r&&(r instanceof D||(J?function(r){try{return H.call(r),!0}catch(r){return!1}}(r):"[object Boolean]"===z(r)))}function Q(r){return G(r)||K(r)}L(Q,"isPrimitive",G),L(Q,"isObject",K);var rr="object"==typeof self?self:null,er="object"==typeof window?window:null,tr="object"==typeof global?global:null,nr="object"==typeof globalThis?globalThis:null;var ir=function(r){if(arguments.length){if(!G(r))throw new TypeError(A("invalid argument. Must provide a boolean. Value: `%s`.",r));if(r)return new Function("return this;")()}if(nr)return nr;if(rr)return rr;if(er)return er;if(tr)return tr;throw new Error("unexpected error. Unable to resolve global object.")}(),or=ir.document&&ir.document.childNodes,ar=Int8Array;function ur(){return/^\s*function\s*([^(]*)/i}var cr=/^\s*function\s*([^(]*)/i;L(ur,"REGEXP",cr);var fr=Array.isArray?Array.isArray:function(r){return"[object Array]"===z(r)};function lr(r){return null!==r&&"object"==typeof r}function sr(r){var e,t,n,i;if(("Object"===(t=z(r).slice(8,-1))||"Error"===t)&&r.constructor){if("string"==typeof(n=r.constructor).name)return n.name;if(e=cr.exec(n.toString()))return e[1]}return lr(i=r)&&(i._isBuffer||i.constructor&&"function"==typeof i.constructor.isBuffer&&i.constructor.isBuffer(i))?"Buffer":t}L(lr,"isObjectLikeArray",function(r){if("function"!=typeof r)throw new TypeError(A("invalid argument. Must provide a function. Value: `%s`.",r));return function(e){var t,n;if(!fr(e))return!1;if(0===(t=e.length))return!1;for(n=0;n<t;n++)if(!1===r(e[n]))return!1;return!0}}(lr));var pr="function"==typeof B||"object"==typeof ar||"function"==typeof or?function(r){return sr(r).toLowerCase()}:function(r){var e;return null===r?"null":"object"===(e=typeof r)?sr(r).toLowerCase():e};function gr(r){return"function"===pr(r)}function yr(){var r,e=arguments,t="https://stdlib.io/e/"+e[0]+"?";for(r=1;r<e.length;r++)t+="&arg[]="+encodeURIComponent(e[r]);return t}var hr=Number.POSITIVE_INFINITY;var dr,br=Object,vr=Object.getPrototypeOf;dr=gr(Object.getPrototypeOf)?vr:function(r){var e=function(r){return r.__proto__}(r);return e||null===e?e:"[object Function]"===z(r.constructor)?r.constructor.prototype:r instanceof Object?Object.prototype:null};var mr=dr;var wr=Object.prototype;function jr(r){var e;return!!function(r){return"object"==typeof r&&null!==r&&!fr(r)}(r)&&(e=function(r){return null==r?null:(r=br(r),mr(r))}(r),!e||!U(r,"constructor")&&U(e,"constructor")&&gr(e.constructor)&&"[object Function]"===z(e.constructor)&&U(e,"isPrototypeOf")&&gr(e.isPrototypeOf)&&(e===wr||function(r){var e;for(e in r)if(!U(r,e))return!1;return!0}(r)))}function Or(r){return"number"==typeof r}var _r=Number,Er=_r.prototype.toString;var Sr=W();function Pr(r){return"object"==typeof r&&(r instanceof _r||(Sr?function(r){try{return Er.call(r),!0}catch(r){return!1}}(r):"[object Number]"===z(r)))}function Tr(r){return Or(r)||Pr(r)}L(Tr,"isPrimitive",Or),L(Tr,"isObject",Pr);var kr=_r.NEGATIVE_INFINITY,Ar=Math.floor;function xr(r){return Ar(r)===r}function Ir(r){return r<hr&&r>kr&&xr(r)}function Vr(r){return Or(r)&&Ir(r)}function Fr(r){return Pr(r)&&Ir(r.valueOf())}function Nr(r){return Vr(r)||Fr(r)}function Rr(r){return Vr(r)&&r>0}function Cr(r){return Fr(r)&&r.valueOf()>0}function $r(r){return Rr(r)||Cr(r)}function Lr(r){if(r.__esModule)return r;var e=r.default;if("function"==typeof e){var t=function r(){return this instanceof r?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(r).forEach((function(e){var n=Object.getOwnPropertyDescriptor(r,e);Object.defineProperty(t,e,n.get?n:{enumerable:!0,get:function(){return r[e]}})})),t}L(Nr,"isPrimitive",Vr),L(Nr,"isObject",Fr),L($r,"isPrimitive",Rr),L($r,"isObject",Cr);var Br=Lr(Object.freeze({__proto__:null,default:()=>()=>{}}));function Gr(r){return Object.keys(Object(r))}var Mr,Wr=void 0!==Object.keys;function Xr(r){return"[object Arguments]"===z(r)}Mr=function(){return Xr(arguments)}();var Zr=Mr;function Ur(r){return"string"==typeof r}var Yr=String.prototype.valueOf;var qr=W();function zr(r){return"object"==typeof r&&(r instanceof String||(qr?function(r){try{return Yr.call(r),!0}catch(r){return!1}}(r):"[object String]"===z(r)))}function Dr(r){return Ur(r)||zr(r)}function Hr(r){return r!=r}function Jr(r){return Or(r)&&Hr(r)}function Kr(r){return Pr(r)&&Hr(r.valueOf())}function Qr(r){return Jr(r)||Kr(r)}L(Dr,"isPrimitive",Ur),L(Dr,"isObject",zr),L(Qr,"isPrimitive",Jr),L(Qr,"isObject",Kr);var re=Object.prototype.propertyIsEnumerable;var ee=!re.call("beep","0");function te(r,e){var t;return null!=r&&(!(t=re.call(r,e))&&ee&&Dr(r)?!Jr(e=+e)&&Vr(e)&&e>=0&&e<r.length:t)}var ne=Zr?Xr:function(r){return null!==r&&"object"==typeof r&&!fr(r)&&"number"==typeof r.length&&xr(r.length)&&r.length>=0&&r.length<=4294967295&&U(r,"callee")&&!te(r,"callee")},ie=Array.prototype.slice;var oe=te((function(){}),"prototype"),ae=!te({toString:null},"toString"),ue=9007199254740991;function ce(r,e,t){var n,i,o;if(!(o=r,"object"==typeof o&&null!==o&&"number"==typeof o.length&&xr(o.length)&&o.length>=0&&o.length<=ue||Ur(r)))throw new TypeError(A("invalid argument. First argument must be an array-like object. Value: `%s`.",r));if(0===(n=r.length))return-1;if(3===arguments.length){if(!Vr(t))throw new TypeError(A("invalid argument. Third argument must be an integer. Value: `%s`.",t));if(t>=0){if(t>=n)return-1;i=t}else(i=n+t)<0&&(i=0)}else i=0;if(Qr(e)){for(;i<n;i++)if(Qr(r[i]))return i}else for(;i<n;i++)if(r[i]===e)return i;return-1}function fe(r){return r.constructor&&r.constructor.prototype===r}var le=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],se="undefined"==typeof window?void 0:window;var pe=function(){var r;if("undefined"===pr(se))return!1;for(r in se)try{-1===ce(le,r)&&U(se,r)&&null!==se[r]&&"object"===pr(se[r])&&fe(se[r])}catch(r){return!0}return!1}(),ge="undefined"!=typeof window;var ye,he=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];ye=Wr?function(){return 2!==(Gr(arguments)||"").length}(1,2)?function(r){return ne(r)?Gr(ie.call(r)):Gr(r)}:Gr:function(r){var e,t,n,i,o,a,u;if(i=[],ne(r)){for(u=0;u<r.length;u++)i.push(u.toString());return i}if("string"==typeof r){if(r.length>0&&!U(r,"0"))for(u=0;u<r.length;u++)i.push(u.toString())}else{if(!1==(n="function"==typeof r)&&!lr(r))return i;t=oe&&n}for(o in r)t&&"prototype"===o||!U(r,o)||i.push(String(o));if(ae)for(e=function(r){if(!1===ge&&!pe)return fe(r);try{return fe(r)}catch(r){return!1}}(r),u=0;u<he.length;u++)a=he[u],e&&"constructor"===a||!U(r,a)||i.push(String(a));return i};var de=ye,be=Br("map-values-async:limit");function ve(r,e){var t,n,i;if(t={},arguments.length>1){if(n=function(r,e){return jr(e)?(U(e,"thisArg")&&(r.thisArg=e.thisArg),U(e,"series")&&(r.series=e.series,!G(r.series))?new TypeError(yr("1RP2o","series",r.series)):U(e,"limit")&&(r.limit=e.limit,!Rr(r.limit))?new TypeError(yr("1RP3P","limit",r.limit)):null):new TypeError(yr("1RP2V",e))}(t,r),n)throw n;i=e}else i=r;if(!gr(i))throw new TypeError(yr("1RP3q",i));return t.series?t.limit=1:t.limit||(t.limit=hr),function(r,e){if("object"!=typeof r||null===r)throw new TypeError(yr("1RP3L",r));if(!gr(e))throw new TypeError(yr("1RP3q",e));return function(r,e,t,n){var i,o,a,u,c,f,l,s,p;if(a=de(r),f=a.length,be("Number of keys: %d",f),s={},0===f)return be("Finished processing an object."),n(null,s);for(c=f<e.limit?f:e.limit,be("Concurrency limit: %d",c),be("Number of arguments: %d",t.length),i=f-1,o=0,l=-1,p=0;p<c;p++)l<i&&g();function g(){var n,i;function o(r,e){if(!u){if(r)return u=!0,y(r);be("Transform result => %s: %s",e,JSON.stringify(n)),s[e]=n,y()}}i=a[l+=1],n=r[i],be("%s: %s",i,JSON.stringify(n)),2===t.length?t.call(e.thisArg,i,o):3===t.length?t.call(e.thisArg,i,n,o):t.call(e.thisArg,i,n,r,o)}function y(r){return r?(be("Encountered an error: %s",r.message),n(r)):(be("Processed %d of %d properties.",o+=1,f),l<i?g():o===f?(be("Finished processing an object."),n(null,s)):void 0)}}(r,t,i,(function(r,t){if(r)return e(r);e(null,t)}))}}function me(r,e,t,n){if(arguments.length<4)return ve(e)(r,t);ve(e,t)(r,n)}return L(me,"factory",ve),me}));
//# sourceMappingURL=index.js.map
