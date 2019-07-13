'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/getlist', controller.home.getList);
  router.get('/gettodaytea', controller.home.getTodayTea);
  router.post('/updatelist', controller.home.updateList);
  router.get('/news', controller.news.list);
};
