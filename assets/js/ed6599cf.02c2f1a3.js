"use strict";(self.webpackChunkrotorflight_docs=self.webpackChunkrotorflight_docs||[]).push([[14],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>k});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),u=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=u(n),d=r,k=c["".concat(p,".").concat(d)]||c[d]||m[d]||i;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},89919:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:9},l="Rotorflight Generic Radio Setup",o={unversionedId:"Tutorial-Walkthroughs/Rotorflight-Generic-Radio-Setup",id:"Tutorial-Walkthroughs/Rotorflight-Generic-Radio-Setup",title:"Rotorflight Generic Radio Setup",description:"Channels Arrangement",source:"@site/docs/Tutorial-Walkthroughs/Rotorflight-Generic-Radio-Setup.md",sourceDirName:"Tutorial-Walkthroughs",slug:"/Tutorial-Walkthroughs/Rotorflight-Generic-Radio-Setup",permalink:"/docs/Tutorial-Walkthroughs/Rotorflight-Generic-Radio-Setup",draft:!1,editUrl:"https://github.com/pkaig/Rotorflight-Docs/tree/main/docs/Tutorial-Walkthroughs/Rotorflight-Generic-Radio-Setup.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9},sidebar:"tutorialSidebar",previous:{title:"OpenLog and OpenLager",permalink:"/docs/Tutorial-Walkthroughs/OpenLog-OpenLager"}},p={},u=[{value:"Channels Arrangement",id:"channels-arrangement",level:2},{value:"Radio Setup",id:"radio-setup",level:2},{value:"Radio Inputs Page Setup",id:"radio-inputs-page-setup",level:3},{value:"Radio Mixer Page Setup",id:"radio-mixer-page-setup",level:3},{value:"Rotorflight Setup",id:"rotorflight-setup",level:2},{value:"Arming Setup",id:"arming-setup",level:3},{value:"Profile Switching Setup",id:"profile-switching-setup",level:3},{value:"Rescue Setup",id:"rescue-setup",level:3},{value:"Blackbox Setup",id:"blackbox-setup",level:3},{value:"Buffer Pack Setup",id:"buffer-pack-setup",level:3},{value:"In-Flight Profile Parameters Setup",id:"in-flight-profile-parameters-setup",level:3}],s={toc:u},c="wrapper";function m(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},s,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"rotorflight-generic-radio-setup"},"Rotorflight Generic Radio Setup"),(0,r.kt)("h2",{id:"channels-arrangement"},"Channels Arrangement"),(0,r.kt)("p",null,"This walkthrough will guide through to create a basic radio model for rotorflight controller."),(0,r.kt)("p",null,"This is a guide for EdgeTx/OpenTx radios, it will work with both ELRS and F.port receivers."),(0,r.kt)("p",null,"The Channel order is AECR1T23 which required by ELRS receiver, but it will also works for F.Port, SBUS, and others."),(0,r.kt)("p",null,"The Rotorflight basic operation will require 6 channels, but this is for basic operation only, additional channels will be required for other options, such as profile switching, Rescue, etc."),(0,r.kt)("p",null,"This following radio model uses 12 channels to get the best of Rotorflight options, the user can add or delete channels depending on his specific application, and required features."),(0,r.kt)("p",null,"These channels are configured as follows:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Channel #"),(0,r.kt)("th",{parentName:"tr",align:null},"Function"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CH1"),(0,r.kt)("td",{parentName:"tr",align:null},"Aileron")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CH2"),(0,r.kt)("td",{parentName:"tr",align:null},"Elevator")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CH3"),(0,r.kt)("td",{parentName:"tr",align:null},"Collective")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CH4"),(0,r.kt)("td",{parentName:"tr",align:null},"Rudder")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CH5"),(0,r.kt)("td",{parentName:"tr",align:null},"AUX1 - Arming")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CH6"),(0,r.kt)("td",{parentName:"tr",align:null},"Throttle")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CH7"),(0,r.kt)("td",{parentName:"tr",align:null},"AUX2 - Profile Switching")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CH8"),(0,r.kt)("td",{parentName:"tr",align:null},"AUX3 - Rescue")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CH9"),(0,r.kt)("td",{parentName:"tr",align:null},"AUX4 - Blackbox")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CH10"),(0,r.kt)("td",{parentName:"tr",align:null},"AUX5 - Backup Pack")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CH11"),(0,r.kt)("td",{parentName:"tr",align:null},"AUX6 - Adjustment Enable Channel")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"CH12"),(0,r.kt)("td",{parentName:"tr",align:null},"AUX7 - Adjustment Value Channel")))),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The ELRS module needs to be in ",(0,r.kt)("a",{parentName:"p",href:"https://www.expresslrs.org/software/switch-config/"},(0,r.kt)("strong",{parentName:"a"},"Wide Mode"))," so that we can get four full resolution channels, one 2-position channel, and seven 128-position channels.")),(0,r.kt)("h2",{id:"radio-setup"},"Radio Setup"),(0,r.kt)("p",null,"This ",(0,r.kt)("a",{target:"_blank",href:n(54519).Z},"Generic Rotorflight Radio Model")," file contain the all the options listed above."),(0,r.kt)("h3",{id:"radio-inputs-page-setup"},"Radio Inputs Page Setup"),(0,r.kt)("p",null,"Configure the inputs on the radio as per the below image."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generic Setup",src:n(42782).Z,width:"480",height:"763"})),(0,r.kt)("p",null,"Based on the image above:"),(0,r.kt)("p",null,"The 3-position ",(0,r.kt)("strong",{parentName:"p"},"SB")," Switch will control ",(0,r.kt)("em",{parentName:"p"},"Arming")," as below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SB"),"-",(0,r.kt)("em",{parentName:"li"},"down"),": Disarmed"),(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SB"),"-",(0,r.kt)("em",{parentName:"li"},"middle"),": Disarmed"),(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SB"),"-",(0,r.kt)("em",{parentName:"li"},"up"),": Armed")),(0,r.kt)("p",null,"The 2-position ",(0,r.kt)("strong",{parentName:"p"},"SF")," Switch will control ",(0,r.kt)("em",{parentName:"p"},"Throttle Hold")," as below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SF"),"-",(0,r.kt)("em",{parentName:"li"},"down"),": Throttle Hold"),(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SF"),"-",(0,r.kt)("em",{parentName:"li"},"up"),": Throttle Release")),(0,r.kt)("p",null,"The 3-position ",(0,r.kt)("strong",{parentName:"p"},"SE")," Switch will control ",(0,r.kt)("em",{parentName:"p"},"Throttle percentage")," and ",(0,r.kt)("em",{parentName:"p"},"Profile Switching")," as below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SE"),"-",(0,r.kt)("em",{parentName:"li"},"down"),": Throttle 60%, Profile 1, and Rate 1"),(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SE"),"-",(0,r.kt)("em",{parentName:"li"},"middle"),": Throttle 70%, Profile 2, and Rate 2"),(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SE"),"-",(0,r.kt)("em",{parentName:"li"},"up"),": Throttle 80%, Profile 3, and Rate 2")),(0,r.kt)("p",null,"The 2-position ",(0,r.kt)("strong",{parentName:"p"},"SH")," Momentary Switch will control ",(0,r.kt)("em",{parentName:"p"},"Rescue")," as below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SH"),"-",(0,r.kt)("em",{parentName:"li"},"down"),": Rescue OFF"),(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SH"),"-",(0,r.kt)("em",{parentName:"li"},"up"),": Rescue ON")),(0,r.kt)("p",null,"The 3-position ",(0,r.kt)("strong",{parentName:"p"},"SA")," Switch will control ",(0,r.kt)("em",{parentName:"p"},"Blackbox enable")," and ",(0,r.kt)("em",{parentName:"p"},"Blackbox erase")," as below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SA"),"-",(0,r.kt)("em",{parentName:"li"},"down"),": Blackbox Logging OFF"),(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SA"),"-",(0,r.kt)("em",{parentName:"li"},"middle"),": Blackbox Logging ON"),(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SA"),"-",(0,r.kt)("em",{parentName:"li"},"up"),": Erase Blackbox Logs")),(0,r.kt)("p",null,"The 3-position ",(0,r.kt)("strong",{parentName:"p"},"SC")," Switch will control ",(0,r.kt)("em",{parentName:"p"},"Backup Buffer Pack")," as below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SC"),"-",(0,r.kt)("em",{parentName:"li"},"down"),": Buffer OFF"),(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SC"),"-",(0,r.kt)("em",{parentName:"li"},"middle"),": Buffer ON"),(0,r.kt)("li",{parentName:"ul"},"Switch ",(0,r.kt)("strong",{parentName:"li"},"SC"),"-",(0,r.kt)("em",{parentName:"li"},"up"),": Buffer ON")),(0,r.kt)("h3",{id:"radio-mixer-page-setup"},"Radio Mixer Page Setup"),(0,r.kt)("p",null,"Additionally you can use CH11-AUX6 and CH12-AUX7 to perform in flight parameter adjustment using adjustment functions from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/Tutorial-Setup/Adjustments#adjustment-functions"},"Adjustments Tab"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generic Setup",src:n(25223).Z,width:"480",height:"1146"})),(0,r.kt)("p",null,"The above settings will allow you to adjust ddd parameters in flight using the radio trim switches with combination of the 6-position buttons."),(0,r.kt)("p",null,"The below table explain how each parameter can be accessed."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generic Setup",src:n(25615).Z,width:"690",height:"230"})),(0,r.kt)("p",null,"For example when 6-position ",(0,r.kt)("em",{parentName:"p"},"button 1")," is activated, the ",(0,r.kt)("em",{parentName:"p"},"pitch trim switch")," will change ",(0,r.kt)("em",{parentName:"p"},"Pitch P Gain")," value, and when 6-position ",(0,r.kt)("em",{parentName:"p"},"button 3")," is activated, the ",(0,r.kt)("em",{parentName:"p"},"throttle trim switch")," will change ",(0,r.kt)("em",{parentName:"p"},"Governor D Gain")," value, and so on."),(0,r.kt)("h2",{id:"rotorflight-setup"},"Rotorflight Setup"),(0,r.kt)("p",null,"After completing the above radio setup, you can proceed to the Rotorflight Configurator to complete the setup on the flight controller side."),(0,r.kt)("h3",{id:"arming-setup"},"Arming Setup"),(0,r.kt)("p",null,"Proceed to Modes Tab and setup arming as per below picture."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generic Setup",src:n(9987).Z,width:"971",height:"102"})),(0,r.kt)("p",null,"Alternatively you can paste ans save the below commands in CLI to easily achieve the same result."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"aux 0 0 0 1800 2100 0 0\n")),(0,r.kt)("h3",{id:"profile-switching-setup"},"Profile Switching Setup"),(0,r.kt)("p",null,"Proceed to Adjustment Tab and setup Profiles and rates switching as per below picture."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generic Setup",src:n(95164).Z,width:"1017",height:"630"})),(0,r.kt)("p",null,"Alternatively in CLI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"adjfunc 0 1 2 900 2100 2 975 2025 975 2025 0 0 3\nadjfunc 31 2 2 900 2100 2 975 2025 975 2025 0 0 3\n")),(0,r.kt)("h3",{id:"rescue-setup"},"Rescue Setup"),(0,r.kt)("p",null,"Proceed to Modes Tab and setup Rescue mode as per below picture."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generic Setup",src:n(48338).Z,width:"1034",height:"111"})),(0,r.kt)("p",null,"Alternatively in CLI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"aux 1 53 2 1800 2100 0 0\n")),(0,r.kt)("h3",{id:"blackbox-setup"},"Blackbox Setup"),(0,r.kt)("p",null,"Proceed to Modes Tab and setup Blackbox Modes as per below picture."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generic Setup",src:n(46180).Z,width:"1034",height:"209"})),(0,r.kt)("p",null,"Alternatively in CLI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"aux 2 26 3 1400 1600 0 0\naux 3 31 3 1800 2100 0 0\n")),(0,r.kt)("h3",{id:"buffer-pack-setup"},"Buffer Pack Setup"),(0,r.kt)("p",null,"Buffer packs like the ",(0,r.kt)("a",{parentName:"p",href:"https://1st-rc.com/en/product/1st-buffer-v4-3x25f-for-helis-450-700/"},"1st Buffer-Pack")," can be switched off from the radio after disconnecting the main pack, this can be done by connecting the buffer pack to a free 1500us PWM Channel on the flight controller."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"First you need to assign servo 5 to a free timer pin, you will then see servo 5 in the Servos Tab.\nAssuming we have a free timer on pin A08."),(0,r.kt)("p",{parentName:"li"},"  In CLI:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"Resource Servo 5 A08\n"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Next you assign AUX5 Channel to Servo 5 using a mixer rule."),(0,r.kt)("p",{parentName:"li"},"  In CLI:"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"mixer rule 1 set AUX5 S5 1000 0\n")))),(0,r.kt)("h3",{id:"in-flight-profile-parameters-setup"},"In-Flight Profile Parameters Setup"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Generic Setup",src:n(25615).Z,width:"690",height:"230"})),(0,r.kt)("p",null,"Since there is many functions required to perform the In-flight adjustment as per the above table, you can directly copy the below commands to CLI and save."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"adjfunc 1 14 5 900 1100 6 1025 1075 1925 1975 5 10 200\nadjfunc 2 18 5 900 1100 6 1100 1150 1850 1900 5 10 200\nadjfunc 3 22 5 900 1100 6 1175 1225 1775 1825 5 10 200\nadjfunc 4 49 5 900 1100 6 1250 1300 1700 1750 5 10 200\nadjfunc 5 27 5 900 1100 6 1325 1375 1625 1675 5 10 200\nadjfunc 6 26 5 900 1100 6 1400 1450 1550 1600 5 10 200\nadjfunc 7 15 5 1100 1300 6 1025 1075 1925 1975 5 10 200\nadjfunc 8 19 5 1100 1300 6 1100 1150 1850 1900 5 10 200\nadjfunc 9 23 5 1100 1300 6 1175 1225 1775 1825 5 10 200\nadjfunc 10 50 5 1100 1300 6 1250 1300 1700 1750 5 10 200\nadjfunc 11 28 5 1100 1300 6 1325 1375 1625 1675 5 10 200\nadjfunc 12 29 5 1100 1300 6 1400 1450 1550 1600 5 10 200\nadjfunc 13 16 5 1300 1400 6 1025 1075 1925 1975 5 10 200\nadjfunc 14 20 5 1300 1400 6 1100 1150 1850 1900 5 10 200\nadjfunc 15 24 5 1300 1400 6 1175 1225 1775 1825 5 10 200\nadjfunc 16 51 5 1300 1400 6 1250 1300 1700 1750 5 10 200\nadjfunc 17 39 5 1300 1400 6 1325 1375 1625 1675 5 10 200\nadjfunc 18 40 5 1300 1400 6 1400 1450 1550 1600 5 10 200\nadjfunc 19 17 5 1550 1700 6 1025 1075 1925 1975 5 10 200\nadjfunc 20 21 5 1550 1700 6 1100 1150 1850 1900 5 10 200\nadjfunc 21 25 5 1550 1700 6 1175 1225 1775 1825 5 10 200\nadjfunc 22 52 5 1550 1700 6 1250 1300 1700 1750 5 10 200\nadjfunc 23 59 5 1750 1900 6 1025 1075 1925 1975 5 10 200\nadjfunc 24 60 5 1750 1900 6 1100 1150 1850 1900 5 10 200\nadjfunc 25 54 5 1750 1900 6 1175 1225 1775 1825 5 10 200\nadjfunc 26 55 5 1750 1900 6 1250 1300 1700 1750 5 10 200\nadjfunc 27 56 5 1950 2100 6 1025 1075 1925 1975 5 10 200\nadjfunc 28 57 5 1950 2100 6 1100 1150 1850 1900 5 10 200\nadjfunc 29 58 5 1950 2100 6 1175 1225 1775 1825 5 10 200\nadjfunc 30 48 5 1950 2100 6 1250 1300 1700 1750 5 10 200\n")),(0,r.kt)("p",null,"Consult ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rotorflight/rotorflight/wiki/Rotorflight-2-CLI-Changes"},"Rotorflight 2 CLI Changes")," for more info on how to setup the above adjustments."))}m.isMDXComponent=!0},54519:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/files/Generic_RF-935521af677ed9cdc31f834af24c40eb.yml"},25615:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generic-setup-adjustments-f6e808108eec8d4857baf1f86412066c.png"},9987:(e,t,n)=>{n.d(t,{Z:()=>a});const a="data:image/png;base64,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397yPvfh9pt3ozXLPgXLDz34I8eBVY2yBC82yX797TetOQXLIiIiIiLhLiDNsBUoS7BTGRURERERkYrQaNg+YoU8+5JwiPXLly9bqVdxNMzTp09f1+RPREREREREgp+CZTf5+fkYP348evTogaysLCv1euz0PnfuXEydOtX0T3SXk5ODgQMHlvoaGRkZ5vX5YJ+CSZMmmREQvWwRLyIiIiIiIn6mYNmNPQQ/B1T417/+ZYJif+KNz9etW4cXX3zRjGgnIiIiIiIiVU/BsgsGxgyQOVocb2fBadY027ic96974403kJ2dfd3ItIcPH8bChQuxdOlS00S7WTPPty969dVXsWHDBvz61782gbI9kiGbdr/22msYNmyYqXmeNWuWuR0A7d+/H4888oi5BQrTufzpp58uGfadz7PT7drrsWPHmvX4un/+85+RkpJiXvuVV17B2bNnzXoiIiIiIiJylYJlF8ePH8e2bdvQoUMHc2NuYnNqYhPp9PR0PPnkk/joo49MoMn/NgbKzzzzDP72t79h5cqVeOmll0ytsTfsfs0c6p14jzwGwwzU+Rrvvfce3n333ZK+0QzEn332WZPO5atWrcLy5cvNEO98np1uGzJkCGJiYkwgzyCcQTNfm/vw/vvvq/m3iIiIiIiIGwXLLnbu3GkCya5du5obunfp0sXcU5HBLJtmsxY4LS0N8+fPN/2VeU8yG4Ns3udu5syZZvlTTz1lLSnbww8/jN69e+OFF14wNxNv166dSWfwypuk80bztsLCQjNomK1Xr17m/m+LFy826/GeaBxQjEE7t/HTTz8128jabe4P77H25ZdfWmtfxWbnql0WERERERG5loJli90EOy8vDw888ADuvPNO05yaQXBBQYEJRE+cOIH4+Hg0bNgQDRo0MAGt7dChQyZojY2NNfOsyW3VqpWZLs/tt9+OX/3qV2jSpIkJzNk8m7XDDNzL0r17d9x0002IioryeL8w1pazJpqP0gYiY7Nt1yBcREREREREFCyXsJtgu9u1a5fpn8wAmcEpA1gGl2wS7XpbqObNm5vaX7v5M4NvNqf2hEExm0KzNnjFihXmNbkOm0inpqaakbTZvJp9qN3Vq1fPmrqqfv366Nixoxlt+/vf/74ZZZsBPAN8NvFmUD148GDTTHzz5s1Yv3495syZU9L8W0RERERERJwULFvYhJrBMkelZiDJBwPV733veyZYrlmzJtq0aWOaPjPYzMzMxNq1a621gYSEBPOfzaLZXJvrspa6PBx1e9SoUWY9e9AwNp3m63Mgrvvvv98MzuWNiIgIU+PNoNnGgH7Pnj0m2GeTb/azZh9mDvzFZuSebo8lIiIiIiISrhQsOzCgZN9k1sImJiZaqTBBK/stM4hmzfOYMWPM4F8MqBlcDxo0yHomTDpHqeb9kv/whz+Y12FAWh4G4ffee69Z/8033zQ10/fddx86depkmnI/8cQTmDBhgvVsz9j3mNvpioE2A3HWevN1J0+ebGqaqX///mjdurWZFhERERERkasirng5FPKM3862poAJPx5vTUkw4W2tXn75ZTPIWPv27U1z8UWLFuHDDz/E7Nmzr+ljHQ7+9sZr1hTw0wmPWlMiIiIiIhKOPI31VBrVLFcjt9xyixnEa9y4cSXNrFnLzdGw2adaREREREREvONTsHzp0kVrSoIJm5HzPtBJSUlmns2tH3vsMUycOBF16tQxaeFCZVRERERERCrCp2bYg1IGIv5WZ79XkWC0/8B+rMr62JpTM2wRERERkXAXkGbYW7ZuVc2dBC2WTZZRERERERERX/kULB8/cRzLM1aY2jsFzRIsWBZZJlk2WUZFRERERER85VMzbJFQo2bYIiIiIiLhTaNhi4iIiIiIiFSQgmURERERERERN143wxYREREREREJF6pZFhEREREREXGjYFlERERERETEjYJlERERERERkWsA/x/dSMRZD+SIzQAAAABJRU5ErkJggg=="},46180:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generic-setup-blackbox-aec0ca4b84ecdf4b8690e89d165956bd.png"},42782:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generic-setup-input-e94d46071f3e3c21869e19aaf499cbc7.png"},25223:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generic-setup-mixer-9eacacbaee27e112b5114f1de7b937c7.png"},95164:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generic-setup-prof-switch-9a8025df6b59a3547e47261f2bad6f68.png"},48338:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/generic-setup-rescue-a0d9b0b5f6c30f62ecd01b01651402d6.png"}}]);