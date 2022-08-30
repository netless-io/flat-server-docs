# Cloud Storage List

:key: Need JWT Authorization

## Description

List cloud storage file and directory

## Method And Path

```js
POST /v2/cloud-storage/list
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

```ts{2-5}
{
    "page": number;
    "directoryPath": string;
    "size"?: number;
    "order"?: "ASC" | "DESC";
}
```

#### page

* minimum: `1`
* maximum: `50`

#### directoryPath

Path to the folder to be viewed

* minLength: `1`
* maxLength: `300`
* format: [directory-path](/misc/ajv-formats/directory-path)

#### size

Number of displays per page

* default: `50`
* minimum: `1`
* maximum: `50`

#### order

Sort by file creation time

::: tip
directories are always at the top
:::

* enum: `ASC | DESC`
* default: `ASC`

## Response

### Success

HTTP Status Code: `200`

```ts
{
    status: Status.Success,
    data: {
        totalUsage: number;
        files: Array<{
            fileUUID: string;
            fileName: string;
            fileSize: number;
            fileURL: string;
            resourceType: FileResourceType;
            createAt: number;
            meta: {
                whiteboardConvert?: WhiteboardConvertPayload;
                whiteboardProjector?: WhiteboardProjectorPayload;
            }
        }>;
        canCreateDirectory: boolean;
    }
}
```

Extends Type: [Status](/types/status), [WhiteboardConvertPayload](/types/file-payload), [WhiteboardProjectorPayload](/types/file-payload), [FileResourceType](/types/file-resource-type)

#### totalUsage

Total usage of current users

#### files[].fileUUID

UUID of the current document

#### files[].fileName

Current file name

#### files[].fileSize

Only the following file categories exist with file sizes

* [FileResourceType.WhiteboardConvert](/types/file-resource-type#WhiteboardConvert)
* [FileResourceType.WhiteboardProjector](/types/file-resource-type#WhiteboardProjector)
* [FileResourceType.NormalResources](/types/file-resource-type#NormalResources)

For other categories, this value is `0`

#### files[].fileURL

When [FileResourceType.Directory](/types/file-resource-type#Directory), this value is a meaningless string and can be ignored

#### files[].createAt

Creation time of the document

#### files[].resourceType

For more information: [FileResourceType](/types/file-resource-type)

#### files[].meta?.whiteboardConvert

For more information: [WhiteboardConvertPayload](/types/file-payload)

#### files[].meta?.whiteboardProjector

For more information: [WhiteboardProjectorPayload](/types/file-payload)

#### canCreateDirectory

Is it possible to continue creating new directories in the current directory

### Failed

HTTP Status Code: `200`

```ts
{
    status: Status.Failed,
    code: ErrorCode
}
```

Extends Type: [Status](/types/status), [ErrorCode](/types/error-code)
