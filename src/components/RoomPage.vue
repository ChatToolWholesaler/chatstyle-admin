<template>
  <div class="roomPage">
    <div class="roomStatisticBox">
      <div class="header">
        <div class="title">房间一</div>
      </div>
      <statistic statistic-name="在线人数上限"></statistic>
      <statistic class="statisticMargin" statistic-name="当前在线人数"></statistic>
      <statistic statistic-name="房间状态"></statistic>
      <div class="bottomButtonBox">
        <div class="bottomButton">关闭房间</div>
        <div class="bottomButton">开启房间</div>
      </div>
    </div>
    <div class="roomStatisticBox roomStatisticBoxMargin">
      <div class="header">
        <div class="title">房间二</div>
      </div>
      <statistic statistic-name="在线人数上限"></statistic>
      <statistic class="statisticMargin" statistic-name="当前在线人数"></statistic>
      <statistic statistic-name="房间状态"></statistic>
      <div class="bottomButtonBox">
        <div class="bottomButton">关闭房间</div>
        <div class="bottomButton">开启房间</div>
      </div>
    </div>
  </div>
</template>

<script>
import Statistic from '@/components/Statistic'
export default {
  name: 'RoomPage',
  components: {
    Statistic
  }
}
</script>

<style scoped>
.roomPage{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 1200px;
  overflow: scroll;
  padding-top: 80px;
  padding-bottom: 80px;
}
.roomStatisticBox{
  width: 920px;
  height: fit-content;
  background-color: white;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-left: 40px;
  padding-right: 40px;
}
.roomStatisticBoxMargin{
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
.statisticMargin{
  margin-left: 130px;
  margin-right: 130px;
}
.bottomButtonBox{
  width: 100%;
  height: 40px;
  margin-top: 10px;
  float: left;
  border-top-style: solid;
  border-width: 2px;
  padding-top: 20px;
}
.bottomButton{
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
.bottomButton:hover{
  background-color: #3f90ce;
  border-color: #aad6f8;
}
</style>
