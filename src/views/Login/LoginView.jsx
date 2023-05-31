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
    login(credentials)
      .then(result => {
        if (result.success) {
          setErrorMessage('')
          navigate('/waiter')
        } else {
          setErrorMessage(result.error)
          console.log(errorMessage)
        }
      })
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