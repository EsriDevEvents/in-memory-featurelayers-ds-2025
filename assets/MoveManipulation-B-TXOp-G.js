import{m1 as X,bN as W,hM as J,bt as j,ga as L,gh as q,dx as b,pT as nt,c7 as I,fH as rt,af as m,ox as R,o as z,gH as K,db as Y,d6 as ot,o3 as lt,ni as ut,pV as ct,ca as ht,aL as B,aI as pt,aJ as k,dA as dt,qO as _t,ad as U,c3 as Mt,p as mt,ct as ft}from"./index-Dv-JqQDv.js";import{e as P,a as d,f as S}from"./RenderObject-DDR5Ef_H.js";import{e as F}from"./mat4f64-Dk4dwAN8.js";import{c as $,f as w}from"./plane-4BN6ZBDV.js";import{D as Q,G as gt}from"./dragEventPipeline3D-BLMXasJE.js";import{f as vt,g as wt,p as C,M as tt,m as xt,j as N,w as yt}from"./InteractiveToolBase-ClRFM-nV.js";import{e as at}from"./basicInterfaces-wONHx_SN.js";import{w as Tt,x as At,y as Et,A as St,B as bt}from"./RenderGeometry-D3-u-2b6.js";import{h as D}from"./debugFlags-CfrzpJ7g.js";import{d as et}from"./ColorMaterial.glsl-D5JrE5f2.js";import{t as _}from"./interfaces-D6pIddIh.js";import{p as $t}from"./elevationInfoUtils-Cey9W7Lb.js";import{j as Dt}from"./settings-DkK6htAH.js";var M;(function(l){l[l.TRANSLATE_Z=0]="TRANSLATE_Z",l[l.TRANSLATE_XY=1]="TRANSLATE_XY",l[l.SCALE=2]="SCALE",l[l.ROTATE=3]="ROTATE",l[l.SCALE_ROTATE=4]="SCALE_ROTATE"})(M||(M={}));let O=class{constructor(){this._available=!0}set location(t){this._forEachManipulator3D(a=>a.location=t)}set elevationAlignedLocation(t){this._forEachManipulator3D(a=>a.elevationAlignedLocation=t)}set elevationInfo(t){this._forEachManipulator3D(a=>a.elevationInfo=t)}get renderLocation(){let t;return this._forEachManipulator3D(a=>{t||(t=a.renderLocation)}),t}get available(){return this._available}set available(t){this._available=t,this._forEachManipulator3D(a=>a.available=t)}get hovering(){return this.someManipulator(t=>t.hovering)}get grabbing(){return this.someManipulator(t=>t.grabbing)}get dragging(){return this.someManipulator(t=>t.dragging)}get selected(){return this.someManipulator(t=>t.selected)}hasManipulator(t){return this.someManipulator(a=>a===t)}someManipulator(t){let a=!1;return this.forEachManipulator(e=>{!a&&t(e)&&(a=!0)}),a}_forEachManipulator3D(t){this.forEachManipulator((a,e)=>{a instanceof P&&t(a,e)})}};const Pt=128,f=70,Ot=80,it=.02,It=54,Lt=100,Rt=Math.ceil(f/3*2),st=160,aa=.5,ea=24,ia=9,sa=st+30,na=st+53,ra=60,oa=23,la=5*Math.PI/12,ua=1*Math.PI/3,ca=10,ha=.2,pa=30,da=53,_a=.2,Ma=.3,ma=200,fa=3,ga=1e6;function H(l,t,a){const e=(i,s)=>{t({action:i,object:l,dxScreen:s.screenDeltaX,dyScreen:s.screenDeltaY})};return a((i,s,r)=>(s.next(n=>(n.action==="start"&&e("start",n),n)).next(vt(l)).next(n=>{switch(n.action){case"start":case"update":(n.translationX||n.translationY||n.translationZ)&&e("update",n);break;case"end":e("end",n)}return n}),{steps:s,cancel:r=r.next(wt(l)).next(n=>(e("end",{screenDeltaX:0,screenDeltaY:0}),n))}))}function va(l){if((l==null?void 0:l.axis)==null)return 1;const{mapStart:t,mapEnd:a,axis:e}=l,i=[a.x-t.x,a.y-t.y];return i[0]*e[0]+i[1]*e[1]>0?1:-1}let Xt=class extends O{constructor(t){super(),this._handles=new X,this._arrowManipulatorInfos=new Array,this._angle=0,this._scale=1,this._radius=f,this._updateAfterDrag=!1,this.events=new W,this._tool=t.tool,this._view=t.view,this._opaqueMaterial=this._createMaterial(),this._transparentMaterial=this._createMaterial(.5),t.radius!=null&&(this._radius=t.radius),this._createManipulators(),this.forEachManipulator(a=>this._tool.manipulators.add(a))}set orthogonalAvailable(t){this._arrowManipulatorInfos.length>=3&&(this._arrowManipulatorInfos[1].manipulator.available=t,this._arrowManipulatorInfos[3].manipulator.available=t)}destroy(){this._handles=J(this._handles),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._arrowManipulatorInfos.length=0}forEachManipulator(t){for(const{manipulator:a}of this._arrowManipulatorInfos)t(a,M.TRANSLATE_XY)}createManipulatedObjectDragPipeline(t,a,e){if(!a.operations)return j();const i=a.operations.data.spatialReference,s=a.graphic;return H(a,e,r=>this.createDragPipeline((n,o,u,c,h)=>({steps:o,cancel:u}=t(n,o,u,c,h),r(n,o,u)),a.elevationInfo,i,s))}createDragPipeline(t,a,e,i){return L(this._arrowManipulatorInfos.map(({manipulator:s},r)=>C(s,(n,o,u,c,h)=>{const p=o.next(g=>({...g,manipulatorType:M.TRANSLATE_XY})).next(tt(this._view,n.elevationAlignedLocation)).next(Q(this._view,n.elevationAlignedLocation,a,e,i)).next(xt(n.location,this.angle+(r+1)*Math.PI*.5)).next(N());t(n,p,u,c,h)})))}get angle(){return this._angle}set angle(t){this._angle=t,this.dragging?this._updateAfterDrag=!0:this._updateManipulatorTransform()}get displayScale(){return this._scale}set displayScale(t){this._scale=t,this._updateManipulatorTransform()}get radius(){return this._radius}set radius(t){this._radius!==t&&(this._radius=t,this._updateManipulators())}_updateManipulators(){for(let t=0;t<this._arrowManipulatorInfos.length;t++)this._updateArrowManipulator(this._arrowManipulatorInfos[t],t);this._updateManipulatorTransform()}_updateArrowManipulator({manipulator:t,transform:a},e){const i=this._radius/f,s=It*i,r=s*Math.sqrt(3)/2,n=Tt(this._opaqueMaterial,r,s/2,s/2,it);At(n,q(w.get(),b($.get(),0,-r/3,0))),t.renderObjects=[new d(n,_.Focused),new d(n.instantiate({material:this._transparentMaterial}),_.Unfocused)],t.radius=r/3*2*1.2;const o=nt(w.get(),e*Math.PI/2),u=q(w.get(),b($.get(),0,Lt*i,0));I(a,o,u)}_createManipulators(){for(let t=0;t<4;t++){const a=this._createArrowManipulator(t);this._arrowManipulatorInfos.push(a)}this._updateManipulatorTransform()}_updateManipulatorTransform(){const t=this.angle,a=rt(w.get(),t,m(0,0,1));if(a==null)return;const e=R(w.get(),b($.get(),this.displayScale,this.displayScale,this.displayScale)),i=I(w.get(),e,a);for(const s of this._arrowManipulatorInfos){const r=I(w.get(),i,s.transform);s.manipulator.modelTransform=r}}_createArrowManipulator(t){const a=new P({view:this._view,autoScaleRenderObjects:!1,worldOriented:!0,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:m(0,0,1)}}),e={manipulator:a,transform:F()};return this._updateArrowManipulator(e,t),this._handles.add(a.events.on("drag",i=>{this._updateAfterDrag&&i.action==="end"&&!this.dragging&&(this._updateManipulatorTransform(),this._updateAfterDrag=!1)})),e}_createMaterial(t=1){const a=new et({cullFace:at.Back,renderOccluded:D.Transparent,isDecoration:!0});return this._handles.add(z(()=>Y.toUnitRGBA(this._view.effectiveTheme.accentColor),e=>{e[3]*=t,a.setParameters({color:e})},K)),a}get test(){}};class jt{constructor(){this._view=null,this._elevationInfo=null,this._lastDragEvent=null,this._next=null,this._enabled=!1}get enabled(){return this._enabled}set enabled(t){if(this._enabled!==t&&this._lastDragEvent!=null&&this._next!=null){const a=this._lastDragEvent.mapEnd,e=this._snap(this._lastDragEvent.screenEnd);if(e!=null){const i={action:"update",mapStart:this._lastDragEvent.mapStart,mapEnd:t===!0?e:a,screenStart:this._lastDragEvent.screenEnd,screenEnd:this._lastDragEvent.screenEnd};this._next.execute(i)}}this._enabled=t}_snap(t){const a=this._view!=null?this._view.toMap(t,{exclude:[]}):null;return a!=null&&this._view!=null&&(a.z=$t(a,this._view,this._elevationInfo)),a}createDragEventPipelineStep(t,a){this._view=t,this._elevationInfo=a,this._lastDragEvent=null;const e=new yt;return this._next=e,[i=>{if(this._lastDragEvent=i.action!=="end"?{...i}:null,this._enabled){const s=this._snap(i.screenEnd);return s!=null?{action:i.action,mapStart:i.mapStart,mapEnd:s,screenStart:i.screenStart,screenEnd:i.screenEnd}:null}return{action:i.action,mapStart:i.mapStart,mapEnd:i.mapEnd,screenStart:i.screenStart,screenEnd:i.screenEnd}},e]}}class zt extends O{constructor(t){super(),this._handles=new X,this._snapToScene=new jt,this._scale=1,this._radius=f,this._view=t.view,this._tool=t.tool,this._discMaterial=this._createMaterial(),this._discMaterialTransparent=this._createMaterial(.5),t.snapToScene!=null&&(this.snapToScene=t.snapToScene),t.radius!=null&&(this._radius=t.radius),this._createManipulator(),this.forEachManipulator(a=>this._tool.manipulators.add(a))}destroy(){this._handles=J(this._handles),this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()}),this._tool=null,this._view=null,this._manipulator=null}forEachManipulator(t){t(this._manipulator,M.TRANSLATE_XY)}get displayScale(){return this._scale}set displayScale(t){this._scale=t,this._updateManipulatorTransform()}get snapToScene(){return this._snapToScene.enabled}set snapToScene(t){this._snapToScene.enabled=t}get radius(){return this._radius}set radius(t){t!==this._radius&&(this._radius=t,this._updateManipulator())}get discManipulator(){return this._manipulator}createManipulatedObjectDragPipeline(t,a,e){if(!a.operations)return j();const i=a.graphic,s=a.elevationInfo,r=a.operations.data.spatialReference;return H(a,e,n=>this.createDragPipeline((o,u,c,h,p)=>({steps:u,cancel:c}=t(o,u,c,h,p),n(o,u,c)),s,r,i))}createDragPipeline(t,a,e,i){const s=this._view;return C(this._manipulator,(r,n,o,u,c)=>{const h=n.next(tt(s,r.elevationAlignedLocation)).next(Q(s,r.elevationAlignedLocation,a,e,i)).next(...this._snapToScene.createDragEventPipelineStep(s,a)).next(p=>({...p,manipulatorType:M.TRANSLATE_XY})).next(N());t(r,h,o,u,c)})}_updateManipulatorTransform(){const t=R(w.get(),b($.get(),this.displayScale,this.displayScale,this.displayScale));this._manipulator.modelTransform=t}_createManipulator(){const t=this._view;this._manipulator=new P({view:t,worldSized:!1,autoScaleRenderObjects:!1,focusMultiplier:1,touchMultiplier:1,collisionType:{type:"disc",direction:m(0,0,1)},worldOriented:!0}),this._updateManipulator()}_updateManipulator(){const t=Et(this._discMaterial,it,1,Pt,m(0,0,1),m(0,0,0));t.transformation=R(F(),m(this._radius,this._radius,this._radius)),this._manipulator.renderObjects=[new d(t,_.Focused),new d(t.instantiate({material:this._discMaterialTransparent}),_.Unfocused)],this._manipulator.radius=Ot*(this._radius/f)}_createMaterial(t=1){const a=new et({cullFace:at.Back,renderOccluded:D.Transparent,isDecoration:!0});return this._handles.add(z(()=>Y.toUnitRGBA(this._view.effectiveTheme.accentColor),e=>{e[3]*=t,a.setParameters({color:e})},K)),a}get test(){}}class Yt extends O{constructor(t){super(),this._radius=f,this.events=new W,this._tool=t.tool,this._view=t.view;const a=new Dt({getTheme:()=>this._view.effectiveTheme});this._settings=a,t.radius!=null&&(this._radius=t.radius);const e=this._view.effectiveTheme.accentColor;this._materials={materialUnfocused:S(v(e,1,.25),D.Occlude),materialFocused:S(v(e,1,0),D.Occlude),materialOccludedUnfocused:S(v(e,.7,0),a.zManipulator.renderOccluded),materialOccludedFocused:S(v(e,.85,0),a.zManipulator.renderOccluded)},this._themeHandle=z(()=>this._view.effectiveTheme.accentColor,i=>{const s=v(i,1,.25),r=v(i,1,0),n=v(i,.7,0),o=v(i,.85,0),{materialUnfocused:u,materialFocused:c,materialOccludedUnfocused:h,materialOccludedFocused:p}=this._materials;u.setParameters({color:s}),c.setParameters({color:r}),h.setParameters({color:n}),p.setParameters({color:o})}),this._createManipulator(),this.forEachManipulator(i=>this._tool.manipulators.add(i))}destroy(){this._themeHandle=ot(this._themeHandle),this._manipulator.applyObjectTransform=Ft,this.forEachManipulator(t=>{this._tool.manipulators.remove(t),t.destroy()})}forEachManipulator(t){t(this._manipulator,M.TRANSLATE_Z)}createManipulatedObjectDragPipeline(t,a,e){if(!a.operations)return j();const i=a.operations.data.spatialReference;return H(a,e,s=>this.createDragPipeline((r,n,o,u,c)=>({steps:n,cancel:o}=t(r,n,o,u,c),s(r,n,o)),i))}createDragPipeline(t,a){const e=this._view;return C(this._manipulator,(i,s,r,n,o)=>{const u=s.next(c=>({...c,manipulatorType:M.TRANSLATE_Z})).next(gt(e,i.renderLocation,a)).next(N());t(i,u,r,n,o)})}get radius(){return this._radius}set radius(t){t!==this._radius&&(this._radius=t,this._updateManipulator())}_updateManipulator(){const t=this._settings,a=this._radius/f,e=t.zManipulator.height*a,i=t.zManipulator.coneHeight*a,s=t.zManipulator.coneWidth*a,r=t.zManipulator.width*a,n=[m(0,0,0),m(0,0,e)],o=[m(0,0,0),m(0,0,e+i)],u=(Z=>{const T=F();return lt(T,T,[0,0,e]),ut(T,T,Math.PI/2),T})(),{materialUnfocused:c,materialFocused:h,materialOccludedUnfocused:p,materialOccludedFocused:g}=this._materials,A=St(c,n,r/2,16,!1),y=bt(c,i,s/2,16,!1);y.transformation=u,this._manipulator.renderObjects=[new d(y,_.Unfocused),new d(A,_.Unfocused),new d(y.instantiate({material:h}),_.Focused),new d(A.instantiate({material:h}),_.Focused),new d(y.instantiate({material:p}),_.Unfocused),new d(A.instantiate({material:p}),_.Unfocused),new d(y.instantiate({material:g}),_.Focused),new d(A.instantiate({material:g}),_.Focused)],this._manipulator.radius=r/2+2,this._manipulator.collisionType={type:"line",paths:[o]}}_createManipulator(){const t=this._view,a=new P({view:t,autoScaleRenderObjects:!1,worldSized:!1,selectable:!1,cursor:"ns-resize",elevationInfo:this.elevationInfo,worldOriented:!0,collisionPriority:1.6});a.applyObjectTransform=e=>{const i=t.state.camera,s=G;t.renderCoordsHelper.toRenderCoords(this._manipulator.elevationAlignedLocation,s);const r=ct(i.eye,s),n=i.computeRenderPixelSizeAtDist(r),o=ht(E,s,i.eye);B(o,o);const u=Ut;t.renderCoordsHelper.worldUpAtPosition(G,u);const c=Math.abs(pt(o,u)),h=k(E,o,u),p=k(E,h,u),g=Mt(c,.01,1),A=1-Math.sqrt(1-g*g)/g/i.fullWidth,y=this._settings,Z=this._radius/f,T=y.zManipulator.width*Z;dt(p,B(p,p),(1/A-1)*r+n*T),e[12]-=E[0],e[13]-=E[1],e[14]-=E[2]},this._manipulator=a,this._updateManipulator()}get test(){}}function v(l,t,a){const e=_t(l,a);return e.a*=t,Y.toUnitRGBA(e)}const G=U(),E=U(),Ut=U(),Ft=()=>{};class xa extends O{constructor(t){super(),this._handles=new X,this._interactive=!0;const{tool:a,view:e,snapToScene:i,radius:s}=t;this._view=e,this.xyManipulation=new zt({tool:a,view:e,snapToScene:i,radius:s}),this.xyAxisManipulation=new Xt({tool:a,view:e,radius:s}),this.zManipulation=new Yt({tool:a,view:e,radius:s}),this.xyManipulation.available=t.xyAvailable,this.xyAxisManipulation.available=t.xyAxisAvailable,this.zManipulation.available=t.zAvailable,this._autoHideXYAxis(),this.forEachManipulator(r=>this._handles.add(r.events.on("grab-changed",()=>this._updateManipulatorInteractivity())))}destroy(){this._handles.destroy(),this.xyManipulation.destroy(),this.xyAxisManipulation.destroy(),this.zManipulation.destroy()}createManipulatedObjectDragPipeline(t,a,e){return L([this.xyManipulation.createManipulatedObjectDragPipeline((i,s,r,n,o)=>t(x.XY,i,s,r,n,o),a,e),this.xyAxisManipulation.createManipulatedObjectDragPipeline((i,s,r,n,o)=>t(x.XY_AXIS,i,s,r,n,o),a,e),this.zManipulation.createManipulatedObjectDragPipeline((i,s,r,n,o)=>t(x.Z,i,s,r,n,o),a,e)])}createDragPipeline(t,a,e,i){return L([this.xyManipulation.createDragPipeline((s,r,n,o,u)=>t(x.XY,s,r,n,o,u),a,e,i),this.xyAxisManipulation.createDragPipeline((s,r,n,o,u)=>t(x.XY_AXIS,s,r,n,o,u),a,e,i),this.zManipulation.createDragPipeline((s,r,n,o,u)=>t(x.Z,s,r,n,o,u),e)])}set snapToScene(t){this.xyManipulation.snapToScene=t}set angle(t){this.xyAxisManipulation.angle=t}set interactive(t){this._interactive!==t&&(this._interactive=t,this._updateManipulatorInteractivity())}set radius(t){this.xyAxisManipulation.radius=t,this.xyManipulation.radius=t,this.zManipulation.radius=t}set displayScale(t){this.xyManipulation.displayScale=t,this.xyAxisManipulation.displayScale=t}forEachManipulator(t){this.xyManipulation.forEachManipulator(a=>t(a,M.TRANSLATE_XY)),this.xyAxisManipulation.forEachManipulator(a=>t(a,M.TRANSLATE_XY)),this.zManipulation.forEachManipulator(a=>t(a,M.TRANSLATE_Z))}get _xyAxisVisible(){const t=this.xyManipulation.someManipulator(a=>a.focused)||this.xyAxisManipulation.someManipulator(a=>a.focused);return this._view.inputManager&&this._view.inputManager.latestPointerType==="touch"||t}_autoHideXYAxis(){const t=this.xyAxisManipulation,a=this.xyManipulation;if(mt("esri-mobile"))return;const e=[];a.forEachManipulator(s=>e.push(s)),t.forEachManipulator(s=>e.push(s));const i=()=>{const s=[];this._xyAxisVisible||t.forEachManipulator(r=>s.push(r.disableDisplay())),this._handles.remove(V),this._handles.add(s,V)};for(const s of e)this._handles.add(s.events.on("focus-changed",i));this._view.inputManager&&this._handles.add(ft(()=>{var s;return(s=this._view.inputManager)==null?void 0:s.latestPointerType},i)),i()}_updateManipulatorInteractivity(){const t=this.grabbing;this.forEachManipulator(a=>{a.interactive=!t&&this._interactive||a.grabbing})}static radiusForSymbol(t){const a=t!=null&&t.type==="point-3d"&&t.symbolLayers;return a&&a.some(e=>e.type==="icon")?Rt:f}}const V="disable-xy-axis-display";var x;(function(l){l[l.XY=0]="XY",l[l.XY_AXIS=1]="XY_AXIS",l[l.Z=2]="Z"})(x||(x={}));export{M as A,st as I,aa as P,f as a,va as b,x as c,sa as d,Pt as e,ha as f,pa as g,ca as h,ea as i,da as j,_a as k,ia as l,Ma as m,H as n,Rt as o,na as p,ma as q,ra as r,oa as s,O as t,xa as u,ua as v,fa as w,la as x,ga as y};
