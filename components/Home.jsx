import React from 'react'
import front from '../src/assets/homepage.webp'
import apple from '../src/assets/image.png'
import and from '../src/assets/playstore.png'
function Home() {
  return (
    <div className='m-12 h-screen grid   md:grid-cols-2   '>
        <div  className=' mt-15'>
            <div className=' lg:mt-10' >
                <span className='text-2xl font-bold sm:text-5xl md:text-5xl  '>Your Global Commerce Partner, Engineered for Peak Performance</span><br />
            </div>
            <div className='lg:mt-5'>
              <span className='text-gray-700 text-lg  '>Launch your eye-catching online store with ease, attract and convert more customers than ever before.</span>
             <br />  </div> 
        <button className='w-full p-3 rounded bg-blue-600 cursor-pointer 
        hover:bg-blue-700 
         sm:w-30 mx-5 mt-3 shadow-md' >Get started</button>
        <br />
        <span className='text-gray-600 m-5 flex gap-3 '>Also available on <img src={apple} alt="" className='w-5' /> <p><img src={and} alt="" className='w-6' /></p></span>
        </div>
        
        <div className=''>
            <img src={front} alt=""  className='object-contain '/>
        </div>
       
    </div>
  )
}

export default Home