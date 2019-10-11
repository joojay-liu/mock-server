/**
 * Created by liujunjie on 2019/3/5.
 */

const router = require('koa-router')();

// http://dev.yilihuo.com/v2/goods/test
router.get('/test.ajax', ctx => {
  ctx.body = {
    test: '测试'
  }
})

// router.get('/retail/policy/get-product-policy-cus.ajax', ctx => {
//   ctx.body = {
//     test: '测试1'
//   }
// });



module.exports = router;
