# Create OAuth Application

:key: Need JWT Authorization

## Description

Create oauth application

## Method And Path

```js
POST /v2/developer/oauth/create
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

```ts{2-6}
{
    "appName": string;
    "appDesc": string;
    "homepageURL": string;
    "callbacksURL": string[];
    "scopes": DeveloperOAuthScope[];
}
```

Extends Type: [DeveloperOAuthScope](/types/developer-oauth-scope)

#### appName

Application Name

* minLength: `1`
* maxLength: `20`

#### appDesc

Application Description

* minLength: `1`
* maxLength: `300`

#### homepageURL

Application Homepage URL

* minLength: `1`
* maxLength: `100`
* format: [https](/misc/ajv-formats/https)

#### callbacksURL

Application Callback URL

* minItems: `1`
* maxItems: `5`
* format: [https](/misc/ajv-formats/https)

#### scopes

Application Permission Scopes

* minItems: `1`
* maxItems: [`DeveloperOAuthScope` size](/types/developer-oauth-scope)
* enum: [`DeveloperOAuthScope`](/types/developer-oauth-scope)

## Response

### Success

HTTP Status Code: `200`

```ts
{
    status: Status.Success,
    data: {
        oauthUUID: string;
    }
}
```

Extends Type: [Status](/types/status)

### Failed

HTTP Status Code: `200`

```ts
{
    status: Status.Failed,
    code: ErrorCode
}
```

Extends Type: [Status](/types/status), [ErrorCode](/types/error-code)
