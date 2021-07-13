import { createRouter, createWebHistory } from 'vue-router'
import Chats from '../views/Chats.vue'
import Status from '../views/Status.vue'
import Calls from '../views/Calls.vue'

const routes = [
  {
    path: '/',
    name: 'Chats',
    component: Chats
  },
  {
    path: '/status',
    name: 'Status',
    component: Status
  },
  {
    path: '/calls',
    name: 'Calls',
    component: Calls
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
