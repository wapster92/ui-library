import { createApp } from 'vue';
import { createPinia } from 'pinia';
import { useRouter, useRoute } from 'vue-router';
import router from '@/routes';
import App from './App.vue';
import UI from './library';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(UI, { useRoute, useRouter });
app.mount('#app');
