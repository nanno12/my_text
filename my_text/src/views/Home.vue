<template>
  <div>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      hide-required-asterisk
      class="demo-ruleForm">
      <el-form-item label="日期设置" required>
          <!-- :class="{borderstyle:domain.borderStyleList}"
          v-model="domain.dateValue"
          :disabled="domain.isDisabled"
          :readonly = "readonly"
          :picker-options="pickerOptions" -->
        <!-- <template slot-scope="scope"> -->
        <el-date-picker
          v-for="(item,index) in dateTimeList"
          :key="index"
          clearable
          type="datetimerange"
          v-model="dateTimeList"
          format="yyyy-MM-dd HH:mm:ss"
          value-format="yyyy-MM-dd HH:mm:ss"
          prefix-icon="el-icon-date"
          range-separator="~"
          start-placeholder="开始日期"
          end-placeholder="结束日期">
        </el-date-picker>
        <el-button v-if="dateTimeShow === 2" @click="handleRemoveDate('time')">-</el-button>
        <el-button v-else @click="handleAddDate('time')">+</el-button>
        <!-- </template> -->
      </el-form-item>
      <el-form-item label="指标个数区间设置" required>
        <div v-for="(item,index) in dateNumberList" :key="index" :class="{shazi:shazi}">
          <el-col :span="2.2">
            <el-form-item prop="date1">
              <el-input-number
                v-model="num"
                @focus="handleInputNumber(index)"
                controls-position="right"
                :min="1" :max="10">
              </el-input-number>
            </el-form-item>
          </el-col>
          <el-col class="line" :span="0.8">~</el-col>
          <el-col :span="2.5">
            <el-form-item prop="date2">
              <el-input-number
                v-model="num"
                @focus="handleInputNumber(index)"
                controls-position="right"
                :min="1" :max="10">
              </el-input-number>
            </el-form-item>
          </el-col>
          <el-col :span="0.8">
            <el-form-item prop="date2">
              <el-button @click="handleRemoveDate('number')">-</el-button>
            </el-form-item>
          </el-col>
        </div>
        <el-button @click="handleAddDate('number')">+</el-button>
      </el-form-item>
      <el-form-item label="收费项目" class="po_re " prop="desc">
        <span v-if="dateProjectShow === true" class="border inline-block" >请点击下方收费项目</span>
        <ul v-else  v-for="(item,index) in dateProjectList "
            :class="{borderClor:borderClor === item.name}"
            :key="index" class="inline-block">
          <li class="shoufei inline-block ">{{item.name}} <span class="fr">*</span> </li>
          <li class=" inline-block">
             <el-input type="text" class="inline-block e  w_50 h_32" v-model="ruleForm.desc"></el-input>
          </li>
          <el-button @click="handleRemoveDate('project')">-</el-button>
        </ul>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">保存</el-button>
        <el-button @click="resetForm('ruleForm')">返回</el-button>
      </el-form-item>
    </el-form>
    <router-link :to="{path:'/text'}"><button>点我到第二个页面</button></router-link>
    <ChargeTable></ChargeTable>
  </div>
</template>

<script>
// @ is an alias to /src
import ChargeTable from  '../components/chargeTable.vue'

export default {
  data(){
    return {
      num: 1,
      dateTime:'',
      dateTimeList:[],
      index:'',
      dateNumberList:[],
      dateProjectList:[],
      dateTimeShow: 1,
      dateProjectShow: true,
      SetIndex:'',
      borderClor: false, // 动态设置样式
      shazi:false,
      ruleForm: {
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        date1: [
          { type: 'date', required: true, message: '请选择日期', trigger: 'change' }
        ],
        date2: [
          { type: 'date', required: true, message: '请选择时间', trigger: 'change' }
        ],
        desc: [
          { required: true, message: '请填写活动形式', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
     ChargeTable
  },
  created(){
  },
  methods: {
    handleInputNumber(index){
      console.log(index,'index');
      this.shazi  = false
      this.SetIndex = index
      this.shazi  = true
      // if(index-1) this.shazi  = false
    },
    handleRowTable(params){
      console.log(params)
        this.dateProjectShow =  false
      
      let nuo = false
      this.dateProjectList.map (item=>{
        if(params.name === item.name){
          nuo = true
          this.borderClor = params.name
        }
      })
      console.log(this.dateProjectList,nuo);
      if (nuo) return 
      this.dateProjectList.push({
        name:params.name
      })
    },
    handleAddDate(title){
      if(title !== 'time') {
        this.dateNumberList.push('')
      } else {
        this.dateTimeList.push('')
        this.dateTimeShow =  2
      }
      console.log(title,'添加1')
    },
    handleRemoveDate(title,index){
       if(title === 'time') {
          this.dateTimeShow = true
          this.dateTimeList.splice(index, 1)
        }else if (title === 'project'){
          this.dateProjectList.splice(index, 1)
        } else {
          this.dateNumberList.splice(index, 1)
        }
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!')
        } else {
          console.log('error submit!!')
          return false
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style lang="scss" scoped>
.shazi  {
  display: inline-block;
  // width: 600px;
  // height: 32px;
  border: 2px solid red;
}
.shoufei {
  width: 300px;
  height: 32px;
  border-radius:4px 0 0  4px;
  border: 1px solid #ccc;
  border-right: none;
}
.border  {
  width: 100%;
  height: 100px;
  border: 1px  solid #ccc;
  content: 'nihaoihoihdh';
}
.e{
    /deep/.el-input__inner{
    height: 33px;
    line-height: 32px;
    margin: 0;
    border-radius: 0px 4px  4px 0;
    }
}
/deep/.el-form-item__content {
    line-height: 32px;
  }
/deep/.el-form-item__content::after, .el-form-item__content::before {
  border: none;
}
/deep/.el-input__inner, .el-input__inner:focus {
  border:none;
      border-color: #409EFF;
    }
/deep/.el-button--primary:hover {
  border:none;
        background: #66b1ff;
        border-color: #66b1ff;
        color: #FFF;
    }   
</style>
