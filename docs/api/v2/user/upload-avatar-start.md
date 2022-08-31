# User Start Upload Avatar

:key: Need JWT Authorization

## Description

Start upload user avatar

## Method And Path

```js
POST /v2/user/upload-avatar/start
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
    "fileName": string;
    "fileSize": number;
}
```

#### fileName

File name

* maxLength: `128`
* minLength: `1`
* format: [avatar-suffix](/misc/ajv-formats/avatar-suffix)

#### fileSize

File size

* minimum: `1`
* maximum: [avatar.size](/configs/user#avatar-size)

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

UUID of the current avatar file

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
