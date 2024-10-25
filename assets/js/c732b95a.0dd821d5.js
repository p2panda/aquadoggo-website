"use strict";(self.webpackChunkaquadoggo_website=self.webpackChunkaquadoggo_website||[]).push([[9595],{8034:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>s,default:()=>c,frontMatter:()=>i,metadata:()=>r,toc:()=>l});var a=o(5893),t=o(1151);const i={title:"Tutorial: Set up a local node"},s=void 0,r={id:"tutorials/aquadoggo",title:"Tutorial: Set up a local node",description:"This tutorial walks you through setting up a locally running p2panda node on your computer and shows you how you can configure it and interact with it via the GraphQL playground.",source:"@site/docs/tutorials/aquadoggo.md",sourceDirName:"tutorials",slug:"/tutorials/aquadoggo",permalink:"/tutorials/aquadoggo",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Tutorial: Set up a local node"}},d={},l=[{value:"But what <em>is</em> an <code>aquadoggo</code>?",id:"but-what-is-an-aquadoggo",level:2},{value:"What do I need?",id:"what-do-i-need",level:2},{value:"Download <code>aquadoggo</code>",id:"download-aquadoggo",level:2},{value:"Start the node",id:"start-the-node",level:2},{value:"See more logs",id:"see-more-logs",level:3},{value:"GraphQL playground",id:"graphql-playground",level:2},{value:"Send a query",id:"send-a-query",level:3},{value:"Documentation",id:"documentation",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Persistent storage",id:"persistent-storage",level:3},{value:"Delete node data",id:"delete-node-data",level:3},{value:"PostgreSQL or SQLite",id:"postgresql-or-sqlite",level:3},{value:"HTTP port",id:"http-port",level:3},{value:"Allowed Schema IDs",id:"allowed-schema-ids",level:3},{value:"Discovery",id:"discovery",level:3},{value:"Peers",id:"peers",level:3},{value:"<code>config.toml</code>",id:"configtoml",level:2},{value:"Done!",id:"done",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,t.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This tutorial walks you through setting up a locally running p2panda node on your computer and shows you how you can configure it and interact with it via the GraphQL playground."}),"\n",(0,a.jsx)(n.p,{children:"It's good to know how to run your own node if you want to start developing p2panda clients. You can try out new schemas and applications with them or just experiment!"}),"\n",(0,a.jsxs)(n.p,{children:["We will use the reference node implementation ",(0,a.jsx)(n.a,{href:"https://github.com/p2panda/aquadoggo",children:(0,a.jsx)(n.code,{children:"aquadoggo"})})," for this, which is a command line application written in Rust."]}),"\n",(0,a.jsxs)(n.h2,{id:"but-what-is-an-aquadoggo",children:["But what ",(0,a.jsx)(n.em,{children:"is"})," an ",(0,a.jsx)(n.code,{children:"aquadoggo"}),"?"]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"aquadoggo"})," are nodes in a p2panda network, they perform several important tasks related to discovering and communicating with other nodes, as well as offering APIs used when building client applications. The core tasks are:"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"discover and replicate with other p2panda nodes"}),"\n",(0,a.jsx)(n.li,{children:"find data on the network following registered schema ids"}),"\n",(0,a.jsx)(n.li,{children:"serve GraphQL and HTTP endpoints used by client applications"}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["Nodes are usually agnostic to the applications using them, this means that one node could potentially support hundreds of different p2panda applications. Having one node running on your computer is therefore already enough! You can read more about nodes in the regarding ",(0,a.jsx)(n.a,{href:"/learn/networks",children:"Learn"})," section."]}),"\n",(0,a.jsx)(n.p,{children:":::"}),"\n",(0,a.jsx)(n.h2,{id:"what-do-i-need",children:"What do I need?"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Terminal"}),"\n",(0,a.jsx)(n.li,{children:"Browser"}),"\n"]}),"\n",(0,a.jsxs)(n.h2,{id:"download-aquadoggo",children:["Download ",(0,a.jsx)(n.code,{children:"aquadoggo"})]}),"\n",(0,a.jsxs)(n.p,{children:["Head over to the ",(0,a.jsx)(n.a,{href:"https://github.com/p2panda/aquadoggo/releases",children:"Releases"})," page to download the pre-compiled binary for your platform. This tutorial was written using ",(0,a.jsx)(n.code,{children:"v0.7.0"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"Or on the command line:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Download and unpack aquadoggo v0.7.0\ncurl -L https://github.com/p2panda/aquadoggo/releases/download/v0.7.0/aquadoggo-v0.7.0-x86_64-unknown-linux-gnu.tar.gz | tar -xz\n"})}),"\n",(0,a.jsxs)(n.p,{children:["For the rest of the tutorial we will run aquadoggo simply using the command ",(0,a.jsx)(n.code,{children:"./aquadoggo"}),". If required, in your own commands adjust this to match the name of the binary you downloaded or rename it to accordingly."]}),"\n",(0,a.jsx)(n.h2,{id:"start-the-node",children:"Start the node"}),"\n",(0,a.jsx)(n.p,{children:"To start the node now you only have to run the following command. Make sure you're in the directory where you downloaded the aquadoggo binary!"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./aquadoggo\n"})}),"\n",(0,a.jsx)(n.p,{children:"You should see roughly this output:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"                       \u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\n                      \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588       \u2588\u2588\u2588\u2588\u2588\u2588\n                      \u2588\u2588\u2588\u2588\u2588\u2588            \u2588\u2588\u2588\n                       \u2588\u2588\u2588\u2588\u2588              \u2588\u2588\n                       \u2588     \u2588\u2588\u2588\u2588      \u2588\u2588\u2588\u2588\u2588\n                      \u2588     \u2588\u2588\u2588\u2588\u2588\u2588   \u2588 \u2588\u2588\u2588\u2588\u2588\n                     \u2588\u2588      \u2588\u2588\u2588\u2588   \u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\n                    \u2588\u2588\u2588\u2588\u2588         \u2588\u2588\u2588\u2588\u2588\u2588    \u2588\n                   \u2588\u2588\u2588\u2588\u2588\u2588\u2588                \u2588\u2588\n                   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n                   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588      \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n                   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588         \u2588\u2588\u2588\u2588\n              \u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588              \u2588\u2588\n          \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588        \u2588\u2588\u2588\u2588\u2588                 \u2588\n           \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588        \u2588\u2588          \u2588\u2588\u2588       \u2588\u2588\n             \u2588\u2588\u2588\u2588\u2588\u2588        \u2588            \u2588           \u2588\u2588\n                \u2588\u2588       \u2588\u2588             \u2588\u2588\u2588\u2588\u2588\u2588\u2588     \u2588\u2588\n              \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                      \u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588     \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                   \u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588 \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588            \u2588   \u2588\u2588\u2588\u2588\n  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588       \u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\n    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588             \u2588\u2588\u2588\u2588\u2588\u2588    \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588  \u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588   \u2588\u2588\u2588\n\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588\u2588                      \u2588\u2588\n\naquadoggo v0.7.0\n\nNo config file provided\n\nConfiguration\n\nAllow schema IDs: * (any schema id)\nDatabase URL: memory (data is not persisted)\nmDNS: enabled\nPrivate key: ephemeral (not persisted)\nRelay mode: disabled\n\nNode is ready!\n\nGo to http://0.0.0.0:2020/graphql to use GraphQL playground\nPeer id: 12D3KooWRfiHJzaRAoBAEkS4g9n9EP5x7muN6QXqpALH3HRBxEdn\nNode is listening on 0.0.0.0:2022\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Well done!! You have a running ",(0,a.jsx)(n.code,{children:"aquadoggo"})," node :-)"]}),"\n",(0,a.jsxs)(n.p,{children:["Let's unpack the output a little. There's a cute panda riding an aquadoggo of course, then version, then a warning about us not providing a config file, followed by some (default) configuration values. We wanted it to be simple to get started and playing around with ",(0,a.jsx)(n.code,{children:"aquadoggo"}),' so a easy-to-use default configuration is provided. With this configuration the node can be considered "ephemeral" as it doesn\'t persist any data between runs. Additionally it is configured to discover other nodes on the local network, ask them what schema they know about, and start supporting these schema itself. Although unlikely to be the behavior you want in a production environment, it is quite handy for getting started during development.']}),"\n",(0,a.jsx)(n.h3,{id:"see-more-logs",children:"See more logs"}),"\n",(0,a.jsxs)(n.p,{children:["We can quit the node by pressing ",(0,a.jsx)(n.code,{children:"CTRL"})," + ",(0,a.jsx)(n.code,{children:"C"})," in the regarding terminal. Let's start it again, but this time with more logging enabled:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"./aquadoggo --log-level=info\n"})}),"\n",(0,a.jsx)(n.p,{children:"As well as the above, you should now get these more detailed logs:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"[2024-01-22T15:44:50Z INFO  aquadoggo::manager] Start materializer service\n[2024-01-22T15:44:50Z INFO  aquadoggo::materializer::worker] Register reduce worker with pool size 16\n[2024-01-22T15:44:50Z INFO  aquadoggo::materializer::worker] Register dependency worker with pool size 16\n[2024-01-22T15:44:50Z INFO  aquadoggo::materializer::worker] Register schema worker with pool size 16\n[2024-01-22T15:44:50Z INFO  aquadoggo::materializer::worker] Register blob worker with pool size 16\n[2024-01-22T15:44:50Z INFO  aquadoggo::materializer::worker] Register garbage_collection worker with pool size 16\n[2024-01-22T15:44:50Z INFO  aquadoggo::manager] Start http service\n[2024-01-22T15:44:50Z INFO  aquadoggo::manager] Start network service\n[2024-01-22T15:44:50Z INFO  aquadoggo::network::service] Networking service initializing...\n[2024-01-22T15:44:50Z INFO  aquadoggo::network::service] Network service ready!\n[2024-01-22T15:44:50Z INFO  aquadoggo::manager] Start replication service\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you want to see even more you can change the log verbosity from ",(0,a.jsx)(n.code,{children:"info"})," to ",(0,a.jsx)(n.code,{children:"debug"})," or even ",(0,a.jsx)(n.code,{children:"trace"}),", but then you will see a whole flood of information you might not always need."]}),"\n",(0,a.jsx)(n.h2,{id:"graphql-playground",children:"GraphQL playground"}),"\n",(0,a.jsxs)(n.p,{children:["How can we actually check that the node is running? When starting ",(0,a.jsx)(n.code,{children:"aquadoggo"})," it will automatically open an HTTP server on port ",(0,a.jsx)(n.code,{children:"2020"})," with an GraphQL API. On top of that it offers a playground for us to already play with the GraphQL API. We can visit it by opening our browser and going to:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"http://localhost:2020/graphql\n"})}),"\n",(0,a.jsx)(n.h3,{id:"send-a-query",children:"Send a query"}),"\n",(0,a.jsxs)(n.p,{children:["Maybe you have never worked with ",(0,a.jsx)(n.a,{href:"https://graphql.org/",children:"GraphQL"})," before but we can just send some queries to the node for fun. You can enter a query in the left area of the playground and click the large ",(0,a.jsx)(n.em,{children:"Play"})," button in the middle. This will send the query to the node and its JSON response will show in the right area."]}),"\n",(0,a.jsxs)(n.p,{children:["Try this following query by entering it in the left textarea and clicking the ",(0,a.jsx)(n.em,{children:"Play"})," button:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-graphql",children:"{\n  all_schema_definition_v1 {\n    documents {\n      fields {\n        name\n        description\n      }\n    }\n  }\n}\n"})}),"\n",(0,a.jsx)(n.p,{children:"It will return the following, relative unspectacular response in the right area:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "data": {\n    "all_schema_definition_v1": []\n  }\n}\n'})}),"\n",(0,a.jsxs)(n.p,{children:["Still, this is already doing a lot! With this query we asked our ",(0,a.jsx)(n.code,{children:"aquadoggo"})," if it knows any schemas and since we have just started it it doesn't know any yet! This is why the response is empty .. It's soon time to teach the ",(0,a.jsx)(n.code,{children:"aquadoggo"})," some tricks but this is part of the next ",(0,a.jsx)(n.a,{href:"/tutorials/fishy",children:"how to create a schema tutorial"}),". For now we get to know the doggo a little bit better."]}),"\n",(0,a.jsx)(n.h3,{id:"documentation",children:"Documentation"}),"\n",(0,a.jsxs)(n.p,{children:["You can see, this is already how we can interact with the node at any time, we can simply just write queries in the playground using our browser! When building a p2panda client you do nothing else: The client sends GraphQL queries to the node and handles the JSON responses! If you're curious now on how to build a client you can check out this ",(0,a.jsx)(n.a,{href:"/tutorials/mushroom-app",children:"how to build a client tutorial"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["There are a couple of more queries you can find when you click on the ",(0,a.jsx)(n.em,{children:"Docs"})," tab in the right sidebar. Next to the ",(0,a.jsx)(n.code,{children:"all_schema_definition_v1"})," query you find others, for example\n",(0,a.jsx)(n.code,{children:"all_schema_field_definition_v1"})," or ",(0,a.jsx)(n.code,{children:"schema_definition_v1"})," etc.... Later you will find more queries here you created yourself by introducing new schemas to the node!"]}),"\n",(0,a.jsx)(n.admonition,{title:"What are all these queries?",type:"note",children:(0,a.jsxs)(n.p,{children:["These queries serve to find out which schemas exist, they will be used by ",(0,a.jsx)(n.a,{href:"https://p2panda.org/specification/APIs/queries",children:"clients"}),' ("Client API"). Surely there will be more queries coming in the future.']})}),"\n",(0,a.jsx)(n.h2,{id:"configuration",children:"Configuration"}),"\n",(0,a.jsxs)(n.p,{children:["Now we learned how to start a node and how to interact with it via GraphQL! Let's see now how we can configure and adjust it to our particular needs. This is mainly a collection of ",(0,a.jsx)(n.em,{children:"cool tricks"})," and not a full documentation of ",(0,a.jsx)(n.code,{children:"aquadoggo"}),", also you probably might not need all of this in the beginning, but maybe it comes in handy soon!"]}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["If you like spoilers and just want to dive into the full config options then our ",(0,a.jsx)(n.a,{href:"https://github.com/p2panda/aquadoggo/blob/main/aquadoggo_cli/config.toml",children:"example config.toml file"})," is a good place to start!"]})}),"\n",(0,a.jsx)(n.h3,{id:"persistent-storage",children:"Persistent storage"}),"\n",(0,a.jsxs)(n.p,{children:["In most cases we will want to persist our nodes identity and database on the filesystem. In order to configure this behavior we the use the ",(0,a.jsx)(n.code,{children:"--database-url"}),", ",(0,a.jsx)(n.code,{children:"--blobs-base-path"})," and ",(0,a.jsx)(n.code,{children:"--private-key"})," command line arguments."]}),"\n",(0,a.jsxs)(n.p,{children:["This is how we would configure the node with an ",(0,a.jsx)(n.code,{children:"SQLite"})," database, blob storage and a private key all stored at a suitable path for a Linux machine:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'./aquadoggo \\\n  --database-url="sqlite:$HOME/.local/share/aquadoggo/db.sqlite3" \\\n  --blobs-base-path="$HOME/.local/share/aquadoggo" \\\n  --private-key="$HOME/.local/share/aquadoggo/private-key.txt"\n'})}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"aquadoggo"})," supports both ",(0,a.jsx)(n.code,{children:"SQLite"})," and ",(0,a.jsx)(n.code,{children:"PostgreSQL"})," databases, more on this later."]}),"\n",(0,a.jsx)(n.h3,{id:"delete-node-data",children:"Delete node data"}),"\n",(0,a.jsx)(n.p,{children:"Especially during development you might want to delete your database, blobs and even your identity. You can do this by simply removing the data directory:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"rm -rf $HOME/.local/share/aquadoggo\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Make sure that ",(0,a.jsx)(n.code,{children:"aquadoggo"})," is not running anymore before you delete that folder."]}),"\n",(0,a.jsx)(n.admonition,{title:"Watch out!",type:"caution",children:(0,a.jsxs)(n.p,{children:["This is ",(0,a.jsx)(n.em,{children:"really"})," deleting everything you stored in your node ",(0,a.jsx)(n.em,{children:"and"})," your node key pair."]})}),"\n",(0,a.jsx)(n.h3,{id:"postgresql-or-sqlite",children:"PostgreSQL or SQLite"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"aquadoggo"})," allows you to use an SQLite ",(0,a.jsx)(n.em,{children:"or"})," PostgreSQL database. SQLite is the default and really amazing as it does not require you to set up an actual database software. This is why it is so easy to just start an ",(0,a.jsx)(n.code,{children:"aquadoggo"}),". It is also very useful for embedding ",(0,a.jsx)(n.code,{children:"aquadoggo"})," for example ",(0,a.jsx)(n.em,{children:"inside"}),' of an application where you don\'t want the users to also take care of the database, all should just work "out of the box".']}),"\n",(0,a.jsxs)(n.p,{children:["Sometimes you want to use PostgreSQL though, maybe because you are planning to host your ",(0,a.jsx)(n.code,{children:"aquadoggo"})," on a server where it will be used by hundreds of users at the same time. For this of course you need a ",(0,a.jsx)(n.a,{href:"https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04",children:"running PostgreSQL database"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["Just change the ",(0,a.jsx)(n.code,{children:"--database-url"})," command line argument to now use a PostgreSQL database:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# Use an external PostgreSQL database\n./aquadoggo --database-url="postgresql://postgres:postgres@localhost:5432/aquadoggo"\n'})}),"\n",(0,a.jsxs)(n.admonition,{title:"Explore SQLite",type:"tip",children:[(0,a.jsxs)(n.p,{children:["If using an ",(0,a.jsx)(n.a,{href:"https://www.sqlite.org/index.html",children:"SQLite"})," database, and you have an ",(0,a.jsx)(n.code,{children:"sqlite3"})," client installed you can explore the database like that:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# Explore the SQLite database (on Linux)\nsqlite3 $HOME/.local/share/aquadoggo/aquadoggo-node.sqlite3\n"})})]}),"\n",(0,a.jsx)(n.admonition,{title:"Migrations",type:"info",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"aquadoggo"})," checks if there are any pending SQL migrations on every start up. If it detects missing migrations it will run it automatically against the given database."]})}),"\n",(0,a.jsx)(n.h3,{id:"http-port",children:"HTTP port"}),"\n",(0,a.jsxs)(n.p,{children:["By default ",(0,a.jsx)(n.code,{children:"aquadoggo"})," starts an HTTP server on port ",(0,a.jsx)(n.code,{children:"2020"}),". If you want to change this you can use the ",(0,a.jsx)(n.code,{children:"--http-port"})," command line argument like this"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"# This changes the http endpoint to http://localhost:4040\n./aquadoggo --http-port=4040\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This is useful if for whatever reason your port ",(0,a.jsx)(n.code,{children:"2020"})," is already occupied or if you want to run ",(0,a.jsx)(n.em,{children:"more than one"})," aquadoggo."]}),"\n",(0,a.jsx)(n.h3,{id:"allowed-schema-ids",children:"Allowed Schema IDs"}),"\n",(0,a.jsxs)(n.p,{children:["By default, your ",(0,a.jsx)(n.code,{children:"aquadoggo"})," doesn't restrict the schema it replicates and materializes, it is interested in ",(0,a.jsx)(n.em,{children:"anything"})," it may come in contact with on the network. If you want to restrict this, you can do so by defining a list of ",(0,a.jsx)(n.code,{children:"allowed-schema-ids"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# This node will replicate documents for these two schema and build custom GraphQL API for queries.\n./aquadoggo \\\n  --allow-schema-ids="mushrooms_0020c3accb0b0c8822ecc0309190e23de5f7f6c82f660ce08023a1d74e055a3d7c4d" \\\n  --allow-schema-ids="mushroom_findings_0020aaabb3edecb2e8b491b0c0cb6d7d175e4db0e9da6003b93de354feb9c52891d0"\n'})}),"\n",(0,a.jsx)(n.h3,{id:"discovery",children:"Discovery"}),"\n",(0,a.jsxs)(n.p,{children:["Node discovery is configurable through the arguments ",(0,a.jsx)(n.code,{children:"--mdns"}),", ",(0,a.jsx)(n.code,{children:"--relay-addresses"})," and ",(0,a.jsx)(n.code,{children:"--relay-mode"}),"."]}),"\n",(0,a.jsx)(n.p,{children:"You can configure your node to discover local nodes via mDNS (on by default) and by registering on relay node. A relay node will share addresses for other nodes they learn about."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'./aquadoggo \\\n  --relay-addresses="192.0.2.16:2022" \\\n  --relay-addresses="192.0.2.17:2022"\n'})}),"\n",(0,a.jsx)(n.p,{children:"If nodes are discovered via a relay then forming a direct connection between peers is first attempted (using NAT traversal techniques where required), if this fails then the connection is routed through the relay."}),"\n",(0,a.jsxs)(n.p,{children:["If you want your node to itself act as a relay set the ",(0,a.jsx)(n.code,{children:"--relay-mode"})," flag."]}),"\n",(0,a.jsx)(n.h3,{id:"peers",children:"Peers"}),"\n",(0,a.jsxs)(n.p,{children:["You can configure which peers you connect to using the ",(0,a.jsx)(n.code,{children:"--direct-node-addresses"}),", ",(0,a.jsx)(n.code,{children:"--allow-peer-ids"})," and ",(0,a.jsx)(n.code,{children:"--block-peer-ids"})," arguments."]}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.code,{children:"--direct-node-addresses"})," is useful when you want to connect to nodes with static reachable addresses. Allowing and blocking peers is useful when you want to control the peers you connect to by their id when using relay or mDNS discovery techniques."]}),"\n",(0,a.jsx)(n.p,{children:"Running a node which will only connect to a list of allowed peers (discovered via mDNS or relay) would look like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'./aquadoggo \\\n  --relay-addresses="192.0.2.16:2022" \\\n  --allow-peer-ids="12D3KooWCw68m5CRcV8vD9iuR325oKwJHLYqTYH5mYwD6k2QV4nm" \\\n  --allow-peer-ids="12D3KooWCjiCXB1WPy9AYn73zjmwkVeUqLsrwgWFvsJhe69ivnCn" \\\n  --allow-peer-ids="12D3KooWFiLbne3UtoHPCBbZ8HG3JV6d1rdTDee3XVKRqDAxbGsK"\n'})}),"\n",(0,a.jsx)(n.h2,{id:"configtoml",children:(0,a.jsx)(n.code,{children:"config.toml"})}),"\n",(0,a.jsxs)(n.p,{children:["Right about now you'd be forgiven for thinking that this is ",(0,a.jsx)(n.em,{children:"a lot"})," of command line arguments to work with. ",(0,a.jsx)(n.code,{children:"aquadoggo"})," is able to read all these configurations (and more!) from a ",(0,a.jsx)(n.code,{children:"config.toml"})," file, and also via environment variables. The order in which configuration methods are read is 1) config file 2) command line arguments 3) environment variables. This is useful in order to override your default ",(0,a.jsx)(n.code,{children:"config.toml"})," values at runtime."]}),"\n",(0,a.jsxs)(n.p,{children:["Check the extensively documented ",(0,a.jsx)(n.code,{children:"aquadoggo"})," cli ",(0,a.jsx)(n.a,{href:"https://github.com/p2panda/aquadoggo/blob/main/aquadoggo_cli/config.toml",children:"example config file"})," to read about all possible configuration options."]}),"\n",(0,a.jsx)(n.h2,{id:"done",children:"Done!"}),"\n",(0,a.jsxs)(n.p,{children:["Super, you know now how to start an aquadoggo on your computer or server! This is the first step towards running a p2panda application on your computer or building a new one. Check out the ",(0,a.jsx)(n.a,{href:"/tutorials/fishy",children:"next tutorial"})," on how to send data to create schema on your running node."]}),"\n",(0,a.jsxs)(n.admonition,{title:"Extra: Embed a node",type:"tip",children:[(0,a.jsxs)(n.p,{children:["This is not part of this tutorial but we just want to mention that you can ",(0,a.jsx)(n.em,{children:"also"})," run a node programmatically by embedding it directly in your Rust codebase:"]}),(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-rust",children:"use aquadoggo::{Configuration, Node};\nlet config = Configuration::default();\nlet node = Node::start(config).await;\n"})}),(0,a.jsxs)(n.p,{children:["This is very similar to using the command line application, just that you can ship your applications now with a node running ",(0,a.jsx)(n.em,{children:"inside"}),"! Users will then automatically start the node whenever they start the application. Together with ",(0,a.jsx)(n.a,{href:"https://tauri.app",children:"Tauri"})," your applications can even be written in JavaScript and still use ",(0,a.jsx)(n.code,{children:"aquadoggo"})," internally - even when you're not a Rust developer! Our tauri x p2panda ",(0,a.jsx)(n.a,{href:"https://github.com/p2panda/tauri-example",children:"example project"})," will help you get started with right away."]})]})]})}function c(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},1151:(e,n,o)=>{o.d(n,{Z:()=>r,a:()=>s});var a=o(7294);const t={},i=a.createContext(t);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);