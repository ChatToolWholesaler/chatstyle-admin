<template>
  <div>
    <home-navigation-bar-top></home-navigation-bar-top>
    <div class="down">
      <home-navigation-bar-left v-on:selectByButton="selectByButton"></home-navigation-bar-left>
      <component :is="getComponent"></component>
    </div>
  </div>
</template>

<script>
import HomeNavigationBarTop from '@/components/HomeNavigationBarTop'
import HomeNavigationBarLeft from '@/components/HomeNavigationBarLeft'
import UserPage from '@/components/UserPage'
import AnnouncementPage from '@/components/AnnouncementPage'
import ScenesPage from '@/components/ScenesPage'
export default {
  name: 'HomePage',
  data () {
    return {
      selectedID: ''
    }
  },
  components: {
    HomeNavigationBarTop,
    HomeNavigationBarLeft,
    UserPage,
    AnnouncementPage,
    ScenesPage
  },
  computed: {
    getComponent: function () {
      switch (this.selectedID) {
        case 1: {
          return UserPage
        }
        case 2: {
          return AnnouncementPage
        }
        case 3: {
          return ScenesPage
        }
      }
    }
  },
  methods: {
    selectByButton: function (selectedID) {
      console.log(selectedID)
      this.selectedID = selectedID
    }
  }
}
</script>

<style scoped>
.down{
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  background-color: #E4E4E4;
}
.slot{
  height: 100%;
  flex: auto;
}
</style>
