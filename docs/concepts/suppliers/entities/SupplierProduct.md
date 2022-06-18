# SupplierProduct

This is the main entity of the Supplier domain, and is used to represent a product, which is a group of SKUs. SKUs are represented by SupplierVariants, a child of this entity. These generally represent some Size/Color combination or similar of the product. For instance, a Sweater is a product, and the Gray / Medium version is a variant.

This entity is less frequently updated, it is more likely that SupplierVariant will be updated frequently.

SupplierProducts have many related entities, including SupplierProductLocales, SupplierProductContentItems, [SupplierVariants](SupplierVariant), and SupplierVariantSupplements.

This entity matches with [Product](../../demand-hqs/entities/Product) in the Demand domain, and the properties between the two are very similar.

## SupplierProductCustomData

This entity is a 1:1 relationship with SupplierProduct and holds data that doesn't fit anywhere else.

## SupplierProductContentItem

This entity holds a relationship between a SupplierProduct and an image, video, or file and is a child entity of SupplierProduct.

## SupplierProductLocale

This entity is a child entity of SupplierProduct, and contains the description and feature bullets in various languages.
