<template>
    <div class=''>
        <h1>computed</h1>
        <h3>firstName: {{ firstName }}</h3>
        <h3>lastName: {{ lastName }}</h3>
        <h3>
            fullName: {{ fullName }}
        </h3>
        <h3>
            fullName1: {{ fullName1 }}
        </h3>

        <button @click="change">修改</button>


    </div>
</template>

<script setup lang='ts'>
import { computed, ref } from 'vue';
let firstName = ref('张');
let lastName = ref('三');

const fullName = computed(() => {
    return firstName.value + '-' + lastName.value;
});

const fullName1 = computed<string>({
    get: () => {
        return firstName.value + lastName.value;
    },
    set: (newValue) => {
        [firstName.value, lastName.value] = newValue.split('-');
    }
});

const change = () => {
    fullName1.value = '李-四';
}
</script>

<style scoped lang='scss'></style>