<template>
  <div class="statistic">
    <div class="tag"></div>
    <div class="statisticInfo">{{ statisticName }}:{{ statisticValue }}</div>
  </div>
</template>

<script>
export default {
  name: 'Statistic',
  props: ['statisticName', 'statisticValue']
}
</script>

<style scoped>
.statistic{
  width: 220px;
  height: 50px;
  background-color: #F2F2F2;
  float: left;
  margin-top: 15px;
  margin-bottom: 15px;
}
.tag{
  height: 100%;
  width: 10px;
  background-color: #666666;
  float: left;
}
.statisticMargin{
  margin-left: 130px;
  margin-right: 130px;
}
.statisticInfo{
  height: 100%;
  width: 210px;
  float: left;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 15px;
}
</style>
