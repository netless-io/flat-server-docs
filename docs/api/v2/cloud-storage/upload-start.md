# Cloud Storage Start Upload

:key: Need JWT Authorization

## Description

Start upload file to cloud storage

## Method And Path

```js
POST /v2/cloud-storage/upload/start
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

```ts{2-4}
{
    "fileName": string;
    "fileSize": number;
    "targetDirectoryPath": string;
}
```

#### fileName

File name

* maxLength: `128`
* minLength: `3`
* format: [file-suffix](/misc/ajv-formats/file-suffix)

#### fileSize

File Size

* minimum: `1`
* maximum: [single_file_size](/configs/cloud-storage#single_file_size)

#### targetDirectoryPath

Target directory path

* format: [directory-path](/misc/ajv-formats/directory-path)

## Response

### Success

HTTP Status Code: `200`

```ts
{
    status: Status.Success,
    data: {
        fileUUID: string,
        ossDomain: string,
        ossFilePath: string,
        policy: string,
        signature: string,
    }
}
```

Extends Type: [Status](/types/status)

#### fileUUID

UUID of the current document

#### ossDomain

OSS domain

#### ossFilePath

OSS file path

e.g. `/test/x.png`

#### policy

OSS policy

Ref: [Policy](https://www.alibabacloud.com/help/en/object-storage-service/latest/postobject#section-d5z-1ww-wdb)

#### signature

OSS signature

Ref: [Policy](https://www.alibabacloud.com/help/en/object-storage-service/latest/postobject#section-d5z-1ww-wdb)

### Failed

HTTP Status Code: `200`

```ts
{
    status: Status.Failed,
    code: ErrorCode
}
```

Extends Type: [Status](/types/status), [ErrorCode](/types/error-code)
