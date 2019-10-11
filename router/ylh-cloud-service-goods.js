/**
 * Created by liujunjie on 2019/3/5.
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

//获取投放信息
router.get('/api/page/launch/member/member-item-launch/get-item-member-launch-info', ctx => {
  let commonData = getCommon();
  commonData.data = {
"itemId":2065413,
"itemSkuId":2065412,
"itemName":"12123dde",
"itemModel":"111SCS2",
"productCode":"ZJ_111SCC3",
"brandId":1772,
"brandCode":null,
"brandName":"其他",
"productGroupCode":"99",
"productGroupName":"其他",
"gmLaunchFlag":"C",
"launchRule":2}
  ctx.body = commonData;
});

//查询服务商对应伞下客户信息
router.post('/api/page/launch/member/member-item-launch/search-item-launch-member-list', ctx => {
  let pagerData = getPager();
  pagerData.data.list = [
    {
    "itemId": 2029929,
    "masterId": 1,
    "customerId": "200238",
    "customerSellerCode": "8800203315",
    "customerName": "鞍山市立山区灵山广友家电商行",
    "customerType": 1,
    "customerTypeName": "海尔客户",
    "launchStatus": 2,
    "tagDetailName": "VIP客户",
    },
    {
    "itemId": 2029929,
    "masterId": 1,
    "customerId": "200238",
    "customerSellerCode": "8800203315",
    "customerName": "鞍山市立山区灵山广友家电商行",
    "customerType": 1,
    "customerTypeName": "海尔客户",
    "launchStatus": 1,
    "tagDetailName": "VIP客户",
    },
    {
    "itemId": 2029929,
    "masterId": 1,
    "customerId": "200238",
    "customerSellerCode": "8800203315",
    "customerName": "鞍山市立山区灵山广友家电商行",
    "customerType": 1,
    "customerTypeName": "海尔客户",
    "launchStatus": 1,
    "tagDetailName": "VIP客户",
    },
    {
    "itemId": 2029929,
    "masterId": 1,
    "customerId": "200238",
    "customerSellerCode": "8800203315",
    "customerName": "鞍山市立山区灵山广友家电商行",
    "customerType": 1,
    "customerTypeName": "海尔客户",
    "launchStatus": 1,
    "tagDetailName": "VIP客户",
    },
    {
    "itemId": 2029929,
    "masterId": 1,
    "customerId": "200238",
    "customerSellerCode": "8800203315",
    "customerName": "鞍山市立山区灵山广友家电商行",
    "customerType": 1,
    "customerTypeName": "海尔客户",
    "launchStatus": 1,
    "tagDetailName": "VIP客户",
    },
    {
    "itemId": 2029929,
    "masterId": 1,
    "customerId": "200238",
    "customerSellerCode": "8800203315",
    "customerName": "鞍山市立山区灵山广友家电商行",
    "customerType": 1,
    "customerTypeName": "海尔客户",
    "launchStatus": 1,
    "tagDetailName": "VIP客户",
    },
    {
    "itemId": 2029929,
    "masterId": 1,
    "customerId": "200238",
    "customerSellerCode": "8800203315",
    "customerName": "鞍山市立山区灵山广友家电商行",
    "customerType": 1,
    "customerTypeName": "海尔客户",
    "launchStatus": 1,
    "tagDetailName": "VIP客户",
    },
    {
    "itemId": 2029929,
    "masterId": 1,
    "customerId": "200238",
    "customerSellerCode": "8800203315",
    "customerName": "鞍山市立山区灵山广友家电商行",
    "customerType": 1,
    "customerTypeName": "海尔客户",
    "launchStatus": 1,
    "tagDetailName": "VIP客户",
    },
    {
    "itemId": 2029929,
    "masterId": 1,
    "customerId": "200238",
    "customerSellerCode": "8800203315",
    "customerName": "鞍山市立山区灵山广友家电商行",
    "customerType": 1,
    "customerTypeName": "海尔客户",
    "launchStatus": 1,
    "tagDetailName": "VIP客户",
    },
    {
    "itemId": 2029929,
    "masterId": 1,
    "customerId": "200238",
    "customerSellerCode": "8800203315",
    "customerName": "鞍山市立山区灵山广友家电商行",
    "customerType": 1,
    "customerTypeName": "海尔客户",
    "launchStatus": 1,
    "tagDetailName": "VIP客户",
    },
    {
    "itemId": 2029929,
    "masterId": 1,
    "customerId": "200238",
    "customerSellerCode": "8800203315",
    "customerName": "鞍山市立山区灵山广友家电商行",
    "customerType": 1,
    "customerTypeName": "海尔客户",
    "launchStatus": 1,
    "tagDetailName": "VIP客户",
    },
  ]
  ctx.body = pagerData;
});

//操作投放客户保存
router.post('/api/page/launch/member/member-item-launch/save-item-member-launch-customer', ctx => {
  let commonData = getCommon();
  commonData.data = true;
  ctx.body = commonData;
});

module.exports = router;
