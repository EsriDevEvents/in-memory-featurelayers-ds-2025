import{j as t,y as r,P as l,bt as d,gc as h,X as p}from"./index-Dv-JqQDv.js";import{g as c,a as g}from"./heightModelInfoUtils-DQiO1_HQ.js";const y=n=>{let e=class extends n{constructor(){super(...arguments),this.slicePlaneEnabled=!1,this.supportsHeightUnitConversion=!1}postscript(){super.postscript(),c(this.layer)&&this.addResolvingPromise(this._validateHeightModelInfo())}async _validateHeightModelInfo(){const s=new AbortController,i=s.signal;this.addHandles(d(()=>s.abort())),await h(()=>{var a;return(a=this.view.defaultsFromMap)==null?void 0:a.heightModelInfoReady},i),p(i);const o=g(this.layer,this.view.heightModelInfo,this.supportsHeightUnitConversion);if(o)throw o}};return t([r()],e.prototype,"view",void 0),t([r()],e.prototype,"slicePlaneEnabled",void 0),e=t([l("esri.views.3d.layers.LayerView3D")],e),e};export{y as l};
