<template>
    <div class=''>
        <h1>
            Directive 自定义指令
        </h1>
        <button v-has-show="'shop-add'">新建</button>
        <button v-has-show="'shop-edit'">修改</button>
        <button v-has-show="'shop-delete'">删除</button>
    </div>
</template>

<script setup lang='ts'>
import type { Directive } from 'vue';

localStorage.setItem('userId', 'xiaoman');

// vHasShow  驼峰语法  v-has-show
const premisson = [
    'xiaoman:shop-add',
    // 'xiaoman:shop-edit',
    // 'xiaoman:shop-delete',
]

const userId = localStorage.getItem('userId');
const vHasShow: Directive<HTMLElement, string> = (el, binding) => {
    if (!premisson.includes(`${userId}:${binding.value}`)) {
        el.style.display = 'none'
    }
}
</script>

<style scoped lang='scss'></style>