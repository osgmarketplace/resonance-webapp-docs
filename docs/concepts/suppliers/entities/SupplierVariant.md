# SupplierVariant

This is the main child entity to a [SupplierProduct](SupplierProduct), and is a variation, such as a color, size, etc. Some products only have a single variant as well, but every product is required to have at least one variant to be sellable, as the variant is what sells.

This matches to a [Variant](../../demand-hqs/entities/Variant) entity in the Demand domain. When an [Order](../../demand-hqs/entities/Order) is placed for a [Variant](../../demand-hqs/entities/Variant), it is matched with a SupplierVariant using a [PurchaseOrderItem](PurchaseOrderItem), and the Supplier fulfills the SupplierVariant to complete that piece of the [Order](../../demand-hqs/entities/Order). This is a SupplierVariant's primary purpose, to be sold and provide the `cost` in revenue to the Supplier.

## SupplierVariantCustomData

This entity holds a 1:1 relationship with SupplierVariant and holds data that doesn't fit anywhere else.

## SupplierVariantSupplement

This is a child entity of SupplierVariant. It holds no special significance other than the fields contained on it are less frequently updated than SupplierVariant.
