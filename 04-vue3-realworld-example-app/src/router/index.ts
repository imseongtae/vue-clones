import { createRouter, createWebHistory } from 'vue-router';
import type { RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

import { useUserStore } from '@/stores/user';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/pages/LoginPage.vue'),
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/pages/SignupPage.vue'),
  },
  {
    name: 'profile',
    // path: '/profile/:username',
    path: '/profile',
    component: () => import('@/pages/ProfilePage.vue'),
    // beforeEnter: () => !isAuthorized(),
    beforeEnter: () => {
      const userStore = useUserStore();
      if (!userStore.isAuthorized) {
        return {
          path: '/',
        };
      }
    },
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (About.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/AboutView.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
