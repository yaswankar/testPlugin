import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter) // vue router

const routes = [
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
