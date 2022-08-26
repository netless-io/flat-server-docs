# Cloud Storage Start Convert

:key: Need JWT Authorization

## Description

Start convert file to cloud storage

:::info
Only support [WhiteboardConvert](/types/file-resource-type#WhiteboardConvert) and [WhiteboardProjector](/types/file-resource-type#WhiteboardProjector) file resource type.

ConvertStep must is [FileConvertStep.None](/types/file-convert-step)
:::

## Method And Path

```js
POST /v2/cloud-storage/convert/start
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
    data: {
        resourceType: FileResourceType.WhiteboardConvert,
        whiteboardConvert: {
            taskUUID: string,
            taskToken: string,
        },
    }
}

// or

{
    status: Status.Success,
    data: {
        resourceType: FileResourceType.WhiteboardProjector,
        whiteboardProjector: {
            taskUUID: string,
            taskToken: string,
        },
    }
}
```

Extends Type: [Status](/types/status), [FileResourceType](/types/file-resource-type)

#### resourceType

File resource type.

For more information: [FileResourceType](/types/file-resource-type)

#### whiteboardConvert.taskUUID

whiteboard convert task uuid

For more information: [netless-server-conversion](https://developer.netless.link/server-en/home/server-conversion#get-query-task-conversion-progress)

#### whiteboardConvert.taskToken

whiteboard convert task token

For more information: [netless-server-conversion](https://developer.netless.link/server-en/home/server-conversion#get-query-task-conversion-progress)

#### whiteboardProjector.taskUUID

whiteboard projector task uuid

For more information: [agora-server-conversion](https://docs.agora.io/en/whiteboard/whiteboard_file_conversion?platform=RESTful#query-to-be-converted-tasks)

#### whiteboardProjector.taskToken

whiteboard projector task token

For more information: [agora-server-conversion](https://docs.agora.io/en/whiteboard/whiteboard_file_conversion?platform=RESTful#query-to-be-converted-tasks)

### Failed

HTTP Status Code: `200`

```ts
{
    status: Status.Failed,
    code: ErrorCode
}
```

Extends Type: [Status](/types/status), [ErrorCode](/types/error-code)
