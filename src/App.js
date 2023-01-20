
import './App.css';
import { Route, Routes  } from 'react-router-dom';
import Login from './Componets/Login';

function App() {
  return (
  
    <Routes>
      <Route path='/' element={<Login/>}></Route>
    </Routes>
   
  );
}

export default App;
