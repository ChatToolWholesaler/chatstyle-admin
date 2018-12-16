<template>
  <div>
    <home-navigation-bar-top></home-navigation-bar-top>
    <div class="down">
      <home-navigation-bar-left v-on:selectByButton="selectByButton"></home-navigation-bar-left>
      <component :is="getComponent" v-on:selectByButton="selectByButton"></component>
    </div>
  </div>
</template>

<script>
import HomeNavigationBarTop from '@/components/HomeNavigationBarTop'
import HomeNavigationBarLeft from '@/components/HomeNavigationBarLeft'
import UserPage from '@/components/UserPage'
import AnnouncementPage from '@/components/AnnouncementPage'
import RoomPage from '@/components/RoomPage'
import NewAnnouncementPage from '@/components/NewAnnouncementPage'
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
    RoomPage,
    NewAnnouncementPage
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
          return RoomPage
        }
        case 4: {
          return NewAnnouncementPage
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
