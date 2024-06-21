import React from 'react'
import Container from './Container'
import Flex from './Flex'
import { GoDotFill } from "react-icons/go";
import logo from '../assets/Logo.png'
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa6";
import { GrInstagram } from "react-icons/gr";
const Header = () => {
  return (
  <section className='hidden py-4 bg-black md:block'>
    <Container>
      <Flex className={`items-center justify-between`}>
    <Flex className={`items-center md:gap-1 lg:gap-4`}>
      <h5 className='font-normal text-white font-prompt text-[14px]'>Novembar 30, 2022</h5>
      <GoDotFill className=' text-white opacity-25 text-[14px]' />
    <h5 className='font-light text-white font-prompt text-[14px]'>28°C</h5>
    
    </Flex>
        {/* img part */}
        <img src={logo} alt="" />
         {/* img part */}
         <Flex className={`items-center md:gap-1 lg:gap-4`}>
          <Flex className={`items-center gap-2`}>
          <FaFacebookF className=' text-white text-[16px] hover:text-main' />
          <h5 className='font-light text-white font-prompt text-[14px]'>3.5K</h5>
          </Flex>
            <GoDotFill className=' text-white opacity-25 text-[14px]' />
            <Flex className={`items-center gap-2`}>
          <FaTwitter className=' text-white text-[16px] hover:text-main' />
          <h5 className='font-light text-white font-prompt text-[14px]'>2.1K</h5>
          </Flex>
          <GoDotFill className=' text-white opacity-25 text-[14px]' />
          <Flex className={`items-center gap-2`}>
          <FaPinterestP className=' text-white text-[16px] hover:text-main' />
          <h5 className='font-light text-white font-prompt text-[14px]'>1.9K</h5>
          </Flex>
          <GoDotFill className=' text-white opacity-25 text-[14px]' />
          <Flex className={`items-center gap-2`}>
          <GrInstagram className=' text-white text-[16px] hover:text-main' />
          <h5 className='font-light text-white font-prompt text-[14px]'>6.5K</h5>
          </Flex>
         </Flex>
      </Flex>
    </Container>
  </section>
  )
}

export default Header