'use strict';

module.exports = app => {
  class HomeController extends app.Controller {
    * index() {
      this.ctx.body = 'hi, egg3';
    }

    * index2() {
      this.ctx.body = 'hi, egg5';
    }
  }
  return HomeController;
};
