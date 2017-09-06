
 'use strict';
const path = require('path');
const Koa = require('koa');
const KoaRouter = require('koa-router');
const app =new Koa();
 const router = new KoaRouter();
 const unhappyCore = require('unhappy-core');
 // router.get('/', function (ctx, next) {
 //   ctx.body = 'Hello World!';
 // });
require('./app/router')(router);
 app
   .use(router.routes())
   .use(router.allowedMethods());



app.listen(3000);

