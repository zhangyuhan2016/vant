var n="undefined"!=typeof window,a=n?window:global,e=Date.now();function t(n){var a=Date.now(),t=Math.max(0,16-(a-e)),o=setTimeout(n,t);return e=a+t,o}function o(n){return(a.requestAnimationFrame||t).call(a,n)}function i(n){(a.cancelAnimationFrame||a.clearTimeout).call(a,n)}function r(n){o((()=>o(n)))}export{i as c,r as d,n as i,o as r};
