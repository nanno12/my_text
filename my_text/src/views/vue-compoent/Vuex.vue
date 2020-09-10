<template>
  <div>
    <button @click="handlePage">点我自增</button>
    {{this.count}}
    {{number}}
    {{number1}}
  </div>
</template>

<script>

import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data(){
    return{
      number:0,
      number1:0
    }
  },
  created(){
    
  },
  computed:{
    ...mapState(['count']),
    ...mapGetters(['doneTodos'])
  },
  methods:{
    async handlePage() {
      // await this.number++
      // await this.number1++
      const v ='Cindy' // 自定义修改某个值
      console.log(this)
      // commit 第一个参数 是mian.js中定义的方法（mutations的函数名） ，第二个参数是自定义值
      // this.$store.commit('login')
      this.$store.commit('page',{v,n:'nuo'})
      this.$store.getters.doneTodos
      console.log(this.$store,this.doneTodos)

      // this.$store.commit('setVipInfo')
    }
  }
}

</script>
<style lang='scss' scoped>

</style>