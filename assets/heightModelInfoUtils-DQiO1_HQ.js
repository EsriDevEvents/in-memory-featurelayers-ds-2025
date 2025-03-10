import{bn as h,s as r,a as y}from"./index-Dv-JqQDv.js";function k(e,a){if(!e)return null;if(!u(e))return new r("webscene:unsupported-height-model-info","The vertical coordinate system of the scene is not supported",{heightModelInfo:e});const c=e.heightUnit,t=h.deriveUnitFromSR(e,a).heightUnit;return c!==t?new r("webscene:incompatible-height-unit",`The vertical units of the scene (${c}) must match the horizontal units of the scene (${t})`,{verticalUnit:c,horizontalUnit:t}):null}function I(e,a,c){const t=b(e),i=a,d=w(t,i,c);if(t){const o=h.deriveUnitFromSR(t,e.spatialReference).heightUnit;if(!c&&o!==t.heightUnit){const s=new r("layerview:unmatched-height-unit",`The vertical units of the layer must match the horizontal units (${o})`,{horizontalUnit:o});return new r("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:t,error:s})}}if(!v(e)||d===n.Unsupported)return new r("layerview:unsupported-height-model-info","The vertical coordinate system of the layer is not supported",{heightModelInfo:t});switch(d){case n.Units:{const o=(t==null?void 0:t.heightUnit)||"unknown",s=(i==null?void 0:i.heightUnit)||"unknown",l=new r("layerview:incompatible-height-unit",`The vertical units of the layer (${o}) must match the vertical units of the scene (${s})`,{layerUnit:o,sceneUnit:s});return new r("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:t,sceneHeightModelInfo:i,error:l})}case n.HeightModel:{const o=(t==null?void 0:t.heightModel)||"unknown",s=(i==null?void 0:i.heightModel)||"unknown",l=new r("layerview:incompatible-height-model",`The height model of the layer (${o}) must match the height model of the scene (${s})`,{layerHeightModel:o,sceneHeightModel:s});return new r("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:t,sceneHeightModelInfo:i,error:l})}case n.CRS:{const o=(t==null?void 0:t.vertCRS)||"unknown",s=(i==null?void 0:i.vertCRS)||"unknown",l=new r("layerview:incompatible-vertical-datum",`The vertical datum of the layer (${o}) must match the vertical datum of the scene (${s})`,{layerDatum:o,sceneDatum:s});return new r("layerview:incompatible-height-model-info","The vertical coordinate system of the layer is incompatible with the scene",{layerHeightModelInfo:t,sceneHeightModelInfo:i,error:l})}}return null}function w(e,a,c){if(!u(e)||!u(a))return n.Unsupported;if(e==null||a==null)return n.Ok;if(!c&&e.heightUnit!==a.heightUnit)return n.Units;if(e.heightModel!==a.heightModel)return n.HeightModel;switch(e.heightModel){case"gravity-related-height":return n.Ok;case"ellipsoidal":return e.vertCRS===a.vertCRS?n.Ok:n.CRS;default:return n.Unsupported}}var n;function u(e){return e==null||e.heightModel!=null&&e.heightUnit!=null}function v(e){return"heightModelInfo"in e&&e.heightModelInfo!=null||e.spatialReference!=null||!p(e)}function b(e){var t;if(e.type==="integrated-mesh-3dtiles")return null;const a=e.url?y(e.url):void 0;return!(((t=e.spatialReference)==null?void 0:t.vcsWkid)==null&&a!=null&&a.serverType==="ImageServer")&&g(e)&&e.heightModelInfo?e.heightModelInfo:p(e)?h.deriveUnitFromSR(M,e.spatialReference):null}function g(e){return"heightModelInfo"in e}function f(e){if(e.type==="unknown"||!("capabilities"in e))return!1;switch(e.type){case"catalog":case"catalog-footprint":case"csv":case"feature":case"geojson":case"subtype-group":case"ogc-feature":case"oriented-imagery":case"wfs":case"knowledge-graph-sublayer":return!0;default:return!1}}function p(e){return f(e)?!!(e.capabilities&&e.capabilities.data&&e.capabilities.data.supportsZ):m(e)}function R(e){return e.layers!=null||m(e)||f(e)||g(e)}function m(e){switch(e.type){case"building-scene":case"elevation":case"integrated-mesh":case"integrated-mesh-3dtiles":case"point-cloud":case"scene":case"voxel":return!0;case"base-dynamic":case"base-elevation":case"base-tile":case"bing-maps":case"catalog":case"catalog-footprint":case"catalog-dynamic-group":case"csv":case"dimension":case"geojson":case"feature":case"subtype-group":case"geo-rss":case"graphics":case"group":case"imagery":case"imagery-tile":case"kml":case"knowledge-graph":case"link-chart":case"knowledge-graph-sublayer":case"line-of-sight":case"map-image":case"map-notes":case"media":case"ogc-feature":case"open-street-map":case"oriented-imagery":case"route":case"stream":case"tile":case"unknown":case"unsupported":case"vector-tile":case"video":case"wcs":case"web-tile":case"wfs":case"wms":case"wmts":case null:return!1}return!1}(function(e){e[e.Ok=0]="Ok",e[e.Units=1]="Units",e[e.HeightModel=2]="HeightModel",e[e.CRS=3]="CRS",e[e.Unsupported=4]="Unsupported"})(n||(n={}));const M=new h({heightModel:"gravity-related-height"});export{I as a,R as g,k as i,b as l};
