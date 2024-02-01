import { createRouter, createWebHistory } from 'vue-router'
import LogInView from '../views/LogInView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'LogIn',
      component: LogInView
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/user/create',
      name: 'create',
      component: () => import('../views/CreateView.vue')
    },
    {
      path: '/user/:id/edit',
      name: 'edit',
      component: () => import('../views/EditView.vue')
    }
  ]
})

export default router
