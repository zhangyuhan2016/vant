import{B as t,G as i,r as e,a,f as l,w as s,D as n,T as o,F as d,o as r,e as p,t as u,l as m,v as c}from"./vendor.ba7e37c4.js";import{C as f}from"./index.d6d78035.js";import{a as v}from"./use-translate.ed5e29f0.js";import"./with-install.9958dc40.js";import"./use-route.59eae6fc.js";import"./index.667f321a.js";import"./unit.2a41fb1b.js";const h={class:"van-ellipsis"},x={class:"van-multi-ellipsis--l2"},k=p("div",{class:"van-hairline--top"},null,-1),g={class:"demo-animate-block"};var w=t({setup(t){const w=v({"zh-CN":{hairline:"1px 边框",ellipsis:"文字省略",animation:"动画",toggle:"切换动画",text1:"这是一段最多显示一行的文字，后面的内容会省略",text2:"这是一段最多显示两行的文字，后面的内容会省略。这是一段最多显示两行的文字，后面的内容会省略"},"en-US":{hairline:"Hairline",ellipsis:"Text Ellipsis",animation:"Animation",toggle:"Switch animation",text1:"This is a paragraph that displays up to one line of text, and the rest of the text will be omitted.",text2:"This is a paragraph that displays up to two lines of text, and the rest of the text will be omitted."}}),b=i(!1),j=i(""),C=t=>{b.value=!0,j.value=t,setTimeout((()=>{b.value=!1}),500)};return(t,i)=>{const v=e("demo-block");return r(),a(d,null,[l(v,{title:n(w)("ellipsis")},{default:s((()=>[p("div",h,u(n(w)("text1")),1),p("div",x,u(n(w)("text2")),1)])),_:1},8,["title"]),l(v,{card:"",title:n(w)("hairline")},{default:s((()=>[k])),_:1},8,["title"]),l(v,{card:"",title:n(w)("animation")},{default:s((()=>[l(n(f),{"is-link":"",title:"Fade",onClick:i[0]||(i[0]=t=>C("van-fade"))}),l(n(f),{"is-link":"",title:"Slide Up",onClick:i[1]||(i[1]=t=>C("van-slide-up"))}),l(n(f),{"is-link":"",title:"Slide Down",onClick:i[2]||(i[2]=t=>C("van-slide-down"))}),l(n(f),{"is-link":"",title:"Slide Left",onClick:i[3]||(i[3]=t=>C("van-slide-left"))}),l(n(f),{"is-link":"",title:"Slide Right",onClick:i[4]||(i[4]=t=>C("van-slide-right"))})])),_:1},8,["title"]),l(o,{name:j.value},{default:s((()=>[m(p("div",g,null,512),[[c,b.value]])])),_:1},8,["name"])],64)}}});export{w as default};
