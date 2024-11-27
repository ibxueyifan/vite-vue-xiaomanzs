<template>
    <div class='test'>
        动态css
        <p>v-bind(style);</p>
        <p> v-bind('styleObj.size');</p>
    </div>

    <div :class="$style.momo">
        module css------"$style.momo"
    </div>

    <div :class="[$style.momo, $style.border]">
        module css--------"[$style.momo, $style.border]"
    </div>


    <div :class="xiaoman.xmzs">
        module="xiaoman"
    </div>
</template>

<script setup lang='ts'>

const style = ref('red');

const styleObj = reactive({
    size: '20px',
    bg: '#f0f'
})


const css = useCssModule('xiaoman');

// module="xiaoman" 中被编译过的css类名  {xmzs: '_xmzs_u9xja_3'}
console.log(css);


</script>

<style module="xiaoman">
.xmzs {
    width: 300px;
    height: 100px;
    background: pink;
    border: 4px solid #f0f;
    color: black;
}
</style>

<style module>
.momo {
    width: 300px;
    height: 100px;
    background: pink;
    border: 4px solid #0f0;
    color: black;
}

.border {
    border: 4px solid #00f;
}
</style>

<style lang='scss'>
.test {
    width: 400px;
    height: 300px;
    color: v-bind(style);
    font-size: v-bind('styleObj.size');
    background: v-bind('styleObj.bg');
}

// ui组件库样式穿透
// :deep(...) {
//    ...
// }

// 插槽样式穿透
// .a 为插槽中的选择器  非父级中的选择器
// ::slotted(.a) {
//    ...
// }

// 全局样式
// :global(...) {
//    ...
// }</style>