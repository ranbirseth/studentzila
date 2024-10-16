import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Navbar from './Component/Nav.jsx'
import Footer from './Component/Footer.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <div className='h-[80%]'> <App /></div>

  </React.StrictMode>,
)
