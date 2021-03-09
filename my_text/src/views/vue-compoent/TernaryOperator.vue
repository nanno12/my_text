<template>
<!-- 三元运算符练习 -->
  <div>
    <p v-if="pages === 3 "> 2</p>
    <p v-html=" a !== 'a' ?'暂无数据':b"></p>
  </div>
</template>

<script>
export default {
  data(){
    return{
      pages:1,
      a:'a',
      b:'b'
    }
  },
  created(){
    this.page()
  },
  methods:{
    page(){
      var age = 20;
      this.pages = (age < 21) ? 3 : 4;
      console.log(this.pages);
      
    }
  }
}

</script>
<style lang='scss' scoped>

</style>