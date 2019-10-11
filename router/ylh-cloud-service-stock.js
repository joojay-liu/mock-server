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

//查询条码
// router.post('/api/composite/barcode/list-barcode-page', ctx => {
//   let pagerData = getPager();
//   pagerData.data.list = [
//     {
//       "itemModel":'itemModel1',
//       "inBarcodeCount":2,
//       "productCode":"DH1TN0M04",
//       "barcodes": [
//         '123456',
//         '654321',
//         '321654',
//         '543216',
//       ]
//     },
//     // {
//     //   "itemModel":'itemModel1',
//     //   "inBarcodeCount":2,
//     //   "productCode":"B00U60084",
//     //   "barcodes": [
//     //     '123456',
//     //     '654321',
//     //     '321654',
//     //     '543216',
//     //   ]
//     // },
//     // {
//     //   "itemModel": 'itemModel2',
//     //   "inBarcodeCount":2,
//     //   "productCode":"AAABTQ06W1",
//     //   "barcodes": [
//     //       '1234567891',
//     //       '4321987652',
//     //       '654321987',
//     //       '219876543',
//     //   ]
//     // }
//   ];
//   ctx.body = pagerData;
// });

//查库存数量
// router.post('/api/composite/stock/isrp/get-can-ex-warehouse-by-wholesale', ctx => {
//   let commonData = getCommon();
//   commonData.data = {
//     canExWarehouseByWholesaleDetail: [
//       {
//         itemSkuId: 1111,
//         canExWarehouseByWholesaleQty: 10
//       }
//     ]
//   }
//   ctx.body = commonData;
// });

//发货/出库记录
// router.get('/api/page/stock/outbound-management/get-delivery-outbound-record', ctx => {
//   let commonData = getCommon();
//   commonData.data = [
//     {
//       "deliveryRecordCode": "aaaaSO.F0",
//       "deliveryRecordId": 33,
//       "memberId": 100000,
//       "deliveryRecordDate": 1567152719000,
//       "deliveryProductList": [
//         {
//           "itemSkuId": 2000002,
//           "itemModel": "K50H7000P",
//           "productCode": "DH1TN0M04",
//           "itemUnit": "",
//           "itemPrice": "10000.00",
//           "outWarehouseId": "2",
//           "stockTypeId": "1",
//           "stockTypeName": "正品",
//           "shippingQty": 2,
//           "outboundQty": null
//         },
//         {
//           "itemSkuId": 2000002,
//           "itemModel": "K50H7000P",
//           "productCode": "DH1TN0M04",
//           "itemUnit": "",
//           "itemPrice": "10000.00",
//           "outWarehouseId": "2",
//           "stockTypeId": "1",
//           "stockTypeName": "正品",
//           "shippingQty": 2,
//           "outboundQty": null
//         }
//       ],
//       "outboundRecordList": [
//         {
//           "outboundRecordCode":"aaaaSO.F1.C0",
//           "outboundStatus":"5",
//           "outboundRecordDate":1567500884000,
//           outWarehouseId: 2,
//           outWarehouseName: "青岛正品仓2",
//           "productDetail":[
//             {
//               "itemSkuId":null,
//               "itemModel":"K50H7000P",
//               "productCode":"DH1TN0M04",
//               "itemUnit":"",
//               "itemPrice":null,
//               "outWarehouseId":null,
//               "stockTypeId":null,
//               "stockTypeName":"正品",
//               "shippingQty":2,
//               "outboundQty":1
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "deliveryRecordCode": "aaaaSO.F0",
//       "deliveryRecordId": 33,
//       "memberId": 100000,
//       "deliveryRecordDate": 1567152719000,
//       "deliveryProductList": [
//         {
//           "itemSkuId": 2000002,
//           "itemModel": "K50H7000P",
//           "productCode": "DH1TN0M04",
//           "itemUnit": "",
//           "itemPrice": "10000.00",
//           "outWarehouseId": "2",
//           "stockTypeId": "1",
//           "stockTypeName": "正品",
//           "shippingQty": 200,
//           "outboundQty": null
//         },
//         {
//           "itemSkuId": 2000002,
//           "itemModel": "K50H7000P",
//           "productCode": "DH1TN0M04",
//           "itemUnit": "",
//           "itemPrice": "10000.00",
//           "outWarehouseId": "2",
//           "stockTypeId": "1",
//           "stockTypeName": "正品",
//           "shippingQty": 200,
//           "outboundQty": null
//         }
//       ],
//       "outboundRecordList": [
//         {
//           "outboundRecordCode":"aaaaSO.F1.C0",
//           "outboundStatus":"3",
//           "outboundRecordDate":1567500884000,
//           outWarehouseId: 2,
//           outWarehouseName: "青岛正品仓2",
//           "productDetail":[
//             {
//               "itemSkuId":null,
//               "itemModel":"K50H7000P",
//               "productCode":"DH1TN0M04",
//               "itemUnit":"",
//               "itemPrice":null,
//               "outWarehouseId":null,
//               "stockTypeId":null,
//               "stockTypeName":"正品",
//               "shippingQty":2,
//               "outboundQty":1
//             }
//           ]
//         }
//       ]
//     },
//     {
//       "deliveryRecordCode": "aaaaSO.F0",
//       "deliveryRecordId": 33,
//       "memberId": 100000,
//       "deliveryRecordDate": 1567152719000,
//       "deliveryProductList": [
//         {
//           "itemSkuId": 2000002,
//           "itemModel": "K50H7000P",
//           "productCode": "DH1TN0M04",
//           "itemUnit": "",
//           "itemPrice": "10000.00",
//           "outWarehouseId": "2",
//           "stockTypeId": "1",
//           "stockTypeName": "正品",
//           "shippingQty": 200,
//           "outboundQty": null
//         },
//         {
//           "itemSkuId": 2000002,
//           "itemModel": "K50H7000P",
//           "productCode": "DH1TN0M04",
//           "itemUnit": "",
//           "itemPrice": "10000.00",
//           "outWarehouseId": "2",
//           "stockTypeId": "1",
//           "stockTypeName": "正品",
//           "shippingQty": 200,
//           "outboundQty": null
//         }
//       ],
//       "outboundRecordList": [
//         {
//           "outboundRecordCode":"aaaaSO.F1.C0",
//           "outboundStatus":"4",
//           "outboundRecordDate":1567500884000,
//           "productDetail":[
//             {
//               "itemSkuId":null,
//               "itemModel":"K50H7000P",
//               "productCode":"DH1TN0M04",
//               "itemUnit":"",
//               "itemPrice":null,
//               "outWarehouseId":null,
//               "stockTypeId":null,
//               "stockTypeName":"正品",
//               "shippingQty":2,
//               "outboundQty":1
//             }
//           ]
//         },
//         {
//           "outboundRecordCode":"aaaaSO.F1.C0",
//           "outboundStatus":"3",
//           "outboundRecordDate":1567500884000,
//           "productDetail":[
//             {
//               "itemSkuId":null,
//               "itemModel":"K50H7000P",
//               "productCode":"DH1TN0M04",
//               "itemUnit":"",
//               "itemPrice":null,
//               "outWarehouseId":null,
//               "stockTypeId":null,
//               "stockTypeName":"正品",
//               "shippingQty":3,
//               "outboundQty":1
//             },
//             {
//               "itemSkuId":null,
//               "itemModel":"K50H7000P",
//               "productCode":"DH1TN0M04",
//               "itemUnit":"",
//               "itemPrice":null,
//               "outWarehouseId":null,
//               "stockTypeId":null,
//               "stockTypeName":"正品",
//               "shippingQty":3,
//               "outboundQty":1
//             }
//           ]
//         }
//       ]
//     }
//   ]
//   ctx.body = commonData;
// });

module.exports = router;
