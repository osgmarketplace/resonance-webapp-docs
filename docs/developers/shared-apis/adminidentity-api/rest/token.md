---
title: Token
sidebar_position: 2
---

# Token

This route is one of the few REST routes in the APIs, and is used to get access tokens for apps.

## Method

This route only accepts POST calls.

## Request Body

| Field       | Type   | Required | Description                                                                                                                                                     |
| ----------- | ------ | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| appClientId | string | true     | This is one of your app's client IDs. This can be found in the Identity Portal when you create an app. This is a string composed of appcl, a dash, and an UUID. |
| appSecret   | string | true     | This must be the matching app secret to the Client ID. This can only be seen once, when you initially create the app, or when you reset this secret.            |

```
{
    "appClientId": "appcl-xxxxx-xxxx-xxxx-xxxxx",
    "appSecret": "kdn1n3prn246$^&%^*34lwrngknfvoknspdnfpsnsfnbpsfnbp"
}
```

## Response Body

| Field        | Type   | Description                                                                                                    |
| ------------ | ------ | -------------------------------------------------------------------------------------------------------------- |
| accessToken  | string | This is the access token you will use to access the APIs your app has access to. It is a JSON web token (JWT). |
| expiresAt    | number | Epoch date in seconds that the token expires at. Generally this is 6 hours from time of obtaining it.          |
| idToken      | string | This is a token that will eventually be used to control aspects of your app. Rarely used.                      |
| refreshToken | string | This is a token that can be used to refresh the other tokens.                                                  |

```
{
    "accessToken": "...",
    "expiresAt": "1234567890",
    "idToken": "...",
    "refreshToken": "..."
}
```
