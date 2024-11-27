<template>


    递归tree: <Tree  :data="treeData"/>
  
  </template>
  
  <script setup lang='ts'>
  import Tree from '@/components/Tree/index.vue';
  
  interface TreeNode {
    name: string;
    checked: boolean;
    children?: TreeNode[];
  }
  
  const treeData: TreeNode[] = [
    {
      name: '1',
      checked: false,
      children: [
        {
          name: '1-1',
          checked: false,
        }
      ]
    },
    {
      name: '2',
      checked: false,
    },
    {
      name: '3',
      checked: true,
      children: [
        {
          name: '3-1',
          checked: false,
          children: [
            {
              name: '3-1-1',
              checked: false,
            }
          ]
        }
      ]
    }
  ];
  
  </script>
  
  <style>
  button {
    border: 1px solid #000;
    margin: 10px;
  }
  </style>
  