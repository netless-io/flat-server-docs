# OAuth Info

:key: Need JWT Authorization

## Description

oauth detail

> Only oauth owner can request.

## Method And Path

```js
POST /v2/developer/oauth/setting/detail
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
    "oauthUUID": string;
}
```

#### oauthUUID

OAuth Application UUID

* format: [uuid-v4](/misc/ajv-formats/uuid-v4)

## Response

### Success

HTTP Status Code: `200`

```ts
{
    status: Status.Success;
    data: {
        appName: string;
        appDesc: string;
        scopes: DeveloperOAuthScope[];
        homepageURL: string;
        callbacksURL: string[];
        logoURL: string;
        clientID: string;
        userCount: number;
        secrets: Array<{
            secretUUID: string;
            clientSecret: string;
            createdAt: number;
        }>;
    }
}
```

Extends Type: [Status](/types/status), [DeveloperOAuthScope](/types/developer-oauth-scope)

#### appName

Application name

#### appDesc

Application description

#### homepageURL

Application homepage url

#### callbacksURL

Application callback url

#### scopes

Application permission scopes. Ref: [`DeveloperOAuthScope`](/types/developer-oauth-scope)

#### logoURL

Application logo url

#### clientID

OAuth clientID

#### userCount

Registered user count

#### secrets[].secretUUID

secrect UUID

#### secrets[].clientSecret

secret string. e.g. `******1234abcd`

#### secrets[].createdAt

secret created time

### Failed

HTTP Status Code: `200`

```ts
{
    status: Status.Failed,
    code: ErrorCode
}
```

Extends Type: [Status](/types/status), [ErrorCode](/types/error-code)
