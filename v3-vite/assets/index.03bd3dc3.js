import{t as e,u as o,e as t,i as s}from"./use-translate.ed5e29f0.js";import{c as a,w as n}from"./with-install.9958dc40.js";import{P as r,Q as l,z as i,B as c,G as p,E as d,I as u,R as f,N as m,f as v,T as y,C as b,S as h,F as j,l as w,v as x,L as I}from"./vendor.ba7e37c4.js";import{c as S}from"./interceptor.29d0b3cc.js";import{u as g}from"./use-expose.ecdf2fa3.js";import{u as k}from"./use-touch.3bbb1d83.js";import{p as O}from"./event.7d40caae.js";import{o as C,s as P,u as z}from"./index.6ba73617.js";import{g as B}from"./index.a4c0d7b1.js";import{u as L}from"./use-lazy-render.924a5154.js";import{P as A}from"./on-popup-reopen.fc1de525.js";import{I as E}from"./index.667f321a.js";import{O as R}from"./index.30afc43b.js";const N={show:Boolean,zIndex:[Number,String],overlay:e,duration:[Number,String],teleport:[String,Object],lockScroll:e,lazyRender:e,beforeClose:Function,overlayStyle:Object,overlayClass:o,transitionAppear:Boolean,closeOnClickOverlay:e},D=Object.keys(N);let F=0;const[H,T]=a("popup");let $=2e3;const G=n(c({name:H,inheritAttrs:!1,props:t({},N,{round:Boolean,closeable:Boolean,transition:String,iconPrefix:String,closeOnPopstate:Boolean,safeAreaInsetBottom:Boolean,position:{type:String,default:"center"},closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"}}),emits:["open","close","click","opened","closed","update:show","click-overlay","click-close-icon"],setup(e,{emit:o,attrs:t,slots:a}){let n,c;const N=p(),D=p(),H=L((()=>e.show||!e.lazyRender)),G=d((()=>{const o={zIndex:N.value};if(s(e.duration)){o["center"===e.position?"animationDuration":"transitionDuration"]=`${e.duration}s`}return o})),Q=()=>{n||(void 0!==e.zIndex&&($=+e.zIndex),n=!0,N.value=++$,o("open"))},V=()=>{n&&S({interceptor:e.beforeClose,done(){n=!1,o("close"),o("update:show",!1)}})},Y=t=>{o("click-overlay",t),e.closeOnClickOverlay&&V()},q=()=>{if(e.overlay)return v(R,{show:e.show,class:e.overlayClass,zIndex:N.value,duration:e.duration,customStyle:e.overlayStyle,onClick:Y},{default:a["overlay-content"]})},J=e=>{o("click-close-icon",e),V()},K=()=>{if(e.closeable)return v(E,{role:"button",tabindex:0,name:e.closeIcon,class:T("close-icon",e.closeIconPosition),classPrefix:e.iconPrefix,onClick:J},null)},M=e=>o("click",e),U=()=>o("opened"),W=()=>o("closed"),X=H((()=>{var o;const{round:s,position:n,safeAreaInsetBottom:r}=e;return w(v("div",I({ref:D,style:G.value,class:[T({round:s,[n]:n}),{"van-safe-area-bottom":r}],onClick:M},t),[null==(o=a.default)?void 0:o.call(a),K()]),[[x,e.show]])})),Z=()=>{let o;const{position:t,transition:s,transitionAppear:a}=e;return v(y,{name:s||("center"===t?"van-fade":`van-popup-slide-${t}`),appear:a,onAfterEnter:U,onAfterLeave:W},"function"==typeof(n=o=X())||"[object Object]"===Object.prototype.toString.call(n)&&!b(n)?o:{default:()=>[o]});var n};return i((()=>e.show),(e=>{e?Q():(n=!1,o("close"))})),g({popupRef:D}),function(e,o){const t=k(),s=o=>{t.move(o);const s=t.deltaY.value>0?"10":"01",a=B(o.target,e.value),{scrollHeight:n,offsetHeight:r,scrollTop:l}=a;let i="11";0===l?i=r>=n?"00":"01":l+r>=n&&(i="10"),"11"===i||!t.isVertical()||parseInt(i,2)&parseInt(s,2)||O(o,!0)},a=()=>{document.addEventListener("touchstart",t.start),document.addEventListener("touchmove",s,!!P&&{passive:!1}),F||document.body.classList.add("van-overflow-hidden"),F++},n=()=>{F&&(document.removeEventListener("touchstart",t.start),document.removeEventListener("touchmove",s),F--,F||document.body.classList.remove("van-overflow-hidden"))},c=()=>o()&&n();C((()=>o()&&a())),r(c),l(c),i(o,(e=>{e?a():n()}))}(D,(()=>e.show&&e.lockScroll)),z("popstate",(()=>{e.closeOnPopstate&&(V(),c=!1)})),u((()=>{e.show&&Q()})),f((()=>{c&&(o("update:show",!0),c=!1)})),r((()=>{e.show&&(V(),c=!0)})),m(A,(()=>e.show)),()=>e.teleport?v(h,{to:e.teleport},{default:()=>[q(),Z()]}):v(j,null,[q(),Z()])}}));export{G as P,D as a,N as p};
