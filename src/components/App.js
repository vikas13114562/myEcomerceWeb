
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Shop from '../routes/shop-page/Shop';
import Navigation from './Navigation';
import Authentication from '../routes/Authentication';



function App() {
  return (
    
      <Routes>
        <Route path='/' element = {<Navigation />}>
          <Route index element = {<Home />} /> 
          <Route path='login' element = {<Authentication />} /> 
          <Route path='shop' element = {<Shop />} /> 
        </Route>
        
      </Routes>
 
    
  );
}

export default App;
