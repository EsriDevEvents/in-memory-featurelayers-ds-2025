const __vite__fileDeps=["./gif-DjCPHaUT.js","./index-Dv-JqQDv.js","./index-CejX7rzk.css","./apng-DqvO2elv.js","./_commonjsHelpers-DCkdB7M8.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as u,ap as d,e1 as p,U as f,br as w,s as y}from"./index-Dv-JqQDv.js";let i=null,s=!0;function T(n,a,t){if(!n||!a)throw new Error("Cannot construct image data without dimensions");if(s)try{return new ImageData(n,a)}catch{s=!1}return m(n,a,t)}function E(n,a,t,e){if(!a||!t)throw new Error("Cannot construct image data without dimensions");if(s)try{return new ImageData(n,a,t)}catch{s=!1}const r=m(a,t,e);return r.data.set(n,0),r}function g(){return i||(i=document.createElement("canvas"),i.width=1,i.height=1),i}function m(n,a,t){return t||(t=g()),t.getContext("2d").createImageData(n,a)}async function h(n,a){const t=window.URL.createObjectURL(n);try{const{data:e}=await f(t,{...a,responseType:"image"});return e}catch(e){throw w(e)?e:new y("invalid-image",`Could not fetch requested image at ${t}`)}finally{window.URL.revokeObjectURL(t)}}async function b(n,a){const{arrayBuffer:t,mediaType:e}=await _(n,a),r=e==="image/png";if(e==="image/gif"){const{isAnimatedGIF:o,parseGif:c}=await u(()=>import("./gif-DjCPHaUT.js"),__vite__mapDeps([0,1,2]),import.meta.url);if(o(t))return c(t,a)}if(r){const{isAnimatedPNG:o,parseApng:c}=await u(()=>import("./apng-DqvO2elv.js"),__vite__mapDeps([3,4,1,2]),import.meta.url);if(o(t))return c(t,a)}return h(new Blob([t],{type:e}),a)}async function _(n,a){var r;const t=d(n);if(t!=null&&t.isBase64)return{arrayBuffer:p(t.data),mediaType:t.mediaType};const e=await f(n,{responseType:"array-buffer",...a});return{arrayBuffer:e.data,mediaType:((r=e.getHeader)==null?void 0:r.call(e,"Content-Type"))??""}}export{E as c,b as p,T as s};
