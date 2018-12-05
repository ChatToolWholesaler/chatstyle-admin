import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NavigationBar from '@/components/NavigationBar'
import LoginBox from '@/components/LoginBox'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      components: {
        default: HelloWorld,
        a: HelloWorld,
        b: NavigationBar
      }
    },
    {
      path: '/login',
      components: {
        default: LoginBox
      }
    }
  ]
})
