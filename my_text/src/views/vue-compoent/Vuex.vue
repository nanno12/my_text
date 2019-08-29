<template>
  <div>
    <button @click="handlePage">点我自增</button>
    {{this.$store.state.count}}
      1111111111
    {{this.$store.state.count1}}

  </div>
</template>

<script>
export default {
  data(){
    return{
      
    }
  },
  created(){
    
  },
  methods:{
    handlePage() {
      const v ='Cindy' // 自定义修改某个值
      // commit 第一个参数 是mian.js中定义的方法（mutations的函数名） ，第二个参数是自定义值
      this.$store.commit('page',v)
      this.$srore.commit('page')
    }
  }
}

</script>
<style lang='scss' scoped>

</style>