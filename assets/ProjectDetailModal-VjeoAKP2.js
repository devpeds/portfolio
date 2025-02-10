import{a as l,j as n,F as E,b as r,c as i,m as I,d as R,e as h,I as x,s as B,u as W,f as M,h as H,l as y,i as S,k as z,n as D}from"./index-Chhm1Wof.js";import{r as P}from"./index-B2tfnBvl.js";const f=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 320 512",fill:"currentColor",...e},l.createElement("path",{d:"M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"})),T=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 384 512",fill:"currentColor",...e},l.createElement("path",{d:"M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"}));function N(e){const t=typeof e.content=="string"?e.content:l.use(e.content);return n("div",{className:e.className,dangerouslySetInnerHTML:{__html:t}})}var $=P();const w={overlay:r({position:"fixed",inset:0,backgroundColor:i.black60,zIndex:100}),container:r({position:"relative",top:"50%",transform:"translate(0, -50%)",margin:"auto",maxWidth:"calc(100% - 40px)",width:"100%",maxHeight:"max(calc(100vh - 80px), 90vh)",overflow:"scroll",scrollbarWidth:"none",backgroundColor:i.white,borderRadius:16,color:i.dark87,[I("sm")]:{maxWidth:`min(100% - 80px, ${R.lg-160}px)`},"@supports (max-height: 100svh)":{maxHeight:"max(calc(100svh - 80px), 90svh)"}}),header:r({display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"space-between",position:"sticky",top:0,zIndex:1,fontSize:"1.2em",fontWeight:700,padding:B(24,16),backgroundColor:i.white87,backdropFilter:"blur(6px)"})},b=e=>{const{className:t,open:s,onClose:a,children:o}=e;if(l.useEffect(()=>{document.documentElement.style.overflow=s?"hidden":""},[s]),!s)return n(E,{});const d=n("div",{css:w.overlay,onClick:a,children:n("div",{className:t,css:w.container,onClick:c=>c.stopPropagation(),children:o})});return $.createPortal(d,document.body)};b.Header=e=>{const{onClose:t,children:s}=e;return h("div",{css:w.header,children:[s,n(x,{"aria-label":"닫기",onClick:t,Icon:T})]})};function j(){const[e,t]=l.useState(!1),s=W("(hover: hover) and (pointer: fine)"),a=l.useRef(null);return l.useEffect(()=>{if(!s)return;const o=a.current,d=()=>t(!0),c=()=>t(!1);return o==null||o.addEventListener("mouseenter",d),o==null||o.addEventListener("mouseleave",c),()=>{o==null||o.removeEventListener("mouseenter",d),o==null||o.removeEventListener("mouseleave",c)}},[s]),{ref:a,isHovered:e}}const L=12,p={self:r({position:"relative"}),list:r({display:"flex",flexDirection:"row",gap:L,padding:B(24,12),overflowX:"scroll",scrollbarWidth:"none",scrollSnapType:"x mandatory",scrollPadding:24}),item:r({flexShrink:0,width:"100%",scrollSnapAlign:"start",[I("sm")]:{width:`calc(100% / 2 - ${L}px)`},img:{width:"100%",aspectRatio:4/3,boxShadow:`0 0 8px ${i.dark33}`},figcaption:{marginTop:4,textAlign:"center"}}),arrow:(e,t)=>r({visibility:t?"visible":"hidden",opacity:t?1:0,transition:"visibility .1s, opacity .3s",backgroundColor:i.white87,boxShadow:`0 0 8px ${i.dark12}`,width:60,height:60,padding:16,position:"absolute",top:"50%",transform:"translateY(-50%)",left:y(e==="left",()=>4),...y(e==="right",()=>({right:4,svg:{transform:"rotate(180deg)"}}))},H({opacity:.7,backgroundColor:i.white87}))};function A(e){const{className:t,showcase:s}=e,{ref:a,isHovered:o}=j(),d=l.useRef(null),c=u=>{var C,k;const m=u==="left"?-1:1,v=((C=a.current)==null?void 0:C.clientWidth)??0;(k=d.current)==null||k.scrollBy({left:m*v,behavior:"smooth"})};return s.length?h("div",{ref:a,className:t,css:p.self,children:[n("div",{ref:d,css:p.list,children:s.map(({image:u,alt:m},v)=>h("figure",{css:p.item,children:[n(M,{image:u,alt:m}),n("figcaption",{children:m})]},v))}),n(x,{css:p.arrow("left",o),onClick:()=>c("left"),Icon:f}),n(x,{css:p.arrow("right",o),onClick:()=>c("right"),Icon:f})]}):n(E,{})}const g={self:r({height:"100%"}),showcase:r({marginBottom:20}),contents:r({padding:D(24,24,0,24),h1:{marginBottom:24},"h2, h3, p, pre":{marginBottom:16},"& ul, ol":{listStyle:"initial",paddingLeft:20,paddingBottom:16},li:{marginBottom:8},summary:{padding:z(12),fontSize:"1.2em",fontWeight:700},p:{code:{backgroundColor:i.lightGray,color:"red",padding:4,borderRadius:4}},pre:{overflow:"scroll",code:{borderRadius:8}}}),nav:r({marginBottom:24,display:"flex",flexDirection:"row",flexWrap:"wrap",alignItems:"center",justifyContent:"space-between",button:{textAlign:"start",fontSize:"0.8em",fontWeight:700,color:i.dark33,div:{fontSize:"1.25em",marginTop:2,display:"flex",flexDirection:"row",alignItems:"center",position:"relative",svg:{position:"absolute"},span:{color:i.dark87}},...H({color:i.dark87})}}),prev:r({padding:S(44,8,8),svg:{left:-20}}),next:r({marginLeft:"auto",padding:S(8,44,8),svg:{right:-20,transform:"rotate(180deg)"}})};function X(e){const{project:t,prev:s,next:a,onPrevClick:o,onNextClick:d,onClose:c}=e;return h(b,{css:g.self,open:!!t,onClose:c,children:[n(b.Header,{onClose:c,children:"Project Details"}),n(A,{css:g.showcase,showcase:(t==null?void 0:t.showcase)??[]}),n(N,{css:g.contents,content:(t==null?void 0:t.detail)??""}),h("div",{css:g.nav,children:[s&&h("button",{css:g.prev,onClick:()=>o(s),children:["이전",h("div",{children:[n(f,{width:16,height:16}),n("span",{children:s.name})]})]}),a&&h("button",{css:g.next,onClick:()=>d(a),children:["다음",h("div",{children:[n("span",{children:a.name}),n(f,{width:16,height:16})]})]})]})]})}export{X as default};
