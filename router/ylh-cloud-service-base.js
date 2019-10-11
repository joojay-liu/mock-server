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

//获取投放标识
// router.post('/api/inner/sys-dict/search-sys-dict-by-condition', ctx => {
//   let commonData = getCommon();
//   commonData.data = [
//       {
//         "id": 407,
//         "itemType": "item_launch_type",
//         "itemCode": "3",
//         "itemNameCn": "统投",
//         "itemNameEn": null
//       },
//       {
//         "id": 407,
//         "itemType": "item_launch_type",
//         "itemCode": "4",
//         "itemNameCn": "自投",
//         "itemNameEn": null
//       },
//     {
//       "id": 407,
//       "itemType": "item_launch_type",
//       "itemCode": "5",
//       "itemNameCn": "其他",
//       "itemNameEn": null
//     }
//   ]
//   ctx.body = commonData;
// });

module.exports = router;
