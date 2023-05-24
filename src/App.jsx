import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'

import WaiterView from './views/WaiterView';
import LoginView from './views/LoginView';
import NotFoundView from './views/NotFoundView';

//al entrar a la aplicación checkar si existe el token para que se dirija automáticamente a la vista correspondiente, en vez del login

function App() {

  // const accessToken = localStorage.getItem('accesToken')

  return (
    <Routes>
      <Route path='/' element={<LoginView />} />
      <Route path='*' element={<NotFoundView />} />
      <Route path='waiter' element={<WaiterView />} />
      {/* <Route path='waiter' element={<WaiterView accessToken={accessToken}/>} /> */}
    </Routes>
  )
};

export default App;
