<template>
    <div class=''>
      <SlotCom>
        <template #header>
          <div>
            头部内容
          </div>
        </template>
        <template #default="{arr}">
          <div>
              <p v-for="item in arr" :key="item.name">{{ item.name }}</p>
          </div>
        </template>
        <template #footer>
          <div>
            尾部内容
          </div>
        </template>
      </SlotCom>
    </div>
  </template>
  
  <script setup lang='ts'>
  import SlotCom from '@/components/SlotCom/index.vue';
  </script>
  
  <style scoped lang='scss'></style>