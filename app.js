/**
 * Created by joojay on 2019/3/5.
 */

const os = require('os');
const Koa = require('koa');
const proxy = require('koa-server-http-proxy');

const router = require('./router/router');      //引入路由配置
const config = require('./config');             //引入配置项

const app = new Koa();

//不加这一行总是会有warning
require('events').EventEmitter.prototype._maxListeners = 100;

//配置开启个人路由
app.use(router.routes());
app.use(router.allowedMethods());

/**
 * 配置代理 start
 * 配置按此顺序(不能动)，否则路由匹配服务会有问题.
 */

// 0. 从配置项中拿到代理的配置
const { ylhCloudService, ylhV2Service } = config.backEndServer;
const frontEndServer = config.frontEndServer;

// 1. 代理ylh-cloud-service-xxx 服务
app.use(proxy('/ylh-cloud-service', {
  target: ylhCloudService.gateWay,
  changeOrigin: true
}))

//2. 代理ylh-v2-service-xxx服务
Object.keys(ylhV2Service).map(key => {
    app.use(proxy(ylhV2Service[key].prefix, {
      target: ylhV2Service[key].service,
      // pathRewrite: {['^' + ylhV2Service[key].prefix]: ''},
      changeOrigin: true
    }));
})

//3. 代理前端工程
Object.keys(frontEndServer).map(key => {
  app.use(proxy(frontEndServer[key].prefix, {
    target: frontEndServer[key].service,
    // changeOrigin: true
  }));
});



//启动mock-server
app.listen(config.mockServer.port, () => {
  //为了拿到本机ip
  // const address = os.networkInterfaces().en0.filter((item) => {
  //   return item.family === 'IPv4';
  // })[0].address;

  console.log(`\n \nmock-server start at http://127.0.0.1${config.mockServer.port !== 80 ? ':' + config.mockServer.port : ''}`);
  // console.log(`mock-server start at http://${address}${config.mockServer.port !== 80 ? ':' +config.mockServer.port : ''}\n \n`);
});
