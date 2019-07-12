<template>
  <div class="home">
    <div class="about">
      <h1 >This is an about page</h1>
      <button @click="nuo">nuozi</button>
    </div>
    <div id="app">
      <!-- <FooterBar v-if="isShow"/> -->
    </div>
    <el-input v-model="oginName" 
    placeholder="账号" 
    @keyup.enter.native="doLogin"></el-input>
    <div @click.ctrl="doLogin">点我ctrl</div>
    <input @keyup.ctrl="nuo">
    <input type="text" @keydown="show($event)">
    <i class="icon" @mouseenter="enter(index)" @mouseleave="leave()">hahahah</i>
    <div v-show="seen&&index==current" class="index-show">
      <div  class="tip_Wrapinner">item.det</div>
    </div>
  </div>
</template>
<script>
import {mapState,mapGetters,mapActions} from 'vuex'; //先要引入
import FooterBar from '../components/HelloWorld'
// import config from '../config/index.js'
export default {
  data () {
    return {
      oginName:'',
      seen:false

    }
  },
  components:{
    FooterBar:FooterBar
  },
  methods:{
    enter(index){
        this.seen = true;
        // this.current = index;
      },
      leave(){
        this.seen = false;
        // this.current = null;
      },
    show(ev){
      console.log(ev.keyCode);
      
    },
    nuo(){
      console.log('傻逼');
      // const hahaha = this.$store.state.showFooter
      // const hahaha = this.$store.commit('show')
      // const hahaha = this.$store.dispatch('hideFooter')this.$store.dispatch('showFooter')
      // console.log(hahaha)
      
    },
    doLogin(){
      console.log('回车事件成功');
      
    }
  }
}
</script>