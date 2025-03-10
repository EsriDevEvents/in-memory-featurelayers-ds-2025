import{e as me}from"./deduplicate-DQWVMiBh.js";import{H as F}from"./InterleavedLayout-B5L5JJLV.js";import{e as c}from"./VertexAttribute-BnAa5VW0.js";import{t as Z}from"./glUtil-C6KhMg1m.js";import{ad as w,bU as ee,fE as Ie,dx as k,aN as oe,aI as K,dy as Oe,fF as Se,aJ as ue,ca as re,aL as de,aR as pe,dz as Ae,o8 as Ee}from"./index-Dv-JqQDv.js";import{s as J}from"./Normals-bmFJkGdK.js";const we=F().vec3f(c.POSITION).u16(c.COMPONENTINDEX).freeze(),Te=F().vec2u8(c.SIDENESS).freeze(),Ke=Z(Te),j=F().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze(),G=F().vec3f(c.POSITION0).vec3f(c.POSITION1).vec2i16(c.NORMALCOMPRESSED).vec2i16(c.NORMAL2COMPRESSED).u16(c.COMPONENTINDEX).u8(c.VARIANTOFFSET,{glNormalized:!0}).u8(c.VARIANTSTROKE).u8(c.VARIANTEXTENSION,{glNormalized:!0}).freeze(),Je=new Map([[c.POSITION0,0],[c.POSITION1,1],[c.COMPONENTINDEX,2],[c.VARIANTOFFSET,3],[c.VARIANTSTROKE,4],[c.VARIANTEXTENSION,5],[c.NORMALCOMPRESSED,6],[c.NORMAL2COMPRESSED,7],[c.SIDENESS,8]]);class $e{constructor(){this.position0=w(),this.position1=w(),this.faceNormal0=w(),this.faceNormal1=w(),this.componentIndex=0,this.cosAngle=0}}const W=-1;function ve(e,n,s){const r=e.vertices.position,i=e.vertices.componentIndex,u=m.position0,g=m.position1,h=m.faceNormal0,S=m.faceNormal1,{edges:a,normals:d}=Pe(e),I=a.length/4,A=n.allocate(I);let P=0;const z=I,T=s==null?void 0:s.allocate(z);let b=0,t=0,o=0;B.length=0;for(let p=0;p<I;++p){const v=4*p;r.getVec(a.data[v],u),r.getVec(a.data[v+1],g);const x=B.pushNew();x.index=4*p,x.length=Ie(u,g)}B.sort((p,v)=>v.length-p.length);const f=new Array,l=new Array;B.forAll(({length:p,index:v})=>{const x=a.data[v],Ne=a.data[v+1],te=a.data[v+2],ne=a.data[v+3],se=ne===W;if(r.getVec(x,u),r.getVec(Ne,g),se){const E=3*te;k(h,d.data[E],d.data[E+1],d.data[E+2]),oe(S,h),m.componentIndex=i.get(x),m.cosAngle=K(h,S)}else{let E=3*te;if(k(h,d.data[E],d.data[E+1],d.data[E+2]),E=3*ne,k(S,d.data[E],d.data[E+1],d.data[E+2]),m.componentIndex=i.get(x),m.cosAngle=K(h,S),Re(m,De))return;m.cosAngle<-.9999&&oe(S,h)}t+=p,o++,se||ye(m,Ce)?(n.write(A,P++,m),f.push(p)):Me(m,ge)&&(T&&s&&s.write(T,b++,m),l.push(p))});const O=new Float32Array(f.reverse()),$=new Float32Array(l.reverse()),y=T&&s?{instancesData:T.slice(0,b),lodInfo:{lengths:$}}:void 0;return{regular:{instancesData:A.slice(0,P),lodInfo:{lengths:O}},silhouette:y,averageEdgeLength:t/o}}function ye(e,n){return e.cosAngle<n}function Re(e,n){return e.cosAngle>n}function Me(e,n){const s=Oe(e.cosAngle);return Se(ae,e.position1,e.position0),s*(K(ue(xe,e.faceNormal0,e.faceNormal1),ae)>0?-1:1)>n}function Pe(e){const n=e.faces.length/3,s=e.faces,r=e.neighbors,i=e.vertices.position;N.length=q.length=0;for(let u=0;u<n;u++){const g=3*u,h=r[g],S=r[g+1],a=r[g+2],d=s[g],I=s[g+1],A=s[g+2];i.getVec(d,V),i.getVec(I,_),i.getVec(A,U),re(_,_,V),re(U,U,V),ue(V,_,U),de(V,V),q.pushArray(V),(h===W||d<I)&&(N.push(d),N.push(I),N.push(u),N.push(h)),(S===W||I<A)&&(N.push(I),N.push(A),N.push(u),N.push(S)),(a===W||A<d)&&(N.push(A),N.push(d),N.push(u),N.push(a))}return{edges:N,normals:q}}class Ve{constructor(){this.index=0,this.length=0}}const B=new ee({allocator:e=>e||new Ve,deallocator:null}),N=new ee({deallocator:null}),q=new ee({deallocator:null}),m=new $e,xe=w(),ae=w(),V=w(),_=w(),U=w(),ge=pe(4),De=Math.cos(ge),Le=pe(35),Ce=Math.cos(Le);function ie(e,n,s){const r=n/3,i=new Uint32Array(s+1),u=new Uint32Array(s+1),g=(t,o)=>{t<o?i[t+1]++:u[o+1]++};for(let t=0;t<r;t++){const o=e[3*t],f=e[3*t+1],l=e[3*t+2];g(o,f),g(f,l),g(l,o)}let h=0,S=0;for(let t=0;t<s;t++){const o=i[t+1],f=u[t+1];i[t+1]=h,u[t+1]=S,h+=o,S+=f}const a=new Uint32Array(6*r),d=i[s],I=(t,o,f)=>{if(t<o){const l=i[t+1]++;a[2*l]=o,a[2*l+1]=f}else{const l=u[o+1]++;a[2*d+2*l]=t,a[2*d+2*l+1]=f}};for(let t=0;t<r;t++){const o=e[3*t],f=e[3*t+1],l=e[3*t+2];I(o,f,t),I(f,l,t),I(l,o,t)}const A=(t,o)=>{const f=2*t,l=o-t;for(let O=1;O<l;O++){const $=a[f+2*O],y=a[f+2*O+1];let p=O-1;for(;p>=0&&a[f+2*p]>$;p--)a[f+2*p+2]=a[f+2*p],a[f+2*p+3]=a[f+2*p+1];a[f+2*p+2]=$,a[f+2*p+3]=y}};for(let t=0;t<s;t++)A(i[t],i[t+1]),A(d+u[t],d+u[t+1]);const P=new Int32Array(3*r),z=(t,o)=>t===e[3*o]?0:t===e[3*o+1]?1:t===e[3*o+2]?2:-1,T=(t,o)=>{const f=z(t,o);P[3*o+f]=-1},b=(t,o,f,l)=>{const O=z(t,o);P[3*o+O]=l;const $=z(f,l);P[3*l+$]=o};for(let t=0;t<s;t++){let o=i[t];const f=i[t+1];let l=u[t];const O=u[t+1];for(;o<f&&l<O;){const $=a[2*o],y=a[2*d+2*l];$===y?(b(t,a[2*o+1],y,a[2*d+2*l+1]),o++,l++):$<y?(T(t,a[2*o+1]),o++):(T(y,a[2*d+2*l+1]),l++)}for(;o<f;)T(t,a[2*o+1]),o++;for(;l<O;)T(a[2*d+2*l],a[2*d+2*l+1]),l++}return P}const H=.7;let he=class{updateSettings(n){this.settings=n,this._edgeHashFunction=n.reducedPrecision?ze:Fe}write(n,s,r){X.seed=this._edgeHashFunction(r);const i=X.getIntRange(0,255),u=X.getIntRange(0,this.settings.variants-1),g=X.getFloat(),h=255*(.5*be(-(1-Math.min(g/H,1))+Math.max(0,g-H)/(1-H),1.2)+.5);n.position0.setVec(s,r.position0),n.position1.setVec(s,r.position1),n.componentIndex.set(s,r.componentIndex),n.variantOffset.set(s,i),n.variantStroke.set(s,u),n.variantExtension.set(s,h)}};const R=new Float32Array(6),M=new Uint32Array(R.buffer),C=new Uint32Array(1);function Fe(e){return R[0]=e.position0[0],R[1]=e.position0[1],R[2]=e.position0[2],R[3]=e.position1[0],R[4]=e.position1[1],R[5]=e.position1[2],C[0]=31*(31*(31*(31*(31*(166811+M[0])+M[1])+M[2])+M[3])+M[4])+M[5],C[0]}function ze(e){const n=R;n[0]=D(e.position0[0]),n[1]=D(e.position0[1]),n[2]=D(e.position0[2]),n[3]=D(e.position1[0]),n[4]=D(e.position1[1]),n[5]=D(e.position1[2]),C[0]=5381;for(let s=0;s<M.length;s++)C[0]=31*C[0]+M[s];return C[0]}const ce=1e4;function D(e){return Math.round(e*ce)/ce}function be(e,n){return Math.abs(e)**n*Math.sign(e)}class Q{constructor(){this._commonWriter=new he}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return j.createBuffer(n)}write(n,s,r){this._commonWriter.write(n,s,r),Ae(L,r.faceNormal0,r.faceNormal1),de(L,L);const{typedBuffer:i,typedBufferStride:u}=n.normalCompressed;J(i,s,L[0],L[1],L[2],u)}}Q.Layout=j,Q.glLayout=Z(j,1);class Y{constructor(){this._commonWriter=new he}updateSettings(n){this._commonWriter.updateSettings(n)}allocate(n){return G.createBuffer(n)}write(n,s,r){this._commonWriter.write(n,s,r);{const{typedBuffer:i,typedBufferStride:u}=n.normalCompressed;J(i,s,r.faceNormal0[0],r.faceNormal0[1],r.faceNormal0[2],u)}{const{typedBuffer:i,typedBufferStride:u}=n.normal2Compressed;J(i,s,r.faceNormal1[0],r.faceNormal1[1],r.faceNormal1[2],u)}}}Y.Layout=G,Y.glLayout=Z(G,1);const L=w(),X=new Ee;function Ge(e){const n=Be(e.data,e.skipDeduplicate,e.indices,e.indicesLength);return le.updateSettings(e.writerSettings),fe.updateSettings(e.writerSettings),ve(n,le,fe)}function Be(e,n,s,r){if(n){const g=ie(s,r,e.count);return new _e(s,r,g,e)}const i=me(e.buffer,e.stride/4,{originalIndices:s,originalIndicesLength:r}),u=ie(i.indices,r,i.uniqueCount);return{faces:i.indices,facesLength:i.indices.length,neighbors:u,vertices:we.createView(i.buffer)}}class _e{constructor(n,s,r,i){this.faces=n,this.facesLength=s,this.neighbors=r,this.vertices=i}}const le=new Q,fe=new Y,Qe=F().vec3f(c.POSITION0).vec3f(c.POSITION1),Ye=F().vec3f(c.POSITION0).vec3f(c.POSITION1).u16(c.COMPONENTINDEX);export{we as E,Te as I,Y as N,Ke as S,Qe as d,Ge as f,Ye as m,ve as p,Je as r,Be as u,Q as w};
