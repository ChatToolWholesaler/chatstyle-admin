<template>
  <div class="userPage">
    <div class="userStatisticBox">
      <h1 class="header">用户统计</h1>
      <statistic statistic-name="总用户数" :statistic-value="totalUserNumber"></statistic>
      <statistic class="statisticMargin" statistic-name="当前在线人数" :statistic-value="onlineUserNumber"></statistic>
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
        <div class="userListLabel isOnlineLabel">是否在线</div>
        <div class="userListLabel isBannedLabel">是否被封禁</div>
        <div class="userListLabel createTimeLabel">注册时间</div>
        <div class="userListLabel lastOnlineTimeLabel">上次在线时间</div>
      </div>
      <div class="userListLabelBox" v-for="(res, index) in responseData" :key="index">
        <div class="userListLabel checkboxLabel userListLabelBackColor"><input :id="index" class="checkbox" type="checkbox"></div>
        <div class="userListLabel usernameLabel userListLabelBackColor">{{ res.username }}</div>
        <div class="userListLabel isOnlineLabel userListLabelBackColor">{{ res.isOnline }}</div>
        <div class="userListLabel isBannedLabel userListLabelBackColor">{{ res.isBanned }}</div>
        <div class="userListLabel createTimeLabel userListLabelBackColor">{{ res.createTime }}</div>
        <div class="userListLabel lastOnlineTimeLabel userListLabelBackColor">{{ res.lastOnlineTime }}</div>
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
  },
  data () {
    return {
      totalUserNumber: 1,
      onlineUserNumber: 0,
      responseData: null
    }
  },
  methods: {
    createUserList: function (response) {
      console.log(response.data.data)
    }
  },
  mounted () {
    var _this = this
    const axios = require('axios')
    axios.post('http://localhost:3000/api/v1/admin/user/getStatistics'
    ).then(function (response) {
      _this.totalUserNumber = response.data.data.totalUserNumber
      _this.onlineUserNumber = response.data.data.onlineUserNumber
    })
    axios.post('http://localhost:3000/api/v1/admin/user/getUserList'
    ).then(function (response) {
      _this.responseData = response.data.data
    })
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
  height: fit-content;
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
  width: 25%;
}
.isOnlineLabel{
  width: 10%;
}
.isBannedLabel{
  width: 10%;
}
.createTimeLabel{
  width: 25%;
}
.lastOnlineTimeLabel{
  width: 25%;
}
.userListLabelBackColor{
  background-color: white;
}
</style>
