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
//  const co = require('co');
// console.log(6);
// co(function* aa() {
//   console.log(7);
//   const ye=yield b();
//   const ye2=yield d();
//   console.log(ye);
// });
// function* b() {
//   return c=>{
//
//     console.log(2);
//   };
// }
// function* d() {
//   console.log('d');
// }
// const debug = require('debug')('cluster-client:server');
// const cluster = require('cluster-client');
// const net = require('net');
// const co = require('co');
// const fs = require('fs');
// co(function* () {
//   yield cl();
//   return 6;
// });
// function cl(){
//   return cb => {
//
//     const server = net.createServer();
//     debug('fuck52');
//     server.listen({
//       port:8124,
//       host: '127.0.0.1',
//       // When exclusive is true, the handle is not shared, and attempted port sharing results in an error.
//       exclusive: true,
//     },function () {
//       debug('server.listen回调');
//     });
//     debug('fuck53');
//
//
//
//     debug('fuck51');
//     server.on('listening', () => {
//
//
//       debug('listen %s success');
//       debug('%s',cb);
//       cb(null, server);
//     });
//     debug('fuck5');
//   };
// }



// const server = net.createServer((c) => {
//   // 'connection' listener
//   console.log('client connected');
//   c.on('end', () => {
//     console.log('client disconnected');
//   });
//   c.write('hello\r\n');
//   c.pipe(c);
// });
// server.on('error', (err) => {
//   throw err;
// });
// server.listen(8124, () => {
//   console.log('server bound');
// });
// debug('%s',server.listen);
// server.listen({
//   port:8124,
//   host: '127.0.0.1',
//   // When exclusive is true, the handle is not shared, and attempted port sharing results in an error.
//   exclusive: true,
// },function () {
//   debug('server.listen回调');
// });
// co(function* () {
//   console.log(88);
//   yield ly();
//   console.log(66);
// });
// console.log(77);
// function ly() {
//   let  _readyCallbacks=[];
//   return new Promise((resolve, reject) => {
//     debug('sdk-base中的ready3');
//
//     _readyCallbacks.push(err => {
//       if (err) {
//         debug('sdk-base中的ready336');
//         reject(err);
//       } else {
//         debug('sdk-base中的ready337');
//         resolve();
//       }
//     });
//     debug('sdk-base中的ready339');
//   });
// }
// server.on('listening', () => {
//   console.log('server bound2');
// });
//

var http = require('http');

http.createServer(function (request, response) {

  // 发送 HTTP 头部
  // HTTP 状态值: 200 : OK
  // 内容类型: text/plain
  console.log(66);
  response.writeHead(200, {'Content-Type': 'text/plain'});

  // 发送响应数据 "Hello World"
  response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');

