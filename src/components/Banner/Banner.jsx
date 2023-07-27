import './Banner.scss'
import PropTypes from 'prop-types'

function Banner({ image, title }) {
    return (
        <div className="banner">
            <img src={image} className='banner__image'/>
            <div className='banner__opacity'></div>
            {title && <h1 className='banner__title'>{title}</h1>}
        </div>
    )
}

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
}

export default Banner