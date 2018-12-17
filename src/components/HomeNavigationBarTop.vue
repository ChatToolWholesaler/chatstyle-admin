<template>
  <div>
    <div class="HomeNavigationBarTop">
      <div class="Logo">LOGO</div>
      <div class="logout"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNavigationBarTop'
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
  color: white;
  font-size: 30px;
  position: absolute;
  left: 55px;
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
