<template>
    <div>
        我是首页
        <router-link to="/home/a">a菜单</router-link>
        <router-link to="/home/b">b菜单</router-link>
        {{
            $store.state.count
        }}

        <ul>
            <!-- $store.state.xx     a模块中$store.state.a.xx -->
            <li v-for="(obj,index) in $store.state.a.list" :key="index">
                {{obj.name}}
            </li>   
        </ul>
        <ul>
            <li v-for="(obj,index) in $store.state.b.prolist" :key="index">{{obj.name}}</li>
        </ul>
        <button @click="$store.commit('a/add')">添加赵六</button>
        <button @click="$store.commit('b/reverse')">颠倒商品列表数组</button>
        
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