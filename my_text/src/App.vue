<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import vuex from "vuex"

export default {
  name: 'app',
}
</script>

<style lang="scss">
@import './style/index.scss';
@media screen and (min-width: 100px) and (max-width: 1367px) {
  .box {
    .el-input {
      width: 200px !important;
      border: 1px solid pink;
    }
  }
}
@media screen and (min-width: 1368px) and (max-width: 1920px) {
  .box {
    .el-input {
      width: 300px !important;
      border: 1px solid red;
    }
  }
}
@media screen and (min-width: 1921px) and (max-width: 2560px) {
  .box {
    .el-input {
      // max-width: ;
      width: 400px !important;
      border: 1px solid #000;
    }
  }
}
@media screen and (min-width: 2561px) and (max-width: 25600px) {
  .box {
    .el-input {
      // max-width: ;
      width: 500px !important;
      border: 1px solid #888;
    }
  }
}
#app {
  padding: 20px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
