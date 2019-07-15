import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/index'

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './plugins/element.js'

import YesOrNoSelect from './views/vue-compoent/YesOrNoSelect.vue'
Vue.component('yes-or-no-select', YesOrNoSelect)


var MyComponent = Vue.extend({
  template: '<div>A custom component!</div>'
});

// 注册
Vue.component('my-component', MyComponent);

Vue.config.productionTip = false
Vue.use(ElementUI);



new Vue({
  router,
  store,
  render: function (h) { return h(App) }
}).$mount('#app')
