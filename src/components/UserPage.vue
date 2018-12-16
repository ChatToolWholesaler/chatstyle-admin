<template>
  <div class="userPage">
    <div class="userStatisticBox">
      <h1 class="header">用户统计</h1>
      <statistic statistic-name="总用户数"></statistic>
      <statistic class="statisticMargin" statistic-name="当前在线人数"></statistic>
      <statistic statistic-name="日活跃用户"></statistic>
      <statistic statistic-name="月活跃用户"></statistic>
    </div>
    <div class="userListBox">
      <div class="header">
        <div class="title">用户列表</div>
        <div class="titleButton">删除用户</div>
        <div class="titleButton">允许登陆</div>
        <div class="titleButton">禁止登陆</div>
        <div class="titleButton">强制下线</div>
      </div>
      <div class="userListLabelBox">
        <div class="userListLabel checkboxLabel"><input class="checkbox" type="checkbox"></div>
        <div class="userListLabel usernameLabel">用户名</div>
        <div class="userListLabel roleLabel">角色</div>
        <div class="userListLabel stateLabel">状态</div>
        <div class="userListLabel isBannedLabel">是否被封禁</div>
        <div class="userListLabel totalOnlineTimeLabel">累积在线时间</div>
        <div class="userListLabel lastOnlineTimeLabel">上次在线时间</div>
      </div>
      <paging></paging>
    </div>
  </div>
</template>

<script>
import Statistic from '@/components/Statistic'
import Paging from '@/components/Paging'
export default {
  name: 'UserPage',
  components: {
    Statistic,
    Paging
  }
}
</script>

<style scoped>
.userPage{
  width: 100%;
  display: flex;
  flex-direction: column;
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
.header{
  height: 50px;
  text-align: left;
  border-bottom-style: solid;
  padding-left: 10px;
  padding-right: 10px;
  margin-bottom: 20px;
  font-size: 25px;
  user-select: none;
  font-weight: bolder;
  border-bottom-width: 2px;
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
.title{
  float: left;
}
.titleButton{
  width: 110px;
  height: 40px;
  background-color: #0063b1;
  border-style: solid;
  border-width: 1px;
  border-color: #0063b1;
  float: right;
  color: white;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Microsoft JhengHei";
  cursor: pointer;
}
.titleButton:hover{
  background-color: #3f90ce;
  border-color: #aad6f8;
}
.userListLabelBox{
  height: 50px;
  width: 100%;
  display: flex;
}
.userListLabel{
  height: 50px;
  background-color: #C9C9C9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.15%;
  margin-right: 0.15%;
  font-size: 13px;
}
.checkboxLabel{
  width: 5%;
}
.checkbox{
  width: 15px;
  height: 15px;
}
.usernameLabel{
  width: 20%;
}
.roleLabel{
  width: 12%;
}
.stateLabel{
  width: 10%;
}
.isBannedLabel{
  width: 10%;
}
.totalOnlineTimeLabel{
  width: 20%;
}
.lastOnlineTimeLabel{
  width: 20%;
}
</style>
