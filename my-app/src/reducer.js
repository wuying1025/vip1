import {combineReducers} from 'redux'
const num =(prevState=0,action)=>{
    console.log(prevState,action) //{type:'ADD'}
    switch (action.type){
        case "ADD":
            return prevState+1;
        default:
            return prevState;
    }
}

let reducer = combineReducers({
    num
})
export default reducer;


