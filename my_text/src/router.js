import Vue from 'vue'
import Router from 'vue-router'
// import Home from './views/style-ui/buttom.vue'
// import Select from './views/vue-compoent/select.vue' 
// import reachargReturn from './views/reachargReturn.vue'
// import Directive from './views/vue-compoent/directive.vue'
import TernaryOperator from './views/vue-compoent/TernaryOperator.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TernaryOperator',
      component: TernaryOperator
    },
    {
      path: '/about',
      name: 'about',
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    {
      path: '/text',
      name: 'text',
      component: function () { 
        return import(/* webpackChunkName: "text" */ './views/Text.vue')
      }
    },
    {
      path: '/reachargReturn',
      name: 'reachargReturn',
      component: function () { 
        return import(/* webpackChunkName: "reachargReturn" */ './views/pages/rechargeReturn.vue')
      }
    },
    {
      path: '/page',
      name: 'Page',
      component: function () { 
        return import(/* webpackChunkName: "reachargReturn" */ './views/vue-compoent/Page.vue')
      }
    }
  ]
})
