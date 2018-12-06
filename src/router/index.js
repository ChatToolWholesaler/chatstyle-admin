import Vue from 'vue'
import Router from 'vue-router'
import LoginNavigationBar from '@/components/LoginNavigationBar'
import LoginBackgroundImg from '@/components/LoginBackgroundImg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: LoginNavigationBar,
        back: LoginBackgroundImg
      }
    }
  ]
})
