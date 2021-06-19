import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/list',
    component: () => import('../views/PostsList.vue') // 动态加载
  },
  {
    path: '/list',
    name: 'posts-list',
    component: () => import('../views/PostsList.vue') // 动态加载
  },
  {
    path: '/add',
    name: 'posts-add',
    component: () => import('../views/PostsAdd.vue') // 动态加载
  },
  {
    path: '/edit/:id',
    name: 'posts-edit',
    component: () => import('../views/PostsEdit.vue') // 动态加载
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
