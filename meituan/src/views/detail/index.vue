<template>
  <div class="bs-wrapper">
    <div class="bs-content">
      <DetailHead :storeMsg="storeMsg"></DetailHead>
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
    <!-- <div class="cart" v-if="active == 0"></div> -->
    <cart v-if="active == 0" :storeMsg="storeMsg"></cart>
  </div>
</template>

<script>
import DetailHead from "./DetailHead";
import Comment from "@/views/comment/index";
import Order from "@/views/order/index";
import BetterScroll from "better-scroll";
import Cart from './../cart'
import axios from 'axios'
export default {
  data() {
    return {
      active: 0,
      storeMsg:{}
    };
  },
  components: {
    DetailHead,
    Comment,
    Order,
    Cart
  },
  mounted() {
    setTimeout(() => {
      let bs = new BetterScroll(".bs-wrapper", {
        click: false,
        bounce: false
      });
    }, 1000);

    // 请求商家数据
    axios.get('http://admin.gxxmglzx.com/tender/test/get_store_id?id='+this.$route.query.id)
    .then(res=>{
      this.storeMsg = res.data.data;
    }).catch(err=>{
      console.log(err)
    })

  }
};
</script>

<style lang="scss" scoped>
.bs-wrapper {
  height: 100vh;
  overflow: hidden;

}
</style>