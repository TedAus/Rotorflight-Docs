"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[8385],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),s=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),h=n,f=m["".concat(p,".").concat(h)]||m[h]||c[h]||o;return r?a.createElement(f,l(l({ref:t},u),{},{components:r})):a.createElement(f,l({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,l=new Array(o);l[0]=h;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:n,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},7430:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=r(7462),n=(r(7294),r(3905));const o={title:"snapshot 2.0.0-20230417",authors:{name:"Rotorflight",image_url:"https://github.com/rotorflight.png"}},l=void 0,i={permalink:"/announcement/snapshot 2.0.0-20230417",source:"@site/announcement/snapshot 2.0.0-20230417.md",title:"snapshot 2.0.0-20230417",description:"Rotorflight snapshot 2.0.0-20230417 is ready",date:"2023-09-27T12:18:36.000Z",formattedDate:"September 27, 2023",tags:[],readingTime:.96,hasTruncateMarker:!1,authors:[{name:"Rotorflight",image_url:"https://github.com/rotorflight.png",imageURL:"https://github.com/rotorflight.png"}],frontMatter:{title:"snapshot 2.0.0-20230417",authors:{name:"Rotorflight",image_url:"https://github.com/rotorflight.png",imageURL:"https://github.com/rotorflight.png"}},prevItem:{title:"snapshot 2.0.0-20230401",permalink:"/announcement/snapshot 2.0.0-20230401"},nextItem:{title:"snapshot 2.0.0-20230508",permalink:"/announcement/snapshot 2.0.0-20230508"}},p={authorsImageUrls:[void 0]},s=[],u={toc:s},m="wrapper";function c(e){let{components:t,...r}=e;return(0,n.kt)(m,(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Rotorflight snapshot 2.0.0-20230417 is ready\nNOTE! This snapshot is not suitable for end-users. It is intended for beta-testers."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Configurator is available to download ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rotorflight/rotorflight-configurator/releases/tag/snapshot%2F2.0.0-20230417"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},"The Blackbox is available to download ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rotorflight/rotorflight-blackbox/releases/tag/snapshot%2F2.0.0-20230417"},"here"),"."),(0,n.kt)("li",{parentName:"ul"},"The LUA scripts is available to download ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/rotorflight/rotorflight-lua-scripts/releases/tag/snapshot%2F2.0.0-20230510"},"here"),".")),(0,n.kt)("p",null,"Please also read the Snapshots Wiki page for general information about snapshots."),(0,n.kt)("p",null,"Changes to the firmware:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add throttle command to BlackBox log"),(0,n.kt)("li",{parentName:"ul"},"Add crsf_flight_mode_reuse parameter"),(0,n.kt)("li",{parentName:"ul"},"Fix Horizon mode gain"),(0,n.kt)("li",{parentName:"ul"},"Fix Error Rotation (piro compensation)"),(0,n.kt)("li",{parentName:"ul"},"Fix MIXER MSP format (trims + swash phase)"),(0,n.kt)("li",{parentName:"ul"},"Refactor Custom Defaults handling"),(0,n.kt)("li",{parentName:"ul"},"Refactor Altitude fusion"),(0,n.kt)("li",{parentName:"ul"},"Simplify PID Mode#2"),(0,n.kt)("li",{parentName:"ul"},"Improve PID parameter defaults"),(0,n.kt)("li",{parentName:"ul"},"Improve Gyro filter parameter defaults")),(0,n.kt)("p",null,"Changes to the Configurator:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Fix Receiver tab Model Preview"),(0,n.kt)("li",{parentName:"ul"},"Add Zoom function on Ctrl-Wheel"),(0,n.kt)("li",{parentName:"ul"},"Refactor Custom Defaults handling"),(0,n.kt)("li",{parentName:"ul"},"Fix Blackbox Log field selection"),(0,n.kt)("li",{parentName:"ul"},"Fix MSP_MIXER_CONFIG parameters"),(0,n.kt)("li",{parentName:"ul"},"Fix Gyro & PID loop speed calculation")),(0,n.kt)("p",null,"Changes to the BlackBox:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Update Flight Mode flags"),(0,n.kt)("li",{parentName:"ul"},"Update Feature flags"),(0,n.kt)("li",{parentName:"ul"},"Update Field names"),(0,n.kt)("li",{parentName:"ul"},"Update Field value presentations"),(0,n.kt)("li",{parentName:"ul"},"Update enabled fields handling"),(0,n.kt)("li",{parentName:"ul"},"Remove broken Heading estimation"),(0,n.kt)("li",{parentName:"ul"},"Clean up whitespace in the code")))}c.isMDXComponent=!0}}]);