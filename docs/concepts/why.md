---
sidebar_position: 1
---

# Why Resonance?

## What's the problem?

1.  Increasing the amount of products available for customers increases their satisfaction.
2.  Buying all of those products is a huge risk.
3.  Managing inventory relationships and integrations is difficult.

## What is Resonance?

Resonance is a headless e-commerce platform focused on Marketplaces. Lets break this down:

_Headless_ means "bring your own frontend". The platform is setup to be framework-agnostic (though we may be opinionated).

A _Marketplace_ is an e-commerce site with multiple suppliers to sell goods from. This means an individual product SKU may come from more than one possible supplier. This enables an e-commerce site to expand selection, have greater in stock percentages, and satisfy more customers. Resonance simplifies the experience of **becoming** a marketplace for e-commerce merchants. This should not be confused with **working with** marketplaces like Amazon and Ebay.

Resonance is composed of [Suppliers](suppliers/supplier-concepts) and [DemandHQs](demand-hqs/demand-hq-concepts). These can be viewed similarly to the economics concepts of Supply and Demand. [Suppliers](suppliers/supplier-concepts) and [DemandHQs](demand-hqs/demand-hq-concepts) are handled separately from one another, and any [DemandHQ](demand-hqs/demand-hq-concepts) can form a relationship with any Supplier, including serving many [DemandHQs](demand-hqs/demand-hq-concepts).

## What are the benefits of being a Marketplace?

In more detail, the following are generally regarded as benefits to using marketplaces when compared to standard e-commerce:

-   **Convenience:** Consumers are more likely to find something to fit their needs when inventory and selection are greater.
-   **Visibility:** Search engines and other internet sites are more likely to link to your site given stronger ability to appease a customer.
-   **Versatility:** Additional, non-primary product lines being present allows for complimentary product sales.
-   **Global:** The shrinking of the size of the world is fully captured in a sales model that takes full advantage of Suppliers the world over.
-   **Data:** The amount of possible paths for a consumer increases both the quantity and relevance of the data they present.

The main downside of marketplaces is that the data is more cumbersome to maintain, at least, in the absence of proper tooling.

## How is this different from other e-commerce platforms?

When compared to other headless e-commerce platforms, most others are just the [DemandHQ](demand-hqs/demand-hq-concepts) side, and you are left to your own devices to solve any problems outside a single source of product.

The [Suppliers](suppliers/supplier-concepts) side of Resonance allows a warehouse to integrate its Products, and allow [DemandHQs](demand-hqs/demand-hq-concepts) to sell them, paying the [Supplier](suppliers/supplier-concepts) when this occurs. By separating this concept from a [DemandHQ](demand-hqs/demand-hq-concepts)'s own inventory, it allows for:

-   Multiple [Suppliers](suppliers/supplier-concepts) to provide the same Product and Variant to one [DemandHQ](demand-hqs/demand-hq-concepts).
-   A [Supplier](suppliers/supplier-concepts) to provide its Products to more than one [DemandHQ](demand-hqs/demand-hq-concepts).
-   A [DemandHQ](demand-hqs/demand-hq-concepts) to have full control over the presentation of its Products.

If this is Resonance:

![Resonance Diagram](pathname:///img/resonance-simple-diagram.png)

This would be something like Shopify:

![Shopify Diagram](pathname:///img/shopify-simple-diagram.png)

The large question mark would be some composition of integrations, apps, or manual updates directly into the Merchant, with no solid way to account for two places having the same product.

In addition, without Supply-side knowledge, some cases are impossible to achieve, like geo-distributing orders based on Supplier proximity to the customer, or having multiple tiered costs per single item\*.

_\*At time of writing (2022), Shopify is moving in this direction, but they have a long way to go to match capabilities built from the ground up._

Resonance providing both entities enables it to properly know and manage every aspect of the supply chain intelligently. Feature to feature comparisons may be somewhat helpful, but the primary features of Resonance simply don't exist in other platforms.

## You can't possibly compete on performance, availability, and scalability though, right?

Resonance has been architected from the ground up using modern, serverless, event-driven approaches to ensure limitless scalability and maximum performance across the board, all while maintaining strong uptime (at least 99.9%).
