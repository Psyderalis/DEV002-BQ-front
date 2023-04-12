import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import '../stylesheets/LoginView.css'
import Logo from '../img/logo.png';
import LoginForm from '../components/LoginForm'

// corregir: que el formulario solo entregue información a LoginView y sea este, quien actualice el estado de user

function LoginView({ setUser }) {

  const [errorMessage, setErrorMessage] = useState('');
  const [credentials, setCredentials] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const getUserData = (token) => {
      fetch('http://localhost:8080/users', {
        headers: {
          authorization: `Bearer ${token}`
        }
      })
        .then(res => res.json())
        .then(json => {
          const currentUserArr = json.filter((user) => user.email == credentials.email);
          console.log(currentUserArr[0])
          setUser(currentUserArr[0]);
        })
    };
  }, []);


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
              getUserData(json.accessToken);
              console.log('inicio de sesión exitoso');
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

  /* const getUserData = (token) => {
    fetch('http://localhost:8080/users', {
      headers: {
        authorization: `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(json => {
        const currentUserArr = json.filter((user) => user.email == credentials.email);
        console.log(currentUserArr[0])
        setUser(currentUserArr[0]);
      })
  };

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
              getUserData(json.accessToken);
              console.log('inicio de sesión exitoso');
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
  };   */

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