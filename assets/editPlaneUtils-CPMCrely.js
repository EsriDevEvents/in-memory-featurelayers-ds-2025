import{j as s,y as r,P as k,b_ as vt,ar as ot,gc as nt,jE as ft,bN as Et,cD as Gt,o as Pt,ev as St,e2 as st,hM as B,a6 as Ct,bt as M,af as At,dz as Ft,r_ as rt,cn as at,dA as lt}from"./index-Dv-JqQDv.js";import{h as Mt}from"./UpdatingHandles-C0Kh7aEt.js";import{w as zt}from"./coordinateFormatter-DOe4wl5T.js";import Ht from"./GraphicsLayer-D1PdSLqE.js";import{a as Nt}from"./dehydratedFeatureComparison-JrNDQOYF.js";import{L as ct,v as Lt,T as pt,b as Dt,j as Zt,R as dt,d as jt}from"./createUtils-BlYXi0kE.js";import{Z as Yt,b as Bt}from"./surfaceCoordinateSystems-Djy4b_d8.js";import{d as A,h as b,j as Jt,f as Xt,a as qt}from"./quantityUtils-CvTt11a2.js";import{E as Kt,j as Qt}from"./elevationInfoUtils-Cey9W7Lb.js";import{e as K}from"./helpMessageUtils-M95XMmyR.js";import{getDrawMeshHelpMessage as Wt}from"./helpMessageUtils3d-DpaW3uLS.js";import{h as H,x as te,F as ee,b as wt,I as _t,M as ie,U as oe,R as ne,u as Ot,B as se,G as re}from"./automaticAreaMeasurementUtils-DSeJvdXL.js";import{r as V,h as ae}from"./Tooltip-C6cTDqw-.js";import{O as le}from"./SnappingManager-BxBCA2Ex.js";import{c as ce,m as N}from"./automaticLengthMeasurementUtils-BEJccBLi.js";import{R as pe,v as de}from"./euclideanLengthMeasurementUtils-DU6F1DKF.js";import{n as he}from"./InteractiveToolBase-ClRFM-nV.js";import{l as kt}from"./isSupportedObject-CXGhKfYW.js";import{o as I,j as ht,f as ue,M as ye,e as me,u as J,l as ut,k as yt}from"./vec2-DGogPjh1.js";import{W as ge,J as L}from"./boundedPlane-DBcMJiAN.js";import{t as G}from"./plane-4BN6ZBDV.js";import{t as ve,c as fe,d as we,f as _e}from"./EditGeometryOperations-B2SzBwZq.js";var m;(function(t){t[t.NeverApplied=0]="NeverApplied",t[t.Applied=1]="Applied",t[t.Undone=2]="Undone"})(m||(m={}));var f;(function(t){t.UndoRedoUpdating="UndoRedoUpdating",t.UndoInvalidError="UndoInvalidError",t.RedoInvalidError="RedoInvalidError",t.ApplyInvalidError="ApplyInvalidError"})(f||(f={}));const D={[f.UndoRedoUpdating]:"Cannot perform operation whilst undo redo is updating",[f.UndoInvalidError]:"There are no items to Undo",[f.RedoInvalidError]:"There are no items to Redo",[f.ApplyInvalidError]:"Cannot apply an item that is already applied"};let P=class extends Error{constructor(){super(D[f.UndoRedoUpdating]),this.type="undo-redo-updating-error"}},q=class extends Error{constructor(){super(D[f.UndoInvalidError]),this.type="undo-redo-undo-error"}};class Oe extends Error{constructor(){super(D[f.RedoInvalidError]),this.type="undo-redo-redo-error"}}class ke extends Error{constructor(){super(D[f.ApplyInvalidError]),this.type="undo-redo-apply-error"}}var O;(function(t){t[t.Apply=0]="Apply",t[t.Undo=1]="Undo",t[t.Redo=2]="Redo"})(O||(O={}));let z=class extends vt{constructor(){super(...arguments),this.name="",this.tag=Symbol(),this.status=m.NeverApplied}get canUndo(){return this.status===m.Applied}get canRedo(){return this.status===m.Undone}async executeUndoRedoOperation(t){switch(t){case O.Apply:if(this.status!==m.NeverApplied)throw new ke;return await this.apply(),void(this.status=m.Applied);case O.Undo:if(this.status!==m.Applied)throw new q;return await this.undo(),void(this.status=m.Undone);case O.Redo:if(this.status!==m.Undone)throw new q;return await this.redo(),void(this.status=m.Applied)}}};s([r()],z.prototype,"name",void 0),s([r()],z.prototype,"tag",void 0),z=s([k("esri.undoredo.UndoableOperation")],z);let v=class extends vt{constructor(){super(...arguments),this._stack=new ot,this._stackPosition=-1,this._updatingHandles=new Mt}get updating(){return this._updatingHandles.updating}get canUndo(){return this.hasUndo&&!this.updating}get hasUndo(){return this._stackPosition>=0}get canRedo(){return this.hasRedo&&!this.updating}get hasRedo(){return this._stackPosition<this._stack.length-1}_truncateForwardStack(){this._stack.splice(this._stackPosition+1,this._stack.length-this._stackPosition).forEach(t=>t.destroy())}_drainStack(){this._stack.drain(t=>t.destroy()),this._stackPosition=-1}async undo(){if(!this.hasUndo)throw new q;if(this.updating)throw new P;const t=this._stack.getItemAt(this._stackPosition);await this._updatingHandles.addPromise((async()=>{await t.executeUndoRedoOperation(O.Undo),--this._stackPosition,t.canRedo||this._truncateForwardStack()})())}async redo(){if(!this.hasRedo)throw new Oe;if(this.updating)throw new P;const t=this._stack.getItemAt(this._stackPosition+1);await this._updatingHandles.addPromise((async()=>{await t.executeUndoRedoOperation(O.Redo),++this._stackPosition})())}peekUndo(){return this.canUndo?this._stack.getItemAt(this._stackPosition):null}peekRedo(){return this.canRedo?this._stack.getItemAt(this._stackPosition+1):null}async inject(t){if(this.updating)throw new P;await this._updatingHandles.addPromise((async()=>{t.status===m.NeverApplied&&await t.executeUndoRedoOperation(O.Apply),t.canUndo?(this._stack.splice(this._stackPosition+1,0,t),this._stackPosition++):this._stackPosition>-1&&(this._stack.splice(0,this._stackPosition+1).forEach(e=>e.destroy()),this._stackPosition=-1)})())}async add(t){if(this.updating)throw new P;await this._updatingHandles.addPromise((async()=>{t.status===m.NeverApplied&&await t.executeUndoRedoOperation(O.Apply),this._stackPosition>=-1&&this._truncateForwardStack(),t.canUndo?(this._stack.push(t),this._stackPosition=this._stack.length-1):this._drainStack()})())}async removeTagged(t,e=!1){if(this.updating&&!e)return;await nt(()=>!this.updating);const i=new ot;for(let o=0;o<this._stack.length;o++){const n=this._stack.getItemAt(o);n.tag===t?(n.destroy(),o===this._stackPosition&&(this._stackPosition=i.length-1)):i.push(n)}this._stack=i,this._stackPosition>i.length-1&&(this._stackPosition=i.length-1)}async clear(t=!1){if(this.updating&&!t)throw new P;await nt(()=>!this.updating),this._drainStack()}};s([r()],v.prototype,"_stack",void 0),s([r()],v.prototype,"_stackPosition",void 0),s([r()],v.prototype,"updating",null),s([r({readOnly:!0})],v.prototype,"canUndo",null),s([r({readOnly:!0})],v.prototype,"hasUndo",null),s([r({readOnly:!0})],v.prototype,"canRedo",null),s([r({readOnly:!0})],v.prototype,"hasRedo",null),v=s([k("esri.UndoRedo")],v);class xe{constructor(){this.committedVertices=null,this.cursorVertex=null,this.full=null,this.outline=null,this.cursorEdge=null,this.circle=null,this.rectangle=null}}let _=class extends V{constructor(e){super(e),this.type="draw-circle",this.radius=null,this.xSize=null,this.ySize=null,this.area=A}get allFields(){return[]}};s([r()],_.prototype,"type",void 0),s([r()],_.prototype,"radius",void 0),s([r()],_.prototype,"xSize",void 0),s([r()],_.prototype,"ySize",void 0),s([r()],_.prototype,"area",void 0),s([r()],_.prototype,"allFields",null),_=s([k("esri.views.interactive.tooltip.infos.DrawCircleTooltipInfo")],_);let S=class extends H(V){constructor(e){super(e),this.type="draw-mesh",this.orientation=te({lockable:!1}),this.scale=ee({lockable:!1})}get allFields(){return[this.longitude,this.latitude,this.x,this.y,this.elevation,this.orientation,this.scale]}};s([r()],S.prototype,"helpMessage",void 0),s([r()],S.prototype,"allFields",null),S=s([k("esri.views.interactive.tooltip.infos.DrawMeshTooltipInfo")],S);let C=class extends H(V){constructor(t){super(t),this.type="draw-point"}get allFields(){return[this.longitude,this.latitude,this.x,this.y,this.elevation]}};s([r()],C.prototype,"helpMessage",void 0),s([r()],C.prototype,"allFields",null),C=s([k("esri.views.interactive.tooltip.infos.DrawPointTooltipInfo")],C);let T=class extends H(V){constructor(e){super(e),this.type="draw-polygon",this.direction=wt(),this.distance=_t({title:i=>i.messages.sketch.distance}),this.area=ie(),this.xyMode="direction-distance"}get allFields(){return[this.direction,this.distance,this.longitude,this.latitude,this.x,this.y,this.elevation,this.area]}};s([r()],T.prototype,"xyMode",void 0),s([r()],T.prototype,"helpMessage",void 0),s([r()],T.prototype,"allFields",null),T=s([k("esri.views.interactive.tooltip.infos.DrawPolygonTooltipInfo")],T);let R=class extends H(V){constructor(t){super(t),this.type="draw-polyline",this.direction=wt(),this.distance=_t({title:e=>e.messages.sketch.distance}),this.totalLength=oe(),this.xyMode="direction-distance"}get allFields(){return[this.direction,this.distance,this.longitude,this.latitude,this.x,this.y,this.elevation,this.totalLength]}};s([r()],R.prototype,"helpMessage",void 0),s([r()],R.prototype,"xyMode",void 0),s([r()],R.prototype,"allFields",null),R=s([k("esri.views.interactive.tooltip.infos.DrawPolylineTooltipInfo")],R);let x=class extends V{constructor(t){super(t),this.type="draw-rectangle",this.xSize=b,this.ySize=b,this.area=A}get allFields(){return[]}};s([r()],x.prototype,"type",void 0),s([r()],x.prototype,"xSize",void 0),s([r()],x.prototype,"ySize",void 0),s([r()],x.prototype,"area",void 0),s([r()],x.prototype,"allFields",null),x=s([k("esri.views.interactive.tooltip.infos.DrawRectangleTooltipInfo")],x);function $e(t,e){return{point:new C({sketchOptions:e,viewType:t}),polyline:new R({sketchOptions:e,viewType:t}),polygon:new T({sketchOptions:e,viewType:t}),mesh:new S({sketchOptions:e,viewType:t}),rectangle:new x({sketchOptions:e}),circle:new _({sketchOptions:e})}}function mt(t){const{directionOptions:e,geometryType:i,sketchOptions:o,tooltipInfos:n}=t,a=h=>{const u=Z(t).mode,p=n[h].elevation;u==="relative-to-ground"||u==="relative-to-scene"||u==="on-the-ground"?p.lock(W(t)):p.unlock()},l=h=>{if(e){const u=n[h].direction;u.committed=e.angle,u.unlockOnVertexPlacement=!1,o.values.directionMode=e.mode}};switch(i){case"polygon":case"polyline":a(i),l(i);break;case"point":case"mesh":a(i)}}function be(t,e){const{drawOperation:i,view:o}=e,n=Q(e),a=Z(e);if(o.type==="2d"||!t||a.mode!=="absolute-height"||(i==null?void 0:i.numCommittedVertices)!==1||!n||n.type!=="draw-polyline"&&n.type!=="draw-polygon"||n.elevation.locked)return;const[l,h,u]=t,p=Fe(l,h,u,a,e);p!=null&&n.elevation.lock(p)}function gt(t){var e;(e=Q(t))==null||e.allFields.forEach(i=>{i.unlockOnVertexPlacement&&i.unlock()})}function Q({geometryType:t,graphic:e,tooltipInfos:i}){var o;return t==="multipoint"||((o=e==null?void 0:e.geometry)==null?void 0:o.type)!==Ue[t]?null:i[t]}const Ue={point:"point",mesh:"mesh",polyline:"polyline",polygon:"polygon",circle:"polygon",rectangle:"polygon"};function Ie(t,e){switch(t==null?void 0:t.type){case"draw-point":Te(t,e);break;case"draw-polyline":Ve(t,e);break;case"draw-polygon":Ee(t,e);break;case"draw-rectangle":Pe(t,e);break;case"draw-circle":Se(t,e);break;case"draw-mesh":Re(t,e)}}function Te(t,e){var o;const i=(o=e.graphic)==null?void 0:o.geometry;(i==null?void 0:i.type)==="point"&&(xt(t,i,e),t.helpMessage=K("point",i))}function Re(t,e){const{graphic:i,view:o}=e,n=i==null?void 0:i.geometry;o.type==="3d"&&(n==null?void 0:n.type)==="mesh"&&(xt(t,n.origin,e),ne(t,n),t.helpMessage=Wt(i,o))}function xt(t,e,i){const{drawOperation:o,view:n,sketchOptions:a}=i,{cursorVertex:l}=o;if(t.sketchOptions=a,t.viewType=n.type,t.setLocationFromPoint(e,E(i)),bt(t.elevation,i),!l)return void(o.constraints=void 0);const h=l;o.constraints={context:Rt(h,i),x:t.x.committed,y:t.y.committed,longitude:t.longitude.committed,latitude:t.latitude.committed,elevation:t.elevation.committed,distance:null,direction:null}}function Ve(t,e){const{createOperationGeometry:i,drawOperation:o}=e,n=i!=null?i.full:null;(n==null?void 0:n.type)==="polyline"&&($t(t,e),t.totalLength.actual=o.lastVertex?ce(n)??b:null,t.helpMessage=K("polyline",n))}function Ee(t,e){const{createOperationGeometry:i,drawOperation:o}=e,n=i!=null?i.full:null;(n==null?void 0:n.type)==="polygon"&&($t(t,e),t.area.actual=o.lastVertex?Ot(n)??A:null,t.helpMessage=K("polygon",n))}function $t(t,e){const{drawOperation:i,sketchOptions:o,view:n}=e,{cursorVertex:a,lastVertex:l,secondToLastVertex:h}=i,u=o.values.effectiveDirectionMode;t.sketchOptions=o,t.viewType=n.type;const p=l&&a?N(l,a)??b:null;if(t.distance.actual=p,t.distance.readOnly=l==null,t.direction.actual=null,t.direction.readOnly=!0,l&&a&&(u==="absolute"||h)){const U=le(h,l,a,u);t.direction.actual=U??Jt,t.direction.readOnly=!1}t.setLocationFromPoint(a,E(e)),bt(t.elevation,e);const y=Ge(l,e);t.xyMode=y,t.direction.visible=y==="direction-distance",t.distance.visible=y==="direction-distance",t.effectiveX.visible=y==="coordinates",t.effectiveY.visible=y==="coordinates";const w=a??l;i.constraints=w?{context:Rt(w,e),x:t.x.committed,y:t.y.committed,longitude:t.longitude.committed,latitude:t.latitude.committed,elevation:t.elevation.committed,distance:t.distance.committed,direction:t.direction.committed}:void 0}function Ge(t,{sketchOptions:e}){const i=e.tooltips.xyMode;return i==="auto"?t?"direction-distance":"coordinates":i}function Pe(t,e){t.sketchOptions=e.sketchOptions,t.xSize=It(e),t.ySize=Tt(e),t.area=Ut(e)}function Se(t,e){const{forceUniformSize:i,sketchOptions:o}=e;t.sketchOptions=o,t.radius=i?Ce(e):null,t.xSize=i?null:It(e),t.ySize=i?null:Tt(e),t.area=Ut(e)}function bt(t,e){const{drawOperation:i}=e,o=(i==null?void 0:i.cursorVertex)??(i==null?void 0:i.lastVertex);t.actual=pe(o)??W(e),t.visible=i.hasZ,t.readOnly=!1,t.showAsZ=!0}function Ut(t){var i;const e=(i=t.createOperationGeometry)==null?void 0:i.full;return(e==null?void 0:e.type)!=="polygon"?A:Ot(e)??A}function It(t){var i,o;const e=(o=(i=t.createOperationGeometry)==null?void 0:i.rectangle)==null?void 0:o.midpoints;return(e!=null?N(e.left,e.right):null)??b}function Tt(t){var i,o;const e=(o=(i=t.createOperationGeometry)==null?void 0:i.rectangle)==null?void 0:o.midpoints;return(e!=null?N(e.top,e.bottom):null)??b}function Ce({createOperationGeometry:t}){var e;return(((e=t==null?void 0:t.circle)==null?void 0:e.center)!=null&&t.circle.edge!=null?N(t.circle.center,t.circle.edge):null)??b}function Ae(t){const{geometryType:e,tooltipInfos:i}=t;switch(e){case"point":case"mesh":case"polyline":case"polygon":{const o=i[e].elevation.committed;return o?Xt(o,"meters")/ft(E(t)):void 0}default:return}}function Fe(t,e,i,o,n){const{view:a,drawOperation:l}=n;if(a.type!=="3d"||!l)return;i??(i=0);const h=E(n),u=Z(n),p=Kt(a,t,e,i,h,u,o);return de(p,h)??W(n)}function Z(t){return t.drawOperation.elevationInfo??Qt}function E(t){return t.drawOperation.coordinateHelper.spatialReference}function W(t){const e=ft(E(t));return qt(t.defaultZ*e,"meters")}function Rt(t,e){return Yt(t,e.view,E(e),Z(e),e.drawOperation.coordinateHelper.hasZ(),e.sketchOptions.values.effectiveDirectionMode)}let c=class extends Et.EventedMixin(he){constructor(e){super(e),this._graphic=null,this._coordinateFormatterLoadTask=null,this._createOperationGeometry=null,this.defaultZ=0,this.directionOptions=null,this.geometryType=null,this.hasZ=!0,this.geometryToPlace=null,this.snappingManager=null,this.snapToScene=!1,this.sketchOptions=new kt}initialize(){const{view:e}=this;this.internalGraphicsLayer=new Ht({listMode:"hide",internal:!0}),this.view.map.layers.add(this.internalGraphicsLayer);const i=this.drawOperation=this.makeDrawOperation();this.tooltipInfos=$e(e.type,this.sketchOptions);const o=this.tooltip=new ae({view:e});mt(this._tooltipsContext),this._coordinateFormatterLoadTask=Gt(()=>zt()),this.addHandles([i.on("vertex-add",n=>this.onVertexAdd(n)),i.on("vertex-remove",n=>this.onVertexRemove(n)),i.on("vertex-update",n=>this.onVertexUpdate(n)),i.on("cursor-update",n=>this.onCursorUpdate(n)),i.on("cursor-remove",()=>this._updateGraphic()),i.on("complete",n=>this.onComplete(n)),this._coordinateFormatterLoadTask,o.on("paste",n=>se(n,this.activeTooltipInfo)),Pt(()=>this.cursor,n=>{i.cursor=n},St),st(()=>{const{activeTooltipInfo:n,sketchOptions:a}=this;Ie(n,this._tooltipsContext),o.info=a.tooltips.effectiveEnabled?n:null}),st(()=>{i.constraintZ=Ae(this._tooltipsContext)})]),this.finishToolCreation()}destroy(){this.drawOperation=B(this.drawOperation),this.tooltip=B(this.tooltip),this._destroyAllVisualizations(),this.view.map.remove(this.internalGraphicsLayer),this.internalGraphicsLayer=B(this.internalGraphicsLayer),this._set("view",null)}get _drawSpatialReference(){return this.drawOperation.coordinateHelper.spatialReference}get _tooltipsContext(){return{createOperationGeometry:this._createOperationGeometry,defaultZ:this.defaultZ,directionOptions:this.directionOptions,drawOperation:this.drawOperation,forceUniformSize:this.forceUniformSize,geometryType:this.geometryType,graphic:this.graphic,sketchOptions:this.sketchOptions,tooltipInfos:this.tooltipInfos,view:this.view}}get canRedo(){return this.drawOperation.canRedo}get canUndo(){return this.drawOperation.canUndo}set centered(e){this._set("centered",e),this._updateGraphic()}get cursor(){return this._get("cursor")}set cursor(e){this._set("cursor",e)}set enabled(e){this.drawOperation.interactive=e,this._set("enabled",e)}set forceUniformSize(e){this._set("forceUniformSize",e),this._updateGraphic()}get graphic(){return this._graphic}set graphicSymbol(e){this._set("graphicSymbol",e),this._graphic!=null&&(this._graphic.symbol=e)}set mode(e){const i=this.drawOperation;i&&(i.drawingMode=e),this._set("mode",e)}get updating(){var e;return((e=this.drawOperation)==null?void 0:e.updating)??!1}get undoRedo(){const{view:{type:e,map:i}}=this;return e==="2d"&&i&&"undoRedo"in i&&i.undoRedo instanceof v?i.undoRedo:null}set undoRedo(e){this._override("undoRedo",e)}completeCreateOperation(){this.drawOperation.complete()}onInputEvent(e){this.destroyed||re(e,this.tooltip)||this.drawOperation.onInputEvent(e)}redo(){this.drawOperation.redo()}reset(){}undo(){this.drawOperation.undo(),this.drawOperation.numCommittedVertices===0&&mt(this._tooltipsContext)}_destroyAllVisualizations(){this.removeHandles(g.outline),this.removeHandles(g.regularVertices),this.removeHandles(g.activeVertex),this.removeHandles(g.activeEdge),this.removeHandles(X)}_createOrUpdateGraphic(e){if(this._graphic!=null)return this.updateGraphicGeometry(e),this._graphic;const i=new Ct({...this.graphicProperties,symbol:this.graphicSymbol});return this._graphic=i,this.updateGraphicGeometry(e),this.internalGraphicsLayer.add(i),this.addHandles(this.initializeGraphic(i)),this.notifyChange("graphic"),this.addHandles(M(()=>{this.internalGraphicsLayer.remove(i),this._graphic===i&&(this._graphic=null)}),X),i}updateGraphicGeometry(e){this._graphic.geometry=e}_getCreateOperationGeometry(e={operationComplete:!1}){var tt,et;if(this.drawOperation==null)return;const{coordinateHelper:i,view:o,visualizationCursorVertex:n,lastVertex:a,committedVertices:l,geometryIncludingUncommittedVertices:h,numCommittedVertices:u}=this.drawOperation;if(!(u>0||n!=null))return;const p=e.operationComplete?l:h,y=p.length,w=n!=null?i.pointToArray(n):null,U=this._drawSpatialReference,j=o.type==="3d"&&o.viewingMode==="global",d=new xe;d.committedVertices=l,d.cursorVertex=w;const{geometryType:Y}=this;switch(Y){case"point":case"mesh":d.full=i.arrayToPoint(p[0]);break;case"multipoint":d.full=y>0?jt(p,U):null;break;case"polyline":case"polygon":y>0&&(d.full=Y==="polygon"?Zt([p],U,j,!0):dt([p],U,j),d.cursorEdge=w!=null&&a&&!Nt(n,a)?dt([[w,i.pointToArray(a)]],U,j):null,d.outline=y>1?d.full:null);break;case"circle":case"rectangle":{if(d.committedVertices=d.cursorVertex=null,!y)break;const $=Bt(o,p[0]),F=p[0],it=$.makeMapPoint(F[0]+Me*o.resolution,F[1]);Y==="circle"?y===1&&e.operationComplete?d.circle=ct([F,it],$,!0):y===2&&(this.forceUniformSize?d.circle=ct(p,$,this.centered):d.rectangle=Lt(p,$,this.centered)):y===1&&e.operationComplete?d.rectangle=pt([F,it],$,!0):y===2&&(d.rectangle=this.forceUniformSize?pt(p,$,this.centered):Dt(p,$,this.centered)),d.full=d.circle!=null?d.circle.geometry:(tt=d.rectangle)==null?void 0:tt.geometry,d.outline=((et=d.full)==null?void 0:et.type)==="polygon"?d.full:null;break}default:return null}return d}initializeGraphic(e){return M()}onComplete(e){if(!this.drawOperation)return;this._updateGraphic();let i=null;if(this.drawOperation.isCompleted){const o=this._getCreateOperationGeometry({operationComplete:!0});o!=null&&(i=this._createOrUpdateGraphic(o.full))}this._createOperationGeometry=null,this.emit("complete",{graphic:i,...e})}onCursorUpdate(e){this._updateGraphic(),this.emit("cursor-update",e)}onDeactivate(){const{drawOperation:e}=this;e&&(e.isCompleted||e.cancel())}onOutlineChanged(e){return M()}onCursorEdgeChanged(e){return M()}onVertexAdd(e){var i;gt(this._tooltipsContext),this._updateGraphic(),be((i=e.vertices.at(0))==null?void 0:i.coordinates,this._tooltipsContext),this.emit("vertex-add",e)}onVertexRemove(e){gt(this._tooltipsContext),this._updateGraphic(),this.emit("vertex-remove",e)}onVertexUpdate(e){this._updateGraphic(),this.emit("vertex-update",e)}_updateGraphic(){const e=this._getCreateOperationGeometry();this._createOperationGeometry=e,e!=null?(e.cursorEdge!=null?this.addHandles(this.onCursorEdgeChanged(e.cursorEdge),g.activeEdge):this.removeHandles(g.activeEdge),e.outline!=null?this.addHandles(this.onOutlineChanged(e.outline),g.outline):this.removeHandles(g.outline),e.committedVertices!=null?this.addHandles(this.onRegularVerticesChanged(e.committedVertices),g.regularVertices):this.removeHandles(g.regularVertices),e.cursorVertex!=null?this.addHandles(this.onActiveVertexChanged(e.cursorVertex),g.activeVertex):this.removeHandles(g.activeVertex),e.full!=null?this._createOrUpdateGraphic(e.full):this.removeHandles(X)):this._destroyAllVisualizations()}get activeTooltipInfo(){var e;return(e=this._coordinateFormatterLoadTask)!=null&&e.finished?Q(this._tooltipsContext):null}};s([r()],c.prototype,"_coordinateFormatterLoadTask",void 0),s([r()],c.prototype,"_createOperationGeometry",void 0),s([r()],c.prototype,"_tooltipsContext",null),s([r({value:!0})],c.prototype,"centered",null),s([r()],c.prototype,"cursor",null),s([r({nonNullable:!0})],c.prototype,"defaultZ",void 0),s([r({constructOnly:!0})],c.prototype,"directionOptions",void 0),s([r()],c.prototype,"drawOperation",void 0),s([r({value:!0})],c.prototype,"enabled",null),s([r({value:!0})],c.prototype,"forceUniformSize",null),s([r({constructOnly:!0})],c.prototype,"geometryType",void 0),s([r()],c.prototype,"graphic",null),s([r({constructOnly:!0})],c.prototype,"graphicProperties",void 0),s([r()],c.prototype,"graphicSymbol",null),s([r({constructOnly:!0})],c.prototype,"hasZ",void 0),s([r({constructOnly:!0})],c.prototype,"geometryToPlace",void 0),s([r()],c.prototype,"mode",null),s([r()],c.prototype,"snappingManager",void 0),s([r()],c.prototype,"snapToScene",void 0),s([r()],c.prototype,"tooltip",void 0),s([r()],c.prototype,"tooltipInfos",void 0),s([r({constructOnly:!0,type:kt})],c.prototype,"sketchOptions",void 0),s([r()],c.prototype,"updating",null),s([r({constructOnly:!0,nonNullable:!0})],c.prototype,"view",void 0),s([r({constructOnly:!0})],c.prototype,"undoRedo",null),s([r()],c.prototype,"activeTooltipInfo",null),c=s([k("esri.views.draw.DrawGraphicTool")],c);const X=Symbol("create-operation-graphic"),g={outline:Symbol("outline-visual"),regularVertices:Symbol("regular-vertices-visual"),activeVertex:Symbol("active-vertex-visual"),activeEdge:Symbol("active-edge-visual")};function gi(t){switch(t){case"point":case"polyline":case"polygon":case"multipoint":return t;case"circle":case"rectangle":return"segment";case"mesh":return"point"}}const Me=48;function vi(t,e){return Vt(t,e,!1)}function fi(t,e){return Vt(t,e,!0)}function Vt(t,e,i){if(t instanceof ve){if(t.operation instanceof fe)return ze(t.operation,e,i),!0;if(t.operation instanceof we)return He(t.operation,e,i),!0;if(t.operation instanceof _e)return Ne(t.operation,e,i),!0}return!1}function ze(t,e,i=!1){const o=i?-1:1,n=At(o*t.dx,o*t.dy,o*t.dz);Ft(e.origin,e.origin,n),L(e)}function He(t,e,i=!1){const o=i?-t.angle:t.angle;rt(e.basis1,e.basis1,at,o),rt(e.basis2,e.basis2,at,o),L(e)}function Ne(t,e,i=!1){const o=i?1/t.factor1:t.factor1,n=i?1/t.factor2:t.factor2;lt(e.basis1,e.basis1,o),lt(e.basis2,e.basis2,n),yt(e.origin,e.origin,t.origin,t.axis1,o),yt(e.origin,e.origin,t.origin,t.axis2,n),L(e)}function wi(t,e,i,o){o||(o=ge());const n=I(G.get(),t[1],-t[0]),a=I(G.get(),Number.POSITIVE_INFINITY,Number.POSITIVE_INFINITY),l=I(G.get(),Number.NEGATIVE_INFINITY,Number.NEGATIVE_INFINITY),h=G.get();e.components.forEach(y=>y.vertices.forEach(({pos:w})=>{I(h,ht(t,w),ht(n,w)),ue(a,a,h),ye(l,l,h)}));const u=1e-6,p=I(G.get(),l[0]-a[0]<u?i/2:0,l[1]-a[1]<u?i/2:0);return me(a,a,p),J(l,l,p),ut(o.basis1,t,(l[0]-a[0])/2),ut(o.basis2,n,(l[1]-a[1])/2),I(o.origin,a[0]*t[0]+a[1]*n[0],a[0]*t[1]+a[1]*n[1]),J(o.origin,o.origin,o.basis1),J(o.origin,o.origin,o.basis2),L(o),o}export{c as E,gi as F,wi as a,fi as b,vi as d};
