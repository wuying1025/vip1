<template>
    <div>
        我是首页
        <router-link to="/home/a">a菜单</router-link>
        <router-link to="/home/b">b菜单</router-link>
        {{
            $store.state.count
        }}

        {{
            $store.state.a.list
        }}
        <ul>
            <li v-for="(obj,index) in $store.state.b.prolist" :key="index">{{obj.name}}</li>
        </ul>
        <button @click="$store.commit('a/add')">添加赵六</button>
        
        <!-- {{$store.state.b.prolist}} -->
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>