<template>
  <div>
    <ul>
        <!-- 传过来num = 3.5  1  class名 根据num和i对比  -->
      <li v-for="i in 5" :key="i" :class="{
          'active':i<=num,
          'unactive':i>num
      }"></li>
      <!-- <li class="active"></li>
      <li class="half-active"></li>
      <li class="unactive"></li> -->
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    num: {
      type: Number,
      default: 5
    }
  }
};
</script>

<style lang="scss" scoped>
ul {
  display: flex;
  li {
    width: 12px;
    height: 12px;
    background-size: 12px 12px;
  }
  .active {
    background-image: url(./images/star-active.png);
  }
  .half-active {
    background-image: url(./images/star-half.png);
  }
  .unactive {
    background-image: url(./images/star.png);
  }
}
</style>