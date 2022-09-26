# OAuth Application Detail

:key: Need JWT Authorization

## Description

Display oauth application detail.

> Only granted oauth application user can request.

## Method And Path

```js
POST /v2/application/detail
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
    "oauthUUID": string;
}
```

#### oauthUUID

OAuth application UUID

## Response

### Success

HTTP Status Code: `200`

```ts
{
    status: Status.Success;
    data: Array<{
        ownerName: string;
        appName: string;
        appDesc: string;
        homepageURL: string;
        logoURL: string;
        scopes: DeveloperOAuthScope[]
    }>;
}
```

Extends Type: [Status](/types/status), [DeveloperOAuthScope](/types/developer-oauth-scope)

#### ownerName

OAuth application owner name

#### appName

OAuth application name

#### appDesc

OAuth application description.

#### homepageURL

OAuth application homepage url

#### logoURL

OAuth application logo url

#### scopes

Application permission scopes. Ref: [`DeveloperOAuthScope`](/types/developer-oauth-scope)

### Failed

HTTP Status Code: `200`

```ts
{
    status: Status.Failed,
    code: ErrorCode,
}
```

Extends Type: [Status](/types/status), [ErrorCode](/types/error-code)
