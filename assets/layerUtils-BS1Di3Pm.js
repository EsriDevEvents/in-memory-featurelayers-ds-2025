function u(e,n,l){if(!n||!(e!=null&&e.map))return;const{map:a}=e,s=a.layers.find(r=>r===n);s||a.add(n,l),s&&l!=null&&a.layers.reorder(s,l)}function t(e,n){const l=(n==null?void 0:n.type)==="subtype-sublayer"?n.parent:n;return e.allLayerViews.find(a=>{const s=a.layer;return s===l||"sublayers"in s&&s.sublayers!=null&&s.sublayers.includes(l)})}export{u as e,t as r};
