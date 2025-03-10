import{s as L,U as P,d$ as _,db as v,cl as B,dQ as z,af as D,aT as G}from"./index-Dv-JqQDv.js";import{j as U,n as N}from"./mat3-B7LiNcRs.js";import{e as C}from"./mat3f64-BBpwCtoL.js";import{w as Q,m as q,h as K,c as V}from"./MeshComponent-CKdOnzQW.js";import{l as k}from"./MeshVertexAttributes-CERcIROX.js";import{s as M}from"./meshVertexSpaceUtils-1Rv9Wig9.js";import{c as O,x as F,L as H,O as S,i as I,E as J,T as W,u as X}from"./BufferView-_0HdWB6j.js";import{t as Y,r as Z,u as ee,n as E}from"./vec3-zd-aCjeY.js";import{f as te,o as re,u as R}from"./vec4-mLjVaC0N.js";import{e as oe}from"./types-D0PSWh4d.js";import{n as ne,l as se,o as ae,f as le,a as h,b as ie,c as ue,e as ce,d as fe,g as me}from"./DefaultMaterial_COLOR_GAMMA-32Y4lnr4.js";import{M as pe}from"./vertexSpaceConversion-lekgA4Rd.js";import{r as de}from"./resourceUtils-Bb92V0U7.js";import{D as w}from"./enums-BlUEVwJR.js";import"./imageUtils-CyYQ2a5H.js";import"./MeshLocalVertexSpace-Bf4xmfpu.js";import"./vec2-DGogPjh1.js";import"./mat4f64-Dk4dwAN8.js";import"./quat-B52zwwOM.js";import"./quatf64-BrpT0VRp.js";import"./Indices-BTetzIKW.js";import"./spatialReferenceEllipsoidUtils-MFgRhPLs.js";import"./computeTranslationToOriginAndRotation-DBznw1xD.js";import"./projectPointToVector-ARkh6gdu.js";import"./projection-CsHR6jE_.js";import"./DoubleArray-DzYWDmvK.js";import"./basicInterfaces-wONHx_SN.js";function ge(e,t,r){const u=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,c=t.typedBufferStride,i=r?r.count:t.count;let s=((r==null?void 0:r.dstIndex)??0)*n,m=((r==null?void 0:r.srcIndex)??0)*c;for(let l=0;l<i;++l){for(let o=0;o<9;++o)u[s+o]=a[m+o];s+=n,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:ge},Symbol.toStringTag,{value:"Module"}));function xe(e,t,r){const u=e.typedBuffer,n=e.typedBufferStride,a=t.typedBuffer,c=t.typedBufferStride,i=r?r.count:t.count;let s=((r==null?void 0:r.dstIndex)??0)*n,m=((r==null?void 0:r.srcIndex)??0)*c;for(let l=0;l<i;++l){for(let o=0;o<16;++o)u[s+o]=a[m+o];s+=n,m+=c}}Object.freeze(Object.defineProperty({__proto__:null,copy:xe},Symbol.toStringTag,{value:"Module"}));function $(e,t){return new e(new ArrayBuffer(t*e.ElementCount*oe(e.ElementType)))}async function tt(e,t,r){const u=new ne($e(r)),n=(await se(u,t,r,!0)).model,a=n.lods.shift(),c=new Map,i=new Map;n.textures.forEach((x,y)=>c.set(y,he(x))),n.materials.forEach((x,y)=>i.set(y,we(x,c)));const s=ye(a);for(const x of s.parts)be(s,x,i);const{position:m,normal:l,tangent:o,color:f,texCoord0:p}=s.vertexAttributes,g=M(e,r),j=e.spatialReference.isGeographic?M(e):g,b=pe({vertexAttributes:{position:m.typedBuffer,normal:l==null?void 0:l.typedBuffer,tangent:o==null?void 0:o.typedBuffer},vertexSpace:j,spatialReference:e.spatialReference},g,{allowBufferReuse:!0,sourceUnit:"meters"});if(!b)throw new L("loadGLTFMesh()","Failed to load mesh from glTF due to projection errors");return{transform:null,vertexSpace:g,components:s.components,spatialReference:e.spatialReference,vertexAttributes:new k({...b,color:f==null?void 0:f.typedBuffer,uv:p==null?void 0:p.typedBuffer})}}function $e(e){const t=e==null?void 0:e.resolveFile;return t?{busy:!1,request:async(r,u,n)=>{const a=(t==null?void 0:t(r))??r;return(await P(a,{responseType:u==="image"?"image":u==="binary"||u==="image+type"?"array-buffer":"json",signal:n==null?void 0:n.signal,timeout:0})).data}}:null}function T(e,t){if(e==null)return"-";const r=e.typedBuffer;return`${_(t,r.buffer,()=>t.size)}/${r.byteOffset}/${r.byteLength}`}function Te(e){return e!=null?e.toString():"-"}function ye(e){let t=0;const r={color:!1,tangent:!1,normal:!1,texCoord0:!1},u=new Map,n=new Map,a=[];for(const c of e.parts){const{attributes:{position:i,normal:s,color:m,tangent:l,texCoord0:o}}=c,f=`
      ${T(i,u)}/
      ${T(s,u)}/
      ${T(m,u)}/
      ${T(l,u)}/
      ${T(o,u)}/
      ${Te(c.transform)}
    `;let p=!1;const g=_(n,f,()=>(p=!0,{start:t,length:i.count}));p&&(t+=i.count),s&&(r.normal=!0),m&&(r.color=!0),l&&(r.tangent=!0),o&&(r.texCoord0=!0),a.push({gltf:c,writeVertices:p,region:g})}return{vertexAttributes:{position:$(W,t),normal:r.normal?$(I,t):null,tangent:r.tangent?$(O,t):null,color:r.color?$(F,t):null,texCoord0:r.texCoord0?$(X,t):null},parts:a,components:[]}}function he(e){return new Q({data:(de(e.data),e.data),wrap:Ce(e.parameters.wrap)})}function we(e,t){const r=new v(Me(e.color,e.opacity)),u=e.emissiveFactor?new v(Se(e.emissiveFactor)):null,n=a=>a?new V({scale:a.scale?[a.scale[0],a.scale[1]]:[1,1],rotation:G(a.rotation??0),offset:a.offset?[a.offset[0],a.offset[1]]:[0,0]}):null;return new q({color:r,colorTexture:t.get(e.textureColor),normalTexture:t.get(e.textureNormal),emissiveColor:u,emissiveTexture:t.get(e.textureEmissive),occlusionTexture:t.get(e.textureOcclusion),alphaMode:Be(e.alphaMode),alphaCutoff:e.alphaCutoff,doubleSided:e.doubleSided,metallic:e.metallicFactor,roughness:e.roughnessFactor,metallicRoughnessTexture:t.get(e.textureMetallicRoughness),colorTextureTransform:n(e.colorTextureTransform),normalTextureTransform:n(e.normalTextureTransform),occlusionTextureTransform:n(e.occlusionTextureTransform),emissiveTextureTransform:n(e.emissiveTextureTransform),metallicRoughnessTextureTransform:n(e.metallicRoughnessTextureTransform)})}function be(e,t,r){t.writeVertices&&ve(e,t);const{indices:u,attributes:n,primitiveType:a,material:c}=t.gltf;let i=ae(u||n.position.count,a);const s=t.region.start;if(s){const m=new Uint32Array(i);for(let l=0;l<i.length;l++)m[l]+=s;i=m}e.components.push(new K({name:t.gltf.name,faces:i,material:r.get(c),shading:n.normal?"source":"flat",trustSourceNormals:!0}))}function ve(e,t){const{position:r,normal:u,tangent:n,color:a,texCoord0:c}=e.vertexAttributes,i=t.region.start,{attributes:s,transform:m}=t.gltf,l=s.position.count;if(Y(r.slice(i,l),s.position,m),s.normal!=null&&u!=null){const o=U(C(),m),f=u.slice(i,l);Z(f,s.normal,o),B(o)&&ee(f,f)}else u!=null&&le(u,0,0,1,{dstIndex:i,count:l});if(s.tangent!=null&&n!=null){const o=N(C(),m),f=n.slice(i,l);te(f,s.tangent,o),B(o)&&re(f,f)}else n!=null&&h(n,0,0,1,1,{dstIndex:i,count:l});if(s.texCoord0!=null&&c!=null?ie(c.slice(i,l),s.texCoord0):c!=null&&ue(c,0,0,{dstIndex:i,count:l}),s.color!=null&&a!=null){const o=s.color,f=a.slice(i,l);if(o.elementCount===4)o instanceof O?R(f,o,255):o instanceof F?ce(f,o):o instanceof H&&R(f,o,1/256);else{h(f,255,255,255,255);const p=S.fromTypedArray(f.typedBuffer,f.typedBufferStride);o instanceof I?E(p,o,255):o instanceof S?fe(p,o):o instanceof J&&E(p,o,1/256)}}else a!=null&&h(a.slice(i,l),255,255,255,255)}function Be(e){switch(e){case"OPAQUE":return"opaque";case"MASK":return"mask";case"BLEND":return"blend"}}function Ce(e){return{horizontal:A(e.s),vertical:A(e.t)}}function A(e){switch(e){case w.CLAMP_TO_EDGE:return"clamp";case w.MIRRORED_REPEAT:return"mirror";case w.REPEAT:return"repeat"}}function d(e){return e**(1/me)*255}function Me(e,t){return z(d(e[0]),d(e[1]),d(e[2]),t)}function Se(e){return D(d(e[0]),d(e[1]),d(e[2]))}export{tt as loadGLTFMesh};
