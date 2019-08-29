export default {
  login (state,v) {
    state.userInfo = v
  },
  setVipInfo (state,v) {
    state.userState = v.userState
    state.vipValue = v.vipValue
  }
}