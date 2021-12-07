---
sidebar_position: 2
---

# Supplier Permissions (SupplierIdentity)

Suppliers wouldn't be very valuable unless you could view and modify them. But, we also don't want just anyone to be able to do anything. Thus, SupplierIdentities help dictate who (Identity) can do what (to the Supplier).

Identity can either be a User or an AppClient (these are what Apps use to make changes).

## Scopes

Scopes are individual permissions given to an entity. Scopes can be either read or write. Read access gives only the ability to VIEW an entity, while write access gives everything read access gives, plus the ability to alter an entity (create, update, delete). Each will be summarized below for both types of access. Scopes are all lowercase and include a slash, after which there is the type of access (`supplier/read`).

### Supplier

-   Read: allows an identity to see all associated data for the supplier itself, things like who owns it, the name, who last updated it, etc. This does not given access to see any child entities, only the supplier itself.
-   Write: allows an identity to update certain fields of a supplier. Anyone can create a supplier, and suppliers cannot be deleted.

### SupplierIdentity

-   Read: allows an identity to see all other identities for a supplier, and what permissions each has.
-   Write: allows an identity to give and change access for other identities on the supplier. This includes installing, updating, or removing apps, as well as user management.

### SupplierVariant, SupplierVariantContentItem, SupplierVariantCustomData, SupplierVariantLocale, SupplierVariantSupplement

These entities are a bit more straightforward, so we will define them as a group, but first lets talk a little about what each is:

-   SupplierVariant: this contains the basic information about a SupplierVariant, things like cost and productTitle.
-   SupplierVariantContentItem: this contains information about what content a SupplierVariant is related to, things like images or files.
-   SupplierVariantCustomData: this contains anything. Literal anything about a SupplierVariant that doesn't fit anywhere else.
-   SupplierVariantLocale: this contains locale specific data surrounding the SupplierVariant, things like description and feature bullets that would change based on where you live.
-   SupplierVariantSupplement: this contains supplementary data for a SupplierVariant that doesn't get updated very frequently. Things like barcode, SKU, or weight and dimensions.

-   Read: allows an identity to see the data for these entities.
-   Write: allows an identity to create and alter the data for these entities. Deleting is possible in certain circumstances, but otherwise archiving is in play.

## Roles

Roles, or SupplyRoles are groups of scopes.

### Admin

This role gives write access to all entities of a Supplier (including future ones).
