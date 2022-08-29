# Type FilePayload

## Description

The payload format is different for different file types.

## Definition

```ts
interface RegionPayload {
    region: Region;
}

interface ConvertPayload {
    convertStep: FileConvertStep;
}

// e.g: ppt / pdf
interface WhiteboardConvertPayload extends RegionPayload, ConvertPayload {
    taskUUID?: string;
    taskToken?: string;
}

// e.g: pptx
interface WhiteboardProjectorPayload extends RegionPayload, ConvertPayload {
    taskUUID?: string;
    taskToken?: string;
}

// e.g: mp4 / mp3 / png
interface NormalResourcesPayload {}

interface DirectoryPayload {}

type FilePayload =
    | WhiteboardConvertPayload
    | WhiteboardProjectorPayload
    | NormalResourcesPayload
    | DirectoryPayload;
```

Extends Type: [FileConvertStep](/types/file-convert-step)
