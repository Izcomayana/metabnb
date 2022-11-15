import { useState } from 'react'

// components
import Header from '../components/Header'
import FullLocations from '../components/FullLocations'
import Footer from '../components/Footer'
import Dropdown from "../components/Dropdown"

// images
import sort from "../images/sort.png"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="categories flex">
        {/* <p>Resturant</p>
        <p>Cottage</p>
        <p>Castle</p>
        <p>Fantastic Cities</p>
        <p>Beach</p>
        <p>Cabin</p>
        <p>Off Grid</p>
        <p>Farm</p>
        <button>
          Location
          <img src={sort} alt="" />
        </button> */}
      </div>

      <div className='mb-5 ml-5'>
        <Dropdown />
      </div>

      <div className="m-auto w-[90%] mb-10">
        <h2 className="font-bold mb-5 text-3xl text-center">Inspiration for your next adventure</h2>
        <FullLocations />
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App

