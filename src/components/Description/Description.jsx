import Collapse from "../Collapse/Collapse"
import PropTypes from 'prop-types'
import './Description.scss'
import starActive from '../../assets/star-active.png'
import starInactive from '../../assets/star-inactive.svg'

function Description({title, subtitle, tags, collapse1, collapse2, rating, picture, hote }) {

    function Rating(rating) {
        const active = new Array(rating).fill('active')
        const inactive = 5 - rating
        let finalrating = active

        for(let i = 0; i < inactive; i++){
            finalrating.push('inactive')
        }

        return finalrating.map((elem,index) => 
            elem === 'active' ? <img src={starActive} key={`star-${index}`} /> : <img src={starInactive} key={`star-${index}`} />
        )
    }

    return (
        <div className="description">
            <div className="description__flex">
                <div className="description__flexcol">
                   <h1 className="description__title description__text">{title}</h1>
                    <p className="description__subtitle description__text">{subtitle}</p> 
                    <div className="description__tags">{tags.map((tag,index) => {
                    return(
                        <div key={`${tag}-${index}`} className="description__tag">
                            {tag}
                        </div>
                    )
                    })}
                    </div>
                </div> 
                <div className="description__flexcol">
                    <div className="description__hote">
                        <p className="description__name description__text">{hote}</p>
                        <img className="description__picture" src={picture}/> 
                    </div>
                    <div className="description__rating">
                    {Rating(rating)}
                    </div>
                </div>
            </div>
            
            <div className="description__flex">
                <div className="description__collapse">
                    <Collapse title={collapse1.title} description={collapse1.description}/> 
                </div>
                <div className="description__collapse">
                   <Collapse title={collapse2.title} equipments={collapse2.equipments}/>  
                </div>
               
                
            </div>
           
        </div>
    )
}

Description.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
    tags: PropTypes.array,
    collapse1: PropTypes.object,
    collapse2: PropTypes.object,
    rating: PropTypes.number,
    picture: PropTypes.string,
    hote: PropTypes.string,
}

export default Description