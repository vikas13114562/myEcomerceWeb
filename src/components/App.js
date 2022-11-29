
import {Route,Routes} from 'react-router-dom'
import Home from "./Home";
import Navigation from './Navigation';
import SignIn from '../routes/SignIn';

function App() {
  return (
    
      <Routes>
        <Route path='/' element = {<Navigation />}>
          <Route index element = {<Home />} /> 
          <Route path='signin' element = {<SignIn />} /> 

        </Route>
        
      </Routes>
 
    
  );
}

export default App;
