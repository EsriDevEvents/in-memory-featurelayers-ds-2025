import{b as v}from"./index-22d8619e-w6z8gV_r.js";import{s as L,g as b}from"./index-80b25649-68xUsn4R.js";/*!
 * All material copyright Esri, All Rights Reserved, unless otherwise specified.
 * See https://js.arcgis.com/4.30/esri/copyright.txt for details.
 * v4.30.4
 */var C=l=>v(l),d=l=>({blocking:t=!1,name:s}={})=>v((e,r)=>{if(r.onLifecycle(()=>L(e.el,l("./assets"),({t9nLocale:n,t9nStrings:o,lang:g})=>{r.exports={...o,_lang:g,_t9nLocale:n};const c=o.componentLabel??o.widgetLabel;typeof c=="string"&&"label"in e&&e.label==null&&(e.label??(e.label=c))},s)),t)return r.ready;const a=b(e.el);return{_lang:a.lang,_t9nLocale:a.t9nLocale}}),y=l=>m,i="arcgisPropertyChange",m=(...l)=>v((t,s)=>{const e=t;t.manager.isLit&&(e[i]={emit:a=>{const n=new CustomEvent(i,{detail:a,cancelable:!0});return t.el.dispatchEvent(n),n}});const r=e[i];return s.onLoad(()=>s.onLifecycle(()=>l.map(a=>t.manager.watch(a,()=>r.emit({name:a}))))),r});export{C as l,d as m,y as u};
