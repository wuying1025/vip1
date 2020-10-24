<template>
    <div>
        我是首页
        <router-link to="/home/a">a菜单</router-link>
        <router-link to="/home/b">b菜单</router-link>

        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>