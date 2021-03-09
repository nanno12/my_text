import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import Directives from './directives'
// import store from './store'

Vue.use(Directives)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex)
// 1. 先创建一个vuex实例 
let store = new Vuex.Store({
  state:{ // 数据仓库
    count:0,
    count1:'h'
  },
  getters: {
    doneTodos: (state, getters) => {
      console.log('state, getters',state, getters)
      // return state.todos.filter(todo => todo.done)
    }
  },
  mutations:{  // 修改数据
    page(state,v) {  
      // state.count = v
      console.log('vvv',v)
      state.count++
      state.count1 = 'haha'
    }
  },
  actions: {
    page(context) {
      console.log('context',context)
      context.commit('page')
      // 可以包含异步操作
      // context 是一个与 store 实例具有相同方法和属性的 context 对象
    }
  }
})
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
