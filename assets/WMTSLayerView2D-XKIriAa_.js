import{a0 as n,br as c,G as _,j as u,y as w,P as g}from"./index-Dv-JqQDv.js";import{r as I,n as f}from"./imageUtils-BhEmmYws.js";import{f as S}from"./LayerView2D-Ulqog2NM.js";import{h as T,m as V,r as v}from"./TileStrategy-Bm9AEGL5.js";import{e as d}from"./TileKey-DixmkgbB.js";import{y as x}from"./LayerView-6INZgiuX.js";import{i as M}from"./RefreshableLayerView-BkpnzSC-.js";import"./DefaultUI-BWAdHYa0.js";import"./jsxFactory-C3RLkrq9.js";import"./UpdatingHandles-C0Kh7aEt.js";import"./InputManager-BwD1PEf3.js";import"./signal-0tlktF45.js";import"./Map-DV4_DU8O.js";import"./Ground-DpNOewuO.js";import"./CollectionFlattener-73Uag1LF.js";import"./editableLayers-V9yr_aA-.js";import"./catalogUtils-CiWgGrdS.js";import"./TablesMixin-BFT6ikAR.js";import"./GraphicsCollection-DlcRCtU0.js";import"./ReactiveMap-DxvIcNmk.js";import"./selectionUtils-DYi6daQO.js";import"./IViewEvents-Bci6PjlS.js";import"./interfaces-D6pIddIh.js";import"./screenUtils-DKZWDFXK.js";import"./a11yUtils-DW8v-NB5.js";import"./heightModelInfoUtils-DQiO1_HQ.js";import"./ViewingMode-Dodu7ZZk.js";import"./capabilities-C84AMSCg.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-CEs_6QlQ.js";import"./Compass-DBSyeZOs.js";import"./utils-DsJqvptN.js";import"./GoTo-BCG1WN4R.js";import"./NavigationToggle-CRz1xlJz.js";import"./Zoom-C6srvgaZ.js";import"./Bitmap-B9B0VE0s.js";import"./mat3-B7LiNcRs.js";import"./vec2f32-BbH2jxlN.js";import"./DisplayObject-NwP1D55U.js";import"./enums-BlUEVwJR.js";import"./Texture-BsiXXqc8.js";import"./DefaultVertexAttributeLayouts-BaFfZuup.js";import"./VertexElementDescriptor-BOD-G50G.js";import"./WGLContainer-m5Dqdi-d.js";import"./definitions-ByNBSgP9.js";import"./LabelMetric-CSrxjJk_.js";import"./enums-BRXbslMp.js";import"./Program-By3cM00b.js";import"./BufferObject-Dhco7AlX.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./BoundingBox-BhuXqU4L.js";import"./VertexArrayObject-Czm05pt7.js";import"./WGLBrushVTLSymbol-Hhd0CFGx.js";import"./vec4f32-CjrfB-0a.js";import"./StyleDefinition-BK3ROBTO.js";import"./config-MDUrh2eL.js";import"./ShaderCompiler-G2XYGDs6.js";import"./ProgramTemplate-DUy4DuxJ.js";import"./mat2df32-orApM5a3.js";import"./mat2d-C6u6dH6d.js";import"./vec3f32-Cw9Q6TO_.js";import"./Container-BCZInv5n.js";import"./EffectView-D358IIvW.js";import"./highlightReasons-Bl95o-z6.js";import"./Tile-BD3hIcqg.js";import"./quickselect-D0_cvEX6.js";import"./earcut-BqgeR2O3.js";import"./vec2-DGogPjh1.js";import"./vec2f64-Diu2Kaa8.js";import"./MapView-BeVtHZG4.js";import"./Viewpoint-kowK2Ox4.js";import"./Cyclical-L5YKfO29.js";import"./TileInfo-Dsgw3bLM.js";import"./TileKey-DZd6gJy7.js";import"./viewpointUtils-CBa44EU3.js";import"./mat2df64-CBKYtunK.js";import"./unitBezier-BX6NeAEr.js";import"./utils-CXgSw6Sd.js";import"./ColorBackground-DO2jUIHL.js";import"./TileContainer-DO1c6A5U.js";import"./ClipRect-C_x5PYDD.js";import"./layerViewUtils-D2JqIDZ8.js";import"./QueueProcessor-DHxW4yaI.js";const q=new Set([102113,102100,3857,3785,900913]),b=[0,0];let a=class extends M(I(S(x))){constructor(){super(...arguments),this._tileStrategy=null,this._fetchQueue=null,this.layer=null}get tileMatrixSet(){const t=this._getTileMatrixSetBySpatialReference(this.layer.activeLayer);return t?(t.id!==this.layer.activeLayer.tileMatrixSetId&&(this.layer.activeLayer.tileMatrixSetId=t.id),t):null}update(t){this._fetchQueue.pause(),this._fetchQueue.state=t.state,this._tileStrategy.update(t),this._fetchQueue.resume()}attach(){var e;const t=(e=this.tileMatrixSet)==null?void 0:e.tileInfo;t&&(this._tileInfoView=new T(t),this._fetchQueue=new V({tileInfoView:this._tileInfoView,concurrency:16,process:(i,r)=>this.fetchTile(i,r)}),this._tileStrategy=new v({cachePolicy:"keep",resampling:!0,acquireTile:i=>this.acquireTile(i),releaseTile:i=>this.releaseTile(i),tileInfoView:this._tileInfoView}),this.addAttachHandles(this._updatingHandles.add(()=>{var i,r;return[(r=(i=this.layer)==null?void 0:i.activeLayer)==null?void 0:r.styleId,this.tileMatrixSet]},()=>this.doRefresh())),super.attach())}detach(){var t,e;super.detach(),(t=this._tileStrategy)==null||t.destroy(),(e=this._fetchQueue)==null||e.destroy(),this._fetchQueue=this._tileStrategy=this._tileInfoView=null}viewChange(){this.requestUpdate()}moveEnd(){this.requestUpdate()}supportsSpatialReference(t){var e;return((e=this.layer.activeLayer.tileMatrixSets)==null?void 0:e.some(i=>{var r;return n((r=i.tileInfo)==null?void 0:r.spatialReference,t)}))??!1}async doRefresh(){if(this.attached){if(this.suspended)return this._tileStrategy.clear(),void this.requestUpdate();this._fetchQueue.reset(),this._tileStrategy.refresh(t=>this._updatingHandles.addPromise(this._enqueueTileFetch(t)))}}acquireTile(t){const e=this._bitmapView.createTile(t),i=e.bitmap;return[i.x,i.y]=this._tileInfoView.getTileCoords(b,e.key),i.resolution=this._tileInfoView.getTileResolution(e.key),[i.width,i.height]=this._tileInfoView.tileInfo.size,this._updatingHandles.addPromise(this._enqueueTileFetch(e)),this._bitmapView.addChild(e),this.requestUpdate(),e}releaseTile(t){this._fetchQueue.abort(t.key.id),this._bitmapView.removeChild(t),t.once("detach",()=>t.destroy()),this.requestUpdate()}async fetchTile(t,e={}){const i="tilemapCache"in this.layer?this.layer.tilemapCache:null,{signal:r,resamplingLevel:s=0}=e;if(!i)return this._fetchImage(t,r);const o=new d(0,0,0,0);let p;try{await i.fetchAvailabilityUpsample(t.level,t.row,t.col,o,{signal:r}),p=await this._fetchImage(o,r)}catch(l){if(c(l))throw l;if(s<3){const h=this._tileInfoView.getTileParentId(t.id);if(h){const m=new d(h),y=await this.fetchTile(m,{...e,resamplingLevel:s+1});return f(this._tileInfoView,y,m,t)}}throw l}return f(this._tileInfoView,p,o,t)}canResume(){const t=super.canResume();return t&&this.tileMatrixSet!==null}async _enqueueTileFetch(t){if(!this._fetchQueue.has(t.key.id)){try{const e=await this._fetchQueue.push(t.key);t.bitmap.source=e,t.bitmap.width=this._tileInfoView.tileInfo.size[0],t.bitmap.height=this._tileInfoView.tileInfo.size[1],t.once("attach",()=>this.requestUpdate())}catch(e){c(e)||_.getLogger(this).error(e)}this.requestUpdate()}}async _fetchImage(t,e){return this.layer.fetchImageBitmapTile(t.level,t.row,t.col,{signal:e})}_getTileMatrixSetBySpatialReference(t){const e=this.view.spatialReference;if(!t.tileMatrixSets)return null;let i=t.tileMatrixSets.find(r=>{var s;return n((s=r.tileInfo)==null?void 0:s.spatialReference,e)});return!i&&e.isWebMercator&&(i=t.tileMatrixSets.find(r=>{var s;return q.has(((s=r.tileInfo)==null?void 0:s.spatialReference.wkid)??-1)})),i}};u([w({readOnly:!0})],a.prototype,"tileMatrixSet",null),a=u([g("esri.views.2d.layers.WMTSLayerView2D")],a);const ae=a;export{ae as default};
