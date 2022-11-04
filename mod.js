// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./mod.d.ts" />
var n="function"==typeof Object.defineProperty?Object.defineProperty:null;var t,e=Object.defineProperty,r=Object.prototype,o=r.toString,i=r.__defineGetter__,u=r.__defineSetter__,a=r.__lookupGetter__,f=r.__lookupSetter__;t=function(){try{return n({},"x",{}),!0}catch(n){return!1}}()?e:function(n,t,e){var l,c,s,p;if("object"!=typeof n||null===n||"[object Array]"===o.call(n))throw new TypeError("invalid argument. First argument must be an object. Value: `"+n+"`.");if("object"!=typeof e||null===e||"[object Array]"===o.call(e))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+e+"`.");if((c="value"in e)&&(a.call(n,t)||f.call(n,t)?(l=n.__proto__,n.__proto__=r,delete n[t],n[t]=e.value,n.__proto__=l):n[t]=e.value),s="get"in e,p="set"in e,c&&(s||p))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return s&&i&&i.call(n,t,e.get),p&&u&&u.call(n,t,e.set),n};var l=t;function c(n,t,e){l(n,t,{configurable:!1,enumerable:!1,writable:!1,value:e})}var s=Math.floor;function p(n){return s(n)===n}function g(n){return"number"==typeof n}var y="function"==typeof Symbol&&"symbol"==typeof Symbol("foo");function m(){return y&&"symbol"==typeof Symbol.toStringTag}var d=Object.prototype.toString;var v=Object.prototype.hasOwnProperty;function b(n,t){return null!=n&&v.call(n,t)}var h="function"==typeof Symbol?Symbol.toStringTag:"";var w=m()?function(n){var t,e,r;if(null==n)return d.call(n);e=n[h],t=b(n,h);try{n[h]=void 0}catch(t){return d.call(n)}return r=d.call(n),t?n[h]=e:delete n[h],r}:function(n){return d.call(n)},j=Number,E=j.prototype.toString;var O=m();function _(n){return"object"==typeof n&&(n instanceof j||(O?function(n){try{return E.call(n),!0}catch(n){return!1}}(n):"[object Number]"===w(n)))}function T(n){return g(n)||_(n)}c(T,"isPrimitive",g),c(T,"isObject",_);var x=Number.POSITIVE_INFINITY,S=j.NEGATIVE_INFINITY;function F(n){return n<x&&n>S&&p(n)}function I(n){return g(n)&&F(n)}function A(n){return _(n)&&F(n.valueOf())}function P(n){return I(n)||A(n)}function V(n){return I(n)&&n>=0}function k(n){return A(n)&&n.valueOf()>=0}function B(n){return V(n)||k(n)}function N(n){return Object.keys(Object(n))}c(P,"isPrimitive",I),c(P,"isObject",A),c(B,"isPrimitive",V),c(B,"isObject",k);var M=void 0!==Object.keys;function R(n){return"[object Arguments]"===w(n)}var L=function(){return R(arguments)}();function G(n){return"string"==typeof n}var U=String.prototype.valueOf;var Y=m();function C(n){return"object"==typeof n&&(n instanceof String||(Y?function(n){try{return U.call(n),!0}catch(n){return!1}}(n):"[object String]"===w(n)))}function X(n){return G(n)||C(n)}function H(n){return n!=n}function W(n){return g(n)&&H(n)}function q(n){return _(n)&&H(n.valueOf())}function D(n){return W(n)||q(n)}c(X,"isPrimitive",G),c(X,"isObject",C),c(D,"isPrimitive",W),c(D,"isObject",q);var z=Object.prototype.propertyIsEnumerable;var J=!z.call("beep","0");function K(n,t){var e;return null!=n&&(!(e=z.call(n,t))&&J&&X(n)?!W(t=+t)&&I(t)&&t>=0&&t<n.length:e)}var Q=Array.isArray?Array.isArray:function(n){return"[object Array]"===w(n)};var Z=L?R:function(n){return null!==n&&"object"==typeof n&&!Q(n)&&"number"==typeof n.length&&p(n.length)&&n.length>=0&&n.length<=4294967295&&b(n,"callee")&&!K(n,"callee")},$=Array.prototype.slice;function nn(n){return null!==n&&"object"==typeof n}c(nn,"isObjectLikeArray",function(n){if("function"!=typeof n)throw new TypeError("invalid argument. Must provide a function. Value: `"+n+"`.");return function(t){var e,r;if(!Q(t))return!1;if(0===(e=t.length))return!1;for(r=0;r<e;r++)if(!1===n(t[r]))return!1;return!0}}(nn));var tn=K((function(){}),"prototype"),en=!K({toString:null},"toString");function rn(n){return"object"==typeof n&&null!==n&&"number"==typeof n.length&&p(n.length)&&n.length>=0&&n.length<=9007199254740991}function on(n,t,e){var r,o;if(!rn(n)&&!G(n))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+n+"`.");if(0===(r=n.length))return-1;if(3===arguments.length){if(!I(e))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+e+"`.");if(e>=0){if(e>=r)return-1;o=e}else(o=r+e)<0&&(o=0)}else o=0;if(D(t)){for(;o<r;o++)if(D(n[o]))return o}else for(;o<r;o++)if(n[o]===t)return o;return-1}var un=/./;function an(n){return"boolean"==typeof n}var fn=Boolean.prototype.toString;var ln=m();function cn(n){return"object"==typeof n&&(n instanceof Boolean||(ln?function(n){try{return fn.call(n),!0}catch(n){return!1}}(n):"[object Boolean]"===w(n)))}function sn(n){return an(n)||cn(n)}function pn(){return new Function("return this;")()}c(sn,"isPrimitive",an),c(sn,"isObject",cn);var gn="object"==typeof self?self:null,yn="object"==typeof window?window:null,mn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},dn="object"==typeof mn?mn:null;var vn=function(n){if(arguments.length){if(!an(n))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+n+"`.");if(n)return pn()}if(gn)return gn;if(yn)return yn;if(dn)return dn;throw new Error("unexpected error. Unable to resolve global object.")}(),bn=vn.document&&vn.document.childNodes,hn=Int8Array;function wn(){return/^\s*function\s*([^(]*)/i}var jn=/^\s*function\s*([^(]*)/i;function En(n){var t,e,r,o;if(("Object"===(e=w(n).slice(8,-1))||"Error"===e)&&n.constructor){if("string"==typeof(r=n.constructor).name)return r.name;if(t=jn.exec(r.toString()))return t[1]}return nn(o=n)&&(o._isBuffer||o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o))?"Buffer":e}c(wn,"REGEXP",jn);var On="function"==typeof un||"object"==typeof hn||"function"==typeof bn?function(n){return En(n).toLowerCase()}:function(n){var t;return null===n?"null":"object"===(t=typeof n)?En(n).toLowerCase():t};function _n(n){return n.constructor&&n.constructor.prototype===n}var Tn=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],xn="undefined"==typeof window?void 0:window;var Sn=function(){var n;if("undefined"===On(xn))return!1;for(n in xn)try{-1===on(Tn,n)&&b(xn,n)&&null!==xn[n]&&"object"===On(xn[n])&&_n(xn[n])}catch(n){return!0}return!1}(),Fn="undefined"!=typeof window;var In=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var An=M?function(){return 2!==(N(arguments)||"").length}(1,2)?function(n){return Z(n)?N($.call(n)):N(n)}:N:function(n){var t,e,r,o,i,u,a;if(o=[],Z(n)){for(a=0;a<n.length;a++)o.push(a.toString());return o}if("string"==typeof n){if(n.length>0&&!b(n,"0"))for(a=0;a<n.length;a++)o.push(a.toString())}else{if(!1==(r="function"==typeof n)&&!nn(n))return o;e=tn&&r}for(i in n)e&&"prototype"===i||!b(n,i)||o.push(String(i));if(en)for(t=function(n){if(!1===Fn&&!Sn)return _n(n);try{return _n(n)}catch(n){return!1}}(n),a=0;a<In.length;a++)u=In[a],t&&"constructor"===u||!b(n,u)||o.push(String(u));return o};function Pn(n){return"function"===On(n)}var Vn,kn=Object.getPrototypeOf;Vn=Pn(Object.getPrototypeOf)?kn:function(n){var t=function(n){return n.__proto__}(n);return t||null===t?t:"[object Function]"===w(n.constructor)?n.constructor.prototype:n instanceof Object?Object.prototype:null};var Bn=Vn;var Nn=Object.prototype;function Mn(n){var t;return!!function(n){return"object"==typeof n&&null!==n&&!Q(n)}(n)&&(t=function(n){return null==n?null:(n=Object(n),Bn(n))}(n),!t||!b(n,"constructor")&&b(t,"constructor")&&Pn(t.constructor)&&"[object Function]"===w(t.constructor)&&b(t,"isPrototypeOf")&&Pn(t.isPrototypeOf)&&(t===Nn||function(n){var t;for(t in n)if(!b(n,t))return!1;return!0}(n)))}function Rn(n,t){var e,r,o,i,u,a,f,l=!0;if(!nn(n))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+n+"`.");if(arguments.length>1){if(!Mn(t))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+t+"`.");if(b(t,"duplicates")&&!an(l=t.duplicates))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+l+"`.")}if(r=(e=An(n)).length,u={},l)for(f=0;f<r;f++)b(u,i=n[o=e[f]])?(a=u[i],Q(a)?u[i].push(o):u[i]=[a,o]):u[i]=o;else for(f=0;f<r;f++)u[n[o=e[f]]]=o;return u}var Ln=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Gn(){return Ln.slice()}var Un=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];function Yn(){return Un.slice()}function Cn(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}}function Xn(n,t,e){l(n,t,{configurable:!1,enumerable:!0,writable:!1,value:e})}c(Yn,"enum",Cn),function(n,t){var e,r,o;for(e=An(t),o=0;o<e.length;o++)Xn(n,r=e[o],t[r])}(Yn,{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256});var Hn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function Wn(){return{bool:Hn.bool,int8:Hn.int8,uint8:Hn.uint8,uint8c:Hn.uint8c,int16:Hn.int16,uint16:Hn.uint16,int32:Hn.int32,uint32:Hn.uint32,int64:Hn.int64,uint64:Hn.uint64,float32:Hn.float32,float64:Hn.float64,complex64:Hn.complex64,complex128:Hn.complex128,binary:Hn.binary,generic:Hn.generic,notype:Hn.notype,userdefined_type:Hn.userdefined_type}}c(Gn,"enum",Wn),function(n,t){var e,r,o;for(e=An(t),o=0;o<e.length;o++)Xn(n,r=e[o],t[r])}(Gn,Wn());var qn=Rn(Wn(),{duplicates:!1});var Dn={bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256};function zn(n){var t=typeof n;return"string"===t?null===function(n){var t=Dn[n];return"number"==typeof t?t:null}(n)?null:n:"number"===t?function(n){var t=qn[n];return"string"==typeof t?t:null}(n):null}function Jn(n,t,e){var r,o,i,u,a,f,l,c,s;if(!("object"==typeof(s=n)&&null!==s&&"number"==typeof s.length&&p(s.length)&&s.length>=0&&s.length<=4294967295))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+n+"`.");if(!V(t))throw new TypeError("invalid argument. Second argument must be a nonnegative integer. Value: `"+t+"`.");if(!V(e))throw new TypeError("invalid argument. Third argument must be a nonnegative integer. Value: `"+e+"`.");if(0===(r=n.length))throw new RangeError("invalid argument. First argument must contain at least one element.");if(r%(a=t+e)!=0)throw new RangeError("invalid arguments. The length of the first argument is incompatible with the second and third arguments.");for(o=[],i=[],f=2*a,c=2*t,l=0;l<=f;l++)0===l?l===c?i.push("() => ("):i.push("("):l===f?l===c?i.push(") => ()"):i.push(")"):l===c?i.push(") => ("):l%2==1?i.push(""):i.push(", ");for(l=0;l<r;l++)null===(u=zn(n[l]))&&(u=n[l]),i[2*(c=l%a)+1]=u,c===a-1&&o.push(i.join(""));return o}function Kn(n,t,e,r){return c(e,"nargs",r?n.nargs+n.nin+n.nout:n.nargs),c(e,"nin",n.nin),c(e,"nout",n.nout),function(n,t,e){l(n,t,{configurable:!1,enumerable:!1,get:e})}(e,"types",(function(){return Jn(t,n.nin,n.nout)})),e}var Qn={nargs:7,nin:1,nout:1},Zn=[11,11,11,15,10,10,10,11,10,15,15,15,6,11,6,15,4,10,4,11,4,15,1,10,1,11,1,15,7,11,7,15,5,10,5,11,5,15,2,10,2,11,2,15,3,10,3,11,3,15];function $n(n){return I(n)&&n>0}function nt(n){return A(n)&&n.valueOf()>0}function tt(n){return $n(n)||nt(n)}c(tt,"isPrimitive",$n),c(tt,"isObject",nt);var et=function(n){if("function"!=typeof n)throw new TypeError("invalid argument. Must provide a function. Value: `"+n+"`.");return function(t){var e,r;if(!function(n){return null!=n&&"function"!=typeof n&&"number"==typeof n.length&&p(n.length)&&n.length>=0&&n.length<=4294967295}(t))return!1;if(0===(e=t.length))return!1;for(r=0;r<e;r++)if(!1===n(t[r]))return!1;return!0}}(Pn);function rt(n){return Math.abs(n)}function ot(n,t,e,r,o,i,u,a,f){var l,c,s,p;for(l=i,s=0;s<n;s++){for(c=f,p=0;p<t&&e[l+p*o]===u[c];p++)c+=a;if(p===t)return s;l+=r}return-1}function it(n,t,e,r,o,i){var u,a,f,l,c,s;if(Pn(n))s=n;else if(!et(n))throw new TypeError("invalid argument. First argument must be either a function or an array of functions. Value: `"+n+"`.");if(!rn(t))throw new TypeError("invalid argument. Second argument must be an array-like object. Value: `"+t+"`.");if(!rn(e)&&null!==e)throw new TypeError("invalid argument. Third argument must be an array-like object or `null`. Value: `"+e+"`.");if(!tt(r))throw new TypeError("invalid argument. Fourth argument must be a positive integer. Value: `"+r+"`.");if(!V(o))throw new TypeError("invalid argument. Fifth argument must be a nonnegative integer. Value: `"+o+"`.");if(!V(i))throw new TypeError("invalid argument. Sixth argument must be a nonnegative integer. Value: `"+i+"`.");if(0===(f=o+i))throw new Error("invalid arguments. Interface must accept at least one strided input and/or output array. Based on the provided arguments, `nin+nout` equals `0`.");if(s){if(!I(l=t.length/f))throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.")}else if(l=n.length,t.length!==l*f)throw new Error("invalid argument. Unexpected number of types. A type must be specified for each strided input and output array for each provided strided array function.");if(e&&e.length!==l)throw new Error("invalid argument. The third argument must have the same number of elements as the first argument.");if(3*f+1===r)a=!1;else{if(4*f+1!==r)throw new Error("invalid argument. Fourth argument is incompatible with the number of strided input and output arrays.");a=!0}return c=o*(u=a?4:3)+1,function(){var p,g,y,m,d,v,b,h,w,j,E,O;if((v=arguments.length)!==r){if(v<r)throw new Error("invalid invocation. Insufficient arguments.");throw new Error("invalid invocation. Too many arguments.")}if(!I(h=arguments[0]))throw new TypeError("invalid argument. First argument must be an integer.");for(d=[h],m=[],E=1;E<r;E+=u)m.push(arguments[E]);for(p=[],E=3;E<r;E+=u){if(!I(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array stride argument must be an integer."):new TypeError("invalid argument. Output array stride argument must be an integer.");p.push(w)}if(a)for(g=[],E=4;E<r;E+=u){if(!V(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array offset argument must be a nonnegative integer."):new TypeError("invalid argument. Output array offset argument must be a nonnegative integer.");g.push(w)}for(y=[],E=2;E<r;E+=u){if(!rn(w=arguments[E]))throw E<c?new TypeError("invalid argument. Input array argument must be an array-like object."):new TypeError("invalid argument. Output array argument must be an array-like object.");if(O=(E-2)/u,a){if(b=g[O]+(h-1)*p[O],h>0&&(b<0||b>=w.length))throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.")}else if((h-1)*rt(p[O])>=w.length)throw E<c?new RangeError("invalid argument. Input array argument has insufficient elements based on the associated stride and the number of indexed elements."):new RangeError("invalid argument. Output array argument has insufficient elements based on the associated stride and the number of indexed elements.");y.push(w)}if((b=ot(l,f,t,f,1,0,m,1,0))<0)throw new TypeError("invalid arguments. Unable to resolve a strided array function supporting the provided array argument data types.");j=s||n[b];e?a?j(y,d,p,g,e[b]):j(y,d,p,e[b]):a?j(y,d,p,g):j(y,d,p);if(1===i)return y[f-1];if(0===i)return;return y.slice(o)}}function ut(n,t){return n[t]}function at(n,t){return n.get(t)}function ft(n,t,e){n[t]=e}function lt(n,t,e){n.set(e,t)}function ct(n,t,e,r){var o,i,u,a;return(u=n[0]).get&&u.set&&(o=at),(a=n[1]).get&&a.set&&(i=lt),o||i?function(n,t,e,r,o){var i,u,a,f,l,c,s,p,g,y;if(!((g=t[0])<=0))for(l=(a=e[0])<0?(1-g)*a:0,c=(f=e[1])<0?(1-g)*f:0,s=n[0],p=n[1],i=r[0],u=r[1],y=0;y<g;y++)u(p,c,o(i(s,l))),l+=a,c+=f}(n,t,e,[o=o||ut,i=i||ft],r):function(n,t,e,r){var o,i,u,a,f,l,c,s;if(!((c=t[0])<=0))for(u=(o=e[0])<0?(1-c)*o:0,a=(i=e[1])<0?(1-c)*i:0,f=n[0],l=n[1],s=0;s<c;s++)l[a]=r(f[u]),u+=o,a+=i}(n,t,e,r)}function st(n,t,e,r,o){var i,u,a,f;return(a=n[0]).get&&a.set&&(i=at),(f=n[1]).get&&f.set&&(u=lt),i||u?function(n,t,e,r,o,i){var u,a,f,l,c,s,p,g,y,m;if(!((y=t[0])<=0))for(c=r[0],s=r[1],f=e[0],l=e[1],p=n[0],g=n[1],u=o[0],a=o[1],m=0;m<y;m++)a(g,s,i(u(p,c))),c+=f,s+=l}(n,t,e,r,[i=i||ut,u=u||ft],o):function(n,t,e,r,o){var i,u,a,f,l,c,s,p;if(!((s=t[0])<=0))for(a=r[0],f=r[1],i=e[0],u=e[1],l=n[0],c=n[1],p=0;p<s;p++)c[f]=o(l[a]),a+=i,f+=u}(n,t,e,r,o)}c(ct,"ndarray",st);var pt=Rn(Wn(),{duplicates:!1});var gt=Wn();function yt(n){var t=typeof n;return"number"===t?function(n){var t=pt[n];return"string"==typeof t?t:null}(n)?n:null:"string"===t?function(n){var t=gt[n];return"number"==typeof t?t:null}(n):null}function mt(n){return.017453292519943295*n}var dt="function"==typeof Math.fround?Math.fround:null,vt="function"==typeof Float32Array;var bt="function"==typeof Float32Array?Float32Array:null;var ht,wt="function"==typeof Float32Array?Float32Array:void 0;ht=function(){var n,t,e;if("function"!=typeof bt)return!1;try{t=new bt([1,3.14,-3.14,5e40]),e=t,n=(vt&&e instanceof Float32Array||"[object Float32Array]"===w(e))&&1===t[0]&&3.140000104904175===t[1]&&-3.140000104904175===t[2]&&t[3]===x}catch(t){n=!1}return n}()?wt:function(){throw new Error("not implemented")};var jt=new ht(1);var Et="function"==typeof dt?dt:function(n){return jt[0]=n,jt[0]},Ot=Et(.017453292519943295);function _t(n){return Et(Et(n)*Ot)}var Tt=[mt,mt,_t,mt,mt,mt,mt,mt,_t,mt,mt,_t,mt,mt,mt,mt,_t,mt,mt,_t,mt,mt,_t,mt,mt],xt=it(ct,Zn,Tt,Qn.nargs,Qn.nin,Qn.nout);function St(n,t,e,r,o,i,u){return xt(n,yt(t),e,r,yt(o),i,u)}var Ft=it(st,Zn,Tt,Qn.nargs+Qn.nin+Qn.nout,Qn.nin,Qn.nout);function It(n,t,e,r,o,i,u,a,f){return Ft(n,yt(t),e,r,o,yt(i),u,a,f)}c(St,"ndarray",It),Kn(Qn,Zn,St,!1),Kn(Qn,Zn,St.ndarray,!0);export{St as default,It as ndarray};
//# sourceMappingURL=mod.js.map
