import logo from '../../assets/logo/logoFooter.png'
import './Footer.scss'

function Footer() {

    return (
        <div className="footer">
            <img src={logo} alt="logo de Kasa" width="122" height="40"/>
            <p>© 2020 Kasa. All rights reserved</p>
        </div>
    )
}

export default Footer