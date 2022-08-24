# Cloud Storage Rename

:key: Need JWT Authorization

## Description

Rename cloud storage file or directory

## Method And Path

```js
POST /v2/cloud-storage/rename
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
    "fileUUID": string;
    "newName": string;
}
```

#### fileUUID

File or directory uuid

* format: [uuid-v4](/misc/ajv-formats/uuid-v4)

#### newName

File or directory new name

If target is directory, format is: [directory-name](/misc/ajv-formats/directory-name)

* maxLength: `50`
* minLength: `1`

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

## Examples

### directory

* oldNew: `a`
* newName: `b`
* result: `b`

### file

* oldNew: `a.png`
* newName: `b.jpg`
* result: `b.jpg.png`
