import React from 'react'
import './index.css'
import Navbar from './components/Navbar/Navbar'
import Homepage from './components/Homepage/Homepage'
import Solana from './components/Solana'
const App = () => {
  return (
   <>
    <div className="app">
    <Navbar/>
     <Homepage/>
     <Solana/>
    </div>
   </>
  )
}

export default App