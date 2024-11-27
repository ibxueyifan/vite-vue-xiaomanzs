<template>
    <div class=''>
        <h1>watch</h1>

        <h2>
            case1: <input type="text" v-model="msg">
        </h2>
        <h2>
            case2: <input type="text" v-model="msg2">
        </h2>
        <h2>
            case3: <input type="text" v-model="msg3.foo.bar.name">
        </h2>
    </div>
</template>

<script setup lang='ts'>
import { reactive, ref, watch } from 'vue';
let msg = ref('hello');
let msg2 = ref('world');
let msg3 = reactive({
    foo: {
        bar: {
            name: '张三'
        }
    }
})
watch([msg, msg2], (newVal, oldVal) => {
    console.log(newVal, oldVal);
});
// ref + deep  可监听  但新旧值一样
// watch(msg3, (newVal, oldVal) => {
//     console.log(newVal, oldVal);
// }, {
//     deep: true
// });


// reactive  可直接监听整个对象  msg3  也可以监听一个属性 ()=>msg3.foo.bar.name
// reactive 默认开启deep 
watch(() => msg3.foo.bar.name, (newVal, oldVal) => {
    console.log(newVal, oldVal);
}, {
    // deep: true,
    // immediate: true,
    // flush 控制回调函数的执行时机   pre 组件更新之前调用  post 组件更新之后调用  sync 同步执行
    flush: 'post'
});
</script>

<style scoped lang='scss'></style>