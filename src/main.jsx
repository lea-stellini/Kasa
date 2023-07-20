import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Error from './pages/Error/Error.jsx'
import About from './pages/About/About.jsx'
import './main.scss'
import Accommodation from './pages/Accommodation/Accommodation.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router>
      <Header/>
       <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/accommodation' element={<Accommodation />} />
        <Route path='*' element={<Error />} />
       </Routes>
      <Footer />
    </Router>
    
  </React.StrictMode>,
)
