import{ar as p,eX as a,j as e,y as o,eY as m,P as s}from"./index-Dv-JqQDv.js";import{f as n}from"./LayerView2D-Ulqog2NM.js";import{y as l}from"./LayerView-6INZgiuX.js";import"./Container-BCZInv5n.js";import"./DefaultUI-BWAdHYa0.js";import"./jsxFactory-C3RLkrq9.js";import"./UpdatingHandles-C0Kh7aEt.js";import"./InputManager-BwD1PEf3.js";import"./signal-0tlktF45.js";import"./Map-DV4_DU8O.js";import"./Ground-DpNOewuO.js";import"./CollectionFlattener-73Uag1LF.js";import"./editableLayers-V9yr_aA-.js";import"./catalogUtils-CiWgGrdS.js";import"./TablesMixin-BFT6ikAR.js";import"./GraphicsCollection-DlcRCtU0.js";import"./ReactiveMap-DxvIcNmk.js";import"./selectionUtils-DYi6daQO.js";import"./IViewEvents-Bci6PjlS.js";import"./interfaces-D6pIddIh.js";import"./screenUtils-DKZWDFXK.js";import"./a11yUtils-DW8v-NB5.js";import"./heightModelInfoUtils-DQiO1_HQ.js";import"./ViewingMode-Dodu7ZZk.js";import"./capabilities-C84AMSCg.js";import"./themeUtils-C3zvZbsE.js";import"./globalCss-CZa70j6i.js";import"./accessibleHandler-CEs_6QlQ.js";import"./Compass-DBSyeZOs.js";import"./utils-DsJqvptN.js";import"./GoTo-BCG1WN4R.js";import"./NavigationToggle-CRz1xlJz.js";import"./Zoom-C6srvgaZ.js";import"./EffectView-D358IIvW.js";import"./DisplayObject-NwP1D55U.js";import"./highlightReasons-Bl95o-z6.js";import"./Tile-BD3hIcqg.js";import"./quickselect-D0_cvEX6.js";import"./_commonjsHelpers-DCkdB7M8.js";import"./TileKey-DixmkgbB.js";import"./definitions-ByNBSgP9.js";import"./enums-BlUEVwJR.js";import"./Texture-BsiXXqc8.js";import"./ClipRect-C_x5PYDD.js";import"./layerViewUtils-D2JqIDZ8.js";let r=class extends n(l){constructor(t){super(t),this.layerViews=new p}set layerViews(t){this._set("layerViews",a(t,this._get("layerViews")))}get updatingProgress(){return this.layerViews.length===0?1:this.layerViews.reduce((t,i)=>t+i.updatingProgress,0)/this.layerViews.length}attach(){this._updateStageChildren(),this.addAttachHandles(this.layerViews.on("after-changes",()=>this._updateStageChildren()))}detach(){this.container.removeAllChildren()}update(t){}viewChange(){}moveEnd(){}_updateStageChildren(){this.container.removeAllChildren(),this.layerViews.forEach((t,i)=>this.container.addChildAt(t.container,i))}};e([o({cast:m})],r.prototype,"layerViews",null),e([o({readOnly:!0})],r.prototype,"updatingProgress",null),r=e([s("esri.views.2d.layers.KnowledgeGraphLayerView2D")],r);const it=r;export{it as default};
