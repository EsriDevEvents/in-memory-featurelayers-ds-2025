import{j as t,y as l,bm as m,eu as d,bL as s,P as a,ac as p}from"./index-Dv-JqQDv.js";import{i as n,p as i}from"./UtilityNetwork-OOqCDdIn.js";let e=class extends p{constructor(r){super(r),this.globalId=null,this.associationType=null,this.fromNetworkElement=null,this.toNetworkElement=null,this.geometry=null,this.errorMessage=null,this.percentAlong=null,this.errorCode=null,this.isContentVisible=null,this.status=null}readFromNetworkElement(r,o){return new i({globalId:o.fromGlobalId,networkSourceId:o.fromNetworkSourceId,terminalId:o.fromTerminalId})}writeFromNetworkElement(r,o){r&&(o.fromGlobalId=r.globalId,o.fromNetworkSourceId=r.networkSourceId,o.fromTerminalId=r.terminalId)}readToNetworkElement(r,o){return new i({globalId:o.toGlobalId,networkSourceId:o.toNetworkSourceId,terminalId:o.toTerminalId})}writeToNetworkElement(r,o){r&&(o.toGlobalId=r.globalId,o.toNetworkSourceId=r.networkSourceId,o.toTerminalId=r.terminalId)}};t([l({type:String,json:{write:!0}})],e.prototype,"globalId",void 0),t([l({type:n.apiValues,json:{type:n.jsonValues,read:n.read,write:n.write}})],e.prototype,"associationType",void 0),t([l({type:i,json:{write:{target:{fromGlobalId:{type:String},fromNetworkSourceId:{type:Number},fromTerminalId:{type:Number}}},read:{source:["fromGlobalId","fromNetworkSourceId","fromTerminalId"]}}})],e.prototype,"fromNetworkElement",void 0),t([m("fromNetworkElement")],e.prototype,"readFromNetworkElement",null),t([d("fromNetworkElement")],e.prototype,"writeFromNetworkElement",null),t([l({type:i,json:{write:{target:{toGlobalId:{type:String},toNetworkSourceId:{type:Number},toTerminalId:{type:Number}}},read:{source:["toGlobalId","toNetworkSourceId","toTerminalId"]}}})],e.prototype,"toNetworkElement",void 0),t([m("toNetworkElement")],e.prototype,"readToNetworkElement",null),t([d("toNetworkElement")],e.prototype,"writeToNetworkElement",null),t([l({type:s,json:{write:!0}})],e.prototype,"geometry",void 0),t([l({type:String,json:{write:!0}})],e.prototype,"errorMessage",void 0),t([l({type:Number,json:{write:!0}})],e.prototype,"percentAlong",void 0),t([l({type:Number,json:{write:!0}})],e.prototype,"errorCode",void 0),t([l({type:Boolean,json:{write:!0}})],e.prototype,"isContentVisible",void 0),t([l({type:Number,json:{write:!0}})],e.prototype,"status",void 0),e=t([a("esri.rest.networks.support.Association")],e);const I=e;export{I as d};
