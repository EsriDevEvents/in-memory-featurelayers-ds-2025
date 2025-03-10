import{hd as s,he as l,jb as o,hv as t,hw as d,jX as r}from"./index-Dv-JqQDv.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const i={container:"container",content:"content"},b=`:host([selected]) section,:host([selected]) .container{display:block}:host{display:none;block-size:100%;inline-size:100%}:host([selected]){display:block;block-size:100%;inline-size:100%;overflow:auto}.content{box-sizing:border-box;padding-block:var(--calcite-internal-tab-content-block-padding)}.scale-s{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.25rem);font-size:var(--calcite-font-size--2);line-height:1rem}.scale-m{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.5rem);font-size:var(--calcite-font-size--1);line-height:1rem}.scale-l{--calcite-internal-tab-content-block-padding:var(--calcite-tab-content-block-padding, 0.625rem);font-size:var(--calcite-font-size-0);line-height:1.25rem}section,.container{display:none;block-size:100%;inline-size:100%}.container{outline-color:transparent}.container:focus{outline:2px solid var(--calcite-ui-focus-color, var(--calcite-color-brand));outline-offset:calc(
            -2px *
            calc(
              1 -
              2 * clamp(
                0,
                var(--calcite-offset-invert-focus),
                1
              )
            )
          )}:host([hidden]){display:none}[hidden]{display:none}`,h=b,f=s(class extends l{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.guid=`calcite-tab-title-${o()}`,this.tab=void 0,this.selected=!1,this.scale="m",this.labeledBy=void 0}render(){const e=this.el.id||this.guid;return t(d,{key:"03e398db2023e422338659deb076c6e6c63cd866","aria-labelledby":this.labeledBy,id:e},t("div",{key:"371846888e92a0791d2a5a725d1525808241132e",class:{[i.container]:!0,[`scale-${this.scale}`]:!0},role:"tabpanel",tabIndex:this.selected?0:-1},t("section",{key:"48e3af2254269734886ed512dc3577dfafed52fa",class:i.content},t("slot",{key:"e25dd14ed3972ed4b488f7abb07484cf5e48681f"}))))}connectedCallback(){this.parentTabsEl=this.el.closest("calcite-tabs")}disconnectedCallback(){var e;(e=document.body)==null||e.dispatchEvent(new CustomEvent("calciteTabUnregister",{detail:this.el}))}internalTabChangeHandler(e){e.composedPath().find(a=>a.tagName==="CALCITE-TABS")===this.parentTabsEl&&(this.tab?this.selected=this.tab===e.detail.tab:this.getTabIndex().then(a=>{this.selected=a===e.detail.tab}),e.stopPropagation())}async getTabIndex(){return Array.prototype.indexOf.call(r(this.el.parentElement.children).filter(e=>e.matches("calcite-tab")),this.el)}async updateAriaInfo(e=[],n=[]){this.labeledBy=n[e.indexOf(this.el.id)]||null}get el(){return this}static get style(){return h}},[1,"calcite-tab",{tab:[513],selected:[1540],scale:[1],labeledBy:[32],getTabIndex:[64],updateAriaInfo:[64]},[[16,"calciteInternalTabChange","internalTabChangeHandler"]]]);function p(){if(typeof customElements>"u")return;["calcite-tab"].forEach(e=>{switch(e){case"calcite-tab":customElements.get(e)||customElements.define(e,f);break}})}p();export{f as T,p as d};
