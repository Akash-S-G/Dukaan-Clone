import React from 'react'
import adidas from '../src/assets/add.webp'
import coca from '../src/assets/coca.webp'
import star from '../src/assets/star.png'
import ibm from '../src/assets/ibm.webp'
import mcd from '../src/assets/mc.webp'
import merc from '../src/assets/mcr.webp'
import nike from '../src/assets/nike.webp'
import toyota from '../src/assets/toyota.webp'
import disny from '../src/assets/disny.webp'
import apple from '../src/assets/apple.png'

const logos = [adidas,coca,star,ibm,mcd,merc,nike,toyota,disny,apple];
function Slider() {
  return (
    <div className="bg-[#1A1A1A] py-6">
    <div className="overflow-x-auto scrollbar-hide">
      <div className="flex items-center space-x-10 px-10 min-w-max scroll-auto">
        {logos.map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-12 opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </div>
    </div>
  </div>
  )
}

export default Slider