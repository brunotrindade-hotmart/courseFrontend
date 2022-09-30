import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/HomeView.vue')
  },
  {
    path: '/transformers',
    name: 'transformers',
    component: () => import('../components/TransformersOne.vue')
  },
  {
    path: '/gameOfThrones',
    name: 'gameOfThrones',
    component: () => import('../components/GameOfThronesOne.vue')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
