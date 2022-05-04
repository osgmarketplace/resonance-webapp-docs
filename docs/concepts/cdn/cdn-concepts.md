---
sidebar_position: 1
---

# CDN Concepts

At the heart of every website lies its content, and likewise, at the heart of Resonance lies the CDN.

You will interact with the CDN initally through other APIs (Supply and Demand, say, to upload an image). This ensures that every piece of content is valid, stored, and in the correct location.

Once you have done so, you can use that uploaded image directly (Typically a URL like `https://cdn.buildresonance.com/images/{imageId}/image.jpg` that you can place in an `<img src />` tag).

Our CDN is globally distributed, and provides local caching of assets to every region across the globe individually for lowest possible latency for requests.

## Images

Images are the most used type of content item, and as such, additional functionality has been provided specific to their use. When creating an image request to the API, you can either use the URL with no modification whatsoever, or provide "edits" to the [image processor](image-processor), and the image will be modified on the fly while being returned.
