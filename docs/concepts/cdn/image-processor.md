---
sidebar_position: 2
---

# Image Processor

Editing an image from a frontend is a little odd, but not complex.

## How

1. Get the key of the image using the appropriate API (Storefront is most likely). This key will have the format of `{contentItemId}/image.{extension}`.
2. Build a JSON object that includes the key, as well as the edits desired to the image. The example below makes the image grayscale.

```javascript
const imageRequestObject = {
    key: "cntnt-JDFUVHCdsihfkheifbv123v/image.jpg",
    edits: {
        grayscale: true,
    },
};
```

3. Stringify the object. Your browser (javascript) provides a nice helper function to do so: `JSON.stringify()`.
4. Base64 encode the stringified object. Your browser (javascript) provides a nice helper for this as well: `btoa()`. A full code example of what the end result may look like:

```javascript
const imageUrl = `https://cdn.buildresonance.com/images/${btoa(
    JSON.stringify({
        key,
        edits,
    })
)}`;
```

All examples from here will only include the `edits` object, but `key` is still required for each request.

## Edits

The edits object supports many different types of edits, but first lets cover the most common and some special edits.

### Resizing

The simplest way to resize is just to provide a new width and height:

```javascript
const edits = {
    resize: {
        width: 100,
        height: 100,
    },
};
```

This will definitely work, and provide a new image using a `cover` type fit.

You can also change more options, like the fit, see [resize Sharp documentation](https://sharp.pixelplumbing.com/api-resize#resize) for more details.

### Round Cropping

Round cropping is a more unique feature to our image processor, but the implementation is similar to other features. The property name is `roundCrop`, and you can use it in two ways:

1. True. If the value is `true`, the feature returns a circular cropped image that is centered from the original image and has a diameter of the smallest edge of the original image.
2. Specific. Details:

-   roundCrop.rx: (optional, number) specifies the radius along the x-axis of the ellipse. If a value is not provided, defaults to a value that is half the length of the smallest edge.
-   roundCrop.ry: (optional, number) specifies the radius along the y-axis of the ellipse. If a value is not provided, defaults to a value that is half the length of the smallest edge.
-   roundCrop.top: (optional, number) specifies the offset from the top of the original image to place the center of the ellipse. If a value is not provided, defaults to a value that is half of the height.
-   roundCrop.left: (optional, number) specifies the offset from the left-most edge of the original image to place the center of the ellipse. If a value is not provided, defaults to a value that is half of the width.

```javascript
const edits = {
    roundCrop: {
        rx: 30, // x-axis radius
        ry: 20, // y-axis radius
        top: 300, // offset from top edge of original image
        left: 500, // offset from left edge of original image
    },
};
```

### Other Edits

The image processor supports all edits supported by Sharp (as of version `0.27.0`). You can see [Sharp documentation](https://sharp.pixelplumbing.com/api-resize) for additional details.

The implementation shown by Sharp will be using JavaScript methods, but you can generally apply them similarly, but as an object.

Take `flip` as an example. [Sharp says](https://sharp.pixelplumbing.com/api-operation#flip):

`const output = await sharp(input).flip().toBuffer();`

You can ignore the `sharp()` and `toBuffer()`, and keep the `flip` like so:

```javascript
const edits = {
    flip: true,
};
```

You can combine more than one edit, and use options by creating an object, here is an example for `extract` ([docs](https://sharp.pixelplumbing.com/api-resize#extract)):

```javascript
const edits = {
    extract: {
        left: 10,
        top: 10,
        width: 100,
        height: 100,
    },
};
```
