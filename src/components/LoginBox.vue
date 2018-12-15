<template>
  <div class="LoginBox">
    <h1 class="LoginBoxHeader">登陆</h1>
    <div class="InputBox">
      <img class="InputIcon" src="../assets/LoginPage/username.png" />
      <input v-model="username" placeholder="用户名" type="text" class="Input" required />
    </div>
    <div class="InputBox">
      <img class="InputIcon" src="../assets/LoginPage/password.png" />
      <input v-model="password" placeholder="密码" type="password" class="Input" required />
    </div>
    <router-link to="/home">
      <button class="LoginButton" @click="login()">确认登陆</button>
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
.LoginBox{
  width: 400px;
  height: 380px;
  background: rgba(255,255,255,0.8);
}
.LoginBoxHeader{
  margin-top: 10%;
  margin-left: 10%;
  text-align: left;
}
.InputBox{
  width: 76%;
  height: 10%;
  margin-top: 10%;
  margin-left: 12%;
  margin-right: 10%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
}

.Input{
  width: 100%;
  height: 100%;
  background-color: white;
  border-style: none;
  padding: 0 2%;
  outline-color: #949494;
}

.LoginButton{
  width: 40%;
  height: 10%;
  float: right;
  margin-right: 12%;
  margin-top: 12%;
  background-color: #949494;
  color: white;
  border-style: none;
}
.LoginButton:hover{
  cursor: pointer;
}
.InputIcon{
  width: 20px;
  height: 20px;
  position: absolute;
  padding-right: 10px;
}
</style>
