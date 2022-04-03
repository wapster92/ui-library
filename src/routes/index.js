import {createRouter, createWebHistory} from 'vue-router';
import IndexPage from "@/pages/IndexPage.vue";
import ListingPage from "@/pages/ListingPage.vue";

const routes = [
  {path: '/', name:'Home', component: IndexPage},
  {path: '/users', name: 'Users', component: ListingPage},
]

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;