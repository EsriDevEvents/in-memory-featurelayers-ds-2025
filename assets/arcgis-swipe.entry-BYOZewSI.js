import{aW as e,aX as i,aY as s}from"./index-Dv-JqQDv.js";import{a8 as a}from"./index-80b25649-68xUsn4R.js";import{u as r}from"./chunk-PVEVZB4O-9f86844d-Ct3O5R7X.js";import{u as o}from"./index-22d8619e-w6z8gV_r.js";import{m as g}from"./useWidget-61f344ef-DGmpP8qW.js";import"./component-utils-6b686246-0G4ejcxE.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.4
 */const h="arcgis-swipe{}",n=h,d=g(a),l=class{constructor(t){e(this,t),this.arcgisReady=i(this,"arcgisReady",7),this.arcgisPropertyChange=i(this,"arcgisPropertyChange",7),this.manager=o(this),this.widget=d(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=r()("state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.icon=this.widget.icon,this.label=this.widget.label,this.direction=this.widget.direction,this.dragLabel=this.widget.dragLabel,this.leadingLayers=this.widget.leadingLayers,this.swipePosition=this.widget.position,this.trailingLayers=this.widget.trailingLayers,this.position="manual",this.state=this.viewModel.state}async destroy(){await this.manager.destroy()}get el(){return s(this)}};l.style=n;export{l as arcgis_swipe};
