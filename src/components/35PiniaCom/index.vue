<template>
    <h1 class=''>
        pinia
    </h1>
    <h3>
        testStore.count===> {{ testStore.count }}
        <br>
        testStore.msg====> {{ testStore.msg }}
    </h3>
    <h3>
        解构： count===> {{ count }}
        <br>
        msg====> {{ msg }}
    </h3>
    <h3>
        getters====> {{ testStore.newMsg }}
    </h3>
    <h3>
        acticons 异步修改==> {{ testStore.name }}
    </h3>
    <button @click="addCount">改count</button>
    <button @click="changeMsg">改变msg</button>
    <button @click="changeName">异步改name</button>

    <button @click="reset">reset store</button>
    <button @click="cleanup">手动取消订阅</button>

    {{ baseStore.count }}
</template>

<script setup lang='ts'>
import { storeToRefs } from 'pinia'
import { useTestStore, useBaseStore } from '@/store';
const testStore = useTestStore();
const baseStore = useBaseStore();

type StoreType = {
    count: number,
    msg: string,
    name: string
}

// $subscribe 监听store中数据的变化
const unsubscitbe = testStore.$subscribe((arg: any, state: StoreType) => {
    console.log('arg', arg)
    console.log('state', state)
}, {
    detached: true, // 订阅将不会在 store 被销毁时自动取消
})

const cleanup = () => {
    unsubscitbe()
}

/***
 * 第二个参数设置为true 
 * 通常在开发和调试阶段使用全局监听，以便更好地理解和跟踪状态变化
 * 1. 全局监听：当第二个参数设置为 true 时，您可以监听到该 store 中所有的动作（actions），而不仅仅是单个动作。这对于调试或记录所有动作的执行非常有用。
   2.  事件处理：您可以在全局监听中处理所有动作的前后逻辑，例如记录日志、执行某些副作用等。
 */
// 监听 store中事件的触发
testStore.$onAction((params: any) => {
    console.log(params);
    params.after(() => {
        console.log('事件触发完毕');
    })
    console.log('触发了哪个事件==>', params.name);
    console.log('参数==>', params.args);
}, true)


// 如果需要解构   使用storeToRefs
const { count, msg } = storeToRefs(testStore);

const reset = () => {
    testStore.$reset()
}
const changeName = () => {
    testStore.requestName()
}

const changeMsg = () => {
    msg.value += '=='
}
const addCount = () => {

    // 解构 修改值
    // count.value++
    // msg.value = 'xxxx'
    //#region 
    //方式1
    // testStore.count++

    //方式2
    // testStore.$patch({
    //     count: testStore.count + 1
    // })

    //方式3
    // testStore.$patch((state: any) => {
    //     state.count = state.count + 1;
    //     state.msg = '修改后的msg'
    // })

    //方式4
    // testStore.$state = {
    //     count: testStore.count + 1,
    // }
    // testStore.$state.msg = '修改后的msg'


    //方式5
    testStore.handleCount(10)
}

</script>

<style scoped lang='scss'></style>