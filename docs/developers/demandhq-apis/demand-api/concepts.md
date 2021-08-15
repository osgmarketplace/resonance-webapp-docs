---
sidebar_position: 1
---

# Demand API Concepts

The Demand API houses all functionality for DemandHQ's. This functionality is split into 3 domain groups:

-   Metadata
-   Catalog
-   Commerce

## Metadata

This domain group represents functionality surrounding DemandHQs themselves, often regarding permissions.

## Catalog

The Catalog Domain Group is where all of the Product data is interacted with on the DemandHQ side. You could consider this the Product domain, but it includes other items as well, like managing Storefront visibility and static content like Product Videos and Images.

### Storefronts

These represent different ways of selling your goods. An example may be a React frontend, or selling on Google or Amazon.

### Price

Price is managed at the DemandHQ/Storefront level. This gives the DemandHQ a lot of control over pricing. This complexity is sometimes necessary as different storefronts have different costs, commission structures, etc, and the price must be adjusted to reflect that.

### Localization

Localizations of product information are held separately from one another. A default localization is picked on DemandHQ creation, and this is the localization used if none is provided.

### Currency

Currency is handled differently, in that a default currency is used to set all pricing, and any other currencies used will be converted into using a standard exchange rate.

### Content Items

Content items include Images, Videos, PDFs, or other static items. These have a one-to-many relationship with both Products and Variants (as in several can be related to either), and in both cases a "primary" content item can also be designated.

## Commerce

This domain group represents functionality regarding customers and orders.
