import './Home.scss'
import Banner from '../../components/Banner/Banner.jsx'
import datas from '../../datas/accommodation.json'
import Card from '../../components/Card/Card.jsx'
import landscape from '../../assets/images/landscape1.png'

function Home() {


  return(
    <div className='home'>
        <Banner image={landscape} 
                title='Chez vous, partout et ailleurs' 
                size="small"
        />
        <div className='home__cardList'>
           {datas.map( data => {
            return (
                <Card key={data.id} title={data.title} 
                      link={`/accommodation/${data.id}`} 
                      cover={data.cover}
                />
            )
            })} 
        </div>
    </div>
    
  )
}

export default Home
