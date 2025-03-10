const __vite__fileDeps=["./timeUtils-DFs82Cpv.js","./index-Dv-JqQDv.js","./index-CejX7rzk.css","./utils-CXgSw6Sd.js","./tagSymbols-BPcGfZon.js","./calcite-action-DegZGoaK.js","./calcite-action-menu-DIwnfY1q.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{bN as yt,ar as ut,o as F,gH as B,ev as xt,l_ as mt,G as O,_ as P,z as g,D as wt,gc as bt,br as Tt,lM as dt,j as i,y as a,fW as at,nF as U,P as ct,nG as Et,nH as kt,b3 as L,h as St,de as Mt,nI as $t,gC as Ct}from"./index-Dv-JqQDv.js";import{A as Ft}from"./Slider-Bgbn3XBE.js";import{e as lt,B as Dt,r as jt,n as o,m as At}from"./jsxFactory-C3RLkrq9.js";import{e as y}from"./globalCss-CZa70j6i.js";import{i as C}from"./legacyIcon-CtsJ0OTG.js";import{t as V}from"./accessibleHandler-CEs_6QlQ.js";import{e as Rt}from"./vmEvent-D4Ubqkbq.js";import{c as Wt}from"./themeUtils-C3zvZbsE.js";import{y as It,a as Lt}from"./Widgets-BWuGKMB-.js";import"./substitute-BVUBXY1A.js";const d="esri-time-slider",s={timeSlider:`${d}`,timeSliderOutOfBounds:`${d}--out-of-bounds`,timeSliderMode:`${d}__mode--`,timeSliderLayout:`${d}__layout--`,timeSliderRow:`${d}__row`,animation:`${d}__animation`,animationButton:`${d}__animation-button`,timeExtent:`${d}__time-extent`,timeExtentGroup:`${d}__time-extent-group`,timeExtentDate:`${d}__time-extent-date`,timeExtentTime:`${d}__time-extent-time`,timeExtentSeparator:`${d}__time-extent-separator`,playbackControls:`${d}__playback-controls`,min:`${d}__min`,minDate:`${d}__min-date`,minTime:`${d}__min-time`,slider:`${d}__slider`,sliderMajorTick:"majorTick",sliderMinorTick:"minorTick",max:`${d}__max`,maxDate:`${d}__max-date`,maxTime:`${d}__max-time`,previous:`${d}__previous`,previousButton:`${d}__previous-button`,next:`${d}__next`,nextButton:`${d}__next-button`,warning:`${d}__warning`,warningText:`${d}__warning-text`,hasActions:`${d}--has-actions`,actions:`${d}__actions`,actionsButton:`${d}__actions-button`},ot=1e4;function Z(t){return t!=null&&t.count!==void 0}function j(t){return t!=null&&t.interval!==void 0}function rt(t){return t!=null&&t.dates!==void 0}let h=class extends yt.EventedAccessor{constructor(t){super(t),this._animationController=null,this._isViewTimeExtentInitialized=!1,this._timerId=null,this.actions=new ut,this.fullTimeExtent=null,this.loop=!1,this.mode="time-window",this.stops={count:10},this.timeExtent=null,this.view=null}initialize(){this.addHandles([F(()=>this.effectiveStops,()=>{this.timeExtent==null&&(this.timeExtent=this._getDefaultTimeExtent())},B),F(()=>this.view,(t,e)=>{this._unregisterWidget(e),this._registerWidget(t)},xt),F(()=>this.timeExtent,t=>{if(this.view==null)return;const e=this.view.timeExtent;(t!=null&&!t.isAllTime||e!=null&&!e.isAllTime)&&(t!=null&&e!=null&&t.equals(e)||(this.view.timeExtent=t))},B),F(()=>{var t;return(t=this.view)==null?void 0:t.timeExtent},t=>{this._isViewTimeExtentInitialized?(t!=null&&!t.isAllTime||this.timeExtent!=null&&!this.timeExtent.isAllTime)&&(t!=null&&this.timeExtent!=null&&t.equals(this.timeExtent)||(this.timeExtent=t)):this._isViewTimeExtentInitialized=!0})])}destroy(){this._timerId!=null&&(clearInterval(this._timerId),this._timerId=null),this._unregisterWidget(this.view),this.view=null,this._animationController!=null&&(this._animationController.abort(),this._animationController=null)}get effectiveStops(){const{fullTimeExtent:t,stops:e}=this;if(rt(e)){const{dates:r}=e;if(r==null||r.length===0)return null;const m=r.sort((v,c)=>v.getTime()-c.getTime());if(t==null)return m;const{start:n,end:p}=t;return n==null||p==null?m:m.filter(v=>!(v.getTime()<n.getTime()||v.getTime()>p.getTime()))}if(Z(e)){const r=e.timeExtent??t;return this._divideTimeExtentByCount(r,e.count)}if(j(e)){const r=e.timeExtent??t;return this._divideTimeExtentByInterval(r,e.interval)}return[]}set playRate(t){t<=0||t>36e5||(this.state==="playing"&&this._startAnimation(),this._set("playRate",t))}get state(){return this.fullTimeExtent==null?"disabled":this._animationController!=null?"playing":"ready"}get timeExtentValues(){const{mode:t,timeExtent:e}=this;if(e==null||e.isAllTime||e.isEmpty)return null;const{start:r,end:m}=e;switch(t){case"cumulative-from-end":case"instant":return r!=null?[r.getTime()]:null;case"cumulative-from-start":return m!=null?[m.getTime()]:null;case"time-window":return r!=null&&m!=null?[r.getTime(),m.getTime()]:null}}static async getPropertiesFromWebMap(t,e){mt(O.getLogger("esri.widgets.TimeSlider.TimeSliderViewModel"),"`TimeSliderViewModel.getPropertiesFromWebMap` is deprecated in favor of 'timeUtils.getTimeSliderSettingsFromWebDocument'",{replacement:"timeUtils.getTimeSliderSettingsFromWebDocument",version:"4.29",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-support-timeUtils.html#getTimeSliderSettingsFromWebDocument",warnOnce:!0});const{getTimeSliderSettingsFromWebDocument:r}=await P(()=>import("./timeUtils-DFs82Cpv.js"),__vite__mapDeps([0,1,2,3,4]),import.meta.url);return r(t,e)}next(){this._step({forward:!0,allowRestart:!1})}play(){this._startAnimation()}previous(){this._step({forward:!1,allowRestart:!1})}stop(){this._stopAnimation()}triggerAction(t){this.emit("trigger-action",{action:t})}updateWebDocument(t){const e=new It({currentTimeExtent:this.timeExtent,fullTimeExtent:this.fullTimeExtent,loop:this.loop,numStops:Z(this.stops)?this.stops.count:null,numThumbs:this.mode==="time-window"?2:1,stopDelay:this.playRate,stopInterval:j(this.stops)?this.stops.interval:null,stops:rt(this.stops)?this.stops.dates:null});t.widgets?t.widgets.timeSlider=e:t.widgets=new Lt({timeSlider:e})}valuesToTimeExtent(t){if(t==null)return null;const e=t.sort((n,p)=>n-p).map(n=>new Date(n)),r=e.length>0?e[0]:null,m=e.length>1?e[1]:null;switch(this.mode){case"time-window":return new g({start:r,end:m});case"instant":return new g({start:r,end:r});case"cumulative-from-start":return new g({start:null,end:r});case"cumulative-from-end":return new g({start:r,end:null});default:return g.allTime}}async _animate(){var t;try{const e=this.view,r=(t=this._animationController)==null?void 0:t.signal;await Promise.all([wt(this.playRate,null,r),e!=null&&bt(()=>e.updating===!1,r)])}catch(e){return Tt(e)||O.getLogger(this).error(e),void(this._animationController=null)}this._step({forward:!0,allowRestart:!1}),this._animationController!=null&&this._animate()}_divideTimeExtentByCount(t,e=10){if(!t||!e)return[];const{start:r,end:m}=t;if(r==null||m==null)return[];if(e>ot)return this._divideTimeExtentByCount(t);const n=[],p=r.getTime(),v=m.getTime()-p;for(let c=0;c<=e;c++)n.push(new Date(p+c/e*v));return n}_divideTimeExtentByInterval(t,e,r=ot){if(!t||!e)return[];const{start:m,end:n}=t;if(m==null||n==null)return[];const p=n.getTime()-m.getTime(),v=e.toMilliseconds();if(v<=0||p/v>r)return this._divideTimeExtentByCount(t);const c=[],{value:E,unit:b}=e;let l=m;for(;l.getTime()<=n.getTime();)c.push(new Date(l.getTime())),l=dt(l,E,b);return c}_getDefaultTimeExtent(){const{effectiveStops:t,mode:e}=this;if(t==null||!e)return null;switch(e){case"time-window":return t.length>1?new g({start:t[0],end:t[1]}):null;case"cumulative-from-start":return t.length>0?new g({start:null,end:t[0]}):null;case"cumulative-from-end":return t.length>0?new g({start:t[0],end:null}):null;case"instant":return t.length>0?new g({start:t[0],end:t[0]}):null;default:return null}}_registerWidget(t){t!=null&&(t.persistableViewModels.includes(this)||t.persistableViewModels.add(this))}_startAnimation(){this._stopAnimation(),this._animationController=new AbortController,this._step({forward:!0,allowRestart:!0}),this._animate()}_step(t){const{forward:e,allowRestart:r}=t,{effectiveStops:m}=this;if(this.timeExtentValues==null||m==null)return;const n=m.map(l=>l.getTime()),p=this.timeExtentValues.map(l=>{const _=n.indexOf(l);if(_!==-1)return _;const k=n.reduce((f,S)=>Math.abs(S-l)<Math.abs(f-l)?S:f);return n.indexOf(k)}),v=p.map(l=>l+(e?1:-1)),c=v.some(l=>l<0||l>n.length-1),{loop:E,state:b}=this;if(c)if(E||r){const l=Math.min(...p),_=Math.max(...p),k=(e?p.map(f=>f-l):p.map(f=>f+(n.length-1-_))).map(f=>n[f]);this.timeExtent=this.valuesToTimeExtent(k)}else b==="playing"&&this.stop();else{const l=v.map(_=>n[_]);this.timeExtent=this.valuesToTimeExtent(l)}}_stopAnimation(){this._animationController!=null&&(this._animationController.abort(),this._animationController=null)}_unregisterWidget(t){t!=null&&t.persistableViewModels.remove(this)}};i([a()],h.prototype,"_animationController",void 0),i([a({type:ut})],h.prototype,"actions",void 0),i([a({readOnly:!0})],h.prototype,"effectiveStops",null),i([a({type:g})],h.prototype,"fullTimeExtent",void 0),i([a({nonNullable:!0})],h.prototype,"loop",void 0),i([a({nonNullable:!0})],h.prototype,"mode",void 0),i([a({nonNullable:!0,value:1e3})],h.prototype,"playRate",null),i([a({readOnly:!0})],h.prototype,"state",null),i([a({cast:t=>t==null?null:(j(t)&&(t.interval=at(U,t.interval)),(j(t)||Z(t))&&(t.timeExtent=at(g,t.timeExtent)),t)})],h.prototype,"stops",void 0),i([a({type:g})],h.prototype,"timeExtent",void 0),i([a({readOnly:!0})],h.prototype,"timeExtentValues",null),i([a()],h.prototype,"view",void 0),i([a()],h.prototype,"next",null),i([a()],h.prototype,"play",null),i([a()],h.prototype,"previous",null),i([a()],h.prototype,"stop",null),i([a()],h.prototype,"updateWebDocument",null),h=i([ct("esri.widgets.TimeSlider.TimeSliderViewModel")],h);const N=h,Vt=3,Bt=858,Ot=[{minor:{value:100,unit:"milliseconds"},major:{value:1,unit:"seconds"},format:{second:"numeric"}},{minor:{value:500,unit:"milliseconds"},major:{value:5,unit:"seconds"},format:{second:"numeric"}},{minor:{value:1,unit:"seconds"},major:{value:20,unit:"seconds"},format:{minute:"numeric",second:"numeric"}},{minor:{value:2,unit:"seconds"},major:{value:30,unit:"seconds"},format:{minute:"numeric",second:"numeric"}},{minor:{value:10,unit:"seconds"},major:{value:1,unit:"minutes"},format:{minute:"numeric"}},{minor:{value:15,unit:"seconds"},major:{value:5,unit:"minutes"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:1,unit:"minutes"},major:{value:20,unit:"minutes"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:5,unit:"minutes"},major:{value:2,unit:"hours"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:15,unit:"minutes"},major:{value:6,unit:"hours"},format:{hour:"numeric",minute:"numeric"}},{minor:{value:1,unit:"hours"},major:{value:1,unit:"days"},format:{day:"numeric",month:"short"}},{minor:{value:6,unit:"hours"},major:{value:1,unit:"weeks"},format:{day:"numeric",month:"short"}},{minor:{value:1,unit:"days"},major:{value:1,unit:"months"},format:{month:"long"}},{minor:{value:2,unit:"days"},major:{value:1,unit:"months"},format:{month:"short"}},{minor:{value:3,unit:"days"},major:{value:1,unit:"months"},format:{month:"short"}},{minor:{value:4,unit:"days"},major:{value:3,unit:"months"},format:{month:"short",year:"numeric"}},{minor:{value:1,unit:"weeks"},major:{value:1,unit:"years"},format:{year:"numeric"}},{minor:{value:1,unit:"months"},major:{value:1,unit:"years"},format:{year:"numeric"}},{minor:{value:2,unit:"months"},major:{value:2,unit:"years"},format:{year:"numeric"}},{minor:{value:1,unit:"years"},major:{value:1,unit:"decades"},format:{year:"numeric"}},{minor:{value:2,unit:"years"},major:{value:5,unit:"decades"},format:{year:"numeric"}},{minor:{value:5,unit:"decades"},major:{value:10,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:1,unit:"centuries"},major:{value:10,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:2,unit:"centuries"},major:{value:20,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:5,unit:"centuries"},major:{value:50,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:10,unit:"centuries"},major:{value:100,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:20,unit:"centuries"},major:{value:200,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:50,unit:"centuries"},major:{value:500,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:100,unit:"centuries"},major:{value:1e3,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:200,unit:"centuries"},major:{value:1e3,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:500,unit:"centuries"},major:{value:5e3,unit:"centuries"},format:{era:"short",year:"numeric"}},{minor:{value:1e3,unit:"centuries"},major:{value:1e4,unit:"centuries"},format:{era:"short",year:"numeric"}}];let u=class extends Dt{constructor(t,e){super(t,e),this._ignoreNextSliderUpdate=!1,this._slider=new Ft({precision:0,visibleElements:{rangeLabels:!1},rangeLabelInputsEnabled:!1,thumbsConstrained:!1}),this._tickFormat=null,this.disabled=!1,this.labelFormatFunction=null,this.messages=null,this.messagesCommon=null,this.tickConfigs=null,this.timeVisible=!1,this.viewModel=new N}initialize(){this.addHandles([F(()=>this._slider.values,t=>{if(this._ignoreNextSliderUpdate)return void(this._ignoreNextSliderUpdate=!1);const e=this.viewModel.valuesToTimeExtent(t);this.timeExtent!=null?e!=null?this.timeExtent.equals(e)||(this.timeExtent=e):this.timeExtent=null:e!=null&&(this.timeExtent=e)}),F(()=>this.effectiveStops,()=>this._updateSliderSteps(),B)])}loadDependencies(){return jt({action:()=>P(()=>import("./calcite-action-DegZGoaK.js"),__vite__mapDeps([5,1,2]),import.meta.url),"action-menu":()=>P(()=>import("./calcite-action-menu-DIwnfY1q.js"),__vite__mapDeps([6,1,2]),import.meta.url)})}destroy(){this._slider.destroy(),this._tickFormat=null}get _dateFormat(){return this._getIntlOptions("short-date")}get _timeFormat(){return this._getIntlOptions("long-time")}get actions(){return this.viewModel.actions}set actions(t){this.viewModel.actions=t}get effectiveStops(){return this.viewModel.effectiveStops}get fullTimeExtent(){return this.viewModel.fullTimeExtent}set fullTimeExtent(t){this.viewModel.fullTimeExtent=t}get icon(){return"clock"}set icon(t){this._overrideIfSome("icon",t)}get interactive(){return!(this.disabled||this.viewModel.state==="disabled"||this.timeZone===Et)}get label(){var t;return((t=this.messages)==null?void 0:t.widgetLabel)??""}set label(t){this._overrideIfSome("label",t)}set layout(t){["auto","compact","wide"].includes(t)||(t="auto"),this._set("layout",t)}get loop(){return this.viewModel.loop}set loop(t){this.viewModel.loop=t}get mode(){return this.viewModel.mode}set mode(t){this.viewModel.mode=t}get playRate(){return this.viewModel.playRate}set playRate(t){this.viewModel.playRate=t}get stops(){return this.viewModel.stops}set stops(t){this.viewModel.stops=t}get tickFormats(){const{timeZone:t}=this;return Ot.map(({minor:e,major:r,format:m})=>({minor:new U(e),major:new U(r),format:{...m,timeZone:t}}))}get timeExtent(){return this.viewModel.timeExtent}set timeExtent(t){this.viewModel.timeExtent=t}get timeZone(){var t;return((t=this.viewModel.view)==null?void 0:t.timeZone)??kt}set timeZone(t){this._overrideIfSome("timeZone",t)}get view(){return this.viewModel.view}set view(t){this.viewModel.view=t}static async getPropertiesFromWebMap(t,e){return mt(O.getLogger("esri.widgets.TimeSlider"),"`TimeSlider.getPropertiesFromWebMap` is deprecated in favor of 'timeUtils.getTimeSliderSettingsFromWebDocument'",{replacement:"timeUtils.getTimeSliderSettingsFromWebDocument",version:"4.29",see:"https://developers.arcgis.com/javascript/latest/api-reference/esri-support-timeUtils.html#getTimeSliderSettingsFromWebDocument",warnOnce:!0}),N.getPropertiesFromWebMap(t,e)}next(){return this.viewModel.next()}play(){return this.viewModel.play()}previous(){return this.viewModel.previous()}stop(){return this.viewModel.stop()}render(){var tt,et;const{_slider:t,actions:e,domNode:r,effectiveStops:m,fullTimeExtent:n,interactive:p,messages:v,messagesCommon:c,mode:E,tickConfigs:b,timeExtent:l,timeVisible:_,viewModel:{state:k,timeExtentValues:f}}=this;if(n!=null){const{start:w,end:it}=n;if(w!=null&&it!=null){const A=w.getTime(),R=it.getTime(),nt=t.min!==A||t.max!==R;if(nt&&(t.min=A,t.max=R),b!=null)t.tickConfigs!==b&&(t.tickConfigs=b);else{const gt=(R-A)/(((tt=t.trackElement)==null?void 0:tt.offsetWidth)||400),$=this.tickFormats.find(W=>W.minor.toMilliseconds()>Vt*gt)??this.tickFormats.at(-1),st=this._tickFormat!==$&&$!=null;if(st&&(this._tickFormat=$),nt||st){const W={mode:"position",values:this._getTickPositions($.minor),labelsVisible:!1,tickCreatedFunction:(I,T)=>{T==null||T.classList.add(s.sliderMinorTick)}},_t={mode:"position",values:this._getTickPositions($.major),labelsVisible:!0,tickCreatedFunction:(I,T)=>{T==null||T.classList.add(s.sliderMajorTick)},labelFormatFunction:I=>L(I,$.format)};t.tickConfigs=[W,_t]}}}}const S=((et=this.fullTimeExtent)==null?void 0:et.start)==null||this.fullTimeExtent.end==null||this.timeExtent==null||this.timeExtent.isAllTime||this.timeExtent.isEmpty||this.timeExtent.start!=null&&(this.timeExtent.start<this.fullTimeExtent.start||this.timeExtent.start>this.fullTimeExtent.end)||this.timeExtent.end!=null&&(this.timeExtent.end>this.fullTimeExtent.end||this.timeExtent.end<this.fullTimeExtent.start);if(S)switch(this._ignoreNextSliderUpdate=!0,E){case"time-window":t.values=[t.min,t.max];break;case"instant":case"cumulative-from-end":t.values=[t.min];break;case"cumulative-from-start":t.values=[t.max]}else f!=null?St(t.values,f)||(t.values=f):t.values=null;t.disabled=!p;const pt=k==="ready",D=k==="playing",x=S||!p||m==null||m.length===0,M=this.layout==="auto"?r.clientWidth<Bt?"compact":"wide":this.layout,z=o("div",{class:s.animation},o("button",{"aria-disabled":x?"true":"false","aria-label":D?c.control.stop:c.control.play,bind:this,class:this.classes(y.widgetButton,s.animationButton,x&&y.buttonDisabled),disabled:x,onclick:this._playOrStopClick,title:D?c.control.stop:c.control.play,type:"button"},o("div",{class:this.classes((pt||x)&&C.play,D&&C.pause)}))),ht=this.labelFormatFunction!=null?o("div",{afterCreate:this._createLabel,afterUpdate:this._createLabel,bind:this,class:s.timeExtentDate,"data-date":l?[l.start,l.end]:null,"data-layout":M,"data-type":"extent",key:"extent"}):l==null||l!=null&&l.isAllTime?[o("div",{class:this.classes(s.warning,C.noticeTriangle)}),o("div",{class:s.warningText,key:"warning-text"},v.noTimeExtent)]:l.isEmpty?[o("div",{class:this.classes(s.warning,C.noticeTriangle)}),o("div",{class:s.warningText,key:"warning-text"},v.emptyTimeExtent)]:[l.start!=null&&o("div",{class:s.timeExtentGroup,key:"start-date-group"},o("div",{class:s.timeExtentDate,key:"start-date"},this._formatDate(l.start)),_?o("div",{class:s.timeExtentTime,key:"start-time"},this._formatTime(l.start)):null),l.start!=null&&l.end!=null&&l.start.getTime()!==l.end.getTime()&&o("div",{class:s.timeExtentSeparator,key:"separator"},"–"),l.end!=null&&(l.start==null||l.start.getTime()!==l.end.getTime())&&o("div",{class:s.timeExtentGroup,key:"end-date-group"},o("div",{class:s.timeExtentDate,key:"end-date"},this._formatDate(l.end)),_?o("div",{class:s.timeExtentTime,key:"end-time"},this._formatTime(l.end)):null)],G=o("div",{class:this.classes(s.timeExtent,!p&&y.buttonDisabled)},[ht]),vt=this.labelFormatFunction!=null?o("div",{afterCreate:this._createLabel,afterUpdate:this._createLabel,bind:this,class:s.minDate,"data-date":n==null?void 0:n.start,"data-layout":M,"data-type":"min",key:"min-date"}):(n==null?void 0:n.start)!=null&&[o("div",{class:s.minDate,key:"min-date"},this._formatDate(n.start)),_&&o("div",{class:s.minTime,key:"min-time"},this._formatTime(n.start))],H=o("div",{class:this.classes(s.min,!p&&y.buttonDisabled)},[vt]),q=o("div",{class:s.slider},t.render()),ft=this.labelFormatFunction!=null?o("div",{afterCreate:this._createLabel,afterUpdate:this._createLabel,bind:this,class:s.maxDate,"data-date":n==null?void 0:n.end,"data-layout":M,"data-type":"max",key:"max-date"}):(n==null?void 0:n.end)!=null&&[o("div",{class:s.maxDate,key:"max-date"},this._formatDate(n.end)),_&&o("div",{class:s.maxTime,key:"max-time"},this._formatTime(n.end))],J=o("div",{class:this.classes(s.max,!p&&y.buttonDisabled)},[ft]),K=o("div",{class:s.previous},o("button",{"aria-disabled":x?"true":"false","aria-label":c.pagination.previous,bind:this,class:this.classes(y.widgetButton,s.previousButton,(D||x)&&y.buttonDisabled),disabled:x,onclick:this._previousClick,title:c.pagination.previous,type:"button"},o("div",{class:C.reverse}))),Q=o("div",{class:s.next},o("button",{"aria-disabled":x?"true":"false","aria-label":c.pagination.next,bind:this,class:this.classes(y.widgetButton,s.nextButton,(D||x)&&y.buttonDisabled),disabled:x,onclick:this._nextClick,title:c.pagination.next,type:"button"},o("div",{class:C.forward}))),X=(e==null?void 0:e.length)>0,Y=X&&o("div",{class:s.actions,title:c.options},o("calcite-action-menu",{class:s.actionsButton,label:c.options},e.toArray().map(w=>o("calcite-action",{bind:this,icon:w.icon,id:w.id,onclick:()=>this.viewModel.triggerAction(w),text:w.title,textEnabled:!0,title:w.title}))));return o("div",{afterCreate:w=>{this.addHandles(At(w,()=>this.scheduleRender()))},"aria-label":v.widgetLabel,class:this.classes(s.timeSlider,y.widget,`${s.timeSliderMode}${E}`,`${s.timeSliderLayout}${M}`,!p&&y.disabled,S&&s.timeSliderOutOfBounds,X&&s.hasActions,Wt())},M==="wide"&&o("div",{class:s.timeSliderRow},o("div",{class:s.playbackControls},[z,G,H,q,J,K,Q]),Y),M==="compact"&&[o("div",{class:s.timeSliderRow,key:"time-slider-row-1"},[G,Y]),o("div",{class:s.timeSliderRow,key:"time-slider-row-2"},[q]),o("div",{class:s.timeSliderRow,key:"time-slider-row-3"},[H,K,z,Q,J])])}updateWebDocument(t){var e;(e=this.viewModel)==null||e.updateWebDocument(t)}_createLabel(t){if(this.labelFormatFunction==null)return;const e=t.getAttribute("data-type"),r=t.getAttribute("data-layout"),m=t["data-date"];this.labelFormatFunction(m,e,t,r)}_formatDate(t){return L(t,this._dateFormat)}_formatTime(t){return L(t,this._timeFormat)}_getIntlOptions(t){const{timeZone:e}=this;return{...Mt(t),timeZone:e}}_getTickPositions(t){const{fullTimeExtent:e}=this;if((e==null?void 0:e.start)==null||e.end==null)return[];const{start:r,end:m}=e,n=[],{value:p,unit:v}=t;let c=$t(r,v,this.timeZone);for(;c.getTime()<=m.getTime();)c.getTime()>=r.getTime()&&n.push(c.getTime()),c=dt(c,p,v,this.timeZone);return n}_updateSliderSteps(){this._slider.steps=this.effectiveStops!=null&&this.effectiveStops.length>0?this.effectiveStops.map(t=>t.getTime()):null}_playOrStopClick(){switch(this.viewModel.state){case"ready":this.viewModel.play();break;case"playing":this.viewModel.stop();break;case"disabled":break;default:Ct(this.viewModel.state)}}_previousClick(){this.viewModel.previous()}_nextClick(){this.viewModel.next()}};i([a()],u.prototype,"_dateFormat",null),i([a()],u.prototype,"_timeFormat",null),i([a()],u.prototype,"actions",null),i([a()],u.prototype,"disabled",void 0),i([a()],u.prototype,"effectiveStops",null),i([a()],u.prototype,"fullTimeExtent",null),i([a()],u.prototype,"icon",null),i([a({readOnly:!0})],u.prototype,"interactive",null),i([a()],u.prototype,"label",null),i([a()],u.prototype,"labelFormatFunction",void 0),i([a({value:"auto"})],u.prototype,"layout",null),i([a()],u.prototype,"loop",null),i([a(),lt("esri/widgets/TimeSlider/t9n/TimeSlider")],u.prototype,"messages",void 0),i([a(),lt("esri/t9n/common")],u.prototype,"messagesCommon",void 0),i([a()],u.prototype,"mode",null),i([a()],u.prototype,"playRate",null),i([a()],u.prototype,"stops",null),i([a()],u.prototype,"tickConfigs",void 0),i([a()],u.prototype,"tickFormats",null),i([a()],u.prototype,"timeExtent",null),i([a({nonNullable:!0})],u.prototype,"timeVisible",void 0),i([a()],u.prototype,"timeZone",null),i([a()],u.prototype,"view",null),i([a({type:N}),Rt("trigger-action")],u.prototype,"viewModel",void 0),i([V()],u.prototype,"_playOrStopClick",null),i([V()],u.prototype,"_previousClick",null),i([V()],u.prototype,"_nextClick",null),u=i([ct("esri.widgets.TimeSlider")],u);const Qt=u;export{Qt as default};
