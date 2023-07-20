import PropTypes from 'prop-types'
import './Card.scss'
import { Link } from 'react-router-dom'

function Card({ title }) {
    return (
        <Link to='/accommodation' className='card'>
            <h2 className='card__title'>{title}</h2> 
        </Link>
    )
}

Card.propTypes = {
    title: PropTypes.string.isRequired,
    // key: PropTypes.string.isRequired,
}

export default Card