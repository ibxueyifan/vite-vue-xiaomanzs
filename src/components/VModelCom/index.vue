<template>
    <div class='page'>
        <h1>v-model</h1>

        <input type="text" :value="modelValue" @input="handleInput" />

        <input type="text" :value="msg2" @input="handleInput2" />
    </div>
</template>

<script setup lang='ts'>

const props = defineProps<{
    modelValue: string,
    msg2: string,
    msg2Modifiers?: {
        isBt: boolean
    }
}>()

// const emit = defineEmits<{
//     (e: 'update:modelValue', value: string): void
// }>()

const emit = defineEmits(['update:modelValue', 'update:msg2'])

const handleInput = (e: Event) => {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
}

const handleInput2 = (e: Event) => {
    const val = (e.target as HTMLInputElement).value;
    emit('update:msg2', props.msg2Modifiers?.isBt ? val + 'bt' : val)
}
</script>

<style scoped lang='scss'>
.page {
    width: 400px;
    height: 400px;
    background-color: #ccc;
}
</style>