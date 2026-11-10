/* empty css             */import{L as Jd}from"./lenis-CYo8HTSz.js";/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Dl="169",Qd=0,cu=1,ef=2,zh=1,kh=2,Pi=3,Ni=0,mn=1,pn=2,Ui=0,nr=1,ui=2,lu=3,uu=4,tf=5,ms=100,nf=101,sf=102,rf=103,of=104,af=200,cf=201,lf=202,uf=203,Oc=204,Bc=205,hf=206,df=207,ff=208,pf=209,mf=210,gf=211,_f=212,vf=213,xf=214,zc=0,kc=1,Hc=2,ar=3,Vc=4,Gc=5,Wc=6,Xc=7,Hh=0,yf=1,Mf=2,Zi=0,Vh=1,Gh=2,Wh=3,Ul=4,Sf=5,Xh=6,qh=7,hu="attached",bf="detached",Yh=300,cr=301,lr=302,qc=303,Yc=304,ba=306,vs=1e3,hi=1001,da=1002,vn=1003,jh=1004,Vr=1005,Qt=1006,ta=1007,di=1008,si=1009,Kh=1010,$h=1011,jr=1012,Nl=1013,xs=1014,Ln=1015,An=1016,Fl=1017,Ol=1018,ur=1020,Zh=35902,Jh=1021,Qh=1022,Xn=1023,ed=1024,td=1025,ir=1026,hr=1027,Bl=1028,zl=1029,nd=1030,kl=1031,Hl=1033,na=33776,ia=33777,sa=33778,ra=33779,jc=35840,Kc=35841,$c=35842,Zc=35843,Jc=36196,Qc=37492,el=37496,tl=37808,nl=37809,il=37810,sl=37811,rl=37812,ol=37813,al=37814,cl=37815,ll=37816,ul=37817,hl=37818,dl=37819,fl=37820,pl=37821,oa=36492,ml=36494,gl=36495,id=36283,_l=36284,vl=36285,xl=36286,Kr=2300,$r=2301,qa=2302,du=2400,fu=2401,pu=2402,Ef=2500,Tf=0,sd=1,yl=2,wf=3200,Af=3201,rd=0,Rf=1,ji="",Ft="srgb",tn="srgb-linear",Vl="display-p3",Ea="display-p3-linear",fa="linear",Bt="srgb",pa="rec709",ma="p3",Is=7680,mu=519,Cf=512,Pf=513,Lf=514,od=515,If=516,Df=517,Uf=518,Nf=519,Ml=35044,gu="300 es",Di=2e3,ga=2001;class vr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const i=this._listeners[e];if(i!==void 0){const r=i.indexOf(t);r!==-1&&i.splice(r,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let r=0,o=i.length;r<o;r++)i[r].call(this,e);e.target=null}}}const yn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let _u=1234567;const Xr=Math.PI/180,dr=180/Math.PI;function ni(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(yn[s&255]+yn[s>>8&255]+yn[s>>16&255]+yn[s>>24&255]+"-"+yn[e&255]+yn[e>>8&255]+"-"+yn[e>>16&15|64]+yn[e>>24&255]+"-"+yn[t&63|128]+yn[t>>8&255]+"-"+yn[t>>16&255]+yn[t>>24&255]+yn[n&255]+yn[n>>8&255]+yn[n>>16&255]+yn[n>>24&255]).toLowerCase()}function _n(s,e,t){return Math.max(e,Math.min(t,s))}function Gl(s,e){return(s%e+e)%e}function Ff(s,e,t,n,i){return n+(s-e)*(i-n)/(t-e)}function Of(s,e,t){return s!==e?(t-s)/(e-s):0}function qr(s,e,t){return(1-t)*s+t*e}function Bf(s,e,t,n){return qr(s,e,1-Math.exp(-t*n))}function zf(s,e=1){return e-Math.abs(Gl(s,e*2)-e)}function kf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*(3-2*s))}function Hf(s,e,t){return s<=e?0:s>=t?1:(s=(s-e)/(t-e),s*s*s*(s*(s*6-15)+10))}function Vf(s,e){return s+Math.floor(Math.random()*(e-s+1))}function Gf(s,e){return s+Math.random()*(e-s)}function Wf(s){return s*(.5-Math.random())}function Xf(s){s!==void 0&&(_u=s);let e=_u+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function qf(s){return s*Xr}function Yf(s){return s*dr}function jf(s){return(s&s-1)===0&&s!==0}function Kf(s){return Math.pow(2,Math.ceil(Math.log(s)/Math.LN2))}function $f(s){return Math.pow(2,Math.floor(Math.log(s)/Math.LN2))}function Zf(s,e,t,n,i){const r=Math.cos,o=Math.sin,a=r(t/2),c=o(t/2),l=r((e+n)/2),u=o((e+n)/2),h=r((e-n)/2),d=o((e-n)/2),m=r((n-e)/2),g=o((n-e)/2);switch(i){case"XYX":s.set(a*u,c*h,c*d,a*l);break;case"YZY":s.set(c*d,a*u,c*h,a*l);break;case"ZXZ":s.set(c*h,c*d,a*u,a*l);break;case"XZX":s.set(a*u,c*g,c*m,a*l);break;case"YXY":s.set(c*m,a*u,c*g,a*l);break;case"ZYZ":s.set(c*g,c*m,a*u,a*l);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+i)}}function ti(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("Invalid component type.")}}function Pt(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("Invalid component type.")}}const ad={DEG2RAD:Xr,RAD2DEG:dr,generateUUID:ni,clamp:_n,euclideanModulo:Gl,mapLinear:Ff,inverseLerp:Of,lerp:qr,damp:Bf,pingpong:zf,smoothstep:kf,smootherstep:Hf,randInt:Vf,randFloat:Gf,randFloatSpread:Wf,seededRandom:Xf,degToRad:qf,radToDeg:Yf,isPowerOfTwo:jf,ceilPowerOfTwo:Kf,floorPowerOfTwo:$f,setQuaternionFromProperEuler:Zf,normalize:Pt,denormalize:ti};class Oe{constructor(e=0,t=0){Oe.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),r=this.x-e.x,o=this.y-e.y;return this.x=r*n-o*i+e.x,this.y=r*i+o*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class gt{constructor(e,t,n,i,r,o,a,c,l){gt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l)}set(e,t,n,i,r,o,a,c,l){const u=this.elements;return u[0]=e,u[1]=i,u[2]=a,u[3]=t,u[4]=r,u[5]=c,u[6]=n,u[7]=o,u[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[3],c=n[6],l=n[1],u=n[4],h=n[7],d=n[2],m=n[5],g=n[8],v=i[0],p=i[3],f=i[6],E=i[1],M=i[4],b=i[7],N=i[2],R=i[5],A=i[8];return r[0]=o*v+a*E+c*N,r[3]=o*p+a*M+c*R,r[6]=o*f+a*b+c*A,r[1]=l*v+u*E+h*N,r[4]=l*p+u*M+h*R,r[7]=l*f+u*b+h*A,r[2]=d*v+m*E+g*N,r[5]=d*p+m*M+g*R,r[8]=d*f+m*b+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8];return t*o*u-t*a*l-n*r*u+n*a*c+i*r*l-i*o*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=u*o-a*l,d=a*c-u*r,m=l*r-o*c,g=t*h+n*d+i*m;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=h*v,e[1]=(i*l-u*n)*v,e[2]=(a*n-i*o)*v,e[3]=d*v,e[4]=(u*t-i*c)*v,e[5]=(i*r-a*t)*v,e[6]=m*v,e[7]=(n*c-l*t)*v,e[8]=(o*t-n*r)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,r,o,a){const c=Math.cos(r),l=Math.sin(r);return this.set(n*c,n*l,-n*(c*o+l*a)+o+e,-i*l,i*c,-i*(-l*o+c*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(Ya.makeScale(e,t)),this}rotate(e){return this.premultiply(Ya.makeRotation(-e)),this}translate(e,t){return this.premultiply(Ya.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Ya=new gt;function cd(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Zr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function Jf(){const s=Zr("canvas");return s.style.display="block",s}const vu={};function aa(s){s in vu||(vu[s]=!0,console.warn(s))}function Qf(s,e,t){return new Promise(function(n,i){function r(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:i();break;case s.TIMEOUT_EXPIRED:setTimeout(r,t);break;default:n()}}setTimeout(r,t)})}function ep(s){const e=s.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function tp(s){const e=s.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const xu=new gt().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),yu=new gt().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),Rr={[tn]:{transfer:fa,primaries:pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s,fromReference:s=>s},[Ft]:{transfer:Bt,primaries:pa,luminanceCoefficients:[.2126,.7152,.0722],toReference:s=>s.convertSRGBToLinear(),fromReference:s=>s.convertLinearToSRGB()},[Ea]:{transfer:fa,primaries:ma,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.applyMatrix3(yu),fromReference:s=>s.applyMatrix3(xu)},[Vl]:{transfer:Bt,primaries:ma,luminanceCoefficients:[.2289,.6917,.0793],toReference:s=>s.convertSRGBToLinear().applyMatrix3(yu),fromReference:s=>s.applyMatrix3(xu).convertLinearToSRGB()}},np=new Set([tn,Ea]),bt={enabled:!0,_workingColorSpace:tn,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(s){if(!np.has(s))throw new Error(`Unsupported working color space, "${s}".`);this._workingColorSpace=s},convert:function(s,e,t){if(this.enabled===!1||e===t||!e||!t)return s;const n=Rr[e].toReference,i=Rr[t].fromReference;return i(n(s))},fromWorkingColorSpace:function(s,e){return this.convert(s,this._workingColorSpace,e)},toWorkingColorSpace:function(s,e){return this.convert(s,e,this._workingColorSpace)},getPrimaries:function(s){return Rr[s].primaries},getTransfer:function(s){return s===ji?fa:Rr[s].transfer},getLuminanceCoefficients:function(s,e=this._workingColorSpace){return s.fromArray(Rr[e].luminanceCoefficients)}};function sr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function ja(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Ds;class ip{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{Ds===void 0&&(Ds=Zr("canvas")),Ds.width=e.width,Ds.height=e.height;const n=Ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=Ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Zr("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),r=i.data;for(let o=0;o<r.length;o++)r[o]=sr(r[o]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(sr(t[n]/255)*255):t[n]=sr(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let sp=0;class ld{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=ni(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let r;if(Array.isArray(i)){r=[];for(let o=0,a=i.length;o<a;o++)i[o].isDataTexture?r.push(Ka(i[o].image)):r.push(Ka(i[o]))}else r=Ka(i);n.url=r}return t||(e.images[this.uuid]=n),n}}function Ka(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?ip.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let rp=0;class en extends vr{constructor(e=en.DEFAULT_IMAGE,t=en.DEFAULT_MAPPING,n=hi,i=hi,r=Qt,o=di,a=Xn,c=si,l=en.DEFAULT_ANISOTROPY,u=ji){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:rp++}),this.uuid=ni(),this.name="",this.source=new ld(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=r,this.minFilter=o,this.anisotropy=l,this.format=a,this.internalFormat=null,this.type=c,this.offset=new Oe(0,0),this.repeat=new Oe(1,1),this.center=new Oe(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Yh)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case vs:e.x=e.x-Math.floor(e.x);break;case hi:e.x=e.x<0?0:1;break;case da:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case vs:e.y=e.y-Math.floor(e.y);break;case hi:e.y=e.y<0?0:1;break;case da:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}en.DEFAULT_IMAGE=null;en.DEFAULT_MAPPING=Yh;en.DEFAULT_ANISOTROPY=1;class wt{constructor(e=0,t=0,n=0,i=1){wt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=this.w,o=e.elements;return this.x=o[0]*t+o[4]*n+o[8]*i+o[12]*r,this.y=o[1]*t+o[5]*n+o[9]*i+o[13]*r,this.z=o[2]*t+o[6]*n+o[10]*i+o[14]*r,this.w=o[3]*t+o[7]*n+o[11]*i+o[15]*r,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,r;const c=e.elements,l=c[0],u=c[4],h=c[8],d=c[1],m=c[5],g=c[9],v=c[2],p=c[6],f=c[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(g-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(g+p)<.1&&Math.abs(l+m+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const M=(l+1)/2,b=(m+1)/2,N=(f+1)/2,R=(u+d)/4,A=(h+v)/4,C=(g+p)/4;return M>b&&M>N?M<.01?(n=0,i=.707106781,r=.707106781):(n=Math.sqrt(M),i=R/n,r=A/n):b>N?b<.01?(n=.707106781,i=0,r=.707106781):(i=Math.sqrt(b),n=R/i,r=C/i):N<.01?(n=.707106781,i=.707106781,r=0):(r=Math.sqrt(N),n=A/r,i=C/r),this.set(n,i,r,t),this}let E=Math.sqrt((p-g)*(p-g)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(E)<.001&&(E=1),this.x=(p-g)/E,this.y=(h-v)/E,this.z=(d-u)/E,this.w=Math.acos((l+m+f-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class op extends vr{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new wt(0,0,e,t),this.scissorTest=!1,this.viewport=new wt(0,0,e,t);const i={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Qt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const r=new en(i,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);r.flipY=!1,r.generateMipmaps=n.generateMipmaps,r.internalFormat=n.internalFormat,this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,r=this.textures.length;i<r;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new ld(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class qn extends op{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class ud extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class ap extends en{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=vn,this.minFilter=vn,this.wrapR=hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,r,o,a){let c=n[i+0],l=n[i+1],u=n[i+2],h=n[i+3];const d=r[o+0],m=r[o+1],g=r[o+2],v=r[o+3];if(a===0){e[t+0]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h;return}if(a===1){e[t+0]=d,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(h!==v||c!==d||l!==m||u!==g){let p=1-a;const f=c*d+l*m+u*g+h*v,E=f>=0?1:-1,M=1-f*f;if(M>Number.EPSILON){const N=Math.sqrt(M),R=Math.atan2(N,f*E);p=Math.sin(p*R)/N,a=Math.sin(a*R)/N}const b=a*E;if(c=c*p+d*b,l=l*p+m*b,u=u*p+g*b,h=h*p+v*b,p===1-a){const N=1/Math.sqrt(c*c+l*l+u*u+h*h);c*=N,l*=N,u*=N,h*=N}}e[t]=c,e[t+1]=l,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,i,r,o){const a=n[i],c=n[i+1],l=n[i+2],u=n[i+3],h=r[o],d=r[o+1],m=r[o+2],g=r[o+3];return e[t]=a*g+u*h+c*m-l*d,e[t+1]=c*g+u*d+l*h-a*m,e[t+2]=l*g+u*m+a*d-c*h,e[t+3]=u*g-a*h-c*d-l*m,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,r=e._z,o=e._order,a=Math.cos,c=Math.sin,l=a(n/2),u=a(i/2),h=a(r/2),d=c(n/2),m=c(i/2),g=c(r/2);switch(o){case"XYZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"YXZ":this._x=d*u*h+l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"ZXY":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h-d*m*g;break;case"ZYX":this._x=d*u*h-l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h+d*m*g;break;case"YZX":this._x=d*u*h+l*m*g,this._y=l*m*h+d*u*g,this._z=l*u*g-d*m*h,this._w=l*u*h-d*m*g;break;case"XZY":this._x=d*u*h-l*m*g,this._y=l*m*h-d*u*g,this._z=l*u*g+d*m*h,this._w=l*u*h+d*m*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],r=t[8],o=t[1],a=t[5],c=t[9],l=t[2],u=t[6],h=t[10],d=n+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-c)*m,this._y=(r-l)*m,this._z=(o-i)*m}else if(n>a&&n>h){const m=2*Math.sqrt(1+n-a-h);this._w=(u-c)/m,this._x=.25*m,this._y=(i+o)/m,this._z=(r+l)/m}else if(a>h){const m=2*Math.sqrt(1+a-n-h);this._w=(r-l)/m,this._x=(i+o)/m,this._y=.25*m,this._z=(c+u)/m}else{const m=2*Math.sqrt(1+h-n-a);this._w=(o-i)/m,this._x=(r+l)/m,this._y=(c+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_n(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,r=e._z,o=e._w,a=t._x,c=t._y,l=t._z,u=t._w;return this._x=n*u+o*a+i*l-r*c,this._y=i*u+o*c+r*a-n*l,this._z=r*u+o*l+n*c-i*a,this._w=o*u-n*a-i*c-r*l,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,i=this._y,r=this._z,o=this._w;let a=o*e._w+n*e._x+i*e._y+r*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=n,this._y=i,this._z=r,this;const c=1-a*a;if(c<=Number.EPSILON){const m=1-t;return this._w=m*o+t*this._w,this._x=m*n+t*this._x,this._y=m*i+t*this._y,this._z=m*r+t*this._z,this.normalize(),this}const l=Math.sqrt(c),u=Math.atan2(l,a),h=Math.sin((1-t)*u)/l,d=Math.sin(t*u)/l;return this._w=o*h+this._w*d,this._x=n*h+this._x*d,this._y=i*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),r=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),r*Math.sin(t),r*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class L{constructor(e=0,t=0,n=0){L.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Mu.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Mu.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6]*i,this.y=r[1]*t+r[4]*n+r[7]*i,this.z=r[2]*t+r[5]*n+r[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,r=e.elements,o=1/(r[3]*t+r[7]*n+r[11]*i+r[15]);return this.x=(r[0]*t+r[4]*n+r[8]*i+r[12])*o,this.y=(r[1]*t+r[5]*n+r[9]*i+r[13])*o,this.z=(r[2]*t+r[6]*n+r[10]*i+r[14])*o,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,r=e.x,o=e.y,a=e.z,c=e.w,l=2*(o*i-a*n),u=2*(a*t-r*i),h=2*(r*n-o*t);return this.x=t+c*l+o*h-a*u,this.y=n+c*u+a*l-r*h,this.z=i+c*h+r*u-o*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,r=e.elements;return this.x=r[0]*t+r[4]*n+r[8]*i,this.y=r[1]*t+r[5]*n+r[9]*i,this.z=r[2]*t+r[6]*n+r[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,r=e.z,o=t.x,a=t.y,c=t.z;return this.x=i*c-r*a,this.y=r*o-n*c,this.z=n*a-i*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return $a.copy(this).projectOnVector(e),this.sub($a)}reflect(e){return this.sub($a.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(_n(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const $a=new L,Mu=new Fi;class Fn{constructor(e=new L(1/0,1/0,1/0),t=new L(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Zn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Zn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Zn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const r=n.getAttribute("position");if(t===!0&&r!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,Zn):Zn.fromBufferAttribute(r,o),Zn.applyMatrix4(e.matrixWorld),this.expandByPoint(Zn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),bo.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),bo.copy(n.boundingBox)),bo.applyMatrix4(e.matrixWorld),this.union(bo)}const i=e.children;for(let r=0,o=i.length;r<o;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Zn),Zn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Cr),Eo.subVectors(this.max,Cr),Us.subVectors(e.a,Cr),Ns.subVectors(e.b,Cr),Fs.subVectors(e.c,Cr),ki.subVectors(Ns,Us),Hi.subVectors(Fs,Ns),os.subVectors(Us,Fs);let t=[0,-ki.z,ki.y,0,-Hi.z,Hi.y,0,-os.z,os.y,ki.z,0,-ki.x,Hi.z,0,-Hi.x,os.z,0,-os.x,-ki.y,ki.x,0,-Hi.y,Hi.x,0,-os.y,os.x,0];return!Za(t,Us,Ns,Fs,Eo)||(t=[1,0,0,0,1,0,0,0,1],!Za(t,Us,Ns,Fs,Eo))?!1:(To.crossVectors(ki,Hi),t=[To.x,To.y,To.z],Za(t,Us,Ns,Fs,Eo))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Zn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Zn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ei[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ei[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ei[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ei[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ei[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ei[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ei[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ei[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ei),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ei=[new L,new L,new L,new L,new L,new L,new L,new L],Zn=new L,bo=new Fn,Us=new L,Ns=new L,Fs=new L,ki=new L,Hi=new L,os=new L,Cr=new L,Eo=new L,To=new L,as=new L;function Za(s,e,t,n,i){for(let r=0,o=s.length-3;r<=o;r+=3){as.fromArray(s,r);const a=i.x*Math.abs(as.x)+i.y*Math.abs(as.y)+i.z*Math.abs(as.z),c=e.dot(as),l=t.dot(as),u=n.dot(as);if(Math.max(-Math.max(c,l,u),Math.min(c,l,u))>a)return!1}return!0}const cp=new Fn,Pr=new L,Ja=new L;class pi{constructor(e=new L,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):cp.setFromPoints(e).getCenter(n);let i=0;for(let r=0,o=e.length;r<o;r++)i=Math.max(i,n.distanceToSquared(e[r]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Pr.subVectors(e,this.center);const t=Pr.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(Pr,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Ja.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Pr.copy(e.center).add(Ja)),this.expandByPoint(Pr.copy(e.center).sub(Ja))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ti=new L,Qa=new L,wo=new L,Vi=new L,ec=new L,Ao=new L,tc=new L;class Ta{constructor(e=new L,t=new L(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ti)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ti.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ti.copy(this.origin).addScaledVector(this.direction,t),Ti.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Qa.copy(e).add(t).multiplyScalar(.5),wo.copy(t).sub(e).normalize(),Vi.copy(this.origin).sub(Qa);const r=e.distanceTo(t)*.5,o=-this.direction.dot(wo),a=Vi.dot(this.direction),c=-Vi.dot(wo),l=Vi.lengthSq(),u=Math.abs(1-o*o);let h,d,m,g;if(u>0)if(h=o*c-a,d=o*a-c,g=r*u,h>=0)if(d>=-g)if(d<=g){const v=1/u;h*=v,d*=v,m=h*(h+o*d+2*a)+d*(o*h+d+2*c)+l}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;else d<=-g?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l):d<=g?(h=0,d=Math.min(Math.max(-r,-c),r),m=d*(d+2*c)+l):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-c),r),m=-h*h+d*(d+2*c)+l);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,h),i&&i.copy(Qa).addScaledVector(wo,d),m}intersectSphere(e,t){Ti.subVectors(e.center,this.origin);const n=Ti.dot(this.direction),i=Ti.dot(Ti)-n*n,r=e.radius*e.radius;if(i>r)return null;const o=Math.sqrt(r-i),a=n-o,c=n+o;return c<0?null:a<0?this.at(c,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,r,o,a,c;const l=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return l>=0?(n=(e.min.x-d.x)*l,i=(e.max.x-d.x)*l):(n=(e.max.x-d.x)*l,i=(e.min.x-d.x)*l),u>=0?(r=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(r=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),n>o||r>i||((r>n||isNaN(n))&&(n=r),(o<i||isNaN(i))&&(i=o),h>=0?(a=(e.min.z-d.z)*h,c=(e.max.z-d.z)*h):(a=(e.max.z-d.z)*h,c=(e.min.z-d.z)*h),n>c||a>i)||((a>n||n!==n)&&(n=a),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ti)!==null}intersectTriangle(e,t,n,i,r){ec.subVectors(t,e),Ao.subVectors(n,e),tc.crossVectors(ec,Ao);let o=this.direction.dot(tc),a;if(o>0){if(i)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Vi.subVectors(this.origin,e);const c=a*this.direction.dot(Ao.crossVectors(Vi,Ao));if(c<0)return null;const l=a*this.direction.dot(ec.cross(Vi));if(l<0||c+l>o)return null;const u=-a*Vi.dot(tc);return u<0?null:this.at(u/o,r)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class st{constructor(e,t,n,i,r,o,a,c,l,u,h,d,m,g,v,p){st.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,r,o,a,c,l,u,h,d,m,g,v,p)}set(e,t,n,i,r,o,a,c,l,u,h,d,m,g,v,p){const f=this.elements;return f[0]=e,f[4]=t,f[8]=n,f[12]=i,f[1]=r,f[5]=o,f[9]=a,f[13]=c,f[2]=l,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=g,f[11]=v,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new st().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,i=1/Os.setFromMatrixColumn(e,0).length(),r=1/Os.setFromMatrixColumn(e,1).length(),o=1/Os.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*r,t[5]=n[5]*r,t[6]=n[6]*r,t[7]=0,t[8]=n[8]*o,t[9]=n[9]*o,t[10]=n[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,r=e.z,o=Math.cos(n),a=Math.sin(n),c=Math.cos(i),l=Math.sin(i),u=Math.cos(r),h=Math.sin(r);if(e.order==="XYZ"){const d=o*u,m=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=-c*h,t[8]=l,t[1]=m+g*l,t[5]=d-v*l,t[9]=-a*c,t[2]=v-d*l,t[6]=g+m*l,t[10]=o*c}else if(e.order==="YXZ"){const d=c*u,m=c*h,g=l*u,v=l*h;t[0]=d+v*a,t[4]=g*a-m,t[8]=o*l,t[1]=o*h,t[5]=o*u,t[9]=-a,t[2]=m*a-g,t[6]=v+d*a,t[10]=o*c}else if(e.order==="ZXY"){const d=c*u,m=c*h,g=l*u,v=l*h;t[0]=d-v*a,t[4]=-o*h,t[8]=g+m*a,t[1]=m+g*a,t[5]=o*u,t[9]=v-d*a,t[2]=-o*l,t[6]=a,t[10]=o*c}else if(e.order==="ZYX"){const d=o*u,m=o*h,g=a*u,v=a*h;t[0]=c*u,t[4]=g*l-m,t[8]=d*l+v,t[1]=c*h,t[5]=v*l+d,t[9]=m*l-g,t[2]=-l,t[6]=a*c,t[10]=o*c}else if(e.order==="YZX"){const d=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=v-d*h,t[8]=g*h+m,t[1]=h,t[5]=o*u,t[9]=-a*u,t[2]=-l*u,t[6]=m*h+g,t[10]=d-v*h}else if(e.order==="XZY"){const d=o*c,m=o*l,g=a*c,v=a*l;t[0]=c*u,t[4]=-h,t[8]=l*u,t[1]=d*h+v,t[5]=o*u,t[9]=m*h-g,t[2]=g*h-m,t[6]=a*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(lp,e,up)}lookAt(e,t,n){const i=this.elements;return Un.subVectors(e,t),Un.lengthSq()===0&&(Un.z=1),Un.normalize(),Gi.crossVectors(n,Un),Gi.lengthSq()===0&&(Math.abs(n.z)===1?Un.x+=1e-4:Un.z+=1e-4,Un.normalize(),Gi.crossVectors(n,Un)),Gi.normalize(),Ro.crossVectors(Un,Gi),i[0]=Gi.x,i[4]=Ro.x,i[8]=Un.x,i[1]=Gi.y,i[5]=Ro.y,i[9]=Un.y,i[2]=Gi.z,i[6]=Ro.z,i[10]=Un.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,r=this.elements,o=n[0],a=n[4],c=n[8],l=n[12],u=n[1],h=n[5],d=n[9],m=n[13],g=n[2],v=n[6],p=n[10],f=n[14],E=n[3],M=n[7],b=n[11],N=n[15],R=i[0],A=i[4],C=i[8],Y=i[12],_=i[1],y=i[5],H=i[9],U=i[13],D=i[2],$=i[6],F=i[10],te=i[14],z=i[3],ue=i[7],le=i[11],we=i[15];return r[0]=o*R+a*_+c*D+l*z,r[4]=o*A+a*y+c*$+l*ue,r[8]=o*C+a*H+c*F+l*le,r[12]=o*Y+a*U+c*te+l*we,r[1]=u*R+h*_+d*D+m*z,r[5]=u*A+h*y+d*$+m*ue,r[9]=u*C+h*H+d*F+m*le,r[13]=u*Y+h*U+d*te+m*we,r[2]=g*R+v*_+p*D+f*z,r[6]=g*A+v*y+p*$+f*ue,r[10]=g*C+v*H+p*F+f*le,r[14]=g*Y+v*U+p*te+f*we,r[3]=E*R+M*_+b*D+N*z,r[7]=E*A+M*y+b*$+N*ue,r[11]=E*C+M*H+b*F+N*le,r[15]=E*Y+M*U+b*te+N*we,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],r=e[12],o=e[1],a=e[5],c=e[9],l=e[13],u=e[2],h=e[6],d=e[10],m=e[14],g=e[3],v=e[7],p=e[11],f=e[15];return g*(+r*c*h-i*l*h-r*a*d+n*l*d+i*a*m-n*c*m)+v*(+t*c*m-t*l*d+r*o*d-i*o*m+i*l*u-r*c*u)+p*(+t*l*h-t*a*m-r*o*h+n*o*m+r*a*u-n*l*u)+f*(-i*a*u-t*c*h+t*a*d+i*o*h-n*o*d+n*c*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],r=e[3],o=e[4],a=e[5],c=e[6],l=e[7],u=e[8],h=e[9],d=e[10],m=e[11],g=e[12],v=e[13],p=e[14],f=e[15],E=h*p*l-v*d*l+v*c*m-a*p*m-h*c*f+a*d*f,M=g*d*l-u*p*l-g*c*m+o*p*m+u*c*f-o*d*f,b=u*v*l-g*h*l+g*a*m-o*v*m-u*a*f+o*h*f,N=g*h*c-u*v*c-g*a*d+o*v*d+u*a*p-o*h*p,R=t*E+n*M+i*b+r*N;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/R;return e[0]=E*A,e[1]=(v*d*r-h*p*r-v*i*m+n*p*m+h*i*f-n*d*f)*A,e[2]=(a*p*r-v*c*r+v*i*l-n*p*l-a*i*f+n*c*f)*A,e[3]=(h*c*r-a*d*r-h*i*l+n*d*l+a*i*m-n*c*m)*A,e[4]=M*A,e[5]=(u*p*r-g*d*r+g*i*m-t*p*m-u*i*f+t*d*f)*A,e[6]=(g*c*r-o*p*r-g*i*l+t*p*l+o*i*f-t*c*f)*A,e[7]=(o*d*r-u*c*r+u*i*l-t*d*l-o*i*m+t*c*m)*A,e[8]=b*A,e[9]=(g*h*r-u*v*r-g*n*m+t*v*m+u*n*f-t*h*f)*A,e[10]=(o*v*r-g*a*r+g*n*l-t*v*l-o*n*f+t*a*f)*A,e[11]=(u*a*r-o*h*r-u*n*l+t*h*l+o*n*m-t*a*m)*A,e[12]=N*A,e[13]=(u*v*i-g*h*i+g*n*d-t*v*d-u*n*p+t*h*p)*A,e[14]=(g*a*i-o*v*i-g*n*c+t*v*c+o*n*p-t*a*p)*A,e[15]=(o*h*i-u*a*i+u*n*c-t*h*c-o*n*d+t*a*d)*A,this}scale(e){const t=this.elements,n=e.x,i=e.y,r=e.z;return t[0]*=n,t[4]*=i,t[8]*=r,t[1]*=n,t[5]*=i,t[9]*=r,t[2]*=n,t[6]*=i,t[10]*=r,t[3]*=n,t[7]*=i,t[11]*=r,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),r=1-n,o=e.x,a=e.y,c=e.z,l=r*o,u=r*a;return this.set(l*o+n,l*a-i*c,l*c+i*a,0,l*a+i*c,u*a+n,u*c-i*o,0,l*c-i*a,u*c+i*o,r*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,r,o){return this.set(1,n,r,0,e,1,o,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,r=t._x,o=t._y,a=t._z,c=t._w,l=r+r,u=o+o,h=a+a,d=r*l,m=r*u,g=r*h,v=o*u,p=o*h,f=a*h,E=c*l,M=c*u,b=c*h,N=n.x,R=n.y,A=n.z;return i[0]=(1-(v+f))*N,i[1]=(m+b)*N,i[2]=(g-M)*N,i[3]=0,i[4]=(m-b)*R,i[5]=(1-(d+f))*R,i[6]=(p+E)*R,i[7]=0,i[8]=(g+M)*A,i[9]=(p-E)*A,i[10]=(1-(d+v))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;let r=Os.set(i[0],i[1],i[2]).length();const o=Os.set(i[4],i[5],i[6]).length(),a=Os.set(i[8],i[9],i[10]).length();this.determinant()<0&&(r=-r),e.x=i[12],e.y=i[13],e.z=i[14],Jn.copy(this);const l=1/r,u=1/o,h=1/a;return Jn.elements[0]*=l,Jn.elements[1]*=l,Jn.elements[2]*=l,Jn.elements[4]*=u,Jn.elements[5]*=u,Jn.elements[6]*=u,Jn.elements[8]*=h,Jn.elements[9]*=h,Jn.elements[10]*=h,t.setFromRotationMatrix(Jn),n.x=r,n.y=o,n.z=a,this}makePerspective(e,t,n,i,r,o,a=Di){const c=this.elements,l=2*r/(t-e),u=2*r/(n-i),h=(t+e)/(t-e),d=(n+i)/(n-i);let m,g;if(a===Di)m=-(o+r)/(o-r),g=-2*o*r/(o-r);else if(a===ga)m=-o/(o-r),g=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=l,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=d,c[13]=0,c[2]=0,c[6]=0,c[10]=m,c[14]=g,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,n,i,r,o,a=Di){const c=this.elements,l=1/(t-e),u=1/(n-i),h=1/(o-r),d=(t+e)*l,m=(n+i)*u;let g,v;if(a===Di)g=(o+r)*h,v=-2*h;else if(a===ga)g=r*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=2*l,c[4]=0,c[8]=0,c[12]=-d,c[1]=0,c[5]=2*u,c[9]=0,c[13]=-m,c[2]=0,c[6]=0,c[10]=v,c[14]=-g,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const Os=new L,Jn=new st,lp=new L(0,0,0),up=new L(1,1,1),Gi=new L,Ro=new L,Un=new L,Su=new st,bu=new Fi;class fi{constructor(e=0,t=0,n=0,i=fi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,r=i[0],o=i[4],a=i[8],c=i[1],l=i[5],u=i[9],h=i[2],d=i[6],m=i[10];switch(t){case"XYZ":this._y=Math.asin(_n(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,l),this._z=0);break;case"YXZ":this._x=Math.asin(-_n(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(_n(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,l)):(this._y=0,this._z=Math.atan2(c,r));break;case"ZYX":this._y=Math.asin(-_n(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(c,r)):(this._x=0,this._z=Math.atan2(-o,l));break;case"YZX":this._z=Math.asin(_n(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-u,l),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-_n(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,l),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Su.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Su,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return bu.setFromEuler(this),this.setFromQuaternion(bu,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}fi.DEFAULT_ORDER="XYZ";class hd{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hp=0;const Eu=new L,Bs=new Fi,wi=new st,Co=new L,Lr=new L,dp=new L,fp=new Fi,Tu=new L(1,0,0),wu=new L(0,1,0),Au=new L(0,0,1),Ru={type:"added"},pp={type:"removed"},zs={type:"childadded",child:null},nc={type:"childremoved",child:null};class kt extends vr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hp++}),this.uuid=ni(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=kt.DEFAULT_UP.clone();const e=new L,t=new fi,n=new Fi,i=new L(1,1,1);function r(){n.setFromEuler(t,!1)}function o(){t.setFromQuaternion(n,void 0,!1)}t._onChange(r),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new st},normalMatrix:{value:new gt}}),this.matrix=new st,this.matrixWorld=new st,this.matrixAutoUpdate=kt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new hd,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.multiply(Bs),this}rotateOnWorldAxis(e,t){return Bs.setFromAxisAngle(e,t),this.quaternion.premultiply(Bs),this}rotateX(e){return this.rotateOnAxis(Tu,e)}rotateY(e){return this.rotateOnAxis(wu,e)}rotateZ(e){return this.rotateOnAxis(Au,e)}translateOnAxis(e,t){return Eu.copy(e).applyQuaternion(this.quaternion),this.position.add(Eu.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Tu,e)}translateY(e){return this.translateOnAxis(wu,e)}translateZ(e){return this.translateOnAxis(Au,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(wi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?Co.copy(e):Co.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),Lr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?wi.lookAt(Lr,Co,this.up):wi.lookAt(Co,Lr,this.up),this.quaternion.setFromRotationMatrix(wi),i&&(wi.extractRotation(i.matrixWorld),Bs.setFromRotationMatrix(wi),this.quaternion.premultiply(Bs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Ru),zs.child=e,this.dispatchEvent(zs),zs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(pp),nc.child=e,this.dispatchEvent(nc),nc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),wi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),wi.multiply(e.parent.matrixWorld)),e.applyMatrix4(wi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Ru),zs.child=e,this.dispatchEvent(zs),zs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const o=this.children[n].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,e,dp),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Lr,fp,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const i=this.children;for(let r=0,o=i.length;r<o;r++)i[r].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.castShadow===!0&&(i.castShadow=!0),this.receiveShadow===!0&&(i.receiveShadow=!0),this.visible===!1&&(i.visible=!1),this.frustumCulled===!1&&(i.frustumCulled=!1),this.renderOrder!==0&&(i.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(i.matrixAutoUpdate=!1),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.visibility=this._visibility,i.active=this._active,i.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.geometryCount=this._geometryCount,i.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere={center:i.boundingSphere.center.toArray(),radius:i.boundingSphere.radius}),this.boundingBox!==null&&(i.boundingBox={min:i.boundingBox.min.toArray(),max:i.boundingBox.max.toArray()}));function r(a,c){return a[c.uuid]===void 0&&(a[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=r(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const c=a.shapes;if(Array.isArray(c))for(let l=0,u=c.length;l<u;l++){const h=c[l];r(e.shapes,h)}else r(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let c=0,l=this.material.length;c<l;c++)a.push(r(e.materials,this.material[c]));i.material=a}else i.material=r(e.materials,this.material);if(this.children.length>0){i.children=[];for(let a=0;a<this.children.length;a++)i.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let a=0;a<this.animations.length;a++){const c=this.animations[a];i.animations.push(r(e.animations,c))}}if(t){const a=o(e.geometries),c=o(e.materials),l=o(e.textures),u=o(e.images),h=o(e.shapes),d=o(e.skeletons),m=o(e.animations),g=o(e.nodes);a.length>0&&(n.geometries=a),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),m.length>0&&(n.animations=m),g.length>0&&(n.nodes=g)}return n.object=i,n;function o(a){const c=[];for(const l in a){const u=a[l];delete u.metadata,c.push(u)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}}kt.DEFAULT_UP=new L(0,1,0);kt.DEFAULT_MATRIX_AUTO_UPDATE=!0;kt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Qn=new L,Ai=new L,ic=new L,Ri=new L,ks=new L,Hs=new L,Cu=new L,sc=new L,rc=new L,oc=new L,ac=new wt,cc=new wt,lc=new wt;class Wn{constructor(e=new L,t=new L,n=new L){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),Qn.subVectors(e,t),i.cross(Qn);const r=i.lengthSq();return r>0?i.multiplyScalar(1/Math.sqrt(r)):i.set(0,0,0)}static getBarycoord(e,t,n,i,r){Qn.subVectors(i,t),Ai.subVectors(n,t),ic.subVectors(e,t);const o=Qn.dot(Qn),a=Qn.dot(Ai),c=Qn.dot(ic),l=Ai.dot(Ai),u=Ai.dot(ic),h=o*l-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(l*c-a*u)*d,g=(o*u-a*c)*d;return r.set(1-m-g,g,m)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ri)===null?!1:Ri.x>=0&&Ri.y>=0&&Ri.x+Ri.y<=1}static getInterpolation(e,t,n,i,r,o,a,c){return this.getBarycoord(e,t,n,i,Ri)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(r,Ri.x),c.addScaledVector(o,Ri.y),c.addScaledVector(a,Ri.z),c)}static getInterpolatedAttribute(e,t,n,i,r,o){return ac.setScalar(0),cc.setScalar(0),lc.setScalar(0),ac.fromBufferAttribute(e,t),cc.fromBufferAttribute(e,n),lc.fromBufferAttribute(e,i),o.setScalar(0),o.addScaledVector(ac,r.x),o.addScaledVector(cc,r.y),o.addScaledVector(lc,r.z),o}static isFrontFacing(e,t,n,i){return Qn.subVectors(n,t),Ai.subVectors(e,t),Qn.cross(Ai).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Qn.subVectors(this.c,this.b),Ai.subVectors(this.a,this.b),Qn.cross(Ai).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Wn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Wn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,r){return Wn.getInterpolation(e,this.a,this.b,this.c,t,n,i,r)}containsPoint(e){return Wn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Wn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,r=this.c;let o,a;ks.subVectors(i,n),Hs.subVectors(r,n),sc.subVectors(e,n);const c=ks.dot(sc),l=Hs.dot(sc);if(c<=0&&l<=0)return t.copy(n);rc.subVectors(e,i);const u=ks.dot(rc),h=Hs.dot(rc);if(u>=0&&h<=u)return t.copy(i);const d=c*h-u*l;if(d<=0&&c>=0&&u<=0)return o=c/(c-u),t.copy(n).addScaledVector(ks,o);oc.subVectors(e,r);const m=ks.dot(oc),g=Hs.dot(oc);if(g>=0&&m<=g)return t.copy(r);const v=m*l-c*g;if(v<=0&&l>=0&&g<=0)return a=l/(l-g),t.copy(n).addScaledVector(Hs,a);const p=u*g-m*h;if(p<=0&&h-u>=0&&m-g>=0)return Cu.subVectors(r,i),a=(h-u)/(h-u+(m-g)),t.copy(i).addScaledVector(Cu,a);const f=1/(p+v+d);return o=v*f,a=d*f,t.copy(n).addScaledVector(ks,o).addScaledVector(Hs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const dd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Wi={h:0,s:0,l:0},Po={h:0,s:0,l:0};function uc(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class Pe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Ft){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,bt.toWorkingColorSpace(this,t),this}setRGB(e,t,n,i=bt.workingColorSpace){return this.r=e,this.g=t,this.b=n,bt.toWorkingColorSpace(this,i),this}setHSL(e,t,n,i=bt.workingColorSpace){if(e=Gl(e,1),t=_n(t,0,1),n=_n(n,0,1),t===0)this.r=this.g=this.b=n;else{const r=n<=.5?n*(1+t):n+t-n*t,o=2*n-r;this.r=uc(o,r,e+1/3),this.g=uc(o,r,e),this.b=uc(o,r,e-1/3)}return bt.toWorkingColorSpace(this,i),this}setStyle(e,t=Ft){function n(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let r;const o=i[1],a=i[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,t);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,t);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const r=i[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(r,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Ft){const n=dd[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=sr(e.r),this.g=sr(e.g),this.b=sr(e.b),this}copyLinearToSRGB(e){return this.r=ja(e.r),this.g=ja(e.g),this.b=ja(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Ft){return bt.fromWorkingColorSpace(Mn.copy(this),e),Math.round(_n(Mn.r*255,0,255))*65536+Math.round(_n(Mn.g*255,0,255))*256+Math.round(_n(Mn.b*255,0,255))}getHexString(e=Ft){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=bt.workingColorSpace){bt.fromWorkingColorSpace(Mn.copy(this),t);const n=Mn.r,i=Mn.g,r=Mn.b,o=Math.max(n,i,r),a=Math.min(n,i,r);let c,l;const u=(a+o)/2;if(a===o)c=0,l=0;else{const h=o-a;switch(l=u<=.5?h/(o+a):h/(2-o-a),o){case n:c=(i-r)/h+(i<r?6:0);break;case i:c=(r-n)/h+2;break;case r:c=(n-i)/h+4;break}c/=6}return e.h=c,e.s=l,e.l=u,e}getRGB(e,t=bt.workingColorSpace){return bt.fromWorkingColorSpace(Mn.copy(this),t),e.r=Mn.r,e.g=Mn.g,e.b=Mn.b,e}getStyle(e=Ft){bt.fromWorkingColorSpace(Mn.copy(this),e);const t=Mn.r,n=Mn.g,i=Mn.b;return e!==Ft?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(Wi),this.setHSL(Wi.h+e,Wi.s+t,Wi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Wi),e.getHSL(Po);const n=qr(Wi.h,Po.h,t),i=qr(Wi.s,Po.s,t),r=qr(Wi.l,Po.l,t);return this.setHSL(n,i,r),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,r=e.elements;return this.r=r[0]*t+r[3]*n+r[6]*i,this.g=r[1]*t+r[4]*n+r[7]*i,this.b=r[2]*t+r[5]*n+r[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Mn=new Pe;Pe.NAMES=dd;let mp=0;class ii extends vr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:mp++}),this.uuid=ni(),this.name="",this.type="Material",this.blending=nr,this.side=Ni,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Oc,this.blendDst=Bc,this.blendEquation=ms,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pe(0,0,0),this.blendAlpha=0,this.depthFunc=ar,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=mu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Is,this.stencilZFail=Is,this.stencilZPass=Is,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==nr&&(n.blending=this.blending),this.side!==Ni&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Oc&&(n.blendSrc=this.blendSrc),this.blendDst!==Bc&&(n.blendDst=this.blendDst),this.blendEquation!==ms&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==ar&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==mu&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Is&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Is&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Is&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(r){const o=[];for(const a in r){const c=r[a];delete c.metadata,o.push(c)}return o}if(t){const r=i(e.textures),o=i(e.images);r.length>0&&(n.textures=r),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let r=0;r!==i;++r)n[r]=t[r].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class Wt extends ii{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.combine=Hh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ii=gp();function gp(){const s=new ArrayBuffer(4),e=new Float32Array(s),t=new Uint32Array(s),n=new Uint32Array(512),i=new Uint32Array(512);for(let c=0;c<256;++c){const l=c-127;l<-27?(n[c]=0,n[c|256]=32768,i[c]=24,i[c|256]=24):l<-14?(n[c]=1024>>-l-14,n[c|256]=1024>>-l-14|32768,i[c]=-l-1,i[c|256]=-l-1):l<=15?(n[c]=l+15<<10,n[c|256]=l+15<<10|32768,i[c]=13,i[c|256]=13):l<128?(n[c]=31744,n[c|256]=64512,i[c]=24,i[c|256]=24):(n[c]=31744,n[c|256]=64512,i[c]=13,i[c|256]=13)}const r=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let c=1;c<1024;++c){let l=c<<13,u=0;for(;(l&8388608)===0;)l<<=1,u-=8388608;l&=-8388609,u+=947912704,r[c]=l|u}for(let c=1024;c<2048;++c)r[c]=939524096+(c-1024<<13);for(let c=1;c<31;++c)o[c]=c<<23;o[31]=1199570944,o[32]=2147483648;for(let c=33;c<63;++c)o[c]=2147483648+(c-32<<23);o[63]=3347054592;for(let c=1;c<64;++c)c!==32&&(a[c]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:i,mantissaTable:r,exponentTable:o,offsetTable:a}}function _p(s){Math.abs(s)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),s=_n(s,-65504,65504),Ii.floatView[0]=s;const e=Ii.uint32View[0],t=e>>23&511;return Ii.baseTable[t]+((e&8388607)>>Ii.shiftTable[t])}function vp(s){const e=s>>10;return Ii.uint32View[0]=Ii.mantissaTable[Ii.offsetTable[e]+(s&1023)]+Ii.exponentTable[e],Ii.floatView[0]}const Lo={toHalfFloat:_p,fromHalfFloat:vp},Jt=new L,Io=new Oe;class gn{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=Ml,this.updateRanges=[],this.gpuType=Ln,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,r=this.itemSize;i<r;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)Io.fromBufferAttribute(this,t),Io.applyMatrix3(e),this.setXY(t,Io.x,Io.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ti(t,this.array)),t}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ti(t,this.array)),t}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ti(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ti(t,this.array)),t}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e*=this.itemSize,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=r,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Ml&&(e.usage=this.usage),e}}class fd extends gn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class pd extends gn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class At extends gn{constructor(e,t,n){super(new Float32Array(e),t,n)}}let xp=0;const Hn=new st,hc=new kt,Vs=new L,Nn=new Fn,Ir=new Fn,hn=new L;class Ht extends vr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:xp++}),this.uuid=ni(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(cd(e)?pd:fd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const r=new gt().getNormalMatrix(e);n.applyNormalMatrix(r),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Hn.makeRotationFromQuaternion(e),this.applyMatrix4(Hn),this}rotateX(e){return Hn.makeRotationX(e),this.applyMatrix4(Hn),this}rotateY(e){return Hn.makeRotationY(e),this.applyMatrix4(Hn),this}rotateZ(e){return Hn.makeRotationZ(e),this.applyMatrix4(Hn),this}translate(e,t,n){return Hn.makeTranslation(e,t,n),this.applyMatrix4(Hn),this}scale(e,t,n){return Hn.makeScale(e,t,n),this.applyMatrix4(Hn),this}lookAt(e){return hc.lookAt(e),hc.updateMatrix(),this.applyMatrix4(hc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Vs).negate(),this.translate(Vs.x,Vs.y,Vs.z),this}setFromPoints(e){const t=[];for(let n=0,i=e.length;n<i;n++){const r=e[n];t.push(r.x,r.y,r.z||0)}return this.setAttribute("position",new At(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Fn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new L(-1/0,-1/0,-1/0),new L(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const r=t[n];Nn.setFromBufferAttribute(r),this.morphTargetsRelative?(hn.addVectors(this.boundingBox.min,Nn.min),this.boundingBox.expandByPoint(hn),hn.addVectors(this.boundingBox.max,Nn.max),this.boundingBox.expandByPoint(hn)):(this.boundingBox.expandByPoint(Nn.min),this.boundingBox.expandByPoint(Nn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new pi);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new L,1/0);return}if(e){const n=this.boundingSphere.center;if(Nn.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const a=t[r];Ir.setFromBufferAttribute(a),this.morphTargetsRelative?(hn.addVectors(Nn.min,Ir.min),Nn.expandByPoint(hn),hn.addVectors(Nn.max,Ir.max),Nn.expandByPoint(hn)):(Nn.expandByPoint(Ir.min),Nn.expandByPoint(Ir.max))}Nn.getCenter(n);let i=0;for(let r=0,o=e.count;r<o;r++)hn.fromBufferAttribute(e,r),i=Math.max(i,n.distanceToSquared(hn));if(t)for(let r=0,o=t.length;r<o;r++){const a=t[r],c=this.morphTargetsRelative;for(let l=0,u=a.count;l<u;l++)hn.fromBufferAttribute(a,l),c&&(Vs.fromBufferAttribute(e,l),hn.add(Vs)),i=Math.max(i,n.distanceToSquared(hn))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,r=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new gn(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],c=[];for(let C=0;C<n.count;C++)a[C]=new L,c[C]=new L;const l=new L,u=new L,h=new L,d=new Oe,m=new Oe,g=new Oe,v=new L,p=new L;function f(C,Y,_){l.fromBufferAttribute(n,C),u.fromBufferAttribute(n,Y),h.fromBufferAttribute(n,_),d.fromBufferAttribute(r,C),m.fromBufferAttribute(r,Y),g.fromBufferAttribute(r,_),u.sub(l),h.sub(l),m.sub(d),g.sub(d);const y=1/(m.x*g.y-g.x*m.y);isFinite(y)&&(v.copy(u).multiplyScalar(g.y).addScaledVector(h,-m.y).multiplyScalar(y),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-g.x).multiplyScalar(y),a[C].add(v),a[Y].add(v),a[_].add(v),c[C].add(p),c[Y].add(p),c[_].add(p))}let E=this.groups;E.length===0&&(E=[{start:0,count:e.count}]);for(let C=0,Y=E.length;C<Y;++C){const _=E[C],y=_.start,H=_.count;for(let U=y,D=y+H;U<D;U+=3)f(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const M=new L,b=new L,N=new L,R=new L;function A(C){N.fromBufferAttribute(i,C),R.copy(N);const Y=a[C];M.copy(Y),M.sub(N.multiplyScalar(N.dot(Y))).normalize(),b.crossVectors(R,Y);const y=b.dot(c[C])<0?-1:1;o.setXYZW(C,M.x,M.y,M.z,y)}for(let C=0,Y=E.length;C<Y;++C){const _=E[C],y=_.start,H=_.count;for(let U=y,D=y+H;U<D;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new gn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,m=n.count;d<m;d++)n.setXYZ(d,0,0,0);const i=new L,r=new L,o=new L,a=new L,c=new L,l=new L,u=new L,h=new L;if(e)for(let d=0,m=e.count;d<m;d+=3){const g=e.getX(d+0),v=e.getX(d+1),p=e.getX(d+2);i.fromBufferAttribute(t,g),r.fromBufferAttribute(t,v),o.fromBufferAttribute(t,p),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),a.fromBufferAttribute(n,g),c.fromBufferAttribute(n,v),l.fromBufferAttribute(n,p),a.add(u),c.add(u),l.add(u),n.setXYZ(g,a.x,a.y,a.z),n.setXYZ(v,c.x,c.y,c.z),n.setXYZ(p,l.x,l.y,l.z)}else for(let d=0,m=t.count;d<m;d+=3)i.fromBufferAttribute(t,d+0),r.fromBufferAttribute(t,d+1),o.fromBufferAttribute(t,d+2),u.subVectors(o,r),h.subVectors(i,r),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)hn.fromBufferAttribute(e,t),hn.normalize(),e.setXYZ(t,hn.x,hn.y,hn.z)}toNonIndexed(){function e(a,c){const l=a.array,u=a.itemSize,h=a.normalized,d=new l.constructor(c.length*u);let m=0,g=0;for(let v=0,p=c.length;v<p;v++){a.isInterleavedBufferAttribute?m=c[v]*a.data.stride+a.offset:m=c[v]*u;for(let f=0;f<u;f++)d[g++]=l[m++]}return new gn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ht,n=this.index.array,i=this.attributes;for(const a in i){const c=i[a],l=e(c,n);t.setAttribute(a,l)}const r=this.morphAttributes;for(const a in r){const c=[],l=r[a];for(let u=0,h=l.length;u<h;u++){const d=l[u],m=e(d,n);c.push(m)}t.morphAttributes[a]=c}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,c=o.length;a<c;a++){const l=o[a];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let r=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],u=[];for(let h=0,d=l.length;h<d;h++){const m=l[h];u.push(m.toJSON(e.data))}u.length>0&&(i[c]=u,r=!0)}r&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const i=e.attributes;for(const l in i){const u=i[l];this.setAttribute(l,u.clone(t))}const r=e.morphAttributes;for(const l in r){const u=[],h=r[l];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(t));this.morphAttributes[l]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let l=0,u=o.length;l<u;l++){const h=o[l];this.addGroup(h.start,h.count,h.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Pu=new st,cs=new Ta,Do=new pi,Lu=new L,Uo=new L,No=new L,Fo=new L,dc=new L,Oo=new L,Iu=new L,Bo=new L;class ce extends kt{constructor(e=new Ht,t=new Wt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,r=n.morphAttributes.position,o=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const a=this.morphTargetInfluences;if(r&&a){Oo.set(0,0,0);for(let c=0,l=r.length;c<l;c++){const u=a[c],h=r[c];u!==0&&(dc.fromBufferAttribute(h,e),o?Oo.addScaledVector(dc,u):Oo.addScaledVector(dc.sub(t),u))}t.add(Oo)}return t}raycast(e,t){const n=this.geometry,i=this.material,r=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(r),cs.copy(e.ray).recast(e.near),!(Do.containsPoint(cs.origin)===!1&&(cs.intersectSphere(Do,Lu)===null||cs.origin.distanceToSquared(Lu)>(e.far-e.near)**2))&&(Pu.copy(r).invert(),cs.copy(e.ray).applyMatrix4(Pu),!(n.boundingBox!==null&&cs.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,cs)))}_computeIntersections(e,t,n){let i;const r=this.geometry,o=this.material,a=r.index,c=r.attributes.position,l=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),M=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,N=M;b<N;b+=3){const R=a.getX(b),A=a.getX(b+1),C=a.getX(b+2);i=zo(this,f,e,n,l,u,h,R,A,C),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(a.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const E=a.getX(p),M=a.getX(p+1),b=a.getX(p+2);i=zo(this,o,e,n,l,u,h,E,M,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const p=d[g],f=o[p.materialIndex],E=Math.max(p.start,m.start),M=Math.min(c.count,Math.min(p.start+p.count,m.start+m.count));for(let b=E,N=M;b<N;b+=3){const R=b,A=b+1,C=b+2;i=zo(this,f,e,n,l,u,h,R,A,C),i&&(i.faceIndex=Math.floor(b/3),i.face.materialIndex=p.materialIndex,t.push(i))}}else{const g=Math.max(0,m.start),v=Math.min(c.count,m.start+m.count);for(let p=g,f=v;p<f;p+=3){const E=p,M=p+1,b=p+2;i=zo(this,o,e,n,l,u,h,E,M,b),i&&(i.faceIndex=Math.floor(p/3),t.push(i))}}}}function yp(s,e,t,n,i,r,o,a){let c;if(e.side===mn?c=n.intersectTriangle(o,r,i,!0,a):c=n.intersectTriangle(i,r,o,e.side===Ni,a),c===null)return null;Bo.copy(a),Bo.applyMatrix4(s.matrixWorld);const l=t.ray.origin.distanceTo(Bo);return l<t.near||l>t.far?null:{distance:l,point:Bo.clone(),object:s}}function zo(s,e,t,n,i,r,o,a,c,l){s.getVertexPosition(a,Uo),s.getVertexPosition(c,No),s.getVertexPosition(l,Fo);const u=yp(s,e,t,n,Uo,No,Fo,Iu);if(u){const h=new L;Wn.getBarycoord(Iu,Uo,No,Fo,h),i&&(u.uv=Wn.getInterpolatedAttribute(i,a,c,l,h,new Oe)),r&&(u.uv1=Wn.getInterpolatedAttribute(r,a,c,l,h,new Oe)),o&&(u.normal=Wn.getInterpolatedAttribute(o,a,c,l,h,new L),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:c,c:l,normal:new L,materialIndex:0};Wn.getNormal(Uo,No,Fo,d.normal),u.face=d,u.barycoord=h}return u}class St extends Ht{constructor(e=1,t=1,n=1,i=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:r,depthSegments:o};const a=this;i=Math.floor(i),r=Math.floor(r),o=Math.floor(o);const c=[],l=[],u=[],h=[];let d=0,m=0;g("z","y","x",-1,-1,n,t,e,o,r,0),g("z","y","x",1,-1,n,t,-e,o,r,1),g("x","z","y",1,1,e,n,t,i,o,2),g("x","z","y",1,-1,e,n,-t,i,o,3),g("x","y","z",1,-1,e,t,n,i,r,4),g("x","y","z",-1,-1,e,t,-n,i,r,5),this.setIndex(c),this.setAttribute("position",new At(l,3)),this.setAttribute("normal",new At(u,3)),this.setAttribute("uv",new At(h,2));function g(v,p,f,E,M,b,N,R,A,C,Y){const _=b/A,y=N/C,H=b/2,U=N/2,D=R/2,$=A+1,F=C+1;let te=0,z=0;const ue=new L;for(let le=0;le<F;le++){const we=le*y-U;for(let Qe=0;Qe<$;Qe++){const et=Qe*_-H;ue[v]=et*E,ue[p]=we*M,ue[f]=D,l.push(ue.x,ue.y,ue.z),ue[v]=0,ue[p]=0,ue[f]=R>0?1:-1,u.push(ue.x,ue.y,ue.z),h.push(Qe/A),h.push(1-le/C),te+=1}}for(let le=0;le<C;le++)for(let we=0;we<A;we++){const Qe=d+we+$*le,et=d+we+$*(le+1),Q=d+(we+1)+$*(le+1),ie=d+(we+1)+$*le;c.push(Qe,et,ie),c.push(et,Q,ie),z+=6}a.addGroup(m,z,Y),m+=z,d+=te}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new St(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fr(s){const e={};for(const t in s){e[t]={};for(const n in s[t]){const i=s[t][n];i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)?i.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone():Array.isArray(i)?e[t][n]=i.slice():e[t][n]=i}}return e}function wn(s){const e={};for(let t=0;t<s.length;t++){const n=fr(s[t]);for(const i in n)e[i]=n[i]}return e}function Mp(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function md(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:bt.workingColorSpace}const Jr={clone:fr,merge:wn};var Sp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,bp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Xt extends ii{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Sp,this.fragmentShader=bp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fr(e.uniforms),this.uniformsGroups=Mp(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const o=this.uniforms[i].value;o&&o.isTexture?t.uniforms[i]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[i]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[i]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[i]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[i]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[i]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[i]={type:"m4",value:o.toArray()}:t.uniforms[i]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class gd extends kt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new st,this.projectionMatrix=new st,this.projectionMatrixInverse=new st,this.coordinateSystem=Di}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Xi=new L,Du=new Oe,Uu=new Oe;class rn extends gd{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=dr*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Xr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return dr*2*Math.atan(Math.tan(Xr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Xi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z),Xi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Xi.x,Xi.y).multiplyScalar(-e/Xi.z)}getViewSize(e,t){return this.getViewBounds(e,Du,Uu),t.subVectors(Uu,Du)}setViewOffset(e,t,n,i,r,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Xr*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,r=-.5*i;const o=this.view;if(this.view!==null&&this.view.enabled){const c=o.fullWidth,l=o.fullHeight;r+=o.offsetX*i/c,t-=o.offsetY*n/l,i*=o.width/c,n*=o.height/l}const a=this.filmOffset;a!==0&&(r+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+i,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Gs=-90,Ws=1;class _d extends kt{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new rn(Gs,Ws,e,t);i.layers=this.layers,this.add(i);const r=new rn(Gs,Ws,e,t);r.layers=this.layers,this.add(r);const o=new rn(Gs,Ws,e,t);o.layers=this.layers,this.add(o);const a=new rn(Gs,Ws,e,t);a.layers=this.layers,this.add(a);const c=new rn(Gs,Ws,e,t);c.layers=this.layers,this.add(c);const l=new rn(Gs,Ws,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,r,o,a,c]=t;for(const l of t)this.remove(l);if(e===Di)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===ga)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,c,l,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),m=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,i),e.render(t,r),e.setRenderTarget(n,1,i),e.render(t,o),e.setRenderTarget(n,2,i),e.render(t,a),e.setRenderTarget(n,3,i),e.render(t,c),e.setRenderTarget(n,4,i),e.render(t,l),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,i),e.render(t,u),e.setRenderTarget(h,d,m),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class vd extends en{constructor(e,t,n,i,r,o,a,c,l,u){e=e!==void 0?e:[],t=t!==void 0?t:cr,super(e,t,n,i,r,o,a,c,l,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class xd extends qn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new vd(i,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Qt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},i=new St(5,5,5),r=new Xt({name:"CubemapFromEquirect",uniforms:fr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:mn,blending:Ui});r.uniforms.tEquirect.value=t;const o=new ce(i,r),a=t.minFilter;return t.minFilter===di&&(t.minFilter=Qt),new _d(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,n,i){const r=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,n,i);e.setRenderTarget(r)}}const fc=new L,Ep=new L,Tp=new gt;class fs{constructor(e=new L(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=fc.subVectors(n,t).cross(Ep.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(fc),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const r=-(e.start.dot(this.normal)+this.constant)/i;return r<0||r>1?null:t.copy(e.start).addScaledVector(n,r)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||Tp.getNormalMatrix(e),i=this.coplanarPoint(fc).applyMatrix4(e),r=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(r),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const ls=new pi,ko=new L;class Wl{constructor(e=new fs,t=new fs,n=new fs,i=new fs,r=new fs,o=new fs){this.planes=[e,t,n,i,r,o]}set(e,t,n,i,r,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(n),a[3].copy(i),a[4].copy(r),a[5].copy(o),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Di){const n=this.planes,i=e.elements,r=i[0],o=i[1],a=i[2],c=i[3],l=i[4],u=i[5],h=i[6],d=i[7],m=i[8],g=i[9],v=i[10],p=i[11],f=i[12],E=i[13],M=i[14],b=i[15];if(n[0].setComponents(c-r,d-l,p-m,b-f).normalize(),n[1].setComponents(c+r,d+l,p+m,b+f).normalize(),n[2].setComponents(c+o,d+u,p+g,b+E).normalize(),n[3].setComponents(c-o,d-u,p-g,b-E).normalize(),n[4].setComponents(c-a,d-h,p-v,b-M).normalize(),t===Di)n[5].setComponents(c+a,d+h,p+v,b+M).normalize();else if(t===ga)n[5].setComponents(a,h,v,M).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ls.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ls.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ls)}intersectsSprite(e){return ls.center.set(0,0,0),ls.radius=.7071067811865476,ls.applyMatrix4(e.matrixWorld),this.intersectsSphere(ls)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let r=0;r<6;r++)if(t[r].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(ko.x=i.normal.x>0?e.max.x:e.min.x,ko.y=i.normal.y>0?e.max.y:e.min.y,ko.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(ko)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function yd(){let s=null,e=!1,t=null,n=null;function i(r,o){t(r,o),n=s.requestAnimationFrame(i)}return{start:function(){e!==!0&&t!==null&&(n=s.requestAnimationFrame(i),e=!0)},stop:function(){s.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(r){t=r},setContext:function(r){s=r}}}function wp(s){const e=new WeakMap;function t(a,c){const l=a.array,u=a.usage,h=l.byteLength,d=s.createBuffer();s.bindBuffer(c,d),s.bufferData(c,l,u),a.onUploadCallback();let m;if(l instanceof Float32Array)m=s.FLOAT;else if(l instanceof Uint16Array)a.isFloat16BufferAttribute?m=s.HALF_FLOAT:m=s.UNSIGNED_SHORT;else if(l instanceof Int16Array)m=s.SHORT;else if(l instanceof Uint32Array)m=s.UNSIGNED_INT;else if(l instanceof Int32Array)m=s.INT;else if(l instanceof Int8Array)m=s.BYTE;else if(l instanceof Uint8Array)m=s.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)m=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:d,type:m,bytesPerElement:l.BYTES_PER_ELEMENT,version:a.version,size:h}}function n(a,c,l){const u=c.array,h=c.updateRanges;if(s.bindBuffer(l,a),h.length===0)s.bufferSubData(l,0,u);else{h.sort((m,g)=>m.start-g.start);let d=0;for(let m=1;m<h.length;m++){const g=h[d],v=h[m];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++d,h[d]=v)}h.length=d+1;for(let m=0,g=h.length;m<g;m++){const v=h[m];s.bufferSubData(l,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const c=e.get(a);c&&(s.deleteBuffer(c.buffer),e.delete(a))}function o(a,c){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=e.get(a);(!u||u.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const l=e.get(a);if(l===void 0)e.set(a,t(a,c));else if(l.version<a.version){if(l.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,a,c),l.version=a.version}}return{get:i,remove:r,update:o}}class fn extends Ht{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const r=e/2,o=t/2,a=Math.floor(n),c=Math.floor(i),l=a+1,u=c+1,h=e/a,d=t/c,m=[],g=[],v=[],p=[];for(let f=0;f<u;f++){const E=f*d-o;for(let M=0;M<l;M++){const b=M*h-r;g.push(b,-E,0),v.push(0,0,1),p.push(M/a),p.push(1-f/c)}}for(let f=0;f<c;f++)for(let E=0;E<a;E++){const M=E+l*f,b=E+l*(f+1),N=E+1+l*(f+1),R=E+1+l*f;m.push(M,b,R),m.push(b,N,R)}this.setIndex(m),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(v,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fn(e.width,e.height,e.widthSegments,e.heightSegments)}}var Ap=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Rp=`#ifdef USE_ALPHAHASH
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
#endif`,Cp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Pp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Lp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ip=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Dp=`#ifdef USE_AOMAP
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
#endif`,Up=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Np=`#ifdef USE_BATCHING
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
#endif`,Fp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Op=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Bp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,zp=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,kp=`#ifdef USE_IRIDESCENCE
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
#endif`,Hp=`#ifdef USE_BUMPMAP
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
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Gp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Wp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Xp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,Yp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,jp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Kp=`#if defined( USE_COLOR_ALPHA )
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
#endif`,$p=`#define PI 3.141592653589793
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
} // validated`,Zp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Jp=`vec3 transformedNormal = objectNormal;
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
#endif`,Qp=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,em=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tm=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,nm=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,im="gl_FragColor = linearToOutputTexel( gl_FragColor );",sm=`
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
}`,rm=`#ifdef USE_ENVMAP
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
#endif`,om=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,am=`#ifdef USE_ENVMAP
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
#endif`,cm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lm=`#ifdef USE_ENVMAP
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
#endif`,um=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,hm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,dm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fm=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,pm=`#ifdef USE_GRADIENTMAP
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
}`,mm=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,gm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_m=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,vm=`uniform bool receiveShadow;
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
#endif`,xm=`#ifdef USE_ENVMAP
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
#endif`,ym=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sm=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,bm=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Em=`PhysicalMaterial material;
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
#endif`,Tm=`struct PhysicalMaterial {
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
}`,wm=`
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
#endif`,Am=`#if defined( RE_IndirectDiffuse )
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
#endif`,Rm=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Cm=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Pm=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Lm=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Im=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Dm=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Um=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Nm=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Fm=`#if defined( USE_POINTS_UV )
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
#endif`,Om=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Bm=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,zm=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,km=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hm=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vm=`#ifdef USE_MORPHTARGETS
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
#endif`,Gm=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Wm=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Xm=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,qm=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ym=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,jm=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Km=`#ifdef USE_NORMALMAP
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
#endif`,$m=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Zm=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Jm=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Qm=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,eg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tg=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,ng=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,ig=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,sg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,rg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,og=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ag=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,cg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,ug=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,hg=`float getShadowMask() {
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
}`,dg=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fg=`#ifdef USE_SKINNING
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
#endif`,pg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,mg=`#ifdef USE_SKINNING
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
#endif`,gg=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_g=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,vg=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,xg=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,yg=`#ifdef USE_TRANSMISSION
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
#endif`,Mg=`#ifdef USE_TRANSMISSION
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
#endif`,Sg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,bg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Eg=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tg=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const wg=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ag=`uniform sampler2D t2D;
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
}`,Rg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Cg=`#ifdef ENVMAP_TYPE_CUBE
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
}`,Pg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Lg=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ig=`#include <common>
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
}`,Dg=`#if DEPTH_PACKING == 3200
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
}`,Ug=`#define DISTANCE
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
}`,Ng=`#define DISTANCE
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
}`,Fg=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Og=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Bg=`uniform float scale;
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
}`,zg=`uniform vec3 diffuse;
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
}`,kg=`#include <common>
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
}`,Hg=`uniform vec3 diffuse;
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
}`,Vg=`#define LAMBERT
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
}`,Gg=`#define LAMBERT
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
}`,Wg=`#define MATCAP
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
}`,Xg=`#define MATCAP
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
}`,qg=`#define NORMAL
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
}`,Yg=`#define NORMAL
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
}`,jg=`#define PHONG
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
}`,Kg=`#define PHONG
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
}`,$g=`#define STANDARD
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
}`,Zg=`#define STANDARD
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
}`,Jg=`#define TOON
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
}`,Qg=`#define TOON
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
}`,e0=`uniform float size;
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
}`,t0=`uniform vec3 diffuse;
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
}`,n0=`#include <common>
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
}`,i0=`uniform vec3 color;
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
}`,s0=`uniform float rotation;
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
}`,r0=`uniform vec3 diffuse;
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
}`,mt={alphahash_fragment:Ap,alphahash_pars_fragment:Rp,alphamap_fragment:Cp,alphamap_pars_fragment:Pp,alphatest_fragment:Lp,alphatest_pars_fragment:Ip,aomap_fragment:Dp,aomap_pars_fragment:Up,batching_pars_vertex:Np,batching_vertex:Fp,begin_vertex:Op,beginnormal_vertex:Bp,bsdfs:zp,iridescence_fragment:kp,bumpmap_pars_fragment:Hp,clipping_planes_fragment:Vp,clipping_planes_pars_fragment:Gp,clipping_planes_pars_vertex:Wp,clipping_planes_vertex:Xp,color_fragment:qp,color_pars_fragment:Yp,color_pars_vertex:jp,color_vertex:Kp,common:$p,cube_uv_reflection_fragment:Zp,defaultnormal_vertex:Jp,displacementmap_pars_vertex:Qp,displacementmap_vertex:em,emissivemap_fragment:tm,emissivemap_pars_fragment:nm,colorspace_fragment:im,colorspace_pars_fragment:sm,envmap_fragment:rm,envmap_common_pars_fragment:om,envmap_pars_fragment:am,envmap_pars_vertex:cm,envmap_physical_pars_fragment:xm,envmap_vertex:lm,fog_vertex:um,fog_pars_vertex:hm,fog_fragment:dm,fog_pars_fragment:fm,gradientmap_pars_fragment:pm,lightmap_pars_fragment:mm,lights_lambert_fragment:gm,lights_lambert_pars_fragment:_m,lights_pars_begin:vm,lights_toon_fragment:ym,lights_toon_pars_fragment:Mm,lights_phong_fragment:Sm,lights_phong_pars_fragment:bm,lights_physical_fragment:Em,lights_physical_pars_fragment:Tm,lights_fragment_begin:wm,lights_fragment_maps:Am,lights_fragment_end:Rm,logdepthbuf_fragment:Cm,logdepthbuf_pars_fragment:Pm,logdepthbuf_pars_vertex:Lm,logdepthbuf_vertex:Im,map_fragment:Dm,map_pars_fragment:Um,map_particle_fragment:Nm,map_particle_pars_fragment:Fm,metalnessmap_fragment:Om,metalnessmap_pars_fragment:Bm,morphinstance_vertex:zm,morphcolor_vertex:km,morphnormal_vertex:Hm,morphtarget_pars_vertex:Vm,morphtarget_vertex:Gm,normal_fragment_begin:Wm,normal_fragment_maps:Xm,normal_pars_fragment:qm,normal_pars_vertex:Ym,normal_vertex:jm,normalmap_pars_fragment:Km,clearcoat_normal_fragment_begin:$m,clearcoat_normal_fragment_maps:Zm,clearcoat_pars_fragment:Jm,iridescence_pars_fragment:Qm,opaque_fragment:eg,packing:tg,premultiplied_alpha_fragment:ng,project_vertex:ig,dithering_fragment:sg,dithering_pars_fragment:rg,roughnessmap_fragment:og,roughnessmap_pars_fragment:ag,shadowmap_pars_fragment:cg,shadowmap_pars_vertex:lg,shadowmap_vertex:ug,shadowmask_pars_fragment:hg,skinbase_vertex:dg,skinning_pars_vertex:fg,skinning_vertex:pg,skinnormal_vertex:mg,specularmap_fragment:gg,specularmap_pars_fragment:_g,tonemapping_fragment:vg,tonemapping_pars_fragment:xg,transmission_fragment:yg,transmission_pars_fragment:Mg,uv_pars_fragment:Sg,uv_pars_vertex:bg,uv_vertex:Eg,worldpos_vertex:Tg,background_vert:wg,background_frag:Ag,backgroundCube_vert:Rg,backgroundCube_frag:Cg,cube_vert:Pg,cube_frag:Lg,depth_vert:Ig,depth_frag:Dg,distanceRGBA_vert:Ug,distanceRGBA_frag:Ng,equirect_vert:Fg,equirect_frag:Og,linedashed_vert:Bg,linedashed_frag:zg,meshbasic_vert:kg,meshbasic_frag:Hg,meshlambert_vert:Vg,meshlambert_frag:Gg,meshmatcap_vert:Wg,meshmatcap_frag:Xg,meshnormal_vert:qg,meshnormal_frag:Yg,meshphong_vert:jg,meshphong_frag:Kg,meshphysical_vert:$g,meshphysical_frag:Zg,meshtoon_vert:Jg,meshtoon_frag:Qg,points_vert:e0,points_frag:t0,shadow_vert:n0,shadow_frag:i0,sprite_vert:s0,sprite_frag:r0},ye={common:{diffuse:{value:new Pe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new Oe(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Pe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Pe(16777215)},opacity:{value:1},center:{value:new Oe(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},li={basic:{uniforms:wn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:mt.meshbasic_vert,fragmentShader:mt.meshbasic_frag},lambert:{uniforms:wn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Pe(0)}}]),vertexShader:mt.meshlambert_vert,fragmentShader:mt.meshlambert_frag},phong:{uniforms:wn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Pe(0)},specular:{value:new Pe(1118481)},shininess:{value:30}}]),vertexShader:mt.meshphong_vert,fragmentShader:mt.meshphong_frag},standard:{uniforms:wn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Pe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag},toon:{uniforms:wn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Pe(0)}}]),vertexShader:mt.meshtoon_vert,fragmentShader:mt.meshtoon_frag},matcap:{uniforms:wn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:mt.meshmatcap_vert,fragmentShader:mt.meshmatcap_frag},points:{uniforms:wn([ye.points,ye.fog]),vertexShader:mt.points_vert,fragmentShader:mt.points_frag},dashed:{uniforms:wn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:mt.linedashed_vert,fragmentShader:mt.linedashed_frag},depth:{uniforms:wn([ye.common,ye.displacementmap]),vertexShader:mt.depth_vert,fragmentShader:mt.depth_frag},normal:{uniforms:wn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:mt.meshnormal_vert,fragmentShader:mt.meshnormal_frag},sprite:{uniforms:wn([ye.sprite,ye.fog]),vertexShader:mt.sprite_vert,fragmentShader:mt.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:mt.background_vert,fragmentShader:mt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:mt.backgroundCube_vert,fragmentShader:mt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:mt.cube_vert,fragmentShader:mt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:mt.equirect_vert,fragmentShader:mt.equirect_frag},distanceRGBA:{uniforms:wn([ye.common,ye.displacementmap,{referencePosition:{value:new L},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:mt.distanceRGBA_vert,fragmentShader:mt.distanceRGBA_frag},shadow:{uniforms:wn([ye.lights,ye.fog,{color:{value:new Pe(0)},opacity:{value:1}}]),vertexShader:mt.shadow_vert,fragmentShader:mt.shadow_frag}};li.physical={uniforms:wn([li.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new Oe(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Pe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new Oe},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Pe(0)},specularColor:{value:new Pe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new Oe},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:mt.meshphysical_vert,fragmentShader:mt.meshphysical_frag};const Ho={r:0,b:0,g:0},us=new fi,o0=new st;function a0(s,e,t,n,i,r,o){const a=new Pe(0);let c=r===!0?0:1,l,u,h=null,d=0,m=null;function g(E){let M=E.isScene===!0?E.background:null;return M&&M.isTexture&&(M=(E.backgroundBlurriness>0?t:e).get(M)),M}function v(E){let M=!1;const b=g(E);b===null?f(a,c):b&&b.isColor&&(f(b,1),M=!0);const N=s.xr.getEnvironmentBlendMode();N==="additive"?n.buffers.color.setClear(0,0,0,1,o):N==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(s.autoClear||M)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function p(E,M){const b=g(M);b&&(b.isCubeTexture||b.mapping===ba)?(u===void 0&&(u=new ce(new St(1,1,1),new Xt({name:"BackgroundCubeMaterial",uniforms:fr(li.backgroundCube.uniforms),vertexShader:li.backgroundCube.vertexShader,fragmentShader:li.backgroundCube.fragmentShader,side:mn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(N,R,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(u)),us.copy(M.backgroundRotation),us.x*=-1,us.y*=-1,us.z*=-1,b.isCubeTexture&&b.isRenderTargetTexture===!1&&(us.y*=-1,us.z*=-1),u.material.uniforms.envMap.value=b,u.material.uniforms.flipEnvMap.value=b.isCubeTexture&&b.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=M.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(o0.makeRotationFromEuler(us)),u.material.toneMapped=bt.getTransfer(b.colorSpace)!==Bt,(h!==b||d!==b.version||m!==s.toneMapping)&&(u.material.needsUpdate=!0,h=b,d=b.version,m=s.toneMapping),u.layers.enableAll(),E.unshift(u,u.geometry,u.material,0,0,null)):b&&b.isTexture&&(l===void 0&&(l=new ce(new fn(2,2),new Xt({name:"BackgroundMaterial",uniforms:fr(li.background.uniforms),vertexShader:li.background.vertexShader,fragmentShader:li.background.fragmentShader,side:Ni,depthTest:!1,depthWrite:!1,fog:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=b,l.material.uniforms.backgroundIntensity.value=M.backgroundIntensity,l.material.toneMapped=bt.getTransfer(b.colorSpace)!==Bt,b.matrixAutoUpdate===!0&&b.updateMatrix(),l.material.uniforms.uvTransform.value.copy(b.matrix),(h!==b||d!==b.version||m!==s.toneMapping)&&(l.material.needsUpdate=!0,h=b,d=b.version,m=s.toneMapping),l.layers.enableAll(),E.unshift(l,l.geometry,l.material,0,0,null))}function f(E,M){E.getRGB(Ho,md(s)),n.buffers.color.setClear(Ho.r,Ho.g,Ho.b,M,o)}return{getClearColor:function(){return a},setClearColor:function(E,M=1){a.set(E),c=M,f(a,c)},getClearAlpha:function(){return c},setClearAlpha:function(E){c=E,f(a,c)},render:v,addToRenderList:p}}function c0(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),n={},i=d(null);let r=i,o=!1;function a(_,y,H,U,D){let $=!1;const F=h(U,H,y);r!==F&&(r=F,l(r.object)),$=m(_,U,H,D),$&&g(_,U,H,D),D!==null&&e.update(D,s.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,b(_,y,H,U),D!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(D).buffer))}function c(){return s.createVertexArray()}function l(_){return s.bindVertexArray(_)}function u(_){return s.deleteVertexArray(_)}function h(_,y,H){const U=H.wireframe===!0;let D=n[_.id];D===void 0&&(D={},n[_.id]=D);let $=D[y.id];$===void 0&&($={},D[y.id]=$);let F=$[U];return F===void 0&&(F=d(c()),$[U]=F),F}function d(_){const y=[],H=[],U=[];for(let D=0;D<t;D++)y[D]=0,H[D]=0,U[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:y,enabledAttributes:H,attributeDivisors:U,object:_,attributes:{},index:null}}function m(_,y,H,U){const D=r.attributes,$=y.attributes;let F=0;const te=H.getAttributes();for(const z in te)if(te[z].location>=0){const le=D[z];let we=$[z];if(we===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(we=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(we=_.instanceColor)),le===void 0||le.attribute!==we||we&&le.data!==we.data)return!0;F++}return r.attributesNum!==F||r.index!==U}function g(_,y,H,U){const D={},$=y.attributes;let F=0;const te=H.getAttributes();for(const z in te)if(te[z].location>=0){let le=$[z];le===void 0&&(z==="instanceMatrix"&&_.instanceMatrix&&(le=_.instanceMatrix),z==="instanceColor"&&_.instanceColor&&(le=_.instanceColor));const we={};we.attribute=le,le&&le.data&&(we.data=le.data),D[z]=we,F++}r.attributes=D,r.attributesNum=F,r.index=U}function v(){const _=r.newAttributes;for(let y=0,H=_.length;y<H;y++)_[y]=0}function p(_){f(_,0)}function f(_,y){const H=r.newAttributes,U=r.enabledAttributes,D=r.attributeDivisors;H[_]=1,U[_]===0&&(s.enableVertexAttribArray(_),U[_]=1),D[_]!==y&&(s.vertexAttribDivisor(_,y),D[_]=y)}function E(){const _=r.newAttributes,y=r.enabledAttributes;for(let H=0,U=y.length;H<U;H++)y[H]!==_[H]&&(s.disableVertexAttribArray(H),y[H]=0)}function M(_,y,H,U,D,$,F){F===!0?s.vertexAttribIPointer(_,y,H,D,$):s.vertexAttribPointer(_,y,H,U,D,$)}function b(_,y,H,U){v();const D=U.attributes,$=H.getAttributes(),F=y.defaultAttributeValues;for(const te in $){const z=$[te];if(z.location>=0){let ue=D[te];if(ue===void 0&&(te==="instanceMatrix"&&_.instanceMatrix&&(ue=_.instanceMatrix),te==="instanceColor"&&_.instanceColor&&(ue=_.instanceColor)),ue!==void 0){const le=ue.normalized,we=ue.itemSize,Qe=e.get(ue);if(Qe===void 0)continue;const et=Qe.buffer,Q=Qe.type,ie=Qe.bytesPerElement,Ae=Q===s.INT||Q===s.UNSIGNED_INT||ue.gpuType===Nl;if(ue.isInterleavedBufferAttribute){const ge=ue.data,ke=ge.stride,Be=ue.offset;if(ge.isInstancedInterleavedBuffer){for(let nt=0;nt<z.locationSize;nt++)f(z.location+nt,ge.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ge.meshPerAttribute*ge.count)}else for(let nt=0;nt<z.locationSize;nt++)p(z.location+nt);s.bindBuffer(s.ARRAY_BUFFER,et);for(let nt=0;nt<z.locationSize;nt++)M(z.location+nt,we/z.locationSize,Q,le,ke*ie,(Be+we/z.locationSize*nt)*ie,Ae)}else{if(ue.isInstancedBufferAttribute){for(let ge=0;ge<z.locationSize;ge++)f(z.location+ge,ue.meshPerAttribute);_.isInstancedMesh!==!0&&U._maxInstanceCount===void 0&&(U._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let ge=0;ge<z.locationSize;ge++)p(z.location+ge);s.bindBuffer(s.ARRAY_BUFFER,et);for(let ge=0;ge<z.locationSize;ge++)M(z.location+ge,we/z.locationSize,Q,le,we*ie,we/z.locationSize*ge*ie,Ae)}}else if(F!==void 0){const le=F[te];if(le!==void 0)switch(le.length){case 2:s.vertexAttrib2fv(z.location,le);break;case 3:s.vertexAttrib3fv(z.location,le);break;case 4:s.vertexAttrib4fv(z.location,le);break;default:s.vertexAttrib1fv(z.location,le)}}}}E()}function N(){C();for(const _ in n){const y=n[_];for(const H in y){const U=y[H];for(const D in U)u(U[D].object),delete U[D];delete y[H]}delete n[_]}}function R(_){if(n[_.id]===void 0)return;const y=n[_.id];for(const H in y){const U=y[H];for(const D in U)u(U[D].object),delete U[D];delete y[H]}delete n[_.id]}function A(_){for(const y in n){const H=n[y];if(H[_.id]===void 0)continue;const U=H[_.id];for(const D in U)u(U[D].object),delete U[D];delete H[_.id]}}function C(){Y(),o=!0,r!==i&&(r=i,l(r.object))}function Y(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:a,reset:C,resetDefaultState:Y,dispose:N,releaseStatesOfGeometry:R,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:p,disableUnusedAttributes:E}}function l0(s,e,t){let n;function i(l){n=l}function r(l,u){s.drawArrays(n,l,u),t.update(u,n,1)}function o(l,u,h){h!==0&&(s.drawArraysInstanced(n,l,u,h),t.update(u,n,h))}function a(l,u,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,l,0,u,0,h);let m=0;for(let g=0;g<h;g++)m+=u[g];t.update(m,n,1)}function c(l,u,h,d){if(h===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let g=0;g<l.length;g++)o(l[g],u[g],d[g]);else{m.multiDrawArraysInstancedWEBGL(n,l,0,u,0,d,0,h);let g=0;for(let v=0;v<h;v++)g+=u[v];for(let v=0;v<d.length;v++)t.update(g,n,d[v])}}this.setMode=i,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=c}function u0(s,e,t,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function o(A){return!(A!==Xn&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(A){const C=A===An&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==si&&n.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&A!==Ln&&!C)}function c(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const u=c(l);u!==l&&(console.warn("THREE.WebGLRenderer:",l,"not supported, using",u,"instead."),l=u);const h=t.logarithmicDepthBuffer===!0,d=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control");if(d===!0){const A=e.get("EXT_clip_control");A.clipControlEXT(A.LOWER_LEFT_EXT,A.ZERO_TO_ONE_EXT)}const m=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),f=s.getParameter(s.MAX_VERTEX_ATTRIBS),E=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),M=s.getParameter(s.MAX_VARYING_VECTORS),b=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),N=g>0,R=s.getParameter(s.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:c,textureFormatReadable:o,textureTypeReadable:a,precision:l,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:E,maxVaryings:M,maxFragmentUniforms:b,vertexTextures:N,maxSamples:R}}function h0(s){const e=this;let t=null,n=0,i=!1,r=!1;const o=new fs,a=new gt,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||n!==0||i;return i=d,n=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,m){const g=h.clippingPlanes,v=h.clipIntersection,p=h.clipShadows,f=s.get(h);if(!i||g===null||g.length===0||r&&!p)r?u(null):l();else{const E=r?0:n,M=E*4;let b=f.clippingState||null;c.value=b,b=u(g,d,M,m);for(let N=0;N!==M;++N)b[N]=t[N];f.clippingState=b,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=E}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,m,g){const v=h!==null?h.length:0;let p=null;if(v!==0){if(p=c.value,g!==!0||p===null){const f=m+v*4,E=d.matrixWorldInverse;a.getNormalMatrix(E),(p===null||p.length<f)&&(p=new Float32Array(f));for(let M=0,b=m;M!==v;++M,b+=4)o.copy(h[M]).applyMatrix4(E,a),o.normal.toArray(p,b),p[b+3]=o.constant}c.value=p,c.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,p}}function d0(s){let e=new WeakMap;function t(o,a){return a===qc?o.mapping=cr:a===Yc&&(o.mapping=lr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===qc||a===Yc)if(e.has(o)){const c=e.get(o).texture;return t(c,o.mapping)}else{const c=o.image;if(c&&c.height>0){const l=new xd(c.height);return l.fromEquirectangularTexture(s,o),e.set(o,l),o.addEventListener("dispose",i),t(l.texture,o.mapping)}else return null}}return o}function i(o){const a=o.target;a.removeEventListener("dispose",i);const c=e.get(a);c!==void 0&&(e.delete(a),c.dispose())}function r(){e=new WeakMap}return{get:n,dispose:r}}class wa extends gd{constructor(e=-1,t=1,n=1,i=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let r=n-e,o=n+e,a=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=l*this.view.offsetX,o=r+l*this.view.width,a-=u*this.view.offsetY,c=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,c,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const er=4,Nu=[.125,.215,.35,.446,.526,.582],gs=20,pc=new wa,Fu=new Pe;let mc=null,gc=0,_c=0,vc=!1;const ps=(1+Math.sqrt(5))/2,Xs=1/ps,Ou=[new L(-ps,Xs,0),new L(ps,Xs,0),new L(-Xs,0,ps),new L(Xs,0,ps),new L(0,ps,-Xs),new L(0,ps,Xs),new L(-1,1,-1),new L(1,1,-1),new L(-1,1,1),new L(1,1,1)];class Sl{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,i=100){mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(e,n,i,r),t>0&&this._blur(r,0,0,t),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ku(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=zu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(mc,gc,_c),this._renderer.xr.enabled=vc,e.scissorTest=!1,Vo(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===cr||e.mapping===lr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),mc=this._renderer.getRenderTarget(),gc=this._renderer.getActiveCubeFace(),_c=this._renderer.getActiveMipmapLevel(),vc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Qt,minFilter:Qt,generateMipmaps:!1,type:An,format:Xn,colorSpace:tn,depthBuffer:!1},i=Bu(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Bu(e,t,n);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f0(r)),this._blurMaterial=p0(r,e,t)}return i}_compileMaterial(e){const t=new ce(this._lodPlanes[0],e);this._renderer.compile(t,pc)}_sceneToCubeUV(e,t,n,i){const a=new rn(90,1,t,n),c=[1,-1,1,1,1,1],l=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(Fu),u.toneMapping=Zi,u.autoClear=!1;const m=new Wt({name:"PMREM.Background",side:mn,depthWrite:!1,depthTest:!1}),g=new ce(new St,m);let v=!1;const p=e.background;p?p.isColor&&(m.color.copy(p),e.background=null,v=!0):(m.color.copy(Fu),v=!0);for(let f=0;f<6;f++){const E=f%3;E===0?(a.up.set(0,c[f],0),a.lookAt(l[f],0,0)):E===1?(a.up.set(0,0,c[f]),a.lookAt(0,l[f],0)):(a.up.set(0,c[f],0),a.lookAt(0,0,l[f]));const M=this._cubeSize;Vo(i,E*M,f>2?M:0,M,M),u.setRenderTarget(i),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=p}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===cr||e.mapping===lr;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=ku()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=zu());const r=i?this._cubemapMaterial:this._equirectMaterial,o=new ce(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=e;const c=this._cubeSize;Vo(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(o,pc)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodPlanes.length;for(let r=1;r<i;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=Ou[(i-r-1)%Ou.length];this._blur(e,r-1,r,o,a)}t.autoClear=n}_blur(e,t,n,i,r){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,n,i,"latitudinal",r),this._halfBlur(o,e,n,n,i,"longitudinal",r)}_halfBlur(e,t,n,i,r,o,a){const c=this._renderer,l=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new ce(this._lodPlanes[i],l),d=l.uniforms,m=this._sizeLods[n]-1,g=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*gs-1),v=r/g,p=isFinite(r)?1+Math.floor(u*v):gs;p>gs&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${gs}`);const f=[];let E=0;for(let A=0;A<gs;++A){const C=A/v,Y=Math.exp(-C*C/2);f.push(Y),A===0?E+=Y:A<p&&(E+=2*Y)}for(let A=0;A<f.length;A++)f[A]=f[A]/E;d.envMap.value=e.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:M}=this;d.dTheta.value=g,d.mipInt.value=M-n;const b=this._sizeLods[i],N=3*b*(i>M-er?i-M+er:0),R=4*(this._cubeSize-b);Vo(t,N,R,3*b,2*b),c.setRenderTarget(t),c.render(h,pc)}}function f0(s){const e=[],t=[],n=[];let i=s;const r=s-er+1+Nu.length;for(let o=0;o<r;o++){const a=Math.pow(2,i);t.push(a);let c=1/a;o>s-er?c=Nu[o-s+er-1]:o===0&&(c=0),n.push(c);const l=1/(a-2),u=-l,h=1+l,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,g=6,v=3,p=2,f=1,E=new Float32Array(v*g*m),M=new Float32Array(p*g*m),b=new Float32Array(f*g*m);for(let R=0;R<m;R++){const A=R%3*2/3-1,C=R>2?0:-1,Y=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];E.set(Y,v*g*R),M.set(d,p*g*R);const _=[R,R,R,R,R,R];b.set(_,f*g*R)}const N=new Ht;N.setAttribute("position",new gn(E,v)),N.setAttribute("uv",new gn(M,p)),N.setAttribute("faceIndex",new gn(b,f)),e.push(N),i>er&&i--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function Bu(s,e,t){const n=new qn(s,e,t);return n.texture.mapping=ba,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Vo(s,e,t,n,i){s.viewport.set(e,t,n,i),s.scissor.set(e,t,n,i)}function p0(s,e,t){const n=new Float32Array(gs),i=new L(0,1,0);return new Xt({name:"SphericalGaussianBlur",defines:{n:gs,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:i}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function zu(){return new Xt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Xl(),fragmentShader:`

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
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function ku(){return new Xt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Xl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ui,depthTest:!1,depthWrite:!1})}function Xl(){return`

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
	`}function m0(s){let e=new WeakMap,t=null;function n(a){if(a&&a.isTexture){const c=a.mapping,l=c===qc||c===Yc,u=c===cr||c===lr;if(l||u){let h=e.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return t===null&&(t=new Sl(s)),h=l?t.fromEquirectangular(a,h):t.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return l&&m&&m.height>0||u&&m&&i(m)?(t===null&&(t=new Sl(s)),h=l?t.fromEquirectangular(a):t.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,e.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function i(a){let c=0;const l=6;for(let u=0;u<l;u++)a[u]!==void 0&&c++;return c===l}function r(a){const c=a.target;c.removeEventListener("dispose",r);const l=e.get(c);l!==void 0&&(e.delete(c),l.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:o}}function g0(s){const e={};function t(n){if(e[n]!==void 0)return e[n];let i;switch(n){case"WEBGL_depth_texture":i=s.getExtension("WEBGL_depth_texture")||s.getExtension("MOZ_WEBGL_depth_texture")||s.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":i=s.getExtension("EXT_texture_filter_anisotropic")||s.getExtension("MOZ_EXT_texture_filter_anisotropic")||s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":i=s.getExtension("WEBGL_compressed_texture_s3tc")||s.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":i=s.getExtension("WEBGL_compressed_texture_pvrtc")||s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:i=s.getExtension(n)}return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&aa("THREE.WebGLRenderer: "+n+" extension not supported."),i}}}function _0(s,e,t,n){const i={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let p=0,f=v.length;p<f;p++)e.remove(v[p])}d.removeEventListener("dispose",o),delete i[d.id];const m=r.get(d);m&&(e.remove(m),r.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function a(h,d){return i[d.id]===!0||(d.addEventListener("dispose",o),i[d.id]=!0,t.memory.geometries++),d}function c(h){const d=h.attributes;for(const g in d)e.update(d[g],s.ARRAY_BUFFER);const m=h.morphAttributes;for(const g in m){const v=m[g];for(let p=0,f=v.length;p<f;p++)e.update(v[p],s.ARRAY_BUFFER)}}function l(h){const d=[],m=h.index,g=h.attributes.position;let v=0;if(m!==null){const E=m.array;v=m.version;for(let M=0,b=E.length;M<b;M+=3){const N=E[M+0],R=E[M+1],A=E[M+2];d.push(N,R,R,A,A,N)}}else if(g!==void 0){const E=g.array;v=g.version;for(let M=0,b=E.length/3-1;M<b;M+=3){const N=M+0,R=M+1,A=M+2;d.push(N,R,R,A,A,N)}}else return;const p=new(cd(d)?pd:fd)(d,1);p.version=v;const f=r.get(h);f&&e.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&l(h)}else l(h);return r.get(h)}return{get:a,update:c,getWireframeAttribute:u}}function v0(s,e,t){let n;function i(d){n=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function c(d,m){s.drawElements(n,m,r,d*o),t.update(m,n,1)}function l(d,m,g){g!==0&&(s.drawElementsInstanced(n,m,r,d*o,g),t.update(m,n,g))}function u(d,m,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,m,0,r,d,0,g);let p=0;for(let f=0;f<g;f++)p+=m[f];t.update(p,n,1)}function h(d,m,g,v){if(g===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)l(d[f]/o,m[f],v[f]);else{p.multiDrawElementsInstancedWEBGL(n,m,0,r,d,0,v,0,g);let f=0;for(let E=0;E<g;E++)f+=m[E];for(let E=0;E<v.length;E++)t.update(f,n,v[E])}}this.setMode=i,this.setIndex=a,this.render=c,this.renderInstances=l,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function x0(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(r,o,a){switch(t.calls++,o){case s.TRIANGLES:t.triangles+=a*(r/3);break;case s.LINES:t.lines+=a*(r/2);break;case s.LINE_STRIP:t.lines+=a*(r-1);break;case s.LINE_LOOP:t.lines+=a*r;break;case s.POINTS:t.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function y0(s,e,t){const n=new WeakMap,i=new wt;function r(o,a,c){const l=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(a);if(d===void 0||d.count!==h){let Y=function(){A.dispose(),n.delete(a),a.removeEventListener("dispose",Y)};d!==void 0&&d.texture.dispose();const m=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,p=a.morphAttributes.position||[],f=a.morphAttributes.normal||[],E=a.morphAttributes.color||[];let M=0;m===!0&&(M=1),g===!0&&(M=2),v===!0&&(M=3);let b=a.attributes.position.count*M,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const R=new Float32Array(b*N*4*h),A=new ud(R,b,N,h);A.type=Ln,A.needsUpdate=!0;const C=M*4;for(let _=0;_<h;_++){const y=p[_],H=f[_],U=E[_],D=b*N*4*_;for(let $=0;$<y.count;$++){const F=$*C;m===!0&&(i.fromBufferAttribute(y,$),R[D+F+0]=i.x,R[D+F+1]=i.y,R[D+F+2]=i.z,R[D+F+3]=0),g===!0&&(i.fromBufferAttribute(H,$),R[D+F+4]=i.x,R[D+F+5]=i.y,R[D+F+6]=i.z,R[D+F+7]=0),v===!0&&(i.fromBufferAttribute(U,$),R[D+F+8]=i.x,R[D+F+9]=i.y,R[D+F+10]=i.z,R[D+F+11]=U.itemSize===4?i.w:1)}}d={count:h,texture:A,size:new Oe(b,N)},n.set(a,d),a.addEventListener("dispose",Y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)c.getUniforms().setValue(s,"morphTexture",o.morphTexture,t);else{let m=0;for(let v=0;v<l.length;v++)m+=l[v];const g=a.morphTargetsRelative?1:1-m;c.getUniforms().setValue(s,"morphTargetBaseInfluence",g),c.getUniforms().setValue(s,"morphTargetInfluences",l)}c.getUniforms().setValue(s,"morphTargetsTexture",d.texture,t),c.getUniforms().setValue(s,"morphTargetsTextureSize",d.size)}return{update:r}}function M0(s,e,t,n){let i=new WeakMap;function r(c){const l=n.render.frame,u=c.geometry,h=e.get(c,u);if(i.get(h)!==l&&(e.update(h),i.set(h,l)),c.isInstancedMesh&&(c.hasEventListener("dispose",a)===!1&&c.addEventListener("dispose",a),i.get(c)!==l&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,l))),c.isSkinnedMesh){const d=c.skeleton;i.get(d)!==l&&(d.update(),i.set(d,l))}return h}function o(){i=new WeakMap}function a(c){const l=c.target;l.removeEventListener("dispose",a),t.remove(l.instanceMatrix),l.instanceColor!==null&&t.remove(l.instanceColor)}return{update:r,dispose:o}}class Md extends en{constructor(e,t,n,i,r,o,a,c,l,u=ir){if(u!==ir&&u!==hr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===ir&&(n=xs),n===void 0&&u===hr&&(n=ur),super(null,i,r,o,a,c,u,n,l),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:vn,this.minFilter=c!==void 0?c:vn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const Sd=new en,Hu=new Md(1,1),bd=new ud,Ed=new ap,Td=new vd,Vu=[],Gu=[],Wu=new Float32Array(16),Xu=new Float32Array(9),qu=new Float32Array(4);function xr(s,e,t){const n=s[0];if(n<=0||n>0)return s;const i=e*t;let r=Vu[i];if(r===void 0&&(r=new Float32Array(i),Vu[i]=r),e!==0){n.toArray(r,0);for(let o=1,a=0;o!==e;++o)a+=t,s[o].toArray(r,a)}return r}function on(s,e){if(s.length!==e.length)return!1;for(let t=0,n=s.length;t<n;t++)if(s[t]!==e[t])return!1;return!0}function an(s,e){for(let t=0,n=e.length;t<n;t++)s[t]=e[t]}function Aa(s,e){let t=Gu[e];t===void 0&&(t=new Int32Array(e),Gu[e]=t);for(let n=0;n!==e;++n)t[n]=s.allocateTextureUnit();return t}function S0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function b0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2fv(this.addr,e),an(t,e)}}function E0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(on(t,e))return;s.uniform3fv(this.addr,e),an(t,e)}}function T0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4fv(this.addr,e),an(t,e)}}function w0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;qu.set(n),s.uniformMatrix2fv(this.addr,!1,qu),an(t,n)}}function A0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Xu.set(n),s.uniformMatrix3fv(this.addr,!1,Xu),an(t,n)}}function R0(s,e){const t=this.cache,n=e.elements;if(n===void 0){if(on(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),an(t,e)}else{if(on(t,n))return;Wu.set(n),s.uniformMatrix4fv(this.addr,!1,Wu),an(t,n)}}function C0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function P0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2iv(this.addr,e),an(t,e)}}function L0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3iv(this.addr,e),an(t,e)}}function I0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4iv(this.addr,e),an(t,e)}}function D0(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function U0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(on(t,e))return;s.uniform2uiv(this.addr,e),an(t,e)}}function N0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(on(t,e))return;s.uniform3uiv(this.addr,e),an(t,e)}}function F0(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(on(t,e))return;s.uniform4uiv(this.addr,e),an(t,e)}}function O0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i);let r;this.type===s.SAMPLER_2D_SHADOW?(Hu.compareFunction=od,r=Hu):r=Sd,t.setTexture2D(e||r,i)}function B0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||Ed,i)}function z0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||Td,i)}function k0(s,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(s.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||bd,i)}function H0(s){switch(s){case 5126:return S0;case 35664:return b0;case 35665:return E0;case 35666:return T0;case 35674:return w0;case 35675:return A0;case 35676:return R0;case 5124:case 35670:return C0;case 35667:case 35671:return P0;case 35668:case 35672:return L0;case 35669:case 35673:return I0;case 5125:return D0;case 36294:return U0;case 36295:return N0;case 36296:return F0;case 35678:case 36198:case 36298:case 36306:case 35682:return O0;case 35679:case 36299:case 36307:return B0;case 35680:case 36300:case 36308:case 36293:return z0;case 36289:case 36303:case 36311:case 36292:return k0}}function V0(s,e){s.uniform1fv(this.addr,e)}function G0(s,e){const t=xr(e,this.size,2);s.uniform2fv(this.addr,t)}function W0(s,e){const t=xr(e,this.size,3);s.uniform3fv(this.addr,t)}function X0(s,e){const t=xr(e,this.size,4);s.uniform4fv(this.addr,t)}function q0(s,e){const t=xr(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function Y0(s,e){const t=xr(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function j0(s,e){const t=xr(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function K0(s,e){s.uniform1iv(this.addr,e)}function $0(s,e){s.uniform2iv(this.addr,e)}function Z0(s,e){s.uniform3iv(this.addr,e)}function J0(s,e){s.uniform4iv(this.addr,e)}function Q0(s,e){s.uniform1uiv(this.addr,e)}function e_(s,e){s.uniform2uiv(this.addr,e)}function t_(s,e){s.uniform3uiv(this.addr,e)}function n_(s,e){s.uniform4uiv(this.addr,e)}function i_(s,e,t){const n=this.cache,i=e.length,r=Aa(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture2D(e[o]||Sd,r[o])}function s_(s,e,t){const n=this.cache,i=e.length,r=Aa(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture3D(e[o]||Ed,r[o])}function r_(s,e,t){const n=this.cache,i=e.length,r=Aa(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTextureCube(e[o]||Td,r[o])}function o_(s,e,t){const n=this.cache,i=e.length,r=Aa(t,i);on(n,r)||(s.uniform1iv(this.addr,r),an(n,r));for(let o=0;o!==i;++o)t.setTexture2DArray(e[o]||bd,r[o])}function a_(s){switch(s){case 5126:return V0;case 35664:return G0;case 35665:return W0;case 35666:return X0;case 35674:return q0;case 35675:return Y0;case 35676:return j0;case 5124:case 35670:return K0;case 35667:case 35671:return $0;case 35668:case 35672:return Z0;case 35669:case 35673:return J0;case 5125:return Q0;case 36294:return e_;case 36295:return t_;case 36296:return n_;case 35678:case 36198:case 36298:case 36306:case 35682:return i_;case 35679:case 36299:case 36307:return s_;case 35680:case 36300:case 36308:case 36293:return r_;case 36289:case 36303:case 36311:case 36292:return o_}}class c_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=H0(t.type)}}class l_{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=a_(t.type)}}class u_{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let r=0,o=i.length;r!==o;++r){const a=i[r];a.setValue(e,t[a.id],n)}}}const xc=/(\w+)(\])?(\[|\.)?/g;function Yu(s,e){s.seq.push(e),s.map[e.id]=e}function h_(s,e,t){const n=s.name,i=n.length;for(xc.lastIndex=0;;){const r=xc.exec(n),o=xc.lastIndex;let a=r[1];const c=r[2]==="]",l=r[3];if(c&&(a=a|0),l===void 0||l==="["&&o+2===i){Yu(t,l===void 0?new c_(a,s,e):new l_(a,s,e));break}else{let h=t.map[a];h===void 0&&(h=new u_(a),Yu(t,h)),t=h}}}class ca{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let i=0;i<n;++i){const r=e.getActiveUniform(t,i),o=e.getUniformLocation(t,r.name);h_(r,o,this)}}setValue(e,t,n,i){const r=this.map[t];r!==void 0&&r.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let r=0,o=t.length;r!==o;++r){const a=t[r],c=n[a.id];c.needsUpdate!==!1&&a.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,r=e.length;i!==r;++i){const o=e[i];o.id in t&&n.push(o)}return n}}function ju(s,e,t){const n=s.createShader(e);return s.shaderSource(n,t),s.compileShader(n),n}const d_=37297;let f_=0;function p_(s,e){const t=s.split(`
`),n=[],i=Math.max(e-6,0),r=Math.min(e+6,t.length);for(let o=i;o<r;o++){const a=o+1;n.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return n.join(`
`)}function m_(s){const e=bt.getPrimaries(bt.workingColorSpace),t=bt.getPrimaries(s);let n;switch(e===t?n="":e===ma&&t===pa?n="LinearDisplayP3ToLinearSRGB":e===pa&&t===ma&&(n="LinearSRGBToLinearDisplayP3"),s){case tn:case Ea:return[n,"LinearTransferOETF"];case Ft:case Vl:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",s),[n,"LinearTransferOETF"]}}function Ku(s,e,t){const n=s.getShaderParameter(e,s.COMPILE_STATUS),i=s.getShaderInfoLog(e).trim();if(n&&i==="")return"";const r=/ERROR: 0:(\d+)/.exec(i);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+i+`

`+p_(s.getShaderSource(e),o)}else return i}function g_(s,e){const t=m_(e);return`vec4 ${s}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function __(s,e){let t;switch(e){case Vh:t="Linear";break;case Gh:t="Reinhard";break;case Wh:t="Cineon";break;case Ul:t="ACESFilmic";break;case Xh:t="AgX";break;case qh:t="Neutral";break;case Sf:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Go=new L;function v_(){bt.getLuminanceCoefficients(Go);const s=Go.x.toFixed(4),e=Go.y.toFixed(4),t=Go.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function x_(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Gr).join(`
`)}function y_(s){const e=[];for(const t in s){const n=s[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function M_(s,e){const t={},n=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const r=s.getActiveAttrib(e,i),o=r.name;let a=1;r.type===s.FLOAT_MAT2&&(a=2),r.type===s.FLOAT_MAT3&&(a=3),r.type===s.FLOAT_MAT4&&(a=4),t[o]={type:r.type,location:s.getAttribLocation(e,o),locationSize:a}}return t}function Gr(s){return s!==""}function $u(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Zu(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const S_=/^[ \t]*#include +<([\w\d./]+)>/gm;function bl(s){return s.replace(S_,E_)}const b_=new Map;function E_(s,e){let t=mt[e];if(t===void 0){const n=b_.get(e);if(n!==void 0)t=mt[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return bl(t)}const T_=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Ju(s){return s.replace(T_,w_)}function w_(s,e,t,n){let i="";for(let r=parseInt(e);r<parseInt(t);r++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return i}function Qu(s){let e=`precision ${s.precision} float;
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
#define LOW_PRECISION`),e}function A_(s){let e="SHADOWMAP_TYPE_BASIC";return s.shadowMapType===zh?e="SHADOWMAP_TYPE_PCF":s.shadowMapType===kh?e="SHADOWMAP_TYPE_PCF_SOFT":s.shadowMapType===Pi&&(e="SHADOWMAP_TYPE_VSM"),e}function R_(s){let e="ENVMAP_TYPE_CUBE";if(s.envMap)switch(s.envMapMode){case cr:case lr:e="ENVMAP_TYPE_CUBE";break;case ba:e="ENVMAP_TYPE_CUBE_UV";break}return e}function C_(s){let e="ENVMAP_MODE_REFLECTION";if(s.envMap)switch(s.envMapMode){case lr:e="ENVMAP_MODE_REFRACTION";break}return e}function P_(s){let e="ENVMAP_BLENDING_NONE";if(s.envMap)switch(s.combine){case Hh:e="ENVMAP_BLENDING_MULTIPLY";break;case yf:e="ENVMAP_BLENDING_MIX";break;case Mf:e="ENVMAP_BLENDING_ADD";break}return e}function L_(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function I_(s,e,t,n){const i=s.getContext(),r=t.defines;let o=t.vertexShader,a=t.fragmentShader;const c=A_(t),l=R_(t),u=C_(t),h=P_(t),d=L_(t),m=x_(t),g=y_(r),v=i.createProgram();let p,f,E=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Gr).join(`
`),f.length>0&&(f+=`
`)):(p=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Gr).join(`
`),f=[Qu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Zi?"#define TONE_MAPPING":"",t.toneMapping!==Zi?mt.tonemapping_pars_fragment:"",t.toneMapping!==Zi?__("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",mt.colorspace_pars_fragment,g_("linearToOutputTexel",t.outputColorSpace),v_(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Gr).join(`
`)),o=bl(o),o=$u(o,t),o=Zu(o,t),a=bl(a),a=$u(a,t),a=Zu(a,t),o=Ju(o),a=Ju(a),t.isRawShaderMaterial!==!0&&(E=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",t.glslVersion===gu?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===gu?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const M=E+p+o,b=E+f+a,N=ju(i,i.VERTEX_SHADER,M),R=ju(i,i.FRAGMENT_SHADER,b);i.attachShader(v,N),i.attachShader(v,R),t.index0AttributeName!==void 0?i.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&i.bindAttribLocation(v,0,"position"),i.linkProgram(v);function A(y){if(s.debug.checkShaderErrors){const H=i.getProgramInfoLog(v).trim(),U=i.getShaderInfoLog(N).trim(),D=i.getShaderInfoLog(R).trim();let $=!0,F=!0;if(i.getProgramParameter(v,i.LINK_STATUS)===!1)if($=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(i,v,N,R);else{const te=Ku(i,N,"vertex"),z=Ku(i,R,"fragment");console.error("THREE.WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(v,i.VALIDATE_STATUS)+`

Material Name: `+y.name+`
Material Type: `+y.type+`

Program Info Log: `+H+`
`+te+`
`+z)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(U===""||D==="")&&(F=!1);F&&(y.diagnostics={runnable:$,programLog:H,vertexShader:{log:U,prefix:p},fragmentShader:{log:D,prefix:f}})}i.deleteShader(N),i.deleteShader(R),C=new ca(i,v),Y=M_(i,v)}let C;this.getUniforms=function(){return C===void 0&&A(this),C};let Y;this.getAttributes=function(){return Y===void 0&&A(this),Y};let _=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return _===!1&&(_=i.getProgramParameter(v,d_)),_},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=f_++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=N,this.fragmentShader=R,this}let D_=0;class U_{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,i=this._getShaderStage(t),r=this._getShaderStage(n),o=this._getShaderCacheForMaterial(e);return o.has(i)===!1&&(o.add(i),i.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new N_(e),t.set(e,n)),n}}class N_{constructor(e){this.id=D_++,this.code=e,this.usedTimes=0}}function F_(s,e,t,n,i,r,o){const a=new hd,c=new U_,l=new Set,u=[],h=i.logarithmicDepthBuffer,d=i.reverseDepthBuffer,m=i.vertexTextures;let g=i.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function p(_){return l.add(_),_===0?"uv":`uv${_}`}function f(_,y,H,U,D){const $=U.fog,F=D.geometry,te=_.isMeshStandardMaterial?U.environment:null,z=(_.isMeshStandardMaterial?t:e).get(_.envMap||te),ue=z&&z.mapping===ba?z.image.height:null,le=v[_.type];_.precision!==null&&(g=i.getMaxPrecision(_.precision),g!==_.precision&&console.warn("THREE.WebGLProgram.getParameters:",_.precision,"not supported, using",g,"instead."));const we=F.morphAttributes.position||F.morphAttributes.normal||F.morphAttributes.color,Qe=we!==void 0?we.length:0;let et=0;F.morphAttributes.position!==void 0&&(et=1),F.morphAttributes.normal!==void 0&&(et=2),F.morphAttributes.color!==void 0&&(et=3);let Q,ie,Ae,ge;if(le){const Rt=li[le];Q=Rt.vertexShader,ie=Rt.fragmentShader}else Q=_.vertexShader,ie=_.fragmentShader,c.update(_),Ae=c.getVertexShaderID(_),ge=c.getFragmentShaderID(_);const ke=s.getRenderTarget(),Be=D.isInstancedMesh===!0,nt=D.isBatchedMesh===!0,_t=!!_.map,at=!!_.matcap,I=!!z,qt=!!_.aoMap,rt=!!_.lightMap,ct=!!_.bumpMap,Ve=!!_.normalMap,vt=!!_.displacementMap,Ge=!!_.emissiveMap,w=!!_.metalnessMap,x=!!_.roughnessMap,G=_.anisotropy>0,Z=_.clearcoat>0,ee=_.dispersion>0,J=_.iridescence>0,be=_.sheen>0,he=_.transmission>0,de=G&&!!_.anisotropyMap,lt=Z&&!!_.clearcoatMap,oe=Z&&!!_.clearcoatNormalMap,De=Z&&!!_.clearcoatRoughnessMap,He=J&&!!_.iridescenceMap,Ze=J&&!!_.iridescenceThicknessMap,Me=be&&!!_.sheenColorMap,ht=be&&!!_.sheenRoughnessMap,qe=!!_.specularMap,yt=!!_.specularColorMap,O=!!_.specularIntensityMap,Re=he&&!!_.transmissionMap,K=he&&!!_.thicknessMap,ne=!!_.gradientMap,_e=!!_.alphaMap,Ee=_.alphaTest>0,Ye=!!_.alphaHash,Ut=!!_.extensions;let Vt=Zi;_.toneMapped&&(ke===null||ke.isXRRenderTarget===!0)&&(Vt=s.toneMapping);const dt={shaderID:le,shaderType:_.type,shaderName:_.name,vertexShader:Q,fragmentShader:ie,defines:_.defines,customVertexShaderID:Ae,customFragmentShaderID:ge,isRawShaderMaterial:_.isRawShaderMaterial===!0,glslVersion:_.glslVersion,precision:g,batching:nt,batchingColor:nt&&D._colorsTexture!==null,instancing:Be,instancingColor:Be&&D.instanceColor!==null,instancingMorph:Be&&D.morphTexture!==null,supportsVertexTextures:m,outputColorSpace:ke===null?s.outputColorSpace:ke.isXRRenderTarget===!0?ke.texture.colorSpace:tn,alphaToCoverage:!!_.alphaToCoverage,map:_t,matcap:at,envMap:I,envMapMode:I&&z.mapping,envMapCubeUVHeight:ue,aoMap:qt,lightMap:rt,bumpMap:ct,normalMap:Ve,displacementMap:m&&vt,emissiveMap:Ge,normalMapObjectSpace:Ve&&_.normalMapType===Rf,normalMapTangentSpace:Ve&&_.normalMapType===rd,metalnessMap:w,roughnessMap:x,anisotropy:G,anisotropyMap:de,clearcoat:Z,clearcoatMap:lt,clearcoatNormalMap:oe,clearcoatRoughnessMap:De,dispersion:ee,iridescence:J,iridescenceMap:He,iridescenceThicknessMap:Ze,sheen:be,sheenColorMap:Me,sheenRoughnessMap:ht,specularMap:qe,specularColorMap:yt,specularIntensityMap:O,transmission:he,transmissionMap:Re,thicknessMap:K,gradientMap:ne,opaque:_.transparent===!1&&_.blending===nr&&_.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ee,alphaHash:Ye,combine:_.combine,mapUv:_t&&p(_.map.channel),aoMapUv:qt&&p(_.aoMap.channel),lightMapUv:rt&&p(_.lightMap.channel),bumpMapUv:ct&&p(_.bumpMap.channel),normalMapUv:Ve&&p(_.normalMap.channel),displacementMapUv:vt&&p(_.displacementMap.channel),emissiveMapUv:Ge&&p(_.emissiveMap.channel),metalnessMapUv:w&&p(_.metalnessMap.channel),roughnessMapUv:x&&p(_.roughnessMap.channel),anisotropyMapUv:de&&p(_.anisotropyMap.channel),clearcoatMapUv:lt&&p(_.clearcoatMap.channel),clearcoatNormalMapUv:oe&&p(_.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:De&&p(_.clearcoatRoughnessMap.channel),iridescenceMapUv:He&&p(_.iridescenceMap.channel),iridescenceThicknessMapUv:Ze&&p(_.iridescenceThicknessMap.channel),sheenColorMapUv:Me&&p(_.sheenColorMap.channel),sheenRoughnessMapUv:ht&&p(_.sheenRoughnessMap.channel),specularMapUv:qe&&p(_.specularMap.channel),specularColorMapUv:yt&&p(_.specularColorMap.channel),specularIntensityMapUv:O&&p(_.specularIntensityMap.channel),transmissionMapUv:Re&&p(_.transmissionMap.channel),thicknessMapUv:K&&p(_.thicknessMap.channel),alphaMapUv:_e&&p(_.alphaMap.channel),vertexTangents:!!F.attributes.tangent&&(Ve||G),vertexColors:_.vertexColors,vertexAlphas:_.vertexColors===!0&&!!F.attributes.color&&F.attributes.color.itemSize===4,pointsUvs:D.isPoints===!0&&!!F.attributes.uv&&(_t||_e),fog:!!$,useFog:_.fog===!0,fogExp2:!!$&&$.isFogExp2,flatShading:_.flatShading===!0,sizeAttenuation:_.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:d,skinning:D.isSkinnedMesh===!0,morphTargets:F.morphAttributes.position!==void 0,morphNormals:F.morphAttributes.normal!==void 0,morphColors:F.morphAttributes.color!==void 0,morphTargetsCount:Qe,morphTextureStride:et,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:_.dithering,shadowMapEnabled:s.shadowMap.enabled&&H.length>0,shadowMapType:s.shadowMap.type,toneMapping:Vt,decodeVideoTexture:_t&&_.map.isVideoTexture===!0&&bt.getTransfer(_.map.colorSpace)===Bt,premultipliedAlpha:_.premultipliedAlpha,doubleSided:_.side===pn,flipSided:_.side===mn,useDepthPacking:_.depthPacking>=0,depthPacking:_.depthPacking||0,index0AttributeName:_.index0AttributeName,extensionClipCullDistance:Ut&&_.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ut&&_.extensions.multiDraw===!0||nt)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:_.customProgramCacheKey()};return dt.vertexUv1s=l.has(1),dt.vertexUv2s=l.has(2),dt.vertexUv3s=l.has(3),l.clear(),dt}function E(_){const y=[];if(_.shaderID?y.push(_.shaderID):(y.push(_.customVertexShaderID),y.push(_.customFragmentShaderID)),_.defines!==void 0)for(const H in _.defines)y.push(H),y.push(_.defines[H]);return _.isRawShaderMaterial===!1&&(M(y,_),b(y,_),y.push(s.outputColorSpace)),y.push(_.customProgramCacheKey),y.join()}function M(_,y){_.push(y.precision),_.push(y.outputColorSpace),_.push(y.envMapMode),_.push(y.envMapCubeUVHeight),_.push(y.mapUv),_.push(y.alphaMapUv),_.push(y.lightMapUv),_.push(y.aoMapUv),_.push(y.bumpMapUv),_.push(y.normalMapUv),_.push(y.displacementMapUv),_.push(y.emissiveMapUv),_.push(y.metalnessMapUv),_.push(y.roughnessMapUv),_.push(y.anisotropyMapUv),_.push(y.clearcoatMapUv),_.push(y.clearcoatNormalMapUv),_.push(y.clearcoatRoughnessMapUv),_.push(y.iridescenceMapUv),_.push(y.iridescenceThicknessMapUv),_.push(y.sheenColorMapUv),_.push(y.sheenRoughnessMapUv),_.push(y.specularMapUv),_.push(y.specularColorMapUv),_.push(y.specularIntensityMapUv),_.push(y.transmissionMapUv),_.push(y.thicknessMapUv),_.push(y.combine),_.push(y.fogExp2),_.push(y.sizeAttenuation),_.push(y.morphTargetsCount),_.push(y.morphAttributeCount),_.push(y.numDirLights),_.push(y.numPointLights),_.push(y.numSpotLights),_.push(y.numSpotLightMaps),_.push(y.numHemiLights),_.push(y.numRectAreaLights),_.push(y.numDirLightShadows),_.push(y.numPointLightShadows),_.push(y.numSpotLightShadows),_.push(y.numSpotLightShadowsWithMaps),_.push(y.numLightProbes),_.push(y.shadowMapType),_.push(y.toneMapping),_.push(y.numClippingPlanes),_.push(y.numClipIntersection),_.push(y.depthPacking)}function b(_,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),_.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reverseDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.alphaToCoverage&&a.enable(20),_.push(a.mask)}function N(_){const y=v[_.type];let H;if(y){const U=li[y];H=Jr.clone(U.uniforms)}else H=_.uniforms;return H}function R(_,y){let H;for(let U=0,D=u.length;U<D;U++){const $=u[U];if($.cacheKey===y){H=$,++H.usedTimes;break}}return H===void 0&&(H=new I_(s,y,_,r),u.push(H)),H}function A(_){if(--_.usedTimes===0){const y=u.indexOf(_);u[y]=u[u.length-1],u.pop(),_.destroy()}}function C(_){c.remove(_)}function Y(){c.dispose()}return{getParameters:f,getProgramCacheKey:E,getUniforms:N,acquireProgram:R,releaseProgram:A,releaseShaderCache:C,programs:u,dispose:Y}}function O_(){let s=new WeakMap;function e(o){return s.has(o)}function t(o){let a=s.get(o);return a===void 0&&(a={},s.set(o,a)),a}function n(o){s.delete(o)}function i(o,a,c){s.get(o)[a]=c}function r(){s=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:r}}function B_(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.z!==e.z?s.z-e.z:s.id-e.id}function eh(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function th(){const s=[];let e=0;const t=[],n=[],i=[];function r(){e=0,t.length=0,n.length=0,i.length=0}function o(h,d,m,g,v,p){let f=s[e];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:g,renderOrder:h.renderOrder,z:v,group:p},s[e]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=g,f.renderOrder=h.renderOrder,f.z=v,f.group=p),e++,f}function a(h,d,m,g,v,p){const f=o(h,d,m,g,v,p);m.transmission>0?n.push(f):m.transparent===!0?i.push(f):t.push(f)}function c(h,d,m,g,v,p){const f=o(h,d,m,g,v,p);m.transmission>0?n.unshift(f):m.transparent===!0?i.unshift(f):t.unshift(f)}function l(h,d){t.length>1&&t.sort(h||B_),n.length>1&&n.sort(d||eh),i.length>1&&i.sort(d||eh)}function u(){for(let h=e,d=s.length;h<d;h++){const m=s[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:t,transmissive:n,transparent:i,init:r,push:a,unshift:c,finish:u,sort:l}}function z_(){let s=new WeakMap;function e(n,i){const r=s.get(n);let o;return r===void 0?(o=new th,s.set(n,[o])):i>=r.length?(o=new th,r.push(o)):o=r[i],o}function t(){s=new WeakMap}return{get:e,dispose:t}}function k_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new L,color:new Pe};break;case"SpotLight":t={position:new L,direction:new L,color:new Pe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new L,color:new Pe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new L,skyColor:new Pe,groundColor:new Pe};break;case"RectAreaLight":t={color:new Pe,position:new L,halfWidth:new L,halfHeight:new L};break}return s[e.id]=t,t}}}function H_(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Oe,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let V_=0;function G_(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function W_(s){const e=new k_,t=H_(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new L);const i=new L,r=new st,o=new st;function a(l){let u=0,h=0,d=0;for(let Y=0;Y<9;Y++)n.probe[Y].set(0,0,0);let m=0,g=0,v=0,p=0,f=0,E=0,M=0,b=0,N=0,R=0,A=0;l.sort(G_);for(let Y=0,_=l.length;Y<_;Y++){const y=l[Y],H=y.color,U=y.intensity,D=y.distance,$=y.shadow&&y.shadow.map?y.shadow.map.texture:null;if(y.isAmbientLight)u+=H.r*U,h+=H.g*U,d+=H.b*U;else if(y.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(y.sh.coefficients[F],U);A++}else if(y.isDirectionalLight){const F=e.get(y);if(F.color.copy(y.color).multiplyScalar(y.intensity),y.castShadow){const te=y.shadow,z=t.get(y);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,n.directionalShadow[m]=z,n.directionalShadowMap[m]=$,n.directionalShadowMatrix[m]=y.shadow.matrix,E++}n.directional[m]=F,m++}else if(y.isSpotLight){const F=e.get(y);F.position.setFromMatrixPosition(y.matrixWorld),F.color.copy(H).multiplyScalar(U),F.distance=D,F.coneCos=Math.cos(y.angle),F.penumbraCos=Math.cos(y.angle*(1-y.penumbra)),F.decay=y.decay,n.spot[v]=F;const te=y.shadow;if(y.map&&(n.spotLightMap[N]=y.map,N++,te.updateMatrices(y),y.castShadow&&R++),n.spotLightMatrix[v]=te.matrix,y.castShadow){const z=t.get(y);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,n.spotShadow[v]=z,n.spotShadowMap[v]=$,b++}v++}else if(y.isRectAreaLight){const F=e.get(y);F.color.copy(H).multiplyScalar(U),F.halfWidth.set(y.width*.5,0,0),F.halfHeight.set(0,y.height*.5,0),n.rectArea[p]=F,p++}else if(y.isPointLight){const F=e.get(y);if(F.color.copy(y.color).multiplyScalar(y.intensity),F.distance=y.distance,F.decay=y.decay,y.castShadow){const te=y.shadow,z=t.get(y);z.shadowIntensity=te.intensity,z.shadowBias=te.bias,z.shadowNormalBias=te.normalBias,z.shadowRadius=te.radius,z.shadowMapSize=te.mapSize,z.shadowCameraNear=te.camera.near,z.shadowCameraFar=te.camera.far,n.pointShadow[g]=z,n.pointShadowMap[g]=$,n.pointShadowMatrix[g]=y.shadow.matrix,M++}n.point[g]=F,g++}else if(y.isHemisphereLight){const F=e.get(y);F.skyColor.copy(y.color).multiplyScalar(U),F.groundColor.copy(y.groundColor).multiplyScalar(U),n.hemi[f]=F,f++}}p>0&&(s.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const C=n.hash;(C.directionalLength!==m||C.pointLength!==g||C.spotLength!==v||C.rectAreaLength!==p||C.hemiLength!==f||C.numDirectionalShadows!==E||C.numPointShadows!==M||C.numSpotShadows!==b||C.numSpotMaps!==N||C.numLightProbes!==A)&&(n.directional.length=m,n.spot.length=v,n.rectArea.length=p,n.point.length=g,n.hemi.length=f,n.directionalShadow.length=E,n.directionalShadowMap.length=E,n.pointShadow.length=M,n.pointShadowMap.length=M,n.spotShadow.length=b,n.spotShadowMap.length=b,n.directionalShadowMatrix.length=E,n.pointShadowMatrix.length=M,n.spotLightMatrix.length=b+N-R,n.spotLightMap.length=N,n.numSpotLightShadowsWithMaps=R,n.numLightProbes=A,C.directionalLength=m,C.pointLength=g,C.spotLength=v,C.rectAreaLength=p,C.hemiLength=f,C.numDirectionalShadows=E,C.numPointShadows=M,C.numSpotShadows=b,C.numSpotMaps=N,C.numLightProbes=A,n.version=V_++)}function c(l,u){let h=0,d=0,m=0,g=0,v=0;const p=u.matrixWorldInverse;for(let f=0,E=l.length;f<E;f++){const M=l[f];if(M.isDirectionalLight){const b=n.directional[h];b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),h++}else if(M.isSpotLight){const b=n.spot[m];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),b.direction.setFromMatrixPosition(M.matrixWorld),i.setFromMatrixPosition(M.target.matrixWorld),b.direction.sub(i),b.direction.transformDirection(p),m++}else if(M.isRectAreaLight){const b=n.rectArea[g];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),o.identity(),r.copy(M.matrixWorld),r.premultiply(p),o.extractRotation(r),b.halfWidth.set(M.width*.5,0,0),b.halfHeight.set(0,M.height*.5,0),b.halfWidth.applyMatrix4(o),b.halfHeight.applyMatrix4(o),g++}else if(M.isPointLight){const b=n.point[d];b.position.setFromMatrixPosition(M.matrixWorld),b.position.applyMatrix4(p),d++}else if(M.isHemisphereLight){const b=n.hemi[v];b.direction.setFromMatrixPosition(M.matrixWorld),b.direction.transformDirection(p),v++}}}return{setup:a,setupView:c,state:n}}function nh(s){const e=new W_(s),t=[],n=[];function i(u){l.camera=u,t.length=0,n.length=0}function r(u){t.push(u)}function o(u){n.push(u)}function a(){e.setup(t)}function c(u){e.setupView(t,u)}const l={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:i,state:l,setupLights:a,setupLightsView:c,pushLight:r,pushShadow:o}}function X_(s){let e=new WeakMap;function t(i,r=0){const o=e.get(i);let a;return o===void 0?(a=new nh(s),e.set(i,[a])):r>=o.length?(a=new nh(s),o.push(a)):a=o[r],a}function n(){e=new WeakMap}return{get:t,dispose:n}}class q_ extends ii{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=wf,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Y_ extends ii{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const j_=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,K_=`uniform sampler2D shadow_pass;
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
}`;function $_(s,e,t){let n=new Wl;const i=new Oe,r=new Oe,o=new wt,a=new q_({depthPacking:Af}),c=new Y_,l={},u=t.maxTextureSize,h={[Ni]:mn,[mn]:Ni,[pn]:pn},d=new Xt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Oe},radius:{value:4}},vertexShader:j_,fragmentShader:K_}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const g=new Ht;g.setAttribute("position",new gn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new ce(g,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zh;let f=this.type;this.render=function(R,A,C){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||R.length===0)return;const Y=s.getRenderTarget(),_=s.getActiveCubeFace(),y=s.getActiveMipmapLevel(),H=s.state;H.setBlending(Ui),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const U=f!==Pi&&this.type===Pi,D=f===Pi&&this.type!==Pi;for(let $=0,F=R.length;$<F;$++){const te=R[$],z=te.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",te,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;i.copy(z.mapSize);const ue=z.getFrameExtents();if(i.multiply(ue),r.copy(z.mapSize),(i.x>u||i.y>u)&&(i.x>u&&(r.x=Math.floor(u/ue.x),i.x=r.x*ue.x,z.mapSize.x=r.x),i.y>u&&(r.y=Math.floor(u/ue.y),i.y=r.y*ue.y,z.mapSize.y=r.y)),z.map===null||U===!0||D===!0){const we=this.type!==Pi?{minFilter:vn,magFilter:vn}:{};z.map!==null&&z.map.dispose(),z.map=new qn(i.x,i.y,we),z.map.texture.name=te.name+".shadowMap",z.camera.updateProjectionMatrix()}s.setRenderTarget(z.map),s.clear();const le=z.getViewportCount();for(let we=0;we<le;we++){const Qe=z.getViewport(we);o.set(r.x*Qe.x,r.y*Qe.y,r.x*Qe.z,r.y*Qe.w),H.viewport(o),z.updateMatrices(te,we),n=z.getFrustum(),b(A,C,z.camera,te,this.type)}z.isPointLightShadow!==!0&&this.type===Pi&&E(z,C),z.needsUpdate=!1}f=this.type,p.needsUpdate=!1,s.setRenderTarget(Y,_,y)};function E(R,A){const C=e.update(v);d.defines.VSM_SAMPLES!==R.blurSamples&&(d.defines.VSM_SAMPLES=R.blurSamples,m.defines.VSM_SAMPLES=R.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),R.mapPass===null&&(R.mapPass=new qn(i.x,i.y)),d.uniforms.shadow_pass.value=R.map.texture,d.uniforms.resolution.value=R.mapSize,d.uniforms.radius.value=R.radius,s.setRenderTarget(R.mapPass),s.clear(),s.renderBufferDirect(A,null,C,d,v,null),m.uniforms.shadow_pass.value=R.mapPass.texture,m.uniforms.resolution.value=R.mapSize,m.uniforms.radius.value=R.radius,s.setRenderTarget(R.map),s.clear(),s.renderBufferDirect(A,null,C,m,v,null)}function M(R,A,C,Y){let _=null;const y=C.isPointLight===!0?R.customDistanceMaterial:R.customDepthMaterial;if(y!==void 0)_=y;else if(_=C.isPointLight===!0?c:a,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0){const H=_.uuid,U=A.uuid;let D=l[H];D===void 0&&(D={},l[H]=D);let $=D[U];$===void 0&&($=_.clone(),D[U]=$,A.addEventListener("dispose",N)),_=$}if(_.visible=A.visible,_.wireframe=A.wireframe,Y===Pi?_.side=A.shadowSide!==null?A.shadowSide:A.side:_.side=A.shadowSide!==null?A.shadowSide:h[A.side],_.alphaMap=A.alphaMap,_.alphaTest=A.alphaTest,_.map=A.map,_.clipShadows=A.clipShadows,_.clippingPlanes=A.clippingPlanes,_.clipIntersection=A.clipIntersection,_.displacementMap=A.displacementMap,_.displacementScale=A.displacementScale,_.displacementBias=A.displacementBias,_.wireframeLinewidth=A.wireframeLinewidth,_.linewidth=A.linewidth,C.isPointLight===!0&&_.isMeshDistanceMaterial===!0){const H=s.properties.get(_);H.light=C}return _}function b(R,A,C,Y,_){if(R.visible===!1)return;if(R.layers.test(A.layers)&&(R.isMesh||R.isLine||R.isPoints)&&(R.castShadow||R.receiveShadow&&_===Pi)&&(!R.frustumCulled||n.intersectsObject(R))){R.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse,R.matrixWorld);const U=e.update(R),D=R.material;if(Array.isArray(D)){const $=U.groups;for(let F=0,te=$.length;F<te;F++){const z=$[F],ue=D[z.materialIndex];if(ue&&ue.visible){const le=M(R,ue,Y,_);R.onBeforeShadow(s,R,A,C,U,le,z),s.renderBufferDirect(C,null,U,le,R,z),R.onAfterShadow(s,R,A,C,U,le,z)}}}else if(D.visible){const $=M(R,D,Y,_);R.onBeforeShadow(s,R,A,C,U,$,null),s.renderBufferDirect(C,null,U,$,R,null),R.onAfterShadow(s,R,A,C,U,$,null)}}const H=R.children;for(let U=0,D=H.length;U<D;U++)b(H[U],A,C,Y,_)}function N(R){R.target.removeEventListener("dispose",N);for(const C in l){const Y=l[C],_=R.target.uuid;_ in Y&&(Y[_].dispose(),delete Y[_])}}}const Z_={[zc]:kc,[Hc]:Wc,[Vc]:Xc,[ar]:Gc,[kc]:zc,[Wc]:Hc,[Xc]:Vc,[Gc]:ar};function J_(s){function e(){let O=!1;const Re=new wt;let K=null;const ne=new wt(0,0,0,0);return{setMask:function(_e){K!==_e&&!O&&(s.colorMask(_e,_e,_e,_e),K=_e)},setLocked:function(_e){O=_e},setClear:function(_e,Ee,Ye,Ut,Vt){Vt===!0&&(_e*=Ut,Ee*=Ut,Ye*=Ut),Re.set(_e,Ee,Ye,Ut),ne.equals(Re)===!1&&(s.clearColor(_e,Ee,Ye,Ut),ne.copy(Re))},reset:function(){O=!1,K=null,ne.set(-1,0,0,0)}}}function t(){let O=!1,Re=!1,K=null,ne=null,_e=null;return{setReversed:function(Ee){Re=Ee},setTest:function(Ee){Ee?Ae(s.DEPTH_TEST):ge(s.DEPTH_TEST)},setMask:function(Ee){K!==Ee&&!O&&(s.depthMask(Ee),K=Ee)},setFunc:function(Ee){if(Re&&(Ee=Z_[Ee]),ne!==Ee){switch(Ee){case zc:s.depthFunc(s.NEVER);break;case kc:s.depthFunc(s.ALWAYS);break;case Hc:s.depthFunc(s.LESS);break;case ar:s.depthFunc(s.LEQUAL);break;case Vc:s.depthFunc(s.EQUAL);break;case Gc:s.depthFunc(s.GEQUAL);break;case Wc:s.depthFunc(s.GREATER);break;case Xc:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}ne=Ee}},setLocked:function(Ee){O=Ee},setClear:function(Ee){_e!==Ee&&(s.clearDepth(Ee),_e=Ee)},reset:function(){O=!1,K=null,ne=null,_e=null}}}function n(){let O=!1,Re=null,K=null,ne=null,_e=null,Ee=null,Ye=null,Ut=null,Vt=null;return{setTest:function(dt){O||(dt?Ae(s.STENCIL_TEST):ge(s.STENCIL_TEST))},setMask:function(dt){Re!==dt&&!O&&(s.stencilMask(dt),Re=dt)},setFunc:function(dt,Rt,$t){(K!==dt||ne!==Rt||_e!==$t)&&(s.stencilFunc(dt,Rt,$t),K=dt,ne=Rt,_e=$t)},setOp:function(dt,Rt,$t){(Ee!==dt||Ye!==Rt||Ut!==$t)&&(s.stencilOp(dt,Rt,$t),Ee=dt,Ye=Rt,Ut=$t)},setLocked:function(dt){O=dt},setClear:function(dt){Vt!==dt&&(s.clearStencil(dt),Vt=dt)},reset:function(){O=!1,Re=null,K=null,ne=null,_e=null,Ee=null,Ye=null,Ut=null,Vt=null}}}const i=new e,r=new t,o=new n,a=new WeakMap,c=new WeakMap;let l={},u={},h=new WeakMap,d=[],m=null,g=!1,v=null,p=null,f=null,E=null,M=null,b=null,N=null,R=new Pe(0,0,0),A=0,C=!1,Y=null,_=null,y=null,H=null,U=null;const D=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,F=0;const te=s.getParameter(s.VERSION);te.indexOf("WebGL")!==-1?(F=parseFloat(/^WebGL (\d)/.exec(te)[1]),$=F>=1):te.indexOf("OpenGL ES")!==-1&&(F=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),$=F>=2);let z=null,ue={};const le=s.getParameter(s.SCISSOR_BOX),we=s.getParameter(s.VIEWPORT),Qe=new wt().fromArray(le),et=new wt().fromArray(we);function Q(O,Re,K,ne){const _e=new Uint8Array(4),Ee=s.createTexture();s.bindTexture(O,Ee),s.texParameteri(O,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(O,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ye=0;Ye<K;Ye++)O===s.TEXTURE_3D||O===s.TEXTURE_2D_ARRAY?s.texImage3D(Re,0,s.RGBA,1,1,ne,0,s.RGBA,s.UNSIGNED_BYTE,_e):s.texImage2D(Re+Ye,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,_e);return Ee}const ie={};ie[s.TEXTURE_2D]=Q(s.TEXTURE_2D,s.TEXTURE_2D,1),ie[s.TEXTURE_CUBE_MAP]=Q(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),ie[s.TEXTURE_2D_ARRAY]=Q(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),ie[s.TEXTURE_3D]=Q(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Ae(s.DEPTH_TEST),r.setFunc(ar),rt(!1),ct(cu),Ae(s.CULL_FACE),I(Ui);function Ae(O){l[O]!==!0&&(s.enable(O),l[O]=!0)}function ge(O){l[O]!==!1&&(s.disable(O),l[O]=!1)}function ke(O,Re){return u[O]!==Re?(s.bindFramebuffer(O,Re),u[O]=Re,O===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=Re),O===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=Re),!0):!1}function Be(O,Re){let K=d,ne=!1;if(O){K=h.get(Re),K===void 0&&(K=[],h.set(Re,K));const _e=O.textures;if(K.length!==_e.length||K[0]!==s.COLOR_ATTACHMENT0){for(let Ee=0,Ye=_e.length;Ee<Ye;Ee++)K[Ee]=s.COLOR_ATTACHMENT0+Ee;K.length=_e.length,ne=!0}}else K[0]!==s.BACK&&(K[0]=s.BACK,ne=!0);ne&&s.drawBuffers(K)}function nt(O){return m!==O?(s.useProgram(O),m=O,!0):!1}const _t={[ms]:s.FUNC_ADD,[nf]:s.FUNC_SUBTRACT,[sf]:s.FUNC_REVERSE_SUBTRACT};_t[rf]=s.MIN,_t[of]=s.MAX;const at={[af]:s.ZERO,[cf]:s.ONE,[lf]:s.SRC_COLOR,[Oc]:s.SRC_ALPHA,[mf]:s.SRC_ALPHA_SATURATE,[ff]:s.DST_COLOR,[hf]:s.DST_ALPHA,[uf]:s.ONE_MINUS_SRC_COLOR,[Bc]:s.ONE_MINUS_SRC_ALPHA,[pf]:s.ONE_MINUS_DST_COLOR,[df]:s.ONE_MINUS_DST_ALPHA,[gf]:s.CONSTANT_COLOR,[_f]:s.ONE_MINUS_CONSTANT_COLOR,[vf]:s.CONSTANT_ALPHA,[xf]:s.ONE_MINUS_CONSTANT_ALPHA};function I(O,Re,K,ne,_e,Ee,Ye,Ut,Vt,dt){if(O===Ui){g===!0&&(ge(s.BLEND),g=!1);return}if(g===!1&&(Ae(s.BLEND),g=!0),O!==tf){if(O!==v||dt!==C){if((p!==ms||M!==ms)&&(s.blendEquation(s.FUNC_ADD),p=ms,M=ms),dt)switch(O){case nr:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ui:s.blendFunc(s.ONE,s.ONE);break;case lu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uu:s.blendFuncSeparate(s.ZERO,s.SRC_COLOR,s.ZERO,s.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}else switch(O){case nr:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ui:s.blendFunc(s.SRC_ALPHA,s.ONE);break;case lu:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case uu:s.blendFunc(s.ZERO,s.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",O);break}f=null,E=null,b=null,N=null,R.set(0,0,0),A=0,v=O,C=dt}return}_e=_e||Re,Ee=Ee||K,Ye=Ye||ne,(Re!==p||_e!==M)&&(s.blendEquationSeparate(_t[Re],_t[_e]),p=Re,M=_e),(K!==f||ne!==E||Ee!==b||Ye!==N)&&(s.blendFuncSeparate(at[K],at[ne],at[Ee],at[Ye]),f=K,E=ne,b=Ee,N=Ye),(Ut.equals(R)===!1||Vt!==A)&&(s.blendColor(Ut.r,Ut.g,Ut.b,Vt),R.copy(Ut),A=Vt),v=O,C=!1}function qt(O,Re){O.side===pn?ge(s.CULL_FACE):Ae(s.CULL_FACE);let K=O.side===mn;Re&&(K=!K),rt(K),O.blending===nr&&O.transparent===!1?I(Ui):I(O.blending,O.blendEquation,O.blendSrc,O.blendDst,O.blendEquationAlpha,O.blendSrcAlpha,O.blendDstAlpha,O.blendColor,O.blendAlpha,O.premultipliedAlpha),r.setFunc(O.depthFunc),r.setTest(O.depthTest),r.setMask(O.depthWrite),i.setMask(O.colorWrite);const ne=O.stencilWrite;o.setTest(ne),ne&&(o.setMask(O.stencilWriteMask),o.setFunc(O.stencilFunc,O.stencilRef,O.stencilFuncMask),o.setOp(O.stencilFail,O.stencilZFail,O.stencilZPass)),vt(O.polygonOffset,O.polygonOffsetFactor,O.polygonOffsetUnits),O.alphaToCoverage===!0?Ae(s.SAMPLE_ALPHA_TO_COVERAGE):ge(s.SAMPLE_ALPHA_TO_COVERAGE)}function rt(O){Y!==O&&(O?s.frontFace(s.CW):s.frontFace(s.CCW),Y=O)}function ct(O){O!==Qd?(Ae(s.CULL_FACE),O!==_&&(O===cu?s.cullFace(s.BACK):O===ef?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):ge(s.CULL_FACE),_=O}function Ve(O){O!==y&&($&&s.lineWidth(O),y=O)}function vt(O,Re,K){O?(Ae(s.POLYGON_OFFSET_FILL),(H!==Re||U!==K)&&(s.polygonOffset(Re,K),H=Re,U=K)):ge(s.POLYGON_OFFSET_FILL)}function Ge(O){O?Ae(s.SCISSOR_TEST):ge(s.SCISSOR_TEST)}function w(O){O===void 0&&(O=s.TEXTURE0+D-1),z!==O&&(s.activeTexture(O),z=O)}function x(O,Re,K){K===void 0&&(z===null?K=s.TEXTURE0+D-1:K=z);let ne=ue[K];ne===void 0&&(ne={type:void 0,texture:void 0},ue[K]=ne),(ne.type!==O||ne.texture!==Re)&&(z!==K&&(s.activeTexture(K),z=K),s.bindTexture(O,Re||ie[O]),ne.type=O,ne.texture=Re)}function G(){const O=ue[z];O!==void 0&&O.type!==void 0&&(s.bindTexture(O.type,null),O.type=void 0,O.texture=void 0)}function Z(){try{s.compressedTexImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function ee(){try{s.compressedTexImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function J(){try{s.texSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function be(){try{s.texSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function he(){try{s.compressedTexSubImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function de(){try{s.compressedTexSubImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function lt(){try{s.texStorage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function oe(){try{s.texStorage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function De(){try{s.texImage2D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function He(){try{s.texImage3D.apply(s,arguments)}catch(O){console.error("THREE.WebGLState:",O)}}function Ze(O){Qe.equals(O)===!1&&(s.scissor(O.x,O.y,O.z,O.w),Qe.copy(O))}function Me(O){et.equals(O)===!1&&(s.viewport(O.x,O.y,O.z,O.w),et.copy(O))}function ht(O,Re){let K=c.get(Re);K===void 0&&(K=new WeakMap,c.set(Re,K));let ne=K.get(O);ne===void 0&&(ne=s.getUniformBlockIndex(Re,O.name),K.set(O,ne))}function qe(O,Re){const ne=c.get(Re).get(O);a.get(Re)!==ne&&(s.uniformBlockBinding(Re,ne,O.__bindingPointIndex),a.set(Re,ne))}function yt(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),l={},z=null,ue={},u={},h=new WeakMap,d=[],m=null,g=!1,v=null,p=null,f=null,E=null,M=null,b=null,N=null,R=new Pe(0,0,0),A=0,C=!1,Y=null,_=null,y=null,H=null,U=null,Qe.set(0,0,s.canvas.width,s.canvas.height),et.set(0,0,s.canvas.width,s.canvas.height),i.reset(),r.reset(),o.reset()}return{buffers:{color:i,depth:r,stencil:o},enable:Ae,disable:ge,bindFramebuffer:ke,drawBuffers:Be,useProgram:nt,setBlending:I,setMaterial:qt,setFlipSided:rt,setCullFace:ct,setLineWidth:Ve,setPolygonOffset:vt,setScissorTest:Ge,activeTexture:w,bindTexture:x,unbindTexture:G,compressedTexImage2D:Z,compressedTexImage3D:ee,texImage2D:De,texImage3D:He,updateUBOMapping:ht,uniformBlockBinding:qe,texStorage2D:lt,texStorage3D:oe,texSubImage2D:J,texSubImage3D:be,compressedTexSubImage2D:he,compressedTexSubImage3D:de,scissor:Ze,viewport:Me,reset:yt}}function ih(s,e,t,n){const i=Q_(n);switch(t){case Jh:return s*e;case ed:return s*e;case td:return s*e*2;case Bl:return s*e/i.components*i.byteLength;case zl:return s*e/i.components*i.byteLength;case nd:return s*e*2/i.components*i.byteLength;case kl:return s*e*2/i.components*i.byteLength;case Qh:return s*e*3/i.components*i.byteLength;case Xn:return s*e*4/i.components*i.byteLength;case Hl:return s*e*4/i.components*i.byteLength;case na:case ia:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case sa:case ra:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kc:case Zc:return Math.max(s,16)*Math.max(e,8)/4;case jc:case $c:return Math.max(s,8)*Math.max(e,8)/2;case Jc:case Qc:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case el:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case tl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case nl:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case il:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case sl:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case rl:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case ol:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case al:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case cl:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case ll:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case ul:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case hl:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case dl:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case fl:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case pl:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case oa:case ml:case gl:return Math.ceil(s/4)*Math.ceil(e/4)*16;case id:case _l:return Math.ceil(s/4)*Math.ceil(e/4)*8;case vl:case xl:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Q_(s){switch(s){case si:case Kh:return{byteLength:1,components:1};case jr:case $h:case An:return{byteLength:2,components:1};case Fl:case Ol:return{byteLength:2,components:4};case xs:case Nl:case Ln:return{byteLength:4,components:1};case Zh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${s}.`)}function ev(s,e,t,n,i,r,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new Oe,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(w,x){return m?new OffscreenCanvas(w,x):Zr("canvas")}function v(w,x,G){let Z=1;const ee=Ge(w);if((ee.width>G||ee.height>G)&&(Z=G/Math.max(ee.width,ee.height)),Z<1)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap||typeof VideoFrame<"u"&&w instanceof VideoFrame){const J=Math.floor(Z*ee.width),be=Math.floor(Z*ee.height);h===void 0&&(h=g(J,be));const he=x?g(J,be):h;return he.width=J,he.height=be,he.getContext("2d").drawImage(w,0,0,J,be),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+J+"x"+be+")."),he}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),w;return w}function p(w){return w.generateMipmaps&&w.minFilter!==vn&&w.minFilter!==Qt}function f(w){s.generateMipmap(w)}function E(w,x,G,Z,ee=!1){if(w!==null){if(s[w]!==void 0)return s[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let J=x;if(x===s.RED&&(G===s.FLOAT&&(J=s.R32F),G===s.HALF_FLOAT&&(J=s.R16F),G===s.UNSIGNED_BYTE&&(J=s.R8)),x===s.RED_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.R8UI),G===s.UNSIGNED_SHORT&&(J=s.R16UI),G===s.UNSIGNED_INT&&(J=s.R32UI),G===s.BYTE&&(J=s.R8I),G===s.SHORT&&(J=s.R16I),G===s.INT&&(J=s.R32I)),x===s.RG&&(G===s.FLOAT&&(J=s.RG32F),G===s.HALF_FLOAT&&(J=s.RG16F),G===s.UNSIGNED_BYTE&&(J=s.RG8)),x===s.RG_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RG8UI),G===s.UNSIGNED_SHORT&&(J=s.RG16UI),G===s.UNSIGNED_INT&&(J=s.RG32UI),G===s.BYTE&&(J=s.RG8I),G===s.SHORT&&(J=s.RG16I),G===s.INT&&(J=s.RG32I)),x===s.RGB_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGB8UI),G===s.UNSIGNED_SHORT&&(J=s.RGB16UI),G===s.UNSIGNED_INT&&(J=s.RGB32UI),G===s.BYTE&&(J=s.RGB8I),G===s.SHORT&&(J=s.RGB16I),G===s.INT&&(J=s.RGB32I)),x===s.RGBA_INTEGER&&(G===s.UNSIGNED_BYTE&&(J=s.RGBA8UI),G===s.UNSIGNED_SHORT&&(J=s.RGBA16UI),G===s.UNSIGNED_INT&&(J=s.RGBA32UI),G===s.BYTE&&(J=s.RGBA8I),G===s.SHORT&&(J=s.RGBA16I),G===s.INT&&(J=s.RGBA32I)),x===s.RGB&&G===s.UNSIGNED_INT_5_9_9_9_REV&&(J=s.RGB9_E5),x===s.RGBA){const be=ee?fa:bt.getTransfer(Z);G===s.FLOAT&&(J=s.RGBA32F),G===s.HALF_FLOAT&&(J=s.RGBA16F),G===s.UNSIGNED_BYTE&&(J=be===Bt?s.SRGB8_ALPHA8:s.RGBA8),G===s.UNSIGNED_SHORT_4_4_4_4&&(J=s.RGBA4),G===s.UNSIGNED_SHORT_5_5_5_1&&(J=s.RGB5_A1)}return(J===s.R16F||J===s.R32F||J===s.RG16F||J===s.RG32F||J===s.RGBA16F||J===s.RGBA32F)&&e.get("EXT_color_buffer_float"),J}function M(w,x){let G;return w?x===null||x===xs||x===ur?G=s.DEPTH24_STENCIL8:x===Ln?G=s.DEPTH32F_STENCIL8:x===jr&&(G=s.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):x===null||x===xs||x===ur?G=s.DEPTH_COMPONENT24:x===Ln?G=s.DEPTH_COMPONENT32F:x===jr&&(G=s.DEPTH_COMPONENT16),G}function b(w,x){return p(w)===!0||w.isFramebufferTexture&&w.minFilter!==vn&&w.minFilter!==Qt?Math.log2(Math.max(x.width,x.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?x.mipmaps.length:1}function N(w){const x=w.target;x.removeEventListener("dispose",N),A(x),x.isVideoTexture&&u.delete(x)}function R(w){const x=w.target;x.removeEventListener("dispose",R),Y(x)}function A(w){const x=n.get(w);if(x.__webglInit===void 0)return;const G=w.source,Z=d.get(G);if(Z){const ee=Z[x.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&C(w),Object.keys(Z).length===0&&d.delete(G)}n.remove(w)}function C(w){const x=n.get(w);s.deleteTexture(x.__webglTexture);const G=w.source,Z=d.get(G);delete Z[x.__cacheKey],o.memory.textures--}function Y(w){const x=n.get(w);if(w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let Z=0;Z<6;Z++){if(Array.isArray(x.__webglFramebuffer[Z]))for(let ee=0;ee<x.__webglFramebuffer[Z].length;ee++)s.deleteFramebuffer(x.__webglFramebuffer[Z][ee]);else s.deleteFramebuffer(x.__webglFramebuffer[Z]);x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer[Z])}else{if(Array.isArray(x.__webglFramebuffer))for(let Z=0;Z<x.__webglFramebuffer.length;Z++)s.deleteFramebuffer(x.__webglFramebuffer[Z]);else s.deleteFramebuffer(x.__webglFramebuffer);if(x.__webglDepthbuffer&&s.deleteRenderbuffer(x.__webglDepthbuffer),x.__webglMultisampledFramebuffer&&s.deleteFramebuffer(x.__webglMultisampledFramebuffer),x.__webglColorRenderbuffer)for(let Z=0;Z<x.__webglColorRenderbuffer.length;Z++)x.__webglColorRenderbuffer[Z]&&s.deleteRenderbuffer(x.__webglColorRenderbuffer[Z]);x.__webglDepthRenderbuffer&&s.deleteRenderbuffer(x.__webglDepthRenderbuffer)}const G=w.textures;for(let Z=0,ee=G.length;Z<ee;Z++){const J=n.get(G[Z]);J.__webglTexture&&(s.deleteTexture(J.__webglTexture),o.memory.textures--),n.remove(G[Z])}n.remove(w)}let _=0;function y(){_=0}function H(){const w=_;return w>=i.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+i.maxTextures),_+=1,w}function U(w){const x=[];return x.push(w.wrapS),x.push(w.wrapT),x.push(w.wrapR||0),x.push(w.magFilter),x.push(w.minFilter),x.push(w.anisotropy),x.push(w.internalFormat),x.push(w.format),x.push(w.type),x.push(w.generateMipmaps),x.push(w.premultiplyAlpha),x.push(w.flipY),x.push(w.unpackAlignment),x.push(w.colorSpace),x.join()}function D(w,x){const G=n.get(w);if(w.isVideoTexture&&Ve(w),w.isRenderTargetTexture===!1&&w.version>0&&G.__version!==w.version){const Z=w.image;if(Z===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(Z.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{et(G,w,x);return}}t.bindTexture(s.TEXTURE_2D,G.__webglTexture,s.TEXTURE0+x)}function $(w,x){const G=n.get(w);if(w.version>0&&G.__version!==w.version){et(G,w,x);return}t.bindTexture(s.TEXTURE_2D_ARRAY,G.__webglTexture,s.TEXTURE0+x)}function F(w,x){const G=n.get(w);if(w.version>0&&G.__version!==w.version){et(G,w,x);return}t.bindTexture(s.TEXTURE_3D,G.__webglTexture,s.TEXTURE0+x)}function te(w,x){const G=n.get(w);if(w.version>0&&G.__version!==w.version){Q(G,w,x);return}t.bindTexture(s.TEXTURE_CUBE_MAP,G.__webglTexture,s.TEXTURE0+x)}const z={[vs]:s.REPEAT,[hi]:s.CLAMP_TO_EDGE,[da]:s.MIRRORED_REPEAT},ue={[vn]:s.NEAREST,[jh]:s.NEAREST_MIPMAP_NEAREST,[Vr]:s.NEAREST_MIPMAP_LINEAR,[Qt]:s.LINEAR,[ta]:s.LINEAR_MIPMAP_NEAREST,[di]:s.LINEAR_MIPMAP_LINEAR},le={[Cf]:s.NEVER,[Nf]:s.ALWAYS,[Pf]:s.LESS,[od]:s.LEQUAL,[Lf]:s.EQUAL,[Uf]:s.GEQUAL,[If]:s.GREATER,[Df]:s.NOTEQUAL};function we(w,x){if(x.type===Ln&&e.has("OES_texture_float_linear")===!1&&(x.magFilter===Qt||x.magFilter===ta||x.magFilter===Vr||x.magFilter===di||x.minFilter===Qt||x.minFilter===ta||x.minFilter===Vr||x.minFilter===di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(w,s.TEXTURE_WRAP_S,z[x.wrapS]),s.texParameteri(w,s.TEXTURE_WRAP_T,z[x.wrapT]),(w===s.TEXTURE_3D||w===s.TEXTURE_2D_ARRAY)&&s.texParameteri(w,s.TEXTURE_WRAP_R,z[x.wrapR]),s.texParameteri(w,s.TEXTURE_MAG_FILTER,ue[x.magFilter]),s.texParameteri(w,s.TEXTURE_MIN_FILTER,ue[x.minFilter]),x.compareFunction&&(s.texParameteri(w,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(w,s.TEXTURE_COMPARE_FUNC,le[x.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(x.magFilter===vn||x.minFilter!==Vr&&x.minFilter!==di||x.type===Ln&&e.has("OES_texture_float_linear")===!1)return;if(x.anisotropy>1||n.get(x).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");s.texParameterf(w,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(x.anisotropy,i.getMaxAnisotropy())),n.get(x).__currentAnisotropy=x.anisotropy}}}function Qe(w,x){let G=!1;w.__webglInit===void 0&&(w.__webglInit=!0,x.addEventListener("dispose",N));const Z=x.source;let ee=d.get(Z);ee===void 0&&(ee={},d.set(Z,ee));const J=U(x);if(J!==w.__cacheKey){ee[J]===void 0&&(ee[J]={texture:s.createTexture(),usedTimes:0},o.memory.textures++,G=!0),ee[J].usedTimes++;const be=ee[w.__cacheKey];be!==void 0&&(ee[w.__cacheKey].usedTimes--,be.usedTimes===0&&C(x)),w.__cacheKey=J,w.__webglTexture=ee[J].texture}return G}function et(w,x,G){let Z=s.TEXTURE_2D;(x.isDataArrayTexture||x.isCompressedArrayTexture)&&(Z=s.TEXTURE_2D_ARRAY),x.isData3DTexture&&(Z=s.TEXTURE_3D);const ee=Qe(w,x),J=x.source;t.bindTexture(Z,w.__webglTexture,s.TEXTURE0+G);const be=n.get(J);if(J.version!==be.__version||ee===!0){t.activeTexture(s.TEXTURE0+G);const he=bt.getPrimaries(bt.workingColorSpace),de=x.colorSpace===ji?null:bt.getPrimaries(x.colorSpace),lt=x.colorSpace===ji||he===de?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,lt);let oe=v(x.image,!1,i.maxTextureSize);oe=vt(x,oe);const De=r.convert(x.format,x.colorSpace),He=r.convert(x.type);let Ze=E(x.internalFormat,De,He,x.colorSpace,x.isVideoTexture);we(Z,x);let Me;const ht=x.mipmaps,qe=x.isVideoTexture!==!0,yt=be.__version===void 0||ee===!0,O=J.dataReady,Re=b(x,oe);if(x.isDepthTexture)Ze=M(x.format===hr,x.type),yt&&(qe?t.texStorage2D(s.TEXTURE_2D,1,Ze,oe.width,oe.height):t.texImage2D(s.TEXTURE_2D,0,Ze,oe.width,oe.height,0,De,He,null));else if(x.isDataTexture)if(ht.length>0){qe&&yt&&t.texStorage2D(s.TEXTURE_2D,Re,Ze,ht[0].width,ht[0].height);for(let K=0,ne=ht.length;K<ne;K++)Me=ht[K],qe?O&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Me.width,Me.height,De,He,Me.data):t.texImage2D(s.TEXTURE_2D,K,Ze,Me.width,Me.height,0,De,He,Me.data);x.generateMipmaps=!1}else qe?(yt&&t.texStorage2D(s.TEXTURE_2D,Re,Ze,oe.width,oe.height),O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,oe.width,oe.height,De,He,oe.data)):t.texImage2D(s.TEXTURE_2D,0,Ze,oe.width,oe.height,0,De,He,oe.data);else if(x.isCompressedTexture)if(x.isCompressedArrayTexture){qe&&yt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Ze,ht[0].width,ht[0].height,oe.depth);for(let K=0,ne=ht.length;K<ne;K++)if(Me=ht[K],x.format!==Xn)if(De!==null)if(qe){if(O)if(x.layerUpdates.size>0){const _e=ih(Me.width,Me.height,x.format,x.type);for(const Ee of x.layerUpdates){const Ye=Me.data.subarray(Ee*_e/Me.data.BYTES_PER_ELEMENT,(Ee+1)*_e/Me.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,Ee,Me.width,Me.height,1,De,Ye,0,0)}x.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,oe.depth,De,Me.data,0,0)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,K,Ze,Me.width,Me.height,oe.depth,0,Me.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else qe?O&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,K,0,0,0,Me.width,Me.height,oe.depth,De,He,Me.data):t.texImage3D(s.TEXTURE_2D_ARRAY,K,Ze,Me.width,Me.height,oe.depth,0,De,He,Me.data)}else{qe&&yt&&t.texStorage2D(s.TEXTURE_2D,Re,Ze,ht[0].width,ht[0].height);for(let K=0,ne=ht.length;K<ne;K++)Me=ht[K],x.format!==Xn?De!==null?qe?O&&t.compressedTexSubImage2D(s.TEXTURE_2D,K,0,0,Me.width,Me.height,De,Me.data):t.compressedTexImage2D(s.TEXTURE_2D,K,Ze,Me.width,Me.height,0,Me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):qe?O&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,Me.width,Me.height,De,He,Me.data):t.texImage2D(s.TEXTURE_2D,K,Ze,Me.width,Me.height,0,De,He,Me.data)}else if(x.isDataArrayTexture)if(qe){if(yt&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Re,Ze,oe.width,oe.height,oe.depth),O)if(x.layerUpdates.size>0){const K=ih(oe.width,oe.height,x.format,x.type);for(const ne of x.layerUpdates){const _e=oe.data.subarray(ne*K/oe.data.BYTES_PER_ELEMENT,(ne+1)*K/oe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,ne,oe.width,oe.height,1,De,He,_e)}x.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,oe.width,oe.height,oe.depth,De,He,oe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ze,oe.width,oe.height,oe.depth,0,De,He,oe.data);else if(x.isData3DTexture)qe?(yt&&t.texStorage3D(s.TEXTURE_3D,Re,Ze,oe.width,oe.height,oe.depth),O&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,oe.width,oe.height,oe.depth,De,He,oe.data)):t.texImage3D(s.TEXTURE_3D,0,Ze,oe.width,oe.height,oe.depth,0,De,He,oe.data);else if(x.isFramebufferTexture){if(yt)if(qe)t.texStorage2D(s.TEXTURE_2D,Re,Ze,oe.width,oe.height);else{let K=oe.width,ne=oe.height;for(let _e=0;_e<Re;_e++)t.texImage2D(s.TEXTURE_2D,_e,Ze,K,ne,0,De,He,null),K>>=1,ne>>=1}}else if(ht.length>0){if(qe&&yt){const K=Ge(ht[0]);t.texStorage2D(s.TEXTURE_2D,Re,Ze,K.width,K.height)}for(let K=0,ne=ht.length;K<ne;K++)Me=ht[K],qe?O&&t.texSubImage2D(s.TEXTURE_2D,K,0,0,De,He,Me):t.texImage2D(s.TEXTURE_2D,K,Ze,De,He,Me);x.generateMipmaps=!1}else if(qe){if(yt){const K=Ge(oe);t.texStorage2D(s.TEXTURE_2D,Re,Ze,K.width,K.height)}O&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,De,He,oe)}else t.texImage2D(s.TEXTURE_2D,0,Ze,De,He,oe);p(x)&&f(Z),be.__version=J.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function Q(w,x,G){if(x.image.length!==6)return;const Z=Qe(w,x),ee=x.source;t.bindTexture(s.TEXTURE_CUBE_MAP,w.__webglTexture,s.TEXTURE0+G);const J=n.get(ee);if(ee.version!==J.__version||Z===!0){t.activeTexture(s.TEXTURE0+G);const be=bt.getPrimaries(bt.workingColorSpace),he=x.colorSpace===ji?null:bt.getPrimaries(x.colorSpace),de=x.colorSpace===ji||be===he?s.NONE:s.BROWSER_DEFAULT_WEBGL;s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,x.flipY),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,x.premultiplyAlpha),s.pixelStorei(s.UNPACK_ALIGNMENT,x.unpackAlignment),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,de);const lt=x.isCompressedTexture||x.image[0].isCompressedTexture,oe=x.image[0]&&x.image[0].isDataTexture,De=[];for(let ne=0;ne<6;ne++)!lt&&!oe?De[ne]=v(x.image[ne],!0,i.maxCubemapSize):De[ne]=oe?x.image[ne].image:x.image[ne],De[ne]=vt(x,De[ne]);const He=De[0],Ze=r.convert(x.format,x.colorSpace),Me=r.convert(x.type),ht=E(x.internalFormat,Ze,Me,x.colorSpace),qe=x.isVideoTexture!==!0,yt=J.__version===void 0||Z===!0,O=ee.dataReady;let Re=b(x,He);we(s.TEXTURE_CUBE_MAP,x);let K;if(lt){qe&&yt&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ht,He.width,He.height);for(let ne=0;ne<6;ne++){K=De[ne].mipmaps;for(let _e=0;_e<K.length;_e++){const Ee=K[_e];x.format!==Xn?Ze!==null?qe?O&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,Ee.width,Ee.height,Ze,Ee.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,ht,Ee.width,Ee.height,0,Ee.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):qe?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,0,0,Ee.width,Ee.height,Ze,Me,Ee.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e,ht,Ee.width,Ee.height,0,Ze,Me,Ee.data)}}}else{if(K=x.mipmaps,qe&&yt){K.length>0&&Re++;const ne=Ge(De[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Re,ht,ne.width,ne.height)}for(let ne=0;ne<6;ne++)if(oe){qe?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,De[ne].width,De[ne].height,Ze,Me,De[ne].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ht,De[ne].width,De[ne].height,0,Ze,Me,De[ne].data);for(let _e=0;_e<K.length;_e++){const Ye=K[_e].image[ne].image;qe?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,Ye.width,Ye.height,Ze,Me,Ye.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,ht,Ye.width,Ye.height,0,Ze,Me,Ye.data)}}else{qe?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,0,0,Ze,Me,De[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,0,ht,Ze,Me,De[ne]);for(let _e=0;_e<K.length;_e++){const Ee=K[_e];qe?O&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,0,0,Ze,Me,Ee.image[ne]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ne,_e+1,ht,Ze,Me,Ee.image[ne])}}}p(x)&&f(s.TEXTURE_CUBE_MAP),J.__version=ee.version,x.onUpdate&&x.onUpdate(x)}w.__version=x.version}function ie(w,x,G,Z,ee,J){const be=r.convert(G.format,G.colorSpace),he=r.convert(G.type),de=E(G.internalFormat,be,he,G.colorSpace);if(!n.get(x).__hasExternalTextures){const oe=Math.max(1,x.width>>J),De=Math.max(1,x.height>>J);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,J,de,oe,De,x.depth,0,be,he,null):t.texImage2D(ee,J,de,oe,De,0,be,he,null)}t.bindFramebuffer(s.FRAMEBUFFER,w),ct(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Z,ee,n.get(G).__webglTexture,0,rt(x)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Z,ee,n.get(G).__webglTexture,J),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ae(w,x,G){if(s.bindRenderbuffer(s.RENDERBUFFER,w),x.depthBuffer){const Z=x.depthTexture,ee=Z&&Z.isDepthTexture?Z.type:null,J=M(x.stencilBuffer,ee),be=x.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,he=rt(x);ct(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,he,J,x.width,x.height):G?s.renderbufferStorageMultisample(s.RENDERBUFFER,he,J,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,J,x.width,x.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,be,s.RENDERBUFFER,w)}else{const Z=x.textures;for(let ee=0;ee<Z.length;ee++){const J=Z[ee],be=r.convert(J.format,J.colorSpace),he=r.convert(J.type),de=E(J.internalFormat,be,he,J.colorSpace),lt=rt(x);G&&ct(x)===!1?s.renderbufferStorageMultisample(s.RENDERBUFFER,lt,de,x.width,x.height):ct(x)?a.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,lt,de,x.width,x.height):s.renderbufferStorage(s.RENDERBUFFER,de,x.width,x.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function ge(w,x){if(x&&x.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(s.FRAMEBUFFER,w),!(x.depthTexture&&x.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(x.depthTexture).__webglTexture||x.depthTexture.image.width!==x.width||x.depthTexture.image.height!==x.height)&&(x.depthTexture.image.width=x.width,x.depthTexture.image.height=x.height,x.depthTexture.needsUpdate=!0),D(x.depthTexture,0);const Z=n.get(x.depthTexture).__webglTexture,ee=rt(x);if(x.depthTexture.format===ir)ct(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_ATTACHMENT,s.TEXTURE_2D,Z,0);else if(x.depthTexture.format===hr)ct(x)?a.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0,ee):s.framebufferTexture2D(s.FRAMEBUFFER,s.DEPTH_STENCIL_ATTACHMENT,s.TEXTURE_2D,Z,0);else throw new Error("Unknown depthTexture format")}function ke(w){const x=n.get(w),G=w.isWebGLCubeRenderTarget===!0;if(x.__boundDepthTexture!==w.depthTexture){const Z=w.depthTexture;if(x.__depthDisposeCallback&&x.__depthDisposeCallback(),Z){const ee=()=>{delete x.__boundDepthTexture,delete x.__depthDisposeCallback,Z.removeEventListener("dispose",ee)};Z.addEventListener("dispose",ee),x.__depthDisposeCallback=ee}x.__boundDepthTexture=Z}if(w.depthTexture&&!x.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");ge(x.__webglFramebuffer,w)}else if(G){x.__webglDepthbuffer=[];for(let Z=0;Z<6;Z++)if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer[Z]),x.__webglDepthbuffer[Z]===void 0)x.__webglDepthbuffer[Z]=s.createRenderbuffer(),Ae(x.__webglDepthbuffer[Z],w,!1);else{const ee=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,J=x.__webglDepthbuffer[Z];s.bindRenderbuffer(s.RENDERBUFFER,J),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,J)}}else if(t.bindFramebuffer(s.FRAMEBUFFER,x.__webglFramebuffer),x.__webglDepthbuffer===void 0)x.__webglDepthbuffer=s.createRenderbuffer(),Ae(x.__webglDepthbuffer,w,!1);else{const Z=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ee=x.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ee),s.framebufferRenderbuffer(s.FRAMEBUFFER,Z,s.RENDERBUFFER,ee)}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Be(w,x,G){const Z=n.get(w);x!==void 0&&ie(Z.__webglFramebuffer,w,w.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),G!==void 0&&ke(w)}function nt(w){const x=w.texture,G=n.get(w),Z=n.get(x);w.addEventListener("dispose",R);const ee=w.textures,J=w.isWebGLCubeRenderTarget===!0,be=ee.length>1;if(be||(Z.__webglTexture===void 0&&(Z.__webglTexture=s.createTexture()),Z.__version=x.version,o.memory.textures++),J){G.__webglFramebuffer=[];for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer[he]=[];for(let de=0;de<x.mipmaps.length;de++)G.__webglFramebuffer[he][de]=s.createFramebuffer()}else G.__webglFramebuffer[he]=s.createFramebuffer()}else{if(x.mipmaps&&x.mipmaps.length>0){G.__webglFramebuffer=[];for(let he=0;he<x.mipmaps.length;he++)G.__webglFramebuffer[he]=s.createFramebuffer()}else G.__webglFramebuffer=s.createFramebuffer();if(be)for(let he=0,de=ee.length;he<de;he++){const lt=n.get(ee[he]);lt.__webglTexture===void 0&&(lt.__webglTexture=s.createTexture(),o.memory.textures++)}if(w.samples>0&&ct(w)===!1){G.__webglMultisampledFramebuffer=s.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let he=0;he<ee.length;he++){const de=ee[he];G.__webglColorRenderbuffer[he]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,G.__webglColorRenderbuffer[he]);const lt=r.convert(de.format,de.colorSpace),oe=r.convert(de.type),De=E(de.internalFormat,lt,oe,de.colorSpace,w.isXRRenderTarget===!0),He=rt(w);s.renderbufferStorageMultisample(s.RENDERBUFFER,He,De,w.width,w.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+he,s.RENDERBUFFER,G.__webglColorRenderbuffer[he])}s.bindRenderbuffer(s.RENDERBUFFER,null),w.depthBuffer&&(G.__webglDepthRenderbuffer=s.createRenderbuffer(),Ae(G.__webglDepthRenderbuffer,w,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(J){t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture),we(s.TEXTURE_CUBE_MAP,x);for(let he=0;he<6;he++)if(x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ie(G.__webglFramebuffer[he][de],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,de);else ie(G.__webglFramebuffer[he],w,x,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+he,0);p(x)&&f(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(be){for(let he=0,de=ee.length;he<de;he++){const lt=ee[he],oe=n.get(lt);t.bindTexture(s.TEXTURE_2D,oe.__webglTexture),we(s.TEXTURE_2D,lt),ie(G.__webglFramebuffer,w,lt,s.COLOR_ATTACHMENT0+he,s.TEXTURE_2D,0),p(lt)&&f(s.TEXTURE_2D)}t.unbindTexture()}else{let he=s.TEXTURE_2D;if((w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(he=w.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(he,Z.__webglTexture),we(he,x),x.mipmaps&&x.mipmaps.length>0)for(let de=0;de<x.mipmaps.length;de++)ie(G.__webglFramebuffer[de],w,x,s.COLOR_ATTACHMENT0,he,de);else ie(G.__webglFramebuffer,w,x,s.COLOR_ATTACHMENT0,he,0);p(x)&&f(he),t.unbindTexture()}w.depthBuffer&&ke(w)}function _t(w){const x=w.textures;for(let G=0,Z=x.length;G<Z;G++){const ee=x[G];if(p(ee)){const J=w.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:s.TEXTURE_2D,be=n.get(ee).__webglTexture;t.bindTexture(J,be),f(J),t.unbindTexture()}}}const at=[],I=[];function qt(w){if(w.samples>0){if(ct(w)===!1){const x=w.textures,G=w.width,Z=w.height;let ee=s.COLOR_BUFFER_BIT;const J=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,be=n.get(w),he=x.length>1;if(he)for(let de=0;de<x.length;de++)t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,be.__webglMultisampledFramebuffer),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglFramebuffer);for(let de=0;de<x.length;de++){if(w.resolveDepthBuffer&&(w.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),w.stencilBuffer&&w.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),he){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,be.__webglColorRenderbuffer[de]);const lt=n.get(x[de]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,lt,0)}s.blitFramebuffer(0,0,G,Z,0,0,G,Z,ee,s.NEAREST),c===!0&&(at.length=0,I.length=0,at.push(s.COLOR_ATTACHMENT0+de),w.depthBuffer&&w.resolveDepthBuffer===!1&&(at.push(J),I.push(J),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,I)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,at))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),he)for(let de=0;de<x.length;de++){t.bindFramebuffer(s.FRAMEBUFFER,be.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.RENDERBUFFER,be.__webglColorRenderbuffer[de]);const lt=n.get(x[de]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,be.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+de,s.TEXTURE_2D,lt,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,be.__webglMultisampledFramebuffer)}else if(w.depthBuffer&&w.resolveDepthBuffer===!1&&c){const x=w.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[x])}}}function rt(w){return Math.min(i.maxSamples,w.samples)}function ct(w){const x=n.get(w);return w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&x.__useRenderToTexture!==!1}function Ve(w){const x=o.render.frame;u.get(w)!==x&&(u.set(w,x),w.update())}function vt(w,x){const G=w.colorSpace,Z=w.format,ee=w.type;return w.isCompressedTexture===!0||w.isVideoTexture===!0||G!==tn&&G!==ji&&(bt.getTransfer(G)===Bt?(Z!==Xn||ee!==si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),x}function Ge(w){return typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement?(l.width=w.naturalWidth||w.width,l.height=w.naturalHeight||w.height):typeof VideoFrame<"u"&&w instanceof VideoFrame?(l.width=w.displayWidth,l.height=w.displayHeight):(l.width=w.width,l.height=w.height),l}this.allocateTextureUnit=H,this.resetTextureUnits=y,this.setTexture2D=D,this.setTexture2DArray=$,this.setTexture3D=F,this.setTextureCube=te,this.rebindTextures=Be,this.setupRenderTarget=nt,this.updateRenderTargetMipmap=_t,this.updateMultisampleRenderTarget=qt,this.setupDepthRenderbuffer=ke,this.setupFrameBufferTexture=ie,this.useMultisampledRTT=ct}function tv(s,e){function t(n,i=ji){let r;const o=bt.getTransfer(i);if(n===si)return s.UNSIGNED_BYTE;if(n===Fl)return s.UNSIGNED_SHORT_4_4_4_4;if(n===Ol)return s.UNSIGNED_SHORT_5_5_5_1;if(n===Zh)return s.UNSIGNED_INT_5_9_9_9_REV;if(n===Kh)return s.BYTE;if(n===$h)return s.SHORT;if(n===jr)return s.UNSIGNED_SHORT;if(n===Nl)return s.INT;if(n===xs)return s.UNSIGNED_INT;if(n===Ln)return s.FLOAT;if(n===An)return s.HALF_FLOAT;if(n===Jh)return s.ALPHA;if(n===Qh)return s.RGB;if(n===Xn)return s.RGBA;if(n===ed)return s.LUMINANCE;if(n===td)return s.LUMINANCE_ALPHA;if(n===ir)return s.DEPTH_COMPONENT;if(n===hr)return s.DEPTH_STENCIL;if(n===Bl)return s.RED;if(n===zl)return s.RED_INTEGER;if(n===nd)return s.RG;if(n===kl)return s.RG_INTEGER;if(n===Hl)return s.RGBA_INTEGER;if(n===na||n===ia||n===sa||n===ra)if(o===Bt)if(r=e.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(n===na)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=e.get("WEBGL_compressed_texture_s3tc"),r!==null){if(n===na)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===ia)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===sa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===ra)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===jc||n===Kc||n===$c||n===Zc)if(r=e.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(n===jc)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Kc)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===$c)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Zc)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Jc||n===Qc||n===el)if(r=e.get("WEBGL_compressed_texture_etc"),r!==null){if(n===Jc||n===Qc)return o===Bt?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(n===el)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===tl||n===nl||n===il||n===sl||n===rl||n===ol||n===al||n===cl||n===ll||n===ul||n===hl||n===dl||n===fl||n===pl)if(r=e.get("WEBGL_compressed_texture_astc"),r!==null){if(n===tl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===nl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===il)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===rl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===ol)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===al)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===ll)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===hl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===dl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===fl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===pl)return o===Bt?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===oa||n===ml||n===gl)if(r=e.get("EXT_texture_compression_bptc"),r!==null){if(n===oa)return o===Bt?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===ml)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===gl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===id||n===_l||n===vl||n===xl)if(r=e.get("EXT_texture_compression_rgtc"),r!==null){if(n===oa)return r.COMPRESSED_RED_RGTC1_EXT;if(n===_l)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===vl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===xl)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ur?s.UNSIGNED_INT_24_8:s[n]!==void 0?s[n]:null}return{convert:t}}class nv extends rn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class zt extends kt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const iv={type:"move"};class yc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new L,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new L),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new L,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new L),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,r=null,o=null;const a=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){o=!0;for(const v of e.hand.values()){const p=t.getJointPose(v,n),f=this._getHandJoint(l,v);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=l.joints["index-finger-tip"],h=l.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,g=.005;l.inputState.pinching&&d>m+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&d<=m-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(r=t.getPose(e.gripSpace,n),r!==null&&(c.matrix.fromArray(r.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,r.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(r.linearVelocity)):c.hasLinearVelocity=!1,r.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(r.angularVelocity)):c.hasAngularVelocity=!1));a!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&r!==null&&(i=r),i!==null&&(a.matrix.fromArray(i.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,i.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(i.linearVelocity)):a.hasLinearVelocity=!1,i.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(i.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(iv)))}return a!==null&&(a.visible=i!==null),c!==null&&(c.visible=r!==null),l!==null&&(l.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new zt;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const sv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,rv=`
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

}`;class ov{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const i=new en,r=e.properties.get(i);r.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Xt({vertexShader:sv,fragmentShader:rv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ce(new fn(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class av extends vr{constructor(e,t){super();const n=this;let i=null,r=1,o=null,a="local-floor",c=1,l=null,u=null,h=null,d=null,m=null,g=null;const v=new ov,p=t.getContextAttributes();let f=null,E=null;const M=[],b=[],N=new Oe;let R=null;const A=new rn;A.layers.enable(1),A.viewport=new wt;const C=new rn;C.layers.enable(2),C.viewport=new wt;const Y=[A,C],_=new nv;_.layers.enable(1),_.layers.enable(2);let y=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Q){let ie=M[Q];return ie===void 0&&(ie=new yc,M[Q]=ie),ie.getTargetRaySpace()},this.getControllerGrip=function(Q){let ie=M[Q];return ie===void 0&&(ie=new yc,M[Q]=ie),ie.getGripSpace()},this.getHand=function(Q){let ie=M[Q];return ie===void 0&&(ie=new yc,M[Q]=ie),ie.getHandSpace()};function U(Q){const ie=b.indexOf(Q.inputSource);if(ie===-1)return;const Ae=M[ie];Ae!==void 0&&(Ae.update(Q.inputSource,Q.frame,l||o),Ae.dispatchEvent({type:Q.type,data:Q.inputSource}))}function D(){i.removeEventListener("select",U),i.removeEventListener("selectstart",U),i.removeEventListener("selectend",U),i.removeEventListener("squeeze",U),i.removeEventListener("squeezestart",U),i.removeEventListener("squeezeend",U),i.removeEventListener("end",D),i.removeEventListener("inputsourceschange",$);for(let Q=0;Q<M.length;Q++){const ie=b[Q];ie!==null&&(b[Q]=null,M[Q].disconnect(ie))}y=null,H=null,v.reset(),e.setRenderTarget(f),m=null,d=null,h=null,i=null,E=null,et.stop(),n.isPresenting=!1,e.setPixelRatio(R),e.setSize(N.width,N.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Q){r=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Q){a=Q,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||o},this.setReferenceSpace=function(Q){l=Q},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(Q){if(i=Q,i!==null){if(f=e.getRenderTarget(),i.addEventListener("select",U),i.addEventListener("selectstart",U),i.addEventListener("selectend",U),i.addEventListener("squeeze",U),i.addEventListener("squeezestart",U),i.addEventListener("squeezeend",U),i.addEventListener("end",D),i.addEventListener("inputsourceschange",$),p.xrCompatible!==!0&&await t.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(N),i.renderState.layers===void 0){const ie={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(i,t,ie),i.updateRenderState({baseLayer:m}),e.setPixelRatio(1),e.setSize(m.framebufferWidth,m.framebufferHeight,!1),E=new qn(m.framebufferWidth,m.framebufferHeight,{format:Xn,type:si,colorSpace:e.outputColorSpace,stencilBuffer:p.stencil})}else{let ie=null,Ae=null,ge=null;p.depth&&(ge=p.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ie=p.stencil?hr:ir,Ae=p.stencil?ur:xs);const ke={colorFormat:t.RGBA8,depthFormat:ge,scaleFactor:r};h=new XRWebGLBinding(i,t),d=h.createProjectionLayer(ke),i.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),E=new qn(d.textureWidth,d.textureHeight,{format:Xn,type:si,depthTexture:new Md(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,ie),stencilBuffer:p.stencil,colorSpace:e.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}E.isXRRenderTarget=!0,this.setFoveation(c),l=null,o=await i.requestReferenceSpace(a),et.setContext(i),et.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return v.getDepthTexture()};function $(Q){for(let ie=0;ie<Q.removed.length;ie++){const Ae=Q.removed[ie],ge=b.indexOf(Ae);ge>=0&&(b[ge]=null,M[ge].disconnect(Ae))}for(let ie=0;ie<Q.added.length;ie++){const Ae=Q.added[ie];let ge=b.indexOf(Ae);if(ge===-1){for(let Be=0;Be<M.length;Be++)if(Be>=b.length){b.push(Ae),ge=Be;break}else if(b[Be]===null){b[Be]=Ae,ge=Be;break}if(ge===-1)break}const ke=M[ge];ke&&ke.connect(Ae)}}const F=new L,te=new L;function z(Q,ie,Ae){F.setFromMatrixPosition(ie.matrixWorld),te.setFromMatrixPosition(Ae.matrixWorld);const ge=F.distanceTo(te),ke=ie.projectionMatrix.elements,Be=Ae.projectionMatrix.elements,nt=ke[14]/(ke[10]-1),_t=ke[14]/(ke[10]+1),at=(ke[9]+1)/ke[5],I=(ke[9]-1)/ke[5],qt=(ke[8]-1)/ke[0],rt=(Be[8]+1)/Be[0],ct=nt*qt,Ve=nt*rt,vt=ge/(-qt+rt),Ge=vt*-qt;if(ie.matrixWorld.decompose(Q.position,Q.quaternion,Q.scale),Q.translateX(Ge),Q.translateZ(vt),Q.matrixWorld.compose(Q.position,Q.quaternion,Q.scale),Q.matrixWorldInverse.copy(Q.matrixWorld).invert(),ke[10]===-1)Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse);else{const w=nt+vt,x=_t+vt,G=ct-Ge,Z=Ve+(ge-Ge),ee=at*_t/x*w,J=I*_t/x*w;Q.projectionMatrix.makePerspective(G,Z,ee,J,w,x),Q.projectionMatrixInverse.copy(Q.projectionMatrix).invert()}}function ue(Q,ie){ie===null?Q.matrixWorld.copy(Q.matrix):Q.matrixWorld.multiplyMatrices(ie.matrixWorld,Q.matrix),Q.matrixWorldInverse.copy(Q.matrixWorld).invert()}this.updateCamera=function(Q){if(i===null)return;let ie=Q.near,Ae=Q.far;v.texture!==null&&(v.depthNear>0&&(ie=v.depthNear),v.depthFar>0&&(Ae=v.depthFar)),_.near=C.near=A.near=ie,_.far=C.far=A.far=Ae,(y!==_.near||H!==_.far)&&(i.updateRenderState({depthNear:_.near,depthFar:_.far}),y=_.near,H=_.far);const ge=Q.parent,ke=_.cameras;ue(_,ge);for(let Be=0;Be<ke.length;Be++)ue(ke[Be],ge);ke.length===2?z(_,A,C):_.projectionMatrix.copy(A.projectionMatrix),le(Q,_,ge)};function le(Q,ie,Ae){Ae===null?Q.matrix.copy(ie.matrixWorld):(Q.matrix.copy(Ae.matrixWorld),Q.matrix.invert(),Q.matrix.multiply(ie.matrixWorld)),Q.matrix.decompose(Q.position,Q.quaternion,Q.scale),Q.updateMatrixWorld(!0),Q.projectionMatrix.copy(ie.projectionMatrix),Q.projectionMatrixInverse.copy(ie.projectionMatrixInverse),Q.isPerspectiveCamera&&(Q.fov=dr*2*Math.atan(1/Q.projectionMatrix.elements[5]),Q.zoom=1)}this.getCamera=function(){return _},this.getFoveation=function(){if(!(d===null&&m===null))return c},this.setFoveation=function(Q){c=Q,d!==null&&(d.fixedFoveation=Q),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=Q)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(_)};let we=null;function Qe(Q,ie){if(u=ie.getViewerPose(l||o),g=ie,u!==null){const Ae=u.views;m!==null&&(e.setRenderTargetFramebuffer(E,m.framebuffer),e.setRenderTarget(E));let ge=!1;Ae.length!==_.cameras.length&&(_.cameras.length=0,ge=!0);for(let Be=0;Be<Ae.length;Be++){const nt=Ae[Be];let _t=null;if(m!==null)_t=m.getViewport(nt);else{const I=h.getViewSubImage(d,nt);_t=I.viewport,Be===0&&(e.setRenderTargetTextures(E,I.colorTexture,d.ignoreDepthValues?void 0:I.depthStencilTexture),e.setRenderTarget(E))}let at=Y[Be];at===void 0&&(at=new rn,at.layers.enable(Be),at.viewport=new wt,Y[Be]=at),at.matrix.fromArray(nt.transform.matrix),at.matrix.decompose(at.position,at.quaternion,at.scale),at.projectionMatrix.fromArray(nt.projectionMatrix),at.projectionMatrixInverse.copy(at.projectionMatrix).invert(),at.viewport.set(_t.x,_t.y,_t.width,_t.height),Be===0&&(_.matrix.copy(at.matrix),_.matrix.decompose(_.position,_.quaternion,_.scale)),ge===!0&&_.cameras.push(at)}const ke=i.enabledFeatures;if(ke&&ke.includes("depth-sensing")){const Be=h.getDepthInformation(Ae[0]);Be&&Be.isValid&&Be.texture&&v.init(e,Be,i.renderState)}}for(let Ae=0;Ae<M.length;Ae++){const ge=b[Ae],ke=M[Ae];ge!==null&&ke!==void 0&&ke.update(ge,ie,l||o)}we&&we(Q,ie),ie.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:ie}),g=null}const et=new yd;et.setAnimationLoop(Qe),this.setAnimationLoop=function(Q){we=Q},this.dispose=function(){}}}const hs=new fi,cv=new st;function lv(s,e){function t(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function n(p,f){f.color.getRGB(p.fogColor.value,md(s)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function i(p,f,E,M,b){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,b)):f.isMeshMatcapMaterial?(r(p,f),g(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),v(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?c(p,f,E,M):f.isSpriteMaterial?l(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,t(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===mn&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,t(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===mn&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,t(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,t(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const E=e.get(f),M=E.envMap,b=E.envMapRotation;M&&(p.envMap.value=M,hs.copy(b),hs.x*=-1,hs.y*=-1,hs.z*=-1,M.isCubeTexture&&M.isRenderTargetTexture===!1&&(hs.y*=-1,hs.z*=-1),p.envMapRotation.value.setFromMatrix4(cv.makeRotationFromEuler(hs)),p.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,t(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function c(p,f,E,M){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*E,p.scale.value=M*.5,f.map&&(p.map.value=f.map,t(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function l(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,t(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,t(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,E){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===mn&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=E.texture,p.transmissionSamplerSize.value.set(E.width,E.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,f){f.matcap&&(p.matcap.value=f.matcap)}function v(p,f){const E=e.get(f).light;p.referencePosition.value.setFromMatrixPosition(E.matrixWorld),p.nearDistance.value=E.shadow.camera.near,p.farDistance.value=E.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function uv(s,e,t,n){let i={},r={},o=[];const a=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function c(E,M){const b=M.program;n.uniformBlockBinding(E,b)}function l(E,M){let b=i[E.id];b===void 0&&(g(E),b=u(E),i[E.id]=b,E.addEventListener("dispose",p));const N=M.program;n.updateUBOMapping(E,N);const R=e.render.frame;r[E.id]!==R&&(d(E),r[E.id]=R)}function u(E){const M=h();E.__bindingPointIndex=M;const b=s.createBuffer(),N=E.__size,R=E.usage;return s.bindBuffer(s.UNIFORM_BUFFER,b),s.bufferData(s.UNIFORM_BUFFER,N,R),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,M,b),b}function h(){for(let E=0;E<a;E++)if(o.indexOf(E)===-1)return o.push(E),E;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(E){const M=i[E.id],b=E.uniforms,N=E.__cache;s.bindBuffer(s.UNIFORM_BUFFER,M);for(let R=0,A=b.length;R<A;R++){const C=Array.isArray(b[R])?b[R]:[b[R]];for(let Y=0,_=C.length;Y<_;Y++){const y=C[Y];if(m(y,R,Y,N)===!0){const H=y.__offset,U=Array.isArray(y.value)?y.value:[y.value];let D=0;for(let $=0;$<U.length;$++){const F=U[$],te=v(F);typeof F=="number"||typeof F=="boolean"?(y.__data[0]=F,s.bufferSubData(s.UNIFORM_BUFFER,H+D,y.__data)):F.isMatrix3?(y.__data[0]=F.elements[0],y.__data[1]=F.elements[1],y.__data[2]=F.elements[2],y.__data[3]=0,y.__data[4]=F.elements[3],y.__data[5]=F.elements[4],y.__data[6]=F.elements[5],y.__data[7]=0,y.__data[8]=F.elements[6],y.__data[9]=F.elements[7],y.__data[10]=F.elements[8],y.__data[11]=0):(F.toArray(y.__data,D),D+=te.storage/Float32Array.BYTES_PER_ELEMENT)}s.bufferSubData(s.UNIFORM_BUFFER,H,y.__data)}}}s.bindBuffer(s.UNIFORM_BUFFER,null)}function m(E,M,b,N){const R=E.value,A=M+"_"+b;if(N[A]===void 0)return typeof R=="number"||typeof R=="boolean"?N[A]=R:N[A]=R.clone(),!0;{const C=N[A];if(typeof R=="number"||typeof R=="boolean"){if(C!==R)return N[A]=R,!0}else if(C.equals(R)===!1)return C.copy(R),!0}return!1}function g(E){const M=E.uniforms;let b=0;const N=16;for(let A=0,C=M.length;A<C;A++){const Y=Array.isArray(M[A])?M[A]:[M[A]];for(let _=0,y=Y.length;_<y;_++){const H=Y[_],U=Array.isArray(H.value)?H.value:[H.value];for(let D=0,$=U.length;D<$;D++){const F=U[D],te=v(F),z=b%N,ue=z%te.boundary,le=z+ue;b+=ue,le!==0&&N-le<te.storage&&(b+=N-le),H.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=b,b+=te.storage}}}const R=b%N;return R>0&&(b+=N-R),E.__size=b,E.__cache={},this}function v(E){const M={boundary:0,storage:0};return typeof E=="number"||typeof E=="boolean"?(M.boundary=4,M.storage=4):E.isVector2?(M.boundary=8,M.storage=8):E.isVector3||E.isColor?(M.boundary=16,M.storage=12):E.isVector4?(M.boundary=16,M.storage=16):E.isMatrix3?(M.boundary=48,M.storage=48):E.isMatrix4?(M.boundary=64,M.storage=64):E.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",E),M}function p(E){const M=E.target;M.removeEventListener("dispose",p);const b=o.indexOf(M.__bindingPointIndex);o.splice(b,1),s.deleteBuffer(i[M.id]),delete i[M.id],delete r[M.id]}function f(){for(const E in i)s.deleteBuffer(i[E]);o=[],i={},r={}}return{bind:c,update:l,dispose:f}}class hv{constructor(e={}){const{canvas:t=Jf(),context:n=null,depth:i=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=o;const m=new Uint32Array(4),g=new Int32Array(4);let v=null,p=null;const f=[],E=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Ft,this.toneMapping=Zi,this.toneMappingExposure=1;const M=this;let b=!1,N=0,R=0,A=null,C=-1,Y=null;const _=new wt,y=new wt;let H=null;const U=new Pe(0);let D=0,$=t.width,F=t.height,te=1,z=null,ue=null;const le=new wt(0,0,$,F),we=new wt(0,0,$,F);let Qe=!1;const et=new Wl;let Q=!1,ie=!1;const Ae=new st,ge=new st,ke=new L,Be=new wt,nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let _t=!1;function at(){return A===null?te:1}let I=n;function qt(S,B){return t.getContext(S,B)}try{const S={alpha:!0,depth:i,stencil:r,antialias:a,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Dl}`),t.addEventListener("webglcontextlost",ne,!1),t.addEventListener("webglcontextrestored",_e,!1),t.addEventListener("webglcontextcreationerror",Ee,!1),I===null){const B="webgl2";if(I=qt(B,S),I===null)throw qt(B)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(S){throw console.error("THREE.WebGLRenderer: "+S.message),S}let rt,ct,Ve,vt,Ge,w,x,G,Z,ee,J,be,he,de,lt,oe,De,He,Ze,Me,ht,qe,yt,O;function Re(){rt=new g0(I),rt.init(),qe=new tv(I,rt),ct=new u0(I,rt,e,qe),Ve=new J_(I),ct.reverseDepthBuffer&&Ve.buffers.depth.setReversed(!0),vt=new x0(I),Ge=new O_,w=new ev(I,rt,Ve,Ge,ct,qe,vt),x=new d0(M),G=new m0(M),Z=new wp(I),yt=new c0(I,Z),ee=new _0(I,Z,vt,yt),J=new M0(I,ee,Z,vt),Ze=new y0(I,ct,w),oe=new h0(Ge),be=new F_(M,x,G,rt,ct,yt,oe),he=new lv(M,Ge),de=new z_,lt=new X_(rt),He=new a0(M,x,G,Ve,J,d,c),De=new $_(M,J,ct),O=new uv(I,vt,ct,Ve),Me=new l0(I,rt,vt),ht=new v0(I,rt,vt),vt.programs=be.programs,M.capabilities=ct,M.extensions=rt,M.properties=Ge,M.renderLists=de,M.shadowMap=De,M.state=Ve,M.info=vt}Re();const K=new av(M,I);this.xr=K,this.getContext=function(){return I},this.getContextAttributes=function(){return I.getContextAttributes()},this.forceContextLoss=function(){const S=rt.get("WEBGL_lose_context");S&&S.loseContext()},this.forceContextRestore=function(){const S=rt.get("WEBGL_lose_context");S&&S.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(S){S!==void 0&&(te=S,this.setSize($,F,!1))},this.getSize=function(S){return S.set($,F)},this.setSize=function(S,B,X=!0){if(K.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=S,F=B,t.width=Math.floor(S*te),t.height=Math.floor(B*te),X===!0&&(t.style.width=S+"px",t.style.height=B+"px"),this.setViewport(0,0,S,B)},this.getDrawingBufferSize=function(S){return S.set($*te,F*te).floor()},this.setDrawingBufferSize=function(S,B,X){$=S,F=B,te=X,t.width=Math.floor(S*X),t.height=Math.floor(B*X),this.setViewport(0,0,S,B)},this.getCurrentViewport=function(S){return S.copy(_)},this.getViewport=function(S){return S.copy(le)},this.setViewport=function(S,B,X,q){S.isVector4?le.set(S.x,S.y,S.z,S.w):le.set(S,B,X,q),Ve.viewport(_.copy(le).multiplyScalar(te).round())},this.getScissor=function(S){return S.copy(we)},this.setScissor=function(S,B,X,q){S.isVector4?we.set(S.x,S.y,S.z,S.w):we.set(S,B,X,q),Ve.scissor(y.copy(we).multiplyScalar(te).round())},this.getScissorTest=function(){return Qe},this.setScissorTest=function(S){Ve.setScissorTest(Qe=S)},this.setOpaqueSort=function(S){z=S},this.setTransparentSort=function(S){ue=S},this.getClearColor=function(S){return S.copy(He.getClearColor())},this.setClearColor=function(){He.setClearColor.apply(He,arguments)},this.getClearAlpha=function(){return He.getClearAlpha()},this.setClearAlpha=function(){He.setClearAlpha.apply(He,arguments)},this.clear=function(S=!0,B=!0,X=!0){let q=0;if(S){let k=!1;if(A!==null){const se=A.texture.format;k=se===Hl||se===kl||se===zl}if(k){const se=A.texture.type,fe=se===si||se===xs||se===jr||se===ur||se===Fl||se===Ol,Le=He.getClearColor(),Ne=He.getClearAlpha(),We=Le.r,P=Le.g,W=Le.b;fe?(m[0]=We,m[1]=P,m[2]=W,m[3]=Ne,I.clearBufferuiv(I.COLOR,0,m)):(g[0]=We,g[1]=P,g[2]=W,g[3]=Ne,I.clearBufferiv(I.COLOR,0,g))}else q|=I.COLOR_BUFFER_BIT}B&&(q|=I.DEPTH_BUFFER_BIT,I.clearDepth(this.capabilities.reverseDepthBuffer?0:1)),X&&(q|=I.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),I.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",ne,!1),t.removeEventListener("webglcontextrestored",_e,!1),t.removeEventListener("webglcontextcreationerror",Ee,!1),de.dispose(),lt.dispose(),Ge.dispose(),x.dispose(),G.dispose(),J.dispose(),yt.dispose(),O.dispose(),be.dispose(),K.dispose(),K.removeEventListener("sessionstart",On),K.removeEventListener("sessionend",jn),Rn.stop()};function ne(S){S.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),b=!0}function _e(){console.log("THREE.WebGLRenderer: Context Restored."),b=!1;const S=vt.autoReset,B=De.enabled,X=De.autoUpdate,q=De.needsUpdate,k=De.type;Re(),vt.autoReset=S,De.enabled=B,De.autoUpdate=X,De.needsUpdate=q,De.type=k}function Ee(S){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",S.statusMessage)}function Ye(S){const B=S.target;B.removeEventListener("dispose",Ye),Ut(B)}function Ut(S){Vt(S),Ge.remove(S)}function Vt(S){const B=Ge.get(S).programs;B!==void 0&&(B.forEach(function(X){be.releaseProgram(X)}),S.isShaderMaterial&&be.releaseShaderCache(S))}this.renderBufferDirect=function(S,B,X,q,k,se){B===null&&(B=nt);const fe=k.isMesh&&k.matrixWorld.determinant()<0,Le=Bn(S,B,X,q,k);Ve.setMaterial(q,fe);let Ne=X.index,We=1;if(q.wireframe===!0){if(Ne=ee.getWireframeAttribute(X),Ne===void 0)return;We=2}const P=X.drawRange,W=X.attributes.position;let pe=P.start*We,Te=(P.start+P.count)*We;se!==null&&(pe=Math.max(pe,se.start*We),Te=Math.min(Te,(se.start+se.count)*We)),Ne!==null?(pe=Math.max(pe,0),Te=Math.min(Te,Ne.count)):W!=null&&(pe=Math.max(pe,0),Te=Math.min(Te,W.count));const me=Te-pe;if(me<0||me===1/0)return;yt.setup(k,q,Le,X,Ne);let ot,ve=Me;if(Ne!==null&&(ot=Z.get(Ne),ve=ht,ve.setIndex(ot)),k.isMesh)q.wireframe===!0?(Ve.setLineWidth(q.wireframeLinewidth*at()),ve.setMode(I.LINES)):ve.setMode(I.TRIANGLES);else if(k.isLine){let re=q.linewidth;re===void 0&&(re=1),Ve.setLineWidth(re*at()),k.isLineSegments?ve.setMode(I.LINES):k.isLineLoop?ve.setMode(I.LINE_LOOP):ve.setMode(I.LINE_STRIP)}else k.isPoints?ve.setMode(I.POINTS):k.isSprite&&ve.setMode(I.TRIANGLES);if(k.isBatchedMesh)if(k._multiDrawInstances!==null)ve.renderMultiDrawInstances(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount,k._multiDrawInstances);else if(rt.get("WEBGL_multi_draw"))ve.renderMultiDraw(k._multiDrawStarts,k._multiDrawCounts,k._multiDrawCount);else{const re=k._multiDrawStarts,ze=k._multiDrawCounts,xe=k._multiDrawCount,Ue=Ne?Z.get(Ne).bytesPerElement:1,tt=Ge.get(q).currentProgram.getUniforms();for(let je=0;je<xe;je++)tt.setValue(I,"_gl_DrawID",je),ve.render(re[je]/Ue,ze[je])}else if(k.isInstancedMesh)ve.renderInstances(pe,me,k.count);else if(X.isInstancedBufferGeometry){const re=X._maxInstanceCount!==void 0?X._maxInstanceCount:1/0,ze=Math.min(X.instanceCount,re);ve.renderInstances(pe,me,ze)}else ve.render(pe,me)};function dt(S,B,X){S.transparent===!0&&S.side===pn&&S.forceSinglePass===!1?(S.side=mn,S.needsUpdate=!0,xn(S,B,X),S.side=Ni,S.needsUpdate=!0,xn(S,B,X),S.side=pn):xn(S,B,X)}this.compile=function(S,B,X=null){X===null&&(X=S),p=lt.get(X),p.init(B),E.push(p),X.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),S!==X&&S.traverseVisible(function(k){k.isLight&&k.layers.test(B.layers)&&(p.pushLight(k),k.castShadow&&p.pushShadow(k))}),p.setupLights();const q=new Set;return S.traverse(function(k){if(!(k.isMesh||k.isPoints||k.isLine||k.isSprite))return;const se=k.material;if(se)if(Array.isArray(se))for(let fe=0;fe<se.length;fe++){const Le=se[fe];dt(Le,X,k),q.add(Le)}else dt(se,X,k),q.add(se)}),E.pop(),p=null,q},this.compileAsync=function(S,B,X=null){const q=this.compile(S,B,X);return new Promise(k=>{function se(){if(q.forEach(function(fe){Ge.get(fe).currentProgram.isReady()&&q.delete(fe)}),q.size===0){k(S);return}setTimeout(se,10)}rt.get("KHR_parallel_shader_compile")!==null?se():setTimeout(se,10)})};let Rt=null;function $t(S){Rt&&Rt(S)}function On(){Rn.stop()}function jn(){Rn.start()}const Rn=new yd;Rn.setAnimationLoop($t),typeof self<"u"&&Rn.setContext(self),this.setAnimationLoop=function(S){Rt=S,K.setAnimationLoop(S),S===null?Rn.stop():Rn.start()},K.addEventListener("sessionstart",On),K.addEventListener("sessionend",jn),this.render=function(S,B){if(B!==void 0&&B.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(b===!0)return;if(S.matrixWorldAutoUpdate===!0&&S.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),K.enabled===!0&&K.isPresenting===!0&&(K.cameraAutoUpdate===!0&&K.updateCamera(B),B=K.getCamera()),S.isScene===!0&&S.onBeforeRender(M,S,B,A),p=lt.get(S,E.length),p.init(B),E.push(p),ge.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),et.setFromProjectionMatrix(ge),ie=this.localClippingEnabled,Q=oe.init(this.clippingPlanes,ie),v=de.get(S,f.length),v.init(),f.push(v),K.enabled===!0&&K.isPresenting===!0){const se=M.xr.getDepthSensingMesh();se!==null&&gi(se,B,-1/0,M.sortObjects)}gi(S,B,0,M.sortObjects),v.finish(),M.sortObjects===!0&&v.sort(z,ue),_t=K.enabled===!1||K.isPresenting===!1||K.hasDepthSensing()===!1,_t&&He.addToRenderList(v,S),this.info.render.frame++,Q===!0&&oe.beginShadows();const X=p.state.shadowsArray;De.render(X,S,B),Q===!0&&oe.endShadows(),this.info.autoReset===!0&&this.info.reset();const q=v.opaque,k=v.transmissive;if(p.setupLights(),B.isArrayCamera){const se=B.cameras;if(k.length>0)for(let fe=0,Le=se.length;fe<Le;fe++){const Ne=se[fe];ri(q,k,S,Ne)}_t&&He.render(S);for(let fe=0,Le=se.length;fe<Le;fe++){const Ne=se[fe];Gt(v,S,Ne,Ne.viewport)}}else k.length>0&&ri(q,k,S,B),_t&&He.render(S),Gt(v,S,B);A!==null&&(w.updateMultisampleRenderTarget(A),w.updateRenderTargetMipmap(A)),S.isScene===!0&&S.onAfterRender(M,S,B),yt.resetDefaultState(),C=-1,Y=null,E.pop(),E.length>0?(p=E[E.length-1],Q===!0&&oe.setGlobalState(M.clippingPlanes,p.state.camera)):p=null,f.pop(),f.length>0?v=f[f.length-1]:v=null};function gi(S,B,X,q){if(S.visible===!1)return;if(S.layers.test(B.layers)){if(S.isGroup)X=S.renderOrder;else if(S.isLOD)S.autoUpdate===!0&&S.update(B);else if(S.isLight)p.pushLight(S),S.castShadow&&p.pushShadow(S);else if(S.isSprite){if(!S.frustumCulled||et.intersectsSprite(S)){q&&Be.setFromMatrixPosition(S.matrixWorld).applyMatrix4(ge);const fe=J.update(S),Le=S.material;Le.visible&&v.push(S,fe,Le,X,Be.z,null)}}else if((S.isMesh||S.isLine||S.isPoints)&&(!S.frustumCulled||et.intersectsObject(S))){const fe=J.update(S),Le=S.material;if(q&&(S.boundingSphere!==void 0?(S.boundingSphere===null&&S.computeBoundingSphere(),Be.copy(S.boundingSphere.center)):(fe.boundingSphere===null&&fe.computeBoundingSphere(),Be.copy(fe.boundingSphere.center)),Be.applyMatrix4(S.matrixWorld).applyMatrix4(ge)),Array.isArray(Le)){const Ne=fe.groups;for(let We=0,P=Ne.length;We<P;We++){const W=Ne[We],pe=Le[W.materialIndex];pe&&pe.visible&&v.push(S,fe,pe,X,Be.z,W)}}else Le.visible&&v.push(S,fe,Le,X,Be.z,null)}}const se=S.children;for(let fe=0,Le=se.length;fe<Le;fe++)gi(se[fe],B,X,q)}function Gt(S,B,X,q){const k=S.opaque,se=S.transmissive,fe=S.transparent;p.setupLightsView(X),Q===!0&&oe.setGlobalState(M.clippingPlanes,X),q&&Ve.viewport(_.copy(q)),k.length>0&&It(k,B,X),se.length>0&&It(se,B,X),fe.length>0&&It(fe,B,X),Ve.buffers.depth.setTest(!0),Ve.buffers.depth.setMask(!0),Ve.buffers.color.setMask(!0),Ve.setPolygonOffset(!1)}function ri(S,B,X,q){if((X.isScene===!0?X.overrideMaterial:null)!==null)return;p.state.transmissionRenderTarget[q.id]===void 0&&(p.state.transmissionRenderTarget[q.id]=new qn(1,1,{generateMipmaps:!0,type:rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float")?An:si,minFilter:di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:bt.workingColorSpace}));const se=p.state.transmissionRenderTarget[q.id],fe=q.viewport||_;se.setSize(fe.z,fe.w);const Le=M.getRenderTarget();M.setRenderTarget(se),M.getClearColor(U),D=M.getClearAlpha(),D<1&&M.setClearColor(16777215,.5),M.clear(),_t&&He.render(X);const Ne=M.toneMapping;M.toneMapping=Zi;const We=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),p.setupLightsView(q),Q===!0&&oe.setGlobalState(M.clippingPlanes,q),It(S,X,q),w.updateMultisampleRenderTarget(se),w.updateRenderTargetMipmap(se),rt.has("WEBGL_multisampled_render_to_texture")===!1){let P=!1;for(let W=0,pe=B.length;W<pe;W++){const Te=B[W],me=Te.object,ot=Te.geometry,ve=Te.material,re=Te.group;if(ve.side===pn&&me.layers.test(q.layers)){const ze=ve.side;ve.side=mn,ve.needsUpdate=!0,cn(me,X,q,ot,ve,re),ve.side=ze,ve.needsUpdate=!0,P=!0}}P===!0&&(w.updateMultisampleRenderTarget(se),w.updateRenderTargetMipmap(se))}M.setRenderTarget(Le),M.setClearColor(U,D),We!==void 0&&(q.viewport=We),M.toneMapping=Ne}function It(S,B,X){const q=B.isScene===!0?B.overrideMaterial:null;for(let k=0,se=S.length;k<se;k++){const fe=S[k],Le=fe.object,Ne=fe.geometry,We=q===null?fe.material:q,P=fe.group;Le.layers.test(X.layers)&&cn(Le,B,X,Ne,We,P)}}function cn(S,B,X,q,k,se){S.onBeforeRender(M,B,X,q,k,se),S.modelViewMatrix.multiplyMatrices(X.matrixWorldInverse,S.matrixWorld),S.normalMatrix.getNormalMatrix(S.modelViewMatrix),k.onBeforeRender(M,B,X,q,S,se),k.transparent===!0&&k.side===pn&&k.forceSinglePass===!1?(k.side=mn,k.needsUpdate=!0,M.renderBufferDirect(X,B,q,k,S,se),k.side=Ni,k.needsUpdate=!0,M.renderBufferDirect(X,B,q,k,S,se),k.side=pn):M.renderBufferDirect(X,B,q,k,S,se),S.onAfterRender(M,B,X,q,k,se)}function xn(S,B,X){B.isScene!==!0&&(B=nt);const q=Ge.get(S),k=p.state.lights,se=p.state.shadowsArray,fe=k.state.version,Le=be.getParameters(S,k.state,se,B,X),Ne=be.getProgramCacheKey(Le);let We=q.programs;q.environment=S.isMeshStandardMaterial?B.environment:null,q.fog=B.fog,q.envMap=(S.isMeshStandardMaterial?G:x).get(S.envMap||q.environment),q.envMapRotation=q.environment!==null&&S.envMap===null?B.environmentRotation:S.envMapRotation,We===void 0&&(S.addEventListener("dispose",Ye),We=new Map,q.programs=We);let P=We.get(Ne);if(P!==void 0){if(q.currentProgram===P&&q.lightsStateVersion===fe)return jt(S,Le),P}else Le.uniforms=be.getUniforms(S),S.onBeforeCompile(Le,M),P=be.acquireProgram(Le,Ne),We.set(Ne,P),q.uniforms=Le.uniforms;const W=q.uniforms;return(!S.isShaderMaterial&&!S.isRawShaderMaterial||S.clipping===!0)&&(W.clippingPlanes=oe.uniform),jt(S,Le),q.needsLights=Qi(S),q.lightsStateVersion=fe,q.needsLights&&(W.ambientLightColor.value=k.state.ambient,W.lightProbe.value=k.state.probe,W.directionalLights.value=k.state.directional,W.directionalLightShadows.value=k.state.directionalShadow,W.spotLights.value=k.state.spot,W.spotLightShadows.value=k.state.spotShadow,W.rectAreaLights.value=k.state.rectArea,W.ltc_1.value=k.state.rectAreaLTC1,W.ltc_2.value=k.state.rectAreaLTC2,W.pointLights.value=k.state.point,W.pointLightShadows.value=k.state.pointShadow,W.hemisphereLights.value=k.state.hemi,W.directionalShadowMap.value=k.state.directionalShadowMap,W.directionalShadowMatrix.value=k.state.directionalShadowMatrix,W.spotShadowMap.value=k.state.spotShadowMap,W.spotLightMatrix.value=k.state.spotLightMatrix,W.spotLightMap.value=k.state.spotLightMap,W.pointShadowMap.value=k.state.pointShadowMap,W.pointShadowMatrix.value=k.state.pointShadowMatrix),q.currentProgram=P,q.uniformsList=null,P}function Yt(S){if(S.uniformsList===null){const B=S.currentProgram.getUniforms();S.uniformsList=ca.seqWithValue(B.seq,S.uniforms)}return S.uniformsList}function jt(S,B){const X=Ge.get(S);X.outputColorSpace=B.outputColorSpace,X.batching=B.batching,X.batchingColor=B.batchingColor,X.instancing=B.instancing,X.instancingColor=B.instancingColor,X.instancingMorph=B.instancingMorph,X.skinning=B.skinning,X.morphTargets=B.morphTargets,X.morphNormals=B.morphNormals,X.morphColors=B.morphColors,X.morphTargetsCount=B.morphTargetsCount,X.numClippingPlanes=B.numClippingPlanes,X.numIntersection=B.numClipIntersection,X.vertexAlphas=B.vertexAlphas,X.vertexTangents=B.vertexTangents,X.toneMapping=B.toneMapping}function Bn(S,B,X,q,k){B.isScene!==!0&&(B=nt),w.resetTextureUnits();const se=B.fog,fe=q.isMeshStandardMaterial?B.environment:null,Le=A===null?M.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:tn,Ne=(q.isMeshStandardMaterial?G:x).get(q.envMap||fe),We=q.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,P=!!X.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),W=!!X.morphAttributes.position,pe=!!X.morphAttributes.normal,Te=!!X.morphAttributes.color;let me=Zi;q.toneMapped&&(A===null||A.isXRRenderTarget===!0)&&(me=M.toneMapping);const ot=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,ve=ot!==void 0?ot.length:0,re=Ge.get(q),ze=p.state.lights;if(Q===!0&&(ie===!0||S!==Y)){const Tt=S===Y&&q.id===C;oe.setState(q,S,Tt)}let xe=!1;q.version===re.__version?(re.needsLights&&re.lightsStateVersion!==ze.state.version||re.outputColorSpace!==Le||k.isBatchedMesh&&re.batching===!1||!k.isBatchedMesh&&re.batching===!0||k.isBatchedMesh&&re.batchingColor===!0&&k.colorTexture===null||k.isBatchedMesh&&re.batchingColor===!1&&k.colorTexture!==null||k.isInstancedMesh&&re.instancing===!1||!k.isInstancedMesh&&re.instancing===!0||k.isSkinnedMesh&&re.skinning===!1||!k.isSkinnedMesh&&re.skinning===!0||k.isInstancedMesh&&re.instancingColor===!0&&k.instanceColor===null||k.isInstancedMesh&&re.instancingColor===!1&&k.instanceColor!==null||k.isInstancedMesh&&re.instancingMorph===!0&&k.morphTexture===null||k.isInstancedMesh&&re.instancingMorph===!1&&k.morphTexture!==null||re.envMap!==Ne||q.fog===!0&&re.fog!==se||re.numClippingPlanes!==void 0&&(re.numClippingPlanes!==oe.numPlanes||re.numIntersection!==oe.numIntersection)||re.vertexAlphas!==We||re.vertexTangents!==P||re.morphTargets!==W||re.morphNormals!==pe||re.morphColors!==Te||re.toneMapping!==me||re.morphTargetsCount!==ve)&&(xe=!0):(xe=!0,re.__version=q.version);let Ue=re.currentProgram;xe===!0&&(Ue=xn(q,B,k));let tt=!1,je=!1,Dt=!1;const $e=Ue.getUniforms(),Ct=re.uniforms;if(Ve.useProgram(Ue.program)&&(tt=!0,je=!0,Dt=!0),q.id!==C&&(C=q.id,je=!0),tt||Y!==S){ct.reverseDepthBuffer?(Ae.copy(S.projectionMatrix),ep(Ae),tp(Ae),$e.setValue(I,"projectionMatrix",Ae)):$e.setValue(I,"projectionMatrix",S.projectionMatrix),$e.setValue(I,"viewMatrix",S.matrixWorldInverse);const Tt=$e.map.cameraPosition;Tt!==void 0&&Tt.setValue(I,ke.setFromMatrixPosition(S.matrixWorld)),ct.logarithmicDepthBuffer&&$e.setValue(I,"logDepthBufFC",2/(Math.log(S.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&$e.setValue(I,"isOrthographic",S.isOrthographicCamera===!0),Y!==S&&(Y=S,je=!0,Dt=!0)}if(k.isSkinnedMesh){$e.setOptional(I,k,"bindMatrix"),$e.setOptional(I,k,"bindMatrixInverse");const Tt=k.skeleton;Tt&&(Tt.boneTexture===null&&Tt.computeBoneTexture(),$e.setValue(I,"boneTexture",Tt.boneTexture,w))}k.isBatchedMesh&&($e.setOptional(I,k,"batchingTexture"),$e.setValue(I,"batchingTexture",k._matricesTexture,w),$e.setOptional(I,k,"batchingIdTexture"),$e.setValue(I,"batchingIdTexture",k._indirectTexture,w),$e.setOptional(I,k,"batchingColorTexture"),k._colorsTexture!==null&&$e.setValue(I,"batchingColorTexture",k._colorsTexture,w));const ln=X.morphAttributes;if((ln.position!==void 0||ln.normal!==void 0||ln.color!==void 0)&&Ze.update(k,X,Ue),(je||re.receiveShadow!==k.receiveShadow)&&(re.receiveShadow=k.receiveShadow,$e.setValue(I,"receiveShadow",k.receiveShadow)),q.isMeshGouraudMaterial&&q.envMap!==null&&(Ct.envMap.value=Ne,Ct.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),q.isMeshStandardMaterial&&q.envMap===null&&B.environment!==null&&(Ct.envMapIntensity.value=B.environmentIntensity),je&&($e.setValue(I,"toneMappingExposure",M.toneMappingExposure),re.needsLights&&_i(Ct,Dt),se&&q.fog===!0&&he.refreshFogUniforms(Ct,se),he.refreshMaterialUniforms(Ct,q,te,F,p.state.transmissionRenderTarget[S.id]),ca.upload(I,Yt(re),Ct,w)),q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(ca.upload(I,Yt(re),Ct,w),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&$e.setValue(I,"center",k.center),$e.setValue(I,"modelViewMatrix",k.modelViewMatrix),$e.setValue(I,"normalMatrix",k.normalMatrix),$e.setValue(I,"modelMatrix",k.matrixWorld),q.isShaderMaterial||q.isRawShaderMaterial){const Tt=q.uniformsGroups;for(let Mt=0,Sn=Tt.length;Mt<Sn;Mt++){const In=Tt[Mt];O.update(In,Ue),O.bind(In,Ue)}}return Ue}function _i(S,B){S.ambientLightColor.needsUpdate=B,S.lightProbe.needsUpdate=B,S.directionalLights.needsUpdate=B,S.directionalLightShadows.needsUpdate=B,S.pointLights.needsUpdate=B,S.pointLightShadows.needsUpdate=B,S.spotLights.needsUpdate=B,S.spotLightShadows.needsUpdate=B,S.rectAreaLights.needsUpdate=B,S.hemisphereLights.needsUpdate=B}function Qi(S){return S.isMeshLambertMaterial||S.isMeshToonMaterial||S.isMeshPhongMaterial||S.isMeshStandardMaterial||S.isShadowMaterial||S.isShaderMaterial&&S.lights===!0}this.getActiveCubeFace=function(){return N},this.getActiveMipmapLevel=function(){return R},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(S,B,X){Ge.get(S.texture).__webglTexture=B,Ge.get(S.depthTexture).__webglTexture=X;const q=Ge.get(S);q.__hasExternalTextures=!0,q.__autoAllocateDepthBuffer=X===void 0,q.__autoAllocateDepthBuffer||rt.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),q.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(S,B){const X=Ge.get(S);X.__webglFramebuffer=B,X.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(S,B=0,X=0){A=S,N=B,R=X;let q=!0,k=null,se=!1,fe=!1;if(S){const Ne=Ge.get(S);if(Ne.__useDefaultFramebuffer!==void 0)Ve.bindFramebuffer(I.FRAMEBUFFER,null),q=!1;else if(Ne.__webglFramebuffer===void 0)w.setupRenderTarget(S);else if(Ne.__hasExternalTextures)w.rebindTextures(S,Ge.get(S.texture).__webglTexture,Ge.get(S.depthTexture).__webglTexture);else if(S.depthBuffer){const W=S.depthTexture;if(Ne.__boundDepthTexture!==W){if(W!==null&&Ge.has(W)&&(S.width!==W.image.width||S.height!==W.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");w.setupDepthRenderbuffer(S)}}const We=S.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(fe=!0);const P=Ge.get(S).__webglFramebuffer;S.isWebGLCubeRenderTarget?(Array.isArray(P[B])?k=P[B][X]:k=P[B],se=!0):S.samples>0&&w.useMultisampledRTT(S)===!1?k=Ge.get(S).__webglMultisampledFramebuffer:Array.isArray(P)?k=P[X]:k=P,_.copy(S.viewport),y.copy(S.scissor),H=S.scissorTest}else _.copy(le).multiplyScalar(te).floor(),y.copy(we).multiplyScalar(te).floor(),H=Qe;if(Ve.bindFramebuffer(I.FRAMEBUFFER,k)&&q&&Ve.drawBuffers(S,k),Ve.viewport(_),Ve.scissor(y),Ve.setScissorTest(H),se){const Ne=Ge.get(S.texture);I.framebufferTexture2D(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,I.TEXTURE_CUBE_MAP_POSITIVE_X+B,Ne.__webglTexture,X)}else if(fe){const Ne=Ge.get(S.texture),We=B||0;I.framebufferTextureLayer(I.FRAMEBUFFER,I.COLOR_ATTACHMENT0,Ne.__webglTexture,X||0,We)}C=-1},this.readRenderTargetPixels=function(S,B,X,q,k,se,fe){if(!(S&&S.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Le=Ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(Le=Le[fe]),Le){Ve.bindFramebuffer(I.FRAMEBUFFER,Le);try{const Ne=S.texture,We=Ne.format,P=Ne.type;if(!ct.textureFormatReadable(We)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ct.textureTypeReadable(P)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=S.width-q&&X>=0&&X<=S.height-k&&I.readPixels(B,X,q,k,qe.convert(We),qe.convert(P),se)}finally{const Ne=A!==null?Ge.get(A).__webglFramebuffer:null;Ve.bindFramebuffer(I.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(S,B,X,q,k,se,fe){if(!(S&&S.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Le=Ge.get(S).__webglFramebuffer;if(S.isWebGLCubeRenderTarget&&fe!==void 0&&(Le=Le[fe]),Le){const Ne=S.texture,We=Ne.format,P=Ne.type;if(!ct.textureFormatReadable(We))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ct.textureTypeReadable(P))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(B>=0&&B<=S.width-q&&X>=0&&X<=S.height-k){Ve.bindFramebuffer(I.FRAMEBUFFER,Le);const W=I.createBuffer();I.bindBuffer(I.PIXEL_PACK_BUFFER,W),I.bufferData(I.PIXEL_PACK_BUFFER,se.byteLength,I.STREAM_READ),I.readPixels(B,X,q,k,qe.convert(We),qe.convert(P),0);const pe=A!==null?Ge.get(A).__webglFramebuffer:null;Ve.bindFramebuffer(I.FRAMEBUFFER,pe);const Te=I.fenceSync(I.SYNC_GPU_COMMANDS_COMPLETE,0);return I.flush(),await Qf(I,Te,4),I.bindBuffer(I.PIXEL_PACK_BUFFER,W),I.getBufferSubData(I.PIXEL_PACK_BUFFER,0,se),I.deleteBuffer(W),I.deleteSync(Te),se}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(S,B=null,X=0){S.isTexture!==!0&&(aa("WebGLRenderer: copyFramebufferToTexture function signature has changed."),B=arguments[0]||null,S=arguments[1]);const q=Math.pow(2,-X),k=Math.floor(S.image.width*q),se=Math.floor(S.image.height*q),fe=B!==null?B.x:0,Le=B!==null?B.y:0;w.setTexture2D(S,0),I.copyTexSubImage2D(I.TEXTURE_2D,X,0,0,fe,Le,k,se),Ve.unbindTexture()},this.copyTextureToTexture=function(S,B,X=null,q=null,k=0){S.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture function signature has changed."),q=arguments[0]||null,S=arguments[1],B=arguments[2],k=arguments[3]||0,X=null);let se,fe,Le,Ne,We,P;X!==null?(se=X.max.x-X.min.x,fe=X.max.y-X.min.y,Le=X.min.x,Ne=X.min.y):(se=S.image.width,fe=S.image.height,Le=0,Ne=0),q!==null?(We=q.x,P=q.y):(We=0,P=0);const W=qe.convert(B.format),pe=qe.convert(B.type);w.setTexture2D(B,0),I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const Te=I.getParameter(I.UNPACK_ROW_LENGTH),me=I.getParameter(I.UNPACK_IMAGE_HEIGHT),ot=I.getParameter(I.UNPACK_SKIP_PIXELS),ve=I.getParameter(I.UNPACK_SKIP_ROWS),re=I.getParameter(I.UNPACK_SKIP_IMAGES),ze=S.isCompressedTexture?S.mipmaps[k]:S.image;I.pixelStorei(I.UNPACK_ROW_LENGTH,ze.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,ze.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Le),I.pixelStorei(I.UNPACK_SKIP_ROWS,Ne),S.isDataTexture?I.texSubImage2D(I.TEXTURE_2D,k,We,P,se,fe,W,pe,ze.data):S.isCompressedTexture?I.compressedTexSubImage2D(I.TEXTURE_2D,k,We,P,ze.width,ze.height,W,ze.data):I.texSubImage2D(I.TEXTURE_2D,k,We,P,se,fe,W,pe,ze),I.pixelStorei(I.UNPACK_ROW_LENGTH,Te),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,me),I.pixelStorei(I.UNPACK_SKIP_PIXELS,ot),I.pixelStorei(I.UNPACK_SKIP_ROWS,ve),I.pixelStorei(I.UNPACK_SKIP_IMAGES,re),k===0&&B.generateMipmaps&&I.generateMipmap(I.TEXTURE_2D),Ve.unbindTexture()},this.copyTextureToTexture3D=function(S,B,X=null,q=null,k=0){S.isTexture!==!0&&(aa("WebGLRenderer: copyTextureToTexture3D function signature has changed."),X=arguments[0]||null,q=arguments[1]||null,S=arguments[2],B=arguments[3],k=arguments[4]||0);let se,fe,Le,Ne,We,P,W,pe,Te;const me=S.isCompressedTexture?S.mipmaps[k]:S.image;X!==null?(se=X.max.x-X.min.x,fe=X.max.y-X.min.y,Le=X.max.z-X.min.z,Ne=X.min.x,We=X.min.y,P=X.min.z):(se=me.width,fe=me.height,Le=me.depth,Ne=0,We=0,P=0),q!==null?(W=q.x,pe=q.y,Te=q.z):(W=0,pe=0,Te=0);const ot=qe.convert(B.format),ve=qe.convert(B.type);let re;if(B.isData3DTexture)w.setTexture3D(B,0),re=I.TEXTURE_3D;else if(B.isDataArrayTexture||B.isCompressedArrayTexture)w.setTexture2DArray(B,0),re=I.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}I.pixelStorei(I.UNPACK_FLIP_Y_WEBGL,B.flipY),I.pixelStorei(I.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),I.pixelStorei(I.UNPACK_ALIGNMENT,B.unpackAlignment);const ze=I.getParameter(I.UNPACK_ROW_LENGTH),xe=I.getParameter(I.UNPACK_IMAGE_HEIGHT),Ue=I.getParameter(I.UNPACK_SKIP_PIXELS),tt=I.getParameter(I.UNPACK_SKIP_ROWS),je=I.getParameter(I.UNPACK_SKIP_IMAGES);I.pixelStorei(I.UNPACK_ROW_LENGTH,me.width),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,me.height),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ne),I.pixelStorei(I.UNPACK_SKIP_ROWS,We),I.pixelStorei(I.UNPACK_SKIP_IMAGES,P),S.isDataTexture||S.isData3DTexture?I.texSubImage3D(re,k,W,pe,Te,se,fe,Le,ot,ve,me.data):B.isCompressedArrayTexture?I.compressedTexSubImage3D(re,k,W,pe,Te,se,fe,Le,ot,me.data):I.texSubImage3D(re,k,W,pe,Te,se,fe,Le,ot,ve,me),I.pixelStorei(I.UNPACK_ROW_LENGTH,ze),I.pixelStorei(I.UNPACK_IMAGE_HEIGHT,xe),I.pixelStorei(I.UNPACK_SKIP_PIXELS,Ue),I.pixelStorei(I.UNPACK_SKIP_ROWS,tt),I.pixelStorei(I.UNPACK_SKIP_IMAGES,je),k===0&&B.generateMipmaps&&I.generateMipmap(re),Ve.unbindTexture()},this.initRenderTarget=function(S){Ge.get(S).__webglFramebuffer===void 0&&w.setupRenderTarget(S)},this.initTexture=function(S){S.isCubeTexture?w.setTextureCube(S,0):S.isData3DTexture?w.setTexture3D(S,0):S.isDataArrayTexture||S.isCompressedArrayTexture?w.setTexture2DArray(S,0):w.setTexture2D(S,0),Ve.unbindTexture()},this.resetState=function(){N=0,R=0,A=null,Ve.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Di}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Vl?"display-p3":"srgb",t.unpackColorSpace=bt.workingColorSpace===Ea?"display-p3":"srgb"}}class Ra{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new Pe(e),this.near=t,this.far=n}clone(){return new Ra(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class rr extends kt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new fi,this.environmentIntensity=1,this.environmentRotation=new fi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class ql{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Ml,this.updateRanges=[],this.version=0,this.uuid=ni()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let i=0,r=this.stride;i<r;i++)this.array[e+i]=t.array[n+i];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ni()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const En=new L;class ys{constructor(e,t,n,i=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=i}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=ti(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Pt(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Pt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ti(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ti(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ti(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ti(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,i){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this}setXYZW(e,t,n,i,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Pt(t,this.array),n=Pt(n,this.array),i=Pt(i,this.array),r=Pt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=i,this.data.array[e+3]=r,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return new gn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new ys(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const i=n*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)t.push(this.data.array[i+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class wd extends ii{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let qs;const Dr=new L,Ys=new L,js=new L,Ks=new Oe,Ur=new Oe,Ad=new st,Wo=new L,Nr=new L,Xo=new L,sh=new Oe,Mc=new Oe,rh=new Oe;class dv extends kt{constructor(e=new wd){if(super(),this.isSprite=!0,this.type="Sprite",qs===void 0){qs=new Ht;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new ql(t,5);qs.setIndex([0,1,2,0,2,3]),qs.setAttribute("position",new ys(n,3,0,!1)),qs.setAttribute("uv",new ys(n,2,3,!1))}this.geometry=qs,this.material=e,this.center=new Oe(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Ys.setFromMatrixScale(this.matrixWorld),Ad.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),js.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Ys.multiplyScalar(-js.z);const n=this.material.rotation;let i,r;n!==0&&(r=Math.cos(n),i=Math.sin(n));const o=this.center;qo(Wo.set(-.5,-.5,0),js,o,Ys,i,r),qo(Nr.set(.5,-.5,0),js,o,Ys,i,r),qo(Xo.set(.5,.5,0),js,o,Ys,i,r),sh.set(0,0),Mc.set(1,0),rh.set(1,1);let a=e.ray.intersectTriangle(Wo,Nr,Xo,!1,Dr);if(a===null&&(qo(Nr.set(-.5,.5,0),js,o,Ys,i,r),Mc.set(0,1),a=e.ray.intersectTriangle(Wo,Xo,Nr,!1,Dr),a===null))return;const c=e.ray.origin.distanceTo(Dr);c<e.near||c>e.far||t.push({distance:c,point:Dr.clone(),uv:Wn.getInterpolation(Dr,Wo,Nr,Xo,sh,Mc,rh,new Oe),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function qo(s,e,t,n,i,r){Ks.subVectors(s,t).addScalar(.5).multiply(n),i!==void 0?(Ur.x=r*Ks.x-i*Ks.y,Ur.y=i*Ks.x+r*Ks.y):Ur.copy(Ks),s.copy(e),s.x+=Ur.x,s.y+=Ur.y,s.applyMatrix4(Ad)}const oh=new L,ah=new wt,ch=new wt,fv=new L,lh=new st,Yo=new L,Sc=new pi,uh=new st,bc=new Ta;class pv extends ce{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=hu,this.bindMatrix=new st,this.bindMatrixInverse=new st,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new Fn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yo),this.boundingBox.expandByPoint(Yo)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new pi),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Yo),this.boundingSphere.expandByPoint(Yo)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,i=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Sc.copy(this.boundingSphere),Sc.applyMatrix4(i),e.ray.intersectsSphere(Sc)!==!1&&(uh.copy(i).invert(),bc.copy(e.ray).applyMatrix4(uh),!(this.boundingBox!==null&&bc.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,bc)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new wt,t=this.geometry.attributes.skinWeight;for(let n=0,i=t.count;n<i;n++){e.fromBufferAttribute(t,n);const r=1/e.manhattanLength();r!==1/0?e.multiplyScalar(r):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===hu?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===bf?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,i=this.geometry;ah.fromBufferAttribute(i.attributes.skinIndex,e),ch.fromBufferAttribute(i.attributes.skinWeight,e),oh.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let r=0;r<4;r++){const o=ch.getComponent(r);if(o!==0){const a=ah.getComponent(r);lh.multiplyMatrices(n.bones[a].matrixWorld,n.boneInverses[a]),t.addScaledVector(fv.copy(oh).applyMatrix4(lh),o)}}return t.applyMatrix4(this.bindMatrixInverse)}}class Rd extends kt{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ca extends en{constructor(e=null,t=1,n=1,i,r,o,a,c,l=vn,u=vn,h,d){super(null,o,a,c,l,u,i,r,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const hh=new st,mv=new st;class Yl{constructor(e=[],t=[]){this.uuid=ni(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,i=this.bones.length;n<i;n++)this.boneInverses.push(new st)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new st;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,i=this.boneTexture;for(let r=0,o=e.length;r<o;r++){const a=e[r]?e[r].matrixWorld:mv;hh.multiplyMatrices(a,t[r]),hh.toArray(n,r*16)}i!==null&&(i.needsUpdate=!0)}clone(){return new Yl(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ca(t,e,e,Xn,Ln);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const i=this.bones[t];if(i.name===e)return i}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,i=e.bones.length;n<i;n++){const r=e.bones[n];let o=t[r];o===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",r),o=new Rd),this.bones.push(o),this.boneInverses.push(new st().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let i=0,r=t.length;i<r;i++){const o=t[i];e.bones.push(o.uuid);const a=n[i];e.boneInverses.push(a.toArray())}return e}}class El extends gn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const $s=new st,dh=new st,jo=[],fh=new Fn,gv=new st,Fr=new ce,Or=new pi;class Qs extends ce{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new El(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,gv)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new Fn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),fh.copy(e.boundingBox).applyMatrix4($s),this.boundingBox.union(fh)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new pi),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,$s),Or.copy(e.boundingSphere).applyMatrix4($s),this.boundingSphere.union(Or)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,r=n.length+1,o=e*r+1;for(let a=0;a<n.length;a++)n[a]=i[o+a]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(Fr.geometry=this.geometry,Fr.material=this.material,Fr.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Or.copy(this.boundingSphere),Or.applyMatrix4(n),e.ray.intersectsSphere(Or)!==!1))for(let r=0;r<i;r++){this.getMatrixAt(r,$s),dh.multiplyMatrices(n,$s),Fr.matrixWorld=dh,Fr.raycast(e,jo);for(let o=0,a=jo.length;o<a;o++){const c=jo[o];c.instanceId=r,c.object=this,t.push(c)}jo.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new El(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ca(new Float32Array(i*this.count),i,this.count,Bl,Ln));const r=this.morphTexture.source.data.data;let o=0;for(let l=0;l<n.length;l++)o+=n[l];const a=this.geometry.morphTargetsRelative?1:1-o,c=i*e;r[c]=a,r.set(n,c+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}class _a extends ii{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Pe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const va=new L,xa=new L,ph=new st,Br=new Ta,Ko=new pi,Ec=new L,mh=new L;class Pa extends kt{constructor(e=new Ht,t=new _a){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,r=t.count;i<r;i++)va.fromBufferAttribute(t,i-1),xa.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=va.distanceTo(xa);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Line.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ko.copy(n.boundingSphere),Ko.applyMatrix4(i),Ko.radius+=r,e.ray.intersectsSphere(Ko)===!1)return;ph.copy(i).invert(),Br.copy(e.ray).applyMatrix4(ph);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const m=Math.max(0,o.start),g=Math.min(u.count,o.start+o.count);for(let v=m,p=g-1;v<p;v+=l){const f=u.getX(v),E=u.getX(v+1),M=$o(this,e,Br,c,f,E);M&&t.push(M)}if(this.isLineLoop){const v=u.getX(g-1),p=u.getX(m),f=$o(this,e,Br,c,v,p);f&&t.push(f)}}else{const m=Math.max(0,o.start),g=Math.min(d.count,o.start+o.count);for(let v=m,p=g-1;v<p;v+=l){const f=$o(this,e,Br,c,v,v+1);f&&t.push(f)}if(this.isLineLoop){const v=$o(this,e,Br,c,g-1,m);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function $o(s,e,t,n,i,r){const o=s.geometry.attributes.position;if(va.fromBufferAttribute(o,i),xa.fromBufferAttribute(o,r),t.distanceSqToSegment(va,xa,Ec,mh)>n)return;Ec.applyMatrix4(s.matrixWorld);const c=e.ray.origin.distanceTo(Ec);if(!(c<e.near||c>e.far))return{distance:c,point:mh.clone().applyMatrix4(s.matrixWorld),index:i,face:null,faceIndex:null,barycoord:null,object:s}}const gh=new L,_h=new L;class Cd extends Pa{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let i=0,r=t.count;i<r;i+=2)gh.fromBufferAttribute(t,i),_h.fromBufferAttribute(t,i+1),n[i]=i===0?0:n[i-1],n[i+1]=n[i]+gh.distanceTo(_h);e.setAttribute("lineDistance",new At(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class _v extends Pa{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class La extends ii{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Pe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vh=new st,Tl=new Ta,Zo=new pi,Jo=new L;class ya extends kt{constructor(e=new Ht,t=new La){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,i=this.matrixWorld,r=e.params.Points.threshold,o=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Zo.copy(n.boundingSphere),Zo.applyMatrix4(i),Zo.radius+=r,e.ray.intersectsSphere(Zo)===!1)return;vh.copy(i).invert(),Tl.copy(e.ray).applyMatrix4(vh);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),c=a*a,l=n.index,h=n.attributes.position;if(l!==null){const d=Math.max(0,o.start),m=Math.min(l.count,o.start+o.count);for(let g=d,v=m;g<v;g++){const p=l.getX(g);Jo.fromBufferAttribute(h,p),xh(Jo,p,c,i,e,t,this)}}else{const d=Math.max(0,o.start),m=Math.min(h.count,o.start+o.count);for(let g=d,v=m;g<v;g++)Jo.fromBufferAttribute(h,g),xh(Jo,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=i.length;r<o;r++){const a=i[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function xh(s,e,t,n,i,r,o){const a=Tl.distanceSqToPoint(s);if(a<t){const c=new L;Tl.closestPointToPoint(s,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;r.push({distance:l,distanceToRay:Math.sqrt(a),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class yh extends en{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=vn,this.minFilter=vn,this.generateMipmaps=!1,this.needsUpdate=!0}}class la extends en{constructor(e,t,n,i,r,o,a,c,l){super(e,t,n,i,r,o,a,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qr extends Ht{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const r=[],o=[],a=[],c=[],l=new L,u=new Oe;o.push(0,0,0),a.push(0,0,1),c.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const m=n+h/t*i;l.x=e*Math.cos(m),l.y=e*Math.sin(m),o.push(l.x,l.y,l.z),a.push(0,0,1),u.x=(o[d]/e+1)/2,u.y=(o[d+1]/e+1)/2,c.push(u.x,u.y)}for(let h=1;h<=t;h++)r.push(h,h+1,0);this.setIndex(r),this.setAttribute("position",new At(o,3)),this.setAttribute("normal",new At(a,3)),this.setAttribute("uv",new At(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Qr(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ei extends Ht{constructor(e=1,t=1,n=1,i=32,r=1,o=!1,a=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:r,openEnded:o,thetaStart:a,thetaLength:c};const l=this;i=Math.floor(i),r=Math.floor(r);const u=[],h=[],d=[],m=[];let g=0;const v=[],p=n/2;let f=0;E(),o===!1&&(e>0&&M(!0),t>0&&M(!1)),this.setIndex(u),this.setAttribute("position",new At(h,3)),this.setAttribute("normal",new At(d,3)),this.setAttribute("uv",new At(m,2));function E(){const b=new L,N=new L;let R=0;const A=(t-e)/n;for(let C=0;C<=r;C++){const Y=[],_=C/r,y=_*(t-e)+e;for(let H=0;H<=i;H++){const U=H/i,D=U*c+a,$=Math.sin(D),F=Math.cos(D);N.x=y*$,N.y=-_*n+p,N.z=y*F,h.push(N.x,N.y,N.z),b.set($,A,F).normalize(),d.push(b.x,b.y,b.z),m.push(U,1-_),Y.push(g++)}v.push(Y)}for(let C=0;C<i;C++)for(let Y=0;Y<r;Y++){const _=v[Y][C],y=v[Y+1][C],H=v[Y+1][C+1],U=v[Y][C+1];e>0&&(u.push(_,y,U),R+=3),t>0&&(u.push(y,H,U),R+=3)}l.addGroup(f,R,0),f+=R}function M(b){const N=g,R=new Oe,A=new L;let C=0;const Y=b===!0?e:t,_=b===!0?1:-1;for(let H=1;H<=i;H++)h.push(0,p*_,0),d.push(0,_,0),m.push(.5,.5),g++;const y=g;for(let H=0;H<=i;H++){const D=H/i*c+a,$=Math.cos(D),F=Math.sin(D);A.x=Y*F,A.y=p*_,A.z=Y*$,h.push(A.x,A.y,A.z),d.push(0,_,0),R.x=$*.5+.5,R.y=F*.5*_+.5,m.push(R.x,R.y),g++}for(let H=0;H<i;H++){const U=N+H,D=y+H;b===!0?u.push(D,D+1,U):u.push(D+1,D,U),C+=3}l.addGroup(f,C,b===!0?1:2),f+=C}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ei(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Ia extends Ht{constructor(e=.5,t=1,n=32,i=1,r=0,o=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:i,thetaStart:r,thetaLength:o},n=Math.max(3,n),i=Math.max(1,i);const a=[],c=[],l=[],u=[];let h=e;const d=(t-e)/i,m=new L,g=new Oe;for(let v=0;v<=i;v++){for(let p=0;p<=n;p++){const f=r+p/n*o;m.x=h*Math.cos(f),m.y=h*Math.sin(f),c.push(m.x,m.y,m.z),l.push(0,0,1),g.x=(m.x/t+1)/2,g.y=(m.y/t+1)/2,u.push(g.x,g.y)}h+=d}for(let v=0;v<i;v++){const p=v*(n+1);for(let f=0;f<n;f++){const E=f+p,M=E,b=E+n+1,N=E+n+2,R=E+1;a.push(M,b,R),a.push(b,N,R)}}this.setIndex(a),this.setAttribute("position",new At(c,3)),this.setAttribute("normal",new At(l,3)),this.setAttribute("uv",new At(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ia(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Ki extends Ht{constructor(e=1,t=32,n=16,i=0,r=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:r,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(o+a,Math.PI);let l=0;const u=[],h=new L,d=new L,m=[],g=[],v=[],p=[];for(let f=0;f<=n;f++){const E=[],M=f/n;let b=0;f===0&&o===0?b=.5/t:f===n&&c===Math.PI&&(b=-.5/t);for(let N=0;N<=t;N++){const R=N/t;h.x=-e*Math.cos(i+R*r)*Math.sin(o+M*a),h.y=e*Math.cos(o+M*a),h.z=e*Math.sin(i+R*r)*Math.sin(o+M*a),g.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),p.push(R+b,1-M),E.push(l++)}u.push(E)}for(let f=0;f<n;f++)for(let E=0;E<t;E++){const M=u[f][E+1],b=u[f][E],N=u[f+1][E],R=u[f+1][E+1];(f!==0||o>0)&&m.push(M,b,R),(f!==n-1||c<Math.PI)&&m.push(b,N,R)}this.setIndex(m),this.setAttribute("position",new At(g,3)),this.setAttribute("normal",new At(v,3)),this.setAttribute("uv",new At(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ki(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class jl extends Ht{constructor(e=1,t=.4,n=12,i=48,r=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:i,arc:r},n=Math.floor(n),i=Math.floor(i);const o=[],a=[],c=[],l=[],u=new L,h=new L,d=new L;for(let m=0;m<=n;m++)for(let g=0;g<=i;g++){const v=g/i*r,p=m/n*Math.PI*2;h.x=(e+t*Math.cos(p))*Math.cos(v),h.y=(e+t*Math.cos(p))*Math.sin(v),h.z=t*Math.sin(p),a.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),c.push(d.x,d.y,d.z),l.push(g/i),l.push(m/n)}for(let m=1;m<=n;m++)for(let g=1;g<=i;g++){const v=(i+1)*m+g-1,p=(i+1)*(m-1)+g-1,f=(i+1)*(m-1)+g,E=(i+1)*m+g;o.push(v,p,E),o.push(p,f,E)}this.setIndex(o),this.setAttribute("position",new At(a,3)),this.setAttribute("normal",new At(c,3)),this.setAttribute("uv",new At(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new jl(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ua extends Xt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class ut extends ii{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Pe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rd,this.normalScale=new Oe(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new fi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Yn extends ut{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new Oe(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return _n(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new Pe(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new Pe(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new Pe(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}function Qo(s,e,t){return!s||!t&&s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function vv(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function xv(s){function e(i,r){return s[i]-s[r]}const t=s.length,n=new Array(t);for(let i=0;i!==t;++i)n[i]=i;return n.sort(e),n}function Mh(s,e,t){const n=s.length,i=new s.constructor(n);for(let r=0,o=0;o!==n;++r){const a=t[r]*e;for(let c=0;c!==e;++c)i[o++]=s[a+c]}return i}function Pd(s,e,t,n){let i=1,r=s[0];for(;r!==void 0&&r[n]===void 0;)r=s[i++];if(r===void 0)return;let o=r[n];if(o!==void 0)if(Array.isArray(o))do o=r[n],o!==void 0&&(e.push(r.time),t.push.apply(t,o)),r=s[i++];while(r!==void 0);else if(o.toArray!==void 0)do o=r[n],o!==void 0&&(e.push(r.time),o.toArray(t,t.length)),r=s[i++];while(r!==void 0);else do o=r[n],o!==void 0&&(e.push(r.time),t.push(o)),r=s[i++];while(r!==void 0)}class io{constructor(e,t,n,i){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=i!==void 0?i:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,i=t[n],r=t[n-1];n:{e:{let o;t:{i:if(!(e<i)){for(let a=n+2;;){if(i===void 0){if(e<r)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===a)break;if(r=i,i=t[++n],e<i)break e}o=t.length;break t}if(!(e>=r)){const a=t[1];e<a&&(n=2,r=a);for(let c=n-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===c)break;if(i=r,r=t[--n-1],e>=r)break e}o=n,n=0;break t}break n}for(;n<o;){const a=n+o>>>1;e<t[a]?o=a:n=a+1}if(i=t[n],r=t[n-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,r,i)}return this.interpolate_(n,r,e,i)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i;for(let o=0;o!==i;++o)t[o]=n[r+o];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class yv extends io{constructor(e,t,n,i){super(e,t,n,i),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:du,endingEnd:du}}intervalChanged_(e,t,n){const i=this.parameterPositions;let r=e-2,o=e+1,a=i[r],c=i[o];if(a===void 0)switch(this.getSettings_().endingStart){case fu:r=e,a=2*t-n;break;case pu:r=i.length-2,a=t+i[r]-i[r+1];break;default:r=e,a=n}if(c===void 0)switch(this.getSettings_().endingEnd){case fu:o=e,c=2*n-t;break;case pu:o=1,c=n+i[1]-i[0];break;default:o=e-1,c=t}const l=(n-t)*.5,u=this.valueSize;this._weightPrev=l/(t-a),this._weightNext=l/(c-n),this._offsetPrev=r*u,this._offsetNext=o*u}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,m=this._weightNext,g=(n-t)/(i-t),v=g*g,p=v*g,f=-d*p+2*d*v-d*g,E=(1+d)*p+(-1.5-2*d)*v+(-.5+d)*g+1,M=(-1-m)*p+(1.5+m)*v+.5*g,b=m*p-m*v;for(let N=0;N!==a;++N)r[N]=f*o[u+N]+E*o[l+N]+M*o[c+N]+b*o[h+N];return r}}class Mv extends io{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=e*a,l=c-a,u=(n-t)/(i-t),h=1-u;for(let d=0;d!==a;++d)r[d]=o[l+d]*h+o[c+d]*u;return r}}class Sv extends io{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e){return this.copySampleValue_(e-1)}}class mi{constructor(e,t,n,i){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Qo(t,this.TimeBufferType),this.values=Qo(n,this.ValueBufferType),this.setInterpolation(i||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Qo(e.times,Array),values:Qo(e.values,Array)};const i=e.getInterpolation();i!==e.DefaultInterpolation&&(n.interpolation=i)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Sv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new Mv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new yv(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case Kr:t=this.InterpolantFactoryMethodDiscrete;break;case $r:t=this.InterpolantFactoryMethodLinear;break;case qa:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return Kr;case this.InterpolantFactoryMethodLinear:return $r;case this.InterpolantFactoryMethodSmooth:return qa}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,i=t.length;n!==i;++n)t[n]*=e}return this}trim(e,t){const n=this.times,i=n.length;let r=0,o=i-1;for(;r!==i&&n[r]<e;)++r;for(;o!==-1&&n[o]>t;)--o;if(++o,r!==0||o!==i){r>=o&&(o=Math.max(o,1),r=o-1);const a=this.getValueSize();this.times=n.slice(r,o),this.values=this.values.slice(r*a,o*a)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,i=this.values,r=n.length;r===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let o=null;for(let a=0;a!==r;a++){const c=n[a];if(typeof c=="number"&&isNaN(c)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,a,c),e=!1;break}if(o!==null&&o>c){console.error("THREE.KeyframeTrack: Out of order keys.",this,a,c,o),e=!1;break}o=c}if(i!==void 0&&vv(i))for(let a=0,c=i.length;a!==c;++a){const l=i[a];if(isNaN(l)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,a,l),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),i=this.getInterpolation()===qa,r=e.length-1;let o=1;for(let a=1;a<r;++a){let c=!1;const l=e[a],u=e[a+1];if(l!==u&&(a!==1||l!==e[0]))if(i)c=!0;else{const h=a*n,d=h-n,m=h+n;for(let g=0;g!==n;++g){const v=t[h+g];if(v!==t[d+g]||v!==t[m+g]){c=!0;break}}}if(c){if(a!==o){e[o]=e[a];const h=a*n,d=o*n;for(let m=0;m!==n;++m)t[d+m]=t[h+m]}++o}}if(r>0){e[o]=e[r];for(let a=r*n,c=o*n,l=0;l!==n;++l)t[c+l]=t[a+l];++o}return o!==e.length?(this.times=e.slice(0,o),this.values=t.slice(0,o*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,i=new n(this.name,e,t);return i.createInterpolant=this.createInterpolant,i}}mi.prototype.TimeBufferType=Float32Array;mi.prototype.ValueBufferType=Float32Array;mi.prototype.DefaultInterpolation=$r;class yr extends mi{constructor(e,t,n){super(e,t,n)}}yr.prototype.ValueTypeName="bool";yr.prototype.ValueBufferType=Array;yr.prototype.DefaultInterpolation=Kr;yr.prototype.InterpolantFactoryMethodLinear=void 0;yr.prototype.InterpolantFactoryMethodSmooth=void 0;class Ld extends mi{}Ld.prototype.ValueTypeName="color";class pr extends mi{}pr.prototype.ValueTypeName="number";class bv extends io{constructor(e,t,n,i){super(e,t,n,i)}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=(n-t)/(i-t);let l=e*a;for(let u=l+a;l!==u;l+=4)Fi.slerpFlat(r,0,o,l-a,o,l,c);return r}}class mr extends mi{InterpolantFactoryMethodLinear(e){return new bv(this.times,this.values,this.getValueSize(),e)}}mr.prototype.ValueTypeName="quaternion";mr.prototype.InterpolantFactoryMethodSmooth=void 0;class Mr extends mi{constructor(e,t,n){super(e,t,n)}}Mr.prototype.ValueTypeName="string";Mr.prototype.ValueBufferType=Array;Mr.prototype.DefaultInterpolation=Kr;Mr.prototype.InterpolantFactoryMethodLinear=void 0;Mr.prototype.InterpolantFactoryMethodSmooth=void 0;class gr extends mi{}gr.prototype.ValueTypeName="vector";class Ev{constructor(e="",t=-1,n=[],i=Ef){this.name=e,this.tracks=n,this.duration=t,this.blendMode=i,this.uuid=ni(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,i=1/(e.fps||1);for(let o=0,a=n.length;o!==a;++o)t.push(wv(n[o]).scale(i));const r=new this(e.name,e.duration,t,e.blendMode);return r.uuid=e.uuid,r}static toJSON(e){const t=[],n=e.tracks,i={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let r=0,o=n.length;r!==o;++r)t.push(mi.toJSON(n[r]));return i}static CreateFromMorphTargetSequence(e,t,n,i){const r=t.length,o=[];for(let a=0;a<r;a++){let c=[],l=[];c.push((a+r-1)%r,a,(a+1)%r),l.push(0,1,0);const u=xv(c);c=Mh(c,1,u),l=Mh(l,1,u),!i&&c[0]===0&&(c.push(r),l.push(l[0])),o.push(new pr(".morphTargetInfluences["+t[a].name+"]",c,l).scale(1/n))}return new this(e,-1,o)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const i=e;n=i.geometry&&i.geometry.animations||i.animations}for(let i=0;i<n.length;i++)if(n[i].name===t)return n[i];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const i={},r=/^([\w-]*?)([\d]+)$/;for(let a=0,c=e.length;a<c;a++){const l=e[a],u=l.name.match(r);if(u&&u.length>1){const h=u[1];let d=i[h];d||(i[h]=d=[]),d.push(l)}}const o=[];for(const a in i)o.push(this.CreateFromMorphTargetSequence(a,i[a],t,n));return o}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,m,g,v){if(m.length!==0){const p=[],f=[];Pd(m,p,f,g),p.length!==0&&v.push(new h(d,p,f))}},i=[],r=e.name||"default",o=e.fps||30,a=e.blendMode;let c=e.length||-1;const l=e.hierarchy||[];for(let h=0;h<l.length;h++){const d=l[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const m={};let g;for(g=0;g<d.length;g++)if(d[g].morphTargets)for(let v=0;v<d[g].morphTargets.length;v++)m[d[g].morphTargets[v]]=-1;for(const v in m){const p=[],f=[];for(let E=0;E!==d[g].morphTargets.length;++E){const M=d[g];p.push(M.time),f.push(M.morphTarget===v?1:0)}i.push(new pr(".morphTargetInfluence["+v+"]",p,f))}c=m.length*o}else{const m=".bones["+t[h].name+"]";n(gr,m+".position",d,"pos",i),n(mr,m+".quaternion",d,"rot",i),n(gr,m+".scale",d,"scl",i)}}return i.length===0?null:new this(r,c,i,a)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,i=e.length;n!==i;++n){const r=this.tracks[n];t=Math.max(t,r.times[r.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function Tv(s){switch(s.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return pr;case"vector":case"vector2":case"vector3":case"vector4":return gr;case"color":return Ld;case"quaternion":return mr;case"bool":case"boolean":return yr;case"string":return Mr}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+s)}function wv(s){if(s.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=Tv(s.type);if(s.times===void 0){const t=[],n=[];Pd(s.keys,t,n,"value"),s.times=t,s.values=n}return e.parse!==void 0?e.parse(s):new e(s.name,s.times,s.values,s.interpolation)}const $i={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(this.files[s]=e)},get:function(s){if(this.enabled!==!1)return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};class Av{constructor(e,t,n){const i=this;let r=!1,o=0,a=0,c;const l=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){a++,r===!1&&i.onStart!==void 0&&i.onStart(u,o,a),r=!0},this.itemEnd=function(u){o++,i.onProgress!==void 0&&i.onProgress(u,o,a),o===a&&(r=!1,i.onLoad!==void 0&&i.onLoad())},this.itemError=function(u){i.onError!==void 0&&i.onError(u)},this.resolveURL=function(u){return c?c(u):u},this.setURLModifier=function(u){return c=u,this},this.addHandler=function(u,h){return l.push(u,h),this},this.removeHandler=function(u){const h=l.indexOf(u);return h!==-1&&l.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=l.length;h<d;h+=2){const m=l[h],g=l[h+1];if(m.global&&(m.lastIndex=0),m.test(u))return g}return null}}}const Rv=new Av;class Ji{constructor(e){this.manager=e!==void 0?e:Rv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(i,r){n.load(e,i,t,r)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}Ji.DEFAULT_MATERIAL_NAME="__DEFAULT";const Ci={};class Cv extends Error{constructor(e,t){super(e),this.response=t}}class eo extends Ji{constructor(e){super(e)}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=$i.get(e);if(r!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(r),this.manager.itemEnd(e)},0),r;if(Ci[e]!==void 0){Ci[e].push({onLoad:t,onProgress:n,onError:i});return}Ci[e]=[],Ci[e].push({onLoad:t,onProgress:n,onError:i});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,c=this.responseType;fetch(o).then(l=>{if(l.status===200||l.status===0){if(l.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||l.body===void 0||l.body.getReader===void 0)return l;const u=Ci[e],h=l.body.getReader(),d=l.headers.get("X-File-Size")||l.headers.get("Content-Length"),m=d?parseInt(d):0,g=m!==0;let v=0;const p=new ReadableStream({start(f){E();function E(){h.read().then(({done:M,value:b})=>{if(M)f.close();else{v+=b.byteLength;const N=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:m});for(let R=0,A=u.length;R<A;R++){const C=u[R];C.onProgress&&C.onProgress(N)}f.enqueue(b),E()}},M=>{f.error(M)})}}});return new Response(p)}else throw new Cv(`fetch for "${l.url}" responded with ${l.status}: ${l.statusText}`,l)}).then(l=>{switch(c){case"arraybuffer":return l.arrayBuffer();case"blob":return l.blob();case"document":return l.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return l.json();default:if(a===void 0)return l.text();{const h=/charset="?([^;"\s]*)"?/i.exec(a),d=h&&h[1]?h[1].toLowerCase():void 0,m=new TextDecoder(d);return l.arrayBuffer().then(g=>m.decode(g))}}}).then(l=>{$i.add(e,l);const u=Ci[e];delete Ci[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onLoad&&m.onLoad(l)}}).catch(l=>{const u=Ci[e];if(u===void 0)throw this.manager.itemError(e),l;delete Ci[e];for(let h=0,d=u.length;h<d;h++){const m=u[h];m.onError&&m.onError(l)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class Pv extends Ji{constructor(e){super(e)}load(e,t,n,i){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=$i.get(e);if(o!==void 0)return r.manager.itemStart(e),setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o;const a=Zr("img");function c(){u(),$i.add(e,this),t&&t(this),r.manager.itemEnd(e)}function l(h){u(),i&&i(h),r.manager.itemError(e),r.manager.itemEnd(e)}function u(){a.removeEventListener("load",c,!1),a.removeEventListener("error",l,!1)}return a.addEventListener("load",c,!1),a.addEventListener("error",l,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),r.manager.itemStart(e),a.src=e,a}}class Lv extends Ji{constructor(e){super(e)}load(e,t,n,i){const r=this,o=new Ca,a=new eo(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(r.withCredentials),a.load(e,function(c){let l;try{l=r.parse(c)}catch(u){if(i!==void 0)i(u);else{console.error(u);return}}l.image!==void 0?o.image=l.image:l.data!==void 0&&(o.image.width=l.width,o.image.height=l.height,o.image.data=l.data),o.wrapS=l.wrapS!==void 0?l.wrapS:hi,o.wrapT=l.wrapT!==void 0?l.wrapT:hi,o.magFilter=l.magFilter!==void 0?l.magFilter:Qt,o.minFilter=l.minFilter!==void 0?l.minFilter:Qt,o.anisotropy=l.anisotropy!==void 0?l.anisotropy:1,l.colorSpace!==void 0&&(o.colorSpace=l.colorSpace),l.flipY!==void 0&&(o.flipY=l.flipY),l.format!==void 0&&(o.format=l.format),l.type!==void 0&&(o.type=l.type),l.mipmaps!==void 0&&(o.mipmaps=l.mipmaps,o.minFilter=di),l.mipmapCount===1&&(o.minFilter=Qt),l.generateMipmaps!==void 0&&(o.generateMipmaps=l.generateMipmaps),o.needsUpdate=!0,t&&t(o,l)},n,i),o}}class Id extends Ji{constructor(e){super(e)}load(e,t,n,i){const r=new en,o=new Pv(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){r.image=a,r.needsUpdate=!0,t!==void 0&&t(r)},n,i),r}}class so extends kt{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Wr extends so{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pe(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const Tc=new st,Sh=new L,bh=new L;class Kl{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Oe(512,512),this.map=null,this.mapPass=null,this.matrix=new st,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Wl,this._frameExtents=new Oe(1,1),this._viewportCount=1,this._viewports=[new wt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Sh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Sh),bh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(bh),t.updateMatrixWorld(),Tc.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Tc),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Iv extends Kl{constructor(){super(new rn(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=dr*2*e.angle*this.focus,i=this.mapSize.width/this.mapSize.height,r=e.distance||t.far;(n!==t.fov||i!==t.aspect||r!==t.far)&&(t.fov=n,t.aspect=i,t.far=r,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class to extends so{constructor(e,t,n=0,i=Math.PI/3,r=0,o=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.distance=n,this.angle=i,this.penumbra=r,this.decay=o,this.map=null,this.shadow=new Iv}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Eh=new st,zr=new L,wc=new L;class Dv extends Kl{constructor(){super(new rn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Oe(4,2),this._viewportCount=6,this._viewports=[new wt(2,1,1,1),new wt(0,1,1,1),new wt(3,1,1,1),new wt(1,1,1,1),new wt(3,0,1,1),new wt(1,0,1,1)],this._cubeDirections=[new L(1,0,0),new L(-1,0,0),new L(0,0,1),new L(0,0,-1),new L(0,1,0),new L(0,-1,0)],this._cubeUps=[new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,1,0),new L(0,0,1),new L(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,i=this.matrix,r=e.distance||n.far;r!==n.far&&(n.far=r,n.updateProjectionMatrix()),zr.setFromMatrixPosition(e.matrixWorld),n.position.copy(zr),wc.copy(n.position),wc.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(wc),n.updateMatrixWorld(),i.makeTranslation(-zr.x,-zr.y,-zr.z),Eh.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Eh)}}class $l extends so{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new Dv}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class Uv extends Kl{constructor(){super(new wa(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class _s extends so{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(kt.DEFAULT_UP),this.updateMatrix(),this.target=new kt,this.shadow=new Uv}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Nv extends so{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Yr{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,i=e.length;n<i;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class Fv extends Ji{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,i){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const r=this,o=$i.get(e);if(o!==void 0){if(r.manager.itemStart(e),o.then){o.then(l=>{t&&t(l),r.manager.itemEnd(e)}).catch(l=>{i&&i(l)});return}return setTimeout(function(){t&&t(o),r.manager.itemEnd(e)},0),o}const a={};a.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",a.headers=this.requestHeader;const c=fetch(e,a).then(function(l){return l.blob()}).then(function(l){return createImageBitmap(l,Object.assign(r.options,{colorSpaceConversion:"none"}))}).then(function(l){return $i.add(e,l),t&&t(l),r.manager.itemEnd(e),l}).catch(function(l){i&&i(l),$i.remove(e),r.manager.itemError(e),r.manager.itemEnd(e)});$i.add(e,c),r.manager.itemStart(e)}}class Ov{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=Th(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=Th();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function Th(){return performance.now()}const Zl="\\[\\]\\.:\\/",Bv=new RegExp("["+Zl+"]","g"),Jl="[^"+Zl+"]",zv="[^"+Zl.replace("\\.","")+"]",kv=/((?:WC+[\/:])*)/.source.replace("WC",Jl),Hv=/(WCOD+)?/.source.replace("WCOD",zv),Vv=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Jl),Gv=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Jl),Wv=new RegExp("^"+kv+Hv+Vv+Gv+"$"),Xv=["material","materials","bones","map"];class qv{constructor(e,t,n){const i=n||Lt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,i)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,i=this._bindings[n];i!==void 0&&i.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let i=this._targetGroup.nCachedObjects_,r=n.length;i!==r;++i)n[i].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class Lt{constructor(e,t,n){this.path=t,this.parsedPath=n||Lt.parseTrackName(t),this.node=Lt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new Lt.Composite(e,t,n):new Lt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(Bv,"")}static parseTrackName(e){const t=Wv.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},i=n.nodeName&&n.nodeName.lastIndexOf(".");if(i!==void 0&&i!==-1){const r=n.nodeName.substring(i+1);Xv.indexOf(r)!==-1&&(n.nodeName=n.nodeName.substring(0,i),n.objectName=r)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(r){for(let o=0;o<r.length;o++){const a=r[o];if(a.name===t||a.uuid===t)return a;const c=n(a.children);if(c)return c}return null},i=n(e.children);if(i)return i}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)e[t++]=n[i]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let i=0,r=n.length;i!==r;++i)n[i]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,i=t.propertyName;let r=t.propertyIndex;if(e||(e=Lt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let l=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===l){l=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(l!==void 0){if(e[l]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[l]}}const o=e[i];if(o===void 0){const l=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+l+"."+i+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let c=this.BindingType.Direct;if(r!==void 0){if(i==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[r]!==void 0&&(r=e.morphTargetDictionary[r])}c=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=r}else o.fromArray!==void 0&&o.toArray!==void 0?(c=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(c=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=i;this.getValue=this.GetterByBindingType[c],this.setValue=this.SetterByBindingTypeAndVersioning[c][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}Lt.Composite=qv;Lt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Lt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Lt.prototype.GetterByBindingType=[Lt.prototype._getValue_direct,Lt.prototype._getValue_array,Lt.prototype._getValue_arrayElement,Lt.prototype._getValue_toArray];Lt.prototype.SetterByBindingTypeAndVersioning=[[Lt.prototype._setValue_direct,Lt.prototype._setValue_direct_setNeedsUpdate,Lt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_array,Lt.prototype._setValue_array_setNeedsUpdate,Lt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_arrayElement,Lt.prototype._setValue_arrayElement_setNeedsUpdate,Lt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Lt.prototype._setValue_fromArray,Lt.prototype._setValue_fromArray_setNeedsUpdate,Lt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];const wh=new Oe;class Yv{constructor(e=new Oe(1/0,1/0),t=new Oe(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=wh.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,wh).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Dl}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Dl);function Ah(s,e){if(e===Tf)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),s;if(e===yl||e===sd){let t=s.getIndex();if(t===null){const o=[],a=s.getAttribute("position");if(a!==void 0){for(let c=0;c<a.count;c++)o.push(c);s.setIndex(o),t=s.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),s}const n=t.count-2,i=[];if(e===yl)for(let o=1;o<=n;o++)i.push(t.getX(0)),i.push(t.getX(o)),i.push(t.getX(o+1));else for(let o=0;o<n;o++)o%2===0?(i.push(t.getX(o)),i.push(t.getX(o+1)),i.push(t.getX(o+2))):(i.push(t.getX(o+2)),i.push(t.getX(o+1)),i.push(t.getX(o)));i.length/3!==n&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const r=s.clone();return r.setIndex(i),r.clearGroups(),r}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",e),s}class jv extends Ji{constructor(e){super(e),this.dracoLoader=null,this.ktx2Loader=null,this.meshoptDecoder=null,this.pluginCallbacks=[],this.register(function(t){return new Qv(t)}),this.register(function(t){return new ex(t)}),this.register(function(t){return new lx(t)}),this.register(function(t){return new ux(t)}),this.register(function(t){return new hx(t)}),this.register(function(t){return new nx(t)}),this.register(function(t){return new ix(t)}),this.register(function(t){return new sx(t)}),this.register(function(t){return new rx(t)}),this.register(function(t){return new Jv(t)}),this.register(function(t){return new ox(t)}),this.register(function(t){return new tx(t)}),this.register(function(t){return new cx(t)}),this.register(function(t){return new ax(t)}),this.register(function(t){return new $v(t)}),this.register(function(t){return new dx(t)}),this.register(function(t){return new fx(t)})}load(e,t,n,i){const r=this;let o;if(this.resourcePath!=="")o=this.resourcePath;else if(this.path!==""){const l=Yr.extractUrlBase(e);o=Yr.resolveURL(l,this.path)}else o=Yr.extractUrlBase(e);this.manager.itemStart(e);const a=function(l){i?i(l):console.error(l),r.manager.itemError(e),r.manager.itemEnd(e)},c=new eo(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(l){try{r.parse(l,o,function(u){t(u),r.manager.itemEnd(e)},a)}catch(u){a(u)}},n,a)}setDRACOLoader(e){return this.dracoLoader=e,this}setKTX2Loader(e){return this.ktx2Loader=e,this}setMeshoptDecoder(e){return this.meshoptDecoder=e,this}register(e){return this.pluginCallbacks.indexOf(e)===-1&&this.pluginCallbacks.push(e),this}unregister(e){return this.pluginCallbacks.indexOf(e)!==-1&&this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e),1),this}parse(e,t,n,i){let r;const o={},a={},c=new TextDecoder;if(typeof e=="string")r=JSON.parse(e);else if(e instanceof ArrayBuffer)if(c.decode(new Uint8Array(e,0,4))===Dd){try{o[xt.KHR_BINARY_GLTF]=new px(e)}catch(h){i&&i(h);return}r=JSON.parse(o[xt.KHR_BINARY_GLTF].content)}else r=JSON.parse(c.decode(e));else r=e;if(r.asset===void 0||r.asset.version[0]<2){i&&i(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));return}const l=new Ax(r,{path:t||this.resourcePath||"",crossOrigin:this.crossOrigin,requestHeader:this.requestHeader,manager:this.manager,ktx2Loader:this.ktx2Loader,meshoptDecoder:this.meshoptDecoder});l.fileLoader.setRequestHeader(this.requestHeader);for(let u=0;u<this.pluginCallbacks.length;u++){const h=this.pluginCallbacks[u](l);h.name||console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),a[h.name]=h,o[h.name]=!0}if(r.extensionsUsed)for(let u=0;u<r.extensionsUsed.length;++u){const h=r.extensionsUsed[u],d=r.extensionsRequired||[];switch(h){case xt.KHR_MATERIALS_UNLIT:o[h]=new Zv;break;case xt.KHR_DRACO_MESH_COMPRESSION:o[h]=new mx(r,this.dracoLoader);break;case xt.KHR_TEXTURE_TRANSFORM:o[h]=new gx;break;case xt.KHR_MESH_QUANTIZATION:o[h]=new _x;break;default:d.indexOf(h)>=0&&a[h]===void 0&&console.warn('THREE.GLTFLoader: Unknown extension "'+h+'".')}}l.setExtensions(o),l.setPlugins(a),l.parse(n,i)}parseAsync(e,t){const n=this;return new Promise(function(i,r){n.parse(e,t,i,r)})}}function Kv(){let s={};return{get:function(e){return s[e]},add:function(e,t){s[e]=t},remove:function(e){delete s[e]},removeAll:function(){s={}}}}const xt={KHR_BINARY_GLTF:"KHR_binary_glTF",KHR_DRACO_MESH_COMPRESSION:"KHR_draco_mesh_compression",KHR_LIGHTS_PUNCTUAL:"KHR_lights_punctual",KHR_MATERIALS_CLEARCOAT:"KHR_materials_clearcoat",KHR_MATERIALS_DISPERSION:"KHR_materials_dispersion",KHR_MATERIALS_IOR:"KHR_materials_ior",KHR_MATERIALS_SHEEN:"KHR_materials_sheen",KHR_MATERIALS_SPECULAR:"KHR_materials_specular",KHR_MATERIALS_TRANSMISSION:"KHR_materials_transmission",KHR_MATERIALS_IRIDESCENCE:"KHR_materials_iridescence",KHR_MATERIALS_ANISOTROPY:"KHR_materials_anisotropy",KHR_MATERIALS_UNLIT:"KHR_materials_unlit",KHR_MATERIALS_VOLUME:"KHR_materials_volume",KHR_TEXTURE_BASISU:"KHR_texture_basisu",KHR_TEXTURE_TRANSFORM:"KHR_texture_transform",KHR_MESH_QUANTIZATION:"KHR_mesh_quantization",KHR_MATERIALS_EMISSIVE_STRENGTH:"KHR_materials_emissive_strength",EXT_MATERIALS_BUMP:"EXT_materials_bump",EXT_TEXTURE_WEBP:"EXT_texture_webp",EXT_TEXTURE_AVIF:"EXT_texture_avif",EXT_MESHOPT_COMPRESSION:"EXT_meshopt_compression",EXT_MESH_GPU_INSTANCING:"EXT_mesh_gpu_instancing"};class $v{constructor(e){this.parser=e,this.name=xt.KHR_LIGHTS_PUNCTUAL,this.cache={refs:{},uses:{}}}_markDefs(){const e=this.parser,t=this.parser.json.nodes||[];for(let n=0,i=t.length;n<i;n++){const r=t[n];r.extensions&&r.extensions[this.name]&&r.extensions[this.name].light!==void 0&&e._addNodeRef(this.cache,r.extensions[this.name].light)}}_loadLight(e){const t=this.parser,n="light:"+e;let i=t.cache.get(n);if(i)return i;const r=t.json,c=((r.extensions&&r.extensions[this.name]||{}).lights||[])[e];let l;const u=new Pe(16777215);c.color!==void 0&&u.setRGB(c.color[0],c.color[1],c.color[2],tn);const h=c.range!==void 0?c.range:0;switch(c.type){case"directional":l=new _s(u),l.target.position.set(0,0,-1),l.add(l.target);break;case"point":l=new $l(u),l.distance=h;break;case"spot":l=new to(u),l.distance=h,c.spot=c.spot||{},c.spot.innerConeAngle=c.spot.innerConeAngle!==void 0?c.spot.innerConeAngle:0,c.spot.outerConeAngle=c.spot.outerConeAngle!==void 0?c.spot.outerConeAngle:Math.PI/4,l.angle=c.spot.outerConeAngle,l.penumbra=1-c.spot.innerConeAngle/c.spot.outerConeAngle,l.target.position.set(0,0,-1),l.add(l.target);break;default:throw new Error("THREE.GLTFLoader: Unexpected light type: "+c.type)}return l.position.set(0,0,0),l.decay=2,Li(l,c),c.intensity!==void 0&&(l.intensity=c.intensity),l.name=t.createUniqueName(c.name||"light_"+e),i=Promise.resolve(l),t.cache.add(n,i),i}getDependency(e,t){if(e==="light")return this._loadLight(t)}createNodeAttachment(e){const t=this,n=this.parser,r=n.json.nodes[e],a=(r.extensions&&r.extensions[this.name]||{}).light;return a===void 0?null:this._loadLight(a).then(function(c){return n._getNodeRef(t.cache,a,c)})}}class Zv{constructor(){this.name=xt.KHR_MATERIALS_UNLIT}getMaterialType(){return Wt}extendParams(e,t,n){const i=[];e.color=new Pe(1,1,1),e.opacity=1;const r=t.pbrMetallicRoughness;if(r){if(Array.isArray(r.baseColorFactor)){const o=r.baseColorFactor;e.color.setRGB(o[0],o[1],o[2],tn),e.opacity=o[3]}r.baseColorTexture!==void 0&&i.push(n.assignTexture(e,"map",r.baseColorTexture,Ft))}return Promise.all(i)}}class Jv{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_EMISSIVE_STRENGTH}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name].emissiveStrength;return r!==void 0&&(t.emissiveIntensity=r),Promise.resolve()}}class Qv{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_CLEARCOAT}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];if(o.clearcoatFactor!==void 0&&(t.clearcoat=o.clearcoatFactor),o.clearcoatTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatMap",o.clearcoatTexture)),o.clearcoatRoughnessFactor!==void 0&&(t.clearcoatRoughness=o.clearcoatRoughnessFactor),o.clearcoatRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"clearcoatRoughnessMap",o.clearcoatRoughnessTexture)),o.clearcoatNormalTexture!==void 0&&(r.push(n.assignTexture(t,"clearcoatNormalMap",o.clearcoatNormalTexture)),o.clearcoatNormalTexture.scale!==void 0)){const a=o.clearcoatNormalTexture.scale;t.clearcoatNormalScale=new Oe(a,a)}return Promise.all(r)}}class ex{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_DISPERSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.dispersion=r.dispersion!==void 0?r.dispersion:0,Promise.resolve()}}class tx{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IRIDESCENCE}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.iridescenceFactor!==void 0&&(t.iridescence=o.iridescenceFactor),o.iridescenceTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceMap",o.iridescenceTexture)),o.iridescenceIor!==void 0&&(t.iridescenceIOR=o.iridescenceIor),t.iridescenceThicknessRange===void 0&&(t.iridescenceThicknessRange=[100,400]),o.iridescenceThicknessMinimum!==void 0&&(t.iridescenceThicknessRange[0]=o.iridescenceThicknessMinimum),o.iridescenceThicknessMaximum!==void 0&&(t.iridescenceThicknessRange[1]=o.iridescenceThicknessMaximum),o.iridescenceThicknessTexture!==void 0&&r.push(n.assignTexture(t,"iridescenceThicknessMap",o.iridescenceThicknessTexture)),Promise.all(r)}}class nx{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SHEEN}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[];t.sheenColor=new Pe(0,0,0),t.sheenRoughness=0,t.sheen=1;const o=i.extensions[this.name];if(o.sheenColorFactor!==void 0){const a=o.sheenColorFactor;t.sheenColor.setRGB(a[0],a[1],a[2],tn)}return o.sheenRoughnessFactor!==void 0&&(t.sheenRoughness=o.sheenRoughnessFactor),o.sheenColorTexture!==void 0&&r.push(n.assignTexture(t,"sheenColorMap",o.sheenColorTexture,Ft)),o.sheenRoughnessTexture!==void 0&&r.push(n.assignTexture(t,"sheenRoughnessMap",o.sheenRoughnessTexture)),Promise.all(r)}}class ix{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_TRANSMISSION}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.transmissionFactor!==void 0&&(t.transmission=o.transmissionFactor),o.transmissionTexture!==void 0&&r.push(n.assignTexture(t,"transmissionMap",o.transmissionTexture)),Promise.all(r)}}class sx{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_VOLUME}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.thickness=o.thicknessFactor!==void 0?o.thicknessFactor:0,o.thicknessTexture!==void 0&&r.push(n.assignTexture(t,"thicknessMap",o.thicknessTexture)),t.attenuationDistance=o.attenuationDistance||1/0;const a=o.attenuationColor||[1,1,1];return t.attenuationColor=new Pe().setRGB(a[0],a[1],a[2],tn),Promise.all(r)}}class rx{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_IOR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const i=this.parser.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=i.extensions[this.name];return t.ior=r.ior!==void 0?r.ior:1.5,Promise.resolve()}}class ox{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_SPECULAR}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];t.specularIntensity=o.specularFactor!==void 0?o.specularFactor:1,o.specularTexture!==void 0&&r.push(n.assignTexture(t,"specularIntensityMap",o.specularTexture));const a=o.specularColorFactor||[1,1,1];return t.specularColor=new Pe().setRGB(a[0],a[1],a[2],tn),o.specularColorTexture!==void 0&&r.push(n.assignTexture(t,"specularColorMap",o.specularColorTexture,Ft)),Promise.all(r)}}class ax{constructor(e){this.parser=e,this.name=xt.EXT_MATERIALS_BUMP}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return t.bumpScale=o.bumpFactor!==void 0?o.bumpFactor:1,o.bumpTexture!==void 0&&r.push(n.assignTexture(t,"bumpMap",o.bumpTexture)),Promise.all(r)}}class cx{constructor(e){this.parser=e,this.name=xt.KHR_MATERIALS_ANISOTROPY}getMaterialType(e){const n=this.parser.json.materials[e];return!n.extensions||!n.extensions[this.name]?null:Yn}extendMaterialParams(e,t){const n=this.parser,i=n.json.materials[e];if(!i.extensions||!i.extensions[this.name])return Promise.resolve();const r=[],o=i.extensions[this.name];return o.anisotropyStrength!==void 0&&(t.anisotropy=o.anisotropyStrength),o.anisotropyRotation!==void 0&&(t.anisotropyRotation=o.anisotropyRotation),o.anisotropyTexture!==void 0&&r.push(n.assignTexture(t,"anisotropyMap",o.anisotropyTexture)),Promise.all(r)}}class lx{constructor(e){this.parser=e,this.name=xt.KHR_TEXTURE_BASISU}loadTexture(e){const t=this.parser,n=t.json,i=n.textures[e];if(!i.extensions||!i.extensions[this.name])return null;const r=i.extensions[this.name],o=t.options.ktx2Loader;if(!o){if(n.extensionsRequired&&n.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");return null}return t.loadTextureImage(e,r.source,o)}}class ux{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_WEBP,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class hx{constructor(e){this.parser=e,this.name=xt.EXT_TEXTURE_AVIF,this.isSupported=null}loadTexture(e){const t=this.name,n=this.parser,i=n.json,r=i.textures[e];if(!r.extensions||!r.extensions[t])return null;const o=r.extensions[t],a=i.images[o.source];let c=n.textureLoader;if(a.uri){const l=n.options.manager.getHandler(a.uri);l!==null&&(c=l)}return this.detectSupport().then(function(l){if(l)return n.loadTextureImage(e,o.source,c);if(i.extensionsRequired&&i.extensionsRequired.indexOf(t)>=0)throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");return n.loadTexture(e)})}detectSupport(){return this.isSupported||(this.isSupported=new Promise(function(e){const t=new Image;t.src="data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=",t.onload=t.onerror=function(){e(t.height===1)}})),this.isSupported}}class dx{constructor(e){this.name=xt.EXT_MESHOPT_COMPRESSION,this.parser=e}loadBufferView(e){const t=this.parser.json,n=t.bufferViews[e];if(n.extensions&&n.extensions[this.name]){const i=n.extensions[this.name],r=this.parser.getDependency("buffer",i.buffer),o=this.parser.options.meshoptDecoder;if(!o||!o.supported){if(t.extensionsRequired&&t.extensionsRequired.indexOf(this.name)>=0)throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");return null}return r.then(function(a){const c=i.byteOffset||0,l=i.byteLength||0,u=i.count,h=i.byteStride,d=new Uint8Array(a,c,l);return o.decodeGltfBufferAsync?o.decodeGltfBufferAsync(u,h,d,i.mode,i.filter).then(function(m){return m.buffer}):o.ready.then(function(){const m=new ArrayBuffer(u*h);return o.decodeGltfBuffer(new Uint8Array(m),u,h,d,i.mode,i.filter),m})})}else return null}}class fx{constructor(e){this.name=xt.EXT_MESH_GPU_INSTANCING,this.parser=e}createNodeMesh(e){const t=this.parser.json,n=t.nodes[e];if(!n.extensions||!n.extensions[this.name]||n.mesh===void 0)return null;const i=t.meshes[n.mesh];for(const l of i.primitives)if(l.mode!==Gn.TRIANGLES&&l.mode!==Gn.TRIANGLE_STRIP&&l.mode!==Gn.TRIANGLE_FAN&&l.mode!==void 0)return null;const o=n.extensions[this.name].attributes,a=[],c={};for(const l in o)a.push(this.parser.getDependency("accessor",o[l]).then(u=>(c[l]=u,c[l])));return a.length<1?null:(a.push(this.parser.createNodeMesh(e)),Promise.all(a).then(l=>{const u=l.pop(),h=u.isGroup?u.children:[u],d=l[0].count,m=[];for(const g of h){const v=new st,p=new L,f=new Fi,E=new L(1,1,1),M=new Qs(g.geometry,g.material,d);for(let b=0;b<d;b++)c.TRANSLATION&&p.fromBufferAttribute(c.TRANSLATION,b),c.ROTATION&&f.fromBufferAttribute(c.ROTATION,b),c.SCALE&&E.fromBufferAttribute(c.SCALE,b),M.setMatrixAt(b,v.compose(p,f,E));for(const b in c)if(b==="_COLOR_0"){const N=c[b];M.instanceColor=new El(N.array,N.itemSize,N.normalized)}else b!=="TRANSLATION"&&b!=="ROTATION"&&b!=="SCALE"&&g.geometry.setAttribute(b,c[b]);kt.prototype.copy.call(M,g),this.parser.assignFinalMaterial(M),m.push(M)}return u.isGroup?(u.clear(),u.add(...m),u):m[0]}))}}const Dd="glTF",kr=12,Rh={JSON:1313821514,BIN:5130562};class px{constructor(e){this.name=xt.KHR_BINARY_GLTF,this.content=null,this.body=null;const t=new DataView(e,0,kr),n=new TextDecoder;if(this.header={magic:n.decode(new Uint8Array(e.slice(0,4))),version:t.getUint32(4,!0),length:t.getUint32(8,!0)},this.header.magic!==Dd)throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");if(this.header.version<2)throw new Error("THREE.GLTFLoader: Legacy binary file detected.");const i=this.header.length-kr,r=new DataView(e,kr);let o=0;for(;o<i;){const a=r.getUint32(o,!0);o+=4;const c=r.getUint32(o,!0);if(o+=4,c===Rh.JSON){const l=new Uint8Array(e,kr+o,a);this.content=n.decode(l)}else if(c===Rh.BIN){const l=kr+o;this.body=e.slice(l,l+a)}o+=a}if(this.content===null)throw new Error("THREE.GLTFLoader: JSON content not found.")}}class mx{constructor(e,t){if(!t)throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");this.name=xt.KHR_DRACO_MESH_COMPRESSION,this.json=e,this.dracoLoader=t,this.dracoLoader.preload()}decodePrimitive(e,t){const n=this.json,i=this.dracoLoader,r=e.extensions[this.name].bufferView,o=e.extensions[this.name].attributes,a={},c={},l={};for(const u in o){const h=wl[u]||u.toLowerCase();a[h]=o[u]}for(const u in e.attributes){const h=wl[u]||u.toLowerCase();if(o[u]!==void 0){const d=n.accessors[e.attributes[u]],m=or[d.componentType];l[h]=m.name,c[h]=d.normalized===!0}}return t.getDependency("bufferView",r).then(function(u){return new Promise(function(h,d){i.decodeDracoFile(u,function(m){for(const g in m.attributes){const v=m.attributes[g],p=c[g];p!==void 0&&(v.normalized=p)}h(m)},a,l,tn,d)})})}}class gx{constructor(){this.name=xt.KHR_TEXTURE_TRANSFORM}extendTexture(e,t){return(t.texCoord===void 0||t.texCoord===e.channel)&&t.offset===void 0&&t.rotation===void 0&&t.scale===void 0||(e=e.clone(),t.texCoord!==void 0&&(e.channel=t.texCoord),t.offset!==void 0&&e.offset.fromArray(t.offset),t.rotation!==void 0&&(e.rotation=t.rotation),t.scale!==void 0&&e.repeat.fromArray(t.scale),e.needsUpdate=!0),e}}class _x{constructor(){this.name=xt.KHR_MESH_QUANTIZATION}}class Ud extends io{constructor(e,t,n,i){super(e,t,n,i)}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,i=this.valueSize,r=e*i*3+i;for(let o=0;o!==i;o++)t[o]=n[r+o];return t}interpolate_(e,t,n,i){const r=this.resultBuffer,o=this.sampleValues,a=this.valueSize,c=a*2,l=a*3,u=i-t,h=(n-t)/u,d=h*h,m=d*h,g=e*l,v=g-l,p=-2*m+3*d,f=m-d,E=1-p,M=f-d+h;for(let b=0;b!==a;b++){const N=o[v+b+a],R=o[v+b+c]*u,A=o[g+b+a],C=o[g+b]*u;r[b]=E*N+M*R+p*A+f*C}return r}}const vx=new Fi;class xx extends Ud{interpolate_(e,t,n,i){const r=super.interpolate_(e,t,n,i);return vx.fromArray(r).normalize().toArray(r),r}}const Gn={POINTS:0,LINES:1,LINE_LOOP:2,LINE_STRIP:3,TRIANGLES:4,TRIANGLE_STRIP:5,TRIANGLE_FAN:6},or={5120:Int8Array,5121:Uint8Array,5122:Int16Array,5123:Uint16Array,5125:Uint32Array,5126:Float32Array},Ch={9728:vn,9729:Qt,9984:jh,9985:ta,9986:Vr,9987:di},Ph={33071:hi,33648:da,10497:vs},Ac={SCALAR:1,VEC2:2,VEC3:3,VEC4:4,MAT2:4,MAT3:9,MAT4:16},wl={POSITION:"position",NORMAL:"normal",TANGENT:"tangent",TEXCOORD_0:"uv",TEXCOORD_1:"uv1",TEXCOORD_2:"uv2",TEXCOORD_3:"uv3",COLOR_0:"color",WEIGHTS_0:"skinWeight",JOINTS_0:"skinIndex"},qi={scale:"scale",translation:"position",rotation:"quaternion",weights:"morphTargetInfluences"},yx={CUBICSPLINE:void 0,LINEAR:$r,STEP:Kr},Rc={OPAQUE:"OPAQUE",MASK:"MASK",BLEND:"BLEND"};function Mx(s){return s.DefaultMaterial===void 0&&(s.DefaultMaterial=new ut({color:16777215,emissive:0,metalness:1,roughness:1,transparent:!1,depthTest:!0,side:Ni})),s.DefaultMaterial}function ds(s,e,t){for(const n in t.extensions)s[n]===void 0&&(e.userData.gltfExtensions=e.userData.gltfExtensions||{},e.userData.gltfExtensions[n]=t.extensions[n])}function Li(s,e){e.extras!==void 0&&(typeof e.extras=="object"?Object.assign(s.userData,e.extras):console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, "+e.extras))}function Sx(s,e,t){let n=!1,i=!1,r=!1;for(let l=0,u=e.length;l<u;l++){const h=e[l];if(h.POSITION!==void 0&&(n=!0),h.NORMAL!==void 0&&(i=!0),h.COLOR_0!==void 0&&(r=!0),n&&i&&r)break}if(!n&&!i&&!r)return Promise.resolve(s);const o=[],a=[],c=[];for(let l=0,u=e.length;l<u;l++){const h=e[l];if(n){const d=h.POSITION!==void 0?t.getDependency("accessor",h.POSITION):s.attributes.position;o.push(d)}if(i){const d=h.NORMAL!==void 0?t.getDependency("accessor",h.NORMAL):s.attributes.normal;a.push(d)}if(r){const d=h.COLOR_0!==void 0?t.getDependency("accessor",h.COLOR_0):s.attributes.color;c.push(d)}}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c)]).then(function(l){const u=l[0],h=l[1],d=l[2];return n&&(s.morphAttributes.position=u),i&&(s.morphAttributes.normal=h),r&&(s.morphAttributes.color=d),s.morphTargetsRelative=!0,s})}function bx(s,e){if(s.updateMorphTargets(),e.weights!==void 0)for(let t=0,n=e.weights.length;t<n;t++)s.morphTargetInfluences[t]=e.weights[t];if(e.extras&&Array.isArray(e.extras.targetNames)){const t=e.extras.targetNames;if(s.morphTargetInfluences.length===t.length){s.morphTargetDictionary={};for(let n=0,i=t.length;n<i;n++)s.morphTargetDictionary[t[n]]=n}else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")}}function Ex(s){let e;const t=s.extensions&&s.extensions[xt.KHR_DRACO_MESH_COMPRESSION];if(t?e="draco:"+t.bufferView+":"+t.indices+":"+Cc(t.attributes):e=s.indices+":"+Cc(s.attributes)+":"+s.mode,s.targets!==void 0)for(let n=0,i=s.targets.length;n<i;n++)e+=":"+Cc(s.targets[n]);return e}function Cc(s){let e="";const t=Object.keys(s).sort();for(let n=0,i=t.length;n<i;n++)e+=t[n]+":"+s[t[n]]+";";return e}function Al(s){switch(s){case Int8Array:return 1/127;case Uint8Array:return 1/255;case Int16Array:return 1/32767;case Uint16Array:return 1/65535;default:throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")}}function Tx(s){return s.search(/\.jpe?g($|\?)/i)>0||s.search(/^data\:image\/jpeg/)===0?"image/jpeg":s.search(/\.webp($|\?)/i)>0||s.search(/^data\:image\/webp/)===0?"image/webp":"image/png"}const wx=new st;class Ax{constructor(e={},t={}){this.json=e,this.extensions={},this.plugins={},this.options=t,this.cache=new Kv,this.associations=new Map,this.primitiveCache={},this.nodeCache={},this.meshCache={refs:{},uses:{}},this.cameraCache={refs:{},uses:{}},this.lightCache={refs:{},uses:{}},this.sourceCache={},this.textureCache={},this.nodeNamesUsed={};let n=!1,i=-1,r=!1,o=-1;if(typeof navigator<"u"){const a=navigator.userAgent;n=/^((?!chrome|android).)*safari/i.test(a)===!0;const c=a.match(/Version\/(\d+)/);i=n&&c?parseInt(c[1],10):-1,r=a.indexOf("Firefox")>-1,o=r?a.match(/Firefox\/([0-9]+)\./)[1]:-1}typeof createImageBitmap>"u"||n&&i<17||r&&o<98?this.textureLoader=new Id(this.options.manager):this.textureLoader=new Fv(this.options.manager),this.textureLoader.setCrossOrigin(this.options.crossOrigin),this.textureLoader.setRequestHeader(this.options.requestHeader),this.fileLoader=new eo(this.options.manager),this.fileLoader.setResponseType("arraybuffer"),this.options.crossOrigin==="use-credentials"&&this.fileLoader.setWithCredentials(!0)}setExtensions(e){this.extensions=e}setPlugins(e){this.plugins=e}parse(e,t){const n=this,i=this.json,r=this.extensions;this.cache.removeAll(),this.nodeCache={},this._invokeAll(function(o){return o._markDefs&&o._markDefs()}),Promise.all(this._invokeAll(function(o){return o.beforeRoot&&o.beforeRoot()})).then(function(){return Promise.all([n.getDependencies("scene"),n.getDependencies("animation"),n.getDependencies("camera")])}).then(function(o){const a={scene:o[0][i.scene||0],scenes:o[0],animations:o[1],cameras:o[2],asset:i.asset,parser:n,userData:{}};return ds(r,a,i),Li(a,i),Promise.all(n._invokeAll(function(c){return c.afterRoot&&c.afterRoot(a)})).then(function(){for(const c of a.scenes)c.updateMatrixWorld();e(a)})}).catch(t)}_markDefs(){const e=this.json.nodes||[],t=this.json.skins||[],n=this.json.meshes||[];for(let i=0,r=t.length;i<r;i++){const o=t[i].joints;for(let a=0,c=o.length;a<c;a++)e[o[a]].isBone=!0}for(let i=0,r=e.length;i<r;i++){const o=e[i];o.mesh!==void 0&&(this._addNodeRef(this.meshCache,o.mesh),o.skin!==void 0&&(n[o.mesh].isSkinnedMesh=!0)),o.camera!==void 0&&this._addNodeRef(this.cameraCache,o.camera)}}_addNodeRef(e,t){t!==void 0&&(e.refs[t]===void 0&&(e.refs[t]=e.uses[t]=0),e.refs[t]++)}_getNodeRef(e,t,n){if(e.refs[t]<=1)return n;const i=n.clone(),r=(o,a)=>{const c=this.associations.get(o);c!=null&&this.associations.set(a,c);for(const[l,u]of o.children.entries())r(u,a.children[l])};return r(n,i),i.name+="_instance_"+e.uses[t]++,i}_invokeOne(e){const t=Object.values(this.plugins);t.push(this);for(let n=0;n<t.length;n++){const i=e(t[n]);if(i)return i}return null}_invokeAll(e){const t=Object.values(this.plugins);t.unshift(this);const n=[];for(let i=0;i<t.length;i++){const r=e(t[i]);r&&n.push(r)}return n}getDependency(e,t){const n=e+":"+t;let i=this.cache.get(n);if(!i){switch(e){case"scene":i=this.loadScene(t);break;case"node":i=this._invokeOne(function(r){return r.loadNode&&r.loadNode(t)});break;case"mesh":i=this._invokeOne(function(r){return r.loadMesh&&r.loadMesh(t)});break;case"accessor":i=this.loadAccessor(t);break;case"bufferView":i=this._invokeOne(function(r){return r.loadBufferView&&r.loadBufferView(t)});break;case"buffer":i=this.loadBuffer(t);break;case"material":i=this._invokeOne(function(r){return r.loadMaterial&&r.loadMaterial(t)});break;case"texture":i=this._invokeOne(function(r){return r.loadTexture&&r.loadTexture(t)});break;case"skin":i=this.loadSkin(t);break;case"animation":i=this._invokeOne(function(r){return r.loadAnimation&&r.loadAnimation(t)});break;case"camera":i=this.loadCamera(t);break;default:if(i=this._invokeOne(function(r){return r!=this&&r.getDependency&&r.getDependency(e,t)}),!i)throw new Error("Unknown type: "+e);break}this.cache.add(n,i)}return i}getDependencies(e){let t=this.cache.get(e);if(!t){const n=this,i=this.json[e+(e==="mesh"?"es":"s")]||[];t=Promise.all(i.map(function(r,o){return n.getDependency(e,o)})),this.cache.add(e,t)}return t}loadBuffer(e){const t=this.json.buffers[e],n=this.fileLoader;if(t.type&&t.type!=="arraybuffer")throw new Error("THREE.GLTFLoader: "+t.type+" buffer type is not supported.");if(t.uri===void 0&&e===0)return Promise.resolve(this.extensions[xt.KHR_BINARY_GLTF].body);const i=this.options;return new Promise(function(r,o){n.load(Yr.resolveURL(t.uri,i.path),r,void 0,function(){o(new Error('THREE.GLTFLoader: Failed to load buffer "'+t.uri+'".'))})})}loadBufferView(e){const t=this.json.bufferViews[e];return this.getDependency("buffer",t.buffer).then(function(n){const i=t.byteLength||0,r=t.byteOffset||0;return n.slice(r,r+i)})}loadAccessor(e){const t=this,n=this.json,i=this.json.accessors[e];if(i.bufferView===void 0&&i.sparse===void 0){const o=Ac[i.type],a=or[i.componentType],c=i.normalized===!0,l=new a(i.count*o);return Promise.resolve(new gn(l,o,c))}const r=[];return i.bufferView!==void 0?r.push(this.getDependency("bufferView",i.bufferView)):r.push(null),i.sparse!==void 0&&(r.push(this.getDependency("bufferView",i.sparse.indices.bufferView)),r.push(this.getDependency("bufferView",i.sparse.values.bufferView))),Promise.all(r).then(function(o){const a=o[0],c=Ac[i.type],l=or[i.componentType],u=l.BYTES_PER_ELEMENT,h=u*c,d=i.byteOffset||0,m=i.bufferView!==void 0?n.bufferViews[i.bufferView].byteStride:void 0,g=i.normalized===!0;let v,p;if(m&&m!==h){const f=Math.floor(d/m),E="InterleavedBuffer:"+i.bufferView+":"+i.componentType+":"+f+":"+i.count;let M=t.cache.get(E);M||(v=new l(a,f*m,i.count*m/u),M=new ql(v,m/u),t.cache.add(E,M)),p=new ys(M,c,d%m/u,g)}else a===null?v=new l(i.count*c):v=new l(a,d,i.count*c),p=new gn(v,c,g);if(i.sparse!==void 0){const f=Ac.SCALAR,E=or[i.sparse.indices.componentType],M=i.sparse.indices.byteOffset||0,b=i.sparse.values.byteOffset||0,N=new E(o[1],M,i.sparse.count*f),R=new l(o[2],b,i.sparse.count*c);a!==null&&(p=new gn(p.array.slice(),p.itemSize,p.normalized)),p.normalized=!1;for(let A=0,C=N.length;A<C;A++){const Y=N[A];if(p.setX(Y,R[A*c]),c>=2&&p.setY(Y,R[A*c+1]),c>=3&&p.setZ(Y,R[A*c+2]),c>=4&&p.setW(Y,R[A*c+3]),c>=5)throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")}p.normalized=g}return p})}loadTexture(e){const t=this.json,n=this.options,r=t.textures[e].source,o=t.images[r];let a=this.textureLoader;if(o.uri){const c=n.manager.getHandler(o.uri);c!==null&&(a=c)}return this.loadTextureImage(e,r,a)}loadTextureImage(e,t,n){const i=this,r=this.json,o=r.textures[e],a=r.images[t],c=(a.uri||a.bufferView)+":"+o.sampler;if(this.textureCache[c])return this.textureCache[c];const l=this.loadImageSource(t,n).then(function(u){u.flipY=!1,u.name=o.name||a.name||"",u.name===""&&typeof a.uri=="string"&&a.uri.startsWith("data:image/")===!1&&(u.name=a.uri);const d=(r.samplers||{})[o.sampler]||{};return u.magFilter=Ch[d.magFilter]||Qt,u.minFilter=Ch[d.minFilter]||di,u.wrapS=Ph[d.wrapS]||vs,u.wrapT=Ph[d.wrapT]||vs,i.associations.set(u,{textures:e}),u}).catch(function(){return null});return this.textureCache[c]=l,l}loadImageSource(e,t){const n=this,i=this.json,r=this.options;if(this.sourceCache[e]!==void 0)return this.sourceCache[e].then(h=>h.clone());const o=i.images[e],a=self.URL||self.webkitURL;let c=o.uri||"",l=!1;if(o.bufferView!==void 0)c=n.getDependency("bufferView",o.bufferView).then(function(h){l=!0;const d=new Blob([h],{type:o.mimeType});return c=a.createObjectURL(d),c});else if(o.uri===void 0)throw new Error("THREE.GLTFLoader: Image "+e+" is missing URI and bufferView");const u=Promise.resolve(c).then(function(h){return new Promise(function(d,m){let g=d;t.isImageBitmapLoader===!0&&(g=function(v){const p=new en(v);p.needsUpdate=!0,d(p)}),t.load(Yr.resolveURL(h,r.path),g,void 0,m)})}).then(function(h){return l===!0&&a.revokeObjectURL(c),Li(h,o),h.userData.mimeType=o.mimeType||Tx(o.uri),h}).catch(function(h){throw console.error("THREE.GLTFLoader: Couldn't load texture",c),h});return this.sourceCache[e]=u,u}assignTexture(e,t,n,i){const r=this;return this.getDependency("texture",n.index).then(function(o){if(!o)return null;if(n.texCoord!==void 0&&n.texCoord>0&&(o=o.clone(),o.channel=n.texCoord),r.extensions[xt.KHR_TEXTURE_TRANSFORM]){const a=n.extensions!==void 0?n.extensions[xt.KHR_TEXTURE_TRANSFORM]:void 0;if(a){const c=r.associations.get(o);o=r.extensions[xt.KHR_TEXTURE_TRANSFORM].extendTexture(o,a),r.associations.set(o,c)}}return i!==void 0&&(o.colorSpace=i),e[t]=o,o})}assignFinalMaterial(e){const t=e.geometry;let n=e.material;const i=t.attributes.tangent===void 0,r=t.attributes.color!==void 0,o=t.attributes.normal===void 0;if(e.isPoints){const a="PointsMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new La,ii.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,c.sizeAttenuation=!1,this.cache.add(a,c)),n=c}else if(e.isLine){const a="LineBasicMaterial:"+n.uuid;let c=this.cache.get(a);c||(c=new _a,ii.prototype.copy.call(c,n),c.color.copy(n.color),c.map=n.map,this.cache.add(a,c)),n=c}if(i||r||o){let a="ClonedMaterial:"+n.uuid+":";i&&(a+="derivative-tangents:"),r&&(a+="vertex-colors:"),o&&(a+="flat-shading:");let c=this.cache.get(a);c||(c=n.clone(),r&&(c.vertexColors=!0),o&&(c.flatShading=!0),i&&(c.normalScale&&(c.normalScale.y*=-1),c.clearcoatNormalScale&&(c.clearcoatNormalScale.y*=-1)),this.cache.add(a,c),this.associations.set(c,this.associations.get(n))),n=c}e.material=n}getMaterialType(){return ut}loadMaterial(e){const t=this,n=this.json,i=this.extensions,r=n.materials[e];let o;const a={},c=r.extensions||{},l=[];if(c[xt.KHR_MATERIALS_UNLIT]){const h=i[xt.KHR_MATERIALS_UNLIT];o=h.getMaterialType(),l.push(h.extendParams(a,r,t))}else{const h=r.pbrMetallicRoughness||{};if(a.color=new Pe(1,1,1),a.opacity=1,Array.isArray(h.baseColorFactor)){const d=h.baseColorFactor;a.color.setRGB(d[0],d[1],d[2],tn),a.opacity=d[3]}h.baseColorTexture!==void 0&&l.push(t.assignTexture(a,"map",h.baseColorTexture,Ft)),a.metalness=h.metallicFactor!==void 0?h.metallicFactor:1,a.roughness=h.roughnessFactor!==void 0?h.roughnessFactor:1,h.metallicRoughnessTexture!==void 0&&(l.push(t.assignTexture(a,"metalnessMap",h.metallicRoughnessTexture)),l.push(t.assignTexture(a,"roughnessMap",h.metallicRoughnessTexture))),o=this._invokeOne(function(d){return d.getMaterialType&&d.getMaterialType(e)}),l.push(Promise.all(this._invokeAll(function(d){return d.extendMaterialParams&&d.extendMaterialParams(e,a)})))}r.doubleSided===!0&&(a.side=pn);const u=r.alphaMode||Rc.OPAQUE;if(u===Rc.BLEND?(a.transparent=!0,a.depthWrite=!1):(a.transparent=!1,u===Rc.MASK&&(a.alphaTest=r.alphaCutoff!==void 0?r.alphaCutoff:.5)),r.normalTexture!==void 0&&o!==Wt&&(l.push(t.assignTexture(a,"normalMap",r.normalTexture)),a.normalScale=new Oe(1,1),r.normalTexture.scale!==void 0)){const h=r.normalTexture.scale;a.normalScale.set(h,h)}if(r.occlusionTexture!==void 0&&o!==Wt&&(l.push(t.assignTexture(a,"aoMap",r.occlusionTexture)),r.occlusionTexture.strength!==void 0&&(a.aoMapIntensity=r.occlusionTexture.strength)),r.emissiveFactor!==void 0&&o!==Wt){const h=r.emissiveFactor;a.emissive=new Pe().setRGB(h[0],h[1],h[2],tn)}return r.emissiveTexture!==void 0&&o!==Wt&&l.push(t.assignTexture(a,"emissiveMap",r.emissiveTexture,Ft)),Promise.all(l).then(function(){const h=new o(a);return r.name&&(h.name=r.name),Li(h,r),t.associations.set(h,{materials:e}),r.extensions&&ds(i,h,r),h})}createUniqueName(e){const t=Lt.sanitizeNodeName(e||"");return t in this.nodeNamesUsed?t+"_"+ ++this.nodeNamesUsed[t]:(this.nodeNamesUsed[t]=0,t)}loadGeometries(e){const t=this,n=this.extensions,i=this.primitiveCache;function r(a){return n[xt.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(a,t).then(function(c){return Lh(c,a,t)})}const o=[];for(let a=0,c=e.length;a<c;a++){const l=e[a],u=Ex(l),h=i[u];if(h)o.push(h.promise);else{let d;l.extensions&&l.extensions[xt.KHR_DRACO_MESH_COMPRESSION]?d=r(l):d=Lh(new Ht,l,t),i[u]={primitive:l,promise:d},o.push(d)}}return Promise.all(o)}loadMesh(e){const t=this,n=this.json,i=this.extensions,r=n.meshes[e],o=r.primitives,a=[];for(let c=0,l=o.length;c<l;c++){const u=o[c].material===void 0?Mx(this.cache):this.getDependency("material",o[c].material);a.push(u)}return a.push(t.loadGeometries(o)),Promise.all(a).then(function(c){const l=c.slice(0,c.length-1),u=c[c.length-1],h=[];for(let m=0,g=u.length;m<g;m++){const v=u[m],p=o[m];let f;const E=l[m];if(p.mode===Gn.TRIANGLES||p.mode===Gn.TRIANGLE_STRIP||p.mode===Gn.TRIANGLE_FAN||p.mode===void 0)f=r.isSkinnedMesh===!0?new pv(v,E):new ce(v,E),f.isSkinnedMesh===!0&&f.normalizeSkinWeights(),p.mode===Gn.TRIANGLE_STRIP?f.geometry=Ah(f.geometry,sd):p.mode===Gn.TRIANGLE_FAN&&(f.geometry=Ah(f.geometry,yl));else if(p.mode===Gn.LINES)f=new Cd(v,E);else if(p.mode===Gn.LINE_STRIP)f=new Pa(v,E);else if(p.mode===Gn.LINE_LOOP)f=new _v(v,E);else if(p.mode===Gn.POINTS)f=new ya(v,E);else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: "+p.mode);Object.keys(f.geometry.morphAttributes).length>0&&bx(f,r),f.name=t.createUniqueName(r.name||"mesh_"+e),Li(f,r),p.extensions&&ds(i,f,p),t.assignFinalMaterial(f),h.push(f)}for(let m=0,g=h.length;m<g;m++)t.associations.set(h[m],{meshes:e,primitives:m});if(h.length===1)return r.extensions&&ds(i,h[0],r),h[0];const d=new zt;r.extensions&&ds(i,d,r),t.associations.set(d,{meshes:e});for(let m=0,g=h.length;m<g;m++)d.add(h[m]);return d})}loadCamera(e){let t;const n=this.json.cameras[e],i=n[n.type];if(!i){console.warn("THREE.GLTFLoader: Missing camera parameters.");return}return n.type==="perspective"?t=new rn(ad.radToDeg(i.yfov),i.aspectRatio||1,i.znear||1,i.zfar||2e6):n.type==="orthographic"&&(t=new wa(-i.xmag,i.xmag,i.ymag,-i.ymag,i.znear,i.zfar)),n.name&&(t.name=this.createUniqueName(n.name)),Li(t,n),Promise.resolve(t)}loadSkin(e){const t=this.json.skins[e],n=[];for(let i=0,r=t.joints.length;i<r;i++)n.push(this._loadNodeShallow(t.joints[i]));return t.inverseBindMatrices!==void 0?n.push(this.getDependency("accessor",t.inverseBindMatrices)):n.push(null),Promise.all(n).then(function(i){const r=i.pop(),o=i,a=[],c=[];for(let l=0,u=o.length;l<u;l++){const h=o[l];if(h){a.push(h);const d=new st;r!==null&&d.fromArray(r.array,l*16),c.push(d)}else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.',t.joints[l])}return new Yl(a,c)})}loadAnimation(e){const t=this.json,n=this,i=t.animations[e],r=i.name?i.name:"animation_"+e,o=[],a=[],c=[],l=[],u=[];for(let h=0,d=i.channels.length;h<d;h++){const m=i.channels[h],g=i.samplers[m.sampler],v=m.target,p=v.node,f=i.parameters!==void 0?i.parameters[g.input]:g.input,E=i.parameters!==void 0?i.parameters[g.output]:g.output;v.node!==void 0&&(o.push(this.getDependency("node",p)),a.push(this.getDependency("accessor",f)),c.push(this.getDependency("accessor",E)),l.push(g),u.push(v))}return Promise.all([Promise.all(o),Promise.all(a),Promise.all(c),Promise.all(l),Promise.all(u)]).then(function(h){const d=h[0],m=h[1],g=h[2],v=h[3],p=h[4],f=[];for(let E=0,M=d.length;E<M;E++){const b=d[E],N=m[E],R=g[E],A=v[E],C=p[E];if(b===void 0)continue;b.updateMatrix&&b.updateMatrix();const Y=n._createAnimationTracks(b,N,R,A,C);if(Y)for(let _=0;_<Y.length;_++)f.push(Y[_])}return new Ev(r,void 0,f)})}createNodeMesh(e){const t=this.json,n=this,i=t.nodes[e];return i.mesh===void 0?null:n.getDependency("mesh",i.mesh).then(function(r){const o=n._getNodeRef(n.meshCache,i.mesh,r);return i.weights!==void 0&&o.traverse(function(a){if(a.isMesh)for(let c=0,l=i.weights.length;c<l;c++)a.morphTargetInfluences[c]=i.weights[c]}),o})}loadNode(e){const t=this.json,n=this,i=t.nodes[e],r=n._loadNodeShallow(e),o=[],a=i.children||[];for(let l=0,u=a.length;l<u;l++)o.push(n.getDependency("node",a[l]));const c=i.skin===void 0?Promise.resolve(null):n.getDependency("skin",i.skin);return Promise.all([r,Promise.all(o),c]).then(function(l){const u=l[0],h=l[1],d=l[2];d!==null&&u.traverse(function(m){m.isSkinnedMesh&&m.bind(d,wx)});for(let m=0,g=h.length;m<g;m++)u.add(h[m]);return u})}_loadNodeShallow(e){const t=this.json,n=this.extensions,i=this;if(this.nodeCache[e]!==void 0)return this.nodeCache[e];const r=t.nodes[e],o=r.name?i.createUniqueName(r.name):"",a=[],c=i._invokeOne(function(l){return l.createNodeMesh&&l.createNodeMesh(e)});return c&&a.push(c),r.camera!==void 0&&a.push(i.getDependency("camera",r.camera).then(function(l){return i._getNodeRef(i.cameraCache,r.camera,l)})),i._invokeAll(function(l){return l.createNodeAttachment&&l.createNodeAttachment(e)}).forEach(function(l){a.push(l)}),this.nodeCache[e]=Promise.all(a).then(function(l){let u;if(r.isBone===!0?u=new Rd:l.length>1?u=new zt:l.length===1?u=l[0]:u=new kt,u!==l[0])for(let h=0,d=l.length;h<d;h++)u.add(l[h]);if(r.name&&(u.userData.name=r.name,u.name=o),Li(u,r),r.extensions&&ds(n,u,r),r.matrix!==void 0){const h=new st;h.fromArray(r.matrix),u.applyMatrix4(h)}else r.translation!==void 0&&u.position.fromArray(r.translation),r.rotation!==void 0&&u.quaternion.fromArray(r.rotation),r.scale!==void 0&&u.scale.fromArray(r.scale);return i.associations.has(u)||i.associations.set(u,{}),i.associations.get(u).nodes=e,u}),this.nodeCache[e]}loadScene(e){const t=this.extensions,n=this.json.scenes[e],i=this,r=new zt;n.name&&(r.name=i.createUniqueName(n.name)),Li(r,n),n.extensions&&ds(t,r,n);const o=n.nodes||[],a=[];for(let c=0,l=o.length;c<l;c++)a.push(i.getDependency("node",o[c]));return Promise.all(a).then(function(c){for(let u=0,h=c.length;u<h;u++)r.add(c[u]);const l=u=>{const h=new Map;for(const[d,m]of i.associations)(d instanceof ii||d instanceof en)&&h.set(d,m);return u.traverse(d=>{const m=i.associations.get(d);m!=null&&h.set(d,m)}),h};return i.associations=l(r),r})}_createAnimationTracks(e,t,n,i,r){const o=[],a=e.name?e.name:e.uuid,c=[];qi[r.path]===qi.weights?e.traverse(function(d){d.morphTargetInfluences&&c.push(d.name?d.name:d.uuid)}):c.push(a);let l;switch(qi[r.path]){case qi.weights:l=pr;break;case qi.rotation:l=mr;break;case qi.position:case qi.scale:l=gr;break;default:switch(n.itemSize){case 1:l=pr;break;case 2:case 3:default:l=gr;break}break}const u=i.interpolation!==void 0?yx[i.interpolation]:$r,h=this._getArrayFromAccessor(n);for(let d=0,m=c.length;d<m;d++){const g=new l(c[d]+"."+qi[r.path],t.array,h,u);i.interpolation==="CUBICSPLINE"&&this._createCubicSplineTrackInterpolant(g),o.push(g)}return o}_getArrayFromAccessor(e){let t=e.array;if(e.normalized){const n=Al(t.constructor),i=new Float32Array(t.length);for(let r=0,o=t.length;r<o;r++)i[r]=t[r]*n;t=i}return t}_createCubicSplineTrackInterpolant(e){e.createInterpolant=function(n){const i=this instanceof mr?xx:Ud;return new i(this.times,this.values,this.getValueSize()/3,n)},e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline=!0}}function Rx(s,e,t){const n=e.attributes,i=new Fn;if(n.POSITION!==void 0){const a=t.json.accessors[n.POSITION],c=a.min,l=a.max;if(c!==void 0&&l!==void 0){if(i.set(new L(c[0],c[1],c[2]),new L(l[0],l[1],l[2])),a.normalized){const u=Al(or[a.componentType]);i.min.multiplyScalar(u),i.max.multiplyScalar(u)}}else{console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");return}}else return;const r=e.targets;if(r!==void 0){const a=new L,c=new L;for(let l=0,u=r.length;l<u;l++){const h=r[l];if(h.POSITION!==void 0){const d=t.json.accessors[h.POSITION],m=d.min,g=d.max;if(m!==void 0&&g!==void 0){if(c.setX(Math.max(Math.abs(m[0]),Math.abs(g[0]))),c.setY(Math.max(Math.abs(m[1]),Math.abs(g[1]))),c.setZ(Math.max(Math.abs(m[2]),Math.abs(g[2]))),d.normalized){const v=Al(or[d.componentType]);c.multiplyScalar(v)}a.max(c)}else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")}}i.expandByVector(a)}s.boundingBox=i;const o=new pi;i.getCenter(o.center),o.radius=i.min.distanceTo(i.max)/2,s.boundingSphere=o}function Lh(s,e,t){const n=e.attributes,i=[];function r(o,a){return t.getDependency("accessor",o).then(function(c){s.setAttribute(a,c)})}for(const o in n){const a=wl[o]||o.toLowerCase();a in s.attributes||i.push(r(n[o],a))}if(e.indices!==void 0&&!s.index){const o=t.getDependency("accessor",e.indices).then(function(a){s.setIndex(a)});i.push(o)}return bt.workingColorSpace!==tn&&"COLOR_0"in n&&console.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${bt.workingColorSpace}" not supported.`),Li(s,e),Rx(s,e,t),Promise.all(i).then(function(){return e.targets!==void 0?Sx(s,e.targets,t):s})}class Cx extends Lv{constructor(e){super(e),this.type=An}parse(e){const o=function(C,Y){switch(C){case 1:throw new Error("THREE.RGBELoader: Read Error: "+(Y||""));case 2:throw new Error("THREE.RGBELoader: Write Error: "+(Y||""));case 3:throw new Error("THREE.RGBELoader: Bad File Format: "+(Y||""));default:case 4:throw new Error("THREE.RGBELoader: Memory Error: "+(Y||""))}},h=function(C,Y,_){Y=Y||1024;let H=C.pos,U=-1,D=0,$="",F=String.fromCharCode.apply(null,new Uint16Array(C.subarray(H,H+128)));for(;0>(U=F.indexOf(`
`))&&D<Y&&H<C.byteLength;)$+=F,D+=F.length,H+=128,F+=String.fromCharCode.apply(null,new Uint16Array(C.subarray(H,H+128)));return-1<U?(C.pos+=D+U+1,$+F.slice(0,U)):!1},d=function(C){const Y=/^#\?(\S+)/,_=/^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/,y=/^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/,H=/^\s*FORMAT=(\S+)\s*$/,U=/^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/,D={valid:0,string:"",comments:"",programtype:"RGBE",format:"",gamma:1,exposure:1,width:0,height:0};let $,F;for((C.pos>=C.byteLength||!($=h(C)))&&o(1,"no header found"),(F=$.match(Y))||o(3,"bad initial token"),D.valid|=1,D.programtype=F[1],D.string+=$+`
`;$=h(C),$!==!1;){if(D.string+=$+`
`,$.charAt(0)==="#"){D.comments+=$+`
`;continue}if((F=$.match(_))&&(D.gamma=parseFloat(F[1])),(F=$.match(y))&&(D.exposure=parseFloat(F[1])),(F=$.match(H))&&(D.valid|=2,D.format=F[1]),(F=$.match(U))&&(D.valid|=4,D.height=parseInt(F[1],10),D.width=parseInt(F[2],10)),D.valid&2&&D.valid&4)break}return D.valid&2||o(3,"missing format specifier"),D.valid&4||o(3,"missing image size specifier"),D},m=function(C,Y,_){const y=Y;if(y<8||y>32767||C[0]!==2||C[1]!==2||C[2]&128)return new Uint8Array(C);y!==(C[2]<<8|C[3])&&o(3,"wrong scanline width");const H=new Uint8Array(4*Y*_);H.length||o(4,"unable to allocate buffer space");let U=0,D=0;const $=4*y,F=new Uint8Array(4),te=new Uint8Array($);let z=_;for(;z>0&&D<C.byteLength;){D+4>C.byteLength&&o(1),F[0]=C[D++],F[1]=C[D++],F[2]=C[D++],F[3]=C[D++],(F[0]!=2||F[1]!=2||(F[2]<<8|F[3])!=y)&&o(3,"bad rgbe scanline format");let ue=0,le;for(;ue<$&&D<C.byteLength;){le=C[D++];const Qe=le>128;if(Qe&&(le-=128),(le===0||ue+le>$)&&o(3,"bad scanline data"),Qe){const et=C[D++];for(let Q=0;Q<le;Q++)te[ue++]=et}else te.set(C.subarray(D,D+le),ue),ue+=le,D+=le}const we=y;for(let Qe=0;Qe<we;Qe++){let et=0;H[U]=te[Qe+et],et+=y,H[U+1]=te[Qe+et],et+=y,H[U+2]=te[Qe+et],et+=y,H[U+3]=te[Qe+et],U+=4}z--}return H},g=function(C,Y,_,y){const H=C[Y+3],U=Math.pow(2,H-128)/255;_[y+0]=C[Y+0]*U,_[y+1]=C[Y+1]*U,_[y+2]=C[Y+2]*U,_[y+3]=1},v=function(C,Y,_,y){const H=C[Y+3],U=Math.pow(2,H-128)/255;_[y+0]=Lo.toHalfFloat(Math.min(C[Y+0]*U,65504)),_[y+1]=Lo.toHalfFloat(Math.min(C[Y+1]*U,65504)),_[y+2]=Lo.toHalfFloat(Math.min(C[Y+2]*U,65504)),_[y+3]=Lo.toHalfFloat(1)},p=new Uint8Array(e);p.pos=0;const f=d(p),E=f.width,M=f.height,b=m(p.subarray(p.pos),E,M);let N,R,A;switch(this.type){case Ln:A=b.length/4;const C=new Float32Array(A*4);for(let _=0;_<A;_++)g(b,_*4,C,_*4);N=C,R=Ln;break;case An:A=b.length/4;const Y=new Uint16Array(A*4);for(let _=0;_<A;_++)v(b,_*4,Y,_*4);N=Y,R=An;break;default:throw new Error("THREE.RGBELoader: Unsupported type: "+this.type)}return{width:E,height:M,data:N,header:f.string,gamma:f.gamma,exposure:f.exposure,type:R}}setDataType(e){return this.type=e,this}load(e,t,n,i){function r(o,a){switch(o.type){case Ln:case An:o.colorSpace=tn,o.minFilter=Qt,o.magFilter=Qt,o.generateMipmaps=!1,o.flipY=!0;break}t&&t(o,a)}return super.load(e,r,n,i)}}const Pc=new WeakMap;class Px extends Ji{constructor(e){super(e),this.decoderPath="",this.decoderConfig={},this.decoderBinary=null,this.decoderPending=null,this.workerLimit=4,this.workerPool=[],this.workerNextTaskID=1,this.workerSourceURL="",this.defaultAttributeIDs={position:"POSITION",normal:"NORMAL",color:"COLOR",uv:"TEX_COORD"},this.defaultAttributeTypes={position:"Float32Array",normal:"Float32Array",color:"Float32Array",uv:"Float32Array"}}setDecoderPath(e){return this.decoderPath=e,this}setDecoderConfig(e){return this.decoderConfig=e,this}setWorkerLimit(e){return this.workerLimit=e,this}load(e,t,n,i){const r=new eo(this.manager);r.setPath(this.path),r.setResponseType("arraybuffer"),r.setRequestHeader(this.requestHeader),r.setWithCredentials(this.withCredentials),r.load(e,o=>{this.parse(o,t,i)},n,i)}parse(e,t,n=()=>{}){this.decodeDracoFile(e,t,null,null,Ft,n).catch(n)}decodeDracoFile(e,t,n,i,r=tn,o=()=>{}){const a={attributeIDs:n||this.defaultAttributeIDs,attributeTypes:i||this.defaultAttributeTypes,useUniqueIDs:!!n,vertexColorSpace:r};return this.decodeGeometry(e,a).then(t).catch(o)}decodeGeometry(e,t){const n=JSON.stringify(t);if(Pc.has(e)){const c=Pc.get(e);if(c.key===n)return c.promise;if(e.byteLength===0)throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.")}let i;const r=this.workerNextTaskID++,o=e.byteLength,a=this._getWorker(r,o).then(c=>(i=c,new Promise((l,u)=>{i._callbacks[r]={resolve:l,reject:u},i.postMessage({type:"decode",id:r,taskConfig:t,buffer:e},[e])}))).then(c=>this._createGeometry(c.geometry));return a.catch(()=>!0).then(()=>{i&&r&&this._releaseTask(i,r)}),Pc.set(e,{key:n,promise:a}),a}_createGeometry(e){const t=new Ht;e.index&&t.setIndex(new gn(e.index.array,1));for(let n=0;n<e.attributes.length;n++){const i=e.attributes[n],r=i.name,o=i.array,a=i.itemSize,c=new gn(o,a);r==="color"&&(this._assignVertexColorSpace(c,i.vertexColorSpace),c.normalized=!(o instanceof Float32Array)),t.setAttribute(r,c)}return t}_assignVertexColorSpace(e,t){if(t!==Ft)return;const n=new Pe;for(let i=0,r=e.count;i<r;i++)n.fromBufferAttribute(e,i),bt.toWorkingColorSpace(n,Ft),e.setXYZ(i,n.r,n.g,n.b)}_loadLibrary(e,t){const n=new eo(this.manager);return n.setPath(this.decoderPath),n.setResponseType(t),n.setWithCredentials(this.withCredentials),new Promise((i,r)=>{n.load(e,i,void 0,r)})}preload(){return this._initDecoder(),this}_initDecoder(){if(this.decoderPending)return this.decoderPending;const e=typeof WebAssembly!="object"||this.decoderConfig.type==="js",t=[];return e?t.push(this._loadLibrary("draco_decoder.js","text")):(t.push(this._loadLibrary("draco_wasm_wrapper.js","text")),t.push(this._loadLibrary("draco_decoder.wasm","arraybuffer"))),this.decoderPending=Promise.all(t).then(n=>{const i=n[0];e||(this.decoderConfig.wasmBinary=n[1]);const r=Lx.toString(),o=["/* draco decoder */",i,"","/* worker */",r.substring(r.indexOf("{")+1,r.lastIndexOf("}"))].join(`
`);this.workerSourceURL=URL.createObjectURL(new Blob([o]))}),this.decoderPending}_getWorker(e,t){return this._initDecoder().then(()=>{if(this.workerPool.length<this.workerLimit){const i=new Worker(this.workerSourceURL);i._callbacks={},i._taskCosts={},i._taskLoad=0,i.postMessage({type:"init",decoderConfig:this.decoderConfig}),i.onmessage=function(r){const o=r.data;switch(o.type){case"decode":i._callbacks[o.id].resolve(o);break;case"error":i._callbacks[o.id].reject(o);break;default:console.error('THREE.DRACOLoader: Unexpected message, "'+o.type+'"')}},this.workerPool.push(i)}else this.workerPool.sort(function(i,r){return i._taskLoad>r._taskLoad?-1:1});const n=this.workerPool[this.workerPool.length-1];return n._taskCosts[e]=t,n._taskLoad+=t,n})}_releaseTask(e,t){e._taskLoad-=e._taskCosts[t],delete e._callbacks[t],delete e._taskCosts[t]}debug(){console.log("Task load: ",this.workerPool.map(e=>e._taskLoad))}dispose(){for(let e=0;e<this.workerPool.length;++e)this.workerPool[e].terminate();return this.workerPool.length=0,this.workerSourceURL!==""&&URL.revokeObjectURL(this.workerSourceURL),this}}function Lx(){let s,e;onmessage=function(o){const a=o.data;switch(a.type){case"init":s=a.decoderConfig,e=new Promise(function(u){s.onModuleLoaded=function(h){u({draco:h})},DracoDecoderModule(s)});break;case"decode":const c=a.buffer,l=a.taskConfig;e.then(u=>{const h=u.draco,d=new h.Decoder;try{const m=t(h,d,new Int8Array(c),l),g=m.attributes.map(v=>v.array.buffer);m.index&&g.push(m.index.array.buffer),self.postMessage({type:"decode",id:a.id,geometry:m},g)}catch(m){console.error(m),self.postMessage({type:"error",id:a.id,error:m.message})}finally{h.destroy(d)}});break}};function t(o,a,c,l){const u=l.attributeIDs,h=l.attributeTypes;let d,m;const g=a.GetEncodedGeometryType(c);if(g===o.TRIANGULAR_MESH)d=new o.Mesh,m=a.DecodeArrayToMesh(c,c.byteLength,d);else if(g===o.POINT_CLOUD)d=new o.PointCloud,m=a.DecodeArrayToPointCloud(c,c.byteLength,d);else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");if(!m.ok()||d.ptr===0)throw new Error("THREE.DRACOLoader: Decoding failed: "+m.error_msg());const v={index:null,attributes:[]};for(const p in u){const f=self[h[p]];let E,M;if(l.useUniqueIDs)M=u[p],E=a.GetAttributeByUniqueId(d,M);else{if(M=a.GetAttributeId(d,o[u[p]]),M===-1)continue;E=a.GetAttribute(d,M)}const b=i(o,a,d,p,f,E);p==="color"&&(b.vertexColorSpace=l.vertexColorSpace),v.attributes.push(b)}return g===o.TRIANGULAR_MESH&&(v.index=n(o,a,d)),o.destroy(d),v}function n(o,a,c){const u=c.num_faces()*3,h=u*4,d=o._malloc(h);a.GetTrianglesUInt32Array(c,h,d);const m=new Uint32Array(o.HEAPF32.buffer,d,u).slice();return o._free(d),{array:m,itemSize:1}}function i(o,a,c,l,u,h){const d=h.num_components(),g=c.num_points()*d,v=g*u.BYTES_PER_ELEMENT,p=r(o,u),f=o._malloc(v);a.GetAttributeDataArrayForAllPoints(c,h,p,v,f);const E=new u(o.HEAPF32.buffer,f,g).slice();return o._free(f),{name:l,array:E,itemSize:d}}function r(o,a){switch(a){case Float32Array:return o.DT_FLOAT32;case Int8Array:return o.DT_INT8;case Int16Array:return o.DT_INT16;case Int32Array:return o.DT_INT32;case Uint8Array:return o.DT_UINT8;case Uint16Array:return o.DT_UINT16;case Uint32Array:return o.DT_UINT32}}}class Ix extends rr{constructor(){super();const e=new St;e.deleteAttribute("uv");const t=new ut({side:mn}),n=new ut,i=new $l(16777215,900,28,2);i.position.set(.418,16.199,.3),this.add(i);const r=new ce(e,t);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);const o=new ce(e,n);o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),this.add(o);const a=new ce(e,n);a.position.set(-5.607,-.754,-.758),a.rotation.set(0,.994,0),a.scale.set(1.97,1.534,3.955),this.add(a);const c=new ce(e,n);c.position.set(6.167,.857,7.803),c.rotation.set(0,.561,0),c.scale.set(3.927,6.285,3.687),this.add(c);const l=new ce(e,n);l.position.set(-2.017,.018,6.124),l.rotation.set(0,.333,0),l.scale.set(2.002,4.566,2.064),this.add(l);const u=new ce(e,n);u.position.set(2.291,-.756,-2.621),u.rotation.set(0,-.286,0),u.scale.set(1.546,1.552,1.496),this.add(u);const h=new ce(e,n);h.position.set(-2.193,-.369,-5.547),h.rotation.set(0,.516,0),h.scale.set(3.875,3.487,2.986),this.add(h);const d=new ce(e,Zs(50));d.position.set(-16.116,14.37,8.208),d.scale.set(.1,2.428,2.739),this.add(d);const m=new ce(e,Zs(50));m.position.set(-16.109,18.021,-8.207),m.scale.set(.1,2.425,2.751),this.add(m);const g=new ce(e,Zs(17));g.position.set(14.904,12.198,-1.832),g.scale.set(.15,4.265,6.331),this.add(g);const v=new ce(e,Zs(43));v.position.set(-.462,8.89,14.52),v.scale.set(4.38,5.441,.088),this.add(v);const p=new ce(e,Zs(20));p.position.set(3.235,11.486,-12.541),p.scale.set(2.5,2,.1),this.add(p);const f=new ce(e,Zs(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){const e=new Set;this.traverse(t=>{t.isMesh&&(e.add(t.geometry),e.add(t.material))});for(const t of e)t.dispose()}}function Zs(s){const e=new Wt;return e.color.setScalar(s),e}const Nd={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

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


		}`};class Sr{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const Dx=new wa(-1,1,1,-1,0,1);class Ux extends Ht{constructor(){super(),this.setAttribute("position",new At([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new At([0,2,0,0,2,0],2))}}const Nx=new Ux;class Ql{constructor(e){this._mesh=new ce(Nx,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,Dx)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class Rl extends Sr{constructor(e,t){super(),this.textureID=t!==void 0?t:"tDiffuse",e instanceof Xt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=Jr.clone(e.uniforms),this.material=new Xt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this.fsQuad=new Ql(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this.fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class Ih extends Sr{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),r=e.state;r.buffers.color.setMask(!1),r.buffers.depth.setMask(!1),r.buffers.color.setLocked(!0),r.buffers.depth.setLocked(!0);let o,a;this.inverse?(o=0,a=1):(o=1,a=0),r.buffers.stencil.setTest(!0),r.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),r.buffers.stencil.setFunc(i.ALWAYS,o,4294967295),r.buffers.stencil.setClear(a),r.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),r.buffers.color.setLocked(!1),r.buffers.depth.setLocked(!1),r.buffers.color.setMask(!0),r.buffers.depth.setMask(!0),r.buffers.stencil.setLocked(!1),r.buffers.stencil.setFunc(i.EQUAL,1,4294967295),r.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),r.buffers.stencil.setLocked(!0)}}class Fx extends Sr{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class Ox{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new Oe);this._width=n.width,this._height=n.height,t=new qn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:An}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new Rl(Nd),this.copyPass.material.blending=Ui,this.clock=new Ov}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){e===void 0&&(e=this.clock.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,r=this.passes.length;i<r;i++){const o=this.passes[i];if(o.enabled!==!1){if(o.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),o.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),o.needsSwap){if(n){const a=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(a.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(a.EQUAL,1,4294967295)}this.swapBuffers()}Ih!==void 0&&(o instanceof Ih?n=!0:o instanceof Fx&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new Oe);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let r=0;r<this.passes.length;r++)this.passes[r].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class Dh extends Sr{constructor(e,t,n=null,i=null,r=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=r,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this._oldClearColor=new Pe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let r,o;this.overrideMaterial!==null&&(o=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(r=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(r),this.overrideMaterial!==null&&(this.scene.overrideMaterial=o),e.autoClear=i}}const Bx={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Pe(0)},defaultOpacity:{value:0}},vertexShader:`

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

		}`};class _r extends Sr{constructor(e,t,n,i){super(),this.strength=t!==void 0?t:1,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new Oe(e.x,e.y):new Oe(256,256),this.clearColor=new Pe(0,0,0),this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);this.renderTargetBright=new qn(r,o,{type:An}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){const d=new qn(r,o,{type:An});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const m=new qn(r,o,{type:An});m.texture.name="UnrealBloomPass.v"+h,m.texture.generateMipmaps=!1,this.renderTargetsVertical.push(m),r=Math.round(r/2),o=Math.round(o/2)}const a=Bx;this.highPassUniforms=Jr.clone(a.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new Xt({uniforms:this.highPassUniforms,vertexShader:a.vertexShader,fragmentShader:a.fragmentShader}),this.separableBlurMaterials=[];const c=[3,5,7,9,11];r=Math.round(this.resolution.x/2),o=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this.getSeperableBlurMaterial(c[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new Oe(1/r,1/o),r=Math.round(r/2),o=Math.round(o/2);this.compositeMaterial=this.getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1),new L(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors;const u=Nd;this.copyUniforms=Jr.clone(u.uniforms),this.blendMaterial=new Xt({uniforms:this.copyUniforms,vertexShader:u.vertexShader,fragmentShader:u.fragmentShader,blending:ui,depthTest:!1,depthWrite:!1,transparent:!0}),this.enabled=!0,this.needsSwap=!1,this._oldClearColor=new Pe,this.oldClearAlpha=1,this.basic=new Wt,this.fsQuad=new Ql(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this.basic.dispose(),this.fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let r=0;r<this.nMips;r++)this.renderTargetsHorizontal[r].setSize(n,i),this.renderTargetsVertical[r].setSize(n,i),this.separableBlurMaterials[r].uniforms.invSize.value=new Oe(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,r){e.getClearColor(this._oldClearColor),this.oldClearAlpha=e.getClearAlpha();const o=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),r&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this.fsQuad.material=this.basic,this.basic.map=n.texture,e.setRenderTarget(null),e.clear(),this.fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this.fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this.fsQuad.render(e);let a=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this.fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=a.texture,this.separableBlurMaterials[c].uniforms.direction.value=_r.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this.fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=_r.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this.fsQuad.render(e),a=this.renderTargetsVertical[c];this.fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this.fsQuad.render(e),this.fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,r&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(n),this.fsQuad.render(e)),e.setClearColor(this._oldClearColor,this.oldClearAlpha),e.autoClear=o}getSeperableBlurMaterial(e){const t=[];for(let n=0;n<e;n++)t.push(.39894*Math.exp(-.5*n*n/(e*e))/e);return new Xt({defines:{KERNEL_RADIUS:e},uniforms:{colorTexture:{value:null},invSize:{value:new Oe(.5,.5)},direction:{value:new Oe(.5,.5)},gaussianCoefficients:{value:t}},vertexShader:`varying vec2 vUv;
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
				}`})}getCompositeMaterial(e){return new Xt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`varying vec2 vUv;
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
				}`})}}_r.BlurDirectionX=new Oe(1,0);_r.BlurDirectionY=new Oe(0,1);const zx={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
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

		}`};class kx extends Sr{constructor(){super();const e=zx;this.uniforms=Jr.clone(e.uniforms),this.material=new ua({name:e.name,uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader}),this.fsQuad=new Ql(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},bt.getTransfer(this._outputColorSpace)===Bt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vh?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Gh?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Wh?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ul?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Xh?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qh&&(this.material.defines.NEUTRAL_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this.fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this.fsQuad.render(e))}dispose(){this.material.dispose(),this.fsQuad.dispose()}}class no extends ce{constructor(){super(no.Geometry,new Wt({opacity:0,transparent:!0})),this.isLensflare=!0,this.type="Lensflare",this.frustumCulled=!1,this.renderOrder=1/0;const e=new L,t=new L,n=new yh(16,16),i=new yh(16,16);let r=si;const o=no.Geometry,a=new ua({uniforms:{scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!0,depthWrite:!1,transparent:!1}),c=new ua({uniforms:{map:{value:n},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

				}`,depthTest:!1,depthWrite:!1,transparent:!1}),l=new ce(o,a),u=[],h=tr.Shader,d=new ua({name:h.name,uniforms:{map:{value:null},occlusionMap:{value:i},color:{value:new Pe(16777215)},scale:{value:new Oe},screenPosition:{value:new L}},vertexShader:h.vertexShader,fragmentShader:h.fragmentShader,blending:ui,transparent:!0,depthWrite:!1}),m=new ce(o,d);this.addElement=function(E){u.push(E)};const g=new Oe,v=new Oe,p=new Yv,f=new wt;this.onBeforeRender=function(E,M,b){E.getCurrentViewport(f);const N=E.getRenderTarget(),R=N!==null?N.texture.type:si;r!==R&&(n.dispose(),i.dispose(),n.type=i.type=R,r=R);const A=f.w/f.z,C=f.z/2,Y=f.w/2;let _=16/f.w;if(g.set(_*A,_),p.min.set(f.x,f.y),p.max.set(f.x+(f.z-16),f.y+(f.w-16)),t.setFromMatrixPosition(this.matrixWorld),t.applyMatrix4(b.matrixWorldInverse),!(t.z>0)&&(e.copy(t).applyMatrix4(b.projectionMatrix),v.x=f.x+e.x*C+C-8,v.y=f.y+e.y*Y+Y-8,p.containsPoint(v))){E.copyFramebufferToTexture(n,v);let y=a.uniforms;y.scale.value=g,y.screenPosition.value=e,E.renderBufferDirect(b,null,o,a,l,null),E.copyFramebufferToTexture(i,v),y=c.uniforms,y.scale.value=g,y.screenPosition.value=e,E.renderBufferDirect(b,null,o,c,l,null);const H=-e.x*2,U=-e.y*2;for(let D=0,$=u.length;D<$;D++){const F=u[D],te=d.uniforms;te.color.value.copy(F.color),te.map.value=F.texture,te.screenPosition.value.x=e.x+H*F.distance,te.screenPosition.value.y=e.y+U*F.distance,_=F.size/f.w;const z=f.w/f.z;te.scale.value.set(_*z,_),d.uniformsNeedUpdate=!0,E.renderBufferDirect(b,null,o,d,m,null)}}},this.dispose=function(){a.dispose(),c.dispose(),d.dispose(),n.dispose(),i.dispose();for(let E=0,M=u.length;E<M;E++)u[E].texture.dispose()}}}class tr{constructor(e,t=1,n=0,i=new Pe(16777215)){this.texture=e,this.size=t,this.distance=n,this.color=i}}tr.Shader={name:"LensflareElementShader",uniforms:{map:{value:null},occlusionMap:{value:null},color:{value:null},scale:{value:null},screenPosition:{value:null}},vertexShader:`

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

		}`};no.Geometry=(function(){const s=new Ht,e=new Float32Array([-1,-1,0,0,0,1,-1,0,1,0,1,1,0,1,1,-1,1,0,0,1]),t=new ql(e,5);return s.setIndex([0,1,2,0,2,3]),s.setAttribute("position",new ys(t,3,0,!1)),s.setAttribute("uv",new ys(t,2,3,!1)),s})();const Cl=[{id:"factory",label:"A new beginning",phase:"01 / Departure",title:"Extraordinary.<br>From the start.",copy:"Research begins with a question. Astreia is developing a path to study it in microgravity—and bring the results home.",detail:"Tessera–1 / Mission preparation"},{id:"integration",label:"Payload integration",phase:"01 / Departure",title:"The next stop.<br>Somewhere above.",copy:"A research payload. A different environment. Preparing the systems that connect a question on Earth to an experiment in orbit.",detail:"Launch vehicle / Payload integration"},{id:"launch",label:"Liftoff",phase:"01 / Departure",title:"Leave Earth.<br>Keep the purpose.",copy:"The destination is microgravity. The purpose is to explore what different conditions could make possible for research on Earth.",detail:"Launch / Ascent"},{id:"separation",label:"Stage & fairing separation",phase:"01 / Departure",title:"Let go.<br>Go further.",copy:"The launch vehicle releases its payload. The next stage of the journey is research and manufacturing in orbit.",detail:"Stage separation / Fairing release"},{id:"orbit",label:"Orbital operations",phase:"02 / Discovery",title:"A factory.<br>Above it all.",copy:"Tessera–1 is being developed for research and manufacturing in microgravity. Study what changes. Test what can be made.",detail:"Tessera–1 / Orbital manufacturing"},{id:"bioreactor",label:"Inside the bioreactor",phase:"02 / Discovery",title:"Change the conditions.<br>Ask new questions.",copy:"Reduced settling and convection create different conditions for biological research. Controlled experiments compare the results with Earth.",detail:"Inside Tessera / Biological research"},{id:"protein",label:"Molecular discovery",phase:"02 / Discovery",title:"Look closer.<br>Learn what changes.",copy:"From protein structure to crystal growth: exploring processes relevant to medicine, with comparisons and further testing on Earth.",detail:"Molecular scale / Protein study"},{id:"medicine",label:"The research payload",phase:"02 / Discovery",title:"Bring the research<br>back to Earth.",copy:"An orbital experiment is one step. The work continues with sample analysis, comparison and further development on Earth.",detail:"Research payload / Return preparation"},{id:"payload",label:"Into Thor",phase:"03 / Return",title:"Precious cargo.<br>Purposeful return.",copy:"Thor XR–1 is being developed to bring research samples and materials back from orbit. The return is part of the experiment.",detail:"Thor XR–1 / Payload transfer"},{id:"reentry",label:"Hypersonic reentry",phase:"03 / Return",title:"Through the fire.<br>Back to Earth.",copy:"Returning through the atmosphere reconnects orbital research with the laboratories that can examine its results.",detail:"Thor XR–1 / Atmospheric reentry"},{id:"parachute",label:"Parachute descent",phase:"03 / Return",title:"A softer<br>arrival.",copy:"A controlled descent is part of the return sequence. The research payload remains at the centre of the mission.",detail:"Descent / Parachute deployment"},{id:"splashdown",label:"Splashdown",phase:"03 / Return",title:"Back on Earth.<br>Work still ahead.",copy:"Splashdown marks the handover from flight to recovery. The next destination is the team that will study the samples.",detail:"Ocean recovery / Splashdown"},{id:"recovery",label:"Air & sea recovery",phase:"03 / Return",title:"A coordinated<br>return.",copy:"Recovery connects the vehicle and its payload with transport, inspection and delivery to the research team.",detail:"Recovery / Air & sea operations"},{id:"warehouse",label:"Pharma logistics",phase:"04 / For life",title:"From orbit.<br>To the laboratory.",copy:"Recovered samples return to analysis and quality checks. Scientists compare the results and decide what to investigate next.",detail:"On Earth / Pharmaceutical development"},{id:"hospital",label:"For life on Earth",phase:"04 / For life",title:"Further out.<br>Closer to life.",copy:"Research in orbit serves an ambition on Earth: helping scientists understand disease and explore new ways to make medicines.",detail:"The destination / Life on Earth"}],Hx=s=>Math.max(0,Math.min(1,s)),Pl=s=>(s=Hx(s),s*s*(3-2*s)),Ce=(s=0,e=0,t=0,n=1,i=0,r=0,o=0,a=1)=>[s,e,t,n,i,r,o,a],Lc={factory:[[0,Ce(0,-3.2,0,1.3,0,-.2)],[.55,Ce(0,-3.2,1,1.3,0,-.2)],[1.2,Ce(0,-4,-3,.7,0,-.2,0,0)]],tessera:[[0,Ce(0,.1,0,7.2,.14,-.36)],[.45,Ce(0,.1,1,7.2,.14,-.24)],[1,Ce(0,3.3,0,.48,.1,-.2)],[1.65,Ce(0,3.3,0,.48,.1,-.2,0,0)],[2.95,Ce(0,3.3,0,.48,.1,-.2,0,0)],[3.2,Ce(0,3.2,0,.48,.1,-.2)],[3.65,Ce(.8,2,1,2.5,.2,-.4)],[4,Ce(0,.3,0,7.7,.18,-.4,.03)],[4.55,Ce(0,.2,1,8.5,.12,-.08)],[5,Ce(0,0,3,11,.1,0,0,0)]],rocket:[[.6,Ce(0,0,0,1,0,0,0,0)],[1,Ce(0,0,0,1,0,-.15)],[1.6,Ce(0,-.2,0,1,0,-.15)],[2,Ce(0,-.287,0,1.2,0,-.15,0)],[2.6,Ce(0,-.287,0,1.2,0,-.15,0)],[3,Ce(0,.3,0,1,0,-.2,-.28)],[3.6,Ce(-1,-1,-1,.9,0,-.2,-.5)],[4,Ce(-3,-6,-4,.6,0,-.2,-.7,0)]],earth:[[0,Ce(0,0,0,1,0,0,0,0)],[14,Ce(0,0,0,1,0,0,0,0)]],reactor:[[4.65,Ce(0,0,0,.3,0,0,0,0)],[5,Ce(0,.4,0,1.35,.06,-.12)],[5.5,Ce(0,.3,1,1.55,.05,.1)],[6,Ce(0,0,3,2,0,.1,0,0)]],protein:[[5.5,Ce(0,0,0,.1,0,0,0,0)],[6,Ce(0,.5,0,1.4,.1,-.2,Math.PI)],[6.5,Ce(0,.5,0,1.5,.2,.4,Math.PI)],[7,Ce(0,0,0,.15,.3,.8,Math.PI,0)]],vial:[[6.55,Ce(0,.2,0,2.2,0,0,0,0)],[7,Ce(0,.3,0,2.15,.05,-.4,-.04)],[7.6,Ce(0,1.4,0,1.6,.1,-.3,-.15)],[8,Ce(.2,1.2,.3,.45,0,-.3,-.2)],[8.55,Ce(.3,-.3,0,.3,0,-.3,-.2,0)],[12.65,Ce(0,-1,0,.8,0,-.3,0,0)],[13,Ce(0,-1.3,0,1.5,.05,-.3)],[14,Ce(3,-.6,0,1.4,.05,-.3)]],thor:[[7.6,Ce(0,-1.2,0,6.5,1.15,.1,.1,0)],[8,Ce(0,-.4,0,11.5,1.05,.12,.1)],[8.6,Ce(0,.3,0,11.7,.95,.18,.15)],[9,Ce(-.4,.6,0,12.5,1.12,-.08,.2)],[9.4,Ce(.3,.3,0,10,1.1,.28,.08)],[9.8,Ce(0,-.4,0,6,.72,.1,-.08)],[10,Ce(0,-1.1,0,4,.65,.1,.02)],[10.6,Ce(0,-1.2,0,4,.65,.1,-.04)],[11,Ce(0,-1.8,0,4.5,.6,.15,.01)],[11.4,Ce(0,-1.85,0,4.5,.55,.15,-.015)],[12,Ce(0,-.65,0,3.2,.7,.12,.03)],[12.6,Ce(0,-1.65,0,3.2,.7,.12,.03)],[13,Ce(-1,-2,-3,1.2,.7,.12,.03,0)]],hatch:[[7.7,Ce(.4,0,.1,1,1.05,.12,.1,0)],[8,Ce(.45,.95,.3,1.4,1.05,.12,-.6)],[8.6,Ce(.4,-.03,.35,1,1.05,.12,.15,0)]],chute:[[9.65,Ce(0,1.8,0,.05,0,0,0,0)],[10,Ce(0,2.7,0,1.15,0,0,.03)],[10.65,Ce(0,1.6,0,1.15,0,0,-.04)],[11.1,Ce(3,-1.2,0,.3,0,0,-1.3,0)]],ocean:[[10.7,Ce(0,-2.05,0,1,0,0,0,0)],[11,Ce(0,-2.05,0,1,0,0)],[12,Ce(0,-2.4,0,1,0,0)],[12.7,Ce(0,-2.4,0,1,0,0,0,0)]],recovery:[[11.35,Ce(4,0,-2,1,0,-.2,0,0)],[12,Ce(0,0,0,1.15,0,-.2)],[12.65,Ce(0,-.3,0,1.15,0,-.2)],[13,Ce(-3,-3,-4,.6,0,-.2,0,0)]],warehouse:[[0,Ce(0,0,0,1,0,0,0,0)],[14,Ce(0,0,0,1,0,0,0,0)]],hospital:[[0,Ce(0,0,0,1,0,0,0,0)],[14,Ce(0,0,0,1,0,0,0,0)]]};function Yi(s,e){if(e<s[0][0]||e>s.at(-1)[0]){const c=[...e<s[0][0]?s[0][1]:s.at(-1)[1]];return c[7]=0,c}let t=0;for(;t<s.length-2&&e>s[t+1][0];)t++;const[n,i]=s[t],[r,o]=s[Math.min(t+1,s.length-1)],a=r===n?0:Pl((e-n)/(r-n));return i.map((c,l)=>c+(o[l]-c)*a)}function Vx(s){return Pl((s-8.6)/.35)*(1-Pl((s-9.45)/.45))}const Gx=[["factory",120,"hangar","painted-dissolve","iris"],["integration",160,"hangar","iris","door"],["launch",220,"cape","door","ascent"],["separation",220,"orbit","ascent","scale-match"],["orbit",220,"orbit","scale-match","push-through"],["bioreactor",130,"bio-black","push-through","push-through"],["protein",420,"bio-black","push-through","scale-match"],["medicine",120,"bio-black","scale-match","iris"],["payload",180,"orbit","iris","scale-match"],["reentry",220,"orbit","scale-match","painted-dissolve"],["parachute",180,"ocean","painted-dissolve","scale-match"],["splashdown",150,"ocean","scale-match","scale-match"],["recovery",200,"ocean","scale-match","case"],["warehouse",130,"warehouse","case","window"],["hospital",200,"hospital","window","painted-dissolve"]];let Ic=0;const Ma=Gx.map(([s,e,t,n,i],r)=>{const o=Ic;return Ic+=e,{id:s,length:e,start:o,end:Ic,pin:r!==14,plate:t,in:n,out:i,reveal:r===14?[.4,.58]:[.34,.54]}}),Uh=s=>Math.max(0,Math.min(1,s));function Fd(s,e,t,n){const i=t.replace(/<br\s*\/?>/g," "),r=[];s.replaceChildren(),s.setAttribute("aria-label",i);for(const o of i.split(/(\s+)/)){if(!o)continue;const a=document.createElement("span");if(a.setAttribute("aria-hidden","true"),!o.trim())a.className="reveal-space",a.textContent=o,r.push(a);else{a.className="reveal-token";for(const c of o){const l=document.createElement("span");l.className="reveal-word",l.textContent=c,a.append(l),r.push(l)}}s.append(a)}return e.textContent=n,r}function Od(s,e,t,[n,i],r=1,o=!1){s.forEach((a,c)=>{const l=c/Math.max(1,s.length-1),u=Uh((t-n-l*(i-n))/.14);a.style.opacity=String(u*r),a.style.transform=`translateY(${o?0:(1-u)*9}px)`}),e.style.opacity=String(Uh((t-i-.02)/.15)*r)}const Wx=[[.535,.431],[.535,.557]];function Xx(s){const e=Math.cos(s[6]),t=Math.sin(s[6]);return Wx.map(([n,i])=>{const r=(n-.5)*1.14*s[3],o=(.5-i)*1.14*s[3];return[s[0]+r*e-o*t,s[1]+r*t+o*e]})}const qx=s=>Math.max(0,Math.min(1,s)),Yx=s=>{const e=qx(s);return e*e*e*(e*(e*6-15)+10)},Ll={start:4.16,end:5.02},jx=Ma[5].length/Ma[4].length,Nh=s=>s<=4.5?s-Ll.start:4.5-Ll.start+(s-4.5)*jx;function Kx(s){const e=Math.max(0,Math.min(1,Nh(s)/Nh(Ll.end))),t=Yx((e-.42)/.5);return{progress:e,interior:t,reactorScale:.92+.26*t}}const dn=s=>{const e=Math.max(0,Math.min(1,s));return e*e*(3-2*e)},Fe=(s=0,e=0,t=1,n=0,i=1)=>[s,e,0,t,0,0,n,i],$x={tessera:[[0,Fe(0,.1,6.4)],[.45,Fe(0,.1,6.4)],[1,Fe(0,0,3.2)],[1.28,Fe(0,0,3.2)],[1.48,Fe(0,1.4,2,0,0)],[2.98,Fe(0,3.6,.65,0,0)],[3.12,Fe(0,3.6,.65)],[3.45,Fe(0,2.9,1.6)],[3.8,Fe(0,.5,5.5)],[4.1,Fe(0,.35,7.5)],[4.55,Fe(0,.35,7.5)],[5,Fe(0,0,8.4,0,0)]],rocket:[[1.48,Fe(0,-2,.55,0,0)],[1.72,Fe(0,-.3,1.05)],[2.05,Fe(0,-.3,1.05)],[2.3,Fe(.2,.1,1,-.12)],[2.5,Fe(.8,.7,.88,-.38)],[2.65,Fe(.8,.7,.88,-.38,0)]],booster:[[2.5,Fe(.11,-1.02,.88,-.38,0)],[2.65,Fe(.11,-1.02,.88,-.38)],[3.05,Fe(-.8,-2.3,1,-.18)],[3.6,Fe(-3,-5,.85,-.32)],[3.85,Fe(-5,-8,.7,-.42,0)]],"upper-stage":[[2.5,Fe(1.87,3.37,.88,-.38,0)],[2.65,Fe(1.87,3.37,.88,-.38)],[2.98,Fe(0,3.35,1.05)],[3.08,Fe(0,3.35,1.05,0,0)]],"second-stage":[[2.98,Fe(0,2.45,1.05,0,0)],[3.08,Fe(0,2.45,1.05)],[3.35,Fe(0,1.4,1.05)],[3.75,Fe(0,-3,.8)],[4,Fe(0,-6,.6,0,0)]]},Dc=s=>dn((s-3.08)/.57),ci={offset:.84,scale:4,entry:14,start:.2,sealed:1.3,hold:1.46};function Zx(s){if(s<ci.start)return{x:ci.entry,alpha:0};const e=(s-ci.start)/(ci.sealed-ci.start);if(e>=1)return{x:ci.offset,alpha:1};const t=dn(e);return{x:ci.entry-(ci.entry-ci.offset)*t,alpha:1}}function Jx(s){s=Math.max(0,Math.min(14,s));const e={};for(const[b,N]of Object.entries($x))e[b]=Yi(N,s);const t=dn((s-3.9)/.55);e["tessera-orbit"]=Fe(0,0,1,0,0),e.cart=Fe(0,0,1,0,0);for(const b of["reactor","protein","vial","thor"])e[b]=Yi(Lc[b],s);if(e.protein[6]=(s-6)*.14,e.reactor=Yi([[4.65,Fe(0,0,.25,0,0)],[5,Fe(0,0,1.18)],[5.5,Fe(0,0,1.22)],[6,Fe(0,0,1.8,0,0)]],s),s<5){const b=Kx(s);e.reactor=Fe(0,0,b.reactorScale,0,b.interior)}e.protein=Yi([[5.5,Fe(0,.6,.1,0,0)],[6,Fe(0,.6,.92)],[6.5,Fe(0,.6,.95,.12)],[7,Fe(0,0,.15,.2,0)]],s);const n=e.protein[7];e["protein-insulin"]=Fe(-4.8,1.1,.48,-.3+(s-6)*.13,n),e["protein-crambin"]=Fe(4.8,-.6,.48,.3-(s-6)*.1,n),s>7.35&&s<12.38&&(e.vial[7]*=1-dn((s-7.35)/.3)),s>=12.38&&(e.vial=Yi([[12.38,Fe(0,-1,.8,0,0)],[12.67,Fe(0,-1.15,1.2)],...Lc.vial.filter(([b])=>b>=13)],s)),e["payload-case"]=Yi([[7.35,Fe(0,1.8,1.6,0,0)],[7.65,Fe(0,1.8,1.6)],[7.95,Fe(1.05,1.5,.85)],[8.25,Fe(1.05,-.05,.67)],[8.4,Fe(1.05,-.12,.62,0,0)],[8.55,Fe(1.05,-.12,.62,0,0)]],s);const i=dn((s-7.65)/.25)*(1-dn((s-8.38)/.22));e["thor-open"]=[...e.thor],e["thor-open"][7]*=i,e.thor[7]*=1-i;for(const[b,N]of[["fairing-left",-1],["fairing-right",1]]){const R=ci;if(s<R.hold){const A=Zx(s);e[b]=Fe(N*A.x,0,R.scale,0,A.alpha)}else e[b]=s<2?Yi([[R.hold,Fe(N*R.offset,0,R.scale)],[1.74,Fe(N*.21,3.6,1,0,0)]],s):Fe(N*(.21+Dc(s)*3.7),3.65-Dc(s)*.8,1.05,-N*Dc(s)*.42,dn((s-2.98)/.1)*(1-dn((s-3.6)/.25)))}const r=Yi(Lc.recovery,s);e.ship=[...r],e.ship[1]-=2.25,e.helicopter=[...r],e.helicopter[1]+=2.6;const o=.33735294602330657,a=.4529307719111538;e.helicopter[0]=e.thor[0]-(o-.5)*7.7*r[3];const c=dn((s-9.72)/.4),l=1-dn((s-11.04)/.18),u=dn((s-10.83)/.3),h=1.14*(.65+.35*c),d=Xx(e.thor),m=(d[0][0]+d[1][0])/2,g=(d[0][1]+d[1][1])/2;e.chute=Fe(m,g+(2.65-1.55*u)*h,h,0,c*l),e.splash=Fe(e.thor[0],e.thor[1]-.22,e.thor[3]/4.5,0,dn((s-10.78)/.18)*(1-dn((s-11.55)/.45)));const v=e.helicopter[1]-(a-.5)*(7.7*911/2400)*r[3],p=e.thor[1]+.04;e.cable=Fe(e.thor[0],(v+p)/2,Math.max(.01,v-p)/2.8,0,r[7]);const f=e.rocket,E=4.35*f[3];e.flame=Fe(f[0]+Math.sin(f[6])*E,f[1]-Math.cos(f[6])*E,f[3],f[6],f[7]*dn((s-1.93)/.16)),e["pad-smoke"]=Fe(0,-4.6,1,0,dn((s-1.93)/.13)*(1-dn((s-2.2)/.32)));const M=1-dn((s-12.4)/.1);for(const b of["thor","thor-open","ship","helicopter","cable","chute","splash"])e[b][7]*=M;return{states:e,heat:Vx(s),deployment:t,thorTurn:dn((s-8.65)/.9),inflation:c,deflation:u}}const Qx={width:2.8,height:1.4},ey={vial:Qx},Sa=s=>Math.max(0,Math.min(1,s)),Nt=s=>{const e=Sa(s);return e*e*(3-2*e)},eu=[{title:"Start with the structure.",copy:"Protein structures help researchers investigate how molecules interact. Each structure shown here is a different example.",note:"MOLECULAR STRUCTURES AT DIFFERENT SCALES · RCSB PDB 6VSB / 4INS / 1CRN"},{title:"Change the growth conditions.",copy:`Settling and gravity-driven currents can affect crystal growth.
Changing these conditions gives researchers a different process to study.`,note:"SEDIMENTATION + CONVECTION · SCHEMATIC, NOT MOLECULAR DEFORMATION"},{title:"Compare growth in orbit.",copy:`Reduced settling can change crystal growth.
An Earth control helps researchers compare size and uniformity.`,note:"PEMBROLIZUMAB · ISS EXPERIMENT · MORE UNIFORM CRYSTALLINE SUSPENSIONS",source:!0},{title:"Examine the protein.",copy:`Three chains. One molecular assembly.
Examining its structure helps researchers study interactions relevant to disease.`,note:"6VSB · CRYO-EM STRUCTURE · CHAIN A RBD: RESIDUES 319–541"},{title:"From data to a model.",copy:`From diffraction to density to an atomic model.
A structural model helps researchers form ideas that can be tested.`,note:"X-RAY WORKFLOW · SCHEMATIC · INSULIN 4INS · LIGAND IS ILLUSTRATIVE"},{title:"A sample. A next step.",copy:`Crystal size and uniformity matter in formulation research.
Further testing determines whether a result is useful on Earth.`,note:"FORMULATION RESEARCH · OUTCOMES DEPEND ON THE PROTEIN AND PROCESS"}];function ty(s){const e=Sa(s)*6,t=eu.map((r,o)=>Nt((e-o+.14)/.3)*(o===5?1:1-Nt((e-o-.84)/.3))),n=Math.min(5,Math.floor(e)),i=Sa(e-n);return{q:e,beat:n,local:i,weights:t,focus:Nt(e/.5),settle:Nt((e-1.1)/.65),order:Nt((e-2.03)/.8),explode:Nt((e-3.08)/.52),pulse:Math.sin(Math.PI*Nt((e-3.55)/.35)),exit:Nt((e-5.72)/.28)}}const Bd=Array.from({length:125},(s,e)=>{const t=e%5-2,n=Math.floor(e/5)%5-2,i=Math.floor(e/25)-2;return{x:t,y:n,z:i,core:Math.max(Math.abs(t),Math.abs(n),Math.abs(i))<=1}}).sort((s,e)=>s.z-e.z),ny={2:[["Watch a crystal begin.","Under selected conditions, molecules gather around a growing nucleus. Microgravity provides a different environment to study this process."],["Compare how it grows.","Compare crystal growth with an Earth control. Size and uniformity depend on the protein and the process."]],3:[["See the whole protein.","The spike protein shown here has three chains. Its structure is one example of how researchers investigate a molecular assembly."],["Examine each chain.","Looking at individual chains helps researchers investigate how the parts of a protein fit together."],["Study the binding domain.","The receptor-binding domain helps the spike engage its receptor. Understanding that interaction can guide research questions."]],4:[["Start with an ordered crystal.","Crystallography uses ordered crystals to investigate molecular structure. This schematic follows an X-ray workflow."],["Capture the diffraction.","Scattered X-rays form a recorded pattern. Researchers use those measurements to investigate the crystal structure."],["Reconstruct the density.","Measurements and phase estimates produce a density map. Researchers fit and refine a model against the data."],["Explore possible interactions.","A structural model can suggest interactions to investigate. Those ideas still need experimental testing."]],5:[["Compare with an Earth control.","Measure crystal size and uniformity. A controlled comparison helps identify which conditions made a difference."],["Explore a formulation.","Study concentration, particle size and flow. Further testing determines whether the material is suitable for a formulation."],["Return for further study.","Prepare the research sample for transport. Analysis and development continue with the teams on Earth."]]};function iy(s){const e=Math.min(5,Math.floor(s)),t=Sa(s-e),n=ny[e];if(!n)return{...eu[e],key:String(e),opacity:1,progress:t};const i=n.length,r=Math.min(i-1,Math.floor(t*i)),o=t*i-r;return{title:n[r][0],copy:n[r][1],key:`${e}-${r}`,progress:o,opacity:Nt(o/.12)*(r===i-1?1:1-Nt((o-.88)/.12))}}const zd="/astreia-preview/story-2d/",Tn=(s,e="")=>`<img class="${e}" src="${zd}${s}" alt="" draggable="false" decoding="async">`,Il=(s,e="0 0 1000 650")=>`<svg viewBox="${e}" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">${s}</svg>`,Fh=(s="")=>`<div class="molecule-lattice ${s}">${Bd.map((e,t)=>`<img data-site="${t}" src="${zd}molecular-ribbons/insulin-lattice.webp" alt="">`).join("")}</div>`;function sy(){return Il(`<g fill="#E8E3D8">${Array.from({length:145},(s,e)=>{const t=1+Math.floor(e/24),n=e*2.399963,i=t*30;return`<circle cx="${500+Math.cos(n)*i}" cy="${325+Math.sin(n)*i}" r="${e%4===0?2.7:1.2}" opacity="${.3+e%7/12}"/>`}).join("")}</g>`)}function ry(s){const e=document.createElement("section");e.className="molecular-story",e.setAttribute("aria-label","Molecular research: from gravity to formulation"),e.hidden=!0,e.innerHTML=`<div class="molecular-art" aria-hidden="true">
 <div class="molecular-beat molecular-intro" data-beat="0"><figure>${Tn("molecular-ribbons/spike.webp","molecular-float")}<figcaption>Spike <small>6VSB</small></figcaption></figure><figure>${Tn("molecular-ribbons/insulin.webp","molecular-float")}<figcaption>Insulin <small>4INS</small></figcaption></figure><figure>${Tn("molecular-ribbons/crambin.webp","molecular-float")}<figcaption>Crambin <small>1CRN</small></figcaption></figure></div>
 <div class="molecular-beat gravity-study" data-beat="1">${Tn("molecular-ribbons/insulin-surface.webp","settling-insulin")}${Il(`<g class="solute">${Array.from({length:28},(U,D)=>`<circle cx="${230+D*137%530}" cy="${180+D*53%265}" r="${D%3===0?2:1}" style="--delay:${-D*.3}s"/>`).join("")}</g>`)} </div>
 <div class="molecular-beat orbit-study" data-beat="2">${Fh()}</div>
 <div class="molecular-beat chain-study" data-beat="3"><div class="chain-system">${Tn("molecular-ribbons/spike.webp","chain-whole")}${["B","C","A"].map(U=>Tn(`molecular-ribbons/chain-${U}.webp`,`chain chain-${U}`)).join("")}${Tn("molecular-ribbons/rbd.webp","chain-rbd")}<div class="chain-labels"><span class="label-a">Chain A</span><span class="label-b">Chain B</span><span class="label-c">Chain C</span></div></div></div>
 <div class="molecular-beat pipeline-study" data-beat="4"><figure>${Fh("pipeline-lattice")}<figcaption>Crystal</figcaption></figure><figure>${sy()}<figcaption>Diffraction</figcaption></figure><figure><div class="density-study">${Tn("molecular-ribbons/insulin-density.webp")}</div><figcaption>Density map</figcaption></figure><figure><div class="target-study">${Tn("molecular-ribbons/insulin.webp")}${Il('<g stroke="#ff4e29" stroke-width="4" fill="#ff4e29"><path d="M610 250l22-12 22 12v25l-22 12-22-12Z" fill="none"/><path d="M654 250l22-12 20 12M632 287v24"/><circle cx="676" cy="238" r="5"/><circle cx="632" cy="311" r="5"/></g>')}</div><figcaption>Structure</figcaption></figure></div>
 <div class="molecular-beat formulation-study" data-beat="5"><div class="crystal-comparison"><figure>${Tn("bio/crystals-earth.webp")}<figcaption>Earth control</figcaption></figure><figure>${Tn("bio/crystals-microgravity.webp")}<figcaption>Microgravity experiment</figcaption></figure></div><div class="formulation-syringe">${Tn("bio/syringe.webp")}</div>${Tn("bio/vial.webp","formulation-ampoule")}${Tn("bio/payload-case.webp","return-cassette")}<div class="sample-sheen"></div>${Tn("bio/capsule.webp","formulation-capsule")}</div>
 </div><div class="molecular-caption"><h2></h2><p></p></div>`,s.parentElement.append(e);const t=[...e.querySelectorAll("[data-beat]")],n=e.querySelector(".molecular-art"),i=e.querySelector(".molecular-caption"),r=i.querySelector("h2"),o=i.querySelector("p"),a=t[0],c=e.querySelector(".settling-insulin"),l=[...e.querySelectorAll(".chain")],u=e.querySelector(".chain-whole"),h=e.querySelector(".chain-rbd"),d=e.querySelector(".chain-labels"),m=e.querySelector(".formulation-capsule"),g=t[2].querySelector(".molecule-lattice"),v=e.querySelector(".crystal-comparison"),p=e.querySelector(".formulation-syringe"),f=e.querySelector(".formulation-ampoule"),E=e.querySelector(".return-cassette"),M=e.querySelector(".sample-sheen"),b=[...t[2].querySelectorAll("[data-site]")],N=[...t[4].querySelectorAll("[data-site]")],R=[...t[4].children];e.append(m);const A=matchMedia("(prefers-reduced-motion: reduce)");let C=null,Y=-1,_=[];const y=U=>{e.hidden||A.matches||(n.style.setProperty("--parallax-x",`${(U.clientX/innerWidth-.5)*8}px`),n.style.setProperty("--parallax-y",`${(U.clientY/innerHeight-.5)*6}px`))};window.addEventListener("pointermove",y,{passive:!0});function H(U,D,$=!1){U.forEach((F,te)=>{const z=Bd[te],ue=z.core?Nt(D*3):Nt((D-.34)*2),le=(z.x-z.z*.55)*13.4,we=(z.y+z.z*.4)*13.4;F.style.left=`${50+le}%`,F.style.top=`${50+we}%`,F.style.width=`${$?14:13}%`,F.style.opacity=String(ue*(.38+(z.z+2)*.14)),F.style.transform=`translate(-50%,-50%) scale(${.55+.45*ue})`})}return H(N,1,!0),{render(U,D){const $=U===6||U===7&&D<.5;if(e.hidden=!$,!$){Y=-1;return}const F=`${U}:${D}:${s.clientWidth}:${s.clientHeight}`;if(Y===F)return;Y=F;const te=U===7,z=ty(te?1:D);e.dataset.beat=String(z.beat),e.style.opacity=String(te?1:Nt(D/.045)),t.forEach((ee,J)=>{ee.style.opacity=String(te?0:z.weights[J]),ee.style.visibility=!te&&z.weights[J]>.001?"visible":"hidden"}),a.style.filter=`blur(${(1-z.focus)*6}px)`,a.style.transform=`scale(${.92+z.focus*.08})`,c.style.transform=`translate(-50%, -50%) translateY(${z.settle*50}px) rotate(${-8+z.settle*8}deg)`,g.style.opacity=String(Nt((z.q-2.01)/.16)),H(b,z.order),l.forEach(ee=>{const J=ee.className.split("chain-")[1],be={A:[130,-45],B:[-145,-40],C:[-70,125]}[J];ee.style.transform=`translate(${be[0]*z.explode/10}%,${be[1]*z.explode/10}%)`,ee.style.opacity=String(Nt(z.explode*5))}),u.style.opacity=String(1-Nt(z.explode*5)),h.style.transform=`translate(${13*z.explode}%,${-4.5*z.explode}%)`;const ue=Nt((z.q-3.65)/.17);h.style.opacity=String(ue*.82),l.forEach(ee=>{ee.style.opacity=String(Nt(z.explode*5)*(1-ue*.5))}),d.style.opacity=String(Nt((z.explode-.4)/.6)*(1-ue)),R.forEach((ee,J)=>{const be=(z.q-4)*4-J,he=Nt((be+.12)/.25)*(J===3?1:1-Nt((be-.88)/.25));ee.style.opacity=String(he),ee.style.visibility=he>.001?"visible":"hidden",ee.style.transform=`translateY(${(1-he)*12}px) scale(${.94+.06*he})`});const le=Nt((z.q-5.29)/.14),we=Nt((z.q-5.54)/.1),Qe=Nt((z.q-5.62)/.15),et=Nt((z.q-5.82)/.1);v.style.opacity=String(1-le),v.style.transform=`scale(${1-le*.08})`,p.style.opacity=String(le*(1-we)),p.style.transform=`translateY(${(1-le)*20}px)`,f.style.opacity=String(le*(1-we)),f.style.transform=`translateY(${(1-le)*18}px)`,E.style.opacity=String(Qe),E.style.transform=`translate(-50%,-50%) scale(${.9+.1*Qe})`,M.style.opacity=String(le*(1-we));const Q=s.clientWidth,ie=s.clientHeight,Ae=Q<=ie,ge=Math.min(ie/13.5,Q/16),ke=Jx(te?6.5+D:6.5).states.vial,Be=ey.vial,nt=Be.width*ke[3]*ge,_t=Be.height*ke[3]*ge,at=Q*(Ae?.92:.9),I=ie*(Ae?.57:.65),qt=Q*(Ae?.04:.05),rt=ie*(Ae?.13:.12),ct=at*(Ae?.42:.26),Ve=ct*Be.height/Be.width,vt=qt+at*(Ae?.68:.72),Ge=rt+I*(Ae?.55:.58),w=te?1:z.exit,x=(ee,J)=>ee+(J-ee)*w;m.style.width=`${x(ct,nt)}px`,m.style.height=`${x(Ve,_t)}px`,m.style.left=`${x(vt,Q/2+ke[0]*ge)}px`,m.style.top=`${x(Ge,ie/2-ke[1]*ge)}px`,m.style.transform=`translate(-50%,-50%) rotate(${-ke[6]*180/Math.PI*w}deg)`,m.style.opacity=String(te?1-ke[7]:z.weights[5]*et),m.style.visibility=te||z.weights[5]*et>.001?"visible":"hidden",t[5].style.opacity=String(te?0:z.weights[5]*(1-z.exit));const G=iy(z.q);G.key!==C&&(C=G.key,_=Fd(r,o,G.title,G.copy)),Od(_,o,G.progress,[.02,.16],1,A.matches);const Z=Nt(z.local/.14)*(z.beat===5?1:1-Nt((z.local-.86)/.14));i.style.opacity=String(te?0:Z*G.opacity*(1-z.exit))},destroy(){window.removeEventListener("pointermove",y),e.remove()}}}const oy=`
 <span class="thermal-model-title">THERMAL DIFFUSION<br>MODEL (TDM)</span>
 <math class="thermal-model-equation" xmlns="http://www.w3.org/1998/Math/MathML" display="block" aria-label="p sub i of T equals e to the power z sub i over T, divided by the sum over j of e to the power z sub j over T">
  <mrow>
   <msub><mi>p</mi><mi>i</mi></msub><mo stretchy="false">(</mo><mi>T</mi><mo stretchy="false">)</mo><mo>=</mo>
   <mfrac>
    <msup><mi mathvariant="normal">e</mi><mrow><mo>(</mo><msub><mi>z</mi><mi>i</mi></msub><mo>/</mo><mi>T</mi><mo>)</mo></mrow></msup>
    <mrow><msub><mo>∑</mo><mi>j</mi></msub><msup><mi mathvariant="normal">e</mi><mrow><mo>(</mo><msub><mi>z</mi><mi>j</mi></msub><mo>/</mo><mi>T</mi><mo>)</mo></mrow></msup></mrow>
   </mfrac>
  </mrow>
 </math>`;function ay(s){const e=document.createElement("div");e.className="thermal-scale",e.setAttribute("role","img"),e.setAttribute("aria-label","Thermal view: relative intensity, low to high"),e.innerHTML='<span class="thermal-scale-label thermal-scale-high">HIGH</span><span class="thermal-scale-label thermal-scale-mid">RELATIVE<br>INTENSITY</span><span class="thermal-scale-label thermal-scale-low">LOW</span><span class="thermal-scale-ruler"></span><span class="thermal-scale-spectrum"></span>',s.append(e);const t=n=>{e.style.opacity=String(n),e.setAttribute("aria-hidden",n<.01?"true":"false")};return t(0),{render:t,destroy(){e.remove()}}}const Hr=new L;function Vn(s,e,t,n,i,r){const o=2*Math.PI*i/4,a=Math.max(r-2*i,0),c=Math.PI/4;Hr.copy(e),Hr[n]=0,Hr.normalize();const l=.5*o/(o+a),u=1-Hr.angleTo(s)/c;return Math.sign(Hr[t])===1?u*l:a/(o+a)+l+l*(1-u)}class Js extends St{constructor(e=1,t=1,n=1,i=2,r=.1){if(i=i*2+1,r=Math.min(e/2,t/2,n/2,r),super(1,1,1,i,i,i),i===1)return;const o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;const a=new L,c=new L,l=new L(e,t,n).divideScalar(2).subScalar(r),u=this.attributes.position.array,h=this.attributes.normal.array,d=this.attributes.uv.array,m=u.length/6,g=new L,v=.5/i;for(let p=0,f=0;p<u.length;p+=3,f+=2)switch(a.fromArray(u,p),c.copy(a),c.x-=Math.sign(c.x)*v,c.y-=Math.sign(c.y)*v,c.z-=Math.sign(c.z)*v,c.normalize(),u[p+0]=l.x*Math.sign(a.x)+c.x*r,u[p+1]=l.y*Math.sign(a.y)+c.y*r,u[p+2]=l.z*Math.sign(a.z)+c.z*r,h[p+0]=c.x,h[p+1]=c.y,h[p+2]=c.z,Math.floor(p/m)){case 0:g.set(1,0,0),d[f+0]=Vn(g,c,"z","y",r,n),d[f+1]=1-Vn(g,c,"y","z",r,t);break;case 1:g.set(-1,0,0),d[f+0]=1-Vn(g,c,"z","y",r,n),d[f+1]=1-Vn(g,c,"y","z",r,t);break;case 2:g.set(0,1,0),d[f+0]=1-Vn(g,c,"x","z",r,e),d[f+1]=Vn(g,c,"z","x",r,n);break;case 3:g.set(0,-1,0),d[f+0]=1-Vn(g,c,"x","z",r,e),d[f+1]=1-Vn(g,c,"z","x",r,n);break;case 4:g.set(0,0,1),d[f+0]=1-Vn(g,c,"x","y",r,e),d[f+1]=1-Vn(g,c,"y","x",r,t);break;case 5:g.set(0,0,-1),d[f+0]=Vn(g,c,"x","y",r,e),d[f+1]=1-Vn(g,c,"y","x",r,t);break}}}const Oh=s=>{const e=Math.max(0,Math.min(1,s));return e*e*e*(e*(e*6-15)+10)},cy=s=>Oh((s-8.72)/.28)*(1-Oh((s-9.1)/.32)),ly=(s,e,t)=>s+(e-s)*(1-Math.exp(-t/150)),Uc=9.8,ha=(()=>{const s=[];let e=7;const t=()=>(e=e*16807%2147483647,e/2147483647);for(let n=0;n<20;n++){const i=96*Math.pow(.79,n),r=.2+(t()-.5)*2.1*(n<4?.6:1);s.push([Math.cos(r),Math.sin(r),Math.min(.12,.05+.06*t())*(n<3?.8:1),i])}return s})(),ea=ha.filter(s=>s[3]>=14);function uy({sunDir:s,horizon:e,zenith:t}){const r=new fn(4e3,4e3,320,320);r.rotateX(-Math.PI/2);const o={uTime:{value:0},uSun:{value:s.clone()},uHorizon:{value:e.clone()},uZenith:{value:t.clone()},uCell:{value:4e3/320},uDeep:{value:new Pe(70175)},uScatter:{value:new Pe(744810)},uFoamBoost:{value:0},uFoamCenter:{value:new Oe},uFoamRadius:{value:0}},a=u=>u.map(h=>{const d=Math.hypot(h[0],h[1]);return`vec4(${(h[0]/d).toFixed(4)},${(h[1]/d).toFixed(4)},${h[2].toFixed(3)},${h[3].toFixed(2)})`}).join(","),c=new Xt({uniforms:o,vertexShader:`
   uniform float uTime,uCell;varying vec3 vWorld;varying vec2 vRest;varying float vCrest;
   const vec4 W[${ea.length}]=vec4[](${a(ea)});
   void main(){
    vec3 p=(modelMatrix*vec4(position,1.)).xyz;vec3 g=p;float crest=0.;
    for(int i=0;i<${ea.length};i++){
     vec4 w=W[i];float k=6.28318/w.w,c=sqrt(${Uc}/k),a=w.z/k;
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
   const vec4 W[${ha.length}]=vec4[](${a(ha)});
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
    for(int i=0;i<${ha.length};i++){
     vec4 w=W[i];float k=6.28318/w.w,c=sqrt(${Uc}/k);
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
   }`}),l=new ce(r,c);return l.frustumCulled=!1,{mesh:l,uniforms:o,follow(u){const h=Math.max(1,u.position.y/30),d=4e3*h/320;l.scale.set(h,1,h),o.uCell.value=d,l.position.set(Math.round(u.position.x/d)*d,0,Math.round(u.position.z/d)*d)},heightAt(u,h,d){let g=u,v=h,p=0;for(let f=0;f<2;f++){let E=0,M=0;p=0;for(const[b,N,R,A]of ea){const C=Math.hypot(b,N),Y=b/C,_=N/C,y=2*Math.PI/A,H=Math.sqrt(Uc/y),U=R/y,D=y*(Y*g+_*v-H*d),$=Math.min(1,Math.max(0,(A/12.5-3)/3)),F=$*$*(3-2*$);E+=F*Y*U*Math.cos(D),M+=F*_*U*Math.cos(D),p+=F*U*Math.sin(D)}g=u-E,v=h-M}return p}}}const kd=(s,e=0,t=1)=>Math.max(e,Math.min(t,s)),ft=(s,e,t)=>{const n=kd((t-s)/(e-s));return n*n*n*(n*(n*6-15)+10)},it=(s,e,t)=>s+(e-s)*t,pt=(s,e,t)=>new L(s,e,t);function hy({environment:s,fg:e,bg:t,camera:n,bgCamera:i,tex:r,assets:o,tesseraPivot:a,thorPivot:c,globe:l,earthMat:u,cloudMat:h,skyMat:d,starMat:m,atmoMat:g,R:v,reduced:p}){const f=new ce(new Qr(1,64),new Wt({color:197636}));f.visible=!1,a.add(f);function E(P){const W=a.userData.hatch;if(!W){f.visible=!1;return}f.position.copy(W).add(pt(0,0,.012)),f.scale.setScalar(Math.max(.001,.42*P)),f.visible=P>.001}const M=(()=>{const W=document.createElement("canvas");W.width=W.height=128;const pe=W.getContext("2d"),Te=pe.createImageData(128,128),me=(ze,xe)=>{const Ue=Math.sin(ze*127.1+xe*311.7)*43758.5453;return Ue-Math.floor(Ue)},ot=(ze,xe)=>{const Ue=Math.floor(ze),tt=Math.floor(xe),je=ze-Ue,Dt=xe-tt,$e=je*je*(3-2*je),Ct=Dt*Dt*(3-2*Dt);return(me(Ue,tt)*(1-$e)+me(Ue+1,tt)*$e)*(1-Ct)+(me(Ue,tt+1)*(1-$e)+me(Ue+1,tt+1)*$e)*Ct},ve=(ze,xe)=>{let Ue=0,tt=.5;for(let je=0;je<5;je++)Ue+=tt*ot(ze,xe),ze*=2.1,xe*=2.1,tt*=.5;return Ue};for(let ze=0;ze<128;ze++)for(let xe=0;xe<128;xe++){const Ue=xe/128*2-1,tt=ze/128*2-1,je=Math.hypot(Ue,tt*1.15),Dt=Math.max(0,Math.min(1,(1-je*1.25+(ve(xe/14,ze/14)-.5)*1.1)*2.2)),$e=.72+.28*(1-ze/128)+.08*(ve(xe/9+7,ze/9)-.5),Ct=(ze*128+xe)*4;Te.data[Ct]=255*$e,Te.data[Ct+1]=250*$e,Te.data[Ct+2]=244*Math.min(1,$e+.04),Te.data[Ct+3]=255*Dt*Dt*(3-2*Dt)}pe.putImageData(Te,0,0);const re=new la(W);return re.colorSpace=Ft,re})(),b=[];for(let P=0;P<46;P++){const W=new dv(new wd({map:M,color:16775407,transparent:!0,depthWrite:!1,opacity:0,fog:!1,toneMapped:!1}));W.userData={d:2+P*37%60,x:(P*53%100/100-.5)*1.9,y:(P*71%100/100-.5)*1.3,size:3+P*29%14},W.visible=!1,e.add(W),b.push(W)}function N(P){const W=(P-9.4)/.21999999999999886,pe=Math.sin(Math.PI*kd(W))**2.2,Te=pt(0,0,-1).applyQuaternion(n.quaternion),me=pt(1,0,0).applyQuaternion(n.quaternion),ot=pt(0,1,0).applyQuaternion(n.quaternion);for(const ve of b){const re=ve.userData.d-W*70;ve.visible=W>0&&W<1&&re>.6,ve.visible&&(ve.position.copy(n.position).addScaledVector(Te,re).addScaledVector(me,ve.userData.x*re).addScaledVector(ot,ve.userData.y*re),ve.scale.setScalar(ve.userData.size*(.5+re/30)),ve.material.opacity=pe*Math.min(1,re/3)*.9,ve.material.rotation=ve.userData.x*3)}}const R=new $l(14674175,0,14,1.6);e.add(R);const A=new Yn({color:14674158,roughness:.06,metalness:0,transparent:!0,opacity:.28,clearcoat:1}),C=new ut({color:2764339,roughness:.36,metalness:.85}),Y=new ut({color:12172996,roughness:.28,metalness:1}),_=new ut({color:15885098,roughness:.45,metalness:.1});function y(){const P=new zt,W=new ce(new Js(1.6,.5,1,6,.08),C);P.add(W);const pe=new ce(new Js(1.1,.06,.6,4,.03),A);pe.position.y=.26,P.add(pe);const Te=new Xt({uniforms:{phase:{value:0}},transparent:!0,vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform float phase;varying vec2 vUv;void main(){float w=.55+.45*sin(vUv.x*40.-phase*6.);vec3 c=mix(vec3(.86,.34,.38),vec3(1.,.72,.5),w);gl_FragColor=vec4(c*(.75+.5*w),.95);}"});for(let ot=0;ot<4;ot++){const ve=new ce(new ei(.035,.035,.95,12),Te);ve.rotation.z=Math.PI/2,ve.position.set(0,.24,-.21+ot*.14),P.add(ve)}const me=new ce(new St(.18,.08,.5),_);return me.position.set(.72,.22,0),P.add(me),P.userData.flow=Te,P}const H=new rr;H.background=new Pe(460808);const U=new Wr(10466248,657415,.35);H.add(U);const D=new to(16770760,40,20,.55,.7,1.5);D.position.set(-3,4,3),H.add(D,D.target);const $=new to(11060479,30,20,.6,.8,1.5);$.position.set(3.5,2,-3),H.add($,$.target);const F=y();H.add(F);const te=new rn(30,1,.05,100);H.environment=s,H.environmentIntensity=.5;{const P=new ce(new Qr(6,64),new ut({color:789774,roughness:.32,metalness:.2}));P.rotation.x=-Math.PI/2,P.position.y=-.45,H.add(P)}const z=new rr;z.background=new Pe(14672869),z.fog=new Ra(14672869,18,70),z.add(new Wr(16777215,9080980,.72));const ue=new _s(16777215,1.6);ue.position.set(5,12,7),ue.castShadow=!0,ue.shadow.mapSize.set(1024,1024),Object.assign(ue.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:40}),z.add(ue);const le=new ce(new fn(200,200),new ut({color:11449270,roughness:.14,metalness:.05}));le.rotation.x=-Math.PI/2,le.receiveShadow=!0,z.add(le);const we=new Wt({color:15909424});for(const P of[-4.2,4.2]){const W=new ce(new fn(.12,90),we);W.rotation.x=-Math.PI/2,W.position.set(P,.01,-30),z.add(W)}const Qe=new Wt({color:new Pe(4,4,3.9),fog:!1}),et=new Qs(new St(1.2,.05,1.2),Qe,70);let Q=0;const ie=new st;for(let P=-3;P<=3;P++)for(let W=0;W<10;W++)ie.makeTranslation(P*3.2,8,-W*5+6),et.setMatrixAt(Q++,ie);z.add(et);const Ae=new ut({color:2051978,roughness:.5,metalness:.4}),ge=new ut({color:15890970,roughness:.5,metalness:.3}),ke=new ut({color:15330542,roughness:.6}),Be=new Qs(new St(.12,7,.12),Ae,32),nt=new Qs(new St(.08,.14,5.2),ge,64),_t=new Qs(new St(.9,.55,1.1),ke,192);let at=0,I=0,qt=0;for(const P of[-8,8])for(let W=0;W<8;W++){const pe=-W*5.6;for(const Te of[-.6,.6])ie.makeTranslation(P+Te,3.5,pe),Be.setMatrixAt(at++,ie);for(let Te=0;Te<4;Te++){const me=.4+Te*1.7;ie.makeTranslation(P,me,pe),nt.setMatrixAt(I++,ie);for(let ot=0;ot<3;ot++)(W*7+Te*3+ot)%5!==0&&(ie.makeTranslation(P,me+.36,pe-1.6+ot*1.6),_t.setMatrixAt(qt++,ie))}}_t.count=qt,z.add(Be,nt,_t);const rt=new ce(new St(14,3.4,.06),A);rt.position.set(0,1.7,-6),z.add(rt);const ct=new ce(new St(14,.12,.12),Y);ct.position.set(0,3.4,-6),z.add(ct);const Ve=new ut({color:14014940,roughness:.32,metalness:.55}),vt=new zt,Ge=new ce(new Js(2.2,.06,1.1,3,.02),Ve);Ge.position.y=.92,vt.add(Ge);const w=Ge.clone();w.position.y=.25,vt.add(w);for(const[P,W]of[[-1.02,-.48],[1.02,-.48],[-1.02,.48],[1.02,.48]]){const pe=new ce(new ei(.025,.025,.92,12),Ve);pe.position.set(P,.46,W),vt.add(pe)}const x=y();x.scale.setScalar(.7),x.position.y=1.12,vt.add(x),vt.traverse(P=>{P.isMesh&&(P.castShadow=P.receiveShadow=!0)}),z.add(vt);const G=new rn(32,1,.05,200),Z=new rr;Z.background=new Pe(1708557),Z.add(new Wr(16769732,2759957,.42));const ee=new ce(new fn(3.2,4.2),new Wt({color:new Pe(1.6,1.45,1.2)}));ee.position.set(0,2.4,-3.96),Z.add(ee);const J=new ut({color:3812902,roughness:.8});for(const P of[-.53,.53]){const W=new ce(new St(.06,4.2,.06),J);W.position.set(P,2.4,-3.92),Z.add(W)}{const P=new ce(new St(3.2,.06,.06),J);P.position.set(0,2.9,-3.92),Z.add(P)}const be=new ut({color:13481888,roughness:.9}),he=new ce(new St(10,6,10),be);he.material.side=mn,he.position.set(0,3,1),he.receiveShadow=!0,Z.add(he);const de=new _s(16766630,3.2);de.position.set(.6,3.6,-6),de.castShadow=!0,de.shadow.mapSize.set(1024,1024),Object.assign(de.shadow.camera,{left:-4,right:4,top:4,bottom:-4,near:1,far:20}),Z.add(de,de.target);const lt=new ce(new St(1.2,.7,.7),new ut({color:15328476,roughness:.6}));lt.position.set(.9,.35,-1.2),Z.add(lt);const oe=new zt,De=new ce(new ei(.07,.07,.26,32),A);oe.add(De);const He=new ce(new ei(.062,.062,.16,32),new ut({color:15976870,roughness:.2,transparent:!0,opacity:.85}));He.position.y=-.04,oe.add(He);const Ze=new ce(new ei(.075,.075,.06,32),_);Ze.position.y=.16,oe.add(Ze),oe.position.set(.75,.83,-1.15),Z.add(oe);const Me=new zt,ht=new ut({color:15986664,roughness:.9}),qe=new ce(new Js(2.1,.35,1.1,4,.12),ht);qe.position.y=.75,Me.add(qe);const yt=new ce(new Js(.5,.16,.8,4,.07),ht);yt.position.set(-.75,1,0),Me.add(yt);const O=new ce(new Js(1.3,.08,1.16,3,.04),new ut({color:10466500,roughness:.95}));O.position.set(.35,.95,0),Me.add(O);const Re=new ce(new St(2.2,.08,1.2),new ut({color:12172996,roughness:.4,metalness:.7}));Re.position.y=.55,Me.add(Re),Me.position.set(-1.1,0,-1.9),Me.rotation.y=.05,Z.add(Me);const K=new ce(new fn(1.1,4.4,24,1),new ut({color:15722200,roughness:.95,side:pn}));{const P=K.geometry.attributes.position;for(let W=0;W<P.count;W++)P.setZ(W,Math.sin(P.getX(W)*14)*.06);K.geometry.computeVertexNormals()}K.position.set(2.1,2.4,-3.85),Z.add(K);const ne=new Wt({color:16769976,transparent:!0,opacity:.045,blending:ui,depthWrite:!1,side:pn});for(let P=0;P<3;P++){const W=new ce(new fn(1,6),ne);W.position.set(-.9+P*.9,2.1,-2.2),W.rotation.set(-.75,0,.05*P),Z.add(W)}const _e=new ce(new ei(.18,.14,.32,24),new ut({color:15195599,roughness:.7}));_e.position.set(1.35,.86,-1.3),Z.add(_e);for(let P=0;P<7;P++){const W=new ce(new Ki(.12,10,8),new ut({color:5995850,roughness:.8}));W.scale.set(.45,1.1,.18),W.position.set(1.35+Math.sin(P*2.1)*.1,1.12+P*.03,-1.3+Math.cos(P*2.1)*.1),W.rotation.z=Math.sin(P)*.6,Z.add(W)}Z.traverse(P=>{P.isMesh&&P!==ee&&(P.castShadow=P.receiveShadow=!0)});const Ee=new rn(34,1,.05,100);Z.environment=s,Z.environmentIntensity=.85;const Ye=new zt;Ye.visible=!1,e.add(Ye);const Ut=new L(-.82,.2,-.54).normalize(),Vt=new Pe(1.02,.8,.62),dt=new Pe(.16,.34,.62),Rt=uy({sunDir:Ut,horizon:Vt,zenith:dt});Ye.add(Rt.mesh);const $t=new _s(16768180,3.2);$t.castShadow=!0,$t.shadow.mapSize.set(1024,1024),Object.assign($t.shadow.camera,{left:-30,right:30,top:30,bottom:-30,near:1,far:400}),Ye.add($t,$t.target);const On=new Wt({transparent:!0,depthWrite:!1,opacity:0,fog:!1});r.load("/astreia-preview/story-2d/descent/cloud-bank.webp",P=>{P.colorSpace=Ft,On.map=P,On.needsUpdate=!0});const jn=[];for(let P=0;P<8;P++){const W=new ce(new fn(180,42),On);W.userData.seed=P,Ye.add(W),jn.push(W)}const Rn=480,gi=new Ht,Gt=new Float32Array(Rn*3),ri=[];for(let P=0;P<Rn;P++){const W=Math.random()*Math.PI*2,pe=Math.random();ri.push([Math.cos(W)*(2+8*pe),5+11*Math.random()*(1-pe*.6),Math.sin(W)*(2+8*pe)])}gi.setAttribute("position",new gn(Gt,3));const It=(()=>{const P=document.createElement("canvas");P.width=P.height=64;const W=P.getContext("2d"),pe=W.createRadialGradient(32,32,0,32,32,32);return pe.addColorStop(0,"rgba(255,255,255,1)"),pe.addColorStop(.45,"rgba(255,255,255,.55)"),pe.addColorStop(1,"rgba(255,255,255,0)"),W.fillStyle=pe,W.fillRect(0,0,64,64),new la(P)})(),cn=new La({color:15922679,size:.55,map:It,transparent:!0,opacity:0,depthWrite:!1}),xn=new ya(gi,cn);xn.frustumCulled=!1,Ye.add(xn),Ye.add(new Wr(12572415,731712,.7));const Yt=new zt;e.add(Yt),Yt.visible=!1;const jt={value:0};function Bn(P){const W=P.clone();return W.onBeforeCompile=pe=>{pe.uniforms.uHeat=jt,pe.vertexShader=pe.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vLocal;`).replace("#include <begin_vertex>",`#include <begin_vertex>
vLocal=position;`),pe.fragmentShader=pe.fragmentShader.replace("#include <common>",`#include <common>
uniform float uHeat;varying vec3 vLocal;
vec3 heatRamp(float x){vec3 a=vec3(.16,.04,.26),b=vec3(.52,.08,.55),c=vec3(.93,.29,.2),d=vec3(1.,.8,.2),e=vec3(1.,.98,.85);return x<.25?mix(a,b,x/.25):x<.5?mix(b,c,(x-.25)/.25):x<.75?mix(c,d,(x-.5)/.25):mix(d,e,(x-.75)/.25);}`).replace("#include <dithering_fragment>",`#include <dithering_fragment>
float field=clamp(1.-(vLocal.x+1.55)/3.1,0.,1.);field=pow(field,1.4)*.85+.15;
gl_FragColor.rgb=mix(gl_FragColor.rgb,heatRamp(field),uHeat);`)},W.customProgramCacheKey=()=>"thermal",W}let _i=!1;function Qi(){if(_i||!o.thor)return;_i=!0;const P=o.thor.clone(!0);P.traverse(W=>{W.isMesh&&(W.material=Bn(W.material),W.castShadow=!0)}),P.rotation.set(0,0,0),P.position.set(0,0,0),P.scale.setScalar(1.6),Yt.add(P)}const S=new Wt({color:new Pe(1,.42,.26),transparent:!0,blending:ui,depthWrite:!1,opacity:0,side:pn});r.load("/astreia-preview/story-2d/thermal-scene/plasma-volume-v3.webp",P=>{P.colorSpace=Ft,P.repeat.set(1/4,1/6),S.map=P,S.needsUpdate=!0});const B=new ce(new fn(1,1),S);Yt.add(B);const X=new zt;Ye.add(X);{const P=new fn(22,6,44,6);P.rotateX(-Math.PI/2);const W=P.attributes.position,pe=[];for(let ve=0;ve<W.count;ve++){const re=W.getX(ve),ze=W.getZ(ve);W.setY(ve,2.6*(1-(re/11)**2)+.35*Math.cos(ze/3*Math.PI/2));const xe=Math.min(10,Math.floor((re+11)/22*11)),Ue=Math.abs((re+11)/2%1-.5)<.04,tt=xe<=0||xe>=10?[.15,.17,.19]:xe===1||xe===9?[.95,.38,.14]:[.94,.93,.89];pe.push(...tt.map(je=>Ue?je*.8:je))}P.computeVertexNormals(),P.setAttribute("color",new At(pe,3));const Te=new ce(P,new Yn({vertexColors:!0,roughness:.62,sheen:.6,sheenRoughness:.5,sheenColor:new Pe(1,.95,.9),side:pn}));Te.position.y=12,Te.castShadow=!0,X.add(Te);const me=[];for(let ve=0;ve<=20;ve++){const re=-10+ve,ze=12+2.6*(1-(re/11)**2);for(const xe of[-2.6,2.6])me.push(re,ze,xe,re*.04,0,xe*.05)}const ot=new Cd(new Ht().setAttribute("position",new At(me,3)),new _a({color:7236454,transparent:!0,opacity:.22}));X.add(ot)}const q=(()=>{const P=document.createElement("canvas");P.width=P.height=256;const W=P.getContext("2d"),pe=W.createRadialGradient(128,128,40,128,128,128);pe.addColorStop(0,"rgba(255,255,255,0)"),pe.addColorStop(.55,"rgba(255,255,255,.9)"),pe.addColorStop(.75,"rgba(255,255,255,.35)"),pe.addColorStop(1,"rgba(255,255,255,0)"),W.fillStyle=pe,W.fillRect(0,0,256,256);for(let me=0;me<900;me++){const ot=Math.random()*Math.PI*2,ve=60+Math.random()*60;W.fillStyle=`rgba(255,255,255,${Math.random()*.5})`,W.beginPath(),W.arc(128+Math.cos(ot)*ve,128+Math.sin(ot)*ve,Math.random()*3,0,7),W.fill()}const Te=new la(P);return Te.colorSpace=Ft,Te})(),k=new ce(new fn(1,1),new Wt({map:q,transparent:!0,depthWrite:!1,opacity:0}));k.rotation.x=-Math.PI/2,k.position.y=.15,Ye.add(k);const se=new zt;Ye.add(se);{const P=new ce(new St(40,3,16),new ut({color:2041389,roughness:.42,metalness:.35}));P.position.y=.6,se.add(P);const W=new ce(new St(39,.2,15.2),new ut({color:3883077,roughness:.85}));W.position.y=2.2,se.add(W);const pe=new ce(new Ia(4.2,4.6,64),new Wt({color:15987178}));pe.rotation.x=-Math.PI/2,pe.position.y=2.32,se.add(pe);for(const ze of[-16,16]){const xe=new ce(new St(5,3.2,5.5),new ut({color:14277851,roughness:.5}));xe.position.set(ze,3.9,4.5),se.add(xe)}const Te=new ut({color:15885098,roughness:.45,metalness:.3}),me=new ce(new ei(.5,.6,7,16),Te);me.position.set(-12,5.7,-5),se.add(me);const ot=new ce(new St(14,.6,.6),Te);ot.position.set(-6,9,-5),ot.rotation.z=.32,se.add(ot),[3104138,9058858,13157046,3104138].forEach((ze,xe)=>{const Ue=new ce(new St(6,2.6,2.5),new ut({color:ze,roughness:.6,metalness:.3}));Ue.position.set(10+xe%2*6.2,3.6+Math.floor(xe/2)*2.62,-5),se.add(Ue)});const re=new ut({color:14277076,roughness:.4,metalness:.6});for(const ze of[-7.6,7.6]){const xe=new ce(new St(38,.08,.08),re);xe.position.set(0,3.3,ze),se.add(xe);const Ue=new Qs(new St(.08,1.1,.08),re,20);for(let tt=0;tt<20;tt++){const je=new st().makeTranslation(-19+tt*2,2.8,ze);Ue.setMatrixAt(tt,je)}se.add(Ue)}se.traverse(ze=>{ze.isMesh&&(ze.castShadow=ze.receiveShadow=!0)})}se.position.set(-46,0,10);const fe=new zt;Ye.add(fe);const Le=new zt;let Ne=!1;const We=new Pa(new Ht().setFromPoints([pt(0,0,0),pt(0,-1,0)]),new _a({color:1119512}));return Ye.add(We),{bio:H,bioCam:te,lab:z,labCam:G,care:Z,careCam:Ee,idle(){R.intensity=0},prepare(){if(Qi(),!Ne&&o.helicopter){Ne=!0;const P=o.helicopter;P.scale.setScalar(1),fe.add(P);const W=[];P.traverse(Te=>{Te.isMesh&&/^blade\d/.test(Te.name)&&W.push(Te)});const pe=P.getObjectByName("rotorcap");if(pe&&W.length){const Te=new Fn().setFromObject(pe).getCenter(pt(0,0,0));P.worldToLocal(Te),Le.position.copy(Te),P.add(Le);for(const me of W)me.getWorldPosition(pt(0,0,0)),Le.attach(me)}P.traverse(Te=>{Te.isMesh&&(Te.castShadow=!0)})}},pose(P,W,pe,Te){const me={scene:"world",fade:0,fadeColor:"#000",heat:0},ot=F.userData.flow;if(ot.uniforms.phase.value=p?P*4:P*4+W*.6,x.userData.flow.uniforms.phase.value=ot.uniforms.phase.value,P<5){const Ue=a.userData.hatch||pt(0,0,.8),tt=a.localToWorld(Ue.clone()),je=pt(0,0,1).applyQuaternion(a.quaternion).normalize(),Dt=ft(4.5,4.75,P),$e=ft(4.7,4.995,P),Ct=tt.clone().addScaledVector(je,it(9,.22,$e));return E(ft(4.72,4.92,P)),n.position.lerp(Ct,Dt),n.up.set(0,1,0),n.lookAt(tt),n.fov=Te.fov,n.updateProjectionMatrix(),R.position.copy(n.position),R.intensity=5*Dt,me}n.fov=Te.fov,n.updateProjectionMatrix(),R.intensity=0,f.visible=!1;for(const Ue of b)Ue.visible=!1;if(P<7.5){me.scene="bio";const Ue=ft(5,5.3,P)*(1-ft(7.36,7.5,P));D.intensity=40*Ue,$.intensity=30*Ue,U.intensity=.35*Ue;const tt=it(-.5,.6,ft(5,7.4,P));F.rotation.set(.12,tt,0);const je=ft(5.45,5.6,P)*(1-ft(6.95,7.05,P));return F.visible=je<.999,te.position.set(Math.sin(tt*.3)*3.2,1.7+it(0,-.3,ft(6.9,7.4,P)),it(9,4.4,ft(5,5.45,P))*(1-.1*ft(6.9,7.4,P))*it(1,.35,ft(7.36,7.5,P))),te.lookAt(0,.1,0),D.target.position.set(0,0,0),$.target.position.set(0,0,0),me.bioDim=je,me}if(P<8.5){const Ue=ft(7.5,7.72,P),tt=a.localToWorld((a.userData.hatch||pt(0,0,.8)).clone()),je=pt(0,0,1).applyQuaternion(a.quaternion).normalize();E(1-ft(7.6,7.72,P));const Dt=ft(7.7,8.1,P),$e=ft(8.15,8.35,P),Ct=tt.clone().addScaledVector(je,.2),ln=c.localToWorld(pt(1.4,0,.3));F.visible=!1,me.transfer={from:Ct,to:ln,move:Dt},c.position.addScaledVector(pt(Math.cos(-.52),Math.sin(-.52),0),$e*1.6);const Tt=a.position.clone().add(pt(1.1,-.9,.8)),Mt=Tt.clone().add(pt(it(3,5,$e),it(2.2,3.2,$e),it(8.5,11,$e))),Sn=tt.clone().addScaledVector(je,.22);return n.position.copy(Sn.lerp(Mt,Ue)),n.lookAt(tt.clone().lerp(Tt,Ue)),me}if(P<9.5){Qi(),c.visible=!1,a.visible=!1,Yt.visible=!0,Ye.visible=!1;const Ue=ft(8.5,9.5,P),tt=Math.sin(Ue*Math.PI*1.6)*.35;Yt.position.copy(a.position).add(pt(0,-30*Ue,0)),Yt.rotation.set(-.25+tt*.3,.4,-.38+tt),n.position.copy(Yt.position).add(pt(-3.5,4.2,10.5)),n.lookAt(Yt.position);const je=cy(P);me.heat=p?je:ly(Te.heat,je,pe),jt.value=me.heat;const Dt=Yt.worldToLocal(n.position.clone()),$e=p?1:.85+.3*me.heat;B.rotation.set(Math.atan2(-Dt.y,Dt.z),0,tt*.06),B.scale.set(9*$e,3.4,1),B.position.set(-3.3+4.5*$e,0,0),S.opacity=me.heat;const Ct=Math.floor(((p?0:W*10)+P*56)%24);return S.map&&S.map.offset.set(Ct%4/4,1-(Math.floor(Ct/4)+1)/6),i.position.set(0,v+it(420,150,Ue)+.05,0),g.uniforms.strength.value=1.6+.25*me.heat,u.color.setRGB(it(1,.34,me.heat),it(1,.42,me.heat),it(1,.72,me.heat)),h.color.setRGB(it(1,.3,me.heat),it(1,.34,me.heat),it(1,.48,me.heat)),me.exposure=it(1,.8,me.heat),N(P),me}if(u.color.setRGB(1,1,1),h.color.setRGB(1,1,1),jt.value=0,S.opacity=0,P<12.5){Qi(),me.scene="sea",c.visible=!1,a.visible=!1,Yt.visible=!0,Ye.visible=!0,l.visible=!1,m.opacity=0,d.uniforms.space.value=0,d.uniforms.studio.value=0,d.uniforms.hor.value.copy(Vt),d.uniforms.zen.value.copy(dt),d.uniforms.sunDir.value=Ut,i.position.set(0,v+.4,0),d.uniforms.sea.value=1;const Ue=p?P*6:W,tt=ft(9.5,10.8,P),je=ft(10.76,10.82,P);Rt.uniforms.uTime.value=Ue;const Dt=Math.pow(1-tt,1.7),$e=ft(12,12.3,P),Ct=ft(12.3,12.45,P),ln=pt(it(-80,-34,ft(11.35,11.9,P)),0,26);se.position.set(ln.x,Rt.heightAt(ln.x,ln.z,Ue)*.3-.2,ln.z),se.rotation.y=.25;let Tt=it(0,140,Dt),Mt=it(0,-60,Dt),Sn=1500*Dt;const In=Rt.heightAt(Tt,Mt,Ue),es=(p?0:Math.sin(W*1.25))*.13*(1-je)+(1-tt)*0;let ro=In+.3;je>0&&(Sn=it(Sn,ro,je));const vi=it(Tt,ln.x,$e),xi=it(Mt,ln.z,$e),br=it(Sn,it(18,3.2,Ct),$e);Yt.position.set(vi,br,xi);const Zt=Rt.heightAt(vi+2,xi,Ue)-Rt.heightAt(vi-2,xi,Ue),zn=Rt.heightAt(vi,xi+2,Ue)-Rt.heightAt(vi,xi-2,Ue);Yt.rotation.set(it(es*.6,zn*.18,je)*(1-$e),.5,it(es,-Zt*.18,je)*(1-$e));const Er=ft(9.5,9.66,P),Cn=ft(10.84,11.25,P),Kt=p?0:Math.sin(W*2.1)*.03,Ms=ft(10.95,11.15,P);X.visible=Er>.001&&Ms<.999,X.position.set(Tt-it(0,14,Cn),it(Sn,In-.6*Ms,Cn),Mt-it(0,10,Cn)),X.rotation.set(0,.5,it(es*.5,0,je)+Cn*.25),X.scale.set(.35+.65*Er,Math.max(.06,(1+Kt)*(1-.9*Cn)),.5+.5*Er),X.traverse(Ot=>{Ot.material&&(Ot.material.transparent=!0,Ot.material.opacity=Ot.isLineSegments?.22*(1-je):(1-Cn*.5)*(1-Ms))});for(const Ot of jn)Ot.visible=!1;const Dn=Math.max(0,(P-10.78)*5.5);if(xn.visible=Dn>0&&Dn<2.2,cn.opacity=.9*(1-ft(.8,2.2,Dn)),xn.visible){const Ot=Gt;for(let Kn=0;Kn<Rn;Kn++){const is=ri[Kn];Ot[Kn*3]=Tt+is[0]*Dn,Ot[Kn*3+1]=Math.max(In,ro+is[1]*Dn-4.9*Dn*Dn),Ot[Kn*3+2]=Mt+is[2]*Dn}gi.attributes.position.needsUpdate=!0}const ts=ft(10.78,11.6,P);Rt.uniforms.uFoamCenter.value.set(Tt,Mt),Rt.uniforms.uFoamRadius.value=ts>0?4+16*ts:0,Rt.uniforms.uFoamBoost.value=1-ts*.7;const yi=ft(11.45,11.85,P),nn=pt(it(160,vi,yi),it(80,br+24,yi),it(-90,xi,yi));fe.visible=P>11.4,fe.position.copy(nn),fe.rotation.set(0,it(2.4,1.7,yi),it(-.15,0,yi)),Le.rotation.y=p?P*40:W*28;const Tr=ft(11.85,11.98,P)*(1-ft(12.42,12.5,P));We.visible=fe.visible&&Tr>.01;const Mi=fe.position.clone().add(pt(0,-1.2,0)),Ss=Mi.clone().lerp(Yt.position.clone().add(pt(0,.6,0)),Tr);We.geometry.setFromPoints([Mi,Ss]);const oo=pt((vi+ln.x+nn.x)/3,(br+3+nn.y)/3+2,(xi+ln.z+nn.z)/3),ao=n.aspect<1?68:46,bs=n.aspect<1?0:7,co=pt(Tt+6,Sn+10,Mt+ao),kn=pt(Tt+20,In+8,Mt+22),lo=oo.clone().add(pt(34,20,62)),uo=co.clone().lerp(kn,ft(10.55,10.85,P)).lerp(lo,ft(11.25,11.75,P)),wr=pt(Tt-bs*.99,Sn+5-bs*.2,Mt+bs*.15).lerp(pt(Tt,In+.5,Mt),ft(10.55,10.85,P)).lerp(oo,ft(11.25,11.75,P));n.position.copy(uo),n.lookAt(wr),i.quaternion.copy(n.quaternion),Rt.follow(n),$t.target.position.copy(wr),$t.position.copy(wr).addScaledVector(Ut,120),N(P);const ns=ft(12.3,12.5,P);if(ns>0){const Ot=Yt.position.clone().add(pt(0,.55,0));n.position.lerp(Ot.clone().add(pt(.4,it(12,.18,ns),.6)),ns),n.lookAt(Ot)}return me}if(P<13.5){me.scene="lab";const Ue=ft(12.5,13.5,P),tt=ft(12.5,12.78,P),je=ft(13.22,13.5,P),Dt=pt(0,1.12,0),$e=pt(it(6.5,3.6,Ue),it(3.4,2.3,Ue),it(10,5.6,Ue)),Ct=Dt.clone().add(pt(0,.02,.5)).lerp($e,tt),ln=Dt.clone().lerp(pt(0,1,-1),tt);return G.position.copy(Ct.lerp(pt(0,7.55,1.05),je)),G.lookAt(ln.lerp(pt(0,8,1),je)),x.rotation.y=it(-.4,.3,Ue),me}me.scene="care";const ve=ft(13.5,14.4,P),re=ft(13.5,13.8,P),ze=pt(it(3.4,2.4,ve),it(1.9,1.5,ve),it(3.6,2,ve)),xe=pt(it(0,.5,ve),it(1.4,1.1,ve),-2.2);return Ee.position.copy(pt(.1,2.5,-3.62).lerp(ze,re)),Ee.lookAt(pt(0,2.45,-3.96).lerp(xe,re)),de.target.position.set(.8,.8,-1.2),me},cassette:y,thorFree:Yt,ocean:Ye,heli:fe}}function Bh(){var i;const s=document.querySelector(".proto-stage"),e=document.querySelector(".proto-track");(i=document.querySelector(".proto-loader"))==null||i.remove(),document.body.classList.add("is-styled","mission-static");const t=document.createElement("div");t.className="static-mission";const n=["hangar","integration","cape","orbit","orbit","bio-black","bio-black","bio-black","orbit","orbit","ocean","ocean","ocean","warehouse","hospital-happy"];for(const[r,o]of Cl.entries()){const a=document.createElement("section");a.id=o.id;const c=document.createElement("img");c.src=r===0?"/astreia-preview/prototype/hero-poster/landscape.webp":`/astreia-preview/story-2d/plate-${n[r]}.webp`,c.alt="",c.loading=r===0?"eager":"lazy",c.decoding="async",n[r]!=="bio-black"&&a.append(c);const l=document.createElement("div");l.className="static-mission-copy";const u=document.createElement("p");u.className="pc-kicker",u.textContent=`${String(r+1).padStart(2,"0")} / 15 · ${o.label}`;const h=document.createElement(r===0?"h1":"h2");h.textContent=o.title.replace(/<br\s*\/?>/g," ");const d=document.createElement("p");if(d.textContent=o.copy,l.append(u,h,d),r===6)for(const m of eu){const g=document.createElement("h3"),v=document.createElement("p"),p=document.createElement("small");g.textContent=m.title,v.textContent=m.copy,p.textContent=m.note,l.append(g,v,p)}a.append(l),t.append(a)}return s.replaceWith(t),e.remove(),document.querySelectorAll("[data-reveal]").forEach(r=>r.classList.add("is-in")),{navigationBoundary(){const r=document.getElementById("site-footer");return r?r.getBoundingClientRect().top+scrollY-innerHeight:1/0},scrollTo(r){window.scrollTo(0,r)},goHash(r){const o=r==="#constellation"?"factory":r.slice(1),a=t.querySelector(`[id="${CSS.escape(o)}"]`);return a?(window.scrollTo(0,a.getBoundingClientRect().top+scrollY),!0):!1},destroy(){document.body.classList.remove("mission-static")}}}const Nc={},Fc={},dy=s=>s===0?0:s===14?.96:s===6?.075:.73;function my(){const s=new AbortController,{signal:e}=s;let t=!1,n=0;document.body.classList.add("is-styled");const i=new URLSearchParams(location.search).has("focus")?2:0,r=i?Ma.slice(0,i):Ma,o=r.reduce((T,V)=>T+V.length,0);i&&document.documentElement.classList.add("is-focus");const a=(T,V=0,j=1)=>Math.max(V,Math.min(j,T)),c=(T,V,j)=>{const ae=a((j-T)/(V-T));return ae*ae*ae*(ae*(ae*6-15)+10)},l=(T,V,j)=>T+(V-T)*j,u=54.5,h=matchMedia("(prefers-reduced-motion: reduce)").matches||new URLSearchParams(location.search).get("motion")==="reduce";if(h)return Bh();document.documentElement.style.setProperty("--act-length",o);const d=document.querySelector(".proto-canvas"),m=document.querySelector(".proto-stage");let g;try{g=new hv({canvas:d,antialias:!0,powerPreference:"high-performance"})}catch{return Xd()}g.outputColorSpace=Ft,g.toneMapping=Ul,g.toneMappingExposure=1,g.autoClear=!1,g.shadowMap.enabled=!0,g.shadowMap.type=kh;const v=Math.min(devicePixelRatio||1,1.75);let p=Math.min(v,1.5);const f=new rr,E=new rr,M=new rn(32,1,.1,6e3),b=new rn(32,1,1,4e5),N=new Sl(g),R=N.fromScene(new Ix,.04).texture;f.environment=R,f.environmentIntensity=.55;const A=new L(-1,.12,-.55).normalize(),C=new _s(16773600,3.2);C.position.copy(A).multiplyScalar(200),f.add(C,C.target),C.castShadow=!0,C.shadow.mapSize.set(1024,1024),C.shadow.bias=-4e-4,C.shadow.normalBias=.02,Object.assign(C.shadow.camera,{left:-6,right:6,top:6,bottom:-6,near:1,far:60});const Y=new Wr(10467544,1709072,.45);f.add(Y);const _=new _s(7315414,0);_.position.set(.2,-1,.3),f.add(_,_.target);const y=new to(16771276,900,60,.5,.6,1.6);f.add(y,y.target);const H=new to(12374783,700,60,.55,.7,1.6);f.add(H,H.target);const U=new zt;f.add(U);const D=T=>T,$=D(new ut({color:2895408,roughness:.24,metalness:.15})),F=new ce(new fn(84,84),$);F.rotation.x=-Math.PI/2,F.position.y=.05,F.receiveShadow=!0,U.add(F);const te=D(new Wt({color:14206090}));for(const[T,V,j,ae]of[[30,.15,0,13],[30,.15,0,-13],[.15,26,15,0],[.15,26,-15,0]]){const Ie=new ce(new fn(T,V),te);Ie.rotation.x=-Math.PI/2,Ie.position.set(j,.07,ae),U.add(Ie)}const z=D(new ut({color:1382170,roughness:.28,metalness:.6})),ue=new ce(new Ia(3.4,13,64),z);ue.rotation.x=-Math.PI/2,ue.position.y=u-2.6,ue.receiveShadow=!0,U.add(ue);const le=D(new ut({color:2764080,roughness:.45,metalness:.7})),we=new ce(new jl(13,.06,8,96),le);we.rotation.x=Math.PI/2,we.position.y=u-1.5,U.add(we);const Qe=D(new ut({color:3422010,roughness:.75,metalness:.25}));for(const T of[-42,42]){const V=new ce(new St(1,92,84),Qe);V.position.set(T,46,0),U.add(V)}const et=new ce(new St(84,1,84),Qe);et.position.y=92,U.add(et);const Q=D(new Wt({color:16774370}));for(let T=-3;T<=3;T++){const V=new ce(new St(.6,.15,76),Q);V.position.set(T*11,91.3,0),U.add(V)}const ie=D(new ut({color:6171148,roughness:.5,metalness:.6}));for(const T of[-30,30])for(let V=-3;V<=3;V++){const j=new ce(new St(.7,90,.7),ie);j.position.set(T,45,V*11),U.add(j)}for(const T of[-30,30])for(let V=10;V<90;V+=12){const j=new ce(new St(.5,.5,68),ie);j.position.set(T,V,0),U.add(j)}const Ae=D(new ut({color:2500908,roughness:.6,metalness:.3})),ge=new ce(new St(42,92,1),Ae),ke=ge.clone();ge.position.set(-21,46,-42),ke.position.set(21,46,-42),U.add(ge,ke),U.traverse(T=>{T.isMesh&&(T.receiveShadow=!0)});const Be=new ce(new Qr(4e3,64),new ut({color:1775378,roughness:1,transparent:!0}));Be.rotation.x=-Math.PI/2,f.add(Be);const nt=new zt,_t=new ut({color:2237994,roughness:.6,metalness:.5});for(const[T,V]of[[-1.6,-1.6],[1.6,-1.6],[-1.6,1.6],[1.6,1.6]]){const j=new ce(new St(.5,72,.5),_t);j.position.set(T,36,V),nt.add(j)}for(let T=6;T<72;T+=6){const V=new ce(new St(3.7,.3,3.7),_t);V.position.y=T,nt.add(V)}nt.position.set(-10,0,-3),f.add(nt);const at=new ce(new ei(9,10,1.2,48),new ut({color:3420460,roughness:.9}));at.position.y=.6,f.add(at),f.fog=new Ra(14261100,200,2600);const I=new Xt({side:mn,depthWrite:!1,uniforms:{sunDir:{value:A},space:{value:0},studio:{value:1},env:{value:null},envMix:{value:0},envRot:{value:3.4906585},envFlip:{value:1},sea:{value:0},hor:{value:new Pe(.98,.58,.34)},zen:{value:new Pe(.07,.16,.32)}},vertexShader:"varying vec3 vDir;void main(){vDir=normalize(position);gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform vec3 sunDir,hor,zen;uniform float space,studio,envMix,envRot,envFlip,sea;uniform sampler2D env;varying vec3 vDir;
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
  c=mix(c,vec3(.02,.025,.03),studio);gl_FragColor=vec4(c,1.);}`}),qt=new ce(new Ki(3e5,48,24),I);E.add(qt),new Cx().load("/astreia-preview/prototype/textures/sky-dawn-1k.hdr",T=>{T.colorSpace=tn,T.minFilter=Qt,I.uniforms.env.value=T,ss=""});const rt=new Ht,ct=new Ht,Ve=[],vt=[],Ge=[],w=[];let x=7;const G=()=>(x=x*16807%2147483647)/2147483647,Z=T=>T<.2?[.72,.8,1]:T<.75?[1,.97,.92]:[1,.82,.62];for(let T=0;T<4200;T++){const V=G()*2-1,j=G()*Math.PI*2,ae=Math.sqrt(1-V*V),Ie=G()**3,Ke=T<260,[Xe,Et,Je]=Z(G()),Se=Ke?.65+.35*G():.18+.7*Ie;(Ke?Ge:Ve).push(ae*Math.cos(j)*2e5,V*2e5,ae*Math.sin(j)*2e5),(Ke?w:vt).push(Xe*Se,Et*Se,Je*Se)}rt.setAttribute("position",new At(Ve,3)),rt.setAttribute("color",new At(vt,3)),ct.setAttribute("position",new At(Ge,3)),ct.setAttribute("color",new At(w,3));const ee=new La({color:16777215,vertexColors:!0,size:1.2,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1}),J=ee.clone();J.size=2.1,E.add(new ya(rt,ee),new ya(ct,J));const be=6371,he=new Id,de=new ut({roughness:.7,metalness:0,transparent:!0,opacity:0,emissive:new Pe(0,0,0)}),lt=new ut({color:16777215,transparent:!0,opacity:0,depthWrite:!1,roughness:1,emissive:new Pe(9082534),emissiveIntensity:.25}),oe=new ce(new Ki(be,128,64),de),De=new ce(new Ki(be+12,128,64),lt),He=new Xt({transparent:!0,blending:ui,depthWrite:!1,side:mn,uniforms:{sunDir:{value:A},strength:{value:0}},vertexShader:"varying vec3 vN;varying vec3 vP;varying vec3 vW;void main(){vN=normalize(normalMatrix*normal);vW=normalize(mat3(modelMatrix)*normal);vec4 p=modelViewMatrix*vec4(position,1.);vP=p.xyz;gl_Position=projectionMatrix*p;}",fragmentShader:`uniform vec3 sunDir;uniform float strength;varying vec3 vN;varying vec3 vP;varying vec3 vW;
 void main(){float sd=dot(vW,normalize(sunDir));
  vec3 day=vec3(.25,.55,1.),dusk=vec3(1.,.42,.12);vec3 c=mix(dusk,day,smoothstep(.05,.45,sd));
  float ndv=1.-abs(dot(normalize(-vP),vN));float rim=pow(ndv,3.)*.55+pow(ndv,9.)*1.1;
  float lit=smoothstep(-.35,.1,sd);float band=exp(-pow((sd-.02)/.12,2.))*1.6;
  gl_FragColor=vec4(c*rim*strength*(lit+band),1.);}`}),Ze=new Xt({transparent:!0,blending:ui,depthWrite:!1,uniforms:{sunDir:He.uniforms.sunDir,strength:He.uniforms.strength},vertexShader:"varying vec3 vN;varying vec3 vP;varying vec3 vW;void main(){vN=normalize(normalMatrix*normal);vW=normalize(mat3(modelMatrix)*normal);vec4 p=modelViewMatrix*vec4(position,1.);vP=p.xyz;gl_Position=projectionMatrix*p;}",fragmentShader:`uniform vec3 sunDir;uniform float strength;varying vec3 vN;varying vec3 vP;varying vec3 vW;
 void main(){float ndv=clamp(dot(normalize(-vP),vN),0.,1.);float sd=dot(vW,normalize(sunDir));
  float f=pow(1.-ndv,2.6);vec3 day=vec3(.16,.34,.72)*f*smoothstep(-.1,.35,sd);
  vec3 dusk=vec3(.9,.38,.14)*exp(-pow((sd-.03)/.09,2.))*(.15+.85*f)*.55;
  gl_FragColor=vec4((day+dusk)*min(strength,1.2)*.8,1.);}`}),Me=new ce(new Ki(be+8,128,64),Ze),ht=new ce(new Ki(be+55,96,48),He),qe=new zt;qe.add(oe,De,Me,ht),E.add(qe);{const T=ad.degToRad(6),V=145/360*Math.PI*2,j=Math.PI/2-T,ae=new L(-Math.cos(V)*Math.sin(j),Math.cos(j),Math.sin(V)*Math.sin(j));qe.quaternion.setFromUnitVectors(ae,new L(0,1,0)).premultiply(new Fi().setFromAxisAngle(new L(0,1,0),2.4+Math.PI))}const yt=new _s(16774118,4.2);yt.position.set(-.55,.75,-.35).multiplyScalar(1e5),He.uniforms.sunDir.value=yt.position.clone().normalize();{const T=(j,ae,Ie,Ke,Xe)=>{const Et=document.createElement("canvas");Et.width=Et.height=128;const Je=Et.getContext("2d"),Se=Je.createRadialGradient(64,64,0,64,64,64);return Se.addColorStop(0,`rgba(${j},${ae},${Ie},${Ke})`),Se.addColorStop(Xe,`rgba(${j},${ae},${Ie},${Ke*.25})`),Se.addColorStop(1,`rgba(${j},${ae},${Ie},0)`),Je.fillStyle=Se,Je.fillRect(0,0,128,128),new la(Et)},V=new no;V.addElement(new tr(T(255,236,210,1,.15),220,0,new Pe(1,.92,.8))),V.addElement(new tr(T(255,190,120,.35,.5),520,0,new Pe(1,.7,.45))),V.addElement(new tr(T(150,190,255,.07,.6),48,.6)),V.addElement(new tr(T(255,170,110,.05,.6),80,.9)),yt.add(V)}E.add(yt,new Nv(2241348,.15)),he.load("/astreia-preview/prototype/textures/earth-day.webp",T=>{T.colorSpace=Ft,T.anisotropy=8,de.map=T,de.needsUpdate=!0}),he.load("/astreia-preview/prototype/textures/earth-clouds.webp",T=>{lt.alphaMap=T,lt.needsUpdate=!0});const O={value:new L(-.55,.75,-.35).normalize()};he.load("/astreia-preview/prototype/textures/earth-night.webp",T=>{T.colorSpace=Ft,de.emissiveMap=T,de.emissive.setRGB(1,.82,.55),de.emissiveIntensity=1.6,de.onBeforeCompile=V=>{V.uniforms.uSun=O,V.vertexShader=V.vertexShader.replace("#include <common>",`#include <common>
varying vec3 vWN;`).replace("#include <beginnormal_vertex>",`#include <beginnormal_vertex>
vWN=normalize(mat3(modelMatrix)*objectNormal);`),V.fragmentShader=V.fragmentShader.replace("#include <common>",`#include <common>
uniform vec3 uSun;varying vec3 vWN;`).replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
totalEmissiveRadiance*=pow(1.-smoothstep(-.18,.12,dot(normalize(vWN),uSun)),1.5);`)},de.needsUpdate=!0});const Re=(()=>{const V=(Ie,Ke)=>{Ie=(Ie+128)%128,Ke=(Ke+128)%128;let Xe=Ie*374761393+Ke*668265263;return Xe=(Xe^Xe>>13)*1274126177,((Xe^Xe>>16)>>>0)/4294967295},j=new Uint8Array(65536);for(let Ie=0;Ie<128;Ie++)for(let Ke=0;Ke<128;Ke++){let Xe=0,Et=.5;for(let Se=0,sn=8;Se<4;Se++,sn*=2,Et*=.5){const Si=128/sn,bn=Ke/Si,Ts=Ie/Si,Bi=Math.floor(bn),zi=Math.floor(Ts),Pn=bn-Bi,ws=Ts-zi,rs=Pn*Pn*(3-2*Pn),As=ws*ws*(3-2*ws),po=sn,Rs=(Ar,Cs)=>V((Bi+Ar)%po*Si|0,(zi+Cs)%po*Si|0);Xe+=Et*((Rs(0,0)*(1-rs)+Rs(1,0)*rs)*(1-As)+(Rs(0,1)*(1-rs)+Rs(1,1)*rs)*As)}const Je=(Ie*128+Ke)*4;j[Je]=j[Je+1]=j[Je+2]=Math.round(Xe/.9375*255),j[Je+3]=255}const ae=new Ca(j,128,128);return ae.wrapS=ae.wrapT=vs,ae.magFilter=ae.minFilter=Qt,ae.needsUpdate=!0,ae})(),K={opacity:{value:0},noise:{value:Re},sunDir:{value:A},layer:{value:0}},ne={get opacity(){return K.opacity.value},set opacity(T){K.opacity.value=T}},_e=new zt;for(let T=0;T<9;T++){const V=T/8,j=new ce(new fn(9e3,9e3),new Xt({transparent:!0,depthWrite:!1,side:pn,uniforms:{...K,layer:{value:V}},vertexShader:"varying vec2 vUv;varying vec3 vW;void main(){vUv=uv;vec4 w=modelMatrix*vec4(position,1.);vW=w.xyz;gl_Position=projectionMatrix*viewMatrix*w;}",fragmentShader:`uniform sampler2D noise;uniform float opacity,layer;uniform vec3 sunDir;varying vec2 vUv;varying vec3 vW;
  void main(){vec2 p=vUv*6.;float n=texture2D(noise,p).r*.62+texture2D(noise,p*3.7+.31).r*.28+texture2D(noise,p*11.+.7).r*.1;
   float prof=1.-pow(abs(layer-.42)/.58,1.6);float d=smoothstep(.62-.2*prof,.82-.2*prof,n);
   float e=length(vUv-.5)*2.;d*=1.-smoothstep(.55,1.,e);
   float sunUp=texture2D(noise,p-normalize(sunDir.xz)*.012).r-n;
   vec3 base=mix(vec3(.38,.36,.42),vec3(.86,.72,.62),layer);vec3 lit=vec3(1.25,.86,.62)*(1.+clamp(-sunUp*14.,0.,1.)*.6);
   vec3 c=mix(base,lit,smoothstep(.25,1.,layer)*.75+.25*d);
   float dist=length(vW-cameraPosition);c=mix(c,vec3(.95,.66,.48),smoothstep(1200.,4200.,dist)*.6);
   float a=d*opacity*.5;if(a<.003)discard;gl_FragColor=vec4(c*1.05,a);}`}));j.rotation.x=-Math.PI/2,j.position.set(0,1500+T*28,0),j.renderOrder=1+T,j.frustumCulled=!1,_e.add(j)}f.add(_e);const Ee=new Wt({transparent:!0,blending:ui,depthWrite:!1,fog:!1,opacity:0}),Ye=[];he.load("/astreia-preview/story-2d/launch/exhaust-v2.webp",T=>{T.colorSpace=Ft;for(const V of Ye)V.material.map=T,V.material.needsUpdate=!0});function Ut(){const T=new fn(1,1);T.translate(0,-.5+40/1536,0);const V=new ce(T,Ee.clone());return V.frustumCulled=!1,Ye.push(V),V}const Vt=Ut(),dt=Ut(),Rt={time:{value:0}};function $t(){const T=new ei(.16,.5,1,40,24,!0);T.translate(0,-.5,0);const V=new ce(T,new Xt({transparent:!0,blending:ui,depthWrite:!1,side:pn,uniforms:{time:Rt.time,opacity:{value:0}},vertexShader:"varying float vY;varying vec3 vN;varying vec3 vV;void main(){vY=-position.y;vec4 p=modelViewMatrix*vec4(position,1.);vV=normalize(-p.xyz);vN=normalize(normalMatrix*normal);gl_Position=projectionMatrix*p;}",fragmentShader:`uniform float time,opacity;varying float vY;varying vec3 vN;varying vec3 vV;
  void main(){float ndv=abs(dot(normalize(vN),normalize(vV)));float body=pow(ndv,1.4);
   float turb=.82+.18*sin(vY*38.-time*31.)*sin(vY*17.+time*13.+ndv*6.);
   vec3 hot=vec3(1.,.92,.7),mid=vec3(1.,.56,.18),cool=vec3(.75,.22,.06);
   vec3 c=mix(hot,mid,smoothstep(.0,.25,vY));c=mix(c,cool,smoothstep(.25,.8,vY));
   float a=body*turb*(1.-smoothstep(.35,1.,vY))*smoothstep(0.,.03,vY);
   gl_FragColor=vec4(c*a*opacity*1.6,1.);}`}));return V.frustumCulled=!1,V}const On=$t(),jn=$t(),Rn=new Px().setDecoderPath("/astreia-preview/prototype/draco/"),gi=new jv().setDRACOLoader(Rn),Gt={},ri=new zt;f.add(ri);const It=new zt,cn=new zt;f.add(It),It.add(cn);const xn=document.querySelector(".proto-loader"),Yt=xn==null?void 0:xn.querySelector(".proto-loader-pct"),jt={items:new Map,shown:0,done:!1,t0:performance.now()},Bn=(T,V,j=1)=>{var ae;return jt.items.set(T,{f:Math.max(((ae=jt.items.get(T))==null?void 0:ae.f)||0,V),w:j})},_i=new Set(["hall","tessera","rocket","thor"]);for(const T of _i)Bn("glb:"+T,0,6);function Qi(){if(jt.done||!xn)return;!xe&&Ue&&re.src&&re.readyState>=2&&(xe=!0,Bn("video:"+Ue,1,12));let T=0,V=0;for(const{f:Ie,w:Ke}of jt.items.values())T+=Ie*Ke,V+=Ke;const j=V?Math.min(T/V,xe?1:.99):0,ae=performance.now()-jt.t0>15e3;jt.shown+=(Math.max(jt.shown,j)-jt.shown)*.3,(j>=1&&jt.shown>.995||ae)&&(jt.shown=1),Yt.textContent=`${Math.floor(jt.shown*100)}%`,jt.shown>=1&&(jt.done=!0,xn.classList.add("is-done"),setTimeout(()=>xn.remove(),900))}function S(T){return new Promise(V=>gi.load(`/astreia-preview/prototype/models/${T}.glb`,j=>{Gt[T]=j.scene,_i.has(T)&&Bn("glb:"+T,1,6),V(j.scene)},j=>{_i.has(T)&&j.total&&Bn("glb:"+T,Math.min(.99,j.loaded/j.total),6)},()=>{_i.has(T)&&Bn("glb:"+T,1,6),V(null)}))}let B=!1;S("hall").then(T=>{if(!(t||!T)){T.traverse(V=>{if(!V.isMesh)return;const j=V.material.map;j&&(j.colorSpace=Ft),V.material=new Wt({map:j,color:16777215})});for(const V of[...U.children])V.geometry&&!(V===ge||V===ke)&&V.material!==ie&&(V.visible=!1);U.add(T)}});const X=Promise.all([S("tessera"),S("rocket"),S("thor")]).then(([T,V,j])=>{var Ie,Ke,Xe,Et;if(t)return;const ae=Je=>Je==null?void 0:Je.traverse(Se=>{Se.isMesh&&(Se.castShadow=Se.receiveShadow=!0,Se.geometry.attributes.color&&(Se.material=Se.material.clone(),Se.material.vertexColors=!0),Se.material.envMapIntensity=.8)});if(ae(T),ae(j),T==null||T.traverse(Je=>{Je.isMesh&&(Je.receiveShadow=!1,Je.material.side=pn)}),T==null||T.traverse(Je=>{if(!Je.isMesh)return;const Se=Je.material,sn=Se.color.getHex();Se.map?(Object.assign(Se,{metalness:.12,roughness:.42,envMapIntensity:.9}),Se.color.setHex(10657689)):sn===3291193?(Object.assign(Se,{metalness:.55,roughness:.46,envMapIntensity:.6}),Se.color.setHex(1316634)):sn===13138245?(Object.assign(Se,{metalness:.25,roughness:.34}),Se.color.setHex(13194271)):(Object.assign(Se,{metalness:.6,roughness:.32,envMapIntensity:1.1}),Se.color.setHex(13817304))}),T&&(T.scale.setScalar(2.35),It.add(T)),V){for(const Je of["booster","stage","fairing-left","fairing-right"]){const Se=V.getObjectByName(Je);Se&&(Gt[Je]=Se)}ri.add(V);for(const Je of["booster","stage"])(Ie=Gt[Je])==null||Ie.traverse(Se=>{Se.isMesh&&Se.material&&!Se.material.map&&(Se.material=Se.material.clone(),Se.material.roughness=Math.min(Math.max(Se.material.roughness??.5,.38),.6),Se.material.envMapIntensity=.9)});for(const Je of["fairing-left","fairing-right"])(Ke=Gt[Je])==null||Ke.traverse(Se=>{Se.material&&(Se.material=Se.material.clone(),Se.material.metalness=0,Se.material.envMapIntensity=.35,Se.material.roughness=Math.max(Se.material.roughness??.5,.7),Se.material.side=pn)})}if(j&&T){const Je=It.matrix.clone();It.position.set(0,0,0),It.rotation.set(0,0,0),It.updateMatrixWorld(!0);const Se=new Fn().setFromObject(T),sn=Se.max.x-Se.min.x,Si=Se.max.y-Se.min.y;Je.decompose(It.position,It.quaternion,It.scale),It.userData.hatch=new L((Se.min.x+Se.max.x)/2,(Se.min.y+Se.max.y)/2-.04*Si,Se.max.z),j.rotation.set(Math.PI/2,0,0),j.scale.setScalar(1);let bn=new Fn().setFromObject(j);j.scale.setScalar(sn*.78/(bn.max.x-bn.min.x)),bn=new Fn().setFromObject(j),j.position.set(-bn.min.x,-(bn.min.y+bn.max.y)/2,-(bn.min.z+bn.max.z)/2),cn.add(j),cn.position.set(Se.min.x+.746*sn,Se.max.y-.667*Si,(Se.min.z+Se.max.z)/2),cn.rotation.z=-.52,cn.userData.dock=cn.position.clone()}(Xe=Gt.booster)==null||Xe.add(Vt,On),Vt.position.y=On.position.y=2.4,(Et=Gt.stage)==null||Et.add(dt,jn),dt.position.y=jn.position.y=42.4,d.classList.add("ready")}),q=document.getElementById("story-title"),k=document.querySelector(".story-description"),se=document.querySelector(".mission-hud-index"),fe=document.querySelector(".mission-hud-label");let Le=-1,Ne=[];const We=document.querySelector(".story-copy"),P=document.querySelector(".scroll-cue");if(P&&matchMedia("(hover:hover) and (pointer:fine)").matches){P.classList.add("follow");const T=matchMedia("(prefers-reduced-motion: reduce)").matches?1:.14;let V=0,j=0,ae=0,Ie=0,Ke=0,Xe=!1;const Et=()=>{ae+=(V-ae)*T,Ie+=(j-Ie)*T,P.style.setProperty("--cx",ae.toFixed(1)+"px"),P.style.setProperty("--cy",Ie.toFixed(1)+"px"),Ke=Math.abs(V-ae)+Math.abs(j-Ie)>.3?requestAnimationFrame(Et):0};addEventListener("pointermove",Je=>{Je.pointerType==="mouse"&&(V=Je.clientX+18,j=Je.clientY+22,Xe||(Xe=!0,ae=V,Ie=j,P.classList.add("is-live")),Ke||(Ke=requestAnimationFrame(Et)))},{passive:!0,signal:e}),document.documentElement.addEventListener("mouseleave",()=>{Xe=!1,P.classList.remove("is-live")},{signal:e}),e.addEventListener("abort",()=>cancelAnimationFrame(Ke),{once:!0})}const W=document.createElement("div");W.className="proto-molecular-host",m.append(W);const pe=ry(W),Te=document.createElement("div");Te.className="thermal-caption",Te.setAttribute("aria-hidden","true"),Te.innerHTML=oy,m.append(Te);const me=ay(m),ot=document.createElement("div");ot.className="proto-fade",m.append(ot);const ve={ch0:191,fps:30,src:{landscape:"/astreia-preview/prototype/hero-video/landscape.mp4",portrait:"/astreia-preview/prototype/hero-video/portrait.mp4"}},re=Object.assign(document.createElement("video"),{className:"hero-seq",muted:!0,playsInline:!0,preload:"auto"});re.setAttribute("aria-hidden","true"),re.disablePictureInPicture=!0,document.querySelector(".proto-canvas").after(re);let ze=!1,xe=!1,Ue="",tt=-1;const je=document.querySelector(".hero-poster");function Dt(T){if(Nc[T])return Nc[T];const V="video:"+T;return Bn(V,0,12),Nc[T]=fetch(ve.src[T]).then(async j=>{if(!j.ok)throw new Error("Opening video unavailable");const ae=+j.headers.get("content-length")||0,Ie=j.body.getReader(),Ke=[];let Xe=0;for(;;){const{done:Et,value:Je}=await Ie.read();if(Et)break;Ke.push(Je),Xe+=Je.length,ae&&Bn(V,Math.min(.99,Xe/ae),12)}return URL.createObjectURL(new Blob(Ke,{type:"video/mp4"}))}).catch(()=>null)}function $e(T){T!==Ue&&(Ue=T,xe=!1,tt=-1,Dt(T).then(V=>{if(t||!V||T!==Ue)return;re.src=V;const j=()=>{T===Ue&&!xe&&(xe=!0,Bn("video:"+T,1,12))};for(const ae of["loadeddata","canplay","seeked"])re.addEventListener(ae,j,{once:!0});re.load(),re.play().then(()=>re.pause()).catch(()=>{re.currentTime=.5/ve.fps}),setTimeout(()=>{re.readyState>=1&&j()},3e3)}))}$e(innerWidth>=innerHeight?"landscape":"portrait");function Ct({i:T,p:V}){$e(m.clientWidth>=m.clientHeight?"landscape":"portrait");const j=xe?Math.round(re.duration*ve.fps):0,ae=120/(ve.ch0-1)/160,Ie=T+V-.5,Ke=T===0?a(V)*(ve.ch0-1):ve.ch0-1+(Ie-.5)/ae;if(!xe||Ke>j-1){re.style.visibility="hidden",ze=!1;return}re.style.visibility="visible",ze=!0;const Xe=Math.round(Ke);Xe!==tt&&!re.seeking&&(tt=Xe,re.currentTime=(Xe+.5)/ve.fps)}const ln=Object.assign({}),Tt={t0:2.5,fps:30,step:120/190/160,src:{landscape:"/astreia-preview/prototype/hero-video/sep-landscape.mp4",portrait:"/astreia-preview/prototype/hero-video/sep-portrait.mp4"}},Mt=Object.assign(document.createElement("video"),{className:"hero-seq",muted:!0,playsInline:!0,preload:"auto"});Mt.setAttribute("aria-hidden","true"),Mt.disablePictureInPicture=!0,Mt.style.visibility="hidden",re.after(Mt);let Sn=!1,In="",es=-1;function ro(T){T!==In&&(In=T,Sn=!1,es=-1,(Fc[T]??(Fc[T]=fetch(Tt.src[T]).then(V=>V.ok?V.blob():null).then(V=>V&&URL.createObjectURL(V)).catch(()=>null))).then(V=>{if(t||!V||T!==In)return;Mt.src=V;const j=()=>{T===In&&(Sn=!0)};for(const ae of["loadeddata","canplay","seeked"])Mt.addEventListener(ae,j,{once:!0});Mt.load(),Mt.play().then(()=>Mt.pause()).catch(()=>{Mt.currentTime=.5/Tt.fps}),setTimeout(()=>{Mt.readyState>=1&&j()},3e3)}))}function vi({t:T}){if(T<1.2||!Object.keys(ln).length){Mt.style.visibility="hidden";return}ro(m.clientWidth>=m.clientHeight?"landscape":"portrait");const V=Sn?Math.round(Mt.duration*Tt.fps):0,j=(T-Tt.t0)/Tt.step;if(!Sn||j<0||j>V-1){Mt.style.visibility="hidden";return}Mt.style.visibility="visible",ze=!0;const ae=Math.round(j);ae!==es&&!Mt.seeking&&(es=ae,Mt.currentTime=(ae+.5)/Tt.fps)}function xi(T){const V=a(T,0,.999999)*o,j=r.findIndex(Ke=>V<Ke.end),ae=r[j],Ie=(V-ae.start)/ae.length;return{i:j,p:Ie,t:j===0?Ie*.5:a(j+Ie-.5,0,14)}}function br({i:T,p:V}){if(T!==Le){Le=T;const Ie=Cl[T];Ne=Fd(q,k,Ie.title,Ie.copy),se.textContent=`${String(T+1).padStart(2,"0")} / 15`,fe.textContent=Ie.label}const j=T===0?[.01,.2]:r[T].reveal,ae=T===14||T===0?1:1-a((V-.87)/.13);Od(Ne,k,V,j,ae,h),We.style.visibility=T===6?"hidden":"visible",pe.render(T,V)}const Zt=(T,V,j)=>new L(T,V,j);new L;const zn=new L;function Er(T,V){const j=1-c(.85,1.45,T),ae=c(1.62,2.7,T),Ie=ae*ae*2400,Ke=l(0,420,c(1.75,3.4,T)**1.6),Xe=c(1.95,2.9,T),Et=c(.55,.97,T),Je=c(2.55,2.95,T),Se=c(2.92,3.32,T),sn=c(3.12,3.6,T);ri.position.y=Ie,Gt.booster&&(Gt.booster.position.set(-6*Je,-90*Je*Je,0),Gt.booster.rotation.z=.5*Je,Gt.booster.visible=Je<.999);const Si=Se,bn=sn;for(const[un,oi]of[["fairing-left",-1],["fairing-right",1]]){const $n=Gt[un];if(!$n)continue;$n.traverse(bi=>{bi.material&&bi.material.color.setScalar(l(.32,1,c(1,1.6,T)))});const Ls=(1-Et)*oi*30;$n.position.set(Ls+oi*(bn*18),bn*-6+(1-Et)*1.8,0),$n.rotation.z=oi*-(.9*Si+.6*bn)}if(Gt.stage){const un=c(2.98,3.4,T);Gt.stage.position.set(-18*un,-140*un*un-40*sn,-14*un),Gt.stage.rotation.set(-.35*un,0,.5*un),Gt.stage.visible=sn<.999&&un<.999}const Ts=sn;It.position.set(l(0,0,Ts),u+Ie+l(0,6,Ts),0),It.rotation.set(0,l(-.35+.35*c(0,.6,T),.35,c(3.2,4.5,T)),l(0,-.12,Ts)),cn.visible=T>1.2;const Bi=c(1.6,1.72,T)*(1-c(2.55,2.62,T)),zi=c(2.66,2.74,T)*(1-c(2.9,2.98,T)),Pn=h?1:1+.04*Math.sin(V*23)+.025*Math.sin(V*37);Vt.material.opacity=Bi,Vt.scale.set(9*Pn,l(10,52,Bi)*Pn,1),dt.material.opacity=zi,dt.scale.set(7*Pn,l(8,34,zi)*Pn,1);const ws=c(1.9,2.6,T);Rt.time.value=h?0:V,On.material.uniforms.opacity.value=Bi*.85,On.scale.set(l(8,15,ws)*Pn,l(10,60,Bi)*Pn,l(8,15,ws)*Pn),On.visible=Bi>.001,jn.material.uniforms.opacity.value=zi*.9,jn.scale.set(9*Pn,l(8,30,zi)*Pn,9*Pn),jn.visible=zi>.001;const rs=c(.85,1.35,T),As=c(1.25,1.6,T),po=As<.999?1:0;U.position.set(0,0,-420*As*As),ge.position.x=-21-40*rs,ke.position.x=21+40*rs,U.visible=po>0,Be.visible=at.visible=nt.visible=Ke<8&&j<.995,nt.visible=!1,Be.material.opacity=1-j,f.fog.color.setHex(j>.5?329224:14261100),y.intensity=900*j,H.intensity=650*j,y.position.set(-3,u+16,13),y.target.position.set(0,u,0),H.position.set(8,u+6,-10),H.target.position.set(0,u,0),C.intensity=l(.4,3.2,1-j),C.target.position.copy(It.position),C.position.copy(It.position).addScaledVector(A,30),_.intensity=1.6*Xe,_.target.position.copy(It.position),_.position.copy(It.position).add(Zt(.2,-10,.3)),Y.intensity=l(.15,.45,1-j)*(1-Xe*.7),f.fog.far=l(2600,1e6,c(1.8,2.3,T)),ne.opacity=Math.sin(Math.PI*c(1.95,2.4,T))*.95,_e.visible=ne.opacity>.002,_e.position.y=Ie-1500+40-520*(c(1.95,2.4,T)-.5);const Rs=u+Ie,Ar=30+Ie,Cs=It.position.y,mo=1-(1-a(T/.6))**2,go=-1.05+.55*mo,qd=Zt(Math.sin(go)*l(13,14.5,mo),u+l(.5,.2,mo),Math.cos(go)*l(13,14.5,mo)),_o=c(.6,1.45,T),ka=c(1.6,2.2,T),Ha=c(2.85,3.45,T),vo=c(3.4,4.5,T),Yd=Zt(-Math.cos(go)*.9,u-.9,Math.sin(go)*.9),Ps=new L(0,l(u,l(Ar,Rs,ka*.4),_o),0).lerp(Yd,1-_o);zn.copy(qd).lerp(Zt(34,24,150),_o),zn.lerp(Zt(18,Ar-26,70),ka),zn.y=Math.max(zn.y,Ie+l(22,Ar-26-Ie,ka));const xo=(T>=1.6?1:0)*(1-c(2.05,2.3,T));xo>0&&zn.lerp(Zt(34,24+.7*Ie,150),xo),xo>0&&Ps.lerp(Zt(0,30+Ie-12*c(1.7,2,T),0),xo);const ru=c(2.35,2.75,T),jd=Zt(l(16,7,Ha),l(10,8,Ha),l(34,19,Ha));Ps.lerp(Zt(0,Cs-2,0),ru),zn.lerp(Zt(0,Cs,0).add(jd),ru);const ou=l(.38,1.15,vo);zn.lerp(Zt(Math.sin(ou)*16,Cs+5+2*vo,Math.cos(ou)*16),vo),Ps.lerp(Zt(.8,Cs-1.2,0),vo);let Va=-.12*(1-_o);if(T>.5&&T<1.45){const un=Math.min(T,1),oi=1-(1-a(.5/.6))**2,$n=-1.05+.55*oi,Ls=l(13,14.5,oi),bi=c(.6,1.45,.5),ai=Zt(Math.sin($n)*Ls,u+l(.5,.2,oi),Math.cos($n)*Ls).lerp(Zt(34,24,150),bi),Mo=Zt(0,l(u,30,bi),0).lerp(Zt(-Math.cos($n)*.9,u-.9,Math.sin($n)*.9),1-bi),Ga=-.12*(1-bi),Wa=c(.5,.85,un),au=Math.atan2(ai.x,ai.z)*(1-Wa);let So=l(Math.hypot(ai.x,ai.z),7.5,c(.6,.97,un));So=l(So,6.8,c(.97,1,un));const Kd=Zt(Math.sin(au)*So,l(ai.y,u+.3,Wa),Math.cos(au)*So),$d=Mo.clone().lerp(Zt(0,u+.2,0),c(.5,.8,un)),Zd=Ga*(1-Wa),Xa=T<=1?0:c(1,1.45,T);zn.copy(Kd.lerp(zn,Xa)),Ps.copy($d.lerp(Ps,Xa)),Va=l(Zd,Va,Xa)}M.position.copy(zn),M.lookAt(Ps),M.rotateZ(Va),b.quaternion.copy(M.quaternion),b.position.set(0,be+Ke+.05,0);{const un=new L(0,0,-1).applyQuaternion(M.quaternion);un.y=0,un.normalize();const oi=Math.acos(be/(be+Math.max(Ke,1))),$n=un.clone().multiplyScalar(Math.cos(oi-.05)).add(new L(.35,0,0).applyQuaternion(M.quaternion).setY(0)).setY(-Math.sin(oi-.05)).normalize(),Ls=new L(-.55,.75,-.35).normalize(),bi=c(2.25,2.6,T)*(1-c(3.45,4,T)),ai=Ls.clone().lerp($n,bi).normalize();yt.position.copy(ai).multiplyScalar(1e5),He.uniforms.sunDir.value.copy(ai),O.value.copy(ai);const Mo=c(2.2,2.6,T);if(Mo>0){const Ga=A.clone().lerp(ai,Mo).normalize();C.position.copy(C.target.position).addScaledVector(Ga,30)}}qt.position.copy(b.position),I.uniforms.envMix.value=I.uniforms.env.value?1-c(2.1,2.6,T):0,I.uniforms.space.value=Xe,I.uniforms.studio.value=j,I.uniforms.sea.value=0,I.uniforms.hor.value.setRGB(.98,.58,.34),I.uniforms.zen.value.setRGB(.07,.16,.32),I.uniforms.sunDir.value=A,ee.opacity=c(.55,1,Xe);const yo=c(.25,.75,Xe);return de.opacity=yo,lt.opacity=yo*.7,He.uniforms.strength.value=yo*.95,oe.visible=De.visible=Me.visible=ht.visible=yo>.001,{studio:j}}const Cn=new zt;f.add(Cn);const Kt=hy({environment:f.environment,fg:f,bg:E,camera:M,bgCamera:b,tex:he,assets:Gt,tesseraPivot:It,thorPivot:cn,globe:qe,earthMat:de,cloudMat:lt,skyMat:I,starMat:ee,atmoMat:He,R:be,reduced:h}),Ms=Kt.cassette();Ms.scale.setScalar(.6),Cn.add(Ms);let Dn=0,ts=32;function yi(T,V,j){if(It.visible=!0,qe.visible=!0,Kt.thorFree.visible=!1,Kt.ocean.visible=!1,Cn.visible=!1,Er(Math.min(T,4.5),V),cn.userData.dock&&cn.position.copy(cn.userData.dock),T<=4.5)return Kt.idle(),{scene:"world",fade:0,heat:0};Kt.prepare();const ae=Kt.pose(T,V,j,{fov:ts,heat:Dn});if(Dn=ae.heat||0,ae.transfer){const Ie=ae.transfer.move;Cn.visible=Ie>0&&Ie<1,Cn.position.copy(ae.transfer.from).lerp(ae.transfer.to,Ie).add(new L(0,.3,1.6).multiplyScalar(Math.sin(Ie*Math.PI))),Cn.scale.setScalar(1.1*(1-.7*c(.75,1,Ie))),Cn.rotation.set(0,Ie*1.2,-.3*Ie)}return ae}const nn=new Ox(g,new qn(1,1,{type:An,samples:4})),Tr=new Dh(E,b),Mi=new Dh(f,M);Mi.clear=!1,Mi.clearDepth=!0;const Ss=new _r(new Oe(1,1),.3,.5,1.7),oo=new Rl({uniforms:{tDiffuse:{value:null}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:"uniform sampler2D tDiffuse;varying vec2 vUv;void main(){vec4 c=texture2D(tDiffuse,vUv);if(any(isnan(c))||any(isinf(c)))c=vec4(0.,0.,0.,1.);gl_FragColor=min(c,vec4(48.));}"}),ao=new Rl({uniforms:{tDiffuse:{value:null},uAspect:{value:1},uWarm:{value:1}},vertexShader:"varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",fragmentShader:`uniform sampler2D tDiffuse;uniform float uAspect,uWarm;varying vec2 vUv;
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
   gl_FragColor=vec4(clamp(col,0.,1.),1.);}`});nn.addPass(Tr),nn.addPass(Mi),nn.addPass(oo),nn.addPass(Ss),nn.addPass(new kx),nn.addPass(ao);const bs=new xd(128,{type:An}),co=new _d(1,4e5,bs);let kn=null,lo="",uo=0;function wr(T){if(T<1.45||T>12.5){f.environment!==R&&(f.environment=R),f.environmentIntensity=.55;return}const V=`${Math.round(b.position.y/15)}:${Math.round(T*3)}`,j=performance.now();if(V===lo||j-uo<250){kn&&(f.environment=kn);return}lo=V,uo=j,co.position.copy(b.position),co.update(g,E);const ae=N.fromCubemap(bs.texture).texture;kn==null||kn.dispose(),kn=ae,f.environment=kn,f.environmentIntensity=1.15}function ns(T,V=0){const j={world:[f,M],sea:[f,M],ocean:[f,M],bio:[Kt.bio,Kt.bioCam],lab:[Kt.lab,Kt.labCam],care:[Kt.care,Kt.careCam]},[ae,Ie]=j[T.scene],Ke=T.scene==="world"||T.scene==="sea";Ke?wr(V):f.environment=R,Tr.enabled=Ke,Mi.scene=ae,Mi.camera=Ie,Mi.clear=!Ke,Ss.strength=Ke?.28+.16*(T.heat||0):.16,g.toneMappingExposure=T.exposure??(T.scene==="world"?l(1,1/.6,c(1.55,2.1,V)*(1-c(4.15,4.5,V))):1),J.opacity=ee.opacity,nn.render(),ot.style.opacity=String(T.fade||0),ot.style.background=T.fadeColor||"#000",Te.style.opacity=String(Dn),me.render(Dn);const Xe=q.getBoundingClientRect(),Et=m.getBoundingClientRect();m.style.setProperty("--thermal-caption-y",`${Xe.top-Et.top+Xe.height/2}px`)}const Ot=h?null:new Jd({lerp:.085,smoothWheel:!0}),Kn=document.querySelector(".proto-track");let is=performance.now(),Oi=16,ss="",Es=1e3,Da=0,Ua=0;const Na=[];function ho(){const T=m.clientWidth,V=m.clientHeight;g.setPixelRatio(p),g.setSize(T,V,!1),nn.setPixelRatio(p),nn.setSize(T,V),ao.uniforms.uAspect.value=T/V,Ss.resolution.set(T*p/2,V*p/2),ts=T<V?48:32,M.aspect=b.aspect=T/V,M.fov=b.fov=ts,M.updateProjectionMatrix(),b.updateProjectionMatrix();for(const j of[Kt.bioCam,Kt.labCam,Kt.careCam])j.aspect=T/V,j.fov=T<V?46:32,j.updateProjectionMatrix();ss=""}let fo=0,Fa=innerWidth;addEventListener("resize",()=>{ho(),innerWidth!==Fa&&(Fa=innerWidth,fo>0&&fo<=1&&za(fo*(Kn.offsetHeight-innerHeight)))},{signal:e}),ho(),addEventListener("visibilitychange",()=>{re.pause(),Mt.pause(),document.hidden||(is=performance.now(),ss="")},{signal:e});function tu(T){t||(document.hidden||Oa(T),n=requestAnimationFrame(tu))}function Oa(T){Ot==null||Ot.raf(T),Qi();const V=T-is;is=T,Oi=Oi*.95+V*.05,Da<60?(Da++,Na.push(V),Da===60&&(Na.sort((Xe,Et)=>Xe-Et),Es=Na[30],Oi=Es)):!ze&&Oi>Es*1.35&&p>.75?(p=Math.max(.75,p-.1),ho(),Oi=Es,Ua=T+6e3):!ze&&Oi<Es*1.04&&p<v&&T-Ua>2e3&&(p=Math.min(v,p+.05),Ua=T,ho(),Oi=Es);const j=Kn.offsetHeight-innerHeight,ae=xi(j>0?scrollY/j:0);j>0&&innerWidth===Fa&&(fo=scrollY/j),!i&&ae.t>8&&!B&&(B=!0,S("helicopter")),Ct(ae),vi(ae),br(ae),je&&(je.hidden=ze||d.classList.contains("ready")&&(xe||ae.i>0)),P==null||P.classList.toggle("is-gone",scrollY>4),m.style.setProperty("--mission-progress",(ae.t/14).toFixed(4));const Ie=ae.t>1.55&&ae.t<3.05||ae.t>4.9&&ae.t<7.5||ae.t>8.5&&ae.t<12.6,Ke=`${ae.t.toFixed(5)}:${Ie?Math.floor(T/16):0}`;ze?ss="":Ke!==ss&&!nu&&(ss=Ke,ns(yi(ae.t,T/1e3,V),ae.t))}X.then(()=>{const T=[0,1,1.9,2.06,2.2,2.7,3.3,4.3,5.3,7.2,8,9,10,11,12,13,14].filter(j=>!i||j<=i-.5),V=()=>{if(t)return;const j=T.shift();j!==void 0&&(ns(yi(j,0,16),j),ss="",ze||Oa(performance.now()),requestAnimationFrame(V))};V()});const Hd=document.querySelector(".proto-content");let nu=!1;document.querySelectorAll(".proto-content section").forEach(T=>T.querySelectorAll("[data-reveal]").forEach((V,j)=>V.style.setProperty("--i",j)));const Ba=new IntersectionObserver(T=>T.forEach(V=>{V.isIntersecting&&(V.target.classList.add("is-in"),Ba.unobserve(V.target))}),{rootMargin:"0px 0px -12% 0px"});document.querySelectorAll("[data-reveal]").forEach(T=>Ba.observe(T));const iu=document.querySelector(".proto-nav,.site-nav"),Vd=[...document.querySelectorAll(".pc-principles,.pc-cta")];function su(){if(i)return;const T=Hd.getBoundingClientRect().top;m.classList.toggle("is-covered",T<innerHeight*.55),nu=T<=0,m.style.visibility=T<=-innerHeight?"hidden":"",iu.classList.toggle("on-light",Vd.some(V=>{const j=V.getBoundingClientRect();return j.top<64&&j.bottom>24}))}addEventListener("scroll",su,{passive:!0,signal:e}),su(),n=requestAnimationFrame(tu);function Gd(){nn.render();const T=g.getContext(),V=T.drawingBufferWidth,j=T.drawingBufferHeight,ae=new Uint8Array(4);let Ie=0,Ke=0,Xe=0;for(let Et=1;Et<12;Et++)for(let Je=1;Je<12;Je++){T.readPixels(Math.floor(V*Je/12),Math.floor(j*Et/12),1,1,T.RGBA,T.UNSIGNED_BYTE,ae);const Se=(ae[0]+ae[1]+ae[2])/3;Ke+=Se,Xe++,Se<6&&Ie++}return{dark:Ie/Xe,mean:Ke/Xe}}window.__proto={boot:jt,skyMat:I,world:yi,draw:ns,bgCamera:b,sun:C,bgSun:yt,vehicle:ri,boosterPlume:Vt,stagePlume:dt,act:r,actLength:o,get trackMax(){return Kn.offsetHeight-innerHeight},step:()=>Oa(performance.now()),get heroReady(){return xe},probe:Gd,later:Kt,composer:nn,bloom:Ss,get avgFrame(){return Oi},get dpr(){return p},renderer:g,earthMat:de,cloudMat:lt,thorPivot:cn,tesseraPivot:It,assets:Gt,camera:M,globe:qe,lenis:Ot};function za(T){Ot?Ot.scrollTo(T,{immediate:!0,force:!0}):window.scrollTo(0,T)}function Wd(T){const V=Kn.offsetHeight-innerHeight,j=r[T];return j?(j.start+dy(T)*j.length)/o*V:-1}return{navigationBoundary(){const T=document.getElementById("site-footer");return T?T.offsetTop-innerHeight:1/0},scrollTo(T){Ot==null||Ot.resize(),za(T)},goHash(T){const V=T==="#constellation"?0:Cl.findIndex(j=>`#${j.id}`===T);return V<0||!r[V]?!1:(za(Wd(V)),!0)},destroy(){var ae,Ie,Ke;t=!0,s.abort(),cancelAnimationFrame(n),Ba.disconnect(),Ot==null||Ot.destroy(),pe.destroy(),(ae=me.destroy)==null||ae.call(me),Rn.dispose();const T=new Set,V=new Set,j=new Set;for(const Xe of[f,E,Kt.bio,Kt.lab,Kt.care])Xe.traverse(Et=>{var Je;Et.geometry&&T.add(Et.geometry);for(const Se of[].concat(Et.material||[])){V.add(Se);for(const sn of Object.values(Se))sn!=null&&sn.isTexture&&j.add(sn)}(Je=Et.shadow)==null||Je.dispose()});T.forEach(Xe=>Xe.dispose()),V.forEach(Xe=>Xe.dispose()),j.forEach(Xe=>Xe.dispose()),kn==null||kn.dispose(),N.dispose();for(const Xe of[re,Mt])Xe.pause(),Xe.removeAttribute("src"),Xe.load();iu.classList.remove("on-light"),document.documentElement.classList.remove("is-focus"),document.documentElement.style.removeProperty("--act-length"),(Ie=nn.dispose)==null||Ie.call(nn),g.dispose(),g.forceContextLoss(),((Ke=window.__proto)==null?void 0:Ke.renderer)===g&&delete window.__proto}};function Xd(){return Bh()}}export{my as mountPrototype};
