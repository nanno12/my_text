<template>
  <div class="box">
    <h1>媒体查询</h1>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name"></el-input>
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region"></el-input>
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign.type"></el-input>
      </el-form-item>
    </el-form>
    <div class="box1">
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  },
  created(){
    
  },
  methods:{
    
  }
}

</script>
<style lang='scss' scoped>
.box1 { 
  div {
    width: 10px;
    height: 10px;
    background-color: red;
    border: 1px solid #000;
  }
}
</style>