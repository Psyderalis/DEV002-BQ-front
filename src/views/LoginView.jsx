import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../stylesheets/LoginView.css'
import Logo from '../img/logo.png';
import LoginForm from '../components/LoginForm'

// corregir: que el formulario solo entregue información a LoginView y sea este, quien actualice el estado de user

function LoginView() {

  const [errorMessage, setErrorMessage] = useState('');
  const [credentials, setCredentials] = useState(null);

  if (credentials) {
    fetch('http://localhost:8080/login', {
      method: 'POST',
      body: JSON.stringify(credentials),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    })
      .then((res) => {
        res.json()
          .then(json => {
            if (res.ok) {
              localStorage.setItem('accessToken', json.accessToken);
              console.log('inicio de sesión exitoso');
              console.log(localStorage.getItem('accessToken'))
              setErrorMessage('');
              // navigate('/waiter')
            } else {
              setErrorMessage(json)
              console.log(errorMessage)
            }
          });
      })
      .catch(() => {
        console.error('Error en el inicio de sesión');
        setErrorMessage('Error en el inicio de sesión, por favor inténtelo nuevamente');
      });
  };

  function cerrarSesion() {
    console.log(localStorage.length)
    localStorage.removeItem('accessToken')
    if (localStorage.length === 0) {
      console.log('sesión cerrada')
    }
  }
  return (
    <div className='login-container'>
      <button onClick={cerrarSesion}>cerrar sesión</button>
      <div className='logo-container'>
        <img className='logo' src={Logo} alt='Logo Dhelados' />
        <p className='bienvenida-container'>
          ¡Bienvenida/o!
        </p>
      </div>
      <LoginForm setCredentials={setCredentials} />
      <p>{errorMessage}</p>
    </div >
  )
}

export default LoginView;