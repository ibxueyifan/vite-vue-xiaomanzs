<template>
    <div class='slotcom'>
        <header>
            <slot name="header"></slot>
        </header>
        <main>
            <slot :arr="arr"></slot>
        </main>
        <footer>
            <slot name="footer"></slot>
        </footer>
    </div>
</template>

<script setup lang='ts'>
import { reactive } from 'vue';

const arr = reactive([
    {
        name: '张三',
        age: 18
    },
    {
        name: '李四',
        age: 20
    }
])
</script>

<style scoped lang='scss'>
header, main, footer {
    width: 600px;
}
header {
    height: 100px;
    background: skyblue;
}
main {
    height: 100px;
    background: yellowgreen;
}
footer {
    height: 100px;
    background: orange;
}
</style>