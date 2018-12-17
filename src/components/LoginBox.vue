<template>
  <div class="loginBox">
    <h1 class="loginBoxHeader">登陆</h1>
    <div class="alertBox">
      <div class="alertIcon"></div>
      <div class="alertDetail">{{ alertMessage }}</div>
    </div>
    <div class="inputBox">
      <img class="inputIcon" src="../assets/LoginPage/username.png" />
      <input v-model="adminname" placeholder="用户名" type="text" class="input" required />
    </div>
    <div class="inputBox inputBoxmargin">
      <img class="inputIcon" src="../assets/LoginPage/password.png" />
      <input v-model="password" placeholder="密码" type="password" class="input inputPassword" required />
    </div>
    <!-- 暂时跳转 -->
    <router-link to="/home">
      <button class="loginButton" @click="login()">确认登陆</button>
    </router-link>
  </div>
</template>

<script src="./iconfont.js"></script>
<script>
export default {
  name: 'LoginBox',
  data () {
    return {
      adminname: 'root',
      password: '123456',
      alertMessage: ' '
    }
  },
  methods: {
    login () {// 请求登陆
      var storage = window.localStorage
      storage.adminname = this.adminname
      const axios = require('axios')
      axios.post('http://localhost:3000/api/v1/admin/login',{
        adminname: this.adminname,
        password: this.password
      })
      .then(function (response) {
        switch (response.data.code) {
          // case 200: {
          //   this.$router.push({path: '/home'})
          //   break
          // }
          // case 412:{
          //   console.log('密码错误')
          //   break
          // }
          default: {
            // this.$emit('linkPath', '/home')
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.loginBox{
  width: 400px;
  height: 380px;
  background: rgba(255,255,255,0.8);
}
.loginBoxHeader{
  margin-top: 10%;
  margin-left: 15%;
  text-align: left;
  user-select: none;
}
.inputBox{
  width: 76%;
  height: 10%;
  margin-left: 12%;
  margin-right: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}
.inputBoxmargin{
  margin-top: 10%;
}
.input{
  width: 100%;
  height: 100%;
  background-color: white;
  border-style: none;
  padding: 0 2%;
  outline-color: #949494;
}
.loginButton{
  width: 40%;
  height: 10%;
  float: right;
  margin-right: 12%;
  margin-top: 12%;
  background-color: #949494;
  color: white;
  border-style: none;
}
.loginButton:hover{
  cursor: pointer;
}
.inputIcon{
  width: 20px;
  height: 20px;
  position: absolute;
  padding-right: 10px;
}
.inputPassword{
  user-select: none;
}
.alertBox{
  width: fit-content;
  height: 20px;
  margin-top: 5%;
  margin-bottom: 1.5%;
  margin-left: 12%;
  display: flex;
}
.alertIcon{
  width: 20px;
  height: 20px;
  background-size: contain;
  background-image: url(../assets/warning.png);
  display: none;
}
.alertDetail{
  margin-left: 10px;
  width: fit-content;
  height: 100%;
  display: flex;
  align-items: center;
  text-align: center;
}
</style>
