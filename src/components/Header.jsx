import React, { useState } from 'react'

import Button from './Button';
import Modal from './Modal'

//images
import metaHouse from "../images/meta-house.jpg"
import metaBnb from "../images/metabnb.png"
import { Link } from 'react-router-dom';

import places from "../pages/Places";

const Nav = () => {
  const [showModal, setShowModal] = useState(false);
  const [open,setOpen]=useState(false);

  const Links = [
    {name:"Home", link:"/"},
    {name:"Places to stay", link:"./places"},
    {name:"NFTs", link:"#"},
    {name:"Communty", link:"#"}
  ];

  const handleOpen = () => {
    setShowModal(true)
    setOpen(false)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <>
      <div className='shadow-md w-full top-0 left-0'>
        <div className='md:flex items-center justify-between bg-white py-7 md:px-10 px-7 mb-10 md:mb-20'>
          <div className=' flex items-center'>
            <div className="flex">
              <img src={metaHouse} className="w-[10%]" alt="" />
              <img src={metaBnb} className="w-[45%] h-full mt-0.5" alt="" />
            </div>
          </div>
        
          <div 
          onClick={()=>setOpen(!open)} 
          className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden text-[#A02279]'>
            <ion-icon name={open ? 'close' : 'menu'}></ion-icon>
          </div>

          <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:bg-white 
          bg-black opacity-80 md:static md:z-auto z-[1] left-0 w-full md:w-auto 
            md:pl-0 pl-9 transition-all duration-700 ease-in ${open ? 'top-20 ':'top-[-490px]'}`}
          >{
              Links.map((link)=>(
                <li key={link.name} className='md:ml-8 text-xl md:my-0 my-5'>
                  <Link 
                    to={link.link}
                    className='text-white md:text-black md:hover:text-gray-700 hover:text-slate-300 duration-500'>
                    {link.name}
                  </Link>
                </li>
              ))
            }
            <Button openModal={handleOpen}>
              Connect Wallet
            </Button>
          </ul>
        </div>
      </div>
      {showModal && <Modal closeModal={handleClose} />}
    </>
  )
}

export default Nav