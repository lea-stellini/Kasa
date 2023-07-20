import PropTypes from 'prop-types'
import './Collapse.scss'
import upArrow from '../../assets/up-arrow.png'
import downArrow from '../../assets/down-arrow.png'
import { useState } from 'react'
function Collapse({ title, description, equipments }) {

    const [isOpen, setIsOpen] = useState(false)

    return(
 
        <div className='collapse'>
            <div className='flex'>
                <h1 className='collapse__title'>{title}</h1>
                {isOpen ? 
                <img src={downArrow} className='collapse__arrow' onClick={() => setIsOpen(false)}/> 
                : 
                <img src={upArrow} className='collapse__arrow' onClick={() => setIsOpen(true)}/>  }
            </div>
            {
                isOpen ? 
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