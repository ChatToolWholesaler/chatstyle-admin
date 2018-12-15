<template>
  <div class="buttonBox">
    <div id="buttonLabel" class="buttonLabel" :class="{ selectedButtonLabel: isSelected}"></div>
    <div id="button" class="button" :class="{ selectedButton: isSelected }">{{ buttonName }}</div>
  </div>
</template>

<script>
export default {
  name: 'HomeNavigationBarLeftButton',
  props: ['buttonName', 'isSelected']
}
</script>

<style scoped>
.buttonBox{
  color: white;
  width: 100%;
  height: 50px;
}
.buttonBox:hover{
  background-color: #666;
}
.selectedButton{
  background-color: #333;
}
.selectedButtonLabel{
  background-color: #0063b1;
}
.button{
  width: 96%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
  float: left;
}
.buttonBox:active{
  background-color: #0063b1;
}
.buttonLabel{
  width: 4%;
  height: 100%;
  float: left;
}
</style>
