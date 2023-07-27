import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import Navbar from './components/Navbar/Navbar.jsx'
import './main.scss'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='layout'>
      <Router>
        <Header/>
        <Navbar />
        <Footer />
      </Router>
    </div>
  </React.StrictMode>,
)
