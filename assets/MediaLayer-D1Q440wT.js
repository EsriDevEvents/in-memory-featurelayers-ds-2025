const __vite__fileDeps=["./mediaLayerUtils-ohbLRJbm.js","./utils-DiyDX8WB.js","./index-Dv-JqQDv.js","./index-CejX7rzk.css","./originUtils-D69mHv66.js","./multiOriginJSONSupportUtils-C0wm8_Yw.js","./jsonContext-CHdffGJG.js","./saveAPIKeyUtils-D5i8JX04.js","./saveUtils-Bbs6ASTr.js","./resourceUtils-Cvlb92jl.js","./resourceUtils-DtCU-GVF.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ar as m,m as R,hL as I,bN as M,o as O,X as A,J as L,eX as V,x as T,G as w,ck as P,a0 as $,dF as j,gJ as C,kS as N,j as i,y as o,P as S,ef as H,eh as B,bh as F,bi as G,bj as k,k as z,s as p,es as h,ep as f,bm as g,e0 as J,eu as W,bp as X,_ as K}from"./index-Dv-JqQDv.js";import{j as q,b as v,a as x,X as D,f as Q}from"./VideoElement-BLwL3zv0.js";import{o as U}from"./BoundsStore-CcA6vL2e.js";import{m as Y}from"./MediaElementView-CJsFQ39Z.js";import"./imageUtils-CyYQ2a5H.js";import"./resourceExtension-j5iCFPPS.js";import"./mat3-B7LiNcRs.js";import"./mat3f64-BBpwCtoL.js";import"./vec2-DGogPjh1.js";import"./vec2f64-Diu2Kaa8.js";import"./PooledRBush-C2urojqP.js";import"./quickselect-D0_cvEX6.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./normalizeUtilsSync-B3yip2wp.js";const Z={key:"type",defaultKeyValue:"image",base:q,typeMap:{image:v,video:x}},_=m.ofType(Z);let d=class extends R.LoadableMixin(I(M.EventedAccessor)){constructor(e){super(e),this._index=new U,this._elementViewsMap=new Map,this._elementsIndexes=new Map,this._elementsChangedHandler=s=>{for(const t of s.removed){const n=this._elementViewsMap.get(t);this._elementViewsMap.delete(t),this._index.delete(n),this.removeHandles(n),n.destroy(),this.notifyChange("fullExtent")}const{spatialReference:r}=this;for(const t of s.added){if(this._elementViewsMap.get(t))continue;const n=new Y({spatialReference:r,element:t});this._elementViewsMap.set(t,n);const l=O(()=>n.coords,()=>this._updateIndexForElement(n,!1));this._updateIndexForElement(n,!0),this.addHandles(l,n)}this._elementsIndexes.clear(),this.elements.forEach((t,n)=>this._elementsIndexes.set(t,n)),this.emit("refresh")},this.elements=new _}async load(e){if(A(e),!this.spatialReference){const s=this.elements.find(r=>{var t;return((t=r.georeference)==null?void 0:t.coords)!=null});this._set("spatialReference",s?s.georeference.coords.spatialReference:L.WGS84)}return this._elementsChangedHandler({added:this.elements.items,removed:[]}),this.addHandles(this.elements.on("change",this._elementsChangedHandler)),this}destroy(){this._index.clear(),this._elementViewsMap.clear(),this._elementsIndexes.clear()}set elements(e){this._set("elements",V(e,this._get("elements"),_))}get fullExtent(){if(this.loadStatus==="not-loaded")return null;const e=this._index.fullBounds;return e==null?null:new T({xmin:e[0],ymin:e[1],xmax:e[2],ymax:e[3],spatialReference:this.spatialReference})}set spatialReference(e){this.loadStatus==="not-loaded"?this._set("spatialReference",e):w.getLogger(this).error("#spatialReference","spatialReference cannot be changed after the source is loaded.")}async queryElements(e,s){await this.load(),await P(e.spatialReference,this.spatialReference,null,s);const r=$(e.spatialReference,this.spatialReference)?e:j(e,this.spatialReference);if(!r)return[];const t=r.normalize(),n=[];for(const l of t)this._index.forEachInBounds(C(l),({normalizedCoords:u,element:E})=>{u!=null&&N(l,u)&&n.push(E)});return n.sort((l,u)=>this._elementsIndexes.get(l)-this._elementsIndexes.get(u)),n}hasElement(e){return this.elements.includes(e)}_updateIndexForElement(e,s){const r=e.normalizedBounds,t=this._index.has(e),n=r!=null;this._index.delete(e),n&&this._index.set(e,r),this.notifyChange("fullExtent"),s||(t!==n?this.emit("refresh"):this.emit("change",{element:e.element}))}};i([o()],d.prototype,"elements",null),i([o({readOnly:!0})],d.prototype,"fullExtent",null),i([o()],d.prototype,"spatialReference",null),d=i([S("esri.layers.support.LocalMediaElementSource")],d);const c=d;function y(e){return typeof e=="object"&&e!=null&&"type"in e}function b(e){return y(e)&&e.type==="image"}let a=class extends H(B(F(G(k(X))))){constructor(e){super(e),this.effectiveSource=null,this.georeference=null,this.copyright=null,this.operationalLayerType="MediaLayer",this.spatialReference=null,this.type="media",this._debouncedSaveOperations=z(async(s,r,t)=>{const{save:n,saveAs:l}=await K(()=>import("./mediaLayerUtils-ohbLRJbm.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10]),import.meta.url);switch(s){case h.SAVE:return n(this,r);case h.SAVE_AS:return l(this,t,r)}}),this.source=new c}load(e){return this.addResolvingPromise(this._doLoad(e)),Promise.resolve(this)}async _doLoad(e){await this.loadFromPortal({supportedTypes:["Media Layer"]},e);let s=this.source;if(!s)throw new p("media-layer:source-missing","Set 'MediaLayer.source' before loading the layer.");const r=this._getSourceOverride(s,this.georeference);r&&(this.setAtOrigin("source",r,"web-map"),this.setAtOrigin("source",r,"web-scene"),s=r);const t=y(s)?new c({elements:new m([s])}):s;this._set("effectiveSource",t),this.spatialReference&&(t.spatialReference=this.spatialReference),await t.load(e),this.spatialReference=t.spatialReference}destroy(){var e,s;(e=this.effectiveSource)==null||e.destroy(),this.effectiveSource!==this.source&&((s=this.source)==null||s.destroy())}readGeoreference(e,s){return e&&"itemId"in s&&s.itemId?e:void 0}get fullExtent(){return this.loaded?this.effectiveSource.fullExtent:null}set source(e){this.loadStatus!=="loaded"&&this.loadStatus!=="failed"?this._set("source",e):w.getLogger(this).error("#source","source cannot be changed after the layer is loaded.")}castSource(e){return e?Array.isArray(e)?new c({elements:new m(e)}):e instanceof m?new c({elements:e}):e:null}readSource(e,s,r){if("itemId"in s&&s.itemId)return;const t=this._createSource(s);return t==null||t.read(s,r),t}writeSource(e,s,r,t){if(e&&e instanceof c){const n=e.elements.length;if(n!==1)return void((t==null?void 0:t.messages)&&t.messages.push(new p("media-layer:unsupported-source",`local media element source can only be persisted if it contains exactly one ImageElement, but it has ${n}.`)));e=e.elements.at(0)}b(e)?e.write(s,t):t!=null&&t.messages&&(e?t.messages.push(new p("media-layer:unsupported-source","only media elements of type 'ImageElement' can be persisted")):t.messages.push(new p("media-layer:unsupported-source","the media layer is missing a source")))}async save(e){return this._debouncedSaveOperations(h.SAVE,e)}async saveAs(e,s){return this._debouncedSaveOperations(h.SAVE_AS,s,e)}_createSource(e){if("mediaType"in e)switch(e.mediaType){case"image":return new v;case"video":return new x}return null}_getSourceOverride(e,s){if(y(e)&&this.originIdOf("source")===f.PORTAL_ITEM&&s&&(this.originIdOf("georeference")===f.WEB_MAP||this.originIdOf("georeference")===f.WEB_SCENE)){const r=e.toJSON(),t=this._createSource(r);return t.read({...r},{origin:"portal-item"}),t.read({georeference:s},{origin:"web-map"}),t.read({georeference:s},{origin:"web-scene"}),t}return null}};i([o({readOnly:!0})],a.prototype,"effectiveSource",void 0),i([o({readOnly:!0,json:{read:!1,write:!1,origins:{"web-document":{read:!0}}}})],a.prototype,"georeference",void 0),i([g("web-document","georeference")],a.prototype,"readGeoreference",null),i([o({type:String})],a.prototype,"copyright",void 0),i([o({readOnly:!0})],a.prototype,"fullExtent",null),i([o({type:["MediaLayer"]})],a.prototype,"operationalLayerType",void 0),i([o({type:["show","hide"]})],a.prototype,"listMode",void 0),i([o({nonNullable:!0,json:{write:{enabled:!0,allowNull:!1,target:{url:{type:String},mediaType:{type:["image"]},georeference:{type:D}},overridePolicy(e,s,r){return{enabled:!0,allowNull:!1,ignoreOrigin:Q(this,r==null?void 0:r.origin)&&b(e)&&!!e.georeference&&e.originIdOf("georeference")>f.PORTAL_ITEM}}}}})],a.prototype,"source",null),i([J("source")],a.prototype,"castSource",null),i([g("source",["url"])],a.prototype,"readSource",null),i([W("source")],a.prototype,"writeSource",null),i([o()],a.prototype,"spatialReference",void 0),i([o({readOnly:!0})],a.prototype,"type",void 0),a=i([S("esri.layers.MediaLayer")],a);const me=a;export{me as default};
