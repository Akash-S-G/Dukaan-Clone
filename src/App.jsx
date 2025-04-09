import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Slider from '../components/Slider'
import Content from '../components/Content'
import Middle from '../components/Middle'
import Shopping from '../components/Shopping'
import Feedback from '../components/Feedback'
import Last from '../components/Last'
import Blog from '../components/Blog'
import Card from '../components/Card'
import Footer from '../components/Footer'

function App() {
  

  return (
   <div className='min-h-screen bg-gradient-to-r from-pink-300 via-blue-400  to-sky-300' >
  <Navbar/>
  <Home />
  <Slider/>
  <Content/>
  <Middle/>
  <Shopping/>
  <Feedback/>
  <Last/>
  <Blog/>
  <Card/>
  <Footer/>
   </div>
  )
}

export default App
