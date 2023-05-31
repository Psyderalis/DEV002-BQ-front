import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { login } from '../../components/api';

import styles from './LoginView.module.css'

import Logo from '../../img/logo.png'
import LoginForm from '../../components/LoginForm/LoginForm'

function LoginView() {

  const [errorMessage, setErrorMessage] = useState('');
  const [credentials, setCredentials] = useState(null);

  const navigate = useNavigate()

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
              setErrorMessage('');
              navigate('/waiter')
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
    <div className={styles.container}>
      <div className={styles.loginContainer}>
        <div className={styles.logoContainer}>
          <img className={styles.logo} src={Logo} alt='Logo Dhelados' />
          <p className={styles.welcomeContainer}>
            ¡Bienvenida/o!
          </p>
        </div>
        <LoginForm
          setCredentials={setCredentials}
          errorMessage={errorMessage} />
      </div >
    </div>
  )
}

export default LoginView;