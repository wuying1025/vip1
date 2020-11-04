<template>
  <div>
    <DetailHead></DetailHead>
    <!-- tab切换 -->
    <van-tabs v-model="active" animated>
      <van-tab :title="'点餐'" >点餐页</van-tab>
      <van-tab :title="'评论'" >评论页</van-tab>
      <van-tab :title="'商家'" >商家页</van-tab>
    </van-tabs>
    {{$route.query.id}}
  </div>
</template>

<script>
import DetailHead from "./DetailHead";
export default {
    data(){
        return {
            active:0
        }
    },
  components: {
    DetailHead
  }
};
</script>

<style lang="scss" scoped>
</style>