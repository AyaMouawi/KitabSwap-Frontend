import HomePage from './Components/Pages/HomePage';
import {BrowserRouter, Routes,Route } from 'react-router-dom';
import ContactUs from './Components/Pages/ContactUs';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';
import Cart from './Components/Pages/Cart';
import TradePage from './Components/Pages/TradePage.jsx';
import AllProducts from './Components/Pages/AllProducts';
import NoAccess from './Components/Pages/NoAccess';
import PageNotFound from './Components/Pages/PageNotFound';
import UserDashboard from './Components/Pages/UserDashboard';
import AdminDashboard from './Components/Pages/AdminDashboard.jsx';
import PrivateRoute from './PrivateRoute.js';

function App() {
  return (
  <BrowserRouter>
  <Routes>
     <Route path='/' element={ <HomePage/>}/>
     <Route path='/ContactUs' element={ <ContactUs/>}/>
     <Route path='/SignIn' element={ <SignIn />}/>
     <Route path='/SignUp' element={ <SignUp />}/>
     <Route path='/Cart' element={ <Cart />}/>
     <Route path='/Shop' element={ <AllProducts />}/>
     <Route path='/*' element={<PageNotFound/>}/>
     <Route path='/Trade' element={ <TradePage />}/>
     <Route path= '/NoAccess' element={<NoAccess/>}/>
     <Route path='/UserDash' element={<PrivateRoute element={<UserDashboard/>} allowedRoles={'client'} fallbackPath="/NoAccess" />}/>
     <Route path='/AdminDashboard/*' element={<PrivateRoute element={<AdminDashboard/>} allowedRoles={'admin'} fallbackPath="/NoAccess" />}/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
