/**
 * Created by liujunjie on 2019/4/11.
 */

//分页返回json格式
let getPager = () => {
  return {
    "success":true,
    "code":0,
    "infoMsgs":[

    ],
    "warningMsgs":[

    ],
    "errorMsg":null,
    "data":{
      "pageNum":1,
      "pageSize":10,
      "size":1,
      "startRow":1,
      "endRow":1,
      "total":29,
      "pages":3,
      "list":[],
      "prePage":0,
      "nextPage":2,
      "isFirstPage":true,
      "isLastPage":true,
      "hasPreviousPage":false,
      "hasNextPage":false,
      "navigatePages":8,
      "navigatepageNums":[
        1
      ],
      "navigateFirstPage":1,
      "navigateLastPage":1,
      "firstPage":1,
      "lastPage":3
    }
  }
}

//除了分页的其他请求的返回格式
let getCommon = () => {
  return {
    "success":true,
    "code":0,
    "infoMsgs":[

    ],
    "warningMsgs":[

    ],
    "errorMsg":null,
    "data": null
  }
}

module.exports = {
  getPager,
  getCommon
}
