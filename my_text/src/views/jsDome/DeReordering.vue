<template>
  <div>
      数组去重
      <p>{{list}}</p>
      拓展，合并数组之后去重
      数组排序
      <p>{{list}}</p>
      数组的sort()和reverse()方法
  </div>
</template>

<script>
export default {
  data(){
    return{
      list:[1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}],
      arr:[23,423,634,1,423,4536,3,4,11,78]
    }
  },
  created(){
    this.quickSort() // 快速排序
    // this.bubbleSort()  // 冒泡排序
    // this.sort() // sort(排序) 和 reverse(倒序)
    // this.Set()
    // this.indexOf()
    // this.filter()
    // this.Map()
    // this.recursion()
    // this.reduceIncludes()
    // this.concatArr()
  },
  methods:{
    // sort(排序) 和 reverse(倒序)
    sort(){
      var numbers = [43, 324, 45, 13, 34]; 
      console.log(numbers.sort()); // [13, 324, 34, 43, 45]
      // 上面的代码可以看到，如果数组元素为数字的话，排序并不会按大小顺序排，而是会按数字的第一个字符排序

      numbers.sort((a, b) => a - b); 
      console.log(numbers); // [13, 34, 43, 45, 324]
      // 如果我们想要这组数字按从小到大，或者从大到小的顺序排列的话，那么我们就需要传入参数sortby

      numbers.reverse(); 
      console.log(numbers); // [324, 45, 43, 34, 13]
      // 这个方法用于颠倒数组中元素的顺序。这里要注意，只是颠倒，并不是按从大到小的顺序
    },
    // 冒泡排序
    bubbleSort (arr) {
      arr = [23,423,634,1,423,4536,3,4,11,78]
      for(var i = 0; i < arr.length; i++) {
        for(var j = 0; j < arr.length; j++) {
          if(arr[i] < arr[j]) {
            var temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
          }
        }
      }
      console.log(arr); // [1, 3, 4, 11, 23, 78, 423, 423, 634, 4536]
      // 上面的代码就是一个很好理解的冒泡排序写法，采用两个for循环，当i=0的时候，将arr[0]与数组里面的每一项比较，如果arr[0]小于某一项，则替换它们的位置，以此类推。
    },
    // 快速排序
    // 插入排序
    // 希尔排序
    // 数组去重
    Set (arr) {
      // 利用Array.from将Set结构转换成数组
      arr = this.list
      const a = Array.from(new Set(arr))  // 利用ES6 Set去重
      // 拓展运算符(...)内部使用for...of循环
      const resultarr = [...new Set(arr)]; // S6 Set去重 简化
      console.log(a,resultarr); //[1,2,3]
    },
    indexOf () {
      function unique(arr) {
        if (!Array.isArray(arr)) {
          console.log('type error!')
          return
        }
        var array = [];
        for (var i = 0; i < arr.length; i++) {
          if (array .indexOf(arr[i]) === -1) {
              array .push(arr[i])
          }
        }
        return array;
      }
      var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
      console.log(unique(arr))
    },
    filter() {
      function unique(arr) {
        return arr.filter(function(item, index, arr) {
          //当前元素，在原始数组中的第一个索引==当前索引值，否则返回当前元素
          return arr.indexOf(item, 0) === index;
        });
      }
      var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
      console.log(unique(arr))
    },
    Map() {
      function arrayNonRepeatfy(arr) {
        let map = new Map();
        let array = new Array();  // 数组用于返回结果
        for (let i = 0; i < arr.length; i++) {
          if(map .has(arr[i])) {  // 如果有该key值
            map .set(arr[i], true); 
          } else { 
            map .set(arr[i], false);   // 如果没有该key值
            array .push(arr[i]);
          }
        } 
        return array ;
      }
      var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
      console.log(arrayNonRepeatfy(arr))
    },
    recursion () {
      function unique(arr) {
        var array= arr;
        var len = array.length;
        array.sort(function(a,b){   //排序后更加方便去重
            return a - b;
        })

        function loop(index){
            if(index >= 1){
                if(array[index] === array[index-1]){
                    array.splice(index,1);
                }
                loop(index - 1);    //递归loop，然后数组去重
            }
        }
        loop(len-1);
        return array;
      }
      var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
      console.log(unique(arr))
    },
    reduceIncludes () {
      function unique(arr){
          return arr.reduce((prev,cur) => prev.includes(cur) ? prev : [...prev,cur],[]);
      }
      var arr = [1,1,'true','true',true,true,15,15,false,false, undefined,undefined, null,null, NaN, NaN,'NaN', 0, 0, 'a', 'a',{},{}];
      console.log(unique(arr));
    },
    // 数组合并之后再去重
    concatArr(arr1, arr2){
      arr1 = [1, 2, 3, 4, 5];
      arr2 = [4, 5, 6];
      const r = 1
      if(r !== 1){
        // 使用 arr1.concat(arr2)
        var arr = arr1.concat(arr2);
        const arrr = [...new Set(arr)]
        console.log(arrr);
      } else {
        // 使用 Array.prototype.push.apply(arr1, arr2)
        Array.prototype.push.apply(arr1, arr2);//a=[1,2,3,4,5,6]
        console.log(arr1);
        const arrr = [...new Set(arr1, arr2)]
        console.log(arrr,'arr1, arr2');
      }
    }
  }
}
</script>
<style lang='scss' scoped>

</style>