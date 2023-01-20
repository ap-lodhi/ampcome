
import './App.css';
import { Route, Routes  } from 'react-router-dom';
import Login from './Componets/Login';
import Dashboard from './Componets/Dashboard';

function App() {
  return (
  <>
  
    <Routes>
      <Route path='/' element={<Login/>}></Route>
      <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
     
   
  </>
  );
}

export default App;
