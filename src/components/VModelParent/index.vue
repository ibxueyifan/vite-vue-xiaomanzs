<template>
    <div class=''>
      父组件 {{ msg }} {{ msg2 }}
      <VModelCom v-model='msg' v-model:msg2.isBt='msg2' />
    </div>
  </template>
  
  <script setup lang='ts'>
  import VModelCom from '@/components/VModelCom/index.vue';
  const msg = ref('hello');
  const msg2 = ref('world');
  </script>
  
  <style scoped lang='scss'></style>