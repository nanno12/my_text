<template>
  <div>
      
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
    timeout(time) {  
      return new Promise((reslove, reject) => {
      //   setTimeout(() => {
      //     reslove(10)
      //   }, time)
      // })
      timeout(3000).then((data) => {  
        console.log(data)
      })
    })
    }
  }
}

</script>
<style lang='scss' scoped>

</style>