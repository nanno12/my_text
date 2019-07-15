<template>
  <div>
    <el-table
      :data="tableData"
      @row-click="handleRowTable"
      border>
      <el-table-column
        prop="date"
        label="日期">
      </el-table-column>
      <el-table-column
        prop="name"
        label="姓名">
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址">
      </el-table-column>
    </el-table>
    <el-pagination
      class=""
      background
      layout="total,prev, pager, next,sizes,jumper"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="defaultPage.currentPage"
      :page-sizes="defaultPage.pageSizes"
      :page-size="defaultPage.pageSize"
      :total="defaultPage.totalNumber">
    </el-pagination>
  </div>
</template>
<script>
import { defaultPage } from '@/utils/default'
import axios from 'axios'
  export default {
    data() {
      return {
        defaultPage,
        tableData: [
          {
            date: '2016-05-02',
            name: '王小虎1',
            address: '上海市普陀区金沙江路 1518 弄'
          }, {
            date: '2016-05-04',
            name: '王小虎2',
            address: '上海市普陀区金沙江路 1517 弄'
          }, {
            date: '2016-05-01',
            name: '王小虎3',
            address: '上海市普陀区金沙江路 1519 弄'
          }, {
            date: '2016-05-03',
            name: '王小虎4',
            address: '上海市普陀区金沙江路 1516 弄'
          }
        ]
      }
    },
  created () {
    this.queryChargeItemsList()
  },
  methods: {
    async queryChargeItemsList () {
      const params = {
        soid: [11],
        pageNo: this.defaultPage.currentPage,
        pageSize: this.defaultPage.pageSize,
        pageType: 'p',
        keyWord: this.searchKeyWord,
        searchMode: this.selectSearchType
      }
      // 请求接口
      // const data = await this.$store.dispatch('finance/queryChargeItemsList', params)
      // console.log('成功？', data);
      
      // const res = await this.$http(this.api.queryChargeItemsList).then(res => {
      //   console.log(res,'成功')
      // })

      // this.$http.Post(this.api.user_list).then(res => {
      //         console.log(res)
      //       })

      // this.$http(this.api.user_list).then(res => {
      //   console.log(res,'成功')
      // })
      // if (data.success) {
      //   this.tableListDate = data.data
      // } else {
      //   this.$message({
      //     message: '查询收费项目列表失败了！' + data.errorDetail.message,
      //     type: 'warning'
      //   })
      // }
    },
   
    handleRowTable(params){
      console.log(params);
      this.$parent.handleRowTable(params)
    },
    handleSizeChange (val) {
      this.pageSize = val
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      this.currentPage = val
      console.log(`当前页: ${val}`)
    }
    
  },
  }
</script>
<style lang="scss" scoped>
  
</style>