'use strict';

module.exports = app => {
  class indexController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, index';
    }
  }
  return indexController;
};
