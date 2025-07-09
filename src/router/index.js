import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: () => import('@/pages/Dashboard.vue'),
  },
  {
    path: '/models',
    name: 'AIModels',
    component: () => import('@/pages/AIModels.vue'),
  },
  {
    path: '/model/:id',
    name: 'ModelDetail',
    component: () => import('@/pages/ModelDetail.vue'),
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
