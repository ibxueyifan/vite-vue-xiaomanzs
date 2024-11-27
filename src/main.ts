import { createApp } from 'vue'
import './style.css'
import App from './App.vue';

import mitt from 'mitt';

const emitter = mitt();

type Filter = {
    format<T>(str: T): string
}
// declare module '@vue/runtime-core' {
// declare module 'vue' {
declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $Bus: typeof emitter;
        $filter: Filter
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


app.component('GlobalCom', GlobalCom);

app.mount('#app')
