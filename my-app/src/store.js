import {createStore} from 'redux'
import reducer from './reducer'

let initState = {
    num:0
}
// createStore 第一个参数是reducer 第二个参数初始状态
let store = createStore(reducer,initState)

export default store;