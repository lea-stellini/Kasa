import Description from "../../components/Description/Description"
import './Accommodation.scss'
import Carrousel from "../../components/Carrousel/Carrousel"
import host from "../../assets/host.png"
import datas from '../../datas/accommodation.json'

function Accommodation() {
    return(
        <div>
            <Carrousel 
                pictures={datas[0].pictures}

            />
           <div>
                <Description 
                    title="Cozy loft on the Canal Saint-Martin"
                    subtitle="Paris, île-de-France"
                    tags={["Cozy", "Canal", "Paris 10"]}
                    hote="Alexandre Dumas"
                    picture={host}
                    rating={5}
                    collapse1={{
                        title:"Description",
                        description:"À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé. Entièrement équipé pour votre confort et élégamment décoré, il vous permettra de vivre comme un Parisien le temps de votre séjour."
                    }}
                    collapse2={{
                        title:"Equipements",
                        equipments:["Wi-fi","Cuisine équipée","Télévision","Sèche Cheveux"]
                    }}
                />
           </div>
        </div>
    )
    
}

export default Accommodation