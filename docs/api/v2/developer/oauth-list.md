# List Created OAuth Application

:key: Need JWT Authorization

## Description

List previously created oauth application

## Method And Path

```js
POST /v2/developer/oauth/list
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
    "page": number;
    "size": number;
}
```

#### page

* minimum: `1`
* maximum: `50`

#### size

Number of displays per page

* default: `50`
* minimum: `1`
* maximum: `50`

## Response

### Success

HTTP Status Code: `200`

```ts
{
    status: Status.Success;
    data: Array<{
        oauthUUID: string;
        appName: string;
        logoURL: string;
    }>;
}
```

Extends Type: [Status](/types/status)

#### oauthUUID

OAuth application UUID

#### appName

OAuth application name

#### logoURL

OAuth application logo url

### Failed

HTTP Status Code: `200`

```ts
{
    status: Status.Failed,
    code: ErrorCode,
}
```

Extends Type: [Status](/types/status), [ErrorCode](/types/error-code)
