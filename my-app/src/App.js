import { useState, useEffect, useRef, useMemo, memo ,useCallback,useReducer} from 'react'
import Child1 from './Child1'
import myContext from './myContext'
// function Child({ data }) {
//     console.log('render ',data)
//     return (
//         <div>子组件 {data.title}</div>
//     )
// }

// 子组件
const Child = memo(({ data, change }) => {
    console.log('render ', data)
    return (
        <div>
            <div>子组件 {data.title}</div>
            <button onClick={()=>{
                change()
            }}>change click</button>
        </div>

    )
})
const reducer = (state=0,{type}) =>{
    switch (type){
        case "add":
            return state+1;
        case "reduce":
            return state-1;
        default:
            return state
    }
}
// 主组件 父组件

function App(props) {
    const [count, setCount] = useState(0);
    const [list, setList] = useState([{ name: 'zs' }, { name: 'lisi' }]);

    const [title, setTitle] = useState('title1')
    // componentDidMount  willUpdate 
    useEffect(() => {
        console.log('useEffect');
        // willUpdate 和 willUnMount
        // return ()=>{
        //     console.log('return use')
        // }
    }, [count])

    const inputEl = useRef(null);
    // 声明周期中 shouldComponentUpdate 
    const data = useMemo(() => {
        return {
            title
        }
    }, [title])
    // const data = {
    //     title: '1111'
    // }
    const change = useCallback(()=>{
        console.log(1)
    },[])
    // const change = function () {
    //     console.log(1)
    // }

    // useReducer(reducer,初始值)
    const [num, dispatch] = useReducer(reducer, 0);

    return (
        <div>
            <h2>{count}</h2>
            <button onClick={() => {
                setCount(count - 1)
            }}>click</button>
            <ul>
                {
                    list.map((obj, index) => {
                        return <li key={index}>{obj.name}</li>
                    })
                }
            </ul>
            <button onClick={() => {
                let arr = [...list];
                arr.push({ name: 'wangwu' });
                setList(arr)
            }}>add</button>
            <input type="text" ref={inputEl} />
            <button onClick={() => {
                console.log(inputEl.current.value)
            }}>click</button>
            <button onClick={() => {
                setTitle('title1')
            }}>修改title</button>
            {/* 子组件引入 */}
            <Child data={data} change={change}></Child>
            <h1>这是存在reduer中的num : {num}</h1>
            <button onClick={
                ()=>{
                    dispatch({type:'add'})
                }
            }> ++</button>
            <button onClick={
                ()=>{
                    dispatch({type:'reduce'})
                }
            }> --</button>
            <myContext.Provider value={count}>
                <Child1></Child1>
            </myContext.Provider>
        </div>
    )

}
export default App;