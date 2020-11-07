<template>
  <div class="list-container">
    <div class="type-box">
      <span v-for="obj in list.label" :key="obj.id" @click="change(obj.id)">{{obj.name}} ({{obj.count}})</span>
    </div>
    <ul class="list-box">
      <li class="list" v-for="obj in list.rate" :key="obj.id">
        <img class="list-img" :src="obj.portrait" alt />
        <div class="list-info">
          <div class="name">{{obj.name}}</div>
          <div class="desc">{{obj.content}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    props:["list"],
    created(){
        console.log(this.list)
    },
    methods:{
        change(id){
            // 获取当前点击的id 传到父组件
            this.$emit('update',id)
        }
    }
};
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
      display: inline-block;
      margin-bottom: 0.1rem;
    }
  }
  .list-box {
    .list {
        display: flex;
        margin-bottom: 0.2rem;
      .list-img {
        width: 0.8rem;
        height: 0.8rem;
        border-radius: 50%;
        margin-right: 0.2rem;
      }
    }
  }
}
</style>