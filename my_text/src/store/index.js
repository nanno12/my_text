import Vue from 'vue'
import Vuex from 'vuex'
import finance from './modules/finance'
import page from './modules/page'

Vue.use(Vuex)

const state = {
  account: {},
  auth: ''
}

export default new Vuex.Store({
  state,
  modules: {
    finance,
    page
  }
  // plugins: [createPersistedState()]
})
