#!/usr/bin/env node

<<<<<<< HEAD
"use strict";const e=["center","start","end","flex-start","flex-end","left","right","space-between","between","space-around","around","space-evenly","evenly","stretch","inherit","initial","unset","normal"].join("|"),r=["baseline","center","end","flex-end","flex-start","inherit","initial","normal","self-end","self-start","start","stretch","unset"].join("|"),n=["auto","default","none","context-menu","help","pointer","progress","wait","cell","crosshair","text","vertical-text","alias","copy","move","no-drop","not-allowed","e-resize","n-resize","ne-resize","nw-resize","s-resize","se-resize","sw-resize","w-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","col-resize","row-resize","all-scroll","zoom-in","zoom-out","grab","grabbing"].join("|"),t=["cm","mm","in","px","pt","pc","em","ex","ch","rem","vw","vh","vmin","vmax","p"].join("|");let s="";s+='@charset "UTF-8";\n',s+="/* https://github.com/macheteHot/css-generator-plugin/\n",s+="   version: v0.20.1\n",s+="   this file will auto generate and update\n",s+="   DO NOT EDIT THIS FILE!\n",s+="   DO NOT EDIT THIS FILE!\n",s+="   DO NOT EDIT THIS FILE!\n",s+="*/\n\n";const o=new Map;o.set(void 0,[""]),o.set("x",["left","right"]),o.set("y",["top","bottom"]),o.set("t",["top"]),o.set("r",["right"]),o.set("b",["bottom"]),o.set("l",["left"]),o.set("top",["top"]),o.set("right",["right"]),o.set("bottom",["bottom"]),o.set("left",["left"]);var i={regExp:new RegExp(`^align-items-(?<align>${r})$`),render({groups:e}){const{align:r}=e;return{name:"alignItems",order:220,css:["align-items: "+r]}}};let a={};const u={vue:{extNames:["vue"],reg:/((?<=class=(["']))[\s\S]*?(?=\2))|((?<=class={)[\s\S]*?(?=}))/gi},react:{extNames:["tsx","jsx"],reg:/((?<=className=(["']))[\s\S]*?(?=\2))|((?<=className={)[\s\S]*?(?=}))/gi},"d-mini-program":{extNames:["axml"],reg:/((?<=class=")|(?<=classname="))[\s\S]+?(?=")/gi},"wx-mini-program":{extNames:["wxml"],reg:/((?<=class=")|(?<=classname="))[\s\S]+?(?=")/gi}};function l(e){switch(e){case"extNames":return u[a.type].extNames;case"globReg":return u[a.type].reg;case"colors":return a.colors||{};case"unit":return a.unit||"px";case"important":return void 0===a.important||a.important;default:return a[e]}}function c(e){return"p"===e?"%":e||(a.unit||"px")}function d(e){let r=460;return"x"===e&&(r+=10),"y"===e&&(r+=20),"t"===e&&(r+=30),"b"===e&&(r+=40),"r"===e&&(r+=50),"l"===e&&(r+=60),r}function p(e,r,n){return o.get(e).reduce((e,t)=>t?[...e,`border-${t}-width: ${r}${n}`,`border-${t}-style: solid`,`border-${t}-style: solid`]:[...e,`border-width: ${r}${n}`,"border-style: solid","border-style: solid"],[])}var g={regExp:new RegExp(`^(border|border-width|border-w)-((?<direction>[trblxy])-)?(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{direction:r,num:n,unit:t}=e;return t=0===parseInt(n)?"":c(t),{name:"border",order:d(r),num:n,css:p(r,n,t)}}},m={regExp:new RegExp(`^(border-radius|br)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{num:r,unit:n}=e;return n=c(n),{name:"borderRadius",order:530,css:0===parseInt(r)?["border-radius: 0"]:[`border-radius: ${r}${n}`]}}},x={regExp:/^border-style-(?<value>none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit)$/,render({groups:e}){const{value:r}=e;return{name:"borderStyle",order:550,css:["border-style: "+r]}}},h={regExp:/^box-sizing-(?<value>content-box|border-box)$/,render({groups:e}){const{value:r}=e;return{name:"boxSizing",order:560,css:["box-sizing: "+r]}}},f={regExp:/^circle$/,render:()=>({name:"borderStyle",order:540,css:["border-radius: 50%"]})};const $=()=>({red:"#f00",white:"#fff",black:"#000",blue:"#00f",transparent:"transparent",...l("colors")});function w(e){return parseInt(e,16)}var b={regExp:()=>new RegExp(`^(?<type>color|c|text|bg|background|border-color|border-c)-((?<pseudo>hover|link|visited|active|focus|focus-within)-)?(?<color>[a-fA-F0-9]{6}|[a-fA-F0-9]{3}|${Object.keys($()).join("|")})(-(?<opacity>1|([1-9]\\d{0,1})))?$`),render({groups:e}){let{type:r,pseudo:n,color:t,opacity:s}=e;s=void 0===s?1:(.01*s).toFixed(2),t=function(e,r=1){const n=/^([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(e)?e:$()[e].replace(/^#/,"");if("transparent"===n)return"transparent";if(3===n.length)return"rgba("+n.split("").map(e=>w(e.repeat(2))).join(",")+`,${r})`;if(6===n.length){const e=/[a-fA-F0-9]{2}/g;return"rgba("+n.match(e).map(w).join(",")+`,${r})`}return""}(t,s);let o="";switch(r){case"c":case"color":case"text":o="color";break;case"bg":case"background":o="background-color";break;case"border-c":case"border-color":o="border-color";break;default:o=r}return{name:"color",order:1/0,pseudo:n,css:[`${o}: ${t}`]}}},v={regExp:new RegExp(`^cursor-(?<value>${n})$`),render({groups:e}){const{value:r}=e;return{name:"cursor",order:340,css:["cursor: "+r]}}},E={regExp:/^(display|d)-(?<value>none|inline|block|inline-block|flex)$/,render({groups:e}){const{value:r}=e;return{name:"display",order:280,css:["display: "+r]}}},y={regExp:new RegExp(`^flex-basis-(?<value>((?<num>0|[1-9]\\d*)(?<unit>${t})?)|initial|inherit|auto)$`),render({groups:e}){let{value:r,num:n,unit:t}=e;return n&&(t=c(t),r=`${n}${t}`),{name:"flexBasis",order:280,css:["flex-basis: "+r]}}},I={regExp:/^(flex-direction|flex)-(?<value>row|row-reverse|column|column-reverse)$/,render({groups:e}){const{value:r}=e;return{name:"flexDirection",order:230,css:["flex-direction: "+r]}}},k={regExp:new RegExp(`^flex-(?<justify>${e})-(?<align>${r})$`),render({groups:e}){let{justify:r,align:n}=e;return"between"===r&&(r="space-between"),"around"===r&&(r="space-around"),"evenly"===r&&(r="space-evenly"),{name:"flexJustAli",order:200,css:["display: flex","justify-content: "+r,"align-items: "+n]}}},S={regExp:/^flex-(?<value>null|auto|none|(0|[1-9]\d*))$/,render({groups:e}){const{value:r}=e;return{name:"flex",order:250,css:["flex: "+r]}}},j={regExp:/^flex-(?<type>shrink|grow)-(?<value>(0|[1-9]\d*)|initial|inherit)$/,render({groups:e}){const{type:r,value:n}=e;return{name:"shrink"===r?"flexShrink":"flexGrow",order:"shrink"===r?260:270,css:[`flex-${r}: ${n}`]}}},z={regExp:/^flex-wrap-(?<value>inherit|initial|nowrap|wrap|wrap-reverse)$/,render({groups:e}){const{value:r}=e;return{name:"flexDirection",order:240,css:["flex-wrap: "+r]}}},R={regExp:new RegExp(`^(font-size|fs)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{num:r,unit:n}=e;n=c(n);const t={name:"fontSize",order:370,num:r};return 0===parseInt(r)?{...t,css:["font-size: 0"]}:{...t,css:[`font-size: ${r}${n}`]}}},N={regExp:/^(font-weight|fw)-(?<value>[1-9]00|normal|bold|bolder|inherit|initial|lighter|normal|unset)$/,render({groups:e}){const{value:r}=e;return{name:"fontWeight",order:360,css:["font-weight: "+r]}}},O={regExp:new RegExp(`^(h|height)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){const{num:r,unit:n}=e,t={name:"height",order:20,num:r};return 0===parseInt(r)?{...t,css:["height: 0"]}:{...t,css:[`height: ${r}${c(n)}`]}}},T={regExp:new RegExp(`^justify-content-(?<justify>${e})$`),render({groups:e}){const{justify:r}=e;return{name:"justifyContent",order:210,css:["justify-content: "+r]}}},D={regExp:new RegExp(`^letter-spacing-(?<isMinus>m-)?(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{isMinus:r,num:n,unit:t}=e;r&&(n=0-n),t=c(t);return{...{name:"letterSpacing",order:410,num:n},css:0!==parseInt(n)?[`letter-spacing: ${n}${t}`]:["letter-spacing: 0"]}}},F={regExp:new RegExp(`^(lh|line-height)-(?<value>((?<num>0|[1-9]\\d*)(?<unit>${t})?)|normal|unset|inherit|initial)$`),render({groups:e}){let{value:r,num:n,unit:t}=e;const s={name:"lineHeight",order:330};return 0===parseInt(n)?{...s,num:n,css:["line-height: 0"]}:void 0!==n?(t=c(t),{...s,num:n,css:[`line-height: ${n}${t}`]}):{...s,num:1/0,css:["line-height: "+r]}}};var A={regExp:new RegExp(`^(?<type>m|margin|p|padding)-((?<direction>[trblxy])-)?((?<auto>auto)|(?<isMinus>m-)?(?<num>0|[1-9]\\d*)(?<unit>${t})?)$`),render({groups:e}){let{type:r,direction:n,isMinus:t,num:s,unit:i,auto:a}=e;a?(i="",s="auto"):i=0===parseInt(s)?"":c(i),t&&(s=0-s);const u=function(e,r){let n,t="";return"m"!==e&&"margin"!==e||(n=50,t+="margin"),"p"!==e&&"padding"!==e||(n=110,t+="padding"),"x"===r&&(n+=10),"y"===r&&(n+=20),"t"===r&&(n+=30),"b"===r&&(n+=40),"r"===r&&(n+=50),"l"===r&&(n+=60),r&&(t+="-"+r),{name:t,order:n}}(r,n);return"m"===r&&(r="margin"),"p"===r&&(r="padding"),{...u,num:s,css:o.get(n).reduce((e,n)=>[...e,n?`${r}-${n}: ${s}${i}`:`${r}: ${s}${i}`],[])}}},H={regExp:new RegExp(`^(max-h|max-height)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{num:r,unit:n}=e;n=c(n);const t={name:"max-height",order:31,num:r};return parseInt(0===r)?{...t,css:["max-height: 0"]}:{...t,css:[`max-height: ${r}${n}`]}}},q={regExp:new RegExp(`^(max-w|max-width)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{num:r,unit:n}=e;n=c(n);const t={name:"max-width",order:31,num:r};return parseInt(0===r)?{...t,css:["max-width: 0"]}:{...t,css:[`max-width: ${r}${n}`]}}},M={regExp:new RegExp(`^(min-h|min-height)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{num:r,unit:n}=e;n=c(n);const t={name:"min-height",order:40,num:r};return parseInt(0===r)?{...t,css:["min-height: 0"]}:{...t,css:[`min-height: ${r}${n}`]}}},L={regExp:new RegExp(`^(min-w|min-width)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{num:r,unit:n}=e;n=c(n);const t={name:"min-width",order:41,num:r};return parseInt(0===r)?{...t,css:["min-width: 0"]}:{...t,css:[`min-width: ${r}${n}`]}}},_={regExp:new RegExp(`^(?<direction>[trbl]|top|right|bottom|left)-(?<isMinus>m-)?(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{direction:r,isMinus:n,num:t,unit:s}=e;n&&(t=0-t),s=c(s),"t"===r&&(r="top"),"r"===r&&(r="right"),"b"===r&&(r="bottom"),"l"===r&&(r="left");const o={name:"orientation",order:310,num:t};return 0===t?{...o,css:[r+": 0"]}:{...o,css:[`${r}: ${t}${s}`]}}},P={regExp:/^overflow(-(?<direction>x|y))?-(?<value>hidden|auto|visible|scroll|inherit)$/,render({groups:e}){const{direction:r,value:n}=e,t={name:"overflow"};return r?"x"===r?{...t,order:390,css:["overflow-x: "+n]}:"y"===r?{...t,order:400,css:["overflow-y: "+n]}:void 0:{...t,order:380,css:["overflow: "+n]}}},W={regExp:/^position-(?<value>static|relative|sticky|unset|absolute|fixed|inherit|initial)$/,render({groups:e}){const{value:r}=e;return{name:"position",order:300,css:["position: "+r]}}},B={className:"square",regExp:new RegExp(`^square-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{num:r,unit:n}=e;n=c(n);const t={name:"square",order:50,num:r};return parseInt(0===r)?{...t,css:["width: 0","height: 0"]}:{...t,css:[`width: ${r}${n}`,`height: ${r}${n}`]}}},J={regExp:/^(text-align|text)-(?<value>start|end|left|right|center|justify|match-parent)$/,render({groups:e}){const{value:r}=e;return{name:"textAlign",order:320,css:["text-align: "+r]}}},C={regExp:/^(text-align-last|text-last)-(?<value>auto|left|right|center|justify|start|end|initial|inherit)$/,render({groups:e}){const{value:r}=e;return{name:"textAlignLast",order:440,css:["text-align-last: "+r]}}},G={regExp:/^(text-decoration|text)-(?<value>none|underline|overline|line-through|blink|inherit)$/,render({groups:e}){const{value:r}=e;return{name:"textDecoration",order:420,css:["text-decoration: "+r]}}},U={regExp:/^(text-)?ellipsis(-(?<num>[1-9]\d*))?$/,render({groups:e}){let{num:r}=e;const n={name:"",order:450};return 1===parseInt(r)&&(r=void 0),void 0===r?{...n,num:0,css:["display: inline-block","overflow: hidden","text-overflow: ellipsis","white-space: nowrap"]}:{...n,num:r,css:["overflow: hidden","text-overflow: ellipsis","display: -webkit-box","-webkit-line-clamp: "+r,"-webkit-box-orient: vertical"]}}},V={regExp:/^(user-)?select-(?<value>none|auto|text|all|contain|element)$/,render({groups:e}){const{value:r}=e;return{name:"userSelect",order:430,css:["user-select: "+r]}}},Z={regExp:new RegExp(`^(w|width)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){const{num:r,unit:n}=e,t={name:"width",order:10,num:r};return 0===parseInt(r)?{...t,css:["width: 0"]}:{...t,css:[`width: ${r}${c(n)}`]}}},K={regExp:/^word-break-(?<value>normal|break-all|keep-all|break-word|inherit|initial|unset)$/,render({groups:e}){const{value:r}=e;return{name:"wordBreak",order:350,css:["word-break: "+r]}}},Q={regExp:/^z-index-(?<isMinus>m-)?(?<num>0|[1-9]\d*)$/,render({groups:e}){let{isMinus:r,num:n}=e;return r&&(n=0-n),{name:"zIndex",order:190,num:n,css:["z-index: "+n]}}},X=Object.freeze({__proto__:null,alignItems:i,border:g,borderRadius:m,borderStyle:x,boxSizing:h,circle:f,color:b,cursor:v,display:E,flexBasis:y,flexDirection:I,flexJustAli:k,flexNum:S,flexShrinkAndGrow:j,flexWrap:z,fontSize:R,fontWeight:N,height:O,justifyContent:T,letterSpacing:D,lineHeight:F,marginAndPadding:A,maxHeight:H,maxWidth:q,minHeight:M,minWidth:L,orientation:_,overflow:P,position:W,square:B,textAlign:J,textAlignLast:C,textDecoration:G,textEllipsis:U,userSelect:V,width:Z,wordBreak:K,zIndex:Q});let Y=[];function ee({classStr:e,pseudo:r,css:n}){return r&&(e=e+":"+r),n.reduce((e,r,n)=>e+(l("important")?r+" !important; ":r+"; "),`.${e}{ `)+"}"}function re(e,r){return void 0!==e&&void 0!==r?parseInt(e.num)-parseInt(r.num):0}function ne(){let e="";const r=function(e,r){const n={};return e.forEach((function(e){const t=JSON.stringify(e[r]);n[t]=n[t]||[],n[t].push(e)})),Object.keys(n).map((function(e){return n[e]}))}(Y.sort((e,r)=>e.order-r.order),"name");for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e+=`/* ${r[n][0].name||"unknow name"} order ${r[n][0].order} */\n`,e+=r[n].sort(re).map(ee).join("\n"),e+="\n\n");return e}const te=new Set;function se(e){te.clear(),Y=[];const r=e.match(l("globReg"));return r&&r.forEach(e=>{e.replace(/[^a-zA-Z0-9-]/g," ").split(" ").forEach(oe)}),""}function oe(e){if(te.has(e))return null;te.add(e),Object.values(X).forEach(r=>{const n="function"==typeof r.regExp?r.regExp():r.regExp,t=e.match(n);var s;null!==t&&(s={classStr:e,...r.render(t)},Y.push(s))})}const{performance:ie}=require("perf_hooks"),ae=require("fs"),ue=require("path"),le=require("chokidar"),ce=require("glob"),de=require("shelljs");let pe=0,ge=0;const me=()=>{pe=ie.now()},xe=()=>{ge=ie.now()};function he(){const e=l("extNames").join("|");return ce.sync(ue.join(process.cwd(),`./${l("dirPath")}/**/*.@(${e})`)).reduce((e,r)=>e+ae.readFileSync(ue.resolve(r),"utf8"),"")}function fe(){const e=ue.resolve(l("generate")),r=ue.resolve(l("generate"),"..");ae.existsSync(r)||de.mkdir("-p",r),ae.writeFileSync(e,`@charset "UTF-8";\n/* https://github.com/macheteHot/css-generator-plugin/\n   version: v0.20.1\n   this file will auto generate and update\n   DO NOT EDIT THIS FILE!\n   DO NOT EDIT THIS FILE!\n   DO NOT EDIT THIS FILE!\n*/\n\n${ne()}\n`)}function $e(e){return ue.resolve(process.cwd(),e)}function we(){console.log(`css generator done use time ${(ge-pe).toFixed(2)}ms`)}module.exports=class{constructor(e){void 0===e&&(e=function(){let e=null;if(ae.existsSync($e("css.generator.config.js")))e=require($e("css.generator.config.js"));else{if(!ae.existsSync($e("css.generator.config.json")))throw new Error("you dont have any config!!! see https://github.com/macheteHot/css-generator-plugin/blob/master/README.md");e=JSON.parse(ae.readFileSync($e("css.generator.config.json")))}return e}()),a=e}apply(e){e.hooks.afterPlugins.tap("vue-generate-css",()=>{!function(e){me(),se(he()),fe(),xe(),e?e.hooks.done.tap("css-generator-done",we):we()}(e),"development"===process.env.NODE_ENV&&function(e){const r=l("extNames").join("|");le.watch(ue.resolve(l("dirPath")),{ignored:new RegExp(`^.*\\.(?:(?!(${r})).)+$`),persistent:!0}).on("change",()=>{me(),pe=ie.now(),se(he()),fe(),xe(),e||we()})}(e)})}};
=======
"use strict";const e=["center","start","end","flex-start","flex-end","left","right","space-between","between","space-around","around","space-evenly","evenly","stretch","inherit","initial","unset","normal"].join("|"),r=["baseline","center","end","flex-end","flex-start","inherit","initial","normal","self-end","self-start","start","stretch","unset"].join("|"),n=["auto","default","none","context-menu","help","pointer","progress","wait","cell","crosshair","text","vertical-text","alias","copy","move","no-drop","not-allowed","e-resize","n-resize","ne-resize","nw-resize","s-resize","se-resize","sw-resize","w-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","col-resize","row-resize","all-scroll","zoom-in","zoom-out","grab","grabbing"].join("|"),t=["cm","mm","in","px","pt","pc","em","ex","ch","rem","vw","vh","vmin","vmax","p"].join("|");let s="";s+='@charset "UTF-8";\n',s+="/* https://github.com/macheteHot/css-generator-plugin/\n",s+="   version: v0.20.1\n",s+="   this file will auto generate and update\n",s+="   DO NOT EDIT THIS FILE!\n",s+="   DO NOT EDIT THIS FILE!\n",s+="   DO NOT EDIT THIS FILE!\n",s+="*/\n\n";const i=new Map;i.set(void 0,[""]),i.set("x",["left","right"]),i.set("y",["top","bottom"]),i.set("t",["top"]),i.set("r",["right"]),i.set("b",["bottom"]),i.set("l",["left"]),i.set("top",["top"]),i.set("right",["right"]),i.set("bottom",["bottom"]),i.set("left",["left"]);var o={regExp:new RegExp(`^align-items-(?<align>${r})$`),render({groups:e}){const{align:r}=e;return{name:"alignItems",order:220,css:["align-items: "+r]}}};let a={modifyRules:{}};const u={vue:{extNames:["vue"],reg:/((?<=class=(["']))[\s\S]*?(?=\2))|((?<=class={)[\s\S]*?(?=}))/gi},react:{extNames:["tsx","jsx"],reg:/((?<=className=(["']))[\s\S]*?(?=\2))|((?<=className={)[\s\S]*?(?=}))/gi},"d-mini-program":{extNames:["axml"],reg:/((?<=class=")|(?<=classname="))[\s\S]+?(?=")/gi},"wx-mini-program":{extNames:["wxml"],reg:/((?<=class=")|(?<=classname="))[\s\S]+?(?=")/gi},html:{extNames:["html"],reg:/((?<=class=(["']))[\s\S]*?(?=\2))/gi}};function l(e){switch(e){case"extNames":return u[a.type].extNames;case"globReg":return u[a.type].reg;case"colors":return a.colors||{};case"unit":return a.unit||"px";case"important":return void 0===a.important||a.important;default:return a[e]}}function c(e){return"p"===e?"%":e||(a.unit||"px")}function d(e){let r=460;return"x"===e&&(r+=10),"y"===e&&(r+=20),"t"===e&&(r+=30),"b"===e&&(r+=40),"r"===e&&(r+=50),"l"===e&&(r+=60),r}function g(e,r,n){return i.get(e).reduce((e,t)=>t?[...e,`border-${t}-width: ${r}${n}`,`border-${t}-style: solid`,`border-${t}-style: solid`]:[...e,`border-width: ${r}${n}`,"border-style: solid","border-style: solid"],[])}var p={regExp:new RegExp(`^(border|border-width|border-w)-((?<direction>[trblxy])-)?(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{direction:r,num:n,unit:t}=e;return t=0===parseInt(n)?"":c(t),{name:"border",order:d(r),num:n,css:g(r,n,t)}}},m={regExp:new RegExp(`^(border-radius|br)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{num:r,unit:n}=e;return n=c(n),{name:"borderRadius",order:530,css:0===parseInt(r)?["border-radius: 0"]:[`border-radius: ${r}${n}`]}}},x={regExp:/^border-style-(?<value>none|hidden|dotted|dashed|solid|double|groove|ridge|inset|outset|inherit)$/,render({groups:e}){const{value:r}=e;return{name:"borderStyle",order:550,css:["border-style: "+r]}}},h={regExp:/^box-sizing-(?<value>content-box|border-box)$/,render({groups:e}){const{value:r}=e;return{name:"boxSizing",order:560,css:["box-sizing: "+r]}}},f={regExp:/^circle$/,render:()=>({name:"borderStyle",order:540,css:["border-radius: 50%"]})};const $=()=>({red:"#f00",white:"#fff",black:"#000",blue:"#00f",transparent:"transparent",...l("colors")});function w(e){return parseInt(e,16)}var b={regExp:()=>new RegExp(`^(?<type>color|c|text|bg|background|border-color|border-c)-((?<pseudo>hover|link|visited|active|focus|focus-within)-)?(?<color>[a-fA-F0-9]{6}|[a-fA-F0-9]{3}|${Object.keys($()).join("|")})(-(?<opacity>1|([1-9]\\d{0,1})))?$`),render({groups:e}){let{type:r,pseudo:n,color:t,opacity:s}=e;s=void 0===s?1:(.01*s).toFixed(2),t=function(e,r=1){const n=/^([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/.test(e)?e:$()[e].replace(/^#/,"");if("transparent"===n)return"transparent";if(3===n.length)return"rgba("+n.split("").map(e=>w(e.repeat(2))).join(",")+`,${r})`;if(6===n.length){const e=/[a-fA-F0-9]{2}/g;return"rgba("+n.match(e).map(w).join(",")+`,${r})`}return""}(t,s);let i="";switch(r){case"c":case"color":case"text":i="color";break;case"bg":case"background":i="background-color";break;case"border-c":case"border-color":i="border-color";break;default:i=r}return{name:"color",order:1/0,pseudo:n,css:[`${i}: ${t}`]}}},v={regExp:new RegExp(`^cursor-(?<value>${n})$`),render({groups:e}){const{value:r}=e;return{name:"cursor",order:340,css:["cursor: "+r]}}},E={regExp:/^(display|d)-(?<value>none|inline|block|inline-block|flex)$/,render({groups:e}){const{value:r}=e;return{name:"display",order:280,css:["display: "+r]}}},y={regExp:new RegExp(`^flex-basis-(?<value>((?<num>0|[1-9]\\d*)(?<unit>${t})?)|initial|inherit|auto)$`),render({groups:e}){let{value:r,num:n,unit:t}=e;return n&&(t=c(t),r=`${n}${t}`),{name:"flexBasis",order:280,css:["flex-basis: "+r]}}},I={regExp:/^(flex-direction|flex)-(?<value>row|row-reverse|column|column-reverse)$/,render({groups:e}){const{value:r}=e;return{name:"flexDirection",order:230,css:["flex-direction: "+r]}}},S={regExp:new RegExp(`^flex-(?<justify>${e})-(?<align>${r})$`),render({groups:e}){let{justify:r,align:n}=e;return"between"===r&&(r="space-between"),"around"===r&&(r="space-around"),"evenly"===r&&(r="space-evenly"),{name:"flexJustAli",order:200,css:["display: flex","justify-content: "+r,"align-items: "+n]}}},k={regExp:/^flex-(?<value>null|auto|none|(0|[1-9]\d*))$/,render({groups:e}){const{value:r}=e;return{name:"flex",order:250,css:["flex: "+r]}}},j={regExp:/^flex-(?<type>shrink|grow)-(?<value>(0|[1-9]\d*)|initial|inherit)$/,render({groups:e}){const{type:r,value:n}=e;return{name:"shrink"===r?"flexShrink":"flexGrow",order:"shrink"===r?260:270,css:[`flex-${r}: ${n}`]}}},z={regExp:/^flex-wrap-(?<value>inherit|initial|nowrap|wrap|wrap-reverse)$/,render({groups:e}){const{value:r}=e;return{name:"flexDirection",order:240,css:["flex-wrap: "+r]}}},R={regExp:new RegExp(`^(font-size|fs)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{num:r,unit:n}=e;n=c(n);const t={name:"fontSize",order:370,num:r};return 0===parseInt(r)?{...t,css:["font-size: 0"]}:{...t,css:[`font-size: ${r}${n}`]}}},N={regExp:/^(font-weight|fw)-(?<value>[1-9]00|normal|bold|bolder|inherit|initial|lighter|normal|unset)$/,render({groups:e}){const{value:r}=e;return{name:"fontWeight",order:360,css:["font-weight: "+r]}}},T={regExp:new RegExp(`^(h|height)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){const{num:r,unit:n}=e,t={name:"height",order:20,num:r};return 0===parseInt(r)?{...t,css:["height: 0"]}:{...t,css:[`height: ${r}${c(n)}`]}}},O={regExp:new RegExp(`^justify-content-(?<justify>${e})$`),render({groups:e}){const{justify:r}=e;return{name:"justifyContent",order:210,css:["justify-content: "+r]}}},D={regExp:new RegExp(`^letter-spacing-(?<isMinus>m-)?(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{isMinus:r,num:n,unit:t}=e;r&&(n=0-n),t=c(t);return{...{name:"letterSpacing",order:410,num:n},css:0!==parseInt(n)?[`letter-spacing: ${n}${t}`]:["letter-spacing: 0"]}}},F={regExp:new RegExp(`^(lh|line-height)-(?<value>((?<num>0|[1-9]\\d*)(?<unit>${t})?)|normal|unset|inherit|initial)$`),render({groups:e}){let{value:r,num:n,unit:t}=e;const s={name:"lineHeight",order:330};return 0===parseInt(n)?{...s,num:n,css:["line-height: 0"]}:void 0!==n?(t=c(t),{...s,num:n,css:[`line-height: ${n}${t}`]}):{...s,num:1/0,css:["line-height: "+r]}}};var A={regExp:new RegExp(`^(?<type>m|margin|p|padding)-((?<direction>[trblxy])-)?((?<auto>auto)|(?<isMinus>m-)?(?<num>0|[1-9]\\d*)(?<unit>${t})?)$`),render({groups:e}){let{type:r,direction:n,isMinus:t,num:s,unit:o,auto:a}=e;a?(o="",s="auto"):o=0===parseInt(s)?"":c(o),t&&(s=0-s);const u=function(e,r){let n,t="";return"m"!==e&&"margin"!==e||(n=50,t+="margin"),"p"!==e&&"padding"!==e||(n=110,t+="padding"),"x"===r&&(n+=10),"y"===r&&(n+=20),"t"===r&&(n+=30),"b"===r&&(n+=40),"r"===r&&(n+=50),"l"===r&&(n+=60),r&&(t+="-"+r),{name:t,order:n}}(r,n);return"m"===r&&(r="margin"),"p"===r&&(r="padding"),{...u,num:s,css:i.get(n).reduce((e,n)=>[...e,n?`${r}-${n}: ${s}${o}`:`${r}: ${s}${o}`],[])}}},H={regExp:new RegExp(`^(max-h|max-height)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{num:r,unit:n}=e;n=c(n);const t={name:"max-height",order:31,num:r};return parseInt(0===r)?{...t,css:["max-height: 0"]}:{...t,css:[`max-height: ${r}${n}`]}}},q={regExp:new RegExp(`^(max-w|max-width)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{num:r,unit:n}=e;n=c(n);const t={name:"max-width",order:31,num:r};return parseInt(0===r)?{...t,css:["max-width: 0"]}:{...t,css:[`max-width: ${r}${n}`]}}},M={regExp:new RegExp(`^(min-h|min-height)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{num:r,unit:n}=e;n=c(n);const t={name:"min-height",order:40,num:r};return parseInt(0===r)?{...t,css:["min-height: 0"]}:{...t,css:[`min-height: ${r}${n}`]}}},L={regExp:new RegExp(`^(min-w|min-width)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{num:r,unit:n}=e;n=c(n);const t={name:"min-width",order:41,num:r};return parseInt(0===r)?{...t,css:["min-width: 0"]}:{...t,css:[`min-width: ${r}${n}`]}}},P={regExp:new RegExp(`^(?<direction>[trbl]|top|right|bottom|left)-(?<isMinus>m-)?(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{direction:r,isMinus:n,num:t,unit:s}=e;n&&(t=0-t),s=c(s),"t"===r&&(r="top"),"r"===r&&(r="right"),"b"===r&&(r="bottom"),"l"===r&&(r="left");const i={name:"orientation",order:310,num:t};return 0===t?{...i,css:[r+": 0"]}:{...i,css:[`${r}: ${t}${s}`]}}},W={regExp:/^overflow(-(?<direction>x|y))?-(?<value>hidden|auto|visible|scroll|inherit)$/,render({groups:e}){const{direction:r,value:n}=e,t={name:"overflow"};return r?"x"===r?{...t,order:390,css:["overflow-x: "+n]}:"y"===r?{...t,order:400,css:["overflow-y: "+n]}:void 0:{...t,order:380,css:["overflow: "+n]}}},_={regExp:/^position-(?<value>static|relative|sticky|unset|absolute|fixed|inherit|initial)$/,render({groups:e}){const{value:r}=e;return{name:"position",order:300,css:["position: "+r]}}},B={className:"square",regExp:new RegExp(`^square-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){let{num:r,unit:n}=e;n=c(n);const t={name:"square",order:50,num:r};return parseInt(0===r)?{...t,css:["width: 0","height: 0"]}:{...t,css:[`width: ${r}${n}`,`height: ${r}${n}`]}}},J={regExp:/^(text-align|text)-(?<value>start|end|left|right|center|justify|match-parent)$/,render({groups:e}){const{value:r}=e;return{name:"textAlign",order:320,css:["text-align: "+r]}}},U={regExp:/^(text-align-last|text-last)-(?<value>auto|left|right|center|justify|start|end|initial|inherit)$/,render({groups:e}){const{value:r}=e;return{name:"textAlignLast",order:440,css:["text-align-last: "+r]}}},C={regExp:/^(text-decoration|text)-(?<value>none|underline|overline|line-through|blink|inherit)$/,render({groups:e}){const{value:r}=e;return{name:"textDecoration",order:420,css:["text-decoration: "+r]}}},G={regExp:/^(text-)?ellipsis(-(?<num>[1-9]\d*))?$/,render({groups:e}){let{num:r}=e;const n={name:"",order:450};return 1===parseInt(r)&&(r=void 0),void 0===r?{...n,num:0,css:["display: inline-block","overflow: hidden","text-overflow: ellipsis","white-space: nowrap"]}:{...n,num:r,css:["overflow: hidden","text-overflow: ellipsis","display: -webkit-box","-webkit-line-clamp: "+r,"-webkit-box-orient: vertical"]}}},V={regExp:/^(user-)?select-(?<value>none|auto|text|all|contain|element)$/,render({groups:e}){const{value:r}=e;return{name:"userSelect",order:430,css:["user-select: "+r]}}},Z={regExp:new RegExp(`^(w|width)-(?<num>0|[1-9]\\d*)(?<unit>${t})?$`),render({groups:e}){const{num:r,unit:n}=e,t={name:"width",order:10,num:r};return 0===parseInt(r)?{...t,css:["width: 0"]}:{...t,css:[`width: ${r}${c(n)}`]}}},K={regExp:/^word-break-(?<value>normal|break-all|keep-all|break-word|inherit|initial|unset)$/,render({groups:e}){const{value:r}=e;return{name:"wordBreak",order:350,css:["word-break: "+r]}}},Q={regExp:/^z-index-(?<isMinus>m-)?(?<num>0|[1-9]\d*)$/,render({groups:e}){let{isMinus:r,num:n}=e;return r&&(n=0-n),{name:"zIndex",order:190,num:n,css:["z-index: "+n]}}},X=Object.freeze({__proto__:null,alignItems:o,border:p,borderRadius:m,borderStyle:x,boxSizing:h,circle:f,color:b,cursor:v,display:E,flexBasis:y,flexDirection:I,flexJustAli:S,flexNum:k,flexShrinkAndGrow:j,flexWrap:z,fontSize:R,fontWeight:N,height:T,justifyContent:O,letterSpacing:D,lineHeight:F,marginAndPadding:A,maxHeight:H,maxWidth:q,minHeight:M,minWidth:L,orientation:P,overflow:W,position:_,square:B,textAlign:J,textAlignLast:U,textDecoration:C,textEllipsis:G,userSelect:V,width:Z,wordBreak:K,zIndex:Q});function Y(e){return"function"==typeof e}let ee=[];function re({classStr:e,pseudo:r,css:n}){return r&&(e=e+":"+r),n.reduce((e,r,n)=>e+(l("important")?r+" !important; ":r+"; "),`.${e}{ `)+"}"}function ne(e,r){return void 0!==e&&void 0!==r?parseInt(e.num)-parseInt(r.num):0}function te(){let e="";const r=function(e,r){const n={};return e.forEach((function(e){const t=JSON.stringify(e[r]);n[t]=n[t]||[],n[t].push(e)})),Object.keys(n).map((function(e){return n[e]}))}(ee.sort((e,r)=>e.order-r.order),"name");for(const n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e+=`/* ${r[n][0].name||"unknow name"} order ${r[n][0].order} */\n`,e+=r[n].sort(ne).map(re).join("\n"),e+="\n\n");return e}const se=new Set;function ie(e){se.clear(),ee=[];const r=e.match(l("globReg"));return r&&r.forEach(e=>{e.replace(/[^a-zA-Z0-9-]/g," ").split(" ").forEach(oe)}),""}function oe(e){if(se.has(e))return null;se.add(e),Object.values({...X,...l("modifyRules")}).forEach(r=>{r=Y(r)?r({getUnit:c}):r;const n=Y(r.regExp)?r.regExp():r.regExp,t=e.match(n);var s;null!==t&&(s={classStr:e,...r.render(t)},ee.push(s))})}const ae=require("fs"),ue=require("path"),le=require("chokidar"),ce=require("glob"),de=require("shelljs");function ge(){const e=l("extNames").join("|");return ce.sync(ue.join(process.cwd(),`./${l("dirPath")}/**/*.@(${e})`)).reduce((e,r)=>e+ae.readFileSync(ue.resolve(r),"utf8"),"")}function pe(){const e=ue.resolve(l("generate")),r=ue.resolve(l("generate"),"..");ae.existsSync(r)||de.mkdir("-p",r),ae.writeFileSync(e,`@charset "UTF-8";\n/* https://github.com/macheteHot/css-generator-plugin/\n   version: v0.20.1\n   this file will auto generate and update\n   DO NOT EDIT THIS FILE!\n   DO NOT EDIT THIS FILE!\n   DO NOT EDIT THIS FILE!\n*/\n\n${te()}\n`)}function me(e){return ue.resolve(process.cwd(),e)}module.exports=class{constructor(e){void 0===e&&(e=function(){let e=null;if(ae.existsSync(me("css.generator.config.js")))e=require(me("css.generator.config.js"));else{if(!ae.existsSync(me("css.generator.config.json")))throw new Error("you dont have any config!!! see https://github.com/macheteHot/css-generator-plugin/blob/master/README.md");e=JSON.parse(ae.readFileSync(me("css.generator.config.json")))}return e}()),a=e}apply(e){e.hooks.afterPlugins.tap("vue-generate-css",()=>{console.time("init Time"),ie(ge()),pe(),console.log("============= init done ============="),console.timeEnd("init Time"),"development"===process.env.NODE_ENV&&function(){const e=l("extNames").join("|");le.watch(ue.resolve(l("dirPath")),{ignored:new RegExp(`^.*\\.(?:(?!(${e})).)+$`),persistent:!0}).on("change",()=>{console.time("reload time"),ie(ge()),pe(),console.log("============= reload done ============="),console.timeEnd("reload time")})}()})}};
>>>>>>> origin/dev
