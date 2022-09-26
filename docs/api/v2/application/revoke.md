# Revoke OAuth Application

:key: Need JWT Authorization

## Description

Revoke oauth application.

> Only granted oauth application user can request.

## Method And Path

```js
POST /v2/application/revoke
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

```ts{2-3}
{
    "oauthUUID": string;
}
```

#### oauthUUID

OAuth application UUID

## Response

### Success

HTTP Status Code: `200`

```ts
{
    status: Status.Success;
    data: {};
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
