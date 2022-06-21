---
sidebar_position: 3
---

# How to Nav

One of the more complex Resonance entities to master is the Nav.

## LinkType

LinkType is a core field of a Nav, and is the primary method of looking up a Nav in the middle of a tree (when you do not know, or do not want to use the root). You can create as many linkTypes as you like, but you must create them in advance of creating navs in Nav Settings.

![Nav Settings](pathname:///img/nav-settings.png)

Once in Nav Settings, you can create as many custom link types as you like, and they will show when you create new Navs. Consider the "what" of what it links to when creating them, as in, a link to a product might have a linkType of `product`. Then, when combined with `navType` and `linkSlug`, the correct Nav should be easy to get.

There is also a reserved system linkType for `collection`. Collections are core functionality with Navs, and are the most often target, so special functionality is built from this.

## NavType

This describe the purpose of an entire tree. This could be something like `main-menu` or `blog-page-sidebar-3`.

## LinkSlug

This is something to describe the individual link in detail. Often this can match another slug, in order to make looking up the specific entity easy. In the case of collections, this must match the collection's `slug`.
