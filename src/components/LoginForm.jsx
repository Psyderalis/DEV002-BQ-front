import React from "react";
import { useState } from "react";

function LoginForm({ }) {
    const [credentials, setCredentials] = useState({ 'email': '', 'password': '' });
    const [errorMessage, setErrorMessage] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setCredentials({ ...credentials, [name]: value })
        // console.log(credentials)
    };
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
            .then((res) => {
                res.json()
                    .then(json => {
                        console.log(json);
                        if (res.ok) {
                            console.log('inicio de sesión exitoso')
                            setErrorMessage('')
                        } else {
                            setErrorMessage(json)
                        }
                    })
            })
            .catch(() => {
                console.error('Error en el inicio de sesión');
                setErrorMessage('Error en el inicio de sesión, por favor inténtelo nuevamente');
            })
    };

    const handleClick = (e) => {
        e.preventDefault();
        login();
    };

    return (
        <div className='form-container'>
            <p>Ingrese sus datos, por favor:</p>
            <form className='login-form'>
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
            </form>
            <p>{errorMessage}</p>
        </div>
    )
};

export default LoginForm;