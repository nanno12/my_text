<template>
  <div>
    <el-tabs @tab-click="handleTabsTitle" v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
      <el-tab-pane
        :key="item.name"
        v-for="item in editableTabs"
        :label="item.num + `-` + item.num1"
        :name="item.name">
        <ul>
          <li>
            <span>填写区间</span>
            <el-input-number v-model="item.num"
              controls-position="right"
              @change="handleChange"
              :min="1" :max="10">
            </el-input-number>
            <span>至</span>
            <el-input-number v-model="item.num1"
              controls-position="right"
              @change="handleChange"
              :min="1" :max="10">
            </el-input-number>
          </li>
          <li class="block">
            <span>收费项目</span>
            <div v-for="(item,index) in editableTabs[tabsTitleIndex].items"
              :key="index">
              333
              <el-select v-model="value" filterable placeholder="请选择">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
                </el-option>
              </el-select>
              <!-- <el-input-number v-model="item.num"
                controls-position="right"
                @change="handleChange"
                :min="1" :max="10">
              </el-input-number> -->
              <span @click="handleAddRemove('remove',index)">-</span>
            </div>
            <span @click="handleAddRemove('add')">
              +
            </span>
          </li>
        </ul>
        <!-- {{item.content}} -->
      </el-tab-pane>
    </el-tabs>
      <!-- <h1>buttom 样式</h1>
      <ul>
        <li><button>主按钮</button></li>
        <li><button></button></li>
        <li><button></button></li>
        <li><button></button></li>
        <li><button></button></li>
      </ul>
      <div class="bg-co_555 h_100 w_100 po_re " >
        <ul class="en">
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
          <li>111111</li>
        </ul>
        <div class="haha">
          2222
        </div>
      </div> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      tabsTitleIndex:0, //点击tabs标签标题获取到标前index下表
      options: [{
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }],
        value: '',
        num:'',
        editableTabsValue: '1',
        editableTabs: [{
          title: '设置区间',
          name: '1',
          num: '',
          num1: '',
          items:[{name:1}]
        }],
        tabIndex: 1
    }
  },
  created(){
    console.log(this.editableTabs);
  },
  methods:{
    // 收费项目的新增删除按钮
    handleAddRemove (title,index) {
      console.log(this.editableTabs[this.tabsTitleIndex].items);
      if (title === 'remove') {
        console.log('remove');
        this.editableTabs[this.tabsTitleIndex].items.splice(index, 1)
      } else {
        console.log('add');
        this.editableTabs[this.tabsTitleIndex].items.push({
          endAt: '2099-12-31 00:00:00',
        })
      }
    },
    // 点击tabs标签标题
    handleTabsTitle (val) {
      this.tabsTitleIndex = val.index // 点击tabs标签标题获取到标前index下表
      console.log(this.tabsTitleIndex ,val,'index', this.tabIndex);
    },
    // tabs标题 判断是新增还是删除的方法
    handleTabsEdit(targetName, action) {
      console.log(action,this.editableTabs);
        if (action === 'add') {
          let newTabName = ++this.tabIndex + '';
          this.editableTabs.push({
            title: '设置区间',
            name: newTabName,
            num: '',
            num1: '',
            items:['2222']
          });
          this.editableTabsValue = newTabName;
        }
        console.log(this.tabIndex);
        if (action === 'remove') {
          let tabs = this.editableTabs;
          let activeName = this.editableTabsValue;
          if (activeName === targetName) {
            tabs.forEach((tab, index) => {
              if (tab.name === targetName) {
                let nextTab = tabs[index + 1] || tabs[index - 1];
                if (nextTab) {
                  activeName = nextTab.name;
                }
              }
            });
          }
          this.editableTabsValue = activeName;
          this.editableTabs = tabs.filter(tab => tab.name !== targetName);
        }
    },
    handleChange(value) {},
  }
}

</script>
<style lang='scss' scoped>
.en {
  display: none;
}
.haha {
  position: absolute;
  bottom: 0;
  left: 0;
}
li {
  margin-right: 20px;
  display: inline-block;
}
button{
  width: 88px;
  height: 32px;
  padding: 0 16px;
  line-height: 32px;
  text-align: center;
  background-color: $mainBule;
  border-radius: 4px;
  color: #fff;
}
button:hover {
  background-color: #597EF7 ;
}

</style>