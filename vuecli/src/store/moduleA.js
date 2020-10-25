const user = {
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
        // 向list数组中添加{name:'zhaoliu'}
        add(state){
            state.list.push({name:'zhaoliu'})
        }
    },
    getters: {

    },
    actions: {
    }
}

export default user;
