import React from 'react'

import metaLogo from "../images/meta-transparent.svg"
import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";
import twitter from "../images/twitter.png"

export default function Footer() {
  return (
    <div 
      className='bg-black flex flex-col-reverse mt-10 
      sm:flex-row justify-center sm:justify-start p-10 py-16 sm:p-0 
      sm:pb-10 sm:pt-10 text-base text-white text-center sm:text-left'
    > <div className="sm:w-1/6 sm:ml-12">
        <div className='mb-20'>
          <img src={metaLogo} alt="" className='mx-auto' />
        </div>
        <div className="flex w-1/2 mx-auto  sm:ml-0 sm:w-9/12">
          <img src={facebook} alt="" className='mb-6 mx-auto sm:ml-0' />
          <img src={instagram} alt="" className='mb-6 mx-auto' />
          <img src={twitter} alt="" className='mb-6 mx-auto' />
        </div>
        <p>&copy; 2022 metabnb</p>
      </div>
      
      <div className="mb-10 sm:flex sm:w-[70%] sm:justify-around sm:text-sm">
        <div className="mb-8">
          <h3 className='font-bold mb-2 text-2xl'>Communities</h3>
          <p className='mb-1'>NFT</p>
          <p className='mb-1'>Tokens</p>
          <p className='mb-1'>Landlords</p>
          <p className='mb-1'>Discord</p>
        </div>

        <div className="places mb-8">
          <h3 className='font-bold mb-2 text-2xl'>Places</h3>
          <p className='mb-1'>Castle</p>
          <p className='mb-1'>Farms</p>
          <p className='mb-1'>Beaches</p>
          <p className='mb-1'>Learn More</p>
        </div>

        <div className="about mb-8">
          <h3 className='font-bold mb-2 text-2xl'>About</h3>
          <p className='mb-1'>Road Map</p>
          <p className='mb-1'>Creators</p>
          <p className='mb-1'>Career</p>
          <p className='mb-1'>Contact Us</p>
        </div>
      </div>
    </div>
  )
}
