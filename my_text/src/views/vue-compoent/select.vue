<template>
  <div>
    <p>无限下拉框数据滚动</p>
    <ul class="news">
      <li class="news__item" v-for="(news, index) in newslist" :key="index">
        {{index}}-{{news.title}}
      </li>
    </ul>
    <el-select class="remoteSelect" v-scroll v-model="value">
      <el-option :value="item.id" v-for="item in list" :key="item.id">{{item.name}}</el-option>
    </el-select>

  </div>
</template>
 
<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      newslist: [
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'},
          {title: 'hello world'}
        ]
    };
  },
  directives: {
  scroll: {
    bind: function (el, binding){
      window.addEventListener('scroll', ()=> {
        if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {
          console.log('load data');
        }
      })
    }
  }
},
  methods: {
    loadMore() {
    let newAry = [];
    for(let i = 0; i < 10; i++) {
      newAry.push({title: 'hello world'})
    }
    this.newslist = [...this.newslist, ...newAry];
  },
//   window.addEventListener('scroll', ()=> { 
//   if(document.body.scrollTop + window.innerHeight >= el.clientHeight) {   
//     let fnc = binding.value;   
//     fnc(); 
//   }
// })
    // getInitialUsers() {
    //   for (var i = 0; i < 5; i++) {
    //     this.$ajax.get(`https://randomuser.me/api/`).then(response => {
    //       console.log(response);
    //       this.persons.push(response.data.results[0]);
    //     });
    //   }
    // },
    // scroll(person) {
    //   window.onscroll = () => {
    //     let bottomwindow =
    //       document.documentElement.scrollTop + window.innerHeight ===
    //       document.documentElement.offsetHeight; //scrollTop滚动条的垂直位置，innerheight	返回窗口的文档显示区的高度。
    //     console.log(bottomwindow);
    //     console.log(document.documentElement.offsetHeight); //返回该元素的像素高度,高度包含该元素的垂直内边距和边框,且是一个整数
 
    //     if (bottomwindow) {
    //       //如果滚动最底部就变为true
    //       this.$ajax.get(`https://randomuser.me/api/`).then(response => {
    //         console.log(response);
    //         this.persons.push(response.data.results[0]);
    //       });
    //     }
    //   };
    // }
  },
  beforeMount() {
    this.getInitialUsers();
  },
  mounted() {
    this.scroll(this.person);
  }
};
</script>
 
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.person {
  background: #ccc;
  border-radius: 2px;
  width: 20%;
  margin: 0 auto 15px auto;
  padding: 15px;
 
  img {
    width: 100%;
    height: auto;
    border-radius: 2px;
  }
 
  p:first-child {
    text-transform: capitalize;
    font-size: 2rem;
    font-weight: 900;
  }
 
  .text-capitalize {
    text-transform: capitalize;
  }
}


</style>