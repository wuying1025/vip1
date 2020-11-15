<template>
  <div class="bs-wrapper">
    <div class="bs-content">
      <DetailHead></DetailHead>
      <!-- tab切换 -->
      <van-tabs v-model="active" animated sticky color="#ffb000">
        <van-tab :title="'点餐'">
          <order></order>
        </van-tab>
        <van-tab :title="'评论'">
          <!-- 引入评价页的组件 -->
          <comment></comment>
        </van-tab>
        <van-tab :title="'商家'">商家页</van-tab>
      </van-tabs>
    </div>

    <!-- 购物车 （为了解决better-scroll 和fix失效问题） -->
    <div class="cart" v-if="active == 0"></div>
  </div>
</template>

<script>
import DetailHead from "./DetailHead";
import Comment from "@/views/comment/index";
import Order from "@/views/order/index";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      active: 0
    };
  },
  components: {
    DetailHead,
    Comment,
    Order
  },
  mounted() {
    setTimeout(() => {
      let bs = new BetterScroll(".bs-wrapper", {
        click: true,
        bounce: false
      });
    }, 1000);
  }
};
</script>

<style lang="scss" scoped>
.bs-wrapper {
  height: 100vh;
  overflow: hidden;
  .cart {
    height: 50px;
    background: #3b3b3c;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
}
</style>