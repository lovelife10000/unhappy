'use strict';
const debug=require('debug')('router.js');
module.exports = app => {
	debug('6了');
  app.get('/', 'home.index');
  app.get('/index2', 'home.index2');
};
