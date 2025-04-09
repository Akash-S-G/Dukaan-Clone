import React from 'react';
import adidas from '../src/assets/add.webp';
import coca from '../src/assets/coca.webp';
import star from '../src/assets/star.png';
import ibm from '../src/assets/ibm.webp';
import mcd from '../src/assets/mc.webp';
import merc from '../src/assets/mcr.webp';
import nike from '../src/assets/nike.webp';
import toyota from '../src/assets/toyota.webp';
import disny from '../src/assets/disny.webp';
import apple from '../src/assets/apple.png';

const logos = [adidas, coca, star, ibm, mcd, merc, nike, toyota, disny, apple];

function Slider() {
  return (
    <div className="overflow-hidden w-full bg-white py-4">
      <div className="slider-track flex whitespace-nowrap w-max cursor-pointer">
        {[...logos, ...logos].map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`logo-${index}`}
            className="h-16 w-auto mx-4 object-contain"
          />
        ))}
      </div>

      <style>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        .slider-track {
          animation: slide 30s linear infinite;
        }

        .slider-track:hover {
          animation-play-state: paused;
        }
      `}</style>
    </div>
  );
}

export default Slider;
