import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Slider from '../components/Slider'
import Content from '../components/Content'

function App() {
  

  return (
   <div className='min-h-screen bg-gradient-to-r from-pink-300 via-blue-400  to-sky-300' >
  <Navbar/>
  <Home />
  <Slider/>
  <Content/>
   </div>
  )
}

export default App
