import React from 'react'
// import Navigation from './components/Navigation'
// import Footer from './components/Footer'
// import Home from './pages/Home'
// import { Route, Routes } from 'react-router-dom'
import one from './static/one.jpg'

function App() {
  return (
   <div className="app w-full h-screen " >
     <img src={one} className="backdrop-blur-md background-fix object-fill" alt="" />
   </div>
   
  )
}

export default App