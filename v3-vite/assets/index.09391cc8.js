import{u as e,a as t}from"./use-translate.ed5e29f0.js";import{c as a,w as s}from"./with-install.9958dc40.js";import{T as d}from"./index.de7d568f.js";import{I as i}from"./index.667f321a.js";import{C as o}from"./index.d6d78035.js";import{a as l,R as r}from"./index.8f5388ef.js";import{B as n}from"./index.4d75283b.js";import{B as m,f as u,G as c,r as p,c as f,w as j,D as x,o as b}from"./vendor.ba7e37c4.js";import{T as g}from"./function-call.2531544a.js";import"./unit.2a41fb1b.js";import"./use-route.59eae6fc.js";import"./useChildren.6233e7a6.js";import"./index.5d553880.js";import"./Checker.45819098.js";import"./useParent.7ddf7229.js";import"./constant.4d85ecb9.js";import"./index.e2ba8582.js";import"./mount-component.858fa0c4.js";import"./use-expose.ecdf2fa3.js";import"./index.03bd3dc3.js";import"./interceptor.29d0b3cc.js";import"./use-touch.3bbb1d83.js";import"./event.7d40caae.js";import"./index.6ba73617.js";import"./utils.83cd68fa.js";import"./index.a4c0d7b1.js";import"./use-lazy-render.924a5154.js";import"./on-popup-reopen.fc1de525.js";import"./index.30afc43b.js";const[T,v,k]=a("contact-list");const h=s(m({name:T,props:{list:Array,addText:String,modelValue:e,defaultTagText:String},emits:["add","edit","select","update:modelValue"],setup(e,{emit:t}){const a=(a,s)=>u(o,{key:a.id,isLink:!0,center:!0,class:v("item"),valueClass:v("item-value"),onClick:()=>{t("update:modelValue",a.id),t("select",a,s)}},{icon:()=>u(i,{name:"edit",class:v("edit"),onClick:e=>{e.stopPropagation(),t("edit",a,s)}},null),value:()=>{const t=[`${a.name}，${a.tel}`];return a.isDefault&&e.defaultTagText&&t.push(u(d,{type:"danger",round:!0,class:v("item-tag")},{default:()=>[e.defaultTagText]})),t},"right-icon":()=>u(r,{class:v("radio"),name:a.id,iconSize:16},null)});return()=>u("div",{class:v()},[u(l,{modelValue:e.modelValue,class:v("group")},{default:()=>[e.list&&e.list.map(a)]}),u("div",{class:[v("bottom"),"van-safe-area-bottom"]},[u(n,{round:!0,block:!0,type:"danger",class:v("add"),text:e.addText||k("addText"),onClick:()=>t("add")},null)])])}}));var C=m({setup(e){const a=t({"zh-CN":{add:"新增",edit:"编辑",list:[{id:"1",name:"张三",tel:"13000000000",isDefault:!0},{id:"2",name:"李四",tel:"1310000000"}],select:"选择",defaultTagText:"默认"},"en-US":{add:"Add",edit:"Edit",list:[{id:"1",name:"John Snow",tel:"13000000000",isDefault:!0},{id:"2",name:"Ned Stark",tel:"1310000000"}],select:"Select",defaultTagText:"default"}}),s=c("1"),d=()=>{g(a("add"))},i=e=>{g(a("edit")+e.id)},o=e=>{g(a("select")+e.id)};return(e,t)=>{const l=p("demo-block");return b(),f(l,{title:x(a)("basicUsage")},{default:j((()=>[u(x(h),{modelValue:s.value,"onUpdate:modelValue":t[0]||(t[0]=e=>s.value=e),list:x(a)("list"),"default-tag-text":x(a)("defaultTagText"),onAdd:d,onEdit:i,onSelect:o},null,8,["modelValue","list","default-tag-text"])])),_:1},8,["title"])}}});export{C as default};
