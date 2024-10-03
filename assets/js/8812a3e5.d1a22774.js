"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[4932],{91507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>c,default:()=>p,frontMatter:()=>d,metadata:()=>u,toc:()=>g});var i=r(74848),a=r(28453),o=r(11470),n=r(19365),s=(r(13645),r(54027)),l=r(45681);const d={sidebar_position:115},c=void 0,u={id:"Tutorial-Setup/ESC Forward Programming",title:"ESC Forward Programming",description:"Forward programming enables the connected ESC to be programmed via your transmitter rather than requiring a vendor programming box.",source:"@site/docs/Tutorial-Setup/ESC Forward Programming.mdx",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/ESC Forward Programming",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Setup/ESC Forward Programming",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaighin/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/ESC Forward Programming.mdx",tags:[],version:"current",sidebarPosition:115,frontMatter:{sidebar_position:115},sidebar:"tutorialSidebar",previous:{title:"Servos",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Setup/Servos"},next:{title:"Mixer",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Setup/Mixer"}},h={},g=[{value:"Configure the Flight controller",id:"configure-the-flight-controller",level:2},{value:"Set the UART",id:"set-the-uart",level:3},{value:"ESC telemetry protocol",id:"esc-telemetry-protocol",level:3},{value:"One Wire Communication (half-duplex)",id:"one-wire-communication-half-duplex",level:3},{value:"Pin Swap",id:"pin-swap",level:3},{value:"Option 1",id:"option-1",level:4},{value:"Option 2",id:"option-2",level:4},{value:"Setup the LUA scripts",id:"setup-the-lua-scripts",level:2},{value:"EdgeTX",id:"edgetx",level:2},{value:"Load LUA scripts onto radio",id:"load-lua-scripts-onto-radio",level:3},{value:"Choose the connected ESC",id:"choose-the-connected-esc",level:3},{value:"Make your changes",id:"make-your-changes",level:3},{value:"Page 1",id:"page-1",level:4},{value:"Page 2",id:"page-2",level:4},{value:"Page 3",id:"page-3",level:4},{value:"Page 4",id:"page-4",level:4},{value:"ETHOS",id:"ethos",level:2},{value:"Hardware",id:"hardware",level:3},{value:"Esc Type",id:"esc-type",level:3},{value:"Basic/Advanced/Other",id:"basicadvancedother",level:3}];function m(e){const t={admonition:"admonition",br:"br",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.p,{children:"Forward programming enables the connected ESC to be programmed via your transmitter rather than requiring a vendor programming box."}),"\n",(0,i.jsx)(t.p,{children:"A number of ESC vendor/models have forward programming support from the transmitter via Rotorflight\u2019s Lua script. The ESCs currently supported are:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Hobbywing Platinum V5"}),"\n",(0,i.jsx)(t.li,{children:"Scorpion Tribunus"}),"\n",(0,i.jsx)(t.li,{children:"YGE"}),"\n",(0,i.jsx)(t.li,{children:"Flyrotor"}),"\n",(0,i.jsx)(t.li,{children:"ZTW"}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"configure-the-flight-controller",children:"Configure the Flight controller"}),"\n",(0,i.jsx)(t.h3,{id:"set-the-uart",children:"Set the UART"}),"\n",(0,i.jsx)(t.p,{children:"Enable the UART port for ESC telemetry on the Configuration Tab."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Forward Programming",src:r(28105).A+"",width:"803",height:"225"})}),"\n",(0,i.jsx)(t.h3,{id:"esc-telemetry-protocol",children:"ESC telemetry protocol"}),"\n",(0,i.jsx)(t.p,{children:"Select one of the ESCs above that support Forward Programming. Enter this in the ESC telemetry protocol"}),"\n",(0,i.jsx)(t.h3,{id:"one-wire-communication-half-duplex",children:"One Wire Communication (half-duplex)"}),"\n",(0,i.jsx)(t.p,{children:"Most ESCs have a single telemetry wire. This is used to transmit telemtry information from the ESC to the flight controller. For forward programming functionality, this wire also need's to transmit information from the Flight controller to the ESC. By enabling the half-duplex bi-irectional communictions are enabled."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Forward Programming",src:r(46859).A+"",width:"855",height:"309"})}),"\n",(0,i.jsx)(t.h3,{id:"pin-swap",children:"Pin Swap"}),"\n",(0,i.jsx)(t.p,{children:"For standard ESC telemetry we need to connect to a UART RX (receive) pin; however, as we are using bi-directional communication this will require the telemetry wire being connected to the UART TX (transmit) pin."}),"\n",(0,i.jsx)(t.h4,{id:"option-1",children:"Option 1"}),"\n",(0,i.jsxs)(t.p,{children:["Wire the ESC telemetry to any spare ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"UART TX"})})," pin on the flight controller. If we are using a TX pin then Pin-swap remains off."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Forward Programming",src:r(55616).A+"",width:"701",height:"59"})}),"\n",(0,i.jsx)(t.h4,{id:"option-2",children:"Option 2"}),"\n",(0,i.jsxs)(t.p,{children:["Wire the ESC telemetry to the FC ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"UART RX"})}),". This may be desirable if you wish to use the ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"SBUS"})})," or ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"DSM"})})," ports (which are RX) or do not wish to solder or change connectors."]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Forward Programming",src:r(82356).A+"",width:"701",height:"59"})}),"\n",(0,i.jsx)(t.h2,{id:"setup-the-lua-scripts",children:"Setup the LUA scripts"}),"\n",(0,i.jsx)(t.admonition,{title:"Please choose to suit your Radio - EdgeTX or ETHOS",type:"info",children:(0,i.jsxs)(o.A,{groupId:"operating-systems",children:[(0,i.jsxs)(n.A,{value:"EdgeTX",label:"EdgeTX",children:[(0,i.jsx)(t.h2,{id:"edgetx",children:"EdgeTX"}),(0,i.jsx)("img",{src:s.A,alt:"EdgeTX",width:"12%"}),(0,i.jsx)(t.h3,{id:"load-lua-scripts-onto-radio",children:"Load LUA scripts onto radio"}),(0,i.jsxs)(t.p,{children:["Ensure the latest version of Lua script is installed on your radio\u2019s SD card.",(0,i.jsx)(t.br,{}),"\n","To access ESC Forward Programming, run the Rotorflight lua script on your transmitter by pressing the \u2018Sys\u2019 button on your radio and selecting \u2018Rotorflight 2\u2019 (under Tools). Ensure the FBL and ESC are powered up (in most cases, the battery pack will need to be connected to the ESC)."]}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Forward Programming",src:r(29754).A+"",width:"906",height:"513"})}),(0,i.jsx)(t.h3,{id:"choose-the-connected-esc",children:"Choose the connected ESC"}),(0,i.jsxs)(t.p,{children:["Scroll down to the bottom of the page and select the ESC you have in your Helicopter (will match the ESC Teleemetry Protocol set in the FC).",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.img,{alt:"Forward Programming",src:r(59921).A+"",width:"907",height:"514"})]}),(0,i.jsx)(t.h3,{id:"make-your-changes",children:"Make your changes"}),(0,i.jsx)(t.h4,{id:"page-1",children:"Page 1"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Forward Programming",src:r(62056).A+"",width:"930",height:"527"})}),(0,i.jsx)(t.h4,{id:"page-2",children:"Page 2"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Forward Programming",src:r(37223).A+"",width:"932",height:"528"})}),(0,i.jsx)(t.h4,{id:"page-3",children:"Page 3"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Forward Programming",src:r(18910).A+"",width:"934",height:"529"})}),(0,i.jsx)(t.h4,{id:"page-4",children:"Page 4"}),(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Forward Programming",src:r(86261).A+"",width:"935",height:"530"})})]}),(0,i.jsxs)(n.A,{value:"ETHOS",label:"ETHOS",children:[(0,i.jsx)(t.h2,{id:"ethos",children:"ETHOS"}),(0,i.jsx)("img",{src:l.A,alt:"ETHOS",width:"30%",c:!0}),(0,i.jsx)(t.h3,{id:"hardware",children:"Hardware"}),(0,i.jsxs)(t.p,{children:["From the Hardware section select ESC.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.img,{alt:"Forward Programming",src:r(83592).A+"",width:"800",height:"480"})]}),(0,i.jsx)(t.h3,{id:"esc-type",children:"Esc Type"}),(0,i.jsxs)(t.p,{children:["Choose your ESC.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.img,{alt:"Forward Programming",src:r(45571).A+"",width:"800",height:"480"})]}),(0,i.jsx)(t.h3,{id:"basicadvancedother",children:"Basic/Advanced/Other"}),(0,i.jsxs)(t.p,{children:["Different parameters are available in the Basic/Advanced/Other sections.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.img,{alt:"Forward Programming",src:r(55738).A+"",width:"800",height:"480"})]}),(0,i.jsxs)(t.p,{children:["Change your settings as required.",(0,i.jsx)(t.br,{}),"\n",(0,i.jsx)(t.img,{alt:"Forward Programming",src:r(7797).A+"",width:"800",height:"480"})]})]})]})})]})}function p(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>n});r(96540);var i=r(18215);const a={tabItem:"tabItem_Ymn6"};var o=r(74848);function n(e){let{children:t,hidden:r,className:n}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,i.A)(a.tabItem,n),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>w});var i=r(96540),a=r(18215),o=r(23104),n=r(56347),s=r(205),l=r(57485),d=r(31682),c=r(70679);function u(e){return i.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,i.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:i,default:a}}=e;return{value:t,label:r,attributes:i,default:a}}))}(r);return function(e){const t=(0,d.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function g(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:r}=e;const a=(0,n.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,l.aZ)(o),(0,i.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function p(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=h(e),[n,l]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!g({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const i=r.find((e=>e.default))??r[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:t,tabValues:o}))),[d,u]=m({queryString:r,groupId:a}),[p,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,c.Dv)(r);return[a,(0,i.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),b=(()=>{const e=d??p;return g({value:e,tabValues:o})?e:null})();(0,s.A)((()=>{b&&l(b)}),[b]);return{selectedValue:n,selectValue:(0,i.useCallback)((e=>{if(!g({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=r(92303);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=r(74848);function v(e){let{className:t,block:r,selectedValue:i,selectValue:n,tabValues:s}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,o.a_)(),c=e=>{const t=e.currentTarget,r=l.indexOf(t),a=s[r].value;a!==i&&(d(t),n(a))},u=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=l.indexOf(e.currentTarget)+1;t=l[r]??l[0];break}case"ArrowLeft":{const r=l.indexOf(e.currentTarget)-1;t=l[r]??l[l.length-1];break}}t?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:s.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,ref:e=>l.push(e),onKeyDown:u,onClick:c,...o,className:(0,a.A)("tabs__item",b.tabItem,o?.className,{"tabs__item--active":i===t}),children:r??t},t)}))})}function E(e){let{lazy:t,children:r,selectedValue:o}=e;const n=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===o));return e?(0,i.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:n.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function I(e){const t=p(e);return(0,x.jsxs)("div",{className:(0,a.A)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...t,...e}),(0,x.jsx)(E,{...t,...e})]})}function w(e){const t=(0,f.A)();return(0,x.jsx)(I,{...e,children:u(e.children)},String(t))}},13645:()=>{},54027:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/edgetx-logo-4a31de63bb29c6ec264fc50a3a50bab5.png"},45681:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/ethos-logo-d565893f83fdd83bfa36d6df15aad088.png"},83592:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/ethos-1-ff6bef877211b3faf436ba57d9c67383.png"},45571:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/ethos-2-7633af56ebd3a7cc3e176ec71f7df264.png"},55738:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/ethos-3-e05a9a36a8b4cc7a770a4adda89b7bc8.png"},7797:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/ethos-4-c6975253a6de17decbd58417a8bd7cf6.png"},46859:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/forward-duplex-bcea0efff83e68604a46cca094ae9e6f.png"},29754:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/forward-etx-1-037ddbc2e74de17a6290c3eba9d919b4.png"},59921:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/forward-etx-2-37f20311a160f2b3d62abefc483f4a70.png"},62056:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/forward-etx-3-371207db1a660da238572f1be1323e8a.png"},37223:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/forward-etx-4-6879b33de3564b639cbd7b5029eb57fb.png"},18910:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/forward-etx-5-85a413b463f9699d270f077bff51f817.png"},86261:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/forward-etx-6-4c3cbcdb11f2822b2df79cb417a6de6b.png"},55616:(e,t,r)=>{r.d(t,{A:()=>i});const i="data:image/png;base64,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"},82356:(e,t,r)=>{r.d(t,{A:()=>i});const i="data:image/png;base64,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"},28105:(e,t,r)=>{r.d(t,{A:()=>i});const i=r.p+"assets/images/forward-uart-17c9ab716c7d217585d4376c437737e6.png"},28453:(e,t,r)=>{r.d(t,{R:()=>n,x:()=>s});var i=r(96540);const a={},o=i.createContext(a);function n(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:n(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);