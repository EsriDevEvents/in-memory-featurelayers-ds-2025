import{J as c,cc as k,cd as u,ce as d,cf as m,cg as i,ch as l}from"./index-Dv-JqQDv.js";const C=new c(k),e=new c(u),n=new c(d),h=new c(m);function x(t){const f=r.get(t);if(f)return f;let s=C;if(t)if(t===e)s=e;else if(t===n)s=n;else{const a=t.wkid,o=t.latestWkid;if(a!=null||o!=null)i(a)||i(o)?s=e:(l(a)||l(o))&&(s=n);else{const p=t.wkt2??t.wkt;if(p){const w=p.toUpperCase();w===U?s=e:w===g&&(s=n)}}}return r.set(t,s),s}const r=new Map,U=e.wkt.toUpperCase(),g=n.wkt.toUpperCase();export{x as a,n as f,e as l,h as w};
