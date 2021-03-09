<template>
  <div>
    223322
  <!-- <my-component></my-component> -->
    YesOrNo: 

    <h5>数据长度：{{list.length}}</h5>
    <el-select class="remoteSelect" v-scroll="handleScroll" v-model="list.csName">
      <el-option :value="item.csId" v-for="item in list" :key="item.csId">{{item.csName}}</el-option>
    </el-select>
    <!-- <header> -->
      <!-- Hacker News header -->
      <!-- <select v-model="newsType" @change="changeType"> -->
        <!-- Type options -->
      <!-- </select> -->
    <!-- </header> -->
    <!-- <infinite-loading direction="top" @infinite="infiniteHandler"></infinite-loading>
    <div v-for="(item, $index) in list" :key="$index"> -->
      <!-- Hacker News item loop -->
    <!-- </div> -->
    <!-- <infinite-loading @infinite="infiniteHandler"></infinite-loading> -->
  </div>
</template>

<script type="text/ecmascript-6">
// import YesOrNoSelect from '../vue-compoent/YesOrNoSelect'
import {ARTICLE,COMMENT} from '../../api/text.js'
import axios from 'axios';

const api = 'api/v1/billing_strategy/cs_x_billing_strategy/query/by_hospital_soids';


export default {
  data(){
    return{
      page: 1,
      list:[]
      // newsType: 'story',
      // infiniteId: +new Date(),
    }
  },
  created(){
    this.articleLoad()
    this.handle()
    // this.handleScroll()
    this.list = this.ajaxData(this.pageIndex)
  },
  methods:{
     handleScroll (param) {
      if (param) {
        console.log(param,'paramparamparam');
        // 请求下一页的数据
        this.list.push(...this.ajaxData(++this.pageIndex))
      }
    },
    ajaxData (pageIndex) {
      // 每页数量
      let pageSize = 100
      let list = []
      for (let i = pageSize * (pageIndex - 1); i < pageSize * pageIndex; i++) {
        list.push({
          name: `这是一条测试数据 代号：${i}`,
          id: i
        })
      }
      return list
    },


    infiniteHandler($state) {
      axios.get(api, {
        params: {
          page: this.page,
          // tags: this.newsType,
          hospitalSoid:11
        },
        
      }).then(({ data }) => {
        console.log(api,'apiapiapiapiapia');
        
        if (data.hits.length) {
          this.page += 1;

          this.list.unshift(...data.hits.reverse());
          // this.list.push(...data.hits);
          $state.loaded();
        } else {
          $state.complete();
        }
      });
    },
    changeType() {
      this.page = 1;
      this.list = [];
      this.infiniteId += 1;
    },
    async articleLoad(){     
      let user_article = await COMMENT()
      console.log(user_article,'hahahhahahahahahahah')
    },
    async handle(){
      const params = {
        hospitalSoid:11
      } 
      let a = await ARTICLE(params)
      this.list = a.data.data
      console.log(a ,'nsihahfdhcjkhjk')
      }
  }
}

</script>
<style lang='scss' scoped>

</style>