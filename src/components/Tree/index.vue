<template>
    <div v-for="item in data" :key="item.name" class="tree" @click.stop="handleClick(item)">
        <input type="checkbox" :checked="item.checked" />
        <span>{{ item.name }}</span>
        <Tree :data="item.children" v-if="item.children?.length" />
    </div>
</template>

<script setup lang='ts'>
import { defineProps } from 'vue';

// 给组件起名字
defineOptions({
    name: 'Tree'
})

interface TreeNode {
    name: string;
    checked: boolean;
    children?: TreeNode[];
}

defineProps<{
    data: TreeNode[]
}>()

const handleClick = (item: TreeNode) => {
    console.log(item);
}

</script>

<style scoped lang='scss'>

.tree {
    margin-left: 10px;
}
</style>