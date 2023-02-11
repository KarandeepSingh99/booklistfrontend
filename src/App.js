
import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Homepage from './components/Homepage/Homepage';
//import { LoginContext } from './components/context/LoginContext';
import { useState } from 'react';
import Add from './components/Add/Add';
import View from './components/View/View';

function App() {
  
 // const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/add' element={<Add />} />
      <Route path='/view' element={<View />} />
    </Routes>
    </BrowserRouter>
  </div>
  );
}

export default App;
