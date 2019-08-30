import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from './views/style-ui/buttom.vue'
// import Select from './views/vue-compoent/select.vue' 
// import reachargReturn from './views/reachargReturn.vue'
// import Directive from './views/vue-compoent/directive.vue'
import Vuex from './views/vue-compoent/Vuex.vue'
// import login from './views/vue-compoent/page/login.vue'
import index from './views/vue-compoent/page/index.vue'
// import TernaryOperator from './views/vue-compoent/TernaryOperator.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  base:'/deReordering',
  routes: [
    {
      path: '/Vuex',
      name: 'Vuex',
      component: function () { 
        return import(/* webpackChunkName: "Vuex" */ './views/vue-compoent/Vuex.vue')
      }
    },
    {
      path: '/about',
      name: 'about',
      component: function () { 
        return import(/* webpackChunkName: "about" */ './views/About.vue')
      }
    },
    // {
    //   path: '/deReordering',
    //   name: 'DeReordering',
    //   component: () => import(/* webpackChunkName: "DeReordering" */ './views/jsDome/DeReordering.vue'),
    //   meta: { title: '数组去重排序', requireAuth: true },
    //   children: []
    // },
    {
      path: '/deReordering',
      name: 'DeReordering',
      component: function () { 
        return import(/* webpackChunkName: "DeReordering" */ './views/jsDome/DeReordering.vue')
      }
    },
    {
      path: '/',
      name: 'index',
      component: function () { 
        return import(/* webpackChunkName: "index" */ './views/vue-compoent/page/index.vue')
      }
    },
    {
      path: '/login',
      name: 'login',
      component: function () { 
        return import(/* webpackChunkName: "login" */ './views/vue-compoent/page/login.vue')
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
export default router
