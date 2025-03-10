const __vite__fileDeps=["./ElevationQuery-DdsadaEp.js","./index-Dv-JqQDv.js","./index-CejX7rzk.css","./ElevationSamplerData-CTsi29Ag.js","./ElevationTile-z5FKMbqq.js","./TileKey-DZd6gJy7.js","./layersCreator-CDhxUx3i.js","./portalLayers-CbUf2RXE.js","./associatedFeatureServiceUtils-Di714DmY.js","./fetchService-BDpvEs-q.js","./requestPresets-BRtD1m2T.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as o,e6 as $,P as w,ac as C,ec as L,m as A,ar as b,br as E,G as v,hM as S,eX as x,lx as O,s as P,er as N,_ as p,X as c,ab as m,y as l,eu as T,f6 as g,ly as j,lz as F,db as R}from"./index-Dv-JqQDv.js";var d;let u=d=class extends C{constructor(e){super(e),this.type="none"}clone(){return new d({type:this.type})}};o([$({none:"none",stayAbove:"stay-above"})],u.prototype,"type",void 0),u=d=o([w("esri.ground.NavigationConstraint")],u);var h;let s=h=class extends L(A){constructor(e){super(e),this.opacity=1,this.surfaceColor=null,this.navigationConstraint=null,this.layers=new b;const t=r=>{r.parent&&r.parent!==this&&"remove"in r.parent&&r.parent.remove(r),r.parent=this,r.type!=="elevation"&&r.type!=="base-elevation"&&v.getLogger(this).error(`Layer '${r.title}, id:${r.id}' of type '${r.type}' is not supported as a ground layer and will therefore be ignored. Only layers of type 'elevation' are supported.`)},n=r=>{r.parent=null};this.addHandles([this.layers.on("after-add",r=>t(r.item)),this.layers.on("after-remove",r=>n(r.item))])}initialize(){this.when().catch(e=>{E(e)||v.getLogger(this).error("#load()","Failed to load ground",e)}),this.resourceInfo&&this.read(this.resourceInfo.data,this.resourceInfo.context)}destroy(){const e=this.layers.removeAll();for(const t of e)S(t);this.layers.destroy()}normalizeCtorArgs(e){return e&&"resourceInfo"in e&&(this._set("resourceInfo",e.resourceInfo),delete(e={...e}).resourceInfo),e}set layers(e){this._set("layers",x(e,this._get("layers")))}writeLayers(e,t,n,r){const a=[];e&&(r={...r,layerContainerType:"ground"},e.forEach(i=>{if("write"in i){const y={};O(i)().write(y,r)&&a.push(y)}else r!=null&&r.messages&&r.messages.push(new P("layer:unsupported",`Layers (${i.title}, ${i.id}) of type '${i.declaredClass}' cannot be persisted in the ground`,{layer:i}))})),t.layers=a}load(e){return this.addResolvingPromise(this._loadFromSource(e)),Promise.resolve(this)}loadAll(){return N(this,e=>{e(this.layers)})}async queryElevation(e,t){await this.load({signal:t==null?void 0:t.signal});const{ElevationQuery:n}=await p(()=>import("./ElevationQuery-DdsadaEp.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);c(t);const r=new n,a=this.layers.filter(_).toArray();return r.queryAll(a,e,t)}async createElevationSampler(e,t){await this.load({signal:t==null?void 0:t.signal});const{ElevationQuery:n}=await p(()=>import("./ElevationQuery-DdsadaEp.js"),__vite__mapDeps([0,1,2,3,4,5]),import.meta.url);c(t);const r=new n,a=this.layers.filter(_).toArray();return r.createSamplerAll(a,e,t)}clone(){const e={opacity:this.opacity,surfaceColor:m(this.surfaceColor),navigationConstraint:m(this.navigationConstraint),layers:this.layers.slice()};return this.loaded&&(e.loadStatus="loaded"),new h({resourceInfo:this.resourceInfo}).set(e)}read(e,t){this.resourceInfo||this._set("resourceInfo",{data:e,context:t}),super.read(e,t)}_loadFromSource(e){const t=this.resourceInfo;return t?this._loadLayersFromJSON(t.data,t.context,e):Promise.resolve()}async _loadLayersFromJSON(e,t,n){const r=(t==null?void 0:t.origin)||"web-scene",a=(t==null?void 0:t.portal)||null,i=(t==null?void 0:t.url)||null,{populateOperationalLayers:y}=await p(()=>import("./layersCreator-CDhxUx3i.js"),__vite__mapDeps([6,1,2,7,8,9,10]),import.meta.url);c(n);const f=[];if(e.layers&&Array.isArray(e.layers)){const I={context:{origin:r,url:i,portal:a,layerContainerType:"ground"},defaultLayerType:"ArcGISTiledElevationServiceLayer"};f.push(y(this.layers,e.layers,I))}await Promise.allSettled(f)}};function V(e){return e&&"createElevationSampler"in e}function _(e){return e.type==="elevation"||V(e)}o([l({json:{read:!1}})],s.prototype,"layers",null),o([T("layers")],s.prototype,"writeLayers",null),o([l({readOnly:!0})],s.prototype,"resourceInfo",void 0),o([l({type:Number,nonNullable:!0,range:{min:0,max:1},json:{type:g,read:{reader:j,source:"transparency"},write:{writer:(e,t)=>{t.transparency=F(e)},target:"transparency"}}})],s.prototype,"opacity",void 0),o([l({type:R,json:{type:[g],write:(e,t)=>{t.surfaceColor=e.toJSON().slice(0,3)}}})],s.prototype,"surfaceColor",void 0),o([l({type:u,json:{write:!0}})],s.prototype,"navigationConstraint",void 0),s=h=o([w("esri.Ground")],s);const D=s;export{D as b};
