import{s as N,bu as C,C as D,I as u,bv as d,bw as U,bx as P,by as j,bz as x,bA as E,bB as h,bC as S,bD as F,bE as I}from"./index-Dv-JqQDv.js";import{c as R,a as w}from"./devEnvironmentUtils-D6qIi8Ky.js";function k(e,t,l,a){const n=e.name;return n==null?Promise.reject(new N("symbolstyleutils:style-symbol-reference-name-missing","Missing name in style symbol reference")):e.styleName&&e.styleName==="Esri2DPointSymbolsStyle"?M(n,t,a):C(e,t,a).then(s=>B(s,n,t,l,I,a))}function z(e,t){return t.items.find(l=>l.name===e)}function B(e,t,l,a,n,s){var c,g;const o=(l==null?void 0:l.portal)!=null?l.portal:D.getDefault(),p={portal:o,url:u(e.baseUrl),origin:"portal-item"},m=z(t,e.data);if(!m){const y=`The symbol name '${t}' could not be found`;return Promise.reject(new N("symbolstyleutils:symbol-name-not-found",y,{symbolName:t}))}let i=d(n(m,a),p),b=((c=m.thumbnail)==null?void 0:c.href)??null;const f=(g=m.thumbnail)==null?void 0:g.imageData;R()&&(i=w(i)??"",b=w(b));const O={portal:o,url:u(U(i)),origin:"portal-item"};return P(i,s).then(y=>{const v=a==="cimRef"?j(y.data):y.data,r=x(v,O);if(r&&E(r)){if(b){const A=d(b,p);r.thumbnail=new h({url:A})}else f&&(r.thumbnail=new h({url:`data:image/png;base64,${f}`}));e.styleUrl?r.styleOrigin=new S({portal:l.portal,styleUrl:e.styleUrl,name:t}):e.styleName&&(r.styleOrigin=new S({portal:l.portal,styleName:e.styleName,name:t}))}return r})}function M(e,t,l){const a=F.replaceAll(/\{SymbolName\}/gi,e),n=t.portal!=null?t.portal:D.getDefault();return P(a,l).then(s=>{const o=j(s.data);return x(o,{portal:n,url:u(U(a)),origin:"portal-item"})})}export{B as fetchSymbolFromStyle,z as getStyleItemFromStyle,k as resolveWebStyleSymbol};
