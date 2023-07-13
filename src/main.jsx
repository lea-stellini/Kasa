import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './pages/Home/Home.jsx'
import Header from './components/Header/Header.jsx'
import Footer from './components/Footer/Footer.jsx'
import './main.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Header/>
    <Home />
  <Footer />
  </React.StrictMode>,
)
