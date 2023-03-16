import React from "react";
import '../stylesheets/LoginView.css'
import Logo from '../img/logo.png';
import { Input } from './login-components/Input'
import { Btn } from './login-components/Btn'


function LoginView() {
    return (
        <div className='login-container'>
            <div className='logo-container'>
                <img className='logo' src={Logo} alt='Logo Dhelados' />
            </div>
            <div className='bienvenida-container'>
                ¡Bienvenida/o!
            </div>
            <form className='login-form'>
                <p>Ingrese sus datos, por favor:</p>
                <Input
                    label='Correo:'
                    placeHolder='example@example.com' />
                <Input
                    label='Contraseña:'
                    placeHolder='*******' />
                <Btn
                    className='ingresar-btn'
                    text='INGRESAR' />
            </form>
        </div>
    )
}

export default LoginView;