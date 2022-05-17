import { createApp } from 'vue';
import App from './App.vue';
import UI from './library';
import { createPinia } from 'pinia';
import router from '@/routes';
import { useRouter, useRoute } from 'vue-router';

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(UI, { useRoute: useRoute, useRouter: useRouter });
app.mount('#app');
