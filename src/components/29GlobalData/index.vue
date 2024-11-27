<template>
   <div class=''>
       {{ $filter.format('zs') }}
   </div>
</template>

<script setup lang='ts'>
import { getCurrentInstance } from 'vue';

const app = getCurrentInstance();

console.log(app?.proxy?.$filter.format('nihao'));

</script>

<style scoped lang='scss'>

</style>