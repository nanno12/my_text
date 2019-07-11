
<template>
  <div class="bg-co_mainColor">
    <div class="h_50 bg-co_555"></div>
    <div class="box-select h_100 mg-x_8 mg-y_10 bg-co_fff" :class="{samllInput:samllInput}" >
      <el-input placeholder="请刷卡或输入卡号"  v-model="input3"  class="input-with-select importtt">
        <el-select v-model="select" @change="handleChangeValue" slot="prepend" placeholder="请选择">
          <el-option label="餐厅名" value="1"></el-option>
          <el-option label="订单号" value="2"></el-option>
          <el-option label="用户电话" value="3"></el-option>
        </el-select>
        <i slot="suffix" @click="handleSearch" class="ft_20 l-h_42 el-icon-search"></i>
      </el-input>
    </div>
    <text1 class="mg-x_8 mg-y_10 pd-x_14 bg-co_fff pd-top_14" v-show="text1Show"></text1>
  </div>
</template>
<script>
import Text1 from './Text1'

export default {
  data(){
    return{
      input3:'',
      select: '',
      text1Show:false,
      samllInput:false
    }
  },
  components:{
    Text1
  },
  methods:{
    handleChangeValue(){
      this.text1Show = true
      this.samllInput = true
    },
    handleSearch(){
      console.log('handleSearch');
    }
  }
}
</script>
<style lang="scss" scoped>
.samllInput {
  padding-left: 20px;
  display: flex!important;
  justify-content: left!important;
   /deep/.el-input__inner {
    width: 180px!important;
  }
  /deep/.el-input-group {
    width: 160px!important;
}
/deep/.el-select .el-input {
  width: 114px!important;
  height: 42px;
}
.importtt {
      /deep/.el-input {
      width: 114px;
      /deep/.el-input__inner {
        width: 114px;
        // height: 34px;
        line-height: 37px;
      }
      /deep/.el-input__icon {
        line-height: 34px;
      }
    }}
}
.box-select {
  display: flex;
  justify-content: center;
  align-items: center;
    /deep/.el-input__inner {
    height: 42px;
    width: 290px;
  }
}
.importtt {
      /deep/.el-input {
      width: 114px;
      /deep/.el-input__inner {
        width: 114px;
        // height: 34px;
        line-height: 37px;
      }
      /deep/.el-input__icon {
        line-height: 34px;
      }
    }}
/deep/.el-select .el-input {
    width: 134px;
    height: 42px;
}
/deep/.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
/deep/.el-input-group {
    width: 420px;
}
</style>