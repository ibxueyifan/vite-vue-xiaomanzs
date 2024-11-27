<template>


    <!-- <h1 @click="change" v-once>
       {{ msg }}
     </h1> -->
    <Child ref="child" :msg="msg" :arr="arr" @change="getChildMsg" @change2="getChildMsg2" />
  
    <GlobalCom />
  </template>
  
  <script setup lang='ts'>
  import Child from '@/components/Child/index.vue';
  import { ref, onMounted } from "vue";
  const msg = ref('hello');
  const arr = ref([1, 2, 3])
  
  const getChildMsg = (val: string) => {
    console.log(val);
    msg.value = val
  }
  
  const getChildMsg2 = (val: string) => {
    console.log(val);
  }
  
  
  
  // 在 Vue 组件中使用 InstanceType 的主要目的是为了获得正确的类型推导，
  //这样当你使用 child.value 访问子组件的属性和方法时，
  //TypeScript 可以提供准确的类型检查和代码提示
  const child = ref<InstanceType<typeof Child>>()
  
  onMounted(() => {
    console.log(child.value?.myName);
  })
  
  
  </script>
  
  <style>
  button {
    border: 1px solid #000;
    margin: 10px;
  }
  </style>
  