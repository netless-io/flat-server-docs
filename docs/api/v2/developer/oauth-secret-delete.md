# Create OAuth Secret

:key: Need JWT Authorization

## Description

Create oauth Secret

> Only oauth owner can request.

## Method And Path

```js
POST /v2/developer/oauth/secret/delete
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
    "secretUUID": string;
}
```

#### secretUUID

secrect UUID

* format: [uuid-v4](/misc/ajv-formats/uuid-v4)

## Response

### Success

HTTP Status Code: `200`

```ts
{
    status: Status.Success,
    data: {},
}
```

Extends Type: [Status](/types/status)

### Failed

HTTP Status Code: `200`

```ts
{
    status: Status.Failed,
    code: ErrorCode,
}
```

Extends Type: [Status](/types/status), [ErrorCode](/types/error-code)
