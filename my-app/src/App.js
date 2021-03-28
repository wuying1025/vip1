import {Link,NavLink,Route, Redirect,Prompt} from 'react-router-dom'
import Home from './views/Home'
import Detail from './views/Detail'
import Test3 from './views/Test3'
import './App.css'
let flag = true;
function App() {
  return (
    <div className="App">
      test
      
      <Test3></Test3>
      {/* <Link to="/">首页</Link>
      <Link to="/detail/5">详情页</Link>
      <Link to="/test">测试1</Link>
      <Link to="/test2">测试2</Link> */}
      <NavLink to="/home" activeClassName="xx">首页</NavLink>
      <NavLink to="/detail/5">详情页</NavLink>
      <NavLink to="/test">测试1</NavLink>
      <NavLink to="/test2">测试2</NavLink>


      <Route path="/home" exact component={Home}></Route>
      {/* <Route path="/home" component={Home}></Route> */}
      <Route path="/detail/:id" exact component={Detail}></Route>
      {/* <Route path="/test" render={()=>{
        return(
          <div>
            <h2>11111</h2>
            <p>ceshi 1</p>
          </div>
        )
      }}></Route> */}
      {/* <Route path="/test2" children={()=>{
        return (
          <div>我是children</div>
        )
      }}></Route> */}
      {/* <Route path="/test" render={()=>{
        return <Redirect to="/"></Redirect>
      }}></Route> */}
      {/* <Prompt when={flag} message={()=>("确定跳转？")}></Prompt> */}




    </div>
  );
}

export default App;
