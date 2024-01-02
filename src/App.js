import HomePage from './Components/Pages/HomePage';
import { Routes,Route } from 'react-router-dom';
import ContactUs from './Components/Pages/ContactUs';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import Cart from './Components/Pages/Cart';
import TradePage from './Components/Pages/TradePage.jsx'
import AllProducts from './Components/Pages/AllProducts';


function App() {
  return (
  <Routes>
     <Route path='/' element={ <HomePage/>}/>
     <Route path='/ContactUs' element={ <ContactUs/>}/>
     <Route path='/SignIn' element={ <SignIn />}/>
     <Route path='/SignUp' element={ <SignUp />}/>
     <Route path='/Cart' element={ <Cart />}/>
     <Route path='/Shop' element={ <AllProducts />}/>
     <Route path='/Trade' element={ <TradePage />}/>
    </Routes>
  );
}

export default App;
