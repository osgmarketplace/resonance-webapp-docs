# Variant

This is the main child entity to a [Product](Product), and is a variation, such as a color, size, etc. Some products only have a single variant as well, but every product is required to have at least one variant to be sellable, as the variant is what sells.

This matches to a [SupplierVariant](../../suppliers/entities/SupplierVariant) entity in the Supply domain. When an [Order](Order) is placed for a Variant, it is matched with a [SupplierVariant](../../suppliers/entities/SupplierVariant) using a [PurchaseOrderItem](../../suppliers/entities/PurchaseOrderItem), and the Supplier fulfills the [SupplierVariant](../../suppliers/entities/SupplierVariant) to complete that piece of the [Order](../../demand-hqs/entities/Order). This is a Variant's primary purpose, to be sold and provide the `price` in revenue for the DemandHq.

## VariantCustomData

This entity holds a 1:1 relationship with Variant and holds data that doesn't fit anywhere else.
