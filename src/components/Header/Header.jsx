import logo from '../../assets/logo/logo.png'
import { Link, useResolvedPath } from 'react-router-dom'
import './Header.scss'


function Header() {

    const url = useResolvedPath().pathname;

    return (
        <div className="header">
            <Link to="/Kasa/">
                <img src={logo} alt="logo de Kasa" className="header__logo"/>
            </Link>

            <nav className="navbar">
                <Link to="/Kasa/" className={`navbar__link ${ url === "/" ? "active" : "" }`}>Accueil</Link>
                <Link to="/Kasa/about" className={`navbar__link ${ url === "/about" ? "active" : "" }`}>A Propos</Link>  
            </nav>
        </div>        
    )
}

export default Header