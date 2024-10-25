"use strict";(self.webpackChunkaquadoggo_website=self.webpackChunkaquadoggo_website||[]).push([[4124],{2782:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>V,contentTitle:()=>T,default:()=>D,frontMatter:()=>N,metadata:()=>S,toc:()=>_});var t=a(5893),r=a(1151),l=a(7294),s=a(512),i=a(2957),o=a(6550),u=a(1270),c=a(5238),d=a(3609),h=a(2560);function p(e){return l.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,l.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function g(e){const{values:n,children:a}=e;return(0,l.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:a,attributes:t,default:r}}=e;return{value:n,label:a,attributes:t,default:r}}))}(a);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,a])}function m(e){let{value:n,tabValues:a}=e;return a.some((e=>e.value===n))}function f(e){let{queryString:n=!1,groupId:a}=e;const t=(0,o.k6)(),r=function(e){let{queryString:n=!1,groupId:a}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:n,groupId:a});return[(0,c._X)(r),(0,l.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(t.location.search);n.set(r,e),t.replace({...t.location,search:n.toString()})}),[r,t])]}function b(e){const{defaultValue:n,queryString:a=!1,groupId:t}=e,r=g(e),[s,i]=(0,l.useState)((()=>function(e){let{defaultValue:n,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const t=a.find((e=>e.default))??a[0];if(!t)throw new Error("Unexpected error: 0 tabValues");return t.value}({defaultValue:n,tabValues:r}))),[o,c]=f({queryString:a,groupId:t}),[d,p]=function(e){let{groupId:n}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(n),[t,r]=(0,h.Nk)(a);return[t,(0,l.useCallback)((e=>{a&&r.set(e)}),[a,r])]}({groupId:t}),b=(()=>{const e=o??d;return m({value:e,tabValues:r})?e:null})();(0,u.Z)((()=>{b&&i(b)}),[b]);return{selectedValue:s,selectValue:(0,l.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),c(e),p(e)}),[c,p,r]),tabValues:r}}var x=a(1048);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:n,block:a,selectedValue:r,selectValue:l,tabValues:o}=e;const u=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),d=e=>{const n=e.currentTarget,a=u.indexOf(n),t=o[a].value;t!==r&&(c(n),l(t))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=u.indexOf(e.currentTarget)+1;n=u[a]??u[0];break}case"ArrowLeft":{const a=u.indexOf(e.currentTarget)-1;n=u[a]??u[u.length-1];break}}n?.focus()};return(0,t.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":a},n),children:o.map((e=>{let{value:n,label:a,attributes:l}=e;return(0,t.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>u.push(e),onKeyDown:h,onClick:d,...l,className:(0,s.Z)("tabs__item",j.tabItem,l?.className,{"tabs__item--active":r===n}),children:a??n},n)}))})}function y(e){let{lazy:n,children:a,selectedValue:r}=e;const s=(Array.isArray(a)?a:[a]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,l.cloneElement)(e,{className:"margin-top--md"}):null}return(0,t.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function w(e){const n=b(e);return(0,t.jsxs)("div",{className:(0,s.Z)("tabs-container",j.tabList),children:[(0,t.jsx)(v,{...e,...n}),(0,t.jsx)(y,{...e,...n})]})}function k(e){const n=(0,x.Z)();return(0,t.jsx)(w,{...e,children:p(e.children)},String(n))}const I={tabItem:"tabItem_Ymn6"};function q(e){let{children:n,hidden:a,className:r}=e;return(0,t.jsx)("div",{role:"tabpanel",className:(0,s.Z)(I.tabItem,r),hidden:a,children:n})}const N={title:"SDKs"},T=void 0,S={id:"sdks/index",title:"SDKs",description:"p2panda",source:"@site/docs/sdks/index.md",sourceDirName:"sdks",slug:"/sdks/",permalink:"/sdks/",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"SDKs"}},V={},_=[{value:"<code>p2panda</code>",id:"p2panda",level:2},{value:"Documentation",id:"documentation",level:3},{value:"Installation",id:"installation",level:3},{value:"Usage",id:"usage",level:3},{value:"<code>aquadoggo</code>",id:"aquadoggo",level:2},{value:"Documentation",id:"documentation-1",level:3},{value:"Installation",id:"installation-1",level:3},{value:"Usage",id:"usage-1",level:3},{value:"Run local node",id:"run-local-node",level:3}];function P(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h2,{id:"p2panda",children:(0,t.jsx)(n.code,{children:"p2panda"})}),"\n",(0,t.jsx)(n.p,{children:'p2panda provides all tools required to write a client, node or even your own protocol implementation. We call these "core" libraries as they are the starting point for writing more "high-level" libraries or applications.'}),"\n",(0,t.jsxs)(n.p,{children:["The core library is shipped both as a Rust crate ",(0,t.jsx)(n.a,{href:"https://crates.io/crates/p2panda-rs",children:(0,t.jsx)(n.code,{children:"p2panda-rs"})})," with WebAssembly bindings and a NPM package ",(0,t.jsx)(n.a,{href:"https://www.npmjs.com/package/p2panda-js",children:(0,t.jsx)(n.code,{children:"p2panda-js"})})," with TypeScript definitions running in NodeJS or any modern web browser."]}),"\n",(0,t.jsx)(n.h3,{id:"documentation",children:"Documentation"}),"\n",(0,t.jsx)(n.p,{children:"You can find the API documentations with more examples for both languages under the following links:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.rs/p2panda-rs/latest/p2panda_rs/",children:"Rust"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://p2panda.org/lib/p2panda-js",children:"TypeScript"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"installation",children:"Installation"}),"\n",(0,t.jsxs)(k,{groupId:"libraries",children:[(0,t.jsx)(q,{value:"rust",label:"Rust",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cargo add p2panda-rs\n"})})}),(0,t.jsx)(q,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"npm install p2panda-js\n"})})})]}),"\n",(0,t.jsx)(n.h3,{id:"usage",children:"Usage"}),"\n",(0,t.jsxs)(k,{groupId:"libraries",children:[(0,t.jsx)(q,{value:"rust",label:"Rust",default:!0,children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'use p2panda_rs::identity::KeyPair;\nlet key_pair = KeyPair::new();\nprintln!("{}", key_pair.public_key());\n'})})}),(0,t.jsx)(q,{value:"ts",label:"TypeScript",children:(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-javascript",children:'import { KeyPair } from "p2panda-js";\nconst keyPair = new KeyPair();\nconsole.log(keyPair.publicKey());\n'})})})]}),"\n",(0,t.jsx)(n.h2,{id:"aquadoggo",children:(0,t.jsx)(n.code,{children:"aquadoggo"})}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/p2panda/aquadoggo/",children:(0,t.jsx)(n.code,{children:"aquadoggo"})})," is the reference node server implementation for the p2panda network running as a command line application. It can also be embedded via the library inside your Rust program which allows you to write offline-first applications where both the client and the node live inside the same binary."]}),"\n",(0,t.jsx)(n.h3,{id:"documentation-1",children:"Documentation"}),"\n",(0,t.jsx)(n.p,{children:"You can find the API documentations under the following links:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.a,{href:"https://docs.rs/p2panda-rs/latest/aquadoggo/",children:"Rust"})}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"installation-1",children:"Installation"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cargo add aquadoggo\n"})}),"\n",(0,t.jsx)(n.h3,{id:"usage-1",children:"Usage"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:"use aquadoggo::{Configuration, Node};\nuse p2panda_rs::identity::KeyPair;\n\nlet config = Configuration::default();\nlet key_pair = KeyPair::new();\nlet node = Node::start(key_pair, config).await;\n"})}),"\n",(0,t.jsx)(n.h3,{id:"run-local-node",children:"Run local node"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"# Run local node at http://localhost:2020\ncargo run\n\n# Turn on some logging for debugging\ncargo run -- --log-level INFO\n"})}),"\n",(0,t.jsx)(n.admonition,{title:"There is a tutorial!",type:"tip",children:(0,t.jsxs)(n.p,{children:["Psst. Maybe you're interested in reading the ",(0,t.jsxs)(n.a,{href:"/tutorials/aquadoggo",children:["tutorial on how to use ",(0,t.jsx)(n.code,{children:"aquadoggo"})]}),"?"]})})]})}function D(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(P,{...e})}):P(e)}},1151:(e,n,a)=>{a.d(n,{Z:()=>i,a:()=>s});var t=a(7294);const r={},l=t.createContext(r);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),t.createElement(l.Provider,{value:n},e.children)}}}]);