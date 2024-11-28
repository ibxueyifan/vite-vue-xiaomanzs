<template>
    <div class=''>
        vue3.3编译宏
    </div>
    <ul>
        <li v-for="val in data">
            <slot :val="val" />
        </li>
    </ul>
    <button @click="handleClick">派发</button>
</template>

<script setup lang='ts' generic="T">
// import type { PropType } from 'vue';
// 写法1
// const props = defineProps({
//     name: {
//         type: Array as PropType<number[]>,
//         required: true
//     }
// })
// console.log(props.name);
// 写法2
// const props1 = defineProps<{
//     name: number[]
// }>();
// console.log(props1.name);
// 3.3  defineProps 泛型的支持
const props2 = defineProps<{
    // name: T[],
    data: T[]
}>();
console.log(props2.data);

// const emit = defineEmits(['send'])
const emit = defineEmits<{
    // (e: stirng, name: string): void
    send: [name: string] // 3.3写法
}>()
const handleClick = () => {
    emit('send', 'hello')
}

// 常用 定义组件 name
defineOptions({
    name: 'xiaomanvue3'
})

// 只有声明没有实现
defineSlots<{
    default(props: { val: T }): void
}>()

</script>

<style scoped lang='scss'></style>