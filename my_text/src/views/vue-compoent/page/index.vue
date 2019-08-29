<template>
  <div>
      {{memberInfo}}index
  </div>
</template>

<script>
import {mapGetters,mapState} from 'vuex'; 
export default {
  data(){
    return{
      
    }
  },
  created(){
    console.log(this.userState,this.vipValue);
    
  },
  computed:{ // 计算属性
    ...mapState(['userState','vipValue']), // 帮助我们生成计算属性
    ...mapGetters(['memberInfo']) // 解构让所有stats gerr都有这个方法
  },
  methods:{
    
  }
}

</script>
<style lang='scss' scoped>

</style>