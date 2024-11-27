<template>
    <div class=''>
      <div class="tab">
        <button @click="handleClick(item.com)" v-for="item in comList" :key="item.name">{{ item.name }}</button>
      </div>
      <component :is="currentCom"></component>
    </div>
  </template>
  
  <script setup lang='ts'>
  import BCom from '@/components/BCom/index.vue';
  import CCom from '@/components/CCom/index.vue';
  import { reactive, shallowRef, markRaw } from 'vue';
  
  // shallowRef 使引用本身是响应式的，但不会使其值变成响应式
  // markRaw 明确告诉 Vue 不要尝试将值转换为响应式对象
  const comList = reactive([
    {
      name: 'B组件',
      com: markRaw(BCom)
      // com: BCom
  
    },
    {
      name: 'C组件',
      com: markRaw(CCom)
      // com: CCom
    },
  ])
  
  const currentCom = shallowRef(BCom)
  
  const handleClick = (item: any) => {
    currentCom.value = item
  }
  </script>
  
  <style scoped lang='scss'></style>