import './Banner.scss'
import PropTypes from 'prop-types'

function Banner({ image, title, size }) {

    

    return (
        <div className={`banner banner__${size}`}>
            <img src={image} className='banner__image'/>
            <div className='banner__opacity'></div>
            {title && <h1 className='banner__title'>{title}</h1>}
        </div>
    )
}

Banner.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string,
    size: PropTypes.string,
}

export default Banner