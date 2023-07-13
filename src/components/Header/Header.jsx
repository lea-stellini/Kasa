import logo from '../../assets/logo/logo.png'
import './Header.scss'

function Header() {

    return (
        <div className="header">
            <img src={logo} alt="logo de Kasa" className="header__logo"/>

            <nav className="navbar">
                <a href="" className="navbar__link">Accueil</a>
                <a href="" className="navbar__link">A Propos</a>
            </nav>
        </div>        
    )
}

export default Header