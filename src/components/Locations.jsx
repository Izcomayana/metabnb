import React from 'react'

// images
import rating from "../images/ratings.png"
import loc1 from "../images/loc-1.png"
import loc2 from "../images/loc-2.png"
import loc3 from "../images/loc-3.png"
import loc4 from "../images/loc-4.png"
import loc5 from "../images/loc-5.png"
import loc6 from "../images/loc-6.png"
import loc7 from "../images/loc-7.png"
import loc8 from "../images/loc-8.png"

export default function Locations() {
  return (
    <div className='flex flex-wrap gap-6 justify-center p-3 text-sm sm:text-xs'>
      <div className="border p-4 rounded-3xl w-4/5 sm:w-[22%]">
        <img src={loc1} alt="" className='pb-5 w-full' />
        <div className="flex justify-between mb-4 border">
          <div>Desert King</div>
          <div>1MBT per night</div>
        </div>
        <div className="flex justify-between mb-4">
          <div>2345km away</div>
          <div>available for 2weeks stay</div>
        </div>
        <img src={rating} alt="" />
      </div>
      <div className="border p-4 rounded-3xl w-4/5 sm:w-[22%]">
        <img src={loc2} alt="" className='pb-5 w-full' />
        <div className="flex justify-between mb-4 border">
          <div>Desert King</div>
          <div>1MBT per night</div>
        </div>
        <div className="flex justify-between mb-4">
          <div>2345km away</div>
          <div>available for 2weeks stay</div>
        </div>
        <img src={rating} alt="" />
      </div>
      <div className="border p-4 rounded-3xl w-4/5 sm:w-[22%]">
        <img src={loc3} alt="" className='pb-5 w-full' />
        <div className="flex justify-between mb-4 border">
          <div>Desert King</div>
          <div>1MBT per night</div>
        </div>
        <div className="flex justify-between mb-4">
          <div>2345km away</div>
          <div>available for 2weeks stay</div>
        </div>
        <img src={rating} alt="" />
      </div>
      <div className="border p-4 rounded-3xl w-4/5 sm:w-[22%]">
        <img src={loc4} alt="" className='pb-5 w-full' />
        <div className="flex justify-between mb-4 border">
          <div>Desert King</div>
          <div>1MBT per night</div>
        </div>
        <div className="flex justify-between mb-4">
          <div>2345km away</div>
          <div>available for 2weeks stay</div>
        </div>
        <img src={rating} alt="" />
      </div>
      <div className="border p-4 rounded-3xl w-4/5 sm:w-[22%]">
        <img src={loc5} alt="" className='pb-5 w-full' />
        <div className="flex justify-between mb-4 border">
          <div>Desert King</div>
          <div>1MBT per night</div>
        </div>
        <div className="flex justify-between mb-4">
          <div>2345km away</div>
          <div>available for 2weeks stay</div>
        </div>
        <img src={rating} alt="" />
      </div>
      <div className="border p-4 rounded-3xl w-4/5 sm:w-[22%]">
        <img src={loc6} alt="" className='pb-5 w-full' />
        <div className="flex justify-between mb-4 border">
          <div>Desert King</div>
          <div>1MBT per night</div>
        </div>
        <div className="flex justify-between mb-4">
          <div>2345km away</div>
          <div>available for 2weeks stay</div>
        </div>
        <img src={rating} alt="" />
      </div>
      <div className="border p-4 rounded-3xl w-4/5 sm:w-[22%]">
        <img src={loc7} alt="" className='pb-5 w-full' />
        <div className="flex justify-between mb-4 border">
          <div>Desert King</div>
          <div>1MBT per night</div>
        </div>
        <div className="flex justify-between mb-4">
          <div>2345km away</div>
          <div>available for 2weeks stay</div>
        </div>
        <img src={rating} alt="" />
      </div>
      <div className="border p-4 rounded-3xl w-4/5 sm:w-[22%]">
        <img src={loc8} alt="" className='pb-5 w-full' />
        <div className="flex justify-between mb-4 border">
          <div>Desert King</div>
          <div>1MBT per night</div>
        </div>
        <div className="flex justify-between mb-4">
          <div>2345km away</div>
          <div>available for 2weeks stay</div>
        </div>
        <img src={rating} alt="" />
      </div>
    </div>
  )
}
