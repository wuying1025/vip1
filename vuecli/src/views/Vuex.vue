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

  </div>
</template>

<script>
import { mapState ,mapMutations} from "vuex";

export default {
    computed:{
        ...mapState(['count'])
    },
    methods:{
        ...mapMutations(['add'])
    }
};
</script>

<style lang="scss" scoped>
</style>