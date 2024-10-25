(self.webpackChunkaquadoggo_website=self.webpackChunkaquadoggo_website||[]).push([[6705],{5244:(e,n,t)=>{e.exports={src:{srcSet:t.p+"assets/ideal-img/mushroom-app.fdf2308.808.png 808w",images:[{path:t.p+"assets/ideal-img/mushroom-app.fdf2308.808.png",width:808,height:1e3}],src:t.p+"assets/ideal-img/mushroom-app.fdf2308.808.png",toString:function(){return t.p+"assets/ideal-img/mushroom-app.fdf2308.808.png"},placeholder:void 0,width:808,height:1e3},preSrc:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAMCAIAAADUCbv3AAAACXBIWXMAAAsTAAALEwEAmpwYAAABZElEQVR4nD3OPUsCYQDA8fsMLX2BGiKcWtoaigjLF6JAqCUiDFqCahQaEpoKNxsdIzASGoLSCgqvkNBCvQrj9DzPu+e557l7Xu7yrTCq+ccf/kIeGHVuVRmWKcpJpTfxsUpMmWHVsZ6AIRQNTUMNBao1o/4uy1Llo6orNVDXzEZBU4UygrhlA9eCDqnqWIEIugS4lt0iRRMIEjbtNsEdqph6Opt7eC41KUYtQju0hKAgYch6XEHaUfwwkYgHAv5weAW36R8jyL9c2VCiuzuVYuY4cbAcCqo24F9OCYE+0y7XKQz6pqORjctkbGtzrYaazj+TLoOOteCbHxkenZ2cWgwGDY5Zj/0whqRDAbfK8r2YvciLV+JdRmc267LfNdJh5ifaj/hj60Pne+Mhr6df9xkIrxjyngO4ueQdW50Y2J4bDM14UMt2elxCUHiBQHftOsXXtzdnqdRJ8jSdSasMA9cuAOMbV+4iaZrsIZ8AAAAASUVORK5CYII="}},3435:(e,n,t)=>{"use strict";t.r(n),t.d(n,{assets:()=>h,contentTitle:()=>r,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var i=t(5893),o=t(1151),s=t(2233);const a={title:"Tutorial: Let's build a mushroom app!"},r=void 0,l={id:"tutorials/mushroom-app",title:"Tutorial: Let's build a mushroom app!",description:"In this tutorial we will build an web app for finding and identifying mushrooms using p2panda. We will build the application with React, Webpack and TypeScript.",source:"@site/docs/tutorials/mushroom-app.md",sourceDirName:"tutorials",slug:"/tutorials/mushroom-app",permalink:"/tutorials/mushroom-app",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Tutorial: Let's build a mushroom app!"}},h={},d=[{value:"What do I need?",id:"what-do-i-need",level:2},{value:"Start node",id:"start-node",level:2},{value:"Download the application code",id:"download-the-application-code",level:2},{value:"Create a schema",id:"create-a-schema",level:2},{value:"<code>mushroom</code> Schema",id:"mushroom-schema",level:3},{value:"<code>mushroom_finding</code> Schema",id:"mushroom_finding-schema",level:3},{value:"Register schemas",id:"register-schemas",level:3},{value:"Build the application",id:"build-the-application",level:2},{value:"Initialise WebAssembly",id:"initialise-webassembly",level:3},{value:"Generate key pair",id:"generate-key-pair",level:3},{value:"Session",id:"session",level:3},{value:"Publish operations",id:"publish-operations",level:3},{value:"Query documents",id:"query-documents",level:3},{value:"Run the application",id:"run-the-application",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components},{Details:a}=n;return a||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In this tutorial we will build an web app for finding and identifying mushrooms using p2panda. We will build the application with ",(0,i.jsx)(n.a,{href:"https://reactjs.org/",children:"React"}),", ",(0,i.jsx)(n.a,{href:"https://webpack.js.org/",children:"Webpack"})," and ",(0,i.jsx)(n.a,{href:"https://www.typescriptlang.org/",children:"TypeScript"}),"."]}),"\n",(0,i.jsx)(n.admonition,{title:"This is not a React tutorial",type:"note",children:(0,i.jsxs)(n.p,{children:["This tutorial assumes that you already have experience in using npm, React, Webpack and TypeScript. We want to rather focus on ",(0,i.jsx)(n.em,{children:"using"})," the JavaScript library ",(0,i.jsx)(n.code,{children:"shirokuma"})," (which is a user-friendly wrapper around ",(0,i.jsx)(n.code,{children:"p2panda-js"}),"). That being said, if you are a beginner, this is also for you as most of the code has already been written!"]})}),"\n",(0,i.jsxs)(n.p,{children:["The idea of the application is inspired by ",(0,i.jsx)(n.a,{href:"https://plantnet.org",children:"PlantNet"}),": Users can create entries of different mushrooms to create some sort of community-run encyclopaedia. If you're around in the forest you can take a picture of a spotted mushroom, give it a GPS position and mark it with the mushroom database entry you ",(0,i.jsx)(n.em,{children:"think"})," it might be. You can even select multiple mushrooms if you are not sure. The uploaded pictures of all users will show up in some sort of feed."]}),"\n",(0,i.jsx)(s.Z,{title:"This is how the app looks like",url:t(5244)}),"\n",(0,i.jsx)(n.p,{children:"Of course this is a very simple mushrooming app and we can think of many cool features already now: Like users giving comments on your findings, rating them and even giving suggestions / votes which mushroom it can be - or you could show a world map of all mushroom findings with the help of the GPS positions. Or you can delete findings if they are wrong! All of this is possible with p2panda, you can hack on it if you want after reading this tutorial."}),"\n",(0,i.jsx)(n.admonition,{title:"Visual identification of mushrooms",type:"tip",children:(0,i.jsx)(n.p,{children:"All cool polar mushroom animals know that it is not always possible to identify mushrooms based on pictures. There are many other factors as well: The smell, the colour of the spores, the surroundings, time of the year, change of colour after rain and more! Sometimes you even need a microscope to see the spores - to really be sure."})}),"\n",(0,i.jsx)(n.h2,{id:"what-do-i-need",children:"What do I need?"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"NodeJS"}),"\n",(0,i.jsx)(n.li,{children:"Editor"}),"\n",(0,i.jsx)(n.li,{children:"Terminal"}),"\n",(0,i.jsx)(n.li,{children:"Browser"}),"\n"]}),"\n",(0,i.jsxs)(a,{children:[(0,i.jsx)("summary",{children:"How do I install NodeJS?"}),(0,i.jsx)("div",{children:(0,i.jsxs)(n.p,{children:["You can check out the official ",(0,i.jsx)(n.a,{href:"https://nodejs.org/en/download/package-manager/",children:"Installing Node.js via package manager"})," guidelines here. But we would recommend you installing a NodeJS version manager like ",(0,i.jsx)(n.a,{href:"https://github.com/nvm-sh/nvm",children:"nvm"}),", or even better ",(0,i.jsx)(n.a,{href:"https://github.com/tj/n",children:"n"}),". We used the NodeJS version ",(0,i.jsx)(n.code,{children:"18.8.0"})," for this tutorial."]})})]}),"\n",(0,i.jsx)(n.h2,{id:"start-node",children:"Start node"}),"\n",(0,i.jsxs)(n.p,{children:["Every p2panda client needs a node to talk to, so let's start one! You can follow the ",(0,i.jsx)(n.a,{href:"/tutorials/aquadoggo",children:"Set up a local node"})," tutorial to learn how to compile a node yourself, but for this tutorial we are going to use a pre-compiled binaries."]}),"\n",(0,i.jsxs)(n.p,{children:["Visit the ",(0,i.jsx)(n.a,{href:"https://github.com/p2panda/aquadoggo/releases",children:"releases"})," page on the ",(0,i.jsx)(n.code,{children:"aquadoggo"})," github repository and download the binary compiled for your system and unpack in a directory of your choice. In the command line, navigate to the directory where the ",(0,i.jsx)(n.code,{children:"aquadoggo"})," binary is and run the following command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Start your aquadoggo node.\n./aquadoggo\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"No binary for your system?",type:"tip",children:(0,i.jsxs)(n.p,{children:["If there is no binary available for your system, don't worry, you can follow the ",(0,i.jsx)(n.a,{href:"/tutorials/aquadoggo",children:"Set up a local node"})," tutorial to learn how to compile a node yourself."]})}),"\n",(0,i.jsxs)(n.p,{children:["Now you have a local node running on port ",(0,i.jsx)(n.code,{children:"2020"}),". You can check if everything is alright by opening your browser and surfing to ",(0,i.jsx)(n.a,{href:"http://localhost:2020/graphql",children:"http://localhost:2020/graphql"}),", do you see the GraphQL playground? Super. We will play with it soon!"]}),"\n",(0,i.jsx)(n.h2,{id:"download-the-application-code",children:"Download the application code"}),"\n",(0,i.jsx)(n.p,{children:"Since this is not a tutorial about how to write a React web-application, we already prepared most of the source code for you. This is how you can set it up:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Clone the `mushroom-app-tutorial` git repository\ngit clone https://github.com/p2panda/mushroom-app-tutorial.git\n\n# Move into the folder you've just created\ncd mushroom-app-tutorial\n\n# Install NodeJS dependencies\nnpm install\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Let's stay in the ",(0,i.jsx)(n.code,{children:"mushroom-app-tutorial"})," directory from now on, we will look into some code and run a script here."]}),"\n",(0,i.jsx)(n.h2,{id:"create-a-schema",children:"Create a schema"}),"\n",(0,i.jsxs)(n.p,{children:["We already know what the mushroom app will be capable of, but we need to define as well how the data ",(0,i.jsx)(n.em,{children:"will look like"}),". What sort of data do we want to publish, query and visualise in this application?"]}),"\n",(0,i.jsxs)(n.p,{children:["In p2panda we can create ",(0,i.jsx)(n.em,{children:"schemas"})," which will help us to define the shape of the data we need. Nodes will register these schemas and start supporting them. As soon as a node supports a schema you can send that data to it and the node will give you a nice GraphQL API to query it in different ways."]}),"\n",(0,i.jsx)(n.p,{children:"For every p2panda application we want to build, we have to define the schemas first we want to use. It could be that there are many even, depending on how complex your program will become."}),"\n",(0,i.jsx)(n.p,{children:"Usually we have to define the schemas only once, as soon as they are deployed on a real node they can be spread across the network: Other nodes will download it automatically when they think it's a good idea to support your schema."}),"\n",(0,i.jsx)(n.admonition,{title:"Nodes supporting schemas",type:"note",children:(0,i.jsx)(n.p,{children:"A single node can support many schema, nodes share data based on the schema that they have in common. By default a node is happy to discover and support any schema it finds on the network, this is great for experimenting and during development, but in production you will want to limit this to only schema you want to support."})}),"\n",(0,i.jsx)(n.p,{children:"During development we might want to create the schema multiple times, because we're deleting the database of our node or we've made some changes to the schema. That's okay!"}),"\n",(0,i.jsx)(n.admonition,{title:"How do I delete my database?",type:"note",children:(0,i.jsxs)(n.p,{children:['If you\'re running a node with default configurations then it is "ephemeral" and already no data will be persisted between runs. For other cases (using an SQLite db for example) check out the ',(0,i.jsx)(n.a,{href:"/tutorials/aquadoggo",children:"aquadoggo Tutorial"})," to find out."]})}),"\n",(0,i.jsx)(n.p,{children:"Enough of all of this theory! How does the data now look like for our mushroom app?"}),"\n",(0,i.jsxs)(n.h3,{id:"mushroom-schema",children:[(0,i.jsx)(n.code,{children:"mushroom"})," Schema"]}),"\n",(0,i.jsxs)(n.p,{children:["We want users to make ",(0,i.jsx)(n.em,{children:"encyclopaedia"})," entries about all sorts of mushrooms, similar to a wiki. We keep it simple for now: The ",(0,i.jsx)(n.code,{children:"mushroom"})," schema needs a ",(0,i.jsx)(n.code,{children:"title"}),", a ",(0,i.jsx)(n.code,{children:"description"}),", the ",(0,i.jsx)(n.code,{children:"latin"})," name (because we are real mycologists) and an ",(0,i.jsx)(n.code,{children:"edible"})," flag which indicates if we can eat this mushroom or if it is deadly poisonous."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"title"}),": String"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"description"}),": String"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"latin"}),": String"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"edible"}),": Boolean"]}),"\n"]}),"\n",(0,i.jsxs)(n.h3,{id:"mushroom_finding-schema",children:[(0,i.jsx)(n.code,{children:"mushroom_finding"})," Schema"]}),"\n",(0,i.jsxs)(n.p,{children:["Next to the ",(0,i.jsx)(n.code,{children:"mushroom"})," entries we need the ",(0,i.jsx)(n.code,{children:"mushroom_finding"})," feed of the users. They want to upload a picture (as ",(0,i.jsx)(n.code,{children:"blob"}),"), define a ",(0,i.jsx)(n.code,{children:"lat"})," and ",(0,i.jsx)(n.code,{children:"lon"})," GPS position and mark which ",(0,i.jsx)(n.code,{children:"mushrooms"})," they think it could have been. The users can select one or many mushrooms by simply just referring to the encyclopaedia entries."]}),"\n",(0,i.jsxs)(n.p,{children:["Relating to the mushroom entries is possible with a ",(0,i.jsx)(n.em,{children:"relation list"}),". This is a special sort of field where we can refer to documents of the same or even another schema, simply by mentioning their identifiers. A relation is also used in the ",(0,i.jsx)(n.code,{children:"blob"})," field, where we relate to documents of type ",(0,i.jsx)(n.code,{children:"blob_v1"}),", this is an in-built document type used for publishing binary data. Documents of this type are materialized to the filesystem and served from the node at an HTTP endpoint (you'll see exactly how later)."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"blob"}),": Relation with ",(0,i.jsx)(n.code,{children:"blob_v1"})," documents"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lat"}),": Float"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"lon"}),": Float"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"mushrooms"}),": Relation List with ",(0,i.jsx)(n.code,{children:"mushroom"})," documents"]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"register-schemas",children:"Register schemas"}),"\n",(0,i.jsx)(n.admonition,{title:"How to create a schema?",type:"info",children:(0,i.jsxs)(n.p,{children:["In this tutorial we are creating our schema programatically by publishing operations to the node from the front-end code. There is another tutorial showing you ",(0,i.jsx)(n.a,{href:"/tutorials/fishy",children:"how you can create schemas"})," with the command line tool ",(0,i.jsx)(n.code,{children:"fishy"}),". For this tutorial this is not necessary, but it's a good next step if you want to learn more about schema creation, or for when you start developing your own application."]})}),"\n",(0,i.jsxs)(n.p,{children:["We could create these schemas now manually by sending operations to our node, but we already have that prepared for you. Just run the following command inside the ",(0,i.jsx)(n.code,{children:"mushroom-app-tutorial"})," directory:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"# Create schemas and send them to node\nnpm run schema\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will create the two schemas ",(0,i.jsx)(n.code,{children:"mushroom"})," and ",(0,i.jsx)(n.code,{children:"mushroom_finding"})," and register them on your locally running node. You can go to ",(0,i.jsx)(n.a,{href:"http://localhost:2020/graphql",children:"http://localhost:2020/graphql"})," to check out the GraphQL playground, there you can now see the newly created schemas in the ",(0,i.jsx)(n.em,{children:"Docs"})," tab on the right side!"]}),"\n",(0,i.jsx)(n.admonition,{title:"Huh, I don't see anything?",type:"tip",children:(0,i.jsx)(n.p,{children:"Oh, maybe you should refresh the page then (the playground's auto-refresh can be turned on / off)."})}),"\n",(0,i.jsx)(n.p,{children:"You can see that the script gave us some instructions on what to do next:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:'Next step: Create a file `./schemas.json` and paste this into it:\n{\n  "MUSHROOM_SCHEMA_ID": "mushroom_0020c3accb0b0c8822ecc0309190e23de5f7f6c82f660ce08023a1d74e055a3d7c4d",\n  "FINDINGS_SCHEMA_ID": "mushroom_finding_0020aaabb3edecb2e8b491b0c0cb6d7d175e4db0e9da6003b93de354feb9c52891d0"\n}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Your schema ids will look a little bit different since every generated schema is unique! Let's do what the program says and create a ",(0,i.jsx)(n.code,{children:"schemas.json"})," file where we copy this JSON inside. This will tell the program what schemas to look for when doing the GraphQL queries."]}),"\n",(0,i.jsx)(n.h2,{id:"build-the-application",children:"Build the application"}),"\n",(0,i.jsxs)(n.p,{children:["Designing and creating a schema is a very large part of building an p2panda application. The other part is implementing the interface! Suddenly we're back at ",(0,i.jsx)(n.em,{children:"normal"})," web development: Spending long time figuring out how to set up TypeScript, Webpack, some linters like eslint and prettier etc., building React components and views integrating a router and so on. If you are a web developer then this part will be very familiar to you, so let's focus rather on the parts which make it a ",(0,i.jsx)(n.em,{children:"special"})," p2panda application."]}),"\n",(0,i.jsxs)(n.p,{children:["To build something with p2panda in TypeScript or JavaScript we can use the package ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/shirokuma",children:(0,i.jsx)(n.code,{children:"shirokuma"})}),". With it we can do the most important things: 1. Initialise the WebAssembly code 2. Generate a key pair 3. Create and send p2panda operations to a node. We query documents back from the node using a lightweight GraphQL client."]}),"\n",(0,i.jsx)(n.p,{children:"Let's go through them step by step!"}),"\n",(0,i.jsx)(n.h3,{id:"initialise-webassembly",children:"Initialise WebAssembly"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"shirokuma"})," uses ",(0,i.jsx)(n.code,{children:"p2panda-js"})," under the hood, and this is actually mainly developed in Rust and compiled as WebAssembly with a thin TypeScript wrapper around it to make it ",(0,i.jsx)(n.em,{children:"feel"})," more like a regular TypeScript package. Using WebAssembly is a little bit special and requires you to initialise it before you can use it."]}),"\n",(0,i.jsxs)(n.p,{children:["In ",(0,i.jsx)(n.code,{children:"shirokuma"})," we can simply do this like that:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { initWebAssembly } from 'shirokuma';\nawait initWebAssembly();\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"Where is the WebAssembly code?",type:"tip",children:(0,i.jsxs)(n.p,{children:["Good question! We are encoding the WebAssembly code as a base64 string ",(0,i.jsx)(n.em,{children:"inside"})," the JavaScript files. This is why it just works like that. If you want to manually load the ",(0,i.jsx)(n.code,{children:".wasm"})," file we have you covered as well, just check out the ",(0,i.jsx)(n.a,{href:"https://github.com/p2panda/p2panda/blob/main/p2panda-js/README.md",children:(0,i.jsx)(n.code,{children:"README.md"})})," of the package."]})}),"\n",(0,i.jsxs)(n.p,{children:["You might already see the problem here though: The ",(0,i.jsx)(n.code,{children:"initWebAssembly"})," function is async! This means that we have to ",(0,i.jsx)(n.em,{children:"wait"})," until we can do anything else, like generating a key pair for the user or sending our first operation to the node."]}),"\n",(0,i.jsxs)(n.p,{children:["Luckily React can help us with some convenient patterns, let's look at the ",(0,i.jsx)(n.a,{href:"https://github.com/p2panda/mushroom-app-tutorial/blob/main/src/components/InitWasm.tsx",children:(0,i.jsx)(n.code,{children:"src/components/InitWasm.tsx"})})," file to see how we did it in the mushroom app:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import React, { useEffect, useState } from 'react';\nimport { initWebAssembly } from 'shirokuma';\n\ntype Props = {\n  children: JSX.Element;\n};\n\nexport const InitWasm: React.FC<Props> = ({ children }) => {\n  const [ready, setReady] = useState(false);\n\n  useEffect(() => {\n    const init = async () => {\n      await initWebAssembly();\n      setReady(true);\n    };\n\n    init();\n  }, []);\n\n  return ready ? children : null;\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"InitWasm"})," component will load all ",(0,i.jsx)(n.code,{children:"children"})," components as soon as everything got initialised. If you are concerned about loading times (it should be less than a couple of milliseconds) then you can even add a small spinner here."]}),"\n",(0,i.jsxs)(n.p,{children:["We wrap the whole application component ",(0,i.jsx)(n.code,{children:"App"})," around ",(0,i.jsx)(n.code,{children:"InitWasm"})," and make sure nothing gets executed before we are ready:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const Root: React.FC = () => {\n  return (\n    <InitWasm>\n      <App />\n    </InitWasm>\n  );\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"generate-key-pair",children:"Generate key pair"}),"\n",(0,i.jsx)(n.p,{children:"Right after we initialised the WebAssembly we want to make sure that the user gets a key pair. This is required to give the user some sort of identity but also to sign the data the user want's to create."}),"\n",(0,i.jsxs)(n.p,{children:["It is quite easy to generate a new key pair with ",(0,i.jsx)(n.code,{children:"shirokuma"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { KeyPair } from 'shirokuma';\nconst keyPair = new KeyPair();\n"})}),"\n",(0,i.jsxs)(n.p,{children:["But we do not always want to generate a ",(0,i.jsx)(n.em,{children:"new"})," key pair every time the user comes back to the website! We should persist the private key using the ",(0,i.jsx)(n.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage",children:(0,i.jsx)(n.code,{children:"Window.LocalStorage"})})," API:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { KeyPair } from 'shirokuma';\n\nconst LOCAL_STORAGE_KEY = 'privateKey';\n\nfunction getKeyPair(): KeyPair {\n  // Check if a private key already exists and derive key pair from it if yes\n  const privateKey = window.localStorage.getItem(LOCAL_STORAGE_KEY);\n  if (privateKey) {\n    return new KeyPair(privateKey);\n  }\n\n  // Generate a new key pair otherwise and persist it in localStorage\n  const keyPair = new KeyPair();\n  window.localStorage.setItem(LOCAL_STORAGE_KEY, keyPair.privateKey());\n  return keyPair;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Now we can just call ",(0,i.jsx)(n.code,{children:"getKeyPair"})," and we will either receive a new key pair when doing it for the first time or the old one if we're coming back."]}),"\n",(0,i.jsx)(n.h3,{id:"session",children:"Session"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"shirokuma"})," exports the ",(0,i.jsx)(n.code,{children:"Session"})," object which offers us a useful interface for publishing operations to a node. It can be configured with an endpoint, key pair, and schema id. It can be useful to instantiate it at the beginning of your application and keep it around for making queries later. Starting a ",(0,i.jsx)(n.code,{children:"Session"})," looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { KeyPair, Session } from 'shirokuma';\n\nconst ENDPOINT = 'localhost:2020/graphql';\n\nconst keyPair = new KeyPair();\nconst session = new Session(ENDPOINT).setKeyPair(keyPair);\n"})}),"\n",(0,i.jsxs)(n.p,{children:["But how do we now share this information across the whole React application? As a React developer you might know some patterns probably: Prop drilling, Redux, Contexts .. there are many options and it is basically up to you! In the mushroom app we've decided to use the ",(0,i.jsx)(n.a,{href:"https://reactjs.org/docs/context.html",children:"Context"})," pattern which gets especially interesting if we have many components. Let's have a look at the ",(0,i.jsx)(n.a,{href:"https://github.com/p2panda/mushroom-app-tutorial/blob/main/src/P2pandaContext.tsx",children:(0,i.jsx)(n.code,{children:"src/P2pandaContext.tsx"})})," file:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import React, { useMemo } from 'react';\nimport { KeyPair, Session } from 'shirokuma';\nimport { ENDPOINT } from './constants';\n\nconst LOCAL_STORAGE_KEY = 'privateKey';\n\nfunction getKeyPair(): KeyPair {\n  // ...\n}\n\ntype Context = {\n  publicKey: string | null;\n  keyPair: KeyPair | null;\n  session: Session | null;\n};\n\nexport const P2pandaContext = React.createContext<Context>({\n  publicKey: null,\n  keyPair: null,\n  session: null,\n});\n\ntype Props = {\n  children: JSX.Element;\n};\n\nexport const P2pandaProvider: React.FC<Props> = ({ children }) => {\n  const state = useMemo(() => {\n    const keyPair = getKeyPair();\n    const session = new Session(ENDPOINT).setKeyPair(keyPair);\n\n    return {\n      keyPair,\n      publicKey: keyPair.publicKey(),\n      session,\n    };\n  }, []);\n\n  return (\n    <P2pandaContext.Provider value={state}>{children}</P2pandaContext.Provider>\n  );\n};\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"P2pandaProvider"})," helps us to establish the state of the ",(0,i.jsx)(n.code,{children:"P2pandaContext"})," by calling ",(0,i.jsx)(n.code,{children:"getKeyPair"})," and instantiating a ",(0,i.jsx)(n.code,{children:"Session"}),". From that point on we can consume this app state by using ",(0,i.jsx)(n.code,{children:"P2pandaContext.Consumer"})," in other components like that:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"<P2pandaContext.Consumer>\n  {({ publicKey }) => {\n    return <p>Hello, {publicKey}!</p>;\n  }}\n</P2pandaContext.Consumer>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you need the ",(0,i.jsx)(n.code,{children:"keyPair"})," already before, you can import the ",(0,i.jsx)(n.code,{children:"useContext"})," hook and access all values like that:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { useContext } from 'react';\nconst { keyPair } = useContext(P2pandaContext);\n"})}),"\n",(0,i.jsx)(n.p,{children:"Really handy!"}),"\n",(0,i.jsxs)(n.p,{children:["We have to make sure to establish the ",(0,i.jsx)(n.code,{children:"P2pandaProvider"})," in the application as well, we're doing this right at the beginning, next to ",(0,i.jsx)(n.code,{children:"InitWasm"}),":"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"const Root: React.FC = () => {\n  return (\n    <InitWasm>\n      <P2pandaProvider>\n        <App />\n      </P2pandaProvider>\n    </InitWasm>\n  );\n};\n"})}),"\n",(0,i.jsx)(n.h3,{id:"publish-operations",children:"Publish operations"}),"\n",(0,i.jsx)(n.p,{children:"Operations are the building blocks of p2panda, they are the instructions we publish to a node in order to CREATE, UPDATE and DELETE documents."}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Session"})," offers us a long running interface for publishing operations to a node, setting it up and creating a document looks like this:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { KeyPair, Session } from 'shirokuma';\n\nconst keyPair = new KeyPair();\nconst session = new Session('localhost:2020/graphql').setKeyPair(keyPair);\nconst fields = {\n  title: 'Mario Mushroom',\n  latin: 'Marius Fungus',\n  edible: true,\n  description: 'It makes you grow',\n};\n\nconst documentId = await session.create(fields, {\n  schemaId: MUSHROOM_SCHEMA_ID,\n});\n"})}),"\n",(0,i.jsxs)(n.p,{children:["Yes! We're creating our first ",(0,i.jsx)(n.code,{children:"mushroom"})," document here!"]}),"\n",(0,i.jsx)(n.admonition,{title:"Playing in NodeJS",type:"tip",children:(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"shirokuma"})," also runs in NodeJS and there you don't even need to initialise the WebAssembly! It is fun to play with the API in the interactive NodeJS environment. Just type ",(0,i.jsx)(n.code,{children:"node"})," inside the the ",(0,i.jsx)(n.code,{children:"mushroom-app-tutorial"})," folder, type ",(0,i.jsx)(n.code,{children:"const shirokuma = require('shirokuma')"}),", hit ",(0,i.jsx)(n.code,{children:"Enter"}),", and then you can directly get started, for example by writing ",(0,i.jsx)(n.code,{children:"const keyPair = new shirokuma.KeyPair()"}),"!"]})}),"\n",(0,i.jsxs)(n.p,{children:["In the example above we are already using the schema id we've created before. Usually you want to keep the schema id in some central place, like in ",(0,i.jsx)(n.a,{href:"https://github.com/p2panda/mushroom-app-tutorial/blob/main/src/constants.ts",children:(0,i.jsx)(n.code,{children:"src/constants.ts"})}),". Especially after you officially released your p2panda application it will stay hard-coded like that since schema ids ",(0,i.jsx)(n.em,{children:"never"})," change, except of when you migrate to a new schema version of course (but then you also very likely will update your application)."]}),"\n",(0,i.jsxs)(n.admonition,{title:"Schema migrations",type:"note",children:[(0,i.jsxs)(n.p,{children:["Updating a schema after releasing an application will not break it! Schema ids are ",(0,i.jsx)(n.em,{children:"immutable"})," identifiers of the schema for exactly ",(0,i.jsx)(n.em,{children:"that"})," version of it. If you introduce a new version, old applications will still point at the previous schema id and the new ones can already support the latest schema."]}),(0,i.jsxs)(n.p,{children:["In the future we want to offer ",(0,i.jsx)(n.a,{href:"https://www.inkandswitch.com/cambria/",children:"Lenses"})," to automatically support old and new schemas, especially in a p2p system this gets very important after a while."]})]}),"\n",(0,i.jsxs)(n.p,{children:["If we're updating or deleting a document we need to specify ",(0,i.jsx)(n.em,{children:"what"})," document we want to apply these changes on. This we do by passing in the ",(0,i.jsx)(n.code,{children:"viewId"}),". The ",(0,i.jsx)(n.code,{children:"viewId"})," you can get from the GraphQL API, whenever you query for the documents you want to update or delete."]}),"\n",(0,i.jsxs)(n.p,{children:["All of this you find in the ",(0,i.jsx)(n.a,{href:"https://github.com/p2panda/mushroom-app-tutorial/blob/main/src/requests.ts",children:(0,i.jsx)(n.code,{children:"src/requests.ts"})})," file, there you will find other queries as well, for example to create ",(0,i.jsx)(n.code,{children:"mushroom_finding"})," documents."]}),"\n",(0,i.jsx)(n.h3,{id:"query-documents",children:"Query documents"}),"\n",(0,i.jsx)(n.p,{children:"You can use any GraphQL client to query documents back from the node, let's set ours up quickly like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"import { GraphQLClient, gql } from 'graphql-request';\nconst client = new GraphQLClient('http://localhost:2020/graphql');\n"})}),"\n",(0,i.jsx)(n.admonition,{title:"GraphQL libraries",type:"tip",children:(0,i.jsxs)(n.p,{children:["In this tutorial we're using ",(0,i.jsx)(n.a,{href:"https://www.npmjs.com/package/graphql-request",children:(0,i.jsx)(n.code,{children:"graphql-request"})})," as a GraphQL client. We like this one because it is very simple and lightweight, but there are many others as well, for example ",(0,i.jsx)(n.a,{href:"https://www.apollographql.com/",children:"Apollo"}),"."]})}),"\n",(0,i.jsxs)(n.p,{children:["After creating the ",(0,i.jsx)(n.code,{children:"mushroom"})," documents we want to query them as well. We can do this like that:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:"type Meta = {\n  viewId: string;\n  documentId: string;\n};\n\ntype Mushroom = {\n  description: string;\n  edible: boolean;\n  latin: string;\n  title: string;\n};\n\ntype MushroomResponse = {\n  meta: Meta;\n  fields: Mushroom;\n};\n\nasync function getAllMushrooms(): Promise<MushroomResponse[]> {\n  const query = gql`{\n    mushrooms: all_${MUSHROOM_SCHEMA_ID} {\n      documents {\n        meta {\n          documentId\n          viewId\n        }\n        fields {\n          description\n          edible\n          latin\n          title\n        }\n      }\n    }\n  }`;\n\n  const { mushrooms } = await client.request(query);\n  return mushrooms.documents;\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you prepend the schema id in the query with ",(0,i.jsx)(n.code,{children:"all_"})," you receive a collection of ",(0,i.jsx)(n.em,{children:"all"})," ",(0,i.jsx)(n.code,{children:"mushroom"})," documents."]}),"\n",(0,i.jsx)(n.admonition,{title:"Pagination, filters and sorting",type:"info",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://p2panda.org/specification/APIs/queries",children:"specification"})," already mentions pagination, filters and sorting but we have not implemented it yet, it will come soon!"]})}),"\n",(0,i.jsxs)(n.p,{children:["See how we can also get some ",(0,i.jsx)(n.code,{children:"meta"})," fields from the regarding mushroom documents? We can get the ",(0,i.jsx)(n.code,{children:"documentId"})," and ",(0,i.jsx)(n.code,{children:"viewId"})," for each entry, this helps us to update or delete the data as mentioned earlier."]}),"\n",(0,i.jsx)(n.p,{children:"If you want to only load one mushroom you can write something like this:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-typescript",children:'async function getMushroom(documentId: string): Promise<MushroomResponse> {\n  const query = gql`{\n    mushroom: ${MUSHROOM_SCHEMA_ID}(id: "${documentId}") {\n      meta {\n        documentId\n        viewId\n      }\n      fields {\n        description\n        edible\n        latin\n        title\n      }\n    }\n  }`;\n\n  const { mushroom } = await client.request(query);\n  return mushroom;\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"Now we talked almost about everything you need to build an p2panda application with React. You can dive a little bit more inside of the source code to see some details, but we should have covered the most important parts concerning p2panda!"}),"\n",(0,i.jsx)(n.h2,{id:"run-the-application",children:"Run the application"}),"\n",(0,i.jsx)(n.p,{children:"Finally, let's use the mushroom app now!"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"npm start\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will run the web application under ",(0,i.jsx)(n.a,{href:"http://localhost:8080",children:"http://localhost:8080"}),". You can open it in your browser and start playing with it. If you're curious you can also check the GraphQL playground of the ",(0,i.jsx)(n.code,{children:"aquadoggo"})," and make some queries there to compare!"]})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},2233:(e,n,t)=>{"use strict";t.d(n,{Z:()=>a});t(7294);var i=t(5944);const o={"image-frame":"image-frame_fg61","image-frame-inner":"image-frame-inner_Xabn","image-frame-title":"image-frame-title_UNlE"};var s=t(5893);function a(e){let{title:n,url:t}=e;return t?(0,s.jsxs)("div",{className:o["image-frame"],children:[(0,s.jsx)("div",{className:o["image-frame-inner"],children:(0,s.jsx)(i.Z,{alt:n,title:n,img:t})}),n&&(0,s.jsx)("div",{className:o["image-frame-title"],children:n})]}):null}}}]);