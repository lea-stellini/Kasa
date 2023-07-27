import './Accommodation.scss'
import Carrousel from "../../components/Carrousel/Carrousel"
import Collapse from "../../components/Collapse/Collapse"
import Rating from "../../components/Rating/Rating"
import datas from '../../datas/accommodation.json'
import { useParams } from 'react-router-dom'

function Accommodation() {

    const params = useParams()
    const accommodation = datas.find(data => data.id === params.id)

    return ( 
        <div>
                     <Carrousel 
                        pictures={accommodation.pictures}
                    />
                        <div className="accommodation">
                            <div className="accommodation__flex">
                                <div className="accommodation__flexcol">
                                    <h1 className="accommodation__title accommodation__text">{accommodation.title}</h1>
                                    <p className="accommodation__subtitle accommodation__text">{accommodation.location}</p> 
                                    <div className="accommodation__tags"> {accommodation.tags.map((tag,index) => {
                                        return(
                                            <div key={`${tag}-${index}`} className="accommodation__tag">
                                                {tag}
                                            </div>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className="accommodation__flexcol">
                                    <div className="accommodation__hote">
                                        <p className="accommodation__name accommodation__text">{accommodation.host.name}</p>
                                        <img className="accommodation__picture" src={accommodation.host.picture}/> 
                                    </div>
                                    <div className="accommodation__rating">
                                        <Rating rating={accommodation.rating}/>
                                    </div>
                                </div> 
                            </div>
                            <div className="accommodation__flex">
                                <div className="accommodation__collapse">
                                    <Collapse title="Description" description={accommodation.description}/> 
                                </div>
                                <div className="accommodation__collapse">
                                <Collapse title="Equipements" equipments={accommodation.equipments}/>  
                                </div>
                            </div>
                        </div>   

        </div>
    )
    
}

export default Accommodation