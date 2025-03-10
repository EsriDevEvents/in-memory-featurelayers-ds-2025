import{s as j,dm as O,dn as Y,U as $,cz as ee,cy as E,cC as ne,J as x,dp as te,cF as ie,cE as ae,dq as J,cx as re,I as A,G as se,dr as oe}from"./index-Dv-JqQDv.js";import{E as le,I as ce,N as ue}from"./geojson-DyHE_3Y7.js";import{o as de}from"./clientSideDefaults-CLl2PAcc.js";import{p as fe}from"./sourceUtils-BCknwaql.js";const G=()=>se.getLogger("esri.layers.ogc.ogcFeatureUtils"),L="startindex",me=new Set([L,"offset"]),z="http://www.opengis.net/def/crs/",xe=`${z}OGC/1.3/CRS84`;var l;async function $e(e,n,t={},i=5){const{links:a}=e,o=g(a,"items",l.geojson)||g(a,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(o==null)throw new j("ogc-feature-layer:missing-items-page","Missing items url");const{apiKey:d,customParameters:c,signal:p}=t,f=O(o.href,e.landingPage.url),y={limit:i,...c,token:d},T=Y(f,y),W={accept:l.geojson},{data:S}=await $(T,{signal:p,headers:W}),v=Fe(T,i,S.links)??L;le(S);const m=ce(S,{geometryType:n.geometryType}),F=n.fields||m.fields||[],D=n.hasZ!=null?n.hasZ:m.hasZ,w=m.geometryType,b=n.objectIdField||m.objectIdFieldName||"OBJECTID";let s=n.timeInfo;const N=F.find(({name:r})=>r===b);if(N)N.editable=!1,N.nullable=!1;else{if(!m.objectIdFieldType)throw new j("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");F.unshift({name:b,alias:b,type:m.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(b!==m.objectIdFieldName){const r=F.find(({name:u})=>u===m.objectIdFieldName);r&&(r.type="esriFieldTypeInteger")}F===m.fields&&m.unknownFields.length>0&&G().warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:m.unknownFields}});for(const r of F){if(r.name==null&&(r.name=r.alias),r.alias==null&&(r.alias=r.name),r.type!=="esriFieldTypeOID"&&r.type!=="esriFieldTypeGlobalID"&&(r.editable=r.editable==null||!!r.editable,r.nullable=r.nullable==null||!!r.nullable),!r.name)throw new j("ogc-feature-layer:invalid-field-name","field name is missing",{field:r});if(!ee.jsonValues.includes(r.type))throw new j("ogc-feature-layer:invalid-field-type",`invalid type for field "${r.name}"`,{field:r})}if(s){const r=new E(F);if(s.startTimeField){const u=r.get(s.startTimeField);u?(s.startTimeField=u.name,u.type="esriFieldTypeDate"):s.startTimeField=null}if(s.endTimeField){const u=r.get(s.endTimeField);u?(s.endTimeField=u.name,u.type="esriFieldTypeDate"):s.endTimeField=null}if(s.trackIdField){const u=r.get(s.trackIdField);u?s.trackIdField=u.name:(s.trackIdField=null,G().warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:s}}))}s.timeReference||(s.timeReference={timeZoneIANA:ne}),s.startTimeField||s.endTimeField||(G().warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:s}}),s=void 0)}return{drawingInfo:w?de(w):null,extent:he(e),geometryType:w,fields:F,hasZ:!!D,objectIdField:b,paginationParameter:v,timeInfo:s}}async function Se(e,n={}){const{links:t,url:i}=e,a=g(t,"data",l.json)||g(t,"http://www.opengis.net/def/rel/ogc/1.0/data",l.json);if(a==null)throw new j("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:d,signal:c}=n,p=O(a.href,i),{data:f}=await $(p,{signal:c,headers:{accept:l.json},query:{...d,token:o}});for(const y of f.collections)y.landingPage=e;return f}async function ve(e,n={}){const{links:t,url:i}=e,a=g(t,"conformance",l.json)||g(t,"http://www.opengis.net/def/rel/ogc/1.0/conformance",l.json);if(a==null)throw new j("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:d,signal:c}=n,p=O(a.href,i),{data:f}=await $(p,{signal:c,headers:{accept:l.json},query:{...d,token:o}});return f}async function Ne(e,n={}){const{apiKey:t,customParameters:i,signal:a}=n,{data:o}=await $(e,{signal:a,headers:{accept:l.json},query:{...i,token:t}});return o.url=e,o}async function Pe(e,n={}){const{links:t,url:i}=e,a=g(t,"service-desc",l.openapi);if(a==null)return G().warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:o,customParameters:d,signal:c}=n,p=O(a.href,i),{data:f}=await $(p,{signal:c,headers:{accept:l.openapi},query:{...d,token:o}});return f}function qe(e){const n=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e),t=n==null?void 0:n.groups;if(!t)return null;const{authority:i,code:a}=t;switch(i.toLowerCase()){case"ogc":switch(a.toLowerCase()){case"crs27":return x.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return x.WGS84.wkid;default:return null}case"esri":case"epsg":{const o=Number.parseInt(a,10);return Number.isNaN(o)?null:o}default:return null}}async function Oe(e,n,t){const i=await ge(e,n,t);return te(i)}async function ge(e,n,t){const{collection:{links:i,landingPage:{url:a}},layerDefinition:o,maxRecordCount:d,queryParameters:{apiKey:c,customParameters:p},spatialReference:f,supportedCrs:y}=e,T=g(i,"items",l.geojson)||g(i,"http://www.opengis.net/def/rel/ogc/1.0/items",l.geojson);if(T==null)throw new j("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:W,num:S,start:v,timeExtent:m,where:F}=n;if(n.objectIds)throw new j("ogc-feature-layer:query-by-objectids-not-supported","Queries with object ids are not supported");const D=x.fromJSON(f),w=n.outSpatialReference??D,b=w.isWGS84?null:U(w,y),s=be(W,y),N=ye(m),r=we(F),u=S??(v==null?d:10),_=v===0?void 0:v,{fields:M,geometryType:C,hasZ:R,objectIdField:P,paginationParameter:B}=o,Q=O(T.href,a),{data:K}=await $(Q,{...t,query:{...p,...s,crs:b,datetime:N,query:r,limit:u,[B]:_,token:c},headers:{accept:l.geojson}}),q=ue(K,{geometryType:C,hasZ:R,objectIdField:P}),V=q.length===u&&!!g(K.links??[],"next",l.geojson),H=new E(M);for(const h of q){const k={};fe(H,k,h.attributes),k[P]=h.attributes[P],h.attributes=k}if(!b&&w.isWebMercator){for(const h of q)if(h.geometry!=null&&C!=null){const k=ie(h.geometry,C,R,!1);k.spatialReference=x.WGS84,h.geometry=ae(J(k,w))}}for(const h of q)h.objectId=h.attributes[P];const X=b||!b&&w.isWebMercator?w.toJSON():re,I=new oe;return I.exceededTransferLimit=V,I.features=q,I.fields=M,I.geometryType=C,I.hasZ=R,I.objectIdFieldName=P,I.spatialReference=X,I}function pe(e){return e!=null&&e.type==="extent"}function U(e,n){const{isWebMercator:t,wkid:i}=e;if(!i)return null;const a=t?n[3857]??n[102100]??n[102113]??n[900913]:n[e.wkid];return a?`${z}${a}`:null}function Z(e){if(e==null)return"";const{xmin:n,ymin:t,xmax:i,ymax:a}=e;return`${n},${t},${i},${a}`}function ye(e){if(e==null)return null;const{start:n,end:t}=e;return`${n!=null?n.toISOString():".."}/${t!=null?t.toISOString():".."}`}function we(e){return e!=null&&e&&e!=="1=1"?e:null}function be(e,n){if(!pe(e))return null;const{spatialReference:t}=e;if(!t||t.isWGS84)return{bbox:Z(e)};const i=U(t,n);return i!=null?{bbox:Z(e),"bbox-crs":i}:t.isWebMercator?{bbox:Z(J(e,x.WGS84))}:null}function he(e){var c;const n=(c=e.extent)==null?void 0:c.spatial;if(!n)return null;const t=n.bbox[0],i=t.length===4,[a,o]=t,d=i?void 0:t[2];return{xmin:a,ymin:o,xmax:i?t[2]:t[3],ymax:i?t[3]:t[4],zmin:d,zmax:i?void 0:t[5],spatialReference:x.WGS84.toJSON()}}function g(e,n,t){return e.find(({rel:i,type:a})=>i===n&&a===t)??e.find(({rel:i,type:a})=>i===n&&!a)}function Fe(e,n,t){var f;if(!t)return;const i=g(t,"next",l.geojson),a=(f=A(i==null?void 0:i.href))==null?void 0:f.query;if(!a)return;const o=A(e).query,d=Object.keys(o??{}),c=Object.entries(a).filter(([y])=>!d.includes(y)).find(([y,T])=>me.has(y.toLowerCase())&&Number.parseInt(T,10)===n);return c==null?void 0:c[0]}(function(e){e.json="application/json",e.geojson="application/geo+json",e.openapi="application/vnd.oai.openapi+json;version=3.0"})(l||(l={}));export{ge as $,qe as C,Se as N,ve as O,Ne as P,Oe as R,z as k,Pe as q,$e as v,xe as x};
