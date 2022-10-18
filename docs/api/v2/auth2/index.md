# Auth2

## Example code

### Client

```ts
location.href = `http://flat-api.whiteboard.agora.io/v2/oauth2/authorize?clientID=${clientID}&scopes=${scopes}&state=${state}&redirectURI=${callbackURL}`
```

### Server

```ts
const axios = require('axios');
const fastify = require('fastify')({ logger: {
    transport: {
        target: 'pino-pretty',
        level: "warn",
        options: {
          level: "warn",
          translateTime: 'HH:MM:ss Z',
          ignore: 'pid,hostname,reqId,responseTime',
        },
      },
} })

fastify.get('/', async (request, reply) => {
    const { code } = request.query;
    const tokenInfo = await axios.post("http://flat-api.whiteboard.agora.io/v2/oauth2/access-token", {
        grantType: "authorization_code",
        code,
        clientID: "Your Client ID",
        clientSecret: "Your Client Secret",
    });
    const access_token = tokenInfo.data.access_token;

    const userInfo = await axios.post("http://flat-api.whiteboard.agora.io/v2/oauth2/api/user-profile", {}, {
        headers: {
            authorization: access_token,
        }
    });

    return userInfo.data;
});

const start = async () => {
  try {
    fastify.listen({ port: 8083 })
  } catch (err) {
    fastify.log.error(err)
    process.exit(1)
  }
}
start()
```
