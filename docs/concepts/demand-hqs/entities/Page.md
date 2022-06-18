# Page

A Page is likely the least well-defined entity, as it can literally be any page on the site. A Page is a part of the Demand Domain and represents a page with textual and image content on it, that has nothing to do with products. This can range from "About Us" pages to Blog articles. Use the `pageType` field to differentiate between different types of Pages, and you can look them up based on this field. Pages do not have locales specified, but since everything would be different anyway, "pageType" can be a composite key with locale in it.

## PageTypeContent

This entity allows you to display some content on category pages for Pages, like say, if you have a Blog `pageType`, this entity may contain the name of your blog as the `title`.
