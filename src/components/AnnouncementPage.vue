<template>
  <div class="announcementPage">
    <div class="announcementStatisticBox">
      <h1 class="header">
        <div class="title">公共统计</div>
      </h1>
      <statistic statistic-name="总公告数" :statistic-value="totalAnnouncementNumber"></statistic>
    </div>
    <div class="announcementListBox">
      <div class="header">
        <div class="title">历史公告</div>
        <div class="titleButton" @click="select()">发新公告</div>
      </div>
      <div class="announcementListLabelBox">
        <div class="announcementListLabel checkboxLabel"><input class="checkbox" type="checkbox"></div>
        <div class="announcementListLabel detailLabel">公告详情</div>
      </div>
      <div class="announcementListLabelBox" v-for="(res, index) in responseData" :key="index">
        <div class="announcementList checkboxList">
          <input :id="index" class="checkbox" type="checkbox">
        </div>
        <div class="announcementList detailList">
          <div class="announcementTitle">{{ res.title }}</div>
          <div class="announcementDetail">{{ res.detail }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Statistic from '@/components/Statistic'
export default {
  name: 'AnnouncementPage',
  components: {
    Statistic
  },
  data () {
    return {
      totalAnnouncementNumber: '未知',
      responseData: null
    }
  },
  methods: {
    select: function () {
      this.$emit('selectByButton', 4)
    },
    getStatistics: function () {
      var _this = this
      const axios = require('axios')
      axios.post('http://localhost:3000/api/v1/admin/announcement/getStatistics'
      ).then(function (response) {
        _this.totalAnnouncementNumber = response.data.data.totalNumb
      })
    },
    createAnnouncementsList: function () {
      var _this = this
      const axios = require('axios')
      axios.post('http://localhost:3000/api/v1/admin/announcement/getHistory'
      ).then(function (response) {
        _this.responseData = response.data.data
      })
    }
  },
  mounted () {
    this.getStatistics()
    this.createAnnouncementsList()
  }
}
</script>

<style scoped>
.announcementPage{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1200px;
  overflow: scroll;
  padding-top: 80px;
  padding-bottom: 80px;
}
.announcementStatisticBox{
  width: 920px;
  height: fit-content;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
}
.statisticMargin{
  margin-left: 130px;
  margin-right: 130px;
}
.announcementListBox{
  width: 920px;
  height: fit-content;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
  margin-top: 100px;
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
.announcementListLabelBox{
  height: fit-content;
  width: 100%;
  display: flex;
}
.announcementListLabel{
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
.detailLabel{
  width: 94%;
}
.announcementList{
  background-color: #C9C9C9;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.15%;
  margin-right: 0.15%;
  font-size: 13px;
  border-bottom-style: solid;
  border-bottom-width: 1px;
  border-bottom-color: #C9C9C9;
  padding: 10px 0;
}
.checkboxList{
  width: 5%;
  background-color: white;
}
.detailList{
  height: fit-content;
  width: 94%;
  background-color: white;
  display: flex;
  flex-direction: column;
  text-align: left;
  overflow: auto;
}
.announcementTitle{
  font-size: 20px;
  width: 100%;
  font-weight: 900;
  margin-bottom: 10px;
}
.announcementDetail{
  font-size: 20px;
  width: 100%;
}
</style>
