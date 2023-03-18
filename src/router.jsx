import React from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MesaHomeView from './components/MesaHomeView';
import LoginView from './components/LoginView';

function Router() {

  return (
    <div className="Router">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<LoginView />} />
          <Route path='/mesa-home' element={<MesaHomeView />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Router
