<template>
  <div>
    <div class="LoginNavigation">
      <div class="Logo">LOGO</div>
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
  color: white;
  font-size: 30px;
  position: absolute;
  left: 7%;
}
</style>
