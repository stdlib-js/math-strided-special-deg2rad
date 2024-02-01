"use strict";var a=function(t,e){return function(){return e||t((e={exports:{}}).exports,e),e.exports}};var n=a(function($,B){B.exports={nargs:7,nin:1,nout:1}});var s=a(function(rr,C){C.exports=[11,11,11,15,10,10,10,11,10,15,15,15,6,11,6,15,4,10,4,11,4,15,1,10,1,11,1,15,7,11,7,15,5,10,5,11,5,15,2,10,2,11,2,15,3,10,3,11,3,15]});var y=a(function(er,m){
var r=require('@stdlib/math-base-special-deg2rad/dist'),i=require('@stdlib/math-base-special-deg2radf/dist'),D=[r,r,i,r,r,r,r,r,i,r,r,i,r,r,r,r,i,r,r,i,r,r,i,r,r];m.exports=D
});var j=a(function(ar,x){
var F=require('@stdlib/strided-dispatch/dist'),G=require('@stdlib/strided-base-unary/dist'),l=require('@stdlib/strided-base-dtype-resolve-enum/dist'),H=s(),f=n(),I=y(),J=F(G,H,I,f.nargs,f.nin,f.nout);function K(t,e,q,d,o,c,p){return J(t,l(e),q,d,l(o),c,p)}x.exports=K
});var _=a(function(ir,R){
var L=require('@stdlib/strided-dispatch/dist'),M=require('@stdlib/strided-base-unary/dist').ndarray,h=require('@stdlib/strided-base-dtype-resolve-enum/dist'),N=s(),u=n(),Q=y(),S=L(M,N,Q,u.nargs+u.nin+u.nout,u.nin,u.nout);function T(t,e,q,d,o,c,p,z,A){return S(t,h(e),q,d,o,h(c),p,z,A)}R.exports=T
});var k=a(function(tr,b){
var U=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),E=require('@stdlib/strided-base-meta-data-props/dist'),O=n(),P=s(),v=j(),V=_();U(v,"ndarray",V);E(O,P,v,!1);E(O,P,v.ndarray,!0);b.exports=v
});var W=require("path").join,X=require('@stdlib/utils-try-require/dist'),Y=k(),g,w=X(W(__dirname,"./native.js"));w instanceof Error?g=Y:g=w;module.exports=g;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
