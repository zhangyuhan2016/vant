import{t}from"./use-translate.ed5e29f0.js";import{c as e,w as r}from"./with-install.9958dc40.js";import{B as s,E as a,f as n}from"./vendor.ba7e37c4.js";import{u as l}from"./useChildren.6233e7a6.js";import{u}from"./useParent.7ddf7229.js";const[o,i]=e("row"),f=Symbol(o);const p=r(s({name:o,props:{wrap:t,align:String,justify:String,tag:{type:String,default:"div"},gutter:{type:[Number,String],default:0}},setup(t,{slots:e}){const{children:r,linkChildren:s}=l(f),u=a((()=>{const t=[[]];let e=0;return r.forEach(((r,s)=>{e+=Number(r.span),e>24?(t.push([s]),e-=24):t[t.length-1].push(s)})),t}));return s({spaces:a((()=>{const e=Number(t.gutter),r=[];return e?(u.value.forEach((t=>{const s=e*(t.length-1)/t.length;t.forEach(((t,a)=>{if(0===a)r.push({right:s});else{const a=e-r[t-1].right,n=s-a;r.push({left:a,right:n})}}))})),r):r}))}),()=>{const{tag:r,wrap:s,align:a,justify:l}=t;return n(r,{class:i({[`align-${a}`]:a,[`justify-${l}`]:l,nowrap:!s})},{default:()=>{var t;return[null==(t=e.default)?void 0:t.call(e)]}})}}})),[c,g]=e("col");const d=r(s({name:c,props:{offset:[Number,String],tag:{type:String,default:"div"},span:{type:[Number,String],default:0}},setup(t,{slots:e}){const{parent:r,index:s}=u(f),l=a((()=>{if(!r)return;const{spaces:t}=r;if(t&&t.value&&t.value[s.value]){const{left:e,right:r}=t.value[s.value];return{paddingLeft:e?`${e}px`:null,paddingRight:r?`${r}px`:null}}}));return()=>{const{tag:r,span:s,offset:a}=t;return n(r,{style:l.value,class:g({[s]:s,[`offset-${a}`]:a})},{default:()=>{var t;return[null==(t=e.default)?void 0:t.call(e)]}})}}}));export{d as C,p as R};
