var e=Object.defineProperty,o=Object.getOwnPropertySymbols,t=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,l=(o,t,s)=>t in o?e(o,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):o[t]=s;import{C as a}from"./index.d6d78035.js";import{I as n}from"./function-call.db9d184e.js";import{a as i}from"./use-translate.ed5e29f0.js";import{T as r}from"./function-call.2531544a.js";import{B as c,G as p,r as m,a as u,f as d,w as f,D as j,F as C,o as b,i as v,t as g}from"./vendor.ba7e37c4.js";import"./with-install.9958dc40.js";import"./use-route.59eae6fc.js";import"./index.667f321a.js";import"./unit.2a41fb1b.js";import"./mount-component.858fa0c4.js";import"./use-expose.ecdf2fa3.js";import"./interceptor.29d0b3cc.js";import"./index.4b177ea8.js";import"./style.c6c38aef.js";import"./event.7d40caae.js";import"./number.b01aa591.js";import"./use-touch.3bbb1d83.js";import"./on-popup-reopen.fc1de525.js";import"./utils.83cd68fa.js";import"./index.6ba73617.js";import"./useChildren.6233e7a6.js";import"./useParent.7ddf7229.js";import"./index.03bd3dc3.js";import"./index.a4c0d7b1.js";import"./use-lazy-render.924a5154.js";import"./index.30afc43b.js";import"./index.06390f58.js";import"./index.e2ba8582.js";var h=c({setup(e){const c=n.Component,h=i({"zh-CN":{closed:"关闭",showClose:"展示关闭按钮",showImages:"预览图片",beforeClose:"异步关闭",closeEvent:"监听关闭事件",customConfig:"传入配置项",startPosition:"指定初始位置",componentCall:"组件调用",index:e=>`第${e+1}页`},"en-US":{closed:"closed",showClose:"Show Close Icon",showImages:"Show Images",beforeClose:"Before Close",closeEvent:"Close Event",customConfig:"Custom Config",startPosition:"Set Start Position",componentCall:"Component Call",index:e=>`Page: ${e}`}}),w=["https://img.yzcdn.cn/vant/apple-1.jpg","https://img.yzcdn.cn/vant/apple-2.jpg","https://img.yzcdn.cn/vant/apple-3.jpg","https://img.yzcdn.cn/vant/apple-4.jpg"],x=p(!1),k=p(0),y=()=>r(h("closed")),P=()=>new Promise((e=>{setTimeout((()=>{e(!0)}),1e3)})),I=()=>{x.value=!0},z=e=>{k.value=e},O=(e={})=>{const a=n(((e,a)=>{for(var n in a||(a={}))t.call(a,n)&&l(e,n,a[n]);if(o)for(var n of o(a))s.call(a,n)&&l(e,n,a[n]);return e})({images:w},e));e.beforeClose&&setTimeout((()=>{null==a||a.close()}),2e3)};return(e,o)=>{const t=m("demo-block");return b(),u(C,null,[d(t,{card:"",title:j(h)("basicUsage")},{default:f((()=>[d(j(a),{"is-link":"",value:j(h)("showImages"),onClick:o[0]||(o[0]=e=>O())},null,8,["value"])])),_:1},8,["title"]),d(t,{card:"",title:j(h)("customConfig")},{default:f((()=>[d(j(a),{"is-link":"",value:j(h)("startPosition"),onClick:o[1]||(o[1]=e=>O({startPosition:1}))},null,8,["value"]),d(j(a),{"is-link":"",value:j(h)("showClose"),onClick:o[2]||(o[2]=e=>O({closeable:!0}))},null,8,["value"]),d(j(a),{"is-link":"",value:j(h)("closeEvent"),onClick:o[3]||(o[3]=e=>O({onClose:y}))},null,8,["value"])])),_:1},8,["title"]),d(t,{card:"",title:j(h)("beforeClose")},{default:f((()=>[d(j(a),{"is-link":"",value:j(h)("beforeClose"),onClick:o[4]||(o[4]=e=>O({beforeClose:P}))},null,8,["value"])])),_:1},8,["title"]),d(t,{card:"",title:j(h)("componentCall")},{default:f((()=>[d(j(a),{"is-link":"",value:j(h)("componentCall"),onClick:I},null,8,["value"]),d(j(c),{show:x.value,"onUpdate:show":o[5]||(o[5]=e=>x.value=e),images:w,onChange:z},{index:f((()=>[v(g(j(h)("index",k.value)),1)])),_:1},8,["show"])])),_:1},8,["title"])],64)}}});export{h as default};
