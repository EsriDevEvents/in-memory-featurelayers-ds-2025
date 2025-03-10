import{j as a,y as r,P as F,b_ as S}from"./index-Dv-JqQDv.js";import{e as B,B as D,n as d,m as N}from"./jsxFactory-C3RLkrq9.js";import{e as f}from"./globalCss-CZa70j6i.js";import{s as I}from"./substitute-BVUBXY1A.js";let g=class extends S{constructor(e){super(e),this.average=null,this.bins=null,this.max=null,this.min=null}get binRange(){const{bins:e}=this;return e&&e.length>1?e[e.length-1].maxValue-e[0].minValue:0}set labelFormatFunction(e){this._set("labelFormatFunction",e)}get range(){const{max:e,min:t}=this;return e!=null&&t!=null?e-t:0}get state(){const{bins:e,range:t}=this;return t>0&&(e!=null&&e.length)?"ready":"disabled"}};a([r()],g.prototype,"average",void 0),a([r()],g.prototype,"bins",void 0),a([r({readOnly:!0})],g.prototype,"binRange",null),a([r()],g.prototype,"labelFormatFunction",null),a([r()],g.prototype,"max",void 0),a([r()],g.prototype,"min",void 0),a([r({readOnly:!0})],g.prototype,"range",null),a([r({readOnly:!0})],g.prototype,"state",null),g=a([F("esri.widgets.Histogram.HistogramViewModel")],g);const U=g;var v;const c="esri-histogram",h={base:c,horizontalLayout:`${c}--horizontal`,verticalLayout:`${c}--vertical`,content:`${c}__content`,svg:`${c}__svg`,bar:`${c}__bar`,bars:`${c}__bars`,label:`${c}__label`,dataLines:`${c}__data-lines`,dataLinesSubgroup:`${c}__data-lines-subgroup`,dataLine:`${c}__data-line`,averageLabel:`${c}__average-label`,averageDataLine:`${c}__average-data-line`,averageSymbol:`${c}__average-symbol`};let l=v=class extends D{constructor(e,t){super(e,t),this._bgFillId=`${this.id}-bg-fill`,this._containerNode=null,this._containerDimensions={width:0,height:0},this._defaultBarColor="#d8d8d8",this.barCreatedFunction=null,this.dataLines=null,this.dataLineCreatedFunction=null,this.dataLineUpdatedFunction=null,this.messages=null,this.viewModel=new U}get average(){return this.viewModel.average}set average(e){this.viewModel.average=e}get bins(){return this.viewModel.bins}set bins(e){this.viewModel.bins=e}get icon(){return"graph-histogram"}set icon(e){this._overrideIfSome("icon",e)}get label(){var e;return((e=this.messages)==null?void 0:e.widgetLabel)??""}set label(e){this._overrideIfSome("label",e)}get labelFormatFunction(){return this.viewModel.labelFormatFunction}set labelFormatFunction(e){this.viewModel.labelFormatFunction=e}set layout(e){e!=="vertical"&&(e="horizontal"),this._set("layout",e)}get max(){return this.viewModel.max}set max(e){this.viewModel.max=e}get min(){return this.viewModel.min}set min(e){this.viewModel.min=e}get state(){return this.viewModel.state}static fromHistogramResult(e){const{bins:t,maxValue:i,minValue:n}=e;return new v({bins:t,max:i,min:n})}render(){const{label:e,layout:t,state:i}=this,n=this.classes(h.base,f.widget,t==="horizontal"?h.horizontalLayout:h.verticalLayout,i==="disabled"?f.disabled:null);return d("div",{afterCreate:this._afterContainerNodeCreate,"aria-label":e,bind:this,class:n},i==="ready"?this._renderContent():null)}_renderContent(){if(!this._containerNode)return;const e=this._bgFillId,t=`clip-path: url(#${e})`;return d("div",{class:h.content},d("svg",{class:h.svg,xmlns:"http://www.w3.org/2000/svg"},d("defs",null,this._renderFillDefinition(e)),d("g",{style:t},this._renderBarsGroup()),this._renderLinesGroup()))}_renderBarsGroup(){return d("g",{class:this.classes(h.bars)},this._renderBars())}_renderBars(){const{layout:e,viewModel:{binRange:t,range:i}}=this;if(!t||!i)return;const n=t/i,{width:s,height:o}=this._containerDimensions;if(o===0&&s===0)return;if(o===0&&s!==0)return void this.scheduleRender();const[u,p]=e==="vertical"?[o*n,s]:[o,s*n];return this._getBarDimensions(u,p).map(([m,_],b)=>this._renderBar(b,m,_))}_renderBar(e,t,i){const{bins:n,layout:s,max:o,messages:u,viewModel:{range:p}}=this;if(!n||o==null)return;const{width:m,height:_}=this._containerDimensions,b=n.slice()[e],{count:w,maxValue:y,minValue:x}=b,L=o-y,[C,M]=s==="vertical"?[0,L*(_/p)]:[m-i-L*(m/p),_-t],$=I(u.barLabel,{count:w,maxValue:y,minValue:x});return d("rect",{afterCreate:this._afterBarCreate,"aria-label":$,bind:this,class:h.bar,"data-index":e,fill:this._defaultBarColor,height:t,role:"img","shape-rendering":"crispEdges","stroke-width":"0",width:i,x:C,y:M})}_renderLinesGroup(){return d("g",{class:this.classes(h.dataLines)},this._renderAverageLine(),this._renderCustomLines())}_renderAverageLine(){const{average:e}=this;if(e==null)return;const t=[d("tspan",{class:this.classes(h.averageSymbol)},"x̄ "),d("tspan",{class:this.classes(h.averageLabel)},this.labelFormatFunction?this.labelFormatFunction(e,"average"):e)];return d("g",{afterCreate:this._afterLinesSubgroupCreate,afterUpdate:this._afterLinesSubgroupUpdate,bind:this,class:this.classes(h.dataLinesSubgroup)},d("title",{key:"title"},e),this._renderLine(e,this.classes(h.averageDataLine)),this._renderLabel({label:t,value:e}))}_renderCustomLines(){var e;if((e=this.dataLines)!=null&&e.length)return this.dataLines.map((t,i)=>this._renderLineSubgroup(t,i))}_renderLineSubgroup(e,t){const{value:i}=e;return d("g",{afterCreate:this._afterLinesSubgroupCreate,afterUpdate:this._afterLinesSubgroupUpdate,bind:this,class:this.classes(h.dataLinesSubgroup),"data-index":t},d("title",{key:"title"},i),this._renderLine(i),this._renderLabel(e))}_renderLine(e,t){const[i,n,s,o]=this._getLinePosition(e);return d("line",{class:this.classes(h.dataLine,t),"shape-rendering":"crispEdges",x1:i,x2:n,y1:s,y2:o})}_renderLabel(e,t){const{label:i,value:n}=e,[s,o]=this._getLabelPosition(n);return d("text",{class:this.classes(h.label,t),"text-anchor":"end",transform:this.layout==="horizontal"?"rotate(270)":null,x:s,y:o-2},i??"")}_renderFillDefinition(e){const{width:t,height:i}=this._containerDimensions;return d("clipPath",{id:e},d("rect",{height:i,width:t,x:"0",y:"0"}))}_afterContainerNodeCreate(e){this._containerNode=e,this.addHandles(N(e,t=>{const{width:i,height:n}=t.contentRect;this._containerDimensions={width:i,height:n}}))}_getIndexFromElement(e){var n;const t=(n=e.dataset)==null?void 0:n.index,i=e.getAttribute("data-index");return t!=null?parseInt(t,10):i!=null?parseInt(i,10):null}_afterBarCreate(e){if(this.barCreatedFunction){const t=this._getIndexFromElement(e)??-1;this.barCreatedFunction(t,e)}}_afterLinesSubgroupCreate(e){if(this.dataLineCreatedFunction){const t=this._getIndexFromElement(e),i=e.childNodes[1],n=e.childNodes[2]?e.childNodes[2]:null;this.dataLineCreatedFunction(i,n,t)}}_afterLinesSubgroupUpdate(e){if(this.dataLineUpdatedFunction){const t=this._getIndexFromElement(e),i=e.childNodes[1],n=e.childNodes[2]?e.childNodes[2]:null;this.dataLineUpdatedFunction(i,n,t)}}_getBarDimensions(e,t){const{bins:i,layout:n}=this,s=i?i.map(u=>u.count):[],o=Math.max.apply(Math,s);return s.map(u=>n==="vertical"?[e/s.length,o!==0?u/o*t:0]:[o!==0?u/o*e:0,t/s.length])}_getLinePosition(e){const{layout:t,min:i,viewModel:{range:n}}=this;if(i==null)return[0,0,0,0];const s=Math.round((e-i)/n*100)/100,{width:o,height:u}=this._containerDimensions,[p,m]=[s*o||1,u-s*u||1];return t==="vertical"?[0,"100%",m,m]:[p,p,"100%",0]}_getLabelPosition(e){const{layout:t,min:i,viewModel:{range:n}}=this;if(i==null)return[0,0];const s=Math.round((e-i)/n*100)/100,{width:o,height:u}=this._containerDimensions;return t==="vertical"?[o,u-s*u]:[0,s*o]}};a([r()],l.prototype,"_bgFillId",void 0),a([r()],l.prototype,"_containerNode",void 0),a([r()],l.prototype,"_containerDimensions",void 0),a([r()],l.prototype,"_defaultBarColor",void 0),a([r()],l.prototype,"average",null),a([r()],l.prototype,"barCreatedFunction",void 0),a([r()],l.prototype,"dataLines",void 0),a([r()],l.prototype,"dataLineCreatedFunction",void 0),a([r()],l.prototype,"dataLineUpdatedFunction",void 0),a([r()],l.prototype,"icon",null),a([r()],l.prototype,"label",null),a([r()],l.prototype,"labelFormatFunction",null),a([r({value:"horizontal"})],l.prototype,"layout",null),a([r()],l.prototype,"max",null),a([r(),B("esri/widgets/Histogram/t9n/Histogram")],l.prototype,"messages",void 0),a([r()],l.prototype,"min",null),a([r({readOnly:!0})],l.prototype,"state",null),a([r()],l.prototype,"viewModel",void 0),l=v=a([F("esri.widgets.Histogram")],l);const P=l;export{P as default};
