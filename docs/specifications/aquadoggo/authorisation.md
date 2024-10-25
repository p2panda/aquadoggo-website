---
id: authorisation
title: Authorisation
---

# Authorisation: Key Group

:::caution Under construction

While this section is almost fully complete and even [implemented][implemented], it might be a little rough at the edges: We're still working on a fun to use high-level API!

:::

The `key_group` schema is a way to group a set of public keys so that they can act as a single identity. Every member key can have different permissions limiting the extent to which they can publish operations as this single identity. Keys can only be added to a key group with a confirmation from both the key itself and an existing member key with the according permissions. Key groups can also be extended with other key groups, which extends the set of keys in the former with those from the latter. Key groups can serve as a building block for many other concepts in p2panda including identity (handles/usernames), multi-device usage, permissions and moderation.

## Use Case

- A key group can be created using a key pair.
- A key can be added to a key group, making it a _member_.
- A key can be removed from a key group.
- A key group can be added to a key group, making it a _member_.
- Specific _permissions_ can be defined for members of a key group.
  - A membership can be limited to publishing operations in specific schemas.
  - A membership can be limited to specific operation actions (e.g. excluding `DELETE` actions).
    8- Specific _permissions_ can be defined for individual keys of a key group.
- Developers can make key groups the owners of a schema's documents by creating an _authorised schema_.
  - Key group members can publish operations for documents that define the key group as their owner.
  - Key group members can not publish operations for that key group's documents when their key group membership doesn't define the required permissions.

## Authorised Schemas

- Authorised schemas define a key group as the owner of documents created with them.
  - Use an authorised schema when you want to enable all key group members with according permissions to update or delete that document.
  - Documents created from authorised schemas are called _authorised documents_.
- Schemas are _authorised schemas_ if they contain a single field of type `owner` that contains:
  - either the document view id of a key group,
  - or the document view id of another authorised document.
- Every document of an _authorised schema_ has a set of _authorised public keys_. This set can be created by looking at the document pointed at by the `owner` type field:
  - if it points at an authorised document, continue from there
  - if a key group is found: that key group's keys are the document's authorised public keys.
- Operations of _authorised schemas_ are only materialised if they were created by a key pair included in the _authorised public keys_ of the operations's document and if that key pair membership has the required permissions for the operation.

### Key groups

#### Schema `key_group_v1`

```
name: string
members: relation_list(key_group_membership_v1)
```

- The name of a key group should be chosen so that its purpose can be understood.

:::tip Jam Queue
By adding an `inverse: boolean` field here we could allow a) anyone to change a document (wow chaos) b) _exclude_ specific keys from editing a document.
:::

### Memberships

#### Schema `key_group_membership_request_v1`

```
key_group: relation(key_group_v1)
? member: owner(key_group_v1)
```

A _key group membership request_ is created in order to add its authoring public key to a key group. It says "Hey! Would you mind adding me to this key group?"

The optional `member` field allows specifying a key group that requests membership instead of the public key that published this operation. A key group membership request that defines a `member` should only be considered valid if its authoring public key has a membership in that key group with `can_authorise` set to `true`.

:::info Jam Queue

If a `member` is defined and the membership has `can_authorise` set to false, the member key group can still change the key set of the parent key group by changing its own members. This could be prevented by making `member` a pinned relation.

:::

#### Schema `key_group_membership_v1`

```
# defines the owner of this membership
key_group: owner(key_group_v1)

# points at the original membership request
request: pinned_relation(key_group_membership_request_v1)

# if set, limit this membership to the schema id specified
? schema: string

# set true to accept the request, can be set to `false` with a later update
accepted: boolean

# if true, this membership can authorise membership requests for the key group,  add the key group to other key groups and edit membership limits.
can_authorise: boolean

# if true, this membership can create documents owned by the key group
can_create: boolean

# if true, this membership can update documents owned by the key group
can_update: boolean

# if true, this membership can delete documents owned by the key group
can_delete: boolean
```

A _key group membership_ is created to _accept_ or _reject_ a group membership request.

If accepted, the public key that created the _key group membership request_ is now included in the key group's key set. If the membership request defines a `member` key group, that key group's key set is included instead.

If rejected, all _key group membership requests_ by the same public key and the same `member` value should be considered invalid.

## Schema Field Definition: Field Type `owner`

- The field definition looks similar to `pinned_relation`
- The schema id this relation references must be an _authorised schema_. Any schema field definition for which this does not hold is invalid.

## Example: Chat Schema

In this example we want to represent chat messages and their authors. Authors should have a name and a profile picture. We also want to make sure that only key pairs controlled by the author can publish chat messages that are linked to the auth(or)'s name and picture.

Instances of the new `account` schema have an `owner` pointing at a key group that contains all public keys of a user and a `picture` that contains the profile picture as a base64-encoded `string`.
We can use the name field on the key group as an account user name.

**Schema `account`:**

```
group: owner(key_group_v1)
picture: string
```

Because it has an `owner`, operations for this `account` schema are only valid if they are signed by one of the keys contained in the key group referred to in the `owner`.

Now we can create the schema for chat messages. It combines the chat message's content with a link to an instance of the `account` schema.

**Schema `chat-message`:**

```
content: string
author: owner(account)
```

Again, because this uses `owner`, operations for this schema are only valid when signed by one of the keys referred to by the `owner`.

How could a query for this schema look like? This is a GraphQL schema for a query that retrieves `chat-message` instances, as well as the name and picture of their authors.

```
chat-message {
    fields {
      content,
      author {
        fields {
          picture,
          group {
            fields {
              name
            }
          }
        }
    }
}
```

[implemented]: https://github.com/p2panda/p2panda/pull/279
