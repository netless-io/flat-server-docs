# Start Upload OAuth Logo

:key: Need JWT Authorization

## Description

Start upload oauth logo

> Only oauth owner can request.

## Method And Path

```js
POST /v2/developer/oauth/logo/upload/start
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
    "oauthUUID": string;
    "fileName": string;
    "fileSize": string;
}
```

#### oauthUUID

OAuth Application UUID

* format: [uuid-v4](/misc/ajv-formats/uuid-v4)

#### fileName

Logo file name

* maxLength: `128`
* minLength: `3`
* format: [oauth-logo-suffix](/misc/ajv-formats/oauth-logo-suffix)

#### fileSize

Logo file size

* minimum: `1`
* maximum: [size](/configs/oauth#size)

## Response

### Success

HTTP Status Code: `200`

```ts
{
    status: Status.Success;
    data: {
        fileUUID: string;
        ossDomain: string;
        ossFilePath: string;
        policy: string;
        signature: string;
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
