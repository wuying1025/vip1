const prod = {
    namespaced: true,
    state: {
        prolist:[
            {
                name:'iphone12'
            },{
                name:'QQ'
            },{
                name:'xx'
            }
        ]
    },
    mutations: {
        // 数组颠倒
        reverse(state){
            state.prolist.reverse();
        }
    },
    getters: {

    },
    actions: {
    }
}

export default prod;
