"use strict";(self.webpackChunkaquadoggo_website=self.webpackChunkaquadoggo_website||[]).push([[3634],{2404:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=t(5893),o=t(1151);const i={title:"Tutorial: Advanced Queries"},s=void 0,r={id:"tutorials/queries",title:"Tutorial: Advanced Queries",description:"When building an app with p2panda using an aquadoggo node (embedded/local/shared) for your the",source:"@site/docs/tutorials/queries.md",sourceDirName:"tutorials",slug:"/tutorials/queries",permalink:"/tutorials/queries",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Tutorial: Advanced Queries"}},d={},l=[{value:"What do I need?",id:"what-do-i-need",level:2},{value:"What is <code>aquadoggo</code>?",id:"what-is-aquadoggo",level:2},{value:"Install <code>aquadoggo</code>",id:"install-aquadoggo",level:3},{value:"About the tutorial",id:"about-the-tutorial",level:2},{value:"Schema",id:"schema",level:2},{value:"Step 1: Deploy Schema and Seed Data",id:"step-1-deploy-schema-and-seed-data",level:2},{value:"Step 2: Filtering",id:"step-2-filtering",level:2},{value:"Step 3: Using relations",id:"step-3-using-relations",level:2},{value:"Step 4: Ordering",id:"step-4-ordering",level:2},{value:"Step 5: Pagination",id:"step-5-pagination",level:2},{value:"The End",id:"the-end",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["When building an app with p2panda using an ",(0,a.jsx)(n.code,{children:"aquadoggo"})," node (embedded/local/shared) for your the\nprimary interface you'll use for interacting with application data is the GraphQL API. Once you've\npublished some data, this is how you get it back to populate your UI. Especially when your node is\nembedded or local (meaning it's running on the same system as your app) then you can rely on the\nlocal node for much of your application state, greatly reducing the state logic you need to write\nin the frontend. This is greatly thanks to the fact that for the schema supported by your node,\nGraphQL query methods are automagically generated, and they come with a powerful API for filtering, ordering,\npaginating your collection queries, as well as query trees giving you access to values on related\ndocuments."]}),"\n",(0,a.jsx)(n.admonition,{title:"Is it really automagical?",type:"info",children:(0,a.jsxs)(n.p,{children:["Yes! This is worth re-stating, to get the query interface we're going to explore in this tutorial,\nyou don't need to write any backend code, just use ",(0,a.jsx)(n.code,{children:"aquadoggo"}),", then design and publish the schema\nyou want to use. Your data will instantly be exposed via a fancy query interface, ready to be used\nin your application (it'll also have p2p superpowers, but that's not what we're here to talk about\nnow)."]})}),"\n",(0,a.jsxs)(n.p,{children:["We're going to look mostly at the generated GraphQL endpoints in this tutorial, and some previous\nknowledge of p2panda schema is assumed. If you need, take a look at the ",(0,a.jsx)(n.a,{href:"/tutorials/fishy",children:'"Create a\nschema"'})," tutorial to learn about schema, or if it all feels unfamiliar then you\ncan start from the beginning with ",(0,a.jsx)(n.a,{href:"/tutorials/aquadoggo/",children:'"Set up a local node"'}),"."]}),"\n",(0,a.jsx)(n.admonition,{title:"This isn't a GraphQL tutorial",type:"warning",children:(0,a.jsxs)(n.p,{children:["GraphQL is a common query language, it's possible to work through this tutorial without any\nknowledge of it, but a little primer would probably be beneficial. ",(0,a.jsx)(n.a,{href:"https://graphql.org/",children:"GraphQL\nhomepage"})," has useful learning resources."]})}),"\n",(0,a.jsx)(n.h2,{id:"what-do-i-need",children:"What do I need?"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Browser"}),"\n",(0,a.jsx)(n.li,{children:"terminal"}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"aquadoggo"})," node"]}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"what-is-aquadoggo",children:["What is ",(0,a.jsx)(n.code,{children:"aquadoggo"}),"?"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"aquadoggo"})," is a p2panda node implementation and command-line-tool, it's our gateway into the p2panda network. You can learn more about it in the ",(0,a.jsx)(n.a,{href:"/tutorials/aquadoggo",children:"Set up a local node"})," tutorial."]}),"\n",(0,a.jsxs)(n.h3,{id:"install-aquadoggo",children:["Install ",(0,a.jsx)(n.code,{children:"aquadoggo"})]}),"\n",(0,a.jsxs)(n.p,{children:["Head over to the ",(0,a.jsx)(n.a,{href:"https://github.com/p2panda/aquadoggo/releases",children:"Releases"})," page and download the pre-compiled binary for your platform. This tutorial was written using ",(0,a.jsx)(n.code,{children:"v0.7.1"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Or on the command line (linux system example):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"curl -L https://github.com/p2panda/aquadoggo/releases/download/v0.7.1/aquadoggo-v0.7.1-x86_64-unknown-linux-gnu.tar.gz | tar -xz\n"})}),"\n",(0,a.jsx)(n.h2,{id:"about-the-tutorial",children:"About the tutorial"}),"\n",(0,a.jsxs)(n.p,{children:["This tutorial is itself a p2panda client! You will use ",(0,a.jsx)(n.code,{children:"shirokuma"})," (p2panda TypeScript SDK) to create documents on your\nlocal node, and then query them back with a minimal GraphQL client. In a moment you'll be asked to\nwork in live code editors to update configuration variables and try out different queries. Each of\nthese code editors is using p2panda under the hood and talking with your local node!"]}),"\n",(0,a.jsx)(n.admonition,{title:"But how does it all work?",type:"info",children:(0,a.jsx)(n.p,{children:"In this tutorial we're only focussing on the query API so as much of the inner-workings of a\np2panda application are hidden as possible. There will be a little hand-waving magic. Please\nexplore our other tutorials to learn about these other aspects of p2panda development."})}),"\n",(0,a.jsx)(n.h2,{id:"schema",children:"Schema"}),"\n",(0,a.jsx)(n.p,{children:"Before we can start playing around with queries, we need some schema. I've prepared some we can\nwork with for this tutorial, in a moment we'll publish some seed data for them too. We have three\nschema which could be used to build a language learning tool, they are:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"vocabulary"}),": Japanese-Language Proficiency Test vocabulary from N5 to N1"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"study_sets"}),': Study sets for group vocabulary into useful categories (eg. "new words", "holiday\nvocab", etc...)']}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"study_set_members"}),": A join between a ",(0,a.jsx)(n.code,{children:"vocabulary"})," document and a ",(0,a.jsx)(n.code,{children:"study_sets"})," document, we use\nthis for adding words to a study set and attaching some useful meta data"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["This ",(0,a.jsx)(n.code,{children:"schema.toml"})," file defines the schema, their field types and relations, and can be used to\nbuild and deploy the schema to a node with the command line tool ",(0,a.jsx)(n.code,{children:"fishy"}),". ",(0,a.jsx)(n.code,{children:"fishy"})," also, very\nhelpfully, generates a ",(0,a.jsx)(n.code,{children:"schema.lock"})," file which can be included in your project and published to\nthe node from the client. That's what has been done in this tutorial! So you don't need to do\nanything yet."]}),"\n",(0,a.jsx)(n.p,{children:"Through exploring examples of how one would want to work with this data in a real application\nwe'll learn about the different ways you can tailor your queries over collections of data."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-toml",children:'[vocabulary]\ndescription = "Japanese-Language Proficiency Test vocabulary from N5 to N1"\n\n[vocabulary.fields]\nword = { type = "str" }\nmeaning = { type = "str" }\nfurigana = { type = "str" }\nromaji = { type = "str" }\nlevel = { type = "int" }\n\n[study_sets]\ndescription = "Custom JLPT vocabulary study set"\n\n[study_sets.fields]\ntitle = { type = "str" }\ndescription = { type = "str" }\n\n[study_set_members]\ndescription = "Item in a custom JLPT vocabulary study set"\n\n[study_set_members.fields]\nstudy_set = { type = "relation", schema = { name = "study_sets" } }\nmember = { type = "relation", schema = { name = "vocabulary" } }\ndate_added = { type = "int" }\nrating = { type = "float" }\nlast_studied = { type = "int" }\n'})}),"\n",(0,a.jsx)(n.h2,{id:"step-1-deploy-schema-and-seed-data",children:"Step 1: Deploy Schema and Seed Data"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ACTION"}),": Ok, now you need to start your ",(0,a.jsx)(n.code,{children:"aquadoggo"}),". If you downloaded it as described above\nand you're in the correct folder you can start it with the following command."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./aquadoggo --log-level=info\n"})}),"\n",(0,a.jsx)(n.admonition,{title:"Ephemeral node",type:"warning",children:(0,a.jsx)(n.p,{children:"A node started with the above command is in \"ephemeral\" mode, meaning it won't persist any data between\nruns. If you stop it at any point, you'll have to repeat the following step before continuing with the\ntutorial again."})}),"\n",(0,a.jsx)(n.p,{children:"If this is the first time working through this tutorial then your node won't know about the schema\nyet, or contain any seed data. This should be apparent from the UI interface rendered in the live\ncode editor below. There should be a \u2705 showing the node is online, but a \u274c showing no schema or\nseed data was detected."}),"\n",(0,a.jsx)(n.admonition,{title:"Node status",type:"info",children:(0,a.jsx)(n.p,{children:"We're getting this status info by already sending queries to the node and seeing if the expected\nschema exist."})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function BootstrapNodeApp(props) {\n  window.ENDPOINT = 'http://localhost:2020';\n\n  return (\n    <App header=\"\ud83d\udc2c \ud83c\udd97\">\n      <BootstrapNode></BootstrapNode>\n    </App>\n  );\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ACTION"}),": Click the ",(0,a.jsx)(n.code,{children:"Deploy Schema"})," and then ",(0,a.jsx)(n.code,{children:"Publish Seed Data"})," buttons above. This will deploy the schema and then publish\nall the seed data we're gunna use in the rest of this tutorial. If for any reason your node isn't listening on the default http address\n(it should be if you ran the above command) then just update ",(0,a.jsx)(n.code,{children:"ENDPOINT"})," in the code above."]}),"\n",(0,a.jsxs)(n.admonition,{title:"GraphQL playground",type:"info",children:[(0,a.jsxs)(n.p,{children:["At this point I have to hold up my hands and admit that some parts of this tutorial tooling are\nmassive over-kill... That's because ",(0,a.jsx)(n.code,{children:"aquadoggo"})," already gives you a full featured query interface\nonto your nodes data with the GraphQL playground which is accessible at\n",(0,a.jsx)(n.a,{href:"http://localhost:2020/graphql",children:"http://localhost:2020/graphql"}),". If you head over there now you\nwill be able to inspect the deployed schema already and run queries against them."]}),(0,a.jsxs)(n.p,{children:["It's ",(0,a.jsx)(n.em,{children:"more fun"})," to do it inline in fancy little live code editors though!! Right??"]})]}),"\n",(0,a.jsx)(n.h2,{id:"step-2-filtering",children:"Step 2: Filtering"}),"\n",(0,a.jsx)(n.p,{children:"So now we have our schema and seed data deployed, the node has automatically rebuilt the GraphQL\napi in the background and we can start querying data."}),"\n",(0,a.jsxs)(n.p,{children:["Let's begin with a query over all vocabulary documents. The seed data contained 100 words from\nlevel N5 - N1 Japanese vocabulary. We want to retrieve the actual Japanese ",(0,a.jsx)(n.code,{children:"word"})," and it's english\n",(0,a.jsx)(n.code,{children:"meaning"})," from the document's fields, and we want to filter on sub-strings from the ",(0,a.jsx)(n.code,{children:"meaning"}),"\nfield and match against certain levels."]}),"\n",(0,a.jsxs)(n.p,{children:["Additionally we want to take the ",(0,a.jsx)(n.code,{children:"documentId"})," from the ",(0,a.jsx)(n.code,{children:"meta"})," fields section. This is the unique\nid of a document and we'll be using it later."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ACTION"}),": The above can be achieved with the following query, try changing the ",(0,a.jsx)(n.code,{children:"MEANING"})," and ",(0,a.jsx)(n.code,{children:"LEVEL"})," values\nand see the returned results change. If your node was offline when you started the tutorial you\nmay need to refresh the query to see initial query results (top right refresh button in UI below),\nediting the query in the code below also triggers a new query to occur."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function QueriesApp(props) {\n  const SCHEMA_ID =\n    'vocabulary_0020840f74f3a3ca502c80b12ba54e5738c435d27e9c0717214a38173a3e31a75752';\n\n  const MEANING = '';\n  const LEVELS = [4, 5];\n\n  const query = `\n    query {\n      all_${SCHEMA_ID}(\n        filter: { \n          meaning: { contains: \"${MEANING}\" }, \n          level: { in: [${LEVELS}] }\n        }\n      ) {\n        totalCount\n        documents {\n          fields {\n            word\n            meaning\n          }\n          meta {\n            documentId\n          }\n        }\n      }\n    }\n  `;\n\n  return (\n    <App header=\"\ud83d\udd0d \ud83d\uddce\">\n      <Query query={query}></Query>\n    </App>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"All the filters available to you are:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"in"}),": Filter by values in set."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"notIn"}),": Filter by values not in set."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"eq"}),": Filter by equal to."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"notEq"}),": Filter by not equal to."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"gte"}),": Filter by greater than or equal to."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"gt"}),": Filter by greater than."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"lte"}),": Filter by less than or equal to."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"lt"}),": Filter by less than."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"contains"}),": Filter for items which contain given value."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"notContains"}),": Filter for items which don't contain given value."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"step-3-using-relations",children:"Step 3: Using relations"}),"\n",(0,a.jsxs)(n.p,{children:["In the previous step we searched over a collection of documents following the ",(0,a.jsx)(n.code,{children:"vocabulary"})," schema.\nWe want to be able to add vocabulary documents to a ",(0,a.jsx)(n.code,{children:"schema_sets"})," document and track our progress\nin learning them. There are already some example study sets published to the node, let's add some\nvocabulary to them."]}),"\n",(0,a.jsxs)(n.p,{children:["If we look at the ",(0,a.jsx)(n.code,{children:"study_set_members"})," schema above, we'll see that there is a field called\n",(0,a.jsx)(n.code,{children:"member"})," which is of type ",(0,a.jsx)(n.code,{children:"relation"})," which points to a vocabulary document. Additionally we can\nsee the ",(0,a.jsx)(n.code,{children:"study_set"})," field is also a relation pointing to a ",(0,a.jsx)(n.code,{children:"study_sets"})," document. With these two\nfields we can join a vocabulary document to a study set document, that's exactly what we want."]}),"\n",(0,a.jsxs)(n.p,{children:["The other fields (",(0,a.jsx)(n.code,{children:"data_added"}),", ",(0,a.jsx)(n.code,{children:"last_studied"})," and ",(0,a.jsx)(n.code,{children:"rating"}),") are all metadata attached to this\nparticular entry in this particular study set."]}),"\n",(0,a.jsxs)(n.p,{children:["In step 2 we already queried all vocabulary, we can use ",(0,a.jsx)(n.code,{children:"documentId"})," from the results to add\nvocabulary to a study set below."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ACTION"}),": Copy a ",(0,a.jsx)(n.code,{children:"documentId"}),' from one of the words returned by your vocabulary query in step 2\nand paste it into the "Vocabulary ID" input field below. You also need to select the study set you\nwant to add it to. Then click the "Add" button. You should see a message pop up saying "Created\nstudy set member with document id: ...". Well done, you created a relation between documents! Copy\nthe ',(0,a.jsx)(n.code,{children:"document id"})," printed in the message as we'll need this in a moment. You can also add a few\nmore words to the study sets so our later queries are a little more interesting."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function QueriesApp(props) {\n  const STUDY_SETS_SCHEMA_ID =\n    'study_sets_002055142f8a42052fe558891fb33b707fa16367ae4ebba876ba900cf4870a352ad6';\n\n  // We use this query to get back 3 study sets and use them in our form element. You don't\n  // need to change this, it's just here for demonstration purposes. We'll learn more about\n  // this \"first\" argument in Step 6.\n  const query = `\n    query {\n      all_${STUDY_SETS_SCHEMA_ID}(first: 3) {\n        documents {\n          fields {\n            title\n          }\n          meta {\n            documentId\n          }\n        }\n      }\n    }\n  `;\n\n  return (\n    <App header=\"\ud83d\udc95 \ud83d\uddc2\ufe0f\">\n      <StudySetForm studySetsQuery={query}></StudySetForm>\n    </App>\n  );\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["We've now created some ",(0,a.jsx)(n.code,{children:"study_set_members"})," documents so let's compose a query for fetching them\nback from the node, selecting not only fields from the target document, but also documents it\ncontains a relation to."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ACTION"}),': Paste the document ID which popped up under the form after you clicked "Add" into the\ncode below, replacing ',(0,a.jsx)(n.code,{children:"<DOCUMENT_ID>"}),". You'll see that the results come back with values included\nfrom the related ",(0,a.jsx)(n.code,{children:"study_sets"})," and ",(0,a.jsx)(n.code,{children:"vocabulary"})," documents."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function QueriesApp(props) {\n  const SCHEMA_ID =\n    'study_set_members_0020c2500c3088b01a98f4a7cfdab6037371ac64d4b929d4677daf39a3aa0c257612';\n\n  const STUDY_SET_ITEM_DOCUMENT_ID = '<DOCUMENT_ID>';\n\n  const query = `\n    query {\n      ${SCHEMA_ID}(id: \"${STUDY_SET_ITEM_DOCUMENT_ID}\") {\n        fields {\n          date_added\n          last_studied\n          rating\n          member {\n            fields {\n              word\n              meaning\n            }\n          }\n          study_set {\n            fields {\n              title\n            }\n          }\n        }\n      }\n    }\n  `;\n\n  return (\n    <App header=\"\ud83d\udd0d \ud83d\uddce\">\n      <Query query={query}></Query>\n    </App>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"step-4-ordering",children:"Step 4: Ordering"}),"\n",(0,a.jsxs)(n.p,{children:["A common approach to learning new vocabulary for any language is to priorities studying words\nwhich you don't know very well, or which you haven't looked at in a while. The query below models\nthis behavior by requesting to order the resulting collection by ",(0,a.jsx)(n.code,{children:"last_studied"})," timestamp, oldest\nfirst. We additionally filter by ",(0,a.jsx)(n.code,{children:"rating"})," as we want to only look at words where our rating is\nlow. And we want to look at one word at a time, so we just get the first word."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"ACTION"}),": Currently the query looks at vocabulary from ",(0,a.jsx)(n.em,{children:"all"})," study sets, this is likely not the\nbehavior we want, normally you'd be interested in words from one single study set. Try adding in a\nfilter on the ",(0,a.jsx)(n.code,{children:"study_set"})," field containing the ",(0,a.jsx)(n.code,{children:"documentId"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:"function QueriesApp(props) {\n  const SCHEMA_ID =\n    'study_set_members_0020c2500c3088b01a98f4a7cfdab6037371ac64d4b929d4677daf39a3aa0c257612';\n\n  const RATING = 5;\n\n  const query = `\n    query {\n      all_${SCHEMA_ID}(\n        first: 1\n        orderBy: last_studied\n        orderDirection: ASC\n        filter: { \n          rating: { lte: ${RATING} }\n        }\n      ) {\n        totalCount\n        documents {\n          fields {\n            date_added\n            last_studied\n            rating\n            member {\n              fields {\n                word\n                meaning\n              }\n            }\n            study_set {\n              fields {\n                title\n              }\n              meta {\n                documentId\n              }\n            }\n          }\n        }\n      }\n    }\n  `;\n\n  return (\n    <App header=\"\ud83d\udd0d \ud83d\uddce\">\n      <Query query={query}></Query>\n    </App>\n  );\n}\n"})}),"\n",(0,a.jsx)(n.h2,{id:"step-5-pagination",children:"Step 5: Pagination"}),"\n",(0,a.jsxs)(n.p,{children:['Ok, finally, pagination. When you\'re querying over larger collections of data, you want to be able\nto get back smaller chunks at a time, and incrementally fetch the "next" batch. This is called\npagination, you get one page at a time, which contains a specified number of items. The\n',(0,a.jsx)(n.code,{children:"aquadoggo"})," API we're working with now implements cursor based pagination. Each item in your query\nresult can be identified by a cursor, and we can choose which cursor a queries results should\nstart after. This allows us to paginate over large query results from our application."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-jsx",metastring:"live",live:!0,children:'function QueriesApp(props) {\n  const SCHEMA_ID =\n    \'vocabulary_0020840f74f3a3ca502c80b12ba54e5738c435d27e9c0717214a38173a3e31a75752\';\n\n  const queryBuilder = (after) => `\n    query {\n      all_${SCHEMA_ID}(\n        first: 10\n        ${after ? `after: "${after}",` : \'\'} \n      ) {\n        totalCount\n        hasNextPage\n        endCursor\n        documents {\n          fields {\n            word\n          }\n          meta {\n            documentId\n          }\n        }\n      }\n    }\n  `;\n\n  return (\n    <App header="\ud83d\udd0d \ud83d\uddce">\n      <PaginatedQuery queryBuilder={queryBuilder} endCursor=""></PaginatedQuery>\n    </App>\n  );\n}\n'})}),"\n",(0,a.jsx)(n.h2,{id:"the-end",children:"The End"}),"\n",(0,a.jsx)(n.p,{children:"We covered a lot there, well done making it to the end \ud83c\udf89! From here you should be able to start\ndesigning schema for your application with the resulting query interface in mind. Happy querying!"})]})}function h(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(c,{...e})}):c(e)}},1151:(e,n,t)=>{t.d(n,{Z:()=>r,a:()=>s});var a=t(7294);const o={},i=a.createContext(o);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);