"use strict";(self.webpackChunkaquadoggo_website=self.webpackChunkaquadoggo_website||[]).push([[4061],{3121:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>r,contentTitle:()=>a,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var n=t(5893),o=t(1151);const s={id:"blob-http",title:"Blob HTTP service"},a=void 0,l={id:"specifications/aquadoggo/APIs/blob-http",title:"Blob HTTP service",description:"This document describes how Blobs are materialized to the filesystem and served from a node over HTTP endpoints.",source:"@site/docs/specifications/aquadoggo/APIs/blob-http.md",sourceDirName:"specifications/aquadoggo/APIs",slug:"/specifications/aquadoggo/APIs/blob-http",permalink:"/specifications/aquadoggo/APIs/blob-http",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"blob-http",title:"Blob HTTP service"},sidebar:"specifications",previous:{title:"Queries",permalink:"/specifications/aquadoggo/APIs/queries"},next:{title:"Clients and nodes",permalink:"/specifications/aquadoggo/networking/clients-nodes"}},r={},d=[{value:"Materialization",id:"materialization",level:2},{value:"Serving over HTTP",id:"serving-over-http",level:2}];function c(e){const i={code:"code",em:"em",h2:"h2",li:"li",p:"p",ul:"ul",...(0,o.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.p,{children:"This document describes how Blobs are materialized to the filesystem and served from a node over HTTP endpoints."}),"\n",(0,n.jsx)(i.h2,{id:"materialization",children:"Materialization"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["When a ",(0,n.jsx)(i.code,{children:"blob_v1"})," document and all it's ",(0,n.jsx)(i.code,{children:"blob_piece_v1"})," pieces are present on a node it can be materialized and served to client applications over a HTTP endpoint"]}),"\n",(0,n.jsx)(i.li,{children:"Unlike other documents which are materialized into tables in a database, blobs are materialized directly on the filesystem"}),"\n",(0,n.jsx)(i.li,{children:"Even if all pieces are present, a blob is only materialized when it is referenced in a relation field by another document"}),"\n",(0,n.jsxs)(i.li,{children:["As these relations can be either ",(0,n.jsx)(i.em,{children:"pinned"})," or ",(0,n.jsx)(i.em,{children:"unpinned"})," we support materializing a blob by both it's document id and document view id","\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["When a blob is referenced in a ",(0,n.jsx)(i.code,{children:"relation"})," or ",(0,n.jsx)(i.code,{children:"relation_list"})," field then it should be materialized to it's latest view"]}),"\n",(0,n.jsxs)(i.li,{children:["When a blob is referenced in a ",(0,n.jsx)(i.code,{children:"pinned_relation"})," or ",(0,n.jsx)(i.code,{children:"pinned_relation_list"})," field it should be materialized to the requested view id"]}),"\n",(0,n.jsxs)(i.li,{children:["Once the correct view id has been established, a blob should be materialized by collecting all it's ",(0,n.jsx)(i.code,{children:"blob_piece_v1"})," documents, concatenating them, and storing them on the filesystem at the following path: ",(0,n.jsx)(i.code,{children:"/blob/<DOCUMENT_ID>/<DOCUMENT_VIEW_ID>"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(i.h2,{id:"serving-over-http",children:"Serving over HTTP"}),"\n",(0,n.jsxs)(i.ul,{children:["\n",(0,n.jsxs)(i.li,{children:["A static file HTTP server should watch the blob directory and serve all files via an HTTP endpoint like so: ",(0,n.jsx)(i.code,{children:"https://myaquadoggo.net/blob/<DOCUMENT_ID>/<DOCUMENT_VIEW_ID>"})]}),"\n",(0,n.jsxs)(i.li,{children:["Additionally, in order to support serving documents by their document id, the HTTP service should forward requests arriving at ",(0,n.jsx)(i.code,{children:"https://myaquadoggo.net/blob/<DOCUMENT_ID>"})," to the location of the documents latest materialized view"]}),"\n"]})]})}function h(e={}){const{wrapper:i}={...(0,o.a)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},1151:(e,i,t)=>{t.d(i,{Z:()=>l,a:()=>a});var n=t(7294);const o={},s=n.createContext(o);function a(e){const i=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function l(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:a(e.components),n.createElement(s.Provider,{value:i},e.children)}}}]);