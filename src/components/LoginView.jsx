import React from "react";
import { useState } from "react";
import '../stylesheets/LoginView.css'
import Logo from '../img/logo.png';
import LoginForm from './LoginForm'

function LoginView() {
  return (
    <div className='login-container'>
      <div className='logo-container'>
        <img className='logo' src={Logo} alt='Logo Dhelados' />
        <p className='bienvenida-container'>
          ¡Bienvenida/o!
        </p>
      </div>
      <LoginForm />
    </div >
  )
}

export default LoginView;