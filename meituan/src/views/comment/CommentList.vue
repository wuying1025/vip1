<template>
  <div class="list-container">
    <div class="type-box">
      <span>全部</span>
      <span>差评</span>
      <span>味道赞</span>
    </div>
    <ul class="list-box">
      <li class="list">
        <img class="list-img" src="http://admin.gxxmglzx.com/tender/upload/test/head1.jpg" alt />
        <div class="list-info">
          <div class="name">薇薇2v</div>
          <div class="desc">包装很完美诶，虽然送的晚了一点，但是没有凉，串都很好吃，活动力度大，以后点外卖肯定首选你家哦～～～好吃！</div>
        </div>
      </li>
      <li class="list">
        <img class="list-img" src="http://admin.gxxmglzx.com/tender/upload/test/head1.jpg" alt />
        <div class="list-info">
          <div class="name">薇薇2v</div>
          <div class="desc">包装很完美诶，虽然送的晚了一点，但是没有凉，串都很好吃，活动力度大，以后点外卖肯定首选你家哦～～～好吃！</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.list-container {
  padding: 0.2rem;
  border-top: 0.2rem solid #f4f4f4;

  .type-box {
      padding-bottom: 0.3rem;
    span {
      padding: 0.1rem 0.24rem;
      border: 1px solid #bbb;
      border-radius: 0.28rem;
      margin-right: 0.2rem;
    }
  }
  .list-box {
    .list {
        display: flex;
      .list-img {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
      }
    }
  }
}
</style>