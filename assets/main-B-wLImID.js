import{_ as vf}from"./site-B5JUKi-Z.js";import{L as xf}from"./lenis-CYo8HTSz.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Hc="169",yf=0,Su=1,Mf=2,td=1,nd=2,Fi=3,Hi=0,mn=1,pn=2,ki=0,ar=1,gi=2,bu=3,Eu=4,Sf=5,ys=100,bf=101,Ef=102,Tf=103,wf=104,Af=200,Rf=201,Cf=202,Pf=203,Xl=204,ql=205,Lf=206,If=207,Df=208,Uf=209,Nf=210,Ff=211,Of=212,Bf=213,zf=214,Yl=0,jl=1,Kl=2,dr=3,$l=4,Zl=5,Jl=6,Ql=7,id=0,kf=1,Hf=2,ss=0,sd=1,rd=2,od=3,Vc=4,Vf=5,ad=6,ld=7,Tu="attached",Gf="detached",cd=300,fr=301,pr=302,ec=303,tc=304,Ra=306,bs=1e3,_i=1001,_a=1002,vn=1003,ud=1004,jr=1005,tn=1006,oa=1007,vi=1008,ai=1009,hd=1010,dd=1011,eo=1012,Gc=1013,Es=1014,Nn=1015,Cn=1016,Wc=1017,Xc=1018,mr=1020,fd=35902,pd=1021,md=1022,jn=1023,gd=1024,_d=1025,lr=1026,gr=1027,qc=1028,Yc=1029,vd=1030,jc=1031,Kc=1033,aa=33776,la=33777,ca=33778,ua=33779,nc=35840,ic=35841,sc=35842,rc=35843,oc=36196,ac=37492,lc=37496,cc=37808,uc=37809,hc=37810,dc=37811,fc=37812,pc=37813,mc=37814,gc=37815,_c=37816,vc=37817,xc=37818,yc=37819,Mc=37820,Sc=37821,ha=36492,bc=36494,Ec=36495,xd=36283,Tc=36284,wc=36285,Ac=36286,to=2300,no=2301,el=2302,wu=2400,Au=2401,Ru=2402,Wf=2500,Xf=0,yd=1,Rc=2,qf=3200,Yf=3201,Md=0,jf=1,ts="",Ft="srgb",sn="srgb-linear",$c="display-p3",Ca="display-p3-linear",va="linear",Ot="srgb",xa="rec709",ya="p3",Os=7680,Cu=519,Kf=512,$f=513,Zf=514,Sd=515,Jf=516,Qf=517,ep=518,tp=519,Cc=35044,Pu="300 es",zi=2e3,Ma=2001;class br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const Sn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Lu=1234567;const Zr=Math.PI/180,_r=180/Math.PI;function ri(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Sn[s&255]+Sn[s>>8&255]+Sn[s>>16&255]+Sn[s>>24&255]+"-"+Sn[e&255]+Sn[e>>8&255]+"-"+Sn[e>>16&15|64]+Sn[e>>24&255]+"-"+Sn[t&63|128]+Sn[t>>8&255]+"-"+Sn[t>>16&255]+Sn[t>>24&255]+Sn[n&255]+Sn[n>>8&255]+Sn[n>>16&255]+Sn[n>>24&255]).toLowerCase()}function _n(s,e,t){return Math.max(e,Math.min(t,s))}function Zc(s,e){return(s%e+e)%e}function np(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function ip(s,e,t){return s!==e?(t-s)/(e-s):0}function Jr(s,e,t){return(1-t)*s+t*e}function sp(s,e,t,n){return Jr(s,e,1-Math.exp(-t*n))}function rp(s,e=1){return e-Math.abs(Zc(s,e*2)-e)}function op(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function ap(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function lp(s,e){return s+Math.floor(Math.random()*(e-s+1))}function cp(s,e){return s+Math.random()*(e-s)}function up(s){return s*(.5-Math.random())}function hp(s){s!==void 0&&(Lu=s);let e=Lu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function dp(s){return s*Zr}function fp(s){return s*_r}function pp(s){return(s&s-1)===0&&s!==0}function mp(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function gp(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function _p(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,l*h,l*d,a*c);break;case"YZY":s.set(l*d,a*u,l*h,a*c);break;case"ZXZ":s.set(l*h,l*d,a*u,a*c);break;case"XZX":s.set(a*u,l*g,l*p,a*c);break;case"YXY":s.set(l*p,a*u,l*g,a*c);break;case"ZYZ":s.set(l*g,l*p,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function si(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function It(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const Pc={DEG2RAD:Zr,RAD2DEG:_r,generateUUID:ri,clamp:_n,euclideanModulo:Zc,mapLinear:np,inverseLerp:ip,lerp:Jr,damp:sp,pingpong:rp,smoothstep:op,smootherstep:ap,randInt:lp,randFloat:cp,randFloatSpread:up,seededRandom:hp,degToRad:dp,radToDeg:fp,isPowerOfTwo:pp,ceilPowerOfTwo:mp,floorPowerOfTwo:gp,setQuaternionFromProperEuler:_p,normalize:It,denormalize:si};class Be{constructor(e=0,t=0){Be.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class _t{constructor(e,t,n,i,r,o,a,l,c){_t.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c)}set(e,t,n,i,r,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=l,u[6]=n,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],p=n[5],g=n[8],v=i[0],m=i[3],f=i[6],E=i[1],y=i[4],b=i[7],N=i[2],R=i[5],A=i[8];return r[0]=o*v+a*E+l*N,r[3]=o*m+a*y+l*R,r[6]=o*f+a*b+l*A,r[1]=c*v+u*E+h*N,r[4]=c*m+u*y+h*R,r[7]=c*f+u*b+h*A,r[2]=d*v+p*E+g*N,r[5]=d*m+p*y+g*R,r[8]=d*f+p*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return t*o*u-t*a*c-n*r*u+n*a*l+i*r*c-i*o*l}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=u*o-a*c,d=a*l-u*r,p=c*r-o*l,g=t*h+n*d+i*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*c-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(u*t-i*l)*v,e[5]=(i*r-a*t)*v,e[6]=p*v,e[7]=(n*l-c*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-i*c,i*l,-i*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(tl.makeScale(e,t)),this}rotate(e){return this.premultiply(tl.makeRotation(-e)),this}translate(e,t){return this.premultiply(tl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const tl=new _t;function bd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function io(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function vp(){const s=io("canvas");return s.style.display="block",s}const Iu={};function da(s){s in Iu||(Iu[s]=!0,console.warn(s))}function xp(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function yp(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function Mp(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Du=new _t().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Uu=new _t().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Ur={[sn]:{transfer:va,primaries:xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Ft]:{transfer:Ot,primaries:xa,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ca]:{transfer:va,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(Uu),fromReference:s=>s.applyMatrix3(Du)},[$c]:{transfer:Ot,primaries:ya,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(Uu),fromReference:s=>s.applyMatrix3(Du).convertLinearToSRGB()}},Sp=new Set([sn,Ca]),wt={enabled:!0,_workingColorSpace:sn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!Sp.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Ur[e].toReference,i=Ur[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Ur[s].primaries},getTransfer:function(s){return s===ts?va:Ur[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Ur[e].luminanceCoefficients)}};function cr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function nl(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Bs;class bp{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Bs===void 0&&(Bs=io("canvas")),Bs.width=e.width,Bs.height=e.height;const n=Bs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=io("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=cr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(cr(t[n]/255)*255):t[n]=cr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Ep=0;class Ed{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:Ep++}),this.uuid=ri(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(il(i[o].image)):r.push(il(i[o]))}else r=il(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function il(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?bp.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Tp=0;class nn extends br{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,n=_i,i=_i,r=tn,o=vi,a=jn,l=ai,c=nn.DEFAULT_ANISOTROPY,u=ts){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tp++}),this.uuid=ri(),this.name="",this.source=new Ed(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Be(0,0),this.repeat=new Be(1,1),this.center=new Be(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new _t,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case bs:e.x=e.x-Math.floor(e.x);break;case _i:e.x=e.x<0?0:1;break;case _a:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case bs:e.y=e.y-Math.floor(e.y);break;case _i:e.y=e.y<0?0:1;break;case _a:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=cd;nn.DEFAULT_ANISOTROPY=1;class Rt{constructor(e=0,t=0,n=0,i=1){Rt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],p=l[5],g=l[9],v=l[2],m=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,b=(p+1)/2,N=(f+1)/2,R=(u+d)/4,A=(h+v)/4,C=(g+m)/4;return y>b&&y>N?y<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(y),i=R/n,r=A/n):b>N?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=R/i,r=C/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=A/r,i=C/r),this.set(n,i,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(h-v)/E,this.z=(d-u)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class wp extends br{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Rt(0,0,e,t),this.scissorTest=!1,this.viewport=new Rt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:tn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new nn(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Ed(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Kn extends wp{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Td extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Ap extends nn{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=_i,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let l=n[i+0],c=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],p=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=v;return}if(h!==v||l!==d||c!==p||u!==g){let m=1-a;const f=l*d+c*p+u*g+h*v,E=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const N=Math.sqrt(y),R=Math.atan2(N,f*E);m=Math.sin(m*R)/N,a=Math.sin(a*R)/N}const b=a*E;if(l=l*m+d*b,c=c*m+p*b,u=u*m+g*b,h=h*m+v*b,m===1-a){const N=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=N,c*=N,u*=N,h*=N}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],l=n[i+1],c=n[i+2],u=n[i+3],h=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+u*h+l*p-c*d,e[t+1]=l*g+u*d+c*h-a*p,e[t+2]=c*g+u*p+a*d-l*h,e[t+3]=u*g-a*h-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),u=a(i/2),h=a(r/2),d=l(n/2),p=l(i/2),g=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"YXZ":this._x=d*u*h+c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"ZXY":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h-d*p*g;break;case"ZYX":this._x=d*u*h-c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h+d*p*g;break;case"YZX":this._x=d*u*h+c*p*g,this._y=c*p*h+d*u*g,this._z=c*u*g-d*p*h,this._w=c*u*h-d*p*g;break;case"XZY":this._x=d*u*h-c*p*g,this._y=c*p*h-d*u*g,this._z=c*u*g+d*p*h,this._w=c*u*h+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(u-l)*p,this._y=(r-c)*p,this._z=(o-i)*p}else if(n>a&&n>h){const p=2*Math.sqrt(1+n-a-h);this._w=(u-l)/p,this._x=.25*p,this._y=(i+o)/p,this._z=(r+c)/p}else if(a>h){const p=2*Math.sqrt(1+a-n-h);this._w=(r-c)/p,this._x=(i+o)/p,this._y=.25*p,this._z=(l+u)/p}else{const p=2*Math.sqrt(1+h-n-a);this._w=(o-i)/p,this._x=(r+c)/p,this._y=(l+u)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+o*a+i*c-r*l,this._y=i*u+o*l+r*a-n*c,this._z=r*u+o*c+n*l-i*a,this._w=o*u-n*a-i*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*i+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class P{constructor(e=0,t=0,n=0){P.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Nu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Nu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+l*c+o*h-a*u,this.y=n+l*u+a*c-r*h,this.z=i+l*h+r*u-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=i*l-r*a,this.y=r*o-n*l,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return sl.copy(this).projectOnVector(e),this.sub(sl)}reflect(e){return this.sub(sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const sl=new P,Nu=new xi;class Rn{constructor(e=new P(1/0,1/0,1/0),t=new P(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(ei.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(ei.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=ei.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ei):ei.fromBufferAttribute(r,o),ei.applyMatrix4(e.matrixWorld),this.expandByPoint(ei);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Ro.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Ro.copy(n.boundingBox)),Ro.applyMatrix4(e.matrixWorld),this.union(Ro)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ei),ei.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Nr),Co.subVectors(this.max,Nr),zs.subVectors(e.a,Nr),ks.subVectors(e.b,Nr),Hs.subVectors(e.c,Nr),Yi.subVectors(ks,zs),ji.subVectors(Hs,ks),hs.subVectors(zs,Hs);let t=[0,-Yi.z,Yi.y,0,-ji.z,ji.y,0,-hs.z,hs.y,Yi.z,0,-Yi.x,ji.z,0,-ji.x,hs.z,0,-hs.x,-Yi.y,Yi.x,0,-ji.y,ji.x,0,-hs.y,hs.x,0];return!rl(t,zs,ks,Hs,Co)||(t=[1,0,0,0,1,0,0,0,1],!rl(t,zs,ks,Hs,Co))?!1:(Po.crossVectors(Yi,ji),t=[Po.x,Po.y,Po.z],rl(t,zs,ks,Hs,Co))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ei).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ei).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Pi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Pi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Pi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Pi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Pi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Pi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Pi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Pi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Pi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Pi=[new P,new P,new P,new P,new P,new P,new P,new P],ei=new P,Ro=new Rn,zs=new P,ks=new P,Hs=new P,Yi=new P,ji=new P,hs=new P,Nr=new P,Co=new P,Po=new P,ds=new P;function rl(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){ds.fromArray(s,r);const a=i.x*Math.abs(ds.x)+i.y*Math.abs(ds.y)+i.z*Math.abs(ds.z),l=e.dot(ds),c=t.dot(ds),u=n.dot(ds);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const Rp=new Rn,Fr=new P,ol=new P;class Mi{constructor(e=new P,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Rp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Fr.subVectors(e,this.center);const t=Fr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Fr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(ol.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Fr.copy(e.center).add(ol)),this.expandByPoint(Fr.copy(e.center).sub(ol))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Li=new P,al=new P,Lo=new P,Ki=new P,ll=new P,Io=new P,cl=new P;class Pa{constructor(e=new P,t=new P(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Li)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Li.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Li.copy(this.origin).addScaledVector(this.direction,t),Li.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){al.copy(e).add(t).multiplyScalar(.5),Lo.copy(t).sub(e).normalize(),Ki.copy(this.origin).sub(al);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Lo),a=Ki.dot(this.direction),l=-Ki.dot(Lo),c=Ki.lengthSq(),u=Math.abs(1-o*o);let h,d,p,g;if(u>0)if(h=o*l-a,d=o*a-l,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,p=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c):d<=g?(h=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),p=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),p=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(al).addScaledVector(Lo,d),p}intersectSphere(e,t){Li.subVectors(e.center,this.origin);const n=Li.dot(this.direction),i=Li.dot(Li)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,i=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,i=(e.min.x-d.x)*c),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||a>i)||((a>n||n!==n)&&(n=a),(l<i||i!==i)&&(i=l),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Li)!==null}intersectTriangle(e,t,n,i,r){ll.subVectors(t,e),Io.subVectors(n,e),cl.crossVectors(ll,Io);let o=this.direction.dot(cl),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Ki.subVectors(this.origin,e);const l=a*this.direction.dot(Io.crossVectors(Ki,Io));if(l<0)return null;const c=a*this.direction.dot(ll.cross(Ki));if(c<0||l+c>o)return null;const u=-a*Ki.dot(cl);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class rt{constructor(e,t,n,i,r,o,a,l,c,u,h,d,p,g,v,m){rt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,l,c,u,h,d,p,g,v,m)}set(e,t,n,i,r,o,a,l,c,u,h,d,p,g,v,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=p,f[7]=g,f[11]=v,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Vs.setFromMatrixColumn(e,0).length(),r=1/Vs.setFromMatrixColumn(e,1).length(),o=1/Vs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(i),c=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=p+g*c,t[5]=d-v*c,t[9]=-a*l,t[2]=v-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d+v*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=p*a-g,t[6]=v+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*u,p=l*h,g=c*u,v=c*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*u,p=o*h,g=a*u,v=a*h;t[0]=l*u,t[4]=g*c-p,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=v-d*h,t[8]=g*h+p,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-c*u,t[6]=p*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,v=a*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=o*u,t[9]=p*h-g,t[2]=g*h-p,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Cp,e,Pp)}lookAt(e,t,n){const i=this.elements;return On.subVectors(e,t),On.lengthSq()===0&&(On.z=1),On.normalize(),$i.crossVectors(n,On),$i.lengthSq()===0&&(Math.abs(n.z)===1?On.x+=1e-4:On.z+=1e-4,On.normalize(),$i.crossVectors(n,On)),$i.normalize(),Do.crossVectors(On,$i),i[0]=$i.x,i[4]=Do.x,i[8]=On.x,i[1]=$i.y,i[5]=Do.y,i[9]=On.y,i[2]=$i.z,i[6]=Do.z,i[10]=On.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],p=n[13],g=n[2],v=n[6],m=n[10],f=n[14],E=n[3],y=n[7],b=n[11],N=n[15],R=i[0],A=i[4],C=i[8],j=i[12],_=i[1],M=i[5],V=i[9],U=i[13],D=i[2],$=i[6],F=i[10],te=i[14],z=i[3],he=i[7],ce=i[11],Te=i[15];return r[0]=o*R+a*_+l*D+c*z,r[4]=o*A+a*M+l*$+c*he,r[8]=o*C+a*V+l*F+c*ce,r[12]=o*j+a*U+l*te+c*Te,r[1]=u*R+h*_+d*D+p*z,r[5]=u*A+h*M+d*$+p*he,r[9]=u*C+h*V+d*F+p*ce,r[13]=u*j+h*U+d*te+p*Te,r[2]=g*R+v*_+m*D+f*z,r[6]=g*A+v*M+m*$+f*he,r[10]=g*C+v*V+m*F+f*ce,r[14]=g*j+v*U+m*te+f*Te,r[3]=E*R+y*_+b*D+N*z,r[7]=E*A+y*M+b*$+N*he,r[11]=E*C+y*V+b*F+N*ce,r[15]=E*j+y*U+b*te+N*Te,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],p=e[14],g=e[3],v=e[7],m=e[11],f=e[15];return g*(+r*l*h-i*c*h-r*a*d+n*c*d+i*a*p-n*l*p)+v*(+t*l*p-t*c*d+r*o*d-i*o*p+i*c*u-r*l*u)+m*(+t*c*h-t*a*p-r*o*h+n*o*p+r*a*u-n*c*u)+f*(-i*a*u-t*l*h+t*a*d+i*o*h-n*o*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],p=e[11],g=e[12],v=e[13],m=e[14],f=e[15],E=h*m*c-v*d*c+v*l*p-a*m*p-h*l*f+a*d*f,y=g*d*c-u*m*c-g*l*p+o*m*p+u*l*f-o*d*f,b=u*v*c-g*h*c+g*a*p-o*v*p-u*a*f+o*h*f,N=g*h*l-u*v*l-g*a*d+o*v*d+u*a*m-o*h*m,R=t*E+n*y+i*b+r*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=E*A,e[1]=(v*d*r-h*m*r-v*i*p+n*m*p+h*i*f-n*d*f)*A,e[2]=(a*m*r-v*l*r+v*i*c-n*m*c-a*i*f+n*l*f)*A,e[3]=(h*l*r-a*d*r-h*i*c+n*d*c+a*i*p-n*l*p)*A,e[4]=y*A,e[5]=(u*m*r-g*d*r+g*i*p-t*m*p-u*i*f+t*d*f)*A,e[6]=(g*l*r-o*m*r-g*i*c+t*m*c+o*i*f-t*l*f)*A,e[7]=(o*d*r-u*l*r+u*i*c-t*d*c-o*i*p+t*l*p)*A,e[8]=b*A,e[9]=(g*h*r-u*v*r-g*n*p+t*v*p+u*n*f-t*h*f)*A,e[10]=(o*v*r-g*a*r+g*n*c-t*v*c-o*n*f+t*a*f)*A,e[11]=(u*a*r-o*h*r-u*n*c+t*h*c+o*n*p-t*a*p)*A,e[12]=N*A,e[13]=(u*v*i-g*h*i+g*n*d-t*v*d-u*n*m+t*h*m)*A,e[14]=(g*a*i-o*v*i-g*n*l+t*v*l+o*n*m-t*a*m)*A,e[15]=(o*h*i-u*a*i+u*n*l-t*h*l-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,u=r*a;return this.set(c*o+n,c*a-i*l,c*l+i*a,0,c*a+i*l,u*a+n,u*l-i*o,0,c*l-i*a,u*l+i*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,u=o+o,h=a+a,d=r*c,p=r*u,g=r*h,v=o*u,m=o*h,f=a*h,E=l*c,y=l*u,b=l*h,N=n.x,R=n.y,A=n.z;return i[0]=(1-(v+f))*N,i[1]=(p+b)*N,i[2]=(g-y)*N,i[3]=0,i[4]=(p-b)*R,i[5]=(1-(d+f))*R,i[6]=(m+E)*R,i[7]=0,i[8]=(g+y)*A,i[9]=(m-E)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Vs.set(i[0],i[1],i[2]).length();const o=Vs.set(i[4],i[5],i[6]).length(),a=Vs.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],ti.copy(this);const c=1/r,u=1/o,h=1/a;return ti.elements[0]*=c,ti.elements[1]*=c,ti.elements[2]*=c,ti.elements[4]*=u,ti.elements[5]*=u,ti.elements[6]*=u,ti.elements[8]*=h,ti.elements[9]*=h,ti.elements[10]*=h,t.setFromRotationMatrix(ti),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=zi){const l=this.elements,c=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let p,g;if(a===zi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ma)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=zi){const l=this.elements,c=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*c,p=(n+i)*u;let g,v;if(a===zi)g=(o+r)*h,v=-2*h;else if(a===Ma)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Vs=new P,ti=new rt,Cp=new P(0,0,0),Pp=new P(1,1,1),$i=new P,Do=new P,On=new P,Fu=new rt,Ou=new xi;class yi{constructor(e=0,t=0,n=0,i=yi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],l=i[1],c=i[5],u=i[9],h=i[2],d=i[6],p=i[10];switch(t){case"XYZ":this._y=Math.asin(_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_n(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-_n(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(_n(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Fu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Fu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ou.setFromEuler(this),this.setFromQuaternion(Ou,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}yi.DEFAULT_ORDER="XYZ";class wd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Lp=0;const Bu=new P,Gs=new xi,Ii=new rt,Uo=new P,Or=new P,Ip=new P,Dp=new xi,zu=new P(1,0,0),ku=new P(0,1,0),Hu=new P(0,0,1),Vu={type:"added"},Up={type:"removed"},Ws={type:"childadded",child:null},ul={type:"childremoved",child:null};class zt extends br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Lp++}),this.uuid=ri(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=zt.DEFAULT_UP.clone();const e=new P,t=new yi,n=new xi,i=new P(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new rt},normalMatrix:{value:new _t}}),this.matrix=new rt,this.matrixWorld=new rt,this.matrixAutoUpdate=zt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new wd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.multiply(Gs),this}rotateOnWorldAxis(e,t){return Gs.setFromAxisAngle(e,t),this.quaternion.premultiply(Gs),this}rotateX(e){return this.rotateOnAxis(zu,e)}rotateY(e){return this.rotateOnAxis(ku,e)}rotateZ(e){return this.rotateOnAxis(Hu,e)}translateOnAxis(e,t){return Bu.copy(e).applyQuaternion(this.quaternion),this.position.add(Bu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(zu,e)}translateY(e){return this.translateOnAxis(ku,e)}translateZ(e){return this.translateOnAxis(Hu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Ii.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Uo.copy(e):Uo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Or.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Ii.lookAt(Or,Uo,this.up):Ii.lookAt(Uo,Or,this.up),this.quaternion.setFromRotationMatrix(Ii),i&&(Ii.extractRotation(i.matrixWorld),Gs.setFromRotationMatrix(Ii),this.quaternion.premultiply(Gs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Vu),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Up),ul.child=e,this.dispatchEvent(ul),ul.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Ii.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Ii.multiply(e.parent.matrixWorld)),e.applyMatrix4(Ii),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Vu),Ws.child=e,this.dispatchEvent(Ws),Ws.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,e,Ip),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Or,Dp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(e.shapes,h)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];i.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}zt.DEFAULT_UP=new P(0,1,0);zt.DEFAULT_MATRIX_AUTO_UPDATE=!0;zt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ni=new P,Di=new P,hl=new P,Ui=new P,Xs=new P,qs=new P,Gu=new P,dl=new P,fl=new P,pl=new P,ml=new Rt,gl=new Rt,_l=new Rt;class Yn{constructor(e=new P,t=new P,n=new P){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ni.subVectors(e,t),i.cross(ni);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){ni.subVectors(i,t),Di.subVectors(n,t),hl.subVectors(e,t);const o=ni.dot(ni),a=ni.dot(Di),l=ni.dot(hl),c=Di.dot(Di),u=Di.dot(hl),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,p=(c*l-a*u)*d,g=(o*u-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ui)===null?!1:Ui.x>=0&&Ui.y>=0&&Ui.x+Ui.y<=1}static getInterpolation(e,t,n,i,r,o,a,l){return this.getBarycoord(e,t,n,i,Ui)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Ui.x),l.addScaledVector(o,Ui.y),l.addScaledVector(a,Ui.z),l)}static getInterpolatedAttribute(e,t,n,i,r,o){return ml.setScalar(0),gl.setScalar(0),_l.setScalar(0),ml.fromBufferAttribute(e,t),gl.fromBufferAttribute(e,n),_l.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ml,r.x),o.addScaledVector(gl,r.y),o.addScaledVector(_l,r.z),o}static isFrontFacing(e,t,n,i){return ni.subVectors(n,t),Di.subVectors(e,t),ni.cross(Di).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ni.subVectors(this.c,this.b),Di.subVectors(this.a,this.b),ni.cross(Di).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Yn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Yn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Yn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Yn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Yn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;Xs.subVectors(i,n),qs.subVectors(r,n),dl.subVectors(e,n);const l=Xs.dot(dl),c=qs.dot(dl);if(l<=0&&c<=0)return t.copy(n);fl.subVectors(e,i);const u=Xs.dot(fl),h=qs.dot(fl);if(u>=0&&h<=u)return t.copy(i);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),t.copy(n).addScaledVector(Xs,o);pl.subVectors(e,r);const p=Xs.dot(pl),g=qs.dot(pl);if(g>=0&&p<=g)return t.copy(r);const v=p*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(qs,a);const m=u*g-p*h;if(m<=0&&h-u>=0&&p-g>=0)return Gu.subVectors(r,i),a=(h-u)/(h-u+(p-g)),t.copy(i).addScaledVector(Gu,a);const f=1/(m+v+d);return o=v*f,a=d*f,t.copy(n).addScaledVector(Xs,o).addScaledVector(qs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ad={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zi={h:0,s:0,l:0},No={h:0,s:0,l:0};function vl(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Le{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=wt.workingColorSpace){return this.r=e,this.g=t,this.b=n,wt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=wt.workingColorSpace){if(e=Zc(e,1),t=_n(t,0,1),n=_n(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=vl(o,r,e+1/3),this.g=vl(o,r,e),this.b=vl(o,r,e-1/3)}return wt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=Ad[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=cr(e.r),this.g=cr(e.g),this.b=cr(e.b),this}copyLinearToSRGB(e){return this.r=nl(e.r),this.g=nl(e.g),this.b=nl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return wt.fromWorkingColorSpace(bn.copy(this),e),Math.round(_n(bn.r*255,0,255))*65536+Math.round(_n(bn.g*255,0,255))*256+Math.round(_n(bn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.fromWorkingColorSpace(bn.copy(this),t);const n=bn.r,i=bn.g,r=bn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case n:l=(i-r)/h+(i<r?6:0);break;case i:l=(r-n)/h+2;break;case r:l=(n-i)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=wt.workingColorSpace){return wt.fromWorkingColorSpace(bn.copy(this),t),e.r=bn.r,e.g=bn.g,e.b=bn.b,e}getStyle(e=Ft){wt.fromWorkingColorSpace(bn.copy(this),e);const t=bn.r,n=bn.g,i=bn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Zi),this.setHSL(Zi.h+e,Zi.s+t,Zi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Zi),e.getHSL(No);const n=Jr(Zi.h,No.h,t),i=Jr(Zi.s,No.s,t),r=Jr(Zi.l,No.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const bn=new Le;Le.NAMES=Ad;let Np=0;class oi extends br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Np++}),this.uuid=ri(),this.name="",this.type="Material",this.blending=ar,this.side=Hi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Xl,this.blendDst=ql,this.blendEquation=ys,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Le(0,0,0),this.blendAlpha=0,this.depthFunc=dr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Cu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Os,this.stencilZFail=Os,this.stencilZPass=Os,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==ar&&(n.blending=this.blending),this.side!==Hi&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Xl&&(n.blendSrc=this.blendSrc),this.blendDst!==ql&&(n.blendDst=this.blendDst),this.blendEquation!==ys&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==dr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Cu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Os&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Os&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Os&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class qt extends oi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Le(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.combine=id,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bi=Fp();function Fp(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,i[l]=24,i[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,i[l]=-c-1,i[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,i[l]=13,i[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,i[l]=24,i[l|256]=24):(n[l]=31744,n[l|256]=64512,i[l]=13,i[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;(c&8388608)===0;)c<<=1,u-=8388608;c&=-8388609,u+=947912704,r[l]=c|u}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function Op(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=_n(s,-65504,65504),Bi.floatView[0]=s;const e=Bi.uint32View[0],t=e>>23&511;return Bi.baseTable[t]+((e&8388607)>>Bi.shiftTable[t])}function Bp(s){const e=s>>10;return Bi.uint32View[0]=Bi.mantissaTable[Bi.offsetTable[e]+(s&1023)]+Bi.exponentTable[e],Bi.floatView[0]}const Fo={toHalfFloat:Op,fromHalfFloat:Bp},en=new P,Oo=new Be;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Cc,this.updateRanges=[],this.gpuType=Nn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Oo.fromBufferAttribute(this,t),Oo.applyMatrix3(e),this.setXY(t,Oo.x,Oo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix3(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyMatrix4(e),this.setXYZ(t,en.x,en.y,en.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.applyNormalMatrix(e),this.setXYZ(t,en.x,en.y,en.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)en.fromBufferAttribute(this,t),en.transformDirection(e),this.setXYZ(t,en.x,en.y,en.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=si(t,this.array)),t}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=si(t,this.array)),t}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=si(t,this.array)),t}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=si(t,this.array)),t}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),r=It(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cc&&(e.usage=this.usage),e}}class Rd extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Cd extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ct extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let zp=0;const Wn=new rt,xl=new zt,Ys=new P,Bn=new Rn,Br=new Rn,hn=new P;class Ht extends br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:zp++}),this.uuid=ri(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bd(e)?Cd:Rd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new _t().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Wn.makeRotationFromQuaternion(e),this.applyMatrix4(Wn),this}rotateX(e){return Wn.makeRotationX(e),this.applyMatrix4(Wn),this}rotateY(e){return Wn.makeRotationY(e),this.applyMatrix4(Wn),this}rotateZ(e){return Wn.makeRotationZ(e),this.applyMatrix4(Wn),this}translate(e,t,n){return Wn.makeTranslation(e,t,n),this.applyMatrix4(Wn),this}scale(e,t,n){return Wn.makeScale(e,t,n),this.applyMatrix4(Wn),this}lookAt(e){return xl.lookAt(e),xl.updateMatrix(),this.applyMatrix4(xl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ys).negate(),this.translate(Ys.x,Ys.y,Ys.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ct(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Rn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new P(-1/0,-1/0,-1/0),new P(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Bn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Bn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Bn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Bn.min),this.boundingBox.expandByPoint(Bn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Mi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new P,1/0);return}if(e){const n=this.boundingSphere.center;if(Bn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Br.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Bn.min,Br.min),Bn.expandByPoint(hn),hn.addVectors(Bn.max,Br.max),Bn.expandByPoint(hn)):(Bn.expandByPoint(Br.min),Bn.expandByPoint(Br.max))}Bn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)hn.fromBufferAttribute(a,c),l&&(Ys.fromBufferAttribute(e,c),hn.add(Ys)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let C=0;C<n.count;C++)a[C]=new P,l[C]=new P;const c=new P,u=new P,h=new P,d=new Be,p=new Be,g=new Be,v=new P,m=new P;function f(C,j,_){c.fromBufferAttribute(n,C),u.fromBufferAttribute(n,j),h.fromBufferAttribute(n,_),d.fromBufferAttribute(r,C),p.fromBufferAttribute(r,j),g.fromBufferAttribute(r,_),u.sub(c),h.sub(c),p.sub(d),g.sub(d);const M=1/(p.x*g.y-g.x*p.y);isFinite(M)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-p.y).multiplyScalar(M),m.copy(h).multiplyScalar(p.x).addScaledVector(u,-g.x).multiplyScalar(M),a[C].add(v),a[j].add(v),a[_].add(v),l[C].add(m),l[j].add(m),l[_].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,j=E.length;C<j;++C){const _=E[C],M=_.start,V=_.count;for(let U=M,D=M+V;U<D;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const y=new P,b=new P,N=new P,R=new P;function A(C){N.fromBufferAttribute(i,C),R.copy(N);const j=a[C];y.copy(j),y.sub(N.multiplyScalar(N.dot(j))).normalize(),b.crossVectors(R,j);const M=b.dot(l[C])<0?-1:1;o.setXYZW(C,y.x,y.y,y.z,M)}for(let C=0,j=E.length;C<j;++C){const _=E[C],M=_.start,V=_.count;for(let U=M,D=M+V;U<D;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const i=new P,r=new P,o=new P,a=new P,l=new P,c=new P,u=new P,h=new P;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,m),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,m),a.add(u),l.add(u),c.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let p=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?p=l[v]*a.data.stride+a.offset:p=l[v]*u;for(let f=0;f<u;f++)d[g++]=c[p++]}return new gn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,i=this.attributes;for(const a in i){const l=i[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const i={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const p=c[h];u.push(p.toJSON(e.data))}u.length>0&&(i[l]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const c in i){const u=i[c];this.setAttribute(c,u.clone(t))}const r=e.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,p=h.length;d<p;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wu=new rt,fs=new Pa,Bo=new Mi,Xu=new P,zo=new P,ko=new P,Ho=new P,yl=new P,Vo=new P,qu=new P,Go=new P;class le extends zt{constructor(e=new Ht,t=new qt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Vo.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(yl.fromBufferAttribute(h,e),o?Vo.addScaledVector(yl,u):Vo.addScaledVector(yl.sub(t),u))}t.add(Vo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Bo.copy(n.boundingSphere),Bo.applyMatrix4(r),fs.copy(e.ray).recast(e.near),!(Bo.containsPoint(fs.origin)===!1&&(fs.intersectSphere(Bo,Xu)===null||fs.origin.distanceToSquared(Xu)>(e.far-e.near)**2))&&(Wu.copy(r).invert(),fs.copy(e.ray).applyMatrix4(Wu),!(n.boundingBox!==null&&fs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,fs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let b=E,N=y;b<N;b+=3){const R=a.getX(b),A=a.getX(b+1),C=a.getX(b+2);i=Wo(this,f,e,n,c,u,h,R,A,C),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(a.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const E=a.getX(m),y=a.getX(m+1),b=a.getX(m+2);i=Wo(this,o,e,n,c,u,h,E,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let b=E,N=y;b<N;b+=3){const R=b,A=b+1,C=b+2;i=Wo(this,f,e,n,c,u,h,R,A,C),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,p.start),v=Math.min(l.count,p.start+p.count);for(let m=g,f=v;m<f;m+=3){const E=m,y=m+1,b=m+2;i=Wo(this,o,e,n,c,u,h,E,y,b),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function kp(s,e,t,n,i,r,o,a){let l;if(e.side===mn?l=n.intersectTriangle(o,r,i,!0,a):l=n.intersectTriangle(i,r,o,e.side===Hi,a),l===null)return null;Go.copy(a),Go.applyMatrix4(s.matrixWorld);const c=t.ray.origin.distanceTo(Go);return c<t.near||c>t.far?null:{distance:c,point:Go.clone(),object:s}}function Wo(s,e,t,n,i,r,o,a,l,c){s.getVertexPosition(a,zo),s.getVertexPosition(l,ko),s.getVertexPosition(c,Ho);const u=kp(s,e,t,n,zo,ko,Ho,qu);if(u){const h=new P;Yn.getBarycoord(qu,zo,ko,Ho,h),i&&(u.uv=Yn.getInterpolatedAttribute(i,a,l,c,h,new Be)),r&&(u.uv1=Yn.getInterpolatedAttribute(r,a,l,c,h,new Be)),o&&(u.normal=Yn.getInterpolatedAttribute(o,a,l,c,h,new P),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new P,materialIndex:0};Yn.getNormal(zo,ko,Ho,d.normal),u.face=d,u.barycoord=h}return u}class Tt extends Ht{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(l),this.setAttribute("position",new Ct(c,3)),this.setAttribute("normal",new Ct(u,3)),this.setAttribute("uv",new Ct(h,2));function g(v,m,f,E,y,b,N,R,A,C,j){const _=b/A,M=N/C,V=b/2,U=N/2,D=R/2,$=A+1,F=C+1;let te=0,z=0;const he=new P;for(let ce=0;ce<F;ce++){const Te=ce*M-U;for(let Qe=0;Qe<$;Qe++){const tt=Qe*_-V;he[v]=tt*E,he[m]=Te*y,he[f]=D,c.push(he.x,he.y,he.z),he[v]=0,he[m]=0,he[f]=R>0?1:-1,u.push(he.x,he.y,he.z),h.push(Qe/A),h.push(1-ce/C),te+=1}}for(let ce=0;ce<C;ce++)for(let Te=0;Te<A;Te++){const Qe=d+Te+$*ce,tt=d+Te+$*(ce+1),Q=d+(Te+1)+$*(ce+1),se=d+(Te+1)+$*ce;l.push(Qe,tt,se),l.push(tt,Q,se),z+=6}a.addGroup(p,z,j),p+=z,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Tt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function vr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function An(s){const e={};for(let t=0;t<s.length;t++){const n=vr(s[t]);for(const i in n)e[i]=n[i]}return e}function Hp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function Pd(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}const so={clone:vr,merge:An};var Vp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Gp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class jt extends oi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Vp,this.fragmentShader=Gp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=vr(e.uniforms),this.uniformsGroups=Hp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class Ld extends zt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new rt,this.projectionMatrix=new rt,this.projectionMatrixInverse=new rt,this.coordinateSystem=zi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Ji=new P,Yu=new Be,ju=new Be;class on extends Ld{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=_r*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Zr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return _r*2*Math.atan(Math.tan(Zr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Ji.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z),Ji.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Ji.x,Ji.y).multiplyScalar(-e/Ji.z)}getViewSize(e,t){return this.getViewBounds(e,Yu,ju),t.subVectors(ju,Yu)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Zr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*i/l,t-=o.offsetY*n/c,i*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const js=-90,Ks=1;class Id extends zt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new on(js,Ks,e,t);i.layers=this.layers,this.add(i);const r=new on(js,Ks,e,t);r.layers=this.layers,this.add(r);const o=new on(js,Ks,e,t);o.layers=this.layers,this.add(o);const a=new on(js,Ks,e,t);a.layers=this.layers,this.add(a);const l=new on(js,Ks,e,t);l.layers=this.layers,this.add(l);const c=new on(js,Ks,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===zi)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ma)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,l),e.setRenderTarget(n,4,i),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Dd extends nn{constructor(e,t,n,i,r,o,a,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:fr,super(e,t,n,i,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ud extends Kn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Dd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:tn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new Tt(5,5,5),r=new jt({name:"CubemapFromEquirect",uniforms:vr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:ki});r.uniforms.tEquirect.value=t;const o=new le(i,r),a=t.minFilter;return t.minFilter===vi&&(t.minFilter=tn),new Id(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const Ml=new P,Wp=new P,Xp=new _t;class vs{constructor(e=new P(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Ml.subVectors(n,t).cross(Wp.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Ml),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Xp.getNormalMatrix(e),i=this.coplanarPoint(Ml).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ps=new Mi,Xo=new P;class Jc{constructor(e=new vs,t=new vs,n=new vs,i=new vs,r=new vs,o=new vs){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=zi){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],l=i[3],c=i[4],u=i[5],h=i[6],d=i[7],p=i[8],g=i[9],v=i[10],m=i[11],f=i[12],E=i[13],y=i[14],b=i[15];if(n[0].setComponents(l-r,d-c,m-p,b-f).normalize(),n[1].setComponents(l+r,d+c,m+p,b+f).normalize(),n[2].setComponents(l+o,d+u,m+g,b+E).normalize(),n[3].setComponents(l-o,d-u,m-g,b-E).normalize(),n[4].setComponents(l-a,d-h,m-v,b-y).normalize(),t===zi)n[5].setComponents(l+a,d+h,m+v,b+y).normalize();else if(t===Ma)n[5].setComponents(a,h,v,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ps.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ps.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ps)}intersectsSprite(e){return ps.center.set(0,0,0),ps.radius=.7071067811865476,ps.applyMatrix4(e.matrixWorld),this.intersectsSphere(ps)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Xo.x=i.normal.x>0?e.max.x:e.min.x,Xo.y=i.normal.y>0?e.max.y:e.min.y,Xo.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Xo)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Nd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function qp(s){const e=new WeakMap;function t(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=s.createBuffer();s.bindBuffer(l,d),s.bufferData(l,c,u),a.onUploadCallback();let p;if(c instanceof Float32Array)p=s.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=s.HALF_FLOAT:p=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=s.SHORT;else if(c instanceof Uint32Array)p=s.UNSIGNED_INT;else if(c instanceof Int32Array)p=s.INT;else if(c instanceof Int8Array)p=s.BYTE;else if(c instanceof Uint8Array)p=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,l,c){const u=l.array,h=l.updateRanges;if(s.bindBuffer(c,a),h.length===0)s.bufferSubData(c,0,u);else{h.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<h.length;p++){const g=h[d],v=h[p];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let p=0,g=h.length;p<g;p++){const v=h[p];s.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(s.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:i,remove:r,update:o}}class fn extends Ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(i),c=a+1,u=l+1,h=e/a,d=t/l,p=[],g=[],v=[],m=[];for(let f=0;f<u;f++){const E=f*d-o;for(let y=0;y<c;y++){const b=y*h-r;g.push(b,-E,0),v.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const y=E+c*f,b=E+c*(f+1),N=E+1+c*(f+1),R=E+1+c*f;p.push(y,b,R),p.push(b,N,R)}this.setIndex(p),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Yp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,jp=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Kp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,$p=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Zp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Jp=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Qp=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,em=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,tm=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,nm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,im=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,sm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,rm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,om=`#ifdef USE_IRIDESCENCE
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
#endif`,am=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,lm=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
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
	#endif
#endif`,cm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,um=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,hm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,dm=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,fm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,pm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,mm=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,gm=`#define PI 3.141592653589793
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
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
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
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,_m=`#ifdef ENVMAP_TYPE_CUBE_UV
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
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
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
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
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
#endif`,vm=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,xm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ym=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Mm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Sm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bm="gl_FragColor = linearToOutputTexel( gl_FragColor );",Em=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Tm=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,wm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Am=`#ifdef USE_ENVMAP
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
#endif`,Rm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Cm=`#ifdef USE_ENVMAP
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
#endif`,Pm=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Lm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Im=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Dm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Um=`#ifdef USE_GRADIENTMAP
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
}`,Nm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Fm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Om=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Bm=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
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
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
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
#endif`,zm=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,km=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Hm=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Vm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Gm=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Wm=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
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
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Xm=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
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
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
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
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
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
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
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
#endif
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,qm=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
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
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometryPosition, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ym=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,jm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Km=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,$m=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Zm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Jm=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Qm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,eg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,tg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,ng=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,sg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,og=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ag=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,lg=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,cg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ug=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,hg=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,dg=`#ifndef FLAT_SHADED
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
#endif`,pg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,mg=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,gg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,_g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,xg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,yg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Mg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Sg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Eg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Tg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,Rg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
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
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
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
#endif`,Lg=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Ig=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Dg=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,Ug=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Ng=`#ifdef USE_SKINNING
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
#endif`,Fg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Og=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Bg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,zg=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
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
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,kg=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Hg=`#ifdef USE_TRANSMISSION
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
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
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
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Vg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Gg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Wg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,Xg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const qg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Yg=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,jg=`varying vec3 vWorldDirection;
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
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,$g=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Zg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Jg=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,Qg=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,e0=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
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
}`,t0=`#define DISTANCE
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
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,n0=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,i0=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,s0=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,r0=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,o0=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,a0=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,l0=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,c0=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,u0=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
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
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,h0=`#define MATCAP
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
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,d0=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,f0=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
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
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,p0=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
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
}`,m0=`#define PHONG
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
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,g0=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,_0=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
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
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,v0=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
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
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
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
}`,x0=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
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
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,y0=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
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
}`,M0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,S0=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,b0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,E0=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,T0=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,gt={alphahash_fragment:Yp,alphahash_pars_fragment:jp,alphamap_fragment:Kp,alphamap_pars_fragment:$p,alphatest_fragment:Zp,alphatest_pars_fragment:Jp,aomap_fragment:Qp,aomap_pars_fragment:em,batching_pars_vertex:tm,batching_vertex:nm,begin_vertex:im,beginnormal_vertex:sm,bsdfs:rm,iridescence_fragment:om,bumpmap_pars_fragment:am,clipping_planes_fragment:lm,clipping_planes_pars_fragment:cm,clipping_planes_pars_vertex:um,clipping_planes_vertex:hm,color_fragment:dm,color_pars_fragment:fm,color_pars_vertex:pm,color_vertex:mm,common:gm,cube_uv_reflection_fragment:_m,defaultnormal_vertex:vm,displacementmap_pars_vertex:xm,displacementmap_vertex:ym,emissivemap_fragment:Mm,emissivemap_pars_fragment:Sm,colorspace_fragment:bm,colorspace_pars_fragment:Em,envmap_fragment:Tm,envmap_common_pars_fragment:wm,envmap_pars_fragment:Am,envmap_pars_vertex:Rm,envmap_physical_pars_fragment:zm,envmap_vertex:Cm,fog_vertex:Pm,fog_pars_vertex:Lm,fog_fragment:Im,fog_pars_fragment:Dm,gradientmap_pars_fragment:Um,lightmap_pars_fragment:Nm,lights_lambert_fragment:Fm,lights_lambert_pars_fragment:Om,lights_pars_begin:Bm,lights_toon_fragment:km,lights_toon_pars_fragment:Hm,lights_phong_fragment:Vm,lights_phong_pars_fragment:Gm,lights_physical_fragment:Wm,lights_physical_pars_fragment:Xm,lights_fragment_begin:qm,lights_fragment_maps:Ym,lights_fragment_end:jm,logdepthbuf_fragment:Km,logdepthbuf_pars_fragment:$m,logdepthbuf_pars_vertex:Zm,logdepthbuf_vertex:Jm,map_fragment:Qm,map_pars_fragment:eg,map_particle_fragment:tg,map_particle_pars_fragment:ng,metalnessmap_fragment:ig,metalnessmap_pars_fragment:sg,morphinstance_vertex:rg,morphcolor_vertex:og,morphnormal_vertex:ag,morphtarget_pars_vertex:lg,morphtarget_vertex:cg,normal_fragment_begin:ug,normal_fragment_maps:hg,normal_pars_fragment:dg,normal_pars_vertex:fg,normal_vertex:pg,normalmap_pars_fragment:mg,clearcoat_normal_fragment_begin:gg,clearcoat_normal_fragment_maps:_g,clearcoat_pars_fragment:vg,iridescence_pars_fragment:xg,opaque_fragment:yg,packing:Mg,premultiplied_alpha_fragment:Sg,project_vertex:bg,dithering_fragment:Eg,dithering_pars_fragment:Tg,roughnessmap_fragment:wg,roughnessmap_pars_fragment:Ag,shadowmap_pars_fragment:Rg,shadowmap_pars_vertex:Cg,shadowmap_vertex:Pg,shadowmask_pars_fragment:Lg,skinbase_vertex:Ig,skinning_pars_vertex:Dg,skinning_vertex:Ug,skinnormal_vertex:Ng,specularmap_fragment:Fg,specularmap_pars_fragment:Og,tonemapping_fragment:Bg,tonemapping_pars_fragment:zg,transmission_fragment:kg,transmission_pars_fragment:Hg,uv_pars_fragment:Vg,uv_pars_vertex:Gg,uv_vertex:Wg,worldpos_vertex:Xg,background_vert:qg,background_frag:Yg,backgroundCube_vert:jg,backgroundCube_frag:Kg,cube_vert:$g,cube_frag:Zg,depth_vert:Jg,depth_frag:Qg,distanceRGBA_vert:e0,distanceRGBA_frag:t0,equirect_vert:n0,equirect_frag:i0,linedashed_vert:s0,linedashed_frag:r0,meshbasic_vert:o0,meshbasic_frag:a0,meshlambert_vert:l0,meshlambert_frag:c0,meshmatcap_vert:u0,meshmatcap_frag:h0,meshnormal_vert:d0,meshnormal_frag:f0,meshphong_vert:p0,meshphong_frag:m0,meshphysical_vert:g0,meshphysical_frag:_0,meshtoon_vert:v0,meshtoon_frag:x0,points_vert:y0,points_frag:M0,shadow_vert:S0,shadow_frag:b0,sprite_vert:E0,sprite_frag:T0},Me={common:{diffuse:{value:new Le(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new _t}},envmap:{envMap:{value:null},envMapRotation:{value:new _t},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new _t}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new _t}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new _t},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new _t},normalScale:{value:new Be(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new _t},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new _t}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new _t}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new _t}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Le(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Le(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0},uvTransform:{value:new _t}},sprite:{diffuse:{value:new Le(16777215)},opacity:{value:1},center:{value:new Be(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new _t},alphaMap:{value:null},alphaMapTransform:{value:new _t},alphaTest:{value:0}}},mi={basic:{uniforms:An([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:gt.meshbasic_vert,fragmentShader:gt.meshbasic_frag},lambert:{uniforms:An([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Le(0)}}]),vertexShader:gt.meshlambert_vert,fragmentShader:gt.meshlambert_frag},phong:{uniforms:An([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new Le(0)},specular:{value:new Le(1118481)},shininess:{value:30}}]),vertexShader:gt.meshphong_vert,fragmentShader:gt.meshphong_frag},standard:{uniforms:An([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new Le(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag},toon:{uniforms:An([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new Le(0)}}]),vertexShader:gt.meshtoon_vert,fragmentShader:gt.meshtoon_frag},matcap:{uniforms:An([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:gt.meshmatcap_vert,fragmentShader:gt.meshmatcap_frag},points:{uniforms:An([Me.points,Me.fog]),vertexShader:gt.points_vert,fragmentShader:gt.points_frag},dashed:{uniforms:An([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:gt.linedashed_vert,fragmentShader:gt.linedashed_frag},depth:{uniforms:An([Me.common,Me.displacementmap]),vertexShader:gt.depth_vert,fragmentShader:gt.depth_frag},normal:{uniforms:An([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:gt.meshnormal_vert,fragmentShader:gt.meshnormal_frag},sprite:{uniforms:An([Me.sprite,Me.fog]),vertexShader:gt.sprite_vert,fragmentShader:gt.sprite_frag},background:{uniforms:{uvTransform:{value:new _t},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:gt.background_vert,fragmentShader:gt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new _t}},vertexShader:gt.backgroundCube_vert,fragmentShader:gt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:gt.cube_vert,fragmentShader:gt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:gt.equirect_vert,fragmentShader:gt.equirect_frag},distanceRGBA:{uniforms:An([Me.common,Me.displacementmap,{referencePosition:{value:new P},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:gt.distanceRGBA_vert,fragmentShader:gt.distanceRGBA_frag},shadow:{uniforms:An([Me.lights,Me.fog,{color:{value:new Le(0)},opacity:{value:1}}]),vertexShader:gt.shadow_vert,fragmentShader:gt.shadow_frag}};mi.physical={uniforms:An([mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new _t},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new _t},clearcoatNormalScale:{value:new Be(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new _t},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new _t},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new _t},sheen:{value:0},sheenColor:{value:new Le(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new _t},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new _t},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new _t},transmissionSamplerSize:{value:new Be},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new _t},attenuationDistance:{value:0},attenuationColor:{value:new Le(0)},specularColor:{value:new Le(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new _t},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new _t},anisotropyVector:{value:new Be},anisotropyMap:{value:null},anisotropyMapTransform:{value:new _t}}]),vertexShader:gt.meshphysical_vert,fragmentShader:gt.meshphysical_frag};const qo={r:0,b:0,g:0},ms=new yi,w0=new rt;function A0(s,e,t,n,i,r,o){const a=new Le(0);let l=r===!0?0:1,c,u,h=null,d=0,p=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function v(E){let y=!1;const b=g(E);b===null?f(a,l):b&&b.isColor&&(f(b,1),y=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function m(E,y){const b=g(y);b&&(b.isCubeTexture||b.mapping===Ra)?(u===void 0&&(u=new le(new Tt(1,1,1),new jt({name:"BackgroundCubeMaterial",uniforms:vr(mi.backgroundCube.uniforms),vertexShader:mi.backgroundCube.vertexShader,fragmentShader:mi.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),ms.copy(y.backgroundRotation),ms.x*=-1,ms.y*=-1,ms.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(ms.y*=-1,ms.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(w0.makeRotationFromEuler(ms)),u.material.toneMapped=wt.getTransfer(b.colorSpace)!==Ot,(h!==b||d!==b.version||p!==s.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,p=s.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(c===void 0&&(c=new le(new fn(2,2),new jt({name:"BackgroundMaterial",uniforms:vr(mi.background.uniforms),vertexShader:mi.background.vertexShader,fragmentShader:mi.background.fragmentShader,side:Hi,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(c)),c.material.uniforms.t2D.value=b,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=wt.getTransfer(b.colorSpace)!==Ot,b.matrixAutoUpdate===!0&&b.updateMatrix(),c.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||p!==s.toneMapping)&&(c.material.needsUpdate=!0,h=b,d=b.version,p=s.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,y){E.getRGB(qo,Pd(s)),n.buffers.color.setClear(qo.r,qo.g,qo.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:v,addToRenderList:m}}function R0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(_,M,V,U,D){let $=!1;const F=h(U,V,M);r!==F&&(r=F,c(r.object)),$=p(_,U,V,D),$&&g(_,U,V,D),D!==null&&e.update(D,s.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,b(_,M,V,U),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function l(){return s.createVertexArray()}function c(_){return s.bindVertexArray(_)}function u(_){return s.deleteVertexArray(_)}function h(_,M,V){const U=V.wireframe===!0;let D=n[_.id];D===void 0&&(D={},n[_.id]=D);let $=D[M.id];$===void 0&&($={},D[M.id]=$);let F=$[U];return F===void 0&&(F=d(l()),$[U]=F),F}function d(_){const M=[],V=[],U=[];for(let D=0;D<t;D++)M[D]=0,V[D]=0,U[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:M,enabledAttributes:V,attributeDivisors:U,object:_,attributes:{},index:null}}function p(_,M,V,U){const D=r.attributes,$=M.attributes;let F=0;const te=V.getAttributes();for(const z in te)if(te[z].location>=0){const ce=D[z];let Te=$[z];if(Te===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(Te=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(Te=_.instanceColor)),ce===void 0||ce.attribute!==Te||Te&&ce.data!==Te.data)return!0;F++}return r.attributesNum!==F||r.index!==U}function g(_,M,V,U){const D={},$=M.attributes;let F=0;const te=V.getAttributes();for(const z in te)if(te[z].location>=0){let ce=$[z];ce===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(ce=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(ce=_.instanceColor));const Te={};Te.attribute=ce,ce&&ce.data&&(Te.data=ce.data),D[z]=Te,F++}r.attributes=D,r.attributesNum=F,r.index=U}function v(){const _=r.newAttributes;for(let M=0,V=_.length;M<V;M++)_[M]=0}function m(_){f(_,0)}function f(_,M){const V=r.newAttributes,U=r.enabledAttributes,D=r.attributeDivisors;V[_]=1,U[_]===0&&(s.enableVertexAttribArray(_),U[_]=1),D[_]!==M&&(s.vertexAttribDivisor(_,M),D[_]=M)}function E(){const _=r.newAttributes,M=r.enabledAttributes;for(let V=0,U=M.length;V<U;V++)M[V]!==_[V]&&(s.disableVertexAttribArray(V),M[V]=0)}function y(_,M,V,U,D,$,F){F===!0?s.vertexAttribIPointer(_,M,V,D,$):s.vertexAttribPointer(_,M,V,U,D,$)}function b(_,M,V,U){v();const D=U.attributes,$=V.getAttributes(),F=M.defaultAttributeValues;for(const te in $){const z=$[te];if(z.location>=0){let he=D[te];if(he===void 0&&(te==="instanceMatrix"&&_.instanceMatrix&&(he=_.instanceMatrix),te==="instanceColor"&&_.instanceColor&&(he=_.instanceColor)),he!==void 0){const ce=he.normalized,Te=he.itemSize,Qe=e.get(he);if(Qe===void 0)continue;const tt=Qe.buffer,Q=Qe.type,se=Qe.bytesPerElement,we=Q===s.INT||Q===s.UNSIGNED_INT||he.gpuType===Gc;if(he.isInterleavedBufferAttribute){const ve=he.data,Xe=ve.stride,He=he.offset;if(ve.isInstancedInterleavedBuffer){for(let it=0;it<z.locationSize;it++)f(z.location+it,ve.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ve.meshPerAttribute*ve.count)}else for(let it=0;it<z.locationSize;it++)m(z.location+it);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let it=0;it<z.locationSize;it++)y(z.location+it,Te/z.locationSize,Q,ce,Xe*se,(He+Te/z.locationSize*it)*se,we)}else{if(he.isInstancedBufferAttribute){for(let ve=0;ve<z.locationSize;ve++)f(z.location+ve,he.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let ve=0;ve<z.locationSize;ve++)m(z.location+ve);s.bindBuffer(s.ARRAY_BUFFER,tt);for(let ve=0;ve<z.locationSize;ve++)y(z.location+ve,Te/z.locationSize,Q,ce,Te*se,Te/z.locationSize*ve*se,we)}}else if(F!==void 0){const ce=F[te];if(ce!==void 0)switch(ce.length){case 2:s.vertexAttrib2fv(z.location,ce);break;case 3:s.vertexAttrib3fv(z.location,ce);break;case 4:s.vertexAttrib4fv(z.location,ce);break;default:s.vertexAttrib1fv(z.location,ce)}}}}E()}function N(){C();for(const _ in n){const M=n[_];for(const V in M){const U=M[V];for(const D in U)u(U[D].object),delete U[D];delete M[V]}delete n[_]}}function R(_){if(n[_.id]===void 0)return;const M=n[_.id];for(const V in M){const U=M[V];for(const D in U)u(U[D].object),delete U[D];delete M[V]}delete n[_.id]}function A(_){for(const M in n){const V=n[M];if(V[_.id]===void 0)continue;const U=V[_.id];for(const D in U)u(U[D].object),delete U[D];delete V[_.id]}}function C(){j(),o=!0,r!==i&&(r=i,c(r.object))}function j(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:j,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:E}}function C0(s,e,t){let n;function i(c){n=c}function r(c,u){s.drawArrays(n,c,u),t.update(u,n,1)}function o(c,u,h){h!==0&&(s.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function a(c,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,u,0,h);let p=0;for(let g=0;g<h;g++)p+=u[g];t.update(p,n,1)}function l(c,u,h,d){if(h===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],u[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];for(let v=0;v<d.length;v++)t.update(g,n,d[v])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function P0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==jn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===Cn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==ai&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Nn&&!C)}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const p=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),m=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),y=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:b,vertexTextures:N,maxSamples:R}}function L0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new vs,a=new _t,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const p=h.length!==0||d||n!==0||i;return i=d,n=h.length,p},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,p){const g=h.clippingPlanes,v=h.clipIntersection,m=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||r&&!m)r?u(null):c();else{const E=r?0:n,y=E*4;let b=f.clippingState||null;l.value=b,b=u(g,d,y,p);for(let N=0;N!==y;++N)b[N]=t[N];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,p,g){const v=h!==null?h.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const f=p+v*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,b=p;y!==v;++y,b+=4)o.copy(h[y]).applyMatrix4(E,a),o.normal.toArray(m,b),m[b+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function I0(s){let e=new WeakMap;function t(o,a){return a===ec?o.mapping=fr:a===tc&&(o.mapping=pr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===ec||a===tc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ud(l.height);return c.fromEquirectangularTexture(s,o),e.set(o,c),o.addEventListener("dispose",i),t(c.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class La extends Ld{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,l=i-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const rr=4,Ku=[.125,.215,.35,.446,.526,.582],Ms=20,Sl=new La,$u=new Le;let bl=null,El=0,Tl=0,wl=!1;const xs=(1+Math.sqrt(5))/2,$s=1/xs,Zu=[new P(-xs,$s,0),new P(xs,$s,0),new P(-$s,0,xs),new P($s,0,xs),new P(0,xs,-$s),new P(0,xs,$s),new P(-1,1,-1),new P(1,1,-1),new P(-1,1,1),new P(1,1,1)];class Lc{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){bl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=eh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Qu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(bl,El,Tl),this._renderer.xr.enabled=wl,e.scissorTest=!1,Yo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===fr||e.mapping===pr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),bl=this._renderer.getRenderTarget(),El=this._renderer.getActiveCubeFace(),Tl=this._renderer.getActiveMipmapLevel(),wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:tn,minFilter:tn,generateMipmaps:!1,type:Cn,format:jn,colorSpace:sn,depthBuffer:!1},i=Ju(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Ju(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=D0(r)),this._blurMaterial=U0(r,e,t)}return i}_compileMaterial(e){const t=new le(this._lodPlanes[0],e);this._renderer.compile(t,Sl)}_sceneToCubeUV(e,t,n,i){const a=new on(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor($u),u.toneMapping=ss,u.autoClear=!1;const p=new qt({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new le(new Tt,p);let v=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,v=!0):(p.color.copy($u),v=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;Yo(i,E*y,f>2?y:0,y,y),u.setRenderTarget(i),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===fr||e.mapping===pr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=eh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Qu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new le(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;Yo(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Sl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Zu[(i-r-1)%Zu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new le(this._lodPlanes[i],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ms-1),v=r/g,m=isFinite(r)?1+Math.floor(u*v):Ms;m>Ms&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ms}`);const f=[];let E=0;for(let A=0;A<Ms;++A){const C=A/v,j=Math.exp(-C*C/2);f.push(j),A===0?E+=j:A<m&&(E+=2*j)}for(let A=0;A<f.length;A++)f[A]=f[A]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const b=this._sizeLods[i],N=3*b*(i>y-rr?i-y+rr:0),R=4*(this._cubeSize-b);Yo(t,N,R,3*b,2*b),l.setRenderTarget(t),l.render(h,Sl)}}function D0(s){const e=[],t=[],n=[];let i=s;const r=s-rr+1+Ku.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let l=1/a;o>s-rr?l=Ku[o-s+rr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],p=6,g=6,v=3,m=2,f=1,E=new Float32Array(v*g*p),y=new Float32Array(m*g*p),b=new Float32Array(f*g*p);for(let R=0;R<p;R++){const A=R%3*2/3-1,C=R>2?0:-1,j=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];E.set(j,v*g*R),y.set(d,m*g*R);const _=[R,R,R,R,R,R];b.set(_,f*g*R)}const N=new Ht;N.setAttribute("position",new gn(E,v)),N.setAttribute("uv",new gn(y,m)),N.setAttribute("faceIndex",new gn(b,f)),e.push(N),i>rr&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Ju(s,e,t){const n=new Kn(s,e,t);return n.texture.mapping=Ra,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Yo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function U0(s,e,t){const n=new Float32Array(Ms),i=new P(0,1,0);return new jt({name:"SphericalGaussianBlur",defines:{n:Ms,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Qu(){return new jt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Qc(),fragmentShader:`

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
		`,blending:ki,depthTest:!1,depthWrite:!1})}function eh(){return new jt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Qc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ki,depthTest:!1,depthWrite:!1})}function Qc(){return`

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
	`}function N0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===ec||l===tc,u=l===fr||l===pr;if(c||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Lc(s)),h=c?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const p=a.image;return c&&p&&p.height>0||u&&p&&i(p)?(t===null&&(t=new Lc(s)),h=c?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function F0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&da("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function O0(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,f=v.length;m<f;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete i[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const p=h.morphAttributes;for(const g in p){const v=p[g];for(let m=0,f=v.length;m<f;m++)e.update(v[m],s.ARRAY_BUFFER)}}function c(h){const d=[],p=h.index,g=h.attributes.position;let v=0;if(p!==null){const E=p.array;v=p.version;for(let y=0,b=E.length;y<b;y+=3){const N=E[y+0],R=E[y+1],A=E[y+2];d.push(N,R,R,A,A,N)}}else if(g!==void 0){const E=g.array;v=g.version;for(let y=0,b=E.length/3-1;y<b;y+=3){const N=y+0,R=y+1,A=y+2;d.push(N,R,R,A,A,N)}}else return;const m=new(bd(d)?Cd:Rd)(d,1);m.version=v;const f=r.get(h);f&&e.remove(f),r.set(h,m)}function u(h){const d=r.get(h);if(d){const p=h.index;p!==null&&d.version<p.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function B0(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){s.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(s.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function u(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function h(d,p,g,v){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],v[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,v,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E];for(let E=0;E<v.length;E++)t.update(f,n,v[E])}}this.setMode=i,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function z0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function k0(s,e,t){const n=new WeakMap,i=new Rt;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let j=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",j)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),v===!0&&(y=3);let b=a.attributes.position.count*y,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*N*4*h),A=new Td(R,b,N,h);A.type=Nn,A.needsUpdate=!0;const C=y*4;for(let _=0;_<h;_++){const M=m[_],V=f[_],U=E[_],D=b*N*4*_;for(let $=0;$<M.count;$++){const F=$*C;p===!0&&(i.fromBufferAttribute(M,$),R[D+F+0]=i.x,R[D+F+1]=i.y,R[D+F+2]=i.z,R[D+F+3]=0),g===!0&&(i.fromBufferAttribute(V,$),R[D+F+4]=i.x,R[D+F+5]=i.y,R[D+F+6]=i.z,R[D+F+7]=0),v===!0&&(i.fromBufferAttribute(U,$),R[D+F+8]=i.x,R[D+F+9]=i.y,R[D+F+10]=i.z,R[D+F+11]=U.itemSize===4?i.w:1)}}d={count:h,texture:A,size:new Be(b,N)},n.set(a,d),a.addEventListener("dispose",j)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let p=0;for(let v=0;v<c.length;v++)p+=c[v];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function H0(s,e,t,n){let i=new WeakMap;function r(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(i.get(h)!==c&&(e.update(h),i.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),i.get(l)!==c&&(t.update(l.instanceMatrix,s.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,s.ARRAY_BUFFER),i.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;i.get(d)!==c&&(d.update(),i.set(d,c))}return h}function o(){i=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class Fd extends nn{constructor(e,t,n,i,r,o,a,l,c,u=lr){if(u!==lr&&u!==gr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===lr&&(n=Es),n===void 0&&u===gr&&(n=mr),super(null,i,r,o,a,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vn,this.minFilter=l!==void 0?l:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Od=new nn,th=new Fd(1,1),Bd=new Td,zd=new Ap,kd=new Dd,nh=[],ih=[],sh=new Float32Array(16),rh=new Float32Array(9),oh=new Float32Array(4);function Er(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=nh[i];if(r===void 0&&(r=new Float32Array(i),nh[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function an(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function ln(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Ia(s,e){let t=ih[e];t===void 0&&(t=new Int32Array(e),ih[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function V0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function G0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2fv(this.addr,e),ln(t,e)}}function W0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(an(t,e))return;s.uniform3fv(this.addr,e),ln(t,e)}}function X0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4fv(this.addr,e),ln(t,e)}}function q0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;oh.set(n),s.uniformMatrix2fv(this.addr,!1,oh),ln(t,n)}}function Y0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;rh.set(n),s.uniformMatrix3fv(this.addr,!1,rh),ln(t,n)}}function j0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(an(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),ln(t,e)}else{if(an(t,n))return;sh.set(n),s.uniformMatrix4fv(this.addr,!1,sh),ln(t,n)}}function K0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function $0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2iv(this.addr,e),ln(t,e)}}function Z0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3iv(this.addr,e),ln(t,e)}}function J0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4iv(this.addr,e),ln(t,e)}}function Q0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function e_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(an(t,e))return;s.uniform2uiv(this.addr,e),ln(t,e)}}function t_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(an(t,e))return;s.uniform3uiv(this.addr,e),ln(t,e)}}function n_(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(an(t,e))return;s.uniform4uiv(this.addr,e),ln(t,e)}}function i_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(th.compareFunction=Sd,r=th):r=Od,t.setTexture2D(e||r,i)}function s_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||zd,i)}function r_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||kd,i)}function o_(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||Bd,i)}function a_(s){switch(s){case 5126:return V0;case 35664:return G0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return j0;case 5124:case 35670:return K0;case 35667:case 35671:return $0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return e_;case 36295:return t_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}function l_(s,e){s.uniform1fv(this.addr,e)}function c_(s,e){const t=Er(e,this.size,2);s.uniform2fv(this.addr,t)}function u_(s,e){const t=Er(e,this.size,3);s.uniform3fv(this.addr,t)}function h_(s,e){const t=Er(e,this.size,4);s.uniform4fv(this.addr,t)}function d_(s,e){const t=Er(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function f_(s,e){const t=Er(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function p_(s,e){const t=Er(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function m_(s,e){s.uniform1iv(this.addr,e)}function g_(s,e){s.uniform2iv(this.addr,e)}function __(s,e){s.uniform3iv(this.addr,e)}function v_(s,e){s.uniform4iv(this.addr,e)}function x_(s,e){s.uniform1uiv(this.addr,e)}function y_(s,e){s.uniform2uiv(this.addr,e)}function M_(s,e){s.uniform3uiv(this.addr,e)}function S_(s,e){s.uniform4uiv(this.addr,e)}function b_(s,e,t){const n=this.cache,i=e.length,r=Ia(t,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Od,r[o])}function E_(s,e,t){const n=this.cache,i=e.length,r=Ia(t,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||zd,r[o])}function T_(s,e,t){const n=this.cache,i=e.length,r=Ia(t,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||kd,r[o])}function w_(s,e,t){const n=this.cache,i=e.length,r=Ia(t,i);an(n,r)||(s.uniform1iv(this.addr,r),ln(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||Bd,r[o])}function A_(s){switch(s){case 5126:return l_;case 35664:return c_;case 35665:return u_;case 35666:return h_;case 35674:return d_;case 35675:return f_;case 35676:return p_;case 5124:case 35670:return m_;case 35667:case 35671:return g_;case 35668:case 35672:return __;case 35669:case 35673:return v_;case 5125:return x_;case 36294:return y_;case 36295:return M_;case 36296:return S_;case 35678:case 36198:case 36298:case 36306:case 35682:return b_;case 35679:case 36299:case 36307:return E_;case 35680:case 36300:case 36308:case 36293:return T_;case 36289:case 36303:case 36311:case 36292:return w_}}class R_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=a_(t.type)}}class C_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=A_(t.type)}}class P_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const Al=/(\w+)(\])?(\[|\.)?/g;function ah(s,e){s.seq.push(e),s.map[e.id]=e}function L_(s,e,t){const n=s.name,i=n.length;for(Al.lastIndex=0;;){const r=Al.exec(n),o=Al.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===i){ah(t,c===void 0?new R_(a,s,e):new C_(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new P_(a),ah(t,h)),t=h}}}class fa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);L_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function lh(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const I_=37297;let D_=0;function U_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function N_(s){const e=wt.getPrimaries(wt.workingColorSpace),t=wt.getPrimaries(s);let n;switch(e===t?n="":e===ya&&t===xa?n="LinearDisplayP3ToLinearSRGB":e===xa&&t===ya&&(n="LinearSRGBToLinearDisplayP3"),s){case sn:case Ca:return[n,"LinearTransferOETF"];case Ft:case $c:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function ch(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+U_(s.getShaderSource(e),o)}else return i}function F_(s,e){const t=N_(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function O_(s,e){let t;switch(e){case sd:t="Linear";break;case rd:t="Reinhard";break;case od:t="Cineon";break;case Vc:t="ACESFilmic";break;case ad:t="AgX";break;case ld:t="Neutral";break;case Vf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const jo=new P;function B_(){wt.getLuminanceCoefficients(jo);const s=jo.x.toFixed(4),e=jo.y.toFixed(4),t=jo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function z_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Kr).join(`
`)}function k_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function H_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Kr(s){return s!==""}function uh(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function hh(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const V_=/^[ \t]*#include +<([\w\d./]+)>/gm;function Ic(s){return s.replace(V_,W_)}const G_=new Map;function W_(s,e){let t=gt[e];if(t===void 0){const n=G_.get(e);if(n!==void 0)t=gt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return Ic(t)}const X_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function dh(s){return s.replace(X_,q_)}function q_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function fh(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Y_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===td?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===nd?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Fi&&(e="SHADOWMAP_TYPE_VSM"),e}function j_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case fr:case pr:e="ENVMAP_TYPE_CUBE";break;case Ra:e="ENVMAP_TYPE_CUBE_UV";break}return e}function K_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case pr:e="ENVMAP_MODE_REFRACTION";break}return e}function $_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case id:e="ENVMAP_BLENDING_MULTIPLY";break;case kf:e="ENVMAP_BLENDING_MIX";break;case Hf:e="ENVMAP_BLENDING_ADD";break}return e}function Z_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function J_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Y_(t),c=j_(t),u=K_(t),h=$_(t),d=Z_(t),p=z_(t),g=k_(r),v=i.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Kr).join(`
`),f.length>0&&(f+=`
`)):(m=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Kr).join(`
`),f=[fh(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==ss?"#define TONE_MAPPING":"",t.toneMapping!==ss?gt.tonemapping_pars_fragment:"",t.toneMapping!==ss?O_("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",gt.colorspace_pars_fragment,F_("linearToOutputTexel",t.outputColorSpace),B_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Kr).join(`
`)),o=Ic(o),o=uh(o,t),o=hh(o,t),a=Ic(a),a=uh(a,t),a=hh(a,t),o=dh(o),a=dh(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Pu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Pu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=E+m+o,b=E+f+a,N=lh(i,i.VERTEX_SHADER,y),R=lh(i,i.FRAGMENT_SHADER,b);i.attachShader(v,N),i.attachShader(v,R),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(M){if(s.debug.checkShaderErrors){const V=i.getProgramInfoLog(v).trim(),U=i.getShaderInfoLog(N).trim(),D=i.getShaderInfoLog(R).trim();let $=!0,F=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,N,R);else{const te=ch(i,N,"vertex"),z=ch(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+M.name+`
Material Type: `+M.type+`

Program Info Log: `+V+`
`+te+`
`+z)}else V!==""?console.warn("THREE.WebGLProgram: Program Info Log:",V):(U===""||D==="")&&(F=!1);F&&(M.diagnostics={runnable:$,programLog:V,vertexShader:{log:U,prefix:m},fragmentShader:{log:D,prefix:f}})}i.deleteShader(N),i.deleteShader(R),C=new fa(i,v),j=H_(i,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let j;this.getAttributes=function(){return j===void 0&&A(this),j};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(v,I_)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=D_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=R,this}let Q_=0;class ev{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new tv(e),t.set(e,n)),n}}class tv{constructor(e){this.id=Q_++,this.code=e,this.usedTimes=0}}function nv(s,e,t,n,i,r,o){const a=new wd,l=new ev,c=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,p=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(_){return c.add(_),_===0?"uv":`uv${_}`}function f(_,M,V,U,D){const $=U.fog,F=D.geometry,te=_.isMeshStandardMaterial?U.environment:null,z=(_.isMeshStandardMaterial?t:e).get(_.envMap||te),he=z&&z.mapping===Ra?z.image.height:null,ce=v[_.type];_.precision!==null&&(g=i.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const Te=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Qe=Te!==void 0?Te.length:0;let tt=0;F.morphAttributes.position!==void 0&&(tt=1),F.morphAttributes.normal!==void 0&&(tt=2),F.morphAttributes.color!==void 0&&(tt=3);let Q,se,we,ve;if(ce){const Pt=mi[ce];Q=Pt.vertexShader,se=Pt.fragmentShader}else Q=_.vertexShader,se=_.fragmentShader,l.update(_),we=l.getVertexShaderID(_),ve=l.getFragmentShaderID(_);const Xe=s.getRenderTarget(),He=D.isInstancedMesh===!0,it=D.isBatchedMesh===!0,xt=!!_.map,at=!!_.matcap,I=!!z,Kt=!!_.aoMap,ot=!!_.lightMap,lt=!!_.bumpMap,Ye=!!_.normalMap,yt=!!_.displacementMap,je=!!_.emissiveMap,w=!!_.metalnessMap,x=!!_.roughnessMap,G=_.anisotropy>0,Z=_.clearcoat>0,ee=_.dispersion>0,J=_.iridescence>0,be=_.sheen>0,de=_.transmission>0,fe=G&&!!_.anisotropyMap,ct=Z&&!!_.clearcoatMap,ae=Z&&!!_.clearcoatNormalMap,De=Z&&!!_.clearcoatRoughnessMap,qe=J&&!!_.iridescenceMap,Je=J&&!!_.iridescenceThicknessMap,Se=be&&!!_.sheenColorMap,dt=be&&!!_.sheenRoughnessMap,$e=!!_.specularMap,bt=!!_.specularColorMap,O=!!_.specularIntensityMap,Ae=de&&!!_.transmissionMap,K=de&&!!_.thicknessMap,ne=!!_.gradientMap,xe=!!_.alphaMap,Ee=_.alphaTest>0,Ze=!!_.alphaHash,Ut=!!_.extensions;let Vt=ss;_.toneMapped&&(Xe===null||Xe.isXRRenderTarget===!0)&&(Vt=s.toneMapping);const ft={shaderID:ce,shaderType:_.type,shaderName:_.name,vertexShader:Q,fragmentShader:se,defines:_.defines,customVertexShaderID:we,customFragmentShaderID:ve,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:it,batchingColor:it&&D._colorsTexture!==null,instancing:He,instancingColor:He&&D.instanceColor!==null,instancingMorph:He&&D.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:Xe===null?s.outputColorSpace:Xe.isXRRenderTarget===!0?Xe.texture.colorSpace:sn,alphaToCoverage:!!_.alphaToCoverage,map:xt,matcap:at,envMap:I,envMapMode:I&&z.mapping,envMapCubeUVHeight:he,aoMap:Kt,lightMap:ot,bumpMap:lt,normalMap:Ye,displacementMap:p&&yt,emissiveMap:je,normalMapObjectSpace:Ye&&_.normalMapType===jf,normalMapTangentSpace:Ye&&_.normalMapType===Md,metalnessMap:w,roughnessMap:x,anisotropy:G,anisotropyMap:fe,clearcoat:Z,clearcoatMap:ct,clearcoatNormalMap:ae,clearcoatRoughnessMap:De,dispersion:ee,iridescence:J,iridescenceMap:qe,iridescenceThicknessMap:Je,sheen:be,sheenColorMap:Se,sheenRoughnessMap:dt,specularMap:$e,specularColorMap:bt,specularIntensityMap:O,transmission:de,transmissionMap:Ae,thicknessMap:K,gradientMap:ne,opaque:_.transparent===!1&&_.blending===ar&&_.alphaToCoverage===!1,alphaMap:xe,alphaTest:Ee,alphaHash:Ze,combine:_.combine,mapUv:xt&&m(_.map.channel),aoMapUv:Kt&&m(_.aoMap.channel),lightMapUv:ot&&m(_.lightMap.channel),bumpMapUv:lt&&m(_.bumpMap.channel),normalMapUv:Ye&&m(_.normalMap.channel),displacementMapUv:yt&&m(_.displacementMap.channel),emissiveMapUv:je&&m(_.emissiveMap.channel),metalnessMapUv:w&&m(_.metalnessMap.channel),roughnessMapUv:x&&m(_.roughnessMap.channel),anisotropyMapUv:fe&&m(_.anisotropyMap.channel),clearcoatMapUv:ct&&m(_.clearcoatMap.channel),clearcoatNormalMapUv:ae&&m(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&m(_.clearcoatRoughnessMap.channel),iridescenceMapUv:qe&&m(_.iridescenceMap.channel),iridescenceThicknessMapUv:Je&&m(_.iridescenceThicknessMap.channel),sheenColorMapUv:Se&&m(_.sheenColorMap.channel),sheenRoughnessMapUv:dt&&m(_.sheenRoughnessMap.channel),specularMapUv:$e&&m(_.specularMap.channel),specularColorMapUv:bt&&m(_.specularColorMap.channel),specularIntensityMapUv:O&&m(_.specularIntensityMap.channel),transmissionMapUv:Ae&&m(_.transmissionMap.channel),thicknessMapUv:K&&m(_.thicknessMap.channel),alphaMapUv:xe&&m(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ye||G),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(xt||xe),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Qe,morphTextureStride:tt,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,decodeVideoTexture:xt&&_.map.isVideoTexture===!0&&wt.getTransfer(_.map.colorSpace)===Ot,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pn,flipSided:_.side===mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ut&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&_.extensions.multiDraw===!0||it)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return ft.vertexUv1s=c.has(1),ft.vertexUv2s=c.has(2),ft.vertexUv3s=c.has(3),c.clear(),ft}function E(_){const M=[];if(_.shaderID?M.push(_.shaderID):(M.push(_.customVertexShaderID),M.push(_.customFragmentShaderID)),_.defines!==void 0)for(const V in _.defines)M.push(V),M.push(_.defines[V]);return _.isRawShaderMaterial===!1&&(y(M,_),b(M,_),M.push(s.outputColorSpace)),M.push(_.customProgramCacheKey),M.join()}function y(_,M){_.push(M.precision),_.push(M.outputColorSpace),_.push(M.envMapMode),_.push(M.envMapCubeUVHeight),_.push(M.mapUv),_.push(M.alphaMapUv),_.push(M.lightMapUv),_.push(M.aoMapUv),_.push(M.bumpMapUv),_.push(M.normalMapUv),_.push(M.displacementMapUv),_.push(M.emissiveMapUv),_.push(M.metalnessMapUv),_.push(M.roughnessMapUv),_.push(M.anisotropyMapUv),_.push(M.clearcoatMapUv),_.push(M.clearcoatNormalMapUv),_.push(M.clearcoatRoughnessMapUv),_.push(M.iridescenceMapUv),_.push(M.iridescenceThicknessMapUv),_.push(M.sheenColorMapUv),_.push(M.sheenRoughnessMapUv),_.push(M.specularMapUv),_.push(M.specularColorMapUv),_.push(M.specularIntensityMapUv),_.push(M.transmissionMapUv),_.push(M.thicknessMapUv),_.push(M.combine),_.push(M.fogExp2),_.push(M.sizeAttenuation),_.push(M.morphTargetsCount),_.push(M.morphAttributeCount),_.push(M.numDirLights),_.push(M.numPointLights),_.push(M.numSpotLights),_.push(M.numSpotLightMaps),_.push(M.numHemiLights),_.push(M.numRectAreaLights),_.push(M.numDirLightShadows),_.push(M.numPointLightShadows),_.push(M.numSpotLightShadows),_.push(M.numSpotLightShadowsWithMaps),_.push(M.numLightProbes),_.push(M.shadowMapType),_.push(M.toneMapping),_.push(M.numClippingPlanes),_.push(M.numClipIntersection),_.push(M.depthPacking)}function b(_,M){a.disableAll(),M.supportsVertexTextures&&a.enable(0),M.instancing&&a.enable(1),M.instancingColor&&a.enable(2),M.instancingMorph&&a.enable(3),M.matcap&&a.enable(4),M.envMap&&a.enable(5),M.normalMapObjectSpace&&a.enable(6),M.normalMapTangentSpace&&a.enable(7),M.clearcoat&&a.enable(8),M.iridescence&&a.enable(9),M.alphaTest&&a.enable(10),M.vertexColors&&a.enable(11),M.vertexAlphas&&a.enable(12),M.vertexUv1s&&a.enable(13),M.vertexUv2s&&a.enable(14),M.vertexUv3s&&a.enable(15),M.vertexTangents&&a.enable(16),M.anisotropy&&a.enable(17),M.alphaHash&&a.enable(18),M.batching&&a.enable(19),M.dispersion&&a.enable(20),M.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),M.fog&&a.enable(0),M.useFog&&a.enable(1),M.flatShading&&a.enable(2),M.logarithmicDepthBuffer&&a.enable(3),M.reverseDepthBuffer&&a.enable(4),M.skinning&&a.enable(5),M.morphTargets&&a.enable(6),M.morphNormals&&a.enable(7),M.morphColors&&a.enable(8),M.premultipliedAlpha&&a.enable(9),M.shadowMapEnabled&&a.enable(10),M.doubleSided&&a.enable(11),M.flipSided&&a.enable(12),M.useDepthPacking&&a.enable(13),M.dithering&&a.enable(14),M.transmission&&a.enable(15),M.sheen&&a.enable(16),M.opaque&&a.enable(17),M.pointsUvs&&a.enable(18),M.decodeVideoTexture&&a.enable(19),M.alphaToCoverage&&a.enable(20),_.push(a.mask)}function N(_){const M=v[_.type];let V;if(M){const U=mi[M];V=so.clone(U.uniforms)}else V=_.uniforms;return V}function R(_,M){let V;for(let U=0,D=u.length;U<D;U++){const $=u[U];if($.cacheKey===M){V=$,++V.usedTimes;break}}return V===void 0&&(V=new J_(s,M,_,r),u.push(V)),V}function A(_){if(--_.usedTimes===0){const M=u.indexOf(_);u[M]=u[u.length-1],u.pop(),_.destroy()}}function C(_){l.remove(_)}function j(){l.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:N,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:j}}function iv(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,l){s.get(o)[a]=l}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function sv(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function ph(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function mh(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,p,g,v,m){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:p,groupOrder:g,renderOrder:h.renderOrder,z:v,group:m},s[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=m),e++,f}function a(h,d,p,g,v,m){const f=o(h,d,p,g,v,m);p.transmission>0?n.push(f):p.transparent===!0?i.push(f):t.push(f)}function l(h,d,p,g,v,m){const f=o(h,d,p,g,v,m);p.transmission>0?n.unshift(f):p.transparent===!0?i.unshift(f):t.unshift(f)}function c(h,d){t.length>1&&t.sort(h||sv),n.length>1&&n.sort(d||ph),i.length>1&&i.sort(d||ph)}function u(){for(let h=e,d=s.length;h<d;h++){const p=s[h];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:l,finish:u,sort:c}}function rv(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new mh,s.set(n,[o])):i>=r.length?(o=new mh,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function ov(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new P,color:new Le};break;case"SpotLight":t={position:new P,direction:new P,color:new Le,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new P,color:new Le,distance:0,decay:0};break;case"HemisphereLight":t={direction:new P,skyColor:new Le,groundColor:new Le};break;case"RectAreaLight":t={color:new Le,position:new P,halfWidth:new P,halfHeight:new P};break}return s[e.id]=t,t}}}function av(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Be,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let lv=0;function cv(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function uv(s){const e=new ov,t=av(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new P);const i=new P,r=new rt,o=new rt;function a(c){let u=0,h=0,d=0;for(let j=0;j<9;j++)n.probe[j].set(0,0,0);let p=0,g=0,v=0,m=0,f=0,E=0,y=0,b=0,N=0,R=0,A=0;c.sort(cv);for(let j=0,_=c.length;j<_;j++){const M=c[j],V=M.color,U=M.intensity,D=M.distance,$=M.shadow&&M.shadow.map?M.shadow.map.texture:null;if(M.isAmbientLight)u+=V.r*U,h+=V.g*U,d+=V.b*U;else if(M.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(M.sh.coefficients[F],U);A++}else if(M.isDirectionalLight){const F=e.get(M);if(F.color.copy(M.color).multiplyScalar(M.intensity),M.castShadow){const te=M.shadow,z=t.get(M);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,n.directionalShadow[p]=z,n.directionalShadowMap[p]=$,n.directionalShadowMatrix[p]=M.shadow.matrix,E++}n.directional[p]=F,p++}else if(M.isSpotLight){const F=e.get(M);F.position.setFromMatrixPosition(M.matrixWorld),F.color.copy(V).multiplyScalar(U),F.distance=D,F.coneCos=Math.cos(M.angle),F.penumbraCos=Math.cos(M.angle*(1-M.penumbra)),F.decay=M.decay,n.spot[v]=F;const te=M.shadow;if(M.map&&(n.spotLightMap[N]=M.map,N++,te.updateMatrices(M),M.castShadow&&R++),n.spotLightMatrix[v]=te.matrix,M.castShadow){const z=t.get(M);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=$,b++}v++}else if(M.isRectAreaLight){const F=e.get(M);F.color.copy(V).multiplyScalar(U),F.halfWidth.set(M.width*.5,0,0),F.halfHeight.set(0,M.height*.5,0),n.rectArea[m]=F,m++}else if(M.isPointLight){const F=e.get(M);if(F.color.copy(M.color).multiplyScalar(M.intensity),F.distance=M.distance,F.decay=M.decay,M.castShadow){const te=M.shadow,z=t.get(M);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,z.shadowCameraNear=te.camera.near,z.shadowCameraFar=te.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=M.shadow.matrix,y++}n.point[g]=F,g++}else if(M.isHemisphereLight){const F=e.get(M);F.skyColor.copy(M.color).multiplyScalar(U),F.groundColor.copy(M.groundColor).multiplyScalar(U),n.hemi[f]=F,f++}}m>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=Me.LTC_FLOAT_1,n.rectAreaLTC2=Me.LTC_FLOAT_2):(n.rectAreaLTC1=Me.LTC_HALF_1,n.rectAreaLTC2=Me.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==p||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==m||C.hemiLength!==f||C.numDirectionalShadows!==E||C.numPointShadows!==y||C.numSpotShadows!==b||C.numSpotMaps!==N||C.numLightProbes!==A)&&(n.directional.length=p,n.spot.length=v,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=b+N-R,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,C.directionalLength=p,C.pointLength=g,C.spotLength=v,C.rectAreaLength=m,C.hemiLength=f,C.numDirectionalShadows=E,C.numPointShadows=y,C.numSpotShadows=b,C.numSpotMaps=N,C.numLightProbes=A,n.version=lv++)}function l(c,u){let h=0,d=0,p=0,g=0,v=0;const m=u.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const y=c[f];if(y.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),h++}else if(y.isSpotLight){const b=n.spot[p];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),i.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),v++}}}return{setup:a,setupView:l,state:n}}function gh(s){const e=new uv(s),t=[],n=[];function i(u){c.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function hv(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new gh(s),e.set(i,[a])):r>=o.length?(a=new gh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class dv extends oi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=qf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class fv extends oi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const pv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,mv=`uniform sampler2D shadow_pass;
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
}`;function gv(s,e,t){let n=new Jc;const i=new Be,r=new Be,o=new Rt,a=new dv({depthPacking:Yf}),l=new fv,c={},u=t.maxTextureSize,h={[Hi]:mn,[mn]:Hi,[pn]:pn},d=new jt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Be},radius:{value:4}},vertexShader:pv,fragmentShader:mv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new le(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=td;let f=this.type;this.render=function(R,A,C){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||R.length===0)return;const j=s.getRenderTarget(),_=s.getActiveCubeFace(),M=s.getActiveMipmapLevel(),V=s.state;V.setBlending(ki),V.buffers.color.setClear(1,1,1,1),V.buffers.depth.setTest(!0),V.setScissorTest(!1);const U=f!==Fi&&this.type===Fi,D=f===Fi&&this.type!==Fi;for(let $=0,F=R.length;$<F;$++){const te=R[$],z=te.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const he=z.getFrameExtents();if(i.multiply(he),r.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/he.x),i.x=r.x*he.x,z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/he.y),i.y=r.y*he.y,z.mapSize.y=r.y)),z.map===null||U===!0||D===!0){const Te=this.type!==Fi?{minFilter:vn,magFilter:vn}:{};z.map!==null&&z.map.dispose(),z.map=new Kn(i.x,i.y,Te),z.map.texture.name=te.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const ce=z.getViewportCount();for(let Te=0;Te<ce;Te++){const Qe=z.getViewport(Te);o.set(r.x*Qe.x,r.y*Qe.y,r.x*Qe.z,r.y*Qe.w),V.viewport(o),z.updateMatrices(te,Te),n=z.getFrustum(),b(A,C,z.camera,te,this.type)}z.isPointLightShadow!==!0&&this.type===Fi&&E(z,C),z.needsUpdate=!1}f=this.type,m.needsUpdate=!1,s.setRenderTarget(j,_,M)};function E(R,A){const C=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,p.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new Kn(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,C,d,v,null),p.uniforms.shadow_pass.value=R.mapPass.texture,p.uniforms.resolution.value=R.mapSize,p.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,C,p,v,null)}function y(R,A,C,j){let _=null;const M=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(M!==void 0)_=M;else if(_=C.isPointLight===!0?l:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const V=_.uuid,U=A.uuid;let D=c[V];D===void 0&&(D={},c[V]=D);let $=D[U];$===void 0&&($=_.clone(),D[U]=$,A.addEventListener("dispose",N)),_=$}if(_.visible=A.visible,_.wireframe=A.wireframe,j===Fi?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:h[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const V=s.properties.get(_);V.light=C}return _}function b(R,A,C,j,_){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===Fi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const U=e.update(R),D=R.material;if(Array.isArray(D)){const $=U.groups;for(let F=0,te=$.length;F<te;F++){const z=$[F],he=D[z.materialIndex];if(he&&he.visible){const ce=y(R,he,j,_);R.onBeforeShadow(s,R,A,C,U,ce,z),s.renderBufferDirect(C,null,U,ce,R,z),R.onAfterShadow(s,R,A,C,U,ce,z)}}}else if(D.visible){const $=y(R,D,j,_);R.onBeforeShadow(s,R,A,C,U,$,null),s.renderBufferDirect(C,null,U,$,R,null),R.onAfterShadow(s,R,A,C,U,$,null)}}const V=R.children;for(let U=0,D=V.length;U<D;U++)b(V[U],A,C,j,_)}function N(R){R.target.removeEventListener("dispose",N);for(const C in c){const j=c[C],_=R.target.uuid;_ in j&&(j[_].dispose(),delete j[_])}}}const _v={[Yl]:jl,[Kl]:Jl,[$l]:Ql,[dr]:Zl,[jl]:Yl,[Jl]:Kl,[Ql]:$l,[Zl]:dr};function vv(s){function e(){let O=!1;const Ae=new Rt;let K=null;const ne=new Rt(0,0,0,0);return{setMask:function(xe){K!==xe&&!O&&(s.colorMask(xe,xe,xe,xe),K=xe)},setLocked:function(xe){O=xe},setClear:function(xe,Ee,Ze,Ut,Vt){Vt===!0&&(xe*=Ut,Ee*=Ut,Ze*=Ut),Ae.set(xe,Ee,Ze,Ut),ne.equals(Ae)===!1&&(s.clearColor(xe,Ee,Ze,Ut),ne.copy(Ae))},reset:function(){O=!1,K=null,ne.set(-1,0,0,0)}}}function t(){let O=!1,Ae=!1,K=null,ne=null,xe=null;return{setReversed:function(Ee){Ae=Ee},setTest:function(Ee){Ee?we(s.DEPTH_TEST):ve(s.DEPTH_TEST)},setMask:function(Ee){K!==Ee&&!O&&(s.depthMask(Ee),K=Ee)},setFunc:function(Ee){if(Ae&&(Ee=_v[Ee]),ne!==Ee){switch(Ee){case Yl:s.depthFunc(s.NEVER);break;case jl:s.depthFunc(s.ALWAYS);break;case Kl:s.depthFunc(s.LESS);break;case dr:s.depthFunc(s.LEQUAL);break;case $l:s.depthFunc(s.EQUAL);break;case Zl:s.depthFunc(s.GEQUAL);break;case Jl:s.depthFunc(s.GREATER);break;case Ql:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ne=Ee}},setLocked:function(Ee){O=Ee},setClear:function(Ee){xe!==Ee&&(s.clearDepth(Ee),xe=Ee)},reset:function(){O=!1,K=null,ne=null,xe=null}}}function n(){let O=!1,Ae=null,K=null,ne=null,xe=null,Ee=null,Ze=null,Ut=null,Vt=null;return{setTest:function(ft){O||(ft?we(s.STENCIL_TEST):ve(s.STENCIL_TEST))},setMask:function(ft){Ae!==ft&&!O&&(s.stencilMask(ft),Ae=ft)},setFunc:function(ft,Pt,Qt){(K!==ft||ne!==Pt||xe!==Qt)&&(s.stencilFunc(ft,Pt,Qt),K=ft,ne=Pt,xe=Qt)},setOp:function(ft,Pt,Qt){(Ee!==ft||Ze!==Pt||Ut!==Qt)&&(s.stencilOp(ft,Pt,Qt),Ee=ft,Ze=Pt,Ut=Qt)},setLocked:function(ft){O=ft},setClear:function(ft){Vt!==ft&&(s.clearStencil(ft),Vt=ft)},reset:function(){O=!1,Ae=null,K=null,ne=null,xe=null,Ee=null,Ze=null,Ut=null,Vt=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,E=null,y=null,b=null,N=null,R=new Le(0,0,0),A=0,C=!1,j=null,_=null,M=null,V=null,U=null;const D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,F=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(te)[1]),$=F>=1):te.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),$=F>=2);let z=null,he={};const ce=s.getParameter(s.SCISSOR_BOX),Te=s.getParameter(s.VIEWPORT),Qe=new Rt().fromArray(ce),tt=new Rt().fromArray(Te);function Q(O,Ae,K,ne){const xe=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(O,Ee),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ze=0;Ze<K;Ze++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,ne,0,s.RGBA,s.UNSIGNED_BYTE,xe):s.texImage2D(Ae+Ze,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,xe);return Ee}const se={};se[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),se[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),se[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),se[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),we(s.DEPTH_TEST),r.setFunc(dr),ot(!1),lt(Su),we(s.CULL_FACE),I(ki);function we(O){c[O]!==!0&&(s.enable(O),c[O]=!0)}function ve(O){c[O]!==!1&&(s.disable(O),c[O]=!1)}function Xe(O,Ae){return u[O]!==Ae?(s.bindFramebuffer(O,Ae),u[O]=Ae,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Ae),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function He(O,Ae){let K=d,ne=!1;if(O){K=h.get(Ae),K===void 0&&(K=[],h.set(Ae,K));const xe=O.textures;if(K.length!==xe.length||K[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,Ze=xe.length;Ee<Ze;Ee++)K[Ee]=s.COLOR_ATTACHMENT0+Ee;K.length=xe.length,ne=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,ne=!0);ne&&s.drawBuffers(K)}function it(O){return p!==O?(s.useProgram(O),p=O,!0):!1}const xt={[ys]:s.FUNC_ADD,[bf]:s.FUNC_SUBTRACT,[Ef]:s.FUNC_REVERSE_SUBTRACT};xt[Tf]=s.MIN,xt[wf]=s.MAX;const at={[Af]:s.ZERO,[Rf]:s.ONE,[Cf]:s.SRC_COLOR,[Xl]:s.SRC_ALPHA,[Nf]:s.SRC_ALPHA_SATURATE,[Df]:s.DST_COLOR,[Lf]:s.DST_ALPHA,[Pf]:s.ONE_MINUS_SRC_COLOR,[ql]:s.ONE_MINUS_SRC_ALPHA,[Uf]:s.ONE_MINUS_DST_COLOR,[If]:s.ONE_MINUS_DST_ALPHA,[Ff]:s.CONSTANT_COLOR,[Of]:s.ONE_MINUS_CONSTANT_COLOR,[Bf]:s.CONSTANT_ALPHA,[zf]:s.ONE_MINUS_CONSTANT_ALPHA};function I(O,Ae,K,ne,xe,Ee,Ze,Ut,Vt,ft){if(O===ki){g===!0&&(ve(s.BLEND),g=!1);return}if(g===!1&&(we(s.BLEND),g=!0),O!==Sf){if(O!==v||ft!==C){if((m!==ys||y!==ys)&&(s.blendEquation(s.FUNC_ADD),m=ys,y=ys),ft)switch(O){case ar:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gi:s.blendFunc(s.ONE,s.ONE);break;case bu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case ar:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case gi:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case bu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Eu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}f=null,E=null,b=null,N=null,R.set(0,0,0),A=0,v=O,C=ft}return}xe=xe||Ae,Ee=Ee||K,Ze=Ze||ne,(Ae!==m||xe!==y)&&(s.blendEquationSeparate(xt[Ae],xt[xe]),m=Ae,y=xe),(K!==f||ne!==E||Ee!==b||Ze!==N)&&(s.blendFuncSeparate(at[K],at[ne],at[Ee],at[Ze]),f=K,E=ne,b=Ee,N=Ze),(Ut.equals(R)===!1||Vt!==A)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Vt),R.copy(Ut),A=Vt),v=O,C=!1}function Kt(O,Ae){O.side===pn?ve(s.CULL_FACE):we(s.CULL_FACE);let K=O.side===mn;Ae&&(K=!K),ot(K),O.blending===ar&&O.transparent===!1?I(ki):I(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),i.setMask(O.colorWrite);const ne=O.stencilWrite;o.setTest(ne),ne&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),yt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?we(s.SAMPLE_ALPHA_TO_COVERAGE):ve(s.SAMPLE_ALPHA_TO_COVERAGE)}function ot(O){j!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),j=O)}function lt(O){O!==yf?(we(s.CULL_FACE),O!==_&&(O===Su?s.cullFace(s.BACK):O===Mf?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ve(s.CULL_FACE),_=O}function Ye(O){O!==M&&($&&s.lineWidth(O),M=O)}function yt(O,Ae,K){O?(we(s.POLYGON_OFFSET_FILL),(V!==Ae||U!==K)&&(s.polygonOffset(Ae,K),V=Ae,U=K)):ve(s.POLYGON_OFFSET_FILL)}function je(O){O?we(s.SCISSOR_TEST):ve(s.SCISSOR_TEST)}function w(O){O===void 0&&(O=s.TEXTURE0+D-1),z!==O&&(s.activeTexture(O),z=O)}function x(O,Ae,K){K===void 0&&(z===null?K=s.TEXTURE0+D-1:K=z);let ne=he[K];ne===void 0&&(ne={type:void 0,texture:void 0},he[K]=ne),(ne.type!==O||ne.texture!==Ae)&&(z!==K&&(s.activeTexture(K),z=K),s.bindTexture(O,Ae||se[O]),ne.type=O,ne.texture=Ae)}function G(){const O=he[z];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function fe(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ct(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ae(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function qe(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Je(O){Qe.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Qe.copy(O))}function Se(O){tt.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),tt.copy(O))}function dt(O,Ae){let K=l.get(Ae);K===void 0&&(K=new WeakMap,l.set(Ae,K));let ne=K.get(O);ne===void 0&&(ne=s.getUniformBlockIndex(Ae,O.name),K.set(O,ne))}function $e(O,Ae){const ne=l.get(Ae).get(O);a.get(Ae)!==ne&&(s.uniformBlockBinding(Ae,ne,O.__bindingPointIndex),a.set(Ae,ne))}function bt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),c={},z=null,he={},u={},h=new WeakMap,d=[],p=null,g=!1,v=null,m=null,f=null,E=null,y=null,b=null,N=null,R=new Le(0,0,0),A=0,C=!1,j=null,_=null,M=null,V=null,U=null,Qe.set(0,0,s.canvas.width,s.canvas.height),tt.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:we,disable:ve,bindFramebuffer:Xe,drawBuffers:He,useProgram:it,setBlending:I,setMaterial:Kt,setFlipSided:ot,setCullFace:lt,setLineWidth:Ye,setPolygonOffset:yt,setScissorTest:je,activeTexture:w,bindTexture:x,unbindTexture:G,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:De,texImage3D:qe,updateUBOMapping:dt,uniformBlockBinding:$e,texStorage2D:ct,texStorage3D:ae,texSubImage2D:J,texSubImage3D:be,compressedTexSubImage2D:de,compressedTexSubImage3D:fe,scissor:Je,viewport:Se,reset:bt}}function _h(s,e,t,n){const i=xv(n);switch(t){case pd:return s*e;case gd:return s*e;case _d:return s*e*2;case qc:return s*e/i.components*i.byteLength;case Yc:return s*e/i.components*i.byteLength;case vd:return s*e*2/i.components*i.byteLength;case jc:return s*e*2/i.components*i.byteLength;case md:return s*e*3/i.components*i.byteLength;case jn:return s*e*4/i.components*i.byteLength;case Kc:return s*e*4/i.components*i.byteLength;case aa:case la:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case ca:case ua:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case ic:case rc:return Math.max(s,16)*Math.max(e,8)/4;case nc:case sc:return Math.max(s,8)*Math.max(e,8)/2;case oc:case ac:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case lc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case cc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case uc:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case hc:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case dc:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case fc:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case pc:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case mc:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case gc:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case _c:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case vc:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case xc:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case yc:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Mc:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Sc:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case ha:case bc:case Ec:return Math.ceil(s/4)*Math.ceil(e/4)*16;case xd:case Tc:return Math.ceil(s/4)*Math.ceil(e/4)*8;case wc:case Ac:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function xv(s){switch(s){case ai:case hd:return{byteLength:1,components:1};case eo:case dd:case Cn:return{byteLength:2,components:1};case Wc:case Xc:return{byteLength:2,components:4};case Es:case Gc:case Nn:return{byteLength:4,components:1};case fd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function yv(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Be,u=new WeakMap;let h;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return p?new OffscreenCanvas(w,x):io("canvas")}function v(w,x,G){let Z=1;const ee=je(w);if((ee.width>G||ee.height>G)&&(Z=G/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const J=Math.floor(Z*ee.width),be=Math.floor(Z*ee.height);h===void 0&&(h=g(J,be));const de=x?g(J,be):h;return de.width=J,de.height=be,de.getContext("2d").drawImage(w,0,0,J,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+be+")."),de}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function m(w){return w.generateMipmaps&&w.minFilter!==vn&&w.minFilter!==tn}function f(w){s.generateMipmap(w)}function E(w,x,G,Z,ee=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=x;if(x===s.RED&&(G===s.FLOAT&&(J=s.R32F),G===s.HALF_FLOAT&&(J=s.R16F),G===s.UNSIGNED_BYTE&&(J=s.R8)),x===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.R8UI),G===s.UNSIGNED_SHORT&&(J=s.R16UI),G===s.UNSIGNED_INT&&(J=s.R32UI),G===s.BYTE&&(J=s.R8I),G===s.SHORT&&(J=s.R16I),G===s.INT&&(J=s.R32I)),x===s.RG&&(G===s.FLOAT&&(J=s.RG32F),G===s.HALF_FLOAT&&(J=s.RG16F),G===s.UNSIGNED_BYTE&&(J=s.RG8)),x===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RG8UI),G===s.UNSIGNED_SHORT&&(J=s.RG16UI),G===s.UNSIGNED_INT&&(J=s.RG32UI),G===s.BYTE&&(J=s.RG8I),G===s.SHORT&&(J=s.RG16I),G===s.INT&&(J=s.RG32I)),x===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGB8UI),G===s.UNSIGNED_SHORT&&(J=s.RGB16UI),G===s.UNSIGNED_INT&&(J=s.RGB32UI),G===s.BYTE&&(J=s.RGB8I),G===s.SHORT&&(J=s.RGB16I),G===s.INT&&(J=s.RGB32I)),x===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),G===s.UNSIGNED_INT&&(J=s.RGBA32UI),G===s.BYTE&&(J=s.RGBA8I),G===s.SHORT&&(J=s.RGBA16I),G===s.INT&&(J=s.RGBA32I)),x===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),x===s.RGBA){const be=ee?va:wt.getTransfer(Z);G===s.FLOAT&&(J=s.RGBA32F),G===s.HALF_FLOAT&&(J=s.RGBA16F),G===s.UNSIGNED_BYTE&&(J=be===Ot?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function y(w,x){let G;return w?x===null||x===Es||x===mr?G=s.DEPTH24_STENCIL8:x===Nn?G=s.DEPTH32F_STENCIL8:x===eo&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===Es||x===mr?G=s.DEPTH_COMPONENT24:x===Nn?G=s.DEPTH_COMPONENT32F:x===eo&&(G=s.DEPTH_COMPONENT16),G}function b(w,x){return m(w)===!0||w.isFramebufferTexture&&w.minFilter!==vn&&w.minFilter!==tn?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function N(w){const x=w.target;x.removeEventListener("dispose",N),A(x),x.isVideoTexture&&u.delete(x)}function R(w){const x=w.target;x.removeEventListener("dispose",R),j(x)}function A(w){const x=n.get(w);if(x.__webglInit===void 0)return;const G=w.source,Z=d.get(G);if(Z){const ee=Z[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&C(w),Object.keys(Z).length===0&&d.delete(G)}n.remove(w)}function C(w){const x=n.get(w);s.deleteTexture(x.__webglTexture);const G=w.source,Z=d.get(G);delete Z[x.__cacheKey],o.memory.textures--}function j(w){const x=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let ee=0;ee<x.__webglFramebuffer[Z].length;ee++)s.deleteFramebuffer(x.__webglFramebuffer[Z][ee]);else s.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)s.deleteFramebuffer(x.__webglFramebuffer[Z]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=w.textures;for(let Z=0,ee=G.length;Z<ee;Z++){const J=n.get(G[Z]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(w)}let _=0;function M(){_=0}function V(){const w=_;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),_+=1,w}function U(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function D(w,x){const G=n.get(w);if(w.isVideoTexture&&Ye(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(G,w,x);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+x)}function $(w,x){const G=n.get(w);if(w.version>0&&G.__version!==w.version){tt(G,w,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+x)}function F(w,x){const G=n.get(w);if(w.version>0&&G.__version!==w.version){tt(G,w,x);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+x)}function te(w,x){const G=n.get(w);if(w.version>0&&G.__version!==w.version){Q(G,w,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+x)}const z={[bs]:s.REPEAT,[_i]:s.CLAMP_TO_EDGE,[_a]:s.MIRRORED_REPEAT},he={[vn]:s.NEAREST,[ud]:s.NEAREST_MIPMAP_NEAREST,[jr]:s.NEAREST_MIPMAP_LINEAR,[tn]:s.LINEAR,[oa]:s.LINEAR_MIPMAP_NEAREST,[vi]:s.LINEAR_MIPMAP_LINEAR},ce={[Kf]:s.NEVER,[tp]:s.ALWAYS,[$f]:s.LESS,[Sd]:s.LEQUAL,[Zf]:s.EQUAL,[ep]:s.GEQUAL,[Jf]:s.GREATER,[Qf]:s.NOTEQUAL};function Te(w,x){if(x.type===Nn&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===tn||x.magFilter===oa||x.magFilter===jr||x.magFilter===vi||x.minFilter===tn||x.minFilter===oa||x.minFilter===jr||x.minFilter===vi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,z[x.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,z[x.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,z[x.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,he[x.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,he[x.minFilter]),x.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,ce[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===vn||x.minFilter!==jr&&x.minFilter!==vi||x.type===Nn&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Qe(w,x){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",N));const Z=x.source;let ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));const J=U(x);if(J!==w.__cacheKey){ee[J]===void 0&&(ee[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[J].usedTimes++;const be=ee[w.__cacheKey];be!==void 0&&(ee[w.__cacheKey].usedTimes--,be.usedTimes===0&&C(x)),w.__cacheKey=J,w.__webglTexture=ee[J].texture}return G}function tt(w,x,G){let Z=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=s.TEXTURE_3D);const ee=Qe(w,x),J=x.source;t.bindTexture(Z,w.__webglTexture,s.TEXTURE0+G);const be=n.get(J);if(J.version!==be.__version||ee===!0){t.activeTexture(s.TEXTURE0+G);const de=wt.getPrimaries(wt.workingColorSpace),fe=x.colorSpace===ts?null:wt.getPrimaries(x.colorSpace),ct=x.colorSpace===ts||de===fe?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);let ae=v(x.image,!1,i.maxTextureSize);ae=yt(x,ae);const De=r.convert(x.format,x.colorSpace),qe=r.convert(x.type);let Je=E(x.internalFormat,De,qe,x.colorSpace,x.isVideoTexture);Te(Z,x);let Se;const dt=x.mipmaps,$e=x.isVideoTexture!==!0,bt=be.__version===void 0||ee===!0,O=J.dataReady,Ae=b(x,ae);if(x.isDepthTexture)Je=y(x.format===gr,x.type),bt&&($e?t.texStorage2D(s.TEXTURE_2D,1,Je,ae.width,ae.height):t.texImage2D(s.TEXTURE_2D,0,Je,ae.width,ae.height,0,De,qe,null));else if(x.isDataTexture)if(dt.length>0){$e&&bt&&t.texStorage2D(s.TEXTURE_2D,Ae,Je,dt[0].width,dt[0].height);for(let K=0,ne=dt.length;K<ne;K++)Se=dt[K],$e?O&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Se.width,Se.height,De,qe,Se.data):t.texImage2D(s.TEXTURE_2D,K,Je,Se.width,Se.height,0,De,qe,Se.data);x.generateMipmaps=!1}else $e?(bt&&t.texStorage2D(s.TEXTURE_2D,Ae,Je,ae.width,ae.height),O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ae.width,ae.height,De,qe,ae.data)):t.texImage2D(s.TEXTURE_2D,0,Je,ae.width,ae.height,0,De,qe,ae.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){$e&&bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Je,dt[0].width,dt[0].height,ae.depth);for(let K=0,ne=dt.length;K<ne;K++)if(Se=dt[K],x.format!==jn)if(De!==null)if($e){if(O)if(x.layerUpdates.size>0){const xe=_h(Se.width,Se.height,x.format,x.type);for(const Ee of x.layerUpdates){const Ze=Se.data.subarray(Ee*xe/Se.data.BYTES_PER_ELEMENT,(Ee+1)*xe/Se.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,Ee,Se.width,Se.height,1,De,Ze,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Se.width,Se.height,ae.depth,De,Se.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Je,Se.width,Se.height,ae.depth,0,Se.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else $e?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Se.width,Se.height,ae.depth,De,qe,Se.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,Je,Se.width,Se.height,ae.depth,0,De,qe,Se.data)}else{$e&&bt&&t.texStorage2D(s.TEXTURE_2D,Ae,Je,dt[0].width,dt[0].height);for(let K=0,ne=dt.length;K<ne;K++)Se=dt[K],x.format!==jn?De!==null?$e?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,Se.width,Se.height,De,Se.data):t.compressedTexImage2D(s.TEXTURE_2D,K,Je,Se.width,Se.height,0,Se.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):$e?O&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Se.width,Se.height,De,qe,Se.data):t.texImage2D(s.TEXTURE_2D,K,Je,Se.width,Se.height,0,De,qe,Se.data)}else if(x.isDataArrayTexture)if($e){if(bt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Je,ae.width,ae.height,ae.depth),O)if(x.layerUpdates.size>0){const K=_h(ae.width,ae.height,x.format,x.type);for(const ne of x.layerUpdates){const xe=ae.data.subarray(ne*K/ae.data.BYTES_PER_ELEMENT,(ne+1)*K/ae.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ne,ae.width,ae.height,1,De,qe,xe)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,ae.width,ae.height,ae.depth,De,qe,ae.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Je,ae.width,ae.height,ae.depth,0,De,qe,ae.data);else if(x.isData3DTexture)$e?(bt&&t.texStorage3D(s.TEXTURE_3D,Ae,Je,ae.width,ae.height,ae.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,ae.width,ae.height,ae.depth,De,qe,ae.data)):t.texImage3D(s.TEXTURE_3D,0,Je,ae.width,ae.height,ae.depth,0,De,qe,ae.data);else if(x.isFramebufferTexture){if(bt)if($e)t.texStorage2D(s.TEXTURE_2D,Ae,Je,ae.width,ae.height);else{let K=ae.width,ne=ae.height;for(let xe=0;xe<Ae;xe++)t.texImage2D(s.TEXTURE_2D,xe,Je,K,ne,0,De,qe,null),K>>=1,ne>>=1}}else if(dt.length>0){if($e&&bt){const K=je(dt[0]);t.texStorage2D(s.TEXTURE_2D,Ae,Je,K.width,K.height)}for(let K=0,ne=dt.length;K<ne;K++)Se=dt[K],$e?O&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,De,qe,Se):t.texImage2D(s.TEXTURE_2D,K,Je,De,qe,Se);x.generateMipmaps=!1}else if($e){if(bt){const K=je(ae);t.texStorage2D(s.TEXTURE_2D,Ae,Je,K.width,K.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,qe,ae)}else t.texImage2D(s.TEXTURE_2D,0,Je,De,qe,ae);m(x)&&f(Z),be.__version=J.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Q(w,x,G){if(x.image.length!==6)return;const Z=Qe(w,x),ee=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+G);const J=n.get(ee);if(ee.version!==J.__version||Z===!0){t.activeTexture(s.TEXTURE0+G);const be=wt.getPrimaries(wt.workingColorSpace),de=x.colorSpace===ts?null:wt.getPrimaries(x.colorSpace),fe=x.colorSpace===ts||be===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,fe);const ct=x.isCompressedTexture||x.image[0].isCompressedTexture,ae=x.image[0]&&x.image[0].isDataTexture,De=[];for(let ne=0;ne<6;ne++)!ct&&!ae?De[ne]=v(x.image[ne],!0,i.maxCubemapSize):De[ne]=ae?x.image[ne].image:x.image[ne],De[ne]=yt(x,De[ne]);const qe=De[0],Je=r.convert(x.format,x.colorSpace),Se=r.convert(x.type),dt=E(x.internalFormat,Je,Se,x.colorSpace),$e=x.isVideoTexture!==!0,bt=J.__version===void 0||Z===!0,O=ee.dataReady;let Ae=b(x,qe);Te(s.TEXTURE_CUBE_MAP,x);let K;if(ct){$e&&bt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,dt,qe.width,qe.height);for(let ne=0;ne<6;ne++){K=De[ne].mipmaps;for(let xe=0;xe<K.length;xe++){const Ee=K[xe];x.format!==jn?Je!==null?$e?O&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,Ee.width,Ee.height,Je,Ee.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,dt,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):$e?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,0,0,Ee.width,Ee.height,Je,Se,Ee.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe,dt,Ee.width,Ee.height,0,Je,Se,Ee.data)}}}else{if(K=x.mipmaps,$e&&bt){K.length>0&&Ae++;const ne=je(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,dt,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(ae){$e?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,De[ne].width,De[ne].height,Je,Se,De[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,dt,De[ne].width,De[ne].height,0,Je,Se,De[ne].data);for(let xe=0;xe<K.length;xe++){const Ze=K[xe].image[ne].image;$e?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,Ze.width,Ze.height,Je,Se,Ze.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,dt,Ze.width,Ze.height,0,Je,Se,Ze.data)}}else{$e?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Je,Se,De[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,dt,Je,Se,De[ne]);for(let xe=0;xe<K.length;xe++){const Ee=K[xe];$e?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,0,0,Je,Se,Ee.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,xe+1,dt,Je,Se,Ee.image[ne])}}}m(x)&&f(s.TEXTURE_CUBE_MAP),J.__version=ee.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function se(w,x,G,Z,ee,J){const be=r.convert(G.format,G.colorSpace),de=r.convert(G.type),fe=E(G.internalFormat,be,de,G.colorSpace);if(!n.get(x).__hasExternalTextures){const ae=Math.max(1,x.width>>J),De=Math.max(1,x.height>>J);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,fe,ae,De,x.depth,0,be,de,null):t.texImage2D(ee,J,fe,ae,De,0,be,de,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),lt(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,ee,n.get(G).__webglTexture,0,ot(x)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,ee,n.get(G).__webglTexture,J),t.bindFramebuffer(s.FRAMEBUFFER,null)}function we(w,x,G){if(s.bindRenderbuffer(s.RENDERBUFFER,w),x.depthBuffer){const Z=x.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,J=y(x.stencilBuffer,ee),be=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,de=ot(x);lt(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,de,J,x.width,x.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,de,J,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,J,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,w)}else{const Z=x.textures;for(let ee=0;ee<Z.length;ee++){const J=Z[ee],be=r.convert(J.format,J.colorSpace),de=r.convert(J.type),fe=E(J.internalFormat,be,de,J.colorSpace),ct=ot(x);G&&lt(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,ct,fe,x.width,x.height):lt(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,ct,fe,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,fe,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ve(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),D(x.depthTexture,0);const Z=n.get(x.depthTexture).__webglTexture,ee=ot(x);if(x.depthTexture.format===lr)lt(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(x.depthTexture.format===gr)lt(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function Xe(w){const x=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=Z}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ve(x.__webglFramebuffer,w)}else if(G){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=s.createRenderbuffer(),we(x.__webglDepthbuffer[Z],w,!1);else{const ee=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,J)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),we(x.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ee)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function He(w,x,G){const Z=n.get(w);x!==void 0&&se(Z.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&Xe(w)}function it(w){const x=w.texture,G=n.get(w),Z=n.get(x);w.addEventListener("dispose",R);const ee=w.textures,J=w.isWebGLCubeRenderTarget===!0,be=ee.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=x.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[de]=[];for(let fe=0;fe<x.mipmaps.length;fe++)G.__webglFramebuffer[de][fe]=s.createFramebuffer()}else G.__webglFramebuffer[de]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let de=0;de<x.mipmaps.length;de++)G.__webglFramebuffer[de]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(be)for(let de=0,fe=ee.length;de<fe;de++){const ct=n.get(ee[de]);ct.__webglTexture===void 0&&(ct.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&lt(w)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let de=0;de<ee.length;de++){const fe=ee[de];G.__webglColorRenderbuffer[de]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[de]);const ct=r.convert(fe.format,fe.colorSpace),ae=r.convert(fe.type),De=E(fe.internalFormat,ct,ae,fe.colorSpace,w.isXRRenderTarget===!0),qe=ot(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,qe,De,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,G.__webglColorRenderbuffer[de])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),we(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),Te(s.TEXTURE_CUBE_MAP,x);for(let de=0;de<6;de++)if(x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)se(G.__webglFramebuffer[de][fe],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,fe);else se(G.__webglFramebuffer[de],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+de,0);m(x)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let de=0,fe=ee.length;de<fe;de++){const ct=ee[de],ae=n.get(ct);t.bindTexture(s.TEXTURE_2D,ae.__webglTexture),Te(s.TEXTURE_2D,ct),se(G.__webglFramebuffer,w,ct,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,0),m(ct)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let de=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(de=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(de,Z.__webglTexture),Te(de,x),x.mipmaps&&x.mipmaps.length>0)for(let fe=0;fe<x.mipmaps.length;fe++)se(G.__webglFramebuffer[fe],w,x,s.COLOR_ATTACHMENT0,de,fe);else se(G.__webglFramebuffer,w,x,s.COLOR_ATTACHMENT0,de,0);m(x)&&f(de),t.unbindTexture()}w.depthBuffer&&Xe(w)}function xt(w){const x=w.textures;for(let G=0,Z=x.length;G<Z;G++){const ee=x[G];if(m(ee)){const J=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,be=n.get(ee).__webglTexture;t.bindTexture(J,be),f(J),t.unbindTexture()}}}const at=[],I=[];function Kt(w){if(w.samples>0){if(lt(w)===!1){const x=w.textures,G=w.width,Z=w.height;let ee=s.COLOR_BUFFER_BIT;const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(w),de=x.length>1;if(de)for(let fe=0;fe<x.length;fe++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let fe=0;fe<x.length;fe++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),de){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[fe]);const ct=n.get(x[fe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,ct,0)}s.blitFramebuffer(0,0,G,Z,0,0,G,Z,ee,s.NEAREST),l===!0&&(at.length=0,I.length=0,at.push(s.COLOR_ATTACHMENT0+fe),w.depthBuffer&&w.resolveDepthBuffer===!1&&(at.push(J),I.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),de)for(let fe=0;fe<x.length;fe++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.RENDERBUFFER,be.__webglColorRenderbuffer[fe]);const ct=n.get(x[fe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+fe,s.TEXTURE_2D,ct,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&l){const x=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function ot(w){return Math.min(i.maxSamples,w.samples)}function lt(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ye(w){const x=o.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function yt(w,x){const G=w.colorSpace,Z=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==sn&&G!==ts&&(wt.getTransfer(G)===Ot?(Z!==jn||ee!==ai)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function je(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(c.width=w.naturalWidth||w.width,c.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(c.width=w.displayWidth,c.height=w.displayHeight):(c.width=w.width,c.height=w.height),c}this.allocateTextureUnit=V,this.resetTextureUnits=M,this.setTexture2D=D,this.setTexture2DArray=$,this.setTexture3D=F,this.setTextureCube=te,this.rebindTextures=He,this.setupRenderTarget=it,this.updateRenderTargetMipmap=xt,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=se,this.useMultisampledRTT=lt}function Mv(s,e){function t(n,i=ts){let r;const o=wt.getTransfer(i);if(n===ai)return s.UNSIGNED_BYTE;if(n===Wc)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Xc)return s.UNSIGNED_SHORT_5_5_5_1;if(n===fd)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===hd)return s.BYTE;if(n===dd)return s.SHORT;if(n===eo)return s.UNSIGNED_SHORT;if(n===Gc)return s.INT;if(n===Es)return s.UNSIGNED_INT;if(n===Nn)return s.FLOAT;if(n===Cn)return s.HALF_FLOAT;if(n===pd)return s.ALPHA;if(n===md)return s.RGB;if(n===jn)return s.RGBA;if(n===gd)return s.LUMINANCE;if(n===_d)return s.LUMINANCE_ALPHA;if(n===lr)return s.DEPTH_COMPONENT;if(n===gr)return s.DEPTH_STENCIL;if(n===qc)return s.RED;if(n===Yc)return s.RED_INTEGER;if(n===vd)return s.RG;if(n===jc)return s.RG_INTEGER;if(n===Kc)return s.RGBA_INTEGER;if(n===aa||n===la||n===ca||n===ua)if(o===Ot)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===aa)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===aa)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===la)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ca)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ua)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===nc||n===ic||n===sc||n===rc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===nc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ic)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===sc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===rc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===oc||n===ac||n===lc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===oc||n===ac)return o===Ot?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===lc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===cc||n===uc||n===hc||n===dc||n===fc||n===pc||n===mc||n===gc||n===_c||n===vc||n===xc||n===yc||n===Mc||n===Sc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===cc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===uc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===hc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===dc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===fc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===pc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===mc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===gc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===_c)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===vc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===xc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===yc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Mc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Sc)return o===Ot?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===ha||n===bc||n===Ec)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===ha)return o===Ot?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===bc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Ec)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===xd||n===Tc||n===wc||n===Ac)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===ha)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Tc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===wc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ac)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===mr?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class Sv extends on{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bt extends zt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const bv={type:"move"};class Rl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new P,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new P),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new P,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new P),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=t.getJointPose(v,n),f=this._getHandJoint(c,v);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(bv)))}return a!==null&&(a.visible=i!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const Ev=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Tv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new nn,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new jt({vertexShader:Ev,fragmentShader:Tv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new le(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Av extends br{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,p=null,g=null;const v=new wv,m=t.getContextAttributes();let f=null,E=null;const y=[],b=[],N=new Be;let R=null;const A=new on;A.layers.enable(1),A.viewport=new Rt;const C=new on;C.layers.enable(2),C.viewport=new Rt;const j=[A,C],_=new Sv;_.layers.enable(1),_.layers.enable(2);let M=null,V=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let se=y[Q];return se===void 0&&(se=new Rl,y[Q]=se),se.getTargetRaySpace()},this.getControllerGrip=function(Q){let se=y[Q];return se===void 0&&(se=new Rl,y[Q]=se),se.getGripSpace()},this.getHand=function(Q){let se=y[Q];return se===void 0&&(se=new Rl,y[Q]=se),se.getHandSpace()};function U(Q){const se=b.indexOf(Q.inputSource);if(se===-1)return;const we=y[se];we!==void 0&&(we.update(Q.inputSource,Q.frame,c||o),we.dispatchEvent({type:Q.type,data:Q.inputSource}))}function D(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",$);for(let Q=0;Q<y.length;Q++){const se=b[Q];se!==null&&(b[Q]=null,y[Q].disconnect(se))}M=null,V=null,v.reset(),e.setRenderTarget(f),p=null,d=null,h=null,i=null,E=null,tt.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(Q){c=Q},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",D),i.addEventListener("inputsourceschange",$),m.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(N),i.renderState.layers===void 0){const se={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(i,t,se),i.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new Kn(p.framebufferWidth,p.framebufferHeight,{format:jn,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let se=null,we=null,ve=null;m.depth&&(ve=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,se=m.stencil?gr:lr,we=m.stencil?mr:Es);const Xe={colorFormat:t.RGBA8,depthFormat:ve,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(Xe),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new Kn(d.textureWidth,d.textureHeight,{format:jn,type:ai,depthTexture:new Fd(d.textureWidth,d.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,se),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await i.requestReferenceSpace(a),tt.setContext(i),tt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(Q){for(let se=0;se<Q.removed.length;se++){const we=Q.removed[se],ve=b.indexOf(we);ve>=0&&(b[ve]=null,y[ve].disconnect(we))}for(let se=0;se<Q.added.length;se++){const we=Q.added[se];let ve=b.indexOf(we);if(ve===-1){for(let He=0;He<y.length;He++)if(He>=b.length){b.push(we),ve=He;break}else if(b[He]===null){b[He]=we,ve=He;break}if(ve===-1)break}const Xe=y[ve];Xe&&Xe.connect(we)}}const F=new P,te=new P;function z(Q,se,we){F.setFromMatrixPosition(se.matrixWorld),te.setFromMatrixPosition(we.matrixWorld);const ve=F.distanceTo(te),Xe=se.projectionMatrix.elements,He=we.projectionMatrix.elements,it=Xe[14]/(Xe[10]-1),xt=Xe[14]/(Xe[10]+1),at=(Xe[9]+1)/Xe[5],I=(Xe[9]-1)/Xe[5],Kt=(Xe[8]-1)/Xe[0],ot=(He[8]+1)/He[0],lt=it*Kt,Ye=it*ot,yt=ve/(-Kt+ot),je=yt*-Kt;if(se.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(je),Q.translateZ(yt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),Xe[10]===-1)Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse);else{const w=it+yt,x=xt+yt,G=lt-je,Z=Ye+(ve-je),ee=at*xt/x*w,J=I*xt/x*w;Q.projectionMatrix.makePerspective(G,Z,ee,J,w,x),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function he(Q,se){se===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(se.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let se=Q.near,we=Q.far;v.texture!==null&&(v.depthNear>0&&(se=v.depthNear),v.depthFar>0&&(we=v.depthFar)),_.near=C.near=A.near=se,_.far=C.far=A.far=we,(M!==_.near||V!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),M=_.near,V=_.far);const ve=Q.parent,Xe=_.cameras;he(_,ve);for(let He=0;He<Xe.length;He++)he(Xe[He],ve);Xe.length===2?z(_,A,C):_.projectionMatrix.copy(A.projectionMatrix),ce(Q,_,ve)};function ce(Q,se,we){we===null?Q.matrix.copy(se.matrixWorld):(Q.matrix.copy(we.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(se.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(se.projectionMatrix),Q.projectionMatrixInverse.copy(se.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=_r*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(Q){l=Q,d!==null&&(d.fixedFoveation=Q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let Te=null;function Qe(Q,se){if(u=se.getViewerPose(c||o),g=se,u!==null){const we=u.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let ve=!1;we.length!==_.cameras.length&&(_.cameras.length=0,ve=!0);for(let He=0;He<we.length;He++){const it=we[He];let xt=null;if(p!==null)xt=p.getViewport(it);else{const I=h.getViewSubImage(d,it);xt=I.viewport,He===0&&(e.setRenderTargetTextures(E,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(E))}let at=j[He];at===void 0&&(at=new on,at.layers.enable(He),at.viewport=new Rt,j[He]=at),at.matrix.fromArray(it.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(it.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(xt.x,xt.y,xt.width,xt.height),He===0&&(_.matrix.copy(at.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ve===!0&&_.cameras.push(at)}const Xe=i.enabledFeatures;if(Xe&&Xe.includes("depth-sensing")){const He=h.getDepthInformation(we[0]);He&&He.isValid&&He.texture&&v.init(e,He,i.renderState)}}for(let we=0;we<y.length;we++){const ve=b[we],Xe=y[we];ve!==null&&Xe!==void 0&&Xe.update(ve,se,c||o)}Te&&Te(Q,se),se.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:se}),g=null}const tt=new Nd;tt.setAnimationLoop(Qe),this.setAnimationLoop=function(Q){Te=Q},this.dispose=function(){}}}const gs=new yi,Rv=new rt;function Cv(s,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,Pd(s)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function i(m,f,E,y,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),h(m,f)):f.isMeshPhongMaterial?(r(m,f),u(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,b)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),v(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===mn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===mn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),y=E.envMap,b=E.envMapRotation;y&&(m.envMap.value=y,gs.copy(b),gs.x*=-1,gs.y*=-1,gs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(gs.y*=-1,gs.z*=-1),m.envMapRotation.value.setFromMatrix4(Rv.makeRotationFromEuler(gs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function h(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===mn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function v(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function Pv(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const b=y.program;n.uniformBlockBinding(E,b)}function c(E,y){let b=i[E.id];b===void 0&&(g(E),b=u(E),i[E.id]=b,E.addEventListener("dispose",m));const N=y.program;n.updateUBOMapping(E,N);const R=e.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function u(E){const y=h();E.__bindingPointIndex=y;const b=s.createBuffer(),N=E.__size,R=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,N,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,y,b),b}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=i[E.id],b=E.uniforms,N=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,y);for(let R=0,A=b.length;R<A;R++){const C=Array.isArray(b[R])?b[R]:[b[R]];for(let j=0,_=C.length;j<_;j++){const M=C[j];if(p(M,R,j,N)===!0){const V=M.__offset,U=Array.isArray(M.value)?M.value:[M.value];let D=0;for(let $=0;$<U.length;$++){const F=U[$],te=v(F);typeof F=="number"||typeof F=="boolean"?(M.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,V+D,M.__data)):F.isMatrix3?(M.__data[0]=F.elements[0],M.__data[1]=F.elements[1],M.__data[2]=F.elements[2],M.__data[3]=0,M.__data[4]=F.elements[3],M.__data[5]=F.elements[4],M.__data[6]=F.elements[5],M.__data[7]=0,M.__data[8]=F.elements[6],M.__data[9]=F.elements[7],M.__data[10]=F.elements[8],M.__data[11]=0):(F.toArray(M.__data,D),D+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,V,M.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function p(E,y,b,N){const R=E.value,A=y+"_"+b;if(N[A]===void 0)return typeof R=="number"||typeof R=="boolean"?N[A]=R:N[A]=R.clone(),!0;{const C=N[A];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return N[A]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(E){const y=E.uniforms;let b=0;const N=16;for(let A=0,C=y.length;A<C;A++){const j=Array.isArray(y[A])?y[A]:[y[A]];for(let _=0,M=j.length;_<M;_++){const V=j[_],U=Array.isArray(V.value)?V.value:[V.value];for(let D=0,$=U.length;D<$;D++){const F=U[D],te=v(F),z=b%N,he=z%te.boundary,ce=z+he;b+=he,ce!==0&&N-ce<te.storage&&(b+=N-ce),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=b,b+=te.storage}}}const R=b%N;return R>0&&(b+=N-R),E.__size=b,E.__cache={},this}function v(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const b=o.indexOf(y.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[y.id]),delete i[y.id],delete r[y.id]}function f(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:l,update:c,dispose:f}}class Lv{constructor(e={}){const{canvas:t=vp(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=ss,this.toneMappingExposure=1;const y=this;let b=!1,N=0,R=0,A=null,C=-1,j=null;const _=new Rt,M=new Rt;let V=null;const U=new Le(0);let D=0,$=t.width,F=t.height,te=1,z=null,he=null;const ce=new Rt(0,0,$,F),Te=new Rt(0,0,$,F);let Qe=!1;const tt=new Jc;let Q=!1,se=!1;const we=new rt,ve=new rt,Xe=new P,He=new Rt,it={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function at(){return A===null?te:1}let I=n;function Kt(S,k){return t.getContext(S,k)}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Hc}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),I===null){const k="webgl2";if(I=Kt(k,S),I===null)throw Kt(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let ot,lt,Ye,yt,je,w,x,G,Z,ee,J,be,de,fe,ct,ae,De,qe,Je,Se,dt,$e,bt,O;function Ae(){ot=new F0(I),ot.init(),$e=new Mv(I,ot),lt=new P0(I,ot,e,$e),Ye=new vv(I),lt.reverseDepthBuffer&&Ye.buffers.depth.setReversed(!0),yt=new z0(I),je=new iv,w=new yv(I,ot,Ye,je,lt,$e,yt),x=new I0(y),G=new N0(y),Z=new qp(I),bt=new R0(I,Z),ee=new O0(I,Z,yt,bt),J=new H0(I,ee,Z,yt),Je=new k0(I,lt,w),ae=new L0(je),be=new nv(y,x,G,ot,lt,bt,ae),de=new Cv(y,je),fe=new rv,ct=new hv(ot),qe=new A0(y,x,G,Ye,J,d,l),De=new gv(y,J,lt),O=new Pv(I,yt,lt,Ye),Se=new C0(I,ot,yt),dt=new B0(I,ot,yt),yt.programs=be.programs,y.capabilities=lt,y.extensions=ot,y.properties=je,y.renderLists=fe,y.shadowMap=De,y.state=Ye,y.info=yt}Ae();const K=new Av(y,I);this.xr=K,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=ot.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=ot.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(S){S!==void 0&&(te=S,this.setSize($,F,!1))},this.getSize=function(S){return S.set($,F)},this.setSize=function(S,k,X=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,F=k,t.width=Math.floor(S*te),t.height=Math.floor(k*te),X===!0&&(t.style.width=S+"px",t.style.height=k+"px"),this.setViewport(0,0,S,k)},this.getDrawingBufferSize=function(S){return S.set($*te,F*te).floor()},this.setDrawingBufferSize=function(S,k,X){$=S,F=k,te=X,t.width=Math.floor(S*X),t.height=Math.floor(k*X),this.setViewport(0,0,S,k)},this.getCurrentViewport=function(S){return S.copy(_)},this.getViewport=function(S){return S.copy(ce)},this.setViewport=function(S,k,X,Y){S.isVector4?ce.set(S.x,S.y,S.z,S.w):ce.set(S,k,X,Y),Ye.viewport(_.copy(ce).multiplyScalar(te).round())},this.getScissor=function(S){return S.copy(Te)},this.setScissor=function(S,k,X,Y){S.isVector4?Te.set(S.x,S.y,S.z,S.w):Te.set(S,k,X,Y),Ye.scissor(M.copy(Te).multiplyScalar(te).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(S){Ye.setScissorTest(Qe=S)},this.setOpaqueSort=function(S){z=S},this.setTransparentSort=function(S){he=S},this.getClearColor=function(S){return S.copy(qe.getClearColor())},this.setClearColor=function(){qe.setClearColor.apply(qe,arguments)},this.getClearAlpha=function(){return qe.getClearAlpha()},this.setClearAlpha=function(){qe.setClearAlpha.apply(qe,arguments)},this.clear=function(S=!0,k=!0,X=!0){let Y=0;if(S){let H=!1;if(A!==null){const re=A.texture.format;H=re===Kc||re===jc||re===Yc}if(H){const re=A.texture.type,me=re===ai||re===Es||re===eo||re===mr||re===Wc||re===Xc,Ie=qe.getClearColor(),Ne=qe.getClearAlpha(),ze=Ie.r,L=Ie.g,W=Ie.b;me?(p[0]=ze,p[1]=L,p[2]=W,p[3]=Ne,I.clearBufferuiv(I.COLOR,0,p)):(g[0]=ze,g[1]=L,g[2]=W,g[3]=Ne,I.clearBufferiv(I.COLOR,0,g))}else Y|=I.COLOR_BUFFER_BIT}k&&(Y|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(Y|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),fe.dispose(),ct.dispose(),je.dispose(),x.dispose(),G.dispose(),J.dispose(),bt.dispose(),O.dispose(),be.dispose(),K.dispose(),K.removeEventListener("sessionstart",zn),K.removeEventListener("sessionend",Zn),Pn.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function xe(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=yt.autoReset,k=De.enabled,X=De.autoUpdate,Y=De.needsUpdate,H=De.type;Ae(),yt.autoReset=S,De.enabled=k,De.autoUpdate=X,De.needsUpdate=Y,De.type=H}function Ee(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ze(S){const k=S.target;k.removeEventListener("dispose",Ze),Ut(k)}function Ut(S){Vt(S),je.remove(S)}function Vt(S){const k=je.get(S).programs;k!==void 0&&(k.forEach(function(X){be.releaseProgram(X)}),S.isShaderMaterial&&be.releaseShaderCache(S))}this.renderBufferDirect=function(S,k,X,Y,H,re){k===null&&(k=it);const me=H.isMesh&&H.matrixWorld.determinant()<0,Ie=kn(S,k,X,Y,H);Ye.setMaterial(Y,me);let Ne=X.index,ze=1;if(Y.wireframe===!0){if(Ne=ee.getWireframeAttribute(X),Ne===void 0)return;ze=2}const L=X.drawRange,W=X.attributes.position;let oe=L.start*ze,Ce=(L.start+L.count)*ze;re!==null&&(oe=Math.max(oe,re.start*ze),Ce=Math.min(Ce,(re.start+re.count)*ze)),Ne!==null?(oe=Math.max(oe,0),Ce=Math.min(Ce,Ne.count)):W!=null&&(oe=Math.max(oe,0),Ce=Math.min(Ce,W.count));const _e=Ce-oe;if(_e<0||_e===1/0)return;bt.setup(H,Y,Ie,X,Ne);let ut,ue=Se;if(Ne!==null&&(ut=Z.get(Ne),ue=dt,ue.setIndex(ut)),H.isMesh)Y.wireframe===!0?(Ye.setLineWidth(Y.wireframeLinewidth*at()),ue.setMode(I.LINES)):ue.setMode(I.TRIANGLES);else if(H.isLine){let ge=Y.linewidth;ge===void 0&&(ge=1),Ye.setLineWidth(ge*at()),H.isLineSegments?ue.setMode(I.LINES):H.isLineLoop?ue.setMode(I.LINE_LOOP):ue.setMode(I.LINE_STRIP)}else H.isPoints?ue.setMode(I.POINTS):H.isSprite&&ue.setMode(I.TRIANGLES);if(H.isBatchedMesh)if(H._multiDrawInstances!==null)ue.renderMultiDrawInstances(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount,H._multiDrawInstances);else if(ot.get("WEBGL_multi_draw"))ue.renderMultiDraw(H._multiDrawStarts,H._multiDrawCounts,H._multiDrawCount);else{const ge=H._multiDrawStarts,Ke=H._multiDrawCounts,Pe=H._multiDrawCount,Ue=Ne?Z.get(Ne).bytesPerElement:1,et=je.get(Y).currentProgram.getUniforms();for(let Ve=0;Ve<Pe;Ve++)et.setValue(I,"_gl_DrawID",Ve),ue.render(ge[Ve]/Ue,Ke[Ve])}else if(H.isInstancedMesh)ue.renderInstances(oe,_e,H.count);else if(X.isInstancedBufferGeometry){const ge=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,Ke=Math.min(X.instanceCount,ge);ue.renderInstances(oe,_e,Ke)}else ue.render(oe,_e)};function ft(S,k,X){S.transparent===!0&&S.side===pn&&S.forceSinglePass===!1?(S.side=mn,S.needsUpdate=!0,xn(S,k,X),S.side=Hi,S.needsUpdate=!0,xn(S,k,X),S.side=pn):xn(S,k,X)}this.compile=function(S,k,X=null){X===null&&(X=S),m=ct.get(X),m.init(k),E.push(m),X.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),S!==X&&S.traverseVisible(function(H){H.isLight&&H.layers.test(k.layers)&&(m.pushLight(H),H.castShadow&&m.pushShadow(H))}),m.setupLights();const Y=new Set;return S.traverse(function(H){if(!(H.isMesh||H.isPoints||H.isLine||H.isSprite))return;const re=H.material;if(re)if(Array.isArray(re))for(let me=0;me<re.length;me++){const Ie=re[me];ft(Ie,X,H),Y.add(Ie)}else ft(re,X,H),Y.add(re)}),E.pop(),m=null,Y},this.compileAsync=function(S,k,X=null){const Y=this.compile(S,k,X);return new Promise(H=>{function re(){if(Y.forEach(function(me){je.get(me).currentProgram.isReady()&&Y.delete(me)}),Y.size===0){H(S);return}setTimeout(re,10)}ot.get("KHR_parallel_shader_compile")!==null?re():setTimeout(re,10)})};let Pt=null;function Qt(S){Pt&&Pt(S)}function zn(){Pn.stop()}function Zn(){Pn.start()}const Pn=new Nd;Pn.setAnimationLoop(Qt),typeof self<"u"&&Pn.setContext(self),this.setAnimationLoop=function(S){Pt=S,K.setAnimationLoop(S),S===null?Pn.stop():Pn.start()},K.addEventListener("sessionstart",zn),K.addEventListener("sessionend",Zn),this.render=function(S,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(k),k=K.getCamera()),S.isScene===!0&&S.onBeforeRender(y,S,k,A),m=ct.get(S,E.length),m.init(k),E.push(m),ve.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),tt.setFromProjectionMatrix(ve),se=this.localClippingEnabled,Q=ae.init(this.clippingPlanes,se),v=fe.get(S,f.length),v.init(),f.push(v),K.enabled===!0&&K.isPresenting===!0){const re=y.xr.getDepthSensingMesh();re!==null&&bi(re,k,-1/0,y.sortObjects)}bi(S,k,0,y.sortObjects),v.finish(),y.sortObjects===!0&&v.sort(z,he),xt=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,xt&&qe.addToRenderList(v,S),this.info.render.frame++,Q===!0&&ae.beginShadows();const X=m.state.shadowsArray;De.render(X,S,k),Q===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=v.opaque,H=v.transmissive;if(m.setupLights(),k.isArrayCamera){const re=k.cameras;if(H.length>0)for(let me=0,Ie=re.length;me<Ie;me++){const Ne=re[me];li(Y,H,S,Ne)}xt&&qe.render(S);for(let me=0,Ie=re.length;me<Ie;me++){const Ne=re[me];Gt(v,S,Ne,Ne.viewport)}}else H.length>0&&li(Y,H,S,k),xt&&qe.render(S),Gt(v,S,k);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(y,S,k),bt.resetDefaultState(),C=-1,j=null,E.pop(),E.length>0?(m=E[E.length-1],Q===!0&&ae.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function bi(S,k,X,Y){if(S.visible===!1)return;if(S.layers.test(k.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(k);else if(S.isLight)m.pushLight(S),S.castShadow&&m.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||tt.intersectsSprite(S)){Y&&He.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ve);const me=J.update(S),Ie=S.material;Ie.visible&&v.push(S,me,Ie,X,He.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||tt.intersectsObject(S))){const me=J.update(S),Ie=S.material;if(Y&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),He.copy(S.boundingSphere.center)):(me.boundingSphere===null&&me.computeBoundingSphere(),He.copy(me.boundingSphere.center)),He.applyMatrix4(S.matrixWorld).applyMatrix4(ve)),Array.isArray(Ie)){const Ne=me.groups;for(let ze=0,L=Ne.length;ze<L;ze++){const W=Ne[ze],oe=Ie[W.materialIndex];oe&&oe.visible&&v.push(S,me,oe,X,He.z,W)}}else Ie.visible&&v.push(S,me,Ie,X,He.z,null)}}const re=S.children;for(let me=0,Ie=re.length;me<Ie;me++)bi(re[me],k,X,Y)}function Gt(S,k,X,Y){const H=S.opaque,re=S.transmissive,me=S.transparent;m.setupLightsView(X),Q===!0&&ae.setGlobalState(y.clippingPlanes,X),Y&&Ye.viewport(_.copy(Y)),H.length>0&&Et(H,k,X),re.length>0&&Et(re,k,X),me.length>0&&Et(me,k,X),Ye.buffers.depth.setTest(!0),Ye.buffers.depth.setMask(!0),Ye.buffers.color.setMask(!0),Ye.setPolygonOffset(!1)}function li(S,k,X,Y){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Y.id]===void 0&&(m.state.transmissionRenderTarget[Y.id]=new Kn(1,1,{generateMipmaps:!0,type:ot.has("EXT_color_buffer_half_float")||ot.has("EXT_color_buffer_float")?Cn:ai,minFilter:vi,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:wt.workingColorSpace}));const re=m.state.transmissionRenderTarget[Y.id],me=Y.viewport||_;re.setSize(me.z,me.w);const Ie=y.getRenderTarget();y.setRenderTarget(re),y.getClearColor(U),D=y.getClearAlpha(),D<1&&y.setClearColor(16777215,.5),y.clear(),xt&&qe.render(X);const Ne=y.toneMapping;y.toneMapping=ss;const ze=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),m.setupLightsView(Y),Q===!0&&ae.setGlobalState(y.clippingPlanes,Y),Et(S,X,Y),w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re),ot.has("WEBGL_multisampled_render_to_texture")===!1){let L=!1;for(let W=0,oe=k.length;W<oe;W++){const Ce=k[W],_e=Ce.object,ut=Ce.geometry,ue=Ce.material,ge=Ce.group;if(ue.side===pn&&_e.layers.test(Y.layers)){const Ke=ue.side;ue.side=mn,ue.needsUpdate=!0,cn(_e,X,Y,ut,ue,ge),ue.side=Ke,ue.needsUpdate=!0,L=!0}}L===!0&&(w.updateMultisampleRenderTarget(re),w.updateRenderTargetMipmap(re))}y.setRenderTarget(Ie),y.setClearColor(U,D),ze!==void 0&&(Y.viewport=ze),y.toneMapping=Ne}function Et(S,k,X){const Y=k.isScene===!0?k.overrideMaterial:null;for(let H=0,re=S.length;H<re;H++){const me=S[H],Ie=me.object,Ne=me.geometry,ze=Y===null?me.material:Y,L=me.group;Ie.layers.test(X.layers)&&cn(Ie,k,X,Ne,ze,L)}}function cn(S,k,X,Y,H,re){S.onBeforeRender(y,k,X,Y,H,re),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),H.onBeforeRender(y,k,X,Y,S,re),H.transparent===!0&&H.side===pn&&H.forceSinglePass===!1?(H.side=mn,H.needsUpdate=!0,y.renderBufferDirect(X,k,Y,H,S,re),H.side=Hi,H.needsUpdate=!0,y.renderBufferDirect(X,k,Y,H,S,re),H.side=pn):y.renderBufferDirect(X,k,Y,H,S,re),S.onAfterRender(y,k,X,Y,H,re)}function xn(S,k,X){k.isScene!==!0&&(k=it);const Y=je.get(S),H=m.state.lights,re=m.state.shadowsArray,me=H.state.version,Ie=be.getParameters(S,H.state,re,k,X),Ne=be.getProgramCacheKey(Ie);let ze=Y.programs;Y.environment=S.isMeshStandardMaterial?k.environment:null,Y.fog=k.fog,Y.envMap=(S.isMeshStandardMaterial?G:x).get(S.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&S.envMap===null?k.environmentRotation:S.envMapRotation,ze===void 0&&(S.addEventListener("dispose",Ze),ze=new Map,Y.programs=ze);let L=ze.get(Ne);if(L!==void 0){if(Y.currentProgram===L&&Y.lightsStateVersion===me)return Zt(S,Ie),L}else Ie.uniforms=be.getUniforms(S),S.onBeforeCompile(Ie,y),L=be.acquireProgram(Ie,Ne),ze.set(Ne,L),Y.uniforms=Ie.uniforms;const W=Y.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(W.clippingPlanes=ae.uniform),Zt(S,Ie),Y.needsLights=os(S),Y.lightsStateVersion=me,Y.needsLights&&(W.ambientLightColor.value=H.state.ambient,W.lightProbe.value=H.state.probe,W.directionalLights.value=H.state.directional,W.directionalLightShadows.value=H.state.directionalShadow,W.spotLights.value=H.state.spot,W.spotLightShadows.value=H.state.spotShadow,W.rectAreaLights.value=H.state.rectArea,W.ltc_1.value=H.state.rectAreaLTC1,W.ltc_2.value=H.state.rectAreaLTC2,W.pointLights.value=H.state.point,W.pointLightShadows.value=H.state.pointShadow,W.hemisphereLights.value=H.state.hemi,W.directionalShadowMap.value=H.state.directionalShadowMap,W.directionalShadowMatrix.value=H.state.directionalShadowMatrix,W.spotShadowMap.value=H.state.spotShadowMap,W.spotLightMatrix.value=H.state.spotLightMatrix,W.spotLightMap.value=H.state.spotLightMap,W.pointShadowMap.value=H.state.pointShadowMap,W.pointShadowMatrix.value=H.state.pointShadowMatrix),Y.currentProgram=L,Y.uniformsList=null,L}function $t(S){if(S.uniformsList===null){const k=S.currentProgram.getUniforms();S.uniformsList=fa.seqWithValue(k.seq,S.uniforms)}return S.uniformsList}function Zt(S,k){const X=je.get(S);X.outputColorSpace=k.outputColorSpace,X.batching=k.batching,X.batchingColor=k.batchingColor,X.instancing=k.instancing,X.instancingColor=k.instancingColor,X.instancingMorph=k.instancingMorph,X.skinning=k.skinning,X.morphTargets=k.morphTargets,X.morphNormals=k.morphNormals,X.morphColors=k.morphColors,X.morphTargetsCount=k.morphTargetsCount,X.numClippingPlanes=k.numClippingPlanes,X.numIntersection=k.numClipIntersection,X.vertexAlphas=k.vertexAlphas,X.vertexTangents=k.vertexTangents,X.toneMapping=k.toneMapping}function kn(S,k,X,Y,H){k.isScene!==!0&&(k=it),w.resetTextureUnits();const re=k.fog,me=Y.isMeshStandardMaterial?k.environment:null,Ie=A===null?y.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:sn,Ne=(Y.isMeshStandardMaterial?G:x).get(Y.envMap||me),ze=Y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,L=!!X.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),W=!!X.morphAttributes.position,oe=!!X.morphAttributes.normal,Ce=!!X.morphAttributes.color;let _e=ss;Y.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(_e=y.toneMapping);const ut=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ue=ut!==void 0?ut.length:0,ge=je.get(Y),Ke=m.state.lights;if(Q===!0&&(se===!0||S!==j)){const At=S===j&&Y.id===C;ae.setState(Y,S,At)}let Pe=!1;Y.version===ge.__version?(ge.needsLights&&ge.lightsStateVersion!==Ke.state.version||ge.outputColorSpace!==Ie||H.isBatchedMesh&&ge.batching===!1||!H.isBatchedMesh&&ge.batching===!0||H.isBatchedMesh&&ge.batchingColor===!0&&H.colorTexture===null||H.isBatchedMesh&&ge.batchingColor===!1&&H.colorTexture!==null||H.isInstancedMesh&&ge.instancing===!1||!H.isInstancedMesh&&ge.instancing===!0||H.isSkinnedMesh&&ge.skinning===!1||!H.isSkinnedMesh&&ge.skinning===!0||H.isInstancedMesh&&ge.instancingColor===!0&&H.instanceColor===null||H.isInstancedMesh&&ge.instancingColor===!1&&H.instanceColor!==null||H.isInstancedMesh&&ge.instancingMorph===!0&&H.morphTexture===null||H.isInstancedMesh&&ge.instancingMorph===!1&&H.morphTexture!==null||ge.envMap!==Ne||Y.fog===!0&&ge.fog!==re||ge.numClippingPlanes!==void 0&&(ge.numClippingPlanes!==ae.numPlanes||ge.numIntersection!==ae.numIntersection)||ge.vertexAlphas!==ze||ge.vertexTangents!==L||ge.morphTargets!==W||ge.morphNormals!==oe||ge.morphColors!==Ce||ge.toneMapping!==_e||ge.morphTargetsCount!==ue)&&(Pe=!0):(Pe=!0,ge.__version=Y.version);let Ue=ge.currentProgram;Pe===!0&&(Ue=xn(Y,k,H));let et=!1,Ve=!1,nt=!1;const Ge=Ue.getUniforms(),Mt=ge.uniforms;if(Ye.useProgram(Ue.program)&&(et=!0,Ve=!0,nt=!0),Y.id!==C&&(C=Y.id,Ve=!0),et||j!==S){lt.reverseDepthBuffer?(we.copy(S.projectionMatrix),yp(we),Mp(we),Ge.setValue(I,"projectionMatrix",we)):Ge.setValue(I,"projectionMatrix",S.projectionMatrix),Ge.setValue(I,"viewMatrix",S.matrixWorldInverse);const At=Ge.map.cameraPosition;At!==void 0&&At.setValue(I,Xe.setFromMatrixPosition(S.matrixWorld)),lt.logarithmicDepthBuffer&&Ge.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&Ge.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),j!==S&&(j=S,Ve=!0,nt=!0)}if(H.isSkinnedMesh){Ge.setOptional(I,H,"bindMatrix"),Ge.setOptional(I,H,"bindMatrixInverse");const At=H.skeleton;At&&(At.boneTexture===null&&At.computeBoneTexture(),Ge.setValue(I,"boneTexture",At.boneTexture,w))}H.isBatchedMesh&&(Ge.setOptional(I,H,"batchingTexture"),Ge.setValue(I,"batchingTexture",H._matricesTexture,w),Ge.setOptional(I,H,"batchingIdTexture"),Ge.setValue(I,"batchingIdTexture",H._indirectTexture,w),Ge.setOptional(I,H,"batchingColorTexture"),H._colorsTexture!==null&&Ge.setValue(I,"batchingColorTexture",H._colorsTexture,w));const Yt=X.morphAttributes;if((Yt.position!==void 0||Yt.normal!==void 0||Yt.color!==void 0)&&Je.update(H,X,Ue),(Ve||ge.receiveShadow!==H.receiveShadow)&&(ge.receiveShadow=H.receiveShadow,Ge.setValue(I,"receiveShadow",H.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(Mt.envMap.value=Ne,Mt.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&k.environment!==null&&(Mt.envMapIntensity.value=k.environmentIntensity),Ve&&(Ge.setValue(I,"toneMappingExposure",y.toneMappingExposure),ge.needsLights&&Ei(Mt,nt),re&&Y.fog===!0&&de.refreshFogUniforms(Mt,re),de.refreshMaterialUniforms(Mt,Y,te,F,m.state.transmissionRenderTarget[S.id]),fa.upload(I,$t(ge),Mt,w)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(fa.upload(I,$t(ge),Mt,w),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&Ge.setValue(I,"center",H.center),Ge.setValue(I,"modelViewMatrix",H.modelViewMatrix),Ge.setValue(I,"normalMatrix",H.normalMatrix),Ge.setValue(I,"modelMatrix",H.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const At=Y.uniformsGroups;for(let rn=0,Fn=At.length;rn<Fn;rn++){const ci=At[rn];O.update(ci,Ue),O.bind(ci,Ue)}}return Ue}function Ei(S,k){S.ambientLightColor.needsUpdate=k,S.lightProbe.needsUpdate=k,S.directionalLights.needsUpdate=k,S.directionalLightShadows.needsUpdate=k,S.pointLights.needsUpdate=k,S.pointLightShadows.needsUpdate=k,S.spotLights.needsUpdate=k,S.spotLightShadows.needsUpdate=k,S.rectAreaLights.needsUpdate=k,S.hemisphereLights.needsUpdate=k}function os(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,k,X){je.get(S.texture).__webglTexture=k,je.get(S.depthTexture).__webglTexture=X;const Y=je.get(S);Y.__hasExternalTextures=!0,Y.__autoAllocateDepthBuffer=X===void 0,Y.__autoAllocateDepthBuffer||ot.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),Y.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,k){const X=je.get(S);X.__webglFramebuffer=k,X.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(S,k=0,X=0){A=S,N=k,R=X;let Y=!0,H=null,re=!1,me=!1;if(S){const Ne=je.get(S);if(Ne.__useDefaultFramebuffer!==void 0)Ye.bindFramebuffer(I.FRAMEBUFFER,null),Y=!1;else if(Ne.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(Ne.__hasExternalTextures)w.rebindTextures(S,je.get(S.texture).__webglTexture,je.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const W=S.depthTexture;if(Ne.__boundDepthTexture!==W){if(W!==null&&je.has(W)&&(S.width!==W.image.width||S.height!==W.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}const ze=S.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(me=!0);const L=je.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(L[k])?H=L[k][X]:H=L[k],re=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?H=je.get(S).__webglMultisampledFramebuffer:Array.isArray(L)?H=L[X]:H=L,_.copy(S.viewport),M.copy(S.scissor),V=S.scissorTest}else _.copy(ce).multiplyScalar(te).floor(),M.copy(Te).multiplyScalar(te).floor(),V=Qe;if(Ye.bindFramebuffer(I.FRAMEBUFFER,H)&&Y&&Ye.drawBuffers(S,H),Ye.viewport(_),Ye.scissor(M),Ye.setScissorTest(V),re){const Ne=je.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+k,Ne.__webglTexture,X)}else if(me){const Ne=je.get(S.texture),ze=k||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ne.__webglTexture,X||0,ze)}C=-1},this.readRenderTargetPixels=function(S,k,X,Y,H,re,me){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ie=je.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(Ie=Ie[me]),Ie){Ye.bindFramebuffer(I.FRAMEBUFFER,Ie);try{const Ne=S.texture,ze=Ne.format,L=Ne.type;if(!lt.textureFormatReadable(ze)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!lt.textureTypeReadable(L)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=S.width-Y&&X>=0&&X<=S.height-H&&I.readPixels(k,X,Y,H,$e.convert(ze),$e.convert(L),re)}finally{const Ne=A!==null?je.get(A).__webglFramebuffer:null;Ye.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,k,X,Y,H,re,me){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ie=je.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&me!==void 0&&(Ie=Ie[me]),Ie){const Ne=S.texture,ze=Ne.format,L=Ne.type;if(!lt.textureFormatReadable(ze))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!lt.textureTypeReadable(L))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(k>=0&&k<=S.width-Y&&X>=0&&X<=S.height-H){Ye.bindFramebuffer(I.FRAMEBUFFER,Ie);const W=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,W),I.bufferData(I.PIXEL_PACK_BUFFER,re.byteLength,I.STREAM_READ),I.readPixels(k,X,Y,H,$e.convert(ze),$e.convert(L),0);const oe=A!==null?je.get(A).__webglFramebuffer:null;Ye.bindFramebuffer(I.FRAMEBUFFER,oe);const Ce=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await xp(I,Ce,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,W),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,re),I.deleteBuffer(W),I.deleteSync(Ce),re}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,k=null,X=0){S.isTexture!==!0&&(da("WebGLRenderer: copyFramebufferToTexture function signature has changed."),k=arguments[0]||null,S=arguments[1]);const Y=Math.pow(2,-X),H=Math.floor(S.image.width*Y),re=Math.floor(S.image.height*Y),me=k!==null?k.x:0,Ie=k!==null?k.y:0;w.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,me,Ie,H,re),Ye.unbindTexture()},this.copyTextureToTexture=function(S,k,X=null,Y=null,H=0){S.isTexture!==!0&&(da("WebGLRenderer: copyTextureToTexture function signature has changed."),Y=arguments[0]||null,S=arguments[1],k=arguments[2],H=arguments[3]||0,X=null);let re,me,Ie,Ne,ze,L;X!==null?(re=X.max.x-X.min.x,me=X.max.y-X.min.y,Ie=X.min.x,Ne=X.min.y):(re=S.image.width,me=S.image.height,Ie=0,Ne=0),Y!==null?(ze=Y.x,L=Y.y):(ze=0,L=0);const W=$e.convert(k.format),oe=$e.convert(k.type);w.setTexture2D(k,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Ce=I.getParameter(I.UNPACK_ROW_LENGTH),_e=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ut=I.getParameter(I.UNPACK_SKIP_PIXELS),ue=I.getParameter(I.UNPACK_SKIP_ROWS),ge=I.getParameter(I.UNPACK_SKIP_IMAGES),Ke=S.isCompressedTexture?S.mipmaps[H]:S.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,Ke.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Ke.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ie),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,H,ze,L,re,me,W,oe,Ke.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,H,ze,L,Ke.width,Ke.height,W,Ke.data):I.texSubImage2D(I.TEXTURE_2D,H,ze,L,re,me,W,oe,Ke),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ce),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ut),I.pixelStorei(I.UNPACK_SKIP_ROWS,ue),I.pixelStorei(I.UNPACK_SKIP_IMAGES,ge),H===0&&k.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ye.unbindTexture()},this.copyTextureToTexture3D=function(S,k,X=null,Y=null,H=0){S.isTexture!==!0&&(da("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,Y=arguments[1]||null,S=arguments[2],k=arguments[3],H=arguments[4]||0);let re,me,Ie,Ne,ze,L,W,oe,Ce;const _e=S.isCompressedTexture?S.mipmaps[H]:S.image;X!==null?(re=X.max.x-X.min.x,me=X.max.y-X.min.y,Ie=X.max.z-X.min.z,Ne=X.min.x,ze=X.min.y,L=X.min.z):(re=_e.width,me=_e.height,Ie=_e.depth,Ne=0,ze=0,L=0),Y!==null?(W=Y.x,oe=Y.y,Ce=Y.z):(W=0,oe=0,Ce=0);const ut=$e.convert(k.format),ue=$e.convert(k.type);let ge;if(k.isData3DTexture)w.setTexture3D(k,0),ge=I.TEXTURE_3D;else if(k.isDataArrayTexture||k.isCompressedArrayTexture)w.setTexture2DArray(k,0),ge=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,k.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,k.unpackAlignment);const Ke=I.getParameter(I.UNPACK_ROW_LENGTH),Pe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ue=I.getParameter(I.UNPACK_SKIP_PIXELS),et=I.getParameter(I.UNPACK_SKIP_ROWS),Ve=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,_e.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,_e.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ne),I.pixelStorei(I.UNPACK_SKIP_ROWS,ze),I.pixelStorei(I.UNPACK_SKIP_IMAGES,L),S.isDataTexture||S.isData3DTexture?I.texSubImage3D(ge,H,W,oe,Ce,re,me,Ie,ut,ue,_e.data):k.isCompressedArrayTexture?I.compressedTexSubImage3D(ge,H,W,oe,Ce,re,me,Ie,ut,_e.data):I.texSubImage3D(ge,H,W,oe,Ce,re,me,Ie,ut,ue,_e),I.pixelStorei(I.UNPACK_ROW_LENGTH,Ke),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,Pe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),I.pixelStorei(I.UNPACK_SKIP_ROWS,et),I.pixelStorei(I.UNPACK_SKIP_IMAGES,Ve),H===0&&k.generateMipmaps&&I.generateMipmap(ge),Ye.unbindTexture()},this.initRenderTarget=function(S){je.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),Ye.unbindTexture()},this.resetState=function(){N=0,R=0,A=null,Ye.reset(),bt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return zi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===$c?"display-p3":"srgb",t.unpackColorSpace=wt.workingColorSpace===Ca?"display-p3":"srgb"}}class Da{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Le(e),this.near=t,this.far=n}clone(){return new Da(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ur extends zt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new yi,this.environmentIntensity=1,this.environmentRotation=new yi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class eu{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Cc,this.updateRanges=[],this.version=0,this.uuid=ri()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ri()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Tn=new P;class Ts{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=si(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=It(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=It(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=si(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=si(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=si(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=si(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=It(t,this.array),n=It(n,this.array),i=It(i,this.array),r=It(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Ts(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Hd extends oi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Zs;const zr=new P,Js=new P,Qs=new P,er=new Be,kr=new Be,Vd=new rt,Ko=new P,Hr=new P,$o=new P,vh=new Be,Cl=new Be,xh=new Be;class Iv extends zt{constructor(e=new Hd){if(super(),this.isSprite=!0,this.type="Sprite",Zs===void 0){Zs=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new eu(t,5);Zs.setIndex([0,1,2,0,2,3]),Zs.setAttribute("position",new Ts(n,3,0,!1)),Zs.setAttribute("uv",new Ts(n,2,3,!1))}this.geometry=Zs,this.material=e,this.center=new Be(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Js.setFromMatrixScale(this.matrixWorld),Vd.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Qs.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Js.multiplyScalar(-Qs.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;Zo(Ko.set(-.5,-.5,0),Qs,o,Js,i,r),Zo(Hr.set(.5,-.5,0),Qs,o,Js,i,r),Zo($o.set(.5,.5,0),Qs,o,Js,i,r),vh.set(0,0),Cl.set(1,0),xh.set(1,1);let a=e.ray.intersectTriangle(Ko,Hr,$o,!1,zr);if(a===null&&(Zo(Hr.set(-.5,.5,0),Qs,o,Js,i,r),Cl.set(0,1),a=e.ray.intersectTriangle(Ko,$o,Hr,!1,zr),a===null))return;const l=e.ray.origin.distanceTo(zr);l<e.near||l>e.far||t.push({distance:l,point:zr.clone(),uv:Yn.getInterpolation(zr,Ko,Hr,$o,vh,Cl,xh,new Be),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function Zo(s,e,t,n,i,r){er.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(kr.x=r*er.x-i*er.y,kr.y=i*er.x+r*er.y):kr.copy(er),s.copy(e),s.x+=kr.x,s.y+=kr.y,s.applyMatrix4(Vd)}const yh=new P,Mh=new Rt,Sh=new Rt,Dv=new P,bh=new rt,Jo=new P,Pl=new Mi,Eh=new rt,Ll=new Pa;class Uv extends le{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Tu,this.bindMatrix=new rt,this.bindMatrixInverse=new rt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Rn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingBox.expandByPoint(Jo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Mi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Jo),this.boundingSphere.expandByPoint(Jo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Pl.copy(this.boundingSphere),Pl.applyMatrix4(i),e.ray.intersectsSphere(Pl)!==!1&&(Eh.copy(i).invert(),Ll.copy(e.ray).applyMatrix4(Eh),!(this.boundingBox!==null&&Ll.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,Ll)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Rt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Tu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Gf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;Mh.fromBufferAttribute(i.attributes.skinIndex,e),Sh.fromBufferAttribute(i.attributes.skinWeight,e),yh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=Sh.getComponent(r);if(o!==0){const a=Mh.getComponent(r);bh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Dv.copy(yh).applyMatrix4(bh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Gd extends zt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ua extends nn{constructor(e=null,t=1,n=1,i,r,o,a,l,c=vn,u=vn,h,d){super(null,o,a,l,c,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Th=new rt,Nv=new rt;class tu{constructor(e=[],t=[]){this.uuid=ri(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new rt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new rt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Nv;Th.multiplyMatrices(a,t[r]),Th.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new tu(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ua(t,e,e,jn,Nn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Gd),this.bones.push(o),this.boneInverses.push(new rt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class Dc extends gn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const tr=new rt,wh=new rt,Qo=[],Ah=new Rn,Fv=new rt,Vr=new le,Gr=new Mi;class sr extends le{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new Dc(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Fv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Rn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tr),Ah.copy(e.boundingBox).applyMatrix4(tr),this.boundingBox.union(Ah)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Mi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,tr),Gr.copy(e.boundingSphere).applyMatrix4(tr),this.boundingSphere.union(Gr)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Vr.geometry=this.geometry,Vr.material=this.material,Vr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Gr.copy(this.boundingSphere),Gr.applyMatrix4(n),e.ray.intersectsSphere(Gr)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,tr),wh.multiplyMatrices(n,tr),Vr.matrixWorld=wh,Vr.raycast(e,Qo);for(let o=0,a=Qo.length;o<a;o++){const l=Qo[o];l.instanceId=r,l.object=this,t.push(l)}Qo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new Dc(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ua(new Float32Array(i*this.count),i,this.count,qc,Nn));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=i*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Sa extends oi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Le(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const ba=new P,Ea=new P,Rh=new rt,Wr=new Pa,ea=new Mi,Il=new P,Ch=new P;class Na extends zt{constructor(e=new Ht,t=new Sa){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)ba.fromBufferAttribute(t,i-1),Ea.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=ba.distanceTo(Ea);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(i),ea.radius+=r,e.ray.intersectsSphere(ea)===!1)return;Rh.copy(i).invert(),Wr.copy(e.ray).applyMatrix4(Rh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const p=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=u.getX(v),E=u.getX(v+1),y=ta(this,e,Wr,l,f,E);y&&t.push(y)}if(this.isLineLoop){const v=u.getX(g-1),m=u.getX(p),f=ta(this,e,Wr,l,v,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=p,m=g-1;v<m;v+=c){const f=ta(this,e,Wr,l,v,v+1);f&&t.push(f)}if(this.isLineLoop){const v=ta(this,e,Wr,l,g-1,p);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ta(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(ba.fromBufferAttribute(o,i),Ea.fromBufferAttribute(o,r),t.distanceSqToSegment(ba,Ea,Il,Ch)>n)return;Il.applyMatrix4(s.matrixWorld);const l=e.ray.origin.distanceTo(Il);if(!(l<e.near||l>e.far))return{distance:l,point:Ch.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const Ph=new P,Lh=new P;class Wd extends Na{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)Ph.fromBufferAttribute(t,i),Lh.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+Ph.distanceTo(Lh);e.setAttribute("lineDistance",new Ct(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ov extends Na{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Fa extends oi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Le(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Ih=new rt,Uc=new Pa,na=new Mi,ia=new P;class Ta extends zt{constructor(e=new Ht,t=new Fa){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),na.copy(n.boundingSphere),na.applyMatrix4(i),na.radius+=r,e.ray.intersectsSphere(na)===!1)return;Ih.copy(i).invert(),Uc.copy(e.ray).applyMatrix4(Ih);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,v=p;g<v;g++){const m=c.getX(g);ia.fromBufferAttribute(h,m),Dh(ia,m,l,i,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(h.count,o.start+o.count);for(let g=d,v=p;g<v;g++)ia.fromBufferAttribute(h,g),Dh(ia,g,l,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Dh(s,e,t,n,i,r,o){const a=Uc.distanceSqToPoint(s);if(a<t){const l=new P;Uc.closestPointToPoint(s,l),l.applyMatrix4(n);const c=i.ray.origin.distanceTo(l);if(c<i.near||c>i.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Uh extends nn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=vn,this.minFilter=vn,this.generateMipmaps=!1,this.needsUpdate=!0}}class pa extends nn{constructor(e,t,n,i,r,o,a,l,c){super(e,t,n,i,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class ro extends Ht{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new P,u=new Be;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const p=n+h/t*i;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new Ct(o,3)),this.setAttribute("normal",new Ct(a,3)),this.setAttribute("uv",new Ct(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ro(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ii extends Ht{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],p=[];let g=0;const v=[],m=n/2;let f=0;E(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(u),this.setAttribute("position",new Ct(h,3)),this.setAttribute("normal",new Ct(d,3)),this.setAttribute("uv",new Ct(p,2));function E(){const b=new P,N=new P;let R=0;const A=(t-e)/n;for(let C=0;C<=r;C++){const j=[],_=C/r,M=_*(t-e)+e;for(let V=0;V<=i;V++){const U=V/i,D=U*l+a,$=Math.sin(D),F=Math.cos(D);N.x=M*$,N.y=-_*n+m,N.z=M*F,h.push(N.x,N.y,N.z),b.set($,A,F).normalize(),d.push(b.x,b.y,b.z),p.push(U,1-_),j.push(g++)}v.push(j)}for(let C=0;C<i;C++)for(let j=0;j<r;j++){const _=v[j][C],M=v[j+1][C],V=v[j+1][C+1],U=v[j][C+1];e>0&&(u.push(_,M,U),R+=3),t>0&&(u.push(M,V,U),R+=3)}c.addGroup(f,R,0),f+=R}function y(b){const N=g,R=new Be,A=new P;let C=0;const j=b===!0?e:t,_=b===!0?1:-1;for(let V=1;V<=i;V++)h.push(0,m*_,0),d.push(0,_,0),p.push(.5,.5),g++;const M=g;for(let V=0;V<=i;V++){const D=V/i*l+a,$=Math.cos(D),F=Math.sin(D);A.x=j*F,A.y=m*_,A.z=j*$,h.push(A.x,A.y,A.z),d.push(0,_,0),R.x=$*.5+.5,R.y=F*.5*_+.5,p.push(R.x,R.y),g++}for(let V=0;V<i;V++){const U=N+V,D=M+V;b===!0?u.push(D,D+1,U):u.push(D+1,D,U),C+=3}c.addGroup(f,C,b===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ii(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Oa extends Ht{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],l=[],c=[],u=[];let h=e;const d=(t-e)/i,p=new P,g=new Be;for(let v=0;v<=i;v++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=h*Math.cos(f),p.y=h*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<i;v++){const m=v*(n+1);for(let f=0;f<n;f++){const E=f+m,y=E,b=E+n+1,N=E+n+2,R=E+1;a.push(y,b,R),a.push(b,N,R)}}this.setIndex(a),this.setAttribute("position",new Ct(l,3)),this.setAttribute("normal",new Ct(c,3)),this.setAttribute("uv",new Ct(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oa(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ns extends Ht{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const u=[],h=new P,d=new P,p=[],g=[],v=[],m=[];for(let f=0;f<=n;f++){const E=[],y=f/n;let b=0;f===0&&o===0?b=.5/t:f===n&&l===Math.PI&&(b=-.5/t);for(let N=0;N<=t;N++){const R=N/t;h.x=-e*Math.cos(i+R*r)*Math.sin(o+y*a),h.y=e*Math.cos(o+y*a),h.z=e*Math.sin(i+R*r)*Math.sin(o+y*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),m.push(R+b,1-y),E.push(c++)}u.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const y=u[f][E+1],b=u[f][E],N=u[f+1][E],R=u[f+1][E+1];(f!==0||o>0)&&p.push(y,b,R),(f!==n-1||l<Math.PI)&&p.push(b,N,R)}this.setIndex(p),this.setAttribute("position",new Ct(g,3)),this.setAttribute("normal",new Ct(v,3)),this.setAttribute("uv",new Ct(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ns(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class nu extends Ht{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],l=[],c=[],u=new P,h=new P,d=new P;for(let p=0;p<=n;p++)for(let g=0;g<=i;g++){const v=g/i*r,m=p/n*Math.PI*2;h.x=(e+t*Math.cos(m))*Math.cos(v),h.y=(e+t*Math.cos(m))*Math.sin(v),h.z=t*Math.sin(m),a.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(g/i),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=i;g++){const v=(i+1)*p+g-1,m=(i+1)*(p-1)+g-1,f=(i+1)*(p-1)+g,E=(i+1)*p+g;o.push(v,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new Ct(a,3)),this.setAttribute("normal",new Ct(l,3)),this.setAttribute("uv",new Ct(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new nu(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ma extends jt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ht extends oi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Le(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Le(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Md,this.normalScale=new Be(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new yi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class $n extends ht{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Be(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _n(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Le(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Le(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Le(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function sa(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Bv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function zv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Nh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)i[o++]=s[a+l]}return i}function Xd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class co{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class kv extends co{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:wu,endingEnd:wu}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],l=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case Au:r=e,a=2*t-n;break;case Ru:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Au:o=e,l=2*n-t;break;case Ru:o=1,l=n+i[1]-i[0];break;default:o=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(i-t),v=g*g,m=v*g,f=-d*m+2*d*v-d*g,E=(1+d)*m+(-1.5-2*d)*v+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*v+.5*g,b=p*m-p*v;for(let N=0;N!==a;++N)r[N]=f*o[u+N]+E*o[c+N]+y*o[l+N]+b*o[h+N];return r}}class Hv extends co{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[c+d]*h+o[l+d]*u;return r}}class Vv extends co{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class Si{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=sa(t,this.TimeBufferType),this.values=sa(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:sa(e.times,Array),values:sa(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Vv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Hv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new kv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case to:t=this.InterpolantFactoryMethodDiscrete;break;case no:t=this.InterpolantFactoryMethodLinear;break;case el:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return to;case this.InterpolantFactoryMethodLinear:return no;case this.InterpolantFactoryMethodSmooth:return el}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(i!==void 0&&Bv(i))for(let a=0,l=i.length;a!==l;++a){const c=i[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===el,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],u=e[a+1];if(c!==u&&(a!==1||c!==e[0]))if(i)l=!0;else{const h=a*n,d=h-n,p=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[h+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}Si.prototype.TimeBufferType=Float32Array;Si.prototype.ValueBufferType=Float32Array;Si.prototype.DefaultInterpolation=no;class Tr extends Si{constructor(e,t,n){super(e,t,n)}}Tr.prototype.ValueTypeName="bool";Tr.prototype.ValueBufferType=Array;Tr.prototype.DefaultInterpolation=to;Tr.prototype.InterpolantFactoryMethodLinear=void 0;Tr.prototype.InterpolantFactoryMethodSmooth=void 0;class qd extends Si{}qd.prototype.ValueTypeName="color";class xr extends Si{}xr.prototype.ValueTypeName="number";class Gv extends co{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(i-t);let c=e*a;for(let u=c+a;c!==u;c+=4)xi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class yr extends Si{InterpolantFactoryMethodLinear(e){return new Gv(this.times,this.values,this.getValueSize(),e)}}yr.prototype.ValueTypeName="quaternion";yr.prototype.InterpolantFactoryMethodSmooth=void 0;class wr extends Si{constructor(e,t,n){super(e,t,n)}}wr.prototype.ValueTypeName="string";wr.prototype.ValueBufferType=Array;wr.prototype.DefaultInterpolation=to;wr.prototype.InterpolantFactoryMethodLinear=void 0;wr.prototype.InterpolantFactoryMethodSmooth=void 0;class Mr extends Si{}Mr.prototype.ValueTypeName="vector";class Wv{constructor(e="",t=-1,n=[],i=Wf){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ri(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(qv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Si.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const u=zv(l);l=Nh(l,1,u),c=Nh(c,1,u),!i&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new xr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],u=c.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(c)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,p,g,v){if(p.length!==0){const m=[],f=[];Xd(p,m,f,g),m.length!==0&&v.push(new h(d,m,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)p[d[g].morphTargets[v]]=-1;for(const v in p){const m=[],f=[];for(let E=0;E!==d[g].morphTargets.length;++E){const y=d[g];m.push(y.time),f.push(y.morphTarget===v?1:0)}i.push(new xr(".morphTargetInfluence["+v+"]",m,f))}l=p.length*o}else{const p=".bones["+t[h].name+"]";n(Mr,p+".position",d,"pos",i),n(yr,p+".quaternion",d,"rot",i),n(Mr,p+".scale",d,"scl",i)}}return i.length===0?null:new this(r,l,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Xv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return xr;case"vector":case"vector2":case"vector3":case"vector4":return Mr;case"color":return qd;case"quaternion":return yr;case"bool":case"boolean":return Tr;case"string":return wr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function qv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Xv(s.type);if(s.times===void 0){const t=[],n=[];Xd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const is={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Yv{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const p=c[h],g=c[h+1];if(p.global&&(p.lastIndex=0),p.test(u))return g}return null}}}const jv=new Yv;class rs{constructor(e){this.manager=e!==void 0?e:jv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}rs.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ni={};class Kv extends Error{constructor(e,t){super(e),this.response=t}}class oo extends rs{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=is.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ni[e]!==void 0){Ni[e].push({onLoad:t,onProgress:n,onError:i});return}Ni[e]=[],Ni[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Ni[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let v=0;const m=new ReadableStream({start(f){E();function E(){h.read().then(({done:y,value:b})=>{if(y)f.close();else{v+=b.byteLength;const N=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:p});for(let R=0,A=u.length;R<A;R++){const C=u[R];C.onProgress&&C.onProgress(N)}f.enqueue(b),E()}},y=>{f.error(y)})}}});return new Response(m)}else throw new Kv(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{is.add(e,c);const u=Ni[e];delete Ni[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onLoad&&p.onLoad(c)}}).catch(c=>{const u=Ni[e];if(u===void 0)throw this.manager.itemError(e),c;delete Ni[e];for(let h=0,d=u.length;h<d;h++){const p=u[h];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class $v extends rs{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=is.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=io("img");function l(){u(),is.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Zv extends rs{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Ua,a=new oo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:_i,o.wrapT=c.wrapT!==void 0?c.wrapT:_i,o.magFilter=c.magFilter!==void 0?c.magFilter:tn,o.minFilter=c.minFilter!==void 0?c.minFilter:tn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=vi),c.mipmapCount===1&&(o.minFilter=tn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,i),o}}class Yd extends rs{constructor(e){super(e)}load(e,t,n,i){const r=new nn,o=new $v(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class uo extends zt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Le(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class $r extends uo{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Le(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Dl=new rt,Fh=new P,Oh=new P;class iu{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Be(512,512),this.map=null,this.mapPass=null,this.matrix=new rt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Jc,this._frameExtents=new Be(1,1),this._viewportCount=1,this._viewports=[new Rt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Fh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Fh),Oh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Oh),t.updateMatrixWorld(),Dl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Dl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Dl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Jv extends iu{constructor(){super(new on(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=_r*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class ao extends uo{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Jv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Bh=new rt,Xr=new P,Ul=new P;class Qv extends iu{constructor(){super(new on(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Be(4,2),this._viewportCount=6,this._viewports=[new Rt(2,1,1,1),new Rt(0,1,1,1),new Rt(3,1,1,1),new Rt(1,1,1,1),new Rt(3,0,1,1),new Rt(1,0,1,1)],this._cubeDirections=[new P(1,0,0),new P(-1,0,0),new P(0,0,1),new P(0,0,-1),new P(0,1,0),new P(0,-1,0)],this._cubeUps=[new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,1,0),new P(0,0,1),new P(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),Xr.setFromMatrixPosition(e.matrixWorld),n.position.copy(Xr),Ul.copy(n.position),Ul.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Ul),n.updateMatrixWorld(),i.makeTranslation(-Xr.x,-Xr.y,-Xr.z),Bh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Bh)}}class su extends uo{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Qv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class ex extends iu{constructor(){super(new La(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Ss extends uo{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(zt.DEFAULT_UP),this.updateMatrix(),this.target=new zt,this.shadow=new ex}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class tx extends uo{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class nx extends rs{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=is.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{i&&i(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return is.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){i&&i(c),is.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});is.add(e,l),r.manager.itemStart(e)}}class ix{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=zh(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=zh();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function zh(){return performance.now()}const ru="\\[\\]\\.:\\/",sx=new RegExp("["+ru+"]","g"),ou="[^"+ru+"]",rx="[^"+ru.replace("\\.","")+"]",ox=/((?:WC+[\/:])*)/.source.replace("WC",ou),ax=/(WCOD+)?/.source.replace("WCOD",rx),lx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",ou),cx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",ou),ux=new RegExp("^"+ox+ax+lx+cx+"$"),hx=["material","materials","bones","map"];class dx{constructor(e,t,n){const i=n||Dt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Dt{constructor(e,t,n){this.path=t,this.parsedPath=n||Dt.parseTrackName(t),this.node=Dt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Dt.Composite(e,t,n):new Dt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(sx,"")}static parseTrackName(e){const t=ux.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);hx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Dt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[i];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Dt.Composite=dx;Dt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Dt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Dt.prototype.GetterByBindingType=[Dt.prototype._getValue_direct,Dt.prototype._getValue_array,Dt.prototype._getValue_arrayElement,Dt.prototype._getValue_toArray];Dt.prototype.SetterByBindingTypeAndVersioning=[[Dt.prototype._setValue_direct,Dt.prototype._setValue_direct_setNeedsUpdate,Dt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_array,Dt.prototype._setValue_array_setNeedsUpdate,Dt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_arrayElement,Dt.prototype._setValue_arrayElement_setNeedsUpdate,Dt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Dt.prototype._setValue_fromArray,Dt.prototype._setValue_fromArray_setNeedsUpdate,Dt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const kh=new Be;class fx{constructor(e=new Be(1/0,1/0),t=new Be(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=kh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,kh).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Hc}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Hc);function Hh(s,e){if(e===Xf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===Rc||e===yd){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===Rc)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class px extends rs{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new xx(t)}),this.register(function(t){return new yx(t)}),this.register(function(t){return new Cx(t)}),this.register(function(t){return new Px(t)}),this.register(function(t){return new Lx(t)}),this.register(function(t){return new Sx(t)}),this.register(function(t){return new bx(t)}),this.register(function(t){return new Ex(t)}),this.register(function(t){return new Tx(t)}),this.register(function(t){return new vx(t)}),this.register(function(t){return new wx(t)}),this.register(function(t){return new Mx(t)}),this.register(function(t){return new Rx(t)}),this.register(function(t){return new Ax(t)}),this.register(function(t){return new gx(t)}),this.register(function(t){return new Ix(t)}),this.register(function(t){return new Dx(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=Qr.extractUrlBase(e);o=Qr.resolveURL(c,this.path)}else o=Qr.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){i?i(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new oo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===jd){try{o[St.KHR_BINARY_GLTF]=new Ux(e)}catch(h){i&&i(h);return}r=JSON.parse(o[St.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Yx(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](c);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case St.KHR_MATERIALS_UNLIT:o[h]=new _x;break;case St.KHR_DRACO_MESH_COMPRESSION:o[h]=new Nx(r,this.dracoLoader);break;case St.KHR_TEXTURE_TRANSFORM:o[h]=new Fx;break;case St.KHR_MESH_QUANTIZATION:o[h]=new Ox;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function mx(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const St={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class gx{constructor(e){this.parser=e,this.name=St.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const u=new Le(16777215);l.color!==void 0&&u.setRGB(l.color[0],l.color[1],l.color[2],sn);const h=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Ss(u),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new su(u),c.distance=h;break;case"spot":c=new ao(u),c.distance=h,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Oi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),i=Promise.resolve(c),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class _x{constructor(){this.name=St.KHR_MATERIALS_UNLIT}getMaterialType(){return qt}extendParams(e,t,n){const i=[];e.color=new Le(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],sn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(i)}}class vx{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class xx{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Be(a,a)}return Promise.all(r)}}class yx{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class Mx{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class Sx{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Le(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],sn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ft)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class bx{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class Ex{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Le().setRGB(a[0],a[1],a[2],sn),Promise.all(r)}}class Tx{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class wx{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Le().setRGB(a[0],a[1],a[2],sn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ft)),Promise.all(r)}}class Ax{constructor(e){this.parser=e,this.name=St.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class Rx{constructor(e){this.parser=e,this.name=St.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:$n}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Cx{constructor(e){this.parser=e,this.name=St.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class Px{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Lx{constructor(e){this.parser=e,this.name=St.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ix{constructor(e){this.name=St.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=i.byteOffset||0,c=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(p),u,h,d,i.mode,i.filter),p})})}else return null}}class Dx{constructor(e){this.name=St.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const c of i.primitives)if(c.mode!==qn.TRIANGLES&&c.mode!==qn.TRIANGLE_STRIP&&c.mode!==qn.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(u=>(l[c]=u,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const u=c.pop(),h=u.isGroup?u.children:[u],d=c[0].count,p=[];for(const g of h){const v=new rt,m=new P,f=new xi,E=new P(1,1,1),y=new sr(g.geometry,g.material,d);for(let b=0;b<d;b++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,b),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,b),l.SCALE&&E.fromBufferAttribute(l.SCALE,b),y.setMatrixAt(b,v.compose(m,f,E));for(const b in l)if(b==="_COLOR_0"){const N=l[b];y.instanceColor=new Dc(N.array,N.itemSize,N.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,l[b]);zt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return u.isGroup?(u.clear(),u.add(...p),u):p[0]}))}}const jd="glTF",qr=12,Vh={JSON:1313821514,BIN:5130562};class Ux{constructor(e){this.name=St.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,qr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==jd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-qr,r=new DataView(e,qr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Vh.JSON){const c=new Uint8Array(e,qr+o,a);this.content=n.decode(c)}else if(l===Vh.BIN){const c=qr+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Nx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=St.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const u in o){const h=Nc[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=Nc[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],p=hr[d.componentType];c[h]=p.name,l[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(p){for(const g in p.attributes){const v=p.attributes[g],m=l[g];m!==void 0&&(v.normalized=m)}h(p)},a,c,sn,d)})})}}class Fx{constructor(){this.name=St.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Ox{constructor(){this.name=St.KHR_MESH_QUANTIZATION}}class Kd extends co{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,u=i-t,h=(n-t)/u,d=h*h,p=d*h,g=e*c,v=g-c,m=-2*p+3*d,f=p-d,E=1-m,y=f-d+h;for(let b=0;b!==a;b++){const N=o[v+b+a],R=o[v+b+l]*u,A=o[g+b+a],C=o[g+b]*u;r[b]=E*N+y*R+m*A+f*C}return r}}const Bx=new xi;class zx extends Kd{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return Bx.fromArray(r).normalize().toArray(r),r}}const qn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},hr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Gh={9728:vn,9729:tn,9984:ud,9985:oa,9986:jr,9987:vi},Wh={33071:_i,33648:_a,10497:bs},Nl={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},Nc={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},Qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},kx={CUBICSPLINE:void 0,LINEAR:no,STEP:to},Fl={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Hx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ht({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Hi})),s.DefaultMaterial}function _s(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Oi(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Vx(s,e,t){let n=!1,i=!1,r=!1;for(let c=0,u=e.length;c<u;c++){const h=e[c];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],l=[];for(let c=0,u=e.length;c<u;c++){const h=e[c];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const u=c[0],h=c[1],d=c[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function Gx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Wx(s){let e;const t=s.extensions&&s.extensions[St.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Ol(t.attributes):e=s.indices+":"+Ol(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Ol(s.targets[n]);return e}function Ol(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Fc(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Xx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const qx=new rt;class Yx{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new mx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);i=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Yd(this.options.manager):this.textureLoader=new nx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new oo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return _s(r,a,i),Oi(a,i),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,u]of o.children.entries())r(u,a.children[c])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[St.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Qr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Nl[i.type],a=hr[i.componentType],l=i.normalized===!0,c=new a(i.count*o);return Promise.resolve(new gn(c,o,l))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Nl[i.type],c=hr[i.componentType],u=c.BYTES_PER_ELEMENT,h=u*l,d=i.byteOffset||0,p=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,m;if(p&&p!==h){const f=Math.floor(d/p),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let y=t.cache.get(E);y||(v=new c(a,f*p,i.count*p/u),y=new eu(v,p/u),t.cache.add(E,y)),m=new Ts(y,l,d%p/u,g)}else a===null?v=new c(i.count*l):v=new c(a,d,i.count*l),m=new gn(v,l,g);if(i.sparse!==void 0){const f=Nl.SCALAR,E=hr[i.sparse.indices.componentType],y=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,N=new E(o[1],y,i.sparse.count*f),R=new c(o[2],b,i.sparse.count*l);a!==null&&(m=new gn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let A=0,C=N.length;A<C;A++){const j=N[A];if(m.setX(j,R[A*l]),l>=2&&m.setY(j,R[A*l+1]),l>=3&&m.setZ(j,R[A*l+2]),l>=4&&m.setW(j,R[A*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Gh[d.magFilter]||tn,u.minFilter=Gh[d.minFilter]||vi,u.wrapS=Wh[d.wrapS]||bs,u.wrapT=Wh[d.wrapT]||bs,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(h){c=!0;const d=new Blob([h],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(l).then(function(h){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const m=new nn(v);m.needsUpdate=!0,d(m)}),t.load(Qr.resolveURL(h,r.path),g,void 0,p)})}).then(function(h){return c===!0&&a.revokeObjectURL(l),Oi(h,o),h.userData.mimeType=o.mimeType||Xx(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[St.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[St.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[St.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Fa,oi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Sa,oi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),i&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return ht}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[St.KHR_MATERIALS_UNLIT]){const h=i[St.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),c.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Le(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],sn),a.opacity=d[3]}h.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",h.baseColorTexture,Ft)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=pn);const u=r.alphaMode||Fl.OPAQUE;if(u===Fl.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Fl.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==qt&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Be(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==qt&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==qt){const h=r.emissiveFactor;a.emissive=new Le().setRGB(h[0],h[1],h[2],sn)}return r.emissiveTexture!==void 0&&o!==qt&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(c).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Oi(h,r),t.associations.set(h,{materials:e}),r.extensions&&_s(i,h,r),h})}createUniqueName(e){const t=Dt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[St.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Xh(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],u=Wx(c),h=i[u];if(h)o.push(h.promise);else{let d;c.extensions&&c.extensions[St.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Xh(new Ht,c,t),i[u]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const u=o[l].material===void 0?Hx(this.cache):this.getDependency("material",o[l].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),u=l[l.length-1],h=[];for(let p=0,g=u.length;p<g;p++){const v=u[p],m=o[p];let f;const E=c[p];if(m.mode===qn.TRIANGLES||m.mode===qn.TRIANGLE_STRIP||m.mode===qn.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Uv(v,E):new le(v,E),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===qn.TRIANGLE_STRIP?f.geometry=Hh(f.geometry,yd):m.mode===qn.TRIANGLE_FAN&&(f.geometry=Hh(f.geometry,Rc));else if(m.mode===qn.LINES)f=new Wd(v,E);else if(m.mode===qn.LINE_STRIP)f=new Na(v,E);else if(m.mode===qn.LINE_LOOP)f=new Ov(v,E);else if(m.mode===qn.POINTS)f=new Ta(v,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Gx(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Oi(f,r),m.extensions&&_s(i,f,m),t.assignFinalMaterial(f),h.push(f)}for(let p=0,g=h.length;p<g;p++)t.associations.set(h[p],{meshes:e,primitives:p});if(h.length===1)return r.extensions&&_s(i,h[0],r),h[0];const d=new Bt;r.extensions&&_s(i,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=h.length;p<g;p++)d.add(h[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new on(Pc.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new La(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Oi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],l=[];for(let c=0,u=o.length;c<u;c++){const h=o[c];if(h){a.push(h);const d=new rt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new tu(a,l)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],l=[],c=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const p=i.channels[h],g=i.samplers[p.sampler],v=p.target,m=v.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,E=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",E)),c.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(u)]).then(function(h){const d=h[0],p=h[1],g=h[2],v=h[3],m=h[4],f=[];for(let E=0,y=d.length;E<y;E++){const b=d[E],N=p[E],R=g[E],A=v[E],C=m[E];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const j=n._createAnimationTracks(b,N,R,A,C);if(j)for(let _=0;_<j.length;_++)f.push(j[_])}return new Wv(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=i.weights.length;l<c;l++)a.morphTargetInfluences[l]=i.weights[l]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let c=0,u=a.length;c<u;c++)o.push(n.getDependency("node",a[c]));const l=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const u=c[0],h=c[1],d=c[2];d!==null&&u.traverse(function(p){p.isSkinnedMesh&&p.bind(d,qx)});for(let p=0,g=h.length;p<g;p++)u.add(h[p]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],l=i._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(c){return i._getNodeRef(i.cameraCache,r.camera,c)})),i._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let u;if(r.isBone===!0?u=new Gd:c.length>1?u=new Bt:c.length===1?u=c[0]:u=new zt,u!==c[0])for(let h=0,d=c.length;h<d;h++)u.add(c[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Oi(u,r),r.extensions&&_s(n,u,r),r.matrix!==void 0){const h=new rt;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new Bt;n.name&&(r.name=i.createUniqueName(n.name)),Oi(r,n),n.extensions&&_s(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(i.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let u=0,h=l.length;u<h;u++)r.add(l[u]);const c=u=>{const h=new Map;for(const[d,p]of i.associations)(d instanceof oi||d instanceof nn)&&h.set(d,p);return u.traverse(d=>{const p=i.associations.get(d);p!=null&&h.set(d,p)}),h};return i.associations=c(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,l=[];Qi[r.path]===Qi.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(Qi[r.path]){case Qi.weights:c=xr;break;case Qi.rotation:c=yr;break;case Qi.position:case Qi.scale:c=Mr;break;default:switch(n.itemSize){case 1:c=xr;break;case 2:case 3:default:c=Mr;break}break}const u=i.interpolation!==void 0?kx[i.interpolation]:no,h=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+Qi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Fc(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof yr?zx:Kd;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function jx(s,e,t){const n=e.attributes,i=new Rn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(i.set(new P(l[0],l[1],l[2]),new P(c[0],c[1],c[2])),a.normalized){const u=Fc(hr[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new P,l=new P;for(let c=0,u=r.length;c<u;c++){const h=r[c];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const v=Fc(hr[d.componentType]);l.multiplyScalar(v)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new Mi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Xh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){s.setAttribute(a,l)})}for(const o in n){const a=Nc[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return wt.workingColorSpace!==sn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${wt.workingColorSpace}" not supported.`),Oi(s,e),jx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Vx(s,e.targets,t):s})}class Kx extends Zv{constructor(e){super(e),this.type=Cn}parse(e){const o=function(C,j){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(j||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(j||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(j||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(j||""))}},h=function(C,j,_){j=j||1024;let V=C.pos,U=-1,D=0,$="",F=String.fromCharCode.apply(null,new Uint16Array(C.subarray(V,V+128)));for(;0>(U=F.indexOf(`
`))&&D<j&&V<C.byteLength;)$+=F,D+=F.length,V+=128,F+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(V,V+128)));return-1<U?(C.pos+=D+U+1,$+F.slice(0,U)):!1},d=function(C){const j=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,M=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,V=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,D={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let $,F;for((C.pos>=C.byteLength||!($=h(C)))&&o(1,"no header found"),(F=$.match(j))||o(3,"bad initial token"),D.valid|=1,D.programtype=F[1],D.string+=$+`
`;$=h(C),$!==!1;){if(D.string+=$+`
`,$.charAt(0)==="#"){D.comments+=$+`
`;continue}if((F=$.match(_))&&(D.gamma=parseFloat(F[1])),(F=$.match(M))&&(D.exposure=parseFloat(F[1])),(F=$.match(V))&&(D.valid|=2,D.format=F[1]),(F=$.match(U))&&(D.valid|=4,D.height=parseInt(F[1],10),D.width=parseInt(F[2],10)),D.valid&2&&D.valid&4)break}return D.valid&2||o(3,"missing format specifier"),D.valid&4||o(3,"missing image size specifier"),D},p=function(C,j,_){const M=j;if(M<8||M>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);M!==(C[2]<<8|C[3])&&o(3,"wrong scanline width");const V=new Uint8Array(4*j*_);V.length||o(4,"unable to allocate buffer space");let U=0,D=0;const $=4*M,F=new Uint8Array(4),te=new Uint8Array($);let z=_;for(;z>0&&D<C.byteLength;){D+4>C.byteLength&&o(1),F[0]=C[D++],F[1]=C[D++],F[2]=C[D++],F[3]=C[D++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=M)&&o(3,"bad rgbe scanline format");let he=0,ce;for(;he<$&&D<C.byteLength;){ce=C[D++];const Qe=ce>128;if(Qe&&(ce-=128),(ce===0||he+ce>$)&&o(3,"bad scanline data"),Qe){const tt=C[D++];for(let Q=0;Q<ce;Q++)te[he++]=tt}else te.set(C.subarray(D,D+ce),he),he+=ce,D+=ce}const Te=M;for(let Qe=0;Qe<Te;Qe++){let tt=0;V[U]=te[Qe+tt],tt+=M,V[U+1]=te[Qe+tt],tt+=M,V[U+2]=te[Qe+tt],tt+=M,V[U+3]=te[Qe+tt],U+=4}z--}return V},g=function(C,j,_,M){const V=C[j+3],U=Math.pow(2,V-128)/255;_[M+0]=C[j+0]*U,_[M+1]=C[j+1]*U,_[M+2]=C[j+2]*U,_[M+3]=1},v=function(C,j,_,M){const V=C[j+3],U=Math.pow(2,V-128)/255;_[M+0]=Fo.toHalfFloat(Math.min(C[j+0]*U,65504)),_[M+1]=Fo.toHalfFloat(Math.min(C[j+1]*U,65504)),_[M+2]=Fo.toHalfFloat(Math.min(C[j+2]*U,65504)),_[M+3]=Fo.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const f=d(m),E=f.width,y=f.height,b=p(m.subarray(m.pos),E,y);let N,R,A;switch(this.type){case Nn:A=b.length/4;const C=new Float32Array(A*4);for(let _=0;_<A;_++)g(b,_*4,C,_*4);N=C,R=Nn;break;case Cn:A=b.length/4;const j=new Uint16Array(A*4);for(let _=0;_<A;_++)v(b,_*4,j,_*4);N=j,R=Cn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:E,height:y,data:N,header:f.string,gamma:f.gamma,exposure:f.exposure,type:R}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case Nn:case Cn:o.colorSpace=sn,o.minFilter=tn,o.magFilter=tn,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}}const Bl=new WeakMap;class $x extends rs{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new oo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Ft,n).catch(n)}decodeDracoFile(e,t,n,i,r=sn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Bl.has(e)){const l=Bl.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(i=l,new Promise((c,u)=>{i._callbacks[r]={resolve:c,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Bl.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Ht;e.index&&t.setIndex(new gn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,l=new gn(o,a);r==="color"&&(this._assignVertexColorSpace(l,i.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Ft)return;const n=new Le;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),wt.toWorkingColorSpace(n,Ft),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new oo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=Zx.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Zx(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const p=t(h,d,new Int8Array(l),c),g=p.attributes.map(v=>v.array.buffer);p.index&&g.push(p.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:p},g)}catch(p){console.error(p),self.postMessage({type:"error",id:a.id,error:p.message})}finally{h.destroy(d)}});break}};function t(o,a,l,c){const u=c.attributeIDs,h=c.attributeTypes;let d,p;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,p=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,p=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const v={index:null,attributes:[]};for(const m in u){const f=self[h[m]];let E,y;if(c.useUniqueIDs)y=u[m],E=a.GetAttributeByUniqueId(d,y);else{if(y=a.GetAttributeId(d,o[u[m]]),y===-1)continue;E=a.GetAttribute(d,y)}const b=i(o,a,d,m,f,E);m==="color"&&(b.vertexColorSpace=c.vertexColorSpace),v.attributes.push(b)}return g===o.TRIANGULAR_MESH&&(v.index=n(o,a,d)),o.destroy(d),v}function n(o,a,l){const u=l.num_faces()*3,h=u*4,d=o._malloc(h);a.GetTrianglesUInt32Array(l,h,d);const p=new Uint32Array(o.HEAPF32.buffer,d,u).slice();return o._free(d),{array:p,itemSize:1}}function i(o,a,l,c,u,h){const d=h.num_components(),g=l.num_points()*d,v=g*u.BYTES_PER_ELEMENT,m=r(o,u),f=o._malloc(v);a.GetAttributeDataArrayForAllPoints(l,h,m,v,f);const E=new u(o.HEAPF32.buffer,f,g).slice();return o._free(f),{name:c,array:E,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class Jx extends ur{constructor(){super();const e=new Tt;e.deleteAttribute("uv");const t=new ht({side:mn}),n=new ht,i=new su(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new le(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new le(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new le(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new le(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new le(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const u=new le(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new le(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new le(e,nr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new le(e,nr(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new le(e,nr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new le(e,nr(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const m=new le(e,nr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new le(e,nr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function nr(s){const e=new qt;return e.color.setScalar(s),e}const $d={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class Ar{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Qx=new La(-1,1,1,-1,0,1);class ey extends Ht{constructor(){super(),this.setAttribute("position",new Ct([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ct([0,2,0,0,2,0],2))}}const ty=new ey;class au{constructor(e){this._mesh=new le(ty,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Qx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Oc extends Ar{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof jt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=so.clone(e.uniforms),this.material=new jt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new au(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class qh extends Ar{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class ny extends Ar{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class iy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Be);this._width=n.width,this._height=n.height,t=new Kn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Cn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Oc($d),this.copyPass.material.blending=ki,this.clock=new ix}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}qh!==void 0&&(o instanceof qh?n=!0:o instanceof ny&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Be);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Yh extends Ar{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Le}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const sy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Le(0)},defaultOpacity:{value:0}},vertexShader:`

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

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Sr extends Ar{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Be(e.x,e.y):new Be(256,256),this.clearColor=new Le(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new Kn(r,o,{type:Cn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new Kn(r,o,{type:Cn});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new Kn(r,o,{type:Cn});p.texture.name="UnrealBloomPass.v"+h,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=sy;this.highPassUniforms=so.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new jt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Be(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1),new P(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=$d;this.copyUniforms=so.clone(u.uniforms),this.blendMaterial=new jt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:gi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Le,this.oldClearAlpha=1,this.basic=new qt,this.fsQuad=new au(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Be(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Sr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Sr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new jt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Be(.5,.5)},direction:{value:new Be(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
				void main() {
					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
				}`,fragmentShader:`#include <common>
				varying vec2 vUv;
				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float gaussianCoefficients[KERNEL_RADIUS];

				void main() {
					float weightSum = gaussianCoefficients[0];
					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * weightSum;
					for( int i = 1; i < KERNEL_RADIUS; i ++ ) {
						float x = float(i);
						float w = gaussianCoefficients[i];
						vec2 uvOffset = direction * invSize * x;
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += (sample1 + sample2) * w;
						weightSum += 2.0 * w;
					}
					gl_FragColor = vec4(diffuseSum/weightSum, 1.0);
				}`})}getCompositeMaterial(e){return new jt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Sr.BlurDirectionX=new Be(1,0);Sr.BlurDirectionY=new Be(0,1);const ry={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`
	
		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class oy extends Ar{constructor(){super();const e=ry;this.uniforms=so.clone(e.uniforms),this.material=new ma({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new au(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},wt.getTransfer(this._outputColorSpace)===Ot&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===sd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===rd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===od?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Vc?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===ad?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===ld&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class lo extends le{constructor(){super(lo.Geometry,new qt({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new P,t=new P,n=new Uh(16,16),i=new Uh(16,16);let r=ai;const o=lo.Geometry,a=new ma({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;

				void main() {

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				void main() {

					gl_FragColor = vec4( 1.0, 0.0, 1.0, 1.0 );

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new ma({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

				precision highp float;

				uniform vec3 screenPosition;
				uniform vec2 scale;

				attribute vec3 position;
				attribute vec2 uv;

				varying vec2 vUV;

				void main() {

					vUV = uv;

					gl_Position = vec4( position.xy * scale + screenPosition.xy, screenPosition.z, 1.0 );

				}`,fragmentShader:`

				precision highp float;

				uniform sampler2D map;

				varying vec2 vUV;

				void main() {

					gl_FragColor = texture2D( map, vUV );

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new le(o,a),u=[],h=or.Shader,d=new ma({name:h.name,uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new Le(16777215)},scale:{value:new Be},screenPosition:{value:new P}},vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:gi,transparent:!0,depthWrite:!1}),p=new le(o,d);this.addElement=function(E){u.push(E)};const g=new Be,v=new Be,m=new fx,f=new Rt;this.onBeforeRender=function(E,y,b){E.getCurrentViewport(f);const N=E.getRenderTarget(),R=N!==null?N.texture.type:ai;r!==R&&(n.dispose(),i.dispose(),n.type=i.type=R,r=R);const A=f.w/f.z,C=f.z/2,j=f.w/2;let _=16/f.w;if(g.set(_*A,_),m.min.set(f.x,f.y),m.max.set(f.x+(f.z-16),f.y+(f.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(b.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(b.projectionMatrix),v.x=f.x+e.x*C+C-8,v.y=f.y+e.y*j+j-8,m.containsPoint(v))){E.copyFramebufferToTexture(n,v);let M=a.uniforms;M.scale.value=g,M.screenPosition.value=e,E.renderBufferDirect(b,null,o,a,c,null),E.copyFramebufferToTexture(i,v),M=l.uniforms,M.scale.value=g,M.screenPosition.value=e,E.renderBufferDirect(b,null,o,l,c,null);const V=-e.x*2,U=-e.y*2;for(let D=0,$=u.length;D<$;D++){const F=u[D],te=d.uniforms;te.color.value.copy(F.color),te.map.value=F.texture,te.screenPosition.value.x=e.x+V*F.distance,te.screenPosition.value.y=e.y+U*F.distance,_=F.size/f.w;const z=f.w/f.z;te.scale.value.set(_*z,_),d.uniformsNeedUpdate=!0,E.renderBufferDirect(b,null,o,d,p,null)}}},this.dispose=function(){a.dispose(),l.dispose(),d.dispose(),n.dispose(),i.dispose();for(let E=0,y=u.length;E<y;E++)u[E].texture.dispose()}}}class or{constructor(e,t=1,n=0,i=new Le(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=i}}or.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

		precision highp float;

		uniform vec3 screenPosition;
		uniform vec2 scale;

		uniform sampler2D occlusionMap;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vUV = uv;

			vec2 pos = position.xy;

			vec4 visibility = texture2D( occlusionMap, vec2( 0.1, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.1 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.9, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.9 ) );
			visibility += texture2D( occlusionMap, vec2( 0.1, 0.5 ) );
			visibility += texture2D( occlusionMap, vec2( 0.5, 0.5 ) );

			vVisibility =        visibility.r / 9.0;
			vVisibility *= 1.0 - visibility.g / 9.0;
			vVisibility *=       visibility.b / 9.0;

			gl_Position = vec4( ( pos * scale + screenPosition.xy ).xy, screenPosition.z, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D map;
		uniform vec3 color;

		varying vec2 vUV;
		varying float vVisibility;

		void main() {

			vec4 texture = texture2D( map, vUV );
			texture.a *= vVisibility;
			gl_FragColor = texture;
			gl_FragColor.rgb *= color;

		}`};lo.Geometry=(function(){const s=new Ht,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new eu(e,5);return s.setIndex([0,1,2,0,2,3]),s.setAttribute("position",new Ts(t,3,0,!1)),s.setAttribute("uv",new Ts(t,2,3,!1)),s})();const Zd=[{id:"factory",label:"A new beginning",phase:"01 / Departure",title:"Extraordinary.<br>From the start.",copy:"A purpose-built platform. A payload full of possibility.",detail:"Tessera–1 / Mission preparation"},{id:"integration",label:"Payload integration",phase:"01 / Departure",title:"The next stop.<br>Somewhere above.",copy:"A research payload. A different environment. Preparing the systems that connect a question on Earth to an experiment in orbit.",detail:"Launch vehicle / Payload integration"},{id:"launch",label:"Liftoff",phase:"01 / Departure",title:"Leave Earth.<br>Keep the purpose.",copy:"The destination is microgravity. The purpose is to explore what different conditions could make possible for research on Earth.",detail:"Launch / Ascent"},{id:"separation",label:"Stage & fairing separation",phase:"01 / Departure",title:"Let go.<br>Go further.",copy:"The launch vehicle releases its payload. The next stage of the journey is research and manufacturing in orbit.",detail:"Stage separation / Fairing release"},{id:"orbit",label:"Orbital operations",phase:"02 / Discovery",title:"A factory.<br>Above it all.",copy:"Tessera–1 is being developed for research and manufacturing in microgravity. Study what changes. Test what can be made.",detail:"Tessera–1 / Orbital manufacturing"},{id:"bioreactor",label:"Inside the bioreactor",phase:"02 / Discovery",title:"Change the conditions.<br>Ask new questions.",copy:"Reduced settling and convection create different conditions for biological research. Controlled experiments compare the results with Earth.",detail:"Inside Tessera / Biological research"},{id:"protein",label:"Molecular discovery",phase:"02 / Discovery",title:"Look closer.<br>Learn what changes.",copy:"From protein structure to crystal growth: exploring processes relevant to medicine, with comparisons and further testing on Earth.",detail:"Molecular scale / Protein study"},{id:"medicine",label:"The research payload",phase:"02 / Discovery",title:"Bring the research<br>back to Earth.",copy:"An orbital experiment is one step. The work continues with sample analysis, comparison and further development on Earth.",detail:"Research payload / Return preparation"},{id:"payload",label:"Into Thor",phase:"03 / Return",title:"Precious cargo.<br>Purposeful return.",copy:"Thor XR–1 is being developed to bring research samples and materials back from orbit. The return is part of the experiment.",detail:"Thor XR–1 / Payload transfer"},{id:"reentry",label:"Hypersonic reentry",phase:"03 / Return",title:"Through the fire.<br>Back to Earth.",copy:"Returning through the atmosphere reconnects orbital research with the laboratories that can examine its results.",detail:"Thor XR–1 / Atmospheric reentry"},{id:"parachute",label:"Parachute descent",phase:"03 / Return",title:"A softer<br>arrival.",copy:"A controlled descent is part of the return sequence. The research payload remains at the centre of the mission.",detail:"Descent / Parachute deployment"},{id:"splashdown",label:"Splashdown",phase:"03 / Return",title:"Back on Earth.<br>Work still ahead.",copy:"Splashdown marks the handover from flight to recovery. The next destination is the team that will study the samples.",detail:"Ocean recovery / Splashdown"},{id:"recovery",label:"Air & sea recovery",phase:"03 / Return",title:"A coordinated<br>return.",copy:"Recovery connects the vehicle and its payload with transport, inspection and delivery to the research team.",detail:"Recovery / Air & sea operations"},{id:"warehouse",label:"Pharma logistics",phase:"04 / For life",title:"From orbit.<br>To the laboratory.",copy:"Recovered samples return to analysis and quality checks. Scientists compare the results and decide what to investigate next.",detail:"On Earth / Pharmaceutical development"},{id:"hospital",label:"For life on Earth",phase:"04 / For life",title:"Further out.<br>Closer to life.",copy:"Research in orbit serves an ambition on Earth: helping scientists understand disease and explore new ways to make medicines.",detail:"The destination / Life on Earth"}],ay=s=>Math.max(0,Math.min(1,s)),Bc=s=>(s=ay(s),s*s*(3-2*s)),Re=(s=0,e=0,t=0,n=1,i=0,r=0,o=0,a=1)=>[s,e,t,n,i,r,o,a],zl={factory:[[0,Re(0,-3.2,0,1.3,0,-.2)],[.55,Re(0,-3.2,1,1.3,0,-.2)],[1.2,Re(0,-4,-3,.7,0,-.2,0,0)]],tessera:[[0,Re(0,.1,0,7.2,.14,-.36)],[.45,Re(0,.1,1,7.2,.14,-.24)],[1,Re(0,3.3,0,.48,.1,-.2)],[1.65,Re(0,3.3,0,.48,.1,-.2,0,0)],[2.95,Re(0,3.3,0,.48,.1,-.2,0,0)],[3.2,Re(0,3.2,0,.48,.1,-.2)],[3.65,Re(.8,2,1,2.5,.2,-.4)],[4,Re(0,.3,0,7.7,.18,-.4,.03)],[4.55,Re(0,.2,1,8.5,.12,-.08)],[5,Re(0,0,3,11,.1,0,0,0)]],rocket:[[.6,Re(0,0,0,1,0,0,0,0)],[1,Re(0,0,0,1,0,-.15)],[1.6,Re(0,-.2,0,1,0,-.15)],[2,Re(0,-.287,0,1.2,0,-.15,0)],[2.6,Re(0,-.287,0,1.2,0,-.15,0)],[3,Re(0,.3,0,1,0,-.2,-.28)],[3.6,Re(-1,-1,-1,.9,0,-.2,-.5)],[4,Re(-3,-6,-4,.6,0,-.2,-.7,0)]],earth:[[0,Re(0,0,0,1,0,0,0,0)],[14,Re(0,0,0,1,0,0,0,0)]],reactor:[[4.65,Re(0,0,0,.3,0,0,0,0)],[5,Re(0,.4,0,1.35,.06,-.12)],[5.5,Re(0,.3,1,1.55,.05,.1)],[6,Re(0,0,3,2,0,.1,0,0)]],protein:[[5.5,Re(0,0,0,.1,0,0,0,0)],[6,Re(0,.5,0,1.4,.1,-.2,Math.PI)],[6.5,Re(0,.5,0,1.5,.2,.4,Math.PI)],[7,Re(0,0,0,.15,.3,.8,Math.PI,0)]],vial:[[6.55,Re(0,.2,0,2.2,0,0,0,0)],[7,Re(0,.3,0,2.15,.05,-.4,-.04)],[7.6,Re(0,1.4,0,1.6,.1,-.3,-.15)],[8,Re(.2,1.2,.3,.45,0,-.3,-.2)],[8.55,Re(.3,-.3,0,.3,0,-.3,-.2,0)],[12.65,Re(0,-1,0,.8,0,-.3,0,0)],[13,Re(0,-1.3,0,1.5,.05,-.3)],[14,Re(3,-.6,0,1.4,.05,-.3)]],thor:[[7.6,Re(0,-1.2,0,6.5,1.15,.1,.1,0)],[8,Re(0,-.4,0,11.5,1.05,.12,.1)],[8.6,Re(0,.3,0,11.7,.95,.18,.15)],[9,Re(-.4,.6,0,12.5,1.12,-.08,.2)],[9.4,Re(.3,.3,0,10,1.1,.28,.08)],[9.8,Re(0,-.4,0,6,.72,.1,-.08)],[10,Re(0,-1.1,0,4,.65,.1,.02)],[10.6,Re(0,-1.2,0,4,.65,.1,-.04)],[11,Re(0,-1.8,0,4.5,.6,.15,.01)],[11.4,Re(0,-1.85,0,4.5,.55,.15,-.015)],[12,Re(0,-.65,0,3.2,.7,.12,.03)],[12.6,Re(0,-1.65,0,3.2,.7,.12,.03)],[13,Re(-1,-2,-3,1.2,.7,.12,.03,0)]],hatch:[[7.7,Re(.4,0,.1,1,1.05,.12,.1,0)],[8,Re(.45,.95,.3,1.4,1.05,.12,-.6)],[8.6,Re(.4,-.03,.35,1,1.05,.12,.15,0)]],chute:[[9.65,Re(0,1.8,0,.05,0,0,0,0)],[10,Re(0,2.7,0,1.15,0,0,.03)],[10.65,Re(0,1.6,0,1.15,0,0,-.04)],[11.1,Re(3,-1.2,0,.3,0,0,-1.3,0)]],ocean:[[10.7,Re(0,-2.05,0,1,0,0,0,0)],[11,Re(0,-2.05,0,1,0,0)],[12,Re(0,-2.4,0,1,0,0)],[12.7,Re(0,-2.4,0,1,0,0,0,0)]],recovery:[[11.35,Re(4,0,-2,1,0,-.2,0,0)],[12,Re(0,0,0,1.15,0,-.2)],[12.65,Re(0,-.3,0,1.15,0,-.2)],[13,Re(-3,-3,-4,.6,0,-.2,0,0)]],warehouse:[[0,Re(0,0,0,1,0,0,0,0)],[14,Re(0,0,0,1,0,0,0,0)]],hospital:[[0,Re(0,0,0,1,0,0,0,0)],[14,Re(0,0,0,1,0,0,0,0)]]};function es(s,e){if(e<s[0][0]||e>s.at(-1)[0]){const l=[...e<s[0][0]?s[0][1]:s.at(-1)[1]];return l[7]=0,l}let t=0;for(;t<s.length-2&&e>s[t+1][0];)t++;const[n,i]=s[t],[r,o]=s[Math.min(t+1,s.length-1)],a=r===n?0:Bc((e-n)/(r-n));return i.map((l,c)=>l+(o[c]-l)*a)}function ly(s){return Bc((s-8.6)/.35)*(1-Bc((s-9.45)/.45))}const cy=["Seven thousand diseases have no treatment. Most affect too few people to run a trial.","But each patient's cells carry their disease. Those cells can fly.","One sample up. Two models back: one grown on Earth, one in orbit. The difference is the signal."],uy=[{id:"inside-tessera",label:"Inside Tessera",title:"A question arrives in orbit.",captions:["In orbit, a sealed cassette arrives at Tessera.","Patient cells. A candidate molecule. A different environment.","Here is what happens next."]},{id:"gravity",label:"Change the conditions",title:"On Earth, cells settle.",captions:["On Earth, cells settle. Many cultures grow as a single layer.","Many medicines are first tested there. The body is not a layer.","In microgravity, less settling gives cells different ways to meet."]},{id:"tissue",label:"Tissue in three dimensions",title:"See disease in another dimension.",captions:["In orbit, some cells can assemble in 3D without a scaffold.","A tumor is not flat. A liver is not flat. Now the model is not either.","A different model. New questions to ask."]},{id:"patient",label:"Start with the patient",title:"Start with the person who needs it.",captions:cy},{id:"treatment",label:"Test candidate medicines",title:"Find the leads worth taking further.",captions:["Five candidate doses. An untreated control. Four repeats.","Most wells show no signal in this illustrative screen.","A signal is a lead to test again. It is not a treatment yet."]},{id:"data",label:"Learn from every experiment",title:"Every orbit teaches the model.",captions:["Every well can come home twice: as a sample, and as data.","Pair orbital results with the same experiment on Earth.","A new experimental condition. A better-informed next question."]},{id:"formulation",label:"Develop the formulation",title:"Improve how medicines are made.",captions:["Some protein medicines are difficult to formulate for injection.","More uniform crystals could help make easier-to-inject formulations.","The partner brings the molecule. Astreia provides the environment."]},{id:"inside-return",label:"What comes back",title:"What comes back.",captions:["A sample. A dataset. A lead to investigate on Earth.","Thor is designed to bring it home. The loop starts again.","Millions of people. Thousands of diseases. More room to find answers."]}].map((s,e)=>({...s,copy:s.captions[0],phase:"",detail:"Illustrative research · Platform in development"})),jh=[...uy,{id:"homecoming",label:"Complete the orbital loop",title:"Bring the progress home.",copy:"Tessera is being developed for orbital research and production. Thor is designed to bring the samples and materials home for testing and further development.",phase:"03 / Return to Earth",detail:"Tessera–1 and Thor XR–1 · In development"},{id:"for-people",label:"For life on Earth",title:"The destination is better care.",copy:"More useful disease models. Better ways to make medicines. Astreia is building access to orbit to help researchers turn those possibilities into better care on Earth.",phase:"03 / For people",detail:"Astreia · From Earth. For Earth."}],hy=[["factory",120,"hangar","painted-dissolve","iris"],["integration",160,"hangar","iris","door"],["launch",220,"cape","door","ascent"],["separation",220,"orbit","ascent","scale-match"],["orbit",220,"orbit","scale-match","push-through"],["bioreactor",130,"bio-black","push-through","push-through"],["protein",420,"bio-black","push-through","scale-match"],["medicine",120,"bio-black","scale-match","iris"],["payload",180,"orbit","iris","scale-match"],["reentry",220,"orbit","scale-match","painted-dissolve"],["parachute",180,"ocean","painted-dissolve","scale-match"],["splashdown",150,"ocean","scale-match","scale-match"],["recovery",200,"ocean","scale-match","case"],["warehouse",130,"warehouse","case","window"],["hospital",200,"hospital","window","painted-dissolve"]];let kl=0;const wa=hy.map(([s,e,t,n,i],r)=>{const o=kl;return kl+=e,{id:s,length:e,start:o,end:kl,pin:r!==14,plate:t,in:n,out:i,reveal:r===14?[.4,.58]:[.34,.54]}}),Kh=s=>Math.max(0,Math.min(1,s));function Jd(s,e,t,n){const i=t.replace(/<br\s*\/?>/g," "),r=[];s.replaceChildren(),s.setAttribute("aria-label",i);for(const o of i.split(/(\s+)/)){if(!o)continue;const a=document.createElement("span");if(a.setAttribute("aria-hidden","true"),!o.trim())a.className="reveal-space",a.textContent=o,r.push(a);else{a.className="reveal-token";for(const l of o){const c=document.createElement("span");c.className="reveal-word",c.textContent=l,a.append(c),r.push(c)}}s.append(a)}return e.textContent=n,r}function Qd(s,e,t,[n,i],r=1,o=!1){s.forEach((a,l)=>{const c=l/Math.max(1,s.length-1),u=Kh((t-n-c*(i-n))/.14);a.style.opacity=String(u*r),a.style.transform=`translateY(${o?0:(1-u)*9}px)`}),e.style.opacity=String(Kh((t-i-.02)/.15)*r)}const dy=[[.535,.431],[.535,.557]];function fy(s){const e=Math.cos(s[6]),t=Math.sin(s[6]);return dy.map(([n,i])=>{const r=(n-.5)*1.14*s[3],o=(.5-i)*1.14*s[3];return[s[0]+r*e-o*t,s[1]+r*t+o*e]})}const py=s=>Math.max(0,Math.min(1,s)),my=s=>{const e=py(s);return e*e*e*(e*(e*6-15)+10)},zc={start:4.16,end:5.02},gy=wa[5].length/wa[4].length,$h=s=>s<=4.5?s-zc.start:4.5-zc.start+(s-4.5)*gy;function _y(s){const e=Math.max(0,Math.min(1,$h(s)/$h(zc.end))),t=my((e-.42)/.5);return{progress:e,interior:t,reactorScale:.92+.26*t}}const dn=s=>{const e=Math.max(0,Math.min(1,s));return e*e*(3-2*e)},Oe=(s=0,e=0,t=1,n=0,i=1)=>[s,e,0,t,0,0,n,i],vy={tessera:[[0,Oe(0,.1,6.4)],[.45,Oe(0,.1,6.4)],[1,Oe(0,0,3.2)],[1.28,Oe(0,0,3.2)],[1.48,Oe(0,1.4,2,0,0)],[2.98,Oe(0,3.6,.65,0,0)],[3.12,Oe(0,3.6,.65)],[3.45,Oe(0,2.9,1.6)],[3.8,Oe(0,.5,5.5)],[4.1,Oe(0,.35,7.5)],[4.55,Oe(0,.35,7.5)],[5,Oe(0,0,8.4,0,0)]],rocket:[[1.48,Oe(0,-2,.55,0,0)],[1.72,Oe(0,-.3,1.05)],[2.05,Oe(0,-.3,1.05)],[2.3,Oe(.2,.1,1,-.12)],[2.5,Oe(.8,.7,.88,-.38)],[2.65,Oe(.8,.7,.88,-.38,0)]],booster:[[2.5,Oe(.11,-1.02,.88,-.38,0)],[2.65,Oe(.11,-1.02,.88,-.38)],[3.05,Oe(-.8,-2.3,1,-.18)],[3.6,Oe(-3,-5,.85,-.32)],[3.85,Oe(-5,-8,.7,-.42,0)]],"upper-stage":[[2.5,Oe(1.87,3.37,.88,-.38,0)],[2.65,Oe(1.87,3.37,.88,-.38)],[2.98,Oe(0,3.35,1.05)],[3.08,Oe(0,3.35,1.05,0,0)]],"second-stage":[[2.98,Oe(0,2.45,1.05,0,0)],[3.08,Oe(0,2.45,1.05)],[3.35,Oe(0,1.4,1.05)],[3.75,Oe(0,-3,.8)],[4,Oe(0,-6,.6,0,0)]]},Hl=s=>dn((s-3.08)/.57),pi={offset:.84,scale:4,entry:14,start:.2,sealed:1.3,hold:1.46};function xy(s){if(s<pi.start)return{x:pi.entry,alpha:0};const e=(s-pi.start)/(pi.sealed-pi.start);if(e>=1)return{x:pi.offset,alpha:1};const t=dn(e);return{x:pi.entry-(pi.entry-pi.offset)*t,alpha:1}}function yy(s){s=Math.max(0,Math.min(14,s));const e={};for(const[b,N]of Object.entries(vy))e[b]=es(N,s);const t=dn((s-3.9)/.55);e["tessera-orbit"]=Oe(0,0,1,0,0),e.cart=Oe(0,0,1,0,0);for(const b of["reactor","protein","vial","thor"])e[b]=es(zl[b],s);if(e.protein[6]=(s-6)*.14,e.reactor=es([[4.65,Oe(0,0,.25,0,0)],[5,Oe(0,0,1.18)],[5.5,Oe(0,0,1.22)],[6,Oe(0,0,1.8,0,0)]],s),s<5){const b=_y(s);e.reactor=Oe(0,0,b.reactorScale,0,b.interior)}e.protein=es([[5.5,Oe(0,.6,.1,0,0)],[6,Oe(0,.6,.92)],[6.5,Oe(0,.6,.95,.12)],[7,Oe(0,0,.15,.2,0)]],s);const n=e.protein[7];e["protein-insulin"]=Oe(-4.8,1.1,.48,-.3+(s-6)*.13,n),e["protein-crambin"]=Oe(4.8,-.6,.48,.3-(s-6)*.1,n),s>7.35&&s<12.38&&(e.vial[7]*=1-dn((s-7.35)/.3)),s>=12.38&&(e.vial=es([[12.38,Oe(0,-1,.8,0,0)],[12.67,Oe(0,-1.15,1.2)],...zl.vial.filter(([b])=>b>=13)],s)),e["payload-case"]=es([[7.35,Oe(0,1.8,1.6,0,0)],[7.65,Oe(0,1.8,1.6)],[7.95,Oe(1.05,1.5,.85)],[8.25,Oe(1.05,-.05,.67)],[8.4,Oe(1.05,-.12,.62,0,0)],[8.55,Oe(1.05,-.12,.62,0,0)]],s);const i=dn((s-7.65)/.25)*(1-dn((s-8.38)/.22));e["thor-open"]=[...e.thor],e["thor-open"][7]*=i,e.thor[7]*=1-i;for(const[b,N]of[["fairing-left",-1],["fairing-right",1]]){const R=pi;if(s<R.hold){const A=xy(s);e[b]=Oe(N*A.x,0,R.scale,0,A.alpha)}else e[b]=s<2?es([[R.hold,Oe(N*R.offset,0,R.scale)],[1.74,Oe(N*.21,3.6,1,0,0)]],s):Oe(N*(.21+Hl(s)*3.7),3.65-Hl(s)*.8,1.05,-N*Hl(s)*.42,dn((s-2.98)/.1)*(1-dn((s-3.6)/.25)))}const r=es(zl.recovery,s);e.ship=[...r],e.ship[1]-=2.25,e.helicopter=[...r],e.helicopter[1]+=2.6;const o=.33735294602330657,a=.4529307719111538;e.helicopter[0]=e.thor[0]-(o-.5)*7.7*r[3];const l=dn((s-9.72)/.4),c=1-dn((s-11.04)/.18),u=dn((s-10.83)/.3),h=1.14*(.65+.35*l),d=fy(e.thor),p=(d[0][0]+d[1][0])/2,g=(d[0][1]+d[1][1])/2;e.chute=Oe(p,g+(2.65-1.55*u)*h,h,0,l*c),e.splash=Oe(e.thor[0],e.thor[1]-.22,e.thor[3]/4.5,0,dn((s-10.78)/.18)*(1-dn((s-11.55)/.45)));const v=e.helicopter[1]-(a-.5)*(7.7*911/2400)*r[3],m=e.thor[1]+.04;e.cable=Oe(e.thor[0],(v+m)/2,Math.max(.01,v-m)/2.8,0,r[7]);const f=e.rocket,E=4.35*f[3];e.flame=Oe(f[0]+Math.sin(f[6])*E,f[1]-Math.cos(f[6])*E,f[3],f[6],f[7]*dn((s-1.93)/.16)),e["pad-smoke"]=Oe(0,-4.6,1,0,dn((s-1.93)/.13)*(1-dn((s-2.2)/.32)));const y=1-dn((s-12.4)/.1);for(const b of["thor","thor-open","ship","helicopter","cable","chute","splash"])e[b][7]*=y;return{states:e,heat:ly(s),deployment:t,thorTurn:dn((s-8.65)/.9),inflation:l,deflation:u}}const My={width:2.8,height:1.4},Sy={vial:My},Aa=s=>Math.max(0,Math.min(1,s)),Nt=s=>{const e=Aa(s);return e*e*(3-2*e)},lu=[{title:"Start with the structure.",copy:"Protein structures help researchers investigate how molecules interact. Each structure shown here is a different example.",note:"MOLECULAR STRUCTURES AT DIFFERENT SCALES · RCSB PDB 6VSB / 4INS / 1CRN"},{title:"Change the growth conditions.",copy:`Settling and gravity-driven currents can affect crystal growth.
Changing these conditions gives researchers a different process to study.`,note:"SEDIMENTATION + CONVECTION · SCHEMATIC, NOT MOLECULAR DEFORMATION"},{title:"Compare growth in orbit.",copy:`Reduced settling can change crystal growth.
An Earth control helps researchers compare size and uniformity.`,note:"PEMBROLIZUMAB · ISS EXPERIMENT · MORE UNIFORM CRYSTALLINE SUSPENSIONS",source:!0},{title:"Examine the protein.",copy:`Three chains. One molecular assembly.
Examining its structure helps researchers study interactions relevant to disease.`,note:"6VSB · CRYO-EM STRUCTURE · CHAIN A RBD: RESIDUES 319–541"},{title:"From data to a model.",copy:`From diffraction to density to an atomic model.
A structural model helps researchers form ideas that can be tested.`,note:"X-RAY WORKFLOW · SCHEMATIC · INSULIN 4INS · LIGAND IS ILLUSTRATIVE"},{title:"A sample. A next step.",copy:`Crystal size and uniformity matter in formulation research.
Further testing determines whether a result is useful on Earth.`,note:"FORMULATION RESEARCH · OUTCOMES DEPEND ON THE PROTEIN AND PROCESS"}];function by(s){const e=Aa(s)*6,t=lu.map((r,o)=>Nt((e-o+.14)/.3)*(o===5?1:1-Nt((e-o-.84)/.3))),n=Math.min(5,Math.floor(e)),i=Aa(e-n);return{q:e,beat:n,local:i,weights:t,focus:Nt(e/.5),settle:Nt((e-1.1)/.65),order:Nt((e-2.03)/.8),explode:Nt((e-3.08)/.52),pulse:Math.sin(Math.PI*Nt((e-3.55)/.35)),exit:Nt((e-5.72)/.28)}}const ef=Array.from({length:125},(s,e)=>{const t=e%5-2,n=Math.floor(e/5)%5-2,i=Math.floor(e/25)-2;return{x:t,y:n,z:i,core:Math.max(Math.abs(t),Math.abs(n),Math.abs(i))<=1}}).sort((s,e)=>s.z-e.z),Ey={2:[["Watch a crystal begin.","Under selected conditions, molecules gather around a growing nucleus. Microgravity provides a different environment to study this process."],["Compare how it grows.","Compare crystal growth with an Earth control. Size and uniformity depend on the protein and the process."]],3:[["See the whole protein.","The spike protein shown here has three chains. Its structure is one example of how researchers investigate a molecular assembly."],["Examine each chain.","Looking at individual chains helps researchers investigate how the parts of a protein fit together."],["Study the binding domain.","The receptor-binding domain helps the spike engage its receptor. Understanding that interaction can guide research questions."]],4:[["Start with an ordered crystal.","Crystallography uses ordered crystals to investigate molecular structure. This schematic follows an X-ray workflow."],["Capture the diffraction.","Scattered X-rays form a recorded pattern. Researchers use those measurements to investigate the crystal structure."],["Reconstruct the density.","Measurements and phase estimates produce a density map. Researchers fit and refine a model against the data."],["Explore possible interactions.","A structural model can suggest interactions to investigate. Those ideas still need experimental testing."]],5:[["Compare with an Earth control.","Measure crystal size and uniformity. A controlled comparison helps identify which conditions made a difference."],["Explore a formulation.","Study concentration, particle size and flow. Further testing determines whether the material is suitable for a formulation."],["Return for further study.","Prepare the research sample for transport. Analysis and development continue with the teams on Earth."]]};function Ty(s){const e=Math.min(5,Math.floor(s)),t=Aa(s-e),n=Ey[e];if(!n)return{...lu[e],key:String(e),opacity:1,progress:t};const i=n.length,r=Math.min(i-1,Math.floor(t*i)),o=t*i-r;return{title:n[r][0],copy:n[r][1],key:`${e}-${r}`,progress:o,opacity:Nt(o/.12)*(r===i-1?1:1-Nt((o-.88)/.12))}}const tf="/astreia-preview/story-2d/",wn=(s,e="")=>`<img class="${e}" src="${tf}${s}" alt="" draggable="false" decoding="async">`,kc=(s,e="0 0 1000 650")=>`<svg viewBox="${e}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${s}</svg>`,Zh=(s="")=>`<div class="molecule-lattice ${s}">${ef.map((e,t)=>`<img data-site="${t}" src="${tf}molecular-ribbons/insulin-lattice.webp" alt="">`).join("")}</div>`;function wy(){return kc(`<g fill="#E8E3D8">${Array.from({length:145},(s,e)=>{const t=1+Math.floor(e/24),n=e*2.399963,i=t*30;return`<circle cx="${500+Math.cos(n)*i}" cy="${325+Math.sin(n)*i}" r="${e%4===0?2.7:1.2}" opacity="${.3+e%7/12}"/>`}).join("")}</g>`)}function Ay(s){const e=document.createElement("section");e.className="molecular-story",e.setAttribute("aria-label","Molecular research: from gravity to formulation"),e.hidden=!0,e.innerHTML=`<div class="molecular-art" aria-hidden="true">
 <div class="molecular-beat molecular-intro" data-beat="0"><figure>${wn("molecular-ribbons/spike.webp","molecular-float")}<figcaption>Spike <small>6VSB</small></figcaption></figure><figure>${wn("molecular-ribbons/insulin.webp","molecular-float")}<figcaption>Insulin <small>4INS</small></figcaption></figure><figure>${wn("molecular-ribbons/crambin.webp","molecular-float")}<figcaption>Crambin <small>1CRN</small></figcaption></figure></div>
 <div class="molecular-beat gravity-study" data-beat="1">${wn("molecular-ribbons/insulin-surface.webp","settling-insulin")}${kc(`<g class="solute">${Array.from({length:28},(U,D)=>`<circle cx="${230+D*137%530}" cy="${180+D*53%265}" r="${D%3===0?2:1}" style="--delay:${-D*.3}s"/>`).join("")}</g>`)} </div>
 <div class="molecular-beat orbit-study" data-beat="2">${Zh()}</div>
 <div class="molecular-beat chain-study" data-beat="3"><div class="chain-system">${wn("molecular-ribbons/spike.webp","chain-whole")}${["B","C","A"].map(U=>wn(`molecular-ribbons/chain-${U}.webp`,`chain chain-${U}`)).join("")}${wn("molecular-ribbons/rbd.webp","chain-rbd")}<div class="chain-labels"><span class="label-a">Chain A</span><span class="label-b">Chain B</span><span class="label-c">Chain C</span></div></div></div>
 <div class="molecular-beat pipeline-study" data-beat="4"><figure>${Zh("pipeline-lattice")}<figcaption>Crystal</figcaption></figure><figure>${wy()}<figcaption>Diffraction</figcaption></figure><figure><div class="density-study">${wn("molecular-ribbons/insulin-density.webp")}</div><figcaption>Density map</figcaption></figure><figure><div class="target-study">${wn("molecular-ribbons/insulin.webp")}${kc('<g stroke="#ff4e29" stroke-width="4" fill="#ff4e29"><path d="M610 250l22-12 22 12v25l-22 12-22-12Z" fill="none"/><path d="M654 250l22-12 20 12M632 287v24"/><circle cx="676" cy="238" r="5"/><circle cx="632" cy="311" r="5"/></g>')}</div><figcaption>Structure</figcaption></figure></div>
 <div class="molecular-beat formulation-study" data-beat="5"><div class="crystal-comparison"><figure>${wn("bio/crystals-earth.webp")}<figcaption>Earth control</figcaption></figure><figure>${wn("bio/crystals-microgravity.webp")}<figcaption>Microgravity experiment</figcaption></figure></div><div class="formulation-syringe">${wn("bio/syringe.webp")}</div>${wn("bio/vial.webp","formulation-ampoule")}${wn("bio/payload-case.webp","return-cassette")}<div class="sample-sheen"></div>${wn("bio/capsule.webp","formulation-capsule")}</div>
 </div><div class="molecular-caption"><h2></h2><p></p></div>`,s.parentElement.append(e);const t=[...e.querySelectorAll("[data-beat]")],n=e.querySelector(".molecular-art"),i=e.querySelector(".molecular-caption"),r=i.querySelector("h2"),o=i.querySelector("p"),a=t[0],l=e.querySelector(".settling-insulin"),c=[...e.querySelectorAll(".chain")],u=e.querySelector(".chain-whole"),h=e.querySelector(".chain-rbd"),d=e.querySelector(".chain-labels"),p=e.querySelector(".formulation-capsule"),g=t[2].querySelector(".molecule-lattice"),v=e.querySelector(".crystal-comparison"),m=e.querySelector(".formulation-syringe"),f=e.querySelector(".formulation-ampoule"),E=e.querySelector(".return-cassette"),y=e.querySelector(".sample-sheen"),b=[...t[2].querySelectorAll("[data-site]")],N=[...t[4].querySelectorAll("[data-site]")],R=[...t[4].children];e.append(p);const A=matchMedia("(prefers-reduced-motion: reduce)");let C=null,j=-1,_=[];const M=U=>{e.hidden||A.matches||(n.style.setProperty("--parallax-x",`${(U.clientX/innerWidth-.5)*8}px`),n.style.setProperty("--parallax-y",`${(U.clientY/innerHeight-.5)*6}px`))};window.addEventListener("pointermove",M,{passive:!0});function V(U,D,$=!1){U.forEach((F,te)=>{const z=ef[te],he=z.core?Nt(D*3):Nt((D-.34)*2),ce=(z.x-z.z*.55)*13.4,Te=(z.y+z.z*.4)*13.4;F.style.left=`${50+ce}%`,F.style.top=`${50+Te}%`,F.style.width=`${$?14:13}%`,F.style.opacity=String(he*(.38+(z.z+2)*.14)),F.style.transform=`translate(-50%,-50%) scale(${.55+.45*he})`})}return V(N,1,!0),{render(U,D){const $=U===6||U===7&&D<.5;if(e.hidden=!$,!$){j=-1;return}const F=`${U}:${D}:${s.clientWidth}:${s.clientHeight}`;if(j===F)return;j=F;const te=U===7,z=by(te?1:D);e.dataset.beat=String(z.beat),e.style.opacity=String(te?1:Nt(D/.045)),t.forEach((ee,J)=>{ee.style.opacity=String(te?0:z.weights[J]),ee.style.visibility=!te&&z.weights[J]>.001?"visible":"hidden"}),a.style.filter=`blur(${(1-z.focus)*6}px)`,a.style.transform=`scale(${.92+z.focus*.08})`,l.style.transform=`translate(-50%, -50%) translateY(${z.settle*50}px) rotate(${-8+z.settle*8}deg)`,g.style.opacity=String(Nt((z.q-2.01)/.16)),V(b,z.order),c.forEach(ee=>{const J=ee.className.split("chain-")[1],be={A:[130,-45],B:[-145,-40],C:[-70,125]}[J];ee.style.transform=`translate(${be[0]*z.explode/10}%,${be[1]*z.explode/10}%)`,ee.style.opacity=String(Nt(z.explode*5))}),u.style.opacity=String(1-Nt(z.explode*5)),h.style.transform=`translate(${13*z.explode}%,${-4.5*z.explode}%)`;const he=Nt((z.q-3.65)/.17);h.style.opacity=String(he*.82),c.forEach(ee=>{ee.style.opacity=String(Nt(z.explode*5)*(1-he*.5))}),d.style.opacity=String(Nt((z.explode-.4)/.6)*(1-he)),R.forEach((ee,J)=>{const be=(z.q-4)*4-J,de=Nt((be+.12)/.25)*(J===3?1:1-Nt((be-.88)/.25));ee.style.opacity=String(de),ee.style.visibility=de>.001?"visible":"hidden",ee.style.transform=`translateY(${(1-de)*12}px) scale(${.94+.06*de})`});const ce=Nt((z.q-5.29)/.14),Te=Nt((z.q-5.54)/.1),Qe=Nt((z.q-5.62)/.15),tt=Nt((z.q-5.82)/.1);v.style.opacity=String(1-ce),v.style.transform=`scale(${1-ce*.08})`,m.style.opacity=String(ce*(1-Te)),m.style.transform=`translateY(${(1-ce)*20}px)`,f.style.opacity=String(ce*(1-Te)),f.style.transform=`translateY(${(1-ce)*18}px)`,E.style.opacity=String(Qe),E.style.transform=`translate(-50%,-50%) scale(${.9+.1*Qe})`,y.style.opacity=String(ce*(1-Te));const Q=s.clientWidth,se=s.clientHeight,we=Q<=se,ve=Math.min(se/13.5,Q/16),Xe=yy(te?6.5+D:6.5).states.vial,He=Sy.vial,it=He.width*Xe[3]*ve,xt=He.height*Xe[3]*ve,at=Q*(we?.92:.9),I=se*(we?.57:.65),Kt=Q*(we?.04:.05),ot=se*(we?.13:.12),lt=at*(we?.42:.26),Ye=lt*He.height/He.width,yt=Kt+at*(we?.68:.72),je=ot+I*(we?.55:.58),w=te?1:z.exit,x=(ee,J)=>ee+(J-ee)*w;p.style.width=`${x(lt,it)}px`,p.style.height=`${x(Ye,xt)}px`,p.style.left=`${x(yt,Q/2+Xe[0]*ve)}px`,p.style.top=`${x(je,se/2-Xe[1]*ve)}px`,p.style.transform=`translate(-50%,-50%) rotate(${-Xe[6]*180/Math.PI*w}deg)`,p.style.opacity=String(te?1-Xe[7]:z.weights[5]*tt),p.style.visibility=te||z.weights[5]*tt>.001?"visible":"hidden",t[5].style.opacity=String(te?0:z.weights[5]*(1-z.exit));const G=Ty(z.q);G.key!==C&&(C=G.key,_=Jd(r,o,G.title,G.copy)),Qd(_,o,G.progress,[.02,.16],1,A.matches);const Z=Nt(z.local/.14)*(z.beat===5?1:1-Nt((z.local-.86)/.14));i.style.opacity=String(te?0:Z*G.opacity*(1-z.exit))},destroy(){window.removeEventListener("pointermove",M),e.remove()}}}const Ry=`
 <span class="thermal-model-title">THERMAL DIFFUSION<br>MODEL (TDM)</span>
 <math class="thermal-model-equation" xmlns="http://www.w3.org/1998/Math/MathML" display="block" aria-label="p sub i of T equals e to the power z sub i over T, divided by the sum over j of e to the power z sub j over T">
  <mrow>
   <msub><mi>p</mi><mi>i</mi></msub><mo stretchy="false">(</mo><mi>T</mi><mo stretchy="false">)</mo><mo>=</mo>
   <mfrac>
    <msup><mi mathvariant="normal">e</mi><mrow><mo>(</mo><msub><mi>z</mi><mi>i</mi></msub><mo>/</mo><mi>T</mi><mo>)</mo></mrow></msup>
    <mrow><msub><mo>∑</mo><mi>j</mi></msub><msup><mi mathvariant="normal">e</mi><mrow><mo>(</mo><msub><mi>z</mi><mi>j</mi></msub><mo>/</mo><mi>T</mi><mo>)</mo></mrow></msup></mrow>
   </mfrac>
  </mrow>
 </math>`;function Cy(s){const e=document.createElement("div");e.className="thermal-scale",e.setAttribute("role","img"),e.setAttribute("aria-label","Thermal view: relative intensity, low to high"),e.innerHTML='<span class="thermal-scale-label thermal-scale-high">HIGH</span><span class="thermal-scale-label thermal-scale-mid">RELATIVE<br>INTENSITY</span><span class="thermal-scale-label thermal-scale-low">LOW</span><span class="thermal-scale-ruler"></span><span class="thermal-scale-spectrum"></span>',s.append(e);const t=n=>{e.style.opacity=String(n),e.setAttribute("aria-hidden",n<.01?"true":"false")};return t(0),{render:t,destroy(){e.remove()}}}const Yr=new P;function Xn(s,e,t,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),l=Math.PI/4;Yr.copy(e),Yr[n]=0,Yr.normalize();const c=.5*o/(o+a),u=1-Yr.angleTo(s)/l;return Math.sign(Yr[t])===1?u*c:a/(o+a)+c+c*(1-u)}class ir extends Tt{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new P,l=new P,c=new P(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,p=u.length/6,g=new P,v=.5/i;for(let m=0,f=0;m<u.length;m+=3,f+=2)switch(a.fromArray(u,m),l.copy(a),l.x-=Math.sign(l.x)*v,l.y-=Math.sign(l.y)*v,l.z-=Math.sign(l.z)*v,l.normalize(),u[m+0]=c.x*Math.sign(a.x)+l.x*r,u[m+1]=c.y*Math.sign(a.y)+l.y*r,u[m+2]=c.z*Math.sign(a.z)+l.z*r,h[m+0]=l.x,h[m+1]=l.y,h[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=Xn(g,l,"z","y",r,n),d[f+1]=1-Xn(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),d[f+0]=1-Xn(g,l,"z","y",r,n),d[f+1]=1-Xn(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),d[f+0]=1-Xn(g,l,"x","z",r,e),d[f+1]=Xn(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-Xn(g,l,"x","z",r,e),d[f+1]=1-Xn(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-Xn(g,l,"x","y",r,e),d[f+1]=1-Xn(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),d[f+0]=Xn(g,l,"x","y",r,e),d[f+1]=1-Xn(g,l,"y","x",r,t);break}}}const Jh=s=>{const e=Math.max(0,Math.min(1,s));return e*e*e*(e*(e*6-15)+10)},Py=s=>Jh((s-8.72)/.28)*(1-Jh((s-9.1)/.32)),Ly=(s,e,t)=>s+(e-s)*(1-Math.exp(-t/150)),Vl=9.8,ga=(()=>{const s=[];let e=7;const t=()=>(e=e*16807%2147483647,e/2147483647);for(let n=0;n<20;n++){const i=96*Math.pow(.79,n),r=.2+(t()-.5)*2.1*(n<4?.6:1);s.push([Math.cos(r),Math.sin(r),Math.min(.12,.05+.06*t())*(n<3?.8:1),i])}return s})(),ra=ga.filter(s=>s[3]>=14);function Iy({sunDir:s,horizon:e,zenith:t}){const r=new fn(4e3,4e3,320,320);r.rotateX(-Math.PI/2);const o={uTime:{value:0},uSun:{value:s.clone()},uHorizon:{value:e.clone()},uZenith:{value:t.clone()},uCell:{value:4e3/320},uDeep:{value:new Le(70175)},uScatter:{value:new Le(744810)},uFoamBoost:{value:0},uFoamCenter:{value:new Be},uFoamRadius:{value:0}},a=u=>u.map(h=>{const d=Math.hypot(h[0],h[1]);return`vec4(${(h[0]/d).toFixed(4)},${(h[1]/d).toFixed(4)},${h[2].toFixed(3)},${h[3].toFixed(2)})`}).join(","),l=new jt({uniforms:o,vertexShader:`
   uniform float uTime,uCell;varying vec3 vWorld;varying vec2 vRest;varying float vCrest;
   const vec4 W[${ra.length}]=vec4[](${a(ra)});
   void main(){
    vec3 p=(modelMatrix*vec4(position,1.)).xyz;vec3 g=p;float crest=0.;
    for(int i=0;i<${ra.length};i++){
     vec4 w=W[i];float k=6.28318/w.w,c=sqrt(${Vl}/k),a=w.z/k;
     // Fade waves the (altitude-scaled) grid cannot resolve.
     float keep=smoothstep(3.,6.,w.w/uCell);
     float f=k*(dot(w.xy,p.xz)-c*uTime);
     g+=keep*vec3(w.x*a*cos(f),a*sin(f),w.y*a*cos(f));crest+=keep*w.z*sin(f);
    }
    vWorld=g;vRest=p.xz;vCrest=crest;
    gl_Position=projectionMatrix*viewMatrix*vec4(g,1.);
   }`,fragmentShader:`
   uniform vec3 uSun,uHorizon,uZenith,uDeep,uScatter;uniform float uTime,uFoamBoost,uFoamRadius;uniform vec2 uFoamCenter;
   varying vec3 vWorld;varying vec2 vRest;varying float vCrest;
   const vec4 W[${ga.length}]=vec4[](${a(ga)});
   float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
   float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
   float fbm(vec2 p){float s=0.,a=.5;for(int i=0;i<4;i++){s+=a*n(p);p*=2.03;a*=.5;}return s;}
   vec3 sky(vec3 r){float y=clamp(r.y,0.,1.);vec3 c=mix(uHorizon,uZenith,pow(y,.35));
    float m=max(dot(r,uSun),0.);return c+vec3(1.,.66,.4)*(pow(m,8.)*.35+pow(m,64.)*.5)*(1.-y*.6);}
   void main(){
    vec3 V=normalize(cameraPosition-vWorld);float dist=length(cameraPosition-vWorld);
    // Pixel footprint on the water: waves shorter than ~4 pixels are averaged
    // out (their slope variance becomes roughness instead of streaks).
    float foot=max(length(fwidth(vRest)),1e-3);
    vec2 slope=vec2(0.);float rough=0.;
    for(int i=0;i<${ga.length};i++){
     vec4 w=W[i];float k=6.28318/w.w,c=sqrt(${Vl}/k);
     float keep=smoothstep(2.,5.,w.w/foot);
     float f=k*(dot(w.xy,vRest)-c*uTime);
     slope+=keep*w.xy*w.z*cos(f);rough+=(1.-keep)*w.z*w.z;
    }
    // Capillary ripples close to the camera.
    float near=1.-smoothstep(1.,6.,foot*4.);
    vec2 q=vRest*.9+uTime*vec2(.5,.3);slope+=near*vec2(fbm(q)-.5,fbm(q+17.3)-.5)*.12;rough+=(1.-near)*.004;
    vec3 N=normalize(vec3(-slope.x,1.,-slope.y));
    float fres=.02+.98*pow(1.-max(dot(N,V),0.),5.);
    vec3 R=reflect(-V,N);R.y=abs(R.y);
    // Glint widens with unresolved roughness, conserving energy.
    float rs=max(dot(R,uSun),0.),sharp=mix(1400.,90.,clamp(rough*14.,0.,1.));
    vec3 glint=vec3(1.,.8,.56)*pow(rs,sharp)*(sharp/1400.)*14.;
    vec3 refl=sky(R)+glint;
    // Depth colour: dark deep water, turquoise only where crests thin out.
    float sunUp=max(uSun.y,0.);
    vec3 water=uDeep*(.6+.6*sunUp);
    float sss=pow(max(dot(V,-uSun)*.5+.5,0.),3.)*clamp(vCrest*2.2+.15,0.,1.);
    water+=uScatter*(sss*.9+.12*clamp(vCrest+.3,0.,1.));
    vec3 col=mix(water,refl,fres);
    // Foam only at the splash: a broken ring of whitewater lace.
    float ring=uFoamRadius>0.?1.-smoothstep(uFoamRadius*.55,uFoamRadius,length(vWorld.xz-uFoamCenter)):0.;
    float lace=1.-abs(fbm(vWorld.xz*.7+3.1)-fbm(vWorld.xz*1.6-uTime*.05))*3.;
    float foam=ring*uFoamBoost*smoothstep(.45,.75,fbm(vWorld.xz*.9))*(.55+.45*smoothstep(.5,.95,lace));
    col=mix(col,vec3(.92,.94,.95),clamp(foam,0.,1.));
    // Aerial perspective to the horizon.
    float haze=1.-exp(-dist*.00012);col=mix(col,uHorizon*.85,haze*haze);
    gl_FragColor=vec4(col,1.);
   }`}),c=new le(r,l);return c.frustumCulled=!1,{mesh:c,uniforms:o,follow(u){const h=Math.max(1,u.position.y/30),d=4e3*h/320;c.scale.set(h,1,h),o.uCell.value=d,c.position.set(Math.round(u.position.x/d)*d,0,Math.round(u.position.z/d)*d)},heightAt(u,h,d){let g=u,v=h,m=0;for(let f=0;f<2;f++){let E=0,y=0;m=0;for(const[b,N,R,A]of ra){const C=Math.hypot(b,N),j=b/C,_=N/C,M=2*Math.PI/A,V=Math.sqrt(Vl/M),U=R/M,D=M*(j*g+_*v-V*d),$=Math.min(1,Math.max(0,(A/12.5-3)/3)),F=$*$*(3-2*$);E+=F*j*U*Math.cos(D),y+=F*_*U*Math.cos(D),m+=F*U*Math.sin(D)}g=u-E,v=h-y}return m}}}const nf=(s,e=0,t=1)=>Math.max(e,Math.min(t,s)),pt=(s,e,t)=>{const n=nf((t-s)/(e-s));return n*n*n*(n*(n*6-15)+10)},st=(s,e,t)=>s+(e-s)*t,mt=(s,e,t)=>new P(s,e,t);function Dy({environment:s,fg:e,bg:t,camera:n,bgCamera:i,tex:r,assets:o,tesseraPivot:a,thorPivot:l,globe:c,earthMat:u,cloudMat:h,skyMat:d,starMat:p,atmoMat:g,R:v,reduced:m}){const f=new le(new ro(1,64),new qt({color:197636}));f.visible=!1,a.add(f);function E(L){const W=a.userData.hatch;if(!W){f.visible=!1;return}f.position.copy(W).add(mt(0,0,.012)),f.scale.setScalar(Math.max(.001,.42*L)),f.visible=L>.001}const y=(()=>{const W=document.createElement("canvas");W.width=W.height=128;const oe=W.getContext("2d"),Ce=oe.createImageData(128,128),_e=(Ke,Pe)=>{const Ue=Math.sin(Ke*127.1+Pe*311.7)*43758.5453;return Ue-Math.floor(Ue)},ut=(Ke,Pe)=>{const Ue=Math.floor(Ke),et=Math.floor(Pe),Ve=Ke-Ue,nt=Pe-et,Ge=Ve*Ve*(3-2*Ve),Mt=nt*nt*(3-2*nt);return(_e(Ue,et)*(1-Ge)+_e(Ue+1,et)*Ge)*(1-Mt)+(_e(Ue,et+1)*(1-Ge)+_e(Ue+1,et+1)*Ge)*Mt},ue=(Ke,Pe)=>{let Ue=0,et=.5;for(let Ve=0;Ve<5;Ve++)Ue+=et*ut(Ke,Pe),Ke*=2.1,Pe*=2.1,et*=.5;return Ue};for(let Ke=0;Ke<128;Ke++)for(let Pe=0;Pe<128;Pe++){const Ue=Pe/128*2-1,et=Ke/128*2-1,Ve=Math.hypot(Ue,et*1.15),nt=Math.max(0,Math.min(1,(1-Ve*1.25+(ue(Pe/14,Ke/14)-.5)*1.1)*2.2)),Ge=.72+.28*(1-Ke/128)+.08*(ue(Pe/9+7,Ke/9)-.5),Mt=(Ke*128+Pe)*4;Ce.data[Mt]=255*Ge,Ce.data[Mt+1]=250*Ge,Ce.data[Mt+2]=244*Math.min(1,Ge+.04),Ce.data[Mt+3]=255*nt*nt*(3-2*nt)}oe.putImageData(Ce,0,0);const ge=new pa(W);return ge.colorSpace=Ft,ge})(),b=[];for(let L=0;L<46;L++){const W=new Iv(new Hd({map:y,color:16775407,transparent:!0,depthWrite:!1,opacity:0,fog:!1,toneMapped:!1}));W.userData={d:2+L*37%60,x:(L*53%100/100-.5)*1.9,y:(L*71%100/100-.5)*1.3,size:3+L*29%14},W.visible=!1,e.add(W),b.push(W)}function N(L){const W=(L-9.4)/.21999999999999886,oe=Math.sin(Math.PI*nf(W))**2.2,Ce=mt(0,0,-1).applyQuaternion(n.quaternion),_e=mt(1,0,0).applyQuaternion(n.quaternion),ut=mt(0,1,0).applyQuaternion(n.quaternion);for(const ue of b){const ge=ue.userData.d-W*70;ue.visible=W>0&&W<1&&ge>.6,ue.visible&&(ue.position.copy(n.position).addScaledVector(Ce,ge).addScaledVector(_e,ue.userData.x*ge).addScaledVector(ut,ue.userData.y*ge),ue.scale.setScalar(ue.userData.size*(.5+ge/30)),ue.material.opacity=oe*Math.min(1,ge/3)*.9,ue.material.rotation=ue.userData.x*3)}}const R=new su(14674175,0,14,1.6);e.add(R);const A=new $n({color:14674158,roughness:.06,metalness:0,transparent:!0,opacity:.28,clearcoat:1}),C=new ht({color:2764339,roughness:.36,metalness:.85}),j=new ht({color:12172996,roughness:.28,metalness:1}),_=new ht({color:15885098,roughness:.45,metalness:.1});function M(){const L=new Bt,W=new le(new ir(1.6,.5,1,6,.08),C);L.add(W);const oe=new le(new ir(1.1,.06,.6,4,.03),A);oe.position.y=.26,L.add(oe);const Ce=new jt({uniforms:{phase:{value:0}},transparent:!0,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float phase;varying vec2 vUv;void main(){float w=.55+.45*sin(vUv.x*40.-phase*6.);vec3 c=mix(vec3(.86,.34,.38),vec3(1.,.72,.5),w);gl_FragColor=vec4(c*(.75+.5*w),.95);}"});for(let ut=0;ut<4;ut++){const ue=new le(new ii(.035,.035,.95,12),Ce);ue.rotation.z=Math.PI/2,ue.position.set(0,.24,-.21+ut*.14),L.add(ue)}const _e=new le(new Tt(.18,.08,.5),_);return _e.position.set(.72,.22,0),L.add(_e),L.userData.flow=Ce,L}const V=new ur;V.background=new Le(460808);const U=new $r(10466248,657415,.35);V.add(U);const D=new ao(16770760,40,20,.55,.7,1.5);D.position.set(-3,4,3),V.add(D,D.target);const $=new ao(11060479,30,20,.6,.8,1.5);$.position.set(3.5,2,-3),V.add($,$.target);const F=M();V.add(F);const te=new on(30,1,.05,100);V.environment=s,V.environmentIntensity=.5;{const L=new le(new ro(6,64),new ht({color:789774,roughness:.32,metalness:.2}));L.rotation.x=-Math.PI/2,L.position.y=-.45,V.add(L)}const z=new ur;z.background=new Le(14672869),z.fog=new Da(14672869,18,70),z.add(new $r(16777215,9080980,.72));const he=new Ss(16777215,1.6);he.position.set(5,12,7),he.castShadow=!0,he.shadow.mapSize.set(1024,1024),Object.assign(he.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:40}),z.add(he);const ce=new le(new fn(200,200),new ht({color:11449270,roughness:.14,metalness:.05}));ce.rotation.x=-Math.PI/2,ce.receiveShadow=!0,z.add(ce);const Te=new qt({color:15909424});for(const L of[-4.2,4.2]){const W=new le(new fn(.12,90),Te);W.rotation.x=-Math.PI/2,W.position.set(L,.01,-30),z.add(W)}const Qe=new qt({color:new Le(4,4,3.9),fog:!1}),tt=new sr(new Tt(1.2,.05,1.2),Qe,70);let Q=0;const se=new rt;for(let L=-3;L<=3;L++)for(let W=0;W<10;W++)se.makeTranslation(L*3.2,8,-W*5+6),tt.setMatrixAt(Q++,se);z.add(tt);const we=new ht({color:2051978,roughness:.5,metalness:.4}),ve=new ht({color:15890970,roughness:.5,metalness:.3}),Xe=new ht({color:15330542,roughness:.6}),He=new sr(new Tt(.12,7,.12),we,32),it=new sr(new Tt(.08,.14,5.2),ve,64),xt=new sr(new Tt(.9,.55,1.1),Xe,192);let at=0,I=0,Kt=0;for(const L of[-8,8])for(let W=0;W<8;W++){const oe=-W*5.6;for(const Ce of[-.6,.6])se.makeTranslation(L+Ce,3.5,oe),He.setMatrixAt(at++,se);for(let Ce=0;Ce<4;Ce++){const _e=.4+Ce*1.7;se.makeTranslation(L,_e,oe),it.setMatrixAt(I++,se);for(let ut=0;ut<3;ut++)(W*7+Ce*3+ut)%5!==0&&(se.makeTranslation(L,_e+.36,oe-1.6+ut*1.6),xt.setMatrixAt(Kt++,se))}}xt.count=Kt,z.add(He,it,xt);const ot=new le(new Tt(14,3.4,.06),A);ot.position.set(0,1.7,-6),z.add(ot);const lt=new le(new Tt(14,.12,.12),j);lt.position.set(0,3.4,-6),z.add(lt);const Ye=new ht({color:14014940,roughness:.32,metalness:.55}),yt=new Bt,je=new le(new ir(2.2,.06,1.1,3,.02),Ye);je.position.y=.92,yt.add(je);const w=je.clone();w.position.y=.25,yt.add(w);for(const[L,W]of[[-1.02,-.48],[1.02,-.48],[-1.02,.48],[1.02,.48]]){const oe=new le(new ii(.025,.025,.92,12),Ye);oe.position.set(L,.46,W),yt.add(oe)}const x=M();x.scale.setScalar(.7),x.position.y=1.12,yt.add(x),yt.traverse(L=>{L.isMesh&&(L.castShadow=L.receiveShadow=!0)}),z.add(yt);const G=new on(32,1,.05,200),Z=new ur;Z.background=new Le(1708557),Z.add(new $r(16769732,2759957,.42));const ee=new le(new fn(3.2,4.2),new qt({color:new Le(1.6,1.45,1.2)}));ee.position.set(0,2.4,-3.96),Z.add(ee);const J=new ht({color:3812902,roughness:.8});for(const L of[-.53,.53]){const W=new le(new Tt(.06,4.2,.06),J);W.position.set(L,2.4,-3.92),Z.add(W)}{const L=new le(new Tt(3.2,.06,.06),J);L.position.set(0,2.9,-3.92),Z.add(L)}const be=new ht({color:13481888,roughness:.9}),de=new le(new Tt(10,6,10),be);de.material.side=mn,de.position.set(0,3,1),de.receiveShadow=!0,Z.add(de);const fe=new Ss(16766630,3.2);fe.position.set(.6,3.6,-6),fe.castShadow=!0,fe.shadow.mapSize.set(1024,1024),Object.assign(fe.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:1,far:20}),Z.add(fe,fe.target);const ct=new le(new Tt(1.2,.7,.7),new ht({color:15328476,roughness:.6}));ct.position.set(.9,.35,-1.2),Z.add(ct);const ae=new Bt,De=new le(new ii(.07,.07,.26,32),A);ae.add(De);const qe=new le(new ii(.062,.062,.16,32),new ht({color:15976870,roughness:.2,transparent:!0,opacity:.85}));qe.position.y=-.04,ae.add(qe);const Je=new le(new ii(.075,.075,.06,32),_);Je.position.y=.16,ae.add(Je),ae.position.set(.75,.83,-1.15),Z.add(ae);const Se=new Bt,dt=new ht({color:15986664,roughness:.9}),$e=new le(new ir(2.1,.35,1.1,4,.12),dt);$e.position.y=.75,Se.add($e);const bt=new le(new ir(.5,.16,.8,4,.07),dt);bt.position.set(-.75,1,0),Se.add(bt);const O=new le(new ir(1.3,.08,1.16,3,.04),new ht({color:10466500,roughness:.95}));O.position.set(.35,.95,0),Se.add(O);const Ae=new le(new Tt(2.2,.08,1.2),new ht({color:12172996,roughness:.4,metalness:.7}));Ae.position.y=.55,Se.add(Ae),Se.position.set(-1.1,0,-1.9),Se.rotation.y=.05,Z.add(Se);const K=new le(new fn(1.1,4.4,24,1),new ht({color:15722200,roughness:.95,side:pn}));{const L=K.geometry.attributes.position;for(let W=0;W<L.count;W++)L.setZ(W,Math.sin(L.getX(W)*14)*.06);K.geometry.computeVertexNormals()}K.position.set(2.1,2.4,-3.85),Z.add(K);const ne=new qt({color:16769976,transparent:!0,opacity:.045,blending:gi,depthWrite:!1,side:pn});for(let L=0;L<3;L++){const W=new le(new fn(1,6),ne);W.position.set(-.9+L*.9,2.1,-2.2),W.rotation.set(-.75,0,.05*L),Z.add(W)}const xe=new le(new ii(.18,.14,.32,24),new ht({color:15195599,roughness:.7}));xe.position.set(1.35,.86,-1.3),Z.add(xe);for(let L=0;L<7;L++){const W=new le(new ns(.12,10,8),new ht({color:5995850,roughness:.8}));W.scale.set(.45,1.1,.18),W.position.set(1.35+Math.sin(L*2.1)*.1,1.12+L*.03,-1.3+Math.cos(L*2.1)*.1),W.rotation.z=Math.sin(L)*.6,Z.add(W)}Z.traverse(L=>{L.isMesh&&L!==ee&&(L.castShadow=L.receiveShadow=!0)});const Ee=new on(34,1,.05,100);Z.environment=s,Z.environmentIntensity=.85;const Ze=new Bt;Ze.visible=!1,e.add(Ze);const Ut=new P(-.82,.2,-.54).normalize(),Vt=new Le(1.02,.8,.62),ft=new Le(.16,.34,.62),Pt=Iy({sunDir:Ut,horizon:Vt,zenith:ft});Ze.add(Pt.mesh);const Qt=new Ss(16768180,3.2);Qt.castShadow=!0,Qt.shadow.mapSize.set(1024,1024),Object.assign(Qt.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:400}),Ze.add(Qt,Qt.target);const zn=new qt({transparent:!0,depthWrite:!1,opacity:0,fog:!1});r.load("/astreia-preview/story-2d/descent/cloud-bank.webp",L=>{L.colorSpace=Ft,zn.map=L,zn.needsUpdate=!0});const Zn=[];for(let L=0;L<8;L++){const W=new le(new fn(180,42),zn);W.userData.seed=L,Ze.add(W),Zn.push(W)}const Pn=480,bi=new Ht,Gt=new Float32Array(Pn*3),li=[];for(let L=0;L<Pn;L++){const W=Math.random()*Math.PI*2,oe=Math.random();li.push([Math.cos(W)*(2+8*oe),5+11*Math.random()*(1-oe*.6),Math.sin(W)*(2+8*oe)])}bi.setAttribute("position",new gn(Gt,3));const Et=(()=>{const L=document.createElement("canvas");L.width=L.height=64;const W=L.getContext("2d"),oe=W.createRadialGradient(32,32,0,32,32,32);return oe.addColorStop(0,"rgba(255,255,255,1)"),oe.addColorStop(.45,"rgba(255,255,255,.55)"),oe.addColorStop(1,"rgba(255,255,255,0)"),W.fillStyle=oe,W.fillRect(0,0,64,64),new pa(L)})(),cn=new Fa({color:15922679,size:.55,map:Et,transparent:!0,opacity:0,depthWrite:!1}),xn=new Ta(bi,cn);xn.frustumCulled=!1,Ze.add(xn),Ze.add(new $r(12572415,731712,.7));const $t=new Bt;e.add($t),$t.visible=!1;const Zt={value:0};function kn(L){const W=L.clone();return W.onBeforeCompile=oe=>{oe.uniforms.uHeat=Zt,oe.vertexShader=oe.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLocal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLocal=position;`),oe.fragmentShader=oe.fragmentShader.replace("#include <common>",`#include <common>
uniform float uHeat;varying vec3 vLocal;
vec3 heatRamp(float x){vec3 a=vec3(.16,.04,.26),b=vec3(.52,.08,.55),c=vec3(.93,.29,.2),d=vec3(1.,.8,.2),e=vec3(1.,.98,.85);return x<.25?mix(a,b,x/.25):x<.5?mix(b,c,(x-.25)/.25):x<.75?mix(c,d,(x-.5)/.25):mix(d,e,(x-.75)/.25);}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
float field=clamp(1.-(vLocal.x+1.55)/3.1,0.,1.);field=pow(field,1.4)*.85+.15;
gl_FragColor.rgb=mix(gl_FragColor.rgb,heatRamp(field),uHeat);`)},W.customProgramCacheKey=()=>"thermal",W}let Ei=!1;function os(){if(Ei||!o.thor)return;Ei=!0;const L=o.thor.clone(!0);L.traverse(W=>{W.isMesh&&(W.material=kn(W.material),W.castShadow=!0)}),L.rotation.set(0,0,0),L.position.set(0,0,0),L.scale.setScalar(1.6),$t.add(L)}const S=new qt({color:new Le(1,.42,.26),transparent:!0,blending:gi,depthWrite:!1,opacity:0,side:pn});r.load("/astreia-preview/story-2d/thermal-scene/plasma-volume-v3.webp",L=>{L.colorSpace=Ft,L.repeat.set(1/4,1/6),S.map=L,S.needsUpdate=!0});const k=new le(new fn(1,1),S);$t.add(k);const X=new Bt;Ze.add(X);{const L=new fn(22,6,44,6);L.rotateX(-Math.PI/2);const W=L.attributes.position,oe=[];for(let ue=0;ue<W.count;ue++){const ge=W.getX(ue),Ke=W.getZ(ue);W.setY(ue,2.6*(1-(ge/11)**2)+.35*Math.cos(Ke/3*Math.PI/2));const Pe=Math.min(10,Math.floor((ge+11)/22*11)),Ue=Math.abs((ge+11)/2%1-.5)<.04,et=Pe<=0||Pe>=10?[.15,.17,.19]:Pe===1||Pe===9?[.95,.38,.14]:[.94,.93,.89];oe.push(...et.map(Ve=>Ue?Ve*.8:Ve))}L.computeVertexNormals(),L.setAttribute("color",new Ct(oe,3));const Ce=new le(L,new $n({vertexColors:!0,roughness:.62,sheen:.6,sheenRoughness:.5,sheenColor:new Le(1,.95,.9),side:pn}));Ce.position.y=12,Ce.castShadow=!0,X.add(Ce);const _e=[];for(let ue=0;ue<=20;ue++){const ge=-10+ue,Ke=12+2.6*(1-(ge/11)**2);for(const Pe of[-2.6,2.6])_e.push(ge,Ke,Pe,ge*.04,0,Pe*.05)}const ut=new Wd(new Ht().setAttribute("position",new Ct(_e,3)),new Sa({color:7236454,transparent:!0,opacity:.22}));X.add(ut)}const Y=(()=>{const L=document.createElement("canvas");L.width=L.height=256;const W=L.getContext("2d"),oe=W.createRadialGradient(128,128,40,128,128,128);oe.addColorStop(0,"rgba(255,255,255,0)"),oe.addColorStop(.55,"rgba(255,255,255,.9)"),oe.addColorStop(.75,"rgba(255,255,255,.35)"),oe.addColorStop(1,"rgba(255,255,255,0)"),W.fillStyle=oe,W.fillRect(0,0,256,256);for(let _e=0;_e<900;_e++){const ut=Math.random()*Math.PI*2,ue=60+Math.random()*60;W.fillStyle=`rgba(255,255,255,${Math.random()*.5})`,W.beginPath(),W.arc(128+Math.cos(ut)*ue,128+Math.sin(ut)*ue,Math.random()*3,0,7),W.fill()}const Ce=new pa(L);return Ce.colorSpace=Ft,Ce})(),H=new le(new fn(1,1),new qt({map:Y,transparent:!0,depthWrite:!1,opacity:0}));H.rotation.x=-Math.PI/2,H.position.y=.15,Ze.add(H);const re=new Bt;Ze.add(re);{const L=new le(new Tt(40,3,16),new ht({color:2041389,roughness:.42,metalness:.35}));L.position.y=.6,re.add(L);const W=new le(new Tt(39,.2,15.2),new ht({color:3883077,roughness:.85}));W.position.y=2.2,re.add(W);const oe=new le(new Oa(4.2,4.6,64),new qt({color:15987178}));oe.rotation.x=-Math.PI/2,oe.position.y=2.32,re.add(oe);for(const Ke of[-16,16]){const Pe=new le(new Tt(5,3.2,5.5),new ht({color:14277851,roughness:.5}));Pe.position.set(Ke,3.9,4.5),re.add(Pe)}const Ce=new ht({color:15885098,roughness:.45,metalness:.3}),_e=new le(new ii(.5,.6,7,16),Ce);_e.position.set(-12,5.7,-5),re.add(_e);const ut=new le(new Tt(14,.6,.6),Ce);ut.position.set(-6,9,-5),ut.rotation.z=.32,re.add(ut),[3104138,9058858,13157046,3104138].forEach((Ke,Pe)=>{const Ue=new le(new Tt(6,2.6,2.5),new ht({color:Ke,roughness:.6,metalness:.3}));Ue.position.set(10+Pe%2*6.2,3.6+Math.floor(Pe/2)*2.62,-5),re.add(Ue)});const ge=new ht({color:14277076,roughness:.4,metalness:.6});for(const Ke of[-7.6,7.6]){const Pe=new le(new Tt(38,.08,.08),ge);Pe.position.set(0,3.3,Ke),re.add(Pe);const Ue=new sr(new Tt(.08,1.1,.08),ge,20);for(let et=0;et<20;et++){const Ve=new rt().makeTranslation(-19+et*2,2.8,Ke);Ue.setMatrixAt(et,Ve)}re.add(Ue)}re.traverse(Ke=>{Ke.isMesh&&(Ke.castShadow=Ke.receiveShadow=!0)})}re.position.set(-46,0,10);const me=new Bt;Ze.add(me);const Ie=new Bt;let Ne=!1;const ze=new Na(new Ht().setFromPoints([mt(0,0,0),mt(0,-1,0)]),new Sa({color:1119512}));return Ze.add(ze),{bio:V,bioCam:te,lab:z,labCam:G,care:Z,careCam:Ee,idle(){R.intensity=0},prepare(){if(os(),!Ne&&o.helicopter){Ne=!0;const L=o.helicopter;L.scale.setScalar(1),me.add(L);const W=[];L.traverse(Ce=>{Ce.isMesh&&/^blade\d/.test(Ce.name)&&W.push(Ce)});const oe=L.getObjectByName("rotorcap");if(oe&&W.length){const Ce=new Rn().setFromObject(oe).getCenter(mt(0,0,0));L.worldToLocal(Ce),Ie.position.copy(Ce),L.add(Ie);for(const _e of W)_e.getWorldPosition(mt(0,0,0)),Ie.attach(_e)}L.traverse(Ce=>{Ce.isMesh&&(Ce.castShadow=!0)})}},pose(L,W,oe,Ce){const _e={scene:"world",fade:0,fadeColor:"#000",heat:0},ut=F.userData.flow;if(ut.uniforms.phase.value=m?L*4:L*4+W*.6,x.userData.flow.uniforms.phase.value=ut.uniforms.phase.value,L<5){const Ue=a.userData.hatch||mt(0,0,.8),et=a.localToWorld(Ue.clone()),Ve=mt(0,0,1).applyQuaternion(a.quaternion).normalize(),nt=pt(4.5,4.75,L),Ge=pt(4.7,4.995,L),Mt=et.clone().addScaledVector(Ve,st(9,.22,Ge));return E(pt(4.72,4.92,L)),n.position.lerp(Mt,nt),n.up.set(0,1,0),n.lookAt(et),n.fov=Ce.fov,n.updateProjectionMatrix(),R.position.copy(n.position),R.intensity=5*nt,_e}n.fov=Ce.fov,n.updateProjectionMatrix(),R.intensity=0,f.visible=!1;for(const Ue of b)Ue.visible=!1;if(L<7.5){_e.scene="bio";const Ue=pt(5,5.3,L)*(1-pt(7.36,7.5,L));D.intensity=40*Ue,$.intensity=30*Ue,U.intensity=.35*Ue;const et=st(-.5,.6,pt(5,7.4,L));F.rotation.set(.12,et,0);const Ve=pt(5.45,5.6,L)*(1-pt(6.95,7.05,L));return F.visible=Ve<.999,te.position.set(Math.sin(et*.3)*3.2,1.7+st(0,-.3,pt(6.9,7.4,L)),st(9,4.4,pt(5,5.45,L))*(1-.1*pt(6.9,7.4,L))*st(1,.35,pt(7.36,7.5,L))),te.lookAt(0,.1,0),D.target.position.set(0,0,0),$.target.position.set(0,0,0),_e.bioDim=Ve,_e}if(L<8.5){const Ue=pt(7.5,7.72,L),et=a.localToWorld((a.userData.hatch||mt(0,0,.8)).clone()),Ve=mt(0,0,1).applyQuaternion(a.quaternion).normalize();E(1-pt(7.6,7.72,L));const nt=pt(7.7,8.1,L),Ge=pt(8.15,8.35,L),Mt=et.clone().addScaledVector(Ve,.2),Yt=l.localToWorld(mt(1.4,0,.3));F.visible=!1,_e.transfer={from:Mt,to:Yt,move:nt},l.position.addScaledVector(mt(Math.cos(-.52),Math.sin(-.52),0),Ge*1.6);const At=a.position.clone().add(mt(1.1,-.9,.8)),rn=At.clone().add(mt(st(3,5,Ge),st(2.2,3.2,Ge),st(8.5,11,Ge))),Fn=et.clone().addScaledVector(Ve,.22);return n.position.copy(Fn.lerp(rn,Ue)),n.lookAt(et.clone().lerp(At,Ue)),_e}if(L<9.5){os(),l.visible=!1,a.visible=!1,$t.visible=!0,Ze.visible=!1;const Ue=pt(8.5,9.5,L),et=Math.sin(Ue*Math.PI*1.6)*.35;$t.position.copy(a.position).add(mt(0,-30*Ue,0)),$t.rotation.set(-.25+et*.3,.4,-.38+et),n.position.copy($t.position).add(mt(-3.5,4.2,10.5)),n.lookAt($t.position);const Ve=Py(L);_e.heat=m?Ve:Ly(Ce.heat,Ve,oe),Zt.value=_e.heat;const nt=$t.worldToLocal(n.position.clone()),Ge=m?1:.85+.3*_e.heat;k.rotation.set(Math.atan2(-nt.y,nt.z),0,et*.06),k.scale.set(9*Ge,3.4,1),k.position.set(-3.3+4.5*Ge,0,0),S.opacity=_e.heat;const Mt=Math.floor(((m?0:W*10)+L*56)%24);return S.map&&S.map.offset.set(Mt%4/4,1-(Math.floor(Mt/4)+1)/6),i.position.set(0,v+st(420,150,Ue)+.05,0),g.uniforms.strength.value=1.6+.25*_e.heat,u.color.setRGB(st(1,.34,_e.heat),st(1,.42,_e.heat),st(1,.72,_e.heat)),h.color.setRGB(st(1,.3,_e.heat),st(1,.34,_e.heat),st(1,.48,_e.heat)),_e.exposure=st(1,.8,_e.heat),N(L),_e}if(u.color.setRGB(1,1,1),h.color.setRGB(1,1,1),Zt.value=0,S.opacity=0,L<12.5){os(),_e.scene="sea",l.visible=!1,a.visible=!1,$t.visible=!0,Ze.visible=!0,c.visible=!1,p.opacity=0,d.uniforms.space.value=0,d.uniforms.studio.value=0,d.uniforms.hor.value.copy(Vt),d.uniforms.zen.value.copy(ft),d.uniforms.sunDir.value=Ut,i.position.set(0,v+.4,0),d.uniforms.sea.value=1;const Ue=m?L*6:W,et=pt(9.5,10.8,L),Ve=pt(10.76,10.82,L);Pt.uniforms.uTime.value=Ue;const nt=Math.pow(1-et,1.7),Ge=pt(12,12.3,L),Mt=pt(12.3,12.45,L),Yt=mt(st(-80,-34,pt(11.35,11.9,L)),0,26);re.position.set(Yt.x,Pt.heightAt(Yt.x,Yt.z,Ue)*.3-.2,Yt.z),re.rotation.y=.25;let At=st(0,140,nt),rn=st(0,-60,nt),Fn=1500*nt;const ci=Pt.heightAt(At,rn,Ue),ws=(m?0:Math.sin(W*1.25))*.13*(1-Ve)+(1-et)*0;let ho=ci+.3;Ve>0&&(Fn=st(Fn,ho,Ve));const Ti=st(At,Yt.x,Ge),Ln=st(rn,Yt.z,Ge),Wt=st(Fn,st(18,3.2,Mt),Ge);$t.position.set(Ti,Wt,Ln);const As=Pt.heightAt(Ti+2,Ln,Ue)-Pt.heightAt(Ti-2,Ln,Ue),Rs=Pt.heightAt(Ti,Ln+2,Ue)-Pt.heightAt(Ti,Ln-2,Ue);$t.rotation.set(st(ws*.6,Rs*.18,Ve)*(1-Ge),.5,st(ws,-As*.18,Ve)*(1-Ge));const as=pt(9.5,9.66,L),Vi=pt(10.84,11.25,L),Ba=m?0:Math.sin(W*2.1)*.03,Rr=pt(10.95,11.15,L);X.visible=as>.001&&Rr<.999,X.position.set(At-st(0,14,Vi),st(Fn,ci-.6*Rr,Vi),rn-st(0,10,Vi)),X.rotation.set(0,.5,st(ws*.5,0,Ve)+Vi*.25),X.scale.set(.35+.65*as,Math.max(.06,(1+Ba)*(1-.9*Vi)),.5+.5*as),X.traverse(yn=>{yn.material&&(yn.material.transparent=!0,yn.material.opacity=yn.isLineSegments?.22*(1-Ve):(1-Vi*.5)*(1-Rr))});for(const yn of Zn)yn.visible=!1;const In=Math.max(0,(L-10.78)*5.5);if(xn.visible=In>0&&In<2.2,cn.opacity=.9*(1-pt(.8,2.2,In)),xn.visible){const yn=Gt;for(let hi=0;hi<Pn;hi++){const Ir=li[hi];yn[hi*3]=At+Ir[0]*In,yn[hi*3+1]=Math.max(ci,ho+Ir[1]*In-4.9*In*In),yn[hi*3+2]=rn+Ir[2]*In}bi.attributes.position.needsUpdate=!0}const Cr=pt(10.78,11.6,L);Pt.uniforms.uFoamCenter.value.set(At,rn),Pt.uniforms.uFoamRadius.value=Cr>0?4+16*Cr:0,Pt.uniforms.uFoamBoost.value=1-Cr*.7;const kt=pt(11.45,11.85,L),En=mt(st(160,Ti,kt),st(80,Wt+24,kt),st(-90,Ln,kt));me.visible=L>11.4,me.position.copy(En),me.rotation.set(0,st(2.4,1.7,kt),st(-.15,0,kt)),Ie.rotation.y=m?L*40:W*28;const fo=pt(11.85,11.98,L)*(1-pt(12.42,12.5,L));ze.visible=me.visible&&fo>.01;const ui=me.position.clone().add(mt(0,-1.2,0)),Jt=ui.clone().lerp($t.position.clone().add(mt(0,.6,0)),fo);ze.geometry.setFromPoints([ui,Jt]);const Pr=mt((Ti+Yt.x+En.x)/3,(Wt+3+En.y)/3+2,(Ln+Yt.z+En.z)/3),Cs=n.aspect<1?68:46,ls=n.aspect<1?0:7,Lr=mt(At+6,Fn+10,rn+Cs),po=mt(At+20,ci+8,rn+22),cs=Pr.clone().add(mt(34,20,62)),Ps=Lr.clone().lerp(po,pt(10.55,10.85,L)).lerp(cs,pt(11.25,11.75,L)),wi=mt(At-ls*.99,Fn+5-ls*.2,rn+ls*.15).lerp(mt(At,ci+.5,rn),pt(10.55,10.85,L)).lerp(Pr,pt(11.25,11.75,L));n.position.copy(Ps),n.lookAt(wi),i.quaternion.copy(n.quaternion),Pt.follow(n),Qt.target.position.copy(wi),Qt.position.copy(wi).addScaledVector(Ut,120),N(L);const Ai=pt(12.3,12.5,L);if(Ai>0){const yn=$t.position.clone().add(mt(0,.55,0));n.position.lerp(yn.clone().add(mt(.4,st(12,.18,Ai),.6)),Ai),n.lookAt(yn)}return _e}if(L<13.5){_e.scene="lab";const Ue=pt(12.5,13.5,L),et=pt(12.5,12.78,L),Ve=pt(13.22,13.5,L),nt=mt(0,1.12,0),Ge=mt(st(6.5,3.6,Ue),st(3.4,2.3,Ue),st(10,5.6,Ue)),Mt=nt.clone().add(mt(0,.02,.5)).lerp(Ge,et),Yt=nt.clone().lerp(mt(0,1,-1),et);return G.position.copy(Mt.lerp(mt(0,7.55,1.05),Ve)),G.lookAt(Yt.lerp(mt(0,8,1),Ve)),x.rotation.y=st(-.4,.3,Ue),_e}_e.scene="care";const ue=pt(13.5,14.4,L),ge=pt(13.5,13.8,L),Ke=mt(st(3.4,2.4,ue),st(1.9,1.5,ue),st(3.6,2,ue)),Pe=mt(st(0,.5,ue),st(1.4,1.1,ue),-2.2);return Ee.position.copy(mt(.1,2.5,-3.62).lerp(Ke,ge)),Ee.lookAt(mt(0,2.45,-3.96).lerp(Pe,ge)),fe.target.position.set(.8,.8,-1.2),_e},cassette:M,thorFree:$t,ocean:Ze,heli:me}}function Qh(){var i;const s=document.querySelector(".proto-stage"),e=document.querySelector(".proto-track");(i=document.querySelector(".proto-loader"))==null||i.remove(),document.body.classList.add("is-styled","mission-static");const t=document.createElement("div");t.className="static-mission";const n=["hangar","integration","cape","orbit","orbit","bio-black","bio-black","bio-black","orbit","orbit","ocean","ocean","ocean","warehouse","hospital-happy"];for(const[r,o]of Zd.entries()){const a=document.createElement("section");a.id=o.id;const l=document.createElement("img");l.src=r===0?"/astreia-preview/prototype/hero-poster/landscape.webp":`/astreia-preview/story-2d/plate-${n[r]}.webp`,l.alt="",l.loading=r===0?"eager":"lazy",l.decoding="async",n[r]!=="bio-black"&&a.append(l);const c=document.createElement("div");c.className="static-mission-copy";const u=document.createElement("p");u.className="pc-kicker",u.textContent=`${String(r+1).padStart(2,"0")} / 15 · ${o.label}`;const h=document.createElement(r===0?"h1":"h2");h.textContent=o.title.replace(/<br\s*\/?>/g," ");const d=document.createElement("p");if(d.textContent=o.copy,c.append(u,h,d),r===6)for(const p of lu){const g=document.createElement("h3"),v=document.createElement("p"),m=document.createElement("small");g.textContent=p.title,v.textContent=p.copy,m.textContent=p.note,c.append(g,v,m)}a.append(c),t.append(a)}return s.replaceWith(t),e.remove(),document.querySelectorAll("[data-reveal]").forEach(r=>r.classList.add("is-in")),{navigationBoundary(){const r=document.getElementById("site-footer");return r?r.getBoundingClientRect().top+scrollY-innerHeight:1/0},scrollTo(r){window.scrollTo(0,r)},goHash(r){const o=r==="#constellation"?"factory":r.slice(1),a=t.querySelector(`[id="${CSS.escape(o)}"]`);return a?(window.scrollTo(0,a.getBoundingClientRect().top+scrollY),!0):!1},destroy(){document.body.classList.remove("mission-static")}}}const ed=Zd.map((s,e)=>e>=5&&jh[e-5]?{...s,...jh[e-5],id:s.id}:{...s}),Uy=()=>vf(()=>import("./inside-tessera-D3_LDOK2.js"),[]),Gl={},Wl={},Ny=s=>s===0?0:s===14?.96:s===6?.075:.73;function By(){const s=new AbortController,{signal:e}=s;let t=!1,n=0;document.body.classList.add("is-styled");const i=new URLSearchParams(location.search).has("focus")?2:0,r=i?wa.slice(0,i):wa,o=r.reduce((T,B)=>T+B.length,0);i&&document.documentElement.classList.add("is-focus");const a=(T,B=0,q=1)=>Math.max(B,Math.min(q,T)),l=(T,B,q)=>{const ie=a((q-T)/(B-T));return ie*ie*ie*(ie*(ie*6-15)+10)},c=(T,B,q)=>T+(B-T)*q,u=54.5,h=matchMedia("(prefers-reduced-motion: reduce)").matches||new URLSearchParams(location.search).get("motion")==="reduce";if(h)return Qh();document.documentElement.style.setProperty("--act-length",o);const d=document.querySelector(".proto-canvas"),p=document.querySelector(".proto-stage");let g;try{g=new Lv({canvas:d,antialias:!0,powerPreference:"high-performance"})}catch{return hf()}g.outputColorSpace=Ft,g.toneMapping=Vc,g.toneMappingExposure=1,g.autoClear=!1,g.shadowMap.enabled=!0,g.shadowMap.type=nd;const v=Math.min(devicePixelRatio||1,1.75);let m=Math.min(v,1.5);const f=new ur,E=new ur,y=new on(32,1,.1,6e3),b=new on(32,1,1,4e5),N=new Lc(g),R=N.fromScene(new Jx,.04).texture;f.environment=R,f.environmentIntensity=.55;const A=new P(-1,.12,-.55).normalize(),C=new Ss(16773600,3.2);C.position.copy(A).multiplyScalar(200),f.add(C,C.target),C.castShadow=!0,C.shadow.mapSize.set(1024,1024),C.shadow.bias=-4e-4,C.shadow.normalBias=.02,Object.assign(C.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:60});const j=new $r(10467544,1709072,.45);f.add(j);const _=new Ss(7315414,0);_.position.set(.2,-1,.3),f.add(_,_.target);const M=new ao(16771276,900,60,.5,.6,1.6);f.add(M,M.target);const V=new ao(12374783,700,60,.55,.7,1.6);f.add(V,V.target);const U=new Bt;f.add(U);const D=T=>T,$=D(new ht({color:2895408,roughness:.24,metalness:.15})),F=new le(new fn(84,84),$);F.rotation.x=-Math.PI/2,F.position.y=.05,F.receiveShadow=!0,U.add(F);const te=D(new qt({color:14206090}));for(const[T,B,q,ie]of[[30,.15,0,13],[30,.15,0,-13],[.15,26,15,0],[.15,26,-15,0]]){const ye=new le(new fn(T,B),te);ye.rotation.x=-Math.PI/2,ye.position.set(q,.07,ie),U.add(ye)}const z=D(new ht({color:1382170,roughness:.28,metalness:.6})),he=new le(new Oa(3.4,13,64),z);he.rotation.x=-Math.PI/2,he.position.y=u-2.6,he.receiveShadow=!0,U.add(he);const ce=D(new ht({color:2764080,roughness:.45,metalness:.7})),Te=new le(new nu(13,.06,8,96),ce);Te.rotation.x=Math.PI/2,Te.position.y=u-1.5,U.add(Te);const Qe=D(new ht({color:3422010,roughness:.75,metalness:.25}));for(const T of[-42,42]){const B=new le(new Tt(1,92,84),Qe);B.position.set(T,46,0),U.add(B)}const tt=new le(new Tt(84,1,84),Qe);tt.position.y=92,U.add(tt);const Q=D(new qt({color:16774370}));for(let T=-3;T<=3;T++){const B=new le(new Tt(.6,.15,76),Q);B.position.set(T*11,91.3,0),U.add(B)}const se=D(new ht({color:6171148,roughness:.5,metalness:.6}));for(const T of[-30,30])for(let B=-3;B<=3;B++){const q=new le(new Tt(.7,90,.7),se);q.position.set(T,45,B*11),U.add(q)}for(const T of[-30,30])for(let B=10;B<90;B+=12){const q=new le(new Tt(.5,.5,68),se);q.position.set(T,B,0),U.add(q)}const we=D(new ht({color:2500908,roughness:.6,metalness:.3})),ve=new le(new Tt(42,92,1),we),Xe=ve.clone();ve.position.set(-21,46,-42),Xe.position.set(21,46,-42),U.add(ve,Xe),U.traverse(T=>{T.isMesh&&(T.receiveShadow=!0)});const He=new le(new ro(4e3,64),new ht({color:1775378,roughness:1,transparent:!0}));He.rotation.x=-Math.PI/2,f.add(He);const it=new Bt,xt=new ht({color:2237994,roughness:.6,metalness:.5});for(const[T,B]of[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]]){const q=new le(new Tt(.5,72,.5),xt);q.position.set(T,36,B),it.add(q)}for(let T=6;T<72;T+=6){const B=new le(new Tt(3.7,.3,3.7),xt);B.position.y=T,it.add(B)}it.position.set(-10,0,-3),f.add(it);const at=new le(new ii(9,10,1.2,48),new ht({color:3420460,roughness:.9}));at.position.y=.6,f.add(at),f.fog=new Da(14261100,200,2600);const I=new jt({side:mn,depthWrite:!1,uniforms:{sunDir:{value:A},space:{value:0},studio:{value:1},env:{value:null},envMix:{value:0},envRot:{value:3.4906585},envFlip:{value:1},sea:{value:0},hor:{value:new Le(.98,.58,.34)},zen:{value:new Le(.07,.16,.32)}},vertexShader:"varying vec3 vDir;void main(){vDir=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 sunDir,hor,zen;uniform float space,studio,envMix,envRot,envFlip,sea;uniform sampler2D env;varying vec3 vDir;
 void main(){vec3 d=normalize(vDir);vec3 L=normalize(sunDir);float h=d.y,mu=dot(d,L);
  vec2 az=normalize(d.xz+1e-5),saz=normalize(L.xz+1e-5);float side=.5+.5*dot(az,saz);
  float hp=max(h,0.);
  vec3 horC=mix(mix(hor,zen,.55)*vec3(1.25,.9,1.05),hor*1.15,pow(side,1.6));
  vec3 c=mix(horC,zen,1.-exp(-hp*4.2));
  c+=vec3(.95,.55,.32)*exp(-hp*28.)*pow(side,3.)*.55;
  float g=.78,hg=(1.-g*g)/pow(1.+g*g-2.*g*mu,1.5);c+=vec3(1.,.66,.4)*hg*.035*(1.-.5*hp);
  c+=vec3(1.,.9,.75)*pow(max(mu,0.),1200.)*8.;
  vec3 below=mix(mix(hor*.42,hor*.18,smoothstep(0.,-.25,h)),hor*.85,sea);   // at sea: the ocean's own far haze
  c=mix(below,c,smoothstep(-.03,.015,h));
  // The Cycles exterior's sky (same HDRI, strength .45, world rotated 200° about Z),
  // so the liftoff video hands over without the clouds changing.
  if(envMix>0.){vec3 D=vec3(d.x,-d.z,d.y);float a=envRot;D.x*=envFlip;D.xy=mat2(cos(a),sin(a),-sin(a),cos(a))*D.xy;
   vec2 uv=vec2(.5-atan(D.y,D.x)/6.2831853,atan(D.z,length(D.xy))/3.1415927+.5);c=mix(c,texture2D(env,uv).rgb*.45,envMix);}
  float dk=clamp(space*(1.15+hp*2.2)-.08,0.,1.);
  vec3 limb=hor*exp(-abs(h+.02*space)/(.012+.05*(1.-space)))*1.4*(.35+.65*side);
  c=mix(c,vec3(.003,.004,.008)+limb*(1.-smoothstep(.8,1.,space)),dk);
  c=mix(c,vec3(.02,.025,.03),studio);gl_FragColor=vec4(c,1.);}`}),Kt=new le(new ns(3e5,48,24),I);E.add(Kt),new Kx().load("/astreia-preview/prototype/textures/sky-dawn-1k.hdr",T=>{T.colorSpace=sn,T.minFilter=tn,I.uniforms.env.value=T,Wi=""});const ot=new Ht,lt=new Ht,Ye=[],yt=[],je=[],w=[];let x=7;const G=()=>(x=x*16807%2147483647)/2147483647,Z=T=>T<.2?[.72,.8,1]:T<.75?[1,.97,.92]:[1,.82,.62];for(let T=0;T<4200;T++){const B=G()*2-1,q=G()*Math.PI*2,ie=Math.sqrt(1-B*B),ye=G()**3,Fe=T<260,[ke,vt,We]=Z(G()),pe=Fe?.65+.35*G():.18+.7*ye;(Fe?je:Ye).push(ie*Math.cos(q)*2e5,B*2e5,ie*Math.sin(q)*2e5),(Fe?w:yt).push(ke*pe,vt*pe,We*pe)}ot.setAttribute("position",new Ct(Ye,3)),ot.setAttribute("color",new Ct(yt,3)),lt.setAttribute("position",new Ct(je,3)),lt.setAttribute("color",new Ct(w,3));const ee=new Fa({color:16777215,vertexColors:!0,size:1.2,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1}),J=ee.clone();J.size=2.1,E.add(new Ta(ot,ee),new Ta(lt,J));const be=6371,de=new Yd,fe=new ht({roughness:.7,metalness:0,transparent:!0,opacity:0,emissive:new Le(0,0,0)}),ct=new ht({color:16777215,transparent:!0,opacity:0,depthWrite:!1,roughness:1,emissive:new Le(9082534),emissiveIntensity:.25}),ae=new le(new ns(be,128,64),fe),De=new le(new ns(be+12,128,64),ct),qe=new jt({transparent:!0,blending:gi,depthWrite:!1,side:mn,uniforms:{sunDir:{value:A},strength:{value:0}},vertexShader:"varying vec3 vN;varying vec3 vP;varying vec3 vW;void main(){vN=normalize(normalMatrix*normal);vW=normalize(mat3(modelMatrix)*normal);vec4 p=modelViewMatrix*vec4(position,1.);vP=p.xyz;gl_Position=projectionMatrix*p;}",fragmentShader:`uniform vec3 sunDir;uniform float strength;varying vec3 vN;varying vec3 vP;varying vec3 vW;
 void main(){float sd=dot(vW,normalize(sunDir));
  vec3 day=vec3(.25,.55,1.),dusk=vec3(1.,.42,.12);vec3 c=mix(dusk,day,smoothstep(.05,.45,sd));
  float ndv=1.-abs(dot(normalize(-vP),vN));float rim=pow(ndv,3.)*.55+pow(ndv,9.)*1.1;
  float lit=smoothstep(-.35,.1,sd);float band=exp(-pow((sd-.02)/.12,2.))*1.6;
  gl_FragColor=vec4(c*rim*strength*(lit+band),1.);}`}),Je=new jt({transparent:!0,blending:gi,depthWrite:!1,uniforms:{sunDir:qe.uniforms.sunDir,strength:qe.uniforms.strength},vertexShader:"varying vec3 vN;varying vec3 vP;varying vec3 vW;void main(){vN=normalize(normalMatrix*normal);vW=normalize(mat3(modelMatrix)*normal);vec4 p=modelViewMatrix*vec4(position,1.);vP=p.xyz;gl_Position=projectionMatrix*p;}",fragmentShader:`uniform vec3 sunDir;uniform float strength;varying vec3 vN;varying vec3 vP;varying vec3 vW;
 void main(){float ndv=clamp(dot(normalize(-vP),vN),0.,1.);float sd=dot(vW,normalize(sunDir));
  float f=pow(1.-ndv,2.6);vec3 day=vec3(.16,.34,.72)*f*smoothstep(-.1,.35,sd);
  vec3 dusk=vec3(.9,.38,.14)*exp(-pow((sd-.03)/.09,2.))*(.15+.85*f)*.55;
  gl_FragColor=vec4((day+dusk)*min(strength,1.2)*.8,1.);}`}),Se=new le(new ns(be+8,128,64),Je),dt=new le(new ns(be+55,96,48),qe),$e=new Bt;$e.add(ae,De,Se,dt),E.add($e);{const T=Pc.degToRad(6),B=145/360*Math.PI*2,q=Math.PI/2-T,ie=new P(-Math.cos(B)*Math.sin(q),Math.cos(q),Math.sin(B)*Math.sin(q));$e.quaternion.setFromUnitVectors(ie,new P(0,1,0)).premultiply(new xi().setFromAxisAngle(new P(0,1,0),2.4+Math.PI))}const bt=new Ss(16774118,4.2);bt.position.set(-.55,.75,-.35).multiplyScalar(1e5),qe.uniforms.sunDir.value=bt.position.clone().normalize();{const T=(q,ie,ye,Fe,ke)=>{const vt=document.createElement("canvas");vt.width=vt.height=128;const We=vt.getContext("2d"),pe=We.createRadialGradient(64,64,0,64,64,64);return pe.addColorStop(0,`rgba(${q},${ie},${ye},${Fe})`),pe.addColorStop(ke,`rgba(${q},${ie},${ye},${Fe*.25})`),pe.addColorStop(1,`rgba(${q},${ie},${ye},0)`),We.fillStyle=pe,We.fillRect(0,0,128,128),new pa(vt)},B=new lo;B.addElement(new or(T(255,236,210,1,.15),220,0,new Le(1,.92,.8))),B.addElement(new or(T(255,190,120,.35,.5),520,0,new Le(1,.7,.45))),B.addElement(new or(T(150,190,255,.07,.6),48,.6)),B.addElement(new or(T(255,170,110,.05,.6),80,.9)),bt.add(B)}E.add(bt,new tx(2241348,.15)),de.load("/astreia-preview/prototype/textures/earth-day.webp",T=>{T.colorSpace=Ft,T.anisotropy=8,fe.map=T,fe.needsUpdate=!0}),de.load("/astreia-preview/prototype/textures/earth-clouds.webp",T=>{ct.alphaMap=T,ct.needsUpdate=!0});const O={value:new P(-.55,.75,-.35).normalize()};de.load("/astreia-preview/prototype/textures/earth-night.webp",T=>{T.colorSpace=Ft,fe.emissiveMap=T,fe.emissive.setRGB(1,.82,.55),fe.emissiveIntensity=1.6,fe.onBeforeCompile=B=>{B.uniforms.uSun=O,B.vertexShader=B.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWN;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vWN=normalize(mat3(modelMatrix)*objectNormal);`),B.fragmentShader=B.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSun;varying vec3 vWN;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance*=pow(1.-smoothstep(-.18,.12,dot(normalize(vWN),uSun)),1.5);`)},fe.needsUpdate=!0});const Ae=(()=>{const B=(ye,Fe)=>{ye=(ye+128)%128,Fe=(Fe+128)%128;let ke=ye*374761393+Fe*668265263;return ke=(ke^ke>>13)*1274126177,((ke^ke>>16)>>>0)/4294967295},q=new Uint8Array(65536);for(let ye=0;ye<128;ye++)for(let Fe=0;Fe<128;Fe++){let ke=0,vt=.5;for(let pe=0,Lt=8;pe<4;pe++,Lt*=2,vt*=.5){const Vn=128/Lt,Jn=Fe/Vn,Xi=ye/Vn,Un=Math.floor(Jn),Qn=Math.floor(Xi),Xt=Jn-Un,Ri=Xi-Qn,us=Xt*Xt*(3-2*Xt),Ds=Ri*Ri*(3-2*Ri),xo=Lt,Us=(Dr,Ns)=>B((Un+Dr)%xo*Vn|0,(Qn+Ns)%xo*Vn|0);ke+=vt*((Us(0,0)*(1-us)+Us(1,0)*us)*(1-Ds)+(Us(0,1)*(1-us)+Us(1,1)*us)*Ds)}const We=(ye*128+Fe)*4;q[We]=q[We+1]=q[We+2]=Math.round(ke/.9375*255),q[We+3]=255}const ie=new Ua(q,128,128);return ie.wrapS=ie.wrapT=bs,ie.magFilter=ie.minFilter=tn,ie.needsUpdate=!0,ie})(),K={opacity:{value:0},noise:{value:Ae},sunDir:{value:A},layer:{value:0}},ne={get opacity(){return K.opacity.value},set opacity(T){K.opacity.value=T}},xe=new Bt;for(let T=0;T<9;T++){const B=T/8,q=new le(new fn(9e3,9e3),new jt({transparent:!0,depthWrite:!1,side:pn,uniforms:{...K,layer:{value:B}},vertexShader:"varying vec2 vUv;varying vec3 vW;void main(){vUv=uv;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`uniform sampler2D noise;uniform float opacity,layer;uniform vec3 sunDir;varying vec2 vUv;varying vec3 vW;
  void main(){vec2 p=vUv*6.;float n=texture2D(noise,p).r*.62+texture2D(noise,p*3.7+.31).r*.28+texture2D(noise,p*11.+.7).r*.1;
   float prof=1.-pow(abs(layer-.42)/.58,1.6);float d=smoothstep(.62-.2*prof,.82-.2*prof,n);
   float e=length(vUv-.5)*2.;d*=1.-smoothstep(.55,1.,e);
   float sunUp=texture2D(noise,p-normalize(sunDir.xz)*.012).r-n;
   vec3 base=mix(vec3(.38,.36,.42),vec3(.86,.72,.62),layer);vec3 lit=vec3(1.25,.86,.62)*(1.+clamp(-sunUp*14.,0.,1.)*.6);
   vec3 c=mix(base,lit,smoothstep(.25,1.,layer)*.75+.25*d);
   float dist=length(vW-cameraPosition);c=mix(c,vec3(.95,.66,.48),smoothstep(1200.,4200.,dist)*.6);
   float a=d*opacity*.5;if(a<.003)discard;gl_FragColor=vec4(c*1.05,a);}`}));q.rotation.x=-Math.PI/2,q.position.set(0,1500+T*28,0),q.renderOrder=1+T,q.frustumCulled=!1,xe.add(q)}f.add(xe);const Ee=new qt({transparent:!0,blending:gi,depthWrite:!1,fog:!1,opacity:0}),Ze=[];de.load("/astreia-preview/story-2d/launch/exhaust-v2.webp",T=>{T.colorSpace=Ft;for(const B of Ze)B.material.map=T,B.material.needsUpdate=!0});function Ut(){const T=new fn(1,1);T.translate(0,-.5+40/1536,0);const B=new le(T,Ee.clone());return B.frustumCulled=!1,Ze.push(B),B}const Vt=Ut(),ft=Ut(),Pt={time:{value:0}};function Qt(){const T=new ii(.16,.5,1,40,24,!0);T.translate(0,-.5,0);const B=new le(T,new jt({transparent:!0,blending:gi,depthWrite:!1,side:pn,uniforms:{time:Pt.time,opacity:{value:0}},vertexShader:"varying float vY;varying vec3 vN;varying vec3 vV;void main(){vY=-position.y;vec4 p=modelViewMatrix*vec4(position,1.);vV=normalize(-p.xyz);vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*p;}",fragmentShader:`uniform float time,opacity;varying float vY;varying vec3 vN;varying vec3 vV;
  void main(){float ndv=abs(dot(normalize(vN),normalize(vV)));float body=pow(ndv,1.4);
   float turb=.82+.18*sin(vY*38.-time*31.)*sin(vY*17.+time*13.+ndv*6.);
   vec3 hot=vec3(1.,.92,.7),mid=vec3(1.,.56,.18),cool=vec3(.75,.22,.06);
   vec3 c=mix(hot,mid,smoothstep(.0,.25,vY));c=mix(c,cool,smoothstep(.25,.8,vY));
   float a=body*turb*(1.-smoothstep(.35,1.,vY))*smoothstep(0.,.03,vY);
   gl_FragColor=vec4(c*a*opacity*1.6,1.);}`}));return B.frustumCulled=!1,B}const zn=Qt(),Zn=Qt(),Pn=new $x().setDecoderPath("/astreia-preview/prototype/draco/"),bi=new px().setDRACOLoader(Pn),Gt={},li=new Bt;f.add(li);const Et=new Bt,cn=new Bt;f.add(Et),Et.add(cn);const xn=document.querySelector(".proto-loader"),$t=xn==null?void 0:xn.querySelector(".proto-loader-pct"),Zt={items:new Map,shown:0,done:!1,t0:performance.now()},kn=(T,B,q=1)=>{var ie;return Zt.items.set(T,{f:Math.max(((ie=Zt.items.get(T))==null?void 0:ie.f)||0,B),w:q})},Ei=new Set(["hall","tessera","rocket","thor"]);for(const T of Ei)kn("glb:"+T,0,6);function os(){if(Zt.done||!xn)return;!Mt&&At&&nt.src&&nt.readyState>=2&&(Mt=!0,kn("video:"+At,1,12));let T=0,B=0;for(const{f:ye,w:Fe}of Zt.items.values())T+=ye*Fe,B+=Fe;const q=B?Math.min(T/B,Mt?1:.99):0,ie=performance.now()-Zt.t0>15e3;Zt.shown+=(Math.max(Zt.shown,q)-Zt.shown)*.3,(q>=1&&Zt.shown>.995||ie)&&(Zt.shown=1),$t.textContent=`${Math.floor(Zt.shown*100)}%`,Zt.shown>=1&&(Zt.done=!0,xn.classList.add("is-done"),setTimeout(()=>xn.remove(),900))}function S(T){return new Promise(B=>bi.load(`/astreia-preview/prototype/models/${T}.glb`,q=>{Gt[T]=q.scene,Ei.has(T)&&kn("glb:"+T,1,6),B(q.scene)},q=>{Ei.has(T)&&q.total&&kn("glb:"+T,Math.min(.99,q.loaded/q.total),6)},()=>{Ei.has(T)&&kn("glb:"+T,1,6),B(null)}))}S("hall").then(T=>{if(!(t||!T)){T.traverse(B=>{if(!B.isMesh)return;const q=B.material.map;q&&(q.colorSpace=Ft),B.material=new qt({map:q,color:16777215})});for(const B of[...U.children])B.geometry&&!(B===ve||B===Xe)&&B.material!==se&&(B.visible=!1);U.add(T)}});const k=Promise.all([S("tessera"),S("rocket"),S("thor")]).then(([T,B,q])=>{var ye,Fe,ke,vt;if(t)return;const ie=We=>We==null?void 0:We.traverse(pe=>{pe.isMesh&&(pe.castShadow=pe.receiveShadow=!0,pe.geometry.attributes.color&&(pe.material=pe.material.clone(),pe.material.vertexColors=!0),pe.material.envMapIntensity=.8)});if(ie(T),ie(q),T==null||T.traverse(We=>{We.isMesh&&(We.receiveShadow=!1,We.material.side=pn)}),T==null||T.traverse(We=>{if(!We.isMesh)return;const pe=We.material,Lt=pe.color.getHex();pe.map?(Object.assign(pe,{metalness:.12,roughness:.42,envMapIntensity:.9}),pe.color.setHex(10657689)):Lt===3291193?(Object.assign(pe,{metalness:.55,roughness:.46,envMapIntensity:.6}),pe.color.setHex(1316634)):Lt===13138245?(Object.assign(pe,{metalness:.25,roughness:.34}),pe.color.setHex(13194271)):(Object.assign(pe,{metalness:.6,roughness:.32,envMapIntensity:1.1}),pe.color.setHex(13817304))}),T&&(T.scale.setScalar(2.35),Et.add(T)),B){for(const We of["booster","stage","fairing-left","fairing-right"]){const pe=B.getObjectByName(We);pe&&(Gt[We]=pe)}li.add(B);for(const We of["booster","stage"])(ye=Gt[We])==null||ye.traverse(pe=>{pe.isMesh&&pe.material&&!pe.material.map&&(pe.material=pe.material.clone(),pe.material.roughness=Math.min(Math.max(pe.material.roughness??.5,.38),.6),pe.material.envMapIntensity=.9)});for(const We of["fairing-left","fairing-right"])(Fe=Gt[We])==null||Fe.traverse(pe=>{pe.material&&(pe.material=pe.material.clone(),pe.material.metalness=0,pe.material.envMapIntensity=.35,pe.material.roughness=Math.max(pe.material.roughness??.5,.7),pe.material.side=pn)})}if(q&&T){const We=Et.matrix.clone();Et.position.set(0,0,0),Et.rotation.set(0,0,0),Et.updateMatrixWorld(!0);const pe=new Rn().setFromObject(T),Lt=pe.max.x-pe.min.x,Vn=pe.max.y-pe.min.y;We.decompose(Et.position,Et.quaternion,Et.scale);const Jn=new Rn,Xi=pe.max.z-pe.min.z,Un=new Rn;T.traverse(Ri=>{Ri.isMesh&&(Un.setFromObject(Ri),Un.max.z>pe.max.z-.03*Xi&&Un.max.x-Un.min.x<.6*Lt&&Jn.union(Un))});const Qn=Jn.isEmpty()?new P((pe.min.x+pe.max.x)/2,(pe.min.y+pe.max.y)/2-.04*Vn,0):Jn.getCenter(new P);Et.userData.hatch=new P(Qn.x,Qn.y,pe.max.z),Et.userData.width=Lt/Et.scale.x,q.rotation.set(Math.PI/2,0,0),q.scale.setScalar(1);let Xt=new Rn().setFromObject(q);q.scale.setScalar(Lt*.78/(Xt.max.x-Xt.min.x)),Xt=new Rn().setFromObject(q),q.position.set(-Xt.min.x,-(Xt.min.y+Xt.max.y)/2,-(Xt.min.z+Xt.max.z)/2),cn.add(q),cn.position.set(pe.min.x+.746*Lt,pe.max.y-.667*Vn,(pe.min.z+pe.max.z)/2),cn.rotation.z=-.52,cn.userData.dock=cn.position.clone()}(ke=Gt.booster)==null||ke.add(Vt,zn),Vt.position.y=zn.position.y=2.4,(vt=Gt.stage)==null||vt.add(ft,Zn),ft.position.y=Zn.position.y=42.4,d.classList.add("ready")}),X=document.getElementById("story-title"),Y=document.querySelector(".story-description"),H=document.querySelector(".mission-hud-index"),re=document.querySelector(".mission-hud-label");let me=-1,Ie=[];const Ne=document.querySelector(".story-copy"),ze=document.querySelector(".scroll-cue");if(ze&&matchMedia("(hover:hover) and (pointer:fine)").matches){ze.classList.add("follow");const T=matchMedia("(prefers-reduced-motion: reduce)").matches?1:.14;let B=0,q=0,ie=0,ye=0,Fe=0,ke=!1;const vt=()=>{ie+=(B-ie)*T,ye+=(q-ye)*T,ze.style.setProperty("--cx",ie.toFixed(1)+"px"),ze.style.setProperty("--cy",ye.toFixed(1)+"px"),Fe=Math.abs(B-ie)+Math.abs(q-ye)>.3?requestAnimationFrame(vt):0};addEventListener("pointermove",We=>{We.pointerType==="mouse"&&(B=We.clientX+18,q=We.clientY+22,ke||(ke=!0,ie=B,ye=q,ze.classList.add("is-live")),Fe||(Fe=requestAnimationFrame(vt)))},{passive:!0,signal:e}),document.documentElement.addEventListener("mouseleave",()=>{ke=!1,ze.classList.remove("is-live")},{signal:e}),e.addEventListener("abort",()=>cancelAnimationFrame(Fe),{once:!0})}const L=document.createElement("div");L.className="proto-molecular-host",p.append(L);const W=Ay(L);let oe=null,Ce=null,_e=!1;function ut(){i||_e||(_e=!0,Uy().then(T=>{t||(Ce=T.stationRect,oe=T.mountResearch(p))}).catch(()=>{_e=!1}))}i||(window.requestIdleCallback||setTimeout)(ut,{timeout:2500});const ue=[4.15,4.9];function ge(T){if(!oe)return;const B=oe.root,q=B.querySelector(".inside-drawing"),ie=B.querySelector(".inside-copy");if(T<ue[0]||T>ue[1]){q.style.filter="",q.style.opacity="",ie&&(ie.style.opacity=""),T>ue[1]&&(B.style.backgroundColor="");return}const ye=a((T-ue[0])/(ue[1]-ue[0]));B.hidden=!1,B.style.opacity="1",B.style.backgroundColor=`rgba(10,10,10,${l(.25,.55,ye).toFixed(3)})`,q.style.opacity=String(l(.55,.8,ye)),q.style.filter="",ie&&(ie.style.opacity=String(l(.85,1,ye)))}const Ke=T=>a((T-ue[0])/(ue[1]-ue[0])),Pe=document.createElement("div");Pe.className="thermal-caption",Pe.setAttribute("aria-hidden","true"),Pe.innerHTML=Ry,p.append(Pe);const Ue=Cy(p),et=document.createElement("div");et.className="proto-fade",p.append(et);const Ve={ch0:191,fps:30,src:{landscape:"/astreia-preview/prototype/hero-video/landscape.mp4",portrait:"/astreia-preview/prototype/hero-video/portrait.mp4"}},nt=Object.assign(document.createElement("video"),{className:"hero-seq",muted:!0,playsInline:!0,preload:"auto"});nt.setAttribute("aria-hidden","true"),nt.disablePictureInPicture=!0,document.querySelector(".proto-canvas").after(nt);let Ge=!1,Mt=!1,Yt=!1,At="",rn=-1;const Fn=document.querySelector(".hero-poster");function ci(T){if(Gl[T])return Gl[T];const B="video:"+T;return kn(B,0,12),Gl[T]=fetch(Ve.src[T]).then(async q=>{if(!q.ok)throw new Error("Opening video unavailable");const ie=+q.headers.get("content-length")||0,ye=q.body.getReader(),Fe=[];let ke=0;for(;;){const{done:vt,value:We}=await ye.read();if(vt)break;Fe.push(We),ke+=We.length,ie&&kn(B,Math.min(.99,ke/ie),12)}return URL.createObjectURL(new Blob(Fe,{type:"video/mp4"}))}).catch(()=>null)}function ws(T){T!==At&&(At=T,Mt=!1,rn=-1,Yt=!1,ci(T).then(B=>{if(t||!B||T!==At)return;nt.src=B;const q=()=>{T===At&&(Yt=!0)};nt.addEventListener("seeked",q,{once:!0});const ie=()=>{T===At&&!Mt&&(Mt=!0,kn("video:"+T,1,12))};for(const ye of["loadeddata","canplay","seeked"])nt.addEventListener(ye,ie,{once:!0});nt.load(),nt.addEventListener("loadedmetadata",()=>{nt.currentTime=.5/Ve.fps},{once:!0}),setTimeout(()=>{nt.readyState>=1&&ie()},3e3)}))}ws(innerWidth>=innerHeight?"landscape":"portrait");function ho({i:T,p:B}){ws(p.clientWidth>=p.clientHeight?"landscape":"portrait");const q=Mt?Math.round(nt.duration*Ve.fps):0,ie=120/(Ve.ch0-1)/160,ye=T+B-.5,Fe=T===0?a(B)*(Ve.ch0-1):Ve.ch0-1+(ye-.5)/ie;if(!Mt||Fe>q-1){nt.style.visibility="hidden",Ge=!1;return}nt.style.visibility=Yt?"visible":"hidden",Ge=!0;const ke=Math.round(Fe);ke!==rn&&!nt.seeking&&(rn=ke,nt.currentTime=(ke+.5)/Ve.fps)}const Ti=Object.assign({}),Ln={t0:2.5,fps:30,step:120/190/160,src:{landscape:"/astreia-preview/prototype/hero-video/sep-landscape.mp4",portrait:"/astreia-preview/prototype/hero-video/sep-portrait.mp4"}},Wt=Object.assign(document.createElement("video"),{className:"hero-seq",muted:!0,playsInline:!0,preload:"auto"});Wt.setAttribute("aria-hidden","true"),Wt.disablePictureInPicture=!0,Wt.style.visibility="hidden",nt.after(Wt);let As=!1,Rs="",as=-1;function Vi(T){T!==Rs&&(Rs=T,As=!1,as=-1,(Wl[T]??(Wl[T]=fetch(Ln.src[T]).then(B=>B.ok?B.blob():null).then(B=>B&&URL.createObjectURL(B)).catch(()=>null))).then(B=>{if(t||!B||T!==Rs)return;Wt.src=B;const q=()=>{T===Rs&&(As=!0)};for(const ie of["loadeddata","canplay","seeked"])Wt.addEventListener(ie,q,{once:!0});Wt.load(),Wt.play().then(()=>Wt.pause()).catch(()=>{Wt.currentTime=.5/Ln.fps}),setTimeout(()=>{Wt.readyState>=1&&q()},3e3)}))}function Ba({t:T}){if(T<1.2||!Object.keys(Ti).length){Wt.style.visibility="hidden";return}Vi(p.clientWidth>=p.clientHeight?"landscape":"portrait");const B=As?Math.round(Wt.duration*Ln.fps):0,q=(T-Ln.t0)/Ln.step;if(!As||q<0||q>B-1){Wt.style.visibility="hidden";return}Wt.style.visibility="visible",Ge=!0;const ie=Math.round(q);ie!==as&&!Wt.seeking&&(as=ie,Wt.currentTime=(ie+.5)/Ln.fps)}function Rr(T){const B=a(T,0,.999999)*o,q=r.findIndex(Fe=>B<Fe.end),ie=r[q],ye=(B-ie.start)/ie.length;return{i:q,p:ye,t:q===0?ye*.5:a(q+ye-.5,0,14)}}const In=document.querySelector(".live-hero");function Cr({i:T,p:B}){const q=In&&T===0?1-l(.1,.22,B):0;if(In&&(In.style.opacity=q.toFixed(3),In.style.visibility=q>0?"visible":"hidden"),T!==me){me=T;const Lt=ed[T];Ie=Jd(X,Y,Lt.title,Lt.copy),H.textContent=`${String(T+1).padStart(2,"0")} / 15`,re.textContent=Lt.label}const ie=T===0?In?[.24,.42]:[.01,.2]:r[T].reveal,ye=T===14||T===0?1:1-a((B-.87)/.13);Qd(Ie,Y,B,ie,ye,h);const Fe=T+B-.5,ke=oe&&Fe>=ue[0]&&Ke(Fe)>.2;T>=3&&ut();const vt=!i&&!oe&&T>=5;Ne.style.visibility=oe&&T>=5&&T<=12||vt||q>0||ke?"hidden":"visible",Ne.style.opacity=oe&&Fe>=ue[0]&&Fe<=ue[1]?String(1-l(.04,.2,Ke(Fe))):"";const We=T+B-.5,pe=oe&&We>=ue[0]-.05&&We<=ue[1];if(vt)W.render(0,0);else if(oe){W.render(0,0),oe.render(pe?5:T,pe?Math.max(.36,T===5?B:0):B,{seconds:performance.now()/1e3,quality:1});const Lt=oe.root.querySelector(".inside-copy");Lt&&!pe&&(Lt.style.visibility=T>=13?"hidden":"")}else W.render(T,B)}const kt=(T,B,q)=>new P(T,B,q);new P;const En=new P;function fo(T,B){const q=1-l(.85,1.45,T),ie=l(1.62,2.7,T),ye=ie*ie*2400,Fe=c(0,420,l(1.75,3.4,T)**1.6),ke=l(1.95,2.9,T),vt=l(.55,.97,T),We=l(2.55,2.95,T),pe=l(2.92,3.32,T),Lt=l(3.12,3.6,T);li.position.y=ye,Gt.booster&&(Gt.booster.position.set(-6*We,-90*We*We,0),Gt.booster.rotation.z=.5*We,Gt.booster.visible=We<.999);const Vn=pe,Jn=Lt;for(const[un,fi]of[["fairing-left",-1],["fairing-right",1]]){const Gn=Gt[un];if(!Gn)continue;const Ci=Math.max(l(.12,.6,Vn),l(.05,.3,Jn));Gn.traverse(Mn=>{Mn.material&&(Mn.material.color.setScalar(c(.32,1,l(1,1.6,T))),Mn.material.transparent=Ci>0,Mn.material.opacity=1-Ci,Mn.material.depthWrite=Ci<.5)});const qi=(1-vt)*fi*30;Gn.position.set(qi+fi*(Jn*18),Jn*-6+(1-vt)*1.8,0),Gn.rotation.z=fi*-(.9*Vn+.6*Jn),Gn.visible=Ci<.999&&T<3.4}if(Gt.stage){const un=l(2.98,3.4,T);Gt.stage.position.set(-18*un,-140*un*un-40*Lt,-14*un),Gt.stage.rotation.set(-.35*un,0,.5*un),Gt.stage.visible=Lt<.999&&un<.999}const Xi=Lt;Et.position.set(c(0,0,Xi),u+ye+c(0,6,Xi),0),Et.rotation.set(0,c(-.35+.35*l(0,.6,T),.35,l(3.2,4.5,T)),c(0,-.12,Xi)),cn.visible=T>1.2;const Un=l(1.6,1.72,T)*(1-l(2.55,2.62,T)),Qn=l(2.66,2.74,T)*(1-l(2.9,2.98,T)),Xt=h?1:1+.04*Math.sin(B*23)+.025*Math.sin(B*37);Vt.material.opacity=Un,Vt.scale.set(9*Xt,c(10,52,Un)*Xt,1),ft.material.opacity=Qn,ft.scale.set(7*Xt,c(8,34,Qn)*Xt,1);const Ri=l(1.9,2.6,T);Pt.time.value=h?0:B,zn.material.uniforms.opacity.value=Un*.85,zn.scale.set(c(8,15,Ri)*Xt,c(10,60,Un)*Xt,c(8,15,Ri)*Xt),zn.visible=Un>.001,Zn.material.uniforms.opacity.value=Qn*.9,Zn.scale.set(9*Xt,c(8,30,Qn)*Xt,9*Xt),Zn.visible=Qn>.001;const us=l(.85,1.35,T),Ds=l(1.25,1.6,T),xo=Ds<.999?1:0;U.position.set(0,0,-420*Ds*Ds),ve.position.x=-21-40*us,Xe.position.x=21+40*us,U.visible=xo>0,He.visible=at.visible=it.visible=Fe<8&&q<.995,it.visible=!1,He.material.opacity=1-q,f.fog.color.setHex(q>.5?329224:14261100),M.intensity=900*q,V.intensity=650*q,M.position.set(-3,u+16,13),M.target.position.set(0,u,0),V.position.set(8,u+6,-10),V.target.position.set(0,u,0),C.intensity=c(.4,3.2,1-q),C.target.position.copy(Et.position),C.position.copy(Et.position).addScaledVector(A,30),_.intensity=1.6*ke,_.target.position.copy(Et.position),_.position.copy(Et.position).add(kt(.2,-10,.3)),j.intensity=c(.15,.45,1-q)*(1-ke*.7),f.fog.far=c(2600,1e6,l(1.8,2.3,T)),ne.opacity=Math.sin(Math.PI*l(1.95,2.4,T))*.95,xe.visible=ne.opacity>.002,xe.position.y=ye-1500+40-520*(l(1.95,2.4,T)-.5);const Us=u+ye,Dr=30+ye,Ns=Et.position.y,yo=1-(1-a(T/.6))**2,Mo=-1.05+.55*yo,df=kt(Math.sin(Mo)*c(13,14.5,yo),u+c(.5,.2,yo),Math.cos(Mo)*c(13,14.5,yo)),So=l(.6,1.45,T),ja=l(1.6,2.2,T),Ka=l(2.85,3.45,T),bo=l(3.4,4.5,T),ff=kt(-Math.cos(Mo)*.9,u-.9,Math.sin(Mo)*.9),Fs=new P(0,c(u,c(Dr,Us,ja*.4),So),0).lerp(ff,1-So);En.copy(df).lerp(kt(34,24,150),So),En.lerp(kt(18,Dr-26,70),ja),En.y=Math.max(En.y,ye+c(22,Dr-26-ye,ja));const Eo=(T>=1.6?1:0)*(1-l(2.05,2.3,T));Eo>0&&En.lerp(kt(34,24+.7*ye,150),Eo),Eo>0&&Fs.lerp(kt(0,30+ye-12*l(1.7,2,T),0),Eo);const xu=l(2.35,2.75,T),pf=kt(c(16,7,Ka),c(10,8,Ka),c(34,19,Ka));Fs.lerp(kt(0,Ns-2,0),xu),En.lerp(kt(0,Ns,0).add(pf),xu);const yu=c(.38,1.15,bo);En.lerp(kt(Math.sin(yu)*16,Ns+5+2*bo,Math.cos(yu)*16),bo),Fs.lerp(kt(.8,Ns-1.2,0),bo);let $a=-.12*(1-So);if(T>.5&&T<1.45){const un=Math.min(T,1),fi=1-(1-a(.5/.6))**2,Gn=-1.05+.55*fi,Ci=c(13,14.5,fi),qi=l(.6,1.45,.5),Mn=kt(Math.sin(Gn)*Ci,u+c(.5,.2,fi),Math.cos(Gn)*Ci).lerp(kt(34,24,150),qi),wo=kt(0,c(u,30,qi),0).lerp(kt(-Math.cos(Gn)*.9,u-.9,Math.sin(Gn)*.9),1-qi),Za=-.12*(1-qi),Ja=l(.5,.85,un),Mu=Math.atan2(Mn.x,Mn.z)*(1-Ja);let Ao=c(Math.hypot(Mn.x,Mn.z),7.5,l(.6,.97,un));Ao=c(Ao,6.8,l(.97,1,un));const mf=kt(Math.sin(Mu)*Ao,c(Mn.y,u+.3,Ja),Math.cos(Mu)*Ao),gf=wo.clone().lerp(kt(0,u+.2,0),l(.5,.8,un)),_f=Za*(1-Ja),Qa=T<=1?0:l(1,1.45,T);En.copy(mf.lerp(En,Qa)),Fs.copy(gf.lerp(Fs,Qa)),$a=c(_f,$a,Qa)}y.position.copy(En),y.lookAt(Fs),y.rotateZ($a),b.quaternion.copy(y.quaternion),b.position.set(0,be+Fe+.05,0);{const un=new P(0,0,-1).applyQuaternion(y.quaternion);un.y=0,un.normalize();const fi=Math.acos(be/(be+Math.max(Fe,1))),Gn=un.clone().multiplyScalar(Math.cos(fi-.05)).add(new P(.35,0,0).applyQuaternion(y.quaternion).setY(0)).setY(-Math.sin(fi-.05)).normalize(),Ci=new P(-.55,.75,-.35).normalize(),qi=l(2.25,2.6,T)*(1-l(3.45,4,T)),Mn=Ci.clone().lerp(Gn,qi).normalize();bt.position.copy(Mn).multiplyScalar(1e5),qe.uniforms.sunDir.value.copy(Mn),O.value.copy(Mn);const wo=l(2.2,2.6,T);if(wo>0){const Za=A.clone().lerp(Mn,wo).normalize();C.position.copy(C.target.position).addScaledVector(Za,30)}}Kt.position.copy(b.position),I.uniforms.envMix.value=I.uniforms.env.value?1-l(2.1,2.6,T):0,I.uniforms.space.value=ke,I.uniforms.studio.value=q,I.uniforms.sea.value=0,I.uniforms.hor.value.setRGB(.98,.58,.34),I.uniforms.zen.value.setRGB(.07,.16,.32),I.uniforms.sunDir.value=A,ee.opacity=l(.55,1,ke);const To=l(.25,.75,ke);return fe.opacity=To,ct.opacity=To*.7,qe.uniforms.strength.value=To*.95,ae.visible=De.visible=Se.visible=dt.visible=To>.001,{studio:q}}const ui=new Bt;f.add(ui);const Jt=Dy({environment:f.environment,fg:f,bg:E,camera:y,bgCamera:b,tex:de,assets:Gt,tesseraPivot:Et,thorPivot:cn,globe:$e,earthMat:fe,cloudMat:ct,skyMat:I,starMat:ee,atmoMat:qe,R:be,reduced:h}),Pr=Jt.cassette();Pr.scale.setScalar(.6),ui.add(Pr);let Cs=0,ls=32;function Lr(T,B,q){const ie=sf(i?T:Math.min(T,4.5),B,q);return oe&&ie.scene==="world"&&Ir(T),ie}const po=new xi,cs=new rt,Ps=new P,wi=new P,Ai=new P,yn=new P,hi=new P;function Ir(T){const B=l(ue[0],ue[0]+.45*(ue[1]-ue[0]),T),q=Et.userData.hatch,ie=Et.userData.width;if(B<=0||!q||!ie)return;Et.updateMatrixWorld(!0),yn.copy(q).applyMatrix4(Et.matrixWorld),cs.extractRotation(Et.matrixWorld),Ai.set(0,0,1).applyMatrix4(cs).normalize(),wi.set(0,1,0).applyMatrix4(cs).normalize(),Ps.crossVectors(wi,Ai).normalize(),wi.crossVectors(Ai,Ps);const ye=p.clientWidth,Fe=p.clientHeight,ke=Ce(ye,Fe),vt=ie*Et.getWorldScale(hi).x,We=ke.width/vt,pe=1.3*(Fe/We)/(2*Math.tan(Pc.degToRad(y.fov)/2)),Lt=ke.x+(.483-.5)*ke.width-ye/2,Vn=ke.y+(.51-.5)*ke.height-Fe/2;hi.copy(yn).addScaledVector(Ai,pe).addScaledVector(Ps,-Lt/We).addScaledVector(wi,Vn/We),cs.makeBasis(Ps,wi,Ai),po.setFromRotationMatrix(cs),y.position.lerp(hi,B),y.quaternion.slerp(po,B),y.updateMatrixWorld(!0),b.quaternion.copy(y.quaternion)}function sf(T,B,q){if(Et.visible=!0,$e.visible=!0,Jt.thorFree.visible=!1,Jt.ocean.visible=!1,ui.visible=!1,fo(Math.min(T,4.5),B),cn.userData.dock&&cn.position.copy(cn.userData.dock),T<=4.5)return Jt.idle(),{scene:"world",fade:0,heat:0};Jt.prepare();const ie=Jt.pose(T,B,q,{fov:ls,heat:Cs});if(Cs=ie.heat||0,ie.transfer){const ye=ie.transfer.move;ui.visible=ye>0&&ye<1,ui.position.copy(ie.transfer.from).lerp(ie.transfer.to,ye).add(new P(0,.3,1.6).multiplyScalar(Math.sin(ye*Math.PI))),ui.scale.setScalar(1.1*(1-.7*l(.75,1,ye))),ui.rotation.set(0,ye*1.2,-.3*ye)}return ie}const Dn=new iy(g,new Kn(1,1,{type:Cn,samples:4})),cu=new Yh(E,b),Ls=new Yh(f,y);Ls.clear=!1,Ls.clearDepth=!0;const mo=new Sr(new Be(1,1),.3,.5,1.7),rf=new Oc({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec4 c=texture2D(tDiffuse,vUv);if(any(isnan(c))||any(isinf(c)))c=vec4(0.,0.,0.,1.);gl_FragColor=min(c,vec4(48.));}"}),uu=new Oc({uniforms:{tDiffuse:{value:null},uAspect:{value:1},uWarm:{value:1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uAspect,uWarm;varying vec2 vUv;
  float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
  void main(){
   vec2 c=vUv-.5;float r=length(c*vec2(uAspect,1.));
   vec2 off=c*r*.006;
   vec3 col=vec3(texture2D(tDiffuse,vUv+off).r,texture2D(tDiffuse,vUv).g,texture2D(tDiffuse,vUv-off).b);
   float l=dot(col,vec3(.2126,.7152,.0722));
   col+=mix(vec3(-.012,.004,.022),vec3(.03,.012,-.02)*uWarm,smoothstep(.15,.8,l));
   col=mix(col,col*col*(3.-2.*col),.18);
   col*=mix(1.,.62,smoothstep(.45,1.05,r));
   col+=(h(vUv*vec2(1931.,1663.))-.5)*.022;
   gl_FragColor=vec4(clamp(col,0.,1.),1.);}`});Dn.addPass(cu),Dn.addPass(Ls),Dn.addPass(rf),Dn.addPass(mo),Dn.addPass(new oy),Dn.addPass(uu);const hu=new Ud(128,{type:Cn}),du=new Id(1,4e5,hu);let di=null,fu="",pu=0;function of(T){if(T<1.45||T>12.5){f.environment!==R&&(f.environment=R),f.environmentIntensity=.55;return}const B=`${Math.round(b.position.y/15)}:${Math.round(T*3)}`,q=performance.now();if(B===fu||q-pu<250){di&&(f.environment=di);return}fu=B,pu=q,du.position.copy(b.position),du.update(g,E);const ie=N.fromCubemap(hu.texture).texture;di==null||di.dispose(),di=ie,f.environment=di,f.environmentIntensity=1.15}function za(T,B=0){const q={world:[f,y],sea:[f,y],ocean:[f,y],bio:[Jt.bio,Jt.bioCam],lab:[Jt.lab,Jt.labCam],care:[Jt.care,Jt.careCam]},[ie,ye]=q[T.scene],Fe=T.scene==="world"||T.scene==="sea";Fe?of(B):f.environment=R,cu.enabled=Fe,Ls.scene=ie,Ls.camera=ye,Ls.clear=!Fe,mo.strength=Fe?.28+.16*(T.heat||0):.16,g.toneMappingExposure=T.exposure??(T.scene==="world"?c(1,1/.6,l(1.55,2.1,B)*(1-l(4.15,4.5,B))):1),J.opacity=ee.opacity,Dn.render(),et.style.opacity=String(T.fade||0),et.style.background=T.fadeColor||"#000",Pe.style.opacity=String(Cs),Ue.render(Cs);const ke=X.getBoundingClientRect(),vt=p.getBoundingClientRect();p.style.setProperty("--thermal-caption-y",`${ke.top-vt.top+ke.height/2}px`)}const Hn=h?null:new xf({lerp:.085,smoothWheel:!0}),go=document.querySelector(".proto-track");let ka=performance.now(),Gi=16,Wi="",Is=1e3,Ha=0,Va=0;const Ga=[];function _o(){const T=p.clientWidth,B=p.clientHeight;g.setPixelRatio(m),g.setSize(T,B,!1),Dn.setPixelRatio(m),Dn.setSize(T,B),uu.uniforms.uAspect.value=T/B,mo.resolution.set(T*m/2,B*m/2),ls=T<B?48:32,y.aspect=b.aspect=T/B,y.fov=b.fov=ls,y.updateProjectionMatrix(),b.updateProjectionMatrix();for(const q of[Jt.bioCam,Jt.labCam,Jt.careCam])q.aspect=T/B,q.fov=T<B?46:32,q.updateProjectionMatrix();Wi=""}let vo=0,Wa=innerWidth;addEventListener("resize",()=>{_o(),innerWidth!==Wa&&(Wa=innerWidth,vo>0&&vo<=1&&Ya(vo*(go.offsetHeight-innerHeight)))},{signal:e}),_o(),addEventListener("visibilitychange",()=>{nt.pause(),Wt.pause(),document.hidden||(ka=performance.now(),Wi="")},{signal:e});function mu(T){t||(document.hidden||Xa(T),n=requestAnimationFrame(mu))}function Xa(T){Hn==null||Hn.raf(T),os();const B=T-ka;ka=T,Gi=Gi*.95+B*.05,Ha<60?(Ha++,Ga.push(B),Ha===60&&(Ga.sort((ke,vt)=>ke-vt),Is=Ga[30],Gi=Is)):!Ge&&Gi>Is*1.35&&m>.75?(m=Math.max(.75,m-.1),_o(),Gi=Is,Va=T+6e3):!Ge&&Gi<Is*1.04&&m<v&&T-Va>2e3&&(m=Math.min(v,m+.05),Va=T,_o(),Gi=Is);const q=go.offsetHeight-innerHeight,ie=Rr(q>0?scrollY/q:0);q>0&&innerWidth===Wa&&(vo=scrollY/q),ho(ie),Ba(ie),Cr(ie),Fn&&(Fn.hidden=ie.i>0||Ge&&Yt),d.style.visibility=ie.i===0&&!Yt||!i&&!oe&&ie.t>=ue[1]?"hidden":"",ze==null||ze.classList.toggle("is-gone",scrollY>4),p.style.setProperty("--mission-progress",(ie.t/14).toFixed(4));const ye=ie.t>1.55&&ie.t<3.05||ie.t>4.9&&ie.t<7.5||ie.t>8.5&&ie.t<12.6,Fe=`${ie.t.toFixed(5)}:${ye?Math.floor(T/16):0}`;Ge||oe&&ie.t>=ue[1]?Wi="":Fe!==Wi&&!gu&&(Wi=Fe,za(Lr(ie.t,T/1e3,B),ie.t)),ge(ie.t)}k.then(()=>{const T=[0,1,1.9,2.06,2.2,2.7,3.3,4.3,5.3,7.2,8,9,10,11,12,13,14].filter(q=>!i||q<=i-.5),B=()=>{if(t)return;const q=T.shift();q!==void 0&&(za(Lr(q,0,16),q),Wi="",Ge||Xa(performance.now()),requestAnimationFrame(B))};B()});const af=document.querySelector(".proto-content");let gu=!1;document.querySelectorAll(".proto-content section").forEach(T=>T.querySelectorAll("[data-reveal]").forEach((B,q)=>B.style.setProperty("--i",q)));const qa=new IntersectionObserver(T=>T.forEach(B=>{B.isIntersecting&&(B.target.classList.add("is-in"),qa.unobserve(B.target))}),{rootMargin:"0px 0px -12% 0px"});document.querySelectorAll("[data-reveal]").forEach(T=>qa.observe(T));const _u=document.querySelector(".proto-nav,.site-nav"),lf=[...document.querySelectorAll(".pc-principles,.pc-cta")];function vu(){if(i)return;const T=af.getBoundingClientRect().top;p.classList.toggle("is-covered",T<innerHeight*.55),gu=T<=0,p.style.visibility=T<=-innerHeight?"hidden":"",_u.classList.toggle("on-light",lf.some(B=>{const q=B.getBoundingClientRect();return q.top<64&&q.bottom>24}))}addEventListener("scroll",vu,{passive:!0,signal:e}),vu(),n=requestAnimationFrame(mu);function cf(){Dn.render();const T=g.getContext(),B=T.drawingBufferWidth,q=T.drawingBufferHeight,ie=new Uint8Array(4);let ye=0,Fe=0,ke=0;for(let vt=1;vt<12;vt++)for(let We=1;We<12;We++){T.readPixels(Math.floor(B*We/12),Math.floor(q*vt/12),1,1,T.RGBA,T.UNSIGNED_BYTE,ie);const pe=(ie[0]+ie[1]+ie[2])/3;Fe+=pe,ke++,pe<6&&ye++}return{dark:ye/ke,mean:Fe/ke}}window.__proto={boot:Zt,skyMat:I,world:Lr,draw:za,bgCamera:b,sun:C,bgSun:bt,vehicle:li,boosterPlume:Vt,stagePlume:ft,act:r,actLength:o,get trackMax(){return go.offsetHeight-innerHeight},step:()=>Xa(performance.now()),get heroReady(){return Mt},probe:cf,later:Jt,composer:Dn,bloom:mo,get avgFrame(){return Gi},get dpr(){return m},renderer:g,earthMat:fe,cloudMat:ct,thorPivot:cn,tesseraPivot:Et,assets:Gt,camera:y,globe:$e,lenis:Hn};function Ya(T){Hn?Hn.scrollTo(T,{immediate:!0,force:!0}):window.scrollTo(0,T)}function uf(T){const B=go.offsetHeight-innerHeight,q=r[T];return q?(q.start+Ny(T)*q.length)/o*B:-1}return{navigationBoundary(){const T=document.getElementById("site-footer");return T?T.offsetTop-innerHeight:1/0},scrollTo(T){Hn==null||Hn.resize(),Ya(T)},goHash(T){const B=T==="#constellation"?0:ed.findIndex(q=>`#${q.id}`===T);return B<0||!r[B]?!1:(Ya(uf(B)),!0)},destroy(){var ie,ye,Fe;t=!0,s.abort(),cancelAnimationFrame(n),qa.disconnect(),Hn==null||Hn.destroy(),W.destroy(),oe==null||oe.destroy(),(ie=Ue.destroy)==null||ie.call(Ue),Pn.dispose();const T=new Set,B=new Set,q=new Set;for(const ke of[f,E,Jt.bio,Jt.lab,Jt.care])ke.traverse(vt=>{var We;vt.geometry&&T.add(vt.geometry);for(const pe of[].concat(vt.material||[])){B.add(pe);for(const Lt of Object.values(pe))Lt!=null&&Lt.isTexture&&q.add(Lt)}(We=vt.shadow)==null||We.dispose()});T.forEach(ke=>ke.dispose()),B.forEach(ke=>ke.dispose()),q.forEach(ke=>ke.dispose()),di==null||di.dispose(),N.dispose();for(const ke of[nt,Wt])ke.pause(),ke.removeAttribute("src"),ke.load();_u.classList.remove("on-light"),document.documentElement.classList.remove("is-focus"),document.documentElement.style.removeProperty("--act-length"),(ye=Dn.dispose)==null||ye.call(Dn),g.dispose(),g.forceContextLoss(),((Fe=window.__proto)==null?void 0:Fe.renderer)===g&&delete window.__proto}};function hf(){return Qh()}}export{By as mountPrototype};
