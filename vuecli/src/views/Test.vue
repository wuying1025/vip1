<template>
  <div class="container">
    <h2>我是标题</h2>
    <p>我是内容 哈哈哈</p>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
// scoped 作用域 当前组件生效
.container {
  h2 {
    background: red;
  }
  p {
    background: green;
  }
}
</style>