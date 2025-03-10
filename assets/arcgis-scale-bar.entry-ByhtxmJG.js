import{aW as e,aX as s,aY as i}from"./index-Dv-JqQDv.js";import{_ as a}from"./index-80b25649-68xUsn4R.js";import{u as r}from"./index-22d8619e-w6z8gV_r.js";import{m as o}from"./useWidget-61f344ef-DGmpP8qW.js";import"./component-utils-6b686246-0G4ejcxE.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.4
 */const l="arcgis-scale-bar{}",c=l,n=o(a),h=class{constructor(t){e(this,t),this.arcgisReady=s(this,"arcgisReady",7),this.manager=r(this),this.widget=n(this),this.viewModel=this.widget.viewModel,this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.barStyle=this.widget.style,this.unit=this.widget.unit,this.icon=this.widget.icon,this.label=this.widget.label,this.position="bottom-left"}async destroy(){await this.manager.destroy()}get el(){return i(this)}};h.style=c;export{h as arcgis_scale_bar};
