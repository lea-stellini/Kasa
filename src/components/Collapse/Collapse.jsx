import PropTypes from 'prop-types'
import './Collapse.scss'
import upArrow from '../../assets/icons/up-arrow.png'
import { useState } from 'react'
function Collapse({ title, description, equipments }) {
    const [collapseIsNeutral, setCollapseNeutral] = useState(true)

    const [collapseActive, setCollapseActive] = useState(false)

    const handleRotate = () => {
        setCollapseNeutral(false)
        setCollapseActive(!collapseActive)
    }

    return(
        <>
           <div className='collapse'>
                <div className='collapse__flex'>
                    <h1 className='collapse__title'>{title}</h1>
                    
                    <img src={upArrow} className={`collapse__arrow ${collapseActive ? "collapse__rotate" : ""}`} onClick={handleRotate}/>  
                </div>
            </div>
            {
                <div className={`${collapseIsNeutral ? "" : `${collapseActive ? "collapse__animation collapse__down" : "collapse__animation collapse__up" }` } `}>
                    {description ? 
                        <p className={`collapse__text ${collapseIsNeutral ? "collapse__none" : ""}`}>{description}</p> 
                        : 
                        <ul className={`collapse__text ${collapseIsNeutral ? "collapse__none" : ""}`}>
                            {equipments.map((equipment, index) => 
                                <li className='collapse__list' key={`${equipment}-${index}`}>{equipment}</li> )}
                        </ul>}
                                
                </div> 
            }
        </>
    )
}

Collapse.propTypes = {
    title : PropTypes.string.isRequired,
    description: PropTypes.string,
    equipments: PropTypes.array
}

export default Collapse