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


//查询价格列表
// router.post('/api/page/price/member-maintenance/search-price-list', ctx => {
//   let pagerData = getPager();
//   pagerData.data.list =  [
//     {
//       "itemId": 2006813,
//       "skuId": 2006813,
//       "productCode": "DH1WF1A06",
//       "itemModel": "LS55AL88K51A3",
//       "brandId": 516,
//       "brandName": "海尔",
//       "productGroupCode": "EA",
//       "productGroupName": "平板电视",
//       "itemName": "海尔平板电视LS55AL88K51A3",
//       "itemStatus": 3,
//       "itemStatusYlh":10, // 易理货上下架状态
//       "resultPrice":299.00, // 分销统一标准价
//       "priceExplain":"客户为控制服务商......", // 定价说明
//       "resultType":1,// 定价标签 1,统一 2,建议 3,其他
//       "adjustment": "Y", // 是否允许调整;Y-允许;N-不允许
//       "priceBegin":1000, // 价格浮动-起始价
//       "priceEnd":2000, // 价格浮动-结束价
//       "tradePrice": 4000, // 分销价
//       "priceStatus":1, // 价格状态 1,未生效 2,待确认 3,已生效 4,未定价
//       "groupList": [
//         {
//           "groupId": 1,
//           "groupName": "普通客户",
//           "moq": 1,
//           "tradePrice": 111
//         },
//         {
//           "groupId": 93,
//           "groupName": "银牌客户",
//           "moq": 2,
//           "tradePrice": 222
//         }
//       ],
//       "customerList": [
//         {
//           "customerId": 100006,
//           "customerName": "青岛市新世纪家电有限公司[测试]",
//           "moq": 1,
//           "tradePrice": 333
//         },
//         {
//           "customerId": 100004,
//           "customerName": "青岛昕正数码家电经营部[测试]",
//           "moq": 2,
//           "tradePrice": 444
//         }
//       ],
//       // 按照原逻辑 前端调用试点配置  出参有值显示  否则不显示
//       "launchSum": 0, // 统一定价个数
//       "confirmCount": 0, //确认个数
//       "notConfirmCount": 0 //未确认个数
//     },
//     {
//       "itemId": 2006813,
//       "skuId": 2006813,
//       "productCode": "DH1WF1A06",
//       "itemModel": "LS55AL88K51A3",
//       "brandId": 516,
//       "brandName": "海尔",
//       "productGroupCode": "EA",
//       "productGroupName": "平板电视",
//       "itemName": "海尔平板电视LS55AL88K51A3",
//       "itemStatus": 3,
//       "itemStatusYlh":20, // 易理货上下架状态
//       "resultPrice":299.00, // 分销统一标准价
//       "priceExplain":"客户为控制服务商......", // 定价说明
//       "resultType":2,// 定价标签 1,统一 2,建议 3,其他
//       "adjustment": "Y", // 是否允许调整;Y-允许;N-不允许
//       "priceBegin":1000, // 价格浮动-起始价
//       "priceEnd":2000, // 价格浮动-结束价
//       "tradePrice": 4000, // 分销价
//       "priceStatus":3, // 价格状态 1,未生效 2,待确认 3,已生效 4,未定价
//       "groupList": [
//         {
//           "groupId": 1,
//           "groupName": "普通客户",
//           "moq": 1,
//           "tradePrice": 111
//         },
//         {
//           "groupId": 93,
//           "groupName": "银牌客户",
//           "moq": 2,
//           "tradePrice": 222
//         }
//       ],
//       "customerList": [
//         {
//           "customerId": 100006,
//           "customerName": "青岛市新世纪家电有限公司[测试]",
//           "moq": 1,
//           "tradePrice": 333
//         },
//         {
//           "customerId": 100004,
//           "customerName": "青岛昕正数码家电经营部[测试]",
//           "moq": 2,
//           "tradePrice": 444
//         }
//       ],
//       // 按照原逻辑 前端调用试点配置  出参有值显示  否则不显示
//       "launchSum": 0, // 统一定价个数
//       "confirmCount": 0, //确认个数
//       "notConfirmCount": 0 //未确认个数
//     },
//     {
//       "itemId": 2006813,
//       "skuId": 2006813,
//       "productCode": "DH1WF1A06",
//       "itemModel": "LS55AL88K51A3",
//       "brandId": 516,
//       "brandName": "海尔",
//       "productGroupCode": "EA",
//       "productGroupName": "平板电视",
//       "itemName": "海尔平板电视LS55AL88K51A3",
//       "itemStatus": 3,
//       "itemStatusYlh":10, // 易理货上下架状态
//       "resultPrice": null, // 分销统一标准价
//       "priceExplain":"客户为控制服务商......", // 定价说明
//       "resultType":3,// 定价标签 1,统一 2,建议 3,其他
//       "adjustment": "Y", // 是否允许调整;Y-允许;N-不允许
//       "priceBegin":1000, // 价格浮动-起始价
//       "priceEnd":2000, // 价格浮动-结束价
//       "tradePrice": 4000, // 分销价
//       "priceStatus":4, // 价格状态 1,未生效 2,待确认 3,已生效 4,未定价
//       "groupList": [
//         {
//           "groupId": 1,
//           "groupName": "普通客户",
//           "moq": 1,
//           "tradePrice": 111
//         },
//         {
//           "groupId": 93,
//           "groupName": "银牌客户",
//           "moq": 2,
//           "tradePrice": 222
//         }
//       ],
//       "customerList": [
//         {
//           "customerId": 100006,
//           "customerName": "青岛市新世纪家电有限公司[测试]",
//           "moq": 1,
//           "tradePrice": 333
//         },
//         {
//           "customerId": 100004,
//           "customerName": "青岛昕正数码家电经营部[测试]",
//           "moq": 2,
//           "tradePrice": 444
//         }
//       ],
//       // 按照原逻辑 前端调用试点配置  出参有值显示  否则不显示
//       "launchSum": 0, // 统一定价个数
//       "confirmCount": 0, //确认个数
//       "notConfirmCount": 0 //未确认个数
//     },
//     {
//       "itemId": 2006813,
//       "skuId": 2006813,
//       "productCode": "DH1WF1A06",
//       "itemModel": "LS55AL88K51A3",
//       "brandId": 516,
//       "brandName": "海尔",
//       "productGroupCode": "EA",
//       "productGroupName": "平板电视",
//       "itemName": "海尔平板电视LS55AL88K51A3",
//       "itemStatus": 3,
//       "itemStatusYlh":10, // 易理货上下架状态
//       "resultPrice": 111, // 分销统一标准价
//       "priceExplain":"客户为控制服务商......", // 定价说明
//       "resultType":1,// 定价标签 1,统一 2,建议 3,其他
//       "adjustment": "Y", // 是否允许调整;Y-允许;N-不允许
//       "priceBegin":1000, // 价格浮动-起始价
//       "priceEnd":2000, // 价格浮动-结束价
//       "tradePrice": 4000, // 分销价
//       "priceStatus":2, // 价格状态 1,未生效 2,待确认 3,已生效 4,未定价
//       "groupList": [
//         {
//           "groupId": 1,
//           "groupName": "普通客户",
//           "moq": 1,
//           "tradePrice": 111
//         },
//         {
//           "groupId": 93,
//           "groupName": "银牌客户",
//           "moq": 2,
//           "tradePrice": 222
//         }
//       ],
//       "customerList": [
//         {
//           "customerId": 100006,
//           "customerName": "青岛市新世纪家电有限公司[测试]",
//           "moq": 1,
//           "tradePrice": 333
//         },
//         {
//           "customerId": 100004,
//           "customerName": "青岛昕正数码家电经营部[测试]",
//           "moq": 2,
//           "tradePrice": 444
//         }
//       ],
//       // 按照原逻辑 前端调用试点配置  出参有值显示  否则不显示
//       "launchSum": 0, // 统一定价个数
//       "confirmCount": 0, //确认个数
//       "notConfirmCount": 0 //未确认个数
//     }
//   ];
//   // pagerData.data.list = [];
//   ctx.body = pagerData;
// });
//
// router.get('/api/inner/price/launch/get-price-launch-result', ctx => {
//   let commonData = getCommon();
//   commonData.data =  {
//     adjustment: "N",
//     brandName: null,
//     itemModel: "BCD-471WDCD",
//     itemSkuId: null,
//     memberId: 214561,
//     memberName: null,
//     memberSellerCode: null,
//     price: 222,
//     priceBegin: 111,
//     priceEnd: 333,
//     productCode: "B70U01084",
//     productGroupName: null,
//     status: "Y",
//     resultFlag: 3,
//     "priceExplain":"统一价定价说明",
//     productCenterFlag: 'Y',
//     // productCenterFlag: 'Y'
//   }
//   //统一 不允许调整
//   commonData.data.resultFlag = 1;
//   commonData.data.adjustment = 'N';
//   commonData.data.priceExplain = "分销标准价：￥222，不允许调整";
//
//   //统一 区间内调整
//   commonData.data.resultFlag = 1;
//   commonData.data.adjustment = 'Y';
//   commonData.data.priceExplain = "分销标准价：￥222，可调整价格范围：￥111—333";
//
//   // //建议 区间内调整
//   // commonData.data.resultFlag = 2;
//   // commonData.data.adjustment = 'Y';
//   // commonData.data.priceExplain = "分销标准价：￥222，建议价格范围：￥111—333，可参考分销价统一标准自行定价";
//
//   //建议 不允许调整
//   // commonData.data.resultFlag = 2;
//   // commonData.data.adjustment = 'N';
//   // commonData.data.priceExplain = "分销标准价：￥222，建议价格范围：￥111—333，可参考分销价统一标准自行定价";
//
//   //其他
//   // commonData.data.resultFlag = 3;
//   // commonData.data.priceExplain = "中心暂无定价，请根据自身经营状况自行定价";
//   ctx.body = commonData;
// })

module.exports = router;
