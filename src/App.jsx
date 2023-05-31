import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'

import WaiterView from './views/Waiter/WaiterView';
import LoginView from './views/Login/LoginView';
import AdminView from "./views/Admin/Admin";
import NotFoundView from './views/NotFoundView';
import Header from "./components/Header/Header";

//al entrar a la aplicación checkar si existe el token para que se dirija automáticamente a la vista correspondiente, en vez del login

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<LoginView />} />
        <Route path='*' element={<NotFoundView />} />
        <Route path='waiter' element={<WaiterView />} />
        <Route path='admin' element={<AdminView />} />
      </Routes>
    </div>
  )
};

export default App;
