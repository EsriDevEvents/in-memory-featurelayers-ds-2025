const __vite__fileDeps=["./calcite-action-DegZGoaK.js","./index-Dv-JqQDv.js","./index-CejX7rzk.css","./calcite-button-BcCDFDK8.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{j as t,y as l,eY as f,P as g,ar as L,eX as E,g9 as $,_ as x}from"./index-Dv-JqQDv.js";import{e as k,B as V,r as G,n as i}from"./jsxFactory-C3RLkrq9.js";import{c as I}from"./Analysis-B5cU-qRz.js";import{h as A}from"./SlicePlane-DrU1DVvs.js";import{_ as B}from"./AnalysisViewModel-CLILtgLE.js";import{e as b}from"./globalCss-CZa70j6i.js";import{e as P}from"./Heading-BRcyF2ms.js";import"./Cyclical-L5YKfO29.js";import"./persistable-C_lytE8t.js";import"./multiOriginJSONSupportUtils-C0wm8_Yw.js";import"./resourceExtension-j5iCFPPS.js";let c=class extends I{constructor(s){super(s),this.type="slice",this.tiltEnabled=!1,this.shape=null,this.excludeGroundSurface=!1}get excludedLayers(){return this._get("excludedLayers")||new L}set excludedLayers(s){this._set("excludedLayers",E(s,this._get("excludedLayers")))}get requiredPropertiesForEditing(){var s;return[(s=this.shape)==null?void 0:s.position]}clear(){this.shape=null}};t([l({type:["slice"]})],c.prototype,"type",void 0),t([l()],c.prototype,"tiltEnabled",void 0),t([l({types:{key:"type",base:null,typeMap:{plane:A},defaultKeyValue:"plane"}})],c.prototype,"shape",void 0),t([l({cast:f,clonable:e=>e.slice()})],c.prototype,"excludedLayers",null),t([l({type:Boolean,nonNullable:!0})],c.prototype,"excludeGroundSurface",void 0),t([l({readOnly:!0})],c.prototype,"requiredPropertiesForEditing",null),c=t([g("esri.analysis.SliceAnalysis")],c);const M=c,w=new Set;let d=class extends B{constructor(e){super(e),this.analysis=null,this.supportedViewType="3d",this.unsupportedErrorMessage="SliceViewModel is only supported in 3D views.",w.add(this)}destroy(){w.delete(this)}get state(){return this.disabled||!this.ready?"disabled":this.tool==null?"ready":this.tool.state}get shape(){return this.analysis.shape}set shape(e){this.analysis.shape=e}get tiltEnabled(){return this.analysis.tiltEnabled}set tiltEnabled(e){this.analysis.tiltEnabled=e}get layersMode(){var e;return((e=this.tool)==null?void 0:e.layersMode)??"none"}get excludedLayers(){return this.analysis.excludedLayers}set excludedLayers(e){this.analysis.excludedLayers=L.isCollection(e)?e:new L(e)}get excludeGroundSurface(){return this.analysis.excludeGroundSurface}set excludeGroundSurface(e){this.analysis.excludeGroundSurface=e}async start(){await super.start(),w.forEach(e=>{e.view===this.view&&e!==this&&e.clear()}),this.analysisView!=null&&(this.analysisView.active=!0)}enterExcludeLayerMode(){this.tool!=null&&this.tool.enterExcludeLayerMode()}exitExcludeLayerMode(){this.tool!=null&&this.tool.exitExcludeLayerMode()}onConnectToAnalysisView(e){e.active=!0}constructAnalysis(){return new M}};t([l({type:M})],d.prototype,"analysis",void 0),t([l({readOnly:!0})],d.prototype,"state",null),t([l()],d.prototype,"shape",null),t([l()],d.prototype,"tiltEnabled",null),t([l()],d.prototype,"layersMode",null),t([l()],d.prototype,"excludedLayers",null),t([l({nonNullable:!0})],d.prototype,"excludeGroundSurface",null),d=t([g("esri.widgets.Slice.SliceViewModel")],d);const S=d,n="esri-slice",a={base:n,actions:`${n}__actions`,cancelButton:`${n}__cancel-button`,container:`${n}__container`,error:`${n}__error`,excludeButton:`${n}__exclude-button`,hint:`${n}__hint`,hintText:`${n}__hint-text`,layerItem:`${n}__layer-item`,layerList:`${n}__layer-list`,layerListHeading:`${n}__layer-list-title`,newSliceButton:`${n}__clear-button`};let r=class extends V{constructor(e,s){super(e,s),this.headingLevel=3,this.messages=null,this.viewModel=new S,this._onNewSliceClick=()=>{$(this.viewModel.start())}}loadDependencies(){return G({action:()=>x(()=>import("./calcite-action-DegZGoaK.js"),__vite__mapDeps([0,1,2]),import.meta.url),button:()=>x(()=>import("./calcite-button-BcCDFDK8.js"),__vite__mapDeps([3,1,2]),import.meta.url),"list-item":()=>x(()=>import("./index-Dv-JqQDv.js").then(e=>e.vP),__vite__mapDeps([1,2]),import.meta.url),list:()=>x(()=>import("./index-Dv-JqQDv.js").then(e=>e.vO),__vite__mapDeps([1,2]),import.meta.url)})}get active(){return this.viewModel.active}get analysis(){return this.viewModel.analysis}set analysis(e){this.viewModel.analysis=e}get excludedLayers(){return this.viewModel.excludedLayers}set excludedLayers(e){this.viewModel.excludedLayers=e}get excludeGroundSurface(){return this.viewModel.excludeGroundSurface}set excludeGroundSurface(e){this.viewModel.excludeGroundSurface=e}get icon(){return"slice"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}get visible(){return this.viewModel.visible}set visible(e){this.viewModel.visible=e}get hasVoxelLayers(){var s;const e=(s=this.viewModel)==null?void 0:s.view;return e!=null&&e.allLayerViews.some(u=>u.type==="voxel-3d")}render(){return i("div",{class:this.classes(a.base,b.widget,b.panel),role:"presentation"},this.visible?i("div",{class:a.container},this.viewModel.supported?[this._renderHint(),this._renderLayerList(),this._renderActions()]:this._renderUnsupported()):null)}_renderUnsupported(){return i("div",{class:a.error,key:"unsupported"},i("p",null,this.messages.unsupported))}_renderHint(){const{hasVoxelLayers:e,messages:s,viewModel:u}=this,{active:p,layersMode:y,state:v}=u;let o=null;return p&&(y==="exclude"?o=s.excludeHint:v==="ready"&&(o=e?s.voxelHint:s.hint)),o?i("div",{class:a.hint,key:"hint"},i("p",{class:a.hintText},o),i("p",{class:a.hintText},s.verticalHint)):null}_renderLayerList(){const{excludedLayers:e,excludeGroundSurface:s,headingLevel:u,messages:p,viewModel:y}=this,{layersMode:v,state:o}=y,h=o==="slicing"||o==="sliced",_=e?e.toArray().map(m=>this._renderLayerItem({uid:m.uid,title:m.title,onClick:()=>(this.excludedLayers.remove(m),!1)})):[];return s&&_.push(this._renderLayerItem({uid:"ground",title:p.ground,onClick:()=>(this.excludeGroundSurface=!1,!1)})),v!=="exclude"&&h&&_.length!==0?i("div",{class:a.layerList,key:"settings"},i(P,{class:a.layerListHeading,level:u},p.excludedLayers),i("calcite-list",{selectionMode:"none"},_)):null}_renderActions(){const{messages:e,viewModel:s}=this,{active:u,state:p}=s,y=p==="disabled",v=p==="slicing"||p==="sliced",o=s.layersMode==="exclude",h=[];return u&&!v||o||h.push(i("calcite-button",{class:a.newSliceButton,disabled:y,key:"new-slice",onclick:this._onNewSliceClick},e.newSlice)),v&&!o&&h.push(i("calcite-button",{appearance:"outline-fill",class:a.excludeButton,disabled:y,key:"exclude",onclick:()=>s.enterExcludeLayerMode()},e.excludeLayer)),u&&o&&h.push(i("calcite-button",{appearance:"outline-fill",class:a.cancelButton,disabled:y,key:"cancel-exclude",onclick:()=>s.exitExcludeLayerMode()},e.cancel)),h.length===0?null:i("div",{class:a.actions},h)}_renderLayerItem(e){const s=this.messages.includeLayer;return i("calcite-list-item",{class:a.layerItem,key:e.uid,label:e.title??""},i("calcite-action",{icon:"x",onclick:e.onClick,scale:"s",slot:"actions-end",text:s,title:s}))}};t([l()],r.prototype,"active",null),t([l({constructOnly:!0,nonNullable:!0})],r.prototype,"analysis",null),t([l()],r.prototype,"excludedLayers",null),t([l()],r.prototype,"excludeGroundSurface",null),t([l()],r.prototype,"headingLevel",void 0),t([l()],r.prototype,"icon",null),t([l()],r.prototype,"label",null),t([l(),k("esri/widgets/Slice/t9n/Slice")],r.prototype,"messages",void 0),t([l()],r.prototype,"view",null),t([l({type:S})],r.prototype,"viewModel",void 0),t([l()],r.prototype,"visible",null),t([l()],r.prototype,"hasVoxelLayers",null),r=t([g("esri.widgets.Slice")],r);const X=r;export{X as default};
