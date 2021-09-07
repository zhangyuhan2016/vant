import{t,a as e}from"./use-translate.ed5e29f0.js";import{c as a,w as o}from"./with-install.9958dc40.js";import{a as r}from"./unit.2a41fb1b.js";import{B as i,E as l,f as n,G as s,r as c,a as p,w as u,D as d,F as v,o as g,e as m}from"./vendor.ba7e37c4.js";import{V as f}from"./index.4d75283b.js";import"./constant.4d85ecb9.js";import"./use-route.59eae6fc.js";import"./index.667f321a.js";import"./index.e2ba8582.js";const[x,h]=a("progress");const k=o(i({name:x,props:{color:String,inactive:Boolean,pivotText:String,textColor:String,showPivot:t,pivotColor:String,trackColor:String,strokeWidth:[Number,String],percentage:{type:[Number,String],default:0,validator:t=>t>=0&&t<=100}},setup(t){const e=l((()=>t.inactive?"#cacaca":t.color)),a=()=>{const{textColor:a,pivotText:o,pivotColor:r,percentage:i}=t,l=null!=o?o:`${i}%`;if(t.showPivot&&l){const t={color:a,left:+i+"%",transform:`translate(-${+i}%,-50%)`,background:r||e.value};return n("span",{style:t,class:h("pivot")},[l])}};return()=>{const{trackColor:o,percentage:i,strokeWidth:l}=t,s={background:o,height:r(l)},c={background:e.value,transform:`scaleX(${+i/100})`};return n("div",{class:h(),style:s},[n("span",{class:h("portion"),style:c},null),a()])}}})),b={style:{"margin-top":"15px"}};var C=i({setup(t){const a=e({"zh-CN":{title2:"置灰",title3:"样式定制",strokeWidth:"线条粗细",transition:"过渡效果"},"en-US":{title2:"Inactive",title3:"Custom Style",strokeWidth:"Stroke Width",transition:"Transition"}}),o=s(50),r=t=>Math.min(Math.max(t,0),100),i=()=>{o.value=r(o.value+20)},l=()=>{o.value=r(o.value-20)};return(t,e)=>{const r=c("demo-block");return g(),p(v,null,[n(r,{title:d(a)("basicUsage")},{default:u((()=>[n(d(k),{percentage:50})])),_:1},8,["title"]),n(r,{title:d(a)("strokeWidth")},{default:u((()=>[n(d(k),{percentage:50,"stroke-width":"8"})])),_:1},8,["title"]),n(r,{title:d(a)("title2")},{default:u((()=>[n(d(k),{inactive:"",percentage:50})])),_:1},8,["title"]),n(r,{title:d(a)("title3")},{default:u((()=>[n(d(k),{color:"#f2826a",percentage:25,"pivot-text":d(a)("orange")},null,8,["pivot-text"]),n(d(k),{color:"#ee0a24",percentage:50,"pivot-text":d(a)("red")},null,8,["pivot-text"]),n(d(k),{percentage:75,"pivot-text":d(a)("purple"),"pivot-color":"#7232dd",color:"linear-gradient(to right, #be99ff, #7232dd)"},null,8,["pivot-text"])])),_:1},8,["title"]),n(r,{title:d(a)("transition")},{default:u((()=>[n(d(k),{inactive:"",percentage:o.value},null,8,["percentage"]),m("div",b,[n(d(f),{text:d(a)("add"),type:"primary",size:"small",onClick:i},null,8,["text"]),n(d(f),{text:d(a)("decrease"),type:"danger",size:"small",onClick:l},null,8,["text"])])])),_:1},8,["title"])],64)}}});export{C as default};
