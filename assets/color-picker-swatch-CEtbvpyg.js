import{hd as k,he as f,jT as C,hv as e,jU as S,jV as h,jW as d}from"./index-Dv-JqQDv.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-design-system/blob/dev/LICENSE.md for details.
 * v2.11.1
 */const c={swatch:"swatch",noColorSwatch:"swatch--no-color",checker:"checker"},u={borderLight:"rgba(0, 0, 0, 0.3)",borderDark:"rgba(255, 255, 255, 0.15)"},p=4,r={squareSize:p,size:p*2},y=":host{position:relative;display:inline-flex}:host([scale=s]){block-size:1.25rem;inline-size:1.25rem}:host([scale=m]){block-size:1.5rem;inline-size:1.5rem}:host([scale=l]){block-size:2rem;inline-size:2rem}.swatch{overflow:hidden;block-size:inherit;inline-size:inherit}.swatch rect{transition-property:all;transition-duration:150ms;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.swatch--no-color rect{fill:var(--calcite-color-foreground-1)}.swatch--no-color line{stroke:var(--calcite-color-status-danger)}.checker{fill:#cacaca}:host([hidden]){display:none}[hidden]{display:none}",z=y,b=k(class extends f{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.active=!1,this.color=void 0,this.scale="m"}handleColorChange(t){this.internalColor=t?C(t):null}componentWillLoad(){this.handleColorChange(this.color)}render(){const t=!this.internalColor,i={[c.swatch]:!0,[c.noColorSwatch]:t};return e("svg",{key:"b29377be8ce0518f7b0f3691dcb1dda08890dd94",class:i,xmlns:"http://www.w3.org/2000/svg"},this.renderSwatch())}renderSwatch(){const{active:t,el:i,internalColor:o}=this,s=t?"100%":"0",m=S(i)==="light"?u.borderLight:u.borderDark,n={height:"100%",rx:s,stroke:m,"stroke-width":"2",width:"100%"};if(!o)return e(h,null,e("clipPath",{id:"shape"},e("rect",{height:"100%",rx:s,width:"100%"})),e("rect",{"clip-path":`inset(0 round ${s})`,rx:s,...n}),e("line",{"clip-path":"url(#shape)","stroke-width":"3",x1:"100%",x2:"0",y1:"0",y2:"100%"}));const l=o.alpha(),g=d(o),a=d(o,l<1);return e(h,null,e("title",null,a),e("defs",null,e("pattern",{height:r.size,id:"checker",patternUnits:"userSpaceOnUse",width:r.size,x:"0",y:"0"},e("rect",{class:c.checker,height:r.squareSize,width:r.squareSize,x:"0",y:"0"}),e("rect",{class:c.checker,height:r.squareSize,width:r.squareSize,x:r.squareSize,y:r.squareSize}))),e("rect",{fill:"url(#checker)",height:"100%",rx:s,width:"100%"}),e("rect",{fill:g,style:{"clip-path":l<1?"polygon(100% 0, 0 0, 0 100%)":`inset(0 round ${s})`},...n}),l<1?e("rect",{fill:a,key:"opacity-fill",style:{"clip-path":"polygon(100% 0, 100% 100%, 0 100%)"},...n}):null)}get el(){return this}static get watchers(){return{color:["handleColorChange"]}}static get style(){return z}},[1,"calcite-color-picker-swatch",{active:[516],color:[1],scale:[513]},void 0,{color:["handleColorChange"]}]);function x(){if(typeof customElements>"u")return;["calcite-color-picker-swatch"].forEach(t=>{switch(t){case"calcite-color-picker-swatch":customElements.get(t)||customElements.define(t,b);break}})}x();export{b as C,x as d};
