import{aW as i,aX as e,aY as a}from"./index-Dv-JqQDv.js";import{u as h}from"./chunk-PVEVZB4O-9f86844d-Ct3O5R7X.js";import{u as r}from"./index-22d8619e-w6z8gV_r.js";import{a2 as g}from"./index-80b25649-68xUsn4R.js";import{m as c}from"./useWidget-61f344ef-DGmpP8qW.js";import"./component-utils-6b686246-0G4ejcxE.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.4
 */const l="",d=l,o=c(g),u=class{constructor(t){i(this,t),this.arcgisReady=e(this,"arcgisReady",7),this.arcgisPropertyChange=e(this,"arcgisPropertyChange",7),this.widgetSearchBlur=e(this,"arcgisBlur",7),this.widgetSearchClear=e(this,"arcgisClear",7),this.widgetSearchComplete=e(this,"arcgisComplete",7),this.widgetSearchFocus=e(this,"arcgisFocus",7),this.widgetSearchStart=e(this,"arcgisStart",7),this.widgetSelectResult=e(this,"arcgisSelectResult",7),this.widgetSuggestComplete=e(this,"arcgisSuggestComplete",7),this.widgetSuggestStart=e(this,"arcgisSuggestStart",7),this.manager=r(this),this.widget=o(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=h()("state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.activeMenu=this.widget.activeMenu,this.activeSource=this.widget.activeSource,this.activeSourceIndex=this.widget.activeSourceIndex,this.allPlaceholder=this.widget.allPlaceholder,this.allSources=this.widget.allSources,this.autoSelectDisabled=this.widget.autoSelect,this.defaultSources=this.widget.defaultSources,this.disabled=this.widget.disabled,this.icon=this.widget.icon,this.label=this.widget.label,this.includeDefaultSourcesDisabled=this.widget.includeDefaultSources,this.locationDisabled=this.widget.locationEnabled,this.maxResults=this.widget.maxResults,this.maxSuggestions=this.widget.maxSuggestions,this.minSuggestCharacters=this.widget.minSuggestCharacters,this.popupDisabled=this.widget.popupEnabled,this.popupTemplate=this.widget.popupTemplate,this.portal=this.widget.portal,this.resultGraphic=this.widget.resultGraphic,this.resultGraphicDisabled=this.widget.resultGraphicEnabled,this.results=this.widget.results,this.searchAllDisabled=this.widget.searchAllEnabled,this.searchTerm=this.widget.searchTerm,this.selectedResult=this.widget.selectedResult,this.sources=this.widget.sources,this.suggestions=this.widget.suggestions,this.suggestionsDisabled=this.widget.suggestionsEnabled,this.position="top-right",this.state=this.viewModel.state}async blurSearch(){var t;(t=this.widget)==null||t.blur()}async clearSearch(){var t;(t=this.widget)==null||t.clear()}async focusSearch(){var t;(t=this.widget)==null||t.focus()}async destroy(){await this.manager.destroy()}async search(t){var s;return await((s=this.widget)==null?void 0:s.search(t))}async suggest(t){var s;return await((s=this.widget)==null?void 0:s.suggest(t))}get el(){return a(this)}};u.style=d;export{u as arcgis_search};
