import React from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import Container from '../Components/Container'
import Flex from '../Components/Flex'
import authordet from '../assets/Artical_img.png'
import { TfiWrite } from "react-icons/tfi";
import { BiLike } from "react-icons/bi";
import { AiOutlineFundView } from "react-icons/ai";
import AutherDetailSlider from '../Components/AutherDetailSlider'
import { IoSearchOutline } from "react-icons/io5";
import travel_img from "../assets/Image_three.png";
import { GoDotFill } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { SiInstagram } from "react-icons/si";
import banner from '../assets/Banner.png'
const AutherDetails = () => {
  return (
    <section>
        <Breadcrumb title="Author Details"/>
        <Container>
        <Flex className={`mt-[50px] flex-col lg:flex-row gap-10`}>
        <div className='w-full mx-auto lg:w-8/12'>
         <Flex className={`items-center gap-[30px] flex-col md:flex-row`}>
            <img className='w-[170px] mx-auto' src={authordet} alt="" />
            <Flex className={`flex-col gap-4`}>
                <h1 className='font-prompt font-semibold text-[24px] lg:text-[40px] '>Carlos Rykergon</h1>
                <h4 className='font-medium font-inter text-[14px] text-main'>Creative,  Lifestyle,  Fashion</h4>
                <p className='text-[16px] font-inter font-normal text-[#66707e]'>Morbi quis elementum ex, id commodo odio. In maximus, augue euquami vestibulum gomat dictum, lorem nibh faucibus quam.</p>
                <Flex className={`items-center gap-2 flex-wrap`}>
                    <Flex className={`items-center gap-2`}>
                    <TfiWrite className='text-[16px] text-main' />
                    <h5 className='font-normal font-prompt text-[16px] text-hash'>Total Post: <span className='text-[#66707e] font-semibold'>209</span></h5>  
                    </Flex>
                    <Flex className={`items-center gap-2`}>
                    <AiOutlineFundView className='text-[16px] text-main' />
                    <h5 className='font-normal font-prompt text-[16px] text-hash'>Total View: <span className='text-[#66707e] font-semibold'>25199 </span></h5>  
                    </Flex>
                    <Flex className={`items-center gap-2`}>
                    <BiLike className='text-[16px] text-main' />
                    <h5 className='font-normal font-prompt text-[16px] text-hash'>Like: <span className='text-[#66707e] font-semibold'>11957</span></h5>  
                    </Flex>
                </Flex>
                
            </Flex>
         </Flex>
         <div className='w-full h-[1px] bg-secondary my-10'></div>
        <AutherDetailSlider/>
        </div>
          <div className='w-full mx-auto lg:w-4/12'>
          <Flex className={`flex-col  gap-10`}>
          {/* search part */}
            <div className='py-[30px] px-[25px] border border-secondary shadow-sm rounded-[15px]'>
            <h1 className="font-prompt font-medium text-[15px] text-black uppercase">
            Quick Search
              </h1>
              <div className="md:w-[320px] h-[1px] bg-secondary mx-auto my-4 w-full"></div>
              <div className='relative w-full mt-4 md:w-[320px] md:mt-0 py-[15px] px-[20px] bg-[#FFFAF0] border border-secondary rounded-full' >
                  <input className='bg-transparent outline-none placeholder:font-inter placeholder:font-normal placeholder:text-[12px] placeholder:text-hash' placeholder='Search here...' type="text" />
                  <IoSearchOutline className='text-[20px] text-hash absolute top-[18px] right-[18px]' />
                </div>
            </div>
             {/* search part */}
             {/* tranding blog */}
             <div className="py-[30px] px-5 border border-secondary rounded-[20px]">
              <h1 className="font-prompt font-medium text-[15px] text-black uppercase">
              Trending blog
              </h1>
              <div className="md:w-[320px] h-[1px] bg-secondary mx-auto my-4 w-full"></div>
              <Flex className={`flex-col gap-3 items-center`}>
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

             {/* tranding blog */}
              {/* stay part */}

              <div className="py-[30px] px-5 border border-secondary rounded-[20px] my-6">
               <h1 className="font-prompt font-medium text-[15px] text-black uppercase">
               Stay Conected
              </h1>
              <div className="md:w-[320px] h-[1px] bg-secondary mx-auto my-4 w-full"></div>
              <Flex className={` gap-5 flex-col`}>
                <Flex className={`items-center gap-10 group md:gap-[80px]`}>
                    <Flex className={`py-[10px] px-[24px] bg-secondary rounded-full items-center gap-2 group-hover:bg-main`}>
                    <FaFacebookF className="text-[14px] text-black group-hover:text-white" />
                    <h4 className="font-prompt font-normal text-[14px] text-black group-hover:text-white uppercase">Facebook</h4> 
                    </Flex>
                    <h4 className="font-prompt font-medium text-[14px] text-black group-hover:text-main">3.5K Like</h4>
                </Flex>
                <Flex className={`items-center gap-10 group md:gap-[80px]`}>
                    <Flex className={`py-[10px] px-[24px] bg-secondary rounded-full items-center gap-2 group-hover:bg-main`}>
                    <FaTwitter className="text-[14px] text-black group-hover:text-white" />
                    <h4 className="font-prompt font-normal text-[14px] text-black group-hover:text-white uppercase">Twitter</h4> 
                    </Flex>
                    <h4 className="font-prompt font-medium text-[14px] text-black group-hover:text-main">60K Follower</h4>
                </Flex>
                <Flex className={`items-center gap-10 group md:gap-[80px]`}>
                    <Flex className={`py-[10px] px-[24px] bg-secondary rounded-full items-center gap-2 group-hover:bg-main`}>
                    <FaPinterestP className="text-[14px] text-black group-hover:text-white" />
                    <h4 className="font-prompt font-normal text-[14px] text-black group-hover:text-white uppercase">pinterest</h4> 
                    </Flex>
                    <h4 className="font-prompt font-medium text-[14px] text-black group-hover:text-main">25K Follower</h4>
                </Flex>
                <Flex className={`items-center gap-10 group md:gap-[80px]`}>
                    <Flex className={`py-[10px] px-[24px] bg-secondary rounded-full items-center gap-2 group-hover:bg-main`}>
                    <SiInstagram className="text-[14px] text-black group-hover:text-white" />
                    <h4 className="font-prompt font-normal text-[14px] text-black group-hover:text-white">Instagram</h4> 
                    </Flex>
                    <h4 className="font-prompt font-medium text-[14px] text-black group-hover:text-main">3.5K Like</h4>
                </Flex>
               </Flex>
               </div>
                 {/* stay part */}
                 {/* banner */}
                 <img className="lg:mt-12" src={banner} alt="" />
          </Flex>
          </div>
        </Flex>
        </Container>
    </section>
  )
}

export default AutherDetails