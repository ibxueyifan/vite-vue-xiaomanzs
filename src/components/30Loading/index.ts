

import { render, createVNode } from 'vue';
import type { App, VNode } from "vue";
import Loading from './index.vue';

export default {
    /**
     * 安装插件
     * @param app - Vue应用实例
     */
    install(app: App) {
        // 创建Loading组件的虚拟节点
        const vNode: VNode = createVNode(Loading);
        // 渲染虚拟节点到文档体
        render(vNode, document.body);
        // 获取Loading组件暴露的方法和状态
        const { isShow, show, hide } = vNode.component?.exposed!;
        // 将Loading组件的方法和状态注册到全局属性中
        app.config.globalProperties.xiaomanloading = {
            isShow,
            show,
            hide,
        }
    }
}