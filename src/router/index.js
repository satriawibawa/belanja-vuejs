import Vue from 'vue'
import VueRouter from 'vue-router'
import HomePage from '../views/HomePage'

Vue.use(VueRouter)

  const routes = [
  {
    path : '/',
    name : 'HomePage',
    component : HomePage
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import( '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import( '../views/Register.vue')
  },
  {
    path: '/admin/read',
    name: 'Read',
    component: () => import('../views/admin/Read.vue')
  },
  {
    path: '/admin/insert',
    name: 'Insert',
    component: () => import('../views/admin/Insert.vue')
  },
  {
    path: '/admin/update',
    name: 'Update',
    component: () => import('../views/admin/Update.vue')
  },
  {
    path: '/admin/delete',
    name: 'Delete',
    component: () => import('../views/admin/Delete.vue')
  },
  {
    path: '/admin/laporan',
    name: 'laporan',
    component: () => import('../views/admin/laporan.vue')
  },
  {
    path: '/pemilik/laporan',
    name: 'laporan',
    component: () => import('../views/pemilik/laporan.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
