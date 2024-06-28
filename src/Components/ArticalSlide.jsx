import React from "react";
import overlay_img from "../assets/Image_one.png";
import Flex from "./Flex";
import { GoDotFill } from "react-icons/go";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import { ImFire } from "react-icons/im";
import Aritacl_img from '../assets/Artical_img.png'
const ArticalSlide = () => {
  return (
    <div>
      <div className="w-full lg:w-[370px] relative h-fit lg:h-[448px] overflow-hidden group mx-auto">
        <div className="relative w-full">
          <img className="w-full" src={overlay_img} alt="Overlay" />
          <span className="font-medium font-prompt text-[14px] py-[10px] px-[30px] bg-white rounded-[4px] text-black absolute top-[15px] left-[15px] italic">
            Travel
          </span>
        </div>
        <div className=" px-[25px] bg-white w-full py-[30px]">
          <Flex className="items-center gap-2 border py-[10px] lg:py-[16px] lg:px-[20px] border-[#f2f2f2] rounded-full">
            <h5 className="font-medium font-inter text-[12px]  text-[#101010] opacity-30 hover:text-black duration-150">
              By Luke Julian
            </h5>
            <GoDotFill className="text-[12px]  text-main" />
            <h5 className="font-medium font-inter text-[12px] text-[#101010] opacity-30 hover:text-black duration-150">
              Nov 22, 2022
            </h5>
            <GoDotFill className="text-[12px]  text-main" />
            <h5 className="font-medium font-inter text-[12px]  text-[#101010] opacity-30 hover:text-black duration-150">
              2.8k View
            </h5>
          </Flex>
          <h1 className="font-semibold font-prompt text-[20px]  my-[25px]">
            Our Begin Now To Beingonan You Wokajon Beinghe.
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
                5 Min Read
              </h5>
            </Flex>
          </Flex>
        </div>
        {/* overlay */}
        <div className="absolute flex flex-col items-center w-full gap-3 px-2 py-3 bg-white group-hover:top-0 md:py-10 lg:py-3">
        <span className='font-medium font-prompt text-[14px] py-[8px] px-[15px] bg-main rounded-[10px] text-white italic'>Life Style</span>
        <Flex className="items-center gap-2 border py-[10px] lg:py-[16px] lg:px-[20px] border-[#f2f2f2] rounded-full">
            <h5 className="font-medium font-inter text-[12px]  text-[#101010] opacity-30 hover:text-black duration-150">
              By Luke Julian 
            </h5>
            <GoDotFill className="text-[12px]  text-main" />
            <h5 className="font-medium font-inter text-[12px] text-[#101010] opacity-30 hover:text-black duration-150">
              Nov 22, 2022
            </h5>
            <GoDotFill className="text-[12px]  text-main" />
            <h5 className="font-medium font-inter text-[12px]  text-[#101010] opacity-30 hover:text-black duration-150">
              2.8k View
            </h5>
           
          </Flex> 
          <h1 className="font-semibold font-prompt text-[20px]">
            Our Begin Now To Beingonan You Wokajon Beinghe.
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
                5 Min Read
              </h5>
            </Flex>
          </Flex>
          <img src={Aritacl_img} alt="" />
        </div>

        {/* overlay */}
      </div>
    </div>
  );
};

export default ArticalSlide;
