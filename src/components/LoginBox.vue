<template>
  <div class="LoginBox">
    <h1 class="LoginBoxHeader">登陆</h1>
    <div class="InputBox">
      <img class="InputIcon" src="../assets/LoginPage/username.png" />
      <input placeholder="用户名" type="text" class="Input" />
    </div>
    <div class="InputBox">
      <img class="InputIcon" src="../assets/LoginPage/password.png" />
      <input placeholder="密码" type="password" class="Input" />
    </div>
    <button class="LoginButton">确认登陆</button>
  </div>
</template>

<script src="./iconfont.js"></script>
<script>
export default {
  name: 'LoginBox'
}
</script>

<style scoped>
.LoginBox{
  width: 400px;
  height: 400px;
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
  margin-left: 10%;
  margin-right: 10%;
}
.Input{
  width: 100%;
  height: 100%;
  background-color: white;
  border-style: none;
  padding: 0 2%;
}
.LoginButton{
  width: 40%;
  height: 10%;
  float: right;
  margin-right: 10%;
  margin-top: 12%;
  background-color: #949494;
  color: white;
  border-style: none;
}
.InputIcon{
  width: 20px;
  height: 20px;
  position: absolute;
}
</style>
