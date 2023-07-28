import PropTypes from 'prop-types'
import './Card.scss'
import { Link } from 'react-router-dom'

function Card({ title, link, cover }) {
    return (
        <Link to={link} className='card' style={{backgroundImage: `url(${cover})`}}>
           
                <h2 className='card__title'>{title}</h2> 
         
        </Link>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    cover: PropTypes.string,
}

export default Card