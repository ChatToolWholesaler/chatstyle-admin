<template>
  <div class="announcementPage">
    <div class="announcementStatisticBox">
      <h1 class="header">公共统计</h1>
      <statistic statistic-name="总公告数"></statistic>
      <statistic class="statisticMargin" statistic-name="已删除公告数"></statistic>
    </div>
    <div class="announcementListBox">
      <div class="header">
        <div class="title">历史公告</div>
        <div class="titleButton">删除公告</div>
        <div class="titleButton">发新公告</div>
      </div>
      <div class="announcementListLabelBox">
        <div class="announcementListLabel checkboxLabel"><input class="checkbox" type="checkbox"></div>
        <div class="announcementListLabel detailLabel">公告详情</div>
      </div>
      <paging></paging>
    </div>
    <div class="announcementListBox">
      <div class="header">
        <div class="title">已删除的公告</div>
        <div class="titleButton">恢复公告</div>
      </div>
      <div class="announcementListLabelBox">
        <div class="announcementListLabel checkboxLabel"><input class="checkbox" type="checkbox"></div>
        <div class="announcementListLabel detailLabel">公告详情</div>
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
  float: right;
  color: white;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Microsoft JhengHei";
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
</style>
