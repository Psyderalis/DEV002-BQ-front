import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react'

import WaiterView from './views/WaiterView';
import LoginView from './views/LoginView';
import NotFoundView from './views/NotFoundView';
import ProtectedRoute from './components/ProtectedRoute';

//al entrar a la aplicación checkar si existe el token para que se dirija automáticamente a la vista correspondiente, en vez del login

function App() {

 /*  useEffect(() => {
    //consultar si existe token en localStorage
    //para setear mi user
  }, []) */

  const accessToken = localStorage.getItem('accessToken');
  const [user, setUser] = useState(null);

  console.log(user ? 'sesión iniciada' : 'inicie sesión')


  return (
    <Routes>
      <Route path='/' element={<LoginView setUser={setUser} />} />
      <Route path='*' element={<NotFoundView />} />
      <Route path='waiter' element={
        <ProtectedRoute userRol={!!user}>
          <WaiterView
            setUser={setUser}
            accessToken={accessToken} />
        </ProtectedRoute>
      } />
      <Route path='/kitchen' element={
        <ProtectedRoute userRol={!!user && user.rol == 'kitchen'}>
          <h1>Vista de cocina</h1>
        </ProtectedRoute>} />
      <Route path='/admin' element={
        <ProtectedRoute userRol={!!user && user.rol == 'admin'}>
          <h1>Vista de Admin</h1>
        </ProtectedRoute>
      } />
    </Routes>
  )
};

export default App;
