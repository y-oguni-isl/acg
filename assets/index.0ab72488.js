(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerpolicy&&(s.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?s.credentials="include":r.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var gp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function _p(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}function vp(i){var e=i.default;if(typeof e=="function"){var t=function(){return e.apply(this,arguments)};t.prototype=e.prototype}else t={};return Object.defineProperty(t,"__esModule",{value:!0}),Object.keys(i).forEach(function(n){var r=Object.getOwnPropertyDescriptor(i,n);Object.defineProperty(t,n,r.get?r:{enumerable:!0,get:function(){return i[n]}})}),t}var xp={exports:{}};(function(i,e){(function(t,n){i.exports=n()})(gp,function(){var t=function(){function n(d){return o.appendChild(d.dom),d}function r(d){for(var m=0;m<o.children.length;m++)o.children[m].style.display=m===d?"block":"none";s=d}var s=0,o=document.createElement("div");o.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000",o.addEventListener("click",function(d){d.preventDefault(),r(++s%o.children.length)},!1);var a=(performance||Date).now(),c=a,l=0,u=n(new t.Panel("FPS","#0ff","#002")),f=n(new t.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var h=n(new t.Panel("MB","#f08","#201"));return r(0),{REVISION:16,dom:o,addPanel:n,showPanel:r,begin:function(){a=(performance||Date).now()},end:function(){l++;var d=(performance||Date).now();if(f.update(d-a,200),d>c+1e3&&(u.update(1e3*l/(d-c),100),c=d,l=0,h)){var m=performance.memory;h.update(m.usedJSHeapSize/1048576,m.jsHeapSizeLimit/1048576)}return d},update:function(){a=this.end()},domElement:o,setMode:r}};return t.Panel=function(n,r,s){var o=1/0,a=0,c=Math.round,l=c(window.devicePixelRatio||1),u=80*l,f=48*l,h=3*l,d=2*l,m=3*l,g=15*l,p=74*l,_=30*l,y=document.createElement("canvas");y.width=u,y.height=f,y.style.cssText="width:80px;height:48px";var x=y.getContext("2d");return x.font="bold "+9*l+"px Helvetica,Arial,sans-serif",x.textBaseline="top",x.fillStyle=s,x.fillRect(0,0,u,f),x.fillStyle=r,x.fillText(n,h,d),x.fillRect(m,g,p,_),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(m,g,p,_),{dom:y,update:function(v,w){o=Math.min(o,v),a=Math.max(a,v),x.fillStyle=s,x.globalAlpha=1,x.fillRect(0,0,u,g),x.fillStyle=r,x.fillText(c(v)+" "+n+" ("+c(o)+"-"+c(a)+")",h,d),x.drawImage(y,m+l,g,p-l,_,m,g,p-l,_),x.fillRect(m+p-l,g,l,_),x.fillStyle=s,x.globalAlpha=.9,x.fillRect(m+p-l,g,l,c((1-v/w)*_))}}},t})})(xp);/**
 * @license
 * Copyright 2010-2022 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Il="146",Zi={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ki={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yp=0,uc=1,bp=2,Kh=1,wp=2,ts=3,Ni=0,qt=1,bn=2,ai=0,gr=1,bo=2,hc=3,fc=4,Mp=5,fr=100,Sp=101,Tp=102,dc=103,pc=104,Ep=200,Ap=201,Cp=202,Dp=203,Qh=204,Jh=205,Pp=206,Lp=207,Rp=208,Ip=209,Fp=210,Np=0,Op=1,kp=2,nl=3,Bp=4,Up=5,zp=6,Hp=7,ef=0,Vp=1,Gp=2,Vn=0,Wp=1,jp=2,Xp=3,qp=4,Yp=5,tf=300,xr=301,yr=302,il=303,rl=304,zo=306,br=1e3,Jt=1001,wo=1002,St=1003,sl=1004,ol=1005,Bt=1006,nf=1007,Ir=1008,Oi=1009,$p=1010,Zp=1011,rf=1012,Kp=1013,Ai=1014,si=1015,ds=1016,Qp=1017,Jp=1018,_r=1020,em=1021,tm=1022,en=1023,nm=1024,im=1025,Di=1026,wr=1027,rm=1028,sm=1029,om=1030,am=1031,lm=1033,ta=33776,na=33777,ia=33778,ra=33779,mc=35840,gc=35841,_c=35842,vc=35843,cm=36196,xc=37492,yc=37496,bc=37808,wc=37809,Mc=37810,Sc=37811,Tc=37812,Ec=37813,Ac=37814,Cc=37815,Dc=37816,Pc=37817,Lc=37818,Rc=37819,Ic=37820,Fc=37821,Nc=36492,ps=2300,Mr=2301,sa=2302,Oc=2400,kc=2401,Bc=2402,um=2500,hm=0,Fl=1,Mo=2,ki=3e3,We=3001,fm=3200,dm=3201,Nl=0,pm=1,On="srgb",Ci="srgb-linear",oa=7680,mm=519,al=35044,Uc="300 es",ll=1035;class Vi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Et=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let zc=1234567;const os=Math.PI/180,ms=180/Math.PI;function dn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Et[i&255]+Et[i>>8&255]+Et[i>>16&255]+Et[i>>24&255]+"-"+Et[e&255]+Et[e>>8&255]+"-"+Et[e>>16&15|64]+Et[e>>24&255]+"-"+Et[t&63|128]+Et[t>>8&255]+"-"+Et[t>>16&255]+Et[t>>24&255]+Et[n&255]+Et[n>>8&255]+Et[n>>16&255]+Et[n>>24&255]).toLowerCase()}function Dt(i,e,t){return Math.max(e,Math.min(t,i))}function Ol(i,e){return(i%e+e)%e}function gm(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function _m(i,e,t){return i!==e?(t-i)/(e-i):0}function as(i,e,t){return(1-t)*i+t*e}function vm(i,e,t,n){return as(i,e,1-Math.exp(-t*n))}function xm(i,e=1){return e-Math.abs(Ol(i,e*2)-e)}function ym(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function bm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function wm(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Mm(i,e){return i+Math.random()*(e-i)}function Sm(i){return i*(.5-Math.random())}function Tm(i){i!==void 0&&(zc=i);let e=zc+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Em(i){return i*os}function Am(i){return i*ms}function cl(i){return(i&i-1)===0&&i!==0}function sf(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function So(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function Cm(i,e,t,n,r){const s=Math.cos,o=Math.sin,a=s(t/2),c=o(t/2),l=s((e+n)/2),u=o((e+n)/2),f=s((e-n)/2),h=o((e-n)/2),d=s((n-e)/2),m=o((n-e)/2);switch(r){case"XYX":i.set(a*u,c*f,c*h,a*l);break;case"YZY":i.set(c*h,a*u,c*f,a*l);break;case"ZXZ":i.set(c*f,c*h,a*u,a*l);break;case"XZX":i.set(a*u,c*m,c*d,a*l);break;case"YXY":i.set(c*d,a*u,c*m,a*l);break;case"ZYZ":i.set(c*m,c*d,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function zn(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ke(i,e){switch(e.constructor){case Float32Array:return i;case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}var Dm=Object.freeze({__proto__:null,DEG2RAD:os,RAD2DEG:ms,generateUUID:dn,clamp:Dt,euclideanModulo:Ol,mapLinear:gm,inverseLerp:_m,lerp:as,damp:vm,pingpong:xm,smoothstep:ym,smootherstep:bm,randInt:wm,randFloat:Mm,randFloatSpread:Sm,seededRandom:Tm,degToRad:Em,radToDeg:Am,isPowerOfTwo:cl,ceilPowerOfTwo:sf,floorPowerOfTwo:So,setQuaternionFromProperEuler:Cm,normalize:Ke,denormalize:zn});class fe{constructor(e=0,t=0){fe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*n-o*r+e.x,this.y=s*r+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class rn{constructor(){rn.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1]}set(e,t,n,r,s,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=t,u[4]=s,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],f=n[7],h=n[2],d=n[5],m=n[8],g=r[0],p=r[3],_=r[6],y=r[1],x=r[4],v=r[7],w=r[2],A=r[5],R=r[8];return s[0]=o*g+a*y+c*w,s[3]=o*p+a*x+c*A,s[6]=o*_+a*v+c*R,s[1]=l*g+u*y+f*w,s[4]=l*p+u*x+f*A,s[7]=l*_+u*v+f*R,s[2]=h*g+d*y+m*w,s[5]=h*p+d*x+m*A,s[8]=h*_+d*v+m*R,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*s*u+n*a*c+r*s*l-r*o*c}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=u*o-a*l,h=a*c-u*s,d=l*s-o*c,m=t*f+n*h+r*d;if(m===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/m;return e[0]=f*g,e[1]=(r*l-u*n)*g,e[2]=(a*n-r*o)*g,e[3]=h*g,e[4]=(u*t-r*c)*g,e[5]=(r*s-a*t)*g,e[6]=d*g,e[7]=(n*c-l*t)*g,e[8]=(o*t-n*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,o,a){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-r*l,r*c,-r*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=t,n[4]*=t,n[7]*=t,this}rotate(e){const t=Math.cos(e),n=Math.sin(e),r=this.elements,s=r[0],o=r[3],a=r[6],c=r[1],l=r[4],u=r[7];return r[0]=t*s+n*c,r[3]=t*o+n*l,r[6]=t*a+n*u,r[1]=-n*s+t*c,r[4]=-n*o+t*l,r[7]=-n*a+t*u,this}translate(e,t){const n=this.elements;return n[0]+=e*n[2],n[3]+=e*n[5],n[6]+=e*n[8],n[1]+=t*n[2],n[4]+=t*n[5],n[7]+=t*n[8],this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}function of(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function gs(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Pi(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function po(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}const aa={[On]:{[Ci]:Pi},[Ci]:{[On]:po}},on={legacyMode:!0,get workingColorSpace(){return Ci},set workingColorSpace(i){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(i,e,t){if(this.legacyMode||e===t||!e||!t)return i;if(aa[e]&&aa[e][t]!==void 0){const n=aa[e][t];return i.r=n(i.r),i.g=n(i.g),i.b=n(i.b),i}throw new Error("Unsupported color space conversion.")},fromWorkingColorSpace:function(i,e){return this.convert(i,this.workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this.workingColorSpace)}},af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dt={r:0,g:0,b:0},an={h:0,s:0,l:0},Os={h:0,s:0,l:0};function la(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}function ks(i,e){return e.r=i.r,e.g=i.g,e.b=i.b,e}class Se{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,t===void 0&&n===void 0?this.set(e):this.setRGB(e,t,n)}set(e){return e&&e.isColor?this.copy(e):typeof e=="number"?this.setHex(e):typeof e=="string"&&this.setStyle(e),this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,on.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=Ci){return this.r=e,this.g=t,this.b=n,on.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=Ci){if(e=Ol(e,1),t=Dt(t,0,1),n=Dt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,o=2*n-s;this.r=la(o,s,e+1/3),this.g=la(o,s,e),this.b=la(o,s,e-1/3)}return on.toWorkingColorSpace(this,r),this}setStyle(e,t=On){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^((?:rgb|hsl)a?)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(255,parseInt(s[1],10))/255,this.g=Math.min(255,parseInt(s[2],10))/255,this.b=Math.min(255,parseInt(s[3],10))/255,on.toWorkingColorSpace(this,t),n(s[4]),this;if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return this.r=Math.min(100,parseInt(s[1],10))/100,this.g=Math.min(100,parseInt(s[2],10))/100,this.b=Math.min(100,parseInt(s[3],10))/100,on.toWorkingColorSpace(this,t),n(s[4]),this;break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a)){const c=parseFloat(s[1])/360,l=parseFloat(s[2])/100,u=parseFloat(s[3])/100;return n(s[4]),this.setHSL(c,l,u,t)}break}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.r=parseInt(s.charAt(0)+s.charAt(0),16)/255,this.g=parseInt(s.charAt(1)+s.charAt(1),16)/255,this.b=parseInt(s.charAt(2)+s.charAt(2),16)/255,on.toWorkingColorSpace(this,t),this;if(o===6)return this.r=parseInt(s.charAt(0)+s.charAt(1),16)/255,this.g=parseInt(s.charAt(2)+s.charAt(3),16)/255,this.b=parseInt(s.charAt(4)+s.charAt(5),16)/255,on.toWorkingColorSpace(this,t),this}return e&&e.length>0?this.setColorName(e,t):this}setColorName(e,t=On){const n=af[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Pi(e.r),this.g=Pi(e.g),this.b=Pi(e.b),this}copyLinearToSRGB(e){return this.r=po(e.r),this.g=po(e.g),this.b=po(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return on.fromWorkingColorSpace(ks(this,dt),e),Dt(dt.r*255,0,255)<<16^Dt(dt.g*255,0,255)<<8^Dt(dt.b*255,0,255)<<0}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ci){on.fromWorkingColorSpace(ks(this,dt),t);const n=dt.r,r=dt.g,s=dt.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const f=o-a;switch(l=u<=.5?f/(o+a):f/(2-o-a),o){case n:c=(r-s)/f+(r<s?6:0);break;case r:c=(s-n)/f+2;break;case s:c=(n-r)/f+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=Ci){return on.fromWorkingColorSpace(ks(this,dt),t),e.r=dt.r,e.g=dt.g,e.b=dt.b,e}getStyle(e=On){return on.fromWorkingColorSpace(ks(this,dt),e),e!==On?`color(${e} ${dt.r} ${dt.g} ${dt.b})`:`rgb(${dt.r*255|0},${dt.g*255|0},${dt.b*255|0})`}offsetHSL(e,t,n){return this.getHSL(an),an.h+=e,an.s+=t,an.l+=n,this.setHSL(an.h,an.s,an.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(an),e.getHSL(Os);const n=as(an.h,Os.h,t),r=as(an.s,Os.s,t),s=as(an.l,Os.l,t);return this.setHSL(n,r,s),this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}Se.NAMES=af;let Qi;class lf{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Qi===void 0&&(Qi=gs("canvas")),Qi.width=e.width,Qi.height=e.height;const n=Qi.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Qi}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gs("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Pi(s[o]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Pi(t[n]/255)*255):t[n]=Pi(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}class cf{constructor(e=null){this.isSource=!0,this.uuid=dn(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(ca(r[o].image)):s.push(ca(r[o]))}else s=ca(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function ca(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?lf.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Pm=0;class Nt extends Vi{constructor(e=Nt.DEFAULT_IMAGE,t=Nt.DEFAULT_MAPPING,n=Jt,r=Jt,s=Bt,o=Ir,a=en,c=Oi,l=1,u=ki){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=dn(),this.name="",this.source=new cf(e),this.mipmaps=[],this.mapping=t,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new fe(0,0),this.repeat=new fe(1,1),this.center=new fe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new rn,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.encoding=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.encoding=e.encoding,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.5,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,type:this.type,encoding:this.encoding,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tf)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case br:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case wo:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case br:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case wo:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}}Nt.DEFAULT_IMAGE=null;Nt.DEFAULT_MAPPING=tf;class Xe{constructor(e=0,t=0,n=0,r=1){Xe.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*n+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const c=e.elements,l=c[0],u=c[4],f=c[8],h=c[1],d=c[5],m=c[9],g=c[2],p=c[6],_=c[10];if(Math.abs(u-h)<.01&&Math.abs(f-g)<.01&&Math.abs(m-p)<.01){if(Math.abs(u+h)<.1&&Math.abs(f+g)<.1&&Math.abs(m+p)<.1&&Math.abs(l+d+_-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(l+1)/2,v=(d+1)/2,w=(_+1)/2,A=(u+h)/4,R=(f+g)/4,b=(m+p)/4;return x>v&&x>w?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=A/n,s=R/n):v>w?v<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(v),n=A/r,s=b/r):w<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(w),n=R/s,r=b/s),this.set(n,r,s,t),this}let y=Math.sqrt((p-m)*(p-m)+(f-g)*(f-g)+(h-u)*(h-u));return Math.abs(y)<.001&&(y=1),this.x=(p-m)/y,this.y=(f-g)/y,this.z=(h-u)/y,this.w=Math.acos((l+d+_-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class pn extends Vi{constructor(e=1,t=1,n={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Xe(0,0,e,t),this.scissorTest=!1,this.viewport=new Xe(0,0,e,t);const r={width:e,height:t,depth:1};this.texture=new Nt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.encoding),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.internalFormat=n.internalFormat!==void 0?n.internalFormat:null,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Bt,this.depthBuffer=n.depthBuffer!==void 0?n.depthBuffer:!0,this.stencilBuffer=n.stencilBuffer!==void 0?n.stencilBuffer:!1,this.depthTexture=n.depthTexture!==void 0?n.depthTexture:null,this.samples=n.samples!==void 0?n.samples:0}setSize(e,t,n=1){(this.width!==e||this.height!==t||this.depth!==n)&&(this.width=e,this.height=t,this.depth=n,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=n,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new cf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class uf extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Lm extends Nt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=St,this.minFilter=St,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class ut{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,o,a){let c=n[r+0],l=n[r+1],u=n[r+2],f=n[r+3];const h=s[o+0],d=s[o+1],m=s[o+2],g=s[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f;return}if(a===1){e[t+0]=h,e[t+1]=d,e[t+2]=m,e[t+3]=g;return}if(f!==g||c!==h||l!==d||u!==m){let p=1-a;const _=c*h+l*d+u*m+f*g,y=_>=0?1:-1,x=1-_*_;if(x>Number.EPSILON){const w=Math.sqrt(x),A=Math.atan2(w,_*y);p=Math.sin(p*A)/w,a=Math.sin(a*A)/w}const v=a*y;if(c=c*p+h*v,l=l*p+d*v,u=u*p+m*v,f=f*p+g*v,p===1-a){const w=1/Math.sqrt(c*c+l*l+u*u+f*f);c*=w,l*=w,u*=w,f*=w}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=f}static multiplyQuaternionsFlat(e,t,n,r,s,o){const a=n[r],c=n[r+1],l=n[r+2],u=n[r+3],f=s[o],h=s[o+1],d=s[o+2],m=s[o+3];return e[t]=a*m+u*f+c*d-l*h,e[t+1]=c*m+u*h+l*f-a*d,e[t+2]=l*m+u*d+a*h-c*f,e[t+3]=u*m-a*f-c*h-l*d,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const n=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(r/2),f=a(s/2),h=c(n/2),d=c(r/2),m=c(s/2);switch(o){case"XYZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"YXZ":this._x=h*u*f+l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"ZXY":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f-h*d*m;break;case"ZYX":this._x=h*u*f-l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f+h*d*m;break;case"YZX":this._x=h*u*f+l*d*m,this._y=l*d*f+h*u*m,this._z=l*u*m-h*d*f,this._w=l*u*f-h*d*m;break;case"XZY":this._x=h*u*f-l*d*m,this._y=l*d*f-h*u*m,this._z=l*u*m+h*d*f,this._w=l*u*f+h*d*m;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],f=t[10],h=n+a+f;if(h>0){const d=.5/Math.sqrt(h+1);this._w=.25/d,this._x=(u-c)*d,this._y=(s-l)*d,this._z=(o-r)*d}else if(n>a&&n>f){const d=2*Math.sqrt(1+n-a-f);this._w=(u-c)/d,this._x=.25*d,this._y=(r+o)/d,this._z=(s+l)/d}else if(a>f){const d=2*Math.sqrt(1+a-n-f);this._w=(s-l)/d,this._x=(r+o)/d,this._y=.25*d,this._z=(c+u)/d}else{const d=2*Math.sqrt(1+f-n-a);this._w=(o-r)/d,this._x=(s+l)/d,this._y=(c+u)/d,this._z=.25*d}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+r*l-s*c,this._y=r*u+o*c+s*a-n*l,this._z=s*u+o*l+n*c-r*a,this._w=o*u-n*a-r*c-s*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+n*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const c=1-a*a;if(c<=Number.EPSILON){const d=1-t;return this._w=d*o+t*this._w,this._x=d*n+t*this._x,this._y=d*r+t*this._y,this._z=d*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),f=Math.sin((1-t)*u)/l,h=Math.sin(t*u)/l;return this._w=o*f+this._w*h,this._x=n*f+this._x*h,this._y=r*f+this._y*h,this._z=s*f+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=Math.random(),t=Math.sqrt(1-e),n=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),n*Math.sin(s),n*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class D{constructor(e=0,t=0,n=0){D.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hc.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hc.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,o=e.y,a=e.z,c=e.w,l=c*t+o*r-a*n,u=c*n+a*t-s*r,f=c*r+s*n-o*t,h=-s*t-o*n-a*r;return this.x=l*c+h*-s+u*-a-f*-o,this.y=u*c+h*-o+f*-s-l*-a,this.z=f*c+h*-a+l*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,o=t.x,a=t.y,c=t.z;return this.x=r*c-s*a,this.y=s*o-n*c,this.z=n*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ua.copy(this).projectOnVector(e),this.sub(ua)}reflect(e){return this.sub(ua.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Dt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,n=Math.sqrt(1-e**2);return this.x=n*Math.cos(t),this.y=n*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ua=new D,Hc=new ut;class Gi{constructor(e=new D(1/0,1/0,1/0),t=new D(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.length;c<l;c+=3){const u=e[c],f=e[c+1],h=e[c+2];u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromBufferAttribute(e){let t=1/0,n=1/0,r=1/0,s=-1/0,o=-1/0,a=-1/0;for(let c=0,l=e.count;c<l;c++){const u=e.getX(c),f=e.getY(c),h=e.getZ(c);u<t&&(t=u),f<n&&(n=f),h<r&&(r=h),u>s&&(s=u),f>o&&(o=f),h>a&&(a=h)}return this.min.set(t,n,r),this.max.set(s,o,a),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0)if(t&&n.attributes!=null&&n.attributes.position!==void 0){const s=n.attributes.position;for(let o=0,a=s.count;o<a;o++)pi.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(pi)}else n.boundingBox===null&&n.computeBoundingBox(),ha.copy(n.boundingBox),ha.applyMatrix4(e.matrixWorld),this.union(ha);const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Wr),Bs.subVectors(this.max,Wr),Ji.subVectors(e.a,Wr),er.subVectors(e.b,Wr),tr.subVectors(e.c,Wr),qn.subVectors(er,Ji),Yn.subVectors(tr,er),mi.subVectors(Ji,tr);let t=[0,-qn.z,qn.y,0,-Yn.z,Yn.y,0,-mi.z,mi.y,qn.z,0,-qn.x,Yn.z,0,-Yn.x,mi.z,0,-mi.x,-qn.y,qn.x,0,-Yn.y,Yn.x,0,-mi.y,mi.x,0];return!fa(t,Ji,er,tr,Bs)||(t=[1,0,0,0,1,0,0,0,1],!fa(t,Ji,er,tr,Bs))?!1:(Us.crossVectors(qn,Yn),t=[Us.x,Us.y,Us.z],fa(t,Ji,er,tr,Bs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return pi.copy(e).clamp(this.min,this.max).sub(e).length()}getBoundingSphere(e){return this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5,e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pn=[new D,new D,new D,new D,new D,new D,new D,new D],pi=new D,ha=new Gi,Ji=new D,er=new D,tr=new D,qn=new D,Yn=new D,mi=new D,Wr=new D,Bs=new D,Us=new D,gi=new D;function fa(i,e,t,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){gi.fromArray(i,s);const a=r.x*Math.abs(gi.x)+r.y*Math.abs(gi.y)+r.z*Math.abs(gi.z),c=e.dot(gi),l=t.dot(gi),u=n.dot(gi);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const Rm=new Gi,jr=new D,da=new D;class Fr{constructor(e=new D,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rm.setFromPoints(e).getCenter(n);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);const t=jr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(jr,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(da.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(da)),this.expandByPoint(jr.copy(e.center).sub(da))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ln=new D,pa=new D,zs=new D,$n=new D,ma=new D,Hs=new D,ga=new D;class Ho{constructor(e=new D,t=new D(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.direction).multiplyScalar(e).add(this.origin)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ln)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.direction).multiplyScalar(n).add(this.origin)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ln.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ln.copy(this.direction).multiplyScalar(t).add(this.origin),Ln.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){pa.copy(e).add(t).multiplyScalar(.5),zs.copy(t).sub(e).normalize(),$n.copy(this.origin).sub(pa);const s=e.distanceTo(t)*.5,o=-this.direction.dot(zs),a=$n.dot(this.direction),c=-$n.dot(zs),l=$n.lengthSq(),u=Math.abs(1-o*o);let f,h,d,m;if(u>0)if(f=o*c-a,h=o*a-c,m=s*u,f>=0)if(h>=-m)if(h<=m){const g=1/u;f*=g,h*=g,d=f*(f+o*h+2*a)+h*(o*f+h+2*c)+l}else h=s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h=-s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;else h<=-m?(f=Math.max(0,-(-o*s+a)),h=f>0?-s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l):h<=m?(f=0,h=Math.min(Math.max(-s,-c),s),d=h*(h+2*c)+l):(f=Math.max(0,-(o*s+a)),h=f>0?s:Math.min(Math.max(-s,-c),s),d=-f*f+h*(h+2*c)+l);else h=o>0?-s:s,f=Math.max(0,-(o*h+a)),d=-f*f+h*(h+2*c)+l;return n&&n.copy(this.direction).multiplyScalar(f).add(this.origin),r&&r.copy(zs).multiplyScalar(h).add(pa),d}intersectSphere(e,t){Ln.subVectors(e.center,this.origin);const n=Ln.dot(this.direction),r=Ln.dot(Ln)-n*n,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,c=n+o;return a<0&&c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,r=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,r=(e.min.x-h.x)*l),u>=0?(s=(e.min.y-h.y)*u,o=(e.max.y-h.y)*u):(s=(e.max.y-h.y)*u,o=(e.min.y-h.y)*u),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-h.z)*f,c=(e.max.z-h.z)*f):(a=(e.max.z-h.z)*f,c=(e.min.z-h.z)*f),n>c||a>r)||((a>n||n!==n)&&(n=a),(c<r||r!==r)&&(r=c),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,Ln)!==null}intersectTriangle(e,t,n,r,s){ma.subVectors(t,e),Hs.subVectors(n,e),ga.crossVectors(ma,Hs);let o=this.direction.dot(ga),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;$n.subVectors(this.origin,e);const c=a*this.direction.dot(Hs.crossVectors($n,Hs));if(c<0)return null;const l=a*this.direction.dot(ma.cross($n));if(l<0||c+l>o)return null;const u=-a*$n.dot(ga);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Fe{constructor(){Fe.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]}set(e,t,n,r,s,o,a,c,l,u,f,h,d,m,g,p){const _=this.elements;return _[0]=e,_[4]=t,_[8]=n,_[12]=r,_[1]=s,_[5]=o,_[9]=a,_[13]=c,_[2]=l,_[6]=u,_[10]=f,_[14]=h,_[3]=d,_[7]=m,_[11]=g,_[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Fe().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/nr.setFromMatrixColumn(e,0).length(),s=1/nr.setFromMatrixColumn(e,1).length(),o=1/nr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(r),l=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const h=o*u,d=o*f,m=a*u,g=a*f;t[0]=c*u,t[4]=-c*f,t[8]=l,t[1]=d+m*l,t[5]=h-g*l,t[9]=-a*c,t[2]=g-h*l,t[6]=m+d*l,t[10]=o*c}else if(e.order==="YXZ"){const h=c*u,d=c*f,m=l*u,g=l*f;t[0]=h+g*a,t[4]=m*a-d,t[8]=o*l,t[1]=o*f,t[5]=o*u,t[9]=-a,t[2]=d*a-m,t[6]=g+h*a,t[10]=o*c}else if(e.order==="ZXY"){const h=c*u,d=c*f,m=l*u,g=l*f;t[0]=h-g*a,t[4]=-o*f,t[8]=m+d*a,t[1]=d+m*a,t[5]=o*u,t[9]=g-h*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const h=o*u,d=o*f,m=a*u,g=a*f;t[0]=c*u,t[4]=m*l-d,t[8]=h*l+g,t[1]=c*f,t[5]=g*l+h,t[9]=d*l-m,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const h=o*c,d=o*l,m=a*c,g=a*l;t[0]=c*u,t[4]=g-h*f,t[8]=m*f+d,t[1]=f,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=d*f+m,t[10]=h-g*f}else if(e.order==="XZY"){const h=o*c,d=o*l,m=a*c,g=a*l;t[0]=c*u,t[4]=-f,t[8]=l*u,t[1]=h*f+g,t[5]=o*u,t[9]=d*f-m,t[2]=m*f-d,t[6]=a*u,t[10]=g*f+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Im,e,Fm)}lookAt(e,t,n){const r=this.elements;return Gt.subVectors(e,t),Gt.lengthSq()===0&&(Gt.z=1),Gt.normalize(),Zn.crossVectors(n,Gt),Zn.lengthSq()===0&&(Math.abs(n.z)===1?Gt.x+=1e-4:Gt.z+=1e-4,Gt.normalize(),Zn.crossVectors(n,Gt)),Zn.normalize(),Vs.crossVectors(Gt,Zn),r[0]=Zn.x,r[4]=Vs.x,r[8]=Gt.x,r[1]=Zn.y,r[5]=Vs.y,r[9]=Gt.y,r[2]=Zn.z,r[6]=Vs.z,r[10]=Gt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],f=n[5],h=n[9],d=n[13],m=n[2],g=n[6],p=n[10],_=n[14],y=n[3],x=n[7],v=n[11],w=n[15],A=r[0],R=r[4],b=r[8],T=r[12],I=r[1],W=r[5],j=r[9],U=r[13],O=r[2],V=r[6],$=r[10],ee=r[14],X=r[3],F=r[7],k=r[11],te=r[15];return s[0]=o*A+a*I+c*O+l*X,s[4]=o*R+a*W+c*V+l*F,s[8]=o*b+a*j+c*$+l*k,s[12]=o*T+a*U+c*ee+l*te,s[1]=u*A+f*I+h*O+d*X,s[5]=u*R+f*W+h*V+d*F,s[9]=u*b+f*j+h*$+d*k,s[13]=u*T+f*U+h*ee+d*te,s[2]=m*A+g*I+p*O+_*X,s[6]=m*R+g*W+p*V+_*F,s[10]=m*b+g*j+p*$+_*k,s[14]=m*T+g*U+p*ee+_*te,s[3]=y*A+x*I+v*O+w*X,s[7]=y*R+x*W+v*V+w*F,s[11]=y*b+x*j+v*$+w*k,s[15]=y*T+x*U+v*ee+w*te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],f=e[6],h=e[10],d=e[14],m=e[3],g=e[7],p=e[11],_=e[15];return m*(+s*c*f-r*l*f-s*a*h+n*l*h+r*a*d-n*c*d)+g*(+t*c*d-t*l*h+s*o*h-r*o*d+r*l*u-s*c*u)+p*(+t*l*f-t*a*d-s*o*f+n*o*d+s*a*u-n*l*u)+_*(-r*a*u-t*c*f+t*a*h+r*o*f-n*o*h+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],f=e[9],h=e[10],d=e[11],m=e[12],g=e[13],p=e[14],_=e[15],y=f*p*l-g*h*l+g*c*d-a*p*d-f*c*_+a*h*_,x=m*h*l-u*p*l-m*c*d+o*p*d+u*c*_-o*h*_,v=u*g*l-m*f*l+m*a*d-o*g*d-u*a*_+o*f*_,w=m*f*c-u*g*c-m*a*h+o*g*h+u*a*p-o*f*p,A=t*y+n*x+r*v+s*w;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const R=1/A;return e[0]=y*R,e[1]=(g*h*s-f*p*s-g*r*d+n*p*d+f*r*_-n*h*_)*R,e[2]=(a*p*s-g*c*s+g*r*l-n*p*l-a*r*_+n*c*_)*R,e[3]=(f*c*s-a*h*s-f*r*l+n*h*l+a*r*d-n*c*d)*R,e[4]=x*R,e[5]=(u*p*s-m*h*s+m*r*d-t*p*d-u*r*_+t*h*_)*R,e[6]=(m*c*s-o*p*s-m*r*l+t*p*l+o*r*_-t*c*_)*R,e[7]=(o*h*s-u*c*s+u*r*l-t*h*l-o*r*d+t*c*d)*R,e[8]=v*R,e[9]=(m*f*s-u*g*s-m*n*d+t*g*d+u*n*_-t*f*_)*R,e[10]=(o*g*s-m*a*s+m*n*l-t*g*l-o*n*_+t*a*_)*R,e[11]=(u*a*s-o*f*s-u*n*l+t*f*l+o*n*d-t*a*d)*R,e[12]=w*R,e[13]=(u*g*r-m*f*r+m*n*h-t*g*h-u*n*p+t*f*p)*R,e[14]=(m*a*r-o*g*r-m*n*c+t*g*c+o*n*p-t*a*p)*R,e[15]=(o*f*r-u*a*r+u*n*c-t*f*c-o*n*h+t*a*h)*R,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,o=e.x,a=e.y,c=e.z,l=s*o,u=s*a;return this.set(l*o+n,l*a-r*c,l*c+r*a,0,l*a+r*c,u*a+n,u*c-r*o,0,l*c-r*a,u*c+r*o,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,o){return this.set(1,n,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,o=t._y,a=t._z,c=t._w,l=s+s,u=o+o,f=a+a,h=s*l,d=s*u,m=s*f,g=o*u,p=o*f,_=a*f,y=c*l,x=c*u,v=c*f,w=n.x,A=n.y,R=n.z;return r[0]=(1-(g+_))*w,r[1]=(d+v)*w,r[2]=(m-x)*w,r[3]=0,r[4]=(d-v)*A,r[5]=(1-(h+_))*A,r[6]=(p+y)*A,r[7]=0,r[8]=(m+x)*R,r[9]=(p-y)*R,r[10]=(1-(h+g))*R,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=nr.set(r[0],r[1],r[2]).length();const o=nr.set(r[4],r[5],r[6]).length(),a=nr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],ln.copy(this);const l=1/s,u=1/o,f=1/a;return ln.elements[0]*=l,ln.elements[1]*=l,ln.elements[2]*=l,ln.elements[4]*=u,ln.elements[5]*=u,ln.elements[6]*=u,ln.elements[8]*=f,ln.elements[9]*=f,ln.elements[10]*=f,t.setFromRotationMatrix(ln),n.x=s,n.y=o,n.z=a,this}makePerspective(e,t,n,r,s,o){const a=this.elements,c=2*s/(t-e),l=2*s/(n-r),u=(t+e)/(t-e),f=(n+r)/(n-r),h=-(o+s)/(o-s),d=-2*o*s/(o-s);return a[0]=c,a[4]=0,a[8]=u,a[12]=0,a[1]=0,a[5]=l,a[9]=f,a[13]=0,a[2]=0,a[6]=0,a[10]=h,a[14]=d,a[3]=0,a[7]=0,a[11]=-1,a[15]=0,this}makeOrthographic(e,t,n,r,s,o){const a=this.elements,c=1/(t-e),l=1/(n-r),u=1/(o-s),f=(t+e)*c,h=(n+r)*l,d=(o+s)*u;return a[0]=2*c,a[4]=0,a[8]=0,a[12]=-f,a[1]=0,a[5]=2*l,a[9]=0,a[13]=-h,a[2]=0,a[6]=0,a[10]=-2*u,a[14]=-d,a[3]=0,a[7]=0,a[11]=0,a[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const nr=new D,ln=new Fe,Im=new D(0,0,0),Fm=new D(1,1,1),Zn=new D,Vs=new D,Gt=new D,Vc=new Fe,Gc=new ut;class Nr{constructor(e=0,t=0,n=0,r=Nr.DefaultOrder){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],c=r[1],l=r[5],u=r[9],f=r[2],h=r[6],d=r[10];switch(t){case"XYZ":this._y=Math.asin(Dt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,d),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,d),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-f,d),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-Dt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(h,d),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(Dt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,d));break;case"XZY":this._z=Math.asin(-Dt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,d),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Vc.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Vc,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Gc.setFromEuler(this),this.setFromQuaternion(Gc,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}toVector3(){console.error("THREE.Euler: .toVector3() has been removed. Use Vector3.setFromEuler() instead")}}Nr.DefaultOrder="XYZ";Nr.RotationOrders=["XYZ","YZX","ZXY","XZY","YXZ","ZYX"];class kl{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Nm=0;const Wc=new D,ir=new ut,Rn=new Fe,Gs=new D,Xr=new D,Om=new D,km=new ut,jc=new D(1,0,0),Xc=new D(0,1,0),qc=new D(0,0,1),Bm={type:"added"},Yc={type:"removed"};class qe extends Vi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=dn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=qe.DefaultUp.clone();const e=new D,t=new Nr,n=new ut,r=new D(1,1,1);function s(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Fe},normalMatrix:{value:new rn}}),this.matrix=new Fe,this.matrixWorld=new Fe,this.matrixAutoUpdate=qe.DefaultMatrixAutoUpdate,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=qe.DefaultMatrixWorldAutoUpdate,this.layers=new kl,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.multiply(ir),this}rotateOnWorldAxis(e,t){return ir.setFromAxisAngle(e,t),this.quaternion.premultiply(ir),this}rotateX(e){return this.rotateOnAxis(jc,e)}rotateY(e){return this.rotateOnAxis(Xc,e)}rotateZ(e){return this.rotateOnAxis(qc,e)}translateOnAxis(e,t){return Wc.copy(e).applyQuaternion(this.quaternion),this.position.add(Wc.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(jc,e)}translateY(e){return this.translateOnAxis(Xc,e)}translateZ(e){return this.translateOnAxis(qc,e)}localToWorld(e){return e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return e.applyMatrix4(Rn.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Gs.copy(e):Gs.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Xr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Rn.lookAt(Xr,Gs,this.up):Rn.lookAt(Gs,Xr,this.up),this.quaternion.setFromRotationMatrix(Rn),r&&(Rn.extractRotation(r.matrixWorld),ir.setFromRotationMatrix(Rn),this.quaternion.premultiply(ir.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(Bm)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Yc)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(Yc)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Rn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Rn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Rn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,e,Om),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Xr,km,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.5,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),JSON.stringify(this.userData)!=="{}"&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const f=c[l];s(e.shapes,f)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(s(e.materials,this.material[c]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];r.animations.push(s(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),f=o(e.shapes),h=o(e.skeletons),d=o(e.animations),m=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),f.length>0&&(n.shapes=f),h.length>0&&(n.skeletons=h),d.length>0&&(n.animations=d),m.length>0&&(n.nodes=m)}return n.object=r,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}qe.DefaultUp=new D(0,1,0);qe.DefaultMatrixAutoUpdate=!0;qe.DefaultMatrixWorldAutoUpdate=!0;const cn=new D,In=new D,_a=new D,Fn=new D,rr=new D,sr=new D,$c=new D,va=new D,xa=new D,ya=new D;class Bn{constructor(e=new D,t=new D,n=new D){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),cn.subVectors(e,t),r.cross(cn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){cn.subVectors(r,t),In.subVectors(n,t),_a.subVectors(e,t);const o=cn.dot(cn),a=cn.dot(In),c=cn.dot(_a),l=In.dot(In),u=In.dot(_a),f=o*l-a*a;if(f===0)return s.set(-2,-1,-1);const h=1/f,d=(l*c-a*u)*h,m=(o*u-a*c)*h;return s.set(1-d-m,m,d)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,Fn),Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getUV(e,t,n,r,s,o,a,c){return this.getBarycoord(e,t,n,r,Fn),c.set(0,0),c.addScaledVector(s,Fn.x),c.addScaledVector(o,Fn.y),c.addScaledVector(a,Fn.z),c}static isFrontFacing(e,t,n,r){return cn.subVectors(n,t),In.subVectors(e,t),cn.cross(In).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return cn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),cn.cross(In).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Bn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Bn.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,n,r,s){return Bn.getUV(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return Bn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Bn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let o,a;rr.subVectors(r,n),sr.subVectors(s,n),va.subVectors(e,n);const c=rr.dot(va),l=sr.dot(va);if(c<=0&&l<=0)return t.copy(n);xa.subVectors(e,r);const u=rr.dot(xa),f=sr.dot(xa);if(u>=0&&f<=u)return t.copy(r);const h=c*f-u*l;if(h<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(rr,o);ya.subVectors(e,s);const d=rr.dot(ya),m=sr.dot(ya);if(m>=0&&d<=m)return t.copy(s);const g=d*l-c*m;if(g<=0&&l>=0&&m<=0)return a=l/(l-m),t.copy(n).addScaledVector(sr,a);const p=u*m-d*f;if(p<=0&&f-u>=0&&d-m>=0)return $c.subVectors(s,r),a=(f-u)/(f-u+(d-m)),t.copy(r).addScaledVector($c,a);const _=1/(p+g+h);return o=g*_,a=h*_,t.copy(n).addScaledVector(rr,o).addScaledVector(sr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Um=0;class Mn extends Vi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Um++}),this.uuid=dn(),this.name="",this.type="Material",this.blending=gr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Qh,this.blendDst=Jh,this.blendEquation=fr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=nl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mm,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=oa,this.stencilZFail=oa,this.stencilZPass=oa,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn("THREE.Material: '"+t+"' parameter is undefined.");continue}const r=this[t];if(r===void 0){console.warn("THREE."+this.type+": '"+t+"' is not a property of this material.");continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.5,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=this.transparent),n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.stencilWrite=this.stencilWrite,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(n.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=this.premultipliedAlpha),this.wireframe===!0&&(n.wireframe=this.wireframe),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=this.flatShading),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),JSON.stringify(this.userData)!=="{}"&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const c=s[a];delete c.metadata,o.push(c)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class fn extends Mn{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Se(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ef,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ct=new D,Ws=new fe;class Ft{constructor(e,t,n){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n===!0,this.usage=al,this.updateRange={offset:0,count:-1},this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Ws.fromBufferAttribute(this,t),Ws.applyMatrix3(e),this.setXY(t,Ws.x,Ws.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix3(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyMatrix4(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.applyNormalMatrix(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)ct.fromBufferAttribute(this,t),ct.transformDirection(e),this.setXYZ(t,ct.x,ct.y,ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=zn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=zn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=zn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=zn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==al&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class hf extends Ft{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class ff extends Ft{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class $e extends Ft{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zm=0;const Kt=new Fe,ba=new qe,or=new D,Wt=new Gi,qr=new Gi,bt=new D;class ht extends Vi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zm++}),this.uuid=dn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(of(e)?ff:hf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new rn().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Kt.makeRotationFromQuaternion(e),this.applyMatrix4(Kt),this}rotateX(e){return Kt.makeRotationX(e),this.applyMatrix4(Kt),this}rotateY(e){return Kt.makeRotationY(e),this.applyMatrix4(Kt),this}rotateZ(e){return Kt.makeRotationZ(e),this.applyMatrix4(Kt),this}translate(e,t,n){return Kt.makeTranslation(e,t,n),this.applyMatrix4(Kt),this}scale(e,t,n){return Kt.makeScale(e,t,n),this.applyMatrix4(Kt),this}lookAt(e){return ba.lookAt(e),ba.updateMatrix(),this.applyMatrix4(ba.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new $e(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new D(-1/0,-1/0,-1/0),new D(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];Wt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Wt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Wt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Wt.min),this.boundingBox.expandByPoint(Wt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fr);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new D,1/0);return}if(e){const n=this.boundingSphere.center;if(Wt.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];qr.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(Wt.min,qr.min),Wt.expandByPoint(bt),bt.addVectors(Wt.max,qr.max),Wt.expandByPoint(bt)):(Wt.expandByPoint(qr.min),Wt.expandByPoint(qr.max))}Wt.getCenter(n);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(bt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)bt.fromBufferAttribute(a,l),c&&(or.fromBufferAttribute(e,l),bt.add(or)),r=Math.max(r,n.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Ft(new Float32Array(4*a),4));const c=this.getAttribute("tangent").array,l=[],u=[];for(let I=0;I<a;I++)l[I]=new D,u[I]=new D;const f=new D,h=new D,d=new D,m=new fe,g=new fe,p=new fe,_=new D,y=new D;function x(I,W,j){f.fromArray(r,I*3),h.fromArray(r,W*3),d.fromArray(r,j*3),m.fromArray(o,I*2),g.fromArray(o,W*2),p.fromArray(o,j*2),h.sub(f),d.sub(f),g.sub(m),p.sub(m);const U=1/(g.x*p.y-p.x*g.y);!isFinite(U)||(_.copy(h).multiplyScalar(p.y).addScaledVector(d,-g.y).multiplyScalar(U),y.copy(d).multiplyScalar(g.x).addScaledVector(h,-p.x).multiplyScalar(U),l[I].add(_),l[W].add(_),l[j].add(_),u[I].add(y),u[W].add(y),u[j].add(y))}let v=this.groups;v.length===0&&(v=[{start:0,count:n.length}]);for(let I=0,W=v.length;I<W;++I){const j=v[I],U=j.start,O=j.count;for(let V=U,$=U+O;V<$;V+=3)x(n[V+0],n[V+1],n[V+2])}const w=new D,A=new D,R=new D,b=new D;function T(I){R.fromArray(s,I*3),b.copy(R);const W=l[I];w.copy(W),w.sub(R.multiplyScalar(R.dot(W))).normalize(),A.crossVectors(b,W);const U=A.dot(u[I])<0?-1:1;c[I*4]=w.x,c[I*4+1]=w.y,c[I*4+2]=w.z,c[I*4+3]=U}for(let I=0,W=v.length;I<W;++I){const j=v[I],U=j.start,O=j.count;for(let V=U,$=U+O;V<$;V+=3)T(n[V+0]),T(n[V+1]),T(n[V+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Ft(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,d=n.count;h<d;h++)n.setXYZ(h,0,0,0);const r=new D,s=new D,o=new D,a=new D,c=new D,l=new D,u=new D,f=new D;if(e)for(let h=0,d=e.count;h<d;h+=3){const m=e.getX(h+0),g=e.getX(h+1),p=e.getX(h+2);r.fromBufferAttribute(t,m),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,p),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(n,m),c.fromBufferAttribute(n,g),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(m,a.x,a.y,a.z),n.setXYZ(g,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let h=0,d=t.count;h<d;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),n.setXYZ(h+0,u.x,u.y,u.z),n.setXYZ(h+1,u.x,u.y,u.z),n.setXYZ(h+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeBufferGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bt.fromBufferAttribute(e,t),bt.normalize(),e.setXYZ(t,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,f=a.normalized,h=new l.constructor(c.length*u);let d=0,m=0;for(let g=0,p=c.length;g<p;g++){a.isInterleavedBufferAttribute?d=c[g]*a.data.stride+a.offset:d=c[g]*u;for(let _=0;_<u;_++)h[m++]=l[d++]}return new Ft(h,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ht,n=this.index.array,r=this.attributes;for(const a in r){const c=r[a],l=e(c,n);t.setAttribute(a,l)}const s=this.morphAttributes;for(const a in s){const c=[],l=s[a];for(let u=0,f=l.length;u<f;u++){const h=l[u],d=e(h,n);c.push(d)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.5,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const r={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let f=0,h=l.length;f<h;f++){const d=l[f];u.push(d.toJSON(e.data))}u.length>0&&(r[c]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const l in r){const u=r[l];this.setAttribute(l,u.clone(t))}const s=e.morphAttributes;for(const l in s){const u=[],f=s[l];for(let h=0,d=f.length;h<d;h++)u.push(f[h].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const f=o[l];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,e.parameters!==void 0&&(this.parameters=Object.assign({},e.parameters)),this}dispose(){this.dispatchEvent({type:"dispose"})}}const Zc=new Fe,ar=new Ho,wa=new Fr,Kn=new D,Qn=new D,Jn=new D,Ma=new D,Sa=new D,Ta=new D,js=new D,Xs=new D,qs=new D,Ys=new fe,$s=new fe,Zs=new fe,Ea=new D,Ks=new D;class se extends qe{constructor(e=new ht,t=new fn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;if(r===void 0||(n.boundingSphere===null&&n.computeBoundingSphere(),wa.copy(n.boundingSphere),wa.applyMatrix4(s),e.ray.intersectsSphere(wa)===!1)||(Zc.copy(s).invert(),ar.copy(e.ray).applyMatrix4(Zc),n.boundingBox!==null&&ar.intersectsBox(n.boundingBox)===!1))return;let o;const a=n.index,c=n.attributes.position,l=n.morphAttributes.position,u=n.morphTargetsRelative,f=n.attributes.uv,h=n.attributes.uv2,d=n.groups,m=n.drawRange;if(a!==null)if(Array.isArray(r))for(let g=0,p=d.length;g<p;g++){const _=d[g],y=r[_.materialIndex],x=Math.max(_.start,m.start),v=Math.min(a.count,Math.min(_.start+_.count,m.start+m.count));for(let w=x,A=v;w<A;w+=3){const R=a.getX(w),b=a.getX(w+1),T=a.getX(w+2);o=Qs(this,y,e,ar,c,l,u,f,h,R,b,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const g=Math.max(0,m.start),p=Math.min(a.count,m.start+m.count);for(let _=g,y=p;_<y;_+=3){const x=a.getX(_),v=a.getX(_+1),w=a.getX(_+2);o=Qs(this,r,e,ar,c,l,u,f,h,x,v,w),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}else if(c!==void 0)if(Array.isArray(r))for(let g=0,p=d.length;g<p;g++){const _=d[g],y=r[_.materialIndex],x=Math.max(_.start,m.start),v=Math.min(c.count,Math.min(_.start+_.count,m.start+m.count));for(let w=x,A=v;w<A;w+=3){const R=w,b=w+1,T=w+2;o=Qs(this,y,e,ar,c,l,u,f,h,R,b,T),o&&(o.faceIndex=Math.floor(w/3),o.face.materialIndex=_.materialIndex,t.push(o))}}else{const g=Math.max(0,m.start),p=Math.min(c.count,m.start+m.count);for(let _=g,y=p;_<y;_+=3){const x=_,v=_+1,w=_+2;o=Qs(this,r,e,ar,c,l,u,f,h,x,v,w),o&&(o.faceIndex=Math.floor(_/3),t.push(o))}}}}function Hm(i,e,t,n,r,s,o,a){let c;if(e.side===qt?c=n.intersectTriangle(o,s,r,!0,a):c=n.intersectTriangle(r,s,o,e.side!==bn,a),c===null)return null;Ks.copy(a),Ks.applyMatrix4(i.matrixWorld);const l=t.ray.origin.distanceTo(Ks);return l<t.near||l>t.far?null:{distance:l,point:Ks.clone(),object:i}}function Qs(i,e,t,n,r,s,o,a,c,l,u,f){Kn.fromBufferAttribute(r,l),Qn.fromBufferAttribute(r,u),Jn.fromBufferAttribute(r,f);const h=i.morphTargetInfluences;if(s&&h){js.set(0,0,0),Xs.set(0,0,0),qs.set(0,0,0);for(let m=0,g=s.length;m<g;m++){const p=h[m],_=s[m];p!==0&&(Ma.fromBufferAttribute(_,l),Sa.fromBufferAttribute(_,u),Ta.fromBufferAttribute(_,f),o?(js.addScaledVector(Ma,p),Xs.addScaledVector(Sa,p),qs.addScaledVector(Ta,p)):(js.addScaledVector(Ma.sub(Kn),p),Xs.addScaledVector(Sa.sub(Qn),p),qs.addScaledVector(Ta.sub(Jn),p)))}Kn.add(js),Qn.add(Xs),Jn.add(qs)}i.isSkinnedMesh&&(i.boneTransform(l,Kn),i.boneTransform(u,Qn),i.boneTransform(f,Jn));const d=Hm(i,e,t,n,Kn,Qn,Jn,Ea);if(d){a&&(Ys.fromBufferAttribute(a,l),$s.fromBufferAttribute(a,u),Zs.fromBufferAttribute(a,f),d.uv=Bn.getUV(Ea,Kn,Qn,Jn,Ys,$s,Zs,new fe)),c&&(Ys.fromBufferAttribute(c,l),$s.fromBufferAttribute(c,u),Zs.fromBufferAttribute(c,f),d.uv2=Bn.getUV(Ea,Kn,Qn,Jn,Ys,$s,Zs,new fe));const m={a:l,b:u,c:f,normal:new D,materialIndex:0};Bn.getNormal(Kn,Qn,Jn,m.normal),d.face=m}return d}class at extends ht{constructor(e=1,t=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const c=[],l=[],u=[],f=[];let h=0,d=0;m("z","y","x",-1,-1,n,t,e,o,s,0),m("z","y","x",1,-1,n,t,-e,o,s,1),m("x","z","y",1,1,e,n,t,r,o,2),m("x","z","y",1,-1,e,n,-t,r,o,3),m("x","y","z",1,-1,e,t,n,r,s,4),m("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(c),this.setAttribute("position",new $e(l,3)),this.setAttribute("normal",new $e(u,3)),this.setAttribute("uv",new $e(f,2));function m(g,p,_,y,x,v,w,A,R,b,T){const I=v/R,W=w/b,j=v/2,U=w/2,O=A/2,V=R+1,$=b+1;let ee=0,X=0;const F=new D;for(let k=0;k<$;k++){const te=k*W-U;for(let J=0;J<V;J++){const ie=J*I-j;F[g]=ie*y,F[p]=te*x,F[_]=O,l.push(F.x,F.y,F.z),F[g]=0,F[p]=0,F[_]=A>0?1:-1,u.push(F.x,F.y,F.z),f.push(J/R),f.push(1-k/b),ee+=1}}for(let k=0;k<b;k++)for(let te=0;te<R;te++){const J=h+te+V*k,ie=h+te+V*(k+1),ue=h+(te+1)+V*(k+1),G=h+(te+1)+V*k;c.push(J,ie,G),c.push(ie,ue,G),X+=6}a.addGroup(d,X,T),d+=X,h+=ee}}static fromJSON(e){return new at(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Sr(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function Rt(i){const e={};for(let t=0;t<i.length;t++){const n=Sr(i[t]);for(const r in n)e[r]=n[r]}return e}function Vm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}const To={clone:Sr,merge:Rt};var Gm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Wm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class mt extends Mn{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Gm,this.fragmentShader=Wm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv2:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Sr(e.uniforms),this.uniformsGroups=Vm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class df extends qe{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Fe,this.projectionMatrix=new Fe,this.projectionMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class It extends df{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=ms*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(os*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return ms*2*Math.atan(Math.tan(os*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,n,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(os*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;s+=o.offsetX*r/c,t-=o.offsetY*n/l,r*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const lr=90,cr=1;class jm extends qe{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n;const r=new It(lr,cr,e,t);r.layers=this.layers,r.up.set(0,-1,0),r.lookAt(new D(1,0,0)),this.add(r);const s=new It(lr,cr,e,t);s.layers=this.layers,s.up.set(0,-1,0),s.lookAt(new D(-1,0,0)),this.add(s);const o=new It(lr,cr,e,t);o.layers=this.layers,o.up.set(0,0,1),o.lookAt(new D(0,1,0)),this.add(o);const a=new It(lr,cr,e,t);a.layers=this.layers,a.up.set(0,0,-1),a.lookAt(new D(0,-1,0)),this.add(a);const c=new It(lr,cr,e,t);c.layers=this.layers,c.up.set(0,-1,0),c.lookAt(new D(0,0,1)),this.add(c);const l=new It(lr,cr,e,t);l.layers=this.layers,l.up.set(0,-1,0),l.lookAt(new D(0,0,-1)),this.add(l)}update(e,t){this.parent===null&&this.updateMatrixWorld();const n=this.renderTarget,[r,s,o,a,c,l]=this.children,u=e.getRenderTarget(),f=e.toneMapping,h=e.xr.enabled;e.toneMapping=Vn,e.xr.enabled=!1;const d=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0),e.render(t,r),e.setRenderTarget(n,1),e.render(t,s),e.setRenderTarget(n,2),e.render(t,o),e.setRenderTarget(n,3),e.render(t,a),e.setRenderTarget(n,4),e.render(t,c),n.texture.generateMipmaps=d,e.setRenderTarget(n,5),e.render(t,l),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=h,n.texture.needsPMREMUpdate=!0}}class pf extends Nt{constructor(e,t,n,r,s,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:xr,super(e,t,n,r,s,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xm extends pn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new pf(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.encoding),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.encoding=t.encoding,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new at(5,5,5),s=new mt({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:qt,blending:ai});s.uniforms.tEquirect.value=t;const o=new se(r,s),a=t.minFilter;return t.minFilter===Ir&&(t.minFilter=Bt),new jm(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,r);e.setRenderTarget(s)}}const Aa=new D,qm=new D,Ym=new rn;class xi{constructor(e=new D(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=Aa.subVectors(n,t).cross(qm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(this.normal).multiplyScalar(-this.distanceToPoint(e)).add(e)}intersectLine(e,t){const n=e.delta(Aa),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(n).multiplyScalar(s).add(e.start)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Ym.getNormalMatrix(e),r=this.coplanarPoint(Aa).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ur=new Fr,Js=new D;class Bl{constructor(e=new xi,t=new xi,n=new xi,r=new xi,s=new xi,o=new xi){this.planes=[e,t,n,r,s,o]}set(e,t,n,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e){const t=this.planes,n=e.elements,r=n[0],s=n[1],o=n[2],a=n[3],c=n[4],l=n[5],u=n[6],f=n[7],h=n[8],d=n[9],m=n[10],g=n[11],p=n[12],_=n[13],y=n[14],x=n[15];return t[0].setComponents(a-r,f-c,g-h,x-p).normalize(),t[1].setComponents(a+r,f+c,g+h,x+p).normalize(),t[2].setComponents(a+s,f+l,g+d,x+_).normalize(),t[3].setComponents(a-s,f-l,g-d,x-_).normalize(),t[4].setComponents(a-o,f-u,g-m,x-y).normalize(),t[5].setComponents(a+o,f+u,g+m,x+y).normalize(),this}intersectsObject(e){const t=e.geometry;return t.boundingSphere===null&&t.computeBoundingSphere(),ur.copy(t.boundingSphere).applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSprite(e){return ur.center.set(0,0,0),ur.radius=.7071067811865476,ur.applyMatrix4(e.matrixWorld),this.intersectsSphere(ur)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(Js.x=r.normal.x>0?e.max.x:e.min.x,Js.y=r.normal.y>0?e.max.y:e.min.y,Js.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Js)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mf(){let i=null,e=!1,t=null,n=null;function r(s,o){t(s,o),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function $m(i,e){const t=e.isWebGL2,n=new WeakMap;function r(l,u){const f=l.array,h=l.usage,d=i.createBuffer();i.bindBuffer(u,d),i.bufferData(u,f,h),l.onUploadCallback();let m;if(f instanceof Float32Array)m=5126;else if(f instanceof Uint16Array)if(l.isFloat16BufferAttribute)if(t)m=5131;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else m=5123;else if(f instanceof Int16Array)m=5122;else if(f instanceof Uint32Array)m=5125;else if(f instanceof Int32Array)m=5124;else if(f instanceof Int8Array)m=5120;else if(f instanceof Uint8Array)m=5121;else if(f instanceof Uint8ClampedArray)m=5121;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:d,type:m,bytesPerElement:f.BYTES_PER_ELEMENT,version:l.version}}function s(l,u,f){const h=u.array,d=u.updateRange;i.bindBuffer(f,l),d.count===-1?i.bufferSubData(f,0,h):(t?i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h,d.offset,d.count):i.bufferSubData(f,d.offset*h.BYTES_PER_ELEMENT,h.subarray(d.offset,d.offset+d.count)),d.count=-1)}function o(l){return l.isInterleavedBufferAttribute&&(l=l.data),n.get(l)}function a(l){l.isInterleavedBufferAttribute&&(l=l.data);const u=n.get(l);u&&(i.deleteBuffer(u.buffer),n.delete(l))}function c(l,u){if(l.isGLBufferAttribute){const h=n.get(l);(!h||h.version<l.version)&&n.set(l,{buffer:l.buffer,type:l.type,bytesPerElement:l.elementSize,version:l.version});return}l.isInterleavedBufferAttribute&&(l=l.data);const f=n.get(l);f===void 0?n.set(l,r(l,u)):f.version<l.version&&(s(f.buffer,l,u),f.version=l.version)}return{get:o,remove:a,update:c}}class Or extends ht{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(n),c=Math.floor(r),l=a+1,u=c+1,f=e/a,h=t/c,d=[],m=[],g=[],p=[];for(let _=0;_<u;_++){const y=_*h-o;for(let x=0;x<l;x++){const v=x*f-s;m.push(v,-y,0),g.push(0,0,1),p.push(x/a),p.push(1-_/c)}}for(let _=0;_<c;_++)for(let y=0;y<a;y++){const x=y+l*_,v=y+l*(_+1),w=y+1+l*(_+1),A=y+1+l*_;d.push(x,v,A),d.push(v,w,A)}this.setIndex(d),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(g,3)),this.setAttribute("uv",new $e(p,2))}static fromJSON(e){return new Or(e.width,e.height,e.widthSegments,e.heightSegments)}}var Zm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vUv ).g;
#endif`,Km=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Qm=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Jm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,e0=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vUv2 ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,t0=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,n0="vec3 transformed = vec3( position );",i0=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,r0=`vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
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
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float roughness ) {
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
#ifdef USE_IRIDESCENCE
	vec3 BRDF_GGX_Iridescence( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 f0, const in float f90, const in float iridescence, const in vec3 iridescenceFresnel, const in float roughness ) {
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = mix( F_Schlick( f0, f90, dotVH ), iridescenceFresnel, iridescence );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
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
float G_BlinnPhong_Implicit( ) {
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
#endif`,s0=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,o0=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vUv );
		vec2 dSTdy = dFdy( vUv );
		float Hll = bumpScale * texture2D( bumpMap, vUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,a0=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,l0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,c0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,u0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,f0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,d0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,p0=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,m0=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}`,g0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,_0=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,v0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,x0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vUv ).x * displacementScale + displacementBias );
#endif`,y0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,b0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,w0="gl_FragColor = linearToOutputTexel( gl_FragColor );",M0=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,S0=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,T0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,A0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,C0=`#ifdef USE_ENVMAP
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
#endif`,D0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,P0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,L0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,R0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,I0=`#ifdef USE_GRADIENTMAP
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
}`,F0=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vUv2 );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,N0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,O0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,k0=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert
#define Material_LightProbeLOD( material )	(0)`,B0=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( PHYSICALLY_CORRECT_LIGHTS )
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#else
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,U0=`#if defined( USE_ENVMAP )
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#if defined( ENVMAP_TYPE_CUBE_UV )
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
#endif`,z0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,H0=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon
#define Material_LightProbeLOD( material )	(0)`,V0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,G0=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong
#define Material_LightProbeLOD( material )	(0)`,W0=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULARINTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vUv ).a;
		#endif
		#ifdef USE_SPECULARCOLORMAP
			specularColorFactor *= texture2D( specularColorMap, vUv ).rgb;
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
		material.clearcoat *= texture2D( clearcoatMap, vUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEENCOLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEENROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vUv ).a;
	#endif
#endif`,j0=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	#ifdef USE_IRIDESCENCE
		reflectedLight.directSpecular += irradiance * BRDF_GGX_Iridescence( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness );
	#else
		reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularF90, material.roughness );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,X0=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= all( bvec2( directLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,q0=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Y0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,$0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Z0=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,K0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,Q0=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,J0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ng=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	uniform mat3 uvTransform;
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vUv );
	metalnessFactor *= texelMetalness.b;
#endif`,rg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,sg=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,og=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ag=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,lg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,cg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	#ifdef USE_TANGENT
		vec3 tangent = normalize( vTangent );
		vec3 bitangent = normalize( vBitangent );
		#ifdef DOUBLE_SIDED
			tangent = tangent * faceDirection;
			bitangent = bitangent * faceDirection;
		#endif
		#if defined( TANGENTSPACE_NORMALMAP ) || defined( USE_CLEARCOAT_NORMALMAP )
			mat3 vTBN = mat3( tangent, bitangent, normal );
		#endif
	#endif
#endif
vec3 geometryNormal = normal;`,ug=`#ifdef OBJECTSPACE_NORMALMAP
	normal = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( TANGENTSPACE_NORMALMAP )
	vec3 mapN = texture2D( normalMap, vUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	#ifdef USE_TANGENT
		normal = normalize( vTBN * mapN );
	#else
		normal = perturbNormal2Arb( - vViewPosition, normal, mapN, faceDirection );
	#endif
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,dg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,pg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef OBJECTSPACE_NORMALMAP
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( TANGENTSPACE_NORMALMAP ) || defined ( USE_CLEARCOAT_NORMALMAP ) )
	vec3 perturbNormal2Arb( vec3 eye_pos, vec3 surf_norm, vec3 mapN, float faceDirection ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( vUv.st );
		vec2 st1 = dFdy( vUv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : faceDirection * inversesqrt( det );
		return normalize( T * ( mapN.x * scale ) + B * ( mapN.y * scale ) + N * mapN.z );
	}
#endif`,mg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,gg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	#ifdef USE_TANGENT
		clearcoatNormal = normalize( vTBN * clearcoatMapN );
	#else
		clearcoatNormal = perturbNormal2Arb( - vViewPosition, clearcoatNormal, clearcoatMapN, faceDirection );
	#endif
#endif`,_g=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif`,vg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha + 0.1;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,yg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float linearClipZ, const in float near, const in float far ) {
	return linearClipZ * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float invClipZ, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * invClipZ - far );
}`,bg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,wg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Mg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Sg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Tg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Eg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Ag=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bvec4 inFrustumVec = bvec4 ( shadowCoord.x >= 0.0, shadowCoord.x <= 1.0, shadowCoord.y >= 0.0, shadowCoord.y <= 1.0 );
		bool inFrustum = all( inFrustumVec );
		bvec2 frustumTestVec = bvec2( inFrustum, shadowCoord.z <= 1.0 );
		bool frustumTest = all( frustumTestVec );
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,Cg=`#if NUM_SPOT_LIGHT_COORDS > 0
  uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
  varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Dg=`#if defined( USE_SHADOWMAP ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#if NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SPOT_LIGHT_COORDS > 0 || NUM_POINT_LIGHT_SHADOWS > 0
		vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		vec4 shadowWorldPosition;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
		vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
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
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
		vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
	#endif
#endif`,Pg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Lg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Ig=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Fg=`#ifdef USE_SKINNING
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
#endif`,Ng=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,kg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Bg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return toneMappingExposure * color;
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ug=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmission = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmission.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmission.rgb, material.transmission );
#endif`,zg=`#ifdef USE_TRANSMISSION
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
		float framebufferLod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		#ifdef texture2DLodEXT
			return texture2DLodEXT( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#else
			return texture2D( transmissionSamplerMap, fragCoord.xy, framebufferLod );
		#endif
	}
	vec3 applyVolumeAttenuation( const in vec3 radiance, const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return radiance;
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance * radiance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 attenuatedColor = applyVolumeAttenuation( transmittedLight.rgb, length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		return vec4( ( 1.0 - F ) * attenuatedColor * diffuseColor, transmittedLight.a );
	}
#endif`,Hg=`#if ( defined( USE_UV ) && ! defined( UVS_VERTEX_ONLY ) )
	varying vec2 vUv;
#endif`,Vg=`#ifdef USE_UV
	#ifdef UVS_VERTEX_ONLY
		vec2 vUv;
	#else
		varying vec2 vUv;
	#endif
	uniform mat3 uvTransform;
#endif`,Gg=`#ifdef USE_UV
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
#endif`,Wg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	varying vec2 vUv2;
#endif`,jg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	attribute vec2 uv2;
	varying vec2 vUv2;
	uniform mat3 uv2Transform;
#endif`,Xg=`#if defined( USE_LIGHTMAP ) || defined( USE_AOMAP )
	vUv2 = ( uv2Transform * vec3( uv2, 1 ) ).xy;
#endif`,qg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Yg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$g=`uniform sampler2D t2D;
varying vec2 vUv;
void main() {
	gl_FragColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		gl_FragColor = vec4( mix( pow( gl_FragColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), gl_FragColor.rgb * 0.0773993808, vec3( lessThanEqual( gl_FragColor.rgb, vec3( 0.04045 ) ) ) ), gl_FragColor.w );
	#endif
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Kg=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Qg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Jg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,e_=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,t_=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,n_=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,i_=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,r_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,s_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,o_=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,a_=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,l_=`#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,c_=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vUv2 );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u_=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,h_=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,f_=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,d_=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,p_=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
	vViewPosition = - mvPosition.xyz;
#endif
}`,m_=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( TANGENTSPACE_NORMALMAP )
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,g_=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,__=`#define PHONG
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
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v_=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,x_=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
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
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y_=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <uv2_pars_vertex>
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
	#include <uv2_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
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
}`,b_=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <uv2_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,w_=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <color_vertex>
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
}`,M_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S_=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,T_=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,E_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,A_=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,De={alphamap_fragment:Zm,alphamap_pars_fragment:Km,alphatest_fragment:Qm,alphatest_pars_fragment:Jm,aomap_fragment:e0,aomap_pars_fragment:t0,begin_vertex:n0,beginnormal_vertex:i0,bsdfs:r0,iridescence_fragment:s0,bumpmap_pars_fragment:o0,clipping_planes_fragment:a0,clipping_planes_pars_fragment:l0,clipping_planes_pars_vertex:c0,clipping_planes_vertex:u0,color_fragment:h0,color_pars_fragment:f0,color_pars_vertex:d0,color_vertex:p0,common:m0,cube_uv_reflection_fragment:g0,defaultnormal_vertex:_0,displacementmap_pars_vertex:v0,displacementmap_vertex:x0,emissivemap_fragment:y0,emissivemap_pars_fragment:b0,encodings_fragment:w0,encodings_pars_fragment:M0,envmap_fragment:S0,envmap_common_pars_fragment:T0,envmap_pars_fragment:E0,envmap_pars_vertex:A0,envmap_physical_pars_fragment:U0,envmap_vertex:C0,fog_vertex:D0,fog_pars_vertex:P0,fog_fragment:L0,fog_pars_fragment:R0,gradientmap_pars_fragment:I0,lightmap_fragment:F0,lightmap_pars_fragment:N0,lights_lambert_fragment:O0,lights_lambert_pars_fragment:k0,lights_pars_begin:B0,lights_toon_fragment:z0,lights_toon_pars_fragment:H0,lights_phong_fragment:V0,lights_phong_pars_fragment:G0,lights_physical_fragment:W0,lights_physical_pars_fragment:j0,lights_fragment_begin:X0,lights_fragment_maps:q0,lights_fragment_end:Y0,logdepthbuf_fragment:$0,logdepthbuf_pars_fragment:Z0,logdepthbuf_pars_vertex:K0,logdepthbuf_vertex:Q0,map_fragment:J0,map_pars_fragment:eg,map_particle_fragment:tg,map_particle_pars_fragment:ng,metalnessmap_fragment:ig,metalnessmap_pars_fragment:rg,morphcolor_vertex:sg,morphnormal_vertex:og,morphtarget_pars_vertex:ag,morphtarget_vertex:lg,normal_fragment_begin:cg,normal_fragment_maps:ug,normal_pars_fragment:hg,normal_pars_vertex:fg,normal_vertex:dg,normalmap_pars_fragment:pg,clearcoat_normal_fragment_begin:mg,clearcoat_normal_fragment_maps:gg,clearcoat_pars_fragment:_g,iridescence_pars_fragment:vg,output_fragment:xg,packing:yg,premultiplied_alpha_fragment:bg,project_vertex:wg,dithering_fragment:Mg,dithering_pars_fragment:Sg,roughnessmap_fragment:Tg,roughnessmap_pars_fragment:Eg,shadowmap_pars_fragment:Ag,shadowmap_pars_vertex:Cg,shadowmap_vertex:Dg,shadowmask_pars_fragment:Pg,skinbase_vertex:Lg,skinning_pars_vertex:Rg,skinning_vertex:Ig,skinnormal_vertex:Fg,specularmap_fragment:Ng,specularmap_pars_fragment:Og,tonemapping_fragment:kg,tonemapping_pars_fragment:Bg,transmission_fragment:Ug,transmission_pars_fragment:zg,uv_pars_fragment:Hg,uv_pars_vertex:Vg,uv_vertex:Gg,uv2_pars_fragment:Wg,uv2_pars_vertex:jg,uv2_vertex:Xg,worldpos_vertex:qg,background_vert:Yg,background_frag:$g,backgroundCube_vert:Zg,backgroundCube_frag:Kg,cube_vert:Qg,cube_frag:Jg,depth_vert:e_,depth_frag:t_,distanceRGBA_vert:n_,distanceRGBA_frag:i_,equirect_vert:r_,equirect_frag:s_,linedashed_vert:o_,linedashed_frag:a_,meshbasic_vert:l_,meshbasic_frag:c_,meshlambert_vert:u_,meshlambert_frag:h_,meshmatcap_vert:f_,meshmatcap_frag:d_,meshnormal_vert:p_,meshnormal_frag:m_,meshphong_vert:g_,meshphong_frag:__,meshphysical_vert:v_,meshphysical_frag:x_,meshtoon_vert:y_,meshtoon_frag:b_,points_vert:w_,points_frag:M_,shadow_vert:S_,shadow_frag:T_,sprite_vert:E_,sprite_frag:A_},oe={common:{diffuse:{value:new Se(16777215)},opacity:{value:1},map:{value:null},uvTransform:{value:new rn},uv2Transform:{value:new rn},alphaMap:{value:null},alphaTest:{value:0}},specularmap:{specularMap:{value:null}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1}},emissivemap:{emissiveMap:{value:null}},bumpmap:{bumpMap:{value:null},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalScale:{value:new fe(1,1)}},displacementmap:{displacementMap:{value:null},displacementScale:{value:1},displacementBias:{value:0}},roughnessmap:{roughnessMap:{value:null}},metalnessmap:{metalnessMap:{value:null}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Se(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Se(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rn}},sprite:{diffuse:{value:new Se(16777215)},opacity:{value:1},center:{value:new fe(.5,.5)},rotation:{value:0},map:{value:null},alphaMap:{value:null},alphaTest:{value:0},uvTransform:{value:new rn}}},yn={basic:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.fog]),vertexShader:De.meshbasic_vert,fragmentShader:De.meshbasic_frag},lambert:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Se(0)}}]),vertexShader:De.meshlambert_vert,fragmentShader:De.meshlambert_frag},phong:{uniforms:Rt([oe.common,oe.specularmap,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,oe.lights,{emissive:{value:new Se(0)},specular:{value:new Se(1118481)},shininess:{value:30}}]),vertexShader:De.meshphong_vert,fragmentShader:De.meshphong_frag},standard:{uniforms:Rt([oe.common,oe.envmap,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.roughnessmap,oe.metalnessmap,oe.fog,oe.lights,{emissive:{value:new Se(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag},toon:{uniforms:Rt([oe.common,oe.aomap,oe.lightmap,oe.emissivemap,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.gradientmap,oe.fog,oe.lights,{emissive:{value:new Se(0)}}]),vertexShader:De.meshtoon_vert,fragmentShader:De.meshtoon_frag},matcap:{uniforms:Rt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,oe.fog,{matcap:{value:null}}]),vertexShader:De.meshmatcap_vert,fragmentShader:De.meshmatcap_frag},points:{uniforms:Rt([oe.points,oe.fog]),vertexShader:De.points_vert,fragmentShader:De.points_frag},dashed:{uniforms:Rt([oe.common,oe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:De.linedashed_vert,fragmentShader:De.linedashed_frag},depth:{uniforms:Rt([oe.common,oe.displacementmap]),vertexShader:De.depth_vert,fragmentShader:De.depth_frag},normal:{uniforms:Rt([oe.common,oe.bumpmap,oe.normalmap,oe.displacementmap,{opacity:{value:1}}]),vertexShader:De.meshnormal_vert,fragmentShader:De.meshnormal_frag},sprite:{uniforms:Rt([oe.sprite,oe.fog]),vertexShader:De.sprite_vert,fragmentShader:De.sprite_frag},background:{uniforms:{uvTransform:{value:new rn},t2D:{value:null}},vertexShader:De.background_vert,fragmentShader:De.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0}},vertexShader:De.backgroundCube_vert,fragmentShader:De.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:De.cube_vert,fragmentShader:De.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:De.equirect_vert,fragmentShader:De.equirect_frag},distanceRGBA:{uniforms:Rt([oe.common,oe.displacementmap,{referencePosition:{value:new D},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:De.distanceRGBA_vert,fragmentShader:De.distanceRGBA_frag},shadow:{uniforms:Rt([oe.lights,oe.fog,{color:{value:new Se(0)},opacity:{value:1}}]),vertexShader:De.shadow_vert,fragmentShader:De.shadow_frag}};yn.physical={uniforms:Rt([yn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatNormalScale:{value:new fe(1,1)},clearcoatNormalMap:{value:null},iridescence:{value:0},iridescenceMap:{value:null},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},sheen:{value:0},sheenColor:{value:new Se(0)},sheenColorMap:{value:null},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},transmission:{value:0},transmissionMap:{value:null},transmissionSamplerSize:{value:new fe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},attenuationDistance:{value:0},attenuationColor:{value:new Se(0)},specularIntensity:{value:1},specularIntensityMap:{value:null},specularColor:{value:new Se(1,1,1)},specularColorMap:{value:null}}]),vertexShader:De.meshphysical_vert,fragmentShader:De.meshphysical_frag};function C_(i,e,t,n,r,s,o){const a=new Se(0);let c=s===!0?0:1,l,u,f=null,h=0,d=null;function m(p,_){let y=!1,x=_.isScene===!0?_.background:null;x&&x.isTexture&&(x=(_.backgroundBlurriness>0?t:e).get(x));const v=i.xr,w=v.getSession&&v.getSession();w&&w.environmentBlendMode==="additive"&&(x=null),x===null?g(a,c):x&&x.isColor&&(g(x,1),y=!0),(i.autoClear||y)&&i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil),x&&(x.isCubeTexture||x.mapping===zo)?(u===void 0&&(u=new se(new at(1,1,1),new mt({name:"BackgroundCubeMaterial",uniforms:Sr(yn.backgroundCube.uniforms),vertexShader:yn.backgroundCube.vertexShader,fragmentShader:yn.backgroundCube.fragmentShader,side:qt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(A,R,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=x,u.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=_.backgroundBlurriness,(f!==x||h!==x.version||d!==i.toneMapping)&&(u.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),u.layers.enableAll(),p.unshift(u,u.geometry,u.material,0,0,null)):x&&x.isTexture&&(l===void 0&&(l=new se(new Or(2,2),new mt({name:"BackgroundMaterial",uniforms:Sr(yn.background.uniforms),vertexShader:yn.background.vertexShader,fragmentShader:yn.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=x,x.matrixAutoUpdate===!0&&x.updateMatrix(),l.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||h!==x.version||d!==i.toneMapping)&&(l.material.needsUpdate=!0,f=x,h=x.version,d=i.toneMapping),l.layers.enableAll(),p.unshift(l,l.geometry,l.material,0,0,null))}function g(p,_){n.buffers.color.setClear(p.r,p.g,p.b,_,o)}return{getClearColor:function(){return a},setClearColor:function(p,_=1){a.set(p),c=_,g(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(p){c=p,g(a,c)},render:m}}function D_(i,e,t,n){const r=i.getParameter(34921),s=n.isWebGL2?null:e.get("OES_vertex_array_object"),o=n.isWebGL2||s!==null,a={},c=p(null);let l=c,u=!1;function f(O,V,$,ee,X){let F=!1;if(o){const k=g(ee,$,V);l!==k&&(l=k,d(l.object)),F=_(O,ee,$,X),F&&y(O,ee,$,X)}else{const k=V.wireframe===!0;(l.geometry!==ee.id||l.program!==$.id||l.wireframe!==k)&&(l.geometry=ee.id,l.program=$.id,l.wireframe=k,F=!0)}X!==null&&t.update(X,34963),(F||u)&&(u=!1,b(O,V,$,ee),X!==null&&i.bindBuffer(34963,t.get(X).buffer))}function h(){return n.isWebGL2?i.createVertexArray():s.createVertexArrayOES()}function d(O){return n.isWebGL2?i.bindVertexArray(O):s.bindVertexArrayOES(O)}function m(O){return n.isWebGL2?i.deleteVertexArray(O):s.deleteVertexArrayOES(O)}function g(O,V,$){const ee=$.wireframe===!0;let X=a[O.id];X===void 0&&(X={},a[O.id]=X);let F=X[V.id];F===void 0&&(F={},X[V.id]=F);let k=F[ee];return k===void 0&&(k=p(h()),F[ee]=k),k}function p(O){const V=[],$=[],ee=[];for(let X=0;X<r;X++)V[X]=0,$[X]=0,ee[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:V,enabledAttributes:$,attributeDivisors:ee,object:O,attributes:{},index:null}}function _(O,V,$,ee){const X=l.attributes,F=V.attributes;let k=0;const te=$.getAttributes();for(const J in te)if(te[J].location>=0){const ue=X[J];let G=F[J];if(G===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(G=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(G=O.instanceColor)),ue===void 0||ue.attribute!==G||G&&ue.data!==G.data)return!0;k++}return l.attributesNum!==k||l.index!==ee}function y(O,V,$,ee){const X={},F=V.attributes;let k=0;const te=$.getAttributes();for(const J in te)if(te[J].location>=0){let ue=F[J];ue===void 0&&(J==="instanceMatrix"&&O.instanceMatrix&&(ue=O.instanceMatrix),J==="instanceColor"&&O.instanceColor&&(ue=O.instanceColor));const G={};G.attribute=ue,ue&&ue.data&&(G.data=ue.data),X[J]=G,k++}l.attributes=X,l.attributesNum=k,l.index=ee}function x(){const O=l.newAttributes;for(let V=0,$=O.length;V<$;V++)O[V]=0}function v(O){w(O,0)}function w(O,V){const $=l.newAttributes,ee=l.enabledAttributes,X=l.attributeDivisors;$[O]=1,ee[O]===0&&(i.enableVertexAttribArray(O),ee[O]=1),X[O]!==V&&((n.isWebGL2?i:e.get("ANGLE_instanced_arrays"))[n.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](O,V),X[O]=V)}function A(){const O=l.newAttributes,V=l.enabledAttributes;for(let $=0,ee=V.length;$<ee;$++)V[$]!==O[$]&&(i.disableVertexAttribArray($),V[$]=0)}function R(O,V,$,ee,X,F){n.isWebGL2===!0&&($===5124||$===5125)?i.vertexAttribIPointer(O,V,$,X,F):i.vertexAttribPointer(O,V,$,ee,X,F)}function b(O,V,$,ee){if(n.isWebGL2===!1&&(O.isInstancedMesh||ee.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const X=ee.attributes,F=$.getAttributes(),k=V.defaultAttributeValues;for(const te in F){const J=F[te];if(J.location>=0){let ie=X[te];if(ie===void 0&&(te==="instanceMatrix"&&O.instanceMatrix&&(ie=O.instanceMatrix),te==="instanceColor"&&O.instanceColor&&(ie=O.instanceColor)),ie!==void 0){const ue=ie.normalized,G=ie.itemSize,Z=t.get(ie);if(Z===void 0)continue;const Ae=Z.buffer,ve=Z.type,ye=Z.bytesPerElement;if(ie.isInterleavedBufferAttribute){const le=ie.data,Be=le.stride,Te=ie.offset;if(le.isInstancedInterleavedBuffer){for(let be=0;be<J.locationSize;be++)w(J.location+be,le.meshPerAttribute);O.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let be=0;be<J.locationSize;be++)v(J.location+be);i.bindBuffer(34962,Ae);for(let be=0;be<J.locationSize;be++)R(J.location+be,G/J.locationSize,ve,ue,Be*ye,(Te+G/J.locationSize*be)*ye)}else{if(ie.isInstancedBufferAttribute){for(let le=0;le<J.locationSize;le++)w(J.location+le,ie.meshPerAttribute);O.isInstancedMesh!==!0&&ee._maxInstanceCount===void 0&&(ee._maxInstanceCount=ie.meshPerAttribute*ie.count)}else for(let le=0;le<J.locationSize;le++)v(J.location+le);i.bindBuffer(34962,Ae);for(let le=0;le<J.locationSize;le++)R(J.location+le,G/J.locationSize,ve,ue,G*ye,G/J.locationSize*le*ye)}}else if(k!==void 0){const ue=k[te];if(ue!==void 0)switch(ue.length){case 2:i.vertexAttrib2fv(J.location,ue);break;case 3:i.vertexAttrib3fv(J.location,ue);break;case 4:i.vertexAttrib4fv(J.location,ue);break;default:i.vertexAttrib1fv(J.location,ue)}}}}A()}function T(){j();for(const O in a){const V=a[O];for(const $ in V){const ee=V[$];for(const X in ee)m(ee[X].object),delete ee[X];delete V[$]}delete a[O]}}function I(O){if(a[O.id]===void 0)return;const V=a[O.id];for(const $ in V){const ee=V[$];for(const X in ee)m(ee[X].object),delete ee[X];delete V[$]}delete a[O.id]}function W(O){for(const V in a){const $=a[V];if($[O.id]===void 0)continue;const ee=$[O.id];for(const X in ee)m(ee[X].object),delete ee[X];delete $[O.id]}}function j(){U(),u=!0,l!==c&&(l=c,d(l.object))}function U(){c.geometry=null,c.program=null,c.wireframe=!1}return{setup:f,reset:j,resetDefaultState:U,dispose:T,releaseStatesOfGeometry:I,releaseStatesOfProgram:W,initAttributes:x,enableAttribute:v,disableUnusedAttributes:A}}function P_(i,e,t,n){const r=n.isWebGL2;let s;function o(l){s=l}function a(l,u){i.drawArrays(s,l,u),t.update(u,s,1)}function c(l,u,f){if(f===0)return;let h,d;if(r)h=i,d="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),d="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[d](s,l,u,f),t.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=c}function L_(i,e,t){let n;function r(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){const R=e.get("EXT_texture_filter_anisotropic");n=i.getParameter(R.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function s(R){if(R==="highp"){if(i.getShaderPrecisionFormat(35633,36338).precision>0&&i.getShaderPrecisionFormat(35632,36338).precision>0)return"highp";R="mediump"}return R==="mediump"&&i.getShaderPrecisionFormat(35633,36337).precision>0&&i.getShaderPrecisionFormat(35632,36337).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&i instanceof WebGL2RenderingContext||typeof WebGL2ComputeRenderingContext<"u"&&i instanceof WebGL2ComputeRenderingContext;let a=t.precision!==void 0?t.precision:"highp";const c=s(a);c!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",c,"instead."),a=c);const l=o||e.has("WEBGL_draw_buffers"),u=t.logarithmicDepthBuffer===!0,f=i.getParameter(34930),h=i.getParameter(35660),d=i.getParameter(3379),m=i.getParameter(34076),g=i.getParameter(34921),p=i.getParameter(36347),_=i.getParameter(36348),y=i.getParameter(36349),x=h>0,v=o||e.has("OES_texture_float"),w=x&&v,A=o?i.getParameter(36183):0;return{isWebGL2:o,drawBuffers:l,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:h,maxTextureSize:d,maxCubemapSize:m,maxAttributes:g,maxVertexUniforms:p,maxVaryings:_,maxFragmentUniforms:y,vertexTextures:x,floatFragmentTextures:v,floatVertexTextures:w,maxSamples:A}}function R_(i){const e=this;let t=null,n=0,r=!1,s=!1;const o=new xi,a=new rn,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(f,h,d){const m=f.length!==0||h||n!==0||r;return r=h,t=u(f,d,0),n=f.length,m},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1,l()},this.setState=function(f,h,d){const m=f.clippingPlanes,g=f.clipIntersection,p=f.clipShadows,_=i.get(f);if(!r||m===null||m.length===0||s&&!p)s?u(null):l();else{const y=s?0:n,x=y*4;let v=_.clippingState||null;c.value=v,v=u(m,h,x,d);for(let w=0;w!==x;++w)v[w]=t[w];_.clippingState=v,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=y}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(f,h,d,m){const g=f!==null?f.length:0;let p=null;if(g!==0){if(p=c.value,m!==!0||p===null){const _=d+g*4,y=h.matrixWorldInverse;a.getNormalMatrix(y),(p===null||p.length<_)&&(p=new Float32Array(_));for(let x=0,v=d;x!==g;++x,v+=4)o.copy(f[x]).applyMatrix4(y,a),o.normal.toArray(p,v),p[v+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,p}}function I_(i){let e=new WeakMap;function t(o,a){return a===il?o.mapping=xr:a===rl&&(o.mapping=yr),o}function n(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===il||a===rl)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new Xm(c.height/2);return l.fromEquirectangularTexture(i,o),e.set(o,l),o.addEventListener("dispose",r),t(l.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class Es extends df{constructor(e=-1,t=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,o=n+e,a=r+t,c=r-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,o=s+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,c,this.near,this.far),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const dr=4,Kc=[.125,.215,.35,.446,.526,.582],Mi=20,Ca=new Es,Qc=new Se;let Da=null;const yi=(1+Math.sqrt(5))/2,hr=1/yi,Jc=[new D(1,1,1),new D(-1,1,1),new D(1,1,-1),new D(-1,1,-1),new D(0,yi,hr),new D(0,yi,-hr),new D(hr,0,yi),new D(-hr,0,yi),new D(yi,hr,0),new D(-yi,hr,0)];class eu{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Da=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=iu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=nu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Da),e.scissorTest=!1,eo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===xr||e.mapping===yr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Da=this._renderer.getRenderTarget();const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Bt,minFilter:Bt,generateMipmaps:!1,type:ds,format:en,encoding:ki,depthBuffer:!1},r=tu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=tu(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=F_(s)),this._blurMaterial=N_(s,e,t)}return r}_compileMaterial(e){const t=new se(this._lodPlanes[0],e);this._renderer.compile(t,Ca)}_sceneToCubeUV(e,t,n,r){const a=new It(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,h=u.toneMapping;u.getClearColor(Qc),u.toneMapping=Vn,u.autoClear=!1;const d=new fn({name:"PMREM.Background",side:qt,depthWrite:!1,depthTest:!1}),m=new se(new at,d);let g=!1;const p=e.background;p?p.isColor&&(d.color.copy(p),e.background=null,g=!0):(d.color.copy(Qc),g=!0);for(let _=0;_<6;_++){const y=_%3;y===0?(a.up.set(0,c[_],0),a.lookAt(l[_],0,0)):y===1?(a.up.set(0,0,c[_]),a.lookAt(0,l[_],0)):(a.up.set(0,c[_],0),a.lookAt(0,0,l[_]));const x=this._cubeSize;eo(r,y*x,_>2?x:0,x,x),u.setRenderTarget(r),g&&u.render(m,a),u.render(e,a)}m.geometry.dispose(),m.material.dispose(),u.toneMapping=h,u.autoClear=f,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===xr||e.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=iu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=nu());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new se(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const c=this._cubeSize;eo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,Ca)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Jc[(r-1)%Jc.length];this._blur(e,r-1,r,s,o)}t.autoClear=n}_blur(e,t,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,r,"latitudinal",s),this._halfBlur(o,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new se(this._lodPlanes[r],l),h=l.uniforms,d=this._sizeLods[n]-1,m=isFinite(s)?Math.PI/(2*d):2*Math.PI/(2*Mi-1),g=s/m,p=isFinite(s)?1+Math.floor(u*g):Mi;p>Mi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Mi}`);const _=[];let y=0;for(let R=0;R<Mi;++R){const b=R/g,T=Math.exp(-b*b/2);_.push(T),R===0?y+=T:R<p&&(y+=2*T)}for(let R=0;R<_.length;R++)_[R]=_[R]/y;h.envMap.value=e.texture,h.samples.value=p,h.weights.value=_,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=m,h.mipInt.value=x-n;const v=this._sizeLods[r],w=3*v*(r>x-dr?r-x+dr:0),A=4*(this._cubeSize-v);eo(t,w,A,3*v,2*v),c.setRenderTarget(t),c.render(f,Ca)}}function F_(i){const e=[],t=[],n=[];let r=i;const s=i-dr+1+Kc.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let c=1/a;o>i-dr?c=Kc[o-i+dr-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,f=1+l,h=[u,u,f,u,f,f,u,u,f,f,u,f],d=6,m=6,g=3,p=2,_=1,y=new Float32Array(g*m*d),x=new Float32Array(p*m*d),v=new Float32Array(_*m*d);for(let A=0;A<d;A++){const R=A%3*2/3-1,b=A>2?0:-1,T=[R,b,0,R+2/3,b,0,R+2/3,b+1,0,R,b,0,R+2/3,b+1,0,R,b+1,0];y.set(T,g*m*A),x.set(h,p*m*A);const I=[A,A,A,A,A,A];v.set(I,_*m*A)}const w=new ht;w.setAttribute("position",new Ft(y,g)),w.setAttribute("uv",new Ft(x,p)),w.setAttribute("faceIndex",new Ft(v,_)),e.push(w),r>dr&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function tu(i,e,t){const n=new pn(i,e,t);return n.texture.mapping=zo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function eo(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function N_(i,e,t){const n=new Float32Array(Mi),r=new D(0,1,0);return new mt({name:"SphericalGaussianBlur",defines:{n:Mi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function nu(){return new mt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Ul(),fragmentShader:`

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
		`,blending:ai,depthTest:!1,depthWrite:!1})}function iu(){return new mt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Ul(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ai,depthTest:!1,depthWrite:!1})}function Ul(){return`

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
	`}function O_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===il||c===rl,u=c===xr||c===yr;if(l||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return t===null&&(t=new eu(i)),f=l?t.fromEquirectangular(a,f):t.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(l&&f&&f.height>0||u&&f&&r(f)){t===null&&(t=new eu(i));const h=l?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function s(a){const c=a.target;c.removeEventListener("dispose",s);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function k_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(n){n.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(n){const r=t(n);return r===null&&console.warn("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function B_(i,e,t,n){const r={},s=new WeakMap;function o(f){const h=f.target;h.index!==null&&e.remove(h.index);for(const m in h.attributes)e.remove(h.attributes[m]);h.removeEventListener("dispose",o),delete r[h.id];const d=s.get(h);d&&(e.remove(d),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(f,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function c(f){const h=f.attributes;for(const m in h)e.update(h[m],34962);const d=f.morphAttributes;for(const m in d){const g=d[m];for(let p=0,_=g.length;p<_;p++)e.update(g[p],34962)}}function l(f){const h=[],d=f.index,m=f.attributes.position;let g=0;if(d!==null){const y=d.array;g=d.version;for(let x=0,v=y.length;x<v;x+=3){const w=y[x+0],A=y[x+1],R=y[x+2];h.push(w,A,A,R,R,w)}}else{const y=m.array;g=m.version;for(let x=0,v=y.length/3-1;x<v;x+=3){const w=x+0,A=x+1,R=x+2;h.push(w,A,A,R,R,w)}}const p=new(of(h)?ff:hf)(h,1);p.version=g;const _=s.get(f);_&&e.remove(_),s.set(f,p)}function u(f){const h=s.get(f);if(h){const d=f.index;d!==null&&h.version<d.version&&l(f)}else l(f);return s.get(f)}return{get:a,update:c,getWireframeAttribute:u}}function U_(i,e,t,n){const r=n.isWebGL2;let s;function o(h){s=h}let a,c;function l(h){a=h.type,c=h.bytesPerElement}function u(h,d){i.drawElements(s,d,a,h*c),t.update(d,s,1)}function f(h,d,m){if(m===0)return;let g,p;if(r)g=i,p="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),p="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[p](s,d,a,h*c,m),t.update(d,s,m)}this.setMode=o,this.setIndex=l,this.render=u,this.renderInstances=f}function z_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(t.calls++,o){case 4:t.triangles+=a*(s/3);break;case 1:t.lines+=a*(s/2);break;case 3:t.lines+=a*(s-1);break;case 2:t.lines+=a*s;break;case 0:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.frame++,t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function H_(i,e){return i[0]-e[0]}function V_(i,e){return Math.abs(e[1])-Math.abs(i[1])}function G_(i,e,t){const n={},r=new Float32Array(8),s=new WeakMap,o=new Xe,a=[];for(let l=0;l<8;l++)a[l]=[l,0];function c(l,u,f,h){const d=l.morphTargetInfluences;if(e.isWebGL2===!0){const m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let p=s.get(u);if(p===void 0||p.count!==g){let V=function(){U.dispose(),s.delete(u),u.removeEventListener("dispose",V)};p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,v=u.morphAttributes.normal!==void 0,w=u.morphAttributes.color!==void 0,A=u.morphAttributes.position||[],R=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let T=0;x===!0&&(T=1),v===!0&&(T=2),w===!0&&(T=3);let I=u.attributes.position.count*T,W=1;I>e.maxTextureSize&&(W=Math.ceil(I/e.maxTextureSize),I=e.maxTextureSize);const j=new Float32Array(I*W*4*g),U=new uf(j,I,W,g);U.type=si,U.needsUpdate=!0;const O=T*4;for(let $=0;$<g;$++){const ee=A[$],X=R[$],F=b[$],k=I*W*4*$;for(let te=0;te<ee.count;te++){const J=te*O;x===!0&&(o.fromBufferAttribute(ee,te),j[k+J+0]=o.x,j[k+J+1]=o.y,j[k+J+2]=o.z,j[k+J+3]=0),v===!0&&(o.fromBufferAttribute(X,te),j[k+J+4]=o.x,j[k+J+5]=o.y,j[k+J+6]=o.z,j[k+J+7]=0),w===!0&&(o.fromBufferAttribute(F,te),j[k+J+8]=o.x,j[k+J+9]=o.y,j[k+J+10]=o.z,j[k+J+11]=F.itemSize===4?o.w:1)}}p={count:g,texture:U,size:new fe(I,W)},s.set(u,p),u.addEventListener("dispose",V)}let _=0;for(let x=0;x<d.length;x++)_+=d[x];const y=u.morphTargetsRelative?1:1-_;h.getUniforms().setValue(i,"morphTargetBaseInfluence",y),h.getUniforms().setValue(i,"morphTargetInfluences",d),h.getUniforms().setValue(i,"morphTargetsTexture",p.texture,t),h.getUniforms().setValue(i,"morphTargetsTextureSize",p.size)}else{const m=d===void 0?0:d.length;let g=n[u.id];if(g===void 0||g.length!==m){g=[];for(let v=0;v<m;v++)g[v]=[v,0];n[u.id]=g}for(let v=0;v<m;v++){const w=g[v];w[0]=v,w[1]=d[v]}g.sort(V_);for(let v=0;v<8;v++)v<m&&g[v][1]?(a[v][0]=g[v][0],a[v][1]=g[v][1]):(a[v][0]=Number.MAX_SAFE_INTEGER,a[v][1]=0);a.sort(H_);const p=u.morphAttributes.position,_=u.morphAttributes.normal;let y=0;for(let v=0;v<8;v++){const w=a[v],A=w[0],R=w[1];A!==Number.MAX_SAFE_INTEGER&&R?(p&&u.getAttribute("morphTarget"+v)!==p[A]&&u.setAttribute("morphTarget"+v,p[A]),_&&u.getAttribute("morphNormal"+v)!==_[A]&&u.setAttribute("morphNormal"+v,_[A]),r[v]=R,y+=R):(p&&u.hasAttribute("morphTarget"+v)===!0&&u.deleteAttribute("morphTarget"+v),_&&u.hasAttribute("morphNormal"+v)===!0&&u.deleteAttribute("morphNormal"+v),r[v]=0)}const x=u.morphTargetsRelative?1:1-y;h.getUniforms().setValue(i,"morphTargetBaseInfluence",x),h.getUniforms().setValue(i,"morphTargetInfluences",r)}}return{update:c}}function W_(i,e,t,n){let r=new WeakMap;function s(c){const l=n.render.frame,u=c.geometry,f=e.get(c,u);return r.get(f)!==l&&(e.update(f),r.set(f,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),t.update(c.instanceMatrix,34962),c.instanceColor!==null&&t.update(c.instanceColor,34962)),f}function o(){r=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:s,dispose:o}}const gf=new Nt,_f=new uf,vf=new Lm,xf=new pf,ru=[],su=[],ou=new Float32Array(16),au=new Float32Array(9),lu=new Float32Array(4);function kr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=ru[r];if(s===void 0&&(s=new Float32Array(r),ru[r]=s),e!==0){n.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(s,a)}return s}function gt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function _t(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Vo(i,e){let t=su[e];t===void 0&&(t=new Int32Array(e),su[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function j_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function X_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2fv(this.addr,e),_t(t,e)}}function q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gt(t,e))return;i.uniform3fv(this.addr,e),_t(t,e)}}function Y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4fv(this.addr,e),_t(t,e)}}function $_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;lu.set(n),i.uniformMatrix2fv(this.addr,!1,lu),_t(t,n)}}function Z_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;au.set(n),i.uniformMatrix3fv(this.addr,!1,au),_t(t,n)}}function K_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(gt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),_t(t,e)}else{if(gt(t,n))return;ou.set(n),i.uniformMatrix4fv(this.addr,!1,ou),_t(t,n)}}function Q_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function J_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2iv(this.addr,e),_t(t,e)}}function ev(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3iv(this.addr,e),_t(t,e)}}function tv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4iv(this.addr,e),_t(t,e)}}function nv(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function iv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gt(t,e))return;i.uniform2uiv(this.addr,e),_t(t,e)}}function rv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gt(t,e))return;i.uniform3uiv(this.addr,e),_t(t,e)}}function sv(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gt(t,e))return;i.uniform4uiv(this.addr,e),_t(t,e)}}function ov(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2D(e||gf,r)}function av(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||vf,r)}function lv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||xf,r)}function cv(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||_f,r)}function uv(i){switch(i){case 5126:return j_;case 35664:return X_;case 35665:return q_;case 35666:return Y_;case 35674:return $_;case 35675:return Z_;case 35676:return K_;case 5124:case 35670:return Q_;case 35667:case 35671:return J_;case 35668:case 35672:return ev;case 35669:case 35673:return tv;case 5125:return nv;case 36294:return iv;case 36295:return rv;case 36296:return sv;case 35678:case 36198:case 36298:case 36306:case 35682:return ov;case 35679:case 36299:case 36307:return av;case 35680:case 36300:case 36308:case 36293:return lv;case 36289:case 36303:case 36311:case 36292:return cv}}function hv(i,e){i.uniform1fv(this.addr,e)}function fv(i,e){const t=kr(e,this.size,2);i.uniform2fv(this.addr,t)}function dv(i,e){const t=kr(e,this.size,3);i.uniform3fv(this.addr,t)}function pv(i,e){const t=kr(e,this.size,4);i.uniform4fv(this.addr,t)}function mv(i,e){const t=kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function gv(i,e){const t=kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function _v(i,e){const t=kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function vv(i,e){i.uniform1iv(this.addr,e)}function xv(i,e){i.uniform2iv(this.addr,e)}function yv(i,e){i.uniform3iv(this.addr,e)}function bv(i,e){i.uniform4iv(this.addr,e)}function wv(i,e){i.uniform1uiv(this.addr,e)}function Mv(i,e){i.uniform2uiv(this.addr,e)}function Sv(i,e){i.uniform3uiv(this.addr,e)}function Tv(i,e){i.uniform4uiv(this.addr,e)}function Ev(i,e,t){const n=this.cache,r=e.length,s=Vo(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||gf,s[o])}function Av(i,e,t){const n=this.cache,r=e.length,s=Vo(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||vf,s[o])}function Cv(i,e,t){const n=this.cache,r=e.length,s=Vo(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||xf,s[o])}function Dv(i,e,t){const n=this.cache,r=e.length,s=Vo(t,r);gt(n,s)||(i.uniform1iv(this.addr,s),_t(n,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||_f,s[o])}function Pv(i){switch(i){case 5126:return hv;case 35664:return fv;case 35665:return dv;case 35666:return pv;case 35674:return mv;case 35675:return gv;case 35676:return _v;case 5124:case 35670:return vv;case 35667:case 35671:return xv;case 35668:case 35672:return yv;case 35669:case 35673:return bv;case 5125:return wv;case 36294:return Mv;case 36295:return Sv;case 36296:return Tv;case 35678:case 36198:case 36298:case 36306:case 35682:return Ev;case 35679:case 36299:case 36307:return Av;case 35680:case 36300:case 36308:case 36293:return Cv;case 36289:case 36303:case 36311:case 36292:return Dv}}class Lv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.setValue=uv(t.type)}}class Rv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.size=t.size,this.setValue=Pv(t.type)}}class Iv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],n)}}}const Pa=/(\w+)(\])?(\[|\.)?/g;function cu(i,e){i.seq.push(e),i.map[e.id]=e}function Fv(i,e,t){const n=i.name,r=n.length;for(Pa.lastIndex=0;;){const s=Pa.exec(n),o=Pa.lastIndex;let a=s[1];const c=s[2]==="]",l=s[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===r){cu(t,l===void 0?new Lv(a,i,e):new Rv(a,i,e));break}else{let f=t.map[a];f===void 0&&(f=new Iv(a),cu(t,f)),t=f}}}class mo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,35718);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);Fv(s,o,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&n.push(o)}return n}}function uu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}let Nv=0;function Ov(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function kv(i){switch(i){case ki:return["Linear","( value )"];case We:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported encoding:",i),["Linear","( value )"]}}function hu(i,e,t){const n=i.getShaderParameter(e,35713),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+Ov(i.getShaderSource(e),o)}else return r}function Bv(i,e){const t=kv(e);return"vec4 "+i+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function Uv(i,e){let t;switch(e){case Wp:t="Linear";break;case jp:t="Reinhard";break;case Xp:t="OptimizedCineon";break;case qp:t="ACESFilmic";break;case Yp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function zv(i){return[i.extensionDerivatives||!!i.envMapCubeUVHeight||i.bumpMap||i.tangentSpaceNormalMap||i.clearcoatNormalMap||i.flatShading||i.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(i.extensionFragDepth||i.logarithmicDepthBuffer)&&i.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",i.extensionDrawBuffers&&i.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(i.extensionShaderTextureLOD||i.envMap||i.transmission)&&i.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ns).join(`
`)}function Hv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Vv(i,e){const t={},n=i.getProgramParameter(e,35721);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),o=s.name;let a=1;s.type===35674&&(a=2),s.type===35675&&(a=3),s.type===35676&&(a=4),t[o]={type:s.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ns(i){return i!==""}function fu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function du(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Gv=/^[ \t]*#include +<([\w\d./]+)>/gm;function ul(i){return i.replace(Gv,Wv)}function Wv(i,e){const t=De[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return ul(t)}const jv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function pu(i){return i.replace(jv,Xv)}function Xv(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function mu(i){let e="precision "+i.precision+` float;
precision `+i.precision+" int;";return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function qv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Kh?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===wp?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===ts&&(e="SHADOWMAP_TYPE_VSM"),e}function Yv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xr:case yr:e="ENVMAP_TYPE_CUBE";break;case zo:e="ENVMAP_TYPE_CUBE_UV";break}return e}function $v(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yr:e="ENVMAP_MODE_REFRACTION";break}return e}function Zv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case ef:e="ENVMAP_BLENDING_MULTIPLY";break;case Vp:e="ENVMAP_BLENDING_MIX";break;case Gp:e="ENVMAP_BLENDING_ADD";break}return e}function Kv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function Qv(i,e,t,n){const r=i.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=qv(t),l=Yv(t),u=$v(t),f=Zv(t),h=Kv(t),d=t.isWebGL2?"":zv(t),m=Hv(s),g=r.createProgram();let p,_,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=[m].filter(ns).join(`
`),p.length>0&&(p+=`
`),_=[d,m].filter(ns).join(`
`),_.length>0&&(_+=`
`)):(p=[mu(t),"#define SHADER_NAME "+t.shaderName,m,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.supportsVertexTextures?"#define VERTEX_TEXTURES":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.displacementMap&&t.supportsVertexTextures?"#define USE_DISPLACEMENTMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ns).join(`
`),_=[d,mu(t),"#define SHADER_NAME "+t.shaderName,m,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+f:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMap&&t.objectSpaceNormalMap?"#define OBJECTSPACE_NORMALMAP":"",t.normalMap&&t.tangentSpaceNormalMap?"#define TANGENTSPACE_NORMALMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularIntensityMap?"#define USE_SPECULARINTENSITYMAP":"",t.specularColorMap?"#define USE_SPECULARCOLORMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEENCOLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEENROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUvs?"#define USE_UV":"",t.uvsVertexOnly?"#define UVS_VERTEX_ONLY":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.physicallyCorrectLights?"#define PHYSICALLY_CORRECT_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Vn?"#define TONE_MAPPING":"",t.toneMapping!==Vn?De.tonemapping_pars_fragment:"",t.toneMapping!==Vn?Uv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",De.encodings_pars_fragment,Bv("linearToOutputTexel",t.outputEncoding),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ns).join(`
`)),o=ul(o),o=fu(o,t),o=du(o,t),a=ul(a),a=fu(a,t),a=du(a,t),o=pu(o),a=pu(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,p=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,_=["#define varying in",t.glslVersion===Uc?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Uc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+_);const x=y+p+o,v=y+_+a,w=uu(r,35633,x),A=uu(r,35632,v);if(r.attachShader(g,w),r.attachShader(g,A),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),i.debug.checkShaderErrors){const T=r.getProgramInfoLog(g).trim(),I=r.getShaderInfoLog(w).trim(),W=r.getShaderInfoLog(A).trim();let j=!0,U=!0;if(r.getProgramParameter(g,35714)===!1){j=!1;const O=hu(r,w,"vertex"),V=hu(r,A,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,35715)+`

Program Info Log: `+T+`
`+O+`
`+V)}else T!==""?console.warn("THREE.WebGLProgram: Program Info Log:",T):(I===""||W==="")&&(U=!1);U&&(this.diagnostics={runnable:j,programLog:T,vertexShader:{log:I,prefix:p},fragmentShader:{log:W,prefix:_}})}r.deleteShader(w),r.deleteShader(A);let R;this.getUniforms=function(){return R===void 0&&(R=new mo(r,g)),R};let b;return this.getAttributes=function(){return b===void 0&&(b=Vv(r,g)),b},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.name=t.shaderName,this.id=Nv++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=w,this.fragmentShader=A,this}let Jv=0;class ex{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new tx(e),t.set(e,n)),n}}class tx{constructor(e){this.id=Jv++,this.code=e,this.usedTimes=0}}function nx(i,e,t,n,r,s,o){const a=new kl,c=new ex,l=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,h=r.vertexTextures;let d=r.precision;const m={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(b,T,I,W,j){const U=W.fog,O=j.geometry,V=b.isMeshStandardMaterial?W.environment:null,$=(b.isMeshStandardMaterial?t:e).get(b.envMap||V),ee=!!$&&$.mapping===zo?$.image.height:null,X=m[b.type];b.precision!==null&&(d=r.getMaxPrecision(b.precision),d!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",d,"instead."));const F=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,k=F!==void 0?F.length:0;let te=0;O.morphAttributes.position!==void 0&&(te=1),O.morphAttributes.normal!==void 0&&(te=2),O.morphAttributes.color!==void 0&&(te=3);let J,ie,ue,G;if(X){const Be=yn[X];J=Be.vertexShader,ie=Be.fragmentShader}else J=b.vertexShader,ie=b.fragmentShader,c.update(b),ue=c.getVertexShaderID(b),G=c.getFragmentShaderID(b);const Z=i.getRenderTarget(),Ae=b.alphaTest>0,ve=b.clearcoat>0,ye=b.iridescence>0;return{isWebGL2:u,shaderID:X,shaderName:b.type,vertexShader:J,fragmentShader:ie,defines:b.defines,customVertexShaderID:ue,customFragmentShaderID:G,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:d,instancing:j.isInstancedMesh===!0,instancingColor:j.isInstancedMesh===!0&&j.instanceColor!==null,supportsVertexTextures:h,outputEncoding:Z===null?i.outputEncoding:Z.isXRRenderTarget===!0?Z.texture.encoding:ki,map:!!b.map,matcap:!!b.matcap,envMap:!!$,envMapMode:$&&$.mapping,envMapCubeUVHeight:ee,lightMap:!!b.lightMap,aoMap:!!b.aoMap,emissiveMap:!!b.emissiveMap,bumpMap:!!b.bumpMap,normalMap:!!b.normalMap,objectSpaceNormalMap:b.normalMapType===pm,tangentSpaceNormalMap:b.normalMapType===Nl,decodeVideoTexture:!!b.map&&b.map.isVideoTexture===!0&&b.map.encoding===We,clearcoat:ve,clearcoatMap:ve&&!!b.clearcoatMap,clearcoatRoughnessMap:ve&&!!b.clearcoatRoughnessMap,clearcoatNormalMap:ve&&!!b.clearcoatNormalMap,iridescence:ye,iridescenceMap:ye&&!!b.iridescenceMap,iridescenceThicknessMap:ye&&!!b.iridescenceThicknessMap,displacementMap:!!b.displacementMap,roughnessMap:!!b.roughnessMap,metalnessMap:!!b.metalnessMap,specularMap:!!b.specularMap,specularIntensityMap:!!b.specularIntensityMap,specularColorMap:!!b.specularColorMap,opaque:b.transparent===!1&&b.blending===gr,alphaMap:!!b.alphaMap,alphaTest:Ae,gradientMap:!!b.gradientMap,sheen:b.sheen>0,sheenColorMap:!!b.sheenColorMap,sheenRoughnessMap:!!b.sheenRoughnessMap,transmission:b.transmission>0,transmissionMap:!!b.transmissionMap,thicknessMap:!!b.thicknessMap,combine:b.combine,vertexTangents:!!b.normalMap&&!!O.attributes.tangent,vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,vertexUvs:!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatMap||!!b.clearcoatRoughnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||!!b.displacementMap||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||!!b.sheenColorMap||!!b.sheenRoughnessMap,uvsVertexOnly:!(!!b.map||!!b.bumpMap||!!b.normalMap||!!b.specularMap||!!b.alphaMap||!!b.emissiveMap||!!b.roughnessMap||!!b.metalnessMap||!!b.clearcoatNormalMap||!!b.iridescenceMap||!!b.iridescenceThicknessMap||b.transmission>0||!!b.transmissionMap||!!b.thicknessMap||!!b.specularIntensityMap||!!b.specularColorMap||b.sheen>0||!!b.sheenColorMap||!!b.sheenRoughnessMap)&&!!b.displacementMap,fog:!!U,useFog:b.fog===!0,fogExp2:U&&U.isFogExp2,flatShading:!!b.flatShading,sizeAttenuation:b.sizeAttenuation,logarithmicDepthBuffer:f,skinning:j.isSkinnedMesh===!0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:k,morphTextureStride:te,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&I.length>0,shadowMapType:i.shadowMap.type,toneMapping:b.toneMapped?i.toneMapping:Vn,physicallyCorrectLights:i.physicallyCorrectLights,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===bn,flipSided:b.side===qt,useDepthPacking:!!b.depthPacking,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionDerivatives:b.extensions&&b.extensions.derivatives,extensionFragDepth:b.extensions&&b.extensions.fragDepth,extensionDrawBuffers:b.extensions&&b.extensions.drawBuffers,extensionShaderTextureLOD:b.extensions&&b.extensions.shaderTextureLOD,rendererExtensionFragDepth:u||n.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||n.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||n.has("EXT_shader_texture_lod"),customProgramCacheKey:b.customProgramCacheKey()}}function p(b){const T=[];if(b.shaderID?T.push(b.shaderID):(T.push(b.customVertexShaderID),T.push(b.customFragmentShaderID)),b.defines!==void 0)for(const I in b.defines)T.push(I),T.push(b.defines[I]);return b.isRawShaderMaterial===!1&&(_(T,b),y(T,b),T.push(i.outputEncoding)),T.push(b.customProgramCacheKey),T.join()}function _(b,T){b.push(T.precision),b.push(T.outputEncoding),b.push(T.envMapMode),b.push(T.envMapCubeUVHeight),b.push(T.combine),b.push(T.vertexUvs),b.push(T.fogExp2),b.push(T.sizeAttenuation),b.push(T.morphTargetsCount),b.push(T.morphAttributeCount),b.push(T.numDirLights),b.push(T.numPointLights),b.push(T.numSpotLights),b.push(T.numSpotLightMaps),b.push(T.numHemiLights),b.push(T.numRectAreaLights),b.push(T.numDirLightShadows),b.push(T.numPointLightShadows),b.push(T.numSpotLightShadows),b.push(T.numSpotLightShadowsWithMaps),b.push(T.shadowMapType),b.push(T.toneMapping),b.push(T.numClippingPlanes),b.push(T.numClipIntersection),b.push(T.depthPacking)}function y(b,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.map&&a.enable(4),T.matcap&&a.enable(5),T.envMap&&a.enable(6),T.lightMap&&a.enable(7),T.aoMap&&a.enable(8),T.emissiveMap&&a.enable(9),T.bumpMap&&a.enable(10),T.normalMap&&a.enable(11),T.objectSpaceNormalMap&&a.enable(12),T.tangentSpaceNormalMap&&a.enable(13),T.clearcoat&&a.enable(14),T.clearcoatMap&&a.enable(15),T.clearcoatRoughnessMap&&a.enable(16),T.clearcoatNormalMap&&a.enable(17),T.iridescence&&a.enable(18),T.iridescenceMap&&a.enable(19),T.iridescenceThicknessMap&&a.enable(20),T.displacementMap&&a.enable(21),T.specularMap&&a.enable(22),T.roughnessMap&&a.enable(23),T.metalnessMap&&a.enable(24),T.gradientMap&&a.enable(25),T.alphaMap&&a.enable(26),T.alphaTest&&a.enable(27),T.vertexColors&&a.enable(28),T.vertexAlphas&&a.enable(29),T.vertexUvs&&a.enable(30),T.vertexTangents&&a.enable(31),T.uvsVertexOnly&&a.enable(32),b.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.physicallyCorrectLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.specularIntensityMap&&a.enable(15),T.specularColorMap&&a.enable(16),T.transmission&&a.enable(17),T.transmissionMap&&a.enable(18),T.thicknessMap&&a.enable(19),T.sheen&&a.enable(20),T.sheenColorMap&&a.enable(21),T.sheenRoughnessMap&&a.enable(22),T.decodeVideoTexture&&a.enable(23),T.opaque&&a.enable(24),b.push(a.mask)}function x(b){const T=m[b.type];let I;if(T){const W=yn[T];I=To.clone(W.uniforms)}else I=b.uniforms;return I}function v(b,T){let I;for(let W=0,j=l.length;W<j;W++){const U=l[W];if(U.cacheKey===T){I=U,++I.usedTimes;break}}return I===void 0&&(I=new Qv(i,T,b,s),l.push(I)),I}function w(b){if(--b.usedTimes===0){const T=l.indexOf(b);l[T]=l[l.length-1],l.pop(),b.destroy()}}function A(b){c.remove(b)}function R(){c.dispose()}return{getParameters:g,getProgramCacheKey:p,getUniforms:x,acquireProgram:v,releaseProgram:w,releaseShaderCache:A,programs:l,dispose:R}}function ix(){let i=new WeakMap;function e(s){let o=i.get(s);return o===void 0&&(o={},i.set(s,o)),o}function t(s){i.delete(s)}function n(s,o,a){i.get(s)[o]=a}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function rx(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function gu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function _u(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function o(f,h,d,m,g,p){let _=i[e];return _===void 0?(_={id:f.id,object:f,geometry:h,material:d,groupOrder:m,renderOrder:f.renderOrder,z:g,group:p},i[e]=_):(_.id=f.id,_.object=f,_.geometry=h,_.material=d,_.groupOrder=m,_.renderOrder=f.renderOrder,_.z=g,_.group=p),e++,_}function a(f,h,d,m,g,p){const _=o(f,h,d,m,g,p);d.transmission>0?n.push(_):d.transparent===!0?r.push(_):t.push(_)}function c(f,h,d,m,g,p){const _=o(f,h,d,m,g,p);d.transmission>0?n.unshift(_):d.transparent===!0?r.unshift(_):t.unshift(_)}function l(f,h){t.length>1&&t.sort(f||rx),n.length>1&&n.sort(h||gu),r.length>1&&r.sort(h||gu)}function u(){for(let f=e,h=i.length;f<h;f++){const d=i[f];if(d.id===null)break;d.id=null,d.object=null,d.geometry=null,d.material=null,d.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:a,unshift:c,finish:u,sort:l}}function sx(){let i=new WeakMap;function e(n,r){const s=i.get(n);let o;return s===void 0?(o=new _u,i.set(n,[o])):r>=s.length?(o=new _u,s.push(o)):o=s[r],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function ox(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new D,color:new Se};break;case"SpotLight":t={position:new D,direction:new D,color:new Se,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new D,color:new Se,distance:0,decay:0};break;case"HemisphereLight":t={direction:new D,skyColor:new Se,groundColor:new Se};break;case"RectAreaLight":t={color:new Se,position:new D,halfWidth:new D,halfHeight:new D};break}return i[e.id]=t,t}}}function ax(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new fe,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let lx=0;function cx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function ux(i,e){const t=new ox,n=ax(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new D);const s=new D,o=new Fe,a=new Fe;function c(u,f){let h=0,d=0,m=0;for(let W=0;W<9;W++)r.probe[W].set(0,0,0);let g=0,p=0,_=0,y=0,x=0,v=0,w=0,A=0,R=0,b=0;u.sort(cx);const T=f!==!0?Math.PI:1;for(let W=0,j=u.length;W<j;W++){const U=u[W],O=U.color,V=U.intensity,$=U.distance,ee=U.shadow&&U.shadow.map?U.shadow.map.texture:null;if(U.isAmbientLight)h+=O.r*V*T,d+=O.g*V*T,m+=O.b*V*T;else if(U.isLightProbe)for(let X=0;X<9;X++)r.probe[X].addScaledVector(U.sh.coefficients[X],V);else if(U.isDirectionalLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*T),U.castShadow){const F=U.shadow,k=n.get(U);k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,r.directionalShadow[g]=k,r.directionalShadowMap[g]=ee,r.directionalShadowMatrix[g]=U.shadow.matrix,v++}r.directional[g]=X,g++}else if(U.isSpotLight){const X=t.get(U);X.position.setFromMatrixPosition(U.matrixWorld),X.color.copy(O).multiplyScalar(V*T),X.distance=$,X.coneCos=Math.cos(U.angle),X.penumbraCos=Math.cos(U.angle*(1-U.penumbra)),X.decay=U.decay,r.spot[_]=X;const F=U.shadow;if(U.map&&(r.spotLightMap[R]=U.map,R++,F.updateMatrices(U),U.castShadow&&b++),r.spotLightMatrix[_]=F.matrix,U.castShadow){const k=n.get(U);k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,r.spotShadow[_]=k,r.spotShadowMap[_]=ee,A++}_++}else if(U.isRectAreaLight){const X=t.get(U);X.color.copy(O).multiplyScalar(V),X.halfWidth.set(U.width*.5,0,0),X.halfHeight.set(0,U.height*.5,0),r.rectArea[y]=X,y++}else if(U.isPointLight){const X=t.get(U);if(X.color.copy(U.color).multiplyScalar(U.intensity*T),X.distance=U.distance,X.decay=U.decay,U.castShadow){const F=U.shadow,k=n.get(U);k.shadowBias=F.bias,k.shadowNormalBias=F.normalBias,k.shadowRadius=F.radius,k.shadowMapSize=F.mapSize,k.shadowCameraNear=F.camera.near,k.shadowCameraFar=F.camera.far,r.pointShadow[p]=k,r.pointShadowMap[p]=ee,r.pointShadowMatrix[p]=U.shadow.matrix,w++}r.point[p]=X,p++}else if(U.isHemisphereLight){const X=t.get(U);X.skyColor.copy(U.color).multiplyScalar(V*T),X.groundColor.copy(U.groundColor).multiplyScalar(V*T),r.hemi[x]=X,x++}}y>0&&(e.isWebGL2||i.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_FLOAT_1,r.rectAreaLTC2=oe.LTC_FLOAT_2):i.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=oe.LTC_HALF_1,r.rectAreaLTC2=oe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=m;const I=r.hash;(I.directionalLength!==g||I.pointLength!==p||I.spotLength!==_||I.rectAreaLength!==y||I.hemiLength!==x||I.numDirectionalShadows!==v||I.numPointShadows!==w||I.numSpotShadows!==A||I.numSpotMaps!==R)&&(r.directional.length=g,r.spot.length=_,r.rectArea.length=y,r.point.length=p,r.hemi.length=x,r.directionalShadow.length=v,r.directionalShadowMap.length=v,r.pointShadow.length=w,r.pointShadowMap.length=w,r.spotShadow.length=A,r.spotShadowMap.length=A,r.directionalShadowMatrix.length=v,r.pointShadowMatrix.length=w,r.spotLightMatrix.length=A+R-b,r.spotLightMap.length=R,r.numSpotLightShadowsWithMaps=b,I.directionalLength=g,I.pointLength=p,I.spotLength=_,I.rectAreaLength=y,I.hemiLength=x,I.numDirectionalShadows=v,I.numPointShadows=w,I.numSpotShadows=A,I.numSpotMaps=R,r.version=lx++)}function l(u,f){let h=0,d=0,m=0,g=0,p=0;const _=f.matrixWorldInverse;for(let y=0,x=u.length;y<x;y++){const v=u[y];if(v.isDirectionalLight){const w=r.directional[h];w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),h++}else if(v.isSpotLight){const w=r.spot[m];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(_),w.direction.setFromMatrixPosition(v.matrixWorld),s.setFromMatrixPosition(v.target.matrixWorld),w.direction.sub(s),w.direction.transformDirection(_),m++}else if(v.isRectAreaLight){const w=r.rectArea[g];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(_),a.identity(),o.copy(v.matrixWorld),o.premultiply(_),a.extractRotation(o),w.halfWidth.set(v.width*.5,0,0),w.halfHeight.set(0,v.height*.5,0),w.halfWidth.applyMatrix4(a),w.halfHeight.applyMatrix4(a),g++}else if(v.isPointLight){const w=r.point[d];w.position.setFromMatrixPosition(v.matrixWorld),w.position.applyMatrix4(_),d++}else if(v.isHemisphereLight){const w=r.hemi[p];w.direction.setFromMatrixPosition(v.matrixWorld),w.direction.transformDirection(_),p++}}}return{setup:c,setupView:l,state:r}}function vu(i,e){const t=new ux(i,e),n=[],r=[];function s(){n.length=0,r.length=0}function o(f){n.push(f)}function a(f){r.push(f)}function c(f){t.setup(n,f)}function l(f){t.setupView(n,f)}return{init:s,state:{lightsArray:n,shadowsArray:r,lights:t},setupLights:c,setupLightsView:l,pushLight:o,pushShadow:a}}function hx(i,e){let t=new WeakMap;function n(s,o=0){const a=t.get(s);let c;return a===void 0?(c=new vu(i,e),t.set(s,[c])):o>=a.length?(c=new vu(i,e),a.push(c)):c=a[o],c}function r(){t=new WeakMap}return{get:n,dispose:r}}class fx extends Mn{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=fm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class dx extends Mn{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.referencePosition=new D,this.nearDistance=1,this.farDistance=1e3,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.referencePosition.copy(e.referencePosition),this.nearDistance=e.nearDistance,this.farDistance=e.farDistance,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const px=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mx=`uniform sampler2D shadow_pass;
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
}`;function gx(i,e,t){let n=new Bl;const r=new fe,s=new fe,o=new Xe,a=new fx({depthPacking:dm}),c=new dx,l={},u=t.maxTextureSize,f={0:qt,1:Ni,2:bn},h=new mt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new fe},radius:{value:4}},vertexShader:px,fragmentShader:mx}),d=h.clone();d.defines.HORIZONTAL_PASS=1;const m=new ht;m.setAttribute("position",new Ft(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new se(m,h),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Kh,this.render=function(v,w,A){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||v.length===0)return;const R=i.getRenderTarget(),b=i.getActiveCubeFace(),T=i.getActiveMipmapLevel(),I=i.state;I.setBlending(ai),I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);for(let W=0,j=v.length;W<j;W++){const U=v[W],O=U.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",U,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const V=O.getFrameExtents();if(r.multiply(V),s.copy(O.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/V.x),r.x=s.x*V.x,O.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/V.y),r.y=s.y*V.y,O.mapSize.y=s.y)),O.map===null){const ee=this.type!==ts?{minFilter:St,magFilter:St}:{};O.map=new pn(r.x,r.y,ee),O.map.texture.name=U.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const $=O.getViewportCount();for(let ee=0;ee<$;ee++){const X=O.getViewport(ee);o.set(s.x*X.x,s.y*X.y,s.x*X.z,s.y*X.w),I.viewport(o),O.updateMatrices(U,ee),n=O.getFrustum(),x(w,A,O.camera,U,this.type)}O.isPointLightShadow!==!0&&this.type===ts&&_(O,A),O.needsUpdate=!1}p.needsUpdate=!1,i.setRenderTarget(R,b,T)};function _(v,w){const A=e.update(g);h.defines.VSM_SAMPLES!==v.blurSamples&&(h.defines.VSM_SAMPLES=v.blurSamples,d.defines.VSM_SAMPLES=v.blurSamples,h.needsUpdate=!0,d.needsUpdate=!0),v.mapPass===null&&(v.mapPass=new pn(r.x,r.y)),h.uniforms.shadow_pass.value=v.map.texture,h.uniforms.resolution.value=v.mapSize,h.uniforms.radius.value=v.radius,i.setRenderTarget(v.mapPass),i.clear(),i.renderBufferDirect(w,null,A,h,g,null),d.uniforms.shadow_pass.value=v.mapPass.texture,d.uniforms.resolution.value=v.mapSize,d.uniforms.radius.value=v.radius,i.setRenderTarget(v.map),i.clear(),i.renderBufferDirect(w,null,A,d,g,null)}function y(v,w,A,R,b,T){let I=null;const W=A.isPointLight===!0?v.customDistanceMaterial:v.customDepthMaterial;if(W!==void 0?I=W:I=A.isPointLight===!0?c:a,i.localClippingEnabled&&w.clipShadows===!0&&Array.isArray(w.clippingPlanes)&&w.clippingPlanes.length!==0||w.displacementMap&&w.displacementScale!==0||w.alphaMap&&w.alphaTest>0){const j=I.uuid,U=w.uuid;let O=l[j];O===void 0&&(O={},l[j]=O);let V=O[U];V===void 0&&(V=I.clone(),O[U]=V),I=V}return I.visible=w.visible,I.wireframe=w.wireframe,T===ts?I.side=w.shadowSide!==null?w.shadowSide:w.side:I.side=w.shadowSide!==null?w.shadowSide:f[w.side],I.alphaMap=w.alphaMap,I.alphaTest=w.alphaTest,I.clipShadows=w.clipShadows,I.clippingPlanes=w.clippingPlanes,I.clipIntersection=w.clipIntersection,I.displacementMap=w.displacementMap,I.displacementScale=w.displacementScale,I.displacementBias=w.displacementBias,I.wireframeLinewidth=w.wireframeLinewidth,I.linewidth=w.linewidth,A.isPointLight===!0&&I.isMeshDistanceMaterial===!0&&(I.referencePosition.setFromMatrixPosition(A.matrixWorld),I.nearDistance=R,I.farDistance=b),I}function x(v,w,A,R,b){if(v.visible===!1)return;if(v.layers.test(w.layers)&&(v.isMesh||v.isLine||v.isPoints)&&(v.castShadow||v.receiveShadow&&b===ts)&&(!v.frustumCulled||n.intersectsObject(v))){v.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,v.matrixWorld);const W=e.update(v),j=v.material;if(Array.isArray(j)){const U=W.groups;for(let O=0,V=U.length;O<V;O++){const $=U[O],ee=j[$.materialIndex];if(ee&&ee.visible){const X=y(v,ee,R,A.near,A.far,b);i.renderBufferDirect(A,null,W,X,v,$)}}}else if(j.visible){const U=y(v,j,R,A.near,A.far,b);i.renderBufferDirect(A,null,W,U,v,null)}}const I=v.children;for(let W=0,j=I.length;W<j;W++)x(I[W],w,A,R,b)}}function _x(i,e,t){const n=t.isWebGL2;function r(){let N=!1;const q=new Xe;let ne=null;const pe=new Xe(0,0,0,0);return{setMask:function(we){ne!==we&&!N&&(i.colorMask(we,we,we,we),ne=we)},setLocked:function(we){N=we},setClear:function(we,He,yt,Tt,hi){hi===!0&&(we*=Tt,He*=Tt,yt*=Tt),q.set(we,He,yt,Tt),pe.equals(q)===!1&&(i.clearColor(we,He,yt,Tt),pe.copy(q))},reset:function(){N=!1,ne=null,pe.set(-1,0,0,0)}}}function s(){let N=!1,q=null,ne=null,pe=null;return{setTest:function(we){we?Ae(2929):ve(2929)},setMask:function(we){q!==we&&!N&&(i.depthMask(we),q=we)},setFunc:function(we){if(ne!==we){switch(we){case Np:i.depthFunc(512);break;case Op:i.depthFunc(519);break;case kp:i.depthFunc(513);break;case nl:i.depthFunc(515);break;case Bp:i.depthFunc(514);break;case Up:i.depthFunc(518);break;case zp:i.depthFunc(516);break;case Hp:i.depthFunc(517);break;default:i.depthFunc(515)}ne=we}},setLocked:function(we){N=we},setClear:function(we){pe!==we&&(i.clearDepth(we),pe=we)},reset:function(){N=!1,q=null,ne=null,pe=null}}}function o(){let N=!1,q=null,ne=null,pe=null,we=null,He=null,yt=null,Tt=null,hi=null;return{setTest:function(rt){N||(rt?Ae(2960):ve(2960))},setMask:function(rt){q!==rt&&!N&&(i.stencilMask(rt),q=rt)},setFunc:function(rt,Dn,$t){(ne!==rt||pe!==Dn||we!==$t)&&(i.stencilFunc(rt,Dn,$t),ne=rt,pe=Dn,we=$t)},setOp:function(rt,Dn,$t){(He!==rt||yt!==Dn||Tt!==$t)&&(i.stencilOp(rt,Dn,$t),He=rt,yt=Dn,Tt=$t)},setLocked:function(rt){N=rt},setClear:function(rt){hi!==rt&&(i.clearStencil(rt),hi=rt)},reset:function(){N=!1,q=null,ne=null,pe=null,we=null,He=null,yt=null,Tt=null,hi=null}}}const a=new r,c=new s,l=new o,u=new WeakMap,f=new WeakMap;let h={},d={},m=new WeakMap,g=[],p=null,_=!1,y=null,x=null,v=null,w=null,A=null,R=null,b=null,T=!1,I=null,W=null,j=null,U=null,O=null;const V=i.getParameter(35661);let $=!1,ee=0;const X=i.getParameter(7938);X.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(X)[1]),$=ee>=1):X.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(X)[1]),$=ee>=2);let F=null,k={};const te=i.getParameter(3088),J=i.getParameter(2978),ie=new Xe().fromArray(te),ue=new Xe().fromArray(J);function G(N,q,ne){const pe=new Uint8Array(4),we=i.createTexture();i.bindTexture(N,we),i.texParameteri(N,10241,9728),i.texParameteri(N,10240,9728);for(let He=0;He<ne;He++)i.texImage2D(q+He,0,6408,1,1,0,6408,5121,pe);return we}const Z={};Z[3553]=G(3553,3553,1),Z[34067]=G(34067,34069,6),a.setClear(0,0,0,1),c.setClear(1),l.setClear(0),Ae(2929),c.setFunc(nl),et(!1),ft(uc),Ae(2884),Qe(ai);function Ae(N){h[N]!==!0&&(i.enable(N),h[N]=!0)}function ve(N){h[N]!==!1&&(i.disable(N),h[N]=!1)}function ye(N,q){return d[N]!==q?(i.bindFramebuffer(N,q),d[N]=q,n&&(N===36009&&(d[36160]=q),N===36160&&(d[36009]=q)),!0):!1}function le(N,q){let ne=g,pe=!1;if(N)if(ne=m.get(q),ne===void 0&&(ne=[],m.set(q,ne)),N.isWebGLMultipleRenderTargets){const we=N.texture;if(ne.length!==we.length||ne[0]!==36064){for(let He=0,yt=we.length;He<yt;He++)ne[He]=36064+He;ne.length=we.length,pe=!0}}else ne[0]!==36064&&(ne[0]=36064,pe=!0);else ne[0]!==1029&&(ne[0]=1029,pe=!0);pe&&(t.isWebGL2?i.drawBuffers(ne):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(ne))}function Be(N){return p!==N?(i.useProgram(N),p=N,!0):!1}const Te={[fr]:32774,[Sp]:32778,[Tp]:32779};if(n)Te[dc]=32775,Te[pc]=32776;else{const N=e.get("EXT_blend_minmax");N!==null&&(Te[dc]=N.MIN_EXT,Te[pc]=N.MAX_EXT)}const be={[Ep]:0,[Ap]:1,[Cp]:768,[Qh]:770,[Fp]:776,[Rp]:774,[Pp]:772,[Dp]:769,[Jh]:771,[Ip]:775,[Lp]:773};function Qe(N,q,ne,pe,we,He,yt,Tt){if(N===ai){_===!0&&(ve(3042),_=!1);return}if(_===!1&&(Ae(3042),_=!0),N!==Mp){if(N!==y||Tt!==T){if((x!==fr||A!==fr)&&(i.blendEquation(32774),x=fr,A=fr),Tt)switch(N){case gr:i.blendFuncSeparate(1,771,1,771);break;case bo:i.blendFunc(1,1);break;case hc:i.blendFuncSeparate(0,769,0,1);break;case fc:i.blendFuncSeparate(0,768,0,770);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case gr:i.blendFuncSeparate(770,771,1,771);break;case bo:i.blendFunc(770,1);break;case hc:i.blendFuncSeparate(0,769,0,1);break;case fc:i.blendFunc(0,768);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}v=null,w=null,R=null,b=null,y=N,T=Tt}return}we=we||q,He=He||ne,yt=yt||pe,(q!==x||we!==A)&&(i.blendEquationSeparate(Te[q],Te[we]),x=q,A=we),(ne!==v||pe!==w||He!==R||yt!==b)&&(i.blendFuncSeparate(be[ne],be[pe],be[He],be[yt]),v=ne,w=pe,R=He,b=yt),y=N,T=null}function it(N,q){N.side===bn?ve(2884):Ae(2884);let ne=N.side===qt;q&&(ne=!ne),et(ne),N.blending===gr&&N.transparent===!1?Qe(ai):Qe(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.premultipliedAlpha),c.setFunc(N.depthFunc),c.setTest(N.depthTest),c.setMask(N.depthWrite),a.setMask(N.colorWrite);const pe=N.stencilWrite;l.setTest(pe),pe&&(l.setMask(N.stencilWriteMask),l.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),l.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ke(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ae(32926):ve(32926)}function et(N){I!==N&&(N?i.frontFace(2304):i.frontFace(2305),I=N)}function ft(N){N!==yp?(Ae(2884),N!==W&&(N===uc?i.cullFace(1029):N===bp?i.cullFace(1028):i.cullFace(1032))):ve(2884),W=N}function tt(N){N!==j&&($&&i.lineWidth(N),j=N)}function ke(N,q,ne){N?(Ae(32823),(U!==q||O!==ne)&&(i.polygonOffset(q,ne),U=q,O=ne)):ve(32823)}function vt(N){N?Ae(3089):ve(3089)}function xt(N){N===void 0&&(N=33984+V-1),F!==N&&(i.activeTexture(N),F=N)}function C(N,q,ne){ne===void 0&&(F===null?ne=33984+V-1:ne=F);let pe=k[ne];pe===void 0&&(pe={type:void 0,texture:void 0},k[ne]=pe),(pe.type!==N||pe.texture!==q)&&(F!==ne&&(i.activeTexture(ne),F=ne),i.bindTexture(N,q||Z[N]),pe.type=N,pe.texture=q)}function M(){const N=k[F];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function S(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function P(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Q(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ae(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function L(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function B(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function de(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function he(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function _e(N){ie.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),ie.copy(N))}function ge(N){ue.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),ue.copy(N))}function Ne(N,q){let ne=f.get(q);ne===void 0&&(ne=new WeakMap,f.set(q,ne));let pe=ne.get(N);pe===void 0&&(pe=i.getUniformBlockIndex(q,N.name),ne.set(N,pe))}function Ce(N,q){const pe=f.get(q).get(N);u.get(N)!==pe&&(i.uniformBlockBinding(q,pe,N.__bindingPointIndex),u.set(N,pe))}function Ue(){i.disable(3042),i.disable(2884),i.disable(2929),i.disable(32823),i.disable(3089),i.disable(2960),i.disable(32926),i.blendEquation(32774),i.blendFunc(1,0),i.blendFuncSeparate(1,0,1,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(513),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(519,0,4294967295),i.stencilOp(7680,7680,7680),i.clearStencil(0),i.cullFace(1029),i.frontFace(2305),i.polygonOffset(0,0),i.activeTexture(33984),i.bindFramebuffer(36160,null),n===!0&&(i.bindFramebuffer(36009,null),i.bindFramebuffer(36008,null)),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),h={},F=null,k={},d={},m=new WeakMap,g=[],p=null,_=!1,y=null,x=null,v=null,w=null,A=null,R=null,b=null,T=!1,I=null,W=null,j=null,U=null,O=null,ie.set(0,0,i.canvas.width,i.canvas.height),ue.set(0,0,i.canvas.width,i.canvas.height),a.reset(),c.reset(),l.reset()}return{buffers:{color:a,depth:c,stencil:l},enable:Ae,disable:ve,bindFramebuffer:ye,drawBuffers:le,useProgram:Be,setBlending:Qe,setMaterial:it,setFlipSided:et,setCullFace:ft,setLineWidth:tt,setPolygonOffset:ke,setScissorTest:vt,activeTexture:xt,bindTexture:C,unbindTexture:M,compressedTexImage2D:S,compressedTexImage3D:P,texImage2D:de,texImage3D:he,updateUBOMapping:Ne,uniformBlockBinding:Ce,texStorage2D:B,texStorage3D:ce,texSubImage2D:Q,texSubImage3D:ae,compressedTexSubImage2D:me,compressedTexSubImage3D:L,scissor:_e,viewport:ge,reset:Ue}}function vx(i,e,t,n,r,s,o){const a=r.isWebGL2,c=r.maxTextures,l=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=/OculusBrowser/g.test(typeof navigator>"u"?"":navigator.userAgent),m=new WeakMap;let g;const p=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function y(C,M){return _?new OffscreenCanvas(C,M):gs("canvas")}function x(C,M,S,P){let Q=1;if((C.width>P||C.height>P)&&(Q=P/Math.max(C.width,C.height)),Q<1||M===!0)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap){const ae=M?So:Math.floor,me=ae(Q*C.width),L=ae(Q*C.height);g===void 0&&(g=y(me,L));const B=S?y(me,L):g;return B.width=me,B.height=L,B.getContext("2d").drawImage(C,0,0,me,L),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+C.width+"x"+C.height+") to ("+me+"x"+L+")."),B}else return"data"in C&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+C.width+"x"+C.height+")."),C;return C}function v(C){return cl(C.width)&&cl(C.height)}function w(C){return a?!1:C.wrapS!==Jt||C.wrapT!==Jt||C.minFilter!==St&&C.minFilter!==Bt}function A(C,M){return C.generateMipmaps&&M&&C.minFilter!==St&&C.minFilter!==Bt}function R(C){i.generateMipmap(C)}function b(C,M,S,P,Q=!1){if(a===!1)return M;if(C!==null){if(i[C]!==void 0)return i[C];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let ae=M;return M===6403&&(S===5126&&(ae=33326),S===5131&&(ae=33325),S===5121&&(ae=33321)),M===33319&&(S===5126&&(ae=33328),S===5131&&(ae=33327),S===5121&&(ae=33323)),M===6408&&(S===5126&&(ae=34836),S===5131&&(ae=34842),S===5121&&(ae=P===We&&Q===!1?35907:32856),S===32819&&(ae=32854),S===32820&&(ae=32855)),(ae===33325||ae===33326||ae===33327||ae===33328||ae===34842||ae===34836)&&e.get("EXT_color_buffer_float"),ae}function T(C,M,S){return A(C,S)===!0||C.isFramebufferTexture&&C.minFilter!==St&&C.minFilter!==Bt?Math.log2(Math.max(M.width,M.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?M.mipmaps.length:1}function I(C){return C===St||C===sl||C===ol?9728:9729}function W(C){const M=C.target;M.removeEventListener("dispose",W),U(M),M.isVideoTexture&&m.delete(M)}function j(C){const M=C.target;M.removeEventListener("dispose",j),V(M)}function U(C){const M=n.get(C);if(M.__webglInit===void 0)return;const S=C.source,P=p.get(S);if(P){const Q=P[M.__cacheKey];Q.usedTimes--,Q.usedTimes===0&&O(C),Object.keys(P).length===0&&p.delete(S)}n.remove(C)}function O(C){const M=n.get(C);i.deleteTexture(M.__webglTexture);const S=C.source,P=p.get(S);delete P[M.__cacheKey],o.memory.textures--}function V(C){const M=C.texture,S=n.get(C),P=n.get(M);if(P.__webglTexture!==void 0&&(i.deleteTexture(P.__webglTexture),o.memory.textures--),C.depthTexture&&C.depthTexture.dispose(),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++)i.deleteFramebuffer(S.__webglFramebuffer[Q]),S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[Q]);else{if(i.deleteFramebuffer(S.__webglFramebuffer),S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let Q=0;Q<S.__webglColorRenderbuffer.length;Q++)S.__webglColorRenderbuffer[Q]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[Q]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}if(C.isWebGLMultipleRenderTargets)for(let Q=0,ae=M.length;Q<ae;Q++){const me=n.get(M[Q]);me.__webglTexture&&(i.deleteTexture(me.__webglTexture),o.memory.textures--),n.remove(M[Q])}n.remove(M),n.remove(C)}let $=0;function ee(){$=0}function X(){const C=$;return C>=c&&console.warn("THREE.WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+c),$+=1,C}function F(C){const M=[];return M.push(C.wrapS),M.push(C.wrapT),M.push(C.wrapR||0),M.push(C.magFilter),M.push(C.minFilter),M.push(C.anisotropy),M.push(C.internalFormat),M.push(C.format),M.push(C.type),M.push(C.generateMipmaps),M.push(C.premultiplyAlpha),M.push(C.flipY),M.push(C.unpackAlignment),M.push(C.encoding),M.join()}function k(C,M){const S=n.get(C);if(C.isVideoTexture&&vt(C),C.isRenderTargetTexture===!1&&C.version>0&&S.__version!==C.version){const P=C.image;if(P===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(P.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ve(S,C,M);return}}t.bindTexture(3553,S.__webglTexture,33984+M)}function te(C,M){const S=n.get(C);if(C.version>0&&S.__version!==C.version){ve(S,C,M);return}t.bindTexture(35866,S.__webglTexture,33984+M)}function J(C,M){const S=n.get(C);if(C.version>0&&S.__version!==C.version){ve(S,C,M);return}t.bindTexture(32879,S.__webglTexture,33984+M)}function ie(C,M){const S=n.get(C);if(C.version>0&&S.__version!==C.version){ye(S,C,M);return}t.bindTexture(34067,S.__webglTexture,33984+M)}const ue={[br]:10497,[Jt]:33071,[wo]:33648},G={[St]:9728,[sl]:9984,[ol]:9986,[Bt]:9729,[nf]:9985,[Ir]:9987};function Z(C,M,S){if(S?(i.texParameteri(C,10242,ue[M.wrapS]),i.texParameteri(C,10243,ue[M.wrapT]),(C===32879||C===35866)&&i.texParameteri(C,32882,ue[M.wrapR]),i.texParameteri(C,10240,G[M.magFilter]),i.texParameteri(C,10241,G[M.minFilter])):(i.texParameteri(C,10242,33071),i.texParameteri(C,10243,33071),(C===32879||C===35866)&&i.texParameteri(C,32882,33071),(M.wrapS!==Jt||M.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),i.texParameteri(C,10240,I(M.magFilter)),i.texParameteri(C,10241,I(M.minFilter)),M.minFilter!==St&&M.minFilter!==Bt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");if(M.type===si&&e.has("OES_texture_float_linear")===!1||a===!1&&M.type===ds&&e.has("OES_texture_half_float_linear")===!1)return;(M.anisotropy>1||n.get(M).__currentAnisotropy)&&(i.texParameterf(C,P.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(M.anisotropy,r.getMaxAnisotropy())),n.get(M).__currentAnisotropy=M.anisotropy)}}function Ae(C,M){let S=!1;C.__webglInit===void 0&&(C.__webglInit=!0,M.addEventListener("dispose",W));const P=M.source;let Q=p.get(P);Q===void 0&&(Q={},p.set(P,Q));const ae=F(M);if(ae!==C.__cacheKey){Q[ae]===void 0&&(Q[ae]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,S=!0),Q[ae].usedTimes++;const me=Q[C.__cacheKey];me!==void 0&&(Q[C.__cacheKey].usedTimes--,me.usedTimes===0&&O(M)),C.__cacheKey=ae,C.__webglTexture=Q[ae].texture}return S}function ve(C,M,S){let P=3553;(M.isDataArrayTexture||M.isCompressedArrayTexture)&&(P=35866),M.isData3DTexture&&(P=32879);const Q=Ae(C,M),ae=M.source;t.bindTexture(P,C.__webglTexture,33984+S);const me=n.get(ae);if(ae.version!==me.__version||Q===!0){t.activeTexture(33984+S),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const L=w(M)&&v(M.image)===!1;let B=x(M.image,L,!1,u);B=xt(M,B);const ce=v(B)||a,de=s.convert(M.format,M.encoding);let he=s.convert(M.type),_e=b(M.internalFormat,de,he,M.encoding,M.isVideoTexture);Z(P,M,ce);let ge;const Ne=M.mipmaps,Ce=a&&M.isVideoTexture!==!0,Ue=me.__version===void 0||Q===!0,N=T(M,B,ce);if(M.isDepthTexture)_e=6402,a?M.type===si?_e=36012:M.type===Ai?_e=33190:M.type===_r?_e=35056:_e=33189:M.type===si&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),M.format===Di&&_e===6402&&M.type!==rf&&M.type!==Ai&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),M.type=Ai,he=s.convert(M.type)),M.format===wr&&_e===6402&&(_e=34041,M.type!==_r&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),M.type=_r,he=s.convert(M.type))),Ue&&(Ce?t.texStorage2D(3553,1,_e,B.width,B.height):t.texImage2D(3553,0,_e,B.width,B.height,0,de,he,null));else if(M.isDataTexture)if(Ne.length>0&&ce){Ce&&Ue&&t.texStorage2D(3553,N,_e,Ne[0].width,Ne[0].height);for(let q=0,ne=Ne.length;q<ne;q++)ge=Ne[q],Ce?t.texSubImage2D(3553,q,0,0,ge.width,ge.height,de,he,ge.data):t.texImage2D(3553,q,_e,ge.width,ge.height,0,de,he,ge.data);M.generateMipmaps=!1}else Ce?(Ue&&t.texStorage2D(3553,N,_e,B.width,B.height),t.texSubImage2D(3553,0,0,0,B.width,B.height,de,he,B.data)):t.texImage2D(3553,0,_e,B.width,B.height,0,de,he,B.data);else if(M.isCompressedTexture)if(M.isCompressedArrayTexture){Ce&&Ue&&t.texStorage3D(35866,N,_e,Ne[0].width,Ne[0].height,B.depth);for(let q=0,ne=Ne.length;q<ne;q++)ge=Ne[q],M.format!==en?de!==null?Ce?t.compressedTexSubImage3D(35866,q,0,0,0,ge.width,ge.height,B.depth,de,ge.data,0,0):t.compressedTexImage3D(35866,q,_e,ge.width,ge.height,B.depth,0,ge.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage3D(35866,q,0,0,0,ge.width,ge.height,B.depth,de,he,ge.data):t.texImage3D(35866,q,_e,ge.width,ge.height,B.depth,0,de,he,ge.data)}else{Ce&&Ue&&t.texStorage2D(3553,N,_e,Ne[0].width,Ne[0].height);for(let q=0,ne=Ne.length;q<ne;q++)ge=Ne[q],M.format!==en?de!==null?Ce?t.compressedTexSubImage2D(3553,q,0,0,ge.width,ge.height,de,ge.data):t.compressedTexImage2D(3553,q,_e,ge.width,ge.height,0,ge.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ce?t.texSubImage2D(3553,q,0,0,ge.width,ge.height,de,he,ge.data):t.texImage2D(3553,q,_e,ge.width,ge.height,0,de,he,ge.data)}else if(M.isDataArrayTexture)Ce?(Ue&&t.texStorage3D(35866,N,_e,B.width,B.height,B.depth),t.texSubImage3D(35866,0,0,0,0,B.width,B.height,B.depth,de,he,B.data)):t.texImage3D(35866,0,_e,B.width,B.height,B.depth,0,de,he,B.data);else if(M.isData3DTexture)Ce?(Ue&&t.texStorage3D(32879,N,_e,B.width,B.height,B.depth),t.texSubImage3D(32879,0,0,0,0,B.width,B.height,B.depth,de,he,B.data)):t.texImage3D(32879,0,_e,B.width,B.height,B.depth,0,de,he,B.data);else if(M.isFramebufferTexture){if(Ue)if(Ce)t.texStorage2D(3553,N,_e,B.width,B.height);else{let q=B.width,ne=B.height;for(let pe=0;pe<N;pe++)t.texImage2D(3553,pe,_e,q,ne,0,de,he,null),q>>=1,ne>>=1}}else if(Ne.length>0&&ce){Ce&&Ue&&t.texStorage2D(3553,N,_e,Ne[0].width,Ne[0].height);for(let q=0,ne=Ne.length;q<ne;q++)ge=Ne[q],Ce?t.texSubImage2D(3553,q,0,0,de,he,ge):t.texImage2D(3553,q,_e,de,he,ge);M.generateMipmaps=!1}else Ce?(Ue&&t.texStorage2D(3553,N,_e,B.width,B.height),t.texSubImage2D(3553,0,0,0,de,he,B)):t.texImage2D(3553,0,_e,de,he,B);A(M,ce)&&R(P),me.__version=ae.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function ye(C,M,S){if(M.image.length!==6)return;const P=Ae(C,M),Q=M.source;t.bindTexture(34067,C.__webglTexture,33984+S);const ae=n.get(Q);if(Q.version!==ae.__version||P===!0){t.activeTexture(33984+S),i.pixelStorei(37440,M.flipY),i.pixelStorei(37441,M.premultiplyAlpha),i.pixelStorei(3317,M.unpackAlignment),i.pixelStorei(37443,0);const me=M.isCompressedTexture||M.image[0].isCompressedTexture,L=M.image[0]&&M.image[0].isDataTexture,B=[];for(let q=0;q<6;q++)!me&&!L?B[q]=x(M.image[q],!1,!0,l):B[q]=L?M.image[q].image:M.image[q],B[q]=xt(M,B[q]);const ce=B[0],de=v(ce)||a,he=s.convert(M.format,M.encoding),_e=s.convert(M.type),ge=b(M.internalFormat,he,_e,M.encoding),Ne=a&&M.isVideoTexture!==!0,Ce=ae.__version===void 0||P===!0;let Ue=T(M,ce,de);Z(34067,M,de);let N;if(me){Ne&&Ce&&t.texStorage2D(34067,Ue,ge,ce.width,ce.height);for(let q=0;q<6;q++){N=B[q].mipmaps;for(let ne=0;ne<N.length;ne++){const pe=N[ne];M.format!==en?he!==null?Ne?t.compressedTexSubImage2D(34069+q,ne,0,0,pe.width,pe.height,he,pe.data):t.compressedTexImage2D(34069+q,ne,ge,pe.width,pe.height,0,pe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Ne?t.texSubImage2D(34069+q,ne,0,0,pe.width,pe.height,he,_e,pe.data):t.texImage2D(34069+q,ne,ge,pe.width,pe.height,0,he,_e,pe.data)}}}else{N=M.mipmaps,Ne&&Ce&&(N.length>0&&Ue++,t.texStorage2D(34067,Ue,ge,B[0].width,B[0].height));for(let q=0;q<6;q++)if(L){Ne?t.texSubImage2D(34069+q,0,0,0,B[q].width,B[q].height,he,_e,B[q].data):t.texImage2D(34069+q,0,ge,B[q].width,B[q].height,0,he,_e,B[q].data);for(let ne=0;ne<N.length;ne++){const we=N[ne].image[q].image;Ne?t.texSubImage2D(34069+q,ne+1,0,0,we.width,we.height,he,_e,we.data):t.texImage2D(34069+q,ne+1,ge,we.width,we.height,0,he,_e,we.data)}}else{Ne?t.texSubImage2D(34069+q,0,0,0,he,_e,B[q]):t.texImage2D(34069+q,0,ge,he,_e,B[q]);for(let ne=0;ne<N.length;ne++){const pe=N[ne];Ne?t.texSubImage2D(34069+q,ne+1,0,0,he,_e,pe.image[q]):t.texImage2D(34069+q,ne+1,ge,he,_e,pe.image[q])}}}A(M,de)&&R(34067),ae.__version=Q.version,M.onUpdate&&M.onUpdate(M)}C.__version=M.version}function le(C,M,S,P,Q){const ae=s.convert(S.format,S.encoding),me=s.convert(S.type),L=b(S.internalFormat,ae,me,S.encoding);n.get(M).__hasExternalTextures||(Q===32879||Q===35866?t.texImage3D(Q,0,L,M.width,M.height,M.depth,0,ae,me,null):t.texImage2D(Q,0,L,M.width,M.height,0,ae,me,null)),t.bindFramebuffer(36160,C),ke(M)?h.framebufferTexture2DMultisampleEXT(36160,P,Q,n.get(S).__webglTexture,0,tt(M)):(Q===3553||Q>=34069&&Q<=34074)&&i.framebufferTexture2D(36160,P,Q,n.get(S).__webglTexture,0),t.bindFramebuffer(36160,null)}function Be(C,M,S){if(i.bindRenderbuffer(36161,C),M.depthBuffer&&!M.stencilBuffer){let P=33189;if(S||ke(M)){const Q=M.depthTexture;Q&&Q.isDepthTexture&&(Q.type===si?P=36012:Q.type===Ai&&(P=33190));const ae=tt(M);ke(M)?h.renderbufferStorageMultisampleEXT(36161,ae,P,M.width,M.height):i.renderbufferStorageMultisample(36161,ae,P,M.width,M.height)}else i.renderbufferStorage(36161,P,M.width,M.height);i.framebufferRenderbuffer(36160,36096,36161,C)}else if(M.depthBuffer&&M.stencilBuffer){const P=tt(M);S&&ke(M)===!1?i.renderbufferStorageMultisample(36161,P,35056,M.width,M.height):ke(M)?h.renderbufferStorageMultisampleEXT(36161,P,35056,M.width,M.height):i.renderbufferStorage(36161,34041,M.width,M.height),i.framebufferRenderbuffer(36160,33306,36161,C)}else{const P=M.isWebGLMultipleRenderTargets===!0?M.texture:[M.texture];for(let Q=0;Q<P.length;Q++){const ae=P[Q],me=s.convert(ae.format,ae.encoding),L=s.convert(ae.type),B=b(ae.internalFormat,me,L,ae.encoding),ce=tt(M);S&&ke(M)===!1?i.renderbufferStorageMultisample(36161,ce,B,M.width,M.height):ke(M)?h.renderbufferStorageMultisampleEXT(36161,ce,B,M.width,M.height):i.renderbufferStorage(36161,B,M.width,M.height)}}i.bindRenderbuffer(36161,null)}function Te(C,M){if(M&&M.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(36160,C),!(M.depthTexture&&M.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(M.depthTexture).__webglTexture||M.depthTexture.image.width!==M.width||M.depthTexture.image.height!==M.height)&&(M.depthTexture.image.width=M.width,M.depthTexture.image.height=M.height,M.depthTexture.needsUpdate=!0),k(M.depthTexture,0);const P=n.get(M.depthTexture).__webglTexture,Q=tt(M);if(M.depthTexture.format===Di)ke(M)?h.framebufferTexture2DMultisampleEXT(36160,36096,3553,P,0,Q):i.framebufferTexture2D(36160,36096,3553,P,0);else if(M.depthTexture.format===wr)ke(M)?h.framebufferTexture2DMultisampleEXT(36160,33306,3553,P,0,Q):i.framebufferTexture2D(36160,33306,3553,P,0);else throw new Error("Unknown depthTexture format")}function be(C){const M=n.get(C),S=C.isWebGLCubeRenderTarget===!0;if(C.depthTexture&&!M.__autoAllocateDepthBuffer){if(S)throw new Error("target.depthTexture not supported in Cube render targets");Te(M.__webglFramebuffer,C)}else if(S){M.__webglDepthbuffer=[];for(let P=0;P<6;P++)t.bindFramebuffer(36160,M.__webglFramebuffer[P]),M.__webglDepthbuffer[P]=i.createRenderbuffer(),Be(M.__webglDepthbuffer[P],C,!1)}else t.bindFramebuffer(36160,M.__webglFramebuffer),M.__webglDepthbuffer=i.createRenderbuffer(),Be(M.__webglDepthbuffer,C,!1);t.bindFramebuffer(36160,null)}function Qe(C,M,S){const P=n.get(C);M!==void 0&&le(P.__webglFramebuffer,C,C.texture,36064,3553),S!==void 0&&be(C)}function it(C){const M=C.texture,S=n.get(C),P=n.get(M);C.addEventListener("dispose",j),C.isWebGLMultipleRenderTargets!==!0&&(P.__webglTexture===void 0&&(P.__webglTexture=i.createTexture()),P.__version=M.version,o.memory.textures++);const Q=C.isWebGLCubeRenderTarget===!0,ae=C.isWebGLMultipleRenderTargets===!0,me=v(C)||a;if(Q){S.__webglFramebuffer=[];for(let L=0;L<6;L++)S.__webglFramebuffer[L]=i.createFramebuffer()}else{if(S.__webglFramebuffer=i.createFramebuffer(),ae)if(r.drawBuffers){const L=C.texture;for(let B=0,ce=L.length;B<ce;B++){const de=n.get(L[B]);de.__webglTexture===void 0&&(de.__webglTexture=i.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&C.samples>0&&ke(C)===!1){const L=ae?M:[M];S.__webglMultisampledFramebuffer=i.createFramebuffer(),S.__webglColorRenderbuffer=[],t.bindFramebuffer(36160,S.__webglMultisampledFramebuffer);for(let B=0;B<L.length;B++){const ce=L[B];S.__webglColorRenderbuffer[B]=i.createRenderbuffer(),i.bindRenderbuffer(36161,S.__webglColorRenderbuffer[B]);const de=s.convert(ce.format,ce.encoding),he=s.convert(ce.type),_e=b(ce.internalFormat,de,he,ce.encoding,C.isXRRenderTarget===!0),ge=tt(C);i.renderbufferStorageMultisample(36161,ge,_e,C.width,C.height),i.framebufferRenderbuffer(36160,36064+B,36161,S.__webglColorRenderbuffer[B])}i.bindRenderbuffer(36161,null),C.depthBuffer&&(S.__webglDepthRenderbuffer=i.createRenderbuffer(),Be(S.__webglDepthRenderbuffer,C,!0)),t.bindFramebuffer(36160,null)}}if(Q){t.bindTexture(34067,P.__webglTexture),Z(34067,M,me);for(let L=0;L<6;L++)le(S.__webglFramebuffer[L],C,M,36064,34069+L);A(M,me)&&R(34067),t.unbindTexture()}else if(ae){const L=C.texture;for(let B=0,ce=L.length;B<ce;B++){const de=L[B],he=n.get(de);t.bindTexture(3553,he.__webglTexture),Z(3553,de,me),le(S.__webglFramebuffer,C,de,36064+B,3553),A(de,me)&&R(3553)}t.unbindTexture()}else{let L=3553;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(a?L=C.isWebGL3DRenderTarget?32879:35866:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(L,P.__webglTexture),Z(L,M,me),le(S.__webglFramebuffer,C,M,36064,L),A(M,me)&&R(L),t.unbindTexture()}C.depthBuffer&&be(C)}function et(C){const M=v(C)||a,S=C.isWebGLMultipleRenderTargets===!0?C.texture:[C.texture];for(let P=0,Q=S.length;P<Q;P++){const ae=S[P];if(A(ae,M)){const me=C.isWebGLCubeRenderTarget?34067:3553,L=n.get(ae).__webglTexture;t.bindTexture(me,L),R(me),t.unbindTexture()}}}function ft(C){if(a&&C.samples>0&&ke(C)===!1){const M=C.isWebGLMultipleRenderTargets?C.texture:[C.texture],S=C.width,P=C.height;let Q=16384;const ae=[],me=C.stencilBuffer?33306:36096,L=n.get(C),B=C.isWebGLMultipleRenderTargets===!0;if(B)for(let ce=0;ce<M.length;ce++)t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ce,36161,null),t.bindFramebuffer(36160,L.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ce,3553,null,0);t.bindFramebuffer(36008,L.__webglMultisampledFramebuffer),t.bindFramebuffer(36009,L.__webglFramebuffer);for(let ce=0;ce<M.length;ce++){ae.push(36064+ce),C.depthBuffer&&ae.push(me);const de=L.__ignoreDepthValues!==void 0?L.__ignoreDepthValues:!1;if(de===!1&&(C.depthBuffer&&(Q|=256),C.stencilBuffer&&(Q|=1024)),B&&i.framebufferRenderbuffer(36008,36064,36161,L.__webglColorRenderbuffer[ce]),de===!0&&(i.invalidateFramebuffer(36008,[me]),i.invalidateFramebuffer(36009,[me])),B){const he=n.get(M[ce]).__webglTexture;i.framebufferTexture2D(36009,36064,3553,he,0)}i.blitFramebuffer(0,0,S,P,0,0,S,P,Q,9728),d&&i.invalidateFramebuffer(36008,ae)}if(t.bindFramebuffer(36008,null),t.bindFramebuffer(36009,null),B)for(let ce=0;ce<M.length;ce++){t.bindFramebuffer(36160,L.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(36160,36064+ce,36161,L.__webglColorRenderbuffer[ce]);const de=n.get(M[ce]).__webglTexture;t.bindFramebuffer(36160,L.__webglFramebuffer),i.framebufferTexture2D(36009,36064+ce,3553,de,0)}t.bindFramebuffer(36009,L.__webglMultisampledFramebuffer)}}function tt(C){return Math.min(f,C.samples)}function ke(C){const M=n.get(C);return a&&C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&M.__useRenderToTexture!==!1}function vt(C){const M=o.render.frame;m.get(C)!==M&&(m.set(C,M),C.update())}function xt(C,M){const S=C.encoding,P=C.format,Q=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||C.format===ll||S!==ki&&(S===We?a===!1?e.has("EXT_sRGB")===!0&&P===en?(C.format=ll,C.minFilter=Bt,C.generateMipmaps=!1):M=lf.sRGBToLinear(M):(P!==en||Q!==Oi)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture encoding:",S)),M}this.allocateTextureUnit=X,this.resetTextureUnits=ee,this.setTexture2D=k,this.setTexture2DArray=te,this.setTexture3D=J,this.setTextureCube=ie,this.rebindTextures=Qe,this.setupRenderTarget=it,this.updateRenderTargetMipmap=et,this.updateMultisampleRenderTarget=ft,this.setupDepthRenderbuffer=be,this.setupFrameBufferTexture=le,this.useMultisampledRTT=ke}function xx(i,e,t){const n=t.isWebGL2;function r(s,o=null){let a;if(s===Oi)return 5121;if(s===Qp)return 32819;if(s===Jp)return 32820;if(s===$p)return 5120;if(s===Zp)return 5122;if(s===rf)return 5123;if(s===Kp)return 5124;if(s===Ai)return 5125;if(s===si)return 5126;if(s===ds)return n?5131:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===em)return 6406;if(s===en)return 6408;if(s===nm)return 6409;if(s===im)return 6410;if(s===Di)return 6402;if(s===wr)return 34041;if(s===rm)return 6403;if(s===tm)return console.warn("THREE.WebGLRenderer: THREE.RGBFormat has been removed. Use THREE.RGBAFormat instead. https://github.com/mrdoob/three.js/pull/23228"),6408;if(s===ll)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===sm)return 36244;if(s===om)return 33319;if(s===am)return 33320;if(s===lm)return 36249;if(s===ta||s===na||s===ia||s===ra)if(o===We)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===ta)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===na)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ia)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===ra)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===ta)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===na)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ia)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===ra)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===mc||s===gc||s===_c||s===vc)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===mc)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===gc)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===_c)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vc)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===cm)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===xc||s===yc)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===xc)return o===We?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===yc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===bc||s===wc||s===Mc||s===Sc||s===Tc||s===Ec||s===Ac||s===Cc||s===Dc||s===Pc||s===Lc||s===Rc||s===Ic||s===Fc)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===bc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Mc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Sc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Tc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Ec)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ac)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Cc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Dc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Pc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Lc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Rc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Ic)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Fc)return o===We?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Nc)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===Nc)return o===We?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;return s===_r?n?34042:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):i[s]!==void 0?i[s]:null}return{convert:r}}class yx extends It{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class wn extends qe{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bx={type:"move"};class La{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new wn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new wn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new D,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new D),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new wn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new D,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new D),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const g of e.hand.values()){const p=t.getJointPose(g,n);if(l.joints[g.jointName]===void 0){const y=new wn;y.matrixAutoUpdate=!1,y.visible=!1,l.joints[g.jointName]=y,l.add(y)}const _=l.joints[g.jointName];p!==null&&(_.matrix.fromArray(p.transform.matrix),_.matrix.decompose(_.position,_.rotation,_.scale),_.jointRadius=p.radius),_.visible=p!==null}const u=l.joints["index-finger-tip"],f=l.joints["thumb-tip"],h=u.position.distanceTo(f.position),d=.02,m=.005;l.inputState.pinching&&h>d+m?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=d-m&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bx)))}return a!==null&&(a.visible=r!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=o!==null),this}}class wx extends Nt{constructor(e,t,n,r,s,o,a,c,l,u){if(u=u!==void 0?u:Di,u!==Di&&u!==wr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===Di&&(n=Ai),n===void 0&&u===wr&&(n=_r),super(null,r,s,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:St,this.minFilter=c!==void 0?c:St,this.flipY=!1,this.generateMipmaps=!1}}class Mx extends Vi{constructor(e,t){super();const n=this;let r=null,s=1,o=null,a="local-floor",c=null,l=null,u=null,f=null,h=null,d=null;const m=t.getContextAttributes();let g=null,p=null;const _=[],y=[],x=new It;x.layers.enable(1),x.viewport=new Xe;const v=new It;v.layers.enable(2),v.viewport=new Xe;const w=[x,v],A=new yx;A.layers.enable(1),A.layers.enable(2);let R=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(F){let k=_[F];return k===void 0&&(k=new La,_[F]=k),k.getTargetRaySpace()},this.getControllerGrip=function(F){let k=_[F];return k===void 0&&(k=new La,_[F]=k),k.getGripSpace()},this.getHand=function(F){let k=_[F];return k===void 0&&(k=new La,_[F]=k),k.getHandSpace()};function T(F){const k=y.indexOf(F.inputSource);if(k===-1)return;const te=_[k];te!==void 0&&te.dispatchEvent({type:F.type,data:F.inputSource})}function I(){r.removeEventListener("select",T),r.removeEventListener("selectstart",T),r.removeEventListener("selectend",T),r.removeEventListener("squeeze",T),r.removeEventListener("squeezestart",T),r.removeEventListener("squeezeend",T),r.removeEventListener("end",I),r.removeEventListener("inputsourceschange",W);for(let F=0;F<_.length;F++){const k=y[F];k!==null&&(y[F]=null,_[F].disconnect(k))}R=null,b=null,e.setRenderTarget(g),h=null,f=null,u=null,r=null,p=null,X.stop(),n.isPresenting=!1,n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(F){c=F},this.getBaseLayer=function(){return f!==null?f:h},this.getBinding=function(){return u},this.getFrame=function(){return d},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(g=e.getRenderTarget(),r.addEventListener("select",T),r.addEventListener("selectstart",T),r.addEventListener("selectend",T),r.addEventListener("squeeze",T),r.addEventListener("squeezestart",T),r.addEventListener("squeezeend",T),r.addEventListener("end",I),r.addEventListener("inputsourceschange",W),m.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const k={antialias:r.renderState.layers===void 0?m.antialias:!0,alpha:m.alpha,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,t,k),r.updateRenderState({baseLayer:h}),p=new pn(h.framebufferWidth,h.framebufferHeight,{format:en,type:Oi,encoding:e.outputEncoding,stencilBuffer:m.stencil})}else{let k=null,te=null,J=null;m.depth&&(J=m.stencil?35056:33190,k=m.stencil?wr:Di,te=m.stencil?_r:Ai);const ie={colorFormat:32856,depthFormat:J,scaleFactor:s};u=new XRWebGLBinding(r,t),f=u.createProjectionLayer(ie),r.updateRenderState({layers:[f]}),p=new pn(f.textureWidth,f.textureHeight,{format:en,type:Oi,depthTexture:new wx(f.textureWidth,f.textureHeight,te,void 0,void 0,void 0,void 0,void 0,void 0,k),stencilBuffer:m.stencil,encoding:e.outputEncoding,samples:m.antialias?4:0});const ue=e.properties.get(p);ue.__ignoreDepthValues=f.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(1),c=null,o=await r.requestReferenceSpace(a),X.setContext(r),X.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}};function W(F){for(let k=0;k<F.removed.length;k++){const te=F.removed[k],J=y.indexOf(te);J>=0&&(y[J]=null,_[J].dispatchEvent({type:"disconnected",data:te}))}for(let k=0;k<F.added.length;k++){const te=F.added[k];let J=y.indexOf(te);if(J===-1){for(let ue=0;ue<_.length;ue++)if(ue>=y.length){y.push(te),J=ue;break}else if(y[ue]===null){y[ue]=te,J=ue;break}if(J===-1)break}const ie=_[J];ie&&ie.dispatchEvent({type:"connected",data:te})}}const j=new D,U=new D;function O(F,k,te){j.setFromMatrixPosition(k.matrixWorld),U.setFromMatrixPosition(te.matrixWorld);const J=j.distanceTo(U),ie=k.projectionMatrix.elements,ue=te.projectionMatrix.elements,G=ie[14]/(ie[10]-1),Z=ie[14]/(ie[10]+1),Ae=(ie[9]+1)/ie[5],ve=(ie[9]-1)/ie[5],ye=(ie[8]-1)/ie[0],le=(ue[8]+1)/ue[0],Be=G*ye,Te=G*le,be=J/(-ye+le),Qe=be*-ye;k.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Qe),F.translateZ(be),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const it=G+be,et=Z+be,ft=Be-Qe,tt=Te+(J-Qe),ke=Ae*Z/et*it,vt=ve*Z/et*it;F.projectionMatrix.makePerspective(ft,tt,ke,vt,it,et)}function V(F,k){k===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(k.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCamera=function(F){if(r===null)return;A.near=v.near=x.near=F.near,A.far=v.far=x.far=F.far,(R!==A.near||b!==A.far)&&(r.updateRenderState({depthNear:A.near,depthFar:A.far}),R=A.near,b=A.far);const k=F.parent,te=A.cameras;V(A,k);for(let ie=0;ie<te.length;ie++)V(te[ie],k);A.matrixWorld.decompose(A.position,A.quaternion,A.scale),F.matrix.copy(A.matrix),F.matrix.decompose(F.position,F.quaternion,F.scale);const J=F.children;for(let ie=0,ue=J.length;ie<ue;ie++)J[ie].updateMatrixWorld(!0);te.length===2?O(A,x,v):A.projectionMatrix.copy(x.projectionMatrix)},this.getCamera=function(){return A},this.getFoveation=function(){if(f!==null)return f.fixedFoveation;if(h!==null)return h.fixedFoveation},this.setFoveation=function(F){f!==null&&(f.fixedFoveation=F),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=F)};let $=null;function ee(F,k){if(l=k.getViewerPose(c||o),d=k,l!==null){const te=l.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let J=!1;te.length!==A.cameras.length&&(A.cameras.length=0,J=!0);for(let ie=0;ie<te.length;ie++){const ue=te[ie];let G=null;if(h!==null)G=h.getViewport(ue);else{const Ae=u.getViewSubImage(f,ue);G=Ae.viewport,ie===0&&(e.setRenderTargetTextures(p,Ae.colorTexture,f.ignoreDepthValues?void 0:Ae.depthStencilTexture),e.setRenderTarget(p))}let Z=w[ie];Z===void 0&&(Z=new It,Z.layers.enable(ie),Z.viewport=new Xe,w[ie]=Z),Z.matrix.fromArray(ue.transform.matrix),Z.projectionMatrix.fromArray(ue.projectionMatrix),Z.viewport.set(G.x,G.y,G.width,G.height),ie===0&&A.matrix.copy(Z.matrix),J===!0&&A.cameras.push(Z)}}for(let te=0;te<_.length;te++){const J=y[te],ie=_[te];J!==null&&ie!==void 0&&ie.update(J,k,c||o)}$&&$(F,k),d=null}const X=new mf;X.setAnimationLoop(ee),this.setAnimationLoop=function(F){$=F},this.dispose=function(){}}}function Sx(i,e){function t(g,p){g.fogColor.value.copy(p.color),p.isFog?(g.fogNear.value=p.near,g.fogFar.value=p.far):p.isFogExp2&&(g.fogDensity.value=p.density)}function n(g,p,_,y,x){p.isMeshBasicMaterial||p.isMeshLambertMaterial?r(g,p):p.isMeshToonMaterial?(r(g,p),u(g,p)):p.isMeshPhongMaterial?(r(g,p),l(g,p)):p.isMeshStandardMaterial?(r(g,p),f(g,p),p.isMeshPhysicalMaterial&&h(g,p,x)):p.isMeshMatcapMaterial?(r(g,p),d(g,p)):p.isMeshDepthMaterial?r(g,p):p.isMeshDistanceMaterial?(r(g,p),m(g,p)):p.isMeshNormalMaterial?r(g,p):p.isLineBasicMaterial?(s(g,p),p.isLineDashedMaterial&&o(g,p)):p.isPointsMaterial?a(g,p,_,y):p.isSpriteMaterial?c(g,p):p.isShadowMaterial?(g.color.value.copy(p.color),g.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(g,p){g.opacity.value=p.opacity,p.color&&g.diffuse.value.copy(p.color),p.emissive&&g.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.bumpMap&&(g.bumpMap.value=p.bumpMap,g.bumpScale.value=p.bumpScale,p.side===qt&&(g.bumpScale.value*=-1)),p.displacementMap&&(g.displacementMap.value=p.displacementMap,g.displacementScale.value=p.displacementScale,g.displacementBias.value=p.displacementBias),p.emissiveMap&&(g.emissiveMap.value=p.emissiveMap),p.normalMap&&(g.normalMap.value=p.normalMap,g.normalScale.value.copy(p.normalScale),p.side===qt&&g.normalScale.value.negate()),p.specularMap&&(g.specularMap.value=p.specularMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);const _=e.get(p).envMap;if(_&&(g.envMap.value=_,g.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=p.reflectivity,g.ior.value=p.ior,g.refractionRatio.value=p.refractionRatio),p.lightMap){g.lightMap.value=p.lightMap;const v=i.physicallyCorrectLights!==!0?Math.PI:1;g.lightMapIntensity.value=p.lightMapIntensity*v}p.aoMap&&(g.aoMap.value=p.aoMap,g.aoMapIntensity.value=p.aoMapIntensity);let y;p.map?y=p.map:p.specularMap?y=p.specularMap:p.displacementMap?y=p.displacementMap:p.normalMap?y=p.normalMap:p.bumpMap?y=p.bumpMap:p.roughnessMap?y=p.roughnessMap:p.metalnessMap?y=p.metalnessMap:p.alphaMap?y=p.alphaMap:p.emissiveMap?y=p.emissiveMap:p.clearcoatMap?y=p.clearcoatMap:p.clearcoatNormalMap?y=p.clearcoatNormalMap:p.clearcoatRoughnessMap?y=p.clearcoatRoughnessMap:p.iridescenceMap?y=p.iridescenceMap:p.iridescenceThicknessMap?y=p.iridescenceThicknessMap:p.specularIntensityMap?y=p.specularIntensityMap:p.specularColorMap?y=p.specularColorMap:p.transmissionMap?y=p.transmissionMap:p.thicknessMap?y=p.thicknessMap:p.sheenColorMap?y=p.sheenColorMap:p.sheenRoughnessMap&&(y=p.sheenRoughnessMap),y!==void 0&&(y.isWebGLRenderTarget&&(y=y.texture),y.matrixAutoUpdate===!0&&y.updateMatrix(),g.uvTransform.value.copy(y.matrix));let x;p.aoMap?x=p.aoMap:p.lightMap&&(x=p.lightMap),x!==void 0&&(x.isWebGLRenderTarget&&(x=x.texture),x.matrixAutoUpdate===!0&&x.updateMatrix(),g.uv2Transform.value.copy(x.matrix))}function s(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity}function o(g,p){g.dashSize.value=p.dashSize,g.totalSize.value=p.dashSize+p.gapSize,g.scale.value=p.scale}function a(g,p,_,y){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.size.value=p.size*_,g.scale.value=y*.5,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let x;p.map?x=p.map:p.alphaMap&&(x=p.alphaMap),x!==void 0&&(x.matrixAutoUpdate===!0&&x.updateMatrix(),g.uvTransform.value.copy(x.matrix))}function c(g,p){g.diffuse.value.copy(p.color),g.opacity.value=p.opacity,g.rotation.value=p.rotation,p.map&&(g.map.value=p.map),p.alphaMap&&(g.alphaMap.value=p.alphaMap),p.alphaTest>0&&(g.alphaTest.value=p.alphaTest);let _;p.map?_=p.map:p.alphaMap&&(_=p.alphaMap),_!==void 0&&(_.matrixAutoUpdate===!0&&_.updateMatrix(),g.uvTransform.value.copy(_.matrix))}function l(g,p){g.specular.value.copy(p.specular),g.shininess.value=Math.max(p.shininess,1e-4)}function u(g,p){p.gradientMap&&(g.gradientMap.value=p.gradientMap)}function f(g,p){g.roughness.value=p.roughness,g.metalness.value=p.metalness,p.roughnessMap&&(g.roughnessMap.value=p.roughnessMap),p.metalnessMap&&(g.metalnessMap.value=p.metalnessMap),e.get(p).envMap&&(g.envMapIntensity.value=p.envMapIntensity)}function h(g,p,_){g.ior.value=p.ior,p.sheen>0&&(g.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),g.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(g.sheenColorMap.value=p.sheenColorMap),p.sheenRoughnessMap&&(g.sheenRoughnessMap.value=p.sheenRoughnessMap)),p.clearcoat>0&&(g.clearcoat.value=p.clearcoat,g.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(g.clearcoatMap.value=p.clearcoatMap),p.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap),p.clearcoatNormalMap&&(g.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),g.clearcoatNormalMap.value=p.clearcoatNormalMap,p.side===qt&&g.clearcoatNormalScale.value.negate())),p.iridescence>0&&(g.iridescence.value=p.iridescence,g.iridescenceIOR.value=p.iridescenceIOR,g.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(g.iridescenceMap.value=p.iridescenceMap),p.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=p.iridescenceThicknessMap)),p.transmission>0&&(g.transmission.value=p.transmission,g.transmissionSamplerMap.value=_.texture,g.transmissionSamplerSize.value.set(_.width,_.height),p.transmissionMap&&(g.transmissionMap.value=p.transmissionMap),g.thickness.value=p.thickness,p.thicknessMap&&(g.thicknessMap.value=p.thicknessMap),g.attenuationDistance.value=p.attenuationDistance,g.attenuationColor.value.copy(p.attenuationColor)),g.specularIntensity.value=p.specularIntensity,g.specularColor.value.copy(p.specularColor),p.specularIntensityMap&&(g.specularIntensityMap.value=p.specularIntensityMap),p.specularColorMap&&(g.specularColorMap.value=p.specularColorMap)}function d(g,p){p.matcap&&(g.matcap.value=p.matcap)}function m(g,p){g.referencePosition.value.copy(p.referencePosition),g.nearDistance.value=p.nearDistance,g.farDistance.value=p.farDistance}return{refreshFogUniforms:t,refreshMaterialUniforms:n}}function Tx(i,e,t,n){let r={},s={},o=[];const a=t.isWebGL2?i.getParameter(35375):0;function c(y,x){const v=x.program;n.uniformBlockBinding(y,v)}function l(y,x){let v=r[y.id];v===void 0&&(m(y),v=u(y),r[y.id]=v,y.addEventListener("dispose",p));const w=x.program;n.updateUBOMapping(y,w);const A=e.render.frame;s[y.id]!==A&&(h(y),s[y.id]=A)}function u(y){const x=f();y.__bindingPointIndex=x;const v=i.createBuffer(),w=y.__size,A=y.usage;return i.bindBuffer(35345,v),i.bufferData(35345,w,A),i.bindBuffer(35345,null),i.bindBufferBase(35345,x,v),v}function f(){for(let y=0;y<a;y++)if(o.indexOf(y)===-1)return o.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(y){const x=r[y.id],v=y.uniforms,w=y.__cache;i.bindBuffer(35345,x);for(let A=0,R=v.length;A<R;A++){const b=v[A];if(d(b,A,w)===!0){const T=b.value,I=b.__offset;typeof T=="number"?(b.__data[0]=T,i.bufferSubData(35345,I,b.__data)):(b.value.isMatrix3?(b.__data[0]=b.value.elements[0],b.__data[1]=b.value.elements[1],b.__data[2]=b.value.elements[2],b.__data[3]=b.value.elements[0],b.__data[4]=b.value.elements[3],b.__data[5]=b.value.elements[4],b.__data[6]=b.value.elements[5],b.__data[7]=b.value.elements[0],b.__data[8]=b.value.elements[6],b.__data[9]=b.value.elements[7],b.__data[10]=b.value.elements[8],b.__data[11]=b.value.elements[0]):T.toArray(b.__data),i.bufferSubData(35345,I,b.__data))}}i.bindBuffer(35345,null)}function d(y,x,v){const w=y.value;if(v[x]===void 0)return typeof w=="number"?v[x]=w:v[x]=w.clone(),!0;if(typeof w=="number"){if(v[x]!==w)return v[x]=w,!0}else{const A=v[x];if(A.equals(w)===!1)return A.copy(w),!0}return!1}function m(y){const x=y.uniforms;let v=0;const w=16;let A=0;for(let R=0,b=x.length;R<b;R++){const T=x[R],I=g(T);if(T.__data=new Float32Array(I.storage/Float32Array.BYTES_PER_ELEMENT),T.__offset=v,R>0){A=v%w;const W=w-A;A!==0&&W-I.boundary<0&&(v+=w-A,T.__offset=v)}v+=I.storage}return A=v%w,A>0&&(v+=w-A),y.__size=v,y.__cache={},this}function g(y){const x=y.value,v={boundary:0,storage:0};return typeof x=="number"?(v.boundary=4,v.storage=4):x.isVector2?(v.boundary=8,v.storage=8):x.isVector3||x.isColor?(v.boundary=16,v.storage=12):x.isVector4?(v.boundary=16,v.storage=16):x.isMatrix3?(v.boundary=48,v.storage=48):x.isMatrix4?(v.boundary=64,v.storage=64):x.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",x),v}function p(y){const x=y.target;x.removeEventListener("dispose",p);const v=o.indexOf(x.__bindingPointIndex);o.splice(v,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function _(){for(const y in r)i.deleteBuffer(r[y]);o=[],r={},s={}}return{bind:c,update:l,dispose:_}}function Ex(){const i=gs("canvas");return i.style.display="block",i}function yf(i={}){this.isWebGLRenderer=!0;const e=i.canvas!==void 0?i.canvas:Ex(),t=i.context!==void 0?i.context:null,n=i.depth!==void 0?i.depth:!0,r=i.stencil!==void 0?i.stencil:!0,s=i.antialias!==void 0?i.antialias:!1,o=i.premultipliedAlpha!==void 0?i.premultipliedAlpha:!0,a=i.preserveDrawingBuffer!==void 0?i.preserveDrawingBuffer:!1,c=i.powerPreference!==void 0?i.powerPreference:"default",l=i.failIfMajorPerformanceCaveat!==void 0?i.failIfMajorPerformanceCaveat:!1;let u;t!==null?u=t.getContextAttributes().alpha:u=i.alpha!==void 0?i.alpha:!1;let f=null,h=null;const d=[],m=[];this.domElement=e,this.debug={checkShaderErrors:!0},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputEncoding=ki,this.physicallyCorrectLights=!1,this.toneMapping=Vn,this.toneMappingExposure=1,Object.defineProperties(this,{gammaFactor:{get:function(){return console.warn("THREE.WebGLRenderer: .gammaFactor has been removed."),2},set:function(){console.warn("THREE.WebGLRenderer: .gammaFactor has been removed.")}}});const g=this;let p=!1,_=0,y=0,x=null,v=-1,w=null;const A=new Xe,R=new Xe;let b=null,T=e.width,I=e.height,W=1,j=null,U=null;const O=new Xe(0,0,T,I),V=new Xe(0,0,T,I);let $=!1;const ee=new Bl;let X=!1,F=!1,k=null;const te=new Fe,J=new fe,ie=new D,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function G(){return x===null?W:1}let Z=t;function Ae(E,H){for(let Y=0;Y<E.length;Y++){const z=E[Y],K=e.getContext(z,H);if(K!==null)return K}return null}try{const E={alpha:!0,depth:n,stencil:r,antialias:s,premultipliedAlpha:o,preserveDrawingBuffer:a,powerPreference:c,failIfMajorPerformanceCaveat:l};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Il}`),e.addEventListener("webglcontextlost",_e,!1),e.addEventListener("webglcontextrestored",ge,!1),e.addEventListener("webglcontextcreationerror",Ne,!1),Z===null){const H=["webgl2","webgl","experimental-webgl"];if(g.isWebGL1Renderer===!0&&H.shift(),Z=Ae(H,E),Z===null)throw Ae(H)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}Z.getShaderPrecisionFormat===void 0&&(Z.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(E){throw console.error("THREE.WebGLRenderer: "+E.message),E}let ve,ye,le,Be,Te,be,Qe,it,et,ft,tt,ke,vt,xt,C,M,S,P,Q,ae,me,L,B,ce;function de(){ve=new k_(Z),ye=new L_(Z,ve,i),ve.init(ye),L=new xx(Z,ve,ye),le=new _x(Z,ve,ye),Be=new z_,Te=new ix,be=new vx(Z,ve,le,Te,ye,L,Be),Qe=new I_(g),it=new O_(g),et=new $m(Z,ye),B=new D_(Z,ve,et,ye),ft=new B_(Z,et,Be,B),tt=new W_(Z,ft,et,Be),Q=new G_(Z,ye,be),M=new R_(Te),ke=new nx(g,Qe,it,ve,ye,B,M),vt=new Sx(g,Te),xt=new sx,C=new hx(ve,ye),P=new C_(g,Qe,it,le,tt,u,o),S=new gx(g,tt,ye),ce=new Tx(Z,Be,ye,le),ae=new P_(Z,ve,Be,ye),me=new U_(Z,ve,Be,ye),Be.programs=ke.programs,g.capabilities=ye,g.extensions=ve,g.properties=Te,g.renderLists=xt,g.shadowMap=S,g.state=le,g.info=Be}de();const he=new Mx(g,Z);this.xr=he,this.getContext=function(){return Z},this.getContextAttributes=function(){return Z.getContextAttributes()},this.forceContextLoss=function(){const E=ve.get("WEBGL_lose_context");E&&E.loseContext()},this.forceContextRestore=function(){const E=ve.get("WEBGL_lose_context");E&&E.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(E){E!==void 0&&(W=E,this.setSize(T,I,!1))},this.getSize=function(E){return E.set(T,I)},this.setSize=function(E,H,Y){if(he.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}T=E,I=H,e.width=Math.floor(E*W),e.height=Math.floor(H*W),Y!==!1&&(e.style.width=E+"px",e.style.height=H+"px"),this.setViewport(0,0,E,H)},this.getDrawingBufferSize=function(E){return E.set(T*W,I*W).floor()},this.setDrawingBufferSize=function(E,H,Y){T=E,I=H,W=Y,e.width=Math.floor(E*Y),e.height=Math.floor(H*Y),this.setViewport(0,0,E,H)},this.getCurrentViewport=function(E){return E.copy(A)},this.getViewport=function(E){return E.copy(O)},this.setViewport=function(E,H,Y,z){E.isVector4?O.set(E.x,E.y,E.z,E.w):O.set(E,H,Y,z),le.viewport(A.copy(O).multiplyScalar(W).floor())},this.getScissor=function(E){return E.copy(V)},this.setScissor=function(E,H,Y,z){E.isVector4?V.set(E.x,E.y,E.z,E.w):V.set(E,H,Y,z),le.scissor(R.copy(V).multiplyScalar(W).floor())},this.getScissorTest=function(){return $},this.setScissorTest=function(E){le.setScissorTest($=E)},this.setOpaqueSort=function(E){j=E},this.setTransparentSort=function(E){U=E},this.getClearColor=function(E){return E.copy(P.getClearColor())},this.setClearColor=function(){P.setClearColor.apply(P,arguments)},this.getClearAlpha=function(){return P.getClearAlpha()},this.setClearAlpha=function(){P.setClearAlpha.apply(P,arguments)},this.clear=function(E=!0,H=!0,Y=!0){let z=0;E&&(z|=16384),H&&(z|=256),Y&&(z|=1024),Z.clear(z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",_e,!1),e.removeEventListener("webglcontextrestored",ge,!1),e.removeEventListener("webglcontextcreationerror",Ne,!1),xt.dispose(),C.dispose(),Te.dispose(),Qe.dispose(),it.dispose(),tt.dispose(),B.dispose(),ce.dispose(),ke.dispose(),he.dispose(),he.removeEventListener("sessionstart",pe),he.removeEventListener("sessionend",we),k&&(k.dispose(),k=null),He.stop()};function _e(E){E.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),p=!0}function ge(){console.log("THREE.WebGLRenderer: Context Restored."),p=!1;const E=Be.autoReset,H=S.enabled,Y=S.autoUpdate,z=S.needsUpdate,K=S.type;de(),Be.autoReset=E,S.enabled=H,S.autoUpdate=Y,S.needsUpdate=z,S.type=K}function Ne(E){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",E.statusMessage)}function Ce(E){const H=E.target;H.removeEventListener("dispose",Ce),Ue(H)}function Ue(E){N(E),Te.remove(E)}function N(E){const H=Te.get(E).programs;H!==void 0&&(H.forEach(function(Y){ke.releaseProgram(Y)}),E.isShaderMaterial&&ke.releaseShaderCache(E))}this.renderBufferDirect=function(E,H,Y,z,K,Me){H===null&&(H=ue);const Ee=K.isMesh&&K.matrixWorld.determinant()<0,Re=fp(E,H,Y,z,K);le.setMaterial(z,Ee);let Pe=Y.index;const Ve=Y.attributes.position;if(Pe===null){if(Ve===void 0||Ve.count===0)return}else if(Pe.count===0)return;let Oe=1;z.wireframe===!0&&(Pe=ft.getWireframeAttribute(Y),Oe=2),B.setup(K,z,Re,Y,Pe);let ze,ot=ae;Pe!==null&&(ze=et.get(Pe),ot=me,ot.setIndex(ze));const fi=Pe!==null?Pe.count:Ve.count,qi=Y.drawRange.start*Oe,Yi=Y.drawRange.count*Oe,gn=Me!==null?Me.start*Oe:0,Ge=Me!==null?Me.count*Oe:1/0,$i=Math.max(qi,gn),lt=Math.min(fi,qi+Yi,gn+Ge)-1,Zt=Math.max(0,lt-$i+1);if(Zt!==0){if(K.isMesh)z.wireframe===!0?(le.setLineWidth(z.wireframeLinewidth*G()),ot.setMode(1)):ot.setMode(4);else if(K.isLine){let Xn=z.linewidth;Xn===void 0&&(Xn=1),le.setLineWidth(Xn*G()),K.isLineSegments?ot.setMode(1):K.isLineLoop?ot.setMode(2):ot.setMode(3)}else K.isPoints?ot.setMode(0):K.isSprite&&ot.setMode(4);if(K.isInstancedMesh)ot.renderInstances($i,Zt,K.count);else if(Y.isInstancedBufferGeometry){const Xn=Math.min(Y.instanceCount,Y._maxInstanceCount);ot.renderInstances($i,Zt,Xn)}else ot.render($i,Zt)}},this.compile=function(E,H){function Y(z,K,Me){z.transparent===!0&&z.side===bn?(z.side=qt,z.needsUpdate=!0,$t(z,K,Me),z.side=Ni,z.needsUpdate=!0,$t(z,K,Me),z.side=bn):$t(z,K,Me)}h=C.get(E),h.init(),m.push(h),E.traverseVisible(function(z){z.isLight&&z.layers.test(H.layers)&&(h.pushLight(z),z.castShadow&&h.pushShadow(z))}),h.setupLights(g.physicallyCorrectLights),E.traverse(function(z){const K=z.material;if(K)if(Array.isArray(K))for(let Me=0;Me<K.length;Me++){const Ee=K[Me];Y(Ee,E,z)}else Y(K,E,z)}),m.pop(),h=null};let q=null;function ne(E){q&&q(E)}function pe(){He.stop()}function we(){He.start()}const He=new mf;He.setAnimationLoop(ne),typeof self<"u"&&He.setContext(self),this.setAnimationLoop=function(E){q=E,he.setAnimationLoop(E),E===null?He.stop():He.start()},he.addEventListener("sessionstart",pe),he.addEventListener("sessionend",we),this.render=function(E,H){if(H!==void 0&&H.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(p===!0)return;E.matrixWorldAutoUpdate===!0&&E.updateMatrixWorld(),H.parent===null&&H.matrixWorldAutoUpdate===!0&&H.updateMatrixWorld(),he.enabled===!0&&he.isPresenting===!0&&(he.cameraAutoUpdate===!0&&he.updateCamera(H),H=he.getCamera()),E.isScene===!0&&E.onBeforeRender(g,E,H,x),h=C.get(E,m.length),h.init(),m.push(h),te.multiplyMatrices(H.projectionMatrix,H.matrixWorldInverse),ee.setFromProjectionMatrix(te),F=this.localClippingEnabled,X=M.init(this.clippingPlanes,F,H),f=xt.get(E,d.length),f.init(),d.push(f),yt(E,H,0,g.sortObjects),f.finish(),g.sortObjects===!0&&f.sort(j,U),X===!0&&M.beginShadows();const Y=h.state.shadowsArray;if(S.render(Y,E,H),X===!0&&M.endShadows(),this.info.autoReset===!0&&this.info.reset(),P.render(f,E),h.setupLights(g.physicallyCorrectLights),H.isArrayCamera){const z=H.cameras;for(let K=0,Me=z.length;K<Me;K++){const Ee=z[K];Tt(f,E,Ee,Ee.viewport)}}else Tt(f,E,H);x!==null&&(be.updateMultisampleRenderTarget(x),be.updateRenderTargetMipmap(x)),E.isScene===!0&&E.onAfterRender(g,E,H),B.resetDefaultState(),v=-1,w=null,m.pop(),m.length>0?h=m[m.length-1]:h=null,d.pop(),d.length>0?f=d[d.length-1]:f=null};function yt(E,H,Y,z){if(E.visible===!1)return;if(E.layers.test(H.layers)){if(E.isGroup)Y=E.renderOrder;else if(E.isLOD)E.autoUpdate===!0&&E.update(H);else if(E.isLight)h.pushLight(E),E.castShadow&&h.pushShadow(E);else if(E.isSprite){if(!E.frustumCulled||ee.intersectsSprite(E)){z&&ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(te);const Ee=tt.update(E),Re=E.material;Re.visible&&f.push(E,Ee,Re,Y,ie.z,null)}}else if((E.isMesh||E.isLine||E.isPoints)&&(E.isSkinnedMesh&&E.skeleton.frame!==Be.render.frame&&(E.skeleton.update(),E.skeleton.frame=Be.render.frame),!E.frustumCulled||ee.intersectsObject(E))){z&&ie.setFromMatrixPosition(E.matrixWorld).applyMatrix4(te);const Ee=tt.update(E),Re=E.material;if(Array.isArray(Re)){const Pe=Ee.groups;for(let Ve=0,Oe=Pe.length;Ve<Oe;Ve++){const ze=Pe[Ve],ot=Re[ze.materialIndex];ot&&ot.visible&&f.push(E,Ee,ot,Y,ie.z,ze)}}else Re.visible&&f.push(E,Ee,Re,Y,ie.z,null)}}const Me=E.children;for(let Ee=0,Re=Me.length;Ee<Re;Ee++)yt(Me[Ee],H,Y,z)}function Tt(E,H,Y,z){const K=E.opaque,Me=E.transmissive,Ee=E.transparent;h.setupLightsView(Y),Me.length>0&&hi(K,H,Y),z&&le.viewport(A.copy(z)),K.length>0&&rt(K,H,Y),Me.length>0&&rt(Me,H,Y),Ee.length>0&&rt(Ee,H,Y),le.buffers.depth.setTest(!0),le.buffers.depth.setMask(!0),le.buffers.color.setMask(!0),le.setPolygonOffset(!1)}function hi(E,H,Y){const z=ye.isWebGL2;k===null&&(k=new pn(1,1,{generateMipmaps:!0,type:ve.has("EXT_color_buffer_half_float")?ds:Oi,minFilter:Ir,samples:z&&s===!0?4:0})),g.getDrawingBufferSize(J),z?k.setSize(J.x,J.y):k.setSize(So(J.x),So(J.y));const K=g.getRenderTarget();g.setRenderTarget(k),g.clear();const Me=g.toneMapping;g.toneMapping=Vn,rt(E,H,Y),g.toneMapping=Me,be.updateMultisampleRenderTarget(k),be.updateRenderTargetMipmap(k),g.setRenderTarget(K)}function rt(E,H,Y){const z=H.isScene===!0?H.overrideMaterial:null;for(let K=0,Me=E.length;K<Me;K++){const Ee=E[K],Re=Ee.object,Pe=Ee.geometry,Ve=z===null?Ee.material:z,Oe=Ee.group;Re.layers.test(Y.layers)&&Dn(Re,H,Y,Pe,Ve,Oe)}}function Dn(E,H,Y,z,K,Me){E.onBeforeRender(g,H,Y,z,K,Me),E.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,E.matrixWorld),E.normalMatrix.getNormalMatrix(E.modelViewMatrix),K.onBeforeRender(g,H,Y,z,E,Me),K.transparent===!0&&K.side===bn?(K.side=qt,K.needsUpdate=!0,g.renderBufferDirect(Y,H,z,K,E,Me),K.side=Ni,K.needsUpdate=!0,g.renderBufferDirect(Y,H,z,K,E,Me),K.side=bn):g.renderBufferDirect(Y,H,z,K,E,Me),E.onAfterRender(g,H,Y,z,K,Me)}function $t(E,H,Y){H.isScene!==!0&&(H=ue);const z=Te.get(E),K=h.state.lights,Me=h.state.shadowsArray,Ee=K.state.version,Re=ke.getParameters(E,K.state,Me,H,Y),Pe=ke.getProgramCacheKey(Re);let Ve=z.programs;z.environment=E.isMeshStandardMaterial?H.environment:null,z.fog=H.fog,z.envMap=(E.isMeshStandardMaterial?it:Qe).get(E.envMap||z.environment),Ve===void 0&&(E.addEventListener("dispose",Ce),Ve=new Map,z.programs=Ve);let Oe=Ve.get(Pe);if(Oe!==void 0){if(z.currentProgram===Oe&&z.lightsStateVersion===Ee)return lc(E,Re),Oe}else Re.uniforms=ke.getUniforms(E),E.onBuild(Y,Re,g),E.onBeforeCompile(Re,g),Oe=ke.acquireProgram(Re,Pe),Ve.set(Pe,Oe),z.uniforms=Re.uniforms;const ze=z.uniforms;(!E.isShaderMaterial&&!E.isRawShaderMaterial||E.clipping===!0)&&(ze.clippingPlanes=M.uniform),lc(E,Re),z.needsLights=pp(E),z.lightsStateVersion=Ee,z.needsLights&&(ze.ambientLightColor.value=K.state.ambient,ze.lightProbe.value=K.state.probe,ze.directionalLights.value=K.state.directional,ze.directionalLightShadows.value=K.state.directionalShadow,ze.spotLights.value=K.state.spot,ze.spotLightShadows.value=K.state.spotShadow,ze.rectAreaLights.value=K.state.rectArea,ze.ltc_1.value=K.state.rectAreaLTC1,ze.ltc_2.value=K.state.rectAreaLTC2,ze.pointLights.value=K.state.point,ze.pointLightShadows.value=K.state.pointShadow,ze.hemisphereLights.value=K.state.hemi,ze.directionalShadowMap.value=K.state.directionalShadowMap,ze.directionalShadowMatrix.value=K.state.directionalShadowMatrix,ze.spotShadowMap.value=K.state.spotShadowMap,ze.spotLightMatrix.value=K.state.spotLightMatrix,ze.spotLightMap.value=K.state.spotLightMap,ze.pointShadowMap.value=K.state.pointShadowMap,ze.pointShadowMatrix.value=K.state.pointShadowMatrix);const ot=Oe.getUniforms(),fi=mo.seqWithValue(ot.seq,ze);return z.currentProgram=Oe,z.uniformsList=fi,Oe}function lc(E,H){const Y=Te.get(E);Y.outputEncoding=H.outputEncoding,Y.instancing=H.instancing,Y.skinning=H.skinning,Y.morphTargets=H.morphTargets,Y.morphNormals=H.morphNormals,Y.morphColors=H.morphColors,Y.morphTargetsCount=H.morphTargetsCount,Y.numClippingPlanes=H.numClippingPlanes,Y.numIntersection=H.numClipIntersection,Y.vertexAlphas=H.vertexAlphas,Y.vertexTangents=H.vertexTangents,Y.toneMapping=H.toneMapping}function fp(E,H,Y,z,K){H.isScene!==!0&&(H=ue),be.resetTextureUnits();const Me=H.fog,Ee=z.isMeshStandardMaterial?H.environment:null,Re=x===null?g.outputEncoding:x.isXRRenderTarget===!0?x.texture.encoding:ki,Pe=(z.isMeshStandardMaterial?it:Qe).get(z.envMap||Ee),Ve=z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Oe=!!z.normalMap&&!!Y.attributes.tangent,ze=!!Y.morphAttributes.position,ot=!!Y.morphAttributes.normal,fi=!!Y.morphAttributes.color,qi=z.toneMapped?g.toneMapping:Vn,Yi=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,gn=Yi!==void 0?Yi.length:0,Ge=Te.get(z),$i=h.state.lights;if(X===!0&&(F===!0||E!==w)){const Vt=E===w&&z.id===v;M.setState(z,E,Vt)}let lt=!1;z.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==$i.state.version||Ge.outputEncoding!==Re||K.isInstancedMesh&&Ge.instancing===!1||!K.isInstancedMesh&&Ge.instancing===!0||K.isSkinnedMesh&&Ge.skinning===!1||!K.isSkinnedMesh&&Ge.skinning===!0||Ge.envMap!==Pe||z.fog===!0&&Ge.fog!==Me||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==M.numPlanes||Ge.numIntersection!==M.numIntersection)||Ge.vertexAlphas!==Ve||Ge.vertexTangents!==Oe||Ge.morphTargets!==ze||Ge.morphNormals!==ot||Ge.morphColors!==fi||Ge.toneMapping!==qi||ye.isWebGL2===!0&&Ge.morphTargetsCount!==gn)&&(lt=!0):(lt=!0,Ge.__version=z.version);let Zt=Ge.currentProgram;lt===!0&&(Zt=$t(z,H,K));let Xn=!1,Gr=!1,Qo=!1;const Pt=Zt.getUniforms(),di=Ge.uniforms;if(le.useProgram(Zt.program)&&(Xn=!0,Gr=!0,Qo=!0),z.id!==v&&(v=z.id,Gr=!0),Xn||w!==E){if(Pt.setValue(Z,"projectionMatrix",E.projectionMatrix),ye.logarithmicDepthBuffer&&Pt.setValue(Z,"logDepthBufFC",2/(Math.log(E.far+1)/Math.LN2)),w!==E&&(w=E,Gr=!0,Qo=!0),z.isShaderMaterial||z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshStandardMaterial||z.envMap){const Vt=Pt.map.cameraPosition;Vt!==void 0&&Vt.setValue(Z,ie.setFromMatrixPosition(E.matrixWorld))}(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial)&&Pt.setValue(Z,"isOrthographic",E.isOrthographicCamera===!0),(z.isMeshPhongMaterial||z.isMeshToonMaterial||z.isMeshLambertMaterial||z.isMeshBasicMaterial||z.isMeshStandardMaterial||z.isShaderMaterial||z.isShadowMaterial||K.isSkinnedMesh)&&Pt.setValue(Z,"viewMatrix",E.matrixWorldInverse)}if(K.isSkinnedMesh){Pt.setOptional(Z,K,"bindMatrix"),Pt.setOptional(Z,K,"bindMatrixInverse");const Vt=K.skeleton;Vt&&(ye.floatVertexTextures?(Vt.boneTexture===null&&Vt.computeBoneTexture(),Pt.setValue(Z,"boneTexture",Vt.boneTexture,be),Pt.setValue(Z,"boneTextureSize",Vt.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Jo=Y.morphAttributes;if((Jo.position!==void 0||Jo.normal!==void 0||Jo.color!==void 0&&ye.isWebGL2===!0)&&Q.update(K,Y,z,Zt),(Gr||Ge.receiveShadow!==K.receiveShadow)&&(Ge.receiveShadow=K.receiveShadow,Pt.setValue(Z,"receiveShadow",K.receiveShadow)),z.isMeshGouraudMaterial&&z.envMap!==null&&(di.envMap.value=Pe,di.flipEnvMap.value=Pe.isCubeTexture&&Pe.isRenderTargetTexture===!1?-1:1),Gr&&(Pt.setValue(Z,"toneMappingExposure",g.toneMappingExposure),Ge.needsLights&&dp(di,Qo),Me&&z.fog===!0&&vt.refreshFogUniforms(di,Me),vt.refreshMaterialUniforms(di,z,W,I,k),mo.upload(Z,Ge.uniformsList,di,be)),z.isShaderMaterial&&z.uniformsNeedUpdate===!0&&(mo.upload(Z,Ge.uniformsList,di,be),z.uniformsNeedUpdate=!1),z.isSpriteMaterial&&Pt.setValue(Z,"center",K.center),Pt.setValue(Z,"modelViewMatrix",K.modelViewMatrix),Pt.setValue(Z,"normalMatrix",K.normalMatrix),Pt.setValue(Z,"modelMatrix",K.matrixWorld),z.isShaderMaterial||z.isRawShaderMaterial){const Vt=z.uniformsGroups;for(let ea=0,mp=Vt.length;ea<mp;ea++)if(ye.isWebGL2){const cc=Vt[ea];ce.update(cc,Zt),ce.bind(cc,Zt)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Zt}function dp(E,H){E.ambientLightColor.needsUpdate=H,E.lightProbe.needsUpdate=H,E.directionalLights.needsUpdate=H,E.directionalLightShadows.needsUpdate=H,E.pointLights.needsUpdate=H,E.pointLightShadows.needsUpdate=H,E.spotLights.needsUpdate=H,E.spotLightShadows.needsUpdate=H,E.rectAreaLights.needsUpdate=H,E.hemisphereLights.needsUpdate=H}function pp(E){return E.isMeshLambertMaterial||E.isMeshToonMaterial||E.isMeshPhongMaterial||E.isMeshStandardMaterial||E.isShadowMaterial||E.isShaderMaterial&&E.lights===!0}this.getActiveCubeFace=function(){return _},this.getActiveMipmapLevel=function(){return y},this.getRenderTarget=function(){return x},this.setRenderTargetTextures=function(E,H,Y){Te.get(E.texture).__webglTexture=H,Te.get(E.depthTexture).__webglTexture=Y;const z=Te.get(E);z.__hasExternalTextures=!0,z.__hasExternalTextures&&(z.__autoAllocateDepthBuffer=Y===void 0,z.__autoAllocateDepthBuffer||ve.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),z.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(E,H){const Y=Te.get(E);Y.__webglFramebuffer=H,Y.__useDefaultFramebuffer=H===void 0},this.setRenderTarget=function(E,H=0,Y=0){x=E,_=H,y=Y;let z=!0,K=null,Me=!1,Ee=!1;if(E){const Pe=Te.get(E);Pe.__useDefaultFramebuffer!==void 0?(le.bindFramebuffer(36160,null),z=!1):Pe.__webglFramebuffer===void 0?be.setupRenderTarget(E):Pe.__hasExternalTextures&&be.rebindTextures(E,Te.get(E.texture).__webglTexture,Te.get(E.depthTexture).__webglTexture);const Ve=E.texture;(Ve.isData3DTexture||Ve.isDataArrayTexture||Ve.isCompressedArrayTexture)&&(Ee=!0);const Oe=Te.get(E).__webglFramebuffer;E.isWebGLCubeRenderTarget?(K=Oe[H],Me=!0):ye.isWebGL2&&E.samples>0&&be.useMultisampledRTT(E)===!1?K=Te.get(E).__webglMultisampledFramebuffer:K=Oe,A.copy(E.viewport),R.copy(E.scissor),b=E.scissorTest}else A.copy(O).multiplyScalar(W).floor(),R.copy(V).multiplyScalar(W).floor(),b=$;if(le.bindFramebuffer(36160,K)&&ye.drawBuffers&&z&&le.drawBuffers(E,K),le.viewport(A),le.scissor(R),le.setScissorTest(b),Me){const Pe=Te.get(E.texture);Z.framebufferTexture2D(36160,36064,34069+H,Pe.__webglTexture,Y)}else if(Ee){const Pe=Te.get(E.texture),Ve=H||0;Z.framebufferTextureLayer(36160,36064,Pe.__webglTexture,Y||0,Ve)}v=-1},this.readRenderTargetPixels=function(E,H,Y,z,K,Me,Ee){if(!(E&&E.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Re=Te.get(E).__webglFramebuffer;if(E.isWebGLCubeRenderTarget&&Ee!==void 0&&(Re=Re[Ee]),Re){le.bindFramebuffer(36160,Re);try{const Pe=E.texture,Ve=Pe.format,Oe=Pe.type;if(Ve!==en&&L.convert(Ve)!==Z.getParameter(35739)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const ze=Oe===ds&&(ve.has("EXT_color_buffer_half_float")||ye.isWebGL2&&ve.has("EXT_color_buffer_float"));if(Oe!==Oi&&L.convert(Oe)!==Z.getParameter(35738)&&!(Oe===si&&(ye.isWebGL2||ve.has("OES_texture_float")||ve.has("WEBGL_color_buffer_float")))&&!ze){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}H>=0&&H<=E.width-z&&Y>=0&&Y<=E.height-K&&Z.readPixels(H,Y,z,K,L.convert(Ve),L.convert(Oe),Me)}finally{const Pe=x!==null?Te.get(x).__webglFramebuffer:null;le.bindFramebuffer(36160,Pe)}}},this.copyFramebufferToTexture=function(E,H,Y=0){const z=Math.pow(2,-Y),K=Math.floor(H.image.width*z),Me=Math.floor(H.image.height*z);be.setTexture2D(H,0),Z.copyTexSubImage2D(3553,Y,0,0,E.x,E.y,K,Me),le.unbindTexture()},this.copyTextureToTexture=function(E,H,Y,z=0){const K=H.image.width,Me=H.image.height,Ee=L.convert(Y.format),Re=L.convert(Y.type);be.setTexture2D(Y,0),Z.pixelStorei(37440,Y.flipY),Z.pixelStorei(37441,Y.premultiplyAlpha),Z.pixelStorei(3317,Y.unpackAlignment),H.isDataTexture?Z.texSubImage2D(3553,z,E.x,E.y,K,Me,Ee,Re,H.image.data):H.isCompressedTexture?Z.compressedTexSubImage2D(3553,z,E.x,E.y,H.mipmaps[0].width,H.mipmaps[0].height,Ee,H.mipmaps[0].data):Z.texSubImage2D(3553,z,E.x,E.y,Ee,Re,H.image),z===0&&Y.generateMipmaps&&Z.generateMipmap(3553),le.unbindTexture()},this.copyTextureToTexture3D=function(E,H,Y,z,K=0){if(g.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Me=E.max.x-E.min.x+1,Ee=E.max.y-E.min.y+1,Re=E.max.z-E.min.z+1,Pe=L.convert(z.format),Ve=L.convert(z.type);let Oe;if(z.isData3DTexture)be.setTexture3D(z,0),Oe=32879;else if(z.isDataArrayTexture)be.setTexture2DArray(z,0),Oe=35866;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}Z.pixelStorei(37440,z.flipY),Z.pixelStorei(37441,z.premultiplyAlpha),Z.pixelStorei(3317,z.unpackAlignment);const ze=Z.getParameter(3314),ot=Z.getParameter(32878),fi=Z.getParameter(3316),qi=Z.getParameter(3315),Yi=Z.getParameter(32877),gn=Y.isCompressedTexture?Y.mipmaps[0]:Y.image;Z.pixelStorei(3314,gn.width),Z.pixelStorei(32878,gn.height),Z.pixelStorei(3316,E.min.x),Z.pixelStorei(3315,E.min.y),Z.pixelStorei(32877,E.min.z),Y.isDataTexture||Y.isData3DTexture?Z.texSubImage3D(Oe,K,H.x,H.y,H.z,Me,Ee,Re,Pe,Ve,gn.data):Y.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),Z.compressedTexSubImage3D(Oe,K,H.x,H.y,H.z,Me,Ee,Re,Pe,gn.data)):Z.texSubImage3D(Oe,K,H.x,H.y,H.z,Me,Ee,Re,Pe,Ve,gn),Z.pixelStorei(3314,ze),Z.pixelStorei(32878,ot),Z.pixelStorei(3316,fi),Z.pixelStorei(3315,qi),Z.pixelStorei(32877,Yi),K===0&&z.generateMipmaps&&Z.generateMipmap(Oe),le.unbindTexture()},this.initTexture=function(E){E.isCubeTexture?be.setTextureCube(E,0):E.isData3DTexture?be.setTexture3D(E,0):E.isDataArrayTexture||E.isCompressedArrayTexture?be.setTexture2DArray(E,0):be.setTexture2D(E,0),le.unbindTexture()},this.resetState=function(){_=0,y=0,x=null,le.reset(),B.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}class Ax extends yf{}Ax.prototype.isWebGL1Renderer=!0;class Cx extends qe{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.backgroundBlurriness=this.backgroundBlurriness),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class Dx{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=al,this.updateRange={offset:0,count:-1},this.version=0,this.uuid=dn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=dn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Lt=new D;class zl{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r===!0}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyMatrix4(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.applyNormalMatrix(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Lt.fromBufferAttribute(this,t),Lt.transformDirection(e),this.setXYZ(t,Lt.x,Lt.y,Lt.z);return this}setX(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ke(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=zn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=zn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=zn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=zn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ke(t,this.array),n=Ke(n,this.array),r=Ke(r,this.array),s=Ke(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new Ft(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zl(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will deinterleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const xu=new D,yu=new Xe,bu=new Xe,Px=new D,wu=new Fe;class Lx extends se{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode="attached",this.bindMatrix=new Fe,this.bindMatrixInverse=new Fe}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,this}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Xe,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode==="attached"?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode==="detached"?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}boneTransform(e,t){const n=this.skeleton,r=this.geometry;yu.fromBufferAttribute(r.attributes.skinIndex,e),bu.fromBufferAttribute(r.attributes.skinWeight,e),xu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const o=bu.getComponent(s);if(o!==0){const a=yu.getComponent(s);wu.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Px.copy(xu).applyMatrix4(wu),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class bf extends qe{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Rx extends Nt{constructor(e=null,t=1,n=1,r,s,o,a,c,l=St,u=St,f,h){super(null,o,a,c,l,u,r,s,f,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Mu=new Fe,Ix=new Fe;class Hl{constructor(e=[],t=[]){this.uuid=dn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.boneTextureSize=0,this.frame=-1,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new Fe)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new Fe;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,o=e.length;s<o;s++){const a=e[s]?e[s].matrixWorld:Ix;Mu.multiplyMatrices(a,t[s]),Mu.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new Hl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=sf(e),e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Rx(t,e,e,en,si);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this.boneTextureSize=e,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let o=t[s];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),o=new bf),this.bones.push(o),this.boneInverses.push(new Fe().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.5,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const o=t[r];e.bones.push(o.uuid);const a=n[r];e.boneInverses.push(a.toArray())}return e}}class Su extends Ft{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Tu=new Fe,Eu=new Fe,to=[],Fx=new Fe,Yr=new se;class Nx extends se{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Su(new Float32Array(n*16),16),this.instanceColor=null,this.count=n,this.frustumCulled=!1;for(let r=0;r<n;r++)this.setMatrixAt(r,Fx)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Yr.geometry=this.geometry,Yr.material=this.material,Yr.material!==void 0)for(let s=0;s<r;s++){this.getMatrixAt(s,Tu),Eu.multiplyMatrices(n,Tu),Yr.matrixWorld=Eu,Yr.raycast(e,to);for(let o=0,a=to.length;o<a;o++){const c=to[o];c.instanceId=s,c.object=this,t.push(c)}to.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Su(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}updateMorphTargets(){}dispose(){this.dispatchEvent({type:"dispose"})}}class Go extends Mn{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Se(16777215),this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Au=new D,Cu=new D,Du=new Fe,Ra=new Ho,no=new Fr;class un extends qe{constructor(e=new ht,t=new Go){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)Au.fromBufferAttribute(t,r-1),Cu.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=Au.distanceTo(Cu);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),no.copy(n.boundingSphere),no.applyMatrix4(r),no.radius+=s,e.ray.intersectsSphere(no)===!1)return;Du.copy(r).invert(),Ra.copy(e.ray).applyMatrix4(Du);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=new D,u=new D,f=new D,h=new D,d=this.isLineSegments?2:1,m=n.index,p=n.attributes.position;if(m!==null){const _=Math.max(0,o.start),y=Math.min(m.count,o.start+o.count);for(let x=_,v=y-1;x<v;x+=d){const w=m.getX(x),A=m.getX(x+1);if(l.fromBufferAttribute(p,w),u.fromBufferAttribute(p,A),Ra.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const b=e.ray.origin.distanceTo(h);b<e.near||b>e.far||t.push({distance:b,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}else{const _=Math.max(0,o.start),y=Math.min(p.count,o.start+o.count);for(let x=_,v=y-1;x<v;x+=d){if(l.fromBufferAttribute(p,x),u.fromBufferAttribute(p,x+1),Ra.distanceSqToSegment(l,u,h,f)>c)continue;h.applyMatrix4(this.matrixWorld);const A=e.ray.origin.distanceTo(h);A<e.near||A>e.far||t.push({distance:A,point:f.clone().applyMatrix4(this.matrixWorld),index:x,face:null,faceIndex:null,object:this})}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}const Pu=new D,Lu=new D;class wf extends un{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Pu.fromBufferAttribute(t,r),Lu.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Pu.distanceTo(Lu);e.setAttribute("lineDistance",new $e(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ox extends un{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Mf extends Mn{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Se(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ru=new Fe,hl=new Ho,io=new Fr,ro=new D;class kx extends qe{constructor(e=new ht,t=new Mf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),io.copy(n.boundingSphere),io.applyMatrix4(r),io.radius+=s,e.ray.intersectsSphere(io)===!1)return;Ru.copy(r).invert(),hl.copy(e.ray).applyMatrix4(Ru);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,f=n.attributes.position;if(l!==null){const h=Math.max(0,o.start),d=Math.min(l.count,o.start+o.count);for(let m=h,g=d;m<g;m++){const p=l.getX(m);ro.fromBufferAttribute(f,p),Iu(ro,p,c,r,e,t,this)}}else{const h=Math.max(0,o.start),d=Math.min(f.count,o.start+o.count);for(let m=h,g=d;m<g;m++)ro.fromBufferAttribute(f,m),Iu(ro,m,c,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function Iu(i,e,t,n,r,s,o){const a=hl.distanceSqToPoint(i);if(a<t){const c=new D;hl.closestPointToPoint(i,c),c.applyMatrix4(n);const l=r.ray.origin.distanceTo(c);if(l<r.near||l>r.far)return;s.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,object:o})}}class At extends ht{constructor(e=1,t=1,n=1,r=8,s=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:o,thetaStart:a,thetaLength:c};const l=this;r=Math.floor(r),s=Math.floor(s);const u=[],f=[],h=[],d=[];let m=0;const g=[],p=n/2;let _=0;y(),o===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new $e(f,3)),this.setAttribute("normal",new $e(h,3)),this.setAttribute("uv",new $e(d,2));function y(){const v=new D,w=new D;let A=0;const R=(t-e)/n;for(let b=0;b<=s;b++){const T=[],I=b/s,W=I*(t-e)+e;for(let j=0;j<=r;j++){const U=j/r,O=U*c+a,V=Math.sin(O),$=Math.cos(O);w.x=W*V,w.y=-I*n+p,w.z=W*$,f.push(w.x,w.y,w.z),v.set(V,R,$).normalize(),h.push(v.x,v.y,v.z),d.push(U,1-I),T.push(m++)}g.push(T)}for(let b=0;b<r;b++)for(let T=0;T<s;T++){const I=g[T][b],W=g[T+1][b],j=g[T+1][b+1],U=g[T][b+1];u.push(I,W,U),u.push(W,j,U),A+=6}l.addGroup(_,A,0),_+=A}function x(v){const w=m,A=new fe,R=new D;let b=0;const T=v===!0?e:t,I=v===!0?1:-1;for(let j=1;j<=r;j++)f.push(0,p*I,0),h.push(0,I,0),d.push(.5,.5),m++;const W=m;for(let j=0;j<=r;j++){const O=j/r*c+a,V=Math.cos(O),$=Math.sin(O);R.x=T*$,R.y=p*I,R.z=T*V,f.push(R.x,R.y,R.z),h.push(0,I,0),A.x=V*.5+.5,A.y=$*.5*I+.5,d.push(A.x,A.y),m++}for(let j=0;j<r;j++){const U=w+j,O=W+j;v===!0?u.push(O,O+1,U):u.push(O+1,O,U),b+=3}l.addGroup(_,b,v===!0?1:2),_+=b}}static fromJSON(e){return new At(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Wo extends ht{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],o=[];a(r),l(n),u(),this.setAttribute("position",new $e(s,3)),this.setAttribute("normal",new $e(s.slice(),3)),this.setAttribute("uv",new $e(o,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function a(y){const x=new D,v=new D,w=new D;for(let A=0;A<t.length;A+=3)d(t[A+0],x),d(t[A+1],v),d(t[A+2],w),c(x,v,w,y)}function c(y,x,v,w){const A=w+1,R=[];for(let b=0;b<=A;b++){R[b]=[];const T=y.clone().lerp(v,b/A),I=x.clone().lerp(v,b/A),W=A-b;for(let j=0;j<=W;j++)j===0&&b===A?R[b][j]=T:R[b][j]=T.clone().lerp(I,j/W)}for(let b=0;b<A;b++)for(let T=0;T<2*(A-b)-1;T++){const I=Math.floor(T/2);T%2===0?(h(R[b][I+1]),h(R[b+1][I]),h(R[b][I])):(h(R[b][I+1]),h(R[b+1][I+1]),h(R[b+1][I]))}}function l(y){const x=new D;for(let v=0;v<s.length;v+=3)x.x=s[v+0],x.y=s[v+1],x.z=s[v+2],x.normalize().multiplyScalar(y),s[v+0]=x.x,s[v+1]=x.y,s[v+2]=x.z}function u(){const y=new D;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const v=p(y)/2/Math.PI+.5,w=_(y)/Math.PI+.5;o.push(v,1-w)}m(),f()}function f(){for(let y=0;y<o.length;y+=6){const x=o[y+0],v=o[y+2],w=o[y+4],A=Math.max(x,v,w),R=Math.min(x,v,w);A>.9&&R<.1&&(x<.2&&(o[y+0]+=1),v<.2&&(o[y+2]+=1),w<.2&&(o[y+4]+=1))}}function h(y){s.push(y.x,y.y,y.z)}function d(y,x){const v=y*3;x.x=e[v+0],x.y=e[v+1],x.z=e[v+2]}function m(){const y=new D,x=new D,v=new D,w=new D,A=new fe,R=new fe,b=new fe;for(let T=0,I=0;T<s.length;T+=9,I+=6){y.set(s[T+0],s[T+1],s[T+2]),x.set(s[T+3],s[T+4],s[T+5]),v.set(s[T+6],s[T+7],s[T+8]),A.set(o[I+0],o[I+1]),R.set(o[I+2],o[I+3]),b.set(o[I+4],o[I+5]),w.copy(y).add(x).add(v).divideScalar(3);const W=p(w);g(A,I+0,y,W),g(R,I+2,x,W),g(b,I+4,v,W)}}function g(y,x,v,w){w<0&&y.x===1&&(o[x]=y.x-1),v.x===0&&v.z===0&&(o[x]=w/2/Math.PI+.5)}function p(y){return Math.atan2(y.z,-y.x)}function _(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}static fromJSON(e){return new Wo(e.vertices,e.indices,e.radius,e.details)}}class Vl extends Wo{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Vl(e.radius,e.detail)}}class pr extends Wo{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new pr(e.radius,e.detail)}}class Gl extends ht{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],f=new D,h=new D,d=[],m=[],g=[],p=[];for(let _=0;_<=n;_++){const y=[],x=_/n;let v=0;_==0&&o==0?v=.5/t:_==n&&c==Math.PI&&(v=-.5/t);for(let w=0;w<=t;w++){const A=w/t;f.x=-e*Math.cos(r+A*s)*Math.sin(o+x*a),f.y=e*Math.cos(o+x*a),f.z=e*Math.sin(r+A*s)*Math.sin(o+x*a),m.push(f.x,f.y,f.z),h.copy(f).normalize(),g.push(h.x,h.y,h.z),p.push(A+v,1-x),y.push(l++)}u.push(y)}for(let _=0;_<n;_++)for(let y=0;y<t;y++){const x=u[_][y+1],v=u[_][y],w=u[_+1][y],A=u[_+1][y+1];(_!==0||o>0)&&d.push(x,v,A),(_!==n-1||c<Math.PI)&&d.push(v,w,A)}this.setIndex(d),this.setAttribute("position",new $e(m,3)),this.setAttribute("normal",new $e(g,3)),this.setAttribute("uv",new $e(p,2))}static fromJSON(e){return new Gl(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Si extends ht{constructor(e=1,t=.4,n=8,r=6,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const o=[],a=[],c=[],l=[],u=new D,f=new D,h=new D;for(let d=0;d<=n;d++)for(let m=0;m<=r;m++){const g=m/r*s,p=d/n*Math.PI*2;f.x=(e+t*Math.cos(p))*Math.cos(g),f.y=(e+t*Math.cos(p))*Math.sin(g),f.z=t*Math.sin(p),a.push(f.x,f.y,f.z),u.x=e*Math.cos(g),u.y=e*Math.sin(g),h.subVectors(f,u).normalize(),c.push(h.x,h.y,h.z),l.push(m/r),l.push(d/n)}for(let d=1;d<=n;d++)for(let m=1;m<=r;m++){const g=(r+1)*d+m-1,p=(r+1)*(d-1)+m-1,_=(r+1)*(d-1)+m,y=(r+1)*d+m;o.push(g,p,y),o.push(p,_,y)}this.setIndex(o),this.setAttribute("position",new $e(a,3)),this.setAttribute("normal",new $e(c,3)),this.setAttribute("uv",new $e(l,2))}static fromJSON(e){return new Si(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class jo extends Mn{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Se(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Se(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Nl,this.normalScale=new fe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Wi extends jo{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new fe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Dt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Se(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Se(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Se(1,1,1),this.specularColorMap=null,this._sheen=0,this._clearcoat=0,this._iridescence=0,this._transmission=0,this.setValues(e)}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ei(i,e,t){return Sf(i)?new i.constructor(i.subarray(e,t!==void 0?t:i.length)):i.slice(e,t)}function so(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Sf(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Bx(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function Fu(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,o=0;o!==n;++s){const a=t[s]*e;for(let c=0;c!==e;++c)r[o++]=i[a+c]}return r}function Tf(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let o=s[n];if(o!==void 0)if(Array.isArray(o))do o=s[n],o!==void 0&&(e.push(s.time),t.push.apply(t,o)),s=i[r++];while(s!==void 0);else if(o.toArray!==void 0)do o=s[n],o!==void 0&&(e.push(s.time),o.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do o=s[n],o!==void 0&&(e.push(s.time),t.push(o)),s=i[r++];while(s!==void 0)}class As{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let o;n:{i:if(!(e<r)){for(let a=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(s=r,r=t[++n],e<r)break t}o=t.length;break n}if(!(e>=s)){const a=t[1];e<a&&(n=2,s=a);for(let c=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(r=s,s=t[--n-1],e>=s)break t}o=n,n=0;break n}break e}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let o=0;o!==r;++o)t[o]=n[s+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ux extends As{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Oc,endingEnd:Oc}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,o=e+1,a=r[s],c=r[o];if(a===void 0)switch(this.getSettings_().endingStart){case kc:s=e,a=2*t-n;break;case Bc:s=r.length-2,a=t+r[s]-r[s+1];break;default:s=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case kc:o=e,c=2*n-t;break;case Bc:o=1,c=n+r[1]-r[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=s*u,this._offsetNext=o*u}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,f=this._offsetNext,h=this._weightPrev,d=this._weightNext,m=(n-t)/(r-t),g=m*m,p=g*m,_=-h*p+2*h*g-h*m,y=(1+h)*p+(-1.5-2*h)*g+(-.5+h)*m+1,x=(-1-d)*p+(1.5+d)*g+.5*m,v=d*p-d*g;for(let w=0;w!==a;++w)s[w]=_*o[u+w]+y*o[l+w]+x*o[c+w]+v*o[f+w];return s}}class zx extends As{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(r-t),f=1-u;for(let h=0;h!==a;++h)s[h]=o[l+h]*f+o[c+h]*u;return s}}class Hx extends As{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Cn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=so(t,this.TimeBufferType),this.values=so(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:so(e.times,Array),values:so(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Hx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new zx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ux(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case ps:t=this.InterpolantFactoryMethodDiscrete;break;case Mr:t=this.InterpolantFactoryMethodLinear;break;case sa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ps;case this.InterpolantFactoryMethodLinear:return Mr;case this.InterpolantFactoryMethodSmooth:return sa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,o=r-1;for(;s!==r&&n[s]<e;)++s;for(;o!==-1&&n[o]>t;)--o;if(++o,s!==0||o!==r){s>=o&&(o=Math.max(o,1),s=o-1);const a=this.getValueSize();this.times=ei(n,s,o),this.values=ei(this.values,s*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==s;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(r!==void 0&&Sf(r))for(let a=0,c=r.length;a!==c;++a){const l=r[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=ei(this.times),t=ei(this.values),n=this.getValueSize(),r=this.getInterpolation()===sa,s=e.length-1;let o=1;for(let a=1;a<s;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(r)c=!0;else{const f=a*n,h=f-n,d=f+n;for(let m=0;m!==n;++m){const g=t[f+m];if(g!==t[h+m]||g!==t[d+m]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const f=a*n,h=o*n;for(let d=0;d!==n;++d)t[h+d]=t[f+d]}++o}}if(s>0){e[o]=e[s];for(let a=s*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=ei(e,0,o),this.values=ei(t,0,o*n)):(this.times=e,this.values=t),this}clone(){const e=ei(this.times,0),t=ei(this.values,0),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Cn.prototype.TimeBufferType=Float32Array;Cn.prototype.ValueBufferType=Float32Array;Cn.prototype.DefaultInterpolation=Mr;class Br extends Cn{}Br.prototype.ValueTypeName="bool";Br.prototype.ValueBufferType=Array;Br.prototype.DefaultInterpolation=ps;Br.prototype.InterpolantFactoryMethodLinear=void 0;Br.prototype.InterpolantFactoryMethodSmooth=void 0;class Ef extends Cn{}Ef.prototype.ValueTypeName="color";class _s extends Cn{}_s.prototype.ValueTypeName="number";class Vx extends As{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(r-t);let l=e*a;for(let u=l+a;l!==u;l+=4)ut.slerpFlat(s,0,o,l-a,o,l,c);return s}}class Bi extends Cn{InterpolantFactoryMethodLinear(e){return new Vx(this.times,this.values,this.getValueSize(),e)}}Bi.prototype.ValueTypeName="quaternion";Bi.prototype.DefaultInterpolation=Mr;Bi.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends Cn{}Ur.prototype.ValueTypeName="string";Ur.prototype.ValueBufferType=Array;Ur.prototype.DefaultInterpolation=ps;Ur.prototype.InterpolantFactoryMethodLinear=void 0;Ur.prototype.InterpolantFactoryMethodSmooth=void 0;class vs extends Cn{}vs.prototype.ValueTypeName="vector";class Gx{constructor(e,t=-1,n,r=um){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=dn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(jx(n[o]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,o=n.length;s!==o;++s)t.push(Cn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,o=[];for(let a=0;a<s;a++){let c=[],l=[];c.push((a+s-1)%s,a,(a+1)%s),l.push(0,1,0);const u=Bx(c);c=Fu(c,1,u),l=Fu(l,1,u),!r&&c[0]===0&&(c.push(s),l.push(l[0])),o.push(new _s(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(s);if(u&&u.length>1){const f=u[1];let h=r[f];h||(r[f]=h=[]),h.push(l)}}const o=[];for(const a in r)o.push(this.CreateFromMorphTargetSequence(a,r[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(f,h,d,m,g){if(d.length!==0){const p=[],_=[];Tf(d,p,_,m),p.length!==0&&g.push(new f(h,p,_))}},r=[],s=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let f=0;f<l.length;f++){const h=l[f].keys;if(!(!h||h.length===0))if(h[0].morphTargets){const d={};let m;for(m=0;m<h.length;m++)if(h[m].morphTargets)for(let g=0;g<h[m].morphTargets.length;g++)d[h[m].morphTargets[g]]=-1;for(const g in d){const p=[],_=[];for(let y=0;y!==h[m].morphTargets.length;++y){const x=h[m];p.push(x.time),_.push(x.morphTarget===g?1:0)}r.push(new _s(".morphTargetInfluence["+g+"]",p,_))}c=d.length*o}else{const d=".bones["+t[f].name+"]";n(vs,d+".position",h,"pos",r),n(Bi,d+".quaternion",h,"rot",r),n(vs,d+".scale",h,"scl",r)}}return r.length===0?null:new this(s,c,r,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Wx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return _s;case"vector":case"vector2":case"vector3":case"vector4":return vs;case"color":return Ef;case"quaternion":return Bi;case"bool":case"boolean":return Br;case"string":return Ur}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function jx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Wx(i.type);if(i.times===void 0){const t=[],n=[];Tf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Tr={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Xx{constructor(e,t,n){const r=this;let s=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,f){return l.push(u,f),this},this.removeHandler=function(u){const f=l.indexOf(u);return f!==-1&&l.splice(f,2),this},this.getHandler=function(u){for(let f=0,h=l.length;f<h;f+=2){const d=l[f],m=l[f+1];if(d.global&&(d.lastIndex=0),d.test(u))return m}return null}}}const qx=new Xx;class Cs{constructor(e){this.manager=e!==void 0?e:qx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Nn={};class Yx extends Error{constructor(e,t){super(e),this.response=t}}class Af extends Cs{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Tr.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(Nn[e]!==void 0){Nn[e].push({onLoad:t,onProgress:n,onError:r});return}Nn[e]=[],Nn[e].push({onLoad:t,onProgress:n,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Nn[e],f=l.body.getReader(),h=l.headers.get("Content-Length"),d=h?parseInt(h):0,m=d!==0;let g=0;const p=new ReadableStream({start(_){y();function y(){f.read().then(({done:x,value:v})=>{if(x)_.close();else{g+=v.byteLength;const w=new ProgressEvent("progress",{lengthComputable:m,loaded:g,total:d});for(let A=0,R=u.length;A<R;A++){const b=u[A];b.onProgress&&b.onProgress(w)}_.enqueue(v),y()}})}}});return new Response(p)}else throw new Yx(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),h=f&&f[1]?f[1].toLowerCase():void 0,d=new TextDecoder(h);return l.arrayBuffer().then(m=>d.decode(m))}}}).then(l=>{Tr.add(e,l);const u=Nn[e];delete Nn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onLoad&&d.onLoad(l)}}).catch(l=>{const u=Nn[e];if(u===void 0)throw this.manager.itemError(e),l;delete Nn[e];for(let f=0,h=u.length;f<h;f++){const d=u[f];d.onError&&d.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $x extends Cs{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Tr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a=gs("img");function c(){u(),Tr.add(e,this),t&&t(this),s.manager.itemEnd(e)}function l(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class Zx extends Cs{constructor(e){super(e)}load(e,t,n,r){const s=new Nt,o=new $x(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class Xo extends qe{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Se(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Ia=new Fe,Nu=new D,Ou=new D;class Wl{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new fe(512,512),this.map=null,this.mapPass=null,this.matrix=new Fe,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Bl,this._frameExtents=new fe(1,1),this._viewportCount=1,this._viewports=[new Xe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Nu.setFromMatrixPosition(e.matrixWorld),t.position.copy(Nu),Ou.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Ou),t.updateMatrixWorld(),Ia.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Ia),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Ia)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Kx extends Wl{constructor(){super(new It(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=ms*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Qx extends Xo{constructor(e,t,n=0,r=Math.PI/3,s=0,o=1){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(qe.DefaultUp),this.updateMatrix(),this.target=new qe,this.distance=n,this.angle=r,this.penumbra=s,this.decay=o,this.map=null,this.shadow=new Kx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const ku=new Fe,$r=new D,Fa=new D;class Jx extends Wl{constructor(){super(new It(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new fe(4,2),this._viewportCount=6,this._viewports=[new Xe(2,1,1,1),new Xe(0,1,1,1),new Xe(3,1,1,1),new Xe(1,1,1,1),new Xe(3,0,1,1),new Xe(1,0,1,1)],this._cubeDirections=[new D(1,0,0),new D(-1,0,0),new D(0,0,1),new D(0,0,-1),new D(0,1,0),new D(0,-1,0)],this._cubeUps=[new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,1,0),new D(0,0,1),new D(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),$r.setFromMatrixPosition(e.matrixWorld),n.position.copy($r),Fa.copy(n.position),Fa.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Fa),n.updateMatrixWorld(),r.makeTranslation(-$r.x,-$r.y,-$r.z),ku.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(ku)}}class ey extends Xo{constructor(e,t,n=0,r=1){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new Jx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ty extends Wl{constructor(){super(new Es(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class fl extends Xo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(qe.DefaultUp),this.updateMatrix(),this.target=new qe,this.shadow=new ty}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Bu extends Xo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Li{static decodeText(e){if(typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class ny extends Cs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=Tr.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(o),s.manager.itemEnd(e)},0),o;const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader,fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){Tr.add(e,c),t&&t(c),s.manager.itemEnd(e)}).catch(function(c){r&&r(c),s.manager.itemError(e),s.manager.itemEnd(e)}),s.manager.itemStart(e)}}class iy{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Uu(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Uu();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Uu(){return(typeof performance>"u"?Date:performance).now()}const jl="\\[\\]\\.:\\/",ry=new RegExp("["+jl+"]","g"),Xl="[^"+jl+"]",sy="[^"+jl.replace("\\.","")+"]",oy=/((?:WC+[\/:])*)/.source.replace("WC",Xl),ay=/(WCOD+)?/.source.replace("WCOD",sy),ly=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Xl),cy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Xl),uy=new RegExp("^"+oy+ay+ly+cy+"$"),hy=["material","materials","bones","map"];class fy{constructor(e,t,n){const r=n||Ye.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ye{constructor(e,t,n){this.path=t,this.parsedPath=n||Ye.parseTrackName(t),this.node=Ye.findNode(e,this.parsedPath.nodeName)||e,this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ye.Composite(e,t,n):new Ye(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(ry,"")}static parseTrackName(e){const t=uy.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);hy.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=Ye.findNode(this.rootNode,t.nodeName)||this.rootNode,this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[r];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ye.Composite=fy;Ye.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ye.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ye.prototype.GetterByBindingType=[Ye.prototype._getValue_direct,Ye.prototype._getValue_array,Ye.prototype._getValue_arrayElement,Ye.prototype._getValue_toArray];Ye.prototype.SetterByBindingTypeAndVersioning=[[Ye.prototype._setValue_direct,Ye.prototype._setValue_direct_setNeedsUpdate,Ye.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_array,Ye.prototype._setValue_array_setNeedsUpdate,Ye.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_arrayElement,Ye.prototype._setValue_arrayElement_setNeedsUpdate,Ye.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ye.prototype._setValue_fromArray,Ye.prototype._setValue_fromArray_setNeedsUpdate,Ye.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class Cf{constructor(e,t,n=0,r=1/0){this.ray=new Ho(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new kl,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}intersectObject(e,t=!0,n=[]){return dl(e,this,n,t),n.sort(zu),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)dl(e[r],this,n,t);return n.sort(zu),n}}function zu(i,e){return i.distance-e.distance}function dl(i,e,t,n){if(i.layers.test(e.layers)&&i.raycast(e,t),n===!0){const r=i.children;for(let s=0,o=r.length;s<o;s++)dl(r[s],e,t,!0)}}class Hu{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class dy extends wf{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new ht;r.setAttribute("position",new $e(t,3)),r.setAttribute("color",new $e(n,3));const s=new Go({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new Se,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Il}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Il);const Eo={uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`};class Ds{constructor(){this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const py=new Es(-1,1,1,-1,0,1),ql=new ht;ql.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3));ql.setAttribute("uv",new $e([0,2,0,0,2,0],2));class Df{constructor(e){this._mesh=new se(ql,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,py)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class xs extends Ds{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof mt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=To.clone(e.uniforms),this.material=new mt({defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Df(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Vu extends Ds{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const r=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(r.REPLACE,r.REPLACE,r.REPLACE),s.buffers.stencil.setFunc(r.ALWAYS,o,4294967295),s.buffers.stencil.setClear(a),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(r.EQUAL,1,4294967295),s.buffers.stencil.setOp(r.KEEP,r.KEEP,r.KEEP),s.buffers.stencil.setLocked(!0)}}class my extends Ds{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Pf{constructor(e,t){if(this.renderer=e,t===void 0){const n=e.getSize(new fe);this._pixelRatio=e.getPixelRatio(),this._width=n.width,this._height=n.height,t=new pn(this._width*this._pixelRatio,this._height*this._pixelRatio),t.texture.name="EffectComposer.rt1"}else this._pixelRatio=1,this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],Eo===void 0&&console.error("THREE.EffectComposer relies on CopyShader"),xs===void 0&&console.error("THREE.EffectComposer relies on ShaderPass"),this.copyPass=new xs(Eo),this.clock=new iy}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let r=0,s=this.passes.length;r<s;r++){const o=this.passes[r];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(r),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Vu!==void 0&&(o instanceof Vu?n=!0:o instanceof my&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new fe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,r=this._height*this._pixelRatio;this.renderTarget1.setSize(n,r),this.renderTarget2.setSize(n,r);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,r)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}new Es(-1,1,1,-1,0,1);const Lf=new ht;Lf.setAttribute("position",new $e([-1,3,0,-1,-1,0,3,-1,0],3));Lf.setAttribute("uv",new $e([0,2,0,0,2,0],2));class gy extends Ds{constructor(e,t,n,r,s){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=r,this.clearAlpha=s!==void 0?s:0,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Se}render(e,t,n){const r=e.autoClear;e.autoClear=!1;let s,o;this.overrideMaterial!==void 0&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor&&(e.getClearColor(this._oldClearColor),s=e.getClearAlpha(),e.setClearColor(this.clearColor,this.clearAlpha)),this.clearDepth&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor&&e.setClearColor(this._oldClearColor,s),this.overrideMaterial!==void 0&&(this.scene.overrideMaterial=o),e.autoClear=r}}const Gu={shaderID:"luminosityHighPass",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Se(0)},defaultOpacity:{value:0}},vertexShader:`

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

			vec3 luma = vec3( 0.299, 0.587, 0.114 );

			float v = dot( texel.xyz, luma );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Ui extends Ds{constructor(e,t,n,r){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=r,this.resolution=e!==void 0?new fe(e.x,e.y):new fe(256,256),this.clearColor=new Se(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new pn(s,o),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const h=new pn(s,o);h.texture.name="UnrealBloomPass.h"+f,h.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(h);const d=new pn(s,o);d.texture.name="UnrealBloomPass.v"+f,d.texture.generateMipmaps=!1,this.renderTargetsVertical.push(d),s=Math.round(s/2),o=Math.round(o/2)}Gu===void 0&&console.error("THREE.UnrealBloomPass relies on LuminosityHighPassShader");const a=Gu;this.highPassUniforms=To.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=r,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new mt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,defines:{}}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];s=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.texSize.value=new fe(s,o),s=Math.round(s/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1,this.compositeMaterial.needsUpdate=!0;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1),new D(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,Eo===void 0&&console.error("THREE.UnrealBloomPass relies on CopyShader");const u=Eo;this.copyUniforms=To.clone(u.uniforms),this.copyUniforms.opacity.value=1,this.materialCopy=new mt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:bo,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Se,this.oldClearAlpha=1,this.basic=new fn,this.fsQuad=new Df(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.materialCopy.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),r=Math.round(t/2);this.renderTargetBright.setSize(n,r);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,r),this.renderTargetsVertical[s].setSize(n,r),this.separableBlurMaterials[s].uniforms.texSize.value=new fe(n,r),n=Math.round(n/2),r=Math.round(r/2)}render(e,t,n,r,s){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=Ui.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Ui.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.materialCopy,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){return new mt({defines:{KERNEL_RADIUS:e,SIGMA:e},uniforms:{colorTexture:{value:null},texSize:{value:new fe(.5,.5)},direction:{value:new fe(.5,.5)}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 texSize;
				uniform vec2 direction;

				float gaussianPdf(in float x, in float sigma) {
					return 0.39894 * exp( -0.5 * x * x/( sigma * sigma))/sigma;
				}
				void main() {
					vec2 invSize = 1.0 / texSize;
					float fSigma = float(SIGMA);
					float weightSum = gaussianPdf(0.0, fSigma);
					vec3 diffuseSum = texture2D( colorTexture, vUv).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianPdf(x, fSigma);
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new mt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Ui.BlurDirectionX=new fe(1,0);Ui.BlurDirectionY=new fe(0,1);class Rf{constructor(e=Math){this.grad3=[[1,1,0],[-1,1,0],[1,-1,0],[-1,-1,0],[1,0,1],[-1,0,1],[1,0,-1],[-1,0,-1],[0,1,1],[0,-1,1],[0,1,-1],[0,-1,-1]],this.grad4=[[0,1,1,1],[0,1,1,-1],[0,1,-1,1],[0,1,-1,-1],[0,-1,1,1],[0,-1,1,-1],[0,-1,-1,1],[0,-1,-1,-1],[1,0,1,1],[1,0,1,-1],[1,0,-1,1],[1,0,-1,-1],[-1,0,1,1],[-1,0,1,-1],[-1,0,-1,1],[-1,0,-1,-1],[1,1,0,1],[1,1,0,-1],[1,-1,0,1],[1,-1,0,-1],[-1,1,0,1],[-1,1,0,-1],[-1,-1,0,1],[-1,-1,0,-1],[1,1,1,0],[1,1,-1,0],[1,-1,1,0],[1,-1,-1,0],[-1,1,1,0],[-1,1,-1,0],[-1,-1,1,0],[-1,-1,-1,0]],this.p=[];for(let t=0;t<256;t++)this.p[t]=Math.floor(e.random()*256);this.perm=[];for(let t=0;t<512;t++)this.perm[t]=this.p[t&255];this.simplex=[[0,1,2,3],[0,1,3,2],[0,0,0,0],[0,2,3,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,3,0],[0,2,1,3],[0,0,0,0],[0,3,1,2],[0,3,2,1],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,3,2,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[1,2,0,3],[0,0,0,0],[1,3,0,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,3,0,1],[2,3,1,0],[1,0,2,3],[1,0,3,2],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,3,1],[0,0,0,0],[2,1,3,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0],[2,0,1,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,0,1,2],[3,0,2,1],[0,0,0,0],[3,1,2,0],[2,1,0,3],[0,0,0,0],[0,0,0,0],[0,0,0,0],[3,1,0,2],[0,0,0,0],[3,2,0,1],[3,2,1,0]]}dot(e,t,n){return e[0]*t+e[1]*n}dot3(e,t,n,r){return e[0]*t+e[1]*n+e[2]*r}dot4(e,t,n,r,s){return e[0]*t+e[1]*n+e[2]*r+e[3]*s}noise(e,t){let n,r,s;const o=.5*(Math.sqrt(3)-1),a=(e+t)*o,c=Math.floor(e+a),l=Math.floor(t+a),u=(3-Math.sqrt(3))/6,f=(c+l)*u,h=c-f,d=l-f,m=e-h,g=t-d;let p,_;m>g?(p=1,_=0):(p=0,_=1);const y=m-p+u,x=g-_+u,v=m-1+2*u,w=g-1+2*u,A=c&255,R=l&255,b=this.perm[A+this.perm[R]]%12,T=this.perm[A+p+this.perm[R+_]]%12,I=this.perm[A+1+this.perm[R+1]]%12;let W=.5-m*m-g*g;W<0?n=0:(W*=W,n=W*W*this.dot(this.grad3[b],m,g));let j=.5-y*y-x*x;j<0?r=0:(j*=j,r=j*j*this.dot(this.grad3[T],y,x));let U=.5-v*v-w*w;return U<0?s=0:(U*=U,s=U*U*this.dot(this.grad3[I],v,w)),70*(n+r+s)}noise3d(e,t,n){let r,s,o,a;const c=.3333333333333333,l=(e+t+n)*c,u=Math.floor(e+l),f=Math.floor(t+l),h=Math.floor(n+l),d=1/6,m=(u+f+h)*d,g=u-m,p=f-m,_=h-m,y=e-g,x=t-p,v=n-_;let w,A,R,b,T,I;y>=x?x>=v?(w=1,A=0,R=0,b=1,T=1,I=0):y>=v?(w=1,A=0,R=0,b=1,T=0,I=1):(w=0,A=0,R=1,b=1,T=0,I=1):x<v?(w=0,A=0,R=1,b=0,T=1,I=1):y<v?(w=0,A=1,R=0,b=0,T=1,I=1):(w=0,A=1,R=0,b=1,T=1,I=0);const W=y-w+d,j=x-A+d,U=v-R+d,O=y-b+2*d,V=x-T+2*d,$=v-I+2*d,ee=y-1+3*d,X=x-1+3*d,F=v-1+3*d,k=u&255,te=f&255,J=h&255,ie=this.perm[k+this.perm[te+this.perm[J]]]%12,ue=this.perm[k+w+this.perm[te+A+this.perm[J+R]]]%12,G=this.perm[k+b+this.perm[te+T+this.perm[J+I]]]%12,Z=this.perm[k+1+this.perm[te+1+this.perm[J+1]]]%12;let Ae=.6-y*y-x*x-v*v;Ae<0?r=0:(Ae*=Ae,r=Ae*Ae*this.dot3(this.grad3[ie],y,x,v));let ve=.6-W*W-j*j-U*U;ve<0?s=0:(ve*=ve,s=ve*ve*this.dot3(this.grad3[ue],W,j,U));let ye=.6-O*O-V*V-$*$;ye<0?o=0:(ye*=ye,o=ye*ye*this.dot3(this.grad3[G],O,V,$));let le=.6-ee*ee-X*X-F*F;return le<0?a=0:(le*=le,a=le*le*this.dot3(this.grad3[Z],ee,X,F)),32*(r+s+o+a)}noise4d(e,t,n,r){const s=this.grad4,o=this.simplex,a=this.perm,c=(Math.sqrt(5)-1)/4,l=(5-Math.sqrt(5))/20;let u,f,h,d,m;const g=(e+t+n+r)*c,p=Math.floor(e+g),_=Math.floor(t+g),y=Math.floor(n+g),x=Math.floor(r+g),v=(p+_+y+x)*l,w=p-v,A=_-v,R=y-v,b=x-v,T=e-w,I=t-A,W=n-R,j=r-b,U=T>I?32:0,O=T>W?16:0,V=I>W?8:0,$=T>j?4:0,ee=I>j?2:0,X=W>j?1:0,F=U+O+V+$+ee+X,k=o[F][0]>=3?1:0,te=o[F][1]>=3?1:0,J=o[F][2]>=3?1:0,ie=o[F][3]>=3?1:0,ue=o[F][0]>=2?1:0,G=o[F][1]>=2?1:0,Z=o[F][2]>=2?1:0,Ae=o[F][3]>=2?1:0,ve=o[F][0]>=1?1:0,ye=o[F][1]>=1?1:0,le=o[F][2]>=1?1:0,Be=o[F][3]>=1?1:0,Te=T-k+l,be=I-te+l,Qe=W-J+l,it=j-ie+l,et=T-ue+2*l,ft=I-G+2*l,tt=W-Z+2*l,ke=j-Ae+2*l,vt=T-ve+3*l,xt=I-ye+3*l,C=W-le+3*l,M=j-Be+3*l,S=T-1+4*l,P=I-1+4*l,Q=W-1+4*l,ae=j-1+4*l,me=p&255,L=_&255,B=y&255,ce=x&255,de=a[me+a[L+a[B+a[ce]]]]%32,he=a[me+k+a[L+te+a[B+J+a[ce+ie]]]]%32,_e=a[me+ue+a[L+G+a[B+Z+a[ce+Ae]]]]%32,ge=a[me+ve+a[L+ye+a[B+le+a[ce+Be]]]]%32,Ne=a[me+1+a[L+1+a[B+1+a[ce+1]]]]%32;let Ce=.6-T*T-I*I-W*W-j*j;Ce<0?u=0:(Ce*=Ce,u=Ce*Ce*this.dot4(s[de],T,I,W,j));let Ue=.6-Te*Te-be*be-Qe*Qe-it*it;Ue<0?f=0:(Ue*=Ue,f=Ue*Ue*this.dot4(s[he],Te,be,Qe,it));let N=.6-et*et-ft*ft-tt*tt-ke*ke;N<0?h=0:(N*=N,h=N*N*this.dot4(s[_e],et,ft,tt,ke));let q=.6-vt*vt-xt*xt-C*C-M*M;q<0?d=0:(q*=q,d=q*q*this.dot4(s[ge],vt,xt,C,M));let ne=.6-S*S-P*P-Q*Q-ae*ae;return ne<0?m=0:(ne*=ne,m=ne*ne*this.dot4(s[Ne],S,P,Q,ae)),27*(u+f+h+d+m)}}const zt=new Set,If=new Set,qo=new Set,ys=30,Wu=i=>{let e;const t=new Set,n=(c,l)=>{const u=typeof c=="function"?c(e):c;if(!Object.is(u,e)){const f=e;e=l??typeof u!="object"?u:Object.assign({},e,u),t.forEach(h=>h(e,f))}},r=()=>e,a={setState:n,getState:r,subscribe:c=>(t.add(c),()=>t.delete(c)),destroy:()=>t.clear()};return e=i(n,r,a),a},_y=i=>i?Wu(i):Wu;var Ps,xe,Ff,ls,ju,Nf,Ao={},Of=[],vy=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function Hn(i,e){for(var t in e)i[t]=e[t];return i}function kf(i){var e=i.parentNode;e&&e.removeChild(i)}function En(i,e,t){var n,r,s,o={};for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:o[s]=e[s];if(arguments.length>2&&(o.children=arguments.length>3?Ps.call(arguments,2):t),typeof i=="function"&&i.defaultProps!=null)for(s in i.defaultProps)o[s]===void 0&&(o[s]=i.defaultProps[s]);return cs(i,o,n,r,null)}function cs(i,e,t,n,r){var s={type:i,props:e,key:t,ref:n,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:r??++Ff};return r==null&&xe.vnode!=null&&xe.vnode(s),s}function Bf(){return{current:null}}function Ht(i){return i.children}function mn(i,e){this.props=i,this.context=e}function bs(i,e){if(e==null)return i.__?bs(i.__,i.__.__k.indexOf(i)+1):null;for(var t;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null)return t.__e;return typeof i.type=="function"?bs(i):null}function Uf(i){var e,t;if((i=i.__)!=null&&i.__c!=null){for(i.__e=i.__c.base=null,e=0;e<i.__k.length;e++)if((t=i.__k[e])!=null&&t.__e!=null){i.__e=i.__c.base=t.__e;break}return Uf(i)}}function pl(i){(!i.__d&&(i.__d=!0)&&ls.push(i)&&!Co.__r++||ju!==xe.debounceRendering)&&((ju=xe.debounceRendering)||setTimeout)(Co)}function Co(){for(var i;Co.__r=ls.length;)i=ls.sort(function(e,t){return e.__v.__b-t.__v.__b}),ls=[],i.some(function(e){var t,n,r,s,o,a;e.__d&&(o=(s=(t=e).__v).__e,(a=t.__P)&&(n=[],(r=Hn({},s)).__v=s.__v+1,Yl(a,s,r,t.__n,a.ownerSVGElement!==void 0,s.__h!=null?[o]:null,n,o??bs(s),s.__h),Gf(n,s),s.__e!=o&&Uf(s)))})}function zf(i,e,t,n,r,s,o,a,c,l){var u,f,h,d,m,g,p,_=n&&n.__k||Of,y=_.length;for(t.__k=[],u=0;u<e.length;u++)if((d=t.__k[u]=(d=e[u])==null||typeof d=="boolean"?null:typeof d=="string"||typeof d=="number"||typeof d=="bigint"?cs(null,d,null,null,d):Array.isArray(d)?cs(Ht,{children:d},null,null,null):d.__b>0?cs(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)!=null){if(d.__=t,d.__b=t.__b+1,(h=_[u])===null||h&&d.key==h.key&&d.type===h.type)_[u]=void 0;else for(f=0;f<y;f++){if((h=_[f])&&d.key==h.key&&d.type===h.type){_[f]=void 0;break}h=null}Yl(i,d,h=h||Ao,r,s,o,a,c,l),m=d.__e,(f=d.ref)&&h.ref!=f&&(p||(p=[]),h.ref&&p.push(h.ref,null,d),p.push(f,d.__c||m,d)),m!=null?(g==null&&(g=m),typeof d.type=="function"&&d.__k===h.__k?d.__d=c=Hf(d,c,i):c=Vf(i,d,h,_,m,c),typeof t.type=="function"&&(t.__d=c)):c&&h.__e==c&&c.parentNode!=i&&(c=bs(h))}for(t.__e=g,u=y;u--;)_[u]!=null&&jf(_[u],_[u]);if(p)for(u=0;u<p.length;u++)Wf(p[u],p[++u],p[++u])}function Hf(i,e,t){for(var n,r=i.__k,s=0;r&&s<r.length;s++)(n=r[s])&&(n.__=i,e=typeof n.type=="function"?Hf(n,e,t):Vf(t,n,n,r,n.__e,e));return e}function Gn(i,e){return e=e||[],i==null||typeof i=="boolean"||(Array.isArray(i)?i.some(function(t){Gn(t,e)}):e.push(i)),e}function Vf(i,e,t,n,r,s){var o,a,c;if(e.__d!==void 0)o=e.__d,e.__d=void 0;else if(t==null||r!=s||r.parentNode==null)e:if(s==null||s.parentNode!==i)i.appendChild(r),o=null;else{for(a=s,c=0;(a=a.nextSibling)&&c<n.length;c+=2)if(a==r)break e;i.insertBefore(r,s),o=s}return o!==void 0?o:r.nextSibling}function xy(i,e,t,n,r){var s;for(s in t)s==="children"||s==="key"||s in e||Do(i,s,null,t[s],n);for(s in e)r&&typeof e[s]!="function"||s==="children"||s==="key"||s==="value"||s==="checked"||t[s]===e[s]||Do(i,s,e[s],t[s],n)}function Xu(i,e,t){e[0]==="-"?i.setProperty(e,t):i[e]=t==null?"":typeof t!="number"||vy.test(e)?t:t+"px"}function Do(i,e,t,n,r){var s;e:if(e==="style")if(typeof t=="string")i.style.cssText=t;else{if(typeof n=="string"&&(i.style.cssText=n=""),n)for(e in n)t&&e in t||Xu(i.style,e,"");if(t)for(e in t)n&&t[e]===n[e]||Xu(i.style,e,t[e])}else if(e[0]==="o"&&e[1]==="n")s=e!==(e=e.replace(/Capture$/,"")),e=e.toLowerCase()in i?e.toLowerCase().slice(2):e.slice(2),i.l||(i.l={}),i.l[e+s]=t,t?n||i.addEventListener(e,s?Yu:qu,s):i.removeEventListener(e,s?Yu:qu,s);else if(e!=="dangerouslySetInnerHTML"){if(r)e=e.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(e!=="href"&&e!=="list"&&e!=="form"&&e!=="tabIndex"&&e!=="download"&&e in i)try{i[e]=t??"";break e}catch{}typeof t=="function"||(t==null||t===!1&&e.indexOf("-")==-1?i.removeAttribute(e):i.setAttribute(e,t))}}function qu(i){this.l[i.type+!1](xe.event?xe.event(i):i)}function Yu(i){this.l[i.type+!0](xe.event?xe.event(i):i)}function Yl(i,e,t,n,r,s,o,a,c){var l,u,f,h,d,m,g,p,_,y,x,v,w,A,R,b=e.type;if(e.constructor!==void 0)return null;t.__h!=null&&(c=t.__h,a=e.__e=t.__e,e.__h=null,s=[a]),(l=xe.__b)&&l(e);try{e:if(typeof b=="function"){if(p=e.props,_=(l=b.contextType)&&n[l.__c],y=l?_?_.props.value:l.__:n,t.__c?g=(u=e.__c=t.__c).__=u.__E:("prototype"in b&&b.prototype.render?e.__c=u=new b(p,y):(e.__c=u=new mn(p,y),u.constructor=b,u.render=by),_&&_.sub(u),u.props=p,u.state||(u.state={}),u.context=y,u.__n=n,f=u.__d=!0,u.__h=[],u._sb=[]),u.__s==null&&(u.__s=u.state),b.getDerivedStateFromProps!=null&&(u.__s==u.state&&(u.__s=Hn({},u.__s)),Hn(u.__s,b.getDerivedStateFromProps(p,u.__s))),h=u.props,d=u.state,f)b.getDerivedStateFromProps==null&&u.componentWillMount!=null&&u.componentWillMount(),u.componentDidMount!=null&&u.__h.push(u.componentDidMount);else{if(b.getDerivedStateFromProps==null&&p!==h&&u.componentWillReceiveProps!=null&&u.componentWillReceiveProps(p,y),!u.__e&&u.shouldComponentUpdate!=null&&u.shouldComponentUpdate(p,u.__s,y)===!1||e.__v===t.__v){for(u.props=p,u.state=u.__s,e.__v!==t.__v&&(u.__d=!1),u.__v=e,e.__e=t.__e,e.__k=t.__k,e.__k.forEach(function(T){T&&(T.__=e)}),x=0;x<u._sb.length;x++)u.__h.push(u._sb[x]);u._sb=[],u.__h.length&&o.push(u);break e}u.componentWillUpdate!=null&&u.componentWillUpdate(p,u.__s,y),u.componentDidUpdate!=null&&u.__h.push(function(){u.componentDidUpdate(h,d,m)})}if(u.context=y,u.props=p,u.__v=e,u.__P=i,v=xe.__r,w=0,"prototype"in b&&b.prototype.render){for(u.state=u.__s,u.__d=!1,v&&v(e),l=u.render(u.props,u.state,u.context),A=0;A<u._sb.length;A++)u.__h.push(u._sb[A]);u._sb=[]}else do u.__d=!1,v&&v(e),l=u.render(u.props,u.state,u.context),u.state=u.__s;while(u.__d&&++w<25);u.state=u.__s,u.getChildContext!=null&&(n=Hn(Hn({},n),u.getChildContext())),f||u.getSnapshotBeforeUpdate==null||(m=u.getSnapshotBeforeUpdate(h,d)),R=l!=null&&l.type===Ht&&l.key==null?l.props.children:l,zf(i,Array.isArray(R)?R:[R],e,t,n,r,s,o,a,c),u.base=e.__e,e.__h=null,u.__h.length&&o.push(u),g&&(u.__E=u.__=null),u.__e=!1}else s==null&&e.__v===t.__v?(e.__k=t.__k,e.__e=t.__e):e.__e=yy(t.__e,e,t,n,r,s,o,c);(l=xe.diffed)&&l(e)}catch(T){e.__v=null,(c||s!=null)&&(e.__e=a,e.__h=!!c,s[s.indexOf(a)]=null),xe.__e(T,e,t)}}function Gf(i,e){xe.__c&&xe.__c(e,i),i.some(function(t){try{i=t.__h,t.__h=[],i.some(function(n){n.call(t)})}catch(n){xe.__e(n,t.__v)}})}function yy(i,e,t,n,r,s,o,a){var c,l,u,f=t.props,h=e.props,d=e.type,m=0;if(d==="svg"&&(r=!0),s!=null){for(;m<s.length;m++)if((c=s[m])&&"setAttribute"in c==!!d&&(d?c.localName===d:c.nodeType===3)){i=c,s[m]=null;break}}if(i==null){if(d===null)return document.createTextNode(h);i=r?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,h.is&&h),s=null,a=!1}if(d===null)f===h||a&&i.data===h||(i.data=h);else{if(s=s&&Ps.call(i.childNodes),l=(f=t.props||Ao).dangerouslySetInnerHTML,u=h.dangerouslySetInnerHTML,!a){if(s!=null)for(f={},m=0;m<i.attributes.length;m++)f[i.attributes[m].name]=i.attributes[m].value;(u||l)&&(u&&(l&&u.__html==l.__html||u.__html===i.innerHTML)||(i.innerHTML=u&&u.__html||""))}if(xy(i,h,f,r,a),u)e.__k=[];else if(m=e.props.children,zf(i,Array.isArray(m)?m:[m],e,t,n,r&&d!=="foreignObject",s,o,s?s[0]:t.__k&&bs(t,0),a),s!=null)for(m=s.length;m--;)s[m]!=null&&kf(s[m]);a||("value"in h&&(m=h.value)!==void 0&&(m!==i.value||d==="progress"&&!m||d==="option"&&m!==f.value)&&Do(i,"value",m,f.value,!1),"checked"in h&&(m=h.checked)!==void 0&&m!==i.checked&&Do(i,"checked",m,f.checked,!1))}return i}function Wf(i,e,t){try{typeof i=="function"?i(e):i.current=e}catch(n){xe.__e(n,t)}}function jf(i,e,t){var n,r;if(xe.unmount&&xe.unmount(i),(n=i.ref)&&(n.current&&n.current!==i.__e||Wf(n,null,e)),(n=i.__c)!=null){if(n.componentWillUnmount)try{n.componentWillUnmount()}catch(s){xe.__e(s,e)}n.base=n.__P=null,i.__c=void 0}if(n=i.__k)for(r=0;r<n.length;r++)n[r]&&jf(n[r],e,t||typeof i.type!="function");t||i.__e==null||kf(i.__e),i.__=i.__e=i.__d=void 0}function by(i,e,t){return this.constructor(i,t)}function Er(i,e,t){var n,r,s;xe.__&&xe.__(i,e),r=(n=typeof t=="function")?null:t&&t.__k||e.__k,s=[],Yl(e,i=(!n&&t||e).__k=En(Ht,null,[i]),r||Ao,Ao,e.ownerSVGElement!==void 0,!n&&t?[t]:r?null:e.firstChild?Ps.call(e.childNodes):null,s,!n&&t?t:r?r.__e:e.firstChild,n),Gf(s,i)}function Xf(i,e){Er(i,e,Xf)}function wy(i,e,t){var n,r,s,o=Hn({},i.props);for(s in e)s=="key"?n=e[s]:s=="ref"?r=e[s]:o[s]=e[s];return arguments.length>2&&(o.children=arguments.length>3?Ps.call(arguments,2):t),cs(i.type,o,n||i.key,r||i.ref,null)}function qf(i,e){var t={__c:e="__cC"+Nf++,__:i,Consumer:function(n,r){return n.children(r)},Provider:function(n){var r,s;return this.getChildContext||(r=[],(s={})[e]=this,this.getChildContext=function(){return s},this.shouldComponentUpdate=function(o){this.props.value!==o.value&&r.some(pl)},this.sub=function(o){r.push(o);var a=o.componentWillUnmount;o.componentWillUnmount=function(){r.splice(r.indexOf(o),1),a&&a.call(o)}}),n.children}};return t.Provider.__=t.Consumer.contextType=t}Ps=Of.slice,xe={__e:function(i,e,t,n){for(var r,s,o;e=e.__;)if((r=e.__c)&&!r.__)try{if((s=r.constructor)&&s.getDerivedStateFromError!=null&&(r.setState(s.getDerivedStateFromError(i)),o=r.__d),r.componentDidCatch!=null&&(r.componentDidCatch(i,n||{}),o=r.__d),o)return r.__E=r}catch(a){i=a}throw i}},Ff=0,mn.prototype.setState=function(i,e){var t;t=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=Hn({},this.state),typeof i=="function"&&(i=i(Hn({},t),this.props)),i&&Hn(t,i),i!=null&&this.__v&&(e&&this._sb.push(e),pl(this))},mn.prototype.forceUpdate=function(i){this.__v&&(this.__e=!0,i&&this.__h.push(i),pl(this))},mn.prototype.render=Ht,ls=[],Co.__r=0,Nf=0;var Wn,nt,Na,$u,Ar=0,Yf=[],go=[],Zu=xe.__b,Ku=xe.__r,Qu=xe.diffed,Ju=xe.__c,eh=xe.unmount;function ji(i,e){xe.__h&&xe.__h(nt,i,Ar||e),Ar=0;var t=nt.__H||(nt.__H={__:[],__h:[]});return i>=t.__.length&&t.__.push({__V:go}),t.__[i]}function zi(i){return Ar=1,$l(Jf,i)}function $l(i,e,t){var n=ji(Wn++,2);if(n.t=i,!n.__c&&(n.__=[t?t(e):Jf(void 0,e),function(s){var o=n.__N?n.__N[0]:n.__[0],a=n.t(o,s);o!==a&&(n.__N=[a,n.__[1]],n.__c.setState({}))}],n.__c=nt,!nt.u)){nt.u=!0;var r=nt.shouldComponentUpdate;nt.shouldComponentUpdate=function(s,o,a){if(!n.__c.__H)return!0;var c=n.__c.__H.__.filter(function(u){return u.__c});if(c.every(function(u){return!u.__N}))return!r||r.call(this,s,o,a);var l=!1;return c.forEach(function(u){if(u.__N){var f=u.__[0];u.__=u.__N,u.__N=void 0,f!==u.__[0]&&(l=!0)}}),!(!l&&n.__c.props===s)&&(!r||r.call(this,s,o,a))}}return n.__N||n.__}function Cr(i,e){var t=ji(Wn++,3);!xe.__s&&Kl(t.__H,e)&&(t.__=i,t.i=e,nt.__H.__h.push(t))}function Ls(i,e){var t=ji(Wn++,4);!xe.__s&&Kl(t.__H,e)&&(t.__=i,t.i=e,nt.__h.push(t))}function Po(i){return Ar=5,Yo(function(){return{current:i}},[])}function $f(i,e,t){Ar=6,Ls(function(){return typeof i=="function"?(i(e()),function(){return i(null)}):i?(i.current=e(),function(){return i.current=null}):void 0},t==null?t:t.concat(i))}function Yo(i,e){var t=ji(Wn++,7);return Kl(t.__H,e)?(t.__V=i(),t.i=e,t.__h=i,t.__V):t.__}function Zf(i,e){return Ar=8,Yo(function(){return i},e)}function Kf(i){var e=nt.context[i.__c],t=ji(Wn++,9);return t.c=i,e?(t.__==null&&(t.__=!0,e.sub(nt)),e.props.value):i.__}function Zl(i,e){xe.useDebugValue&&xe.useDebugValue(e?e(i):i)}function My(i){var e=ji(Wn++,10),t=zi();return e.__=i,nt.componentDidCatch||(nt.componentDidCatch=function(n,r){e.__&&e.__(n,r),t[1](n)}),[t[0],function(){t[1](void 0)}]}function Qf(){var i=ji(Wn++,11);return i.__||(i.__="P"+function(e){for(var t=0,n=e.length;n>0;)t=(t<<5)-t+e.charCodeAt(--n)|0;return t}(nt.__v.__m)+Wn),i.__}function Sy(){for(var i;i=Yf.shift();)if(i.__P&&i.__H)try{i.__H.__h.forEach(_o),i.__H.__h.forEach(ml),i.__H.__h=[]}catch(e){i.__H.__h=[],xe.__e(e,i.__v)}}xe.__b=function(i){typeof i.type!="function"||i.__m||i.__===null?i.__m||(i.__m=i.__&&i.__.__m?i.__.__m:""):i.__m=(i.__&&i.__.__m?i.__.__m:"")+(i.__&&i.__.__k?i.__.__k.indexOf(i):0),nt=null,Zu&&Zu(i)},xe.__r=function(i){Ku&&Ku(i),Wn=0;var e=(nt=i.__c).__H;e&&(Na===nt?(e.__h=[],nt.__h=[],e.__.forEach(function(t){t.__N&&(t.__=t.__N),t.__V=go,t.__N=t.i=void 0})):(e.__h.forEach(_o),e.__h.forEach(ml),e.__h=[])),Na=nt},xe.diffed=function(i){Qu&&Qu(i);var e=i.__c;e&&e.__H&&(e.__H.__h.length&&(Yf.push(e)!==1&&$u===xe.requestAnimationFrame||(($u=xe.requestAnimationFrame)||Ty)(Sy)),e.__H.__.forEach(function(t){t.i&&(t.__H=t.i),t.__V!==go&&(t.__=t.__V),t.i=void 0,t.__V=go})),Na=nt=null},xe.__c=function(i,e){e.some(function(t){try{t.__h.forEach(_o),t.__h=t.__h.filter(function(n){return!n.__||ml(n)})}catch(n){e.some(function(r){r.__h&&(r.__h=[])}),e=[],xe.__e(n,t.__v)}}),Ju&&Ju(i,e)},xe.unmount=function(i){eh&&eh(i);var e,t=i.__c;t&&t.__H&&(t.__H.__.forEach(function(n){try{_o(n)}catch(r){e=r}}),t.__H=void 0,e&&xe.__e(e,t.__v))};var th=typeof requestAnimationFrame=="function";function Ty(i){var e,t=function(){clearTimeout(n),th&&cancelAnimationFrame(e),setTimeout(i)},n=setTimeout(t,100);th&&(e=requestAnimationFrame(t))}function _o(i){var e=nt,t=i.__c;typeof t=="function"&&(i.__c=void 0,t()),nt=e}function ml(i){var e=nt;i.__c=i.__(),nt=e}function Kl(i,e){return!i||i.length!==e.length||e.some(function(t,n){return t!==i[n]})}function Jf(i,e){return typeof e=="function"?e(i):e}function ed(i,e){for(var t in e)i[t]=e[t];return i}function gl(i,e){for(var t in i)if(t!=="__source"&&!(t in e))return!0;for(var n in e)if(n!=="__source"&&i[n]!==e[n])return!0;return!1}function Lo(i){this.props=i}function td(i,e){function t(r){var s=this.props.ref,o=s==r.ref;return!o&&s&&(s.call?s(null):s.current=null),e?!e(this.props,r)||!o:gl(this.props,r)}function n(r){return this.shouldComponentUpdate=t,En(i,r)}return n.displayName="Memo("+(i.displayName||i.name)+")",n.prototype.isReactComponent=!0,n.__f=!0,n}(Lo.prototype=new mn).isPureReactComponent=!0,Lo.prototype.shouldComponentUpdate=function(i,e){return gl(this.props,i)||gl(this.state,e)};var nh=xe.__b;xe.__b=function(i){i.type&&i.type.__f&&i.ref&&(i.props.ref=i.ref,i.ref=null),nh&&nh(i)};var Ey=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.forward_ref")||3911;function nd(i){function e(t){var n=ed({},t);return delete n.ref,i(n,t.ref||null)}return e.$$typeof=Ey,e.render=e,e.prototype.isReactComponent=e.__f=!0,e.displayName="ForwardRef("+(i.displayName||i.name)+")",e}var ih=function(i,e){return i==null?null:Gn(Gn(i).map(e))},id={map:ih,forEach:ih,count:function(i){return i?Gn(i).length:0},only:function(i){var e=Gn(i);if(e.length!==1)throw"Children.only";return e[0]},toArray:Gn},Ay=xe.__e;xe.__e=function(i,e,t,n){if(i.then){for(var r,s=e;s=s.__;)if((r=s.__c)&&r.__c)return e.__e==null&&(e.__e=t.__e,e.__k=t.__k),r.__c(i,e)}Ay(i,e,t,n)};var rh=xe.unmount;function rd(i,e,t){return i&&(i.__c&&i.__c.__H&&(i.__c.__H.__.forEach(function(n){typeof n.__c=="function"&&n.__c()}),i.__c.__H=null),(i=ed({},i)).__c!=null&&(i.__c.__P===t&&(i.__c.__P=e),i.__c=null),i.__k=i.__k&&i.__k.map(function(n){return rd(n,e,t)})),i}function sd(i,e,t){return i&&(i.__v=null,i.__k=i.__k&&i.__k.map(function(n){return sd(n,e,t)}),i.__c&&i.__c.__P===e&&(i.__e&&t.insertBefore(i.__e,i.__d),i.__c.__e=!0,i.__c.__P=t)),i}function us(){this.__u=0,this.t=null,this.__b=null}function od(i){var e=i.__.__c;return e&&e.__a&&e.__a(i)}function ad(i){var e,t,n;function r(s){if(e||(e=i()).then(function(o){t=o.default||o},function(o){n=o}),n)throw n;if(!t)throw e;return En(t,s)}return r.displayName="Lazy",r.__f=!0,r}function mr(){this.u=null,this.o=null}xe.unmount=function(i){var e=i.__c;e&&e.__R&&e.__R(),e&&i.__h===!0&&(i.type=null),rh&&rh(i)},(us.prototype=new mn).__c=function(i,e){var t=e.__c,n=this;n.t==null&&(n.t=[]),n.t.push(t);var r=od(n.__v),s=!1,o=function(){s||(s=!0,t.__R=null,r?r(a):a())};t.__R=o;var a=function(){if(!--n.__u){if(n.state.__a){var l=n.state.__a;n.__v.__k[0]=sd(l,l.__c.__P,l.__c.__O)}var u;for(n.setState({__a:n.__b=null});u=n.t.pop();)u.forceUpdate()}},c=e.__h===!0;n.__u++||c||n.setState({__a:n.__b=n.__v.__k[0]}),i.then(o,o)},us.prototype.componentWillUnmount=function(){this.t=[]},us.prototype.render=function(i,e){if(this.__b){if(this.__v.__k){var t=document.createElement("div"),n=this.__v.__k[0].__c;this.__v.__k[0]=rd(this.__b,t,n.__O=n.__P)}this.__b=null}var r=e.__a&&En(Ht,null,i.fallback);return r&&(r.__h=null),[En(Ht,null,e.__a?null:i.children),r]};var sh=function(i,e,t){if(++t[1]===t[0]&&i.o.delete(e),i.props.revealOrder&&(i.props.revealOrder[0]!=="t"||!i.o.size))for(t=i.u;t;){for(;t.length>3;)t.pop()();if(t[1]<t[0])break;i.u=t=t[2]}};function Cy(i){return this.getChildContext=function(){return i.context},i.children}function Dy(i){var e=this,t=i.i;e.componentWillUnmount=function(){Er(null,e.l),e.l=null,e.i=null},e.i&&e.i!==t&&e.componentWillUnmount(),i.__v?(e.l||(e.i=t,e.l={nodeType:1,parentNode:t,childNodes:[],appendChild:function(n){this.childNodes.push(n),e.i.appendChild(n)},insertBefore:function(n,r){this.childNodes.push(n),e.i.appendChild(n)},removeChild:function(n){this.childNodes.splice(this.childNodes.indexOf(n)>>>1,1),e.i.removeChild(n)}}),Er(En(Cy,{context:e.context},i.__v),e.l)):e.l&&e.componentWillUnmount()}function ld(i,e){var t=En(Dy,{__v:i,i:e});return t.containerInfo=e,t}(mr.prototype=new mn).__a=function(i){var e=this,t=od(e.__v),n=e.o.get(i);return n[0]++,function(r){var s=function(){e.props.revealOrder?(n.push(r),sh(e,i,n)):r()};t?t(s):s()}},mr.prototype.render=function(i){this.u=null,this.o=new Map;var e=Gn(i.children);i.revealOrder&&i.revealOrder[0]==="b"&&e.reverse();for(var t=e.length;t--;)this.o.set(e[t],this.u=[1,0,this.u]);return i.children},mr.prototype.componentDidUpdate=mr.prototype.componentDidMount=function(){var i=this;this.o.forEach(function(e,t){sh(i,t,e)})};var cd=typeof Symbol<"u"&&Symbol.for&&Symbol.for("react.element")||60103,Py=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ly=typeof document<"u",Ry=function(i){return(typeof Symbol<"u"&&typeof Symbol()=="symbol"?/fil|che|rad/i:/fil|che|ra/i).test(i)};function ud(i,e,t){return e.__k==null&&(e.textContent=""),Er(i,e),typeof t=="function"&&t(),i?i.__c:null}function hd(i,e,t){return Xf(i,e),typeof t=="function"&&t(),i?i.__c:null}mn.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach(function(i){Object.defineProperty(mn.prototype,i,{configurable:!0,get:function(){return this["UNSAFE_"+i]},set:function(e){Object.defineProperty(this,i,{configurable:!0,writable:!0,value:e})}})});var oh=xe.event;function Iy(){}function Fy(){return this.cancelBubble}function Ny(){return this.defaultPrevented}xe.event=function(i){return oh&&(i=oh(i)),i.persist=Iy,i.isPropagationStopped=Fy,i.isDefaultPrevented=Ny,i.nativeEvent=i};var fd,ah={configurable:!0,get:function(){return this.class}},lh=xe.vnode;xe.vnode=function(i){var e=i.type,t=i.props,n=t;if(typeof e=="string"){var r=e.indexOf("-")===-1;for(var s in n={},t){var o=t[s];Ly&&s==="children"&&e==="noscript"||s==="value"&&"defaultValue"in t&&o==null||(s==="defaultValue"&&"value"in t&&t.value==null?s="value":s==="download"&&o===!0?o="":/ondoubleclick/i.test(s)?s="ondblclick":/^onchange(textarea|input)/i.test(s+e)&&!Ry(t.type)?s="oninput":/^onfocus$/i.test(s)?s="onfocusin":/^onblur$/i.test(s)?s="onfocusout":/^on(Ani|Tra|Tou|BeforeInp|Compo)/.test(s)?s=s.toLowerCase():r&&Py.test(s)?s=s.replace(/[A-Z0-9]/g,"-$&").toLowerCase():o===null&&(o=void 0),/^oninput$/i.test(s)&&(s=s.toLowerCase(),n[s]&&(s="oninputCapture")),n[s]=o)}e=="select"&&n.multiple&&Array.isArray(n.value)&&(n.value=Gn(t.children).forEach(function(a){a.props.selected=n.value.indexOf(a.props.value)!=-1})),e=="select"&&n.defaultValue!=null&&(n.value=Gn(t.children).forEach(function(a){a.props.selected=n.multiple?n.defaultValue.indexOf(a.props.value)!=-1:n.defaultValue==a.props.value})),i.props=n,t.class!=t.className&&(ah.enumerable="className"in t,t.className!=null&&(n.class=t.className),Object.defineProperty(n,"className",ah))}i.$$typeof=cd,lh&&lh(i)};var ch=xe.__r;xe.__r=function(i){ch&&ch(i),fd=i.__c};var dd={ReactCurrentDispatcher:{current:{readContext:function(i){return fd.__n[i.__c].props.value}}}},Oy="17.0.2";function pd(i){return En.bind(null,i)}function Ql(i){return!!i&&i.$$typeof===cd}function md(i){return Ql(i)?wy.apply(null,arguments):i}function gd(i){return!!i.__k&&(Er(null,i),!0)}function _d(i){return i&&(i.base||i.nodeType===1&&i)||null}var vd=function(i,e){return i(e)},xd=function(i,e){return i(e)},yd=Ht;function Jl(i){i()}function bd(i){return i}function wd(){return[!1,Jl]}var Md=Ls;function Sd(i,e){var t=e(),n=zi({h:{__:t,v:e}}),r=n[0].h,s=n[1];return Ls(function(){r.__=t,r.v=e,r.__!==e()&&s({h:r})},[i,t,e]),Cr(function(){return r.__!==r.v()&&s({h:r}),i(function(){r.__!==r.v()&&s({h:r})})},[i]),t}var ky={useState:zi,useId:Qf,useReducer:$l,useEffect:Cr,useLayoutEffect:Ls,useInsertionEffect:Md,useTransition:wd,useDeferredValue:bd,useSyncExternalStore:Sd,startTransition:Jl,useRef:Po,useImperativeHandle:$f,useMemo:Yo,useCallback:Zf,useContext:Kf,useDebugValue:Zl,version:"17.0.2",Children:id,render:ud,hydrate:hd,unmountComponentAtNode:gd,createPortal:ld,createElement:En,createContext:qf,createFactory:pd,cloneElement:md,createRef:Bf,Fragment:Ht,isValidElement:Ql,findDOMNode:_d,Component:mn,PureComponent:Lo,memo:td,forwardRef:nd,flushSync:xd,unstable_batchedUpdates:vd,StrictMode:yd,Suspense:us,SuspenseList:mr,lazy:ad,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:dd};const By=Object.freeze(Object.defineProperty({__proto__:null,Children:id,PureComponent:Lo,StrictMode:yd,Suspense:us,SuspenseList:mr,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:dd,cloneElement:md,createFactory:pd,createPortal:ld,default:ky,findDOMNode:_d,flushSync:xd,forwardRef:nd,hydrate:hd,isValidElement:Ql,lazy:ad,memo:td,render:ud,startTransition:Jl,unmountComponentAtNode:gd,unstable_batchedUpdates:vd,useDeferredValue:bd,useInsertionEffect:Md,useSyncExternalStore:Sd,useTransition:wd,version:Oy,Component:mn,Fragment:Ht,createContext:qf,createElement:En,createRef:Bf,useCallback:Zf,useContext:Kf,useDebugValue:Zl,useEffect:Cr,useErrorBoundary:My,useId:Qf,useImperativeHandle:$f,useLayoutEffect:Ls,useMemo:Yo,useReducer:$l,useRef:Po,useState:zi},Symbol.toStringTag,{value:"Module"}));var Td={exports:{}},Ed={};const Ad=vp(By);var Cd={exports:{}},Dd={};/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dr=Ad;function Uy(i,e){return i===e&&(i!==0||1/i===1/e)||i!==i&&e!==e}var zy=typeof Object.is=="function"?Object.is:Uy,Hy=Dr.useState,Vy=Dr.useEffect,Gy=Dr.useLayoutEffect,Wy=Dr.useDebugValue;function jy(i,e){var t=e(),n=Hy({inst:{value:t,getSnapshot:e}}),r=n[0].inst,s=n[1];return Gy(function(){r.value=t,r.getSnapshot=e,Oa(r)&&s({inst:r})},[i,t,e]),Vy(function(){return Oa(r)&&s({inst:r}),i(function(){Oa(r)&&s({inst:r})})},[i]),Wy(t),t}function Oa(i){var e=i.getSnapshot;i=i.value;try{var t=e();return!zy(i,t)}catch{return!0}}function Xy(i,e){return e()}var qy=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?Xy:jy;Dd.useSyncExternalStore=Dr.useSyncExternalStore!==void 0?Dr.useSyncExternalStore:qy;(function(i){i.exports=Dd})(Cd);/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $o=Ad,Yy=Cd.exports;function $y(i,e){return i===e&&(i!==0||1/i===1/e)||i!==i&&e!==e}var Zy=typeof Object.is=="function"?Object.is:$y,Ky=Yy.useSyncExternalStore,Qy=$o.useRef,Jy=$o.useEffect,eb=$o.useMemo,tb=$o.useDebugValue;Ed.useSyncExternalStoreWithSelector=function(i,e,t,n,r){var s=Qy(null);if(s.current===null){var o={hasValue:!1,value:null};s.current=o}else o=s.current;s=eb(function(){function c(d){if(!l){if(l=!0,u=d,d=n(d),r!==void 0&&o.hasValue){var m=o.value;if(r(m,d))return f=m}return f=d}if(m=f,Zy(u,d))return m;var g=n(d);return r!==void 0&&r(m,g)?m:(u=d,f=g)}var l=!1,u,f,h=t===void 0?null:t;return[function(){return c(e())},h===null?void 0:function(){return c(h())}]},[e,t,n,r]);var a=Ky(i,s[0],s[1]);return Jy(function(){o.hasValue=!0,o.value=a},[a]),tb(a),a};(function(i){i.exports=Ed})(Td);const nb=_p(Td.exports),{useSyncExternalStoreWithSelector:ib}=nb;function Ut(i,e=i.getState,t){const n=ib(i.subscribe,i.getState,i.getServerState||i.getState,e,t);return Zl(n),n}const uh=i=>{const e=typeof i=="function"?_y(i):i,t=(n,r)=>Ut(e,n,r);return Object.assign(t,e),t},Rs=i=>i?uh(i):uh,Ro=i=>e=>{try{const t=i(e);return t instanceof Promise?t:{then(n){return Ro(n)(t)},catch(n){return this}}}catch(t){return{then(n){return this},catch(n){return Ro(n)(t)}}}},rb=(i,e)=>(t,n,r)=>{let s={getStorage:()=>localStorage,serialize:JSON.stringify,deserialize:JSON.parse,partialize:p=>p,version:0,merge:(p,_)=>({..._,...p}),...e},o=!1;const a=new Set,c=new Set;let l;try{l=s.getStorage()}catch{}if(!l)return i((...p)=>{console.warn(`[zustand persist middleware] Unable to update item '${s.name}', the given storage is currently unavailable.`),t(...p)},n,r);const u=Ro(s.serialize),f=()=>{const p=s.partialize({...n()});let _;const y=u({state:p,version:s.version}).then(x=>l.setItem(s.name,x)).catch(x=>{_=x});if(_)throw _;return y},h=r.setState;r.setState=(p,_)=>{h(p,_),f()};const d=i((...p)=>{t(...p),f()},n,r);let m;const g=()=>{var p;if(!l)return;o=!1,a.forEach(y=>y(n()));const _=((p=s.onRehydrateStorage)==null?void 0:p.call(s,n()))||void 0;return Ro(l.getItem.bind(l))(s.name).then(y=>{if(y)return s.deserialize(y)}).then(y=>{if(y)if(typeof y.version=="number"&&y.version!==s.version){if(s.migrate)return s.migrate(y.state,y.version);console.error("State loaded from storage couldn't be migrated since no migrate function was provided")}else return y.state}).then(y=>{var x;return m=s.merge(y,(x=n())!=null?x:d),t(m,!0),f()}).then(()=>{_?.(m,void 0),o=!0,c.forEach(y=>y(m))}).catch(y=>{_?.(void 0,y)})};return r.persist={setOptions:p=>{s={...s,...p},p.getStorage&&(l=p.getStorage())},clearStorage:()=>{l?.removeItem(s.name)},getOptions:()=>s,rehydrate:()=>g(),hasHydrated:()=>o,onHydrate:p=>(a.add(p),()=>{a.delete(p)}),onFinishHydration:p=>(c.add(p),()=>{c.delete(p)})},g(),m||d},ec=rb;function tn(i){for(var e=arguments.length,t=Array(e>1?e-1:0),n=1;n<e;n++)t[n-1]=arguments[n];throw Error("[Immer] minified error nr: "+i+(t.length?" "+t.map(function(r){return"'"+r+"'"}).join(","):"")+". Find the full error at: https://bit.ly/3cXEKWf")}function Pr(i){return!!i&&!!i[je]}function jn(i){var e;return!!i&&(function(t){if(!t||typeof t!="object")return!1;var n=Object.getPrototypeOf(t);if(n===null)return!0;var r=Object.hasOwnProperty.call(n,"constructor")&&n.constructor;return r===Object||typeof r=="function"&&Function.toString.call(r)===db}(i)||Array.isArray(i)||!!i[_h]||!!(!((e=i.constructor)===null||e===void 0)&&e[_h])||tc(i)||nc(i))}function Lr(i,e,t){t===void 0&&(t=!1),zr(i)===0?(t?Object.keys:ac)(i).forEach(function(n){t&&typeof n=="symbol"||e(n,i[n],i)}):i.forEach(function(n,r){return e(r,n,i)})}function zr(i){var e=i[je];return e?e.i>3?e.i-4:e.i:Array.isArray(i)?1:tc(i)?2:nc(i)?3:0}function _l(i,e){return zr(i)===2?i.has(e):Object.prototype.hasOwnProperty.call(i,e)}function sb(i,e){return zr(i)===2?i.get(e):i[e]}function Pd(i,e,t){var n=zr(i);n===2?i.set(e,t):n===3?(i.delete(e),i.add(t)):i[e]=t}function ob(i,e){return i===e?i!==0||1/i==1/e:i!=i&&e!=e}function tc(i){return hb&&i instanceof Map}function nc(i){return fb&&i instanceof Set}function Mt(i){return i.o||i.t}function ic(i){if(Array.isArray(i))return Array.prototype.slice.call(i);var e=pb(i);delete e[je];for(var t=ac(e),n=0;n<t.length;n++){var r=t[n],s=e[r];s.writable===!1&&(s.writable=!0,s.configurable=!0),(s.get||s.set)&&(e[r]={configurable:!0,writable:!0,enumerable:s.enumerable,value:i[r]})}return Object.create(Object.getPrototypeOf(i),e)}function rc(i,e){return e===void 0&&(e=!1),sc(i)||Pr(i)||!jn(i)||(zr(i)>1&&(i.set=i.add=i.clear=i.delete=ab),Object.freeze(i),e&&Lr(i,function(t,n){return rc(n,!0)},!0)),i}function ab(){tn(2)}function sc(i){return i==null||typeof i!="object"||Object.isFrozen(i)}function Sn(i){var e=xl[i];return e||tn(18,i),e}function lb(i,e){xl[i]||(xl[i]=e)}function Io(){return Ms}function ka(i,e){e&&(Sn("Patches"),i.u=[],i.s=[],i.v=e)}function Fo(i){vl(i),i.p.forEach(cb),i.p=null}function vl(i){i===Ms&&(Ms=i.l)}function hh(i){return Ms={p:[],l:Ms,h:i,m:!0,_:0}}function cb(i){var e=i[je];e.i===0||e.i===1?e.j():e.O=!0}function Ba(i,e){e._=e.p.length;var t=e.p[0],n=i!==void 0&&i!==t;return e.h.g||Sn("ES5").S(e,i,n),n?(t[je].P&&(Fo(e),tn(4)),jn(i)&&(i=No(e,i),e.l||Oo(e,i)),e.u&&Sn("Patches").M(t[je].t,i,e.u,e.s)):i=No(e,t,[]),Fo(e),e.u&&e.v(e.u,e.s),i!==Rd?i:void 0}function No(i,e,t){if(sc(e))return e;var n=e[je];if(!n)return Lr(e,function(s,o){return fh(i,n,e,s,o,t)},!0),e;if(n.A!==i)return e;if(!n.P)return Oo(i,n.t,!0),n.t;if(!n.I){n.I=!0,n.A._--;var r=n.i===4||n.i===5?n.o=ic(n.k):n.o;Lr(n.i===3?new Set(r):r,function(s,o){return fh(i,n,r,s,o,t)}),Oo(i,r,!1),t&&i.u&&Sn("Patches").R(n,t,i.u,i.s)}return n.o}function fh(i,e,t,n,r,s){if(Pr(r)){var o=No(i,r,s&&e&&e.i!==3&&!_l(e.D,n)?s.concat(n):void 0);if(Pd(t,n,o),!Pr(o))return;i.m=!1}if(jn(r)&&!sc(r)){if(!i.h.F&&i._<1)return;No(i,r),e&&e.A.l||Oo(i,r)}}function Oo(i,e,t){t===void 0&&(t=!1),i.h.F&&i.m&&rc(e,t)}function Ua(i,e){var t=i[je];return(t?Mt(t):i)[e]}function dh(i,e){if(e in i)for(var t=Object.getPrototypeOf(i);t;){var n=Object.getOwnPropertyDescriptor(t,e);if(n)return n;t=Object.getPrototypeOf(t)}}function kn(i){i.P||(i.P=!0,i.l&&kn(i.l))}function za(i){i.o||(i.o=ic(i.t))}function ws(i,e,t){var n=tc(e)?Sn("MapSet").N(e,t):nc(e)?Sn("MapSet").T(e,t):i.g?function(r,s){var o=Array.isArray(r),a={i:o?1:0,A:s?s.A:Io(),P:!1,I:!1,D:{},l:s,t:r,k:null,o:null,j:null,C:!1},c=a,l=yl;o&&(c=[a],l=is);var u=Proxy.revocable(c,l),f=u.revoke,h=u.proxy;return a.k=h,a.j=f,h}(e,t):Sn("ES5").J(e,t);return(t?t.A:Io()).p.push(n),n}function ub(i){return Pr(i)||tn(22,i),function e(t){if(!jn(t))return t;var n,r=t[je],s=zr(t);if(r){if(!r.P&&(r.i<4||!Sn("ES5").K(r)))return r.t;r.I=!0,n=ph(t,s),r.I=!1}else n=ph(t,s);return Lr(n,function(o,a){r&&sb(r.t,o)===a||Pd(n,o,e(a))}),s===3?new Set(n):n}(i)}function ph(i,e){switch(e){case 2:return new Map(i);case 3:return Array.from(i)}return ic(i)}function Ld(){function i(a,c){function l(){this.constructor=a}r(a,c),a.prototype=(l.prototype=c.prototype,new l)}function e(a){a.o||(a.D=new Map,a.o=new Map(a.t))}function t(a){a.o||(a.o=new Set,a.t.forEach(function(c){if(jn(c)){var l=ws(a.A.h,c,a);a.p.set(c,l),a.o.add(l)}else a.o.add(c)}))}function n(a){a.O&&tn(3,JSON.stringify(Mt(a)))}var r=function(a,c){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(l,u){l.__proto__=u}||function(l,u){for(var f in u)u.hasOwnProperty(f)&&(l[f]=u[f])})(a,c)},s=function(){function a(l,u){return this[je]={i:2,l:u,A:u?u.A:Io(),P:!1,I:!1,o:void 0,D:void 0,t:l,k:this,C:!1,O:!1},this}i(a,Map);var c=a.prototype;return Object.defineProperty(c,"size",{get:function(){return Mt(this[je]).size}}),c.has=function(l){return Mt(this[je]).has(l)},c.set=function(l,u){var f=this[je];return n(f),Mt(f).has(l)&&Mt(f).get(l)===u||(e(f),kn(f),f.D.set(l,!0),f.o.set(l,u),f.D.set(l,!0)),this},c.delete=function(l){if(!this.has(l))return!1;var u=this[je];return n(u),e(u),kn(u),u.t.has(l)?u.D.set(l,!1):u.D.delete(l),u.o.delete(l),!0},c.clear=function(){var l=this[je];n(l),Mt(l).size&&(e(l),kn(l),l.D=new Map,Lr(l.t,function(u){l.D.set(u,!1)}),l.o.clear())},c.forEach=function(l,u){var f=this;Mt(this[je]).forEach(function(h,d){l.call(u,f.get(d),d,f)})},c.get=function(l){var u=this[je];n(u);var f=Mt(u).get(l);if(u.I||!jn(f)||f!==u.t.get(l))return f;var h=ws(u.A.h,f,u);return e(u),u.o.set(l,h),h},c.keys=function(){return Mt(this[je]).keys()},c.values=function(){var l,u=this,f=this.keys();return(l={})[oo]=function(){return u.values()},l.next=function(){var h=f.next();return h.done?h:{done:!1,value:u.get(h.value)}},l},c.entries=function(){var l,u=this,f=this.keys();return(l={})[oo]=function(){return u.entries()},l.next=function(){var h=f.next();if(h.done)return h;var d=u.get(h.value);return{done:!1,value:[h.value,d]}},l},c[oo]=function(){return this.entries()},a}(),o=function(){function a(l,u){return this[je]={i:3,l:u,A:u?u.A:Io(),P:!1,I:!1,o:void 0,t:l,k:this,p:new Map,O:!1,C:!1},this}i(a,Set);var c=a.prototype;return Object.defineProperty(c,"size",{get:function(){return Mt(this[je]).size}}),c.has=function(l){var u=this[je];return n(u),u.o?!!u.o.has(l)||!(!u.p.has(l)||!u.o.has(u.p.get(l))):u.t.has(l)},c.add=function(l){var u=this[je];return n(u),this.has(l)||(t(u),kn(u),u.o.add(l)),this},c.delete=function(l){if(!this.has(l))return!1;var u=this[je];return n(u),t(u),kn(u),u.o.delete(l)||!!u.p.has(l)&&u.o.delete(u.p.get(l))},c.clear=function(){var l=this[je];n(l),Mt(l).size&&(t(l),kn(l),l.o.clear())},c.values=function(){var l=this[je];return n(l),t(l),l.o.values()},c.entries=function(){var l=this[je];return n(l),t(l),l.o.entries()},c.keys=function(){return this.values()},c[oo]=function(){return this.values()},c.forEach=function(l,u){for(var f=this.values(),h=f.next();!h.done;)l.call(u,h.value,h.value,this),h=f.next()},a}();lb("MapSet",{N:function(a,c){return new s(a,c)},T:function(a,c){return new o(a,c)}})}var mh,Ms,oc=typeof Symbol<"u"&&typeof Symbol("x")=="symbol",hb=typeof Map<"u",fb=typeof Set<"u",gh=typeof Proxy<"u"&&Proxy.revocable!==void 0&&typeof Reflect<"u",Rd=oc?Symbol.for("immer-nothing"):((mh={})["immer-nothing"]=!0,mh),_h=oc?Symbol.for("immer-draftable"):"__$immer_draftable",je=oc?Symbol.for("immer-state"):"__$immer_state",oo=typeof Symbol<"u"&&Symbol.iterator||"@@iterator",db=""+Object.prototype.constructor,ac=typeof Reflect<"u"&&Reflect.ownKeys?Reflect.ownKeys:Object.getOwnPropertySymbols!==void 0?function(i){return Object.getOwnPropertyNames(i).concat(Object.getOwnPropertySymbols(i))}:Object.getOwnPropertyNames,pb=Object.getOwnPropertyDescriptors||function(i){var e={};return ac(i).forEach(function(t){e[t]=Object.getOwnPropertyDescriptor(i,t)}),e},xl={},yl={get:function(i,e){if(e===je)return i;var t=Mt(i);if(!_l(t,e))return function(r,s,o){var a,c=dh(s,o);return c?"value"in c?c.value:(a=c.get)===null||a===void 0?void 0:a.call(r.k):void 0}(i,t,e);var n=t[e];return i.I||!jn(n)?n:n===Ua(i.t,e)?(za(i),i.o[e]=ws(i.A.h,n,i)):n},has:function(i,e){return e in Mt(i)},ownKeys:function(i){return Reflect.ownKeys(Mt(i))},set:function(i,e,t){var n=dh(Mt(i),e);if(n?.set)return n.set.call(i.k,t),!0;if(!i.P){var r=Ua(Mt(i),e),s=r?.[je];if(s&&s.t===t)return i.o[e]=t,i.D[e]=!1,!0;if(ob(t,r)&&(t!==void 0||_l(i.t,e)))return!0;za(i),kn(i)}return i.o[e]===t&&typeof t!="number"&&(t!==void 0||e in i.o)||(i.o[e]=t,i.D[e]=!0,!0)},deleteProperty:function(i,e){return Ua(i.t,e)!==void 0||e in i.t?(i.D[e]=!1,za(i),kn(i)):delete i.D[e],i.o&&delete i.o[e],!0},getOwnPropertyDescriptor:function(i,e){var t=Mt(i),n=Reflect.getOwnPropertyDescriptor(t,e);return n&&{writable:!0,configurable:i.i!==1||e!=="length",enumerable:n.enumerable,value:t[e]}},defineProperty:function(){tn(11)},getPrototypeOf:function(i){return Object.getPrototypeOf(i.t)},setPrototypeOf:function(){tn(12)}},is={};Lr(yl,function(i,e){is[i]=function(){return arguments[0]=arguments[0][0],e.apply(this,arguments)}}),is.deleteProperty=function(i,e){return is.set.call(this,i,e,void 0)},is.set=function(i,e,t){return yl.set.call(this,i[0],e,t,i[0])};var mb=function(){function i(t){var n=this;this.g=gh,this.F=!0,this.produce=function(r,s,o){if(typeof r=="function"&&typeof s!="function"){var a=s;s=r;var c=n;return function(g){var p=this;g===void 0&&(g=a);for(var _=arguments.length,y=Array(_>1?_-1:0),x=1;x<_;x++)y[x-1]=arguments[x];return c.produce(g,function(v){var w;return(w=s).call.apply(w,[p,v].concat(y))})}}var l;if(typeof s!="function"&&tn(6),o!==void 0&&typeof o!="function"&&tn(7),jn(r)){var u=hh(n),f=ws(n,r,void 0),h=!0;try{l=s(f),h=!1}finally{h?Fo(u):vl(u)}return typeof Promise<"u"&&l instanceof Promise?l.then(function(g){return ka(u,o),Ba(g,u)},function(g){throw Fo(u),g}):(ka(u,o),Ba(l,u))}if(!r||typeof r!="object"){if((l=s(r))===void 0&&(l=r),l===Rd&&(l=void 0),n.F&&rc(l,!0),o){var d=[],m=[];Sn("Patches").M(r,l,d,m),o(d,m)}return l}tn(21,r)},this.produceWithPatches=function(r,s){if(typeof r=="function")return function(l){for(var u=arguments.length,f=Array(u>1?u-1:0),h=1;h<u;h++)f[h-1]=arguments[h];return n.produceWithPatches(l,function(d){return r.apply(void 0,[d].concat(f))})};var o,a,c=n.produce(r,s,function(l,u){o=l,a=u});return typeof Promise<"u"&&c instanceof Promise?c.then(function(l){return[l,o,a]}):[c,o,a]},typeof t?.useProxies=="boolean"&&this.setUseProxies(t.useProxies),typeof t?.autoFreeze=="boolean"&&this.setAutoFreeze(t.autoFreeze)}var e=i.prototype;return e.createDraft=function(t){jn(t)||tn(8),Pr(t)&&(t=ub(t));var n=hh(this),r=ws(this,t,void 0);return r[je].C=!0,vl(n),r},e.finishDraft=function(t,n){var r=t&&t[je],s=r.A;return ka(s,n),Ba(void 0,s)},e.setAutoFreeze=function(t){this.F=t},e.setUseProxies=function(t){t&&!gh&&tn(20),this.g=t},e.applyPatches=function(t,n){var r;for(r=n.length-1;r>=0;r--){var s=n[r];if(s.path.length===0&&s.op==="replace"){t=s.value;break}}r>-1&&(n=n.slice(r+1));var o=Sn("Patches").$;return Pr(t)?o(t,n):this.produce(t,function(a){return o(a,n)})},i}(),Yt=new mb,gb=Yt.produce;Yt.produceWithPatches.bind(Yt);Yt.setAutoFreeze.bind(Yt);Yt.setUseProxies.bind(Yt);Yt.applyPatches.bind(Yt);Yt.createDraft.bind(Yt);Yt.finishDraft.bind(Yt);const _b=i=>(e,t,n)=>(n.setState=(r,s,...o)=>{const a=typeof r=="function"?gb(r):r;return e(a,s,...o)},i(n.setState,t,n)),Is=_b;var vb=function(){function i(){this.keyToValue=new Map,this.valueToKey=new Map}return i.prototype.set=function(e,t){this.keyToValue.set(e,t),this.valueToKey.set(t,e)},i.prototype.getByKey=function(e){return this.keyToValue.get(e)},i.prototype.getByValue=function(e){return this.valueToKey.get(e)},i.prototype.clear=function(){this.keyToValue.clear(),this.valueToKey.clear()},i}(),Id=function(){function i(e){this.generateIdentifier=e,this.kv=new vb}return i.prototype.register=function(e,t){this.kv.getByValue(e)||(t||(t=this.generateIdentifier(e)),this.kv.set(t,e))},i.prototype.clear=function(){this.kv.clear()},i.prototype.getIdentifier=function(e){return this.kv.getByValue(e)},i.prototype.getValue=function(e){return this.kv.getByKey(e)},i}(),xb=globalThis&&globalThis.__extends||function(){var i=function(e,t){return i=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,r){n.__proto__=r}||function(n,r){for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(n[s]=r[s])},i(e,t)};return function(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");i(e,t);function n(){this.constructor=e}e.prototype=t===null?Object.create(t):(n.prototype=t.prototype,new n)}}(),yb=function(i){xb(e,i);function e(){var t=i.call(this,function(n){return n.name})||this;return t.classToAllowedProps=new Map,t}return e.prototype.register=function(t,n){typeof n=="object"?(n.allowProps&&this.classToAllowedProps.set(t,n.allowProps),i.prototype.register.call(this,t,n.identifier)):i.prototype.register.call(this,t,n)},e.prototype.getAllowedProps=function(t){return this.classToAllowedProps.get(t)},e}(Id),bb=globalThis&&globalThis.__read||function(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return s};function wb(i){if("values"in Object)return Object.values(i);var e=[];for(var t in i)i.hasOwnProperty(t)&&e.push(i[t]);return e}function Mb(i,e){var t=wb(i);if("find"in t)return t.find(e);for(var n=t,r=0;r<n.length;r++){var s=n[r];if(e(s))return s}}function Rr(i,e){Object.entries(i).forEach(function(t){var n=bb(t,2),r=n[0],s=n[1];return e(s,r)})}function vo(i,e){return i.indexOf(e)!==-1}function vh(i,e){for(var t=0;t<i.length;t++){var n=i[t];if(e(n))return n}}var Sb=function(){function i(){this.transfomers={}}return i.prototype.register=function(e){this.transfomers[e.name]=e},i.prototype.findApplicable=function(e){return Mb(this.transfomers,function(t){return t.isApplicable(e)})},i.prototype.findByName=function(e){return this.transfomers[e]},i}(),Tb=function(i){return Object.prototype.toString.call(i).slice(8,-1)},Fd=function(i){return typeof i>"u"},Eb=function(i){return i===null},Ss=function(i){return typeof i!="object"||i===null||i===Object.prototype?!1:Object.getPrototypeOf(i)===null?!0:i.constructor===Object&&Object.getPrototypeOf(i)===Object.prototype},bl=function(i){return Ss(i)&&Object.keys(i).length===0},ci=function(i){return Array.isArray(i)},Ab=function(i){return typeof i=="string"},Cb=function(i){return typeof i=="number"&&!isNaN(i)},Db=function(i){return typeof i=="boolean"},Pb=function(i){return i instanceof RegExp},ko=function(i){return i instanceof Map},Bo=function(i){return i instanceof Set},Nd=function(i){return Tb(i)==="Symbol"},Lb=function(i){return i instanceof Date&&!isNaN(i.valueOf())},Rb=function(i){return i instanceof Error},xh=function(i){return typeof i=="number"&&isNaN(i)},yh=function(i){return Db(i)||Eb(i)||Fd(i)||Cb(i)||Ab(i)||Nd(i)},Ib=function(i){return typeof i=="bigint"},Fb=function(i){return i===1/0||i===-1/0},Nb=function(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)},Ob=function(i){return i instanceof URL},Od=function(i){return i.replace(/\./g,"\\.")},Ha=function(i){return i.map(String).map(Od).join(".")},hs=function(i){for(var e=[],t="",n=0;n<i.length;n++){var r=i.charAt(n),s=r==="\\"&&i.charAt(n+1)===".";if(s){t+=".",n++;continue}var o=r===".";if(o){e.push(t),t="";continue}t+=r}var a=t;return e.push(a),e},wl=globalThis&&globalThis.__assign||function(){return wl=Object.assign||function(i){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i},wl.apply(this,arguments)},Ml=globalThis&&globalThis.__read||function(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return s},Sl=globalThis&&globalThis.__spreadArray||function(i,e){for(var t=0,n=e.length,r=i.length;t<n;t++,r++)i[r]=e[t];return i};function _n(i,e,t,n){return{isApplicable:i,annotation:e,transform:t,untransform:n}}var kd=[_n(Fd,"undefined",function(){return null},function(){}),_n(Ib,"bigint",function(i){return i.toString()},function(i){return typeof BigInt<"u"?BigInt(i):(console.error("Please add a BigInt polyfill."),i)}),_n(Lb,"Date",function(i){return i.toISOString()},function(i){return new Date(i)}),_n(Rb,"Error",function(i,e){var t={name:i.name,message:i.message};return e.allowedErrorProps.forEach(function(n){t[n]=i[n]}),t},function(i,e){var t=new Error(i.message);return t.name=i.name,t.stack=i.stack,e.allowedErrorProps.forEach(function(n){t[n]=i[n]}),t}),_n(Pb,"regexp",function(i){return""+i},function(i){var e=i.slice(1,i.lastIndexOf("/")),t=i.slice(i.lastIndexOf("/")+1);return new RegExp(e,t)}),_n(Bo,"set",function(i){return Sl([],Ml(i.values()))},function(i){return new Set(i)}),_n(ko,"map",function(i){return Sl([],Ml(i.entries()))},function(i){return new Map(i)}),_n(function(i){return xh(i)||Fb(i)},"number",function(i){return xh(i)?"NaN":i>0?"Infinity":"-Infinity"},Number),_n(function(i){return i===0&&1/i===-1/0},"number",function(){return"-0"},Number),_n(Ob,"URL",function(i){return i.toString()},function(i){return new URL(i)})];function Zo(i,e,t,n){return{isApplicable:i,annotation:e,transform:t,untransform:n}}var Bd=Zo(function(i,e){if(Nd(i)){var t=!!e.symbolRegistry.getIdentifier(i);return t}return!1},function(i,e){var t=e.symbolRegistry.getIdentifier(i);return["symbol",t]},function(i){return i.description},function(i,e,t){var n=t.symbolRegistry.getValue(e[1]);if(!n)throw new Error("Trying to deserialize unknown symbol");return n}),kb=[Int8Array,Uint8Array,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array,Uint8ClampedArray].reduce(function(i,e){return i[e.name]=e,i},{}),Ud=Zo(Nb,function(i){return["typed-array",i.constructor.name]},function(i){return Sl([],Ml(i))},function(i,e){var t=kb[e[1]];if(!t)throw new Error("Trying to deserialize unknown typed array");return new t(i)});function zd(i,e){if(i?.constructor){var t=!!e.classRegistry.getIdentifier(i.constructor);return t}return!1}var Hd=Zo(zd,function(i,e){var t=e.classRegistry.getIdentifier(i.constructor);return["class",t]},function(i,e){var t=e.classRegistry.getAllowedProps(i.constructor);if(!t)return wl({},i);var n={};return t.forEach(function(r){n[r]=i[r]}),n},function(i,e,t){var n=t.classRegistry.getValue(e[1]);if(!n)throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");return Object.assign(Object.create(n.prototype),i)}),Vd=Zo(function(i,e){return!!e.customTransformerRegistry.findApplicable(i)},function(i,e){var t=e.customTransformerRegistry.findApplicable(i);return["custom",t.name]},function(i,e){var t=e.customTransformerRegistry.findApplicable(i);return t.serialize(i)},function(i,e,t){var n=t.customTransformerRegistry.findByName(e[1]);if(!n)throw new Error("Trying to deserialize unknown custom value");return n.deserialize(i)}),Bb=[Hd,Bd,Vd,Ud],bh=function(i,e){var t=vh(Bb,function(r){return r.isApplicable(i,e)});if(t)return{value:t.transform(i,e),type:t.annotation(i,e)};var n=vh(kd,function(r){return r.isApplicable(i,e)});if(n)return{value:n.transform(i,e),type:n.annotation}},Gd={};kd.forEach(function(i){Gd[i.annotation]=i});var Ub=function(i,e,t){if(ci(e))switch(e[0]){case"symbol":return Bd.untransform(i,e,t);case"class":return Hd.untransform(i,e,t);case"custom":return Vd.untransform(i,e,t);case"typed-array":return Ud.untransform(i,e,t);default:throw new Error("Unknown transformation: "+e)}else{var n=Gd[e];if(!n)throw new Error("Unknown transformation: "+e);return n.untransform(i,t)}},ao=function(i,e){for(var t=i.keys();e>0;)t.next(),e--;return t.next().value};function Wd(i){if(vo(i,"__proto__"))throw new Error("__proto__ is not allowed as a property");if(vo(i,"prototype"))throw new Error("prototype is not allowed as a property");if(vo(i,"constructor"))throw new Error("constructor is not allowed as a property")}var zb=function(i,e){return Wd(e),e.forEach(function(t){i=i[t]}),i},Tl=function(i,e,t){if(Wd(e),e.length===0)return t(i);for(var n=i,r=0;r<e.length-1;r++){var s=e[r];if(ci(n)){var o=+s;n=n[o]}else if(Ss(n))n=n[s];else if(Bo(n)){var a=+s;n=ao(n,a)}else if(ko(n)){var c=r===e.length-2;if(c)break;var a=+s,l=+e[++r]==0?"key":"value",u=ao(n,a);switch(l){case"key":n=u;break;case"value":n=n.get(u);break}}}var f=e[e.length-1];if((ci(n)||Ss(n))&&(n[f]=t(n[f])),Bo(n)){var h=ao(n,+f),d=t(h);h!==d&&(n.delete(h),n.add(d))}if(ko(n)){var a=+e[e.length-2],m=ao(n,a),l=+f==0?"key":"value";switch(l){case"key":{var g=t(m);n.set(g,n.get(m)),g!==m&&n.delete(m);break}case"value":{n.set(m,t(n.get(m)));break}}}return i},Un=globalThis&&globalThis.__read||function(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return s},oi=globalThis&&globalThis.__spreadArray||function(i,e){for(var t=0,n=e.length,r=i.length;t<n;t++,r++)i[r]=e[t];return i};function El(i,e,t){if(t===void 0&&(t=[]),!!i){if(!ci(i)){Rr(i,function(o,a){return El(o,e,oi(oi([],Un(t)),Un(hs(a))))});return}var n=Un(i,2),r=n[0],s=n[1];s&&Rr(s,function(o,a){El(o,e,oi(oi([],Un(t)),Un(hs(a))))}),e(r,t)}}function Hb(i,e,t){return El(e,function(n,r){i=Tl(i,r,function(s){return Ub(s,n,t)})}),i}function Vb(i,e){function t(o,a){var c=zb(i,hs(a));o.map(hs).forEach(function(l){i=Tl(i,l,function(){return c})})}if(ci(e)){var n=Un(e,2),r=n[0],s=n[1];r.forEach(function(o){i=Tl(i,hs(o),function(){return i})}),s&&Rr(s,t)}else Rr(e,t);return i}var Gb=function(i,e){return Ss(i)||ci(i)||ko(i)||Bo(i)||zd(i,e)};function Wb(i,e,t){var n=t.get(i);n?n.push(e):t.set(i,[e])}function jb(i){var e={},t=void 0;return i.forEach(function(n){if(!(n.length<=1)){var r=Un(n.map(function(a){return a.map(String)}).sort(function(a,c){return a.length-c.length})),s=r[0],o=r.slice(1);s.length===0?t=o.map(Ha):e[Ha(s)]=o.map(Ha)}}),t?bl(e)?[t]:[t,e]:bl(e)?void 0:e}var jd=function(i,e,t,n,r){var s;if(n===void 0&&(n=[]),r===void 0&&(r=[]),yh(i)||Wb(i,n,e),!Gb(i,t)){var o=bh(i,t);return o?{transformedValue:o.value,annotations:[o.type]}:{transformedValue:i}}if(vo(r,i))return{transformedValue:null};var a=bh(i,t),c=(s=a?.value)!==null&&s!==void 0?s:i;yh(i)||(r=oi(oi([],Un(r)),[i]));var l=ci(c)?[]:{},u={};return Rr(c,function(f,h){var d=jd(f,e,t,oi(oi([],Un(n)),[h]),r);l[h]=d.transformedValue,ci(d.annotations)?u[h]=d.annotations:Ss(d.annotations)&&Rr(d.annotations,function(m,g){u[Od(h)+"."+g]=m})}),bl(u)?{transformedValue:l,annotations:a?[a.type]:void 0}:{transformedValue:l,annotations:a?[a.type,u]:u}};function Xd(i){return Object.prototype.toString.call(i).slice(8,-1)}function Xb(i){return Xd(i)!=="Object"?!1:i.constructor===Object&&Object.getPrototypeOf(i)===Object.prototype}function wh(i){return Xd(i)==="Array"}function qb(i,e,t,n,r){const s={}.propertyIsEnumerable.call(n,e)?"enumerable":"nonenumerable";s==="enumerable"&&(i[e]=t),r&&s==="nonenumerable"&&Object.defineProperty(i,e,{value:t,enumerable:!1,writable:!0,configurable:!0})}function Al(i,e={}){if(wh(i))return i.map(r=>Al(r,e));if(!Xb(i))return i;const t=Object.getOwnPropertyNames(i),n=Object.getOwnPropertySymbols(i);return[...t,...n].reduce((r,s)=>{if(wh(e.props)&&!e.props.includes(s))return r;const o=i[s],a=Al(o,e);return qb(r,s,a,i,e.nonenumerable),r},{})}var Ti=globalThis&&globalThis.__assign||function(){return Ti=Object.assign||function(i){for(var e,t=1,n=arguments.length;t<n;t++){e=arguments[t];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(i[r]=e[r])}return i},Ti.apply(this,arguments)},Yb=globalThis&&globalThis.__read||function(i,e){var t=typeof Symbol=="function"&&i[Symbol.iterator];if(!t)return i;var n=t.call(i),r,s=[],o;try{for(;(e===void 0||e-- >0)&&!(r=n.next()).done;)s.push(r.value)}catch(a){o={error:a}}finally{try{r&&!r.done&&(t=n.return)&&t.call(n)}finally{if(o)throw o.error}}return s},$b=globalThis&&globalThis.__spreadArray||function(i,e){for(var t=0,n=e.length,r=i.length;t<n;t++,r++)i[r]=e[t];return i},An=function(){function i(){this.classRegistry=new yb,this.symbolRegistry=new Id(function(e){var t;return(t=e.description)!==null&&t!==void 0?t:""}),this.customTransformerRegistry=new Sb,this.allowedErrorProps=[]}return i.prototype.serialize=function(e){var t=new Map,n=jd(e,t,this),r={json:n.transformedValue};n.annotations&&(r.meta=Ti(Ti({},r.meta),{values:n.annotations}));var s=jb(t);return s&&(r.meta=Ti(Ti({},r.meta),{referentialEqualities:s})),r},i.prototype.deserialize=function(e){var t=e.json,n=e.meta,r=Al(t);return n?.values&&(r=Hb(r,n.values,this)),n?.referentialEqualities&&(r=Vb(r,n.referentialEqualities)),r},i.prototype.stringify=function(e){return JSON.stringify(this.serialize(e))},i.prototype.parse=function(e){return this.deserialize(JSON.parse(e))},i.prototype.registerClass=function(e,t){this.classRegistry.register(e,t)},i.prototype.registerSymbol=function(e,t){this.symbolRegistry.register(e,t)},i.prototype.registerCustom=function(e,t){this.customTransformerRegistry.register(Ti({name:t},e))},i.prototype.allowErrorProps=function(){for(var e,t=[],n=0;n<arguments.length;n++)t[n]=arguments[n];(e=this.allowedErrorProps).push.apply(e,$b([],Yb(t)))},i.defaultInstance=new i,i.serialize=i.defaultInstance.serialize.bind(i.defaultInstance),i.deserialize=i.defaultInstance.deserialize.bind(i.defaultInstance),i.stringify=i.defaultInstance.stringify.bind(i.defaultInstance),i.parse=i.defaultInstance.parse.bind(i.defaultInstance),i.registerClass=i.defaultInstance.registerClass.bind(i.defaultInstance),i.registerSymbol=i.defaultInstance.registerSymbol.bind(i.defaultInstance),i.registerCustom=i.defaultInstance.registerCustom.bind(i.defaultInstance),i.allowErrorProps=i.defaultInstance.allowErrorProps.bind(i.defaultInstance),i}();An.serialize;An.deserialize;An.stringify;An.parse;Ld();const Mh=["Laser","Autopilot","Hammer","placeholder1","placeholder2","placeholder3","placeholder4","placeholder5","placeholder6"],Zb={Laser:15,Autopilot:100,Hammer:100*15,placeholder1:100*15**2,placeholder2:100*15**3,placeholder3:100*15**4,placeholder4:100*15**5,placeholder5:100*15**6,placeholder6:100*15**7},li=i=>Zb[i]*2**Le().upgrades[i],qd={Bird:1,UFO:100,"Weather Effect UFO":1e3},Yd=i=>Le().upgrades[i]===0&&Le().money<li(i)/2*3,Kb=i=>i.availableNews.has("aliensComing"),Sh=()=>Le().completedTutorials.has("nextStage"),$d={wasd:`You have become a fighter pilot that shoots laser beams. This world is peaceful, so your first mission is to protect farmers from harmful birds.
The controls are simple, WASD to move and aim your targets.`,upgrade:"You can now buy upgrades for your aircraft! To do so, click on the button in the upper left corner of the screen.",nextStage:"You can now move on to the next stage! To do so, click the button in the top right corner of the screen.",backToPreviousStage:"If you're finding this stage too difficult, go back to the previous stage and try again after you get more upgrades.",weatherEffect:"We need to kill a red UFO in order to stop the rain. The UFO has a device that can manipulate the weather, and the rain is interfering with the autopilot system."},Qb={aliensComing:["Aliens Are Coming To Invade Earth","According to recent reports, aliens are planning to invade Earth. We should be prepared to fight against them and protect our planet. There are many reasons why aliens would want to invade Earth. Our planet is abundant in resources that they may need, and they may view us as a threat to their own species. Whatever their reasons, we cannot allow them to take over our planet. We need to be prepared to fight against the aliens when they come. We should have weapons and defences ready, and we should all be trained in how to use them. We also need to be prepared to evacuate if necessary. It is vital that we protect our planet from the aliens. We need to be prepared to fight them, and we need to be willing to do whatever it takes to win."],hammer:["UFO Researchers Develop Device That Can Float Hammers In Air",'A team of UFO researchers say they have invented a device that can float hammers in mid-air. The team says the device uses "anti - gravity" technology to achieve the feat. The device, which the team has dubbed the "Hammer levitator", consists of a frame made of aluminum tubing, with a ring of magnets mounted on the top. The device is placed over a hammer, and when it is turned on, the magnets create a magnetic field that levitates the hammer. The device is the latest invention from a team of UFO researchers that has been making headlines in recent years for their unorthodox methods. The team says they are now working on a device that they believe could allow humans to fly.']},Zd="acgSaveData";let Kd=!1;const lo=(i=()=>Math.random())=>({0:i()*ys*60*6,1:i()*ys*60*12}),sn=Rs()(ec(Is((i,e)=>({stage:0,stageTransitingTo:null,money:0,upgrades:Object.fromEntries(Mh.map(t=>[t,0])),completedTutorials:new Set,availableNews:new Set,availableTutorials:new Set,weatherEffectWillBeEnabledIn:lo(),weatherEffectWillBeEnabledInLessThan:lo(()=>1),addMoney:t=>{i(n=>{n.money+=t}),e().money>=li(Mh[0])&&e().addTutorial("upgrade"),Yd("Hammer")||e().addNews("hammer")},buyUpgrade:t=>{i(n=>{n.money-=li(t),n.upgrades[t]++}),e().upgrades.Autopilot>0&&e().addNews("aliensComing"),e().completeTutorial("upgrade")},completeTutorial:t=>{i(n=>{n.completedTutorials.add(t),t==="nextStage"&&n.availableTutorials.add("backToPreviousStage")})},addNews:t=>{e().availableNews.has(t)||i(n=>{n.availableNews.add(t)})},addTutorial:t=>{i(n=>{n.availableTutorials.add(t)})},setStageTransitingTo:t=>{e().stage!==t&&i(n=>{n.stageTransitingTo=t})},completeStageTransition:()=>{i(t=>{t.stageTransitingTo!==null&&(t.stage=t.stageTransitingTo,t.stageTransitingTo=null)}),e().stage===0?e().completeTutorial("backToPreviousStage"):e().stage===1&&e().completeTutorial("nextStage")},countdown:()=>{!Sh()||(i(t=>{t.weatherEffectWillBeEnabledIn[t.stage]--,t.weatherEffectWillBeEnabledInLessThan[t.stage]--}),e().weatherEffectWillBeEnabledIn[e().stage]<0&&e().addTutorial("weatherEffect"))},getWeather:()=>{if(!Sh())return null;const t=e().weatherEffectWillBeEnabledIn[e().stage]<=0;return e().stage===0?{name:"Rain",enabled:t}:null},stopWeatherEffect:()=>{i(t=>{t.weatherEffectWillBeEnabledIn[t.stage]=lo()[t.stage],t.weatherEffectWillBeEnabledInLessThan[t.stage]=lo(()=>1)[t.stage]})}})),{name:Zd,version:3,serialize:i=>{if(Kd)throw new Error("destroyed");return An.stringify(i)},deserialize:i=>An.parse(i)}));window.store=sn;const Le=sn.getState,Hr=sn.subscribe,Jb=()=>{sn.destroy(),Kd=!0,localStorage.removeItem(Zd)},Qd=i=>Object.entries(i),Tn=(i,e)=>{for(const[t,n]of Object.entries(e))if(Object.getPrototypeOf(n)===Object.prototype)for(const[r,s]of Object.entries(n))Array.isArray(s)?i[t][r](...s):i[t][r](s);else Array.isArray(n)?i[t](...n):i[t](n);return i};var e1=0;function re(i,e,t,n,r){var s,o,a={};for(o in e)o=="ref"?s=e[o]:a[o]=e[o];var c={type:i,props:a,key:t,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--e1,__source:r,__self:n};if(typeof i=="function"&&(s=i.defaultProps))for(o in s)a[o]===void 0&&(a[o]=s[o]);return xe.vnode&&xe.vnode(c),c}const Uo=25,t1=(i,e)=>{const t=Le().upgrades[i]>=Uo?new Xe(255,0,0,1):Le().money>=li(i)?new Xe(0,220,220,1):new Xe(128,128,128,1),n=Le().upgrades[i]>=Uo?1:Le().money/li(i);let r="linear-gradient(90deg,";for(let s=0;s<=1;s+=.05){const o=t.clone(),a=(Math.sin(s*2-Date.now()*.004+e)+1)/2;o.x+=a*70,o.y+=a*70,o.z+=a*70,s>n?o.w=0:o.w=.5,r+=`rgba(${o.toArray().join(",")}) ${s*100}%,`}return`${r.slice(0,-1)})`},n1=()=>{const i=Ut(sn,e=>e.upgrades);return re("div",{class:"absolute left-1 top-1",children:re("div",{class:"px-3 pt-1 pb-3 window",children:[re("h2",{class:"mb-2",children:"Upgrades"}),Qd(i).filter((e,t,n)=>t<2||n[t-1][1]>0||n[t-2][1]>0).map(([e,t],n)=>re(i1,{name:e,count:t,rowNumber:n},e))]})})},i1=i=>{const e=Ut(sn,a=>a.buyUpgrade),t=Ut(sn,a=>a.money),[n,r]=zi(!1),[,s]=zi({}),o=Ut(sn,a=>a.getWeather());return Cr(()=>{const a=setInterval(()=>{s({})},16.666666666666668);return()=>{clearTimeout(a)}},[]),re("div",{class:"relative block hover:cursor-pointer mb-1 backdrop-blur-3xl drop-shadow-md select-none border-opacity-40 border-[1px] border-t-gray-400 border-l-gray-400 border-b-gray-600 border-r-gray-600",style:{background:t1(i.name,i.rowNumber)},disabled:li(i.name)>t||i.count>=Uo,onMouseDown:()=>{li(i.name)>t||i.count>=Uo||e(i.name)},onMouseEnter:()=>{r(!0)},onMouseLeave:()=>{r(!1)},children:[re("div",{class:"px-2 hover:bg-[linear-gradient(0deg,rgba(255,255,255,1)_0%,rgba(255,255,255,0)_10%)]",children:[re("span",{class:"inline-block w-28",children:Yd(i.name)?"???":i.name}),re("span",{class:"float-right",children:[i.count,i.name==="Autopilot"&&o?.enabled&&" (-5)"]})]}),n&&re("div",{class:"absolute left-full top-0 ml-1 px-3 tooltip whitespace-nowrap",children:[t," / ",li(i.name)]})]},i.name)},_i=new Cf,kt=new D,ti=new D,st=new ut,Th={X:new D(1,0,0),Y:new D(0,1,0),Z:new D(0,0,1)},Va={type:"change"},Eh={type:"mouseDown"},Ah={type:"mouseUp",mode:null},Ch={type:"objectChange"};class r1 extends qe{constructor(e,t){super(),t===void 0&&(console.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'),t=document),this.isTransformControls=!0,this.visible=!1,this.domElement=t,this.domElement.style.touchAction="none";const n=new u1;this._gizmo=n,this.add(n);const r=new h1;this._plane=r,this.add(r);const s=this;function o(y,x){let v=x;Object.defineProperty(s,y,{get:function(){return v!==void 0?v:x},set:function(w){v!==w&&(v=w,r[y]=w,n[y]=w,s.dispatchEvent({type:y+"-changed",value:w}),s.dispatchEvent(Va))}}),s[y]=x,r[y]=x,n[y]=x}o("camera",e),o("object",void 0),o("enabled",!0),o("axis",null),o("mode","translate"),o("translationSnap",null),o("rotationSnap",null),o("scaleSnap",null),o("space","world"),o("size",1),o("dragging",!1),o("showX",!0),o("showY",!0),o("showZ",!0);const a=new D,c=new D,l=new ut,u=new ut,f=new D,h=new ut,d=new D,m=new D,g=new D,p=0,_=new D;o("worldPosition",a),o("worldPositionStart",c),o("worldQuaternion",l),o("worldQuaternionStart",u),o("cameraPosition",f),o("cameraQuaternion",h),o("pointStart",d),o("pointEnd",m),o("rotationAxis",g),o("rotationAngle",p),o("eye",_),this._offset=new D,this._startNorm=new D,this._endNorm=new D,this._cameraScale=new D,this._parentPosition=new D,this._parentQuaternion=new ut,this._parentQuaternionInv=new ut,this._parentScale=new D,this._worldScaleStart=new D,this._worldQuaternionInv=new ut,this._worldScale=new D,this._positionStart=new D,this._quaternionStart=new ut,this._scaleStart=new D,this._getPointer=s1.bind(this),this._onPointerDown=a1.bind(this),this._onPointerHover=o1.bind(this),this._onPointerMove=l1.bind(this),this._onPointerUp=c1.bind(this),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointermove",this._onPointerHover),this.domElement.addEventListener("pointerup",this._onPointerUp)}updateMatrixWorld(){this.object!==void 0&&(this.object.updateMatrixWorld(),this.object.parent===null?console.error("TransformControls: The attached 3D object must be a part of the scene graph."):this.object.parent.matrixWorld.decompose(this._parentPosition,this._parentQuaternion,this._parentScale),this.object.matrixWorld.decompose(this.worldPosition,this.worldQuaternion,this._worldScale),this._parentQuaternionInv.copy(this._parentQuaternion).invert(),this._worldQuaternionInv.copy(this.worldQuaternion).invert()),this.camera.updateMatrixWorld(),this.camera.matrixWorld.decompose(this.cameraPosition,this.cameraQuaternion,this._cameraScale),this.camera.isOrthographicCamera?this.camera.getWorldDirection(this.eye).negate():this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(),super.updateMatrixWorld(this)}pointerHover(e){if(this.object===void 0||this.dragging===!0)return;_i.setFromCamera(e,this.camera);const t=Ga(this._gizmo.picker[this.mode],_i);t?this.axis=t.object.name:this.axis=null}pointerDown(e){if(!(this.object===void 0||this.dragging===!0||e.button!==0)&&this.axis!==null){_i.setFromCamera(e,this.camera);const t=Ga(this._plane,_i,!0);t&&(this.object.updateMatrixWorld(),this.object.parent.updateMatrixWorld(),this._positionStart.copy(this.object.position),this._quaternionStart.copy(this.object.quaternion),this._scaleStart.copy(this.object.scale),this.object.matrixWorld.decompose(this.worldPositionStart,this.worldQuaternionStart,this._worldScaleStart),this.pointStart.copy(t.point).sub(this.worldPositionStart)),this.dragging=!0,Eh.mode=this.mode,this.dispatchEvent(Eh)}}pointerMove(e){const t=this.axis,n=this.mode,r=this.object;let s=this.space;if(n==="scale"?s="local":(t==="E"||t==="XYZE"||t==="XYZ")&&(s="world"),r===void 0||t===null||this.dragging===!1||e.button!==-1)return;_i.setFromCamera(e,this.camera);const o=Ga(this._plane,_i,!0);if(!!o){if(this.pointEnd.copy(o.point).sub(this.worldPositionStart),n==="translate")this._offset.copy(this.pointEnd).sub(this.pointStart),s==="local"&&t!=="XYZ"&&this._offset.applyQuaternion(this._worldQuaternionInv),t.indexOf("X")===-1&&(this._offset.x=0),t.indexOf("Y")===-1&&(this._offset.y=0),t.indexOf("Z")===-1&&(this._offset.z=0),s==="local"&&t!=="XYZ"?this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale):this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale),r.position.copy(this._offset).add(this._positionStart),this.translationSnap&&(s==="local"&&(r.position.applyQuaternion(st.copy(this._quaternionStart).invert()),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.position.applyQuaternion(this._quaternionStart)),s==="world"&&(r.parent&&r.position.add(kt.setFromMatrixPosition(r.parent.matrixWorld)),t.search("X")!==-1&&(r.position.x=Math.round(r.position.x/this.translationSnap)*this.translationSnap),t.search("Y")!==-1&&(r.position.y=Math.round(r.position.y/this.translationSnap)*this.translationSnap),t.search("Z")!==-1&&(r.position.z=Math.round(r.position.z/this.translationSnap)*this.translationSnap),r.parent&&r.position.sub(kt.setFromMatrixPosition(r.parent.matrixWorld))));else if(n==="scale"){if(t.search("XYZ")!==-1){let a=this.pointEnd.length()/this.pointStart.length();this.pointEnd.dot(this.pointStart)<0&&(a*=-1),ti.set(a,a,a)}else kt.copy(this.pointStart),ti.copy(this.pointEnd),kt.applyQuaternion(this._worldQuaternionInv),ti.applyQuaternion(this._worldQuaternionInv),ti.divide(kt),t.search("X")===-1&&(ti.x=1),t.search("Y")===-1&&(ti.y=1),t.search("Z")===-1&&(ti.z=1);r.scale.copy(this._scaleStart).multiply(ti),this.scaleSnap&&(t.search("X")!==-1&&(r.scale.x=Math.round(r.scale.x/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Y")!==-1&&(r.scale.y=Math.round(r.scale.y/this.scaleSnap)*this.scaleSnap||this.scaleSnap),t.search("Z")!==-1&&(r.scale.z=Math.round(r.scale.z/this.scaleSnap)*this.scaleSnap||this.scaleSnap))}else if(n==="rotate"){this._offset.copy(this.pointEnd).sub(this.pointStart);const a=20/this.worldPosition.distanceTo(kt.setFromMatrixPosition(this.camera.matrixWorld));t==="E"?(this.rotationAxis.copy(this.eye),this.rotationAngle=this.pointEnd.angleTo(this.pointStart),this._startNorm.copy(this.pointStart).normalize(),this._endNorm.copy(this.pointEnd).normalize(),this.rotationAngle*=this._endNorm.cross(this._startNorm).dot(this.eye)<0?1:-1):t==="XYZE"?(this.rotationAxis.copy(this._offset).cross(this.eye).normalize(),this.rotationAngle=this._offset.dot(kt.copy(this.rotationAxis).cross(this.eye))*a):(t==="X"||t==="Y"||t==="Z")&&(this.rotationAxis.copy(Th[t]),kt.copy(Th[t]),s==="local"&&kt.applyQuaternion(this.worldQuaternion),this.rotationAngle=this._offset.dot(kt.cross(this.eye).normalize())*a),this.rotationSnap&&(this.rotationAngle=Math.round(this.rotationAngle/this.rotationSnap)*this.rotationSnap),s==="local"&&t!=="E"&&t!=="XYZE"?(r.quaternion.copy(this._quaternionStart),r.quaternion.multiply(st.setFromAxisAngle(this.rotationAxis,this.rotationAngle)).normalize()):(this.rotationAxis.applyQuaternion(this._parentQuaternionInv),r.quaternion.copy(st.setFromAxisAngle(this.rotationAxis,this.rotationAngle)),r.quaternion.multiply(this._quaternionStart).normalize())}this.dispatchEvent(Va),this.dispatchEvent(Ch)}}pointerUp(e){e.button===0&&(this.dragging&&this.axis!==null&&(Ah.mode=this.mode,this.dispatchEvent(Ah)),this.dragging=!1,this.axis=null)}dispose(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerHover),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.traverse(function(e){e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()})}attach(e){return this.object=e,this.visible=!0,this}detach(){return this.object=void 0,this.visible=!1,this.axis=null,this}reset(){!this.enabled||this.dragging&&(this.object.position.copy(this._positionStart),this.object.quaternion.copy(this._quaternionStart),this.object.scale.copy(this._scaleStart),this.dispatchEvent(Va),this.dispatchEvent(Ch),this.pointStart.copy(this.pointEnd))}getRaycaster(){return _i}getMode(){return this.mode}setMode(e){this.mode=e}setTranslationSnap(e){this.translationSnap=e}setRotationSnap(e){this.rotationSnap=e}setScaleSnap(e){this.scaleSnap=e}setSize(e){this.size=e}setSpace(e){this.space=e}}function s1(i){if(this.domElement.ownerDocument.pointerLockElement)return{x:0,y:0,button:i.button};{const e=this.domElement.getBoundingClientRect();return{x:(i.clientX-e.left)/e.width*2-1,y:-(i.clientY-e.top)/e.height*2+1,button:i.button}}}function o1(i){if(!!this.enabled)switch(i.pointerType){case"mouse":case"pen":this.pointerHover(this._getPointer(i));break}}function a1(i){!this.enabled||(document.pointerLockElement||this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.pointerHover(this._getPointer(i)),this.pointerDown(this._getPointer(i)))}function l1(i){!this.enabled||this.pointerMove(this._getPointer(i))}function c1(i){!this.enabled||(this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.pointerUp(this._getPointer(i)))}function Ga(i,e,t){const n=e.intersectObject(i,!0);for(let r=0;r<n.length;r++)if(n[r].object.visible||t)return n[r];return!1}const co=new Nr,Ze=new D(0,1,0),Dh=new D(0,0,0),Ph=new Fe,uo=new ut,xo=new ut,vn=new D,Lh=new Fe,rs=new D(1,0,0),bi=new D(0,1,0),ss=new D(0,0,1),ho=new D,Zr=new D,Kr=new D;class u1 extends qe{constructor(){super(),this.isTransformControlsGizmo=!0,this.type="TransformControlsGizmo";const e=new fn({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),t=new Go({depthTest:!1,depthWrite:!1,fog:!1,toneMapped:!1,transparent:!0}),n=e.clone();n.opacity=.15;const r=t.clone();r.opacity=.5;const s=e.clone();s.color.setHex(16711680);const o=e.clone();o.color.setHex(65280);const a=e.clone();a.color.setHex(255);const c=e.clone();c.color.setHex(16711680),c.opacity=.5;const l=e.clone();l.color.setHex(65280),l.opacity=.5;const u=e.clone();u.color.setHex(255),u.opacity=.5;const f=e.clone();f.opacity=.25;const h=e.clone();h.color.setHex(16776960),h.opacity=.25,e.clone().color.setHex(16776960);const m=e.clone();m.color.setHex(7895160);const g=new At(0,.04,.1,12);g.translate(0,.05,0);const p=new at(.08,.08,.08);p.translate(0,.04,0);const _=new ht;_.setAttribute("position",new $e([0,0,0,1,0,0],3));const y=new At(.0075,.0075,.5,3);y.translate(0,.25,0);function x(V,$){const ee=new Si(V,.0075,3,64,$*Math.PI*2);return ee.rotateY(Math.PI/2),ee.rotateX(Math.PI/2),ee}function v(){const V=new ht;return V.setAttribute("position",new $e([0,0,0,1,1,1],3)),V}const w={X:[[new se(g,s),[.5,0,0],[0,0,-Math.PI/2]],[new se(g,s),[-.5,0,0],[0,0,Math.PI/2]],[new se(y,s),[0,0,0],[0,0,-Math.PI/2]]],Y:[[new se(g,o),[0,.5,0]],[new se(g,o),[0,-.5,0],[Math.PI,0,0]],[new se(y,o)]],Z:[[new se(g,a),[0,0,.5],[Math.PI/2,0,0]],[new se(g,a),[0,0,-.5],[-Math.PI/2,0,0]],[new se(y,a),null,[Math.PI/2,0,0]]],XYZ:[[new se(new pr(.1,0),f.clone()),[0,0,0]]],XY:[[new se(new at(.15,.15,.01),u.clone()),[.15,.15,0]]],YZ:[[new se(new at(.15,.15,.01),c.clone()),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new se(new at(.15,.15,.01),l.clone()),[.15,0,.15],[-Math.PI/2,0,0]]]},A={X:[[new se(new At(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new se(new At(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new se(new At(.2,0,.6,4),n),[0,.3,0]],[new se(new At(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new se(new At(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new se(new At(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XYZ:[[new se(new pr(.2,0),n)]],XY:[[new se(new at(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new se(new at(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new se(new at(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]]},R={START:[[new se(new pr(.01,2),r),null,null,null,"helper"]],END:[[new se(new pr(.01,2),r),null,null,null,"helper"]],DELTA:[[new un(v(),r),null,null,null,"helper"]],X:[[new un(_,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new un(_,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new un(_,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]},b={XYZE:[[new se(x(.5,1),m),null,[0,Math.PI/2,0]]],X:[[new se(x(.5,.5),s)]],Y:[[new se(x(.5,.5),o),null,[0,0,-Math.PI/2]]],Z:[[new se(x(.5,.5),a),null,[0,Math.PI/2,0]]],E:[[new se(x(.75,1),h),null,[0,Math.PI/2,0]]]},T={AXIS:[[new un(_,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]]},I={XYZE:[[new se(new Gl(.25,10,8),n)]],X:[[new se(new Si(.5,.1,4,24),n),[0,0,0],[0,-Math.PI/2,-Math.PI/2]]],Y:[[new se(new Si(.5,.1,4,24),n),[0,0,0],[Math.PI/2,0,0]]],Z:[[new se(new Si(.5,.1,4,24),n),[0,0,0],[0,0,-Math.PI/2]]],E:[[new se(new Si(.75,.1,2,24),n)]]},W={X:[[new se(p,s),[.5,0,0],[0,0,-Math.PI/2]],[new se(y,s),[0,0,0],[0,0,-Math.PI/2]],[new se(p,s),[-.5,0,0],[0,0,Math.PI/2]]],Y:[[new se(p,o),[0,.5,0]],[new se(y,o)],[new se(p,o),[0,-.5,0],[0,0,Math.PI]]],Z:[[new se(p,a),[0,0,.5],[Math.PI/2,0,0]],[new se(y,a),[0,0,0],[Math.PI/2,0,0]],[new se(p,a),[0,0,-.5],[-Math.PI/2,0,0]]],XY:[[new se(new at(.15,.15,.01),u),[.15,.15,0]]],YZ:[[new se(new at(.15,.15,.01),c),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new se(new at(.15,.15,.01),l),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new se(new at(.1,.1,.1),f.clone())]]},j={X:[[new se(new At(.2,0,.6,4),n),[.3,0,0],[0,0,-Math.PI/2]],[new se(new At(.2,0,.6,4),n),[-.3,0,0],[0,0,Math.PI/2]]],Y:[[new se(new At(.2,0,.6,4),n),[0,.3,0]],[new se(new At(.2,0,.6,4),n),[0,-.3,0],[0,0,Math.PI]]],Z:[[new se(new At(.2,0,.6,4),n),[0,0,.3],[Math.PI/2,0,0]],[new se(new At(.2,0,.6,4),n),[0,0,-.3],[-Math.PI/2,0,0]]],XY:[[new se(new at(.2,.2,.01),n),[.15,.15,0]]],YZ:[[new se(new at(.2,.2,.01),n),[0,.15,.15],[0,Math.PI/2,0]]],XZ:[[new se(new at(.2,.2,.01),n),[.15,0,.15],[-Math.PI/2,0,0]]],XYZ:[[new se(new at(.2,.2,.2),n),[0,0,0]]]},U={X:[[new un(_,r.clone()),[-1e3,0,0],null,[1e6,1,1],"helper"]],Y:[[new un(_,r.clone()),[0,-1e3,0],[0,0,Math.PI/2],[1e6,1,1],"helper"]],Z:[[new un(_,r.clone()),[0,0,-1e3],[0,-Math.PI/2,0],[1e6,1,1],"helper"]]};function O(V){const $=new qe;for(const ee in V)for(let X=V[ee].length;X--;){const F=V[ee][X][0].clone(),k=V[ee][X][1],te=V[ee][X][2],J=V[ee][X][3],ie=V[ee][X][4];F.name=ee,F.tag=ie,k&&F.position.set(k[0],k[1],k[2]),te&&F.rotation.set(te[0],te[1],te[2]),J&&F.scale.set(J[0],J[1],J[2]),F.updateMatrix();const ue=F.geometry.clone();ue.applyMatrix4(F.matrix),F.geometry=ue,F.renderOrder=1/0,F.position.set(0,0,0),F.rotation.set(0,0,0),F.scale.set(1,1,1),$.add(F)}return $}this.gizmo={},this.picker={},this.helper={},this.add(this.gizmo.translate=O(w)),this.add(this.gizmo.rotate=O(b)),this.add(this.gizmo.scale=O(W)),this.add(this.picker.translate=O(A)),this.add(this.picker.rotate=O(I)),this.add(this.picker.scale=O(j)),this.add(this.helper.translate=O(R)),this.add(this.helper.rotate=O(T)),this.add(this.helper.scale=O(U)),this.picker.translate.visible=!1,this.picker.rotate.visible=!1,this.picker.scale.visible=!1}updateMatrixWorld(e){const n=(this.mode==="scale"?"local":this.space)==="local"?this.worldQuaternion:xo;this.gizmo.translate.visible=this.mode==="translate",this.gizmo.rotate.visible=this.mode==="rotate",this.gizmo.scale.visible=this.mode==="scale",this.helper.translate.visible=this.mode==="translate",this.helper.rotate.visible=this.mode==="rotate",this.helper.scale.visible=this.mode==="scale";let r=[];r=r.concat(this.picker[this.mode].children),r=r.concat(this.gizmo[this.mode].children),r=r.concat(this.helper[this.mode].children);for(let s=0;s<r.length;s++){const o=r[s];o.visible=!0,o.rotation.set(0,0,0),o.position.copy(this.worldPosition);let a;if(this.camera.isOrthographicCamera?a=(this.camera.top-this.camera.bottom)/this.camera.zoom:a=this.worldPosition.distanceTo(this.cameraPosition)*Math.min(1.9*Math.tan(Math.PI*this.camera.fov/360)/this.camera.zoom,7),o.scale.set(1,1,1).multiplyScalar(a*this.size/4),o.tag==="helper"){o.visible=!1,o.name==="AXIS"?(o.position.copy(this.worldPositionStart),o.visible=!!this.axis,this.axis==="X"&&(st.setFromEuler(co.set(0,0,0)),o.quaternion.copy(n).multiply(st),Math.abs(Ze.copy(rs).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Y"&&(st.setFromEuler(co.set(0,0,Math.PI/2)),o.quaternion.copy(n).multiply(st),Math.abs(Ze.copy(bi).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="Z"&&(st.setFromEuler(co.set(0,Math.PI/2,0)),o.quaternion.copy(n).multiply(st),Math.abs(Ze.copy(ss).applyQuaternion(n).dot(this.eye))>.9&&(o.visible=!1)),this.axis==="XYZE"&&(st.setFromEuler(co.set(0,Math.PI/2,0)),Ze.copy(this.rotationAxis),o.quaternion.setFromRotationMatrix(Ph.lookAt(Dh,Ze,bi)),o.quaternion.multiply(st),o.visible=this.dragging),this.axis==="E"&&(o.visible=!1)):o.name==="START"?(o.position.copy(this.worldPositionStart),o.visible=this.dragging):o.name==="END"?(o.position.copy(this.worldPosition),o.visible=this.dragging):o.name==="DELTA"?(o.position.copy(this.worldPositionStart),o.quaternion.copy(this.worldQuaternionStart),kt.set(1e-10,1e-10,1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1),kt.applyQuaternion(this.worldQuaternionStart.clone().invert()),o.scale.copy(kt),o.visible=this.dragging):(o.quaternion.copy(n),this.dragging?o.position.copy(this.worldPositionStart):o.position.copy(this.worldPosition),this.axis&&(o.visible=this.axis.search(o.name)!==-1));continue}o.quaternion.copy(n),this.mode==="translate"||this.mode==="scale"?(o.name==="X"&&Math.abs(Ze.copy(rs).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Y"&&Math.abs(Ze.copy(bi).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="Z"&&Math.abs(Ze.copy(ss).applyQuaternion(n).dot(this.eye))>.99&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XY"&&Math.abs(Ze.copy(ss).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="YZ"&&Math.abs(Ze.copy(rs).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1),o.name==="XZ"&&Math.abs(Ze.copy(bi).applyQuaternion(n).dot(this.eye))<.2&&(o.scale.set(1e-10,1e-10,1e-10),o.visible=!1)):this.mode==="rotate"&&(uo.copy(n),Ze.copy(this.eye).applyQuaternion(st.copy(n).invert()),o.name.search("E")!==-1&&o.quaternion.setFromRotationMatrix(Ph.lookAt(this.eye,Dh,bi)),o.name==="X"&&(st.setFromAxisAngle(rs,Math.atan2(-Ze.y,Ze.z)),st.multiplyQuaternions(uo,st),o.quaternion.copy(st)),o.name==="Y"&&(st.setFromAxisAngle(bi,Math.atan2(Ze.x,Ze.z)),st.multiplyQuaternions(uo,st),o.quaternion.copy(st)),o.name==="Z"&&(st.setFromAxisAngle(ss,Math.atan2(Ze.y,Ze.x)),st.multiplyQuaternions(uo,st),o.quaternion.copy(st))),o.visible=o.visible&&(o.name.indexOf("X")===-1||this.showX),o.visible=o.visible&&(o.name.indexOf("Y")===-1||this.showY),o.visible=o.visible&&(o.name.indexOf("Z")===-1||this.showZ),o.visible=o.visible&&(o.name.indexOf("E")===-1||this.showX&&this.showY&&this.showZ),o.material._color=o.material._color||o.material.color.clone(),o.material._opacity=o.material._opacity||o.material.opacity,o.material.color.copy(o.material._color),o.material.opacity=o.material._opacity,this.enabled&&this.axis&&(o.name===this.axis||this.axis.split("").some(function(c){return o.name===c}))&&(o.material.color.setHex(16776960),o.material.opacity=1)}super.updateMatrixWorld(e)}}class h1 extends se{constructor(){super(new Or(1e5,1e5,2,2),new fn({visible:!1,wireframe:!0,side:bn,transparent:!0,opacity:.1,toneMapped:!1})),this.isTransformControlsPlane=!0,this.type="TransformControlsPlane"}updateMatrixWorld(e){let t=this.space;switch(this.position.copy(this.worldPosition),this.mode==="scale"&&(t="local"),ho.copy(rs).applyQuaternion(t==="local"?this.worldQuaternion:xo),Zr.copy(bi).applyQuaternion(t==="local"?this.worldQuaternion:xo),Kr.copy(ss).applyQuaternion(t==="local"?this.worldQuaternion:xo),Ze.copy(Zr),this.mode){case"translate":case"scale":switch(this.axis){case"X":Ze.copy(this.eye).cross(ho),vn.copy(ho).cross(Ze);break;case"Y":Ze.copy(this.eye).cross(Zr),vn.copy(Zr).cross(Ze);break;case"Z":Ze.copy(this.eye).cross(Kr),vn.copy(Kr).cross(Ze);break;case"XY":vn.copy(Kr);break;case"YZ":vn.copy(ho);break;case"XZ":Ze.copy(Kr),vn.copy(Zr);break;case"XYZ":case"E":vn.set(0,0,0);break}break;case"rotate":default:vn.set(0,0,0)}vn.length()===0?this.quaternion.copy(this.cameraQuaternion):(Lh.lookAt(kt.set(0,0,0),vn,Ze),this.quaternion.setFromRotationMatrix(Lh)),super.updateMatrixWorld(e)}}const Rh={type:"change"},Wa={type:"start"},Ih={type:"end"};class f1 extends Vi{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new D,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Zi.ROTATE,MIDDLE:Zi.DOLLY,RIGHT:Zi.PAN},this.touches={ONE:Ki.ROTATE,TWO:Ki.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(L){L.addEventListener("keydown",xt),this._domElementKeyEvents=L},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(Rh),n.update(),s=r.NONE},this.update=function(){const L=new D,B=new ut().setFromUnitVectors(e.up,new D(0,1,0)),ce=B.clone().invert(),de=new D,he=new ut,_e=2*Math.PI;return function(){const Ne=n.object.position;L.copy(Ne).sub(n.target),L.applyQuaternion(B),a.setFromVector3(L),n.autoRotate&&s===r.NONE&&T(R()),n.enableDamping?(a.theta+=c.theta*n.dampingFactor,a.phi+=c.phi*n.dampingFactor):(a.theta+=c.theta,a.phi+=c.phi);let Ce=n.minAzimuthAngle,Ue=n.maxAzimuthAngle;return isFinite(Ce)&&isFinite(Ue)&&(Ce<-Math.PI?Ce+=_e:Ce>Math.PI&&(Ce-=_e),Ue<-Math.PI?Ue+=_e:Ue>Math.PI&&(Ue-=_e),Ce<=Ue?a.theta=Math.max(Ce,Math.min(Ue,a.theta)):a.theta=a.theta>(Ce+Ue)/2?Math.max(Ce,a.theta):Math.min(Ue,a.theta)),a.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=l,a.radius=Math.max(n.minDistance,Math.min(n.maxDistance,a.radius)),n.enableDamping===!0?n.target.addScaledVector(u,n.dampingFactor):n.target.add(u),L.setFromSpherical(a),L.applyQuaternion(ce),Ne.copy(n.target).add(L),n.object.lookAt(n.target),n.enableDamping===!0?(c.theta*=1-n.dampingFactor,c.phi*=1-n.dampingFactor,u.multiplyScalar(1-n.dampingFactor)):(c.set(0,0,0),u.set(0,0,0)),l=1,f||de.distanceToSquared(n.object.position)>o||8*(1-he.dot(n.object.quaternion))>o?(n.dispatchEvent(Rh),de.copy(n.object.position),he.copy(n.object.quaternion),f=!1,!0):!1}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",S),n.domElement.removeEventListener("pointerdown",Qe),n.domElement.removeEventListener("pointercancel",ft),n.domElement.removeEventListener("wheel",vt),n.domElement.removeEventListener("pointermove",it),n.domElement.removeEventListener("pointerup",et),n._domElementKeyEvents!==null&&n._domElementKeyEvents.removeEventListener("keydown",xt)};const n=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Hu,c=new Hu;let l=1;const u=new D;let f=!1;const h=new fe,d=new fe,m=new fe,g=new fe,p=new fe,_=new fe,y=new fe,x=new fe,v=new fe,w=[],A={};function R(){return 2*Math.PI/60/60*n.autoRotateSpeed}function b(){return Math.pow(.95,n.zoomSpeed)}function T(L){c.theta-=L}function I(L){c.phi-=L}const W=function(){const L=new D;return function(ce,de){L.setFromMatrixColumn(de,0),L.multiplyScalar(-ce),u.add(L)}}(),j=function(){const L=new D;return function(ce,de){n.screenSpacePanning===!0?L.setFromMatrixColumn(de,1):(L.setFromMatrixColumn(de,0),L.crossVectors(n.object.up,L)),L.multiplyScalar(ce),u.add(L)}}(),U=function(){const L=new D;return function(ce,de){const he=n.domElement;if(n.object.isPerspectiveCamera){const _e=n.object.position;L.copy(_e).sub(n.target);let ge=L.length();ge*=Math.tan(n.object.fov/2*Math.PI/180),W(2*ce*ge/he.clientHeight,n.object.matrix),j(2*de*ge/he.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(W(ce*(n.object.right-n.object.left)/n.object.zoom/he.clientWidth,n.object.matrix),j(de*(n.object.top-n.object.bottom)/n.object.zoom/he.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function O(L){n.object.isPerspectiveCamera?l/=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function V(L){n.object.isPerspectiveCamera?l*=L:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/L)),n.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function $(L){h.set(L.clientX,L.clientY)}function ee(L){y.set(L.clientX,L.clientY)}function X(L){g.set(L.clientX,L.clientY)}function F(L){d.set(L.clientX,L.clientY),m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const B=n.domElement;T(2*Math.PI*m.x/B.clientHeight),I(2*Math.PI*m.y/B.clientHeight),h.copy(d),n.update()}function k(L){x.set(L.clientX,L.clientY),v.subVectors(x,y),v.y>0?O(b()):v.y<0&&V(b()),y.copy(x),n.update()}function te(L){p.set(L.clientX,L.clientY),_.subVectors(p,g).multiplyScalar(n.panSpeed),U(_.x,_.y),g.copy(p),n.update()}function J(L){L.deltaY<0?V(b()):L.deltaY>0&&O(b()),n.update()}function ie(L){let B=!1;switch(L.code){case n.keys.UP:U(0,n.keyPanSpeed),B=!0;break;case n.keys.BOTTOM:U(0,-n.keyPanSpeed),B=!0;break;case n.keys.LEFT:U(n.keyPanSpeed,0),B=!0;break;case n.keys.RIGHT:U(-n.keyPanSpeed,0),B=!0;break}B&&(L.preventDefault(),n.update())}function ue(){if(w.length===1)h.set(w[0].pageX,w[0].pageY);else{const L=.5*(w[0].pageX+w[1].pageX),B=.5*(w[0].pageY+w[1].pageY);h.set(L,B)}}function G(){if(w.length===1)g.set(w[0].pageX,w[0].pageY);else{const L=.5*(w[0].pageX+w[1].pageX),B=.5*(w[0].pageY+w[1].pageY);g.set(L,B)}}function Z(){const L=w[0].pageX-w[1].pageX,B=w[0].pageY-w[1].pageY,ce=Math.sqrt(L*L+B*B);y.set(0,ce)}function Ae(){n.enableZoom&&Z(),n.enablePan&&G()}function ve(){n.enableZoom&&Z(),n.enableRotate&&ue()}function ye(L){if(w.length==1)d.set(L.pageX,L.pageY);else{const ce=me(L),de=.5*(L.pageX+ce.x),he=.5*(L.pageY+ce.y);d.set(de,he)}m.subVectors(d,h).multiplyScalar(n.rotateSpeed);const B=n.domElement;T(2*Math.PI*m.x/B.clientHeight),I(2*Math.PI*m.y/B.clientHeight),h.copy(d)}function le(L){if(w.length===1)p.set(L.pageX,L.pageY);else{const B=me(L),ce=.5*(L.pageX+B.x),de=.5*(L.pageY+B.y);p.set(ce,de)}_.subVectors(p,g).multiplyScalar(n.panSpeed),U(_.x,_.y),g.copy(p)}function Be(L){const B=me(L),ce=L.pageX-B.x,de=L.pageY-B.y,he=Math.sqrt(ce*ce+de*de);x.set(0,he),v.set(0,Math.pow(x.y/y.y,n.zoomSpeed)),O(v.y),y.copy(x)}function Te(L){n.enableZoom&&Be(L),n.enablePan&&le(L)}function be(L){n.enableZoom&&Be(L),n.enableRotate&&ye(L)}function Qe(L){n.enabled!==!1&&(w.length===0&&(n.domElement.setPointerCapture(L.pointerId),n.domElement.addEventListener("pointermove",it),n.domElement.addEventListener("pointerup",et)),P(L),L.pointerType==="touch"?C(L):tt(L))}function it(L){n.enabled!==!1&&(L.pointerType==="touch"?M(L):ke(L))}function et(L){Q(L),w.length===0&&(n.domElement.releasePointerCapture(L.pointerId),n.domElement.removeEventListener("pointermove",it),n.domElement.removeEventListener("pointerup",et)),n.dispatchEvent(Ih),s=r.NONE}function ft(L){Q(L)}function tt(L){let B;switch(L.button){case 0:B=n.mouseButtons.LEFT;break;case 1:B=n.mouseButtons.MIDDLE;break;case 2:B=n.mouseButtons.RIGHT;break;default:B=-1}switch(B){case Zi.DOLLY:if(n.enableZoom===!1)return;ee(L),s=r.DOLLY;break;case Zi.ROTATE:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enablePan===!1)return;X(L),s=r.PAN}else{if(n.enableRotate===!1)return;$(L),s=r.ROTATE}break;case Zi.PAN:if(L.ctrlKey||L.metaKey||L.shiftKey){if(n.enableRotate===!1)return;$(L),s=r.ROTATE}else{if(n.enablePan===!1)return;X(L),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Wa)}function ke(L){switch(s){case r.ROTATE:if(n.enableRotate===!1)return;F(L);break;case r.DOLLY:if(n.enableZoom===!1)return;k(L);break;case r.PAN:if(n.enablePan===!1)return;te(L);break}}function vt(L){n.enabled===!1||n.enableZoom===!1||s!==r.NONE||(L.preventDefault(),n.dispatchEvent(Wa),J(L),n.dispatchEvent(Ih))}function xt(L){n.enabled===!1||n.enablePan===!1||ie(L)}function C(L){switch(ae(L),w.length){case 1:switch(n.touches.ONE){case Ki.ROTATE:if(n.enableRotate===!1)return;ue(),s=r.TOUCH_ROTATE;break;case Ki.PAN:if(n.enablePan===!1)return;G(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(n.touches.TWO){case Ki.DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Ae(),s=r.TOUCH_DOLLY_PAN;break;case Ki.DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;ve(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&n.dispatchEvent(Wa)}function M(L){switch(ae(L),s){case r.TOUCH_ROTATE:if(n.enableRotate===!1)return;ye(L),n.update();break;case r.TOUCH_PAN:if(n.enablePan===!1)return;le(L),n.update();break;case r.TOUCH_DOLLY_PAN:if(n.enableZoom===!1&&n.enablePan===!1)return;Te(L),n.update();break;case r.TOUCH_DOLLY_ROTATE:if(n.enableZoom===!1&&n.enableRotate===!1)return;be(L),n.update();break;default:s=r.NONE}}function S(L){n.enabled!==!1&&L.preventDefault()}function P(L){w.push(L)}function Q(L){delete A[L.pointerId];for(let B=0;B<w.length;B++)if(w[B].pointerId==L.pointerId){w.splice(B,1);return}}function ae(L){let B=A[L.pointerId];B===void 0&&(B=new fe,A[L.pointerId]=B),B.set(L.pageX,L.pageY)}function me(L){const B=L.pointerId===w[0].pointerId?w[1]:w[0];return A[B.pointerId]}n.domElement.addEventListener("contextmenu",S),n.domElement.addEventListener("pointerdown",Qe),n.domElement.addEventListener("pointercancel",ft),n.domElement.addEventListener("wheel",vt,{passive:!1}),this.update()}}const yo=Rs()(Is(i=>({stopped:!1,object:null,version:0,setObject:e=>{i(t=>{t.object=e})},stop:()=>{i(e=>{e.stopped=!0})},resume:()=>{i(e=>{e.stopped=!1})},refreshDebugger:()=>{i(e=>{e.version++})}}))),Jd=Rs()(ec(Is((i,e)=>({renderingOptions:{},getRenderingOption:(t,n=!0)=>(i(r=>{t in r.renderingOptions||(r.renderingOptions[t]=n)}),e().renderingOptions[t]),setRenderingOption:(t,n)=>{i(r=>{r.renderingOptions[t]=n})}})),{name:"acgRenderingOptions",serialize:i=>An.stringify(i),deserialize:i=>An.parse(i)})),Xt=Jd.getState().getRenderingOption,d1=()=>{const{object:i,resume:e,stop:t,stopped:n,refreshDebugger:r}=Ut(yo),{renderingOptions:s,setRenderingOption:o}=Ut(Jd);return re("div",{class:"absolute right-56 bottom-1",children:[re("div",{class:"px-3 pt-1 pb-3 window mb-1",children:[re("h2",{children:"[Debug] Rendering"}),re("div",{children:Qd(s).map(([a,c])=>re("label",{class:"block",children:[re("input",{type:"checkbox",class:"mr-1",checked:c,onClick:()=>{o(a,!c)}}),re("span",{children:a})]}))}),re("button",{class:"px-4 hover:bg-opacity-60",onClick:()=>{location.reload()},children:"Apply"})]}),re("div",{class:"px-3 pt-1 pb-3 window",children:[re("h2",{children:"[Debug] 3D Models"}),re("div",{children:[!n&&re("button",{class:"px-2",onClick:()=>{t()},children:"\u{1F6D1} Stop"}),n&&re("button",{class:"px-2 ml-1",onClick:()=>{e()},children:"\u25B6\uFE0F Resume"})]}),n&&(i===null?re(Ht,{children:"Double click on objects."}):re(Ht,{children:[re("h3",{children:i.name}),re("table",{children:[re("tr",{children:[re("td",{children:"pos"}),re("td",{children:re("input",{class:"w-10 mr-1",value:i.position.x,onBlur:a=>{!i||(i.position.x=+a.currentTarget.value,r())}})}),re("td",{children:re("input",{class:"w-10 mr-1",value:i.position.y,onBlur:a=>{!i||(i.position.y=+a.currentTarget.value,r())}})}),re("td",{children:re("input",{class:"w-10 mr-1",value:i.position.z,onBlur:a=>{!i||(i.position.z=+a.currentTarget.value,r())}})})]}),re("tr",{children:[re("td",{children:"rot\xB0"}),re("td",{children:re("input",{class:"w-10 mr-1",value:i.rotation.x/Math.PI*180,onBlur:a=>{!i||(i.rotation.x=+a.currentTarget.value/180*Math.PI,r())}})}),re("td",{children:re("input",{class:"w-10 mr-1",value:i.rotation.y/Math.PI*180,onBlur:a=>{!i||(i.rotation.y=+a.currentTarget.value/180*Math.PI,r())}})}),re("td",{children:re("input",{class:"w-10 mr-1",value:i.rotation.z/Math.PI*180,onBlur:a=>{!i||(i.rotation.z=+a.currentTarget.value/180*Math.PI,r())}})})]})]})]}))]})]})},p1=(i,e,t)=>{const n=new f1(i,e.domElement);n.listenToKeyEvents(window);const r=new r1(i,e.domElement);return t.add(r),r.addEventListener("dragging-changed",s=>{n.enabled=!s.value}),r.addEventListener("objectChange",()=>{yo.getState().refreshDebugger()}),e.domElement.addEventListener("dblclick",s=>{r.detach();const o=new Cf;o.setFromCamera({x:s.clientX/window.innerWidth*2-1,y:-s.clientY/window.innerHeight*2+1},i);const a=[];t.traverseVisible(l=>{l.name&&a.push(l)});const c=o.intersectObjects(a,!0);c[0]?.object!==void 0&&(r.attach(c[0].object),yo.getState().setObject(c[0].object))}),()=>yo.getState().stopped};var m1="4.0.0";function g1(i){return i===void 0}function nn(i){return typeof i=="boolean"}function _1(i,e){for(var t in e)e.hasOwnProperty(t)&&g1(i[t])&&(i[t]=e[t]);return i}function v1(i,e,t){var n;return i.length>e&&(t==null?(t="&hellip;",n=3):n=t.length,i=i.substring(0,e-n)+t),i}function Je(i,e){for(var t=i.length-1;t>=0;t--)i[t]===e&&i.splice(t,1)}function vi(i,e){for(var t=i.length-1;t>=0;t--)e(i[t])===!0&&i.splice(t,1)}function fs(i){throw new Error("Unhandled case for value: '".concat(i,"'"))}var vr=/[A-Za-z]/,Ct=/[\d]/,hn=/\s/,ja=/['"]/,x1=/[\x00-\x1F\x7F]/,y1=/A-Za-z\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16F1-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2183\u2184\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005\u3006\u3031-\u3035\u303B\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6E5\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC/.source,b1=/\u2700-\u27bf\udde6-\uddff\ud800-\udbff\udc00-\udfff\ufe0e\ufe0f\u0300-\u036f\ufe20-\ufe23\u20d0-\u20f0\ud83c\udffb-\udfff\u200d\u3299\u3297\u303d\u3030\u24c2\ud83c\udd70-\udd71\udd7e-\udd7f\udd8e\udd91-\udd9a\udde6-\uddff\ude01-\ude02\ude1a\ude2f\ude32-\ude3a\ude50-\ude51\u203c\u2049\u25aa-\u25ab\u25b6\u25c0\u25fb-\u25fe\u00a9\u00ae\u2122\u2139\udc04\u2600-\u26FF\u2b05\u2b06\u2b07\u2b1b\u2b1c\u2b50\u2b55\u231a\u231b\u2328\u23cf\u23e9-\u23f3\u23f8-\u23fa\udccf\u2935\u2934\u2190-\u21ff/.source,w1=/\u0300-\u036F\u0483-\u0489\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u0610-\u061A\u064B-\u065F\u0670\u06D6-\u06DC\u06DF-\u06E4\u06E7\u06E8\u06EA-\u06ED\u0711\u0730-\u074A\u07A6-\u07B0\u07EB-\u07F3\u0816-\u0819\u081B-\u0823\u0825-\u0827\u0829-\u082D\u0859-\u085B\u08D4-\u08E1\u08E3-\u0903\u093A-\u093C\u093E-\u094F\u0951-\u0957\u0962\u0963\u0981-\u0983\u09BC\u09BE-\u09C4\u09C7\u09C8\u09CB-\u09CD\u09D7\u09E2\u09E3\u0A01-\u0A03\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A70\u0A71\u0A75\u0A81-\u0A83\u0ABC\u0ABE-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AE2\u0AE3\u0B01-\u0B03\u0B3C\u0B3E-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B62\u0B63\u0B82\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD7\u0C00-\u0C03\u0C3E-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C62\u0C63\u0C81-\u0C83\u0CBC\u0CBE-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CE2\u0CE3\u0D01-\u0D03\u0D3E-\u0D44\u0D46-\u0D48\u0D4A-\u0D4D\u0D57\u0D62\u0D63\u0D82\u0D83\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DF2\u0DF3\u0E31\u0E34-\u0E3A\u0E47-\u0E4E\u0EB1\u0EB4-\u0EB9\u0EBB\u0EBC\u0EC8-\u0ECD\u0F18\u0F19\u0F35\u0F37\u0F39\u0F3E\u0F3F\u0F71-\u0F84\u0F86\u0F87\u0F8D-\u0F97\u0F99-\u0FBC\u0FC6\u102B-\u103E\u1056-\u1059\u105E-\u1060\u1062-\u1064\u1067-\u106D\u1071-\u1074\u1082-\u108D\u108F\u109A-\u109D\u135D-\u135F\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17B4-\u17D3\u17DD\u180B-\u180D\u1885\u1886\u18A9\u1920-\u192B\u1930-\u193B\u1A17-\u1A1B\u1A55-\u1A5E\u1A60-\u1A7C\u1A7F\u1AB0-\u1ABE\u1B00-\u1B04\u1B34-\u1B44\u1B6B-\u1B73\u1B80-\u1B82\u1BA1-\u1BAD\u1BE6-\u1BF3\u1C24-\u1C37\u1CD0-\u1CD2\u1CD4-\u1CE8\u1CED\u1CF2-\u1CF4\u1CF8\u1CF9\u1DC0-\u1DF5\u1DFB-\u1DFF\u20D0-\u20F0\u2CEF-\u2CF1\u2D7F\u2DE0-\u2DFF\u302A-\u302F\u3099\u309A\uA66F-\uA672\uA674-\uA67D\uA69E\uA69F\uA6F0\uA6F1\uA802\uA806\uA80B\uA823-\uA827\uA880\uA881\uA8B4-\uA8C5\uA8E0-\uA8F1\uA926-\uA92D\uA947-\uA953\uA980-\uA983\uA9B3-\uA9C0\uA9E5\uAA29-\uAA36\uAA43\uAA4C\uAA4D\uAA7B-\uAA7D\uAAB0\uAAB2-\uAAB4\uAAB7\uAAB8\uAABE\uAABF\uAAC1\uAAEB-\uAAEF\uAAF5\uAAF6\uABE3-\uABEA\uABEC\uABED\uFB1E\uFE00-\uFE0F\uFE20-\uFE2F/.source,M1=y1+b1+w1,S1=/0-9\u0660-\u0669\u06F0-\u06F9\u07C0-\u07C9\u0966-\u096F\u09E6-\u09EF\u0A66-\u0A6F\u0AE6-\u0AEF\u0B66-\u0B6F\u0BE6-\u0BEF\u0C66-\u0C6F\u0CE6-\u0CEF\u0D66-\u0D6F\u0DE6-\u0DEF\u0E50-\u0E59\u0ED0-\u0ED9\u0F20-\u0F29\u1040-\u1049\u1090-\u1099\u17E0-\u17E9\u1810-\u1819\u1946-\u194F\u19D0-\u19D9\u1A80-\u1A89\u1A90-\u1A99\u1B50-\u1B59\u1BB0-\u1BB9\u1C40-\u1C49\u1C50-\u1C59\uA620-\uA629\uA8D0-\uA8D9\uA900-\uA909\uA9D0-\uA9D9\uA9F0-\uA9F9\uAA50-\uAA59\uABF0-\uABF9\uFF10-\uFF19/.source,ep=M1+S1,Ri=new RegExp("[".concat(ep,"]")),tp=function(){function i(e){e===void 0&&(e={}),this.tagName="",this.attrs={},this.innerHTML="",this.tagName=e.tagName||"",this.attrs=e.attrs||{},this.innerHTML=e.innerHtml||e.innerHTML||""}return i.prototype.setTagName=function(e){return this.tagName=e,this},i.prototype.getTagName=function(){return this.tagName||""},i.prototype.setAttr=function(e,t){var n=this.getAttrs();return n[e]=t,this},i.prototype.getAttr=function(e){return this.getAttrs()[e]},i.prototype.setAttrs=function(e){return Object.assign(this.getAttrs(),e),this},i.prototype.getAttrs=function(){return this.attrs||(this.attrs={})},i.prototype.setClass=function(e){return this.setAttr("class",e)},i.prototype.addClass=function(e){for(var t=this.getClass(),n=t?t.split(hn):[],r=e.split(hn),s;s=r.shift();)n.indexOf(s)===-1&&n.push(s);return this.getAttrs().class=n.join(" "),this},i.prototype.removeClass=function(e){for(var t=this.getClass(),n=t?t.split(hn):[],r=e.split(hn),s;n.length&&(s=r.shift());){var o=n.indexOf(s);o!==-1&&n.splice(o,1)}return this.getAttrs().class=n.join(" "),this},i.prototype.getClass=function(){return this.getAttrs().class||""},i.prototype.hasClass=function(e){return(" "+this.getClass()+" ").indexOf(" "+e+" ")!==-1},i.prototype.setInnerHTML=function(e){return this.innerHTML=e,this},i.prototype.setInnerHtml=function(e){return this.setInnerHTML(e)},i.prototype.getInnerHTML=function(){return this.innerHTML||""},i.prototype.getInnerHtml=function(){return this.getInnerHTML()},i.prototype.toAnchorString=function(){var e=this.getTagName(),t=this.buildAttrsStr();return t=t?" "+t:"",["<",e,t,">",this.getInnerHtml(),"</",e,">"].join("")},i.prototype.buildAttrsStr=function(){if(!this.attrs)return"";var e=this.getAttrs(),t=[];for(var n in e)e.hasOwnProperty(n)&&t.push(n+'="'+e[n]+'"');return t.join(" ")},i}();function T1(i,e,t){var n,r;t==null?(t="&hellip;",r=3,n=8):(r=t.length,n=t.length);var s=function(y){var x={},v=y,w=v.match(/^([a-z]+):\/\//i);return w&&(x.scheme=w[1],v=v.substr(w[0].length)),w=v.match(/^(.*?)(?=(\?|#|\/|$))/i),w&&(x.host=w[1],v=v.substr(w[0].length)),w=v.match(/^\/(.*?)(?=(\?|#|$))/i),w&&(x.path=w[1],v=v.substr(w[0].length)),w=v.match(/^\?(.*?)(?=(#|$))/i),w&&(x.query=w[1],v=v.substr(w[0].length)),w=v.match(/^#(.*?)$/i),w&&(x.fragment=w[1]),x},o=function(y){var x="";return y.scheme&&y.host&&(x+=y.scheme+"://"),y.host&&(x+=y.host),y.path&&(x+="/"+y.path),y.query&&(x+="?"+y.query),y.fragment&&(x+="#"+y.fragment),x},a=function(y,x){var v=x/2,w=Math.ceil(v),A=-1*Math.floor(v),R="";return A<0&&(R=y.substr(A)),y.substr(0,w)+t+R};if(i.length<=e)return i;var c=e-r,l=s(i);if(l.query){var u=l.query.match(/^(.*?)(?=(\?|\#))(.*?)$/i);u&&(l.query=l.query.substr(0,u[1].length),i=o(l))}if(i.length<=e||(l.host&&(l.host=l.host.replace(/^www\./,""),i=o(l)),i.length<=e))return i;var f="";if(l.host&&(f+=l.host),f.length>=c)return l.host.length==e?(l.host.substr(0,e-r)+t).substr(0,c+n):a(f,c).substr(0,c+n);var h="";if(l.path&&(h+="/"+l.path),l.query&&(h+="?"+l.query),h)if((f+h).length>=c){if((f+h).length==e)return(f+h).substr(0,e);var d=c-f.length;return(f+a(h,d)).substr(0,c+n)}else f+=h;if(l.fragment){var m="#"+l.fragment;if((f+m).length>=c){if((f+m).length==e)return(f+m).substr(0,e);var g=c-f.length;return(f+a(m,g)).substr(0,c+n)}else f+=m}if(l.scheme&&l.host){var p=l.scheme+"://";if((f+p).length<c)return(p+f).substr(0,e)}if(f.length<=e)return f;var _="";return c>0&&(_=f.substr(-1*Math.floor(c/2))),(f.substr(0,Math.ceil(c/2))+t+_).substr(0,c+n)}function E1(i,e,t){if(i.length<=e)return i;var n,r;t==null?(t="&hellip;",n=8,r=3):(n=t.length,r=t.length);var s=e-r,o="";return s>0&&(o=i.substr(-1*Math.floor(s/2))),(i.substr(0,Math.ceil(s/2))+t+o).substr(0,s+n)}function A1(i,e,t){return v1(i,e,t)}var C1=function(){function i(e){e===void 0&&(e={}),this.newWindow=!1,this.truncate={},this.className="",this.newWindow=e.newWindow||!1,this.truncate=e.truncate||{},this.className=e.className||""}return i.prototype.build=function(e){return new tp({tagName:"a",attrs:this.createAttrs(e),innerHtml:this.processAnchorText(e.getAnchorText())})},i.prototype.createAttrs=function(e){var t={href:e.getAnchorHref()},n=this.createCssClass(e);return n&&(t.class=n),this.newWindow&&(t.target="_blank",t.rel="noopener noreferrer"),this.truncate&&this.truncate.length&&this.truncate.length<e.getAnchorText().length&&(t.title=e.getAnchorHref()),t},i.prototype.createCssClass=function(e){var t=this.className;if(t){for(var n=[t],r=e.getCssClassSuffixes(),s=0,o=r.length;s<o;s++)n.push(t+"-"+r[s]);return n.join(" ")}else return""},i.prototype.processAnchorText=function(e){return e=this.doTruncate(e),e},i.prototype.doTruncate=function(e){var t=this.truncate;if(!t||!t.length)return e;var n=t.length,r=t.location;return r==="smart"?T1(e,n):r==="middle"?E1(e,n):A1(e,n)},i}(),Cl=function(i,e){return Cl=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])},Cl(i,e)};function Fs(i,e){if(typeof e!="function"&&e!==null)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");Cl(i,e);function t(){this.constructor=i}i.prototype=e===null?Object.create(e):(t.prototype=e.prototype,new t)}var wt=function(){return wt=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++){t=arguments[n];for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&(e[s]=t[s])}return e},wt.apply(this,arguments)},Ns=function(){function i(e){this._=null,this.matchedText="",this.offset=0,this.tagBuilder=e.tagBuilder,this.matchedText=e.matchedText,this.offset=e.offset}return i.prototype.getMatchedText=function(){return this.matchedText},i.prototype.setOffset=function(e){this.offset=e},i.prototype.getOffset=function(){return this.offset},i.prototype.getCssClassSuffixes=function(){return[this.type]},i.prototype.buildTag=function(){return this.tagBuilder.build(this)},i}(),D1="(?:xn--vermgensberatung-pwb|xn--vermgensberater-ctb|xn--clchc0ea0b2g2a9gcd|xn--w4r85el8fhu5dnra|northwesternmutual|travelersinsurance|verm\xF6gensberatung|xn--5su34j936bgsg|xn--bck1b9a5dre4c|xn--mgbah1a3hjkrd|xn--mgbai9azgqp6j|xn--mgberp4a5d4ar|xn--xkc2dl3a5ee0h|verm\xF6gensberater|xn--fzys8d69uvgm|xn--mgba7c0bbn0a|xn--mgbcpq6gpa1a|xn--xkc2al3hye2a|americanexpress|kerryproperties|sandvikcoromant|xn--i1b6b1a6a2e|xn--kcrx77d1x4a|xn--lgbbat1ad8j|xn--mgba3a4f16a|xn--mgbaakc7dvf|xn--mgbc0a9azcg|xn--nqv7fs00ema|americanfamily|bananarepublic|cancerresearch|cookingchannel|kerrylogistics|weatherchannel|xn--54b7fta0cc|xn--6qq986b3xl|xn--80aqecdr1a|xn--b4w605ferd|xn--fiq228c5hs|xn--h2breg3eve|xn--jlq480n2rg|xn--jlq61u9w7b|xn--mgba3a3ejt|xn--mgbaam7a8h|xn--mgbayh7gpa|xn--mgbbh1a71e|xn--mgbca7dzdo|xn--mgbi4ecexp|xn--mgbx4cd0ab|xn--rvc1e0am3e|international|lifeinsurance|travelchannel|wolterskluwer|xn--cckwcxetd|xn--eckvdtc9d|xn--fpcrj9c3d|xn--fzc2c9e2c|xn--h2brj9c8c|xn--tiq49xqyj|xn--yfro4i67o|xn--ygbi2ammx|construction|lplfinancial|scholarships|versicherung|xn--3e0b707e|xn--45br5cyl|xn--4dbrk0ce|xn--80adxhks|xn--80asehdb|xn--8y0a063a|xn--gckr3f0f|xn--mgb9awbf|xn--mgbab2bd|xn--mgbgu82a|xn--mgbpl2fh|xn--mgbt3dhd|xn--mk1bu44c|xn--ngbc5azd|xn--ngbe9e0a|xn--ogbpf8fl|xn--qcka1pmc|accountants|barclaycard|blackfriday|blockbuster|bridgestone|calvinklein|contractors|creditunion|engineering|enterprises|foodnetwork|investments|kerryhotels|lamborghini|motorcycles|olayangroup|photography|playstation|productions|progressive|redumbrella|williamhill|xn--11b4c3d|xn--1ck2e1b|xn--1qqw23a|xn--2scrj9c|xn--3bst00m|xn--3ds443g|xn--3hcrj9c|xn--42c2d9a|xn--45brj9c|xn--55qw42g|xn--6frz82g|xn--80ao21a|xn--9krt00a|xn--cck2b3b|xn--czr694b|xn--d1acj3b|xn--efvy88h|xn--fct429k|xn--fjq720a|xn--flw351e|xn--g2xx48c|xn--gecrj9c|xn--gk3at1e|xn--h2brj9c|xn--hxt814e|xn--imr513n|xn--j6w193g|xn--jvr189m|xn--kprw13d|xn--kpry57d|xn--mgbbh1a|xn--mgbtx2b|xn--mix891f|xn--nyqy26a|xn--otu796d|xn--pgbs0dh|xn--q9jyb4c|xn--rhqv96g|xn--rovu88b|xn--s9brj9c|xn--ses554g|xn--t60b56a|xn--vuq861b|xn--w4rs40l|xn--xhq521b|xn--zfr164b|\u0B9A\u0BBF\u0B99\u0BCD\u0B95\u0BAA\u0BCD\u0BAA\u0BC2\u0BB0\u0BCD|accountant|apartments|associates|basketball|bnpparibas|boehringer|capitalone|consulting|creditcard|cuisinella|eurovision|extraspace|foundation|healthcare|immobilien|industries|management|mitsubishi|nextdirect|properties|protection|prudential|realestate|republican|restaurant|schaeffler|tatamotors|technology|university|vlaanderen|volkswagen|xn--30rr7y|xn--3pxu8k|xn--45q11c|xn--4gbrim|xn--55qx5d|xn--5tzm5g|xn--80aswg|xn--90a3ac|xn--9dbq2a|xn--9et52u|xn--c2br7g|xn--cg4bki|xn--czrs0t|xn--czru2d|xn--fiq64b|xn--fiqs8s|xn--fiqz9s|xn--io0a7i|xn--kput3i|xn--mxtq1m|xn--o3cw4h|xn--pssy2u|xn--q7ce6a|xn--unup4y|xn--wgbh1c|xn--wgbl6a|xn--y9a3aq|accenture|alfaromeo|allfinanz|amsterdam|analytics|aquarelle|barcelona|bloomberg|christmas|community|directory|education|equipment|fairwinds|financial|firestone|fresenius|frontdoor|furniture|goldpoint|hisamitsu|homedepot|homegoods|homesense|institute|insurance|kuokgroup|lancaster|landrover|lifestyle|marketing|marshalls|melbourne|microsoft|panasonic|passagens|pramerica|richardli|shangrila|solutions|statebank|statefarm|stockholm|travelers|vacations|xn--90ais|xn--c1avg|xn--d1alf|xn--e1a4c|xn--fhbei|xn--j1aef|xn--j1amh|xn--l1acc|xn--ngbrx|xn--nqv7f|xn--p1acf|xn--qxa6a|xn--tckwe|xn--vhquv|yodobashi|\u0645\u0648\u0631\u064A\u062A\u0627\u0646\u064A\u0627|abudhabi|airforce|allstate|attorney|barclays|barefoot|bargains|baseball|boutique|bradesco|broadway|brussels|builders|business|capetown|catering|catholic|cipriani|cityeats|cleaning|clinique|clothing|commbank|computer|delivery|deloitte|democrat|diamonds|discount|discover|download|engineer|ericsson|etisalat|exchange|feedback|fidelity|firmdale|football|frontier|goodyear|grainger|graphics|guardian|hdfcbank|helsinki|holdings|hospital|infiniti|ipiranga|istanbul|jpmorgan|lighting|lundbeck|marriott|maserati|mckinsey|memorial|merckmsd|mortgage|observer|partners|pharmacy|pictures|plumbing|property|redstone|reliance|saarland|samsclub|security|services|shopping|showtime|softbank|software|stcgroup|supplies|training|vanguard|ventures|verisign|woodside|xn--90ae|xn--node|xn--p1ai|xn--qxam|yokohama|\u0627\u0644\u0633\u0639\u0648\u062F\u064A\u0629|abogado|academy|agakhan|alibaba|android|athleta|auction|audible|auspost|avianca|banamex|bauhaus|bentley|bestbuy|booking|brother|bugatti|capital|caravan|careers|channel|charity|chintai|citadel|clubmed|college|cologne|comcast|company|compare|contact|cooking|corsica|country|coupons|courses|cricket|cruises|dentist|digital|domains|exposed|express|farmers|fashion|ferrari|ferrero|finance|fishing|fitness|flights|florist|flowers|forsale|frogans|fujitsu|gallery|genting|godaddy|grocery|guitars|hamburg|hangout|hitachi|holiday|hosting|hoteles|hotmail|hyundai|ismaili|jewelry|juniper|kitchen|komatsu|lacaixa|lanxess|lasalle|latrobe|leclerc|limited|lincoln|markets|monster|netbank|netflix|network|neustar|okinawa|oldnavy|organic|origins|philips|pioneer|politie|realtor|recipes|rentals|reviews|rexroth|samsung|sandvik|schmidt|schwarz|science|shiksha|singles|staples|storage|support|surgery|systems|temasek|theater|theatre|tickets|tiffany|toshiba|trading|walmart|wanggou|watches|weather|website|wedding|whoswho|windows|winners|xfinity|yamaxun|youtube|zuerich|\u043A\u0430\u0442\u043E\u043B\u0438\u043A|\u0627\u062A\u0635\u0627\u0644\u0627\u062A|\u0627\u0644\u0628\u062D\u0631\u064A\u0646|\u0627\u0644\u062C\u0632\u0627\u0626\u0631|\u0627\u0644\u0639\u0644\u064A\u0627\u0646|\u067E\u0627\u06A9\u0633\u062A\u0627\u0646|\u0643\u0627\u062B\u0648\u0644\u064A\u0643|\u0B87\u0BA8\u0BCD\u0BA4\u0BBF\u0BAF\u0BBE|abarth|abbott|abbvie|africa|agency|airbus|airtel|alipay|alsace|alstom|amazon|anquan|aramco|author|bayern|beauty|berlin|bharti|bostik|boston|broker|camera|career|casino|center|chanel|chrome|church|circle|claims|clinic|coffee|comsec|condos|coupon|credit|cruise|dating|datsun|dealer|degree|dental|design|direct|doctor|dunlop|dupont|durban|emerck|energy|estate|events|expert|family|flickr|futbol|gallup|garden|george|giving|global|google|gratis|health|hermes|hiphop|hockey|hotels|hughes|imamat|insure|intuit|jaguar|joburg|juegos|kaufen|kinder|kindle|kosher|lancia|latino|lawyer|lefrak|living|locker|london|luxury|madrid|maison|makeup|market|mattel|mobile|monash|mormon|moscow|museum|mutual|nagoya|natura|nissan|nissay|norton|nowruz|office|olayan|online|oracle|orange|otsuka|pfizer|photos|physio|pictet|quebec|racing|realty|reisen|repair|report|review|rocher|rogers|ryukyu|safety|sakura|sanofi|school|schule|search|secure|select|shouji|soccer|social|stream|studio|supply|suzuki|swatch|sydney|taipei|taobao|target|tattoo|tennis|tienda|tjmaxx|tkmaxx|toyota|travel|unicom|viajes|viking|villas|virgin|vision|voting|voyage|vuelos|walter|webcam|xihuan|yachts|yandex|zappos|\u043C\u043E\u0441\u043A\u0432\u0430|\u043E\u043D\u043B\u0430\u0439\u043D|\u0627\u0628\u0648\u0638\u0628\u064A|\u0627\u0631\u0627\u0645\u0643\u0648|\u0627\u0644\u0627\u0631\u062F\u0646|\u0627\u0644\u0645\u063A\u0631\u0628|\u0627\u0645\u0627\u0631\u0627\u062A|\u0641\u0644\u0633\u0637\u064A\u0646|\u0645\u0644\u064A\u0633\u064A\u0627|\u092D\u093E\u0930\u0924\u092E\u094D|\u0B87\u0BB2\u0B99\u0BCD\u0B95\u0BC8|\u30D5\u30A1\u30C3\u30B7\u30E7\u30F3|actor|adult|aetna|amfam|amica|apple|archi|audio|autos|azure|baidu|beats|bible|bingo|black|boats|bosch|build|canon|cards|chase|cheap|cisco|citic|click|cloud|coach|codes|crown|cymru|dabur|dance|deals|delta|drive|dubai|earth|edeka|email|epson|faith|fedex|final|forex|forum|gallo|games|gifts|gives|glass|globo|gmail|green|gripe|group|gucci|guide|homes|honda|horse|house|hyatt|ikano|irish|jetzt|koeln|kyoto|lamer|lease|legal|lexus|lilly|linde|lipsy|loans|locus|lotte|lotto|macys|mango|media|miami|money|movie|music|nexus|nikon|ninja|nokia|nowtv|omega|osaka|paris|parts|party|phone|photo|pizza|place|poker|praxi|press|prime|promo|quest|radio|rehab|reise|ricoh|rocks|rodeo|rugby|salon|sener|seven|sharp|shell|shoes|skype|sling|smart|smile|solar|space|sport|stada|store|study|style|sucks|swiss|tatar|tires|tirol|tmall|today|tokyo|tools|toray|total|tours|trade|trust|tunes|tushu|ubank|vegas|video|vodka|volvo|wales|watch|weber|weibo|works|world|xerox|yahoo|\u05D9\u05E9\u05E8\u05D0\u05DC|\u0627\u06CC\u0631\u0627\u0646|\u0628\u0627\u0632\u0627\u0631|\u0628\u06BE\u0627\u0631\u062A|\u0633\u0648\u062F\u0627\u0646|\u0633\u0648\u0631\u064A\u0629|\u0647\u0645\u0631\u0627\u0647|\u092D\u093E\u0930\u094B\u0924|\u0938\u0902\u0917\u0920\u0928|\u09AC\u09BE\u0982\u09B2\u09BE|\u0C2D\u0C3E\u0C30\u0C24\u0C4D|\u0D2D\u0D3E\u0D30\u0D24\u0D02|\u5609\u91CC\u5927\u9152\u5E97|aarp|able|adac|aero|akdn|ally|amex|arab|army|arpa|arte|asda|asia|audi|auto|baby|band|bank|bbva|beer|best|bike|bing|blog|blue|bofa|bond|book|buzz|cafe|call|camp|care|cars|casa|case|cash|cbre|cern|chat|citi|city|club|cool|coop|cyou|data|date|dclk|deal|dell|desi|diet|dish|docs|dvag|erni|fage|fail|fans|farm|fast|fiat|fido|film|fire|fish|flir|food|ford|free|fund|game|gbiz|gent|ggee|gift|gmbh|gold|golf|goog|guge|guru|hair|haus|hdfc|help|here|hgtv|host|hsbc|icbc|ieee|imdb|immo|info|itau|java|jeep|jobs|jprs|kddi|kids|kiwi|kpmg|kred|land|lego|lgbt|lidl|life|like|limo|link|live|loan|loft|love|ltda|luxe|maif|meet|meme|menu|mini|mint|mobi|moda|moto|name|navy|news|next|nico|nike|ollo|open|page|pars|pccw|pics|ping|pink|play|plus|pohl|porn|post|prod|prof|qpon|read|reit|rent|rest|rich|room|rsvp|ruhr|safe|sale|sarl|save|saxo|scot|seat|seek|sexy|shaw|shia|shop|show|silk|sina|site|skin|sncf|sohu|song|sony|spot|star|surf|talk|taxi|team|tech|teva|tiaa|tips|town|toys|tube|vana|visa|viva|vivo|vote|voto|wang|weir|wien|wiki|wine|work|xbox|yoga|zara|zero|zone|\u0434\u0435\u0442\u0438|\u0441\u0430\u0439\u0442|\u0628\u0627\u0631\u062A|\u0628\u064A\u062A\u0643|\u0680\u0627\u0631\u062A|\u062A\u0648\u0646\u0633|\u0634\u0628\u0643\u0629|\u0639\u0631\u0627\u0642|\u0639\u0645\u0627\u0646|\u0645\u0648\u0642\u0639|\u092D\u093E\u0930\u0924|\u09AD\u09BE\u09B0\u09A4|\u09AD\u09BE\u09F0\u09A4|\u0A2D\u0A3E\u0A30\u0A24|\u0AAD\u0ABE\u0AB0\u0AA4|\u0B2D\u0B3E\u0B30\u0B24|\u0CAD\u0CBE\u0CB0\u0CA4|\u0DBD\u0D82\u0D9A\u0DCF|\u30A2\u30DE\u30BE\u30F3|\u30B0\u30FC\u30B0\u30EB|\u30AF\u30E9\u30A6\u30C9|\u30DD\u30A4\u30F3\u30C8|\u7EC4\u7EC7\u673A\u6784|\u96FB\u8A0A\u76C8\u79D1|\u9999\u683C\u91CC\u62C9|aaa|abb|abc|aco|ads|aeg|afl|aig|anz|aol|app|art|aws|axa|bar|bbc|bbt|bcg|bcn|bet|bid|bio|biz|bms|bmw|bom|boo|bot|box|buy|bzh|cab|cal|cam|car|cat|cba|cbn|cbs|ceo|cfa|cfd|com|cpa|crs|dad|day|dds|dev|dhl|diy|dnp|dog|dot|dtv|dvr|eat|eco|edu|esq|eus|fan|fit|fly|foo|fox|frl|ftr|fun|fyi|gal|gap|gay|gdn|gea|gle|gmo|gmx|goo|gop|got|gov|hbo|hiv|hkt|hot|how|ibm|ice|icu|ifm|inc|ing|ink|int|ist|itv|jcb|jio|jll|jmp|jnj|jot|joy|kfh|kia|kim|kpn|krd|lat|law|lds|llc|llp|lol|lpl|ltd|man|map|mba|med|men|mil|mit|mlb|mls|mma|moe|moi|mom|mov|msd|mtn|mtr|nab|nba|nec|net|new|nfl|ngo|nhk|now|nra|nrw|ntt|nyc|obi|one|ong|onl|ooo|org|ott|ovh|pay|pet|phd|pid|pin|pnc|pro|pru|pub|pwc|red|ren|ril|rio|rip|run|rwe|sap|sas|sbi|sbs|sca|scb|ses|sew|sex|sfr|ski|sky|soy|spa|srl|stc|tab|tax|tci|tdk|tel|thd|tjx|top|trv|tui|tvs|ubs|uno|uol|ups|vet|vig|vin|vip|wed|win|wme|wow|wtc|wtf|xin|xxx|xyz|you|yun|zip|\u0431\u0435\u043B|\u043A\u043E\u043C|\u049B\u0430\u0437|\u043C\u043A\u0434|\u043C\u043E\u043D|\u043E\u0440\u0433|\u0440\u0443\u0441|\u0441\u0440\u0431|\u0443\u043A\u0440|\u0570\u0561\u0575|\u05E7\u05D5\u05DD|\u0639\u0631\u0628|\u0642\u0637\u0631|\u0643\u0648\u0645|\u0645\u0635\u0631|\u0915\u0949\u092E|\u0928\u0947\u091F|\u0E04\u0E2D\u0E21|\u0E44\u0E17\u0E22|\u0EA5\u0EB2\u0EA7|\u30B9\u30C8\u30A2|\u30BB\u30FC\u30EB|\u307F\u3093\u306A|\u4E2D\u6587\u7F51|\u4E9A\u9A6C\u900A|\u5929\u4E3B\u6559|\u6211\u7231\u4F60|\u65B0\u52A0\u5761|\u6DE1\u9A6C\u9521|\u8BFA\u57FA\u4E9A|\u98DE\u5229\u6D66|ac|ad|ae|af|ag|ai|al|am|ao|aq|ar|as|at|au|aw|ax|az|ba|bb|bd|be|bf|bg|bh|bi|bj|bm|bn|bo|br|bs|bt|bv|bw|by|bz|ca|cc|cd|cf|cg|ch|ci|ck|cl|cm|cn|co|cr|cu|cv|cw|cx|cy|cz|de|dj|dk|dm|do|dz|ec|ee|eg|er|es|et|eu|fi|fj|fk|fm|fo|fr|ga|gb|gd|ge|gf|gg|gh|gi|gl|gm|gn|gp|gq|gr|gs|gt|gu|gw|gy|hk|hm|hn|hr|ht|hu|id|ie|il|im|in|io|iq|ir|is|it|je|jm|jo|jp|ke|kg|kh|ki|km|kn|kp|kr|kw|ky|kz|la|lb|lc|li|lk|lr|ls|lt|lu|lv|ly|ma|mc|md|me|mg|mh|mk|ml|mm|mn|mo|mp|mq|mr|ms|mt|mu|mv|mw|mx|my|mz|na|nc|ne|nf|ng|ni|nl|no|np|nr|nu|nz|om|pa|pe|pf|pg|ph|pk|pl|pm|pn|pr|ps|pt|pw|py|qa|re|ro|rs|ru|rw|sa|sb|sc|sd|se|sg|sh|si|sj|sk|sl|sm|sn|so|sr|ss|st|su|sv|sx|sy|sz|tc|td|tf|tg|th|tj|tk|tl|tm|tn|to|tr|tt|tv|tw|tz|ua|ug|uk|us|uy|uz|va|vc|ve|vg|vi|vn|vu|wf|ws|ye|yt|za|zm|zw|\u03B5\u03BB|\u03B5\u03C5|\u0431\u0433|\u0435\u044E|\u0440\u0444|\u10D2\u10D4|\uB2F7\uB137|\uB2F7\uCEF4|\uC0BC\uC131|\uD55C\uAD6D|\u30B3\u30E0|\u4E16\u754C|\u4E2D\u4FE1|\u4E2D\u56FD|\u4E2D\u570B|\u4F01\u4E1A|\u4F5B\u5C71|\u4FE1\u606F|\u5065\u5EB7|\u516B\u5366|\u516C\u53F8|\u516C\u76CA|\u53F0\u6E7E|\u53F0\u7063|\u5546\u57CE|\u5546\u5E97|\u5546\u6807|\u5609\u91CC|\u5728\u7EBF|\u5927\u62FF|\u5A31\u4E50|\u5BB6\u96FB|\u5E7F\u4E1C|\u5FAE\u535A|\u6148\u5584|\u624B\u673A|\u62DB\u8058|\u653F\u52A1|\u653F\u5E9C|\u65B0\u95FB|\u65F6\u5C1A|\u66F8\u7C4D|\u673A\u6784|\u6E38\u620F|\u6FB3\u9580|\u70B9\u770B|\u79FB\u52A8|\u7F51\u5740|\u7F51\u5E97|\u7F51\u7AD9|\u7F51\u7EDC|\u8054\u901A|\u8C37\u6B4C|\u8D2D\u7269|\u901A\u8CA9|\u96C6\u56E2|\u98DF\u54C1|\u9910\u5385|\u9999\u6E2F)",P1=new RegExp("^"+D1+"$"),L1=/[\/?#]/,R1=/[-+&@#/%=~_()|'$*\[\]{}\u2713]/,np=/[?!:,.;^]/,ip=/https?:\/\//i,I1=new RegExp("^"+ip.source,"i"),F1=new RegExp(np.source+"$"),N1=/^(javascript|vbscript):/i,O1=/^[A-Za-z][-.+A-Za-z0-9]*:(\/\/)?([^:/]*)/,k1=/^(?:\/\/)?([^/#?:]+)/;function Xa(i){return vr.test(i)}function Fh(i){return vr.test(i)||Ct.test(i)||i==="+"||i==="-"||i==="."}function ri(i){return Ri.test(i)}function qa(i){return i==="_"||ri(i)}function Nh(i){return Ri.test(i)||R1.test(i)||np.test(i)}function Ya(i){return L1.test(i)}function rp(i){return P1.test(i.toLowerCase())}function B1(i){if(N1.test(i))return!1;var e=i.match(O1);if(!e)return!1;var t=!!e[1],n=e[2];return t?!0:!(n.indexOf(".")===-1||!vr.test(n))}function U1(i){var e=i.match(k1);if(!e)return!1;var t=e[0],n=t.split(".");if(n.length<2)return!1;var r=n[n.length-1];return!!rp(r)}var z1=/^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/,H1=/[:/?#]/;function V1(i){var e=i.split(H1,1)[0];return z1.test(e)}var G1=/^(https?:\/\/)?(www\.)?/i,W1=/^\/\//,j1=function(i){Fs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="url",n.url="",n.urlMatchType="scheme",n.protocolRelativeMatch=!1,n.stripPrefix={scheme:!0,www:!0},n.stripTrailingSlash=!0,n.decodePercentEncoding=!0,n.protocolPrepended=!1,n.urlMatchType=t.urlMatchType,n.url=t.url,n.protocolRelativeMatch=t.protocolRelativeMatch,n.stripPrefix=t.stripPrefix,n.stripTrailingSlash=t.stripTrailingSlash,n.decodePercentEncoding=t.decodePercentEncoding,n}return e.prototype.getType=function(){return"url"},e.prototype.getUrlMatchType=function(){return this.urlMatchType},e.prototype.getUrl=function(){var t=this.url;return!this.protocolRelativeMatch&&this.urlMatchType!=="scheme"&&!this.protocolPrepended&&(t=this.url="http://"+t,this.protocolPrepended=!0),t},e.prototype.getAnchorHref=function(){var t=this.getUrl();return t.replace(/&amp;/g,"&")},e.prototype.getAnchorText=function(){var t=this.getMatchedText();return this.protocolRelativeMatch&&(t=Y1(t)),this.stripPrefix.scheme&&(t=X1(t)),this.stripPrefix.www&&(t=q1(t)),this.stripTrailingSlash&&(t=$1(t)),this.decodePercentEncoding&&(t=Z1(t)),t},e}(Ns);function X1(i){return i.replace(I1,"")}function q1(i){return i.replace(G1,"$1")}function Y1(i){return i.replace(W1,"")}function $1(i){return i.charAt(i.length-1)==="/"&&(i=i.slice(0,-1)),i}function Z1(i){var e=i.replace(/%22/gi,"&quot;").replace(/%26/gi,"&amp;").replace(/%27/gi,"&#39;").replace(/%3C/gi,"&lt;").replace(/%3E/gi,"&gt;");try{return decodeURIComponent(e)}catch{return e}}var K1=/^mailto:/i,Q1=new RegExp("[".concat(ep,"!#$%&'*+/=?^_`{|}~-]"));function J1(i){return Ri.test(i)}function $a(i){return Q1.test(i)}function ew(i){var e=i.split(".").pop()||"";return rp(e)}var tw=function(i){Fs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="email",n.email="",n.email=t.email,n}return e.prototype.getType=function(){return"email"},e.prototype.getEmail=function(){return this.email},e.prototype.getAnchorHref=function(){return"mailto:"+this.email},e.prototype.getAnchorText=function(){return this.email},e}(Ns);function Oh(i){return i==="_"||Ri.test(i)}function nw(i){return i.length<=140}var iw=["twitter","facebook","instagram","tiktok"],rw=function(i){Fs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="hashtag",n.serviceName="twitter",n.hashtag="",n.serviceName=t.serviceName,n.hashtag=t.hashtag,n}return e.prototype.getType=function(){return"hashtag"},e.prototype.getServiceName=function(){return this.serviceName},e.prototype.getHashtag=function(){return this.hashtag},e.prototype.getAnchorHref=function(){var t=this.serviceName,n=this.hashtag;switch(t){case"twitter":return"https://twitter.com/hashtag/"+n;case"facebook":return"https://www.facebook.com/hashtag/"+n;case"instagram":return"https://instagram.com/explore/tags/"+n;case"tiktok":return"https://www.tiktok.com/tag/"+n;default:throw fs(t),new Error("Invalid hashtag service: ".concat(t))}},e.prototype.getAnchorText=function(){return"#"+this.hashtag},e.prototype.getCssClassSuffixes=function(){var t=i.prototype.getCssClassSuffixes.call(this),n=this.getServiceName();return n&&t.push(n),t},e}(Ns),sw={twitter:/^@\w{1,15}$/,instagram:/^@[_\w]{1,30}$/,soundcloud:/^@[-a-z0-9_]{3,25}$/,tiktok:/^@[.\w]{1,23}[\w]$/},ow=/[-\w.]/;function kh(i){return ow.test(i)}function aw(i,e){var t=sw[e];return t.test(i)}var lw=["twitter","instagram","soundcloud","tiktok"],cw=function(i){Fs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="mention",n.serviceName="twitter",n.mention="",n.mention=t.mention,n.serviceName=t.serviceName,n}return e.prototype.getType=function(){return"mention"},e.prototype.getMention=function(){return this.mention},e.prototype.getServiceName=function(){return this.serviceName},e.prototype.getAnchorHref=function(){switch(this.serviceName){case"twitter":return"https://twitter.com/"+this.mention;case"instagram":return"https://instagram.com/"+this.mention;case"soundcloud":return"https://soundcloud.com/"+this.mention;case"tiktok":return"https://www.tiktok.com/@"+this.mention;default:throw new Error("Unknown service name to point mention to: "+this.serviceName)}},e.prototype.getAnchorText=function(){return"@"+this.mention},e.prototype.getCssClassSuffixes=function(){var t=i.prototype.getCssClassSuffixes.call(this),n=this.getServiceName();return n&&t.push(n),t},e}(Ns),uw=/[-. ]/,hw=/[-. ()]/,fw=/[,;]/,dw=/(?:(?:(?:(\+)?\d{1,3}[-. ]?)?\(?\d{3}\)?[-. ]?\d{3}[-. ]?\d{4})|(?:(\+)(?:9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)[-. ]?(?:\d[-. ]?){6,12}\d+))([,;]+[0-9]+#?)*/,pw=/(0([1-9]-?[1-9]\d{3}|[1-9]{2}-?\d{3}|[1-9]{2}\d{1}-?\d{2}|[1-9]{2}\d{2}-?\d{1})-?\d{4}|0[789]0-?\d{4}-?\d{4}|050-?\d{4}-?\d{4})/,mw=new RegExp("^".concat(dw.source,"|").concat(pw.source,"$"));function Bh(i){return uw.test(i)}function Za(i){return fw.test(i)}function gw(i){var e=i.charAt(0)==="+"||hw.test(i);return e&&mw.test(i)}var _w=function(i){Fs(e,i);function e(t){var n=i.call(this,t)||this;return n.type="phone",n.number="",n.plusSign=!1,n.number=t.number,n.plusSign=t.plusSign,n}return e.prototype.getType=function(){return"phone"},e.prototype.getPhoneNumber=function(){return this.number},e.prototype.getNumber=function(){return this.getPhoneNumber()},e.prototype.getAnchorHref=function(){return"tel:"+(this.plusSign?"+":"")+this.number},e.prototype.getAnchorText=function(){return this.matchedText},e}(Ns);function vw(i,e){for(var t=e.tagBuilder,n=e.stripPrefix,r=e.stripTrailingSlash,s=e.decodePercentEncoding,o=e.hashtagServiceName,a=e.mentionServiceName,c=[],l=i.length,u=[],f=0;f<l;f++){var h=i.charAt(f);if(u.length===0)p(h);else for(var d=u.length-1;d>=0;d--){var m=u[d];switch(m.state){case 11:A(m,h);break;case 12:R(m,h);break;case 0:_(m,h);break;case 1:y(m,h);break;case 2:x(m,h);break;case 3:v(m,h);break;case 4:w(m,h);break;case 5:b(m,h);break;case 6:T(m,h);break;case 7:I(m,h);break;case 13:W(m,h);break;case 14:j(m,h);break;case 8:U(m,h);break;case 9:O(m,h);break;case 10:V(m,h);break;case 15:$(m,h);break;case 16:ee(m,h);break;case 17:X(m,h);break;case 18:F(m,h);break;case 19:k(m,h);break;case 20:te(m,h);break;case 21:J(m,h);break;case 22:ie(m,h);break;case 23:ue(m,h);break;case 24:G(m,h);break;case 25:Z(m,h);break;case 26:Ae(m,h);break;case 27:ve(m,h);break;case 28:ye(m,h);break;case 29:le(m,h);break;case 30:Be(m,h);break;case 31:Te(m,h);break;case 32:Qe(m,h);break;case 33:it(m,h);break;case 34:et(m,h);break;case 35:ft(m,h);break;case 36:tt(m,h);break;case 37:be(m,h);break;case 38:ke(m,h);break;case 39:vt(m,h);break;case 40:xt(m,h);break;case 41:C(m,h);break;default:fs(m.state)}}}for(var g=u.length-1;g>=0;g--)u.forEach(function(S){return M(S)});return c;function p(S){if(S==="#")u.push(Mw(f,28));else if(S==="@")u.push(Sw(f,30));else if(S==="/")u.push(Qa(f,11));else if(S==="+")u.push(Ja(f,37));else if(S==="(")u.push(Ja(f,32));else{if(Ct.test(S)&&(u.push(Ja(f,38)),u.push(bw(f,13))),J1(S)){var P=S.toLowerCase()==="m"?15:22;u.push(ww(f,P))}Xa(S)&&u.push(Ka(f,0)),Ri.test(S)&&u.push(Qa(f,5))}}function _(S,P){P===":"?S.state=2:P==="-"?S.state=1:Fh(P)||Je(u,S)}function y(S,P){P==="-"||(P==="/"?(Je(u,S),u.push(Qa(f,11))):Fh(P)?S.state=0:Je(u,S))}function x(S,P){P==="/"?S.state=3:P==="."?Je(u,S):ri(P)?(S.state=5,Xa(P)&&u.push(Ka(f,0))):Je(u,S)}function v(S,P){P==="/"?S.state=4:Nh(P)?(S.state=10,S.acceptStateReached=!0):M(S)}function w(S,P){P==="/"?S.state=10:ri(P)?(S.state=5,S.acceptStateReached=!0):Je(u,S)}function A(S,P){P==="/"?S.state=12:Je(u,S)}function R(S,P){ri(P)?S.state=5:Je(u,S)}function b(S,P){P==="."?S.state=7:P==="-"?S.state=6:P===":"?S.state=8:Ya(P)?S.state=10:qa(P)||M(S)}function T(S,P){P==="-"||(P==="."?M(S):ri(P)?S.state=5:M(S))}function I(S,P){P==="."?M(S):ri(P)?(S.state=5,S.acceptStateReached=!0):M(S)}function W(S,P){P==="."?S.state=14:P===":"?S.state=8:Ct.test(P)||(Ya(P)?S.state=10:Ri.test(P)?Je(u,S):M(S))}function j(S,P){Ct.test(P)?(S.octetsEncountered++,S.octetsEncountered===4&&(S.acceptStateReached=!0),S.state=13):M(S)}function U(S,P){Ct.test(P)?S.state=9:M(S)}function O(S,P){Ct.test(P)||(Ya(P)?S.state=10:M(S))}function V(S,P){Nh(P)||M(S)}function $(S,P){P.toLowerCase()==="a"?S.state=16:ie(S,P)}function ee(S,P){P.toLowerCase()==="i"?S.state=17:ie(S,P)}function X(S,P){P.toLowerCase()==="l"?S.state=18:ie(S,P)}function F(S,P){P.toLowerCase()==="t"?S.state=19:ie(S,P)}function k(S,P){P.toLowerCase()==="o"?S.state=20:ie(S,P)}function te(S,P){P.toLowerCase()===":"?S.state=21:ie(S,P)}function J(S,P){$a(P)?S.state=22:Je(u,S)}function ie(S,P){P==="."?S.state=23:P==="@"?S.state=24:$a(P)?S.state=22:Je(u,S)}function ue(S,P){P==="."||P==="@"?Je(u,S):$a(P)?S.state=22:Je(u,S)}function G(S,P){ri(P)?S.state=25:Je(u,S)}function Z(S,P){P==="."?S.state=27:P==="-"?S.state=26:qa(P)||M(S)}function Ae(S,P){P==="-"||P==="."?M(S):qa(P)?S.state=25:M(S)}function ve(S,P){P==="."||P==="-"?M(S):ri(P)?(S.state=25,S.acceptStateReached=!0):M(S)}function ye(S,P){Oh(P)?(S.state=29,S.acceptStateReached=!0):Je(u,S)}function le(S,P){Oh(P)||M(S)}function Be(S,P){kh(P)?(S.state=31,S.acceptStateReached=!0):Je(u,S)}function Te(S,P){kh(P)||(Ri.test(P)?Je(u,S):M(S))}function be(S,P){Ct.test(P)?S.state=38:(Je(u,S),p(P))}function Qe(S,P){Ct.test(P)?S.state=33:Je(u,S),p(P)}function it(S,P){Ct.test(P)?S.state=34:Je(u,S)}function et(S,P){Ct.test(P)?S.state=35:Je(u,S)}function ft(S,P){P===")"?S.state=36:Je(u,S)}function tt(S,P){Ct.test(P)?S.state=38:Bh(P)?S.state=39:Je(u,S)}function ke(S,P){S.acceptStateReached=!0,Za(P)?S.state=40:P==="#"?S.state=41:Ct.test(P)||(P==="("?S.state=32:Bh(P)?S.state=39:(M(S),Xa(P)&&u.push(Ka(f,0))))}function vt(S,P){Ct.test(P)?S.state=38:P==="("?S.state=32:(M(S),p(P))}function xt(S,P){Za(P)||(P==="#"?S.state=41:Ct.test(P)?S.state=38:M(S))}function C(S,P){Za(P)?S.state=40:Ct.test(P)?Je(u,S):M(S)}function M(S){if(Je(u,S),!!S.acceptStateReached){var P=S.startIdx,Q=i.slice(S.startIdx,f);if(Q=yw(Q),S.type==="url"){var ae=i.charAt(S.startIdx-1);if(ae==="@")return;var me=S.matchType;if(me==="scheme"){var L=ip.exec(Q);if(L&&(P=P+L.index,Q=Q.slice(L.index)),!B1(Q))return}else if(me==="tld"){if(!U1(Q))return}else if(me==="ipV4"){if(!V1(Q))return}else fs(me);c.push(new j1({tagBuilder:t,matchedText:Q,offset:P,urlMatchType:me,url:Q,protocolRelativeMatch:Q.slice(0,2)==="//",stripPrefix:n,stripTrailingSlash:r,decodePercentEncoding:s}))}else if(S.type==="email")ew(Q)&&c.push(new tw({tagBuilder:t,matchedText:Q,offset:P,email:Q.replace(K1,"")}));else if(S.type==="hashtag")nw(Q)&&c.push(new rw({tagBuilder:t,matchedText:Q,offset:P,serviceName:o,hashtag:Q.slice(1)}));else if(S.type==="mention")aw(Q,a)&&c.push(new cw({tagBuilder:t,matchedText:Q,offset:P,serviceName:a,mention:Q.slice(1)}));else if(S.type==="phone"){if(Q=Q.replace(/ +$/g,""),gw(Q)){var B=Q.replace(/[^0-9,;#]/g,"");c.push(new _w({tagBuilder:t,matchedText:Q,offset:P,number:B,plusSign:Q.charAt(0)==="+"}))}}else fs(S)}}}var xw=/[\(\{\[]/,Uh=/[\)\}\]]/,zh={")":"(","}":"{","]":"["};function yw(i){for(var e={"(":0,"{":0,"[":0},t=0;t<i.length;t++){var n=i.charAt(t);xw.test(n)?e[n]++:Uh.test(n)&&e[zh[n]]--}for(var r=i.length-1,s;r>=0;)if(s=i.charAt(r),Uh.test(s)){var o=zh[s];if(e[o]<0)e[o]++,r--;else break}else if(F1.test(s))r--;else break;return i.slice(0,r+1)}function Ka(i,e){return{type:"url",startIdx:i,state:e,acceptStateReached:!1,matchType:"scheme"}}function Qa(i,e){return{type:"url",startIdx:i,state:e,acceptStateReached:!1,matchType:"tld"}}function bw(i,e){return{type:"url",startIdx:i,state:e,acceptStateReached:!1,matchType:"ipV4",octetsEncountered:1}}function ww(i,e){return{type:"email",startIdx:i,state:e,acceptStateReached:!1}}function Mw(i,e){return{type:"hashtag",startIdx:i,state:e,acceptStateReached:!1}}function Sw(i,e){return{type:"mention",startIdx:i,state:e,acceptStateReached:!1}}function Ja(i,e){return{type:"phone",startIdx:i,state:e,acceptStateReached:!1}}function Tw(i,e){for(var t=e.onOpenTag,n=e.onCloseTag,r=e.onText,s=e.onComment,o=e.onDoctype,a=new xn,c=0,l=i.length,u=0,f=0,h=a;c<l;){var d=i.charAt(c);switch(u){case 0:m(d);break;case 1:g(d);break;case 2:_(d);break;case 3:p(d);break;case 4:y(d);break;case 5:x(d);break;case 6:v(d);break;case 7:w(d);break;case 8:A(d);break;case 9:R(d);break;case 10:b(d);break;case 11:T(d);break;case 12:I(d);break;case 13:W();break;case 14:j(d);break;case 15:U(d);break;case 16:O(d);break;case 17:V(d);break;case 18:$(d);break;case 19:ee(d);break;case 20:X(d);break;default:fs(u)}c++}f<c&&J();function m(G){G==="<"&&k()}function g(G){G==="!"?u=13:G==="/"?(u=2,h=new xn(wt(wt({},h),{isClosing:!0}))):G==="<"?k():vr.test(G)?(u=3,h=new xn(wt(wt({},h),{isOpening:!0}))):(u=0,h=a)}function p(G){hn.test(G)?(h=new xn(wt(wt({},h),{name:ie()})),u=4):G==="<"?k():G==="/"?(h=new xn(wt(wt({},h),{name:ie()})),u=12):G===">"?(h=new xn(wt(wt({},h),{name:ie()})),te()):!vr.test(G)&&!Ct.test(G)&&G!==":"&&F()}function _(G){G===">"?F():vr.test(G)?u=3:F()}function y(G){hn.test(G)||(G==="/"?u=12:G===">"?te():G==="<"?k():G==="="||ja.test(G)||x1.test(G)?F():u=5)}function x(G){hn.test(G)?u=6:G==="/"?u=12:G==="="?u=7:G===">"?te():G==="<"?k():ja.test(G)&&F()}function v(G){hn.test(G)||(G==="/"?u=12:G==="="?u=7:G===">"?te():G==="<"?k():ja.test(G)?F():u=5)}function w(G){hn.test(G)||(G==='"'?u=8:G==="'"?u=9:/[>=`]/.test(G)?F():G==="<"?k():u=10)}function A(G){G==='"'&&(u=11)}function R(G){G==="'"&&(u=11)}function b(G){hn.test(G)?u=4:G===">"?te():G==="<"&&k()}function T(G){hn.test(G)?u=4:G==="/"?u=12:G===">"?te():G==="<"?k():(u=4,ue())}function I(G){G===">"?(h=new xn(wt(wt({},h),{isClosing:!0})),te()):u=4}function W(G){i.substr(c,2)==="--"?(c+=2,h=new xn(wt(wt({},h),{type:"comment"})),u=14):i.substr(c,7).toUpperCase()==="DOCTYPE"?(c+=7,h=new xn(wt(wt({},h),{type:"doctype"})),u=20):F()}function j(G){G==="-"?u=15:G===">"?F():u=16}function U(G){G==="-"?u=18:G===">"?F():u=16}function O(G){G==="-"&&(u=17)}function V(G){G==="-"?u=18:u=16}function $(G){G===">"?te():G==="!"?u=19:G==="-"||(u=16)}function ee(G){G==="-"?u=17:G===">"?te():u=16}function X(G){G===">"?te():G==="<"&&k()}function F(){u=0,h=a}function k(){u=1,h=new xn({idx:c})}function te(){var G=i.slice(f,h.idx);G&&r(G,f),h.type==="comment"?s(h.idx):h.type==="doctype"?o(h.idx):(h.isOpening&&t(h.name,h.idx),h.isClosing&&n(h.name,h.idx)),F(),f=c+1}function J(){var G=i.slice(f,c);r(G,f),f=c+1}function ie(){var G=h.idx+(h.isClosing?2:1);return i.slice(G,c).toLowerCase()}function ue(){c--}}var xn=function(){function i(e){e===void 0&&(e={}),this.idx=e.idx!==void 0?e.idx:-1,this.type=e.type||"tag",this.name=e.name||"",this.isOpening=!!e.isOpening,this.isClosing=!!e.isClosing}return i}(),el=function(){function i(e){e===void 0&&(e={}),this.version=i.version,this.urls={},this.email=!0,this.phone=!0,this.hashtag=!1,this.mention=!1,this.newWindow=!0,this.stripPrefix={scheme:!0,www:!0},this.stripTrailingSlash=!0,this.decodePercentEncoding=!0,this.truncate={length:0,location:"end"},this.className="",this.replaceFn=null,this.context=void 0,this.sanitizeHtml=!1,this.tagBuilder=null,this.urls=Ew(e.urls),this.email=nn(e.email)?e.email:this.email,this.phone=nn(e.phone)?e.phone:this.phone,this.hashtag=e.hashtag||this.hashtag,this.mention=e.mention||this.mention,this.newWindow=nn(e.newWindow)?e.newWindow:this.newWindow,this.stripPrefix=Aw(e.stripPrefix),this.stripTrailingSlash=nn(e.stripTrailingSlash)?e.stripTrailingSlash:this.stripTrailingSlash,this.decodePercentEncoding=nn(e.decodePercentEncoding)?e.decodePercentEncoding:this.decodePercentEncoding,this.sanitizeHtml=e.sanitizeHtml||!1;var t=this.mention;if(t!==!1&&lw.indexOf(t)===-1)throw new Error("invalid `mention` cfg '".concat(t,"' - see docs"));var n=this.hashtag;if(n!==!1&&iw.indexOf(n)===-1)throw new Error("invalid `hashtag` cfg '".concat(n,"' - see docs"));this.truncate=Cw(e.truncate),this.className=e.className||this.className,this.replaceFn=e.replaceFn||this.replaceFn,this.context=e.context||this}return i.link=function(e,t){var n=new i(t);return n.link(e)},i.parse=function(e,t){var n=new i(t);return n.parse(e)},i.prototype.parse=function(e){var t=this,n=["a","style","script"],r=0,s=[];return Tw(e,{onOpenTag:function(o){n.indexOf(o)>=0&&r++},onText:function(o,a){if(r===0){var c=/(&nbsp;|&#160;|&lt;|&#60;|&gt;|&#62;|&quot;|&#34;|&#39;)/gi,l=o.split(c),u=a;l.forEach(function(f,h){if(h%2===0){var d=t.parseText(f,u);s.push.apply(s,d)}u+=f.length})}},onCloseTag:function(o){n.indexOf(o)>=0&&(r=Math.max(r-1,0))},onComment:function(o){},onDoctype:function(o){}}),s=this.compactMatches(s),s=this.removeUnwantedMatches(s),s},i.prototype.compactMatches=function(e){e.sort(function(c,l){return c.getOffset()-l.getOffset()});for(var t=0;t<e.length-1;){var n=e[t],r=n.getOffset(),s=n.getMatchedText().length,o=r+s;if(t+1<e.length){if(e[t+1].getOffset()===r){var a=e[t+1].getMatchedText().length>s?t:t+1;e.splice(a,1);continue}if(e[t+1].getOffset()<o){e.splice(t+1,1);continue}}t++}return e},i.prototype.removeUnwantedMatches=function(e){return this.hashtag||vi(e,function(t){return t.getType()==="hashtag"}),this.email||vi(e,function(t){return t.getType()==="email"}),this.phone||vi(e,function(t){return t.getType()==="phone"}),this.mention||vi(e,function(t){return t.getType()==="mention"}),this.urls.schemeMatches||vi(e,function(t){return t.getType()==="url"&&t.getUrlMatchType()==="scheme"}),this.urls.tldMatches||vi(e,function(t){return t.getType()==="url"&&t.getUrlMatchType()==="tld"}),this.urls.ipV4Matches||vi(e,function(t){return t.getType()==="url"&&t.getUrlMatchType()==="ipV4"}),e},i.prototype.parseText=function(e,t){t===void 0&&(t=0),t=t||0;for(var n=vw(e,{tagBuilder:this.getTagBuilder(),stripPrefix:this.stripPrefix,stripTrailingSlash:this.stripTrailingSlash,decodePercentEncoding:this.decodePercentEncoding,hashtagServiceName:this.hashtag,mentionServiceName:this.mention||"twitter"}),r=0,s=n.length;r<s;r++)n[r].setOffset(t+n[r].getOffset());return n},i.prototype.link=function(e){if(!e)return"";this.sanitizeHtml&&(e=e.replace(/</g,"&lt;").replace(/>/g,"&gt;"));for(var t=this.parse(e),n=[],r=0,s=0,o=t.length;s<o;s++){var a=t[s];n.push(e.substring(r,a.getOffset())),n.push(this.createMatchReturnVal(a)),r=a.getOffset()+a.getMatchedText().length}return n.push(e.substring(r)),n.join("")},i.prototype.createMatchReturnVal=function(e){var t;if(this.replaceFn&&(t=this.replaceFn.call(this.context,e)),typeof t=="string")return t;if(t===!1)return e.getMatchedText();if(t instanceof tp)return t.toAnchorString();var n=e.buildTag();return n.toAnchorString()},i.prototype.getTagBuilder=function(){var e=this.tagBuilder;return e||(e=this.tagBuilder=new C1({newWindow:this.newWindow,truncate:this.truncate,className:this.className})),e},i.version=m1,i}();function Ew(i){return i==null&&(i=!0),nn(i)?{schemeMatches:i,tldMatches:i,ipV4Matches:i}:{schemeMatches:nn(i.schemeMatches)?i.schemeMatches:!0,tldMatches:nn(i.tldMatches)?i.tldMatches:!0,ipV4Matches:nn(i.ipV4Matches)?i.ipV4Matches:!0}}function Aw(i){return i==null&&(i=!0),nn(i)?{scheme:i,www:i}:{scheme:nn(i.scheme)?i.scheme:!0,www:nn(i.www)?i.www:!0}}function Cw(i){return typeof i=="number"?{length:i,location:"end"}:_1(i||{},{length:Number.POSITIVE_INFINITY,location:"end"})}Ld();const Hh=new Map(Object.keys($d).map((i,e)=>[i,e])),Dw=()=>{const i=Ut(sn,e=>[...e.availableTutorials].filter(t=>!e.completedTutorials.has(t)).sort((t,n)=>Hh.get(t)-Hh.get(n))[0]);return re("div",{style:{opacity:i===void 0?"0":"1"},class:"absolute w-full text-center top-[70%] text-white bg-slate-800 bg-opacity-70 select-none [transition:opacity_ease_1s] whitespace-pre-wrap pointer-events-none",children:i&&$d[i]})},Dl=Rs()(ec(Is((i,e)=>({news:null,showNews:t=>{i(n=>{n.news=[...t]})},hideNews:()=>{i(t=>{t.news=null})}})),{name:"acgDOMStore",version:1,serialize:i=>An.stringify(i),deserialize:i=>An.parse(i)})),Hi=Rs()(Is((i,e)=>({loadingMessage:new Map,enemyStatus:null,setLoadingMessage:(t,n)=>{i(r=>{r.loadingMessage.set(t,n)})},removeLoadingMessage:t=>{i(n=>{n.loadingMessage.delete(t)})},setEnemyStatus:t=>{i(n=>{n.enemyStatus=t})}}))),Vh=i=>{i.target===i.currentTarget&&i.currentTarget.close()},Pw=Array(1e4).fill(0).map(()=>Array(Math.floor(Math.random()*6)+2).fill(0).map(()=>"abcdefghijklmnopqrstuvwxyz"[Math.floor(Math.random()*26)]).join("")).join(" "),Lw=()=>{const i=Ut(Hi,e=>e.enemyStatus);return i?re("div",{class:"px-3 pt-1 pb-3 window mt-1 mb-1",children:[re("h2",{class:"mb-2",children:"Stats"}),re("div",{children:re("table",{children:[re("tr",{children:[re("td",{class:"pr-1",children:"HP"}),re("td",{children:Math.max(0,Math.round(i.hp))})]}),re("tr",{children:[re("td",{class:"pr-1",children:"Money"}),re("td",{children:qd[i.name]})]})]})})]}):re(Ht,{})},Rw=()=>{const i=Ut(Dl),e=Po(),t=Po(),[n,r]=zi(""),s=Ut(sn,Kb),o=Ut(Hi,l=>l.loadingMessage),a=Ut(sn,l=>l.getWeather()),c=Ut(sn,l=>Math.ceil(l.weatherEffectWillBeEnabledInLessThan[l.stage]/ys/60));return Cr(()=>{fetch("./audio/credit.html").then(l=>l.text()).then(l=>{r(u=>u+el.link(l))}).catch(console.error),fetch("./models/credit.html").then(l=>l.text()).then(l=>{r(u=>u+el.link(l))}).catch(console.error),fetch("./font/credit.html").then(l=>l.text()).then(l=>{r(u=>u+el.link(l))}).catch(console.error)},[]),Cr(()=>{i.news!==null&&(e.current.style.opacity="0",e.current.showModal(),e.current.style.opacity="1",e.current.addEventListener("close",()=>{Dl.getState().hideNews(),Le().addTutorial("nextStage")},{once:!0}))},[i.news]),re(Ht,{children:[re(n1,{}),re(Dw,{}),re("div",{class:"absolute right-1 top-1 w-52",children:[s&&re("div",{class:"px-3 pt-1 pb-3 window",children:[re("h2",{class:"mb-2",children:"Stages"}),re("div",{children:[re("button",{class:"w-full mb-1",onClick:()=>{Le().setStageTransitingTo(0)},children:"Earth"}),re("br",{}),re("button",{class:"w-full mb-1",onClick:()=>{Le().setStageTransitingTo(1)},children:"Universe"}),re("button",{class:"w-full mb-1",disabled:!0,onClick:()=>{},children:"???"})]})]}),a!==null&&re("div",{class:"px-3 pt-1 pb-3 window mt-1 mb-1",children:[re("h2",{class:"mb-2",children:"Weather"}),re("div",{children:re("table",{children:[re("tr",{children:[re("td",{class:"pr-1",children:!a.enabled&&">"}),re("td",{class:a.enabled?"":"font-bold",children:"Normal"})]}),re("tr",{children:[re("td",{class:"pr-1",children:a.enabled&&">"}),re("td",{class:a.enabled?"font-bold":"",children:[a.name,!a.enabled&&re(Ht,{children:[" (in ","<"+c," min",c!==1&&"s",")"]})]})]})]})})]}),re(Lw,{})]}),re(d1,{}),re("div",{class:"absolute left-1 bottom-1 px-5 pb-1 window",children:[re("span",{class:"cursor-pointer",onClick:()=>{t.current.showModal()},children:"Credit"}),re("span",{class:"cursor-pointer text-red-400 ml-5",onClick:()=>{confirm("Are you sure you want to reset your save data?")&&(Jb(),location.reload())},children:"Reset Progress"})]}),re("dialog",{ref:t,class:"window p-2",onClick:Vh,children:re("div",{class:"p-5",children:[re("h1",{class:"text-xl mb-2",children:"Credits"}),re("ul",{dangerouslySetInnerHTML:{__html:n??""},class:"w-full h-full block [&_li]:mb-2 [&_h2]:font-bold [&_a]:text-violet-300 select-text"})]})}),re("dialog",{ref:e,class:"bg-gray-100 w-[400px] h-[620px] p-5 box-border shadow-2xl select-none [transition:opacity_ease_0.3s]",onClick:Vh,children:i.news&&re("div",{class:"[line-height:1.2] [font-size:12px] text-justify overflow-y-hidden  h-full",children:[re("h2",{class:"text-lg font-bold mb-4 [border-bottom:3px_solid_rgb(130,130,130)] text-center",children:i.news[0]}),re("span",{children:i.news[1]}),re("span",{class:"text-gray-500",children:Pw})]})}),o.size>0&&re("div",{class:"text-white absolute top-[35%] left-0 w-full text-center whitespace-pre",children:[...o.values()].join(`
`)})]})};Er(re(Rw,{}),document.body);De.snoise=`
//
// Description : Array and textureless GLSL 2D/3D/4D simplex 
//               noise functions.
//      Author : Ian McEwan, Ashima Arts.
//  Maintainer : stegu
//     Lastmod : 20201014 (stegu)
//     License : Copyright (C) 2011 Ashima Arts. All rights reserved.
//               Distributed under the MIT License. See LICENSE file.
//               https://github.com/ashima/webgl-noise
//               https://github.com/stegu/webgl-noise
// 

vec3 mod289(vec3 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 mod289(vec4 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec4 permute(vec4 x) {
     return mod289(((x*34.0)+10.0)*x);
}

vec4 taylorInvSqrt(vec4 r)
{
  return 1.79284291400159 - 0.85373472095314 * r;
}

float snoise(vec3 v)
  { 
  const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
  const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

// First corner
  vec3 i  = floor(v + dot(v, C.yyy) );
  vec3 x0 =   v - i + dot(i, C.xxx) ;

// Other corners
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min( g.xyz, l.zxy );
  vec3 i2 = max( g.xyz, l.zxy );

  //   x0 = x0 - 0.0 + 0.0 * C.xxx;
  //   x1 = x0 - i1  + 1.0 * C.xxx;
  //   x2 = x0 - i2  + 2.0 * C.xxx;
  //   x3 = x0 - 1.0 + 3.0 * C.xxx;
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy; // 2.0*C.x = 1/3 = C.y
  vec3 x3 = x0 - D.yyy;      // -1.0+3.0*C.x = -0.5 = -D.y

// Permutations
  i = mod289(i); 
  vec4 p = permute( permute( permute( 
             i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
           + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
           + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

// Gradients: 7x7 points over a square, mapped onto an octahedron.
// The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
  float n_ = 0.142857142857; // 1.0/7.0
  vec3  ns = n_ * D.wyz - D.xzx;

  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

  vec4 x = x_ *ns.x + ns.yyyy;
  vec4 y = y_ *ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);

  vec4 b0 = vec4( x.xy, y.xy );
  vec4 b1 = vec4( x.zw, y.zw );

  //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
  //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
  vec4 s0 = floor(b0)*2.0 + 1.0;
  vec4 s1 = floor(b1)*2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));

  vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
  vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

  vec3 p0 = vec3(a0.xy,h.x);
  vec3 p1 = vec3(a0.zw,h.y);
  vec3 p2 = vec3(a1.xy,h.z);
  vec3 p3 = vec3(a1.zw,h.w);

//Normalise gradients
  vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
  p0 *= norm.x;
  p1 *= norm.y;
  p2 *= norm.z;
  p3 *= norm.w;

// Mix final noise value
  vec4 m = max(0.5 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
  m = m * m;
  return 105.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                dot(p2,x2), dot(p3,x3) ) );
  }

vec2 mod289(vec2 x) {
  return x - floor(x * (1.0 / 289.0)) * 289.0;
}

vec3 permute(vec3 x) {
  return mod289(((x*34.0)+10.0)*x);
}

float snoise(vec2 v)
  {
  const vec4 C = vec4(0.211324865405187,  // (3.0-sqrt(3.0))/6.0
                      0.366025403784439,  // 0.5*(sqrt(3.0)-1.0)
                     -0.577350269189626,  // -1.0 + 2.0 * C.x
                      0.024390243902439); // 1.0 / 41.0
// First corner
  vec2 i  = floor(v + dot(v, C.yy) );
  vec2 x0 = v -   i + dot(i, C.xx);

// Other corners
  vec2 i1;
  //i1.x = step( x0.y, x0.x ); // x0.x > x0.y ? 1.0 : 0.0
  //i1.y = 1.0 - i1.x;
  i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
  // x0 = x0 - 0.0 + 0.0 * C.xx ;
  // x1 = x0 - i1 + 1.0 * C.xx ;
  // x2 = x0 - 1.0 + 2.0 * C.xx ;
  vec4 x12 = x0.xyxy + C.xxzz;
  x12.xy -= i1;

// Permutations
  i = mod289(i); // Avoid truncation effects in permutation
  vec3 p = permute( permute( i.y + vec3(0.0, i1.y, 1.0 ))
		+ i.x + vec3(0.0, i1.x, 1.0 ));

  vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
  m = m*m ;
  m = m*m ;

// Gradients: 41 points uniformly over a line, mapped onto a diamond.
// The ring size 17*17 = 289 is close to a multiple of 41 (41*7 = 287)

  vec3 x = 2.0 * fract(p * C.www) - 1.0;
  vec3 h = abs(x) - 0.5;
  vec3 ox = floor(x + 0.5);
  vec3 a0 = x - ox;

// Normalise gradients implicitly by scaling m
// Approximation of: m *= inversesqrt( a0*a0 + h*h );
  m *= 1.79284291400159 - 0.85373472095314 * ( a0*a0 + h*h );

// Compute final noise value at P
  vec3 g;
  g.x  = a0.x  * x0.x  + h.x  * x0.y;
  g.yz = a0.yz * x12.xz + h.yz * x12.yw;
  return 130.0 * dot(m, g);
}
`;const Iw=(i,e)=>{i.traverse(t=>{t instanceof se&&(t.material.onBeforeCompile=n=>{Object.assign(n.uniforms,e.uniforms??{}),t.userData.shader=n,e.vertexShader?.trim()&&(n.vertexShader=n.vertexShader.replace(/void\s*main\s*\(\s*\)/,"void super()")+e.vertexShader),e.fragmentShader?.trim()&&(n.fragmentShader=n.fragmentShader.replace(/void\s*main\s*\(\s*\)/,"void super()")+e.fragmentShader)})})},Fw=(i,e)=>{i.traverse(t=>{t instanceof se&&(t.material=e)})},Nw=`
#include <snoise>

in vec2 pos;
uniform float time;

void main() {
    gl_FragColor = vec4(vec3(73.0, 150.0, 209.0) / 255.0 + snoise(pos * 8.0 + vec2(0.0, 0.0003) * time) * 0.15, 0.8 - smoothstep(0.3, 0.55, length(pos)));
}
`,Ow=`
out vec2 pos;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    pos = position.xy;
}
`,kw=()=>{const i={time:{value:0}};return zt.add(e=>{i.time.value=e}),Tn(new se(new Or,new mt({transparent:!0,uniforms:i,vertexShader:Ow,fragmentShader:Nw})),{rotateX:-Math.PI/2,scale:{setScalar:4},position:{setY:-.13}})};class Bw extends Cs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Gw(t)}),this.register(function(t){return new Zw(t)}),this.register(function(t){return new Kw(t)}),this.register(function(t){return new jw(t)}),this.register(function(t){return new Xw(t)}),this.register(function(t){return new qw(t)}),this.register(function(t){return new Yw(t)}),this.register(function(t){return new Vw(t)}),this.register(function(t){return new $w(t)}),this.register(function(t){return new Ww(t)}),this.register(function(t){return new zw(t)}),this.register(function(t){return new Qw(t)}),this.register(function(t){return new Jw(t)})}load(e,t,n,r){const s=this;let o;this.resourcePath!==""?o=this.resourcePath:this.path!==""?o=this.path:o=Li.extractUrlBase(e),this.manager.itemStart(e);const a=function(l){r?r(l):console.error(l),s.manager.itemError(e),s.manager.itemEnd(e)},c=new Af(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{s.parse(l,o,function(u){t(u),s.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setDDSLoader(){throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,r){let s;const o={},a={};if(typeof e=="string")s=JSON.parse(e);else if(e instanceof ArrayBuffer)if(Li.decodeText(new Uint8Array(e,0,4))===sp){try{o[Ie.KHR_BINARY_GLTF]=new eM(e)}catch(u){r&&r(u);return}s=JSON.parse(o[Ie.KHR_BINARY_GLTF].content)}else s=JSON.parse(Li.decodeText(new Uint8Array(e)));else s=e;if(s.asset===void 0||s.asset.version[0]<2){r&&r(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new dM(s,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let l=0;l<this.pluginCallbacks.length;l++){const u=this.pluginCallbacks[l](c);a[u.name]=u,o[u.name]=!0}if(s.extensionsUsed)for(let l=0;l<s.extensionsUsed.length;++l){const u=s.extensionsUsed[l],f=s.extensionsRequired||[];switch(u){case Ie.KHR_MATERIALS_UNLIT:o[u]=new Hw;break;case Ie.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:o[u]=new iM;break;case Ie.KHR_DRACO_MESH_COMPRESSION:o[u]=new tM(s,this.dracoLoader);break;case Ie.KHR_TEXTURE_TRANSFORM:o[u]=new nM;break;case Ie.KHR_MESH_QUANTIZATION:o[u]=new rM;break;default:f.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,r)}parseAsync(e,t){const n=this;return new Promise(function(r,s){n.parse(e,t,r,s)})}}function Uw(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Ie={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:"KHR_materials_pbrSpecularGlossiness",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class zw{constructor(e){this.parser=e,this.name=Ie.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,r=t.length;n<r;n++){const s=t[n];s.extensions&&s.extensions[this.name]&&s.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,s.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let r=t.cache.get(n);if(r)return r;const s=t.json,c=((s.extensions&&s.extensions[this.name]||{}).lights||[])[e];let l;const u=new Se(16777215);c.color!==void 0&&u.fromArray(c.color);const f=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new fl(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new ey(u),l.distance=f;break;case"spot":l=new Qx(u),l.distance=f,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),r=Promise.resolve(l),t.cache.add(n,r),r}createNodeAttachment(e){const t=this,n=this.parser,s=n.json.nodes[e],a=(s.extensions&&s.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Hw{constructor(){this.name=Ie.KHR_MATERIALS_UNLIT}getMaterialType(){return fn}extendParams(e,t,n){const r=[];e.color=new Se(1,1,1),e.opacity=1;const s=t.pbrMetallicRoughness;if(s){if(Array.isArray(s.baseColorFactor)){const o=s.baseColorFactor;e.color.fromArray(o),e.opacity=o[3]}s.baseColorTexture!==void 0&&r.push(n.assignTexture(e,"map",s.baseColorTexture,We))}return Promise.all(r)}}class Vw{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name].emissiveStrength;return s!==void 0&&(t.emissiveIntensity=s),Promise.resolve()}}class Gw{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(s.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new fe(a,a)}return Promise.all(s)}}class Ww{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&s.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(s)}}class jw{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[];t.sheenColor=new Se(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=r.extensions[this.name];return o.sheenColorFactor!==void 0&&t.sheenColor.fromArray(o.sheenColorFactor),o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&s.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,We)),o.sheenRoughnessTexture!==void 0&&s.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(s)}}class Xw{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&s.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(s)}}class qw{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&s.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Se(a[0],a[1],a[2]),Promise.all(s)}}class Yw{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const r=this.parser.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=r.extensions[this.name];return t.ior=s.ior!==void 0?s.ior:1.5,Promise.resolve()}}class $w{constructor(e){this.parser=e,this.name=Ie.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Wi}extendMaterialParams(e,t){const n=this.parser,r=n.json.materials[e];if(!r.extensions||!r.extensions[this.name])return Promise.resolve();const s=[],o=r.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&s.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Se(a[0],a[1],a[2]),o.specularColorTexture!==void 0&&s.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,We)),Promise.all(s)}}class Zw{constructor(e){this.parser=e,this.name=Ie.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,r=n.textures[e];if(!r.extensions||!r.extensions[this.name])return null;const s=r.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,s.source,o)}}class Kw{constructor(e){this.parser=e,this.name=Ie.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,r=n.json,s=r.textures[e];if(!s.extensions||!s.extensions[t])return null;const o=s.extensions[t],a=r.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(r.extensionsRequired&&r.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Qw{constructor(e){this.name=Ie.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const r=n.extensions[this.name],s=this.parser.getDependency("buffer",r.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return s.then(function(a){const c=r.byteOffset||0,l=r.byteLength||0,u=r.count,f=r.byteStride,h=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,f,h,r.mode,r.filter).then(function(d){return d.buffer}):o.ready.then(function(){const d=new ArrayBuffer(u*f);return o.decodeGltfBuffer(new Uint8Array(d),u,f,h,r.mode,r.filter),d})})}else return null}}class Jw{constructor(e){this.name=Ie.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const r=t.meshes[n.mesh];for(const l of r.primitives)if(l.mode!==Qt.TRIANGLES&&l.mode!==Qt.TRIANGLE_STRIP&&l.mode!==Qt.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),f=u.isGroup?u.children:[u],h=l[0].count,d=[];for(const m of f){const g=new Fe,p=new D,_=new ut,y=new D(1,1,1),x=new Nx(m.geometry,m.material,h);for(let v=0;v<h;v++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,v),c.ROTATION&&_.fromBufferAttribute(c.ROTATION,v),c.SCALE&&y.fromBufferAttribute(c.SCALE,v),x.setMatrixAt(v,g.compose(p,_,y));for(const v in c)v!=="TRANSLATION"&&v!=="ROTATION"&&v!=="SCALE"&&m.geometry.setAttribute(v,c[v]);qe.prototype.copy.call(x,m),x.frustumCulled=!1,this.parser.assignFinalMaterial(x),d.push(x)}return u.isGroup?(u.clear(),u.add(...d),u):d[0]}))}}const sp="glTF",Qr=12,Gh={JSON:1313821514,BIN:5130562};class eM{constructor(e){this.name=Ie.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,Qr);if(this.header={magic:Li.decodeText(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==sp)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const n=this.header.length-Qr,r=new DataView(e,Qr);let s=0;for(;s<n;){const o=r.getUint32(s,!0);s+=4;const a=r.getUint32(s,!0);if(s+=4,a===Gh.JSON){const c=new Uint8Array(e,Qr+s,o);this.content=Li.decodeText(c)}else if(a===Gh.BIN){const c=Qr+s;this.body=e.slice(c,c+o)}s+=o}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class tM{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Ie.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,r=this.dracoLoader,s=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const f=Ll[u]||u.toLowerCase();a[f]=o[u]}for(const u in e.attributes){const f=Ll[u]||u.toLowerCase();if(o[u]!==void 0){const h=n.accessors[e.attributes[u]],d=Ts[h.componentType];l[f]=d.name,c[f]=h.normalized===!0}}return t.getDependency("bufferView",s).then(function(u){return new Promise(function(f){r.decodeDracoFile(u,function(h){for(const d in h.attributes){const m=h.attributes[d],g=c[d];g!==void 0&&(m.normalized=g)}f(h)},a,l)})})}}class nM{constructor(){this.name=Ie.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return t.texCoord!==void 0&&console.warn('THREE.GLTFLoader: Custom UV sets in "'+this.name+'" extension not yet supported.'),t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Pl extends jo{constructor(e){super(),this.isGLTFSpecularGlossinessMaterial=!0;const t=["#ifdef USE_SPECULARMAP","	uniform sampler2D specularMap;","#endif"].join(`
`),n=["#ifdef USE_GLOSSINESSMAP","	uniform sampler2D glossinessMap;","#endif"].join(`
`),r=["vec3 specularFactor = specular;","#ifdef USE_SPECULARMAP","	vec4 texelSpecular = texture2D( specularMap, vUv );","	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture","	specularFactor *= texelSpecular.rgb;","#endif"].join(`
`),s=["float glossinessFactor = glossiness;","#ifdef USE_GLOSSINESSMAP","	vec4 texelGlossiness = texture2D( glossinessMap, vUv );","	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture","	glossinessFactor *= texelGlossiness.a;","#endif"].join(`
`),o=["PhysicalMaterial material;","material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );","vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );","float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );","material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.","material.roughness += geometryRoughness;","material.roughness = min( material.roughness, 1.0 );","material.specularColor = specularFactor;"].join(`
`),a={specular:{value:new Se().setHex(16777215)},glossiness:{value:1},specularMap:{value:null},glossinessMap:{value:null}};this._extraUniforms=a,this.onBeforeCompile=function(c){for(const l in a)c.uniforms[l]=a[l];c.fragmentShader=c.fragmentShader.replace("uniform float roughness;","uniform vec3 specular;").replace("uniform float metalness;","uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>",t).replace("#include <metalnessmap_pars_fragment>",n).replace("#include <roughnessmap_fragment>",r).replace("#include <metalnessmap_fragment>",s).replace("#include <lights_physical_fragment>",o)},Object.defineProperties(this,{specular:{get:function(){return a.specular.value},set:function(c){a.specular.value=c}},specularMap:{get:function(){return a.specularMap.value},set:function(c){a.specularMap.value=c,c?this.defines.USE_SPECULARMAP="":delete this.defines.USE_SPECULARMAP}},glossiness:{get:function(){return a.glossiness.value},set:function(c){a.glossiness.value=c}},glossinessMap:{get:function(){return a.glossinessMap.value},set:function(c){a.glossinessMap.value=c,c?(this.defines.USE_GLOSSINESSMAP="",this.defines.USE_UV=""):(delete this.defines.USE_GLOSSINESSMAP,delete this.defines.USE_UV)}}}),delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this.setValues(e)}copy(e){return super.copy(e),this.specularMap=e.specularMap,this.specular.copy(e.specular),this.glossinessMap=e.glossinessMap,this.glossiness=e.glossiness,delete this.metalness,delete this.roughness,delete this.metalnessMap,delete this.roughnessMap,this}}class iM{constructor(){this.name=Ie.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS,this.specularGlossinessParams=["color","map","lightMap","lightMapIntensity","aoMap","aoMapIntensity","emissive","emissiveIntensity","emissiveMap","bumpMap","bumpScale","normalMap","normalMapType","displacementMap","displacementScale","displacementBias","specularMap","specular","glossinessMap","glossiness","alphaMap","envMap","envMapIntensity"]}getMaterialType(){return Pl}extendParams(e,t,n){const r=t.extensions[this.name];e.color=new Se(1,1,1),e.opacity=1;const s=[];if(Array.isArray(r.diffuseFactor)){const o=r.diffuseFactor;e.color.fromArray(o),e.opacity=o[3]}if(r.diffuseTexture!==void 0&&s.push(n.assignTexture(e,"map",r.diffuseTexture,We)),e.emissive=new Se(0,0,0),e.glossiness=r.glossinessFactor!==void 0?r.glossinessFactor:1,e.specular=new Se(1,1,1),Array.isArray(r.specularFactor)&&e.specular.fromArray(r.specularFactor),r.specularGlossinessTexture!==void 0){const o=r.specularGlossinessTexture;s.push(n.assignTexture(e,"glossinessMap",o)),s.push(n.assignTexture(e,"specularMap",o,We))}return Promise.all(s)}createMaterial(e){const t=new Pl(e);return t.fog=!0,t.color=e.color,t.map=e.map===void 0?null:e.map,t.lightMap=null,t.lightMapIntensity=1,t.aoMap=e.aoMap===void 0?null:e.aoMap,t.aoMapIntensity=1,t.emissive=e.emissive,t.emissiveIntensity=e.emissiveIntensity===void 0?1:e.emissiveIntensity,t.emissiveMap=e.emissiveMap===void 0?null:e.emissiveMap,t.bumpMap=e.bumpMap===void 0?null:e.bumpMap,t.bumpScale=1,t.normalMap=e.normalMap===void 0?null:e.normalMap,t.normalMapType=Nl,e.normalScale&&(t.normalScale=e.normalScale),t.displacementMap=null,t.displacementScale=1,t.displacementBias=0,t.specularMap=e.specularMap===void 0?null:e.specularMap,t.specular=e.specular,t.glossinessMap=e.glossinessMap===void 0?null:e.glossinessMap,t.glossiness=e.glossiness,t.alphaMap=null,t.envMap=e.envMap===void 0?null:e.envMap,t.envMapIntensity=1,t}}class rM{constructor(){this.name=Ie.KHR_MESH_QUANTIZATION}}class op extends As{constructor(e,t,n,r){super(e,t,n,r)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r*3+r;for(let o=0;o!==r;o++)t[o]=n[s+o];return t}interpolate_(e,t,n,r){const s=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=r-t,f=(n-t)/u,h=f*f,d=h*f,m=e*l,g=m-l,p=-2*d+3*h,_=d-h,y=1-p,x=_-h+f;for(let v=0;v!==a;v++){const w=o[g+v+a],A=o[g+v+c]*u,R=o[m+v+a],b=o[m+v]*u;s[v]=y*w+x*A+p*R+_*b}return s}}const sM=new ut;class oM extends op{interpolate_(e,t,n,r){const s=super.interpolate_(e,t,n,r);return sM.fromArray(s).normalize().toArray(s),s}}const Qt={FLOAT:5126,FLOAT_MAT3:35675,FLOAT_MAT4:35676,FLOAT_VEC2:35664,FLOAT_VEC3:35665,FLOAT_VEC4:35666,LINEAR:9729,REPEAT:10497,SAMPLER_2D:35678,POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6,UNSIGNED_BYTE:5121,UNSIGNED_SHORT:5123},Ts={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Wh={9728:St,9729:Bt,9984:sl,9985:nf,9986:ol,9987:Ir},jh={33071:Jt,33648:wo,10497:br},Xh={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Ll={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv2",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ni={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},aM={CUBICSPLINE:void 0,LINEAR:Mr,STEP:ps},tl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function lM(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new jo({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ni})),i.DefaultMaterial}function Jr(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function wi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function cM(i,e,t){let n=!1,r=!1,s=!1;for(let l=0,u=e.length;l<u;l++){const f=e[l];if(f.POSITION!==void 0&&(n=!0),f.NORMAL!==void 0&&(r=!0),f.COLOR_0!==void 0&&(s=!0),n&&r&&s)break}if(!n&&!r&&!s)return Promise.resolve(i);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const f=e[l];if(n){const h=f.POSITION!==void 0?t.getDependency("accessor",f.POSITION):i.attributes.position;o.push(h)}if(r){const h=f.NORMAL!==void 0?t.getDependency("accessor",f.NORMAL):i.attributes.normal;a.push(h)}if(s){const h=f.COLOR_0!==void 0?t.getDependency("accessor",f.COLOR_0):i.attributes.color;c.push(h)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],f=l[1],h=l[2];return n&&(i.morphAttributes.position=u),r&&(i.morphAttributes.normal=f),s&&(i.morphAttributes.color=h),i.morphTargetsRelative=!0,i})}function uM(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,r=t.length;n<r;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function hM(i){const e=i.extensions&&i.extensions[Ie.KHR_DRACO_MESH_COMPRESSION];let t;return e?t="draco:"+e.bufferView+":"+e.indices+":"+qh(e.attributes):t=i.indices+":"+qh(i.attributes)+":"+i.mode,t}function qh(i){let e="";const t=Object.keys(i).sort();for(let n=0,r=t.length;n<r;n++)e+=t[n]+":"+i[t[n]]+";";return e}function Rl(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function fM(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}class dM{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Uw,this.associations=new Map,this.primitiveCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};const n=/^((?!chrome|android).)*safari/i.test(navigator.userAgent)===!0,r=navigator.userAgent.indexOf("Firefox")>-1,s=r?navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1]:-1;typeof createImageBitmap>"u"||n||r&&s<98?this.textureLoader=new Zx(this.options.manager):this.textureLoader=new ny(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Af(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,r=this.json,s=this.extensions;this.cache.removeAll(),this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][r.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:r.asset,parser:n,userData:{}};Jr(s,a,r),wi(a,r),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let r=0,s=t.length;r<s;r++){const o=t[r].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let r=0,s=e.length;r<s;r++){const o=e[r];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const r=n.clone(),s=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())s(u,a.children[l])};return s(n,r),r.name+="_instance_"+e.uses[t]++,r}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const r=e(t[n]);if(r)return r}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let r=0;r<t.length;r++){const s=e(t[r]);s&&n.push(s)}return n}getDependency(e,t){const n=e+":"+t;let r=this.cache.get(n);if(!r){switch(e){case"scene":r=this.loadScene(t);break;case"node":r=this.loadNode(t);break;case"mesh":r=this._invokeOne(function(s){return s.loadMesh&&s.loadMesh(t)});break;case"accessor":r=this.loadAccessor(t);break;case"bufferView":r=this._invokeOne(function(s){return s.loadBufferView&&s.loadBufferView(t)});break;case"buffer":r=this.loadBuffer(t);break;case"material":r=this._invokeOne(function(s){return s.loadMaterial&&s.loadMaterial(t)});break;case"texture":r=this._invokeOne(function(s){return s.loadTexture&&s.loadTexture(t)});break;case"skin":r=this.loadSkin(t);break;case"animation":r=this._invokeOne(function(s){return s.loadAnimation&&s.loadAnimation(t)});break;case"camera":r=this.loadCamera(t);break;default:throw new Error("Unknown type: "+e)}this.cache.add(n,r)}return r}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,r=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(r.map(function(s,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Ie.KHR_BINARY_GLTF].body);const r=this.options;return new Promise(function(s,o){n.load(Li.resolveURL(t.uri,r.path),s,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const r=t.byteLength||0,s=t.byteOffset||0;return n.slice(s,s+r)})}loadAccessor(e){const t=this,n=this.json,r=this.json.accessors[e];if(r.bufferView===void 0&&r.sparse===void 0)return Promise.resolve(null);const s=[];return r.bufferView!==void 0?s.push(this.getDependency("bufferView",r.bufferView)):s.push(null),r.sparse!==void 0&&(s.push(this.getDependency("bufferView",r.sparse.indices.bufferView)),s.push(this.getDependency("bufferView",r.sparse.values.bufferView))),Promise.all(s).then(function(o){const a=o[0],c=Xh[r.type],l=Ts[r.componentType],u=l.BYTES_PER_ELEMENT,f=u*c,h=r.byteOffset||0,d=r.bufferView!==void 0?n.bufferViews[r.bufferView].byteStride:void 0,m=r.normalized===!0;let g,p;if(d&&d!==f){const _=Math.floor(h/d),y="InterleavedBuffer:"+r.bufferView+":"+r.componentType+":"+_+":"+r.count;let x=t.cache.get(y);x||(g=new l(a,_*d,r.count*d/u),x=new Dx(g,d/u),t.cache.add(y,x)),p=new zl(x,c,h%d/u,m)}else a===null?g=new l(r.count*c):g=new l(a,h,r.count*c),p=new Ft(g,c,m);if(r.sparse!==void 0){const _=Xh.SCALAR,y=Ts[r.sparse.indices.componentType],x=r.sparse.indices.byteOffset||0,v=r.sparse.values.byteOffset||0,w=new y(o[1],x,r.sparse.count*_),A=new l(o[2],v,r.sparse.count*c);a!==null&&(p=new Ft(p.array.slice(),p.itemSize,p.normalized));for(let R=0,b=w.length;R<b;R++){const T=w[R];if(p.setX(T,A[R*c]),c>=2&&p.setY(T,A[R*c+1]),c>=3&&p.setZ(T,A[R*c+2]),c>=4&&p.setW(T,A[R*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}}return p})}loadTexture(e){const t=this.json,n=this.options,s=t.textures[e].source,o=t.images[s];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,s,a)}loadTextureImage(e,t,n){const r=this,s=this.json,o=s.textures[e],a=s.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"";const h=(s.samplers||{})[o.sampler]||{};return u.magFilter=Wh[h.magFilter]||Bt,u.minFilter=Wh[h.minFilter]||Ir,u.wrapS=jh[h.wrapS]||br,u.wrapT=jh[h.wrapT]||br,r.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,r=this.json,s=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(f=>f.clone());const o=r.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(f){l=!0;const h=new Blob([f],{type:o.mimeType});return c=a.createObjectURL(h),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(f){return new Promise(function(h,d){let m=h;t.isImageBitmapLoader===!0&&(m=function(g){const p=new Nt(g);p.needsUpdate=!0,h(p)}),t.load(Li.resolveURL(f,s.path),m,void 0,d)})}).then(function(f){return l===!0&&a.revokeObjectURL(c),f.userData.mimeType=o.mimeType||fM(o.uri),f}).catch(function(f){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),f});return this.sourceCache[e]=u,u}assignTexture(e,t,n,r){const s=this;return this.getDependency("texture",n.index).then(function(o){if(n.texCoord!==void 0&&n.texCoord!=0&&!(t==="aoMap"&&n.texCoord==1)&&console.warn("THREE.GLTFLoader: Custom UV set "+n.texCoord+" for texture "+t+" not yet supported."),s.extensions[Ie.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Ie.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=s.associations.get(o);o=s.extensions[Ie.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),s.associations.set(o,c)}}return r!==void 0&&(o.encoding=r),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const r=t.attributes.tangent===void 0,s=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Mf,Mn.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new Go,Mn.prototype.copy.call(c,n),c.color.copy(n.color),this.cache.add(a,c)),n=c}if(r||s||o){let a="ClonedMaterial:"+n.uuid+":";n.isGLTFSpecularGlossinessMaterial&&(a+="specular-glossiness:"),r&&(a+="derivative-tangents:"),s&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),s&&(c.vertexColors=!0),o&&(c.flatShading=!0),r&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}n.aoMap&&t.attributes.uv2===void 0&&t.attributes.uv!==void 0&&t.setAttribute("uv2",t.attributes.uv),e.material=n}getMaterialType(){return jo}loadMaterial(e){const t=this,n=this.json,r=this.extensions,s=n.materials[e];let o;const a={},c=s.extensions||{},l=[];if(c[Ie.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]){const f=r[Ie.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];o=f.getMaterialType(),l.push(f.extendParams(a,s,t))}else if(c[Ie.KHR_MATERIALS_UNLIT]){const f=r[Ie.KHR_MATERIALS_UNLIT];o=f.getMaterialType(),l.push(f.extendParams(a,s,t))}else{const f=s.pbrMetallicRoughness||{};if(a.color=new Se(1,1,1),a.opacity=1,Array.isArray(f.baseColorFactor)){const h=f.baseColorFactor;a.color.fromArray(h),a.opacity=h[3]}f.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",f.baseColorTexture,We)),a.metalness=f.metallicFactor!==void 0?f.metallicFactor:1,a.roughness=f.roughnessFactor!==void 0?f.roughnessFactor:1,f.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",f.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",f.metallicRoughnessTexture))),o=this._invokeOne(function(h){return h.getMaterialType&&h.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(h){return h.extendMaterialParams&&h.extendMaterialParams(e,a)})))}s.doubleSided===!0&&(a.side=bn);const u=s.alphaMode||tl.OPAQUE;if(u===tl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===tl.MASK&&(a.alphaTest=s.alphaCutoff!==void 0?s.alphaCutoff:.5)),s.normalTexture!==void 0&&o!==fn&&(l.push(t.assignTexture(a,"normalMap",s.normalTexture)),a.normalScale=new fe(1,1),s.normalTexture.scale!==void 0)){const f=s.normalTexture.scale;a.normalScale.set(f,f)}return s.occlusionTexture!==void 0&&o!==fn&&(l.push(t.assignTexture(a,"aoMap",s.occlusionTexture)),s.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=s.occlusionTexture.strength)),s.emissiveFactor!==void 0&&o!==fn&&(a.emissive=new Se().fromArray(s.emissiveFactor)),s.emissiveTexture!==void 0&&o!==fn&&l.push(t.assignTexture(a,"emissiveMap",s.emissiveTexture,We)),Promise.all(l).then(function(){let f;return o===Pl?f=r[Ie.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(a):f=new o(a),s.name&&(f.name=s.name),wi(f,s),t.associations.set(f,{materials:e}),s.extensions&&Jr(r,f,s),f})}createUniqueName(e){const t=Ye.sanitizeNodeName(e||"");let n=t;for(let r=1;this.nodeNamesUsed[n];++r)n=t+"_"+r;return this.nodeNamesUsed[n]=!0,n}loadGeometries(e){const t=this,n=this.extensions,r=this.primitiveCache;function s(a){return n[Ie.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Yh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=hM(l),f=r[u];if(f)o.push(f.promise);else{let h;l.extensions&&l.extensions[Ie.KHR_DRACO_MESH_COMPRESSION]?h=s(l):h=Yh(new ht,l,t),r[u]={primitive:l,promise:h},o.push(h)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,r=this.extensions,s=n.meshes[e],o=s.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?lM(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],f=[];for(let d=0,m=u.length;d<m;d++){const g=u[d],p=o[d];let _;const y=l[d];if(p.mode===Qt.TRIANGLES||p.mode===Qt.TRIANGLE_STRIP||p.mode===Qt.TRIANGLE_FAN||p.mode===void 0)_=s.isSkinnedMesh===!0?new Lx(g,y):new se(g,y),_.isSkinnedMesh===!0&&!_.geometry.attributes.skinWeight.normalized&&_.normalizeSkinWeights(),p.mode===Qt.TRIANGLE_STRIP?_.geometry=$h(_.geometry,Fl):p.mode===Qt.TRIANGLE_FAN&&(_.geometry=$h(_.geometry,Mo));else if(p.mode===Qt.LINES)_=new wf(g,y);else if(p.mode===Qt.LINE_STRIP)_=new un(g,y);else if(p.mode===Qt.LINE_LOOP)_=new Ox(g,y);else if(p.mode===Qt.POINTS)_=new kx(g,y);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(_.geometry.morphAttributes).length>0&&uM(_,s),_.name=t.createUniqueName(s.name||"mesh_"+e),wi(_,s),p.extensions&&Jr(r,_,p),t.assignFinalMaterial(_),f.push(_)}for(let d=0,m=f.length;d<m;d++)t.associations.set(f[d],{meshes:e,primitives:d});if(f.length===1)return f[0];const h=new wn;t.associations.set(h,{meshes:e});for(let d=0,m=f.length;d<m;d++)h.add(f[d]);return h})}loadCamera(e){let t;const n=this.json.cameras[e],r=n[n.type];if(!r){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new It(Dm.radToDeg(r.yfov),r.aspectRatio||1,r.znear||1,r.zfar||2e6):n.type==="orthographic"&&(t=new Es(-r.xmag,r.xmag,r.ymag,-r.ymag,r.znear,r.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),wi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n={joints:t.joints};return t.inverseBindMatrices===void 0?Promise.resolve(n):this.getDependency("accessor",t.inverseBindMatrices).then(function(r){return n.inverseBindMatrices=r,n})}loadAnimation(e){const n=this.json.animations[e],r=[],s=[],o=[],a=[],c=[];for(let l=0,u=n.channels.length;l<u;l++){const f=n.channels[l],h=n.samplers[f.sampler],d=f.target,m=d.node,g=n.parameters!==void 0?n.parameters[h.input]:h.input,p=n.parameters!==void 0?n.parameters[h.output]:h.output;r.push(this.getDependency("node",m)),s.push(this.getDependency("accessor",g)),o.push(this.getDependency("accessor",p)),a.push(h),c.push(d)}return Promise.all([Promise.all(r),Promise.all(s),Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],f=l[1],h=l[2],d=l[3],m=l[4],g=[];for(let _=0,y=u.length;_<y;_++){const x=u[_],v=f[_],w=h[_],A=d[_],R=m[_];if(x===void 0)continue;x.updateMatrix();let b;switch(ni[R.path]){case ni.weights:b=_s;break;case ni.rotation:b=Bi;break;case ni.position:case ni.scale:default:b=vs;break}const T=x.name?x.name:x.uuid,I=A.interpolation!==void 0?aM[A.interpolation]:Mr,W=[];ni[R.path]===ni.weights?x.traverse(function(U){U.morphTargetInfluences&&W.push(U.name?U.name:U.uuid)}):W.push(T);let j=w.array;if(w.normalized){const U=Rl(j.constructor),O=new Float32Array(j.length);for(let V=0,$=j.length;V<$;V++)O[V]=j[V]*U;j=O}for(let U=0,O=W.length;U<O;U++){const V=new b(W[U]+"."+ni[R.path],v.array,j,I);A.interpolation==="CUBICSPLINE"&&(V.createInterpolant=function(ee){const X=this instanceof Bi?oM:op;return new X(this.times,this.values,this.getValueSize()/3,ee)},V.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0),g.push(V)}}const p=n.name?n.name:"animation_"+e;return new Gx(p,void 0,g)})}createNodeMesh(e){const t=this.json,n=this,r=t.nodes[e];return r.mesh===void 0?null:n.getDependency("mesh",r.mesh).then(function(s){const o=n._getNodeRef(n.meshCache,r.mesh,s);return r.weights!==void 0&&o.traverse(function(a){if(!!a.isMesh)for(let c=0,l=r.weights.length;c<l;c++)a.morphTargetInfluences[c]=r.weights[c]}),o})}loadNode(e){const t=this.json,n=this.extensions,r=this,s=t.nodes[e],o=s.name?r.createUniqueName(s.name):"";return function(){const a=[],c=r._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),s.camera!==void 0&&a.push(r.getDependency("camera",s.camera).then(function(l){return r._getNodeRef(r.cameraCache,s.camera,l)})),r._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),Promise.all(a)}().then(function(a){let c;if(s.isBone===!0?c=new bf:a.length>1?c=new wn:a.length===1?c=a[0]:c=new qe,c!==a[0])for(let l=0,u=a.length;l<u;l++)c.add(a[l]);if(s.name&&(c.userData.name=s.name,c.name=o),wi(c,s),s.extensions&&Jr(n,c,s),s.matrix!==void 0){const l=new Fe;l.fromArray(s.matrix),c.applyMatrix4(l)}else s.translation!==void 0&&c.position.fromArray(s.translation),s.rotation!==void 0&&c.quaternion.fromArray(s.rotation),s.scale!==void 0&&c.scale.fromArray(s.scale);return r.associations.has(c)||r.associations.set(c,{}),r.associations.get(c).nodes=e,c})}loadScene(e){const t=this.json,n=this.extensions,r=this.json.scenes[e],s=this,o=new wn;r.name&&(o.name=s.createUniqueName(r.name)),wi(o,r),r.extensions&&Jr(n,o,r);const a=r.nodes||[],c=[];for(let l=0,u=a.length;l<u;l++)c.push(ap(a[l],o,t,s));return Promise.all(c).then(function(){const l=u=>{const f=new Map;for(const[h,d]of s.associations)(h instanceof Mn||h instanceof Nt)&&f.set(h,d);return u.traverse(h=>{const d=s.associations.get(h);d!=null&&f.set(h,d)}),f};return s.associations=l(o),o})}}function ap(i,e,t,n){const r=t.nodes[i];return n.getDependency("node",i).then(function(s){if(r.skin===void 0)return s;let o;return n.getDependency("skin",r.skin).then(function(a){o=a;const c=[];for(let l=0,u=o.joints.length;l<u;l++)c.push(n.getDependency("node",o.joints[l]));return Promise.all(c)}).then(function(a){return s.traverse(function(c){if(!c.isMesh)return;const l=[],u=[];for(let f=0,h=a.length;f<h;f++){const d=a[f];if(d){l.push(d);const m=new Fe;o.inverseBindMatrices!==void 0&&m.fromArray(o.inverseBindMatrices.array,f*16),u.push(m)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',o.joints[f])}c.bind(new Hl(l,u),c.matrixWorld)}),s})}).then(function(s){e.add(s);const o=[];if(r.children){const a=r.children;for(let c=0,l=a.length;c<l;c++){const u=a[c];o.push(ap(u,s,t,n))}}return Promise.all(o)})}function pM(i,e,t){const n=e.attributes,r=new Gi;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(r.set(new D(c[0],c[1],c[2]),new D(l[0],l[1],l[2])),a.normalized){const u=Rl(Ts[a.componentType]);r.min.multiplyScalar(u),r.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const s=e.targets;if(s!==void 0){const a=new D,c=new D;for(let l=0,u=s.length;l<u;l++){const f=s[l];if(f.POSITION!==void 0){const h=t.json.accessors[f.POSITION],d=h.min,m=h.max;if(d!==void 0&&m!==void 0){if(c.setX(Math.max(Math.abs(d[0]),Math.abs(m[0]))),c.setY(Math.max(Math.abs(d[1]),Math.abs(m[1]))),c.setZ(Math.max(Math.abs(d[2]),Math.abs(m[2]))),h.normalized){const g=Rl(Ts[h.componentType]);c.multiplyScalar(g)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}r.expandByVector(a)}i.boundingBox=r;const o=new Fr;r.getCenter(o.center),o.radius=r.min.distanceTo(r.max)/2,i.boundingSphere=o}function Yh(i,e,t){const n=e.attributes,r=[];function s(o,a){return t.getDependency("accessor",o).then(function(c){i.setAttribute(a,c)})}for(const o in n){const a=Ll[o]||o.toLowerCase();a in i.attributes||r.push(s(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});r.push(o)}return wi(i,e),pM(i,e,t),Promise.all(r).then(function(){return e.targets!==void 0?cM(i,e.targets,t):i})}function $h(i,e){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Mo)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s}const Vr=async(i,e)=>{const t=(await new Promise((n,r)=>new Bw().load(i,n,s=>{Hi.getState().setLoadingMessage(i,`Loading ${i} (${s.loaded}/${s.total})`)},r))).scene.children[0].children[0];return Hi.getState().removeLoadingMessage(i),e!==null&&t.scale.multiplyScalar(e/new Gi().setFromObject(t).getSize(new D).y),t},mM=`
in vec2 pos;
uniform float time;
uniform float count;

void main() {
    float opacityY = (sin(pos.y * 30.0 - time * 0.08) + 1.0) / 2.0;
    float opacityX;

    // red lasers
    opacityX = smoothstep(0.005, 0.0, abs(pos.x));
    if (count >= 1.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x - 0.1)); }
    if (count >= 2.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x + 0.1)); }
    if (count >= 3.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x - 0.05)); }
    if (count >= 4.0) { opacityX += smoothstep(0.005, 0.0, abs(pos.x + 0.05)); }
    gl_FragColor = vec4(1.0, 0.3, 1.0, opacityY * opacityX);

    // white lasers
    if (count >= 5.0) {
        float opacityX2 = smoothstep(0.005 * (count - 4.0), 0.005 * (count - 5.0), abs(pos.x + cos(time * 0.08) * 0.02));
        gl_FragColor += opacityX2 * vec4(1.0, 1.0, 1.0, opacityY);
    }
}
`,gM=`
out vec2 pos;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    pos = position.xy;
}
`,_M=`
uniform sampler2D texture1;
uniform sampler2D texture2;
in vec2 vUv;

void main() {
    gl_FragColor = texture2D(texture1, vUv);
    vec4 color2 = texture2D(texture2, vUv);
    gl_FragColor.rgb = pow(gl_FragColor.rgb + color2.rgb * color2.a, /* TODO: I don't know why but using this filter makes the canvas darker, so I've corrected it here. */vec3(1.0 / 1.9));
}
`,vM=`
out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,lp=1,Ko=i=>(i.traverse(e=>{e.layers.set(lp)}),i),xM=(i,e,t)=>{const n=new Pf(i);n.renderToScreen=!1,n.addPass(t),n.addPass(new Ui(new fe(256,256),3,0,0));const r=new xs(new mt({uniforms:{texture1:{value:null},texture2:{value:n.renderTarget2.texture}},vertexShader:vM,fragmentShader:_M,defines:{}}),"texture1");return r.needsSwap=!0,If.add(()=>{e.layers.disableAll(),e.layers.enable(lp),n.render(),e.layers.enableAll()}),window.addEventListener("resize",()=>{n.setSize(window.innerWidth,window.innerHeight)}),r},yM=i=>{const e={time:{value:0},count:{value:0}};zt.add(n=>{e.time.value=n,e.count.value=Le().upgrades.Laser,Tn(t,{position:{setX:i.position.x+1,setZ:i.position.z}})});const t=Tn(new se(new Or(1,1),new mt({blending:bo,transparent:!0,uniforms:e,vertexShader:gM,fragmentShader:mM})),{rotateY:-Math.PI/2,rotateX:-Math.PI/2,scale:{set:[.25,2,0]},position:{set:[1,.01,0]}});return Ko(t),t.renderOrder=1,t};function bM(i){const e=new Map,t=new Map,n=i.clone();return cp(i,n,function(r,s){e.set(s,r),t.set(r,s)}),n.traverse(function(r){if(!r.isSkinnedMesh)return;const s=r,o=e.get(r),a=o.skeleton.bones;s.skeleton=o.skeleton.clone(),s.bindMatrix.copy(o.bindMatrix),s.skeleton.bones=a.map(function(c){return t.get(c)}),s.bind(s.skeleton,s.bindMatrix)}),n}function cp(i,e,t){t(i,e);for(let n=0;n<i.children.length;n++)cp(i.children[n],e.children[n],t)}class Xi extends qe{constructor(e){super(),this.model=e;let t;e.traverse(n=>{n instanceof se&&(t=n)}),this.mesh=t,this.originalPositions=t.geometry.attributes.position.clone()}mesh;originalPositions;static async fromBuilder(e){return new Xi(await e())}pool=new Set;withVertexAnimation(e){return zt.add(()=>{!this.parent||(e(this.mesh.geometry.attributes.position,this.originalPositions),this.mesh.geometry.attributes.position.needsUpdate=!0,this.mesh.geometry.computeVertexNormals())}),this}onCloneListeners=new Set;onAllocateListeners=new Set;onClone(e){return this.onCloneListeners.add(e),this}onAllocate(e){return this.onAllocateListeners.add(e),this}allocate(){const e=(()=>{for(const n of this.pool)return this.pool.delete(n),n;const t=bM(this.model);return t.free=()=>{t.parent&&t.removeFromParent(),this.pool.add(t)},t.getOriginalScale=()=>this.model.scale.clone(),this.onCloneListeners.forEach(n=>n(t)),t})();return this.onAllocateListeners.forEach(t=>{Object.assign(e.userData,t(e))}),this.add(e),e}}const wM=async i=>{const e=(await Xi.fromBuilder(async()=>Tn(await Vr("models/y2k_newspaper_article.glb",.1),{rotateY:Math.PI/2,rotateX:Math.PI*.3,scale:{multiplyScalar:2},position:{set:[.8,.5,.5]}}))).withVertexAnimation((r,s)=>{for(let o=0;o<r.count;o++)r.setY(o,s.getY(o)+Math.sin(r.getX(o)*Math.PI*2+Date.now()*.006)*.03+Math.sin(r.getZ(o)*Math.PI*2+Date.now()*.006)*.01)});e.mesh.material.depthTest=!1,e.mesh.material.transparent=!0,e.mesh.renderOrder=3;for(let r=0;r<30;r++)e.allocate();let t=Date.now();const n=new Rf;return zt.add(()=>{if(e.parent===null)return;const r=.1;for(const[s,o]of e.children.entries()){const a=(Date.now()-t)*.006*(1+n.noise(s,3)*.3);o.rotation.y=n.noise(s,5),o.rotation.z=1*a,o.position.set(n.noise(s,4)*.5+.2,.3+(Math.cos(a)-a*.5-1)*r+(n.noise(s,1)+1)*.3,.5+(Math.sin(a)-a*.8)*r+(n.noise(s,2)+1)*.3)}}),r=>{t=Date.now(),i.add(e);const s=Qb[r];setTimeout(()=>{Dl.getState().showNews(s)},2e3),setTimeout(()=>{i.remove(e)},1e4)}},MM=`
#include <snoise>

uniform sampler2D tDiffuse;
uniform float aspect;
uniform float time;
uniform bool blur;

uniform vec2 mouse0;
uniform vec2 mouse1;
uniform vec2 mouse2;
uniform vec2 mouse3;
uniform vec2 mouse4;
uniform vec2 mouse5;
uniform vec2 mouse6;
uniform vec2 mouse7;
uniform vec2 mouse8;
uniform vec2 mouse9;

in vec2 vUv;

#define scale 1.4

// https://www.desmos.com/calculator/ejrfpu9pyi
float dropletY(float x, float a) {
    return mod(x, a) < 1.0 ? sqrt(mod(x, a)) + floor(x/a) : floor(x/a) + 1.0;
}

// https://iquilezles.org/articles/distfunctions2d/
float sdSegment( in vec2 p, in vec2 a, in vec2 b ) {
    vec2 pa = p-a, ba = b-a;
    float h = clamp( dot(pa,ba)/dot(ba,ba), 0.0, 1.0 );
    return length( pa - ba*h );
}

#define PI 3.1415926535897932384626433832795

#define horizontalDropletDistributionCycle (2.0 * PI / 300.0)

float horizontalDropletDistribution(float x) {
    return max(0.0, (cos(x * 300.0) - 0.5) * 2.0);
}

float movingDropletVolume(vec2 p, float i) {
    float prob = horizontalDropletDistribution(p.x);
    if (prob == 0.0) { return 0.0; }
    p = vec2(p.x + i * horizontalDropletDistributionCycle / 4.0, p.y);
    float y = dropletY(time * 0.001 + 3.9 * floor(vUv.x / horizontalDropletDistributionCycle - 0.5) + p.y * 2.0, /* cycle of dripping */15.0 + i) * 0.25;
    float noise = snoise(vec3((p + vec2(0.0, y)) * vec2(aspect, 1.0) * 10.0 / scale, i * 1000.0));
    return smoothstep(0.01, 1.0, prob * pow(noise, /* higher = sparser droplets */ 10.0));
}

float fixedDropletVolume(vec2 p) {
    float noise = snoise(p * vec2(aspect, 1.0) * 60.0 / scale) + snoise((p * vec2(aspect, 1.0) + vec2(100.0, 0.0)) * 60.0 / scale);
    return smoothstep(0.01, 1.0, pow(noise, /* higher = sparser droplets */ 6.0));
}

float dropletVolume(vec2 p) {
    float vol = 0.0;
    for (float i = 0.0; i < 4.0; i += 1.0) {
        vol += movingDropletVolume(p + snoise(p) * 0.05, i);
    }
    return vol + fixedDropletVolume(p)
        // splash
        + smoothstep(0.5, 0.6, pow(snoise(vec3(p * vec2(aspect, 1.0) * 8.0, time * 0.0005)), 8.0)) * 0.05
        + smoothstep(0.5, 0.6, pow(snoise(vec3(p * vec2(aspect, 1.0) * 8.0, time * 0.0005 + 100.0)), 8.0)) * 0.05
        + smoothstep(0.5, 0.6, pow(snoise(vec3(p * vec2(aspect, 1.0) * 8.0, time * 0.0005 + 200.0)), 8.0)) * 0.05;
}

vec2 dropletGradient(vec2 p) {
    float base = dropletVolume(p);
    if (base == 0.0) { return vec2(0.0); }
    return vec2(
        base - dropletVolume(p + vec2(0.0005 * scale, 0.0)),
        base - dropletVolume(p + vec2(0.0, 0.0005 * scale))
    );
}

void main() {
    if (dropletVolume(vUv) > 0.01) {
        gl_FragColor = pow(texture2D(tDiffuse, vUv + dropletGradient(vUv) * /* lower = transparent */9.0), vec4(vec3(/* lower = brighter */ 0.9), 1.0));
    } else {
        gl_FragColor = texture2D(tDiffuse, vUv);

        // blur
        if (blur) {
            gl_FragColor = vec4(
                texture2D(tDiffuse, vUv + vec2(-0.0028,  0.0028) / vec2(aspect, 1.0)) +
                texture2D(tDiffuse, vUv + vec2(-0.0040,  0.0000) / vec2(aspect, 1.0)) +
                texture2D(tDiffuse, vUv + vec2(-0.0028, -0.0028) / vec2(aspect, 1.0)) +
                texture2D(tDiffuse, vUv + vec2( 0.0000,  0.0040) / vec2(aspect, 1.0)) +
                texture2D(tDiffuse, vUv) +
                texture2D(tDiffuse, vUv + vec2( 0.0000, -0.0040) / vec2(aspect, 1.0)) +
                texture2D(tDiffuse, vUv + vec2( 0.0028,  0.0028) / vec2(aspect, 1.0)) +
                texture2D(tDiffuse, vUv + vec2( 0.0040,  0.0000) / vec2(aspect, 1.0)) +
                texture2D(tDiffuse, vUv + vec2( 0.0028, -0.0028) / vec2(aspect, 1.0))
            ) / 9.0;
        }

        gl_FragColor = pow(gl_FragColor, vec4(vec3(0.7), 1.0));

        float opacity = 1.0;

        if (mouse8.x >= 0.0 && mouse9.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse8 * vec2(aspect, 1.0), mouse9 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse7.x >= 0.0 && mouse8.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse7 * vec2(aspect, 1.0), mouse8 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse6.x >= 0.0 && mouse7.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse6 * vec2(aspect, 1.0), mouse7 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse5.x >= 0.0 && mouse6.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse5 * vec2(aspect, 1.0), mouse6 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse4.x >= 0.0 && mouse5.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse4 * vec2(aspect, 1.0), mouse5 * vec2(aspect, 1.0)) < 0.03) { opacity = 1.0; }
        if (mouse3.x >= 0.0 && mouse4.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse3 * vec2(aspect, 1.0), mouse4 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.7; }
        if (mouse2.x >= 0.0 && mouse3.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse2 * vec2(aspect, 1.0), mouse3 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.5; }
        if (mouse1.x >= 0.0 && mouse2.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse1 * vec2(aspect, 1.0), mouse2 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.3; }
        if (mouse0.x >= 0.0 && mouse1.x >= 0.0 && sdSegment(vUv * vec2(aspect, 1.0), mouse0 * vec2(aspect, 1.0), mouse1 * vec2(aspect, 1.0)) < 0.03) { opacity = 0.1; }

        opacity = max(0.0, opacity);

        gl_FragColor = mix(texture2D(tDiffuse, vUv), gl_FragColor, opacity);
    }
}
`,SM=`
out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,TM=(i,e)=>{const t=new xs({uniforms:{blur:{value:e},tDiffuse:{value:null},aspect:{value:window.innerWidth/window.innerHeight},time:{value:0},mouse0:{value:new fe(.5,.5)},mouse1:{value:new fe(.5,.5)},mouse2:{value:new fe(.5,.5)},mouse3:{value:new fe(.5,.5)},mouse4:{value:new fe(.5,.5)},mouse5:{value:new fe(.5,.5)},mouse6:{value:new fe(.5,.5)},mouse7:{value:new fe(.5,.5)},mouse8:{value:new fe(.5,.5)},mouse9:{value:new fe(.5,.5)}},vertexShader:SM,fragmentShader:MM}),n=()=>{t.uniforms.mouse9.value.copy(t.uniforms.mouse8.value),t.uniforms.mouse8.value.copy(t.uniforms.mouse7.value),t.uniforms.mouse7.value.copy(t.uniforms.mouse6.value),t.uniforms.mouse6.value.copy(t.uniforms.mouse5.value),t.uniforms.mouse5.value.copy(t.uniforms.mouse4.value),t.uniforms.mouse4.value.copy(t.uniforms.mouse3.value),t.uniforms.mouse3.value.copy(t.uniforms.mouse2.value),t.uniforms.mouse2.value.copy(t.uniforms.mouse1.value),t.uniforms.mouse1.value.copy(t.uniforms.mouse0.value),t.uniforms.mouse0.value.set(-1,-1)};return window.addEventListener("mousemove",r=>{t.uniforms.mouse0.value.set(r.pageX/window.innerWidth,1-r.pageY/window.innerHeight),t.uniforms.mouse0.value.distanceTo(t.uniforms.mouse1.value)>.1&&n()}),setInterval(()=>{n()},100),zt.add(r=>{t.uniforms.aspect.value=i.aspect,t.uniforms.time.value=r}),t.enabled=Le().getWeather()?.name==="Rain"&&!!Le().getWeather()?.enabled,Hr((r,s)=>{r.weatherEffectWillBeEnabledIn!==s.weatherEffectWillBeEnabledIn&&(t.enabled=Le().getWeather()?.name==="Rain"&&!!Le().getWeather()?.enabled)}),t},EM=`
uniform float time;
in float worldPosY;

void main() {
    super();
    if (worldPosY > 0.0) {
        gl_FragColor.rgb = gl_FragColor.rgb * (1.0 + (sin(time * 0.01 + worldPosY * 300.0) + 1.0) / 2.0 * 2.0);
    }
}
`,AM=`
out float worldPosY;
uniform float distortion;  // [0, 1]

void main() {
    super();
    vec4 worldPos = modelMatrix * vec4(position, 1.);
    worldPosY = worldPos.y;
    gl_Position.x += sin(worldPos.y * 600.0) * distortion * 0.1;
}
`,fo=async()=>{const i={time:{value:0},distortion:{value:0}};return zt.add(e=>{i.time.value=e}),(await Xi.fromBuilder(async()=>{const e=Tn(await Vr("models/ufo.glb",.2),{rotateX:-Math.PI/2,position:{set:[.5,0,0]}});return Iw(e,{uniforms:i,vertexShader:AM,fragmentShader:EM}),e})).onClone(e=>{zt.add(t=>{e.rotation.set(-Math.PI/2+Math.sin(t*.01)*.05,Math.cos(t*.01)*.05,0)})})},CM=`
#include <snoise>

uniform vec2 u_resolution;
uniform float time;

void main() {
    vec2 st = (gl_FragCoord.xy / u_resolution.xy) * 2.0;

    // colored stars
    vec3 color =
        (vec3(0.0, 1.0, 1.0) * pow((snoise(st) + 1.0) / 2.0 * 0.5, 2.0) +
        vec3(0.0, 0.0, 1.0) * pow((snoise(st + 100.0) + 1.0) / 2.0 * 0.5, 0.5))
        * pow((snoise(vec3(st * 123.45678, time * 0.001)) + 1.0) / 2.0, 2.0) * 0.5 * 0.5;

    // white dusts
    color += pow((snoise((vec2((st.x - 1.0) * (st.y + 1.0) * 4.0 + 1.0, st.y) + vec2(0.0, time * 0.0001)) * 123.45678 * 0.4) + 1.0) / 2.0, 20.0) * 0.3;

    gl_FragColor = vec4(color * 1.5, 1.0);
}
`,DM=`

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,PM=()=>{const i=[new wn,new wn];for(const t of i)t.visible=!1;i[Le().stage].visible=!0,Hr((t,n)=>{if(t.stage!==n.stage){for(const r of i)r.visible=!1;i[t.stage].visible=!0}}),Vr("models/sky_pano_-_grand_canyon_yuma_point.glb",4).then(t=>{zt.add(n=>{t.rotation.y=n*1e-4}),i[0].add(Tn(t,{rotateX:-Math.PI/2,position:{setY:-.5}}),new Bu(16777215,.025),Tn(new fl(16117434,1.6),{position:{set:[.3,1,-1]}}),Xt("fog")?kw():new qe)}).catch(console.error);const e={u_resolution:{value:new fe(window.innerWidth,window.innerHeight)},time:{value:0}};return zt.add(t=>{e.time.value=t}),window.addEventListener("resize",()=>{e.u_resolution.value.set(window.innerWidth,window.innerHeight)}),i[1].add(new se(new at(4,4,4),new mt({uniforms:e,side:qt,vertexShader:DM,fragmentShader:CM})),new Bu(11184895,.2),Tn(new fl(16117434,.4),{position:{set:[.3,1,-1]}})),new wn().add(...i)},LM=`

void main() {
    gl_FragColor += vec4(0.1, 0.1, 0.15, 1.0);
}
`,RM=`

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,IM=async i=>{const e=await Vr("models/hammer.glb",.03);e.position.set(-.01,0,-.06);const t={stage:{value:Le().stage}};Hr(r=>{t.stage.value=r.stage}),Fw(e,new mt({uniforms:t,vertexShader:RM,fragmentShader:LM})),Ko(e);const n=new Xi(new qe().add(e)).onClone(r=>{zt.add(s=>{r.rotation.x+=Math.random()*.05,r.rotation.y=s*.01,r.rotation.z=Math.PI/2})}).onAllocate(()=>{const r=(Math.random()-.5)*2*Math.PI/4;return{time:0,velocity:new D(Math.cos(r),Math.sin(r),0)}});return qo.add(r=>{const s=Le().upgrades.Hammer;if(s!==0){r%Math.ceil(50/s)===0&&n.allocate().position.copy(i.position);for(const o of n.children)o.userData.time++,o.position.x+=o.userData.velocity.x*.01,o.position.y=Math.sin(o.userData.time*.15)*.03,o.position.z+=o.userData.velocity.y*.01,(o.position.x>2||Math.abs(o.position.z)>1)&&o.free()}}),n};function FM(i,e){if(e===hm)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===Mo||e===Fl){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,r=[];if(e===Mo)for(let o=1;o<=n;o++)r.push(t.getX(0)),r.push(t.getX(o)),r.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(r.push(t.getX(o)),r.push(t.getX(o+1)),r.push(t.getX(o+2))):(r.push(t.getX(o+2)),r.push(t.getX(o+1)),r.push(t.getX(o)));r.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const s=i.clone();return s.setIndex(r),s.clearGroups(),s}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}const NM=`
in vec2 vUv;

void main() {
    float x = vUv.x * (1.5 - vUv.y * 1.3);
    gl_FragColor = vec4(1.0, 1.0, 1.0, smoothstep(0.01, 0.3, vUv.y) * (1.0 - step(0.3, abs(x))) * min(1.0, sin(abs(x) * 30.0) + vUv.y * 5.0) * 0.2);
}
`,OM=`
out vec2 vUv;

void main() {
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    vUv = uv;
}
`,kM=i=>{const t=new se(FM(new ht().setFromPoints(Array(120).fill(0).flatMap(()=>[new D(i.position.x,0,i.position.z+.1),new D(i.position.x,0,i.position.z-.1)])),Fl),new mt({vertexShader:OM,fragmentShader:NM,transparent:!0}));return t.geometry.setAttribute("uv",new Ft(new Float32Array(Array(120).fill(0).flatMap((n,r)=>[-1,r/(120-1),1,r/(120-1)])),2)),qo.add(()=>{const n=t.geometry.attributes.position;for(let r=n.count-1;r>=2;r--)n.setX(r,n.getX(r-2)-.01),n.setZ(r,n.getZ(r-2));n.setX(0,i.position.x),n.setZ(0,i.position.z+.1),n.setX(1,i.position.x),n.setZ(1,i.position.z-.1),t.geometry.attributes.position.needsUpdate=!0,t.geometry.computeVertexNormals()}),Ko(t),Hr((n,r)=>{if(n.stage===r.stage)return;const s=t.geometry.attributes.position;for(let o=0;o<s.count;o++)s.setX(o,i.position.x),s.setZ(o,i.position.z)}),t};function BM(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}const Zh=async i=>{const e=new Xi(Tn(await Vr("models/low_polygon_art__white_eagle_bird.glb",.1),{rotateX:-Math.PI/2,rotateZ:-Math.PI/2,scale:{multiplyScalar:.3}}));return i&&e.withVertexAnimation((t,n)=>{for(let r=0;r<t.count;r++){const s=BM(Math.abs(t.getX(r)),3.5,17)*10*Math.sin(Date.now()*.01)*.8;t.setY(r,n.getY(r)+s*.7),t.setZ(r,n.getZ(r)+s)}}),e},UM=`
uniform sampler2D tDiffuse;
in vec2 vUv;
uniform float time;  // in [0, 2]

void main() {
    if (time < 0.5) {
        // fade in
        gl_FragColor = mix(texture2D(tDiffuse, vUv), vec4(0.0, 0.0, 0.0, 1.0), time);
    } else {
        // fade out
        gl_FragColor = mix(texture2D(tDiffuse, vUv), vec4(0.0, 0.0, 0.0, 1.0), 2.0 - time);
    }
}
`,zM=`
out vec2 vUv;

void main() {
    vUv = uv;
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,HM=()=>{let i=!1;const e=new xs({uniforms:{tDiffuse:{value:null},time:{value:0}},vertexShader:zM,fragmentShader:UM});return{pass:e,play:t=>{if(i)return;i=!0;let n=0;const r=(s,o)=>{n<1?n=Math.min(1,n+o*.001):n===1?(n+=o*.001,t(),Le().completeStageTransition()):n<2?n=Math.min(2,n+o*.001):(zt.delete(r),i=!1),e.uniforms.time.value=n};zt.add(r)}}};{const i=new BroadcastChannel("acg");i.addEventListener("message",e=>{e.data==="hello"&&(location.href="./tab_already_open.html")}),i.postMessage("hello")}const Ii=new Cx,jt=(i,e)=>(e&&!Xt(e)||Ii.add(i),i),pt=jt(Xt("airplane")?await Vr("models/low-poly_airplane.glb",.05):new qe);let Ot=new fe(0,0);{const i=new Rf;zt.add(e=>{pt.rotation.set(Ot.x*.3+i.noise(0,e*3e-4)*(4/180*Math.PI),Math.PI*.5+i.noise(1,e*3e-4)*(4/180*Math.PI),i.noise(2,e*3e-4)*(4/180*Math.PI))})}const es=.5,ii=-.5,VM=.3,GM=-.3;Xt("contrail")&&jt(kM(pt));Xt("skybox")&&jt(PM());Xt("laser")&&jt(yM(pt));Xt("axis")&&jt(new dy);const Fi=Tn(new It(70,window.innerWidth/window.innerHeight,.01,10),{position:{set:[-.5,.6,0]}});{const i=Xt("newspaper")?wM(Ii):null;Hr((e,t)=>{if(e.availableNews===t.availableNews)return;const n=[...e.availableNews].filter(r=>!t.availableNews.has(r))[0];!n||i?.then(r=>r(n))})}{const[i,e,t,n,r,s,o]=await Promise.all([Xt("hammer")?IM(pt).then(jt):null,Zh(!0).then(h=>jt(h.onAllocate(d=>({name:"Bird",time:0,hp:15*(1+Math.random()),laserHitEffect:null,update:()=>{d.position.x-=.01},onKilled:()=>{r.allocate().position.copy(d.position)}})),"birds")),fo().then(h=>jt(h.onAllocate(d=>({name:"UFO",time:0,hp:300*(1+Math.random()),laserHitEffect:null,update:()=>{d.userData.time%80<=3?d.scale.copy(d.getOriginalScale().multiply(new D(1,1-d.userData.time%80/3,1))):d.userData.time%80===4?(d.position.x-=.35+Math.random()*.2,d.position.z=Math.max(ii,Math.min(es,d.position.z+(Math.random()-.5)*.2))):d.userData.time%80<=7&&d.scale.copy(d.getOriginalScale().multiply(new D(1,(d.userData.time%80-4)/3,1)))},onKilled:()=>{t.allocate().position.copy(d.position)}})),"UFO")),fo().then(h=>jt(h.onAllocate(d=>({name:"Weather Effect UFO",time:0,hp:1500,laserHitEffect:null,update:()=>{},onKilled:()=>{o.allocate().position.copy(d.position),Le().stopWeatherEffect(),Le().completeTutorial("weatherEffect")}})),"weatherEffectUFO")),Zh(!1).then(h=>jt(h.onAllocate(()=>({time:0})),"deadBirds")),fo().then(h=>jt(h.onAllocate(()=>({time:0})),"deadUFO")),fo().then(h=>jt(h.onAllocate(()=>({time:0})),"deadWeatherEffectUFO"))]),a=[e,t,n],c=[r,s,o],l=jt(new Xi(Ko(new se(new Vl(.006),new fn({color:16738047})))),"hitEffects");Hr((h,d)=>{if(h.stage!==d.stage)for(const m of[...a.flatMap(g=>g.children),...c.flatMap(g=>g.children)])m.free()});let u=null;const f=new Set;window.addEventListener("keydown",h=>{f.add(h.code)}),window.addEventListener("keyup",h=>{f.delete(h.code)}),window.addEventListener("blur",()=>{f.clear()}),qo.add(h=>{Le().stage===0&&h%5===0&&e.allocate().position.set(2,0,h*.06%1*(es-ii)+ii),Le().stage===1&&h%31===0&&Le().availableNews.has("aliensComing")&&t.allocate().position.set(2,0,h*.06%1*(es-ii)+ii),Le().stage===0&&Le().getWeather()?.enabled&&n.children.length===0&&n.allocate().position.set(1,0,Math.random()*(es-ii)+ii);for(const d of a.flatMap(m=>m.children)){d.userData.update();for(const m of i?.children??[])m.position.distanceTo(d.position)<.05&&(d.userData.hp-=600,m.free());Math.abs(d.position.z-pt.position.z)<.03&&d.position.x>pt.position.x?(d.userData.laserHitEffect||(d.userData.laserHitEffect=l.allocate()),d.userData.laserHitEffect.position.copy(d.position).setZ(pt.position.z),d.userData.hp-=Le().upgrades.Laser+1,Hi.getState().setEnemyStatus({hp:d.userData.hp,name:d.userData.name})):d.userData.laserHitEffect&&(d.userData.laserHitEffect.free(),d.userData.laserHitEffect=null),(d.position.x<-1||d.userData.hp<=0)&&(d.userData.hp<=0&&(d.userData.onKilled(),Le().addMoney(qd[d.userData.name])),d.free(),d.userData.laserHitEffect?.free()),d.userData.time++}for(const d of c.flatMap(m=>m.children))d.position.y-=.001*d.userData.time,d.rotateZ(.1*(Math.random()-.5)),d.userData.time++,d.userData.time>100&&d.free();if(Le().stageTransitingTo!==null)pt.position.x+=.01+Math.max(0,pt.position.x)*.08,Ii.rotateY(.02),Ii.rotateZ(-.003),pt.position.x>2&&up.play(()=>{pt.position.x=0,Ii.rotation.set(0,0,0),Fi.lookAt(new D(0,0,0))});else if(f.has("KeyD")&&(Ot.x=Math.min(1,Math.max(0,Ot.x)+.3)),f.has("KeyA")&&(Ot.x=Math.max(-1,Math.min(0,Ot.x)-.3)),f.has("KeyW")&&(Ot.y=Math.min(1,Math.max(0,Ot.y)+.3)),f.has("KeyS")&&(Ot.y=Math.max(-1,Math.min(0,Ot.y)-.3)),f.size===0&&Ot.multiplyScalar(.5),Ot.length()>1&&Ot.normalize(),pt.position.setZ(Math.min(es,Math.max(ii,pt.position.z+Ot.x*.015))),pt.position.setX(Math.min(VM,Math.max(GM,pt.position.x+Ot.y*.01))),(Le().getWeather()?.enabled?Le().upgrades.Autopilot-5:Le().upgrades.Autopilot)>0&&f.size===0){const d=(m,g)=>m.length===0?null:m.reduce((p,_)=>g(p)<g(_)?p:_,m[0]);(!u||!a.flatMap(m=>m.children).includes(u)||u.position.x<pt.position.x)&&(u=d(a.flatMap(m=>m.children).filter(m=>m.position.x>pt.position.x+.3),m=>m.position.x)),u&&pt.position.setZ(pt.position.z*(1-.01*Le().upgrades.Autopilot)+u.position.z*.01*Le().upgrades.Autopilot)}Le().countdown()})}Hi.getState().setLoadingMessage("loadingModels","Loading models...");await new Promise(i=>setTimeout(i,0));const ui=new yf({antialias:!0});ui.outputEncoding=We;ui.setSize(window.innerWidth,window.innerHeight);document.body.appendChild(ui.domElement);const Ei=new Pf(ui),up=HM();{const i=new gy(Ii,Fi);Ei.addPass(i),Xt("unrealbloom")&&Ei.addPass(new Ui(new fe(256,256),.2,0,0)),Xt("selective unrealbloom")&&Ei.addPass(xM(ui,Fi,i)),Xt("rain")&&Ei.addPass(TM(Fi,Xt("rain.blur",!1))),Ei.addPass(up.pass)}window.addEventListener("resize",()=>{Fi.aspect=window.innerWidth/window.innerHeight,Fi.updateProjectionMatrix(),ui.setSize(window.innerWidth,window.innerHeight),Ei.setSize(window.innerWidth,window.innerHeight)});const WM=null;{const i=p1(Fi,ui,Ii),e={render:0,update:0};let t=0;ui.setAnimationLoop(n=>{if(WM?.update(),i())e.update=e.render=Date.now();else{const r=Math.floor((n-e.update)/(1e3/ys));e.update+=r*(1e3/ys);for(let o=0;o<r;o++)qo.forEach(a=>a(t)),t++;const s=n-e.render;e.render=n,zt.forEach(o=>o(n,s))}If.forEach(r=>r()),Ei.render()})}const hp=()=>{const i=document.querySelector("audio#rainAudio");i.loop=!0,i.play()};window.addEventListener("click",hp);hp();Hi.getState().removeLoadingMessage("loadingModels");Le().addTutorial("wasd");window.addEventListener("keyup",i=>{["KeyW","KeyS","KeyA","KeyD"].includes(i.code)&&Le().availableTutorials.has("wasd")&&Le().completeTutorial("wasd")});
