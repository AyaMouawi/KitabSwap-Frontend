import HomePage from './Components/Pages/HomePage';
import { Routes,Route } from 'react-router-dom';
import SignIn from './Components/Pages/SignIn';
import SignUp from './Components/Pages/SignUp';

function App() {
  return (
  <Routes>
     <Route path='/' element={ <HomePage/>}/>
     <Route path='/SignIn' element={ <SignIn />}/>
     <Route path='/SignUp' element={ <SignUp />}/>
    </Routes>
  );
}

export default App;
