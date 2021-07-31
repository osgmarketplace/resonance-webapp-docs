---
sidebar_position: 1
---

# Demand API Concepts

The Demand API houses all functionality for DemandHQ's. This functionality is split into 3 domain groups:

-   Metadata
-   Catalog
-   Commerce

## Metadata

## Catalog

The Catalog Domain Group is where all of the Product data is interacted with on the DemandHQ side. You could consider this the Product domain, but it includes other items as well, like managing Storefront visibility and static content like Product Videos and Images.

### Storefronts

These represent different ways of selling your goods. An example may be a React frontend, or selling on Google or Amazon.

### Price

Price is managed at the DemandHQ/Storefront level. This gives the DemandHQ a lot of control over pricing. This complexity is sometimes necessary as different storefronts have different costs, commission structures, etc, and the price must be adjusted to reflect that.

### Localization/Currency

Language and Currency are handled at the default level for a given DemandHQ, and the fields uploaded will correlate with that locale or currency. Other locales or currencies will be handled through other means. This path was chosen due to most marketplaces having a primary locale/currency that covers 99% of use cases (including many storefronts).

### Content Items

Content items include Images, Videos, PDFs, or other static items. These have a one-to-many relationship with both Products and Variants (as in several can be related to either), and in both cases a "primary" content item can also be designated.

## Commerce
