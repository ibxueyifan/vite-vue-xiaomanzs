<template>
    <div class=''>
        <h1>toRef</h1>
        <h3>man: {{ man }}</h3>
        <button @click="change">修改man</button>
        <h3>man1: {{ man1 }}</h3>
        <h3>name: {{ name }}</h3>
        <button @click="changeMan1">修改man1</button>

        <h3>name1: {{ name1 }}</h3>
        <h3>age: {{ age }}</h3>
        <h3>sex: {{ sex }}</h3>
    </div>
</template>

<script setup lang='ts'>
import { reactive, toRef, toRefs } from 'vue';
// 非响应式对象 使用toRef 没用
// toRef  它可以将响应式对象的一个属性转换为独立的 ref 创建的 ref 与源属性保持同步（双向引用）
// 1.保持引用关系：修改 ref 的值会更新原始对象的属性
// 2.解构保持响应性：可以在解构响应式对象时保持响应性
// 3.简化属性访问：不需要每次都通过对象访问属性
const man = {
    name: '张三',
    age: 18
}

const change = () => {
    man.name = '李四';
    console.log('man', man);
}


const man1 = reactive({
    name: '张三',
    age: 18,
    sex: '男'
});
// 响应式对象 使用toRef 有用
const name = toRef(man1, 'name');
console.log('name', name);
const changeMan1 = () => {
    name.value = '李四';
    console.log('man1', man1);
}

// toRefs 将响应式对象转换为一组 ref 对象  解构出多个属性 并具有响应性
const { name: name1, age, sex } = toRefs(man1);

// toRaw 将响应式对象转换为普通对象
console.log('name1', name1, age, sex);
// const toRawMan = toRaw(man1);
// console.log('toRawMan', toRawMan, man1['__v_raw']);

</script>

<style scoped lang='scss'></style>