import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'

import WaiterView from './views/WaiterView';
import LoginView from './views/LoginView';
import NotFoundView from './views/NotFoundView';

//al entrar a la aplicación checkar si existe el token para que se dirija automáticamente a la vista correspondiente, en vez del login

function App() {

  useEffect(()=>{
    //consultar si existe token en localStorage
    //para setear mi user
  }, [])

  const accessToken = localStorage.getItem('accessToken');
 // console.log(accessToken);

  const [user, setUser] = useState(null);

  if (!user) {
    return (
      <Routes>
        <Route path='/' element={<LoginView />} />
        <Route path='*' element={<NotFoundView />} />
      </Routes>
    )
  };

  return (
      <Routes>
        <Route path='/' element={<LoginView setUser={setUser} />} />
        <Route path='*' element={<NotFoundView />} />
        <Route path='orders' element={<WaiterView />} />

      </Routes>
  )
}

export default App;
