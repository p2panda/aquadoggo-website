---
id: key-concepts
title: Key Concepts
---

This is a short introduction into some of the higher level concepts which build on top of the core p2panda data types. You can dive deeper into any of these topics by visiting the relevant specification pages. Hopefully this gives you an introductory overview which will help contextualise the details later.

## Authors

Authors are humans, shared identities or bots that publish and modify documents on a p2panda network. In their simplest form they would be made up of a single [key pair][keypairs] on a single device, however the term also refers to groups of [key pairs][keypairs] which want to share a single identity (read about _Key Groups_ in the [authorisation][authorisation] section to find out how this happens). This means that an author could be: someone who writes blog posts, someone who edits a wiki, a co-operative publishing a website, a band releasing an album.

## Documents

[Documents][documents] are mutable data items which live on a p2panda network. Authors can create, update and delete documents. A document might be a blog post, a wiki page, a chat message, a user account, a configuration setting, a game board. They are multi-writer capable and have in-built properties which deterministically resolve conflicting writes (CRDT).

[Nodes][nodes] are responsible for persisting documents and offering them on a public GraphQL API so they can be queried by clients. They also offer the public API for all write actions relating to documents.

Documents can be assigned to an identity, giving them a concept of [permissions][authorisation], with the ability to add and remove other identities over the life of a document. [Encryption][encryption] is available via the use of the Messaging Layer Security (MLS) protocol.

## Schema

[Schema][schemas] specify the fields and values a document contains. When a document is published or updated, the request must be checked (by a node) against the claimed schema. If it doesn't pass validation then the request must be rejected. This ensures all data on a p2panda network strictly follows a known schema. An application developer would publish their own schema based on the data required for their needs, or they could reuse schema already existing on their network.

Some schema are specified as part of the p2panda protocol, these are called [system schema][system-schema], others are dynamically published by application developers and distributed across the network, these are called [application schema][application-schema]

[application-schema]: /specifications/aquadoggo/data-types/schemas#system-and-application-schemas
[authorisation]: /specifications/aquadoggo/authorisation
[documents]: /specifications/aquadoggo/data-types/documents
[encryption]: /specifications/aquadoggo/encryption
[keypairs]: /specifications/aquadoggo/data-types/key-pairs
[nodes]: /specifications/aquadoggo/networking/clients-nodes
[schemas]: /specifications/aquadoggo/data-types/schemas
[system-schema]: /specifications/aquadoggo/data-types/schemas#system-schemas
