import{g3 as b,av as Z,J as _,at as tt,g4 as et,s as P,c9 as B,bL as nt,bK as st,g5 as at}from"./index-Dv-JqQDv.js";function D(t){if(!t)return null;if(tt(t)&&t.wkid){const e=et[t.wkid];if(e)return e}const n=t.wkt2||t.wkt;if(n){const e=it(n);if(e)return e}return null}function it(t){const n=at.exec(t);if(!n||n.length!==2)return null;const e=n[1].split(",");if(!e||e.length<3)return null;const l=parseFloat(e[1]),s=parseFloat(e[2]);return isNaN(l)||isNaN(s)?null:{a:l,f:s===0?0:1/s}}function E(t){const n=D(t);if(ot(n))return n;const e=n.a*(1-n.f);return Object.assign(n,{b:e,eSq:1-(e/n.a)**2,radius:(2*n.a+e)/3,densificationRatio:1e4/((2*n.a+e)/3)})}function ot(t){return t!=null&&"b"in t&&"eSq"in t&&"radius"in t}function C(t,n,e){const{a:l,eSq:s}=E(e),a=Math.sqrt(s),r=Math.sin(n[1]*b),i=l*n[0]*b;let h;return s>0?h=l*((1-s)*(r/(1-s*(r*r))-1/(2*a)*Math.log((1-a*r)/(1+a*r))))*.5:h=l*r,t[0]=i,t[1]=h,t}function O(t){return D(t)!==null}function ct(t,n="square-meters"){if(t.some(r=>!O(r.spatialReference)))throw new P("geodesic-areas:invalid-spatial-reference","the input geometries spatial reference is not supported");const e=[];for(let r=0;r<t.length;r++){const i=t[r],h=i.spatialReference,{radius:c,densificationRatio:u}=E(h),o=c*u;e.push(rt(i,o))}const l=[],s=[0,0],a=[0,0];for(let r=0;r<e.length;r++){const{rings:i,spatialReference:h}=e[r];let c=0;for(let u=0;u<i.length;u++){const o=i[u];C(s,o[0],h),C(a,o[o.length-1],h);let M=a[0]*s[1]-s[0]*a[1];for(let d=0;d<o.length-1;d++)C(s,o[d+1],h),C(a,o[d],h),M+=a[0]*s[1]-s[0]*a[1];c+=M}c=B(c,"square-meters",n),l.push(c/-2)}return l}function lt(t,n="meters"){if(!t)throw new P("geodesic-lengths:invalid-geometries","the input geometries type is not supported");if(t.some(l=>!O(l.spatialReference)))throw new P("geodesic-lengths:invalid-spatial-reference","the input geometries spatial reference is not supported");const e=[];for(let l=0;l<t.length;l++){const s=t[l],{spatialReference:a}=s,r=s.type==="polyline"?s.paths:s.rings;let i=0;for(let h=0;h<r.length;h++){const c=r[h];let u=0;for(let o=1;o<c.length;o++){const M=c[o-1][0],d=c[o][0],y=c[o-1][1],g=c[o][1];if(y!==g||M!==d){const p=new H;Q(p,[M,y],[d,g],a),u+=p.distance}}i+=u}i=B(i,"meters",n),e.push(i)}return e}function rt(t,n){if(t.type!=="polyline"&&t.type!=="polygon")throw new P("geodesic-densify:invalid-geometry","the input geometry is neither polyline nor polygon");const{spatialReference:e}=t;if(!O(e))throw new P("geodesic-densify:invalid-spatial-reference","the input geometry spatial reference is not supported");const l=t.type==="polyline"?t.paths:t.rings,s=[],a=[0,0],r=new H;for(const i of l){const h=[];s.push(h),h.push([i[0][0],i[0][1]]);let c,u,o=i[0][0],M=i[0][1];for(let d=0;d<i.length-1;d++){if(c=i[d+1][0],u=i[d+1][1],o===c&&M===u)continue;const y=[o,M];Q(r,[o,M],[c,u],e);const{azimuth:g,distance:p}=r,v=p/n;if(v>1){for(let m=1;m<=v-1;m++)L(a,y,g,m*n,e),h.push(a.slice(0));L(a,y,g,(p+Math.floor(v-1)*n)/2,e),h.push(a.slice(0))}L(a,y,g,p,e),h.push(a.slice(0)),o=a[0],M=a[1]}}return t.type==="polyline"?new nt({paths:s,spatialReference:e}):new st({rings:s,spatialReference:e})}class H{constructor(n=0,e=void 0,l=void 0){this.distance=n,this.azimuth=e,this.reverseAzimuth=l}}function L(t,n,e,l,s){const a=n[0],r=n[1],i=a*b,h=r*b,c=(e??0)*b,{a:u,b:o,f:M}=E(s),d=Math.sin(c),y=Math.cos(c),g=(1-M)*Math.tan(h),p=1/Math.sqrt(1+g*g),v=g*p,m=Math.atan2(g,y),F=p*d,j=F*F,z=1-j,f=z*(u*u-o*o)/(o*o),k=1+f/16384*(4096+f*(f*(320-175*f)-768)),S=f/1024*(256+f*(f*(74-47*f)-128));let R,q,w,x,N=l/(o*k),$=2*Math.PI;for(;Math.abs(N-$)>1e-12;)w=Math.cos(2*m+N),R=Math.sin(N),q=Math.cos(N),x=S*R*(w+S/4*(q*(2*w*w-1)-S/6*w*(4*R*R-3)*(4*w*w-3))),$=N,N=l/(o*k)+x;const A=v*R-p*q*y,G=Math.atan2(v*q+p*R*y,(1-M)*Math.sqrt(j+A*A)),U=Math.atan2(R*d,p*q-v*R*y),I=M/16*z*(4+M*(4-3*z)),J=G/b,K=(i+(U-(1-I)*M*F*(N+I*R*(w+I*q*(2*w*w-1)))))/b;return t[0]=K,t[1]=J,t}function Q(t,n,e,l){const s=n[0]*b,a=n[1]*b,r=e[0]*b,i=e[1]*b,{a:h,b:c,f:u,radius:o}=E(l),M=r-s,d=Math.atan((1-u)*Math.tan(a)),y=Math.atan((1-u)*Math.tan(i)),g=Math.sin(d),p=Math.cos(d),v=Math.sin(y),m=Math.cos(y);let F,j,z,f,k,S,R,q,w,x,N=1e3,$=M;do{if(R=Math.sin($),q=Math.cos($),z=Math.sqrt(m*R*(m*R)+(p*v-g*m*q)*(p*v-g*m*q)),z===0)return t.distance=0,t.azimuth=void 0,t.reverseAzimuth=void 0,t;k=g*v+p*m*q,S=Math.atan2(z,k),w=p*m*R/z,j=1-w*w,f=k-2*g*v/j,isNaN(f)&&(f=0),x=u/16*j*(4+u*(4-3*j)),F=$,$=M+(1-x)*u*w*(S+x*z*(f+x*k*(2*f*f-1)))}while(Math.abs($-F)>1e-12&&--N>0);if(N===0){const K=o,T=Math.acos(Math.sin(a)*Math.sin(i)+Math.cos(a)*Math.cos(i)*Math.cos(r-s))*K,W=r-s,V=Math.sin(W)*Math.cos(i),X=Math.cos(a)*Math.sin(i)-Math.sin(a)*Math.cos(i)*Math.cos(W),Y=Math.atan2(V,X);return t.azimuth=Y/b,t.distance=T,t.reverseAzimuth=void 0,t}const A=j*(h*h-c*c)/(c*c),G=A/1024*(256+A*(A*(74-47*A)-128)),U=c*(1+A/16384*(4096+A*(A*(320-175*A)-768)))*(S-G*z*(f+G/4*(k*(2*f*f-1)-G/6*f*(4*z*z-3)*(4*f*f-3)))),I=Math.atan2(m*Math.sin($),p*v-g*m*Math.cos($)),J=Math.atan2(p*Math.sin($),p*v*Math.cos($)-g*m);return t.azimuth=I/b,t.distance=U,t.reverseAzimuth=J/b,t}function ut(t){return O(t)?t:Z(t)?_.WGS84:null}export{ut as A,rt as R,L as b,Q as j,lt as v,O as w,ct as y,H as z};
