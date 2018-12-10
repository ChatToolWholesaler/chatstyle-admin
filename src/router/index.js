import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'
import HomePage from '@/components/HomePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: LoginPage
      }
    },
    {
      path: '/home',
      components: {
        default: HomePage
      }
    }
  ]
})
