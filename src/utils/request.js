import axios from "axios";
import Nprogress from "nprogress";
import "nprogress/nprogress.css";
//去掉圆圈
Nprogress.configure({ showSpinner: false });

const service = axios.create({
  baseURL: "/api",
  timeout: 100000,
});

/* 请求拦截器 */
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);
/* const request = axios.create({
  baseURL: "https://www.ximalaya.com/revision",
  timeout: 10000,
});
 */
const errorMessages = {
  401: "未授权",
  403: "禁止访问",
  405: "资源找不到",
  500: "服务器内部错误",
};
//响应拦截器
service.interceptors.response.use(
  //成功回调(响应状态码2xx)
  (response) => {
    //响应数据 - 直接就是需要data数据

    Nprogress.done(); //进度条结束

    /* 
        response
           {
              config,
              headers,
              data
           }
         response.data
         {
             code:200,
             message,
             data,//具体的数据
             ok,
         }
      */
    // 判断功能是否成功
    if (response.data.ret === 200) {
      //没有返回Promise. 默认就是成功状态 --> 触发then
      return response.data;
    }

    //功能失败
    //返回失败的Promise --> 触发catch
    return Promise.reject(response.data.message || "功能失败了");
  },
  //失败回调(响应状态码非2xx)
  (error) => {
    console.log(error); //timeout
    //console.log(error.message);

    Nprogress.done(); //进度条结束

    /* 
        error.progress代表响应没有回来
          有值:响应回来了
          没有值:响应回来了
      */
    if (error.response) {
      // if (error.response.status === 404) {
      //     return Promise.reject('请求地址找不到');
      // } else if (error.response.status === 401) {
      //     return Promise.reject('未授权~');
      // } else if (error.response.status === 403) {
      //     return Promise.reject('禁止访问');
      // } else if (error.response.status === 500) {
      //     return Promise.reject('服务器故障,请联系管理员解决');
      // }
      return Promise.reject(
        errorMessages[error.response.status] || "未知错误,请联系管理员解决"
      );
    }
    //响应没有回来,以下错误,都是响应没有返回导致的错误
    if (error.message.indexOf("timeout") > -1) {
      // return Promise.reject("网络超时");
      return Promise.reject("网络超时,请检查网络是否通畅");
    } else if (error.message.indexOf("Network Error") > -1) {
      return Promise.reject("断网了,请重新打开网络");
    } else {
      return Promise.reject("未知错误,请联系管理员解决");
    }
  }
);

export default service;
