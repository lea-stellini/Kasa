import './Error.scss'

function Error() {
    return (
        <div className="error">
            <p className="error__number">404</p>
            <p className="error__description">Oups! La page que vous demandez n&apos;existe pas</p>
            <a href="" className="error__link">Retourner sur la page d&apos;accueil</a>
        </div>
    )
}

export default Error