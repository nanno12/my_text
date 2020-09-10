import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from './views/style-ui/buttom.vue'
// import Select from './views/vue-compoent/select.vue' 
// import reachargReturn from './views/reachargReturn.vue'
// import Directive from './views/vue-compoent/directive.vue'
// import Vuex from './views/vue-compoent/Vuex.vue'
// import login from './views/vue-compoent/page/login.vue'
// import index from './views/vue-compoent/page/index.vue'
// import TernaryOperator from './views/vue-compoent/TernaryOperator.vue'

Vue.use(VueRouter)
const router = new VueRouter({
  base:'/transitions',
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
    // async/await 和 Promise 区别么
    {
      path: '/awaitPromise',
      name: 'AwaitPromise',
      component: function () { 
        return import(/* webpackChunkName: "awaitPromise" */ './views/vue-compoent/awaitPromise.vue')
      }
    },
    {
      path: '/transitions',
      name: 'Transitions',
      component: () => import(/* webpackChunkName: "transitions" */ './views/vue-compoent/transitions.vue'),
    },
    {
      path: '/media',
      name: 'Media',
      component: () => import(/* webpackChunkName: "meadie" */ './views/vue-compoent/media.vue'),
    },
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
    }
  ]
})
export default router
