<template>
   <div class=''>
       <h1> ref 全家桶 </h1>
       <h2> ref {{ man }} </h2>
       <h2> shallowRef {{ man2 }} </h2>

       <button @click="changeMan">change man</button>
       <button @click="changeMan2">change man2</button>

       <h1> customRef:  {{ str }} </h1>

       <div ref="dom">ref 获取dom</div>
   </div>
</template>

<script setup lang='ts'>
import { ref, isRef, shallowRef, triggerRef, customRef, onMounted } from 'vue';

function myRef(value: any) {
    // customRef 也是浅层的
    return customRef((track, trigger) => {
        return {
            get() {
                track()
                return value;
            },
            set(newValue) {
                value = newValue;
                trigger();
            }
        }
    })
}

const str = myRef('hellohellohello');

console.log('str', str.value);


const man = ref({
    name: '张三',
});

console.log(man);

const man2 = shallowRef({
    name: '李四',
});
console.log(isRef(man));
const changeMan = () => {
    man.value.name += '='
}
const changeMan2 = () => {
    // shallowRef 浅层响应式 只对第一层数据进行响应式处理   数据改变了 但视图没变  可以使用triggerRef
    man2.value.name += '=';
    triggerRef(man2);
    console.log(man2.value);

    // 改变 man 的值 会触发 man2 的响应式  
    // changeMan(); 
    // man2.value.name += '='

    // 这么写 视图会更新
    // man2.value = {
    //     name: '李四===='
    // }
}

const dom = ref();
onMounted(() => {
    console.log('dom', dom.value);
})



</script>

<style scoped>

</style>