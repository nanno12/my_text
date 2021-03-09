<template>
  <div style="height:2000px">
    <p v-tack>I will now be tacked onto the page</p>
    <div v-demo:foo.a.b="message"></div>
    <div>
      <h3>Scroll down inside this section ↓</h3>
      <p v-pin:[direction]="200">Stick me 200px from the top of the page</p>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
       message: 'hello!',
       direction: 'left'
    }
  },
  created(){
  },
  methods:{
  },
  directives: {              //这里是自定义指令
    pin: {             
      bind(el,binding,vnode) {   
        el.style.position = 'fixed'
        var s = (binding.arg == 'left' ? 'left' : 'top')
        console.log(binding,s);
        el.style[s] = binding.value + 'px'
      }
    },
    demo: {
      bind(el, binding, vnode) {
      var s = JSON.stringify
      el.innerHTML =
        'name: '       + s(binding.name) + '<br>' +
        'value: '      + s(binding.value) + '<br>' +
        'expression: ' + s(binding.expression) + '<br>' +
        'argument: '   + s(binding.arg) + '<br>' +
        'modifiers: '  + s(binding.modifiers) + '<br>' +
        'vnode keys: ' + Object.keys(vnode).join(', ')
      }
    }
  }
}
</script>
<style lang='scss' scoped>

</style>>
