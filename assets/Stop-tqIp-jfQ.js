import{ed as A,j as e,y as a,e6 as d,bm as p,eu as v,P as D,ac as N,a6 as g,Q as W,eV as j,nc as I}from"./index-Dv-JqQDv.js";import{M as f,y as M,w as c,r as J,D as E,A as F,m as U,p as u,v as m,T,N as S}from"./networkEnums-DpgakllD.js";let o=class extends A(N){constructor(t){super(t),this.attributeParameterValues=null,this.description=null,this.distanceAttributeName=null,this.id=null,this.impedanceAttributeName=null,this.name=null,this.restrictionAttributeNames=null,this.simplificationTolerance=null,this.simplificationToleranceUnits=null,this.timeAttributeName=null,this.type=null,this.useHierarchy=null,this.uturnAtJunctions=null}readId(t,i){return i.id??i.itemId??null}readRestrictionAttributes(t,i){const{restrictionAttributeNames:s}=i;return s==null?null:s.map(n=>f.fromJSON(n))}writeRestrictionAttributes(t,i,s){t!=null&&(i[s]=t.map(n=>f.toJSON(n)))}};e([a({type:[Object],json:{write:!0}})],o.prototype,"attributeParameterValues",void 0),e([a({type:String,json:{write:!0}})],o.prototype,"description",void 0),e([d(M,{ignoreUnknown:!1})],o.prototype,"distanceAttributeName",void 0),e([a({type:String,json:{write:!0}})],o.prototype,"id",void 0),e([p("id",["id","itemId"])],o.prototype,"readId",null),e([d(c,{ignoreUnknown:!1})],o.prototype,"impedanceAttributeName",void 0),e([a({type:String,json:{write:!0}})],o.prototype,"name",void 0),e([a({type:[String],json:{write:!0}})],o.prototype,"restrictionAttributeNames",void 0),e([p("restrictionAttributeNames")],o.prototype,"readRestrictionAttributes",null),e([v("restrictionAttributeNames")],o.prototype,"writeRestrictionAttributes",null),e([a({type:Number,json:{write:{allowNull:!0}}})],o.prototype,"simplificationTolerance",void 0),e([d(J)],o.prototype,"simplificationToleranceUnits",void 0),e([d(E,{ignoreUnknown:!1})],o.prototype,"timeAttributeName",void 0),e([d(F)],o.prototype,"type",void 0),e([a({type:Boolean,json:{write:!0}})],o.prototype,"useHierarchy",void 0),e([d(U)],o.prototype,"uturnAtJunctions",void 0),o=e([D("esri.rest.support.TravelMode")],o);const k=o;function b(t,i){if(t==null)return null;const s={},n=new RegExp(`^${i}`,"i");for(const l of Object.keys(t))if(n.test(l)){const y=l.substring(i.length);s[c.fromJSON(y)]=t[l]}return s}function V(t,i,s){if(t!=null){i.attributes||(i.attributes={});for(const n in t){const l=c.toJSON(n);i.attributes[`${s}${l}`]=t[n]}}}function w(t){const i={};for(const s of Object.keys(t)){const n=s;i[c.fromJSON(n)]=t[s]}return i}function C(t){const i={};for(const s of Object.keys(t)){const n=s;i[c.toJSON(n)]=t[s]}return i}function O(t,i){return t==null||i==null?null:Math.round((t-i)/6e4)}function q(t){var n,l,y;const i=t.toJSON(),s=i;return s.accumulateAttributeNames&&(s.accumulateAttributeNames=(n=i.accumulateAttributeNames)==null?void 0:n.join()),s.attributeParameterValues&&(s.attributeParameterValues=JSON.stringify(i.attributeParameterValues)),s.barriers&&(s.barriers=JSON.stringify(i.barriers)),s.outSR&&(s.outSR=(l=i.outSR)==null?void 0:l.wkid),s.overrides&&(s.overrides=JSON.stringify(i.overrides)),s.polygonBarriers&&(s.polygonBarriers=JSON.stringify(i.polygonBarriers)),s.polylineBarriers&&(s.polylineBarriers=JSON.stringify(i.polylineBarriers)),s.restrictionAttributeNames&&(s.restrictionAttributeNames=(y=i.restrictionAttributeNames)==null?void 0:y.join()),s.stops&&(s.stops=JSON.stringify(i.stops)),s.travelMode&&(s.travelMode=JSON.stringify(i.travelMode)),s}var h;let r=h=class extends A(N){constructor(t){super(t),this.arriveCurbApproach=null,this.arriveTime=null,this.arriveTimeOffset=null,this.bearing=null,this.bearingTol=null,this.cumulativeCosts=null,this.cumulativeDistance=null,this.cumulativeDuration=null,this.curbApproach=null,this.departCurbApproach=null,this.departTime=null,this.departTimeOffset=null,this.distanceToNetworkInMeters=null,this.geometry=null,this.lateDuration=null,this.locationType=null,this.name=null,this.navLatency=null,this.objectId=null,this.popupTemplate=null,this.posAlong=null,this.routeName=null,this.serviceCosts=null,this.serviceDistance=null,this.serviceDuration=null,this.sequence=null,this.sideOfEdge=null,this.snapX=null,this.snapY=null,this.snapZ=null,this.sourceId=null,this.sourceOid=null,this.status=null,this.symbol=null,this.timeWindowEnd=null,this.timeWindowEndOffset=null,this.timeWindowStart=null,this.timeWindowStartOffset=null,this.type="stop",this.violations=null,this.waitDuration=null,this.wait=null}readArriveTimeOffset(t,i){return O(i.attributes.ArriveTime,i.attributes.ArriveTimeUTC)}readCumulativeCosts(t,i){return b(i.attributes,"Cumul_")}readDepartTimeOffset(t,i){return O(i.attributes.DepartTime,i.attributes.DepartTimeUTC)}readServiceCosts(t,i){return b(i.attributes,"Attr_")}writeServiceCosts(t,i){V(t,i,"Attr_")}writeTimeWindowEnd(t,i){t!=null&&(i.attributes||(i.attributes={}),i.attributes.TimeWindowEnd=t.getTime())}writeTimeWindowStart(t,i){t!=null&&(i.attributes||(i.attributes={}),i.attributes.TimeWindowStart=t.getTime())}readViolations(t,i){return b(i.attributes,"Violation_")}readWait(t,i){return b(i.attributes,"Wait_")}static fromGraphic(t){return new h({arriveCurbApproach:t.attributes.ArrivalCurbApproach!=null?u.fromJSON(t.attributes.ArrivalCurbApproach):null,arriveTime:t.attributes.ArrivalTime!=null?new Date(t.attributes.ArrivalTime):null,arriveTimeOffset:t.attributes.ArrivalUTCOffset,cumulativeCosts:t.attributes.CumulativeCosts!=null?w(JSON.parse(t.attributes.CumulativeCosts)):null,cumulativeDistance:t.attributes.CumulativeMeters??null,cumulativeDuration:t.attributes.CumulativeMinutes??null,curbApproach:t.attributes.CurbApproach!=null?u.fromJSON(t.attributes.CurbApproach):null,departCurbApproach:t.attributes.DepartureCurbApproach!=null?u.fromJSON(t.attributes.DepartureCurbApproach):null,departTime:t.attributes.DepartureTime!=null?new Date(t.attributes.DepartureTime):null,departTimeOffset:t.attributes.DepartureUTCOffset??null,geometry:t.geometry,lateDuration:t.attributes.LateMinutes??null,locationType:t.attributes.LocationType!=null?m.fromJSON(t.attributes.LocationType):null,name:t.attributes.Name,objectId:t.attributes.ObjectID??t.attributes.__OBJECTID,popupTemplate:t.popupTemplate,routeName:t.attributes.RouteName,sequence:t.attributes.Sequence??null,serviceCosts:t.attributes.ServiceCosts!=null?w(JSON.parse(t.attributes.ServiceCosts)):null,serviceDistance:t.attributes.ServiceMeters??null,serviceDuration:t.attributes.ServiceMinutes??null,status:t.attributes.Status!=null?T.fromJSON(t.attributes.Status):null,symbol:t.symbol,timeWindowEnd:t.attributes.TimeWindowEnd!=null?new Date(t.attributes.TimeWindowEnd):null,timeWindowEndOffset:t.attributes.TimeWindowEndUTCOffset??null,timeWindowStart:t.attributes.TimeWindowStart!=null?new Date(t.attributes.TimeWindowStart):null,timeWindowStartOffset:t.attributes.TimeWindowStartUTCOffset??null,waitDuration:t.attributes.WaitMinutes??null})}toGraphic(){const t={ObjectID:this.objectId,ArrivalCurbApproach:this.arriveCurbApproach!=null?u.toJSON(this.arriveCurbApproach):null,ArrivalTime:this.arriveTime!=null?this.arriveTime.getTime():null,ArrivalUTCOffset:this.arriveTimeOffset,CumulativeCosts:this.cumulativeCosts!=null?JSON.stringify(C(this.cumulativeCosts)):null,CumulativeMeters:this.cumulativeDistance,CumulativeMinutes:this.cumulativeDuration,CurbApproach:this.curbApproach!=null?u.toJSON(this.curbApproach):null,DepartureCurbApproach:this.departCurbApproach!=null?u.toJSON(this.departCurbApproach):null,DepartureTime:this.departTime!=null?this.departTime.getTime():null,DepartureUTCOffset:this.departTimeOffset,LateMinutes:this.lateDuration,LocationType:this.locationType!=null?m.toJSON(this.locationType):null,Name:this.name,RouteName:this.routeName,Sequence:this.sequence,ServiceCosts:this.serviceCosts!=null?JSON.stringify(C(this.serviceCosts)):null,ServiceMeters:this.serviceDistance,ServiceMinutes:this.serviceDuration,Status:this.status!=null?T.toJSON(this.status):null,TimeWindowEnd:this.timeWindowEnd!=null?this.timeWindowEnd.getTime():null,TimeWindowEndUTCOffset:this.timeWindowEndOffset??this.arriveTimeOffset,TimeWindowStart:this.timeWindowStart!=null?this.timeWindowStart.getTime():null,TimeWindowStartUTCOffset:this.timeWindowStartOffset??this.arriveTimeOffset,WaitMinutes:this.waitDuration};return new g({geometry:this.geometry,attributes:t,symbol:this.symbol,popupTemplate:this.popupTemplate})}};r.fields=[{name:"ObjectID",alias:"ObjectID",type:"esriFieldTypeOID"},{name:"ArrivalCurbApproach",alias:"Arrival Curb Approach",type:"esriFieldTypeInteger"},{name:"ArrivalTime",alias:"Arrival Time",type:"esriFieldTypeDate"},{name:"ArrivalUTCOffset",alias:"Arrival Time",type:"esriFieldTypeInteger"},{name:"CumulativeCosts",alias:"Cumulative Costs",type:"esriFieldTypeString"},{name:"CumulativeMeters",alias:"Cumulative Meters",type:"esriFieldTypeDouble"},{name:"CumulativeMinutes",alias:"Cumulative Minutes",type:"esriFieldTypeDouble"},{name:"CurbApproach",alias:"Curb Approach",type:"esriFieldTypeInteger"},{name:"DepartureCurbApproach",alias:"Departure Curb Approach",type:"esriFieldTypeInteger"},{name:"DepartureTime",alias:"Departure Time",type:"esriFieldTypeDate"},{name:"DepartureUTCOffset",alias:"Departure Time",type:"esriFieldTypeInteger"},{name:"LateMinutes",alias:"Minutes Late",type:"esriFieldTypeDouble"},{name:"LocationType",alias:"Location Type",type:"esriFieldTypeInteger"},{name:"Name",alias:"Name",type:"esriFieldTypeString"},{name:"RouteName",alias:"Route Name",type:"esriFieldTypeString"},{name:"Sequence",alias:"Sequence",type:"esriFieldTypeInteger"},{name:"ServiceCosts",alias:"Service Costs",type:"esriFieldTypeString"},{name:"ServiceMeters",alias:"Service Meters",type:"esriFieldTypeDouble"},{name:"ServiceMinutes",alias:"Service Minutes",type:"esriFieldTypeDouble"},{name:"Status",alias:"Status",type:"esriFieldTypeInteger"},{name:"TimeWindowEnd",alias:"Time Window End",type:"esriFieldTypeDate"},{name:"TimeWindowEndUTCOffset",alias:"Time Window End Offset",type:"esriFieldTypeInteger"},{name:"TimeWindowStart",alias:"Time Window Start",type:"esriFieldTypeDate"},{name:"TimeWindowStartUTCOffset",alias:"Time Window Start Offset",type:"esriFieldTypeInteger"},{name:"WaitMinutes",alias:"Minutes Wait",type:"esriFieldTypeDouble"}],e([a({type:u.apiValues,json:{read:{source:"attributes.ArrivalCurbApproach",reader:u.read}}})],r.prototype,"arriveCurbApproach",void 0),e([a({type:Date,json:{read:{source:"attributes.ArriveTimeUTC"}}})],r.prototype,"arriveTime",void 0),e([a()],r.prototype,"arriveTimeOffset",void 0),e([p("arriveTimeOffset",["attributes.ArriveTime","attributes.ArriveTimeUTC"])],r.prototype,"readArriveTimeOffset",null),e([a({json:{name:"attributes.Bearing",read:!1,write:!0}})],r.prototype,"bearing",void 0),e([a({json:{name:"attributes.BearingTol",read:!1,write:!0}})],r.prototype,"bearingTol",void 0),e([a()],r.prototype,"cumulativeCosts",void 0),e([p("cumulativeCosts",["attributes"])],r.prototype,"readCumulativeCosts",null),e([a()],r.prototype,"cumulativeDistance",void 0),e([a()],r.prototype,"cumulativeDuration",void 0),e([a({type:u.apiValues,json:{name:"attributes.CurbApproach",read:{reader:u.read},write:{writer:u.write}}})],r.prototype,"curbApproach",void 0),e([a({type:u.apiValues,json:{read:{source:"attributes.DepartCurbApproach",reader:u.read}}})],r.prototype,"departCurbApproach",void 0),e([a({type:Date,json:{read:{source:"attributes.DepartTimeUTC"}}})],r.prototype,"departTime",void 0),e([a()],r.prototype,"departTimeOffset",void 0),e([p("departTimeOffset",["attributes.DepartTime","attributes.DepartTimeUTC"])],r.prototype,"readDepartTimeOffset",null),e([a({json:{read:{source:"attributes.DistanceToNetworkInMeters"}}})],r.prototype,"distanceToNetworkInMeters",void 0),e([a({type:W,json:{write:!0}})],r.prototype,"geometry",void 0),e([a()],r.prototype,"lateDuration",void 0),e([a({type:m.apiValues,json:{name:"attributes.LocationType",read:{reader:m.read},write:{writer:m.write}}})],r.prototype,"locationType",void 0),e([a({json:{name:"attributes.Name"}})],r.prototype,"name",void 0),e([a({json:{name:"attributes.NavLatency",read:!1,write:!0}})],r.prototype,"navLatency",void 0),e([a({json:{name:"attributes.ObjectID"}})],r.prototype,"objectId",void 0),e([a({type:j})],r.prototype,"popupTemplate",void 0),e([a({json:{read:{source:"attributes.PosAlong"}}})],r.prototype,"posAlong",void 0),e([a({json:{name:"attributes.RouteName"}})],r.prototype,"routeName",void 0),e([a()],r.prototype,"serviceCosts",void 0),e([p("serviceCosts",["attributes"])],r.prototype,"readServiceCosts",null),e([v("serviceCosts")],r.prototype,"writeServiceCosts",null),e([a()],r.prototype,"serviceDistance",void 0),e([a()],r.prototype,"serviceDuration",void 0),e([a({json:{name:"attributes.Sequence"}})],r.prototype,"sequence",void 0),e([a({type:S.apiValues,json:{read:{source:"attributes.SideOfEdge",reader:S.read}}})],r.prototype,"sideOfEdge",void 0),e([a({json:{read:{source:"attributes.SnapX"}}})],r.prototype,"snapX",void 0),e([a({json:{read:{source:"attributes.SnapY"}}})],r.prototype,"snapY",void 0),e([a({json:{read:{source:"attributes.SnapZ"}}})],r.prototype,"snapZ",void 0),e([a({json:{read:{source:"attributes.SourceID"}}})],r.prototype,"sourceId",void 0),e([a({json:{read:{source:"attributes.SourceOID"}}})],r.prototype,"sourceOid",void 0),e([a({type:T.apiValues,json:{read:{source:"attributes.Status",reader:T.read}}})],r.prototype,"status",void 0),e([a({types:I})],r.prototype,"symbol",void 0),e([a({type:Date,json:{name:"attributes.TimeWindowEnd"}})],r.prototype,"timeWindowEnd",void 0),e([v("timeWindowEnd")],r.prototype,"writeTimeWindowEnd",null),e([a()],r.prototype,"timeWindowEndOffset",void 0),e([a({type:Date,json:{name:"attributes.TimeWindowStart"}})],r.prototype,"timeWindowStart",void 0),e([v("timeWindowStart")],r.prototype,"writeTimeWindowStart",null),e([a()],r.prototype,"timeWindowStartOffset",void 0),e([a({readOnly:!0,json:{read:!1}})],r.prototype,"type",void 0),e([a()],r.prototype,"violations",void 0),e([p("violations",["attributes"])],r.prototype,"readViolations",null),e([a()],r.prototype,"waitDuration",void 0),e([a()],r.prototype,"wait",void 0),e([p("wait",["attributes"])],r.prototype,"readWait",null),r=h=e([D("esri.rest.support.Stop")],r);const B=r;export{w as e,V as i,k as j,O as n,q as o,b as r,C as s,B as w};
