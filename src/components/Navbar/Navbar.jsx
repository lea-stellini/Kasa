import Error from '../../pages/Error/Error.jsx'
import About from '../../pages/About/About.jsx'
import Home from '../../pages/Home/Home.jsx'
import Accommodation from '../../pages/Accommodation/Accommodation.jsx'
import { Routes, Route } from 'react-router-dom'

function Navbar() {

    return(
        <Routes>
          <Route exact path='/Kasa' element={<Home />}/>
          <Route path='Kasa/about' element={<About />}/>
          <Route path='Kasa/accommodation/:id' element={<Accommodation />} />
          <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default Navbar