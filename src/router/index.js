import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import App from "../views/App.vue"
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'

import store from "../store"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/app',
    name: 'app',
    component: App,
    meta: {
      authRequired: true
    }
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  {
    path: '/logout',
    name: 'logout',
    component: Logout,
    meta: {
      authRequired: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.authRequired)) {
    if (!store.state.user) {
      next({
        path: '/login',
        query: { redirect: to.fullPath },
        params: {
          type: "Registro"
        }
      })
    } else {
      next()
    }
  } else {
    next()
  }

  if (store.state.user && to.path == "/") {
    next({
      path: '/app'
    })
  }
})

export default router
