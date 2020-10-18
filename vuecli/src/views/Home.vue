<template>
    <div>
        我是首页
        <!-- query -->
        <!-- {{
            $route.query.id
        }} -->
        <!-- params -->
        {{$route.params.id}}
        <router-link to="/home/a">A</router-link>
        <router-link to="/home/b">B</router-link>
        <router-view></router-view>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>