import React from "react";
import Logo from '../img/logo.png';
import { Input } from './login-components/Input'
import { Btn } from './login-components/Btn'


function LoginView() {
    return (
        <div>
            <div className='logo-container'>
                <img className='logo' src={Logo} alt='Logo Dhelados' />
            </div>
            <div className='bienvenida-container'>
                ¡Bienvenida/o!
            </div>
            <div className='form-container'>
                <form>
                    <p>Ingrese sus datos, por favor:</p>
                    <Input
                        label='Correo:'
                        placeHolder='example@example.com' />
                    <Input 
                    label= 'Contraseña:'
                    placeHolder= '*******' />
                    <Btn
                    text= 'INGRESAR' />
                </form>
            </div>
        </div>
    )
}

export default LoginView;