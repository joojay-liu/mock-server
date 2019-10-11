/**
 * Created by liujunjie on 2019/3/5.
 */

const router = require('koa-router')();

// http://dev.yilihuo.com/v2/user/test
router.get('/user', ctx => {
  ctx.body = {
    test: '测试'
  }
});

module.exports = router;