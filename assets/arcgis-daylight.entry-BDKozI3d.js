import{aW as i,aX as t,aY as s}from"./index-Dv-JqQDv.js";import{x as a}from"./index-80b25649-68xUsn4R.js";import{u as h}from"./index-22d8619e-w6z8gV_r.js";import{m as l}from"./useWidget-61f344ef-DGmpP8qW.js";import"./component-utils-6b686246-0G4ejcxE.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.4
 */const d="",g=d,n=l(a),r=class{constructor(e){i(this,e),this.arcgisReady=t(this,"arcgisReady",7),this.manager=h(this),this.widget=n(this),this.viewModel=this.widget.viewModel,this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.currentSeason=this.viewModel.currentSeason,this.dayPlaying=this.viewModel.dayPlaying,this.yearPlaying=this.viewModel.yearPlaying,this.dateOrSeason=this.widget.dateOrSeason,this.icon=this.widget.icon,this.label=this.widget.label,this.headingLevel=this.widget.headingLevel,this.playSpeedMultiplier=this.widget.playSpeedMultiplier,this.timeSliderSteps=this.widget.timeSliderSteps,this.hideHeader=this.widget.visibleElements.header,this.hidePlayButtons=this.widget.visibleElements.playButtons,this.hideDatePicker=this.widget.visibleElements.datePicker,this.hideTimezone=this.widget.visibleElements.timezone,this.hideSunLightingToggle=this.widget.visibleElements.sunLightingToggle,this.hideShadowsToggle=this.widget.visibleElements.shadowsToggle,this.position="bottom-left"}async destroy(){await this.manager.destroy()}get el(){return s(this)}};r.style=g;export{r as arcgis_daylight};
