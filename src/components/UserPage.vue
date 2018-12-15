<template>
  <div class="userPage">
    <div class="userStatisticBox">
      <h1 class="title">用户统计</h1>
      <user-statistic statistic-name="总用户数"></user-statistic>
      <user-statistic class="statisticMargin" statistic-name="当前在线人数"></user-statistic>
      <user-statistic statistic-name="日活跃用户"></user-statistic>
      <user-statistic statistic-name="月活跃用户"></user-statistic>
    </div>
    <div class="userListBox">
      <h1 class="title">用户列表</h1>
    </div>
  </div>
</template>

<script>
import UserStatistic from '@/components/UserStatistic'
export default {
  name: 'UserPage',
  components: {
    UserStatistic
  }
}
</script>

<style scoped>
.userPage{
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-width: 1200px;
  overflow: scroll;
  padding-top: 80px;
  padding-bottom: 80px;
}
.userStatisticBox{
  width: 920px;
  height: fit-content;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
}
.title{
  height: 50px;
  text-align: left;
  border-bottom-style: solid;
  padding-left: 10px;
  margin-bottom: 20px;
  font-size: 25px;
}
.statisticMargin{
  margin-left: 130px;
  margin-right: 130px;
}
.userListBox{
  width: 920px;
  height: fit-content;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 100px;
}
</style>
