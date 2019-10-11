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

//企业会员管理 - 列表
// router.post('/api/page/ecm/member/search-ecm-member-by-conditions', ctx => {
//   let pagerData = getPager();
//   pagerData.data.list = [
//     {
//       "bigChannelCode": 12901,
//       "bigChannelName": 12901,
//       "createTime": 12901,
//       "cyCode": "ABA",
//       "cyName": "洗衣机",
//       "gmCode": 12306,
//       "gmName": "青岛",
//       "haierStatus": "正常",
//       "memberFlag": "理货商",
//       "memberId": 10000,
//       "memberName": "测试店",
//       "memberType": "海尔客户",
//       "sellerCode": 8800001234,
//       "status": [
//         1,
//         2
//       ]
//     }
//   ];
//   ctx.body = pagerData;
// });

//企业会员管理 - 新增保存
// router.post('/api/page/ecm/membercompany/insert-or-update-ecm-member', ctx => {
//   let commonData = getCommon();
//   commonData.data = true
//   ctx.body = commonData;
// });

//企业会员管理 - 理货范围
// router.post('/api/page/ecm/membercompany/list-member-retail-brand-group-and-grid', ctx => {
//   let pagerData = getPager();
//   pagerData.data.list = [
//       {
//         "brandId": 1,
//         "brandName": "海尔",
//         "industryCode": 1,
//         "industryName": '产业名称',
//         "productGroupName": "AB,AA",
//         "serviceGridCode": "CMI,CMI",
//         "serviceGridName": "1,1"
//       }
//     ]
//   ctx.body = pagerData;
// });

//企业会员管理 - 根据memberId获取会员信息 - 社会化客户
// router.get('/api/page/ecm/membercompany/get-ecm-member-by-member-id', ctx => {
//   let commonData = getCommon();
//   commonData.data = {"id":100002,"sellerCode":null,"managerCode":null,"memberName":"青岛润科家电第一分店[测试]","abbreviation":"青岛润科家电第一分店[测试]","memberType":2,"memberTypeName":null,"memberFlag":null,"memberFlagName":null,"haierStatus":null,"haierStatusName":null,"status":1,"statusName":null,"gmCode":null,"gmName":null,"bigChannelId":null,"bigChannelCode":null,"bigChannelName":null,"smallChannelCode":null,"smallChannelName":null,"contactsPeople":"刘俊杰","contactsPhone":15689990659,"provinceCode":"370000000000","cityCode":"370200000000","districtCode":"370211000000","streetCode":"370211003000","provinceCodeName":"山东","cityCodeName":"青岛市","districtCodeName":"黄岛区","streetCodeName":"薛家岛街道办事处","address":"山东青岛市黄岛区薛家岛街道办事处","fullAddress":"请维护详细地址","gridJytCode":null,"gridJytName":null,"gridCode":null,"gridName":null,"getBrandGroupList":null,"tagValueRelaList":[
// {
//   "memberTagId": 7, "memberTagName": "客户类别（智慧云店）", "memberTagValueId": 
//   161, "memberTagValueName": "V58"
// },
// {
//   "memberTagId": 7, "memberTagName": "客户类别（智慧云店）", "memberTagValueId": 
//   162, "memberTagValueName": "伞下乡镇"
// },
// {
//   "memberTagId": 8, "memberTagName": "测试标签", "memberTagValueId": 
//   175, "memberTagValueName": "测试2"
// }
// ],"getBrandTypeList":null,"remark":"我是备注","createUserId":1,"createUserName":null,"userName":"ylhtest2","userPhone":"18563929395"}
// ctx.body = commonData;
// }
// )

//企业会员管理 - 根据memberId获取会员信息 - 海尔客户  M
// router.get('/api/page/ecm/membercompany/get-ecm-member-by-member-id', ctx => {
//   let commonData = getCommon();
//   commonData.data = {
// "id":200036,
// "sellerCode":"8800018344",
// "managerCode":"1234567890",
// "memberName":"海门市日日顺电器有限公司",
// "abbreviation":"海门市日日顺电器有限公司",
// "memberType":1,
// "memberTypeName":null,
// "memberFlag":null,
// "memberFlagName":null,
// "haierStatus":null,
// "haierStatusName":null,
// "status":1,
// "statusName":null,
// "gmCode":"12305",
// "gmName":"无锡",
// "bigChannelId": 129,
// "bigChannelCode":"M",
// "bigChannelName":"专卖店",
// "smallChannelCode":"HA001",
// "smallChannelName":"海尔成套专卖类",
// "contactsPeople":"葛艳艳",
// "contactsPhone":"0513-82221999",
// "provinceCode":"320000000000",
// "cityCode":"320600000000",
// "districtCode":"320684000000",
// "streetCode":null,
// "provinceCodeName":"江苏省",
// "cityCodeName":"南通市",
// "districtCodeName":"海门市",
// "streetCodeName":null,
// "address":"江苏省南通市海门市null",
// "fullAddress":"详细地址",
// "gridJytCode":"02040500B816",
// "gridJytName":"海门、启东网格小微",
// "gridCode":"CMI46234",
// "gridName":"江苏省南通市海门市",
// "getBrandGroupList":[
//  {
//         "brandId": 1,
//         "brandName": "海尔",
//         "getProGroupList": [
//           {
//             "getProList": [
//               {
//                 "productGroupCode": "CA",
//                 "productGroupName": "家用空调1"
//               },
//               {
//                 "productGroupCode": "CA",
//                 "productGroupName": "家用空调2"
//               }
//             ],
//             "industryCode": 1,
//             "industryName": "家用空调"
//           },
// {
//             "getProList": [
//               {
//                 "productGroupCode": "CA",
//                 "productGroupName": "冰箱1"
//               },
//               {
//                 "productGroupCode": "CA",
//                 "productGroupName": "冰箱2"
//               }
//             ],
//             "industryCode": 1,
//             "industryName": "冰箱"
//           }
//         ]
//  },
// {
//         "brandId": 1,
//         "brandName": "统帅",
//         "getProGroupList": [
//           {
//             "getProList": [
//               {
//                 "productGroupCode": "CA",
//                 "productGroupName": "家用空调1"
//               },
//               {
//                 "productGroupCode": "CA",
//                 "productGroupName": "家用空调2"
//               }
//             ],
//             "industryCode": 1,
//             "industryName": "家用空调"
//           },
// {
//             "getProList": [
//               {
//                 "productGroupCode": "CA",
//                 "productGroupName": "冰箱1"
//               },
//               {
//                 "productGroupCode": "CA",
//                 "productGroupName": "冰箱2"
//               }
//             ],
//             "industryCode": 1,
//             "industryName": "冰箱"
//           }
//         ]
//  }
// ],
// "tagValueRelaList":[{"memberId":200036,"memberTagValueName":"服务商","memberTagValueId":163,"memberTagName":"客户类别（智慧云店）","memberTagId":7,"status":null}],
// "getBrandTypeList":null,
// "remark":"我是备注",
// "createUserId":1,
// "createUserName":null,
// "userName":"8800018344",
// "userPhone":"13861968500"}

//   ctx.body = commonData;
// }
// )

//企业会员管理 - 根据memberId获取会员信息 - 海尔客户  非CMJ
// router.get('/api/page/ecm/membercompany/get-ecm-member-by-member-id', ctx => {
//   let commonData = getCommon();
//   commonData.data = {
// "id":200007,
// "sellerCode":"8096789353",
// "managerCode":"1234567890",
// "memberName":"青岛安丘彩虹有限公司[测试]",
// "abbreviation":"青岛安丘彩虹有限公司[测试]",
// "memberType":1,
// "memberTypeName":null,
// "memberFlag":null,
// "memberFlagName":null,
// "haierStatus":null,
// "haierStatusName":null,
// "status":1,
// "statusName":null,
// "gmCode":"12999",
// "gmName":"测试中心",
// "bigChannelId":131,
// "bigChannelCode":"B",
// "bigChannelName":"大客户",
// "smallChannelCode":"ZY005",
// "smallChannelName":"手机专营商",
// "contactsPeople":"刘俊杰",
// "contactsPhone":"15689980659",
// "provinceCode":"370000000000",
// "cityCode":"370100000000",
// "districtCode":"370102000000",
// "streetCode":"370102001000",
// "provinceCodeName":"山东",
// "cityCodeName":"济南市",
// "districtCodeName":"历下区",
// "streetCodeName":"解放路街道办事处",
// "address":"山东济南市历下区解放路街道办事处",
// "fullAddress":"5456号",
// "gridJytCode":null,
// "gridJytName":null,
// "gridCode":null,
// "gridName":null,
// "getBrandGroupList":null,
// "tagValueRelaList":[],
// "getBrandTypeList":null,
// "remark":"我是备注",
// "createUserId":1,
// "createUserName":null,
// "userName":"ylhtest9",
// "userPhone":15689980659}

//   ctx.body = commonData;
// }
// )

//企业会员管理 - 门店tab
// router.post('/api/page/ecm/membercompany/list-site-list-info-by-conditions', ctx => {
//   let pagerData = getPager();
//   pagerData.data.list = [
//       {
//         "address": "九龙超市",
//         "customCityCode": 1,
//         "customCityName": 1,
//         "customDistrictCode": 1,
//         "customDistrictName": 1,
//         "customFullAddress": 1,
//         "customLatitude": 1,
//         "customLongitude": 1,
//         "customProvinceCode": 1,
//         "customProvinceName": 1,
//         "customStreetCode": 1,
//         "customStreetName": 1,
//         "id": 122692,
//         "isDel": 1,
//         "siteCode": 8800162519,
//         "siteName": "九龙超市",
//         "siteType": "ZJSZ",
//         "siteTypeName": "镇级三专店",
//         "source": 1,
//         "status": 10
//       }
//     ]
//   console.log(pagerData);
//   ctx.body = pagerData;
// });

//企业会员管理 - 门店tab - 获取门店详情
// router.post('/api/inner/memberCompany/memberSite/get-simple-site-info-by-conditions', ctx => {
//   let commonData = getCommon();
//   commonData.data = { 
//         "id":1,
//         "siteName":"海尔专卖店",
//         "memberId":"100000",
//         "sellerCode":"8800135789",
//         "siteCode":"8800135788",
//         "source":1,
//         "customProvinceCode":"510000000000",
//         "customCityCode":"510100000000",
//         "customDistrictCode":"510107000000",
//         "customStreetCode":"370213006000",
//         "customFullAddress":"兴仁镇兴仁镇富港路88",
//         "customProvinceName":"山东省",
//         "customCityName":"青岛市",
//         "customDistrictName":"崂山区",
//         "customStreetName":"中韩街道",
//         "customLongitude":"120.318475",
//         "customLatitude":"36.064365",
//         "siteType":"QXSZ",
//         "siteTypeName":"区县三专店",
//         "status":10,
//         "isDel":1
//     }
//   ctx.body = commonData;
// });

module.exports = router;
