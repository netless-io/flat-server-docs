# Get User Profile

## Description

Get user profile by OAuth2

## Method And Path

```js
POST /v2/oauth2/api/user-profile
```

## Request

### Header

```ts{2-4}
{
    "authorization": string; // access_token
    "x-request-id": string;
    "x-session-id": string;
}
```

## Response

### Success

```ts
{
    "userUUID"?: string;
    "userName"?: string;
    "avatarURL"?: string;
}
```

### Failed

```ts
{
    "error": string;
    "error_description": string;
}
```
