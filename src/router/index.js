import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/about2',
    component: () => import('../views/About2.vue')
  },
  {
    path: '/lectures/card',
    component: () => import('../views/lectures/Card.vue')
  },
  {
    path: '/lectures/layout',
    component: () => import('../views/lectures/Layout.vue')
  },
  {
    path: '/lectures/notes',
    component: () => import('../views/lectures/Note.vue')
  },
  {
    path: '*',
    component: () => import('../views/e404.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
