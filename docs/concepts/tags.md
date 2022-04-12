---
sidebar_position: 4
---

# Tags

Tags exist on many different entities throughout Resonance, from Collections to Pages. They are used to categorize or apply attributes to the entity they are attached to.

## Comma-Separated Tags

Tags can be simple strings, but for more advanced usage, they can also have different levels of grouping separated by commas.

### Creation

For instance: `Category,Key,Value` allows you to act on three distinct values. Let's look at these in reverse order.

#### Value

A tag always has a value. If you provide just the simple tag `myTag`, then `value` is `myTag`, and both `category` and `key` are null.

Similarly, the last part of a comma-separated tag is always the value, so `myCategory,myKey,myTag` also has the value `myTag`.

#### Key

A tag doesn't always have a key, but if there are two parts to a tag separated by a comma, the first one is the key: `myKey,myValue` (`myKey`)

Similarly, if there are three parts to a tag separated by commas, the second part is the key: `myCategory,myKey,myTag` (`myKey`)

#### Category

Only if there are two commas present does a tag contain a Category. When present, it is always the first part: `myCategory,myKey,myTag` (`myCategory`)

#### What if I want to use a Comma in my Value?

This is possible, if not altogether beautiful, you do this by either providing Category and Key: `myCategory,myKey,myTag, withCommas` (`myTag, withCommas`)

Or, you can opt to not provide a Category and Key, but you must provide the commas where they would live: `,,myTag, withCommas` (`myTag, withCommas`)

#### What about spaces?

You can use spaces inside categories, keys, and values, but any spaces directly after an important comma (the first two) will be removed. (`myCategory, myKey, myTag` becomes `myCategory,myKey,myTag`)

### Use

Using comma-separated tags is where you start to hit paydirt, as you have two primary advantages using the `parsed` field:

#### Filtering

When you are returning your tags for your given entity, you can optionally filter for a category and/or key, only returning the associated tags:

```graphql
tags {
    parsed(category: "myCategory", key: "myKey") {
        category
        key
        value
    }
}
```

#### Object Return

As you may have noticed just above, you can return tags with their category, key, and value as separate properties of an object:

```json
{
    "category": "myCategory",
    "key": "myKey",
    "value": "myTag"
}
```
