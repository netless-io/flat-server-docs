# Cloud Storage Finish Convert

:key: Need JWT Authorization

## Description

Finish convert file to cloud storage

:::info
Only support [WhiteboardConvert](/types/file-resource-type#WhiteboardConvert) and [WhiteboardProjector](/types/file-resource-type#WhiteboardProjector) file resource type.

ConvertStep must is [FileConvertStep.Converting](/types/file-convert-step) or [FileConvertStep.Done](/types/file-convert-step)
:::

1. Upload file Finish (ppt / pptx / pdf e.g.)
2. Request [/v2/cloud-storage/convert/start](/api/v2/cloud-storage/convert-start)
3. Use [/v2/cloud-storage/convert/start](/api/v2/cloud-storage/convert-start) response data query convert progress
4. Query file convert finish (Native)
5. Request `/v2/cloud-storage/convert/finish`
6. Done

## Method And Path

```js
POST /v2/cloud-storage/convert/finish
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

:::tip
If server query status is `Waiting` / `Converting`, or convertStep is [FileConvertStep.None](/types/file-convert-step), request will failed.

If query status is `Finished`, database will update convertStep to [FileConvertStep.Done](/types/file-convert-step)

If query status is `Fail`, database will update convertStep to [FileConvertStep.Failed](/types/file-convert-step)
:::

### Failed

HTTP Status Code: `200`

```ts
{
    status: Status.Failed,
    code: ErrorCode
}
```

Extends Type: [Status](/types/status), [ErrorCode](/types/error-code)
