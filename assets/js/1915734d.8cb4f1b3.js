"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[7877],{87574:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>b,frontMatter:()=>c,metadata:()=>u,toc:()=>m});var s=r(74848),a=r(28453),o=r(11470),l=r(19365),n=(r(13645),r(54027)),i=r(45681);const c={sidebar_position:75},d=void 0,u={id:"Tutorial-Setup/ELRS Custom Telemetry",title:"ELRS Custom Telemetry",description:"Why Custom Telemetry",source:"@site/docs/Tutorial-Setup/ELRS Custom Telemetry.mdx",sourceDirName:"Tutorial-Setup",slug:"/Tutorial-Setup/ELRS Custom Telemetry",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Setup/ELRS Custom Telemetry",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaighin/Rotorflight-Docs/tree/main/docs/Tutorial-Setup/ELRS Custom Telemetry.mdx",tags:[],version:"current",sidebarPosition:75,frontMatter:{sidebar_position:75},sidebar:"tutorialSidebar",previous:{title:"Receiver",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Setup/Receiver"},next:{title:"Failsafe",permalink:"/Rotorflight-Docs/docs/next/Tutorial-Setup/Failsafe"}},h={},m=[{value:"Why Custom Telemetry",id:"why-custom-telemetry",level:2},{value:"EdgeTX",id:"edgetx",level:2},{value:"1. Enable CRSF custom telemetry",id:"1-enable-crsf-custom-telemetry",level:3},{value:"2. Set ELRS Packet rate",id:"2-set-elrs-packet-rate",level:3},{value:"3. Choose Sensors",id:"3-choose-sensors",level:3},{value:"4. Download telemetry LUA Script",id:"4-download-telemetry-lua-script",level:3},{value:"5. Add LUA to SD card",id:"5-add-lua-to-sd-card",level:3},{value:"6. Enable Custom Scripts on Tx",id:"6-enable-custom-scripts-on-tx",level:3},{value:"7. Load Custom Script",id:"7-load-custom-script",level:3},{value:"8. Discover telemetry",id:"8-discover-telemetry",level:3},{value:"ETHOS",id:"ethos",level:2},{value:"1. Enable CRSF custom telemetry",id:"1-enable-crsf-custom-telemetry-1",level:3}];function p(e){const t={a:"a",admonition:"admonition",br:"br",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,a.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h2,{id:"why-custom-telemetry",children:"Why Custom Telemetry"}),"\n",(0,s.jsx)(t.p,{children:"The ELRS (which uses the Crossfire protocol) has a limited array of parameters that can be transferred. Many of these values are not very applicable to a helicopter (as opposed to drones). Other values such as headspeed (quite important for our helicopters) are not available. In Rotorflight 2.0 returning some of our more important parameters back to the Tx was achieved by ELRS Telemetry Re-use however, this was also limited."}),"\n",(0,s.jsx)(t.p,{children:"Custom telemetry has been implemented for ELRS in Rotorflight 2.1. This allows many more sensors that was previously possible with CRSF. Currently there are over 100 sensors to choose from, and a maximum of 40 sensors can be used in total. With the ELRS configurable telemetry ratio, the sensors can be updated up to 20 times per second."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"Note: \u2018Telemetry Reuse\u2019 (from Rotorflight 2) has been removed as it is no longer required"})})}),"\n",(0,s.jsx)(t.admonition,{title:"Please choose to suit your Radio - EdgeTX or ETHOS",type:"info",children:(0,s.jsxs)(o.A,{groupId:"operating-systems",children:[(0,s.jsxs)(l.A,{value:"EdgeTX",label:"EdgeTX",children:[(0,s.jsx)(t.h2,{id:"edgetx",children:"EdgeTX"}),(0,s.jsx)("img",{src:n.A,alt:"EdgeTX",width:"15%"}),(0,s.jsx)(t.h3,{id:"1-enable-crsf-custom-telemetry",children:"1. Enable CRSF custom telemetry"}),(0,s.jsx)(t.p,{children:"To set up ELRS custom telemetry:"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Enable telemetry (This enables telemetry for all receiver types)"}),"\n",(0,s.jsxs)(t.li,{children:["CRSF Custom Telemetry (This enables the ELRS custom)",(0,s.jsx)(t.br,{}),"\n","This is located under the Receiver tab in Rotorflight Configurator."]}),"\n"]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Telemetry Tab",src:r(46206).A+"",width:"867",height:"308"})}),(0,s.jsx)(t.h3,{id:"2-set-elrs-packet-rate",children:"2. Set ELRS Packet rate"}),(0,s.jsx)(t.p,{children:"Set \u2018Telemetry Rate\u2019 to match the \u2018Packet Rate\u2019 you\u2019ve set for ELRS (500 in the example below). Then set \u2018Telemetry Ratio\u2019 to match the \u2018Telem Ratio\u2019 you\u2019ve set in ELRS (32 in the example below). The screenshot below is from Express LRS Lua script\u2019s main screen"}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Telemetry Tab",src:r(31957).A+"",width:"873",height:"495"})}),(0,s.jsx)(t.h3,{id:"3-choose-sensors",children:"3. Choose Sensors"}),(0,s.jsx)(t.p,{children:"Next, select the sensors you want enabled. Each added sensor can be dragged up and down to change their order. You can freely choose whatever parameters you wish to be visible on your transmitter."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Telemetry Tab",src:r(96044).A+"",width:"864",height:"1011"})}),(0,s.jsx)(t.h3,{id:"4-download-telemetry-lua-script",children:"4. Download telemetry LUA Script"}),(0,s.jsx)(t.p,{children:"NOTE! Lua script is required for Custom Telemetry\nCustom telemetry requires the radio to run a telemetry Lua script in the background. You need to install all the Lua scripts coming with the release, and then enable rf2tlm.lua as a \u2018Custom Script\u2019 in your EdgeTx model. The steps below explain how to to this and discover the newly added sensors on your EdgeTx radio."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.a,{href:"https://github.com/rotorflight/rotorflight-lua-scripts/releases",children:(0,s.jsx)(t.strong,{children:"Download the latest Lua script HERE"})})}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Telemetry Tab",src:r(72291).A+"",width:"940",height:"127"})}),(0,s.jsx)(t.h3,{id:"5-add-lua-to-sd-card",children:"5. Add LUA to SD card"}),(0,s.jsxs)(t.ol,{start:"2",children:["\n",(0,s.jsx)(t.li,{children:"Copy the \u2018Script\u2019 folder from the zip file into your EdgeTx radio\u2019s SD card (root directory). There will be a Scripts folder already in your SD card. You can safely overwrite any existing files. (Note: As with any upgrades, ensure you have already backed up your SD card in case anything goes wrong)\nContents of the zip file:"}),"\n"]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Telemetry Tab",src:r(8186).A+"",width:"642",height:"143"})}),(0,s.jsxs)(t.p,{children:["Contents of your SD card should look something like this:",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.img,{alt:"Telemetry Tab",src:r(29297).A+"",width:"437",height:"670"})]}),(0,s.jsx)(t.h3,{id:"6-enable-custom-scripts-on-tx",children:"6. Enable Custom Scripts on Tx"}),(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["From the ",(0,s.jsx)(t.strong,{children:"Model Setup"})," tab select ",(0,s.jsx)(t.strong,{children:"Enabled Features"})," and enable ",(0,s.jsx)(t.strong,{children:"Custom Scripts"}),"."]}),"\n"]}),(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"If this is not visible on your radio you will have to Update your Version of EdgeTX."})}),"  ",(0,s.jsx)(t.a,{href:"https://edgetx.org/getedgetx/",children:"Update your EdgeTX firmware"})]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Telemetry Tab",src:r(19080).A+"",width:"649",height:"556"})}),(0,s.jsx)(t.h3,{id:"7-load-custom-script",children:"7. Load Custom Script"}),(0,s.jsx)(t.p,{children:"Still on your EdgeTx radio, navigate to Model settings -> Custom Scripts page. Long press on the first spare  and create a new custom script as below for rf2tlm.lua. You can give it any name you like."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Telemetry Tab",src:r(48927).A+"",width:"649",height:"556"})}),(0,s.jsx)(t.h3,{id:"8-discover-telemetry",children:"8. Discover telemetry"}),(0,s.jsxs)(t.p,{children:["Finally, on your EdgeTx radio, navigate to Model settings -> Telemetry page and ",(0,s.jsx)(t.strong,{children:"Delete All"})," sensors that you may have previously discovered. Then ",(0,s.jsx)(t.strong,{children:"Discover New"})," sensors",(0,s.jsx)(t.br,{}),"\n",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.strong,{children:"note - ensure your helicopter is powered up for sensors to be discovered"})})]}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Telemetry Tab",src:r(51990).A+"",width:"649",height:"556"})})]}),(0,s.jsxs)(l.A,{value:"ETHOS",label:"ETHOS",children:[(0,s.jsx)(t.h2,{id:"ethos",children:"ETHOS"}),(0,s.jsx)("img",{src:i.A,alt:"ETHOS",width:"40%",c:!0}),(0,s.jsx)(t.h3,{id:"1-enable-crsf-custom-telemetry-1",children:"1. Enable CRSF custom telemetry"}),(0,s.jsx)(t.p,{children:"To set up ELRS custom telemetry, first enable telemetry and CRSF Custom Telemetry for telemetry stream to be sent to your radio. This is located under the Receiver tab in Rotorflight Configurator."}),(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Telemetry Tab",src:r(46206).A+"",width:"867",height:"308"})})]})]})})]})}function b(e={}){const{wrapper:t}={...(0,a.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(p,{...e})}):p(e)}},19365:(e,t,r)=>{r.d(t,{A:()=>l});r(96540);var s=r(18215);const a={tabItem:"tabItem_Ymn6"};var o=r(74848);function l(e){let{children:t,hidden:r,className:l}=e;return(0,o.jsx)("div",{role:"tabpanel",className:(0,s.A)(a.tabItem,l),hidden:r,children:t})}},11470:(e,t,r)=>{r.d(t,{A:()=>j});var s=r(96540),a=r(18215),o=r(23104),l=r(56347),n=r(205),i=r(57485),c=r(31682),d=r(70679);function u(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,s.useMemo)((()=>{const e=t??function(e){return u(e).map((e=>{let{props:{value:t,label:r,attributes:s,default:a}}=e;return{value:t,label:r,attributes:s,default:a}}))}(r);return function(e){const t=(0,c.XI)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.W6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i.aZ)(o),(0,s.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=h(e),[l,i]=(0,s.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const s=r.find((e=>e.default))??r[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:t,tabValues:o}))),[c,u]=p({queryString:r,groupId:a}),[b,f]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,d.Dv)(r);return[a,(0,s.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),g=(()=>{const e=c??b;return m({value:e,tabValues:o})?e:null})();(0,n.A)((()=>{g&&i(g)}),[g]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),f(e)}),[u,f,o]),tabValues:o}}var f=r(92303);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var y=r(74848);function x(e){let{className:t,block:r,selectedValue:s,selectValue:l,tabValues:n}=e;const i=[],{blockElementScrollPositionUntilNextRender:c}=(0,o.a_)(),d=e=>{const t=e.currentTarget,r=i.indexOf(t),a=n[r].value;a!==s&&(c(t),l(a))},u=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=i.indexOf(e.currentTarget)+1;t=i[r]??i[0];break}case"ArrowLeft":{const r=i.indexOf(e.currentTarget)-1;t=i[r]??i[i.length-1];break}}t?.focus()};return(0,y.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.A)("tabs",{"tabs--block":r},t),children:n.map((e=>{let{value:t,label:r,attributes:o}=e;return(0,y.jsx)("li",{role:"tab",tabIndex:s===t?0:-1,"aria-selected":s===t,ref:e=>i.push(e),onKeyDown:u,onClick:d,...o,className:(0,a.A)("tabs__item",g.tabItem,o?.className,{"tabs__item--active":s===t}),children:r??t},t)}))})}function v(e){let{lazy:t,children:r,selectedValue:o}=e;const l=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=l.find((e=>e.props.value===o));return e?(0,s.cloneElement)(e,{className:(0,a.A)("margin-top--md",e.props.className)}):null}return(0,y.jsx)("div",{className:"margin-top--md",children:l.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==o})))})}function T(e){const t=b(e);return(0,y.jsxs)("div",{className:(0,a.A)("tabs-container",g.tabList),children:[(0,y.jsx)(x,{...t,...e}),(0,y.jsx)(v,{...t,...e})]})}function j(e){const t=(0,f.A)();return(0,y.jsx)(T,{...e,children:u(e.children)},String(t))}},13645:()=>{},54027:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/edgetx-logo-4a31de63bb29c6ec264fc50a3a50bab5.png"},45681:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/ethos-logo-d565893f83fdd83bfa36d6df15aad088.png"},46206:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-1-1c4cf7a2b8890320af7bf7271ff83027.png"},31957:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-2-0f49e80a6b4d39a924fc28d0f0eebfb8.png"},96044:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-3-e09a90ba674e2e9b13f41c1fb885b5b2.png"},72291:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-4-83b9a3e13e7b5a444c16ddbc2912bfad.png"},8186:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-5-18931fb2f051b80ab6c163f89fca9b31.png"},29297:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-6-83edba50c2d03f072e3bca8c3d64ed2f.png"},19080:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-7-f8f9f3cb4d38941b4e1957c5de6d62bc.png"},48927:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-8-234ab348d3f75c1aba18ae59109f0e94.png"},51990:(e,t,r)=>{r.d(t,{A:()=>s});const s=r.p+"assets/images/telemetry-9-31e440493060160ecb3dd82ee054808b.png"},28453:(e,t,r)=>{r.d(t,{R:()=>l,x:()=>n});var s=r(96540);const a={},o=s.createContext(a);function l(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);