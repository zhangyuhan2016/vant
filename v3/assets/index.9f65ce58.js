import{S as o}from"./index.4f8d4de6.js";import{a as C}from"./use-translate.aef3085b.js";import{T as g}from"./function-call.aaae010c.js";import{z as F,C as i,r as U,o as _,a as y,e as l,w as n,A as u,d as B,t as A,F as S}from"./vue-libs.f710b8ed.js";import"./with-install.796b4cad.js";import"./use-touch.8e5a0907.js";import"./mount-component.e03afee0.js";import"./use-expose.b82056d2.js";import"./index.c480cbe8.js";import"./index.590c19a0.js";import"./constant.80c6de18.js";import"./interceptor.3dc21389.js";import"./use-lazy-render.c4d421a8.js";import"./on-popup-reopen.4b166a39.js";import"./index.bd451b43.js";import"./index.88eab4b6.js";const E={class:"custom-button"},D={style:{height:"150px",paddingLeft:"30px"}},W=F({setup(k){const a=C({"zh-CN":{text:"\u5F53\u524D\u503C\uFF1A",title1:"\u57FA\u7840\u7528\u6CD5",title2:"\u53CC\u6ED1\u5757",title3:"\u6307\u5B9A\u9009\u62E9\u8303\u56F4",title4:"\u7981\u7528",title5:"\u6307\u5B9A\u6B65\u957F",vertical:"\u5782\u76F4\u65B9\u5411",customStyle:"\u81EA\u5B9A\u4E49\u6837\u5F0F",customButton:"\u81EA\u5B9A\u4E49\u6309\u94AE"},"en-US":{text:"Current value: ",title1:"Basic Usage",title2:"Dual thumb mode",title3:"Range",title4:"Disabled",title5:"Step size",vertical:"Vertical",customStyle:"Custom Style",customButton:"Custom Button"}}),r=i(50),p=i([20,60]),v=i(0),V=i(50),c=i(50),f=i(50),m=i(50),b=i(50),x=i([20,60]),d=j=>g(a("text")+j);return(j,e)=>{const s=U("demo-block");return _(),y(S,null,[l(s,{title:u(a)("title1")},{default:n(()=>[l(u(o),{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t),onChange:d},null,8,["modelValue"])]),_:1},8,["title"]),l(s,{title:u(a)("title2")},{default:n(()=>[l(u(o),{range:"",modelValue:p.value,"onUpdate:modelValue":e[1]||(e[1]=t=>p.value=t),onChange:d},null,8,["modelValue"])]),_:1},8,["title"]),l(s,{title:u(a)("title3")},{default:n(()=>[l(u(o),{modelValue:v.value,"onUpdate:modelValue":e[2]||(e[2]=t=>v.value=t),min:-50,max:50,onChange:d},null,8,["modelValue"])]),_:1},8,["title"]),l(s,{title:u(a)("title4")},{default:n(()=>[l(u(o),{modelValue:V.value,"onUpdate:modelValue":e[3]||(e[3]=t=>V.value=t),disabled:""},null,8,["modelValue"])]),_:1},8,["title"]),l(s,{title:u(a)("title5")},{default:n(()=>[l(u(o),{modelValue:c.value,"onUpdate:modelValue":e[4]||(e[4]=t=>c.value=t),step:10,onChange:d},null,8,["modelValue"])]),_:1},8,["title"]),l(s,{title:u(a)("customStyle")},{default:n(()=>[l(u(o),{modelValue:f.value,"onUpdate:modelValue":e[5]||(e[5]=t=>f.value=t),"bar-height":"4px","active-color":"#ee0a24",onChange:d},null,8,["modelValue"])]),_:1},8,["title"]),l(s,{title:u(a)("customButton")},{default:n(()=>[l(u(o),{modelValue:m.value,"onUpdate:modelValue":e[6]||(e[6]=t=>m.value=t),"active-color":"#ee0a24"},{button:n(()=>[B("div",E,A(m.value),1)]),_:1},8,["modelValue"])]),_:1},8,["title"]),l(s,{title:u(a)("vertical")},{default:n(()=>[B("div",D,[l(u(o),{modelValue:b.value,"onUpdate:modelValue":e[7]||(e[7]=t=>b.value=t),vertical:"",onChange:d},null,8,["modelValue"]),l(u(o),{modelValue:x.value,"onUpdate:modelValue":e[8]||(e[8]=t=>x.value=t),range:"",vertical:"",style:{"margin-left":"100px"},onChange:d},null,8,["modelValue"])])]),_:1},8,["title"])],64)}}});export{W as default};