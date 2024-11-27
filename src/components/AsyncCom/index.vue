<template>
    <div class=''>
        <!-- 大型应用的性能优化
            首屏加载优化
            较大组件的按需加载
            需要条件渲染的复杂组件 -->
        <Suspense>
            <template #default>
                <syncCom />
            </template>
            <template #fallback>
                <div>
                    加载中...
                </div>
            </template>
        </Suspense>
        <!-- <ACom /> -->
    </div>
</template>

<script setup lang='ts'>
import { defineAsyncComponent } from 'vue'
// 异步组件
const syncCom = defineAsyncComponent(() => import('@/components/ACom/index.vue'));

// import ACom from '@/components/ACom/index.vue';
</script>

<style scoped lang='scss'></style>