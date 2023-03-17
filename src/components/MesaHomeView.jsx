import React from "react";
import { useState, useEffect } from "react";
import Logo from '../img/logo.png';

function MesaHomeView() {
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        console.log('useEffect ejecutado')
        fetch('http://localhost:8080/')
            .then(res => res.text())
            .then(data => console.log(data))
            .catch(err => console.log(err))
            .finally(() => setLoading(false))
    }, [])
    return (
        loading ? <h3>Cargando...</h3> :

        <div>
            <p>Mesa Home view</p>
            <h3> INICIO DE SESIÓN EXITOSO 💗✨</h3>
            <div>
                <img src={Logo} alt='Logo Dhelados' />
            </div>
        </div>
    )
}

export default MesaHomeView;