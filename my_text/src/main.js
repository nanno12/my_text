import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'
import Directives from './directives'
Vue.use(Directives)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);

Vue.directive('tack',{
  bind(el,binding,vnode){
      el.style.color = 'red'
  }
})
new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
