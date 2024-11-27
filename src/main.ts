import { createApp } from 'vue'
import './style.css'
import App from './App.vue';

import mitt from 'mitt';

const emitter = mitt();


// declare module '@vue/runtime-core' {
declare module 'vue' {
    interface ComponentCustomProperties {
        $Bus: typeof emitter;
    }
}

import GlobalCom from './components/GlobalCom/index.vue';

const app = createApp(App);

app.config.globalProperties.$Bus = emitter;

app.component('GlobalCom', GlobalCom);

app.mount('#app')
