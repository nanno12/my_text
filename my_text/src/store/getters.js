export default {
  memberInfo(state) {
    console.log('state',state)
    switch (state.userState) {
      case 0:
        return '普通会员'
      case  1:
        return 'vip会员'
      case  2:
        return `超级vip${state.vipValue}会员`
      default: 
        return '普3通会员'
    }
  }
}