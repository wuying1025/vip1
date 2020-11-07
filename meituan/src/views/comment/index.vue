<template>
  <div>
    <!-- header -->
    <comment-header :list="list"></comment-header>
    <!-- list -->
    <comment-list :list="list"></comment-list>
  </div>
</template>

<script>
import axios from "axios";
import CommentHeader from "./CommentHeader";
import CommentList from "./CommentList";
export default {
    data(){
        return {
            id:this.$route.query.id,
            list:{}
        }
    },
  components: {
    CommentHeader,
    CommentList
  },
  created() {
    // 请求评论也数据

    axios.get(`http://admin.gxxmglzx.com/tender/test/get_info?id=${this.id}&type=1`)
    .then((res)=>{
        console.log(res.data.data)
        this.list = res.data.data;
        // this.score.delivery = 
    })
  }
};
</script>

<style lang="scss" scoped>
</style>