<template>
  <div class="header-box">
    <div class="store-score">
      <div class="num">4.8</div>
      <div>商家评分</div>
    </div>
    <div class="score">
      <div>口味 4分</div>
      <div>包装 4分</div>
    </div>
    <div class="peisong-score">
      <div class="num">4.8</div>
      <div>配送评分</div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.header-box {
  display: flex;
  padding: 0.3rem;
  .store-score,
  .peisong-score {
    width: 1.86rem;
    text-align: center;
    font-size: 0.28rem;
    .num {
      font-size: 0.54rem;
      font-weight: bold;
      line-height:0.54rem;
    }
  }
  .store-score {
    .num {
      color: #ffb000;
    }
  }

  .peisong-score {
    .num {
      color: #999;
    }
  }

  .score {
    flex: 1;
  }
}
</style>