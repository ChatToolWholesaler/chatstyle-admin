<template>
  <div class="newAnnouncementPage">
    <div class="newAnnouncementBox">
      <h1 class="header">新公告</h1>
      <div class="title">标题:</div>
      <textarea maxlength="20" v-model="title" class="input" required></textarea>
      <div class="title">内容</div>
      <textarea v-model="detail" class="input detail"></textarea>
      <div :class="{ buttonBackColor: isFailed }" class="button" @click="sendNewAnnoucement()">确认发布</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewAnnouncementPage',
  data () {
    return {
      title: '',
      detail: '',
      isFailed: false
    }
  },
  methods: {
    sendNewAnnoucement: function () {
      var _this = this
      var axios = require('axios')
      axios.post('http://localhost:3000/api/v1/admin/announcement/publish', {
        title: _this.title,
        detail: _this.detail
      }).then(function (response) {
        switch (response.data.code) {
          case 200: {
            _this.isFailed = false
            _this.$emit('selectByButton', 2)
            break
          }
          default: {
            console.log(response.data)
            _this.isFailed = true
          }
        }
      })
    }
  }
}
</script>

<style scoped>
.newAnnouncementPage{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1200px;
  overflow: scroll;
  padding-top: 80px;
  padding-bottom: 80px;
}
.newAnnouncementBox{
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
.title{
  width: 100%;
  height: 40px;
  display: flex;
  font-size: 20px;
}
.input{
  width: 100%;
  height: 50px;
  outline: none;
  font-size: 15PX;
  resize: vertical;
}
.detail{
  height: 300px;
}
.button{
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
  user-select: none;
}
.button:hover{
  background-color: #3f90ce;
  border-color: #aad6f8;
}
.buttonBackColor{
  background-color: red;
  border-color: red;
}
.buttonBackColor:hover{
  background-color: red;
  border-color: red;
}
</style>
