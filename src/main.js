import { createApp } from 'vue';
import App from './App.vue';
import UI from './library';
import { createPinia } from 'pinia';
import router from "@/routes";

const app = createApp(App);
app.use(createPinia());
app.use(UI);
app.use(router);
app.mount('#app');