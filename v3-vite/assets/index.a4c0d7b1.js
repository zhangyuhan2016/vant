import{i as r}from"./utils.83cd68fa.js";import{G as e,I as a}from"./vendor.ba7e37c4.js";var o=/scroll|auto/i,t=r?window:void 0;function n(r){return"HTML"!==r.tagName&&"BODY"!==r.tagName&&1===r.nodeType}function u(r,e=t){for(var a=r;a&&a!==e&&n(a);){var{overflowY:u}=window.getComputedStyle(a);if(o.test(u))return a;a=a.parentNode}return e}function i(r,o=t){var n=e();return a((()=>{r.value&&(n.value=u(r.value,o))})),n}export{u as g,i as u};
