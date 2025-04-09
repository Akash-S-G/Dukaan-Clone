import React from 'react'
import mark from '../src/assets/mark.png'
const text=['99.5% Uptime','Returns & Exchange','Custom Plugins & Integrations','Under 1ms Latency','Controlled Shipping','Personalised Storefront Design']
function Last() {
  return (
    <div className=' bg-black text-white '>
        <div className='flex flex-wrap items-center justify-center'>
            <span className='mt-10 text-3xl font-semibold'>Scale your business with Dukaan Enterprise<br /></span> 
            <span className='mt-10 text-xl'>Unlock your brands’s online potential on Dukaan’s lightning fast infrastructure with custom built features.</span>
        </div>
        <div className='mt-10 grid sm: grid-cols-2'>
            {text.map((t)=>(
                <div className=' flex p-2 mx-3  items-center  '>
                    <img src={mark} alt="" className='m-2'/> {t}
                </div>
            ))}
        </div>
        <div className='mt-10 flex items-center justify-center p-10'><button className='cursor-pointer border-2 w-1/2 p-3 sm:w-1/12 md:w-1/6 font-semibold text-lg rounded'>Learn More</button>
        </div> 
    </div>
  )
}

export default Last