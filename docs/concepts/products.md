---
sidebar_position: 2
---

# Products

Products exist for both DemandHQs and for Suppliers, where they are known as SupplierProducts.

## No Option Products

Perhaps also thought of as Single Option Products, No Variant Products, or Single Variant Products, these products have a single SKU associated with them and contain no size/color/anything else variations.

### Handling Recommendation

Since you have full control over your frontend, you can handle this situation anyway you like, but you should be aware of one delicate situation: Products can have variants, but only one variant available. As in, you might only have the Red, but it comes in Blue, Green, and Black. In this case, you likely want to still show the selector, but there are other cases with a single variant you would not.

Recommendation for disabling variant selectors:

-   Set the product's first `optionLabel` to the case sensitive string `No Option`.
-   Set the (only) variant associated with that product's `optionValue` to the case sensitive string `No Option`.
-   Allow your frontend to detect this exact string, and adjust accordingly.

These recommendations will help when using the portals, as the UI will recognize this string and act accordinly as well. It will also have help text and buttons aiding with this task.
