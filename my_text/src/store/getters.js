export default {
  memberInfo(state) {
    switch (state.userState) {
      case 0:
        return '普通会员'
        break;
      case  1:
        return 'vip会员'
        break;
      case  2:
        return `超级vip${state.vipValue}会员`
        break;
      default: 
        return '普3通会员'
        break;
    }
  }
}