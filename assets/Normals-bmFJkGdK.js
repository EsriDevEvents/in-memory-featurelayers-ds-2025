import{c3 as b,c4 as d,ad as g,aL as m}from"./index-Dv-JqQDv.js";function i(n,r,o,s,t,a=2){const e=1/(Math.abs(o)+Math.abs(s)+Math.abs(t)),c=o*e,f=s*e,l=t<=0?(c>=0?1:-1)*(1-Math.abs(f)):c,$=t<=0?(f>=0?1:-1)*(1-Math.abs(c)):f,h=r*a;n[h]=u(l),n[h+1]=u($)}function w(n){const r=n.length/3,o=new Int16Array(2*r);let s=0;for(let t=0;t<r;++t)i(o,t,n[s++],n[s++],n[s++]);return o}function y(n,r){const o=n.length/3,s=new Int16Array(2*o);let t=0;const a=g();for(let e=0;e<o;++e)a[0]=n[t++],a[1]=n[t++],a[2]=n[t++],d(a,a,r),i(s,e,a[0],a[1],a[2]);return s}function A(n,r,o,s=2){const t=o*s,a=M(r[t]),e=M(r[t+1]),c=1-Math.abs(a)-Math.abs(e);n[2]=c,c<0?(n[0]=(a>=0?1:-1)*(1-Math.abs(e)),n[1]=(e>=0?1:-1)*(1-Math.abs(a))):(n[0]=a,n[1]=e),m(n,n)}function u(n){return b(Math.round(32767*n),-32767,32767)}function M(n){return b(n/32767,-1,1)}export{y as c,w as e,A as f,i as s};
