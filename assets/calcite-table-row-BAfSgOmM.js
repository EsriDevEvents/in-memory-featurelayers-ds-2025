import{hd as f,he as p,hf as b,iU as d,iV as m,iO as R,iP as g,iQ as y,hv as n,hx as k,iS as T,hw as A,hH as S}from"./index-Dv-JqQDv.js";import{d as E}from"./table-cell-DCwGUEgH.js";import{d as D}from"./table-header-cFuCN2M_.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const I={lastVisibleRow:"last-visible-row"},v=":host([disabled]){cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) *,:host([disabled]) ::slotted(*){pointer-events:none}:host{--calcite-internal-table-row-background:var(--calcite-table-row-background, var(--calcite-color-foreground-1));--calcite-internal-table-row-border-color:var(--calcite-table-row-border-color, transparent);display:contents}:host([hidden]){display:none}[hidden]{display:none}:host([disabled]) tr{pointer-events:none;opacity:var(--calcite-opacity-disabled)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.interaction-container{display:contents}tr{border-block-end:1px solid var(--calcite-internal-table-row-border-color);background-color:var(--calcite-internal-table-row-background)}tr.last-visible-row{border-block-end:0}",M=v,u=f(class extends p{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteTableRowSelect=b(this,"calciteTableRowSelect",6),this.calciteInternalTableRowFocusRequest=b(this,"calciteInternalTableRowFocusRequest",6),this.rowCells=[],this.keyDownHandler=e=>{var a;if(this.interactionMode!=="interactive")return;const t=e.target,s=e.key,i=e.ctrlKey,o=this.rowCells;if(t.matches("calcite-table-cell")||t.matches("calcite-table-header"))switch(s){case"ArrowUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"previous"),e.preventDefault();break;case"ArrowDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"next"),e.preventDefault();break;case"PageUp":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"first"),e.preventDefault();break;case"PageDown":this.emitTableRowFocusRequest(t.positionInRow,this.positionAll,"last"),e.preventDefault();break;case"ArrowLeft":d(o,t,"previous",!1),e.preventDefault();break;case"ArrowRight":d(o,t,"next",!1),e.preventDefault();break;case"Home":i?(this.emitTableRowFocusRequest(1,this.positionAll,"first"),e.preventDefault()):(d(o,t,"first",!1),e.preventDefault());break;case"End":i?(this.emitTableRowFocusRequest((a=this.rowCells)==null?void 0:a.length,this.positionAll,"last",!0),e.preventDefault()):(d(o,t,"last",!1),e.preventDefault());break}},this.emitTableRowFocusRequest=(e,t,s,i)=>{this.calciteInternalTableRowFocusRequest.emit({cellPosition:e,rowPosition:t,destination:s,lastCell:i})},this.updateCells=()=>{var o,a,c,r;const e=this.alignment?this.alignment:this.rowType!=="head"?"center":"start",t=(a=(o=this.tableRowSlotEl)==null?void 0:o.assignedElements({flatten:!0}))==null?void 0:a.filter(l=>l.matches("calcite-table-cell")||l.matches("calcite-table-header")),s=(r=Array.from((c=this.tableRowEl)==null?void 0:c.querySelectorAll("calcite-table-header, calcite-table-cell")))==null?void 0:r.filter(l=>l.numberCell||l.selectionCell),i=s?s.concat(t):t;i.length>0&&(i==null||i.forEach((l,h)=>{l.interactionMode=this.interactionMode,l.lastCell=h===i.length-1,l.parentRowAlignment=e,l.parentRowIsSelected=this.selected,l.parentRowType=this.rowType,l.positionInRow=h+1,l.scale=this.scale,l.nodeName==="CALCITE-TABLE-CELL"&&(l.readCellContentsToAT=this.readCellContentsToAT,l.disabled=this.disabled)})),this.rowCells=i||[],this.cellCount=i==null?void 0:i.length},this.handleSelectionOfRow=()=>{this.calciteTableRowSelect.emit()},this.handleKeyboardSelection=e=>{m(e.key)&&(e.key===" "&&e.preventDefault(),this.handleSelectionOfRow())},this.alignment=void 0,this.disabled=!1,this.selected=!1,this.cellCount=void 0,this.interactionMode="interactive",this.lastVisibleRow=void 0,this.rowType=void 0,this.numbered=!1,this.positionSection=void 0,this.positionSectionLocalized=void 0,this.positionAll=void 0,this.readCellContentsToAT=void 0,this.scale=void 0,this.selectionMode="none",this.selectedRowCount=void 0,this.selectedRowCountLocalized=void 0,this.bodyRowCount=void 0,this.effectiveLocale=""}handleCellChanges(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}handleDelayedCellChanges(){this.tableRowEl&&this.rowCells.length>0&&requestAnimationFrame(()=>this.updateCells())}componentDidLoad(){this.tableRowEl&&this.rowCells.length>0&&this.updateCells()}connectedCallback(){R(this)}componentDidRender(){g(this)}disconnectedCallback(){y(this)}calciteInternalTableRowFocusChangeHandler(e){var t;if(e.target.contains(this.el)){const s=e.detail.cellPosition,i=e.detail.rowPosition,o=e.detail.destination,a=e.detail.lastCell;if(i===this.positionAll){if(this.disabled){const r=o==="last"?"previous":o==="first"?"next":o;this.emitTableRowFocusRequest(s,this.positionAll,r);return}const c=a?this.rowCells[this.rowCells.length-1]:(t=this.rowCells)==null?void 0:t.find((r,l)=>l+1===s);c&&c.setFocus()}}}renderSelectionIcon(){const e=this.selectionMode==="multiple"&&this.selected?"check-square-f":this.selectionMode==="multiple"?"square":this.selected?"circle-f":"circle";return n("calcite-icon",{icon:e,scale:k(this.scale)})}renderSelectableCell(){return this.rowType==="head"?n("calcite-table-header",{alignment:"center",bodyRowCount:this.bodyRowCount,key:"selection-head",onClick:this.selectionMode==="multiple"&&this.handleSelectionOfRow,onKeyDown:this.selectionMode==="multiple"&&this.handleKeyboardSelection,parentRowAlignment:this.alignment,selectedRowCount:this.selectedRowCount,selectedRowCountLocalized:this.selectedRowCountLocalized,selectionCell:!0,selectionMode:this.selectionMode}):this.rowType==="body"?n("calcite-table-cell",{alignment:"center",key:"selection-body",onClick:this.handleSelectionOfRow,onKeyDown:this.handleKeyboardSelection,parentRowAlignment:this.alignment,parentRowIsSelected:this.selected,parentRowPositionLocalized:this.positionSectionLocalized,selectionCell:!0},this.renderSelectionIcon()):n("calcite-table-cell",{alignment:"center",key:"selection-foot",parentRowAlignment:this.alignment,selectionCell:!0})}renderNumberedCell(){return this.rowType==="head"?n("calcite-table-header",{alignment:"center",key:"numbered-head",numberCell:!0,parentRowAlignment:this.alignment}):this.rowType==="body"?n("calcite-table-cell",{alignment:"center",key:"numbered-body",numberCell:!0,parentRowAlignment:this.alignment},this.positionSectionLocalized):n("calcite-table-cell",{alignment:"center",key:"numbered-foot",numberCell:!0,parentRowAlignment:this.alignment})}render(){return n(A,{key:"185bf9700be4b1095871b2504f25212df83561b0"},n(T,{key:"d06ab2d2bd334c8eb6c87e788f6078bf2e6a0340",disabled:this.disabled},n("tr",{key:"e8d2091f1d498dfd8a618643d838d2978659057f","aria-disabled":this.disabled,"aria-rowindex":this.positionAll+1,"aria-selected":this.selected,class:{[I.lastVisibleRow]:this.lastVisibleRow},onKeyDown:this.keyDownHandler,ref:e=>this.tableRowEl=e},this.numbered&&this.renderNumberedCell(),this.selectionMode!=="none"&&this.renderSelectableCell(),n("slot",{key:"d7b53de55a8ee6cdd0a6289dea9a386bf977a565",onSlotchange:this.updateCells,ref:e=>this.tableRowSlotEl=e}))))}get el(){return this}static get watchers(){return{bodyRowCount:["handleCellChanges"],scale:["handleCellChanges"],selected:["handleCellChanges"],selectedRowCount:["handleCellChanges"],interactionMode:["handleCellChanges"],numbered:["handleDelayedCellChanges"],selectionMode:["handleDelayedCellChanges"]}}static get style(){return M}},[1,"calcite-table-row",{alignment:[513],disabled:[516],selected:[516],cellCount:[1026,"cell-count"],interactionMode:[1,"interaction-mode"],lastVisibleRow:[4,"last-visible-row"],rowType:[1,"row-type"],numbered:[4],positionSection:[2,"position-section"],positionSectionLocalized:[1,"position-section-localized"],positionAll:[2,"position-all"],readCellContentsToAT:[4,"read-cell-contents-to-a-t"],scale:[1],selectionMode:[1,"selection-mode"],selectedRowCount:[2,"selected-row-count"],selectedRowCountLocalized:[1,"selected-row-count-localized"],bodyRowCount:[2,"body-row-count"],effectiveLocale:[32]},[[4,"calciteInternalTableRowFocusChange","calciteInternalTableRowFocusChangeHandler"]],{bodyRowCount:["handleCellChanges"],scale:["handleCellChanges"],selected:["handleCellChanges"],selectedRowCount:["handleCellChanges"],interactionMode:["handleCellChanges"],numbered:["handleDelayedCellChanges"],selectionMode:["handleDelayedCellChanges"]}]);function w(){if(typeof customElements>"u")return;["calcite-table-row","calcite-icon","calcite-table-cell","calcite-table-header"].forEach(e=>{switch(e){case"calcite-table-row":customElements.get(e)||customElements.define(e,u);break;case"calcite-icon":customElements.get(e)||S();break;case"calcite-table-cell":customElements.get(e)||E();break;case"calcite-table-header":customElements.get(e)||D();break}})}w();const H=u,x=w;export{H as CalciteTableRow,x as defineCustomElement};
