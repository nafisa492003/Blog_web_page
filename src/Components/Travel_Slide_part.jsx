import React from "react";
import Flex from "./Flex";
import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
import { ImFire } from "react-icons/im";
import { Link } from 'react-router-dom';
import travel_img from '../assets/Image_three.png'
import { AiTwotonePlayCircle } from "react-icons/ai";
const Travel_Slide_part = ({num, month,subtitle,title, min}) => {
  return (
   
    <Flex className={`items-center gap-5 py-[30px] border-b-[2px] border-secondary flex-col-reverse md:flex-row w-full lg:w-[770px] mx-auto`}>
      <div className="border rounded-full p-11 md:p-5 lg:p-11 border-secondary">
        <h2 className="font-prompt font-semibold text-[30px] text-center">
         {num}
        </h2>
        <h4 className="font-normal font-prompt text-[14px] text-hash">
        {month}
        </h4>
      </div>
      <div className="flex flex-col gap-4">
        <Flex className="items-center gap-2">
          <h5 className="font-medium font-inter text-[12px]  text-hash hover:text-black duration-150">
           {subtitle}
          </h5>
          <GoDotFill className="text-[12px]  text-main" />
          <h5 className="font-medium font-inter text-[12px] text-hash hover:text-black duration-150">
            Travel
          </h5>
        </Flex>
        <h1 className="font-semibold font-prompt text-[20px] w-full lg:w-[320px]">
       {title}
          </h1>
          <Flex className="items-center lg:gap-[80px] gap-10">
            <Flex className="items-center gap-2">
              <Link className="font-medium font-prompt text-[14px] lg:text-[16px] text-main inline-block">
                View Details
              </Link>
              <FaArrowRightLong className="text-[14px] lg:text-[16px] text-main" />
            </Flex>
            <Flex className="items-center gap-2">
              <ImFire className="text-[12px] lg:text-[14px] text-[#101010] opacity-30" />
              <h5 className="font-medium font-inter text-[12px] lg:text-[14px] text-[#101010] opacity-30 hover:text-black duration-150">
               {min}
              </h5>
            </Flex>
          </Flex>
      </div>
      <div className="relative w-full group">
      <img className="w-full" src={travel_img} alt="" />
      <AiTwotonePlayCircle className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-[60px] hidden group-hover:block duration-150" />
      </div>
    </Flex>
        
  );
};

export default Travel_Slide_part;
