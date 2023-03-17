import React from "react";
import { useState } from "react";
import '../stylesheets/LoginView.css'
import Logo from '../img/logo.png';

function LoginView() {
  const [credentials, setCredentials] = useState({ 'email': '', 'password': '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value })
    console.log(credentials)
  };

  const getLoginErrorMsg = (errCode) => {
    switch (errCode) {
      case 401:
        return "Credenciales inválidas. Por favor, verifique sus datos.";
      case 404:
        return "El usuario no existe. Por favor, sus datos.";
      case 500:
        return "Hubo un error interno en el servidor. Por favor, inténtelo de nuevo más tarde.";
      default:
        return "Hubo un error en el inicio de sesión. Por favor, inténtelo de nuevo más tarde.";
    }
  };

  let errorMessage = '';

  const login = () => {
    fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify(
        credentials
        /* {
        "email": "grace.hopper@systers.xyz",
        "password": "123456"
    } */
      ),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch(error => {
        const errorCode = error.response?.status || 500;
        errorMessage = getLoginErrorMsg(errorCode);
        console.log(errorMessage)
      })
  };

  const handleClick = (e) => {
    e.preventDefault();
    login();
  };

  return (
    <div className='login-container'>
      <div className='logo-container'>
        <img className='logo' src={Logo} alt='Logo Dhelados' />
        <p className='bienvenida-container'>
          ¡Bienvenida/o!
        </p>
      </div>
      <form className='login-form'>
        <p>Ingrese sus datos, por favor:</p>
        <div className='input-container'>
          <label htmlFor='email'>Correo:</label>
          <input
            type='email'
            className='input'
            name='email'
            id='email'
            placeholder='example@example.com'
            value={credentials.email}
            onChange={handleChange} />
        </div>
        <div className='input-container'>
          <label htmlFor='password'>Contraseña:</label>
          <input
            type='password'
            className='input'
            name='password'
            id='password'
            placeholder='********'
            value={credentials.password}
            onChange={handleChange} />
        </div>
        <button
          type='submit'
          onClick={handleClick} >
          INGRESAR
        </button>
        <p>{errorMessage}</p>
      </form>
    </div >
  )
}

export default LoginView;