import{aW as i,aX as e,aY as s}from"./index-Dv-JqQDv.js";import{q as a}from"./index-80b25649-68xUsn4R.js";import{u as r}from"./chunk-PVEVZB4O-9f86844d-Ct3O5R7X.js";import{u as h}from"./index-22d8619e-w6z8gV_r.js";import{m as l}from"./useWidget-61f344ef-DGmpP8qW.js";import"./component-utils-6b686246-0G4ejcxE.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.4
 */const o="",n=o,d=l(a),g=class{constructor(t){i(this,t),this.arcgisReady=e(this,"arcgisReady",7),this.widgetTriggerAction=e(this,"arcgisTriggerAction",7),this.arcgisPropertyChange=e(this,"arcgisPropertyChange",7),this.manager=h(this),this.widget=d(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=r()("state"),this.autoDestroyDisabled=!1,this.headingLevel=this.widget.headingLevel,this.label=this.widget.label,this.referenceElement=void 0,this.baseFilterText=this.widget.baseFilterText,this.baseItems=this.widget.baseItems,this.baseListItemCreatedFunction=this.widget.baseListItemCreatedFunction,this.basemapTitle=this.widget.basemapTitle,this.catalogLayerList=this.widget.catalogLayerList,this.catalogOptions=this.widget.catalogOptions,this.collapsed=this.widget.collapsed,this.dragEnabled=this.widget.dragEnabled,this.editingTitle=this.widget.editingTitle,this.filterPlaceholder=this.widget.filterPlaceholder,this.icon=this.widget.icon,this.minFilterItems=this.widget.minFilterItems,this.referenceFilterText=this.widget.referenceFilterText,this.referenceListItemCreatedFunction=this.widget.referenceListItemCreatedFunction,this.selectedItems=this.widget.selectedItems,this.selectionMode=this.widget.selectionMode,this.visibilityAppearance=this.widget.visibilityAppearance,this.hideBaseLayers=this.widget.visibleElements.baseLayers,this.showCloseButton=this.widget.visibleElements.closeButton,this.showCollapseButton=this.widget.visibleElements.collapseButton,this.showEditTitleButton=this.widget.visibleElements.editTitleButton,this.showErrors=this.widget.visibleElements.errors,this.showFilter=this.widget.visibleElements.filter,this.hideFlow=this.widget.visibleElements.flow,this.hideHeading=this.widget.visibleElements.heading,this.hideReferenceLayers=this.widget.visibleElements.referenceLayers,this.hideStatusIndicators=this.widget.visibleElements.statusIndicators,this.showTemporaryLayerIndicators=this.widget.visibleElements.temporaryLayerIndicators,this.position="bottom-left",this.state=this.viewModel.state}async destroy(){await this.manager.destroy()}get el(){return s(this)}};g.style=n;export{g as arcgis_basemap_layer_list};
