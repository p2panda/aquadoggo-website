---
title: Introduction
---

import ImageFrame from '@site/src/components/ImageFrame';

## Local first

In the last years we've learned how boring the internet can be: Centralised, commercial platforms take ownership over our data, sell it even further and on top prescribe how we can use it. With p2panda we're not changing the internet, but we're offering some tools for others to make networked software a little bit more exciting, secure, energy and data efficient - but most of all fun, adventurous and playful!

<ImageFrame
  title="Ideas on how to appear at the next conference"
  url={require('./assets/panda-head.jpg')}
/>

p2panda is a protocol for local-first applications. _local first_ is a somewhat unknown term and hard to grasp if you think about the internet in its current state. It basically means: The programs you use don't need a _globally_ interconnected internet to function, but can simply run - even when you're offline. And there is even more! If you imagine creating data without any other entity checking against it, for example when you're offline, then this is very different from how commercial platforms function: You don't _sign up_ or upload your data _somewhere_, your data is already on your computer and you can do with it whatever you feel like.

## What is p2panda?

p2panda gives developers the tools to build local-first websites, mobile- and desktop applications which run in decentralised networks. Building applications on top of p2panda means that you can truly call data your own as the protocol encourages that it can be stored everywhere, even just on your local computer.

Since data in p2panda is not owned by any central authority it can also be processed or visualised however you want. This means that p2panda allows you to build clients when you want to find an alternative approach to the problems they solve.

Data can grow endlessly which is also a problem in decentralised networks, with p2panda we encourage deletion and ephemeral data, only sending and storing data you really need.

<ImageFrame
  title="An adventure game explaining p2panda"
  url={require('./assets/adventure-game.jpg')}
/>

Storing data _everywhere_ can make software and data more open but it can also be a huge problem for privacy. For this p2panda integrated Messaging Layer Security (MLS) which is a protocol for secure message encryption, even for very large groups.

Building p2p protocols is complicated and challenging for developers but we want it to be playful and fun. With p2panda it should be possible to focus on building radical local-first software and explore exciting new UX patterns without diving too deep into p2p details.

The core or p2panda is built in Rust from which we also compile WebAssembly for TypeScript developers but we hope to support even more languages one day. For this we formulated a p2panda _specification_ which is some sort of agreement developers can follow so different p2panda _implementations_ can still understand each other.

## Team

"We", that is [Andreas Dzialocha](https://adz.garden) and [Sam Andreae](https://samandreae.com/), the current core team of p2panda. Hello! ⛺

<ImageFrame
  title="This is us during our first intensive workshop week in 2021 with our former core contributors: Vincent, Sam, Sophie and Andreas!"
  url={require('./assets/safari.jpg')}
/>

## Friends

Without the help of all of these people p2panda would have never been realised 💕

* [Aljoscha Meyer](https://aljoscha-meyer.de) p2p researcher and developer
* [Piet Geursen](https://github.com/pietgeursen/bamboo-rs) Rust developer
* [Raphael Robert](https://twitter.com/raphaelrobert) MLS co-author
* [Sophie Kuna](https://github.com/sophiiistika) Early member of p2panda gang
* [Vincent Ahrend](https://github.com/cafca) p2panda core contributor until 2022
