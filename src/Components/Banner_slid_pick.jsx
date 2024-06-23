import React from 'react';
import banner_pick from '../assets/banner_img.png';
import overlay_img from '../assets/Image_one.png';
import Flex from './Flex';
import { GoDotFill } from "react-icons/go";
import { Link } from 'react-router-dom';
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosClock } from "react-icons/io";

const Banner_slid_pick = () => {
  return (
    <div className='relative w-full lg:w-[420px] h-fit lg:h-[538px] overflow-hidden group mx-auto'>
      <div className='relative'>
        <img src={banner_pick} alt="Banner" className='w-full' />
        <div className='absolute bottom-[30px] left-[20px]'>
          <span className='font-medium font-prompt text-[14px] py-[10px] px-[15px] bg-main rounded-[10px] text-white'>Life Style</span>
          <h1 className='mt-5 w-full lg:w-[360px] font-prompt font-medium md:text-[18px] text-[24px] text-white capitalize'>
            imperdiet ident turpis Nuncon ont scelerisque ante.
          </h1>
        </div>
      </div>
      <div className='w-full lg:w-[420px] absolute group-hover:top-0 ease-in-out duration-150'>
        <div className='relative w-full'>
          <img className='w-full' src={overlay_img} alt="Overlay" />
          <span className='font-medium font-prompt text-[14px] py-[10px] px-[30px] bg-main rounded-[4px] text-white absolute top-[1px]'>Travel</span>
        </div>
        <div className=' px-[25px] lg:px-[25px] md:px-2 bg-white w-full pb-[80px] pt-[40px]'>
          <Flex className='items-center gap-2 border py-[10px] lg:py-[16px] px-2 lg:px-[25px] border-[#f2f2f2] rounded-full mr-[50px] lg:mr-0'>
            <h5 className='font-medium font-inter text-[12px] lg:text-[14px] text-[#101010] opacity-30 hover:text-black duration-150'>By Luke Julian</h5>
            <GoDotFill className='text-[12px] lg:text-[14px] text-main' />
            <h5 className='font-medium font-inter text-[12px] lg:text-[14px] text-[#101010] opacity-30 hover:text-black duration-150'>Nov 22, 2022</h5>
            <GoDotFill className='text-[12px] lg:text-[14px] text-main' />
            <h5 className='font-medium font-inter text-[12px] lg:text-[14px] text-[#101010] opacity-30 hover:text-black duration-150'>2.8k View</h5>
          </Flex>
          <h1 className='font-semibold font-prompt text-[14px] iphone_tab:text-[14px] iphone:text-[24px] lg:text-[24px] md:my-2 my-[25px] lg:my-[25px] mr-[50px]  md:mr-0'>
            Our Begin Now To Beingonan You Wokajon Beinghe.
          </h1>
          <Flex className='items-center lg:gap-[150px] gap-10'>
            <Flex className='items-center gap-2'>
              <Link className='font-medium font-prompt text-[14px] lg:text-[16px] text-main inline-block'>
                View Details
              </Link>
              <FaArrowRightLong className='text-[14px] lg:text-[16px] text-main' />
            </Flex>
            <Flex className='items-center gap-2'>
              <IoIosClock className='text-[12px] lg:text-[14px] text-[#101010] opacity-30' />
              <h5 className='font-medium font-inter text-[12px] lg:text-[14px] text-[#101010] opacity-30 hover:text-black duration-150'>5 Min Read</h5>
            </Flex>
          </Flex>
        </div>
      </div>
    </div>
  );
}

export default Banner_slid_pick;
