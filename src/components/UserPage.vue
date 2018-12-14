<template>
  <div class="userPage">
    <div class="userStatistic">用户信息</div>
  </div>
</template>

<script>
export default {
  name: 'UserPage'
}
</script>

<style scoped>
.userPage{
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
}
.userStatistic{
  width: 1000px;
  height: 300px;
  background-color: white;
}
</style>
