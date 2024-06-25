import React from 'react'
import footer_bg from '../assets/footer_bg.png'
import Container from './Container'
import Flex from './Flex'
import footer_logo from '../assets/footer_logo.png'
import travel_img from "../assets/Image_three.png";
import { GoDotFill } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import { Link } from 'react-router-dom'
const Footer = () => {
  return (
    <section style={{backgroundImage:`url(${footer_bg})`}}
    className='object-cover pt-[90px] pb-6 px-3'
    >
   <Container>
    <Flex className={`gap-[50px] flex-col lg:flex-row`}>
        <div className='w-full lg:w-4/12'>
        <Flex className={`w-full flex-col gap-4`}>
          <img className='w-[170px]' src={footer_logo} alt="" />  
          <h2 className='font-prompt font-semibold text-[26px] w-full lg:w-[267px] uppercase'>We Would Love to Hear From You.</h2>
            <label className='font-semibold font-inter text-[15px] text-main'>Any question for us?</label>
          <div className='relative w-full py-[12px] border-b-[2px] border-secondary'>
            <input className='font-inter font-medium text-[10px] bg-transparent text-hash placeholder:font-inter placeholder:font-medium w-full border-none outline-none' placeholder='Enter Your Email...' type="text" />
            <button className='font-semibold font-inter text-[12px] absolute top-[15px] right-0'>Send<span className='text-main'>*</span></button>
          </div>
        </Flex>
        </div>
        <div className='w-full lg:w-4/12'>
        <h3 className='font-medium font-prompt text-[22px] text-main'>Top Article This Week</h3>
        <Flex className={`flex-col gap-5 mt-6`}>
                <Flex className={`gap-3`}>
                  <img className="w-[110px]" src={travel_img} alt="pick" />
                  <Flex className={`flex-col gap-2`}>
                    <h3 className="font-prompt font-semibold text-[16px] capitalize">
                      gravida orci sed jaritob laoreet tellus.
                    </h3>
                    <Flex className="items-center gap-2">
                      <h5 className="font-medium font-inter text-[12px]  text-hash hover:text-black duration-150">
                        Nov 10, 2022
                      </h5>
                      <GoDotFill className="text-[12px]  text-main" />
                      <h5 className="font-medium font-inter text-[12px] text-hash hover:text-black duration-150">
                        500 Comment
                      </h5>
                    </Flex>
                  </Flex>
                </Flex>
                <Flex className={`gap-3`}>
                  <img className="w-[110px]" src={travel_img} alt="pick" />
                  <Flex className={`flex-col gap-2`}>
                    <h3 className="font-prompt font-semibold text-[16px] capitalize">
                      gravida orci sed jaritob laoreet tellus.
                    </h3>
                    <Flex className="items-center gap-2">
                      <h5 className="font-medium font-inter text-[12px]  text-hash hover:text-black duration-150">
                        Nov 10, 2022
                      </h5>
                      <GoDotFill className="text-[12px]  text-main" />
                      <h5 className="font-medium font-inter text-[12px] text-hash hover:text-black duration-150">
                        500 Comment
                      </h5>
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
        </div>
        <div className='w-full lg:w-2/12'>
        <h3 className='font-medium font-prompt text-[22px] text-main mb-6'>Quick Link</h3>
        <ul>
            <li className='font-normal font-inter text-[18px] text-hash my-3'>About</li>
            <li className='font-normal font-inter text-[18px] text-hash my-3'>Topic</li>
            <li className='font-normal font-inter text-[18px] text-hash my-3'>Post</li>
            <li className='font-normal font-inter text-[18px] text-hash my-3'>Feature</li>
            <li className='font-normal font-inter text-[18px] text-hash my-3'>Contact</li>
        </ul>
        </div>
        <div className='w-full lg:w-3/12'>
        <h3 className='font-medium font-prompt text-[22px] text-main mb-6'>Social Media</h3> 
        <Flex className={` gap-5 flex-col`}>
                    <Flex className={` items-center gap-2 group`}>
                    <FaFacebookF className="text-[18px] text-hash group-hover:text-main" />
                    <h4 className="font-prompt font-normal text-[18px] text-hash group-hover:text-main uppercase">Facebook</h4> 
                    </Flex>
                 
                
                    <Flex className={` items-center gap-2 group`}>
                    <FaTwitter className="text-[18px] text-hash group-hover:text-main" />
                    <h4 className="font-prompt font-normal text-[18px] text-hash group-hover:text-main uppercase">Twitter</h4> 
                    </Flex>
                    <Flex className={` items-center gap-2 group`}>
                    <FaPinterestP className="text-[18px] text-hash group-hover:text-main" />
                    <h4 className="font-prompt font-normal text-[18px] text-hash group-hover:text-main uppercase">pinterest</h4> 
                    </Flex>
                    <Flex className={` items-center gap-2 group`}>
                    <SiInstagram className="text-[18px] text-hash group-hover:text-main" />
                    <h4 className="font-prompt font-normal text-[18px] text-hash group-hover:text-main">Instagram</h4> 
                    </Flex>
               </Flex>
        </div>
    </Flex>
    <Flex className={`mt-[90px] w-full py-[25px] border-y border-secondary px-3 justify-between flex-col md:flex-row items-center`}>
        <div className='w-full lg:w-1/2'>
        <h3 className='font-medium font-prompt text-[22px] text-main'>Help Center</h3>
        </div>
        <div className='w-full lg:w-1/2'>
        <ul className='flex w-full gap-2 mt-3 md:justify-end md:mt-0 md:gap-5'>
            <li className='font-normal font-inter text-[12px] text-hash'><Link>Privacy Policy</Link></li>
            <li className='font-normal font-inter text-[12px] text-hash'><Link>Terms & Conditions</Link></li>
            <li className='font-normal font-inter text-[12px] text-hash'><Link>Services</Link></li>
            <li className='font-normal font-inter text-[12px] text-hash'><Link>Help</Link></li>
            
        </ul>
        </div>
    </Flex>
   
        <h3 className='font-prompt font-normal text-[14px] text-hash text-center mt-5'>© 2023 Blogxton is Proudly Powered by Egens Lab.</h3>
    
   </Container>
    </section>
  )
}

export default Footer