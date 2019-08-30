import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
// import store from './store/index'
import Directives from './directives'
import store from './store'

Vue.use(Directives)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
// Vue.use(Vuex)
// 1. 先创建一个vuex实例 
// const store = new Vuex.Store({
//   state:{ // 数据仓库
//     count:0,
//     count1:'h'
//   },
//   mutations:{  // 修改数据
//     page(state,v) {  
//       state.count = v
//       state.count1 = 'haha'
//     }
//   }
// })
// 导航守卫
// Vue.prototype.$store = store
// router.beforeEach((to, from,next)=>{
//   console.log(store.state,'nextnext');
//   if (store.state.userInfo || to.path === '/login') {
//     console.log('index');
//     next()
//   } else {
//     console.log('login');
//     next({
//       path:'/login'
//     })
//   }
// })
// 全局定义自定义指令
Vue.directive('tack',{
  bind(el,binding,vnode){
      el.style.color = 'red'
  }
})
new Vue({
  router,
  store,// 2. 挂载vue实例中
  render: function (h) { return h(App) }
}).$mount('#app')
