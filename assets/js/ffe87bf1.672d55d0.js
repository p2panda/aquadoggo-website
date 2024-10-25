"use strict";(self.webpackChunkaquadoggo_website=self.webpackChunkaquadoggo_website||[]).push([[9573],{1665:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>d});var t=i(5893),o=i(1151);const s={id:"documents",title:"Documents"},a=void 0,r={id:"specifications/aquadoggo/data-types/documents",title:"Documents",description:"- A Document is a high-level mutable, multi-writer data type constructed from a linked graph of operations.",source:"@site/docs/specifications/aquadoggo/data-types/documents.md",sourceDirName:"specifications/aquadoggo/data-types",slug:"/specifications/aquadoggo/data-types/documents",permalink:"/specifications/aquadoggo/data-types/documents",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"documents",title:"Documents"},sidebar:"specifications",previous:{title:"Schemas",permalink:"/specifications/aquadoggo/data-types/schemas"},next:{title:"Document views",permalink:"/specifications/aquadoggo/data-types/document-views"}},c={},d=[{value:"Viewing a document",id:"viewing-a-document",level:2},{value:"1. Reconciliation",id:"1-reconciliation",level:3},{value:"2. Reduction",id:"2-reduction",level:3}];function l(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["A Document is a high-level mutable, multi-writer data type constructed from a linked graph of ",(0,t.jsx)(n.a,{href:"/specifications/aquadoggo/data-types/operations",children:"operations"}),"."]}),"\n",(0,t.jsx)(n.li,{children:"Through a deterministic process the graph can be reduced to a single key-value map."}),"\n",(0,t.jsx)(n.li,{children:"Any two documents (replicas) which contain the same collection of operations will resolve to the same value."}),"\n",(0,t.jsxs)(n.li,{children:["A document is identified by the operation id of its root CREATE operation (aka ",(0,t.jsx)(n.em,{children:"document_id"}),")."]}),"\n",(0,t.jsx)(n.li,{children:"A document assumes the schema of its root CREATE operation"}),"\n",(0,t.jsxs)(n.li,{children:["A document is made up of operations published by one or many authors","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Branches in a document's graph occur when two authors publish operations concurrently"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["Every operation has a ",(0,t.jsx)(n.code,{children:"previous"})," field containing a ",(0,t.jsx)(n.code,{children:"document_view_id"})," which refers to document state ",(0,t.jsx)(n.em,{children:"at the moment the operation was encoded"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["These ",(0,t.jsx)(n.code,{children:"previous"})," references make up the edges in a graph, the operations being the nodes."]}),"\n",(0,t.jsx)(n.li,{children:"The graph describes the causal relationship between all operations in a document."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Fun fact",type:"tip",children:(0,t.jsx)(n.p,{children:"Some things that may be a document in p2panda: a blog post, a wiki page, a chat message, a user account, a configuration setting, a game board."})}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement DO1",type:"caution",children:(0,t.jsx)(n.p,{children:"A document MUST contain exactly one CREATE operation."})}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement DO2",type:"caution",children:(0,t.jsx)(n.p,{children:"A document's operation graph MUST NOT contain any cycles."})}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement DO3",type:"caution",children:(0,t.jsxs)(n.p,{children:["A document MUST NOT contain an operation who's ",(0,t.jsx)(n.code,{children:"previous"})," refers to an operation not present in the document's graph."]})}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement DO4",type:"caution",children:(0,t.jsx)(n.p,{children:"A document MAY contain any number of DELETE operations. Document's which contain one or more DELETE operations no longer produce a materialised view."})}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement DO5",type:"caution",children:(0,t.jsx)(n.p,{children:"A documents' operations MUST be encoded on entries which are published to a single log for each contributing author/public key."})}),"\n",(0,t.jsx)(n.h2,{id:"viewing-a-document",children:"Viewing a document"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"When viewing documents, it's state must be reduced to a single key-value map, this process involves two steps:"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Definition: Materialisation",type:"info",children:(0,t.jsxs)(n.p,{children:["Although here we describe the resolving an operation graph as a property of the data type ",(0,t.jsx)(n.em,{children:"document"})," it can also be seen as the process of ",(0,t.jsx)(n.em,{children:"materialisation"}),". This is a term borrowed from database terminology, where views on data can be materialised into virtual tables. This is a useful concept in p2panda and one that is used often."]})}),"\n",(0,t.jsx)(n.h3,{id:"1-reconciliation",children:"1. Reconciliation"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"The first step we take is to sort and linearise the document's graph of operations deterministically."}),"\n",(0,t.jsx)(n.li,{children:"We do this by applying a topological depth-first sorting algorithm which meets the following requirements:"}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement DO6",type:"caution",children:(0,t.jsx)(n.p,{children:"Sorting MUST start from the document's CREATE operation."})}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement DO7",type:"caution",children:(0,t.jsxs)(n.p,{children:["An operation which refers to the current operation in its ",(0,t.jsx)(n.code,{children:"previous"})," field MUST be sorted next."]})}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement DO8",type:"caution",children:(0,t.jsxs)(n.p,{children:["If multiple operations refer to the current, the one with the lowest ",(0,t.jsx)(n.code,{children:"document_id"})," MUST be sorted next."]})}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement DO9",type:"caution",children:(0,t.jsx)(n.p,{children:"When visiting a branch, all operations it contains MUST be visited and sorted before continuing to the rest of the graph."})}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement D10",type:"caution",children:(0,t.jsx)(n.p,{children:"All operations in the graph MUST be sorted exactly once."})}),"\n",(0,t.jsx)(n.admonition,{title:"Requirement D11",type:"caution",children:(0,t.jsx)(n.p,{children:"If any DELETE operation is visited, materialisation of the document MUST stop immediately. The resulting document view id MUST include\nonly the id of the DELETE operation and a document view SHOULD NOT be produced."})}),"\n",(0,t.jsx)(n.h3,{id:"2-reduction",children:"2. Reduction"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"The second and final step is to reduce the linearised list of operations into a single key-value map by applying the following rules:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Deserialise all fields of the document's CREATE operation to produce a ",(0,t.jsx)(n.em,{children:"document view"})]}),"\n",(0,t.jsxs)(n.li,{children:["If the next operation in the document is an UPDATE operation","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["for every field in the operation","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"overwrite this field's contents on the view with the contents from the operation"}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["If the next operation in the document is a DELETE operation","\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"remove the content on all fields of the view"}),"\n",(0,t.jsx)(n.li,{children:"mark the view delete"}),"\n",(0,t.jsx)(n.li,{children:"stop reduction here"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.li,{children:"Stop reduction if there is no next known operation in the document"}),"\n",(0,t.jsx)(n.li,{children:"Continue with step 2. otherwise"}),"\n"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}},1151:(e,n,i)=>{i.d(n,{Z:()=>r,a:()=>a});var t=i(7294);const o={},s=t.createContext(o);function a(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);