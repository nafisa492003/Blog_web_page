import React, { useState } from 'react'
import Container from './Container'
import { CgMenuLeft } from "react-icons/cg";
import Flex from './Flex';
import { Link } from 'react-router-dom';
import { IoSearchOutline } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa6";
import menu_logo from '../assets/menu_logo.png'
const Nav_bar = () => {
  const [nav,setNav] = useState(false)
  return (
   <section className='py-[25px] bg-[#F2F2DE] relative'>
    <Container>
      {/* for small screen */}
      <Flex className={`items-center justify-between md:hidden`}>
      <img src={menu_logo} alt="" />
      <CgMenuLeft onClick={()=>setNav(!nav)} className='text-[24px]' />
      </Flex>
      {nav && (
        <div className='absolute w-full p-4 bg-black bottom-[-288px] right-0 z-50'>
          <ul className='flex flex-col gap-4 '>
        <li className='font-medium font-inter text-[16px] text-white hover:text-main duration-150'><Link to='/'>Home</Link> </li>
        <li className='font-medium font-inter text-[16px] text-white hover:text-main duration-150'><Link to='/about'>About</Link> </li>
        <li className='font-medium font-inter text-[16px] text-white hover:text-main duration-150'><Link to='/'>Topic</Link> </li>
        <li className='font-medium font-inter text-[16px] text-white hover:text-main duration-150'><Link to='/post'>Post</Link> </li>
        <li className='font-medium font-inter text-[16px] text-white hover:text-main duration-150'><Link to='/author'>Author</Link> </li>
        <li className='font-medium font-inter text-[16px] text-white hover:text-main duration-150'><Link to='/blog'>Pages</Link> </li>
        <li className='font-medium font-inter text-[16px] text-white hover:text-main duration-150'><Link to='/contact'>Contact</Link> </li> 
      </ul>
        </div>
      )}
        {/* for small screen */}
      {/* for larg screen */}
      <Flex className={`items-center justify-between hidden md:flex`}>
      <CgMenuLeft className='text-[24px]' />
      <ul className='flex items-center md:gap-6 lg:gap-[50px]'>
        <li className='font-medium font-inter text-[16px] text-black hover:text-main duration-150'><Link to='/'>Home</Link> </li>
        <li className='font-medium font-inter text-[16px] text-black hover:text-main duration-150'><Link to='/about'>About</Link> </li>
        <li className='font-medium font-inter text-[16px] text-black hover:text-main duration-150'><Link to='/'>Topic</Link> </li>
        <li className='font-medium font-inter text-[16px] text-black hover:text-main duration-150'><Link to='/post'>Post</Link> </li>
        <li className='font-medium font-inter text-[16px] text-black hover:text-main duration-150'><Link to='/author'>Author</Link> </li>
        <li className='font-medium font-inter text-[16px] text-black hover:text-main duration-150'><Link to='/blog'>Pages</Link> </li>
        <li className='font-medium font-inter text-[16px] text-black hover:text-main duration-150'><Link to='/contact'>Contact</Link> </li>
       
      </ul>
      <Flex className={`items-center gap-10`}>

      <IoSearchOutline className='text-[24px]' />
      <FaRegUser className='text-[24px]' />
      </Flex>
      </Flex>
         {/* for larg screen */}
    </Container>
   </section>
  )
}

export default Nav_bar