import{aW as l,aX as s,aY as h}from"./index-Dv-JqQDv.js";import{J as n,K as a}from"./index-80b25649-68xUsn4R.js";import{b as r}from"./component-utils-6b686246-0G4ejcxE.js";import{u as d}from"./chunk-PVEVZB4O-9f86844d-Ct3O5R7X.js";import{u as o}from"./index-22d8619e-w6z8gV_r.js";import{m as g}from"./useWidget-61f344ef-DGmpP8qW.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.4
 */const c=".arcgis-feature-table{width:100%;height:100%}",m=c,u=g(a),w=class{constructor(e){l(this,e),this.arcgisReady=s(this,"arcgisReady",7),this.arcgisSelectionChange=s(this,"arcgisSelectionChange",7),this.arcgisPropertyChange=s(this,"arcgisPropertyChange",7),this.manager=o(this),this.widget=u(this),this.viewModel=this.widget.viewModel,this.arcgisPropertyChange=d()("state"),this.autoDestroyDisabled=!1,this.referenceElement=void 0,this.position="manual",this.activeFilters=this.widget.activeFilters,this.activeSortOrders=this.widget.activeSortOrders,this.attachmentsEnabled=this.widget.attachmentsEnabled,this.autoRefreshEnabled=this.widget.autoRefreshEnabled,this.columnReorderingEnabled=this.widget.columnReorderingEnabled,this.columns=this.widget.columns,this.description=this.widget.description,this.icon=this.widget.icon,this.label=this.widget.label,this.editingEnabled=this.widget.editingEnabled,this.filterBySelectionEnabled=this.widget.filterBySelectionEnabled,this.filterGeometry=this.widget.filterGeometry,this.hiddenFields=this.widget.hiddenFields,this.highlightEnabled=this.widget.highlightEnabled,this.highlightIds=this.widget.highlightIds,this.layer=this.widget.layer,this.menuConfig=this.widget.menuConfig,this.multiSortEnabled=this.widget.multiSortEnabled,this.objectIds=this.widget.objectIds,this.pageSize=this.widget.pageSize,this.relatedRecordsEnabled=this.widget.relatedRecordsEnabled,this.returnGeometryEnabled=this.widget.returnGeometryEnabled,this.returnMEnabled=this.widget.returnMEnabled,this.returnZEnabled=this.widget.returnZEnabled,this.tableTemplate=this.widget.tableTemplate,this.timeZone=this.widget.timeZone,this.itemId=this.manager.getSet(void 0,{set:t=>(r(t)?this.layer=null:t&&n({portalItem:{id:t}}).then(i=>{this.layer=i}).catch(console.error),t)}),this.url=this.manager.getSet(void 0,{set:t=>(t&&n({url:t}).then(i=>{this.layer=i}).catch(console.error),t)}),this.hideHeader=this.widget.visibleElements.header,this.hideMenu=this.widget.visibleElements.menu,this.hideSelectionColumn=this.widget.visibleElements.selectionColumn,this.hideColumnMenus=this.widget.visibleElements.columnMenus,this.hideMenuItemsClearSelection=this.widget.visibleElements.menuItems.clearSelection,this.hideMenuItemsDeleteSelection=this.widget.visibleElements.menuItems.deleteSelection,this.hideMenuItemsRefreshData=this.widget.visibleElements.menuItems.refreshData,this.hideMenuItemsSelectedRecordsShowAllToggle=this.widget.visibleElements.menuItems.selectedRecordsShowAllToggle,this.hideMenuItemsToggleColumns=this.widget.visibleElements.menuItems.toggleColumns,this.hideMenuItemsZoomToSelection=this.widget.visibleElements.menuItems.zoomToSelection,this.state=this.widget.state}componentWillLoad(){this.manager.onLifecycle(()=>this.widget.highlightIds.on("change",this.arcgisSelectionChange.emit))}componentDidLoad(){var e;(e=this.el.childElem)==null||e.classList.add("arcgis-feature-table")}async destroy(){await this.manager.destroy()}async clearSelectionFilter(){var e;(e=this.widget)==null||e.clearSelectionFilter()}async deleteSelection(e){var t;await((t=this.widget)==null?void 0:t.deleteSelection(e))}async filterBySelection(){var e;(e=this.widget)==null||e.filterBySelection()}async findColumn(e){var t;return(t=this.widget)==null?void 0:t.findColumn(e)}async hideColumn(e){var t;(t=this.widget)==null||t.hideColumn(e)}async refresh(){var e;await((e=this.widget)==null?void 0:e.refresh())}async scrollToIndex(e){var t;(t=this.widget)==null||t.scrollToIndex(e)}async showAllColumns(){var e;(e=this.widget)==null||e.showAllColumns()}async showColumn(e){var t;(t=this.widget)==null||t.showColumn(e)}async sortColumn(e,t){var i;(i=this.widget)==null||i.sortColumn(e,t)}async zoomToSelection(){var e;(e=this.widget)==null||e.zoomToSelection()}get el(){return h(this)}};w.style=m;export{w as arcgis_feature_table};
