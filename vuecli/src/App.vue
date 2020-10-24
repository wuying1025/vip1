<template>
  <div id="app">
     <router-link to="/4">/</router-link>
     |
    <router-link to="/home">首页</router-link>
    |
    <!-- query传参 -->
    <!-- <router-link :to="{path:'/test',query:{id:11,name:'zs'}}">测试</router-link> -->
    <!-- params传参 -->
    <router-link :to="{name:'test',params:{id:22,name:'zs'}}">测试</router-link>
    <!-- 路由路径传参 -->
    |
    <router-link to="/test3/3">测试3</router-link>

    <router-view></router-view>

  </div>
</template>
<script>
// 1 引入组件 import  2 components声明 3使用
// import Test from "./views/Test";
export default {
  // components: {
  //   Test
  // }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
