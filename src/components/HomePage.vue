<template>
  <div>
    <home-navigation-bar-top></home-navigation-bar-top>
    <home-navigation-bar-left></home-navigation-bar-left>
  </div>
</template>

<script>
import HomeNavigationBarTop from '@/components/HomeNavigationBarTop'
import HomeNavigationBarLeft from '@/components/HomeNavigationBarLeft'
export default {
  name: 'HomePage',
  components: {
    HomeNavigationBarTop,
    HomeNavigationBarLeft
  }
}
</script>

<style scoped>

</style>
