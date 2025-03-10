import{hd as b,he as y,hf as v,hg as C,i_ as s,i$ as c,hy as E,ho as w,hp as L,hq as k,ht as T,hu as A,hs as S,hm as G,hl as P,hn as H,hz as M,hv as a,j0 as O,hw as z,j1 as D,hG as $,hH as F,iF as _,iD as q,iB as j}from"./index-Dv-JqQDv.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const l={actionGroupEnd:"action-group--end",container:"container"},B={expandTooltip:"expand-tooltip"},R=":host{box-sizing:border-box;background-color:var(--calcite-color-foreground-1);color:var(--calcite-color-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:host{display:block}@keyframes in{0%{opacity:0}100%{opacity:1}}:host{animation:in var(--calcite-internal-animation-timing-slow) ease-in-out;border-radius:0.125rem;--calcite-action-pad-expanded-max-width:auto;background:transparent}:host([expanded][layout=vertical]) .container{max-inline-size:var(--calcite-action-pad-expanded-max-width)}::slotted(calcite-action-group){border-width:0px;border-block-end-width:1px;border-style:solid;border-color:var(--calcite-color-border-3);padding-block:0px}.container{display:inline-flex;flex-direction:column;overflow-y:auto;border-radius:0.25rem;background-color:var(--calcite-color-background);--tw-shadow:0 6px 20px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.08);--tw-shadow-colored:0 6px 20px -4px var(--tw-shadow-color), 0 4px 12px -2px var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}.action-group--bottom{flex-grow:1;justify-content:flex-end;padding-block-end:0px}:host([layout=horizontal]) .container{flex-direction:row}:host([layout=horizontal]) .container .action-group--bottom{padding:0px}:host([layout=horizontal]) .container ::slotted(calcite-action-group){border-width:0px;padding:0px;border-inline-end-width:1px}::slotted(calcite-action-group:last-child){border-block-end-width:0px}:host([hidden]){display:none}[hidden]{display:none}",U=R,d=b(class extends y{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteActionPadToggle=v(this,"calciteActionPadToggle",6),this.mutationObserver=C("mutation",()=>this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))),this.actionMenuOpenHandler=e=>{if(e.target.menuOpen){const o=e.composedPath();Array.from(this.el.querySelectorAll("calcite-action-group")).forEach(t=>{o.includes(t)||(t.menuOpen=!1)})}},this.toggleExpand=()=>{this.expanded=!this.expanded,this.calciteActionPadToggle.emit()},this.setExpandToggleRef=e=>{this.expandToggleEl=e},this.handleDefaultSlotChange=e=>{const o=s(e).filter(t=>t==null?void 0:t.matches("calcite-action-group"));this.setGroupLayout(o)},this.handleTooltipSlotChange=e=>{const o=s(e).filter(t=>t==null?void 0:t.matches("calcite-tooltip"));this.expandTooltip=o[0]},this.actionsEndGroupLabel=void 0,this.expandDisabled=!1,this.expanded=!1,this.layout="vertical",this.position=void 0,this.scale=void 0,this.messages=void 0,this.messageOverrides=void 0,this.overlayPositioning="absolute",this.expandTooltip=void 0,this.effectiveLocale="",this.defaultMessages=void 0}expandedHandler(e){c({el:this.el,expanded:e})}layoutHandler(){this.updateGroups()}onMessagesChange(){}effectiveLocaleChange(){E(this,this.effectiveLocale)}connectedCallback(){w(this),L(this),k(this)}disconnectedCallback(){T(this),A(this),S(this)}async componentWillLoad(){G(this);const{el:e,expanded:o}=this;c({el:e,expanded:o}),await P(this)}componentDidLoad(){H(this)}async setFocus(){var e;await M(this),(e=this.el)==null||e.focus()}updateGroups(){this.setGroupLayout(Array.from(this.el.querySelectorAll("calcite-action-group")))}setGroupLayout(e){e.forEach(o=>o.layout=this.layout)}renderBottomActionGroup(){const{expanded:e,expandDisabled:o,messages:t,el:h,position:u,toggleExpand:g,scale:n,layout:f,actionsEndGroupLabel:x,overlayPositioning:m}=this,i=o?null:a(O,{collapseLabel:t.collapseLabel,collapseText:t.collapse,el:h,expandLabel:t.expandLabel,expandText:t.expand,expanded:e,position:u,ref:this.setExpandToggleRef,scale:n,toggle:g,tooltip:this.expandTooltip});return i?a("calcite-action-group",{class:l.actionGroupEnd,label:x,layout:f,overlayPositioning:m,scale:n},a("slot",{name:B.expandTooltip,onSlotchange:this.handleTooltipSlotChange}),i):null}render(){return a(z,{key:"5bbd7e4402b9d4f0a319c7c8fe98ce20a9646d89",onCalciteActionMenuOpen:this.actionMenuOpenHandler},a("div",{key:"7757b0e8e4b47eacd05fd99a74d564ff855c157d",class:l.container},a("slot",{key:"2d9e826255494320a4c374282fa8b0c59ed26ddd",onSlotchange:this.handleDefaultSlotChange}),this.renderBottomActionGroup()))}static get delegatesFocus(){return!0}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{expanded:["expandedHandler"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return U}},[17,"calcite-action-pad",{actionsEndGroupLabel:[1,"actions-end-group-label"],expandDisabled:[516,"expand-disabled"],expanded:[1540],layout:[513],position:[513],scale:[513],messages:[1040],messageOverrides:[1040],overlayPositioning:[513,"overlay-positioning"],expandTooltip:[32],effectiveLocale:[32],defaultMessages:[32],setFocus:[64]},void 0,{expanded:["expandedHandler"],layout:["layoutHandler"],messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}]);function r(){if(typeof customElements>"u")return;["calcite-action-pad","calcite-action","calcite-action-group","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover"].forEach(e=>{switch(e){case"calcite-action-pad":customElements.get(e)||customElements.define(e,d);break;case"calcite-action":customElements.get(e)||j();break;case"calcite-action-group":customElements.get(e)||q();break;case"calcite-action-menu":customElements.get(e)||_();break;case"calcite-icon":customElements.get(e)||F();break;case"calcite-loader":customElements.get(e)||$();break;case"calcite-popover":customElements.get(e)||D();break}})}r();const J=d,K=r;export{J as CalciteActionPad,K as defineCustomElement};
