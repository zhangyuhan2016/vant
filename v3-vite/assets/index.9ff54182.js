import{S as e}from"./index.9a5da835.js";import{C as l}from"./index.d6d78035.js";import{a as t}from"./use-translate.ed5e29f0.js";import{D as o}from"./function-call.fa8a4a67.js";import{B as a,G as i,r as s,a as d,f as u,w as m,D as n,F as r,o as c}from"./vendor.ba7e37c4.js";import"./with-install.9958dc40.js";import"./unit.2a41fb1b.js";import"./index.e2ba8582.js";import"./index.5d553880.js";import"./use-route.59eae6fc.js";import"./index.667f321a.js";import"./mount-component.858fa0c4.js";import"./use-expose.ecdf2fa3.js";import"./constant.4d85ecb9.js";import"./interceptor.29d0b3cc.js";import"./index.03bd3dc3.js";import"./use-touch.3bbb1d83.js";import"./event.7d40caae.js";import"./index.6ba73617.js";import"./utils.83cd68fa.js";import"./index.a4c0d7b1.js";import"./use-lazy-render.924a5154.js";import"./on-popup-reopen.fc1de525.js";import"./index.30afc43b.js";import"./index.4d75283b.js";import"./index.e3db815a.js";import"./useChildren.6233e7a6.js";import"./useParent.7ddf7229.js";var p=a({setup(a){const p=t({"zh-CN":{title:"标题",confirm:"提醒",message:"是否切换开关？",withCell:"搭配单元格使用",customSize:"自定义大小",customColor:"自定义颜色",asyncControl:"异步控制"},"en-US":{title:"Title",confirm:"Confirm",message:"Are you sure to toggle switch?",withCell:"Inside a Cell",customSize:"Custom Size",customColor:"Custom Color",asyncControl:"Async Control"}}),f=i(!0),j=i(!0),v=i(!0),b=i(!0),V=i(!0),C=e=>{o.confirm({title:p("title"),message:p("message")}).then((()=>{b.value=e}))};return(t,o)=>{const a=s("demo-block");return c(),d(r,null,[u(a,{title:n(p)("basicUsage")},{default:m((()=>[u(n(e),{modelValue:f.value,"onUpdate:modelValue":o[0]||(o[0]=e=>f.value=e)},null,8,["modelValue"])])),_:1},8,["title"]),u(a,{title:n(p)("disabled")},{default:m((()=>[u(n(e),{modelValue:f.value,"onUpdate:modelValue":o[1]||(o[1]=e=>f.value=e),disabled:""},null,8,["modelValue"])])),_:1},8,["title"]),u(a,{title:n(p)("loadingStatus")},{default:m((()=>[u(n(e),{modelValue:f.value,"onUpdate:modelValue":o[2]||(o[2]=e=>f.value=e),loading:""},null,8,["modelValue"])])),_:1},8,["title"]),u(a,{title:n(p)("customSize")},{default:m((()=>[u(n(e),{modelValue:j.value,"onUpdate:modelValue":o[3]||(o[3]=e=>j.value=e),size:"24px"},null,8,["modelValue"])])),_:1},8,["title"]),u(a,{title:n(p)("customColor")},{default:m((()=>[u(n(e),{modelValue:v.value,"onUpdate:modelValue":o[4]||(o[4]=e=>v.value=e),"active-color":"#ee0a24","inactive-color":"#dcdee0"},null,8,["modelValue"])])),_:1},8,["title"]),u(a,{title:n(p)("asyncControl")},{default:m((()=>[u(n(e),{"model-value":b.value,"onUpdate:modelValue":C},null,8,["model-value"])])),_:1},8,["title"]),u(a,{title:n(p)("withCell")},{default:m((()=>[u(n(l),{center:"",title:n(p)("title")},{"right-icon":m((()=>[u(n(e),{modelValue:V.value,"onUpdate:modelValue":o[5]||(o[5]=e=>V.value=e),size:"24"},null,8,["modelValue"])])),_:1},8,["title"])])),_:1},8,["title"])],64)}}});export{p as default};
