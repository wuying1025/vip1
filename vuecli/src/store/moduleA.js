import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    namespaced: true,
    state: {
        list:[
            {
                name:'zs'
            },{
                name:'lisi'
            },
            {
                name:'wangwu'
            }
        ]
    },
    mutations: {
        add(state){
            state.list.push({name:'zhaoliu'})
        }
    },
    getters: {

    },
    actions: {
    }
})
