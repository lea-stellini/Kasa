import Error from '../../pages/Error/Error.jsx'
import About from '../../pages/About/About.jsx'
import Home from '../../pages/Home/Home.jsx'
import Accommodation from '../../pages/Accommodation/Accommodation.jsx'
import { Routes, Route } from 'react-router-dom'

function Navbar() {

    return(
        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/accommodation/:id' element={<Accommodation />} />
          <Route path='*' element={<Error />} />
        </Routes>
    )
}

export default Navbar