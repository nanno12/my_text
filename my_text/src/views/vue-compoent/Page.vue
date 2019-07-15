<template>
  <div>
    223322
  <!-- <my-component></my-component> -->
    YesOrNo: 
  </div>
</template>

<script>
// import YesOrNoSelect from '../vue-compoent/YesOrNoSelect'
import {ARTICLE,COMMENT} from '../../api/text.js'

export default {
  data(){
    return{
      
    }
  },
  created(){
    this.articleLoad()
    this.handle()
  },
  methods:{
    async articleLoad(){     
      let user_article = await COMMENT()
      console.log(user_article,'hahahhahahahahahahah')
    },
    async handle(){
      const params = {
        keyWord:'',
        soid:[11]
      } 
      let a = await ARTICLE(params)
      console.log(a ,'nsihahfdhcjkhjk')
      }
  }
}

</script>
<style lang='scss' scoped>

</style>