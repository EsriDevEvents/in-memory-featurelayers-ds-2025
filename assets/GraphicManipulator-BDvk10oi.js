import{jI as u,b_ as x,ff as G,bN as w,o as D,cv as z,lG as I,fS as f,a2 as M,dF as E,fE as H,j as a,y as n,P as L,ad as j,fC as k}from"./index-Dv-JqQDv.js";import{b as _}from"./vec2-DGogPjh1.js";import{c as N}from"./projectPointToVector-ARkh6gdu.js";import{l as O}from"./elevationInfoUtils-Cey9W7Lb.js";import{i as R}from"./drapedUtils-nWPHxHp9.js";function X(e){let s=0,i=0,t=0;return e?(e.type==="cim"&&e.data.symbol&&"symbolLayers"in e.data.symbol&&e.data.symbol.symbolLayers&&e.data.symbol.symbolLayers.map(l=>{l.type==="CIMVectorMarker"&&l.anchorPoint&&(Math.abs(l.anchorPoint.x)>s&&(s=l.anchorPoint.x),Math.abs(l.anchorPoint.y)>i&&(i=l.anchorPoint.y),l.size!=null&&l.size>t&&(t=l.size))}),s=u(s),i=u(i),t=u(t),{offsetX:s,offsetY:i,size:t}):{offsetX:s,offsetY:i,size:t}}let o=class extends x{set graphic(e){this._circleCollisionCache=null,this._originalSymbol=e.symbol,this._set("graphic",e),this.attachSymbolChanged()}get elevationInfo(){const{layer:e}=this.graphic,s=e&&"elevationInfo"in e?e.elevationInfo:null,i=O(this.graphic),t=s?s.offset:0;return new G({mode:i,offset:t})}set focusedSymbol(e){e!==this._get("focusedSymbol")&&(this._set("focusedSymbol",e),this._updateGraphicSymbol(),this._circleCollisionCache=null)}grabbableForEvent(){return!0}set grabbing(e){e!==this._get("grabbing")&&(this._set("grabbing",e),this._updateGraphicSymbol())}set hovering(e){e!==this._get("hovering")&&(this._set("hovering",e),this._updateGraphicSymbol())}set selected(e){e!==this._get("selected")&&(this._set("selected",e),this._updateGraphicSymbol(),this.events.emit("select-changed",{action:e?"select":"deselect"}))}get _focused(){return this._get("hovering")||this._get("grabbing")}constructor(e){super(e),this.layer=null,this.interactive=!0,this.selectable=!1,this.grabbable=!0,this.dragging=!1,this.cursor=null,this.consumesClicks=!0,this.events=new w.EventEmitter,this._circleCollisionCache=null,this._graphicSymbolChangedHandle=null,this._originalSymbol=null}destroy(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this._set("view",null)}intersectionDistance(e){const s=this.graphic;if(s.visible===!1)return null;const i=s.geometry;if(i==null)return null;const t=this._get("focusedSymbol"),l=t??s.symbol;return this.view.type==="2d"?this._intersectDistance2D(this.view,e,i,l):this._intersectDistance3D(this.view,e,s)}attach(){this.attachSymbolChanged(),this.layer!=null&&this.layer.add(this.graphic)}detach(){this.detachSymbolChanged(),this._resetGraphicSymbol(),this.layer!=null&&this.layer.remove(this.graphic)}attachSymbolChanged(){this.detachSymbolChanged(),this._graphicSymbolChangedHandle=D(()=>{var e;return(e=this.graphic)==null?void 0:e.symbol},e=>{e!=null&&e!==this.focusedSymbol&&e!==this._originalSymbol&&(this._originalSymbol=e,this._focused&&this.focusedSymbol!=null&&(this.graphic.symbol=this.focusedSymbol))},z)}detachSymbolChanged(){this._graphicSymbolChangedHandle!=null&&(this._graphicSymbolChangedHandle.remove(),this._graphicSymbolChangedHandle=null)}onElevationChange(){}onViewChange(){}_updateGraphicSymbol(){this.graphic.symbol=this._focused&&this.focusedSymbol!=null?this.focusedSymbol:this._originalSymbol}_resetGraphicSymbol(){this.graphic.symbol=this._originalSymbol}_intersectDistance2D(e,s,i,t){var m,d;if((t=t||I(i))==null)return null;const l=1;let h=this._circleCollisionCache;if(i.type==="point"&&t.type==="cim"&&((m=t.data.symbol)==null?void 0:m.type)==="CIMPointSymbol"&&t.data.symbol.symbolLayers){const{offsetX:c,offsetY:r,size:y}=X(t),b=f(s,v),p=y/2,g=e.toScreen(i),C=g.x+c,P=g.y+r;return _(b,[C,P])<p*p?l:null}if(i.type!=="point"||t.type!=="simple-marker")return R(s,i,e)?l:null;if(h==null||!h.originalPoint.equals(i)){const c=i,r=e.spatialReference;if(M(c.spatialReference,r)){const y=E(c,r);h={originalPoint:c.clone(),mapPoint:y,radiusPx:u(t.size)},this._circleCollisionCache=h}}if(h!=null){const c=f(s,v),r=(d=e.toScreen)==null?void 0:d.call(e,h.mapPoint);if(!r)return null;const y=h.radiusPx,b=r.x+u(t.xoffset),p=r.y-u(t.yoffset);return _(c,[b,p])<y*y?l:null}return null}_intersectDistance3D(e,s,i){const t=e.toMap(s,{include:[i]});return t&&N(t,S,e.renderSpatialReference)?H(S,e.state.camera.eye):null}};a([n({constructOnly:!0,nonNullable:!0})],o.prototype,"graphic",null),a([n()],o.prototype,"elevationInfo",null),a([n({constructOnly:!0,nonNullable:!0})],o.prototype,"view",void 0),a([n({value:null})],o.prototype,"focusedSymbol",null),a([n({constructOnly:!0})],o.prototype,"layer",void 0),a([n()],o.prototype,"interactive",void 0),a([n()],o.prototype,"selectable",void 0),a([n()],o.prototype,"grabbable",void 0),a([n({value:!1})],o.prototype,"grabbing",null),a([n()],o.prototype,"dragging",void 0),a([n()],o.prototype,"hovering",null),a([n({value:!1})],o.prototype,"selected",null),a([n()],o.prototype,"cursor",void 0),o=a([L("esri.views.interactive.GraphicManipulator")],o);const S=j(),v=k();export{o as S,X as s};
