import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import '../stylesheets/LoginView.css'
import Logo from '../img/logo.png';
import LoginForm from '../components/LoginForm'

// corregir: que el formulario solo entregue información a LoginView y sea este, quien actualice el estado de user

function LoginView({ setUser, accessToken }) {

  const [errorMessage, setErrorMessage] = useState('')
  const [credentials, setCredentials] = useState(null);
  const navigate = useNavigate();

  const getUserData = () => {
    fetch(`http://localhost:8080/users/${credentials.email}`, {
      headers: {
        authorization: `Bearer ${accessToken}`
      }
    })
      .then(res => res.json())
      .then(json => console.log(json))
  }

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
              localStorage.setItem('accessToken', json.accessToken)
              console.log('inicio de sesión exitoso');
              setErrorMessage('');
              getUserData();
              setUser(true)

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

  return (
    <div className='login-container'>
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