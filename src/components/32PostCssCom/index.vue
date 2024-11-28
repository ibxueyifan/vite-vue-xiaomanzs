<template>
    <div class='page'>
        <div class="left">left</div>
        <div class="center">center</div>
        <div class="right">right</div>

    </div>
    <button @click="changeSize(36)">大字体</button>
    <button @click="changeSize(24)">中字体</button>
    <button @click="changeSize(14)">小字体</button>
</template>

<script setup lang='ts'>
import { useCssVar } from '@vueuse/core';

const fontSize = useCssVar('--size');

// const changeSize = (size: number) => {
//     fontSize.value = `${size}px`;
// }

const changeSize = (size: number) => {
    document.documentElement.style.setProperty('--size', size + 'px');
    // 读取 document.documentElement.style.getPropertyValue('--size')
    console.log(document.documentElement.style.getPropertyValue('--size'));
}

</script>

<style scoped lang='scss'>
:global(:root) {
    --size: 14px;
}

.page {
    width: 100vw;
    display: flex;

    div {
        height: 100px;
        line-height: 100px;
        font-size: var(--size);
    }

    .left {
        width: 100xm;
        background: pink;
    }

    .right {
        width: 50px;
        background: #000;
    }

    .center {
        flex: 1;
        background: skyblue;
    }
}
</style>