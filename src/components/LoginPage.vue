<template>
  <div>
    <LoginBackgroundImg></LoginBackgroundImg>
    <LoginNavigationBar></LoginNavigationBar>
  </div>
</template>

<script>
import LoginNavigationBar from '@/components/LoginNavigationBar'
import LoginBackgroundImg from '@/components/LoginBackgroundImg'
export default {
  name: 'LoginPage',
  components: {
    LoginNavigationBar,
    LoginBackgroundImg
  }
}
</script>

<style scoped>

</style>
