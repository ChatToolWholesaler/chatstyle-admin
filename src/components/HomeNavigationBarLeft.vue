<template>
  <div class="homeNavigationBarLeft">
    <div class="userBox">
      <img id="Avatar" class="avatar" src="../assets\avatar.jpg"/>
      <div class="name">{{ adminname }}</div>
      <div class="userTag">{{ userTag }}</div>
    </div>
    <div class="buttonList">
      <home-navigation-bar-left-button button-name="用户列表" :isSelected="selected===1" @click.native="select(1)"/>
      <home-navigation-bar-left-button button-name="公告列表" :isSelected="selected===2" @click.native="select(2)"/>
      <home-navigation-bar-left-button button-name="房间列表" :isSelected="selected===3" @click.native="select(3)"/>
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
  data () {
    return {
      selected: '',
      adminname: '',
      userTag: '管理员'
    }
  },
  methods: {
    select (id) {
      this.selected = id
      this.$emit('selectByButton', this.selected)
    }
  },
  beforeMount () {
    this.selected = 1
    this.$emit('selectByButton', this.selected)
  },
  mounted () {
    var storage = window.localStorage
    this.adminname = storage.adminname
  }
}
</script>

<style scoped>
.homeNavigationBarLeft{
  width: 200px;
  height: 100%;
  min-width: 200px;
  background-color: #434343;
}
.userBox{
  padding-top: 50px;
  padding-bottom: 50px;
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
  user-select: none;
}
.userTag{
  color:white;
  width: 100%;
  height: fit-content;
  font-size: 15px;
  margin-top: 5px;
  user-select: none;
}
.buttonList{
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
