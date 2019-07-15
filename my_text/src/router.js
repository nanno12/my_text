import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import reachargReturn from './views/reachargReturn.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
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
