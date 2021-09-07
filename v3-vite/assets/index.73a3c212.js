import{i}from"./use-translate.ed5e29f0.js";import{c as t,w as e}from"./with-install.9958dc40.js";import{T as r}from"./index.de7d568f.js";import{I as s}from"./index.06390f58.js";import{B as c,f as n,i as a}from"./vendor.ba7e37c4.js";const[l,o]=t("card");const d=e(c({name:l,props:{tag:String,num:[Number,String],desc:String,thumb:String,title:String,price:[Number,String],centered:Boolean,lazyLoad:Boolean,thumbLink:String,originPrice:[Number,String],currency:{type:String,default:"¥"}},emits:["click-thumb"],setup(t,{slots:e,emit:c}){const l=()=>{if(e.tag||t.tag)return n("div",{class:o("tag")},[e.tag?e.tag():n(r,{mark:!0,type:"danger"},{default:()=>[t.tag]})])},d=()=>{if(e.thumb||t.thumb)return n("a",{href:t.thumbLink,class:o("thumb"),onClick:i=>c("click-thumb",i)},[e.thumb?e.thumb():n(s,{src:t.thumb,fit:"cover",width:"100%",height:"100%",lazyLoad:t.lazyLoad},null),l()])},u=()=>{const i=t.price.toString().split(".");return n("div",null,[n("span",{class:o("price-currency")},[t.currency]),n("span",{class:o("price-integer")},[i[0]]),a("."),n("span",{class:o("price-decimal")},[i[1]])])};return()=>{var r,s,c;const a=e.num||i(t.num),l=e.price||i(t.price),m=e["origin-price"]||i(t.originPrice),p=a||l||m||e.bottom,g=l&&n("div",{class:o("price")},[e.price?e.price():u()]),v=m&&n("div",{class:o("origin-price")},[e["origin-price"]?e["origin-price"]():`${t.currency} ${t.originPrice}`]),b=a&&n("div",{class:o("num")},[e.num?e.num():`x${t.num}`]),f=e.footer&&n("div",{class:o("footer")},[e.footer()]),h=p&&n("div",{class:o("bottom")},[null==(r=e["price-top"])?void 0:r.call(e),g,v,b,null==(s=e.bottom)?void 0:s.call(e)]);return n("div",{class:o()},[n("div",{class:o("header")},[d(),n("div",{class:o("content",{centered:t.centered})},[n("div",null,[e.title?e.title():t.title?n("div",{class:[o("title"),"van-multi-ellipsis--l2"]},[t.title]):void 0,e.desc?e.desc():t.desc?n("div",{class:[o("desc"),"van-ellipsis"]},[t.desc]):void 0,null==(c=e.tags)?void 0:c.call(e)]),h])]),f])}}}));export{d as C};
