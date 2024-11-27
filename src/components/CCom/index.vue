<template>
    <div class='ccom'>
        <span>C组件。。。</span>

        {{ msg || '暂无消息' }}
    </div>
</template>

<script setup lang='ts'>
import { ref } from 'vue';

import { getCurrentInstance, onUnmounted } from 'vue';

const instance = getCurrentInstance();

const msg = ref('')
const handleMessage = (val: any) => {
    msg.value = val as string;
}
// instance?.proxy?.$Bus.on('sendMsg', handleMessage)

instance?.proxy?.$Bus.on('*', (eventName, eventData)=>{
    console.log(eventName, eventData);
})

onUnmounted(() => {
    instance?.proxy?.$Bus.off('sendMsg', handleMessage);

    // instance?.proxy?.$Bus.off('*')
    // instance?.proxy?.$Bus.all.clear()
});
</script>

<style scoped lang='scss'></style>