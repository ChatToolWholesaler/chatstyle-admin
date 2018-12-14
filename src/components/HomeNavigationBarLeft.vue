<template>
  <div class="homeNavigationBarLeft">
    <div class="userBox">
      <img id="Avatar" class="avatar"/>
      <div class="name">{{ username }}</div>
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
      selected: ''
    }
  },
  computed: {
    username () {
      return '吴彦祖'
    },
    userTag () {
      return '管理员'
    }
  },
  methods: {
    select (id) {
      this.selected = id
      this.$emit('selectByButton', this.selected)
    }
  },
  beforeCreate () {
    this.selected = 1
    this.$emit('selectByButton', this.selected)
  }
}
</script>

<style scoped>
.homeNavigationBarLeft{
  width: 200px;
  height: 100%;
  min-width: 200px;
  background-color: #333;
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
}
.userTag{
  color:white;
  width: 100%;
  height: fit-content;
  font-size: 15px;
  margin-top: 5px;
}
.buttonList{
  padding-top: 30px;
  padding-bottom: 30px;
}
</style>
