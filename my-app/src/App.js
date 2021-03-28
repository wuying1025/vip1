import {Link,Route} from 'react-router-dom'
import Home from './views/Home'
import Detail from './views/Detail'
function App() {
  return (
    <div className="App">
      test
      
      <Link to="/">首页</Link>
      <Link to="/detail">详情页</Link>

      <Route path="/" exact component={Home}></Route>
      {/* <Route path="/home" component={Home}></Route> */}
      <Route path="/detail" component={Detail}></Route>
    </div>
  );
}

export default App;
