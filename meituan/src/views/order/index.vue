<template>
  <div class="order-container">
    <!-- 左侧分类 -->
    <!-- 外层父元素 高度固定 -->
    <div class="cate-box">
      <ul>
        <li v-for="(obj,index) in nav" @click="change(index)" :key="obj.id">{{obj.name}}</li>
      </ul>
    </div>

    <!-- 右侧商品 -->
    <!--  -->
    <div class="pro-box">
      <div>
        <div class="prod-cate-box" v-for="(obj,index) in goods" :key="index">
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
  </div>
</template>

<script>
import axios from "axios";
import BetterScroll from "better-scroll";
export default {
  data() {
    return {
      nav: [],
      goods: []
    };
  },
  methods:{
    change(index){
      // 获取到跟index索引对应的 .prod-cate-box
      let prodCateList = document.getElementsByClassName("prod-cate-box")
      console.log(prodCateList[index]);
      // ele 元素
      this.prodScroll.scrollToElement(prodCateList[index],300)

    }
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

        // 数据请求回来
        // 渲染到页面后 -> new BetterScroll
        this.$nextTick(() => {
          this.cateScroll = new BetterScroll(".cate-box", {
            click: true,
            bounce: false
          });
          this.prodScroll = new BetterScroll(".pro-box", {
            click: true,
            bounce: false
          });
        });
      });
  }
};
</script>

<style lang="scss" scoped>
.order-container {
  display: flex;
  padding-bottom: 50px;
  .cate-box {
    // 视口高度-上44 -下50
    height: calc(100vh - 94px);
    flex: 1;
    li {
      padding: 0.18rem 0.24rem 0.44rem;
      background: #f5f5f5;
    }
  }
  .pro-box {
    flex: 3;
    height: calc(100vh - 94px);
    .prod-list {
      display: flex;
      .prod-img {
        width: 1.5rem;
      }
      p {
        flex: 1;
      }
    }
  }
}
</style>