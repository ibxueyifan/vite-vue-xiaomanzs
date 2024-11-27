<template>
    <div class=''>
        <h1>watchEffect</h1>
        <h2><input type="text" v-model="msg" ref="ipt" id="ipt"></h2>
        <h2><input type="text" v-model="msg2"></h2>
        <button @click="stop">停止监听</button>
    </div>
</template>

<script setup lang='ts'>
import { ref, watchEffect } from 'vue';
let msg = ref('hello');
let msg2 = ref('world');
// watchEffect 使用到的响应式数据 会自动监听  默认会加载一次
//  cb 回调函数 默认不会执行
const stop = watchEffect((cb) => {
    cb(() => {
        console.log('before');
    })
    console.log(msg.value, msg2.value);

    const ipt1 = document.querySelector('#ipt'); 
    console.log('ipt1====>', ipt1);

    const ipt = ref();
    console.log('ipt====>', ipt);
}, {
    // flush 控制回调函数的执行时机   pre 组件更新之前调用  post 组件更新之后调用  sync 同步执行
    flush: 'post'
});
</script>

<style scoped lang='scss'></style>