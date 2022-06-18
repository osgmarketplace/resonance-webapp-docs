# Collection

A Collection is a group of [Products](Product), what may often be referred to as a "Category Page" of some variety. In reality, a collection is far more flexible and can be used to represent any product grouping, and the `collectionType` can help differentiate between the different styles of groupings.

For instance a "Tents" collection may contain many [Products](Product) that are camping tents and have a `collectionType` of `main-nav`. Differently, a "New For Spring" collection may contain a variety of [Products](Product) and have a `collectionType` of `marketing-landing`.

## CollectionTypeContent

This entity is a small entity that exists as a Parent to Collections. This is generally used on a page where several collections are listed for a given `collectionType`, and can provide a title, description, and more to this page.
