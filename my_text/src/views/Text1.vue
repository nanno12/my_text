
<template>
  <div class="box pd-bottom_30  " >
    <ul class="none mg-bottom_30">
      <li class="title border inline-block  mg-right_6 rds-top_15"
        v-for="(item,index) in titleData" :key="index"
        :disabled="item.titleDisabled"
        :class="{active:index == num,titleBorder:titleBorder === index}" 
        @click="handleToggleTab(titleData,index)">
        <div class="borede-top pd-x_12 pd-top_10 flex flex-column"
          :class="{titleHighlight:titleHighlight === index}">
          <div class="flex_1  flex justify-between">
            <span class="inline-block">{{item.name}}</span>
            <div class=" inline-block">
              <p  class="inline-block"  @click="handleOpenStop(index)">
                <img :src="item.imgUrl" alt="">
              </p>
            </div>
          </div>
          <div class="flex_1 pd-top_6 pd-bottom_5 flex justify-between">
            <span class="ft_18 strong mg-right_15 inline-block">{{item.money}}</span>
            <span class="inline-block">{{item.avail}}</span>
          </div>
        </div>
      </li>
    </ul>
    <div>
      <div class="box1">
        <div>
          <span class="title-border"></span>
          <h2>账户信息</h2>
        </div>
        <ul class="none">
          <li class=" mg-top_12">
            <span>账户状态：</span>
            <el-popover
              placement="top"
              width="250"
              v-model="visible"
              :disabled="disabledPopoverOpen"
              trigger="hover">
                <p class="text-center pd-top_20">您确定要启用XXX账户吗？</p>
                <div style="text-align: right; margin: 30px 0 0 0">
                  <el-button class="rds_100 w_84" size="mini"  @click="visible = false">取消</el-button>
                  <el-button class="rds_100 w_84 bg-co_mainBule" type="primary" size="mini" @click="handleOpenRadio('启用')">确定</el-button>
                </div>
                <el-radio v-model="openStopRadio" :disabled ="macmac"
                slot="reference" class="pd-right_15" label= '1'>启用</el-radio>
            </el-popover>
            <el-popover
              placement="top"
              width="250"
              v-model="visible"
              :disabled="disabledPopoverStop"
              trigger="hover">
                <p class="text-center pd-top_20">您确定要停用XXX账户吗？</p>
                <div style="text-align: right; margin: 30px 0 0 0 ">
                  <el-button class="rds_100 w_84" size="mini" @click="visible = false">取消</el-button>
                  <el-button  class="rds_100 w_84 bg-co_mainBule" type="primary" size="mini" @click="handleStopRadio('停用')">确定</el-button>
                </div>
                <el-radio v-model="openStopRadio" :disabled ="mac"
                  slot="reference" label= '2'>停用</el-radio>
            </el-popover>
          </li>
          <li class="flex mg-y_10">
            <p class="flex_1"><span>账户编号：</span></p>
            <p class="flex_1"><span>充值累计金额：</span></p>
            <p class="flex_1"><span>退卡累计金额：</span></p>
          </li>
          <li class="flex mg-bottom_21">
            <p class="flex_1"><span>可用金额：</span></p>
            <p class="flex_1"><span>消费累计金额：</span></p>
            <p class="flex_1"><span>退费累计金额：</span></p>
          </li>
          <li class="set_button">
            <el-button   @click="handleAccountbut('退卡')" class="w_84 co_sizeColor">退卡</el-button>
            <el-button  @click="handleAccountbut('充值')" class="w_84 bg-co_mainBule" type="primary">充值</el-button>
            <el-dialog :title="outTitle" width="80%"  :visible.sync="accountOuterVisible" class="out-dialog-style">
              <el-dialog
                width="18%"
                :title="innerTitle"
                class="el-icon-warning inner-dialog-style "
                :visible.sync="accountInnerVisible"
                append-to-body>
                <p class="ft_32 strong pd-bottom_20">￥{{rechargeMoney}}</p>
                <p> <span>支付方式</span>{{rechargePayName}} </p>
                <div slot="footer" class="dialog-footer">
                  <el-button class="cancel-button" @click="accountInnerVisible = false">取消</el-button>
                  <el-button class="affirm-button" @click="accountInnerVisible = false">确定</el-button>
                </div>
              </el-dialog>
              <ul class="none" v-if="outTitle === '账户退卡'">
                <li><span>账户编号</span><span>22222</span></li>
                <li><span>账户所属人</span><span>22222</span></li>
                <li><span>可用金额</span><span>22222</span></li>
                <li>
                  <span>退卡类型</span>
                  <el-radio class="pd-right_20" @change="handleretreatTypeRadio('红冲')" v-model="retreatTypeRadio" label="1">红冲</el-radio>
                  <el-radio @change="handleretreatTypeRadio('退款')" v-model="retreatTypeRadio" label="2">退款</el-radio>
                  <el-table
                    v-if="retreatTypeRadio === '1'"
                    ref="multipleTable"
                    :data="tableData"
                    style="width: 100%"
                    tooltip-effect="dark"
                    @row-click="handleRadioChange">
                    <el-table-column
                      width="80">
                      <template slot-scope="scope">
                        <el-radio-group v-model="retreatTimeRadio">
                          <el-radio :label="scope.$index"></el-radio>
                        </el-radio-group>
                      </template>
                    </el-table-column>
                    <el-table-column
                      prop="date"
                      label="交易时间"
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="交易金额"
                      sortable
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="address"
                      label="可退金额"
                      :formatter="formatter">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="操作人"
                      sortable
                      width="180">
                    </el-table-column>
                    <el-table-column
                      prop="name"
                      label="第三方交易号"
                      sortable
                      width="180">
                    </el-table-column>
                  </el-table>
                  <div v-else>
                    <span>交易金额</span>
                    <el-input class="mg-top_10" v-model="retreatMoney" placeholder="请输入退款金额"></el-input>
                  </div>
                </li>
                <li><span>交易金额</span><span>22222</span></li>
                <li><span>支付方式</span><span>22222</span></li>
              </ul>
              <ul class="none" v-else>
                <li><span>账号编号</span><em>23423</em></li>
                <li><span>账户所属人</span><em>23423</em></li>
                <li><span>可用余额</span><em>23423</em></li>
                <li><span>待缴费金额</span><em>23423</em></li>
                <li><span>建议充值金额</span><em style="color:#FFAA01">23423</em></li>
                <li class="line"></li>
                <li>
                  <span>交易金额</span>
                  <el-input  v-model="rechargeMoney"  @blur="handleBlur" placeholder="请输入退款金额">
                  </el-input>
                </li>
                <li>
                  <span>支付方式
                    <el-tooltip content="Top center" placement="top">
                      <i class="el-icon-info"></i>
                    </el-tooltip>
                  </span>
                  <div class="inline-block">
                    <el-radio style="width:50%"
                      @change="handlereChargePayRadio(rechargePayRadioData,index)"
                      v-for="(item,index) in rechargePayRadioData"
                      :key="index"
                      v-model="rechargePayRadio" :label="item.label">
                        <img :src="item.rechargePayImg" :alt="item.describe">{{item.name}}
                    </el-radio>
                  </div>
                </li>
              </ul>
              <div slot="footer" class="dialog-footer">
                <el-button class="cancel-button" @click="accountOuterVisible = false">取消</el-button>
                <el-button class="affirm-button" @click="handleOuterVisible">{{outNume}}</el-button>
              </div>
            </el-dialog>
          </li>
        </ul>
      </div>
      <div class="box2 mg-top_30">
        <div>
          <span class="title-border"></span>
          <h2>介质绑定列表
            <div class="inline-block ft_14 fr">
              <p class="bor inline-block pd-top_1 co_mainBule rds_5 el-icon-plus" @click="handleNewouterVisible('新增')"></p>
              <span class="co_mainBule inline-block mg-left_5 ">新增介质</span>
              <el-dialog :title="boundOutTitle" :visible.sync="newBoundOuterVisible" class="out-dialog-style">
                <ul class="none set_button">
                  <li><span>被绑定账户编号</span><em>被绑定账户编号{{}}</em></li>
                  <li><span>账户所属人</span><em>被绑定账户编号{{}}</em></li>
                  <li><span>可用金额</span><em>被绑定账户编号{{}}</em></li>
                  <li class="line"></li>
                  <li>
                    <span>绑定介质编号</span>
                    <el-input placeholder="" @change="handleNewBoundSearch"  v-model="newBoundSearch" class="input-with-select importtt">
                      <el-select v-model="newBoundSelect"
                        slot="prepend"
                        placeholder="请选择">
                        <el-option label="餐厅名" value="1"></el-option>
                        <el-option label="订单号" value="2"></el-option>
                        <el-option label="用户电话" value="3"></el-option>
                      </el-select>
                      <i slot="suffix" @click="handleSearch" class="ft_20 l-h_32 el-icon-search"></i>
                    </el-input>
                  </li>
                  <li v-if="valvalue === 1 || boundOutTitle === '修改介质绑定'">
                    <div>
                      <ul class="none">
                        <li>
                          <span>账户所属人</span>
                          <em>账户所属人{{}}</em>
                        </li>
                        <li>
                          <span>授权金额</span>
                          <el-input v-model="input" placeholder="请输入授权金额"></el-input>
                        </li>
                        <li>
                          <span>可用金额</span>
                          <el-input v-model="input" placeholder="请输入可用金额"></el-input>
                        </li>
                        <li>
                          <span>失效日期</span>
                          <el-date-picker
                            v-model="value1"
                            type="date"
                            placeholder="请选择失效日期">
                          </el-date-picker>
                        </li>
                      </ul>
                    </div>
                  </li>
                </ul>
                <el-dialog
                  width="28%"
                  :title="BoundInnerTitle"
                  class="inner-dialog-style "
                  :visible.sync="newBoundInnerVisible"
                  append-to-body>
                  <ul class="none">
                    <li><span>绑定介质编号</span><em>绑定介质编号{{}}</em></li>
                    <li><span>姓名</span><em>姓名{{}}</em></li>
                    <li><span>授权金额</span><em>授权金额{{}}</em></li>
                    <li><span>可用额度</span><em>可用额度{{}}</em></li>
                    <li><span>失效时间</span><em>失效时间{{}}</em></li>
                  </ul>
                  <div slot="footer" class="dialog-footer">
                    <el-button class="cancel-button" @click="newBoundInnerVisible = false">取消</el-button>
                    <el-button class="affirm-button" @click="newBoundInnerVisible = false">确定</el-button>
                  </div>
                </el-dialog>
                <div slot="footer" class="dialog-footer">
                  <el-button class="cancel-button" @click="newBoundOuterVisible = false">取 消</el-button>
                  <el-button class="affirm-button"
                    v-if="valvalue === 1 || boundOutTitle === '修改介质绑定'" type="primary"
                    @click="newBoundInnerVisible = true">{{boundButtomSet}}</el-button>
                </div>
              </el-dialog>
            </div>
          </h2>
        </div>
        <el-table
          class="mg-top_10 pd-left_15"
          :data="tableData"
          :header-cell-style="{background:'#D2DCFF',color:'#333'}"
          style="width: 100%">
          <el-table-column
            v-for="(item,index) in tableNameData"
            :key="index"
            align="center"
            :prop="item.prop"
            :label="item.label">
          </el-table-column>
          <el-table-column>
            <template slot="header">
              <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link co_333 inline-block mg-top_5">
                  使用状态 <i class="el-icon-arrow-down el-icon--right"></i>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="all">全部</el-dropdown-item>
                  <el-dropdown-item command="stop">停用</el-dropdown-item>
                  <el-dropdown-item command="open">启用</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </template>
            <template slot-scope="scope">
              <div class="switch_style">
                <el-switch
                  :width="55"
                  :height="22"
                  style="display: block"
                  v-model="value"
                  active-color="#5175F4"
                  inactive-color="#ccc"
                  active-text="启用"
                  @change="hadleChangeSet(scope.$index,scope.row)"
                  inactive-text="停用">
                </el-switch>
              </div>
            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="操作"
            class="el-icon-edit-outline">
            <template slot-scope="scope" >
              <i @click="handleNewouterVisible(scope.row,'修改')" class="el-icon-edit-outline"></i>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="box3 mg-top_30">
        <div>
          <span class="title-border"></span>
          <h2>交易信息一览
            <el-input placeholder="请输入内容" class="fr mg-bottom_10"  v-model="input3"  >
              <i slot="suffix" @click="handleSearch" class="ft_20 l-h_30 el-icon-search"></i>
            </el-input>
          </h2>
        </div>
        <el-table
          class="mg-top_10 pd-left_15"
          :data="tableData"
          :header-cell-style="{background:'#D2DCFF',color:'#333'}"
          style="width: 100%">
          <el-table-column
            v-for="(item,index) in tradeInformationData"
            :key="index"
            align="center"
            :prop="item.prop"
            :label="item.label">
          </el-table-column>
          <el-table-column 
            align="center">
            <template slot="header">
              操作 
              <el-tooltip class="item" 
                effect="dark"
                content="退费和消费不可执行重打/作废，
                仅限当天第三方充值记录交易金额小于可用余额进行作废"
                placement="top-start">
                <i class="el-icon-info"></i>
              </el-tooltip>
            </template>
              <i @click="handlePrinter('Printer')" :class="{iconColor:iconColor}" class="el-icon-printer"></i>
              <i @click="handlePrinter('delete')" class="el-icon-document-delete"></i>
          </el-table-column>
        </el-table>
      </div>
    </div>
    <div v-for="(item,index) in tabContents" :key="index"
        v-show=" index == num" >{{item}}
    </div>
  </div>
</template>
<script>

import stopIcon from '../assets/停用标记.svg'
import openIcon from '../assets/启用标记.svg'
// import stopIcon from '../assets/停用开关.svg'
// import openIcon from '../assets/启用开关.svg'
// import Text from './Text'
import Home from './Home'
import About from './About'
export default {
  data(){
    return{
      visible:false,
      value: false,
      value1:'',
      num:1,
      titleHighlight:0,
      titleBorder:0,
      openStopRadio: '1',
      iconColor:true,
      input3:'',
      input:'',
      accountOuterVisible: false,
      accountInnerVisible: false,
      dialogFormVisible:false,
      openVisible:false,
      stopVisible:false,
      newBoundOuterVisible: false,
      newBoundInnerVisible: false,
      innerTitle:'',
      outTitle:'',
      boundOutTitle:'',
      BoundInnerTitle:'',
      boundButtomSet:'',
      outNume:'',
      my:'2',
      show:false,
      valvalue:'',
      titleDisabled:true,
      retreatTypeRadio:'1',
      retreatTimeRadio:'3',
      retreatMoney:'',
      rechargeMoney:'',
      rechargePayRadio:'2',
      rechargePayName:'',
      // OPenStopstate:'',
      newBoundSelect:'',
      newBoundSearch:'',
      disabledPopoverOpen:true,
      disabledPopoverStop:true,
      mac:false,
      macmac:false,
      titleData:[
        {
          name:'储蓄账户',
          money:'5000.00',
          avail:'可用金额',
          imgUrl: openIcon,
          titleDisabled:false
        },{
          name:'储蓄账户',
          money:'5000.00',
          avail:'可用金额',
          imgUrl: stopIcon,
          titleDisabled:true
        },{
          name:'储蓄账户',
          money:'5000.00',
          avail:'可用金额',
          imgUrl: openIcon,
          titleDisabled:true
        }
      ],
      tabContents: ["馨厨S系列","内容二","内容三"],
      tableData: [
        {
          one:'1111',
          two:'1111',
          three:'1111',
          five:'1111',
          six:'1111',
          frou:'1111'
        },
        {
          one:'22',
          two:'22',
          three:'22',
          five:'22',
          six:'22',
          frou:'22'
        }
      ],
      tableNameData:[
        {
          prop:'one',
          label:'介质号码',
        },
        {
          prop:'two',
          label:'介质所属人',
        },
        {
          prop:'three',
          label:'授权金额(¥)'
        },
        {
          prop:'frou',
          label:'可用金额(¥)'
        },
        {
          prop:'five',
          label:'累计消费金额(¥)'
        },
        {
          prop:'six',
          label:'失效日期'
        }
      ],
      tradeInformationData:[
        {
          prop:'one',
          label:'凭证号',
        },
        {
          prop:'two',
          label:'交易类型',
        },
        {
          prop:'three',
          label:'交易金额'
        },
        {
          prop:'frou',
          label:'操作人'
        },
        {
          prop:'five',
          label:'操作日期'
        },
        {
          prop:'six',
          label:'三方交易号'
        },
        {
          prop:'six',
          label:'备注'
        }
      ],
      tableData: [
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }
      ],
      rechargePayRadioData: [
        {
          name:'现金',
          describe:'现金支付',
          label:'1',
          'rechargePayImg':require('../assets/现金支付 .svg')
        },
        {
          name:'银联',
          describe:'银联支付',
          label:'2',
          'rechargePayImg':require('../assets/银联支付.svg')
        },
        {
          name:'微信',
          describe:'微信支付',
          label:'3',
          'rechargePayImg':require('../assets/微信支付.svg')
        },
        {
          name:'支付宝',
          describe:'支付宝支付',
          label:'4',
          'rechargePayImg':require('../assets/支付宝支付.svg')
        },
        {
          name:'云支付',
          describe:'云支付',
          label:'5',
          'rechargePayImg':require('../assets/云支付.svg')
        }
      ],
    }
  },
  components: { // 声明子组件
  // Text,
  Home,
  About
 },
 created(){
  this.handleOpenRadio()
 },
  methods:{
    handleOpenStop(index){
      const test = 1
      if(test === 2){
        this.titleData[index].imgUrl = stopIcon
      }else {
        this.titleData[index].imgUrl  = openIcon
      }
    },
    handleToggleTab(titleData,index) {
      this.num = index
      this.titleHighlight = index
      this.titleBorder = index
      if(this.num !== 0){
        console.log('不等于1');
      }
      console.log(titleData,index);
    },
    handleSet(row){

      console.log(row);
    },
    handlePrinter(title){
      console.log(title);
    },
    handleSearch(){
      console.log('handleSearch');
    },
    handleAccountbut(title){
      if(title === '退卡'){
        this.outTitle = '账户退卡'
        this.outNume = '立即退卡'
        this.innerTitle = '确认退卡金额'
      }else{
        this.outTitle = '账户充值'
        this.outNume = '立即充值'
        this.innerTitle = '确认充值金额'
      }
      this.accountOuterVisible = true
      console.log(title)
    },
    formatter(row, column) {
      return row.address;
    },
    handleretreatTypeRadio(title){
      if(title === '红冲'){
        console.log('红冲');
      } else {
        console.log('退款');
      }
    },
    handlereChargePayRadio(rechargePayRadioData,index){
      this.rechargePayName = rechargePayRadioData[index].name
      console.log(this.rechargePayName,'3333');
    },
    handleNewMedium(){
      this.dialogFormVisible = true
      console.log('handleNewMedium');
    },
    handleBlur(val){
        if(/[^\d]/.test(this.rechargeMoney) || this.rechargeMoney ==='' ) {
          this.$message({
          type: 'warning',
          message: '请输入数字'
        })
        } else {
        this.accountInnerVisible = true
        }
    },
    handleOuterVisible (){
      this.accountInnerVisible =  true
    },
    handleInnerVisible(){
        this.accountInnerVisible = true
      // if(this.rechargeMoney ===''){
      //   this.$message({
      //     type: 'warning',
      //     message: '请输入交易金额'
      //   })
      // }
      this.handleBlur()
    },
    handleOpenRadio() {
      this.mac = true
      this.openStopRadio = '1'
      this.macmac = false
      this.disabledPopoverStop =  false

      this.disabledPopoverOpen =  true
      this.visible = false
    },
    handleStopRadio() {
      this.mac = false
      this.openStopRadio = '2'
      this.macmac = true
      this.disabledPopoverStop =  true
      this.disabledPopoverOpen =  false
      this.visible = false
    },
    handleNewBoundSearch(val){
      this.valvalue = 1
      console.log(val);
    },
    handleNewBound(){
      this.dialogFormVisible = false
    },
    handleNewouterVisible(title,index,row){
      console.log(title,index,row,1111);
      if(title === '新增') {
        this.BoundInnerTitle = '确认绑定介质信息'
        this.boundOutTitle =  '新增介质绑定 '
        this.boundButtomSet = '立即绑定'
        console.log('新增');
      } else {
        this.BoundInnerTitle = '确认修改绑定介质信息'
        this.boundOutTitle =  '修改介质绑定'
        this.boundButtomSet = '立即修改'
        console.log('修改');
      }
      this.newBoundOuterVisible = true
    },
    handleRadioChange(row){
      console.log(row);
      this.retreatTimeRadio = this.tableData.indexOf(row)
    },
    // 介质绑定列表使用状态停用启用
    hadleChangeSet(index,row){
      console.log(row,index);
    },
    // 介质绑定列表使用状态下拉框点击切换状态
    handleCommand(command){
      console.log(command);
    },
    nuo(val){
      console.log(val,'hahahahahaha')
      
    }
  }
}
</script>
<style lang="scss" scoped>
.iconColor {
  color:$mainBule !important;
}
.box {
  .box1 {
    >ul {
      padding-left: 15px;
    }
    span{
      color:$sizeColor;
    }
  }
  .box2 {
    .naozi {
      span {
        width: 200px;
        display: inline-block;
      }
    }
    .importtt {
      /deep/.el-input {
      width: 110px;
      height: 32px;
      line-height: 32px;
      /deep/.el-input__inner {
        width: 110px;
        height: 33px;
        line-height: 32px;
      }
    }
    }
      /deep/.el-input__icon {
        line-height: 34px;
      }
  }
  .box3 {
    .el-input {
      width: 240px;
      /deep/.el-input__inner {
        height: 30px;
        line-height: 30px;
      }
    }
    
  }
  i {
    // font-size: 24px;
    display: inline-block;
    padding: 0 10px;
  }
  h2 {
    font-size: 18px;
    font-weight: 400;
    padding-left: 15px;
    background:url('../assets/分隔符.svg') no-repeat 0 5px;
  }
  >ul{
    border-bottom: 1px solid #D5D5D5;
  }
  .set_button {
    li {
      span {
        display: inline-block;
        width: 130px;
      }
      padding-bottom: 10px;
    }
    .line {
      border-top: 1px dashed #D5D5D5;
      margin: 20px 0 27px 0 ;
    }
    .ha {
      width: 50%;
    }
    /deep/.el-input {
      width: 280px;
      /deep/.el-input__inner {
        height: 33px;
        line-height: 32px;
      }
    }
  }
  .titleHighlight {
    border-top: 5px solid $mainBule;
    border-radius: 8px;
    color:$mainBule;
  }
  .titleBorder {
    border-bottom: 1px solid #fff;
  }
.switch_style{
  .el-switch  {
    height: 22px;
  }
  /deep/.el-switch__label--left{
    position: relative;
    left: 60px;
    color: #fff;
    z-index: -1111;
  }
  /deep/.el-switch__label--right{
    position: relative;
    right: 60px;
    color: #fff;
    z-index: -1111;
  }
  /deep/.el-switch__label.is-active{
    z-index: 1111;
    color: #fff;
  }
  /deep/.el-switch__label--left{
    position: relative;
    left: 60px;
    color: #fff;
    z-index: -1111;
  }
  /deep/.el-switch__label--right{
    position: relative;
    right: 60px;
    color: #fff;
    z-index: -1111;
  }
  /deep/.el-switch__label--right.is-active{
    z-index: 1111;
    color: #fff !important;
  }
  /deep/.el-switch__label--left.is-active{
    z-index: 1111;
    color: #fff !important;
  }
  /deep/.el-switch.is-checked .el-switch__core {
    border-color: #666;
    background-color: #666;
  }
}
}
.out-dialog-style {
  /deep/.el-dialog__header{
  height: 55px;
  // color:24px;
  font-weight: 700;
  background: #E0E5F4;
  }
  /deep/.el-dialog__body {
    padding-top: 15px;
  }
}
.inner-dialog-style{
  /deep/.el-dialog__header{
    padding: 0;
    padding: 26px 0 0 30px;
  }
  /deep/.el-dialog__body {
    margin-top: 20px;
    padding: 0 65px;
    li {
      span {
        color: $sizeColor;
        font-size: 14px;
        display: inline-block;
        width: 150px;
      }
      padding-bottom: 10px;
    }
    
  }
  /deep/.dialog-footer {
    padding-top: 15px
  }
}
.cancel-button {
    width: 84px;
    padding: 10px;
    color:$sizeColor;
    border-radius: 100px;
}
.affirm-button {
    min-width: 84px;
    color: #fff;
    font-size: 16px;
    border-radius: 100px;
    padding: 10px;
    background-color: $mainBule;
}
  /deep/.el-switch.is-checked .el-switch__core{
    border-color: #5A7BEF;
    background-color: #5A7BEF;
  }
  /deep/.el-switch__core{
    width: 60px;
    padding: 0px 24px;
  }
  .el-table th div  {
    line-height: 0;
  }
</style>