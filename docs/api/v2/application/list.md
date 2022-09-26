# List Applications

:key: Need JWT Authorization

## Description

List previously granted oauth applications

## Method And Path

```js
POST /v2/application/list
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
        ownerName: string;
        oauthUUID: string;
        appName: string;
        homepageURL: string;
        logoURL: string;
    }>;
}
```

Extends Type: [Status](/types/status)

#### ownerName

OAuth application owner name

#### oauthUUID

OAuth application UUID

#### appName

OAuth application name

#### homepageURL

OAuth application homepage url

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
