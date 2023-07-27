import PropTypes from 'prop-types'
import './Collapse.scss'
import upArrow from '../../assets/up-arrow.png'
import { useState } from 'react'
function Collapse({ title, description, equipments }) {

    const [rotateChevron, setRotateChevron] = useState(false)

    const handleRotate = () => setRotateChevron(!rotateChevron)

    return(
 
        <div className='collapse'>
            <div className='flex'>
                <h1 className='collapse__title'>{title}</h1>
                
                <img src={upArrow} className={`collapse__arrow ${rotateChevron ? "rotate" : ""}`} onClick={handleRotate}/>  
            </div>
            {
                rotateChevron ? 
            <div className='collapse__content'>
                <div className='collapse__text'>{description ? <p>{description}</p> : <ul> {equipments.map((equipment, index) => <li className='collapse__list' key={`${equipment}-${index}`}>{equipment}</li> )}</ul>}</div>
            </div> : null
            }
            
        </div>
    )
}

Collapse.propTypes = {
    title : PropTypes.string.isRequired,
    description: PropTypes.string,
    equipments: PropTypes.array
}

export default Collapse