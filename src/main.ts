import { createApp } from 'vue'
import './style.css'
import App from './App.vue';
import mitt from 'mitt';
// 注意 xiaomanloading 这个名字几个地方要保持一致
import xiaomanloading from '@/components/30Loading/index';
import { piniaPlugin } from './store/plugin';
import { createPinia } from 'pinia';

const store = createPinia();
store.use(piniaPlugin())

const emitter = mitt();

type Filter = {
    format<T>(str: T): string
}

type xiaomanloadingType = {
    isShow: boolean,
    show: () => void,
    hide: () => void,
}

// declare module '@vue/runtime-core' {
// declare module 'vue' {
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $Bus: typeof emitter;
        $filter: Filter,
        xiaomanloading: xiaomanloadingType
    }
}

import GlobalCom from './components/GlobalCom/index.vue';

const app = createApp(App);

app.config.globalProperties.$Bus = emitter;

app.config.globalProperties.$filter = {
    format<T>(str: T) {
        return `${str}-xiaoman`
    }
}


app.use(xiaomanloading);

app.use(store)

app.component('GlobalCom', GlobalCom);

app.mount('#app')
