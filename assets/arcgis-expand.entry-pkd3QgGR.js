import{aW as e,aX as i,aY as s}from"./index-Dv-JqQDv.js";import{G as a}from"./index-80b25649-68xUsn4R.js";import{u as o}from"./index-22d8619e-w6z8gV_r.js";import{m as n}from"./useWidget-61f344ef-DGmpP8qW.js";import"./component-utils-6b686246-0G4ejcxE.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.4
 */const d="arcgis-expand{pointer-events:auto}arcgis-expand>.esri-expand__content--expanded{background-color:var(--calcite-color-background)}",c=d,h=n(a),l=class{constructor(t){e(this,t),this.arcgisReady=i(this,"arcgisReady",7),this.manager=o(this),this.widget=h(this),this.viewModel=this.widget.viewModel,this.autoDestroyDisabled=!1,this.icon=this.widget.icon,this.content=this.widget.content,this.label=this.widget.label,this.autoCollapse=this.widget.autoCollapse,this.closeOnEsc=this.widget.closeOnEsc,this.collapseIcon=this.widget.collapseIcon,this.collapseTooltip=this.widget.collapseTooltip,this.expanded=this.widget.expanded,this.expandIcon=this.widget.expandIcon,this.expandTooltip=this.widget.expandTooltip,this.group=this.widget.group,this.iconNumber=this.widget.iconNumber,this.mode=this.widget.mode,this.placement=this.widget.placement,this.position="top-right",this.referenceElement=void 0,this.content??(this.content=document.createElement("div"))}async destroy(){await this.manager.destroy()}async collapse(){var t;(t=this.widget)==null||t.collapse()}async expand(){var t;(t=this.widget)==null||t.expand()}async toggle(){this.expanded?await this.collapse():await this.expand()}get el(){return s(this)}};l.style=c;export{l as arcgis_expand};
