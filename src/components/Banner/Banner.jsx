import './Banner.scss'
import PropTypes from 'prop-types'

function Banner({ image, title, size }) {

    const vw = window.innerWidth

    return (
        <div className={`banner ${vw < 500 && size ? "small" : "medium"}`}>
            <img src={image} className='banner__image'/>
            <div className='banner__opacity'></div>
            {title && <h1 className='banner__title'>{title}</h1>}
        </div>
    )
}

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    size: PropTypes.bool,
}

export default Banner