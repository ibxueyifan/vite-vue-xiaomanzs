<template>
    <div class='child'>
        <h1>Child 组件</h1>
        {{ msg }}
        {{ arr }}
        <button @click="sendMessage">给父组件传回参数</button>
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';
const props = withDefaults(defineProps<{
    msg: string
    arr: number[]
}>(), {
    arr: () => [1, 2, 3]
})

// const props = defineProps({
//     msg: {
//         type: String,
//         required: true
//     },
//     arr: {
//         type: Array,
//         default: () => [1, 2, 3]
//     }
// })
console.log(props.msg);

// const emit = defineEmits(['change', 'change2'])

const emit = defineEmits<{
    (e: 'change', name: string): void
    (e: 'change2', name: string): void
}>()

const sendMessage = () => {
    emit('change', 'hello我是子组件')
    emit('change2', 'hello我是change2')
}

const myName = ref('张三');

defineExpose({
    myName
})

</script>

<style scoped lang='scss'></style>