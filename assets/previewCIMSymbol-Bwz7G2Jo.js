import{g7 as w,ik as F,jI as v,il as G}from"./index-Dv-JqQDv.js";import{e as g}from"./CIMSymbolHelper-DBCkPMeB.js";import{CIMSymbolRasterizer as O}from"./CIMSymbolRasterizer-5mvt8yN3.js";import{t as b,l as R}from"./symbolUtils-D7UIqMVS.js";import"./BidiEngine-BwB1Df7c.js";import"./fontUtils-CnE29zYd.js";import"./GeometryUtils-CGcKgdcH.js";import"./enums-BRXbslMp.js";import"./definitions-ByNBSgP9.js";import"./mat2d-C6u6dH6d.js";import"./mat2df32-orApM5a3.js";import"./vec2-DGogPjh1.js";import"./vec2f32-BbH2jxlN.js";import"./Rect-CUzevAry.js";import"./BoundingBox-BhuXqU4L.js";import"./CIMResourceManager-mkE9OYNU.js";import"./imageUtils-CyYQ2a5H.js";import"./jsxFactory-C3RLkrq9.js";import"./webStyleSymbolUtils-DSxq9N1_.js";import"./devEnvironmentUtils-D6qIi8Ky.js";const u=new O(null),p=w(b.size),S=w(b.maxSize),C=w(b.lineWidth),V=1;async function $(a,e,r){const i=e==null?void 0:e.size;let t=i!=null&&typeof i=="object"&&"width"in i?i.width:i,o=i!=null&&typeof i=="object"&&"height"in i?i.height:i;if(t==null||o==null)if(r==="esriGeometryPolygon")t=p,o=p;else{const l=await k(a,e,r);l&&(t=l.width,o=l.height),r==="esriGeometryPolyline"&&(t=C),t=t!=null&&isFinite(t)?Math.min(t,S):p,o=o!=null&&isFinite(o)?Math.max(Math.min(o,S),V):p}return e.style==="legend"&&r==="esriGeometryPolyline"&&(t=C),{width:t,height:o}}async function k(a,e,r){const{feature:i,fieldMap:t,viewParams:o}=e.cimOptions||e,l=await G.resolveSymbolOverrides(a.data,i,null,t,r,null,o);if(!l)return null;(a=a.clone()).data={type:"CIMSymbolReference",symbol:l},a.data.primitiveOverrides=void 0;const n=[];return g.fetchResources(l,u.resourceManager,n),g.fetchFonts(l,u.resourceManager,n),n.length>0&&await Promise.all(n),g.getEnvelope(l,null,u.resourceManager)}async function le(a,e={}){var M;const{node:r,opacity:i,symbolConfig:t}=e,o=t!=null&&typeof t=="object"&&"isSquareFill"in t&&t.isSquareFill,l=e.cimOptions||e,n=l.geometryType||F((M=a==null?void 0:a.data)==null?void 0:M.symbol),y=await $(a,e,n),{feature:I,fieldMap:P}=l,L=o||n!=="esriGeometryPolygon"?"preview":"legend",f=await u.rasterizeCIMSymbolAsync(a,I,y,L,P,n,null,l.viewParams,l.allowScalingUp);if(!f)return null;const{width:j,height:x}=f,m=document.createElement("canvas");m.width=j,m.height=x,m.getContext("2d").putImageData(f,0,0);const h=v(y.width),d=v(y.height),s=new Image(h,d);s.src=m.toDataURL(),s.ariaLabel=e.ariaLabel??null,s.alt=e.ariaLabel??"",i!=null&&(s.style.opacity=`${i}`);let c=s;if(e.effectView!=null){const z={shape:{type:"image",x:0,y:0,width:h,height:d,src:s.src},fill:null,stroke:null,offset:[0,0]};c=R([[z]],[h,d],{effectView:e.effectView,ariaLabel:e.ariaLabel})}return r&&c&&r.appendChild(c),c}export{le as previewCIMSymbol};
