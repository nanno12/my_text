import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Text from './views/Text.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      // children:[
      //   {
      //     path: '/text',
      //     name: 'Text',
      //     component: function () { 
      //       return import(/* webpackChunkName: "text" */ './views/Text.vue')
      //     }
      //   }
      // ]
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
  ]
})
