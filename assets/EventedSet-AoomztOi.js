import{bN as i,i8 as h,i9 as r}from"./index-Dv-JqQDv.js";import{r as a}from"./signal-0tlktF45.js";class c extends i{constructor(){super(...arguments),this._set=new Set,this._length=a(0)}clear(){if(this._set.size>0){const e=this.toArray();this._set.clear(),this.emit("after-changes",{type:h.REMOVE}),this.emit("change",{added:[],removed:e})}}get length(){return this._length.value}addMany(e){if(e.length!==0){for(const t of e)this._set.add(t);this._length.value=this._set.size,this.emit("after-changes",{type:h.ADD}),this.emit("change",{added:e,removed:[]})}}remove(e){this._set.delete(e)&&(this._length.value=this._set.size,this.emit("after-changes",{type:h.REMOVE}),this.emit("change",{added:[],removed:[e]}))}removeMany(e){const t=[];for(const s of e)this._set.delete(s)&&t.push(s);t.length>0&&(this._length.value=this._set.size,this.emit("after-changes",{type:h.REMOVE}),this.emit("change",{added:[],removed:t}))}toArray(){return[...this._set]}find(e){let t;return r(this._set,s=>!!e(s)&&(t=s,!0)),t}forEach(e){this._set.forEach(t=>e(t))}}export{c as h};
