# Cloud Storage Finish Upload

:key: Need JWT Authorization

## Description

finish upload file to cloud storage

1. Request [/v2/cloud-storage/upload/start](/api/v2/cloud-storage/upload-start)
2. Use [/v2/cloud-storage/upload/start](/api/v2/cloud-storage/upload-start) response data upload file
3. File upload finish (Native)
4. Request `/v2/cloud-storage/upload/finish`
5. Done

## Method And Path

```js
POST /v2/cloud-storage/upload/finish
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

#### fileUUID

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

Extends Type: [Status](/types/status), [ErrorCode](/types/error-code)`
