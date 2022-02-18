import { createApp } from 'vue';
import App from './App.vue';
import UI from './library';
import { createPinia } from 'pinia';

createApp(App).use(createPinia()).use(UI).mount('#app');
