<template>
  <div class="homeNavigationBarLeft">
    <div class="userBox">
      <img id="Avatar" class="avatar"/>
      <div class="name">{{ username }}</div>
      <div class="userTag">{{ userTag }}</div>
    </div>
    <div class="buttonList">
      <home-navigation-bar-left-button button-name="用户列表"/>
      <home-navigation-bar-left-button button-name="公告列表"/>
      <home-navigation-bar-left-button button-name="房间列表"/>
    </div>
  </div>
</template>

<script>
import HomeNavigationBarLeftButton from '@/components/HomeNavigationBarLeftButton'
export default {
  name: 'HomeNavigationBarLeft',
  components: {
    HomeNavigationBarLeftButton
  },
  computed: {
    username () {
      return '吴彦祖'
    },
    userTag () {
      return '管理员'
    }
  }
}
</script>

<style scoped>
.homeNavigationBarLeft{
  width: 200px;
  height: 100%;
  background-color: #333;
  position: fixed;
}
.userBox{
  margin-top: 50px;
  margin-bottom: 50px;
}
.avatar{
  background-color: white;
  width: 100px;
  height: 100px;
  border-radius: 50%;
}
.name{
  color:white;
  width: 100%;
  height: fit-content;
  font-size: 30px;
}
.userTag{
  color:white;
  width: 100%;
  height: fit-content;
  font-size: 15px;
  margin-top: 5px;
}
.buttonList{
  margin-top: 30px;
  margin-bottom: 30px;
}
</style>
