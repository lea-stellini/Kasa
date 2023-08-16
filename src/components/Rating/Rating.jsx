import PropTypes from 'prop-types'
import starActive from '../../assets/icons/star-active.png'
import starInactive from '../../assets/icons/star-inactive.svg'
import './Rating.scss'

function Rating({rating}) {
    
    function getRating(rating) {
        const active = new Array(rating).fill('')
        const inactive = new Array(5 - rating).fill("")

        return <>
            {active.map((_, index) => 
                <img src={starActive} key={`star-${index}`} />
            )}
            {inactive.map((_, index) => 
                <img src={starInactive} key={`star-${index+rating}`} />
            )}
        </>
    }

    return (
       <div className='star'>
        {getRating(Number(rating))}
       </div> 
    )
}

Rating.propTypes = {
    rating : PropTypes.string.isRequired
}

export default Rating