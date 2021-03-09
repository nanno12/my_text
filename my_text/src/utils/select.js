import Vue from 'vue'
export default () => {
  Vue.directive('scroll', {
    bind (el, binding) {
      // 获取滚动页面DOM
      let SCROLL_DOM = el.querySelector('.el-select-dropdown .el-select-dropdown__wrap')
      SCROLL_DOM.addEventListener('scroll', function () {
        console.log('scrll')
      })
    }
  })
}