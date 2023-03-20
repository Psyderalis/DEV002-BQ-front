import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import MesaHomeView from './components/MesaHomeView';
import LoginView from './components/LoginView';

function App() {
  
  const accessToken = localStorage.getItem('accessToken')
  console.log(accessToken)

  return (
    <div className="Router">
      <Router>
        <Routes>
          <Route path='/' element={<LoginView />} />
          <Route path='/mesa-home' element={<MesaHomeView />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
