<template>
    <h1> reactive 全家桶</h1>

    <h3>
        reactive-man: {{ man }}
    </h3>
    <h3>
        readonly-read: {{ read }}
    </h3>
    <h3>
        shallowReactive-man2: {{ man2 }}
    </h3>

    <button @click="change"> 修改 man </button>
    <button @click="changeShallow">修改shallow</button>
</template>

<script setup lang='ts'>
// ref 取值 赋值都用 .value
// reactive 取值 赋值不用 .value
import { reactive, readonly, shallowReactive } from 'vue';

const man = reactive({
    name: '张三',
    age: 18,
})
const read = readonly(man);
// read.name = '李四'; // 报错
console.log('read', read);
const change = () => {
    // 会影响readonly
    man.name = '李四';
    // read.name = '李四'; // 报错
}


const man2 = shallowReactive({
    name: '张三',
    foo: {
        bar: 1
    }
})
console.log('man2', man2);
const changeShallow = () => {
    // man2.foo.bar = 2;  视图不变

    // 改整个foo 视图更新 
    man2.foo = {
        bar: 2
    }
    console.log('man2', man2);
}



</script>

<style scoped></style>