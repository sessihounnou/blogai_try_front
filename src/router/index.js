import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from '../AUTH/Register.vue'
import AboutView from '../views/AboutView.vue'
import LoginView from '../AUTH/Login.vue'
import noAuth from '../layout/noAuth.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView,
      meta: { layout: noAuth, public: true },
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: noAuth, public: true },
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterView,
      meta: { layout: noAuth, public: true },
    },
    {
      path: '/about_us',
      name: 'about_us',
      component: AboutView,
      meta: { layout: noAuth, public: true },
    },
  //   {
  //     path: "/login",
  //     name: "login",
  //     props: true,
  //     component: () =>
  //         import ("../views/login.vue"),
  // },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue')
    // }
  ]
})

export default router
