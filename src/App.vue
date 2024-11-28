<template>
    <div class=''>
        <DefineCom @send="getName" :data="list">

            <template #default="{ val }">
                <div>
                    {{ val }}
                </div>
            </template>

        </DefineCom>
    </div>
</template>

<script setup lang='ts'>
import DefineCom from '@/components/34DefineCom/index.vue';
const getName = (name: string) => {
    console.log(name);
}

const list = reactive([
    {
        name: '张三',
        age: 19
    },
    {
        name: '李四',
        age: 299
    }
])
</script>

<style scoped lang='scss'></style>