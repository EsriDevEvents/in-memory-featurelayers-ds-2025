import{j as r,y as i,P as h,ac as R,f6 as $,e6 as I,ab as f,pL as q,dw as B,pM as V,dv as N,du as L,bg as _,bh as E,bi as O,eh as A,bj as k,ew as D,ex as K,d1 as m,E as M,F as U,ku as G,pN as S,s as l,V as z,U as Z,G as x,kw as H,eV as J,bm as Q,eB as W,ej as X,eu as Y,kx as ee,bp as te}from"./index-Dv-JqQDv.js";import{L as re,C}from"./SceneService-CdjnOvAJ.js";import{$ as F,Z as ie,w as oe}from"./elevationInfoUtils-Cey9W7Lb.js";import"./originUtils-D69mHv66.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./I3SIndexInfo-B_vW_l6t.js";import"./jsonContext-CHdffGJG.js";import"./resourceUtils-Cvlb92jl.js";import"./resourceUtils-DtCU-GVF.js";import"./saveAPIKeyUtils-D5i8JX04.js";import"./saveUtils-Bbs6ASTr.js";let y=class extends R{constructor(e){super(e),this.field=null,this.type=null}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}};r([i({type:String,json:{write:{enabled:!0,isRequired:!0}}})],y.prototype,"field",void 0),r([i({readOnly:!0,nonNullable:!0,json:{read:!1}})],y.prototype,"type",void 0),y=r([h("esri.layers.pointCloudFilters.PointCloudFilter")],y);const v=y;var g;let d=g=class extends v{constructor(e){super(e),this.requiredClearBits=null,this.requiredSetBits=null,this.type="bitfield"}clone(){return new g({field:this.field,requiredClearBits:f(this.requiredClearBits),requiredSetBits:f(this.requiredSetBits)})}};r([i({type:[$],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredSetBits}}}}})],d.prototype,"requiredClearBits",void 0),r([i({type:[$],json:{write:{enabled:!0,overridePolicy(){return{enabled:!0,isRequired:!this.requiredClearBits}}}}})],d.prototype,"requiredSetBits",void 0),r([I({pointCloudBitfieldFilter:"bitfield"})],d.prototype,"type",void 0),d=g=r([h("esri.layers.pointCloudFilters.PointCloudBitfieldFilter")],d);const se=d;var b;let c=b=class extends v{constructor(e){super(e),this.includedReturns=[],this.type="return"}clone(){return new b({field:this.field,includedReturns:f(this.includedReturns)})}};r([i({type:[["firstOfMany","last","lastOfMany","single"]],json:{write:{enabled:!0,isRequired:!0}}})],c.prototype,"includedReturns",void 0),r([I({pointCloudReturnFilter:"return"})],c.prototype,"type",void 0),c=b=r([h("esri.layers.pointCloudFilters.PointCloudReturnFilter")],c);const ne=c;var w;let p=w=class extends v{constructor(e){super(e),this.mode="exclude",this.type="value",this.values=[]}clone(){return new w({field:this.field,mode:this.mode,values:f(this.values)})}};r([i({type:["exclude","include"],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"mode",void 0),r([I({pointCloudValueFilter:"value"})],p.prototype,"type",void 0),r([i({type:[Number],json:{write:{enabled:!0,isRequired:!0}}})],p.prototype,"values",void 0),p=w=r([h("esri.layers.pointCloudFilters.PointCloudValueFilter")],p);const ae=p,le={key:"type",base:v,typeMap:{value:ae,bitfield:se,return:ne}},T={key:"type",base:q,typeMap:{"point-cloud-class-breaks":B,"point-cloud-rgb":V,"point-cloud-stretch":N,"point-cloud-unique-value":L},errorContext:"renderer"},P=ee();let o=class extends re(_(E(O(A(k(D(K(te)))))))){constructor(...e){super(...e),this.operationalLayerType="PointCloudLayer",this.popupEnabled=!0,this.popupTemplate=null,this.opacity=1,this.filters=[],this.fields=null,this.fieldsIndex=null,this.outFields=null,this.path=null,this.legendEnabled=!0,this.renderer=null,this.type="point-cloud"}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}get defaultPopupTemplate(){return this.attributeStorageInfo?this.createPopupTemplate():null}getFieldDomain(e){const t=this.fieldsIndex.get(e);return t!=null&&t.domain?t.domain:null}readServiceFields(e,t,n){return Array.isArray(e)?e.map(s=>{const a=new m;return s.type==="FieldTypeInteger"&&((s=f(s)).type="esriFieldTypeInteger"),a.read(s,n),a}):Array.isArray(t.attributeStorageInfo)?t.attributeStorageInfo.map(s=>new m({name:s.name,type:s.name==="ELEVATION"?"double":"integer"})):null}set elevationInfo(e){this._set("elevationInfo",e),this._validateElevationInfo()}writeRenderer(e,t,n,s){M("layerDefinition.drawingInfo.renderer",e.write({},s),t)}load(e){const t=e!=null?e.signal:null,n=this.loadFromPortal({supportedTypes:["Scene Service"]},e).catch(U).then(()=>this._fetchService(t));return this.addResolvingPromise(n),Promise.resolve(this)}createPopupTemplate(e){const t=G(this,e);return t&&(this._formatPopupTemplateReturnsField(t),this._formatPopupTemplateRGBField(t)),t}_formatPopupTemplateReturnsField(e){var a;const t=this.fieldsIndex.get("RETURNS");if(!t)return;const n=(a=e.fieldInfos)==null?void 0:a.find(u=>u.fieldName===t.name);if(!n)return;const s=new S({name:"pcl-returns-decoded",title:t.alias||t.name,expression:`
        var returnValue = $feature.${t.name};
        return (returnValue % 16) + " / " + Floor(returnValue / 16);
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-returns-decoded"}_formatPopupTemplateRGBField(e){var a;const t=this.fieldsIndex.get("RGB");if(!t)return;const n=(a=e.fieldInfos)==null?void 0:a.find(u=>u.fieldName===t.name);if(!n)return;const s=new S({name:"pcl-rgb-decoded",title:t.alias||t.name,expression:`
        var rgb = $feature.${t.name};
        var red = Floor(rgb / 65536, 0);
        var green = Floor((rgb - (red * 65536)) / 256,0);
        var blue = rgb - (red * 65536) - (green * 256);

        return "rgb(" + red + "," + green + "," + blue + ")";
      `});e.expressionInfos=[...e.expressionInfos||[],s],n.fieldName="expression/pcl-rgb-decoded"}async queryCachedStatistics(e,t){var s;if(await this.load(t),!this.attributeStorageInfo)throw new l("scenelayer:no-cached-statistics","Cached statistics are not available for this layer");const n=this.fieldsIndex.get(e);if(!n)throw new l("pointcloudlayer:field-unexisting",`Field '${e}' does not exist on the layer`);for(const a of this.attributeStorageInfo)if(a.name===n.name){const u=z(((s=this.parsedUrl)==null?void 0:s.path)??"",`./statistics/${a.key}`);return Z(u,{query:{f:"json",...this.customParameters,token:this.apiKey},responseType:"json",signal:t?t.signal:null}).then(j=>j.data)}throw new l("pointcloudlayer:no-cached-statistics","Cached statistics for this attribute are not available")}async saveAs(e,t){return this._debouncedSaveOperations(C.SAVE_AS,{...t,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"point-cloud"};return this._debouncedSaveOperations(C.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="PointCloud")throw new l("pointcloudlayer:layer-type-not-supported","PointCloudLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new l("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"});if(this.version.major>2)throw new l("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x-2.x"})}hasCachedStatistics(e){return this.attributeStorageInfo!=null&&this.attributeStorageInfo.some(t=>t.name===e)}_getTypeKeywords(){return["PointCloud"]}_validateElevationInfo(){const e=this.elevationInfo;F(x.getLogger(this),ie("Point cloud layers","absolute-height",e)),F(x.getLogger(this),oe("Point cloud layers",e))}};r([i({type:["PointCloudLayer"]})],o.prototype,"operationalLayerType",void 0),r([i(H)],o.prototype,"popupEnabled",void 0),r([i({type:J,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),r([i({readOnly:!0,json:{read:!1}})],o.prototype,"defaultPopupTemplate",null),r([i({readOnly:!0,json:{write:!1,read:!1,origins:{"web-document":{write:!1,read:!1}}}})],o.prototype,"opacity",void 0),r([i({type:["show","hide"]})],o.prototype,"listMode",void 0),r([i({types:[le],json:{origins:{service:{read:{source:"filters"}}},name:"layerDefinition.filters",write:!0}})],o.prototype,"filters",void 0),r([i({type:[m]})],o.prototype,"fields",void 0),r([i(P.fieldsIndex)],o.prototype,"fieldsIndex",void 0),r([Q("service","fields",["fields","attributeStorageInfo"])],o.prototype,"readServiceFields",null),r([i(P.outFields)],o.prototype,"outFields",void 0),r([i({readOnly:!0})],o.prototype,"attributeStorageInfo",void 0),r([i(W)],o.prototype,"elevationInfo",null),r([i({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],o.prototype,"path",void 0),r([i(X)],o.prototype,"legendEnabled",void 0),r([i({types:T,json:{origins:{service:{read:{source:"drawingInfo.renderer"}}},name:"layerDefinition.drawingInfo.renderer",write:{target:{"layerDefinition.drawingInfo.renderer":{types:T},"layerDefinition.drawingInfo.transparency":{type:Number}}}}})],o.prototype,"renderer",void 0),r([Y("renderer")],o.prototype,"writeRenderer",null),r([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),o=r([h("esri.layers.PointCloudLayer")],o);const we=o;export{we as default};
