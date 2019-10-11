/**
 * Created by joojay on 2019/3/5.
 */

const router = require('koa-router')();
const { getPager, getCommon} = require('../model/base'); //分页请求&普通请求的基础返回格式

//get请求 - 普通数据
router.get('/test/get-common-data', ctx => {
  let commonData = getCommon();
  commonData.data = {
    'test': '测试 - get请求 - 普通数据'
  }
  ctx.body = commonData;
});

//get请求 - 分页数据
router.get('/test/get-pager-data', ctx => {
  let pagerData = getPager();
  pagerData.data.list = [
    {
      id: 1,
      test: '测试 - get请求 - 分页数据 - 1'
    },
    {
      id: 2,
      test: '测试 - get请求 - 分页数据 - 2'
    }
  ]
  console.log(pagerData);
  ctx.body = pagerData;
});

//post请求 - 普通数据
router.post('/test/post-common-data', ctx => {
  let commonData = getCommon();
  commonData.data = {
    'test': '测试 - post请求 - 普通数据'
  }
  ctx.body = commonData;
});

//post请求 - 分页数据
router.post('/test/post-pager-data', ctx => {
  let pagerData = getPager();
  pagerData.data.list = [
    {
      id: 1,
      test: '测试 - post请求 - 分页数据 - 1'
    },
    {
      id: 2,
      test: '测试 - post请求 - 分页数据 - 2'
    }
  ]
  ctx.body = pagerData;
});

//获取订单库存流程设置
router.get('/api/page/order/flow/settings/get-order-flow-settings', ctx => {
  let commonData = getCommon();
  commonData.data = {
    "id": 7,
    "memberId": 200011,
    "shopId": 211,
    "ifOutwareConfirm": 1,
    "ifAutoReceive": 1,
    "autoReceiveDay": null,
    "ifDeliverConfirm": 1,
    "ifBackMoneyConfirm": null,
    "createUserId": 1103656688,
    "createTime": null,
    "updateUserId": 1103656688,
    "updateTime": 1567149691000,
    "platformId": null,
    "ifInwareConfirm": null,
    "ifSpecialAmount": 2,
    "payPersent": null,
    "ifOpenOrderPoint": 1,
    "acditingPayPersent": 10,
    "deliveryPayPersent": 50,
    "ifOpenPreorderPoint": 1,
    "acditingPrePayPersent": 10,
    "deliveryPrePayPersent": 50,
    "ifCod": 3,
    "ifCredit": 1,
    "creditAmount": 1000,
    "ifRebateControl": 1,
    "availableRebatePercent": 100,
    "availableRebateAmount": 9999,
    "ifSinglePayment": 0,
    "autoReleaseDay": 0,
    "ifOfflinePaymentOrder": 1,
    "ifOfflinePaymentDeposit": 1,
    "ifOrderOvertimeCancel": 1,
    "orderOvertimeHour": 1,
    "ifApproval": 1,
    "ifSign": null,
    "ifAutoSign": null,
    "autoSignDay": 7,
    "ifPurchaseOrderDelivery": null,
    "ifRetailOrderDelivery": null,
    "buyType": null
  }
  ctx.body = commonData;
});

module.exports = router;
