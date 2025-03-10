import{a as _a}from"./devEnvironmentUtils-D6qIi8Ky.js";import{gC as St,W as Ot,cn as _t,j as c,y as k,P as Et,b_ as Ea,o as $t,gH as $a,s as At,fE as Aa,_ as Ae,hJ as be,fV as Pa,c3 as Ra,dx as Ce,ay as I,ad as z,aV as za,ae as Ye,af as we,dQ as La,aN as Ba,aL as Pt,ca as Me,dB as Rt,dA as dt,aI as Ga,c4 as Na,p as ja,uW as Fa,gL as zt,U as Ia,F as Lt,n3 as Bt,cU as Gt,e$ as Se,G as Da,cl as ut,ai as Va,cb as ht,sW as mt,dC as Ua}from"./index-Dv-JqQDv.js";import{i as pt,j as qa,n as Wa}from"./mat3-B7LiNcRs.js";import{t as je,e as Nt,o as ne}from"./mat3f64-BBpwCtoL.js";import{o as Ya,e as ka}from"./mat4f64-Dk4dwAN8.js";import{l as jt,n as Ft}from"./vec2f64-Diu2Kaa8.js";import{ae as It,h as Ze,a as ee,ao as te,X as pe,u as R,P as ae,ap as Dt,$ as Ja,d as U,aq as Za,q as ke,o as Pe,V as Vt,F as Ut,r as Xe,j as He,i as Re,am as Xa,R as Te,T as ft,S as Ha,b as G,U as v,ar as Ka,as as Ke,Z as Qa,C as qt,D as Qe,at as vt,B as eo,e as to,au as Wt,av as Yt,f as Oe,c as kt,aw as Jt,g as q,M as ao,x as oo,A as ro,k as io,a0 as no,s as so,a1 as lo,a2 as co,a3 as uo,ag as ho,ad as mo,m as po,E as Fe,ah as fo,N as Zt,I as Xt,t as ye}from"./DefaultTechniqueConfiguration-C28-5KBi.js";import{c as vo,x as Ht,L as go,i as Kt,O as xo,E as bo}from"./BufferView-_0HdWB6j.js";import{e as To,f as yo,l as gt,o as xt}from"./vec3-zd-aCjeY.js";import{n as wo,s as bt}from"./vec4-mLjVaC0N.js";import{l as Mo,n as Co,g as Z,o as So,h as Oo,i as _o,t as Eo}from"./DefaultMaterial_COLOR_GAMMA-32Y4lnr4.js";import{r as Ie}from"./resourceUtils-Bb92V0U7.js";import{i as $o,f as Ao}from"./vec2f32-BbH2jxlN.js";import{t as Po}from"./NestedMap-DgiGbX8E.js";import{l as Ro}from"./Indices-BTetzIKW.js";import{t as zo}from"./requestImageUtils-CO_Ks2k6.js";import{t as K}from"./orientedBoundingBox-BiAE_4Zn.js";import{s as y,O as Qt,e as W,n as fe}from"./basicInterfaces-wONHx_SN.js";import{e as M}from"./VertexAttribute-BnAa5VW0.js";import{l as Je}from"./ViewingMode-Dodu7ZZk.js";import{H as Lo}from"./InterleavedLayout-B5L5JJLV.js";import{o as g,a as ze,c as N,t as et,k as $,s as ea,f as se,h as ie,v as De,w as Ve}from"./Matrix4PassUniform-B-NXMru_.js";import{o as oe,a as Bo,j as Go,k as ta,n as aa,i as oa,p as No,r as jo,u as Fo}from"./OutputHighlight.glsl-Bs_35Qno.js";import{b as Io,O as tt,h as Do,c as Vo,o as Uo}from"./debugFlags-CfrzpJ7g.js";import{d as qo}from"./verticalOffsetUtils-DVynISE7.js";import{D as _e,G as Wo,t as Yo,_ as ko,f as Jo,O as Tt}from"./enums-BlUEVwJR.js";import{S as at,_ as ot,h as Zo,o as Xo}from"./renderState-yUi34s5A.js";import{r as p}from"./ShaderTechniqueConfiguration-D3UbJ2mX.js";import{o as i,n as rt}from"./interfaces-B8ge7Jg9.js";import{o as Ee}from"./vec2-DGogPjh1.js";import{a as ve}from"./BindType-BmZEZMMh.js";import{a as Ho,n as ue}from"./DecodeSymbolColor.glsl-C6Fgb1JQ.js";import{e as Ko,c as Qo}from"./Texture-BsiXXqc8.js";function he(t){if(t==null)return null;const e=t.offset!=null?t.offset:$o,a=t.rotation!=null?t.rotation:0,o=t.scale!=null?t.scale:Ao,n=je(1,0,0,0,1,0,e[0],e[1],1),r=je(Math.cos(a),-Math.sin(a),0,Math.sin(a),Math.cos(a),0,0,0,1),l=je(o[0],0,0,0,o[1],0,0,0,1),u=Nt();return pt(u,r,l),pt(u,n,u),u}let er=class{constructor(){this.geometries=new Array,this.materials=new Array,this.textures=new Array}},tr=class{constructor(e,a,o){this.name=e,this.lodThreshold=a,this.pivotOffset=o,this.stageResources=new er,this.numberOfVertices=0}};function ar(t,e){const a=t.fragment;switch(a.code.add(i`struct ShadingNormalParameters {
vec3 normalView;
vec3 viewDirection;
} shadingParams;`),e.doubleSidedMode){case A.None:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return normalize(params.normalView);
}`);break;case A.View:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return dot(params.normalView, params.viewDirection) > 0.0 ? normalize(-params.normalView) : normalize(params.normalView);
}`);break;case A.WindingOrder:a.code.add(i`vec3 shadingNormal(ShadingNormalParameters params) {
return gl_FrontFacing ? normalize(params.normalView) : normalize(-params.normalView);
}`);break;default:St(e.doubleSidedMode);case A.COUNT:}}var A;(function(t){t[t.None=0]="None",t[t.View=1]="View",t[t.WindingOrder=2]="WindingOrder",t[t.COUNT=3]="COUNT"})(A||(A={}));function or({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:a,roughnessFactor:o,emissiveTexture:n,emissiveFactor:r,occlusionTexture:l}){return t==null&&e==null&&n==null&&(r==null||Ot(r,_t))&&l==null&&(o==null||o===1)&&(a==null||a===1)}function Di({normalTexture:t,metallicRoughnessTexture:e,metallicFactor:a,roughnessFactor:o,emissiveTexture:n,emissiveFactor:r,occlusionTexture:l}){return t==null&&e==null&&n==null&&(r==null||Ot(r,_t))&&l==null&&(o==null||o===1)&&(a==null||a===1||a===0)}const ra=[1,1,.5],rr=[0,.6,.2],ir=[0,1,.2];function ia(t){t.vertex.code.add(i`vec4 offsetBackfacingClipPosition(vec4 posClip, vec3 posWorld, vec3 normalWorld, vec3 camPosWorld) {
vec3 camToVert = posWorld - camPosWorld;
bool isBackface = dot(camToVert, normalWorld) > 0.0;
if (isBackface) {
posClip.z += 0.0000003 * posClip.w;
}
return posClip;
}`)}function na(t,e){e.hasSymbolColors?(t.include(Ho),t.attributes.add(M.SYMBOLCOLOR,"vec4"),t.varyings.add("colorMixMode","mediump float"),t.vertex.code.add(i`int symbolColorMixMode;
vec4 getSymbolColor() {
return decodeSymbolColor(symbolColor, symbolColorMixMode) * 0.003921568627451;
}
void forwardColorMixMode() {
colorMixMode = float(symbolColorMixMode) + 0.5;
}`)):(t.fragment.uniforms.add(new It("colorMixMode",a=>Io[a.colorMixMode])),t.vertex.code.add(i`vec4 getSymbolColor() { return vec4(1.0); }
void forwardColorMixMode() {}`))}function sa(t){t.code.add(i`const float MAX_RGBA4_FLOAT =
15.0 / 16.0 +
15.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 +
15.0 / 16.0 / 16.0 / 16.0 / 16.0;
const vec4 FIXED_POINT_FACTORS_RGBA4 = vec4(1.0, 16.0, 16.0 * 16.0, 16.0 * 16.0 * 16.0);
vec4 floatToRgba4(const float value) {
float valueInValidDomain = clamp(value, 0.0, MAX_RGBA4_FLOAT);
vec4 fixedPointU4 = floor(fract(valueInValidDomain * FIXED_POINT_FACTORS_RGBA4) * 16.0);
const float toU4AsFloat = 1.0 / 15.0;
return fixedPointU4 * toU4AsFloat;
}
const vec4 RGBA4_2_FLOAT_FACTORS = vec4(
15.0 / (16.0),
15.0 / (16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0),
15.0 / (16.0 * 16.0 * 16.0 * 16.0)
);
float rgba4ToFloat(vec4 rgba) {
return dot(rgba, RGBA4_2_FLOAT_FACTORS);
}`)}function nr(t,e){switch(e.output){case g.Shadow:case g.ShadowHighlight:case g.ShadowExcludeHighlight:case g.ViewshedShadow:t.fragment.include(sa),t.fragment.code.add(i`float _calculateFragDepth(const in float depth) {
const float SLOPE_SCALE = 2.0;
const float BIAS = 20.0 * .000015259;
float m = max(abs(dFdx(depth)), abs(dFdy(depth)));
return depth + SLOPE_SCALE * m + BIAS;
}
void outputDepth(float _linearDepth) {
fragColor = floatToRgba4(_calculateFragDepth(_linearDepth));
}`)}}function sr(t){t.fragment.code.add(i`
    #define discardOrAdjustAlpha(color) { if (color.a < ${i.float(Ze)}) { discard; } }
  `)}let lr=class extends ze{constructor(e,a){super(e,"float",ve.Draw,(o,n,r)=>o.setUniform1f(e,a(n,r)))}};function re(t,e){la(t,e,new N("textureAlphaCutoff",a=>a.textureAlphaCutoff))}function Ui(t,e){la(t,e,new lr("textureAlphaCutoff",a=>a.textureAlphaCutoff))}function la(t,e,a){const o=t.fragment;switch(e.alphaDiscardMode!==y.Mask&&e.alphaDiscardMode!==y.MaskBlend||o.uniforms.add(a),e.alphaDiscardMode){case y.Blend:return t.include(sr);case y.Opaque:o.code.add(i`void discardOrAdjustAlpha(inout vec4 color) {
color.a = 1.0;
}`);break;case y.Mask:o.code.add(i`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } else { color.a = 1.0; } }`);break;case y.MaskBlend:t.fragment.code.add(i`#define discardOrAdjustAlpha(color) { if (color.a < textureAlphaCutoff) { discard; } }`)}}function ca(t,e){const{vertex:a,fragment:o}=t,n=e.hasColorTexture&&e.alphaDiscardMode!==y.Opaque;switch(e.output){case g.Depth:ee(a,e),t.include(oe,e),t.include(ae,e),t.include(te,e),n&&o.uniforms.add(new R("tex",r=>r.texture)),a.code.add(i`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),t.include(re,e),o.code.add(i`
          void main(void) {
            discardBySlice(vpos);
            ${n?i`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?i`colorUV`:i`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
          }
        `);break;case g.Shadow:case g.ShadowHighlight:case g.ShadowExcludeHighlight:case g.ViewshedShadow:case g.ObjectAndLayerIdColor:ee(a,e),t.include(oe,e),t.include(te,e),t.include(pe,e),t.include(nr,e),t.include(ae,e),t.include(Ja,e),Go(t),t.varyings.add("depth","float"),n&&o.uniforms.add(new R("tex",r=>r.texture)),a.code.add(i`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPositionWithDepth(proj, view, vpos, nearFar, depth);
forwardTextureCoordinates();
forwardObjectAndLayerIdColor();
}`),t.include(re,e),o.code.add(i`
          void main(void) {
            discardBySlice(vpos);
            ${n?i`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?i`colorUV`:i`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            ${e.output===g.ObjectAndLayerIdColor?i`outputObjectAndLayerIdColor();`:i`outputDepth(depth);`}
          }
        `);break;case g.Normal:{ee(a,e),t.include(oe,e),t.include(et,e),t.include(Dt,e),t.include(te,e),t.include(pe,e),n&&o.uniforms.add(new R("tex",l=>l.texture)),e.normalType===$.ScreenDerivative&&t.varyings.add("vPositionView","vec3");const r=e.normalType===$.Attribute||e.normalType===$.Compressed;a.code.add(i`
          void main(void) {
            vpos = getVertexInLocalOriginSpace();

            ${r?i`vNormalWorld = dpNormalView(vvLocalNormal(normalModel()));`:i`
                  // Get vertex position in camera space for screen-space derivative normals
                  vPositionView = (view * vec4(vpos, 1.0)).xyz;
                `}
            vpos = subtractOrigin(vpos);
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            forwardTextureCoordinates();
          }
        `),t.include(ae,e),t.include(re,e),o.code.add(i`
          void main() {
            discardBySlice(vpos);
            ${n?i`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?i`colorUV`:i`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}

            ${e.normalType===$.ScreenDerivative?i`vec3 normal = screenDerivativeNormal(vPositionView);`:i`
                  vec3 normal = normalize(vNormalWorld);
                  if (gl_FrontFacing == false){
                    normal = -normal;
                  }`}
            fragColor = vec4(0.5 + 0.5 * normal, 1.0);
          }
        `);break}case g.Highlight:ee(a,e),t.include(oe,e),t.include(te,e),t.include(pe,e),n&&o.uniforms.add(new R("tex",r=>r.texture)),a.code.add(i`void main(void) {
vpos = getVertexInLocalOriginSpace();
vpos = subtractOrigin(vpos);
vpos = addVerticalOffset(vpos, localOrigin);
gl_Position = transformPosition(proj, view, vpos);
forwardTextureCoordinates();
}`),t.include(ae,e),t.include(re,e),t.include(Bo,e),o.code.add(i`
          void main() {
            discardBySlice(vpos);
            ${n?i`
                    vec4 texColor = texture(tex, ${e.hasColorTextureTransform?i`colorUV`:i`vuv0`});
                    discardOrAdjustAlpha(texColor);`:""}
            outputHighlight();
          }
        `)}}function cr(t,e){const a=t.fragment;e.hasVertexTangents?(t.attributes.add(M.TANGENT,"vec4"),t.varyings.add("vTangent","vec4"),e.doubleSidedMode===A.WindingOrder?a.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = gl_FrontFacing ? vTangent.w : -vTangent.w;
vec3 tangent = normalize(gl_FrontFacing ? vTangent.xyz : -vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`):a.code.add(i`mat3 computeTangentSpace(vec3 normal) {
float tangentHeadedness = vTangent.w;
vec3 tangent = normalize(vTangent.xyz);
vec3 bitangent = cross(normal, tangent) * tangentHeadedness;
return mat3(tangent, bitangent, normal);
}`)):a.code.add(i`mat3 computeTangentSpace(vec3 normal, vec3 pos, vec2 st) {
vec3 Q1 = dFdx(pos);
vec3 Q2 = dFdy(pos);
vec2 stx = dFdx(st);
vec2 sty = dFdy(st);
float det = stx.t * sty.s - sty.t * stx.s;
vec3 T = stx.t * Q2 - sty.t * Q1;
T = T - normal * dot(normal, T);
T *= inversesqrt(max(dot(T,T), 1.e-10));
vec3 B = sign(det) * cross(normal, T);
return mat3(T, B, normal);
}`),e.textureCoordinateType!==U.None&&(t.include(Za,e),a.uniforms.add(e.pbrTextureBindType===ve.Pass?new R("normalTexture",o=>o.textureNormal):new ea("normalTexture",o=>o.textureNormal)),e.hasNormalTextureTransform&&(a.uniforms.add(new ke("scale",o=>o.scale??jt)),a.uniforms.add(new se("normalTextureTransformMatrix",o=>o.normalTextureTransformMatrix??ne))),a.code.add(i`vec3 computeTextureNormal(mat3 tangentSpace, vec2 uv) {
vec3 rawNormal = textureLookup(normalTexture, uv).rgb * 2.0 - 1.0;`),e.hasNormalTextureTransform&&a.code.add(i`mat3 normalTextureRotation = mat3(normalTextureTransformMatrix[0][0]/scale[0], normalTextureTransformMatrix[0][1]/scale[1], 0.0,
normalTextureTransformMatrix[1][0]/scale[0], normalTextureTransformMatrix[1][1]/scale[1], 0.0,
0.0, 0.0, 0.0 );
rawNormal.xy = (normalTextureRotation * vec3(rawNormal.x, rawNormal.y, 1.0)).xy;`),a.code.add(i`return tangentSpace * rawNormal;
}`))}let Q=class extends Ea{constructor(e){super(e),this.view=null,this.consumes={required:[]},this.produces="composite-color",this._context=null,this._dirty=!0}initialize(){this.addHandles([$t(()=>this.view.ready,e=>{var a;e&&((a=this.view._stage)==null||a.renderer.addRenderNode(this))},$a)])}destroy(){var e,a;(a=(e=this.view._stage)==null?void 0:e.renderer)==null||a.removeRenderNode(this)}render(){throw new At("RenderNode:render-function-not-implemented","render() is not implemented.")}get camera(){return this.view.state.camera.clone()}get sunLight(){return this.bindParameters.lighting.legacy}get gl(){return this.view._stage.renderView.renderingContext.gl}acquireOutputFramebuffer(){var o,n,r;const e=(n=(o=this._frameBuffer)==null?void 0:o.getTexture())==null?void 0:n.descriptor,a=this.view._stage.renderer.fboCache.acquire((e==null?void 0:e.width)??640,(e==null?void 0:e.height)??480,this.produces);return(r=a.fbo)==null||r.initializeAndBind(),a}bindRenderTarget(){var e,a;return(a=(e=this._frameBuffer)==null?void 0:e.fbo)==null||a.initializeAndBind(),this._frameBuffer}requestRender(e){var a;e===Qt.UPDATE&&((a=this.view._stage)==null||a.renderView.requestRender(e)),this._dirty=!0}resetWebGLState(){var e;this.renderingContext.resetState(),this.renderingContext.bindFramebuffer((e=this._frameBuffer)==null?void 0:e.fbo)}get fboCache(){return this.view._stage.renderer.fboCache}get bindParameters(){return this._context.bindParameters}get renderingContext(){return this.view._stage.renderView.renderingContext}updateAnimation(){return!!this._dirty&&(this._dirty=!1,!0)}doRender(e,a){this._context=a,this._frameBuffer=e.find(({name:o})=>o===this.produces);try{return this.render(e)}finally{this._frameBuffer=null}}};c([k({constructOnly:!0})],Q.prototype,"view",void 0),c([k({constructOnly:!0})],Q.prototype,"consumes",void 0),c([k()],Q.prototype,"produces",void 0),Q=c([Et("esri.views.3d.webgl.RenderNode")],Q);const dr=Q;let ur=class extends ze{constructor(e,a){super(e,"vec2",ve.Draw,(o,n,r,l)=>o.setUniform2fv(e,a(n,r,l)))}};const Ue=4;function da(){const t=new Pe,e=t.fragment;t.include(Vt);const a=(Ue+1)/2,o=1/(2*a*a);return e.include(Ut),e.uniforms.add(new R("depthMap",n=>n.depthTexture),new ea("tex",n=>n.colorTexture),new ur("blurSize",n=>n.blurSize),new N("projScale",(n,r)=>{const l=Aa(r.camera.eye,r.camera.center);return l>5e4?Math.max(0,n.projScale-(l-5e4)):n.projScale})),e.code.add(i`
    void blurFunction(vec2 uv, float r, float center_d, float sharpness, inout float wTotal, inout float bTotal) {
      float c = texture(tex, uv).r;
      float d = linearDepthFromTexture(depthMap, uv);

      float ddiff = d - center_d;

      float w = exp(-r * r * ${i.float(o)} - ddiff * ddiff * sharpness);
      wTotal += w;
      bTotal += w * c;
    }
  `),t.outputs.add("fragBlur","float"),e.code.add(i`
    void main(void) {
      float b = 0.0;
      float w_total = 0.0;

      float center_d = linearDepthFromTexture(depthMap, uv);

      float sharpness = -0.05 * projScale / center_d;
      for (int r = -${i.int(Ue)}; r <= ${i.int(Ue)}; ++r) {
        float rf = float(r);
        vec2 uvOffset = uv + rf * blurSize;
        blurFunction(uvOffset, rf, center_d, sharpness, w_total, b);
      }

      fragBlur = b / w_total;
    }
  `),t}const hr=Object.freeze(Object.defineProperty({__proto__:null,build:da},Symbol.toStringTag,{value:"Module"}));let ua=class ha extends Xe{initializeProgram(e){return new He(e.rctx,ha.shader.get().build(),tt)}initializePipeline(){return at({colorWrite:ot})}};ua.shader=new Re(hr,()=>Ae(()=>Promise.resolve().then(()=>ai),void 0,import.meta.url));const mr="eXKEvZaUc66cjIKElE1jlJ6MjJ6Ufkl+jn2fcXp5jBx7c6KEflSGiXuXeW6OWs+tfqZ2Yot2Y7Zzfo2BhniEj3xoiXuXj4eGZpqEaHKDWjSMe7palFlzc3BziYOGlFVzg6Zzg7CUY5JrjFF7eYJ4jIKEcyyEonSXe7qUfqZ7j3xofqZ2c4R5lFZ5Y0WUbppoe1l2cIh2ezyUho+BcHN2cG6DbpqJhqp2e1GcezhrdldzjFGUcyxjc3aRjDyEc1h7Sl17c6aMjH92pb6Mjpd4dnqBjMOEhqZleIOBYzB7gYx+fnqGjJuEkWlwnCx7fGl+c4hjfGyRe5qMlNOMfnqGhIWHc6OMi4GDc6aMfqZuc6aMzqJzlKZ+lJ6Me3qRfoFue0WUhoR5UraEa6qMkXiPjMOMlJOGe7JrUqKMjK6MeYRzdod+Sl17boiPc6qEeYBlcIh2c1WEe7GDiWCDa0WMjEmMdod+Y0WcdntzhmN8WjyMjKJjiXtzgYxYaGd+a89zlEV7e2GJfnd+lF1rcK5zc4p5cHuBhL6EcXp5eYB7fnh8iX6HjIKEeaxuiYOGc66RfG2Ja5hzjlGMjEmMe9OEgXuPfHyGhPeEdl6JY02McGuMfnqGhFiMa3WJfnx2l4hwcG1uhmN8c0WMc39og1GBbrCEjE2EZY+JcIh2cIuGhIWHe0mEhIVrc09+gY5+eYBlnCyMhGCDl3drfmmMgX15aGd+gYx+fnuRfnhzY1SMsluJfnd+hm98WtNrcIuGh4SEj0qPdkqOjFF7jNNjdnqBgaqUjMt7boeBhnZ4jDR7c5pze4GGjEFrhLqMjHyMc0mUhKZze4WEa117kWlwbpqJjHZ2eX2Bc09zeId+e0V7WlF7jHJ2l72BfId8l3eBgXyBe897jGl7c66cgW+Xc76EjKNbgaSEjGx4fId8jFFjgZB8cG6DhlFziZhrcIh2fH6HgUqBgXiPY8dahGFzjEmMhEFre2dxhoBzc5SGfleGe6alc7aUeYBlhKqUdlp+cH5za4OEczxza0Gcc4J2jHZ5iXuXjH2Jh5yRjH2JcFx+hImBjH+MpddCl3dreZeJjIt8ZW18bm1zjoSEeIOBlF9oh3N7hlqBY4+UeYFwhLJjeYFwaGd+gUqBYxiEYot2fqZ2ondzhL6EYyiEY02Ea0VjgZB8doaGjHxoc66cjEGEiXuXiXWMiZhreHx8frGMe75rY02Ec5pzfnhzlEp4a3VzjM+EhFFza3mUY7Zza1V5e2iMfGyRcziEhDyEkXZ2Y4OBnCx7g5t2eyBjgV6EhEFrcIh2dod+c4Z+nJ5zjm15jEmUeYxijJp7nL6clIpjhoR5WrZraGd+fnuRa6pzlIiMg6ZzfHx5foh+eX1ufnB5eX1ufnB5aJt7UqKMjIh+e3aBfm5lbYSBhGFze6J4c39oc0mUc4Z+e0V7fKFVe0WEdoaGY02Ec4Z+Y02EZYWBfH6HgU1+gY5+hIWUgW+XjJ57ebWRhFVScHuBfJ6PhBx7WqJzlM+Ujpd4gHZziX6HjHmEgZN+lJt5boiPe2GJgX+GjIGJgHZzeaxufnB5hF2JtdN7jJ57hp57hK6ElFVzg6ZzbmiEbndzhIWHe3uJfoFue3qRhJd2j3xoc65zlE1jc3p8lE1jhniEgXJ7e657vZaUc3qBh52BhIF4aHKDa9drgY5+c52GWqZzbpqJe8tjnM+UhIeMfo2BfGl+hG1zSmmMjKJjZVaGgX15c1lze0mEp4OHa3mUhIWHhDyclJ6MeYOJkXiPc0VzhFiMlKaEboSJa5Jze41re3qRhn+HZYWBe0mEc4p5fnORbox5lEp4hGFjhGGEjJuEc1WEhLZjeHeGa7KlfHx2hLaMeX1ugY5+hIWHhKGPjMN7c1WEho1zhoBzZYx7fnhzlJt5exyUhFFziXtzfmmMa6qMYyiEiXxweV12kZSMeWqXSl17fnhzxmmMrVGEe1mcc4p5eHeGjK6MgY5+doaGa6pzlGV7g1qBh4KHkXiPeW6OaKqafqZ2eXZ5e1V7jGd7boSJc3BzhJd2e0mcYot2h1RoY8dahK6EQmWEWjx7e1l2lL6UgXyBdnR4eU9zc0VreX1umqaBhld7fo2Bc6KEc5Z+hDyEcIeBWtNrfHyGe5qMhMuMe5qMhEGEbVVupcNzg3aHhIF4boeBe0mEdlptc39ofFl5Y8uUlJOGiYt2UmGEcyxjjGx4jFF7a657ZYWBnElzhp57iXtrgZN+tfOEhIOBjE2HgU1+e8tjjKNbiWCDhE15gUqBgYN7fnqGc66ce9d7iYSBj0qPcG6DnGGcT3eGa6qMZY+JlIiMl4hwc3aRdnqBlGV7eHJ2hLZjfnuRhDyEeX6MSk17g6Z+c6aUjHmEhIF4gXyBc76EZW18fGl+fkl+jCxrhoVwhDyUhIqGlL2DlI6EhJd2tdN7eYORhEGMa2Faa6pzc3Bzc4R5lIRznM+UY9eMhDycc5Z+c4p5c4iGY117pb6MgXuPrbJafnx2eYOJeXZ5e657hDyEcziElKZjfoB5eHeGj4WRhGGEe6KGeX1utTStc76EhFGJnCyMa5hzfH6HnNeceYB7hmN8gYuMhIVrczSMgYF8h3N7c5pza5hzjJqEYIRdgYuMlL2DeYRzhGGEeX1uhLaEc4iGeZ1zdl6JhrVteX6Me2iMfm5lWqJzSpqEa6pzdnmchHx2c6OMhNdrhoR5g3aHczxzeW52gV6Ejm15frGMc0Vzc4Z+l3drfniJe+9rWq5rlF1rhGGEhoVwe9OEfoh+e7pac09+c3qBY0lrhDycdnp2lJ6MiYOGhGCDc3aRlL2DlJt5doaGdnp2gYF8gWeOjF2Uc4R5c5Z+jEmMe7KEc4mEeYJ4dmyBe0mcgXiPbqJ7eYB7fmGGiYSJjICGlF1reZ2PnElzbpqJfH6Hc39oe4WEc5eJhK6EhqyJc3qBgZB8c09+hEmEaHKDhFGJc5SGiXWMUpaEa89zc6OMnCyMiXtrho+Be5qMc7KEjJ57dmN+hKGPjICGbmiEe7prdod+hGCDdnmchBx7eX6MkXZ2hGGEa657hm98jFFjY5JreYOJgY2EjHZ2a295Y3FajJ6Mc1J+YzB7e4WBjF2Uc4R5eV12gYxzg1qBeId+c9OUc5pzjFFjgY5+hFiMlIaPhoR5lIpjjIKBlNdSe7KEeX2BfrGMhIqGc65zjE2UhK6EklZ+QmWEeziMWqZza3VzdnR4foh+gYF8n3iJiZhrnKp7gYF8eId+lJ6Me1lrcIuGjKJjhmN8c66MjFF7a6prjJ6UnJ5zezyUfruRWlF7nI5zfHyGe657h4SEe8tjhBx7jFFjc09+c39ojICMeZeJeXt+YzRzjHZ2c0WEcIeBeXZ5onSXkVR+gYJ+eYFwdldzgYF7eX2BjJ6UiXuXlE1jh4SEe1mchLJjc4Z+hqZ7eXZ5bm1zlL6Ue5p7iWeGhKqUY5pzjKJjcIeBe8t7gXyBYIRdlEp4a3mGnK6EfmmMZpqEfFl5gYxzjKZuhGFjhoKGhHx2fnx2eXuMe3aBiWeGvbKMe6KGa5hzYzB7gZOBlGV7hmN8hqZlYot2Y117a6pzc6KEfId8foB5rctrfneJfJ6PcHN2hFiMc5pzjH92c0VzgY2EcElzdmCBlFVzg1GBc65zY4OBboeBcHiBeYJ4ewxzfHx5lIRzlEmEnLKEbk1zfJ6PhmN8eYBljBiEnMOEiXxwezyUcIeBe76EdsKEeX2BdnR4jGWUrXWMjGd7fkl+j4WRlEGMa5Jzho+BhDyEfnqMeXt+g3aHlE1jczClhNN7ZW18eHx8hGFjZW18iXWMjKJjhH57gYuMcIuGWjyMe4ZtjJuExmmMj4WRdntzi4GDhFFzYIRdnGGcjJp7Y0F7e4WEkbCGiX57fnSHa657a6prhBCMe3Z+SmmMjH92eHJ2hK6EY1FzexhrvbKMnI5za4OEfnd+eXuMhImBe897hLaMjN+EfG+BeIOBhF1+eZeJi4GDkXZ2eXKEgZ6Ejpd4c2GHa1V5e5KUfqZuhCx7jKp7lLZrg11+hHx2hFWUoot2nI5zgbh5mo9zvZaUe3qRbqKMfqZ2kbCGhFiM";let pr=class extends rt{constructor(){super(...arguments),this.projScale=1}},fr=class extends pr{constructor(){super(...arguments),this.intensity=1}},vr=class extends rt{},gr=class extends vr{constructor(){super(...arguments),this.blurSize=Ft()}};const yt=16;function ma(){const t=new Pe,e=t.fragment;return t.include(Vt),t.include(Xa),e.include(Ut),e.uniforms.add(new N("radius",(a,o)=>Le(o.camera))).code.add(i`vec3 sphere[16] = vec3[16](
vec3(0.186937, 0.0, 0.0),
vec3(0.700542, 0.0, 0.0),
vec3(-0.864858, -0.481795, -0.111713),
vec3(-0.624773, 0.102853, -0.730153),
vec3(-0.387172, 0.260319, 0.007229),
vec3(-0.222367, -0.642631, -0.707697),
vec3(-0.01336, -0.014956, 0.169662),
vec3(0.122575, 0.1544, -0.456944),
vec3(-0.177141, 0.85997, -0.42346),
vec3(-0.131631, 0.814545, 0.524355),
vec3(-0.779469, 0.007991, 0.624833),
vec3(0.308092, 0.209288,0.35969),
vec3(0.359331, -0.184533, -0.377458),
vec3(0.192633, -0.482999, -0.065284),
vec3(0.233538, 0.293706, -0.055139),
vec3(0.417709, -0.386701, 0.442449)
);
float fallOffFunction(float vv, float vn, float bias) {
float f = max(radius * radius - vv, 0.0);
return f * f * f * max(vn - bias, 0.0);
}`),e.code.add(i`float aoValueFromPositionsAndNormal(vec3 C, vec3 n_C, vec3 Q) {
vec3 v = Q - C;
float vv = dot(v, v);
float vn = dot(normalize(v), n_C);
return fallOffFunction(vv, vn, 0.1);
}`),e.uniforms.add(new R("normalMap",a=>a.normalTexture),new R("depthMap",a=>a.depthTexture),new N("projScale",a=>a.projScale),new R("rnm",a=>a.noiseTexture),new ke("rnmScale",(a,o)=>Ee(wt,o.camera.fullWidth/a.noiseTexture.descriptor.width,o.camera.fullHeight/a.noiseTexture.descriptor.height)),new N("intensity",a=>a.intensity),new ke("screenSize",(a,o)=>Ee(wt,o.camera.fullWidth,o.camera.fullHeight))),t.outputs.add("fragOcclusion","float"),e.code.add(i`
    void main(void) {
      float depth = depthFromTexture(depthMap, uv);

      // Early out if depth is out of range, such as in the sky
      if (depth >= 1.0 || depth <= 0.0) {
        fragOcclusion = 1.0;
        return;
      }

      // get the normal of current fragment
      vec4 norm4 = texture(normalMap, uv);
      if(norm4.a != 1.0) {
        fragOcclusion = 1.0;
        return;
      }
      vec3 norm = vec3(-1.0) + 2.0 * norm4.xyz;

      float currentPixelDepth = linearizeDepth(depth);
      vec3 currentPixelPos = reconstructPosition(gl_FragCoord.xy, currentPixelDepth);

      float sum = 0.0;
      vec3 tapPixelPos;

      vec3 fres = normalize(2.0 * texture(rnm, uv * rnmScale).xyz - 1.0);

      // note: the factor 2.0 should not be necessary, but makes ssao much nicer.
      // bug or deviation from CE somewhere else?
      float ps = projScale / (2.0 * currentPixelPos.z * zScale.x + zScale.y);

      for(int i = 0; i < ${i.int(yt)}; ++i) {
        vec2 unitOffset = reflect(sphere[i], fres).xy;
        vec2 offset = vec2(-unitOffset * radius * ps);

        // don't use current or very nearby samples
        if( abs(offset.x) < 2.0 || abs(offset.y) < 2.0){
          continue;
        }

        vec2 tc = vec2(gl_FragCoord.xy + offset);
        if (tc.x < 0.0 || tc.y < 0.0 || tc.x > screenSize.x || tc.y > screenSize.y) continue;
        vec2 tcTap = tc / screenSize;
        float occluderFragmentDepth = linearDepthFromTexture(depthMap, tcTap);

        tapPixelPos = reconstructPosition(tc, occluderFragmentDepth);

        sum += aoValueFromPositionsAndNormal(currentPixelPos, norm, tapPixelPos);
      }

      // output the result
      float A = max(1.0 - sum * intensity / float(${i.int(yt)}), 0.0);

      // Anti-tone map to reduce contrast and drag dark region farther: (x^0.2 + 1.2 * x^4) / 2.2
      A = (pow(A, 0.2) + 1.2 * A*A*A*A) / 2.2;

      fragOcclusion = A;
    }
  `),t}function Le(t){return Math.max(10,20*t.computeScreenPixelSizeAtDist(Math.abs(4*t.relativeElevation)))}const wt=Ft(),xr=Object.freeze(Object.defineProperty({__proto__:null,build:ma,getRadius:Le},Symbol.toStringTag,{value:"Module"}));class Be extends Xe{initializeProgram(e){return new He(e.rctx,Be.shader.get().build(),tt)}initializePipeline(){return at({colorWrite:ot})}}Be.shader=new Re(xr,()=>Ae(()=>Promise.resolve().then(()=>oi),void 0,import.meta.url));const me=2;let X=class extends dr{constructor(t){super(t),this.consumes={required:["normals"]},this.produces="ssao",this.isEnabled=()=>!1,this._enableTime=be(0),this._passParameters=new fr,this._drawParameters=new gr}initialize(){const t=Uint8Array.from(atob(mr),a=>a.charCodeAt(0)),e=new Ko;e.wrapMode=_e.CLAMP_TO_EDGE,e.pixelFormat=Wo.RGB,e.wrapMode=_e.REPEAT,e.hasMipmap=!0,e.width=32,e.height=32,this._passParameters.noiseTexture=new Qo(this.renderingContext,e,t),this._ssaoTechnique=this.techniques.acquire(Be),this._blurTechnique=this.techniques.acquire(ua),this.addHandles($t(()=>this.isEnabled(),()=>this._enableTime=be(0)))}destroy(){this._passParameters.noiseTexture=Pa(this._passParameters.noiseTexture),this._blurTechnique.release(),this._ssaoTechnique.release()}render(t){const e=this.bindParameters,a=t.find(({name:Y})=>Y==="normals"),o=a==null?void 0:a.getTexture(),n=a==null?void 0:a.getTexture(Yo),r=this.fboCache,l=e.camera,u=l.fullViewport[2],s=l.fullViewport[3],d=Math.round(u/me),f=Math.round(s/me);if(!this._ssaoTechnique.compiled||!this._blurTechnique.compiled)return this._enableTime=be(performance.now()),this.requestRender(),r.acquire(d,f,"ssao",Te.RED);this._enableTime===0&&(this._enableTime=be(performance.now()));const h=this.renderingContext,x=this.view.qualitySettings.fadeDuration,T=l.relativeElevation,S=Ra((ft-T)/(ft-Ha),0,1),b=x>0?Math.min(x,performance.now()-this._enableTime)/x:1,w=b*S;this._passParameters.normalTexture=o,this._passParameters.depthTexture=n,this._passParameters.projScale=1/l.computeScreenPixelSizeAtDist(1),this._passParameters.intensity=4*br/Le(l)**6*w;const C=r.acquire(u,s,"ssao input",Te.RG);h.unbindTexture(C.fbo.colorTexture),h.bindFramebuffer(C.fbo),h.setViewport(0,0,u,s),h.bindTechnique(this._ssaoTechnique,e,this._passParameters,this._drawParameters),h.screen.draw();const _=r.acquire(d,f,"ssao blur",Te.RED);h.unbindTexture(_.fbo.colorTexture),h.bindFramebuffer(_.fbo),this._drawParameters.colorTexture=C.getTexture(),Ee(this._drawParameters.blurSize,0,me/s),h.bindTechnique(this._blurTechnique,e,this._passParameters,this._drawParameters),h.setViewport(0,0,d,f),h.screen.draw(),C.release();const P=r.acquire(d,f,"ssao",Te.RED);return h.unbindTexture(P.fbo.colorTexture),h.bindFramebuffer(P.fbo),h.setViewport(0,0,u,s),h.setClearColor(1,1,1,0),h.clear(ko.COLOR_BUFFER_BIT),this._drawParameters.colorTexture=_.getTexture(),Ee(this._drawParameters.blurSize,me/u,0),h.bindTechnique(this._blurTechnique,e,this._passParameters,this._drawParameters),h.setViewport(0,0,d,f),h.screen.draw(),h.setViewport4fv(l.fullViewport),_.release(),b<1&&this.requestRender(Qt.UPDATE),P}};c([k()],X.prototype,"consumes",void 0),c([k()],X.prototype,"produces",void 0),c([k({constructOnly:!0})],X.prototype,"techniques",void 0),c([k({constructOnly:!0})],X.prototype,"isEnabled",void 0),X=c([Et("esri.views.3d.webgl-engine.effects.ssao.SSAO")],X);const br=.5;function it(t,e){const a=t.fragment;e.receiveAmbientOcclusion?(a.uniforms.add(new R("ssaoTex",(o,n)=>{var r;return(r=n.ssao)==null?void 0:r.getTexture()})),a.constants.add("blurSizePixelsInverse","float",1/me),a.code.add(i`float evaluateAmbientOcclusionInverse() {
vec2 ssaoTextureSizeInverse = 1.0 / vec2(textureSize(ssaoTex, 0));
return texture(ssaoTex, gl_FragCoord.xy * blurSizePixelsInverse * ssaoTextureSizeInverse).r;
}
float evaluateAmbientOcclusion() {
return 1.0 - evaluateAmbientOcclusionInverse();
}`)):a.code.add(i`float evaluateAmbientOcclusionInverse() { return 1.0; }
float evaluateAmbientOcclusion() { return 0.0; }`)}function Tr(t,e){const a=t.fragment,o=e.lightingSphericalHarmonicsOrder!==void 0?e.lightingSphericalHarmonicsOrder:2;o===0?(a.uniforms.add(new ie("lightingAmbientSH0",(n,r)=>Ce(Mt,r.lighting.sh.r[0],r.lighting.sh.g[0],r.lighting.sh.b[0]))),a.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===1?(a.uniforms.add(new G("lightingAmbientSH_R",(n,r)=>I(D,r.lighting.sh.r[0],r.lighting.sh.r[1],r.lighting.sh.r[2],r.lighting.sh.r[3])),new G("lightingAmbientSH_G",(n,r)=>I(D,r.lighting.sh.g[0],r.lighting.sh.g[1],r.lighting.sh.g[2],r.lighting.sh.g[3])),new G("lightingAmbientSH_B",(n,r)=>I(D,r.lighting.sh.b[0],r.lighting.sh.b[1],r.lighting.sh.b[2],r.lighting.sh.b[3]))),a.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec4 sh0 = vec4(
0.282095,
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y
);
vec3 ambientLight = vec3(
dot(lightingAmbientSH_R, sh0),
dot(lightingAmbientSH_G, sh0),
dot(lightingAmbientSH_B, sh0)
);
return ambientLight * (1.0 - ambientOcclusion);
}`)):o===2&&(a.uniforms.add(new ie("lightingAmbientSH0",(n,r)=>Ce(Mt,r.lighting.sh.r[0],r.lighting.sh.g[0],r.lighting.sh.b[0])),new G("lightingAmbientSH_R1",(n,r)=>I(D,r.lighting.sh.r[1],r.lighting.sh.r[2],r.lighting.sh.r[3],r.lighting.sh.r[4])),new G("lightingAmbientSH_G1",(n,r)=>I(D,r.lighting.sh.g[1],r.lighting.sh.g[2],r.lighting.sh.g[3],r.lighting.sh.g[4])),new G("lightingAmbientSH_B1",(n,r)=>I(D,r.lighting.sh.b[1],r.lighting.sh.b[2],r.lighting.sh.b[3],r.lighting.sh.b[4])),new G("lightingAmbientSH_R2",(n,r)=>I(D,r.lighting.sh.r[5],r.lighting.sh.r[6],r.lighting.sh.r[7],r.lighting.sh.r[8])),new G("lightingAmbientSH_G2",(n,r)=>I(D,r.lighting.sh.g[5],r.lighting.sh.g[6],r.lighting.sh.g[7],r.lighting.sh.g[8])),new G("lightingAmbientSH_B2",(n,r)=>I(D,r.lighting.sh.b[5],r.lighting.sh.b[6],r.lighting.sh.b[7],r.lighting.sh.b[8]))),a.code.add(i`vec3 calculateAmbientIrradiance(vec3 normal, float ambientOcclusion) {
vec3 ambientLight = 0.282095 * lightingAmbientSH0;
vec4 sh1 = vec4(
0.488603 * normal.x,
0.488603 * normal.z,
0.488603 * normal.y,
1.092548 * normal.x * normal.y
);
vec4 sh2 = vec4(
1.092548 * normal.y * normal.z,
0.315392 * (3.0 * normal.z * normal.z - 1.0),
1.092548 * normal.x * normal.z,
0.546274 * (normal.x * normal.x - normal.y * normal.y)
);
ambientLight += vec3(
dot(lightingAmbientSH_R1, sh1),
dot(lightingAmbientSH_G1, sh1),
dot(lightingAmbientSH_B1, sh1)
);
ambientLight += vec3(
dot(lightingAmbientSH_R2, sh2),
dot(lightingAmbientSH_G2, sh2),
dot(lightingAmbientSH_B2, sh2)
);
return ambientLight * (1.0 - ambientOcclusion);
}`),e.pbrMode!==v.Normal&&e.pbrMode!==v.Schematic||a.code.add(i`const vec3 skyTransmittance = vec3(0.9, 0.9, 1.0);
vec3 calculateAmbientRadiance(float ambientOcclusion)
{
vec3 ambientLight = 1.2 * (0.282095 * lightingAmbientSH0) - 0.2;
return ambientLight *= (1.0 - ambientOcclusion) * skyTransmittance;
}`))}const Mt=z(),D=za();function nt(t){t.constants.add("ambientBoostFactor","float",Ka)}function st(t){t.uniforms.add(new N("lightingGlobalFactor",(e,a)=>a.lighting.globalFactor))}function pa(t,e){const a=t.fragment;switch(t.include(it,e),e.pbrMode!==v.Disabled&&t.include(Ke,e),t.include(Tr,e),t.include(Qa),a.code.add(i`
    const float GAMMA_SRGB = 2.1;
    const float INV_GAMMA_SRGB = 0.4761904;
    ${e.pbrMode===v.Disabled?"":"const vec3 GROUND_REFLECTANCE = vec3(0.2);"}
  `),nt(a),st(a),qt(a),a.code.add(i`
    float additionalDirectedAmbientLight(vec3 vPosWorld) {
      float vndl = dot(${e.spherical?i`normalize(vPosWorld)`:i`vec3(0.0, 0.0, 1.0)`}, mainLightDirection);
      return smoothstep(0.0, 1.0, clamp(vndl * 2.5, 0.0, 1.0));
    }
  `),Qe(a),a.code.add(i`vec3 evaluateAdditionalLighting(float ambientOcclusion, vec3 vPosWorld) {
float additionalAmbientScale = additionalDirectedAmbientLight(vPosWorld);
return (1.0 - ambientOcclusion) * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor * mainLightIntensity;
}`),e.pbrMode){case v.Disabled:case v.WaterOnIntegratedMesh:case v.Water:t.include(vt),a.code.add(i`vec3 evaluateSceneLighting(vec3 normalWorld, vec3 albedo, float shadow, float ssao, vec3 additionalLight)
{
vec3 mainLighting = evaluateMainLighting(normalWorld, shadow);
vec3 ambientLighting = calculateAmbientIrradiance(normalWorld, ssao);
vec3 albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
vec3 totalLight = mainLighting + ambientLighting + additionalLight;
totalLight = min(totalLight, vec3(PI));
vec3 outColor = vec3((albedoLinear / PI) * totalLight);
return pow(outColor, vec3(INV_GAMMA_SRGB));
}`);break;case v.Normal:case v.Schematic:a.code.add(i`const float fillLightIntensity = 0.25;
const float horizonLightDiffusion = 0.4;
const float additionalAmbientIrradianceFactor = 0.02;
vec3 evaluateSceneLightingPBR(vec3 normal, vec3 albedo, float shadow, float ssao, vec3 additionalLight, vec3 viewDir, vec3 normalGround, vec3 mrr, vec3 _emission, float additionalAmbientIrradiance)
{
vec3 viewDirection = -viewDir;
vec3 h = normalize(viewDirection + mainLightDirection);
PBRShadingInfo inputs;
inputs.NdotL = clamp(dot(normal, mainLightDirection), 0.001, 1.0);
inputs.NdotV = clamp(abs(dot(normal, viewDirection)), 0.001, 1.0);
inputs.NdotH = clamp(dot(normal, h), 0.0, 1.0);
inputs.VdotH = clamp(dot(viewDirection, h), 0.0, 1.0);
inputs.NdotNG = clamp(dot(normal, normalGround), -1.0, 1.0);
vec3 reflectedView = normalize(reflect(viewDirection, normal));
inputs.RdotNG = clamp(dot(reflectedView, normalGround), -1.0, 1.0);
inputs.albedoLinear = pow(albedo, vec3(GAMMA_SRGB));
inputs.ssao = ssao;
inputs.metalness = mrr[0];
inputs.roughness = clamp(mrr[1] * mrr[1], 0.001, 0.99);`),a.code.add(i`inputs.f0 = (0.16 * mrr[2] * mrr[2]) * (1.0 - inputs.metalness) + inputs.albedoLinear * inputs.metalness;
inputs.f90 = vec3(clamp(dot(inputs.f0, vec3(50.0 * 0.33)), 0.0, 1.0));
inputs.diffuseColor = inputs.albedoLinear * (vec3(1.0) - inputs.f0) * (1.0 - inputs.metalness);`),e.useFillLights?a.uniforms.add(new eo("hasFillLights",(o,n)=>n.enableFillLights)):a.constants.add("hasFillLights","bool",!1),a.code.add(i`vec3 ambientDir = vec3(5.0 * normalGround[1] - normalGround[0] * normalGround[2], - 5.0 * normalGround[0] - normalGround[2] * normalGround[1], normalGround[1] * normalGround[1] + normalGround[0] * normalGround[0]);
ambientDir = ambientDir != vec3(0.0) ? normalize(ambientDir) : normalize(vec3(5.0, -1.0, 0.0));
inputs.NdotAmbDir = hasFillLights ? abs(dot(normal, ambientDir)) : 1.0;
vec3 mainLightIrradianceComponent = inputs.NdotL * (1.0 - shadow) * mainLightIntensity;
vec3 fillLightsIrradianceComponent = inputs.NdotAmbDir * mainLightIntensity * fillLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(normal, ssao) + additionalLight;
inputs.skyIrradianceToSurface = ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;
inputs.groundIrradianceToSurface = GROUND_REFLECTANCE * ambientLightIrradianceComponent + mainLightIrradianceComponent + fillLightsIrradianceComponent ;`),a.uniforms.add(new N("lightingSpecularStrength",(o,n)=>n.lighting.mainLight.specularStrength),new N("lightingEnvironmentStrength",(o,n)=>n.lighting.mainLight.environmentStrength)),a.code.add(i`vec3 horizonRingDir = inputs.RdotNG * normalGround - reflectedView;
vec3 horizonRingH = normalize(viewDirection + horizonRingDir);
inputs.NdotH_Horizon = dot(normal, horizonRingH);
vec3 mainLightRadianceComponent = lightingSpecularStrength * normalDistribution(inputs.NdotH, inputs.roughness) * mainLightIntensity * (1.0 - shadow);
vec3 horizonLightRadianceComponent = lightingEnvironmentStrength * normalDistribution(inputs.NdotH_Horizon, min(inputs.roughness + horizonLightDiffusion, 1.0)) * mainLightIntensity * fillLightIntensity;
vec3 ambientLightRadianceComponent = lightingEnvironmentStrength * calculateAmbientRadiance(ssao) + additionalLight;
float normalDirectionModifier = mix(1., min(mix(0.1, 2.0, (inputs.NdotNG + 1.) * 0.5), 1.0), clamp(inputs.roughness * 5.0, 0.0 , 1.0));
inputs.skyRadianceToSurface = (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.groundRadianceToSurface = 0.5 * GROUND_REFLECTANCE * (ambientLightRadianceComponent + horizonLightRadianceComponent) * normalDirectionModifier + mainLightRadianceComponent;
inputs.averageAmbientRadiance = ambientLightIrradianceComponent[1] * (1.0 + GROUND_REFLECTANCE[1]);`),a.code.add(i`
        vec3 reflectedColorComponent = evaluateEnvironmentIllumination(inputs);
        vec3 additionalMaterialReflectanceComponent = inputs.albedoLinear * additionalAmbientIrradiance;
        vec3 emissionComponent = _emission == vec3(0.0) ? _emission : pow(_emission, vec3(GAMMA_SRGB));
        vec3 outColorLinear = reflectedColorComponent + additionalMaterialReflectanceComponent + emissionComponent;
        ${e.pbrMode!==v.Schematic||e.hasColorTexture?i`vec3 outColor = pow(blackLevelSoftCompression(outColorLinear, inputs), vec3(INV_GAMMA_SRGB));`:i`vec3 outColor = pow(max(vec3(0.0), outColorLinear - 0.005 * inputs.averageAmbientRadiance), vec3(INV_GAMMA_SRGB));`}
        return outColor;
      }
    `);break;case v.Simplified:case v.TerrainWithWater:t.include(vt),a.code.add(i`const float roughnessTerrain = 0.5;
const float specularityTerrain = 0.5;
const vec3 fresnelReflectionTerrain = vec3(0.04);
vec3 evaluatePBRSimplifiedLighting(vec3 n, vec3 c, float shadow, float ssao, vec3 al, vec3 vd, vec3 nup) {
vec3 viewDirection = -vd;
vec3 h = normalize(viewDirection + mainLightDirection);
float NdotL = clamp(dot(n, mainLightDirection), 0.001, 1.0);
float NdotV = clamp(abs(dot(n, viewDirection)), 0.001, 1.0);
float NdotH = clamp(dot(n, h), 0.0, 1.0);
float NdotNG = clamp(dot(n, nup), -1.0, 1.0);
vec3 albedoLinear = pow(c, vec3(GAMMA_SRGB));
float lightness = 0.3 * albedoLinear[0] + 0.5 * albedoLinear[1] + 0.2 * albedoLinear[2];
vec3 f0 = (0.85 * lightness + 0.15) * fresnelReflectionTerrain;
vec3 f90 =  vec3(clamp(dot(f0, vec3(50.0 * 0.33)), 0.0, 1.0));
vec3 mainLightIrradianceComponent = (1. - shadow) * NdotL * mainLightIntensity;
vec3 ambientLightIrradianceComponent = calculateAmbientIrradiance(n, ssao) + al;
vec3 ambientSky = ambientLightIrradianceComponent + mainLightIrradianceComponent;
vec3 indirectDiffuse = ((1.0 - NdotNG) * mainLightIrradianceComponent + (1.0 + NdotNG ) * ambientSky) * 0.5;
vec3 outDiffColor = albedoLinear * (1.0 - f0) * indirectDiffuse / PI;
vec3 mainLightRadianceComponent = normalDistribution(NdotH, roughnessTerrain) * mainLightIntensity;
vec2 dfg = prefilteredDFGAnalytical(roughnessTerrain, NdotV);
vec3 specularColor = f0 * dfg.x + f90 * dfg.y;
vec3 specularComponent = specularityTerrain * specularColor * mainLightRadianceComponent;
vec3 outColorLinear = outDiffColor + specularComponent;
vec3 outColor = pow(outColorLinear, vec3(INV_GAMMA_SRGB));
return outColor;
}`);break;default:St(e.pbrMode);case v.COUNT:}}class yr extends ze{constructor(e,a,o){super(e,"mat4",ve.Draw,(n,r,l,u)=>n.setUniformMatrix4fv(e,a(r,l,u)),o)}}class wr extends ze{constructor(e,a,o){super(e,"mat4",ve.Pass,(n,r,l)=>n.setUniformMatrix4fv(e,a(r,l)),o)}}let Mr=class extends rt{constructor(){super(...arguments),this.modelTransformation=Ya}};class Hi extends Mr{constructor(){super(...arguments),this.origin=z()}}function fa(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new wr("shadowMapMatrix",(a,o)=>o.shadowMap.getShadowMapMatrices(a.origin),4)),ga(t))}function va(t,e){e.receiveShadows&&(t.fragment.uniforms.add(new yr("shadowMapMatrix",(a,o)=>o.shadowMap.getShadowMapMatrices(a.origin),4)),ga(t))}function ga(t){const e=t.fragment;e.include(sa),e.uniforms.add(new R("shadowMap",(a,o)=>o.shadowMap.depthTexture),new It("numCascades",(a,o)=>o.shadowMap.numCascades),new G("cascadeDistances",(a,o)=>o.shadowMap.cascadeDistances)),e.code.add(i`int chooseCascade(float depth, out mat4 mat) {
vec4 distance = cascadeDistances;
int i = depth < distance[1] ? 0 : depth < distance[2] ? 1 : depth < distance[3] ? 2 : 3;
mat = i == 0 ? shadowMapMatrix[0] : i == 1 ? shadowMapMatrix[1] : i == 2 ? shadowMapMatrix[2] : shadowMapMatrix[3];
return i;
}
vec3 lightSpacePosition(vec3 _vpos, mat4 mat) {
vec4 lv = mat * vec4(_vpos, 1.0);
lv.xy /= lv.w;
return 0.5 * lv.xyz + vec3(0.5);
}
vec2 cascadeCoordinates(int i, ivec2 textureSize, vec3 lvpos) {
float xScale = float(textureSize.y) / float(textureSize.x);
return vec2((float(i) + lvpos.x) * xScale, lvpos.y);
}
float readShadowMapDepth(ivec2 uv, sampler2D _depthTex) {
return rgba4ToFloat(texelFetch(_depthTex, uv, 0));
}
float posIsInShadow(ivec2 uv, vec3 lvpos, sampler2D _depthTex) {
return readShadowMapDepth(uv, _depthTex) < lvpos.z ? 1.0 : 0.0;
}
float filterShadow(vec2 uv, vec3 lvpos, ivec2 texSize, sampler2D _depthTex) {
vec2 st = fract(uv * vec2(texSize) + vec2(0.5));
ivec2 base = ivec2(uv * vec2(texSize) - vec2(0.5));
float s00 = posIsInShadow(ivec2(base.x, base.y), lvpos, _depthTex);
float s10 = posIsInShadow(ivec2(base.x + 1, base.y), lvpos, _depthTex);
float s11 = posIsInShadow(ivec2(base.x + 1, base.y + 1), lvpos, _depthTex);
float s01 = posIsInShadow(ivec2(base.x, base.y + 1), lvpos, _depthTex);
return mix(mix(s00, s10, st.x), mix(s01, s11, st.x), st.y);
}
float readShadowMap(const in vec3 _vpos, float _linearDepth) {
mat4 mat;
int i = chooseCascade(_linearDepth, mat);
if (i >= numCascades) { return 0.0; }
vec3 lvpos = lightSpacePosition(_vpos, mat);
if (lvpos.z >= 1.0 || lvpos.x < 0.0 || lvpos.x > 1.0 || lvpos.y < 0.0 || lvpos.y > 1.0) { return 0.0; }
ivec2 size = textureSize(shadowMap, 0);
vec2 uv = cascadeCoordinates(i, size, lvpos);
return filterShadow(uv, lvpos, size, shadowMap);
}`)}function Cr(t,e){e.hasColorTextureTransform?(t.vertex.uniforms.add(new se("colorTextureTransformMatrix",a=>a.colorTextureTransformMatrix??ne)),t.varyings.add("colorUV","vec2"),t.vertex.code.add(i`void forwardColorUV(){
colorUV = (colorTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardColorUV(){}`)}function Sr(t,e){e.hasNormalTextureTransform&&e.textureCoordinateType!==U.None?(t.vertex.uniforms.add(new se("normalTextureTransformMatrix",a=>a.normalTextureTransformMatrix??ne)),t.varyings.add("normalUV","vec2"),t.vertex.code.add(i`void forwardNormalUV(){
normalUV = (normalTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardNormalUV(){}`)}function Or(t,e){e.hasEmissionTextureTransform&&e.textureCoordinateType!==U.None?(t.vertex.uniforms.add(new se("emissiveTextureTransformMatrix",a=>a.emissiveTextureTransformMatrix??ne)),t.varyings.add("emissiveUV","vec2"),t.vertex.code.add(i`void forwardEmissiveUV(){
emissiveUV = (emissiveTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardEmissiveUV(){}`)}function _r(t,e){e.hasOcclusionTextureTransform&&e.textureCoordinateType!==U.None?(t.vertex.uniforms.add(new se("occlusionTextureTransformMatrix",a=>a.occlusionTextureTransformMatrix??ne)),t.varyings.add("occlusionUV","vec2"),t.vertex.code.add(i`void forwardOcclusionUV(){
occlusionUV = (occlusionTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardOcclusionUV(){}`)}function Er(t,e){e.hasMetallicRoughnessTextureTransform&&e.textureCoordinateType!==U.None?(t.vertex.uniforms.add(new se("metallicRoughnessTextureTransformMatrix",a=>a.metallicRoughnessTextureTransformMatrix??ne)),t.varyings.add("metallicRoughnessUV","vec2"),t.vertex.code.add(i`void forwardMetallicRoughnessUV(){
metallicRoughnessUV = (metallicRoughnessTextureTransformMatrix * vec3(vuv0, 1.0)).xy;
}`)):t.vertex.code.add(i`void forwardMetallicRoughnessUV(){}`)}function xa(t){t.include(to),t.code.add(i`
    vec3 mixExternalColor(vec3 internalColor, vec3 textureColor, vec3 externalColor, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      vec3 internalMixed = internalColor * textureColor;
      vec3 allMixed = internalMixed * externalColor;

      if (mode == ${i.int(ue.Multiply)}) {
        return allMixed;
      }
      if (mode == ${i.int(ue.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(ue.Replace)}) {
        return externalColor;
      }

      // tint (or something invalid)
      float vIn = rgb2v(internalMixed);
      vec3 hsvTint = rgb2hsv(externalColor);
      vec3 hsvOut = vec3(hsvTint.x, hsvTint.y, vIn * hsvTint.z);
      return hsv2rgb(hsvOut);
    }

    float mixExternalOpacity(float internalOpacity, float textureOpacity, float externalOpacity, int mode) {
      // workaround for artifacts in OSX using Intel Iris Pro
      // see: https://devtopia.esri.com/WebGIS/arcgis-js-api/issues/10475
      float internalMixed = internalOpacity * textureOpacity;
      float allMixed = internalMixed * externalOpacity;

      if (mode == ${i.int(ue.Ignore)}) {
        return internalMixed;
      }
      if (mode == ${i.int(ue.Replace)}) {
        return externalOpacity;
      }

      // multiply or tint (or something invalid)
      return allMixed;
    }
  `)}function ba(t){const e=new Pe,{vertex:a,fragment:o,varyings:n}=e;if(ee(a,t),e.include(Wt),n.add("vpos","vec3"),e.include(pe,t),e.include(Yt,t),e.include(ta,t),e.include(Cr,t),t.output===g.Color){e.include(Sr,t),e.include(Or,t),e.include(_r,t),e.include(Er,t),Oe(a,t),e.include(et,t),e.include(oe,t);const r=t.normalType===$.Attribute||t.normalType===$.Compressed;r&&t.offsetBackfaces&&e.include(ia),e.include(cr,t),e.include(Dt,t),t.instancedColor&&e.attributes.add(M.INSTANCECOLOR,"vec4"),n.add("vPositionLocal","vec3"),e.include(te,t),e.include(aa,t),e.include(na,t),e.include(oa,t),a.uniforms.add(new G("externalColor",l=>l.externalColor)),n.add("vcolorExt","vec4"),t.multipassEnabled&&n.add("depth","float"),a.code.add(i`
      void main(void) {
        forwardNormalizedVertexColor();
        vcolorExt = externalColor;
        ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
        vcolorExt *= vvColor();
        vcolorExt *= getSymbolColor();
        forwardColorMixMode();

        if (vcolorExt.a < ${i.float(Ze)}) {
          gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
        } else {
          vpos = getVertexInLocalOriginSpace();
          vPositionLocal = vpos - view[3].xyz;
          vpos = subtractOrigin(vpos);
          ${r?i`vNormalWorld = dpNormal(vvLocalNormal(normalModel()));`:""}
          vpos = addVerticalOffset(vpos, localOrigin);
          ${t.hasVertexTangents?"vTangent = dpTransformVertexTangent(tangent);":""}
          gl_Position = transformPosition(proj, view, vpos);
          ${r&&t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
        }

        ${t.multipassEnabled?"depth = (view * vec4(vpos, 1.0)).z;":""}
        forwardLinearDepth();
        forwardTextureCoordinates();
        forwardColorUV();
        forwardNormalUV();
        forwardEmissiveUV();
        forwardOcclusionUV();
        forwardMetallicRoughnessUV();
      }
    `),e.include(ae,t),e.include(pa,t),e.include(it,t),e.include(re,t),e.include(t.instancedDoublePrecision?fa:va,t),e.include(kt,t),Oe(o,t),o.uniforms.add(a.uniforms.get("localOrigin"),new ie("ambient",l=>l.ambient),new ie("diffuse",l=>l.diffuse),new N("opacity",l=>l.opacity),new N("layerOpacity",l=>l.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new R("tex",l=>l.texture)),e.include(Jt,t),e.include(Ke,t),o.include(xa),e.include(ar,t),nt(o),st(o),Qe(o),t.transparencyPassType===q.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),o.code.add(i`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?"terrainDepthTest(depth);":""}
        ${t.hasColorTexture?i`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?i`colorUV`:i`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
        shadingParams.viewDirection = normalize(vpos - cameraPosition);
        ${t.normalType===$.ScreenDerivative?i`
                vec3 normal = screenDerivativeNormal(vPositionLocal);`:i`
                shadingParams.normalView = vNormalWorld;
                vec3 normal = shadingNormal(shadingParams);`}
        ${t.pbrMode===v.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse() * getBakedOcclusion();

        vec3 posWorld = vpos + localOrigin;

        float additionalAmbientScale = additionalDirectedAmbientLight(posWorld);
        float shadow = ${t.receiveShadows?"readShadowMap(vpos, linearDepth)":t.spherical?"lightingGlobalFactor * (1.0 - additionalAmbientScale)":"0.0"};

        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?i`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.hasNormalTexture?i`
                mat3 tangentSpace = ${t.hasVertexTangents?"computeTangentSpace(normal);":"computeTangentSpace(normal, vpos, vuv0);"}
                vec3 shadingNormal = computeTextureNormal(tangentSpace, ${t.hasNormalTextureTransform?i`normalUV`:"vuv0"});`:i`vec3 shadingNormal = normal;`}
        vec3 normalGround = ${t.spherical?i`normalize(posWorld);`:i`vec3(0.0, 0.0, 1.0);`}

        ${t.snowCover?i`
                float snow = smoothstep(0.5, 0.55, dot(normal, normalGround));
                albedo = mix(albedo, vec3(1), snow);
                shadingNormal = mix(shadingNormal, normal, snow);
                ssao = mix(ssao, 1.0, snow);`:""}

        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;

        ${t.pbrMode===v.Normal||t.pbrMode===v.Schematic?i`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?i`
                        mrr = mix(mrr, vec3(0.0, 1.0, 0.04), snow);
                        emission = mix(emission, vec3(0.0), snow);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, shadingParams.viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===q.ColorAlpha?i`
                  fragColor = premultiplyAlpha(fragColor);
                  fragAlpha = fragColor.a;`:""}
      }
    `)}return e.include(ca,t),e}const $r=Object.freeze(Object.defineProperty({__proto__:null,build:ba},Symbol.toStringTag,{value:"Module"}));let Ar=class extends ao{constructor(){super(...arguments),this.isSchematic=!1,this.usePBR=!1,this.mrrFactors=Ye(ra),this.hasVertexColors=!1,this.hasSymbolColors=!1,this.doubleSided=!1,this.doubleSidedType="normal",this.cullFace=W.Back,this.isInstanced=!1,this.hasInstancedColor=!1,this.emissiveFactor=we(0,0,0),this.instancedDoublePrecision=!1,this.normalType=$.Attribute,this.receiveShadows=!0,this.receiveAmbientOcclusion=!0,this.castShadows=!0,this.shadowMappingEnabled=!1,this.ambient=we(.2,.2,.2),this.diffuse=we(.8,.8,.8),this.externalColor=La(1,1,1,1),this.colorMixMode="multiply",this.opacity=1,this.layerOpacity=1,this.origin=z(),this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.offsetTransparentBackfaces=!1,this.vvSize=null,this.vvColor=null,this.vvOpacity=null,this.vvSymbolAnchor=null,this.vvSymbolRotationMatrix=null,this.modelTransformation=null,this.transparent=!1,this.writeDepth=!0,this.customDepthTest=fe.Less,this.textureAlphaMode=y.Blend,this.textureAlphaCutoff=oo,this.textureAlphaPremultiplied=!1,this.hasOccludees=!1,this.renderOccluded=Do.Occlude,this.isDecoration=!1}},Qi=class extends mo{constructor(){super(...arguments),this.origin=z(),this.slicePlaneLocalOrigin=this.origin}},lt=class Ta extends Xe{initializeConfiguration(e,a){a.spherical=e.viewingMode===Je.Global,a.doublePrecisionRequiresObfuscation=e.rctx.driverTest.doublePrecisionRequiresObfuscation.result,a.textureCoordinateType=a.hasColorTexture||a.hasMetallicRoughnessTexture||a.hasEmissionTexture||a.hasOcclusionTexture||a.hasNormalTexture?U.Default:U.None,a.objectAndLayerIdColorInstanced=a.instanced}initializeProgram(e){return this._initializeProgram(e,Ta.shader)}_initializeProgram(e,a){return new He(e.rctx,a.get().build(this.configuration),tt)}_makePipeline(e,a){const o=this.configuration,n=e===q.NONE,r=e===q.FrontFace;return at({blending:o.output===g.Color&&o.transparent?n?ro:io(e):null,culling:Rr(o)?Zo(o.cullFace):null,depthTest:{func:no(e,Pr(o.customDepthTest))},depthWrite:(n||r)&&o.writeDepth?Xo:null,drawBuffers:o.output===g.Depth?{buffers:[Jo.NONE]}:so(e),colorWrite:ot,stencilWrite:o.hasOccludees?lo:null,stencilTest:o.hasOccludees?a?co:uo:null,polygonOffset:n||r?null:ho(o.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._makePipeline(this.configuration.transparencyPassType,!0),this._makePipeline(this.configuration.transparencyPassType,!1)}getPipeline(e){return e?this._occludeePipelineState:super.getPipeline()}};function Pr(t){return t===fe.Lequal?Tt.LEQUAL:Tt.LESS}function Rr(t){return t.cullFace!==W.None||!t.hasSlicePlane&&!t.transparent&&!t.doubleSidedMode}lt.shader=new Re($r,()=>Ae(()=>Promise.resolve().then(()=>ri),void 0,import.meta.url));class m extends po{constructor(){super(...arguments),this.output=g.Color,this.alphaDiscardMode=y.Opaque,this.doubleSidedMode=A.None,this.pbrMode=v.Disabled,this.cullFace=W.None,this.transparencyPassType=q.NONE,this.normalType=$.Attribute,this.textureCoordinateType=U.None,this.customDepthTest=fe.Less,this.spherical=!1,this.hasVertexColors=!1,this.hasSymbolColors=!1,this.hasVerticalOffset=!1,this.hasSlicePlane=!1,this.hasSliceHighlight=!0,this.hasColorTexture=!1,this.hasMetallicRoughnessTexture=!1,this.hasEmissionTexture=!1,this.hasOcclusionTexture=!1,this.hasNormalTexture=!1,this.hasScreenSizePerspective=!1,this.hasVertexTangents=!1,this.hasOccludees=!1,this.multipassEnabled=!1,this.hasModelTransformation=!1,this.offsetBackfaces=!1,this.vvSize=!1,this.vvColor=!1,this.receiveShadows=!1,this.receiveAmbientOcclusion=!1,this.textureAlphaPremultiplied=!1,this.instanced=!1,this.instancedColor=!1,this.objectAndLayerIdColorInstanced=!1,this.instancedDoublePrecision=!1,this.doublePrecisionRequiresObfuscation=!1,this.writeDepth=!0,this.transparent=!1,this.enableOffset=!0,this.cullAboveGround=!1,this.snowCover=!1,this.hasColorTextureTransform=!1,this.hasEmissionTextureTransform=!1,this.hasNormalTextureTransform=!1,this.hasOcclusionTextureTransform=!1,this.hasMetallicRoughnessTextureTransform=!1}}c([p({count:g.COUNT})],m.prototype,"output",void 0),c([p({count:y.COUNT})],m.prototype,"alphaDiscardMode",void 0),c([p({count:A.COUNT})],m.prototype,"doubleSidedMode",void 0),c([p({count:v.COUNT})],m.prototype,"pbrMode",void 0),c([p({count:W.COUNT})],m.prototype,"cullFace",void 0),c([p({count:q.COUNT})],m.prototype,"transparencyPassType",void 0),c([p({count:$.COUNT})],m.prototype,"normalType",void 0),c([p({count:U.COUNT})],m.prototype,"textureCoordinateType",void 0),c([p({count:fe.COUNT})],m.prototype,"customDepthTest",void 0),c([p()],m.prototype,"spherical",void 0),c([p()],m.prototype,"hasVertexColors",void 0),c([p()],m.prototype,"hasSymbolColors",void 0),c([p()],m.prototype,"hasVerticalOffset",void 0),c([p()],m.prototype,"hasSlicePlane",void 0),c([p()],m.prototype,"hasSliceHighlight",void 0),c([p()],m.prototype,"hasColorTexture",void 0),c([p()],m.prototype,"hasMetallicRoughnessTexture",void 0),c([p()],m.prototype,"hasEmissionTexture",void 0),c([p()],m.prototype,"hasOcclusionTexture",void 0),c([p()],m.prototype,"hasNormalTexture",void 0),c([p()],m.prototype,"hasScreenSizePerspective",void 0),c([p()],m.prototype,"hasVertexTangents",void 0),c([p()],m.prototype,"hasOccludees",void 0),c([p()],m.prototype,"multipassEnabled",void 0),c([p()],m.prototype,"hasModelTransformation",void 0),c([p()],m.prototype,"offsetBackfaces",void 0),c([p()],m.prototype,"vvSize",void 0),c([p()],m.prototype,"vvColor",void 0),c([p()],m.prototype,"receiveShadows",void 0),c([p()],m.prototype,"receiveAmbientOcclusion",void 0),c([p()],m.prototype,"textureAlphaPremultiplied",void 0),c([p()],m.prototype,"instanced",void 0),c([p()],m.prototype,"instancedColor",void 0),c([p()],m.prototype,"objectAndLayerIdColorInstanced",void 0),c([p()],m.prototype,"instancedDoublePrecision",void 0),c([p()],m.prototype,"doublePrecisionRequiresObfuscation",void 0),c([p()],m.prototype,"writeDepth",void 0),c([p()],m.prototype,"transparent",void 0),c([p()],m.prototype,"enableOffset",void 0),c([p()],m.prototype,"cullAboveGround",void 0),c([p()],m.prototype,"snowCover",void 0),c([p()],m.prototype,"hasColorTextureTransform",void 0),c([p()],m.prototype,"hasEmissionTextureTransform",void 0),c([p()],m.prototype,"hasNormalTextureTransform",void 0),c([p()],m.prototype,"hasOcclusionTextureTransform",void 0),c([p()],m.prototype,"hasMetallicRoughnessTextureTransform",void 0),c([p({constValue:!1})],m.prototype,"occlusionPass",void 0),c([p({constValue:!0})],m.prototype,"hasVvInstancing",void 0),c([p({constValue:!1})],m.prototype,"useCustomDTRExponentForWater",void 0),c([p({constValue:!1})],m.prototype,"supportsTextureAtlas",void 0),c([p({constValue:!0})],m.prototype,"useFillLights",void 0);function ya(t){const e=new Pe,{vertex:a,fragment:o,varyings:n}=e;return ee(a,t),e.include(Wt),n.add("vpos","vec3"),e.include(pe,t),e.include(Yt,t),e.include(ta,t),t.output===g.Color&&(Oe(e.vertex,t),e.include(et,t),e.include(oe,t),t.offsetBackfaces&&e.include(ia),t.instancedColor&&e.attributes.add(M.INSTANCECOLOR,"vec4"),n.add("vNormalWorld","vec3"),n.add("localvpos","vec3"),t.multipassEnabled&&n.add("depth","float"),e.include(te,t),e.include(aa,t),e.include(na,t),e.include(oa,t),a.uniforms.add(new G("externalColor",r=>r.externalColor)),n.add("vcolorExt","vec4"),a.code.add(i`
        void main(void) {
          forwardNormalizedVertexColor();
          vcolorExt = externalColor;
          ${t.instancedColor?"vcolorExt *= instanceColor * 0.003921568627451;":""}
          vcolorExt *= vvColor();
          vcolorExt *= getSymbolColor();
          forwardColorMixMode();

          if (vcolorExt.a < ${i.float(Ze)}) {
            gl_Position = vec4(1e38, 1e38, 1e38, 1.0);
          } else {
            vpos = getVertexInLocalOriginSpace();
            localvpos = vpos - view[3].xyz;
            vpos = subtractOrigin(vpos);
            vNormalWorld = dpNormal(vvLocalNormal(normalModel()));
            vpos = addVerticalOffset(vpos, localOrigin);
            gl_Position = transformPosition(proj, view, vpos);
            ${t.offsetBackfaces?"gl_Position = offsetBackfacingClipPosition(gl_Position, vpos, vNormalWorld, cameraPosition);":""}
          }
          ${t.multipassEnabled?i`depth = (view * vec4(vpos, 1.0)).z;`:""}
          forwardLinearDepth();
          forwardTextureCoordinates();
        }
      `)),t.output===g.Color&&(e.include(ae,t),e.include(pa,t),e.include(it,t),e.include(re,t),e.include(t.instancedDoublePrecision?fa:va,t),e.include(kt,t),Oe(e.fragment,t),qt(o),nt(o),st(o),o.uniforms.add(a.uniforms.get("localOrigin"),a.uniforms.get("view"),new ie("ambient",r=>r.ambient),new ie("diffuse",r=>r.diffuse),new N("opacity",r=>r.opacity),new N("layerOpacity",r=>r.layerOpacity)),t.hasColorTexture&&o.uniforms.add(new R("tex",r=>r.texture)),e.include(Jt,t),e.include(Ke,t),o.include(xa),t.transparencyPassType===q.ColorAlpha&&(e.outputs.add("fragColor","vec4",0),e.outputs.add("fragAlpha","float",1)),Qe(o),o.code.add(i`
      void main() {
        discardBySlice(vpos);
        ${t.multipassEnabled?i`terrainDepthTest(depth);`:""}
        ${t.hasColorTexture?i`
                vec4 texColor = texture(tex, ${t.hasColorTextureTransform?i`colorUV`:i`vuv0`});
                ${t.textureAlphaPremultiplied?"texColor.rgb /= texColor.a;":""}
                discardOrAdjustAlpha(texColor);`:i`vec4 texColor = vec4(1.0);`}
        vec3 viewDirection = normalize(vpos - cameraPosition);
        ${t.pbrMode===v.Normal?"applyPBRFactors();":""}
        float ssao = evaluateAmbientOcclusionInverse();
        ssao *= getBakedOcclusion();

        float additionalAmbientScale = additionalDirectedAmbientLight(vpos + localOrigin);
        vec3 additionalLight = ssao * mainLightIntensity * additionalAmbientScale * ambientBoostFactor * lightingGlobalFactor;
        ${t.receiveShadows?"float shadow = readShadowMap(vpos, linearDepth);":t.spherical?"float shadow = lightingGlobalFactor * (1.0 - additionalAmbientScale);":"float shadow = 0.0;"}
        vec3 matColor = max(ambient, diffuse);
        ${t.hasVertexColors?i`
                vec3 albedo = mixExternalColor(vColor.rgb * matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(vColor.a * opacity, texColor.a, vcolorExt.a, int(colorMixMode));`:i`
                vec3 albedo = mixExternalColor(matColor, texColor.rgb, vcolorExt.rgb, int(colorMixMode));
                float opacity_ = layerOpacity * mixExternalOpacity(opacity, texColor.a, vcolorExt.a, int(colorMixMode));`}
        ${t.snowCover?i`albedo = mix(albedo, vec3(1), 0.9);`:i``}
        ${i`
            vec3 shadingNormal = normalize(vNormalWorld);
            albedo *= 1.2;
            vec3 viewForward = vec3(view[0][2], view[1][2], view[2][2]);
            float alignmentLightView = clamp(dot(viewForward, -mainLightDirection), 0.0, 1.0);
            float transmittance = 1.0 - clamp(dot(viewForward, shadingNormal), 0.0, 1.0);
            float treeRadialFalloff = vColor.r;
            float backLightFactor = 0.5 * treeRadialFalloff * alignmentLightView * transmittance * (1.0 - shadow);
            additionalLight += backLightFactor * mainLightIntensity;`}
        ${t.pbrMode===v.Normal||t.pbrMode===v.Schematic?t.spherical?i`vec3 normalGround = normalize(vpos + localOrigin);`:i`vec3 normalGround = vec3(0.0, 0.0, 1.0);`:i``}
        ${t.pbrMode===v.Normal||t.pbrMode===v.Schematic?i`
                float additionalAmbientIrradiance = additionalAmbientIrradianceFactor * mainLightIntensity[2];
                ${t.snowCover?i`
                        mrr = vec3(0.0, 1.0, 0.04);
                        emission = vec3(0.0);`:""}

                vec3 shadedColor = evaluateSceneLightingPBR(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight, viewDirection, normalGround, mrr, emission, additionalAmbientIrradiance);`:i`vec3 shadedColor = evaluateSceneLighting(shadingNormal, albedo, shadow, 1.0 - ssao, additionalLight);`}
        fragColor = highlightSlice(vec4(shadedColor, opacity_), vpos);
        ${t.transparencyPassType===q.ColorAlpha?i`
                fragColor = premultiplyAlpha(fragColor);
                fragAlpha = fragColor.a;`:""}
      }
    `)),e.include(ca,t),e}const zr=Object.freeze(Object.defineProperty({__proto__:null,build:ya},Symbol.toStringTag,{value:"Module"}));class Ge extends lt{initializeConfiguration(e,a){super.initializeConfiguration(e,a),a.hasMetallicRoughnessTexture=!1,a.hasEmissionTexture=!1,a.hasOcclusionTexture=!1,a.hasNormalTexture=!1,a.hasModelTransformation=!1,a.normalType=$.Attribute,a.doubleSidedMode=A.WindingOrder,a.hasVertexTangents=!1}initializeProgram(e){return this._initializeProgram(e,Ge.shader)}}Ge.shader=new Re(zr,()=>Ae(()=>Promise.resolve().then(()=>ii),void 0,import.meta.url));let $e=class extends Vo{constructor(e){super(e,Gr),this.supportsEdges=!0,this.produces=new Map([[Fe.OPAQUE_MATERIAL,a=>(De(a)||Ve(a))&&!this.parameters.transparent],[Fe.TRANSPARENT_MATERIAL,a=>(De(a)||Ve(a))&&this.parameters.transparent&&this.parameters.writeDepth],[Fe.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL,a=>(De(a)||Ve(a))&&this.parameters.transparent&&!this.parameters.writeDepth]]),this._configuration=new m,this._vertexBufferLayout=Nr(this.parameters)}isVisibleForOutput(e){return e!==g.Shadow&&e!==g.ShadowExcludeHighlight&&e!==g.ShadowHighlight||this.parameters.castShadows}isVisible(){const e=this.parameters;if(!super.isVisible()||e.layerOpacity===0)return!1;const{hasInstancedColor:a,hasVertexColors:o,hasSymbolColors:n,vvColor:r}=e,l=e.colorMixMode==="replace",u=e.opacity>0,s=e.externalColor&&e.externalColor[3]>0,d=a||r||n;return o&&d?l||u:o?l?s:u:d?l||u:l?s:u}getConfiguration(e,a){return this._configuration.output=e,this._configuration.hasNormalTexture=!!this.parameters.normalTextureId,this._configuration.hasColorTexture=!!this.parameters.textureId,this._configuration.hasVertexTangents=this.parameters.hasVertexTangents,this._configuration.instanced=this.parameters.isInstanced,this._configuration.instancedDoublePrecision=this.parameters.instancedDoublePrecision,this._configuration.vvSize=!!this.parameters.vvSize,this._configuration.hasVerticalOffset=this.parameters.verticalOffset!=null,this._configuration.hasScreenSizePerspective=this.parameters.screenSizePerspective!=null,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.hasSliceHighlight=this.parameters.hasSliceHighlight,this._configuration.alphaDiscardMode=this.parameters.textureAlphaMode,this._configuration.normalType=this.parameters.normalType,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this.parameters.customDepthTest!=null&&(this._configuration.customDepthTest=this.parameters.customDepthTest),this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.cullFace=this.parameters.hasSlicePlane?W.None:this.parameters.cullFace,this._configuration.multipassEnabled=a.multipassEnabled,this._configuration.cullAboveGround=a.multipassTerrain.cullAboveGround,this._configuration.hasModelTransformation=this.parameters.modelTransformation!=null,e===g.Color&&(this._configuration.hasVertexColors=this.parameters.hasVertexColors,this._configuration.hasSymbolColors=this.parameters.hasSymbolColors,this.parameters.treeRendering?this._configuration.doubleSidedMode=A.WindingOrder:this._configuration.doubleSidedMode=this.parameters.doubleSided&&this.parameters.doubleSidedType==="normal"?A.View:this.parameters.doubleSided&&this.parameters.doubleSidedType==="winding-order"?A.WindingOrder:A.None,this._configuration.instancedColor=this.parameters.hasInstancedColor,this._configuration.receiveShadows=this.parameters.receiveShadows&&this.parameters.shadowMappingEnabled,this._configuration.receiveAmbientOcclusion=this.parameters.receiveAmbientOcclusion&&a.ssao!=null,this._configuration.vvColor=!!this.parameters.vvColor,this._configuration.textureAlphaPremultiplied=!!this.parameters.textureAlphaPremultiplied,this._configuration.pbrMode=this.parameters.usePBR?this.parameters.isSchematic?v.Schematic:v.Normal:v.Disabled,this._configuration.hasMetallicRoughnessTexture=!!this.parameters.metallicRoughnessTextureId,this._configuration.hasEmissionTexture=!!this.parameters.emissiveTextureId,this._configuration.hasOcclusionTexture=!!this.parameters.occlusionTextureId,this._configuration.offsetBackfaces=!(!this.parameters.transparent||!this.parameters.offsetTransparentBackfaces),this._configuration.transparencyPassType=a.transparencyPassType,this._configuration.enableOffset=a.camera.relativeElevation<fo,this._configuration.snowCover=this.hasSnowCover(a),this._configuration.hasColorTextureTransform=!!this.parameters.colorTextureTransformMatrix,this._configuration.hasNormalTextureTransform=!!this.parameters.normalTextureTransformMatrix,this._configuration.hasEmissionTextureTransform=!!this.parameters.emissiveTextureTransformMatrix,this._configuration.hasOcclusionTextureTransform=!!this.parameters.occlusionTextureTransformMatrix,this._configuration.hasMetallicRoughnessTextureTransform=!!this.parameters.metallicRoughnessTextureTransformMatrix),this._configuration}hasSnowCover(e){return e.weather!=null&&e.weatherVisible&&e.weather.type==="snowy"&&e.weather.snowCover==="enabled"}intersect(e,a,o,n,r,l){if(this.parameters.verticalOffset!=null){const u=o.camera;Ce(We,a[12],a[13],a[14]);let s=null;switch(o.viewingMode){case Je.Global:s=Pt(Ct,We);break;case Je.Local:s=Ba(Ct,Ir)}let d=0;const f=Me(Dr,We,u.eye),h=Rt(f),x=dt(f,f,1/h);let T=null;this.parameters.screenSizePerspective&&(T=Ga(s,x)),d+=Uo(u,h,this.parameters.verticalOffset,T??0,this.parameters.screenSizePerspective),dt(s,s,d),Na(qe,s,o.transform.inverseRotation),n=Me(jr,n,qe),r=Me(Fr,r,qe)}No(e,o,n,r,qo(o.verticalOffset),l)}createGLMaterial(e){return new Lr(e)}createBufferWriter(){return new jo(this._vertexBufferLayout)}},Lr=class extends Fo{constructor(e){super({...e,...e.material.parameters})}_updateShadowState(e){e.shadowMap.enabled!==this._material.parameters.shadowMappingEnabled&&this._material.setParameters({shadowMappingEnabled:e.shadowMap.enabled})}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&this._material.setParameters({hasOccludees:e.hasOccludees})}beginSlot(e){this._output===g.Color&&(this._updateShadowState(e),this._updateOccludeeState(e));const a=this._material.parameters;this.updateTexture(a.textureId);const o=e.camera.viewInverseTransposeMatrix;return Ce(a.origin,o[3],o[7],o[11]),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(a.treeRendering?Ge:lt,e)}};class Br extends Ar{constructor(){super(...arguments),this.initTextureTransparent=!1,this.treeRendering=!1,this.hasVertexTangents=!1}}const Gr=new Br;function Nr(t){const e=Lo().vec3f(M.POSITION);return t.normalType===$.Compressed?e.vec2i16(M.NORMALCOMPRESSED,{glNormalized:!0}):e.vec3f(M.NORMAL),t.hasVertexTangents&&e.vec4f(M.TANGENT),(t.textureId||t.normalTextureId||t.metallicRoughnessTextureId||t.emissiveTextureId||t.occlusionTextureId)&&e.vec2f(M.UV0),t.hasVertexColors&&e.vec4u8(M.COLOR),t.hasSymbolColors&&e.vec4u8(M.SYMBOLCOLOR),ja("enable-feature:objectAndLayerId-rendering")&&e.vec4u8(M.OBJECTANDLAYERIDCOLOR),e}const jr=z(),Fr=z(),Ir=we(0,0,1),Ct=z(),qe=z(),We=z(),Dr=z(),V=()=>Da.getLogger("esri.views.3d.layers.graphics.objectResourceUtils");async function Vr(t,e){const a=await Ur(t,e),o=await Jr(a.textureDefinitions??{},e);let n=0;for(const r in o)if(o.hasOwnProperty(r)){const l=o[r];n+=l!=null&&l.image?l.image.width*l.image.height*4:0}return{resource:a,textures:o,size:n+Fa(a)}}async function Ur(t,e){const a=e==null?void 0:e.streamDataRequester;if(a)return qr(t,a,e);const o=await zt(Ia(t,e));if(o.ok===!0)return o.value.data;Lt(o.error),wa(o.error)}async function qr(t,e,a){const o=await zt(e.request(t,"json",a));if(o.ok===!0)return o.value;Lt(o.error),wa(o.error.details.url)}function wa(t){throw new At("",`Request for object resource failed: ${t}`)}function Wr(t){const e=t.params,a=e.topology;let o=!0;switch(e.vertexAttributes||(V().warn("Geometry must specify vertex attributes"),o=!1),e.topology){case"PerAttributeArray":break;case"Indexed":case null:case void 0:{const r=e.faces;if(r){if(e.vertexAttributes)for(const l in e.vertexAttributes){const u=r[l];u!=null&&u.values?(u.valueType!=null&&u.valueType!=="UInt32"&&(V().warn(`Unsupported indexed geometry indices type '${u.valueType}', only UInt32 is currently supported`),o=!1),u.valuesPerElement!=null&&u.valuesPerElement!==1&&(V().warn(`Unsupported indexed geometry values per element '${u.valuesPerElement}', only 1 is currently supported`),o=!1)):(V().warn(`Indexed geometry does not specify face indices for '${l}' attribute`),o=!1)}}else V().warn("Indexed geometries must specify faces"),o=!1;break}default:V().warn(`Unsupported topology '${a}'`),o=!1}t.params.material||(V().warn("Geometry requires material"),o=!1);const n=t.params.vertexAttributes;for(const r in n)n[r].values||(V().warn("Geometries with externally defined attributes are not yet supported"),o=!1);return o}function Yr(t,e){var S,b;const a=new Array,o=new Array,n=new Array,r=new Po,l=t.resource,u=Bt.parse(l.version||"1.0","wosr");Xr.validate(u);const s=l.model.name,d=l.model.geometries,f=l.materialDefinitions??{},h=t.textures;let x=0;const T=new Map;for(let w=0;w<d.length;w++){const C=d[w];if(!Wr(C))continue;const _=Zr(C),P=C.params.vertexAttributes,Y=[],J=O=>{if(C.params.topology==="PerAttributeArray")return null;const j=C.params.faces;for(const F in j)if(F===O)return j[F].values;return null},le=P[M.POSITION],ge=le.values.length/le.valuesPerElement;for(const O in P){const j=P[O],F=j.values,Ne=J(O)??Ro(ge);Y.push([O,new K(F,Ne,j.valuesPerElement,!0)])}const L=_.texture,E=h&&h[L];if(E&&!T.has(L)){const{image:O,parameters:j}=E,F=new Zt(O,j);o.push(F),T.set(L,F)}const xe=T.get(L),ce=xe?xe.id:void 0,B=_.material;let de=r.get(B,L);if(de==null){const O=f[B.substring(B.lastIndexOf("/")+1)].params;O.transparency===1&&(O.transparency=0);const j=E&&E.alphaChannelUsage,F=O.transparency>0||j==="transparency"||j==="maskAndTransparency",Ne=E?Ma(E.alphaChannelUsage):void 0,ct={ambient:Ye(O.diffuse),diffuse:Ye(O.diffuse),opacity:1-(O.transparency||0),transparent:F,textureAlphaMode:Ne,textureAlphaCutoff:.33,textureId:ce,initTextureTransparent:!0,doubleSided:!0,cullFace:W.None,colorMixMode:O.externalColorMixMode||"tint",textureAlphaPremultiplied:(E==null?void 0:E.parameters.preMultiplyAlpha)??!1};e!=null&&e.materialParameters&&Object.assign(ct,e.materialParameters),de=new $e(ct),r.set(B,L,de)}n.push(de);const Oa=new Xt(de,Y);x+=((b=(S=Y.find(O=>O[0]===M.POSITION))==null?void 0:S[1])==null?void 0:b.indices.length)??0,a.push(Oa)}return{engineResources:[{name:s,stageResources:{textures:o,materials:n,geometries:a},pivotOffset:l.model.pivotOffset,numberOfVertices:x,lodThreshold:null}],referenceBoundingBox:kr(a)}}function kr(t){const e=Gt();return t.forEach(a=>{const o=a.boundingInfo;o!=null&&(Se(e,o.bbMin),Se(e,o.bbMax))}),e}async function Jr(t,e){const a=new Array;for(const r in t){const l=t[r],u=l.images[0].data;if(!u){V().warn("Externally referenced texture data is not yet supported");continue}const s=l.encoding+";base64,"+u,d="/textureDefinitions/"+r,f=l.channels==="rgba"?l.alphaChannelUsage||"transparency":"none",h={noUnpackFlip:!0,wrap:{s:_e.REPEAT,t:_e.REPEAT},preMultiplyAlpha:Ma(f)!==y.Opaque},x=e!=null&&e.disableTextures?Promise.resolve(null):zo(s,e);a.push(x.then(T=>({refId:d,image:T,parameters:h,alphaChannelUsage:f})))}const o=await Promise.all(a),n={};for(const r of o)n[r.refId]=r;return n}function Ma(t){switch(t){case"mask":return y.Mask;case"maskAndTransparency":return y.MaskBlend;case"none":return y.Opaque;default:return y.Blend}}function Zr(t){const e=t.params;return{id:1,material:e.material,texture:e.texture,region:e.texture}}const Xr=new Bt(1,2,"wosr");async function Hr(t,e){var h;const a=Ca(_a(t));if(a.fileType==="wosr"){const x=await(e.cache?e.cache.loadWOSR(a.url,e):Vr(a.url,e)),{engineResources:T,referenceBoundingBox:S}=Yr(x,e);return{lods:T,referenceBoundingBox:S,isEsriSymbolResource:!1,isWosr:!0}}const o=await(e.cache?e.cache.loadGLTF(a.url,e,!!e.usePBR):Mo(new Co(e.streamDataRequester),a.url,e,e.usePBR)),n=(h=o.model.meta)==null?void 0:h.ESRI_proxyEllipsoid,r=o.meta.isEsriSymbolResource&&n!=null&&o.meta.ESRI_webstyle==="EsriRealisticTreesStyle";r&&!o.customMeta.esriTreeRendering&&(o.customMeta.esriTreeRendering=!0,ti(o,n));const l=!!e.usePBR,u=o.meta.isEsriSymbolResource?{usePBR:l,isSchematic:!1,treeRendering:r,mrrFactors:[...ir]}:{usePBR:l,isSchematic:!1,treeRendering:!1,mrrFactors:[...ra]},s={...e.materialParameters,treeRendering:r},{engineResources:d,referenceBoundingBox:f}=Sa(o,u,s,e.skipHighLods&&a.specifiedLodIndex==null?{skipHighLods:!0}:{skipHighLods:!1,singleLodIndex:a.specifiedLodIndex});return{lods:d,referenceBoundingBox:f,isEsriSymbolResource:o.meta.isEsriSymbolResource,isWosr:!1}}function Ca(t){const e=t.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:e[4]!=null?Number(e[4]):null}:t.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:t,specifiedLodIndex:null}:{fileType:"unknown",url:t,specifiedLodIndex:null}}function Sa(t,e,a,o){const n=t.model,r=new Array,l=new Map,u=new Map,s=n.lods.length,d=Gt();return n.lods.forEach((f,h)=>{const x=o.skipHighLods===!0&&(s>1&&h===0||s>3&&h===1)||o.skipHighLods===!1&&o.singleLodIndex!=null&&h!==o.singleLodIndex;if(x&&h!==0)return;const T=new tr(f.name,f.lodThreshold,[0,0,0]);f.parts.forEach(S=>{const b=x?new $e({}):Kr(n,S,T,e,a,l,u),{geometry:w,vertexCount:C}=Qr(S,b??new $e({})),_=w.boundingInfo;_!=null&&h===0&&(Se(d,_.bbMin),Se(d,_.bbMax)),b!=null&&(T.stageResources.geometries.push(w),T.numberOfVertices+=C)}),x||r.push(T)}),{engineResources:r,referenceBoundingBox:d}}function Kr(t,e,a,o,n,r,l){var T,S;const u=e.material+(e.attributes.normal?"_normal":"")+(e.attributes.color?"_color":"")+(e.attributes.texCoord0?"_texCoord0":"")+(e.attributes.tangent?"_tangent":""),s=t.materials.get(e.material),d=e.attributes.texCoord0!=null,f=e.attributes.normal!=null;if(s==null)return null;const h=ei(s.alphaMode);if(!r.has(u)){if(d){const L=(E,xe=!1)=>{if(E!=null&&!l.has(E)){const ce=t.textures.get(E);if(ce!=null){const B=ce.data;l.set(E,new Zt(Ie(B)?B.data:B,{...ce.parameters,preMultiplyAlpha:!Ie(B)&&xe,encoding:Ie(B)&&B.encoding!=null?B.encoding:void 0}))}}};L(s.textureColor,h!==y.Opaque),L(s.textureNormal),L(s.textureOcclusion),L(s.textureEmissive),L(s.textureMetallicRoughness)}const b=s.color[0]**(1/Z),w=s.color[1]**(1/Z),C=s.color[2]**(1/Z),_=s.emissiveFactor[0]**(1/Z),P=s.emissiveFactor[1]**(1/Z),Y=s.emissiveFactor[2]**(1/Z),J=s.textureColor!=null&&d?l.get(s.textureColor):null,le=or({normalTexture:s.textureNormal,metallicRoughnessTexture:s.textureMetallicRoughness,metallicFactor:s.metallicFactor,roughnessFactor:s.roughnessFactor,emissiveTexture:s.textureEmissive,emissiveFactor:s.emissiveFactor,occlusionTexture:s.textureOcclusion}),ge=((T=s.normalTextureTransform)==null?void 0:T.scale)!=null?(S=s.normalTextureTransform)==null?void 0:S.scale:jt;r.set(u,new $e({...o,transparent:h===y.Blend,customDepthTest:fe.Lequal,textureAlphaMode:h,textureAlphaCutoff:s.alphaCutoff,diffuse:[b,w,C],ambient:[b,w,C],opacity:s.opacity,doubleSided:s.doubleSided,doubleSidedType:"winding-order",cullFace:s.doubleSided?W.None:W.Back,hasVertexColors:!!e.attributes.color,hasVertexTangents:!!e.attributes.tangent,normalType:f?$.Attribute:$.ScreenDerivative,castShadows:!0,receiveShadows:s.receiveShadows,receiveAmbientOcclusion:s.receiveAmbientOcclustion,textureId:J!=null?J.id:void 0,colorMixMode:s.colorMixMode,normalTextureId:s.textureNormal!=null&&d?l.get(s.textureNormal).id:void 0,textureAlphaPremultiplied:J!=null&&!!J.parameters.preMultiplyAlpha,occlusionTextureId:s.textureOcclusion!=null&&d?l.get(s.textureOcclusion).id:void 0,emissiveTextureId:s.textureEmissive!=null&&d?l.get(s.textureEmissive).id:void 0,metallicRoughnessTextureId:s.textureMetallicRoughness!=null&&d?l.get(s.textureMetallicRoughness).id:void 0,emissiveFactor:[_,P,Y],mrrFactors:le?[...rr]:[s.metallicFactor,s.roughnessFactor,o.mrrFactors[2]],isSchematic:le,colorTextureTransformMatrix:he(s.colorTextureTransform),normalTextureTransformMatrix:he(s.normalTextureTransform),scale:[ge[0],ge[1]],occlusionTextureTransformMatrix:he(s.occlusionTextureTransform),emissiveTextureTransformMatrix:he(s.emissiveTextureTransform),metallicRoughnessTextureTransformMatrix:he(s.metallicRoughnessTextureTransform),...n}))}const x=r.get(u);if(a.stageResources.materials.push(x),d){const b=w=>{w!=null&&a.stageResources.textures.push(l.get(w))};b(s.textureColor),b(s.textureNormal),b(s.textureOcclusion),b(s.textureEmissive),b(s.textureMetallicRoughness)}return x}function Qr(t,e){const a=t.attributes.position.count,o=So(t.indices||a,t.primitiveType),n=ye(3*a),{typedBuffer:r,typedBufferStride:l}=t.attributes.position;To(n,r,t.transform,3,l);const u=[[M.POSITION,new K(n,o,3,!0)]];if(t.attributes.normal!=null){const d=ye(3*a),{typedBuffer:f,typedBufferStride:h}=t.attributes.normal;qa(H,t.transform),yo(d,f,H,3,h),ut(H)&&gt(d,d),u.push([M.NORMAL,new K(d,o,3,!0)])}if(t.attributes.tangent!=null){const d=ye(4*a),{typedBuffer:f,typedBufferStride:h}=t.attributes.tangent;Wa(H,t.transform),wo(d,f,H,4,h),ut(H)&&gt(d,d,4),u.push([M.TANGENT,new K(d,o,4,!0)])}if(t.attributes.texCoord0!=null){const d=ye(2*a),{typedBuffer:f,typedBufferStride:h}=t.attributes.texCoord0;Oo(d,f,2,h),u.push([M.UV0,new K(d,o,2,!0)])}const s=t.attributes.color;if(s!=null){const d=new Uint8Array(4*a);s.elementCount===4?s instanceof vo?bt(d,s,255):s instanceof Ht?_o(d,s):s instanceof go&&bt(d,s,1/256):(d.fill(255),s instanceof Kt?xt(d,s.typedBuffer,255,4,s.typedBufferStride):t.attributes.color instanceof xo?Eo(d,s.typedBuffer,4,t.attributes.color.typedBufferStride):t.attributes.color instanceof bo&&xt(d,s.typedBuffer,1/256,4,s.typedBufferStride)),u.push([M.COLOR,new K(d,o,4,!0)])}return{geometry:new Xt(e,u),vertexCount:a}}const H=Nt();function ei(t){switch(t){case"BLEND":return y.Blend;case"MASK":return y.Mask;case"OPAQUE":case null:case void 0:return y.Opaque}}function ti(t,e){for(let a=0;a<t.model.lods.length;++a){const o=t.model.lods[a];for(const n of o.parts){const r=n.attributes.normal;if(r==null)return;const l=n.attributes.position,u=l.count,s=z(),d=z(),f=z(),h=new Uint8Array(4*u),x=new Float64Array(3*u),T=Va(ka(),n.transform);let S=0,b=0;for(let w=0;w<u;w++){l.getVec(w,d),r.getVec(w,s),ht(d,d,n.transform),Me(f,d,e.center),mt(f,f,e.radius);const C=f[2],_=Rt(f),P=Math.min(.45+.55*_*_,1);mt(f,f,e.radius),T!==null&&ht(f,f,T),Pt(f,f),a+1!==t.model.lods.length&&t.model.lods.length>1&&Ua(f,f,s,C>-1?.2:Math.min(-4*C-3.8,1)),x[S]=f[0],x[S+1]=f[1],x[S+2]=f[2],S+=3,h[b]=255*P,h[b+1]=255*P,h[b+2]=255*P,h[b+3]=255,b+=4}n.attributes.normal=new Kt(x),n.attributes.color=new Ht(h)}}}const on=Object.freeze(Object.defineProperty({__proto__:null,fetch:Hr,gltfToEngineResources:Sa,parseUrl:Ca},Symbol.toStringTag,{value:"Module"})),ai=Object.freeze(Object.defineProperty({__proto__:null,build:da},Symbol.toStringTag,{value:"Module"})),oi=Object.freeze(Object.defineProperty({__proto__:null,build:ma,getRadius:Le},Symbol.toStringTag,{value:"Module"})),ri=Object.freeze(Object.defineProperty({__proto__:null,build:ba},Symbol.toStringTag,{value:"Module"})),ii=Object.freeze(Object.defineProperty({__proto__:null,build:ya},Symbol.toStringTag,{value:"Module"}));export{Vr as A,wr as B,X as C,on as D,cr as T,Hr as a,nr as b,it as c,sr as d,lr as e,ar as f,nt as g,st as h,A as i,$e as j,Tr as k,Hi as l,xa as m,Di as n,ur as o,pa as p,Ui as q,ra as r,he as s,rr as t,or as u,fa as v,dr as w,va as x,sa as y,Qi as z};
