import{ef as $,f1 as O,eh as T,bg as P,bh as E,bi as F,bj as L,eg as M,ex as R,ew as j,F as N,eH as v,ep as g,f2 as _,f3 as J,U as f,x as U,z as q,er as A,f4 as V,s as x,br as k,j as a,y as o,f5 as S,bm as z,eu as H,bo as Z,P as B,bp as C,f6 as D}from"./index-Dv-JqQDv.js";import{m as G,f as K,t as W}from"./SublayersOwner-jHptc2tB.js";import{y as Q}from"./ExportImageParameters-D7_18ylM.js";import{t as X}from"./imageBitmapUtils-oPxcoqoO.js";import{e as I}from"./sublayerUtils-CPuB3ran.js";import"./CollectionFlattener-73Uag1LF.js";import"./QueryTask-CE4bKEHa.js";import"./executeForIds-DCQXBrc7.js";import"./floorFilterUtils-DZ5C6FQv.js";let i=class extends $(O(T(G(K(P(E(F(L(M(R(j(C)))))))))))){constructor(...e){super(...e),this._exportImageParameters=new Q({layer:this}),this.dateFieldsTimeZone=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeZone=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}load(e){const r=e!=null?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(N).then(()=>this._fetchService(r))),Promise.resolve(this)}destroy(){this._exportImageParameters.destroy()}readImageFormat(e,r){const p=r.supportedImageFormatTypes;return p&&p.includes("PNG32")?"png32":"png24"}writeSublayers(e,r,p,t){var m,d,b;if(!this.loaded||!e)return;const s=e.slice().reverse().flatten(({sublayers:l})=>l&&l.toArray().reverse()).toArray();let n=!1;const h=v(t.origin);if((m=this.capabilities)!=null&&m.operations.supportsExportMap&&((b=(d=this.capabilities)==null?void 0:d.exportMap)!=null&&b.supportsDynamicLayers)){if(h===g.PORTAL_ITEM){const l=this.createSublayersForOrigin("service").sublayers;n=I(s,l,g.SERVICE)}else if(h>g.PORTAL_ITEM){const l=this.createSublayersForOrigin("portal-item");n=I(s,l.sublayers,v(l.origin))}}const u=[],c={writeSublayerStructure:n,...t};let y=n||this.hasVisibleLayersForOrigin(h);s.forEach(l=>{const w=l.write({},c);u.push(w),y=y||l.originOf("visible")==="user"}),u.some(l=>Object.keys(l).length>1)&&(r.layers=u),y&&(r.visibleLayers=s.filter(l=>l.visible).map(l=>l.id))}createExportImageParameters(e,r,p,t){const s=(t==null?void 0:t.pixelRatio)||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian()),this._exportImageParameters.floors=(t==null?void 0:t.floors)??null,this._exportImageParameters.scale=_({extent:e,width:r})*s;const n=this._exportImageParameters.toJSON(),h=!(t!=null&&t.rotation)||this.version<10.3?{}:{rotation:-t.rotation},u=e==null?void 0:e.spatialReference,c=J(u);n.dpi*=s;const y={};if(t!=null&&t.timeExtent){const{start:m,end:d}=t.timeExtent.toJSON();y.time=m&&d&&m===d?""+m:`${m??"null"},${d??"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:c,imageSR:c,size:r+","+p,...n,...h,...y}}async fetchImage(e,r,p,t){const{data:s}=await this._fetchImage("image",e,r,p,t);return s}async fetchImageBitmap(e,r,p,t){const{data:s,url:n}=await this._fetchImage("blob",e,r,p,t);return X(s,n,t==null?void 0:t.signal)}async fetchRecomputedExtents(e={}){const r={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:p}=await f(this.url,r),{extent:t,fullExtent:s,timeExtent:n}=p,h=t||s;return{fullExtent:h&&U.fromJSON(h),timeExtent:n&&q.fromJSON({start:n[0],end:n[1]})}}loadAll(){return A(this,e=>{e(this.allSublayers),e(this.subtables)})}serviceSupportsSpatialReference(e){return V(this,e)}async _fetchImage(e,r,p,t,s){var u,c,y;const n={responseType:e,signal:(s==null?void 0:s.signal)??null,query:{...this.parsedUrl.query,...this.createExportImageParameters(r,p,t,s),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},h=this.parsedUrl.path+"/export";if(((u=n.query)==null?void 0:u.dynamicLayers)!=null&&!((y=(c=this.capabilities)==null?void 0:c.exportMap)!=null&&y.supportsDynamicLayers))throw new x("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:n.query});try{const{data:m}=await f(h,n);return{data:m,url:h}}catch(m){throw k(m)?m:new x("mapimagelayer:image-fetch-error",`Unable to load image: ${h}`,{error:m})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:r,ssl:p}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});p&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=r,this.read(r,{origin:"service",url:this.parsedUrl})}hasVisibleLayersForOrigin(e){var r;return!(e==null||!((r=this.sublayersSourceJSON[e])!=null&&r.visibleLayers))}};a([o(S("dateFieldsTimeReference"))],i.prototype,"dateFieldsTimeZone",void 0),a([o({type:Boolean})],i.prototype,"datesInUnknownTimezone",void 0),a([o()],i.prototype,"dpi",void 0),a([o()],i.prototype,"gdbVersion",void 0),a([o()],i.prototype,"imageFormat",void 0),a([z("imageFormat",["supportedImageFormatTypes"])],i.prototype,"readImageFormat",null),a([o({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],i.prototype,"imageMaxHeight",void 0),a([o({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],i.prototype,"imageMaxWidth",void 0),a([o()],i.prototype,"imageTransparency",void 0),a([o({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],i.prototype,"isReference",void 0),a([o({json:{read:!1,write:!1}})],i.prototype,"labelsVisible",void 0),a([o({type:["ArcGISMapServiceLayer"]})],i.prototype,"operationalLayerType",void 0),a([o({json:{read:!1,write:!1}})],i.prototype,"popupEnabled",void 0),a([o(S("preferredTimeReference"))],i.prototype,"preferredTimeZone",void 0),a([o()],i.prototype,"sourceJSON",void 0),a([o({json:{write:{ignoreOrigin:!0}}})],i.prototype,"sublayers",void 0),a([H("sublayers",{layers:{type:[W]},visibleLayers:{type:[D]}})],i.prototype,"writeSublayers",null),a([o({type:["show","hide","hide-children"]})],i.prototype,"listMode",void 0),a([o({json:{read:!1},readOnly:!0,value:"map-image"})],i.prototype,"type",void 0),a([o(Z)],i.prototype,"url",void 0),i=a([B("esri.layers.MapImageLayer")],i);const le=i;export{le as default};
