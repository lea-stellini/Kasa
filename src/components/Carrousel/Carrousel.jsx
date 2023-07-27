import './Carrousel.scss'
import arrowForward from '../../assets/arrow_forward.png'
import arrowBack from '../../assets/arrow_back.png'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Carrousel({pictures}) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const nextImg = () =>{
        setCurrentIndex((prevIndex) => prevIndex === pictures.length - 1 ? 0 : prevIndex + 1)
    }
    const prevImg = () =>{
        setCurrentIndex((prevIndex) => prevIndex === 0 ? pictures.length - 1 : prevIndex - 1)
    }

    return ( 
        <div className='carrousel'>
            <img src={pictures[currentIndex]} className='carrousel__picture' />
            <div className='carrousel__container'>
                <div className='carrousel__arrows'>
                    <img src={arrowBack} onClick={(prevImg)} />
                    <img src={arrowForward} onClick={(nextImg)}/>
                </div>
                <div className='carrousel__legend'>
                    <p>{`${currentIndex + 1}/${pictures.length}`}</p>
                </div>
            </div>
        </div>

    )
}

Carrousel.propTypes = {
    pictures : PropTypes.array.isRequired
}

export default Carrousel