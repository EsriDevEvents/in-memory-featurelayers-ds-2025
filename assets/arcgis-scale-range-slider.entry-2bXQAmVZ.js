import{aW as t,aX as e,aY as s}from"./index-Dv-JqQDv.js";import{$ as a}from"./index-80b25649-68xUsn4R.js";import{u as r}from"./chunk-PVEVZB4O-9f86844d-Ct3O5R7X.js";import{u as l}from"./index-22d8619e-w6z8gV_r.js";import{m as n}from"./useWidget-61f344ef-DGmpP8qW.js";import"./component-utils-6b686246-0G4ejcxE.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.4
 */const h="arcgis-scale-range-slider{}",g=h,c=n(a),d=class{constructor(i){t(this,i),this.arcgisReady=e(this,"arcgisReady",7),this.arcgisPropertyChange=e(this,"arcgisPropertyChange",7),this.manager=l(this),this.widget=c(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=r()("state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.disabled=this.widget.disabled,this.icon=this.widget.icon,this.label=this.widget.label,this.layer=this.widget.layer,this.maxScale=this.widget.maxScale,this.maxScaleLimit=this.widget.maxScaleLimit,this.minScale=this.widget.minScale,this.minScaleLimit=this.widget.minScaleLimit,this.mode=this.widget.mode,this.region=this.widget.region,this.hidePreview=this.widget.visibleElements.preview,this.hideScaleMenusMinScaleMenu=this.widget.visibleElements.scaleMenus.minScaleMenu,this.hideScaleMenusMaxScaleMenu=this.widget.visibleElements.scaleMenus.maxScaleMenu,this.position="bottom-left",this.state=this.viewModel.state}async destroy(){await this.manager.destroy()}get el(){return s(this)}};d.style=g;export{d as arcgis_scale_range_slider};
