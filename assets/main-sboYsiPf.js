/* empty css             */import{L as pp}from"./lenis-CYo8HTSz.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Eh="169",mp=0,su=1,gp=2,Gd=1,Wd=2,Ki=3,ts=0,An=1,Tn=2,es=0,Mr=1,Di=2,ru=3,ou=4,_p=5,Ds=100,vp=101,xp=102,yp=103,Mp=104,Sp=200,bp=201,Ep=202,wp=203,Sc=204,bc=205,Tp=206,Ap=207,Rp=208,Cp=209,Pp=210,Lp=211,Ip=212,Dp=213,Np=214,Ec=0,wc=1,Tc=2,Tr=3,Ac=4,Rc=5,Cc=6,Pc=7,Xd=0,Up=1,Fp=2,gs=0,qd=1,Yd=2,$d=3,wh=4,Op=5,jd=6,Kd=7,au="attached",Bp="detached",Zd=300,Ar=301,Rr=302,Lc=303,Ic=304,ja=306,Os=1e3,Ni=1001,Oa=1002,Pn=1003,Jd=1004,co=1005,pn=1006,wa=1007,Ui=1008,Ei=1009,Qd=1010,ef=1011,_o=1012,Th=1013,Bs=1014,$n=1015,Wn=1016,Ah=1017,Rh=1018,Cr=1020,tf=35902,nf=1021,sf=1022,ci=1023,rf=1024,of=1025,Sr=1026,Pr=1027,Ch=1028,Ph=1029,af=1030,Lh=1031,Ih=1033,Ta=33776,Aa=33777,Ra=33778,Ca=33779,Dc=35840,Nc=35841,Uc=35842,Fc=35843,Oc=36196,Bc=37492,kc=37496,zc=37808,Hc=37809,Vc=37810,Gc=37811,Wc=37812,Xc=37813,qc=37814,Yc=37815,$c=37816,jc=37817,Kc=37818,Zc=37819,Jc=37820,Qc=37821,Pa=36492,eh=36494,th=36495,lf=36283,nh=36284,ih=36285,sh=36286,vo=2300,xo=2301,bl=2302,lu=2400,cu=2401,hu=2402,kp=2500,zp=0,cf=1,rh=2,Hp=3200,Vp=3201,hf=0,Gp=1,fs="",Gt="srgb",gn="srgb-linear",Dh="display-p3",Ka="display-p3-linear",Ba="linear",Wt="srgb",ka="rec709",za="p3",Ks=7680,uu=519,Wp=512,Xp=513,qp=514,uf=515,Yp=516,$p=517,jp=518,Kp=519,oh=35044,du="300 es",Qi=2e3,Ha=2001;class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Dn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let fu=1234567;const po=Math.PI/180,Lr=180/Math.PI;function Si(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Dn[i&255]+Dn[i>>8&255]+Dn[i>>16&255]+Dn[i>>24&255]+"-"+Dn[e&255]+Dn[e>>8&255]+"-"+Dn[e>>16&15|64]+Dn[e>>24&255]+"-"+Dn[t&63|128]+Dn[t>>8&255]+"-"+Dn[t>>16&255]+Dn[t>>24&255]+Dn[n&255]+Dn[n>>8&255]+Dn[n>>16&255]+Dn[n>>24&255]).toLowerCase()}function Cn(i,e,t){return Math.max(e,Math.min(t,i))}function Nh(i,e){return(i%e+e)%e}function Zp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Jp(i,e,t){return i!==e?(t-i)/(e-i):0}function mo(i,e,t){return(1-t)*i+t*e}function Qp(i,e,t,n){return mo(i,e,1-Math.exp(-t*n))}function em(i,e=1){return e-Math.abs(Nh(i,e*2)-e)}function tm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function nm(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function im(i,e){return i+Math.floor(Math.random()*(e-i+1))}function sm(i,e){return i+Math.random()*(e-i)}function rm(i){return i*(.5-Math.random())}function om(i){i!==void 0&&(fu=i);let e=fu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function am(i){return i*po}function lm(i){return i*Lr}function cm(i){return(i&i-1)===0&&i!==0}function hm(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function um(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function dm(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function Mi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function zt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const ah={DEG2RAD:po,RAD2DEG:Lr,generateUUID:Si,clamp:Cn,euclideanModulo:Nh,mapLinear:Zp,inverseLerp:Jp,lerp:mo,damp:Qp,pingpong:em,smoothstep:tm,smootherstep:nm,randInt:im,randFloat:sm,randFloatSpread:rm,seededRandom:om,degToRad:am,radToDeg:lm,isPowerOfTwo:cm,ceilPowerOfTwo:hm,floorPowerOfTwo:um,setQuaternionFromProperEuler:dm,normalize:zt,denormalize:Mi};class Je{constructor(e=0,t=0){Je.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(e,t,n,s,r,o,a,l,c){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],E=s[1],y=s[4],M=s[7],O=s[2],I=s[5],L=s[8];return r[0]=o*_+a*E+l*O,r[3]=o*m+a*y+l*I,r[6]=o*f+a*M+l*L,r[1]=c*_+h*E+u*O,r[4]=c*m+h*y+u*I,r[7]=c*f+h*M+u*L,r[2]=d*_+p*E+g*O,r[5]=d*m+p*y+g*I,r[8]=d*f+p*M+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(El.makeScale(e,t)),this}rotate(e){return this.premultiply(El.makeRotation(-e)),this}translate(e,t){return this.premultiply(El.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const El=new Tt;function df(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function fm(){const i=yo("canvas");return i.style.display="block",i}const pu={};function La(i){i in pu||(pu[i]=!0,console.warn(i))}function pm(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function mm(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gm(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const mu=new Tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),gu=new Tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),jr={[gn]:{transfer:Ba,primaries:ka,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Gt]:{transfer:Wt,primaries:ka,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ka]:{transfer:Ba,primaries:za,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(gu),fromReference:i=>i.applyMatrix3(mu)},[Dh]:{transfer:Wt,primaries:za,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(gu),fromReference:i=>i.applyMatrix3(mu).convertLinearToSRGB()}},_m=new Set([gn,Ka]),Dt={enabled:!0,_workingColorSpace:gn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!_m.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=jr[e].toReference,s=jr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return jr[i].primaries},getTransfer:function(i){return i===fs?Ba:jr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(jr[e].luminanceCoefficients)}};function br(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function wl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zs;class vm{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zs===void 0&&(Zs=yo("canvas")),Zs.width=e.width,Zs.height=e.height;const n=Zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=br(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(br(t[n]/255)*255):t[n]=br(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let xm=0;class ff{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=Si(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Tl(s[o].image)):r.push(Tl(s[o]))}else r=Tl(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Tl(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?vm.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let ym=0;class mn extends Br{constructor(e=mn.DEFAULT_IMAGE,t=mn.DEFAULT_MAPPING,n=Ni,s=Ni,r=pn,o=Ui,a=ci,l=Ei,c=mn.DEFAULT_ANISOTROPY,h=fs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ym++}),this.uuid=Si(),this.name="",this.source=new ff(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Je(0,0),this.repeat=new Je(1,1),this.center=new Je(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Zd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Os:e.x=e.x-Math.floor(e.x);break;case Ni:e.x=e.x<0?0:1;break;case Oa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Os:e.y=e.y-Math.floor(e.y);break;case Ni:e.y=e.y<0?0:1;break;case Oa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=Zd;mn.DEFAULT_ANISOTROPY=1;class Ut{constructor(e=0,t=0,n=0,s=1){Ut.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(p+1)/2,O=(f+1)/2,I=(h+d)/4,L=(u+_)/4,U=(g+m)/4;return y>M&&y>O?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=I/n,r=L/n):M>O?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=I/s,r=U/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=L/r,s=U/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Mm extends Br{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Ut(0,0,e,t),this.scissorTest=!1,this.viewport=new Ut(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new mn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ff(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hi extends Mm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class pf extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Sm extends mn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Pn,this.minFilter=Pn,this.wrapR=Ni,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,E=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const O=Math.sqrt(y),I=Math.atan2(O,f*E);m=Math.sin(m*I)/O,a=Math.sin(a*I)/O}const M=a*E;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,u=u*m+_*M,m===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Cn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class z{constructor(e=0,t=0,n=0){z.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(_u.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(_u.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Cn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Al=new z,_u=new Fi;class Gn{constructor(e=new z(1/0,1/0,1/0),t=new z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(gi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(gi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=gi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,gi):gi.fromBufferAttribute(r,o),gi.applyMatrix4(e.matrixWorld),this.expandByPoint(gi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Wo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Wo.copy(n.boundingBox)),Wo.applyMatrix4(e.matrixWorld),this.union(Wo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gi),gi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Kr),Xo.subVectors(this.max,Kr),Js.subVectors(e.a,Kr),Qs.subVectors(e.b,Kr),er.subVectors(e.c,Kr),rs.subVectors(Qs,Js),os.subVectors(er,Qs),bs.subVectors(Js,er);let t=[0,-rs.z,rs.y,0,-os.z,os.y,0,-bs.z,bs.y,rs.z,0,-rs.x,os.z,0,-os.x,bs.z,0,-bs.x,-rs.y,rs.x,0,-os.y,os.x,0,-bs.y,bs.x,0];return!Rl(t,Js,Qs,er,Xo)||(t=[1,0,0,0,1,0,0,0,1],!Rl(t,Js,Qs,er,Xo))?!1:(qo.crossVectors(rs,os),t=[qo.x,qo.y,qo.z],Rl(t,Js,Qs,er,Xo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Gi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Gi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Gi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Gi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Gi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Gi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Gi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Gi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Gi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Gi=[new z,new z,new z,new z,new z,new z,new z,new z],gi=new z,Wo=new Gn,Js=new z,Qs=new z,er=new z,rs=new z,os=new z,bs=new z,Kr=new z,Xo=new z,qo=new z,Es=new z;function Rl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){Es.fromArray(i,r);const a=s.x*Math.abs(Es.x)+s.y*Math.abs(Es.y)+s.z*Math.abs(Es.z),l=e.dot(Es),c=t.dot(Es),h=n.dot(Es);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const bm=new Gn,Zr=new z,Cl=new z;class Bi{constructor(e=new z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):bm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Zr.subVectors(e,this.center);const t=Zr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(Zr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Zr.copy(e.center).add(Cl)),this.expandByPoint(Zr.copy(e.center).sub(Cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Wi=new z,Pl=new z,Yo=new z,as=new z,Ll=new z,$o=new z,Il=new z;class Za{constructor(e=new z,t=new z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Wi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Wi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Wi.copy(this.origin).addScaledVector(this.direction,t),Wi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){Pl.copy(e).add(t).multiplyScalar(.5),Yo.copy(t).sub(e).normalize(),as.copy(this.origin).sub(Pl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Yo),a=as.dot(this.direction),l=-as.dot(Yo),c=as.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(Pl).addScaledVector(Yo,d),p}intersectSphere(e,t){Wi.subVectors(e.center,this.origin);const n=Wi.dot(this.direction),s=Wi.dot(Wi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Wi)!==null}intersectTriangle(e,t,n,s,r){Ll.subVectors(t,e),$o.subVectors(n,e),Il.crossVectors(Ll,$o);let o=this.direction.dot(Il),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;as.subVectors(this.origin,e);const l=a*this.direction.dot($o.crossVectors(as,$o));if(l<0)return null;const c=a*this.direction.dot(Ll.cross(as));if(c<0||l+c>o)return null;const h=-a*as.dot(Il);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class mt{constructor(e,t,n,s,r,o,a,l,c,h,u,d,p,g,_,m){mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new mt().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),o=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Em,e,wm)}lookAt(e,t,n){const s=this.elements;return Jn.subVectors(e,t),Jn.lengthSq()===0&&(Jn.z=1),Jn.normalize(),ls.crossVectors(n,Jn),ls.lengthSq()===0&&(Math.abs(n.z)===1?Jn.x+=1e-4:Jn.z+=1e-4,Jn.normalize(),ls.crossVectors(n,Jn)),ls.normalize(),jo.crossVectors(Jn,ls),s[0]=ls.x,s[4]=jo.x,s[8]=Jn.x,s[1]=ls.y,s[5]=jo.y,s[9]=Jn.y,s[2]=ls.z,s[6]=jo.z,s[10]=Jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],y=n[7],M=n[11],O=n[15],I=s[0],L=s[4],U=s[8],K=s[12],x=s[1],b=s[5],G=s[9],k=s[13],H=s[2],ne=s[6],q=s[10],de=s[14],Y=s[3],we=s[7],Te=s[11],ke=s[15];return r[0]=o*I+a*x+l*H+c*Y,r[4]=o*L+a*b+l*ne+c*we,r[8]=o*U+a*G+l*q+c*Te,r[12]=o*K+a*k+l*de+c*ke,r[1]=h*I+u*x+d*H+p*Y,r[5]=h*L+u*b+d*ne+p*we,r[9]=h*U+u*G+d*q+p*Te,r[13]=h*K+u*k+d*de+p*ke,r[2]=g*I+_*x+m*H+f*Y,r[6]=g*L+_*b+m*ne+f*we,r[10]=g*U+_*G+m*q+f*Te,r[14]=g*K+_*k+m*de+f*ke,r[3]=E*I+y*x+M*H+O*Y,r[7]=E*L+y*b+M*ne+O*we,r[11]=E*U+y*G+M*q+O*Te,r[15]=E*K+y*k+M*de+O*ke,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+_*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],E=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,y=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,M=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,O=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,I=t*E+n*y+s*M+r*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/I;return e[0]=E*L,e[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*L,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*L,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*L,e[4]=y*L,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*L,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*L,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*L,e[8]=M*L,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*f-t*u*f)*L,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*L,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*L,e[12]=O*L,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*L,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*L,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*L,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,E=l*c,y=l*h,M=l*u,O=n.x,I=n.y,L=n.z;return s[0]=(1-(_+f))*O,s[1]=(p+M)*O,s[2]=(g-y)*O,s[3]=0,s[4]=(p-M)*I,s[5]=(1-(d+f))*I,s[6]=(m+E)*I,s[7]=0,s[8]=(g+y)*L,s[9]=(m-E)*L,s[10]=(1-(d+_))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=tr.set(s[0],s[1],s[2]).length();const o=tr.set(s[4],s[5],s[6]).length(),a=tr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],_i.copy(this);const c=1/r,h=1/o,u=1/a;return _i.elements[0]*=c,_i.elements[1]*=c,_i.elements[2]*=c,_i.elements[4]*=h,_i.elements[5]*=h,_i.elements[6]*=h,_i.elements[8]*=u,_i.elements[9]*=u,_i.elements[10]*=u,t.setFromRotationMatrix(_i),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Qi){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(a===Qi)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ha)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Qi){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,p=(n+s)*h;let g,_;if(a===Qi)g=(o+r)*u,_=-2*u;else if(a===Ha)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const tr=new z,_i=new mt,Em=new z(0,0,0),wm=new z(1,1,1),ls=new z,jo=new z,Jn=new z,vu=new mt,xu=new Fi;class Oi{constructor(e=0,t=0,n=0,s=Oi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Cn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Cn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Cn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Cn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Cn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Cn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return vu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return xu.setFromEuler(this),this.setFromQuaternion(xu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Oi.DEFAULT_ORDER="XYZ";class mf{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Tm=0;const yu=new z,nr=new Fi,Xi=new mt,Ko=new z,Jr=new z,Am=new z,Rm=new Fi,Mu=new z(1,0,0),Su=new z(0,1,0),bu=new z(0,0,1),Eu={type:"added"},Cm={type:"removed"},ir={type:"childadded",child:null},Dl={type:"childremoved",child:null};class jt extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Tm++}),this.uuid=Si(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=jt.DEFAULT_UP.clone();const e=new z,t=new Oi,n=new Fi,s=new z(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new mt},normalMatrix:{value:new Tt}}),this.matrix=new mt,this.matrixWorld=new mt,this.matrixAutoUpdate=jt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new mf,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(Mu,e)}rotateY(e){return this.rotateOnAxis(Su,e)}rotateZ(e){return this.rotateOnAxis(bu,e)}translateOnAxis(e,t){return yu.copy(e).applyQuaternion(this.quaternion),this.position.add(yu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mu,e)}translateY(e){return this.translateOnAxis(Su,e)}translateZ(e){return this.translateOnAxis(bu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Xi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Ko.copy(e):Ko.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xi.lookAt(Jr,Ko,this.up):Xi.lookAt(Ko,Jr,this.up),this.quaternion.setFromRotationMatrix(Xi),s&&(Xi.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(Xi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Eu),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Cm),Dl.child=e,this.dispatchEvent(Dl),Dl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Xi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Xi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Xi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Eu),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,e,Am),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Jr,Rm,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}jt.DEFAULT_UP=new z(0,1,0);jt.DEFAULT_MATRIX_AUTO_UPDATE=!0;jt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const vi=new z,qi=new z,Nl=new z,Yi=new z,sr=new z,rr=new z,wu=new z,Ul=new z,Fl=new z,Ol=new z,Bl=new Ut,kl=new Ut,zl=new Ut;class li{constructor(e=new z,t=new z,n=new z){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),vi.subVectors(e,t),s.cross(vi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){vi.subVectors(s,t),qi.subVectors(n,t),Nl.subVectors(e,t);const o=vi.dot(vi),a=vi.dot(qi),l=vi.dot(Nl),c=qi.dot(qi),h=qi.dot(Nl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Yi)===null?!1:Yi.x>=0&&Yi.y>=0&&Yi.x+Yi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Yi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yi.x),l.addScaledVector(o,Yi.y),l.addScaledVector(a,Yi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Bl.setScalar(0),kl.setScalar(0),zl.setScalar(0),Bl.fromBufferAttribute(e,t),kl.fromBufferAttribute(e,n),zl.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Bl,r.x),o.addScaledVector(kl,r.y),o.addScaledVector(zl,r.z),o}static isFrontFacing(e,t,n,s){return vi.subVectors(n,t),qi.subVectors(e,t),vi.cross(qi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return vi.subVectors(this.c,this.b),qi.subVectors(this.a,this.b),vi.cross(qi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return li.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;sr.subVectors(s,n),rr.subVectors(r,n),Ul.subVectors(e,n);const l=sr.dot(Ul),c=rr.dot(Ul);if(l<=0&&c<=0)return t.copy(n);Fl.subVectors(e,s);const h=sr.dot(Fl),u=rr.dot(Fl);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(sr,o);Ol.subVectors(e,r);const p=sr.dot(Ol),g=rr.dot(Ol);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(rr,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return wu.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(wu,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(sr,o).addScaledVector(rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const gf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},cs={h:0,s:0,l:0},Zo={h:0,s:0,l:0};function Hl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Gt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Dt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Dt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Dt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Dt.workingColorSpace){if(e=Nh(e,1),t=Cn(t,0,1),n=Cn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Hl(o,r,e+1/3),this.g=Hl(o,r,e),this.b=Hl(o,r,e-1/3)}return Dt.toWorkingColorSpace(this,s),this}setStyle(e,t=Gt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Gt){const n=gf[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=wl(e.r),this.g=wl(e.g),this.b=wl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Gt){return Dt.fromWorkingColorSpace(Nn.copy(this),e),Math.round(Cn(Nn.r*255,0,255))*65536+Math.round(Cn(Nn.g*255,0,255))*256+Math.round(Cn(Nn.b*255,0,255))}getHexString(e=Gt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Dt.workingColorSpace){Dt.fromWorkingColorSpace(Nn.copy(this),t);const n=Nn.r,s=Nn.g,r=Nn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Dt.workingColorSpace){return Dt.fromWorkingColorSpace(Nn.copy(this),t),e.r=Nn.r,e.g=Nn.g,e.b=Nn.b,e}getStyle(e=Gt){Dt.fromWorkingColorSpace(Nn.copy(this),e);const t=Nn.r,n=Nn.g,s=Nn.b;return e!==Gt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(cs),this.setHSL(cs.h+e,cs.s+t,cs.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(cs),e.getHSL(Zo);const n=mo(cs.h,Zo.h,t),s=mo(cs.s,Zo.s,t),r=mo(cs.l,Zo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Nn=new Xe;Xe.NAMES=gf;let Pm=0;class bi extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Pm++}),this.uuid=Si(),this.name="",this.type="Material",this.blending=Mr,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Sc,this.blendDst=bc,this.blendEquation=Ds,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=uu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(n.blending=this.blending),this.side!==ts&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Sc&&(n.blendSrc=this.blendSrc),this.blendDst!==bc&&(n.blendDst=this.blendDst),this.blendEquation!==Ds&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==uu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sn extends bi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.combine=Xd,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ji=Lm();function Lm(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Im(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Cn(i,-65504,65504),Ji.floatView[0]=i;const e=Ji.uint32View[0],t=e>>23&511;return Ji.baseTable[t]+((e&8388607)>>Ji.shiftTable[t])}function Dm(i){const e=i>>10;return Ji.uint32View[0]=Ji.mantissaTable[Ji.offsetTable[e]+(i&1023)]+Ji.exponentTable[e],Ji.floatView[0]}const Jo={toHalfFloat:Im,fromHalfFloat:Dm},dn=new z,Qo=new Je;class Rn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=oh,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Qo.fromBufferAttribute(this,t),Qo.applyMatrix3(e),this.setXY(t,Qo.x,Qo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Mi(t,this.array)),t}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Mi(t,this.array)),t}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Mi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Mi(t,this.array)),t}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==oh&&(e.usage=this.usage),e}}class _f extends Rn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class vf extends Rn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Ft extends Rn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let Nm=0;const ii=new mt,Vl=new jt,or=new z,Qn=new Gn,Qr=new Gn,bn=new z;class Qt extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Nm++}),this.uuid=Si(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(df(e)?vf:_f)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ii.makeRotationFromQuaternion(e),this.applyMatrix4(ii),this}rotateX(e){return ii.makeRotationX(e),this.applyMatrix4(ii),this}rotateY(e){return ii.makeRotationY(e),this.applyMatrix4(ii),this}rotateZ(e){return ii.makeRotationZ(e),this.applyMatrix4(ii),this}translate(e,t,n){return ii.makeTranslation(e,t,n),this.applyMatrix4(ii),this}scale(e,t,n){return ii.makeScale(e,t,n),this.applyMatrix4(ii),this}lookAt(e){return Vl.lookAt(e),Vl.updateMatrix(),this.applyMatrix4(Vl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Ft(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Gn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new z(-1/0,-1/0,-1/0),new z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Qn.setFromBufferAttribute(r),this.morphTargetsRelative?(bn.addVectors(this.boundingBox.min,Qn.min),this.boundingBox.expandByPoint(bn),bn.addVectors(this.boundingBox.max,Qn.max),this.boundingBox.expandByPoint(bn)):(this.boundingBox.expandByPoint(Qn.min),this.boundingBox.expandByPoint(Qn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Bi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new z,1/0);return}if(e){const n=this.boundingSphere.center;if(Qn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Qr.setFromBufferAttribute(a),this.morphTargetsRelative?(bn.addVectors(Qn.min,Qr.min),Qn.expandByPoint(bn),bn.addVectors(Qn.max,Qr.max),Qn.expandByPoint(bn)):(Qn.expandByPoint(Qr.min),Qn.expandByPoint(Qr.max))}Qn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)bn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(bn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)bn.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),bn.add(or)),s=Math.max(s,n.distanceToSquared(bn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Rn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new z,l[U]=new z;const c=new z,h=new z,u=new z,d=new Je,p=new Je,g=new Je,_=new z,m=new z;function f(U,K,x){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,K),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,K),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(b),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(b),a[U].add(_),a[K].add(_),a[x].add(_),l[U].add(m),l[K].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,K=E.length;U<K;++U){const x=E[U],b=x.start,G=x.count;for(let k=b,H=b+G;k<H;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new z,M=new z,O=new z,I=new z;function L(U){O.fromBufferAttribute(s,U),I.copy(O);const K=a[U];y.copy(K),y.sub(O.multiplyScalar(O.dot(K))).normalize(),M.crossVectors(I,K);const b=M.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,b)}for(let U=0,K=E.length;U<K;++U){const x=E[U],b=x.start,G=x.count;for(let k=b,H=b+G;k<H;k+=3)L(e.getX(k+0)),L(e.getX(k+1)),L(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Rn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new z,r=new z,o=new z,a=new z,l=new z,c=new z,h=new z,u=new z;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)bn.fromBufferAttribute(e,t),bn.normalize(),e.setXYZ(t,bn.x,bn.y,bn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new Rn(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Tu=new mt,ws=new Za,ea=new Bi,Au=new z,ta=new z,na=new z,ia=new z,Gl=new z,sa=new z,Ru=new z,ra=new z;class Ae extends jt{constructor(e=new Qt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){sa.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Gl.fromBufferAttribute(u,e),o?sa.addScaledVector(Gl,h):sa.addScaledVector(Gl.sub(t),h))}t.add(sa)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ea.copy(n.boundingSphere),ea.applyMatrix4(r),ws.copy(e.ray).recast(e.near),!(ea.containsPoint(ws.origin)===!1&&(ws.intersectSphere(ea,Au)===null||ws.origin.distanceToSquared(Au)>(e.far-e.near)**2))&&(Tu.copy(r).invert(),ws.copy(e.ray).applyMatrix4(Tu),!(n.boundingBox!==null&&ws.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,ws)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,O=y;M<O;M+=3){const I=a.getX(M),L=a.getX(M+1),U=a.getX(M+2);s=oa(this,f,e,n,c,h,u,I,L,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=oa(this,o,e,n,c,h,u,E,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,O=y;M<O;M+=3){const I=M,L=M+1,U=M+2;s=oa(this,f,e,n,c,h,u,I,L,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,y=m+1,M=m+2;s=oa(this,o,e,n,c,h,u,E,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Um(i,e,t,n,s,r,o,a){let l;if(e.side===An?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===ts,a),l===null)return null;ra.copy(a),ra.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ra);return c<t.near||c>t.far?null:{distance:c,point:ra.clone(),object:i}}function oa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,ta),i.getVertexPosition(l,na),i.getVertexPosition(c,ia);const h=Um(i,e,t,n,ta,na,ia,Ru);if(h){const u=new z;li.getBarycoord(Ru,ta,na,ia,u),s&&(h.uv=li.getInterpolatedAttribute(s,a,l,c,u,new Je)),r&&(h.uv1=li.getInterpolatedAttribute(r,a,l,c,u,new Je)),o&&(h.normal=li.getInterpolatedAttribute(o,a,l,c,u,new z),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new z,materialIndex:0};li.getNormal(ta,na,ia,d.normal),h.face=d,h.barycoord=u}return h}class It extends Qt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Ft(c,3)),this.setAttribute("normal",new Ft(h,3)),this.setAttribute("uv",new Ft(u,2));function g(_,m,f,E,y,M,O,I,L,U,K){const x=M/L,b=O/U,G=M/2,k=O/2,H=I/2,ne=L+1,q=U+1;let de=0,Y=0;const we=new z;for(let Te=0;Te<q;Te++){const ke=Te*b-k;for(let st=0;st<ne;st++){const lt=st*x-G;we[_]=lt*E,we[m]=ke*y,we[f]=H,c.push(we.x,we.y,we.z),we[_]=0,we[m]=0,we[f]=I>0?1:-1,h.push(we.x,we.y,we.z),u.push(st/L),u.push(1-Te/U),de+=1}}for(let Te=0;Te<U;Te++)for(let ke=0;ke<L;ke++){const st=d+ke+ne*Te,lt=d+ke+ne*(Te+1),ce=d+(ke+1)+ne*(Te+1),_e=d+(ke+1)+ne*Te;l.push(st,lt,_e),l.push(lt,ce,_e),Y+=6}a.addGroup(p,Y,K),p+=Y,d+=de}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new It(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ir(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Vn(i){const e={};for(let t=0;t<i.length;t++){const n=Ir(i[t]);for(const s in n)e[s]=n[s]}return e}function Fm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function xf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Dt.workingColorSpace}const Mo={clone:Ir,merge:Vn};var Om=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Bm=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class on extends bi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Om,this.fragmentShader=Bm,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=Fm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class yf extends jt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new mt,this.projectionMatrix=new mt,this.projectionMatrixInverse=new mt,this.coordinateSystem=Qi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hs=new z,Cu=new Je,Pu=new Je;class vn extends yf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(po*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(po*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){hs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(hs.x,hs.y).multiplyScalar(-e/hs.z),hs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hs.x,hs.y).multiplyScalar(-e/hs.z)}getViewSize(e,t){return this.getViewBounds(e,Cu,Pu),t.subVectors(Pu,Cu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(po*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,lr=1;class Mf extends jt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vn(ar,lr,e,t);s.layers=this.layers,this.add(s);const r=new vn(ar,lr,e,t);r.layers=this.layers,this.add(r);const o=new vn(ar,lr,e,t);o.layers=this.layers,this.add(o);const a=new vn(ar,lr,e,t);a.layers=this.layers,this.add(a);const l=new vn(ar,lr,e,t);l.layers=this.layers,this.add(l);const c=new vn(ar,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Qi)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ha)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class Sf extends mn{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ar,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class bf extends hi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new Sf(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:pn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new It(5,5,5),r=new on({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:An,blending:es});r.uniforms.tEquirect.value=t;const o=new Ae(s,r),a=t.minFilter;return t.minFilter===Ui&&(t.minFilter=pn),new Mf(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const Wl=new z,km=new z,zm=new Tt;class Ls{constructor(e=new z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=Wl.subVectors(n,t).cross(km.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(Wl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||zm.getNormalMatrix(e),s=this.coplanarPoint(Wl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ts=new Bi,aa=new z;class Uh{constructor(e=new Ls,t=new Ls,n=new Ls,s=new Ls,r=new Ls,o=new Ls){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Qi){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],E=s[13],y=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-p,M-f).normalize(),n[1].setComponents(l+r,d+c,m+p,M+f).normalize(),n[2].setComponents(l+o,d+h,m+g,M+E).normalize(),n[3].setComponents(l-o,d-h,m-g,M-E).normalize(),n[4].setComponents(l-a,d-u,m-_,M-y).normalize(),t===Qi)n[5].setComponents(l+a,d+u,m+_,M+y).normalize();else if(t===Ha)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ts.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Ts.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ts)}intersectsSprite(e){return Ts.center.set(0,0,0),Ts.radius=.7071067811865476,Ts.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ts)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(aa.x=s.normal.x>0?e.max.x:e.min.x,aa.y=s.normal.y>0?e.max.y:e.min.y,aa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(aa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Ef(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Hm(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class wn extends Qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*d-o;for(let y=0;y<c;y++){const M=y*u-r;g.push(M,-E,0),_.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const y=E+c*f,M=E+c*(f+1),O=E+1+c*(f+1),I=E+1+c*f;p.push(y,M,I),p.push(M,O,I)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Vm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Gm=`#ifdef USE_ALPHAHASH
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
#endif`,Wm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Xm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ym=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,$m=`#ifdef USE_AOMAP
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
#endif`,jm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Km=`#ifdef USE_BATCHING
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
#endif`,Zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Jm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Qm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,e0=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,t0=`#ifdef USE_IRIDESCENCE
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
#endif`,n0=`#ifdef USE_BUMPMAP
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
#endif`,i0=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,s0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,r0=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,o0=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,a0=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,l0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,c0=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,h0=`#if defined( USE_COLOR_ALPHA )
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
#endif`,u0=`#define PI 3.141592653589793
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
} // validated`,d0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,f0=`vec3 transformedNormal = objectNormal;
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
#endif`,p0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,m0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,g0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,v0="gl_FragColor = linearToOutputTexel( gl_FragColor );",x0=`
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
}`,y0=`#ifdef USE_ENVMAP
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
#endif`,M0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,S0=`#ifdef USE_ENVMAP
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
#endif`,b0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,E0=`#ifdef USE_ENVMAP
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
#endif`,w0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,T0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,A0=`#ifdef USE_FOG
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
#endif`,C0=`#ifdef USE_GRADIENTMAP
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
}`,P0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,L0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,I0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,D0=`uniform bool receiveShadow;
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
#endif`,N0=`#ifdef USE_ENVMAP
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
#endif`,U0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,F0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,O0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,B0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,k0=`PhysicalMaterial material;
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
#endif`,z0=`struct PhysicalMaterial {
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
}`,H0=`
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
#endif`,V0=`#if defined( RE_IndirectDiffuse )
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
#endif`,G0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,W0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,X0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,q0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Y0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,$0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,j0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,K0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Z0=`#if defined( USE_POINTS_UV )
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
#endif`,J0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Q0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,eg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,tg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,ng=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,ig=`#ifdef USE_MORPHTARGETS
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
#endif`,sg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,rg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,og=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,ag=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,cg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,hg=`#ifdef USE_NORMALMAP
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
#endif`,ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,dg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,_g=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Mg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Sg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,bg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Eg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,wg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Tg=`float getShadowMask() {
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
}`,Ag=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Rg=`#ifdef USE_SKINNING
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
#endif`,Cg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Pg=`#ifdef USE_SKINNING
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
#endif`,Lg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Ig=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Dg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Ng=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Ug=`#ifdef USE_TRANSMISSION
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
#endif`,Fg=`#ifdef USE_TRANSMISSION
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
#endif`,Og=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,kg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,zg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Hg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Vg=`uniform sampler2D t2D;
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
}`,Gg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Wg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Xg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Yg=`#include <common>
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
}`,$g=`#if DEPTH_PACKING == 3200
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
}`,jg=`#define DISTANCE
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
}`,Kg=`#define DISTANCE
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
}`,Zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Jg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Qg=`uniform float scale;
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
}`,e_=`uniform vec3 diffuse;
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
}`,t_=`#include <common>
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
}`,n_=`uniform vec3 diffuse;
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
}`,i_=`#define LAMBERT
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
}`,s_=`#define LAMBERT
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
}`,r_=`#define MATCAP
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
}`,o_=`#define MATCAP
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
}`,a_=`#define NORMAL
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
}`,l_=`#define NORMAL
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
}`,c_=`#define PHONG
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
}`,h_=`#define PHONG
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
}`,u_=`#define STANDARD
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
}`,d_=`#define STANDARD
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
}`,f_=`#define TOON
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
}`,p_=`#define TOON
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
}`,m_=`uniform float size;
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
}`,g_=`uniform vec3 diffuse;
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
}`,__=`#include <common>
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
}`,v_=`uniform vec3 color;
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
}`,x_=`uniform float rotation;
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
}`,y_=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:Vm,alphahash_pars_fragment:Gm,alphamap_fragment:Wm,alphamap_pars_fragment:Xm,alphatest_fragment:qm,alphatest_pars_fragment:Ym,aomap_fragment:$m,aomap_pars_fragment:jm,batching_pars_vertex:Km,batching_vertex:Zm,begin_vertex:Jm,beginnormal_vertex:Qm,bsdfs:e0,iridescence_fragment:t0,bumpmap_pars_fragment:n0,clipping_planes_fragment:i0,clipping_planes_pars_fragment:s0,clipping_planes_pars_vertex:r0,clipping_planes_vertex:o0,color_fragment:a0,color_pars_fragment:l0,color_pars_vertex:c0,color_vertex:h0,common:u0,cube_uv_reflection_fragment:d0,defaultnormal_vertex:f0,displacementmap_pars_vertex:p0,displacementmap_vertex:m0,emissivemap_fragment:g0,emissivemap_pars_fragment:_0,colorspace_fragment:v0,colorspace_pars_fragment:x0,envmap_fragment:y0,envmap_common_pars_fragment:M0,envmap_pars_fragment:S0,envmap_pars_vertex:b0,envmap_physical_pars_fragment:N0,envmap_vertex:E0,fog_vertex:w0,fog_pars_vertex:T0,fog_fragment:A0,fog_pars_fragment:R0,gradientmap_pars_fragment:C0,lightmap_pars_fragment:P0,lights_lambert_fragment:L0,lights_lambert_pars_fragment:I0,lights_pars_begin:D0,lights_toon_fragment:U0,lights_toon_pars_fragment:F0,lights_phong_fragment:O0,lights_phong_pars_fragment:B0,lights_physical_fragment:k0,lights_physical_pars_fragment:z0,lights_fragment_begin:H0,lights_fragment_maps:V0,lights_fragment_end:G0,logdepthbuf_fragment:W0,logdepthbuf_pars_fragment:X0,logdepthbuf_pars_vertex:q0,logdepthbuf_vertex:Y0,map_fragment:$0,map_pars_fragment:j0,map_particle_fragment:K0,map_particle_pars_fragment:Z0,metalnessmap_fragment:J0,metalnessmap_pars_fragment:Q0,morphinstance_vertex:eg,morphcolor_vertex:tg,morphnormal_vertex:ng,morphtarget_pars_vertex:ig,morphtarget_vertex:sg,normal_fragment_begin:rg,normal_fragment_maps:og,normal_pars_fragment:ag,normal_pars_vertex:lg,normal_vertex:cg,normalmap_pars_fragment:hg,clearcoat_normal_fragment_begin:ug,clearcoat_normal_fragment_maps:dg,clearcoat_pars_fragment:fg,iridescence_pars_fragment:pg,opaque_fragment:mg,packing:gg,premultiplied_alpha_fragment:_g,project_vertex:vg,dithering_fragment:xg,dithering_pars_fragment:yg,roughnessmap_fragment:Mg,roughnessmap_pars_fragment:Sg,shadowmap_pars_fragment:bg,shadowmap_pars_vertex:Eg,shadowmap_vertex:wg,shadowmask_pars_fragment:Tg,skinbase_vertex:Ag,skinning_pars_vertex:Rg,skinning_vertex:Cg,skinnormal_vertex:Pg,specularmap_fragment:Lg,specularmap_pars_fragment:Ig,tonemapping_fragment:Dg,tonemapping_pars_fragment:Ng,transmission_fragment:Ug,transmission_pars_fragment:Fg,uv_pars_fragment:Og,uv_pars_vertex:Bg,uv_vertex:kg,worldpos_vertex:zg,background_vert:Hg,background_frag:Vg,backgroundCube_vert:Gg,backgroundCube_frag:Wg,cube_vert:Xg,cube_frag:qg,depth_vert:Yg,depth_frag:$g,distanceRGBA_vert:jg,distanceRGBA_frag:Kg,equirect_vert:Zg,equirect_frag:Jg,linedashed_vert:Qg,linedashed_frag:e_,meshbasic_vert:t_,meshbasic_frag:n_,meshlambert_vert:i_,meshlambert_frag:s_,meshmatcap_vert:r_,meshmatcap_frag:o_,meshnormal_vert:a_,meshnormal_frag:l_,meshphong_vert:c_,meshphong_frag:h_,meshphysical_vert:u_,meshphysical_frag:d_,meshtoon_vert:f_,meshtoon_frag:p_,points_vert:m_,points_frag:g_,shadow_vert:__,shadow_frag:v_,sprite_vert:x_,sprite_frag:y_},ze={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new Je(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Je(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},Ii={basic:{uniforms:Vn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Vn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Xe(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Vn([ze.common,ze.specularmap,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,ze.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Vn([ze.common,ze.envmap,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.roughnessmap,ze.metalnessmap,ze.fog,ze.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Vn([ze.common,ze.aomap,ze.lightmap,ze.emissivemap,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.gradientmap,ze.fog,ze.lights,{emissive:{value:new Xe(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Vn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,ze.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Vn([ze.points,ze.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Vn([ze.common,ze.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Vn([ze.common,ze.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Vn([ze.common,ze.bumpmap,ze.normalmap,ze.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Vn([ze.sprite,ze.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:Vn([ze.common,ze.displacementmap,{referencePosition:{value:new z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:Vn([ze.lights,ze.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Ii.physical={uniforms:Vn([Ii.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new Je(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new Je},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new Je},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const la={r:0,b:0,g:0},As=new Oi,M_=new mt;function S_(i,e,t,n,s,r,o){const a=new Xe(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function _(E){let y=!1;const M=g(E);M===null?f(a,l):M&&M.isColor&&(f(M,1),y=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===ja)?(h===void 0&&(h=new Ae(new It(1,1,1),new on({name:"BackgroundCubeMaterial",uniforms:Ir(Ii.backgroundCube.uniforms),vertexShader:Ii.backgroundCube.vertexShader,fragmentShader:Ii.backgroundCube.fragmentShader,side:An,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,I,L){this.matrixWorld.copyPosition(L.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),As.copy(y.backgroundRotation),As.x*=-1,As.y*=-1,As.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(As.y*=-1,As.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(M_.makeRotationFromEuler(As)),h.material.toneMapped=Dt.getTransfer(M.colorSpace)!==Wt,(u!==M||d!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ae(new wn(2,2),new on({name:"BackgroundMaterial",uniforms:Ir(Ii.background.uniforms),vertexShader:Ii.background.vertexShader,fragmentShader:Ii.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Dt.getTransfer(M.colorSpace)!==Wt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,y){E.getRGB(la,xf(i)),n.buffers.color.setClear(la.r,la.g,la.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:_,addToRenderList:m}}function b_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,b,G,k,H){let ne=!1;const q=u(k,G,b);r!==q&&(r=q,c(r.object)),ne=p(x,k,G,H),ne&&g(x,k,G,H),H!==null&&e.update(H,i.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,M(x,b,G,k),H!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(H).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,b,G){const k=G.wireframe===!0;let H=n[x.id];H===void 0&&(H={},n[x.id]=H);let ne=H[b.id];ne===void 0&&(ne={},H[b.id]=ne);let q=ne[k];return q===void 0&&(q=d(l()),ne[k]=q),q}function d(x){const b=[],G=[],k=[];for(let H=0;H<t;H++)b[H]=0,G[H]=0,k[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:G,attributeDivisors:k,object:x,attributes:{},index:null}}function p(x,b,G,k){const H=r.attributes,ne=b.attributes;let q=0;const de=G.getAttributes();for(const Y in de)if(de[Y].location>=0){const Te=H[Y];let ke=ne[Y];if(ke===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(ke=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(ke=x.instanceColor)),Te===void 0||Te.attribute!==ke||ke&&Te.data!==ke.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function g(x,b,G,k){const H={},ne=b.attributes;let q=0;const de=G.getAttributes();for(const Y in de)if(de[Y].location>=0){let Te=ne[Y];Te===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(Te=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(Te=x.instanceColor));const ke={};ke.attribute=Te,Te&&Te.data&&(ke.data=Te.data),H[Y]=ke,q++}r.attributes=H,r.attributesNum=q,r.index=k}function _(){const x=r.newAttributes;for(let b=0,G=x.length;b<G;b++)x[b]=0}function m(x){f(x,0)}function f(x,b){const G=r.newAttributes,k=r.enabledAttributes,H=r.attributeDivisors;G[x]=1,k[x]===0&&(i.enableVertexAttribArray(x),k[x]=1),H[x]!==b&&(i.vertexAttribDivisor(x,b),H[x]=b)}function E(){const x=r.newAttributes,b=r.enabledAttributes;for(let G=0,k=b.length;G<k;G++)b[G]!==x[G]&&(i.disableVertexAttribArray(G),b[G]=0)}function y(x,b,G,k,H,ne,q){q===!0?i.vertexAttribIPointer(x,b,G,H,ne):i.vertexAttribPointer(x,b,G,k,H,ne)}function M(x,b,G,k){_();const H=k.attributes,ne=G.getAttributes(),q=b.defaultAttributeValues;for(const de in ne){const Y=ne[de];if(Y.location>=0){let we=H[de];if(we===void 0&&(de==="instanceMatrix"&&x.instanceMatrix&&(we=x.instanceMatrix),de==="instanceColor"&&x.instanceColor&&(we=x.instanceColor)),we!==void 0){const Te=we.normalized,ke=we.itemSize,st=e.get(we);if(st===void 0)continue;const lt=st.buffer,ce=st.type,_e=st.bytesPerElement,Fe=ce===i.INT||ce===i.UNSIGNED_INT||we.gpuType===Th;if(we.isInterleavedBufferAttribute){const Ce=we.data,$e=Ce.stride,Ye=we.offset;if(Ce.isInstancedInterleavedBuffer){for(let ht=0;ht<Y.locationSize;ht++)f(Y.location+ht,Ce.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ht=0;ht<Y.locationSize;ht++)m(Y.location+ht);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let ht=0;ht<Y.locationSize;ht++)y(Y.location+ht,ke/Y.locationSize,ce,Te,$e*_e,(Ye+ke/Y.locationSize*ht)*_e,Fe)}else{if(we.isInstancedBufferAttribute){for(let Ce=0;Ce<Y.locationSize;Ce++)f(Y.location+Ce,we.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Ce=0;Ce<Y.locationSize;Ce++)m(Y.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,lt);for(let Ce=0;Ce<Y.locationSize;Ce++)y(Y.location+Ce,ke/Y.locationSize,ce,Te,ke*_e,ke/Y.locationSize*Ce*_e,Fe)}}else if(q!==void 0){const Te=q[de];if(Te!==void 0)switch(Te.length){case 2:i.vertexAttrib2fv(Y.location,Te);break;case 3:i.vertexAttrib3fv(Y.location,Te);break;case 4:i.vertexAttrib4fv(Y.location,Te);break;default:i.vertexAttrib1fv(Y.location,Te)}}}}E()}function O(){U();for(const x in n){const b=n[x];for(const G in b){const k=b[G];for(const H in k)h(k[H].object),delete k[H];delete b[G]}delete n[x]}}function I(x){if(n[x.id]===void 0)return;const b=n[x.id];for(const G in b){const k=b[G];for(const H in k)h(k[H].object),delete k[H];delete b[G]}delete n[x.id]}function L(x){for(const b in n){const G=n[b];if(G[x.id]===void 0)continue;const k=G[x.id];for(const H in k)h(k[H].object),delete k[H];delete G[x.id]}}function U(){K(),o=!0,r!==s&&(r=s,c(r.object))}function K(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:K,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:L,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function E_(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function w_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(L){return!(L!==ci&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(L){const U=L===Wn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==Ei&&n.convert(L)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==$n&&!U)}function l(L){if(L==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const L=e.get("EXT_clip_control");L.clipControlEXT(L.LOWER_LEFT_EXT,L.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:O,maxSamples:I}}function T_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Ls,a=new Tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,y=E*4;let M=f.clippingState||null;l.value=M,M=h(g,d,y,p);for(let O=0;O!==y;++O)M[O]=t[O];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,M=p;y!==_;++y,M+=4)o.copy(u[y]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function A_(i){let e=new WeakMap;function t(o,a){return a===Lc?o.mapping=Ar:a===Ic&&(o.mapping=Rr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Lc||a===Ic)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new bf(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class Ja extends yf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xr=4,Lu=[.125,.215,.35,.446,.526,.582],Ns=20,Xl=new Ja,Iu=new Xe;let ql=null,Yl=0,$l=0,jl=!1;const Is=(1+Math.sqrt(5))/2,cr=1/Is,Du=[new z(-Is,cr,0),new z(Is,cr,0),new z(-cr,0,Is),new z(cr,0,Is),new z(0,Is,-cr),new z(0,Is,cr),new z(-1,1,-1),new z(1,1,-1),new z(-1,1,1),new z(1,1,1)];class lh{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Fu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Uu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(ql,Yl,$l),this._renderer.xr.enabled=jl,e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),ql=this._renderer.getRenderTarget(),Yl=this._renderer.getActiveCubeFace(),$l=this._renderer.getActiveMipmapLevel(),jl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:Wn,format:ci,colorSpace:gn,depthBuffer:!1},s=Nu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Nu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=R_(r)),this._blurMaterial=C_(r,e,t)}return s}_compileMaterial(e){const t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,Xl)}_sceneToCubeUV(e,t,n,s){const a=new vn(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Iu),h.toneMapping=gs,h.autoClear=!1;const p=new sn({name:"PMREM.Background",side:An,depthWrite:!1,depthTest:!1}),g=new Ae(new It,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Iu),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;ca(s,E*y,f>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ar||e.mapping===Rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Fu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Uu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;ca(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,Xl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Du[(s-r-1)%Du.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ae(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Ns-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Ns;m>Ns&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ns}`);const f=[];let E=0;for(let L=0;L<Ns;++L){const U=L/_,K=Math.exp(-U*U/2);f.push(K),L===0?E+=K:L<m&&(E+=2*K)}for(let L=0;L<f.length;L++)f[L]=f[L]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const M=this._sizeLods[s],O=3*M*(s>y-xr?s-y+xr:0),I=4*(this._cubeSize-M);ca(t,O,I,3*M,2*M),l.setRenderTarget(t),l.render(u,Xl)}}function R_(i){const e=[],t=[],n=[];let s=i;const r=i-xr+1+Lu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-xr?l=Lu[o-i+xr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),y=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let I=0;I<p;I++){const L=I%3*2/3-1,U=I>2?0:-1,K=[L,U,0,L+2/3,U,0,L+2/3,U+1,0,L,U,0,L+2/3,U+1,0,L,U+1,0];E.set(K,_*g*I),y.set(d,m*g*I);const x=[I,I,I,I,I,I];M.set(x,f*g*I)}const O=new Qt;O.setAttribute("position",new Rn(E,_)),O.setAttribute("uv",new Rn(y,m)),O.setAttribute("faceIndex",new Rn(M,f)),e.push(O),s>xr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Nu(i,e,t){const n=new hi(i,e,t);return n.texture.mapping=ja,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function ca(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function C_(i,e,t){const n=new Float32Array(Ns),s=new z(0,1,0);return new on({name:"SphericalGaussianBlur",defines:{n:Ns,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Fh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Uu(){return new on({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Fh(),fragmentShader:`

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
		`,blending:es,depthTest:!1,depthWrite:!1})}function Fu(){return new on({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Fh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:es,depthTest:!1,depthWrite:!1})}function Fh(){return`

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
	`}function P_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Lc||l===Ic,h=l===Ar||l===Rr;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new lh(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new lh(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function L_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&La("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function I_(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let y=0,M=E.length;y<M;y+=3){const O=E[y+0],I=E[y+1],L=E[y+2];d.push(O,I,I,L,L,O)}}else if(g!==void 0){const E=g.array;_=g.version;for(let y=0,M=E.length/3-1;y<M;y+=3){const O=y+0,I=y+1,L=y+2;d.push(O,I,I,L,L,O)}}else return;const m=new(df(d)?vf:_f)(d,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function D_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E];for(let E=0;E<_.length;E++)t.update(f,n,_[E])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function N_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function U_(i,e,t){const n=new WeakMap,s=new Ut;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let K=function(){L.dispose(),n.delete(a),a.removeEventListener("dispose",K)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let M=a.attributes.position.count*y,O=1;M>e.maxTextureSize&&(O=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const I=new Float32Array(M*O*4*u),L=new pf(I,M,O,u);L.type=$n,L.needsUpdate=!0;const U=y*4;for(let x=0;x<u;x++){const b=m[x],G=f[x],k=E[x],H=M*O*4*x;for(let ne=0;ne<b.count;ne++){const q=ne*U;p===!0&&(s.fromBufferAttribute(b,ne),I[H+q+0]=s.x,I[H+q+1]=s.y,I[H+q+2]=s.z,I[H+q+3]=0),g===!0&&(s.fromBufferAttribute(G,ne),I[H+q+4]=s.x,I[H+q+5]=s.y,I[H+q+6]=s.z,I[H+q+7]=0),_===!0&&(s.fromBufferAttribute(k,ne),I[H+q+8]=s.x,I[H+q+9]=s.y,I[H+q+10]=s.z,I[H+q+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:L,size:new Je(M,O)},n.set(a,d),a.addEventListener("dispose",K)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function F_(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class wf extends mn{constructor(e,t,n,s,r,o,a,l,c,h=Sr){if(h!==Sr&&h!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Sr&&(n=Bs),n===void 0&&h===Pr&&(n=Cr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Pn,this.minFilter=l!==void 0?l:Pn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Tf=new mn,Ou=new wf(1,1),Af=new pf,Rf=new Sm,Cf=new Sf,Bu=[],ku=[],zu=new Float32Array(16),Hu=new Float32Array(9),Vu=new Float32Array(4);function kr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Bu[s];if(r===void 0&&(r=new Float32Array(s),Bu[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function xn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function yn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Qa(i,e){let t=ku[e];t===void 0&&(t=new Int32Array(e),ku[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function O_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function B_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2fv(this.addr,e),yn(t,e)}}function k_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(xn(t,e))return;i.uniform3fv(this.addr,e),yn(t,e)}}function z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4fv(this.addr,e),yn(t,e)}}function H_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,n))return;Vu.set(n),i.uniformMatrix2fv(this.addr,!1,Vu),yn(t,n)}}function V_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,n))return;Hu.set(n),i.uniformMatrix3fv(this.addr,!1,Hu),yn(t,n)}}function G_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(xn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),yn(t,e)}else{if(xn(t,n))return;zu.set(n),i.uniformMatrix4fv(this.addr,!1,zu),yn(t,n)}}function W_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function X_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2iv(this.addr,e),yn(t,e)}}function q_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3iv(this.addr,e),yn(t,e)}}function Y_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4iv(this.addr,e),yn(t,e)}}function $_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function j_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(xn(t,e))return;i.uniform2uiv(this.addr,e),yn(t,e)}}function K_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(xn(t,e))return;i.uniform3uiv(this.addr,e),yn(t,e)}}function Z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(xn(t,e))return;i.uniform4uiv(this.addr,e),yn(t,e)}}function J_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Ou.compareFunction=uf,r=Ou):r=Tf,t.setTexture2D(e||r,s)}function Q_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||Rf,s)}function ev(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||Cf,s)}function tv(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||Af,s)}function nv(i){switch(i){case 5126:return O_;case 35664:return B_;case 35665:return k_;case 35666:return z_;case 35674:return H_;case 35675:return V_;case 35676:return G_;case 5124:case 35670:return W_;case 35667:case 35671:return X_;case 35668:case 35672:return q_;case 35669:case 35673:return Y_;case 5125:return $_;case 36294:return j_;case 36295:return K_;case 36296:return Z_;case 35678:case 36198:case 36298:case 36306:case 35682:return J_;case 35679:case 36299:case 36307:return Q_;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return tv}}function iv(i,e){i.uniform1fv(this.addr,e)}function sv(i,e){const t=kr(e,this.size,2);i.uniform2fv(this.addr,t)}function rv(i,e){const t=kr(e,this.size,3);i.uniform3fv(this.addr,t)}function ov(i,e){const t=kr(e,this.size,4);i.uniform4fv(this.addr,t)}function av(i,e){const t=kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function lv(i,e){const t=kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function cv(i,e){const t=kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function hv(i,e){i.uniform1iv(this.addr,e)}function uv(i,e){i.uniform2iv(this.addr,e)}function dv(i,e){i.uniform3iv(this.addr,e)}function fv(i,e){i.uniform4iv(this.addr,e)}function pv(i,e){i.uniform1uiv(this.addr,e)}function mv(i,e){i.uniform2uiv(this.addr,e)}function gv(i,e){i.uniform3uiv(this.addr,e)}function _v(i,e){i.uniform4uiv(this.addr,e)}function vv(i,e,t){const n=this.cache,s=e.length,r=Qa(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||Tf,r[o])}function xv(i,e,t){const n=this.cache,s=e.length,r=Qa(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||Rf,r[o])}function yv(i,e,t){const n=this.cache,s=e.length,r=Qa(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||Cf,r[o])}function Mv(i,e,t){const n=this.cache,s=e.length,r=Qa(t,s);xn(n,r)||(i.uniform1iv(this.addr,r),yn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||Af,r[o])}function Sv(i){switch(i){case 5126:return iv;case 35664:return sv;case 35665:return rv;case 35666:return ov;case 35674:return av;case 35675:return lv;case 35676:return cv;case 5124:case 35670:return hv;case 35667:case 35671:return uv;case 35668:case 35672:return dv;case 35669:case 35673:return fv;case 5125:return pv;case 36294:return mv;case 36295:return gv;case 36296:return _v;case 35678:case 36198:case 36298:case 36306:case 35682:return vv;case 35679:case 36299:case 36307:return xv;case 35680:case 36300:case 36308:case 36293:return yv;case 36289:case 36303:case 36311:case 36292:return Mv}}class bv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=nv(t.type)}}class Ev{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Sv(t.type)}}class wv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Kl=/(\w+)(\])?(\[|\.)?/g;function Gu(i,e){i.seq.push(e),i.map[e.id]=e}function Tv(i,e,t){const n=i.name,s=n.length;for(Kl.lastIndex=0;;){const r=Kl.exec(n),o=Kl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Gu(t,c===void 0?new bv(a,i,e):new Ev(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new wv(a),Gu(t,u)),t=u}}}class Ia{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);Tv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Wu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const Av=37297;let Rv=0;function Cv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function Pv(i){const e=Dt.getPrimaries(Dt.workingColorSpace),t=Dt.getPrimaries(i);let n;switch(e===t?n="":e===za&&t===ka?n="LinearDisplayP3ToLinearSRGB":e===ka&&t===za&&(n="LinearSRGBToLinearDisplayP3"),i){case gn:case Ka:return[n,"LinearTransferOETF"];case Gt:case Dh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Xu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+Cv(i.getShaderSource(e),o)}else return s}function Lv(i,e){const t=Pv(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Iv(i,e){let t;switch(e){case qd:t="Linear";break;case Yd:t="Reinhard";break;case $d:t="Cineon";break;case wh:t="ACESFilmic";break;case jd:t="AgX";break;case Kd:t="Neutral";break;case Op:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const ha=new z;function Dv(){Dt.getLuminanceCoefficients(ha);const i=ha.x.toFixed(4),e=ha.y.toFixed(4),t=ha.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Nv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function Uv(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function Fv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function ho(i){return i!==""}function qu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yu(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Ov=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(i){return i.replace(Ov,kv)}const Bv=new Map;function kv(i,e){let t=wt[e];if(t===void 0){const n=Bv.get(e);if(n!==void 0)t=wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return ch(t)}const zv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function $u(i){return i.replace(zv,Hv)}function Hv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ju(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function Vv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Gd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Wd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Ki&&(e="SHADOWMAP_TYPE_VSM"),e}function Gv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ar:case Rr:e="ENVMAP_TYPE_CUBE";break;case ja:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Wv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Rr:e="ENVMAP_MODE_REFRACTION";break}return e}function Xv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Xd:e="ENVMAP_BLENDING_MULTIPLY";break;case Up:e="ENVMAP_BLENDING_MIX";break;case Fp:e="ENVMAP_BLENDING_ADD";break}return e}function qv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Yv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Vv(t),c=Gv(t),h=Wv(t),u=Xv(t),d=qv(t),p=Nv(t),g=Uv(r),_=s.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ho).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ho).join(`
`),f.length>0&&(f+=`
`)):(m=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),f=[ju(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==gs?"#define TONE_MAPPING":"",t.toneMapping!==gs?wt.tonemapping_pars_fragment:"",t.toneMapping!==gs?Iv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,Lv("linearToOutputTexel",t.outputColorSpace),Dv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),o=ch(o),o=qu(o,t),o=Yu(o,t),a=ch(a),a=qu(a,t),a=Yu(a,t),o=$u(o),a=$u(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===du?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===du?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=E+m+o,M=E+f+a,O=Wu(s,s.VERTEX_SHADER,y),I=Wu(s,s.FRAGMENT_SHADER,M);s.attachShader(_,O),s.attachShader(_,I),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function L(b){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(O).trim(),H=s.getShaderInfoLog(I).trim();let ne=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,O,I);else{const de=Xu(s,O,"vertex"),Y=Xu(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+G+`
`+de+`
`+Y)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||H==="")&&(q=!1);q&&(b.diagnostics={runnable:ne,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:H,prefix:f}})}s.deleteShader(O),s.deleteShader(I),U=new Ia(s,_),K=Fv(s,_)}let U;this.getUniforms=function(){return U===void 0&&L(this),U};let K;this.getAttributes=function(){return K===void 0&&L(this),K};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,Av)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Rv++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=I,this}let $v=0;class jv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Kv(e),t.set(e,n)),n}}class Kv{constructor(e){this.id=$v++,this.code=e,this.usedTimes=0}}function Zv(i,e,t,n,s,r,o){const a=new mf,l=new jv,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function f(x,b,G,k,H){const ne=k.fog,q=H.geometry,de=x.isMeshStandardMaterial?k.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||de),we=Y&&Y.mapping===ja?Y.image.height:null,Te=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const ke=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,st=ke!==void 0?ke.length:0;let lt=0;q.morphAttributes.position!==void 0&&(lt=1),q.morphAttributes.normal!==void 0&&(lt=2),q.morphAttributes.color!==void 0&&(lt=3);let ce,_e,Fe,Ce;if(Te){const Lt=Ii[Te];ce=Lt.vertexShader,_e=Lt.fragmentShader}else ce=x.vertexShader,_e=x.fragmentShader,l.update(x),Fe=l.getVertexShaderID(x),Ce=l.getFragmentShaderID(x);const $e=i.getRenderTarget(),Ye=H.isInstancedMesh===!0,ht=H.isBatchedMesh===!0,At=!!x.map,gt=!!x.matcap,V=!!Y,Kt=!!x.aoMap,ut=!!x.lightMap,dt=!!x.bumpMap,et=!!x.normalMap,vt=!!x.displacementMap,nt=!!x.emissiveMap,D=!!x.metalnessMap,S=!!x.roughnessMap,J=x.anisotropy>0,oe=x.clearcoat>0,he=x.dispersion>0,se=x.iridescence>0,Pe=x.sheen>0,Ee=x.transmission>0,Me=J&&!!x.anisotropyMap,ft=oe&&!!x.clearcoatMap,Se=oe&&!!x.clearcoatNormalMap,Ve=oe&&!!x.clearcoatRoughnessMap,Qe=se&&!!x.iridescenceMap,rt=se&&!!x.iridescenceThicknessMap,Ne=Pe&&!!x.sheenColorMap,_t=Pe&&!!x.sheenRoughnessMap,it=!!x.specularMap,St=!!x.specularColorMap,$=!!x.specularIntensityMap,Oe=Ee&&!!x.transmissionMap,ae=Ee&&!!x.thicknessMap,ve=!!x.gradientMap,Ie=!!x.alphaMap,Be=x.alphaTest>0,ot=!!x.alphaHash,Ot=!!x.extensions;let Xt=gs;x.toneMapped&&($e===null||$e.isXRRenderTarget===!0)&&(Xt=i.toneMapping);const xt={shaderID:Te,shaderType:x.type,shaderName:x.name,vertexShader:ce,fragmentShader:_e,defines:x.defines,customVertexShaderID:Fe,customFragmentShaderID:Ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:ht,batchingColor:ht&&H._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&H.instanceColor!==null,instancingMorph:Ye&&H.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:$e===null?i.outputColorSpace:$e.isXRRenderTarget===!0?$e.texture.colorSpace:gn,alphaToCoverage:!!x.alphaToCoverage,map:At,matcap:gt,envMap:V,envMapMode:V&&Y.mapping,envMapCubeUVHeight:we,aoMap:Kt,lightMap:ut,bumpMap:dt,normalMap:et,displacementMap:p&&vt,emissiveMap:nt,normalMapObjectSpace:et&&x.normalMapType===Gp,normalMapTangentSpace:et&&x.normalMapType===hf,metalnessMap:D,roughnessMap:S,anisotropy:J,anisotropyMap:Me,clearcoat:oe,clearcoatMap:ft,clearcoatNormalMap:Se,clearcoatRoughnessMap:Ve,dispersion:he,iridescence:se,iridescenceMap:Qe,iridescenceThicknessMap:rt,sheen:Pe,sheenColorMap:Ne,sheenRoughnessMap:_t,specularMap:it,specularColorMap:St,specularIntensityMap:$,transmission:Ee,transmissionMap:Oe,thicknessMap:ae,gradientMap:ve,opaque:x.transparent===!1&&x.blending===Mr&&x.alphaToCoverage===!1,alphaMap:Ie,alphaTest:Be,alphaHash:ot,combine:x.combine,mapUv:At&&m(x.map.channel),aoMapUv:Kt&&m(x.aoMap.channel),lightMapUv:ut&&m(x.lightMap.channel),bumpMapUv:dt&&m(x.bumpMap.channel),normalMapUv:et&&m(x.normalMap.channel),displacementMapUv:vt&&m(x.displacementMap.channel),emissiveMapUv:nt&&m(x.emissiveMap.channel),metalnessMapUv:D&&m(x.metalnessMap.channel),roughnessMapUv:S&&m(x.roughnessMap.channel),anisotropyMapUv:Me&&m(x.anisotropyMap.channel),clearcoatMapUv:ft&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:Se&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ve&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:rt&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ne&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:_t&&m(x.sheenRoughnessMap.channel),specularMapUv:it&&m(x.specularMap.channel),specularColorMapUv:St&&m(x.specularColorMap.channel),specularIntensityMapUv:$&&m(x.specularIntensityMap.channel),transmissionMapUv:Oe&&m(x.transmissionMap.channel),thicknessMapUv:ae&&m(x.thicknessMap.channel),alphaMapUv:Ie&&m(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(et||J),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(At||Ie),fog:!!ne,useFog:x.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:H.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:st,morphTextureStride:lt,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:Xt,decodeVideoTexture:At&&x.map.isVideoTexture===!0&&Dt.getTransfer(x.map.colorSpace)===Wt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===Tn,flipSided:x.side===An,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ot&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&x.extensions.multiDraw===!0||ht)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function E(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const G in x.defines)b.push(G),b.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(y(b,x),M(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),x.push(a.mask)}function O(x){const b=_[x.type];let G;if(b){const k=Ii[b];G=Mo.clone(k.uniforms)}else G=x.uniforms;return G}function I(x,b){let G;for(let k=0,H=h.length;k<H;k++){const ne=h[k];if(ne.cacheKey===b){G=ne,++G.usedTimes;break}}return G===void 0&&(G=new Yv(i,b,x,r),h.push(G)),G}function L(x){if(--x.usedTimes===0){const b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),x.destroy()}}function U(x){l.remove(x)}function K(){l.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:O,acquireProgram:I,releaseProgram:L,releaseShaderCache:U,programs:h,dispose:K}}function Jv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Qv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function Ku(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Zu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Qv),n.length>1&&n.sort(d||Ku),s.length>1&&s.sort(d||Ku)}function h(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function ex(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Zu,i.set(n,[o])):s>=r.length?(o=new Zu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function tx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new z,color:new Xe};break;case"SpotLight":t={position:new z,direction:new z,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new z,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new z,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new z,halfWidth:new z,halfHeight:new z};break}return i[e.id]=t,t}}}function nx(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Je,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let ix=0;function sx(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function rx(i){const e=new tx,t=nx(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new z);const s=new z,r=new mt,o=new mt;function a(c){let h=0,u=0,d=0;for(let K=0;K<9;K++)n.probe[K].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,y=0,M=0,O=0,I=0,L=0;c.sort(sx);for(let K=0,x=c.length;K<x;K++){const b=c[K],G=b.color,k=b.intensity,H=b.distance,ne=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=G.r*k,u+=G.g*k,d+=G.b*k;else if(b.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(b.sh.coefficients[q],k);L++}else if(b.isDirectionalLight){const q=e.get(b);if(q.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const de=b.shadow,Y=t.get(b);Y.shadowIntensity=de.intensity,Y.shadowBias=de.bias,Y.shadowNormalBias=de.normalBias,Y.shadowRadius=de.radius,Y.shadowMapSize=de.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=b.shadow.matrix,E++}n.directional[p]=q,p++}else if(b.isSpotLight){const q=e.get(b);q.position.setFromMatrixPosition(b.matrixWorld),q.color.copy(G).multiplyScalar(k),q.distance=H,q.coneCos=Math.cos(b.angle),q.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),q.decay=b.decay,n.spot[_]=q;const de=b.shadow;if(b.map&&(n.spotLightMap[O]=b.map,O++,de.updateMatrices(b),b.castShadow&&I++),n.spotLightMatrix[_]=de.matrix,b.castShadow){const Y=t.get(b);Y.shadowIntensity=de.intensity,Y.shadowBias=de.bias,Y.shadowNormalBias=de.normalBias,Y.shadowRadius=de.radius,Y.shadowMapSize=de.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=ne,M++}_++}else if(b.isRectAreaLight){const q=e.get(b);q.color.copy(G).multiplyScalar(k),q.halfWidth.set(b.width*.5,0,0),q.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=q,m++}else if(b.isPointLight){const q=e.get(b);if(q.color.copy(b.color).multiplyScalar(b.intensity),q.distance=b.distance,q.decay=b.decay,b.castShadow){const de=b.shadow,Y=t.get(b);Y.shadowIntensity=de.intensity,Y.shadowBias=de.bias,Y.shadowNormalBias=de.normalBias,Y.shadowRadius=de.radius,Y.shadowMapSize=de.mapSize,Y.shadowCameraNear=de.camera.near,Y.shadowCameraFar=de.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=ne,n.pointShadowMatrix[g]=b.shadow.matrix,y++}n.point[g]=q,g++}else if(b.isHemisphereLight){const q=e.get(b);q.skyColor.copy(b.color).multiplyScalar(k),q.groundColor.copy(b.groundColor).multiplyScalar(k),n.hemi[f]=q,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ze.LTC_FLOAT_1,n.rectAreaLTC2=ze.LTC_FLOAT_2):(n.rectAreaLTC1=ze.LTC_HALF_1,n.rectAreaLTC2=ze.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==E||U.numPointShadows!==y||U.numSpotShadows!==M||U.numSpotMaps!==O||U.numLightProbes!==L)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+O-I,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=L,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=E,U.numPointShadows=y,U.numSpotShadows=M,U.numSpotMaps=O,U.numLightProbes=L,n.version=ix++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const y=c[f];if(y.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(y.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Ju(i){const e=new rx(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function ox(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Ju(i),e.set(s,[a])):r>=o.length?(a=new Ju(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class ax extends bi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Hp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class lx extends bi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const cx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,hx=`uniform sampler2D shadow_pass;
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
}`;function ux(i,e,t){let n=new Uh;const s=new Je,r=new Je,o=new Ut,a=new ax({depthPacking:Vp}),l=new lx,c={},h=t.maxTextureSize,u={[ts]:An,[An]:ts,[Tn]:Tn},d=new on({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Je},radius:{value:4}},vertexShader:cx,fragmentShader:hx}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new Rn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ae(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gd;let f=this.type;this.render=function(I,L,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const K=i.getRenderTarget(),x=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),G=i.state;G.setBlending(es),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const k=f!==Ki&&this.type===Ki,H=f===Ki&&this.type!==Ki;for(let ne=0,q=I.length;ne<q;ne++){const de=I[ne],Y=de.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",de,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const we=Y.getFrameExtents();if(s.multiply(we),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/we.x),s.x=r.x*we.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/we.y),s.y=r.y*we.y,Y.mapSize.y=r.y)),Y.map===null||k===!0||H===!0){const ke=this.type!==Ki?{minFilter:Pn,magFilter:Pn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new hi(s.x,s.y,ke),Y.map.texture.name=de.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const Te=Y.getViewportCount();for(let ke=0;ke<Te;ke++){const st=Y.getViewport(ke);o.set(r.x*st.x,r.y*st.y,r.x*st.z,r.y*st.w),G.viewport(o),Y.updateMatrices(de,ke),n=Y.getFrustum(),M(L,U,Y.camera,de,this.type)}Y.isPointLightShadow!==!0&&this.type===Ki&&E(Y,U),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(K,x,b)};function E(I,L){const U=e.update(_);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new hi(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(L,null,U,d,_,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(L,null,U,p,_,null)}function y(I,L,U,K){let x=null;const b=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(b!==void 0)x=b;else if(x=U.isPointLight===!0?l:a,i.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0){const G=x.uuid,k=L.uuid;let H=c[G];H===void 0&&(H={},c[G]=H);let ne=H[k];ne===void 0&&(ne=x.clone(),H[k]=ne,L.addEventListener("dispose",O)),x=ne}if(x.visible=L.visible,x.wireframe=L.wireframe,K===Ki?x.side=L.shadowSide!==null?L.shadowSide:L.side:x.side=L.shadowSide!==null?L.shadowSide:u[L.side],x.alphaMap=L.alphaMap,x.alphaTest=L.alphaTest,x.map=L.map,x.clipShadows=L.clipShadows,x.clippingPlanes=L.clippingPlanes,x.clipIntersection=L.clipIntersection,x.displacementMap=L.displacementMap,x.displacementScale=L.displacementScale,x.displacementBias=L.displacementBias,x.wireframeLinewidth=L.wireframeLinewidth,x.linewidth=L.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=i.properties.get(x);G.light=U}return x}function M(I,L,U,K,x){if(I.visible===!1)return;if(I.layers.test(L.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===Ki)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const k=e.update(I),H=I.material;if(Array.isArray(H)){const ne=k.groups;for(let q=0,de=ne.length;q<de;q++){const Y=ne[q],we=H[Y.materialIndex];if(we&&we.visible){const Te=y(I,we,K,x);I.onBeforeShadow(i,I,L,U,k,Te,Y),i.renderBufferDirect(U,null,k,Te,I,Y),I.onAfterShadow(i,I,L,U,k,Te,Y)}}}else if(H.visible){const ne=y(I,H,K,x);I.onBeforeShadow(i,I,L,U,k,ne,null),i.renderBufferDirect(U,null,k,ne,I,null),I.onAfterShadow(i,I,L,U,k,ne,null)}}const G=I.children;for(let k=0,H=G.length;k<H;k++)M(G[k],L,U,K,x)}function O(I){I.target.removeEventListener("dispose",O);for(const U in c){const K=c[U],x=I.target.uuid;x in K&&(K[x].dispose(),delete K[x])}}}const dx={[Ec]:wc,[Tc]:Cc,[Ac]:Pc,[Tr]:Rc,[wc]:Ec,[Cc]:Tc,[Pc]:Ac,[Rc]:Tr};function fx(i){function e(){let $=!1;const Oe=new Ut;let ae=null;const ve=new Ut(0,0,0,0);return{setMask:function(Ie){ae!==Ie&&!$&&(i.colorMask(Ie,Ie,Ie,Ie),ae=Ie)},setLocked:function(Ie){$=Ie},setClear:function(Ie,Be,ot,Ot,Xt){Xt===!0&&(Ie*=Ot,Be*=Ot,ot*=Ot),Oe.set(Ie,Be,ot,Ot),ve.equals(Oe)===!1&&(i.clearColor(Ie,Be,ot,Ot),ve.copy(Oe))},reset:function(){$=!1,ae=null,ve.set(-1,0,0,0)}}}function t(){let $=!1,Oe=!1,ae=null,ve=null,Ie=null;return{setReversed:function(Be){Oe=Be},setTest:function(Be){Be?Fe(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(Be){ae!==Be&&!$&&(i.depthMask(Be),ae=Be)},setFunc:function(Be){if(Oe&&(Be=dx[Be]),ve!==Be){switch(Be){case Ec:i.depthFunc(i.NEVER);break;case wc:i.depthFunc(i.ALWAYS);break;case Tc:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case Ac:i.depthFunc(i.EQUAL);break;case Rc:i.depthFunc(i.GEQUAL);break;case Cc:i.depthFunc(i.GREATER);break;case Pc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}ve=Be}},setLocked:function(Be){$=Be},setClear:function(Be){Ie!==Be&&(i.clearDepth(Be),Ie=Be)},reset:function(){$=!1,ae=null,ve=null,Ie=null}}}function n(){let $=!1,Oe=null,ae=null,ve=null,Ie=null,Be=null,ot=null,Ot=null,Xt=null;return{setTest:function(xt){$||(xt?Fe(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(xt){Oe!==xt&&!$&&(i.stencilMask(xt),Oe=xt)},setFunc:function(xt,Lt,Zt){(ae!==xt||ve!==Lt||Ie!==Zt)&&(i.stencilFunc(xt,Lt,Zt),ae=xt,ve=Lt,Ie=Zt)},setOp:function(xt,Lt,Zt){(Be!==xt||ot!==Lt||Ot!==Zt)&&(i.stencilOp(xt,Lt,Zt),Be=xt,ot=Lt,Ot=Zt)},setLocked:function(xt){$=xt},setClear:function(xt){Xt!==xt&&(i.clearStencil(xt),Xt=xt)},reset:function(){$=!1,Oe=null,ae=null,ve=null,Ie=null,Be=null,ot=null,Ot=null,Xt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,E=null,y=null,M=null,O=null,I=new Xe(0,0,0),L=0,U=!1,K=null,x=null,b=null,G=null,k=null;const H=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,q=0;const de=i.getParameter(i.VERSION);de.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(de)[1]),ne=q>=1):de.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(de)[1]),ne=q>=2);let Y=null,we={};const Te=i.getParameter(i.SCISSOR_BOX),ke=i.getParameter(i.VIEWPORT),st=new Ut().fromArray(Te),lt=new Ut().fromArray(ke);function ce($,Oe,ae,ve){const Ie=new Uint8Array(4),Be=i.createTexture();i.bindTexture($,Be),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let ot=0;ot<ae;ot++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Oe,0,i.RGBA,1,1,ve,0,i.RGBA,i.UNSIGNED_BYTE,Ie):i.texImage2D(Oe+ot,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ie);return Be}const _e={};_e[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),_e[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),_e[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),_e[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Fe(i.DEPTH_TEST),r.setFunc(Tr),ut(!1),dt(su),Fe(i.CULL_FACE),V(es);function Fe($){c[$]!==!0&&(i.enable($),c[$]=!0)}function Ce($){c[$]!==!1&&(i.disable($),c[$]=!1)}function $e($,Oe){return h[$]!==Oe?(i.bindFramebuffer($,Oe),h[$]=Oe,$===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Oe),$===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Oe),!0):!1}function Ye($,Oe){let ae=d,ve=!1;if($){ae=u.get(Oe),ae===void 0&&(ae=[],u.set(Oe,ae));const Ie=$.textures;if(ae.length!==Ie.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Be=0,ot=Ie.length;Be<ot;Be++)ae[Be]=i.COLOR_ATTACHMENT0+Be;ae.length=Ie.length,ve=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,ve=!0);ve&&i.drawBuffers(ae)}function ht($){return p!==$?(i.useProgram($),p=$,!0):!1}const At={[Ds]:i.FUNC_ADD,[vp]:i.FUNC_SUBTRACT,[xp]:i.FUNC_REVERSE_SUBTRACT};At[yp]=i.MIN,At[Mp]=i.MAX;const gt={[Sp]:i.ZERO,[bp]:i.ONE,[Ep]:i.SRC_COLOR,[Sc]:i.SRC_ALPHA,[Pp]:i.SRC_ALPHA_SATURATE,[Rp]:i.DST_COLOR,[Tp]:i.DST_ALPHA,[wp]:i.ONE_MINUS_SRC_COLOR,[bc]:i.ONE_MINUS_SRC_ALPHA,[Cp]:i.ONE_MINUS_DST_COLOR,[Ap]:i.ONE_MINUS_DST_ALPHA,[Lp]:i.CONSTANT_COLOR,[Ip]:i.ONE_MINUS_CONSTANT_COLOR,[Dp]:i.CONSTANT_ALPHA,[Np]:i.ONE_MINUS_CONSTANT_ALPHA};function V($,Oe,ae,ve,Ie,Be,ot,Ot,Xt,xt){if($===es){g===!0&&(Ce(i.BLEND),g=!1);return}if(g===!1&&(Fe(i.BLEND),g=!0),$!==_p){if($!==_||xt!==U){if((m!==Ds||y!==Ds)&&(i.blendEquation(i.FUNC_ADD),m=Ds,y=Ds),xt)switch($){case Mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFunc(i.ONE,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Di:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case ru:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case ou:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}f=null,E=null,M=null,O=null,I.set(0,0,0),L=0,_=$,U=xt}return}Ie=Ie||Oe,Be=Be||ae,ot=ot||ve,(Oe!==m||Ie!==y)&&(i.blendEquationSeparate(At[Oe],At[Ie]),m=Oe,y=Ie),(ae!==f||ve!==E||Be!==M||ot!==O)&&(i.blendFuncSeparate(gt[ae],gt[ve],gt[Be],gt[ot]),f=ae,E=ve,M=Be,O=ot),(Ot.equals(I)===!1||Xt!==L)&&(i.blendColor(Ot.r,Ot.g,Ot.b,Xt),I.copy(Ot),L=Xt),_=$,U=!1}function Kt($,Oe){$.side===Tn?Ce(i.CULL_FACE):Fe(i.CULL_FACE);let ae=$.side===An;Oe&&(ae=!ae),ut(ae),$.blending===Mr&&$.transparent===!1?V(es):V($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),r.setFunc($.depthFunc),r.setTest($.depthTest),r.setMask($.depthWrite),s.setMask($.colorWrite);const ve=$.stencilWrite;o.setTest(ve),ve&&(o.setMask($.stencilWriteMask),o.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),o.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),vt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Fe(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut($){K!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),K=$)}function dt($){$!==mp?(Fe(i.CULL_FACE),$!==x&&($===su?i.cullFace(i.BACK):$===gp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),x=$}function et($){$!==b&&(ne&&i.lineWidth($),b=$)}function vt($,Oe,ae){$?(Fe(i.POLYGON_OFFSET_FILL),(G!==Oe||k!==ae)&&(i.polygonOffset(Oe,ae),G=Oe,k=ae)):Ce(i.POLYGON_OFFSET_FILL)}function nt($){$?Fe(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function D($){$===void 0&&($=i.TEXTURE0+H-1),Y!==$&&(i.activeTexture($),Y=$)}function S($,Oe,ae){ae===void 0&&(Y===null?ae=i.TEXTURE0+H-1:ae=Y);let ve=we[ae];ve===void 0&&(ve={type:void 0,texture:void 0},we[ae]=ve),(ve.type!==$||ve.texture!==Oe)&&(Y!==ae&&(i.activeTexture(ae),Y=ae),i.bindTexture($,Oe||_e[$]),ve.type=$,ve.texture=Oe)}function J(){const $=we[Y];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function oe(){try{i.compressedTexImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function se(){try{i.texSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ee(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Me(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ft(){try{i.texStorage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Se(){try{i.texStorage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ve(){try{i.texImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Qe(){try{i.texImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function rt($){st.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),st.copy($))}function Ne($){lt.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),lt.copy($))}function _t($,Oe){let ae=l.get(Oe);ae===void 0&&(ae=new WeakMap,l.set(Oe,ae));let ve=ae.get($);ve===void 0&&(ve=i.getUniformBlockIndex(Oe,$.name),ae.set($,ve))}function it($,Oe){const ve=l.get(Oe).get($);a.get(Oe)!==ve&&(i.uniformBlockBinding(Oe,ve,$.__bindingPointIndex),a.set(Oe,ve))}function St(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Y=null,we={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,E=null,y=null,M=null,O=null,I=new Xe(0,0,0),L=0,U=!1,K=null,x=null,b=null,G=null,k=null,st.set(0,0,i.canvas.width,i.canvas.height),lt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Fe,disable:Ce,bindFramebuffer:$e,drawBuffers:Ye,useProgram:ht,setBlending:V,setMaterial:Kt,setFlipSided:ut,setCullFace:dt,setLineWidth:et,setPolygonOffset:vt,setScissorTest:nt,activeTexture:D,bindTexture:S,unbindTexture:J,compressedTexImage2D:oe,compressedTexImage3D:he,texImage2D:Ve,texImage3D:Qe,updateUBOMapping:_t,uniformBlockBinding:it,texStorage2D:ft,texStorage3D:Se,texSubImage2D:se,texSubImage3D:Pe,compressedTexSubImage2D:Ee,compressedTexSubImage3D:Me,scissor:rt,viewport:Ne,reset:St}}function Qu(i,e,t,n){const s=px(n);switch(t){case nf:return i*e;case rf:return i*e;case of:return i*e*2;case Ch:return i*e/s.components*s.byteLength;case Ph:return i*e/s.components*s.byteLength;case af:return i*e*2/s.components*s.byteLength;case Lh:return i*e*2/s.components*s.byteLength;case sf:return i*e*3/s.components*s.byteLength;case ci:return i*e*4/s.components*s.byteLength;case Ih:return i*e*4/s.components*s.byteLength;case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ra:case Ca:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nc:case Fc:return Math.max(i,16)*Math.max(e,8)/4;case Dc:case Uc:return Math.max(i,8)*Math.max(e,8)/2;case Oc:case Bc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case kc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case qc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case $c:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jc:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Pa:case eh:case th:return Math.ceil(i/4)*Math.ceil(e/4)*16;case lf:case nh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case ih:case sh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function px(i){switch(i){case Ei:case Qd:return{byteLength:1,components:1};case _o:case ef:case Wn:return{byteLength:2,components:1};case Ah:case Rh:return{byteLength:2,components:4};case Bs:case Th:case $n:return{byteLength:4,components:1};case tf:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function mx(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Je,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,S){return p?new OffscreenCanvas(D,S):yo("canvas")}function _(D,S,J){let oe=1;const he=nt(D);if((he.width>J||he.height>J)&&(oe=J/Math.max(he.width,he.height)),oe<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const se=Math.floor(oe*he.width),Pe=Math.floor(oe*he.height);u===void 0&&(u=g(se,Pe));const Ee=S?g(se,Pe):u;return Ee.width=se,Ee.height=Pe,Ee.getContext("2d").drawImage(D,0,0,se,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+se+"x"+Pe+")."),Ee}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==Pn&&D.minFilter!==pn}function f(D){i.generateMipmap(D)}function E(D,S,J,oe,he=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let se=S;if(S===i.RED&&(J===i.FLOAT&&(se=i.R32F),J===i.HALF_FLOAT&&(se=i.R16F),J===i.UNSIGNED_BYTE&&(se=i.R8)),S===i.RED_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.R8UI),J===i.UNSIGNED_SHORT&&(se=i.R16UI),J===i.UNSIGNED_INT&&(se=i.R32UI),J===i.BYTE&&(se=i.R8I),J===i.SHORT&&(se=i.R16I),J===i.INT&&(se=i.R32I)),S===i.RG&&(J===i.FLOAT&&(se=i.RG32F),J===i.HALF_FLOAT&&(se=i.RG16F),J===i.UNSIGNED_BYTE&&(se=i.RG8)),S===i.RG_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.RG8UI),J===i.UNSIGNED_SHORT&&(se=i.RG16UI),J===i.UNSIGNED_INT&&(se=i.RG32UI),J===i.BYTE&&(se=i.RG8I),J===i.SHORT&&(se=i.RG16I),J===i.INT&&(se=i.RG32I)),S===i.RGB_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.RGB8UI),J===i.UNSIGNED_SHORT&&(se=i.RGB16UI),J===i.UNSIGNED_INT&&(se=i.RGB32UI),J===i.BYTE&&(se=i.RGB8I),J===i.SHORT&&(se=i.RGB16I),J===i.INT&&(se=i.RGB32I)),S===i.RGBA_INTEGER&&(J===i.UNSIGNED_BYTE&&(se=i.RGBA8UI),J===i.UNSIGNED_SHORT&&(se=i.RGBA16UI),J===i.UNSIGNED_INT&&(se=i.RGBA32UI),J===i.BYTE&&(se=i.RGBA8I),J===i.SHORT&&(se=i.RGBA16I),J===i.INT&&(se=i.RGBA32I)),S===i.RGB&&J===i.UNSIGNED_INT_5_9_9_9_REV&&(se=i.RGB9_E5),S===i.RGBA){const Pe=he?Ba:Dt.getTransfer(oe);J===i.FLOAT&&(se=i.RGBA32F),J===i.HALF_FLOAT&&(se=i.RGBA16F),J===i.UNSIGNED_BYTE&&(se=Pe===Wt?i.SRGB8_ALPHA8:i.RGBA8),J===i.UNSIGNED_SHORT_4_4_4_4&&(se=i.RGBA4),J===i.UNSIGNED_SHORT_5_5_5_1&&(se=i.RGB5_A1)}return(se===i.R16F||se===i.R32F||se===i.RG16F||se===i.RG32F||se===i.RGBA16F||se===i.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function y(D,S){let J;return D?S===null||S===Bs||S===Cr?J=i.DEPTH24_STENCIL8:S===$n?J=i.DEPTH32F_STENCIL8:S===_o&&(J=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===Bs||S===Cr?J=i.DEPTH_COMPONENT24:S===$n?J=i.DEPTH_COMPONENT32F:S===_o&&(J=i.DEPTH_COMPONENT16),J}function M(D,S){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Pn&&D.minFilter!==pn?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function O(D){const S=D.target;S.removeEventListener("dispose",O),L(S),S.isVideoTexture&&h.delete(S)}function I(D){const S=D.target;S.removeEventListener("dispose",I),K(S)}function L(D){const S=n.get(D);if(S.__webglInit===void 0)return;const J=D.source,oe=d.get(J);if(oe){const he=oe[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&U(D),Object.keys(oe).length===0&&d.delete(J)}n.remove(D)}function U(D){const S=n.get(D);i.deleteTexture(S.__webglTexture);const J=D.source,oe=d.get(J);delete oe[S.__cacheKey],o.memory.textures--}function K(D){const S=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++){if(Array.isArray(S.__webglFramebuffer[oe]))for(let he=0;he<S.__webglFramebuffer[oe].length;he++)i.deleteFramebuffer(S.__webglFramebuffer[oe][he]);else i.deleteFramebuffer(S.__webglFramebuffer[oe]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[oe])}else{if(Array.isArray(S.__webglFramebuffer))for(let oe=0;oe<S.__webglFramebuffer.length;oe++)i.deleteFramebuffer(S.__webglFramebuffer[oe]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let oe=0;oe<S.__webglColorRenderbuffer.length;oe++)S.__webglColorRenderbuffer[oe]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[oe]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const J=D.textures;for(let oe=0,he=J.length;oe<he;oe++){const se=n.get(J[oe]);se.__webglTexture&&(i.deleteTexture(se.__webglTexture),o.memory.textures--),n.remove(J[oe])}n.remove(D)}let x=0;function b(){x=0}function G(){const D=x;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),x+=1,D}function k(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function H(D,S){const J=n.get(D);if(D.isVideoTexture&&et(D),D.isRenderTargetTexture===!1&&D.version>0&&J.__version!==D.version){const oe=D.image;if(oe===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(oe.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{lt(J,D,S);return}}t.bindTexture(i.TEXTURE_2D,J.__webglTexture,i.TEXTURE0+S)}function ne(D,S){const J=n.get(D);if(D.version>0&&J.__version!==D.version){lt(J,D,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,J.__webglTexture,i.TEXTURE0+S)}function q(D,S){const J=n.get(D);if(D.version>0&&J.__version!==D.version){lt(J,D,S);return}t.bindTexture(i.TEXTURE_3D,J.__webglTexture,i.TEXTURE0+S)}function de(D,S){const J=n.get(D);if(D.version>0&&J.__version!==D.version){ce(J,D,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,J.__webglTexture,i.TEXTURE0+S)}const Y={[Os]:i.REPEAT,[Ni]:i.CLAMP_TO_EDGE,[Oa]:i.MIRRORED_REPEAT},we={[Pn]:i.NEAREST,[Jd]:i.NEAREST_MIPMAP_NEAREST,[co]:i.NEAREST_MIPMAP_LINEAR,[pn]:i.LINEAR,[wa]:i.LINEAR_MIPMAP_NEAREST,[Ui]:i.LINEAR_MIPMAP_LINEAR},Te={[Wp]:i.NEVER,[Kp]:i.ALWAYS,[Xp]:i.LESS,[uf]:i.LEQUAL,[qp]:i.EQUAL,[jp]:i.GEQUAL,[Yp]:i.GREATER,[$p]:i.NOTEQUAL};function ke(D,S){if(S.type===$n&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===pn||S.magFilter===wa||S.magFilter===co||S.magFilter===Ui||S.minFilter===pn||S.minFilter===wa||S.minFilter===co||S.minFilter===Ui)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Y[S.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Y[S.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Y[S.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,we[S.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,we[S.minFilter]),S.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Pn||S.minFilter!==co&&S.minFilter!==Ui||S.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const J=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,J.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function st(D,S){let J=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",O));const oe=S.source;let he=d.get(oe);he===void 0&&(he={},d.set(oe,he));const se=k(S);if(se!==D.__cacheKey){he[se]===void 0&&(he[se]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,J=!0),he[se].usedTimes++;const Pe=he[D.__cacheKey];Pe!==void 0&&(he[D.__cacheKey].usedTimes--,Pe.usedTimes===0&&U(S)),D.__cacheKey=se,D.__webglTexture=he[se].texture}return J}function lt(D,S,J){let oe=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(oe=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(oe=i.TEXTURE_3D);const he=st(D,S),se=S.source;t.bindTexture(oe,D.__webglTexture,i.TEXTURE0+J);const Pe=n.get(se);if(se.version!==Pe.__version||he===!0){t.activeTexture(i.TEXTURE0+J);const Ee=Dt.getPrimaries(Dt.workingColorSpace),Me=S.colorSpace===fs?null:Dt.getPrimaries(S.colorSpace),ft=S.colorSpace===fs||Ee===Me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Se=_(S.image,!1,s.maxTextureSize);Se=vt(S,Se);const Ve=r.convert(S.format,S.colorSpace),Qe=r.convert(S.type);let rt=E(S.internalFormat,Ve,Qe,S.colorSpace,S.isVideoTexture);ke(oe,S);let Ne;const _t=S.mipmaps,it=S.isVideoTexture!==!0,St=Pe.__version===void 0||he===!0,$=se.dataReady,Oe=M(S,Se);if(S.isDepthTexture)rt=y(S.format===Pr,S.type),St&&(it?t.texStorage2D(i.TEXTURE_2D,1,rt,Se.width,Se.height):t.texImage2D(i.TEXTURE_2D,0,rt,Se.width,Se.height,0,Ve,Qe,null));else if(S.isDataTexture)if(_t.length>0){it&&St&&t.texStorage2D(i.TEXTURE_2D,Oe,rt,_t[0].width,_t[0].height);for(let ae=0,ve=_t.length;ae<ve;ae++)Ne=_t[ae],it?$&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ne.width,Ne.height,Ve,Qe,Ne.data):t.texImage2D(i.TEXTURE_2D,ae,rt,Ne.width,Ne.height,0,Ve,Qe,Ne.data);S.generateMipmaps=!1}else it?(St&&t.texStorage2D(i.TEXTURE_2D,Oe,rt,Se.width,Se.height),$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Se.width,Se.height,Ve,Qe,Se.data)):t.texImage2D(i.TEXTURE_2D,0,rt,Se.width,Se.height,0,Ve,Qe,Se.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){it&&St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,rt,_t[0].width,_t[0].height,Se.depth);for(let ae=0,ve=_t.length;ae<ve;ae++)if(Ne=_t[ae],S.format!==ci)if(Ve!==null)if(it){if($)if(S.layerUpdates.size>0){const Ie=Qu(Ne.width,Ne.height,S.format,S.type);for(const Be of S.layerUpdates){const ot=Ne.data.subarray(Be*Ie/Ne.data.BYTES_PER_ELEMENT,(Be+1)*Ie/Ne.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Be,Ne.width,Ne.height,1,Ve,ot,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ne.width,Ne.height,Se.depth,Ve,Ne.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,rt,Ne.width,Ne.height,Se.depth,0,Ne.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?$&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,Ne.width,Ne.height,Se.depth,Ve,Qe,Ne.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,rt,Ne.width,Ne.height,Se.depth,0,Ve,Qe,Ne.data)}else{it&&St&&t.texStorage2D(i.TEXTURE_2D,Oe,rt,_t[0].width,_t[0].height);for(let ae=0,ve=_t.length;ae<ve;ae++)Ne=_t[ae],S.format!==ci?Ve!==null?it?$&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,Ne.width,Ne.height,Ve,Ne.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,rt,Ne.width,Ne.height,0,Ne.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?$&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ne.width,Ne.height,Ve,Qe,Ne.data):t.texImage2D(i.TEXTURE_2D,ae,rt,Ne.width,Ne.height,0,Ve,Qe,Ne.data)}else if(S.isDataArrayTexture)if(it){if(St&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,rt,Se.width,Se.height,Se.depth),$)if(S.layerUpdates.size>0){const ae=Qu(Se.width,Se.height,S.format,S.type);for(const ve of S.layerUpdates){const Ie=Se.data.subarray(ve*ae/Se.data.BYTES_PER_ELEMENT,(ve+1)*ae/Se.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,ve,Se.width,Se.height,1,Ve,Qe,Ie)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Se.width,Se.height,Se.depth,Ve,Qe,Se.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,rt,Se.width,Se.height,Se.depth,0,Ve,Qe,Se.data);else if(S.isData3DTexture)it?(St&&t.texStorage3D(i.TEXTURE_3D,Oe,rt,Se.width,Se.height,Se.depth),$&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Se.width,Se.height,Se.depth,Ve,Qe,Se.data)):t.texImage3D(i.TEXTURE_3D,0,rt,Se.width,Se.height,Se.depth,0,Ve,Qe,Se.data);else if(S.isFramebufferTexture){if(St)if(it)t.texStorage2D(i.TEXTURE_2D,Oe,rt,Se.width,Se.height);else{let ae=Se.width,ve=Se.height;for(let Ie=0;Ie<Oe;Ie++)t.texImage2D(i.TEXTURE_2D,Ie,rt,ae,ve,0,Ve,Qe,null),ae>>=1,ve>>=1}}else if(_t.length>0){if(it&&St){const ae=nt(_t[0]);t.texStorage2D(i.TEXTURE_2D,Oe,rt,ae.width,ae.height)}for(let ae=0,ve=_t.length;ae<ve;ae++)Ne=_t[ae],it?$&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,Ve,Qe,Ne):t.texImage2D(i.TEXTURE_2D,ae,rt,Ve,Qe,Ne);S.generateMipmaps=!1}else if(it){if(St){const ae=nt(Se);t.texStorage2D(i.TEXTURE_2D,Oe,rt,ae.width,ae.height)}$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ve,Qe,Se)}else t.texImage2D(i.TEXTURE_2D,0,rt,Ve,Qe,Se);m(S)&&f(oe),Pe.__version=se.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function ce(D,S,J){if(S.image.length!==6)return;const oe=st(D,S),he=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+J);const se=n.get(he);if(he.version!==se.__version||oe===!0){t.activeTexture(i.TEXTURE0+J);const Pe=Dt.getPrimaries(Dt.workingColorSpace),Ee=S.colorSpace===fs?null:Dt.getPrimaries(S.colorSpace),Me=S.colorSpace===fs||Pe===Ee?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Me);const ft=S.isCompressedTexture||S.image[0].isCompressedTexture,Se=S.image[0]&&S.image[0].isDataTexture,Ve=[];for(let ve=0;ve<6;ve++)!ft&&!Se?Ve[ve]=_(S.image[ve],!0,s.maxCubemapSize):Ve[ve]=Se?S.image[ve].image:S.image[ve],Ve[ve]=vt(S,Ve[ve]);const Qe=Ve[0],rt=r.convert(S.format,S.colorSpace),Ne=r.convert(S.type),_t=E(S.internalFormat,rt,Ne,S.colorSpace),it=S.isVideoTexture!==!0,St=se.__version===void 0||oe===!0,$=he.dataReady;let Oe=M(S,Qe);ke(i.TEXTURE_CUBE_MAP,S);let ae;if(ft){it&&St&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,_t,Qe.width,Qe.height);for(let ve=0;ve<6;ve++){ae=Ve[ve].mipmaps;for(let Ie=0;Ie<ae.length;Ie++){const Be=ae[Ie];S.format!==ci?rt!==null?it?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,Be.width,Be.height,rt,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,_t,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):it?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,0,0,Be.width,Be.height,rt,Ne,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie,_t,Be.width,Be.height,0,rt,Ne,Be.data)}}}else{if(ae=S.mipmaps,it&&St){ae.length>0&&Oe++;const ve=nt(Ve[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Oe,_t,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Se){it?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ve[ve].width,Ve[ve].height,rt,Ne,Ve[ve].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,_t,Ve[ve].width,Ve[ve].height,0,rt,Ne,Ve[ve].data);for(let Ie=0;Ie<ae.length;Ie++){const ot=ae[Ie].image[ve].image;it?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,ot.width,ot.height,rt,Ne,ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,_t,ot.width,ot.height,0,rt,Ne,ot.data)}}else{it?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,rt,Ne,Ve[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,_t,rt,Ne,Ve[ve]);for(let Ie=0;Ie<ae.length;Ie++){const Be=ae[Ie];it?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,0,0,rt,Ne,Be.image[ve]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,Ie+1,_t,rt,Ne,Be.image[ve])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),se.__version=he.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function _e(D,S,J,oe,he,se){const Pe=r.convert(J.format,J.colorSpace),Ee=r.convert(J.type),Me=E(J.internalFormat,Pe,Ee,J.colorSpace);if(!n.get(S).__hasExternalTextures){const Se=Math.max(1,S.width>>se),Ve=Math.max(1,S.height>>se);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,se,Me,Se,Ve,S.depth,0,Pe,Ee,null):t.texImage2D(he,se,Me,Se,Ve,0,Pe,Ee,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),dt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,oe,he,n.get(J).__webglTexture,0,ut(S)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,oe,he,n.get(J).__webglTexture,se),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Fe(D,S,J){if(i.bindRenderbuffer(i.RENDERBUFFER,D),S.depthBuffer){const oe=S.depthTexture,he=oe&&oe.isDepthTexture?oe.type:null,se=y(S.stencilBuffer,he),Pe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=ut(S);dt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ee,se,S.width,S.height):J?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ee,se,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,se,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,D)}else{const oe=S.textures;for(let he=0;he<oe.length;he++){const se=oe[he],Pe=r.convert(se.format,se.colorSpace),Ee=r.convert(se.type),Me=E(se.internalFormat,Pe,Ee,se.colorSpace),ft=ut(S);J&&dt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,Me,S.width,S.height):dt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,Me,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,Me,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(D,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),H(S.depthTexture,0);const oe=n.get(S.depthTexture).__webglTexture,he=ut(S);if(S.depthTexture.format===Sr)dt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,oe,0);else if(S.depthTexture.format===Pr)dt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,oe,0);else throw new Error("Unknown depthTexture format")}function $e(D){const S=n.get(D),J=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){const oe=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),oe){const he=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,oe.removeEventListener("dispose",he)};oe.addEventListener("dispose",he),S.__depthDisposeCallback=he}S.__boundDepthTexture=oe}if(D.depthTexture&&!S.__autoAllocateDepthBuffer){if(J)throw new Error("target.depthTexture not supported in Cube render targets");Ce(S.__webglFramebuffer,D)}else if(J){S.__webglDepthbuffer=[];for(let oe=0;oe<6;oe++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[oe]),S.__webglDepthbuffer[oe]===void 0)S.__webglDepthbuffer[oe]=i.createRenderbuffer(),Fe(S.__webglDepthbuffer[oe],D,!1);else{const he=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,se=S.__webglDepthbuffer[oe];i.bindRenderbuffer(i.RENDERBUFFER,se),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,se)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Fe(S.__webglDepthbuffer,D,!1);else{const oe=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,oe,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(D,S,J){const oe=n.get(D);S!==void 0&&_e(oe.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),J!==void 0&&$e(D)}function ht(D){const S=D.texture,J=n.get(D),oe=n.get(S);D.addEventListener("dispose",I);const he=D.textures,se=D.isWebGLCubeRenderTarget===!0,Pe=he.length>1;if(Pe||(oe.__webglTexture===void 0&&(oe.__webglTexture=i.createTexture()),oe.__version=S.version,o.memory.textures++),se){J.__webglFramebuffer=[];for(let Ee=0;Ee<6;Ee++)if(S.mipmaps&&S.mipmaps.length>0){J.__webglFramebuffer[Ee]=[];for(let Me=0;Me<S.mipmaps.length;Me++)J.__webglFramebuffer[Ee][Me]=i.createFramebuffer()}else J.__webglFramebuffer[Ee]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){J.__webglFramebuffer=[];for(let Ee=0;Ee<S.mipmaps.length;Ee++)J.__webglFramebuffer[Ee]=i.createFramebuffer()}else J.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let Ee=0,Me=he.length;Ee<Me;Ee++){const ft=n.get(he[Ee]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&dt(D)===!1){J.__webglMultisampledFramebuffer=i.createFramebuffer(),J.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,J.__webglMultisampledFramebuffer);for(let Ee=0;Ee<he.length;Ee++){const Me=he[Ee];J.__webglColorRenderbuffer[Ee]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,J.__webglColorRenderbuffer[Ee]);const ft=r.convert(Me.format,Me.colorSpace),Se=r.convert(Me.type),Ve=E(Me.internalFormat,ft,Se,Me.colorSpace,D.isXRRenderTarget===!0),Qe=ut(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Qe,Ve,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ee,i.RENDERBUFFER,J.__webglColorRenderbuffer[Ee])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(J.__webglDepthRenderbuffer=i.createRenderbuffer(),Fe(J.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(se){t.bindTexture(i.TEXTURE_CUBE_MAP,oe.__webglTexture),ke(i.TEXTURE_CUBE_MAP,S);for(let Ee=0;Ee<6;Ee++)if(S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)_e(J.__webglFramebuffer[Ee][Me],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,Me);else _e(J.__webglFramebuffer[Ee],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0);m(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let Ee=0,Me=he.length;Ee<Me;Ee++){const ft=he[Ee],Se=n.get(ft);t.bindTexture(i.TEXTURE_2D,Se.__webglTexture),ke(i.TEXTURE_2D,ft),_e(J.__webglFramebuffer,D,ft,i.COLOR_ATTACHMENT0+Ee,i.TEXTURE_2D,0),m(ft)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let Ee=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Ee=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ee,oe.__webglTexture),ke(Ee,S),S.mipmaps&&S.mipmaps.length>0)for(let Me=0;Me<S.mipmaps.length;Me++)_e(J.__webglFramebuffer[Me],D,S,i.COLOR_ATTACHMENT0,Ee,Me);else _e(J.__webglFramebuffer,D,S,i.COLOR_ATTACHMENT0,Ee,0);m(S)&&f(Ee),t.unbindTexture()}D.depthBuffer&&$e(D)}function At(D){const S=D.textures;for(let J=0,oe=S.length;J<oe;J++){const he=S[J];if(m(he)){const se=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(he).__webglTexture;t.bindTexture(se,Pe),f(se),t.unbindTexture()}}}const gt=[],V=[];function Kt(D){if(D.samples>0){if(dt(D)===!1){const S=D.textures,J=D.width,oe=D.height;let he=i.COLOR_BUFFER_BIT;const se=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(D),Ee=S.length>1;if(Ee)for(let Me=0;Me<S.length;Me++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Me=0;Me<S.length;Me++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),Ee){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Me]);const ft=n.get(S[Me]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,J,oe,0,0,J,oe,he,i.NEAREST),l===!0&&(gt.length=0,V.length=0,gt.push(i.COLOR_ATTACHMENT0+Me),D.depthBuffer&&D.resolveDepthBuffer===!1&&(gt.push(se),V.push(se),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,gt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),Ee)for(let Me=0;Me<S.length;Me++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Me]);const ft=n.get(S[Me]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Me,i.TEXTURE_2D,ft,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const S=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ut(D){return Math.min(s.maxSamples,D.samples)}function dt(D){const S=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function et(D){const S=o.render.frame;h.get(D)!==S&&(h.set(D,S),D.update())}function vt(D,S){const J=D.colorSpace,oe=D.format,he=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||J!==gn&&J!==fs&&(Dt.getTransfer(J)===Wt?(oe!==ci||he!==Ei)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",J)),S}function nt(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=b,this.setTexture2D=H,this.setTexture2DArray=ne,this.setTexture3D=q,this.setTextureCube=de,this.rebindTextures=Ye,this.setupRenderTarget=ht,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Kt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=_e,this.useMultisampledRTT=dt}function gx(i,e){function t(n,s=fs){let r;const o=Dt.getTransfer(s);if(n===Ei)return i.UNSIGNED_BYTE;if(n===Ah)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Rh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===tf)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Qd)return i.BYTE;if(n===ef)return i.SHORT;if(n===_o)return i.UNSIGNED_SHORT;if(n===Th)return i.INT;if(n===Bs)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Wn)return i.HALF_FLOAT;if(n===nf)return i.ALPHA;if(n===sf)return i.RGB;if(n===ci)return i.RGBA;if(n===rf)return i.LUMINANCE;if(n===of)return i.LUMINANCE_ALPHA;if(n===Sr)return i.DEPTH_COMPONENT;if(n===Pr)return i.DEPTH_STENCIL;if(n===Ch)return i.RED;if(n===Ph)return i.RED_INTEGER;if(n===af)return i.RG;if(n===Lh)return i.RG_INTEGER;if(n===Ih)return i.RGBA_INTEGER;if(n===Ta||n===Aa||n===Ra||n===Ca)if(o===Wt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ta)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Ca)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ta)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ra)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Ca)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Dc||n===Nc||n===Uc||n===Fc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Dc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Nc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Uc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Fc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Oc||n===Bc||n===kc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Oc||n===Bc)return o===Wt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===kc)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===$c||n===jc||n===Kc||n===Zc||n===Jc||n===Qc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===zc)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Hc)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Vc)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Gc)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Wc)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Xc)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===qc)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Yc)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$c)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jc)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Kc)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Zc)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Jc)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Qc)return o===Wt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Pa||n===eh||n===th)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Pa)return o===Wt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===eh)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===th)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===lf||n===nh||n===ih||n===sh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Pa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===nh)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===ih)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class _x extends vn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class $t extends jt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vx={type:"move"};class Zl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new $t,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new $t,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new $t,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new z),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(vx)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new $t;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const xx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,yx=`
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

}`;class Mx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new mn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new on({vertexShader:xx,fragmentShader:yx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new wn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Sx extends Br{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new Mx,m=t.getContextAttributes();let f=null,E=null;const y=[],M=[],O=new Je;let I=null;const L=new vn;L.layers.enable(1),L.viewport=new Ut;const U=new vn;U.layers.enable(2),U.viewport=new Ut;const K=[L,U],x=new _x;x.layers.enable(1),x.layers.enable(2);let b=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let _e=y[ce];return _e===void 0&&(_e=new Zl,y[ce]=_e),_e.getTargetRaySpace()},this.getControllerGrip=function(ce){let _e=y[ce];return _e===void 0&&(_e=new Zl,y[ce]=_e),_e.getGripSpace()},this.getHand=function(ce){let _e=y[ce];return _e===void 0&&(_e=new Zl,y[ce]=_e),_e.getHandSpace()};function k(ce){const _e=M.indexOf(ce.inputSource);if(_e===-1)return;const Fe=y[_e];Fe!==void 0&&(Fe.update(ce.inputSource,ce.frame,c||o),Fe.dispatchEvent({type:ce.type,data:ce.inputSource}))}function H(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",H),s.removeEventListener("inputsourceschange",ne);for(let ce=0;ce<y.length;ce++){const _e=M[ce];_e!==null&&(M[ce]=null,y[ce].disconnect(_e))}b=null,G=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,E=null,lt.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){r=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){a=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ce){c=ce},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",H),s.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const _e={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,_e),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new hi(p.framebufferWidth,p.framebufferHeight,{format:ci,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let _e=null,Fe=null,Ce=null;m.depth&&(Ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,_e=m.stencil?Pr:Sr,Fe=m.stencil?Cr:Bs);const $e={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer($e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new hi(d.textureWidth,d.textureHeight,{format:ci,type:Ei,depthTexture:new wf(d.textureWidth,d.textureHeight,Fe,void 0,void 0,void 0,void 0,void 0,void 0,_e),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),lt.setContext(s),lt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(ce){for(let _e=0;_e<ce.removed.length;_e++){const Fe=ce.removed[_e],Ce=M.indexOf(Fe);Ce>=0&&(M[Ce]=null,y[Ce].disconnect(Fe))}for(let _e=0;_e<ce.added.length;_e++){const Fe=ce.added[_e];let Ce=M.indexOf(Fe);if(Ce===-1){for(let Ye=0;Ye<y.length;Ye++)if(Ye>=M.length){M.push(Fe),Ce=Ye;break}else if(M[Ye]===null){M[Ye]=Fe,Ce=Ye;break}if(Ce===-1)break}const $e=y[Ce];$e&&$e.connect(Fe)}}const q=new z,de=new z;function Y(ce,_e,Fe){q.setFromMatrixPosition(_e.matrixWorld),de.setFromMatrixPosition(Fe.matrixWorld);const Ce=q.distanceTo(de),$e=_e.projectionMatrix.elements,Ye=Fe.projectionMatrix.elements,ht=$e[14]/($e[10]-1),At=$e[14]/($e[10]+1),gt=($e[9]+1)/$e[5],V=($e[9]-1)/$e[5],Kt=($e[8]-1)/$e[0],ut=(Ye[8]+1)/Ye[0],dt=ht*Kt,et=ht*ut,vt=Ce/(-Kt+ut),nt=vt*-Kt;if(_e.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(nt),ce.translateZ(vt),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),$e[10]===-1)ce.projectionMatrix.copy(_e.projectionMatrix),ce.projectionMatrixInverse.copy(_e.projectionMatrixInverse);else{const D=ht+vt,S=At+vt,J=dt-nt,oe=et+(Ce-nt),he=gt*At/S*D,se=V*At/S*D;ce.projectionMatrix.makePerspective(J,oe,he,se,D,S),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function we(ce,_e){_e===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(_e.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;let _e=ce.near,Fe=ce.far;_.texture!==null&&(_.depthNear>0&&(_e=_.depthNear),_.depthFar>0&&(Fe=_.depthFar)),x.near=U.near=L.near=_e,x.far=U.far=L.far=Fe,(b!==x.near||G!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,G=x.far);const Ce=ce.parent,$e=x.cameras;we(x,Ce);for(let Ye=0;Ye<$e.length;Ye++)we($e[Ye],Ce);$e.length===2?Y(x,L,U):x.projectionMatrix.copy(L.projectionMatrix),Te(ce,x,Ce)};function Te(ce,_e,Fe){Fe===null?ce.matrix.copy(_e.matrixWorld):(ce.matrix.copy(Fe.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(_e.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(_e.projectionMatrix),ce.projectionMatrixInverse.copy(_e.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Lr*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ce){l=ce,d!==null&&(d.fixedFoveation=ce),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ce)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let ke=null;function st(ce,_e){if(h=_e.getViewerPose(c||o),g=_e,h!==null){const Fe=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Ce=!1;Fe.length!==x.cameras.length&&(x.cameras.length=0,Ce=!0);for(let Ye=0;Ye<Fe.length;Ye++){const ht=Fe[Ye];let At=null;if(p!==null)At=p.getViewport(ht);else{const V=u.getViewSubImage(d,ht);At=V.viewport,Ye===0&&(e.setRenderTargetTextures(E,V.colorTexture,d.ignoreDepthValues?void 0:V.depthStencilTexture),e.setRenderTarget(E))}let gt=K[Ye];gt===void 0&&(gt=new vn,gt.layers.enable(Ye),gt.viewport=new Ut,K[Ye]=gt),gt.matrix.fromArray(ht.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(ht.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(At.x,At.y,At.width,At.height),Ye===0&&(x.matrix.copy(gt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Ce===!0&&x.cameras.push(gt)}const $e=s.enabledFeatures;if($e&&$e.includes("depth-sensing")){const Ye=u.getDepthInformation(Fe[0]);Ye&&Ye.isValid&&Ye.texture&&_.init(e,Ye,s.renderState)}}for(let Fe=0;Fe<y.length;Fe++){const Ce=M[Fe],$e=y[Fe];Ce!==null&&$e!==void 0&&$e.update(Ce,_e,c||o)}ke&&ke(ce,_e),_e.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:_e}),g=null}const lt=new Ef;lt.setAnimationLoop(st),this.setAnimationLoop=function(ce){ke=ce},this.dispose=function(){}}}const Rs=new Oi,bx=new mt;function Ex(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,xf(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===An&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===An&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),y=E.envMap,M=E.envMapRotation;y&&(m.envMap.value=y,Rs.copy(M),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),m.envMapRotation.value.setFromMatrix4(bx.makeRotationFromEuler(Rs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===An&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function wx(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const M=y.program;n.uniformBlockBinding(E,M)}function c(E,y){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));const O=y.program;n.updateUBOMapping(E,O);const I=e.render.frame;r[E.id]!==I&&(d(E),r[E.id]=I)}function h(E){const y=u();E.__bindingPointIndex=y;const M=i.createBuffer(),O=E.__size,I=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,O,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=s[E.id],M=E.uniforms,O=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let I=0,L=M.length;I<L;I++){const U=Array.isArray(M[I])?M[I]:[M[I]];for(let K=0,x=U.length;K<x;K++){const b=U[K];if(p(b,I,K,O)===!0){const G=b.__offset,k=Array.isArray(b.value)?b.value:[b.value];let H=0;for(let ne=0;ne<k.length;ne++){const q=k[ne],de=_(q);typeof q=="number"||typeof q=="boolean"?(b.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,G+H,b.__data)):q.isMatrix3?(b.__data[0]=q.elements[0],b.__data[1]=q.elements[1],b.__data[2]=q.elements[2],b.__data[3]=0,b.__data[4]=q.elements[3],b.__data[5]=q.elements[4],b.__data[6]=q.elements[5],b.__data[7]=0,b.__data[8]=q.elements[6],b.__data[9]=q.elements[7],b.__data[10]=q.elements[8],b.__data[11]=0):(q.toArray(b.__data,H),H+=de.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,y,M,O){const I=E.value,L=y+"_"+M;if(O[L]===void 0)return typeof I=="number"||typeof I=="boolean"?O[L]=I:O[L]=I.clone(),!0;{const U=O[L];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return O[L]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function g(E){const y=E.uniforms;let M=0;const O=16;for(let L=0,U=y.length;L<U;L++){const K=Array.isArray(y[L])?y[L]:[y[L]];for(let x=0,b=K.length;x<b;x++){const G=K[x],k=Array.isArray(G.value)?G.value:[G.value];for(let H=0,ne=k.length;H<ne;H++){const q=k[H],de=_(q),Y=M%O,we=Y%de.boundary,Te=Y+we;M+=we,Te!==0&&O-Te<de.storage&&(M+=O-Te),G.__data=new Float32Array(de.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=de.storage}}}const I=M%O;return I>0&&(M+=O-I),E.__size=M,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class Tx{constructor(e={}){const{canvas:t=fm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Gt,this.toneMapping=gs,this.toneMappingExposure=1;const y=this;let M=!1,O=0,I=0,L=null,U=-1,K=null;const x=new Ut,b=new Ut;let G=null;const k=new Xe(0);let H=0,ne=t.width,q=t.height,de=1,Y=null,we=null;const Te=new Ut(0,0,ne,q),ke=new Ut(0,0,ne,q);let st=!1;const lt=new Uh;let ce=!1,_e=!1;const Fe=new mt,Ce=new mt,$e=new z,Ye=new Ut,ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function gt(){return L===null?de:1}let V=n;function Kt(v,w){return t.getContext(v,w)}try{const v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Eh}`),t.addEventListener("webglcontextlost",ve,!1),t.addEventListener("webglcontextrestored",Ie,!1),t.addEventListener("webglcontextcreationerror",Be,!1),V===null){const w="webgl2";if(V=Kt(w,v),V===null)throw Kt(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let ut,dt,et,vt,nt,D,S,J,oe,he,se,Pe,Ee,Me,ft,Se,Ve,Qe,rt,Ne,_t,it,St,$;function Oe(){ut=new L_(V),ut.init(),it=new gx(V,ut),dt=new w_(V,ut,e,it),et=new fx(V),dt.reverseDepthBuffer&&et.buffers.depth.setReversed(!0),vt=new N_(V),nt=new Jv,D=new mx(V,ut,et,nt,dt,it,vt),S=new A_(y),J=new P_(y),oe=new Hm(V),St=new b_(V,oe),he=new I_(V,oe,vt,St),se=new F_(V,he,oe,vt),rt=new U_(V,dt,D),Se=new T_(nt),Pe=new Zv(y,S,J,ut,dt,St,Se),Ee=new Ex(y,nt),Me=new ex,ft=new ox(ut),Qe=new S_(y,S,J,et,se,d,l),Ve=new ux(y,se,dt),$=new wx(V,vt,dt,et),Ne=new E_(V,ut,vt),_t=new D_(V,ut,vt),vt.programs=Pe.programs,y.capabilities=dt,y.extensions=ut,y.properties=nt,y.renderLists=Me,y.shadowMap=Ve,y.state=et,y.info=vt}Oe();const ae=new Sx(y,V);this.xr=ae,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const v=ut.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=ut.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return de},this.setPixelRatio=function(v){v!==void 0&&(de=v,this.setSize(ne,q,!1))},this.getSize=function(v){return v.set(ne,q)},this.setSize=function(v,w,T=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=v,q=w,t.width=Math.floor(v*de),t.height=Math.floor(w*de),T===!0&&(t.style.width=v+"px",t.style.height=w+"px"),this.setViewport(0,0,v,w)},this.getDrawingBufferSize=function(v){return v.set(ne*de,q*de).floor()},this.setDrawingBufferSize=function(v,w,T){ne=v,q=w,de=T,t.width=Math.floor(v*T),t.height=Math.floor(w*T),this.setViewport(0,0,v,w)},this.getCurrentViewport=function(v){return v.copy(x)},this.getViewport=function(v){return v.copy(Te)},this.setViewport=function(v,w,T,N){v.isVector4?Te.set(v.x,v.y,v.z,v.w):Te.set(v,w,T,N),et.viewport(x.copy(Te).multiplyScalar(de).round())},this.getScissor=function(v){return v.copy(ke)},this.setScissor=function(v,w,T,N){v.isVector4?ke.set(v.x,v.y,v.z,v.w):ke.set(v,w,T,N),et.scissor(b.copy(ke).multiplyScalar(de).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(v){et.setScissorTest(st=v)},this.setOpaqueSort=function(v){Y=v},this.setTransparentSort=function(v){we=v},this.getClearColor=function(v){return v.copy(Qe.getClearColor())},this.setClearColor=function(){Qe.setClearColor.apply(Qe,arguments)},this.getClearAlpha=function(){return Qe.getClearAlpha()},this.setClearAlpha=function(){Qe.setClearAlpha.apply(Qe,arguments)},this.clear=function(v=!0,w=!0,T=!0){let N=0;if(v){let A=!1;if(L!==null){const W=L.texture.format;A=W===Ih||W===Lh||W===Ph}if(A){const W=L.texture.type,Q=W===Ei||W===Bs||W===_o||W===Cr||W===Ah||W===Rh,ee=Qe.getClearColor(),te=Qe.getClearAlpha(),le=ee.r,C=ee.g,B=ee.b;Q?(p[0]=le,p[1]=C,p[2]=B,p[3]=te,V.clearBufferuiv(V.COLOR,0,p)):(g[0]=le,g[1]=C,g[2]=B,g[3]=te,V.clearBufferiv(V.COLOR,0,g))}else N|=V.COLOR_BUFFER_BIT}w&&(N|=V.DEPTH_BUFFER_BIT,V.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),T&&(N|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ve,!1),t.removeEventListener("webglcontextrestored",Ie,!1),t.removeEventListener("webglcontextcreationerror",Be,!1),Me.dispose(),ft.dispose(),nt.dispose(),S.dispose(),J.dispose(),se.dispose(),St.dispose(),$.dispose(),Pe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Xn),ae.removeEventListener("sessionend",Ln),In.stop()};function ve(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Ie(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const v=vt.autoReset,w=Ve.enabled,T=Ve.autoUpdate,N=Ve.needsUpdate,A=Ve.type;Oe(),vt.autoReset=v,Ve.enabled=w,Ve.autoUpdate=T,Ve.needsUpdate=N,Ve.type=A}function Be(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function ot(v){const w=v.target;w.removeEventListener("dispose",ot),Ot(w)}function Ot(v){Xt(v),nt.remove(v)}function Xt(v){const w=nt.get(v).programs;w!==void 0&&(w.forEach(function(T){Pe.releaseProgram(T)}),v.isShaderMaterial&&Pe.releaseShaderCache(v))}this.renderBufferDirect=function(v,w,T,N,A,W){w===null&&(w=ht);const Q=A.isMesh&&A.matrixWorld.determinant()<0,ee=R(v,w,T,N,A);et.setMaterial(N,Q);let te=T.index,le=1;if(N.wireframe===!0){if(te=he.getWireframeAttribute(T),te===void 0)return;le=2}const C=T.drawRange,B=T.attributes.position;let re=C.start*le,fe=(C.start+C.count)*le;W!==null&&(re=Math.max(re,W.start*le),fe=Math.min(fe,(W.start+W.count)*le)),te!==null?(re=Math.max(re,0),fe=Math.min(fe,te.count)):B!=null&&(re=Math.max(re,0),fe=Math.min(fe,B.count));const ue=fe-re;if(ue<0||ue===1/0)return;St.setup(A,N,ee,T,te);let Re,me=Ne;if(te!==null&&(Re=oe.get(te),me=_t,me.setIndex(Re)),A.isMesh)N.wireframe===!0?(et.setLineWidth(N.wireframeLinewidth*gt()),me.setMode(V.LINES)):me.setMode(V.TRIANGLES);else if(A.isLine){let pe=N.linewidth;pe===void 0&&(pe=1),et.setLineWidth(pe*gt()),A.isLineSegments?me.setMode(V.LINES):A.isLineLoop?me.setMode(V.LINE_LOOP):me.setMode(V.LINE_STRIP)}else A.isPoints?me.setMode(V.POINTS):A.isSprite&&me.setMode(V.TRIANGLES);if(A.isBatchedMesh)if(A._multiDrawInstances!==null)me.renderMultiDrawInstances(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount,A._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))me.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{const pe=A._multiDrawStarts,be=A._multiDrawCounts,ge=A._multiDrawCount,ye=te?oe.get(te).bytesPerElement:1,He=nt.get(N).currentProgram.getUniforms();for(let Le=0;Le<ge;Le++)He.setValue(V,"_gl_DrawID",Le),me.render(pe[Le]/ye,be[Le])}else if(A.isInstancedMesh)me.renderInstances(re,ue,A.count);else if(T.isInstancedBufferGeometry){const pe=T._maxInstanceCount!==void 0?T._maxInstanceCount:1/0,be=Math.min(T.instanceCount,pe);me.renderInstances(re,ue,be)}else me.render(re,ue)};function xt(v,w,T){v.transparent===!0&&v.side===Tn&&v.forceSinglePass===!1?(v.side=An,v.needsUpdate=!0,Mn(v,w,T),v.side=ts,v.needsUpdate=!0,Mn(v,w,T),v.side=Tn):Mn(v,w,T)}this.compile=function(v,w,T=null){T===null&&(T=v),m=ft.get(T),m.init(w),E.push(m),T.traverseVisible(function(A){A.isLight&&A.layers.test(w.layers)&&(m.pushLight(A),A.castShadow&&m.pushShadow(A))}),v!==T&&v.traverseVisible(function(A){A.isLight&&A.layers.test(w.layers)&&(m.pushLight(A),A.castShadow&&m.pushShadow(A))}),m.setupLights();const N=new Set;return v.traverse(function(A){if(!(A.isMesh||A.isPoints||A.isLine||A.isSprite))return;const W=A.material;if(W)if(Array.isArray(W))for(let Q=0;Q<W.length;Q++){const ee=W[Q];xt(ee,T,A),N.add(ee)}else xt(W,T,A),N.add(W)}),E.pop(),m=null,N},this.compileAsync=function(v,w,T=null){const N=this.compile(v,w,T);return new Promise(A=>{function W(){if(N.forEach(function(Q){nt.get(Q).currentProgram.isReady()&&N.delete(Q)}),N.size===0){A(v);return}setTimeout(W,10)}ut.get("KHR_parallel_shader_compile")!==null?W():setTimeout(W,10)})};let Lt=null;function Zt(v){Lt&&Lt(v)}function Xn(){In.stop()}function Ln(){In.start()}const In=new Ef;In.setAnimationLoop(Zt),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(v){Lt=v,ae.setAnimationLoop(v),v===null?In.stop():In.start()},ae.addEventListener("sessionstart",Xn),ae.addEventListener("sessionend",Ln),this.render=function(v,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(w),w=ae.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,w,L),m=ft.get(v,E.length),m.init(w),E.push(m),Ce.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),lt.setFromProjectionMatrix(Ce),_e=this.localClippingEnabled,ce=Se.init(this.clippingPlanes,_e),_=Me.get(v,f.length),_.init(),f.push(_),ae.enabled===!0&&ae.isPresenting===!0){const W=y.xr.getDepthSensingMesh();W!==null&&di(W,w,-1/0,y.sortObjects)}di(v,w,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(Y,we),At=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,At&&Qe.addToRenderList(_,v),this.info.render.frame++,ce===!0&&Se.beginShadows();const T=m.state.shadowsArray;Ve.render(T,v,w),ce===!0&&Se.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=_.opaque,A=_.transmissive;if(m.setupLights(),w.isArrayCamera){const W=w.cameras;if(A.length>0)for(let Q=0,ee=W.length;Q<ee;Q++){const te=W[Q];ei(N,A,v,te)}At&&Qe.render(v);for(let Q=0,ee=W.length;Q<ee;Q++){const te=W[Q];qt(_,v,te,te.viewport)}}else A.length>0&&ei(N,A,v,w),At&&Qe.render(v),qt(_,v,w);L!==null&&(D.updateMultisampleRenderTarget(L),D.updateRenderTargetMipmap(L)),v.isScene===!0&&v.onAfterRender(y,v,w),St.resetDefaultState(),U=-1,K=null,E.pop(),E.length>0?(m=E[E.length-1],ce===!0&&Se.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function di(v,w,T,N){if(v.visible===!1)return;if(v.layers.test(w.layers)){if(v.isGroup)T=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(w);else if(v.isLight)m.pushLight(v),v.castShadow&&m.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||lt.intersectsSprite(v)){N&&Ye.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ce);const Q=se.update(v),ee=v.material;ee.visible&&_.push(v,Q,ee,T,Ye.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||lt.intersectsObject(v))){const Q=se.update(v),ee=v.material;if(N&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ye.copy(v.boundingSphere.center)):(Q.boundingSphere===null&&Q.computeBoundingSphere(),Ye.copy(Q.boundingSphere.center)),Ye.applyMatrix4(v.matrixWorld).applyMatrix4(Ce)),Array.isArray(ee)){const te=Q.groups;for(let le=0,C=te.length;le<C;le++){const B=te[le],re=ee[B.materialIndex];re&&re.visible&&_.push(v,Q,re,T,Ye.z,B)}}else ee.visible&&_.push(v,Q,ee,T,Ye.z,null)}}const W=v.children;for(let Q=0,ee=W.length;Q<ee;Q++)di(W[Q],w,T,N)}function qt(v,w,T,N){const A=v.opaque,W=v.transmissive,Q=v.transparent;m.setupLightsView(T),ce===!0&&Se.setGlobalState(y.clippingPlanes,T),N&&et.viewport(x.copy(N)),A.length>0&&Ct(A,w,T),W.length>0&&Ct(W,w,T),Q.length>0&&Ct(Q,w,T),et.buffers.depth.setTest(!0),et.buffers.depth.setMask(!0),et.buffers.color.setMask(!0),et.setPolygonOffset(!1)}function ei(v,w,T,N){if((T.isScene===!0?T.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[N.id]===void 0&&(m.state.transmissionRenderTarget[N.id]=new hi(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Wn:Ei,minFilter:Ui,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Dt.workingColorSpace}));const W=m.state.transmissionRenderTarget[N.id],Q=N.viewport||x;W.setSize(Q.z,Q.w);const ee=y.getRenderTarget();y.setRenderTarget(W),y.getClearColor(k),H=y.getClearAlpha(),H<1&&y.setClearColor(16777215,.5),y.clear(),At&&Qe.render(T);const te=y.toneMapping;y.toneMapping=gs;const le=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),m.setupLightsView(N),ce===!0&&Se.setGlobalState(y.clippingPlanes,N),Ct(v,T,N),D.updateMultisampleRenderTarget(W),D.updateRenderTargetMipmap(W),ut.has("WEBGL_multisampled_render_to_texture")===!1){let C=!1;for(let B=0,re=w.length;B<re;B++){const fe=w[B],ue=fe.object,Re=fe.geometry,me=fe.material,pe=fe.group;if(me.side===Tn&&ue.layers.test(N.layers)){const be=me.side;me.side=An,me.needsUpdate=!0,un(ue,T,N,Re,me,pe),me.side=be,me.needsUpdate=!0,C=!0}}C===!0&&(D.updateMultisampleRenderTarget(W),D.updateRenderTargetMipmap(W))}y.setRenderTarget(ee),y.setClearColor(k,H),le!==void 0&&(N.viewport=le),y.toneMapping=te}function Ct(v,w,T){const N=w.isScene===!0?w.overrideMaterial:null;for(let A=0,W=v.length;A<W;A++){const Q=v[A],ee=Q.object,te=Q.geometry,le=N===null?Q.material:N,C=Q.group;ee.layers.test(T.layers)&&un(ee,w,T,te,le,C)}}function un(v,w,T,N,A,W){v.onBeforeRender(y,w,T,N,A,W),v.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),A.onBeforeRender(y,w,T,N,v,W),A.transparent===!0&&A.side===Tn&&A.forceSinglePass===!1?(A.side=An,A.needsUpdate=!0,y.renderBufferDirect(T,w,N,A,v,W),A.side=ts,A.needsUpdate=!0,y.renderBufferDirect(T,w,N,A,v,W),A.side=Tn):y.renderBufferDirect(T,w,N,A,v,W),v.onAfterRender(y,w,T,N,A,W)}function Mn(v,w,T){w.isScene!==!0&&(w=ht);const N=nt.get(v),A=m.state.lights,W=m.state.shadowsArray,Q=A.state.version,ee=Pe.getParameters(v,A.state,W,w,T),te=Pe.getProgramCacheKey(ee);let le=N.programs;N.environment=v.isMeshStandardMaterial?w.environment:null,N.fog=w.fog,N.envMap=(v.isMeshStandardMaterial?J:S).get(v.envMap||N.environment),N.envMapRotation=N.environment!==null&&v.envMap===null?w.environmentRotation:v.envMapRotation,le===void 0&&(v.addEventListener("dispose",ot),le=new Map,N.programs=le);let C=le.get(te);if(C!==void 0){if(N.currentProgram===C&&N.lightsStateVersion===Q)return F(v,ee),C}else ee.uniforms=Pe.getUniforms(v),v.onBeforeCompile(ee,y),C=Pe.acquireProgram(ee,te),le.set(te,C),N.uniforms=ee.uniforms;const B=N.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(B.clippingPlanes=Se.uniform),F(v,ee),N.needsLights=j(v),N.lightsStateVersion=Q,N.needsLights&&(B.ambientLightColor.value=A.state.ambient,B.lightProbe.value=A.state.probe,B.directionalLights.value=A.state.directional,B.directionalLightShadows.value=A.state.directionalShadow,B.spotLights.value=A.state.spot,B.spotLightShadows.value=A.state.spotShadow,B.rectAreaLights.value=A.state.rectArea,B.ltc_1.value=A.state.rectAreaLTC1,B.ltc_2.value=A.state.rectAreaLTC2,B.pointLights.value=A.state.point,B.pointLightShadows.value=A.state.pointShadow,B.hemisphereLights.value=A.state.hemi,B.directionalShadowMap.value=A.state.directionalShadowMap,B.directionalShadowMatrix.value=A.state.directionalShadowMatrix,B.spotShadowMap.value=A.state.spotShadowMap,B.spotLightMatrix.value=A.state.spotLightMatrix,B.spotLightMap.value=A.state.spotLightMap,B.pointShadowMap.value=A.state.pointShadowMap,B.pointShadowMatrix.value=A.state.pointShadowMatrix),N.currentProgram=C,N.uniformsList=null,C}function en(v){if(v.uniformsList===null){const w=v.currentProgram.getUniforms();v.uniformsList=Ia.seqWithValue(w.seq,v.uniforms)}return v.uniformsList}function F(v,w){const T=nt.get(v);T.outputColorSpace=w.outputColorSpace,T.batching=w.batching,T.batchingColor=w.batchingColor,T.instancing=w.instancing,T.instancingColor=w.instancingColor,T.instancingMorph=w.instancingMorph,T.skinning=w.skinning,T.morphTargets=w.morphTargets,T.morphNormals=w.morphNormals,T.morphColors=w.morphColors,T.morphTargetsCount=w.morphTargetsCount,T.numClippingPlanes=w.numClippingPlanes,T.numIntersection=w.numClipIntersection,T.vertexAlphas=w.vertexAlphas,T.vertexTangents=w.vertexTangents,T.toneMapping=w.toneMapping}function R(v,w,T,N,A){w.isScene!==!0&&(w=ht),D.resetTextureUnits();const W=w.fog,Q=N.isMeshStandardMaterial?w.environment:null,ee=L===null?y.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:gn,te=(N.isMeshStandardMaterial?J:S).get(N.envMap||Q),le=N.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,C=!!T.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),B=!!T.morphAttributes.position,re=!!T.morphAttributes.normal,fe=!!T.morphAttributes.color;let ue=gs;N.toneMapped&&(L===null||L.isXRRenderTarget===!0)&&(ue=y.toneMapping);const Re=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,me=Re!==void 0?Re.length:0,pe=nt.get(N),be=m.state.lights;if(ce===!0&&(_e===!0||v!==K)){const Bt=v===K&&N.id===U;Se.setState(N,v,Bt)}let ge=!1;N.version===pe.__version?(pe.needsLights&&pe.lightsStateVersion!==be.state.version||pe.outputColorSpace!==ee||A.isBatchedMesh&&pe.batching===!1||!A.isBatchedMesh&&pe.batching===!0||A.isBatchedMesh&&pe.batchingColor===!0&&A.colorTexture===null||A.isBatchedMesh&&pe.batchingColor===!1&&A.colorTexture!==null||A.isInstancedMesh&&pe.instancing===!1||!A.isInstancedMesh&&pe.instancing===!0||A.isSkinnedMesh&&pe.skinning===!1||!A.isSkinnedMesh&&pe.skinning===!0||A.isInstancedMesh&&pe.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&pe.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&pe.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&pe.instancingMorph===!1&&A.morphTexture!==null||pe.envMap!==te||N.fog===!0&&pe.fog!==W||pe.numClippingPlanes!==void 0&&(pe.numClippingPlanes!==Se.numPlanes||pe.numIntersection!==Se.numIntersection)||pe.vertexAlphas!==le||pe.vertexTangents!==C||pe.morphTargets!==B||pe.morphNormals!==re||pe.morphColors!==fe||pe.toneMapping!==ue||pe.morphTargetsCount!==me)&&(ge=!0):(ge=!0,pe.__version=N.version);let ye=pe.currentProgram;ge===!0&&(ye=Mn(N,w,A));let He=!1,Le=!1,yt=!1;const tt=ye.getUniforms(),Nt=pe.uniforms;if(et.useProgram(ye.program)&&(He=!0,Le=!0,yt=!0),N.id!==U&&(U=N.id,Le=!0),He||K!==v){dt.reverseDepthBuffer?(Fe.copy(v.projectionMatrix),mm(Fe),gm(Fe),tt.setValue(V,"projectionMatrix",Fe)):tt.setValue(V,"projectionMatrix",v.projectionMatrix),tt.setValue(V,"viewMatrix",v.matrixWorldInverse);const Bt=tt.map.cameraPosition;Bt!==void 0&&Bt.setValue(V,$e.setFromMatrixPosition(v.matrixWorld)),dt.logarithmicDepthBuffer&&tt.setValue(V,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&tt.setValue(V,"isOrthographic",v.isOrthographicCamera===!0),K!==v&&(K=v,Le=!0,yt=!0)}if(A.isSkinnedMesh){tt.setOptional(V,A,"bindMatrix"),tt.setOptional(V,A,"bindMatrixInverse");const Bt=A.skeleton;Bt&&(Bt.boneTexture===null&&Bt.computeBoneTexture(),tt.setValue(V,"boneTexture",Bt.boneTexture,D))}A.isBatchedMesh&&(tt.setOptional(V,A,"batchingTexture"),tt.setValue(V,"batchingTexture",A._matricesTexture,D),tt.setOptional(V,A,"batchingIdTexture"),tt.setValue(V,"batchingIdTexture",A._indirectTexture,D),tt.setOptional(V,A,"batchingColorTexture"),A._colorsTexture!==null&&tt.setValue(V,"batchingColorTexture",A._colorsTexture,D));const an=T.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&rt.update(A,T,ye),(Le||pe.receiveShadow!==A.receiveShadow)&&(pe.receiveShadow=A.receiveShadow,tt.setValue(V,"receiveShadow",A.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Nt.envMap.value=te,Nt.flipEnvMap.value=te.isCubeTexture&&te.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&w.environment!==null&&(Nt.envMapIntensity.value=w.environmentIntensity),Le&&(tt.setValue(V,"toneMappingExposure",y.toneMappingExposure),pe.needsLights&&X(Nt,yt),W&&N.fog===!0&&Ee.refreshFogUniforms(Nt,W),Ee.refreshMaterialUniforms(Nt,N,de,q,m.state.transmissionRenderTarget[v.id]),Ia.upload(V,en(pe),Nt,D)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Ia.upload(V,en(pe),Nt,D),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&tt.setValue(V,"center",A.center),tt.setValue(V,"modelViewMatrix",A.modelViewMatrix),tt.setValue(V,"normalMatrix",A.normalMatrix),tt.setValue(V,"modelMatrix",A.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const Bt=N.uniformsGroups;for(let ln=0,qn=Bt.length;ln<qn;ln++){const jn=Bt[ln];$.update(jn,ye),$.bind(jn,ye)}}return ye}function X(v,w){v.ambientLightColor.needsUpdate=w,v.lightProbe.needsUpdate=w,v.directionalLights.needsUpdate=w,v.directionalLightShadows.needsUpdate=w,v.pointLights.needsUpdate=w,v.pointLightShadows.needsUpdate=w,v.spotLights.needsUpdate=w,v.spotLightShadows.needsUpdate=w,v.rectAreaLights.needsUpdate=w,v.hemisphereLights.needsUpdate=w}function j(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(v,w,T){nt.get(v.texture).__webglTexture=w,nt.get(v.depthTexture).__webglTexture=T;const N=nt.get(v);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=T===void 0,N.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,w){const T=nt.get(v);T.__webglFramebuffer=w,T.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(v,w=0,T=0){L=v,O=w,I=T;let N=!0,A=null,W=!1,Q=!1;if(v){const te=nt.get(v);if(te.__useDefaultFramebuffer!==void 0)et.bindFramebuffer(V.FRAMEBUFFER,null),N=!1;else if(te.__webglFramebuffer===void 0)D.setupRenderTarget(v);else if(te.__hasExternalTextures)D.rebindTextures(v,nt.get(v.texture).__webglTexture,nt.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const B=v.depthTexture;if(te.__boundDepthTexture!==B){if(B!==null&&nt.has(B)&&(v.width!==B.image.width||v.height!==B.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(v)}}const le=v.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(Q=!0);const C=nt.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(C[w])?A=C[w][T]:A=C[w],W=!0):v.samples>0&&D.useMultisampledRTT(v)===!1?A=nt.get(v).__webglMultisampledFramebuffer:Array.isArray(C)?A=C[T]:A=C,x.copy(v.viewport),b.copy(v.scissor),G=v.scissorTest}else x.copy(Te).multiplyScalar(de).floor(),b.copy(ke).multiplyScalar(de).floor(),G=st;if(et.bindFramebuffer(V.FRAMEBUFFER,A)&&N&&et.drawBuffers(v,A),et.viewport(x),et.scissor(b),et.setScissorTest(G),W){const te=nt.get(v.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+w,te.__webglTexture,T)}else if(Q){const te=nt.get(v.texture),le=w||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,te.__webglTexture,T||0,le)}U=-1},this.readRenderTargetPixels=function(v,w,T,N,A,W,Q){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=nt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Q!==void 0&&(ee=ee[Q]),ee){et.bindFramebuffer(V.FRAMEBUFFER,ee);try{const te=v.texture,le=te.format,C=te.type;if(!dt.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(C)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=v.width-N&&T>=0&&T<=v.height-A&&V.readPixels(w,T,N,A,it.convert(le),it.convert(C),W)}finally{const te=L!==null?nt.get(L).__webglFramebuffer:null;et.bindFramebuffer(V.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(v,w,T,N,A,W,Q){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=nt.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&Q!==void 0&&(ee=ee[Q]),ee){const te=v.texture,le=te.format,C=te.type;if(!dt.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(C))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(w>=0&&w<=v.width-N&&T>=0&&T<=v.height-A){et.bindFramebuffer(V.FRAMEBUFFER,ee);const B=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,B),V.bufferData(V.PIXEL_PACK_BUFFER,W.byteLength,V.STREAM_READ),V.readPixels(w,T,N,A,it.convert(le),it.convert(C),0);const re=L!==null?nt.get(L).__webglFramebuffer:null;et.bindFramebuffer(V.FRAMEBUFFER,re);const fe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await pm(V,fe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,B),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,W),V.deleteBuffer(B),V.deleteSync(fe),W}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,w=null,T=0){v.isTexture!==!0&&(La("WebGLRenderer: copyFramebufferToTexture function signature has changed."),w=arguments[0]||null,v=arguments[1]);const N=Math.pow(2,-T),A=Math.floor(v.image.width*N),W=Math.floor(v.image.height*N),Q=w!==null?w.x:0,ee=w!==null?w.y:0;D.setTexture2D(v,0),V.copyTexSubImage2D(V.TEXTURE_2D,T,0,0,Q,ee,A,W),et.unbindTexture()},this.copyTextureToTexture=function(v,w,T=null,N=null,A=0){v.isTexture!==!0&&(La("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,v=arguments[1],w=arguments[2],A=arguments[3]||0,T=null);let W,Q,ee,te,le,C;T!==null?(W=T.max.x-T.min.x,Q=T.max.y-T.min.y,ee=T.min.x,te=T.min.y):(W=v.image.width,Q=v.image.height,ee=0,te=0),N!==null?(le=N.x,C=N.y):(le=0,C=0);const B=it.convert(w.format),re=it.convert(w.type);D.setTexture2D(w,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,w.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,w.unpackAlignment);const fe=V.getParameter(V.UNPACK_ROW_LENGTH),ue=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Re=V.getParameter(V.UNPACK_SKIP_PIXELS),me=V.getParameter(V.UNPACK_SKIP_ROWS),pe=V.getParameter(V.UNPACK_SKIP_IMAGES),be=v.isCompressedTexture?v.mipmaps[A]:v.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,be.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,be.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ee),V.pixelStorei(V.UNPACK_SKIP_ROWS,te),v.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,A,le,C,W,Q,B,re,be.data):v.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,A,le,C,be.width,be.height,B,be.data):V.texSubImage2D(V.TEXTURE_2D,A,le,C,W,Q,B,re,be),V.pixelStorei(V.UNPACK_ROW_LENGTH,fe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ue),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Re),V.pixelStorei(V.UNPACK_SKIP_ROWS,me),V.pixelStorei(V.UNPACK_SKIP_IMAGES,pe),A===0&&w.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),et.unbindTexture()},this.copyTextureToTexture3D=function(v,w,T=null,N=null,A=0){v.isTexture!==!0&&(La("WebGLRenderer: copyTextureToTexture3D function signature has changed."),T=arguments[0]||null,N=arguments[1]||null,v=arguments[2],w=arguments[3],A=arguments[4]||0);let W,Q,ee,te,le,C,B,re,fe;const ue=v.isCompressedTexture?v.mipmaps[A]:v.image;T!==null?(W=T.max.x-T.min.x,Q=T.max.y-T.min.y,ee=T.max.z-T.min.z,te=T.min.x,le=T.min.y,C=T.min.z):(W=ue.width,Q=ue.height,ee=ue.depth,te=0,le=0,C=0),N!==null?(B=N.x,re=N.y,fe=N.z):(B=0,re=0,fe=0);const Re=it.convert(w.format),me=it.convert(w.type);let pe;if(w.isData3DTexture)D.setTexture3D(w,0),pe=V.TEXTURE_3D;else if(w.isDataArrayTexture||w.isCompressedArrayTexture)D.setTexture2DArray(w,0),pe=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,w.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,w.unpackAlignment);const be=V.getParameter(V.UNPACK_ROW_LENGTH),ge=V.getParameter(V.UNPACK_IMAGE_HEIGHT),ye=V.getParameter(V.UNPACK_SKIP_PIXELS),He=V.getParameter(V.UNPACK_SKIP_ROWS),Le=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,ue.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ue.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,te),V.pixelStorei(V.UNPACK_SKIP_ROWS,le),V.pixelStorei(V.UNPACK_SKIP_IMAGES,C),v.isDataTexture||v.isData3DTexture?V.texSubImage3D(pe,A,B,re,fe,W,Q,ee,Re,me,ue.data):w.isCompressedArrayTexture?V.compressedTexSubImage3D(pe,A,B,re,fe,W,Q,ee,Re,ue.data):V.texSubImage3D(pe,A,B,re,fe,W,Q,ee,Re,me,ue),V.pixelStorei(V.UNPACK_ROW_LENGTH,be),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ge),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ye),V.pixelStorei(V.UNPACK_SKIP_ROWS,He),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Le),A===0&&w.generateMipmaps&&V.generateMipmap(pe),et.unbindTexture()},this.initRenderTarget=function(v){nt.get(v).__webglFramebuffer===void 0&&D.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?D.setTextureCube(v,0):v.isData3DTexture?D.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?D.setTexture2DArray(v,0):D.setTexture2D(v,0),et.unbindTexture()},this.resetState=function(){O=0,I=0,L=null,et.reset(),St.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Qi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Dh?"display-p3":"srgb",t.unpackColorSpace=Dt.workingColorSpace===Ka?"display-p3":"srgb"}}class el{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=n}clone(){return new el(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Er extends jt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Oi,this.environmentIntensity=1,this.environmentRotation=new Oi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Oh{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=oh,this.updateRanges=[],this.version=0,this.uuid=Si()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Si()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const kn=new z;class ks{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyMatrix4(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.applyNormalMatrix(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)kn.fromBufferAttribute(this,t),kn.transformDirection(e),this.setXYZ(t,kn.x,kn.y,kn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=Mi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=zt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=zt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Mi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Mi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Mi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Mi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=zt(t,this.array),n=zt(n,this.array),s=zt(s,this.array),r=zt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new Rn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ks(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Pf extends bi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hr;const eo=new z,ur=new z,dr=new z,fr=new Je,to=new Je,Lf=new mt,ua=new z,no=new z,da=new z,ed=new Je,Jl=new Je,td=new Je;class Ax extends jt{constructor(e=new Pf){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new Qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Oh(t,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new ks(n,3,0,!1)),hr.setAttribute("uv",new ks(n,2,3,!1))}this.geometry=hr,this.material=e,this.center=new Je(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),Lf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;fa(ua.set(-.5,-.5,0),dr,o,ur,s,r),fa(no.set(.5,-.5,0),dr,o,ur,s,r),fa(da.set(.5,.5,0),dr,o,ur,s,r),ed.set(0,0),Jl.set(1,0),td.set(1,1);let a=e.ray.intersectTriangle(ua,no,da,!1,eo);if(a===null&&(fa(no.set(-.5,.5,0),dr,o,ur,s,r),Jl.set(0,1),a=e.ray.intersectTriangle(ua,da,no,!1,eo),a===null))return;const l=e.ray.origin.distanceTo(eo);l<e.near||l>e.far||t.push({distance:l,point:eo.clone(),uv:li.getInterpolation(eo,ua,no,da,ed,Jl,td,new Je),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function fa(i,e,t,n,s,r){fr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(to.x=r*fr.x-s*fr.y,to.y=s*fr.x+r*fr.y):to.copy(fr),i.copy(e),i.x+=to.x,i.y+=to.y,i.applyMatrix4(Lf)}const nd=new z,id=new Ut,sd=new Ut,Rx=new z,rd=new mt,pa=new z,Ql=new Bi,od=new mt,ec=new Za;class Cx extends Ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=au,this.bindMatrix=new mt,this.bindMatrixInverse=new mt,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Gn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingBox.expandByPoint(pa)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Bi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,pa),this.boundingSphere.expandByPoint(pa)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ql.copy(this.boundingSphere),Ql.applyMatrix4(s),e.ray.intersectsSphere(Ql)!==!1&&(od.copy(s).invert(),ec.copy(e.ray).applyMatrix4(od),!(this.boundingBox!==null&&ec.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ec)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Ut,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===au?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Bp?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;id.fromBufferAttribute(s.attributes.skinIndex,e),sd.fromBufferAttribute(s.attributes.skinWeight,e),nd.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=sd.getComponent(r);if(o!==0){const a=id.getComponent(r);rd.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(Rx.copy(nd).applyMatrix4(rd),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class If extends jt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class tl extends mn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Pn,h=Pn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ad=new mt,Px=new mt;class Bh{constructor(e=[],t=[]){this.uuid=Si(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new mt)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new mt;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:Px;ad.multiplyMatrices(a,t[r]),ad.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Bh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new tl(t,e,e,ci,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new If),this.bones.push(o),this.boneInverses.push(new mt().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class hh extends Rn{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const pr=new mt,ld=new mt,ma=[],cd=new Gn,Lx=new mt,io=new Ae,so=new Bi;class vr extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new hh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,Lx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Gn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),cd.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(cd)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Bi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),so.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(so)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(io.geometry=this.geometry,io.material=this.material,io.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),so.copy(this.boundingSphere),so.applyMatrix4(n),e.ray.intersectsSphere(so)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),ld.multiplyMatrices(n,pr),io.matrixWorld=ld,io.raycast(e,ma);for(let o=0,a=ma.length;o<a;o++){const l=ma[o];l.instanceId=r,l.object=this,t.push(l)}ma.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new hh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new tl(new Float32Array(s*this.count),s,this.count,Ch,$n));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class Va extends bi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ga=new z,Wa=new z,hd=new mt,ro=new Za,ga=new Bi,tc=new z,ud=new z;class nl extends jt{constructor(e=new Qt,t=new Va){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)Ga.fromBufferAttribute(t,s-1),Wa.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=Ga.distanceTo(Wa);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;hd.copy(s).invert(),ro.copy(e.ray).applyMatrix4(hd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),E=h.getX(_+1),y=_a(this,e,ro,l,f,E);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=_a(this,e,ro,l,_,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=_a(this,e,ro,l,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=_a(this,e,ro,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function _a(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(Ga.fromBufferAttribute(o,s),Wa.fromBufferAttribute(o,r),t.distanceSqToSegment(Ga,Wa,tc,ud)>n)return;tc.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(tc);if(!(l<e.near||l>e.far))return{distance:l,point:ud.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const dd=new z,fd=new z;class Df extends nl{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)dd.fromBufferAttribute(t,s),fd.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+dd.distanceTo(fd);e.setAttribute("lineDistance",new Ft(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Ix extends nl{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class il extends bi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const pd=new mt,uh=new Za,va=new Bi,xa=new z;class Xa extends jt{constructor(e=new Qt,t=new il){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),va.copy(n.boundingSphere),va.applyMatrix4(s),va.radius+=r,e.ray.intersectsSphere(va)===!1)return;pd.copy(s).invert(),uh.copy(e.ray).applyMatrix4(pd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);xa.fromBufferAttribute(u,m),md(xa,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)xa.fromBufferAttribute(u,g),md(xa,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function md(i,e,t,n,s,r,o){const a=uh.distanceSqToPoint(i);if(a<t){const l=new z;uh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class gd extends mn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Pn,this.minFilter=Pn,this.generateMipmaps=!1,this.needsUpdate=!0}}class Da extends mn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class So extends Qt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new z,h=new Je;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Ft(o,3)),this.setAttribute("normal",new Ft(a,3)),this.setAttribute("uv",new Ft(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new So(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class yi extends Qt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;E(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Ft(u,3)),this.setAttribute("normal",new Ft(d,3)),this.setAttribute("uv",new Ft(p,2));function E(){const M=new z,O=new z;let I=0;const L=(t-e)/n;for(let U=0;U<=r;U++){const K=[],x=U/r,b=x*(t-e)+e;for(let G=0;G<=s;G++){const k=G/s,H=k*l+a,ne=Math.sin(H),q=Math.cos(H);O.x=b*ne,O.y=-x*n+m,O.z=b*q,u.push(O.x,O.y,O.z),M.set(ne,L,q).normalize(),d.push(M.x,M.y,M.z),p.push(k,1-x),K.push(g++)}_.push(K)}for(let U=0;U<s;U++)for(let K=0;K<r;K++){const x=_[K][U],b=_[K+1][U],G=_[K+1][U+1],k=_[K][U+1];e>0&&(h.push(x,b,k),I+=3),t>0&&(h.push(b,G,k),I+=3)}c.addGroup(f,I,0),f+=I}function y(M){const O=g,I=new Je,L=new z;let U=0;const K=M===!0?e:t,x=M===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),g++;const b=g;for(let G=0;G<=s;G++){const H=G/s*l+a,ne=Math.cos(H),q=Math.sin(H);L.x=K*q,L.y=m*x,L.z=K*ne,u.push(L.x,L.y,L.z),d.push(0,x,0),I.x=ne*.5+.5,I.y=q*.5*x+.5,p.push(I.x,I.y),g++}for(let G=0;G<s;G++){const k=O+G,H=b+G;M===!0?h.push(H,H+1,k):h.push(H+1,H,k),U+=3}c.addGroup(f,U,M===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class sl extends Qt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/s,p=new z,g=new Je;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const E=f+m,y=E,M=E+n+1,O=E+n+2,I=E+1;a.push(y,M,I),a.push(M,O,I)}}this.setIndex(a),this.setAttribute("position",new Ft(l,3)),this.setAttribute("normal",new Ft(c,3)),this.setAttribute("uv",new Ft(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new sl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class ps extends Qt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new z,d=new z,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const E=[],y=f/n;let M=0;f===0&&o===0?M=.5/t:f===n&&l===Math.PI&&(M=-.5/t);for(let O=0;O<=t;O++){const I=O/t;u.x=-e*Math.cos(s+I*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+I*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(I+M,1-y),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const y=h[f][E+1],M=h[f][E],O=h[f+1][E],I=h[f+1][E+1];(f!==0||o>0)&&p.push(y,M,I),(f!==n-1||l<Math.PI)&&p.push(M,O,I)}this.setIndex(p),this.setAttribute("position",new Ft(g,3)),this.setAttribute("normal",new Ft(_,3)),this.setAttribute("uv",new Ft(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ps(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kh extends Qt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new z,u=new z,d=new z;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(_,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new Ft(a,3)),this.setAttribute("normal",new Ft(l,3)),this.setAttribute("uv",new Ft(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Na extends on{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Mt extends bi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=hf,this.normalScale=new Je(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Oi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ui extends Mt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Je(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Cn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function ya(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Dx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function Nx(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function _d(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function Nf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class Ao{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ux extends Ao{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:lu,endingEnd:lu}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case cu:r=e,a=2*t-n;break;case hu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case cu:o=e,l=2*n-t;break;case hu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,M=p*m-p*_;for(let O=0;O!==a;++O)r[O]=f*o[h+O]+E*o[c+O]+y*o[l+O]+M*o[u+O];return r}}class Fx extends Ao{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Ox extends Ao{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class ki{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=ya(t,this.TimeBufferType),this.values=ya(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:ya(e.times,Array),values:ya(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Ox(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Fx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ux(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case vo:t=this.InterpolantFactoryMethodDiscrete;break;case xo:t=this.InterpolantFactoryMethodLinear;break;case bl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return vo;case this.InterpolantFactoryMethodLinear:return xo;case this.InterpolantFactoryMethodSmooth:return bl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Dx(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===bl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{const u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}ki.prototype.TimeBufferType=Float32Array;ki.prototype.ValueBufferType=Float32Array;ki.prototype.DefaultInterpolation=xo;class zr extends ki{constructor(e,t,n){super(e,t,n)}}zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=vo;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Uf extends ki{}Uf.prototype.ValueTypeName="color";class Dr extends ki{}Dr.prototype.ValueTypeName="number";class Bx extends Ao{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Fi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Nr extends ki{InterpolantFactoryMethodLinear(e){return new Bx(this.times,this.values,this.getValueSize(),e)}}Nr.prototype.ValueTypeName="quaternion";Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Hr extends ki{constructor(e,t,n){super(e,t,n)}}Hr.prototype.ValueTypeName="string";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=vo;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends ki{}Ur.prototype.ValueTypeName="vector";class kx{constructor(e="",t=-1,n=[],s=kp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=Si(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Hx(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(ki.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=Nx(l);l=_d(l,1,h),c=_d(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Dr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];Nf(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let E=0;E!==d[g].morphTargets.length;++E){const y=d[g];m.push(y.time),f.push(y.morphTarget===_?1:0)}s.push(new Dr(".morphTargetInfluence["+_+"]",m,f))}l=p.length*o}else{const p=".bones["+t[u].name+"]";n(Ur,p+".position",d,"pos",s),n(Nr,p+".quaternion",d,"rot",s),n(Ur,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function zx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Dr;case"vector":case"vector2":case"vector3":case"vector4":return Ur;case"color":return Uf;case"quaternion":return Nr;case"bool":case"boolean":return zr;case"string":return Hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Hx(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=zx(i.type);if(i.times===void 0){const t=[],n=[];Nf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const ms={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Vx{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Gx=new Vx;class _s{constructor(e){this.manager=e!==void 0?e:Gx,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}_s.DEFAULT_MATERIAL_NAME="__DEFAULT";const $i={};class Wx extends Error{constructor(e,t){super(e),this.response=t}}class bo extends _s{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=ms.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if($i[e]!==void 0){$i[e].push({onLoad:t,onProgress:n,onError:s});return}$i[e]=[],$i[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=$i[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){E();function E(){u.read().then(({done:y,value:M})=>{if(y)f.close();else{_+=M.byteLength;const O=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let I=0,L=h.length;I<L;I++){const U=h[I];U.onProgress&&U.onProgress(O)}f.enqueue(M),E()}},y=>{f.error(y)})}}});return new Response(m)}else throw new Wx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{ms.add(e,c);const h=$i[e];delete $i[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=$i[e];if(h===void 0)throw this.manager.itemError(e),c;delete $i[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Xx extends _s{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ms.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=yo("img");function l(){h(),ms.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class qx extends _s{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new tl,a=new bo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Ni,o.wrapT=c.wrapT!==void 0?c.wrapT:Ni,o.magFilter=c.magFilter!==void 0?c.magFilter:pn,o.minFilter=c.minFilter!==void 0?c.minFilter:pn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ui),c.mipmapCount===1&&(o.minFilter=pn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,s),o}}class Ff extends _s{constructor(e){super(e)}load(e,t,n,s){const r=new mn,o=new Xx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class Ro extends jt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class uo extends Ro{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const nc=new mt,vd=new z,xd=new z;class zh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Je(512,512),this.map=null,this.mapPass=null,this.matrix=new mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uh,this._frameExtents=new Je(1,1),this._viewportCount=1,this._viewports=[new Ut(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;vd.setFromMatrixPosition(e.matrixWorld),t.position.copy(vd),xd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(xd),t.updateMatrixWorld(),nc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(nc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(nc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Yx extends zh{constructor(){super(new vn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Lr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Eo extends Ro{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Yx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const yd=new mt,oo=new z,ic=new z;class $x extends zh{constructor(){super(new vn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Je(4,2),this._viewportCount=6,this._viewports=[new Ut(2,1,1,1),new Ut(0,1,1,1),new Ut(3,1,1,1),new Ut(1,1,1,1),new Ut(3,0,1,1),new Ut(1,0,1,1)],this._cubeDirections=[new z(1,0,0),new z(-1,0,0),new z(0,0,1),new z(0,0,-1),new z(0,1,0),new z(0,-1,0)],this._cubeUps=[new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,1,0),new z(0,0,1),new z(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),oo.setFromMatrixPosition(e.matrixWorld),n.position.copy(oo),ic.copy(n.position),ic.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(ic),n.updateMatrixWorld(),s.makeTranslation(-oo.x,-oo.y,-oo.z),yd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd)}}class Hh extends Ro{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new $x}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class jx extends zh{constructor(){super(new Ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Fs extends Ro{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(jt.DEFAULT_UP),this.updateMatrix(),this.target=new jt,this.shadow=new jx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Kx extends Ro{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class go{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Zx extends _s{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=ms.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return ms.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),ms.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});ms.add(e,l),r.manager.itemStart(e)}}class Jx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Md(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Md();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Md(){return performance.now()}const Vh="\\[\\]\\.:\\/",Qx=new RegExp("["+Vh+"]","g"),Gh="[^"+Vh+"]",ey="[^"+Vh.replace("\\.","")+"]",ty=/((?:WC+[\/:])*)/.source.replace("WC",Gh),ny=/(WCOD+)?/.source.replace("WCOD",ey),iy=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Gh),sy=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Gh),ry=new RegExp("^"+ty+ny+iy+sy+"$"),oy=["material","materials","bones","map"];class ay{constructor(e,t,n){const s=n||Ht.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Ht{constructor(e,t,n){this.path=t,this.parsedPath=n||Ht.parseTrackName(t),this.node=Ht.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Ht.Composite(e,t,n):new Ht(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Qx,"")}static parseTrackName(e){const t=ry.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);oy.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Ht.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Ht.Composite=ay;Ht.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Ht.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Ht.prototype.GetterByBindingType=[Ht.prototype._getValue_direct,Ht.prototype._getValue_array,Ht.prototype._getValue_arrayElement,Ht.prototype._getValue_toArray];Ht.prototype.SetterByBindingTypeAndVersioning=[[Ht.prototype._setValue_direct,Ht.prototype._setValue_direct_setNeedsUpdate,Ht.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_array,Ht.prototype._setValue_array_setNeedsUpdate,Ht.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_arrayElement,Ht.prototype._setValue_arrayElement_setNeedsUpdate,Ht.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Ht.prototype._setValue_fromArray,Ht.prototype._setValue_fromArray_setNeedsUpdate,Ht.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const Sd=new Je;class ly{constructor(e=new Je(1/0,1/0),t=new Je(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Sd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Sd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Eh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Eh);function bd(i,e){if(e===zp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===rh||e===cf){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===rh)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class cy extends _s{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new py(t)}),this.register(function(t){return new my(t)}),this.register(function(t){return new Ey(t)}),this.register(function(t){return new wy(t)}),this.register(function(t){return new Ty(t)}),this.register(function(t){return new _y(t)}),this.register(function(t){return new vy(t)}),this.register(function(t){return new xy(t)}),this.register(function(t){return new yy(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new My(t)}),this.register(function(t){return new gy(t)}),this.register(function(t){return new by(t)}),this.register(function(t){return new Sy(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new Ay(t)}),this.register(function(t){return new Ry(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=go.extractUrlBase(e);o=go.resolveURL(c,this.path)}else o=go.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new bo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Of){try{o[Pt.KHR_BINARY_GLTF]=new Cy(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Pt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Vy(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Pt.KHR_MATERIALS_UNLIT:o[u]=new dy;break;case Pt.KHR_DRACO_MESH_COMPRESSION:o[u]=new Py(r,this.dracoLoader);break;case Pt.KHR_TEXTURE_TRANSFORM:o[u]=new Ly;break;case Pt.KHR_MESH_QUANTIZATION:o[u]=new Iy;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function hy(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Pt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class uy{constructor(e){this.parser=e,this.name=Pt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Xe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],gn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Fs(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Hh(h),c.distance=u;break;case"spot":c=new Eo(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,Zi(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class dy{constructor(){this.name=Pt.KHR_MATERIALS_UNLIT}getMaterialType(){return sn}extendParams(e,t,n){const s=[];e.color=new Xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],gn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Gt))}return Promise.all(s)}}class fy{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class py{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Je(a,a)}return Promise.all(r)}}class my{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class gy{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class _y{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],gn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Gt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class vy{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class xy{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Xe().setRGB(a[0],a[1],a[2],gn),Promise.all(r)}}class yy{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class My{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Xe().setRGB(a[0],a[1],a[2],gn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Gt)),Promise.all(r)}}class Sy{constructor(e){this.parser=e,this.name=Pt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class by{constructor(e){this.parser=e,this.name=Pt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ui}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class Ey{constructor(e){this.parser=e,this.name=Pt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class wy{constructor(e){this.parser=e,this.name=Pt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ty{constructor(e){this.parser=e,this.name=Pt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class Ay{constructor(e){this.name=Pt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}}class Ry{constructor(e){this.name=Pt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==oi.TRIANGLES&&c.mode!==oi.TRIANGLE_STRIP&&c.mode!==oi.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const g of u){const _=new mt,m=new z,f=new Fi,E=new z(1,1,1),y=new vr(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,M),l.SCALE&&E.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,_.compose(m,f,E));for(const M in l)if(M==="_COLOR_0"){const O=l[M];y.instanceColor=new hh(O.array,O.itemSize,O.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);jt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Of="glTF",ao=12,Ed={JSON:1313821514,BIN:5130562};class Cy{constructor(e){this.name=Pt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ao),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Of)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ao,r=new DataView(e,ao);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===Ed.JSON){const c=new Uint8Array(e,ao+o,a);this.content=n.decode(c)}else if(l===Ed.BIN){const c=ao+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class Py{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Pt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=dh[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=dh[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=wr[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(p)},a,c,gn,d)})})}}class Ly{constructor(){this.name=Pt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class Iy{constructor(){this.name=Pt.KHR_MESH_QUANTIZATION}}class Bf extends Ao{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,p=d*u,g=e*c,_=g-c,m=-2*p+3*d,f=p-d,E=1-m,y=f-d+u;for(let M=0;M!==a;M++){const O=o[_+M+a],I=o[_+M+l]*h,L=o[g+M+a],U=o[g+M]*h;r[M]=E*O+y*I+m*L+f*U}return r}}const Dy=new Fi;class Ny extends Bf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Dy.fromArray(r).normalize().toArray(r),r}}const oi={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},wd={9728:Pn,9729:pn,9984:Jd,9985:wa,9986:co,9987:Ui},Td={33071:Ni,33648:Oa,10497:Os},sc={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},dh={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},us={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Uy={CUBICSPLINE:void 0,LINEAR:xo,STEP:vo},rc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Fy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new Mt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:ts})),i.DefaultMaterial}function Cs(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Zi(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Oy(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function By(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function ky(i){let e;const t=i.extensions&&i.extensions[Pt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+oc(t.attributes):e=i.indices+":"+oc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+oc(i.targets[n]);return e}function oc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function fh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function zy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Hy=new mt;class Vy{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new hy,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Ff(this.options.manager):this.textureLoader=new Zx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new bo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Cs(r,a,s),Zi(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Pt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(go.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=sc[s.type],a=wr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new Rn(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=sc[s.type],c=wr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let y=t.cache.get(E);y||(_=new c(a,f*p,s.count*p/h),y=new Oh(_,p/h),t.cache.add(E,y)),m=new ks(y,l,d%p/h,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),m=new Rn(_,l,g);if(s.sparse!==void 0){const f=sc.SCALAR,E=wr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,O=new E(o[1],y,s.sparse.count*f),I=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new Rn(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let L=0,U=O.length;L<U;L++){const K=O[L];if(m.setX(K,I[L*l]),l>=2&&m.setY(K,I[L*l+1]),l>=3&&m.setZ(K,I[L*l+2]),l>=4&&m.setW(K,I[L*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=wd[d.magFilter]||pn,h.minFilter=wd[d.minFilter]||Ui,h.wrapS=Td[d.wrapS]||Os,h.wrapT=Td[d.wrapT]||Os,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new mn(_);m.needsUpdate=!0,d(m)}),t.load(go.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),Zi(u,o),u.userData.mimeType=o.mimeType||zy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Pt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Pt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Pt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new il,bi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new Va,bi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return Mt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Pt.KHR_MATERIALS_UNLIT]){const u=s[Pt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Xe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],gn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Gt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=Tn);const h=r.alphaMode||rc.OPAQUE;if(h===rc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===rc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==sn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Je(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==sn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==sn){const u=r.emissiveFactor;a.emissive=new Xe().setRGB(u[0],u[1],u[2],gn)}return r.emissiveTexture!==void 0&&o!==sn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Gt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),Zi(u,r),t.associations.set(u,{materials:e}),r.extensions&&Cs(s,u,r),u})}createUniqueName(e){const t=Ht.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Pt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return Ad(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=ky(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Pt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=Ad(new Qt,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?Fy(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=o[p];let f;const E=c[p];if(m.mode===oi.TRIANGLES||m.mode===oi.TRIANGLE_STRIP||m.mode===oi.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new Cx(_,E):new Ae(_,E),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===oi.TRIANGLE_STRIP?f.geometry=bd(f.geometry,cf):m.mode===oi.TRIANGLE_FAN&&(f.geometry=bd(f.geometry,rh));else if(m.mode===oi.LINES)f=new Df(_,E);else if(m.mode===oi.LINE_STRIP)f=new nl(_,E);else if(m.mode===oi.LINE_LOOP)f=new Ix(_,E);else if(m.mode===oi.POINTS)f=new Xa(_,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&By(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Zi(f,r),m.extensions&&Cs(s,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Cs(s,u[0],r),u[0];const d=new $t;r.extensions&&Cs(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new vn(ah.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new Ja(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Zi(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new mt;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Bh(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const p=s.channels[u],g=s.samplers[p.sampler],_=p.target,m=_.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,E=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",E)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let E=0,y=d.length;E<y;E++){const M=d[E],O=p[E],I=g[E],L=_[E],U=m[E];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const K=n._createAnimationTracks(M,O,I,L,U);if(K)for(let x=0;x<K.length;x++)f.push(K[x])}return new kx(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Hy)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new If:c.length>1?h=new $t:c.length===1?h=c[0]:h=new jt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),Zi(h,r),r.extensions&&Cs(n,h,r),r.matrix!==void 0){const u=new mt;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new $t;n.name&&(r.name=s.createUniqueName(n.name)),Zi(r,n),n.extensions&&Cs(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of s.associations)(d instanceof bi||d instanceof mn)&&u.set(d,p);return h.traverse(d=>{const p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];us[r.path]===us.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(us[r.path]){case us.weights:c=Dr;break;case us.rotation:c=Nr;break;case us.position:case us.scale:c=Ur;break;default:switch(n.itemSize){case 1:c=Dr;break;case 2:case 3:default:c=Ur;break}break}const h=s.interpolation!==void 0?Uy[s.interpolation]:xo,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+us[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=fh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Nr?Ny:Bf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Gy(i,e,t){const n=e.attributes,s=new Gn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new z(l[0],l[1],l[2]),new z(c[0],c[1],c[2])),a.normalized){const h=fh(wr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new z,l=new z;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=fh(wr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Bi;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function Ad(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=dh[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Dt.workingColorSpace!==gn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Dt.workingColorSpace}" not supported.`),Zi(i,e),Gy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Oy(i,e.targets,t):i})}class Wy extends qx{constructor(e){super(e),this.type=Wn}parse(e){const o=function(U,K){switch(U){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(K||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(K||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(K||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(K||""))}},u=function(U,K,x){K=K||1024;let G=U.pos,k=-1,H=0,ne="",q=String.fromCharCode.apply(null,new Uint16Array(U.subarray(G,G+128)));for(;0>(k=q.indexOf(`
`))&&H<K&&G<U.byteLength;)ne+=q,H+=q.length,G+=128,q+=String.fromCharCode.apply(null,new Uint16Array(U.subarray(G,G+128)));return-1<k?(U.pos+=H+k+1,ne+q.slice(0,k)):!1},d=function(U){const K=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,b=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,G=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,H={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let ne,q;for((U.pos>=U.byteLength||!(ne=u(U)))&&o(1,"no header found"),(q=ne.match(K))||o(3,"bad initial token"),H.valid|=1,H.programtype=q[1],H.string+=ne+`
`;ne=u(U),ne!==!1;){if(H.string+=ne+`
`,ne.charAt(0)==="#"){H.comments+=ne+`
`;continue}if((q=ne.match(x))&&(H.gamma=parseFloat(q[1])),(q=ne.match(b))&&(H.exposure=parseFloat(q[1])),(q=ne.match(G))&&(H.valid|=2,H.format=q[1]),(q=ne.match(k))&&(H.valid|=4,H.height=parseInt(q[1],10),H.width=parseInt(q[2],10)),H.valid&2&&H.valid&4)break}return H.valid&2||o(3,"missing format specifier"),H.valid&4||o(3,"missing image size specifier"),H},p=function(U,K,x){const b=K;if(b<8||b>32767||U[0]!==2||U[1]!==2||U[2]&128)return new Uint8Array(U);b!==(U[2]<<8|U[3])&&o(3,"wrong scanline width");const G=new Uint8Array(4*K*x);G.length||o(4,"unable to allocate buffer space");let k=0,H=0;const ne=4*b,q=new Uint8Array(4),de=new Uint8Array(ne);let Y=x;for(;Y>0&&H<U.byteLength;){H+4>U.byteLength&&o(1),q[0]=U[H++],q[1]=U[H++],q[2]=U[H++],q[3]=U[H++],(q[0]!=2||q[1]!=2||(q[2]<<8|q[3])!=b)&&o(3,"bad rgbe scanline format");let we=0,Te;for(;we<ne&&H<U.byteLength;){Te=U[H++];const st=Te>128;if(st&&(Te-=128),(Te===0||we+Te>ne)&&o(3,"bad scanline data"),st){const lt=U[H++];for(let ce=0;ce<Te;ce++)de[we++]=lt}else de.set(U.subarray(H,H+Te),we),we+=Te,H+=Te}const ke=b;for(let st=0;st<ke;st++){let lt=0;G[k]=de[st+lt],lt+=b,G[k+1]=de[st+lt],lt+=b,G[k+2]=de[st+lt],lt+=b,G[k+3]=de[st+lt],k+=4}Y--}return G},g=function(U,K,x,b){const G=U[K+3],k=Math.pow(2,G-128)/255;x[b+0]=U[K+0]*k,x[b+1]=U[K+1]*k,x[b+2]=U[K+2]*k,x[b+3]=1},_=function(U,K,x,b){const G=U[K+3],k=Math.pow(2,G-128)/255;x[b+0]=Jo.toHalfFloat(Math.min(U[K+0]*k,65504)),x[b+1]=Jo.toHalfFloat(Math.min(U[K+1]*k,65504)),x[b+2]=Jo.toHalfFloat(Math.min(U[K+2]*k,65504)),x[b+3]=Jo.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const f=d(m),E=f.width,y=f.height,M=p(m.subarray(m.pos),E,y);let O,I,L;switch(this.type){case $n:L=M.length/4;const U=new Float32Array(L*4);for(let x=0;x<L;x++)g(M,x*4,U,x*4);O=U,I=$n;break;case Wn:L=M.length/4;const K=new Uint16Array(L*4);for(let x=0;x<L;x++)_(M,x*4,K,x*4);O=K,I=Wn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:E,height:y,data:O,header:f.string,gamma:f.gamma,exposure:f.exposure,type:I}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){switch(o.type){case $n:case Wn:o.colorSpace=gn,o.minFilter=pn,o.magFilter=pn,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,s)}}const ac=new WeakMap;class Xy extends _s{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){const r=new bo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Gt,n).catch(n)}decodeDracoFile(e,t,n,s,r=gn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(ac.has(e)){const l=ac.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(s=l,new Promise((c,h)=>{s._callbacks[r]={resolve:c,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),ac.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Qt;e.index&&t.setIndex(new Rn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize,l=new Rn(o,a);r==="color"&&(this._assignVertexColorSpace(l,s.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Gt)return;const n=new Xe;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),Dt.toWorkingColorSpace(n,Gt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new bo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=qy.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function qy(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const p=t(u,d,new Int8Array(l),c),g=p.attributes.map(_=>_.array.buffer);p.index&&g.push(p.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:p},g)}catch(p){console.error(p),self.postMessage({type:"error",id:a.id,error:p.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,p;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,p=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,p=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const _={index:null,attributes:[]};for(const m in h){const f=self[u[m]];let E,y;if(c.useUniqueIDs)y=h[m],E=a.GetAttributeByUniqueId(d,y);else{if(y=a.GetAttributeId(d,o[h[m]]),y===-1)continue;E=a.GetAttribute(d,y)}const M=s(o,a,d,m,f,E);m==="color"&&(M.vertexColorSpace=c.vertexColorSpace),_.attributes.push(M)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,d)),o.destroy(d),_}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const p=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:p,itemSize:1}}function s(o,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,_=g*h.BYTES_PER_ELEMENT,m=r(o,h),f=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,u,m,_,f);const E=new h(o.HEAPF32.buffer,f,g).slice();return o._free(f),{name:c,array:E,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class Yy extends Er{constructor(){super();const e=new It;e.deleteAttribute("uv");const t=new Mt({side:An}),n=new Mt,s=new Hh(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Ae(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Ae(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Ae(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Ae(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Ae(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Ae(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Ae(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Ae(e,mr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new Ae(e,mr(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new Ae(e,mr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Ae(e,mr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Ae(e,mr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new Ae(e,mr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function mr(i){const e=new sn;return e.color.setScalar(i),e}const kf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Vr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const $y=new Ja(-1,1,1,-1,0,1);class jy extends Qt{constructor(){super(),this.setAttribute("position",new Ft([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Ft([0,2,0,0,2,0],2))}}const Ky=new jy;class Wh{constructor(e){this._mesh=new Ae(Ky,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,$y)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ph extends Vr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof on?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Mo.clone(e.uniforms),this.material=new on({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Wh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Rd extends Vr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class Zy extends Vr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Jy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Je);this._width=n.width,this._height=n.height,t=new hi(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Wn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ph(kf),this.copyPass.material.blending=es,this.clock=new Jx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Rd!==void 0&&(o instanceof Rd?n=!0:o instanceof Zy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Je);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Cd extends Vr{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Qy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Fr extends Vr{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Je(e.x,e.y):new Je(256,256),this.clearColor=new Xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new hi(r,o,{type:Wn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new hi(r,o,{type:Wn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new hi(r,o,{type:Wn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=Qy;this.highPassUniforms=Mo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new on({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Je(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1),new z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=kf;this.copyUniforms=Mo.clone(h.uniforms),this.blendMaterial=new on({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Di,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xe,this.oldClearAlpha=1,this.basic=new sn,this.fsQuad=new Wh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Je(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Fr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Fr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new on({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Je(.5,.5)},direction:{value:new Je(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new on({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Fr.BlurDirectionX=new Je(1,0);Fr.BlurDirectionY=new Je(0,1);const e1={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class t1 extends Vr{constructor(){super();const e=e1;this.uniforms=Mo.clone(e.uniforms),this.material=new Na({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Wh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Dt.getTransfer(this._outputColorSpace)===Wt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===qd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Yd?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===$d?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===wh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===jd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Kd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class wo extends Ae{constructor(){super(wo.Geometry,new sn({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new z,t=new z,n=new gd(16,16),s=new gd(16,16);let r=Ei;const o=wo.Geometry,a=new Na({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new Na({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new Ae(o,a),h=[],u=yr.Shader,d=new Na({name:u.name,uniforms:{map:{value:null},occlusionMap:{value:s},color:{value:new Xe(16777215)},scale:{value:new Je},screenPosition:{value:new z}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Di,transparent:!0,depthWrite:!1}),p=new Ae(o,d);this.addElement=function(E){h.push(E)};const g=new Je,_=new Je,m=new ly,f=new Ut;this.onBeforeRender=function(E,y,M){E.getCurrentViewport(f);const O=E.getRenderTarget(),I=O!==null?O.texture.type:Ei;r!==I&&(n.dispose(),s.dispose(),n.type=s.type=I,r=I);const L=f.w/f.z,U=f.z/2,K=f.w/2;let x=16/f.w;if(g.set(x*L,x),m.min.set(f.x,f.y),m.max.set(f.x+(f.z-16),f.y+(f.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(M.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(M.projectionMatrix),_.x=f.x+e.x*U+U-8,_.y=f.y+e.y*K+K-8,m.containsPoint(_))){E.copyFramebufferToTexture(n,_);let b=a.uniforms;b.scale.value=g,b.screenPosition.value=e,E.renderBufferDirect(M,null,o,a,c,null),E.copyFramebufferToTexture(s,_),b=l.uniforms,b.scale.value=g,b.screenPosition.value=e,E.renderBufferDirect(M,null,o,l,c,null);const G=-e.x*2,k=-e.y*2;for(let H=0,ne=h.length;H<ne;H++){const q=h[H],de=d.uniforms;de.color.value.copy(q.color),de.map.value=q.texture,de.screenPosition.value.x=e.x+G*q.distance,de.screenPosition.value.y=e.y+k*q.distance,x=q.size/f.w;const Y=f.w/f.z;de.scale.value.set(x*Y,x),d.uniformsNeedUpdate=!0,E.renderBufferDirect(M,null,o,d,p,null)}}},this.dispose=function(){a.dispose(),l.dispose(),d.dispose(),n.dispose(),s.dispose();for(let E=0,y=h.length;E<y;E++)h[E].texture.dispose()}}}class yr{constructor(e,t=1,n=0,s=new Xe(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=s}}yr.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};wo.Geometry=(function(){const i=new Qt,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new Oh(e,5);return i.setIndex([0,1,2,0,2,3]),i.setAttribute("position",new ks(t,3,0,!1)),i.setAttribute("uv",new ks(t,2,3,!1)),i})();const zf=[{id:"factory",label:"A new beginning",phase:"01 / Departure",title:"Extraordinary.<br>From the start.",copy:"A purpose-built platform. A payload full of possibility.",detail:"Tessera–1 / Mission preparation"},{id:"integration",label:"Payload integration",phase:"01 / Departure",title:"The next stop.<br>Somewhere above.",copy:"A research payload. A different environment. Preparing the systems that connect a question on Earth to an experiment in orbit.",detail:"Launch vehicle / Payload integration"},{id:"launch",label:"Liftoff",phase:"01 / Departure",title:"Leave Earth.<br>Keep the purpose.",copy:"The destination is microgravity. The purpose is to explore what different conditions could make possible for research on Earth.",detail:"Launch / Ascent"},{id:"separation",label:"Stage & fairing separation",phase:"01 / Departure",title:"Let go.<br>Go further.",copy:"The launch vehicle releases its payload. The next stage of the journey is research and manufacturing in orbit.",detail:"Stage separation / Fairing release"},{id:"orbit",label:"Orbital operations",phase:"02 / Discovery",title:"A factory.<br>Above it all.",copy:"Tessera–1 is being developed for research and manufacturing in microgravity. Study what changes. Test what can be made.",detail:"Tessera–1 / Orbital manufacturing"},{id:"bioreactor",label:"Inside the bioreactor",phase:"02 / Discovery",title:"Change the conditions.<br>Ask new questions.",copy:"Reduced settling and convection create different conditions for biological research. Controlled experiments compare the results with Earth.",detail:"Inside Tessera / Biological research"},{id:"protein",label:"Molecular discovery",phase:"02 / Discovery",title:"Look closer.<br>Learn what changes.",copy:"From protein structure to crystal growth: exploring processes relevant to medicine, with comparisons and further testing on Earth.",detail:"Molecular scale / Protein study"},{id:"medicine",label:"The research payload",phase:"02 / Discovery",title:"Bring the research<br>back to Earth.",copy:"An orbital experiment is one step. The work continues with sample analysis, comparison and further development on Earth.",detail:"Research payload / Return preparation"},{id:"payload",label:"Into Thor",phase:"03 / Return",title:"Precious cargo.<br>Purposeful return.",copy:"Thor XR–1 is being developed to bring research samples and materials back from orbit. The return is part of the experiment.",detail:"Thor XR–1 / Payload transfer"},{id:"reentry",label:"Hypersonic reentry",phase:"03 / Return",title:"Through the fire.<br>Back to Earth.",copy:"Returning through the atmosphere reconnects orbital research with the laboratories that can examine its results.",detail:"Thor XR–1 / Atmospheric reentry"},{id:"parachute",label:"Parachute descent",phase:"03 / Return",title:"A softer<br>arrival.",copy:"A controlled descent is part of the return sequence. The research payload remains at the centre of the mission.",detail:"Descent / Parachute deployment"},{id:"splashdown",label:"Splashdown",phase:"03 / Return",title:"Back on Earth.<br>Work still ahead.",copy:"Splashdown marks the handover from flight to recovery. The next destination is the team that will study the samples.",detail:"Ocean recovery / Splashdown"},{id:"recovery",label:"Air & sea recovery",phase:"03 / Return",title:"A coordinated<br>return.",copy:"Recovery connects the vehicle and its payload with transport, inspection and delivery to the research team.",detail:"Recovery / Air & sea operations"},{id:"warehouse",label:"Pharma logistics",phase:"04 / For life",title:"From orbit.<br>To the laboratory.",copy:"Recovered samples return to analysis and quality checks. Scientists compare the results and decide what to investigate next.",detail:"On Earth / Pharmaceutical development"},{id:"hospital",label:"For life on Earth",phase:"04 / For life",title:"Further out.<br>Closer to life.",copy:"Research in orbit serves an ambition on Earth: helping scientists understand disease and explore new ways to make medicines.",detail:"The destination / Life on Earth"}],n1=i=>Math.max(0,Math.min(1,i)),mh=i=>(i=n1(i),i*i*(3-2*i)),Ge=(i=0,e=0,t=0,n=1,s=0,r=0,o=0,a=1)=>[i,e,t,n,s,r,o,a],lc={factory:[[0,Ge(0,-3.2,0,1.3,0,-.2)],[.55,Ge(0,-3.2,1,1.3,0,-.2)],[1.2,Ge(0,-4,-3,.7,0,-.2,0,0)]],tessera:[[0,Ge(0,.1,0,7.2,.14,-.36)],[.45,Ge(0,.1,1,7.2,.14,-.24)],[1,Ge(0,3.3,0,.48,.1,-.2)],[1.65,Ge(0,3.3,0,.48,.1,-.2,0,0)],[2.95,Ge(0,3.3,0,.48,.1,-.2,0,0)],[3.2,Ge(0,3.2,0,.48,.1,-.2)],[3.65,Ge(.8,2,1,2.5,.2,-.4)],[4,Ge(0,.3,0,7.7,.18,-.4,.03)],[4.55,Ge(0,.2,1,8.5,.12,-.08)],[5,Ge(0,0,3,11,.1,0,0,0)]],rocket:[[.6,Ge(0,0,0,1,0,0,0,0)],[1,Ge(0,0,0,1,0,-.15)],[1.6,Ge(0,-.2,0,1,0,-.15)],[2,Ge(0,-.287,0,1.2,0,-.15,0)],[2.6,Ge(0,-.287,0,1.2,0,-.15,0)],[3,Ge(0,.3,0,1,0,-.2,-.28)],[3.6,Ge(-1,-1,-1,.9,0,-.2,-.5)],[4,Ge(-3,-6,-4,.6,0,-.2,-.7,0)]],earth:[[0,Ge(0,0,0,1,0,0,0,0)],[14,Ge(0,0,0,1,0,0,0,0)]],reactor:[[4.65,Ge(0,0,0,.3,0,0,0,0)],[5,Ge(0,.4,0,1.35,.06,-.12)],[5.5,Ge(0,.3,1,1.55,.05,.1)],[6,Ge(0,0,3,2,0,.1,0,0)]],protein:[[5.5,Ge(0,0,0,.1,0,0,0,0)],[6,Ge(0,.5,0,1.4,.1,-.2,Math.PI)],[6.5,Ge(0,.5,0,1.5,.2,.4,Math.PI)],[7,Ge(0,0,0,.15,.3,.8,Math.PI,0)]],vial:[[6.55,Ge(0,.2,0,2.2,0,0,0,0)],[7,Ge(0,.3,0,2.15,.05,-.4,-.04)],[7.6,Ge(0,1.4,0,1.6,.1,-.3,-.15)],[8,Ge(.2,1.2,.3,.45,0,-.3,-.2)],[8.55,Ge(.3,-.3,0,.3,0,-.3,-.2,0)],[12.65,Ge(0,-1,0,.8,0,-.3,0,0)],[13,Ge(0,-1.3,0,1.5,.05,-.3)],[14,Ge(3,-.6,0,1.4,.05,-.3)]],thor:[[7.6,Ge(0,-1.2,0,6.5,1.15,.1,.1,0)],[8,Ge(0,-.4,0,11.5,1.05,.12,.1)],[8.6,Ge(0,.3,0,11.7,.95,.18,.15)],[9,Ge(-.4,.6,0,12.5,1.12,-.08,.2)],[9.4,Ge(.3,.3,0,10,1.1,.28,.08)],[9.8,Ge(0,-.4,0,6,.72,.1,-.08)],[10,Ge(0,-1.1,0,4,.65,.1,.02)],[10.6,Ge(0,-1.2,0,4,.65,.1,-.04)],[11,Ge(0,-1.8,0,4.5,.6,.15,.01)],[11.4,Ge(0,-1.85,0,4.5,.55,.15,-.015)],[12,Ge(0,-.65,0,3.2,.7,.12,.03)],[12.6,Ge(0,-1.65,0,3.2,.7,.12,.03)],[13,Ge(-1,-2,-3,1.2,.7,.12,.03,0)]],hatch:[[7.7,Ge(.4,0,.1,1,1.05,.12,.1,0)],[8,Ge(.45,.95,.3,1.4,1.05,.12,-.6)],[8.6,Ge(.4,-.03,.35,1,1.05,.12,.15,0)]],chute:[[9.65,Ge(0,1.8,0,.05,0,0,0,0)],[10,Ge(0,2.7,0,1.15,0,0,.03)],[10.65,Ge(0,1.6,0,1.15,0,0,-.04)],[11.1,Ge(3,-1.2,0,.3,0,0,-1.3,0)]],ocean:[[10.7,Ge(0,-2.05,0,1,0,0,0,0)],[11,Ge(0,-2.05,0,1,0,0)],[12,Ge(0,-2.4,0,1,0,0)],[12.7,Ge(0,-2.4,0,1,0,0,0,0)]],recovery:[[11.35,Ge(4,0,-2,1,0,-.2,0,0)],[12,Ge(0,0,0,1.15,0,-.2)],[12.65,Ge(0,-.3,0,1.15,0,-.2)],[13,Ge(-3,-3,-4,.6,0,-.2,0,0)]],warehouse:[[0,Ge(0,0,0,1,0,0,0,0)],[14,Ge(0,0,0,1,0,0,0,0)]],hospital:[[0,Ge(0,0,0,1,0,0,0,0)],[14,Ge(0,0,0,1,0,0,0,0)]]};function ds(i,e){if(e<i[0][0]||e>i.at(-1)[0]){const l=[...e<i[0][0]?i[0][1]:i.at(-1)[1]];return l[7]=0,l}let t=0;for(;t<i.length-2&&e>i[t+1][0];)t++;const[n,s]=i[t],[r,o]=i[Math.min(t+1,i.length-1)],a=r===n?0:mh((e-n)/(r-n));return s.map((l,c)=>l+(o[c]-l)*a)}function i1(i){return mh((i-8.6)/.35)*(1-mh((i-9.45)/.45))}const ai="/astreia-preview/";function s1(i,e=6){if(!i||i.length<2*e+2)return i||[];let t=i;for(let n=0;n<2;n++){const s=t;t=s.map((r,o)=>{const a=Math.min(e,o,s.length-1-o);let l=0,c=0;for(let h=-a;h<=a;h++)l+=s[o+h][0],c+=s[o+h][1];return[l/(2*a+1),c/(2*a+1)]})}return t}const zn="#d7a35c",Ma="#C8622A",Sa="#B8B8B8",r1=Math.PI*2,o1=i=>Math.max(0,Math.min(1,i)),kt=(i,e,t)=>o1((i-e)/(t-e)),Us=i=>i*i*(3-2*i);function a1(i){return[Math.cos(i)*.88,Math.sin(i)*.88]}function l1(i,e=0,t=!1){return 1-.55*kt(i,.2,.5)+(t?0:.01*Math.sin(e*r1*.3))*kt(i,.2,.5)}function gh(i,e=0){const t=i.mobile?i.w<360?.55:.5:.42;return{x:i.w*(t+(.5-t)*Us(kt(e,.8,1))),y:i.top+i.height*.53+(i.mobile?Math.min(32,i.height*.15):0),r:Math.min(i.unit,i.w*.24)}}function c1(i,e,t,n){const s=Us(kt(t,0,.085)),r=Us(kt(t,.04,.2));return{x:i.x+(e.x-i.x)*r,y:i.y+(e.y-i.y)*r,r:i.r+(e.r*.78-i.r)*s,alpha:n===8?1:Us(kt(t,.095,.17)),dish:Us(kt(t,.12,.2))}}function Hf(i){const e=Us(kt(i,.5,.62)),t=Us(kt(i,.8,.9));return{travel:e*(1-t),copies:kt(i,.5,.515)*(1-kt(i,.88,.9)),guides:kt(i,.5,.515)*(1-kt(i,.88,.9)),delta:kt(i,.66,.68)*(1-kt(i,.84,.86)),marker:kt(i,.32,.34)*(1-kt(i,.76,.78)),vial:1-kt(i,.88,.9),narration:i<.15?-1:i<.5?0:i<.8?1:2,active:i>=.2&&i<.5?"ember":i>=.5&&i<.66?"copies":i>=.66&&i<.8?"delta":"none"}}const h1=["Seven thousand diseases have no treatment. Most affect too few people to run a trial.","But each patient's cells carry their disease. Those cells can fly.","One sample up. Two models back: one grown on Earth, one in orbit. The difference is the signal."];function u1(i,e,t,n=!1){return n?e:i+(e-i)*(1-Math.pow(.9,Math.max(0,t)*60))}const Un=i=>Math.max(0,Math.min(1,i)),We=(i,e,t)=>i+(e-i)*t,d1=i=>(i=Un(i),i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2),qe=(i,e,t)=>d1((i-e)/(t-e)),xi=(i,e,t,n,s)=>qe(i,e,t)*(1-qe(i,n,s)),Ps=[7,14,20],qa=[{id:"inside-tessera",label:"Inside Tessera",title:"A question arrives in orbit.",captions:["In orbit, a sealed cassette arrives at Tessera.","Patient cells. A candidate molecule. A different environment.","Here is what happens next."]},{id:"gravity",label:"Change the conditions",title:"On Earth, cells settle.",captions:["On Earth, cells settle. Many cultures grow as a single layer.","Many medicines are first tested there. The body is not a layer.","In microgravity, less settling gives cells different ways to meet."]},{id:"tissue",label:"Tissue in three dimensions",title:"See disease in another dimension.",captions:["In orbit, some cells can assemble in 3D without a scaffold.","A tumor is not flat. A liver is not flat. Now the model is not either.","A different model. New questions to ask."]},{id:"patient",label:"Start with the patient",title:"Start with the person who needs it.",captions:h1},{id:"treatment",label:"Test candidate medicines",title:"Find the leads worth taking further.",captions:["Five candidate doses. An untreated control. Four repeats.","Most wells show no signal in this illustrative screen.","A signal is a lead to test again. It is not a treatment yet."]},{id:"data",label:"Learn from every experiment",title:"Every orbit teaches the model.",captions:["Every well can come home twice: as a sample, and as data.","Pair orbital results with the same experiment on Earth.","A new experimental condition. A better-informed next question."]},{id:"formulation",label:"Develop the formulation",title:"Improve how medicines are made.",captions:["Some protein medicines are difficult to formulate for injection.","More uniform crystals could help make easier-to-inject formulations.","The partner brings the molecule. Astreia provides the environment."]},{id:"inside-return",label:"What comes back",title:"What comes back.",captions:["A sample. A dataset. A lead to investigate on Earth.","Thor is designed to bring it home. The loop starts again.","Millions of people. Thousands of diseases. More room to find answers."]}].map((i,e)=>({...i,copy:i.captions[0],phase:"",detail:"Illustrative research · Platform in development"}));function Vf(i){return{pull:qe(i,0,.3),load:qe(i,.08,.3),insert:qe(i,.3,.4),seal:qe(i,.41,.46),hatch:qe(i,.2,.28)*(1-qe(i,.41,.46)),depart:qe(i,.49,.7),skin:qe(i,.72,.86),outline:1-qe(i,.76,.86),reveal:qe(i,.86,1),overlay:1-qe(i,.97,1),preview:i>=.64}}const f1=i=>Un(i);function Gf(i,e,t=!1){e=Un(e);const n=t?[.48,.72,.7,.7,.72,.78,.9,.46][i]:f1(e);return{scene:i,p:e,pose:n,caption:i===7&&n>=.6?2:e<.5?0:e<.8?1:2,title:t?1:qe(e,.015,.05)*(1-qe(e,.985,1)),captionOpacity:t?1:qe(e,.015,.05)}}function Pd(i,e,t=80,n=null){const s=i<=e,r=Math.max(t+28,e*.16),o=Math.min(n==null?e*(s?.73:.78):n-44,e-100),a=Math.max(100,o-r);return{w:i,h:e,mobile:s,top:r,bottom:o,height:a,cx:i/2,cy:r+a*.49,unit:Math.min(i*(s?.34:.24),a*.42),gutter:i*(s?.06:.038)}}function cc(i,e=28){const t=i*2.399963,n=Math.sqrt((i+.5)/e);return[Math.cos(t)*n,Math.sin(t)*n]}function hc(i,e,t=0){const n=Math.min(e.w*(e.mobile?.135:.108),e.height*.24),s=e.height*.205;return{x:e.cx+(i%6-2.5)*n,y:e.cy+(Math.floor(i/6)-1.5)*s-t*e.height*.16,r:Math.min(n*.33,s*.36)}}function p1(i){return i=Un(i),{construction:i<=.8?Math.min(i,.76):.76*(1-qe(i,.8,.9)),retract:qe(i,.8,.9),protein:i>=1?1:Un((i-.8)/.2)}}function m1(i){const e=Math.min(18,i.w*.025),t=i.w-i.gutter-e,n=Math.max(24,Math.min(64,i.w*.045)),s=Math.min(180,(i.w-2*i.gutter-4*e-n)/2),r=Math.max(18,Math.min(30,i.height*.18)),o=i.bottom-r/2-10,a=o-r/2-Math.max(8,Math.min(18,i.height*.06));return{x1:i.cx-(s+n)/2,x2:i.cx+(s+n)/2,width:s,height:r,y:o,busY:a,edge:t,railY:i.top+26,labelY:i.top+14,font:i.mobile?10:11}}function g1(i){const e={minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0};for(const t of i)for(const n of[...t.paths,t.dots])for(const[s,r]of n)e.minX=Math.min(e.minX,s),e.maxX=Math.max(e.maxX,s),e.minY=Math.min(e.minY,r),e.maxY=Math.max(e.maxY,r);return e}function Ld(i,e,t,n,s){const r=Math.min(16,i.height*.08),o=i.gutter+r,a=i.w-i.gutter-r,l=i.top+r,c=i.bottom-r,h=Math.min(1,(a-o)/((e.maxX-e.minX)*i.unit),(c-l)/((e.maxY-e.minY)*i.unit)),u=Math.max(0,s*h),d=t-(e.minX+e.maxX)*u/2,p=n-(e.minY+e.maxY)*u/2;return{x:Math.max(o-e.minX*u,Math.min(a-e.maxX*u,d)),y:Math.max(l-e.minY*u,Math.min(c-e.maxY*u,p)),r:u}}function Id(i,e=!1){const t=Un((i-.72)/.28),n=.28*(e?220:280)/400;return 8.5+.18*t*t*(3-2*t)+n*(t*t*t-t*t)}function _1(i,e,t=1,n=globalThis.devicePixelRatio||1){return Math.min(n,3,Math.sqrt(8e6/Math.max(1,i*e)))*t}const v1=i=>Math.max(0,Math.min(1,i)),ji=i=>{const e=v1(i);return e*e*e*(e*(e*6-15)+10)},si=(i,e,t)=>i+(e-i)*t;function x1(i,e,t){const n=e<=t,s=ji((i-11.25)/.63),r=ji((i-11.8)/.35),o=ji((i-11.91)/.22),a=ji((i-12.13)/.27),l=ji((i-12.43)/.23),c=Math.min(e*(n?.93:.76),t*.99)*si(.38,1,s),h={x:e*si(1.22,.53,r),y:t*si(.46,.7,s),width:c,height:c*.334,bank:si(-.12,.015,s),alpha:1},[u,d]=y1(h,.522,.63),p={x:u,y:d},g=si(Math.min(e*(n?.84:.55),t*1.05)*.38,c*.175,a),_={x:si(e*.43,p.x,a),y:si(t*(.635-.15*o),p.y-g*468/1800*.29,a),width:g,height:g*468/1800,bank:si(.045,h.bank-Math.PI/90,a)},m=Math.min(e*(n?.58:.34),t*.65)*si(.36,1,s),f={x:si(-e*.24,_.x+m*.236,s)+e*.7*l,y:t*(si(.18,n?.36:.28,s)-l*.2),width:m,height:m*910/2400,bank:si(-.11,.015,s)+l*.1,alpha:1};return{arrival:s,lift:o,land:a,depart:l,barge:h,helicopter:f,thor:_,deck:p,cable:ji((i-11.69)/.2)*(1-ji((i-12.39)/.06)),water:1-ji((i-11.91)/.11),exit:ji((i-12.5)/.22)}}function y1(i,e,t){const n=(e-.5)*i.width,s=(t-.5)*i.height,r=Math.cos(i.bank),o=Math.sin(i.bank);return[i.x+n*r-s*o,i.y+n*o+s*r]}const M1=i=>Math.max(0,Math.min(1,i)),uc=i=>{const e=M1(i);return e*e*e*(e*(e*6-15)+10)},S1=(i,e,t)=>i+(e-i)*t,Or=(i,e,t)=>[i*Math.cos(t)-e*Math.sin(t),i*Math.sin(t)+e*Math.cos(t)],Dd=[.729,.702],Wf=1082/1453,_h=.52;function To(i){const e=Or((Dd[0]-.5)*i.width,(Dd[1]-.5)*i.height,i.bank);return[i.x+e[0],i.y+e[1]]}function b1(i){const e=Or(-i.width*.5,0,i.bank);return[i.x+e[0],i.y+e[1]]}function Xf(i,e,t=.5){const n=i<=e,s=!n&&e<500,r=-.015+.03*(t-.5),o={x:0,y:0,width:1,height:Wf,bank:r},a=To(o),l=.48,c=r+_h,h=Or(l/2,0,c),u={x:a[0]+h[0],y:a[1]+h[1],width:l,height:l*468/1800,bank:c},d=[];for(const M of[o,u])for(const O of[-.5,.5])for(const I of[-.5,.5]){const L=Or(O*M.width,I*M.height,M.bank);d.push([M.x+L[0],M.y+L[1]])}const p=Math.min(...d.map(M=>M[0])),g=Math.max(...d.map(M=>M[0])),_=Math.min(...d.map(M=>M[1])),m=Math.max(...d.map(M=>M[1])),f=Math.min(i*(n?.94:.86)/(g-p),e*(s?.5:.65)/(m-_))*(.96+.04*t),E=i*.5-(p+g)*f/2,y=e*(s?.42:.47)-(_+m)*f/2;for(const M of[o,u])M.x=E+M.x*f,M.y=y+M.y*f,M.width*=f,M.height*=f;return{tessera:o,thor:u,port:To(o)}}function E1(i,e,t,n){const s=Xf(e,t,.5),r=uc((i-8.22)/.22),o=uc((i-8.34)/.34),a=uc((i-8.22)/.46),l={};for(const p of["x","y","width","height","bank"])l[p]=S1(s.thor[p],n[p],a);const c={...s.tessera,x:0,y:0,width:s.tessera.width*(1-.68*a),height:s.tessera.height*(1-.68*a),bank:s.tessera.bank+.12*o},h=b1(l),u=To(c),d=Or(e*.16*r,0,s.thor.bank);return c.x=h[0]-u[0]-d[0]-e*1.3*o,c.y=h[1]-u[1]-d[1]-t*.2*o,{thor:l,tessera:c,port:To(c),separation:r,travel:o,follow:a}}function Ua(i,e,t=0){const n=Xf(i,e,1).tessera,s=1+13*t,r=[n.x+(.483-.5)*n.width,n.y+(.51-.5)*n.height];return{...n,width:n.width*s,height:n.height*s,x:n.x+(n.x-r[0])*(s-1),y:n.y+(n.y-r[1])*(s-1)}}function w1(i){const e=(t,n)=>{const s=Or((t-.5)*i.width,(n-.5)*i.height,i.bank);return[i.x+s[0],i.y+s[1]]};return{dock:To(i),slot:e(.483,.51),elevator:e(.65,.65)}}const vh=i=>Math.max(0,Math.min(1,i)),fn=i=>{const e=vh(i);return vh(e*e*e*(e*(e*6-15)+10))},fo=(i,e,t)=>i+(e-i)*t,ba=[[7.35,.5,.53,.82,-.1],[7.95,.5,.5,1,-.1],[8.4,.5,.48,1,-.15],[8.76,.48,.43,.92,-.48],[8.96,.62,.34,.47,-.94],[9.17,.51,.43,.7,-.25],[9.38,.37,.48,1.04,.42],[9.6,.52,.47,.69,.94],[9.84,.53,.49,.66,.7],[10.04,.51,.55,.63,.4],[10.3,.49,.62,.61,.22],[10.6,.49,.63,.62,.16],[10.98,.5,.64,.66,.1],[11.07,.5,.651,.66,.035],[11.25,.5,.644,.66,.055],[11.95,.5,.644,.66,.055]];function T1(i,e=!1){let t=0;for(;t<ba.length-2&&i>ba[t+1][0];)t++;const n=ba[t],s=ba[t+1],r=fn((i-n[0])/(s[0]-n[0])),o=n.map((c,h)=>fo(c,s[h],r)),a=fn((i-10.98)/.09),l=fn((i-11.08)/.36);return{progress:vh((i-8.3)/1.3),x:e?.5+(o[1]-.5)*.3:o[1],y:o[2],size:o[3],bank:o[4],opacity:fn((i-7.35)/.15)*(1-fn((i-12.72)/.12)),hull:1,bay:fn((i-7.5)/.18)*(1-fn((i-8.06)/.16)),cargo:fn((i-7.5)/.1)*(1-fn((i-7.98)/.1)),ocean:fn((i-9.48)/.55),canopy:fn((i-9.99)/.08)*(1-fn((i-11.36)/.16)),inflation:fn((i-10.04)/.38),contact:a,collapse:l,impact:fn((i-10.98)/.045)*(1-fn((i-11.1)/.3)),recovery:fn((i-11.25)/.65),near:fn((i-9.35)/1.6)}}function A1(i,e,t,n=!1){const s=e<=t,r=T1(i,s),o=x1(i,e,t),a=fn((i-11.25)/.55),l=fo(Math.min(e*(s?.84:.55),t*1.05)*r.size,o.thor.width,a),c=fn((i-11.08)/.15)*(1-fn((i-11.91)/.12)),h=n?0:Math.sin((i-11.08)*18)*t*.003*c;return{x:fo(e*r.x,o.thor.x,a),y:fo(t*r.y,o.thor.y,a)+h,width:l,height:l*468/1800,bank:fo(r.bank,o.thor.bank,a)}}function dc(i,e,t,n=!1){const s=A1(i,e,t,n);return i>=7.35&&i<8.68?E1(i,e,t,s).thor:s}const R1=i=>Math.max(0,Math.min(1,i)),qf=i=>(i=R1(i),i*i*(3-2*i)),gr=(i,e,t)=>i+(e-i)*t;function C1(i,e){const t=[];for(let n=0;n<3;n++){const s=Math.floor(e/3)+(n<e%3?1:0),r=i[n].length-1;for(let o=0;o<s;o++)t.push({rail:n,start:Math.floor(o*r/s),end:Math.floor((o+1)*r/s)})}return t}function P1(i,e,t,n,s,r,o,a,l){const{start:c,end:h}=n,u=.12*a/Math.max(1,l-1),d=[];for(let p=c;p<=h;p++){const g=(p-c)/(h-c),_=qf((o-u-g*.2)/.68),m=s.x+gr(e[p][0],t[p][0],r)*s.r,f=s.y+gr(e[p][1],t[p][1],r)*s.r;d.push([gr(gr(i[0][0],i[1][0],g),m,_),gr(gr(i[0][1],i[1][1],g),f,_)])}return d}const L1=(i,e,t)=>qf((i-.48-.24*e/Math.max(1,t-1))/.28),fc=(i,e,t)=>i+(e-i)*t,I1=Math.PI*2;function D1(i,e){return e.map(t=>{const n=Math.atan2(t.y-i.y,t.x-i.x),[s,r]=a1(n,i.yaw);return[i.surface?i.surface(n):[i.x+s*i.r,i.y+r*i.r],[t.x-Math.cos(n)*t.r*1.08,t.y-Math.sin(n)*t.r*1.08]]})}function N1(){let i=null,e=null,t=!1;const n={ember:0,copies:0,delta:0,neutral:1};return{reset(){i=null,e=null,t=!1},draw(s,r,o,a,l,c){const{path:h,dot:u,text:d,aggregate:p}=c,g=Hf(o),_=gh(r,o),m=i==null?0:Math.max(0,Math.min(.1,a-i));i=a;for(const b of Object.keys(n)){const G=b==="neutral"?g.active==="none"?1:0:g.active===b?1:0;l||m===0?n[b]=G:n[b]+=Math.sign(G-n[b])*Math.min(Math.abs(G-n[b]),m/.4)}const f=b=>.35+.65*Math.max(n.neutral,n[b]),E=p(s,{..._,seconds:a,reduced:l,disease:o,emberAlpha:f("ember"),neutralAlpha:.35+.65*n.neutral,halo:g.active==="ember"?n.ember*.6:0}),y=r.gutter+18,M=r.top+8,O=g.vial;if(O>0){const b=[[y-9,M+4],[y-9,M+31]];for(let H=0;H<=12;H++){const ne=Math.PI-H*Math.PI/12;b.push([y+Math.cos(ne)*9,M+31+Math.sin(ne)*9])}b.push([y+9,M+4],[y-9,M+4]),h(b,zn,O,kt(o,.02,.055),.85),h([[y-11,M],[y+11,M]],zn,O,kt(o,.055,.065),.85),h([[y-11,M+4],[y+11,M+4]],zn,O,kt(o,.065,.075),.85),h([[y-8,M+17],[y+8,M+17]],zn,O,kt(o,.075,.085),.75);for(let H=0;H<24*kt(o,.085,.1);H++)u(y+Math.sin(H*2.399)*6,M+19+H*.618%1*15,.6,zn,O*.7);["PATIENT-DERIVED","RARE DISEASE","n = 1"].forEach((H,ne)=>d(H,r.gutter+4,M+57+ne*15,zn,O*kt(o,.1+ne*.03,.12+ne*.03),"left",10));const G=E.surface(-2.05),k=kt(o,.08,.1)*O;h([[y+11,M],[G[0],Math.min(M,G[1]-24)],G],zn,.55*k,1,.75),k>0&&u(...G,1.5,zn,k)}const I=g.marker>0;if(I&&!t&&(e=a),I||(e=null),t=I,I){const b=E.surface(-2.35),G=r.mobile?r.w*.66:E.x-E.r*1.08-24,k=r.mobile?Math.max(r.top+14,E.y-E.r*1.08-24):b[1],H=l?10:Math.max(0,a-e),ne=Math.min(kt(o,.32,.36),H/.35),q=.85*g.marker,de=r.mobile?[G,k+7]:[G+8,k];h(r.mobile?[b,[b[0],k+7],de]:[b,de],Ma,q,Math.min(1,ne*2),.75),u(...b,1.5,Ma,q),h(r.mobile?[[G-8,k+7],[G+8,k+7]]:[[G+8,k-5],[G+8,k+5]],Ma,q,kt(ne,.5,1),.75);const Y=l?14:Math.min(14,Math.floor(Math.max(0,H-.35)*40),Math.floor(kt(o,.34,.39)*14));s.save(),s.letterSpacing="0.12em",d("DISEASE MARKER".slice(0,Y),G,r.mobile?k-5:k-9,Ma,q,r.mobile?"center":"right",r.mobile?11:12),s.restore()}const L=Math.max(_.r*.65,_.r*.22+46),U=r.mobile?Math.min(r.w*.82,r.w-r.gutter-46):r.w*.78,K=[{x:U,y:_.y-L,r:_.r*.22},{x:U,y:_.y+L,r:_.r*.22}],x=D1(E,K);if(g.guides>0&&x.forEach((b,G)=>h(b,G?zn:Sa,g.guides*.5,1,.75)),g.copies>0&&K.forEach((b,G)=>{const k=g.travel,H=fc(_.x,b.x,k),ne=fc(_.y,b.y,k),q=_.r*fc(1,.22,k),de=g.copies*f("copies");s.save(),s.shadowColor=G?zn:Sa,s.shadowBlur=g.active==="copies"?8*n.copies:0,p(s,{x:H,y:ne,r:q,seconds:a,reduced:l,ink:G?zn:Sa,disease:G?o:0,moving:!!G,alpha:de,halo:0,groupGlow:g.active==="copies"?n.copies:0}),s.restore();const Y=kt(o,G?.64:.62,G?.66:.64)*(1-kt(o,.8,.84));d(G?"ORBIT SAMPLE":"EARTH CONTROL",b.x,b.y+b.r*1.15+17,G?zn:Sa,Y,"center",r.mobile?9:11)}),g.delta>0){const b=o>=.7&&o<=.8?.2:.1,G=l?1:1+b*Math.sin(a*I1*.5),k=U,H=_.y+7;s.save(),s.translate(k,H),s.scale(G,G),s.shadowColor=zn,s.shadowBlur=g.active==="delta"?8:0,d("Δ",0,0,zn,g.delta*(g.active==="delta"?.6:f("delta")),"center",24),s.shadowBlur=0,d("Δ",0,0,zn,g.delta*f("delta"),"center",24),s.restore()}return g}}}function U1(){let i=null,e=!1,t=!0,n=null,s=1453,r=1082;function o(){return i||(i=fetch(ai+"story-2d/inside-tessera/station-frontal.json").then(l=>{if(!l.ok)throw Error("Station contour load");return l.json()}).then(l=>{if(!t)return;const c=new Path2D;for(const h of l.paths)if(!(h.length<2)){c.moveTo(...h[0]);for(let u=1;u<h.length;u++)c.lineTo(...h[u])}s=l.width,r=l.height,n=c,e=!0}).catch(()=>{}),i)}function a(l,c,h=1){if(!e||h<=0)return;const u=c.width/s;l.save(),l.globalAlpha=h*.85,l.strokeStyle="#d7a35c",l.translate(c.x,c.y),l.rotate(c.bank),l.scale(u,c.height/r),l.translate(-s/2,-r/2),l.lineWidth=.9/u,l.lineJoin="round",l.lineCap="round",l.stroke(n),l.restore()}return{prepare:o,draw:a,get ready(){return e},destroy(){t=!1,e=!1,n=null}}}function Nd(i,e,t,n,s){const r=Math.max(0,Math.min(1,s));if(r===1)return{...n};const o=(a,l)=>a+(l-a)*r;return{x:o(i[0]+Math.cos(t)*e/2,n.x),y:o(i[1]+Math.sin(t)*e/2,n.y),width:o(e,n.width),height:o(e*468/1800,n.height),bank:o(t,n.bank)}}function F1(i){const e=(t,n)=>[i.x+t*Math.cos(i.bank)-n*Math.sin(i.bank),i.y+t*Math.sin(i.bank)+n*Math.cos(i.bank)];return{center:e(i.width*.123,-i.height*.07),approach:e(i.width*.123,-i.height*.07-i.width*.23)}}function O1(){const i=new Image;i.decoding="async";const e=document.createElement("canvas"),t=document.createElement("canvas"),n=e.getContext("2d",{willReadFrequently:!0}),s=t.getContext("2d");let r=null,o=!1,a=!1,l=!0,c="";function h(){return r||(i.src=ai+"story-2d/thor-illustrated/thor.webp",r=i.decode().then(()=>{if(!l)return;if(!n||!s){a=!0;return}const p=900,g=Math.round(p*i.naturalHeight/i.naturalWidth);e.width=t.width=p,e.height=t.height=g,n.drawImage(i,0,0,p,g);const _=n.getImageData(0,0,p,g),m=_.data.slice(),f=_.data,E=y=>(m[y]*.2126+m[y+1]*.7152+m[y+2]*.0722)*m[y+3]/255;for(let y=0;y<g;y++)for(let M=0;M<p;M++){const O=(y*p+M)*4,I=(y*p+Math.max(0,M-1))*4,L=(y*p+Math.min(p-1,M+1))*4,U=(Math.max(0,y-1)*p+M)*4,K=(Math.min(g-1,y+1)*p+M)*4,x=Math.max(Math.abs(m[I+3]-m[L+3]),Math.abs(m[U+3]-m[K+3])),b=Math.hypot(E(I)-E(L),E(U)-E(K));f[O]=219,f[O+1]=184,f[O+2]=126,f[O+3]=Math.min(210,Math.max(x*.85,(b-12)*2))}n.putImageData(_,0,0),o=!0}).catch(()=>{a=!0}),r)}function u(p,g,{skin:_,outline:m,overlay:f},E=!1){if(!o||f<=0||_<=0&&m<=0)return;const y=t.width,M=t.height,O=`${_}:${E}`;if(_>0&&c!==O){if(s.clearRect(0,0,y,M),s.globalCompositeOperation="source-over",s.globalAlpha=1,s.drawImage(i,0,0,y,M),_<1){const I=y*.18,L=-I+(y+2*I)*_;s.globalCompositeOperation="destination-in";const U=s.createLinearGradient(L-I,0,L+I,0);if(U.addColorStop(0,"#fff"),U.addColorStop(1,"#fff0"),s.fillStyle=U,s.fillRect(0,0,y,M),!E&&_>0){s.globalCompositeOperation="source-atop";const K=s.createLinearGradient(L-I,0,L+I,0);K.addColorStop(0,"#edc99100"),K.addColorStop(.4,"#edc99100"),K.addColorStop(.58,"#f3d7a34d"),K.addColorStop(1,"#edc99100"),s.fillStyle=K,s.fillRect(0,0,y,M)}}s.globalCompositeOperation="source-over",c=O}p.save(),p.translate(g.x,g.y),p.rotate(g.bank),m>0&&(p.globalAlpha=m*f,p.drawImage(e,-g.width/2,-g.height/2,g.width,g.height)),_>0&&(p.globalAlpha=f,p.drawImage(t,-g.width/2,-g.height/2,g.width,g.height)),p.restore()}function d(p,g,_){if(!o||_<=0)return;const m=.51,f=.264,E=.227,y=.31,M=(m-.5)*g.width,O=(f-.5)*g.height,I=E*g.width,L=y*g.height;p.save(),p.translate(g.x,g.y),p.rotate(g.bank),p.globalAlpha=_,p.strokeStyle="#d7a35c",p.lineWidth=.8;const U=L*.75*_,K=L*(1-.82*_);p.beginPath(),p.moveTo(M,O),p.lineTo(M,O-U),p.moveTo(M+I,O),p.lineTo(M+I,O-U),p.stroke(),p.globalAlpha=_,p.drawImage(e,m*e.width,f*e.height,E*e.width,y*e.height,M,O-U,I,K),p.restore()}return{prepare:h,draw:u,drawHatch:d,get ready(){return o},get settled(){return o||a},destroy(){l=!1,o=!1,e.width=t.width=0,i.removeAttribute("src")}}}const pc=i=>Math.max(0,Math.min(1,i)),Yf=new WeakMap,Ud=(i,e,t)=>{if(!i)return;const n=t||e>=1?"none":`blur(${((1-e)*6).toFixed(2)}px)`;i.style.filter!==n&&(i.style.filter=n)};function B1(i,e,t,n){const s=t.replace(/<br\s*\/?>/g," "),r=[];i.replaceChildren(),i.setAttribute("aria-label",s);for(const o of s.split(/(\s+)/)){if(!o)continue;const a=document.createElement("span");if(a.setAttribute("aria-hidden","true"),!o.trim())a.className="reveal-space",a.textContent=o,r.push(a);else{a.className="reveal-token";for(const l of o){const c=document.createElement("span");c.className="reveal-word",c.textContent=l,a.append(c),r.push(c)}}i.append(a)}return e.textContent=n,Yf.set(r,i),r}function k1(i,e,t,[n,s],r=1,o=!1){Ud(Yf.get(i),pc((t-n)/(s-n+.14)),o),i.forEach((c,h)=>{const u=h/Math.max(1,i.length-1),d=pc((t-n-u*(s-n))/.14),p=String(d*r),g=`translateY(${o?0:(1-d)*9}px)`;c.style.opacity!==p&&(c.style.opacity=p),c.style.transform!==g&&(c.style.transform=g)});const a=pc((t-s-.02)/.15),l=String(a*r);Ud(e,a,o),e.style.opacity!==l&&(e.style.opacity=l)}const ct="#d7a35c",hn="#a7afad",Pi="#68c5b7",mc="#f2632a",z1=[null,"cell","organoid","organoid","organoid","protein","crystal",null],H1=["Thor XR-1 docked. Cassette elevator. Research carousel. Sealed payload cassette. Conceptual architecture.","Earth: 1 g. Tessera: microgravity. Sedimentation. Cell–cell contact.","Earth 3D culture. Orbit 3D culture. Illustrative three-dimensional cell model.","Patient-derived sample. Rare disease model. One donor. Illustrative disease marker.","Control and doses A to E. Four repeats. B2, C3 and D3 show illustrative signals to re-test.","Imaging. Morphology. Viability. Dose–response. Paired Earth control. Partner dataset. Next cassette. Conceptual data flow.","Nucleation. Growth. Mature. Earth crystals. Orbital crystals. Illustrative crystal growth. Return case.","Sealed return case. Research carousel. Cell therapy, protein crystals, patient model: example payloads. Thor undocking."];function V1(i){var e;const t=document.createElement("section");t.className="inside-tessera",t.hidden=!0,t.setAttribute("aria-label","Inside Tessera"),t.innerHTML=`<canvas class="inside-drawing" aria-hidden="true"></canvas><img class="inside-fallback" alt="" hidden>
 <div class="inside-copy story-copy"><div class="inside-heading"><h2></h2></div>
 <div class="inside-narration story-description"><p></p><p aria-hidden="true"></p><ol hidden></ol></div></div>
 <p class="inside-technical"></p>`,i.append(t);const n=t.querySelector("canvas"),s=n.getContext("2d"),r=t.querySelector("img"),o=t.querySelector("h2"),a=t.querySelector(".inside-heading"),l=t.querySelector(".inside-narration"),c=[...l.querySelectorAll("p")],h=l.querySelector("ol"),u=t.querySelector(".inside-technical");let d=[],p=[],g=null,_=null,m=null,f=!1,E=!0,y=null,M="",O="",I="",L=-1,U=0,K=0,x=!1;const b=N1();let G=null,k=0,H=null;const ne=O1(),q=U1();let de=!1;const Y=new Map;let we=!1;const Te=F=>{F.preventDefault(),we=!0,O=""},ke=()=>{we=!1,O=""};n.addEventListener("contextlost",Te),n.addEventListener("contextrestored",ke);const st=new Image;st.decoding="async",st.src=ai+"story-2d/bio/capsule.webp";let lt=!1;st.decode().then(()=>{lt=!0,O=""}).catch(()=>{});let ce=null,_e=null,Fe=null,Ce=0;const $e=document.createElement("canvas"),Ye=$e.getContext("2d");function ht(){(ce||_e)&&(Ce++,ce=null,_e=null,$e.width=0,$e.height=0)}function At(){if(_e||x)return;const F=y.mobile,R=++Ce;Fe=F;const X=new Image;X.decoding="async",X.src=F?ai+"story-2d/inside-tessera/pill-roll-mobile.webp":ai+"story-2d/inside-tessera/pill-roll.webp",_e=X.decode().then(()=>{E&&R===Ce&&(ce=X,$e.width=X.naturalWidth/3,$e.height=X.naturalHeight/3,O="")}).catch(()=>{})}function gt(F,R,X,j){if(ce&&!x&&Ye){const v=ce.naturalWidth/3,w=ce.naturalHeight/3,T=4+4*Math.sin(K*Math.PI/18),N=Math.floor(T),A=Math.min(8,N+1);Ye.clearRect(0,0,v,w),Ye.globalCompositeOperation="lighter";const W=(Q,ee)=>{Ye.globalAlpha=ee,Ye.drawImage(ce,Q%3*v,Math.floor(Q/3)*w,v,w,0,0,v,w)};W(N,1-(T-N)),W(A,T-N),s.drawImage($e,F-X/2,R-j/2,X,j)}else s.drawImage(st,F-X/2,R-j/2,X,j)}function V(){return ne.prepare(),q.prepare(),m||(m=Promise.all([fetch(ai+"story-2d/inside-tessera/drawings.json").then(F=>{if(!F.ok)throw Error("Drawing load");return F.json()}),fetch(ai+"story-2d/inside-tessera/pill-contour.json").then(F=>F.json()).catch(()=>({points:[]}))]).then(([F,R])=>{E&&(_=F,g=g1(F.protein.frames),p=s1(R.points),O="")}).catch(()=>{f=!0,O=""}),m)}const Kt=t.querySelector(".inside-copy");let ut=!0,dt="",et=0,vt=0;function nt(){var F;const R=i.clientWidth,X=i.clientHeight,j=`${R}:${X<=500}:${x}`;if(j!==dt){const w=Kt.cloneNode(!1);w.classList.add("inside-measure"),w.setAttribute("aria-hidden","true"),w.style.cssText="visibility:hidden;pointer-events:none;min-height:0",t.append(w),et=0,vt=0;for(const T of qa){w.innerHTML='<div class="inside-heading"><h2></h2></div><div class="inside-narration story-description"></div>',w.querySelector("h2").textContent=T.title;const N=w.querySelector(".inside-narration");N.innerHTML=x?"<ol>"+T.captions.map(A=>"<li>"+A+"</li>").join("")+"</ol>":T.captions.map(A=>"<p>"+A+"</p>").join(""),et=Math.max(et,w.querySelector(".inside-heading").offsetHeight),vt=Math.max(vt,N.offsetHeight)}w.remove(),dt=j,a.style.minHeight=et+"px",l.style.minHeight=vt+"px"}const v=parseFloat(getComputedStyle(Kt).bottom)||34;y=Pd(R,X,((F=document.querySelector(".site-nav"))==null?void 0:F.offsetHeight)||72,X-v-et-vt),r.style.top=y.top+"px",r.style.height=y.height+"px",r.style.left=y.gutter+"px",r.style.width=y.w-2*y.gutter+"px",G=y,O="",ut=!1}const D=new ResizeObserver(()=>{ut=!0});D.observe(i),y=Pd(i.clientWidth,i.clientHeight,((e=document.querySelector(".site-nav"))==null?void 0:e.offsetHeight)||72),document.fonts.ready.then(()=>{E&&(ut=!0,dt="")});function S(F,R=ct,X=1,j=1,v=1,w=[]){if(X<=.001||j<=0||F.length<2)return;s.strokeStyle=R,s.globalAlpha=X,s.lineWidth=v,s.setLineDash(w),s.beginPath(),s.moveTo(...F[0]);const T=(F.length-1)*Un(j),N=Math.floor(T);for(let A=1;A<=N;A++)s.lineTo(...F[A]);N<F.length-1&&s.lineTo(We(F[N][0],F[N+1][0],T-N),We(F[N][1],F[N+1][1],T-N)),s.stroke(),s.setLineDash([]),s.globalAlpha=1}function J(F,R,X,j,v=ct,w=1,T=1){w<=0||(s.globalAlpha=w,s.strokeStyle=v,s.lineWidth=1,s.beginPath(),s.ellipse(F,R,Math.max(.01,X),Math.max(.01,j),0,-Math.PI/2,-Math.PI/2+Math.PI*2*Un(T)),s.stroke(),s.globalAlpha=1)}function oe(F,R,X=2,j=ct,v=1){s.globalAlpha=v,s.fillStyle=j,s.beginPath(),s.arc(F,R,X,0,Math.PI*2),s.fill(),s.globalAlpha=1}function he(F,R,X=1,j=ct){if(X<=0)return;const v=x?1:1+.1*Math.sin(K*Math.PI);s.shadowColor=j,s.shadowBlur=8,oe(F,R,2*v,j,X),s.shadowBlur=0}function se(F,R,X,j=ct,v=1,w="left",T=11){v<=0||(s.globalAlpha=v,s.fillStyle=j,s.textAlign=w,s.font=`${T}px "IBM Plex Mono",monospace`,s.fillText(F,R,X),s.textAlign="left",s.globalAlpha=1)}function Pe(F,R,X,j,v=1,w=ct,T="left"){if(v<=0)return;const N=Un(v),A=Math.floor(F.length*Un((N-.35)/.65));S([R,[X+(T==="right"?8:-8),j-4],[X+(T==="right"?-8:8),j-4]],w,.68,Math.min(1,N/.4),.75),oe(...R,1.5,w,.8),se(F.slice(0,A)+(A<F.length?"▌":""),X,j-10,w,1,T,y.mobile?9:11)}function Ee(F,R,X,j,v=ct,w=.7,T=1){for(const[N,A]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const W=F+N*X/2,Q=R+A*j/2;S([[W-N*14,Q],[W,Q],[W,Q-A*14]],v,w,T)}}function Me(F,R,X,j,v=ct,w=1,T=1,N=0,A=!0,W=3){if(!_||w<=.001||j<.1||T<=0)return;const Q=_[F].frames,ee=(N%1+1)%1*Q.length,te=Math.floor(ee),le=Q[te],C=Q[(te+1)%Q.length],B=ee-te,re=(Re,me,pe)=>[R+We(Re[0],C.paths[me][pe][0],B)*j,X+We(Re[1],C.paths[me][pe][1],B)*j],fe=le.paths.length*Un(T/.78);s.strokeStyle=v,s.globalAlpha=w*.85,s.lineWidth=y.w>1440?1.25:1,s.beginPath();let ue;if(T>=.78&&(j<70||B<1e-5)){const Re=F+":"+te;let me=Y.get(Re);if(!me){me=new Path2D;for(const pe of le.paths){me.moveTo(...pe[0]);for(let be=1;be<pe.length;be++)me.lineTo(...pe[be])}Y.set(Re,me)}s.save(),s.translate(R,X),s.scale(j,j),s.lineWidth=(y.w>1440?1.25:1)/j,s.stroke(me),s.restore()}else for(let Re=0;Re<Math.min(Math.ceil(fe),le.paths.length);Re++){const me=le.paths[Re],pe=(me.length-1)*Math.min(1,fe-Re),be=Math.floor(pe);s.moveTo(...re(me[0],Re,0));for(let ge=1;ge<=be;ge++)s.lineTo(...re(me[ge],Re,ge));if(be<me.length-1){const ge=re(me[be],Re,be),ye=re(me[be+1],Re,be+1);ue=[We(ge[0],ye[0],pe-be),We(ge[1],ye[1],pe-be)],s.lineTo(...ue)}}if(s.stroke(),s.globalAlpha=1,ue&&T<.78&&he(...ue,w*.8,v),A&&T>.65){const Re=le.dots,me=Math.max(1,Math.ceil(Re.length/Math.max(10,j*j/16))),pe=Un((T-.65)/.35);s.fillStyle=v,s.beginPath();for(let be=0;be<Re.length*pe;be+=me){const ge=Re[be],ye=C.dots[be],He=R+We(ge[0],ye[0],B)*j,Le=X+We(ge[1],ye[1],B)*j;s.rect(He,Le,1,1)}if(s.globalAlpha=w*.55,s.fill(),s.globalAlpha=1,!x&&W>0){s.beginPath();const be=Math.floor(K);for(let ge=0;ge<Re.length;ge+=me){if((ge*37+be*13)%100>=W)continue;const ye=Re[ge],He=C.dots[ge];s.rect(R+We(ye[0],He[0],B)*j,X+We(ye[1],He[1],B)*j,1,1)}s.globalAlpha=w*.25*(.5+.5*Math.sin(K*Math.PI*2)),s.fill(),s.globalAlpha=1}}}function ft(F,R,X,j,v,w,T=ct,N="DETAIL / NOT TO SCALE",A=null){if(w<=0)return;if(y.mobile){Pe(N,v,y.gutter,y.bottom-5,w,T);return}const W=F==="cell"?[v,[R+(v[0]>=R?1:-1)*(j+6),X]]:[v,[R-j-20,X],[R-j,X]];S(W,T,.5,w,.75),Ee(R,X,2*j+12,2*j+12,T,.8,w),A==null?Me(F,R,X,j*.78,T,1,w,T===hn?0:K/90):Se(R,X,j*.78,T,1,w,1,A),se(N,R,X+j+24,T,w,"center",9)}function Se(F,R,X,j=ct,v=1,w=1,T=0,N=0,A=!0){const W=A?K/90:0;if(X*=A&&!x?1+.02*Math.sin(K*Math.PI/3):1,T<=0){Me("organoid",F,R,X,j,v,w,W);return}const Q=X*.48*We(1,.6,N)*T,ee=F-X*.28,te=R-X*.16;s.save(),s.beginPath(),s.rect(F-X*2,R-X*2,X*4,X*4),s.moveTo(ee+Q,te),s.arc(ee,te,Q,0,Math.PI*2),s.clip("evenodd"),Me("organoid",F,R,X,j,v,w,W),s.restore(),s.save(),s.beginPath(),s.arc(ee,te,Q,0,Math.PI*2),s.clip(),Me("organoid",F,R,X,mc,v,w,W),s.restore()}function Ve(F,R,X,j,v,w=1,T=1){const N=R-j/2,A=R+j/2,W=Math.min(X*.16,j*.08);J(F,N,X,W,v,w*.8,T),J(F,A,X,W,v,w*.85,T),J(F,A+4,X,W,v,w*.35,T);for(const Q of[-1,1]){S([[F+Q*X,N],[F+Q*X,A]],v,w*.65,T);for(let ee=1;ee<6;ee++){const te=We(N,A,ee/6);S([[F+Q*X,te],[F+Q*(X+5),te]],v,w*.4,T)}}J(F,R,X,W,v,w*.15,T)}function Qe(F,R=1){const X=y,j=F?1:-1;return X.mobile?{x:X.cx,y:X.cy+j*X.height*We(.14,.22,R),rx:X.w*.28,hh:X.height*We(.22,.28,R)}:{x:X.cx+j*X.w*We(.13,.245,R),y:X.cy,rx:X.w*We(.105,.18,R),hh:X.height*.67}}function rt(F,R=28){const X=cc(F,R);return[y.cx+X[0]*y.unit*.67,y.cy+X[1]*y.unit*.67]}function Ne(F,R,X,j=ct,v=1){Me("cell",F,R,X,j,v,1,0,!0)}function _t(F,R,X=1,j=0,v=1){const w=y,T=Qe(F,X),N=w.mobile?14:28,A=F?ct:hn;for(let W=0;W<N;W++){const Q=cc(W,N),ee=F?0:Un((R-.2-W*.001)/.35)**2;let te=T.x+Q[0]*T.rx*.76,le=T.y+Q[1]*T.hh*.38;if(!F)te=We(te,T.x+(W%7-3+Math.floor(W/7)%2*.24)*T.rx*.22,ee),le=We(le,T.y+T.hh*.4-Math.floor(W/7)*(w.mobile?5:9)-Math.sin(Un((R-.48)/.07)*Math.PI)*2,ee);else{const fe=qe(R,.55,.85);let ue=null,Re=1/0;for(let me=0;me<N;me++){if(me===W)continue;const pe=cc(me,N),be=(pe[0]-Q[0])**2+(pe[1]-Q[1])**2;be<Re&&(Re=be,ue=pe)}te+=(ue[0]-Q[0])*T.rx*.76*fe*.3,le+=(ue[1]-Q[1])*T.hh*.38*fe*.3}const C=rt(W,N);te=We(te,C[0],j),le=We(le,C[1],j);const B=x?0:(1-ee)*Math.sin(K*.9+W*3.1)*2*(1-j),re=We(Math.min(w.mobile?9:14,T.rx*.07),w.unit*.12,j);if(!F&&ee>0&&ee<1)for(let fe=1;fe<=3;fe++)oe(te,le-fe*4,1,A,(1-ee)*.15);Ne(te+B,le+B*.5,re,A,v*(F?1:1-qe(R,.85,1))),F&&R>.58&&W%3===0&&he(te+re*.6,le,qe(R,.58,.8)*.65*(1-j))}}function it(F,R,X,j=1,v=1){const w={x:F,y:R,width:X*2,height:X*2*Wf,bank:0};return q.draw(s,w,v*j),w1(w)}function St(F,R,X,j=1,v=1){Me("cassette",F,R,X,ct,v,j)}function $(F,R,X,j=1,v=1){const w=Ld(y,g,F,R,X);Me("protein",w.x,w.y,w.r,ct,v,j,K/60)}function Oe(F,R,X,j=ct,v=1,w=1){Me("crystal",F,R,X,j,w,v,j===hn?0:K/60)}function ae(F,R,X,j,v){if(j===hn)for(let w=0;w<3;w++)Oe(F+(w-1)*X*.45,R+w%2*X*.2,X*(.3+w*.1),j,v,.65);else Oe(F,R,X*.68,j,v)}function ve(F,R,X,j,v,w,T){v<=0||(S([j,[F-X-20,R],[F-X,R]],w,.5,v,.75),Ee(F,R,X*2+12,X*2+12,w,.8,v),ae(F,R,X*.9,w,Math.min(T,v)),se("CRYSTAL DETAIL / NOT TO SCALE",F,R+X+24,w,v,"center",9))}function Ie(F,R,X,j,v,w){const T=X*.63;S([[F-X,R-T],[F+X,R-T],[F+X,R+T],[F-X,R+T],[F-X,R-T]],j,.8,w),Ee(F,R,X*2+10,T*2+10,j,.4,w);for(const N of[-1,1])for(const A of[-1,1])J(F+N*(X-6),R+A*(T-6),2,2,j,.8,w);for(let N=0;N<24;N++){const A=F+(N%6-2.5)*X*.29,W=R+(Math.floor(N/6)-1.5)*X*.28,Q=X*.105;J(A,W,Q,Q*.82,j,.65,w),J(A,W,Q*.88,Q*.72,j,.2,w),(v>0||j===ct&&N<3&&w===1)&&ae(A,W,Q,j,j===ct&&N<3?1:v)}se("ASTREIA / RESEARCH CASSETTE",F,R+T+18,j,w,"center",y.mobile?7:9)}function Be(F=0){const R=Ua(y.w,y.h,F),X=Ua(y.w,y.h).width/2;return{x:R.x,y:R.y,r:R.width/2,base:X}}function ot(F,R,X=1,j=1){const v=Nd(F,R*.96,_h,dc(8.5,y.w,y.h,x),0);ne.ready&&ne.draw(s,v,{skin:0,outline:1,overlay:j*X},x)}function Ot({dock:F,transfer:R,payload:X},j,{returning:v=!1,undocking:w=!1}={}){const T=y;Pe(w?"THOR XR-1 · UNDOCK":"THOR XR-1 · DOCKED",F,T.w-T.gutter,T.top+24,j.thor,hn,"right"),Pe("CASSETTE TRANSFER",R,T.gutter,T.top+50,j.transfer),Pe(v?"RETURN CASE · SEALED":"RESEARCH CASSETTE",X,T.gutter,T.bottom-12,j.payload),T.mobile||ft("cassette",T.w*.82,T.top+T.height*.23,T.unit*.27,X,j.detail,ct,"DETAIL / NOT TO SCALE")}function Xt(F){const R=y,X=qe(F,.64,.96),j=1-qe(F,.72,.94),v=Be(X),w=it(v.x,v.y,v.r,1,j),{dock:T,slot:N,elevator:A}=w;ot(T,v.r,1,j);const W=qe(F,.26,.56),Q=W<.55?T:A,ee=W<.55?A:N,te=W<.55?W/.55:(W-.55)/.45;if(F>.2&&F<.96&&St(We(Q[0],ee[0],te),We(Q[1],ee[1],te),v.r*.075,qe(F,.2,.26),j),F<.64&&Ot({dock:T,transfer:A,payload:N},{thor:xi(F,.16,.22,.45,.58),transfer:xi(F,.25,.33,.52,.64),payload:xi(F,.4,.48,.56,.64),detail:xi(F,.3,.4,.52,.6)}),F>.68){const le=qe(F,.68,.96),C=We(.035,1,le),B=We(N[0],R.cx,le),re=We(N[1],R.h/2,le);s.save(),s.translate(B,re),s.scale(C,C),s.translate(-R.cx,-R.h/2);for(const fe of[0,1]){const ue=Qe(fe,0);Ve(ue.x,ue.y,ue.rx,ue.hh,fe?ct:hn,le)}_t(0,0,0,0,le),_t(1,0,0,0,le),s.restore()}}function xt(F){const R=y,X=qe(F,.02,.2),j=qe(F,.85,1);for(const w of[0,1]){const T=Qe(w,X),N=w?ct:hn;if(Ve(T.x,T.y,T.rx,T.hh,N,1-j),_t(w,F,X,w?j:0),F<.94&&se(w?"TESSERA · MICROGRAVITY":"EARTH · 1 g",T.x,Math.max(R.top+5,T.y-T.hh/2-Math.min(T.rx*.16,T.hh*.08)-18),N,(1-j)*qe(F,.02,.12),"center",R.mobile?9:11),!w){const A=xi(F,.22,.3,.54,.61),W=T.y-T.hh*.2;S([[T.x,W],[T.x,W+T.hh*.28]],hn,A),S([[T.x-4,W+T.hh*.28-6],[T.x,W+T.hh*.28],[T.x+4,W+T.hh*.28-6]],hn,A),R.mobile||se("SEDIMENTATION",T.x+12,W+12,hn,A,"left",9),S([[T.x-T.rx*.8,T.y+T.hh*.42],[T.x+T.rx*.8,T.y+T.hh*.42]],hn,1-j,qe(F,.45,.55))}}const v=Qe(1,X);R.mobile||ft("cell",R.cx,R.top+R.height*.13,R.unit*.18,[v.x-v.rx*.4,v.y],xi(F,.62,.7,.8,.84),ct,"CELL CONTACT / NOT TO SCALE")}const Lt=new WeakMap;function Zt(F){if(Lt.has(F))return Lt.get(F);const R=[0];for(let w=1;w<F.length;w++)R.push(R[w-1]+Math.hypot(F[w][0]-F[w-1][0],F[w][1]-F[w-1][1]));const X=R.at(-1),j=[];let v=1;for(let w=0;w<64;w++){const T=X*w/63;for(;v<F.length-1&&R[v]<T;)v++;const N=(T-R[v-1])/(R[v]-R[v-1]||1);j.push([We(F[v-1][0],F[v][0],N),We(F[v-1][1],F[v][1],N)])}return Lt.set(F,j),j}function Xn(F,R,X,j){const v=y,w=v.mobile?14:28,T=_.organoid.frames,N=K/90%1*T.length,A=Math.floor(N),W=N-A,Q=T[A],ee=T[(A+1)%T.length],te=_.cell.frames[0],le=re=>{const fe=Zt(Q.paths[re]),ue=Zt(ee.paths[re]);return fe.map((Re,me)=>[F+We(Re[0],ue[me][0],W)*X,R+We(Re[1],ue[me][1],W)*X])};for(let re=0;re<w;re++){const[fe,ue]=rt(re,w),Re=v.unit*.12,me=re;for(let pe=0;pe<te.paths.length;pe++){const be=Zt(te.paths[pe]),ge=le(7+me*3+Math.min(2,pe)),ye=ge.reduce((He,Le)=>[He[0]+Le[0]/64,He[1]+Le[1]/64],[0,0]);S(be.map((He,Le)=>[We(fe+He[0]*Re,pe<3?ge[Le][0]:ye[0],j),We(ue+He[1]*Re,pe<3?ge[Le][1]:ye[1],j)]),ct,.85,1)}}const C=qe(j,.78,1);for(let re=0;re<Q.paths.length;re++)(re<7||re>=7+w*3)&&S(le(re),ct,.85,C);const B=Q.dots;for(let re=0;re<B.length;re+=3){const fe=B[re],ue=ee.dots[re];oe(F+We(fe[0],ue[0],W)*X,R+We(fe[1],ue[1],W)*X,.5,ct,C*.55)}}function Ln(F,{x:R,y:X,r:j,seconds:v=K,reduced:w=x,ink:T=ct,alpha:N=1,disease:A=0,response:W=0,moving:Q=!0,emberAlpha:ee=1,neutralAlpha:te=1,halo:le=0,groupGlow:C=0}){const B=Q&&!w?v/90:0,re=Q&&!w?1+.02*Math.sin(v*Math.PI/3):1;j*=re;const fe=[],ue=Math.max(0,1-l1(A,v,w))*We(1,.6,W),Re=W>.5?Pi:"#C8622A";for(let be=0;be<=96;be++){const ge=be/96*Math.PI*2,ye=.68*(1+.065*Math.sin(ge*5+1.1)+.04*Math.sin(ge*9-.4))*ue;fe.push([R+(-.6+Math.cos(ge)*ye)*j,X+(-.6+Math.sin(ge)*ye)*j])}const me=()=>{s.moveTo(...fe[0]);for(const be of fe.slice(1))s.lineTo(...be);s.closePath()};s.save(),s.shadowColor=T+"99",s.shadowBlur=C?8:0,A<.2||ue===0?Me("organoid",R,X,j,T,N*te,1,B,!0,0):(s.save(),s.beginPath(),s.rect(R-j*2,X-j*2,j*4,j*4),me(),s.clip("evenodd"),Me("organoid",R,X,j,T,N*te,1,B,!0,0),s.restore(),s.save(),s.beginPath(),me(),s.clip(),s.shadowColor=Re+"99",s.shadowBlur=le?8:0,Me("organoid",R,X,j,Re,N*ee,1,B,!0,2),s.restore()),s.restore();const pe=be=>{const ge=_.organoid.frames,ye=(B%1+1)%1*ge.length,He=Math.floor(ye),Le=ge[He],yt=ge[(He+1)%ge.length],tt=ye-He,Nt=Math.cos(be),an=Math.sin(be);let Bt=-1/0,ln=[R,X];return Le.paths.forEach((qn,jn)=>qn.forEach((Kn,Yt)=>{const Fn=We(Kn[0],yt.paths[jn][Yt][0],tt),On=We(Kn[1],yt.paths[jn][Yt][1],tt),wi=Fn*Nt+On*an;wi>Bt&&(Bt=wi,ln=[R+Fn*j,X+On*j])})),ln};return{x:R,y:X,r:j,yaw:B*Math.PI*2,surface:pe}}function In(F){const R=y,X=qe(F,0,.25),j=qe(F,.25,.34),v=qe(F,.85,1),w=j*(1-qe(F,.72,.85)),T=R.unit*.75,N={x:We(R.cx,R.mobile?R.cx:R.w*.72,j),y:We(R.cy,R.mobile?R.top+R.height*.71:R.cy,j)},A={x:R.mobile?R.cx:R.w*.28,y:R.mobile?R.top+R.height*.23:R.cy},W=gh(G),Q=We(N.x,W.x,v),ee=We(N.y,W.y,v),te=We(R.mobile?T*.64:T,W.r,v);if(X===0){const le=R.mobile?14:28;for(let C=0;C<le;C++){const[B,re]=rt(C,le);Ne(B,re,R.unit*.12)}}else X<1?Xn(Q,ee,te,X):Ln(s,{x:Q,y:ee,r:te,seconds:K,reduced:x});if(j>0&&v<1){const le=R.mobile?T*.64:T;Ln(s,{x:A.x,y:A.y,r:le,ink:hn,alpha:w,moving:!1,reduced:x}),se("EARTH · 3D CULTURE",A.x,A.y+le+24,hn,w,"center",R.mobile?8:10),se("ORBIT · 3D CULTURE",Q,ee+te+24,ct,w,"center",R.mobile?8:10)}}function di(F){b.draw(s,G,F,K,x,{path:S,dot:oe,text:se,aggregate:Ln})}function qt(F){const R=y,X=qe(F,0,.2),j=qe(F,.8,1),v=qe(F,.52,.68),w=24,T=gh(G,1);for(let N=0;N<w;N++){const A=hc(N,R,j),W=c1(T,A,F,N),{x:Q,y:ee}=W,te=A.r*(1-j),le=Ps.includes(N),C=le?qe(F,.52+Ps.indexOf(N)*.04,.6+Ps.indexOf(N)*.04):0,B=(le?1:We(1,.35,qe(F,.64,.72)))*W.alpha;j<1&&B>0&&(Ln(s,{x:Q,y:ee,r:W.r*(1-j),seconds:K,reduced:x,disease:1,response:C,alpha:B}),J(Q,ee,te,te,ct,(1-j)*B*W.dish,W.dish),J(Q,ee,te*1.12,te*1.12,ct,(1-j)*B*.4*W.dish,W.dish));const re=String.fromCharCode(65+Math.floor(N/6))+(N%6+1);se(re,Q+te+2,ee+te+6,ct,qe(F,.17,.22)*(1-j),"left",R.mobile?7:9),j>0&&(oe(Q,ee,We(1,3,j),le?Pi:ct,1),le&&he(Q,ee,j*.7,Pi)),C>0&&(oe(Q+te*.7,ee-te*.7,3*C,Pi,1-j),N===14&&j<1&&he(Q,ee,v*(1-j)));const fe=N%6;if(fe>0){const ue=Un((F-(.22+fe*.04))/.1);if(ue>0&&ue<1)for(let Re=0;Re<(R.mobile?3:6);Re++){const me=We(R.top-10,ee,Un(ue+Re*.02)),pe=Q+Math.sin(Re*3+K)*2;S([[pe,me-10],[pe,me]],Pi,.6),oe(pe,me,1.5,Pi)}}}if(F<.82){for(let N=0;N<6;N++){const A=hc(N,R);se(N?"DOSE "+String.fromCharCode(64+N):"CONTROL",A.x,R.top+5,ct,X,"center",R.mobile?7:10)}if(R.mobile||se("REPLICATES × 4",R.gutter,R.cy,hn,X,"left",9),F>.5){const N=R.mobile?7:14;se("● NO SIGNAL SHOWN",R.cx-N,R.bottom-3,hn,v,"right",R.mobile?7:10),se("● SIGNAL TO RE-TEST",R.cx+N,R.bottom-3,Pi,v,"left",R.mobile?7:10)}}}function ei(F,R){if(R>=1){$(y.cx,y.cy,y.unit);return}const X=_.protein.frames,j=K/60%1*X.length,v=Math.floor(j),w=X[v],T=X[(v+1)%X.length],N=j-v,A=Ld(y,g,y.cx,y.cy,y.unit),W=C1(w.paths,F.length),Q=y.w>1440?1.25:1,ee=[[],[],[]];W.forEach((le,C)=>{const B=P1(F[C],w.paths[le.rail],T.paths[le.rail],le,A,N,R,C,F.length);B.forEach((re,fe)=>{ee[le.rail][le.start+fe]=re}),S(B,ct,We(.65,.85,R),1,Q)});for(let le=3;le<w.paths.length;le++){const C=L1(R,le-3,w.paths.length-3);if(C>0){const B=(le-3)*3;S([ee[1][B],ee[2][B]],ct,.85,C,Q)}}const te=qe(R,.82,1);if(te>0)for(let le=0,C=Math.max(1,Math.ceil(w.dots.length/Math.max(10,A.r*A.r/16)));le<w.dots.length;le+=C){const B=w.dots[le],re=T.dots[le];s.fillStyle=ct,s.globalAlpha=.55*te,s.fillRect(A.x+We(B[0],re[0],N)*A.r,A.y+We(B[1],re[1],N)*A.r,1,1)}s.globalAlpha=1}function Ct(F){const R=y,X=p1(F),j=X.construction,v=qe(F,0,.25),w=qe(j,.25,.38),T=[],N=[];for(let ee=0;ee<24;ee++){const te=hc(ee,R,1),le=_[R.mobile?"lattice-portrait":"lattice"].frames,C=K/120%1*le.length,B=Math.floor(C),re=le[B].dots[ee],fe=le[(B+1)%le.length].dots[ee],ue=Math.min(R.unit*(R.mobile?.84:1.08),R.height*(R.height<140?.12:R.height<220?.2:R.mobile?.25:.28)/(R.mobile?1.016:.755)),Re={x:R.cx+We(re[0],fe[0],C-B)*ue,y:R.cy+We(re[1],fe[1],C-B)*ue-R.height*.1};T.push({x:We(te.x,Re.x,v),y:We(te.y,Re.y,v)})}const A=1-qe(X.protein,0,.3);for(let ee=0;ee<24;ee++){const te=T[ee];for(const le of R.mobile?[ee%3<2?ee+1:-1,Math.floor(ee/3)%2<1?ee+3:-1,ee<18?ee+6:-1]:[ee%4<3?ee+1:-1,Math.floor(ee/4)%3<2?ee+4:-1,ee<12?ee+12:-1])if(le>=0){const C=T[le];N.push([[te.x,te.y],[C.x,C.y]]),X.protein===0&&S([[te.x,te.y],[C.x,C.y]],ct,.65,v),w>0&&S([[te.x+12,te.y-12],[C.x+12,C.y-12]],hn,.3,w)}w>0&&(Ps.includes(ee)&&se("Δ",te.x+8,te.y-14,mc,w,"left",8),oe(te.x+12,te.y-12,2,hn,w*.5),S([[te.x+12,te.y-12],[te.x,te.y]],Ps.includes(ee)?mc:hn,.6,qe(j,.38,.48))),A>0&&(oe(te.x,te.y,3*A,Ps.includes(ee)?Pi:ct),Ps.includes(ee)&&he(te.x,te.y,A*.7,Pi))}["IMAGING","MORPHOLOGY","VIABILITY","DOSE–RESPONSE"].forEach((ee,te)=>{const le=T[[0,3,20,23][te]],C=R.h<500;Pe(ee,[le.x,le.y],R.mobile?te%2?R.w-R.gutter:R.gutter:C?R.w*(te%2?.8:.2):le.x+(te%2?70:-70),R.mobile?R.top+54+(te<2?0:20):C?R.top+R.height*(te<2?.26:.48):le.y+(te<2?-40:40),qe(j,.1+te*.04,.2+te*.04),ct,te%2?"right":"left")});const W=qe(j,.5,.65),Q=m1(R);if(j>.34&&se("EARTH · PAIRED CONTROL",R.cx,Q.labelY,hn,qe(j,.34,.4),"center",R.mobile?8:10),W>0){const{x1:ee,x2:te,width:le,height:C,y:B,busY:re,edge:fe,railY:ue,labelY:Re,font:me}=Q,pe=T.reduce((Le,yt)=>yt.y>Le.y?yt:Le,T[0]),be=pe.y+6,ge=Math.min(re-5,be+12);S([[pe.x,be],[pe.x,ge],[R.cx,ge],[R.cx,re]],ct,.7,W);for(const[Le,yt]of[[ee,"DATA TRANSFER"],[te,"PARTNER DATASET"]])S([[R.cx,re],[Le,re],[Le,B-C/2]],ct,.7,W),Ee(Le,B,le,C,ct,.8,W),se(yt,Le,B+me*.35,ct,W,"center",me);const ye=qe(j,.66,.76);S([[te+le/2,B],[fe,B],[fe,ue],[R.cx,ue]],ct,.45*W,ye,.8,[3,6]),se("NEXT CASSETTE",fe-4,Re,ct,qe(j,.68,.72)*W,"right",R.mobile?9:11);const He=Math.max(1,Math.min(8,Math.floor((re-ge)/12)));for(let Le=0;Le<He;Le++){const yt=(K*.25+Le/He)%1;oe(R.cx,We(ge,re,yt),1.5,Pi,W)}}X.protein>0&&ei(N,X.protein)}function un(F){const R=y,X=qe(F,.36,.48),j=qe(F,.75,.86),v=qe(F,.84,.92),w=qe(F,.92,1),T=R.unit,N=R.mobile?Math.min(R.w*.37,Math.max(30,(R.height*.34-34)/1.26)):Math.min(R.w*.2,R.height*.4),A=R.mobile?[[R.cx,R.top+R.height*.18],[R.cx,R.top+R.height*.77]]:[[R.w*.27,R.cy],[R.w*.73,R.cy]];if(F<.48){$(R.cx,R.cy,T,1,1-qe(F,.12,.2));for(let W=0;W<3;W++){const Q=qe(F,.36,.48),ee=A[1][0]+(W-2.5)*N*.29,te=A[1][1]-1.5*N*.28,le=We(R.cx+(W-1)*T*.9,ee,Q),C=We(R.cy,te,Q),B=We(T*(.16+W*.12),N*.105*.68,Q),re=qe(F,.04+W*.05,.12+W*.05);Oe(le,C,B,ct,re),se(["NUCLEATION","GROWTH","MATURE"][W],le,R.cy+T*.62,ct,re*(1-Q),"center",R.mobile?8:11)}}if(X>0&&j<1)for(const[W,[Q,ee]]of A.entries()){const te=We(Q,R.cx,j),le=We(ee,R.cy,j),C=N*We(1,.18,j),B=W?ct:hn;s.save(),s.translate(te,le),s.scale(Math.max(.08,1-j),1),Ie(0,0,C,B,qe(F,.48,.6),X),s.restore(),j===0&&(se(W?"ORBIT":"EARTH",Q,ee-N*.75,B,X,"center",R.mobile?8:10),R.mobile||ve(Q+N*.7,ee-N*.95,N*.18,[Q+N*.145,ee-N*.42],xi(F,.4+W*.03,.48+W*.03,.68,.72),B,qe(F,.48,.6)))}if(F>.8){const W=Math.min(R.w*(R.mobile?.8:.48),R.height*1.8)*We(1,.2,w),Q=W/2,ee=R.cx,te=R.cy;lt&&(s.save(),s.beginPath(),s.rect(ee-W/2,te-Q/2,W*v,Q),s.clip(),s.globalAlpha=1-qe(F,.97,1),gt(ee,te,W,Q),s.restore()),v<1&&(s.save(),s.beginPath(),s.rect(ee-W/2+W*v,te-Q/2,W*(1-v),Q),s.clip(),S(p.map(le=>[ee+le[0]*W,te+le[1]*Q]),ct,.85,qe(F,.8,.84)),s.restore()),w>0&&(St(R.cx,R.cy,T*.55,w),Pe("RETURN CASE · SEALED",[R.cx+T*.3,R.cy],R.w-R.gutter,R.bottom-15,w,ct,"right"))}}function Mn(F){const R=y,X=Vf(F),j=X.pull,v=Be(1-j),w=We(1,R.mobile?.7:.84,j);v.r*=w,v.base*=w,v.x=We(R.cx,v.x,w),v.y=We(R.cy,v.y,w)-R.height*.04*j;const T=qe(F,.04,.25),N=it(v.x,v.y,v.r,1,T*(1-qe(F,.49,.65))),{dock:A,slot:W,elevator:Q}=N;F<.08&&Pe("RETURN CASE · SEALED",[R.cx+R.unit*.3,R.cy],R.w-R.gutter,R.bottom-15,1-qe(F,0,.08),ct,"right");const ee=X.depart,te=v.r*.48,le=dc(Id(F,R.mobile),R.w,R.h,x),C=_h,B=Nd(A,te*2,C,le,ee),re=F1(B),fe=X.load,ue=fe<.5?W:Q,Re=fe<.5?Q:re.approach,me=fe<.5?fe*2:(fe-.5)*2,pe=[We(R.cx,We(ue[0],Re[0],me),j),We(R.cy,We(ue[1],Re[1],me),j)],be=[We(pe[0],re.center[0],X.insert),We(pe[1],re.center[1],X.insert)];if(ne.ready&&ne.draw(s,B,de?{...X,overlay:X.overlay*T}:{skin:0,outline:1,overlay:T},x),X.seal<1&&(s.save(),s.translate(...be),s.rotate(B.bank*X.insert),St(0,0,We(We(R.unit*.55,v.base*.075,j),B.height*.17,X.insert),1,1-X.seal),s.restore()),ne.ready&&ne.drawHatch(s,B,X.hatch),F>.24&&F<.72&&Ot({dock:ee>0?[B.x,B.y]:A,transfer:Q,payload:be},{thor:xi(F,.3,.36,.64,.72),transfer:xi(F,.24,.3,.42,.46),payload:xi(F,.27,.34,.42,.46),detail:xi(F,.28,.34,.42,.46)},{returning:!0,undocking:ee>0}),ee>0&&ee<1&&!x)for(let ge=0;ge<12;ge++){const ye=(K*2+ge/12)%1,He=B.width*.46+ye*18;oe(B.x+Math.cos(B.bank)*He,B.y+Math.sin(B.bank)*He,1,hn,(1-ye)*.6)}}const en=[Xt,xt,In,di,qt,Ct,un,Mn];return{prepare:V,root:t,get handoffReady(){return ne.settled},render(F,R,X=!1,j=0,v=!1,w=1){if(!E||(de=v,F>=5&&ne.prepare(),t.hidden=F<0||F>7,t.hidden))return;V(),x!==X&&(ut=!0),x=X,ut&&nt(),K=X?0:j,F>=4&&F<=6?(Fe!=null&&Fe!==y.mobile&&ht(),At()):ht(),F===3?(L!==3||H==null?(k=R,b.reset()):k=u1(k,R,j-H,X),H=j,R=k):H=null;const T=Gf(F,R,X),N=qa[F],A=y;F===3?(T.pose=R,t.dataset.patientNarration=String(Hf(R).narration)):delete t.dataset.patientNarration,L!==F&&(L=F,d=B1(o,document.createElement("span"),N.title,""),u.textContent=H1[F],h.innerHTML=N.captions.map(C=>`<li>${C}</li>`).join(""),I=""),a.style.opacity="1",k1(d,l,X?1:R,[.02,.08],X?1:1-qe(R,.985,1),X),h.hidden=!X,c.forEach(C=>C.hidden=X);const W=F+":"+T.caption;W!==I&&(I=W,U=1-U,c[U].textContent=N.captions[T.caption],c[U].className="is-current",c[U].removeAttribute("aria-hidden"),c[1-U].className="",c[1-U].setAttribute("aria-hidden","true")),l.classList.remove("is-mission"),t.dataset.pose=String(T.pose),t.dataset.scene=String(F),t.dataset.caption=String(T.caption);const Q=F===0||F===7;if(r.hidden=!!(s&&!we&&_&&(!Q||q.ready&&ne.ready)),n.hidden=!r.hidden,!r.hidden){const C=F===7&&T.pose>.65,B=C?ai+"story-2d/thor-illustrated/thor.webp":Q?ai+"story-2d/tessera-docking/tessera-frontal.webp":ai+"story-2d/inside-tessera/"+z1[F]+".svg";if(r.getAttribute("src")!==B&&(r.src=B),Q){const re=C?dc(Id(T.pose,A.mobile),A.w,A.h,x):Ua(A.w,A.h);r.style.cssText=`left:0;top:0;width:${re.width}px;height:${re.height}px;transform:translate(${re.x-re.width/2}px,${re.y-re.height/2}px) rotate(${re.bank||0}rad)`}else r.style.cssText="";t.dataset.fallback=we?"context-lost":f?"failed":"pending";return}delete t.dataset.fallback;const ee=`${F}:${R}:${X}:${w}:${de}:${ne.ready}:${q.ready}:${A.w}:${A.h}:${X?0:Math.floor(j*30)}`;if(O===ee)return;O=ee;const te=_1(A.w,A.h,w),le=`${A.w}:${A.h}:${te}`;le!==M&&(M=le,n.width=Math.round(A.w*te),n.height=Math.round(A.h*te)),s.setTransform(te,0,0,te,0,0),s.imageSmoothingQuality="high",s.clearRect(0,0,A.w,A.h),s.lineCap="round",s.lineJoin="round",s.save(),s.beginPath(),F===0||F===7&&T.pose>.6?s.rect(0,0,A.w,A.h):s.rect(A.gutter,A.top-16,A.w-A.gutter*2,A.height+32),s.clip();for(let C=0;C<85;C++){const B=A.gutter+C*73.137%1*(A.w-2*A.gutter),re=A.top+C*31.731%1*A.height;oe(B,re,.55,ct,.1*(F===7?1-qe(T.pose,.72,.86):1))}en[F](T.pose),s.restore(),Ee(A.cx,(A.top+A.bottom)/2,A.w-A.gutter*2,A.height+24,ct,.4*(F===7?1-qe(T.pose,.72,.86):1))},hide(){t.hidden=!0,ht()},destroy(){E=!1,D.disconnect(),n.removeEventListener("contextlost",Te),n.removeEventListener("contextrestored",ke),t.remove(),_=null,ne.destroy(),q.destroy(),ht(),Y.clear()}}}const $f=i=>Math.max(0,Math.min(1,i)),gc=i=>(i=$f(i),i*i*(3-2*i)),xh=(i,e,t)=>i+(e-i)*t;function G1(i,e=!1){const t=$f(i),n=gc(t/.34);return{reveal:gc(t/.24),pill:gc((t-.06)/.22),scale:e?1:xh(.965,1,n),rise:e?0:xh(12,0,n)}}const W1=[{id:"reentry",startTime:8.68,length:328},{id:"parachute",startTime:9.5,length:340},{id:"splashdown",startTime:10.5,length:240},{id:"recovery",startTime:11.5,length:480}];W1.reduce((i,e)=>i+e.length,0);function X1(i,e,t=90,n=e-130){const s=i<=e,r=Math.min(e*.3,t+Math.min(24,e*.035)),o=Math.max(r+40,Math.min(e*.74,e-(s?208:125),n-24)),a=o-r;return{w:i,h:e,portrait:s,top:r,bottom:o,height:a,x:i/2,y:(r+o)/2,caseWidth:Math.min(i*(s?.7:.34),a*.78),organoidWidth:Math.min(i*(s?.82:.46),a*.94)}}const q1=i=>Math.max(0,Math.min(1,i)),jf=i=>{const e=q1(i);return e*e*e*(e*(e*6-15)+10)},yh={start:4.16,end:4.76};let Y1=420;const Fd=i=>i<=4.5?i-yh.start:4.5-yh.start+(i-4.5)*Y1/350;function $1(i){const e=Math.max(0,Math.min(1,Fd(i)/Fd(yh.end))),t=jf((e-.42)/.5);return{progress:e,interior:t}}function j1(i,e=!1){const{progress:t,interior:n}=$1(i);return{cover:n,subjects:n<1?0:e?1:jf((t-.92)/.08)}}const K1=[...qa,{id:"homecoming",label:"Complete the orbital loop",title:"Bring the progress home.",copy:"Tessera is being developed for orbital research and production. Thor is designed to bring the samples and materials home for testing and further development.",phase:"03 / Return to Earth",detail:"Tessera–1 and Thor XR–1 · In development"},{id:"for-people",label:"For life on Earth",title:"The destination is better care.",copy:"More useful disease models. Better ways to make medicines. Astreia is building access to orbit to help researchers turn those possibilities into better care on Earth.",phase:"03 / For people",detail:"Astreia · From Earth. For Earth."}],Mh=[{id:"factory",label:"A new beginning",phase:"01 / Departure",title:"Extraordinary.<br>From the start.",copy:"Every discovery begins on Earth. A purpose-built platform. A payload full of possibility.",detail:"Tessera–1 / Mission preparation"},{id:"integration",label:"Payload integration",phase:"01 / Departure",title:"The next stop.<br>Somewhere above.",copy:"Tessera takes its place. Two fairing halves close around the platform, ready for launch.",detail:"Launch vehicle / Payload integration"},{id:"launch",label:"Liftoff",phase:"01 / Departure",title:"Leave Earth.<br>Keep the purpose.",copy:"One launch connects a question on Earth to a different environment in orbit.",detail:"Launch / Ascent"},{id:"separation",label:"Stage & fairing separation",phase:"01 / Departure",title:"Let go.<br>Go further.",copy:"The first stage falls away. The fairing opens. The orbital chapter begins.",detail:"Stage separation / Fairing release"},{id:"orbit",label:"Orbital operations",phase:"02 / Discovery",title:"A factory.<br>Above it all.",copy:"Tessera–1 is being developed for research and manufacturing in microgravity. Experiments ask what changes. Production asks whether it can be made reliably.",detail:"Tessera–1 / Platform in development"},...K1];function Z1(){const i=new Map;return{set(e,t,n){i.has(e)||i.set(e,new Map),i.get(e).set(t,String(n))},flush(){let e=0;for(const[t,n]of i)for(const[s,r]of n)t.style[s]!==r&&(t.style[s]=r,e++);return i.clear(),e},clear(){i.clear()}}}function J1(i){const e=V1(i),t=Z1(),n=t.set,s=matchMedia("(prefers-reduced-motion: reduce)"),r=document.createElement("section");r.className="research-story research-outcome",r.hidden=!0,r.innerHTML=`<div class="hospital-panel"><img class="hospital-background" src="${ai}story-2d/plate-hospital-happy.webp" alt="A patient in a hospital room" decoding="async"><div class="research-pill"><img src="${ai}story-2d/bio/capsule.webp" alt="Astreia medicine concept" decoding="async"></div></div>`,i.append(r);const o=r.querySelector(".hospital-panel"),a=r.querySelector(".research-pill");let l,c,h;function u(){var g;c=i.clientWidth,h=i.clientHeight,l=X1(c,h,((g=document.querySelector(".site-nav"))==null?void 0:g.offsetHeight)||78,h-Math.max(130,h*.22))}const d=new ResizeObserver(u);d.observe(i),u();const p=(g,_,m,f,E=0,y=1)=>{n(g,"width",`${f}px`),n(g,"transform",`translate3d(${_}px,${m}px,0) translate(-50%,-50%) rotate(${E}rad)`),n(g,"opacity",y)};return{render(g,_,{returnReady:m=!1,seconds:f=0,quality:E=1}={}){var y;const M=(y=Mh[g])==null?void 0:y.id,O=qa.findIndex(U=>U.id===M),I=g===4,L=O>=0;if(g>=3&&e.prepare(),i.dataset.inside=String(L),i.classList.toggle("research-active",L),i.classList.toggle("research-ending",M==="for-people"),L||I){const U=I?3.5+_:4.5+_,K=j1(U,s.matches);e.render(I?0:O,I?0:O===0?Math.max(0,(_-.29)/.71):_,s.matches,f,m,E),e.root.style.opacity=String(I||O===0?K.cover:1);const x=L?Gf(O,_,s.matches).pose:0,b=O===7&&m&&e.handoffReady?Vf(x).reveal:0;e.root.style.backgroundColor=`rgba(10,10,10,${1-b})`,e.root.style.maskImage="none",e.root.querySelector(".inside-drawing").style.opacity=String(1),e.root.querySelector(".inside-fallback").style.opacity=String(1-b)}else M==="homecoming"&&!m?(e.render(7,1,s.matches,f,!1,E),e.root.style.opacity="1",e.root.style.backgroundColor="#0a0a0a",e.root.querySelector(".inside-fallback").style.opacity="1"):e.hide();if(r.hidden=M!=="for-people",!r.hidden){{const U=G1(_,s.matches),K=Math.min(c*(l.portrait?.8:.38),l.height*1.45);n(o,"opacity",m?U.reveal:1),p(a,c*(l.portrait?.58:.74),xh(l.top,l.bottom,l.portrait?.7:.64)+U.rise,K*U.scale,0,U.pill)}t.flush()}},root:e.root,destroy(){e.destroy(),d.disconnect(),t.clear(),r.remove(),delete i.dataset.inside,i.classList.remove("research-active","research-ending")}}}const Q1=(i,e)=>Ua(i,e),eM=[["factory",120,"hangar","painted-dissolve","iris"],["integration",160,"hangar","iris","door"],["launch",220,"cape","door","ascent"],["separation",220,"orbit","ascent","scale-match"],["orbit",220,"orbit","scale-match","push-through"],["bioreactor",130,"bio-black","push-through","push-through"],["protein",420,"bio-black","push-through","scale-match"],["medicine",120,"bio-black","scale-match","iris"],["payload",180,"orbit","iris","scale-match"],["reentry",220,"orbit","scale-match","painted-dissolve"],["parachute",180,"ocean","painted-dissolve","scale-match"],["splashdown",150,"ocean","scale-match","scale-match"],["recovery",200,"ocean","scale-match","case"],["warehouse",130,"warehouse","case","window"],["hospital",200,"hospital","window","painted-dissolve"]];let _c=0;const Ya=eM.map(([i,e,t,n,s],r)=>{const o=_c;return _c+=e,{id:i,length:e,start:o,end:_c,pin:r!==14,plate:t,in:n,out:s,reveal:r===14?[.4,.58]:[.34,.54]}}),Od=i=>Math.max(0,Math.min(1,i));function Kf(i,e,t,n){const s=t.replace(/<br\s*\/?>/g," "),r=[];i.replaceChildren(),i.setAttribute("aria-label",s);for(const o of s.split(/(\s+)/)){if(!o)continue;const a=document.createElement("span");if(a.setAttribute("aria-hidden","true"),!o.trim())a.className="reveal-space",a.textContent=o,r.push(a);else{a.className="reveal-token";for(const l of o){const c=document.createElement("span");c.className="reveal-word",c.textContent=l,a.append(c),r.push(c)}}i.append(a)}return e.textContent=n,r}function Zf(i,e,t,[n,s],r=1,o=!1){i.forEach((a,l)=>{const c=l/Math.max(1,i.length-1),h=Od((t-n-c*(s-n))/.14);a.style.opacity=String(h*r),a.style.transform=`translateY(${o?0:(1-h)*9}px)`}),e.style.opacity=String(Od((t-s-.02)/.15)*r)}const tM=[[.535,.431],[.535,.557]];function nM(i){const e=Math.cos(i[6]),t=Math.sin(i[6]);return tM.map(([n,s])=>{const r=(n-.5)*1.14*i[3],o=(.5-s)*1.14*i[3];return[i[0]+r*e-o*t,i[1]+r*t+o*e]})}const iM=i=>Math.max(0,Math.min(1,i)),sM=i=>{const e=iM(i);return e*e*e*(e*(e*6-15)+10)},Sh={start:4.16,end:5.02},rM=Ya[5].length/Ya[4].length,Bd=i=>i<=4.5?i-Sh.start:4.5-Sh.start+(i-4.5)*rM;function oM(i){const e=Math.max(0,Math.min(1,Bd(i)/Bd(Sh.end))),t=sM((e-.42)/.5);return{progress:e,interior:t,reactorScale:.92+.26*t}}const En=i=>{const e=Math.max(0,Math.min(1,i));return e*e*(3-2*e)},Ze=(i=0,e=0,t=1,n=0,s=1)=>[i,e,0,t,0,0,n,s],aM={tessera:[[0,Ze(0,.1,6.4)],[.45,Ze(0,.1,6.4)],[1,Ze(0,0,3.2)],[1.28,Ze(0,0,3.2)],[1.48,Ze(0,1.4,2,0,0)],[2.98,Ze(0,3.6,.65,0,0)],[3.12,Ze(0,3.6,.65)],[3.45,Ze(0,2.9,1.6)],[3.8,Ze(0,.5,5.5)],[4.1,Ze(0,.35,7.5)],[4.55,Ze(0,.35,7.5)],[5,Ze(0,0,8.4,0,0)]],rocket:[[1.48,Ze(0,-2,.55,0,0)],[1.72,Ze(0,-.3,1.05)],[2.05,Ze(0,-.3,1.05)],[2.3,Ze(.2,.1,1,-.12)],[2.5,Ze(.8,.7,.88,-.38)],[2.65,Ze(.8,.7,.88,-.38,0)]],booster:[[2.5,Ze(.11,-1.02,.88,-.38,0)],[2.65,Ze(.11,-1.02,.88,-.38)],[3.05,Ze(-.8,-2.3,1,-.18)],[3.6,Ze(-3,-5,.85,-.32)],[3.85,Ze(-5,-8,.7,-.42,0)]],"upper-stage":[[2.5,Ze(1.87,3.37,.88,-.38,0)],[2.65,Ze(1.87,3.37,.88,-.38)],[2.98,Ze(0,3.35,1.05)],[3.08,Ze(0,3.35,1.05,0,0)]],"second-stage":[[2.98,Ze(0,2.45,1.05,0,0)],[3.08,Ze(0,2.45,1.05)],[3.35,Ze(0,1.4,1.05)],[3.75,Ze(0,-3,.8)],[4,Ze(0,-6,.6,0,0)]]},vc=i=>En((i-3.08)/.57),Li={offset:.84,scale:4,entry:14,start:.2,sealed:1.3,hold:1.46};function lM(i){if(i<Li.start)return{x:Li.entry,alpha:0};const e=(i-Li.start)/(Li.sealed-Li.start);if(e>=1)return{x:Li.offset,alpha:1};const t=En(e);return{x:Li.entry-(Li.entry-Li.offset)*t,alpha:1}}function cM(i){i=Math.max(0,Math.min(14,i));const e={};for(const[M,O]of Object.entries(aM))e[M]=ds(O,i);const t=En((i-3.9)/.55);e["tessera-orbit"]=Ze(0,0,1,0,0),e.cart=Ze(0,0,1,0,0);for(const M of["reactor","protein","vial","thor"])e[M]=ds(lc[M],i);if(e.protein[6]=(i-6)*.14,e.reactor=ds([[4.65,Ze(0,0,.25,0,0)],[5,Ze(0,0,1.18)],[5.5,Ze(0,0,1.22)],[6,Ze(0,0,1.8,0,0)]],i),i<5){const M=oM(i);e.reactor=Ze(0,0,M.reactorScale,0,M.interior)}e.protein=ds([[5.5,Ze(0,.6,.1,0,0)],[6,Ze(0,.6,.92)],[6.5,Ze(0,.6,.95,.12)],[7,Ze(0,0,.15,.2,0)]],i);const n=e.protein[7];e["protein-insulin"]=Ze(-4.8,1.1,.48,-.3+(i-6)*.13,n),e["protein-crambin"]=Ze(4.8,-.6,.48,.3-(i-6)*.1,n),i>7.35&&i<12.38&&(e.vial[7]*=1-En((i-7.35)/.3)),i>=12.38&&(e.vial=ds([[12.38,Ze(0,-1,.8,0,0)],[12.67,Ze(0,-1.15,1.2)],...lc.vial.filter(([M])=>M>=13)],i)),e["payload-case"]=ds([[7.35,Ze(0,1.8,1.6,0,0)],[7.65,Ze(0,1.8,1.6)],[7.95,Ze(1.05,1.5,.85)],[8.25,Ze(1.05,-.05,.67)],[8.4,Ze(1.05,-.12,.62,0,0)],[8.55,Ze(1.05,-.12,.62,0,0)]],i);const s=En((i-7.65)/.25)*(1-En((i-8.38)/.22));e["thor-open"]=[...e.thor],e["thor-open"][7]*=s,e.thor[7]*=1-s;for(const[M,O]of[["fairing-left",-1],["fairing-right",1]]){const I=Li;if(i<I.hold){const L=lM(i);e[M]=Ze(O*L.x,0,I.scale,0,L.alpha)}else e[M]=i<2?ds([[I.hold,Ze(O*I.offset,0,I.scale)],[1.74,Ze(O*.21,3.6,1,0,0)]],i):Ze(O*(.21+vc(i)*3.7),3.65-vc(i)*.8,1.05,-O*vc(i)*.42,En((i-2.98)/.1)*(1-En((i-3.6)/.25)))}const r=ds(lc.recovery,i);e.ship=[...r],e.ship[1]-=2.25,e.helicopter=[...r],e.helicopter[1]+=2.6;const o=.33735294602330657,a=.4529307719111538;e.helicopter[0]=e.thor[0]-(o-.5)*7.7*r[3];const l=En((i-9.72)/.4),c=1-En((i-11.04)/.18),h=En((i-10.83)/.3),u=1.14*(.65+.35*l),d=nM(e.thor),p=(d[0][0]+d[1][0])/2,g=(d[0][1]+d[1][1])/2;e.chute=Ze(p,g+(2.65-1.55*h)*u,u,0,l*c),e.splash=Ze(e.thor[0],e.thor[1]-.22,e.thor[3]/4.5,0,En((i-10.78)/.18)*(1-En((i-11.55)/.45)));const _=e.helicopter[1]-(a-.5)*(7.7*911/2400)*r[3],m=e.thor[1]+.04;e.cable=Ze(e.thor[0],(_+m)/2,Math.max(.01,_-m)/2.8,0,r[7]);const f=e.rocket,E=4.35*f[3];e.flame=Ze(f[0]+Math.sin(f[6])*E,f[1]-Math.cos(f[6])*E,f[3],f[6],f[7]*En((i-1.93)/.16)),e["pad-smoke"]=Ze(0,-4.6,1,0,En((i-1.93)/.13)*(1-En((i-2.2)/.32)));const y=1-En((i-12.4)/.1);for(const M of["thor","thor-open","ship","helicopter","cable","chute","splash"])e[M][7]*=y;return{states:e,heat:i1(i),deployment:t,thorTurn:En((i-8.65)/.9),inflation:l,deflation:h}}const hM={width:2.8,height:1.4},uM={vial:hM},$a=i=>Math.max(0,Math.min(1,i)),Vt=i=>{const e=$a(i);return e*e*(3-2*e)},Xh=[{title:"Start with the structure.",copy:"Protein structures help researchers investigate how molecules interact. Each structure shown here is a different example.",note:"MOLECULAR STRUCTURES AT DIFFERENT SCALES · RCSB PDB 6VSB / 4INS / 1CRN"},{title:"Change the growth conditions.",copy:`Settling and gravity-driven currents can affect crystal growth.
Changing these conditions gives researchers a different process to study.`,note:"SEDIMENTATION + CONVECTION · SCHEMATIC, NOT MOLECULAR DEFORMATION"},{title:"Compare growth in orbit.",copy:`Reduced settling can change crystal growth.
An Earth control helps researchers compare size and uniformity.`,note:"PEMBROLIZUMAB · ISS EXPERIMENT · MORE UNIFORM CRYSTALLINE SUSPENSIONS",source:!0},{title:"Examine the protein.",copy:`Three chains. One molecular assembly.
Examining its structure helps researchers study interactions relevant to disease.`,note:"6VSB · CRYO-EM STRUCTURE · CHAIN A RBD: RESIDUES 319–541"},{title:"From data to a model.",copy:`From diffraction to density to an atomic model.
A structural model helps researchers form ideas that can be tested.`,note:"X-RAY WORKFLOW · SCHEMATIC · INSULIN 4INS · LIGAND IS ILLUSTRATIVE"},{title:"A sample. A next step.",copy:`Crystal size and uniformity matter in formulation research.
Further testing determines whether a result is useful on Earth.`,note:"FORMULATION RESEARCH · OUTCOMES DEPEND ON THE PROTEIN AND PROCESS"}];function dM(i){const e=$a(i)*6,t=Xh.map((r,o)=>Vt((e-o+.14)/.3)*(o===5?1:1-Vt((e-o-.84)/.3))),n=Math.min(5,Math.floor(e)),s=$a(e-n);return{q:e,beat:n,local:s,weights:t,focus:Vt(e/.5),settle:Vt((e-1.1)/.65),order:Vt((e-2.03)/.8),explode:Vt((e-3.08)/.52),pulse:Math.sin(Math.PI*Vt((e-3.55)/.35)),exit:Vt((e-5.72)/.28)}}const Jf=Array.from({length:125},(i,e)=>{const t=e%5-2,n=Math.floor(e/5)%5-2,s=Math.floor(e/25)-2;return{x:t,y:n,z:s,core:Math.max(Math.abs(t),Math.abs(n),Math.abs(s))<=1}}).sort((i,e)=>i.z-e.z),fM={2:[["Watch a crystal begin.","Under selected conditions, molecules gather around a growing nucleus. Microgravity provides a different environment to study this process."],["Compare how it grows.","Compare crystal growth with an Earth control. Size and uniformity depend on the protein and the process."]],3:[["See the whole protein.","The spike protein shown here has three chains. Its structure is one example of how researchers investigate a molecular assembly."],["Examine each chain.","Looking at individual chains helps researchers investigate how the parts of a protein fit together."],["Study the binding domain.","The receptor-binding domain helps the spike engage its receptor. Understanding that interaction can guide research questions."]],4:[["Start with an ordered crystal.","Crystallography uses ordered crystals to investigate molecular structure. This schematic follows an X-ray workflow."],["Capture the diffraction.","Scattered X-rays form a recorded pattern. Researchers use those measurements to investigate the crystal structure."],["Reconstruct the density.","Measurements and phase estimates produce a density map. Researchers fit and refine a model against the data."],["Explore possible interactions.","A structural model can suggest interactions to investigate. Those ideas still need experimental testing."]],5:[["Compare with an Earth control.","Measure crystal size and uniformity. A controlled comparison helps identify which conditions made a difference."],["Explore a formulation.","Study concentration, particle size and flow. Further testing determines whether the material is suitable for a formulation."],["Return for further study.","Prepare the research sample for transport. Analysis and development continue with the teams on Earth."]]};function pM(i){const e=Math.min(5,Math.floor(i)),t=$a(i-e),n=fM[e];if(!n)return{...Xh[e],key:String(e),opacity:1,progress:t};const s=n.length,r=Math.min(s-1,Math.floor(t*s)),o=t*s-r;return{title:n[r][0],copy:n[r][1],key:`${e}-${r}`,progress:o,opacity:Vt(o/.12)*(r===s-1?1:1-Vt((o-.88)/.12))}}const Qf="/astreia-preview/story-2d/",Hn=(i,e="")=>`<img class="${e}" src="${Qf}${i}" alt="" draggable="false" decoding="async">`,bh=(i,e="0 0 1000 650")=>`<svg viewBox="${e}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${i}</svg>`,kd=(i="")=>`<div class="molecule-lattice ${i}">${Jf.map((e,t)=>`<img data-site="${t}" src="${Qf}molecular-ribbons/insulin-lattice.webp" alt="">`).join("")}</div>`;function mM(){return bh(`<g fill="#E8E3D8">${Array.from({length:145},(i,e)=>{const t=1+Math.floor(e/24),n=e*2.399963,s=t*30;return`<circle cx="${500+Math.cos(n)*s}" cy="${325+Math.sin(n)*s}" r="${e%4===0?2.7:1.2}" opacity="${.3+e%7/12}"/>`}).join("")}</g>`)}function gM(i){const e=document.createElement("section");e.className="molecular-story",e.setAttribute("aria-label","Molecular research: from gravity to formulation"),e.hidden=!0,e.innerHTML=`<div class="molecular-art" aria-hidden="true">
 <div class="molecular-beat molecular-intro" data-beat="0"><figure>${Hn("molecular-ribbons/spike.webp","molecular-float")}<figcaption>Spike <small>6VSB</small></figcaption></figure><figure>${Hn("molecular-ribbons/insulin.webp","molecular-float")}<figcaption>Insulin <small>4INS</small></figcaption></figure><figure>${Hn("molecular-ribbons/crambin.webp","molecular-float")}<figcaption>Crambin <small>1CRN</small></figcaption></figure></div>
 <div class="molecular-beat gravity-study" data-beat="1">${Hn("molecular-ribbons/insulin-surface.webp","settling-insulin")}${bh(`<g class="solute">${Array.from({length:28},(k,H)=>`<circle cx="${230+H*137%530}" cy="${180+H*53%265}" r="${H%3===0?2:1}" style="--delay:${-H*.3}s"/>`).join("")}</g>`)} </div>
 <div class="molecular-beat orbit-study" data-beat="2">${kd()}</div>
 <div class="molecular-beat chain-study" data-beat="3"><div class="chain-system">${Hn("molecular-ribbons/spike.webp","chain-whole")}${["B","C","A"].map(k=>Hn(`molecular-ribbons/chain-${k}.webp`,`chain chain-${k}`)).join("")}${Hn("molecular-ribbons/rbd.webp","chain-rbd")}<div class="chain-labels"><span class="label-a">Chain A</span><span class="label-b">Chain B</span><span class="label-c">Chain C</span></div></div></div>
 <div class="molecular-beat pipeline-study" data-beat="4"><figure>${kd("pipeline-lattice")}<figcaption>Crystal</figcaption></figure><figure>${mM()}<figcaption>Diffraction</figcaption></figure><figure><div class="density-study">${Hn("molecular-ribbons/insulin-density.webp")}</div><figcaption>Density map</figcaption></figure><figure><div class="target-study">${Hn("molecular-ribbons/insulin.webp")}${bh('<g stroke="#ff4e29" stroke-width="4" fill="#ff4e29"><path d="M610 250l22-12 22 12v25l-22 12-22-12Z" fill="none"/><path d="M654 250l22-12 20 12M632 287v24"/><circle cx="676" cy="238" r="5"/><circle cx="632" cy="311" r="5"/></g>')}</div><figcaption>Structure</figcaption></figure></div>
 <div class="molecular-beat formulation-study" data-beat="5"><div class="crystal-comparison"><figure>${Hn("bio/crystals-earth.webp")}<figcaption>Earth control</figcaption></figure><figure>${Hn("bio/crystals-microgravity.webp")}<figcaption>Microgravity experiment</figcaption></figure></div><div class="formulation-syringe">${Hn("bio/syringe.webp")}</div>${Hn("bio/vial.webp","formulation-ampoule")}${Hn("bio/payload-case.webp","return-cassette")}<div class="sample-sheen"></div>${Hn("bio/capsule.webp","formulation-capsule")}</div>
 </div><div class="molecular-caption"><h2></h2><p></p></div>`,i.parentElement.append(e);const t=[...e.querySelectorAll("[data-beat]")],n=e.querySelector(".molecular-art"),s=e.querySelector(".molecular-caption"),r=s.querySelector("h2"),o=s.querySelector("p"),a=t[0],l=e.querySelector(".settling-insulin"),c=[...e.querySelectorAll(".chain")],h=e.querySelector(".chain-whole"),u=e.querySelector(".chain-rbd"),d=e.querySelector(".chain-labels"),p=e.querySelector(".formulation-capsule"),g=t[2].querySelector(".molecule-lattice"),_=e.querySelector(".crystal-comparison"),m=e.querySelector(".formulation-syringe"),f=e.querySelector(".formulation-ampoule"),E=e.querySelector(".return-cassette"),y=e.querySelector(".sample-sheen"),M=[...t[2].querySelectorAll("[data-site]")],O=[...t[4].querySelectorAll("[data-site]")],I=[...t[4].children];e.append(p);const L=matchMedia("(prefers-reduced-motion: reduce)");let U=null,K=-1,x=[];const b=k=>{e.hidden||L.matches||(n.style.setProperty("--parallax-x",`${(k.clientX/innerWidth-.5)*8}px`),n.style.setProperty("--parallax-y",`${(k.clientY/innerHeight-.5)*6}px`))};window.addEventListener("pointermove",b,{passive:!0});function G(k,H,ne=!1){k.forEach((q,de)=>{const Y=Jf[de],we=Y.core?Vt(H*3):Vt((H-.34)*2),Te=(Y.x-Y.z*.55)*13.4,ke=(Y.y+Y.z*.4)*13.4;q.style.left=`${50+Te}%`,q.style.top=`${50+ke}%`,q.style.width=`${ne?14:13}%`,q.style.opacity=String(we*(.38+(Y.z+2)*.14)),q.style.transform=`translate(-50%,-50%) scale(${.55+.45*we})`})}return G(O,1,!0),{render(k,H){const ne=k===6||k===7&&H<.5;if(e.hidden=!ne,!ne){K=-1;return}const q=`${k}:${H}:${i.clientWidth}:${i.clientHeight}`;if(K===q)return;K=q;const de=k===7,Y=dM(de?1:H);e.dataset.beat=String(Y.beat),e.style.opacity=String(de?1:Vt(H/.045)),t.forEach((he,se)=>{he.style.opacity=String(de?0:Y.weights[se]),he.style.visibility=!de&&Y.weights[se]>.001?"visible":"hidden"}),a.style.filter=`blur(${(1-Y.focus)*6}px)`,a.style.transform=`scale(${.92+Y.focus*.08})`,l.style.transform=`translate(-50%, -50%) translateY(${Y.settle*50}px) rotate(${-8+Y.settle*8}deg)`,g.style.opacity=String(Vt((Y.q-2.01)/.16)),G(M,Y.order),c.forEach(he=>{const se=he.className.split("chain-")[1],Pe={A:[130,-45],B:[-145,-40],C:[-70,125]}[se];he.style.transform=`translate(${Pe[0]*Y.explode/10}%,${Pe[1]*Y.explode/10}%)`,he.style.opacity=String(Vt(Y.explode*5))}),h.style.opacity=String(1-Vt(Y.explode*5)),u.style.transform=`translate(${13*Y.explode}%,${-4.5*Y.explode}%)`;const we=Vt((Y.q-3.65)/.17);u.style.opacity=String(we*.82),c.forEach(he=>{he.style.opacity=String(Vt(Y.explode*5)*(1-we*.5))}),d.style.opacity=String(Vt((Y.explode-.4)/.6)*(1-we)),I.forEach((he,se)=>{const Pe=(Y.q-4)*4-se,Ee=Vt((Pe+.12)/.25)*(se===3?1:1-Vt((Pe-.88)/.25));he.style.opacity=String(Ee),he.style.visibility=Ee>.001?"visible":"hidden",he.style.transform=`translateY(${(1-Ee)*12}px) scale(${.94+.06*Ee})`});const Te=Vt((Y.q-5.29)/.14),ke=Vt((Y.q-5.54)/.1),st=Vt((Y.q-5.62)/.15),lt=Vt((Y.q-5.82)/.1);_.style.opacity=String(1-Te),_.style.transform=`scale(${1-Te*.08})`,m.style.opacity=String(Te*(1-ke)),m.style.transform=`translateY(${(1-Te)*20}px)`,f.style.opacity=String(Te*(1-ke)),f.style.transform=`translateY(${(1-Te)*18}px)`,E.style.opacity=String(st),E.style.transform=`translate(-50%,-50%) scale(${.9+.1*st})`,y.style.opacity=String(Te*(1-ke));const ce=i.clientWidth,_e=i.clientHeight,Fe=ce<=_e,Ce=Math.min(_e/13.5,ce/16),$e=cM(de?6.5+H:6.5).states.vial,Ye=uM.vial,ht=Ye.width*$e[3]*Ce,At=Ye.height*$e[3]*Ce,gt=ce*(Fe?.92:.9),V=_e*(Fe?.57:.65),Kt=ce*(Fe?.04:.05),ut=_e*(Fe?.13:.12),dt=gt*(Fe?.42:.26),et=dt*Ye.height/Ye.width,vt=Kt+gt*(Fe?.68:.72),nt=ut+V*(Fe?.55:.58),D=de?1:Y.exit,S=(he,se)=>he+(se-he)*D;p.style.width=`${S(dt,ht)}px`,p.style.height=`${S(et,At)}px`,p.style.left=`${S(vt,ce/2+$e[0]*Ce)}px`,p.style.top=`${S(nt,_e/2-$e[1]*Ce)}px`,p.style.transform=`translate(-50%,-50%) rotate(${-$e[6]*180/Math.PI*D}deg)`,p.style.opacity=String(de?1-$e[7]:Y.weights[5]*lt),p.style.visibility=de||Y.weights[5]*lt>.001?"visible":"hidden",t[5].style.opacity=String(de?0:Y.weights[5]*(1-Y.exit));const J=pM(Y.q);J.key!==U&&(U=J.key,x=Kf(r,o,J.title,J.copy)),Zf(x,o,J.progress,[.02,.16],1,L.matches);const oe=Vt(Y.local/.14)*(Y.beat===5?1:1-Vt((Y.local-.86)/.14));s.style.opacity=String(de?0:oe*J.opacity*(1-Y.exit))},destroy(){window.removeEventListener("pointermove",b),e.remove()}}}const _M=`
 <span class="thermal-model-title">THERMAL DIFFUSION<br>MODEL (TDM)</span>
 <math class="thermal-model-equation" xmlns="http://www.w3.org/1998/Math/MathML" display="block" aria-label="p sub i of T equals e to the power z sub i over T, divided by the sum over j of e to the power z sub j over T">
  <mrow>
   <msub><mi>p</mi><mi>i</mi></msub><mo stretchy="false">(</mo><mi>T</mi><mo stretchy="false">)</mo><mo>=</mo>
   <mfrac>
    <msup><mi mathvariant="normal">e</mi><mrow><mo>(</mo><msub><mi>z</mi><mi>i</mi></msub><mo>/</mo><mi>T</mi><mo>)</mo></mrow></msup>
    <mrow><msub><mo>∑</mo><mi>j</mi></msub><msup><mi mathvariant="normal">e</mi><mrow><mo>(</mo><msub><mi>z</mi><mi>j</mi></msub><mo>/</mo><mi>T</mi><mo>)</mo></mrow></msup></mrow>
   </mfrac>
  </mrow>
 </math>`;function vM(i){const e=document.createElement("div");e.className="thermal-scale",e.setAttribute("role","img"),e.setAttribute("aria-label","Thermal view: relative intensity, low to high"),e.innerHTML='<span class="thermal-scale-label thermal-scale-high">HIGH</span><span class="thermal-scale-label thermal-scale-mid">RELATIVE<br>INTENSITY</span><span class="thermal-scale-label thermal-scale-low">LOW</span><span class="thermal-scale-ruler"></span><span class="thermal-scale-spectrum"></span>',i.append(e);const t=n=>{e.style.opacity=String(n),e.setAttribute("aria-hidden",n<.01?"true":"false")};return t(0),{render:t,destroy(){e.remove()}}}const lo=new z;function ri(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;lo.copy(e),lo[n]=0,lo.normalize();const c=.5*o/(o+a),h=1-lo.angleTo(i)/l;return Math.sign(lo[t])===1?h*c:a/(o+a)+c+c*(1-h)}class _r extends It{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new z,l=new z,c=new z(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new z,_=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=ri(g,l,"z","y",r,n),d[f+1]=1-ri(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),d[f+0]=1-ri(g,l,"z","y",r,n),d[f+1]=1-ri(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),d[f+0]=1-ri(g,l,"x","z",r,e),d[f+1]=ri(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-ri(g,l,"x","z",r,e),d[f+1]=1-ri(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-ri(g,l,"x","y",r,e),d[f+1]=1-ri(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),d[f+0]=ri(g,l,"x","y",r,e),d[f+1]=1-ri(g,l,"y","x",r,t);break}}}const zd=i=>{const e=Math.max(0,Math.min(1,i));return e*e*e*(e*(e*6-15)+10)},xM=i=>zd((i-8.72)/.28)*(1-zd((i-9.1)/.32)),yM=(i,e,t)=>i+(e-i)*(1-Math.exp(-t/150)),xc=9.8,Fa=(()=>{const i=[];let e=7;const t=()=>(e=e*16807%2147483647,e/2147483647);for(let n=0;n<20;n++){const s=96*Math.pow(.79,n),r=.2+(t()-.5)*2.1*(n<4?.6:1);i.push([Math.cos(r),Math.sin(r),Math.min(.12,.05+.06*t())*(n<3?.8:1),s])}return i})(),Ea=Fa.filter(i=>i[3]>=14);function MM({sunDir:i,horizon:e,zenith:t}){const r=new wn(4e3,4e3,320,320);r.rotateX(-Math.PI/2);const o={uTime:{value:0},uSun:{value:i.clone()},uHorizon:{value:e.clone()},uZenith:{value:t.clone()},uCell:{value:4e3/320},uDeep:{value:new Xe(70175)},uScatter:{value:new Xe(744810)},uFoamBoost:{value:0},uFoamCenter:{value:new Je},uFoamRadius:{value:0}},a=h=>h.map(u=>{const d=Math.hypot(u[0],u[1]);return`vec4(${(u[0]/d).toFixed(4)},${(u[1]/d).toFixed(4)},${u[2].toFixed(3)},${u[3].toFixed(2)})`}).join(","),l=new on({uniforms:o,vertexShader:`
   uniform float uTime,uCell;varying vec3 vWorld;varying vec2 vRest;varying float vCrest;
   const vec4 W[${Ea.length}]=vec4[](${a(Ea)});
   void main(){
    vec3 p=(modelMatrix*vec4(position,1.)).xyz;vec3 g=p;float crest=0.;
    for(int i=0;i<${Ea.length};i++){
     vec4 w=W[i];float k=6.28318/w.w,c=sqrt(${xc}/k),a=w.z/k;
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
   const vec4 W[${Fa.length}]=vec4[](${a(Fa)});
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
    for(int i=0;i<${Fa.length};i++){
     vec4 w=W[i];float k=6.28318/w.w,c=sqrt(${xc}/k);
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
   }`}),c=new Ae(r,l);return c.frustumCulled=!1,{mesh:c,uniforms:o,follow(h){const u=Math.max(1,h.position.y/30),d=4e3*u/320;c.scale.set(u,1,u),o.uCell.value=d,c.position.set(Math.round(h.position.x/d)*d,0,Math.round(h.position.z/d)*d)},heightAt(h,u,d){let g=h,_=u,m=0;for(let f=0;f<2;f++){let E=0,y=0;m=0;for(const[M,O,I,L]of Ea){const U=Math.hypot(M,O),K=M/U,x=O/U,b=2*Math.PI/L,G=Math.sqrt(xc/b),k=I/b,H=b*(K*g+x*_-G*d),ne=Math.min(1,Math.max(0,(L/12.5-3)/3)),q=ne*ne*(3-2*ne);E+=q*K*k*Math.cos(H),y+=q*x*k*Math.cos(H),m+=q*k*Math.sin(H)}g=h-E,_=u-y}return m}}}const ep=(i,e=0,t=1)=>Math.max(e,Math.min(t,i)),bt=(i,e,t)=>{const n=ep((t-i)/(e-i));return n*n*n*(n*(n*6-15)+10)},pt=(i,e,t)=>i+(e-i)*t,Et=(i,e,t)=>new z(i,e,t);function SM({environment:i,fg:e,bg:t,camera:n,bgCamera:s,tex:r,assets:o,tesseraPivot:a,thorPivot:l,globe:c,earthMat:h,cloudMat:u,skyMat:d,starMat:p,atmoMat:g,R:_,reduced:m}){const f=new Ae(new So(1,64),new sn({color:197636}));f.visible=!1,a.add(f);function E(C){const B=a.userData.hatch;if(!B){f.visible=!1;return}f.position.copy(B).add(Et(0,0,.012)),f.scale.setScalar(Math.max(.001,.42*C)),f.visible=C>.001}const y=(()=>{const B=document.createElement("canvas");B.width=B.height=128;const re=B.getContext("2d"),fe=re.createImageData(128,128),ue=(be,ge)=>{const ye=Math.sin(be*127.1+ge*311.7)*43758.5453;return ye-Math.floor(ye)},Re=(be,ge)=>{const ye=Math.floor(be),He=Math.floor(ge),Le=be-ye,yt=ge-He,tt=Le*Le*(3-2*Le),Nt=yt*yt*(3-2*yt);return(ue(ye,He)*(1-tt)+ue(ye+1,He)*tt)*(1-Nt)+(ue(ye,He+1)*(1-tt)+ue(ye+1,He+1)*tt)*Nt},me=(be,ge)=>{let ye=0,He=.5;for(let Le=0;Le<5;Le++)ye+=He*Re(be,ge),be*=2.1,ge*=2.1,He*=.5;return ye};for(let be=0;be<128;be++)for(let ge=0;ge<128;ge++){const ye=ge/128*2-1,He=be/128*2-1,Le=Math.hypot(ye,He*1.15),yt=Math.max(0,Math.min(1,(1-Le*1.25+(me(ge/14,be/14)-.5)*1.1)*2.2)),tt=.72+.28*(1-be/128)+.08*(me(ge/9+7,be/9)-.5),Nt=(be*128+ge)*4;fe.data[Nt]=255*tt,fe.data[Nt+1]=250*tt,fe.data[Nt+2]=244*Math.min(1,tt+.04),fe.data[Nt+3]=255*yt*yt*(3-2*yt)}re.putImageData(fe,0,0);const pe=new Da(B);return pe.colorSpace=Gt,pe})(),M=[];for(let C=0;C<46;C++){const B=new Ax(new Pf({map:y,color:16775407,transparent:!0,depthWrite:!1,opacity:0,fog:!1,toneMapped:!1}));B.userData={d:2+C*37%60,x:(C*53%100/100-.5)*1.9,y:(C*71%100/100-.5)*1.3,size:3+C*29%14},B.visible=!1,e.add(B),M.push(B)}function O(C){const B=(C-9.4)/.21999999999999886,re=Math.sin(Math.PI*ep(B))**2.2,fe=Et(0,0,-1).applyQuaternion(n.quaternion),ue=Et(1,0,0).applyQuaternion(n.quaternion),Re=Et(0,1,0).applyQuaternion(n.quaternion);for(const me of M){const pe=me.userData.d-B*70;me.visible=B>0&&B<1&&pe>.6,me.visible&&(me.position.copy(n.position).addScaledVector(fe,pe).addScaledVector(ue,me.userData.x*pe).addScaledVector(Re,me.userData.y*pe),me.scale.setScalar(me.userData.size*(.5+pe/30)),me.material.opacity=re*Math.min(1,pe/3)*.9,me.material.rotation=me.userData.x*3)}}const I=new Hh(14674175,0,14,1.6);e.add(I);const L=new ui({color:14674158,roughness:.06,metalness:0,transparent:!0,opacity:.28,clearcoat:1}),U=new Mt({color:2764339,roughness:.36,metalness:.85}),K=new Mt({color:12172996,roughness:.28,metalness:1}),x=new Mt({color:15885098,roughness:.45,metalness:.1});function b(){const C=new $t,B=new Ae(new _r(1.6,.5,1,6,.08),U);C.add(B);const re=new Ae(new _r(1.1,.06,.6,4,.03),L);re.position.y=.26,C.add(re);const fe=new on({uniforms:{phase:{value:0}},transparent:!0,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float phase;varying vec2 vUv;void main(){float w=.55+.45*sin(vUv.x*40.-phase*6.);vec3 c=mix(vec3(.86,.34,.38),vec3(1.,.72,.5),w);gl_FragColor=vec4(c*(.75+.5*w),.95);}"});for(let Re=0;Re<4;Re++){const me=new Ae(new yi(.035,.035,.95,12),fe);me.rotation.z=Math.PI/2,me.position.set(0,.24,-.21+Re*.14),C.add(me)}const ue=new Ae(new It(.18,.08,.5),x);return ue.position.set(.72,.22,0),C.add(ue),C.userData.flow=fe,C}const G=new Er;G.background=new Xe(460808);const k=new uo(10466248,657415,.35);G.add(k);const H=new Eo(16770760,40,20,.55,.7,1.5);H.position.set(-3,4,3),G.add(H,H.target);const ne=new Eo(11060479,30,20,.6,.8,1.5);ne.position.set(3.5,2,-3),G.add(ne,ne.target);const q=b();G.add(q);const de=new vn(30,1,.05,100);G.environment=i,G.environmentIntensity=.5;{const C=new Ae(new So(6,64),new Mt({color:789774,roughness:.32,metalness:.2}));C.rotation.x=-Math.PI/2,C.position.y=-.45,G.add(C)}const Y=new Er;Y.background=new Xe(14672869),Y.fog=new el(14672869,18,70),Y.add(new uo(16777215,9080980,.72));const we=new Fs(16777215,1.6);we.position.set(5,12,7),we.castShadow=!0,we.shadow.mapSize.set(1024,1024),Object.assign(we.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:40}),Y.add(we);const Te=new Ae(new wn(200,200),new Mt({color:11449270,roughness:.14,metalness:.05}));Te.rotation.x=-Math.PI/2,Te.receiveShadow=!0,Y.add(Te);const ke=new sn({color:15909424});for(const C of[-4.2,4.2]){const B=new Ae(new wn(.12,90),ke);B.rotation.x=-Math.PI/2,B.position.set(C,.01,-30),Y.add(B)}const st=new sn({color:new Xe(4,4,3.9),fog:!1}),lt=new vr(new It(1.2,.05,1.2),st,70);let ce=0;const _e=new mt;for(let C=-3;C<=3;C++)for(let B=0;B<10;B++)_e.makeTranslation(C*3.2,8,-B*5+6),lt.setMatrixAt(ce++,_e);Y.add(lt);const Fe=new Mt({color:2051978,roughness:.5,metalness:.4}),Ce=new Mt({color:15890970,roughness:.5,metalness:.3}),$e=new Mt({color:15330542,roughness:.6}),Ye=new vr(new It(.12,7,.12),Fe,32),ht=new vr(new It(.08,.14,5.2),Ce,64),At=new vr(new It(.9,.55,1.1),$e,192);let gt=0,V=0,Kt=0;for(const C of[-8,8])for(let B=0;B<8;B++){const re=-B*5.6;for(const fe of[-.6,.6])_e.makeTranslation(C+fe,3.5,re),Ye.setMatrixAt(gt++,_e);for(let fe=0;fe<4;fe++){const ue=.4+fe*1.7;_e.makeTranslation(C,ue,re),ht.setMatrixAt(V++,_e);for(let Re=0;Re<3;Re++)(B*7+fe*3+Re)%5!==0&&(_e.makeTranslation(C,ue+.36,re-1.6+Re*1.6),At.setMatrixAt(Kt++,_e))}}At.count=Kt,Y.add(Ye,ht,At);const ut=new Ae(new It(14,3.4,.06),L);ut.position.set(0,1.7,-6),Y.add(ut);const dt=new Ae(new It(14,.12,.12),K);dt.position.set(0,3.4,-6),Y.add(dt);const et=new Mt({color:14014940,roughness:.32,metalness:.55}),vt=new $t,nt=new Ae(new _r(2.2,.06,1.1,3,.02),et);nt.position.y=.92,vt.add(nt);const D=nt.clone();D.position.y=.25,vt.add(D);for(const[C,B]of[[-1.02,-.48],[1.02,-.48],[-1.02,.48],[1.02,.48]]){const re=new Ae(new yi(.025,.025,.92,12),et);re.position.set(C,.46,B),vt.add(re)}const S=b();S.scale.setScalar(.7),S.position.y=1.12,vt.add(S),vt.traverse(C=>{C.isMesh&&(C.castShadow=C.receiveShadow=!0)}),Y.add(vt);const J=new vn(32,1,.05,200),oe=new Er;oe.background=new Xe(1708557),oe.add(new uo(16769732,2759957,.42));const he=new Ae(new wn(3.2,4.2),new sn({color:new Xe(1.6,1.45,1.2)}));he.position.set(0,2.4,-3.96),oe.add(he);const se=new Mt({color:3812902,roughness:.8});for(const C of[-.53,.53]){const B=new Ae(new It(.06,4.2,.06),se);B.position.set(C,2.4,-3.92),oe.add(B)}{const C=new Ae(new It(3.2,.06,.06),se);C.position.set(0,2.9,-3.92),oe.add(C)}const Pe=new Mt({color:13481888,roughness:.9}),Ee=new Ae(new It(10,6,10),Pe);Ee.material.side=An,Ee.position.set(0,3,1),Ee.receiveShadow=!0,oe.add(Ee);const Me=new Fs(16766630,3.2);Me.position.set(.6,3.6,-6),Me.castShadow=!0,Me.shadow.mapSize.set(1024,1024),Object.assign(Me.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:1,far:20}),oe.add(Me,Me.target);const ft=new Ae(new It(1.2,.7,.7),new Mt({color:15328476,roughness:.6}));ft.position.set(.9,.35,-1.2),oe.add(ft);const Se=new $t,Ve=new Ae(new yi(.07,.07,.26,32),L);Se.add(Ve);const Qe=new Ae(new yi(.062,.062,.16,32),new Mt({color:15976870,roughness:.2,transparent:!0,opacity:.85}));Qe.position.y=-.04,Se.add(Qe);const rt=new Ae(new yi(.075,.075,.06,32),x);rt.position.y=.16,Se.add(rt),Se.position.set(.75,.83,-1.15),oe.add(Se);const Ne=new $t,_t=new Mt({color:15986664,roughness:.9}),it=new Ae(new _r(2.1,.35,1.1,4,.12),_t);it.position.y=.75,Ne.add(it);const St=new Ae(new _r(.5,.16,.8,4,.07),_t);St.position.set(-.75,1,0),Ne.add(St);const $=new Ae(new _r(1.3,.08,1.16,3,.04),new Mt({color:10466500,roughness:.95}));$.position.set(.35,.95,0),Ne.add($);const Oe=new Ae(new It(2.2,.08,1.2),new Mt({color:12172996,roughness:.4,metalness:.7}));Oe.position.y=.55,Ne.add(Oe),Ne.position.set(-1.1,0,-1.9),Ne.rotation.y=.05,oe.add(Ne);const ae=new Ae(new wn(1.1,4.4,24,1),new Mt({color:15722200,roughness:.95,side:Tn}));{const C=ae.geometry.attributes.position;for(let B=0;B<C.count;B++)C.setZ(B,Math.sin(C.getX(B)*14)*.06);ae.geometry.computeVertexNormals()}ae.position.set(2.1,2.4,-3.85),oe.add(ae);const ve=new sn({color:16769976,transparent:!0,opacity:.045,blending:Di,depthWrite:!1,side:Tn});for(let C=0;C<3;C++){const B=new Ae(new wn(1,6),ve);B.position.set(-.9+C*.9,2.1,-2.2),B.rotation.set(-.75,0,.05*C),oe.add(B)}const Ie=new Ae(new yi(.18,.14,.32,24),new Mt({color:15195599,roughness:.7}));Ie.position.set(1.35,.86,-1.3),oe.add(Ie);for(let C=0;C<7;C++){const B=new Ae(new ps(.12,10,8),new Mt({color:5995850,roughness:.8}));B.scale.set(.45,1.1,.18),B.position.set(1.35+Math.sin(C*2.1)*.1,1.12+C*.03,-1.3+Math.cos(C*2.1)*.1),B.rotation.z=Math.sin(C)*.6,oe.add(B)}oe.traverse(C=>{C.isMesh&&C!==he&&(C.castShadow=C.receiveShadow=!0)});const Be=new vn(34,1,.05,100);oe.environment=i,oe.environmentIntensity=.85;const ot=new $t;ot.visible=!1,e.add(ot);const Ot=new z(-.82,.2,-.54).normalize(),Xt=new Xe(1.02,.8,.62),xt=new Xe(.16,.34,.62),Lt=MM({sunDir:Ot,horizon:Xt,zenith:xt});ot.add(Lt.mesh);const Zt=new Fs(16768180,3.2);Zt.castShadow=!0,Zt.shadow.mapSize.set(1024,1024),Object.assign(Zt.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:400}),ot.add(Zt,Zt.target);const Xn=new sn({transparent:!0,depthWrite:!1,opacity:0,fog:!1});r.load("/astreia-preview/story-2d/descent/cloud-bank.webp",C=>{C.colorSpace=Gt,Xn.map=C,Xn.needsUpdate=!0});const Ln=[];for(let C=0;C<8;C++){const B=new Ae(new wn(180,42),Xn);B.userData.seed=C,ot.add(B),Ln.push(B)}const In=480,di=new Qt,qt=new Float32Array(In*3),ei=[];for(let C=0;C<In;C++){const B=Math.random()*Math.PI*2,re=Math.random();ei.push([Math.cos(B)*(2+8*re),5+11*Math.random()*(1-re*.6),Math.sin(B)*(2+8*re)])}di.setAttribute("position",new Rn(qt,3));const Ct=(()=>{const C=document.createElement("canvas");C.width=C.height=64;const B=C.getContext("2d"),re=B.createRadialGradient(32,32,0,32,32,32);return re.addColorStop(0,"rgba(255,255,255,1)"),re.addColorStop(.45,"rgba(255,255,255,.55)"),re.addColorStop(1,"rgba(255,255,255,0)"),B.fillStyle=re,B.fillRect(0,0,64,64),new Da(C)})(),un=new il({color:15922679,size:.55,map:Ct,transparent:!0,opacity:0,depthWrite:!1}),Mn=new Xa(di,un);Mn.frustumCulled=!1,ot.add(Mn),ot.add(new uo(12572415,731712,.7));const en=new $t;e.add(en),en.visible=!1;const F={value:0};function R(C){const B=C.clone();return B.onBeforeCompile=re=>{re.uniforms.uHeat=F,re.vertexShader=re.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLocal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLocal=position;`),re.fragmentShader=re.fragmentShader.replace("#include <common>",`#include <common>
uniform float uHeat;varying vec3 vLocal;
vec3 heatRamp(float x){vec3 a=vec3(.16,.04,.26),b=vec3(.52,.08,.55),c=vec3(.93,.29,.2),d=vec3(1.,.8,.2),e=vec3(1.,.98,.85);return x<.25?mix(a,b,x/.25):x<.5?mix(b,c,(x-.25)/.25):x<.75?mix(c,d,(x-.5)/.25):mix(d,e,(x-.75)/.25);}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
float field=clamp(1.-(vLocal.x+1.55)/3.1,0.,1.);field=pow(field,1.4)*.85+.15;
gl_FragColor.rgb=mix(gl_FragColor.rgb,heatRamp(field),uHeat);`)},B.customProgramCacheKey=()=>"thermal",B}let X=!1;function j(){if(X||!o.thor)return;X=!0;const C=o.thor.clone(!0);C.traverse(B=>{B.isMesh&&(B.material=R(B.material),B.castShadow=!0)}),C.rotation.set(0,0,0),C.position.set(0,0,0),C.scale.setScalar(1.6),en.add(C)}const v=new sn({color:new Xe(1,.42,.26),transparent:!0,blending:Di,depthWrite:!1,opacity:0,side:Tn});r.load("/astreia-preview/story-2d/thermal-scene/plasma-volume-v3.webp",C=>{C.colorSpace=Gt,C.repeat.set(1/4,1/6),v.map=C,v.needsUpdate=!0});const w=new Ae(new wn(1,1),v);en.add(w);const T=new $t;ot.add(T);{const C=new wn(22,6,44,6);C.rotateX(-Math.PI/2);const B=C.attributes.position,re=[];for(let me=0;me<B.count;me++){const pe=B.getX(me),be=B.getZ(me);B.setY(me,2.6*(1-(pe/11)**2)+.35*Math.cos(be/3*Math.PI/2));const ge=Math.min(10,Math.floor((pe+11)/22*11)),ye=Math.abs((pe+11)/2%1-.5)<.04,He=ge<=0||ge>=10?[.15,.17,.19]:ge===1||ge===9?[.95,.38,.14]:[.94,.93,.89];re.push(...He.map(Le=>ye?Le*.8:Le))}C.computeVertexNormals(),C.setAttribute("color",new Ft(re,3));const fe=new Ae(C,new ui({vertexColors:!0,roughness:.62,sheen:.6,sheenRoughness:.5,sheenColor:new Xe(1,.95,.9),side:Tn}));fe.position.y=12,fe.castShadow=!0,T.add(fe);const ue=[];for(let me=0;me<=20;me++){const pe=-10+me,be=12+2.6*(1-(pe/11)**2);for(const ge of[-2.6,2.6])ue.push(pe,be,ge,pe*.04,0,ge*.05)}const Re=new Df(new Qt().setAttribute("position",new Ft(ue,3)),new Va({color:7236454,transparent:!0,opacity:.22}));T.add(Re)}const N=(()=>{const C=document.createElement("canvas");C.width=C.height=256;const B=C.getContext("2d"),re=B.createRadialGradient(128,128,40,128,128,128);re.addColorStop(0,"rgba(255,255,255,0)"),re.addColorStop(.55,"rgba(255,255,255,.9)"),re.addColorStop(.75,"rgba(255,255,255,.35)"),re.addColorStop(1,"rgba(255,255,255,0)"),B.fillStyle=re,B.fillRect(0,0,256,256);for(let ue=0;ue<900;ue++){const Re=Math.random()*Math.PI*2,me=60+Math.random()*60;B.fillStyle=`rgba(255,255,255,${Math.random()*.5})`,B.beginPath(),B.arc(128+Math.cos(Re)*me,128+Math.sin(Re)*me,Math.random()*3,0,7),B.fill()}const fe=new Da(C);return fe.colorSpace=Gt,fe})(),A=new Ae(new wn(1,1),new sn({map:N,transparent:!0,depthWrite:!1,opacity:0}));A.rotation.x=-Math.PI/2,A.position.y=.15,ot.add(A);const W=new $t;ot.add(W);{const C=new Ae(new It(40,3,16),new Mt({color:2041389,roughness:.42,metalness:.35}));C.position.y=.6,W.add(C);const B=new Ae(new It(39,.2,15.2),new Mt({color:3883077,roughness:.85}));B.position.y=2.2,W.add(B);const re=new Ae(new sl(4.2,4.6,64),new sn({color:15987178}));re.rotation.x=-Math.PI/2,re.position.y=2.32,W.add(re);for(const be of[-16,16]){const ge=new Ae(new It(5,3.2,5.5),new Mt({color:14277851,roughness:.5}));ge.position.set(be,3.9,4.5),W.add(ge)}const fe=new Mt({color:15885098,roughness:.45,metalness:.3}),ue=new Ae(new yi(.5,.6,7,16),fe);ue.position.set(-12,5.7,-5),W.add(ue);const Re=new Ae(new It(14,.6,.6),fe);Re.position.set(-6,9,-5),Re.rotation.z=.32,W.add(Re),[3104138,9058858,13157046,3104138].forEach((be,ge)=>{const ye=new Ae(new It(6,2.6,2.5),new Mt({color:be,roughness:.6,metalness:.3}));ye.position.set(10+ge%2*6.2,3.6+Math.floor(ge/2)*2.62,-5),W.add(ye)});const pe=new Mt({color:14277076,roughness:.4,metalness:.6});for(const be of[-7.6,7.6]){const ge=new Ae(new It(38,.08,.08),pe);ge.position.set(0,3.3,be),W.add(ge);const ye=new vr(new It(.08,1.1,.08),pe,20);for(let He=0;He<20;He++){const Le=new mt().makeTranslation(-19+He*2,2.8,be);ye.setMatrixAt(He,Le)}W.add(ye)}W.traverse(be=>{be.isMesh&&(be.castShadow=be.receiveShadow=!0)})}W.position.set(-46,0,10);const Q=new $t;ot.add(Q);const ee=new $t;let te=!1;const le=new nl(new Qt().setFromPoints([Et(0,0,0),Et(0,-1,0)]),new Va({color:1119512}));return ot.add(le),{bio:G,bioCam:de,lab:Y,labCam:J,care:oe,careCam:Be,idle(){I.intensity=0},prepare(){if(j(),!te&&o.helicopter){te=!0;const C=o.helicopter;C.scale.setScalar(1),Q.add(C);const B=[];C.traverse(fe=>{fe.isMesh&&/^blade\d/.test(fe.name)&&B.push(fe)});const re=C.getObjectByName("rotorcap");if(re&&B.length){const fe=new Gn().setFromObject(re).getCenter(Et(0,0,0));C.worldToLocal(fe),ee.position.copy(fe),C.add(ee);for(const ue of B)ue.getWorldPosition(Et(0,0,0)),ee.attach(ue)}C.traverse(fe=>{fe.isMesh&&(fe.castShadow=!0)})}},pose(C,B,re,fe){const ue={scene:"world",fade:0,fadeColor:"#000",heat:0},Re=q.userData.flow;if(Re.uniforms.phase.value=m?C*4:C*4+B*.6,S.userData.flow.uniforms.phase.value=Re.uniforms.phase.value,C<5){const ye=a.userData.hatch||Et(0,0,.8),He=a.localToWorld(ye.clone()),Le=Et(0,0,1).applyQuaternion(a.quaternion).normalize(),yt=bt(4.5,4.75,C),tt=bt(4.7,4.995,C),Nt=He.clone().addScaledVector(Le,pt(9,.22,tt));return E(bt(4.72,4.92,C)),n.position.lerp(Nt,yt),n.up.set(0,1,0),n.lookAt(He),n.fov=fe.fov,n.updateProjectionMatrix(),I.position.copy(n.position),I.intensity=5*yt,ue}n.fov=fe.fov,n.updateProjectionMatrix(),I.intensity=0,f.visible=!1;for(const ye of M)ye.visible=!1;if(C<7.5){ue.scene="bio";const ye=bt(5,5.3,C)*(1-bt(7.36,7.5,C));H.intensity=40*ye,ne.intensity=30*ye,k.intensity=.35*ye;const He=pt(-.5,.6,bt(5,7.4,C));q.rotation.set(.12,He,0);const Le=bt(5.45,5.6,C)*(1-bt(6.95,7.05,C));return q.visible=Le<.999,de.position.set(Math.sin(He*.3)*3.2,1.7+pt(0,-.3,bt(6.9,7.4,C)),pt(9,4.4,bt(5,5.45,C))*(1-.1*bt(6.9,7.4,C))*pt(1,.35,bt(7.36,7.5,C))),de.lookAt(0,.1,0),H.target.position.set(0,0,0),ne.target.position.set(0,0,0),ue.bioDim=Le,ue}if(C<8.5){const ye=bt(7.5,7.72,C),He=a.localToWorld((a.userData.hatch||Et(0,0,.8)).clone()),Le=Et(0,0,1).applyQuaternion(a.quaternion).normalize();E(1-bt(7.6,7.72,C));const yt=bt(7.7,8.1,C),tt=bt(8.15,8.35,C),Nt=He.clone().addScaledVector(Le,.2),an=l.localToWorld(Et(1.4,0,.3));q.visible=!1,ue.transfer={from:Nt,to:an,move:yt},l.position.addScaledVector(Et(Math.cos(-.52),Math.sin(-.52),0),tt*1.6);const Bt=a.position.clone().add(Et(1.1,-.9,.8)),ln=Bt.clone().add(Et(pt(3,5,tt),pt(2.2,3.2,tt),pt(8.5,11,tt))),qn=He.clone().addScaledVector(Le,.22);return n.position.copy(qn.lerp(ln,ye)),n.lookAt(He.clone().lerp(Bt,ye)),ue}if(C<9.5){j(),l.visible=!1,a.visible=!1,en.visible=!0,ot.visible=!1;const ye=bt(8.5,9.5,C),He=Math.sin(ye*Math.PI*1.6)*.35;en.position.copy(a.position).add(Et(0,-30*ye,0)),en.rotation.set(-.25+He*.3,.4,-.38+He),n.position.copy(en.position).add(Et(-3.5,4.2,10.5)),n.lookAt(en.position);const Le=xM(C);ue.heat=m?Le:yM(fe.heat,Le,re),F.value=ue.heat;const yt=en.worldToLocal(n.position.clone()),tt=m?1:.85+.3*ue.heat;w.rotation.set(Math.atan2(-yt.y,yt.z),0,He*.06),w.scale.set(9*tt,3.4,1),w.position.set(-3.3+4.5*tt,0,0),v.opacity=ue.heat;const Nt=Math.floor(((m?0:B*10)+C*56)%24);return v.map&&v.map.offset.set(Nt%4/4,1-(Math.floor(Nt/4)+1)/6),s.position.set(0,_+pt(420,150,ye)+.05,0),g.uniforms.strength.value=1.6+.25*ue.heat,h.color.setRGB(pt(1,.34,ue.heat),pt(1,.42,ue.heat),pt(1,.72,ue.heat)),u.color.setRGB(pt(1,.3,ue.heat),pt(1,.34,ue.heat),pt(1,.48,ue.heat)),ue.exposure=pt(1,.8,ue.heat),O(C),ue}if(h.color.setRGB(1,1,1),u.color.setRGB(1,1,1),F.value=0,v.opacity=0,C<12.5){j(),ue.scene="sea",l.visible=!1,a.visible=!1,en.visible=!0,ot.visible=!0,c.visible=!1,p.opacity=0,d.uniforms.space.value=0,d.uniforms.studio.value=0,d.uniforms.hor.value.copy(Xt),d.uniforms.zen.value.copy(xt),d.uniforms.sunDir.value=Ot,s.position.set(0,_+.4,0),d.uniforms.sea.value=1;const ye=m?C*6:B,He=bt(9.5,10.8,C),Le=bt(10.76,10.82,C);Lt.uniforms.uTime.value=ye;const yt=Math.pow(1-He,1.7),tt=bt(12,12.3,C),Nt=bt(12.3,12.45,C),an=Et(pt(-80,-34,bt(11.35,11.9,C)),0,26);W.position.set(an.x,Lt.heightAt(an.x,an.z,ye)*.3-.2,an.z),W.rotation.y=.25;let Bt=pt(0,140,yt),ln=pt(0,-60,yt),qn=1500*yt;const jn=Lt.heightAt(Bt,ln,ye),Kn=(m?0:Math.sin(B*1.25))*.13*(1-Le)+(1-He)*0;let Yt=jn+.3;Le>0&&(qn=pt(qn,Yt,Le));const Fn=pt(Bt,an.x,tt),On=pt(ln,an.z,tt),wi=pt(qn,pt(18,3.2,Nt),tt);en.position.set(Fn,wi,On);const rl=Lt.heightAt(Fn+2,On,ye)-Lt.heightAt(Fn-2,On,ye),ol=Lt.heightAt(Fn,On+2,ye)-Lt.heightAt(Fn,On-2,ye);en.rotation.set(pt(Kn*.6,ol*.18,Le)*(1-tt),.5,pt(Kn,-rl*.18,Le)*(1-tt));const Gr=bt(9.5,9.66,C),ti=bt(10.84,11.25,C),al=m?0:Math.sin(B*2.1)*.03,rn=bt(10.95,11.15,C);T.visible=Gr>.001&&rn<.999,T.position.set(Bt-pt(0,14,ti),pt(qn,jn-.6*rn,ti),ln-pt(0,10,ti)),T.rotation.set(0,.5,pt(Kn*.5,0,Le)+ti*.25),T.scale.set(.35+.65*Gr,Math.max(.06,(1+al)*(1-.9*ti)),.5+.5*Gr),T.traverse(Bn=>{Bn.material&&(Bn.material.transparent=!0,Bn.material.opacity=Bn.isLineSegments?.22*(1-Le):(1-ti*.5)*(1-rn))});for(const Bn of Ln)Bn.visible=!1;const _n=Math.max(0,(C-10.78)*5.5);if(Mn.visible=_n>0&&_n<2.2,un.opacity=.9*(1-bt(.8,2.2,_n)),Mn.visible){const Bn=qt;for(let cn=0;cn<In;cn++){const Vs=ei[cn];Bn[cn*3]=Bt+Vs[0]*_n,Bn[cn*3+1]=Math.max(jn,Yt+Vs[1]*_n-4.9*_n*_n),Bn[cn*3+2]=ln+Vs[2]*_n}di.attributes.position.needsUpdate=!0}const Wr=bt(10.78,11.6,C);Lt.uniforms.uFoamCenter.value.set(Bt,ln),Lt.uniforms.uFoamRadius.value=Wr>0?4+16*Wr:0,Lt.uniforms.uFoamBoost.value=1-Wr*.7;const Zn=bt(11.45,11.85,C),Jt=Et(pt(160,Fn,Zn),pt(80,wi+24,Zn),pt(-90,On,Zn));Q.visible=C>11.4,Q.position.copy(Jt),Q.rotation.set(0,pt(2.4,1.7,Zn),pt(-.15,0,Zn)),ee.rotation.y=m?C*40:B*28;const Xr=bt(11.85,11.98,C)*(1-bt(12.42,12.5,C));le.visible=Q.visible&&Xr>.01;const vs=Q.position.clone().add(Et(0,-1.2,0)),qr=vs.clone().lerp(en.position.clone().add(Et(0,.6,0)),Xr);le.geometry.setFromPoints([vs,qr]);const zs=Et((Fn+an.x+Jt.x)/3,(wi+3+Jt.y)/3+2,(On+an.z+Jt.z)/3),Co=n.aspect<1?68:46,zi=n.aspect<1?0:7,Hs=Et(Bt+6,qn+10,ln+Co),xs=Et(Bt+20,jn+8,ln+22),ys=zs.clone().add(Et(34,20,62)),Po=Hs.clone().lerp(xs,bt(10.55,10.85,C)).lerp(ys,bt(11.25,11.75,C)),Ms=Et(Bt-zi*.99,qn+5-zi*.2,ln+zi*.15).lerp(Et(Bt,jn+.5,ln),bt(10.55,10.85,C)).lerp(zs,bt(11.25,11.75,C));n.position.copy(Po),n.lookAt(Ms),s.quaternion.copy(n.quaternion),Lt.follow(n),Zt.target.position.copy(Ms),Zt.position.copy(Ms).addScaledVector(Ot,120),O(C);const Yr=bt(12.3,12.5,C);if(Yr>0){const Bn=en.position.clone().add(Et(0,.55,0));n.position.lerp(Bn.clone().add(Et(.4,pt(12,.18,Yr),.6)),Yr),n.lookAt(Bn)}return ue}if(C<13.5){ue.scene="lab";const ye=bt(12.5,13.5,C),He=bt(12.5,12.78,C),Le=bt(13.22,13.5,C),yt=Et(0,1.12,0),tt=Et(pt(6.5,3.6,ye),pt(3.4,2.3,ye),pt(10,5.6,ye)),Nt=yt.clone().add(Et(0,.02,.5)).lerp(tt,He),an=yt.clone().lerp(Et(0,1,-1),He);return J.position.copy(Nt.lerp(Et(0,7.55,1.05),Le)),J.lookAt(an.lerp(Et(0,8,1),Le)),S.rotation.y=pt(-.4,.3,ye),ue}ue.scene="care";const me=bt(13.5,14.4,C),pe=bt(13.5,13.8,C),be=Et(pt(3.4,2.4,me),pt(1.9,1.5,me),pt(3.6,2,me)),ge=Et(pt(0,.5,me),pt(1.4,1.1,me),-2.2);return Be.position.copy(Et(.1,2.5,-3.62).lerp(be,pe)),Be.lookAt(Et(0,2.45,-3.96).lerp(ge,pe)),Me.target.position.set(.8,.8,-1.2),ue},cassette:b,thorFree:en,ocean:ot,heli:Q}}function Hd(){var s;const i=document.querySelector(".proto-stage"),e=document.querySelector(".proto-track");(s=document.querySelector(".proto-loader"))==null||s.remove(),document.body.classList.add("is-styled","mission-static");const t=document.createElement("div");t.className="static-mission";const n=["hangar","integration","cape","orbit","orbit","bio-black","bio-black","bio-black","orbit","orbit","ocean","ocean","ocean","warehouse","hospital-happy"];for(const[r,o]of zf.entries()){const a=document.createElement("section");a.id=o.id;const l=document.createElement("img");l.src=r===0?"/astreia-preview/prototype/hero-poster/landscape.webp":`/astreia-preview/story-2d/plate-${n[r]}.webp`,l.alt="",l.loading=r===0?"eager":"lazy",l.decoding="async",n[r]!=="bio-black"&&a.append(l);const c=document.createElement("div");c.className="static-mission-copy";const h=document.createElement("p");h.className="pc-kicker",h.textContent=`${String(r+1).padStart(2,"0")} / 15 · ${o.label}`;const u=document.createElement(r===0?"h1":"h2");u.textContent=o.title.replace(/<br\s*\/?>/g," ");const d=document.createElement("p");if(d.textContent=o.copy,c.append(h,u,d),r===6)for(const p of Xh){const g=document.createElement("h3"),_=document.createElement("p"),m=document.createElement("small");g.textContent=p.title,_.textContent=p.copy,m.textContent=p.note,c.append(g,_,m)}a.append(c),t.append(a)}return i.replaceWith(t),e.remove(),document.querySelectorAll("[data-reveal]").forEach(r=>r.classList.add("is-in")),{navigationBoundary(){const r=document.getElementById("site-footer");return r?r.getBoundingClientRect().top+scrollY-innerHeight:1/0},scrollTo(r){window.scrollTo(0,r)},goHash(r){const o=r==="#constellation"?"factory":r.slice(1),a=t.querySelector(`[id="${CSS.escape(o)}"]`);return a?(window.scrollTo(0,a.getBoundingClientRect().top+scrollY),!0):!1},destroy(){document.body.classList.remove("mission-static")}}}const Vd=zf.map((i,e)=>e>=5&&Mh[e]?{...i,...Mh[e],id:i.id}:i),yc={},Mc={},bM=i=>i===0?0:i===14?.96:i===6?.075:.73;function TM(){const i=new AbortController,{signal:e}=i;let t=!1,n=0;document.body.classList.add("is-styled");const s=new URLSearchParams(location.search).has("focus")?2:0,r=s?Ya.slice(0,s):Ya,o=r.reduce((P,Z)=>P+Z.length,0);s&&document.documentElement.classList.add("is-focus");const a=(P,Z=0,ie=1)=>Math.max(Z,Math.min(ie,P)),l=(P,Z,ie)=>{const xe=a((ie-P)/(Z-P));return xe*xe*xe*(xe*(xe*6-15)+10)},c=(P,Z,ie)=>P+(Z-P)*ie,h=54.5,u=matchMedia("(prefers-reduced-motion: reduce)").matches||new URLSearchParams(location.search).get("motion")==="reduce";if(u)return Hd();document.documentElement.style.setProperty("--act-length",o);const d=document.querySelector(".proto-canvas"),p=document.querySelector(".proto-stage");let g;try{g=new Tx({canvas:d,antialias:!0,powerPreference:"high-performance"})}catch{return ap()}g.outputColorSpace=Gt,g.toneMapping=wh,g.toneMappingExposure=1,g.autoClear=!1,g.shadowMap.enabled=!0,g.shadowMap.type=Wd;const _=Math.min(devicePixelRatio||1,1.75);let m=Math.min(_,1.5);const f=new Er,E=new Er,y=new vn(32,1,.1,6e3),M=new vn(32,1,1,4e5),O=new lh(g),I=O.fromScene(new Yy,.04).texture;f.environment=I,f.environmentIntensity=.55;const L=new z(-1,.12,-.55).normalize(),U=new Fs(16773600,3.2);U.position.copy(L).multiplyScalar(200),f.add(U,U.target),U.castShadow=!0,U.shadow.mapSize.set(1024,1024),U.shadow.bias=-4e-4,U.shadow.normalBias=.02,Object.assign(U.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:60});const K=new uo(10467544,1709072,.45);f.add(K);const x=new Fs(7315414,0);x.position.set(.2,-1,.3),f.add(x,x.target);const b=new Eo(16771276,900,60,.5,.6,1.6);f.add(b,b.target);const G=new Eo(12374783,700,60,.55,.7,1.6);f.add(G,G.target);const k=new $t;f.add(k);const H=P=>P,ne=H(new Mt({color:2895408,roughness:.24,metalness:.15})),q=new Ae(new wn(84,84),ne);q.rotation.x=-Math.PI/2,q.position.y=.05,q.receiveShadow=!0,k.add(q);const de=H(new sn({color:14206090}));for(const[P,Z,ie,xe]of[[30,.15,0,13],[30,.15,0,-13],[.15,26,15,0],[.15,26,-15,0]]){const Ue=new Ae(new wn(P,Z),de);Ue.rotation.x=-Math.PI/2,Ue.position.set(ie,.07,xe),k.add(Ue)}const Y=H(new Mt({color:1382170,roughness:.28,metalness:.6})),we=new Ae(new sl(3.4,13,64),Y);we.rotation.x=-Math.PI/2,we.position.y=h-2.6,we.receiveShadow=!0,k.add(we);const Te=H(new Mt({color:2764080,roughness:.45,metalness:.7})),ke=new Ae(new kh(13,.06,8,96),Te);ke.rotation.x=Math.PI/2,ke.position.y=h-1.5,k.add(ke);const st=H(new Mt({color:3422010,roughness:.75,metalness:.25}));for(const P of[-42,42]){const Z=new Ae(new It(1,92,84),st);Z.position.set(P,46,0),k.add(Z)}const lt=new Ae(new It(84,1,84),st);lt.position.y=92,k.add(lt);const ce=H(new sn({color:16774370}));for(let P=-3;P<=3;P++){const Z=new Ae(new It(.6,.15,76),ce);Z.position.set(P*11,91.3,0),k.add(Z)}const _e=H(new Mt({color:6171148,roughness:.5,metalness:.6}));for(const P of[-30,30])for(let Z=-3;Z<=3;Z++){const ie=new Ae(new It(.7,90,.7),_e);ie.position.set(P,45,Z*11),k.add(ie)}for(const P of[-30,30])for(let Z=10;Z<90;Z+=12){const ie=new Ae(new It(.5,.5,68),_e);ie.position.set(P,Z,0),k.add(ie)}const Fe=H(new Mt({color:2500908,roughness:.6,metalness:.3})),Ce=new Ae(new It(42,92,1),Fe),$e=Ce.clone();Ce.position.set(-21,46,-42),$e.position.set(21,46,-42),k.add(Ce,$e),k.traverse(P=>{P.isMesh&&(P.receiveShadow=!0)});const Ye=new Ae(new So(4e3,64),new Mt({color:1775378,roughness:1,transparent:!0}));Ye.rotation.x=-Math.PI/2,f.add(Ye);const ht=new $t,At=new Mt({color:2237994,roughness:.6,metalness:.5});for(const[P,Z]of[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]]){const ie=new Ae(new It(.5,72,.5),At);ie.position.set(P,36,Z),ht.add(ie)}for(let P=6;P<72;P+=6){const Z=new Ae(new It(3.7,.3,3.7),At);Z.position.y=P,ht.add(Z)}ht.position.set(-10,0,-3),f.add(ht);const gt=new Ae(new yi(9,10,1.2,48),new Mt({color:3420460,roughness:.9}));gt.position.y=.6,f.add(gt),f.fog=new el(14261100,200,2600);const V=new on({side:An,depthWrite:!1,uniforms:{sunDir:{value:L},space:{value:0},studio:{value:1},env:{value:null},envMix:{value:0},envRot:{value:3.4906585},envFlip:{value:1},sea:{value:0},hor:{value:new Xe(.98,.58,.34)},zen:{value:new Xe(.07,.16,.32)}},vertexShader:"varying vec3 vDir;void main(){vDir=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 sunDir,hor,zen;uniform float space,studio,envMix,envRot,envFlip,sea;uniform sampler2D env;varying vec3 vDir;
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
  c=mix(c,vec3(.02,.025,.03),studio);gl_FragColor=vec4(c,1.);}`}),Kt=new Ae(new ps(3e5,48,24),V);E.add(Kt),new Wy().load("/astreia-preview/prototype/textures/sky-dawn-1k.hdr",P=>{P.colorSpace=gn,P.minFilter=pn,V.uniforms.env.value=P,is=""});const ut=new Qt,dt=new Qt,et=[],vt=[],nt=[],D=[];let S=7;const J=()=>(S=S*16807%2147483647)/2147483647,oe=P=>P<.2?[.72,.8,1]:P<.75?[1,.97,.92]:[1,.82,.62];for(let P=0;P<4200;P++){const Z=J()*2-1,ie=J()*Math.PI*2,xe=Math.sqrt(1-Z*Z),Ue=J()**3,je=P<260,[Ke,Rt,at]=oe(J()),De=je?.65+.35*J():.18+.7*Ue;(je?nt:et).push(xe*Math.cos(ie)*2e5,Z*2e5,xe*Math.sin(ie)*2e5),(je?D:vt).push(Ke*De,Rt*De,at*De)}ut.setAttribute("position",new Ft(et,3)),ut.setAttribute("color",new Ft(vt,3)),dt.setAttribute("position",new Ft(nt,3)),dt.setAttribute("color",new Ft(D,3));const he=new il({color:16777215,vertexColors:!0,size:1.2,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1}),se=he.clone();se.size=2.1,E.add(new Xa(ut,he),new Xa(dt,se));const Pe=6371,Ee=new Ff,Me=new Mt({roughness:.7,metalness:0,transparent:!0,opacity:0,emissive:new Xe(0,0,0)}),ft=new Mt({color:16777215,transparent:!0,opacity:0,depthWrite:!1,roughness:1,emissive:new Xe(9082534),emissiveIntensity:.25}),Se=new Ae(new ps(Pe,128,64),Me),Ve=new Ae(new ps(Pe+12,128,64),ft),Qe=new on({transparent:!0,blending:Di,depthWrite:!1,side:An,uniforms:{sunDir:{value:L},strength:{value:0}},vertexShader:"varying vec3 vN;varying vec3 vP;varying vec3 vW;void main(){vN=normalize(normalMatrix*normal);vW=normalize(mat3(modelMatrix)*normal);vec4 p=modelViewMatrix*vec4(position,1.);vP=p.xyz;gl_Position=projectionMatrix*p;}",fragmentShader:`uniform vec3 sunDir;uniform float strength;varying vec3 vN;varying vec3 vP;varying vec3 vW;
 void main(){float sd=dot(vW,normalize(sunDir));
  vec3 day=vec3(.25,.55,1.),dusk=vec3(1.,.42,.12);vec3 c=mix(dusk,day,smoothstep(.05,.45,sd));
  float ndv=1.-abs(dot(normalize(-vP),vN));float rim=pow(ndv,3.)*.55+pow(ndv,9.)*1.1;
  float lit=smoothstep(-.35,.1,sd);float band=exp(-pow((sd-.02)/.12,2.))*1.6;
  gl_FragColor=vec4(c*rim*strength*(lit+band),1.);}`}),rt=new on({transparent:!0,blending:Di,depthWrite:!1,uniforms:{sunDir:Qe.uniforms.sunDir,strength:Qe.uniforms.strength},vertexShader:"varying vec3 vN;varying vec3 vP;varying vec3 vW;void main(){vN=normalize(normalMatrix*normal);vW=normalize(mat3(modelMatrix)*normal);vec4 p=modelViewMatrix*vec4(position,1.);vP=p.xyz;gl_Position=projectionMatrix*p;}",fragmentShader:`uniform vec3 sunDir;uniform float strength;varying vec3 vN;varying vec3 vP;varying vec3 vW;
 void main(){float ndv=clamp(dot(normalize(-vP),vN),0.,1.);float sd=dot(vW,normalize(sunDir));
  float f=pow(1.-ndv,2.6);vec3 day=vec3(.16,.34,.72)*f*smoothstep(-.1,.35,sd);
  vec3 dusk=vec3(.9,.38,.14)*exp(-pow((sd-.03)/.09,2.))*(.15+.85*f)*.55;
  gl_FragColor=vec4((day+dusk)*min(strength,1.2)*.8,1.);}`}),Ne=new Ae(new ps(Pe+8,128,64),rt),_t=new Ae(new ps(Pe+55,96,48),Qe),it=new $t;it.add(Se,Ve,Ne,_t),E.add(it);{const P=ah.degToRad(6),Z=145/360*Math.PI*2,ie=Math.PI/2-P,xe=new z(-Math.cos(Z)*Math.sin(ie),Math.cos(ie),Math.sin(Z)*Math.sin(ie));it.quaternion.setFromUnitVectors(xe,new z(0,1,0)).premultiply(new Fi().setFromAxisAngle(new z(0,1,0),2.4+Math.PI))}const St=new Fs(16774118,4.2);St.position.set(-.55,.75,-.35).multiplyScalar(1e5),Qe.uniforms.sunDir.value=St.position.clone().normalize();{const P=(ie,xe,Ue,je,Ke)=>{const Rt=document.createElement("canvas");Rt.width=Rt.height=128;const at=Rt.getContext("2d"),De=at.createRadialGradient(64,64,0,64,64,64);return De.addColorStop(0,`rgba(${ie},${xe},${Ue},${je})`),De.addColorStop(Ke,`rgba(${ie},${xe},${Ue},${je*.25})`),De.addColorStop(1,`rgba(${ie},${xe},${Ue},0)`),at.fillStyle=De,at.fillRect(0,0,128,128),new Da(Rt)},Z=new wo;Z.addElement(new yr(P(255,236,210,1,.15),220,0,new Xe(1,.92,.8))),Z.addElement(new yr(P(255,190,120,.35,.5),520,0,new Xe(1,.7,.45))),Z.addElement(new yr(P(150,190,255,.07,.6),48,.6)),Z.addElement(new yr(P(255,170,110,.05,.6),80,.9)),St.add(Z)}E.add(St,new Kx(2241348,.15)),Ee.load("/astreia-preview/prototype/textures/earth-day.webp",P=>{P.colorSpace=Gt,P.anisotropy=8,Me.map=P,Me.needsUpdate=!0}),Ee.load("/astreia-preview/prototype/textures/earth-clouds.webp",P=>{ft.alphaMap=P,ft.needsUpdate=!0});const $={value:new z(-.55,.75,-.35).normalize()};Ee.load("/astreia-preview/prototype/textures/earth-night.webp",P=>{P.colorSpace=Gt,Me.emissiveMap=P,Me.emissive.setRGB(1,.82,.55),Me.emissiveIntensity=1.6,Me.onBeforeCompile=Z=>{Z.uniforms.uSun=$,Z.vertexShader=Z.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWN;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vWN=normalize(mat3(modelMatrix)*objectNormal);`),Z.fragmentShader=Z.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSun;varying vec3 vWN;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance*=pow(1.-smoothstep(-.18,.12,dot(normalize(vWN),uSun)),1.5);`)},Me.needsUpdate=!0});const Oe=(()=>{const Z=(Ue,je)=>{Ue=(Ue+128)%128,je=(je+128)%128;let Ke=Ue*374761393+je*668265263;return Ke=(Ke^Ke>>13)*1274126177,((Ke^Ke>>16)>>>0)/4294967295},ie=new Uint8Array(65536);for(let Ue=0;Ue<128;Ue++)for(let je=0;je<128;je++){let Ke=0,Rt=.5;for(let De=0,tn=8;De<4;De++,tn*=2,Rt*=.5){const fi=128/tn,Ai=je/fi,ss=Ue/fi,Yn=Math.floor(Ai),pi=Math.floor(ss),nn=Ai-Yn,Hi=ss-pi,Ss=nn*nn*(3-2*nn),Xs=Hi*Hi*(3-2*Hi),Uo=tn,qs=($r,Ys)=>Z((Yn+$r)%Uo*fi|0,(pi+Ys)%Uo*fi|0);Ke+=Rt*((qs(0,0)*(1-Ss)+qs(1,0)*Ss)*(1-Xs)+(qs(0,1)*(1-Ss)+qs(1,1)*Ss)*Xs)}const at=(Ue*128+je)*4;ie[at]=ie[at+1]=ie[at+2]=Math.round(Ke/.9375*255),ie[at+3]=255}const xe=new tl(ie,128,128);return xe.wrapS=xe.wrapT=Os,xe.magFilter=xe.minFilter=pn,xe.needsUpdate=!0,xe})(),ae={opacity:{value:0},noise:{value:Oe},sunDir:{value:L},layer:{value:0}},ve={get opacity(){return ae.opacity.value},set opacity(P){ae.opacity.value=P}},Ie=new $t;for(let P=0;P<9;P++){const Z=P/8,ie=new Ae(new wn(9e3,9e3),new on({transparent:!0,depthWrite:!1,side:Tn,uniforms:{...ae,layer:{value:Z}},vertexShader:"varying vec2 vUv;varying vec3 vW;void main(){vUv=uv;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`uniform sampler2D noise;uniform float opacity,layer;uniform vec3 sunDir;varying vec2 vUv;varying vec3 vW;
  void main(){vec2 p=vUv*6.;float n=texture2D(noise,p).r*.62+texture2D(noise,p*3.7+.31).r*.28+texture2D(noise,p*11.+.7).r*.1;
   float prof=1.-pow(abs(layer-.42)/.58,1.6);float d=smoothstep(.62-.2*prof,.82-.2*prof,n);
   float e=length(vUv-.5)*2.;d*=1.-smoothstep(.55,1.,e);
   float sunUp=texture2D(noise,p-normalize(sunDir.xz)*.012).r-n;
   vec3 base=mix(vec3(.38,.36,.42),vec3(.86,.72,.62),layer);vec3 lit=vec3(1.25,.86,.62)*(1.+clamp(-sunUp*14.,0.,1.)*.6);
   vec3 c=mix(base,lit,smoothstep(.25,1.,layer)*.75+.25*d);
   float dist=length(vW-cameraPosition);c=mix(c,vec3(.95,.66,.48),smoothstep(1200.,4200.,dist)*.6);
   float a=d*opacity*.5;if(a<.003)discard;gl_FragColor=vec4(c*1.05,a);}`}));ie.rotation.x=-Math.PI/2,ie.position.set(0,1500+P*28,0),ie.renderOrder=1+P,ie.frustumCulled=!1,Ie.add(ie)}f.add(Ie);const Be=new sn({transparent:!0,blending:Di,depthWrite:!1,fog:!1,opacity:0}),ot=[];Ee.load("/astreia-preview/story-2d/launch/exhaust-v2.webp",P=>{P.colorSpace=Gt;for(const Z of ot)Z.material.map=P,Z.material.needsUpdate=!0});function Ot(){const P=new wn(1,1);P.translate(0,-.5+40/1536,0);const Z=new Ae(P,Be.clone());return Z.frustumCulled=!1,ot.push(Z),Z}const Xt=Ot(),xt=Ot(),Lt={time:{value:0}};function Zt(){const P=new yi(.16,.5,1,40,24,!0);P.translate(0,-.5,0);const Z=new Ae(P,new on({transparent:!0,blending:Di,depthWrite:!1,side:Tn,uniforms:{time:Lt.time,opacity:{value:0}},vertexShader:"varying float vY;varying vec3 vN;varying vec3 vV;void main(){vY=-position.y;vec4 p=modelViewMatrix*vec4(position,1.);vV=normalize(-p.xyz);vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*p;}",fragmentShader:`uniform float time,opacity;varying float vY;varying vec3 vN;varying vec3 vV;
  void main(){float ndv=abs(dot(normalize(vN),normalize(vV)));float body=pow(ndv,1.4);
   float turb=.82+.18*sin(vY*38.-time*31.)*sin(vY*17.+time*13.+ndv*6.);
   vec3 hot=vec3(1.,.92,.7),mid=vec3(1.,.56,.18),cool=vec3(.75,.22,.06);
   vec3 c=mix(hot,mid,smoothstep(.0,.25,vY));c=mix(c,cool,smoothstep(.25,.8,vY));
   float a=body*turb*(1.-smoothstep(.35,1.,vY))*smoothstep(0.,.03,vY);
   gl_FragColor=vec4(c*a*opacity*1.6,1.);}`}));return Z.frustumCulled=!1,Z}const Xn=Zt(),Ln=Zt(),In=new Xy().setDecoderPath("/astreia-preview/prototype/draco/"),di=new cy().setDRACOLoader(In),qt={},ei=new $t;f.add(ei);const Ct=new $t,un=new $t;f.add(Ct),Ct.add(un);const Mn=document.querySelector(".proto-loader"),en=Mn==null?void 0:Mn.querySelector(".proto-loader-pct"),F={items:new Map,shown:0,done:!1,t0:performance.now()},R=(P,Z,ie=1)=>{var xe;return F.items.set(P,{f:Math.max(((xe=F.items.get(P))==null?void 0:xe.f)||0,Z),w:ie})},X=new Set(["hall","tessera","rocket","thor"]);for(const P of X)R("glb:"+P,0,6);function j(){if(F.done||!Mn)return;!Le&&tt&&ye.src&&ye.readyState>=2&&(Le=!0,R("video:"+tt,1,12));let P=0,Z=0;for(const{f:Ue,w:je}of F.items.values())P+=Ue*je,Z+=je;const ie=Z?Math.min(P/Z,Le?1:.99):0,xe=performance.now()-F.t0>15e3;F.shown+=(Math.max(F.shown,ie)-F.shown)*.3,(ie>=1&&F.shown>.995||xe)&&(F.shown=1),en.textContent=`${Math.floor(F.shown*100)}%`,F.shown>=1&&(F.done=!0,Mn.classList.add("is-done"),setTimeout(()=>Mn.remove(),900))}function v(P){return new Promise(Z=>di.load(`/astreia-preview/prototype/models/${P}.glb`,ie=>{qt[P]=ie.scene,X.has(P)&&R("glb:"+P,1,6),Z(ie.scene)},ie=>{X.has(P)&&ie.total&&R("glb:"+P,Math.min(.99,ie.loaded/ie.total),6)},()=>{X.has(P)&&R("glb:"+P,1,6),Z(null)}))}let w=!1;v("hall").then(P=>{if(!(t||!P)){P.traverse(Z=>{if(!Z.isMesh)return;const ie=Z.material.map;ie&&(ie.colorSpace=Gt),Z.material=new sn({map:ie,color:16777215})});for(const Z of[...k.children])Z.geometry&&!(Z===Ce||Z===$e)&&Z.material!==_e&&(Z.visible=!1);k.add(P)}});const T=Promise.all([v("tessera"),v("rocket"),v("thor")]).then(([P,Z,ie])=>{var Ue,je,Ke,Rt;if(t)return;const xe=at=>at==null?void 0:at.traverse(De=>{De.isMesh&&(De.castShadow=De.receiveShadow=!0,De.geometry.attributes.color&&(De.material=De.material.clone(),De.material.vertexColors=!0),De.material.envMapIntensity=.8)});if(xe(P),xe(ie),P==null||P.traverse(at=>{at.isMesh&&(at.receiveShadow=!1,at.material.side=Tn)}),P==null||P.traverse(at=>{if(!at.isMesh)return;const De=at.material,tn=De.color.getHex();De.map?(Object.assign(De,{metalness:.12,roughness:.42,envMapIntensity:.9}),De.color.setHex(10657689)):tn===3291193?(Object.assign(De,{metalness:.55,roughness:.46,envMapIntensity:.6}),De.color.setHex(1316634)):tn===13138245?(Object.assign(De,{metalness:.25,roughness:.34}),De.color.setHex(13194271)):(Object.assign(De,{metalness:.6,roughness:.32,envMapIntensity:1.1}),De.color.setHex(13817304))}),P&&(P.scale.setScalar(2.35),Ct.add(P)),Z){for(const at of["booster","stage","fairing-left","fairing-right"]){const De=Z.getObjectByName(at);De&&(qt[at]=De)}ei.add(Z);for(const at of["booster","stage"])(Ue=qt[at])==null||Ue.traverse(De=>{De.isMesh&&De.material&&!De.material.map&&(De.material=De.material.clone(),De.material.roughness=Math.min(Math.max(De.material.roughness??.5,.38),.6),De.material.envMapIntensity=.9)});for(const at of["fairing-left","fairing-right"])(je=qt[at])==null||je.traverse(De=>{De.material&&(De.material=De.material.clone(),De.material.metalness=0,De.material.envMapIntensity=.35,De.material.roughness=Math.max(De.material.roughness??.5,.7),De.material.side=Tn)})}if(ie&&P){const at=Ct.matrix.clone();Ct.position.set(0,0,0),Ct.rotation.set(0,0,0),Ct.updateMatrixWorld(!0);const De=new Gn().setFromObject(P),tn=De.max.x-De.min.x,fi=De.max.y-De.min.y;at.decompose(Ct.position,Ct.quaternion,Ct.scale);const Ai=new Gn,ss=De.max.z-De.min.z,Yn=new Gn;P.traverse(Hi=>{Hi.isMesh&&(Yn.setFromObject(Hi),Yn.max.z>De.max.z-.03*ss&&Yn.max.x-Yn.min.x<.6*tn&&Ai.union(Yn))});const pi=Ai.isEmpty()?new z((De.min.x+De.max.x)/2,(De.min.y+De.max.y)/2-.04*fi,0):Ai.getCenter(new z);Ct.userData.hatch=new z(pi.x,pi.y,De.max.z),Ct.userData.width=tn/Ct.scale.x,ie.rotation.set(Math.PI/2,0,0),ie.scale.setScalar(1);let nn=new Gn().setFromObject(ie);ie.scale.setScalar(tn*.78/(nn.max.x-nn.min.x)),nn=new Gn().setFromObject(ie),ie.position.set(-nn.min.x,-(nn.min.y+nn.max.y)/2,-(nn.min.z+nn.max.z)/2),un.add(ie),un.position.set(De.min.x+.746*tn,De.max.y-.667*fi,(De.min.z+De.max.z)/2),un.rotation.z=-.52,un.userData.dock=un.position.clone()}(Ke=qt.booster)==null||Ke.add(Xt,Xn),Xt.position.y=Xn.position.y=2.4,(Rt=qt.stage)==null||Rt.add(xt,Ln),xt.position.y=Ln.position.y=42.4,d.classList.add("ready")}),N=document.getElementById("story-title"),A=document.querySelector(".story-description"),W=document.querySelector(".mission-hud-index"),Q=document.querySelector(".mission-hud-label");let ee=-1,te=[];const le=document.querySelector(".story-copy"),C=document.querySelector(".scroll-cue");if(C&&matchMedia("(hover:hover) and (pointer:fine)").matches){C.classList.add("follow");const P=matchMedia("(prefers-reduced-motion: reduce)").matches?1:.14;let Z=0,ie=0,xe=0,Ue=0,je=0,Ke=!1;const Rt=()=>{xe+=(Z-xe)*P,Ue+=(ie-Ue)*P,C.style.setProperty("--cx",xe.toFixed(1)+"px"),C.style.setProperty("--cy",Ue.toFixed(1)+"px"),je=Math.abs(Z-xe)+Math.abs(ie-Ue)>.3?requestAnimationFrame(Rt):0};addEventListener("pointermove",at=>{at.pointerType==="mouse"&&(Z=at.clientX+18,ie=at.clientY+22,Ke||(Ke=!0,xe=Z,Ue=ie,C.classList.add("is-live")),je||(je=requestAnimationFrame(Rt)))},{passive:!0,signal:e}),document.documentElement.addEventListener("mouseleave",()=>{Ke=!1,C.classList.remove("is-live")},{signal:e}),e.addEventListener("abort",()=>cancelAnimationFrame(je),{once:!0})}const B=document.createElement("div");B.className="proto-molecular-host",p.append(B);const re=gM(B),fe=s?null:J1(p),ue=[4.15,4.9];function Re(P){if(!fe)return;const Z=fe.root,ie=Z.querySelector(".inside-drawing"),xe=Z.querySelector(".inside-copy");if(P<ue[0]||P>ue[1]){ie.style.filter="",xe&&(xe.style.opacity=""),P>ue[1]&&(Z.style.backgroundColor="");return}const Ue=a((P-ue[0])/(ue[1]-ue[0]));Z.hidden=!1,Z.style.opacity=String(l(.45,.6,Ue)),Z.style.backgroundColor=`rgba(10,10,10,${l(.62,.92,Ue).toFixed(3)})`,xe&&(xe.style.opacity=String(l(.85,1,Ue)));const je=1-l(.62,.92,Ue);ie.style.filter=je>0?`drop-shadow(0 0 ${(2*je).toFixed(2)}px rgba(255,196,120,${(.8*je).toFixed(2)}))`:""}const me=document.createElement("div");me.className="thermal-caption",me.setAttribute("aria-hidden","true"),me.innerHTML=_M,p.append(me);const pe=vM(p),be=document.createElement("div");be.className="proto-fade",p.append(be);const ge={ch0:191,fps:30,src:{landscape:"/astreia-preview/prototype/hero-video/landscape.mp4",portrait:"/astreia-preview/prototype/hero-video/portrait.mp4"}},ye=Object.assign(document.createElement("video"),{className:"hero-seq",muted:!0,playsInline:!0,preload:"auto"});ye.setAttribute("aria-hidden","true"),ye.disablePictureInPicture=!0,document.querySelector(".proto-canvas").after(ye);let He=!1,Le=!1,yt=!1,tt="",Nt=-1;const an=document.querySelector(".hero-poster");function Bt(P){if(yc[P])return yc[P];const Z="video:"+P;return R(Z,0,12),yc[P]=fetch(ge.src[P]).then(async ie=>{if(!ie.ok)throw new Error("Opening video unavailable");const xe=+ie.headers.get("content-length")||0,Ue=ie.body.getReader(),je=[];let Ke=0;for(;;){const{done:Rt,value:at}=await Ue.read();if(Rt)break;je.push(at),Ke+=at.length,xe&&R(Z,Math.min(.99,Ke/xe),12)}return URL.createObjectURL(new Blob(je,{type:"video/mp4"}))}).catch(()=>null)}function ln(P){P!==tt&&(tt=P,Le=!1,Nt=-1,yt=!1,Bt(P).then(Z=>{if(t||!Z||P!==tt)return;ye.src=Z;const ie=()=>{P===tt&&(yt=!0)};ye.addEventListener("seeked",ie,{once:!0});const xe=()=>{P===tt&&!Le&&(Le=!0,R("video:"+P,1,12))};for(const Ue of["loadeddata","canplay","seeked"])ye.addEventListener(Ue,xe,{once:!0});ye.load(),ye.addEventListener("loadedmetadata",()=>{ye.currentTime=.5/ge.fps},{once:!0}),setTimeout(()=>{ye.readyState>=1&&xe()},3e3)}))}ln(innerWidth>=innerHeight?"landscape":"portrait");function qn({i:P,p:Z}){ln(p.clientWidth>=p.clientHeight?"landscape":"portrait");const ie=Le?Math.round(ye.duration*ge.fps):0,xe=120/(ge.ch0-1)/160,Ue=P+Z-.5,je=P===0?a(Z)*(ge.ch0-1):ge.ch0-1+(Ue-.5)/xe;if(!Le||je>ie-1){ye.style.visibility="hidden",He=!1;return}ye.style.visibility=yt?"visible":"hidden",He=!0;const Ke=Math.round(je);Ke!==Nt&&!ye.seeking&&(Nt=Ke,ye.currentTime=(Ke+.5)/ge.fps)}const jn=Object.assign({}),Kn={t0:2.5,fps:30,step:120/190/160,src:{landscape:"/astreia-preview/prototype/hero-video/sep-landscape.mp4",portrait:"/astreia-preview/prototype/hero-video/sep-portrait.mp4"}},Yt=Object.assign(document.createElement("video"),{className:"hero-seq",muted:!0,playsInline:!0,preload:"auto"});Yt.setAttribute("aria-hidden","true"),Yt.disablePictureInPicture=!0,Yt.style.visibility="hidden",ye.after(Yt);let Fn=!1,On="",wi=-1;function rl(P){P!==On&&(On=P,Fn=!1,wi=-1,(Mc[P]??(Mc[P]=fetch(Kn.src[P]).then(Z=>Z.ok?Z.blob():null).then(Z=>Z&&URL.createObjectURL(Z)).catch(()=>null))).then(Z=>{if(t||!Z||P!==On)return;Yt.src=Z;const ie=()=>{P===On&&(Fn=!0)};for(const xe of["loadeddata","canplay","seeked"])Yt.addEventListener(xe,ie,{once:!0});Yt.load(),Yt.play().then(()=>Yt.pause()).catch(()=>{Yt.currentTime=.5/Kn.fps}),setTimeout(()=>{Yt.readyState>=1&&ie()},3e3)}))}function ol({t:P}){if(P<1.2||!Object.keys(jn).length){Yt.style.visibility="hidden";return}rl(p.clientWidth>=p.clientHeight?"landscape":"portrait");const Z=Fn?Math.round(Yt.duration*Kn.fps):0,ie=(P-Kn.t0)/Kn.step;if(!Fn||ie<0||ie>Z-1){Yt.style.visibility="hidden";return}Yt.style.visibility="visible",He=!0;const xe=Math.round(ie);xe!==wi&&!Yt.seeking&&(wi=xe,Yt.currentTime=(xe+.5)/Kn.fps)}function Gr(P){const Z=a(P,0,.999999)*o,ie=r.findIndex(je=>Z<je.end),xe=r[ie],Ue=(Z-xe.start)/xe.length;return{i:ie,p:Ue,t:ie===0?Ue*.5:a(ie+Ue-.5,0,14)}}const ti=document.querySelector(".live-hero");function al({i:P,p:Z}){const ie=ti&&P===0?1-l(.1,.22,Z):0;if(ti&&(ti.style.opacity=ie.toFixed(3),ti.style.visibility=ie>0?"visible":"hidden"),P!==ee){ee=P;const Rt=Vd[P];te=Kf(N,A,Rt.title,Rt.copy),W.textContent=`${String(P+1).padStart(2,"0")} / 15`,Q.textContent=Rt.label}const xe=P===0?ti?[.24,.42]:[.01,.2]:r[P].reveal,Ue=P===14||P===0?1:1-a((Z-.87)/.13);Zf(te,A,Z,xe,Ue,u),le.style.visibility=fe&&P>=5&&P<=12||!fe&&P===6||ie>0?"hidden":"visible";const je=P+Z-.5,Ke=fe&&je>=ue[0]-.05&&je<=ue[1];fe?(re.render(0,0),fe.render(Ke?5:P,Ke?Math.max(.36,P===5?Z:0):Z,{seconds:performance.now()/1e3,quality:1})):re.render(P,Z)}const rn=(P,Z,ie)=>new z(P,Z,ie);new z;const _n=new z;function Wr(P,Z){const ie=1-l(.85,1.45,P),xe=l(1.62,2.7,P),Ue=xe*xe*2400,je=c(0,420,l(1.75,3.4,P)**1.6),Ke=l(1.95,2.9,P),Rt=l(.55,.97,P),at=l(2.55,2.95,P),De=l(2.92,3.32,P),tn=l(3.12,3.6,P);ei.position.y=Ue,qt.booster&&(qt.booster.position.set(-6*at,-90*at*at,0),qt.booster.rotation.z=.5*at,qt.booster.visible=at<.999);const fi=De,Ai=tn;for(const[Sn,Ri]of[["fairing-left",-1],["fairing-right",1]]){const mi=qt[Sn];if(!mi)continue;mi.traverse(Vi=>{Vi.material&&Vi.material.color.setScalar(c(.32,1,l(1,1.6,P)))});const js=(1-Rt)*Ri*30;mi.position.set(js+Ri*(Ai*18),Ai*-6+(1-Rt)*1.8,0),mi.rotation.z=Ri*-(.9*fi+.6*Ai)}if(qt.stage){const Sn=l(2.98,3.4,P);qt.stage.position.set(-18*Sn,-140*Sn*Sn-40*tn,-14*Sn),qt.stage.rotation.set(-.35*Sn,0,.5*Sn),qt.stage.visible=tn<.999&&Sn<.999}const ss=tn;Ct.position.set(c(0,0,ss),h+Ue+c(0,6,ss),0),Ct.rotation.set(0,c(-.35+.35*l(0,.6,P),.35,l(3.2,4.5,P)),c(0,-.12,ss)),un.visible=P>1.2;const Yn=l(1.6,1.72,P)*(1-l(2.55,2.62,P)),pi=l(2.66,2.74,P)*(1-l(2.9,2.98,P)),nn=u?1:1+.04*Math.sin(Z*23)+.025*Math.sin(Z*37);Xt.material.opacity=Yn,Xt.scale.set(9*nn,c(10,52,Yn)*nn,1),xt.material.opacity=pi,xt.scale.set(7*nn,c(8,34,pi)*nn,1);const Hi=l(1.9,2.6,P);Lt.time.value=u?0:Z,Xn.material.uniforms.opacity.value=Yn*.85,Xn.scale.set(c(8,15,Hi)*nn,c(10,60,Yn)*nn,c(8,15,Hi)*nn),Xn.visible=Yn>.001,Ln.material.uniforms.opacity.value=pi*.9,Ln.scale.set(9*nn,c(8,30,pi)*nn,9*nn),Ln.visible=pi>.001;const Ss=l(.85,1.35,P),Xs=l(1.25,1.6,P),Uo=Xs<.999?1:0;k.position.set(0,0,-420*Xs*Xs),Ce.position.x=-21-40*Ss,$e.position.x=21+40*Ss,k.visible=Uo>0,Ye.visible=gt.visible=ht.visible=je<8&&ie<.995,ht.visible=!1,Ye.material.opacity=1-ie,f.fog.color.setHex(ie>.5?329224:14261100),b.intensity=900*ie,G.intensity=650*ie,b.position.set(-3,h+16,13),b.target.position.set(0,h,0),G.position.set(8,h+6,-10),G.target.position.set(0,h,0),U.intensity=c(.4,3.2,1-ie),U.target.position.copy(Ct.position),U.position.copy(Ct.position).addScaledVector(L,30),x.intensity=1.6*Ke,x.target.position.copy(Ct.position),x.position.copy(Ct.position).add(rn(.2,-10,.3)),K.intensity=c(.15,.45,1-ie)*(1-Ke*.7),f.fog.far=c(2600,1e6,l(1.8,2.3,P)),ve.opacity=Math.sin(Math.PI*l(1.95,2.4,P))*.95,Ie.visible=ve.opacity>.002,Ie.position.y=Ue-1500+40-520*(l(1.95,2.4,P)-.5);const qs=h+Ue,$r=30+Ue,Ys=Ct.position.y,Fo=1-(1-a(P/.6))**2,Oo=-1.05+.55*Fo,lp=rn(Math.sin(Oo)*c(13,14.5,Fo),h+c(.5,.2,Fo),Math.cos(Oo)*c(13,14.5,Fo)),Bo=l(.6,1.45,P),_l=l(1.6,2.2,P),vl=l(2.85,3.45,P),ko=l(3.4,4.5,P),cp=rn(-Math.cos(Oo)*.9,h-.9,Math.sin(Oo)*.9),$s=new z(0,c(h,c($r,qs,_l*.4),Bo),0).lerp(cp,1-Bo);_n.copy(lp).lerp(rn(34,24,150),Bo),_n.lerp(rn(18,$r-26,70),_l),_n.y=Math.max(_n.y,Ue+c(22,$r-26-Ue,_l));const zo=(P>=1.6?1:0)*(1-l(2.05,2.3,P));zo>0&&_n.lerp(rn(34,24+.7*Ue,150),zo),zo>0&&$s.lerp(rn(0,30+Ue-12*l(1.7,2,P),0),zo);const tu=l(2.35,2.75,P),hp=rn(c(16,7,vl),c(10,8,vl),c(34,19,vl));$s.lerp(rn(0,Ys-2,0),tu),_n.lerp(rn(0,Ys,0).add(hp),tu);const nu=c(.38,1.15,ko);_n.lerp(rn(Math.sin(nu)*16,Ys+5+2*ko,Math.cos(nu)*16),ko),$s.lerp(rn(.8,Ys-1.2,0),ko);let xl=-.12*(1-Bo);if(P>.5&&P<1.45){const Sn=Math.min(P,1),Ri=1-(1-a(.5/.6))**2,mi=-1.05+.55*Ri,js=c(13,14.5,Ri),Vi=l(.6,1.45,.5),Ci=rn(Math.sin(mi)*js,h+c(.5,.2,Ri),Math.cos(mi)*js).lerp(rn(34,24,150),Vi),Vo=rn(0,c(h,30,Vi),0).lerp(rn(-Math.cos(mi)*.9,h-.9,Math.sin(mi)*.9),1-Vi),yl=-.12*(1-Vi),Ml=l(.5,.85,Sn),iu=Math.atan2(Ci.x,Ci.z)*(1-Ml);let Go=c(Math.hypot(Ci.x,Ci.z),7.5,l(.6,.97,Sn));Go=c(Go,6.8,l(.97,1,Sn));const up=rn(Math.sin(iu)*Go,c(Ci.y,h+.3,Ml),Math.cos(iu)*Go),dp=Vo.clone().lerp(rn(0,h+.2,0),l(.5,.8,Sn)),fp=yl*(1-Ml),Sl=P<=1?0:l(1,1.45,P);_n.copy(up.lerp(_n,Sl)),$s.copy(dp.lerp($s,Sl)),xl=c(fp,xl,Sl)}y.position.copy(_n),y.lookAt($s),y.rotateZ(xl),M.quaternion.copy(y.quaternion),M.position.set(0,Pe+je+.05,0);{const Sn=new z(0,0,-1).applyQuaternion(y.quaternion);Sn.y=0,Sn.normalize();const Ri=Math.acos(Pe/(Pe+Math.max(je,1))),mi=Sn.clone().multiplyScalar(Math.cos(Ri-.05)).add(new z(.35,0,0).applyQuaternion(y.quaternion).setY(0)).setY(-Math.sin(Ri-.05)).normalize(),js=new z(-.55,.75,-.35).normalize(),Vi=l(2.25,2.6,P)*(1-l(3.45,4,P)),Ci=js.clone().lerp(mi,Vi).normalize();St.position.copy(Ci).multiplyScalar(1e5),Qe.uniforms.sunDir.value.copy(Ci),$.value.copy(Ci);const Vo=l(2.2,2.6,P);if(Vo>0){const yl=L.clone().lerp(Ci,Vo).normalize();U.position.copy(U.target.position).addScaledVector(yl,30)}}Kt.position.copy(M.position),V.uniforms.envMix.value=V.uniforms.env.value?1-l(2.1,2.6,P):0,V.uniforms.space.value=Ke,V.uniforms.studio.value=ie,V.uniforms.sea.value=0,V.uniforms.hor.value.setRGB(.98,.58,.34),V.uniforms.zen.value.setRGB(.07,.16,.32),V.uniforms.sunDir.value=L,he.opacity=l(.55,1,Ke);const Ho=l(.25,.75,Ke);return Me.opacity=Ho,ft.opacity=Ho*.7,Qe.uniforms.strength.value=Ho*.95,Se.visible=Ve.visible=Ne.visible=_t.visible=Ho>.001,{studio:ie}}const Zn=new $t;f.add(Zn);const Jt=SM({environment:f.environment,fg:f,bg:E,camera:y,bgCamera:M,tex:Ee,assets:qt,tesseraPivot:Ct,thorPivot:un,globe:it,earthMat:Me,cloudMat:ft,skyMat:V,starMat:he,atmoMat:Qe,R:Pe,reduced:u}),Xr=Jt.cassette();Xr.scale.setScalar(.6),Zn.add(Xr);let vs=0,qr=32;function zs(P,Z,ie){const xe=Bn(P,Z,ie);return fe&&xe.scene==="world"&&Yr(P),xe}const Co=new Fi,zi=new mt,Hs=new z,xs=new z,ys=new z,Po=new z,Ms=new z;function Yr(P){const Z=l(ue[0],ue[0]+.45*(ue[1]-ue[0]),P),ie=Ct.userData.hatch,xe=Ct.userData.width;if(Z<=0||!ie||!xe)return;Ct.updateMatrixWorld(!0),Po.copy(ie).applyMatrix4(Ct.matrixWorld),zi.extractRotation(Ct.matrixWorld),ys.set(0,0,1).applyMatrix4(zi).normalize(),xs.set(0,1,0).applyMatrix4(zi).normalize(),Hs.crossVectors(xs,ys).normalize(),xs.crossVectors(ys,Hs);const Ue=p.clientWidth,je=p.clientHeight,Ke=Q1(Ue,je),Rt=xe*Ct.getWorldScale(Ms).x,at=Ke.width/Rt,De=je/at/(2*Math.tan(ah.degToRad(y.fov)/2)),tn=Ke.x+(.483-.5)*Ke.width-Ue/2,fi=Ke.y+(.51-.5)*Ke.height-je/2;Ms.copy(Po).addScaledVector(ys,De).addScaledVector(Hs,-tn/at).addScaledVector(xs,fi/at),zi.makeBasis(Hs,xs,ys),Co.setFromRotationMatrix(zi),y.position.lerp(Ms,Z),y.quaternion.slerp(Co,Z),y.updateMatrixWorld(!0),M.quaternion.copy(y.quaternion)}function Bn(P,Z,ie){if(Ct.visible=!0,it.visible=!0,Jt.thorFree.visible=!1,Jt.ocean.visible=!1,Zn.visible=!1,Wr(Math.min(P,4.5),Z),un.userData.dock&&un.position.copy(un.userData.dock),P<=4.5)return Jt.idle(),{scene:"world",fade:0,heat:0};Jt.prepare();const xe=Jt.pose(P,Z,ie,{fov:qr,heat:vs});if(vs=xe.heat||0,xe.transfer){const Ue=xe.transfer.move;Zn.visible=Ue>0&&Ue<1,Zn.position.copy(xe.transfer.from).lerp(xe.transfer.to,Ue).add(new z(0,.3,1.6).multiplyScalar(Math.sin(Ue*Math.PI))),Zn.scale.setScalar(1.1*(1-.7*l(.75,1,Ue))),Zn.rotation.set(0,Ue*1.2,-.3*Ue)}return xe}const cn=new Jy(g,new hi(1,1,{type:Wn,samples:4})),Vs=new Cd(E,M),Gs=new Cd(f,y);Gs.clear=!1,Gs.clearDepth=!0;const Lo=new Fr(new Je(1,1),.3,.5,1.7),tp=new ph({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec4 c=texture2D(tDiffuse,vUv);if(any(isnan(c))||any(isinf(c)))c=vec4(0.,0.,0.,1.);gl_FragColor=min(c,vec4(48.));}"}),qh=new ph({uniforms:{tDiffuse:{value:null},uAspect:{value:1},uWarm:{value:1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uAspect,uWarm;varying vec2 vUv;
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
   gl_FragColor=vec4(clamp(col,0.,1.),1.);}`});cn.addPass(Vs),cn.addPass(Gs),cn.addPass(tp),cn.addPass(Lo),cn.addPass(new t1),cn.addPass(qh);const Yh=new bf(128,{type:Wn}),$h=new Mf(1,4e5,Yh);let Ti=null,jh="",Kh=0;function np(P){if(P<1.45||P>12.5){f.environment!==I&&(f.environment=I),f.environmentIntensity=.55;return}const Z=`${Math.round(M.position.y/15)}:${Math.round(P*3)}`,ie=performance.now();if(Z===jh||ie-Kh<250){Ti&&(f.environment=Ti);return}jh=Z,Kh=ie,$h.position.copy(M.position),$h.update(g,E);const xe=O.fromCubemap(Yh.texture).texture;Ti==null||Ti.dispose(),Ti=xe,f.environment=Ti,f.environmentIntensity=1.15}function ll(P,Z=0){const ie={world:[f,y],sea:[f,y],ocean:[f,y],bio:[Jt.bio,Jt.bioCam],lab:[Jt.lab,Jt.labCam],care:[Jt.care,Jt.careCam]},[xe,Ue]=ie[P.scene],je=P.scene==="world"||P.scene==="sea";je?np(Z):f.environment=I,Vs.enabled=je,Gs.scene=xe,Gs.camera=Ue,Gs.clear=!je,Lo.strength=je?.28+.16*(P.heat||0):.16,g.toneMappingExposure=P.exposure??(P.scene==="world"?c(1,1/.6,l(1.55,2.1,Z)*(1-l(4.15,4.5,Z))):1),se.opacity=he.opacity,cn.render(),be.style.opacity=String(P.fade||0),be.style.background=P.fadeColor||"#000",me.style.opacity=String(vs),pe.render(vs);const Ke=N.getBoundingClientRect(),Rt=p.getBoundingClientRect();p.style.setProperty("--thermal-caption-y",`${Ke.top-Rt.top+Ke.height/2}px`)}const ni=u?null:new pp({lerp:.085,smoothWheel:!0}),Io=document.querySelector(".proto-track");let cl=performance.now(),ns=16,is="",Ws=1e3,hl=0,ul=0;const dl=[];function Do(){const P=p.clientWidth,Z=p.clientHeight;g.setPixelRatio(m),g.setSize(P,Z,!1),cn.setPixelRatio(m),cn.setSize(P,Z),qh.uniforms.uAspect.value=P/Z,Lo.resolution.set(P*m/2,Z*m/2),qr=P<Z?48:32,y.aspect=M.aspect=P/Z,y.fov=M.fov=qr,y.updateProjectionMatrix(),M.updateProjectionMatrix();for(const ie of[Jt.bioCam,Jt.labCam,Jt.careCam])ie.aspect=P/Z,ie.fov=P<Z?46:32,ie.updateProjectionMatrix();is=""}let No=0,fl=innerWidth;addEventListener("resize",()=>{Do(),innerWidth!==fl&&(fl=innerWidth,No>0&&No<=1&&gl(No*(Io.offsetHeight-innerHeight)))},{signal:e}),Do(),addEventListener("visibilitychange",()=>{ye.pause(),Yt.pause(),document.hidden||(cl=performance.now(),is="")},{signal:e});function Zh(P){t||(document.hidden||pl(P),n=requestAnimationFrame(Zh))}function pl(P){ni==null||ni.raf(P),j();const Z=P-cl;cl=P,ns=ns*.95+Z*.05,hl<60?(hl++,dl.push(Z),hl===60&&(dl.sort((Ke,Rt)=>Ke-Rt),Ws=dl[30],ns=Ws)):!He&&ns>Ws*1.35&&m>.75?(m=Math.max(.75,m-.1),Do(),ns=Ws,ul=P+6e3):!He&&ns<Ws*1.04&&m<_&&P-ul>2e3&&(m=Math.min(_,m+.05),ul=P,Do(),ns=Ws);const ie=Io.offsetHeight-innerHeight,xe=Gr(ie>0?scrollY/ie:0);ie>0&&innerWidth===fl&&(No=scrollY/ie),!s&&xe.t>8&&!w&&(w=!0,v("helicopter")),qn(xe),ol(xe),al(xe),an&&(an.hidden=He?yt:d.classList.contains("ready")&&xe.i>0),d.style.visibility=xe.i===0&&!yt?"hidden":"",C==null||C.classList.toggle("is-gone",scrollY>4),p.style.setProperty("--mission-progress",(xe.t/14).toFixed(4));const Ue=xe.t>1.55&&xe.t<3.05||xe.t>4.9&&xe.t<7.5||xe.t>8.5&&xe.t<12.6,je=`${xe.t.toFixed(5)}:${Ue?Math.floor(P/16):0}`;He||fe&&xe.t>=ue[1]?is="":je!==is&&!Jh&&(is=je,ll(zs(xe.t,P/1e3,Z),xe.t)),Re(xe.t)}T.then(()=>{const P=[0,1,1.9,2.06,2.2,2.7,3.3,4.3,5.3,7.2,8,9,10,11,12,13,14].filter(ie=>!s||ie<=s-.5),Z=()=>{if(t)return;const ie=P.shift();ie!==void 0&&(ll(zs(ie,0,16),ie),is="",He||pl(performance.now()),requestAnimationFrame(Z))};Z()});const ip=document.querySelector(".proto-content");let Jh=!1;document.querySelectorAll(".proto-content section").forEach(P=>P.querySelectorAll("[data-reveal]").forEach((Z,ie)=>Z.style.setProperty("--i",ie)));const ml=new IntersectionObserver(P=>P.forEach(Z=>{Z.isIntersecting&&(Z.target.classList.add("is-in"),ml.unobserve(Z.target))}),{rootMargin:"0px 0px -12% 0px"});document.querySelectorAll("[data-reveal]").forEach(P=>ml.observe(P));const Qh=document.querySelector(".proto-nav,.site-nav"),sp=[...document.querySelectorAll(".pc-principles,.pc-cta")];function eu(){if(s)return;const P=ip.getBoundingClientRect().top;p.classList.toggle("is-covered",P<innerHeight*.55),Jh=P<=0,p.style.visibility=P<=-innerHeight?"hidden":"",Qh.classList.toggle("on-light",sp.some(Z=>{const ie=Z.getBoundingClientRect();return ie.top<64&&ie.bottom>24}))}addEventListener("scroll",eu,{passive:!0,signal:e}),eu(),n=requestAnimationFrame(Zh);function rp(){cn.render();const P=g.getContext(),Z=P.drawingBufferWidth,ie=P.drawingBufferHeight,xe=new Uint8Array(4);let Ue=0,je=0,Ke=0;for(let Rt=1;Rt<12;Rt++)for(let at=1;at<12;at++){P.readPixels(Math.floor(Z*at/12),Math.floor(ie*Rt/12),1,1,P.RGBA,P.UNSIGNED_BYTE,xe);const De=(xe[0]+xe[1]+xe[2])/3;je+=De,Ke++,De<6&&Ue++}return{dark:Ue/Ke,mean:je/Ke}}window.__proto={boot:F,skyMat:V,world:zs,draw:ll,bgCamera:M,sun:U,bgSun:St,vehicle:ei,boosterPlume:Xt,stagePlume:xt,act:r,actLength:o,get trackMax(){return Io.offsetHeight-innerHeight},step:()=>pl(performance.now()),get heroReady(){return Le},probe:rp,later:Jt,composer:cn,bloom:Lo,get avgFrame(){return ns},get dpr(){return m},renderer:g,earthMat:Me,cloudMat:ft,thorPivot:un,tesseraPivot:Ct,assets:qt,camera:y,globe:it,lenis:ni};function gl(P){ni?ni.scrollTo(P,{immediate:!0,force:!0}):window.scrollTo(0,P)}function op(P){const Z=Io.offsetHeight-innerHeight,ie=r[P];return ie?(ie.start+bM(P)*ie.length)/o*Z:-1}return{navigationBoundary(){const P=document.getElementById("site-footer");return P?P.offsetTop-innerHeight:1/0},scrollTo(P){ni==null||ni.resize(),gl(P)},goHash(P){const Z=P==="#constellation"?0:Vd.findIndex(ie=>`#${ie.id}`===P);return Z<0||!r[Z]?!1:(gl(op(Z)),!0)},destroy(){var xe,Ue,je;t=!0,i.abort(),cancelAnimationFrame(n),ml.disconnect(),ni==null||ni.destroy(),re.destroy(),fe==null||fe.destroy(),(xe=pe.destroy)==null||xe.call(pe),In.dispose();const P=new Set,Z=new Set,ie=new Set;for(const Ke of[f,E,Jt.bio,Jt.lab,Jt.care])Ke.traverse(Rt=>{var at;Rt.geometry&&P.add(Rt.geometry);for(const De of[].concat(Rt.material||[])){Z.add(De);for(const tn of Object.values(De))tn!=null&&tn.isTexture&&ie.add(tn)}(at=Rt.shadow)==null||at.dispose()});P.forEach(Ke=>Ke.dispose()),Z.forEach(Ke=>Ke.dispose()),ie.forEach(Ke=>Ke.dispose()),Ti==null||Ti.dispose(),O.dispose();for(const Ke of[ye,Yt])Ke.pause(),Ke.removeAttribute("src"),Ke.load();Qh.classList.remove("on-light"),document.documentElement.classList.remove("is-focus"),document.documentElement.style.removeProperty("--act-length"),(Ue=cn.dispose)==null||Ue.call(cn),g.dispose(),g.forceContextLoss(),((je=window.__proto)==null?void 0:je.renderer)===g&&delete window.__proto}};function ap(){return Hd()}}export{TM as mountPrototype};
