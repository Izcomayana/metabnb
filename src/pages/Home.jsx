// components
import Header from '../components/Header'
import Locations from '../components/Locations'
import Footer from '../components/Footer'

// images
import about from "../images/about.png"
import mbtoken from "../images/mbtoken.svg"
import metamask from "../images/metamask.svg"
import opensea from "../images/opensea.svg"
import metaNft from "../images/metabnb-nfts.png"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="w-[90%] m-auto my-16 sm:flex sm:flex-row-reverse">
        <div className="m-auto sm:w-[35%]">
          <img className='m-auto' src={about} alt="" />
        </div>
        <div className="my-16 sm:w-[55%]">
          <p className='text-4xl mb-5 leading-normal'>
            Rent a <span className='text-[#A02279] font-bold'> Place</span> away from 
            <span className='text-[#A02279] font-bold'> Home</span> in the 
            <span className='text-[#A02279] font-bold'> Metaverse</span>
          </p>
          <p className='text-xl sm:text-lg'>
            we provide you access to luxury and affordable houses in the metaverse, 
            get a chance to turn your imagination to reality at your comfort zone
          </p>
          <div className="search w-[85%] m-auto mt-5">
            <input 
            className='w-[70%] rounded-l-md border-y-2 border-l-2 h-12 px-5' 
            placeholder='Search for location' 
            type="text" />
            <button className='bg-[#A02279] border h-12 hover:bg-[#c7459e] rounded-r-md transition duration-300 w-[30%]'>
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="bg-[#A02279] w-full flex justify-around py-3">
        <div className="w-1/5">
          <img src={mbtoken} alt="" />
          <span></span>
        </div>
        <div className="w-1/5">
          <img src={metamask} alt="" />
          <span></span>
        </div>
        <div className="w-1/5">
          <img src={opensea} alt="" />
          <span></span>
        </div>
      </div>

      <div className="my-10 m-auto w-[90%]">
        <h2 className="font-bold mb-10 text-3xl sm:text-4xl text-center">Inspiration for your next adventure</h2>
        <Locations />
      </div>

      <div className="bg-[#A02279] bnb-nfts p-10 py-16 sm:pb-20 sm:px-10 sm:pt-5 text-white text-center sm:flex sm:flex-row-reverse">
        <div className="nft-img mb-16 sm:mb-0 w-[55%] mx-auto sm:mr-0 sm:w-1/2">
          <img src={metaNft} alt="" />
        </div>
        <div className="texts sm:text-left sm:w-[35%] sm:my-16 sm:flex sm:flex-col sm:justify-center">
          <h2 className='font-bold mb-5 sm:mb-7 text-3xl sm:text-4xl'>Metabnb NFTs</h2>
          <p className='mb-5 sm:text-base'>
          Discover our NFT gift cards collection. 
          Loyal customers gets amazing gift cards which are traded as NFTs. 
          These NFTs gives our cutomer access to loads of our exclusive services.
          </p>
          <button 
            className='bg-white w-max border cursor-pointer hover:bg-[#A02279] hover:border hover:text-white 
            p-3 rounded-md text-[#A02279] transition-all duration-300'>
              Learn More
          </button>
        </div>
      </div>

      <div className="footer">
        <Footer />
      </div>
    </div>
  )
}

export default App

