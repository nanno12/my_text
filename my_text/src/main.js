import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Directives from './directives'
Vue.use(Directives)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);
Vue.use(Vuex)
const nuo = new Vuex.Store({
  state:{
    count:0
  }
})
Vue.directive('tack',{
  bind(el,binding,vnode){
      el.style.color = 'red'
  }
})
new Vue({
  nuo, //挂载vue实例中
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
