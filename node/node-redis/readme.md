
Node.JS project that allows to communicate with Redis

How the `node-redis` was set up
```shell
npm init
npm i --save-dev babel-cli babel-preset-env babel-preset-stage-0
npm i --save ioredis nodemon
```

How to run Redis in Docker
```shell
docker run -d --name some-redis -p 6379:6379 redis
```

How to connect to Redis running in Docker via CLI
```shell
docker exec -it some-redis bash
redis-cli
```

How to run the project
```shell
npm run start
```