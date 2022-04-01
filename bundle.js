// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t="undefined"!=typeof globalThis?globalThis:t||self).sameKindCasts=n()}(this,(function(){"use strict";function t(t){if(t.__esModule)return t;var n=Object.defineProperty({},"__esModule",{value:!0});return Object.keys(t).forEach((function(r){var e=Object.getOwnPropertyDescriptor(t,r);Object.defineProperty(n,r,e.get?e:{enumerable:!0,get:function(){return t[r]}})})),n}var n=function(t){return Object.keys(Object(t))},r=n;var e=function(){return function(){return 2!==(r(arguments)||"").length}(1,2)},i=void 0!==Object.keys;var o=function(){return"function"==typeof Symbol&&"symbol"==typeof Symbol("foo")}();var u=function(){return o&&"symbol"==typeof Symbol.toStringTag},c=Object.prototype.toString,l=c;var a=function(t){return l.call(t)},f=Object.prototype.hasOwnProperty;var p=function(t,n){return null!=t&&f.call(t,n)},v="function"==typeof Symbol?Symbol.toStringTag:"",s=p,y=v,b=c;var m=a,g=function(t){var n,r,e;if(null==t)return b.call(t);r=t[y],n=s(t,y);try{t[y]=void 0}catch(n){return b.call(t)}return e=b.call(t),n?t[y]=r:delete t[y],e},d=u()?g:m,h=d;var j,w=function(t){return"[object Arguments]"===h(t)},x=w;j=function(){return x(arguments)}();var O=j,_="function"==typeof Object.defineProperty?Object.defineProperty:null;var P=function(){try{return _({},"x",{}),!0}catch(t){return!1}},S=Object.defineProperty,E=Object.prototype,T=E.toString,I=E.__defineGetter__,A=E.__defineSetter__,k=E.__lookupGetter__,V=E.__lookupSetter__;var N=function(t,n,r){var e,i,o,u;if("object"!=typeof t||null===t||"[object Array]"===T.call(t))throw new TypeError("invalid argument. First argument must be an object. Value: `"+t+"`.");if("object"!=typeof r||null===r||"[object Array]"===T.call(r))throw new TypeError("invalid argument. Property descriptor must be an object. Value: `"+r+"`.");if((i="value"in r)&&(k.call(t,n)||V.call(t,n)?(e=t.__proto__,t.__proto__=E,delete t[n],t[n]=r.value,t.__proto__=e):t[n]=r.value),o="get"in r,u="set"in r,i&&(o||u))throw new Error("invalid argument. Cannot specify one or more accessors and a value or writable attribute in the property descriptor.");return o&&I&&I.call(t,n,r.get),u&&A&&A.call(t,n,r.set),t},B=S,F=N,G=P()?B:F,L=G;var M=function(t,n,r){L(t,n,{configurable:!1,enumerable:!1,writable:!1,value:r})},C=M;var X=function(t){return"string"==typeof t},Y=String.prototype.valueOf;var D=d,H=function(t){try{return Y.call(t),!0}catch(t){return!1}},R=u();var W=function(t){return"object"==typeof t&&(t instanceof String||(R?H(t):"[object String]"===D(t)))},z=X,K=W;var U=C,q=function(t){return z(t)||K(t)},J=W;U(q,"isPrimitive",X),U(q,"isObject",J);var Q=q;var Z=function(t){return"number"==typeof t},$=Number,tt=$.prototype.toString;var nt=d,rt=$,et=function(t){try{return tt.call(t),!0}catch(t){return!1}},it=u();var ot=function(t){return"object"==typeof t&&(t instanceof rt||(it?et(t):"[object Number]"===nt(t)))},ut=Z,ct=ot;var lt=C,at=function(t){return ut(t)||ct(t)},ft=ot;lt(at,"isPrimitive",Z),lt(at,"isObject",ft);var pt=at;var vt=function(t){return t!=t},st=pt.isPrimitive,yt=vt;var bt=function(t){return st(t)&&yt(t)},mt=pt.isObject,gt=vt;var dt=function(t){return mt(t)&&gt(t.valueOf())},ht=bt,jt=dt;var wt=C,xt=function(t){return ht(t)||jt(t)},Ot=dt;wt(xt,"isPrimitive",bt),wt(xt,"isObject",Ot);var _t=xt,Pt=Number.POSITIVE_INFINITY,St=$.NEGATIVE_INFINITY,Et=Math.floor;var Tt=function(t){return Et(t)===t},It=Pt,At=St,kt=Tt;var Vt=function(t){return t<It&&t>At&&kt(t)},Nt=pt.isPrimitive,Bt=Vt;var Ft=function(t){return Nt(t)&&Bt(t)},Gt=pt.isObject,Lt=Vt;var Mt=function(t){return Gt(t)&&Lt(t.valueOf())},Ct=Ft,Xt=Mt;var Yt=C,Dt=function(t){return Ct(t)||Xt(t)},Ht=Mt;Yt(Dt,"isPrimitive",Ft),Yt(Dt,"isObject",Ht);var Rt,Wt=Dt,zt=Object.prototype.propertyIsEnumerable;Rt=!zt.call("beep","0");var Kt=Q,Ut=_t.isPrimitive,qt=Wt.isPrimitive,Jt=zt,Qt=Rt;var Zt=function(t,n){var r;return null!=t&&(!(r=Jt.call(t,n))&&Qt&&Kt(t)?!Ut(n=+n)&&qt(n)&&n>=0&&n<t.length:r)},$t=Zt,tn=d;var nn=Array.isArray?Array.isArray:function(t){return"[object Array]"===tn(t)},rn=p,en=$t,on=nn,un=Tt;var cn=O?w:function(t){return null!==t&&"object"==typeof t&&!on(t)&&"number"==typeof t.length&&un(t.length)&&t.length>=0&&t.length<=4294967295&&rn(t,"callee")&&!en(t,"callee")},ln=cn,an=n,fn=Array.prototype.slice;var pn=function(t){return ln(t)?an(fn.call(t)):an(t)},vn=nn;var sn=function(t){return null!==t&&"object"==typeof t};C(sn,"isObjectLikeArray",function(t){if("function"!=typeof t)throw new TypeError("invalid argument. Must provide a function. Value: `"+t+"`.");return function(n){var r,e;if(!vn(n))return!1;if(0===(r=n.length))return!1;for(e=0;e<r;e++)if(!1===t(n[e]))return!1;return!0}}(sn));var yn=sn;var bn=$t((function(){}),"prototype"),mn=!$t({toString:null},"toString"),gn=Tt;var dn=_t,hn=function(t){return"object"==typeof t&&null!==t&&"number"==typeof t.length&&gn(t.length)&&t.length>=0&&t.length<=9007199254740991},jn=Q.isPrimitive,wn=Wt.isPrimitive;var xn=function(t,n,r){var e,i;if(!hn(t)&&!jn(t))throw new TypeError("invalid argument. First argument must be an array-like object. Value: `"+t+"`.");if(0===(e=t.length))return-1;if(3===arguments.length){if(!wn(r))throw new TypeError("invalid argument. `fromIndex` must be an integer. Value: `"+r+"`.");if(r>=0){if(r>=e)return-1;i=r}else(i=e+r)<0&&(i=0)}else i=0;if(dn(n)){for(;i<e;i++)if(dn(t[i]))return i}else for(;i<e;i++)if(t[i]===n)return i;return-1},On=xn,_n=/./;var Pn=function(t){return"boolean"==typeof t},Sn=Boolean.prototype.toString;var En=d,Tn=function(t){try{return Sn.call(t),!0}catch(t){return!1}},In=u();var An=function(t){return"object"==typeof t&&(t instanceof Boolean||(In?Tn(t):"[object Boolean]"===En(t)))},kn=Pn,Vn=An;var Nn=C,Bn=function(t){return kn(t)||Vn(t)},Fn=An;Nn(Bn,"isPrimitive",Pn),Nn(Bn,"isObject",Fn);var Gn=Bn;var Ln=function(){return new Function("return this;")()},Mn="object"==typeof self?self:null,Cn="object"==typeof window?window:null,Xn="undefined"!=typeof global?global:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{},Yn="object"==typeof Xn?Xn:null;module.exports=Yn;var Dn=Gn.isPrimitive,Hn=Ln,Rn=Mn,Wn=Cn,zn=t(Object.freeze({__proto__:null}));var Kn=function(t){if(arguments.length){if(!Dn(t))throw new TypeError("invalid argument. Must provide a boolean primitive. Value: `"+t+"`.");if(t)return Hn()}if(Rn)return Rn;if(Wn)return Wn;if(zn)return zn;throw new Error("unexpected error. Unable to resolve global object.")},Un=Kn(),qn=Un.document&&Un.document.childNodes,Jn=Int8Array,Qn=_n,Zn=qn,$n=Jn;var tr=function(){return"function"==typeof Qn||"object"==typeof $n||"function"==typeof Zn};var nr=function(){return/^\s*function\s*([^(]*)/i},rr=nr;C(rr,"REGEXP",nr());var er=yn;var ir=d,or=rr.REGEXP,ur=function(t){return er(t)&&(t._isBuffer||t.constructor&&"function"==typeof t.constructor.isBuffer&&t.constructor.isBuffer(t))};var cr=function(t){var n,r,e;if(("Object"===(r=ir(t).slice(8,-1))||"Error"===r)&&t.constructor){if("string"==typeof(e=t.constructor).name)return e.name;if(n=or.exec(e.toString()))return n[1]}return ur(t)?"Buffer":r},lr=cr;var ar=cr;var fr=function(t){var n;return null===t?"null":"object"===(n=typeof t)?lr(t).toLowerCase():n},pr=function(t){return ar(t).toLowerCase()},vr=tr()?pr:fr;var sr,yr=function(t){return t.constructor&&t.constructor.prototype===t},br="undefined"==typeof window?void 0:window,mr=p,gr=On,dr=vr,hr=yr,jr=["console","external","frame","frameElement","frames","innerHeight","innerWidth","outerHeight","outerWidth","pageXOffset","pageYOffset","parent","scrollLeft","scrollTop","scrollX","scrollY","self","webkitIndexedDB","webkitStorageInfo","window"],wr=br;sr=function(){var t;if("undefined"===dr(wr))return!1;for(t in wr)try{-1===gr(jr,t)&&mr(wr,t)&&null!==wr[t]&&"object"===dr(wr[t])&&hr(wr[t])}catch(t){return!0}return!1}();var xr="undefined"!=typeof window,Or=sr,_r=yr,Pr=xr;var Sr=yn,Er=p,Tr=cn,Ir=bn,Ar=mn,kr=function(t){if(!1===Pr&&!Or)return _r(t);try{return _r(t)}catch(t){return!1}},Vr=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"];var Nr=n,Br=pn,Fr=function(t){var n,r,e,i,o,u,c;if(i=[],Tr(t)){for(c=0;c<t.length;c++)i.push(c.toString());return i}if("string"==typeof t){if(t.length>0&&!Er(t,"0"))for(c=0;c<t.length;c++)i.push(c.toString())}else{if(!1===(e="function"==typeof t)&&!Sr(t))return i;r=Ir&&e}for(o in t)r&&"prototype"===o||!Er(t,o)||i.push(String(o));if(Ar)for(n=kr(t),c=0;c<Vr.length;c++)u=Vr[c],n&&"constructor"===u||!Er(t,u)||i.push(String(u));return i},Gr=i?e()?Br:Nr:Fr,Lr=nn;var Mr=function(t){return"object"==typeof t&&null!==t&&!Lr(t)},Cr=vr;var Xr=function(t){return"function"===Cr(t)},Yr=Object.getPrototypeOf;var Dr=function(t){return t.__proto__},Hr=d,Rr=Dr;var Wr=function(t){var n=Rr(t);return n||null===n?n:"[object Function]"===Hr(t.constructor)?t.constructor.prototype:t instanceof Object?Object.prototype:null},zr=Yr,Kr=Wr,Ur=Xr(Object.getPrototypeOf)?zr:Kr;var qr=Mr,Jr=Xr,Qr=function(t){return null==t?null:(t=Object(t),Ur(t))},Zr=p,$r=d,te=Object.prototype;var ne=function(t){var n;return!!qr(t)&&(!(n=Qr(t))||!Zr(t,"constructor")&&Zr(n,"constructor")&&Jr(n.constructor)&&"[object Function]"===$r(n.constructor)&&Zr(n,"isPrototypeOf")&&Jr(n.isPrototypeOf)&&(n===te||function(t){var n;for(n in t)if(!Zr(t,n))return!1;return!0}(t)))},re=Gr,ee=nn,ie=ne,oe=yn,ue=Gn.isPrimitive,ce=p;var le=function(t,n){var r,e,i,o,u,c,l,a=!0;if(!oe(t))throw new TypeError("invalid argument. First argument must be object-like. Value: `"+t+"`.");if(arguments.length>1){if(!ie(n))throw new TypeError("invalid argument. Options arguments must be an object. Value: `"+n+"`.");if(ce(n,"duplicates")&&(a=n.duplicates,!ue(a)))throw new TypeError("invalid argument. `duplicates` option must be a boolean primitive. Option: `"+a+"`.")}if(e=(r=re(t)).length,u={},a)for(l=0;l<e;l++)o=t[i=r[l]],ce(u,o)?(c=u[o],ee(c)?u[o].push(i):u[o]=[c,i]):u[o]=i;else for(l=0;l<e;l++)u[t[i=r[l]]]=i;return u},ae=le,fe=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var pe=function(){return fe.slice()},ve=["binary","complex64","complex128","float32","float64","generic","int16","int32","int8","uint16","uint32","uint8","uint8c"];var se=G;var ye=function(t,n,r){se(t,n,{configurable:!1,enumerable:!0,writable:!1,value:r})},be=ye,me=be,ge=Gr;var de=function(t,n){var r,e,i;for(r=ge(n),i=0;i<r.length;i++)e=r[i],me(t,e,n[e]);return t},he=function(){return ve.slice()},je=function(){return{bool:0,int8:1,uint8:2,uint8c:3,int16:4,uint16:5,int32:6,uint32:7,int64:8,uint64:9,float32:10,float64:11,complex64:12,complex128:13,binary:14,generic:15,notype:17,userdefined_type:256}},we=de;C(he,"enum",je),we(he,je());var xe=he,Oe=(0,xe.enum)();var _e=be,Pe=Gr;var Se=function(t,n){var r,e,i;for(r=Pe(n),i=0;i<r.length;i++)e=r[i],_e(t,e,n[e]);return t},Ee=pe,Te=function(){return{bool:Oe.bool,int8:Oe.int8,uint8:Oe.uint8,uint8c:Oe.uint8c,int16:Oe.int16,uint16:Oe.uint16,int32:Oe.int32,uint32:Oe.uint32,int64:Oe.int64,uint64:Oe.uint64,float32:Oe.float32,float64:Oe.float64,complex64:Oe.complex64,complex128:Oe.complex128,binary:Oe.binary,generic:Oe.generic,notype:Oe.notype,userdefined_type:Oe.userdefined_type}},Ie=Se;C(Ee,"enum",Te),Ie(Ee,Te());var Ae=ae((0,Ee.enum)(),{duplicates:!1});var ke=function(t){var n=Ae[t];return"string"==typeof n?n:null},Ve=(0,xe.enum)();var Ne=ke,Be=function(t){var n=Ve[t];return"number"==typeof n?n:null};var Fe,Ge=Gr,Le=p,Me=function(t){var n=typeof t;return"string"===n?null===Be(t)?null:t:"number"===n?Ne(t):null},Ce={float64:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},float32:{float64:1,float32:1,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int32:{float64:1,float32:0,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:0,binary:0,generic:1},int16:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},int8:{float64:1,float32:1,int32:1,int16:1,int8:1,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:1},uint32:{float64:1,float32:0,int32:0,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:0,binary:0,generic:1},uint16:{float64:1,float32:1,int32:1,int16:0,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},uint8c:{float64:1,float32:1,int32:1,int16:1,int8:0,uint32:1,uint16:1,uint8:1,uint8c:1,complex128:1,complex64:1,binary:0,generic:1},complex128:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:0},complex64:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:1,complex64:1,binary:0,generic:0},generic:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:0,generic:1},binary:{float64:0,float32:0,int32:0,int16:0,int8:0,uint32:0,uint16:0,uint8:0,uint8c:0,complex128:0,complex64:0,binary:1,generic:0}};function Xe(){var t,n,r,e,i,o,u,c,l;for(r={},n=(t=Ge(Ce)).length,l=0;l<n;l++){for(i=t[l],u=Ce[i],e={},c=0;c<n;c++)e[o=t[c]]=u[o];r[i]=e}return r}function Ye(){var t,n,r,e,i,o,u,c,l;for(r={},n=(t=Ge(Ce)).length,l=0;l<n;l++){for(i=t[l],u=Ce[i],e=[],c=0;c<n;c++)1===u[o=t[c]]&&e.push(o);r[i]=e}return r}var De=function(t){return 0===arguments.length?Xe():(void 0===Fe&&(Fe=Ye()),t=Me(t),Le(Fe,t)?Fe[t].slice():null)};return De}));
//# sourceMappingURL=bundle.js.map