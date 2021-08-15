---
title: Overall API Concepts
sidebar_position: 1
---

# Overall API Concepts

The APIs are split into 3 different categories based on the area of the business they interact with: DemandHQ, Supplier, and Shared (both).

## Domains

The APIs are split into areas of context (domains):

-   [Shared APIs](shared-apis/concepts): This includes the Admin Identity and Events APIs. These APIs are not specific to Supply or Demand, and instead provide cross cutting functionality.
-   [Supplier APIs](supplier-apis/concepts): This includes the Supply API. In general, these APIs are used to interact with Suppliers, and can be used to manage inventory or purchase orders.
-   [DemandHQ APIs](demandhq-apis/concepts): This includes a Demand HQ Admin API, as well as a Storefront and Search API. These APIs can be used to interact with Demand HQ's. This is either directly, in the case of the Admin API, or to populate a storefront, in the case of the Storefront and Search APIs.

Each API is further split into domain groups, and details on these can be found in the API documentation.

## Apps

Apps can be created for, and installed on, both Suppliers and DemandHQs. Inside the DemandHQ domain, you can create either Admin or Storefront apps. Apps will be specific to one of these three, however, and cannot cross the boundary to have more than one purpose.

## IDs

IDs are prefixed with a 5-character type, split by a dash, and then have a date created at, sortable, random ID appended to it. i.e. `prdct-adthcnhT234podvntae%g`. All IDs are globally unique to the platform.

Two IDs are UUIDs due to case insensitivity, and these are User IDs (UserNames) and App Client IDs.

## GraphQL

All APIs (with a few exceptions) for the platform are based on GraphQL.

### GraphQL Developer Tools

GraphQL related developer tools are a very common way to discover API functionality, and we support any of them that use the GraphQL introspection query. This includes:

-   [GraphiQL](https://github.com/graphql/graphiql)
-   [GraphQL Playground](https://github.com/graphql/graphql-playground)
-   [Apollo Studio](https://www.apollographql.com/docs/studio/explorer/)

Note that you must authenticate in order to use these tools, however. A token can be obtained in the Identity Portal Developer Settings.

Reference documentation is also generated directly here for easy reference.
