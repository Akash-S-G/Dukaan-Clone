import React from 'react'
import lo1 from '../src/assets/Lemonade.svg'
import lo2 from '../src/assets/jain.svg'
import lo3 from '../src/assets/mc.webp'
import m1 from '../src/assets/kk.webp'
import m2 from '../src/assets/aun.webp'
import m3 from '../src/assets/tag.webp'
const images=[
    {im1:lo1,title:`first one`,im2:m1 ,des:`Dukaan has greatly enhanced our customers’ shopping experience. We now offer a faster & more streamlined checkout, user-friendly interfaces and advanced features. Dukaan has strengthened our commitment to providing exceptional experiences to our customers.
`}
    ,{im1:lo2,title:'second one',im2:m2,des:`Dukaan has greatly enhanced our customers’ shopping experience. We now offer a faster & more streamlined checkout, user-friendly interfaces and advanced features. Dukaan has strengthened our commitment to providing exceptional experiences to our customers.
        `},
    {im1:lo3,title:'third one',im2:m3,des:`Dukaan has greatly enhanced our customers’ shopping experience. We now offer a faster & more streamlined checkout, user-friendly interfaces and advanced features. Dukaan has strengthened our commitment to providing exceptional experiences to our customers.
        `},
        {im1:lo2,title:'second one',im2:m2,des:`Dukaan has greatly enhanced our customers’ shopping experience. We now offer a faster & more streamlined checkout, user-friendly interfaces and advanced features. Dukaan has strengthened our commitment to providing exceptional experiences to our customers.
            `},
        {im1:lo3,title:'third one',im2:m3,des:`Dukaan has greatly enhanced our customers’ shopping experience. We now offer a faster & more streamlined checkout, user-friendly interfaces and advanced features. Dukaan has strengthened our commitment to providing exceptional experiences to our customers.
            `},
            {im1:lo3,title:'third one',im2:m3,des:`Dukaan has greatly enhanced our customers’ shopping experience. We now offer a faster & more streamlined checkout, user-friendly interfaces and advanced features. Dukaan has strengthened our commitment to providing exceptional experiences to our customers.
                `},
            
]
function Feedback() {
  return (
    <div className='mt-10 bg-gradient-to-r from-pink-200 via-red-300 to-yellow-300'>
        <div className='grid grid-cols-1 text-2xl font-semibold text-center'>
            <span className='text-4xl mt-5'>Hear from our satisfied customers </span>
            <span>From beginners to enterprise brands, everyone loves Dukaan!</span>
        </div>

        <div className='grid sm:grid-cols-2 md:grid-cols-3 p-4'>
            {
                images.map((card)=>(
                    <div className='bg-white rounded shadow-md p-5 m-5 '>
                        <img src={card.im1} alt="" className='w-25 ' />
                        <div className=' mx-4 flex items-center justify-center'>{card.title} <br />
                        {card.des}</div>
                        <div className='flex mt-4'><img src={card.im2} alt="" className='rounded-full w-15'/> <div className='mx-5 '>Akash <br />
                        <div className='text-gray-400 text-sm'>Manager</div>
                            </div></div>
                    </div>
                ))
            }

        </div>
    </div>
  )
}

export default Feedback