import React from 'react';
import logo from '../src/assets/download.svg';

function Navbar() {
  return (
    <div className="fixed top-0 left-0 w-full z-50  backdrop-blur-md shadow-md p-4 text-lg lg:grid grid-cols-10">
      <div className="lg:col-span-1">
        <img src={logo} className="w-18 sm:w-30 absolute cursor-pointer " alt="Logo" />
      </div>
      <div className="flex justify-center lg:flex col-span-7 mx-69 font-semibold">
        <li className="list-none mx-4 hover:underline">Products</li>
        <li className="list-none mx-4 hover:underline">Company</li>
        <li className="list-none mx-4 hover:underline">Resources</li>
        <li className="list-none mx-4 hover:underline">Pricing</li>
      </div>
      <div className="hidden lg:flex col-span-2">
        <div className="py-2 cursor-pointer hover:underline font-semibold">Sign in</div>
        <button className="mx-7 rounded bg-blue-500 px-4 py-2 cursor-pointer hover:bg-blue-700">
          Start Free
        </button>
      </div>
    </div>
  );
}

export default Navbar;
