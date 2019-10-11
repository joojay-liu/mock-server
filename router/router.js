/**
 * Created by liujunjie on 2019/3/5.
 */

const router = require('koa-router')();
const config = require('../config');

// 路由: ylh-cloud-service-xxxx
const ylhCloudServiceGoodsRouter = require('./ylh-cloud-service-goods');
const ylhCloudServiceStockRouter = require('./ylh-cloud-service-stock');
const ylhCloudServiceUserRouter = require('./ylh-cloud-service-user');
const ylhCloudServiceOrderRouter = require('./ylh-cloud-service-order');
const ylhCloudServicePriceRouter = require('./ylh-cloud-service-price');
const ylhCloudServiceNoticeRouter = require('./ylh-cloud-service-notice');
const ylhCloudServicePolicyRouter = require('./ylh-cloud-service-policy');
const ylhCloudServiceBaseRouter = require('./ylh-cloud-service-base');

//路由: ylh-v2-service-xxx
const ylhV2ServicePortalRouter = require('./ylh-v2-service-portal');
const ylhV2ServiceFundsRouter = require('./ylh-v2-service-funds');
const ylhV2ServiceGoodsRouter = require('./ylh-v2-service-goods');
const ylhV2ServiceOrderRouter = require('./ylh-v2-service-order');
const ylhV2ServiceUserRouter = require('./ylh-v2-service-user');

// 获取ylh-cloud-service-xxx服务前缀
const ylhCloudServicePrefix = config.backEndServer.ylhCloudService.servicePrefix;
const ylhV2Service = config.backEndServer.ylhV2Service;

if(config.mock) {
  // ylh-cloud-service-stock服务
  router.use(ylhCloudServicePrefix.ylhCloudServiceStock, ylhCloudServiceStockRouter.routes(), ylhCloudServiceStockRouter.allowedMethods());
  // ylh-cloud-service-goods服务
  router.use(ylhCloudServicePrefix.ylhCloudServiceGoods, ylhCloudServiceGoodsRouter.routes(), ylhCloudServiceGoodsRouter.allowedMethods());
  // ylh-cloud-service-user服务
  router.use(ylhCloudServicePrefix.ylhCloudServiceUser, ylhCloudServiceUserRouter.routes(), ylhCloudServiceUserRouter.allowedMethods());
  // ylh-cloud-service-order服务
  router.use(ylhCloudServicePrefix.ylhCloudServiceOrder, ylhCloudServiceOrderRouter.routes(), ylhCloudServiceOrderRouter.allowedMethods());
  // ylh-cloud-service-price服务
  router.use(ylhCloudServicePrefix.ylhCloudServicePrice, ylhCloudServicePriceRouter.routes(), ylhCloudServicePriceRouter.allowedMethods());
  // ylh-cloud-service-notice服务
  router.use(ylhCloudServicePrefix.ylhCloudServiceNotice, ylhCloudServiceNoticeRouter.routes(), ylhCloudServiceNoticeRouter.allowedMethods());
  // ylh-cloud-service-policy服务
  router.use(ylhCloudServicePrefix.ylhCloudServicePolicy, ylhCloudServicePolicyRouter.routes(), ylhCloudServicePolicyRouter.allowedMethods());
  // ylh-cloud-service-base服务
  router.use(ylhCloudServicePrefix.ylhCloudServiceBase, ylhCloudServiceBaseRouter.routes(), ylhCloudServiceBaseRouter.allowedMethods());

  //ylh-v2-service-portal服务
  router.use(ylhV2Service.portal.prefix, ylhV2ServicePortalRouter.routes(), ylhV2ServicePortalRouter.allowedMethods());
  //ylh-v2-service-funds服务
  router.use(ylhV2Service.funds.prefix, ylhV2ServiceFundsRouter.routes(), ylhV2ServiceFundsRouter.allowedMethods());
  //ylh-v2-service-goods服务
  router.use(ylhV2Service.goods.prefix, ylhV2ServiceGoodsRouter.routes(), ylhV2ServiceGoodsRouter.allowedMethods());
  //ylh-v2-service-order服务
  router.use(ylhV2Service.order.prefix, ylhV2ServiceOrderRouter.routes(), ylhV2ServiceOrderRouter.allowedMethods());
  //ylh-v2-service-user服务
  router.use(ylhV2Service.user.prefix, ylhV2ServiceUserRouter.routes(), ylhV2ServiceUserRouter.allowedMethods());
}

module.exports = router;


