# Cloud Storage Move

:key: Need JWT Authorization

## Description

Move cloud storage file or directory

:::warning
Only files or directories in the same level of directory are supported to be moved to the specified location.

If you move a file or directory from a different directory to the specified directory, it will fail.
:::

## Method And Path

```js
POST /v2/cloud-storage/move
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
    "uuids": Array<string>;
    "targetDirectoryPath": string;
}
```

#### uuids

File or directory uuids

e.g.

```ts
[
    "71490c00-13be-11ed-972d-9fc559c659f2",
    "784f4b90-13be-11ed-ac0f-4b9cb2f52f57"
]
```

* minItems: `1`
* maxItems: `50`
* format: [uuid-v4](/misc/ajv-formats/uuid-v4)

#### targetDirectoryPath

Target directory path

* format: [directory-path](/misc/ajv-formats/directory-path)

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