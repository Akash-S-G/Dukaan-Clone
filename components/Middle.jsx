import React from 'react'
import watch from '../src/assets/watch.png'
import shop from '../src/assets/shop.png'
import cart from '../src/assets/cart.png'
import app from '../src/assets/app.png'
import staff from '../src/assets/acc.png'
import analytics from '../src/assets/analytics.png'
const logos=[{url:watch,des:`Incredibly fast storefronts. Don't take our word for it, start selling online and see it for yourself!`,title:'Site Speed'}
  ,{url:shop,
    title:'Multi-Warehouse',
    des:`One store, multiple locations. Ship products from multiple warehouses across India.`
  },{
    url:cart,
    title:'Optimised Checkouts',
    des:`Offer a seamless shopping experience optimised for checkouts and reduce abandonment rates.`
  },{
    url:app,
    title:' Staff Accounts',
    des:`Add employees, colleagues and teammates to help you grow your business while managing access.`
  },{
    url:staff,
    title:'Android App',
    des:`The world is mobile. It's time your store is too. Get more loyal customers with your mobile app.`
  },{
    url:analytics,
    title:'Advanced Analytics',
    des:`All the information about your sales, traffic, regions and products, just a single click away.`
  }];

function Middle() {
  return (
    <div className=' bg-[#fef9ef] shadow-md '>
      <div className='shadow-md '>
        <div className='mt-20 flex flex-wrap justify-center items-center'>
          <span className='text-3xl font-semibold mt-10'>E-commerce Simplified, Success Amplified</span><br />
          <span className='text-3xl font-semibold'>Empowering your online business growth with all the essential tools.</span>
        </div>
        <div className="mt-10 md:grid grid-cols-3 ">
        {logos.map((logo, index) => (
          <div className='m-5 bg-white shadow-md rounded p-5 '>
           <div className='flex items-center justify-center'>
            <img
            key={index}
            src={logo.url}
            alt={`logo-${index}`}
            className="w-2/8"
          />
           </div>
            
          <div className='flex justify-center items-baseline text-xl font-semibold m-2'>{logo.title}</div> 
          <div className='w-[80%] '>{logo.des}</div> 
          </div>
         
          
        ))}

      </div>
       
      </div>

    </div>
  )
}

export default Middle