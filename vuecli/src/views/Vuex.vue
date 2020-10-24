<template>
  <div>
    vuex
    <!-- 读取state中存储状态 -->
    {{
    $store.state.count
    }}
    ----
    {{count}}
    <!-- 
        $store.commit 触发mutations中的方法
    -->
    <button @click="$store.commit('add',5)">++</button>
    <button @click="add(6)">++</button>
    <h2>count的值为{{count}}</h2>
    <h2>count2的值为{{$store.state.count2}}</h2>
    <h2>
      sum的值为 ： {{$store.getters.sum}}
    </h2>
    <h2>sum的值为{{sum}}</h2>
  </div>
</template>

<script>
import { mapState, mapMutations ,mapGetters} from "vuex";
import axios from 'axios'
export default {
  computed: {
    ...mapState(["count"]),
    ...mapGetters(['sum'])
  },
  methods: {
    ...mapMutations(["add"])
  },

  created(){
     // action中的方法 dispatch调用
      this.$store.dispatch('getMovieList');
  }
};
</script>

<style lang="scss" scoped>
</style>