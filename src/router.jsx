import React from 'react';
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MeseraHomeView from './components/MeseraHomeView';
import LoginView from './components/LoginView';

function App() {

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<LoginView />} />
          <Route path='/mesa-home' element={<MeseraHomeView />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
