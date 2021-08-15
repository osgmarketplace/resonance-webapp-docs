---
title: Rate Limiting
sidebar_position: 3
---

# Rate Limiting

All APIs are rate limited. Any information on this page will be true for every request unless the individual route specifies otherwise.

## Fixed-Window

We utilize fixed-window rate limiting. In layman's terms, this means that it is based on a clock, not when the user or app takes action. As in, a minute starts at :00 seconds and ends at :59 seconds. This is a simple method of rate limiting that decreases overhead, but does allow for large bursts of API calls if they occur at the end and beginning of a minute. To counteract this, we keep the time period the window lasts short (1 minute). To make it easy on our developers, the limits are quite generous.

## Admin APIs (Demand, Supply, Events)

The rate limit is applied per identity (app client ID), and is set at 1000 calls/min.

Because we have high limits, we reserve the right to contact and potentially throttle apps that are consistently using the entire limit, but 99.99% of use cases should never get close. If you feel your app is particularly chatty, please contact us for ideas and reassurances that this will not occur.

## Storefront API

The Storefront API has extremely high limits, but is subject to fair use. Please ensure you are using it responsibly (caching where possible), as we reserve the right to the right to impose smaller limits on extreme use.
