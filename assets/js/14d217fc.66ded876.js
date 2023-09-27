"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[9927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(r),d=n,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||o;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9552:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=r(7462),n=(r(7294),r(3905));const o={title:"snapshot 2.0.0-20230628",authors:{name:"Rotorflight",image_url:"https://github.com/rotorflight.png"}},l=void 0,i={permalink:"/announcement/snapshot 2.0.0-20230628",source:"@site/announcement/snapshot 2.0.0-20230628.md",title:"snapshot 2.0.0-20230628",description:"Rotorflight snapshot 2.0.0-20230628 is ready",date:"2023-09-27T12:18:36.000Z",formattedDate:"September 27, 2023",tags:[],readingTime:1.05,hasTruncateMarker:!1,authors:[{name:"Rotorflight",image_url:"https://github.com/rotorflight.png",imageURL:"https://github.com/rotorflight.png"}],frontMatter:{title:"snapshot 2.0.0-20230628",authors:{name:"Rotorflight",image_url:"https://github.com/rotorflight.png",imageURL:"https://github.com/rotorflight.png"}},prevItem:{title:"snapshot 2.0.0-20230602",permalink:"/announcement/snapshot 2.0.0-20230602"},nextItem:{title:"snapshot 2.0.0-20230724",permalink:"/announcement/snapshot 2.0.0-20230724"}},s={authorsImageUrls:[void 0]},p=[],u={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,n.kt)(c,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Rotorflight snapshot 2.0.0-20230628 is ready\nNOTE! This snapshot is not suitable for end-users. It is intended for beta-testers."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Configurator is available to download ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20230628"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},"The Blackbox is available to download ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rotorflight/rotorflight-blackbox/releases/tag/snapshot%2F2.0.0-20230628"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},"The LUA scripts is available to download ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20230628"},"here"),".")),(0,n.kt)("p",null,"Please also read the Snapshots Wiki page for general information about snapshots."),(0,n.kt)("p",null,"Changes to the firmware:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Servo twitch at reboot fixed"),(0,n.kt)("li",{parentName:"ul"},"OMP Hobby ESC telemetry protocol added"),(0,n.kt)("li",{parentName:"ul"},"HobbyWing ESC telemetry fixed"),(0,n.kt)("li",{parentName:"ul"},"ESC telemetry debug refactored"),(0,n.kt)("li",{parentName:"ul"},"ESC telemetry stream collection support added"),(0,n.kt)("li",{parentName:"ul"},"BLACKBOX_ERASE mode fixed"),(0,n.kt)("li",{parentName:"ul"},"Error decay (I-term decay) parameter added for cyclic and yaw"),(0,n.kt)("li",{parentName:"ul"},"Collective to Yaw precompensation refactored"),(0,n.kt)("li",{parentName:"ul"},"Unsynced motor update rate limits refactored"),(0,n.kt)("li",{parentName:"ul"},"MSP message fixes")),(0,n.kt)("p",null,"Changes to the Configurator:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rates Smoothness added to Rates tab"),(0,n.kt)("li",{parentName:"ul"},"Collective added to Rates tab"),(0,n.kt)("li",{parentName:"ul"},"ESC Debug modes fixed"),(0,n.kt)("li",{parentName:"ul"},"ESC sensor fixed in Power tab"),(0,n.kt)("li",{parentName:"ul"},"Receiver tab and support refactored"),(0,n.kt)("li",{parentName:"ul"},"Unsynced PWM rate handling fixed"),(0,n.kt)("li",{parentName:"ul"},"MSP messages aligned with new firmware"),(0,n.kt)("li",{parentName:"ul"},"Localization disabled until translations done")),(0,n.kt)("p",null,"Changes to the Blackbox:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"ESC Sensor debug fixed"),(0,n.kt)("li",{parentName:"ul"},"Custom event types added")),(0,n.kt)("p",null,"Changes to the LUA Scripts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Support for rates smoothness added"),(0,n.kt)("li",{parentName:"ul"},"Support for error decay added"),(0,n.kt)("li",{parentName:"ul"},"Filter support fixed")))}m.isMDXComponent=!0}}]);