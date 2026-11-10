/* empty css             */import{L as ip}from"./lenis-CYo8HTSz.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xh="169",sp=0,$h=1,rp=2,Dd=1,Nd=2,Yi=3,Ji=0,Tn=1,wn=2,Zi=0,Mr=1,Pi=2,jh=3,Kh=4,op=5,Ns=100,ap=101,lp=102,cp=103,hp=104,up=200,dp=201,fp=202,pp=203,vc=204,xc=205,mp=206,gp=207,_p=208,vp=209,xp=210,yp=211,Mp=212,Sp=213,bp=214,yc=0,Mc=1,Sc=2,Tr=3,bc=4,Ec=5,wc=6,Tc=7,Ud=0,Ep=1,wp=2,xs=0,Fd=1,Od=2,Bd=3,yh=4,Tp=5,kd=6,zd=7,Zh="attached",Ap="detached",Hd=300,Ar=301,Rr=302,Ac=303,Rc=304,qa=306,Bs=1e3,Li=1001,Na=1002,Cn=1003,Vd=1004,ao=1005,fn=1006,ba=1007,Ii=1008,Si=1009,Gd=1010,Wd=1011,mo=1012,Mh=1013,ks=1014,$n=1015,Gn=1016,Sh=1017,bh=1018,Cr=1020,Xd=35902,qd=1021,Yd=1022,ai=1023,$d=1024,jd=1025,Sr=1026,Pr=1027,Eh=1028,wh=1029,Kd=1030,Th=1031,Ah=1033,Ea=33776,wa=33777,Ta=33778,Aa=33779,Cc=35840,Pc=35841,Lc=35842,Ic=35843,Dc=36196,Nc=37492,Uc=37496,Fc=37808,Oc=37809,Bc=37810,kc=37811,zc=37812,Hc=37813,Vc=37814,Gc=37815,Wc=37816,Xc=37817,qc=37818,Yc=37819,$c=37820,jc=37821,Ra=36492,Kc=36494,Zc=36495,Zd=36283,Jc=36284,Qc=36285,eh=36286,go=2300,_o=2301,vl=2302,Jh=2400,Qh=2401,eu=2402,Rp=2500,Cp=0,Jd=1,th=2,Pp=3200,Lp=3201,Qd=0,Ip=1,gs="",Wt="srgb",mn="srgb-linear",Rh="display-p3",Ya="display-p3-linear",Ua="linear",Xt="srgb",Fa="rec709",Oa="p3",Ks=7680,tu=519,Dp=512,Np=513,Up=514,ef=515,Fp=516,Op=517,Bp=518,kp=519,nh=35044,nu="300 es",Ki=2e3,Ba=2001;class Br{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const s=this._listeners[e];if(s!==void 0){const r=s.indexOf(t);r!==-1&&s.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const s=n.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let iu=1234567;const uo=Math.PI/180,Lr=180/Math.PI;function yi(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[n&255]+Un[n>>8&255]+Un[n>>16&255]+Un[n>>24&255]).toLowerCase()}function Rn(i,e,t){return Math.max(e,Math.min(t,i))}function Ch(i,e){return(i%e+e)%e}function zp(i,e,t,n,s){return n+(i-e)*(s-n)/(t-e)}function Hp(i,e,t){return i!==e?(t-i)/(e-i):0}function fo(i,e,t){return(1-t)*i+t*e}function Vp(i,e,t,n){return fo(i,e,1-Math.exp(-t*n))}function Gp(i,e=1){return e-Math.abs(Ch(i,e*2)-e)}function Wp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function Xp(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function qp(i,e){return i+Math.floor(Math.random()*(e-i+1))}function Yp(i,e){return i+Math.random()*(e-i)}function $p(i){return i*(.5-Math.random())}function jp(i){i!==void 0&&(iu=i);let e=iu+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function Kp(i){return i*uo}function Zp(i){return i*Lr}function Jp(i){return(i&i-1)===0&&i!==0}function Qp(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function em(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function tm(i,e,t,n,s){const r=Math.cos,o=Math.sin,a=r(t/2),l=o(t/2),c=r((e+n)/2),h=o((e+n)/2),u=r((e-n)/2),d=o((e-n)/2),p=r((n-e)/2),g=o((n-e)/2);switch(s){case"XYX":i.set(a*h,l*u,l*d,a*c);break;case"YZY":i.set(l*d,a*h,l*u,a*c);break;case"ZXZ":i.set(l*u,l*d,a*h,a*c);break;case"XZX":i.set(a*h,l*g,l*p,a*c);break;case"YXY":i.set(l*p,a*h,l*g,a*c);break;case"ZYZ":i.set(l*g,l*p,a*h,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function xi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Ht(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const tf={DEG2RAD:uo,RAD2DEG:Lr,generateUUID:yi,clamp:Rn,euclideanModulo:Ch,mapLinear:zp,inverseLerp:Hp,lerp:fo,damp:Vp,pingpong:Gp,smoothstep:Wp,smootherstep:Xp,randInt:qp,randFloat:Yp,randFloatSpread:$p,seededRandom:jp,degToRad:Kp,radToDeg:Zp,isPowerOfTwo:Jp,ceilPowerOfTwo:Qp,floorPowerOfTwo:em,setQuaternionFromProperEuler:tm,normalize:Ht,denormalize:xi};class Ke{constructor(e=0,t=0){Ke.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6],this.y=s[1]*t+s[4]*n+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),s=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*s+e.x,this.y=r*s+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Tt{constructor(e,t,n,s,r,o,a,l,c){Tt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c)}set(e,t,n,s,r,o,a,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=a,h[3]=t,h[4]=r,h[5]=l,h[6]=n,h[7]=o,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[3],l=n[6],c=n[1],h=n[4],u=n[7],d=n[2],p=n[5],g=n[8],_=s[0],m=s[3],f=s[6],E=s[1],y=s[4],M=s[7],O=s[2],I=s[5],P=s[8];return r[0]=o*_+a*E+l*O,r[3]=o*m+a*y+l*I,r[6]=o*f+a*M+l*P,r[1]=c*_+h*E+u*O,r[4]=c*m+h*y+u*I,r[7]=c*f+h*M+u*P,r[2]=d*_+p*E+g*O,r[5]=d*m+p*y+g*I,r[8]=d*f+p*M+g*P,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8];return t*o*h-t*a*c-n*r*h+n*a*l+s*r*c-s*o*l}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=h*o-a*c,d=a*l-h*r,p=c*r-o*l,g=t*u+n*d+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=u*_,e[1]=(s*c-h*n)*_,e[2]=(a*n-s*o)*_,e[3]=d*_,e[4]=(h*t-s*l)*_,e[5]=(s*r-a*t)*_,e[6]=p*_,e[7]=(n*l-c*t)*_,e[8]=(o*t-n*r)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(n*l,n*c,-n*(l*o+c*a)+o+e,-s*c,s*l,-s*(-c*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(xl.makeScale(e,t)),this}rotate(e){return this.premultiply(xl.makeRotation(-e)),this}translate(e,t){return this.premultiply(xl.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<9;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const xl=new Tt;function nf(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function vo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function nm(){const i=vo("canvas");return i.style.display="block",i}const su={};function Ca(i){i in su||(su[i]=!0,console.warn(i))}function im(i,e,t){return new Promise(function(n,s){function r(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function sm(i){const e=i.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function rm(i){const e=i.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const ru=new Tt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),ou=new Tt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Yr={[mn]:{transfer:Ua,primaries:Fa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i,fromReference:i=>i},[Wt]:{transfer:Xt,primaries:Fa,luminanceCoefficients:[.2126,.7152,.0722],toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[Ya]:{transfer:Ua,primaries:Oa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.applyMatrix3(ou),fromReference:i=>i.applyMatrix3(ru)},[Rh]:{transfer:Xt,primaries:Oa,luminanceCoefficients:[.2289,.6917,.0793],toReference:i=>i.convertSRGBToLinear().applyMatrix3(ou),fromReference:i=>i.applyMatrix3(ru).convertLinearToSRGB()}},om=new Set([mn,Ya]),Lt={enabled:!0,_workingColorSpace:mn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!om.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=Yr[e].toReference,s=Yr[t].fromReference;return s(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return Yr[i].primaries},getTransfer:function(i){return i===gs?Ua:Yr[i].transfer},getLuminanceCoefficients:function(i,e=this._workingColorSpace){return i.fromArray(Yr[e].luminanceCoefficients)}};function br(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function yl(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Zs;class am{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Zs===void 0&&(Zs=vo("canvas")),Zs.width=e.width,Zs.height=e.height;const n=Zs.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Zs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=vo("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const s=n.getImageData(0,0,e.width,e.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=br(r[o]/255)*255;return n.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(br(t[n]/255)*255):t[n]=br(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lm=0;class sf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:lm++}),this.uuid=yi(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Ml(s[o].image)):r.push(Ml(s[o]))}else r=Ml(s);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ml(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?am.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let cm=0;class pn extends Br{constructor(e=pn.DEFAULT_IMAGE,t=pn.DEFAULT_MAPPING,n=Li,s=Li,r=fn,o=Ii,a=ai,l=Si,c=pn.DEFAULT_ANISOTROPY,h=gs){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cm++}),this.uuid=yi(),this.name="",this.source=new sf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ke(0,0),this.repeat=new Ke(1,1),this.center=new Ke(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Tt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Hd)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bs:e.x=e.x-Math.floor(e.x);break;case Li:e.x=e.x<0?0:1;break;case Na:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bs:e.y=e.y-Math.floor(e.y);break;case Li:e.y=e.y<0?0:1;break;case Na:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}pn.DEFAULT_IMAGE=null;pn.DEFAULT_MAPPING=Hd;pn.DEFAULT_ANISOTROPY=1;class Dt{constructor(e=0,t=0,n=0,s=1){Dt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,s){return this.x=e,this.y=t,this.z=n,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*s+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*s+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*s+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*s+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,s,r;const l=e.elements,c=l[0],h=l[4],u=l[8],d=l[1],p=l[5],g=l[9],_=l[2],m=l[6],f=l[10];if(Math.abs(h-d)<.01&&Math.abs(u-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+d)<.1&&Math.abs(u+_)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const y=(c+1)/2,M=(p+1)/2,O=(f+1)/2,I=(h+d)/4,P=(u+_)/4,U=(g+m)/4;return y>M&&y>O?y<.01?(n=0,s=.707106781,r=.707106781):(n=Math.sqrt(y),s=I/n,r=P/n):M>O?M<.01?(n=.707106781,s=0,r=.707106781):(s=Math.sqrt(M),n=I/s,r=U/s):O<.01?(n=.707106781,s=.707106781,r=0):(r=Math.sqrt(O),n=P/r,s=U/r),this.set(n,s,r,t),this}let E=Math.sqrt((m-g)*(m-g)+(u-_)*(u-_)+(d-h)*(d-h));return Math.abs(E)<.001&&(E=1),this.x=(m-g)/E,this.y=(u-_)/E,this.z=(d-h)/E,this.w=Math.acos((c+p+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class hm extends Br{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new Dt(0,0,e,t),this.scissorTest=!1,this.viewport=new Dt(0,0,e,t);const s={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:fn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new pn(s,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,s=e.textures.length;n<s;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new sf(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class li extends hm{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class rf extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class um extends pn{constructor(e=null,t=1,n=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=Li,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qi{constructor(e=0,t=0,n=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=s}static slerpFlat(e,t,n,s,r,o,a){let l=n[s+0],c=n[s+1],h=n[s+2],u=n[s+3];const d=r[o+0],p=r[o+1],g=r[o+2],_=r[o+3];if(a===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u;return}if(a===1){e[t+0]=d,e[t+1]=p,e[t+2]=g,e[t+3]=_;return}if(u!==_||l!==d||c!==p||h!==g){let m=1-a;const f=l*d+c*p+h*g+u*_,E=f>=0?1:-1,y=1-f*f;if(y>Number.EPSILON){const O=Math.sqrt(y),I=Math.atan2(O,f*E);m=Math.sin(m*I)/O,a=Math.sin(a*I)/O}const M=a*E;if(l=l*m+d*M,c=c*m+p*M,h=h*m+g*M,u=u*m+_*M,m===1-a){const O=1/Math.sqrt(l*l+c*c+h*h+u*u);l*=O,c*=O,h*=O,u*=O}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=u}static multiplyQuaternionsFlat(e,t,n,s,r,o){const a=n[s],l=n[s+1],c=n[s+2],h=n[s+3],u=r[o],d=r[o+1],p=r[o+2],g=r[o+3];return e[t]=a*g+h*u+l*p-c*d,e[t+1]=l*g+h*d+c*u-a*p,e[t+2]=c*g+h*p+a*d-l*u,e[t+3]=h*g-a*u-l*d-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,s){return this._x=e,this._y=t,this._z=n,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,s=e._y,r=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(n/2),h=a(s/2),u=a(r/2),d=l(n/2),p=l(s/2),g=l(r/2);switch(o){case"XYZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"YXZ":this._x=d*h*u+c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"ZXY":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u-d*p*g;break;case"ZYX":this._x=d*h*u-c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u+d*p*g;break;case"YZX":this._x=d*h*u+c*p*g,this._y=c*p*u+d*h*g,this._z=c*h*g-d*p*u,this._w=c*h*u-d*p*g;break;case"XZY":this._x=d*h*u-c*p*g,this._y=c*p*u-d*h*g,this._z=c*h*g+d*p*u,this._w=c*h*u+d*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,s=Math.sin(n);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],s=t[4],r=t[8],o=t[1],a=t[5],l=t[9],c=t[2],h=t[6],u=t[10],d=n+a+u;if(d>0){const p=.5/Math.sqrt(d+1);this._w=.25/p,this._x=(h-l)*p,this._y=(r-c)*p,this._z=(o-s)*p}else if(n>a&&n>u){const p=2*Math.sqrt(1+n-a-u);this._w=(h-l)/p,this._x=.25*p,this._y=(s+o)/p,this._z=(r+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-n-u);this._w=(r-c)/p,this._x=(s+o)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+u-n-a);this._w=(o-s)/p,this._x=(r+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Rn(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const s=Math.min(1,t/n);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,s=e._y,r=e._z,o=e._w,a=t._x,l=t._y,c=t._z,h=t._w;return this._x=n*h+o*a+s*c-r*l,this._y=s*h+o*l+r*a-n*c,this._z=r*h+o*c+n*l-s*a,this._w=o*h-n*a-s*l-r*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,s=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+s*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*n+t*this._x,this._y=p*s+t*this._y,this._z=p*r+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,a),u=Math.sin((1-t)*h)/c,d=Math.sin(t*h)/c;return this._w=o*u+this._w*d,this._x=n*u+this._x*d,this._y=s*u+this._y*d,this._z=r*u+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),s=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(s*Math.sin(e),s*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class H{constructor(e=0,t=0,n=0){H.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(au.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(au.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*s,this.y=r[1]*t+r[4]*n+r[7]*s,this.z=r[2]*t+r[5]*n+r[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,s=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*s+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*s+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*s+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*s+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,s=this.z,r=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*s-a*n),h=2*(a*t-r*s),u=2*(r*n-o*t);return this.x=t+l*c+o*u-a*h,this.y=n+l*h+a*c-r*u,this.z=s+l*u+r*h-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,s=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*s,this.y=r[1]*t+r[5]*n+r[9]*s,this.z=r[2]*t+r[6]*n+r[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,s=e.y,r=e.z,o=t.x,a=t.y,l=t.z;return this.x=s*l-r*a,this.y=r*o-n*l,this.z=n*a-s*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return Sl.copy(this).projectOnVector(e),this.sub(Sl)}reflect(e){return this.sub(Sl.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(Rn(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,s=this.z-e.z;return t*t+n*n+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const s=Math.sin(t)*e;return this.x=s*Math.sin(n),this.y=Math.cos(t)*e,this.z=s*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Sl=new H,au=new Qi;class Vn{constructor(e=new H(1/0,1/0,1/0),t=new H(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,pi):pi.fromBufferAttribute(r,o),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Vo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),Vo.copy(n.boundingBox)),Vo.applyMatrix4(e.matrixWorld),this.union(Vo)}const s=e.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter($r),Go.subVectors(this.max,$r),Js.subVectors(e.a,$r),Qs.subVectors(e.b,$r),er.subVectors(e.c,$r),ls.subVectors(Qs,Js),cs.subVectors(er,Qs),Es.subVectors(Js,er);let t=[0,-ls.z,ls.y,0,-cs.z,cs.y,0,-Es.z,Es.y,ls.z,0,-ls.x,cs.z,0,-cs.x,Es.z,0,-Es.x,-ls.y,ls.x,0,-cs.y,cs.x,0,-Es.y,Es.x,0];return!bl(t,Js,Qs,er,Go)||(t=[1,0,0,0,1,0,0,0,1],!bl(t,Js,Qs,er,Go))?!1:(Wo.crossVectors(ls,cs),t=[Wo.x,Wo.y,Wo.z],bl(t,Js,Qs,er,Go))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(zi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),zi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),zi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),zi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),zi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),zi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),zi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),zi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(zi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const zi=[new H,new H,new H,new H,new H,new H,new H,new H],pi=new H,Vo=new Vn,Js=new H,Qs=new H,er=new H,ls=new H,cs=new H,Es=new H,$r=new H,Go=new H,Wo=new H,ws=new H;function bl(i,e,t,n,s){for(let r=0,o=i.length-3;r<=o;r+=3){ws.fromArray(i,r);const a=s.x*Math.abs(ws.x)+s.y*Math.abs(ws.y)+s.z*Math.abs(ws.z),l=e.dot(ws),c=t.dot(ws),h=n.dot(ws);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>a)return!1}return!0}const dm=new Vn,jr=new H,El=new H;class Ni{constructor(e=new H,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):dm.setFromPoints(e).getCenter(n);let s=0;for(let r=0,o=e.length;r<o;r++)s=Math.max(s,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;jr.subVectors(e,this.center);const t=jr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),s=(n-this.radius)*.5;this.center.addScaledVector(jr,s/n),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(El.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(jr.copy(e.center).add(El)),this.expandByPoint(jr.copy(e.center).sub(El))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Hi=new H,wl=new H,Xo=new H,hs=new H,Tl=new H,qo=new H,Al=new H;class $a{constructor(e=new H,t=new H(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,n,s){wl.copy(e).add(t).multiplyScalar(.5),Xo.copy(t).sub(e).normalize(),hs.copy(this.origin).sub(wl);const r=e.distanceTo(t)*.5,o=-this.direction.dot(Xo),a=hs.dot(this.direction),l=-hs.dot(Xo),c=hs.lengthSq(),h=Math.abs(1-o*o);let u,d,p,g;if(h>0)if(u=o*l-a,d=o*a-l,g=r*h,u>=0)if(d>=-g)if(d<=g){const _=1/h;u*=_,d*=_,p=u*(u+o*d+2*a)+d*(o*u+d+2*l)+c}else d=r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d=-r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;else d<=-g?(u=Math.max(0,-(-o*r+a)),d=u>0?-r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c):d<=g?(u=0,d=Math.min(Math.max(-r,-l),r),p=d*(d+2*l)+c):(u=Math.max(0,-(o*r+a)),d=u>0?r:Math.min(Math.max(-r,-l),r),p=-u*u+d*(d+2*l)+c);else d=o>0?-r:r,u=Math.max(0,-(o*d+a)),p=-u*u+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,u),s&&s.copy(wl).addScaledVector(Xo,d),p}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const n=Hi.dot(this.direction),s=Hi.dot(Hi)-n*n,r=e.radius*e.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=n-o,l=n+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,s,r,o,a,l;const c=1/this.direction.x,h=1/this.direction.y,u=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,s=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,s=(e.min.x-d.x)*c),h>=0?(r=(e.min.y-d.y)*h,o=(e.max.y-d.y)*h):(r=(e.max.y-d.y)*h,o=(e.min.y-d.y)*h),n>o||r>s||((r>n||isNaN(n))&&(n=r),(o<s||isNaN(s))&&(s=o),u>=0?(a=(e.min.z-d.z)*u,l=(e.max.z-d.z)*u):(a=(e.max.z-d.z)*u,l=(e.min.z-d.z)*u),n>l||a>s)||((a>n||n!==n)&&(n=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(n>=0?n:s,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,n,s,r){Tl.subVectors(t,e),qo.subVectors(n,e),Al.crossVectors(Tl,qo);let o=this.direction.dot(Al),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;hs.subVectors(this.origin,e);const l=a*this.direction.dot(qo.crossVectors(hs,qo));if(l<0)return null;const c=a*this.direction.dot(Tl.cross(hs));if(c<0||l+c>o)return null;const h=-a*hs.dot(Al);return h<0?null:this.at(h/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _t{constructor(e,t,n,s,r,o,a,l,c,h,u,d,p,g,_,m){_t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,s,r,o,a,l,c,h,u,d,p,g,_,m)}set(e,t,n,s,r,o,a,l,c,h,u,d,p,g,_,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=h,f[10]=u,f[14]=d,f[3]=p,f[7]=g,f[11]=_,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new _t().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,s=1/tr.setFromMatrixColumn(e,0).length(),r=1/tr.setFromMatrixColumn(e,1).length(),o=1/tr.setFromMatrixColumn(e,2).length();return t[0]=n[0]*s,t[1]=n[1]*s,t[2]=n[2]*s,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,s=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),u=Math.sin(r);if(e.order==="XYZ"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=-l*u,t[8]=c,t[1]=p+g*c,t[5]=d-_*c,t[9]=-a*l,t[2]=_-d*c,t[6]=g+p*c,t[10]=o*l}else if(e.order==="YXZ"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d+_*a,t[4]=g*a-p,t[8]=o*c,t[1]=o*u,t[5]=o*h,t[9]=-a,t[2]=p*a-g,t[6]=_+d*a,t[10]=o*l}else if(e.order==="ZXY"){const d=l*h,p=l*u,g=c*h,_=c*u;t[0]=d-_*a,t[4]=-o*u,t[8]=g+p*a,t[1]=p+g*a,t[5]=o*h,t[9]=_-d*a,t[2]=-o*c,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const d=o*h,p=o*u,g=a*h,_=a*u;t[0]=l*h,t[4]=g*c-p,t[8]=d*c+_,t[1]=l*u,t[5]=_*c+d,t[9]=p*c-g,t[2]=-c,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=_-d*u,t[8]=g*u+p,t[1]=u,t[5]=o*h,t[9]=-a*h,t[2]=-c*h,t[6]=p*u+g,t[10]=d-_*u}else if(e.order==="XZY"){const d=o*l,p=o*c,g=a*l,_=a*c;t[0]=l*h,t[4]=-u,t[8]=c*h,t[1]=d*u+_,t[5]=o*h,t[9]=p*u-g,t[2]=g*u-p,t[6]=a*h,t[10]=_*u+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fm,e,pm)}lookAt(e,t,n){const s=this.elements;return jn.subVectors(e,t),jn.lengthSq()===0&&(jn.z=1),jn.normalize(),us.crossVectors(n,jn),us.lengthSq()===0&&(Math.abs(n.z)===1?jn.x+=1e-4:jn.z+=1e-4,jn.normalize(),us.crossVectors(n,jn)),us.normalize(),Yo.crossVectors(jn,us),s[0]=us.x,s[4]=Yo.x,s[8]=jn.x,s[1]=us.y,s[5]=Yo.y,s[9]=jn.y,s[2]=us.z,s[6]=Yo.z,s[10]=jn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,s=t.elements,r=this.elements,o=n[0],a=n[4],l=n[8],c=n[12],h=n[1],u=n[5],d=n[9],p=n[13],g=n[2],_=n[6],m=n[10],f=n[14],E=n[3],y=n[7],M=n[11],O=n[15],I=s[0],P=s[4],U=s[8],K=s[12],x=s[1],b=s[5],G=s[9],k=s[13],z=s[2],ne=s[6],q=s[10],ue=s[14],Y=s[3],we=s[7],Te=s[11],Be=s[15];return r[0]=o*I+a*x+l*z+c*Y,r[4]=o*P+a*b+l*ne+c*we,r[8]=o*U+a*G+l*q+c*Te,r[12]=o*K+a*k+l*ue+c*Be,r[1]=h*I+u*x+d*z+p*Y,r[5]=h*P+u*b+d*ne+p*we,r[9]=h*U+u*G+d*q+p*Te,r[13]=h*K+u*k+d*ue+p*Be,r[2]=g*I+_*x+m*z+f*Y,r[6]=g*P+_*b+m*ne+f*we,r[10]=g*U+_*G+m*q+f*Te,r[14]=g*K+_*k+m*ue+f*Be,r[3]=E*I+y*x+M*z+O*Y,r[7]=E*P+y*b+M*ne+O*we,r[11]=E*U+y*G+M*q+O*Te,r[15]=E*K+y*k+M*ue+O*Be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],s=e[8],r=e[12],o=e[1],a=e[5],l=e[9],c=e[13],h=e[2],u=e[6],d=e[10],p=e[14],g=e[3],_=e[7],m=e[11],f=e[15];return g*(+r*l*u-s*c*u-r*a*d+n*c*d+s*a*p-n*l*p)+_*(+t*l*p-t*c*d+r*o*d-s*o*p+s*c*h-r*l*h)+m*(+t*c*u-t*a*p-r*o*u+n*o*p+r*a*h-n*c*h)+f*(-s*a*h-t*l*u+t*a*d+s*o*u-n*o*d+n*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],s=e[2],r=e[3],o=e[4],a=e[5],l=e[6],c=e[7],h=e[8],u=e[9],d=e[10],p=e[11],g=e[12],_=e[13],m=e[14],f=e[15],E=u*m*c-_*d*c+_*l*p-a*m*p-u*l*f+a*d*f,y=g*d*c-h*m*c-g*l*p+o*m*p+h*l*f-o*d*f,M=h*_*c-g*u*c+g*a*p-o*_*p-h*a*f+o*u*f,O=g*u*l-h*_*l-g*a*d+o*_*d+h*a*m-o*u*m,I=t*E+n*y+s*M+r*O;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/I;return e[0]=E*P,e[1]=(_*d*r-u*m*r-_*s*p+n*m*p+u*s*f-n*d*f)*P,e[2]=(a*m*r-_*l*r+_*s*c-n*m*c-a*s*f+n*l*f)*P,e[3]=(u*l*r-a*d*r-u*s*c+n*d*c+a*s*p-n*l*p)*P,e[4]=y*P,e[5]=(h*m*r-g*d*r+g*s*p-t*m*p-h*s*f+t*d*f)*P,e[6]=(g*l*r-o*m*r-g*s*c+t*m*c+o*s*f-t*l*f)*P,e[7]=(o*d*r-h*l*r+h*s*c-t*d*c-o*s*p+t*l*p)*P,e[8]=M*P,e[9]=(g*u*r-h*_*r-g*n*p+t*_*p+h*n*f-t*u*f)*P,e[10]=(o*_*r-g*a*r+g*n*c-t*_*c-o*n*f+t*a*f)*P,e[11]=(h*a*r-o*u*r-h*n*c+t*u*c+o*n*p-t*a*p)*P,e[12]=O*P,e[13]=(h*_*s-g*u*s+g*n*d-t*_*d-h*n*m+t*u*m)*P,e[14]=(g*a*s-o*_*s-g*n*l+t*_*l+o*n*m-t*a*m)*P,e[15]=(o*u*s-h*a*s+h*n*l-t*u*l-o*n*d+t*a*d)*P,this}scale(e){const t=this.elements,n=e.x,s=e.y,r=e.z;return t[0]*=n,t[4]*=s,t[8]*=r,t[1]*=n,t[5]*=s,t[9]*=r,t[2]*=n,t[6]*=s,t[10]*=r,t[3]*=n,t[7]*=s,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,s))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),s=Math.sin(t),r=1-n,o=e.x,a=e.y,l=e.z,c=r*o,h=r*a;return this.set(c*o+n,c*a-s*l,c*l+s*a,0,c*a+s*l,h*a+n,h*l-s*o,0,c*l-s*a,h*l+s*o,r*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,s,r,o){return this.set(1,n,r,0,e,1,o,0,t,s,1,0,0,0,0,1),this}compose(e,t,n){const s=this.elements,r=t._x,o=t._y,a=t._z,l=t._w,c=r+r,h=o+o,u=a+a,d=r*c,p=r*h,g=r*u,_=o*h,m=o*u,f=a*u,E=l*c,y=l*h,M=l*u,O=n.x,I=n.y,P=n.z;return s[0]=(1-(_+f))*O,s[1]=(p+M)*O,s[2]=(g-y)*O,s[3]=0,s[4]=(p-M)*I,s[5]=(1-(d+f))*I,s[6]=(m+E)*I,s[7]=0,s[8]=(g+y)*P,s[9]=(m-E)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,n){const s=this.elements;let r=tr.set(s[0],s[1],s[2]).length();const o=tr.set(s[4],s[5],s[6]).length(),a=tr.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),e.x=s[12],e.y=s[13],e.z=s[14],mi.copy(this);const c=1/r,h=1/o,u=1/a;return mi.elements[0]*=c,mi.elements[1]*=c,mi.elements[2]*=c,mi.elements[4]*=h,mi.elements[5]*=h,mi.elements[6]*=h,mi.elements[8]*=u,mi.elements[9]*=u,mi.elements[10]*=u,t.setFromRotationMatrix(mi),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,s,r,o,a=Ki){const l=this.elements,c=2*r/(t-e),h=2*r/(n-s),u=(t+e)/(t-e),d=(n+s)/(n-s);let p,g;if(a===Ki)p=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===Ba)p=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=u,l[12]=0,l[1]=0,l[5]=h,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,s,r,o,a=Ki){const l=this.elements,c=1/(t-e),h=1/(n-s),u=1/(o-r),d=(t+e)*c,p=(n+s)*h;let g,_;if(a===Ki)g=(o+r)*u,_=-2*u;else if(a===Ba)g=r*u,_=-1*u;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*h,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=_,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let s=0;s<16;s++)if(t[s]!==n[s])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const tr=new H,mi=new _t,fm=new H(0,0,0),pm=new H(1,1,1),us=new H,Yo=new H,jn=new H,lu=new _t,cu=new Qi;class Di{constructor(e=0,t=0,n=0,s=Di.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,s=this._order){return this._x=e,this._y=t,this._z=n,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const s=e.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],h=s[9],u=s[2],d=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(Rn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Rn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,r),this._z=0);break;case"ZXY":this._x=Math.asin(Rn(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Rn(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(d,p),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Rn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-u,r)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-Rn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return lu.makeRotationFromQuaternion(e),this.setFromRotationMatrix(lu,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cu.setFromEuler(this),this.setFromQuaternion(cu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Di.DEFAULT_ORDER="XYZ";class of{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let mm=0;const hu=new H,nr=new Qi,Vi=new _t,$o=new H,Kr=new H,gm=new H,_m=new Qi,uu=new H(1,0,0),du=new H(0,1,0),fu=new H(0,0,1),pu={type:"added"},vm={type:"removed"},ir={type:"childadded",child:null},Rl={type:"childremoved",child:null};class Kt extends Br{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:mm++}),this.uuid=yi(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Kt.DEFAULT_UP.clone();const e=new H,t=new Di,n=new Qi,s=new H(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new _t},normalMatrix:{value:new Tt}}),this.matrix=new _t,this.matrixWorld=new _t,this.matrixAutoUpdate=Kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new of,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.multiply(nr),this}rotateOnWorldAxis(e,t){return nr.setFromAxisAngle(e,t),this.quaternion.premultiply(nr),this}rotateX(e){return this.rotateOnAxis(uu,e)}rotateY(e){return this.rotateOnAxis(du,e)}rotateZ(e){return this.rotateOnAxis(fu,e)}translateOnAxis(e,t){return hu.copy(e).applyQuaternion(this.quaternion),this.position.add(hu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(uu,e)}translateY(e){return this.translateOnAxis(du,e)}translateZ(e){return this.translateOnAxis(fu,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Vi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?$o.copy(e):$o.set(e,t,n);const s=this.parent;this.updateWorldMatrix(!0,!1),Kr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Vi.lookAt(Kr,$o,this.up):Vi.lookAt($o,Kr,this.up),this.quaternion.setFromRotationMatrix(Vi),s&&(Vi.extractRotation(s.matrixWorld),nr.setFromRotationMatrix(Vi),this.quaternion.premultiply(nr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pu),ir.child=e,this.dispatchEvent(ir),ir.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vm),Rl.child=e,this.dispatchEvent(Rl),Rl.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pu),ir.child=e,this.dispatchEvent(ir),ir.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,s=this.children.length;n<s;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,e,gm),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Kr,_m,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,s=t.length;n<s;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const u=l[c];r(e.shapes,u)}else r(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(e.materials,this.material[l]));s.material=a}else s.material=r(e.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),h=o(e.images),u=o(e.shapes),d=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),h.length>0&&(n.images=h),u.length>0&&(n.shapes=u),d.length>0&&(n.skeletons=d),p.length>0&&(n.animations=p),g.length>0&&(n.nodes=g)}return n.object=s,n;function o(a){const l=[];for(const c in a){const h=a[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const s=e.children[n];this.add(s.clone())}return this}}Kt.DEFAULT_UP=new H(0,1,0);Kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new H,Gi=new H,Cl=new H,Wi=new H,sr=new H,rr=new H,mu=new H,Pl=new H,Ll=new H,Il=new H,Dl=new Dt,Nl=new Dt,Ul=new Dt;class oi{constructor(e=new H,t=new H,n=new H){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,s){s.subVectors(n,t),gi.subVectors(e,t),s.cross(gi);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(e,t,n,s,r){gi.subVectors(s,t),Gi.subVectors(n,t),Cl.subVectors(e,t);const o=gi.dot(gi),a=gi.dot(Gi),l=gi.dot(Cl),c=Gi.dot(Gi),h=Gi.dot(Cl),u=o*c-a*a;if(u===0)return r.set(0,0,0),null;const d=1/u,p=(c*l-a*h)*d,g=(o*h-a*l)*d;return r.set(1-p-g,g,p)}static containsPoint(e,t,n,s){return this.getBarycoord(e,t,n,s,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,n,s,r,o,a,l){return this.getBarycoord(e,t,n,s,Wi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Wi.x),l.addScaledVector(o,Wi.y),l.addScaledVector(a,Wi.z),l)}static getInterpolatedAttribute(e,t,n,s,r,o){return Dl.setScalar(0),Nl.setScalar(0),Ul.setScalar(0),Dl.fromBufferAttribute(e,t),Nl.fromBufferAttribute(e,n),Ul.fromBufferAttribute(e,s),o.setScalar(0),o.addScaledVector(Dl,r.x),o.addScaledVector(Nl,r.y),o.addScaledVector(Ul,r.z),o}static isFrontFacing(e,t,n,s){return gi.subVectors(n,t),Gi.subVectors(e,t),gi.cross(Gi).dot(s)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,s){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,n,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Gi.subVectors(this.a,this.b),gi.cross(Gi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,s,r){return oi.getInterpolation(e,this.a,this.b,this.c,t,n,s,r)}containsPoint(e){return oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,s=this.b,r=this.c;let o,a;sr.subVectors(s,n),rr.subVectors(r,n),Pl.subVectors(e,n);const l=sr.dot(Pl),c=rr.dot(Pl);if(l<=0&&c<=0)return t.copy(n);Ll.subVectors(e,s);const h=sr.dot(Ll),u=rr.dot(Ll);if(h>=0&&u<=h)return t.copy(s);const d=l*u-h*c;if(d<=0&&l>=0&&h<=0)return o=l/(l-h),t.copy(n).addScaledVector(sr,o);Il.subVectors(e,r);const p=sr.dot(Il),g=rr.dot(Il);if(g>=0&&p<=g)return t.copy(r);const _=p*c-l*g;if(_<=0&&c>=0&&g<=0)return a=c/(c-g),t.copy(n).addScaledVector(rr,a);const m=h*g-p*u;if(m<=0&&u-h>=0&&p-g>=0)return mu.subVectors(r,s),a=(u-h)/(u-h+(p-g)),t.copy(s).addScaledVector(mu,a);const f=1/(m+_+d);return o=_*f,a=d*f,t.copy(n).addScaledVector(sr,o).addScaledVector(rr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const af={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},jo={h:0,s:0,l:0};function Fl(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Wt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=n,Lt.toWorkingColorSpace(this,s),this}setHSL(e,t,n,s=Lt.workingColorSpace){if(e=Ch(e,1),t=Rn(t,0,1),n=Rn(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=Fl(o,r,e+1/3),this.g=Fl(o,r,e),this.b=Fl(o,r,e-1/3)}return Lt.toWorkingColorSpace(this,s),this}setStyle(e,t=Wt){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Wt){const n=af[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=br(e.r),this.g=br(e.g),this.b=br(e.b),this}copyLinearToSRGB(e){return this.r=yl(e.r),this.g=yl(e.g),this.b=yl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wt){return Lt.fromWorkingColorSpace(Fn.copy(this),e),Math.round(Rn(Fn.r*255,0,255))*65536+Math.round(Rn(Fn.g*255,0,255))*256+Math.round(Rn(Fn.b*255,0,255))}getHexString(e=Wt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.fromWorkingColorSpace(Fn.copy(this),t);const n=Fn.r,s=Fn.g,r=Fn.b,o=Math.max(n,s,r),a=Math.min(n,s,r);let l,c;const h=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=h<=.5?u/(o+a):u/(2-o-a),o){case n:l=(s-r)/u+(s<r?6:0);break;case s:l=(r-n)/u+2;break;case r:l=(n-s)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=Lt.workingColorSpace){return Lt.fromWorkingColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=Wt){Lt.fromWorkingColorSpace(Fn.copy(this),e);const t=Fn.r,n=Fn.g,s=Fn.b;return e!==Wt?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(s*255)})`}offsetHSL(e,t,n){return this.getHSL(ds),this.setHSL(ds.h+e,ds.s+t,ds.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(ds),e.getHSL(jo);const n=fo(ds.h,jo.h,t),s=fo(ds.s,jo.s,t),r=fo(ds.l,jo.l,t);return this.setHSL(n,s,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,s=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*s,this.g=r[1]*t+r[4]*n+r[7]*s,this.b=r[2]*t+r[5]*n+r[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new Xe;Xe.NAMES=af;let xm=0;class Mi extends Br{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:xm++}),this.uuid=yi(),this.name="",this.type="Material",this.blending=Mr,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=vc,this.blendDst=xc,this.blendEquation=Ns,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=Tr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=tu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(n):s&&s.isVector3&&n&&n.isVector3?s.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Mr&&(n.blending=this.blending),this.side!==Ji&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==vc&&(n.blendSrc=this.blendSrc),this.blendDst!==xc&&(n.blendDst=this.blendDst),this.blendEquation!==Ns&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Tr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==tu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(t){const r=s(e.textures),o=s(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const s=t.length;n=new Array(s);for(let r=0;r!==s;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class sn extends Mi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.combine=Ud,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const ji=ym();function ym(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),s=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,s[l]=24,s[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,s[l]=-c-1,s[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,s[l]=13,s[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,s[l]=24,s[l|256]=24):(n[l]=31744,n[l|256]=64512,s[l]=13,s[l|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,h=0;for(;(c&8388608)===0;)c<<=1,h-=8388608;c&=-8388609,h+=947912704,r[l]=c|h}for(let l=1024;l<2048;++l)r[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:s,mantissaTable:r,exponentTable:o,offsetTable:a}}function Mm(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=Rn(i,-65504,65504),ji.floatView[0]=i;const e=ji.uint32View[0],t=e>>23&511;return ji.baseTable[t]+((e&8388607)>>ji.shiftTable[t])}function Sm(i){const e=i>>10;return ji.uint32View[0]=ji.mantissaTable[ji.offsetTable[e]+(i&1023)]+ji.exponentTable[e],ji.floatView[0]}const Ko={toHalfFloat:Mm,fromHalfFloat:Sm},un=new H,Zo=new Ke;class An{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=nh,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[e+s]=t.array[n+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Zo.fromBufferAttribute(this,t),Zo.applyMatrix3(e),this.setXY(t,Zo.x,Zo.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,s){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e*=this.itemSize,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=s,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==nh&&(e.usage=this.usage),e}}class lf extends An{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class cf extends An{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class Nt extends An{constructor(e,t,n){super(new Float32Array(e),t,n)}}let bm=0;const ti=new _t,Ol=new Kt,or=new H,Kn=new Vn,Zr=new Vn,Sn=new H;class Qt extends Br{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:bm++}),this.uuid=yi(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(nf(e)?cf:lf)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new Tt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return ti.makeRotationFromQuaternion(e),this.applyMatrix4(ti),this}rotateX(e){return ti.makeRotationX(e),this.applyMatrix4(ti),this}rotateY(e){return ti.makeRotationY(e),this.applyMatrix4(ti),this}rotateZ(e){return ti.makeRotationZ(e),this.applyMatrix4(ti),this}translate(e,t,n){return ti.makeTranslation(e,t,n),this.applyMatrix4(ti),this}scale(e,t,n){return ti.makeScale(e,t,n),this.applyMatrix4(ti),this}lookAt(e){return Ol.lookAt(e),Ol.updateMatrix(),this.applyMatrix4(Ol.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(or).negate(),this.translate(or.x,or.y,or.z),this}setFromPoints(e){const t=[];for(let n=0,s=e.length;n<s;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new Nt(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new H(-1/0,-1/0,-1/0),new H(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,s=t.length;n<s;n++){const r=t[n];Kn.setFromBufferAttribute(r),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ni);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new H,1/0);return}if(e){const n=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Zr.setFromBufferAttribute(a),this.morphTargetsRelative?(Sn.addVectors(Kn.min,Zr.min),Kn.expandByPoint(Sn),Sn.addVectors(Kn.max,Zr.max),Kn.expandByPoint(Sn)):(Kn.expandByPoint(Zr.min),Kn.expandByPoint(Zr.max))}Kn.getCenter(n);let s=0;for(let r=0,o=e.count;r<o;r++)Sn.fromBufferAttribute(e,r),s=Math.max(s,n.distanceToSquared(Sn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],l=this.morphTargetsRelative;for(let c=0,h=a.count;c<h;c++)Sn.fromBufferAttribute(a,c),l&&(or.fromBufferAttribute(e,c),Sn.add(or)),s=Math.max(s,n.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,s=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let U=0;U<n.count;U++)a[U]=new H,l[U]=new H;const c=new H,h=new H,u=new H,d=new Ke,p=new Ke,g=new Ke,_=new H,m=new H;function f(U,K,x){c.fromBufferAttribute(n,U),h.fromBufferAttribute(n,K),u.fromBufferAttribute(n,x),d.fromBufferAttribute(r,U),p.fromBufferAttribute(r,K),g.fromBufferAttribute(r,x),h.sub(c),u.sub(c),p.sub(d),g.sub(d);const b=1/(p.x*g.y-g.x*p.y);isFinite(b)&&(_.copy(h).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(b),m.copy(u).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(b),a[U].add(_),a[K].add(_),a[x].add(_),l[U].add(m),l[K].add(m),l[x].add(m))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let U=0,K=E.length;U<K;++U){const x=E[U],b=x.start,G=x.count;for(let k=b,z=b+G;k<z;k+=3)f(e.getX(k+0),e.getX(k+1),e.getX(k+2))}const y=new H,M=new H,O=new H,I=new H;function P(U){O.fromBufferAttribute(s,U),I.copy(O);const K=a[U];y.copy(K),y.sub(O.multiplyScalar(O.dot(K))).normalize(),M.crossVectors(I,K);const b=M.dot(l[U])<0?-1:1;o.setXYZW(U,y.x,y.y,y.z,b)}for(let U=0,K=E.length;U<K;++U){const x=E[U],b=x.start,G=x.count;for(let k=b,z=b+G;k<z;k+=3)P(e.getX(k+0)),P(e.getX(k+1)),P(e.getX(k+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new An(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,p=n.count;d<p;d++)n.setXYZ(d,0,0,0);const s=new H,r=new H,o=new H,a=new H,l=new H,c=new H,h=new H,u=new H;if(e)for(let d=0,p=e.count;d<p;d+=3){const g=e.getX(d+0),_=e.getX(d+1),m=e.getX(d+2);s.fromBufferAttribute(t,g),r.fromBufferAttribute(t,_),o.fromBufferAttribute(t,m),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),a.fromBufferAttribute(n,g),l.fromBufferAttribute(n,_),c.fromBufferAttribute(n,m),a.add(h),l.add(h),c.add(h),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(_,l.x,l.y,l.z),n.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,p=t.count;d<p;d+=3)s.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),h.subVectors(o,r),u.subVectors(s,r),h.cross(u),n.setXYZ(d+0,h.x,h.y,h.z),n.setXYZ(d+1,h.x,h.y,h.z),n.setXYZ(d+2,h.x,h.y,h.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(a,l){const c=a.array,h=a.itemSize,u=a.normalized,d=new c.constructor(l.length*h);let p=0,g=0;for(let _=0,m=l.length;_<m;_++){a.isInterleavedBufferAttribute?p=l[_]*a.data.stride+a.offset:p=l[_]*h;for(let f=0;f<h;f++)d[g++]=c[p++]}return new An(d,h,u)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Qt,n=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=e(l,n);t.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let h=0,u=c.length;h<u;h++){const d=c[h],p=e(d,n);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let u=0,d=c.length;u<d;u++){const p=c[u];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,r=!0)}r&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const r=e.morphAttributes;for(const c in r){const h=[],u=r[c];for(let d=0,p=u.length;d<p;d++)h.push(u[d].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,h=o.length;c<h;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gu=new _t,Ts=new $a,Jo=new Ni,_u=new H,Qo=new H,ea=new H,ta=new H,Bl=new H,na=new H,vu=new H,ia=new H;class Ae extends Kt{constructor(e=new Qt,t=new sn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,s=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(s,e);const a=this.morphTargetInfluences;if(r&&a){na.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const h=a[l],u=r[l];h!==0&&(Bl.fromBufferAttribute(u,e),o?na.addScaledVector(Bl,h):na.addScaledVector(Bl.sub(t),h))}t.add(na)}return t}raycast(e,t){const n=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Jo.copy(n.boundingSphere),Jo.applyMatrix4(r),Ts.copy(e.ray).recast(e.near),!(Jo.containsPoint(Ts.origin)===!1&&(Ts.intersectSphere(Jo,_u)===null||Ts.origin.distanceToSquared(_u)>(e.far-e.near)**2))&&(gu.copy(r).invert(),Ts.copy(e.ray).applyMatrix4(gu),!(n.boundingBox!==null&&Ts.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ts)))}_computeIntersections(e,t,n){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,u=r.attributes.normal,d=r.groups,p=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,O=y;M<O;M+=3){const I=a.getX(M),P=a.getX(M+1),U=a.getX(M+2);s=sa(this,f,e,n,c,h,u,I,P,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(a.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=a.getX(m),y=a.getX(m+1),M=a.getX(m+2);s=sa(this,o,e,n,c,h,u,E,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,_=d.length;g<_;g++){const m=d[g],f=o[m.materialIndex],E=Math.max(m.start,p.start),y=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let M=E,O=y;M<O;M+=3){const I=M,P=M+1,U=M+2;s=sa(this,f,e,n,c,h,u,I,P,U),s&&(s.faceIndex=Math.floor(M/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),_=Math.min(l.count,p.start+p.count);for(let m=g,f=_;m<f;m+=3){const E=m,y=m+1,M=m+2;s=sa(this,o,e,n,c,h,u,E,y,M),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Em(i,e,t,n,s,r,o,a){let l;if(e.side===Tn?l=n.intersectTriangle(o,r,s,!0,a):l=n.intersectTriangle(s,r,o,e.side===Ji,a),l===null)return null;ia.copy(a),ia.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(ia);return c<t.near||c>t.far?null:{distance:c,point:ia.clone(),object:i}}function sa(i,e,t,n,s,r,o,a,l,c){i.getVertexPosition(a,Qo),i.getVertexPosition(l,ea),i.getVertexPosition(c,ta);const h=Em(i,e,t,n,Qo,ea,ta,vu);if(h){const u=new H;oi.getBarycoord(vu,Qo,ea,ta,u),s&&(h.uv=oi.getInterpolatedAttribute(s,a,l,c,u,new Ke)),r&&(h.uv1=oi.getInterpolatedAttribute(r,a,l,c,u,new Ke)),o&&(h.normal=oi.getInterpolatedAttribute(o,a,l,c,u,new H),h.normal.dot(n.direction)>0&&h.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new H,materialIndex:0};oi.getNormal(Qo,ea,ta,d.normal),h.face=d,h.barycoord=u}return h}class Pt extends Qt{constructor(e=1,t=1,n=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],h=[],u=[];let d=0,p=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,s,o,2),g("x","z","y",1,-1,e,n,-t,s,o,3),g("x","y","z",1,-1,e,t,n,s,r,4),g("x","y","z",-1,-1,e,t,-n,s,r,5),this.setIndex(l),this.setAttribute("position",new Nt(c,3)),this.setAttribute("normal",new Nt(h,3)),this.setAttribute("uv",new Nt(u,2));function g(_,m,f,E,y,M,O,I,P,U,K){const x=M/P,b=O/U,G=M/2,k=O/2,z=I/2,ne=P+1,q=U+1;let ue=0,Y=0;const we=new H;for(let Te=0;Te<q;Te++){const Be=Te*b-k;for(let nt=0;nt<ne;nt++){const at=nt*x-G;we[_]=at*E,we[m]=Be*y,we[f]=z,c.push(we.x,we.y,we.z),we[_]=0,we[m]=0,we[f]=I>0?1:-1,h.push(we.x,we.y,we.z),u.push(nt/P),u.push(1-Te/U),ue+=1}}for(let Te=0;Te<U;Te++)for(let Be=0;Be<P;Be++){const nt=d+Be+ne*Te,at=d+Be+ne*(Te+1),ce=d+(Be+1)+ne*(Te+1),ve=d+(Be+1)+ne*Te;l.push(nt,at,ve),l.push(at,ce,ve),Y+=6}a.addGroup(p,Y,K),p+=Y,d+=ue}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Ir(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const s=i[t][n];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=s.clone():Array.isArray(s)?e[t][n]=s.slice():e[t][n]=s}}return e}function Hn(i){const e={};for(let t=0;t<i.length;t++){const n=Ir(i[t]);for(const s in n)e[s]=n[s]}return e}function wm(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function hf(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const xo={clone:Ir,merge:Hn};var Tm=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Am=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class rn extends Mi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Tm,this.fragmentShader=Am,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Ir(e.uniforms),this.uniformsGroups=wm(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?t.uniforms[s]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[s]={type:"m4",value:o.toArray()}:t.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const s in this.extensions)this.extensions[s]===!0&&(n[s]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class uf extends Kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new _t,this.projectionMatrix=new _t,this.projectionMatrixInverse=new _t,this.coordinateSystem=Ki}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const fs=new H,xu=new Ke,yu=new Ke;class _n extends uf{constructor(e=50,t=1,n=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Lr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(uo*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Lr*2*Math.atan(Math.tan(uo*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){fs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(fs.x,fs.y).multiplyScalar(-e/fs.z),fs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(fs.x,fs.y).multiplyScalar(-e/fs.z)}getViewSize(e,t){return this.getViewBounds(e,xu,yu),t.subVectors(yu,xu)}setViewOffset(e,t,n,s,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(uo*.5*this.fov)/this.zoom,n=2*t,s=this.aspect*n,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,t-=o.offsetY*n/c,s*=o.width/l,n*=o.height/c}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ar=-90,lr=1;class df extends Kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new _n(ar,lr,e,t);s.layers=this.layers,this.add(s);const r=new _n(ar,lr,e,t);r.layers=this.layers,this.add(r);const o=new _n(ar,lr,e,t);o.layers=this.layers,this.add(o);const a=new _n(ar,lr,e,t);a.layers=this.layers,this.add(a);const l=new _n(ar,lr,e,t);l.layers=this.layers,this.add(l);const c=new _n(ar,lr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,s,r,o,a,l]=t;for(const c of t)this.remove(c);if(e===Ki)n.up.set(0,1,0),n.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Ba)n.up.set(0,-1,0),n.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,h]=this.children,u=e.getRenderTarget(),d=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,s),e.render(t,r),e.setRenderTarget(n,1,s),e.render(t,o),e.setRenderTarget(n,2,s),e.render(t,a),e.setRenderTarget(n,3,s),e.render(t,l),e.setRenderTarget(n,4,s),e.render(t,c),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,s),e.render(t,h),e.setRenderTarget(u,d,p),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class ff extends pn{constructor(e,t,n,s,r,o,a,l,c,h){e=e!==void 0?e:[],t=t!==void 0?t:Ar,super(e,t,n,s,r,o,a,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class pf extends li{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},s=[n,n,n,n,n,n];this.texture=new ff(s,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:fn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Pt(5,5,5),r=new rn({name:"CubemapFromEquirect",uniforms:Ir(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Tn,blending:Zi});r.uniforms.tEquirect.value=t;const o=new Ae(s,r),a=t.minFilter;return t.minFilter===Ii&&(t.minFilter=fn),new df(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,s){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,s);e.setRenderTarget(r)}}const kl=new H,Rm=new H,Cm=new Tt;class Is{constructor(e=new H(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,s){return this.normal.set(e,t,n),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const s=kl.subVectors(n,t).cross(Rm.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(kl),s=this.normal.dot(n);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Cm.getNormalMatrix(e),s=this.coplanarPoint(kl).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-s.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const As=new Ni,ra=new H;class Ph{constructor(e=new Is,t=new Is,n=new Is,s=new Is,r=new Is,o=new Is){this.planes=[e,t,n,s,r,o]}set(e,t,n,s,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ki){const n=this.planes,s=e.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],h=s[5],u=s[6],d=s[7],p=s[8],g=s[9],_=s[10],m=s[11],f=s[12],E=s[13],y=s[14],M=s[15];if(n[0].setComponents(l-r,d-c,m-p,M-f).normalize(),n[1].setComponents(l+r,d+c,m+p,M+f).normalize(),n[2].setComponents(l+o,d+h,m+g,M+E).normalize(),n[3].setComponents(l-o,d-h,m-g,M-E).normalize(),n[4].setComponents(l-a,d-u,m-_,M-y).normalize(),t===Ki)n[5].setComponents(l+a,d+u,m+_,M+y).normalize();else if(t===Ba)n[5].setComponents(a,u,_,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),As.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),As.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(As)}intersectsSprite(e){return As.center.set(0,0,0),As.radius=.7071067811865476,As.applyMatrix4(e.matrixWorld),this.intersectsSphere(As)}intersectsSphere(e){const t=this.planes,n=e.center,s=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const s=t[n];if(ra.x=s.normal.x>0?e.max.x:e.min.x,ra.y=s.normal.y>0?e.max.y:e.min.y,ra.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(ra)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function mf(){let i=null,e=!1,t=null,n=null;function s(r,o){t(r,o),n=i.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(s),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){i=r}}}function Pm(i){const e=new WeakMap;function t(a,l){const c=a.array,h=a.usage,u=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,h),a.onUploadCallback();let p;if(c instanceof Float32Array)p=i.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=i.HALF_FLOAT:p=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=i.SHORT;else if(c instanceof Uint32Array)p=i.UNSIGNED_INT;else if(c instanceof Int32Array)p=i.INT;else if(c instanceof Int8Array)p=i.BYTE;else if(c instanceof Uint8Array)p=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function n(a,l,c){const h=l.array,u=l.updateRanges;if(i.bindBuffer(c,a),u.length===0)i.bufferSubData(c,0,h);else{u.sort((p,g)=>p.start-g.start);let d=0;for(let p=1;p<u.length;p++){const g=u[d],_=u[p];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++d,u[d]=_)}u.length=d+1;for(let p=0,g=u.length;p<g;p++){const _=u[p];i.bufferSubData(c,_.start*h.BYTES_PER_ELEMENT,h,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(i.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const h=e.get(a);(!h||h.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,t(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class En extends Qt{constructor(e=1,t=1,n=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:s};const r=e/2,o=t/2,a=Math.floor(n),l=Math.floor(s),c=a+1,h=l+1,u=e/a,d=t/l,p=[],g=[],_=[],m=[];for(let f=0;f<h;f++){const E=f*d-o;for(let y=0;y<c;y++){const M=y*u-r;g.push(M,-E,0),_.push(0,0,1),m.push(y/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let E=0;E<a;E++){const y=E+c*f,M=E+c*(f+1),O=E+1+c*(f+1),I=E+1+c*f;p.push(y,M,I),p.push(M,O,I)}this.setIndex(p),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new En(e.width,e.height,e.widthSegments,e.heightSegments)}}var Lm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Im=`#ifdef USE_ALPHAHASH
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
#endif`,Dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Nm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Um=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Fm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Om=`#ifdef USE_AOMAP
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
#endif`,Bm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,km=`#ifdef USE_BATCHING
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
#endif`,zm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Hm=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Vm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Gm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Wm=`#ifdef USE_IRIDESCENCE
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
#endif`,Xm=`#ifdef USE_BUMPMAP
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
#endif`,qm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Ym=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,$m=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,jm=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Km=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Zm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Jm=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Qm=`#if defined( USE_COLOR_ALPHA )
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
#endif`,e0=`#define PI 3.141592653589793
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
} // validated`,t0=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,n0=`vec3 transformedNormal = objectNormal;
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
#endif`,i0=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,s0=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,r0=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,o0=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,a0="gl_FragColor = linearToOutputTexel( gl_FragColor );",l0=`
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
}`,c0=`#ifdef USE_ENVMAP
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
#endif`,h0=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,u0=`#ifdef USE_ENVMAP
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
#endif`,d0=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,f0=`#ifdef USE_ENVMAP
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
#endif`,p0=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,m0=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,g0=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,_0=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,v0=`#ifdef USE_GRADIENTMAP
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
}`,x0=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,y0=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,M0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,S0=`uniform bool receiveShadow;
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
#endif`,b0=`#ifdef USE_ENVMAP
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
#endif`,E0=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,w0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,T0=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,A0=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,R0=`PhysicalMaterial material;
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
#endif`,C0=`struct PhysicalMaterial {
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
}`,P0=`
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
#endif`,L0=`#if defined( RE_IndirectDiffuse )
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
#endif`,I0=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,D0=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,N0=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,U0=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,F0=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,O0=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,B0=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,k0=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,z0=`#if defined( USE_POINTS_UV )
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
#endif`,H0=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,V0=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,G0=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,W0=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,X0=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,q0=`#ifdef USE_MORPHTARGETS
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
#endif`,Y0=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,$0=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,j0=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,K0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Z0=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,J0=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Q0=`#ifdef USE_NORMALMAP
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
#endif`,eg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,tg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,ng=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ig=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,sg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,og=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ag=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,lg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,cg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,hg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ug=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,dg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,fg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,pg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,mg=`float getShadowMask() {
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
}`,gg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,_g=`#ifdef USE_SKINNING
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
#endif`,vg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,xg=`#ifdef USE_SKINNING
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
#endif`,yg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Mg=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Sg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,bg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Eg=`#ifdef USE_TRANSMISSION
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
#endif`,wg=`#ifdef USE_TRANSMISSION
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
#endif`,Tg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ag=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Rg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Cg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Pg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Lg=`uniform sampler2D t2D;
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
}`,Ig=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Dg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Ng=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ug=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Fg=`#include <common>
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
}`,Og=`#if DEPTH_PACKING == 3200
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
}`,Bg=`#define DISTANCE
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
}`,kg=`#define DISTANCE
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
}`,zg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Hg=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Vg=`uniform float scale;
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
}`,Gg=`uniform vec3 diffuse;
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
}`,Wg=`#include <common>
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
}`,Xg=`uniform vec3 diffuse;
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
}`,qg=`#define LAMBERT
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
}`,Yg=`#define LAMBERT
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
}`,$g=`#define MATCAP
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
}`,jg=`#define MATCAP
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
}`,Kg=`#define NORMAL
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
}`,Zg=`#define NORMAL
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
}`,Jg=`#define PHONG
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
}`,Qg=`#define PHONG
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
}`,e_=`#define STANDARD
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
}`,t_=`#define STANDARD
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
}`,n_=`#define TOON
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
}`,i_=`#define TOON
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
}`,s_=`uniform float size;
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
}`,r_=`uniform vec3 diffuse;
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
}`,o_=`#include <common>
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
}`,a_=`uniform vec3 color;
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
}`,l_=`uniform float rotation;
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
}`,c_=`uniform vec3 diffuse;
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
}`,wt={alphahash_fragment:Lm,alphahash_pars_fragment:Im,alphamap_fragment:Dm,alphamap_pars_fragment:Nm,alphatest_fragment:Um,alphatest_pars_fragment:Fm,aomap_fragment:Om,aomap_pars_fragment:Bm,batching_pars_vertex:km,batching_vertex:zm,begin_vertex:Hm,beginnormal_vertex:Vm,bsdfs:Gm,iridescence_fragment:Wm,bumpmap_pars_fragment:Xm,clipping_planes_fragment:qm,clipping_planes_pars_fragment:Ym,clipping_planes_pars_vertex:$m,clipping_planes_vertex:jm,color_fragment:Km,color_pars_fragment:Zm,color_pars_vertex:Jm,color_vertex:Qm,common:e0,cube_uv_reflection_fragment:t0,defaultnormal_vertex:n0,displacementmap_pars_vertex:i0,displacementmap_vertex:s0,emissivemap_fragment:r0,emissivemap_pars_fragment:o0,colorspace_fragment:a0,colorspace_pars_fragment:l0,envmap_fragment:c0,envmap_common_pars_fragment:h0,envmap_pars_fragment:u0,envmap_pars_vertex:d0,envmap_physical_pars_fragment:b0,envmap_vertex:f0,fog_vertex:p0,fog_pars_vertex:m0,fog_fragment:g0,fog_pars_fragment:_0,gradientmap_pars_fragment:v0,lightmap_pars_fragment:x0,lights_lambert_fragment:y0,lights_lambert_pars_fragment:M0,lights_pars_begin:S0,lights_toon_fragment:E0,lights_toon_pars_fragment:w0,lights_phong_fragment:T0,lights_phong_pars_fragment:A0,lights_physical_fragment:R0,lights_physical_pars_fragment:C0,lights_fragment_begin:P0,lights_fragment_maps:L0,lights_fragment_end:I0,logdepthbuf_fragment:D0,logdepthbuf_pars_fragment:N0,logdepthbuf_pars_vertex:U0,logdepthbuf_vertex:F0,map_fragment:O0,map_pars_fragment:B0,map_particle_fragment:k0,map_particle_pars_fragment:z0,metalnessmap_fragment:H0,metalnessmap_pars_fragment:V0,morphinstance_vertex:G0,morphcolor_vertex:W0,morphnormal_vertex:X0,morphtarget_pars_vertex:q0,morphtarget_vertex:Y0,normal_fragment_begin:$0,normal_fragment_maps:j0,normal_pars_fragment:K0,normal_pars_vertex:Z0,normal_vertex:J0,normalmap_pars_fragment:Q0,clearcoat_normal_fragment_begin:eg,clearcoat_normal_fragment_maps:tg,clearcoat_pars_fragment:ng,iridescence_pars_fragment:ig,opaque_fragment:sg,packing:rg,premultiplied_alpha_fragment:og,project_vertex:ag,dithering_fragment:lg,dithering_pars_fragment:cg,roughnessmap_fragment:hg,roughnessmap_pars_fragment:ug,shadowmap_pars_fragment:dg,shadowmap_pars_vertex:fg,shadowmap_vertex:pg,shadowmask_pars_fragment:mg,skinbase_vertex:gg,skinning_pars_vertex:_g,skinning_vertex:vg,skinnormal_vertex:xg,specularmap_fragment:yg,specularmap_pars_fragment:Mg,tonemapping_fragment:Sg,tonemapping_pars_fragment:bg,transmission_fragment:Eg,transmission_pars_fragment:wg,uv_pars_fragment:Tg,uv_pars_vertex:Ag,uv_vertex:Rg,worldpos_vertex:Cg,background_vert:Pg,background_frag:Lg,backgroundCube_vert:Ig,backgroundCube_frag:Dg,cube_vert:Ng,cube_frag:Ug,depth_vert:Fg,depth_frag:Og,distanceRGBA_vert:Bg,distanceRGBA_frag:kg,equirect_vert:zg,equirect_frag:Hg,linedashed_vert:Vg,linedashed_frag:Gg,meshbasic_vert:Wg,meshbasic_frag:Xg,meshlambert_vert:qg,meshlambert_frag:Yg,meshmatcap_vert:$g,meshmatcap_frag:jg,meshnormal_vert:Kg,meshnormal_frag:Zg,meshphong_vert:Jg,meshphong_frag:Qg,meshphysical_vert:e_,meshphysical_frag:t_,meshtoon_vert:n_,meshtoon_frag:i_,points_vert:s_,points_frag:r_,shadow_vert:o_,shadow_frag:a_,sprite_vert:l_,sprite_frag:c_},ke={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Tt}},envmap:{envMap:{value:null},envMapRotation:{value:new Tt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Tt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Tt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Tt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Tt},normalScale:{value:new Ke(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Tt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Tt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Tt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Tt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0},uvTransform:{value:new Tt}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new Ke(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Tt},alphaMap:{value:null},alphaMapTransform:{value:new Tt},alphaTest:{value:0}}},Ci={basic:{uniforms:Hn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:wt.meshbasic_vert,fragmentShader:wt.meshbasic_frag},lambert:{uniforms:Hn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Xe(0)}}]),vertexShader:wt.meshlambert_vert,fragmentShader:wt.meshlambert_frag},phong:{uniforms:Hn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30}}]),vertexShader:wt.meshphong_vert,fragmentShader:wt.meshphong_frag},standard:{uniforms:Hn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag},toon:{uniforms:Hn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new Xe(0)}}]),vertexShader:wt.meshtoon_vert,fragmentShader:wt.meshtoon_frag},matcap:{uniforms:Hn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:wt.meshmatcap_vert,fragmentShader:wt.meshmatcap_frag},points:{uniforms:Hn([ke.points,ke.fog]),vertexShader:wt.points_vert,fragmentShader:wt.points_frag},dashed:{uniforms:Hn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:wt.linedashed_vert,fragmentShader:wt.linedashed_frag},depth:{uniforms:Hn([ke.common,ke.displacementmap]),vertexShader:wt.depth_vert,fragmentShader:wt.depth_frag},normal:{uniforms:Hn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:wt.meshnormal_vert,fragmentShader:wt.meshnormal_frag},sprite:{uniforms:Hn([ke.sprite,ke.fog]),vertexShader:wt.sprite_vert,fragmentShader:wt.sprite_frag},background:{uniforms:{uvTransform:{value:new Tt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:wt.background_vert,fragmentShader:wt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Tt}},vertexShader:wt.backgroundCube_vert,fragmentShader:wt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:wt.cube_vert,fragmentShader:wt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:wt.equirect_vert,fragmentShader:wt.equirect_frag},distanceRGBA:{uniforms:Hn([ke.common,ke.displacementmap,{referencePosition:{value:new H},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:wt.distanceRGBA_vert,fragmentShader:wt.distanceRGBA_frag},shadow:{uniforms:Hn([ke.lights,ke.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:wt.shadow_vert,fragmentShader:wt.shadow_frag}};Ci.physical={uniforms:Hn([Ci.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Tt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Tt},clearcoatNormalScale:{value:new Ke(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Tt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Tt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Tt},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Tt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Tt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Tt},transmissionSamplerSize:{value:new Ke},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Tt},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Tt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Tt},anisotropyVector:{value:new Ke},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Tt}}]),vertexShader:wt.meshphysical_vert,fragmentShader:wt.meshphysical_frag};const oa={r:0,b:0,g:0},Rs=new Di,h_=new _t;function u_(i,e,t,n,s,r,o){const a=new Xe(0);let l=r===!0?0:1,c,h,u=null,d=0,p=null;function g(E){let y=E.isScene===!0?E.background:null;return y&&y.isTexture&&(y=(E.backgroundBlurriness>0?t:e).get(y)),y}function _(E){let y=!1;const M=g(E);M===null?f(a,l):M&&M.isColor&&(f(M,1),y=!0);const O=i.xr.getEnvironmentBlendMode();O==="additive"?n.buffers.color.setClear(0,0,0,1,o):O==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||y)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function m(E,y){const M=g(y);M&&(M.isCubeTexture||M.mapping===qa)?(h===void 0&&(h=new Ae(new Pt(1,1,1),new rn({name:"BackgroundCubeMaterial",uniforms:Ir(Ci.backgroundCube.uniforms),vertexShader:Ci.backgroundCube.vertexShader,fragmentShader:Ci.backgroundCube.fragmentShader,side:Tn,depthTest:!1,depthWrite:!1,fog:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(O,I,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),Rs.copy(y.backgroundRotation),Rs.x*=-1,Rs.y*=-1,Rs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(Rs.y*=-1,Rs.z*=-1),h.material.uniforms.envMap.value=M,h.material.uniforms.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(h_.makeRotationFromEuler(Rs)),h.material.toneMapped=Lt.getTransfer(M.colorSpace)!==Xt,(u!==M||d!==M.version||p!==i.toneMapping)&&(h.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),h.layers.enableAll(),E.unshift(h,h.geometry,h.material,0,0,null)):M&&M.isTexture&&(c===void 0&&(c=new Ae(new En(2,2),new rn({name:"BackgroundMaterial",uniforms:Ir(Ci.background.uniforms),vertexShader:Ci.background.vertexShader,fragmentShader:Ci.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=M,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=Lt.getTransfer(M.colorSpace)!==Xt,M.matrixAutoUpdate===!0&&M.updateMatrix(),c.material.uniforms.uvTransform.value.copy(M.matrix),(u!==M||d!==M.version||p!==i.toneMapping)&&(c.material.needsUpdate=!0,u=M,d=M.version,p=i.toneMapping),c.layers.enableAll(),E.unshift(c,c.geometry,c.material,0,0,null))}function f(E,y){E.getRGB(oa,hf(i)),n.buffers.color.setClear(oa.r,oa.g,oa.b,y,o)}return{getClearColor:function(){return a},setClearColor:function(E,y=1){a.set(E),l=y,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(E){l=E,f(a,l)},render:_,addToRenderList:m}}function d_(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},s=d(null);let r=s,o=!1;function a(x,b,G,k,z){let ne=!1;const q=u(k,G,b);r!==q&&(r=q,c(r.object)),ne=p(x,k,G,z),ne&&g(x,k,G,z),z!==null&&e.update(z,i.ELEMENT_ARRAY_BUFFER),(ne||o)&&(o=!1,M(x,b,G,k),z!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(z).buffer))}function l(){return i.createVertexArray()}function c(x){return i.bindVertexArray(x)}function h(x){return i.deleteVertexArray(x)}function u(x,b,G){const k=G.wireframe===!0;let z=n[x.id];z===void 0&&(z={},n[x.id]=z);let ne=z[b.id];ne===void 0&&(ne={},z[b.id]=ne);let q=ne[k];return q===void 0&&(q=d(l()),ne[k]=q),q}function d(x){const b=[],G=[],k=[];for(let z=0;z<t;z++)b[z]=0,G[z]=0,k[z]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:b,enabledAttributes:G,attributeDivisors:k,object:x,attributes:{},index:null}}function p(x,b,G,k){const z=r.attributes,ne=b.attributes;let q=0;const ue=G.getAttributes();for(const Y in ue)if(ue[Y].location>=0){const Te=z[Y];let Be=ne[Y];if(Be===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(Be=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(Be=x.instanceColor)),Te===void 0||Te.attribute!==Be||Be&&Te.data!==Be.data)return!0;q++}return r.attributesNum!==q||r.index!==k}function g(x,b,G,k){const z={},ne=b.attributes;let q=0;const ue=G.getAttributes();for(const Y in ue)if(ue[Y].location>=0){let Te=ne[Y];Te===void 0&&(Y==="instanceMatrix"&&x.instanceMatrix&&(Te=x.instanceMatrix),Y==="instanceColor"&&x.instanceColor&&(Te=x.instanceColor));const Be={};Be.attribute=Te,Te&&Te.data&&(Be.data=Te.data),z[Y]=Be,q++}r.attributes=z,r.attributesNum=q,r.index=k}function _(){const x=r.newAttributes;for(let b=0,G=x.length;b<G;b++)x[b]=0}function m(x){f(x,0)}function f(x,b){const G=r.newAttributes,k=r.enabledAttributes,z=r.attributeDivisors;G[x]=1,k[x]===0&&(i.enableVertexAttribArray(x),k[x]=1),z[x]!==b&&(i.vertexAttribDivisor(x,b),z[x]=b)}function E(){const x=r.newAttributes,b=r.enabledAttributes;for(let G=0,k=b.length;G<k;G++)b[G]!==x[G]&&(i.disableVertexAttribArray(G),b[G]=0)}function y(x,b,G,k,z,ne,q){q===!0?i.vertexAttribIPointer(x,b,G,z,ne):i.vertexAttribPointer(x,b,G,k,z,ne)}function M(x,b,G,k){_();const z=k.attributes,ne=G.getAttributes(),q=b.defaultAttributeValues;for(const ue in ne){const Y=ne[ue];if(Y.location>=0){let we=z[ue];if(we===void 0&&(ue==="instanceMatrix"&&x.instanceMatrix&&(we=x.instanceMatrix),ue==="instanceColor"&&x.instanceColor&&(we=x.instanceColor)),we!==void 0){const Te=we.normalized,Be=we.itemSize,nt=e.get(we);if(nt===void 0)continue;const at=nt.buffer,ce=nt.type,ve=nt.bytesPerElement,Ue=ce===i.INT||ce===i.UNSIGNED_INT||we.gpuType===Mh;if(we.isInterleavedBufferAttribute){const Ce=we.data,$e=Ce.stride,Ye=we.offset;if(Ce.isInstancedInterleavedBuffer){for(let ct=0;ct<Y.locationSize;ct++)f(Y.location+ct,Ce.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=Ce.meshPerAttribute*Ce.count)}else for(let ct=0;ct<Y.locationSize;ct++)m(Y.location+ct);i.bindBuffer(i.ARRAY_BUFFER,at);for(let ct=0;ct<Y.locationSize;ct++)y(Y.location+ct,Be/Y.locationSize,ce,Te,$e*ve,(Ye+Be/Y.locationSize*ct)*ve,Ue)}else{if(we.isInstancedBufferAttribute){for(let Ce=0;Ce<Y.locationSize;Ce++)f(Y.location+Ce,we.meshPerAttribute);x.isInstancedMesh!==!0&&k._maxInstanceCount===void 0&&(k._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let Ce=0;Ce<Y.locationSize;Ce++)m(Y.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,at);for(let Ce=0;Ce<Y.locationSize;Ce++)y(Y.location+Ce,Be/Y.locationSize,ce,Te,Be*ve,Be/Y.locationSize*Ce*ve,Ue)}}else if(q!==void 0){const Te=q[ue];if(Te!==void 0)switch(Te.length){case 2:i.vertexAttrib2fv(Y.location,Te);break;case 3:i.vertexAttrib3fv(Y.location,Te);break;case 4:i.vertexAttrib4fv(Y.location,Te);break;default:i.vertexAttrib1fv(Y.location,Te)}}}}E()}function O(){U();for(const x in n){const b=n[x];for(const G in b){const k=b[G];for(const z in k)h(k[z].object),delete k[z];delete b[G]}delete n[x]}}function I(x){if(n[x.id]===void 0)return;const b=n[x.id];for(const G in b){const k=b[G];for(const z in k)h(k[z].object),delete k[z];delete b[G]}delete n[x.id]}function P(x){for(const b in n){const G=n[b];if(G[x.id]===void 0)continue;const k=G[x.id];for(const z in k)h(k[z].object),delete k[z];delete G[x.id]}}function U(){K(),o=!0,r!==s&&(r=s,c(r.object))}function K(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:U,resetDefaultState:K,dispose:O,releaseStatesOfGeometry:I,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:m,disableUnusedAttributes:E}}function f_(i,e,t){let n;function s(c){n=c}function r(c,h){i.drawArrays(n,c,h),t.update(h,n,1)}function o(c,h,u){u!==0&&(i.drawArraysInstanced(n,c,h,u),t.update(h,n,u))}function a(c,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,h,0,u);let p=0;for(let g=0;g<u;g++)p+=h[g];t.update(p,n,1)}function l(c,h,u,d){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],h[g],d[g]);else{p.multiDrawArraysInstancedWEBGL(n,c,0,h,0,d,0,u);let g=0;for(let _=0;_<u;_++)g+=h[_];for(let _=0;_<d.length;_++)t.update(g,n,d[_])}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function p_(i,e,t,n){let s;function r(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const P=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==ai&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const U=P===Gn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(P!==Si&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==$n&&!U)}function l(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const u=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const P=e.get("EXT_clip_control");P.clipControlEXT(P.LOWER_LEFT_EXT,P.ZERO_TO_ONE_EXT)}const p=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),g=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=i.getParameter(i.MAX_TEXTURE_SIZE),m=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),f=i.getParameter(i.MAX_VERTEX_ATTRIBS),E=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),M=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),O=g>0,I=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reverseDepthBuffer:d,maxTextures:p,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:f,maxVertexUniforms:E,maxVaryings:y,maxFragmentUniforms:M,vertexTextures:O,maxSamples:I}}function m_(i){const e=this;let t=null,n=0,s=!1,r=!1;const o=new Is,a=new Tt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,d){const p=u.length!==0||d||n!==0||s;return s=d,n=u.length,p},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(u,d){t=h(u,d,0)},this.setState=function(u,d,p){const g=u.clippingPlanes,_=u.clipIntersection,m=u.clipShadows,f=i.get(u);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{const E=r?0:n,y=E*4;let M=f.clippingState||null;l.value=M,M=h(g,d,y,p);for(let O=0;O!==y;++O)M[O]=t[O];f.clippingState=M,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=E}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function h(u,d,p,g){const _=u!==null?u.length:0;let m=null;if(_!==0){if(m=l.value,g!==!0||m===null){const f=p+_*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(m===null||m.length<f)&&(m=new Float32Array(f));for(let y=0,M=p;y!==_;++y,M+=4)o.copy(u[y]).applyMatrix4(E,a),o.normal.toArray(m,M),m[M+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}function g_(i){let e=new WeakMap;function t(o,a){return a===Ac?o.mapping=Ar:a===Rc&&(o.mapping=Rr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ac||a===Rc)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new pf(l.height);return c.fromEquirectangularTexture(i,o),e.set(o,c),o.addEventListener("dispose",s),t(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class ja extends uf{constructor(e=-1,t=1,n=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=h*this.view.offsetY,l=a-h*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const xr=4,Mu=[.125,.215,.35,.446,.526,.582],Us=20,zl=new ja,Su=new Xe;let Hl=null,Vl=0,Gl=0,Wl=!1;const Ds=(1+Math.sqrt(5))/2,cr=1/Ds,bu=[new H(-Ds,cr,0),new H(Ds,cr,0),new H(-cr,0,Ds),new H(cr,0,Ds),new H(0,Ds,-cr),new H(0,Ds,cr),new H(-1,1,-1),new H(1,1,-1),new H(-1,1,1),new H(1,1,1)];class ih{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,s=100){Hl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,s,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Tu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=wu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Hl,Vl,Gl),this._renderer.xr.enabled=Wl,e.scissorTest=!1,aa(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ar||e.mapping===Rr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Hl=this._renderer.getRenderTarget(),Vl=this._renderer.getActiveCubeFace(),Gl=this._renderer.getActiveMipmapLevel(),Wl=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:fn,minFilter:fn,generateMipmaps:!1,type:Gn,format:ai,colorSpace:mn,depthBuffer:!1},s=Eu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Eu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=__(r)),this._blurMaterial=v_(r,e,t)}return s}_compileMaterial(e){const t=new Ae(this._lodPlanes[0],e);this._renderer.compile(t,zl)}_sceneToCubeUV(e,t,n,s){const a=new _n(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],h=this._renderer,u=h.autoClear,d=h.toneMapping;h.getClearColor(Su),h.toneMapping=xs,h.autoClear=!1;const p=new sn({name:"PMREM.Background",side:Tn,depthWrite:!1,depthTest:!1}),g=new Ae(new Pt,p);let _=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,_=!0):(p.color.copy(Su),_=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):E===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const y=this._cubeSize;aa(s,E*y,f>2?y:0,y,y),h.setRenderTarget(s),_&&h.render(g,a),h.render(e,a)}g.geometry.dispose(),g.material.dispose(),h.toneMapping=d,h.autoClear=u,e.background=m}_textureToCubeUV(e,t){const n=this._renderer,s=e.mapping===Ar||e.mapping===Rr;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Tu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=wu());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Ae(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const l=this._cubeSize;aa(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(o,zl)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=bu[(s-r-1)%bu.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,s,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,s,"latitudinal",r),this._halfBlur(o,e,n,n,s,"longitudinal",r)}_halfBlur(e,t,n,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,u=new Ae(this._lodPlanes[s],c),d=c.uniforms,p=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*p):2*Math.PI/(2*Us-1),_=r/g,m=isFinite(r)?1+Math.floor(h*_):Us;m>Us&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Us}`);const f=[];let E=0;for(let P=0;P<Us;++P){const U=P/_,K=Math.exp(-U*U/2);f.push(K),P===0?E+=K:P<m&&(E+=2*K)}for(let P=0;P<f.length;P++)f[P]=f[P]/E;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:y}=this;d.dTheta.value=g,d.mipInt.value=y-n;const M=this._sizeLods[s],O=3*M*(s>y-xr?s-y+xr:0),I=4*(this._cubeSize-M);aa(t,O,I,3*M,2*M),l.setRenderTarget(t),l.render(u,zl)}}function __(i){const e=[],t=[],n=[];let s=i;const r=i-xr+1+Mu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);t.push(a);let l=1/a;o>i-xr?l=Mu[o-i+xr-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),h=-c,u=1+c,d=[h,h,u,h,u,u,h,h,u,u,h,u],p=6,g=6,_=3,m=2,f=1,E=new Float32Array(_*g*p),y=new Float32Array(m*g*p),M=new Float32Array(f*g*p);for(let I=0;I<p;I++){const P=I%3*2/3-1,U=I>2?0:-1,K=[P,U,0,P+2/3,U,0,P+2/3,U+1,0,P,U,0,P+2/3,U+1,0,P,U+1,0];E.set(K,_*g*I),y.set(d,m*g*I);const x=[I,I,I,I,I,I];M.set(x,f*g*I)}const O=new Qt;O.setAttribute("position",new An(E,_)),O.setAttribute("uv",new An(y,m)),O.setAttribute("faceIndex",new An(M,f)),e.push(O),s>xr&&s--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Eu(i,e,t){const n=new li(i,e,t);return n.texture.mapping=qa,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function aa(i,e,t,n,s){i.viewport.set(e,t,n,s),i.scissor.set(e,t,n,s)}function v_(i,e,t){const n=new Float32Array(Us),s=new H(0,1,0);return new rn({name:"SphericalGaussianBlur",defines:{n:Us,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function wu(){return new rn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lh(),fragmentShader:`

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
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Tu(){return new rn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lh(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Zi,depthTest:!1,depthWrite:!1})}function Lh(){return`

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
	`}function x_(i){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ac||l===Rc,h=l===Ar||l===Rr;if(c||h){let u=e.get(a);const d=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new ih(i)),u=c?t.fromEquirectangular(a,u):t.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new ih(i)),u=c?t.fromEquirectangular(a):t.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",r),u.texture):null}}}return a}function s(a){let l=0;const c=6;for(let h=0;h<c;h++)a[h]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function y_(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let s;switch(n){case"WEBGL_depth_texture":s=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=i.getExtension(n)}return e[n]=s,s}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const s=t(n);return s===null&&Ca("THREE.WebGLRenderer: "+n+" extension not supported."),s}}}function M_(i,e,t,n){const s={},r=new WeakMap;function o(u){const d=u.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const _=d.morphAttributes[g];for(let m=0,f=_.length;m<f;m++)e.remove(_[m])}d.removeEventListener("dispose",o),delete s[d.id];const p=r.get(d);p&&(e.remove(p),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(u,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,t.memory.geometries++),d}function l(u){const d=u.attributes;for(const g in d)e.update(d[g],i.ARRAY_BUFFER);const p=u.morphAttributes;for(const g in p){const _=p[g];for(let m=0,f=_.length;m<f;m++)e.update(_[m],i.ARRAY_BUFFER)}}function c(u){const d=[],p=u.index,g=u.attributes.position;let _=0;if(p!==null){const E=p.array;_=p.version;for(let y=0,M=E.length;y<M;y+=3){const O=E[y+0],I=E[y+1],P=E[y+2];d.push(O,I,I,P,P,O)}}else if(g!==void 0){const E=g.array;_=g.version;for(let y=0,M=E.length/3-1;y<M;y+=3){const O=y+0,I=y+1,P=y+2;d.push(O,I,I,P,P,O)}}else return;const m=new(nf(d)?cf:lf)(d,1);m.version=_;const f=r.get(u);f&&e.remove(f),r.set(u,m)}function h(u){const d=r.get(u);if(d){const p=u.index;p!==null&&d.version<p.version&&c(u)}else c(u);return r.get(u)}return{get:a,update:l,getWireframeAttribute:h}}function S_(i,e,t){let n;function s(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,p){i.drawElements(n,p,r,d*o),t.update(p,n,1)}function c(d,p,g){g!==0&&(i.drawElementsInstanced(n,p,r,d*o,g),t.update(p,n,g))}function h(d,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,p,0,r,d,0,g);let m=0;for(let f=0;f<g;f++)m+=p[f];t.update(m,n,1)}function u(d,p,g,_){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let f=0;f<d.length;f++)c(d[f]/o,p[f],_[f]);else{m.multiDrawElementsInstancedWEBGL(n,p,0,r,d,0,_,0,g);let f=0;for(let E=0;E<g;E++)f+=p[E];for(let E=0;E<_.length;E++)t.update(f,n,_[E])}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=u}function b_(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case i.TRIANGLES:t.triangles+=a*(r/3);break;case i.LINES:t.lines+=a*(r/2);break;case i.LINE_STRIP:t.lines+=a*(r-1);break;case i.LINE_LOOP:t.lines+=a*r;break;case i.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:n}}function E_(i,e,t){const n=new WeakMap,s=new Dt;function r(o,a,l){const c=o.morphTargetInfluences,h=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=h!==void 0?h.length:0;let d=n.get(a);if(d===void 0||d.count!==u){let K=function(){P.dispose(),n.delete(a),a.removeEventListener("dispose",K)};d!==void 0&&d.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,_=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let y=0;p===!0&&(y=1),g===!0&&(y=2),_===!0&&(y=3);let M=a.attributes.position.count*y,O=1;M>e.maxTextureSize&&(O=Math.ceil(M/e.maxTextureSize),M=e.maxTextureSize);const I=new Float32Array(M*O*4*u),P=new rf(I,M,O,u);P.type=$n,P.needsUpdate=!0;const U=y*4;for(let x=0;x<u;x++){const b=m[x],G=f[x],k=E[x],z=M*O*4*x;for(let ne=0;ne<b.count;ne++){const q=ne*U;p===!0&&(s.fromBufferAttribute(b,ne),I[z+q+0]=s.x,I[z+q+1]=s.y,I[z+q+2]=s.z,I[z+q+3]=0),g===!0&&(s.fromBufferAttribute(G,ne),I[z+q+4]=s.x,I[z+q+5]=s.y,I[z+q+6]=s.z,I[z+q+7]=0),_===!0&&(s.fromBufferAttribute(k,ne),I[z+q+8]=s.x,I[z+q+9]=s.y,I[z+q+10]=s.z,I[z+q+11]=k.itemSize===4?s.w:1)}}d={count:u,texture:P,size:new Ke(M,O)},n.set(a,d),a.addEventListener("dispose",K)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",o.morphTexture,t);else{let p=0;for(let _=0;_<c.length;_++)p+=c[_];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(i,"morphTargetBaseInfluence",g),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:r}}function w_(i,e,t,n){let s=new WeakMap;function r(l){const c=n.render.frame,h=l.geometry,u=e.get(l,h);if(s.get(u)!==c&&(e.update(u),s.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return u}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:r,dispose:o}}class gf extends pn{constructor(e,t,n,s,r,o,a,l,c,h=Sr){if(h!==Sr&&h!==Pr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&h===Sr&&(n=ks),n===void 0&&h===Pr&&(n=Cr),super(null,s,r,o,a,l,h,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:Cn,this.minFilter=l!==void 0?l:Cn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const _f=new pn,Au=new gf(1,1),vf=new rf,xf=new um,yf=new ff,Ru=[],Cu=[],Pu=new Float32Array(16),Lu=new Float32Array(9),Iu=new Float32Array(4);function kr(i,e,t){const n=i[0];if(n<=0||n>0)return i;const s=e*t;let r=Ru[s];if(r===void 0&&(r=new Float32Array(s),Ru[s]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,i[o].toArray(r,a)}return r}function vn(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function xn(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function Ka(i,e){let t=Cu[e];t===void 0&&(t=new Int32Array(e),Cu[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function T_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function A_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2fv(this.addr,e),xn(t,e)}}function R_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(vn(t,e))return;i.uniform3fv(this.addr,e),xn(t,e)}}function C_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4fv(this.addr,e),xn(t,e)}}function P_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;Iu.set(n),i.uniformMatrix2fv(this.addr,!1,Iu),xn(t,n)}}function L_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;Lu.set(n),i.uniformMatrix3fv(this.addr,!1,Lu),xn(t,n)}}function I_(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(vn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),xn(t,e)}else{if(vn(t,n))return;Pu.set(n),i.uniformMatrix4fv(this.addr,!1,Pu),xn(t,n)}}function D_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function N_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2iv(this.addr,e),xn(t,e)}}function U_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3iv(this.addr,e),xn(t,e)}}function F_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4iv(this.addr,e),xn(t,e)}}function O_(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function B_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(vn(t,e))return;i.uniform2uiv(this.addr,e),xn(t,e)}}function k_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(vn(t,e))return;i.uniform3uiv(this.addr,e),xn(t,e)}}function z_(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(vn(t,e))return;i.uniform4uiv(this.addr,e),xn(t,e)}}function H_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s);let r;this.type===i.SAMPLER_2D_SHADOW?(Au.compareFunction=ef,r=Au):r=_f,t.setTexture2D(e||r,s)}function V_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture3D(e||xf,s)}function G_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTextureCube(e||yf,s)}function W_(i,e,t){const n=this.cache,s=t.allocateTextureUnit();n[0]!==s&&(i.uniform1i(this.addr,s),n[0]=s),t.setTexture2DArray(e||vf,s)}function X_(i){switch(i){case 5126:return T_;case 35664:return A_;case 35665:return R_;case 35666:return C_;case 35674:return P_;case 35675:return L_;case 35676:return I_;case 5124:case 35670:return D_;case 35667:case 35671:return N_;case 35668:case 35672:return U_;case 35669:case 35673:return F_;case 5125:return O_;case 36294:return B_;case 36295:return k_;case 36296:return z_;case 35678:case 36198:case 36298:case 36306:case 35682:return H_;case 35679:case 36299:case 36307:return V_;case 35680:case 36300:case 36308:case 36293:return G_;case 36289:case 36303:case 36311:case 36292:return W_}}function q_(i,e){i.uniform1fv(this.addr,e)}function Y_(i,e){const t=kr(e,this.size,2);i.uniform2fv(this.addr,t)}function $_(i,e){const t=kr(e,this.size,3);i.uniform3fv(this.addr,t)}function j_(i,e){const t=kr(e,this.size,4);i.uniform4fv(this.addr,t)}function K_(i,e){const t=kr(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Z_(i,e){const t=kr(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function J_(i,e){const t=kr(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Q_(i,e){i.uniform1iv(this.addr,e)}function ev(i,e){i.uniform2iv(this.addr,e)}function tv(i,e){i.uniform3iv(this.addr,e)}function nv(i,e){i.uniform4iv(this.addr,e)}function iv(i,e){i.uniform1uiv(this.addr,e)}function sv(i,e){i.uniform2uiv(this.addr,e)}function rv(i,e){i.uniform3uiv(this.addr,e)}function ov(i,e){i.uniform4uiv(this.addr,e)}function av(i,e,t){const n=this.cache,s=e.length,r=Ka(t,s);vn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==s;++o)t.setTexture2D(e[o]||_f,r[o])}function lv(i,e,t){const n=this.cache,s=e.length,r=Ka(t,s);vn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==s;++o)t.setTexture3D(e[o]||xf,r[o])}function cv(i,e,t){const n=this.cache,s=e.length,r=Ka(t,s);vn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==s;++o)t.setTextureCube(e[o]||yf,r[o])}function hv(i,e,t){const n=this.cache,s=e.length,r=Ka(t,s);vn(n,r)||(i.uniform1iv(this.addr,r),xn(n,r));for(let o=0;o!==s;++o)t.setTexture2DArray(e[o]||vf,r[o])}function uv(i){switch(i){case 5126:return q_;case 35664:return Y_;case 35665:return $_;case 35666:return j_;case 35674:return K_;case 35675:return Z_;case 35676:return J_;case 5124:case 35670:return Q_;case 35667:case 35671:return ev;case 35668:case 35672:return tv;case 35669:case 35673:return nv;case 5125:return iv;case 36294:return sv;case 36295:return rv;case 36296:return ov;case 35678:case 36198:case 36298:case 36306:case 35682:return av;case 35679:case 36299:case 36307:return lv;case 35680:case 36300:case 36308:case 36293:return cv;case 36289:case 36303:case 36311:case 36292:return hv}}class dv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=X_(t.type)}}class fv{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=uv(t.type)}}class pv{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(e,t[a.id],n)}}}const Xl=/(\w+)(\])?(\[|\.)?/g;function Du(i,e){i.seq.push(e),i.map[e.id]=e}function mv(i,e,t){const n=i.name,s=n.length;for(Xl.lastIndex=0;;){const r=Xl.exec(n),o=Xl.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Du(t,c===void 0?new dv(a,i,e):new fv(a,i,e));break}else{let u=t.map[a];u===void 0&&(u=new pv(a),Du(t,u)),t=u}}}class Pa{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<n;++s){const r=e.getActiveUniform(t,s),o=e.getUniformLocation(t,r.name);mv(r,o,this)}}setValue(e,t,n,s){const r=this.map[t];r!==void 0&&r.setValue(e,n,s)}setOptional(e,t,n){const s=t[n];s!==void 0&&this.setValue(e,n,s)}static upload(e,t,n,s){for(let r=0,o=t.length;r!==o;++r){const a=t[r],l=n[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,s)}}static seqWithValue(e,t){const n=[];for(let s=0,r=e.length;s!==r;++s){const o=e[s];o.id in t&&n.push(o)}return n}}function Nu(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const gv=37297;let _v=0;function vv(i,e){const t=i.split(`
`),n=[],s=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=s;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function xv(i){const e=Lt.getPrimaries(Lt.workingColorSpace),t=Lt.getPrimaries(i);let n;switch(e===t?n="":e===Oa&&t===Fa?n="LinearDisplayP3ToLinearSRGB":e===Fa&&t===Oa&&(n="LinearSRGBToLinearDisplayP3"),i){case mn:case Ya:return[n,"LinearTransferOETF"];case Wt:case Rh:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function Uu(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),s=i.getShaderInfoLog(e).trim();if(n&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+s+`

`+vv(i.getShaderSource(e),o)}else return s}function yv(i,e){const t=xv(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function Mv(i,e){let t;switch(e){case Fd:t="Linear";break;case Od:t="Reinhard";break;case Bd:t="Cineon";break;case yh:t="ACESFilmic";break;case kd:t="AgX";break;case zd:t="Neutral";break;case Tp:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const la=new H;function Sv(){Lt.getLuminanceCoefficients(la);const i=la.x.toFixed(4),e=la.y.toFixed(4),t=la.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function bv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function Ev(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function wv(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<n;s++){const r=i.getActiveAttrib(e,s),o=r.name;let a=1;r.type===i.FLOAT_MAT2&&(a=2),r.type===i.FLOAT_MAT3&&(a=3),r.type===i.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:i.getAttribLocation(e,o),locationSize:a}}return t}function lo(i){return i!==""}function Fu(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Ou(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const Tv=/^[ \t]*#include +<([\w\d./]+)>/gm;function sh(i){return i.replace(Tv,Rv)}const Av=new Map;function Rv(i,e){let t=wt[e];if(t===void 0){const n=Av.get(e);if(n!==void 0)t=wt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return sh(t)}const Cv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Bu(i){return i.replace(Cv,Pv)}function Pv(i,e,t,n){let s="";for(let r=parseInt(e);r<parseInt(t);r++)s+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function ku(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}function Lv(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Dd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Yi&&(e="SHADOWMAP_TYPE_VSM"),e}function Iv(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ar:case Rr:e="ENVMAP_TYPE_CUBE";break;case qa:e="ENVMAP_TYPE_CUBE_UV";break}return e}function Dv(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case Rr:e="ENVMAP_MODE_REFRACTION";break}return e}function Nv(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Ud:e="ENVMAP_BLENDING_MULTIPLY";break;case Ep:e="ENVMAP_BLENDING_MIX";break;case wp:e="ENVMAP_BLENDING_ADD";break}return e}function Uv(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Fv(i,e,t,n){const s=i.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=Lv(t),c=Iv(t),h=Dv(t),u=Nv(t),d=Uv(t),p=bv(t),g=Ev(r),_=s.createProgram();let m,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lo).join(`
`),m.length>0&&(m+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(lo).join(`
`),f.length>0&&(f+=`
`)):(m=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),f=[ku(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+u:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==xs?"#define TONE_MAPPING":"",t.toneMapping!==xs?wt.tonemapping_pars_fragment:"",t.toneMapping!==xs?Mv("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",wt.colorspace_pars_fragment,yv("linearToOutputTexel",t.outputColorSpace),Sv(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),o=sh(o),o=Fu(o,t),o=Ou(o,t),a=sh(a),a=Fu(a,t),a=Ou(a,t),o=Bu(o),a=Bu(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===nu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const y=E+m+o,M=E+f+a,O=Nu(s,s.VERTEX_SHADER,y),I=Nu(s,s.FRAGMENT_SHADER,M);s.attachShader(_,O),s.attachShader(_,I),t.index0AttributeName!==void 0?s.bindAttribLocation(_,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(b){if(i.debug.checkShaderErrors){const G=s.getProgramInfoLog(_).trim(),k=s.getShaderInfoLog(O).trim(),z=s.getShaderInfoLog(I).trim();let ne=!0,q=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(ne=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,_,O,I);else{const ue=Uu(s,O,"vertex"),Y=Uu(s,I,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+b.name+`
Material Type: `+b.type+`

Program Info Log: `+G+`
`+ue+`
`+Y)}else G!==""?console.warn("THREE.WebGLProgram: Program Info Log:",G):(k===""||z==="")&&(q=!1);q&&(b.diagnostics={runnable:ne,programLog:G,vertexShader:{log:k,prefix:m},fragmentShader:{log:z,prefix:f}})}s.deleteShader(O),s.deleteShader(I),U=new Pa(s,_),K=wv(s,_)}let U;this.getUniforms=function(){return U===void 0&&P(this),U};let K;this.getAttributes=function(){return K===void 0&&P(this),K};let x=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return x===!1&&(x=s.getProgramParameter(_,gv)),x},this.destroy=function(){n.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=_v++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=O,this.fragmentShader=I,this}let Ov=0;class Bv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,s=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new kv(e),t.set(e,n)),n}}class kv{constructor(e){this.id=Ov++,this.code=e,this.usedTimes=0}}function zv(i,e,t,n,s,r,o){const a=new of,l=new Bv,c=new Set,h=[],u=s.logarithmicDepthBuffer,d=s.reverseDepthBuffer,p=s.vertexTextures;let g=s.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function m(x){return c.add(x),x===0?"uv":`uv${x}`}function f(x,b,G,k,z){const ne=k.fog,q=z.geometry,ue=x.isMeshStandardMaterial?k.environment:null,Y=(x.isMeshStandardMaterial?t:e).get(x.envMap||ue),we=Y&&Y.mapping===qa?Y.image.height:null,Te=_[x.type];x.precision!==null&&(g=s.getMaxPrecision(x.precision),g!==x.precision&&console.warn("THREE.WebGLProgram.getParameters:",x.precision,"not supported, using",g,"instead."));const Be=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,nt=Be!==void 0?Be.length:0;let at=0;q.morphAttributes.position!==void 0&&(at=1),q.morphAttributes.normal!==void 0&&(at=2),q.morphAttributes.color!==void 0&&(at=3);let ce,ve,Ue,Ce;if(Te){const Ct=Ci[Te];ce=Ct.vertexShader,ve=Ct.fragmentShader}else ce=x.vertexShader,ve=x.fragmentShader,l.update(x),Ue=l.getVertexShaderID(x),Ce=l.getFragmentShaderID(x);const $e=i.getRenderTarget(),Ye=z.isInstancedMesh===!0,ct=z.isBatchedMesh===!0,At=!!x.map,mt=!!x.matcap,V=!!Y,Zt=!!x.aoMap,ut=!!x.lightMap,dt=!!x.bumpMap,Je=!!x.normalMap,vt=!!x.displacementMap,et=!!x.emissiveMap,D=!!x.metalnessMap,S=!!x.roughnessMap,Z=x.anisotropy>0,re=x.clearcoat>0,he=x.dispersion>0,ie=x.iridescence>0,Pe=x.sheen>0,be=x.transmission>0,ye=Z&&!!x.anisotropyMap,ft=re&&!!x.clearcoatMap,Me=re&&!!x.clearcoatNormalMap,ze=re&&!!x.clearcoatRoughnessMap,Ze=ie&&!!x.iridescenceMap,it=ie&&!!x.iridescenceThicknessMap,De=Pe&&!!x.sheenColorMap,gt=Pe&&!!x.sheenRoughnessMap,tt=!!x.specularMap,Mt=!!x.specularColorMap,$=!!x.specularIntensityMap,Fe=be&&!!x.transmissionMap,ae=be&&!!x.thicknessMap,xe=!!x.gradientMap,Le=!!x.alphaMap,Oe=x.alphaTest>0,st=!!x.alphaHash,Ot=!!x.extensions;let qt=xs;x.toneMapped&&($e===null||$e.isXRRenderTarget===!0)&&(qt=i.toneMapping);const xt={shaderID:Te,shaderType:x.type,shaderName:x.name,vertexShader:ce,fragmentShader:ve,defines:x.defines,customVertexShaderID:Ue,customFragmentShaderID:Ce,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:g,batching:ct,batchingColor:ct&&z._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&z.instanceColor!==null,instancingMorph:Ye&&z.morphTexture!==null,supportsVertexTextures:p,outputColorSpace:$e===null?i.outputColorSpace:$e.isXRRenderTarget===!0?$e.texture.colorSpace:mn,alphaToCoverage:!!x.alphaToCoverage,map:At,matcap:mt,envMap:V,envMapMode:V&&Y.mapping,envMapCubeUVHeight:we,aoMap:Zt,lightMap:ut,bumpMap:dt,normalMap:Je,displacementMap:p&&vt,emissiveMap:et,normalMapObjectSpace:Je&&x.normalMapType===Ip,normalMapTangentSpace:Je&&x.normalMapType===Qd,metalnessMap:D,roughnessMap:S,anisotropy:Z,anisotropyMap:ye,clearcoat:re,clearcoatMap:ft,clearcoatNormalMap:Me,clearcoatRoughnessMap:ze,dispersion:he,iridescence:ie,iridescenceMap:Ze,iridescenceThicknessMap:it,sheen:Pe,sheenColorMap:De,sheenRoughnessMap:gt,specularMap:tt,specularColorMap:Mt,specularIntensityMap:$,transmission:be,transmissionMap:Fe,thicknessMap:ae,gradientMap:xe,opaque:x.transparent===!1&&x.blending===Mr&&x.alphaToCoverage===!1,alphaMap:Le,alphaTest:Oe,alphaHash:st,combine:x.combine,mapUv:At&&m(x.map.channel),aoMapUv:Zt&&m(x.aoMap.channel),lightMapUv:ut&&m(x.lightMap.channel),bumpMapUv:dt&&m(x.bumpMap.channel),normalMapUv:Je&&m(x.normalMap.channel),displacementMapUv:vt&&m(x.displacementMap.channel),emissiveMapUv:et&&m(x.emissiveMap.channel),metalnessMapUv:D&&m(x.metalnessMap.channel),roughnessMapUv:S&&m(x.roughnessMap.channel),anisotropyMapUv:ye&&m(x.anisotropyMap.channel),clearcoatMapUv:ft&&m(x.clearcoatMap.channel),clearcoatNormalMapUv:Me&&m(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&m(x.clearcoatRoughnessMap.channel),iridescenceMapUv:Ze&&m(x.iridescenceMap.channel),iridescenceThicknessMapUv:it&&m(x.iridescenceThicknessMap.channel),sheenColorMapUv:De&&m(x.sheenColorMap.channel),sheenRoughnessMapUv:gt&&m(x.sheenRoughnessMap.channel),specularMapUv:tt&&m(x.specularMap.channel),specularColorMapUv:Mt&&m(x.specularColorMap.channel),specularIntensityMapUv:$&&m(x.specularIntensityMap.channel),transmissionMapUv:Fe&&m(x.transmissionMap.channel),thicknessMapUv:ae&&m(x.thicknessMap.channel),alphaMapUv:Le&&m(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Je||Z),vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:z.isPoints===!0&&!!q.attributes.uv&&(At||Le),fog:!!ne,useFog:x.fog===!0,fogExp2:!!ne&&ne.isFogExp2,flatShading:x.flatShading===!0,sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:u,reverseDepthBuffer:d,skinning:z.isSkinnedMesh===!0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:nt,morphTextureStride:at,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:x.dithering,shadowMapEnabled:i.shadowMap.enabled&&G.length>0,shadowMapType:i.shadowMap.type,toneMapping:qt,decodeVideoTexture:At&&x.map.isVideoTexture===!0&&Lt.getTransfer(x.map.colorSpace)===Xt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===wn,flipSided:x.side===Tn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:Ot&&x.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ot&&x.extensions.multiDraw===!0||ct)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return xt.vertexUv1s=c.has(1),xt.vertexUv2s=c.has(2),xt.vertexUv3s=c.has(3),c.clear(),xt}function E(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const G in x.defines)b.push(G),b.push(x.defines[G]);return x.isRawShaderMaterial===!1&&(y(b,x),M(b,x),b.push(i.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function y(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.supportsVertexTextures&&a.enable(0),b.instancing&&a.enable(1),b.instancingColor&&a.enable(2),b.instancingMorph&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),b.alphaHash&&a.enable(18),b.batching&&a.enable(19),b.dispersion&&a.enable(20),b.batchingColor&&a.enable(21),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reverseDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.alphaToCoverage&&a.enable(20),x.push(a.mask)}function O(x){const b=_[x.type];let G;if(b){const k=Ci[b];G=xo.clone(k.uniforms)}else G=x.uniforms;return G}function I(x,b){let G;for(let k=0,z=h.length;k<z;k++){const ne=h[k];if(ne.cacheKey===b){G=ne,++G.usedTimes;break}}return G===void 0&&(G=new Fv(i,b,x,r),h.push(G)),G}function P(x){if(--x.usedTimes===0){const b=h.indexOf(x);h[b]=h[h.length-1],h.pop(),x.destroy()}}function U(x){l.remove(x)}function K(){l.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:O,acquireProgram:I,releaseProgram:P,releaseShaderCache:U,programs:h,dispose:K}}function Hv(){let i=new WeakMap;function e(o){return i.has(o)}function t(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function s(o,a,l){i.get(o)[a]=l}function r(){i=new WeakMap}return{has:e,get:t,remove:n,update:s,dispose:r}}function Vv(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function zu(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function Hu(){const i=[];let e=0;const t=[],n=[],s=[];function r(){e=0,t.length=0,n.length=0,s.length=0}function o(u,d,p,g,_,m){let f=i[e];return f===void 0?(f={id:u.id,object:u,geometry:d,material:p,groupOrder:g,renderOrder:u.renderOrder,z:_,group:m},i[e]=f):(f.id=u.id,f.object=u,f.geometry=d,f.material=p,f.groupOrder=g,f.renderOrder=u.renderOrder,f.z=_,f.group=m),e++,f}function a(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.push(f):p.transparent===!0?s.push(f):t.push(f)}function l(u,d,p,g,_,m){const f=o(u,d,p,g,_,m);p.transmission>0?n.unshift(f):p.transparent===!0?s.unshift(f):t.unshift(f)}function c(u,d){t.length>1&&t.sort(u||Vv),n.length>1&&n.sort(d||zu),s.length>1&&s.sort(d||zu)}function h(){for(let u=e,d=i.length;u<d;u++){const p=i[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:n,transparent:s,init:r,push:a,unshift:l,finish:h,sort:c}}function Gv(){let i=new WeakMap;function e(n,s){const r=i.get(n);let o;return r===void 0?(o=new Hu,i.set(n,[o])):s>=r.length?(o=new Hu,r.push(o)):o=r[s],o}function t(){i=new WeakMap}return{get:e,dispose:t}}function Wv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new H,color:new Xe};break;case"SpotLight":t={position:new H,direction:new H,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new H,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new H,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new H,halfWidth:new H,halfHeight:new H};break}return i[e.id]=t,t}}}function Xv(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ke,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let qv=0;function Yv(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function $v(i){const e=new Wv,t=Xv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new H);const s=new H,r=new _t,o=new _t;function a(c){let h=0,u=0,d=0;for(let K=0;K<9;K++)n.probe[K].set(0,0,0);let p=0,g=0,_=0,m=0,f=0,E=0,y=0,M=0,O=0,I=0,P=0;c.sort(Yv);for(let K=0,x=c.length;K<x;K++){const b=c[K],G=b.color,k=b.intensity,z=b.distance,ne=b.shadow&&b.shadow.map?b.shadow.map.texture:null;if(b.isAmbientLight)h+=G.r*k,u+=G.g*k,d+=G.b*k;else if(b.isLightProbe){for(let q=0;q<9;q++)n.probe[q].addScaledVector(b.sh.coefficients[q],k);P++}else if(b.isDirectionalLight){const q=e.get(b);if(q.color.copy(b.color).multiplyScalar(b.intensity),b.castShadow){const ue=b.shadow,Y=t.get(b);Y.shadowIntensity=ue.intensity,Y.shadowBias=ue.bias,Y.shadowNormalBias=ue.normalBias,Y.shadowRadius=ue.radius,Y.shadowMapSize=ue.mapSize,n.directionalShadow[p]=Y,n.directionalShadowMap[p]=ne,n.directionalShadowMatrix[p]=b.shadow.matrix,E++}n.directional[p]=q,p++}else if(b.isSpotLight){const q=e.get(b);q.position.setFromMatrixPosition(b.matrixWorld),q.color.copy(G).multiplyScalar(k),q.distance=z,q.coneCos=Math.cos(b.angle),q.penumbraCos=Math.cos(b.angle*(1-b.penumbra)),q.decay=b.decay,n.spot[_]=q;const ue=b.shadow;if(b.map&&(n.spotLightMap[O]=b.map,O++,ue.updateMatrices(b),b.castShadow&&I++),n.spotLightMatrix[_]=ue.matrix,b.castShadow){const Y=t.get(b);Y.shadowIntensity=ue.intensity,Y.shadowBias=ue.bias,Y.shadowNormalBias=ue.normalBias,Y.shadowRadius=ue.radius,Y.shadowMapSize=ue.mapSize,n.spotShadow[_]=Y,n.spotShadowMap[_]=ne,M++}_++}else if(b.isRectAreaLight){const q=e.get(b);q.color.copy(G).multiplyScalar(k),q.halfWidth.set(b.width*.5,0,0),q.halfHeight.set(0,b.height*.5,0),n.rectArea[m]=q,m++}else if(b.isPointLight){const q=e.get(b);if(q.color.copy(b.color).multiplyScalar(b.intensity),q.distance=b.distance,q.decay=b.decay,b.castShadow){const ue=b.shadow,Y=t.get(b);Y.shadowIntensity=ue.intensity,Y.shadowBias=ue.bias,Y.shadowNormalBias=ue.normalBias,Y.shadowRadius=ue.radius,Y.shadowMapSize=ue.mapSize,Y.shadowCameraNear=ue.camera.near,Y.shadowCameraFar=ue.camera.far,n.pointShadow[g]=Y,n.pointShadowMap[g]=ne,n.pointShadowMatrix[g]=b.shadow.matrix,y++}n.point[g]=q,g++}else if(b.isHemisphereLight){const q=e.get(b);q.skyColor.copy(b.color).multiplyScalar(k),q.groundColor.copy(b.groundColor).multiplyScalar(k),n.hemi[f]=q,f++}}m>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ke.LTC_FLOAT_1,n.rectAreaLTC2=ke.LTC_FLOAT_2):(n.rectAreaLTC1=ke.LTC_HALF_1,n.rectAreaLTC2=ke.LTC_HALF_2)),n.ambient[0]=h,n.ambient[1]=u,n.ambient[2]=d;const U=n.hash;(U.directionalLength!==p||U.pointLength!==g||U.spotLength!==_||U.rectAreaLength!==m||U.hemiLength!==f||U.numDirectionalShadows!==E||U.numPointShadows!==y||U.numSpotShadows!==M||U.numSpotMaps!==O||U.numLightProbes!==P)&&(n.directional.length=p,n.spot.length=_,n.rectArea.length=m,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=y,n.pointShadowMap.length=y,n.spotShadow.length=M,n.spotShadowMap.length=M,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=y,n.spotLightMatrix.length=M+O-I,n.spotLightMap.length=O,n.numSpotLightShadowsWithMaps=I,n.numLightProbes=P,U.directionalLength=p,U.pointLength=g,U.spotLength=_,U.rectAreaLength=m,U.hemiLength=f,U.numDirectionalShadows=E,U.numPointShadows=y,U.numSpotShadows=M,U.numSpotMaps=O,U.numLightProbes=P,n.version=qv++)}function l(c,h){let u=0,d=0,p=0,g=0,_=0;const m=h.matrixWorldInverse;for(let f=0,E=c.length;f<E;f++){const y=c[f];if(y.isDirectionalLight){const M=n.directional[u];M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),u++}else if(y.isSpotLight){const M=n.spot[p];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),M.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),M.direction.sub(s),M.direction.transformDirection(m),p++}else if(y.isRectAreaLight){const M=n.rectArea[g];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),o.identity(),r.copy(y.matrixWorld),r.premultiply(m),o.extractRotation(r),M.halfWidth.set(y.width*.5,0,0),M.halfHeight.set(0,y.height*.5,0),M.halfWidth.applyMatrix4(o),M.halfHeight.applyMatrix4(o),g++}else if(y.isPointLight){const M=n.point[d];M.position.setFromMatrixPosition(y.matrixWorld),M.position.applyMatrix4(m),d++}else if(y.isHemisphereLight){const M=n.hemi[_];M.direction.setFromMatrixPosition(y.matrixWorld),M.direction.transformDirection(m),_++}}}return{setup:a,setupView:l,state:n}}function Vu(i){const e=new $v(i),t=[],n=[];function s(h){c.camera=h,t.length=0,n.length=0}function r(h){t.push(h)}function o(h){n.push(h)}function a(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function jv(i){let e=new WeakMap;function t(s,r=0){const o=e.get(s);let a;return o===void 0?(a=new Vu(i),e.set(s,[a])):r>=o.length?(a=new Vu(i),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class Kv extends Mi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Pp,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Zv extends Mi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Jv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Qv=`uniform sampler2D shadow_pass;
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
}`;function ex(i,e,t){let n=new Ph;const s=new Ke,r=new Ke,o=new Dt,a=new Kv({depthPacking:Lp}),l=new Zv,c={},h=t.maxTextureSize,u={[Ji]:Tn,[Tn]:Ji,[wn]:wn},d=new rn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ke},radius:{value:4}},vertexShader:Jv,fragmentShader:Qv}),p=d.clone();p.defines.HORIZONTAL_PASS=1;const g=new Qt;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Ae(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Dd;let f=this.type;this.render=function(I,P,U){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||I.length===0)return;const K=i.getRenderTarget(),x=i.getActiveCubeFace(),b=i.getActiveMipmapLevel(),G=i.state;G.setBlending(Zi),G.buffers.color.setClear(1,1,1,1),G.buffers.depth.setTest(!0),G.setScissorTest(!1);const k=f!==Yi&&this.type===Yi,z=f===Yi&&this.type!==Yi;for(let ne=0,q=I.length;ne<q;ne++){const ue=I[ne],Y=ue.shadow;if(Y===void 0){console.warn("THREE.WebGLShadowMap:",ue,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);const we=Y.getFrameExtents();if(s.multiply(we),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/we.x),s.x=r.x*we.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/we.y),s.y=r.y*we.y,Y.mapSize.y=r.y)),Y.map===null||k===!0||z===!0){const Be=this.type!==Yi?{minFilter:Cn,magFilter:Cn}:{};Y.map!==null&&Y.map.dispose(),Y.map=new li(s.x,s.y,Be),Y.map.texture.name=ue.name+".shadowMap",Y.camera.updateProjectionMatrix()}i.setRenderTarget(Y.map),i.clear();const Te=Y.getViewportCount();for(let Be=0;Be<Te;Be++){const nt=Y.getViewport(Be);o.set(r.x*nt.x,r.y*nt.y,r.x*nt.z,r.y*nt.w),G.viewport(o),Y.updateMatrices(ue,Be),n=Y.getFrustum(),M(P,U,Y.camera,ue,this.type)}Y.isPointLightShadow!==!0&&this.type===Yi&&E(Y,U),Y.needsUpdate=!1}f=this.type,m.needsUpdate=!1,i.setRenderTarget(K,x,b)};function E(I,P){const U=e.update(_);d.defines.VSM_SAMPLES!==I.blurSamples&&(d.defines.VSM_SAMPLES=I.blurSamples,p.defines.VSM_SAMPLES=I.blurSamples,d.needsUpdate=!0,p.needsUpdate=!0),I.mapPass===null&&(I.mapPass=new li(s.x,s.y)),d.uniforms.shadow_pass.value=I.map.texture,d.uniforms.resolution.value=I.mapSize,d.uniforms.radius.value=I.radius,i.setRenderTarget(I.mapPass),i.clear(),i.renderBufferDirect(P,null,U,d,_,null),p.uniforms.shadow_pass.value=I.mapPass.texture,p.uniforms.resolution.value=I.mapSize,p.uniforms.radius.value=I.radius,i.setRenderTarget(I.map),i.clear(),i.renderBufferDirect(P,null,U,p,_,null)}function y(I,P,U,K){let x=null;const b=U.isPointLight===!0?I.customDistanceMaterial:I.customDepthMaterial;if(b!==void 0)x=b;else if(x=U.isPointLight===!0?l:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const G=x.uuid,k=P.uuid;let z=c[G];z===void 0&&(z={},c[G]=z);let ne=z[k];ne===void 0&&(ne=x.clone(),z[k]=ne,P.addEventListener("dispose",O)),x=ne}if(x.visible=P.visible,x.wireframe=P.wireframe,K===Yi?x.side=P.shadowSide!==null?P.shadowSide:P.side:x.side=P.shadowSide!==null?P.shadowSide:u[P.side],x.alphaMap=P.alphaMap,x.alphaTest=P.alphaTest,x.map=P.map,x.clipShadows=P.clipShadows,x.clippingPlanes=P.clippingPlanes,x.clipIntersection=P.clipIntersection,x.displacementMap=P.displacementMap,x.displacementScale=P.displacementScale,x.displacementBias=P.displacementBias,x.wireframeLinewidth=P.wireframeLinewidth,x.linewidth=P.linewidth,U.isPointLight===!0&&x.isMeshDistanceMaterial===!0){const G=i.properties.get(x);G.light=U}return x}function M(I,P,U,K,x){if(I.visible===!1)return;if(I.layers.test(P.layers)&&(I.isMesh||I.isLine||I.isPoints)&&(I.castShadow||I.receiveShadow&&x===Yi)&&(!I.frustumCulled||n.intersectsObject(I))){I.modelViewMatrix.multiplyMatrices(U.matrixWorldInverse,I.matrixWorld);const k=e.update(I),z=I.material;if(Array.isArray(z)){const ne=k.groups;for(let q=0,ue=ne.length;q<ue;q++){const Y=ne[q],we=z[Y.materialIndex];if(we&&we.visible){const Te=y(I,we,K,x);I.onBeforeShadow(i,I,P,U,k,Te,Y),i.renderBufferDirect(U,null,k,Te,I,Y),I.onAfterShadow(i,I,P,U,k,Te,Y)}}}else if(z.visible){const ne=y(I,z,K,x);I.onBeforeShadow(i,I,P,U,k,ne,null),i.renderBufferDirect(U,null,k,ne,I,null),I.onAfterShadow(i,I,P,U,k,ne,null)}}const G=I.children;for(let k=0,z=G.length;k<z;k++)M(G[k],P,U,K,x)}function O(I){I.target.removeEventListener("dispose",O);for(const U in c){const K=c[U],x=I.target.uuid;x in K&&(K[x].dispose(),delete K[x])}}}const tx={[yc]:Mc,[Sc]:wc,[bc]:Tc,[Tr]:Ec,[Mc]:yc,[wc]:Sc,[Tc]:bc,[Ec]:Tr};function nx(i){function e(){let $=!1;const Fe=new Dt;let ae=null;const xe=new Dt(0,0,0,0);return{setMask:function(Le){ae!==Le&&!$&&(i.colorMask(Le,Le,Le,Le),ae=Le)},setLocked:function(Le){$=Le},setClear:function(Le,Oe,st,Ot,qt){qt===!0&&(Le*=Ot,Oe*=Ot,st*=Ot),Fe.set(Le,Oe,st,Ot),xe.equals(Fe)===!1&&(i.clearColor(Le,Oe,st,Ot),xe.copy(Fe))},reset:function(){$=!1,ae=null,xe.set(-1,0,0,0)}}}function t(){let $=!1,Fe=!1,ae=null,xe=null,Le=null;return{setReversed:function(Oe){Fe=Oe},setTest:function(Oe){Oe?Ue(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(Oe){ae!==Oe&&!$&&(i.depthMask(Oe),ae=Oe)},setFunc:function(Oe){if(Fe&&(Oe=tx[Oe]),xe!==Oe){switch(Oe){case yc:i.depthFunc(i.NEVER);break;case Mc:i.depthFunc(i.ALWAYS);break;case Sc:i.depthFunc(i.LESS);break;case Tr:i.depthFunc(i.LEQUAL);break;case bc:i.depthFunc(i.EQUAL);break;case Ec:i.depthFunc(i.GEQUAL);break;case wc:i.depthFunc(i.GREATER);break;case Tc:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}xe=Oe}},setLocked:function(Oe){$=Oe},setClear:function(Oe){Le!==Oe&&(i.clearDepth(Oe),Le=Oe)},reset:function(){$=!1,ae=null,xe=null,Le=null}}}function n(){let $=!1,Fe=null,ae=null,xe=null,Le=null,Oe=null,st=null,Ot=null,qt=null;return{setTest:function(xt){$||(xt?Ue(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(xt){Fe!==xt&&!$&&(i.stencilMask(xt),Fe=xt)},setFunc:function(xt,Ct,Jt){(ae!==xt||xe!==Ct||Le!==Jt)&&(i.stencilFunc(xt,Ct,Jt),ae=xt,xe=Ct,Le=Jt)},setOp:function(xt,Ct,Jt){(Oe!==xt||st!==Ct||Ot!==Jt)&&(i.stencilOp(xt,Ct,Jt),Oe=xt,st=Ct,Ot=Jt)},setLocked:function(xt){$=xt},setClear:function(xt){qt!==xt&&(i.clearStencil(xt),qt=xt)},reset:function(){$=!1,Fe=null,ae=null,xe=null,Le=null,Oe=null,st=null,Ot=null,qt=null}}}const s=new e,r=new t,o=new n,a=new WeakMap,l=new WeakMap;let c={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,E=null,y=null,M=null,O=null,I=new Xe(0,0,0),P=0,U=!1,K=null,x=null,b=null,G=null,k=null;const z=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ne=!1,q=0;const ue=i.getParameter(i.VERSION);ue.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(ue)[1]),ne=q>=1):ue.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(ue)[1]),ne=q>=2);let Y=null,we={};const Te=i.getParameter(i.SCISSOR_BOX),Be=i.getParameter(i.VIEWPORT),nt=new Dt().fromArray(Te),at=new Dt().fromArray(Be);function ce($,Fe,ae,xe){const Le=new Uint8Array(4),Oe=i.createTexture();i.bindTexture($,Oe),i.texParameteri($,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri($,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<ae;st++)$===i.TEXTURE_3D||$===i.TEXTURE_2D_ARRAY?i.texImage3D(Fe,0,i.RGBA,1,1,xe,0,i.RGBA,i.UNSIGNED_BYTE,Le):i.texImage2D(Fe+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Le);return Oe}const ve={};ve[i.TEXTURE_2D]=ce(i.TEXTURE_2D,i.TEXTURE_2D,1),ve[i.TEXTURE_CUBE_MAP]=ce(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ve[i.TEXTURE_2D_ARRAY]=ce(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ve[i.TEXTURE_3D]=ce(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Ue(i.DEPTH_TEST),r.setFunc(Tr),ut(!1),dt($h),Ue(i.CULL_FACE),V(Zi);function Ue($){c[$]!==!0&&(i.enable($),c[$]=!0)}function Ce($){c[$]!==!1&&(i.disable($),c[$]=!1)}function $e($,Fe){return h[$]!==Fe?(i.bindFramebuffer($,Fe),h[$]=Fe,$===i.DRAW_FRAMEBUFFER&&(h[i.FRAMEBUFFER]=Fe),$===i.FRAMEBUFFER&&(h[i.DRAW_FRAMEBUFFER]=Fe),!0):!1}function Ye($,Fe){let ae=d,xe=!1;if($){ae=u.get(Fe),ae===void 0&&(ae=[],u.set(Fe,ae));const Le=$.textures;if(ae.length!==Le.length||ae[0]!==i.COLOR_ATTACHMENT0){for(let Oe=0,st=Le.length;Oe<st;Oe++)ae[Oe]=i.COLOR_ATTACHMENT0+Oe;ae.length=Le.length,xe=!0}}else ae[0]!==i.BACK&&(ae[0]=i.BACK,xe=!0);xe&&i.drawBuffers(ae)}function ct($){return p!==$?(i.useProgram($),p=$,!0):!1}const At={[Ns]:i.FUNC_ADD,[ap]:i.FUNC_SUBTRACT,[lp]:i.FUNC_REVERSE_SUBTRACT};At[cp]=i.MIN,At[hp]=i.MAX;const mt={[up]:i.ZERO,[dp]:i.ONE,[fp]:i.SRC_COLOR,[vc]:i.SRC_ALPHA,[xp]:i.SRC_ALPHA_SATURATE,[_p]:i.DST_COLOR,[mp]:i.DST_ALPHA,[pp]:i.ONE_MINUS_SRC_COLOR,[xc]:i.ONE_MINUS_SRC_ALPHA,[vp]:i.ONE_MINUS_DST_COLOR,[gp]:i.ONE_MINUS_DST_ALPHA,[yp]:i.CONSTANT_COLOR,[Mp]:i.ONE_MINUS_CONSTANT_COLOR,[Sp]:i.CONSTANT_ALPHA,[bp]:i.ONE_MINUS_CONSTANT_ALPHA};function V($,Fe,ae,xe,Le,Oe,st,Ot,qt,xt){if($===Zi){g===!0&&(Ce(i.BLEND),g=!1);return}if(g===!1&&(Ue(i.BLEND),g=!0),$!==op){if($!==_||xt!==U){if((m!==Ns||y!==Ns)&&(i.blendEquation(i.FUNC_ADD),m=Ns,y=Ns),xt)switch($){case Mr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pi:i.blendFunc(i.ONE,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kh:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}else switch($){case Mr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Pi:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case jh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Kh:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",$);break}f=null,E=null,M=null,O=null,I.set(0,0,0),P=0,_=$,U=xt}return}Le=Le||Fe,Oe=Oe||ae,st=st||xe,(Fe!==m||Le!==y)&&(i.blendEquationSeparate(At[Fe],At[Le]),m=Fe,y=Le),(ae!==f||xe!==E||Oe!==M||st!==O)&&(i.blendFuncSeparate(mt[ae],mt[xe],mt[Oe],mt[st]),f=ae,E=xe,M=Oe,O=st),(Ot.equals(I)===!1||qt!==P)&&(i.blendColor(Ot.r,Ot.g,Ot.b,qt),I.copy(Ot),P=qt),_=$,U=!1}function Zt($,Fe){$.side===wn?Ce(i.CULL_FACE):Ue(i.CULL_FACE);let ae=$.side===Tn;Fe&&(ae=!ae),ut(ae),$.blending===Mr&&$.transparent===!1?V(Zi):V($.blending,$.blendEquation,$.blendSrc,$.blendDst,$.blendEquationAlpha,$.blendSrcAlpha,$.blendDstAlpha,$.blendColor,$.blendAlpha,$.premultipliedAlpha),r.setFunc($.depthFunc),r.setTest($.depthTest),r.setMask($.depthWrite),s.setMask($.colorWrite);const xe=$.stencilWrite;o.setTest(xe),xe&&(o.setMask($.stencilWriteMask),o.setFunc($.stencilFunc,$.stencilRef,$.stencilFuncMask),o.setOp($.stencilFail,$.stencilZFail,$.stencilZPass)),vt($.polygonOffset,$.polygonOffsetFactor,$.polygonOffsetUnits),$.alphaToCoverage===!0?Ue(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function ut($){K!==$&&($?i.frontFace(i.CW):i.frontFace(i.CCW),K=$)}function dt($){$!==sp?(Ue(i.CULL_FACE),$!==x&&($===$h?i.cullFace(i.BACK):$===rp?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),x=$}function Je($){$!==b&&(ne&&i.lineWidth($),b=$)}function vt($,Fe,ae){$?(Ue(i.POLYGON_OFFSET_FILL),(G!==Fe||k!==ae)&&(i.polygonOffset(Fe,ae),G=Fe,k=ae)):Ce(i.POLYGON_OFFSET_FILL)}function et($){$?Ue(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function D($){$===void 0&&($=i.TEXTURE0+z-1),Y!==$&&(i.activeTexture($),Y=$)}function S($,Fe,ae){ae===void 0&&(Y===null?ae=i.TEXTURE0+z-1:ae=Y);let xe=we[ae];xe===void 0&&(xe={type:void 0,texture:void 0},we[ae]=xe),(xe.type!==$||xe.texture!==Fe)&&(Y!==ae&&(i.activeTexture(ae),Y=ae),i.bindTexture($,Fe||ve[$]),xe.type=$,xe.texture=Fe)}function Z(){const $=we[Y];$!==void 0&&$.type!==void 0&&(i.bindTexture($.type,null),$.type=void 0,$.texture=void 0)}function re(){try{i.compressedTexImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function he(){try{i.compressedTexImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function be(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ye(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ft(){try{i.texStorage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Me(){try{i.texStorage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function ze(){try{i.texImage2D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function Ze(){try{i.texImage3D.apply(i,arguments)}catch($){console.error("THREE.WebGLState:",$)}}function it($){nt.equals($)===!1&&(i.scissor($.x,$.y,$.z,$.w),nt.copy($))}function De($){at.equals($)===!1&&(i.viewport($.x,$.y,$.z,$.w),at.copy($))}function gt($,Fe){let ae=l.get(Fe);ae===void 0&&(ae=new WeakMap,l.set(Fe,ae));let xe=ae.get($);xe===void 0&&(xe=i.getUniformBlockIndex(Fe,$.name),ae.set($,xe))}function tt($,Fe){const xe=l.get(Fe).get($);a.get(Fe)!==xe&&(i.uniformBlockBinding(Fe,xe,$.__bindingPointIndex),a.set(Fe,xe))}function Mt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},Y=null,we={},h={},u=new WeakMap,d=[],p=null,g=!1,_=null,m=null,f=null,E=null,y=null,M=null,O=null,I=new Xe(0,0,0),P=0,U=!1,K=null,x=null,b=null,G=null,k=null,nt.set(0,0,i.canvas.width,i.canvas.height),at.set(0,0,i.canvas.width,i.canvas.height),s.reset(),r.reset(),o.reset()}return{buffers:{color:s,depth:r,stencil:o},enable:Ue,disable:Ce,bindFramebuffer:$e,drawBuffers:Ye,useProgram:ct,setBlending:V,setMaterial:Zt,setFlipSided:ut,setCullFace:dt,setLineWidth:Je,setPolygonOffset:vt,setScissorTest:et,activeTexture:D,bindTexture:S,unbindTexture:Z,compressedTexImage2D:re,compressedTexImage3D:he,texImage2D:ze,texImage3D:Ze,updateUBOMapping:gt,uniformBlockBinding:tt,texStorage2D:ft,texStorage3D:Me,texSubImage2D:ie,texSubImage3D:Pe,compressedTexSubImage2D:be,compressedTexSubImage3D:ye,scissor:it,viewport:De,reset:Mt}}function Gu(i,e,t,n){const s=ix(n);switch(t){case qd:return i*e;case $d:return i*e;case jd:return i*e*2;case Eh:return i*e/s.components*s.byteLength;case wh:return i*e/s.components*s.byteLength;case Kd:return i*e*2/s.components*s.byteLength;case Th:return i*e*2/s.components*s.byteLength;case Yd:return i*e*3/s.components*s.byteLength;case ai:return i*e*4/s.components*s.byteLength;case Ah:return i*e*4/s.components*s.byteLength;case Ea:case wa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ta:case Aa:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pc:case Ic:return Math.max(i,16)*Math.max(e,8)/4;case Cc:case Lc:return Math.max(i,8)*Math.max(e,8)/2;case Dc:case Nc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Uc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Fc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Oc:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Bc:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case kc:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case zc:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Hc:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Vc:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Gc:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Wc:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Xc:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case qc:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Yc:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case $c:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case jc:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Ra:case Kc:case Zc:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Zd:case Jc:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Qc:case eh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ix(i){switch(i){case Si:case Gd:return{byteLength:1,components:1};case mo:case Wd:case Gn:return{byteLength:2,components:1};case Sh:case bh:return{byteLength:2,components:4};case ks:case Mh:case $n:return{byteLength:4,components:1};case Xd:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}function sx(i,e,t,n,s,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Ke,h=new WeakMap;let u;const d=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(D,S){return p?new OffscreenCanvas(D,S):vo("canvas")}function _(D,S,Z){let re=1;const he=et(D);if((he.width>Z||he.height>Z)&&(re=Z/Math.max(he.width,he.height)),re<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){const ie=Math.floor(re*he.width),Pe=Math.floor(re*he.height);u===void 0&&(u=g(ie,Pe));const be=S?g(ie,Pe):u;return be.width=ie,be.height=Pe,be.getContext("2d").drawImage(D,0,0,ie,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+ie+"x"+Pe+")."),be}else return"data"in D&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),D;return D}function m(D){return D.generateMipmaps&&D.minFilter!==Cn&&D.minFilter!==fn}function f(D){i.generateMipmap(D)}function E(D,S,Z,re,he=!1){if(D!==null){if(i[D]!==void 0)return i[D];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let ie=S;if(S===i.RED&&(Z===i.FLOAT&&(ie=i.R32F),Z===i.HALF_FLOAT&&(ie=i.R16F),Z===i.UNSIGNED_BYTE&&(ie=i.R8)),S===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ie=i.R8UI),Z===i.UNSIGNED_SHORT&&(ie=i.R16UI),Z===i.UNSIGNED_INT&&(ie=i.R32UI),Z===i.BYTE&&(ie=i.R8I),Z===i.SHORT&&(ie=i.R16I),Z===i.INT&&(ie=i.R32I)),S===i.RG&&(Z===i.FLOAT&&(ie=i.RG32F),Z===i.HALF_FLOAT&&(ie=i.RG16F),Z===i.UNSIGNED_BYTE&&(ie=i.RG8)),S===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ie=i.RG8UI),Z===i.UNSIGNED_SHORT&&(ie=i.RG16UI),Z===i.UNSIGNED_INT&&(ie=i.RG32UI),Z===i.BYTE&&(ie=i.RG8I),Z===i.SHORT&&(ie=i.RG16I),Z===i.INT&&(ie=i.RG32I)),S===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ie=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(ie=i.RGB16UI),Z===i.UNSIGNED_INT&&(ie=i.RGB32UI),Z===i.BYTE&&(ie=i.RGB8I),Z===i.SHORT&&(ie=i.RGB16I),Z===i.INT&&(ie=i.RGB32I)),S===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(ie=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(ie=i.RGBA16UI),Z===i.UNSIGNED_INT&&(ie=i.RGBA32UI),Z===i.BYTE&&(ie=i.RGBA8I),Z===i.SHORT&&(ie=i.RGBA16I),Z===i.INT&&(ie=i.RGBA32I)),S===i.RGB&&Z===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),S===i.RGBA){const Pe=he?Ua:Lt.getTransfer(re);Z===i.FLOAT&&(ie=i.RGBA32F),Z===i.HALF_FLOAT&&(ie=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(ie=Pe===Xt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function y(D,S){let Z;return D?S===null||S===ks||S===Cr?Z=i.DEPTH24_STENCIL8:S===$n?Z=i.DEPTH32F_STENCIL8:S===mo&&(Z=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ks||S===Cr?Z=i.DEPTH_COMPONENT24:S===$n?Z=i.DEPTH_COMPONENT32F:S===mo&&(Z=i.DEPTH_COMPONENT16),Z}function M(D,S){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==Cn&&D.minFilter!==fn?Math.log2(Math.max(S.width,S.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?S.mipmaps.length:1}function O(D){const S=D.target;S.removeEventListener("dispose",O),P(S),S.isVideoTexture&&h.delete(S)}function I(D){const S=D.target;S.removeEventListener("dispose",I),K(S)}function P(D){const S=n.get(D);if(S.__webglInit===void 0)return;const Z=D.source,re=d.get(Z);if(re){const he=re[S.__cacheKey];he.usedTimes--,he.usedTimes===0&&U(D),Object.keys(re).length===0&&d.delete(Z)}n.remove(D)}function U(D){const S=n.get(D);i.deleteTexture(S.__webglTexture);const Z=D.source,re=d.get(Z);delete re[S.__cacheKey],o.memory.textures--}function K(D){const S=n.get(D);if(D.depthTexture&&D.depthTexture.dispose(),D.isWebGLCubeRenderTarget)for(let re=0;re<6;re++){if(Array.isArray(S.__webglFramebuffer[re]))for(let he=0;he<S.__webglFramebuffer[re].length;he++)i.deleteFramebuffer(S.__webglFramebuffer[re][he]);else i.deleteFramebuffer(S.__webglFramebuffer[re]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[re])}else{if(Array.isArray(S.__webglFramebuffer))for(let re=0;re<S.__webglFramebuffer.length;re++)i.deleteFramebuffer(S.__webglFramebuffer[re]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let re=0;re<S.__webglColorRenderbuffer.length;re++)S.__webglColorRenderbuffer[re]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[re]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const Z=D.textures;for(let re=0,he=Z.length;re<he;re++){const ie=n.get(Z[re]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),o.memory.textures--),n.remove(Z[re])}n.remove(D)}let x=0;function b(){x=0}function G(){const D=x;return D>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+D+" texture units while this GPU supports only "+s.maxTextures),x+=1,D}function k(D){const S=[];return S.push(D.wrapS),S.push(D.wrapT),S.push(D.wrapR||0),S.push(D.magFilter),S.push(D.minFilter),S.push(D.anisotropy),S.push(D.internalFormat),S.push(D.format),S.push(D.type),S.push(D.generateMipmaps),S.push(D.premultiplyAlpha),S.push(D.flipY),S.push(D.unpackAlignment),S.push(D.colorSpace),S.join()}function z(D,S){const Z=n.get(D);if(D.isVideoTexture&&Je(D),D.isRenderTargetTexture===!1&&D.version>0&&Z.__version!==D.version){const re=D.image;if(re===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(re.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{at(Z,D,S);return}}t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+S)}function ne(D,S){const Z=n.get(D);if(D.version>0&&Z.__version!==D.version){at(Z,D,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+S)}function q(D,S){const Z=n.get(D);if(D.version>0&&Z.__version!==D.version){at(Z,D,S);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+S)}function ue(D,S){const Z=n.get(D);if(D.version>0&&Z.__version!==D.version){ce(Z,D,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+S)}const Y={[Bs]:i.REPEAT,[Li]:i.CLAMP_TO_EDGE,[Na]:i.MIRRORED_REPEAT},we={[Cn]:i.NEAREST,[Vd]:i.NEAREST_MIPMAP_NEAREST,[ao]:i.NEAREST_MIPMAP_LINEAR,[fn]:i.LINEAR,[ba]:i.LINEAR_MIPMAP_NEAREST,[Ii]:i.LINEAR_MIPMAP_LINEAR},Te={[Dp]:i.NEVER,[kp]:i.ALWAYS,[Np]:i.LESS,[ef]:i.LEQUAL,[Up]:i.EQUAL,[Bp]:i.GEQUAL,[Fp]:i.GREATER,[Op]:i.NOTEQUAL};function Be(D,S){if(S.type===$n&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===fn||S.magFilter===ba||S.magFilter===ao||S.magFilter===Ii||S.minFilter===fn||S.minFilter===ba||S.minFilter===ao||S.minFilter===Ii)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(D,i.TEXTURE_WRAP_S,Y[S.wrapS]),i.texParameteri(D,i.TEXTURE_WRAP_T,Y[S.wrapT]),(D===i.TEXTURE_3D||D===i.TEXTURE_2D_ARRAY)&&i.texParameteri(D,i.TEXTURE_WRAP_R,Y[S.wrapR]),i.texParameteri(D,i.TEXTURE_MAG_FILTER,we[S.magFilter]),i.texParameteri(D,i.TEXTURE_MIN_FILTER,we[S.minFilter]),S.compareFunction&&(i.texParameteri(D,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(D,i.TEXTURE_COMPARE_FUNC,Te[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Cn||S.minFilter!==ao&&S.minFilter!==Ii||S.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(D,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,s.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function nt(D,S){let Z=!1;D.__webglInit===void 0&&(D.__webglInit=!0,S.addEventListener("dispose",O));const re=S.source;let he=d.get(re);he===void 0&&(he={},d.set(re,he));const ie=k(S);if(ie!==D.__cacheKey){he[ie]===void 0&&(he[ie]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),he[ie].usedTimes++;const Pe=he[D.__cacheKey];Pe!==void 0&&(he[D.__cacheKey].usedTimes--,Pe.usedTimes===0&&U(S)),D.__cacheKey=ie,D.__webglTexture=he[ie].texture}return Z}function at(D,S,Z){let re=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(re=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(re=i.TEXTURE_3D);const he=nt(D,S),ie=S.source;t.bindTexture(re,D.__webglTexture,i.TEXTURE0+Z);const Pe=n.get(ie);if(ie.version!==Pe.__version||he===!0){t.activeTexture(i.TEXTURE0+Z);const be=Lt.getPrimaries(Lt.workingColorSpace),ye=S.colorSpace===gs?null:Lt.getPrimaries(S.colorSpace),ft=S.colorSpace===gs||be===ye?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ft);let Me=_(S.image,!1,s.maxTextureSize);Me=vt(S,Me);const ze=r.convert(S.format,S.colorSpace),Ze=r.convert(S.type);let it=E(S.internalFormat,ze,Ze,S.colorSpace,S.isVideoTexture);Be(re,S);let De;const gt=S.mipmaps,tt=S.isVideoTexture!==!0,Mt=Pe.__version===void 0||he===!0,$=ie.dataReady,Fe=M(S,Me);if(S.isDepthTexture)it=y(S.format===Pr,S.type),Mt&&(tt?t.texStorage2D(i.TEXTURE_2D,1,it,Me.width,Me.height):t.texImage2D(i.TEXTURE_2D,0,it,Me.width,Me.height,0,ze,Ze,null));else if(S.isDataTexture)if(gt.length>0){tt&&Mt&&t.texStorage2D(i.TEXTURE_2D,Fe,it,gt[0].width,gt[0].height);for(let ae=0,xe=gt.length;ae<xe;ae++)De=gt[ae],tt?$&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,De.width,De.height,ze,Ze,De.data):t.texImage2D(i.TEXTURE_2D,ae,it,De.width,De.height,0,ze,Ze,De.data);S.generateMipmaps=!1}else tt?(Mt&&t.texStorage2D(i.TEXTURE_2D,Fe,it,Me.width,Me.height),$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Me.width,Me.height,ze,Ze,Me.data)):t.texImage2D(i.TEXTURE_2D,0,it,Me.width,Me.height,0,ze,Ze,Me.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){tt&&Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,it,gt[0].width,gt[0].height,Me.depth);for(let ae=0,xe=gt.length;ae<xe;ae++)if(De=gt[ae],S.format!==ai)if(ze!==null)if(tt){if($)if(S.layerUpdates.size>0){const Le=Gu(De.width,De.height,S.format,S.type);for(const Oe of S.layerUpdates){const st=De.data.subarray(Oe*Le/De.data.BYTES_PER_ELEMENT,(Oe+1)*Le/De.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,Oe,De.width,De.height,1,ze,st,0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,De.width,De.height,Me.depth,ze,De.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ae,it,De.width,De.height,Me.depth,0,De.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else tt?$&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ae,0,0,0,De.width,De.height,Me.depth,ze,Ze,De.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ae,it,De.width,De.height,Me.depth,0,ze,Ze,De.data)}else{tt&&Mt&&t.texStorage2D(i.TEXTURE_2D,Fe,it,gt[0].width,gt[0].height);for(let ae=0,xe=gt.length;ae<xe;ae++)De=gt[ae],S.format!==ai?ze!==null?tt?$&&t.compressedTexSubImage2D(i.TEXTURE_2D,ae,0,0,De.width,De.height,ze,De.data):t.compressedTexImage2D(i.TEXTURE_2D,ae,it,De.width,De.height,0,De.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):tt?$&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,De.width,De.height,ze,Ze,De.data):t.texImage2D(i.TEXTURE_2D,ae,it,De.width,De.height,0,ze,Ze,De.data)}else if(S.isDataArrayTexture)if(tt){if(Mt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Fe,it,Me.width,Me.height,Me.depth),$)if(S.layerUpdates.size>0){const ae=Gu(Me.width,Me.height,S.format,S.type);for(const xe of S.layerUpdates){const Le=Me.data.subarray(xe*ae/Me.data.BYTES_PER_ELEMENT,(xe+1)*ae/Me.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,xe,Me.width,Me.height,1,ze,Ze,Le)}S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,Me.width,Me.height,Me.depth,ze,Ze,Me.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,it,Me.width,Me.height,Me.depth,0,ze,Ze,Me.data);else if(S.isData3DTexture)tt?(Mt&&t.texStorage3D(i.TEXTURE_3D,Fe,it,Me.width,Me.height,Me.depth),$&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,Me.width,Me.height,Me.depth,ze,Ze,Me.data)):t.texImage3D(i.TEXTURE_3D,0,it,Me.width,Me.height,Me.depth,0,ze,Ze,Me.data);else if(S.isFramebufferTexture){if(Mt)if(tt)t.texStorage2D(i.TEXTURE_2D,Fe,it,Me.width,Me.height);else{let ae=Me.width,xe=Me.height;for(let Le=0;Le<Fe;Le++)t.texImage2D(i.TEXTURE_2D,Le,it,ae,xe,0,ze,Ze,null),ae>>=1,xe>>=1}}else if(gt.length>0){if(tt&&Mt){const ae=et(gt[0]);t.texStorage2D(i.TEXTURE_2D,Fe,it,ae.width,ae.height)}for(let ae=0,xe=gt.length;ae<xe;ae++)De=gt[ae],tt?$&&t.texSubImage2D(i.TEXTURE_2D,ae,0,0,ze,Ze,De):t.texImage2D(i.TEXTURE_2D,ae,it,ze,Ze,De);S.generateMipmaps=!1}else if(tt){if(Mt){const ae=et(Me);t.texStorage2D(i.TEXTURE_2D,Fe,it,ae.width,ae.height)}$&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ze,Ze,Me)}else t.texImage2D(i.TEXTURE_2D,0,it,ze,Ze,Me);m(S)&&f(re),Pe.__version=ie.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function ce(D,S,Z){if(S.image.length!==6)return;const re=nt(D,S),he=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,D.__webglTexture,i.TEXTURE0+Z);const ie=n.get(he);if(he.version!==ie.__version||re===!0){t.activeTexture(i.TEXTURE0+Z);const Pe=Lt.getPrimaries(Lt.workingColorSpace),be=S.colorSpace===gs?null:Lt.getPrimaries(S.colorSpace),ye=S.colorSpace===gs||Pe===be?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ye);const ft=S.isCompressedTexture||S.image[0].isCompressedTexture,Me=S.image[0]&&S.image[0].isDataTexture,ze=[];for(let xe=0;xe<6;xe++)!ft&&!Me?ze[xe]=_(S.image[xe],!0,s.maxCubemapSize):ze[xe]=Me?S.image[xe].image:S.image[xe],ze[xe]=vt(S,ze[xe]);const Ze=ze[0],it=r.convert(S.format,S.colorSpace),De=r.convert(S.type),gt=E(S.internalFormat,it,De,S.colorSpace),tt=S.isVideoTexture!==!0,Mt=ie.__version===void 0||re===!0,$=he.dataReady;let Fe=M(S,Ze);Be(i.TEXTURE_CUBE_MAP,S);let ae;if(ft){tt&&Mt&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,gt,Ze.width,Ze.height);for(let xe=0;xe<6;xe++){ae=ze[xe].mipmaps;for(let Le=0;Le<ae.length;Le++){const Oe=ae[Le];S.format!==ai?it!==null?tt?$&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Le,0,0,Oe.width,Oe.height,it,Oe.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Le,gt,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):tt?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Le,0,0,Oe.width,Oe.height,it,De,Oe.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Le,gt,Oe.width,Oe.height,0,it,De,Oe.data)}}}else{if(ae=S.mipmaps,tt&&Mt){ae.length>0&&Fe++;const xe=et(ze[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Fe,gt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Me){tt?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,ze[xe].width,ze[xe].height,it,De,ze[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,gt,ze[xe].width,ze[xe].height,0,it,De,ze[xe].data);for(let Le=0;Le<ae.length;Le++){const st=ae[Le].image[xe].image;tt?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Le+1,0,0,st.width,st.height,it,De,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Le+1,gt,st.width,st.height,0,it,De,st.data)}}else{tt?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,it,De,ze[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,gt,it,De,ze[xe]);for(let Le=0;Le<ae.length;Le++){const Oe=ae[Le];tt?$&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Le+1,0,0,it,De,Oe.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,Le+1,gt,it,De,Oe.image[xe])}}}m(S)&&f(i.TEXTURE_CUBE_MAP),ie.__version=he.version,S.onUpdate&&S.onUpdate(S)}D.__version=S.version}function ve(D,S,Z,re,he,ie){const Pe=r.convert(Z.format,Z.colorSpace),be=r.convert(Z.type),ye=E(Z.internalFormat,Pe,be,Z.colorSpace);if(!n.get(S).__hasExternalTextures){const Me=Math.max(1,S.width>>ie),ze=Math.max(1,S.height>>ie);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,ie,ye,Me,ze,S.depth,0,Pe,be,null):t.texImage2D(he,ie,ye,Me,ze,0,Pe,be,null)}t.bindFramebuffer(i.FRAMEBUFFER,D),dt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,re,he,n.get(Z).__webglTexture,0,ut(S)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,re,he,n.get(Z).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ue(D,S,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,D),S.depthBuffer){const re=S.depthTexture,he=re&&re.isDepthTexture?re.type:null,ie=y(S.stencilBuffer,he),Pe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,be=ut(S);dt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,be,ie,S.width,S.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,be,ie,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ie,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,D)}else{const re=S.textures;for(let he=0;he<re.length;he++){const ie=re[he],Pe=r.convert(ie.format,ie.colorSpace),be=r.convert(ie.type),ye=E(ie.internalFormat,Pe,be,ie.colorSpace),ft=ut(S);Z&&dt(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,ye,S.width,S.height):dt(S)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,ye,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ye,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ce(D,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,D),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),z(S.depthTexture,0);const re=n.get(S.depthTexture).__webglTexture,he=ut(S);if(S.depthTexture.format===Sr)dt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,re,0);else if(S.depthTexture.format===Pr)dt(S)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0,he):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,re,0);else throw new Error("Unknown depthTexture format")}function $e(D){const S=n.get(D),Z=D.isWebGLCubeRenderTarget===!0;if(S.__boundDepthTexture!==D.depthTexture){const re=D.depthTexture;if(S.__depthDisposeCallback&&S.__depthDisposeCallback(),re){const he=()=>{delete S.__boundDepthTexture,delete S.__depthDisposeCallback,re.removeEventListener("dispose",he)};re.addEventListener("dispose",he),S.__depthDisposeCallback=he}S.__boundDepthTexture=re}if(D.depthTexture&&!S.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");Ce(S.__webglFramebuffer,D)}else if(Z){S.__webglDepthbuffer=[];for(let re=0;re<6;re++)if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[re]),S.__webglDepthbuffer[re]===void 0)S.__webglDepthbuffer[re]=i.createRenderbuffer(),Ue(S.__webglDepthbuffer[re],D,!1);else{const he=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ie=S.__webglDepthbuffer[re];i.bindRenderbuffer(i.RENDERBUFFER,ie),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,ie)}}else if(t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer===void 0)S.__webglDepthbuffer=i.createRenderbuffer(),Ue(S.__webglDepthbuffer,D,!1);else{const re=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,he=S.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,he),i.framebufferRenderbuffer(i.FRAMEBUFFER,re,i.RENDERBUFFER,he)}t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ye(D,S,Z){const re=n.get(D);S!==void 0&&ve(re.__webglFramebuffer,D,D.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&$e(D)}function ct(D){const S=D.texture,Z=n.get(D),re=n.get(S);D.addEventListener("dispose",I);const he=D.textures,ie=D.isWebGLCubeRenderTarget===!0,Pe=he.length>1;if(Pe||(re.__webglTexture===void 0&&(re.__webglTexture=i.createTexture()),re.__version=S.version,o.memory.textures++),ie){Z.__webglFramebuffer=[];for(let be=0;be<6;be++)if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer[be]=[];for(let ye=0;ye<S.mipmaps.length;ye++)Z.__webglFramebuffer[be][ye]=i.createFramebuffer()}else Z.__webglFramebuffer[be]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){Z.__webglFramebuffer=[];for(let be=0;be<S.mipmaps.length;be++)Z.__webglFramebuffer[be]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let be=0,ye=he.length;be<ye;be++){const ft=n.get(he[be]);ft.__webglTexture===void 0&&(ft.__webglTexture=i.createTexture(),o.memory.textures++)}if(D.samples>0&&dt(D)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let be=0;be<he.length;be++){const ye=he[be];Z.__webglColorRenderbuffer[be]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[be]);const ft=r.convert(ye.format,ye.colorSpace),Me=r.convert(ye.type),ze=E(ye.internalFormat,ft,Me,ye.colorSpace,D.isXRRenderTarget===!0),Ze=ut(D);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ze,ze,D.width,D.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+be,i.RENDERBUFFER,Z.__webglColorRenderbuffer[be])}i.bindRenderbuffer(i.RENDERBUFFER,null),D.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),Ue(Z.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,re.__webglTexture),Be(i.TEXTURE_CUBE_MAP,S);for(let be=0;be<6;be++)if(S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ve(Z.__webglFramebuffer[be][ye],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,ye);else ve(Z.__webglFramebuffer[be],D,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+be,0);m(S)&&f(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let be=0,ye=he.length;be<ye;be++){const ft=he[be],Me=n.get(ft);t.bindTexture(i.TEXTURE_2D,Me.__webglTexture),Be(i.TEXTURE_2D,ft),ve(Z.__webglFramebuffer,D,ft,i.COLOR_ATTACHMENT0+be,i.TEXTURE_2D,0),m(ft)&&f(i.TEXTURE_2D)}t.unbindTexture()}else{let be=i.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(be=D.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(be,re.__webglTexture),Be(be,S),S.mipmaps&&S.mipmaps.length>0)for(let ye=0;ye<S.mipmaps.length;ye++)ve(Z.__webglFramebuffer[ye],D,S,i.COLOR_ATTACHMENT0,be,ye);else ve(Z.__webglFramebuffer,D,S,i.COLOR_ATTACHMENT0,be,0);m(S)&&f(be),t.unbindTexture()}D.depthBuffer&&$e(D)}function At(D){const S=D.textures;for(let Z=0,re=S.length;Z<re;Z++){const he=S[Z];if(m(he)){const ie=D.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(he).__webglTexture;t.bindTexture(ie,Pe),f(ie),t.unbindTexture()}}}const mt=[],V=[];function Zt(D){if(D.samples>0){if(dt(D)===!1){const S=D.textures,Z=D.width,re=D.height;let he=i.COLOR_BUFFER_BIT;const ie=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(D),be=S.length>1;if(be)for(let ye=0;ye<S.length;ye++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ye=0;ye<S.length;ye++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),be){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[ye]);const ft=n.get(S[ye]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,ft,0)}i.blitFramebuffer(0,0,Z,re,0,0,Z,re,he,i.NEAREST),l===!0&&(mt.length=0,V.length=0,mt.push(i.COLOR_ATTACHMENT0+ye),D.depthBuffer&&D.resolveDepthBuffer===!1&&(mt.push(ie),V.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,V)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,mt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),be)for(let ye=0;ye<S.length;ye++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[ye]);const ft=n.get(S[ye]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ye,i.TEXTURE_2D,ft,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.resolveDepthBuffer===!1&&l){const S=D.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function ut(D){return Math.min(s.maxSamples,D.samples)}function dt(D){const S=n.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Je(D){const S=o.render.frame;h.get(D)!==S&&(h.set(D,S),D.update())}function vt(D,S){const Z=D.colorSpace,re=D.format,he=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||Z!==mn&&Z!==gs&&(Lt.getTransfer(Z)===Xt?(re!==ai||he!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),S}function et(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=G,this.resetTextureUnits=b,this.setTexture2D=z,this.setTexture2DArray=ne,this.setTexture3D=q,this.setTextureCube=ue,this.rebindTextures=Ye,this.setupRenderTarget=ct,this.updateRenderTargetMipmap=At,this.updateMultisampleRenderTarget=Zt,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=ve,this.useMultisampledRTT=dt}function rx(i,e){function t(n,s=gs){let r;const o=Lt.getTransfer(s);if(n===Si)return i.UNSIGNED_BYTE;if(n===Sh)return i.UNSIGNED_SHORT_4_4_4_4;if(n===bh)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Xd)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Gd)return i.BYTE;if(n===Wd)return i.SHORT;if(n===mo)return i.UNSIGNED_SHORT;if(n===Mh)return i.INT;if(n===ks)return i.UNSIGNED_INT;if(n===$n)return i.FLOAT;if(n===Gn)return i.HALF_FLOAT;if(n===qd)return i.ALPHA;if(n===Yd)return i.RGB;if(n===ai)return i.RGBA;if(n===$d)return i.LUMINANCE;if(n===jd)return i.LUMINANCE_ALPHA;if(n===Sr)return i.DEPTH_COMPONENT;if(n===Pr)return i.DEPTH_STENCIL;if(n===Eh)return i.RED;if(n===wh)return i.RED_INTEGER;if(n===Kd)return i.RG;if(n===Th)return i.RG_INTEGER;if(n===Ah)return i.RGBA_INTEGER;if(n===Ea||n===wa||n===Ta||n===Aa)if(o===Xt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===Ea)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===Ea)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===wa)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ta)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Aa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Cc||n===Pc||n===Lc||n===Ic)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===Cc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Pc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Lc)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ic)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Dc||n===Nc||n===Uc)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Dc||n===Nc)return o===Xt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===Uc)return o===Xt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Fc||n===Oc||n===Bc||n===kc||n===zc||n===Hc||n===Vc||n===Gc||n===Wc||n===Xc||n===qc||n===Yc||n===$c||n===jc)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===Fc)return o===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Oc)return o===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Bc)return o===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===kc)return o===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===zc)return o===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Hc)return o===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Vc)return o===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Gc)return o===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Wc)return o===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===Xc)return o===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===qc)return o===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Yc)return o===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===$c)return o===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===jc)return o===Xt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Ra||n===Kc||n===Zc)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===Ra)return o===Xt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Kc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Zc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===Zd||n===Jc||n===Qc||n===eh)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===Ra)return r.COMPRESSED_RED_RGTC1_EXT;if(n===Jc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===Qc)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===eh)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Cr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class ox extends _n{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class jt extends Kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const ax={type:"move"};class ql{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new jt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new jt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new H,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new H),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new jt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new H,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new H),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),f=this._getHandJoint(c,_);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const h=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],d=h.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&d>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=t.getPose(e.targetRaySpace,n),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(ax)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new jt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const lx=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,cx=`
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

}`;class hx{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const s=new pn,r=e.properties.get(s);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=s}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new rn({vertexShader:lx,fragmentShader:cx,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ae(new En(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class ux extends Br{constructor(e,t){super();const n=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,h=null,u=null,d=null,p=null,g=null;const _=new hx,m=t.getContextAttributes();let f=null,E=null;const y=[],M=[],O=new Ke;let I=null;const P=new _n;P.layers.enable(1),P.viewport=new Dt;const U=new _n;U.layers.enable(2),U.viewport=new Dt;const K=[P,U],x=new ox;x.layers.enable(1),x.layers.enable(2);let b=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ce){let ve=y[ce];return ve===void 0&&(ve=new ql,y[ce]=ve),ve.getTargetRaySpace()},this.getControllerGrip=function(ce){let ve=y[ce];return ve===void 0&&(ve=new ql,y[ce]=ve),ve.getGripSpace()},this.getHand=function(ce){let ve=y[ce];return ve===void 0&&(ve=new ql,y[ce]=ve),ve.getHandSpace()};function k(ce){const ve=M.indexOf(ce.inputSource);if(ve===-1)return;const Ue=y[ve];Ue!==void 0&&(Ue.update(ce.inputSource,ce.frame,c||o),Ue.dispatchEvent({type:ce.type,data:ce.inputSource}))}function z(){s.removeEventListener("select",k),s.removeEventListener("selectstart",k),s.removeEventListener("selectend",k),s.removeEventListener("squeeze",k),s.removeEventListener("squeezestart",k),s.removeEventListener("squeezeend",k),s.removeEventListener("end",z),s.removeEventListener("inputsourceschange",ne);for(let ce=0;ce<y.length;ce++){const ve=M[ce];ve!==null&&(M[ce]=null,y[ce].disconnect(ve))}b=null,G=null,_.reset(),e.setRenderTarget(f),p=null,d=null,u=null,s=null,E=null,at.stop(),n.isPresenting=!1,e.setPixelRatio(I),e.setSize(O.width,O.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ce){r=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ce){a=ce,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(ce){c=ce},this.getBaseLayer=function(){return d!==null?d:p},this.getBinding=function(){return u},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(ce){if(s=ce,s!==null){if(f=e.getRenderTarget(),s.addEventListener("select",k),s.addEventListener("selectstart",k),s.addEventListener("selectend",k),s.addEventListener("squeeze",k),s.addEventListener("squeezestart",k),s.addEventListener("squeezeend",k),s.addEventListener("end",z),s.addEventListener("inputsourceschange",ne),m.xrCompatible!==!0&&await t.makeXRCompatible(),I=e.getPixelRatio(),e.getSize(O),s.renderState.layers===void 0){const ve={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:r};p=new XRWebGLLayer(s,t,ve),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),E=new li(p.framebufferWidth,p.framebufferHeight,{format:ai,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:m.stencil})}else{let ve=null,Ue=null,Ce=null;m.depth&&(Ce=m.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ve=m.stencil?Pr:Sr,Ue=m.stencil?Cr:ks);const $e={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:r};u=new XRWebGLBinding(s,t),d=u.createProjectionLayer($e),s.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new li(d.textureWidth,d.textureHeight,{format:ai,type:Si,depthTexture:new gf(d.textureWidth,d.textureHeight,Ue,void 0,void 0,void 0,void 0,void 0,void 0,ve),stencilBuffer:m.stencil,colorSpace:e.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),at.setContext(s),at.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function ne(ce){for(let ve=0;ve<ce.removed.length;ve++){const Ue=ce.removed[ve],Ce=M.indexOf(Ue);Ce>=0&&(M[Ce]=null,y[Ce].disconnect(Ue))}for(let ve=0;ve<ce.added.length;ve++){const Ue=ce.added[ve];let Ce=M.indexOf(Ue);if(Ce===-1){for(let Ye=0;Ye<y.length;Ye++)if(Ye>=M.length){M.push(Ue),Ce=Ye;break}else if(M[Ye]===null){M[Ye]=Ue,Ce=Ye;break}if(Ce===-1)break}const $e=y[Ce];$e&&$e.connect(Ue)}}const q=new H,ue=new H;function Y(ce,ve,Ue){q.setFromMatrixPosition(ve.matrixWorld),ue.setFromMatrixPosition(Ue.matrixWorld);const Ce=q.distanceTo(ue),$e=ve.projectionMatrix.elements,Ye=Ue.projectionMatrix.elements,ct=$e[14]/($e[10]-1),At=$e[14]/($e[10]+1),mt=($e[9]+1)/$e[5],V=($e[9]-1)/$e[5],Zt=($e[8]-1)/$e[0],ut=(Ye[8]+1)/Ye[0],dt=ct*Zt,Je=ct*ut,vt=Ce/(-Zt+ut),et=vt*-Zt;if(ve.matrixWorld.decompose(ce.position,ce.quaternion,ce.scale),ce.translateX(et),ce.translateZ(vt),ce.matrixWorld.compose(ce.position,ce.quaternion,ce.scale),ce.matrixWorldInverse.copy(ce.matrixWorld).invert(),$e[10]===-1)ce.projectionMatrix.copy(ve.projectionMatrix),ce.projectionMatrixInverse.copy(ve.projectionMatrixInverse);else{const D=ct+vt,S=At+vt,Z=dt-et,re=Je+(Ce-et),he=mt*At/S*D,ie=V*At/S*D;ce.projectionMatrix.makePerspective(Z,re,he,ie,D,S),ce.projectionMatrixInverse.copy(ce.projectionMatrix).invert()}}function we(ce,ve){ve===null?ce.matrixWorld.copy(ce.matrix):ce.matrixWorld.multiplyMatrices(ve.matrixWorld,ce.matrix),ce.matrixWorldInverse.copy(ce.matrixWorld).invert()}this.updateCamera=function(ce){if(s===null)return;let ve=ce.near,Ue=ce.far;_.texture!==null&&(_.depthNear>0&&(ve=_.depthNear),_.depthFar>0&&(Ue=_.depthFar)),x.near=U.near=P.near=ve,x.far=U.far=P.far=Ue,(b!==x.near||G!==x.far)&&(s.updateRenderState({depthNear:x.near,depthFar:x.far}),b=x.near,G=x.far);const Ce=ce.parent,$e=x.cameras;we(x,Ce);for(let Ye=0;Ye<$e.length;Ye++)we($e[Ye],Ce);$e.length===2?Y(x,P,U):x.projectionMatrix.copy(P.projectionMatrix),Te(ce,x,Ce)};function Te(ce,ve,Ue){Ue===null?ce.matrix.copy(ve.matrixWorld):(ce.matrix.copy(Ue.matrixWorld),ce.matrix.invert(),ce.matrix.multiply(ve.matrixWorld)),ce.matrix.decompose(ce.position,ce.quaternion,ce.scale),ce.updateMatrixWorld(!0),ce.projectionMatrix.copy(ve.projectionMatrix),ce.projectionMatrixInverse.copy(ve.projectionMatrixInverse),ce.isPerspectiveCamera&&(ce.fov=Lr*2*Math.atan(1/ce.projectionMatrix.elements[5]),ce.zoom=1)}this.getCamera=function(){return x},this.getFoveation=function(){if(!(d===null&&p===null))return l},this.setFoveation=function(ce){l=ce,d!==null&&(d.fixedFoveation=ce),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=ce)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(x)};let Be=null;function nt(ce,ve){if(h=ve.getViewerPose(c||o),g=ve,h!==null){const Ue=h.views;p!==null&&(e.setRenderTargetFramebuffer(E,p.framebuffer),e.setRenderTarget(E));let Ce=!1;Ue.length!==x.cameras.length&&(x.cameras.length=0,Ce=!0);for(let Ye=0;Ye<Ue.length;Ye++){const ct=Ue[Ye];let At=null;if(p!==null)At=p.getViewport(ct);else{const V=u.getViewSubImage(d,ct);At=V.viewport,Ye===0&&(e.setRenderTargetTextures(E,V.colorTexture,d.ignoreDepthValues?void 0:V.depthStencilTexture),e.setRenderTarget(E))}let mt=K[Ye];mt===void 0&&(mt=new _n,mt.layers.enable(Ye),mt.viewport=new Dt,K[Ye]=mt),mt.matrix.fromArray(ct.transform.matrix),mt.matrix.decompose(mt.position,mt.quaternion,mt.scale),mt.projectionMatrix.fromArray(ct.projectionMatrix),mt.projectionMatrixInverse.copy(mt.projectionMatrix).invert(),mt.viewport.set(At.x,At.y,At.width,At.height),Ye===0&&(x.matrix.copy(mt.matrix),x.matrix.decompose(x.position,x.quaternion,x.scale)),Ce===!0&&x.cameras.push(mt)}const $e=s.enabledFeatures;if($e&&$e.includes("depth-sensing")){const Ye=u.getDepthInformation(Ue[0]);Ye&&Ye.isValid&&Ye.texture&&_.init(e,Ye,s.renderState)}}for(let Ue=0;Ue<y.length;Ue++){const Ce=M[Ue],$e=y[Ue];Ce!==null&&$e!==void 0&&$e.update(Ce,ve,c||o)}Be&&Be(ce,ve),ve.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ve}),g=null}const at=new mf;at.setAnimationLoop(nt),this.setAnimationLoop=function(ce){Be=ce},this.dispose=function(){}}}const Cs=new Di,dx=new _t;function fx(i,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function n(m,f){f.color.getRGB(m.fogColor.value,hf(i)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function s(m,f,E,y,M){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(m,f):f.isMeshToonMaterial?(r(m,f),u(m,f)):f.isMeshPhongMaterial?(r(m,f),h(m,f)):f.isMeshStandardMaterial?(r(m,f),d(m,f),f.isMeshPhysicalMaterial&&p(m,f,M)):f.isMeshMatcapMaterial?(r(m,f),g(m,f)):f.isMeshDepthMaterial?r(m,f):f.isMeshDistanceMaterial?(r(m,f),_(m,f)):f.isMeshNormalMaterial?r(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,E,y):f.isSpriteMaterial?c(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===Tn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===Tn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const E=e.get(f),y=E.envMap,M=E.envMapRotation;y&&(m.envMap.value=y,Cs.copy(M),Cs.x*=-1,Cs.y*=-1,Cs.z*=-1,y.isCubeTexture&&y.isRenderTargetTexture===!1&&(Cs.y*=-1,Cs.z*=-1),m.envMapRotation.value.setFromMatrix4(dx.makeRotationFromEuler(Cs)),m.flipEnvMap.value=y.isCubeTexture&&y.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap&&(m.lightMap.value=f.lightMap,m.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,m.lightMapTransform)),f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,E,y){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*E,m.scale.value=y*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function h(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function u(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function d(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),f.envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,E){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Tn&&m.clearcoatNormalScale.value.negate())),f.dispersion>0&&(m.dispersion.value=f.dispersion),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=E.texture,m.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,f){f.matcap&&(m.matcap.value=f.matcap)}function _(m,f){const E=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(E.matrixWorld),m.nearDistance.value=E.shadow.camera.near,m.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:s}}function px(i,e,t,n){let s={},r={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(E,y){const M=y.program;n.uniformBlockBinding(E,M)}function c(E,y){let M=s[E.id];M===void 0&&(g(E),M=h(E),s[E.id]=M,E.addEventListener("dispose",m));const O=y.program;n.updateUBOMapping(E,O);const I=e.render.frame;r[E.id]!==I&&(d(E),r[E.id]=I)}function h(E){const y=u();E.__bindingPointIndex=y;const M=i.createBuffer(),O=E.__size,I=E.usage;return i.bindBuffer(i.UNIFORM_BUFFER,M),i.bufferData(i.UNIFORM_BUFFER,O,I),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,y,M),M}function u(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const y=s[E.id],M=E.uniforms,O=E.__cache;i.bindBuffer(i.UNIFORM_BUFFER,y);for(let I=0,P=M.length;I<P;I++){const U=Array.isArray(M[I])?M[I]:[M[I]];for(let K=0,x=U.length;K<x;K++){const b=U[K];if(p(b,I,K,O)===!0){const G=b.__offset,k=Array.isArray(b.value)?b.value:[b.value];let z=0;for(let ne=0;ne<k.length;ne++){const q=k[ne],ue=_(q);typeof q=="number"||typeof q=="boolean"?(b.__data[0]=q,i.bufferSubData(i.UNIFORM_BUFFER,G+z,b.__data)):q.isMatrix3?(b.__data[0]=q.elements[0],b.__data[1]=q.elements[1],b.__data[2]=q.elements[2],b.__data[3]=0,b.__data[4]=q.elements[3],b.__data[5]=q.elements[4],b.__data[6]=q.elements[5],b.__data[7]=0,b.__data[8]=q.elements[6],b.__data[9]=q.elements[7],b.__data[10]=q.elements[8],b.__data[11]=0):(q.toArray(b.__data,z),z+=ue.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,G,b.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function p(E,y,M,O){const I=E.value,P=y+"_"+M;if(O[P]===void 0)return typeof I=="number"||typeof I=="boolean"?O[P]=I:O[P]=I.clone(),!0;{const U=O[P];if(typeof I=="number"||typeof I=="boolean"){if(U!==I)return O[P]=I,!0}else if(U.equals(I)===!1)return U.copy(I),!0}return!1}function g(E){const y=E.uniforms;let M=0;const O=16;for(let P=0,U=y.length;P<U;P++){const K=Array.isArray(y[P])?y[P]:[y[P]];for(let x=0,b=K.length;x<b;x++){const G=K[x],k=Array.isArray(G.value)?G.value:[G.value];for(let z=0,ne=k.length;z<ne;z++){const q=k[z],ue=_(q),Y=M%O,we=Y%ue.boundary,Te=Y+we;M+=we,Te!==0&&O-Te<ue.storage&&(M+=O-Te),G.__data=new Float32Array(ue.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=M,M+=ue.storage}}}const I=M%O;return I>0&&(M+=O-I),E.__size=M,E.__cache={},this}function _(E){const y={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(y.boundary=4,y.storage=4):E.isVector2?(y.boundary=8,y.storage=8):E.isVector3||E.isColor?(y.boundary=16,y.storage=12):E.isVector4?(y.boundary=16,y.storage=16):E.isMatrix3?(y.boundary=48,y.storage=48):E.isMatrix4?(y.boundary=64,y.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),y}function m(E){const y=E.target;y.removeEventListener("dispose",m);const M=o.indexOf(y.__bindingPointIndex);o.splice(M,1),i.deleteBuffer(s[y.id]),delete s[y.id],delete r[y.id]}function f(){for(const E in s)i.deleteBuffer(s[E]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class mx{constructor(e={}){const{canvas:t=nm(),context:n=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:u=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const p=new Uint32Array(4),g=new Int32Array(4);let _=null,m=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Wt,this.toneMapping=xs,this.toneMappingExposure=1;const y=this;let M=!1,O=0,I=0,P=null,U=-1,K=null;const x=new Dt,b=new Dt;let G=null;const k=new Xe(0);let z=0,ne=t.width,q=t.height,ue=1,Y=null,we=null;const Te=new Dt(0,0,ne,q),Be=new Dt(0,0,ne,q);let nt=!1;const at=new Ph;let ce=!1,ve=!1;const Ue=new _t,Ce=new _t,$e=new H,Ye=new Dt,ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let At=!1;function mt(){return P===null?ue:1}let V=n;function Zt(v,w){return t.getContext(v,w)}try{const v={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:u};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xh}`),t.addEventListener("webglcontextlost",xe,!1),t.addEventListener("webglcontextrestored",Le,!1),t.addEventListener("webglcontextcreationerror",Oe,!1),V===null){const w="webgl2";if(V=Zt(w,v),V===null)throw Zt(w)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(v){throw console.error("THREE.WebGLRenderer: "+v.message),v}let ut,dt,Je,vt,et,D,S,Z,re,he,ie,Pe,be,ye,ft,Me,ze,Ze,it,De,gt,tt,Mt,$;function Fe(){ut=new y_(V),ut.init(),tt=new rx(V,ut),dt=new p_(V,ut,e,tt),Je=new nx(V),dt.reverseDepthBuffer&&Je.buffers.depth.setReversed(!0),vt=new b_(V),et=new Hv,D=new sx(V,ut,Je,et,dt,tt,vt),S=new g_(y),Z=new x_(y),re=new Pm(V),Mt=new d_(V,re),he=new M_(V,re,vt,Mt),ie=new w_(V,he,re,vt),it=new E_(V,dt,D),Me=new m_(et),Pe=new zv(y,S,Z,ut,dt,Mt,Me),be=new fx(y,et),ye=new Gv,ft=new jv(ut),Ze=new u_(y,S,Z,Je,ie,d,l),ze=new ex(y,ie,dt),$=new px(V,vt,dt,Je),De=new f_(V,ut,vt),gt=new S_(V,ut,vt),vt.programs=Pe.programs,y.capabilities=dt,y.extensions=ut,y.properties=et,y.renderLists=ye,y.shadowMap=ze,y.state=Je,y.info=vt}Fe();const ae=new ux(y,V);this.xr=ae,this.getContext=function(){return V},this.getContextAttributes=function(){return V.getContextAttributes()},this.forceContextLoss=function(){const v=ut.get("WEBGL_lose_context");v&&v.loseContext()},this.forceContextRestore=function(){const v=ut.get("WEBGL_lose_context");v&&v.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(v){v!==void 0&&(ue=v,this.setSize(ne,q,!1))},this.getSize=function(v){return v.set(ne,q)},this.setSize=function(v,w,T=!0){if(ae.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}ne=v,q=w,t.width=Math.floor(v*ue),t.height=Math.floor(w*ue),T===!0&&(t.style.width=v+"px",t.style.height=w+"px"),this.setViewport(0,0,v,w)},this.getDrawingBufferSize=function(v){return v.set(ne*ue,q*ue).floor()},this.setDrawingBufferSize=function(v,w,T){ne=v,q=w,ue=T,t.width=Math.floor(v*T),t.height=Math.floor(w*T),this.setViewport(0,0,v,w)},this.getCurrentViewport=function(v){return v.copy(x)},this.getViewport=function(v){return v.copy(Te)},this.setViewport=function(v,w,T,N){v.isVector4?Te.set(v.x,v.y,v.z,v.w):Te.set(v,w,T,N),Je.viewport(x.copy(Te).multiplyScalar(ue).round())},this.getScissor=function(v){return v.copy(Be)},this.setScissor=function(v,w,T,N){v.isVector4?Be.set(v.x,v.y,v.z,v.w):Be.set(v,w,T,N),Je.scissor(b.copy(Be).multiplyScalar(ue).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(v){Je.setScissorTest(nt=v)},this.setOpaqueSort=function(v){Y=v},this.setTransparentSort=function(v){we=v},this.getClearColor=function(v){return v.copy(Ze.getClearColor())},this.setClearColor=function(){Ze.setClearColor.apply(Ze,arguments)},this.getClearAlpha=function(){return Ze.getClearAlpha()},this.setClearAlpha=function(){Ze.setClearAlpha.apply(Ze,arguments)},this.clear=function(v=!0,w=!0,T=!0){let N=0;if(v){let A=!1;if(P!==null){const W=P.texture.format;A=W===Ah||W===Th||W===wh}if(A){const W=P.texture.type,J=W===Si||W===ks||W===mo||W===Cr||W===Sh||W===bh,ee=Ze.getClearColor(),te=Ze.getClearAlpha(),le=ee.r,C=ee.g,B=ee.b;J?(p[0]=le,p[1]=C,p[2]=B,p[3]=te,V.clearBufferuiv(V.COLOR,0,p)):(g[0]=le,g[1]=C,g[2]=B,g[3]=te,V.clearBufferiv(V.COLOR,0,g))}else N|=V.COLOR_BUFFER_BIT}w&&(N|=V.DEPTH_BUFFER_BIT,V.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),T&&(N|=V.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),V.clear(N)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",xe,!1),t.removeEventListener("webglcontextrestored",Le,!1),t.removeEventListener("webglcontextcreationerror",Oe,!1),ye.dispose(),ft.dispose(),et.dispose(),S.dispose(),Z.dispose(),ie.dispose(),Mt.dispose(),$.dispose(),Pe.dispose(),ae.dispose(),ae.removeEventListener("sessionstart",Wn),ae.removeEventListener("sessionend",Pn),Ln.stop()};function xe(v){v.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),M=!0}function Le(){console.log("THREE.WebGLRenderer: Context Restored."),M=!1;const v=vt.autoReset,w=ze.enabled,T=ze.autoUpdate,N=ze.needsUpdate,A=ze.type;Fe(),vt.autoReset=v,ze.enabled=w,ze.autoUpdate=T,ze.needsUpdate=N,ze.type=A}function Oe(v){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",v.statusMessage)}function st(v){const w=v.target;w.removeEventListener("dispose",st),Ot(w)}function Ot(v){qt(v),et.remove(v)}function qt(v){const w=et.get(v).programs;w!==void 0&&(w.forEach(function(T){Pe.releaseProgram(T)}),v.isShaderMaterial&&Pe.releaseShaderCache(v))}this.renderBufferDirect=function(v,w,T,N,A,W){w===null&&(w=ct);const J=A.isMesh&&A.matrixWorld.determinant()<0,ee=R(v,w,T,N,A);Je.setMaterial(N,J);let te=T.index,le=1;if(N.wireframe===!0){if(te=he.getWireframeAttribute(T),te===void 0)return;le=2}const C=T.drawRange,B=T.attributes.position;let se=C.start*le,fe=(C.start+C.count)*le;W!==null&&(se=Math.max(se,W.start*le),fe=Math.min(fe,(W.start+W.count)*le)),te!==null?(se=Math.max(se,0),fe=Math.min(fe,te.count)):B!=null&&(se=Math.max(se,0),fe=Math.min(fe,B.count));const pe=fe-se;if(pe<0||pe===1/0)return;Mt.setup(A,N,ee,T,te);let Re,me=De;if(te!==null&&(Re=re.get(te),me=gt,me.setIndex(Re)),A.isMesh)N.wireframe===!0?(Je.setLineWidth(N.wireframeLinewidth*mt()),me.setMode(V.LINES)):me.setMode(V.TRIANGLES);else if(A.isLine){let de=N.linewidth;de===void 0&&(de=1),Je.setLineWidth(de*mt()),A.isLineSegments?me.setMode(V.LINES):A.isLineLoop?me.setMode(V.LINE_LOOP):me.setMode(V.LINE_STRIP)}else A.isPoints?me.setMode(V.POINTS):A.isSprite&&me.setMode(V.TRIANGLES);if(A.isBatchedMesh)if(A._multiDrawInstances!==null)me.renderMultiDrawInstances(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount,A._multiDrawInstances);else if(ut.get("WEBGL_multi_draw"))me.renderMultiDraw(A._multiDrawStarts,A._multiDrawCounts,A._multiDrawCount);else{const de=A._multiDrawStarts,ge=A._multiDrawCounts,_e=A._multiDrawCount,Ee=te?re.get(te).bytesPerElement:1,Ge=et.get(N).currentProgram.getUniforms();for(let Ie=0;Ie<_e;Ie++)Ge.setValue(V,"_gl_DrawID",Ie),me.render(de[Ie]/Ee,ge[Ie])}else if(A.isInstancedMesh)me.renderInstances(se,pe,A.count);else if(T.isInstancedBufferGeometry){const de=T._maxInstanceCount!==void 0?T._maxInstanceCount:1/0,ge=Math.min(T.instanceCount,de);me.renderInstances(se,pe,ge)}else me.render(se,pe)};function xt(v,w,T){v.transparent===!0&&v.side===wn&&v.forceSinglePass===!1?(v.side=Tn,v.needsUpdate=!0,yn(v,w,T),v.side=Ji,v.needsUpdate=!0,yn(v,w,T),v.side=wn):yn(v,w,T)}this.compile=function(v,w,T=null){T===null&&(T=v),m=ft.get(T),m.init(w),E.push(m),T.traverseVisible(function(A){A.isLight&&A.layers.test(w.layers)&&(m.pushLight(A),A.castShadow&&m.pushShadow(A))}),v!==T&&v.traverseVisible(function(A){A.isLight&&A.layers.test(w.layers)&&(m.pushLight(A),A.castShadow&&m.pushShadow(A))}),m.setupLights();const N=new Set;return v.traverse(function(A){if(!(A.isMesh||A.isPoints||A.isLine||A.isSprite))return;const W=A.material;if(W)if(Array.isArray(W))for(let J=0;J<W.length;J++){const ee=W[J];xt(ee,T,A),N.add(ee)}else xt(W,T,A),N.add(W)}),E.pop(),m=null,N},this.compileAsync=function(v,w,T=null){const N=this.compile(v,w,T);return new Promise(A=>{function W(){if(N.forEach(function(J){et.get(J).currentProgram.isReady()&&N.delete(J)}),N.size===0){A(v);return}setTimeout(W,10)}ut.get("KHR_parallel_shader_compile")!==null?W():setTimeout(W,10)})};let Ct=null;function Jt(v){Ct&&Ct(v)}function Wn(){Ln.stop()}function Pn(){Ln.start()}const Ln=new mf;Ln.setAnimationLoop(Jt),typeof self<"u"&&Ln.setContext(self),this.setAnimationLoop=function(v){Ct=v,ae.setAnimationLoop(v),v===null?Ln.stop():Ln.start()},ae.addEventListener("sessionstart",Wn),ae.addEventListener("sessionend",Pn),this.render=function(v,w){if(w!==void 0&&w.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(M===!0)return;if(v.matrixWorldAutoUpdate===!0&&v.updateMatrixWorld(),w.parent===null&&w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),ae.enabled===!0&&ae.isPresenting===!0&&(ae.cameraAutoUpdate===!0&&ae.updateCamera(w),w=ae.getCamera()),v.isScene===!0&&v.onBeforeRender(y,v,w,P),m=ft.get(v,E.length),m.init(w),E.push(m),Ce.multiplyMatrices(w.projectionMatrix,w.matrixWorldInverse),at.setFromProjectionMatrix(Ce),ve=this.localClippingEnabled,ce=Me.init(this.clippingPlanes,ve),_=ye.get(v,f.length),_.init(),f.push(_),ae.enabled===!0&&ae.isPresenting===!0){const W=y.xr.getDepthSensingMesh();W!==null&&hi(W,w,-1/0,y.sortObjects)}hi(v,w,0,y.sortObjects),_.finish(),y.sortObjects===!0&&_.sort(Y,we),At=ae.enabled===!1||ae.isPresenting===!1||ae.hasDepthSensing()===!1,At&&Ze.addToRenderList(_,v),this.info.render.frame++,ce===!0&&Me.beginShadows();const T=m.state.shadowsArray;ze.render(T,v,w),ce===!0&&Me.endShadows(),this.info.autoReset===!0&&this.info.reset();const N=_.opaque,A=_.transmissive;if(m.setupLights(),w.isArrayCamera){const W=w.cameras;if(A.length>0)for(let J=0,ee=W.length;J<ee;J++){const te=W[J];Zn(N,A,v,te)}At&&Ze.render(v);for(let J=0,ee=W.length;J<ee;J++){const te=W[J];Yt(_,v,te,te.viewport)}}else A.length>0&&Zn(N,A,v,w),At&&Ze.render(v),Yt(_,v,w);P!==null&&(D.updateMultisampleRenderTarget(P),D.updateRenderTargetMipmap(P)),v.isScene===!0&&v.onAfterRender(y,v,w),Mt.resetDefaultState(),U=-1,K=null,E.pop(),E.length>0?(m=E[E.length-1],ce===!0&&Me.setGlobalState(y.clippingPlanes,m.state.camera)):m=null,f.pop(),f.length>0?_=f[f.length-1]:_=null};function hi(v,w,T,N){if(v.visible===!1)return;if(v.layers.test(w.layers)){if(v.isGroup)T=v.renderOrder;else if(v.isLOD)v.autoUpdate===!0&&v.update(w);else if(v.isLight)m.pushLight(v),v.castShadow&&m.pushShadow(v);else if(v.isSprite){if(!v.frustumCulled||at.intersectsSprite(v)){N&&Ye.setFromMatrixPosition(v.matrixWorld).applyMatrix4(Ce);const J=ie.update(v),ee=v.material;ee.visible&&_.push(v,J,ee,T,Ye.z,null)}}else if((v.isMesh||v.isLine||v.isPoints)&&(!v.frustumCulled||at.intersectsObject(v))){const J=ie.update(v),ee=v.material;if(N&&(v.boundingSphere!==void 0?(v.boundingSphere===null&&v.computeBoundingSphere(),Ye.copy(v.boundingSphere.center)):(J.boundingSphere===null&&J.computeBoundingSphere(),Ye.copy(J.boundingSphere.center)),Ye.applyMatrix4(v.matrixWorld).applyMatrix4(Ce)),Array.isArray(ee)){const te=J.groups;for(let le=0,C=te.length;le<C;le++){const B=te[le],se=ee[B.materialIndex];se&&se.visible&&_.push(v,J,se,T,Ye.z,B)}}else ee.visible&&_.push(v,J,ee,T,Ye.z,null)}}const W=v.children;for(let J=0,ee=W.length;J<ee;J++)hi(W[J],w,T,N)}function Yt(v,w,T,N){const A=v.opaque,W=v.transmissive,J=v.transparent;m.setupLightsView(T),ce===!0&&Me.setGlobalState(y.clippingPlanes,T),N&&Je.viewport(x.copy(N)),A.length>0&&Bt(A,w,T),W.length>0&&Bt(W,w,T),J.length>0&&Bt(J,w,T),Je.buffers.depth.setTest(!0),Je.buffers.depth.setMask(!0),Je.buffers.color.setMask(!0),Je.setPolygonOffset(!1)}function Zn(v,w,T,N){if((T.isScene===!0?T.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[N.id]===void 0&&(m.state.transmissionRenderTarget[N.id]=new li(1,1,{generateMipmaps:!0,type:ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float")?Gn:Si,minFilter:Ii,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Lt.workingColorSpace}));const W=m.state.transmissionRenderTarget[N.id],J=N.viewport||x;W.setSize(J.z,J.w);const ee=y.getRenderTarget();y.setRenderTarget(W),y.getClearColor(k),z=y.getClearAlpha(),z<1&&y.setClearColor(16777215,.5),y.clear(),At&&Ze.render(T);const te=y.toneMapping;y.toneMapping=xs;const le=N.viewport;if(N.viewport!==void 0&&(N.viewport=void 0),m.setupLightsView(N),ce===!0&&Me.setGlobalState(y.clippingPlanes,N),Bt(v,T,N),D.updateMultisampleRenderTarget(W),D.updateRenderTargetMipmap(W),ut.has("WEBGL_multisampled_render_to_texture")===!1){let C=!1;for(let B=0,se=w.length;B<se;B++){const fe=w[B],pe=fe.object,Re=fe.geometry,me=fe.material,de=fe.group;if(me.side===wn&&pe.layers.test(N.layers)){const ge=me.side;me.side=Tn,me.needsUpdate=!0,ln(pe,T,N,Re,me,de),me.side=ge,me.needsUpdate=!0,C=!0}}C===!0&&(D.updateMultisampleRenderTarget(W),D.updateRenderTargetMipmap(W))}y.setRenderTarget(ee),y.setClearColor(k,z),le!==void 0&&(N.viewport=le),y.toneMapping=te}function Bt(v,w,T){const N=w.isScene===!0?w.overrideMaterial:null;for(let A=0,W=v.length;A<W;A++){const J=v[A],ee=J.object,te=J.geometry,le=N===null?J.material:N,C=J.group;ee.layers.test(T.layers)&&ln(ee,w,T,te,le,C)}}function ln(v,w,T,N,A,W){v.onBeforeRender(y,w,T,N,A,W),v.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,v.matrixWorld),v.normalMatrix.getNormalMatrix(v.modelViewMatrix),A.onBeforeRender(y,w,T,N,v,W),A.transparent===!0&&A.side===wn&&A.forceSinglePass===!1?(A.side=Tn,A.needsUpdate=!0,y.renderBufferDirect(T,w,N,A,v,W),A.side=Ji,A.needsUpdate=!0,y.renderBufferDirect(T,w,N,A,v,W),A.side=wn):y.renderBufferDirect(T,w,N,A,v,W),v.onAfterRender(y,w,T,N,A,W)}function yn(v,w,T){w.isScene!==!0&&(w=ct);const N=et.get(v),A=m.state.lights,W=m.state.shadowsArray,J=A.state.version,ee=Pe.getParameters(v,A.state,W,w,T),te=Pe.getProgramCacheKey(ee);let le=N.programs;N.environment=v.isMeshStandardMaterial?w.environment:null,N.fog=w.fog,N.envMap=(v.isMeshStandardMaterial?Z:S).get(v.envMap||N.environment),N.envMapRotation=N.environment!==null&&v.envMap===null?w.environmentRotation:v.envMapRotation,le===void 0&&(v.addEventListener("dispose",st),le=new Map,N.programs=le);let C=le.get(te);if(C!==void 0){if(N.currentProgram===C&&N.lightsStateVersion===J)return F(v,ee),C}else ee.uniforms=Pe.getUniforms(v),v.onBeforeCompile(ee,y),C=Pe.acquireProgram(ee,te),le.set(te,C),N.uniforms=ee.uniforms;const B=N.uniforms;return(!v.isShaderMaterial&&!v.isRawShaderMaterial||v.clipping===!0)&&(B.clippingPlanes=Me.uniform),F(v,ee),N.needsLights=j(v),N.lightsStateVersion=J,N.needsLights&&(B.ambientLightColor.value=A.state.ambient,B.lightProbe.value=A.state.probe,B.directionalLights.value=A.state.directional,B.directionalLightShadows.value=A.state.directionalShadow,B.spotLights.value=A.state.spot,B.spotLightShadows.value=A.state.spotShadow,B.rectAreaLights.value=A.state.rectArea,B.ltc_1.value=A.state.rectAreaLTC1,B.ltc_2.value=A.state.rectAreaLTC2,B.pointLights.value=A.state.point,B.pointLightShadows.value=A.state.pointShadow,B.hemisphereLights.value=A.state.hemi,B.directionalShadowMap.value=A.state.directionalShadowMap,B.directionalShadowMatrix.value=A.state.directionalShadowMatrix,B.spotShadowMap.value=A.state.spotShadowMap,B.spotLightMatrix.value=A.state.spotLightMatrix,B.spotLightMap.value=A.state.spotLightMap,B.pointShadowMap.value=A.state.pointShadowMap,B.pointShadowMatrix.value=A.state.pointShadowMatrix),N.currentProgram=C,N.uniformsList=null,C}function en(v){if(v.uniformsList===null){const w=v.currentProgram.getUniforms();v.uniformsList=Pa.seqWithValue(w.seq,v.uniforms)}return v.uniformsList}function F(v,w){const T=et.get(v);T.outputColorSpace=w.outputColorSpace,T.batching=w.batching,T.batchingColor=w.batchingColor,T.instancing=w.instancing,T.instancingColor=w.instancingColor,T.instancingMorph=w.instancingMorph,T.skinning=w.skinning,T.morphTargets=w.morphTargets,T.morphNormals=w.morphNormals,T.morphColors=w.morphColors,T.morphTargetsCount=w.morphTargetsCount,T.numClippingPlanes=w.numClippingPlanes,T.numIntersection=w.numClipIntersection,T.vertexAlphas=w.vertexAlphas,T.vertexTangents=w.vertexTangents,T.toneMapping=w.toneMapping}function R(v,w,T,N,A){w.isScene!==!0&&(w=ct),D.resetTextureUnits();const W=w.fog,J=N.isMeshStandardMaterial?w.environment:null,ee=P===null?y.outputColorSpace:P.isXRRenderTarget===!0?P.texture.colorSpace:mn,te=(N.isMeshStandardMaterial?Z:S).get(N.envMap||J),le=N.vertexColors===!0&&!!T.attributes.color&&T.attributes.color.itemSize===4,C=!!T.attributes.tangent&&(!!N.normalMap||N.anisotropy>0),B=!!T.morphAttributes.position,se=!!T.morphAttributes.normal,fe=!!T.morphAttributes.color;let pe=xs;N.toneMapped&&(P===null||P.isXRRenderTarget===!0)&&(pe=y.toneMapping);const Re=T.morphAttributes.position||T.morphAttributes.normal||T.morphAttributes.color,me=Re!==void 0?Re.length:0,de=et.get(N),ge=m.state.lights;if(ce===!0&&(ve===!0||v!==K)){const kt=v===K&&N.id===U;Me.setState(N,v,kt)}let _e=!1;N.version===de.__version?(de.needsLights&&de.lightsStateVersion!==ge.state.version||de.outputColorSpace!==ee||A.isBatchedMesh&&de.batching===!1||!A.isBatchedMesh&&de.batching===!0||A.isBatchedMesh&&de.batchingColor===!0&&A.colorTexture===null||A.isBatchedMesh&&de.batchingColor===!1&&A.colorTexture!==null||A.isInstancedMesh&&de.instancing===!1||!A.isInstancedMesh&&de.instancing===!0||A.isSkinnedMesh&&de.skinning===!1||!A.isSkinnedMesh&&de.skinning===!0||A.isInstancedMesh&&de.instancingColor===!0&&A.instanceColor===null||A.isInstancedMesh&&de.instancingColor===!1&&A.instanceColor!==null||A.isInstancedMesh&&de.instancingMorph===!0&&A.morphTexture===null||A.isInstancedMesh&&de.instancingMorph===!1&&A.morphTexture!==null||de.envMap!==te||N.fog===!0&&de.fog!==W||de.numClippingPlanes!==void 0&&(de.numClippingPlanes!==Me.numPlanes||de.numIntersection!==Me.numIntersection)||de.vertexAlphas!==le||de.vertexTangents!==C||de.morphTargets!==B||de.morphNormals!==se||de.morphColors!==fe||de.toneMapping!==pe||de.morphTargetsCount!==me)&&(_e=!0):(_e=!0,de.__version=N.version);let Ee=de.currentProgram;_e===!0&&(Ee=yn(N,w,A));let Ge=!1,Ie=!1,St=!1;const rt=Ee.getUniforms(),Ut=de.uniforms;if(Je.useProgram(Ee.program)&&(Ge=!0,Ie=!0,St=!0),N.id!==U&&(U=N.id,Ie=!0),Ge||K!==v){dt.reverseDepthBuffer?(Ue.copy(v.projectionMatrix),sm(Ue),rm(Ue),rt.setValue(V,"projectionMatrix",Ue)):rt.setValue(V,"projectionMatrix",v.projectionMatrix),rt.setValue(V,"viewMatrix",v.matrixWorldInverse);const kt=rt.map.cameraPosition;kt!==void 0&&kt.setValue(V,$e.setFromMatrixPosition(v.matrixWorld)),dt.logarithmicDepthBuffer&&rt.setValue(V,"logDepthBufFC",2/(Math.log(v.far+1)/Math.LN2)),(N.isMeshPhongMaterial||N.isMeshToonMaterial||N.isMeshLambertMaterial||N.isMeshBasicMaterial||N.isMeshStandardMaterial||N.isShaderMaterial)&&rt.setValue(V,"isOrthographic",v.isOrthographicCamera===!0),K!==v&&(K=v,Ie=!0,St=!0)}if(A.isSkinnedMesh){rt.setOptional(V,A,"bindMatrix"),rt.setOptional(V,A,"bindMatrixInverse");const kt=A.skeleton;kt&&(kt.boneTexture===null&&kt.computeBoneTexture(),rt.setValue(V,"boneTexture",kt.boneTexture,D))}A.isBatchedMesh&&(rt.setOptional(V,A,"batchingTexture"),rt.setValue(V,"batchingTexture",A._matricesTexture,D),rt.setOptional(V,A,"batchingIdTexture"),rt.setValue(V,"batchingIdTexture",A._indirectTexture,D),rt.setOptional(V,A,"batchingColorTexture"),A._colorsTexture!==null&&rt.setValue(V,"batchingColorTexture",A._colorsTexture,D));const on=T.morphAttributes;if((on.position!==void 0||on.normal!==void 0||on.color!==void 0)&&it.update(A,T,Ee),(Ie||de.receiveShadow!==A.receiveShadow)&&(de.receiveShadow=A.receiveShadow,rt.setValue(V,"receiveShadow",A.receiveShadow)),N.isMeshGouraudMaterial&&N.envMap!==null&&(Ut.envMap.value=te,Ut.flipEnvMap.value=te.isCubeTexture&&te.isRenderTargetTexture===!1?-1:1),N.isMeshStandardMaterial&&N.envMap===null&&w.environment!==null&&(Ut.envMapIntensity.value=w.environmentIntensity),Ie&&(rt.setValue(V,"toneMappingExposure",y.toneMappingExposure),de.needsLights&&X(Ut,St),W&&N.fog===!0&&be.refreshFogUniforms(Ut,W),be.refreshMaterialUniforms(Ut,N,ue,q,m.state.transmissionRenderTarget[v.id]),Pa.upload(V,en(de),Ut,D)),N.isShaderMaterial&&N.uniformsNeedUpdate===!0&&(Pa.upload(V,en(de),Ut,D),N.uniformsNeedUpdate=!1),N.isSpriteMaterial&&rt.setValue(V,"center",A.center),rt.setValue(V,"modelViewMatrix",A.modelViewMatrix),rt.setValue(V,"normalMatrix",A.normalMatrix),rt.setValue(V,"modelMatrix",A.matrixWorld),N.isShaderMaterial||N.isRawShaderMaterial){const kt=N.uniformsGroups;for(let cn=0,gn=kt.length;cn<gn;cn++){const Ft=kt[cn];$.update(Ft,Ee),$.bind(Ft,Ee)}}return Ee}function X(v,w){v.ambientLightColor.needsUpdate=w,v.lightProbe.needsUpdate=w,v.directionalLights.needsUpdate=w,v.directionalLightShadows.needsUpdate=w,v.pointLights.needsUpdate=w,v.pointLightShadows.needsUpdate=w,v.spotLights.needsUpdate=w,v.spotLightShadows.needsUpdate=w,v.rectAreaLights.needsUpdate=w,v.hemisphereLights.needsUpdate=w}function j(v){return v.isMeshLambertMaterial||v.isMeshToonMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isShadowMaterial||v.isShaderMaterial&&v.lights===!0}this.getActiveCubeFace=function(){return O},this.getActiveMipmapLevel=function(){return I},this.getRenderTarget=function(){return P},this.setRenderTargetTextures=function(v,w,T){et.get(v.texture).__webglTexture=w,et.get(v.depthTexture).__webglTexture=T;const N=et.get(v);N.__hasExternalTextures=!0,N.__autoAllocateDepthBuffer=T===void 0,N.__autoAllocateDepthBuffer||ut.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),N.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(v,w){const T=et.get(v);T.__webglFramebuffer=w,T.__useDefaultFramebuffer=w===void 0},this.setRenderTarget=function(v,w=0,T=0){P=v,O=w,I=T;let N=!0,A=null,W=!1,J=!1;if(v){const te=et.get(v);if(te.__useDefaultFramebuffer!==void 0)Je.bindFramebuffer(V.FRAMEBUFFER,null),N=!1;else if(te.__webglFramebuffer===void 0)D.setupRenderTarget(v);else if(te.__hasExternalTextures)D.rebindTextures(v,et.get(v.texture).__webglTexture,et.get(v.depthTexture).__webglTexture);else if(v.depthBuffer){const B=v.depthTexture;if(te.__boundDepthTexture!==B){if(B!==null&&et.has(B)&&(v.width!==B.image.width||v.height!==B.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");D.setupDepthRenderbuffer(v)}}const le=v.texture;(le.isData3DTexture||le.isDataArrayTexture||le.isCompressedArrayTexture)&&(J=!0);const C=et.get(v).__webglFramebuffer;v.isWebGLCubeRenderTarget?(Array.isArray(C[w])?A=C[w][T]:A=C[w],W=!0):v.samples>0&&D.useMultisampledRTT(v)===!1?A=et.get(v).__webglMultisampledFramebuffer:Array.isArray(C)?A=C[T]:A=C,x.copy(v.viewport),b.copy(v.scissor),G=v.scissorTest}else x.copy(Te).multiplyScalar(ue).floor(),b.copy(Be).multiplyScalar(ue).floor(),G=nt;if(Je.bindFramebuffer(V.FRAMEBUFFER,A)&&N&&Je.drawBuffers(v,A),Je.viewport(x),Je.scissor(b),Je.setScissorTest(G),W){const te=et.get(v.texture);V.framebufferTexture2D(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,V.TEXTURE_CUBE_MAP_POSITIVE_X+w,te.__webglTexture,T)}else if(J){const te=et.get(v.texture),le=w||0;V.framebufferTextureLayer(V.FRAMEBUFFER,V.COLOR_ATTACHMENT0,te.__webglTexture,T||0,le)}U=-1},this.readRenderTargetPixels=function(v,w,T,N,A,W,J){if(!(v&&v.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let ee=et.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&J!==void 0&&(ee=ee[J]),ee){Je.bindFramebuffer(V.FRAMEBUFFER,ee);try{const te=v.texture,le=te.format,C=te.type;if(!dt.textureFormatReadable(le)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!dt.textureTypeReadable(C)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}w>=0&&w<=v.width-N&&T>=0&&T<=v.height-A&&V.readPixels(w,T,N,A,tt.convert(le),tt.convert(C),W)}finally{const te=P!==null?et.get(P).__webglFramebuffer:null;Je.bindFramebuffer(V.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(v,w,T,N,A,W,J){if(!(v&&v.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let ee=et.get(v).__webglFramebuffer;if(v.isWebGLCubeRenderTarget&&J!==void 0&&(ee=ee[J]),ee){const te=v.texture,le=te.format,C=te.type;if(!dt.textureFormatReadable(le))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!dt.textureTypeReadable(C))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(w>=0&&w<=v.width-N&&T>=0&&T<=v.height-A){Je.bindFramebuffer(V.FRAMEBUFFER,ee);const B=V.createBuffer();V.bindBuffer(V.PIXEL_PACK_BUFFER,B),V.bufferData(V.PIXEL_PACK_BUFFER,W.byteLength,V.STREAM_READ),V.readPixels(w,T,N,A,tt.convert(le),tt.convert(C),0);const se=P!==null?et.get(P).__webglFramebuffer:null;Je.bindFramebuffer(V.FRAMEBUFFER,se);const fe=V.fenceSync(V.SYNC_GPU_COMMANDS_COMPLETE,0);return V.flush(),await im(V,fe,4),V.bindBuffer(V.PIXEL_PACK_BUFFER,B),V.getBufferSubData(V.PIXEL_PACK_BUFFER,0,W),V.deleteBuffer(B),V.deleteSync(fe),W}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(v,w=null,T=0){v.isTexture!==!0&&(Ca("WebGLRenderer: copyFramebufferToTexture function signature has changed."),w=arguments[0]||null,v=arguments[1]);const N=Math.pow(2,-T),A=Math.floor(v.image.width*N),W=Math.floor(v.image.height*N),J=w!==null?w.x:0,ee=w!==null?w.y:0;D.setTexture2D(v,0),V.copyTexSubImage2D(V.TEXTURE_2D,T,0,0,J,ee,A,W),Je.unbindTexture()},this.copyTextureToTexture=function(v,w,T=null,N=null,A=0){v.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture function signature has changed."),N=arguments[0]||null,v=arguments[1],w=arguments[2],A=arguments[3]||0,T=null);let W,J,ee,te,le,C;T!==null?(W=T.max.x-T.min.x,J=T.max.y-T.min.y,ee=T.min.x,te=T.min.y):(W=v.image.width,J=v.image.height,ee=0,te=0),N!==null?(le=N.x,C=N.y):(le=0,C=0);const B=tt.convert(w.format),se=tt.convert(w.type);D.setTexture2D(w,0),V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,w.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,w.unpackAlignment);const fe=V.getParameter(V.UNPACK_ROW_LENGTH),pe=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Re=V.getParameter(V.UNPACK_SKIP_PIXELS),me=V.getParameter(V.UNPACK_SKIP_ROWS),de=V.getParameter(V.UNPACK_SKIP_IMAGES),ge=v.isCompressedTexture?v.mipmaps[A]:v.image;V.pixelStorei(V.UNPACK_ROW_LENGTH,ge.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,ge.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,ee),V.pixelStorei(V.UNPACK_SKIP_ROWS,te),v.isDataTexture?V.texSubImage2D(V.TEXTURE_2D,A,le,C,W,J,B,se,ge.data):v.isCompressedTexture?V.compressedTexSubImage2D(V.TEXTURE_2D,A,le,C,ge.width,ge.height,B,ge.data):V.texSubImage2D(V.TEXTURE_2D,A,le,C,W,J,B,se,ge),V.pixelStorei(V.UNPACK_ROW_LENGTH,fe),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,pe),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Re),V.pixelStorei(V.UNPACK_SKIP_ROWS,me),V.pixelStorei(V.UNPACK_SKIP_IMAGES,de),A===0&&w.generateMipmaps&&V.generateMipmap(V.TEXTURE_2D),Je.unbindTexture()},this.copyTextureToTexture3D=function(v,w,T=null,N=null,A=0){v.isTexture!==!0&&(Ca("WebGLRenderer: copyTextureToTexture3D function signature has changed."),T=arguments[0]||null,N=arguments[1]||null,v=arguments[2],w=arguments[3],A=arguments[4]||0);let W,J,ee,te,le,C,B,se,fe;const pe=v.isCompressedTexture?v.mipmaps[A]:v.image;T!==null?(W=T.max.x-T.min.x,J=T.max.y-T.min.y,ee=T.max.z-T.min.z,te=T.min.x,le=T.min.y,C=T.min.z):(W=pe.width,J=pe.height,ee=pe.depth,te=0,le=0,C=0),N!==null?(B=N.x,se=N.y,fe=N.z):(B=0,se=0,fe=0);const Re=tt.convert(w.format),me=tt.convert(w.type);let de;if(w.isData3DTexture)D.setTexture3D(w,0),de=V.TEXTURE_3D;else if(w.isDataArrayTexture||w.isCompressedArrayTexture)D.setTexture2DArray(w,0),de=V.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}V.pixelStorei(V.UNPACK_FLIP_Y_WEBGL,w.flipY),V.pixelStorei(V.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),V.pixelStorei(V.UNPACK_ALIGNMENT,w.unpackAlignment);const ge=V.getParameter(V.UNPACK_ROW_LENGTH),_e=V.getParameter(V.UNPACK_IMAGE_HEIGHT),Ee=V.getParameter(V.UNPACK_SKIP_PIXELS),Ge=V.getParameter(V.UNPACK_SKIP_ROWS),Ie=V.getParameter(V.UNPACK_SKIP_IMAGES);V.pixelStorei(V.UNPACK_ROW_LENGTH,pe.width),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,pe.height),V.pixelStorei(V.UNPACK_SKIP_PIXELS,te),V.pixelStorei(V.UNPACK_SKIP_ROWS,le),V.pixelStorei(V.UNPACK_SKIP_IMAGES,C),v.isDataTexture||v.isData3DTexture?V.texSubImage3D(de,A,B,se,fe,W,J,ee,Re,me,pe.data):w.isCompressedArrayTexture?V.compressedTexSubImage3D(de,A,B,se,fe,W,J,ee,Re,pe.data):V.texSubImage3D(de,A,B,se,fe,W,J,ee,Re,me,pe),V.pixelStorei(V.UNPACK_ROW_LENGTH,ge),V.pixelStorei(V.UNPACK_IMAGE_HEIGHT,_e),V.pixelStorei(V.UNPACK_SKIP_PIXELS,Ee),V.pixelStorei(V.UNPACK_SKIP_ROWS,Ge),V.pixelStorei(V.UNPACK_SKIP_IMAGES,Ie),A===0&&w.generateMipmaps&&V.generateMipmap(de),Je.unbindTexture()},this.initRenderTarget=function(v){et.get(v).__webglFramebuffer===void 0&&D.setupRenderTarget(v)},this.initTexture=function(v){v.isCubeTexture?D.setTextureCube(v,0):v.isData3DTexture?D.setTexture3D(v,0):v.isDataArrayTexture||v.isCompressedArrayTexture?D.setTexture2DArray(v,0):D.setTexture2D(v,0),Je.unbindTexture()},this.resetState=function(){O=0,I=0,P=null,Je.reset(),Mt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ki}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Rh?"display-p3":"srgb",t.unpackColorSpace=Lt.workingColorSpace===Ya?"display-p3":"srgb"}}class Za{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Xe(e),this.near=t,this.far=n}clone(){return new Za(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class Er extends Kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Di,this.environmentIntensity=1,this.environmentRotation=new Di,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class Ih{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=nh,this.updateRanges=[],this.version=0,this.uuid=yi()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let s=0,r=this.stride;s<r;s++)this.array[e+s]=t.array[n+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=yi()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Bn=new H;class zs{constructor(e,t,n,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyMatrix4(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.applyNormalMatrix(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Bn.fromBufferAttribute(this,t),Bn.transformDirection(e),this.setXYZ(t,Bn.x,Bn.y,Bn.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=xi(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Ht(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Ht(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=xi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=xi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=xi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=xi(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this}setXYZW(e,t,n,s,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Ht(t,this.array),n=Ht(n,this.array),s=Ht(s,this.array),r=Ht(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=s,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return new An(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new zs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const s=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class Mf extends Mi{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let hr;const Jr=new H,ur=new H,dr=new H,fr=new Ke,Qr=new Ke,Sf=new _t,ca=new H,eo=new H,ha=new H,Wu=new Ke,Yl=new Ke,Xu=new Ke;class gx extends Kt{constructor(e=new Mf){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new Qt;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new Ih(t,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new zs(n,3,0,!1)),hr.setAttribute("uv",new zs(n,2,3,!1))}this.geometry=hr,this.material=e,this.center=new Ke(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),Sf.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);const n=this.material.rotation;let s,r;n!==0&&(r=Math.cos(n),s=Math.sin(n));const o=this.center;ua(ca.set(-.5,-.5,0),dr,o,ur,s,r),ua(eo.set(.5,-.5,0),dr,o,ur,s,r),ua(ha.set(.5,.5,0),dr,o,ur,s,r),Wu.set(0,0),Yl.set(1,0),Xu.set(1,1);let a=e.ray.intersectTriangle(ca,eo,ha,!1,Jr);if(a===null&&(ua(eo.set(-.5,.5,0),dr,o,ur,s,r),Yl.set(0,1),a=e.ray.intersectTriangle(ca,ha,eo,!1,Jr),a===null))return;const l=e.ray.origin.distanceTo(Jr);l<e.near||l>e.far||t.push({distance:l,point:Jr.clone(),uv:oi.getInterpolation(Jr,ca,eo,ha,Wu,Yl,Xu,new Ke),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ua(i,e,t,n,s,r){fr.subVectors(i,t).addScalar(.5).multiply(n),s!==void 0?(Qr.x=r*fr.x-s*fr.y,Qr.y=s*fr.x+r*fr.y):Qr.copy(fr),i.copy(e),i.x+=Qr.x,i.y+=Qr.y,i.applyMatrix4(Sf)}const qu=new H,Yu=new Dt,$u=new Dt,_x=new H,ju=new _t,da=new H,$l=new Ni,Ku=new _t,jl=new $a;class vx extends Ae{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Zh,this.bindMatrix=new _t,this.bindMatrixInverse=new _t,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Vn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingBox.expandByPoint(da)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new Ni),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,da),this.boundingSphere.expandByPoint(da)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,s=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),$l.copy(this.boundingSphere),$l.applyMatrix4(s),e.ray.intersectsSphere($l)!==!1&&(Ku.copy(s).invert(),jl.copy(e.ray).applyMatrix4(Ku),!(this.boundingBox!==null&&jl.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,jl)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new Dt,t=this.geometry.attributes.skinWeight;for(let n=0,s=t.count;n<s;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Zh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===Ap?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,s=this.geometry;Yu.fromBufferAttribute(s.attributes.skinIndex,e),$u.fromBufferAttribute(s.attributes.skinWeight,e),qu.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=$u.getComponent(r);if(o!==0){const a=Yu.getComponent(r);ju.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(_x.copy(qu).applyMatrix4(ju),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class bf extends Kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ja extends pn{constructor(e=null,t=1,n=1,s,r,o,a,l,c=Cn,h=Cn,u,d){super(null,o,a,l,c,h,s,r,u,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Zu=new _t,xx=new _t;class Dh{constructor(e=[],t=[]){this.uuid=yi(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,s=this.bones.length;n<s;n++)this.boneInverses.push(new _t)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new _t;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,s=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:xx;Zu.multiplyMatrices(a,t[r]),Zu.toArray(n,r*16)}s!==null&&(s.needsUpdate=!0)}clone(){return new Dh(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ja(t,e,e,ai,$n);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const s=this.bones[t];if(s.name===e)return s}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,s=e.bones.length;n<s;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new bf),this.bones.push(o),this.boneInverses.push(new _t().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let s=0,r=t.length;s<r;s++){const o=t[s];e.bones.push(o.uuid);const a=n[s];e.boneInverses.push(a.toArray())}return e}}class rh extends An{constructor(e,t,n,s=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const pr=new _t,Ju=new _t,fa=[],Qu=new Vn,yx=new _t,to=new Ae,no=new Ni;class vr extends Ae{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new rh(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<n;s++)this.setMatrixAt(s,yx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Vn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),Qu.copy(e.boundingBox).applyMatrix4(pr),this.boundingBox.union(Qu)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new Ni),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,pr),no.copy(e.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(no)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,s=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=s[o+a]}raycast(e,t){const n=this.matrixWorld,s=this.count;if(to.geometry=this.geometry,to.material=this.material,to.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),no.copy(this.boundingSphere),no.applyMatrix4(n),e.ray.intersectsSphere(no)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),Ju.multiplyMatrices(n,pr),to.matrixWorld=Ju,to.raycast(e,fa);for(let o=0,a=fa.length;o<a;o++){const l=fa[o];l.instanceId=r,l.object=this,t.push(l)}fa.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new rh(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,s=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ja(new Float32Array(s*this.count),s,this.count,Eh,$n));const r=this.morphTexture.source.data.data;let o=0;for(let c=0;c<n.length;c++)o+=n[c];const a=this.geometry.morphTargetsRelative?1:1-o,l=s*e;r[l]=a,r.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class ka extends Mi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const za=new H,Ha=new H,ed=new _t,io=new $a,pa=new Ni,Kl=new H,td=new H;class Qa extends Kt{constructor(e=new Qt,t=new ka){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let s=1,r=t.count;s<r;s++)za.fromBufferAttribute(t,s-1),Ha.fromBufferAttribute(t,s),n[s]=n[s-1],n[s]+=za.distanceTo(Ha);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),pa.copy(n.boundingSphere),pa.applyMatrix4(s),pa.radius+=r,e.ray.intersectsSphere(pa)===!1)return;ed.copy(s).invert(),io.copy(e.ray).applyMatrix4(ed);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,h=n.index,d=n.attributes.position;if(h!==null){const p=Math.max(0,o.start),g=Math.min(h.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=h.getX(_),E=h.getX(_+1),y=ma(this,e,io,l,f,E);y&&t.push(y)}if(this.isLineLoop){const _=h.getX(g-1),m=h.getX(p),f=ma(this,e,io,l,_,m);f&&t.push(f)}}else{const p=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let _=p,m=g-1;_<m;_+=c){const f=ma(this,e,io,l,_,_+1);f&&t.push(f)}if(this.isLineLoop){const _=ma(this,e,io,l,g-1,p);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function ma(i,e,t,n,s,r){const o=i.geometry.attributes.position;if(za.fromBufferAttribute(o,s),Ha.fromBufferAttribute(o,r),t.distanceSqToSegment(za,Ha,Kl,td)>n)return;Kl.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(Kl);if(!(l<e.near||l>e.far))return{distance:l,point:td.clone().applyMatrix4(i.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:i}}const nd=new H,id=new H;class Ef extends Qa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let s=0,r=t.count;s<r;s+=2)nd.fromBufferAttribute(t,s),id.fromBufferAttribute(t,s+1),n[s]=s===0?0:n[s-1],n[s+1]=n[s]+nd.distanceTo(id);e.setAttribute("lineDistance",new Nt(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class Mx extends Qa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class el extends Mi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const sd=new _t,oh=new $a,ga=new Ni,_a=new H;class Va extends Kt{constructor(e=new Qt,t=new el){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,s=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),ga.copy(n.boundingSphere),ga.applyMatrix4(s),ga.radius+=r,e.ray.intersectsSphere(ga)===!1)return;sd.copy(s).invert(),oh.copy(e.ray).applyMatrix4(sd);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=n.index,u=n.attributes.position;if(c!==null){const d=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=d,_=p;g<_;g++){const m=c.getX(g);_a.fromBufferAttribute(u,m),rd(_a,m,l,s,e,t,this)}}else{const d=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=d,_=p;g<_;g++)_a.fromBufferAttribute(u,g),rd(_a,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const s=t[n[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function rd(i,e,t,n,s,r,o){const a=oh.distanceSqToPoint(i);if(a<t){const l=new H;oh.closestPointToPoint(i,l),l.applyMatrix4(n);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class od extends pn{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Cn,this.minFilter=Cn,this.generateMipmaps=!1,this.needsUpdate=!0}}class La extends pn{constructor(e,t,n,s,r,o,a,l,c){super(e,t,n,s,r,o,a,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class yo extends Qt{constructor(e=1,t=32,n=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:s},t=Math.max(3,t);const r=[],o=[],a=[],l=[],c=new H,h=new Ke;o.push(0,0,0),a.push(0,0,1),l.push(.5,.5);for(let u=0,d=3;u<=t;u++,d+=3){const p=n+u/t*s;c.x=e*Math.cos(p),c.y=e*Math.sin(p),o.push(c.x,c.y,c.z),a.push(0,0,1),h.x=(o[d]/e+1)/2,h.y=(o[d+1]/e+1)/2,l.push(h.x,h.y)}for(let u=1;u<=t;u++)r.push(u,u+1,0);this.setIndex(r),this.setAttribute("position",new Nt(o,3)),this.setAttribute("normal",new Nt(a,3)),this.setAttribute("uv",new Nt(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new yo(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class vi extends Qt{constructor(e=1,t=1,n=1,s=32,r=1,o=!1,a=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:s,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:l};const c=this;s=Math.floor(s),r=Math.floor(r);const h=[],u=[],d=[],p=[];let g=0;const _=[],m=n/2;let f=0;E(),o===!1&&(e>0&&y(!0),t>0&&y(!1)),this.setIndex(h),this.setAttribute("position",new Nt(u,3)),this.setAttribute("normal",new Nt(d,3)),this.setAttribute("uv",new Nt(p,2));function E(){const M=new H,O=new H;let I=0;const P=(t-e)/n;for(let U=0;U<=r;U++){const K=[],x=U/r,b=x*(t-e)+e;for(let G=0;G<=s;G++){const k=G/s,z=k*l+a,ne=Math.sin(z),q=Math.cos(z);O.x=b*ne,O.y=-x*n+m,O.z=b*q,u.push(O.x,O.y,O.z),M.set(ne,P,q).normalize(),d.push(M.x,M.y,M.z),p.push(k,1-x),K.push(g++)}_.push(K)}for(let U=0;U<s;U++)for(let K=0;K<r;K++){const x=_[K][U],b=_[K+1][U],G=_[K+1][U+1],k=_[K][U+1];e>0&&(h.push(x,b,k),I+=3),t>0&&(h.push(b,G,k),I+=3)}c.addGroup(f,I,0),f+=I}function y(M){const O=g,I=new Ke,P=new H;let U=0;const K=M===!0?e:t,x=M===!0?1:-1;for(let G=1;G<=s;G++)u.push(0,m*x,0),d.push(0,x,0),p.push(.5,.5),g++;const b=g;for(let G=0;G<=s;G++){const z=G/s*l+a,ne=Math.cos(z),q=Math.sin(z);P.x=K*q,P.y=m*x,P.z=K*ne,u.push(P.x,P.y,P.z),d.push(0,x,0),I.x=ne*.5+.5,I.y=q*.5*x+.5,p.push(I.x,I.y),g++}for(let G=0;G<s;G++){const k=O+G,z=b+G;M===!0?h.push(z,z+1,k):h.push(z+1,z,k),U+=3}c.addGroup(f,U,M===!0?1:2),f+=U}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vi(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class tl extends Qt{constructor(e=.5,t=1,n=32,s=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:s,thetaStart:r,thetaLength:o},n=Math.max(3,n),s=Math.max(1,s);const a=[],l=[],c=[],h=[];let u=e;const d=(t-e)/s,p=new H,g=new Ke;for(let _=0;_<=s;_++){for(let m=0;m<=n;m++){const f=r+m/n*o;p.x=u*Math.cos(f),p.y=u*Math.sin(f),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}u+=d}for(let _=0;_<s;_++){const m=_*(n+1);for(let f=0;f<n;f++){const E=f+m,y=E,M=E+n+1,O=E+n+2,I=E+1;a.push(y,M,I),a.push(M,O,I)}}this.setIndex(a),this.setAttribute("position",new Nt(l,3)),this.setAttribute("normal",new Nt(c,3)),this.setAttribute("uv",new Nt(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new tl(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class _s extends Qt{constructor(e=1,t=32,n=16,s=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:s,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(o+a,Math.PI);let c=0;const h=[],u=new H,d=new H,p=[],g=[],_=[],m=[];for(let f=0;f<=n;f++){const E=[],y=f/n;let M=0;f===0&&o===0?M=.5/t:f===n&&l===Math.PI&&(M=-.5/t);for(let O=0;O<=t;O++){const I=O/t;u.x=-e*Math.cos(s+I*r)*Math.sin(o+y*a),u.y=e*Math.cos(o+y*a),u.z=e*Math.sin(s+I*r)*Math.sin(o+y*a),g.push(u.x,u.y,u.z),d.copy(u).normalize(),_.push(d.x,d.y,d.z),m.push(I+M,1-y),E.push(c++)}h.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const y=h[f][E+1],M=h[f][E],O=h[f+1][E],I=h[f+1][E+1];(f!==0||o>0)&&p.push(y,M,I),(f!==n-1||l<Math.PI)&&p.push(M,O,I)}this.setIndex(p),this.setAttribute("position",new Nt(g,3)),this.setAttribute("normal",new Nt(_,3)),this.setAttribute("uv",new Nt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Nh extends Qt{constructor(e=1,t=.4,n=12,s=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:s,arc:r},n=Math.floor(n),s=Math.floor(s);const o=[],a=[],l=[],c=[],h=new H,u=new H,d=new H;for(let p=0;p<=n;p++)for(let g=0;g<=s;g++){const _=g/s*r,m=p/n*Math.PI*2;u.x=(e+t*Math.cos(m))*Math.cos(_),u.y=(e+t*Math.cos(m))*Math.sin(_),u.z=t*Math.sin(m),a.push(u.x,u.y,u.z),h.x=e*Math.cos(_),h.y=e*Math.sin(_),d.subVectors(u,h).normalize(),l.push(d.x,d.y,d.z),c.push(g/s),c.push(p/n)}for(let p=1;p<=n;p++)for(let g=1;g<=s;g++){const _=(s+1)*p+g-1,m=(s+1)*(p-1)+g-1,f=(s+1)*(p-1)+g,E=(s+1)*p+g;o.push(_,m,E),o.push(m,f,E)}this.setIndex(o),this.setAttribute("position",new Nt(a,3)),this.setAttribute("normal",new Nt(l,3)),this.setAttribute("uv",new Nt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Ia extends rn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class yt extends Mi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qd,this.normalScale=new Ke(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Di,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class ci extends yt{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Ke(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return Rn(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Xe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Xe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Xe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function va(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Sx(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function bx(i){function e(s,r){return i[s]-i[r]}const t=i.length,n=new Array(t);for(let s=0;s!==t;++s)n[s]=s;return n.sort(e),n}function ad(i,e,t){const n=i.length,s=new i.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let l=0;l!==e;++l)s[o++]=i[a+l]}return s}function wf(i,e,t,n){let s=1,r=i[0];for(;r!==void 0&&r[n]===void 0;)r=i[s++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=i[s++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=i[s++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=i[s++];while(r!==void 0)}class wo{constructor(e,t,n,s){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,s=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<s)){for(let a=n+2;;){if(s===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=s,s=t[++n],e<s)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let l=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(s=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(s=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,s)}return this.interpolate_(n,r,e,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s;for(let o=0;o!==s;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ex extends wo{constructor(e,t,n,s){super(e,t,n,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Jh,endingEnd:Jh}}intervalChanged_(e,t,n){const s=this.parameterPositions;let r=e-2,o=e+1,a=s[r],l=s[o];if(a===void 0)switch(this.getSettings_().endingStart){case Qh:r=e,a=2*t-n;break;case eu:r=s.length-2,a=t+s[r]-s[r+1];break;default:r=e,a=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Qh:o=e,l=2*n-t;break;case eu:o=1,l=n+s[1]-s[0];break;default:o=e-1,l=t}const c=(n-t)*.5,h=this.valueSize;this._weightPrev=c/(t-a),this._weightNext=c/(l-n),this._offsetPrev=r*h,this._offsetNext=o*h}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=this._offsetPrev,u=this._offsetNext,d=this._weightPrev,p=this._weightNext,g=(n-t)/(s-t),_=g*g,m=_*g,f=-d*m+2*d*_-d*g,E=(1+d)*m+(-1.5-2*d)*_+(-.5+d)*g+1,y=(-1-p)*m+(1.5+p)*_+.5*g,M=p*m-p*_;for(let O=0;O!==a;++O)r[O]=f*o[h+O]+E*o[c+O]+y*o[l+O]+M*o[u+O];return r}}class wx extends wo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=e*a,c=l-a,h=(n-t)/(s-t),u=1-h;for(let d=0;d!==a;++d)r[d]=o[c+d]*u+o[l+d]*h;return r}}class Tx extends wo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e){return this.copySampleValue_(e-1)}}class Ui{constructor(e,t,n,s){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=va(t,this.TimeBufferType),this.values=va(n,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:va(e.times,Array),values:va(e.values,Array)};const s=e.getInterpolation();s!==e.DefaultInterpolation&&(n.interpolation=s)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Tx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new wx(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ex(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case go:t=this.InterpolantFactoryMethodDiscrete;break;case _o:t=this.InterpolantFactoryMethodLinear;break;case vl:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return go;case this.InterpolantFactoryMethodLinear:return _o;case this.InterpolantFactoryMethodSmooth:return vl}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,s=t.length;n!==s;++n)t[n]*=e}return this}trim(e,t){const n=this.times,s=n.length;let r=0,o=s-1;for(;r!==s&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==s){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,s=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const l=n[a];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,l),e=!1;break}if(o!==null&&o>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,l,o),e=!1;break}o=l}if(s!==void 0&&Sx(s))for(let a=0,l=s.length;a!==l;++a){const c=s[a];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),s=this.getInterpolation()===vl,r=e.length-1;let o=1;for(let a=1;a<r;++a){let l=!1;const c=e[a],h=e[a+1];if(c!==h&&(a!==1||c!==e[0]))if(s)l=!0;else{const u=a*n,d=u-n,p=u+n;for(let g=0;g!==n;++g){const _=t[u+g];if(_!==t[d+g]||_!==t[p+g]){l=!0;break}}}if(l){if(a!==o){e[o]=e[a];const u=a*n,d=o*n;for(let p=0;p!==n;++p)t[d+p]=t[u+p]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,l=o*n,c=0;c!==n;++c)t[l+c]=t[a+c];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,s=new n(this.name,e,t);return s.createInterpolant=this.createInterpolant,s}}Ui.prototype.TimeBufferType=Float32Array;Ui.prototype.ValueBufferType=Float32Array;Ui.prototype.DefaultInterpolation=_o;class zr extends Ui{constructor(e,t,n){super(e,t,n)}}zr.prototype.ValueTypeName="bool";zr.prototype.ValueBufferType=Array;zr.prototype.DefaultInterpolation=go;zr.prototype.InterpolantFactoryMethodLinear=void 0;zr.prototype.InterpolantFactoryMethodSmooth=void 0;class Tf extends Ui{}Tf.prototype.ValueTypeName="color";class Dr extends Ui{}Dr.prototype.ValueTypeName="number";class Ax extends wo{constructor(e,t,n,s){super(e,t,n,s)}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=(n-t)/(s-t);let c=e*a;for(let h=c+a;c!==h;c+=4)Qi.slerpFlat(r,0,o,c-a,o,c,l);return r}}class Nr extends Ui{InterpolantFactoryMethodLinear(e){return new Ax(this.times,this.values,this.getValueSize(),e)}}Nr.prototype.ValueTypeName="quaternion";Nr.prototype.InterpolantFactoryMethodSmooth=void 0;class Hr extends Ui{constructor(e,t,n){super(e,t,n)}}Hr.prototype.ValueTypeName="string";Hr.prototype.ValueBufferType=Array;Hr.prototype.DefaultInterpolation=go;Hr.prototype.InterpolantFactoryMethodLinear=void 0;Hr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ur extends Ui{}Ur.prototype.ValueTypeName="vector";class Rx{constructor(e="",t=-1,n=[],s=Rp){this.name=e,this.tracks=n,this.duration=t,this.blendMode=s,this.uuid=yi(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,s=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(Px(n[o]).scale(s));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,s={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(Ui.toJSON(n[r]));return s}static CreateFromMorphTargetSequence(e,t,n,s){const r=t.length,o=[];for(let a=0;a<r;a++){let l=[],c=[];l.push((a+r-1)%r,a,(a+1)%r),c.push(0,1,0);const h=bx(l);l=ad(l,1,h),c=ad(c,1,h),!s&&l[0]===0&&(l.push(r),c.push(c[0])),o.push(new Dr(".morphTargetInfluences["+t[a].name+"]",l,c).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const s=e;n=s.geometry&&s.geometry.animations||s.animations}for(let s=0;s<n.length;s++)if(n[s].name===t)return n[s];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const s={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,l=e.length;a<l;a++){const c=e[a],h=c.name.match(r);if(h&&h.length>1){const u=h[1];let d=s[u];d||(s[u]=d=[]),d.push(c)}}const o=[];for(const a in s)o.push(this.CreateFromMorphTargetSequence(a,s[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(u,d,p,g,_){if(p.length!==0){const m=[],f=[];wf(p,m,f,g),m.length!==0&&_.push(new u(d,m,f))}},s=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let u=0;u<c.length;u++){const d=c[u].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const p={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let _=0;_<d[g].morphTargets.length;_++)p[d[g].morphTargets[_]]=-1;for(const _ in p){const m=[],f=[];for(let E=0;E!==d[g].morphTargets.length;++E){const y=d[g];m.push(y.time),f.push(y.morphTarget===_?1:0)}s.push(new Dr(".morphTargetInfluence["+_+"]",m,f))}l=p.length*o}else{const p=".bones["+t[u].name+"]";n(Ur,p+".position",d,"pos",s),n(Nr,p+".quaternion",d,"rot",s),n(Ur,p+".scale",d,"scl",s)}}return s.length===0?null:new this(r,l,s,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,s=e.length;n!==s;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Cx(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return Dr;case"vector":case"vector2":case"vector3":case"vector4":return Ur;case"color":return Tf;case"quaternion":return Nr;case"bool":case"boolean":return zr;case"string":return Hr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function Px(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Cx(i.type);if(i.times===void 0){const t=[],n=[];wf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const vs={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class Lx{constructor(e,t,n){const s=this;let r=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(h){a++,r===!1&&s.onStart!==void 0&&s.onStart(h,o,a),r=!0},this.itemEnd=function(h){o++,s.onProgress!==void 0&&s.onProgress(h,o,a),o===a&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,u){return c.push(h,u),this},this.removeHandler=function(h){const u=c.indexOf(h);return u!==-1&&c.splice(u,2),this},this.getHandler=function(h){for(let u=0,d=c.length;u<d;u+=2){const p=c[u],g=c[u+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null}}}const Ix=new Lx;class ys{constructor(e){this.manager=e!==void 0?e:Ix,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(s,r){n.load(e,s,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}ys.DEFAULT_MATERIAL_NAME="__DEFAULT";const Xi={};class Dx extends Error{constructor(e,t){super(e),this.response=t}}class Mo extends ys{constructor(e){super(e)}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=vs.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Xi[e]!==void 0){Xi[e].push({onLoad:t,onProgress:n,onError:s});return}Xi[e]=[],Xi[e].push({onLoad:t,onProgress:n,onError:s});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const h=Xi[e],u=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),p=d?parseInt(d):0,g=p!==0;let _=0;const m=new ReadableStream({start(f){E();function E(){u.read().then(({done:y,value:M})=>{if(y)f.close();else{_+=M.byteLength;const O=new ProgressEvent("progress",{lengthComputable:g,loaded:_,total:p});for(let I=0,P=h.length;I<P;I++){const U=h[I];U.onProgress&&U.onProgress(O)}f.enqueue(M),E()}},y=>{f.error(y)})}}});return new Response(m)}else throw new Dx(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(h=>new DOMParser().parseFromString(h,a));case"json":return c.json();default:if(a===void 0)return c.text();{const u=/charset="?([^;"\s]*)"?/i.exec(a),d=u&&u[1]?u[1].toLowerCase():void 0,p=new TextDecoder(d);return c.arrayBuffer().then(g=>p.decode(g))}}}).then(c=>{vs.add(e,c);const h=Xi[e];delete Xi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onLoad&&p.onLoad(c)}}).catch(c=>{const h=Xi[e];if(h===void 0)throw this.manager.itemError(e),c;delete Xi[e];for(let u=0,d=h.length;u<d;u++){const p=h[u];p.onError&&p.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Nx extends ys{constructor(e){super(e)}load(e,t,n,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=vs.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=vo("img");function l(){h(),vs.add(e,this),t&&t(this),r.manager.itemEnd(e)}function c(u){h(),s&&s(u),r.manager.itemError(e),r.manager.itemEnd(e)}function h(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Ux extends ys{constructor(e){super(e)}load(e,t,n,s){const r=this,o=new Ja,a=new Mo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(l){let c;try{c=r.parse(l)}catch(h){if(s!==void 0)s(h);else{console.error(h);return}}c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Li,o.wrapT=c.wrapT!==void 0?c.wrapT:Li,o.magFilter=c.magFilter!==void 0?c.magFilter:fn,o.minFilter=c.minFilter!==void 0?c.minFilter:fn,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(o.colorSpace=c.colorSpace),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Ii),c.mipmapCount===1&&(o.minFilter=fn),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,t&&t(o,c)},n,s),o}}class Af extends ys{constructor(e){super(e)}load(e,t,n,s){const r=new pn,o=new Nx(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,s),r}}class To extends Kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class co extends To{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Xe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Zl=new _t,ld=new H,cd=new H;class Uh{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ke(512,512),this.map=null,this.mapPass=null,this.matrix=new _t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ph,this._frameExtents=new Ke(1,1),this._viewportCount=1,this._viewports=[new Dt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;ld.setFromMatrixPosition(e.matrixWorld),t.position.copy(ld),cd.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(cd),t.updateMatrixWorld(),Zl.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Zl),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Zl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fx extends Uh{constructor(){super(new _n(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=Lr*2*e.angle*this.focus,s=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||s!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=s,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class So extends To{constructor(e,t,n=0,s=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.distance=n,this.angle=s,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Fx}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const hd=new _t,so=new H,Jl=new H;class Ox extends Uh{constructor(){super(new _n(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ke(4,2),this._viewportCount=6,this._viewports=[new Dt(2,1,1,1),new Dt(0,1,1,1),new Dt(3,1,1,1),new Dt(1,1,1,1),new Dt(3,0,1,1),new Dt(1,0,1,1)],this._cubeDirections=[new H(1,0,0),new H(-1,0,0),new H(0,0,1),new H(0,0,-1),new H(0,1,0),new H(0,-1,0)],this._cubeUps=[new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,1,0),new H(0,0,1),new H(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,s=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),so.setFromMatrixPosition(e.matrixWorld),n.position.copy(so),Jl.copy(n.position),Jl.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(Jl),n.updateMatrixWorld(),s.makeTranslation(-so.x,-so.y,-so.z),hd.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(hd)}}class Fh extends To{constructor(e,t,n=0,s=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=s,this.shadow=new Ox}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Bx extends Uh{constructor(){super(new ja(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Os extends To{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Kt.DEFAULT_UP),this.updateMatrix(),this.target=new Kt,this.shadow=new Bx}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class kx extends To{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class po{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,s=e.length;n<s;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class zx extends ys{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=vs.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(c=>{t&&t(c),r.manager.itemEnd(e)}).catch(c=>{s&&s(c)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const l=fetch(e,a).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(c){return vs.add(e,c),t&&t(c),r.manager.itemEnd(e),c}).catch(function(c){s&&s(c),vs.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});vs.add(e,l),r.manager.itemStart(e)}}class Hx{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=ud(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=ud();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function ud(){return performance.now()}const Oh="\\[\\]\\.:\\/",Vx=new RegExp("["+Oh+"]","g"),Bh="[^"+Oh+"]",Gx="[^"+Oh.replace("\\.","")+"]",Wx=/((?:WC+[\/:])*)/.source.replace("WC",Bh),Xx=/(WCOD+)?/.source.replace("WCOD",Gx),qx=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Bh),Yx=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Bh),$x=new RegExp("^"+Wx+Xx+qx+Yx+"$"),jx=["material","materials","bones","map"];class Kx{constructor(e,t,n){const s=n||Vt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,s)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,s=this._bindings[n];s!==void 0&&s.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=n.length;s!==r;++s)n[s].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Vt{constructor(e,t,n){this.path=t,this.parsedPath=n||Vt.parseTrackName(t),this.node=Vt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Vt.Composite(e,t,n):new Vt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Vx,"")}static parseTrackName(e){const t=$x.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},s=n.nodeName&&n.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){const r=n.nodeName.substring(s+1);jx.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,s),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const l=n(a.children);if(l)return l}return null},s=n(e.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)e[t++]=n[s]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let s=0,r=n.length;s!==r;++s)n[s]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,s=t.propertyName;let r=t.propertyIndex;if(e||(e=Vt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[s];if(o===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Vt.Composite=Kx;Vt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Vt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Vt.prototype.GetterByBindingType=[Vt.prototype._getValue_direct,Vt.prototype._getValue_array,Vt.prototype._getValue_arrayElement,Vt.prototype._getValue_toArray];Vt.prototype.SetterByBindingTypeAndVersioning=[[Vt.prototype._setValue_direct,Vt.prototype._setValue_direct_setNeedsUpdate,Vt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_array,Vt.prototype._setValue_array_setNeedsUpdate,Vt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_arrayElement,Vt.prototype._setValue_arrayElement_setNeedsUpdate,Vt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Vt.prototype._setValue_fromArray,Vt.prototype._setValue_fromArray_setNeedsUpdate,Vt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const dd=new Ke;class Zx{constructor(e=new Ke(1/0,1/0),t=new Ke(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=dd.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,dd).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xh}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xh);function fd(i,e){if(e===Cp)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),i;if(e===th||e===Jd){let t=i.getIndex();if(t===null){const o=[],a=i.getAttribute("position");if(a!==void 0){for(let l=0;l<a.count;l++)o.push(l);i.setIndex(o),t=i.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),i}const n=t.count-2,s=[];if(e===th)for(let o=1;o<=n;o++)s.push(t.getX(0)),s.push(t.getX(o)),s.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(s.push(t.getX(o)),s.push(t.getX(o+1)),s.push(t.getX(o+2))):(s.push(t.getX(o+2)),s.push(t.getX(o+1)),s.push(t.getX(o)));s.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=i.clone();return r.setIndex(s),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),i}class Jx extends ys{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new iy(t)}),this.register(function(t){return new sy(t)}),this.register(function(t){return new fy(t)}),this.register(function(t){return new py(t)}),this.register(function(t){return new my(t)}),this.register(function(t){return new oy(t)}),this.register(function(t){return new ay(t)}),this.register(function(t){return new ly(t)}),this.register(function(t){return new cy(t)}),this.register(function(t){return new ny(t)}),this.register(function(t){return new hy(t)}),this.register(function(t){return new ry(t)}),this.register(function(t){return new dy(t)}),this.register(function(t){return new uy(t)}),this.register(function(t){return new ey(t)}),this.register(function(t){return new gy(t)}),this.register(function(t){return new _y(t)})}load(e,t,n,s){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const c=po.extractUrlBase(e);o=po.resolveURL(c,this.path)}else o=po.extractUrlBase(e);this.manager.itemStart(e);const a=function(c){s?s(c):console.error(c),r.manager.itemError(e),r.manager.itemEnd(e)},l=new Mo(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(this.withCredentials),l.load(e,function(c){try{r.parse(c,o,function(h){t(h),r.manager.itemEnd(e)},a)}catch(h){a(h)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,s){let r;const o={},a={},l=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(l.decode(new Uint8Array(e,0,4))===Rf){try{o[Rt.KHR_BINARY_GLTF]=new vy(e)}catch(u){s&&s(u);return}r=JSON.parse(o[Rt.KHR_BINARY_GLTF].content)}else r=JSON.parse(l.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){s&&s(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const c=new Ly(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});c.fileLoader.setRequestHeader(this.requestHeader);for(let h=0;h<this.pluginCallbacks.length;h++){const u=this.pluginCallbacks[h](c);u.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[u.name]=u,o[u.name]=!0}if(r.extensionsUsed)for(let h=0;h<r.extensionsUsed.length;++h){const u=r.extensionsUsed[h],d=r.extensionsRequired||[];switch(u){case Rt.KHR_MATERIALS_UNLIT:o[u]=new ty;break;case Rt.KHR_DRACO_MESH_COMPRESSION:o[u]=new xy(r,this.dracoLoader);break;case Rt.KHR_TEXTURE_TRANSFORM:o[u]=new yy;break;case Rt.KHR_MESH_QUANTIZATION:o[u]=new My;break;default:d.indexOf(u)>=0&&a[u]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+u+'".')}}c.setExtensions(o),c.setPlugins(a),c.parse(n,s)}parseAsync(e,t){const n=this;return new Promise(function(s,r){n.parse(e,t,s,r)})}}function Qx(){let i={};return{get:function(e){return i[e]},add:function(e,t){i[e]=t},remove:function(e){delete i[e]},removeAll:function(){i={}}}}const Rt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class ey{constructor(e){this.parser=e,this.name=Rt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,s=t.length;n<s;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let s=t.cache.get(n);if(s)return s;const r=t.json,l=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let c;const h=new Xe(16777215);l.color!==void 0&&h.setRGB(l.color[0],l.color[1],l.color[2],mn);const u=l.range!==void 0?l.range:0;switch(l.type){case"directional":c=new Os(h),c.target.position.set(0,0,-1),c.add(c.target);break;case"point":c=new Fh(h),c.distance=u;break;case"spot":c=new So(h),c.distance=u,l.spot=l.spot||{},l.spot.innerConeAngle=l.spot.innerConeAngle!==void 0?l.spot.innerConeAngle:0,l.spot.outerConeAngle=l.spot.outerConeAngle!==void 0?l.spot.outerConeAngle:Math.PI/4,c.angle=l.spot.outerConeAngle,c.penumbra=1-l.spot.innerConeAngle/l.spot.outerConeAngle,c.target.position.set(0,0,-1),c.add(c.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+l.type)}return c.position.set(0,0,0),c.decay=2,$i(c,l),l.intensity!==void 0&&(c.intensity=l.intensity),c.name=t.createUniqueName(l.name||"light_"+e),s=Promise.resolve(c),t.cache.add(n,s),s}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(l){return n._getNodeRef(t.cache,a,l)})}}class ty{constructor(){this.name=Rt.KHR_MATERIALS_UNLIT}getMaterialType(){return sn}extendParams(e,t,n){const s=[];e.color=new Xe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],mn),e.opacity=o[3]}r.baseColorTexture!==void 0&&s.push(n.assignTexture(e,"map",r.baseColorTexture,Wt))}return Promise.all(s)}}class ny{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class iy{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Ke(a,a)}return Promise.all(r)}}class sy{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class ry{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class oy{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Xe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=s.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],mn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Wt)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ay{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class ly{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Xe().setRGB(a[0],a[1],a[2],mn),Promise.all(r)}}class cy{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const s=this.parser.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=s.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class hy{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Xe().setRGB(a[0],a[1],a[2],mn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Wt)),Promise.all(r)}}class uy{constructor(e){this.parser=e,this.name=Rt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class dy{constructor(e){this.parser=e,this.name=Rt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:ci}extendMaterialParams(e,t){const n=this.parser,s=n.json.materials[e];if(!s.extensions||!s.extensions[this.name])return Promise.resolve();const r=[],o=s.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class fy{constructor(e){this.parser=e,this.name=Rt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,s=n.textures[e];if(!s.extensions||!s.extensions[this.name])return null;const r=s.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class py{constructor(e){this.parser=e,this.name=Rt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class my{constructor(e){this.parser=e,this.name=Rt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,s=n.json,r=s.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=s.images[o.source];let l=n.textureLoader;if(a.uri){const c=n.options.manager.getHandler(a.uri);c!==null&&(l=c)}return this.detectSupport().then(function(c){if(c)return n.loadTextureImage(e,o.source,l);if(s.extensionsRequired&&s.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class gy{constructor(e){this.name=Rt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const s=n.extensions[this.name],r=this.parser.getDependency("buffer",s.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const l=s.byteOffset||0,c=s.byteLength||0,h=s.count,u=s.byteStride,d=new Uint8Array(a,l,c);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(h,u,d,s.mode,s.filter).then(function(p){return p.buffer}):o.ready.then(function(){const p=new ArrayBuffer(h*u);return o.decodeGltfBuffer(new Uint8Array(p),h,u,d,s.mode,s.filter),p})})}else return null}}class _y{constructor(e){this.name=Rt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const s=t.meshes[n.mesh];for(const c of s.primitives)if(c.mode!==si.TRIANGLES&&c.mode!==si.TRIANGLE_STRIP&&c.mode!==si.TRIANGLE_FAN&&c.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],l={};for(const c in o)a.push(this.parser.getDependency("accessor",o[c]).then(h=>(l[c]=h,l[c])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(c=>{const h=c.pop(),u=h.isGroup?h.children:[h],d=c[0].count,p=[];for(const g of u){const _=new _t,m=new H,f=new Qi,E=new H(1,1,1),y=new vr(g.geometry,g.material,d);for(let M=0;M<d;M++)l.TRANSLATION&&m.fromBufferAttribute(l.TRANSLATION,M),l.ROTATION&&f.fromBufferAttribute(l.ROTATION,M),l.SCALE&&E.fromBufferAttribute(l.SCALE,M),y.setMatrixAt(M,_.compose(m,f,E));for(const M in l)if(M==="_COLOR_0"){const O=l[M];y.instanceColor=new rh(O.array,O.itemSize,O.normalized)}else M!=="TRANSLATION"&&M!=="ROTATION"&&M!=="SCALE"&&g.geometry.setAttribute(M,l[M]);Kt.prototype.copy.call(y,g),this.parser.assignFinalMaterial(y),p.push(y)}return h.isGroup?(h.clear(),h.add(...p),h):p[0]}))}}const Rf="glTF",ro=12,pd={JSON:1313821514,BIN:5130562};class vy{constructor(e){this.name=Rt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,ro),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Rf)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const s=this.header.length-ro,r=new DataView(e,ro);let o=0;for(;o<s;){const a=r.getUint32(o,!0);o+=4;const l=r.getUint32(o,!0);if(o+=4,l===pd.JSON){const c=new Uint8Array(e,ro+o,a);this.content=n.decode(c)}else if(l===pd.BIN){const c=ro+o;this.body=e.slice(c,c+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class xy{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=Rt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,s=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},l={},c={};for(const h in o){const u=ah[h]||h.toLowerCase();a[u]=o[h]}for(const h in e.attributes){const u=ah[h]||h.toLowerCase();if(o[h]!==void 0){const d=n.accessors[e.attributes[h]],p=wr[d.componentType];c[u]=p.name,l[u]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(h){return new Promise(function(u,d){s.decodeDracoFile(h,function(p){for(const g in p.attributes){const _=p.attributes[g],m=l[g];m!==void 0&&(_.normalized=m)}u(p)},a,c,mn,d)})})}}class yy{constructor(){this.name=Rt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class My{constructor(){this.name=Rt.KHR_MESH_QUANTIZATION}}class Cf extends wo{constructor(e,t,n,s){super(e,t,n,s)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,s=this.valueSize,r=e*s*3+s;for(let o=0;o!==s;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,s){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,l=a*2,c=a*3,h=s-t,u=(n-t)/h,d=u*u,p=d*u,g=e*c,_=g-c,m=-2*p+3*d,f=p-d,E=1-m,y=f-d+u;for(let M=0;M!==a;M++){const O=o[_+M+a],I=o[_+M+l]*h,P=o[g+M+a],U=o[g+M]*h;r[M]=E*O+y*I+m*P+f*U}return r}}const Sy=new Qi;class by extends Cf{interpolate_(e,t,n,s){const r=super.interpolate_(e,t,n,s);return Sy.fromArray(r).normalize().toArray(r),r}}const si={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},wr={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},md={9728:Cn,9729:fn,9984:Vd,9985:ba,9986:ao,9987:Ii},gd={33071:Li,33648:Na,10497:Bs},Ql={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},ah={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},ps={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},Ey={CUBICSPLINE:void 0,LINEAR:_o,STEP:go},ec={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function wy(i){return i.DefaultMaterial===void 0&&(i.DefaultMaterial=new yt({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ji})),i.DefaultMaterial}function Ps(i,e,t){for(const n in t.extensions)i[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function $i(i,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(i.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Ty(i,e,t){let n=!1,s=!1,r=!1;for(let c=0,h=e.length;c<h;c++){const u=e[c];if(u.POSITION!==void 0&&(n=!0),u.NORMAL!==void 0&&(s=!0),u.COLOR_0!==void 0&&(r=!0),n&&s&&r)break}if(!n&&!s&&!r)return Promise.resolve(i);const o=[],a=[],l=[];for(let c=0,h=e.length;c<h;c++){const u=e[c];if(n){const d=u.POSITION!==void 0?t.getDependency("accessor",u.POSITION):i.attributes.position;o.push(d)}if(s){const d=u.NORMAL!==void 0?t.getDependency("accessor",u.NORMAL):i.attributes.normal;a.push(d)}if(r){const d=u.COLOR_0!==void 0?t.getDependency("accessor",u.COLOR_0):i.attributes.color;l.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l)]).then(function(c){const h=c[0],u=c[1],d=c[2];return n&&(i.morphAttributes.position=h),s&&(i.morphAttributes.normal=u),r&&(i.morphAttributes.color=d),i.morphTargetsRelative=!0,i})}function Ay(i,e){if(i.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)i.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(i.morphTargetInfluences.length===t.length){i.morphTargetDictionary={};for(let n=0,s=t.length;n<s;n++)i.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ry(i){let e;const t=i.extensions&&i.extensions[Rt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+tc(t.attributes):e=i.indices+":"+tc(i.attributes)+":"+i.mode,i.targets!==void 0)for(let n=0,s=i.targets.length;n<s;n++)e+=":"+tc(i.targets[n]);return e}function tc(i){let e="";const t=Object.keys(i).sort();for(let n=0,s=t.length;n<s;n++)e+=t[n]+":"+i[t[n]]+";";return e}function lh(i){switch(i){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Cy(i){return i.search(/\.jpe?g($|\?)/i)>0||i.search(/^data\:image\/jpeg/)===0?"image/jpeg":i.search(/\.webp($|\?)/i)>0||i.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const Py=new _t;class Ly{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Qx,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,s=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const l=a.match(/Version\/(\d+)/);s=n&&l?parseInt(l[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&s<17||r&&o<98?this.textureLoader=new Af(this.options.manager):this.textureLoader=new zx(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new Mo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,s=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][s.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:s.asset,parser:n,userData:{}};return Ps(r,a,s),$i(a,s),Promise.all(n._invokeAll(function(l){return l.afterRoot&&l.afterRoot(a)})).then(function(){for(const l of a.scenes)l.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let s=0,r=t.length;s<r;s++){const o=t[s].joints;for(let a=0,l=o.length;a<l;a++)e[o[a]].isBone=!0}for(let s=0,r=e.length;s<r;s++){const o=e[s];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const s=n.clone(),r=(o,a)=>{const l=this.associations.get(o);l!=null&&this.associations.set(a,l);for(const[c,h]of o.children.entries())r(h,a.children[c])};return r(n,s),s.name+="_instance_"+e.uses[t]++,s}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const s=e(t[n]);if(s)return s}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let s=0;s<t.length;s++){const r=e(t[s]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let s=this.cache.get(n);if(!s){switch(e){case"scene":s=this.loadScene(t);break;case"node":s=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":s=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":s=this.loadAccessor(t);break;case"bufferView":s=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":s=this.loadBuffer(t);break;case"material":s=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":s=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":s=this.loadSkin(t);break;case"animation":s=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":s=this.loadCamera(t);break;default:if(s=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!s)throw new Error("Unknown type: "+e);break}this.cache.add(n,s)}return s}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,s=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(s.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[Rt.KHR_BINARY_GLTF].body);const s=this.options;return new Promise(function(r,o){n.load(po.resolveURL(t.uri,s.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const s=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+s)})}loadAccessor(e){const t=this,n=this.json,s=this.json.accessors[e];if(s.bufferView===void 0&&s.sparse===void 0){const o=Ql[s.type],a=wr[s.componentType],l=s.normalized===!0,c=new a(s.count*o);return Promise.resolve(new An(c,o,l))}const r=[];return s.bufferView!==void 0?r.push(this.getDependency("bufferView",s.bufferView)):r.push(null),s.sparse!==void 0&&(r.push(this.getDependency("bufferView",s.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",s.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],l=Ql[s.type],c=wr[s.componentType],h=c.BYTES_PER_ELEMENT,u=h*l,d=s.byteOffset||0,p=s.bufferView!==void 0?n.bufferViews[s.bufferView].byteStride:void 0,g=s.normalized===!0;let _,m;if(p&&p!==u){const f=Math.floor(d/p),E="InterleavedBuffer:"+s.bufferView+":"+s.componentType+":"+f+":"+s.count;let y=t.cache.get(E);y||(_=new c(a,f*p,s.count*p/h),y=new Ih(_,p/h),t.cache.add(E,y)),m=new zs(y,l,d%p/h,g)}else a===null?_=new c(s.count*l):_=new c(a,d,s.count*l),m=new An(_,l,g);if(s.sparse!==void 0){const f=Ql.SCALAR,E=wr[s.sparse.indices.componentType],y=s.sparse.indices.byteOffset||0,M=s.sparse.values.byteOffset||0,O=new E(o[1],y,s.sparse.count*f),I=new c(o[2],M,s.sparse.count*l);a!==null&&(m=new An(m.array.slice(),m.itemSize,m.normalized)),m.normalized=!1;for(let P=0,U=O.length;P<U;P++){const K=O[P];if(m.setX(K,I[P*l]),l>=2&&m.setY(K,I[P*l+1]),l>=3&&m.setZ(K,I[P*l+2]),l>=4&&m.setW(K,I[P*l+3]),l>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}m.normalized=g}return m})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const l=n.manager.getHandler(o.uri);l!==null&&(a=l)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const s=this,r=this.json,o=r.textures[e],a=r.images[t],l=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[l])return this.textureCache[l];const c=this.loadImageSource(t,n).then(function(h){h.flipY=!1,h.name=o.name||a.name||"",h.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(h.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return h.magFilter=md[d.magFilter]||fn,h.minFilter=md[d.minFilter]||Ii,h.wrapS=gd[d.wrapS]||Bs,h.wrapT=gd[d.wrapT]||Bs,s.associations.set(h,{textures:e}),h}).catch(function(){return null});return this.textureCache[l]=c,c}loadImageSource(e,t){const n=this,s=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(u=>u.clone());const o=s.images[e],a=self.URL||self.webkitURL;let l=o.uri||"",c=!1;if(o.bufferView!==void 0)l=n.getDependency("bufferView",o.bufferView).then(function(u){c=!0;const d=new Blob([u],{type:o.mimeType});return l=a.createObjectURL(d),l});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const h=Promise.resolve(l).then(function(u){return new Promise(function(d,p){let g=d;t.isImageBitmapLoader===!0&&(g=function(_){const m=new pn(_);m.needsUpdate=!0,d(m)}),t.load(po.resolveURL(u,r.path),g,void 0,p)})}).then(function(u){return c===!0&&a.revokeObjectURL(l),$i(u,o),u.userData.mimeType=o.mimeType||Cy(o.uri),u}).catch(function(u){throw console.error("THREE.GLTFLoader: Couldn't load texture",l),u});return this.sourceCache[e]=h,h}assignTexture(e,t,n,s){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[Rt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[Rt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const l=r.associations.get(o);o=r.extensions[Rt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,l)}}return s!==void 0&&(o.colorSpace=s),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const s=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new el,Mi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,l.sizeAttenuation=!1,this.cache.add(a,l)),n=l}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let l=this.cache.get(a);l||(l=new ka,Mi.prototype.copy.call(l,n),l.color.copy(n.color),l.map=n.map,this.cache.add(a,l)),n=l}if(s||r||o){let a="ClonedMaterial:"+n.uuid+":";s&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let l=this.cache.get(a);l||(l=n.clone(),r&&(l.vertexColors=!0),o&&(l.flatShading=!0),s&&(l.normalScale&&(l.normalScale.y*=-1),l.clearcoatNormalScale&&(l.clearcoatNormalScale.y*=-1)),this.cache.add(a,l),this.associations.set(l,this.associations.get(n))),n=l}e.material=n}getMaterialType(){return yt}loadMaterial(e){const t=this,n=this.json,s=this.extensions,r=n.materials[e];let o;const a={},l=r.extensions||{},c=[];if(l[Rt.KHR_MATERIALS_UNLIT]){const u=s[Rt.KHR_MATERIALS_UNLIT];o=u.getMaterialType(),c.push(u.extendParams(a,r,t))}else{const u=r.pbrMetallicRoughness||{};if(a.color=new Xe(1,1,1),a.opacity=1,Array.isArray(u.baseColorFactor)){const d=u.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],mn),a.opacity=d[3]}u.baseColorTexture!==void 0&&c.push(t.assignTexture(a,"map",u.baseColorTexture,Wt)),a.metalness=u.metallicFactor!==void 0?u.metallicFactor:1,a.roughness=u.roughnessFactor!==void 0?u.roughnessFactor:1,u.metallicRoughnessTexture!==void 0&&(c.push(t.assignTexture(a,"metalnessMap",u.metallicRoughnessTexture)),c.push(t.assignTexture(a,"roughnessMap",u.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),c.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=wn);const h=r.alphaMode||ec.OPAQUE;if(h===ec.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,h===ec.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==sn&&(c.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Ke(1,1),r.normalTexture.scale!==void 0)){const u=r.normalTexture.scale;a.normalScale.set(u,u)}if(r.occlusionTexture!==void 0&&o!==sn&&(c.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==sn){const u=r.emissiveFactor;a.emissive=new Xe().setRGB(u[0],u[1],u[2],mn)}return r.emissiveTexture!==void 0&&o!==sn&&c.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Wt)),Promise.all(c).then(function(){const u=new o(a);return r.name&&(u.name=r.name),$i(u,r),t.associations.set(u,{materials:e}),r.extensions&&Ps(s,u,r),u})}createUniqueName(e){const t=Vt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,s=this.primitiveCache;function r(a){return n[Rt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(l){return _d(l,a,t)})}const o=[];for(let a=0,l=e.length;a<l;a++){const c=e[a],h=Ry(c),u=s[h];if(u)o.push(u.promise);else{let d;c.extensions&&c.extensions[Rt.KHR_DRACO_MESH_COMPRESSION]?d=r(c):d=_d(new Qt,c,t),s[h]={primitive:c,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,s=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let l=0,c=o.length;l<c;l++){const h=o[l].material===void 0?wy(this.cache):this.getDependency("material",o[l].material);a.push(h)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(l){const c=l.slice(0,l.length-1),h=l[l.length-1],u=[];for(let p=0,g=h.length;p<g;p++){const _=h[p],m=o[p];let f;const E=c[p];if(m.mode===si.TRIANGLES||m.mode===si.TRIANGLE_STRIP||m.mode===si.TRIANGLE_FAN||m.mode===void 0)f=r.isSkinnedMesh===!0?new vx(_,E):new Ae(_,E),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),m.mode===si.TRIANGLE_STRIP?f.geometry=fd(f.geometry,Jd):m.mode===si.TRIANGLE_FAN&&(f.geometry=fd(f.geometry,th));else if(m.mode===si.LINES)f=new Ef(_,E);else if(m.mode===si.LINE_STRIP)f=new Qa(_,E);else if(m.mode===si.LINE_LOOP)f=new Mx(_,E);else if(m.mode===si.POINTS)f=new Va(_,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+m.mode);Object.keys(f.geometry.morphAttributes).length>0&&Ay(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),$i(f,r),m.extensions&&Ps(s,f,m),t.assignFinalMaterial(f),u.push(f)}for(let p=0,g=u.length;p<g;p++)t.associations.set(u[p],{meshes:e,primitives:p});if(u.length===1)return r.extensions&&Ps(s,u[0],r),u[0];const d=new jt;r.extensions&&Ps(s,d,r),t.associations.set(d,{meshes:e});for(let p=0,g=u.length;p<g;p++)d.add(u[p]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],s=n[n.type];if(!s){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new _n(tf.radToDeg(s.yfov),s.aspectRatio||1,s.znear||1,s.zfar||2e6):n.type==="orthographic"&&(t=new ja(-s.xmag,s.xmag,s.ymag,-s.ymag,s.znear,s.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),$i(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let s=0,r=t.joints.length;s<r;s++)n.push(this._loadNodeShallow(t.joints[s]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(s){const r=s.pop(),o=s,a=[],l=[];for(let c=0,h=o.length;c<h;c++){const u=o[c];if(u){a.push(u);const d=new _t;r!==null&&d.fromArray(r.array,c*16),l.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[c])}return new Dh(a,l)})}loadAnimation(e){const t=this.json,n=this,s=t.animations[e],r=s.name?s.name:"animation_"+e,o=[],a=[],l=[],c=[],h=[];for(let u=0,d=s.channels.length;u<d;u++){const p=s.channels[u],g=s.samplers[p.sampler],_=p.target,m=_.node,f=s.parameters!==void 0?s.parameters[g.input]:g.input,E=s.parameters!==void 0?s.parameters[g.output]:g.output;_.node!==void 0&&(o.push(this.getDependency("node",m)),a.push(this.getDependency("accessor",f)),l.push(this.getDependency("accessor",E)),c.push(g),h.push(_))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(l),Promise.all(c),Promise.all(h)]).then(function(u){const d=u[0],p=u[1],g=u[2],_=u[3],m=u[4],f=[];for(let E=0,y=d.length;E<y;E++){const M=d[E],O=p[E],I=g[E],P=_[E],U=m[E];if(M===void 0)continue;M.updateMatrix&&M.updateMatrix();const K=n._createAnimationTracks(M,O,I,P,U);if(K)for(let x=0;x<K.length;x++)f.push(K[x])}return new Rx(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,s=t.nodes[e];return s.mesh===void 0?null:n.getDependency("mesh",s.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,s.mesh,r);return s.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let l=0,c=s.weights.length;l<c;l++)a.morphTargetInfluences[l]=s.weights[l]}),o})}loadNode(e){const t=this.json,n=this,s=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=s.children||[];for(let c=0,h=a.length;c<h;c++)o.push(n.getDependency("node",a[c]));const l=s.skin===void 0?Promise.resolve(null):n.getDependency("skin",s.skin);return Promise.all([r,Promise.all(o),l]).then(function(c){const h=c[0],u=c[1],d=c[2];d!==null&&h.traverse(function(p){p.isSkinnedMesh&&p.bind(d,Py)});for(let p=0,g=u.length;p<g;p++)h.add(u[p]);return h})}_loadNodeShallow(e){const t=this.json,n=this.extensions,s=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?s.createUniqueName(r.name):"",a=[],l=s._invokeOne(function(c){return c.createNodeMesh&&c.createNodeMesh(e)});return l&&a.push(l),r.camera!==void 0&&a.push(s.getDependency("camera",r.camera).then(function(c){return s._getNodeRef(s.cameraCache,r.camera,c)})),s._invokeAll(function(c){return c.createNodeAttachment&&c.createNodeAttachment(e)}).forEach(function(c){a.push(c)}),this.nodeCache[e]=Promise.all(a).then(function(c){let h;if(r.isBone===!0?h=new bf:c.length>1?h=new jt:c.length===1?h=c[0]:h=new Kt,h!==c[0])for(let u=0,d=c.length;u<d;u++)h.add(c[u]);if(r.name&&(h.userData.name=r.name,h.name=o),$i(h,r),r.extensions&&Ps(n,h,r),r.matrix!==void 0){const u=new _t;u.fromArray(r.matrix),h.applyMatrix4(u)}else r.translation!==void 0&&h.position.fromArray(r.translation),r.rotation!==void 0&&h.quaternion.fromArray(r.rotation),r.scale!==void 0&&h.scale.fromArray(r.scale);return s.associations.has(h)||s.associations.set(h,{}),s.associations.get(h).nodes=e,h}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],s=this,r=new jt;n.name&&(r.name=s.createUniqueName(n.name)),$i(r,n),n.extensions&&Ps(t,r,n);const o=n.nodes||[],a=[];for(let l=0,c=o.length;l<c;l++)a.push(s.getDependency("node",o[l]));return Promise.all(a).then(function(l){for(let h=0,u=l.length;h<u;h++)r.add(l[h]);const c=h=>{const u=new Map;for(const[d,p]of s.associations)(d instanceof Mi||d instanceof pn)&&u.set(d,p);return h.traverse(d=>{const p=s.associations.get(d);p!=null&&u.set(d,p)}),u};return s.associations=c(r),r})}_createAnimationTracks(e,t,n,s,r){const o=[],a=e.name?e.name:e.uuid,l=[];ps[r.path]===ps.weights?e.traverse(function(d){d.morphTargetInfluences&&l.push(d.name?d.name:d.uuid)}):l.push(a);let c;switch(ps[r.path]){case ps.weights:c=Dr;break;case ps.rotation:c=Nr;break;case ps.position:case ps.scale:c=Ur;break;default:switch(n.itemSize){case 1:c=Dr;break;case 2:case 3:default:c=Ur;break}break}const h=s.interpolation!==void 0?Ey[s.interpolation]:_o,u=this._getArrayFromAccessor(n);for(let d=0,p=l.length;d<p;d++){const g=new c(l[d]+"."+ps[r.path],t.array,u,h);s.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=lh(t.constructor),s=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)s[r]=t[r]*n;t=s}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const s=this instanceof Nr?by:Cf;return new s(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Iy(i,e,t){const n=e.attributes,s=new Vn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],l=a.min,c=a.max;if(l!==void 0&&c!==void 0){if(s.set(new H(l[0],l[1],l[2]),new H(c[0],c[1],c[2])),a.normalized){const h=lh(wr[a.componentType]);s.min.multiplyScalar(h),s.max.multiplyScalar(h)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new H,l=new H;for(let c=0,h=r.length;c<h;c++){const u=r[c];if(u.POSITION!==void 0){const d=t.json.accessors[u.POSITION],p=d.min,g=d.max;if(p!==void 0&&g!==void 0){if(l.setX(Math.max(Math.abs(p[0]),Math.abs(g[0]))),l.setY(Math.max(Math.abs(p[1]),Math.abs(g[1]))),l.setZ(Math.max(Math.abs(p[2]),Math.abs(g[2]))),d.normalized){const _=lh(wr[d.componentType]);l.multiplyScalar(_)}a.max(l)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}s.expandByVector(a)}i.boundingBox=s;const o=new Ni;s.getCenter(o.center),o.radius=s.min.distanceTo(s.max)/2,i.boundingSphere=o}function _d(i,e,t){const n=e.attributes,s=[];function r(o,a){return t.getDependency("accessor",o).then(function(l){i.setAttribute(a,l)})}for(const o in n){const a=ah[o]||o.toLowerCase();a in i.attributes||s.push(r(n[o],a))}if(e.indices!==void 0&&!i.index){const o=t.getDependency("accessor",e.indices).then(function(a){i.setIndex(a)});s.push(o)}return Lt.workingColorSpace!==mn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${Lt.workingColorSpace}" not supported.`),$i(i,e),Iy(i,e,t),Promise.all(s).then(function(){return e.targets!==void 0?Ty(i,e.targets,t):i})}class Dy extends Ux{constructor(e){super(e),this.type=Gn}parse(e){const o=function(U,K){switch(U){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(K||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(K||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(K||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(K||""))}},u=function(U,K,x){K=K||1024;let G=U.pos,k=-1,z=0,ne="",q=String.fromCharCode.apply(null,new Uint16Array(U.subarray(G,G+128)));for(;0>(k=q.indexOf(`
`))&&z<K&&G<U.byteLength;)ne+=q,z+=q.length,G+=128,q+=String.fromCharCode.apply(null,new Uint16Array(U.subarray(G,G+128)));return-1<k?(U.pos+=z+k+1,ne+q.slice(0,k)):!1},d=function(U){const K=/^#\?(\S+)/,x=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,b=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,G=/^\s*FORMAT=(\S+)\s*$/,k=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,z={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let ne,q;for((U.pos>=U.byteLength||!(ne=u(U)))&&o(1,"no header found"),(q=ne.match(K))||o(3,"bad initial token"),z.valid|=1,z.programtype=q[1],z.string+=ne+`
`;ne=u(U),ne!==!1;){if(z.string+=ne+`
`,ne.charAt(0)==="#"){z.comments+=ne+`
`;continue}if((q=ne.match(x))&&(z.gamma=parseFloat(q[1])),(q=ne.match(b))&&(z.exposure=parseFloat(q[1])),(q=ne.match(G))&&(z.valid|=2,z.format=q[1]),(q=ne.match(k))&&(z.valid|=4,z.height=parseInt(q[1],10),z.width=parseInt(q[2],10)),z.valid&2&&z.valid&4)break}return z.valid&2||o(3,"missing format specifier"),z.valid&4||o(3,"missing image size specifier"),z},p=function(U,K,x){const b=K;if(b<8||b>32767||U[0]!==2||U[1]!==2||U[2]&128)return new Uint8Array(U);b!==(U[2]<<8|U[3])&&o(3,"wrong scanline width");const G=new Uint8Array(4*K*x);G.length||o(4,"unable to allocate buffer space");let k=0,z=0;const ne=4*b,q=new Uint8Array(4),ue=new Uint8Array(ne);let Y=x;for(;Y>0&&z<U.byteLength;){z+4>U.byteLength&&o(1),q[0]=U[z++],q[1]=U[z++],q[2]=U[z++],q[3]=U[z++],(q[0]!=2||q[1]!=2||(q[2]<<8|q[3])!=b)&&o(3,"bad rgbe scanline format");let we=0,Te;for(;we<ne&&z<U.byteLength;){Te=U[z++];const nt=Te>128;if(nt&&(Te-=128),(Te===0||we+Te>ne)&&o(3,"bad scanline data"),nt){const at=U[z++];for(let ce=0;ce<Te;ce++)ue[we++]=at}else ue.set(U.subarray(z,z+Te),we),we+=Te,z+=Te}const Be=b;for(let nt=0;nt<Be;nt++){let at=0;G[k]=ue[nt+at],at+=b,G[k+1]=ue[nt+at],at+=b,G[k+2]=ue[nt+at],at+=b,G[k+3]=ue[nt+at],k+=4}Y--}return G},g=function(U,K,x,b){const G=U[K+3],k=Math.pow(2,G-128)/255;x[b+0]=U[K+0]*k,x[b+1]=U[K+1]*k,x[b+2]=U[K+2]*k,x[b+3]=1},_=function(U,K,x,b){const G=U[K+3],k=Math.pow(2,G-128)/255;x[b+0]=Ko.toHalfFloat(Math.min(U[K+0]*k,65504)),x[b+1]=Ko.toHalfFloat(Math.min(U[K+1]*k,65504)),x[b+2]=Ko.toHalfFloat(Math.min(U[K+2]*k,65504)),x[b+3]=Ko.toHalfFloat(1)},m=new Uint8Array(e);m.pos=0;const f=d(m),E=f.width,y=f.height,M=p(m.subarray(m.pos),E,y);let O,I,P;switch(this.type){case $n:P=M.length/4;const U=new Float32Array(P*4);for(let x=0;x<P;x++)g(M,x*4,U,x*4);O=U,I=$n;break;case Gn:P=M.length/4;const K=new Uint16Array(P*4);for(let x=0;x<P;x++)_(M,x*4,K,x*4);O=K,I=Gn;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:E,height:y,data:O,header:f.string,gamma:f.gamma,exposure:f.exposure,type:I}}setDataType(e){return this.type=e,this}load(e,t,n,s){function r(o,a){switch(o.type){case $n:case Gn:o.colorSpace=mn,o.minFilter=fn,o.magFilter=fn,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,s)}}const nc=new WeakMap;class Ny extends ys{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,s){const r=new Mo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,s)},n,s)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Wt,n).catch(n)}decodeDracoFile(e,t,n,s,r=mn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:s||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(nc.has(e)){const l=nc.get(e);if(l.key===n)return l.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let s;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(l=>(s=l,new Promise((c,h)=>{s._callbacks[r]={resolve:c,reject:h},s.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(l=>this._createGeometry(l.geometry));return a.catch(()=>!0).then(()=>{s&&r&&this._releaseTask(s,r)}),nc.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Qt;e.index&&t.setIndex(new An(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const s=e.attributes[n],r=s.name,o=s.array,a=s.itemSize,l=new An(o,a);r==="color"&&(this._assignVertexColorSpace(l,s.vertexColorSpace),l.normalized=!(o instanceof Float32Array)),t.setAttribute(r,l)}return t}_assignVertexColorSpace(e,t){if(t!==Wt)return;const n=new Xe;for(let s=0,r=e.count;s<r;s++)n.fromBufferAttribute(e,s),Lt.toWorkingColorSpace(n,Wt),e.setXYZ(s,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new Mo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((s,r)=>{n.load(e,s,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const s=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=Uy.toString(),o=["/* draco decoder */",s,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const s=new Worker(this.workerSourceURL);s._callbacks={},s._taskCosts={},s._taskLoad=0,s.postMessage({type:"init",decoderConfig:this.decoderConfig}),s.onmessage=function(r){const o=r.data;switch(o.type){case"decode":s._callbacks[o.id].resolve(o);break;case"error":s._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(s)}else this.workerPool.sort(function(s,r){return s._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Uy(){let i,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":i=a.decoderConfig,e=new Promise(function(h){i.onModuleLoaded=function(u){h({draco:u})},DracoDecoderModule(i)});break;case"decode":const l=a.buffer,c=a.taskConfig;e.then(h=>{const u=h.draco,d=new u.Decoder;try{const p=t(u,d,new Int8Array(l),c),g=p.attributes.map(_=>_.array.buffer);p.index&&g.push(p.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:p},g)}catch(p){console.error(p),self.postMessage({type:"error",id:a.id,error:p.message})}finally{u.destroy(d)}});break}};function t(o,a,l,c){const h=c.attributeIDs,u=c.attributeTypes;let d,p;const g=a.GetEncodedGeometryType(l);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,p=a.DecodeArrayToMesh(l,l.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,p=a.DecodeArrayToPointCloud(l,l.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!p.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+p.error_msg());const _={index:null,attributes:[]};for(const m in h){const f=self[u[m]];let E,y;if(c.useUniqueIDs)y=h[m],E=a.GetAttributeByUniqueId(d,y);else{if(y=a.GetAttributeId(d,o[h[m]]),y===-1)continue;E=a.GetAttribute(d,y)}const M=s(o,a,d,m,f,E);m==="color"&&(M.vertexColorSpace=c.vertexColorSpace),_.attributes.push(M)}return g===o.TRIANGULAR_MESH&&(_.index=n(o,a,d)),o.destroy(d),_}function n(o,a,l){const h=l.num_faces()*3,u=h*4,d=o._malloc(u);a.GetTrianglesUInt32Array(l,u,d);const p=new Uint32Array(o.HEAPF32.buffer,d,h).slice();return o._free(d),{array:p,itemSize:1}}function s(o,a,l,c,h,u){const d=u.num_components(),g=l.num_points()*d,_=g*h.BYTES_PER_ELEMENT,m=r(o,h),f=o._malloc(_);a.GetAttributeDataArrayForAllPoints(l,u,m,_,f);const E=new h(o.HEAPF32.buffer,f,g).slice();return o._free(f),{name:c,array:E,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class Fy extends Er{constructor(){super();const e=new Pt;e.deleteAttribute("uv");const t=new yt({side:Tn}),n=new yt,s=new Fh(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);const r=new Ae(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new Ae(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new Ae(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const l=new Ae(e,n);l.position.set(6.167,.857,7.803),l.rotation.set(0,.561,0),l.scale.set(3.927,6.285,3.687),this.add(l);const c=new Ae(e,n);c.position.set(-2.017,.018,6.124),c.rotation.set(0,.333,0),c.scale.set(2.002,4.566,2.064),this.add(c);const h=new Ae(e,n);h.position.set(2.291,-.756,-2.621),h.rotation.set(0,-.286,0),h.scale.set(1.546,1.552,1.496),this.add(h);const u=new Ae(e,n);u.position.set(-2.193,-.369,-5.547),u.rotation.set(0,.516,0),u.scale.set(3.875,3.487,2.986),this.add(u);const d=new Ae(e,mr(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const p=new Ae(e,mr(50));p.position.set(-16.109,18.021,-8.207),p.scale.set(.1,2.425,2.751),this.add(p);const g=new Ae(e,mr(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const _=new Ae(e,mr(43));_.position.set(-.462,8.89,14.52),_.scale.set(4.38,5.441,.088),this.add(_);const m=new Ae(e,mr(20));m.position.set(3.235,11.486,-12.541),m.scale.set(2.5,2,.1),this.add(m);const f=new Ae(e,mr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function mr(i){const e=new sn;return e.color.setScalar(i),e}const Pf={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Vr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Oy=new ja(-1,1,1,-1,0,1);class By extends Qt{constructor(){super(),this.setAttribute("position",new Nt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Nt([0,2,0,0,2,0],2))}}const ky=new By;class kh{constructor(e){this._mesh=new Ae(ky,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Oy)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class ch extends Vr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof rn?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=xo.clone(e.uniforms),this.material=new rn({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new kh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class vd extends Vr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const s=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(s.REPLACE,s.REPLACE,s.REPLACE),r.buffers.stencil.setFunc(s.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(s.EQUAL,1,4294967295),r.buffers.stencil.setOp(s.KEEP,s.KEEP,s.KEEP),r.buffers.stencil.setLocked(!0)}}class zy extends Vr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Hy{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Ke);this._width=n.width,this._height=n.height,t=new li(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:Gn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new ch(Pf),this.copyPass.material.blending=Zi,this.clock=new Hx}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let s=0,r=this.passes.length;s<r;s++){const o=this.passes[s];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(s),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}vd!==void 0&&(o instanceof vd?n=!0:o instanceof zy&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Ke);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,s=this._height*this._pixelRatio;this.renderTarget1.setSize(n,s),this.renderTarget2.setSize(n,s);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,s)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class xd extends Vr{constructor(e,t,n=null,s=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=s,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Xe}render(e,t,n){const s=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=s}}const Vy={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class Fr extends Vr{constructor(e,t,n,s){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=s,this.resolution=e!==void 0?new Ke(e.x,e.y):new Ke(256,256),this.clearColor=new Xe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new li(r,o,{type:Gn}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let u=0;u<this.nMips;u++){const d=new li(r,o,{type:Gn});d.texture.name="UnrealBloomPass.h"+u,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const p=new li(r,o,{type:Gn});p.texture.name="UnrealBloomPass.v"+u,p.texture.generateMipmaps=!1,this.renderTargetsVertical.push(p),r=Math.round(r/2),o=Math.round(o/2)}const a=Vy;this.highPassUniforms=xo.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=s,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new rn({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const l=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let u=0;u<this.nMips;u++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(l[u])),this.separableBlurMaterials[u].uniforms.invSize.value=new Ke(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1),new H(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const h=Pf;this.copyUniforms=xo.clone(h.uniforms),this.blendMaterial=new rn({uniforms:this.copyUniforms,vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:Pi,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Xe,this.oldClearAlpha=1,this.basic=new sn,this.fsQuad=new kh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),s=Math.round(t/2);this.renderTargetBright.setSize(n,s);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,s),this.renderTargetsVertical[r].setSize(n,s),this.separableBlurMaterials[r].uniforms.invSize.value=new Ke(1/n,1/s),n=Math.round(n/2),s=Math.round(s/2)}render(e,t,n,s,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this.fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[l].uniforms.direction.value=Fr.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=Fr.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[l];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new rn({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Ke(.5,.5)},direction:{value:new Ke(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new rn({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}Fr.BlurDirectionX=new Ke(1,0);Fr.BlurDirectionY=new Ke(0,1);const Gy={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class Wy extends Vr{constructor(){super();const e=Gy;this.uniforms=xo.clone(e.uniforms),this.material=new Ia({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new kh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},Lt.getTransfer(this._outputColorSpace)===Xt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Fd?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Od?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Bd?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===yh?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===kd?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===zd&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class bo extends Ae{constructor(){super(bo.Geometry,new sn({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new H,t=new H,n=new od(16,16),s=new od(16,16);let r=Si;const o=bo.Geometry,a=new Ia({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),l=new Ia({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),c=new Ae(o,a),h=[],u=yr.Shader,d=new Ia({name:u.name,uniforms:{map:{value:null},occlusionMap:{value:s},color:{value:new Xe(16777215)},scale:{value:new Ke},screenPosition:{value:new H}},vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:Pi,transparent:!0,depthWrite:!1}),p=new Ae(o,d);this.addElement=function(E){h.push(E)};const g=new Ke,_=new Ke,m=new Zx,f=new Dt;this.onBeforeRender=function(E,y,M){E.getCurrentViewport(f);const O=E.getRenderTarget(),I=O!==null?O.texture.type:Si;r!==I&&(n.dispose(),s.dispose(),n.type=s.type=I,r=I);const P=f.w/f.z,U=f.z/2,K=f.w/2;let x=16/f.w;if(g.set(x*P,x),m.min.set(f.x,f.y),m.max.set(f.x+(f.z-16),f.y+(f.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(M.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(M.projectionMatrix),_.x=f.x+e.x*U+U-8,_.y=f.y+e.y*K+K-8,m.containsPoint(_))){E.copyFramebufferToTexture(n,_);let b=a.uniforms;b.scale.value=g,b.screenPosition.value=e,E.renderBufferDirect(M,null,o,a,c,null),E.copyFramebufferToTexture(s,_),b=l.uniforms,b.scale.value=g,b.screenPosition.value=e,E.renderBufferDirect(M,null,o,l,c,null);const G=-e.x*2,k=-e.y*2;for(let z=0,ne=h.length;z<ne;z++){const q=h[z],ue=d.uniforms;ue.color.value.copy(q.color),ue.map.value=q.texture,ue.screenPosition.value.x=e.x+G*q.distance,ue.screenPosition.value.y=e.y+k*q.distance,x=q.size/f.w;const Y=f.w/f.z;ue.scale.value.set(x*Y,x),d.uniformsNeedUpdate=!0,E.renderBufferDirect(M,null,o,d,p,null)}}},this.dispose=function(){a.dispose(),l.dispose(),d.dispose(),n.dispose(),s.dispose();for(let E=0,y=h.length;E<y;E++)h[E].texture.dispose()}}}class yr{constructor(e,t=1,n=0,s=new Xe(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=s}}yr.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};bo.Geometry=(function(){const i=new Qt,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new Ih(e,5);return i.setIndex([0,1,2,0,2,3]),i.setAttribute("position",new zs(t,3,0,!1)),i.setAttribute("uv",new zs(t,2,3,!1)),i})();const Lf=[{id:"factory",label:"A new beginning",phase:"01 / Departure",title:"Extraordinary.<br>From the start.",copy:"A purpose-built platform. A payload full of possibility.",detail:"Tessera–1 / Mission preparation"},{id:"integration",label:"Payload integration",phase:"01 / Departure",title:"The next stop.<br>Somewhere above.",copy:"A research payload. A different environment. Preparing the systems that connect a question on Earth to an experiment in orbit.",detail:"Launch vehicle / Payload integration"},{id:"launch",label:"Liftoff",phase:"01 / Departure",title:"Leave Earth.<br>Keep the purpose.",copy:"The destination is microgravity. The purpose is to explore what different conditions could make possible for research on Earth.",detail:"Launch / Ascent"},{id:"separation",label:"Stage & fairing separation",phase:"01 / Departure",title:"Let go.<br>Go further.",copy:"The launch vehicle releases its payload. The next stage of the journey is research and manufacturing in orbit.",detail:"Stage separation / Fairing release"},{id:"orbit",label:"Orbital operations",phase:"02 / Discovery",title:"A factory.<br>Above it all.",copy:"Tessera–1 is being developed for research and manufacturing in microgravity. Study what changes. Test what can be made.",detail:"Tessera–1 / Orbital manufacturing"},{id:"bioreactor",label:"Inside the bioreactor",phase:"02 / Discovery",title:"Change the conditions.<br>Ask new questions.",copy:"Reduced settling and convection create different conditions for biological research. Controlled experiments compare the results with Earth.",detail:"Inside Tessera / Biological research"},{id:"protein",label:"Molecular discovery",phase:"02 / Discovery",title:"Look closer.<br>Learn what changes.",copy:"From protein structure to crystal growth: exploring processes relevant to medicine, with comparisons and further testing on Earth.",detail:"Molecular scale / Protein study"},{id:"medicine",label:"The research payload",phase:"02 / Discovery",title:"Bring the research<br>back to Earth.",copy:"An orbital experiment is one step. The work continues with sample analysis, comparison and further development on Earth.",detail:"Research payload / Return preparation"},{id:"payload",label:"Into Thor",phase:"03 / Return",title:"Precious cargo.<br>Purposeful return.",copy:"Thor XR–1 is being developed to bring research samples and materials back from orbit. The return is part of the experiment.",detail:"Thor XR–1 / Payload transfer"},{id:"reentry",label:"Hypersonic reentry",phase:"03 / Return",title:"Through the fire.<br>Back to Earth.",copy:"Returning through the atmosphere reconnects orbital research with the laboratories that can examine its results.",detail:"Thor XR–1 / Atmospheric reentry"},{id:"parachute",label:"Parachute descent",phase:"03 / Return",title:"A softer<br>arrival.",copy:"A controlled descent is part of the return sequence. The research payload remains at the centre of the mission.",detail:"Descent / Parachute deployment"},{id:"splashdown",label:"Splashdown",phase:"03 / Return",title:"Back on Earth.<br>Work still ahead.",copy:"Splashdown marks the handover from flight to recovery. The next destination is the team that will study the samples.",detail:"Ocean recovery / Splashdown"},{id:"recovery",label:"Air & sea recovery",phase:"03 / Return",title:"A coordinated<br>return.",copy:"Recovery connects the vehicle and its payload with transport, inspection and delivery to the research team.",detail:"Recovery / Air & sea operations"},{id:"warehouse",label:"Pharma logistics",phase:"04 / For life",title:"From orbit.<br>To the laboratory.",copy:"Recovered samples return to analysis and quality checks. Scientists compare the results and decide what to investigate next.",detail:"On Earth / Pharmaceutical development"},{id:"hospital",label:"For life on Earth",phase:"04 / For life",title:"Further out.<br>Closer to life.",copy:"Research in orbit serves an ambition on Earth: helping scientists understand disease and explore new ways to make medicines.",detail:"The destination / Life on Earth"}],Xy=i=>Math.max(0,Math.min(1,i)),hh=i=>(i=Xy(i),i*i*(3-2*i)),He=(i=0,e=0,t=0,n=1,s=0,r=0,o=0,a=1)=>[i,e,t,n,s,r,o,a],ic={factory:[[0,He(0,-3.2,0,1.3,0,-.2)],[.55,He(0,-3.2,1,1.3,0,-.2)],[1.2,He(0,-4,-3,.7,0,-.2,0,0)]],tessera:[[0,He(0,.1,0,7.2,.14,-.36)],[.45,He(0,.1,1,7.2,.14,-.24)],[1,He(0,3.3,0,.48,.1,-.2)],[1.65,He(0,3.3,0,.48,.1,-.2,0,0)],[2.95,He(0,3.3,0,.48,.1,-.2,0,0)],[3.2,He(0,3.2,0,.48,.1,-.2)],[3.65,He(.8,2,1,2.5,.2,-.4)],[4,He(0,.3,0,7.7,.18,-.4,.03)],[4.55,He(0,.2,1,8.5,.12,-.08)],[5,He(0,0,3,11,.1,0,0,0)]],rocket:[[.6,He(0,0,0,1,0,0,0,0)],[1,He(0,0,0,1,0,-.15)],[1.6,He(0,-.2,0,1,0,-.15)],[2,He(0,-.287,0,1.2,0,-.15,0)],[2.6,He(0,-.287,0,1.2,0,-.15,0)],[3,He(0,.3,0,1,0,-.2,-.28)],[3.6,He(-1,-1,-1,.9,0,-.2,-.5)],[4,He(-3,-6,-4,.6,0,-.2,-.7,0)]],earth:[[0,He(0,0,0,1,0,0,0,0)],[14,He(0,0,0,1,0,0,0,0)]],reactor:[[4.65,He(0,0,0,.3,0,0,0,0)],[5,He(0,.4,0,1.35,.06,-.12)],[5.5,He(0,.3,1,1.55,.05,.1)],[6,He(0,0,3,2,0,.1,0,0)]],protein:[[5.5,He(0,0,0,.1,0,0,0,0)],[6,He(0,.5,0,1.4,.1,-.2,Math.PI)],[6.5,He(0,.5,0,1.5,.2,.4,Math.PI)],[7,He(0,0,0,.15,.3,.8,Math.PI,0)]],vial:[[6.55,He(0,.2,0,2.2,0,0,0,0)],[7,He(0,.3,0,2.15,.05,-.4,-.04)],[7.6,He(0,1.4,0,1.6,.1,-.3,-.15)],[8,He(.2,1.2,.3,.45,0,-.3,-.2)],[8.55,He(.3,-.3,0,.3,0,-.3,-.2,0)],[12.65,He(0,-1,0,.8,0,-.3,0,0)],[13,He(0,-1.3,0,1.5,.05,-.3)],[14,He(3,-.6,0,1.4,.05,-.3)]],thor:[[7.6,He(0,-1.2,0,6.5,1.15,.1,.1,0)],[8,He(0,-.4,0,11.5,1.05,.12,.1)],[8.6,He(0,.3,0,11.7,.95,.18,.15)],[9,He(-.4,.6,0,12.5,1.12,-.08,.2)],[9.4,He(.3,.3,0,10,1.1,.28,.08)],[9.8,He(0,-.4,0,6,.72,.1,-.08)],[10,He(0,-1.1,0,4,.65,.1,.02)],[10.6,He(0,-1.2,0,4,.65,.1,-.04)],[11,He(0,-1.8,0,4.5,.6,.15,.01)],[11.4,He(0,-1.85,0,4.5,.55,.15,-.015)],[12,He(0,-.65,0,3.2,.7,.12,.03)],[12.6,He(0,-1.65,0,3.2,.7,.12,.03)],[13,He(-1,-2,-3,1.2,.7,.12,.03,0)]],hatch:[[7.7,He(.4,0,.1,1,1.05,.12,.1,0)],[8,He(.45,.95,.3,1.4,1.05,.12,-.6)],[8.6,He(.4,-.03,.35,1,1.05,.12,.15,0)]],chute:[[9.65,He(0,1.8,0,.05,0,0,0,0)],[10,He(0,2.7,0,1.15,0,0,.03)],[10.65,He(0,1.6,0,1.15,0,0,-.04)],[11.1,He(3,-1.2,0,.3,0,0,-1.3,0)]],ocean:[[10.7,He(0,-2.05,0,1,0,0,0,0)],[11,He(0,-2.05,0,1,0,0)],[12,He(0,-2.4,0,1,0,0)],[12.7,He(0,-2.4,0,1,0,0,0,0)]],recovery:[[11.35,He(4,0,-2,1,0,-.2,0,0)],[12,He(0,0,0,1.15,0,-.2)],[12.65,He(0,-.3,0,1.15,0,-.2)],[13,He(-3,-3,-4,.6,0,-.2,0,0)]],warehouse:[[0,He(0,0,0,1,0,0,0,0)],[14,He(0,0,0,1,0,0,0,0)]],hospital:[[0,He(0,0,0,1,0,0,0,0)],[14,He(0,0,0,1,0,0,0,0)]]};function ms(i,e){if(e<i[0][0]||e>i.at(-1)[0]){const l=[...e<i[0][0]?i[0][1]:i.at(-1)[1]];return l[7]=0,l}let t=0;for(;t<i.length-2&&e>i[t+1][0];)t++;const[n,s]=i[t],[r,o]=i[Math.min(t+1,i.length-1)],a=r===n?0:hh((e-n)/(r-n));return s.map((l,c)=>l+(o[c]-l)*a)}function qy(i){return hh((i-8.6)/.35)*(1-hh((i-9.45)/.45))}const ri="/astreia-preview/",kn="#d7a35c",xa="#C8622A",ya="#B8B8B8",Yy=Math.PI*2,$y=i=>Math.max(0,Math.min(1,i)),zt=(i,e,t)=>$y((i-e)/(t-e)),Fs=i=>i*i*(3-2*i);function jy(i){return[Math.cos(i)*.88,Math.sin(i)*.88]}function Ky(i,e=0,t=!1){return 1-.55*zt(i,.2,.5)+(t?0:.01*Math.sin(e*Yy*.3))*zt(i,.2,.5)}function uh(i,e=0){const t=i.mobile?i.w<360?.55:.5:.42;return{x:i.w*(t+(.5-t)*Fs(zt(e,.8,1))),y:i.top+i.height*.53+(i.mobile?Math.min(32,i.height*.15):0),r:Math.min(i.unit,i.w*.24)}}function Zy(i,e,t,n){const s=Fs(zt(t,0,.085)),r=Fs(zt(t,.04,.2));return{x:i.x+(e.x-i.x)*r,y:i.y+(e.y-i.y)*r,r:i.r+(e.r*.78-i.r)*s,alpha:n===8?1:Fs(zt(t,.095,.17)),dish:Fs(zt(t,.12,.2))}}function If(i){const e=Fs(zt(i,.5,.62)),t=Fs(zt(i,.8,.9));return{travel:e*(1-t),copies:zt(i,.5,.515)*(1-zt(i,.88,.9)),guides:zt(i,.5,.515)*(1-zt(i,.88,.9)),delta:zt(i,.66,.68)*(1-zt(i,.84,.86)),marker:zt(i,.32,.34)*(1-zt(i,.76,.78)),vial:1-zt(i,.88,.9),narration:i<.15?-1:i<.5?0:i<.8?1:2,active:i>=.2&&i<.5?"ember":i>=.5&&i<.66?"copies":i>=.66&&i<.8?"delta":"none"}}const Jy=["Seven thousand diseases have no treatment. Most affect too few people to run a trial.","But each patient's cells carry their disease. Those cells can fly.","One sample up. Two models back: one grown on Earth, one in orbit. The difference is the signal."];function Qy(i,e,t,n=!1){return n?e:i+(e-i)*(1-Math.pow(.9,Math.max(0,t)*60))}const On=i=>Math.max(0,Math.min(1,i)),Ve=(i,e,t)=>i+(e-i)*t,e1=i=>(i=On(i),i<.5?4*i*i*i:1-Math.pow(-2*i+2,3)/2),qe=(i,e,t)=>e1((i-e)/(t-e)),_i=(i,e,t,n,s)=>qe(i,e,t)*(1-qe(i,n,s)),Ls=[7,14,20],Ga=[{id:"inside-tessera",label:"Inside Tessera",title:"A question arrives in orbit.",captions:["In orbit, a sealed cassette arrives at Tessera.","Patient cells. A candidate molecule. A different environment.","Here is what happens next."]},{id:"gravity",label:"Change the conditions",title:"On Earth, cells settle.",captions:["On Earth, cells settle. Many cultures grow as a single layer.","Many medicines are first tested there. The body is not a layer.","In microgravity, less settling gives cells different ways to meet."]},{id:"tissue",label:"Tissue in three dimensions",title:"See disease in another dimension.",captions:["In orbit, some cells can assemble in 3D without a scaffold.","A tumor is not flat. A liver is not flat. Now the model is not either.","A different model. New questions to ask."]},{id:"patient",label:"Start with the patient",title:"Start with the person who needs it.",captions:Jy},{id:"treatment",label:"Test candidate medicines",title:"Find the leads worth taking further.",captions:["Five candidate doses. An untreated control. Four repeats.","Most wells show no signal in this illustrative screen.","A signal is a lead to test again. It is not a treatment yet."]},{id:"data",label:"Learn from every experiment",title:"Every orbit teaches the model.",captions:["Every well can come home twice: as a sample, and as data.","Pair orbital results with the same experiment on Earth.","A new experimental condition. A better-informed next question."]},{id:"formulation",label:"Develop the formulation",title:"Improve how medicines are made.",captions:["Some protein medicines are difficult to formulate for injection.","More uniform crystals could help make easier-to-inject formulations.","The partner brings the molecule. Astreia provides the environment."]},{id:"inside-return",label:"What comes back",title:"What comes back.",captions:["A sample. A dataset. A lead to investigate on Earth.","Thor is designed to bring it home. The loop starts again.","Millions of people. Thousands of diseases. More room to find answers."]}].map((i,e)=>({...i,copy:i.captions[0],phase:"",detail:"Illustrative research · Platform in development"}));function Df(i){return{pull:qe(i,0,.3),load:qe(i,.08,.3),insert:qe(i,.3,.4),seal:qe(i,.41,.46),hatch:qe(i,.2,.28)*(1-qe(i,.41,.46)),depart:qe(i,.49,.7),skin:qe(i,.72,.86),outline:1-qe(i,.76,.86),reveal:qe(i,.86,1),overlay:1-qe(i,.97,1),preview:i>=.64}}const t1=i=>On(i);function Nf(i,e,t=!1){e=On(e);const n=t?[.48,.72,.7,.7,.72,.78,.9,.46][i]:t1(e);return{scene:i,p:e,pose:n,caption:i===7&&n>=.6?2:e<.5?0:e<.8?1:2,title:t?1:qe(e,.015,.05)*(1-qe(e,.985,1)),captionOpacity:t?1:qe(e,.015,.05)}}function yd(i,e,t=80,n=null){const s=i<=e,r=Math.max(t+28,e*.16),o=Math.min(n==null?e*(s?.73:.78):n-44,e-100),a=Math.max(100,o-r);return{w:i,h:e,mobile:s,top:r,bottom:o,height:a,cx:i/2,cy:r+a*.49,unit:Math.min(i*(s?.34:.24),a*.42),gutter:i*(s?.06:.038)}}function sc(i,e=28){const t=i*2.399963,n=Math.sqrt((i+.5)/e);return[Math.cos(t)*n,Math.sin(t)*n]}function rc(i,e,t=0){const n=Math.min(e.w*(e.mobile?.135:.108),e.height*.24),s=e.height*.205;return{x:e.cx+(i%6-2.5)*n,y:e.cy+(Math.floor(i/6)-1.5)*s-t*e.height*.16,r:Math.min(n*.33,s*.36)}}function n1(i){return i=On(i),{construction:i<=.8?Math.min(i,.76):.76*(1-qe(i,.8,.9)),retract:qe(i,.8,.9),protein:i>=1?1:On((i-.8)/.2)}}function i1(i){const e=Math.min(18,i.w*.025),t=i.w-i.gutter-e,n=Math.max(24,Math.min(64,i.w*.045)),s=Math.min(180,(i.w-2*i.gutter-4*e-n)/2),r=Math.max(18,Math.min(30,i.height*.18)),o=i.bottom-r/2-10,a=o-r/2-Math.max(8,Math.min(18,i.height*.06));return{x1:i.cx-(s+n)/2,x2:i.cx+(s+n)/2,width:s,height:r,y:o,busY:a,edge:t,railY:i.top+26,labelY:i.top+14,font:i.mobile?10:11}}function s1(i){const e={minX:1/0,maxX:-1/0,minY:1/0,maxY:-1/0};for(const t of i)for(const n of[...t.paths,t.dots])for(const[s,r]of n)e.minX=Math.min(e.minX,s),e.maxX=Math.max(e.maxX,s),e.minY=Math.min(e.minY,r),e.maxY=Math.max(e.maxY,r);return e}function Md(i,e,t,n,s){const r=Math.min(16,i.height*.08),o=i.gutter+r,a=i.w-i.gutter-r,l=i.top+r,c=i.bottom-r,h=Math.min(1,(a-o)/((e.maxX-e.minX)*i.unit),(c-l)/((e.maxY-e.minY)*i.unit)),u=Math.max(0,s*h),d=t-(e.minX+e.maxX)*u/2,p=n-(e.minY+e.maxY)*u/2;return{x:Math.max(o-e.minX*u,Math.min(a-e.maxX*u,d)),y:Math.max(l-e.minY*u,Math.min(c-e.maxY*u,p)),r:u}}function Sd(i,e=!1){const t=On((i-.72)/.28),n=.28*(e?220:280)/400;return 8.5+.18*t*t*(3-2*t)+n*(t*t*t-t*t)}function r1(i,e,t=1,n=globalThis.devicePixelRatio||1){return Math.min(n,3,Math.sqrt(8e6/Math.max(1,i*e)))*t}const o1=i=>Math.max(0,Math.min(1,i)),qi=i=>{const e=o1(i);return e*e*e*(e*(e*6-15)+10)},ni=(i,e,t)=>i+(e-i)*t;function a1(i,e,t){const n=e<=t,s=qi((i-11.25)/.63),r=qi((i-11.8)/.35),o=qi((i-11.91)/.22),a=qi((i-12.13)/.27),l=qi((i-12.43)/.23),c=Math.min(e*(n?.93:.76),t*.99)*ni(.38,1,s),h={x:e*ni(1.22,.53,r),y:t*ni(.46,.7,s),width:c,height:c*.334,bank:ni(-.12,.015,s),alpha:1},[u,d]=l1(h,.522,.63),p={x:u,y:d},g=ni(Math.min(e*(n?.84:.55),t*1.05)*.38,c*.175,a),_={x:ni(e*.43,p.x,a),y:ni(t*(.635-.15*o),p.y-g*468/1800*.29,a),width:g,height:g*468/1800,bank:ni(.045,h.bank-Math.PI/90,a)},m=Math.min(e*(n?.58:.34),t*.65)*ni(.36,1,s),f={x:ni(-e*.24,_.x+m*.236,s)+e*.7*l,y:t*(ni(.18,n?.36:.28,s)-l*.2),width:m,height:m*910/2400,bank:ni(-.11,.015,s)+l*.1,alpha:1};return{arrival:s,lift:o,land:a,depart:l,barge:h,helicopter:f,thor:_,deck:p,cable:qi((i-11.69)/.2)*(1-qi((i-12.39)/.06)),water:1-qi((i-11.91)/.11),exit:qi((i-12.5)/.22)}}function l1(i,e,t){const n=(e-.5)*i.width,s=(t-.5)*i.height,r=Math.cos(i.bank),o=Math.sin(i.bank);return[i.x+n*r-s*o,i.y+n*o+s*r]}const c1=i=>Math.max(0,Math.min(1,i)),oc=i=>{const e=c1(i);return e*e*e*(e*(e*6-15)+10)},h1=(i,e,t)=>i+(e-i)*t,Or=(i,e,t)=>[i*Math.cos(t)-e*Math.sin(t),i*Math.sin(t)+e*Math.cos(t)],bd=[.729,.702],Uf=1082/1453,dh=.52;function Eo(i){const e=Or((bd[0]-.5)*i.width,(bd[1]-.5)*i.height,i.bank);return[i.x+e[0],i.y+e[1]]}function u1(i){const e=Or(-i.width*.5,0,i.bank);return[i.x+e[0],i.y+e[1]]}function Ff(i,e,t=.5){const n=i<=e,s=!n&&e<500,r=-.015+.03*(t-.5),o={x:0,y:0,width:1,height:Uf,bank:r},a=Eo(o),l=.48,c=r+dh,h=Or(l/2,0,c),u={x:a[0]+h[0],y:a[1]+h[1],width:l,height:l*468/1800,bank:c},d=[];for(const M of[o,u])for(const O of[-.5,.5])for(const I of[-.5,.5]){const P=Or(O*M.width,I*M.height,M.bank);d.push([M.x+P[0],M.y+P[1]])}const p=Math.min(...d.map(M=>M[0])),g=Math.max(...d.map(M=>M[0])),_=Math.min(...d.map(M=>M[1])),m=Math.max(...d.map(M=>M[1])),f=Math.min(i*(n?.94:.86)/(g-p),e*(s?.5:.65)/(m-_))*(.96+.04*t),E=i*.5-(p+g)*f/2,y=e*(s?.42:.47)-(_+m)*f/2;for(const M of[o,u])M.x=E+M.x*f,M.y=y+M.y*f,M.width*=f,M.height*=f;return{tessera:o,thor:u,port:Eo(o)}}function d1(i,e,t,n){const s=Ff(e,t,.5),r=oc((i-8.22)/.22),o=oc((i-8.34)/.34),a=oc((i-8.22)/.46),l={};for(const p of["x","y","width","height","bank"])l[p]=h1(s.thor[p],n[p],a);const c={...s.tessera,x:0,y:0,width:s.tessera.width*(1-.68*a),height:s.tessera.height*(1-.68*a),bank:s.tessera.bank+.12*o},h=u1(l),u=Eo(c),d=Or(e*.16*r,0,s.thor.bank);return c.x=h[0]-u[0]-d[0]-e*1.3*o,c.y=h[1]-u[1]-d[1]-t*.2*o,{thor:l,tessera:c,port:Eo(c),separation:r,travel:o,follow:a}}function ac(i,e,t=0){const n=Ff(i,e,1).tessera,s=1+13*t,r=[n.x+(.483-.5)*n.width,n.y+(.51-.5)*n.height];return{...n,width:n.width*s,height:n.height*s,x:n.x+(n.x-r[0])*(s-1),y:n.y+(n.y-r[1])*(s-1)}}function f1(i){const e=(t,n)=>{const s=Or((t-.5)*i.width,(n-.5)*i.height,i.bank);return[i.x+s[0],i.y+s[1]]};return{dock:Eo(i),slot:e(.483,.51),elevator:e(.65,.65)}}const fh=i=>Math.max(0,Math.min(1,i)),dn=i=>{const e=fh(i);return fh(e*e*e*(e*(e*6-15)+10))},ho=(i,e,t)=>i+(e-i)*t,Ma=[[7.35,.5,.53,.82,-.1],[7.95,.5,.5,1,-.1],[8.4,.5,.48,1,-.15],[8.76,.48,.43,.92,-.48],[8.96,.62,.34,.47,-.94],[9.17,.51,.43,.7,-.25],[9.38,.37,.48,1.04,.42],[9.6,.52,.47,.69,.94],[9.84,.53,.49,.66,.7],[10.04,.51,.55,.63,.4],[10.3,.49,.62,.61,.22],[10.6,.49,.63,.62,.16],[10.98,.5,.64,.66,.1],[11.07,.5,.651,.66,.035],[11.25,.5,.644,.66,.055],[11.95,.5,.644,.66,.055]];function p1(i,e=!1){let t=0;for(;t<Ma.length-2&&i>Ma[t+1][0];)t++;const n=Ma[t],s=Ma[t+1],r=dn((i-n[0])/(s[0]-n[0])),o=n.map((c,h)=>ho(c,s[h],r)),a=dn((i-10.98)/.09),l=dn((i-11.08)/.36);return{progress:fh((i-8.3)/1.3),x:e?.5+(o[1]-.5)*.3:o[1],y:o[2],size:o[3],bank:o[4],opacity:dn((i-7.35)/.15)*(1-dn((i-12.72)/.12)),hull:1,bay:dn((i-7.5)/.18)*(1-dn((i-8.06)/.16)),cargo:dn((i-7.5)/.1)*(1-dn((i-7.98)/.1)),ocean:dn((i-9.48)/.55),canopy:dn((i-9.99)/.08)*(1-dn((i-11.36)/.16)),inflation:dn((i-10.04)/.38),contact:a,collapse:l,impact:dn((i-10.98)/.045)*(1-dn((i-11.1)/.3)),recovery:dn((i-11.25)/.65),near:dn((i-9.35)/1.6)}}function m1(i,e,t,n=!1){const s=e<=t,r=p1(i,s),o=a1(i,e,t),a=dn((i-11.25)/.55),l=ho(Math.min(e*(s?.84:.55),t*1.05)*r.size,o.thor.width,a),c=dn((i-11.08)/.15)*(1-dn((i-11.91)/.12)),h=n?0:Math.sin((i-11.08)*18)*t*.003*c;return{x:ho(e*r.x,o.thor.x,a),y:ho(t*r.y,o.thor.y,a)+h,width:l,height:l*468/1800,bank:ho(r.bank,o.thor.bank,a)}}function lc(i,e,t,n=!1){const s=m1(i,e,t,n);return i>=7.35&&i<8.68?d1(i,e,t,s).thor:s}const g1=i=>Math.max(0,Math.min(1,i)),Of=i=>(i=g1(i),i*i*(3-2*i)),gr=(i,e,t)=>i+(e-i)*t;function _1(i,e){const t=[];for(let n=0;n<3;n++){const s=Math.floor(e/3)+(n<e%3?1:0),r=i[n].length-1;for(let o=0;o<s;o++)t.push({rail:n,start:Math.floor(o*r/s),end:Math.floor((o+1)*r/s)})}return t}function v1(i,e,t,n,s,r,o,a,l){const{start:c,end:h}=n,u=.12*a/Math.max(1,l-1),d=[];for(let p=c;p<=h;p++){const g=(p-c)/(h-c),_=Of((o-u-g*.2)/.68),m=s.x+gr(e[p][0],t[p][0],r)*s.r,f=s.y+gr(e[p][1],t[p][1],r)*s.r;d.push([gr(gr(i[0][0],i[1][0],g),m,_),gr(gr(i[0][1],i[1][1],g),f,_)])}return d}const x1=(i,e,t)=>Of((i-.48-.24*e/Math.max(1,t-1))/.28),cc=(i,e,t)=>i+(e-i)*t,y1=Math.PI*2;function M1(i,e){return e.map(t=>{const n=Math.atan2(t.y-i.y,t.x-i.x),[s,r]=jy(n,i.yaw);return[i.surface?i.surface(n):[i.x+s*i.r,i.y+r*i.r],[t.x-Math.cos(n)*t.r*1.08,t.y-Math.sin(n)*t.r*1.08]]})}function S1(){let i=null,e=null,t=!1;const n={ember:0,copies:0,delta:0,neutral:1};return{reset(){i=null,e=null,t=!1},draw(s,r,o,a,l,c){const{path:h,dot:u,text:d,aggregate:p}=c,g=If(o),_=uh(r,o),m=i==null?0:Math.max(0,Math.min(.1,a-i));i=a;for(const b of Object.keys(n)){const G=b==="neutral"?g.active==="none"?1:0:g.active===b?1:0;l||m===0?n[b]=G:n[b]+=Math.sign(G-n[b])*Math.min(Math.abs(G-n[b]),m/.4)}const f=b=>.35+.65*Math.max(n.neutral,n[b]),E=p(s,{..._,seconds:a,reduced:l,disease:o,emberAlpha:f("ember"),neutralAlpha:.35+.65*n.neutral,halo:g.active==="ember"?n.ember*.6:0}),y=r.gutter+18,M=r.top+8,O=g.vial;if(O>0){const b=[[y-9,M+4],[y-9,M+31]];for(let z=0;z<=12;z++){const ne=Math.PI-z*Math.PI/12;b.push([y+Math.cos(ne)*9,M+31+Math.sin(ne)*9])}b.push([y+9,M+4],[y-9,M+4]),h(b,kn,O,zt(o,.02,.055),.85),h([[y-11,M],[y+11,M]],kn,O,zt(o,.055,.065),.85),h([[y-11,M+4],[y+11,M+4]],kn,O,zt(o,.065,.075),.85),h([[y-8,M+17],[y+8,M+17]],kn,O,zt(o,.075,.085),.75);for(let z=0;z<24*zt(o,.085,.1);z++)u(y+Math.sin(z*2.399)*6,M+19+z*.618%1*15,.6,kn,O*.7);["PATIENT-DERIVED","RARE DISEASE","n = 1"].forEach((z,ne)=>d(z,r.gutter+4,M+57+ne*15,kn,O*zt(o,.1+ne*.03,.12+ne*.03),"left",10));const G=E.surface(-2.05),k=zt(o,.08,.1)*O;h([[y+11,M],[G[0],Math.min(M,G[1]-24)],G],kn,.55*k,1,.75),k>0&&u(...G,1.5,kn,k)}const I=g.marker>0;if(I&&!t&&(e=a),I||(e=null),t=I,I){const b=E.surface(-2.35),G=r.mobile?r.w*.66:E.x-E.r*1.08-24,k=r.mobile?Math.max(r.top+14,E.y-E.r*1.08-24):b[1],z=l?10:Math.max(0,a-e),ne=Math.min(zt(o,.32,.36),z/.35),q=.85*g.marker,ue=r.mobile?[G,k+7]:[G+8,k];h(r.mobile?[b,[b[0],k+7],ue]:[b,ue],xa,q,Math.min(1,ne*2),.75),u(...b,1.5,xa,q),h(r.mobile?[[G-8,k+7],[G+8,k+7]]:[[G+8,k-5],[G+8,k+5]],xa,q,zt(ne,.5,1),.75);const Y=l?14:Math.min(14,Math.floor(Math.max(0,z-.35)*40),Math.floor(zt(o,.34,.39)*14));s.save(),s.letterSpacing="0.12em",d("DISEASE MARKER".slice(0,Y),G,r.mobile?k-5:k-9,xa,q,r.mobile?"center":"right",r.mobile?11:12),s.restore()}const P=Math.max(_.r*.65,_.r*.22+46),U=r.mobile?Math.min(r.w*.82,r.w-r.gutter-46):r.w*.78,K=[{x:U,y:_.y-P,r:_.r*.22},{x:U,y:_.y+P,r:_.r*.22}],x=M1(E,K);if(g.guides>0&&x.forEach((b,G)=>h(b,G?kn:ya,g.guides*.5,1,.75)),g.copies>0&&K.forEach((b,G)=>{const k=g.travel,z=cc(_.x,b.x,k),ne=cc(_.y,b.y,k),q=_.r*cc(1,.22,k),ue=g.copies*f("copies");s.save(),s.shadowColor=G?kn:ya,s.shadowBlur=g.active==="copies"?8*n.copies:0,p(s,{x:z,y:ne,r:q,seconds:a,reduced:l,ink:G?kn:ya,disease:G?o:0,moving:!!G,alpha:ue,halo:0,groupGlow:g.active==="copies"?n.copies:0}),s.restore();const Y=zt(o,G?.64:.62,G?.66:.64)*(1-zt(o,.8,.84));d(G?"ORBIT SAMPLE":"EARTH CONTROL",b.x,b.y+b.r*1.15+17,G?kn:ya,Y,"center",r.mobile?9:11)}),g.delta>0){const b=o>=.7&&o<=.8?.2:.1,G=l?1:1+b*Math.sin(a*y1*.5),k=U,z=_.y+7;s.save(),s.translate(k,z),s.scale(G,G),s.shadowColor=kn,s.shadowBlur=g.active==="delta"?8:0,d("Δ",0,0,kn,g.delta*(g.active==="delta"?.6:f("delta")),"center",24),s.shadowBlur=0,d("Δ",0,0,kn,g.delta*f("delta"),"center",24),s.restore()}return g}}}function b1(){let i=null,e=!1,t=!0,n=null,s=1453,r=1082;function o(){return i||(i=fetch(ri+"story-2d/inside-tessera/station-frontal.json").then(l=>{if(!l.ok)throw Error("Station contour load");return l.json()}).then(l=>{if(!t)return;const c=new Path2D;for(const h of l.paths)if(!(h.length<2)){c.moveTo(...h[0]);for(let u=1;u<h.length;u++)c.lineTo(...h[u])}s=l.width,r=l.height,n=c,e=!0}).catch(()=>{}),i)}function a(l,c,h=1){if(!e||h<=0)return;const u=c.width/s;l.save(),l.globalAlpha=h*.85,l.strokeStyle="#d7a35c",l.translate(c.x,c.y),l.rotate(c.bank),l.scale(u,c.height/r),l.translate(-s/2,-r/2),l.lineWidth=.9/u,l.lineJoin="round",l.lineCap="round",l.stroke(n),l.restore()}return{prepare:o,draw:a,get ready(){return e},destroy(){t=!1,e=!1,n=null}}}function Ed(i,e,t,n,s){const r=Math.max(0,Math.min(1,s));if(r===1)return{...n};const o=(a,l)=>a+(l-a)*r;return{x:o(i[0]+Math.cos(t)*e/2,n.x),y:o(i[1]+Math.sin(t)*e/2,n.y),width:o(e,n.width),height:o(e*468/1800,n.height),bank:o(t,n.bank)}}function E1(i){const e=(t,n)=>[i.x+t*Math.cos(i.bank)-n*Math.sin(i.bank),i.y+t*Math.sin(i.bank)+n*Math.cos(i.bank)];return{center:e(i.width*.123,-i.height*.07),approach:e(i.width*.123,-i.height*.07-i.width*.23)}}function w1(){const i=new Image;i.decoding="async";const e=document.createElement("canvas"),t=document.createElement("canvas"),n=e.getContext("2d",{willReadFrequently:!0}),s=t.getContext("2d");let r=null,o=!1,a=!1,l=!0,c="";function h(){return r||(i.src=ri+"story-2d/thor-illustrated/thor.webp",r=i.decode().then(()=>{if(!l)return;if(!n||!s){a=!0;return}const p=900,g=Math.round(p*i.naturalHeight/i.naturalWidth);e.width=t.width=p,e.height=t.height=g,n.drawImage(i,0,0,p,g);const _=n.getImageData(0,0,p,g),m=_.data.slice(),f=_.data,E=y=>(m[y]*.2126+m[y+1]*.7152+m[y+2]*.0722)*m[y+3]/255;for(let y=0;y<g;y++)for(let M=0;M<p;M++){const O=(y*p+M)*4,I=(y*p+Math.max(0,M-1))*4,P=(y*p+Math.min(p-1,M+1))*4,U=(Math.max(0,y-1)*p+M)*4,K=(Math.min(g-1,y+1)*p+M)*4,x=Math.max(Math.abs(m[I+3]-m[P+3]),Math.abs(m[U+3]-m[K+3])),b=Math.hypot(E(I)-E(P),E(U)-E(K));f[O]=219,f[O+1]=184,f[O+2]=126,f[O+3]=Math.min(210,Math.max(x*.85,(b-12)*2))}n.putImageData(_,0,0),o=!0}).catch(()=>{a=!0}),r)}function u(p,g,{skin:_,outline:m,overlay:f},E=!1){if(!o||f<=0||_<=0&&m<=0)return;const y=t.width,M=t.height,O=`${_}:${E}`;if(_>0&&c!==O){if(s.clearRect(0,0,y,M),s.globalCompositeOperation="source-over",s.globalAlpha=1,s.drawImage(i,0,0,y,M),_<1){const I=y*.18,P=-I+(y+2*I)*_;s.globalCompositeOperation="destination-in";const U=s.createLinearGradient(P-I,0,P+I,0);if(U.addColorStop(0,"#fff"),U.addColorStop(1,"#fff0"),s.fillStyle=U,s.fillRect(0,0,y,M),!E&&_>0){s.globalCompositeOperation="source-atop";const K=s.createLinearGradient(P-I,0,P+I,0);K.addColorStop(0,"#edc99100"),K.addColorStop(.4,"#edc99100"),K.addColorStop(.58,"#f3d7a34d"),K.addColorStop(1,"#edc99100"),s.fillStyle=K,s.fillRect(0,0,y,M)}}s.globalCompositeOperation="source-over",c=O}p.save(),p.translate(g.x,g.y),p.rotate(g.bank),m>0&&(p.globalAlpha=m*f,p.drawImage(e,-g.width/2,-g.height/2,g.width,g.height)),_>0&&(p.globalAlpha=f,p.drawImage(t,-g.width/2,-g.height/2,g.width,g.height)),p.restore()}function d(p,g,_){if(!o||_<=0)return;const m=.51,f=.264,E=.227,y=.31,M=(m-.5)*g.width,O=(f-.5)*g.height,I=E*g.width,P=y*g.height;p.save(),p.translate(g.x,g.y),p.rotate(g.bank),p.globalAlpha=_,p.strokeStyle="#d7a35c",p.lineWidth=.8;const U=P*.75*_,K=P*(1-.82*_);p.beginPath(),p.moveTo(M,O),p.lineTo(M,O-U),p.moveTo(M+I,O),p.lineTo(M+I,O-U),p.stroke(),p.globalAlpha=_,p.drawImage(e,m*e.width,f*e.height,E*e.width,y*e.height,M,O-U,I,K),p.restore()}return{prepare:h,draw:u,drawHatch:d,get ready(){return o},get settled(){return o||a},destroy(){l=!1,o=!1,e.width=t.width=0,i.removeAttribute("src")}}}const hc=i=>Math.max(0,Math.min(1,i)),Bf=new WeakMap,wd=(i,e,t)=>{if(!i)return;const n=t||e>=1?"none":`blur(${((1-e)*6).toFixed(2)}px)`;i.style.filter!==n&&(i.style.filter=n)};function T1(i,e,t,n){const s=t.replace(/<br\s*\/?>/g," "),r=[];i.replaceChildren(),i.setAttribute("aria-label",s);for(const o of s.split(/(\s+)/)){if(!o)continue;const a=document.createElement("span");if(a.setAttribute("aria-hidden","true"),!o.trim())a.className="reveal-space",a.textContent=o,r.push(a);else{a.className="reveal-token";for(const l of o){const c=document.createElement("span");c.className="reveal-word",c.textContent=l,a.append(c),r.push(c)}}i.append(a)}return e.textContent=n,Bf.set(r,i),r}function A1(i,e,t,[n,s],r=1,o=!1){wd(Bf.get(i),hc((t-n)/(s-n+.14)),o),i.forEach((c,h)=>{const u=h/Math.max(1,i.length-1),d=hc((t-n-u*(s-n))/.14),p=String(d*r),g=`translateY(${o?0:(1-d)*9}px)`;c.style.opacity!==p&&(c.style.opacity=p),c.style.transform!==g&&(c.style.transform=g)});const a=hc((t-s-.02)/.15),l=String(a*r);wd(e,a,o),e.style.opacity!==l&&(e.style.opacity=l)}const lt="#d7a35c",an="#a7afad",Ai="#68c5b7",uc="#f2632a",R1=[null,"cell","organoid","organoid","organoid","protein","crystal",null],C1=["Thor XR-1 docked. Cassette elevator. Research carousel. Sealed payload cassette. Conceptual architecture.","Earth: 1 g. Tessera: microgravity. Sedimentation. Cell–cell contact.","Earth 3D culture. Orbit 3D culture. Illustrative three-dimensional cell model.","Patient-derived sample. Rare disease model. One donor. Illustrative disease marker.","Control and doses A to E. Four repeats. B2, C3 and D3 show illustrative signals to re-test.","Imaging. Morphology. Viability. Dose–response. Paired Earth control. Partner dataset. Next cassette. Conceptual data flow.","Nucleation. Growth. Mature. Earth crystals. Orbital crystals. Illustrative crystal growth. Return case.","Sealed return case. Research carousel. Cell therapy, protein crystals, patient model: example payloads. Thor undocking."];function P1(i){var e;const t=document.createElement("section");t.className="inside-tessera",t.hidden=!0,t.setAttribute("aria-label","Inside Tessera"),t.innerHTML=`<canvas class="inside-drawing" aria-hidden="true"></canvas><img class="inside-fallback" alt="" hidden>
 <div class="inside-copy story-copy"><div class="inside-heading"><h2></h2></div>
 <div class="inside-narration story-description"><p></p><p aria-hidden="true"></p><ol hidden></ol></div></div>
 <p class="inside-technical"></p>`,i.append(t);const n=t.querySelector("canvas"),s=n.getContext("2d"),r=t.querySelector("img"),o=t.querySelector("h2"),a=t.querySelector(".inside-heading"),l=t.querySelector(".inside-narration"),c=[...l.querySelectorAll("p")],h=l.querySelector("ol"),u=t.querySelector(".inside-technical");let d=[],p=[],g=null,_=null,m=null,f=!1,E=!0,y=null,M="",O="",I="",P=-1,U=0,K=0,x=!1;const b=S1();let G=null,k=0,z=null;const ne=w1(),q=b1();let ue=!1;const Y=new Map;let we=!1;const Te=F=>{F.preventDefault(),we=!0,O=""},Be=()=>{we=!1,O=""};n.addEventListener("contextlost",Te),n.addEventListener("contextrestored",Be);const nt=new Image;nt.decoding="async",nt.src=ri+"story-2d/bio/capsule.webp";let at=!1;nt.decode().then(()=>{at=!0,O=""}).catch(()=>{});let ce=null,ve=null,Ue=null,Ce=0;const $e=document.createElement("canvas"),Ye=$e.getContext("2d");function ct(){(ce||ve)&&(Ce++,ce=null,ve=null,$e.width=0,$e.height=0)}function At(){if(ve||x)return;const F=y.mobile,R=++Ce;Ue=F;const X=new Image;X.decoding="async",X.src=F?ri+"story-2d/inside-tessera/pill-roll-mobile.webp":ri+"story-2d/inside-tessera/pill-roll.webp",ve=X.decode().then(()=>{E&&R===Ce&&(ce=X,$e.width=X.naturalWidth/3,$e.height=X.naturalHeight/3,O="")}).catch(()=>{})}function mt(F,R,X,j){if(ce&&!x&&Ye){const v=ce.naturalWidth/3,w=ce.naturalHeight/3,T=4+4*Math.sin(K*Math.PI/18),N=Math.floor(T),A=Math.min(8,N+1);Ye.clearRect(0,0,v,w),Ye.globalCompositeOperation="lighter";const W=(J,ee)=>{Ye.globalAlpha=ee,Ye.drawImage(ce,J%3*v,Math.floor(J/3)*w,v,w,0,0,v,w)};W(N,1-(T-N)),W(A,T-N),s.drawImage($e,F-X/2,R-j/2,X,j)}else s.drawImage(nt,F-X/2,R-j/2,X,j)}function V(){return ne.prepare(),q.prepare(),m||(m=Promise.all([fetch(ri+"story-2d/inside-tessera/drawings.json").then(F=>{if(!F.ok)throw Error("Drawing load");return F.json()}),fetch(ri+"story-2d/inside-tessera/pill-contour.json").then(F=>F.json()).catch(()=>({points:[]}))]).then(([F,R])=>{E&&(_=F,g=s1(F.protein.frames),p=R.points,O="")}).catch(()=>{f=!0,O=""}),m)}const Zt=t.querySelector(".inside-copy");let ut=!0,dt="",Je=0,vt=0;function et(){var F;const R=i.clientWidth,X=i.clientHeight,j=`${R}:${X<=500}:${x}`;if(j!==dt){const w=Zt.cloneNode(!1);w.classList.add("inside-measure"),w.setAttribute("aria-hidden","true"),w.style.cssText="visibility:hidden;pointer-events:none;min-height:0",t.append(w),Je=0,vt=0;for(const T of Ga){w.innerHTML='<div class="inside-heading"><h2></h2></div><div class="inside-narration story-description"></div>',w.querySelector("h2").textContent=T.title;const N=w.querySelector(".inside-narration");N.innerHTML=x?"<ol>"+T.captions.map(A=>"<li>"+A+"</li>").join("")+"</ol>":T.captions.map(A=>"<p>"+A+"</p>").join(""),Je=Math.max(Je,w.querySelector(".inside-heading").offsetHeight),vt=Math.max(vt,N.offsetHeight)}w.remove(),dt=j,a.style.minHeight=Je+"px",l.style.minHeight=vt+"px"}const v=parseFloat(getComputedStyle(Zt).bottom)||34;y=yd(R,X,((F=document.querySelector(".site-nav"))==null?void 0:F.offsetHeight)||72,X-v-Je-vt),r.style.top=y.top+"px",r.style.height=y.height+"px",r.style.left=y.gutter+"px",r.style.width=y.w-2*y.gutter+"px",G=y,O="",ut=!1}const D=new ResizeObserver(()=>{ut=!0});D.observe(i),y=yd(i.clientWidth,i.clientHeight,((e=document.querySelector(".site-nav"))==null?void 0:e.offsetHeight)||72),document.fonts.ready.then(()=>{E&&(ut=!0,dt="")});function S(F,R=lt,X=1,j=1,v=1,w=[]){if(X<=.001||j<=0||F.length<2)return;s.strokeStyle=R,s.globalAlpha=X,s.lineWidth=v,s.setLineDash(w),s.beginPath(),s.moveTo(...F[0]);const T=(F.length-1)*On(j),N=Math.floor(T);for(let A=1;A<=N;A++)s.lineTo(...F[A]);N<F.length-1&&s.lineTo(Ve(F[N][0],F[N+1][0],T-N),Ve(F[N][1],F[N+1][1],T-N)),s.stroke(),s.setLineDash([]),s.globalAlpha=1}function Z(F,R,X,j,v=lt,w=1,T=1){w<=0||(s.globalAlpha=w,s.strokeStyle=v,s.lineWidth=1,s.beginPath(),s.ellipse(F,R,Math.max(.01,X),Math.max(.01,j),0,-Math.PI/2,-Math.PI/2+Math.PI*2*On(T)),s.stroke(),s.globalAlpha=1)}function re(F,R,X=2,j=lt,v=1){s.globalAlpha=v,s.fillStyle=j,s.beginPath(),s.arc(F,R,X,0,Math.PI*2),s.fill(),s.globalAlpha=1}function he(F,R,X=1,j=lt){if(X<=0)return;const v=x?1:1+.1*Math.sin(K*Math.PI);s.shadowColor=j,s.shadowBlur=8,re(F,R,2*v,j,X),s.shadowBlur=0}function ie(F,R,X,j=lt,v=1,w="left",T=11){v<=0||(s.globalAlpha=v,s.fillStyle=j,s.textAlign=w,s.font=`${T}px "IBM Plex Mono",monospace`,s.fillText(F,R,X),s.textAlign="left",s.globalAlpha=1)}function Pe(F,R,X,j,v=1,w=lt,T="left"){if(v<=0)return;const N=On(v),A=Math.floor(F.length*On((N-.35)/.65));S([R,[X+(T==="right"?8:-8),j-4],[X+(T==="right"?-8:8),j-4]],w,.68,Math.min(1,N/.4),.75),re(...R,1.5,w,.8),ie(F.slice(0,A)+(A<F.length?"▌":""),X,j-10,w,1,T,y.mobile?9:11)}function be(F,R,X,j,v=lt,w=.7,T=1){for(const[N,A]of[[-1,-1],[1,-1],[-1,1],[1,1]]){const W=F+N*X/2,J=R+A*j/2;S([[W-N*14,J],[W,J],[W,J-A*14]],v,w,T)}}function ye(F,R,X,j,v=lt,w=1,T=1,N=0,A=!0,W=3){if(!_||w<=.001||j<.1||T<=0)return;const J=_[F].frames,ee=(N%1+1)%1*J.length,te=Math.floor(ee),le=J[te],C=J[(te+1)%J.length],B=ee-te,se=(Re,me,de)=>[R+Ve(Re[0],C.paths[me][de][0],B)*j,X+Ve(Re[1],C.paths[me][de][1],B)*j],fe=le.paths.length*On(T/.78);s.strokeStyle=v,s.globalAlpha=w*.85,s.lineWidth=y.w>1440?1.25:1,s.beginPath();let pe;if(T>=.78&&(j<70||B<1e-5)){const Re=F+":"+te;let me=Y.get(Re);if(!me){me=new Path2D;for(const de of le.paths){me.moveTo(...de[0]);for(let ge=1;ge<de.length;ge++)me.lineTo(...de[ge])}Y.set(Re,me)}s.save(),s.translate(R,X),s.scale(j,j),s.lineWidth=(y.w>1440?1.25:1)/j,s.stroke(me),s.restore()}else for(let Re=0;Re<Math.min(Math.ceil(fe),le.paths.length);Re++){const me=le.paths[Re],de=(me.length-1)*Math.min(1,fe-Re),ge=Math.floor(de);s.moveTo(...se(me[0],Re,0));for(let _e=1;_e<=ge;_e++)s.lineTo(...se(me[_e],Re,_e));if(ge<me.length-1){const _e=se(me[ge],Re,ge),Ee=se(me[ge+1],Re,ge+1);pe=[Ve(_e[0],Ee[0],de-ge),Ve(_e[1],Ee[1],de-ge)],s.lineTo(...pe)}}if(s.stroke(),s.globalAlpha=1,pe&&T<.78&&he(...pe,w*.8,v),A&&T>.65){const Re=le.dots,me=Math.max(1,Math.ceil(Re.length/Math.max(10,j*j/16))),de=On((T-.65)/.35);s.fillStyle=v,s.beginPath();for(let ge=0;ge<Re.length*de;ge+=me){const _e=Re[ge],Ee=C.dots[ge],Ge=R+Ve(_e[0],Ee[0],B)*j,Ie=X+Ve(_e[1],Ee[1],B)*j;s.rect(Ge,Ie,1,1)}if(s.globalAlpha=w*.55,s.fill(),s.globalAlpha=1,!x&&W>0){s.beginPath();const ge=Math.floor(K);for(let _e=0;_e<Re.length;_e+=me){if((_e*37+ge*13)%100>=W)continue;const Ee=Re[_e],Ge=C.dots[_e];s.rect(R+Ve(Ee[0],Ge[0],B)*j,X+Ve(Ee[1],Ge[1],B)*j,1,1)}s.globalAlpha=w*.25*(.5+.5*Math.sin(K*Math.PI*2)),s.fill(),s.globalAlpha=1}}}function ft(F,R,X,j,v,w,T=lt,N="DETAIL / NOT TO SCALE",A=null){if(w<=0)return;if(y.mobile){Pe(N,v,y.gutter,y.bottom-5,w,T);return}const W=F==="cell"?[v,[R+(v[0]>=R?1:-1)*(j+6),X]]:[v,[R-j-20,X],[R-j,X]];S(W,T,.5,w,.75),be(R,X,2*j+12,2*j+12,T,.8,w),A==null?ye(F,R,X,j*.78,T,1,w,T===an?0:K/90):Me(R,X,j*.78,T,1,w,1,A),ie(N,R,X+j+24,T,w,"center",9)}function Me(F,R,X,j=lt,v=1,w=1,T=0,N=0,A=!0){const W=A?K/90:0;if(X*=A&&!x?1+.02*Math.sin(K*Math.PI/3):1,T<=0){ye("organoid",F,R,X,j,v,w,W);return}const J=X*.48*Ve(1,.6,N)*T,ee=F-X*.28,te=R-X*.16;s.save(),s.beginPath(),s.rect(F-X*2,R-X*2,X*4,X*4),s.moveTo(ee+J,te),s.arc(ee,te,J,0,Math.PI*2),s.clip("evenodd"),ye("organoid",F,R,X,j,v,w,W),s.restore(),s.save(),s.beginPath(),s.arc(ee,te,J,0,Math.PI*2),s.clip(),ye("organoid",F,R,X,uc,v,w,W),s.restore()}function ze(F,R,X,j,v,w=1,T=1){const N=R-j/2,A=R+j/2,W=Math.min(X*.16,j*.08);Z(F,N,X,W,v,w*.8,T),Z(F,A,X,W,v,w*.85,T),Z(F,A+4,X,W,v,w*.35,T);for(const J of[-1,1]){S([[F+J*X,N],[F+J*X,A]],v,w*.65,T);for(let ee=1;ee<6;ee++){const te=Ve(N,A,ee/6);S([[F+J*X,te],[F+J*(X+5),te]],v,w*.4,T)}}Z(F,R,X,W,v,w*.15,T)}function Ze(F,R=1){const X=y,j=F?1:-1;return X.mobile?{x:X.cx,y:X.cy+j*X.height*Ve(.14,.22,R),rx:X.w*.28,hh:X.height*Ve(.22,.28,R)}:{x:X.cx+j*X.w*Ve(.13,.245,R),y:X.cy,rx:X.w*Ve(.105,.18,R),hh:X.height*.67}}function it(F,R=28){const X=sc(F,R);return[y.cx+X[0]*y.unit*.67,y.cy+X[1]*y.unit*.67]}function De(F,R,X,j=lt,v=1){ye("cell",F,R,X,j,v,1,0,!0)}function gt(F,R,X=1,j=0,v=1){const w=y,T=Ze(F,X),N=w.mobile?14:28,A=F?lt:an;for(let W=0;W<N;W++){const J=sc(W,N),ee=F?0:On((R-.2-W*.001)/.35)**2;let te=T.x+J[0]*T.rx*.76,le=T.y+J[1]*T.hh*.38;if(!F)te=Ve(te,T.x+(W%7-3+Math.floor(W/7)%2*.24)*T.rx*.22,ee),le=Ve(le,T.y+T.hh*.4-Math.floor(W/7)*(w.mobile?5:9)-Math.sin(On((R-.48)/.07)*Math.PI)*2,ee);else{const fe=qe(R,.55,.85);let pe=null,Re=1/0;for(let me=0;me<N;me++){if(me===W)continue;const de=sc(me,N),ge=(de[0]-J[0])**2+(de[1]-J[1])**2;ge<Re&&(Re=ge,pe=de)}te+=(pe[0]-J[0])*T.rx*.76*fe*.3,le+=(pe[1]-J[1])*T.hh*.38*fe*.3}const C=it(W,N);te=Ve(te,C[0],j),le=Ve(le,C[1],j);const B=x?0:(1-ee)*Math.sin(K*.9+W*3.1)*2*(1-j),se=Ve(Math.min(w.mobile?9:14,T.rx*.07),w.unit*.12,j);if(!F&&ee>0&&ee<1)for(let fe=1;fe<=3;fe++)re(te,le-fe*4,1,A,(1-ee)*.15);De(te+B,le+B*.5,se,A,v*(F?1:1-qe(R,.85,1))),F&&R>.58&&W%3===0&&he(te+se*.6,le,qe(R,.58,.8)*.65*(1-j))}}function tt(F,R,X,j=1,v=1){const w={x:F,y:R,width:X*2,height:X*2*Uf,bank:0};return q.draw(s,w,v*j),f1(w)}function Mt(F,R,X,j=1,v=1){ye("cassette",F,R,X,lt,v,j)}function $(F,R,X,j=1,v=1){const w=Md(y,g,F,R,X);ye("protein",w.x,w.y,w.r,lt,v,j,K/60)}function Fe(F,R,X,j=lt,v=1,w=1){ye("crystal",F,R,X,j,w,v,j===an?0:K/60)}function ae(F,R,X,j,v){if(j===an)for(let w=0;w<3;w++)Fe(F+(w-1)*X*.45,R+w%2*X*.2,X*(.3+w*.1),j,v,.65);else Fe(F,R,X*.68,j,v)}function xe(F,R,X,j,v,w,T){v<=0||(S([j,[F-X-20,R],[F-X,R]],w,.5,v,.75),be(F,R,X*2+12,X*2+12,w,.8,v),ae(F,R,X*.9,w,Math.min(T,v)),ie("CRYSTAL DETAIL / NOT TO SCALE",F,R+X+24,w,v,"center",9))}function Le(F,R,X,j,v,w){const T=X*.63;S([[F-X,R-T],[F+X,R-T],[F+X,R+T],[F-X,R+T],[F-X,R-T]],j,.8,w),be(F,R,X*2+10,T*2+10,j,.4,w);for(const N of[-1,1])for(const A of[-1,1])Z(F+N*(X-6),R+A*(T-6),2,2,j,.8,w);for(let N=0;N<24;N++){const A=F+(N%6-2.5)*X*.29,W=R+(Math.floor(N/6)-1.5)*X*.28,J=X*.105;Z(A,W,J,J*.82,j,.65,w),Z(A,W,J*.88,J*.72,j,.2,w),(v>0||j===lt&&N<3&&w===1)&&ae(A,W,J,j,j===lt&&N<3?1:v)}ie("ASTREIA / RESEARCH CASSETTE",F,R+T+18,j,w,"center",y.mobile?7:9)}function Oe(F=0){const R=ac(y.w,y.h,F),X=ac(y.w,y.h).width/2;return{x:R.x,y:R.y,r:R.width/2,base:X}}function st(F,R,X=1,j=1){const v=Ed(F,R*.96,dh,lc(8.5,y.w,y.h,x),0);ne.ready&&ne.draw(s,v,{skin:0,outline:1,overlay:j*X},x)}function Ot({dock:F,transfer:R,payload:X},j,{returning:v=!1,undocking:w=!1}={}){const T=y;Pe(w?"THOR XR-1 · UNDOCK":"THOR XR-1 · DOCKED",F,T.w-T.gutter,T.top+24,j.thor,an,"right"),Pe("CASSETTE TRANSFER",R,T.gutter,T.top+50,j.transfer),Pe(v?"RETURN CASE · SEALED":"RESEARCH CASSETTE",X,T.gutter,T.bottom-12,j.payload),T.mobile||ft("cassette",T.w*.82,T.top+T.height*.23,T.unit*.27,X,j.detail,lt,"DETAIL / NOT TO SCALE")}function qt(F){const R=y,X=qe(F,.64,.96),j=1-qe(F,.72,.94),v=Oe(X),w=tt(v.x,v.y,v.r,1,j),{dock:T,slot:N,elevator:A}=w;st(T,v.r,1,j);const W=qe(F,.26,.56),J=W<.55?T:A,ee=W<.55?A:N,te=W<.55?W/.55:(W-.55)/.45;if(F>.2&&F<.96&&Mt(Ve(J[0],ee[0],te),Ve(J[1],ee[1],te),v.r*.075,qe(F,.2,.26),j),F<.64&&Ot({dock:T,transfer:A,payload:N},{thor:_i(F,.16,.22,.45,.58),transfer:_i(F,.25,.33,.52,.64),payload:_i(F,.4,.48,.56,.64),detail:_i(F,.3,.4,.52,.6)}),F>.68){const le=qe(F,.68,.96),C=Ve(.035,1,le),B=Ve(N[0],R.cx,le),se=Ve(N[1],R.h/2,le);s.save(),s.translate(B,se),s.scale(C,C),s.translate(-R.cx,-R.h/2);for(const fe of[0,1]){const pe=Ze(fe,0);ze(pe.x,pe.y,pe.rx,pe.hh,fe?lt:an,le)}gt(0,0,0,0,le),gt(1,0,0,0,le),s.restore()}}function xt(F){const R=y,X=qe(F,.02,.2),j=qe(F,.85,1);for(const w of[0,1]){const T=Ze(w,X),N=w?lt:an;if(ze(T.x,T.y,T.rx,T.hh,N,1-j),gt(w,F,X,w?j:0),F<.94&&ie(w?"TESSERA · MICROGRAVITY":"EARTH · 1 g",T.x,Math.max(R.top+5,T.y-T.hh/2-Math.min(T.rx*.16,T.hh*.08)-18),N,(1-j)*qe(F,.02,.12),"center",R.mobile?9:11),!w){const A=_i(F,.22,.3,.54,.61),W=T.y-T.hh*.2;S([[T.x,W],[T.x,W+T.hh*.28]],an,A),S([[T.x-4,W+T.hh*.28-6],[T.x,W+T.hh*.28],[T.x+4,W+T.hh*.28-6]],an,A),R.mobile||ie("SEDIMENTATION",T.x+12,W+12,an,A,"left",9),S([[T.x-T.rx*.8,T.y+T.hh*.42],[T.x+T.rx*.8,T.y+T.hh*.42]],an,1-j,qe(F,.45,.55))}}const v=Ze(1,X);R.mobile||ft("cell",R.cx,R.top+R.height*.13,R.unit*.18,[v.x-v.rx*.4,v.y],_i(F,.62,.7,.8,.84),lt,"CELL CONTACT / NOT TO SCALE")}const Ct=new WeakMap;function Jt(F){if(Ct.has(F))return Ct.get(F);const R=[0];for(let w=1;w<F.length;w++)R.push(R[w-1]+Math.hypot(F[w][0]-F[w-1][0],F[w][1]-F[w-1][1]));const X=R.at(-1),j=[];let v=1;for(let w=0;w<64;w++){const T=X*w/63;for(;v<F.length-1&&R[v]<T;)v++;const N=(T-R[v-1])/(R[v]-R[v-1]||1);j.push([Ve(F[v-1][0],F[v][0],N),Ve(F[v-1][1],F[v][1],N)])}return Ct.set(F,j),j}function Wn(F,R,X,j){const v=y,w=v.mobile?14:28,T=_.organoid.frames,N=K/90%1*T.length,A=Math.floor(N),W=N-A,J=T[A],ee=T[(A+1)%T.length],te=_.cell.frames[0],le=se=>{const fe=Jt(J.paths[se]),pe=Jt(ee.paths[se]);return fe.map((Re,me)=>[F+Ve(Re[0],pe[me][0],W)*X,R+Ve(Re[1],pe[me][1],W)*X])};for(let se=0;se<w;se++){const[fe,pe]=it(se,w),Re=v.unit*.12,me=se;for(let de=0;de<te.paths.length;de++){const ge=Jt(te.paths[de]),_e=le(7+me*3+Math.min(2,de)),Ee=_e.reduce((Ge,Ie)=>[Ge[0]+Ie[0]/64,Ge[1]+Ie[1]/64],[0,0]);S(ge.map((Ge,Ie)=>[Ve(fe+Ge[0]*Re,de<3?_e[Ie][0]:Ee[0],j),Ve(pe+Ge[1]*Re,de<3?_e[Ie][1]:Ee[1],j)]),lt,.85,1)}}const C=qe(j,.78,1);for(let se=0;se<J.paths.length;se++)(se<7||se>=7+w*3)&&S(le(se),lt,.85,C);const B=J.dots;for(let se=0;se<B.length;se+=3){const fe=B[se],pe=ee.dots[se];re(F+Ve(fe[0],pe[0],W)*X,R+Ve(fe[1],pe[1],W)*X,.5,lt,C*.55)}}function Pn(F,{x:R,y:X,r:j,seconds:v=K,reduced:w=x,ink:T=lt,alpha:N=1,disease:A=0,response:W=0,moving:J=!0,emberAlpha:ee=1,neutralAlpha:te=1,halo:le=0,groupGlow:C=0}){const B=J&&!w?v/90:0,se=J&&!w?1+.02*Math.sin(v*Math.PI/3):1;j*=se;const fe=[],pe=Math.max(0,1-Ky(A,v,w))*Ve(1,.6,W),Re=W>.5?Ai:"#C8622A";for(let ge=0;ge<=96;ge++){const _e=ge/96*Math.PI*2,Ee=.68*(1+.065*Math.sin(_e*5+1.1)+.04*Math.sin(_e*9-.4))*pe;fe.push([R+(-.6+Math.cos(_e)*Ee)*j,X+(-.6+Math.sin(_e)*Ee)*j])}const me=()=>{s.moveTo(...fe[0]);for(const ge of fe.slice(1))s.lineTo(...ge);s.closePath()};s.save(),s.shadowColor=T+"99",s.shadowBlur=C?8:0,A<.2||pe===0?ye("organoid",R,X,j,T,N*te,1,B,!0,0):(s.save(),s.beginPath(),s.rect(R-j*2,X-j*2,j*4,j*4),me(),s.clip("evenodd"),ye("organoid",R,X,j,T,N*te,1,B,!0,0),s.restore(),s.save(),s.beginPath(),me(),s.clip(),s.shadowColor=Re+"99",s.shadowBlur=le?8:0,ye("organoid",R,X,j,Re,N*ee,1,B,!0,2),s.restore()),s.restore();const de=ge=>{const _e=_.organoid.frames,Ee=(B%1+1)%1*_e.length,Ge=Math.floor(Ee),Ie=_e[Ge],St=_e[(Ge+1)%_e.length],rt=Ee-Ge,Ut=Math.cos(ge),on=Math.sin(ge);let kt=-1/0,cn=[R,X];return Ie.paths.forEach((gn,Ft)=>gn.forEach((ui,bi)=>{const Xn=Ve(ui[0],St.paths[Ft][bi][0],rt),Jn=Ve(ui[1],St.paths[Ft][bi][1],rt),es=Xn*Ut+Jn*on;es>kt&&(kt=es,cn=[R+Xn*j,X+Jn*j])})),cn};return{x:R,y:X,r:j,yaw:B*Math.PI*2,surface:de}}function Ln(F){const R=y,X=qe(F,0,.25),j=qe(F,.25,.34),v=qe(F,.85,1),w=j*(1-qe(F,.72,.85)),T=R.unit*.75,N={x:Ve(R.cx,R.mobile?R.cx:R.w*.72,j),y:Ve(R.cy,R.mobile?R.top+R.height*.71:R.cy,j)},A={x:R.mobile?R.cx:R.w*.28,y:R.mobile?R.top+R.height*.23:R.cy},W=uh(G),J=Ve(N.x,W.x,v),ee=Ve(N.y,W.y,v),te=Ve(R.mobile?T*.64:T,W.r,v);if(X===0){const le=R.mobile?14:28;for(let C=0;C<le;C++){const[B,se]=it(C,le);De(B,se,R.unit*.12)}}else X<1?Wn(J,ee,te,X):Pn(s,{x:J,y:ee,r:te,seconds:K,reduced:x});if(j>0&&v<1){const le=R.mobile?T*.64:T;Pn(s,{x:A.x,y:A.y,r:le,ink:an,alpha:w,moving:!1,reduced:x}),ie("EARTH · 3D CULTURE",A.x,A.y+le+24,an,w,"center",R.mobile?8:10),ie("ORBIT · 3D CULTURE",J,ee+te+24,lt,w,"center",R.mobile?8:10)}}function hi(F){b.draw(s,G,F,K,x,{path:S,dot:re,text:ie,aggregate:Pn})}function Yt(F){const R=y,X=qe(F,0,.2),j=qe(F,.8,1),v=qe(F,.52,.68),w=24,T=uh(G,1);for(let N=0;N<w;N++){const A=rc(N,R,j),W=Zy(T,A,F,N),{x:J,y:ee}=W,te=A.r*(1-j),le=Ls.includes(N),C=le?qe(F,.52+Ls.indexOf(N)*.04,.6+Ls.indexOf(N)*.04):0,B=(le?1:Ve(1,.35,qe(F,.64,.72)))*W.alpha;j<1&&B>0&&(Pn(s,{x:J,y:ee,r:W.r*(1-j),seconds:K,reduced:x,disease:1,response:C,alpha:B}),Z(J,ee,te,te,lt,(1-j)*B*W.dish,W.dish),Z(J,ee,te*1.12,te*1.12,lt,(1-j)*B*.4*W.dish,W.dish));const se=String.fromCharCode(65+Math.floor(N/6))+(N%6+1);ie(se,J+te+2,ee+te+6,lt,qe(F,.17,.22)*(1-j),"left",R.mobile?7:9),j>0&&(re(J,ee,Ve(1,3,j),le?Ai:lt,1),le&&he(J,ee,j*.7,Ai)),C>0&&(re(J+te*.7,ee-te*.7,3*C,Ai,1-j),N===14&&j<1&&he(J,ee,v*(1-j)));const fe=N%6;if(fe>0){const pe=On((F-(.22+fe*.04))/.1);if(pe>0&&pe<1)for(let Re=0;Re<(R.mobile?3:6);Re++){const me=Ve(R.top-10,ee,On(pe+Re*.02)),de=J+Math.sin(Re*3+K)*2;S([[de,me-10],[de,me]],Ai,.6),re(de,me,1.5,Ai)}}}if(F<.82){for(let N=0;N<6;N++){const A=rc(N,R);ie(N?"DOSE "+String.fromCharCode(64+N):"CONTROL",A.x,R.top+5,lt,X,"center",R.mobile?7:10)}if(R.mobile||ie("REPLICATES × 4",R.gutter,R.cy,an,X,"left",9),F>.5){const N=R.mobile?7:14;ie("● NO SIGNAL SHOWN",R.cx-N,R.bottom-3,an,v,"right",R.mobile?7:10),ie("● SIGNAL TO RE-TEST",R.cx+N,R.bottom-3,Ai,v,"left",R.mobile?7:10)}}}function Zn(F,R){if(R>=1){$(y.cx,y.cy,y.unit);return}const X=_.protein.frames,j=K/60%1*X.length,v=Math.floor(j),w=X[v],T=X[(v+1)%X.length],N=j-v,A=Md(y,g,y.cx,y.cy,y.unit),W=_1(w.paths,F.length),J=y.w>1440?1.25:1,ee=[[],[],[]];W.forEach((le,C)=>{const B=v1(F[C],w.paths[le.rail],T.paths[le.rail],le,A,N,R,C,F.length);B.forEach((se,fe)=>{ee[le.rail][le.start+fe]=se}),S(B,lt,Ve(.65,.85,R),1,J)});for(let le=3;le<w.paths.length;le++){const C=x1(R,le-3,w.paths.length-3);if(C>0){const B=(le-3)*3;S([ee[1][B],ee[2][B]],lt,.85,C,J)}}const te=qe(R,.82,1);if(te>0)for(let le=0,C=Math.max(1,Math.ceil(w.dots.length/Math.max(10,A.r*A.r/16)));le<w.dots.length;le+=C){const B=w.dots[le],se=T.dots[le];s.fillStyle=lt,s.globalAlpha=.55*te,s.fillRect(A.x+Ve(B[0],se[0],N)*A.r,A.y+Ve(B[1],se[1],N)*A.r,1,1)}s.globalAlpha=1}function Bt(F){const R=y,X=n1(F),j=X.construction,v=qe(F,0,.25),w=qe(j,.25,.38),T=[],N=[];for(let ee=0;ee<24;ee++){const te=rc(ee,R,1),le=_[R.mobile?"lattice-portrait":"lattice"].frames,C=K/120%1*le.length,B=Math.floor(C),se=le[B].dots[ee],fe=le[(B+1)%le.length].dots[ee],pe=Math.min(R.unit*(R.mobile?.84:1.08),R.height*(R.height<140?.12:R.height<220?.2:R.mobile?.25:.28)/(R.mobile?1.016:.755)),Re={x:R.cx+Ve(se[0],fe[0],C-B)*pe,y:R.cy+Ve(se[1],fe[1],C-B)*pe-R.height*.1};T.push({x:Ve(te.x,Re.x,v),y:Ve(te.y,Re.y,v)})}const A=1-qe(X.protein,0,.3);for(let ee=0;ee<24;ee++){const te=T[ee];for(const le of R.mobile?[ee%3<2?ee+1:-1,Math.floor(ee/3)%2<1?ee+3:-1,ee<18?ee+6:-1]:[ee%4<3?ee+1:-1,Math.floor(ee/4)%3<2?ee+4:-1,ee<12?ee+12:-1])if(le>=0){const C=T[le];N.push([[te.x,te.y],[C.x,C.y]]),X.protein===0&&S([[te.x,te.y],[C.x,C.y]],lt,.65,v),w>0&&S([[te.x+12,te.y-12],[C.x+12,C.y-12]],an,.3,w)}w>0&&(Ls.includes(ee)&&ie("Δ",te.x+8,te.y-14,uc,w,"left",8),re(te.x+12,te.y-12,2,an,w*.5),S([[te.x+12,te.y-12],[te.x,te.y]],Ls.includes(ee)?uc:an,.6,qe(j,.38,.48))),A>0&&(re(te.x,te.y,3*A,Ls.includes(ee)?Ai:lt),Ls.includes(ee)&&he(te.x,te.y,A*.7,Ai))}["IMAGING","MORPHOLOGY","VIABILITY","DOSE–RESPONSE"].forEach((ee,te)=>{const le=T[[0,3,20,23][te]],C=R.h<500;Pe(ee,[le.x,le.y],R.mobile?te%2?R.w-R.gutter:R.gutter:C?R.w*(te%2?.8:.2):le.x+(te%2?70:-70),R.mobile?R.top+54+(te<2?0:20):C?R.top+R.height*(te<2?.26:.48):le.y+(te<2?-40:40),qe(j,.1+te*.04,.2+te*.04),lt,te%2?"right":"left")});const W=qe(j,.5,.65),J=i1(R);if(j>.34&&ie("EARTH · PAIRED CONTROL",R.cx,J.labelY,an,qe(j,.34,.4),"center",R.mobile?8:10),W>0){const{x1:ee,x2:te,width:le,height:C,y:B,busY:se,edge:fe,railY:pe,labelY:Re,font:me}=J,de=T.reduce((Ie,St)=>St.y>Ie.y?St:Ie,T[0]),ge=de.y+6,_e=Math.min(se-5,ge+12);S([[de.x,ge],[de.x,_e],[R.cx,_e],[R.cx,se]],lt,.7,W);for(const[Ie,St]of[[ee,"DATA TRANSFER"],[te,"PARTNER DATASET"]])S([[R.cx,se],[Ie,se],[Ie,B-C/2]],lt,.7,W),be(Ie,B,le,C,lt,.8,W),ie(St,Ie,B+me*.35,lt,W,"center",me);const Ee=qe(j,.66,.76);S([[te+le/2,B],[fe,B],[fe,pe],[R.cx,pe]],lt,.45*W,Ee,.8,[3,6]),ie("NEXT CASSETTE",fe-4,Re,lt,qe(j,.68,.72)*W,"right",R.mobile?9:11);const Ge=Math.max(1,Math.min(8,Math.floor((se-_e)/12)));for(let Ie=0;Ie<Ge;Ie++){const St=(K*.25+Ie/Ge)%1;re(R.cx,Ve(_e,se,St),1.5,Ai,W)}}X.protein>0&&Zn(N,X.protein)}function ln(F){const R=y,X=qe(F,.36,.48),j=qe(F,.75,.86),v=qe(F,.84,.92),w=qe(F,.92,1),T=R.unit,N=R.mobile?Math.min(R.w*.37,Math.max(30,(R.height*.34-34)/1.26)):Math.min(R.w*.2,R.height*.4),A=R.mobile?[[R.cx,R.top+R.height*.18],[R.cx,R.top+R.height*.77]]:[[R.w*.27,R.cy],[R.w*.73,R.cy]];if(F<.48){$(R.cx,R.cy,T,1,1-qe(F,.12,.2));for(let W=0;W<3;W++){const J=qe(F,.36,.48),ee=A[1][0]+(W-2.5)*N*.29,te=A[1][1]-1.5*N*.28,le=Ve(R.cx+(W-1)*T*.9,ee,J),C=Ve(R.cy,te,J),B=Ve(T*(.16+W*.12),N*.105*.68,J),se=qe(F,.04+W*.05,.12+W*.05);Fe(le,C,B,lt,se),ie(["NUCLEATION","GROWTH","MATURE"][W],le,R.cy+T*.62,lt,se*(1-J),"center",R.mobile?8:11)}}if(X>0&&j<1)for(const[W,[J,ee]]of A.entries()){const te=Ve(J,R.cx,j),le=Ve(ee,R.cy,j),C=N*Ve(1,.18,j),B=W?lt:an;s.save(),s.translate(te,le),s.scale(Math.max(.08,1-j),1),Le(0,0,C,B,qe(F,.48,.6),X),s.restore(),j===0&&(ie(W?"ORBIT":"EARTH",J,ee-N*.75,B,X,"center",R.mobile?8:10),R.mobile||xe(J+N*.7,ee-N*.95,N*.18,[J+N*.145,ee-N*.42],_i(F,.4+W*.03,.48+W*.03,.68,.72),B,qe(F,.48,.6)))}if(F>.8){const W=Math.min(R.w*(R.mobile?.8:.48),R.height*1.8)*Ve(1,.2,w),J=W/2,ee=R.cx,te=R.cy;at&&(s.save(),s.beginPath(),s.rect(ee-W/2,te-J/2,W*v,J),s.clip(),s.globalAlpha=1-qe(F,.97,1),mt(ee,te,W,J),s.restore()),v<1&&(s.save(),s.beginPath(),s.rect(ee-W/2+W*v,te-J/2,W*(1-v),J),s.clip(),S(p.map(le=>[ee+le[0]*W,te+le[1]*J]),lt,.85,qe(F,.8,.84)),s.restore()),w>0&&(Mt(R.cx,R.cy,T*.55,w),Pe("RETURN CASE · SEALED",[R.cx+T*.3,R.cy],R.w-R.gutter,R.bottom-15,w,lt,"right"))}}function yn(F){const R=y,X=Df(F),j=X.pull,v=Oe(1-j),w=Ve(1,R.mobile?.7:.84,j);v.r*=w,v.base*=w,v.x=Ve(R.cx,v.x,w),v.y=Ve(R.cy,v.y,w)-R.height*.04*j;const T=qe(F,.04,.25),N=tt(v.x,v.y,v.r,1,T*(1-qe(F,.49,.65))),{dock:A,slot:W,elevator:J}=N;F<.08&&Pe("RETURN CASE · SEALED",[R.cx+R.unit*.3,R.cy],R.w-R.gutter,R.bottom-15,1-qe(F,0,.08),lt,"right");const ee=X.depart,te=v.r*.48,le=lc(Sd(F,R.mobile),R.w,R.h,x),C=dh,B=Ed(A,te*2,C,le,ee),se=E1(B),fe=X.load,pe=fe<.5?W:J,Re=fe<.5?J:se.approach,me=fe<.5?fe*2:(fe-.5)*2,de=[Ve(R.cx,Ve(pe[0],Re[0],me),j),Ve(R.cy,Ve(pe[1],Re[1],me),j)],ge=[Ve(de[0],se.center[0],X.insert),Ve(de[1],se.center[1],X.insert)];if(ne.ready&&ne.draw(s,B,ue?{...X,overlay:X.overlay*T}:{skin:0,outline:1,overlay:T},x),X.seal<1&&(s.save(),s.translate(...ge),s.rotate(B.bank*X.insert),Mt(0,0,Ve(Ve(R.unit*.55,v.base*.075,j),B.height*.17,X.insert),1,1-X.seal),s.restore()),ne.ready&&ne.drawHatch(s,B,X.hatch),F>.24&&F<.72&&Ot({dock:ee>0?[B.x,B.y]:A,transfer:J,payload:ge},{thor:_i(F,.3,.36,.64,.72),transfer:_i(F,.24,.3,.42,.46),payload:_i(F,.27,.34,.42,.46),detail:_i(F,.28,.34,.42,.46)},{returning:!0,undocking:ee>0}),ee>0&&ee<1&&!x)for(let _e=0;_e<12;_e++){const Ee=(K*2+_e/12)%1,Ge=B.width*.46+Ee*18;re(B.x+Math.cos(B.bank)*Ge,B.y+Math.sin(B.bank)*Ge,1,an,(1-Ee)*.6)}}const en=[qt,xt,Ln,hi,Yt,Bt,ln,yn];return{prepare:V,root:t,get handoffReady(){return ne.settled},render(F,R,X=!1,j=0,v=!1,w=1){if(!E||(ue=v,F>=5&&ne.prepare(),t.hidden=F<0||F>7,t.hidden))return;V(),x!==X&&(ut=!0),x=X,ut&&et(),K=X?0:j,F>=4&&F<=6?(Ue!=null&&Ue!==y.mobile&&ct(),At()):ct(),F===3?(P!==3||z==null?(k=R,b.reset()):k=Qy(k,R,j-z,X),z=j,R=k):z=null;const T=Nf(F,R,X),N=Ga[F],A=y;F===3?(T.pose=R,t.dataset.patientNarration=String(If(R).narration)):delete t.dataset.patientNarration,P!==F&&(P=F,d=T1(o,document.createElement("span"),N.title,""),u.textContent=C1[F],h.innerHTML=N.captions.map(C=>`<li>${C}</li>`).join(""),I=""),a.style.opacity="1",A1(d,l,X?1:R,[.02,.08],X?1:1-qe(R,.985,1),X),h.hidden=!X,c.forEach(C=>C.hidden=X);const W=F+":"+T.caption;W!==I&&(I=W,U=1-U,c[U].textContent=N.captions[T.caption],c[U].className="is-current",c[U].removeAttribute("aria-hidden"),c[1-U].className="",c[1-U].setAttribute("aria-hidden","true")),l.classList.remove("is-mission"),t.dataset.pose=String(T.pose),t.dataset.scene=String(F),t.dataset.caption=String(T.caption);const J=F===0||F===7;if(r.hidden=!!(s&&!we&&_&&(!J||q.ready&&ne.ready)),n.hidden=!r.hidden,!r.hidden){const C=F===7&&T.pose>.65,B=C?ri+"story-2d/thor-illustrated/thor.webp":J?ri+"story-2d/tessera-docking/tessera-frontal.webp":ri+"story-2d/inside-tessera/"+R1[F]+".svg";if(r.getAttribute("src")!==B&&(r.src=B),J){const se=C?lc(Sd(T.pose,A.mobile),A.w,A.h,x):ac(A.w,A.h);r.style.cssText=`left:0;top:0;width:${se.width}px;height:${se.height}px;transform:translate(${se.x-se.width/2}px,${se.y-se.height/2}px) rotate(${se.bank||0}rad)`}else r.style.cssText="";t.dataset.fallback=we?"context-lost":f?"failed":"pending";return}delete t.dataset.fallback;const ee=`${F}:${R}:${X}:${w}:${ue}:${ne.ready}:${q.ready}:${A.w}:${A.h}:${X?0:Math.floor(j*30)}`;if(O===ee)return;O=ee;const te=r1(A.w,A.h,w),le=`${A.w}:${A.h}:${te}`;le!==M&&(M=le,n.width=Math.round(A.w*te),n.height=Math.round(A.h*te)),s.setTransform(te,0,0,te,0,0),s.imageSmoothingQuality="high",s.clearRect(0,0,A.w,A.h),s.lineCap="round",s.lineJoin="round",s.save(),s.beginPath(),F===0||F===7&&T.pose>.6?s.rect(0,0,A.w,A.h):s.rect(A.gutter,A.top-16,A.w-A.gutter*2,A.height+32),s.clip();for(let C=0;C<85;C++){const B=A.gutter+C*73.137%1*(A.w-2*A.gutter),se=A.top+C*31.731%1*A.height;re(B,se,.55,lt,.1*(F===7?1-qe(T.pose,.72,.86):1))}en[F](T.pose),s.restore(),be(A.cx,(A.top+A.bottom)/2,A.w-A.gutter*2,A.height+24,lt,.4*(F===7?1-qe(T.pose,.72,.86):1))},hide(){t.hidden=!0,ct()},destroy(){E=!1,D.disconnect(),n.removeEventListener("contextlost",Te),n.removeEventListener("contextrestored",Be),t.remove(),_=null,ne.destroy(),q.destroy(),ct(),Y.clear()}}}const kf=i=>Math.max(0,Math.min(1,i)),dc=i=>(i=kf(i),i*i*(3-2*i)),ph=(i,e,t)=>i+(e-i)*t;function L1(i,e=!1){const t=kf(i),n=dc(t/.34);return{reveal:dc(t/.24),pill:dc((t-.06)/.22),scale:e?1:ph(.965,1,n),rise:e?0:ph(12,0,n)}}const I1=[{id:"reentry",startTime:8.68,length:328},{id:"parachute",startTime:9.5,length:340},{id:"splashdown",startTime:10.5,length:240},{id:"recovery",startTime:11.5,length:480}];I1.reduce((i,e)=>i+e.length,0);function D1(i,e,t=90,n=e-130){const s=i<=e,r=Math.min(e*.3,t+Math.min(24,e*.035)),o=Math.max(r+40,Math.min(e*.74,e-(s?208:125),n-24)),a=o-r;return{w:i,h:e,portrait:s,top:r,bottom:o,height:a,x:i/2,y:(r+o)/2,caseWidth:Math.min(i*(s?.7:.34),a*.78),organoidWidth:Math.min(i*(s?.82:.46),a*.94)}}const N1=i=>Math.max(0,Math.min(1,i)),zf=i=>{const e=N1(i);return e*e*e*(e*(e*6-15)+10)},mh={start:4.16,end:4.76};let U1=420;const Td=i=>i<=4.5?i-mh.start:4.5-mh.start+(i-4.5)*U1/350;function F1(i){const e=Math.max(0,Math.min(1,Td(i)/Td(mh.end))),t=zf((e-.42)/.5);return{progress:e,interior:t}}function O1(i,e=!1){const{progress:t,interior:n}=F1(i);return{cover:n,subjects:n<1?0:e?1:zf((t-.92)/.08)}}const B1=[...Ga,{id:"homecoming",label:"Complete the orbital loop",title:"Bring the progress home.",copy:"Tessera is being developed for orbital research and production. Thor is designed to bring the samples and materials home for testing and further development.",phase:"03 / Return to Earth",detail:"Tessera–1 and Thor XR–1 · In development"},{id:"for-people",label:"For life on Earth",title:"The destination is better care.",copy:"More useful disease models. Better ways to make medicines. Astreia is building access to orbit to help researchers turn those possibilities into better care on Earth.",phase:"03 / For people",detail:"Astreia · From Earth. For Earth."}],gh=[{id:"factory",label:"A new beginning",phase:"01 / Departure",title:"Extraordinary.<br>From the start.",copy:"Every discovery begins on Earth. A purpose-built platform. A payload full of possibility.",detail:"Tessera–1 / Mission preparation"},{id:"integration",label:"Payload integration",phase:"01 / Departure",title:"The next stop.<br>Somewhere above.",copy:"Tessera takes its place. Two fairing halves close around the platform, ready for launch.",detail:"Launch vehicle / Payload integration"},{id:"launch",label:"Liftoff",phase:"01 / Departure",title:"Leave Earth.<br>Keep the purpose.",copy:"One launch connects a question on Earth to a different environment in orbit.",detail:"Launch / Ascent"},{id:"separation",label:"Stage & fairing separation",phase:"01 / Departure",title:"Let go.<br>Go further.",copy:"The first stage falls away. The fairing opens. The orbital chapter begins.",detail:"Stage separation / Fairing release"},{id:"orbit",label:"Orbital operations",phase:"02 / Discovery",title:"A factory.<br>Above it all.",copy:"Tessera–1 is being developed for research and manufacturing in microgravity. Experiments ask what changes. Production asks whether it can be made reliably.",detail:"Tessera–1 / Platform in development"},...B1];function k1(){const i=new Map;return{set(e,t,n){i.has(e)||i.set(e,new Map),i.get(e).set(t,String(n))},flush(){let e=0;for(const[t,n]of i)for(const[s,r]of n)t.style[s]!==r&&(t.style[s]=r,e++);return i.clear(),e},clear(){i.clear()}}}function z1(i){const e=P1(i),t=k1(),n=t.set,s=matchMedia("(prefers-reduced-motion: reduce)"),r=document.createElement("section");r.className="research-story research-outcome",r.hidden=!0,r.innerHTML=`<div class="hospital-panel"><img class="hospital-background" src="${ri}story-2d/plate-hospital-happy.webp" alt="A patient in a hospital room" decoding="async"><div class="research-pill"><img src="${ri}story-2d/bio/capsule.webp" alt="Astreia medicine concept" decoding="async"></div></div>`,i.append(r);const o=r.querySelector(".hospital-panel"),a=r.querySelector(".research-pill");let l,c,h;function u(){var g;c=i.clientWidth,h=i.clientHeight,l=D1(c,h,((g=document.querySelector(".site-nav"))==null?void 0:g.offsetHeight)||78,h-Math.max(130,h*.22))}const d=new ResizeObserver(u);d.observe(i),u();const p=(g,_,m,f,E=0,y=1)=>{n(g,"width",`${f}px`),n(g,"transform",`translate3d(${_}px,${m}px,0) translate(-50%,-50%) rotate(${E}rad)`),n(g,"opacity",y)};return{render(g,_,{returnReady:m=!1,seconds:f=0,quality:E=1}={}){var y;const M=(y=gh[g])==null?void 0:y.id,O=Ga.findIndex(U=>U.id===M),I=g===4,P=O>=0;if(g>=3&&e.prepare(),i.dataset.inside=String(P),i.classList.toggle("research-active",P),i.classList.toggle("research-ending",M==="for-people"),P||I){const U=I?3.5+_:4.5+_,K=O1(U,s.matches);e.render(I?0:O,I?0:O===0?Math.max(0,(_-.29)/.71):_,s.matches,f,m,E),e.root.style.opacity=String(I||O===0?K.cover:1);const x=P?Nf(O,_,s.matches).pose:0,b=O===7&&m&&e.handoffReady?Df(x).reveal:0;e.root.style.backgroundColor=`rgba(10,10,10,${1-b})`,e.root.style.maskImage="none",e.root.querySelector(".inside-drawing").style.opacity=String(1),e.root.querySelector(".inside-fallback").style.opacity=String(1-b)}else M==="homecoming"&&!m?(e.render(7,1,s.matches,f,!1,E),e.root.style.opacity="1",e.root.style.backgroundColor="#0a0a0a",e.root.querySelector(".inside-fallback").style.opacity="1"):e.hide();if(r.hidden=M!=="for-people",!r.hidden){{const U=L1(_,s.matches),K=Math.min(c*(l.portrait?.8:.38),l.height*1.45);n(o,"opacity",m?U.reveal:1),p(a,c*(l.portrait?.58:.74),ph(l.top,l.bottom,l.portrait?.7:.64)+U.rise,K*U.scale,0,U.pill)}t.flush()}},destroy(){e.destroy(),d.disconnect(),t.clear(),r.remove(),delete i.dataset.inside,i.classList.remove("research-active","research-ending")}}}const H1=[["factory",120,"hangar","painted-dissolve","iris"],["integration",160,"hangar","iris","door"],["launch",220,"cape","door","ascent"],["separation",220,"orbit","ascent","scale-match"],["orbit",220,"orbit","scale-match","push-through"],["bioreactor",130,"bio-black","push-through","push-through"],["protein",420,"bio-black","push-through","scale-match"],["medicine",120,"bio-black","scale-match","iris"],["payload",180,"orbit","iris","scale-match"],["reentry",220,"orbit","scale-match","painted-dissolve"],["parachute",180,"ocean","painted-dissolve","scale-match"],["splashdown",150,"ocean","scale-match","scale-match"],["recovery",200,"ocean","scale-match","case"],["warehouse",130,"warehouse","case","window"],["hospital",200,"hospital","window","painted-dissolve"]];let fc=0;const Wa=H1.map(([i,e,t,n,s],r)=>{const o=fc;return fc+=e,{id:i,length:e,start:o,end:fc,pin:r!==14,plate:t,in:n,out:s,reveal:r===14?[.4,.58]:[.34,.54]}}),Ad=i=>Math.max(0,Math.min(1,i));function Hf(i,e,t,n){const s=t.replace(/<br\s*\/?>/g," "),r=[];i.replaceChildren(),i.setAttribute("aria-label",s);for(const o of s.split(/(\s+)/)){if(!o)continue;const a=document.createElement("span");if(a.setAttribute("aria-hidden","true"),!o.trim())a.className="reveal-space",a.textContent=o,r.push(a);else{a.className="reveal-token";for(const l of o){const c=document.createElement("span");c.className="reveal-word",c.textContent=l,a.append(c),r.push(c)}}i.append(a)}return e.textContent=n,r}function Vf(i,e,t,[n,s],r=1,o=!1){i.forEach((a,l)=>{const c=l/Math.max(1,i.length-1),h=Ad((t-n-c*(s-n))/.14);a.style.opacity=String(h*r),a.style.transform=`translateY(${o?0:(1-h)*9}px)`}),e.style.opacity=String(Ad((t-s-.02)/.15)*r)}const V1=[[.535,.431],[.535,.557]];function G1(i){const e=Math.cos(i[6]),t=Math.sin(i[6]);return V1.map(([n,s])=>{const r=(n-.5)*1.14*i[3],o=(.5-s)*1.14*i[3];return[i[0]+r*e-o*t,i[1]+r*t+o*e]})}const W1=i=>Math.max(0,Math.min(1,i)),X1=i=>{const e=W1(i);return e*e*e*(e*(e*6-15)+10)},_h={start:4.16,end:5.02},q1=Wa[5].length/Wa[4].length,Rd=i=>i<=4.5?i-_h.start:4.5-_h.start+(i-4.5)*q1;function Y1(i){const e=Math.max(0,Math.min(1,Rd(i)/Rd(_h.end))),t=X1((e-.42)/.5);return{progress:e,interior:t,reactorScale:.92+.26*t}}const bn=i=>{const e=Math.max(0,Math.min(1,i));return e*e*(3-2*e)},je=(i=0,e=0,t=1,n=0,s=1)=>[i,e,0,t,0,0,n,s],$1={tessera:[[0,je(0,.1,6.4)],[.45,je(0,.1,6.4)],[1,je(0,0,3.2)],[1.28,je(0,0,3.2)],[1.48,je(0,1.4,2,0,0)],[2.98,je(0,3.6,.65,0,0)],[3.12,je(0,3.6,.65)],[3.45,je(0,2.9,1.6)],[3.8,je(0,.5,5.5)],[4.1,je(0,.35,7.5)],[4.55,je(0,.35,7.5)],[5,je(0,0,8.4,0,0)]],rocket:[[1.48,je(0,-2,.55,0,0)],[1.72,je(0,-.3,1.05)],[2.05,je(0,-.3,1.05)],[2.3,je(.2,.1,1,-.12)],[2.5,je(.8,.7,.88,-.38)],[2.65,je(.8,.7,.88,-.38,0)]],booster:[[2.5,je(.11,-1.02,.88,-.38,0)],[2.65,je(.11,-1.02,.88,-.38)],[3.05,je(-.8,-2.3,1,-.18)],[3.6,je(-3,-5,.85,-.32)],[3.85,je(-5,-8,.7,-.42,0)]],"upper-stage":[[2.5,je(1.87,3.37,.88,-.38,0)],[2.65,je(1.87,3.37,.88,-.38)],[2.98,je(0,3.35,1.05)],[3.08,je(0,3.35,1.05,0,0)]],"second-stage":[[2.98,je(0,2.45,1.05,0,0)],[3.08,je(0,2.45,1.05)],[3.35,je(0,1.4,1.05)],[3.75,je(0,-3,.8)],[4,je(0,-6,.6,0,0)]]},pc=i=>bn((i-3.08)/.57),Ri={offset:.84,scale:4,entry:14,start:.2,sealed:1.3,hold:1.46};function j1(i){if(i<Ri.start)return{x:Ri.entry,alpha:0};const e=(i-Ri.start)/(Ri.sealed-Ri.start);if(e>=1)return{x:Ri.offset,alpha:1};const t=bn(e);return{x:Ri.entry-(Ri.entry-Ri.offset)*t,alpha:1}}function K1(i){i=Math.max(0,Math.min(14,i));const e={};for(const[M,O]of Object.entries($1))e[M]=ms(O,i);const t=bn((i-3.9)/.55);e["tessera-orbit"]=je(0,0,1,0,0),e.cart=je(0,0,1,0,0);for(const M of["reactor","protein","vial","thor"])e[M]=ms(ic[M],i);if(e.protein[6]=(i-6)*.14,e.reactor=ms([[4.65,je(0,0,.25,0,0)],[5,je(0,0,1.18)],[5.5,je(0,0,1.22)],[6,je(0,0,1.8,0,0)]],i),i<5){const M=Y1(i);e.reactor=je(0,0,M.reactorScale,0,M.interior)}e.protein=ms([[5.5,je(0,.6,.1,0,0)],[6,je(0,.6,.92)],[6.5,je(0,.6,.95,.12)],[7,je(0,0,.15,.2,0)]],i);const n=e.protein[7];e["protein-insulin"]=je(-4.8,1.1,.48,-.3+(i-6)*.13,n),e["protein-crambin"]=je(4.8,-.6,.48,.3-(i-6)*.1,n),i>7.35&&i<12.38&&(e.vial[7]*=1-bn((i-7.35)/.3)),i>=12.38&&(e.vial=ms([[12.38,je(0,-1,.8,0,0)],[12.67,je(0,-1.15,1.2)],...ic.vial.filter(([M])=>M>=13)],i)),e["payload-case"]=ms([[7.35,je(0,1.8,1.6,0,0)],[7.65,je(0,1.8,1.6)],[7.95,je(1.05,1.5,.85)],[8.25,je(1.05,-.05,.67)],[8.4,je(1.05,-.12,.62,0,0)],[8.55,je(1.05,-.12,.62,0,0)]],i);const s=bn((i-7.65)/.25)*(1-bn((i-8.38)/.22));e["thor-open"]=[...e.thor],e["thor-open"][7]*=s,e.thor[7]*=1-s;for(const[M,O]of[["fairing-left",-1],["fairing-right",1]]){const I=Ri;if(i<I.hold){const P=j1(i);e[M]=je(O*P.x,0,I.scale,0,P.alpha)}else e[M]=i<2?ms([[I.hold,je(O*I.offset,0,I.scale)],[1.74,je(O*.21,3.6,1,0,0)]],i):je(O*(.21+pc(i)*3.7),3.65-pc(i)*.8,1.05,-O*pc(i)*.42,bn((i-2.98)/.1)*(1-bn((i-3.6)/.25)))}const r=ms(ic.recovery,i);e.ship=[...r],e.ship[1]-=2.25,e.helicopter=[...r],e.helicopter[1]+=2.6;const o=.33735294602330657,a=.4529307719111538;e.helicopter[0]=e.thor[0]-(o-.5)*7.7*r[3];const l=bn((i-9.72)/.4),c=1-bn((i-11.04)/.18),h=bn((i-10.83)/.3),u=1.14*(.65+.35*l),d=G1(e.thor),p=(d[0][0]+d[1][0])/2,g=(d[0][1]+d[1][1])/2;e.chute=je(p,g+(2.65-1.55*h)*u,u,0,l*c),e.splash=je(e.thor[0],e.thor[1]-.22,e.thor[3]/4.5,0,bn((i-10.78)/.18)*(1-bn((i-11.55)/.45)));const _=e.helicopter[1]-(a-.5)*(7.7*911/2400)*r[3],m=e.thor[1]+.04;e.cable=je(e.thor[0],(_+m)/2,Math.max(.01,_-m)/2.8,0,r[7]);const f=e.rocket,E=4.35*f[3];e.flame=je(f[0]+Math.sin(f[6])*E,f[1]-Math.cos(f[6])*E,f[3],f[6],f[7]*bn((i-1.93)/.16)),e["pad-smoke"]=je(0,-4.6,1,0,bn((i-1.93)/.13)*(1-bn((i-2.2)/.32)));const y=1-bn((i-12.4)/.1);for(const M of["thor","thor-open","ship","helicopter","cable","chute","splash"])e[M][7]*=y;return{states:e,heat:qy(i),deployment:t,thorTurn:bn((i-8.65)/.9),inflation:l,deflation:h}}const Z1={width:2.8,height:1.4},J1={vial:Z1},Xa=i=>Math.max(0,Math.min(1,i)),Gt=i=>{const e=Xa(i);return e*e*(3-2*e)},zh=[{title:"Start with the structure.",copy:"Protein structures help researchers investigate how molecules interact. Each structure shown here is a different example.",note:"MOLECULAR STRUCTURES AT DIFFERENT SCALES · RCSB PDB 6VSB / 4INS / 1CRN"},{title:"Change the growth conditions.",copy:`Settling and gravity-driven currents can affect crystal growth.
Changing these conditions gives researchers a different process to study.`,note:"SEDIMENTATION + CONVECTION · SCHEMATIC, NOT MOLECULAR DEFORMATION"},{title:"Compare growth in orbit.",copy:`Reduced settling can change crystal growth.
An Earth control helps researchers compare size and uniformity.`,note:"PEMBROLIZUMAB · ISS EXPERIMENT · MORE UNIFORM CRYSTALLINE SUSPENSIONS",source:!0},{title:"Examine the protein.",copy:`Three chains. One molecular assembly.
Examining its structure helps researchers study interactions relevant to disease.`,note:"6VSB · CRYO-EM STRUCTURE · CHAIN A RBD: RESIDUES 319–541"},{title:"From data to a model.",copy:`From diffraction to density to an atomic model.
A structural model helps researchers form ideas that can be tested.`,note:"X-RAY WORKFLOW · SCHEMATIC · INSULIN 4INS · LIGAND IS ILLUSTRATIVE"},{title:"A sample. A next step.",copy:`Crystal size and uniformity matter in formulation research.
Further testing determines whether a result is useful on Earth.`,note:"FORMULATION RESEARCH · OUTCOMES DEPEND ON THE PROTEIN AND PROCESS"}];function Q1(i){const e=Xa(i)*6,t=zh.map((r,o)=>Gt((e-o+.14)/.3)*(o===5?1:1-Gt((e-o-.84)/.3))),n=Math.min(5,Math.floor(e)),s=Xa(e-n);return{q:e,beat:n,local:s,weights:t,focus:Gt(e/.5),settle:Gt((e-1.1)/.65),order:Gt((e-2.03)/.8),explode:Gt((e-3.08)/.52),pulse:Math.sin(Math.PI*Gt((e-3.55)/.35)),exit:Gt((e-5.72)/.28)}}const Gf=Array.from({length:125},(i,e)=>{const t=e%5-2,n=Math.floor(e/5)%5-2,s=Math.floor(e/25)-2;return{x:t,y:n,z:s,core:Math.max(Math.abs(t),Math.abs(n),Math.abs(s))<=1}}).sort((i,e)=>i.z-e.z),eM={2:[["Watch a crystal begin.","Under selected conditions, molecules gather around a growing nucleus. Microgravity provides a different environment to study this process."],["Compare how it grows.","Compare crystal growth with an Earth control. Size and uniformity depend on the protein and the process."]],3:[["See the whole protein.","The spike protein shown here has three chains. Its structure is one example of how researchers investigate a molecular assembly."],["Examine each chain.","Looking at individual chains helps researchers investigate how the parts of a protein fit together."],["Study the binding domain.","The receptor-binding domain helps the spike engage its receptor. Understanding that interaction can guide research questions."]],4:[["Start with an ordered crystal.","Crystallography uses ordered crystals to investigate molecular structure. This schematic follows an X-ray workflow."],["Capture the diffraction.","Scattered X-rays form a recorded pattern. Researchers use those measurements to investigate the crystal structure."],["Reconstruct the density.","Measurements and phase estimates produce a density map. Researchers fit and refine a model against the data."],["Explore possible interactions.","A structural model can suggest interactions to investigate. Those ideas still need experimental testing."]],5:[["Compare with an Earth control.","Measure crystal size and uniformity. A controlled comparison helps identify which conditions made a difference."],["Explore a formulation.","Study concentration, particle size and flow. Further testing determines whether the material is suitable for a formulation."],["Return for further study.","Prepare the research sample for transport. Analysis and development continue with the teams on Earth."]]};function tM(i){const e=Math.min(5,Math.floor(i)),t=Xa(i-e),n=eM[e];if(!n)return{...zh[e],key:String(e),opacity:1,progress:t};const s=n.length,r=Math.min(s-1,Math.floor(t*s)),o=t*s-r;return{title:n[r][0],copy:n[r][1],key:`${e}-${r}`,progress:o,opacity:Gt(o/.12)*(r===s-1?1:1-Gt((o-.88)/.12))}}const Wf="/astreia-preview/story-2d/",zn=(i,e="")=>`<img class="${e}" src="${Wf}${i}" alt="" draggable="false" decoding="async">`,vh=(i,e="0 0 1000 650")=>`<svg viewBox="${e}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${i}</svg>`,Cd=(i="")=>`<div class="molecule-lattice ${i}">${Gf.map((e,t)=>`<img data-site="${t}" src="${Wf}molecular-ribbons/insulin-lattice.webp" alt="">`).join("")}</div>`;function nM(){return vh(`<g fill="#E8E3D8">${Array.from({length:145},(i,e)=>{const t=1+Math.floor(e/24),n=e*2.399963,s=t*30;return`<circle cx="${500+Math.cos(n)*s}" cy="${325+Math.sin(n)*s}" r="${e%4===0?2.7:1.2}" opacity="${.3+e%7/12}"/>`}).join("")}</g>`)}function iM(i){const e=document.createElement("section");e.className="molecular-story",e.setAttribute("aria-label","Molecular research: from gravity to formulation"),e.hidden=!0,e.innerHTML=`<div class="molecular-art" aria-hidden="true">
 <div class="molecular-beat molecular-intro" data-beat="0"><figure>${zn("molecular-ribbons/spike.webp","molecular-float")}<figcaption>Spike <small>6VSB</small></figcaption></figure><figure>${zn("molecular-ribbons/insulin.webp","molecular-float")}<figcaption>Insulin <small>4INS</small></figcaption></figure><figure>${zn("molecular-ribbons/crambin.webp","molecular-float")}<figcaption>Crambin <small>1CRN</small></figcaption></figure></div>
 <div class="molecular-beat gravity-study" data-beat="1">${zn("molecular-ribbons/insulin-surface.webp","settling-insulin")}${vh(`<g class="solute">${Array.from({length:28},(k,z)=>`<circle cx="${230+z*137%530}" cy="${180+z*53%265}" r="${z%3===0?2:1}" style="--delay:${-z*.3}s"/>`).join("")}</g>`)} </div>
 <div class="molecular-beat orbit-study" data-beat="2">${Cd()}</div>
 <div class="molecular-beat chain-study" data-beat="3"><div class="chain-system">${zn("molecular-ribbons/spike.webp","chain-whole")}${["B","C","A"].map(k=>zn(`molecular-ribbons/chain-${k}.webp`,`chain chain-${k}`)).join("")}${zn("molecular-ribbons/rbd.webp","chain-rbd")}<div class="chain-labels"><span class="label-a">Chain A</span><span class="label-b">Chain B</span><span class="label-c">Chain C</span></div></div></div>
 <div class="molecular-beat pipeline-study" data-beat="4"><figure>${Cd("pipeline-lattice")}<figcaption>Crystal</figcaption></figure><figure>${nM()}<figcaption>Diffraction</figcaption></figure><figure><div class="density-study">${zn("molecular-ribbons/insulin-density.webp")}</div><figcaption>Density map</figcaption></figure><figure><div class="target-study">${zn("molecular-ribbons/insulin.webp")}${vh('<g stroke="#ff4e29" stroke-width="4" fill="#ff4e29"><path d="M610 250l22-12 22 12v25l-22 12-22-12Z" fill="none"/><path d="M654 250l22-12 20 12M632 287v24"/><circle cx="676" cy="238" r="5"/><circle cx="632" cy="311" r="5"/></g>')}</div><figcaption>Structure</figcaption></figure></div>
 <div class="molecular-beat formulation-study" data-beat="5"><div class="crystal-comparison"><figure>${zn("bio/crystals-earth.webp")}<figcaption>Earth control</figcaption></figure><figure>${zn("bio/crystals-microgravity.webp")}<figcaption>Microgravity experiment</figcaption></figure></div><div class="formulation-syringe">${zn("bio/syringe.webp")}</div>${zn("bio/vial.webp","formulation-ampoule")}${zn("bio/payload-case.webp","return-cassette")}<div class="sample-sheen"></div>${zn("bio/capsule.webp","formulation-capsule")}</div>
 </div><div class="molecular-caption"><h2></h2><p></p></div>`,i.parentElement.append(e);const t=[...e.querySelectorAll("[data-beat]")],n=e.querySelector(".molecular-art"),s=e.querySelector(".molecular-caption"),r=s.querySelector("h2"),o=s.querySelector("p"),a=t[0],l=e.querySelector(".settling-insulin"),c=[...e.querySelectorAll(".chain")],h=e.querySelector(".chain-whole"),u=e.querySelector(".chain-rbd"),d=e.querySelector(".chain-labels"),p=e.querySelector(".formulation-capsule"),g=t[2].querySelector(".molecule-lattice"),_=e.querySelector(".crystal-comparison"),m=e.querySelector(".formulation-syringe"),f=e.querySelector(".formulation-ampoule"),E=e.querySelector(".return-cassette"),y=e.querySelector(".sample-sheen"),M=[...t[2].querySelectorAll("[data-site]")],O=[...t[4].querySelectorAll("[data-site]")],I=[...t[4].children];e.append(p);const P=matchMedia("(prefers-reduced-motion: reduce)");let U=null,K=-1,x=[];const b=k=>{e.hidden||P.matches||(n.style.setProperty("--parallax-x",`${(k.clientX/innerWidth-.5)*8}px`),n.style.setProperty("--parallax-y",`${(k.clientY/innerHeight-.5)*6}px`))};window.addEventListener("pointermove",b,{passive:!0});function G(k,z,ne=!1){k.forEach((q,ue)=>{const Y=Gf[ue],we=Y.core?Gt(z*3):Gt((z-.34)*2),Te=(Y.x-Y.z*.55)*13.4,Be=(Y.y+Y.z*.4)*13.4;q.style.left=`${50+Te}%`,q.style.top=`${50+Be}%`,q.style.width=`${ne?14:13}%`,q.style.opacity=String(we*(.38+(Y.z+2)*.14)),q.style.transform=`translate(-50%,-50%) scale(${.55+.45*we})`})}return G(O,1,!0),{render(k,z){const ne=k===6||k===7&&z<.5;if(e.hidden=!ne,!ne){K=-1;return}const q=`${k}:${z}:${i.clientWidth}:${i.clientHeight}`;if(K===q)return;K=q;const ue=k===7,Y=Q1(ue?1:z);e.dataset.beat=String(Y.beat),e.style.opacity=String(ue?1:Gt(z/.045)),t.forEach((he,ie)=>{he.style.opacity=String(ue?0:Y.weights[ie]),he.style.visibility=!ue&&Y.weights[ie]>.001?"visible":"hidden"}),a.style.filter=`blur(${(1-Y.focus)*6}px)`,a.style.transform=`scale(${.92+Y.focus*.08})`,l.style.transform=`translate(-50%, -50%) translateY(${Y.settle*50}px) rotate(${-8+Y.settle*8}deg)`,g.style.opacity=String(Gt((Y.q-2.01)/.16)),G(M,Y.order),c.forEach(he=>{const ie=he.className.split("chain-")[1],Pe={A:[130,-45],B:[-145,-40],C:[-70,125]}[ie];he.style.transform=`translate(${Pe[0]*Y.explode/10}%,${Pe[1]*Y.explode/10}%)`,he.style.opacity=String(Gt(Y.explode*5))}),h.style.opacity=String(1-Gt(Y.explode*5)),u.style.transform=`translate(${13*Y.explode}%,${-4.5*Y.explode}%)`;const we=Gt((Y.q-3.65)/.17);u.style.opacity=String(we*.82),c.forEach(he=>{he.style.opacity=String(Gt(Y.explode*5)*(1-we*.5))}),d.style.opacity=String(Gt((Y.explode-.4)/.6)*(1-we)),I.forEach((he,ie)=>{const Pe=(Y.q-4)*4-ie,be=Gt((Pe+.12)/.25)*(ie===3?1:1-Gt((Pe-.88)/.25));he.style.opacity=String(be),he.style.visibility=be>.001?"visible":"hidden",he.style.transform=`translateY(${(1-be)*12}px) scale(${.94+.06*be})`});const Te=Gt((Y.q-5.29)/.14),Be=Gt((Y.q-5.54)/.1),nt=Gt((Y.q-5.62)/.15),at=Gt((Y.q-5.82)/.1);_.style.opacity=String(1-Te),_.style.transform=`scale(${1-Te*.08})`,m.style.opacity=String(Te*(1-Be)),m.style.transform=`translateY(${(1-Te)*20}px)`,f.style.opacity=String(Te*(1-Be)),f.style.transform=`translateY(${(1-Te)*18}px)`,E.style.opacity=String(nt),E.style.transform=`translate(-50%,-50%) scale(${.9+.1*nt})`,y.style.opacity=String(Te*(1-Be));const ce=i.clientWidth,ve=i.clientHeight,Ue=ce<=ve,Ce=Math.min(ve/13.5,ce/16),$e=K1(ue?6.5+z:6.5).states.vial,Ye=J1.vial,ct=Ye.width*$e[3]*Ce,At=Ye.height*$e[3]*Ce,mt=ce*(Ue?.92:.9),V=ve*(Ue?.57:.65),Zt=ce*(Ue?.04:.05),ut=ve*(Ue?.13:.12),dt=mt*(Ue?.42:.26),Je=dt*Ye.height/Ye.width,vt=Zt+mt*(Ue?.68:.72),et=ut+V*(Ue?.55:.58),D=ue?1:Y.exit,S=(he,ie)=>he+(ie-he)*D;p.style.width=`${S(dt,ct)}px`,p.style.height=`${S(Je,At)}px`,p.style.left=`${S(vt,ce/2+$e[0]*Ce)}px`,p.style.top=`${S(et,ve/2-$e[1]*Ce)}px`,p.style.transform=`translate(-50%,-50%) rotate(${-$e[6]*180/Math.PI*D}deg)`,p.style.opacity=String(ue?1-$e[7]:Y.weights[5]*at),p.style.visibility=ue||Y.weights[5]*at>.001?"visible":"hidden",t[5].style.opacity=String(ue?0:Y.weights[5]*(1-Y.exit));const Z=tM(Y.q);Z.key!==U&&(U=Z.key,x=Hf(r,o,Z.title,Z.copy)),Vf(x,o,Z.progress,[.02,.16],1,P.matches);const re=Gt(Y.local/.14)*(Y.beat===5?1:1-Gt((Y.local-.86)/.14));s.style.opacity=String(ue?0:re*Z.opacity*(1-Y.exit))},destroy(){window.removeEventListener("pointermove",b),e.remove()}}}const sM=`
 <span class="thermal-model-title">THERMAL DIFFUSION<br>MODEL (TDM)</span>
 <math class="thermal-model-equation" xmlns="http://www.w3.org/1998/Math/MathML" display="block" aria-label="p sub i of T equals e to the power z sub i over T, divided by the sum over j of e to the power z sub j over T">
  <mrow>
   <msub><mi>p</mi><mi>i</mi></msub><mo stretchy="false">(</mo><mi>T</mi><mo stretchy="false">)</mo><mo>=</mo>
   <mfrac>
    <msup><mi mathvariant="normal">e</mi><mrow><mo>(</mo><msub><mi>z</mi><mi>i</mi></msub><mo>/</mo><mi>T</mi><mo>)</mo></mrow></msup>
    <mrow><msub><mo>∑</mo><mi>j</mi></msub><msup><mi mathvariant="normal">e</mi><mrow><mo>(</mo><msub><mi>z</mi><mi>j</mi></msub><mo>/</mo><mi>T</mi><mo>)</mo></mrow></msup></mrow>
   </mfrac>
  </mrow>
 </math>`;function rM(i){const e=document.createElement("div");e.className="thermal-scale",e.setAttribute("role","img"),e.setAttribute("aria-label","Thermal view: relative intensity, low to high"),e.innerHTML='<span class="thermal-scale-label thermal-scale-high">HIGH</span><span class="thermal-scale-label thermal-scale-mid">RELATIVE<br>INTENSITY</span><span class="thermal-scale-label thermal-scale-low">LOW</span><span class="thermal-scale-ruler"></span><span class="thermal-scale-spectrum"></span>',i.append(e);const t=n=>{e.style.opacity=String(n),e.setAttribute("aria-hidden",n<.01?"true":"false")};return t(0),{render:t,destroy(){e.remove()}}}const oo=new H;function ii(i,e,t,n,s,r){const o=2*Math.PI*s/4,a=Math.max(r-2*s,0),l=Math.PI/4;oo.copy(e),oo[n]=0,oo.normalize();const c=.5*o/(o+a),h=1-oo.angleTo(i)/l;return Math.sign(oo[t])===1?h*c:a/(o+a)+c+c*(1-h)}class _r extends Pt{constructor(e=1,t=1,n=1,s=2,r=.1){if(s=s*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,s,s,s),s===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new H,l=new H,c=new H(e,t,n).divideScalar(2).subScalar(r),h=this.attributes.position.array,u=this.attributes.normal.array,d=this.attributes.uv.array,p=h.length/6,g=new H,_=.5/s;for(let m=0,f=0;m<h.length;m+=3,f+=2)switch(a.fromArray(h,m),l.copy(a),l.x-=Math.sign(l.x)*_,l.y-=Math.sign(l.y)*_,l.z-=Math.sign(l.z)*_,l.normalize(),h[m+0]=c.x*Math.sign(a.x)+l.x*r,h[m+1]=c.y*Math.sign(a.y)+l.y*r,h[m+2]=c.z*Math.sign(a.z)+l.z*r,u[m+0]=l.x,u[m+1]=l.y,u[m+2]=l.z,Math.floor(m/p)){case 0:g.set(1,0,0),d[f+0]=ii(g,l,"z","y",r,n),d[f+1]=1-ii(g,l,"y","z",r,t);break;case 1:g.set(-1,0,0),d[f+0]=1-ii(g,l,"z","y",r,n),d[f+1]=1-ii(g,l,"y","z",r,t);break;case 2:g.set(0,1,0),d[f+0]=1-ii(g,l,"x","z",r,e),d[f+1]=ii(g,l,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-ii(g,l,"x","z",r,e),d[f+1]=1-ii(g,l,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-ii(g,l,"x","y",r,e),d[f+1]=1-ii(g,l,"y","x",r,t);break;case 5:g.set(0,0,-1),d[f+0]=ii(g,l,"x","y",r,e),d[f+1]=1-ii(g,l,"y","x",r,t);break}}}const Pd=i=>{const e=Math.max(0,Math.min(1,i));return e*e*e*(e*(e*6-15)+10)},oM=i=>Pd((i-8.72)/.28)*(1-Pd((i-9.1)/.32)),aM=(i,e,t)=>i+(e-i)*(1-Math.exp(-t/150)),mc=9.8,Da=(()=>{const i=[];let e=7;const t=()=>(e=e*16807%2147483647,e/2147483647);for(let n=0;n<20;n++){const s=96*Math.pow(.79,n),r=.2+(t()-.5)*2.1*(n<4?.6:1);i.push([Math.cos(r),Math.sin(r),Math.min(.12,.05+.06*t())*(n<3?.8:1),s])}return i})(),Sa=Da.filter(i=>i[3]>=14);function lM({sunDir:i,horizon:e,zenith:t}){const r=new En(4e3,4e3,320,320);r.rotateX(-Math.PI/2);const o={uTime:{value:0},uSun:{value:i.clone()},uHorizon:{value:e.clone()},uZenith:{value:t.clone()},uCell:{value:4e3/320},uDeep:{value:new Xe(70175)},uScatter:{value:new Xe(744810)},uFoamBoost:{value:0},uFoamCenter:{value:new Ke},uFoamRadius:{value:0}},a=h=>h.map(u=>{const d=Math.hypot(u[0],u[1]);return`vec4(${(u[0]/d).toFixed(4)},${(u[1]/d).toFixed(4)},${u[2].toFixed(3)},${u[3].toFixed(2)})`}).join(","),l=new rn({uniforms:o,vertexShader:`
   uniform float uTime,uCell;varying vec3 vWorld;varying vec2 vRest;varying float vCrest;
   const vec4 W[${Sa.length}]=vec4[](${a(Sa)});
   void main(){
    vec3 p=(modelMatrix*vec4(position,1.)).xyz;vec3 g=p;float crest=0.;
    for(int i=0;i<${Sa.length};i++){
     vec4 w=W[i];float k=6.28318/w.w,c=sqrt(${mc}/k),a=w.z/k;
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
   const vec4 W[${Da.length}]=vec4[](${a(Da)});
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
    for(int i=0;i<${Da.length};i++){
     vec4 w=W[i];float k=6.28318/w.w,c=sqrt(${mc}/k);
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
   }`}),c=new Ae(r,l);return c.frustumCulled=!1,{mesh:c,uniforms:o,follow(h){const u=Math.max(1,h.position.y/30),d=4e3*u/320;c.scale.set(u,1,u),o.uCell.value=d,c.position.set(Math.round(h.position.x/d)*d,0,Math.round(h.position.z/d)*d)},heightAt(h,u,d){let g=h,_=u,m=0;for(let f=0;f<2;f++){let E=0,y=0;m=0;for(const[M,O,I,P]of Sa){const U=Math.hypot(M,O),K=M/U,x=O/U,b=2*Math.PI/P,G=Math.sqrt(mc/b),k=I/b,z=b*(K*g+x*_-G*d),ne=Math.min(1,Math.max(0,(P/12.5-3)/3)),q=ne*ne*(3-2*ne);E+=q*K*k*Math.cos(z),y+=q*x*k*Math.cos(z),m+=q*k*Math.sin(z)}g=h-E,_=u-y}return m}}}const Xf=(i,e=0,t=1)=>Math.max(e,Math.min(t,i)),bt=(i,e,t)=>{const n=Xf((t-i)/(e-i));return n*n*n*(n*(n*6-15)+10)},pt=(i,e,t)=>i+(e-i)*t,Et=(i,e,t)=>new H(i,e,t);function cM({environment:i,fg:e,bg:t,camera:n,bgCamera:s,tex:r,assets:o,tesseraPivot:a,thorPivot:l,globe:c,earthMat:h,cloudMat:u,skyMat:d,starMat:p,atmoMat:g,R:_,reduced:m}){const f=new Ae(new yo(1,64),new sn({color:197636}));f.visible=!1,a.add(f);function E(C){const B=a.userData.hatch;if(!B){f.visible=!1;return}f.position.copy(B).add(Et(0,0,.012)),f.scale.setScalar(Math.max(.001,.42*C)),f.visible=C>.001}const y=(()=>{const B=document.createElement("canvas");B.width=B.height=128;const se=B.getContext("2d"),fe=se.createImageData(128,128),pe=(ge,_e)=>{const Ee=Math.sin(ge*127.1+_e*311.7)*43758.5453;return Ee-Math.floor(Ee)},Re=(ge,_e)=>{const Ee=Math.floor(ge),Ge=Math.floor(_e),Ie=ge-Ee,St=_e-Ge,rt=Ie*Ie*(3-2*Ie),Ut=St*St*(3-2*St);return(pe(Ee,Ge)*(1-rt)+pe(Ee+1,Ge)*rt)*(1-Ut)+(pe(Ee,Ge+1)*(1-rt)+pe(Ee+1,Ge+1)*rt)*Ut},me=(ge,_e)=>{let Ee=0,Ge=.5;for(let Ie=0;Ie<5;Ie++)Ee+=Ge*Re(ge,_e),ge*=2.1,_e*=2.1,Ge*=.5;return Ee};for(let ge=0;ge<128;ge++)for(let _e=0;_e<128;_e++){const Ee=_e/128*2-1,Ge=ge/128*2-1,Ie=Math.hypot(Ee,Ge*1.15),St=Math.max(0,Math.min(1,(1-Ie*1.25+(me(_e/14,ge/14)-.5)*1.1)*2.2)),rt=.72+.28*(1-ge/128)+.08*(me(_e/9+7,ge/9)-.5),Ut=(ge*128+_e)*4;fe.data[Ut]=255*rt,fe.data[Ut+1]=250*rt,fe.data[Ut+2]=244*Math.min(1,rt+.04),fe.data[Ut+3]=255*St*St*(3-2*St)}se.putImageData(fe,0,0);const de=new La(B);return de.colorSpace=Wt,de})(),M=[];for(let C=0;C<46;C++){const B=new gx(new Mf({map:y,color:16775407,transparent:!0,depthWrite:!1,opacity:0,fog:!1,toneMapped:!1}));B.userData={d:2+C*37%60,x:(C*53%100/100-.5)*1.9,y:(C*71%100/100-.5)*1.3,size:3+C*29%14},B.visible=!1,e.add(B),M.push(B)}function O(C){const B=(C-9.4)/.21999999999999886,se=Math.sin(Math.PI*Xf(B))**2.2,fe=Et(0,0,-1).applyQuaternion(n.quaternion),pe=Et(1,0,0).applyQuaternion(n.quaternion),Re=Et(0,1,0).applyQuaternion(n.quaternion);for(const me of M){const de=me.userData.d-B*70;me.visible=B>0&&B<1&&de>.6,me.visible&&(me.position.copy(n.position).addScaledVector(fe,de).addScaledVector(pe,me.userData.x*de).addScaledVector(Re,me.userData.y*de),me.scale.setScalar(me.userData.size*(.5+de/30)),me.material.opacity=se*Math.min(1,de/3)*.9,me.material.rotation=me.userData.x*3)}}const I=new Fh(14674175,0,14,1.6);e.add(I);const P=new ci({color:14674158,roughness:.06,metalness:0,transparent:!0,opacity:.28,clearcoat:1}),U=new yt({color:2764339,roughness:.36,metalness:.85}),K=new yt({color:12172996,roughness:.28,metalness:1}),x=new yt({color:15885098,roughness:.45,metalness:.1});function b(){const C=new jt,B=new Ae(new _r(1.6,.5,1,6,.08),U);C.add(B);const se=new Ae(new _r(1.1,.06,.6,4,.03),P);se.position.y=.26,C.add(se);const fe=new rn({uniforms:{phase:{value:0}},transparent:!0,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float phase;varying vec2 vUv;void main(){float w=.55+.45*sin(vUv.x*40.-phase*6.);vec3 c=mix(vec3(.86,.34,.38),vec3(1.,.72,.5),w);gl_FragColor=vec4(c*(.75+.5*w),.95);}"});for(let Re=0;Re<4;Re++){const me=new Ae(new vi(.035,.035,.95,12),fe);me.rotation.z=Math.PI/2,me.position.set(0,.24,-.21+Re*.14),C.add(me)}const pe=new Ae(new Pt(.18,.08,.5),x);return pe.position.set(.72,.22,0),C.add(pe),C.userData.flow=fe,C}const G=new Er;G.background=new Xe(460808);const k=new co(10466248,657415,.35);G.add(k);const z=new So(16770760,40,20,.55,.7,1.5);z.position.set(-3,4,3),G.add(z,z.target);const ne=new So(11060479,30,20,.6,.8,1.5);ne.position.set(3.5,2,-3),G.add(ne,ne.target);const q=b();G.add(q);const ue=new _n(30,1,.05,100);G.environment=i,G.environmentIntensity=.5;{const C=new Ae(new yo(6,64),new yt({color:789774,roughness:.32,metalness:.2}));C.rotation.x=-Math.PI/2,C.position.y=-.45,G.add(C)}const Y=new Er;Y.background=new Xe(14672869),Y.fog=new Za(14672869,18,70),Y.add(new co(16777215,9080980,.72));const we=new Os(16777215,1.6);we.position.set(5,12,7),we.castShadow=!0,we.shadow.mapSize.set(1024,1024),Object.assign(we.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:40}),Y.add(we);const Te=new Ae(new En(200,200),new yt({color:11449270,roughness:.14,metalness:.05}));Te.rotation.x=-Math.PI/2,Te.receiveShadow=!0,Y.add(Te);const Be=new sn({color:15909424});for(const C of[-4.2,4.2]){const B=new Ae(new En(.12,90),Be);B.rotation.x=-Math.PI/2,B.position.set(C,.01,-30),Y.add(B)}const nt=new sn({color:new Xe(4,4,3.9),fog:!1}),at=new vr(new Pt(1.2,.05,1.2),nt,70);let ce=0;const ve=new _t;for(let C=-3;C<=3;C++)for(let B=0;B<10;B++)ve.makeTranslation(C*3.2,8,-B*5+6),at.setMatrixAt(ce++,ve);Y.add(at);const Ue=new yt({color:2051978,roughness:.5,metalness:.4}),Ce=new yt({color:15890970,roughness:.5,metalness:.3}),$e=new yt({color:15330542,roughness:.6}),Ye=new vr(new Pt(.12,7,.12),Ue,32),ct=new vr(new Pt(.08,.14,5.2),Ce,64),At=new vr(new Pt(.9,.55,1.1),$e,192);let mt=0,V=0,Zt=0;for(const C of[-8,8])for(let B=0;B<8;B++){const se=-B*5.6;for(const fe of[-.6,.6])ve.makeTranslation(C+fe,3.5,se),Ye.setMatrixAt(mt++,ve);for(let fe=0;fe<4;fe++){const pe=.4+fe*1.7;ve.makeTranslation(C,pe,se),ct.setMatrixAt(V++,ve);for(let Re=0;Re<3;Re++)(B*7+fe*3+Re)%5!==0&&(ve.makeTranslation(C,pe+.36,se-1.6+Re*1.6),At.setMatrixAt(Zt++,ve))}}At.count=Zt,Y.add(Ye,ct,At);const ut=new Ae(new Pt(14,3.4,.06),P);ut.position.set(0,1.7,-6),Y.add(ut);const dt=new Ae(new Pt(14,.12,.12),K);dt.position.set(0,3.4,-6),Y.add(dt);const Je=new yt({color:14014940,roughness:.32,metalness:.55}),vt=new jt,et=new Ae(new _r(2.2,.06,1.1,3,.02),Je);et.position.y=.92,vt.add(et);const D=et.clone();D.position.y=.25,vt.add(D);for(const[C,B]of[[-1.02,-.48],[1.02,-.48],[-1.02,.48],[1.02,.48]]){const se=new Ae(new vi(.025,.025,.92,12),Je);se.position.set(C,.46,B),vt.add(se)}const S=b();S.scale.setScalar(.7),S.position.y=1.12,vt.add(S),vt.traverse(C=>{C.isMesh&&(C.castShadow=C.receiveShadow=!0)}),Y.add(vt);const Z=new _n(32,1,.05,200),re=new Er;re.background=new Xe(1708557),re.add(new co(16769732,2759957,.42));const he=new Ae(new En(3.2,4.2),new sn({color:new Xe(1.6,1.45,1.2)}));he.position.set(0,2.4,-3.96),re.add(he);const ie=new yt({color:3812902,roughness:.8});for(const C of[-.53,.53]){const B=new Ae(new Pt(.06,4.2,.06),ie);B.position.set(C,2.4,-3.92),re.add(B)}{const C=new Ae(new Pt(3.2,.06,.06),ie);C.position.set(0,2.9,-3.92),re.add(C)}const Pe=new yt({color:13481888,roughness:.9}),be=new Ae(new Pt(10,6,10),Pe);be.material.side=Tn,be.position.set(0,3,1),be.receiveShadow=!0,re.add(be);const ye=new Os(16766630,3.2);ye.position.set(.6,3.6,-6),ye.castShadow=!0,ye.shadow.mapSize.set(1024,1024),Object.assign(ye.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:1,far:20}),re.add(ye,ye.target);const ft=new Ae(new Pt(1.2,.7,.7),new yt({color:15328476,roughness:.6}));ft.position.set(.9,.35,-1.2),re.add(ft);const Me=new jt,ze=new Ae(new vi(.07,.07,.26,32),P);Me.add(ze);const Ze=new Ae(new vi(.062,.062,.16,32),new yt({color:15976870,roughness:.2,transparent:!0,opacity:.85}));Ze.position.y=-.04,Me.add(Ze);const it=new Ae(new vi(.075,.075,.06,32),x);it.position.y=.16,Me.add(it),Me.position.set(.75,.83,-1.15),re.add(Me);const De=new jt,gt=new yt({color:15986664,roughness:.9}),tt=new Ae(new _r(2.1,.35,1.1,4,.12),gt);tt.position.y=.75,De.add(tt);const Mt=new Ae(new _r(.5,.16,.8,4,.07),gt);Mt.position.set(-.75,1,0),De.add(Mt);const $=new Ae(new _r(1.3,.08,1.16,3,.04),new yt({color:10466500,roughness:.95}));$.position.set(.35,.95,0),De.add($);const Fe=new Ae(new Pt(2.2,.08,1.2),new yt({color:12172996,roughness:.4,metalness:.7}));Fe.position.y=.55,De.add(Fe),De.position.set(-1.1,0,-1.9),De.rotation.y=.05,re.add(De);const ae=new Ae(new En(1.1,4.4,24,1),new yt({color:15722200,roughness:.95,side:wn}));{const C=ae.geometry.attributes.position;for(let B=0;B<C.count;B++)C.setZ(B,Math.sin(C.getX(B)*14)*.06);ae.geometry.computeVertexNormals()}ae.position.set(2.1,2.4,-3.85),re.add(ae);const xe=new sn({color:16769976,transparent:!0,opacity:.045,blending:Pi,depthWrite:!1,side:wn});for(let C=0;C<3;C++){const B=new Ae(new En(1,6),xe);B.position.set(-.9+C*.9,2.1,-2.2),B.rotation.set(-.75,0,.05*C),re.add(B)}const Le=new Ae(new vi(.18,.14,.32,24),new yt({color:15195599,roughness:.7}));Le.position.set(1.35,.86,-1.3),re.add(Le);for(let C=0;C<7;C++){const B=new Ae(new _s(.12,10,8),new yt({color:5995850,roughness:.8}));B.scale.set(.45,1.1,.18),B.position.set(1.35+Math.sin(C*2.1)*.1,1.12+C*.03,-1.3+Math.cos(C*2.1)*.1),B.rotation.z=Math.sin(C)*.6,re.add(B)}re.traverse(C=>{C.isMesh&&C!==he&&(C.castShadow=C.receiveShadow=!0)});const Oe=new _n(34,1,.05,100);re.environment=i,re.environmentIntensity=.85;const st=new jt;st.visible=!1,e.add(st);const Ot=new H(-.82,.2,-.54).normalize(),qt=new Xe(1.02,.8,.62),xt=new Xe(.16,.34,.62),Ct=lM({sunDir:Ot,horizon:qt,zenith:xt});st.add(Ct.mesh);const Jt=new Os(16768180,3.2);Jt.castShadow=!0,Jt.shadow.mapSize.set(1024,1024),Object.assign(Jt.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:400}),st.add(Jt,Jt.target);const Wn=new sn({transparent:!0,depthWrite:!1,opacity:0,fog:!1});r.load("/astreia-preview/story-2d/descent/cloud-bank.webp",C=>{C.colorSpace=Wt,Wn.map=C,Wn.needsUpdate=!0});const Pn=[];for(let C=0;C<8;C++){const B=new Ae(new En(180,42),Wn);B.userData.seed=C,st.add(B),Pn.push(B)}const Ln=480,hi=new Qt,Yt=new Float32Array(Ln*3),Zn=[];for(let C=0;C<Ln;C++){const B=Math.random()*Math.PI*2,se=Math.random();Zn.push([Math.cos(B)*(2+8*se),5+11*Math.random()*(1-se*.6),Math.sin(B)*(2+8*se)])}hi.setAttribute("position",new An(Yt,3));const Bt=(()=>{const C=document.createElement("canvas");C.width=C.height=64;const B=C.getContext("2d"),se=B.createRadialGradient(32,32,0,32,32,32);return se.addColorStop(0,"rgba(255,255,255,1)"),se.addColorStop(.45,"rgba(255,255,255,.55)"),se.addColorStop(1,"rgba(255,255,255,0)"),B.fillStyle=se,B.fillRect(0,0,64,64),new La(C)})(),ln=new el({color:15922679,size:.55,map:Bt,transparent:!0,opacity:0,depthWrite:!1}),yn=new Va(hi,ln);yn.frustumCulled=!1,st.add(yn),st.add(new co(12572415,731712,.7));const en=new jt;e.add(en),en.visible=!1;const F={value:0};function R(C){const B=C.clone();return B.onBeforeCompile=se=>{se.uniforms.uHeat=F,se.vertexShader=se.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLocal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLocal=position;`),se.fragmentShader=se.fragmentShader.replace("#include <common>",`#include <common>
uniform float uHeat;varying vec3 vLocal;
vec3 heatRamp(float x){vec3 a=vec3(.16,.04,.26),b=vec3(.52,.08,.55),c=vec3(.93,.29,.2),d=vec3(1.,.8,.2),e=vec3(1.,.98,.85);return x<.25?mix(a,b,x/.25):x<.5?mix(b,c,(x-.25)/.25):x<.75?mix(c,d,(x-.5)/.25):mix(d,e,(x-.75)/.25);}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
float field=clamp(1.-(vLocal.x+1.55)/3.1,0.,1.);field=pow(field,1.4)*.85+.15;
gl_FragColor.rgb=mix(gl_FragColor.rgb,heatRamp(field),uHeat);`)},B.customProgramCacheKey=()=>"thermal",B}let X=!1;function j(){if(X||!o.thor)return;X=!0;const C=o.thor.clone(!0);C.traverse(B=>{B.isMesh&&(B.material=R(B.material),B.castShadow=!0)}),C.rotation.set(0,0,0),C.position.set(0,0,0),C.scale.setScalar(1.6),en.add(C)}const v=new sn({color:new Xe(1,.42,.26),transparent:!0,blending:Pi,depthWrite:!1,opacity:0,side:wn});r.load("/astreia-preview/story-2d/thermal-scene/plasma-volume-v3.webp",C=>{C.colorSpace=Wt,C.repeat.set(1/4,1/6),v.map=C,v.needsUpdate=!0});const w=new Ae(new En(1,1),v);en.add(w);const T=new jt;st.add(T);{const C=new En(22,6,44,6);C.rotateX(-Math.PI/2);const B=C.attributes.position,se=[];for(let me=0;me<B.count;me++){const de=B.getX(me),ge=B.getZ(me);B.setY(me,2.6*(1-(de/11)**2)+.35*Math.cos(ge/3*Math.PI/2));const _e=Math.min(10,Math.floor((de+11)/22*11)),Ee=Math.abs((de+11)/2%1-.5)<.04,Ge=_e<=0||_e>=10?[.15,.17,.19]:_e===1||_e===9?[.95,.38,.14]:[.94,.93,.89];se.push(...Ge.map(Ie=>Ee?Ie*.8:Ie))}C.computeVertexNormals(),C.setAttribute("color",new Nt(se,3));const fe=new Ae(C,new ci({vertexColors:!0,roughness:.62,sheen:.6,sheenRoughness:.5,sheenColor:new Xe(1,.95,.9),side:wn}));fe.position.y=12,fe.castShadow=!0,T.add(fe);const pe=[];for(let me=0;me<=20;me++){const de=-10+me,ge=12+2.6*(1-(de/11)**2);for(const _e of[-2.6,2.6])pe.push(de,ge,_e,de*.04,0,_e*.05)}const Re=new Ef(new Qt().setAttribute("position",new Nt(pe,3)),new ka({color:7236454,transparent:!0,opacity:.22}));T.add(Re)}const N=(()=>{const C=document.createElement("canvas");C.width=C.height=256;const B=C.getContext("2d"),se=B.createRadialGradient(128,128,40,128,128,128);se.addColorStop(0,"rgba(255,255,255,0)"),se.addColorStop(.55,"rgba(255,255,255,.9)"),se.addColorStop(.75,"rgba(255,255,255,.35)"),se.addColorStop(1,"rgba(255,255,255,0)"),B.fillStyle=se,B.fillRect(0,0,256,256);for(let pe=0;pe<900;pe++){const Re=Math.random()*Math.PI*2,me=60+Math.random()*60;B.fillStyle=`rgba(255,255,255,${Math.random()*.5})`,B.beginPath(),B.arc(128+Math.cos(Re)*me,128+Math.sin(Re)*me,Math.random()*3,0,7),B.fill()}const fe=new La(C);return fe.colorSpace=Wt,fe})(),A=new Ae(new En(1,1),new sn({map:N,transparent:!0,depthWrite:!1,opacity:0}));A.rotation.x=-Math.PI/2,A.position.y=.15,st.add(A);const W=new jt;st.add(W);{const C=new Ae(new Pt(40,3,16),new yt({color:2041389,roughness:.42,metalness:.35}));C.position.y=.6,W.add(C);const B=new Ae(new Pt(39,.2,15.2),new yt({color:3883077,roughness:.85}));B.position.y=2.2,W.add(B);const se=new Ae(new tl(4.2,4.6,64),new sn({color:15987178}));se.rotation.x=-Math.PI/2,se.position.y=2.32,W.add(se);for(const ge of[-16,16]){const _e=new Ae(new Pt(5,3.2,5.5),new yt({color:14277851,roughness:.5}));_e.position.set(ge,3.9,4.5),W.add(_e)}const fe=new yt({color:15885098,roughness:.45,metalness:.3}),pe=new Ae(new vi(.5,.6,7,16),fe);pe.position.set(-12,5.7,-5),W.add(pe);const Re=new Ae(new Pt(14,.6,.6),fe);Re.position.set(-6,9,-5),Re.rotation.z=.32,W.add(Re),[3104138,9058858,13157046,3104138].forEach((ge,_e)=>{const Ee=new Ae(new Pt(6,2.6,2.5),new yt({color:ge,roughness:.6,metalness:.3}));Ee.position.set(10+_e%2*6.2,3.6+Math.floor(_e/2)*2.62,-5),W.add(Ee)});const de=new yt({color:14277076,roughness:.4,metalness:.6});for(const ge of[-7.6,7.6]){const _e=new Ae(new Pt(38,.08,.08),de);_e.position.set(0,3.3,ge),W.add(_e);const Ee=new vr(new Pt(.08,1.1,.08),de,20);for(let Ge=0;Ge<20;Ge++){const Ie=new _t().makeTranslation(-19+Ge*2,2.8,ge);Ee.setMatrixAt(Ge,Ie)}W.add(Ee)}W.traverse(ge=>{ge.isMesh&&(ge.castShadow=ge.receiveShadow=!0)})}W.position.set(-46,0,10);const J=new jt;st.add(J);const ee=new jt;let te=!1;const le=new Qa(new Qt().setFromPoints([Et(0,0,0),Et(0,-1,0)]),new ka({color:1119512}));return st.add(le),{bio:G,bioCam:ue,lab:Y,labCam:Z,care:re,careCam:Oe,idle(){I.intensity=0},prepare(){if(j(),!te&&o.helicopter){te=!0;const C=o.helicopter;C.scale.setScalar(1),J.add(C);const B=[];C.traverse(fe=>{fe.isMesh&&/^blade\d/.test(fe.name)&&B.push(fe)});const se=C.getObjectByName("rotorcap");if(se&&B.length){const fe=new Vn().setFromObject(se).getCenter(Et(0,0,0));C.worldToLocal(fe),ee.position.copy(fe),C.add(ee);for(const pe of B)pe.getWorldPosition(Et(0,0,0)),ee.attach(pe)}C.traverse(fe=>{fe.isMesh&&(fe.castShadow=!0)})}},pose(C,B,se,fe){const pe={scene:"world",fade:0,fadeColor:"#000",heat:0},Re=q.userData.flow;if(Re.uniforms.phase.value=m?C*4:C*4+B*.6,S.userData.flow.uniforms.phase.value=Re.uniforms.phase.value,C<5){const Ee=a.userData.hatch||Et(0,0,.8),Ge=a.localToWorld(Ee.clone()),Ie=Et(0,0,1).applyQuaternion(a.quaternion).normalize(),St=bt(4.5,4.75,C),rt=bt(4.7,4.995,C),Ut=Ge.clone().addScaledVector(Ie,pt(9,.22,rt));return E(bt(4.72,4.92,C)),n.position.lerp(Ut,St),n.up.set(0,1,0),n.lookAt(Ge),n.fov=fe.fov,n.updateProjectionMatrix(),I.position.copy(n.position),I.intensity=5*St,pe}n.fov=fe.fov,n.updateProjectionMatrix(),I.intensity=0,f.visible=!1;for(const Ee of M)Ee.visible=!1;if(C<7.5){pe.scene="bio";const Ee=bt(5,5.3,C)*(1-bt(7.36,7.5,C));z.intensity=40*Ee,ne.intensity=30*Ee,k.intensity=.35*Ee;const Ge=pt(-.5,.6,bt(5,7.4,C));q.rotation.set(.12,Ge,0);const Ie=bt(5.45,5.6,C)*(1-bt(6.95,7.05,C));return q.visible=Ie<.999,ue.position.set(Math.sin(Ge*.3)*3.2,1.7+pt(0,-.3,bt(6.9,7.4,C)),pt(9,4.4,bt(5,5.45,C))*(1-.1*bt(6.9,7.4,C))*pt(1,.35,bt(7.36,7.5,C))),ue.lookAt(0,.1,0),z.target.position.set(0,0,0),ne.target.position.set(0,0,0),pe.bioDim=Ie,pe}if(C<8.5){const Ee=bt(7.5,7.72,C),Ge=a.localToWorld((a.userData.hatch||Et(0,0,.8)).clone()),Ie=Et(0,0,1).applyQuaternion(a.quaternion).normalize();E(1-bt(7.6,7.72,C));const St=bt(7.7,8.1,C),rt=bt(8.15,8.35,C),Ut=Ge.clone().addScaledVector(Ie,.2),on=l.localToWorld(Et(1.4,0,.3));q.visible=!1,pe.transfer={from:Ut,to:on,move:St},l.position.addScaledVector(Et(Math.cos(-.52),Math.sin(-.52),0),rt*1.6);const kt=a.position.clone().add(Et(1.1,-.9,.8)),cn=kt.clone().add(Et(pt(3,5,rt),pt(2.2,3.2,rt),pt(8.5,11,rt))),gn=Ge.clone().addScaledVector(Ie,.22);return n.position.copy(gn.lerp(cn,Ee)),n.lookAt(Ge.clone().lerp(kt,Ee)),pe}if(C<9.5){j(),l.visible=!1,a.visible=!1,en.visible=!0,st.visible=!1;const Ee=bt(8.5,9.5,C),Ge=Math.sin(Ee*Math.PI*1.6)*.35;en.position.copy(a.position).add(Et(0,-30*Ee,0)),en.rotation.set(-.25+Ge*.3,.4,-.38+Ge),n.position.copy(en.position).add(Et(-3.5,4.2,10.5)),n.lookAt(en.position);const Ie=oM(C);pe.heat=m?Ie:aM(fe.heat,Ie,se),F.value=pe.heat;const St=en.worldToLocal(n.position.clone()),rt=m?1:.85+.3*pe.heat;w.rotation.set(Math.atan2(-St.y,St.z),0,Ge*.06),w.scale.set(9*rt,3.4,1),w.position.set(-3.3+4.5*rt,0,0),v.opacity=pe.heat;const Ut=Math.floor(((m?0:B*10)+C*56)%24);return v.map&&v.map.offset.set(Ut%4/4,1-(Math.floor(Ut/4)+1)/6),s.position.set(0,_+pt(420,150,Ee)+.05,0),g.uniforms.strength.value=1.6+.25*pe.heat,h.color.setRGB(pt(1,.34,pe.heat),pt(1,.42,pe.heat),pt(1,.72,pe.heat)),u.color.setRGB(pt(1,.3,pe.heat),pt(1,.34,pe.heat),pt(1,.48,pe.heat)),pe.exposure=pt(1,.8,pe.heat),O(C),pe}if(h.color.setRGB(1,1,1),u.color.setRGB(1,1,1),F.value=0,v.opacity=0,C<12.5){j(),pe.scene="sea",l.visible=!1,a.visible=!1,en.visible=!0,st.visible=!0,c.visible=!1,p.opacity=0,d.uniforms.space.value=0,d.uniforms.studio.value=0,d.uniforms.hor.value.copy(qt),d.uniforms.zen.value.copy(xt),d.uniforms.sunDir.value=Ot,s.position.set(0,_+.4,0),d.uniforms.sea.value=1;const Ee=m?C*6:B,Ge=bt(9.5,10.8,C),Ie=bt(10.76,10.82,C);Ct.uniforms.uTime.value=Ee;const St=Math.pow(1-Ge,1.7),rt=bt(12,12.3,C),Ut=bt(12.3,12.45,C),on=Et(pt(-80,-34,bt(11.35,11.9,C)),0,26);W.position.set(on.x,Ct.heightAt(on.x,on.z,Ee)*.3-.2,on.z),W.rotation.y=.25;let kt=pt(0,140,St),cn=pt(0,-60,St),gn=1500*St;const Ft=Ct.heightAt(kt,cn,Ee),ui=(m?0:Math.sin(B*1.25))*.13*(1-Ie)+(1-Ge)*0;let bi=Ft+.3;Ie>0&&(gn=pt(gn,bi,Ie));const Xn=pt(kt,on.x,rt),Jn=pt(cn,on.z,rt),es=pt(gn,pt(18,3.2,Ut),rt);en.position.set(Xn,es,Jn);const nl=Ct.heightAt(Xn+2,Jn,Ee)-Ct.heightAt(Xn-2,Jn,Ee),Ms=Ct.heightAt(Xn,Jn+2,Ee)-Ct.heightAt(Xn,Jn-2,Ee);en.rotation.set(pt(ui*.6,Ms*.18,Ie)*(1-rt),.5,pt(ui,-nl*.18,Ie)*(1-rt));const Gr=bt(9.5,9.66,C),$t=bt(10.84,11.25,C),Qn=m?0:Math.sin(B*2.1)*.03,Wr=bt(10.95,11.15,C);T.visible=Gr>.001&&Wr<.999,T.position.set(kt-pt(0,14,$t),pt(gn,Ft-.6*Wr,$t),cn-pt(0,10,$t)),T.rotation.set(0,.5,pt(ui*.5,0,Ie)+$t*.25),T.scale.set(.35+.65*Gr,Math.max(.06,(1+Qn)*(1-.9*$t)),.5+.5*Gr),T.traverse(Nn=>{Nn.material&&(Nn.material.transparent=!0,Nn.material.opacity=Nn.isLineSegments?.22*(1-Ie):(1-$t*.5)*(1-Wr))});for(const Nn of Pn)Nn.visible=!1;const In=Math.max(0,(C-10.78)*5.5);if(yn.visible=In>0&&In<2.2,ln.opacity=.9*(1-bt(.8,2.2,In)),yn.visible){const Nn=Yt;for(let ss=0;ss<Ln;ss++){const Ss=Zn[ss];Nn[ss*3]=kt+Ss[0]*In,Nn[ss*3+1]=Math.max(Ft,bi+Ss[1]*In-4.9*In*In),Nn[ss*3+2]=cn+Ss[2]*In}hi.attributes.position.needsUpdate=!0}const tn=bt(10.78,11.6,C);Ct.uniforms.uFoamCenter.value.set(kt,cn),Ct.uniforms.uFoamRadius.value=tn>0?4+16*tn:0,Ct.uniforms.uFoamBoost.value=1-tn*.7;const ts=bt(11.45,11.85,C),Fi=Et(pt(160,Xn,ts),pt(80,es+24,ts),pt(-90,Jn,ts));J.visible=C>11.4,J.position.copy(Fi),J.rotation.set(0,pt(2.4,1.7,ts),pt(-.15,0,ts)),ee.rotation.y=m?C*40:B*28;const Hs=bt(11.85,11.98,C)*(1-bt(12.42,12.5,C));le.visible=J.visible&&Hs>.01;const Vs=J.position.clone().add(Et(0,-1.2,0)),Dn=Vs.clone().lerp(en.position.clone().add(Et(0,.6,0)),Hs);le.geometry.setFromPoints([Vs,Dn]);const Xr=Et((Xn+on.x+Fi.x)/3,(es+3+Fi.y)/3+2,(Jn+on.z+Fi.z)/3),ns=n.aspect<1?68:46,is=n.aspect<1?0:7,il=Et(kt+6,gn+10,cn+ns),Ao=Et(kt+20,Ft+8,cn+22),Ro=Xr.clone().add(Et(34,20,62)),Co=il.clone().lerp(Ao,bt(10.55,10.85,C)).lerp(Ro,bt(11.25,11.75,C)),qn=Et(kt-is*.99,gn+5-is*.2,cn+is*.15).lerp(Et(kt,Ft+.5,cn),bt(10.55,10.85,C)).lerp(Xr,bt(11.25,11.75,C));n.position.copy(Co),n.lookAt(qn),s.quaternion.copy(n.quaternion),Ct.follow(n),Jt.target.position.copy(qn),Jt.position.copy(qn).addScaledVector(Ot,120),O(C);const Gs=bt(12.3,12.5,C);if(Gs>0){const Nn=en.position.clone().add(Et(0,.55,0));n.position.lerp(Nn.clone().add(Et(.4,pt(12,.18,Gs),.6)),Gs),n.lookAt(Nn)}return pe}if(C<13.5){pe.scene="lab";const Ee=bt(12.5,13.5,C),Ge=bt(12.5,12.78,C),Ie=bt(13.22,13.5,C),St=Et(0,1.12,0),rt=Et(pt(6.5,3.6,Ee),pt(3.4,2.3,Ee),pt(10,5.6,Ee)),Ut=St.clone().add(Et(0,.02,.5)).lerp(rt,Ge),on=St.clone().lerp(Et(0,1,-1),Ge);return Z.position.copy(Ut.lerp(Et(0,7.55,1.05),Ie)),Z.lookAt(on.lerp(Et(0,8,1),Ie)),S.rotation.y=pt(-.4,.3,Ee),pe}pe.scene="care";const me=bt(13.5,14.4,C),de=bt(13.5,13.8,C),ge=Et(pt(3.4,2.4,me),pt(1.9,1.5,me),pt(3.6,2,me)),_e=Et(pt(0,.5,me),pt(1.4,1.1,me),-2.2);return Oe.position.copy(Et(.1,2.5,-3.62).lerp(ge,de)),Oe.lookAt(Et(0,2.45,-3.96).lerp(_e,de)),ye.target.position.set(.8,.8,-1.2),pe},cassette:b,thorFree:en,ocean:st,heli:J}}function Ld(){var s;const i=document.querySelector(".proto-stage"),e=document.querySelector(".proto-track");(s=document.querySelector(".proto-loader"))==null||s.remove(),document.body.classList.add("is-styled","mission-static");const t=document.createElement("div");t.className="static-mission";const n=["hangar","integration","cape","orbit","orbit","bio-black","bio-black","bio-black","orbit","orbit","ocean","ocean","ocean","warehouse","hospital-happy"];for(const[r,o]of Lf.entries()){const a=document.createElement("section");a.id=o.id;const l=document.createElement("img");l.src=r===0?"/astreia-preview/prototype/hero-poster/landscape.webp":`/astreia-preview/story-2d/plate-${n[r]}.webp`,l.alt="",l.loading=r===0?"eager":"lazy",l.decoding="async",n[r]!=="bio-black"&&a.append(l);const c=document.createElement("div");c.className="static-mission-copy";const h=document.createElement("p");h.className="pc-kicker",h.textContent=`${String(r+1).padStart(2,"0")} / 15 · ${o.label}`;const u=document.createElement(r===0?"h1":"h2");u.textContent=o.title.replace(/<br\s*\/?>/g," ");const d=document.createElement("p");if(d.textContent=o.copy,c.append(h,u,d),r===6)for(const p of zh){const g=document.createElement("h3"),_=document.createElement("p"),m=document.createElement("small");g.textContent=p.title,_.textContent=p.copy,m.textContent=p.note,c.append(g,_,m)}a.append(c),t.append(a)}return i.replaceWith(t),e.remove(),document.querySelectorAll("[data-reveal]").forEach(r=>r.classList.add("is-in")),{navigationBoundary(){const r=document.getElementById("site-footer");return r?r.getBoundingClientRect().top+scrollY-innerHeight:1/0},scrollTo(r){window.scrollTo(0,r)},goHash(r){const o=r==="#constellation"?"factory":r.slice(1),a=t.querySelector(`[id="${CSS.escape(o)}"]`);return a?(window.scrollTo(0,a.getBoundingClientRect().top+scrollY),!0):!1},destroy(){document.body.classList.remove("mission-static")}}}const Id=Lf.map((i,e)=>e>=5&&gh[e]?{...i,...gh[e],id:i.id}:i),gc={},_c={},hM=i=>i===0?0:i===14?.96:i===6?.075:.73;function fM(){const i=new AbortController,{signal:e}=i;let t=!1,n=0;document.body.classList.add("is-styled");const s=new URLSearchParams(location.search).has("focus")?2:0,r=s?Wa.slice(0,s):Wa,o=r.reduce((L,Q)=>L+Q.length,0);s&&document.documentElement.classList.add("is-focus");const a=(L,Q=0,oe=1)=>Math.max(Q,Math.min(oe,L)),l=(L,Q,oe)=>{const Se=a((oe-L)/(Q-L));return Se*Se*Se*(Se*(Se*6-15)+10)},c=(L,Q,oe)=>L+(Q-L)*oe,h=54.5,u=matchMedia("(prefers-reduced-motion: reduce)").matches||new URLSearchParams(location.search).get("motion")==="reduce";if(u)return Ld();document.documentElement.style.setProperty("--act-length",o);const d=document.querySelector(".proto-canvas"),p=document.querySelector(".proto-stage");let g;try{g=new mx({canvas:d,antialias:!0,powerPreference:"high-performance"})}catch{return Kf()}g.outputColorSpace=Wt,g.toneMapping=yh,g.toneMappingExposure=1,g.autoClear=!1,g.shadowMap.enabled=!0,g.shadowMap.type=Nd;const _=Math.min(devicePixelRatio||1,1.75);let m=Math.min(_,1.5);const f=new Er,E=new Er,y=new _n(32,1,.1,6e3),M=new _n(32,1,1,4e5),O=new ih(g),I=O.fromScene(new Fy,.04).texture;f.environment=I,f.environmentIntensity=.55;const P=new H(-1,.12,-.55).normalize(),U=new Os(16773600,3.2);U.position.copy(P).multiplyScalar(200),f.add(U,U.target),U.castShadow=!0,U.shadow.mapSize.set(1024,1024),U.shadow.bias=-4e-4,U.shadow.normalBias=.02,Object.assign(U.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:60});const K=new co(10467544,1709072,.45);f.add(K);const x=new Os(7315414,0);x.position.set(.2,-1,.3),f.add(x,x.target);const b=new So(16771276,900,60,.5,.6,1.6);f.add(b,b.target);const G=new So(12374783,700,60,.55,.7,1.6);f.add(G,G.target);const k=new jt;f.add(k);const z=L=>L,ne=z(new yt({color:2895408,roughness:.24,metalness:.15})),q=new Ae(new En(84,84),ne);q.rotation.x=-Math.PI/2,q.position.y=.05,q.receiveShadow=!0,k.add(q);const ue=z(new sn({color:14206090}));for(const[L,Q,oe,Se]of[[30,.15,0,13],[30,.15,0,-13],[.15,26,15,0],[.15,26,-15,0]]){const We=new Ae(new En(L,Q),ue);We.rotation.x=-Math.PI/2,We.position.set(oe,.07,Se),k.add(We)}const Y=z(new yt({color:1382170,roughness:.28,metalness:.6})),we=new Ae(new tl(3.4,13,64),Y);we.rotation.x=-Math.PI/2,we.position.y=h-2.6,we.receiveShadow=!0,k.add(we);const Te=z(new yt({color:2764080,roughness:.45,metalness:.7})),Be=new Ae(new Nh(13,.06,8,96),Te);Be.rotation.x=Math.PI/2,Be.position.y=h-1.5,k.add(Be);const nt=z(new yt({color:3422010,roughness:.75,metalness:.25}));for(const L of[-42,42]){const Q=new Ae(new Pt(1,92,84),nt);Q.position.set(L,46,0),k.add(Q)}const at=new Ae(new Pt(84,1,84),nt);at.position.y=92,k.add(at);const ce=z(new sn({color:16774370}));for(let L=-3;L<=3;L++){const Q=new Ae(new Pt(.6,.15,76),ce);Q.position.set(L*11,91.3,0),k.add(Q)}const ve=z(new yt({color:6171148,roughness:.5,metalness:.6}));for(const L of[-30,30])for(let Q=-3;Q<=3;Q++){const oe=new Ae(new Pt(.7,90,.7),ve);oe.position.set(L,45,Q*11),k.add(oe)}for(const L of[-30,30])for(let Q=10;Q<90;Q+=12){const oe=new Ae(new Pt(.5,.5,68),ve);oe.position.set(L,Q,0),k.add(oe)}const Ue=z(new yt({color:2500908,roughness:.6,metalness:.3})),Ce=new Ae(new Pt(42,92,1),Ue),$e=Ce.clone();Ce.position.set(-21,46,-42),$e.position.set(21,46,-42),k.add(Ce,$e),k.traverse(L=>{L.isMesh&&(L.receiveShadow=!0)});const Ye=new Ae(new yo(4e3,64),new yt({color:1775378,roughness:1,transparent:!0}));Ye.rotation.x=-Math.PI/2,f.add(Ye);const ct=new jt,At=new yt({color:2237994,roughness:.6,metalness:.5});for(const[L,Q]of[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]]){const oe=new Ae(new Pt(.5,72,.5),At);oe.position.set(L,36,Q),ct.add(oe)}for(let L=6;L<72;L+=6){const Q=new Ae(new Pt(3.7,.3,3.7),At);Q.position.y=L,ct.add(Q)}ct.position.set(-10,0,-3),f.add(ct);const mt=new Ae(new vi(9,10,1.2,48),new yt({color:3420460,roughness:.9}));mt.position.y=.6,f.add(mt),f.fog=new Za(14261100,200,2600);const V=new rn({side:Tn,depthWrite:!1,uniforms:{sunDir:{value:P},space:{value:0},studio:{value:1},env:{value:null},envMix:{value:0},envRot:{value:3.4906585},envFlip:{value:1},sea:{value:0},hor:{value:new Xe(.98,.58,.34)},zen:{value:new Xe(.07,.16,.32)}},vertexShader:"varying vec3 vDir;void main(){vDir=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 sunDir,hor,zen;uniform float space,studio,envMix,envRot,envFlip,sea;uniform sampler2D env;varying vec3 vDir;
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
  c=mix(c,vec3(.02,.025,.03),studio);gl_FragColor=vec4(c,1.);}`}),Zt=new Ae(new _s(3e5,48,24),V);E.add(Zt),new Dy().load("/astreia-preview/prototype/textures/sky-dawn-1k.hdr",L=>{L.colorSpace=mn,L.minFilter=fn,V.uniforms.env.value=L,os=""});const ut=new Qt,dt=new Qt,Je=[],vt=[],et=[],D=[];let S=7;const Z=()=>(S=S*16807%2147483647)/2147483647,re=L=>L<.2?[.72,.8,1]:L<.75?[1,.97,.92]:[1,.82,.62];for(let L=0;L<4200;L++){const Q=Z()*2-1,oe=Z()*Math.PI*2,Se=Math.sqrt(1-Q*Q),We=Z()**3,Qe=L<260,[ot,It,ht]=re(Z()),Ne=Qe?.65+.35*Z():.18+.7*We;(Qe?et:Je).push(Se*Math.cos(oe)*2e5,Q*2e5,Se*Math.sin(oe)*2e5),(Qe?D:vt).push(ot*Ne,It*Ne,ht*Ne)}ut.setAttribute("position",new Nt(Je,3)),ut.setAttribute("color",new Nt(vt,3)),dt.setAttribute("position",new Nt(et,3)),dt.setAttribute("color",new Nt(D,3));const he=new el({color:16777215,vertexColors:!0,size:1.2,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1}),ie=he.clone();ie.size=2.1,E.add(new Va(ut,he),new Va(dt,ie));const Pe=6371,be=new Af,ye=new yt({roughness:.7,metalness:0,transparent:!0,opacity:0,emissive:new Xe(0,0,0)}),ft=new yt({color:16777215,transparent:!0,opacity:0,depthWrite:!1,roughness:1,emissive:new Xe(9082534),emissiveIntensity:.25}),Me=new Ae(new _s(Pe,128,64),ye),ze=new Ae(new _s(Pe+12,128,64),ft),Ze=new rn({transparent:!0,blending:Pi,depthWrite:!1,side:Tn,uniforms:{sunDir:{value:P},strength:{value:0}},vertexShader:"varying vec3 vN;varying vec3 vP;varying vec3 vW;void main(){vN=normalize(normalMatrix*normal);vW=normalize(mat3(modelMatrix)*normal);vec4 p=modelViewMatrix*vec4(position,1.);vP=p.xyz;gl_Position=projectionMatrix*p;}",fragmentShader:`uniform vec3 sunDir;uniform float strength;varying vec3 vN;varying vec3 vP;varying vec3 vW;
 void main(){float sd=dot(vW,normalize(sunDir));
  vec3 day=vec3(.25,.55,1.),dusk=vec3(1.,.42,.12);vec3 c=mix(dusk,day,smoothstep(.05,.45,sd));
  float ndv=1.-abs(dot(normalize(-vP),vN));float rim=pow(ndv,3.)*.55+pow(ndv,9.)*1.1;
  float lit=smoothstep(-.35,.1,sd);float band=exp(-pow((sd-.02)/.12,2.))*1.6;
  gl_FragColor=vec4(c*rim*strength*(lit+band),1.);}`}),it=new rn({transparent:!0,blending:Pi,depthWrite:!1,uniforms:{sunDir:Ze.uniforms.sunDir,strength:Ze.uniforms.strength},vertexShader:"varying vec3 vN;varying vec3 vP;varying vec3 vW;void main(){vN=normalize(normalMatrix*normal);vW=normalize(mat3(modelMatrix)*normal);vec4 p=modelViewMatrix*vec4(position,1.);vP=p.xyz;gl_Position=projectionMatrix*p;}",fragmentShader:`uniform vec3 sunDir;uniform float strength;varying vec3 vN;varying vec3 vP;varying vec3 vW;
 void main(){float ndv=clamp(dot(normalize(-vP),vN),0.,1.);float sd=dot(vW,normalize(sunDir));
  float f=pow(1.-ndv,2.6);vec3 day=vec3(.16,.34,.72)*f*smoothstep(-.1,.35,sd);
  vec3 dusk=vec3(.9,.38,.14)*exp(-pow((sd-.03)/.09,2.))*(.15+.85*f)*.55;
  gl_FragColor=vec4((day+dusk)*min(strength,1.2)*.8,1.);}`}),De=new Ae(new _s(Pe+8,128,64),it),gt=new Ae(new _s(Pe+55,96,48),Ze),tt=new jt;tt.add(Me,ze,De,gt),E.add(tt);{const L=tf.degToRad(6),Q=145/360*Math.PI*2,oe=Math.PI/2-L,Se=new H(-Math.cos(Q)*Math.sin(oe),Math.cos(oe),Math.sin(Q)*Math.sin(oe));tt.quaternion.setFromUnitVectors(Se,new H(0,1,0)).premultiply(new Qi().setFromAxisAngle(new H(0,1,0),2.4+Math.PI))}const Mt=new Os(16774118,4.2);Mt.position.set(-.55,.75,-.35).multiplyScalar(1e5),Ze.uniforms.sunDir.value=Mt.position.clone().normalize();{const L=(oe,Se,We,Qe,ot)=>{const It=document.createElement("canvas");It.width=It.height=128;const ht=It.getContext("2d"),Ne=ht.createRadialGradient(64,64,0,64,64,64);return Ne.addColorStop(0,`rgba(${oe},${Se},${We},${Qe})`),Ne.addColorStop(ot,`rgba(${oe},${Se},${We},${Qe*.25})`),Ne.addColorStop(1,`rgba(${oe},${Se},${We},0)`),ht.fillStyle=Ne,ht.fillRect(0,0,128,128),new La(It)},Q=new bo;Q.addElement(new yr(L(255,236,210,1,.15),220,0,new Xe(1,.92,.8))),Q.addElement(new yr(L(255,190,120,.35,.5),520,0,new Xe(1,.7,.45))),Q.addElement(new yr(L(150,190,255,.07,.6),48,.6)),Q.addElement(new yr(L(255,170,110,.05,.6),80,.9)),Mt.add(Q)}E.add(Mt,new kx(2241348,.15)),be.load("/astreia-preview/prototype/textures/earth-day.webp",L=>{L.colorSpace=Wt,L.anisotropy=8,ye.map=L,ye.needsUpdate=!0}),be.load("/astreia-preview/prototype/textures/earth-clouds.webp",L=>{ft.alphaMap=L,ft.needsUpdate=!0});const $={value:new H(-.55,.75,-.35).normalize()};be.load("/astreia-preview/prototype/textures/earth-night.webp",L=>{L.colorSpace=Wt,ye.emissiveMap=L,ye.emissive.setRGB(1,.82,.55),ye.emissiveIntensity=1.6,ye.onBeforeCompile=Q=>{Q.uniforms.uSun=$,Q.vertexShader=Q.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWN;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vWN=normalize(mat3(modelMatrix)*objectNormal);`),Q.fragmentShader=Q.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSun;varying vec3 vWN;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance*=pow(1.-smoothstep(-.18,.12,dot(normalize(vWN),uSun)),1.5);`)},ye.needsUpdate=!0});const Fe=(()=>{const Q=(We,Qe)=>{We=(We+128)%128,Qe=(Qe+128)%128;let ot=We*374761393+Qe*668265263;return ot=(ot^ot>>13)*1274126177,((ot^ot>>16)>>>0)/4294967295},oe=new Uint8Array(65536);for(let We=0;We<128;We++)for(let Qe=0;Qe<128;Qe++){let ot=0,It=.5;for(let Ne=0,hn=8;Ne<4;Ne++,hn*=2,It*=.5){const Oi=128/hn,Ei=Qe/Oi,as=We/Oi,Yn=Math.floor(Ei),di=Math.floor(as),nn=Ei-Yn,Bi=as-di,bs=nn*nn*(3-2*nn),Xs=Bi*Bi*(3-2*Bi),Do=hn,qs=(qr,Ys)=>Q((Yn+qr)%Do*Oi|0,(di+Ys)%Do*Oi|0);ot+=It*((qs(0,0)*(1-bs)+qs(1,0)*bs)*(1-Xs)+(qs(0,1)*(1-bs)+qs(1,1)*bs)*Xs)}const ht=(We*128+Qe)*4;oe[ht]=oe[ht+1]=oe[ht+2]=Math.round(ot/.9375*255),oe[ht+3]=255}const Se=new Ja(oe,128,128);return Se.wrapS=Se.wrapT=Bs,Se.magFilter=Se.minFilter=fn,Se.needsUpdate=!0,Se})(),ae={opacity:{value:0},noise:{value:Fe},sunDir:{value:P},layer:{value:0}},xe={get opacity(){return ae.opacity.value},set opacity(L){ae.opacity.value=L}},Le=new jt;for(let L=0;L<9;L++){const Q=L/8,oe=new Ae(new En(9e3,9e3),new rn({transparent:!0,depthWrite:!1,side:wn,uniforms:{...ae,layer:{value:Q}},vertexShader:"varying vec2 vUv;varying vec3 vW;void main(){vUv=uv;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`uniform sampler2D noise;uniform float opacity,layer;uniform vec3 sunDir;varying vec2 vUv;varying vec3 vW;
  void main(){vec2 p=vUv*6.;float n=texture2D(noise,p).r*.62+texture2D(noise,p*3.7+.31).r*.28+texture2D(noise,p*11.+.7).r*.1;
   float prof=1.-pow(abs(layer-.42)/.58,1.6);float d=smoothstep(.62-.2*prof,.82-.2*prof,n);
   float e=length(vUv-.5)*2.;d*=1.-smoothstep(.55,1.,e);
   float sunUp=texture2D(noise,p-normalize(sunDir.xz)*.012).r-n;
   vec3 base=mix(vec3(.38,.36,.42),vec3(.86,.72,.62),layer);vec3 lit=vec3(1.25,.86,.62)*(1.+clamp(-sunUp*14.,0.,1.)*.6);
   vec3 c=mix(base,lit,smoothstep(.25,1.,layer)*.75+.25*d);
   float dist=length(vW-cameraPosition);c=mix(c,vec3(.95,.66,.48),smoothstep(1200.,4200.,dist)*.6);
   float a=d*opacity*.5;if(a<.003)discard;gl_FragColor=vec4(c*1.05,a);}`}));oe.rotation.x=-Math.PI/2,oe.position.set(0,1500+L*28,0),oe.renderOrder=1+L,oe.frustumCulled=!1,Le.add(oe)}f.add(Le);const Oe=new sn({transparent:!0,blending:Pi,depthWrite:!1,fog:!1,opacity:0}),st=[];be.load("/astreia-preview/story-2d/launch/exhaust-v2.webp",L=>{L.colorSpace=Wt;for(const Q of st)Q.material.map=L,Q.material.needsUpdate=!0});function Ot(){const L=new En(1,1);L.translate(0,-.5+40/1536,0);const Q=new Ae(L,Oe.clone());return Q.frustumCulled=!1,st.push(Q),Q}const qt=Ot(),xt=Ot(),Ct={time:{value:0}};function Jt(){const L=new vi(.16,.5,1,40,24,!0);L.translate(0,-.5,0);const Q=new Ae(L,new rn({transparent:!0,blending:Pi,depthWrite:!1,side:wn,uniforms:{time:Ct.time,opacity:{value:0}},vertexShader:"varying float vY;varying vec3 vN;varying vec3 vV;void main(){vY=-position.y;vec4 p=modelViewMatrix*vec4(position,1.);vV=normalize(-p.xyz);vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*p;}",fragmentShader:`uniform float time,opacity;varying float vY;varying vec3 vN;varying vec3 vV;
  void main(){float ndv=abs(dot(normalize(vN),normalize(vV)));float body=pow(ndv,1.4);
   float turb=.82+.18*sin(vY*38.-time*31.)*sin(vY*17.+time*13.+ndv*6.);
   vec3 hot=vec3(1.,.92,.7),mid=vec3(1.,.56,.18),cool=vec3(.75,.22,.06);
   vec3 c=mix(hot,mid,smoothstep(.0,.25,vY));c=mix(c,cool,smoothstep(.25,.8,vY));
   float a=body*turb*(1.-smoothstep(.35,1.,vY))*smoothstep(0.,.03,vY);
   gl_FragColor=vec4(c*a*opacity*1.6,1.);}`}));return Q.frustumCulled=!1,Q}const Wn=Jt(),Pn=Jt(),Ln=new Ny().setDecoderPath("/astreia-preview/prototype/draco/"),hi=new Jx().setDRACOLoader(Ln),Yt={},Zn=new jt;f.add(Zn);const Bt=new jt,ln=new jt;f.add(Bt),Bt.add(ln);const yn=document.querySelector(".proto-loader"),en=yn==null?void 0:yn.querySelector(".proto-loader-pct"),F={items:new Map,shown:0,done:!1,t0:performance.now()},R=(L,Q,oe=1)=>{var Se;return F.items.set(L,{f:Math.max(((Se=F.items.get(L))==null?void 0:Se.f)||0,Q),w:oe})},X=new Set(["hall","tessera","rocket","thor"]);for(const L of X)R("glb:"+L,0,6);function j(){if(F.done||!yn)return;!Ee&&Ie&&ge.src&&ge.readyState>=2&&(Ee=!0,R("video:"+Ie,1,12));let L=0,Q=0;for(const{f:We,w:Qe}of F.items.values())L+=We*Qe,Q+=Qe;const oe=Q?Math.min(L/Q,Ee?1:.99):0,Se=performance.now()-F.t0>15e3;F.shown+=(Math.max(F.shown,oe)-F.shown)*.3,(oe>=1&&F.shown>.995||Se)&&(F.shown=1),en.textContent=`${Math.floor(F.shown*100)}%`,F.shown>=1&&(F.done=!0,yn.classList.add("is-done"),setTimeout(()=>yn.remove(),900))}function v(L){return new Promise(Q=>hi.load(`/astreia-preview/prototype/models/${L}.glb`,oe=>{Yt[L]=oe.scene,X.has(L)&&R("glb:"+L,1,6),Q(oe.scene)},oe=>{X.has(L)&&oe.total&&R("glb:"+L,Math.min(.99,oe.loaded/oe.total),6)},()=>{X.has(L)&&R("glb:"+L,1,6),Q(null)}))}let w=!1;v("hall").then(L=>{if(!(t||!L)){L.traverse(Q=>{if(!Q.isMesh)return;const oe=Q.material.map;oe&&(oe.colorSpace=Wt),Q.material=new sn({map:oe,color:16777215})});for(const Q of[...k.children])Q.geometry&&!(Q===Ce||Q===$e)&&Q.material!==ve&&(Q.visible=!1);k.add(L)}});const T=Promise.all([v("tessera"),v("rocket"),v("thor")]).then(([L,Q,oe])=>{var We,Qe,ot,It;if(t)return;const Se=ht=>ht==null?void 0:ht.traverse(Ne=>{Ne.isMesh&&(Ne.castShadow=Ne.receiveShadow=!0,Ne.geometry.attributes.color&&(Ne.material=Ne.material.clone(),Ne.material.vertexColors=!0),Ne.material.envMapIntensity=.8)});if(Se(L),Se(oe),L==null||L.traverse(ht=>{ht.isMesh&&(ht.receiveShadow=!1,ht.material.side=wn)}),L==null||L.traverse(ht=>{if(!ht.isMesh)return;const Ne=ht.material,hn=Ne.color.getHex();Ne.map?(Object.assign(Ne,{metalness:.12,roughness:.42,envMapIntensity:.9}),Ne.color.setHex(10657689)):hn===3291193?(Object.assign(Ne,{metalness:.55,roughness:.46,envMapIntensity:.6}),Ne.color.setHex(1316634)):hn===13138245?(Object.assign(Ne,{metalness:.25,roughness:.34}),Ne.color.setHex(13194271)):(Object.assign(Ne,{metalness:.6,roughness:.32,envMapIntensity:1.1}),Ne.color.setHex(13817304))}),L&&(L.scale.setScalar(2.35),Bt.add(L)),Q){for(const ht of["booster","stage","fairing-left","fairing-right"]){const Ne=Q.getObjectByName(ht);Ne&&(Yt[ht]=Ne)}Zn.add(Q);for(const ht of["booster","stage"])(We=Yt[ht])==null||We.traverse(Ne=>{Ne.isMesh&&Ne.material&&!Ne.material.map&&(Ne.material=Ne.material.clone(),Ne.material.roughness=Math.min(Math.max(Ne.material.roughness??.5,.38),.6),Ne.material.envMapIntensity=.9)});for(const ht of["fairing-left","fairing-right"])(Qe=Yt[ht])==null||Qe.traverse(Ne=>{Ne.material&&(Ne.material=Ne.material.clone(),Ne.material.metalness=0,Ne.material.envMapIntensity=.35,Ne.material.roughness=Math.max(Ne.material.roughness??.5,.7),Ne.material.side=wn)})}if(oe&&L){const ht=Bt.matrix.clone();Bt.position.set(0,0,0),Bt.rotation.set(0,0,0),Bt.updateMatrixWorld(!0);const Ne=new Vn().setFromObject(L),hn=Ne.max.x-Ne.min.x,Oi=Ne.max.y-Ne.min.y;ht.decompose(Bt.position,Bt.quaternion,Bt.scale);const Ei=new Vn,as=Ne.max.z-Ne.min.z,Yn=new Vn;L.traverse(Bi=>{Bi.isMesh&&(Yn.setFromObject(Bi),Yn.max.z>Ne.max.z-.03*as&&Yn.max.x-Yn.min.x<.6*hn&&Ei.union(Yn))});const di=Ei.isEmpty()?new H((Ne.min.x+Ne.max.x)/2,(Ne.min.y+Ne.max.y)/2-.04*Oi,0):Ei.getCenter(new H);Bt.userData.hatch=new H(di.x,di.y,Ne.max.z),oe.rotation.set(Math.PI/2,0,0),oe.scale.setScalar(1);let nn=new Vn().setFromObject(oe);oe.scale.setScalar(hn*.78/(nn.max.x-nn.min.x)),nn=new Vn().setFromObject(oe),oe.position.set(-nn.min.x,-(nn.min.y+nn.max.y)/2,-(nn.min.z+nn.max.z)/2),ln.add(oe),ln.position.set(Ne.min.x+.746*hn,Ne.max.y-.667*Oi,(Ne.min.z+Ne.max.z)/2),ln.rotation.z=-.52,ln.userData.dock=ln.position.clone()}(ot=Yt.booster)==null||ot.add(qt,Wn),qt.position.y=Wn.position.y=2.4,(It=Yt.stage)==null||It.add(xt,Pn),xt.position.y=Pn.position.y=42.4,d.classList.add("ready")}),N=document.getElementById("story-title"),A=document.querySelector(".story-description"),W=document.querySelector(".mission-hud-index"),J=document.querySelector(".mission-hud-label");let ee=-1,te=[];const le=document.querySelector(".story-copy"),C=document.querySelector(".scroll-cue");if(C&&matchMedia("(hover:hover) and (pointer:fine)").matches){C.classList.add("follow");const L=matchMedia("(prefers-reduced-motion: reduce)").matches?1:.14;let Q=0,oe=0,Se=0,We=0,Qe=0,ot=!1;const It=()=>{Se+=(Q-Se)*L,We+=(oe-We)*L,C.style.setProperty("--cx",Se.toFixed(1)+"px"),C.style.setProperty("--cy",We.toFixed(1)+"px"),Qe=Math.abs(Q-Se)+Math.abs(oe-We)>.3?requestAnimationFrame(It):0};addEventListener("pointermove",ht=>{ht.pointerType==="mouse"&&(Q=ht.clientX+18,oe=ht.clientY+22,ot||(ot=!0,Se=Q,We=oe,C.classList.add("is-live")),Qe||(Qe=requestAnimationFrame(It)))},{passive:!0,signal:e}),document.documentElement.addEventListener("mouseleave",()=>{ot=!1,C.classList.remove("is-live")},{signal:e}),e.addEventListener("abort",()=>cancelAnimationFrame(Qe),{once:!0})}const B=document.createElement("div");B.className="proto-molecular-host",p.append(B);const se=iM(B),fe=s?null:z1(p),pe=document.createElement("div");pe.className="thermal-caption",pe.setAttribute("aria-hidden","true"),pe.innerHTML=sM,p.append(pe);const Re=rM(p),me=document.createElement("div");me.className="proto-fade",p.append(me);const de={ch0:191,fps:30,src:{landscape:"/astreia-preview/prototype/hero-video/landscape.mp4",portrait:"/astreia-preview/prototype/hero-video/portrait.mp4"}},ge=Object.assign(document.createElement("video"),{className:"hero-seq",muted:!0,playsInline:!0,preload:"auto"});ge.setAttribute("aria-hidden","true"),ge.disablePictureInPicture=!0,document.querySelector(".proto-canvas").after(ge);let _e=!1,Ee=!1,Ge=!1,Ie="",St=-1;const rt=document.querySelector(".hero-poster");function Ut(L){if(gc[L])return gc[L];const Q="video:"+L;return R(Q,0,12),gc[L]=fetch(de.src[L]).then(async oe=>{if(!oe.ok)throw new Error("Opening video unavailable");const Se=+oe.headers.get("content-length")||0,We=oe.body.getReader(),Qe=[];let ot=0;for(;;){const{done:It,value:ht}=await We.read();if(It)break;Qe.push(ht),ot+=ht.length,Se&&R(Q,Math.min(.99,ot/Se),12)}return URL.createObjectURL(new Blob(Qe,{type:"video/mp4"}))}).catch(()=>null)}function on(L){L!==Ie&&(Ie=L,Ee=!1,St=-1,Ge=!1,Ut(L).then(Q=>{var We;if(t||!Q||L!==Ie)return;ge.src=Q;const oe=()=>{Ge=!0};(We=ge.requestVideoFrameCallback)==null||We.call(ge,oe),ge.addEventListener("seeked",oe,{once:!0});const Se=()=>{L===Ie&&!Ee&&(Ee=!0,R("video:"+L,1,12))};for(const Qe of["loadeddata","canplay","seeked"])ge.addEventListener(Qe,Se,{once:!0});ge.load(),ge.play().then(()=>ge.pause()).catch(()=>{ge.currentTime=.5/de.fps}),setTimeout(()=>{ge.readyState>=1&&Se()},3e3)}))}on(innerWidth>=innerHeight?"landscape":"portrait");function kt({i:L,p:Q}){on(p.clientWidth>=p.clientHeight?"landscape":"portrait");const oe=Ee?Math.round(ge.duration*de.fps):0,Se=120/(de.ch0-1)/160,We=L+Q-.5,Qe=L===0?a(Q)*(de.ch0-1):de.ch0-1+(We-.5)/Se;if(!Ee||Qe>oe-1){ge.style.visibility="hidden",_e=!1;return}ge.style.visibility="visible",_e=!0;const ot=Math.round(Qe);ot!==St&&!ge.seeking&&(St=ot,ge.currentTime=(ot+.5)/de.fps)}const cn=Object.assign({}),gn={t0:2.5,fps:30,step:120/190/160,src:{landscape:"/astreia-preview/prototype/hero-video/sep-landscape.mp4",portrait:"/astreia-preview/prototype/hero-video/sep-portrait.mp4"}},Ft=Object.assign(document.createElement("video"),{className:"hero-seq",muted:!0,playsInline:!0,preload:"auto"});Ft.setAttribute("aria-hidden","true"),Ft.disablePictureInPicture=!0,Ft.style.visibility="hidden",ge.after(Ft);let ui=!1,bi="",Xn=-1;function Jn(L){L!==bi&&(bi=L,ui=!1,Xn=-1,(_c[L]??(_c[L]=fetch(gn.src[L]).then(Q=>Q.ok?Q.blob():null).then(Q=>Q&&URL.createObjectURL(Q)).catch(()=>null))).then(Q=>{if(t||!Q||L!==bi)return;Ft.src=Q;const oe=()=>{L===bi&&(ui=!0)};for(const Se of["loadeddata","canplay","seeked"])Ft.addEventListener(Se,oe,{once:!0});Ft.load(),Ft.play().then(()=>Ft.pause()).catch(()=>{Ft.currentTime=.5/gn.fps}),setTimeout(()=>{Ft.readyState>=1&&oe()},3e3)}))}function es({t:L}){if(L<1.2||!Object.keys(cn).length){Ft.style.visibility="hidden";return}Jn(p.clientWidth>=p.clientHeight?"landscape":"portrait");const Q=ui?Math.round(Ft.duration*gn.fps):0,oe=(L-gn.t0)/gn.step;if(!ui||oe<0||oe>Q-1){Ft.style.visibility="hidden";return}Ft.style.visibility="visible",_e=!0;const Se=Math.round(oe);Se!==Xn&&!Ft.seeking&&(Xn=Se,Ft.currentTime=(Se+.5)/gn.fps)}function nl(L){const Q=a(L,0,.999999)*o,oe=r.findIndex(Qe=>Q<Qe.end),Se=r[oe],We=(Q-Se.start)/Se.length;return{i:oe,p:We,t:oe===0?We*.5:a(oe+We-.5,0,14)}}const Ms=document.querySelector(".live-hero");function Gr({i:L,p:Q}){const oe=Ms&&L===0?1-l(.1,.22,Q):0;if(Ms&&(Ms.style.opacity=oe.toFixed(3),Ms.style.visibility=oe>0?"visible":"hidden"),L!==ee){ee=L;const Qe=Id[L];te=Hf(N,A,Qe.title,Qe.copy),W.textContent=`${String(L+1).padStart(2,"0")} / 15`,J.textContent=Qe.label}const Se=L===0?Ms?[.24,.42]:[.01,.2]:r[L].reveal,We=L===14||L===0?1:1-a((Q-.87)/.13);Vf(te,A,Q,Se,We,u),le.style.visibility=fe&&L>=5&&L<=12||!fe&&L===6||oe>0?"hidden":"visible",fe?(se.render(0,0),fe.render(L,Q,{seconds:performance.now()/1e3,quality:1})):se.render(L,Q)}const $t=(L,Q,oe)=>new H(L,Q,oe);new H;const Qn=new H;function Wr(L,Q){const oe=1-l(.85,1.45,L),Se=l(1.62,2.7,L),We=Se*Se*2400,Qe=c(0,420,l(1.75,3.4,L)**1.6),ot=l(1.95,2.9,L),It=l(.55,.97,L),ht=l(2.55,2.95,L),Ne=l(2.92,3.32,L),hn=l(3.12,3.6,L);Zn.position.y=We,Yt.booster&&(Yt.booster.position.set(-6*ht,-90*ht*ht,0),Yt.booster.rotation.z=.5*ht,Yt.booster.visible=ht<.999);const Oi=Ne,Ei=hn;for(const[Mn,wi]of[["fairing-left",-1],["fairing-right",1]]){const fi=Yt[Mn];if(!fi)continue;fi.traverse(ki=>{ki.material&&ki.material.color.setScalar(c(.32,1,l(1,1.6,L)))});const js=(1-It)*wi*30;fi.position.set(js+wi*(Ei*18),Ei*-6+(1-It)*1.8,0),fi.rotation.z=wi*-(.9*Oi+.6*Ei)}if(Yt.stage){const Mn=l(2.98,3.4,L);Yt.stage.position.set(-18*Mn,-140*Mn*Mn-40*hn,-14*Mn),Yt.stage.rotation.set(-.35*Mn,0,.5*Mn),Yt.stage.visible=hn<.999&&Mn<.999}const as=hn;Bt.position.set(c(0,0,as),h+We+c(0,6,as),0),Bt.rotation.set(0,c(-.35+.35*l(0,.6,L),.35,l(3.2,4.5,L)),c(0,-.12,as)),ln.visible=L>1.2;const Yn=l(1.6,1.72,L)*(1-l(2.55,2.62,L)),di=l(2.66,2.74,L)*(1-l(2.9,2.98,L)),nn=u?1:1+.04*Math.sin(Q*23)+.025*Math.sin(Q*37);qt.material.opacity=Yn,qt.scale.set(9*nn,c(10,52,Yn)*nn,1),xt.material.opacity=di,xt.scale.set(7*nn,c(8,34,di)*nn,1);const Bi=l(1.9,2.6,L);Ct.time.value=u?0:Q,Wn.material.uniforms.opacity.value=Yn*.85,Wn.scale.set(c(8,15,Bi)*nn,c(10,60,Yn)*nn,c(8,15,Bi)*nn),Wn.visible=Yn>.001,Pn.material.uniforms.opacity.value=di*.9,Pn.scale.set(9*nn,c(8,30,di)*nn,9*nn),Pn.visible=di>.001;const bs=l(.85,1.35,L),Xs=l(1.25,1.6,L),Do=Xs<.999?1:0;k.position.set(0,0,-420*Xs*Xs),Ce.position.x=-21-40*bs,$e.position.x=21+40*bs,k.visible=Do>0,Ye.visible=mt.visible=ct.visible=Qe<8&&oe<.995,ct.visible=!1,Ye.material.opacity=1-oe,f.fog.color.setHex(oe>.5?329224:14261100),b.intensity=900*oe,G.intensity=650*oe,b.position.set(-3,h+16,13),b.target.position.set(0,h,0),G.position.set(8,h+6,-10),G.target.position.set(0,h,0),U.intensity=c(.4,3.2,1-oe),U.target.position.copy(Bt.position),U.position.copy(Bt.position).addScaledVector(P,30),x.intensity=1.6*ot,x.target.position.copy(Bt.position),x.position.copy(Bt.position).add($t(.2,-10,.3)),K.intensity=c(.15,.45,1-oe)*(1-ot*.7),f.fog.far=c(2600,1e6,l(1.8,2.3,L)),xe.opacity=Math.sin(Math.PI*l(1.95,2.4,L))*.95,Le.visible=xe.opacity>.002,Le.position.y=We-1500+40-520*(l(1.95,2.4,L)-.5);const qs=h+We,qr=30+We,Ys=Bt.position.y,No=1-(1-a(L/.6))**2,Uo=-1.05+.55*No,Zf=$t(Math.sin(Uo)*c(13,14.5,No),h+c(.5,.2,No),Math.cos(Uo)*c(13,14.5,No)),Fo=l(.6,1.45,L),dl=l(1.6,2.2,L),fl=l(2.85,3.45,L),Oo=l(3.4,4.5,L),Jf=$t(-Math.cos(Uo)*.9,h-.9,Math.sin(Uo)*.9),$s=new H(0,c(h,c(qr,qs,dl*.4),Fo),0).lerp(Jf,1-Fo);Qn.copy(Zf).lerp($t(34,24,150),Fo),Qn.lerp($t(18,qr-26,70),dl),Qn.y=Math.max(Qn.y,We+c(22,qr-26-We,dl));const Bo=(L>=1.6?1:0)*(1-l(2.05,2.3,L));Bo>0&&Qn.lerp($t(34,24+.7*We,150),Bo),Bo>0&&$s.lerp($t(0,30+We-12*l(1.7,2,L),0),Bo);const Xh=l(2.35,2.75,L),Qf=$t(c(16,7,fl),c(10,8,fl),c(34,19,fl));$s.lerp($t(0,Ys-2,0),Xh),Qn.lerp($t(0,Ys,0).add(Qf),Xh);const qh=c(.38,1.15,Oo);Qn.lerp($t(Math.sin(qh)*16,Ys+5+2*Oo,Math.cos(qh)*16),Oo),$s.lerp($t(.8,Ys-1.2,0),Oo);let pl=-.12*(1-Fo);if(L>.5&&L<1.45){const Mn=Math.min(L,1),wi=1-(1-a(.5/.6))**2,fi=-1.05+.55*wi,js=c(13,14.5,wi),ki=l(.6,1.45,.5),Ti=$t(Math.sin(fi)*js,h+c(.5,.2,wi),Math.cos(fi)*js).lerp($t(34,24,150),ki),zo=$t(0,c(h,30,ki),0).lerp($t(-Math.cos(fi)*.9,h-.9,Math.sin(fi)*.9),1-ki),ml=-.12*(1-ki),gl=l(.5,.85,Mn),Yh=Math.atan2(Ti.x,Ti.z)*(1-gl);let Ho=c(Math.hypot(Ti.x,Ti.z),7.5,l(.6,.97,Mn));Ho=c(Ho,6.8,l(.97,1,Mn));const ep=$t(Math.sin(Yh)*Ho,c(Ti.y,h+.3,gl),Math.cos(Yh)*Ho),tp=zo.clone().lerp($t(0,h+.2,0),l(.5,.8,Mn)),np=ml*(1-gl),_l=L<=1?0:l(1,1.45,L);Qn.copy(ep.lerp(Qn,_l)),$s.copy(tp.lerp($s,_l)),pl=c(np,pl,_l)}y.position.copy(Qn),y.lookAt($s),y.rotateZ(pl),M.quaternion.copy(y.quaternion),M.position.set(0,Pe+Qe+.05,0);{const Mn=new H(0,0,-1).applyQuaternion(y.quaternion);Mn.y=0,Mn.normalize();const wi=Math.acos(Pe/(Pe+Math.max(Qe,1))),fi=Mn.clone().multiplyScalar(Math.cos(wi-.05)).add(new H(.35,0,0).applyQuaternion(y.quaternion).setY(0)).setY(-Math.sin(wi-.05)).normalize(),js=new H(-.55,.75,-.35).normalize(),ki=l(2.25,2.6,L)*(1-l(3.45,4,L)),Ti=js.clone().lerp(fi,ki).normalize();Mt.position.copy(Ti).multiplyScalar(1e5),Ze.uniforms.sunDir.value.copy(Ti),$.value.copy(Ti);const zo=l(2.2,2.6,L);if(zo>0){const ml=P.clone().lerp(Ti,zo).normalize();U.position.copy(U.target.position).addScaledVector(ml,30)}}Zt.position.copy(M.position),V.uniforms.envMix.value=V.uniforms.env.value?1-l(2.1,2.6,L):0,V.uniforms.space.value=ot,V.uniforms.studio.value=oe,V.uniforms.sea.value=0,V.uniforms.hor.value.setRGB(.98,.58,.34),V.uniforms.zen.value.setRGB(.07,.16,.32),V.uniforms.sunDir.value=P,he.opacity=l(.55,1,ot);const ko=l(.25,.75,ot);return ye.opacity=ko,ft.opacity=ko*.7,Ze.uniforms.strength.value=ko*.95,Me.visible=ze.visible=De.visible=gt.visible=ko>.001,{studio:oe}}const In=new jt;f.add(In);const tn=cM({environment:f.environment,fg:f,bg:E,camera:y,bgCamera:M,tex:be,assets:Yt,tesseraPivot:Bt,thorPivot:ln,globe:tt,earthMat:ye,cloudMat:ft,skyMat:V,starMat:he,atmoMat:Ze,R:Pe,reduced:u}),ts=tn.cassette();ts.scale.setScalar(.6),In.add(ts);let Fi=0,Hs=32;function Vs(L,Q,oe){if(Bt.visible=!0,tt.visible=!0,tn.thorFree.visible=!1,tn.ocean.visible=!1,In.visible=!1,Wr(Math.min(L,4.5),Q),ln.userData.dock&&ln.position.copy(ln.userData.dock),L<=4.5)return tn.idle(),{scene:"world",fade:0,heat:0};tn.prepare();const Se=tn.pose(L,Q,oe,{fov:Hs,heat:Fi});if(Fi=Se.heat||0,Se.transfer){const We=Se.transfer.move;In.visible=We>0&&We<1,In.position.copy(Se.transfer.from).lerp(Se.transfer.to,We).add(new H(0,.3,1.6).multiplyScalar(Math.sin(We*Math.PI))),In.scale.setScalar(1.1*(1-.7*l(.75,1,We))),In.rotation.set(0,We*1.2,-.3*We)}return Se}const Dn=new Hy(g,new li(1,1,{type:Gn,samples:4})),Xr=new xd(E,M),ns=new xd(f,y);ns.clear=!1,ns.clearDepth=!0;const is=new Fr(new Ke(1,1),.3,.5,1.7),il=new ch({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec4 c=texture2D(tDiffuse,vUv);if(any(isnan(c))||any(isinf(c)))c=vec4(0.,0.,0.,1.);gl_FragColor=min(c,vec4(48.));}"}),Ao=new ch({uniforms:{tDiffuse:{value:null},uAspect:{value:1},uWarm:{value:1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uAspect,uWarm;varying vec2 vUv;
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
   gl_FragColor=vec4(clamp(col,0.,1.),1.);}`});Dn.addPass(Xr),Dn.addPass(ns),Dn.addPass(il),Dn.addPass(is),Dn.addPass(new Wy),Dn.addPass(Ao);const Ro=new pf(128,{type:Gn}),Co=new df(1,4e5,Ro);let qn=null,Gs="",Nn=0;function ss(L){if(L<1.45||L>12.5){f.environment!==I&&(f.environment=I),f.environmentIntensity=.55;return}const Q=`${Math.round(M.position.y/15)}:${Math.round(L*3)}`,oe=performance.now();if(Q===Gs||oe-Nn<250){qn&&(f.environment=qn);return}Gs=Q,Nn=oe,Co.position.copy(M.position),Co.update(g,E);const Se=O.fromCubemap(Ro.texture).texture;qn==null||qn.dispose(),qn=Se,f.environment=qn,f.environmentIntensity=1.15}function Ss(L,Q=0){const oe={world:[f,y],sea:[f,y],ocean:[f,y],bio:[tn.bio,tn.bioCam],lab:[tn.lab,tn.labCam],care:[tn.care,tn.careCam]},[Se,We]=oe[L.scene],Qe=L.scene==="world"||L.scene==="sea";Qe?ss(Q):f.environment=I,Xr.enabled=Qe,ns.scene=Se,ns.camera=We,ns.clear=!Qe,is.strength=Qe?.28+.16*(L.heat||0):.16,g.toneMappingExposure=L.exposure??(L.scene==="world"?c(1,1/.6,l(1.55,2.1,Q)*(1-l(4.15,4.5,Q))):1),ie.opacity=he.opacity,Dn.render(),me.style.opacity=String(L.fade||0),me.style.background=L.fadeColor||"#000",pe.style.opacity=String(Fi),Re.render(Fi);const ot=N.getBoundingClientRect(),It=p.getBoundingClientRect();p.style.setProperty("--thermal-caption-y",`${ot.top-It.top+ot.height/2}px`)}const ei=u?null:new ip({lerp:.085,smoothWheel:!0}),Po=document.querySelector(".proto-track");let sl=performance.now(),rs=16,os="",Ws=1e3,rl=0,ol=0;const al=[];function Lo(){const L=p.clientWidth,Q=p.clientHeight;g.setPixelRatio(m),g.setSize(L,Q,!1),Dn.setPixelRatio(m),Dn.setSize(L,Q),Ao.uniforms.uAspect.value=L/Q,is.resolution.set(L*m/2,Q*m/2),Hs=L<Q?48:32,y.aspect=M.aspect=L/Q,y.fov=M.fov=Hs,y.updateProjectionMatrix(),M.updateProjectionMatrix();for(const oe of[tn.bioCam,tn.labCam,tn.careCam])oe.aspect=L/Q,oe.fov=L<Q?46:32,oe.updateProjectionMatrix();os=""}let Io=0,ll=innerWidth;addEventListener("resize",()=>{Lo(),innerWidth!==ll&&(ll=innerWidth,Io>0&&Io<=1&&ul(Io*(Po.offsetHeight-innerHeight)))},{signal:e}),Lo(),addEventListener("visibilitychange",()=>{ge.pause(),Ft.pause(),document.hidden||(sl=performance.now(),os="")},{signal:e});function Hh(L){t||(document.hidden||cl(L),n=requestAnimationFrame(Hh))}function cl(L){ei==null||ei.raf(L),j();const Q=L-sl;sl=L,rs=rs*.95+Q*.05,rl<60?(rl++,al.push(Q),rl===60&&(al.sort((ot,It)=>ot-It),Ws=al[30],rs=Ws)):!_e&&rs>Ws*1.35&&m>.75?(m=Math.max(.75,m-.1),Lo(),rs=Ws,ol=L+6e3):!_e&&rs<Ws*1.04&&m<_&&L-ol>2e3&&(m=Math.min(_,m+.05),ol=L,Lo(),rs=Ws);const oe=Po.offsetHeight-innerHeight,Se=nl(oe>0?scrollY/oe:0);oe>0&&innerWidth===ll&&(Io=scrollY/oe),!s&&Se.t>8&&!w&&(w=!0,v("helicopter")),kt(Se),es(Se),Gr(Se),rt&&(rt.hidden=_e?Ge:d.classList.contains("ready")&&Se.i>0),d.style.visibility=Se.i===0&&!Ge?"hidden":"",C==null||C.classList.toggle("is-gone",scrollY>4),p.style.setProperty("--mission-progress",(Se.t/14).toFixed(4));const We=Se.t>1.55&&Se.t<3.05||Se.t>4.9&&Se.t<7.5||Se.t>8.5&&Se.t<12.6,Qe=`${Se.t.toFixed(5)}:${We?Math.floor(L/16):0}`;_e||fe&&Se.i>=5?os="":Qe!==os&&!Vh&&(os=Qe,Ss(Vs(Se.t,L/1e3,Q),Se.t))}T.then(()=>{const L=[0,1,1.9,2.06,2.2,2.7,3.3,4.3,5.3,7.2,8,9,10,11,12,13,14].filter(oe=>!s||oe<=s-.5),Q=()=>{if(t)return;const oe=L.shift();oe!==void 0&&(Ss(Vs(oe,0,16),oe),os="",_e||cl(performance.now()),requestAnimationFrame(Q))};Q()});const qf=document.querySelector(".proto-content");let Vh=!1;document.querySelectorAll(".proto-content section").forEach(L=>L.querySelectorAll("[data-reveal]").forEach((Q,oe)=>Q.style.setProperty("--i",oe)));const hl=new IntersectionObserver(L=>L.forEach(Q=>{Q.isIntersecting&&(Q.target.classList.add("is-in"),hl.unobserve(Q.target))}),{rootMargin:"0px 0px -12% 0px"});document.querySelectorAll("[data-reveal]").forEach(L=>hl.observe(L));const Gh=document.querySelector(".proto-nav,.site-nav"),Yf=[...document.querySelectorAll(".pc-principles,.pc-cta")];function Wh(){if(s)return;const L=qf.getBoundingClientRect().top;p.classList.toggle("is-covered",L<innerHeight*.55),Vh=L<=0,p.style.visibility=L<=-innerHeight?"hidden":"",Gh.classList.toggle("on-light",Yf.some(Q=>{const oe=Q.getBoundingClientRect();return oe.top<64&&oe.bottom>24}))}addEventListener("scroll",Wh,{passive:!0,signal:e}),Wh(),n=requestAnimationFrame(Hh);function $f(){Dn.render();const L=g.getContext(),Q=L.drawingBufferWidth,oe=L.drawingBufferHeight,Se=new Uint8Array(4);let We=0,Qe=0,ot=0;for(let It=1;It<12;It++)for(let ht=1;ht<12;ht++){L.readPixels(Math.floor(Q*ht/12),Math.floor(oe*It/12),1,1,L.RGBA,L.UNSIGNED_BYTE,Se);const Ne=(Se[0]+Se[1]+Se[2])/3;Qe+=Ne,ot++,Ne<6&&We++}return{dark:We/ot,mean:Qe/ot}}window.__proto={boot:F,skyMat:V,world:Vs,draw:Ss,bgCamera:M,sun:U,bgSun:Mt,vehicle:Zn,boosterPlume:qt,stagePlume:xt,act:r,actLength:o,get trackMax(){return Po.offsetHeight-innerHeight},step:()=>cl(performance.now()),get heroReady(){return Ee},probe:$f,later:tn,composer:Dn,bloom:is,get avgFrame(){return rs},get dpr(){return m},renderer:g,earthMat:ye,cloudMat:ft,thorPivot:ln,tesseraPivot:Bt,assets:Yt,camera:y,globe:tt,lenis:ei};function ul(L){ei?ei.scrollTo(L,{immediate:!0,force:!0}):window.scrollTo(0,L)}function jf(L){const Q=Po.offsetHeight-innerHeight,oe=r[L];return oe?(oe.start+hM(L)*oe.length)/o*Q:-1}return{navigationBoundary(){const L=document.getElementById("site-footer");return L?L.offsetTop-innerHeight:1/0},scrollTo(L){ei==null||ei.resize(),ul(L)},goHash(L){const Q=L==="#constellation"?0:Id.findIndex(oe=>`#${oe.id}`===L);return Q<0||!r[Q]?!1:(ul(jf(Q)),!0)},destroy(){var Se,We,Qe;t=!0,i.abort(),cancelAnimationFrame(n),hl.disconnect(),ei==null||ei.destroy(),se.destroy(),fe==null||fe.destroy(),(Se=Re.destroy)==null||Se.call(Re),Ln.dispose();const L=new Set,Q=new Set,oe=new Set;for(const ot of[f,E,tn.bio,tn.lab,tn.care])ot.traverse(It=>{var ht;It.geometry&&L.add(It.geometry);for(const Ne of[].concat(It.material||[])){Q.add(Ne);for(const hn of Object.values(Ne))hn!=null&&hn.isTexture&&oe.add(hn)}(ht=It.shadow)==null||ht.dispose()});L.forEach(ot=>ot.dispose()),Q.forEach(ot=>ot.dispose()),oe.forEach(ot=>ot.dispose()),qn==null||qn.dispose(),O.dispose();for(const ot of[ge,Ft])ot.pause(),ot.removeAttribute("src"),ot.load();Gh.classList.remove("on-light"),document.documentElement.classList.remove("is-focus"),document.documentElement.style.removeProperty("--act-length"),(We=Dn.dispose)==null||We.call(Dn),g.dispose(),g.forceContextLoss(),((Qe=window.__proto)==null?void 0:Qe.renderer)===g&&delete window.__proto}};function Kf(){return Ld()}}export{fM as mountPrototype};
