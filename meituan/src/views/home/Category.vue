<template>
    <div>
        <ul>
            <li v-for="obj in cateList" :key="obj.id">
                <img :src="obj.img" alt="">
                <p>{{obj.name}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data(){
            return {
                cateList:[]
            }
        },
        created(){
            axios.get('http://admin.gxxmglzx.com/tender/test/get_type')
            .then((res)=>{ //成功
                // axios返回的数据 res.data
                console.log(res.data)
                let result = res.data;
                if(result.errcode == 200){
                    this.cateList = result.data;
                }
            }).catch((error)=>{ //失败
                console.log(error)
            })
        }
    }
</script>

<style lang="scss" scoped>

</style>