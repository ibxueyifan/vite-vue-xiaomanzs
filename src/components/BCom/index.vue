<template>
   <div class='bcom'>
       <span>B组件。。。</span>

       <button @click="send">点击</button>
   </div>
</template>

<script setup lang='ts'>

import { getCurrentInstance } from 'vue';

const instance = getCurrentInstance();

const send = () => {
    instance?.proxy?.$Bus.emit('sendMsg', '你好我是B组件')
}
</script>

<style scoped lang='scss'>

</style>