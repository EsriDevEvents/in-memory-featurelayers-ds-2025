import{dQ as S}from"./index-Dv-JqQDv.js";import{Z as f}from"./sphere-j1PWtIhy.js";import{g as C}from"./I3SUtil-D61YPx_K.js";import{e as I}from"./ElevationRange-BrgM1moX.js";class M extends I{constructor(i,n){super(NaN,NaN),this.id=i,this.serviceMbsInIndexSR=n,this.serviceMbsInRenderSR=f(0,0,0,-1)}invalidateServiceBVsInRenderSR(){var i;C(this.serviceMbsInRenderSR),(i=this.serviceObbInRenderSR)==null||i.invalidate()}shareServiceBVsInRenderSRWith(i){this.serviceObbInRenderSR=i.serviceObbInRenderSR,this.serviceMbsInRenderSR=i.serviceMbsInRenderSR}}var d,o,r,a,c;(function(e){e[e.Unmodified=0]="Unmodified",e[e.Culled=1]="Culled",e[e.NotChecked=2]="NotChecked"})(d||(d={})),function(e){e[e.Unmodified=0]="Unmodified",e[e.PotentiallyModified=1]="PotentiallyModified",e[e.Culled=2]="Culled",e[e.Unknown=3]="Unknown",e[e.NotChecked=4]="NotChecked"}(o||(o={}));class k extends M{constructor(i,n,t,s,h,l,R,m,u,v){super(i,t),this.index=n,this.childCount=s,this.level=h,this.resources=l,this.version=R,this.lodMetric=m,this.maxError=u,this.numFeatures=v,this.failed=!1,this.cacheState=r.Unknown,this.vertexCount=0,this.memory=0,this.childrenLoaded=0,this.hasModifications=!1,this.imModificationImpact=o.NotChecked,this.elevationAgnosticBoundingVolume=S(0,0,0,-1)}invalidateServiceBVsInRenderSR(){super.invalidateServiceBVsInRenderSR(),this.elevationAgnosticBoundingVolume[3]=-1}}(function(e){e[e.Unknown=0]="Unknown",e[e.Uncached=1]="Uncached",e[e.Cached=2]="Cached"})(r||(r={})),function(e){e[e.None=0]="None",e[e.MaxScreenThreshold=1]="MaxScreenThreshold",e[e.ScreenSpaceRelative=2]="ScreenSpaceRelative",e[e.RemovedFeatureDiameter=3]="RemovedFeatureDiameter",e[e.DistanceRangeFromDefaultCamera=4]="DistanceRangeFromDefaultCamera"}(a||(a={})),function(e){e[e.Hole=0]="Hole",e[e.Leaf=1]="Leaf"}(c||(c={}));class x{constructor(i,n,t,s){this.nodeHasLOD=i,this.isChosen=n,this.lodLevel=t,this.version=s}}export{r as a,c,a as d,k as h,x as l,d as o,o as r,M as s};
