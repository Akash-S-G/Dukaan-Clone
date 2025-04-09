import React from 'react'

import logo from '../src/assets/white.svg'
import ind from '../src/assets/india.svg'

const text=['Business tools','Dukaan for PC','Dukaan for delivery','Dukaan for plugins','Dukaan for themes'
    ,'Dukaan for enterprise','Awards 22','Help center','Blog','Banned items','About','privacy','Terms','Contact',
    `FAQ'S`,'Jobs','Branding','Press inquiry','Bug bounty','Facebook','Twitter','Linkedin'
]
function Footer() {
  return (
    <div className=' p-5 bg-black text-white'>
        <div className='flex'>
<div><img src={logo} alt="" className='w-full' /></div>
        <div className='m-5 grid grid-cols-5'>
        {
            text.map((link)=>(
                <div className='p-2 text-md  hover:underline'>
                    {link}
                </div>
            ))
        }
        </div>
        </div>
      <div className='flex justify-between'> 
        <div>Growthpond Technology Pvt Ltd. All rights reserved, 2025.</div>
        <div className='flex '>Made in   <img src={ind} alt="" className='mx-2'/></div>
        </div>  
       
    </div>

  )
}

export default Footer