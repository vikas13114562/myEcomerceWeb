
import {Route,Routes} from 'react-router-dom'
import Home from './Home'
import Shop from '../routes/shop-page/Shop';
import Navigation from './Navigation';
import Authentication from '../routes/Authentication';
import Checkout from '../routes/checkout-page/Checkout';



function App() {
  return (
    
      <Routes>
        <Route path='/' element = {<Navigation />}>
          <Route index element = {<Home />} /> 
          <Route path='login' element = {<Authentication />} /> 
          <Route path='shop/*' element = {<Shop />} /> 
          <Route path = "checkout" element = {<Checkout />} />
        </Route>
        
      </Routes>
 
    
  );
}

export default App;
