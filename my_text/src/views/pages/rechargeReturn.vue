<template>
  <div class="pd_30 bg-co_f8">
    <ul>
      <li class="account-information">
        <span>账户编号：</span><em class="ft_14">234342442</em>
        <span>可用余额：</span><em style="color:#2AC03D">￥18521410882</em>
        <div class="inline-block" v-if="dealType ==='1'">
          <span>待缴费金额：</span><em>￥3232</em>
          <span>建议充值金额：</span><em style="color:#FFBB32">￥24124</em>
        </div>
      </li>
      <li>
        <span>交易类型</span>
        <el-radio-group v-model="dealType" @change="handledealType">
          <el-radio :label="item.label"
            class="pd-right_36"
            v-for="(item,index) in dealTypeData"
            :key="index">{{item.name}}</el-radio>
        </el-radio-group>
      </li>
      <li v-if="dealType ==='2'" class="block">
        <el-table
          class="mg-left_100"
          :data="tableData"
          @row-click="handleRadioChange">
          <el-table-column 
            width="60"
            align="center">
            <template slot-scope="scope">
              <el-radio v-model="radio" 
                @change.native="handlenuozi(scope.$index,scope.row)"
                :label="scope.$index"></el-radio>
            </template>
          </el-table-column>
          <el-table-column
            prop="date"
            align="center"
            label="交易时间"
            width="180">
          </el-table-column>
          <el-table-column
            prop="name"
            align="right"
            header-align="center"
            label="交易金额"
            width="200">
            <template slot-scope="scope">
              <img :src="scope.row.rechargePayImg">
              {{scope.row.name}}
            </template>
          </el-table-column>
          <el-table-column
            prop="address"
            sortable
            align="right"
            width="120"
            label="可退金额">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="操作人">
          </el-table-column>
          <el-table-column
            prop="address"
            align="center"
            label="三方交易号">
          </el-table-column>
        </el-table>
      </li>
      <li class="block">
        <span>交易金额</span>
        <el-input v-model="input" @change="handleChangeVule" v-if="dealType !=='2'" placeholder="请输入内容"></el-input>
        <em v-else>{{name}}</em>
      </li>
      <li>
        <span>支付方式</span>
        <el-radio-group v-if="dealType ==='1'" v-model="rechargePayRadio">
          <el-radio
            class="pd-right_40 "
            @change="handlereChargePayRadio(rechargePayRadioData,index)"
            v-for="(item,index) in rechargePayRadioData"
            :key="index"
            :label="item.label">
              <img :src="item.rechargePayImg" :alt="item.describe">{{item.name}}
          </el-radio>
        </el-radio-group>
        <em v-else>现金</em>
      </li>
    </ul>
    <el-button class="mg-top_30 mg-left_100 rds_100 strong co_fff bg-co_mainBule" @click="handleButVisible(buttonName)">{{buttonName}}</el-button>
    <el-dialog :title="dialogTitle" width="20%" class="inner-dialog-style" :visible.sync="dialogButVisible">
      <ul>
        <li class="ft_32 strong">￥{{name}}</li>
        <li><span>支付方式</span>{{}}</li>
      </ul>
      <div slot="footer" class="dialog-footer">
        <el-button class="cancel-button" @click="dialogButVisible = false">取 消</el-button>
        <el-button class="affirm-button" type="primary" @click="handleConfirmVisible">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        dealType: '1',
        input: '',
        radio:'',
        name:'',
        rechargePayRadio:'1',
        buttonName:'立即充值',
        dialogTitle:'',
        changeVule:'',
        dialogButVisible: false,
        dealTypeData:[
          {
            name:'现金',
            label: '1'
          },
          {
            name:'红冲',
            label: '2'
          },
          {
            name:'退款',
            label: '3'
          }
        ],
        rechargePayRadioData: [
          {
            name:'现金',
            describe:'现金支付',
            label:'1',
            'rechargePayImg':require('../../assets/现金支付 .svg')
          },
          {
            name:'银联',
            describe:'银联支付',
            label:'2',
            'rechargePayImg':require('../../assets/银联支付.svg')
          },
          {
            name:'微信',
            describe:'微信支付',
            label:'3',
            'rechargePayImg':require('../../assets/微信支付.svg')
          },
          {
            name:'支付宝',
            describe:'支付宝支付',
            label:'4',
            'rechargePayImg':require('../../assets/支付宝支付.svg')
          },
          {
            name:'云支付',
            describe:'云支付',
            label:'5',
            'rechargePayImg':require('../../assets/云支付.svg')
          }
        ],
        tableData: [
          {
            date: '2016-05-02',
            name: '322.33',
            address: '322.331',
            'rechargePayImg':require('../../assets/现金支付 .svg')
          }, {
            date: '2016-05-04',
            name: '100.0',
            address: '1517.00',
            'rechargePayImg':require('../../assets/支付宝支付.svg')
          }, {
            date: '2016-05-01',
            name: '30000.00',
            address: '151.9',
            'rechargePayImg':require('../../assets/云支付.svg')
          }, {
            date: '2016-05-03',
            name: '440',
            address: '100.00',
            'rechargePayImg':require('../../assets/银联支付.svg')
          }
        ]
      }
    },
    methods:{
      handledealType(val){
        this.dealType = val
        if(val === '1'){

          console.log('现金');
        } else if (val === '2') {
          console.log('红冲');
        } else {
          console.log('退款');
        }
        if(val !== '1'){
          this.buttonName = '立即退卡'       
        } else {
          this.buttonName = '立即充值'       
        }
        console.log(val,this.changeVule);
      },
      handleChangeVule(val) {
         this.name = this.input
        this.changeVule = val
        console.log(this.input,this.dealType,val);
      },
      handlereChargePayRadio(rechargePayRadioData,index){
        this.rechargePayName = rechargePayRadioData[index].name
        console.log(this.rechargePayName,'3333');
      },
      handleButVisible(buttonName){
        if(buttonName !=='立即充值'){
          if (this.dealType === '2') {
            console.log('hongchong');
          } else {
            console.log('tuikuang');
          }
            this.dialogTitle = '确认退款金额'
          console.log('退款');
        } else {
            this.dialogTitle = '确认充值金额'
          console.log('充值');
        }
        this.dialogButVisible = true
      },
      handleConfirmVisible(){
        this.input = ''
        this.name =''
        this.dialogButVisible = false
        console.log('确定按钮');
      },
      handlenuozi(val){
        console.log(val);
      },
      handleRadioChange(row){
        console.log(row.name);
        this.radio = this.tableData.indexOf(row)
        this.name = row.name
      }
    }
  }
</script>
<style lang="scss" scoped>
div  {
  .account-information {
    span {
      display: inline-block;
      margin-right: 0px;
    }
    em {
      display: inline-block;
      margin-right: 40px;
      font-size: 20px;
      font-weight: 700;
    }
    // em:nth-child(4) {
    //   font-size: 18px;
    // }
    // em:nth-child(odd) {
    //   font-size: 18px;
    //   color:#000;
    // }
    // em:nth-child(4) {
    //   font-size: 18px;
    //   color:#FFBB32;
    // }
  }
  ul {
    list-style: none;
    padding-left: 0;
    li {
      span {
        color: #6C7B8A;
        margin-right: 40px;
      }
      padding-bottom: 22px;
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
  .inner-dialog-style {
    /deep/.el-dialog__header{
      padding: 0;
      padding: 26px 0 0 30px;
    }
    /deep/.el-dialog__body {
      margin-top: 20px;
      padding: 0 65px;
      li {
        padding-bottom: 15px;
      }
    }
  }
}
.el-table {
  width: auto;
}
.el-input,
/deep/.el-input__inner{
  width: 210px;
  height: 32px;
  line-height: 32px;
}
</style>