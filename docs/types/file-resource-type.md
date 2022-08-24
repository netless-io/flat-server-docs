# Type FileResourceType

## Description

Type of document

## Definition

```ts
enum FileResourceType {
    WhiteboardConvert = "WhiteboardConvert",
    WhiteboardProjector = "WhiteboardProjector",
    NormalResources = "NormalResources",
    Directory = "Directory",
}
```

### WhiteboardConvert

The old whiteboard convert service.

:::info
For convert of static documents, e.g. `pdf`
:::

### WhiteboardProjector

New whiteboard convert service

:::info
Currently only dynamic file convert is supported, e.g. `pptx`
:::

### NormalResources

Common files such as: `mp3`, `mp4`, `jpg`, etc.

### Directory

means the current file is a directory
