import myContext from './myContext'
import {useContext} from 'react'
const Child1 = ()=>{
    const count = useContext(myContext);
    return (
    <div>我是子组件 {count}</div>
    )
}
export default Child1;
