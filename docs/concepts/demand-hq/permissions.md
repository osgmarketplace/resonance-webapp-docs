---
sidebar_position: 2
---

# DemandHq Permissions (DemandHqIdentity)

DemandHqs wouldn't be very valuable unless you could view and modify them. But, we also don't want just anyone to be able to do anything. Thus, DemandHqIdentities help dictate who (Identity) can do what (to the DemandHq).

Identity can either be a User or an AppClient (these are what Apps use to make changes).

## Scopes

Scopes are individual permissions given to an entity. Scopes can be either read or write. Read access gives only the ability to VIEW an entity, while write access gives everything read access gives, plus the ability to alter an entity (create, update, delete). Each will be summarized below for both types of access. Scopes are all lowercase and include a slash, after which there is the type of access (`demandHq/read`).

### DemandHq

-   Read: allows an identity to see all associated data for the demandHq itself, things like who owns it, the name, who last updated it, etc. This does not given access to see any child entities, only the demandHq itself.
-   Write: allows an identity to update certain fields of a demandHq. Anyone can create a demandHq, and demandHqs cannot be deleted.

### DemandHqIdentity

-   Read: allows an identity to see all other identities for a demandHq, and what permissions each has.
-   Write: allows an identity to give and change access for other identities on the demandHq. This includes installing, updating, or removing apps, as well as user management.

### Collection, Customer, CustomerAddress, Nav, Page, PageContent, Product, ProductContentItem, ProductCustomData, ProductLocale, Redirect, Storefront, StorefrontNavSettings, Variant, VariantCustomData, VariantSupplement

These entities are a bit more straightforward, so we will define them as a group, but first lets talk a little about what each is:

-   Collection:
-   Customer:
-   CustomerAddress:
-   Nav:
-   Page:
-   PageContent:
-   Product:
-   ProductContentItem:
-   ProductCustomData:
-   ProductLocale:
-   Redirect:
-   Storefront:
-   StorefrontNavSettings:
-   Variant:
-   VariantCustomData:
-   VariantSupplement:

-   Read: allows an identity to see the data for these entities.
-   Write: allows an identity to create and alter the data for these entities. Deleting is possible in certain circumstances, but otherwise archiving is in play.

## Roles

Roles, or DemandHqRoles are groups of scopes.

### Admin

This role gives write access to all entities of a DemandHq (including future ones).
