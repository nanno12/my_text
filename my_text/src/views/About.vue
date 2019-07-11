<template>
  <div class="home">
    <div class="about">
      <h1 >This is an about page</h1>
      <button @click="nuo">nuozi</button>
    </div>
    <div id="app">
      <FooterBar v-if="isShow"/>
    </div>
  </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入
import FooterBar from '../components/HelloWorld'
import config from '../config/index.js'
export default {
  data () {
    return {
    }
  },
  components:{
    FooterBar:FooterBar
  },
  computed:{
    ...mapState({  //这里的...是超引用，ES6的语法，意思是state里有多少属性值我可以在这里放多少属性值
      isShow:state=>state.texte1.showFooter //注意这些与上面的区别就是state.texte1,
                                                  //里面定义的showFooter是指texte1.js里state的showFooter
    }),
    //你也可以用下面的mapGetters来获取isShow的值，貌似下面的更简洁
    /*...mapGetters('texte1',{ //texte1指的是modules文件夹下的texte1.js模块
         isShow:'isShow' //第一个isShow是我自定义的只要对应template里v-if="isShow"就行，
                         //第二个isShow是对应的texte1.js里的getters里的isShow
      })*/
  },
  watch:{
    $route(to,from){
      console.log(to,'totototototo');
      console.log('totototototo');
      if(to.name=='book'||to.name=='my'){
        //这里改为'texte1/showFooter',//意思是指texte1.js里actions里的showFooter方法
        this.$store.dispatch('texte1/showFooter') 
      }else{
        this.$store.dispatch('texte1/hideFooter') //同上注释
      }
    }
  },
  methods:{
    nuo(){
      console.log('傻逼');
      // const hahaha = this.$store.state.showFooter
      // const hahaha = this.$store.commit('show')
      // const hahaha = this.$store.dispatch('hideFooter')this.$store.dispatch('showFooter')
      // console.log(hahaha)
      
    }
  }
}
</script>