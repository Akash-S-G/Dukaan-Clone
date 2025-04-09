import React from 'react'
import card1 from '../src/assets/1b.jpg'
import card2 from '../src/assets/2b.jpg'
const text=[{
    title:'PRESS',
    des:`Dukaan Dimensions 2022 – A Retrospective on the Growth Enabled by Dukaan`,
    url:card1
},{
    title:'SELL ONLINE',
    des:`How to Sell Antiques Online the Right Way – Detailed 8 Step Guide`,
    url:card2
},{
    title:'SELL ONLINE',
    des:`How to Sell Antiques Online the Right Way – Detailed 8 Step Guide`,
    url:card2
},{
    title:'SELL ONLINE',
    des:`How to Sell Antiques Online the Right Way – Detailed 8 Step Guide`,
    url:card2
},{
    title:'PRESS',
    des:`Dukaan Dimensions 2022 – A Retrospective on the Growth Enabled by Dukaan`,
    url:card1
},{
    title:'PRESS',
    des:`Dukaan Dimensions 2022 – A Retrospective on the Growth Enabled by Dukaan`,
    url:card1
},]
function Blog() {
  return (
    <div className='bg-white'>
        <div className='grid grid-cols-1 text-center'>
            <span  className='text-5xl mt-10'>  Grow your online store.</span> 
            <span className='text-4xl mt-10'> Learn the tips and tricks from experts.</span>
       
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 p-4  m-2  '>
            {
                text.map((card)=>(
                    <div className='p-4 m-2 shadow-md hover:opacity-50 rounded'>
                        <img src={card.url} alt="" className='rounded' />
                        <h1 className='text-gray-400 '>{card.title}</h1>
                        <p>{card.des}</p>
                    </div>
                ))
            }
        </div>
        <div className='mt-10 flex items-center justify-center p-10'><button className='cursor-pointer border-2 w-1/2 p-3 sm:w-1/12 md:w-1/6 font-semibold text-lg rounded'>View All </button>
        </div> 

    </div>
  )
}

export default Blog