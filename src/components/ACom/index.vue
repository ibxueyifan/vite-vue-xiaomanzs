<template>
    <div class='acom'>
        <h1 ref="title">ACom 组件 </h1>
        <h2 ref="msgRef">{{ msg }}</h2>
        <button @click="change">改变title</button>
    </div>
</template>

<script setup lang='ts'>
import { ref, getCurrentInstance ,onMounted, onUnmounted, onBeforeUpdate, onUpdated, onBeforeMount, onBeforeUnmount } from 'vue';

const instance = getCurrentInstance();
console.log('instance=>>>>', instance);

const title = ref();
const msg = ref('hello');
const msgRef = ref();
const change = () => {
    msg.value += '=';
}

console.log('setup');
onBeforeMount(() => {
    // 读不到dom
    console.log('titleRef=>>>>', title.value);
    console.log('ACom 组件 挂载之前');
});
onMounted(() => {
    // 读到dom
    console.log('titleRef=>>>>', title.value);
    console.log('ACom 组件 挂载完成');
});


// 这说明虽然我们在两个生命周期钩子中拿到的是同一个 DOM 元素的引用，
//但是该元素的实际内容在更新前后是不同的。这是因为 Vue 的虚拟 DOM更新机制在这两个钩子函数之间完成了实际的 DOM 更新操作。
onBeforeUpdate(() => {
    // DOM引用是相同的，但内容还是旧的
    console.log('更新前：', {
        'DOM引用': msgRef.value,
        '实际内容': msgRef.value.textContent
    });
});

onUpdated(() => {
    // DOM引用相同，但内容已更新
    console.log('更新后：', {
        'DOM引用': msgRef.value,
        '实际内容': msgRef.value.textContent
    });
});
onBeforeUnmount(() => {
    console.log('ACom 组件 卸载之前');
});

onUnmounted(() => {
    console.log('ACom 组件 卸载完成');
});
</script>

<style scoped lang='scss'>
$color: blue;
.acom {
    button {
        color: $color;
    }
}
</style>