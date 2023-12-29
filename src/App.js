import HomePage from './Components/Pages/HomePage';
import { Routes,Route } from 'react-router-dom';
import ContactUs from './Components/Pages/ContactUs';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import AllProducts from './Components/Pages/AllProducts';

function App() {
  return (
  <Routes>
     <Route path='/' element={ <HomePage/>}/>
     <Route path='/ContactUs' element={ <ContactUs/>}/>
     <Route path='/SignIn' element={ <SignIn />}/>
     <Route path='/SignUp' element={ <SignUp />}/>
     <Route path='/Shop' element={ <AllProducts />}/>
    </Routes>
  );
}

export default App;
