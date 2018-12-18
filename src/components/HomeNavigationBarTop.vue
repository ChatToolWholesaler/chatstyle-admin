<template>
  <div>
    <div class="HomeNavigationBarTop">
      <div class="Logo"></div>
      <div class="logout" @click="logout()"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNavigationBarTop',
  methods: {
    logout: function () {
      var storage = window.localStorage
      storage.clear()
      this.$router.push({path: '/'})
    }
  }
}
</script>

<style scoped>
.HomeNavigationBarTop{
  width: 100%;
  height: 50px;
  background-color: #333;
  margin: 0px;
  display: flex;
  align-items: center;
}
.Logo{
  background-size: 120px;
  width: 120px;
  height: 30px;
  position: absolute;
  left: 45px;
  background-image: url(../assets/logo.png)
}
.logout{
  width: 30px;
  height: 30px;
  background-image: url(../assets/power.png);
  background-size: contain;
  position: absolute;
  right: 50px;
  cursor: pointer;
}
.logout:hover{
  background-image: url(../assets/powerHover.png);
}
</style>
