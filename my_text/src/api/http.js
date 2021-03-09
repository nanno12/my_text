import axios from 'axios'

const base = {    
  dev: 'http://172.16.6.152:20060',    
  bd: 'http://xxxxx22222.com/api'
}
//创建axios的一个实例 
var instance = axios.create({
  baseURL:base.dev
})
/**
* 使用es6的export default导出了一个函数，导出的函数代替axios去帮我们请求数据，
* 函数的参数及返回值如下：
* @param {String} method  请求的方法：get、post、delete、put
* @param {String} url     请求的url:
* @param {Object} data    请求的参数
* @returns {Promise}     返回一个promise对象，其实就相当于axios请求数据的返回值
*/
export default function (method, url, data = null) {
     method = method.toLowerCase();
     if (method == 'post') {
         return instance.post(url, data)
     } else if (method == 'get') {
         return instance.get(url, { params: data })
     } else if (method == 'delete') {
         return instance.delete(url, { params: data })
     }else if(method == 'put'){
         return instance.put(url,data)
     }else{
         console.error('未知的method'+method)
         return false
     }
  }
// //------------------- 一、请求拦截器 忽略
// instance.interceptors.request.use(function (config) {
//   if (config.url == '...') {
//       config.headers = {
//           'Content-Type': 'application/json'
//       };
//   } else {
//       let token = '123456'
//       if (token) {
//           config.headers = {
//               'Authorization': 'Bearer ' + token,
//               'Content-Type': 'application/json'
//           };
//       }
//   }
//   config.url = config.url + '?random=' + new Date().getTime()
//   return config;   
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// //----------------- 二、响应拦截器 忽略
// instance.interceptors.response.use(function (response) {
//   if(response.status==200){
//       return response.data;
//   }else{
//       //...
//   }    
// }, function (error) {
//   // 对响应错误做点什么
//   return Promise.reject(error);
// });

