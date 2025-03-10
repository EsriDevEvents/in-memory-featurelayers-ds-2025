const __vite__fileDeps=["./calcite-action-DegZGoaK.js","./index-Dv-JqQDv.js","./index-CejX7rzk.css","./calcite-action-group-BZLQ2Fei.js","./calcite-action-menu-DIwnfY1q.js","./calcite-button-BcCDFDK8.js","./calcite-icon-D3-fBgCQ.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{ar as N,bN as V,o as A,gH as O,cu as G,j as s,y as l,P as C,b_ as U,ee as $,_ as y}from"./index-Dv-JqQDv.js";import{s as H}from"./ReactiveMap-DxvIcNmk.js";import{a as q}from"./catalogUtils-CiWgGrdS.js";import{t as R,n as j}from"./actionUtils-CMixJGUH.js";import{B as z,r as J,n,e as M}from"./jsxFactory-C3RLkrq9.js";import{I as T}from"./ListItem-Be9Gyno4.js";import{u as K,n as Q,x as E,m as W,l as X,r as Y,t as Z}from"./layerListUtils-DHlrlNFv.js";import{e as w}from"./globalCss-CZa70j6i.js";import{e as ee}from"./vmEvent-D4Ubqkbq.js";import"./substitute-BVUBXY1A.js";import"./widget-Ds3EBn3Y.js";const x={layerListMode:"layer-list-mode"},te="hide",S=N.ofType(T);let g=class extends V.EventedAccessor{constructor(e){super(e),this.catalogItems=new S,this.checkPublishStatusEnabled=!1,this.catalogLayer=null,this.listItemCreatedFunction=null,this.listModeDisabled=!1,this.view=null}initialize(){this.addHandles([A(()=>{var e,t;return[(e=this.catalogLayer)==null?void 0:e.loaded,(t=this.view)==null?void 0:t.ready]},()=>this._compileList(),O),G(()=>{var e;return(e=this.catalogLayer)==null?void 0:e.dynamicGroupLayer.layers},"change",()=>this._compileList()),A(()=>[this.listItemCreatedFunction,this.checkPublishStatusEnabled,this.listModeDisabled],()=>this._recompileList())])}destroy(){this.view=null,this.catalogItems.removeAll()}get state(){const{view:e,catalogLayer:t}=this;return e!=null&&e.ready&&(t!=null&&t.loaded)?"ready":e&&t?"loading":"disabled"}get totalItems(){return this.catalogItems.flatten(e=>e.children).length}triggerAction(e,t){e&&!e.disabled&&this.emit("trigger-action",{action:e,item:t})}_createListItem(e){const{view:t,listItemCreatedFunction:i,checkPublishStatusEnabled:o,listModeDisabled:a}=this;return new T({checkPublishStatusEnabled:o,listModeDisabled:a,layer:e,listItemCreatedFunction:i,view:t})}_removeAllItems(){this.catalogItems.removeAll()}_getViewableLayers(e){return e?this.listModeDisabled?e:e.filter(t=>K(t)!==te):void 0}_watchLayersListMode(e){this.removeHandles(x.layerListMode),e&&!this.listModeDisabled&&this.addHandles(A(()=>e.filter(t=>"listMode"in t).map(t=>t.listMode).toArray(),()=>this._compileList()),x.layerListMode)}_compileList(){const{catalogLayer:e}=this;if(!(e!=null&&e.loaded))return;const t=e==null?void 0:e.dynamicGroupLayer.layers;this._watchLayersListMode(t);const i=this._getViewableLayers(t);i!=null&&i.length?(this._createNewItems(i),this._removeItems(i),this._sortItems(i)):this._removeAllItems()}_createNewItems(e){const{catalogItems:t}=this;e.forEach(i=>{t.some(o=>o.layer===i)||t.add(this._createListItem(i))})}_removeItems(e){const{catalogItems:t}=this,i=[];t.forEach(o=>{o&&(e!=null&&e.includes(o.layer))||i.push(o)}),t.removeMany(i)}_sortItems(e){const{catalogItems:t}=this;t.sort((i,o)=>{const a=e.indexOf(i.layer),c=e.indexOf(o.layer);return a>c?-1:a<c?1:0})}_recompileList(){this._removeAllItems(),this._compileList()}};s([l({type:S})],g.prototype,"catalogItems",void 0),s([l()],g.prototype,"checkPublishStatusEnabled",void 0),s([l()],g.prototype,"catalogLayer",void 0),s([l()],g.prototype,"listItemCreatedFunction",void 0),s([l({nonNullable:!0})],g.prototype,"listModeDisabled",void 0),s([l({readOnly:!0})],g.prototype,"state",null),s([l()],g.prototype,"totalItems",null),s([l()],g.prototype,"view",void 0),g=s([C("esri.widgets.CatalogLayerList.CatalogLayerListViewModel")],g);const D=g;let v=class extends U{constructor(){super(...arguments),this.closeButton=!1,this.collapseButton=!1,this.errors=!1,this.filter=!1,this.flow=!0,this.heading=!1,this.statusIndicators=!0,this.temporaryLayerIndicators=!1}};s([l({type:Boolean,nonNullable:!0})],v.prototype,"closeButton",void 0),s([l({type:Boolean,nonNullable:!0})],v.prototype,"collapseButton",void 0),s([l({type:Boolean,nonNullable:!0})],v.prototype,"errors",void 0),s([l({type:Boolean,nonNullable:!0})],v.prototype,"filter",void 0),s([l({type:Boolean,nonNullable:!0})],v.prototype,"flow",void 0),s([l({type:Boolean,nonNullable:!0})],v.prototype,"heading",void 0),s([l({type:Boolean,nonNullable:!0})],v.prototype,"statusIndicators",void 0),s([l({type:Boolean,nonNullable:!0})],v.prototype,"temporaryLayerIndicators",void 0),v=s([C("esri.widgets.CatalogLayerList.CatalogLayerListVisibleElements")],v);const B=v,u="esri-catalog-layer-list",I=`${u}__item`,d={base:u,actionMenu:`${u}__action-menu`,actionGroup:`${u}__action-group`,filterNoResults:`${u}__filter-no-results`,item:I,itemActive:`${I}--active`,itemContent:`${I}-content`,itemContentBottom:`${I}-content-bottom`,itemMessage:`${I}-message`,itemInvisible:`${I}--invisible`,itemActionIcon:`${I}-action-icon`,itemActionImage:`${I}-action-image`,itemTemporaryIcon:`${I}-temporary-icon`,itemTableIcon:`${I}-table-icon`,statusIndicator:`${u}__status-indicator`,publishing:`${u}__publishing`,updating:`${u}__updating`,connectionStatus:`${u}__connection-status`,connectionStatusConnected:`${u}__connection-status--connected`,visibleToggle:`${u}__visible-toggle`,visibleIcon:`${u}__visible-icon`},ie=N.ofType(T);let r=class extends $(z){constructor(e,t){super(e,t),this._activeItem=null,this._tooltipReferenceMap=new H,this._focusRootFlowItem=!1,this._focusPanelFlowItem=!1,this._rootGroupUid=`operational-${this.uid}`,this.collapsed=!1,this.filterPlaceholder="",this.filterText="",this.headingLevel=2,this.messages=null,this.messagesLayerList=null,this.messagesCommon=null,this.minFilterItems=Q,this.selectedItems=new ie,this.selectionMode="none",this.viewModel=new D,this.visibilityAppearance="default",this.visibleElements=new B,this._clearActiveItem=()=>{this._activeItem=null},this._setActiveItem=i=>{if(this.visibilityAppearance!=="default")return;const o=Array.from(i.composedPath()).find(a=>{var c;return(c=a.classList)==null?void 0:c.contains(d.item)});this._activeItem=E(o)}}loadDependencies(){return J({action:()=>y(()=>import("./calcite-action-DegZGoaK.js"),__vite__mapDeps([0,1,2]),import.meta.url),"action-group":()=>y(()=>import("./calcite-action-group-BZLQ2Fei.js"),__vite__mapDeps([3,1,2]),import.meta.url),"action-menu":()=>y(()=>import("./calcite-action-menu-DIwnfY1q.js"),__vite__mapDeps([4,1,2]),import.meta.url),button:()=>y(()=>import("./calcite-button-BcCDFDK8.js"),__vite__mapDeps([5,1,2]),import.meta.url),flow:()=>y(()=>import("./index-Dv-JqQDv.js").then(e=>e.vL),__vite__mapDeps([1,2]),import.meta.url),"flow-item":()=>y(()=>import("./index-Dv-JqQDv.js").then(e=>e.vM),__vite__mapDeps([1,2]),import.meta.url),icon:()=>y(()=>import("./calcite-icon-D3-fBgCQ.js"),__vite__mapDeps([6,1,2]),import.meta.url),list:()=>y(()=>import("./index-Dv-JqQDv.js").then(e=>e.vO),__vite__mapDeps([1,2]),import.meta.url),"list-item":()=>y(()=>import("./index-Dv-JqQDv.js").then(e=>e.vP),__vite__mapDeps([1,2]),import.meta.url),notice:()=>y(()=>import("./index-Dv-JqQDv.js").then(e=>e.vD),__vite__mapDeps([1,2]),import.meta.url),tooltip:()=>y(()=>import("./index-Dv-JqQDv.js").then(e=>e.vE),__vite__mapDeps([1,2]),import.meta.url)})}destroy(){this._tooltipReferenceMap.clear()}get _filterEnabled(){return this.viewModel.totalItems>=this.minFilterItems&&this.visibleElements.filter}get catalogItems(){return this.viewModel.catalogItems}set catalogItems(e){this.viewModel.catalogItems=e}get catalogLayer(){return this.viewModel.catalogLayer}set catalogLayer(e){this.viewModel.catalogLayer=e}get icon(){return"catalog-dataset"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get listItemCreatedFunction(){return this.viewModel.listItemCreatedFunction}set listItemCreatedFunction(e){this.viewModel.listItemCreatedFunction=e}get view(){return this.viewModel.view}set view(e){this.viewModel.view=e}triggerAction(e,t){return this.viewModel.triggerAction(e,t)}render(){var o,a;const e=(o=this.viewModel)==null?void 0:o.state,t={[w.hidden]:e==="loading",[w.disabled]:e==="disabled"},i=(a=this.catalogItems)==null?void 0:a.filter(c=>!c.hidden&&(this.visibleElements.errors||!c.error));return n("div",{class:this.classes(d.base,w.widget,w.panel,t)},i!=null&&i.length?[this._renderItemTooltips(i),this._renderItems(i)]:this._renderNoItems())}_renderItemTooltip(e){const{_tooltipReferenceMap:t,messagesLayerList:i}=this;return e?n("calcite-tooltip",{key:`tooltip-${e.layer.uid}`,referenceElement:t.get(e.layer.uid)},i.layerIncompatibleTooltip):null}_renderItemTooltipNodes(e){var t;return e.incompatible?this._renderItemTooltip(e):(t=e.children)==null?void 0:t.filter(i=>!i.hidden).toArray().map(i=>this._renderItemTooltipNodes(i))}_renderItemTooltips(e){return e==null?void 0:e.toArray().map(t=>this._renderItemTooltipNodes(t))}_renderNoItemsMessage(){return n("div",{slot:"message"},this.messagesLayerList.noItemsToDisplay)}_renderNoItems(){return n("div",{class:d.itemMessage,key:"esri-layer-list__no-items"},n("calcite-notice",{icon:"information",kind:"info",open:!0,width:"full"},this._renderNoItemsMessage()))}_renderPanelFlowItems(e){return e?e.flatten(t=>t.children).filter(({hidden:t,panel:i})=>!t&&(i==null?void 0:i.open)&&!i.disabled&&i.flowEnabled).toArray().map(({title:t,panel:i})=>{const o=()=>this._handlePanelFlowItemBack(i);return n("calcite-flow-item",{afterCreate:this._focusPanelFlowItemNode,afterUpdate:this._focusPanelFlowItemNode,bind:this,description:t,heading:i.title,headingLevel:this.headingLevel,key:`flow-panel-${i.uid}`,onCalciteFlowItemBack:a=>{a.preventDefault(),o()}},i.render(),n("calcite-button",{appearance:"transparent",onclick:o,slot:"footer-actions",width:"full"},this.messagesCommon.back))}):[]}_handlePanelFlowItemBack(e){e.open=!1,this._focusRootFlowItem=!0}_focusRootFlowItemNode(e){this._focusRootFlowItem&&(this._focusRootFlowItem=!1,requestAnimationFrame(()=>e==null?void 0:e.setFocus()))}_focusPanelFlowItemNode(e){this._focusPanelFlowItem&&(this._focusPanelFlowItem=!1,requestAnimationFrame(()=>e==null?void 0:e.setFocus()))}_renderItems(e){const{visible:t,collapsed:i,_filterEnabled:o,_rootGroupUid:a,visibleElements:{closeButton:c,collapseButton:p,heading:m,flow:h},selectionMode:b,filterText:L,filterPlaceholder:f,messages:P}=this,F=[n("calcite-flow-item",{afterCreate:this._focusRootFlowItemNode,afterUpdate:this._focusRootFlowItemNode,bind:this,closable:c,closed:!t,collapsed:i,collapsible:p,heading:m?P.widgetLabel:void 0,headingLevel:this.headingLevel,key:"root-flow-item",onCalciteFlowItemClose:()=>this.visible=!1},n("calcite-list",{afterCreate:_=>{_.addEventListener("focusin",this._setActiveItem),_.addEventListener("focusout",this._clearActiveItem)},afterRemoved:_=>{_.removeEventListener("focusin",this._setActiveItem),_.removeEventListener("focusout",this._clearActiveItem)},"data-layer-type":a,filterEnabled:o,filterPlaceholder:f,filterText:o?L:"",group:a,key:"root-list",label:P.widgetLabel,onmouseleave:this._clearActiveItem,onmouseover:this._setActiveItem,selectionAppearance:"border",selectionMode:b,onCalciteListChange:_=>this._handleCalciteListChange(_),onCalciteListFilter:_=>{var k;return this.filterText=((k=_.target)==null?void 0:k.filterText)??""}},e==null?void 0:e.toArray().map(_=>this._renderItem(_)),e!=null&&e.length&&o?n("div",{class:d.filterNoResults,slot:"filter-no-results"},n("calcite-notice",{kind:"info",open:!0,width:"full"},this._renderNoItemsMessage())):null)),this._renderPanelFlowItems(e)];return t?h?n("calcite-flow",{key:"root-flow"},F):F:null}_renderChildList(e,t=[]){var h;const{_rootGroupUid:i,viewModel:{listModeDisabled:o},selectionMode:a}=this,{children:c}=e,p=W(e),m=!(!o&&X(e.layer))&&!p&&((h=e.layer)==null?void 0:h.type)==="group";return p||m?n("calcite-list",{"data-item":e,"data-layer-type":i,group:`${i}-${e.layer.uid}`,key:`child-list-${e.layer.uid}`,selectionAppearance:"border",selectionMode:a},c==null?void 0:c.filter(b=>!b.hidden).toArray().map(b=>this._renderItem(b,e,[...t,e.title]))):null}_renderItemMessage(e){return e.error?n("div",{class:d.itemMessage,key:"esri-layer-list__error",slot:"content-bottom"},n("calcite-notice",{icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",width:"full"},n("div",{slot:"message"},this.messagesLayerList.layerError))):e.incompatible?n("div",{class:d.itemMessage,key:"esri-layer-list__incompatible",slot:"content-bottom"},n("calcite-notice",{afterCreate:t=>this._setTooltipReference(t,e),afterRemoved:()=>this._removeTooltipReference(e),bind:this,icon:"exclamation-mark-triangle",kind:"warning",open:!0,scale:"s",tabIndex:0,width:"full"},n("div",{slot:"message"},this.messagesLayerList.layerIncompatible))):null}_getLayerTitle(e){return e.title||this.messagesLayerList.untitledLayer}_renderItem(e,t,i){const{_activeItem:o,selectionMode:a,selectedItems:c,messagesLayerList:p}=this,m=this._getLayerTitle(e),h=e.visibleAtCurrentTimeExtent?e.visibleAtCurrentScale?m:`${m} (${p.layerInvisibleAtScale})`:`${m} (${p.layerInvisibleAtTime})`,b=this._filterActions(e.actionsSections),L=this._countActions(b);return n("calcite-list-item",{class:this.classes(d.item,{[d.itemActive]:o===e}),"data-item":e,"data-layer-id":e.layer.id,id:e.layer.uid,key:`list-item-${e.layer.uid}`,label:m,metadata:{parentTitles:i,title:m},open:e.open,selected:a!=="none"&&c.includes(e),title:h,value:e.layer.uid,onCalciteListItemSelect:f=>this._handleCalciteListItemSelect(f,e,t),onCalciteListItemToggle:f=>this._handleCalciteListItemToggle(f,e)},n("div",{class:this.classes({[d.itemContent]:!0,[d.itemInvisible]:!e.visibleAtCurrentScale||!e.visibleAtCurrentTimeExtent}),slot:"content"},m),this._renderItemStatus(e,t),this._renderItemToggle(e,t),this._renderItemTemporaryIcon(e),this._renderChildList(e,i),this._renderItemMessage(e),this._renderPanel(e.panel),this._renderPanelAction(e.panel),L>1?this._renderActionsSections(e,b):L===1?this._renderAction({item:e,action:this._getSingleAction(b),textEnabled:!1}):null)}_renderItemStatus(e,t){const{visibleElements:i}=this;if(!i.statusIndicators)return null;const{connectionStatus:o,publishing:a,updating:c}=e,p=c&&!t,m=!!o;return n("calcite-icon",{class:this.classes({[d.statusIndicator]:!0,[d.publishing]:a,[d.updating]:p,[d.connectionStatus]:m,[d.connectionStatusConnected]:m&&o==="connected"}),icon:Y({connectionStatus:o,publishing:a}),key:"layer-item-status",scale:"s",slot:"actions-end"})}_renderItemTemporaryIcon(e){return this.visibleElements.temporaryLayerIndicators&&"persistenceEnabled"in e.layer&&(q(e.layer)||!e.layer.persistenceEnabled)?n("calcite-icon",{class:d.itemTemporaryIcon,icon:"temporary",key:"temporary-icon",scale:"s",slot:"actions-start",title:this.messagesLayerList.temporary}):null}_renderItemToggle(e,t){const{messagesLayerList:i,visibilityAppearance:o}=this,{visible:a}=e,c=t==null?void 0:t.visibilityMode;if(c==="inherited")return null;const p=Z({visible:a,exclusive:c==="exclusive",visibilityAppearance:o}),m=o==="checkbox",h=i.layerVisibility;return n("calcite-action",{appearance:"transparent",class:d.visibleToggle,icon:m?p:void 0,key:"visibility-toggle",onclick:()=>this._toggleVisibility(e,t),scale:"s",slot:m?"actions-start":"actions-end",text:h,title:h},m?null:n("calcite-icon",{class:this.classes({[d.visibleIcon]:c!=="exclusive"&&a}),icon:p,scale:"s"}))}_renderPanel(e){return!(e!=null&&e.open)||e.disabled||e.flowEnabled?null:n("div",{class:d.itemContentBottom,key:`content-panel-${e.uid}`,slot:"content-bottom"},e.render())}_renderPanelAction(e){if(!(e!=null&&e.visible))return null;const{open:t,title:i,disabled:o}=e;return n("calcite-action",{active:t,appearance:"transparent",disabled:o,icon:R(e),key:`action-${e.uid}`,onclick:()=>this._togglePanel(e),scale:"s",slot:"actions-end",text:i??"",title:i??void 0},this._renderFallbackIcon(e))}_renderActionsSections(e,t){const i=this.messagesCommon.options;return n("calcite-action-menu",{appearance:"transparent",class:d.actionMenu,key:"item-action-menu",label:this.messagesCommon.menu,open:e.actionsOpen,overlayPositioning:"fixed",placement:"bottom-end",scale:"s",slot:"actions-end",onCalciteActionMenuOpen:o=>e.actionsOpen=o.target.open},n("calcite-action",{appearance:"transparent",icon:"ellipsis",scale:"s",slot:"trigger",text:i,title:i}),t.toArray().map((o,a)=>this._renderActionSection(e,o,a)))}_renderActionSection(e,t,i){return n("calcite-action-group",{class:d.actionGroup,key:`action-section-${i}`},t.toArray().map(o=>this._renderAction({item:e,action:o,textEnabled:!0})))}_renderFallbackIcon(e){const{className:t,icon:i}=e;if(i)return null;const o="image"in e?e.image:void 0,a={[d.itemActionIcon]:!!t,[d.itemActionImage]:!!o};return t&&(a[t]=!0),o||t?n("span",{"aria-hidden":"true",class:this.classes(d.itemActionIcon,a),key:"icon",styles:j(o)}):null}_renderAction(e){const{item:t,action:i,textEnabled:o}=e;if(!i)return null;const{active:a,disabled:c,title:p,type:m,indicator:h}=i;return n("calcite-action",{active:m==="toggle"&&i.value,appearance:"transparent",disabled:c,icon:R(i),indicator:h,key:`action-${i.uid}`,loading:a,onclick:()=>this._triggerAction(t,i),scale:"s",slot:o?void 0:"actions-end",text:p??"",textEnabled:o,title:p??void 0},this._renderFallbackIcon(i))}_setTooltipReference(e,t){this._tooltipReferenceMap.set(t.layer.uid,e)}_removeTooltipReference(e){this._tooltipReferenceMap.delete(e.layer.uid)}_getSingleAction(e){return e.reduce(t=>t).find(t=>t&&(t.type==="button"||t.type==="toggle"))}_filterActions(e){return e.map(t=>t.filter(i=>i.visible))}_countActions(e){return e.reduce((t,i)=>t+i.length,0)}_triggerAction(e,t){t&&e&&(t.type==="toggle"&&(t.value=!t.value),this.triggerAction(t,e))}_handleCalciteListChange(e){const{selectionMode:t,selectedItems:i}=this;if(t==="none")return;const o=e.target.selectedItems.map(a=>E(a)).filter(Boolean);i.removeAll(),i.addMany(o)}_handleCalciteListItemToggle(e,t){e.stopPropagation(),t.open=e.target.open}_handleCalciteListItemSelect(e,t,i){E(e.target)===t&&this.selectionMode==="none"&&(i==null?void 0:i.visibilityMode)!=="inherited"&&this._toggleVisibility(t,i)}_togglePanel(e){e.open=!e.open,e.open&&(this._focusPanelFlowItem=!0)}_toggleVisibility(e,t){if(!e)return;(t==null?void 0:t.visibilityMode)==="exclusive"&&e.visible||(e.visible=!e.visible)}};s([l()],r.prototype,"_activeItem",void 0),s([l()],r.prototype,"_tooltipReferenceMap",void 0),s([l()],r.prototype,"_focusRootFlowItem",void 0),s([l()],r.prototype,"_focusPanelFlowItem",void 0),s([l()],r.prototype,"_filterEnabled",null),s([l()],r.prototype,"catalogItems",null),s([l()],r.prototype,"catalogLayer",null),s([l()],r.prototype,"collapsed",void 0),s([l()],r.prototype,"filterPlaceholder",void 0),s([l()],r.prototype,"filterText",void 0),s([l()],r.prototype,"headingLevel",void 0),s([l()],r.prototype,"icon",null),s([l()],r.prototype,"label",null),s([l()],r.prototype,"listItemCreatedFunction",null),s([l(),M("esri/widgets/CatalogLayerList/t9n/CatalogLayerList")],r.prototype,"messages",void 0),s([l(),M("esri/widgets/LayerList/t9n/LayerList")],r.prototype,"messagesLayerList",void 0),s([l(),M("esri/t9n/common")],r.prototype,"messagesCommon",void 0),s([l()],r.prototype,"minFilterItems",void 0),s([l()],r.prototype,"selectedItems",void 0),s([l()],r.prototype,"selectionMode",void 0),s([l()],r.prototype,"view",null),s([ee("trigger-action"),l({type:D})],r.prototype,"viewModel",void 0),s([l()],r.prototype,"visibilityAppearance",void 0),s([l({type:B,nonNullable:!0})],r.prototype,"visibleElements",void 0),r=s([C("esri.widgets.CatalogLayerList")],r);const he=r;export{he as default};
