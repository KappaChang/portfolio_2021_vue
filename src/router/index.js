import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue'),
    // 看 path 路徑
    redirect: 'top',
    children : [
      {
        path: 'top',
        name: 'Top',
        component: () => import(/* webpackChunkName: "top" */ '../views/Top.vue'),
      },
      {
        path: 'products',
        name: 'Products',
        component: () => import(/* webpackChunkName: "products" */ '../views/Products.vue'),
      },
      {
        path: 'about',
        name: 'About',
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
      },
      {
        path: 'contact',
        name: 'Contact',
        component: () => import(/* webpackChunkName: "contact" */ '../views/Contact.vue'),
      }
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
