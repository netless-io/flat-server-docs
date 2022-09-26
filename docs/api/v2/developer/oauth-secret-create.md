# Create OAuth Secret

:key: Need JWT Authorization

## Description

Create oauth Secret

> Only oauth owner can request.

## Method And Path

```js
POST /v2/developer/oauth/secret/create
```

## Request

### Header

```ts{2-4}
{
    "authorization": string;
    "x-request-id": string;
    "x-session-id": string;
}
```

### Body

```ts{2}
{
    "oauthUUID": string;
}
```

#### oauthUUID

OAuth Application UUID

* format: [uuid-v4](/misc/ajv-formats/uuid-v4)

## Response

### Success

HTTP Status Code: `200`

```ts
{
    status: Status.Success;
    data: {
        secretUUID: string;
        clientSecret: string;
    }
}
```

Extends Type: [Status](/types/status)

#### secretUUID

secrect UUID

#### secrect

secret string. e.g. `1234abcdxxxxxxxx`

> Not included `*`

### Failed

HTTP Status Code: `200`

```ts
{
    status: Status.Failed,
    code: ErrorCode,
}
```

Extends Type: [Status](/types/status), [ErrorCode](/types/error-code)
