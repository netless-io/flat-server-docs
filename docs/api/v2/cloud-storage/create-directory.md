# Cloud Storage Create Directory

:key: Need JWT Authorization

## Description

Create directory in cloud storage

## Method And Path

```js
POST /v2/cloud-storage/create-directory
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
    parentDirectoryPath: string;
    directoryName: string;
}
```

#### parentDirectoryPath

Create a directory in this folder

* minLength: `1`
* maxLength: `298`
* format: [directory-path](/misc/ajv-formats/directory-path)

#### directoryName

Create directory name

* minLength: `1`
* maxLength: `50`
* format: [directory-name](/misc/ajv-formats/directory-name)

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