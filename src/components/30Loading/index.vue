<template>
    <div class='loading' v-if="isShow">
        loading...
    </div>
</template>

<script setup lang='ts'>

const isShow = ref(false);

const show = () => isShow.value = true;

const hide = () => isShow.value = false;

defineExpose({
    isShow,
    show,
    hide
})
</script>

<style scoped lang='scss'>
.loading {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    width: 300px;
    height: 300px;
    background: #000;
    color: #fff;
    text-align: center;
    line-height: 300px;
    margin: auto;
}
</style>