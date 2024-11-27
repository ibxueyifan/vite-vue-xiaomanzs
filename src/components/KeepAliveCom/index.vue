<template>
    <div class=''>


        让我为您解释 `keep-alive` 的核心原理：

        ### 1. 基本工作原理
        ```vue
        // keep-alive 的核心逻辑伪代码
        {
        // 缓存对象
        cache: {
        'componentKey1': vnode1,
        'componentKey2': vnode2
        },

        // LRU算法相关
        keys: ['componentKey1', 'componentKey2']
        }
        ```

        ### 2. 主要实现步骤

        1. **缓存机制**
        - 使用 `cache` 对象存储组件实例
        - 用 `keys` 数组维护缓存组件的 key
        - 采用 LRU (最近最少使用) 算法管理缓存

        2. **生命周期处理**
        ```typescript
        // 组件被缓存时触发
        activated() {
        // 组件激活
        }

        // 组件被换出时触发
        deactivated() {
        // 组件停用
        }
        ```

        3. **渲染过程**
        - 首次渲染：正常挂载组件
        - 再次访问：
        1. 从缓存中取出组件实例
        2. 直接使用缓存的 DOM
        3. 触发 `activated` 钩子

        ### 3. 核心特点

        1. **缓存策略**
        - `include`：指定缓存的组件
        - `exclude`：指定不缓存的组件
        - `max`：最大缓存数量

        2. **性能优化**
        - 避免重复创建组件实例
        - 保留组件状态
        - 减少不必要的 DOM 操作

        ### 4. 使用示例
        ```vue
        <template>
            <keep-alive :include="['CompA', 'CompB']" :max="10">
                <router-view />
            </keep-alive>
        </template>
        ```

        ### 5. 注意事项

        1. **内存管理**
        - 合理设置 `max` 值避免内存泄露
        - 及时清理不需要的缓存

        2. **适用场景**
        - 频繁切换的组件
        - 需要保持状态的表单
        - 列表页面切换详情页

        3. **限制**
        - 只能缓存组件，不能缓存DOM元素
        - 被缓存组件必须有名字（name属性）
    </div>
</template>

<script setup lang='ts'>

</script>

<style scoped lang='scss'></style>