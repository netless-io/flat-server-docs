# Refresh Token

## Description

Refresh token

## Method And Path

```js
POST /v2/oauth2/refresh-token
```

## Request

### Header

```ts{2-3}
{
    "x-request-id": string;
    "x-session-id": string;
}
```

### Body

```ts
{
    "grantType": "refresh_token",
    "clientID": string;
    "clientSecret": string;
    "refreshToken": string;
}
```

## Response

### Success

```ts
{
    "access_token": string;
    "token_type": "token";
    "expires_in": number; // unit: seconds
    "refresh_token": string;
}
```

### Failed

```ts
{
    "error": string;
    "error_description": string;
}
```

## Note

When the request is completed, the previous `access_token` and `refresh_token` will be invalidated.
