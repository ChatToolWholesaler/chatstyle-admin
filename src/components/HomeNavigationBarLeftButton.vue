<template>
  <div class="buttonBox">
    <!-- <div :class="{ a: isActive,  b: !isActive }"></div> -->
  <div :class="[isActive ? buttonActive : '', button]">
      <div>{{ buttonName }}</div>
  </div>
  </div>
</template>

<script>
export default {
  name: 'HomeNavigationBarLeftButton',
  props: ['buttonName', 'button']
}
</script>

<style scoped>
.buttonBox{
  color: white;
  width: 100%;
  height: 50px;
}
.buttonBox:hover{
  background-color: #949494;
}
.buttonBox:active{
  background-color: #0063b1;
}
.button{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
