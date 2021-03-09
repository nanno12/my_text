<template>
  <div>
     <div class="ha">
        <el-radio-group v-model="tabPosition" >
          <el-radio-button label="top">top</el-radio-button>
          <el-radio-button label="right">right</el-radio-button>
          <el-radio-button label="bottom">bottom</el-radio-button>
          <el-radio-button label="left">left</el-radio-button>
        </el-radio-group>
        <p class="en"></p>
     </div>
    <h1>transitions动画实现</h1>
    <p>盒子的多个属性一起动画: width, height, background-color, transform. 将光标悬停在盒子上查看动画。</p>
    <div class="box"></div>
  </div>
</template>

<script>
export default {
  data(){
    return{
       tabPosition: 'left'
    }
  },
  created(){
    
  },
  methods:{
    
  }
}

</script>
<style lang="scss">
.ha {
  position: relative;
  .en {
    z-index: 1;
    position: absolute;
    bottom: 0;
    left: 0;
    border: 1px solid #DCDFE6;
    width: 100%;
  }
  .el-radio-button:first-child .el-radio-button__inner {
    border-radius: 0;
    border-bottom:none;
  }
  .el-radio-button:last-child .el-radio-button__inner {
    border-radius: 0;
  }
  .el-radio-button__inner {
    margin:0 2px;
    color: #333333 ;
    border: 1px solid  #DCDFE6;
    background-color: #f2f2f2;
    border-bottom:none;
  }
  .el-radio-button__inner:hover {
    color: #2D5AFA;
    background-color: #999;
  }
  .el-radio-button__orig-radio:checked+.el-radio-button__inner {
    z-index: 2;
    background-color: #fff;
    color: #2D5AFA ;
    border-color: skyblue;
    box-shadow:none;
  }
}
</style>

<style lang='scss' scoped>

.box {
    border-style: solid;
    border-width: 1px;
    display: block;
    width: 100px;
    height: 100px;
    background-color: #0000FF;
    transition: 5s; // 
    animation: spin 1s linear infinite;
		animation-play-state: paused;
    // transition: 1s height; // 指定状态变化所需要的时间。
}
.box:hover {
    background-color: #FFCCCC;
    width:200px;
    height:200px;
		animation-play-state: running;

    // animation: 1s rainbow 3 normal;
    // transition: 10s width; // 指定状态变化所需要的时间。

}
@keyframes rainbow {
  0% { background: #c00; }
  // 50% { background: orange; }
  100% { background: yellowgreen; }
}


</style>