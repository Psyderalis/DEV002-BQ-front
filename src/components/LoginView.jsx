import React from "react";
import '../stylesheets/LoginView.css'
import Logo from '../img/logo.png';

function LoginView() {
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
                    <label htmlFor='user-input'>Usuario:</label>
                    <input
                        type='text'
                        className='input'
                        id='user-input'
                        placeholder='example@example.com' />
                </div>
                <div className='input-container'>
                    <label htmlFor='pass-input'>Contraseña:</label>
                    <input
                        type='password'
                        className='input'
                        id='pass-input'
                        placeholder='******' />
                </div>
                <button
                    type='submit' >
                    INGRESAR
                </button>
            </form>
        </div >
    )
}

export default LoginView;