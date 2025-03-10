import{l as b}from"./CollectionFlattener-73Uag1LF.js";import{j as d,y as p,P as u,ar as f,G as l,eX as c,bp as m,da as g}from"./index-Dv-JqQDv.js";function L(i){return new b({getCollections:()=>[i.tables,i.layers],getChildrenFunction:r=>{const a=[];return"tables"in r&&a.push(r.tables),"layers"in r&&a.push(r.layers),a},itemFilterFunction:r=>{const a=r.parent;return!!a&&"tables"in a&&a.tables.includes(r)}})}function x(i){for(const r of i.values())r==null||r.destroy();i.clear()}function y(i,r,a){let e,t;if(i)for(let n=0,o=i.length;n<o;n++){if(e=i.at(n),(e==null?void 0:e[r])===a)return e;if((e==null?void 0:e.type)==="group"&&(t=y(e.layers,r,a),t))return t}}const A=i=>{let r=class extends i{constructor(...e){super(...e),this.layers=new f;const t=s=>{s.parent&&"remove"in s.parent&&s.parent.remove(s)},n=s=>{s.parent=this,this.layerAdded(s),s.type!=="elevation"&&s.type!=="base-elevation"||l.getLogger(this).error(`Layer 'title:${s.title}, id:${s.id}' of type '${s.type}' is not supported as an operational layer and will therefore be ignored.`)},o=s=>{s.parent=null,this.layerRemoved(s)};this.addHandles([this.layers.on("before-add",s=>{if(s.item===this)return s.preventDefault(),void l.getLogger(this).error("#add()","Cannot add layer to itself.");t(s.item)}),this.layers.on("after-add",s=>n(s.item)),this.layers.on("after-remove",s=>o(s.item))])}destroy(){const e=this.layers.toArray();for(const t of e)t.destroy();this.layers.destroy()}set layers(e){this._set("layers",c(e,this._get("layers")))}add(e,t){const n=this.layers;if(t=n.getNextIndex(t),e instanceof m){const o=e;o.parent===this?this.reorder(o,t):n.add(o,t)}else g(e)?e.then(o=>{this.destroyed||this.add(o,t)}):l.getLogger(this).error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")}addMany(e,t){const n=this.layers;let o=n.getNextIndex(t);e.slice().forEach(s=>{s.parent!==this?(n.add(s,o),o+=1):this.reorder(s,o)})}findLayerById(e){return y(this.layers,"id",e)}findLayerByUid(e){return y(this.layers,"uid",e)}remove(e){return this.layers.remove(e)}removeMany(e){return this.layers.removeMany(e)}removeAll(){return this.layers.removeAll()}reorder(e,t){return this.layers.reorder(e,t)}layerAdded(e){}layerRemoved(e){}};return d([p()],r.prototype,"layers",null),r=d([u("esri.support.LayersMixin")],r),r};function h(i,r,a){if(i)for(let e=0,t=i.length;e<t;e++){const n=i.at(e);if(n[r]===a)return n;if((n==null?void 0:n.type)==="group"){const o=h(n.tables,r,a);if(o)return o}}}const M=i=>{let r=class extends i{constructor(...a){super(...a),this.tables=new f,this.addHandles([this.tables.on("after-add",e=>{const t=e.item;t.parent&&t.parent!==this&&"tables"in t.parent&&t.parent.tables.remove(t),t.parent=this,t.type!=="feature"&&l.getLogger(this).error(`Layer 'title:${t.title}, id:${t.id}' of type '${t.type}' is not supported as a table and will therefore be ignored.`)}),this.tables.on("after-remove",e=>{e.item.parent=null})])}destroy(){const a=this.tables.toArray();for(const e of a)e.destroy();this.tables.destroy()}set tables(a){this._set("tables",c(a,this._get("tables")))}findTableById(a){return h(this.tables,"id",a)}findTableByUid(a){return h(this.tables,"uid",a)}};return d([p()],r.prototype,"tables",null),r=d([u("esri.support.TablesMixin")],r),r};export{x as a,A as l,M as n,L as t};
