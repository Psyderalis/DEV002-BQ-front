import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MesaHomeView from './components/MesaHomeView';
import LoginView from './components/LoginView';

function App() {

  return (
    <div className="App">
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
