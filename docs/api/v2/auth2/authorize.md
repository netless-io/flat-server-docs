# Authorize Page

## Description

Authorize page

## Method And Path

```js
GET /v2/oauth2/authorize
```

## Request

### Query

```ts{2-5}
{
    "clientID": string;
    "redirectURI": string;
    "scopes": string; // e.g `user.uuid:read user.name:read`
    "state": string;
}
```

## Note

When the user clicks agree, they will be redirected to the `redirectURI` in a format similar to the following.

```js
${redirectURI}?code=xxx&state=yyy
```

If an error is encountered, it will redirect to the following address:

```js
${redirectURI}?error=xxx&error_description=yyy
```
