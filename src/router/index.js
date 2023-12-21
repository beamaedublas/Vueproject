import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/attendance',
      name: 'attendance',
      component: () => import('../views/Attendance.vue')
    },
    {
      path: '/event',
      name: 'event',
      component: () => import('../views/Event.vue')
    },
    {
      path: '/student',
      name: 'student',
      component: () => import('../views/Student.vue')
    }
  ]
})

export default router
