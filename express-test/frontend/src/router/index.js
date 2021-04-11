import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from '../components/IndexPage'
import Show from '../components/ShowPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: Index
  },
  {
    path: '/:id',
    name: 'show',
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: Show
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
