import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Product from './components/Product.js'
import {Route, BrowserRouter,Routes} from 'react-router-dom'
import Cart from './components/Cart.js'
function App() {
 

  
  return (
    <div className="App">
      <BrowserRouter>
 <Routes>
 <Route path='/' element={<Product/>}/>
 <Route exact path='/cart' element={<Cart/>}/>
 </Routes>
   

  
  </BrowserRouter>
     
    </div>
  );
}

export default App;
