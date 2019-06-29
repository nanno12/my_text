const ev = {
  // dev: 'http://172.16.74.59:20060',
  dev: 'http://172.16.6.152:20060',
  pro: 'http://172.16.6.152:20060',
  jinghong: 'http://172.16.75.114:20060',
  test: 'http://172.16.73.91:20020'
}
export default {
  /**
  * @description 配置显示在浏览器标签的title
  */
  title: 'page',
  /**
  * @description 是否使用国际化，默认为false
  * 如果不使用，则需要在路由中给需要在菜单中展示的路由设置meta: {title: 'xxx'}
  * 用来在菜单中显示文字
  */
  useI18n: true,
  /**
  * @description api请求基础路径
  */
  baseUrl: {
    dev: ev.dev,
    pro: ev.dev
  },
  /**
  * @description 默认打开的首页的路由name值，默认为home
  */
}
