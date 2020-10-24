<template>
    <div>
Test3
<!-- 路径传参   params-->
<!-- {{$route.params.id}}
     {{$route.params.name}} -->
{{id}}
    </div>
</template> 

<script>
    export default {
        data(){
            return {
                id:this.$route.params.id
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>