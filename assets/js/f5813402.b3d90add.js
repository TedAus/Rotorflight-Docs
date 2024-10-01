"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[1666],{99080:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(74848),s=i(28453);const r={sidebar_position:50},a="Matek G474Heli",o={id:"Controllers/matek_heli",title:"Matek G474Heli",description:"Matek G474HELI",source:"@site/docs/Controllers/matek_heli.md",sourceDirName:"Controllers",slug:"/Controllers/matek_heli",permalink:"/docs/next/Controllers/matek_heli",draft:!1,unlisted:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Controllers/matek_heli.md",tags:[],version:"current",sidebarPosition:50,frontMatter:{sidebar_position:50},sidebar:"ControllerSidebar",previous:{title:"Flywing Heli405",permalink:"/docs/next/Controllers/flywingf405heli"},next:{title:"Matek G474-HLite",permalink:"/docs/next/Controllers/matek_hlite"}},l={},d=[{value:"Hardware Specifications\uff1a",id:"hardware-specifications",level:3},{value:"Rotorflight Target",id:"rotorflight-target",level:3},{value:"Wiring",id:"wiring",level:3},{value:"UART ports",id:"uart-ports",level:3},{value:"Onboard BEC",id:"onboard-bec",level:3},{value:"Manuals",id:"manuals",level:3}];function c(e){const t={a:"a",admonition:"admonition",br:"br",h1:"h1",h3:"h3",header:"header",img:"img",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.header,{children:(0,n.jsx)(t.h1,{id:"matek-g474heli",children:"Matek G474Heli"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Matek G474HELI",src:i(86507).A+"",width:"1500",height:"1102"})}),"\n",(0,n.jsxs)(t.admonition,{title:"Specifications",type:"info",children:[(0,n.jsx)(t.h3,{id:"hardware-specifications",children:"Hardware Specifications\uff1a"}),(0,n.jsxs)(t.p,{children:["MCU: STM32G474CE",(0,n.jsx)(t.br,{}),"\n","IMU: ICM42688-P",(0,n.jsx)(t.br,{}),"\n","Black Box: W25N01G (128MB)",(0,n.jsx)(t.br,{}),"\n","Baro: SPL06 (I2C2\uff09",(0,n.jsx)(t.br,{}),"\n","LED: LED_STRIP port",(0,n.jsx)(t.br,{}),"\n","Beeper: Buzzer output",(0,n.jsx)(t.br,{}),"\n","USB: Type-C",(0,n.jsx)(t.br,{}),"\n","UARTS: UART1, UART2\uff0cUART3",(0,n.jsx)(t.br,{}),"\n","I2C: I2C1",(0,n.jsx)(t.br,{}),"\n","ADC: Battery measurement VBat 2-6s (5.4-30v)\nServo Pins: CH1-CH4",(0,n.jsx)(t.br,{}),"\n","Motor Pins: M1, M2",(0,n.jsx)(t.br,{}),"\n","RPM Inputs: RPM Frequency input",(0,n.jsx)(t.br,{}),"\n","Onboard BEC: 5 or 7.2v selectable (disable using bridge if using external BEC)",(0,n.jsx)(t.br,{}),"\n","Dimensions: 38mm x 26mm x 13mm",(0,n.jsx)(t.br,{}),"\n","Weight: 15g"]})]}),"\n",(0,n.jsx)(t.h3,{id:"rotorflight-target",children:"Rotorflight Target"}),"\n",(0,n.jsx)(t.p,{children:"When updating Rotorflight firmware. Please use the MATEKG474HELI target."}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Matek G474Heli Target",src:i(56036).A+"",width:"734",height:"253"})}),"\n",(0,n.jsx)(t.h3,{id:"wiring",children:"Wiring"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"Wiring Diagram",src:i(65317).A+"",width:"1500",height:"1903"})}),"\n",(0,n.jsx)(t.h3,{id:"uart-ports",children:"UART ports"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"UARTS",src:i(3507).A+"",width:"809",height:"235"})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"UARTS",src:i(61592).A+"",width:"919",height:"552"})}),"\n",(0,n.jsx)(t.h3,{id:"onboard-bec",children:"Onboard BEC"}),"\n",(0,n.jsx)(t.p,{children:"The Matec G474Heli contains a 5A-8A peak, Variable voltage (5v or 7.2v) BEC to supply the servos. The BEC will supply 5v by default and 7.2 v when the solder bridge is connected. THis is powered by the VBat connection."}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"If using an external BEC the internal BEC MUST be disabled via the [Vx Off] solder bridge."})}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"BEC",src:i(15846).A+"",width:"900",height:"457"})}),"\n",(0,n.jsx)(t.h3,{id:"manuals",children:"Manuals"}),"\n",(0,n.jsxs)(t.p,{children:["Detail specifications and doccumentation available at the Matek website.",(0,n.jsx)(t.br,{}),"\n",(0,n.jsx)(t.a,{href:"https://www.mateksys.com/?portfolio=g474-heli",children:"Matek G474-HELI website"})]})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},56036:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/g474-target-66d10567a28b3492d5ce025e81735eb6.png"},65317:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/g474-wiring-bc40e48b2da022a88838bea287ec5b97.jpg"},86507:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/matek-g474-6ee4a56052ce7a151c2a3064406b2147.png"},15846:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/mt-bec-aae2120379facd3839f1133dbdeda8ee.png"},61592:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/mt-ports-fba5f20a070078014ca4793ae7879158.png"},3507:(e,t,i)=>{i.d(t,{A:()=>n});const n=i.p+"assets/images/mt-uarts-94be99f37528279566a1d4e5c025e168.png"},28453:(e,t,i)=>{i.d(t,{R:()=>a,x:()=>o});var n=i(96540);const s={},r=n.createContext(s);function a(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);