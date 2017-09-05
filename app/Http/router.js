'use strict';

module.exports = app => {
  app.get('index','/', 'indexController.index');
  app.get('/users', function (ctx, next) {
    ctx.body = 'Hello users!';
  });

};




