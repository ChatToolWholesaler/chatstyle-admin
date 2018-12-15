<template>
  <div class="loginBox">
    <h1 class="loginBoxHeader">登陆</h1>
    <div class="inputBox">
      <img class="inputIcon" src="../assets/LoginPage/username.png" />
      <input v-model="username" placeholder="用户名" type="text" class="input" required />
    </div>
    <div class="inputBox">
      <img class="inputIcon" src="../assets/LoginPage/password.png" />
      <input v-model="password" placeholder="密码" type="password" class="input inputPassword" required />
    </div>
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
      username: '',
      password: ''
    }
  },
  methods: {
    login () {
      console.log("尝试登陆")
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
  margin-top: 10%;
  margin-left: 12%;
  margin-right: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
</style>
