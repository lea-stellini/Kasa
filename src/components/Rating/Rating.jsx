import PropTypes from 'prop-types'
import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.svg'

function Rating({rating}) {
    function Rating(rating) {
        const active = new Array(rating).fill('')
        const inactive = new Array(5 - rating).fill("")

        return <>{active.map((_, index) => 
             <img src={starActive} key={`star-${index}`} />
        )}
        {inactive.map((_, index) => 
            <img src={starInactive} key={`star-${index+rating}`} />
        )}</>
    }

    return (
       <>
        {Rating(Number(rating))}
       </> 
    )
}

Rating.propTypes = {
    rating : PropTypes.string.isRequired
}

export default Rating