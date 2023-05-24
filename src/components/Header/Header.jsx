import Logo from '../../img/logo.png'
import styles from './Header.module.css'

export default function Header() {
    return (
        <header>
            <img src={Logo} alt="Logo de la empresa" />
            <h1>D'helados</h1>
        </header>
    )
}