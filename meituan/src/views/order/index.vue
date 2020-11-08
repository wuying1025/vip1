<template>
  <div class="order-container">
    <!-- 左侧分类 -->
    <ul class="cate-box">
      <li v-for="obj in nav" :key="obj.id">{{obj.name}}</li>
    </ul>
    <!-- 右侧商品 -->
    <div class="pro-box">
      <div v-for="(obj,index) in goods" :key="index">
        <h2>{{obj.name}}</h2>
        <ul>
          <li class="prod-list" v-for="prod in obj.content" :key="prod.id">
            <img class="prod-img" :src="prod.img" alt />
            <p>{{prod.name}}</p>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nav: [],
      goods: []
    };
  },
  created() {
    axios
      .get(
        `http://admin.gxxmglzx.com/tender/test/get_nav?id=${this.$route.query.id}`
      )
      .then(res => {
        console.log(res.data.data);
        this.nav = res.data.data.nav;
        this.goods = res.data.data.goods;
      });
  }
};
</script>

<style lang="scss" scoped>
.order-container {
  display: flex;
  .cate-box {
    flex: 1;
    li {
      padding: 0.18rem 0.24rem 0.44rem;
      background: #f5f5f5;
    }
  }
  .pro-box {
    flex: 3;
    .prod-list {
        display: flex;
      .prod-img {
        width: 1.5rem;
      }
      p{
          flex:1
      }
    }
  }
}
</style>