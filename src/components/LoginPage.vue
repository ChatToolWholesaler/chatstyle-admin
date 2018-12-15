<template>
  <div class="LoginPage">
    <login-background-img></login-background-img>
    <login-navigation-bar></login-navigation-bar>
    <div class="LoginBoxPosition">
      <login-box></login-box>
    </div>
  </div>
</template>

<script>
import LoginNavigationBar from '@/components/LoginNavigationBar'
import LoginBackgroundImg from '@/components/LoginBackgroundImg'
import LoginBox from '@/components/LoginBox'
export default {
  name: 'LoginPage',
  components: {
    LoginNavigationBar,
    LoginBackgroundImg,
    LoginBox
  }
}
</script>

<style scoped>
.LoginBoxPosition{
  display: flex;
  justify-content: center;
  align-items: center;
  height: 90vh;
}
</style>
