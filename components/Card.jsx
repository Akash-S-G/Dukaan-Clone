import React from 'react'
import logo from '../public/card.svg'
function Card() {
  return (
    <div className='  bg-white flex items-center justify-center h-screen'>
        <div className=' md:w-9/12 p-6 rounded shadow-md p-4 bg-gradient-to-r from-orange-200 via-red-300 to-pink-400'>
        <div><img src={logo} alt="" className='p-5' /></div>
        <div className='p-4'><span className='text-6xl font-bold'>Start selling online.</span></div>
        <div><span className='w-9/12 text-4xl font-semibold'> Take your business online with Dukaan. Get your free online store in 30 seconds.</span></div>
        <div className='p-6'><button className='cursor-pointer border-2 w-1/2 p-3 sm:w-1/12 md:w-1/6 font-semibold text-lg rounded bg-blue-500 hover:bg-blue-700'>Get Started</button>
        </div> 
        </div>
        
    </div>
  )
}

export default Card