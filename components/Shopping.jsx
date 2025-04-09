import React from 'react'
import im1 from '../src/assets/im1.webp'
import im2 from '../src/assets/im2.png'
import im3 from '../src/assets/im3.png'
import im4 from '../src/assets/im4.webp'
import im5 from '../src/assets/im5.webp'
import im6 from '../src/assets/im6.webp'


const images = [{
    url: im1,
    title: 'Tinker'
},{
    url: im2,
    title: 'Ursa'
}, { url: im3, title: 'Enigma' }, { url: im4, title: 'Mana' }, 
{ url: im5, title: 'Nirvana' }, { url: im6, title: 'Oxford' },]

function Shopping() {
    return (
        <div className='h-[90%]'>
            <div className='flex items-center justify-center text-4xl m-10 '>Kickstart your online store with these themes</div>
            <div className='grid md:grid-cols-2  lg:grid-cols-3  '>
                {images.map((im,index)=>(
                    <div className='p-3  '>
                        <img src={im.url} alt={index} className='h-[90%] rounded' />
                       <span className='text-2xl font-semibold mt-5 p-5'>{im.title}</span> 
                    </div>
                ))}
            </div>
           <div className='flex items-center justify-center'><button className='cursor-pointer border-2 w-1/2 p-3 sm:w-1/12 md:w-1/6 font-semibold text-lg rounded'>View All</button>
            </div> 
        </div>
    )
}

export default Shopping