<template>
  <div class="buttonBox">
    <!-- <div :class="{ a: isActive,  b: !isActive }"></div> -->
    <div class="button" :class="{ selectedButton: isSelected }">{{ buttonName }}</div>
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
.button:hover{
  background-color: #666;
}
.selectedButton{
  background-color: #0063b1;
}
.button{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  user-select: none;
}
.button:active{
  background-color: #0063b1;
}
</style>
