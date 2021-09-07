import{i as t,a as e}from"./use-translate.ed5e29f0.js";import{c as l,w as o}from"./with-install.9958dc40.js";import{B as a,G as s,H as r,z as n,l as i,v as c,f as u,r as d,a as f,w as m,D as p,F as b,o as x,i as h,t as w}from"./vendor.ba7e37c4.js";import{u as v}from"./use-expose.ecdf2fa3.js";import{o as S}from"./on-popup-reopen.fc1de525.js";import{I as g}from"./index.667f321a.js";import{o as j,u as y}from"./index.6ba73617.js";import{r as _,d as T}from"./utils.83cd68fa.js";import{u as k}from"./index.d9de3cd2.js";import{S as C,a as I}from"./index.4b177ea8.js";import"./unit.2a41fb1b.js";import"./style.c6c38aef.js";import"./event.7d40caae.js";import"./number.b01aa591.js";import"./use-touch.3bbb1d83.js";import"./useChildren.6233e7a6.js";import"./useParent.7ddf7229.js";const[B,N]=l("notice-bar");const z=o(a({name:B,props:{text:String,mode:String,color:String,leftIcon:String,wrapable:Boolean,background:String,scrollable:{type:Boolean,default:null},delay:{type:[Number,String],default:1},speed:{type:[Number,String],default:60}},emits:["close","replay"],setup(e,{emit:l,slots:o}){let a,d=0,f=0;const m=s(),p=s(),b=r({show:!0,offset:0,duration:0}),x=t=>{"closeable"===e.mode&&(b.show=!1,l("close",t))},h=()=>{if(o["right-icon"])return o["right-icon"]();const t="closeable"===e.mode?"cross":"link"===e.mode?"arrow":void 0;return t?u(g,{name:t,class:N("right-icon"),onClick:x},null):void 0},w=()=>{b.offset=d,b.duration=0,_((()=>{T((()=>{b.offset=-f,b.duration=(f+d)/+e.speed,l("replay")}))}))},C=()=>{const t=!1===e.scrollable&&!e.wrapable,l={transform:b.offset?`translateX(${b.offset}px)`:"",transitionDuration:`${b.duration}s`};return u("div",{ref:m,role:"marquee",class:N("wrap")},[u("div",{ref:p,style:l,class:[N("content"),{"van-ellipsis":t}],onTransitionend:w},[o.default?o.default():e.text])])},I=()=>{const{delay:l,speed:o,scrollable:s}=e,r=t(l)?1e3*+l:0;d=0,f=0,b.offset=0,b.duration=0,clearTimeout(a),a=setTimeout((()=>{if(!m.value||!p.value||!1===s)return;const t=k(m).width,e=k(p).width;(s||e>t)&&T((()=>{d=t,f=e,b.offset=-f,b.duration=f/+o}))}),r)};return S(I),j(I),y("pageshow",I),v({reset:I}),n((()=>[e.text,e.scrollable]),I),()=>{const{color:t,wrapable:l,background:a}=e;return i(u("div",{role:"alert",class:N({wrapable:l}),style:{color:t,background:a}},[o["left-icon"]?o["left-icon"]():e.leftIcon?u(g,{class:N("left-icon"),name:e.leftIcon},null):void 0,C(),h()]),[[c,b.show]])}}}));var D=a({setup(t){const l=e({"zh-CN":{text:"在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。",mode:"通知栏模式",content:"内容",wrapable:"多行展示",shortText:"技术是开发它的人的共同灵魂。",scrollable:"滚动播放",customStyle:"自定义样式",verticalScroll:"垂直滚动"},"en-US":{text:"Technology is the common soul of the people who developed it.",mode:"Mode",content:"Content",wrapable:"Wrapable",shortText:"Some short text.",customStyle:"Custom Style",scrollable:"Scrollable",verticalScroll:"Vertical Scroll"}});return(t,e)=>{const o=d("demo-block");return x(),f(b,null,[u(o,{title:p(l)("basicUsage")},{default:m((()=>[u(p(z),{text:p(l)("text"),scrollable:"","left-icon":"volume-o"},null,8,["text"])])),_:1},8,["title"]),u(o,{title:p(l)("scrollable")},{default:m((()=>[u(p(z),{scrollable:"",text:p(l)("shortText")},null,8,["text"]),u(p(z),{scrollable:!1,text:p(l)("text")},null,8,["text"])])),_:1},8,["title"]),u(o,{title:p(l)("wrapable")},{default:m((()=>[u(p(z),{wrapable:"",scrollable:!1,text:p(l)("text")},null,8,["text"])])),_:1},8,["title"]),u(o,{title:p(l)("mode")},{default:m((()=>[u(p(z),{mode:"closeable",text:p(l)("shortText")},null,8,["text"]),u(p(z),{mode:"link",text:p(l)("shortText")},null,8,["text"])])),_:1},8,["title"]),u(o,{title:p(l)("customStyle")},{default:m((()=>[u(p(z),{text:p(l)("shortText"),color:"#1989fa",background:"#ecf9ff","left-icon":"info-o"},null,8,["text"])])),_:1},8,["title"]),u(o,{title:p(l)("verticalScroll")},{default:m((()=>[u(p(z),{"left-icon":"volume-o",scrollable:!1},{default:m((()=>[u(p(C),{vertical:"",class:"notice-swipe",autoplay:3e3,"show-indicators":!1},{default:m((()=>[u(p(I),null,{default:m((()=>[h(w(p(l)("content"))+" 1",1)])),_:1}),u(p(I),null,{default:m((()=>[h(w(p(l)("content"))+" 2",1)])),_:1}),u(p(I),null,{default:m((()=>[h(w(p(l)("content"))+" 3",1)])),_:1})])),_:1})])),_:1})])),_:1},8,["title"])],64)}}});export{D as default};
