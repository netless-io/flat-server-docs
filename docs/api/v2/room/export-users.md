# Export Users

:key: Need JWT Authorization

## Description

Export user information in the room

## Method And Path

```js
POST /v2/room/export-users
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
    "roomUUID": string;
}
```

#### roomUUID

room UUID

* format: [uuid-v4](/misc/ajv-formats/uuid-v4)

## Response

### Success

HTTP Status Code: `200`

```ts
{
    status: Status.Success,
    data: {
        roomStartDate: number,
        roomEndDate: number,
        ownerName: string,
        roomTitle: string,
        users: RoomExportUserItem[],
    },
}
```

Extends Type: [Status](/types/status), [RoomExportUserItem](/types/room-export-user-item)


#### roomStartDate

The start time of the room

#### roomEndDate

The end time of the room

#### ownerName

The name of the room owner

#### roomTitle

The title of the room

#### users

The user information joined the room. Ref: [`RoomExportUserItem`]](/types/room-export-user-item)

### Failed

HTTP Status Code: `200`

```ts
{
    status: Status.Failed,
    code: ErrorCode
}
```

Extends Type: [Status](/types/status), [ErrorCode](/types/error-code)