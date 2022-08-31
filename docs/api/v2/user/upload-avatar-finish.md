# User Finish Upload Avatar

:key: Need JWT Authorization

## Description

Finish upload user avatar

## Method And Path

```js
POST /v2/user/upload-avatar/finish
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
    "fileUUID": string;
}
```

#### fileUUD

File uuid

* format: [uuid-v4](/misc/ajv-formats/uuid-v4)

## Response

### Success

HTTP Status Code: `200`

```ts
{
    status: Status.Success,
    data: {}
}
```

Extends Type: [Status](/types/status)

### Failed

HTTP Status Code: `200`

```ts
{
    status: Status.Failed,
    code: ErrorCode
}
```

Extends Type: [Status](/types/status), [ErrorCode](/types/error-code)
