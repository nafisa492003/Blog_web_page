import React from 'react'
import featured from "../assets/featured.png"
import Flex from './Flex'
import { FaCalendarCheck } from "react-icons/fa";
import { AiOutlineComment } from "react-icons/ai";
const Featured_Slide = () => {
  return (
    <div className='w-full lg:w-[370px] h-fit lg:h-[320px] mx-auto relative overflow-hidden group mt-[60px]'>
    <img className='w-full' src={featured} alt="" />
    <div className='absolute bottom-[-52px] left-[15px] group-hover:bottom-[4px] duration-150 ease-in-out'>
          <span className='font-medium font-prompt text-[14px] py-[10px] px-[15px] bg-main rounded-[10px] text-white'>Life Style</span>
          <h1 className='mt-5 w-full lg:w-[360px] font-prompt font-medium md:text-[18px] text-[24px] text-white capitalize'>
            imperdiet ident turpis Nuncon ont scelerisque ante.
          </h1>
          <Flex className={`items-center gap-2 my-6`}>
            <Flex className={`items-center gap-1`}>
            <FaCalendarCheck className='text-[14px] text-hash ' />  
            <span className='text-[14px] text-hash font-inter font-medium'>Novembar 03, 2022</span> 
            </Flex>
            <div className='w-[2px] h-[10px] rounded-[4px] bg-main'></div>
            <Flex className={`items-center gap-1`}>
            <AiOutlineComment className='text-[14px] text-hash ' />  
            <span className='text-[14px] text-hash font-inter font-medium'>450 Comment</span> 
            </Flex>
          </Flex>
        </div>
    </div>
  )
}

export default Featured_Slide