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
        <div class="announcementListLabel checkboxLabel announcementListLabelBackColor"><input :id="index" class="checkbox" type="checkbox"></div>
        <div class="announcementListLabel detailLabel announcementListLabelBackColor">
          <div>标题：{{ res.title }}</div>
          <div>内容：{{ res.detail }}</div>
        </div>
      </div>
      <paging></paging>
    </div>
  </div>
</template>

<script>
import Statistic from '@/components/Statistic'
import Paging from '@/components/Paging'
export default {
  name: 'AnnouncementPage',
  components: {
    Statistic,
    Paging
  },
  data () {
    return {
      totalAnnouncementNumber: 0,
      responseData: null
    }
  },
  methods: {
    select () {
      this.$emit('selectByButton', 4)
    }
  },
  mounted () {
    var _this = this
    const axios = require('axios')
    axios.post('http://192.168.1.124:3000/api/v1/admin/announcement/getStatistics'
    ).then(function (response) {
      _this.totalAnnouncementNumber = response.data.data.totalNumb
    })
    axios.post('http://192.168.1.124:3000/api/v1/admin/announcement/getHistory'
    ).then(function (response) {
      _this.responseData = response.data.data
    })
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
  height: 50px;
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
.announcementListLabelBackColor{
  background-color: white;
  display: flex;
  flex-direction: column;
}
</style>
