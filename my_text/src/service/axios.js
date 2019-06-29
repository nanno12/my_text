import axios from 'axios'
// import { Spin } from 'iview' // 弹出样式，随组件使用确定

class HttpRequest {
  constructor () {
    this.queue = {} // 请求队列
  }

  /**
   * 对外暴露请求方法
   * @param {*Object} options 自定义配置项
   */
  request (options) {
    const instance = axios.create()
    const unionOptions = Object.assign(this.getInsideConfig(), options)
    this.interceptors(instance, unionOptions.url)
    return instance(unionOptions)
  }

  // 默认设置
  getInsideConfig (headers) {
    const config = {
      headers: Object.assign({
        'Content-Type': 'application/json'
      }, headers)
    }
    return config
  }

  // 销毁队列
  destroy (url) {
    delete this.queue[url]
    if (!Object.keys(this.queue).length) {
      // Spin.hide() // 关闭提示，样式随组件使用确定
    }
  }

  // 状态200+成功请求
  succssRresponse (data) {
    // 各种处理
    if (data.invalidToken) {
      this.destroy()
    }
  }

  // 统一拦截
  interceptors (instance, url) {
    // 请求拦截
    instance.interceptors.request.use((config) => {
      if (!Object.keys(this.queue).length) {
        // Spin.show() // 全局提示，样式随组件使用确定
      }
      this.queue[url] = true
      return config
    }, error => Promise.reject(error))

    // 响应拦截
    instance.interceptors.response.use((res) => {
      this.destroy(url)
      // 随具体后端业务封装正确与错误处理--刷新refresh-token
      const { data, status } = res
      this.succssRresponse(data)
      return { data, status }
    }, (error) => {
      this.destroy(url)
      // 随具体后端业务封装错误处理
      console.log(error.response)
      return Promise.reject(error)
    })
  }
}
export default HttpRequest
