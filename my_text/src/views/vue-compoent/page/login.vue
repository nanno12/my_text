<template>
  <div>
      <el-input v-model="account"></el-input>
      <button @click="login">登录</button>
  </div>
</template>

<script>
import store from '../../../store'
export default {
  data(){
    return{
      account:''
    }
  },
  created(){
    
  },
  methods:{
    login () {
      if(this.account === '') {
        return false
        alert('请输入')
       
      }
      const that = this
       setTimeout(()=>{
          store.commit('login',{
            account: that.account
          })
          store.commit('setVipInfo',{
            userState:1, //0-普通 1-vip 超级vip
            vipValue:0
          })
          that.$router.push('./')
        },1000)
    }
  }
}

</script>
<style lang='scss' scoped>

</style>