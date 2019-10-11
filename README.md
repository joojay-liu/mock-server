### mock-server说明
-1. 缘由

```
(1) 公司前端有很多jsp、velocity、angularjs 1.x等老项目
(2) 后台已经迁移到spring cloud以提供接口的方式提供数据
(3) 经常需要多个开发测试环境切换
(4) 同一项目，不同页面在不同的工程，需要nginx代理。
(5) 接口请求也需要nginx代理
(6) nginx对前端来说不是很友好，不能做模拟数据。
``` 

0.概述
> 在开发过程中，接口存在三种情况

```
(1) 已上线 && 无需改动的接口

(2) 已上线 && 需要改动的接口

(3) 此次需要上线的接口

第(1)种，需要代理到dev
第(2)种，暂时代理到dev或者本地模拟
第(3)种，本地模拟
```
> mock-server大致思路

```
0. 代理的原理是根据请求的前缀区别不同的服务

1. 如果本地模拟了接口，就返回本地的模拟
2. 如果本地没有模拟接口，就返回dev的结果
3. 如果本地没有模拟接口，dev也没有此接口，就返回dev的404(除非请求的前缀都是错了，此时会返回代理的404或报错)

4. 全局有个是否开启模拟的开关, 如果false，即使本地模拟了接口，还是会代理到dev。
    所以想要本地模拟某个接口，有两个前提条件，否则全代理到dev:
    (1) 开关是打开的
    (2) 写了这个接口的模拟
```

1.环境搭建
> 安装node, 版本 > 7.6.0

> 安装依赖，执行以下命令
    
```
cd mock-server
npm install
```

> 如果安装失败，可能是因为Great Wall的事...可以先安装淘宝镜像, 执行命令: 

```
npm install -g cnpm --registry=https://registry.npm.taobao.org
```
> 之后再安装依赖，执行以下命令

```
cnpm install
```

2.启动mock-server
> 执行命令

```
npm start
```
> 启动成功会显示

```
mock-server start at http://127.0.0.1
mock-server start at http://你电脑的ip地址
```
> 如果启动失败，提示以下错误信息

```
permission denied 0.0.0.0:80
```
> 是因为没有权限，mac下执行以下命令启动

```
sudo npm start
```
> 启动后，修改代码mock-server会热重载，方便随时修改mock数据

3.使用说明
> 大部分情况只关注配置文件(config.js)和router目录下的文件即可。

> 模拟接口方式

```
例如要模拟
服务 ylh-cloud-service-goods
接口 /api/page/stock/lack-registration/get-customer-stock-amount
请求方式 post

在router/ylh-cloud-service-goods.js里加下面代码
router.post('/api/page/stock/lack-registration/get-customer-stock-amount', ctx => {
  let commonData = getCommon(); //拿基础数据模板
  
  commonData.data = {
    "barCodeCount": 111,
    "barCodePriceCount":222,
    "storeGoodsCount":333,
    "storeGoodsPriceCount":444
  };

  ctx.body = commonData;
});

config.js
modulex.exports = {
    mock: true //打开全局开关
}

此时PC请求
http://dev.yilihuo.com/ylh-cloud-service-goods-dev/api/page/stock/lack-registration/get-customer-stock-amount
此时App请求
http://本机IP/ylh-cloud-service-goods-dev/api/page/stock/lack-registration/get-customer-stock-amount

返回值如下:
{
    "success":true,
    "code":0,
    "infoMsgs":[

    ],
    "warningMsgs":[

    ],
    "errorMsg":null,
    "data":{
        "barCodeCount":111,
        "barCodePriceCount":222,
        "storeGoodsCount":333,
        "storeGoodsPriceCount":444
    }
}
```
> 使用数据模板

```
(1) 基础数据模板
(2) 分页数据模板
看postman演示吧
```

> PC/H5使用

```
不用启动nginx了，mock-server已经代理了所有的服务(前端和后台)
本地启动某个前端工程时，
只需在config.js里改frontEndServer对应工程的service即可，
使用方式与nginx配置文件类似
```
> App使用

```
只需要把请求中原本是dev.yilihuo.com的地方替换成本机IP
(是否可以通过本地配置文件-被git忽略文件的方式修改？别不小心提交代码了)
```
> 我想的相对完善的方式
   
```
(1) mock-server的master分支一直是最初始的状态
(2) 每一个需求从master按需求号拉分支，设计人员在此分支上模拟接口，模拟数据中业务字段要简单给出注释，类似状态值这种，要给出不同情况的值及注释。
(3) 前端开发人员从需求号分支上拉代码，就会包含设计人员模拟的接口，按注释自行按需修改自测

(4) 联调阶段，联调某个接口，就把某个接口注释掉。
```

4.缺陷

> PC中有几个接口的前缀是/v2//portal，不知道原本是怎么代理的，一到这几个接口的时候，就404了

> 开发人员造的数据，如果设计人员小改接口，开发pull的时候，会丢失自己按需造的数.

> 小需求没必要模拟 

> 测试的不完善，可能有坑....
