<template>
   <div class=''>
   </div>
</template>

<script setup lang='ts'>

import { getCurrentInstance } from 'vue';
const app = getCurrentInstance();
app?.proxy?.xiaomanloading.show();

setTimeout(() => {
   app?.proxy?.xiaomanloading.hide()
}, 1500)








</script>

<style lang='scss'>
button {
   border: 1px solid #ccc;
   margin-left: 10px;
}
</style>