(()=>{var e={};e.id=626,e.ids=[626],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},209:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},55315:e=>{"use strict";e.exports=require("path")},23649:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>n.a,__next_app__:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>d});var i=r(3003),o=r(14293),a=r(66550),n=r.n(a),s=r(86979),l={};for(let e in s)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>s[e]);r.d(t,l);let d=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,98505)),"D:\\nextjs-nextauth-prisma-db\\src\\app\\login\\page.tsx"]}]},{}]},{layout:[()=>Promise.resolve().then(r.bind(r,37973)),"D:\\nextjs-nextauth-prisma-db\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,52075,23)),"next/dist/client/components/not-found-error"]}],c=["D:\\nextjs-nextauth-prisma-db\\src\\app\\login\\page.tsx"],p={require:r,loadChunk:()=>Promise.resolve()},h=new i.AppPageRouteModule({definition:{kind:o.RouteKind.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},68290:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,96114,23)),Promise.resolve().then(r.t.bind(r,92639,23)),Promise.resolve().then(r.t.bind(r,9727,23)),Promise.resolve().then(r.t.bind(r,79671,23)),Promise.resolve().then(r.t.bind(r,41868,23)),Promise.resolve().then(r.t.bind(r,84759,23)),Promise.resolve().then(r.t.bind(r,22816,23))},92554:()=>{},67944:(e,t,r)=>{Promise.resolve().then(r.bind(r,89923))},89923:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>el});var i=r(68819),o=r(76579),a=r(94583),n=r(17423),s=r(17266),l=r(41135),d=r(88634),c=r(44823),p=r(91703),h=r(13643),u=r(2791),f=r(71685),g=r(97898);function x(e){return(0,g.ZP)("MuiDivider",e)}(0,f.Z)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);let m=e=>{let{absolute:t,children:r,classes:i,flexItem:o,light:a,orientation:n,textAlign:s,variant:l}=e;return(0,d.Z)({root:["root",t&&"absolute",l,a&&"light","vertical"===n&&"vertical",o&&"flexItem",r&&"withChildren",r&&"vertical"===n&&"withChildrenVertical","right"===s&&"vertical"!==n&&"textAlignRight","left"===s&&"vertical"!==n&&"textAlignLeft"],wrapper:["wrapper","vertical"===n&&"wrapperVertical"]},x,i)},v=(0,p.ZP)("div",{name:"MuiDivider",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,r.absolute&&t.absolute,t[r.variant],r.light&&t.light,"vertical"===r.orientation&&t.vertical,r.flexItem&&t.flexItem,r.children&&t.withChildren,r.children&&"vertical"===r.orientation&&t.withChildrenVertical,"right"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignRight,"left"===r.textAlign&&"vertical"!==r.orientation&&t.textAlignLeft]}})((0,h.Z)(({theme:e})=>({margin:0,flexShrink:0,borderWidth:0,borderStyle:"solid",borderColor:(e.vars||e).palette.divider,borderBottomWidth:"thin",variants:[{props:{absolute:!0},style:{position:"absolute",bottom:0,left:0,width:"100%"}},{props:{light:!0},style:{borderColor:e.vars?`rgba(${e.vars.palette.dividerChannel} / 0.08)`:(0,c.Fq)(e.palette.divider,.08)}},{props:{variant:"inset"},style:{marginLeft:72}},{props:{variant:"middle",orientation:"horizontal"},style:{marginLeft:e.spacing(2),marginRight:e.spacing(2)}},{props:{variant:"middle",orientation:"vertical"},style:{marginTop:e.spacing(1),marginBottom:e.spacing(1)}},{props:{orientation:"vertical"},style:{height:"100%",borderBottomWidth:0,borderRightWidth:"thin"}},{props:{flexItem:!0},style:{alignSelf:"stretch",height:"auto"}},{props:({ownerState:e})=>!!e.children,style:{display:"flex",textAlign:"center",border:0,borderTopStyle:"solid",borderLeftStyle:"solid","&::before, &::after":{content:'""',alignSelf:"center"}}},{props:({ownerState:e})=>e.children&&"vertical"!==e.orientation,style:{"&::before, &::after":{width:"100%",borderTop:`thin solid ${(e.vars||e).palette.divider}`,borderTopStyle:"inherit"}}},{props:({ownerState:e})=>"vertical"===e.orientation&&e.children,style:{flexDirection:"column","&::before, &::after":{height:"100%",borderLeft:`thin solid ${(e.vars||e).palette.divider}`,borderLeftStyle:"inherit"}}},{props:({ownerState:e})=>"right"===e.textAlign&&"vertical"!==e.orientation,style:{"&::before":{width:"90%"},"&::after":{width:"10%"}}},{props:({ownerState:e})=>"left"===e.textAlign&&"vertical"!==e.orientation,style:{"&::before":{width:"10%"},"&::after":{width:"90%"}}}]}))),y=(0,p.ZP)("span",{name:"MuiDivider",slot:"Wrapper",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.wrapper,"vertical"===r.orientation&&t.wrapperVertical]}})((0,h.Z)(({theme:e})=>({display:"inline-block",paddingLeft:`calc(${e.spacing(1)} * 1.2)`,paddingRight:`calc(${e.spacing(1)} * 1.2)`,whiteSpace:"nowrap",variants:[{props:{orientation:"vertical"},style:{paddingTop:`calc(${e.spacing(1)} * 1.2)`,paddingBottom:`calc(${e.spacing(1)} * 1.2)`}}]}))),b=s.forwardRef(function(e,t){let r=(0,u.i)({props:e,name:"MuiDivider"}),{absolute:o=!1,children:a,className:n,orientation:s="horizontal",component:d=a||"vertical"===s?"div":"hr",flexItem:c=!1,light:p=!1,role:h="hr"!==d?"separator":void 0,textAlign:f="center",variant:g="fullWidth",...x}=r,b={...r,absolute:o,component:d,flexItem:c,light:p,orientation:s,role:h,textAlign:f,variant:g},j=m(b);return(0,i.jsx)(v,{as:d,className:(0,l.Z)(j.root,n),role:h,ref:t,ownerState:b,"aria-orientation":"separator"===h&&("hr"!==d||"vertical"===s)?s:void 0,...x,children:a?(0,i.jsx)(y,{className:j.wrapper,ownerState:b,children:a}):null})});b&&(b.muiSkipListHighlight=!0);var j=r(5394),w=r(40955),Z=r(48386),k=r(54641);function S(e){return(0,g.ZP)("MuiIconButton",e)}let C=(0,f.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),P=e=>{let{classes:t,disabled:r,color:i,edge:o,size:a}=e,n={root:["root",r&&"disabled","default"!==i&&`color${(0,k.Z)(i)}`,o&&`edge${(0,k.Z)(o)}`,`size${(0,k.Z)(a)}`]};return(0,d.Z)(n,S,t)},R=(0,p.ZP)(Z.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,"default"!==r.color&&t[`color${(0,k.Z)(r.color)}`],r.edge&&t[`edge${(0,k.Z)(r.edge)}`],t[`size${(0,k.Z)(r.size)}`]]}})((0,h.Z)(({theme:e})=>({textAlign:"center",flex:"0 0 auto",fontSize:e.typography.pxToRem(24),padding:8,borderRadius:"50%",color:(e.vars||e).palette.action.active,transition:e.transitions.create("background-color",{duration:e.transitions.duration.shortest}),variants:[{props:e=>!e.disableRipple,style:{"--IconButton-hoverBg":e.vars?`rgba(${e.vars.palette.action.activeChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)(e.palette.action.active,e.palette.action.hoverOpacity),"&:hover":{backgroundColor:"var(--IconButton-hoverBg)","@media (hover: none)":{backgroundColor:"transparent"}}}},{props:{edge:"start"},style:{marginLeft:-12}},{props:{edge:"start",size:"small"},style:{marginLeft:-3}},{props:{edge:"end"},style:{marginRight:-12}},{props:{edge:"end",size:"small"},style:{marginRight:-3}}]})),(0,h.Z)(({theme:e})=>({variants:[{props:{color:"inherit"},style:{color:"inherit"}},...Object.entries(e.palette).filter((0,w.Z)()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}})),...Object.entries(e.palette).filter((0,w.Z)()).map(([t])=>({props:{color:t},style:{"--IconButton-hoverBg":e.vars?`rgba(${(e.vars||e).palette[t].mainChannel} / ${e.vars.palette.action.hoverOpacity})`:(0,c.Fq)((e.vars||e).palette[t].main,e.palette.action.hoverOpacity)}})),{props:{size:"small"},style:{padding:5,fontSize:e.typography.pxToRem(18)}},{props:{size:"large"},style:{padding:12,fontSize:e.typography.pxToRem(28)}}],[`&.${C.disabled}`]:{backgroundColor:"transparent",color:(e.vars||e).palette.action.disabled}}))),$=s.forwardRef(function(e,t){let r=(0,u.i)({props:e,name:"MuiIconButton"}),{edge:o=!1,children:a,className:n,color:s="default",disabled:d=!1,disableFocusRipple:c=!1,size:p="medium",...h}=r,f={...r,edge:o,color:s,disabled:d,disableFocusRipple:c,size:p},g=P(f);return(0,i.jsx)(R,{className:(0,l.Z)(g.root,n),centerRipple:!0,focusRipple:!c,disabled:d,ref:t,...h,ownerState:f,children:a})});var M=r(83689),I=r(30274);let L=e=>e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),z=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var D={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let A=(0,s.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:i,className:o="",children:a,iconNode:n,...l},d)=>(0,s.createElement)("svg",{ref:d,...D,width:t,height:t,stroke:e,strokeWidth:i?24*Number(r)/Number(t):r,className:z("lucide",o),...l},[...n.map(([e,t])=>(0,s.createElement)(e,t)),...Array.isArray(a)?a:[a]])),W=(e,t)=>{let r=(0,s.forwardRef)(({className:r,...i},o)=>(0,s.createElement)(A,{ref:o,iconNode:t,className:z(`lucide-${L(e)}`,r),...i}));return r.displayName=`${e}`,r},_=W("Facebook",[["path",{d:"M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z",key:"1jg4f8"}]]),B=W("Twitter",[["path",{d:"M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z",key:"pff0z6"}]]),N=W("Chrome",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["line",{x1:"21.17",x2:"12",y1:"8",y2:"8",key:"a0cw5f"}],["line",{x1:"3.95",x2:"8.54",y1:"6.06",y2:"14",key:"1kftof"}],["line",{x1:"10.88",x2:"15.46",y1:"21.94",y2:"14",key:"1ymyh8"}]]);var T=r(46226),O=r(90434),F=r(35047),q=r(77109),E=r(40012),H=r(42265),U=r(8106);function V(e){return(0,g.ZP)("MuiCircularProgress",e)}(0,f.Z)("MuiCircularProgress",["root","determinate","indeterminate","colorPrimary","colorSecondary","svg","circle","circleDeterminate","circleIndeterminate","circleDisableShrink"]);let G=(0,U.F4)`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`,K=(0,U.F4)`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`,X="string"!=typeof G?(0,U.iv)`
        animation: ${G} 1.4s linear infinite;
      `:null,J="string"!=typeof K?(0,U.iv)`
        animation: ${K} 1.4s ease-in-out infinite;
      `:null,Q=e=>{let{classes:t,variant:r,color:i,disableShrink:o}=e,a={root:["root",r,`color${(0,k.Z)(i)}`],svg:["svg"],circle:["circle",`circle${(0,k.Z)(r)}`,o&&"circleDisableShrink"]};return(0,d.Z)(a,V,t)},Y=(0,p.ZP)("span",{name:"MuiCircularProgress",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,t[r.variant],t[`color${(0,k.Z)(r.color)}`]]}})((0,h.Z)(({theme:e})=>({display:"inline-block",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("transform")}},{props:{variant:"indeterminate"},style:X||{animation:`${G} 1.4s linear infinite`}},...Object.entries(e.palette).filter((0,w.Z)()).map(([t])=>({props:{color:t},style:{color:(e.vars||e).palette[t].main}}))]}))),ee=(0,p.ZP)("svg",{name:"MuiCircularProgress",slot:"Svg",overridesResolver:(e,t)=>t.svg})({display:"block"}),et=(0,p.ZP)("circle",{name:"MuiCircularProgress",slot:"Circle",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.circle,t[`circle${(0,k.Z)(r.variant)}`],r.disableShrink&&t.circleDisableShrink]}})((0,h.Z)(({theme:e})=>({stroke:"currentColor",variants:[{props:{variant:"determinate"},style:{transition:e.transitions.create("stroke-dashoffset")}},{props:{variant:"indeterminate"},style:{strokeDasharray:"80px, 200px",strokeDashoffset:0}},{props:({ownerState:e})=>"indeterminate"===e.variant&&!e.disableShrink,style:J||{animation:`${K} 1.4s ease-in-out infinite`}}]}))),er=s.forwardRef(function(e,t){let r=(0,u.i)({props:e,name:"MuiCircularProgress"}),{className:o,color:a="primary",disableShrink:n=!1,size:s=40,style:d,thickness:c=3.6,value:p=0,variant:h="indeterminate",...f}=r,g={...r,color:a,disableShrink:n,size:s,thickness:c,value:p,variant:h},x=Q(g),m={},v={},y={};if("determinate"===h){let e=2*Math.PI*((44-c)/2);m.strokeDasharray=e.toFixed(3),y["aria-valuenow"]=Math.round(p),m.strokeDashoffset=`${((100-p)/100*e).toFixed(3)}px`,v.transform="rotate(-90deg)"}return(0,i.jsx)(Y,{className:(0,l.Z)(x.root,o),style:{width:s,height:s,...v,...d},ownerState:g,ref:t,role:"progressbar",...y,...f,children:(0,i.jsx)(ee,{className:x.svg,ownerState:g,viewBox:"22 22 44 44",children:(0,i.jsx)(et,{className:x.circle,style:m,ownerState:g,cx:44,cy:44,r:(44-c)/2,fill:"none",strokeWidth:c})})})});var ei=r(55305);let eo=(0,p.ZP)(H.Z)(({theme:e})=>({height:"56px",width:"100%",justifyContent:"center",alignItems:"center",textTransform:"none",fontSize:"14px","&:focus":{outline:"none"}})),ea=(0,p.ZP)(H.Z)(({theme:e})=>({...eo,backgroundColor:"#6c63ff","&:hover":{backgroundColor:"#847dff"}})),en=(0,p.ZP)(H.Z)(({theme:e})=>({...eo,backgroundColor:"#ffffff",color:"#6c63ff",border:"2px solid #6c63ff","&:hover":{backgroundColor:"#f5f4ff",borderColor:"#847dff",color:"#847dff"}}));function es({children:e,type:t="submit"}){let{pending:r}=(0,ei.useFormStatus)();return"submit"==t?(0,i.jsxs)(ea,{fullWidth:!0,type:r?"button":t,disabled:r,variant:"contained",children:[e,r&&(0,i.jsx)(er,{size:16,sx:{ml:1}}),(0,i.jsx)("span",{"aria-live":"polite",className:"sr-only",role:"status",children:r?"Loading":"Submit form"})]}):(0,i.jsxs)(en,{fullWidth:!0,type:r?"button":t,disabled:r,variant:"outlined",children:[e,r&&(0,i.jsx)(er,{size:16,sx:{ml:1}}),(0,i.jsx)("span",{"aria-live":"polite",className:"sr-only",role:"status",children:r?"Loading":"Submit form"})]})}let el=()=>{let[e,t]=(0,s.useState)("youremail@example.com"),[r,l]=(0,s.useState)("123456"),[d,c]=(0,s.useState)(""),p=(0,F.useRouter)(),h=(0,F.useSearchParams)(),u=decodeURI(h?.get("callbackUrl")??"/"),f=async t=>{t.preventDefault();try{let t=await (0,q.signIn)("credentials",{email:e,password:r,callbackUrl:u??"/",redirect:!1});t?.error&&c(t.error),t?.ok&&p.push("/dashboard")}catch(e){c("An error occurred during sign in")}};return(0,i.jsx)(E.L,{children:(0,i.jsx)(o.Z,{sx:{minHeight:"100vh",bgcolor:"#f8fafb",py:8},children:(0,i.jsx)(n.Z,{maxWidth:"lg",children:(0,i.jsxs)(o.Z,{sx:{display:"flex",flexDirection:{xs:"column",lg:"row"},alignItems:"center",gap:6,justifyContent:"center"},children:[(0,i.jsx)(o.Z,{sx:{width:"100%",maxWidth:"500px",display:{xs:"none",lg:"block"}},children:(0,i.jsx)(T.default,{src:"/undraw_remotely_2j6y.svg",alt:"Login illustration",width:500,height:500,style:{width:"100%",height:"auto"}})}),(0,i.jsxs)(o.Z,{sx:{width:"100%",maxWidth:"450px"},children:[(0,i.jsxs)(o.Z,{sx:{mb:4},children:[(0,i.jsx)(I.Z,{variant:"h4",component:"h3",sx:{mb:1,fontWeight:"bold"},children:"Sign In"}),(0,i.jsx)(I.Z,{variant:"body1",color:"text.secondary",children:"Lorem ipsum dolor sit amet elit. Sapiente sit aut eos consectetur adipisicing."})]}),(0,i.jsxs)(o.Z,{component:"form",onSubmit:f,sx:{display:"flex",flexDirection:"column",gap:3},children:[!!d&&(0,i.jsxs)(I.Z,{color:"error",variant:"body2",children:["ERROR: ",d]}),(0,i.jsx)(M.Z,{fullWidth:!0,id:"username",label:"Username",variant:"outlined",sx:{bgcolor:"#edf2f5","& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"transparent"},"&:hover fieldset":{borderColor:"transparent"},"&.Mui-focused fieldset":{borderColor:"#6c63ff"}}},value:e,onChange:e=>{t(e.target.value)}}),(0,i.jsx)(M.Z,{fullWidth:!0,id:"password",label:"Password",type:"password",variant:"outlined",sx:{bgcolor:"#edf2f5","& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"transparent"},"&:hover fieldset":{borderColor:"transparent"},"&.Mui-focused fieldset":{borderColor:"#6c63ff"}}},value:r,onChange:e=>{l(e.target.value)}}),(0,i.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center"},children:[(0,i.jsx)(j.Z,{control:(0,i.jsx)(a.Z,{sx:{"&.Mui-checked":{color:"#6c63ff"}}}),label:(0,i.jsx)(I.Z,{variant:"body2",color:"text.secondary",children:"Remember me"})}),(0,i.jsx)(O.default,{href:"#",style:{textDecoration:"none"},children:(0,i.jsx)(I.Z,{variant:"body2",color:"text.secondary",sx:{textDecoration:"underline","&:hover":{color:"text.primary"}},children:"Forgot Password"})})]}),(0,i.jsx)(es,{type:"submit",children:"Sign In"}),(0,i.jsx)(O.default,{href:"/signup",passHref:!0,style:{textDecoration:"none"},children:(0,i.jsx)(es,{type:"button",children:"Sign Up"})}),(0,i.jsx)(o.Z,{sx:{position:"relative",my:3},children:(0,i.jsx)(b,{children:(0,i.jsx)(I.Z,{variant:"body2",color:"text.secondary",sx:{px:2},children:"or login with"})})}),(0,i.jsxs)(o.Z,{sx:{display:"flex",justifyContent:"center",gap:2},children:[(0,i.jsx)($,{sx:{bgcolor:"#3b5998",color:"white",width:"48px",height:"48px","&:hover":{bgcolor:"#344e86"}},children:(0,i.jsx)(_,{})}),(0,i.jsx)($,{sx:{bgcolor:"#1da1f2",color:"white",width:"48px",height:"48px","&:hover":{bgcolor:"#0d95e8"}},children:(0,i.jsx)(B,{})}),(0,i.jsx)($,{sx:{bgcolor:"#ea4335",color:"white",width:"48px",height:"48px","&:hover":{bgcolor:"#e82e1e"}},children:(0,i.jsx)(N,{})})]})]})]})]})})})})}},40012:(e,t,r)=>{"use strict";r.d(t,{L:()=>p});var i=r(68819),o=r(77865),a=r(76630),n=r(95148),s=r(98829),l=r(35047),d=r(17266);let c=(0,r(5283).Z)({palette:{primary:{main:"#1976d2",light:"#42a5f5",dark:"#1565c0"},secondary:{main:"#9c27b0",light:"#ba68c8",dark:"#7b1fa2"},background:{default:"#ffffff",paper:"#f5f5f5"}},typography:{fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif',h1:{fontSize:"2.5rem",fontWeight:600},h2:{fontSize:"2rem",fontWeight:500},button:{textTransform:"none"}},shape:{borderRadius:8},components:{MuiButton:{styleOverrides:{root:{padding:"8px 16px"}}}}}),p=({children:e})=>{let[{cache:t,flush:r}]=(0,d.useState)(()=>{let e=(0,o.Z)({key:"mui",prepend:!0});e.compat=!0;let t=e.insert,r=[];return e.insert=(...i)=>{let o=i[1];return void 0===e.inserted[o.name]&&r.push(o.name),t(...i)},{cache:e,flush:()=>{let e=r;return r=[],e}}});return(0,l.useServerInsertedHTML)(()=>{let e=r();if(0===e.length)return null;let o="";for(let r of e)o+=t.inserted[r];return(0,i.jsx)("style",{"data-emotion":`${t.key} ${e.join(" ")}`,dangerouslySetInnerHTML:{__html:o}})}),(0,i.jsx)(a.C,{value:t,children:(0,i.jsxs)(s.Z,{theme:c,children:[(0,i.jsx)(n.ZP,{}),e]})})}},37973:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>d,metadata:()=>l});var i=r(89351);r(22052),r(5023);var o=r(91228),a=r.n(o);let n="Next.js + Postgres Auth Starter",s="This is a Next.js starter kit that uses NextAuth.js for simple email + password login and a Postgres database to persist the data.",l={title:n,description:s,twitter:{card:"summary_large_image",title:n,description:s},metadataBase:new URL("https://nextjs-postgres-auth.vercel.app")};function d({children:e}){return(0,i.jsx)("html",{lang:"en",children:(0,i.jsx)("body",{className:a().variable,children:e})})}},98505:(e,t,r)=>{"use strict";r.a(e,async(e,i)=>{try{r.r(t),r.d(t,{default:()=>e});var o=r(71851);let e=(await (0,o.createProxy)(String.raw`D:\nextjs-nextauth-prisma-db\src\app\login\page.tsx`)).default;i()}catch(e){i(e)}},1)},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),i=t.X(0,[267,767,404,935,109],()=>r(23649));module.exports=i})();