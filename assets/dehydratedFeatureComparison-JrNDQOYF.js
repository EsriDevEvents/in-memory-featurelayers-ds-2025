import{a0 as e,gb as l}from"./index-Dv-JqQDv.js";function s(n,r){if(n===r)return!0;if(n==null||r==null||n.length!==r.length)return!1;for(let t=0;t<n.length;t++){const u=n[t],a=r[t];if(u.length!==a.length)return!1;for(let i=0;i<u.length;i++)if(u[i]!==a[i])return!1}return!0}function f(n,r){if(n===r)return!0;if(n==null||r==null||n.length!==r.length)return!1;for(let t=0;t<n.length;t++)if(!s(n[t],r[t]))return!1;return!0}function c(n,r){return n===r||n!=null&&r!=null&&e(n.spatialReference,r.spatialReference)&&n.x===r.x&&n.y===r.y&&n.z===r.z&&n.m===r.m}function R(n,r,t){return n===r||n!=null&&r!=null&&e(n.spatialReference,r.spatialReference)&&l(n.x,r.x,t)&&l(n.y,r.y,t)&&l(n.z??0,r.z??0,t)&&l(n.m??0,r.m??0,t)}function o(n,r){return n.hasZ===r.hasZ&&n.hasM===r.hasM&&!!e(n.spatialReference,r.spatialReference)&&f(n.paths,r.paths)}function h(n,r){return n.hasZ===r.hasZ&&n.hasM===r.hasM&&!!e(n.spatialReference,r.spatialReference)&&f(n.rings,r.rings)}function p(n,r){return n.hasZ===r.hasZ&&n.hasM===r.hasM&&!!e(n.spatialReference,r.spatialReference)&&s(n.points,r.points)}function m(n,r){return n.hasZ===r.hasZ&&n.hasM===r.hasM&&!!e(n.spatialReference,r.spatialReference)&&n.xmin===r.xmin&&n.ymin===r.ymin&&n.zmin===r.zmin&&n.xmax===r.xmax&&n.ymax===r.ymax&&n.zmax===r.zmax}function g(n,r){if(n===r)return!0;if(n==null||r==null||n.type!==r.type)return!1;switch(n.type){case"point":return c(n,r);case"extent":return m(n,r);case"polyline":return o(n,r);case"polygon":return h(n,r);case"multipoint":return p(n,r);case"mesh":return!1;default:return}}function y(n,r){if(n===r)return!0;if(!n||!r)return!1;const t=Object.keys(n),u=Object.keys(r);if(t.length!==u.length)return!1;for(const a of t)if(n[a]!==r[a])return!1;return!0}function z(n,r){return n===r||n!=null&&r!=null&&n.objectId===r.objectId&&!!g(n.geometry,r.geometry)&&!!y(n.attributes,r.attributes)}export{c as a,z as h,R as i};
