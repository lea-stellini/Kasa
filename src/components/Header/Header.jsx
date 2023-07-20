import logo from '../../assets/logo/logo.png'
import { Link } from 'react-router-dom'
import './Header.scss'

function Header() {

    return (
        <div className="header">
            <Link to="/">
                <img src={logo} alt="logo de Kasa" className="header__logo"/>
            </Link>

            <nav className="navbar">
                <Link to="/" className="navbar__link">Accueil</Link>
                <Link to="/about" className="navbar__link">A Propos</Link>
            </nav>
        </div>        
    )
}

export default Header