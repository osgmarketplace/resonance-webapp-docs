---
sidebar_position: 2
---

# DemandHq Permissions (DemandHqIdentity)

DemandHqs wouldn't be very valuable unless you could view and modify them. But, we also don't want just anyone to be able to do anything. Thus, DemandHqIdentities help dictate who (Identity) can do what (to the DemandHq).

Identity can either be a User or an AppClient (these are what Apps use to make changes).

## Scopes

Scopes are individual permissions given to an entity. Scopes can be either read or write. Read access gives only the ability to VIEW an entity, while write access gives everything read access gives, plus the ability to alter an entity (create, update, delete). Each will be summarized below for both types of access. Scopes are all lowercase and include a slash, after which there is the type of access (`demandhq/read`).

### DemandHq

-   Read: allows an identity to see all associated data for the demandHq itself, things like who owns it, the name, who last updated it, etc. This does not given access to see any child entities, only the demandHq itself.
-   Write: allows an identity to update certain fields of a demandHq. Anyone can create a demandHq, and demandHqs cannot be deleted.

### DemandHqIdentity

-   Read: allows an identity to see all other identities for a demandHq, and what permissions each has.
-   Write: allows an identity to give and change access for other identities on the demandHq. This includes installing, updating, or removing apps, as well as user management.

### Collection, Customer, CustomerAddress, Nav, Page, PageContent, Product, ProductContentItem, ProductCustomData, ProductLocale, Redirect, Storefront, StorefrontNavSettings, Variant, VariantCustomData

These entities are a bit more straightforward, so we will define them as a group, but first lets talk a little about what each is:

-   Collection: A Collection is a group of products, what may often be referred to as a "Category Page" of some variety. In reality, a collection is far more flexible and can be used to represent any product grouping, and the collectionType can help differentiate between them.

-   Customer: A Customer is a shopper on a Storefront, who's primary purpose is to create Orders.

-   CustomerAddress: An address for a Customer.

-   Nav: Nav is an item within a navigational hierarchy of some kind, most often viewed as a menu.

-   Page: A Page is a part of the Demand Domain and represents a page with textual and image content on it, that has nothing to do with products. This can range from "About Us" pages to Blog articles. Use the "pageType" field to differentiate. Pages do not have locales specified, but since everything would be different anyway, "pageType" can be a composite key with locale in it.

-   PageContent: The actual content itself, a child object of the Page with a 1-1 relationship.

-   Product: This is the main entity of the Demand domain, and is used to represent a product, which is a group of SKUs. SKUs are represented by Variants, a child of this entity. This entity is less frequently updated, it is more likely that Variant will be updated frequently.

-   ProductContentItem: Information about the product item such as images, video, files, etc
-   ProductCustomData: Data that doesn't fit in the provided fields needs to live here. At current moment, both arrays and nested objects are fine as values.

-   ProductLocale: This has a many to one relationship with Product, and provides localized language data for the appropriate fields. There will often only be one of these, and it should be the one set in defaultLocale for the demandHq.

-   Redirect: (TODO: need input here)

-   Storefront: A Storefront is an application of some variety that presents an e-commerce experience directly to customers and facilitates the browsing, shopping, and ordering of Product Variants.

-   StorefrontNavSettings: The settings for a storefront's nav.

-   Variant: This is the child entity to a Product, and is a variation, such as a color, size, etc.

-   Read: allows an identity to see the data for these entities.
-   Write: allows an identity to create and alter the data for these entities. Deleting is possible in certain circumstances, but otherwise archiving is in play.

## Roles

Roles, or DemandHqRoles are groups of scopes.

### Admin

This role gives write access to all entities of a DemandHq (including future ones).
