'use strict';

module.exports = app => {
  app.get('/', 'indexController.index');
  app.get('/users', function (ctx, next) {
    ctx.body = 'Hello users!';
  });

};




