import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from '@/components/LoginPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: LoginPage
      }
    }
  ]
})
