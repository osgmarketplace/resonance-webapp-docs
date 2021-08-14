---
sidebar_position: 1
---

# Overall API Concepts

The APIs are split into 3 different categories based on the area of the business they interact with: DemandHQ, Supplier, and Shared (both).

## Apps

Apps can be created for, and installed on, both Suppliers and DemandHQs. Inside the DemandHQ domain, you can create either Admin or Storefront apps. Apps will be specific to one of these three, however, and cannot cross the boundary to have more than one purpose.

## IDs

IDs are prefixed with a 5-character type, split by a dash, and then have a date created at, sortable, random ID appended to it. i.e. `prdct-adthcnhT234podvntae%g`. All IDs are globally unique to the platform.

## GraphQL

All APIs (with a few exceptions) for the platform are based on GraphQL.

### GraphQL Developer Tools

GraphQL related developer tools are a very common way to discover API functionality, and we support any of them that use the GraphQL introspection query. This includes:

-   [GraphiQL](https://github.com/graphql/graphiql)
-   [GraphQL Playground](https://github.com/graphql/graphql-playground)
-   [Apollo Studio](https://www.apollographql.com/docs/studio/explorer/)
