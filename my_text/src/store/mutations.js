export default {
  login (state,v) {
    console.log('statemutations',state)
    state.userInfo = '23'
  },
  setVipInfo (state,v) {
    console.log('vvv',state,v)
    // state.userState = v.userState
    // state.vipValue = v.vipValue
  }
}