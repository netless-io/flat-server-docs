# Cloud Storage Delete

:key: Need JWT Authorization

## Description

Delete cloud storage file or directory

:::warning
Only files or directories in the same level of directory are supported to be deleted.

If you delete a file or directory from a different directory, it will fail.
:::

## Method And Path

```js
POST /v2/cloud-storage/delete
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
    "uuids": Array<string>;
}
```

#### uuids

File or directory uuids

* minItems: `1`
* maxItems: `50`
* format: [uuid-v4](/misc/ajv-formats/uuid-v4)

e.g.

```ts
[
    "71490c00-13be-11ed-972d-9fc559c659f2",
    "784f4b90-13be-11ed-ac0f-4b9cb2f52f57"
]
```

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