"use strict";(self.webpackChunkaquadoggo_website=self.webpackChunkaquadoggo_website||[]).push([[7655],{9971:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var t=n(5893),a=n(1151);const s={id:"key-pairs",title:"Key Pairs"},o=void 0,r={id:"specifications/aquadoggo/data-types/key-pairs",title:"Key Pairs",description:"This section will soon be replaced with our new namakemono data type which is similar, but cooler.",source:"@site/docs/specifications/aquadoggo/data-types/key-pairs.md",sourceDirName:"specifications/aquadoggo/data-types",slug:"/specifications/aquadoggo/data-types/key-pairs",permalink:"/specifications/aquadoggo/data-types/key-pairs",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"key-pairs",title:"Key Pairs"},sidebar:"specifications",previous:{title:"Bamboo",permalink:"/specifications/aquadoggo/data-types/bamboo"},next:{title:"Operations",permalink:"/specifications/aquadoggo/data-types/operations"}},d={},c=[{value:"Usage",id:"usage",level:2},{value:"Key Management",id:"key-management",level:2}];function l(e){const i={a:"a",admonition:"admonition",h2:"h2",li:"li",p:"p",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.admonition,{title:"Deprecated",type:"danger",children:(0,t.jsxs)(i.p,{children:["This section will soon be replaced with our new ",(0,t.jsx)(i.a,{href:"/specifications/namakemono",children:"namakemono"})," data type which is similar, but cooler."]})}),"\n",(0,t.jsx)(i.admonition,{title:"Requirement KY1",type:"caution",children:(0,t.jsx)(i.p,{children:"Clients MUST use Ed25519 as the Digital Signature Algorithm for Bamboo."})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"A key pair is used to sign Bamboo entries and their payloads."}),"\n",(0,t.jsx)(i.li,{children:"The public key of a key pair is embedded in Bamboo entries and therefore always available when verifying an entry and its payload."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"p2panda clients create key pairs for their users."}),"\n",(0,t.jsxs)(i.li,{children:["Data recipients can identify the author of data from the public key and the signature on a ",(0,t.jsx)(i.a,{href:"/specifications/aquadoggo/data-types/bamboo#entries",children:"Bamboo entry"}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"The public key and signature are distributed alongside the data."}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.li,{children:"Data recipients can verify the integrity of data using the signature on Bamboo entries."}),"\n"]}),"\n",(0,t.jsx)(i.h2,{id:"key-management",children:"Key Management"}),"\n",(0,t.jsx)(i.admonition,{title:"Requirement KY2",type:"caution",children:(0,t.jsx)(i.p,{children:"p2panda clients SHOULD generate a new key pair for every new usage context. The boundaries of a usage context are defined by 1) device storage, 2) software distribution and 3) trust."})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsxs)(i.li,{children:["This lowers the chance of producing a fork in a Bamboo log.","\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"A Bamboo log has a fork when two entries with the same sequence number exist in it."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(i.admonition,{title:"Requirement KY3",type:"caution",children:(0,t.jsx)(i.p,{children:"p2panda clients SHOULD ensure that private keys cannot be read by adversaries."})}),"\n",(0,t.jsx)(i.admonition,{title:"Requirement KY4",type:"caution",children:(0,t.jsx)(i.p,{children:"p2panda clients SHOULD NOT require the transmission of a private key outside a usage context."})}),"\n",(0,t.jsxs)(i.ul,{children:["\n",(0,t.jsx)(i.li,{children:"Transmitting a private key outside of its usage context might be attractive e.g. to migrate a software installation but it is considered a security risk, can lead to forks and hard to get right in terms of user experience."}),"\n",(0,t.jsxs)(i.li,{children:["To migrate data clients should rather make use of p2panda ",(0,t.jsx)(i.a,{href:"/specifications/aquadoggo/authorisation",children:"Key Groups"}),", by transferring the permissions to a new key pair instead of migrating the old key pair itself"]}),"\n"]})]})}function u(e={}){const{wrapper:i}={...(0,a.a)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>r,a:()=>o});var t=n(7294);const a={},s=t.createContext(a);function o(e){const i=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function r(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:i},e.children)}}}]);