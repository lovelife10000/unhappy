'use strict';
const path = require('path');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const app = new Koa();
const router = new KoaRouter();

router.get('/', function (ctx, next) {
  ctx.body = 'Hello World!';
});

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3000);

console.log(process.pid);