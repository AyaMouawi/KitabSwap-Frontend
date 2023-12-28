import HomePage from './Components/Pages/HomePage';
import { Routes,Route } from 'react-router-dom';
import ContactUs from './Components/Pages/ContactUs';

function App() {
  return (
  <Routes>
     <Route path='/' element={ <HomePage/>}/>
     <Route path='/ContactUs' element={ <ContactUs/>}/>

    </Routes>
  );
}

export default App;
