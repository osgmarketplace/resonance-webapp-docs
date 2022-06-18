# Product

This is the main entity of the Demand domain, and is used to represent a product, which is a group of SKUs. SKUs are represented by [Variants](Variant), a child of this entity. SKUs are commonly Size/Color combinations for a Product, but a Product can also just have a single SKU.

This entity matches with [SupplierProduct](../../suppliers/entities/SupplierProduct) in the Supply domain, and the properties between the two are very similar.

## ProductCustomData

This entity is a 1:1 relationship with Product and holds data that doesn't fit anywhere else.

## ProductContentItem

This entity holds a relationship between a Product and an image, video, or file and is a child entity of Product.

## ProductLocale

This entity is a child entity of Product, and contains the description and feature bullets in various languages.
