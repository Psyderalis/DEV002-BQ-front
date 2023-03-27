function LoginForm({ setCredentials }) {

    let credentials = {
        'email': '',
        'password': ''
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        credentials = { ...credentials, [name]: value }
        // console.log(credentials)
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setCredentials(credentials);
    };

    return (
        <div className='form-container'>
            <p>Ingrese sus datos, por favor:</p>
            <form className='login-form' >
                <div className='input-container'>
                    <label htmlFor='email'>Correo:</label>
                    <input
                        type='email'
                        className='input'
                        name='email'
                        id='email'
                        placeholder='example@example.com'
                        onChange={handleChange}
                    />
                </div>
                <div className='input-container'>
                    <label htmlFor='password'>Contraseña:</label>
                    <input
                        type='password'
                        className='input'
                        name='password'
                        id='password'
                        placeholder='********'
                        onChange={handleChange}
                    />
                </div>
                <button
                    type='submit'
                    onClick={handleSubmit} >
                    INGRESAR
                </button>
            </form>
        </div>
    )
};

export default LoginForm;