import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import Title from "./Title";
import { BsArrowUpRightCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import Image from "../assets/Image.png";
import { MdOutlinePlayCircle } from "react-icons/md";
import { ImFire } from "react-icons/im";
import { IoIosClock } from "react-icons/io";
import { IoLogoWechat } from "react-icons/io5";
import { GoDotFill } from "react-icons/go";
import { FaArrowRightLong } from "react-icons/fa6";
const FeaturedVideo = () => {
  return (
    <section className="my-[100px]">
      <Container>
        {/* title */}
        <Flex className={`items-center justify-between mb-[60px]`}>
          <Title title="Featured Video" subtitle="Video Post" />
          <Flex className={`items-center gap-1`}>
            <h5 className="font-prompt font-medium text-[18px] text-main">
              <Link>Explore All</Link>
            </h5>
            <BsArrowUpRightCircle className="text-[20px] text-main" />
          </Flex>
        </Flex>
        {/* title */}
        <Flex className={`flex-col lg:flex-row gap-[30px]`}>
          {/* 1st part */}
          <div className="w-full mx-auto lg:w-7/12">
            <div className="w-full">
              {/* img part */}
              <div className="relative w-full">
                <img className="w-full" src={Image} alt="" />
                <MdOutlinePlayCircle className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-[80px] text-white" />
              </div>
              {/* img part */}
              <div className="pt-10">
                {/* icon part */}
                <Flex className={`items-center gap-4`}>
                  <Flex className={`items-center gap-2`}>
                  <ImFire className="text-[14px] text-hash" />
                  <span className="font-inter font-medium text-[14px] text-hash">3.9K View</span>
                  </Flex>
                  <div className="w-[2px] h-[10px] rounded-sm bg-main"></div>
                  <Flex className={`items-center gap-2`}>
                  <IoIosClock className="text-[14px] text-hash" />
                  <span className="font-inter font-medium text-[14px] text-hash">3.5 Min reads</span>
                  </Flex>
                  <div className="w-[2px] h-[10px] rounded-sm bg-main"></div>
                  <Flex className={`items-center gap-2`}>
                  <IoLogoWechat className="text-[14px] text-hash" />
                  <span className="font-inter font-medium text-[14px] text-hash">3.840 Comment</span>
                  </Flex>
                </Flex>
                   {/* icon part */}
                   <h1 className="font-prompt font-semibold text-[24px] lg:text-[32px] my-[30px]">Our Begin Now To Beingonl What Your Will Be own fully gone.</h1>
                  <p className="font-inter font-normal text-[16px] text-hash leading-[35px]">
                  Aliquam erat volutpat. Ut scelerisque elementum nisi, a fermentumon odiona gouvikoi tincidunt vel. Proin velit est, elementum sed hendrerit quisesa mattis at nisol. Morbus condimentum massa id tellus fringilla.
                  </p>
                 <Flex className={`items-center mt-10`}>
                  <span className="py-[14px] px-[25px] border border-secondary rounded-l-full font-inter font-medium text-[14px] text-main">By Vigola Morgan</span>
                  <span className="py-[14px] px-[25px] border border-secondary rounded-r-full font-inter font-medium text-[14px] text-main">Novembar 30, 2022</span>
                 </Flex>
              </div>
            </div>
          </div>
          {/* 1st part */}
          {/* 2nd part */}
          <div className="w-full mx-auto lg:w-5/12">
          <Flex className={`flex-col gap-10`}>
           <div className="w-full">
             {/* img part */}
             <div className="relative w-full">
                <img className="w-full" src={Image} alt="" />
                <MdOutlinePlayCircle className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-[80px] text-white" />
              </div>
              {/* img part */}
              <Flex className={`items-center justify-center flex-col gap-4 px-2 py-3`}>
              <Flex className="items-center gap-2 py-3">
            <h5 className="font-medium font-inter text-[12px]  text-[#101010] opacity-30 hover:text-black duration-150">
            By Connor Carson 
            </h5>
            <GoDotFill className="text-[12px]  text-main" />
            <h5 className="font-medium font-inter text-[12px] text-[#101010] opacity-30 hover:text-black duration-150">
            Nov 10, 2022
            </h5>
            <GoDotFill className="text-[12px]  text-main" />
            <h5 className="font-medium font-inter text-[12px]  text-[#101010] opacity-30 hover:text-black duration-150">
            Life Style
            </h5>
          </Flex>
          <h1 className="font-semibold font-prompt text-[28px] w-full text-center">
          Nunc scelerisque ante oltaga consequat elementum.
          </h1>
          <Flex className="items-center gap-3 md:gap-[30px]">
          <Flex className={`items-center gap-2`}>
                  <IoIosClock className="text-[14px] text-hash" />
                  <span className="font-inter font-medium text-[14px] text-hash">3.5 Min reads</span>
                  </Flex>
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
              </Flex>
            </div>              

            <div className="w-full">
             {/* img part */}
             <div className="relative w-full">
                <img className="w-full" src={Image} alt="" />
                <MdOutlinePlayCircle className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 text-[80px] text-white" />
              </div>
              {/* img part */}
              <Flex className={`items-center justify-center flex-col gap-4 px-2 py-3`}>
              <Flex className="items-center gap-2 py-3">
            <h5 className="font-medium font-inter text-[12px]  text-[#101010] opacity-30 hover:text-black duration-150">
            By Connor Carson 
            </h5>
            <GoDotFill className="text-[12px]  text-main" />
            <h5 className="font-medium font-inter text-[12px] text-[#101010] opacity-30 hover:text-black duration-150">
            Nov 10, 2022
            </h5>
            <GoDotFill className="text-[12px]  text-main" />
            <h5 className="font-medium font-inter text-[12px]  text-[#101010] opacity-30 hover:text-black duration-150">
            Life Style
            </h5>
          </Flex>
          <h1 className="font-semibold font-prompt text-[28px] w-full text-center">
          Nunc scelerisque ante oltaga consequat elementum.
          </h1>
          <Flex className="items-center gap-3 md:gap-[30px]">
          <Flex className={`items-center gap-2`}>
                  <IoIosClock className="text-[14px] text-hash" />
                  <span className="font-inter font-medium text-[14px] text-hash">3.5 Min reads</span>
                  </Flex>
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
              </Flex>
            </div> 
          </Flex>
          
          </div>
          {/* 2nd part */}
        </Flex>
       <Flex className={`items-center mt-[60px] gap-[30px] flex-col lg:flex-row`}>
         <div className="px-[25px] py-[35px] border border-secondary rounded-[10px]">
         <Flex className="items-center gap-2 py-3">
            <h5 className="font-medium font-inter text-[12px]  text-[#101010] opacity-30 hover:text-black duration-150">
            By Connor Carson 
            </h5>
            
            <GoDotFill className="text-[12px]  text-main" />
            <h5 className="font-medium font-inter text-[12px]  text-[#101010] opacity-30 hover:text-black duration-150">
            Life Style
            </h5>
          </Flex>
          <h1 className="font-semibold font-prompt text-[24px] w-full md:w-[320px]">
          luctus et ultrices posue ret cubilia curaen.
          </h1>
          <Flex className="items-center gap-3 md:gap-[30px] mt-2">
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
         <div className="px-[25px] py-[35px] border border-secondary rounded-[10px]">
         <Flex className="items-center gap-2 py-3">
            <h5 className="font-medium font-inter text-[12px]  text-[#101010] opacity-30 hover:text-black duration-150">
            By Connor Carson 
            </h5>
            
            <GoDotFill className="text-[12px]  text-main" />
            <h5 className="font-medium font-inter text-[12px]  text-[#101010] opacity-30 hover:text-black duration-150">
            Life Style
            </h5>
          </Flex>
          <h1 className="font-semibold font-prompt text-[24px] w-full md:w-[320px]">
          luctus et ultrices posue ret cubilia curaen.
          </h1>
          <Flex className="items-center gap-3 md:gap-[30px] mt-2">
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
         <div className="px-[25px] py-[35px] border border-secondary rounded-[10px]">
         <Flex className="items-center gap-2 py-3">
            <h5 className="font-medium font-inter text-[12px]  text-[#101010] opacity-30 hover:text-black duration-150">
            By Connor Carson 
            </h5>
            
            <GoDotFill className="text-[12px]  text-main" />
            <h5 className="font-medium font-inter text-[12px]  text-[#101010] opacity-30 hover:text-black duration-150">
            Life Style
            </h5>
          </Flex>
          <h1 className="font-semibold font-prompt text-[24px] w-full md:w-[320px]">
          luctus et ultrices posue ret cubilia curaen.
          </h1>
          <Flex className="items-center gap-3 md:gap-[30px] mt-2">
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
       </Flex>
      </Container>
    </section>
  );
};

export default FeaturedVideo;
