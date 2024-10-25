"use strict";(self.webpackChunkaquadoggo_website=self.webpackChunkaquadoggo_website||[]).push([[5822],{7887:(e,i,n)=>{n.r(i),n.d(i,{assets:()=>r,contentTitle:()=>c,default:()=>o,frontMatter:()=>d,metadata:()=>t,toc:()=>a});var s=n(5893),l=n(1151);const d={id:"schemas",title:"Schemas"},c=void 0,t={id:"specifications/aquadoggo/data-types/schemas",title:"Schemas",description:"- Schemas are used to describe and validate the format in which data is published",source:"@site/docs/specifications/aquadoggo/data-types/schemas.md",sourceDirName:"specifications/aquadoggo/data-types",slug:"/specifications/aquadoggo/data-types/schemas",permalink:"/specifications/aquadoggo/data-types/schemas",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{id:"schemas",title:"Schemas"},sidebar:"specifications",previous:{title:"Operations",permalink:"/specifications/aquadoggo/data-types/operations"},next:{title:"Documents",permalink:"/specifications/aquadoggo/data-types/documents"}},r={},a=[{value:"Fields",id:"fields",level:2},{value:"<em>bool</em> fields",id:"bool-fields",level:3},{value:"<em>int</em> fields",id:"int-fields",level:3},{value:"<em>float</em> fields",id:"float-fields",level:3},{value:"<em>bytes</em> fields",id:"bytes-fields",level:3},{value:"<em>str</em> fields",id:"str-fields",level:3},{value:"<em>relation</em> fields",id:"relation-fields",level:3},{value:"System and Application Schemas",id:"system-and-application-schemas",level:2},{value:"Schema ID",id:"schema-id",level:3},{value:"System Schemas",id:"system-schemas",level:2},{value:"Schema Definition",id:"schema-definition",level:3},{value:"Schema Field Definition",id:"schema-field-definition",level:3}];function h(e){const i={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,l.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Schemas are used to describe and validate the format in which data is published"}),"\n",(0,s.jsxs)(i.li,{children:["Schemas are identified by their ",(0,s.jsx)(i.a,{href:"#schema-id",children:"schema id"})]}),"\n",(0,s.jsxs)(i.li,{children:["Schemas have a name, a description and a number of ",(0,s.jsx)(i.em,{children:"fields"})]}),"\n"]}),"\n",(0,s.jsxs)(i.admonition,{title:"Requirement SC1",type:"caution",children:[(0,s.jsxs)(i.p,{children:["The name of a schema MUST match the regular expression ",(0,s.jsx)(i.code,{children:"^[A-Za-z]{1}[A-Za-z0-9_]{0,62}[A-Za-z0-9]{1}$"})]}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The name of a schema MUST be at most 64 characters long"}),"\n",(0,s.jsx)(i.li,{children:"It begins with a letter"}),"\n",(0,s.jsxs)(i.li,{children:["It uses only alphanumeric characters, digits and the underscore character ( ",(0,s.jsx)(i.code,{children:"_"})," )"]}),"\n",(0,s.jsx)(i.li,{children:"It doesn't end with an underscore"}),"\n"]})]}),"\n",(0,s.jsx)(i.admonition,{title:"Requirement SC2",type:"caution",children:(0,s.jsx)(i.p,{children:"The description of a schema MUST consist of unicode characters and MUST be at most 256 characters long"})}),"\n",(0,s.jsx)(i.admonition,{title:"Requirement SC3",type:"caution",children:(0,s.jsx)(i.p,{children:"A schema MUST have at most 1024 fields"})}),"\n",(0,s.jsx)(i.h2,{id:"fields",children:"Fields"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["A field is defined by","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.em,{children:"field name"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.em,{children:"field type"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.admonition,{title:"Requirement SC4",type:"caution",children:[(0,s.jsxs)(i.p,{children:["The field name MUST match the regular expression ",(0,s.jsx)(i.code,{children:"^[A-Za-z]{1}[A-Za-z0-9_]{0,63}$"})]}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The field name MUST be at most 64 characters long"}),"\n",(0,s.jsx)(i.li,{children:"It begins with a letter"}),"\n",(0,s.jsxs)(i.li,{children:["It uses only alphanumeric characters, digits and the underscore character ( ",(0,s.jsx)(i.code,{children:"_"})," )"]}),"\n"]})]}),"\n",(0,s.jsxs)(i.admonition,{title:"Requirement SC5",type:"caution",children:[(0,s.jsx)(i.p,{children:"The field type MUST be one of:"}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.em,{children:"bool"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.em,{children:"int"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.em,{children:"float"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.em,{children:"bytes"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.em,{children:"str"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.em,{children:"relation"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.em,{children:"relation list"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.em,{children:"pinned relation"})}),"\n",(0,s.jsx)(i.li,{children:(0,s.jsx)(i.em,{children:"pinned relation list"})}),"\n"]})]}),"\n",(0,s.jsxs)(i.h3,{id:"bool-fields",children:[(0,s.jsx)(i.em,{children:"bool"})," fields"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Encode a boolean value"}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"int-fields",children:[(0,s.jsx)(i.em,{children:"int"})," fields"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Encode a signed 64 bit integer number"}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"float-fields",children:[(0,s.jsx)(i.em,{children:"float"})," fields"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Encode a 64 bit floating point number"}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"bytes-fields",children:[(0,s.jsx)(i.em,{children:"bytes"})," fields"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Encode a bytes (u8) string"}),"\n"]}),"\n",(0,s.jsxs)(i.h3,{id:"str-fields",children:[(0,s.jsx)(i.em,{children:"str"})," fields"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Encode a text string"}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{title:"Requirement SC6",type:"caution",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"str"})," fields MUST use unicode encoding"]})}),"\n",(0,s.jsxs)(i.h3,{id:"relation-fields",children:[(0,s.jsx)(i.em,{children:"relation"})," fields"]}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Encode a ",(0,s.jsx)(i.em,{children:"relation"})," to one or many other ",(0,s.jsx)(i.em,{children:"documents"})]}),"\n",(0,s.jsxs)(i.li,{children:["There are four kinds of relation fields","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Relations represent the whole referenced document through their ",(0,s.jsx)(i.em,{children:"document id"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"relation"}),": reference to a single document"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"relation list"}),": a list of references to documents"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Pinned relations point at immutable versions of documents through their ",(0,s.jsx)(i.em,{children:"document view ids"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"pinned relation"}),": reference to a single document view."]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"pinned relation list"}),": a list of references to document views"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{title:"Requirement SC7",type:"caution",children:(0,s.jsx)(i.p,{children:"All relation fields MUST define a schema that all referenced documents must conform to"})}),"\n",(0,s.jsx)(i.admonition,{title:"Requirement SC8",type:"caution",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.em,{children:"relation"})," fields MAY be self-referential in that their target is of the same schema. Self-referential relations MAY be interpreted as document ordering in ",(0,s.jsx)(i.a,{href:"/specifications/aquadoggo/APIs/queries",children:"queries"})]})}),"\n",(0,s.jsx)(i.h2,{id:"system-and-application-schemas",children:"System and Application Schemas"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"System schemas"})," are defined as part of the p2panda specification","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"The format of system schema operations can be validated by their CDDL definitions"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.em,{children:"Application schemas"})," are published by developers","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"They are used to validate the format of application specific data"}),"\n",(0,s.jsxs)(i.li,{children:["All developers can create new application schemas by publishing documents of the ",(0,s.jsx)(i.code,{children:"SchemaDefinition"})," and ",(0,s.jsx)(i.code,{children:"SchemaFieldDefinition"})," system schemas"]}),"\n",(0,s.jsx)(i.li,{children:"They are published as reusable data schemas and can be used in many applications"}),"\n",(0,s.jsxs)(i.li,{children:["System schemas may have unique procedures for ",(0,s.jsx)(i.a,{href:"/specifications/aquadoggo/data-types/documents",children:(0,s.jsx)(i.em,{children:"reduction"})}),", ",(0,s.jsx)(i.a,{href:"/specifications/aquadoggo/data-types/documents",children:(0,s.jsx)(i.em,{children:"reconciliation"})})," and ",(0,s.jsx)(i.em,{children:"persistence"})," of their documents"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"schema-id",children:"Schema ID"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"Schema ids are strings that uniquely identify a schema"}),"\n",(0,s.jsxs)(i.li,{children:["Every system schema's schema id is given in that schema's section below","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"They always start with the schema's name in snake case"}),"\n",(0,s.jsx)(i.li,{children:"Then an underscore separator"}),"\n",(0,s.jsx)(i.li,{children:"Then the letter v, followed by the schema's version number as an integer"}),"\n",(0,s.jsxs)(i.li,{children:["Example: ",(0,s.jsx)(i.code,{children:"key_group_v1"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["Application schema ids are constructed from the schema's name and document view id","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsx)(i.li,{children:"They consist of sections separated by an underscore"}),"\n",(0,s.jsx)(i.li,{children:"The first section is the name, which must have 1-64 characters, must start with a letter and must contain only alphanumeric characters and underscores"}),"\n",(0,s.jsxs)(i.li,{children:["The remaining sections are the document view id of the schema's ",(0,s.jsx)(i.code,{children:"schema_definition_v1"})," document, represented as alphabetically sorted hex-encoded operation ids, separated by underscores."]}),"\n",(0,s.jsxs)(i.li,{children:["Example ",(0,s.jsx)(i.code,{children:"profile_picture_0020c65567ae37efea293e34a9c7d13f8f2bf23dbdc3b5c7b9ab46293111c48fc78b"})]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.li,{children:["As application schema ids can potentially grow very large the ",(0,s.jsx)(i.em,{children:"schema hash id"})," is an alternative identifier with limited size","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Unless a limited-size identifier is required, the regular ",(0,s.jsx)(i.em,{children:"schema id"})," should be preferred as it's not possible to reconstruct the schema document from the ",(0,s.jsx)(i.em,{children:"schema hash id"})]}),"\n",(0,s.jsxs)(i.li,{children:["The schema hash id is constructed by concatenating","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["The schema's ",(0,s.jsx)(i.em,{children:"name"})]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.strong,{children:"Two"})," underscore characters (",(0,s.jsx)(i.code,{children:"__"}),")"]}),"\n",(0,s.jsxs)(i.li,{children:["The schema's ",(0,s.jsx)(i.em,{children:"document view hash id"})]}),"\n",(0,s.jsxs)(i.li,{children:["Example: ",(0,s.jsx)(i.code,{children:"profile_picture__0020c65567ae37efea293e34a9c7d13f8f2bf23dbdc3b5c7b9ab46293111c48fc78b"})]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.admonition,{title:"Requirement SC9",type:"caution",children:(0,s.jsx)(i.p,{children:"The name string in an application schema which MUST have 1-64 characters, MUST start with a letter and MUST contain only alphanumeric characters and underscores."})}),"\n",(0,s.jsx)(i.h2,{id:"system-schemas",children:"System Schemas"}),"\n",(0,s.jsx)(i.h3,{id:"schema-definition",children:"Schema Definition"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Schema id: ",(0,s.jsx)(i.code,{children:"schema_definition_v1"})]}),"\n",(0,s.jsxs)(i.li,{children:["Used to publish ",(0,s.jsx)(i.a,{href:"#system-and-application-schemas",children:"application schemas"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fields:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"}),": string"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"description"}),": string"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"fields"}),": a pinned relation list referencing ",(0,s.jsx)(i.code,{children:"schema_field_definition_v1"})," documents"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(i.h3,{id:"schema-field-definition",children:"Schema Field Definition"}),"\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:["Schema id: ",(0,s.jsx)(i.code,{children:"schema_field_definition_v1"})]}),"\n",(0,s.jsxs)(i.li,{children:["Defines individual fields for ",(0,s.jsx)(i.a,{href:"#schema-definition",children:"schema definitions"})]}),"\n",(0,s.jsxs)(i.li,{children:["Fields:","\n",(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"name"}),": string"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"type"}),": string"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(i.admonition,{title:"Requirement SC10",type:"caution",children:[(0,s.jsxs)(i.p,{children:[(0,s.jsx)(i.code,{children:"schema_field_definition_v1"})," ",(0,s.jsx)(i.em,{children:"type"})," field MUST be one of"]}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"bool"}),": boolean"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"int"}),": integer number"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"float"}),": floating point number"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"bytes"}),": bytes string"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"str"}),": text string"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"relation(<schema_id>)"}),": reference to a document"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"relation_list(<schema_id>)"}),": a list of references to documents"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"pinned_relation(<schema_id>)"}),": reference to a document view"]}),"\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"pinned_relation_list(<schema_id>)"}),": a list of references to document views"]}),"\n"]}),(0,s.jsxs)(i.p,{children:["All ",(0,s.jsx)(i.em,{children:"relation"})," field types need to specify a schema"]}),(0,s.jsxs)(i.ul,{children:["\n",(0,s.jsxs)(i.li,{children:[(0,s.jsx)(i.code,{children:"<schema_id>"})," in the above listing needs to be a valid schema id"]}),"\n",(0,s.jsx)(i.li,{children:"Documents referenced by any relation field, to which this schema field definition applies, need to be of this schema"}),"\n",(0,s.jsxs)(i.li,{children:["E.g. if you are publishing an operation to update a field with the type ",(0,s.jsx)(i.code,{children:"relation(key_group_v1)"}),", the field value\nneeds to be the document id of a ",(0,s.jsx)(i.code,{children:"key_group_v1"})," document"]}),"\n"]})]})]})}function o(e={}){const{wrapper:i}={...(0,l.a)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},1151:(e,i,n)=>{n.d(i,{Z:()=>t,a:()=>c});var s=n(7294);const l={},d=s.createContext(l);function c(e){const i=s.useContext(d);return s.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function t(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:c(e.components),s.createElement(d.Provider,{value:i},e.children)}}}]);