const __vite__fileDeps=["./index-Dv-JqQDv.js","./index-CejX7rzk.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{cG as X,f3 as K,f2 as Y,f7 as Q,j as a,y as p,nh as ee,a7 as te,eu as q,x as z,J as re,z as ie,P as N,ac as k,bI as se,a6 as V,bm as oe,kT as ne,bF as ae,aq as le,bH as pe,bG as ue,U as ye,b_ as ce,k as he,cu as de,s as M,bt as I,ar as fe,O as L,en as U,_ as me,d$ as ge,dG as we,p as be,oq as ve,X as H,hV as xe,gn as $e}from"./index-Dv-JqQDv.js";import{n as T}from"./floorFilterUtils-DZ5C6FQv.js";import{o as J}from"./drapedUtils-nWPHxHp9.js";import{n as Se}from"./sublayerUtils-CPuB3ran.js";import{n as Fe,p as Oe}from"./popupUtils-CSsimScH.js";function je(t,e){const{dpi:i,gdbVersion:o,geometry:r,geometryPrecision:n,height:s,historicMoment:y,layerOption:c,mapExtent:l,maxAllowableOffset:u,returnFieldName:h,returnGeometry:m,returnUnformattedValues:x,returnZ:$,spatialReference:O,timeExtent:f,tolerance:F,width:w}=t.toJSON(),{dynamicLayers:g,layerDefs:b,layerIds:P}=Ee(t),_=(e==null?void 0:e.geometry)!=null?e.geometry:null,v={historicMoment:y,geometryPrecision:n,maxAllowableOffset:u,returnFieldName:h,returnGeometry:m,returnUnformattedValues:x,returnZ:$,tolerance:F},j=(_==null?void 0:_.toJSON())||r;v.imageDisplay=`${w},${s},${i}`,o&&(v.gdbVersion=o),j&&(delete j.spatialReference,v.geometry=JSON.stringify(j),v.geometryType=X(j));const A=O??(j==null?void 0:j.spatialReference)??(l==null?void 0:l.spatialReference);if(A&&(v.sr=K(A)),v.time=f?[f.start,f.end].join(","):null,l){const{xmin:D,ymin:Z,xmax:W,ymax:C}=l;v.mapExtent=`${D},${Z},${W},${C}`}return b&&(v.layerDefs=b),g&&!b&&(v.dynamicLayers=g),v.layers=c==="popup"?"visible":c,P&&!g&&(v.layers+=`:${P.join(",")}`),v}function Ee(t){var $,O;const{mapExtent:e,floors:i,width:o,sublayers:r,layerIds:n,layerOption:s,gdbVersion:y}=t,c=(O=($=r==null?void 0:r.find(f=>f.layer!=null))==null?void 0:$.layer)==null?void 0:O.serviceSublayers,l=s==="popup",u={},h=Y({extent:e,width:o,spatialReference:e==null?void 0:e.spatialReference}),m=[],x=f=>{const F=h===0,w=f.minScale===0||h<=f.minScale,g=f.maxScale===0||h>=f.maxScale;if(f.visible&&(F||w&&g))if(f.sublayers)f.sublayers.forEach(x);else{if((n==null?void 0:n.includes(f.id))===!1||l&&(!f.popupTemplate||!f.popupEnabled))return;m.unshift(f)}};if(r==null||r.forEach(x),r&&!m.length)u.layerIds=[];else{const f=Se(m,c,y),F=m.map(w=>{const g=T(i,w);return w.toExportImageJSON(g)});if(f)u.dynamicLayers=JSON.stringify(F);else{if(r){let g=m.map(({id:b})=>b);n&&(g=g.filter(b=>n.includes(b))),u.layerIds=g}else n!=null&&n.length&&(u.layerIds=n);const w=Pe(i,m);if(w!=null&&w.length){const g={};for(const b of w)b.definitionExpression&&(g[b.id]=b.definitionExpression);Object.keys(g).length&&(u.layerDefs=JSON.stringify(g))}}}return u}function Pe(t,e){const i=!!(t!=null&&t.length),o=e.filter(r=>r.definitionExpression!=null||i&&r.floorInfo!=null);return o.length?o.map(r=>{const n=T(t,r),s=Q(n,r.definitionExpression);return{id:r.id,definitionExpression:s??void 0}}):null}var G;let d=G=class extends k{static from(t){return se(G,t)}constructor(t){super(t),this.dpi=96,this.floors=null,this.gdbVersion=null,this.geometry=null,this.geometryPrecision=null,this.height=400,this.historicMoment=null,this.layerIds=null,this.layerOption="top",this.mapExtent=null,this.maxAllowableOffset=null,this.returnFieldName=!0,this.returnGeometry=!1,this.returnM=!1,this.returnUnformattedValues=!0,this.returnZ=!1,this.spatialReference=null,this.sublayers=null,this.timeExtent=null,this.tolerance=null,this.width=400}writeHistoricMoment(t,e){e.historicMoment=t&&t.getTime()}};a([p({type:Number,json:{write:!0}})],d.prototype,"dpi",void 0),a([p()],d.prototype,"floors",void 0),a([p({type:String,json:{write:!0}})],d.prototype,"gdbVersion",void 0),a([p({types:ee,json:{read:te,write:!0}})],d.prototype,"geometry",void 0),a([p({type:Number,json:{write:!0}})],d.prototype,"geometryPrecision",void 0),a([p({type:Number,json:{write:!0}})],d.prototype,"height",void 0),a([p({type:Date})],d.prototype,"historicMoment",void 0),a([q("historicMoment")],d.prototype,"writeHistoricMoment",null),a([p({type:[Number],json:{write:!0}})],d.prototype,"layerIds",void 0),a([p({type:["top","visible","all","popup"],json:{write:!0}})],d.prototype,"layerOption",void 0),a([p({type:z,json:{write:!0}})],d.prototype,"mapExtent",void 0),a([p({type:Number,json:{write:!0}})],d.prototype,"maxAllowableOffset",void 0),a([p({type:Boolean,json:{write:!0}})],d.prototype,"returnFieldName",void 0),a([p({type:Boolean,json:{write:!0}})],d.prototype,"returnGeometry",void 0),a([p({type:Boolean,json:{write:!0}})],d.prototype,"returnM",void 0),a([p({type:Boolean,json:{write:!0}})],d.prototype,"returnUnformattedValues",void 0),a([p({type:Boolean,json:{write:!0}})],d.prototype,"returnZ",void 0),a([p({type:re,json:{write:!0}})],d.prototype,"spatialReference",void 0),a([p()],d.prototype,"sublayers",void 0),a([p({type:ie,json:{write:!0}})],d.prototype,"timeExtent",void 0),a([p({type:Number,json:{write:!0}})],d.prototype,"tolerance",void 0),a([p({type:Number,json:{write:!0}})],d.prototype,"width",void 0),d=G=a([N("esri.rest.support.IdentifyParameters")],d);const B=d;let S=class extends k{constructor(t){super(t),this.displayFieldName=null,this.feature=null,this.layerId=null,this.layerName=null}readFeature(t,e){return V.fromJSON({attributes:{...e.attributes},geometry:{...e.geometry}})}writeFeature(t,e){if(!t)return;const{attributes:i,geometry:o}=t;i&&(e.attributes={...i}),o!=null&&(e.geometry=o.toJSON(),e.geometryType=ne.toJSON(o.type))}};a([p({type:String,json:{write:!0}})],S.prototype,"displayFieldName",void 0),a([p({type:V})],S.prototype,"feature",void 0),a([oe("feature",["attributes","geometry"])],S.prototype,"readFeature",null),a([q("feature")],S.prototype,"writeFeature",null),a([p({type:Number,json:{write:!0}})],S.prototype,"layerId",void 0),a([p({type:String,json:{write:!0}})],S.prototype,"layerName",void 0),S=a([N("esri.rest.support.IdentifyResult")],S);const _e=S;async function Ie(t,e,i){const o=(e=Ge(e)).geometry?[e.geometry]:[],r=ae(t);return r.path+="/identify",le(o).then(n=>{const s=je(e,{geometry:n==null?void 0:n[0]}),y=pe({...r.query,f:"json",...s}),c=ue(y,i);return ye(r.path,c).then(Re).then(l=>Ne(l,e.sublayers))})}function Re(t){const e=t.data;return e.results=e.results||[],e.exceededTransferLimit=!!e.exceededTransferLimit,e.results=e.results.map(i=>_e.fromJSON(i)),e}function Ge(t){return t=B.from(t)}function Ne(t,e){if(!(e!=null&&e.length))return t;const i=new Map;function o(r){i.set(r.id,r),r.sublayers&&r.sublayers.forEach(o)}e.forEach(o);for(const r of t.results)r.feature.sourceLayer=i.get(r.layerId);return t}let R=null;function qe(t,e){return e.type==="tile"||e.type==="map-image"}let E=class extends ce{constructor(t){super(t),this._featuresResolutions=new WeakMap,this.highlightGraphics=null,this.highlightGraphicUpdated=null,this.updateHighlightedFeatures=he(async e=>{this.destroyed||this.updatingHandles.addPromise(this._updateHighlightedFeaturesGeometries(e).catch(()=>{}))})}initialize(){const t=e=>{this.updatingHandles.addPromise(this._updateHighlightedFeaturesSymbols(e).catch(()=>{})),this.updateHighlightedFeatures(this._highlightGeometriesResolution)};this.addHandles([de(()=>this.highlightGraphics,"change",e=>t(e.added),{onListenerAdd:e=>t(e)})])}async fetchPopupFeaturesAtLocation(t,e){var s,y;const{layerView:{layer:i,view:{scale:o}}}=this;if(!t)throw new M("fetchPopupFeatures:invalid-area","Nothing to fetch without area",{layer:i});const r=Ve(i.sublayers,o,e);if(!r.length)return[];const n=await Ae(i,r);if(!((((y=(s=i.capabilities)==null?void 0:s.operations)==null?void 0:y.supportsIdentify)??!0)&&i.version>=10.5)&&!n)throw new M("fetchPopupFeatures:not-supported","query operation is disabled for this service",{layer:i});return n?this._fetchPopupFeaturesUsingQueries(t,r,e):this._fetchPopupFeaturesUsingIdentify(t,r,e)}clearHighlights(){var t;(t=this.highlightGraphics)==null||t.removeAll()}highlight(t){const e=this.highlightGraphics;if(!e)return I();let i=null;if(t instanceof V?i=[t]:fe.isCollection(t)&&t.length>0?i=t.toArray():Array.isArray(t)&&t.length>0&&(i=t),i=i==null?void 0:i.filter(L),!(i!=null&&i.length))return I();for(const o of i){const r=o.sourceLayer;r!=null&&"geometryType"in r&&r.geometryType==="point"&&(o.visible=!1)}return e.addMany(i),I(()=>e.removeMany(i??[]))}async _updateHighlightedFeaturesSymbols(t){const{layerView:{view:e},highlightGraphics:i,highlightGraphicUpdated:o}=this;if(i&&o)for(const r of t){const n=r.sourceLayer&&"renderer"in r.sourceLayer&&r.sourceLayer.renderer;r.sourceLayer&&"geometryType"in r.sourceLayer&&r.sourceLayer.geometryType==="point"&&n&&"getSymbolAsync"in n&&n.getSymbolAsync(r).then(async s=>{var l;s||(s=new U);let y=null;const c="visualVariables"in n?(l=n.visualVariables)==null?void 0:l.find(u=>u.type==="size"):void 0;c&&(R||(R=(await me(()=>import("./index-Dv-JqQDv.js").then(u=>u.v$),__vite__mapDeps([0,1]),import.meta.url)).getSize),y=R(c,r,{view:e.type,scale:e.scale,shape:s.type==="simple-marker"?s.style:null})),y||(y="width"in s&&"height"in s&&s.width!=null&&s.height!=null?Math.max(s.width,s.height):"size"in s?s.size:16),i.includes(r)&&(r.symbol=new U({style:"square",size:y,xoffset:"xoffset"in s?s.xoffset:0,yoffset:"yoffset"in s?s.yoffset:0}),o(r,"symbol"),r.visible=!0)})}}async _updateHighlightedFeaturesGeometries(t){const{layerView:{layer:e,view:i},highlightGraphics:o,highlightGraphicUpdated:r}=this;if(this._highlightGeometriesResolution=t,!r||!(o!=null&&o.length)||!e.capabilities.operations.supportsQuery)return;const n=this._getTargetResolution(t),s=new Map;for(const l of o)if(!this._featuresResolutions.has(l)||this._featuresResolutions.get(l)>n){const u=l.sourceLayer;ge(s,u,()=>new Map).set(l.getObjectId(),l)}const y=Array.from(s,([l,u])=>{const h=l.createQuery();return h.objectIds=[...u.keys()],h.outFields=[l.objectIdField],h.returnGeometry=!0,h.maxAllowableOffset=n,h.outSpatialReference=i.spatialReference,l.queryFeatures(h)}),c=await Promise.all(y);if(!this.destroyed)for(const{features:l}of c)for(const u of l){const h=u.sourceLayer,m=s.get(h).get(u.getObjectId());m&&o.includes(m)&&(m.geometry=u.geometry,r(m,"geometry"),this._featuresResolutions.set(m,n))}}_getTargetResolution(t){const e=t*we(this.layerView.view.spatialReference),i=e/16;return i<=10?0:t/e*i}async _fetchPopupFeaturesUsingIdentify(t,e,i){const o=await this._createIdentifyParameters(t,e,i);if(o==null)return[];const{results:r}=await Ie(this.layerView.layer.parsedUrl,o,i);return r.map(n=>n.feature)}async _createIdentifyParameters(t,e,i){const{floors:o,layer:r,timeExtent:n,view:{spatialReference:s,scale:y}}=this.layerView;if(!e.length)return null;await Promise.all(e.map(({sublayer:x})=>x.load(i).catch(()=>{})));const c=Math.min(be("mapservice-popup-identify-max-tolerance"),r.allSublayers.reduce((x,$)=>$.renderer?J({renderer:$.renderer,pointerType:i==null?void 0:i.pointerType}):x,2)),l=this.createFetchPopupFeaturesQueryGeometry(t,c),u=ve(y,s),h=Math.round(l.width/u),m=new z({xmin:l.center.x-u*h,ymin:l.center.y-u*h,xmax:l.center.x+u*h,ymax:l.center.y+u*h,spatialReference:l.spatialReference});return new B({floors:o,gdbVersion:"gdbVersion"in r?r.gdbVersion:void 0,geometry:t,height:h,layerOption:"popup",mapExtent:m,returnGeometry:!0,spatialReference:s,sublayers:r.sublayers,timeExtent:n,tolerance:c,width:h})}async _fetchPopupFeaturesUsingQueries(t,e,i){const{layerView:{floors:o,timeExtent:r}}=this,n=e.map(async({sublayer:s,popupTemplate:y})=>{var b;if(await s.load(i).catch(()=>{}),s.capabilities&&!s.capabilities.operations.supportsQuery)return[];const c=s.createQuery(),l=J({renderer:s.renderer,pointerType:i==null?void 0:i.pointerType}),u=this.createFetchPopupFeaturesQueryGeometry(t,l),h=new Set,[m]=await Promise.all([Fe(s,y),(b=s.renderer)==null?void 0:b.collectRequiredFields(h,s.fieldsIndex)]);H(i),xe(h,s.fieldsIndex,m);const x=Array.from(h).sort();c.geometry=u,c.outFields=x,c.timeExtent=r;const $=T(o,s);c.where=Q(c.where,$);const O=this._getTargetResolution(u.width/l),f=await Te(y);H(i);const F=s.geometryType==="point"||f&&f.arcadeUtils.hasGeometryOperations(y);F||(c.maxAllowableOffset=O);let{features:w}=await s.queryFeatures(c,i);const g=F?0:O;w=await Me(s,w,i);for(const P of w)this._featuresResolutions.set(P,g);return w});return(await Promise.allSettled(n)).reduce((s,y)=>y.status==="fulfilled"?[...s,...y.value]:s,[]).filter(L)}};function Ve(t,e,i){const o=[];if(!t)return o;const r=n=>{const s=n.minScale===0||e<=n.minScale,y=n.maxScale===0||e>=n.maxScale;if(n.visible&&s&&y){if(n.sublayers)n.sublayers.forEach(r);else if(n.popupEnabled){const c=Oe(n,{...i,defaultPopupTemplateEnabled:!1});c!=null&&o.unshift({sublayer:n,popupTemplate:c})}}};return t.map(r),o}function Te(t){var e;return(e=t.expressionInfos)!=null&&e.length||Array.isArray(t.content)&&t.content.some(i=>i.type==="expression")?$e():Promise.resolve()}async function Ae(t,e){var i,o;if((o=(i=t.capabilities)==null?void 0:i.operations)!=null&&o.supportsQuery)return!0;try{return await Promise.any(e.map(({sublayer:r})=>r.load().then(()=>r.capabilities.operations.supportsQuery)))}catch{return!1}}async function Me(t,e,i){const o=t.renderer;return o&&"defaultSymbol"in o&&!o.defaultSymbol&&(e=o.valueExpression?await Promise.all(e.map(r=>o.getSymbolAsync(r,i).then(n=>n?r:null))).then(r=>r.filter(n=>n!=null)):e.filter(r=>o.getSymbol(r)!=null)),e}a([p({constructOnly:!0})],E.prototype,"createFetchPopupFeaturesQueryGeometry",void 0),a([p({constructOnly:!0})],E.prototype,"layerView",void 0),a([p({constructOnly:!0})],E.prototype,"highlightGraphics",void 0),a([p({constructOnly:!0})],E.prototype,"highlightGraphicUpdated",void 0),a([p({constructOnly:!0})],E.prototype,"updatingHandles",void 0),E=a([N("esri.views.layers.support.MapServiceLayerViewHelper")],E);export{qe as U,E as _};
