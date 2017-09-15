#!/usr/bin/env node
// 'use strict';
// const path = require('path');
// const Koa = require('koa');
// const KoaRouter = require('koa-router');
// const app = new Koa();
// const router = new KoaRouter();
//
// router.get('/', function (ctx, next) {
//   ctx.body = 'Hello World!';
// });
//
// app
//   .use(router.routes())
//   .use(router.allowedMethods());
//
//
// app.listen(3000);
//
// console.log(process.pid);
 const co = require('co');
console.log(6);
co(function* aa() {
  console.log(7);
  const ye=yield b();
  const ye2=yield d();
  console.log(ye);
});
function* b() {
  return c=>{

    console.log(2);
  };
}
function* d() {
  console.log('d');
}