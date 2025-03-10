import{c2 as Ae,c1 as nt,dj as dr,bU as It,af as Oe,ag as mr,dC as je,ad as f,dP as hr,dx as y,dz as P,dA as N,pV as fr,d2 as pr,cb as Pe,_ as vr,dY as gr,G as Pt,s as it,bN as _r,eK as dt,qj as Tr,ds as me,rs as he,X as mt,rQ as xr,d7 as Ar,d9 as Sr,fV as Xe,d6 as $r,gC as at,aV as Mt,cn as ot,ca as Lt,o3 as Me,j as pe,c3 as st,ki as br,nk as Er,ni as yr,nj as Rr,fK as wr,lA as Cr,c7 as Ir,c8 as Pr,te as ht,ay as ft,aN as K,c6 as Mr,i3 as k}from"./index-Dv-JqQDv.js";import{o as Le,r as Lr,e as ae}from"./mat4f64-Dk4dwAN8.js";import{t as Nr,l as Fr}from"./Indices-BTetzIKW.js";import{t as Dr,u as ve,a as Or,N as B}from"./basicInterfaces-wONHx_SN.js";import{s as V}from"./Util-CQaYQWOS.js";import{r as Nt,e as fe,t as zr,h as Ur}from"./debugFlags-CfrzpJ7g.js";import{d as Hr}from"./triangle-0a93pGd5.js";import{e as T}from"./VertexAttribute-BnAa5VW0.js";import{t as Vr,o as Gr,r as Br}from"./doublePrecisionUtils-B0owpBza.js";import{t as Wr}from"./requestImageUtils-CO_Ks2k6.js";import{c as z,G as te,L as ie,D as Ke,R as G,O as F,X as pt,E as kr,I as x}from"./enums-BlUEVwJR.js";import{c as ge,a as jr,e as Xr,d as Kr}from"./Texture-BsiXXqc8.js";import{l as Ft,o as qr}from"./renderState-yUi34s5A.js";import{e as oe}from"./mat3f64-BBpwCtoL.js";import{a as W,s as Ve,h as b,g as M,e as Dt,f as ze,i as re,d as Ot,k as ce,t as Qr,c as Yr,o as zt,b as Zr}from"./Matrix4PassUniform-B-NXMru_.js";import{o as s,n as Ue}from"./interfaces-B8ge7Jg9.js";import{a as S}from"./BindType-BmZEZMMh.js";import{j as Jr,n as en}from"./mat3-B7LiNcRs.js";import{o as qe}from"./vec2-DGogPjh1.js";import{n as Ut}from"./vec2f64-Diu2Kaa8.js";import{r as _e,t as tn}from"./ShaderTechniqueConfiguration-D3UbJ2mX.js";function la(e,t=!1){return e<=Ae?t?new Array(e).fill(0):new Array(e):new Float32Array(e)}function ca(e){return nt(e)?e.length<Ae?e:new Float32Array(e):e.length<Ae?Array.from(e):e}function ua(e){return(nt(e)?e.length:e.byteLength/8)<=Ae?Array.from(e):new Float32Array(e)}function da(e,t,r){return Array.isArray(e)?e.slice(t,t+r):e.subarray(t,t+r)}function rn(e){if(e.length<Ae)return Array.from(e);if(nt(e))return Float64Array.from(e);if(!("BYTES_PER_ELEMENT"in e))return Array.from(e);switch(e.BYTES_PER_ELEMENT){case 1:return Uint8Array.from(e);case 2:return dr(e)?Uint16Array.from(e):Int16Array.from(e);case 4:return Float32Array.from(e);default:return Float64Array.from(e)}}let nn=class Ht{constructor(t,r,n){this.primitiveIndices=t,this._numIndexPerPrimitive=r,this.position=n,this._children=void 0,V(t.length>=1),V(n.size===3||n.size===4);const{data:i,size:a,indices:o}=n;V(o.length%this._numIndexPerPrimitive==0),V(o.length>=t.length*this._numIndexPerPrimitive);const c=t.length;let l=a*o[this._numIndexPerPrimitive*t[0]];j.clear(),j.push(l);const d=Oe(i[l],i[l+1],i[l+2]),u=mr(d);for(let h=0;h<c;++h){const p=this._numIndexPerPrimitive*t[h];for(let R=0;R<this._numIndexPerPrimitive;++R){l=a*o[p+R],j.push(l);let $=i[l];d[0]=Math.min($,d[0]),u[0]=Math.max($,u[0]),$=i[l+1],d[1]=Math.min($,d[1]),u[1]=Math.max($,u[1]),$=i[l+2],d[2]=Math.min($,d[2]),u[2]=Math.max($,u[2])}}this.bbMin=d,this.bbMax=u;const m=je(f(),this.bbMin,this.bbMax,.5);this.radius=.5*Math.max(Math.max(u[0]-d[0],u[1]-d[1]),u[2]-d[2]);let E=this.radius*this.radius;for(let h=0;h<j.length;++h){l=j.at(h);const p=i[l]-m[0],R=i[l+1]-m[1],$=i[l+2]-m[2],Y=p*p+R*R+$*$;if(Y<=E)continue;const se=Math.sqrt(Y),le=.5*(se-this.radius);this.radius=this.radius+le,E=this.radius*this.radius;const Z=le/se;m[0]+=p*Z,m[1]+=R*Z,m[2]+=$*Z}this.center=m,j.clear()}getChildren(){if(this._children||hr(this.bbMin,this.bbMax)<=1)return this._children;const t=je(f(),this.bbMin,this.bbMax,.5),r=this.primitiveIndices.length,n=new Uint8Array(r),i=new Array(8);for(let u=0;u<8;++u)i[u]=0;const{data:a,size:o,indices:c}=this.position;for(let u=0;u<r;++u){let m=0;const E=this._numIndexPerPrimitive*this.primitiveIndices[u];let h=o*c[E],p=a[h],R=a[h+1],$=a[h+2];for(let Y=1;Y<this._numIndexPerPrimitive;++Y){h=o*c[E+Y];const se=a[h],le=a[h+1],Z=a[h+2];se<p&&(p=se),le<R&&(R=le),Z<$&&($=Z)}p<t[0]&&(m|=1),R<t[1]&&(m|=2),$<t[2]&&(m|=4),n[u]=m,++i[m]}let l=0;for(let u=0;u<8;++u)i[u]>0&&++l;if(l<2)return;const d=new Array(8);for(let u=0;u<8;++u)d[u]=i[u]>0?new Uint32Array(i[u]):void 0;for(let u=0;u<8;++u)i[u]=0;for(let u=0;u<r;++u){const m=n[u];d[m][i[m]++]=this.primitiveIndices[u]}this._children=new Array;for(let u=0;u<8;++u)d[u]!==void 0&&this._children.push(new Ht(d[u],this._numIndexPerPrimitive,this.position));return this._children}static prune(){j.prune()}};const j=new It({deallocator:null});function an(e,t){if(!e)return!1;const{size:r,data:n,indices:i}=e;y(t,0,0,0),y(w,0,0,0);let a=0,o=0;for(let c=0;c<i.length-2;c+=3){const l=i[c]*r,d=i[c+1]*r,u=i[c+2]*r;y(_,n[l],n[l+1],n[l+2]),y(D,n[d],n[d+1],n[d+2]),y(Se,n[u],n[u+1],n[u+2]);const m=Hr(_,D,Se);m?(P(_,_,D),P(_,_,Se),N(_,_,1/3*m),P(t,t,_),a+=m):(P(w,w,_),P(w,w,D),P(w,w,Se),o+=3)}return(o!==0||a!==0)&&(a!==0?(N(t,t,1/a),!0):o!==0&&(N(t,w,1/o),!0))}function on(e,t){if(!e)return!1;const{size:r,data:n,indices:i}=e;y(t,0,0,0);let a=-1,o=0;for(let c=0;c<i.length;c++){const l=i[c]*r;a!==l&&(t[0]+=n[l],t[1]+=n[l+1],t[2]+=n[l+2],o++),a=l}return o>1&&N(t,t,1/o),o>0}function sn(e,t,r){if(!e)return!1;y(r,0,0,0),y(w,0,0,0);let n=0,i=0;const{size:a,data:o,indices:c}=e,l=c.length-1,d=l+(t?2:0);for(let u=0;u<d;u+=2){const m=u<l?u+1:0,E=c[u<l?u:l]*a,h=c[m]*a;_[0]=o[E],_[1]=o[E+1],_[2]=o[E+2],D[0]=o[h],D[1]=o[h+1],D[2]=o[h+2],N(_,P(_,_,D),.5);const p=fr(_,D);p>0?(P(r,r,N(_,_,p)),n+=p):n===0&&(P(w,w,_),i++)}return n!==0?(N(r,r,1/n),!0):i!==0&&(N(r,w,1/i),!0)}const _=f(),D=f(),Se=f(),w=f();let ln=class{constructor(t){this.channel=t,this.id=pr()}};function cn(e,t){return e==null&&(e=[]),e.push(t),e}function un(e,t){if(e==null)return null;const r=e.filter(n=>n!==t);return r.length===0?null:r}function ha(e,t,r,n,i){$e[0]=e.get(t,0),$e[1]=e.get(t,1),$e[2]=e.get(t,2),Vr($e,X,3),r.set(i,0,X[0]),n.set(i,0,X[1]),r.set(i,1,X[2]),n.set(i,1,X[3]),r.set(i,2,X[4]),n.set(i,2,X[5])}const $e=f(),X=new Float32Array(6);let fa=class Vt extends Nt{constructor(t,r,n=null,i=fe.Mesh,a=null,o=-1){super(),this.material=t,this.mapPositions=n,this.type=i,this.objectAndLayerIdColor=a,this.edgeIndicesLength=o,this.visible=!0,this._attributes=new Map,this._boundingInfo=null;for(const[c,l]of r)this._attributes.set(c,{...l,indices:Nr(l.indices)}),c===T.POSITION&&(this.edgeIndicesLength=this.edgeIndicesLength<0?this._attributes.get(c).indices.length:this.edgeIndicesLength)}instantiate(t={}){const r=new Vt(t.material||this.material,[],this.mapPositions,this.type,this.objectAndLayerIdColor,this.edgeIndicesLength);return this._attributes.forEach((n,i)=>{n.exclusive=!1,r._attributes.set(i,n)}),r._boundingInfo=this._boundingInfo,r.transformation=t.transformation||this.transformation,r}get attributes(){return this._attributes}getMutableAttribute(t){let r=this._attributes.get(t);return r&&!r.exclusive&&(r={...r,exclusive:!0,data:rn(r.data)},this._attributes.set(t,r)),r}setAttributeData(t,r){const n=this._attributes.get(t);n&&this._attributes.set(t,{...n,exclusive:!0,data:r})}get indexCount(){const t=this._attributes.values().next().value.indices;return(t==null?void 0:t.length)??0}get faceCount(){return this.indexCount/3}get boundingInfo(){return this._boundingInfo==null&&(this._boundingInfo=this._calculateBoundingInfo()),this._boundingInfo}computeAttachmentOrigin(t){return!!(this.type===fe.Mesh?this._computeAttachmentOriginTriangles(t):this.type===fe.Line?this._computeAttachmentOriginLines(t):this._computeAttachmentOriginPoints(t))&&(this._transformation!=null&&Pe(t,t,this._transformation),!0)}_computeAttachmentOriginTriangles(t){const r=this.attributes.get(T.POSITION);return an(r,t)}_computeAttachmentOriginLines(t){const r=this.attributes.get(T.POSITION);return sn(r,dn(this.material.parameters,r),t)}_computeAttachmentOriginPoints(t){const r=this.attributes.get(T.POSITION);return on(r,t)}invalidateBoundingInfo(){this._boundingInfo=null}_calculateBoundingInfo(){const t=this.attributes.get(T.POSITION);if(!t||t.indices.length===0)return null;const r=this.type===fe.Mesh?3:1;V(t.indices.length%r==0,"Indexing error: "+t.indices.length+" not divisible by "+r);const n=Fr(t.indices.length/r);return new nn(n,r,t)}get transformation(){return this._transformation??Le}set transformation(t){this._transformation=t&&t!==Le?Lr(t):null}addHighlight(){const t=new ln(Dr.Highlight);return this.highlights=cn(this.highlights,t),t}removeHighlight(t){this.highlights=un(this.highlights,t)}};function dn(e,t){return!(!("isClosed"in e)||!e.isClosed)&&t.indices.length>2}function mn(){return vt??(vt=(async()=>{const e=await vr(()=>import("./basis_transcoder-B40h2JNH.js"),[],import.meta.url),t=await e.default({locateFile:r=>gr(`esri/libs/basisu/${r}`)});return t.initializeBasis(),t})()),vt}let vt;var q;(function(e){e[e.ETC1_RGB=0]="ETC1_RGB",e[e.ETC2_RGBA=1]="ETC2_RGBA",e[e.BC1_RGB=2]="BC1_RGB",e[e.BC3_RGBA=3]="BC3_RGBA",e[e.BC4_R=4]="BC4_R",e[e.BC5_RG=5]="BC5_RG",e[e.BC7_M6_RGB=6]="BC7_M6_RGB",e[e.BC7_M5_RGBA=7]="BC7_M5_RGBA",e[e.PVRTC1_4_RGB=8]="PVRTC1_4_RGB",e[e.PVRTC1_4_RGBA=9]="PVRTC1_4_RGBA",e[e.ASTC_4x4_RGBA=10]="ASTC_4x4_RGBA",e[e.ATC_RGB=11]="ATC_RGB",e[e.ATC_RGBA=12]="ATC_RGBA",e[e.FXT1_RGB=17]="FXT1_RGB",e[e.PVRTC2_4_RGB=18]="PVRTC2_4_RGB",e[e.PVRTC2_4_RGBA=19]="PVRTC2_4_RGBA",e[e.ETC2_EAC_R11=20]="ETC2_EAC_R11",e[e.ETC2_EAC_RG11=21]="ETC2_EAC_RG11",e[e.RGBA32=13]="RGBA32",e[e.RGB565=14]="RGB565",e[e.BGR565=15]="BGR565",e[e.RGBA4444=16]="RGBA4444"})(q||(q={}));let L=null,be=null;async function Gt(){return be==null&&(be=mn(),L=await be),be}function hn(e,t){if(L==null)return e.byteLength;const r=new L.BasisFile(new Uint8Array(e)),n=Wt(r)?Bt(r.getNumLevels(0),r.getHasAlpha(),r.getImageWidth(0,0),r.getImageHeight(0,0),t):0;return r.close(),r.delete(),n}function fn(e,t){if(L==null)return e.byteLength;const r=new L.KTX2File(new Uint8Array(e)),n=kt(r)?Bt(r.getLevels(),r.getHasAlpha(),r.getWidth(),r.getHeight(),t):0;return r.close(),r.delete(),n}function Bt(e,t,r,n,i){const a=jr(t?z.COMPRESSED_RGBA8_ETC2_EAC:z.COMPRESSED_RGB8_ETC2),o=i&&e>1?(4**e-1)/(3*4**(e-1)):1;return Math.ceil(r*n*a*o)}function Wt(e){return e.getNumImages()>=1&&!e.isUASTC()}function kt(e){return e.getFaces()>=1&&e.isETC1S()}async function pn(e,t,r){L==null&&(L=await Gt());const n=new L.BasisFile(new Uint8Array(r));if(!Wt(n))return null;n.startTranscoding();const i=jt(e,t,n.getNumLevels(0),n.getHasAlpha(),n.getImageWidth(0,0),n.getImageHeight(0,0),(a,o)=>n.getImageTranscodedSizeInBytes(0,a,o),(a,o,c)=>n.transcodeImage(c,0,a,o,0,0));return n.close(),n.delete(),i}async function vn(e,t,r){L==null&&(L=await Gt());const n=new L.KTX2File(new Uint8Array(r));if(!kt(n))return null;n.startTranscoding();const i=jt(e,t,n.getLevels(),n.getHasAlpha(),n.getWidth(),n.getHeight(),(a,o)=>n.getImageTranscodedSizeInBytes(a,0,0,o),(a,o,c)=>n.transcodeImage(c,a,0,0,o,0,-1,-1));return n.close(),n.delete(),i}function jt(e,t,r,n,i,a,o,c){const{compressedTextureETC:l,compressedTextureS3TC:d}=e.capabilities,[u,m]=l?n?[q.ETC2_RGBA,z.COMPRESSED_RGBA8_ETC2_EAC]:[q.ETC1_RGB,z.COMPRESSED_RGB8_ETC2]:d?n?[q.BC3_RGBA,z.COMPRESSED_RGBA_S3TC_DXT5_EXT]:[q.BC1_RGB,z.COMPRESSED_RGB_S3TC_DXT1_EXT]:[q.RGBA32,te.RGBA],E=t.hasMipmap?r:Math.min(1,r),h=[];for(let p=0;p<E;p++)h.push(new Uint8Array(o(p,u))),c(p,u,h[p]);return t.internalFormat=m,t.hasMipmap=h.length>1,t.samplingMode=t.hasMipmap?ie.LINEAR_MIPMAP_LINEAR:ie.LINEAR,t.width=i,t.height=a,new ge(e,t,{type:"compressed",levels:h})}const Ee=()=>Pt.getLogger("esri.views.3d.webgl-engine.lib.DDSUtil"),gn=542327876,_n=131072,Tn=4;function lt(e){return e.charCodeAt(0)+(e.charCodeAt(1)<<8)+(e.charCodeAt(2)<<16)+(e.charCodeAt(3)<<24)}function xn(e){return String.fromCharCode(255&e,e>>8&255,e>>16&255,e>>24&255)}const An=lt("DXT1"),Sn=lt("DXT3"),$n=lt("DXT5"),bn=31,En=0,yn=1,Rn=2,wn=3,Cn=4,In=7,Pn=20,Mn=21;function Ln(e,t,r){const n=Nn(r,t.hasMipmap??!1);if(n==null)throw new Error("DDS texture data is null");const{textureData:i,internalFormat:a,width:o,height:c}=n;return t.samplingMode=i.levels.length>1?ie.LINEAR_MIPMAP_LINEAR:ie.LINEAR,t.hasMipmap=i.levels.length>1,t.internalFormat=a,t.width=o,t.height=c,new ge(e,t,i)}function Nn(e,t){const r=new Int32Array(e,0,bn);if(r[En]!==gn)return Ee().error("Invalid magic number in DDS header"),null;if(!(r[Pn]&Tn))return Ee().error("Unsupported format, must contain a FourCC code"),null;const n=r[Mn];let i,a;switch(n){case An:i=8,a=z.COMPRESSED_RGB_S3TC_DXT1_EXT;break;case Sn:i=16,a=z.COMPRESSED_RGBA_S3TC_DXT3_EXT;break;case $n:i=16,a=z.COMPRESSED_RGBA_S3TC_DXT5_EXT;break;default:return Ee().error("Unsupported FourCC code:",xn(n)),null}let o=1,c=r[Cn],l=r[wn];(3&c||3&l)&&(Ee().warn("Rounding up compressed texture size to nearest multiple of 4."),c=c+3&-4,l=l+3&-4);const d=c,u=l;let m,E;r[Rn]&_n&&t!==!1&&(o=Math.max(1,r[In]));let h=r[yn]+4;const p=[];for(let R=0;R<o;++R)E=(c+3>>2)*(l+3>>2)*i,m=new Uint8Array(e,h,E),p.push(m),h+=E,c=Math.max(1,c>>1),l=Math.max(1,l>>1);return{textureData:{type:"compressed",levels:p},internalFormat:a,width:d,height:u}}const Ne=16;function pa(e){return Math.ceil(e/Ne)*Ne}function va(e){return Math.floor(e/Ne)*Ne}function Fn(e,t){let a=e.width*e.height;if(a<4096)return e instanceof ImageData?Xt(e):e;let o=e.width,c=e.height;do o=Math.ceil(o/2),c=Math.ceil(c/2),a=o*c;while(a>1048576||t!=null&&(o>t||c>t));return ct(e,o,c)}function Dn(e,t){const r=Math.max(e.width,e.height);if(r<=t)return e;const n=t/r;return ct(e,Math.round(e.width*n),Math.round(e.height*n))}function ct(e,t,r){if(e instanceof ImageData)return ct(Xt(e),t,r);const n=document.createElement("canvas");return n.width=t,n.height=r,n.getContext("2d").drawImage(e,0,0,n.width,n.height),n}function Xt(e){const t=document.createElement("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");if(r==null)throw new it("Failed to create 2d context from HTMLCanvasElement");return r.putImageData(e,0,0),t}let ga=class extends Nt{get parameters(){return this._parameters}constructor(t,r){super(),this._data=t,this.type=fe.Texture,this._glTexture=null,this._loadingPromise=null,this._loadingController=null,this.events=new _r,this._parameters={...zn,...r},this._startPreload(t)}dispose(){this.unload(),this._data=this.frameUpdate=void 0}_startPreload(t){t!=null&&(t instanceof HTMLVideoElement?(this.frameUpdate=r=>this._frameUpdate(t,r),this._startPreloadVideoElement(t)):t instanceof HTMLImageElement&&this._startPreloadImageElement(t))}_startPreloadVideoElement(t){if(!(dt(t.src)||t.preload==="auto"&&t.crossOrigin)){t.preload="auto",t.crossOrigin="anonymous";const r=!t.paused;if(t.src=t.src,r&&t.autoplay){const n=()=>{t.removeEventListener("canplay",n),t.play()};t.addEventListener("canplay",n)}}}_startPreloadImageElement(t){Tr(t.src)||dt(t.src)||t.crossOrigin||(t.crossOrigin="anonymous",t.src=t.src)}_createDescriptor(t){const r=new Xr;return r.wrapMode=this._parameters.wrap??Ke.REPEAT,r.flipped=!this._parameters.noUnpackFlip,r.samplingMode=this._parameters.mipmap?ie.LINEAR_MIPMAP_LINEAR:ie.LINEAR,r.hasMipmap=!!this._parameters.mipmap,r.preMultiplyAlpha=!!this._parameters.preMultiplyAlpha,r.maxAnisotropy=this._parameters.maxAnisotropy??(this._parameters.mipmap?t.parameters.maxMaxAnisotropy:1),r}get glTexture(){return this._glTexture}get memoryEstimate(){var t;return((t=this._glTexture)==null?void 0:t.usedMemory)||On(this._data,this._parameters)}load(t){if(this._glTexture)return this._glTexture;if(this._loadingPromise)return this._loadingPromise;const r=this._data;return r==null?(this._glTexture=new ge(t,this._createDescriptor(t),null),this._glTexture):(this._parameters.reloadable||(this._data=void 0),typeof r=="string"?this._loadFromURL(t,r):r instanceof Image?this._loadFromImageElement(t,r):r instanceof HTMLVideoElement?this._loadFromVideoElement(t,r):r instanceof ImageData||r instanceof HTMLCanvasElement?this._loadFromImage(t,r):(me(r)||he(r))&&this._parameters.encoding===ve.DDS_ENCODING?this._loadFromDDSData(t,r):(me(r)||he(r))&&this._parameters.encoding===ve.KTX2_ENCODING?this._loadFromKTX2(t,r):(me(r)||he(r))&&this._parameters.encoding===ve.BASIS_ENCODING?this._loadFromBasis(t,r):he(r)?this._loadFromPixelData(t,r):me(r)?this._loadFromPixelData(t,new Uint8Array(r)):null)}_frameUpdate(t,r){return this._glTexture==null||t.readyState<Te.HAVE_CURRENT_DATA||r===t.currentTime?r:(this._glTexture.setData(t),this._glTexture.descriptor.hasMipmap&&this._glTexture.generateMipmap(),this._parameters.updateCallback&&this._parameters.updateCallback(),t.currentTime)}_loadFromDDSData(t,r){return this._glTexture=Ln(t,this._createDescriptor(t),r),this._glTexture}_loadFromKTX2(t,r){return this._loadAsync(()=>vn(t,this._createDescriptor(t),r).then(n=>(this._glTexture=n,n)))}_loadFromBasis(t,r){return this._loadAsync(()=>pn(t,this._createDescriptor(t),r).then(n=>(this._glTexture=n,n)))}_loadFromPixelData(t,r){V(this._parameters.width>0&&this._parameters.height>0);const n=this._createDescriptor(t);return n.pixelFormat=this._parameters.components===1?te.LUMINANCE:this._parameters.components===3?te.RGB:te.RGBA,n.width=this._parameters.width??0,n.height=this._parameters.height??0,this._glTexture=new ge(t,n,r),this._glTexture}_loadFromURL(t,r){return this._loadAsync(async n=>{const i=await Wr(r,{signal:n});return mt(n),this._loadFromImage(t,i)})}_loadFromImageElement(t,r){return r.complete?this._loadFromImage(t,r):this._loadAsync(async n=>{const i=await xr(r,r.src,!1,n);return mt(n),this._loadFromImage(t,i)})}_loadFromVideoElement(t,r){return r.readyState>=Te.HAVE_CURRENT_DATA?this._loadFromImage(t,r):this._loadFromVideoElementAsync(t,r)}_loadFromVideoElementAsync(t,r){return this._loadAsync(n=>new Promise((i,a)=>{const o=()=>{r.removeEventListener("loadeddata",c),r.removeEventListener("error",l),$r(d)},c=()=>{r.readyState>=Te.HAVE_CURRENT_DATA&&(o(),i(this._loadFromImage(t,r)))},l=u=>{o(),a(u||new it("Failed to load video"))};r.addEventListener("loadeddata",c),r.addEventListener("error",l);const d=Ar(n,()=>l(Sr()))}))}_loadFromImage(t,r){let n=r;if(!(n instanceof HTMLVideoElement)){const{maxTextureSize:o}=t.parameters;n=this._parameters.downsampleUncompressed?Fn(n,o):Dn(n,o)}const i=Kt(n);this._parameters.width=i.width,this._parameters.height=i.height;const a=this._createDescriptor(t);return a.pixelFormat=this._parameters.components===3?te.RGB:te.RGBA,a.width=i.width,a.height=i.height,this._glTexture=new ge(t,a,n),this._glTexture}_loadAsync(t){const r=new AbortController;this._loadingController=r;const n=t(r.signal);this._loadingPromise=n;const i=()=>{this._loadingController===r&&(this._loadingController=null),this._loadingPromise===n&&(this._loadingPromise=null)};return n.then(i,i),n}unload(){if(this._glTexture=Xe(this._glTexture),this._loadingController!=null){const t=this._loadingController;this._loadingController=null,this._loadingPromise=null,t.abort()}this.events.emit("unloaded")}};function On(e,t){if(e==null)return 0;if(me(e)||he(e))return t.encoding===ve.KTX2_ENCODING?fn(e,!!t.mipmap):t.encoding===ve.BASIS_ENCODING?hn(e,!!t.mipmap):e.byteLength;const{width:r,height:n}=e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement||e instanceof HTMLVideoElement?Kt(e):t;return(t.mipmap?4/3:1)*r*n*(t.components||4)||0}function Kt(e){return e instanceof HTMLVideoElement?{width:e.videoWidth,height:e.videoHeight}:e}var Te;(function(e){e[e.HAVE_NOTHING=0]="HAVE_NOTHING",e[e.HAVE_METADATA=1]="HAVE_METADATA",e[e.HAVE_CURRENT_DATA=2]="HAVE_CURRENT_DATA",e[e.HAVE_FUTURE_DATA=3]="HAVE_FUTURE_DATA",e[e.HAVE_ENOUGH_DATA=4]="HAVE_ENOUGH_DATA"})(Te||(Te={}));const zn={wrap:{s:Ke.REPEAT,t:Ke.REPEAT},mipmap:!0,noUnpackFlip:!1,preMultiplyAlpha:!1,downsampleUncompressed:!1};var I;function Un(e,t){switch(t.textureCoordinateType){case I.Default:return e.attributes.add(T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
}`);case I.Compressed:return e.attributes.add(T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),void e.vertex.code.add(s`vec2 getUV0() {
return uv0 / 16384.0;
}
void forwardTextureCoordinates() {
vuv0 = getUV0();
}`);case I.Atlas:return e.attributes.add(T.UV0,"vec2"),e.varyings.add("vuv0","vec2"),e.attributes.add(T.UVREGION,"vec4"),e.varyings.add("vuvRegion","vec4"),void e.vertex.code.add(s`void forwardTextureCoordinates() {
vuv0 = uv0;
vuvRegion = uvRegion;
}`);default:at(t.textureCoordinateType);case I.None:return void e.vertex.code.add(s`void forwardTextureCoordinates() {}`);case I.COUNT:return}}(function(e){e[e.None=0]="None",e[e.Default=1]="Default",e[e.Atlas=2]="Atlas",e[e.Compressed=3]="Compressed",e[e.COUNT=4]="COUNT"})(I||(I={}));function Hn(e){e.fragment.code.add(s`vec4 textureAtlasLookup(sampler2D tex, vec2 textureCoordinates, vec4 atlasRegion) {
vec2 atlasScale = atlasRegion.zw - atlasRegion.xy;
vec2 uvAtlas = fract(textureCoordinates) * atlasScale + atlasRegion.xy;
float maxdUV = 0.125;
vec2 dUVdx = clamp(dFdx(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
vec2 dUVdy = clamp(dFdy(textureCoordinates), -maxdUV, maxdUV) * atlasScale;
return textureGrad(tex, uvAtlas, dUVdx, dUVdy);
}`)}function Vn(e,t){switch(e.include(Un,t),t.textureCoordinateType){case I.Default:case I.Compressed:return void e.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return texture(tex, uv);
}`);case I.Atlas:return e.include(Hn),void e.fragment.code.add(s`vec4 textureLookup(sampler2D tex, vec2 uv) {
return textureAtlasLookup(tex, uv, vuvRegion);
}`);default:at(t.textureCoordinateType);case I.None:case I.COUNT:return}}let Ce=class extends W{constructor(t,r){super(t,"sampler2D",S.Pass,(n,i,a)=>n.bindTexture(t,r(i,a)))}},xa=class{constructor(t){this._material=t.material,this._techniques=t.techniques,this._output=t.output}dispose(){this._techniques.release(this._technique)}get technique(){return this._technique}get _stippleTextures(){return this._techniques.constructionContext.stippleTextures}get _markerTextures(){return this._techniques.constructionContext.markerTextures}ensureTechnique(t,r){return this._technique=this._techniques.releaseAndAcquire(t,this._material.getConfiguration(this._output,r),this._technique),this._technique}ensureResources(t){return Or.LOADED}};var C;(function(e){e[e.Disabled=0]="Disabled",e[e.Normal=1]="Normal",e[e.Schematic=2]="Schematic",e[e.Water=3]="Water",e[e.WaterOnIntegratedMesh=4]="WaterOnIntegratedMesh",e[e.Simplified=5]="Simplified",e[e.TerrainWithWater=6]="TerrainWithWater",e[e.COUNT=7]="COUNT"})(C||(C={}));function Sa(e,t){const r=e.fragment,n=t.hasMetallicRoughnessTexture||t.hasEmissionTexture||t.hasOcclusionTexture;if(t.pbrMode===C.Normal&&n&&e.include(Vn,t),t.pbrMode!==C.Schematic)if(t.pbrMode!==C.Disabled){if(t.pbrMode===C.Normal){r.code.add(s`vec3 mrr;
vec3 emission;
float occlusion;`);const i=t.pbrTextureBindType;t.hasMetallicRoughnessTexture&&(r.uniforms.add(i===S.Pass?new Ce("texMetallicRoughness",a=>a.textureMetallicRoughness):new Ve("texMetallicRoughness",a=>a.textureMetallicRoughness)),r.code.add(s`void applyMetallnessAndRoughness(vec2 uv) {
vec3 metallicRoughness = textureLookup(texMetallicRoughness, uv).rgb;
mrr[0] *= metallicRoughness.b;
mrr[1] *= metallicRoughness.g;
}`)),t.hasEmissionTexture&&(r.uniforms.add(i===S.Pass?new Ce("texEmission",a=>a.textureEmissive):new Ve("texEmission",a=>a.textureEmissive)),r.code.add(s`void applyEmission(vec2 uv) {
emission *= textureLookup(texEmission, uv).rgb;
}`)),t.hasOcclusionTexture?(r.uniforms.add(i===S.Pass?new Ce("texOcclusion",a=>a.textureOcclusion):new Ve("texOcclusion",a=>a.textureOcclusion)),r.code.add(s`void applyOcclusion(vec2 uv) {
occlusion *= textureLookup(texOcclusion, uv).r;
}
float getBakedOcclusion() {
return occlusion;
}`)):r.code.add(s`float getBakedOcclusion() { return 1.0; }`),i===S.Pass?r.uniforms.add(new b("emissionFactor",a=>a.emissiveFactor),new b("mrrFactors",a=>a.mrrFactors)):r.uniforms.add(new M("emissionFactor",a=>a.emissiveFactor),new M("mrrFactors",a=>a.mrrFactors)),r.code.add(s`
    void applyPBRFactors() {
      mrr = mrrFactors;
      emission = emissionFactor;
      occlusion = 1.0;

      ${t.hasMetallicRoughnessTexture?s`applyMetallnessAndRoughness(${t.hasMetallicRoughnessTextureTransform?s`metallicRoughnessUV`:"vuv0"});`:""}

      ${t.hasEmissionTexture?s`applyEmission(${t.hasEmissiveTextureTransform?s`emissiveUV`:"vuv0"});`:""}

      ${t.hasOcclusionTexture?s`applyOcclusion(${t.hasOcclusionTextureTransform?s`occlusionUV`:"vuv0"});`:""}
    }
  `)}}else r.code.add(s`float getBakedOcclusion() { return 1.0; }`);else r.code.add(s`vec3 mrr = vec3(0.0, 0.6, 0.2);
vec3 emission = vec3(0.0);
float occlusion = 1.0;
void applyPBRFactors() {}
float getBakedOcclusion() { return 1.0; }`)}var Q;(function(e){e[e.ColorAlpha=0]="ColorAlpha",e[e.FrontFace=1]="FrontFace",e[e.NONE=2]="NONE",e[e.COUNT=3]="COUNT"})(Q||(Q={}));const $a=Ft(G.SRC_ALPHA,G.ONE,G.ONE_MINUS_SRC_ALPHA,G.ONE_MINUS_SRC_ALPHA),Gn=Ft(G.ONE,G.ZERO,G.ONE,G.ONE_MINUS_SRC_ALPHA);function ba(e){return e===Q.FrontFace?null:Gn}function Ea(e){return e===Q.FrontFace?qr:null}const ya=5e5,Bn={factor:-1,units:-2};function Ra(e){return e?Bn:null}function wa(e,t=F.LESS){return e===Q.NONE||e===Q.FrontFace?t:F.LEQUAL}function Ca(e){return e===Q.ColorAlpha?{buffers:[pt.COLOR_ATTACHMENT0,pt.COLOR_ATTACHMENT1]}:null}var gt;(function(e){e[e.INTEGRATED_MESH=0]="INTEGRATED_MESH",e[e.OPAQUE_TERRAIN=1]="OPAQUE_TERRAIN",e[e.OPAQUE_MATERIAL=2]="OPAQUE_MATERIAL",e[e.OPAQUE_NO_SSAO_DEPTH=3]="OPAQUE_NO_SSAO_DEPTH",e[e.TRANSPARENT_MATERIAL=4]="TRANSPARENT_MATERIAL",e[e.TRANSPARENT_NO_SSAO_DEPTH=5]="TRANSPARENT_NO_SSAO_DEPTH",e[e.TRANSPARENT_TERRAIN=6]="TRANSPARENT_TERRAIN",e[e.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL=7]="TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL",e[e.OCCLUDED_TERRAIN=8]="OCCLUDED_TERRAIN",e[e.OCCLUDER_MATERIAL=9]="OCCLUDER_MATERIAL",e[e.TRANSPARENT_OCCLUDER_MATERIAL=10]="TRANSPARENT_OCCLUDER_MATERIAL",e[e.OCCLUSION_PIXELS=11]="OCCLUSION_PIXELS",e[e.OPAQUE_ENVIRONMENT=12]="OPAQUE_ENVIRONMENT",e[e.TRANSPARENT_ENVIRONMENT=13]="TRANSPARENT_ENVIRONMENT",e[e.LASERLINES=14]="LASERLINES",e[e.LASERLINES_CONTRAST_CONTROL=15]="LASERLINES_CONTRAST_CONTROL",e[e.HUD_MATERIAL=16]="HUD_MATERIAL",e[e.LABEL_MATERIAL=17]="LABEL_MATERIAL",e[e.LINE_CALLOUTS=18]="LINE_CALLOUTS",e[e.LINE_CALLOUTS_HUD_DEPTH=19]="LINE_CALLOUTS_HUD_DEPTH",e[e.DRAPED_MATERIAL=20]="DRAPED_MATERIAL",e[e.DRAPED_WATER=21]="DRAPED_WATER",e[e.VIEWSHED=22]="VIEWSHED",e[e.VOXEL=23]="VOXEL",e[e.MAX_SLOTS=24]="MAX_SLOTS"})(gt||(gt={}));function Wn(e){e.attributes.add(T.POSITION,"vec3"),e.vertex.code.add(s`vec3 positionModel() { return position; }`)}function kn(e,t){e.include(Wn);const r=e.vertex;r.include(Dt,t),e.varyings.add("vPositionWorldCameraRelative","vec3"),e.varyings.add("vPosition_view","vec3"),r.uniforms.add(new b("transformWorldFromViewTH",n=>n.transformWorldFromViewTH),new b("transformWorldFromViewTL",n=>n.transformWorldFromViewTL),new ze("transformViewFromCameraRelativeRS",n=>n.transformViewFromCameraRelativeRS),new re("transformProjFromView",n=>n.transformProjFromView),new Ot("transformWorldFromModelRS",n=>n.transformWorldFromModelRS),new M("transformWorldFromModelTH",n=>n.transformWorldFromModelTH),new M("transformWorldFromModelTL",n=>n.transformWorldFromModelTL)),r.code.add(s`vec3 positionWorldCameraRelative() {
vec3 rotatedModelPosition = transformWorldFromModelRS * positionModel();
vec3 transform_CameraRelativeFromModel = dpAdd(
transformWorldFromModelTL,
transformWorldFromModelTH,
-transformWorldFromViewTL,
-transformWorldFromViewTH
);
return transform_CameraRelativeFromModel + rotatedModelPosition;
}`),r.code.add(s`
    void forwardPosition(float fOffset) {
      vPositionWorldCameraRelative = positionWorldCameraRelative();
      if (fOffset != 0.0) {
        vPositionWorldCameraRelative += fOffset * ${t.spherical?s`normalize(transformWorldFromViewTL + vPositionWorldCameraRelative)`:s`vec3(0.0, 0.0, 1.0)`};
      }

      vPosition_view = transformViewFromCameraRelativeRS * vPositionWorldCameraRelative;
      gl_Position = transformProjFromView * vec4(vPosition_view, 1.0);
    }
  `),e.fragment.uniforms.add(new b("transformWorldFromViewTL",n=>n.transformWorldFromViewTL)),r.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`),e.fragment.code.add(s`vec3 positionWorld() {
return transformWorldFromViewTL + vPositionWorldCameraRelative;
}`)}let jn=class extends Ue{constructor(){super(...arguments),this.transformWorldFromViewTH=f(),this.transformWorldFromViewTL=f(),this.transformViewFromCameraRelativeRS=oe(),this.transformProjFromView=ae()}},Xn=class extends Ue{constructor(){super(...arguments),this.transformWorldFromModelRS=oe(),this.transformWorldFromModelTH=f(),this.transformWorldFromModelTL=f()}};function Ma(e,t){switch(t.normalType){case ce.Attribute:case ce.Compressed:e.include(Qr,t),e.varyings.add("vNormalWorld","vec3"),e.varyings.add("vNormalView","vec3"),e.vertex.uniforms.add(new Ot("transformNormalGlobalFromModel",r=>r.transformNormalGlobalFromModel),new ze("transformNormalViewFromGlobal",r=>r.transformNormalViewFromGlobal)),e.vertex.code.add(s`void forwardNormal() {
vNormalWorld = transformNormalGlobalFromModel * normalModel();
vNormalView = transformNormalViewFromGlobal * vNormalWorld;
}`);break;case ce.Ground:e.include(kn,t),e.varyings.add("vNormalWorld","vec3"),e.vertex.code.add(s`
        void forwardNormal() {
          vNormalWorld = ${t.spherical?s`normalize(vPositionWorldCameraRelative);`:s`vec3(0.0, 0.0, 1.0);`}
        }
        `);break;case ce.ScreenDerivative:e.vertex.code.add(s`void forwardNormal() {}`);break;default:at(t.normalType);case ce.COUNT:}}let La=class extends jn{constructor(){super(...arguments),this.transformNormalViewFromGlobal=oe()}},Fa=class extends Xn{constructor(){super(...arguments),this.transformNormalGlobalFromModel=oe(),this.toMapSpace=Mt()}};const Oa=.1,za=.001;let Ua=class{constructor(t,r){this._module=t,this._loadModule=r}get(){return this._module}async reload(){return this._module=await this._loadModule(),this._module}},Va=class{constructor(t,r,n){this.release=n,this.initializeConfiguration(t,r),this._configuration=r.snapshot(),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t)}destroy(){this._program=Xe(this._program),this._pipeline=this._configuration=null}reload(t){Xe(this._program),this._program=this.initializeProgram(t),this._pipeline=this.initializePipeline(t)}get program(){return this._program}get compiled(){return this.program.compiled}get key(){return this._configuration.key}get configuration(){return this._configuration}ensureAttributeLocations(t){this.program.assertCompatibleVertexAttributeLocations(t)}get primitiveType(){return kr.TRIANGLES}getPipeline(t,r,n){return this._pipeline}initializeConfiguration(t,r){}},Ba=class{constructor(t,r,n){this._context=t,this._locations=n,this._textures=new Map,this._freeTextureUnits=new It({deallocator:null}),this._glProgram=t.programCache.acquire(r.generate("vertex"),r.generate("fragment"),n),this._glProgram.stop=()=>{throw new Error("Wrapped _glProgram used directly")},this.bindPass=r.generateBindPass(this),this.bindDraw=r.generateBindDraw(this),this._fragmentUniforms=Kr()?r.fragmentUniforms:null}dispose(){this._glProgram.dispose()}get glName(){return this._glProgram.glName}get hasTransformFeedbackVaryings(){return this._glProgram.hasTransformFeedbackVaryings}get compiled(){return this._glProgram.compiled}setUniform1b(t,r){this._glProgram.setUniform1i(t,r?1:0)}setUniform1i(t,r){this._glProgram.setUniform1i(t,r)}setUniform1f(t,r){this._glProgram.setUniform1f(t,r)}setUniform2fv(t,r){this._glProgram.setUniform2fv(t,r)}setUniform3fv(t,r){this._glProgram.setUniform3fv(t,r)}setUniform4fv(t,r){this._glProgram.setUniform4fv(t,r)}setUniformMatrix3fv(t,r){this._glProgram.setUniformMatrix3fv(t,r)}setUniformMatrix4fv(t,r){this._glProgram.setUniformMatrix4fv(t,r)}setUniform1fv(t,r){this._glProgram.setUniform1fv(t,r)}setUniform1iv(t,r){this._glProgram.setUniform1iv(t,r)}setUniform2iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform3iv(t,r){this._glProgram.setUniform3iv(t,r)}setUniform4iv(t,r){this._glProgram.setUniform4iv(t,r)}assertCompatibleVertexAttributeLocations(t){t.locations!==this._locations&&console.error("VertexAttributeLocations are incompatible")}stop(){this._textures.clear(),this._freeTextureUnits.clear()}bindTexture(t,r){if((r==null?void 0:r.glName)==null){const i=this._textures.get(t);return i&&(this._context.bindTexture(null,i.unit),this._freeTextureUnit(i),this._textures.delete(t)),null}let n=this._textures.get(t);return n==null?(n=this._allocTextureUnit(r),this._textures.set(t,n)):n.texture=r,this._context.useProgram(this),this.setUniform1i(t,n.unit),this._context.bindTexture(r,n.unit),n.unit}rebindTextures(){var t;this._context.useProgram(this),this._textures.forEach((r,n)=>{this._context.bindTexture(r.texture,r.unit),this.setUniform1i(n,r.unit)}),(t=this._fragmentUniforms)==null||t.forEach(r=>{r.type!=="sampler2D"&&r.type!=="samplerCube"||this._textures.has(r.name)||console.error(`Texture sampler ${r.name} has no bound texture`)})}_allocTextureUnit(t){return{texture:t,unit:this._freeTextureUnits.length===0?this._textures.size:this._freeTextureUnits.pop()}}_freeTextureUnit(t){this._freeTextureUnits.push(t.unit)}};const ka={func:F.LESS},ja={func:F.ALWAYS},Xa={mask:255},Ka={mask:0},qa=e=>({function:{func:F.NOTEQUAL,ref:e,mask:e},operation:{fail:x.KEEP,zFail:x.KEEP,zPass:x.KEEP}}),Qa=e=>({function:{func:F.ALWAYS,ref:e,mask:e},operation:{fail:x.KEEP,zFail:x.KEEP,zPass:x.REPLACE}}),Ya={function:{func:F.ALWAYS,ref:B.OutlineVisualElementMask,mask:B.OutlineVisualElementMask},operation:{fail:x.KEEP,zFail:x.KEEP,zPass:x.ZERO}},Za={function:{func:F.ALWAYS,ref:B.OutlineVisualElementMask,mask:B.OutlineVisualElementMask},operation:{fail:x.KEEP,zFail:x.KEEP,zPass:x.REPLACE}},Ja={function:{func:F.EQUAL,ref:B.OutlineVisualElementMask,mask:B.OutlineVisualElementMask},operation:{fail:x.KEEP,zFail:x.KEEP,zPass:x.KEEP}},eo={function:{func:F.NOTEQUAL,ref:B.OutlineVisualElementMask,mask:B.OutlineVisualElementMask},operation:{fail:x.KEEP,zFail:x.KEEP,zPass:x.KEEP}};let qt=class extends W{constructor(t,r){super(t,"vec2",S.Pass,(n,i,a)=>n.setUniform2fv(t,r(i,a)))}},ro=class extends Ue{constructor(t){super(),this.slicePlaneLocalOrigin=t}};function io(e,t){Qt(e,t,new b("slicePlaneOrigin",(r,n)=>er(t,r,n)),new b("slicePlaneBasis1",(r,n)=>{var i;return Fe(t,r,n,(i=n.slicePlane)==null?void 0:i.basis1)}),new b("slicePlaneBasis2",(r,n)=>{var i;return Fe(t,r,n,(i=n.slicePlane)==null?void 0:i.basis2)}))}function ao(e,t){Qt(e,t,new M("slicePlaneOrigin",(r,n)=>er(t,r,n)),new M("slicePlaneBasis1",(r,n)=>{var i;return Fe(t,r,n,(i=n.slicePlane)==null?void 0:i.basis1)}),new M("slicePlaneBasis2",(r,n)=>{var i;return Fe(t,r,n,(i=n.slicePlane)==null?void 0:i.basis2)}))}function Qt(e,t,...r){if(!t.hasSlicePlane){const o=s`#define rejectBySlice(_pos_) false
#define discardBySlice(_pos_) {}
#define highlightSlice(_color_, _pos_) (_color_)`;return t.hasSliceInVertexProgram&&e.vertex.code.add(o),void e.fragment.code.add(o)}t.hasSliceInVertexProgram&&e.vertex.uniforms.add(...r),e.fragment.uniforms.add(...r);const n=s`struct SliceFactors {
float front;
float side0;
float side1;
float side2;
float side3;
};
SliceFactors calculateSliceFactors(vec3 pos) {
vec3 rel = pos - slicePlaneOrigin;
vec3 slicePlaneNormal = -cross(slicePlaneBasis1, slicePlaneBasis2);
float slicePlaneW = -dot(slicePlaneNormal, slicePlaneOrigin);
float basis1Len2 = dot(slicePlaneBasis1, slicePlaneBasis1);
float basis2Len2 = dot(slicePlaneBasis2, slicePlaneBasis2);
float basis1Dot = dot(slicePlaneBasis1, rel);
float basis2Dot = dot(slicePlaneBasis2, rel);
return SliceFactors(
dot(slicePlaneNormal, pos) + slicePlaneW,
-basis1Dot - basis1Len2,
basis1Dot - basis1Len2,
-basis2Dot - basis2Len2,
basis2Dot - basis2Len2
);
}
bool sliceByFactors(SliceFactors factors) {
return factors.front < 0.0
&& factors.side0 < 0.0
&& factors.side1 < 0.0
&& factors.side2 < 0.0
&& factors.side3 < 0.0;
}
bool sliceEnabled() {
return dot(slicePlaneBasis1, slicePlaneBasis1) != 0.0;
}
bool sliceByPlane(vec3 pos) {
return sliceEnabled() && sliceByFactors(calculateSliceFactors(pos));
}
#define rejectBySlice(_pos_) sliceByPlane(_pos_)
#define discardBySlice(_pos_) { if (sliceByPlane(_pos_)) discard; }`,i=s`vec4 applySliceHighlight(vec4 color, vec3 pos) {
SliceFactors factors = calculateSliceFactors(pos);
const float HIGHLIGHT_WIDTH = 1.0;
const vec4 HIGHLIGHT_COLOR = vec4(0.0, 0.0, 0.0, 0.3);
factors.front /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.front);
factors.side0 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side0);
factors.side1 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side1);
factors.side2 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side2);
factors.side3 /= (2.0 * HIGHLIGHT_WIDTH) * fwidth(factors.side3);
if (sliceByFactors(factors)) {
return color;
}
float highlightFactor = (1.0 - step(0.5, factors.front))
* (1.0 - step(0.5, factors.side0))
* (1.0 - step(0.5, factors.side1))
* (1.0 - step(0.5, factors.side2))
* (1.0 - step(0.5, factors.side3));
return mix(color, vec4(HIGHLIGHT_COLOR.rgb, color.a), highlightFactor * HIGHLIGHT_COLOR.a);
}`,a=t.hasSliceHighlight?s`
        ${i}
        #define highlightSlice(_color_, _pos_) (sliceEnabled() ? applySliceHighlight(_color_, _pos_) : (_color_))
      `:s`#define highlightSlice(_color_, _pos_) (_color_)`;t.hasSliceInVertexProgram&&e.vertex.code.add(n),e.fragment.code.add(n),e.fragment.code.add(a)}function Yt(e,t,r){return e.instancedDoublePrecision?y(Kn,r.camera.viewInverseTransposeMatrix[3],r.camera.viewInverseTransposeMatrix[7],r.camera.viewInverseTransposeMatrix[11]):t.slicePlaneLocalOrigin}function Zt(e,t){return e!=null?Lt(De,t.origin,e):t.origin}function Jt(e,t,r){return e.hasSliceTranslatedView?t!=null?Me(qn,r.camera.viewMatrix,t):r.camera.viewMatrix:null}function er(e,t,r){if(r.slicePlane==null)return ot;const n=Yt(e,t,r),i=Zt(n,r.slicePlane),a=Jt(e,n,r);return a!=null?Pe(De,i,a):i}function Fe(e,t,r,n){if(n==null||r.slicePlane==null)return ot;const i=Yt(e,t,r),a=Zt(i,r.slicePlane),o=Jt(e,i,r);return o!=null?(P(ue,n,a),Pe(De,a,o),Pe(ue,ue,o),Lt(ue,ue,De)):n}const Kn=f(),De=f(),ue=f(),qn=ae();let Qn=class extends W{constructor(t,r){super(t,"mat4",S.Draw,(n,i,a)=>n.setUniformMatrix4fv(t,r(i,a)))}};function so(e,t){t.instancedDoublePrecision?e.constants.add("cameraPosition","vec3",ot):e.uniforms.add(new M("cameraPosition",(r,n)=>y(tr,n.camera.viewInverseTransposeMatrix[3]-r.origin[0],n.camera.viewInverseTransposeMatrix[7]-r.origin[1],n.camera.viewInverseTransposeMatrix[11]-r.origin[2])))}function lo(e,t){if(!t.instancedDoublePrecision)return void e.uniforms.add(new re("proj",(n,i)=>i.camera.projectionMatrix),new Qn("view",(n,i)=>Me(_t,i.camera.viewMatrix,n.origin)),new M("localOrigin",n=>n.origin));const r=n=>y(tr,n.camera.viewInverseTransposeMatrix[3],n.camera.viewInverseTransposeMatrix[7],n.camera.viewInverseTransposeMatrix[11]);e.uniforms.add(new re("proj",(n,i)=>i.camera.projectionMatrix),new re("view",(n,i)=>Me(_t,i.camera.viewMatrix,r(i))),new b("localOrigin",(n,i)=>r(i)))}const _t=ae(),tr=f();function Yn(e){e.uniforms.add(new re("viewNormal",(t,r)=>r.camera.viewInverseTransposeMatrix))}function co(e){e.uniforms.add(new Yr("pixelRatio",(t,r)=>r.camera.pixelRatio/r.overlayStretch))}class Qe extends tn{constructor(){super(...arguments),this.instancedDoublePrecision=!1,this.hasModelTransformation=!1}}pe([_e()],Qe.prototype,"instancedDoublePrecision",void 0),pe([_e()],Qe.prototype,"hasModelTransformation",void 0);const Tt=oe();function uo(e,t){const r=t.hasModelTransformation,n=t.instancedDoublePrecision;r&&(e.vertex.uniforms.add(new re("model",a=>a.modelTransformation??Le)),e.vertex.uniforms.add(new ze("normalLocalOriginFromModel",a=>(Jr(Tt,a.modelTransformation??Le),Tt)))),t.instanced&&n&&(e.attributes.add(T.INSTANCEMODELORIGINHI,"vec3"),e.attributes.add(T.INSTANCEMODELORIGINLO,"vec3"),e.attributes.add(T.INSTANCEMODEL,"mat3"),e.attributes.add(T.INSTANCEMODELNORMAL,"mat3"));const i=e.vertex;n&&(i.include(Dt,t),i.uniforms.add(new M("viewOriginHi",(a,o)=>Gr(y(ye,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),ye)),new M("viewOriginLo",(a,o)=>Br(y(ye,o.camera.viewInverseTransposeMatrix[3],o.camera.viewInverseTransposeMatrix[7],o.camera.viewInverseTransposeMatrix[11]),ye)))),i.code.add(s`
    vec3 getVertexInLocalOriginSpace() {
      return ${r?n?"(model * vec4(instanceModel * localPosition().xyz, 1.0)).xyz":"(model * localPosition()).xyz":n?"instanceModel * localPosition().xyz":"localPosition().xyz"};
    }

    vec3 subtractOrigin(vec3 _pos) {
      ${n?s`
          // Negated inputs are intentionally the first two arguments. The other way around the obfuscation in dpAdd() stopped
          // working for macOS 14+ and iOS 17+.
          // Issue: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/56280
          vec3 originDelta = dpAdd(-instanceModelOriginHi, -instanceModelOriginLo, viewOriginHi, viewOriginLo);
          return _pos - originDelta;`:"return vpos;"}
    }
    `),i.code.add(s`
    vec3 dpNormal(vec4 _normal) {
      return normalize(${r?n?"normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz)":"normalLocalOriginFromModel * _normal.xyz":n?"instanceModelNormal * _normal.xyz":"_normal.xyz"});
    }
    `),t.output===zt.Normal&&(Yn(i),i.code.add(s`
    vec3 dpNormalView(vec4 _normal) {
      return normalize((viewNormal * ${r?n?"vec4(normalLocalOriginFromModel * (instanceModelNormal * _normal.xyz), 1.0)":"vec4(normalLocalOriginFromModel * _normal.xyz, 1.0)":n?"vec4(instanceModelNormal * _normal.xyz, 1.0)":"_normal"}).xyz);
    }
    `)),t.hasVertexTangents&&i.code.add(s`
    vec4 dpTransformVertexTangent(vec4 _tangent) {
      ${r?n?"return vec4(normalLocalOriginFromModel * (instanceModelNormal * _tangent.xyz), _tangent.w);":"return vec4(normalLocalOriginFromModel * _tangent.xyz, _tangent.w);":n?"return vec4(instanceModelNormal * _tangent.xyz, _tangent.w);":"return _tangent;"}
    }`)}const ye=f();let mo=class extends W{constructor(t,r){super(t,"int",S.Pass,(n,i,a)=>n.setUniform1i(t,r(i,a)))}},Zn=class extends W{constructor(t,r){super(t,"vec4",S.Pass,(n,i,a)=>n.setUniform4fv(t,r(i,a)))}};function po(e,t){const r=t.output===zt.ObjectAndLayerIdColor,n=t.objectAndLayerIdColorInstanced;r&&(e.varyings.add("objectAndLayerIdColorVarying","vec4"),n?e.attributes.add(T.INSTANCEOBJECTANDLAYERIDCOLOR,"vec4"):e.attributes.add(T.OBJECTANDLAYERIDCOLOR,"vec4")),e.vertex.code.add(s`
     void forwardObjectAndLayerIdColor() {
      ${r?n?s`objectAndLayerIdColorVarying = instanceObjectAndLayerIdColor * 0.003921568627451;`:s`objectAndLayerIdColorVarying = objectAndLayerIdColor * 0.003921568627451;`:s``} }`),e.fragment.code.add(s`
      void outputObjectAndLayerIdColor() {
        ${r?s`fragColor = objectAndLayerIdColorVarying;`:s``} }`)}let Jn=class extends W{constructor(t,r,n){super(t,"vec4",S.Pass,(i,a,o)=>i.setUniform4fv(t,r(a,o)),n)}},ei=class extends W{constructor(t,r,n){super(t,"float",S.Pass,(i,a,o)=>i.setUniform1fv(t,r(a,o)),n)}};var A,xt;(function(e){e[e.Undefined=0]="Undefined",e[e.DefinedSize=1]="DefinedSize",e[e.DefinedScale=2]="DefinedScale"})(A||(A={})),function(e){e[e.Undefined=0]="Undefined",e[e.DefinedAngle=1]="DefinedAngle"}(xt||(xt={}));class ut{constructor(t){this.field=t}}let ti=class extends ut{constructor(t){super(t),this.minSize=[0,0,0],this.maxSize=[0,0,0],this.offset=[0,0,0],this.factor=[0,0,0],this.type=[A.Undefined,A.Undefined,A.Undefined]}},ri=class extends ut{constructor(t){super(t),this.colors=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],this.values=[0,0,0,0,0,0,0,0]}};class ni extends ut{constructor(t){super(t),this.values=[0,0,0,0,0,0,0,0],this.opacityValues=[0,0,0,0,0,0,0,0]}}class ii{}function de(e){return e!=null}function J(e){return typeof e=="number"}function He(e){return typeof e=="string"}function ai(e){return e==null||He(e)}function g(e,t){e&&e.push(t)}function oi(e,t,r,n=ae()){const i=e||0,a=t||0,o=r||0;return i!==0&&Er(n,n,-i/180*Math.PI),a!==0&&yr(n,n,a/180*Math.PI),o!==0&&Rr(n,n,o/180*Math.PI),n}function U(e,t,r,n,i){var c;const a=e.minSize,o=e.maxSize;if(e.useSymbolValue){const l=n.symbolSize[r];return t.minSize[r]=l,t.maxSize[r]=l,t.offset[r]=t.minSize[r],t.factor[r]=0,t.type[r]=A.DefinedSize,!0}if(de(e.field))return de(e.stops)?e.stops.length===2&&J(e.stops[0].size)&&J(e.stops[1].size)?(At(e.stops[0].size,e.stops[1].size,e.stops[0].value,e.stops[1].value,t,r),t.type[r]=A.DefinedSize,!0):(g(i,"Could not convert size info: stops only supported with 2 elements"),!1):J(a)&&J(o)&&de(e.minDataValue)&&de(e.maxDataValue)?(At(a,o,e.minDataValue,e.maxDataValue,t,r),t.type[r]=A.DefinedSize,!0):e.valueUnit==="unknown"?(g(i,"Could not convert size info: proportional size not supported"),!1):ht[e.valueUnit]!=null?(t.minSize[r]=-1/0,t.maxSize[r]=1/0,t.offset[r]=0,t.factor[r]=1/ht[e.valueUnit],t.type[r]=A.DefinedSize,!0):(g(i,"Could not convert size info: scale-dependent size not supported"),!1);if(!de(e.field)){if((c=e.stops)!=null&&c[0]&&J(e.stops[0].size))return t.minSize[r]=e.stops[0].size,t.maxSize[r]=e.stops[0].size,t.offset[r]=t.minSize[r],t.factor[r]=0,t.type[r]=A.DefinedSize,!0;if(J(a))return t.minSize[r]=a,t.maxSize[r]=a,t.offset[r]=a,t.factor[r]=0,t.type[r]=A.DefinedSize,!0}return g(i,"Could not convert size info: unsupported variant of sizeInfo"),!1}function At(e,t,r,n,i,a){const o=Math.abs(n-r)>0?(t-e)/(n-r):0;i.minSize[a]=o>0?e:t,i.maxSize[a]=o>0?t:e,i.offset[a]=e-r*o,i.factor[a]=o}function si(e,t,r,n){if(e.normalizationField||e.valueRepresentation)return g(n,"Could not convert size info: unsupported property"),null;if(!ai(e.field))return g(n,"Could not convert size info: field is not a string"),null;if(t.size){if(e.field)if(t.size.field){if(e.field!==t.size.field)return g(n,"Could not convert size info: multiple fields in use"),null}else t.size.field=e.field}else t.size=new ti(e.field);let i;switch(e.axis){case"width":return i=U(e,t.size,0,r,n),i?t:null;case"height":return i=U(e,t.size,2,r,n),i?t:null;case"depth":return i=U(e,t.size,1,r,n),i?t:null;case"width-and-depth":return i=U(e,t.size,0,r,n),i&&U(e,t.size,1,r,n),i?t:null;case null:case void 0:case"all":return i=U(e,t.size,0,r,n),i=i&&U(e,t.size,1,r,n),i=i&&U(e,t.size,2,r,n),i?t:null;default:return g(n,`Could not convert size info: unknown axis "${e.axis}""`),null}}function li(e,t,r){for(let i=0;i<3;++i){let a=t.unitInMeters;e.type[i]===A.DefinedSize&&(a*=t.modelSize[i],e.type[i]=A.DefinedScale),e.minSize[i]=e.minSize[i]/a,e.maxSize[i]=e.maxSize[i]/a,e.offset[i]=e.offset[i]/a,e.factor[i]=e.factor[i]/a}let n;if(e.type[0]!==A.Undefined)n=0;else if(e.type[1]!==A.Undefined)n=1;else{if(e.type[2]===A.Undefined)return g(r,"No size axis contains a valid size or scale"),!1;n=2}for(let i=0;i<3;++i)e.type[i]===A.Undefined&&(e.minSize[i]=e.minSize[n],e.maxSize[i]=e.maxSize[n],e.offset[i]=e.offset[n],e.factor[i]=e.factor[n],e.type[i]=e.type[n]);return!0}function St(e,t,r){e[4*t]=r.r/255,e[4*t+1]=r.g/255,e[4*t+2]=r.b/255,e[4*t+3]=r.a}function ci(e,t,r){if(e.normalizationField)return g(r,"Could not convert color info: unsupported property"),null;if(He(e.field)){if(!e.stops)return g(r,"Could not convert color info: missing stops or colors"),null;{if(e.stops.length>8)return g(r,"Could not convert color info: too many color stops"),null;t.color=new ri(e.field);const n=e.stops;for(let i=0;i<8;++i){const a=n[Math.min(i,n.length-1)];t.color.values[i]=a.value,St(t.color.colors,i,a.color)}}}else{if(!(e.stops&&e.stops.length>=0))return g(r,"Could not convert color info: no field and no colors/stops"),null;{const n=e.stops&&e.stops.length>=0&&e.stops[0].color;t.color={field:null,values:[0,0,0,0,0,0,0,0],colors:[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]};for(let i=0;i<8;i++)t.color.values[i]=1/0,St(t.color.colors,i,n)}}return t}function ui(e,t,r){if(e.normalizationField)return g(r,"Could not convert opacity info: unsupported property"),null;if(He(e.field)){if(!e.stops)return g(r,"Could not convert opacity info: missing stops or opacities"),null;{if(e.stops.length>8)return g(r,"Could not convert opacity info: too many opacity stops"),null;t.opacity=new ni(e.field);const n=e.stops;for(let i=0;i<8;++i){const a=n[Math.min(i,n.length-1)];t.opacity.values[i]=a.value,t.opacity.opacityValues[i]=a.opacity}}}else{if(!(e.stops&&e.stops.length>=0))return g(r,"Could not convert opacity info: no field and no opacities/stops"),null;{const n=e.stops&&e.stops.length>=0?e.stops[0].opacity:0;t.opacity={field:null,values:[0,0,0,0,0,0,0,0],opacityValues:[0,0,0,0,0,0,0,0]};for(let i=0;i<8;i++)t.opacity.values[i]=1/0,t.opacity.opacityValues[i]=n}}return t}function Ge(e,t,r){const n=r===2&&e.rotationType==="arithmetic";t.offset[r]=n?90:0,t.factor[r]=n?-1:1,t.type[r]=1}function di(e,t,r){if(!He(e.field))return g(r,"Could not convert rotation info: field is not a string"),null;if(t.rotation){if(e.field)if(t.rotation.field){if(e.field!==t.rotation.field)return g(r,"Could not convert rotation info: multiple fields in use"),null}else t.rotation.field=e.field}else t.rotation={field:e.field,offset:[0,0,0],factor:[1,1,1],type:[0,0,0]};switch(e.axis){case"tilt":return Ge(e,t.rotation,0),t;case"roll":return Ge(e,t.rotation,1),t;case null:case void 0:case"heading":return Ge(e,t.rotation,2),t;default:return g(r,`Could not convert rotation info: unknown axis "${e.axis}""`),null}}class xo{constructor(t,r=[1,1,1],n=[1,1,1],i=1,a=[0,0,0],o=[1,1,1],c=[0,0,0]){this.supports=t,this.modelSize=r,this.symbolSize=n,this.unitInMeters=i,this.anchor=a,this.scale=o,this.rotation=c}}function rr(e,t,r){if(!e)return null;const n=e.reduce((i,a)=>{if(!i)return i;if(a.valueExpression)return g(r,"Could not convert visual variables: arcade expressions not supported"),null;switch(a.type){case"size":return t.supports.size?si(a,i,t,r):i;case"color":return t.supports.color?ci(a,i,r):i;case"opacity":return t.supports.opacity?ui(a,i,r):null;case"rotation":return t.supports.rotation?di(a,i,r):i;default:return null}},new ii);return!(e.length>0&&n)||n.size||n.color||n.opacity||n.rotation?n!=null&&n.size&&!li(n.size,t,r)?null:n:null}class mi{constructor(t,r,n){this.visualVariables=t,this.materialParameters=r,this.requiresShaderTransformation=n}}function Ao(e,t){if(!e||zr.TESTS_DISABLE_FAST_UPDATES)return null;const r=rr(e.visualVariables,t);return r?new mi(r,ir(r,t),!!r.size):null}function So(e,t,r){if(!t||!e)return!1;const n=e.visualVariables,i=rr(t.visualVariables,r);return!!i&&!!(Re(n.size,i.size,"size")&&Re(n.color,i.color,"color")&&Re(n.rotation,i.rotation,"rotation")&&Re(n.opacity,i.opacity,"opacity"))&&(e.visualVariables=i,e.materialParameters=ir(i,r),e.requiresShaderTransformation=!!i.size,!0)}function Re(e,t,r){if(!!e!=!!t||e&&e.field!==(t==null?void 0:t.field))return!1;if(e&&r==="rotation"){const n=e,i=t;for(let a=0;a<3;a++)if(n.type[a]!==i.type[a]||n.offset[a]!==i.offset[a]||n.factor[a]!==i.factor[a])return!1}return!0}class nr extends Ue{constructor(t){super(),this.vvSize=(t==null?void 0:t.size)??null,this.vvColor=(t==null?void 0:t.color)??null,this.vvOpacity=(t==null?void 0:t.opacity)??null}}function ir(e,t){const r=new nr(e);return r.vvSize&&(r.vvSymbolAnchor=t.anchor,br(xe),oi(t.rotation[2],t.rotation[0],t.rotation[1],xe),r.vvSymbolRotationMatrix=r.vvSymbolRotationMatrix||oe(),en(r.vvSymbolRotationMatrix,xe)),r}function $o(e,t,r){if(!e.vvSize)return r;wr(H,r);const n=e.vvSymbolRotationMatrix;Cr(xe,n[0],n[1],n[2],0,n[3],n[4],n[5],0,n[6],n[7],n[8],0,0,0,0,1),Ir(H,H,xe);for(let i=0;i<3;++i){const a=e.vvSize.offset[i]+t[0]*e.vvSize.factor[i];$t[i]=st(a,e.vvSize.minSize[i],e.vvSize.maxSize[i])}return Pr(H,H,$t),Me(H,H,e.vvSymbolAnchor),H}function bo(e,t,r){if(!t.vvSize)return y(e,1,1,1),e;for(let n=0;n<3;++n){const i=t.vvSize.offset[n]+r[0]*t.vvSize.factor[n];e[n]=st(i,t.vvSize.minSize[n],t.vvSize.maxSize[n])}return e}function Eo(e,t){const r=e==null?0:t.attributes[e];return typeof r=="number"&&isFinite(r)?r:0}const H=ae(),$t=f(),xe=ae();let yo=class extends nr{constructor(){super(...arguments),this.renderOccluded=Ur.Occlude,this.isDecoration=!1}};const Be=8;function wo(e,t){const{vertex:r,attributes:n}=e;t.hasVvInstancing&&(t.vvSize||t.vvColor)&&n.add(T.INSTANCEFEATUREATTRIBUTE,"vec4"),t.vvSize?(r.uniforms.add(new b("vvSizeMinSize",i=>i.vvSize.minSize)),r.uniforms.add(new b("vvSizeMaxSize",i=>i.vvSize.maxSize)),r.uniforms.add(new b("vvSizeOffset",i=>i.vvSize.offset)),r.uniforms.add(new b("vvSizeFactor",i=>i.vvSize.factor)),r.uniforms.add(new ze("vvSymbolRotationMatrix",i=>i.vvSymbolRotationMatrix)),r.uniforms.add(new b("vvSymbolAnchor",i=>i.vvSymbolAnchor)),r.code.add(s`vec3 vvScale(vec4 _featureAttribute) {
return clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize, vvSizeMaxSize);
}
vec4 vvTransformPosition(vec3 position, vec4 _featureAttribute) {
return vec4(vvSymbolRotationMatrix * ( vvScale(_featureAttribute) * (position + vvSymbolAnchor)), 1.0);
}`),r.code.add(s`
      const float eps = 1.192092896e-07;
      vec4 vvTransformNormal(vec3 _normal, vec4 _featureAttribute) {
        vec3 vvScale = clamp(vvSizeOffset + _featureAttribute.x * vvSizeFactor, vvSizeMinSize + eps, vvSizeMaxSize);
        return vec4(vvSymbolRotationMatrix * _normal / vvScale, 1.0);
      }

      ${t.hasVvInstancing?s`
      vec4 vvLocalNormal(vec3 _normal) {
        return vvTransformNormal(_normal, instanceFeatureAttribute);
      }

      vec4 localPosition() {
        return vvTransformPosition(position, instanceFeatureAttribute);
      }`:""}
    `)):r.code.add(s`vec4 localPosition() { return vec4(position, 1.0); }
vec4 vvLocalNormal(vec3 _normal) { return vec4(_normal, 1.0); }`),t.vvColor?(r.constants.add("vvColorNumber","int",Be),r.uniforms.add(new ei("vvColorValues",i=>i.vvColor.values,Be),new Jn("vvColorColors",i=>i.vvColor.colors,Be)),r.code.add(s`
      vec4 interpolateVVColor(float value) {
        if (value <= vvColorValues[0]) {
          return vvColorColors[0];
        }

        for (int i = 1; i < vvColorNumber; ++i) {
          if (vvColorValues[i] >= value) {
            float f = (value - vvColorValues[i-1]) / (vvColorValues[i] - vvColorValues[i-1]);
            return mix(vvColorColors[i-1], vvColorColors[i], f);
          }
        }
        return vvColorColors[vvColorNumber - 1];
      }

      vec4 vvGetColor(vec4 featureAttribute) {
        return interpolateVVColor(featureAttribute.y);
      }

      ${t.hasVvInstancing?s`
            vec4 vvColor() {
              return vvGetColor(instanceFeatureAttribute);
            }`:"vec4 vvColor() { return vec4(1.0); }"}
    `)):r.code.add(s`vec4 vvColor() { return vec4(1.0); }`)}var bt,Et;(function(e){e[e.RED=0]="RED",e[e.RG=1]="RG",e[e.RGBA4=2]="RGBA4",e[e.RGBA=3]="RGBA",e[e.RGBA_MIPMAP=4]="RGBA_MIPMAP",e[e.R16F=5]="R16F",e[e.RGBA16F=6]="RGBA16F"})(bt||(bt={})),function(e){e[e.DEPTH_STENCIL_TEXTURE=0]="DEPTH_STENCIL_TEXTURE",e[e.DEPTH16_BUFFER=1]="DEPTH16_BUFFER"}(Et||(Et={}));const Co=3e5,Io=5e5;function Po(e,t=!0){e.attributes.add(T.POSITION,"vec2"),t&&e.varyings.add("uv","vec2"),e.vertex.code.add(s`
    void main(void) {
      gl_Position = vec4(position, 0.0, 1.0);
      ${t?s`uv = position * 0.5 + vec2(0.5);`:""}
    }
  `)}function Mo(e){e.include(Zr),e.code.add(s`float linearDepthFromFloat(float depth, vec2 nearFar) {
return -(depth * (nearFar[1] - nearFar[0]) + nearFar[0]);
}
float linearDepthFromRGBA(vec4 depth, vec2 nearFar) {
return linearDepthFromFloat(rgba2float(depth), nearFar);
}
float linearDepthFromTexture(sampler2D depthTexture, vec2 uv, vec2 nearFar) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
return linearDepthFromRGBA(texelFetch(depthTexture, iuv, 0), nearFar);
}`)}function hi(e){e.uniforms.add(new qt("zProjectionMap",(t,r)=>fi(r.camera))),e.code.add(s`float linearizeDepth(float depth) {
float depthNdc = depth * 2.0 - 1.0;
float c1 = zProjectionMap[0];
float c2 = zProjectionMap[1];
return -(c1 / (depthNdc + c2 + 1e-7));
}`),e.code.add(s`float depthFromTexture(sampler2D depthTexture, vec2 uv) {
ivec2 iuv = ivec2(uv * vec2(textureSize(depthTexture, 0)));
float depth = texelFetch(depthTexture, iuv, 0).r;
return depth;
}`),e.code.add(s`float linearDepthFromTexture(sampler2D depthTexture, vec2 uv) {
return linearizeDepth(depthFromTexture(depthTexture, uv));
}`)}function fi(e){const t=e.projectionMatrix;return qe(pi,t[14],t[10])}const pi=Ut(),vi=()=>Pt.getLogger("esri.views.3d.webgl-engine.core.shaderModules.shaderBuilder");let ar=class{constructor(){this._includedModules=new Map}include(t,r){this._includedModules.has(t)?this._includedModules.get(t):(this._includedModules.set(t,r),t(this.builder,r))}},No=class extends ar{constructor(){super(...arguments),this.vertex=new yt,this.fragment=new yt,this.attributes=new Ti,this.varyings=new xi,this.extensions=new Ye,this.constants=new or,this.outputs=new Je}get fragmentUniforms(){return this.fragment.uniforms.entries}get builder(){return this}generate(t){const r=this.extensions.generateSource(t),n=this.attributes.generateSource(t),i=this.varyings.generateSource(t),a=t==="vertex"?this.vertex:this.fragment,o=a.uniforms.generateSource(),c=a.code.generateSource(),l=t==="vertex"?Si:Ai,d=this.constants.generateSource().concat(a.constants.generateSource()),u=this.outputs.generateSource(t);return`#version 300 es
${r.join(`
`)}

${l}

${d.join(`
`)}

${o.join(`
`)}

${n.join(`
`)}

${i.join(`
`)}

${u.join(`
`)}

${c.join(`
`)}`}generateBindPass(t){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const o=a.bind[S.Pass];o&&r.set(a.name,o)}),this.fragment.uniforms.entries.forEach(a=>{const o=a.bind[S.Pass];o&&r.set(a.name,o)});const n=Array.from(r.values()),i=n.length;return(a,o)=>{for(let c=0;c<i;++c)n[c](t,a,o)}}generateBindDraw(t){const r=new Map;this.vertex.uniforms.entries.forEach(a=>{const o=a.bind[S.Draw];o&&r.set(a.name,o)}),this.fragment.uniforms.entries.forEach(a=>{const o=a.bind[S.Draw];o&&r.set(a.name,o)});const n=Array.from(r.values()),i=n.length;return(a,o,c)=>{for(let l=0;l<i;++l)n[l](t,a,o,c)}}},gi=class{constructor(t){this._stage=t,this._entries=new Map}add(...t){for(const r of t)this._add(r);return this._stage}get(t){return this._entries.get(t)}_add(t){if(t!=null){if(this._entries.has(t.name)&&!this._entries.get(t.name).equals(t))throw new it(`Duplicate uniform name ${t.name} for different uniform type`);this._entries.set(t.name,t)}else vi().error(`Trying to add null Uniform from ${new Error().stack}.`)}generateSource(){return Array.from(this._entries.values()).map(t=>t.arraySize!=null?`uniform ${t.type} ${t.name}[${t.arraySize}];`:`uniform ${t.type} ${t.name};`)}get entries(){return Array.from(this._entries.values())}},_i=class{constructor(t){this._stage=t,this._entries=new Array}add(t){return this._entries.push(t),this._stage}generateSource(){return this._entries}},yt=class extends ar{constructor(){super(...arguments),this.uniforms=new gi(this),this.code=new _i(this),this.constants=new or}get builder(){return this}};class Ti{constructor(){this._entries=new Array}add(t,r){this._entries.push([t,r])}generateSource(t){return t==="fragment"?[]:this._entries.map(r=>`in ${r[1]} ${r[0]};`)}}let xi=class{constructor(){this._entries=new Map}add(t,r){this._entries.has(t)&&V(this._entries.get(t)===r),this._entries.set(t,r)}generateSource(t){const r=new Array;return this._entries.forEach((n,i)=>r.push(t==="vertex"?`out ${n} ${i};`:`in ${n} ${i};`)),r}},Ye=class Ze{constructor(){this._entries=new Set}add(t){this._entries.add(t)}generateSource(t){const r=t==="vertex"?Ze.ALLOWLIST_VERTEX:Ze.ALLOWLIST_FRAGMENT;return Array.from(this._entries).filter(n=>r.includes(n)).map(n=>`#extension ${n} : enable`)}};Ye.ALLOWLIST_FRAGMENT=["GL_EXT_shader_texture_lod","GL_OES_standard_derivatives"],Ye.ALLOWLIST_VERTEX=[];let Je=class et{constructor(){this._entries=new Map}add(t,r,n=0){const i=this._entries.get(n);i?V(i.name===t&&i.type===r,`Fragment shader output location ${n} occupied`):this._entries.set(n,{name:t,type:r})}generateSource(t){if(t==="vertex")return[];this._entries.size===0&&this._entries.set(0,{name:et.DEFAULT_NAME,type:et.DEFAULT_TYPE});const r=new Array;return this._entries.forEach((n,i)=>r.push(`layout(location = ${i}) out ${n.type} ${n.name};`)),r}};Je.DEFAULT_TYPE="vec4",Je.DEFAULT_NAME="fragColor";let or=class v{constructor(){this._entries=new Set}add(t,r,n){let i="ERROR_CONSTRUCTOR_STRING";switch(r){case"float":i=v._numberToFloatStr(n);break;case"int":i=v._numberToIntStr(n);break;case"bool":i=n.toString();break;case"vec2":i=`vec2(${v._numberToFloatStr(n[0])},                            ${v._numberToFloatStr(n[1])})`;break;case"vec3":i=`vec3(${v._numberToFloatStr(n[0])},                            ${v._numberToFloatStr(n[1])},                            ${v._numberToFloatStr(n[2])})`;break;case"vec4":i=`vec4(${v._numberToFloatStr(n[0])},                            ${v._numberToFloatStr(n[1])},                            ${v._numberToFloatStr(n[2])},                            ${v._numberToFloatStr(n[3])})`;break;case"ivec2":i=`ivec2(${v._numberToIntStr(n[0])},                             ${v._numberToIntStr(n[1])})`;break;case"ivec3":i=`ivec3(${v._numberToIntStr(n[0])},                             ${v._numberToIntStr(n[1])},                             ${v._numberToIntStr(n[2])})`;break;case"ivec4":i=`ivec4(${v._numberToIntStr(n[0])},                             ${v._numberToIntStr(n[1])},                             ${v._numberToIntStr(n[2])},                             ${v._numberToIntStr(n[3])})`;break;case"mat2":case"mat3":case"mat4":i=`${r}(${Array.prototype.map.call(n,a=>v._numberToFloatStr(a)).join(", ")})`}return this._entries.add(`const ${r} ${t} = ${i};`),this}static _numberToIntStr(t){return t.toFixed(0)}static _numberToFloatStr(t){return Number.isInteger(t)?t.toFixed(1):t.toString()}generateSource(){return Array.from(this._entries)}};const Ai=`#ifdef GL_FRAGMENT_PRECISION_HIGH
  precision highp float;
  precision highp sampler2D;
#else
  precision mediump float;
  precision mediump sampler2D;
#endif`,Si=`precision highp float;
precision highp sampler2D;`;function Ho(e){e.fragment.uniforms.add(new Zn("projInfo",(t,r)=>$i(r.camera))),e.fragment.uniforms.add(new qt("zScale",(t,r)=>bi(r.camera))),e.fragment.code.add(s`vec3 reconstructPosition(vec2 fragCoord, float depth) {
return vec3((fragCoord * projInfo.xy + projInfo.zw) * (zScale.x * depth + zScale.y), depth);
}`)}function $i(e){const t=e.projectionMatrix;return t[11]===0?ft(Rt,2/(e.fullWidth*t[0]),2/(e.fullHeight*t[5]),(1+t[12])/t[0],(1+t[13])/t[5]):ft(Rt,-2/(e.fullWidth*t[0]),-2/(e.fullHeight*t[5]),(1-t[8])/t[0],(1-t[9])/t[5])}const Rt=Mt();function bi(e){return e.projectionMatrix[11]===0?qe(wt,0,1):qe(wt,1,0)}const wt=Ut();function Ei(e){e.uniforms.add(new b("mainLightDirection",(t,r)=>r.lighting.mainLight.direction))}function yi(e){e.uniforms.add(new b("mainLightIntensity",(t,r)=>r.lighting.mainLight.intensity))}function Vo(e){Ei(e.fragment),yi(e.fragment),e.fragment.code.add(s`vec3 evaluateMainLighting(vec3 normal_global, float shadowing) {
float dotVal = clamp(dot(normal_global, mainLightDirection), 0.0, 1.0);
return mainLightIntensity * ((1.0 - shadowing) * dotVal);
}`)}function Ri(e){const t=e.fragment.code;t.add(s`vec3 evaluateDiffuseIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float NdotNG)
{
return ((1.0 - NdotNG) * ambientGround + (1.0 + NdotNG) * ambientSky) * 0.5;
}`),t.add(s`float integratedRadiance(float cosTheta2, float roughness)
{
return (cosTheta2 - 1.0) / (cosTheta2 * (1.0 - roughness * roughness) - 1.0);
}`),t.add(s`vec3 evaluateSpecularIlluminationHemisphere(vec3 ambientGround, vec3 ambientSky, float RdotNG, float roughness)
{
float cosTheta2 = 1.0 - RdotNG * RdotNG;
float intRadTheta = integratedRadiance(cosTheta2, roughness);
float ground = RdotNG < 0.0 ? 1.0 - intRadTheta : 1.0 + intRadTheta;
float sky = 2.0 - ground;
return (ground * ambientGround + sky * ambientSky) * 0.5;
}`)}function sr(e){e.vertex.code.add(s`const float PI = 3.141592653589793;`),e.fragment.code.add(s`const float PI = 3.141592653589793;
const float LIGHT_NORMALIZATION = 1.0 / PI;
const float INV_PI = 0.3183098861837907;
const float HALF_PI = 1.570796326794897;`)}function Go(e,t){const r=e.fragment.code;e.include(sr),t.pbrMode!==C.Normal&&t.pbrMode!==C.Schematic&&t.pbrMode!==C.Simplified&&t.pbrMode!==C.TerrainWithWater||(r.add(s`float normalDistribution(float NdotH, float roughness)
{
float a = NdotH * roughness;
float b = roughness / (1.0 - NdotH * NdotH + a * a);
return b * b * INV_PI;
}`),r.add(s`const vec4 c0 = vec4(-1.0, -0.0275, -0.572,  0.022);
const vec4 c1 = vec4( 1.0,  0.0425,  1.040, -0.040);
const vec2 c2 = vec2(-1.04, 1.04);
vec2 prefilteredDFGAnalytical(float roughness, float NdotV) {
vec4 r = roughness * c0 + c1;
float a004 = min(r.x * r.x, exp2(-9.28 * NdotV)) * r.x + r.y;
return c2 * a004 + r.zw;
}`)),t.pbrMode!==C.Normal&&t.pbrMode!==C.Schematic||(e.include(Ri),r.add(s`struct PBRShadingInfo
{
float NdotL;
float NdotV;
float NdotH;
float VdotH;
float LdotH;
float NdotNG;
float RdotNG;
float NdotAmbDir;
float NdotH_Horizon;
vec3 skyRadianceToSurface;
vec3 groundRadianceToSurface;
vec3 skyIrradianceToSurface;
vec3 groundIrradianceToSurface;
float averageAmbientRadiance;
float ssao;
vec3 albedoLinear;
vec3 f0;
vec3 f90;
vec3 diffuseColor;
float metalness;
float roughness;
};`),r.add(s`vec3 evaluateEnvironmentIllumination(PBRShadingInfo inputs) {
vec3 indirectDiffuse = evaluateDiffuseIlluminationHemisphere(inputs.groundIrradianceToSurface, inputs.skyIrradianceToSurface, inputs.NdotNG);
vec3 indirectSpecular = evaluateSpecularIlluminationHemisphere(inputs.groundRadianceToSurface, inputs.skyRadianceToSurface, inputs.RdotNG, inputs.roughness);
vec3 diffuseComponent = inputs.diffuseColor * indirectDiffuse * INV_PI;
vec2 dfg = prefilteredDFGAnalytical(inputs.roughness, inputs.NdotV);
vec3 specularColor = inputs.f0 * dfg.x + inputs.f90 * dfg.y;
vec3 specularComponent = specularColor * indirectSpecular;
return (diffuseComponent + specularComponent);
}`),r.add(s`float gamutMapChanel(float x, vec2 p){
return (x < p.x) ? mix(0.0, p.y, x/p.x) : mix(p.y, 1.0, (x - p.x) / (1.0 - p.x) );
}`),r.add(s`vec3 blackLevelSoftCompression(vec3 inColor, PBRShadingInfo inputs){
vec3 outColor;
vec2 p = vec2(0.02 * (inputs.averageAmbientRadiance), 0.0075 * (inputs.averageAmbientRadiance));
outColor.x = gamutMapChanel(inColor.x, p) ;
outColor.y = gamutMapChanel(inColor.y, p) ;
outColor.z = gamutMapChanel(inColor.z, p) ;
return outColor;
}`))}function Bo(e,t){const r=e.fragment.code;e.include(sr),r.add(s`
  struct PBRShadingWater
  {
      float NdotL;   // cos angle between normal and light direction
      float NdotV;   // cos angle between normal and view direction
      float NdotH;   // cos angle between normal and half vector
      float VdotH;   // cos angle between view direction and half vector
      float LdotH;   // cos angle between light direction and half vector
      float VdotN;   // cos angle between view direction and normal vector
  };

  float dtrExponent = ${t.useCustomDTRExponentForWater?"2.2":"2.0"};
  `),r.add(s`vec3 fresnelReflection(float angle, vec3 f0, float f90) {
return f0 + (f90 - f0) * pow(1.0 - angle, 5.0);
}`),r.add(s`float normalDistributionWater(float NdotH, float roughness)
{
float r2 = roughness * roughness;
float NdotH2 = NdotH * NdotH;
float denom = pow((NdotH2 * (r2 - 1.0) + 1.0), dtrExponent) * PI;
return r2 / denom;
}`),r.add(s`float geometricOcclusionKelemen(float LoH)
{
return 0.25 / (LoH * LoH);
}`),r.add(s`vec3 brdfSpecularWater(in PBRShadingWater props, float roughness, vec3 F0, float F0Max)
{
vec3  F = fresnelReflection(props.VdotH, F0, F0Max);
float dSun = normalDistributionWater(props.NdotH, roughness);
float V = geometricOcclusionKelemen(props.LdotH);
float diffusionSunHaze = mix(roughness + 0.045, roughness + 0.385, 1.0 - props.VdotH);
float strengthSunHaze  = 1.2;
float dSunHaze = normalDistributionWater(props.NdotH, diffusionSunHaze)*strengthSunHaze;
return ((dSun + dSunHaze) * V) * F;
}
vec3 tonemapACES(const vec3 x) {
return (x * (2.51 * x + 0.03)) / (x * (2.43 * x + 0.59) + 0.14);
}`)}class Wo extends W{constructor(t,r){super(t,"bool",S.Pass,(n,i,a)=>n.setUniform1b(t,r(i,a)))}}class wi{constructor(t=f()){this.intensity=t}}class Ci{constructor(t=f(),r=Oe(.57735,.57735,.57735)){this.intensity=t,this.direction=r}}class tt{constructor(t=f(),r=Oe(.57735,.57735,.57735),n=!0,i=1,a=1){this.intensity=t,this.direction=r,this.castShadows=n,this.specularStrength=i,this.environmentStrength=a}}let lr=class{constructor(){this.r=[0],this.g=[0],this.b=[0]}};function Ii(e,t,r){(r=r||e).length=e.length;for(let n=0;n<e.length;n++)r[n]=e[n]*t[n];return r}function We(e,t,r){(r=r||e).length=e.length;for(let n=0;n<e.length;n++)r[n]=e[n]*t;return r}function ne(e,t,r){(r=r||e).length=e.length;for(let n=0;n<e.length;n++)r[n]=e[n]+t[n];return r}function cr(e){return(e+1)*(e+1)}function Pi(e){return st(Math.floor(Math.sqrt(e)-1),0,2)}function ur(e,t,r){const n=e[0],i=e[1],a=e[2],o=r||[];return o.length=cr(t),t>=0&&(o[0]=.28209479177),t>=1&&(o[1]=.4886025119*n,o[2]=.4886025119*a,o[3]=.4886025119*i),t>=2&&(o[4]=1.09254843059*n*i,o[5]=1.09254843059*i*a,o[6]=.31539156525*(3*a*a-1),o[7]=1.09254843059*n*a,o[8]=.54627421529*(n*n-i*i)),o}function Mi(e,t){const r=cr(e),n=t||{r:[],g:[],b:[]};n.r.length=n.g.length=n.b.length=r;for(let i=0;i<r;i++)n.r[i]=n.g[i]=n.b[i]=0;return n}function Li(e,t){const r=Pi(t.r.length);for(const n of e)Mr(rt,n.direction),ur(rt,r,O),Ii(O,Ie),We(O,n.intensity[0],ee),ne(t.r,ee),We(O,n.intensity[1],ee),ne(t.g,ee),We(O,n.intensity[2],ee),ne(t.b,ee);return t}function Ni(e,t){ur(rt,0,O);for(const r of e)t.r[0]+=O[0]*Ie[0]*r.intensity[0]*4*Math.PI,t.g[0]+=O[0]*Ie[0]*r.intensity[1]*4*Math.PI,t.b[0]+=O[0]*Ie[0]*r.intensity[2]*4*Math.PI;return t}function Fi(e,t,r,n){Mi(t,n),y(r.intensity,0,0,0);let i=!1;const a=Di,o=Oi,c=zi;a.length=0,o.length=0,c.length=0;for(const l of e)l instanceof tt&&!i?(K(r.direction,l.direction),K(r.intensity,l.intensity),r.specularStrength=l.specularStrength,r.environmentStrength=l.environmentStrength,r.castShadows=l.castShadows,i=!0):l instanceof tt||l instanceof Ci?a.push(l):l instanceof wi?o.push(l):l instanceof lr&&c.push(l);Li(a,n),Ni(o,n);for(const l of c)ne(n.r,l.r),ne(n.g,l.g),ne(n.b,l.b)}const Di=[],Oi=[],zi=[],O=[0],ee=[0],rt=f(),Ie=[3.141593,2.094395,2.094395,2.094395,.785398,.785398,.785398,.785398,.785398];class Ct{constructor(){this.color=f(),this.intensity=1}}class Ui{constructor(){this.direction=f(),this.ambient=new Ct,this.diffuse=new Ct}}const Hi=.4;class jo{constructor(){this._shOrder=2,this._legacy=new Ui,this.globalFactor=.5,this.noonFactor=.5,this._sphericalHarmonics=new lr,this._mainLight=new tt(f(),Oe(1,0,0),!1)}get legacy(){return this._legacy}get sh(){return this._sphericalHarmonics}get mainLight(){return this._mainLight}set(t){Fi(t,this._shOrder,this._mainLight,this._sphericalHarmonics),K(this._legacy.direction,this._mainLight.direction);const r=1/Math.PI;this._legacy.ambient.color[0]=.282095*this._sphericalHarmonics.r[0]*r,this._legacy.ambient.color[1]=.282095*this._sphericalHarmonics.g[0]*r,this._legacy.ambient.color[2]=.282095*this._sphericalHarmonics.b[0]*r,N(this._legacy.diffuse.color,this._mainLight.intensity,r),K(we,this._legacy.diffuse.color),N(we,we,Hi*this.globalFactor),P(this._legacy.ambient.color,this._legacy.ambient.color,we)}copyFrom(t){this._sphericalHarmonics.r=Array.from(t.sh.r),this._sphericalHarmonics.g=Array.from(t.sh.g),this._sphericalHarmonics.b=Array.from(t.sh.b),K(this._mainLight.direction,t.mainLight.direction),K(this._mainLight.intensity,t.mainLight.intensity),this._mainLight.castShadows=t.mainLight.castShadows,this._mainLight.specularStrength=t.mainLight.specularStrength,this._mainLight.environmentStrength=t.mainLight.environmentStrength,this.globalFactor=t.globalFactor,this.noonFactor=t.noonFactor}lerpLighting(t,r,n){if(je(this._mainLight.intensity,t.mainLight.intensity,r.mainLight.intensity,n),this._mainLight.environmentStrength=k(t.mainLight.environmentStrength,r.mainLight.environmentStrength,n),this._mainLight.specularStrength=k(t.mainLight.specularStrength,r.mainLight.specularStrength,n),K(this._mainLight.direction,r.mainLight.direction),this._mainLight.castShadows=r.mainLight.castShadows,this.globalFactor=k(t.globalFactor,r.globalFactor,n),this.noonFactor=k(t.noonFactor,r.noonFactor,n),t.sh.r.length===r.sh.r.length)for(let i=0;i<r.sh.r.length;i++)this._sphericalHarmonics.r[i]=k(t.sh.r[i],r.sh.r[i],n),this._sphericalHarmonics.g[i]=k(t.sh.g[i],r.sh.g[i],n),this._sphericalHarmonics.b[i]=k(t.sh.b[i],r.sh.b[i],n);else for(let i=0;i<r.sh.r.length;i++)this._sphericalHarmonics.r[i]=r.sh.r[i],this._sphericalHarmonics.g[i]=r.sh.g[i],this._sphericalHarmonics.b[i]=r.sh.b[i]}}const we=f();function Xo(e,t){if(!t.multipassEnabled)return;e.fragment.include(hi),e.fragment.uniforms.add(new Ce("terrainDepthTexture",(n,i)=>{var a;return(a=i.multipassTerrain.depth)==null?void 0:a.attachment}));const r=t.occlusionPass;e.fragment.code.add(s`
   ${r?"bool":"void"} terrainDepthTest(float fragmentDepth) {
      float depth = texelFetch(terrainDepthTexture, ivec2(gl_FragCoord.xy), 0).r;
      float linearDepth = linearizeDepth(depth);
      ${r?s`return fragmentDepth < linearDepth && depth < 1.0;`:s`
          if(fragmentDepth ${t.cullAboveGround?">":"<="} linearDepth){
            discard;
          }`}
    }`)}class Ko{constructor(){this.cullAboveGround=!1}}function qo(e){e.code.add(s`vec4 premultiplyAlpha(vec4 v) {
return vec4(v.rgb * v.a, v.a);
}
vec3 rgb2hsv(vec3 c) {
vec4 K = vec4(0.0, -1.0 / 3.0, 2.0 / 3.0, -1.0);
vec4 p = c.g < c.b ? vec4(c.bg, K.wz) : vec4(c.gb, K.xy);
vec4 q = c.r < p.x ? vec4(p.xyw, c.r) : vec4(c.r, p.yzx);
float d = q.x - min(q.w, q.y);
float e = 1.0e-10;
return vec3(abs(q.z + (q.w - q.y) / (6.0 * d + e)), min(d / (q.x + e), 1.0), q.x);
}
vec3 hsv2rgb(vec3 c) {
vec4 K = vec4(1.0, 2.0 / 3.0, 1.0 / 3.0, 3.0);
vec3 p = abs(fract(c.xxx + K.xyz) * 6.0 - K.www);
return c.z * mix(K.xxx, clamp(p - K.xxx, 0.0, 1.0), c.y);
}
float rgb2v(vec3 c) {
return max(c.x, max(c.y, c.z));
}`)}class ke extends Qe{}pe([_e({constValue:!0})],ke.prototype,"hasSliceHighlight",void 0),pe([_e({constValue:!1})],ke.prototype,"hasSliceInVertexProgram",void 0),pe([_e({constValue:S.Pass})],ke.prototype,"pbrTextureBindType",void 0);export{po as $,$a as A,Wo as B,Ei as C,yi as D,gt as E,hi as F,Ko as G,ua as H,fa as I,ln as J,cn as K,un as L,La as M,ga as N,Bn as O,ao as P,Bo as Q,bt as R,Co as S,Io as T,C as U,Po as V,ei as W,wo as X,co as Y,sr as Z,jo as _,lo as a,wa as a0,Xa as a1,Za as a2,Ya as a3,ja as a4,eo as a5,Ka as a6,Ja as a7,ka as a8,yo as a9,xo as aA,ha as aB,$o as aC,da as aD,Be as aE,Jn as aF,Mo as aG,tt as aH,Ci as aI,qa as aJ,Hn as aK,io as aL,Qa as aM,nn as aN,pa as aa,va as ab,Et as ac,Fa as ad,mo as ae,wi as af,Ra as ag,ya as ah,ro as ai,Qn as aj,jn as ak,Xn as al,Ho as am,bo as an,Un as ao,Ma as ap,Vn as aq,Hi as ar,Go as as,Vo as at,Wn as au,uo as av,Sa as aw,Eo as ax,Ao as ay,So as az,Zn as b,Xo as c,I as d,qo as e,so as f,Q as g,za as h,Ua as i,Ba as j,ba as k,Ea as l,ke as m,xa as n,No as o,Yn as p,qt as q,Va as r,Ca as s,la as t,Ce as u,kn as v,Fn as w,Oa as x,Gt as y,ca as z};
