/**
 * Created by liujunjie on 2019/3/5.
 */

module.exports = {
  //是否开启mock
  //开启，mockServer有模拟数据，就会返回模拟数据
  //不开启，所有请求都转发到devServer
  mock: true,
  //本地mockServer配置
  mockServer: {
    port: 80
  },
  //远程backEndServer配置
  backEndServer: {
    //spring cloud 微服务
    ylhCloudService: {
      gateWay: 'http://12.168.3.34:8001',
      servicePrefix: {
        ylhCloudServiceUser: '/ylh-cloud-service-user-dev',
        ylhCloudServiceGoods: '/ylh-cloud-service-goods-dev',
        ylhCloudServiceStock: '/ylh-cloud-service-stock-dev',
        ylhCloudServiceOrder: '/ylh-cloud-service-order-dev',
        ylhCloudServicePrice: '/ylh-cloud-service-price-dev',
        ylhCloudServiceNotice: '/ylh-cloud-service-notice-dev',
        ylhCloudServicePolicy: '/ylh-cloud-service-policy-dev',
        ylhCloudServiceBase: '/ylh-cloud-service-base-dev',
        // ylhCloudServiceExchange: '/ylh-cloud-service-exchange-dev', // Exchange不做mock了
      }
    },
    //ylh-v2-service-xxx
    ylhV2Service: {
      portal: {
        prefix: '/v2/portal',
        service: "http://12.168.3.15:80",
        // service: "http://127.0.0.1:8097",
      },
      funds: {
        prefix: '/v2/funds',
        service: "http://12.168.3.15:80",
        // service: "http://127.0.0.1:8098",
      },
      goods: {
        prefix: '/v2/goods',
        service: "http://12.168.3.15:80",
        // service: "http://127.0.0.1:8094",
      },
      order: {
        prefix: '/v2/order',
        service: "http://12.168.3.15:80",
        // service: "http://127.0.0.1:8093",
      },
      user: {
        prefix: '/v2/user',
        service: "http://12.168.3.15:80",
        // service: "http://127.0.0.1:8095",
      }
    },
  },
  //前端工程配置(用于前端H5跨域问题, App忽略即可)
  frontEndServer: {
    fund: {
      prefix: '/fund',
      service: 'http://127.0.0.1:9900'
      // service: 'http://12.168.3.15:80'
    },
    order: {
      prefix: '/order',
       service: 'http://127.0.0.1:9908'
      //service: 'http://12.168.3.15:80'
    },
    price: {
      prefix: '/price',
      // service: 'http://127.0.0.1:8099'
      service: 'http://12.168.3.15:80'
    },
    goods: {
      prefix: '/goods',
      service: 'http://127.0.0.1:9901'
      // service: 'http://12.168.3.15:80'
    },
    mobile: {
      prefix: '/mobile',
      // service: 'http://127.0.0.1:8986'
      service: 'http://12.168.3.15:80'
    },
    notice: {
      prefix: '/notice',
      // service: 'http://127.0.0.1:8980'
      service: 'http://12.168.3.15:80'
    },
    ecm: {
      prefix: '/ecm',
      service: 'http://127.0.0.1:8181'
      // service: 'http://12.168.3.15:80'
    },
    portal: {
      prefix: '/portal',
      // service: 'http://127.0.0.1:3000'
      service: 'http://12.168.3.15:80'
    },
    erp: {
      prefix: '/erp',
      // service: 'http://127.0.0.1:3001'
      service: 'http://12.168.3.15:80'
    },
    cloud: {
      prefix: '/cloud',
      service: 'http://127.0.0.1:3002'
      // service: 'http://12.168.3.15:80'
    },
    ylh: {
      prefix: '/ylh',
      service: 'http://127.0.0.1:3003'
      //service: 'http://12.168.3.15:80'
    },
    mall: {
      prefix: '/',
      // service: 'http://127.0.0.1:8089'
      service: 'http://12.168.3.15:80'
    }
  }
}
