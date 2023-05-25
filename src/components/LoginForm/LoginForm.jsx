import styles from './LoginForm.module.css'

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
        <div>
            <p>Ingrese sus datos, por favor:</p>
            <form className={styles.loginForm} >
                <div className={styles.inputContainer}>
                    <label htmlFor='email'>Correo:</label>
                    <input
                        type='email'
                        className={styles.input}
                        name='email'
                        id='email'
                        placeholder='example@example.com'
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.inputContainer}>
                    <label htmlFor='password'>Contraseña:</label>
                    <input
                        type='password'
                        className={styles.input}
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