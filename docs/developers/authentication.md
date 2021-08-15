---
title: Authentication
sidebar_position: 2
---

# Authentication

Apps authenticate using an app client ID and a secret. These can be handed to the [/token route](shared-apis/adminidentity-api/rest/token) in the [Admin Identity API](shared-apis/adminidentity-api/concepts). A JSON Web Token (JWT) will be returned with a validity of 6 hours. This token can be used to call APIs that the app has access to.
