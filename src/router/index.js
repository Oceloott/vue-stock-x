import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import CategoryHomeView from '@/views/CategoryHomeView.vue'
import CartView from '@/views/CartView.vue'
import CategoryListView from '@/views/CategoryListView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/category',
      name: 'category',
      component: () => import('@/views/CategoryHomeView.vue'),
    },
    {
      path: '/cart',
      name: 'cart',
      component: () => import('@/views/CartView.vue'),
    },
    {
      path: '/category/list',
      name: 'category-list',
      component: () => import('@/views/CategoryListView.vue'),
    },
    {
      path: '/product',
      name: 'product',
      component: () => import('@/views/ProductView.vue'),
    }
  ],
})

export default router
