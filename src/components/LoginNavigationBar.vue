<template>
  <div>
    <div class="LoginNavigation">
      <div class="Logo"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoginNavigation'
}
</script>

<style scoped>
.LoginNavigation{
  width: 100%;
  height: 50px;
  background-color: #333;
  margin: 0px;
  display: flex;
  align-items: center;
}
.Logo{
  background-size: 130px;
  width: 130px;
  height: 35px;
  position: absolute;
  left: 100px;
  background-image: url(../assets/logo.png)
}
</style>
