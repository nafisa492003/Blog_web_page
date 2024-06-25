import React from 'react'
import author_img from '../assets/Artical_img.png'
import Flex from './Flex'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from 'react-router-dom';
const AuthorCards = () => {
  return (
    <div className='px-[30px] py-[25px] border border-secondary rounded-[5px] w-full mx-auto lg:w-[270px] h-fit lg:h-[312px] relative group overflow-hidden'>
      <span className='font-medium font-prompt text-[14px] py-[10px] px-[15px] bg-main rounded-[5px] text-white absolute top-0 left-0'>Life Style</span>
      <Flex className={`justify-center gap-2 flex-col items-center`}>
      <img className='w-[85px] mx-auto' src={author_img} alt="" />
      <h1 className='font-semibold font-prompt text-[22px]'>Mateo Danienobi</h1>
      <Flex className={`items-center justify-between py-2 border-b border-secondary w-full`}>
        <h5 className='font-normal font-prompt text-[16px] text-hash'>Post</h5>
        <h5 className='font-normal font-prompt text-[16px] text-hash'>50</h5>
      </Flex>
      <Flex className={`items-center justify-between py-2 border-b border-secondary w-full`}>
        <h5 className='font-normal font-prompt text-[16px] text-hash'>Post Views</h5>
        <h5 className='font-normal font-prompt text-[16px] text-hash'>1056</h5>
      </Flex>
      <Flex className={`items-center justify-between w-full`}>
        <h5 className='font-normal font-prompt text-[16px] text-hash'>Like</h5>
        <h5 className='font-normal font-prompt text-[16px] text-hash'>500</h5>
      </Flex>
      </Flex>
      <div className='absolute left-0 w-full duration-150 ease-in-out group-hover:top-0'>
     <Flex className={`flex-col w-full px-2 py-[30px] bg-white gap-9 md:w-[270px]`}>
       <Flex className={`items-center justify-between  gap-6`}>
        <Flex className={`items-center  gap-1`}>
        <FaFacebook className=' text-[24px] hover:text-main duration-100' />
        <span className='font-normal font-prompt text-[14px] hover:text-main hover:underline duration-100 ease-in-out uppercase'>Facebook</span>
        </Flex>
        <span className='font-normal font-prompt text-[14px]'>3.5K Like</span>
       </Flex>
       <Flex className={`items-center justify-between  gap-6`}>
        <Flex className={`items-center  gap-1`}>
        <FaTwitter className=' text-[24px] hover:text-main duration-100' />
        <span className='font-normal font-prompt text-[14px] hover:text-main hover:underline duration-100 ease-in-out uppercase'>Twitter</span>
        </Flex>
        <span className='font-normal font-prompt text-[14px]'>60k Follower</span>
       </Flex>
       <Flex className={`items-center justify-between gap-6`}>
        <Flex className={`items-center gap-1 `}>
        <FaPinterest className=' text-[24px] hover:text-main duration-100' />
        <span className='font-normal font-prompt text-[14px] hover:text-main hover:underline duration-100 ease-in-out uppercase'>Pinterest</span>
        </Flex>
        <span className='font-normal font-prompt text-[14px]'>25k Follower</span>
       </Flex>
       <Flex className={`items-center justify-between  gap-6`}>
        <Flex className={`items-center  gap-1`}>
        <FaSquareInstagram className=' text-[24px] hover:text-main duration-100' />
        <span className='font-normal font-prompt text-[14px] hover:text-main hover:underline duration-100 ease-in-out uppercase'>Instagram</span>
        </Flex>
        <span className='font-normal font-prompt text-[14px]'>75k Follower</span>
       </Flex>
       <Flex className="items-center justify-center gap-2">
              <Link to='/author' className="font-medium font-prompt text-[14px] lg:text-[16px] text-main inline-block">
                View Details
              </Link>
              <FaArrowRightLong className="text-[14px] lg:text-[16px] text-main" />
            </Flex>
     </Flex>
    
      </div>
    </div>
  )
}

export default AuthorCards