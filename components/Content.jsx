import React from 'react'
import first from '../src/assets/first.svg'
import second from '../src/assets/secons.svg'
import third from '../src/assets/third.svg'
function Content() {
    return (
        <div>
            <div className=' w-full flex items-center justify-center m-6'>

            <span className='text-4xl font-bold '>Whether you're a startup or an established business,<br /> here's why Dukaan is your best choice</span>
            </div>
           
            <div>
                <div className=' flex flex-wrap sm:flex items-center justify-center mt-10 '>
                    <div className='mx-auto'>

                        <img src={first} alt="" className='shadow-md' />
                    </div>
                    <div className='mx-auto '>
                        <div>
                             <span className='font-bold text-xl '>  Launch Fast</span>
                        <ul className='mt-10 text-lg  '>
                            <li>Fully responsive e-commerce website & mobile app.</li>
                            <li>Loads 6X faster than existing solutions.</li>
                            <li>Upload/import products and inventory in bulk.</li>
                            <li>Integrate payment gateways.</li>
                            <li>Easily customizable themes.</li>
                        </ul>
                        </div>
                       
                    </div>
                </div>


                <div className='flex flex-wrap sm:flex items-center justify-center mt-15'>
                    <div className='mx-auto'>
                        <span className='font-bold text-xl'>  Scale Faster</span>
                        <ul className='mt-10 text-lg'>
                            <li>Guaranteed 99.5% uptime for your store - We keep you open for business.</li>
                            <li>60+ third party plugins.</li>
                            <li>Marketing tools and discounts to drive repeat orders..</li>
                            <li>Add staff accounts, assign different roles</li>
                            <li>Unlimited transactions, minimal transaction fees.</li>
                        </ul>
                    </div>
                    <div className='mx-auto'>

                        <img src={second} alt="" className='shadow-md' />
                    </div>


                </div>

                <div className='flex flex-wrap sm:flex items-center justify-center mt-15'>
                <div className='mx-auto'>

                    <img src={third} alt="" className='shadow-md' />
                </div>
                <div className='mx-auto'>
                    <span className='font-bold text-xl'>  Manage Better</span>
                    <ul className='text-lg mt-10'>
                    <li>Order tracking, invoicing and order reports..</li>
                    <li>Bulk edit product prices, variants, inventory.</li>
                    <li>Manage global deliveries.</li>
                    <li>In-depth business analytics.</li>
                    <li>Automate all tax calculations.</li>
                    </ul>
                </div>

            </div>
            </div>

        </div>
    )
}

export default Content