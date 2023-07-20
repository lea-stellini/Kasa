import './Home.scss'
import Banner from '../../components/Banner/Banner.jsx'
import datas from '../../datas/accommodation.json'
import Card from '../../components/Card/Card.jsx'
import landscape from '../../assets/images/landscape1.png'

function Home() {


  return(
    <div>
        <Banner image={landscape} title='Chez vous, partout et ailleurs'/>
        <div className='cardList'>
           {datas.map( data => {
            return (
                <Card key={data.id} title={data.title}/>
            )
            
            })} 
        </div>
    </div>
    
  )
}

export default Home
