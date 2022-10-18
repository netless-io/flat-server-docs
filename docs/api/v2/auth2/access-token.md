# Get Access Token

## Description

Get access token by code

## Method And Path

```js
POST /v2/oauth2/access-token
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
    "grantType": "authorization_code",
    "clientID": string;
    "clientSecret": string;
    "code": string;
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
